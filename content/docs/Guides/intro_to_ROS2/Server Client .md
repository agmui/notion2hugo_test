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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U26V5JFZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAb%2BCHLC5YNgZ95K1hk2CmOmHAylAlZ7I3B0iS9jInj0AiAoI1k1bq8I74bhn8sZ3ohKDivvuS7TlG7mzhsfVQYwaSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk9UWR%2BiYs0fw46xiKtwD%2F7k02RKBqORHVjVuNIOCLamllOYRA5FYRzHOZxhwne1yGvkPtX0Kau3GLNOhilY0TQhbCVAJOvzoClGkDD%2FEA%2BkOS4lYYmDGIf4BSH9%2Bh7obSMCu7jmvbmVHmcaiieBko03St55Ll4hs25VxOfGqzjhsk8Z%2BHtXrnfJXk%2FpJp%2BR4jdSV6wh6stYwoVpo%2BKWI3IRluWDl8hCEGddvIt4IPmVX%2Bt4L%2BqplDu0Ao9B19SWgbFnlb4QFzzXtIWO2HkFNIgkFpC%2BojZ2Mgr2B5pHMwe3VxfZwse41Dcm8z2kjtYhkhYOPF9Uho58Nm1%2B86IeseJ43M1oU3WKIeVxwi25USeFs%2BNzYovckSs1hJ1ldg59TxlvQj0Qyiha55SthJOzCLbDOhn%2BS4UUNbdtUsOztwLnQ6HS1VVyyi8wfK%2FTC%2BRADIetVGv50J%2FbiLOiQJTCNeE8X4lD5abz4ngI9gpYHsZ%2FgTBy5OxbdvpLurVtmkwgw6hFPm2si1EwiNWVk%2F2JFtFP8h858ylbaQqvQ4hR3FQ7VJkn3nQBAZVodNUy8V9GqrQGF3zReow%2FhQRJfi%2BeoaToVqBwGpg45XtLEIVBsRmQwoXf98g8zfeNtdZbN3%2FgOq2IUy7TcCw33CiEwg5i6wwY6pgFFK1Nc5TgZmGzdgf4OGz31PTp1xPU1mVYYy3mGAt%2F4aAqqQSPgrX7WAe1pi8eH0zwJ8La85Z9DY6WcaSXHPAs%2B%2FnI0PfYUDqBROKKprDwj5jYnzkUhzqYfHHuW8ipxWcaTHrTCB%2F71L2UlYN9KTemJQ0ybd%2F56KKWjElKFhBwLsJ9UXjmkjPPS5Gpx5NXUGW1MKHIYO5nXX58dSZvDp6zoatOy4pVH&X-Amz-Signature=02560519e613797a37bc7039153bee6521b9ba02264069237b8d25292a4375db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U26V5JFZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAb%2BCHLC5YNgZ95K1hk2CmOmHAylAlZ7I3B0iS9jInj0AiAoI1k1bq8I74bhn8sZ3ohKDivvuS7TlG7mzhsfVQYwaSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk9UWR%2BiYs0fw46xiKtwD%2F7k02RKBqORHVjVuNIOCLamllOYRA5FYRzHOZxhwne1yGvkPtX0Kau3GLNOhilY0TQhbCVAJOvzoClGkDD%2FEA%2BkOS4lYYmDGIf4BSH9%2Bh7obSMCu7jmvbmVHmcaiieBko03St55Ll4hs25VxOfGqzjhsk8Z%2BHtXrnfJXk%2FpJp%2BR4jdSV6wh6stYwoVpo%2BKWI3IRluWDl8hCEGddvIt4IPmVX%2Bt4L%2BqplDu0Ao9B19SWgbFnlb4QFzzXtIWO2HkFNIgkFpC%2BojZ2Mgr2B5pHMwe3VxfZwse41Dcm8z2kjtYhkhYOPF9Uho58Nm1%2B86IeseJ43M1oU3WKIeVxwi25USeFs%2BNzYovckSs1hJ1ldg59TxlvQj0Qyiha55SthJOzCLbDOhn%2BS4UUNbdtUsOztwLnQ6HS1VVyyi8wfK%2FTC%2BRADIetVGv50J%2FbiLOiQJTCNeE8X4lD5abz4ngI9gpYHsZ%2FgTBy5OxbdvpLurVtmkwgw6hFPm2si1EwiNWVk%2F2JFtFP8h858ylbaQqvQ4hR3FQ7VJkn3nQBAZVodNUy8V9GqrQGF3zReow%2FhQRJfi%2BeoaToVqBwGpg45XtLEIVBsRmQwoXf98g8zfeNtdZbN3%2FgOq2IUy7TcCw33CiEwg5i6wwY6pgFFK1Nc5TgZmGzdgf4OGz31PTp1xPU1mVYYy3mGAt%2F4aAqqQSPgrX7WAe1pi8eH0zwJ8La85Z9DY6WcaSXHPAs%2B%2FnI0PfYUDqBROKKprDwj5jYnzkUhzqYfHHuW8ipxWcaTHrTCB%2F71L2UlYN9KTemJQ0ybd%2F56KKWjElKFhBwLsJ9UXjmkjPPS5Gpx5NXUGW1MKHIYO5nXX58dSZvDp6zoatOy4pVH&X-Amz-Signature=c20679ccc4f1ed5ae7132ae6355bf231f63d9b50ace1f21c3d51b30405010b05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U26V5JFZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAb%2BCHLC5YNgZ95K1hk2CmOmHAylAlZ7I3B0iS9jInj0AiAoI1k1bq8I74bhn8sZ3ohKDivvuS7TlG7mzhsfVQYwaSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk9UWR%2BiYs0fw46xiKtwD%2F7k02RKBqORHVjVuNIOCLamllOYRA5FYRzHOZxhwne1yGvkPtX0Kau3GLNOhilY0TQhbCVAJOvzoClGkDD%2FEA%2BkOS4lYYmDGIf4BSH9%2Bh7obSMCu7jmvbmVHmcaiieBko03St55Ll4hs25VxOfGqzjhsk8Z%2BHtXrnfJXk%2FpJp%2BR4jdSV6wh6stYwoVpo%2BKWI3IRluWDl8hCEGddvIt4IPmVX%2Bt4L%2BqplDu0Ao9B19SWgbFnlb4QFzzXtIWO2HkFNIgkFpC%2BojZ2Mgr2B5pHMwe3VxfZwse41Dcm8z2kjtYhkhYOPF9Uho58Nm1%2B86IeseJ43M1oU3WKIeVxwi25USeFs%2BNzYovckSs1hJ1ldg59TxlvQj0Qyiha55SthJOzCLbDOhn%2BS4UUNbdtUsOztwLnQ6HS1VVyyi8wfK%2FTC%2BRADIetVGv50J%2FbiLOiQJTCNeE8X4lD5abz4ngI9gpYHsZ%2FgTBy5OxbdvpLurVtmkwgw6hFPm2si1EwiNWVk%2F2JFtFP8h858ylbaQqvQ4hR3FQ7VJkn3nQBAZVodNUy8V9GqrQGF3zReow%2FhQRJfi%2BeoaToVqBwGpg45XtLEIVBsRmQwoXf98g8zfeNtdZbN3%2FgOq2IUy7TcCw33CiEwg5i6wwY6pgFFK1Nc5TgZmGzdgf4OGz31PTp1xPU1mVYYy3mGAt%2F4aAqqQSPgrX7WAe1pi8eH0zwJ8La85Z9DY6WcaSXHPAs%2B%2FnI0PfYUDqBROKKprDwj5jYnzkUhzqYfHHuW8ipxWcaTHrTCB%2F71L2UlYN9KTemJQ0ybd%2F56KKWjElKFhBwLsJ9UXjmkjPPS5Gpx5NXUGW1MKHIYO5nXX58dSZvDp6zoatOy4pVH&X-Amz-Signature=134dd3bbb7f8de7a42997088fab68593023c570aabb933fba1442ec6e73df75e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U26V5JFZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAb%2BCHLC5YNgZ95K1hk2CmOmHAylAlZ7I3B0iS9jInj0AiAoI1k1bq8I74bhn8sZ3ohKDivvuS7TlG7mzhsfVQYwaSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk9UWR%2BiYs0fw46xiKtwD%2F7k02RKBqORHVjVuNIOCLamllOYRA5FYRzHOZxhwne1yGvkPtX0Kau3GLNOhilY0TQhbCVAJOvzoClGkDD%2FEA%2BkOS4lYYmDGIf4BSH9%2Bh7obSMCu7jmvbmVHmcaiieBko03St55Ll4hs25VxOfGqzjhsk8Z%2BHtXrnfJXk%2FpJp%2BR4jdSV6wh6stYwoVpo%2BKWI3IRluWDl8hCEGddvIt4IPmVX%2Bt4L%2BqplDu0Ao9B19SWgbFnlb4QFzzXtIWO2HkFNIgkFpC%2BojZ2Mgr2B5pHMwe3VxfZwse41Dcm8z2kjtYhkhYOPF9Uho58Nm1%2B86IeseJ43M1oU3WKIeVxwi25USeFs%2BNzYovckSs1hJ1ldg59TxlvQj0Qyiha55SthJOzCLbDOhn%2BS4UUNbdtUsOztwLnQ6HS1VVyyi8wfK%2FTC%2BRADIetVGv50J%2FbiLOiQJTCNeE8X4lD5abz4ngI9gpYHsZ%2FgTBy5OxbdvpLurVtmkwgw6hFPm2si1EwiNWVk%2F2JFtFP8h858ylbaQqvQ4hR3FQ7VJkn3nQBAZVodNUy8V9GqrQGF3zReow%2FhQRJfi%2BeoaToVqBwGpg45XtLEIVBsRmQwoXf98g8zfeNtdZbN3%2FgOq2IUy7TcCw33CiEwg5i6wwY6pgFFK1Nc5TgZmGzdgf4OGz31PTp1xPU1mVYYy3mGAt%2F4aAqqQSPgrX7WAe1pi8eH0zwJ8La85Z9DY6WcaSXHPAs%2B%2FnI0PfYUDqBROKKprDwj5jYnzkUhzqYfHHuW8ipxWcaTHrTCB%2F71L2UlYN9KTemJQ0ybd%2F56KKWjElKFhBwLsJ9UXjmkjPPS5Gpx5NXUGW1MKHIYO5nXX58dSZvDp6zoatOy4pVH&X-Amz-Signature=ef0bf724cde9b9e62d14858fd7f185cc2b4c8661fa8c4fded5b1b7266d10d67d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U26V5JFZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAb%2BCHLC5YNgZ95K1hk2CmOmHAylAlZ7I3B0iS9jInj0AiAoI1k1bq8I74bhn8sZ3ohKDivvuS7TlG7mzhsfVQYwaSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk9UWR%2BiYs0fw46xiKtwD%2F7k02RKBqORHVjVuNIOCLamllOYRA5FYRzHOZxhwne1yGvkPtX0Kau3GLNOhilY0TQhbCVAJOvzoClGkDD%2FEA%2BkOS4lYYmDGIf4BSH9%2Bh7obSMCu7jmvbmVHmcaiieBko03St55Ll4hs25VxOfGqzjhsk8Z%2BHtXrnfJXk%2FpJp%2BR4jdSV6wh6stYwoVpo%2BKWI3IRluWDl8hCEGddvIt4IPmVX%2Bt4L%2BqplDu0Ao9B19SWgbFnlb4QFzzXtIWO2HkFNIgkFpC%2BojZ2Mgr2B5pHMwe3VxfZwse41Dcm8z2kjtYhkhYOPF9Uho58Nm1%2B86IeseJ43M1oU3WKIeVxwi25USeFs%2BNzYovckSs1hJ1ldg59TxlvQj0Qyiha55SthJOzCLbDOhn%2BS4UUNbdtUsOztwLnQ6HS1VVyyi8wfK%2FTC%2BRADIetVGv50J%2FbiLOiQJTCNeE8X4lD5abz4ngI9gpYHsZ%2FgTBy5OxbdvpLurVtmkwgw6hFPm2si1EwiNWVk%2F2JFtFP8h858ylbaQqvQ4hR3FQ7VJkn3nQBAZVodNUy8V9GqrQGF3zReow%2FhQRJfi%2BeoaToVqBwGpg45XtLEIVBsRmQwoXf98g8zfeNtdZbN3%2FgOq2IUy7TcCw33CiEwg5i6wwY6pgFFK1Nc5TgZmGzdgf4OGz31PTp1xPU1mVYYy3mGAt%2F4aAqqQSPgrX7WAe1pi8eH0zwJ8La85Z9DY6WcaSXHPAs%2B%2FnI0PfYUDqBROKKprDwj5jYnzkUhzqYfHHuW8ipxWcaTHrTCB%2F71L2UlYN9KTemJQ0ybd%2F56KKWjElKFhBwLsJ9UXjmkjPPS5Gpx5NXUGW1MKHIYO5nXX58dSZvDp6zoatOy4pVH&X-Amz-Signature=ea96cc0b33d93f7d4457bed4496ebebf44e423b400e6d6c9e5c628d2abd2d4d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
