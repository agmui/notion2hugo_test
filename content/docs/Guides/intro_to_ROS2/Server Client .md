---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMOWWUYF%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIAmDGSaxOeDPUDLCA%2Bg7xFkH%2FGC7GcWkHMeu3%2FfjszF8AiBBcNV0eZ89yZ7hmlwUTfggyHVVu9ph6tj4bewrnBAT2SqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMekvbeeqKqRgsFbNYKtwDBJC3ezpYF6emGzxPhDfq7V%2BlqrHS7pAKYWyKlQF3sDXobgFJcTvfMp1776Cg8ot4Yrj%2FgjfJYJJMwNYiim0hvgWiUIwf3eXLNkId3sNFJLV2bBht4I%2B%2ByKILhF0R7dXz4Xmkt5ZzowcMV878kZjN8jwdR6N7UyIgm4%2BE1O0Zw4dNW9XFVEuk6fedat%2BC8PlI5SviN%2ByflDwRI5NcH1ECEoYuuvuqpD2Rr1hrMSDAIZsyvy%2BZwZ6KBls2IeCZFsBUv3Si1popqhEy7zMcHbgd5lEEJ52sQKPoo38J05kkTGDrDrNxaorGCjbU3Tzh98jsjIQAocTFRO3Evv1KLInmP3Ku4%2FqEHwsEjb0OQa4uCjCI7Ok%2F8TUfP7Yh3T2FRjsjZf21FphkI4nPdyxY1RDvZ920M1s1%2FoQmG9F2r%2FiqGvv307sKZda2HNVw6MSxijJ18NDTvLn507aXsX%2FXjVNAd0Lo8SPbD9D5iQoU03G7hjmPP0ij7soBfagxkpj7nPOm214WozR03H9Ho3OTOZ3HoObBMs1%2BryuXHYBc3O0RyalAFdFyzoVGzM%2FjgiyzqcnfVQZn2Ux8yQmcBfKT%2ByBjCyUML%2BfK9CnT5OjEYhSiSktAi8lwEI%2BbGk8XnlIwhdfFywY6pgFMaEcpQiVJd9F8A%2FMlDy3miEaSVK2byQw6Ay%2Bjo5C4yUkckKoFDsUK9%2B1z0Y2752HGu8dmGfOGMhK0ilId7gpvzRkbMVtqqg%2BEw%2B577qU6hBDP%2BiSn7EdEjB8gd5oqhNyfrNeCuDuC5anevS4q4hbo5ii114CGzhWA6W%2Fg8fZM0zTBcm2pNOzM1Y2XfhsLg6z2RYElodp3fbCK6XbGOna4yl7fAMkQ&X-Amz-Signature=19fdce6d15a034c95fba54db68dc273e7a17811ad27b7dfc1059d25cc0f607fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMOWWUYF%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIAmDGSaxOeDPUDLCA%2Bg7xFkH%2FGC7GcWkHMeu3%2FfjszF8AiBBcNV0eZ89yZ7hmlwUTfggyHVVu9ph6tj4bewrnBAT2SqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMekvbeeqKqRgsFbNYKtwDBJC3ezpYF6emGzxPhDfq7V%2BlqrHS7pAKYWyKlQF3sDXobgFJcTvfMp1776Cg8ot4Yrj%2FgjfJYJJMwNYiim0hvgWiUIwf3eXLNkId3sNFJLV2bBht4I%2B%2ByKILhF0R7dXz4Xmkt5ZzowcMV878kZjN8jwdR6N7UyIgm4%2BE1O0Zw4dNW9XFVEuk6fedat%2BC8PlI5SviN%2ByflDwRI5NcH1ECEoYuuvuqpD2Rr1hrMSDAIZsyvy%2BZwZ6KBls2IeCZFsBUv3Si1popqhEy7zMcHbgd5lEEJ52sQKPoo38J05kkTGDrDrNxaorGCjbU3Tzh98jsjIQAocTFRO3Evv1KLInmP3Ku4%2FqEHwsEjb0OQa4uCjCI7Ok%2F8TUfP7Yh3T2FRjsjZf21FphkI4nPdyxY1RDvZ920M1s1%2FoQmG9F2r%2FiqGvv307sKZda2HNVw6MSxijJ18NDTvLn507aXsX%2FXjVNAd0Lo8SPbD9D5iQoU03G7hjmPP0ij7soBfagxkpj7nPOm214WozR03H9Ho3OTOZ3HoObBMs1%2BryuXHYBc3O0RyalAFdFyzoVGzM%2FjgiyzqcnfVQZn2Ux8yQmcBfKT%2ByBjCyUML%2BfK9CnT5OjEYhSiSktAi8lwEI%2BbGk8XnlIwhdfFywY6pgFMaEcpQiVJd9F8A%2FMlDy3miEaSVK2byQw6Ay%2Bjo5C4yUkckKoFDsUK9%2B1z0Y2752HGu8dmGfOGMhK0ilId7gpvzRkbMVtqqg%2BEw%2B577qU6hBDP%2BiSn7EdEjB8gd5oqhNyfrNeCuDuC5anevS4q4hbo5ii114CGzhWA6W%2Fg8fZM0zTBcm2pNOzM1Y2XfhsLg6z2RYElodp3fbCK6XbGOna4yl7fAMkQ&X-Amz-Signature=de682afad3ab762d50545ef6e3c1036bebd53c98d6670309c866b8c27b6d2f70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMOWWUYF%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIAmDGSaxOeDPUDLCA%2Bg7xFkH%2FGC7GcWkHMeu3%2FfjszF8AiBBcNV0eZ89yZ7hmlwUTfggyHVVu9ph6tj4bewrnBAT2SqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMekvbeeqKqRgsFbNYKtwDBJC3ezpYF6emGzxPhDfq7V%2BlqrHS7pAKYWyKlQF3sDXobgFJcTvfMp1776Cg8ot4Yrj%2FgjfJYJJMwNYiim0hvgWiUIwf3eXLNkId3sNFJLV2bBht4I%2B%2ByKILhF0R7dXz4Xmkt5ZzowcMV878kZjN8jwdR6N7UyIgm4%2BE1O0Zw4dNW9XFVEuk6fedat%2BC8PlI5SviN%2ByflDwRI5NcH1ECEoYuuvuqpD2Rr1hrMSDAIZsyvy%2BZwZ6KBls2IeCZFsBUv3Si1popqhEy7zMcHbgd5lEEJ52sQKPoo38J05kkTGDrDrNxaorGCjbU3Tzh98jsjIQAocTFRO3Evv1KLInmP3Ku4%2FqEHwsEjb0OQa4uCjCI7Ok%2F8TUfP7Yh3T2FRjsjZf21FphkI4nPdyxY1RDvZ920M1s1%2FoQmG9F2r%2FiqGvv307sKZda2HNVw6MSxijJ18NDTvLn507aXsX%2FXjVNAd0Lo8SPbD9D5iQoU03G7hjmPP0ij7soBfagxkpj7nPOm214WozR03H9Ho3OTOZ3HoObBMs1%2BryuXHYBc3O0RyalAFdFyzoVGzM%2FjgiyzqcnfVQZn2Ux8yQmcBfKT%2ByBjCyUML%2BfK9CnT5OjEYhSiSktAi8lwEI%2BbGk8XnlIwhdfFywY6pgFMaEcpQiVJd9F8A%2FMlDy3miEaSVK2byQw6Ay%2Bjo5C4yUkckKoFDsUK9%2B1z0Y2752HGu8dmGfOGMhK0ilId7gpvzRkbMVtqqg%2BEw%2B577qU6hBDP%2BiSn7EdEjB8gd5oqhNyfrNeCuDuC5anevS4q4hbo5ii114CGzhWA6W%2Fg8fZM0zTBcm2pNOzM1Y2XfhsLg6z2RYElodp3fbCK6XbGOna4yl7fAMkQ&X-Amz-Signature=ac53de8bf1be9f1f7db4a716d210150d57c8ec6ebf9055bcc9ecc255676a8df9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMOWWUYF%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIAmDGSaxOeDPUDLCA%2Bg7xFkH%2FGC7GcWkHMeu3%2FfjszF8AiBBcNV0eZ89yZ7hmlwUTfggyHVVu9ph6tj4bewrnBAT2SqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMekvbeeqKqRgsFbNYKtwDBJC3ezpYF6emGzxPhDfq7V%2BlqrHS7pAKYWyKlQF3sDXobgFJcTvfMp1776Cg8ot4Yrj%2FgjfJYJJMwNYiim0hvgWiUIwf3eXLNkId3sNFJLV2bBht4I%2B%2ByKILhF0R7dXz4Xmkt5ZzowcMV878kZjN8jwdR6N7UyIgm4%2BE1O0Zw4dNW9XFVEuk6fedat%2BC8PlI5SviN%2ByflDwRI5NcH1ECEoYuuvuqpD2Rr1hrMSDAIZsyvy%2BZwZ6KBls2IeCZFsBUv3Si1popqhEy7zMcHbgd5lEEJ52sQKPoo38J05kkTGDrDrNxaorGCjbU3Tzh98jsjIQAocTFRO3Evv1KLInmP3Ku4%2FqEHwsEjb0OQa4uCjCI7Ok%2F8TUfP7Yh3T2FRjsjZf21FphkI4nPdyxY1RDvZ920M1s1%2FoQmG9F2r%2FiqGvv307sKZda2HNVw6MSxijJ18NDTvLn507aXsX%2FXjVNAd0Lo8SPbD9D5iQoU03G7hjmPP0ij7soBfagxkpj7nPOm214WozR03H9Ho3OTOZ3HoObBMs1%2BryuXHYBc3O0RyalAFdFyzoVGzM%2FjgiyzqcnfVQZn2Ux8yQmcBfKT%2ByBjCyUML%2BfK9CnT5OjEYhSiSktAi8lwEI%2BbGk8XnlIwhdfFywY6pgFMaEcpQiVJd9F8A%2FMlDy3miEaSVK2byQw6Ay%2Bjo5C4yUkckKoFDsUK9%2B1z0Y2752HGu8dmGfOGMhK0ilId7gpvzRkbMVtqqg%2BEw%2B577qU6hBDP%2BiSn7EdEjB8gd5oqhNyfrNeCuDuC5anevS4q4hbo5ii114CGzhWA6W%2Fg8fZM0zTBcm2pNOzM1Y2XfhsLg6z2RYElodp3fbCK6XbGOna4yl7fAMkQ&X-Amz-Signature=bdc076b6ffe8c719d650db6d06dc91bbf8261ed7a6b38f5d9c0a204f92193552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMOWWUYF%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIAmDGSaxOeDPUDLCA%2Bg7xFkH%2FGC7GcWkHMeu3%2FfjszF8AiBBcNV0eZ89yZ7hmlwUTfggyHVVu9ph6tj4bewrnBAT2SqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMekvbeeqKqRgsFbNYKtwDBJC3ezpYF6emGzxPhDfq7V%2BlqrHS7pAKYWyKlQF3sDXobgFJcTvfMp1776Cg8ot4Yrj%2FgjfJYJJMwNYiim0hvgWiUIwf3eXLNkId3sNFJLV2bBht4I%2B%2ByKILhF0R7dXz4Xmkt5ZzowcMV878kZjN8jwdR6N7UyIgm4%2BE1O0Zw4dNW9XFVEuk6fedat%2BC8PlI5SviN%2ByflDwRI5NcH1ECEoYuuvuqpD2Rr1hrMSDAIZsyvy%2BZwZ6KBls2IeCZFsBUv3Si1popqhEy7zMcHbgd5lEEJ52sQKPoo38J05kkTGDrDrNxaorGCjbU3Tzh98jsjIQAocTFRO3Evv1KLInmP3Ku4%2FqEHwsEjb0OQa4uCjCI7Ok%2F8TUfP7Yh3T2FRjsjZf21FphkI4nPdyxY1RDvZ920M1s1%2FoQmG9F2r%2FiqGvv307sKZda2HNVw6MSxijJ18NDTvLn507aXsX%2FXjVNAd0Lo8SPbD9D5iQoU03G7hjmPP0ij7soBfagxkpj7nPOm214WozR03H9Ho3OTOZ3HoObBMs1%2BryuXHYBc3O0RyalAFdFyzoVGzM%2FjgiyzqcnfVQZn2Ux8yQmcBfKT%2ByBjCyUML%2BfK9CnT5OjEYhSiSktAi8lwEI%2BbGk8XnlIwhdfFywY6pgFMaEcpQiVJd9F8A%2FMlDy3miEaSVK2byQw6Ay%2Bjo5C4yUkckKoFDsUK9%2B1z0Y2752HGu8dmGfOGMhK0ilId7gpvzRkbMVtqqg%2BEw%2B577qU6hBDP%2BiSn7EdEjB8gd5oqhNyfrNeCuDuC5anevS4q4hbo5ii114CGzhWA6W%2Fg8fZM0zTBcm2pNOzM1Y2XfhsLg6z2RYElodp3fbCK6XbGOna4yl7fAMkQ&X-Amz-Signature=0148a935ec1fc5669836d2f96fc3bf816aa327a5d09b4fb5bcf01478d1753e0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
