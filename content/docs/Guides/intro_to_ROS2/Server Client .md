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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOBL5LAR%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC9Z96fml1wE1YgVjEm%2BX10K5GQQudDj0dCSQNFGXIOSgIhAIrKxdpdOBev2XIMSk%2F92cErBVwTgAQzaFFXU9IztJQ3Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxVz7quRFx9qAMK6bwq3APKxWEQup%2BsU2K0x5MXmhG%2B0ACrKbGjoRkMExH%2B711ErCR2%2BuEnGXdKC%2BjitcTlumIrfhbsAzJgwe0Kccx2YUgS1hnNdSpoTSpt5kGyBtl5Dv6q9eUGmRn7gqQGz2NiF14qSK%2BrJtLu9GdedayTQBdhWR72g%2B%2F0V0vWH0BTY%2BMiTWfF7LkjkuneY7FaDlDNDBEhaRwcWWQlOT55JM0opiAATmcMvY%2FhB22WshJ%2FQjKpP%2F1XrFlw%2BznAVp5iZYvOPSdEOWVR5dWL3sfn3AgWzE4Rs11naPCoGXLeIyj4H8QnvGtYUJW3wl1fFlDZj0ZkYMMOvfHyluAqa8e9MKBoF1BKoJbmEZ2AGAkILA2jIWGWCOQvXiouWVVfyx81Sb1HBr%2B8SuqPkCmBSJgU1iloUN8XBFPFoW5hfe%2FG%2FAjjGikz2a%2B1gC9SaXDNylkt4KRYqn9hvpD9RTcmTbvpY0QoXx%2FFS%2Fsat4XbjD2QqNMLLehCNdUIsziGPO0kObATPCFXJtkvzGC7mhe8PEeAAqWz1EeifDuj2BD61vdcvGZCcrl%2B6UJQQXo0sfkPoSqHqw2uoHqLnGQxEYzo3RFcGfTZKFK5ZjB8UP9iWUskIzQ1v1jUTUxnsBmTFXJRfQ%2FKxDC%2F%2Fr3CBjqkAbiJoVHVp2z8ln2tMf%2Bq0%2BN%2BrbRpGfR6zD18ctXRjfyt%2B4rhNHO%2BocuN5%2BCYWYMPERyo77VN2Z6eLyTFuRK7bYJ%2BBivyTiSqPbSrMNa9CI5DQonUgIwmrcIFKSAdZZpwhsCpHBt2W7yvqTYHj5KoY0fIMgW%2FTSu5mleFKaxo8PwC7pkP%2B56JclCuok8QjxEUW2w7QaVI%2FVyO78uQo7PgfWz0J9mj&X-Amz-Signature=7d8915212e7ce90e2c29d8d5d6e9b91da5e4365489e89374cf31aced28226a2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOBL5LAR%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC9Z96fml1wE1YgVjEm%2BX10K5GQQudDj0dCSQNFGXIOSgIhAIrKxdpdOBev2XIMSk%2F92cErBVwTgAQzaFFXU9IztJQ3Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxVz7quRFx9qAMK6bwq3APKxWEQup%2BsU2K0x5MXmhG%2B0ACrKbGjoRkMExH%2B711ErCR2%2BuEnGXdKC%2BjitcTlumIrfhbsAzJgwe0Kccx2YUgS1hnNdSpoTSpt5kGyBtl5Dv6q9eUGmRn7gqQGz2NiF14qSK%2BrJtLu9GdedayTQBdhWR72g%2B%2F0V0vWH0BTY%2BMiTWfF7LkjkuneY7FaDlDNDBEhaRwcWWQlOT55JM0opiAATmcMvY%2FhB22WshJ%2FQjKpP%2F1XrFlw%2BznAVp5iZYvOPSdEOWVR5dWL3sfn3AgWzE4Rs11naPCoGXLeIyj4H8QnvGtYUJW3wl1fFlDZj0ZkYMMOvfHyluAqa8e9MKBoF1BKoJbmEZ2AGAkILA2jIWGWCOQvXiouWVVfyx81Sb1HBr%2B8SuqPkCmBSJgU1iloUN8XBFPFoW5hfe%2FG%2FAjjGikz2a%2B1gC9SaXDNylkt4KRYqn9hvpD9RTcmTbvpY0QoXx%2FFS%2Fsat4XbjD2QqNMLLehCNdUIsziGPO0kObATPCFXJtkvzGC7mhe8PEeAAqWz1EeifDuj2BD61vdcvGZCcrl%2B6UJQQXo0sfkPoSqHqw2uoHqLnGQxEYzo3RFcGfTZKFK5ZjB8UP9iWUskIzQ1v1jUTUxnsBmTFXJRfQ%2FKxDC%2F%2Fr3CBjqkAbiJoVHVp2z8ln2tMf%2Bq0%2BN%2BrbRpGfR6zD18ctXRjfyt%2B4rhNHO%2BocuN5%2BCYWYMPERyo77VN2Z6eLyTFuRK7bYJ%2BBivyTiSqPbSrMNa9CI5DQonUgIwmrcIFKSAdZZpwhsCpHBt2W7yvqTYHj5KoY0fIMgW%2FTSu5mleFKaxo8PwC7pkP%2B56JclCuok8QjxEUW2w7QaVI%2FVyO78uQo7PgfWz0J9mj&X-Amz-Signature=813ebc121bcaab2c59057dcb18d82648b97c96a416ae3e22485d942cfb02e29c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOBL5LAR%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC9Z96fml1wE1YgVjEm%2BX10K5GQQudDj0dCSQNFGXIOSgIhAIrKxdpdOBev2XIMSk%2F92cErBVwTgAQzaFFXU9IztJQ3Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxVz7quRFx9qAMK6bwq3APKxWEQup%2BsU2K0x5MXmhG%2B0ACrKbGjoRkMExH%2B711ErCR2%2BuEnGXdKC%2BjitcTlumIrfhbsAzJgwe0Kccx2YUgS1hnNdSpoTSpt5kGyBtl5Dv6q9eUGmRn7gqQGz2NiF14qSK%2BrJtLu9GdedayTQBdhWR72g%2B%2F0V0vWH0BTY%2BMiTWfF7LkjkuneY7FaDlDNDBEhaRwcWWQlOT55JM0opiAATmcMvY%2FhB22WshJ%2FQjKpP%2F1XrFlw%2BznAVp5iZYvOPSdEOWVR5dWL3sfn3AgWzE4Rs11naPCoGXLeIyj4H8QnvGtYUJW3wl1fFlDZj0ZkYMMOvfHyluAqa8e9MKBoF1BKoJbmEZ2AGAkILA2jIWGWCOQvXiouWVVfyx81Sb1HBr%2B8SuqPkCmBSJgU1iloUN8XBFPFoW5hfe%2FG%2FAjjGikz2a%2B1gC9SaXDNylkt4KRYqn9hvpD9RTcmTbvpY0QoXx%2FFS%2Fsat4XbjD2QqNMLLehCNdUIsziGPO0kObATPCFXJtkvzGC7mhe8PEeAAqWz1EeifDuj2BD61vdcvGZCcrl%2B6UJQQXo0sfkPoSqHqw2uoHqLnGQxEYzo3RFcGfTZKFK5ZjB8UP9iWUskIzQ1v1jUTUxnsBmTFXJRfQ%2FKxDC%2F%2Fr3CBjqkAbiJoVHVp2z8ln2tMf%2Bq0%2BN%2BrbRpGfR6zD18ctXRjfyt%2B4rhNHO%2BocuN5%2BCYWYMPERyo77VN2Z6eLyTFuRK7bYJ%2BBivyTiSqPbSrMNa9CI5DQonUgIwmrcIFKSAdZZpwhsCpHBt2W7yvqTYHj5KoY0fIMgW%2FTSu5mleFKaxo8PwC7pkP%2B56JclCuok8QjxEUW2w7QaVI%2FVyO78uQo7PgfWz0J9mj&X-Amz-Signature=a6915bb0ddee6e943c6e0506205e2523f6c61d0fdb044399608b6181364f88c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOBL5LAR%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC9Z96fml1wE1YgVjEm%2BX10K5GQQudDj0dCSQNFGXIOSgIhAIrKxdpdOBev2XIMSk%2F92cErBVwTgAQzaFFXU9IztJQ3Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxVz7quRFx9qAMK6bwq3APKxWEQup%2BsU2K0x5MXmhG%2B0ACrKbGjoRkMExH%2B711ErCR2%2BuEnGXdKC%2BjitcTlumIrfhbsAzJgwe0Kccx2YUgS1hnNdSpoTSpt5kGyBtl5Dv6q9eUGmRn7gqQGz2NiF14qSK%2BrJtLu9GdedayTQBdhWR72g%2B%2F0V0vWH0BTY%2BMiTWfF7LkjkuneY7FaDlDNDBEhaRwcWWQlOT55JM0opiAATmcMvY%2FhB22WshJ%2FQjKpP%2F1XrFlw%2BznAVp5iZYvOPSdEOWVR5dWL3sfn3AgWzE4Rs11naPCoGXLeIyj4H8QnvGtYUJW3wl1fFlDZj0ZkYMMOvfHyluAqa8e9MKBoF1BKoJbmEZ2AGAkILA2jIWGWCOQvXiouWVVfyx81Sb1HBr%2B8SuqPkCmBSJgU1iloUN8XBFPFoW5hfe%2FG%2FAjjGikz2a%2B1gC9SaXDNylkt4KRYqn9hvpD9RTcmTbvpY0QoXx%2FFS%2Fsat4XbjD2QqNMLLehCNdUIsziGPO0kObATPCFXJtkvzGC7mhe8PEeAAqWz1EeifDuj2BD61vdcvGZCcrl%2B6UJQQXo0sfkPoSqHqw2uoHqLnGQxEYzo3RFcGfTZKFK5ZjB8UP9iWUskIzQ1v1jUTUxnsBmTFXJRfQ%2FKxDC%2F%2Fr3CBjqkAbiJoVHVp2z8ln2tMf%2Bq0%2BN%2BrbRpGfR6zD18ctXRjfyt%2B4rhNHO%2BocuN5%2BCYWYMPERyo77VN2Z6eLyTFuRK7bYJ%2BBivyTiSqPbSrMNa9CI5DQonUgIwmrcIFKSAdZZpwhsCpHBt2W7yvqTYHj5KoY0fIMgW%2FTSu5mleFKaxo8PwC7pkP%2B56JclCuok8QjxEUW2w7QaVI%2FVyO78uQo7PgfWz0J9mj&X-Amz-Signature=6f511c5df8c75e666003520a1d8a88848b1a763b4b16cc160427fdbca853d305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOBL5LAR%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC9Z96fml1wE1YgVjEm%2BX10K5GQQudDj0dCSQNFGXIOSgIhAIrKxdpdOBev2XIMSk%2F92cErBVwTgAQzaFFXU9IztJQ3Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxVz7quRFx9qAMK6bwq3APKxWEQup%2BsU2K0x5MXmhG%2B0ACrKbGjoRkMExH%2B711ErCR2%2BuEnGXdKC%2BjitcTlumIrfhbsAzJgwe0Kccx2YUgS1hnNdSpoTSpt5kGyBtl5Dv6q9eUGmRn7gqQGz2NiF14qSK%2BrJtLu9GdedayTQBdhWR72g%2B%2F0V0vWH0BTY%2BMiTWfF7LkjkuneY7FaDlDNDBEhaRwcWWQlOT55JM0opiAATmcMvY%2FhB22WshJ%2FQjKpP%2F1XrFlw%2BznAVp5iZYvOPSdEOWVR5dWL3sfn3AgWzE4Rs11naPCoGXLeIyj4H8QnvGtYUJW3wl1fFlDZj0ZkYMMOvfHyluAqa8e9MKBoF1BKoJbmEZ2AGAkILA2jIWGWCOQvXiouWVVfyx81Sb1HBr%2B8SuqPkCmBSJgU1iloUN8XBFPFoW5hfe%2FG%2FAjjGikz2a%2B1gC9SaXDNylkt4KRYqn9hvpD9RTcmTbvpY0QoXx%2FFS%2Fsat4XbjD2QqNMLLehCNdUIsziGPO0kObATPCFXJtkvzGC7mhe8PEeAAqWz1EeifDuj2BD61vdcvGZCcrl%2B6UJQQXo0sfkPoSqHqw2uoHqLnGQxEYzo3RFcGfTZKFK5ZjB8UP9iWUskIzQ1v1jUTUxnsBmTFXJRfQ%2FKxDC%2F%2Fr3CBjqkAbiJoVHVp2z8ln2tMf%2Bq0%2BN%2BrbRpGfR6zD18ctXRjfyt%2B4rhNHO%2BocuN5%2BCYWYMPERyo77VN2Z6eLyTFuRK7bYJ%2BBivyTiSqPbSrMNa9CI5DQonUgIwmrcIFKSAdZZpwhsCpHBt2W7yvqTYHj5KoY0fIMgW%2FTSu5mleFKaxo8PwC7pkP%2B56JclCuok8QjxEUW2w7QaVI%2FVyO78uQo7PgfWz0J9mj&X-Amz-Signature=beb268af3e217e0f55c6c9fd946e32f774487b116d1f9485bb2281dd668a7a8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
