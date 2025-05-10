---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-04-05T22:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-04-05T22:48:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 143
toc: false
icon: ""
---

Publishers and Subscribers are good but what if you want a two-way style of communication between nodes?

Server and Clients are similar to Publisher and Subscribers where they have a `Service` and Nodes can communicate through those services.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGAK47OV%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdyd%2Fu6%2BPrivjvWO6vpoSThCWX10SXdd%2FvoecnBrGdkwIhAO%2BJ5%2Bd9KC1w7kWhlsdkDGxe3TuBb2OObxgCE8JN%2F50HKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUBbXUmzjhpN56i3gq3AN2J%2FdCDYlDMPO%2FNfHFcsnOYQEN12pgtYJX14YOSNIq8nn11RYnbsgtsCOB%2FcO6HeXWgdm%2F2BLTyofoHq85Nf2xw38OpP2HhYo3Z4jTRsfqWOK%2FDR3ANR7MLnfe5IzK0hclhKZoWWQV8vanXSy%2FC%2FEWl2WhtjVYTp4YHXfqoiQkYKsCs%2BxRZywT5opQBaPQjL8f7Ch0pR7sonEd7uFjnIRBftQtYT9aGWYwf7dMHBuegFNzk23Ie14nPN7q1bEmyYiDORaQu5kD7KYDJTKyejfu4c%2Bq9wlf36Hya4hb8OxSmxuj3aM9bbZ6IwC6xMSPpvlnHZBHze9zlQNuu7Rfn%2BvWDbd8HfBeN4dyPqHa66lkqsWQz0dFxvRicAwVGLnI64cODJGDSoxepGcEsVw3%2Fymi6YJ8kbCARm1B%2B5hl8SEqNJ3FOdwjhKXVWdz3PHRasgRhum3rmcvcntJ2%2B3g08qrF4H4JFXqw6lVggNO%2BTDzzQR7Xpc%2FHq8z4I4G9V778JmGxJAcfX3fk6Z%2FOjaFyoQI0QZGB0GSVyD72hehGAjyO3Wuj%2FjvmexfWEDB23xcTXFwODbG6M3uYONINHJkt16YBHnfgWbkvUADaW1gDzeMr75JZVsBQODRkqWU8NTCiqv3ABjqkAZ1eZzNQxYnaR2xN%2BVvJPKQEoR56lsl4Q9YN9xLEHrZR%2BwICY8w4TRwfvyU9pQLsCJOW7treyJ%2FI%2B2uRYJ3FgxqyKRCMhbo%2BQ8c12U7%2FzRzLoOSoFYy9Gjumit81kX9MBN13zR%2F%2FyQl306iUa3vSkyQh6nwDW%2BPoxPsJXYEJhAh1CHd6rnbQTjz67JrGIvWB9XTmQG%2BtJ2hS39YRBenIXz38cIIi&X-Amz-Signature=69569c460587fdfb6a4eef1f066449b59dd452d53004df34c59aa61ae082b5d0&X-Amz-SignedHeaders=host&x-id=GetObject)

