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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HMGDWHV%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIHU%2B9bJ5wqXKCuJkn1KUKTCstfXjvKM%2FMNqidTaYQR2BAiBDnOnXEuQY%2Bl1c%2FX6AbOKOnXfqrHihxtWs3JP9tjeKiir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMKhQCtD6G46QwisSPKtwDQBiLsdUHe94sXF2sKY%2BHtFCLZXi%2FaMrSLQ2uWwXif3f0U%2F7K52z%2Fidi%2Fuls7rWxUN8F8uhGJlSHF6RX3HE6ieUixkwyPhLnkpkfnXsXOHfGJyG4RwllakMTovhJuOMgK%2BS8r0XRPYRzo3Ac8hpuLJDUReaYNqqdoo8NWIyMUWFO%2B%2FNq2KiS1Jh2Hj7jb4h%2Bq9YDzfuARW65E4qUJmSl0yQ39d%2BVb389LyDPTFlpMwEi2pkIYmDoDQqPW9oxavzVH1FmO6Kwc9IQQPzp9PSCCo%2BzOitEqnZkVBRoMb9stkMtVB9hZipcjpMSAjKghgo3TBiRYHIFjCSv23P1blY52FJYlRPJlD4jTve3CKGn7DmXw9x8uwCQKS5u5Zn6MVxGXBTGrf%2FDjWwdQ%2FS5UYzDCnWL0vnnuydEg2LAt0ToU7Ep9q2UG2jpQt8RaOYE5rVwJjquWZcZf23%2FCI0b32Ddz4hMw9R1Ull09sA18NOzbNMh01BUCtv20AxZxIh4nx%2FnKiiIwsKhiUr460t4cZ9441tRySdcySZyeCfDG%2F8XXLtCUSCW0hdu0EViVAIq7CPNF5Zgm%2BVAKFYu6vrJvtTyMRrmVn4hcqAj7SRbdN5QGoRTZMHHCojSUeSH%2F1%2B4w57DnvgY6pgGtlJcqAjUpDcOdj3Aw2zUwICLA7Agv6mpBXA2CoUgtInEMzHe7F6Pc7RtpzZjSrBIwUm87j37%2BPc62bX3i%2FJlrPaqPFpCHxJKhbQMxnq0cPxNeB3PMgpCFf82YSEgCzyznAaTApcjJpWaHTBnQLoojRwwsNDxyKNI%2BspEBFG7UhRKfLxD5iT8W7BjPHK9WO0gDRwJdfjUMr2heN11SkloAzvI2gQs9&X-Amz-Signature=45937e5e1ccd79bfdd9ae19855d957dd0018f6f630ea8f4951ecec39d21b18d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HMGDWHV%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIHU%2B9bJ5wqXKCuJkn1KUKTCstfXjvKM%2FMNqidTaYQR2BAiBDnOnXEuQY%2Bl1c%2FX6AbOKOnXfqrHihxtWs3JP9tjeKiir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMKhQCtD6G46QwisSPKtwDQBiLsdUHe94sXF2sKY%2BHtFCLZXi%2FaMrSLQ2uWwXif3f0U%2F7K52z%2Fidi%2Fuls7rWxUN8F8uhGJlSHF6RX3HE6ieUixkwyPhLnkpkfnXsXOHfGJyG4RwllakMTovhJuOMgK%2BS8r0XRPYRzo3Ac8hpuLJDUReaYNqqdoo8NWIyMUWFO%2B%2FNq2KiS1Jh2Hj7jb4h%2Bq9YDzfuARW65E4qUJmSl0yQ39d%2BVb389LyDPTFlpMwEi2pkIYmDoDQqPW9oxavzVH1FmO6Kwc9IQQPzp9PSCCo%2BzOitEqnZkVBRoMb9stkMtVB9hZipcjpMSAjKghgo3TBiRYHIFjCSv23P1blY52FJYlRPJlD4jTve3CKGn7DmXw9x8uwCQKS5u5Zn6MVxGXBTGrf%2FDjWwdQ%2FS5UYzDCnWL0vnnuydEg2LAt0ToU7Ep9q2UG2jpQt8RaOYE5rVwJjquWZcZf23%2FCI0b32Ddz4hMw9R1Ull09sA18NOzbNMh01BUCtv20AxZxIh4nx%2FnKiiIwsKhiUr460t4cZ9441tRySdcySZyeCfDG%2F8XXLtCUSCW0hdu0EViVAIq7CPNF5Zgm%2BVAKFYu6vrJvtTyMRrmVn4hcqAj7SRbdN5QGoRTZMHHCojSUeSH%2F1%2B4w57DnvgY6pgGtlJcqAjUpDcOdj3Aw2zUwICLA7Agv6mpBXA2CoUgtInEMzHe7F6Pc7RtpzZjSrBIwUm87j37%2BPc62bX3i%2FJlrPaqPFpCHxJKhbQMxnq0cPxNeB3PMgpCFf82YSEgCzyznAaTApcjJpWaHTBnQLoojRwwsNDxyKNI%2BspEBFG7UhRKfLxD5iT8W7BjPHK9WO0gDRwJdfjUMr2heN11SkloAzvI2gQs9&X-Amz-Signature=f7b32a9dc6b0c58bb79302142fb5d356ba5418b78e47dc9cb91162ed3f2c508b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HMGDWHV%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIHU%2B9bJ5wqXKCuJkn1KUKTCstfXjvKM%2FMNqidTaYQR2BAiBDnOnXEuQY%2Bl1c%2FX6AbOKOnXfqrHihxtWs3JP9tjeKiir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMKhQCtD6G46QwisSPKtwDQBiLsdUHe94sXF2sKY%2BHtFCLZXi%2FaMrSLQ2uWwXif3f0U%2F7K52z%2Fidi%2Fuls7rWxUN8F8uhGJlSHF6RX3HE6ieUixkwyPhLnkpkfnXsXOHfGJyG4RwllakMTovhJuOMgK%2BS8r0XRPYRzo3Ac8hpuLJDUReaYNqqdoo8NWIyMUWFO%2B%2FNq2KiS1Jh2Hj7jb4h%2Bq9YDzfuARW65E4qUJmSl0yQ39d%2BVb389LyDPTFlpMwEi2pkIYmDoDQqPW9oxavzVH1FmO6Kwc9IQQPzp9PSCCo%2BzOitEqnZkVBRoMb9stkMtVB9hZipcjpMSAjKghgo3TBiRYHIFjCSv23P1blY52FJYlRPJlD4jTve3CKGn7DmXw9x8uwCQKS5u5Zn6MVxGXBTGrf%2FDjWwdQ%2FS5UYzDCnWL0vnnuydEg2LAt0ToU7Ep9q2UG2jpQt8RaOYE5rVwJjquWZcZf23%2FCI0b32Ddz4hMw9R1Ull09sA18NOzbNMh01BUCtv20AxZxIh4nx%2FnKiiIwsKhiUr460t4cZ9441tRySdcySZyeCfDG%2F8XXLtCUSCW0hdu0EViVAIq7CPNF5Zgm%2BVAKFYu6vrJvtTyMRrmVn4hcqAj7SRbdN5QGoRTZMHHCojSUeSH%2F1%2B4w57DnvgY6pgGtlJcqAjUpDcOdj3Aw2zUwICLA7Agv6mpBXA2CoUgtInEMzHe7F6Pc7RtpzZjSrBIwUm87j37%2BPc62bX3i%2FJlrPaqPFpCHxJKhbQMxnq0cPxNeB3PMgpCFf82YSEgCzyznAaTApcjJpWaHTBnQLoojRwwsNDxyKNI%2BspEBFG7UhRKfLxD5iT8W7BjPHK9WO0gDRwJdfjUMr2heN11SkloAzvI2gQs9&X-Amz-Signature=027124aa3dfa97a1ca851fc649133af5c7670af31aa9e314bbb3a3f105f9b0aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HMGDWHV%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIHU%2B9bJ5wqXKCuJkn1KUKTCstfXjvKM%2FMNqidTaYQR2BAiBDnOnXEuQY%2Bl1c%2FX6AbOKOnXfqrHihxtWs3JP9tjeKiir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMKhQCtD6G46QwisSPKtwDQBiLsdUHe94sXF2sKY%2BHtFCLZXi%2FaMrSLQ2uWwXif3f0U%2F7K52z%2Fidi%2Fuls7rWxUN8F8uhGJlSHF6RX3HE6ieUixkwyPhLnkpkfnXsXOHfGJyG4RwllakMTovhJuOMgK%2BS8r0XRPYRzo3Ac8hpuLJDUReaYNqqdoo8NWIyMUWFO%2B%2FNq2KiS1Jh2Hj7jb4h%2Bq9YDzfuARW65E4qUJmSl0yQ39d%2BVb389LyDPTFlpMwEi2pkIYmDoDQqPW9oxavzVH1FmO6Kwc9IQQPzp9PSCCo%2BzOitEqnZkVBRoMb9stkMtVB9hZipcjpMSAjKghgo3TBiRYHIFjCSv23P1blY52FJYlRPJlD4jTve3CKGn7DmXw9x8uwCQKS5u5Zn6MVxGXBTGrf%2FDjWwdQ%2FS5UYzDCnWL0vnnuydEg2LAt0ToU7Ep9q2UG2jpQt8RaOYE5rVwJjquWZcZf23%2FCI0b32Ddz4hMw9R1Ull09sA18NOzbNMh01BUCtv20AxZxIh4nx%2FnKiiIwsKhiUr460t4cZ9441tRySdcySZyeCfDG%2F8XXLtCUSCW0hdu0EViVAIq7CPNF5Zgm%2BVAKFYu6vrJvtTyMRrmVn4hcqAj7SRbdN5QGoRTZMHHCojSUeSH%2F1%2B4w57DnvgY6pgGtlJcqAjUpDcOdj3Aw2zUwICLA7Agv6mpBXA2CoUgtInEMzHe7F6Pc7RtpzZjSrBIwUm87j37%2BPc62bX3i%2FJlrPaqPFpCHxJKhbQMxnq0cPxNeB3PMgpCFf82YSEgCzyznAaTApcjJpWaHTBnQLoojRwwsNDxyKNI%2BspEBFG7UhRKfLxD5iT8W7BjPHK9WO0gDRwJdfjUMr2heN11SkloAzvI2gQs9&X-Amz-Signature=8197156a3fa0f71f535ac2da136086a620076ce45f6c7e51ce0b840ec44aba09&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HMGDWHV%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIHU%2B9bJ5wqXKCuJkn1KUKTCstfXjvKM%2FMNqidTaYQR2BAiBDnOnXEuQY%2Bl1c%2FX6AbOKOnXfqrHihxtWs3JP9tjeKiir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMKhQCtD6G46QwisSPKtwDQBiLsdUHe94sXF2sKY%2BHtFCLZXi%2FaMrSLQ2uWwXif3f0U%2F7K52z%2Fidi%2Fuls7rWxUN8F8uhGJlSHF6RX3HE6ieUixkwyPhLnkpkfnXsXOHfGJyG4RwllakMTovhJuOMgK%2BS8r0XRPYRzo3Ac8hpuLJDUReaYNqqdoo8NWIyMUWFO%2B%2FNq2KiS1Jh2Hj7jb4h%2Bq9YDzfuARW65E4qUJmSl0yQ39d%2BVb389LyDPTFlpMwEi2pkIYmDoDQqPW9oxavzVH1FmO6Kwc9IQQPzp9PSCCo%2BzOitEqnZkVBRoMb9stkMtVB9hZipcjpMSAjKghgo3TBiRYHIFjCSv23P1blY52FJYlRPJlD4jTve3CKGn7DmXw9x8uwCQKS5u5Zn6MVxGXBTGrf%2FDjWwdQ%2FS5UYzDCnWL0vnnuydEg2LAt0ToU7Ep9q2UG2jpQt8RaOYE5rVwJjquWZcZf23%2FCI0b32Ddz4hMw9R1Ull09sA18NOzbNMh01BUCtv20AxZxIh4nx%2FnKiiIwsKhiUr460t4cZ9441tRySdcySZyeCfDG%2F8XXLtCUSCW0hdu0EViVAIq7CPNF5Zgm%2BVAKFYu6vrJvtTyMRrmVn4hcqAj7SRbdN5QGoRTZMHHCojSUeSH%2F1%2B4w57DnvgY6pgGtlJcqAjUpDcOdj3Aw2zUwICLA7Agv6mpBXA2CoUgtInEMzHe7F6Pc7RtpzZjSrBIwUm87j37%2BPc62bX3i%2FJlrPaqPFpCHxJKhbQMxnq0cPxNeB3PMgpCFf82YSEgCzyznAaTApcjJpWaHTBnQLoojRwwsNDxyKNI%2BspEBFG7UhRKfLxD5iT8W7BjPHK9WO0gDRwJdfjUMr2heN11SkloAzvI2gQs9&X-Amz-Signature=97b282b6732bd2c65575ad37e4fb296bc5e38544a3ce72ab0863f7f153faa728&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
