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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYYJJ7AE%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEeQWDmbiUFYz82c%2BuAi25L3l1pPjLecoMTxpbgJEkQ6AiA26iSKKHumQgcP3tPBkzWJevCFV4Fpc5fkcyHKX%2BS%2BTCqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6Ha0jkCZwLOJTN%2FlKtwDpwYyyxtLmMq5ItvMKziYfdWB4UaA%2BNrj7owkQgcSyv%2FcDG%2BYKcun0S4lAIJvOzfFfzQxsSLu7RpIZX6yWNj1MmyC%2FL8E2edjBOnO3Ha%2Bq8qZhsN8jpX2xJPHJ5M0UYaD8TM1mEwQkK44nbhQVcv5t9o2IVTwqMeWV%2FCOHgWVhn7ccIw9PrmBZGu%2FV8BnqQ3IBpUt3UT5S2fn37YFFia3cMGWuWrbzSYzakhso2TXC1uWRk5jsdeEu%2FCRQavf0ZALdICS6HprofVRpqvvxqiA2UqJZ40NyasMA7FFU2AlnG9eGCfPGh6NSsOBmGnhs8HuzLaq5B5qrGiFpdhZv0FpnY4BKDN8dO8aiF6G7ZLqWaMNvdbEeNXso7ZJ1HRC257XyaagDSYlKESL7RaRgmpIWlg7z9LH5s12p4JSS5JLLR6ACnuZMKYKTKnMymoijUOvFTQzVqoFEMKjwPl7LBeKmYcxaA31dNIHpm1vo5Y6sOCKtflia%2FpMATK0K3gafYUKnLDhRSj3ZkYHM3a%2F0tbXzfUaM6mfzqCzYaz0EhuM%2FvZsibrzvsW%2B%2BqrZQRgXwhTFTD6wb4RWfxEE%2FXpVhNKqKaoTn0uey2693N4CzFQeHVvagmV%2FKiWMfXvhAYcw%2BoucvgY6pgHHSApWeTmKZqte6DnO0VGduBHEi2EMSmsQiMOMK2Jjuq8JfpHGOQyA1k0pOORt6zGZr3LGlSnpE286muq7OsZ5jeTjuhb4GtnfxhN2kzQT1%2FlBTwb2nLAzqnsenQAHDBPZyXb%2F2Aif3MXT8uanI8CqAgLOQaDYXvNJsQRfm3Kb2jm7tngYQo6HBcJmCWQe7hF%2FWwNvVOh0pQ2H3H0qApQ3qpQ%2Bqkis&X-Amz-Signature=10828306725fdffce43ad7f9e7decdfeef04f9929ba4a49ecea343be5fe1999a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYYJJ7AE%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEeQWDmbiUFYz82c%2BuAi25L3l1pPjLecoMTxpbgJEkQ6AiA26iSKKHumQgcP3tPBkzWJevCFV4Fpc5fkcyHKX%2BS%2BTCqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6Ha0jkCZwLOJTN%2FlKtwDpwYyyxtLmMq5ItvMKziYfdWB4UaA%2BNrj7owkQgcSyv%2FcDG%2BYKcun0S4lAIJvOzfFfzQxsSLu7RpIZX6yWNj1MmyC%2FL8E2edjBOnO3Ha%2Bq8qZhsN8jpX2xJPHJ5M0UYaD8TM1mEwQkK44nbhQVcv5t9o2IVTwqMeWV%2FCOHgWVhn7ccIw9PrmBZGu%2FV8BnqQ3IBpUt3UT5S2fn37YFFia3cMGWuWrbzSYzakhso2TXC1uWRk5jsdeEu%2FCRQavf0ZALdICS6HprofVRpqvvxqiA2UqJZ40NyasMA7FFU2AlnG9eGCfPGh6NSsOBmGnhs8HuzLaq5B5qrGiFpdhZv0FpnY4BKDN8dO8aiF6G7ZLqWaMNvdbEeNXso7ZJ1HRC257XyaagDSYlKESL7RaRgmpIWlg7z9LH5s12p4JSS5JLLR6ACnuZMKYKTKnMymoijUOvFTQzVqoFEMKjwPl7LBeKmYcxaA31dNIHpm1vo5Y6sOCKtflia%2FpMATK0K3gafYUKnLDhRSj3ZkYHM3a%2F0tbXzfUaM6mfzqCzYaz0EhuM%2FvZsibrzvsW%2B%2BqrZQRgXwhTFTD6wb4RWfxEE%2FXpVhNKqKaoTn0uey2693N4CzFQeHVvagmV%2FKiWMfXvhAYcw%2BoucvgY6pgHHSApWeTmKZqte6DnO0VGduBHEi2EMSmsQiMOMK2Jjuq8JfpHGOQyA1k0pOORt6zGZr3LGlSnpE286muq7OsZ5jeTjuhb4GtnfxhN2kzQT1%2FlBTwb2nLAzqnsenQAHDBPZyXb%2F2Aif3MXT8uanI8CqAgLOQaDYXvNJsQRfm3Kb2jm7tngYQo6HBcJmCWQe7hF%2FWwNvVOh0pQ2H3H0qApQ3qpQ%2Bqkis&X-Amz-Signature=03de623a466bf9ba01927c1f0b6187ac15b52f5297190475b911d629a33b31c3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYYJJ7AE%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEeQWDmbiUFYz82c%2BuAi25L3l1pPjLecoMTxpbgJEkQ6AiA26iSKKHumQgcP3tPBkzWJevCFV4Fpc5fkcyHKX%2BS%2BTCqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6Ha0jkCZwLOJTN%2FlKtwDpwYyyxtLmMq5ItvMKziYfdWB4UaA%2BNrj7owkQgcSyv%2FcDG%2BYKcun0S4lAIJvOzfFfzQxsSLu7RpIZX6yWNj1MmyC%2FL8E2edjBOnO3Ha%2Bq8qZhsN8jpX2xJPHJ5M0UYaD8TM1mEwQkK44nbhQVcv5t9o2IVTwqMeWV%2FCOHgWVhn7ccIw9PrmBZGu%2FV8BnqQ3IBpUt3UT5S2fn37YFFia3cMGWuWrbzSYzakhso2TXC1uWRk5jsdeEu%2FCRQavf0ZALdICS6HprofVRpqvvxqiA2UqJZ40NyasMA7FFU2AlnG9eGCfPGh6NSsOBmGnhs8HuzLaq5B5qrGiFpdhZv0FpnY4BKDN8dO8aiF6G7ZLqWaMNvdbEeNXso7ZJ1HRC257XyaagDSYlKESL7RaRgmpIWlg7z9LH5s12p4JSS5JLLR6ACnuZMKYKTKnMymoijUOvFTQzVqoFEMKjwPl7LBeKmYcxaA31dNIHpm1vo5Y6sOCKtflia%2FpMATK0K3gafYUKnLDhRSj3ZkYHM3a%2F0tbXzfUaM6mfzqCzYaz0EhuM%2FvZsibrzvsW%2B%2BqrZQRgXwhTFTD6wb4RWfxEE%2FXpVhNKqKaoTn0uey2693N4CzFQeHVvagmV%2FKiWMfXvhAYcw%2BoucvgY6pgHHSApWeTmKZqte6DnO0VGduBHEi2EMSmsQiMOMK2Jjuq8JfpHGOQyA1k0pOORt6zGZr3LGlSnpE286muq7OsZ5jeTjuhb4GtnfxhN2kzQT1%2FlBTwb2nLAzqnsenQAHDBPZyXb%2F2Aif3MXT8uanI8CqAgLOQaDYXvNJsQRfm3Kb2jm7tngYQo6HBcJmCWQe7hF%2FWwNvVOh0pQ2H3H0qApQ3qpQ%2Bqkis&X-Amz-Signature=3aa1e996a3e0e9994703c847a45648210eddc249030f88b1e8bf2e89630d88e9&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYYJJ7AE%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEeQWDmbiUFYz82c%2BuAi25L3l1pPjLecoMTxpbgJEkQ6AiA26iSKKHumQgcP3tPBkzWJevCFV4Fpc5fkcyHKX%2BS%2BTCqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6Ha0jkCZwLOJTN%2FlKtwDpwYyyxtLmMq5ItvMKziYfdWB4UaA%2BNrj7owkQgcSyv%2FcDG%2BYKcun0S4lAIJvOzfFfzQxsSLu7RpIZX6yWNj1MmyC%2FL8E2edjBOnO3Ha%2Bq8qZhsN8jpX2xJPHJ5M0UYaD8TM1mEwQkK44nbhQVcv5t9o2IVTwqMeWV%2FCOHgWVhn7ccIw9PrmBZGu%2FV8BnqQ3IBpUt3UT5S2fn37YFFia3cMGWuWrbzSYzakhso2TXC1uWRk5jsdeEu%2FCRQavf0ZALdICS6HprofVRpqvvxqiA2UqJZ40NyasMA7FFU2AlnG9eGCfPGh6NSsOBmGnhs8HuzLaq5B5qrGiFpdhZv0FpnY4BKDN8dO8aiF6G7ZLqWaMNvdbEeNXso7ZJ1HRC257XyaagDSYlKESL7RaRgmpIWlg7z9LH5s12p4JSS5JLLR6ACnuZMKYKTKnMymoijUOvFTQzVqoFEMKjwPl7LBeKmYcxaA31dNIHpm1vo5Y6sOCKtflia%2FpMATK0K3gafYUKnLDhRSj3ZkYHM3a%2F0tbXzfUaM6mfzqCzYaz0EhuM%2FvZsibrzvsW%2B%2BqrZQRgXwhTFTD6wb4RWfxEE%2FXpVhNKqKaoTn0uey2693N4CzFQeHVvagmV%2FKiWMfXvhAYcw%2BoucvgY6pgHHSApWeTmKZqte6DnO0VGduBHEi2EMSmsQiMOMK2Jjuq8JfpHGOQyA1k0pOORt6zGZr3LGlSnpE286muq7OsZ5jeTjuhb4GtnfxhN2kzQT1%2FlBTwb2nLAzqnsenQAHDBPZyXb%2F2Aif3MXT8uanI8CqAgLOQaDYXvNJsQRfm3Kb2jm7tngYQo6HBcJmCWQe7hF%2FWwNvVOh0pQ2H3H0qApQ3qpQ%2Bqkis&X-Amz-Signature=8fcfc14f7a2767c28cb4bd8d712eafd24f9b3a3bc0c3a9be112b1433ea0c984e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYYJJ7AE%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEeQWDmbiUFYz82c%2BuAi25L3l1pPjLecoMTxpbgJEkQ6AiA26iSKKHumQgcP3tPBkzWJevCFV4Fpc5fkcyHKX%2BS%2BTCqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6Ha0jkCZwLOJTN%2FlKtwDpwYyyxtLmMq5ItvMKziYfdWB4UaA%2BNrj7owkQgcSyv%2FcDG%2BYKcun0S4lAIJvOzfFfzQxsSLu7RpIZX6yWNj1MmyC%2FL8E2edjBOnO3Ha%2Bq8qZhsN8jpX2xJPHJ5M0UYaD8TM1mEwQkK44nbhQVcv5t9o2IVTwqMeWV%2FCOHgWVhn7ccIw9PrmBZGu%2FV8BnqQ3IBpUt3UT5S2fn37YFFia3cMGWuWrbzSYzakhso2TXC1uWRk5jsdeEu%2FCRQavf0ZALdICS6HprofVRpqvvxqiA2UqJZ40NyasMA7FFU2AlnG9eGCfPGh6NSsOBmGnhs8HuzLaq5B5qrGiFpdhZv0FpnY4BKDN8dO8aiF6G7ZLqWaMNvdbEeNXso7ZJ1HRC257XyaagDSYlKESL7RaRgmpIWlg7z9LH5s12p4JSS5JLLR6ACnuZMKYKTKnMymoijUOvFTQzVqoFEMKjwPl7LBeKmYcxaA31dNIHpm1vo5Y6sOCKtflia%2FpMATK0K3gafYUKnLDhRSj3ZkYHM3a%2F0tbXzfUaM6mfzqCzYaz0EhuM%2FvZsibrzvsW%2B%2BqrZQRgXwhTFTD6wb4RWfxEE%2FXpVhNKqKaoTn0uey2693N4CzFQeHVvagmV%2FKiWMfXvhAYcw%2BoucvgY6pgHHSApWeTmKZqte6DnO0VGduBHEi2EMSmsQiMOMK2Jjuq8JfpHGOQyA1k0pOORt6zGZr3LGlSnpE286muq7OsZ5jeTjuhb4GtnfxhN2kzQT1%2FlBTwb2nLAzqnsenQAHDBPZyXb%2F2Aif3MXT8uanI8CqAgLOQaDYXvNJsQRfm3Kb2jm7tngYQo6HBcJmCWQe7hF%2FWwNvVOh0pQ2H3H0qApQ3qpQ%2Bqkis&X-Amz-Signature=7265e38789a2aeb2e6a42451a14195d66d9a39d83445a963ec3e4a748beeda52&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
