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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MUJOAJK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQC9Bv%2Bewnwd4VKdNxMzf1MaJQNOdrNC%2FS4FqlHjzA1wNQIgMtwbvNHYMCJ39WwKAqpUOfEIlluJjXDV4on%2F5OEmAT4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFHNIky1ASXYXS1pyrcA1A87%2FR0FLDOEJhvfS9RQxV%2FIbr4KSofY9w8bw5svBst5NcRbXRVwhHzMiVka8WUP8MtMr%2BbuLb7NXUiiRDs89Kt%2FTidB7f81NPDYzAUfFkieIFwy%2BU5qBHNAq6Nksh5aAdK%2BF6QHlCkHj1HI3zMCIW7vFenw%2B1kTmwYmVA%2BoY2ehuYUFfDpww8ctMbITBBS68IMXSnMtN6pHwGF6hnCC7pWPw7Hp3voBvgQURM50aHX3OvNd3P%2Fshskmi1MYSk%2BFhlXeUUefk5q6CyRimL37at5crwOeeyPv9ffZw9bTwzZNSCz7Gtww9xJHIMAQHeKyl5HmefQ8xKmVygPXXDsmaEYtxe1t%2FpPn%2BoUMoE9hvlSwjCFXkqYfWcQ%2BM%2BMoaz2GlZK0aKoVFKxo8j9Hax9Ta2PtonAs8Zv0ta%2BO5bCzeyI3aFPAUOFgAYrMSe3jQthGh5%2BejEXz9afG1jk5pr%2FkJBj25qIcAJdlDX4MClfLWN2PvbzX5QPwPzqoOL8cZh1yEDmCkGd8gOVG9%2FhFqlMl69P1yFkVVg2Huem8zdyP%2BQNqgVSock2HeCJlx2W%2FkvXzKiVLD9ogwH%2BeeEEohZy3FLicHaM4STj3Egx5NzjwE8GL1c%2BUx%2Bg9yhjrNAYMP%2Fe8MEGOqUBEMsHhdtrpvG3GWh%2B2A17ws7U3bPiQ94ddsFYQSUa9ck871zZ%2FGvXWM88am5UknLuBuXRrdkk3YKYqS7Roj8T%2BMGfM8Zax0cTC%2Feh9kSQ1RxoNeeHSEQc2vd9nXXnKuueP6RIT10%2BOdd4yMeg09IKCOwF70j6FI1I%2F257TG94RkesSB11ku%2F7zajr0SEhlOfr0d7EWV4X4AnbDYsHnvvvJk2jTRfj&X-Amz-Signature=21f3c5834b78cdcfa0eb47caca3fb43cca6fbdc6377fb543cabbc1b4ca85ed2c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MUJOAJK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQC9Bv%2Bewnwd4VKdNxMzf1MaJQNOdrNC%2FS4FqlHjzA1wNQIgMtwbvNHYMCJ39WwKAqpUOfEIlluJjXDV4on%2F5OEmAT4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFHNIky1ASXYXS1pyrcA1A87%2FR0FLDOEJhvfS9RQxV%2FIbr4KSofY9w8bw5svBst5NcRbXRVwhHzMiVka8WUP8MtMr%2BbuLb7NXUiiRDs89Kt%2FTidB7f81NPDYzAUfFkieIFwy%2BU5qBHNAq6Nksh5aAdK%2BF6QHlCkHj1HI3zMCIW7vFenw%2B1kTmwYmVA%2BoY2ehuYUFfDpww8ctMbITBBS68IMXSnMtN6pHwGF6hnCC7pWPw7Hp3voBvgQURM50aHX3OvNd3P%2Fshskmi1MYSk%2BFhlXeUUefk5q6CyRimL37at5crwOeeyPv9ffZw9bTwzZNSCz7Gtww9xJHIMAQHeKyl5HmefQ8xKmVygPXXDsmaEYtxe1t%2FpPn%2BoUMoE9hvlSwjCFXkqYfWcQ%2BM%2BMoaz2GlZK0aKoVFKxo8j9Hax9Ta2PtonAs8Zv0ta%2BO5bCzeyI3aFPAUOFgAYrMSe3jQthGh5%2BejEXz9afG1jk5pr%2FkJBj25qIcAJdlDX4MClfLWN2PvbzX5QPwPzqoOL8cZh1yEDmCkGd8gOVG9%2FhFqlMl69P1yFkVVg2Huem8zdyP%2BQNqgVSock2HeCJlx2W%2FkvXzKiVLD9ogwH%2BeeEEohZy3FLicHaM4STj3Egx5NzjwE8GL1c%2BUx%2Bg9yhjrNAYMP%2Fe8MEGOqUBEMsHhdtrpvG3GWh%2B2A17ws7U3bPiQ94ddsFYQSUa9ck871zZ%2FGvXWM88am5UknLuBuXRrdkk3YKYqS7Roj8T%2BMGfM8Zax0cTC%2Feh9kSQ1RxoNeeHSEQc2vd9nXXnKuueP6RIT10%2BOdd4yMeg09IKCOwF70j6FI1I%2F257TG94RkesSB11ku%2F7zajr0SEhlOfr0d7EWV4X4AnbDYsHnvvvJk2jTRfj&X-Amz-Signature=9e720c85b110356b20961f9a18d1896156f805863f0ac78dcfb7ba1f13a7892e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MUJOAJK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQC9Bv%2Bewnwd4VKdNxMzf1MaJQNOdrNC%2FS4FqlHjzA1wNQIgMtwbvNHYMCJ39WwKAqpUOfEIlluJjXDV4on%2F5OEmAT4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFHNIky1ASXYXS1pyrcA1A87%2FR0FLDOEJhvfS9RQxV%2FIbr4KSofY9w8bw5svBst5NcRbXRVwhHzMiVka8WUP8MtMr%2BbuLb7NXUiiRDs89Kt%2FTidB7f81NPDYzAUfFkieIFwy%2BU5qBHNAq6Nksh5aAdK%2BF6QHlCkHj1HI3zMCIW7vFenw%2B1kTmwYmVA%2BoY2ehuYUFfDpww8ctMbITBBS68IMXSnMtN6pHwGF6hnCC7pWPw7Hp3voBvgQURM50aHX3OvNd3P%2Fshskmi1MYSk%2BFhlXeUUefk5q6CyRimL37at5crwOeeyPv9ffZw9bTwzZNSCz7Gtww9xJHIMAQHeKyl5HmefQ8xKmVygPXXDsmaEYtxe1t%2FpPn%2BoUMoE9hvlSwjCFXkqYfWcQ%2BM%2BMoaz2GlZK0aKoVFKxo8j9Hax9Ta2PtonAs8Zv0ta%2BO5bCzeyI3aFPAUOFgAYrMSe3jQthGh5%2BejEXz9afG1jk5pr%2FkJBj25qIcAJdlDX4MClfLWN2PvbzX5QPwPzqoOL8cZh1yEDmCkGd8gOVG9%2FhFqlMl69P1yFkVVg2Huem8zdyP%2BQNqgVSock2HeCJlx2W%2FkvXzKiVLD9ogwH%2BeeEEohZy3FLicHaM4STj3Egx5NzjwE8GL1c%2BUx%2Bg9yhjrNAYMP%2Fe8MEGOqUBEMsHhdtrpvG3GWh%2B2A17ws7U3bPiQ94ddsFYQSUa9ck871zZ%2FGvXWM88am5UknLuBuXRrdkk3YKYqS7Roj8T%2BMGfM8Zax0cTC%2Feh9kSQ1RxoNeeHSEQc2vd9nXXnKuueP6RIT10%2BOdd4yMeg09IKCOwF70j6FI1I%2F257TG94RkesSB11ku%2F7zajr0SEhlOfr0d7EWV4X4AnbDYsHnvvvJk2jTRfj&X-Amz-Signature=f4f60475a2730869ee84705c1e3892c2258b7aae6934a15a5586fb3112c5a27f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MUJOAJK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQC9Bv%2Bewnwd4VKdNxMzf1MaJQNOdrNC%2FS4FqlHjzA1wNQIgMtwbvNHYMCJ39WwKAqpUOfEIlluJjXDV4on%2F5OEmAT4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFHNIky1ASXYXS1pyrcA1A87%2FR0FLDOEJhvfS9RQxV%2FIbr4KSofY9w8bw5svBst5NcRbXRVwhHzMiVka8WUP8MtMr%2BbuLb7NXUiiRDs89Kt%2FTidB7f81NPDYzAUfFkieIFwy%2BU5qBHNAq6Nksh5aAdK%2BF6QHlCkHj1HI3zMCIW7vFenw%2B1kTmwYmVA%2BoY2ehuYUFfDpww8ctMbITBBS68IMXSnMtN6pHwGF6hnCC7pWPw7Hp3voBvgQURM50aHX3OvNd3P%2Fshskmi1MYSk%2BFhlXeUUefk5q6CyRimL37at5crwOeeyPv9ffZw9bTwzZNSCz7Gtww9xJHIMAQHeKyl5HmefQ8xKmVygPXXDsmaEYtxe1t%2FpPn%2BoUMoE9hvlSwjCFXkqYfWcQ%2BM%2BMoaz2GlZK0aKoVFKxo8j9Hax9Ta2PtonAs8Zv0ta%2BO5bCzeyI3aFPAUOFgAYrMSe3jQthGh5%2BejEXz9afG1jk5pr%2FkJBj25qIcAJdlDX4MClfLWN2PvbzX5QPwPzqoOL8cZh1yEDmCkGd8gOVG9%2FhFqlMl69P1yFkVVg2Huem8zdyP%2BQNqgVSock2HeCJlx2W%2FkvXzKiVLD9ogwH%2BeeEEohZy3FLicHaM4STj3Egx5NzjwE8GL1c%2BUx%2Bg9yhjrNAYMP%2Fe8MEGOqUBEMsHhdtrpvG3GWh%2B2A17ws7U3bPiQ94ddsFYQSUa9ck871zZ%2FGvXWM88am5UknLuBuXRrdkk3YKYqS7Roj8T%2BMGfM8Zax0cTC%2Feh9kSQ1RxoNeeHSEQc2vd9nXXnKuueP6RIT10%2BOdd4yMeg09IKCOwF70j6FI1I%2F257TG94RkesSB11ku%2F7zajr0SEhlOfr0d7EWV4X4AnbDYsHnvvvJk2jTRfj&X-Amz-Signature=9c0204d85e6107eb394b8fe9fc14c2087ed0124efd388a83872c9c77757fad73&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MUJOAJK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQC9Bv%2Bewnwd4VKdNxMzf1MaJQNOdrNC%2FS4FqlHjzA1wNQIgMtwbvNHYMCJ39WwKAqpUOfEIlluJjXDV4on%2F5OEmAT4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFHNIky1ASXYXS1pyrcA1A87%2FR0FLDOEJhvfS9RQxV%2FIbr4KSofY9w8bw5svBst5NcRbXRVwhHzMiVka8WUP8MtMr%2BbuLb7NXUiiRDs89Kt%2FTidB7f81NPDYzAUfFkieIFwy%2BU5qBHNAq6Nksh5aAdK%2BF6QHlCkHj1HI3zMCIW7vFenw%2B1kTmwYmVA%2BoY2ehuYUFfDpww8ctMbITBBS68IMXSnMtN6pHwGF6hnCC7pWPw7Hp3voBvgQURM50aHX3OvNd3P%2Fshskmi1MYSk%2BFhlXeUUefk5q6CyRimL37at5crwOeeyPv9ffZw9bTwzZNSCz7Gtww9xJHIMAQHeKyl5HmefQ8xKmVygPXXDsmaEYtxe1t%2FpPn%2BoUMoE9hvlSwjCFXkqYfWcQ%2BM%2BMoaz2GlZK0aKoVFKxo8j9Hax9Ta2PtonAs8Zv0ta%2BO5bCzeyI3aFPAUOFgAYrMSe3jQthGh5%2BejEXz9afG1jk5pr%2FkJBj25qIcAJdlDX4MClfLWN2PvbzX5QPwPzqoOL8cZh1yEDmCkGd8gOVG9%2FhFqlMl69P1yFkVVg2Huem8zdyP%2BQNqgVSock2HeCJlx2W%2FkvXzKiVLD9ogwH%2BeeEEohZy3FLicHaM4STj3Egx5NzjwE8GL1c%2BUx%2Bg9yhjrNAYMP%2Fe8MEGOqUBEMsHhdtrpvG3GWh%2B2A17ws7U3bPiQ94ddsFYQSUa9ck871zZ%2FGvXWM88am5UknLuBuXRrdkk3YKYqS7Roj8T%2BMGfM8Zax0cTC%2Feh9kSQ1RxoNeeHSEQc2vd9nXXnKuueP6RIT10%2BOdd4yMeg09IKCOwF70j6FI1I%2F257TG94RkesSB11ku%2F7zajr0SEhlOfr0d7EWV4X4AnbDYsHnvvvJk2jTRfj&X-Amz-Signature=2a967116230d431e06c04dce85402b42226882d10a3670d2132a261d2588f1c0&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
