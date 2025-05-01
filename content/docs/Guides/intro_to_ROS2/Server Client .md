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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MNOGV75%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIH2%2BsA9lvl%2BYq3Hg8bpDTkD8tELfz66UjmtE3nJuD2MeAiEAr5zcXzyGao419aLaQ9JeB1uZHnBklsngvAAfVT1KzSYqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5%2FeTgvZGhVLvkNaSrcA1fLJCCtxHD06IKDetoxj%2Ba6asV5%2B5zzGiCilXCpS39PxkC8BIg0dr2IN4hjMe89PbSJKYkiEPLf0uUR4nBj2tSHXPvJ5ou7snYeypi84jneSQtB0%2BaISz8Q%2B3fq5dQv1wPrW%2BMl9RYmGZogycoGLtSNrGwRkfWzt4LFGGtlJlD0KwOgOc1tadVX3WjGD6P2boVxVcHGuvNnWFED29ROXqD8VO0co%2F5r1XIfAZWpp9YfG7vWmej6q3Id%2FJFmf7tF71Tjd%2B1Zf2AHM65uM3lZkeQ6FmZio4OmljmEofPxI7FwA8BVduHetMpnXGxBhaOe4lhEJTkUFwLHA8nP6o%2FahEzsyP1f7y707RjSFklcMPWn0K6FdyOLsjqSVPXtAEf5jaXNMXi6VZhW1XLFw9WDbLgBv4hv4LRCXaE2uZdZKXOhkL3jU5hiDEA%2B%2FRjUGXcLT8LgqB8wM6zctd%2B7BrHB2oS9%2F%2FN4OLHZp%2FAzVlIGSO2AfOQ9PZh1C%2BFrYVNeTea%2F34qzm8gr89IMCJzR1hwQyYSnyTuOXvoZURW0%2FgSXD6bHt3TQtzeBBSa2GbQBLBncQSejGBRa1MFnjcroTNICEAIHDs5QNss7X%2FD9lHPzoSh6lRmtwuEyc0PYFOdZMLmRz8AGOqUBxJOFBXNkYOdJeaG9Faj2%2F7daTEC%2BHQGME2bW5ltLzm4AGoPBt9FWiNXZVbZpqyGBoBU4EKf5UnDtEEoI8AztEykz38RayvkKtE%2Bb%2F%2FjolDGfv6HamEvZpSwqCdqxXOJL64iAerPRtzFU9wFYS6EOEEBXGsKCjPQAfVkC6lDcrFS8s2fhwkKeRaMFgANJOmGUjlKpaOTg5TSKe6r0FZPlXsQsK16J&X-Amz-Signature=0b486025a58d8b66265c3dc70c23b1c3ac54d70746aebba17eae5bea9f1cae72&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MNOGV75%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIH2%2BsA9lvl%2BYq3Hg8bpDTkD8tELfz66UjmtE3nJuD2MeAiEAr5zcXzyGao419aLaQ9JeB1uZHnBklsngvAAfVT1KzSYqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5%2FeTgvZGhVLvkNaSrcA1fLJCCtxHD06IKDetoxj%2Ba6asV5%2B5zzGiCilXCpS39PxkC8BIg0dr2IN4hjMe89PbSJKYkiEPLf0uUR4nBj2tSHXPvJ5ou7snYeypi84jneSQtB0%2BaISz8Q%2B3fq5dQv1wPrW%2BMl9RYmGZogycoGLtSNrGwRkfWzt4LFGGtlJlD0KwOgOc1tadVX3WjGD6P2boVxVcHGuvNnWFED29ROXqD8VO0co%2F5r1XIfAZWpp9YfG7vWmej6q3Id%2FJFmf7tF71Tjd%2B1Zf2AHM65uM3lZkeQ6FmZio4OmljmEofPxI7FwA8BVduHetMpnXGxBhaOe4lhEJTkUFwLHA8nP6o%2FahEzsyP1f7y707RjSFklcMPWn0K6FdyOLsjqSVPXtAEf5jaXNMXi6VZhW1XLFw9WDbLgBv4hv4LRCXaE2uZdZKXOhkL3jU5hiDEA%2B%2FRjUGXcLT8LgqB8wM6zctd%2B7BrHB2oS9%2F%2FN4OLHZp%2FAzVlIGSO2AfOQ9PZh1C%2BFrYVNeTea%2F34qzm8gr89IMCJzR1hwQyYSnyTuOXvoZURW0%2FgSXD6bHt3TQtzeBBSa2GbQBLBncQSejGBRa1MFnjcroTNICEAIHDs5QNss7X%2FD9lHPzoSh6lRmtwuEyc0PYFOdZMLmRz8AGOqUBxJOFBXNkYOdJeaG9Faj2%2F7daTEC%2BHQGME2bW5ltLzm4AGoPBt9FWiNXZVbZpqyGBoBU4EKf5UnDtEEoI8AztEykz38RayvkKtE%2Bb%2F%2FjolDGfv6HamEvZpSwqCdqxXOJL64iAerPRtzFU9wFYS6EOEEBXGsKCjPQAfVkC6lDcrFS8s2fhwkKeRaMFgANJOmGUjlKpaOTg5TSKe6r0FZPlXsQsK16J&X-Amz-Signature=3d7083e47d35b95ec63c0d534f3042062b7a928b42743223b0c47495fea1c6ae&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MNOGV75%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIH2%2BsA9lvl%2BYq3Hg8bpDTkD8tELfz66UjmtE3nJuD2MeAiEAr5zcXzyGao419aLaQ9JeB1uZHnBklsngvAAfVT1KzSYqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5%2FeTgvZGhVLvkNaSrcA1fLJCCtxHD06IKDetoxj%2Ba6asV5%2B5zzGiCilXCpS39PxkC8BIg0dr2IN4hjMe89PbSJKYkiEPLf0uUR4nBj2tSHXPvJ5ou7snYeypi84jneSQtB0%2BaISz8Q%2B3fq5dQv1wPrW%2BMl9RYmGZogycoGLtSNrGwRkfWzt4LFGGtlJlD0KwOgOc1tadVX3WjGD6P2boVxVcHGuvNnWFED29ROXqD8VO0co%2F5r1XIfAZWpp9YfG7vWmej6q3Id%2FJFmf7tF71Tjd%2B1Zf2AHM65uM3lZkeQ6FmZio4OmljmEofPxI7FwA8BVduHetMpnXGxBhaOe4lhEJTkUFwLHA8nP6o%2FahEzsyP1f7y707RjSFklcMPWn0K6FdyOLsjqSVPXtAEf5jaXNMXi6VZhW1XLFw9WDbLgBv4hv4LRCXaE2uZdZKXOhkL3jU5hiDEA%2B%2FRjUGXcLT8LgqB8wM6zctd%2B7BrHB2oS9%2F%2FN4OLHZp%2FAzVlIGSO2AfOQ9PZh1C%2BFrYVNeTea%2F34qzm8gr89IMCJzR1hwQyYSnyTuOXvoZURW0%2FgSXD6bHt3TQtzeBBSa2GbQBLBncQSejGBRa1MFnjcroTNICEAIHDs5QNss7X%2FD9lHPzoSh6lRmtwuEyc0PYFOdZMLmRz8AGOqUBxJOFBXNkYOdJeaG9Faj2%2F7daTEC%2BHQGME2bW5ltLzm4AGoPBt9FWiNXZVbZpqyGBoBU4EKf5UnDtEEoI8AztEykz38RayvkKtE%2Bb%2F%2FjolDGfv6HamEvZpSwqCdqxXOJL64iAerPRtzFU9wFYS6EOEEBXGsKCjPQAfVkC6lDcrFS8s2fhwkKeRaMFgANJOmGUjlKpaOTg5TSKe6r0FZPlXsQsK16J&X-Amz-Signature=d01296bcbb2e56e5b83ddc55ce26ee7402769d9a893dc0ba17fb3ab6e0af74c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MNOGV75%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIH2%2BsA9lvl%2BYq3Hg8bpDTkD8tELfz66UjmtE3nJuD2MeAiEAr5zcXzyGao419aLaQ9JeB1uZHnBklsngvAAfVT1KzSYqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5%2FeTgvZGhVLvkNaSrcA1fLJCCtxHD06IKDetoxj%2Ba6asV5%2B5zzGiCilXCpS39PxkC8BIg0dr2IN4hjMe89PbSJKYkiEPLf0uUR4nBj2tSHXPvJ5ou7snYeypi84jneSQtB0%2BaISz8Q%2B3fq5dQv1wPrW%2BMl9RYmGZogycoGLtSNrGwRkfWzt4LFGGtlJlD0KwOgOc1tadVX3WjGD6P2boVxVcHGuvNnWFED29ROXqD8VO0co%2F5r1XIfAZWpp9YfG7vWmej6q3Id%2FJFmf7tF71Tjd%2B1Zf2AHM65uM3lZkeQ6FmZio4OmljmEofPxI7FwA8BVduHetMpnXGxBhaOe4lhEJTkUFwLHA8nP6o%2FahEzsyP1f7y707RjSFklcMPWn0K6FdyOLsjqSVPXtAEf5jaXNMXi6VZhW1XLFw9WDbLgBv4hv4LRCXaE2uZdZKXOhkL3jU5hiDEA%2B%2FRjUGXcLT8LgqB8wM6zctd%2B7BrHB2oS9%2F%2FN4OLHZp%2FAzVlIGSO2AfOQ9PZh1C%2BFrYVNeTea%2F34qzm8gr89IMCJzR1hwQyYSnyTuOXvoZURW0%2FgSXD6bHt3TQtzeBBSa2GbQBLBncQSejGBRa1MFnjcroTNICEAIHDs5QNss7X%2FD9lHPzoSh6lRmtwuEyc0PYFOdZMLmRz8AGOqUBxJOFBXNkYOdJeaG9Faj2%2F7daTEC%2BHQGME2bW5ltLzm4AGoPBt9FWiNXZVbZpqyGBoBU4EKf5UnDtEEoI8AztEykz38RayvkKtE%2Bb%2F%2FjolDGfv6HamEvZpSwqCdqxXOJL64iAerPRtzFU9wFYS6EOEEBXGsKCjPQAfVkC6lDcrFS8s2fhwkKeRaMFgANJOmGUjlKpaOTg5TSKe6r0FZPlXsQsK16J&X-Amz-Signature=21d5c51c181dfe457aaa45ecbe734addd5ba7e9b6ee0b4167bc9b18b80ce6f84&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MNOGV75%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIH2%2BsA9lvl%2BYq3Hg8bpDTkD8tELfz66UjmtE3nJuD2MeAiEAr5zcXzyGao419aLaQ9JeB1uZHnBklsngvAAfVT1KzSYqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5%2FeTgvZGhVLvkNaSrcA1fLJCCtxHD06IKDetoxj%2Ba6asV5%2B5zzGiCilXCpS39PxkC8BIg0dr2IN4hjMe89PbSJKYkiEPLf0uUR4nBj2tSHXPvJ5ou7snYeypi84jneSQtB0%2BaISz8Q%2B3fq5dQv1wPrW%2BMl9RYmGZogycoGLtSNrGwRkfWzt4LFGGtlJlD0KwOgOc1tadVX3WjGD6P2boVxVcHGuvNnWFED29ROXqD8VO0co%2F5r1XIfAZWpp9YfG7vWmej6q3Id%2FJFmf7tF71Tjd%2B1Zf2AHM65uM3lZkeQ6FmZio4OmljmEofPxI7FwA8BVduHetMpnXGxBhaOe4lhEJTkUFwLHA8nP6o%2FahEzsyP1f7y707RjSFklcMPWn0K6FdyOLsjqSVPXtAEf5jaXNMXi6VZhW1XLFw9WDbLgBv4hv4LRCXaE2uZdZKXOhkL3jU5hiDEA%2B%2FRjUGXcLT8LgqB8wM6zctd%2B7BrHB2oS9%2F%2FN4OLHZp%2FAzVlIGSO2AfOQ9PZh1C%2BFrYVNeTea%2F34qzm8gr89IMCJzR1hwQyYSnyTuOXvoZURW0%2FgSXD6bHt3TQtzeBBSa2GbQBLBncQSejGBRa1MFnjcroTNICEAIHDs5QNss7X%2FD9lHPzoSh6lRmtwuEyc0PYFOdZMLmRz8AGOqUBxJOFBXNkYOdJeaG9Faj2%2F7daTEC%2BHQGME2bW5ltLzm4AGoPBt9FWiNXZVbZpqyGBoBU4EKf5UnDtEEoI8AztEykz38RayvkKtE%2Bb%2F%2FjolDGfv6HamEvZpSwqCdqxXOJL64iAerPRtzFU9wFYS6EOEEBXGsKCjPQAfVkC6lDcrFS8s2fhwkKeRaMFgANJOmGUjlKpaOTg5TSKe6r0FZPlXsQsK16J&X-Amz-Signature=043d0ca9e7a13727f0890d544f598dd781f35f606f24e78d6de812b0a80d1c20&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
