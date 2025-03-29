---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2024-09-12T01:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466673HE6BI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDPMMMhWU%2FNpJnOolNmHp0Z1cUzYuKyNfZPH5e4%2Fu4%2FPgIhAL59xZutOFJIZCEDrmw3PT5yIoZrWrvnau%2Fo33KTiDPFKv8DCHMQABoMNjM3NDIzMTgzODA1IgyAoWK6HvSYxGX2g58q3AP2kUa1%2Bw3dAfvkH7c4Q55r5cXnG%2BOyr5sV4%2F0adTy76viTrpmrRpjYhno%2Bu8%2Fdc%2FY%2FTA0zTU35DBiTVlwpqWrr9DRHdu6tIyPXI99dm5SA93ywkwjekTOUgZCsDFfxVKLxJxMOdhXPT90bdC6Aq6EluFsXDgB%2FN5wcdjeuMNtvthVhZrBgKEkAIGNkNQt%2FzmLKxl7G%2FeP1hPN6p4o8kUFu5dVVTAoPtka0CpjMuQkiVJ%2BP11i9MIytY8oXUAcSy%2FZykKOaqnZRXokqd41y%2FcvvjIOeQt%2BLbcFH1jLn1iHMzgjn%2BHU%2F%2B%2FIZVrU0qKfgx3LuQLQsv7wodVn0Q6Q4xQzo5WC0xS2mlr2PNObi4iG9lXgmShJjkUlhCgx3DAvnrG6dg4zO4uuBbUJJJFuDLVzHZ8H9Cup0o64z%2B8NbAEZXX1YUvrf4%2Fj%2F%2B7lGdtojzj%2FyZQnCfi%2FL2rpnh9CvIvMdwaaqpFpjx97Eqoj2Th2hfZIpC8tNxx6arexRZzLPxHn2FOqkuBEZv1JfF5N%2FggU%2FJrA1oNPW2gfq%2BGiwhd4A1Pl0TkSp56JoBmP4yt9NzGRy9MgERqezPj7209dNdTTRQKDL7DxjJq55lai2Z418GxyhZTRhzndNAQZVcxDC%2Bi5%2B%2FBjqkAfe98REqoS6bhIPM1D70YZPtiJt7CAG%2BKi%2BDj378gMDzOvXxEqGJehM31cFudcD9pYF5ey8nhVbM6dO2dotCHmLYNIq9z1Dcixa5jC%2FCvi99Sydb978PCCRDGI4SpBixEMkRdRGclpf5WHqDuZ95rS7S6MTVCcmUcBJz3BSj4ZpQkuTsnCVax%2B9ei60UI5FXqEHdRq5GCT9Cfs3WKOMqSQATZ%2FoF&X-Amz-Signature=db7cdb4273d66b62deeaaf4a19cb159b1913ac24fca89390d71d4ce568cf6f83&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466673HE6BI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDPMMMhWU%2FNpJnOolNmHp0Z1cUzYuKyNfZPH5e4%2Fu4%2FPgIhAL59xZutOFJIZCEDrmw3PT5yIoZrWrvnau%2Fo33KTiDPFKv8DCHMQABoMNjM3NDIzMTgzODA1IgyAoWK6HvSYxGX2g58q3AP2kUa1%2Bw3dAfvkH7c4Q55r5cXnG%2BOyr5sV4%2F0adTy76viTrpmrRpjYhno%2Bu8%2Fdc%2FY%2FTA0zTU35DBiTVlwpqWrr9DRHdu6tIyPXI99dm5SA93ywkwjekTOUgZCsDFfxVKLxJxMOdhXPT90bdC6Aq6EluFsXDgB%2FN5wcdjeuMNtvthVhZrBgKEkAIGNkNQt%2FzmLKxl7G%2FeP1hPN6p4o8kUFu5dVVTAoPtka0CpjMuQkiVJ%2BP11i9MIytY8oXUAcSy%2FZykKOaqnZRXokqd41y%2FcvvjIOeQt%2BLbcFH1jLn1iHMzgjn%2BHU%2F%2B%2FIZVrU0qKfgx3LuQLQsv7wodVn0Q6Q4xQzo5WC0xS2mlr2PNObi4iG9lXgmShJjkUlhCgx3DAvnrG6dg4zO4uuBbUJJJFuDLVzHZ8H9Cup0o64z%2B8NbAEZXX1YUvrf4%2Fj%2F%2B7lGdtojzj%2FyZQnCfi%2FL2rpnh9CvIvMdwaaqpFpjx97Eqoj2Th2hfZIpC8tNxx6arexRZzLPxHn2FOqkuBEZv1JfF5N%2FggU%2FJrA1oNPW2gfq%2BGiwhd4A1Pl0TkSp56JoBmP4yt9NzGRy9MgERqezPj7209dNdTTRQKDL7DxjJq55lai2Z418GxyhZTRhzndNAQZVcxDC%2Bi5%2B%2FBjqkAfe98REqoS6bhIPM1D70YZPtiJt7CAG%2BKi%2BDj378gMDzOvXxEqGJehM31cFudcD9pYF5ey8nhVbM6dO2dotCHmLYNIq9z1Dcixa5jC%2FCvi99Sydb978PCCRDGI4SpBixEMkRdRGclpf5WHqDuZ95rS7S6MTVCcmUcBJz3BSj4ZpQkuTsnCVax%2B9ei60UI5FXqEHdRq5GCT9Cfs3WKOMqSQATZ%2FoF&X-Amz-Signature=ab561111b3574c5b5e36545439e9bdb0297730ff8a8fa47c86c35930def3152f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466673HE6BI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDPMMMhWU%2FNpJnOolNmHp0Z1cUzYuKyNfZPH5e4%2Fu4%2FPgIhAL59xZutOFJIZCEDrmw3PT5yIoZrWrvnau%2Fo33KTiDPFKv8DCHMQABoMNjM3NDIzMTgzODA1IgyAoWK6HvSYxGX2g58q3AP2kUa1%2Bw3dAfvkH7c4Q55r5cXnG%2BOyr5sV4%2F0adTy76viTrpmrRpjYhno%2Bu8%2Fdc%2FY%2FTA0zTU35DBiTVlwpqWrr9DRHdu6tIyPXI99dm5SA93ywkwjekTOUgZCsDFfxVKLxJxMOdhXPT90bdC6Aq6EluFsXDgB%2FN5wcdjeuMNtvthVhZrBgKEkAIGNkNQt%2FzmLKxl7G%2FeP1hPN6p4o8kUFu5dVVTAoPtka0CpjMuQkiVJ%2BP11i9MIytY8oXUAcSy%2FZykKOaqnZRXokqd41y%2FcvvjIOeQt%2BLbcFH1jLn1iHMzgjn%2BHU%2F%2B%2FIZVrU0qKfgx3LuQLQsv7wodVn0Q6Q4xQzo5WC0xS2mlr2PNObi4iG9lXgmShJjkUlhCgx3DAvnrG6dg4zO4uuBbUJJJFuDLVzHZ8H9Cup0o64z%2B8NbAEZXX1YUvrf4%2Fj%2F%2B7lGdtojzj%2FyZQnCfi%2FL2rpnh9CvIvMdwaaqpFpjx97Eqoj2Th2hfZIpC8tNxx6arexRZzLPxHn2FOqkuBEZv1JfF5N%2FggU%2FJrA1oNPW2gfq%2BGiwhd4A1Pl0TkSp56JoBmP4yt9NzGRy9MgERqezPj7209dNdTTRQKDL7DxjJq55lai2Z418GxyhZTRhzndNAQZVcxDC%2Bi5%2B%2FBjqkAfe98REqoS6bhIPM1D70YZPtiJt7CAG%2BKi%2BDj378gMDzOvXxEqGJehM31cFudcD9pYF5ey8nhVbM6dO2dotCHmLYNIq9z1Dcixa5jC%2FCvi99Sydb978PCCRDGI4SpBixEMkRdRGclpf5WHqDuZ95rS7S6MTVCcmUcBJz3BSj4ZpQkuTsnCVax%2B9ei60UI5FXqEHdRq5GCT9Cfs3WKOMqSQATZ%2FoF&X-Amz-Signature=80026c6d0852f0e2cec91c25fdf170eedf2bcb057e099769e963c2409e46bef0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466673HE6BI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDPMMMhWU%2FNpJnOolNmHp0Z1cUzYuKyNfZPH5e4%2Fu4%2FPgIhAL59xZutOFJIZCEDrmw3PT5yIoZrWrvnau%2Fo33KTiDPFKv8DCHMQABoMNjM3NDIzMTgzODA1IgyAoWK6HvSYxGX2g58q3AP2kUa1%2Bw3dAfvkH7c4Q55r5cXnG%2BOyr5sV4%2F0adTy76viTrpmrRpjYhno%2Bu8%2Fdc%2FY%2FTA0zTU35DBiTVlwpqWrr9DRHdu6tIyPXI99dm5SA93ywkwjekTOUgZCsDFfxVKLxJxMOdhXPT90bdC6Aq6EluFsXDgB%2FN5wcdjeuMNtvthVhZrBgKEkAIGNkNQt%2FzmLKxl7G%2FeP1hPN6p4o8kUFu5dVVTAoPtka0CpjMuQkiVJ%2BP11i9MIytY8oXUAcSy%2FZykKOaqnZRXokqd41y%2FcvvjIOeQt%2BLbcFH1jLn1iHMzgjn%2BHU%2F%2B%2FIZVrU0qKfgx3LuQLQsv7wodVn0Q6Q4xQzo5WC0xS2mlr2PNObi4iG9lXgmShJjkUlhCgx3DAvnrG6dg4zO4uuBbUJJJFuDLVzHZ8H9Cup0o64z%2B8NbAEZXX1YUvrf4%2Fj%2F%2B7lGdtojzj%2FyZQnCfi%2FL2rpnh9CvIvMdwaaqpFpjx97Eqoj2Th2hfZIpC8tNxx6arexRZzLPxHn2FOqkuBEZv1JfF5N%2FggU%2FJrA1oNPW2gfq%2BGiwhd4A1Pl0TkSp56JoBmP4yt9NzGRy9MgERqezPj7209dNdTTRQKDL7DxjJq55lai2Z418GxyhZTRhzndNAQZVcxDC%2Bi5%2B%2FBjqkAfe98REqoS6bhIPM1D70YZPtiJt7CAG%2BKi%2BDj378gMDzOvXxEqGJehM31cFudcD9pYF5ey8nhVbM6dO2dotCHmLYNIq9z1Dcixa5jC%2FCvi99Sydb978PCCRDGI4SpBixEMkRdRGclpf5WHqDuZ95rS7S6MTVCcmUcBJz3BSj4ZpQkuTsnCVax%2B9ei60UI5FXqEHdRq5GCT9Cfs3WKOMqSQATZ%2FoF&X-Amz-Signature=55c271b7d54cd899c02918663c8c7bcd92477f91e4d105cb7fb202175db21560&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466673HE6BI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDPMMMhWU%2FNpJnOolNmHp0Z1cUzYuKyNfZPH5e4%2Fu4%2FPgIhAL59xZutOFJIZCEDrmw3PT5yIoZrWrvnau%2Fo33KTiDPFKv8DCHMQABoMNjM3NDIzMTgzODA1IgyAoWK6HvSYxGX2g58q3AP2kUa1%2Bw3dAfvkH7c4Q55r5cXnG%2BOyr5sV4%2F0adTy76viTrpmrRpjYhno%2Bu8%2Fdc%2FY%2FTA0zTU35DBiTVlwpqWrr9DRHdu6tIyPXI99dm5SA93ywkwjekTOUgZCsDFfxVKLxJxMOdhXPT90bdC6Aq6EluFsXDgB%2FN5wcdjeuMNtvthVhZrBgKEkAIGNkNQt%2FzmLKxl7G%2FeP1hPN6p4o8kUFu5dVVTAoPtka0CpjMuQkiVJ%2BP11i9MIytY8oXUAcSy%2FZykKOaqnZRXokqd41y%2FcvvjIOeQt%2BLbcFH1jLn1iHMzgjn%2BHU%2F%2B%2FIZVrU0qKfgx3LuQLQsv7wodVn0Q6Q4xQzo5WC0xS2mlr2PNObi4iG9lXgmShJjkUlhCgx3DAvnrG6dg4zO4uuBbUJJJFuDLVzHZ8H9Cup0o64z%2B8NbAEZXX1YUvrf4%2Fj%2F%2B7lGdtojzj%2FyZQnCfi%2FL2rpnh9CvIvMdwaaqpFpjx97Eqoj2Th2hfZIpC8tNxx6arexRZzLPxHn2FOqkuBEZv1JfF5N%2FggU%2FJrA1oNPW2gfq%2BGiwhd4A1Pl0TkSp56JoBmP4yt9NzGRy9MgERqezPj7209dNdTTRQKDL7DxjJq55lai2Z418GxyhZTRhzndNAQZVcxDC%2Bi5%2B%2FBjqkAfe98REqoS6bhIPM1D70YZPtiJt7CAG%2BKi%2BDj378gMDzOvXxEqGJehM31cFudcD9pYF5ey8nhVbM6dO2dotCHmLYNIq9z1Dcixa5jC%2FCvi99Sydb978PCCRDGI4SpBixEMkRdRGclpf5WHqDuZ95rS7S6MTVCcmUcBJz3BSj4ZpQkuTsnCVax%2B9ei60UI5FXqEHdRq5GCT9Cfs3WKOMqSQATZ%2FoF&X-Amz-Signature=a96f8aba144c17855b41ca8112e5a75a27d30f9bfe857e56ede7989155fe779d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
