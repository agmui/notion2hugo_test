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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466756AUM32%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIBfSoexw0mNdw9XlNocvmSYcXyXlLelMoVMc3GTNba6WAiBvpVMRGorFBAqCZfmRCS4Pxne84tfUSQvjzCuAJ449piqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5xy%2B5bXn%2F8fNGBxXKtwDAemnw03TAA0aEv%2FL3Zj8qv2Wo0HtBsHrsWh90AIkdnUYNaqka%2Fr5plQUXOVYNcYwZLNThu9EETug7mB0cm7TgDft6g29Wesu2p2m3ajeXqb14LIYjmHJIWjjvIfPGyqjL6ldv8LrqtAM9fMlbGoijaD2gDf75lpOjWoOFzR%2FzFRE1ee9RE5WXNgYr5UmbjxyjxHKHqA7C9YQxzUPdDbdYfBpfcz6t%2BW5WYkxg05qxqB9O996rEcVnRykDLJcsk6Avr09cbUh5VBpWPMqxiMQRN%2BCpmygY4K8vdM8fdrJX9ho9DLws4pLy%2FsZ83T%2FT4YodSHbSBFnf9xG4MtsoU%2F9XMlr4WpVNBP3If4LNceLhCXUv307PR8uFiGWvFb1blghv1bbj4QUjYR0YI%2FV9Fzp0CClAMvajzELF8CnSJ3G82py5JL0M%2B4Sh1lOx7Vl95Q1ABAyG0n8SklcYlvWEg7zW%2FSH3USKyGycHBJ%2FP8lTdgTi3%2FY6Yiw4k2ZIDaC8n9yNxK%2F1xvTWLQjNXtFBAv%2Bvc7t9%2BMoVeif%2FV2WjkU5u8lTuQU8slAUYcyCDiD7xSNS8vFk0hYLg2v%2BX%2BdRJp3RGQYQ4j%2BL0iRDfqE7%2BdXoKY4TkQzSQJAYITfua4tEwgafovwY6pgHq9X1v0X6mM5CD98ORw7ohuwxS0vcn3MaNWAZdo1dWsNULJACs3rxzyIFSiNCllFZKe8K0WoGY%2BRSJg3UCcyLNfoZFclvukp%2FKZzWSEu5X1WFQU1kE9iFaLOvPd21j7peL1LfBWMOZ7ZNOtx2SSoZmbb%2Br5dYMgbhDAPXeK5LoPjgusMgtOGYyTl3LQ9bYzrwNAHW8Kf07OrUob1EoQGd2iKdO%2Fplx&X-Amz-Signature=5066695c21759d5508ec4d24b5a4eb7f6bf90873f60469dfd3331744da4e3034&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466756AUM32%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIBfSoexw0mNdw9XlNocvmSYcXyXlLelMoVMc3GTNba6WAiBvpVMRGorFBAqCZfmRCS4Pxne84tfUSQvjzCuAJ449piqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5xy%2B5bXn%2F8fNGBxXKtwDAemnw03TAA0aEv%2FL3Zj8qv2Wo0HtBsHrsWh90AIkdnUYNaqka%2Fr5plQUXOVYNcYwZLNThu9EETug7mB0cm7TgDft6g29Wesu2p2m3ajeXqb14LIYjmHJIWjjvIfPGyqjL6ldv8LrqtAM9fMlbGoijaD2gDf75lpOjWoOFzR%2FzFRE1ee9RE5WXNgYr5UmbjxyjxHKHqA7C9YQxzUPdDbdYfBpfcz6t%2BW5WYkxg05qxqB9O996rEcVnRykDLJcsk6Avr09cbUh5VBpWPMqxiMQRN%2BCpmygY4K8vdM8fdrJX9ho9DLws4pLy%2FsZ83T%2FT4YodSHbSBFnf9xG4MtsoU%2F9XMlr4WpVNBP3If4LNceLhCXUv307PR8uFiGWvFb1blghv1bbj4QUjYR0YI%2FV9Fzp0CClAMvajzELF8CnSJ3G82py5JL0M%2B4Sh1lOx7Vl95Q1ABAyG0n8SklcYlvWEg7zW%2FSH3USKyGycHBJ%2FP8lTdgTi3%2FY6Yiw4k2ZIDaC8n9yNxK%2F1xvTWLQjNXtFBAv%2Bvc7t9%2BMoVeif%2FV2WjkU5u8lTuQU8slAUYcyCDiD7xSNS8vFk0hYLg2v%2BX%2BdRJp3RGQYQ4j%2BL0iRDfqE7%2BdXoKY4TkQzSQJAYITfua4tEwgafovwY6pgHq9X1v0X6mM5CD98ORw7ohuwxS0vcn3MaNWAZdo1dWsNULJACs3rxzyIFSiNCllFZKe8K0WoGY%2BRSJg3UCcyLNfoZFclvukp%2FKZzWSEu5X1WFQU1kE9iFaLOvPd21j7peL1LfBWMOZ7ZNOtx2SSoZmbb%2Br5dYMgbhDAPXeK5LoPjgusMgtOGYyTl3LQ9bYzrwNAHW8Kf07OrUob1EoQGd2iKdO%2Fplx&X-Amz-Signature=9521eaa84807e132f9d233ea4df95bbcdac8af9c20bfaaefd5471d41dd07ab68&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466756AUM32%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIBfSoexw0mNdw9XlNocvmSYcXyXlLelMoVMc3GTNba6WAiBvpVMRGorFBAqCZfmRCS4Pxne84tfUSQvjzCuAJ449piqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5xy%2B5bXn%2F8fNGBxXKtwDAemnw03TAA0aEv%2FL3Zj8qv2Wo0HtBsHrsWh90AIkdnUYNaqka%2Fr5plQUXOVYNcYwZLNThu9EETug7mB0cm7TgDft6g29Wesu2p2m3ajeXqb14LIYjmHJIWjjvIfPGyqjL6ldv8LrqtAM9fMlbGoijaD2gDf75lpOjWoOFzR%2FzFRE1ee9RE5WXNgYr5UmbjxyjxHKHqA7C9YQxzUPdDbdYfBpfcz6t%2BW5WYkxg05qxqB9O996rEcVnRykDLJcsk6Avr09cbUh5VBpWPMqxiMQRN%2BCpmygY4K8vdM8fdrJX9ho9DLws4pLy%2FsZ83T%2FT4YodSHbSBFnf9xG4MtsoU%2F9XMlr4WpVNBP3If4LNceLhCXUv307PR8uFiGWvFb1blghv1bbj4QUjYR0YI%2FV9Fzp0CClAMvajzELF8CnSJ3G82py5JL0M%2B4Sh1lOx7Vl95Q1ABAyG0n8SklcYlvWEg7zW%2FSH3USKyGycHBJ%2FP8lTdgTi3%2FY6Yiw4k2ZIDaC8n9yNxK%2F1xvTWLQjNXtFBAv%2Bvc7t9%2BMoVeif%2FV2WjkU5u8lTuQU8slAUYcyCDiD7xSNS8vFk0hYLg2v%2BX%2BdRJp3RGQYQ4j%2BL0iRDfqE7%2BdXoKY4TkQzSQJAYITfua4tEwgafovwY6pgHq9X1v0X6mM5CD98ORw7ohuwxS0vcn3MaNWAZdo1dWsNULJACs3rxzyIFSiNCllFZKe8K0WoGY%2BRSJg3UCcyLNfoZFclvukp%2FKZzWSEu5X1WFQU1kE9iFaLOvPd21j7peL1LfBWMOZ7ZNOtx2SSoZmbb%2Br5dYMgbhDAPXeK5LoPjgusMgtOGYyTl3LQ9bYzrwNAHW8Kf07OrUob1EoQGd2iKdO%2Fplx&X-Amz-Signature=07d79edc9df0b0f1ff03ce0268e635ef416f7bcdb9eba8758fb434ac9f813bb8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466756AUM32%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIBfSoexw0mNdw9XlNocvmSYcXyXlLelMoVMc3GTNba6WAiBvpVMRGorFBAqCZfmRCS4Pxne84tfUSQvjzCuAJ449piqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5xy%2B5bXn%2F8fNGBxXKtwDAemnw03TAA0aEv%2FL3Zj8qv2Wo0HtBsHrsWh90AIkdnUYNaqka%2Fr5plQUXOVYNcYwZLNThu9EETug7mB0cm7TgDft6g29Wesu2p2m3ajeXqb14LIYjmHJIWjjvIfPGyqjL6ldv8LrqtAM9fMlbGoijaD2gDf75lpOjWoOFzR%2FzFRE1ee9RE5WXNgYr5UmbjxyjxHKHqA7C9YQxzUPdDbdYfBpfcz6t%2BW5WYkxg05qxqB9O996rEcVnRykDLJcsk6Avr09cbUh5VBpWPMqxiMQRN%2BCpmygY4K8vdM8fdrJX9ho9DLws4pLy%2FsZ83T%2FT4YodSHbSBFnf9xG4MtsoU%2F9XMlr4WpVNBP3If4LNceLhCXUv307PR8uFiGWvFb1blghv1bbj4QUjYR0YI%2FV9Fzp0CClAMvajzELF8CnSJ3G82py5JL0M%2B4Sh1lOx7Vl95Q1ABAyG0n8SklcYlvWEg7zW%2FSH3USKyGycHBJ%2FP8lTdgTi3%2FY6Yiw4k2ZIDaC8n9yNxK%2F1xvTWLQjNXtFBAv%2Bvc7t9%2BMoVeif%2FV2WjkU5u8lTuQU8slAUYcyCDiD7xSNS8vFk0hYLg2v%2BX%2BdRJp3RGQYQ4j%2BL0iRDfqE7%2BdXoKY4TkQzSQJAYITfua4tEwgafovwY6pgHq9X1v0X6mM5CD98ORw7ohuwxS0vcn3MaNWAZdo1dWsNULJACs3rxzyIFSiNCllFZKe8K0WoGY%2BRSJg3UCcyLNfoZFclvukp%2FKZzWSEu5X1WFQU1kE9iFaLOvPd21j7peL1LfBWMOZ7ZNOtx2SSoZmbb%2Br5dYMgbhDAPXeK5LoPjgusMgtOGYyTl3LQ9bYzrwNAHW8Kf07OrUob1EoQGd2iKdO%2Fplx&X-Amz-Signature=afb121344f8e181aaedb1b70981c694886c5de465df0751b8a5800e008f221cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466756AUM32%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIBfSoexw0mNdw9XlNocvmSYcXyXlLelMoVMc3GTNba6WAiBvpVMRGorFBAqCZfmRCS4Pxne84tfUSQvjzCuAJ449piqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5xy%2B5bXn%2F8fNGBxXKtwDAemnw03TAA0aEv%2FL3Zj8qv2Wo0HtBsHrsWh90AIkdnUYNaqka%2Fr5plQUXOVYNcYwZLNThu9EETug7mB0cm7TgDft6g29Wesu2p2m3ajeXqb14LIYjmHJIWjjvIfPGyqjL6ldv8LrqtAM9fMlbGoijaD2gDf75lpOjWoOFzR%2FzFRE1ee9RE5WXNgYr5UmbjxyjxHKHqA7C9YQxzUPdDbdYfBpfcz6t%2BW5WYkxg05qxqB9O996rEcVnRykDLJcsk6Avr09cbUh5VBpWPMqxiMQRN%2BCpmygY4K8vdM8fdrJX9ho9DLws4pLy%2FsZ83T%2FT4YodSHbSBFnf9xG4MtsoU%2F9XMlr4WpVNBP3If4LNceLhCXUv307PR8uFiGWvFb1blghv1bbj4QUjYR0YI%2FV9Fzp0CClAMvajzELF8CnSJ3G82py5JL0M%2B4Sh1lOx7Vl95Q1ABAyG0n8SklcYlvWEg7zW%2FSH3USKyGycHBJ%2FP8lTdgTi3%2FY6Yiw4k2ZIDaC8n9yNxK%2F1xvTWLQjNXtFBAv%2Bvc7t9%2BMoVeif%2FV2WjkU5u8lTuQU8slAUYcyCDiD7xSNS8vFk0hYLg2v%2BX%2BdRJp3RGQYQ4j%2BL0iRDfqE7%2BdXoKY4TkQzSQJAYITfua4tEwgafovwY6pgHq9X1v0X6mM5CD98ORw7ohuwxS0vcn3MaNWAZdo1dWsNULJACs3rxzyIFSiNCllFZKe8K0WoGY%2BRSJg3UCcyLNfoZFclvukp%2FKZzWSEu5X1WFQU1kE9iFaLOvPd21j7peL1LfBWMOZ7ZNOtx2SSoZmbb%2Br5dYMgbhDAPXeK5LoPjgusMgtOGYyTl3LQ9bYzrwNAHW8Kf07OrUob1EoQGd2iKdO%2Fplx&X-Amz-Signature=9fb8ca7ba1e5d23a25355ca7adafe0296656975848d5423c833c515132de04d2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
