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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7PT3CJZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEj8zwIcSO%2BdOQX4f5zHouAUYCOOZ0bc%2F02Gp7FMjnZuAiEAn4pJmwskhjU9IoQx1enUd5RlPNR%2BZejlWNFKHFmT3C8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDA%2BBNpviJzADDAppCCrcA4X%2FNdJFSwsAJutt8c%2FJKuRJWtNnN5AwNzamrkZUcX0jyUql8J0w3ldiI6f2PdlnSVWvY4RMfQfWRM0Ah%2Bb3mjPJZhWfxZ%2FD0Dv25%2FBuNOzL5rGG%2BGOQL0QCIVhDu7RBgxdxCegijYeasYGYsl2cHeH0CkW1Kr8zeHowwR8j6PJUUGU1htoWvLaOM7GHid2CHVHOGPZeR1IoycdYoN9O0Nt3NyXpPjKYRDlHgxhEcqOD8iwsAD6X34gL4GZxmfPRiMs70Erh6CAO2BYvxuQBmwxRQLYWq12upStJ7Mq9gieAqSizux2cqBNftVTjKZxks8A24GJV6u5BtsRxoLdmFqF%2FvqY%2BKjCyyK7anHZn4r0f4Jh57LtcyEApuoa3n4NnAIo4G2e1NmX9gfLVfAExsF41do0WcKNBKfIiRllcTW%2FTvqU%2Fu%2FAOVPXFFdH%2Fsu4hg2NyoKz2e8A%2FsXyViTZ0yPjA9Gj6AZyPSlzUOj70WLTMdZoiU9bVwrE6Vt7KKG9kZo00eeRsbapmM1pRFvNFeMji6MOgAW8r7kK8KHWCeKmasUf2QSPHXsj5XSJN%2FBcn1euQttxhuJimf9L%2BYXiRFxddVYQ%2Blxhw3NEGPRSF8%2BaIpnwmYVKrw0vubEiBMMDF4b4GOqUBO1v5LXXt%2BvtRmjoq1LlJ68RZklBBs9oikQB%2FFz1XHsubigv9GVzpEGUp3iww8HhT5BKrVMk4%2BxlVX29%2BnKBLm1RXlr0Ra8knQargCATCtOdt5Rw95jPsn8B%2F72HENobyLsGVMHWiXUA0DC1nq5DxDCF%2Boj%2F6DINElz%2BF9VYmZiepukZsItwLP3RJ0DWKMzMid0Wk2AbmyPHA0nvdpTQNuyD2L3Hi&X-Amz-Signature=edee6ff88c6146544e1f63bef25a40aeeaaf148189df5f17ad328e33d9957a06&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7PT3CJZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEj8zwIcSO%2BdOQX4f5zHouAUYCOOZ0bc%2F02Gp7FMjnZuAiEAn4pJmwskhjU9IoQx1enUd5RlPNR%2BZejlWNFKHFmT3C8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDA%2BBNpviJzADDAppCCrcA4X%2FNdJFSwsAJutt8c%2FJKuRJWtNnN5AwNzamrkZUcX0jyUql8J0w3ldiI6f2PdlnSVWvY4RMfQfWRM0Ah%2Bb3mjPJZhWfxZ%2FD0Dv25%2FBuNOzL5rGG%2BGOQL0QCIVhDu7RBgxdxCegijYeasYGYsl2cHeH0CkW1Kr8zeHowwR8j6PJUUGU1htoWvLaOM7GHid2CHVHOGPZeR1IoycdYoN9O0Nt3NyXpPjKYRDlHgxhEcqOD8iwsAD6X34gL4GZxmfPRiMs70Erh6CAO2BYvxuQBmwxRQLYWq12upStJ7Mq9gieAqSizux2cqBNftVTjKZxks8A24GJV6u5BtsRxoLdmFqF%2FvqY%2BKjCyyK7anHZn4r0f4Jh57LtcyEApuoa3n4NnAIo4G2e1NmX9gfLVfAExsF41do0WcKNBKfIiRllcTW%2FTvqU%2Fu%2FAOVPXFFdH%2Fsu4hg2NyoKz2e8A%2FsXyViTZ0yPjA9Gj6AZyPSlzUOj70WLTMdZoiU9bVwrE6Vt7KKG9kZo00eeRsbapmM1pRFvNFeMji6MOgAW8r7kK8KHWCeKmasUf2QSPHXsj5XSJN%2FBcn1euQttxhuJimf9L%2BYXiRFxddVYQ%2Blxhw3NEGPRSF8%2BaIpnwmYVKrw0vubEiBMMDF4b4GOqUBO1v5LXXt%2BvtRmjoq1LlJ68RZklBBs9oikQB%2FFz1XHsubigv9GVzpEGUp3iww8HhT5BKrVMk4%2BxlVX29%2BnKBLm1RXlr0Ra8knQargCATCtOdt5Rw95jPsn8B%2F72HENobyLsGVMHWiXUA0DC1nq5DxDCF%2Boj%2F6DINElz%2BF9VYmZiepukZsItwLP3RJ0DWKMzMid0Wk2AbmyPHA0nvdpTQNuyD2L3Hi&X-Amz-Signature=193ecf25639245fced74482f43319d4e995e70894d21611bd3330eedac0909c1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7PT3CJZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEj8zwIcSO%2BdOQX4f5zHouAUYCOOZ0bc%2F02Gp7FMjnZuAiEAn4pJmwskhjU9IoQx1enUd5RlPNR%2BZejlWNFKHFmT3C8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDA%2BBNpviJzADDAppCCrcA4X%2FNdJFSwsAJutt8c%2FJKuRJWtNnN5AwNzamrkZUcX0jyUql8J0w3ldiI6f2PdlnSVWvY4RMfQfWRM0Ah%2Bb3mjPJZhWfxZ%2FD0Dv25%2FBuNOzL5rGG%2BGOQL0QCIVhDu7RBgxdxCegijYeasYGYsl2cHeH0CkW1Kr8zeHowwR8j6PJUUGU1htoWvLaOM7GHid2CHVHOGPZeR1IoycdYoN9O0Nt3NyXpPjKYRDlHgxhEcqOD8iwsAD6X34gL4GZxmfPRiMs70Erh6CAO2BYvxuQBmwxRQLYWq12upStJ7Mq9gieAqSizux2cqBNftVTjKZxks8A24GJV6u5BtsRxoLdmFqF%2FvqY%2BKjCyyK7anHZn4r0f4Jh57LtcyEApuoa3n4NnAIo4G2e1NmX9gfLVfAExsF41do0WcKNBKfIiRllcTW%2FTvqU%2Fu%2FAOVPXFFdH%2Fsu4hg2NyoKz2e8A%2FsXyViTZ0yPjA9Gj6AZyPSlzUOj70WLTMdZoiU9bVwrE6Vt7KKG9kZo00eeRsbapmM1pRFvNFeMji6MOgAW8r7kK8KHWCeKmasUf2QSPHXsj5XSJN%2FBcn1euQttxhuJimf9L%2BYXiRFxddVYQ%2Blxhw3NEGPRSF8%2BaIpnwmYVKrw0vubEiBMMDF4b4GOqUBO1v5LXXt%2BvtRmjoq1LlJ68RZklBBs9oikQB%2FFz1XHsubigv9GVzpEGUp3iww8HhT5BKrVMk4%2BxlVX29%2BnKBLm1RXlr0Ra8knQargCATCtOdt5Rw95jPsn8B%2F72HENobyLsGVMHWiXUA0DC1nq5DxDCF%2Boj%2F6DINElz%2BF9VYmZiepukZsItwLP3RJ0DWKMzMid0Wk2AbmyPHA0nvdpTQNuyD2L3Hi&X-Amz-Signature=e7458fa38af79b0343b805ba8800051dbab30714fa79d0c4e36450b8ff4bd6c9&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7PT3CJZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEj8zwIcSO%2BdOQX4f5zHouAUYCOOZ0bc%2F02Gp7FMjnZuAiEAn4pJmwskhjU9IoQx1enUd5RlPNR%2BZejlWNFKHFmT3C8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDA%2BBNpviJzADDAppCCrcA4X%2FNdJFSwsAJutt8c%2FJKuRJWtNnN5AwNzamrkZUcX0jyUql8J0w3ldiI6f2PdlnSVWvY4RMfQfWRM0Ah%2Bb3mjPJZhWfxZ%2FD0Dv25%2FBuNOzL5rGG%2BGOQL0QCIVhDu7RBgxdxCegijYeasYGYsl2cHeH0CkW1Kr8zeHowwR8j6PJUUGU1htoWvLaOM7GHid2CHVHOGPZeR1IoycdYoN9O0Nt3NyXpPjKYRDlHgxhEcqOD8iwsAD6X34gL4GZxmfPRiMs70Erh6CAO2BYvxuQBmwxRQLYWq12upStJ7Mq9gieAqSizux2cqBNftVTjKZxks8A24GJV6u5BtsRxoLdmFqF%2FvqY%2BKjCyyK7anHZn4r0f4Jh57LtcyEApuoa3n4NnAIo4G2e1NmX9gfLVfAExsF41do0WcKNBKfIiRllcTW%2FTvqU%2Fu%2FAOVPXFFdH%2Fsu4hg2NyoKz2e8A%2FsXyViTZ0yPjA9Gj6AZyPSlzUOj70WLTMdZoiU9bVwrE6Vt7KKG9kZo00eeRsbapmM1pRFvNFeMji6MOgAW8r7kK8KHWCeKmasUf2QSPHXsj5XSJN%2FBcn1euQttxhuJimf9L%2BYXiRFxddVYQ%2Blxhw3NEGPRSF8%2BaIpnwmYVKrw0vubEiBMMDF4b4GOqUBO1v5LXXt%2BvtRmjoq1LlJ68RZklBBs9oikQB%2FFz1XHsubigv9GVzpEGUp3iww8HhT5BKrVMk4%2BxlVX29%2BnKBLm1RXlr0Ra8knQargCATCtOdt5Rw95jPsn8B%2F72HENobyLsGVMHWiXUA0DC1nq5DxDCF%2Boj%2F6DINElz%2BF9VYmZiepukZsItwLP3RJ0DWKMzMid0Wk2AbmyPHA0nvdpTQNuyD2L3Hi&X-Amz-Signature=680100c37ca37b621ba85a4cf1c79488e52c8cd68fdb06724026c8db960bdf6d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7PT3CJZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEj8zwIcSO%2BdOQX4f5zHouAUYCOOZ0bc%2F02Gp7FMjnZuAiEAn4pJmwskhjU9IoQx1enUd5RlPNR%2BZejlWNFKHFmT3C8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDA%2BBNpviJzADDAppCCrcA4X%2FNdJFSwsAJutt8c%2FJKuRJWtNnN5AwNzamrkZUcX0jyUql8J0w3ldiI6f2PdlnSVWvY4RMfQfWRM0Ah%2Bb3mjPJZhWfxZ%2FD0Dv25%2FBuNOzL5rGG%2BGOQL0QCIVhDu7RBgxdxCegijYeasYGYsl2cHeH0CkW1Kr8zeHowwR8j6PJUUGU1htoWvLaOM7GHid2CHVHOGPZeR1IoycdYoN9O0Nt3NyXpPjKYRDlHgxhEcqOD8iwsAD6X34gL4GZxmfPRiMs70Erh6CAO2BYvxuQBmwxRQLYWq12upStJ7Mq9gieAqSizux2cqBNftVTjKZxks8A24GJV6u5BtsRxoLdmFqF%2FvqY%2BKjCyyK7anHZn4r0f4Jh57LtcyEApuoa3n4NnAIo4G2e1NmX9gfLVfAExsF41do0WcKNBKfIiRllcTW%2FTvqU%2Fu%2FAOVPXFFdH%2Fsu4hg2NyoKz2e8A%2FsXyViTZ0yPjA9Gj6AZyPSlzUOj70WLTMdZoiU9bVwrE6Vt7KKG9kZo00eeRsbapmM1pRFvNFeMji6MOgAW8r7kK8KHWCeKmasUf2QSPHXsj5XSJN%2FBcn1euQttxhuJimf9L%2BYXiRFxddVYQ%2Blxhw3NEGPRSF8%2BaIpnwmYVKrw0vubEiBMMDF4b4GOqUBO1v5LXXt%2BvtRmjoq1LlJ68RZklBBs9oikQB%2FFz1XHsubigv9GVzpEGUp3iww8HhT5BKrVMk4%2BxlVX29%2BnKBLm1RXlr0Ra8knQargCATCtOdt5Rw95jPsn8B%2F72HENobyLsGVMHWiXUA0DC1nq5DxDCF%2Boj%2F6DINElz%2BF9VYmZiepukZsItwLP3RJ0DWKMzMid0Wk2AbmyPHA0nvdpTQNuyD2L3Hi&X-Amz-Signature=3d9c60029d8a1aeaa6dcb2171452683170f9cb47dbc7e6c29b148f5919eb92bf&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