![Service-MultipleServiceClient.gif](https://docs.ros.org/en/humble/_images/Service-MultipleServiceClient.gif)

Let's make a basic service where it just adds 2 numbers

# Server

create a file called `server.py` and import the `ROS` libraries:

```python
from example_interfaces.srv import AddTwoInts

import rclpy
from rclpy.node import Node
```

Then create a class `MinimalService` that implements `Node`

```python
class MinimalService(Node):
```

in the constructor run the parent constructor and create a service object:

```python
    def __init__(self):
        super().__init__("minimal_service")
        self.srv = self.create_service(AddTwoInts, "add_two_ints", self.add_two_ints_callback)
```

The service object takes the type it expects, the name, and the function to handle the request.

Next, create the function to handle the request and have it return the result of the sum.

```python
    def add_two_ints_callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info("Incoming request\na: "+ str(request.a) +" b: " + str(request.b))
        return response
```

Then outside of the class, we want to start the node:

```python
def main():
    rclpy.init()                        # initializes the ROS library

    minimal_service = MinimalService()  # creates our MinimalService obj

    rclpy.spin(minimal_service)         # causes minimal_service to loop

    rclpy.shutdown()                    # deinits the ROS library


if __name__ == '__main__':
    main()
```

## Solution

```python
from example_interfaces.srv import AddTwoInts

import rclpy
from rclpy.node import Node


class MinimalService(Node):
    def __init__(self):
        super().__init__("minimal_service")
        self.srv = self.create_service(AddTwoInts, "add_two_ints", self.add_two_ints_callback)

    def add_two_ints_callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info("Incoming request\na: "+ str(request.a) +" b: " + str(request.b))
        return response


def main():
    rclpy.init()                        # initializes the ROS library

    minimal_service = MinimalService()  # creates our MinimalService obj

    rclpy.spin(minimal_service)         # causes minimal_service to loop

    rclpy.shutdown()                    # deinits the ROS library


if __name__ == '__main__':
    main()
```

# Client

For the client lets have it where it takes in the two numbers as input arguments before we run it: `python3 client.py 2 3`

create a file called client`.py` and import the `ROS` libraries:

```python
import sys

from example_interfaces.srv import AddTwoInts
import rclpy
from rclpy.node import Node
```

create a class called `MinimalClientAsync` and extend the `Node` class

```python
class MinimalClientAsync(Node):
```

in the constructor run the parent class’s constructor and create a client object and a request object.

Then we try to connect the client with the service by using `while`. This will search for 1 second for the service `"add_two_ints"` before it gives up. 

```python
    def __init__(self):
        super().__init__("minimal_client_async")
        self.cli = self.create_client(AddTwoInts, "add_two_ints")
        while not self.cli.wait_for_service(timeout_sec=1.0):
            self.get_logger().info("service not available, waiting again...")
        self.req = AddTwoInts.Request()

```

Next lets create a function, `send_request()` to take in two numbers and call the service:

```python
	def send_request(self, a, b):
		self.req.a = a
		self.req.b = b
		return self.cli.call_async(self.req) # uses client object to call the service
```

Then outside of the class we want to run our new Node so first init the `ROS` library with:

```python
rclpy.init()
```

Then create a `MinimalClientAsync()` object.

We are then going to take the two input arguments with `sys.argv[1]` and `sys.argv[2]` 

plug them into `send_request` and wait for the result

To wait for a response from the service we use `rclpy.spin_until_future_complete()`

It takes in 2 arguments, the Client Node and the variable that holds the result.

finally, we get our results with `future.result()` and print it out.

```python

minimal_client = MinimalClientAsync()
future = minimal_client.send_request(int(sys.argv[1]), int(sys.argv[2]))
rclpy.spin_until_future_complete(minimal_client, future)
response = future.result()
minimal_client.get_logger().info("Result of add_two_ints: for "+ sys.argv[1] + " + " + sys.argv[2] + " = " + str(response.sum))
```

Then we shut everything down:

```python
minimal_client.destroy_node()
rclpy.shutdown()
```

## Solution

```python
import sys

from example_interfaces.srv import AddTwoInts
import rclpy
from rclpy.node import Node


class MinimalClientAsync(Node):
    def __init__(self):
        super().__init__("minimal_client_async")
        self.cli = self.create_client(AddTwoInts, "add_two_ints")
        while not self.cli.wait_for_service(timeout_sec=1.0):
            self.get_logger().info("service not available, waiting again...")
        self.req = AddTwoInts.Request()

    def send_request(self, a, b):
        self.req.a = a
        self.req.b = b
        return self.cli.call_async(self.req)


def main():
    rclpy.init()

    minimal_client = MinimalClientAsync()
    future = minimal_client.send_request(int(sys.argv[1]), int(sys.argv[2]))
    rclpy.spin_until_future_complete(minimal_client, future)
    response = future.result()
    minimal_client.get_logger().info("Result of add_two_ints: for "+ sys.argv[1] + " + " + sys.argv[2] + " = " + str(response.sum))

    minimal_client.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Now that we have created a Server and Client we can run them both to see them in action

In two different terminals run the Server first then the client

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGAK47OV%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdyd%2Fu6%2BPrivjvWO6vpoSThCWX10SXdd%2FvoecnBrGdkwIhAO%2BJ5%2Bd9KC1w7kWhlsdkDGxe3TuBb2OObxgCE8JN%2F50HKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUBbXUmzjhpN56i3gq3AN2J%2FdCDYlDMPO%2FNfHFcsnOYQEN12pgtYJX14YOSNIq8nn11RYnbsgtsCOB%2FcO6HeXWgdm%2F2BLTyofoHq85Nf2xw38OpP2HhYo3Z4jTRsfqWOK%2FDR3ANR7MLnfe5IzK0hclhKZoWWQV8vanXSy%2FC%2FEWl2WhtjVYTp4YHXfqoiQkYKsCs%2BxRZywT5opQBaPQjL8f7Ch0pR7sonEd7uFjnIRBftQtYT9aGWYwf7dMHBuegFNzk23Ie14nPN7q1bEmyYiDORaQu5kD7KYDJTKyejfu4c%2Bq9wlf36Hya4hb8OxSmxuj3aM9bbZ6IwC6xMSPpvlnHZBHze9zlQNuu7Rfn%2BvWDbd8HfBeN4dyPqHa66lkqsWQz0dFxvRicAwVGLnI64cODJGDSoxepGcEsVw3%2Fymi6YJ8kbCARm1B%2B5hl8SEqNJ3FOdwjhKXVWdz3PHRasgRhum3rmcvcntJ2%2B3g08qrF4H4JFXqw6lVggNO%2BTDzzQR7Xpc%2FHq8z4I4G9V778JmGxJAcfX3fk6Z%2FOjaFyoQI0QZGB0GSVyD72hehGAjyO3Wuj%2FjvmexfWEDB23xcTXFwODbG6M3uYONINHJkt16YBHnfgWbkvUADaW1gDzeMr75JZVsBQODRkqWU8NTCiqv3ABjqkAZ1eZzNQxYnaR2xN%2BVvJPKQEoR56lsl4Q9YN9xLEHrZR%2BwICY8w4TRwfvyU9pQLsCJOW7treyJ%2FI%2B2uRYJ3FgxqyKRCMhbo%2BQ8c12U7%2FzRzLoOSoFYy9Gjumit81kX9MBN13zR%2F%2FyQl306iUa3vSkyQh6nwDW%2BPoxPsJXYEJhAh1CHd6rnbQTjz67JrGIvWB9XTmQG%2BtJ2hS39YRBenIXz38cIIi&X-Amz-Signature=0e10a69677a6b32ee56803901ed5ef02b59ba7cdd710692e349e10184c17e5d8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGAK47OV%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdyd%2Fu6%2BPrivjvWO6vpoSThCWX10SXdd%2FvoecnBrGdkwIhAO%2BJ5%2Bd9KC1w7kWhlsdkDGxe3TuBb2OObxgCE8JN%2F50HKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUBbXUmzjhpN56i3gq3AN2J%2FdCDYlDMPO%2FNfHFcsnOYQEN12pgtYJX14YOSNIq8nn11RYnbsgtsCOB%2FcO6HeXWgdm%2F2BLTyofoHq85Nf2xw38OpP2HhYo3Z4jTRsfqWOK%2FDR3ANR7MLnfe5IzK0hclhKZoWWQV8vanXSy%2FC%2FEWl2WhtjVYTp4YHXfqoiQkYKsCs%2BxRZywT5opQBaPQjL8f7Ch0pR7sonEd7uFjnIRBftQtYT9aGWYwf7dMHBuegFNzk23Ie14nPN7q1bEmyYiDORaQu5kD7KYDJTKyejfu4c%2Bq9wlf36Hya4hb8OxSmxuj3aM9bbZ6IwC6xMSPpvlnHZBHze9zlQNuu7Rfn%2BvWDbd8HfBeN4dyPqHa66lkqsWQz0dFxvRicAwVGLnI64cODJGDSoxepGcEsVw3%2Fymi6YJ8kbCARm1B%2B5hl8SEqNJ3FOdwjhKXVWdz3PHRasgRhum3rmcvcntJ2%2B3g08qrF4H4JFXqw6lVggNO%2BTDzzQR7Xpc%2FHq8z4I4G9V778JmGxJAcfX3fk6Z%2FOjaFyoQI0QZGB0GSVyD72hehGAjyO3Wuj%2FjvmexfWEDB23xcTXFwODbG6M3uYONINHJkt16YBHnfgWbkvUADaW1gDzeMr75JZVsBQODRkqWU8NTCiqv3ABjqkAZ1eZzNQxYnaR2xN%2BVvJPKQEoR56lsl4Q9YN9xLEHrZR%2BwICY8w4TRwfvyU9pQLsCJOW7treyJ%2FI%2B2uRYJ3FgxqyKRCMhbo%2BQ8c12U7%2FzRzLoOSoFYy9Gjumit81kX9MBN13zR%2F%2FyQl306iUa3vSkyQh6nwDW%2BPoxPsJXYEJhAh1CHd6rnbQTjz67JrGIvWB9XTmQG%2BtJ2hS39YRBenIXz38cIIi&X-Amz-Signature=8ad3e690c6a343a5e7b77558ac75448f1b520fe1b156c493a15d2c9f560f8004&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGAK47OV%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdyd%2Fu6%2BPrivjvWO6vpoSThCWX10SXdd%2FvoecnBrGdkwIhAO%2BJ5%2Bd9KC1w7kWhlsdkDGxe3TuBb2OObxgCE8JN%2F50HKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUBbXUmzjhpN56i3gq3AN2J%2FdCDYlDMPO%2FNfHFcsnOYQEN12pgtYJX14YOSNIq8nn11RYnbsgtsCOB%2FcO6HeXWgdm%2F2BLTyofoHq85Nf2xw38OpP2HhYo3Z4jTRsfqWOK%2FDR3ANR7MLnfe5IzK0hclhKZoWWQV8vanXSy%2FC%2FEWl2WhtjVYTp4YHXfqoiQkYKsCs%2BxRZywT5opQBaPQjL8f7Ch0pR7sonEd7uFjnIRBftQtYT9aGWYwf7dMHBuegFNzk23Ie14nPN7q1bEmyYiDORaQu5kD7KYDJTKyejfu4c%2Bq9wlf36Hya4hb8OxSmxuj3aM9bbZ6IwC6xMSPpvlnHZBHze9zlQNuu7Rfn%2BvWDbd8HfBeN4dyPqHa66lkqsWQz0dFxvRicAwVGLnI64cODJGDSoxepGcEsVw3%2Fymi6YJ8kbCARm1B%2B5hl8SEqNJ3FOdwjhKXVWdz3PHRasgRhum3rmcvcntJ2%2B3g08qrF4H4JFXqw6lVggNO%2BTDzzQR7Xpc%2FHq8z4I4G9V778JmGxJAcfX3fk6Z%2FOjaFyoQI0QZGB0GSVyD72hehGAjyO3Wuj%2FjvmexfWEDB23xcTXFwODbG6M3uYONINHJkt16YBHnfgWbkvUADaW1gDzeMr75JZVsBQODRkqWU8NTCiqv3ABjqkAZ1eZzNQxYnaR2xN%2BVvJPKQEoR56lsl4Q9YN9xLEHrZR%2BwICY8w4TRwfvyU9pQLsCJOW7treyJ%2FI%2B2uRYJ3FgxqyKRCMhbo%2BQ8c12U7%2FzRzLoOSoFYy9Gjumit81kX9MBN13zR%2F%2FyQl306iUa3vSkyQh6nwDW%2BPoxPsJXYEJhAh1CHd6rnbQTjz67JrGIvWB9XTmQG%2BtJ2hS39YRBenIXz38cIIi&X-Amz-Signature=d45816dbccfeef1a800043dd7f21061f69a808f24ab6853b28302491bc46cda1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGAK47OV%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdyd%2Fu6%2BPrivjvWO6vpoSThCWX10SXdd%2FvoecnBrGdkwIhAO%2BJ5%2Bd9KC1w7kWhlsdkDGxe3TuBb2OObxgCE8JN%2F50HKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUBbXUmzjhpN56i3gq3AN2J%2FdCDYlDMPO%2FNfHFcsnOYQEN12pgtYJX14YOSNIq8nn11RYnbsgtsCOB%2FcO6HeXWgdm%2F2BLTyofoHq85Nf2xw38OpP2HhYo3Z4jTRsfqWOK%2FDR3ANR7MLnfe5IzK0hclhKZoWWQV8vanXSy%2FC%2FEWl2WhtjVYTp4YHXfqoiQkYKsCs%2BxRZywT5opQBaPQjL8f7Ch0pR7sonEd7uFjnIRBftQtYT9aGWYwf7dMHBuegFNzk23Ie14nPN7q1bEmyYiDORaQu5kD7KYDJTKyejfu4c%2Bq9wlf36Hya4hb8OxSmxuj3aM9bbZ6IwC6xMSPpvlnHZBHze9zlQNuu7Rfn%2BvWDbd8HfBeN4dyPqHa66lkqsWQz0dFxvRicAwVGLnI64cODJGDSoxepGcEsVw3%2Fymi6YJ8kbCARm1B%2B5hl8SEqNJ3FOdwjhKXVWdz3PHRasgRhum3rmcvcntJ2%2B3g08qrF4H4JFXqw6lVggNO%2BTDzzQR7Xpc%2FHq8z4I4G9V778JmGxJAcfX3fk6Z%2FOjaFyoQI0QZGB0GSVyD72hehGAjyO3Wuj%2FjvmexfWEDB23xcTXFwODbG6M3uYONINHJkt16YBHnfgWbkvUADaW1gDzeMr75JZVsBQODRkqWU8NTCiqv3ABjqkAZ1eZzNQxYnaR2xN%2BVvJPKQEoR56lsl4Q9YN9xLEHrZR%2BwICY8w4TRwfvyU9pQLsCJOW7treyJ%2FI%2B2uRYJ3FgxqyKRCMhbo%2BQ8c12U7%2FzRzLoOSoFYy9Gjumit81kX9MBN13zR%2F%2FyQl306iUa3vSkyQh6nwDW%2BPoxPsJXYEJhAh1CHd6rnbQTjz67JrGIvWB9XTmQG%2BtJ2hS39YRBenIXz38cIIi&X-Amz-Signature=c225a26fbe8ca481242e7666fce86279c77d063e5af8fe3b63d7ec8d6a759bfd&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
