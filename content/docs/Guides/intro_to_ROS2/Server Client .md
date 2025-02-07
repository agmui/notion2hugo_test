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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SMVWCIU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDTPMC6%2BfzjiXB%2FPjjEvmBtQeh5Z7RUP8fd8IV3rIK84AiEAwqda9PYrtDy1IMbRE93rftj8m%2FCL1CxxrQdpUsfzP7Qq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDAkaUy5iS8xZwJPC5SrcA4ObPzKIKx4jcpW4Ge8x4IzYTsr2I9k%2FSC4Z%2Fp1NcyTppUnVauWWmCalca8bOZ3yoWSjDYc%2F13%2BksIIbYbjr79QT1DS%2FQPTe2TKQ8p7TdqXaHXR3rChPStXtxgLcf39Ia9NZPg9KUzJ5mqUlndeg5zm5QbrW7A6EeWM88ovg4Fn2t5NxndIhqnGql8M9uTMpFzm3Dm1v13cACejpyRQ%2F89uUrw9IFt7H7efnNwU1GbxmKWmFEaW%2BqtzPXIdy2xVZsxE2FHy%2FenBkwdnSX1PLdJy%2BZqAXZHkueOIjBKTP5NwprZkjQEl8%2FJ41l16yIda31wkiyoYOtkeXypWKkKFM0fHPHcNK%2BVwtfvfCOkGOzfFCzafnP0qSzg7BFVWPJLsGzovrFg8xv2aK268bgBcgTOvozf0FP9ql0QXv3esKuzlS8q3tKS8wFFUqKYYCfgnEBx0E0ZuC9YgDcww1L%2F5JyLvk8DyahYgyBEisvbLngl8H0Pkb%2BE1q132Fn97MS5Fz9HbKycab1P0jisHZnla5%2BadGOrQSFgEzwfcsaOZb7ExiTsTx9nWvy%2BzkRVNVG%2BM0Ddx4ZGTkmJGEO266tlMnCssxPL%2Fl96MdNp%2BzXJ1QCKNJU09GQ12%2BOAQ3n8B5MI%2BMmL0GOqUBL3GgFEc61bWfkog3HHY6o0aWoS%2B3CwUnK9oBsMTIKmfIh8SkUhk%2FcPAXbNlj9jzwiS%2FKqQ5%2F33MDq%2ByIHADUxFEZCoDNl2iBMnn6%2FfWuqyMJAFuSFTsYxVOuMcq3btiJBi5tJTDagTdebopHWX900cyJ9U7xYO0%2FlEQbuyNaN2vrOSEAtAqSSwjnoGYttdqbwlMix1fGui0Too%2BVkvwusdKZjqEy&X-Amz-Signature=18d3303fbf3f8ac75f0780af8254873da851b276bd9d4da6ab0b3d63ceca3876&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SMVWCIU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDTPMC6%2BfzjiXB%2FPjjEvmBtQeh5Z7RUP8fd8IV3rIK84AiEAwqda9PYrtDy1IMbRE93rftj8m%2FCL1CxxrQdpUsfzP7Qq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDAkaUy5iS8xZwJPC5SrcA4ObPzKIKx4jcpW4Ge8x4IzYTsr2I9k%2FSC4Z%2Fp1NcyTppUnVauWWmCalca8bOZ3yoWSjDYc%2F13%2BksIIbYbjr79QT1DS%2FQPTe2TKQ8p7TdqXaHXR3rChPStXtxgLcf39Ia9NZPg9KUzJ5mqUlndeg5zm5QbrW7A6EeWM88ovg4Fn2t5NxndIhqnGql8M9uTMpFzm3Dm1v13cACejpyRQ%2F89uUrw9IFt7H7efnNwU1GbxmKWmFEaW%2BqtzPXIdy2xVZsxE2FHy%2FenBkwdnSX1PLdJy%2BZqAXZHkueOIjBKTP5NwprZkjQEl8%2FJ41l16yIda31wkiyoYOtkeXypWKkKFM0fHPHcNK%2BVwtfvfCOkGOzfFCzafnP0qSzg7BFVWPJLsGzovrFg8xv2aK268bgBcgTOvozf0FP9ql0QXv3esKuzlS8q3tKS8wFFUqKYYCfgnEBx0E0ZuC9YgDcww1L%2F5JyLvk8DyahYgyBEisvbLngl8H0Pkb%2BE1q132Fn97MS5Fz9HbKycab1P0jisHZnla5%2BadGOrQSFgEzwfcsaOZb7ExiTsTx9nWvy%2BzkRVNVG%2BM0Ddx4ZGTkmJGEO266tlMnCssxPL%2Fl96MdNp%2BzXJ1QCKNJU09GQ12%2BOAQ3n8B5MI%2BMmL0GOqUBL3GgFEc61bWfkog3HHY6o0aWoS%2B3CwUnK9oBsMTIKmfIh8SkUhk%2FcPAXbNlj9jzwiS%2FKqQ5%2F33MDq%2ByIHADUxFEZCoDNl2iBMnn6%2FfWuqyMJAFuSFTsYxVOuMcq3btiJBi5tJTDagTdebopHWX900cyJ9U7xYO0%2FlEQbuyNaN2vrOSEAtAqSSwjnoGYttdqbwlMix1fGui0Too%2BVkvwusdKZjqEy&X-Amz-Signature=7640eab439ebd8ed17917b1b50ad76422aec3970dca6c2ec7e048d6c8f44a51d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SMVWCIU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDTPMC6%2BfzjiXB%2FPjjEvmBtQeh5Z7RUP8fd8IV3rIK84AiEAwqda9PYrtDy1IMbRE93rftj8m%2FCL1CxxrQdpUsfzP7Qq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDAkaUy5iS8xZwJPC5SrcA4ObPzKIKx4jcpW4Ge8x4IzYTsr2I9k%2FSC4Z%2Fp1NcyTppUnVauWWmCalca8bOZ3yoWSjDYc%2F13%2BksIIbYbjr79QT1DS%2FQPTe2TKQ8p7TdqXaHXR3rChPStXtxgLcf39Ia9NZPg9KUzJ5mqUlndeg5zm5QbrW7A6EeWM88ovg4Fn2t5NxndIhqnGql8M9uTMpFzm3Dm1v13cACejpyRQ%2F89uUrw9IFt7H7efnNwU1GbxmKWmFEaW%2BqtzPXIdy2xVZsxE2FHy%2FenBkwdnSX1PLdJy%2BZqAXZHkueOIjBKTP5NwprZkjQEl8%2FJ41l16yIda31wkiyoYOtkeXypWKkKFM0fHPHcNK%2BVwtfvfCOkGOzfFCzafnP0qSzg7BFVWPJLsGzovrFg8xv2aK268bgBcgTOvozf0FP9ql0QXv3esKuzlS8q3tKS8wFFUqKYYCfgnEBx0E0ZuC9YgDcww1L%2F5JyLvk8DyahYgyBEisvbLngl8H0Pkb%2BE1q132Fn97MS5Fz9HbKycab1P0jisHZnla5%2BadGOrQSFgEzwfcsaOZb7ExiTsTx9nWvy%2BzkRVNVG%2BM0Ddx4ZGTkmJGEO266tlMnCssxPL%2Fl96MdNp%2BzXJ1QCKNJU09GQ12%2BOAQ3n8B5MI%2BMmL0GOqUBL3GgFEc61bWfkog3HHY6o0aWoS%2B3CwUnK9oBsMTIKmfIh8SkUhk%2FcPAXbNlj9jzwiS%2FKqQ5%2F33MDq%2ByIHADUxFEZCoDNl2iBMnn6%2FfWuqyMJAFuSFTsYxVOuMcq3btiJBi5tJTDagTdebopHWX900cyJ9U7xYO0%2FlEQbuyNaN2vrOSEAtAqSSwjnoGYttdqbwlMix1fGui0Too%2BVkvwusdKZjqEy&X-Amz-Signature=ff08d1e7369fff1065d4362185a0bb74962c3a336bd16429557e10cb0cfc2154&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SMVWCIU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDTPMC6%2BfzjiXB%2FPjjEvmBtQeh5Z7RUP8fd8IV3rIK84AiEAwqda9PYrtDy1IMbRE93rftj8m%2FCL1CxxrQdpUsfzP7Qq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDAkaUy5iS8xZwJPC5SrcA4ObPzKIKx4jcpW4Ge8x4IzYTsr2I9k%2FSC4Z%2Fp1NcyTppUnVauWWmCalca8bOZ3yoWSjDYc%2F13%2BksIIbYbjr79QT1DS%2FQPTe2TKQ8p7TdqXaHXR3rChPStXtxgLcf39Ia9NZPg9KUzJ5mqUlndeg5zm5QbrW7A6EeWM88ovg4Fn2t5NxndIhqnGql8M9uTMpFzm3Dm1v13cACejpyRQ%2F89uUrw9IFt7H7efnNwU1GbxmKWmFEaW%2BqtzPXIdy2xVZsxE2FHy%2FenBkwdnSX1PLdJy%2BZqAXZHkueOIjBKTP5NwprZkjQEl8%2FJ41l16yIda31wkiyoYOtkeXypWKkKFM0fHPHcNK%2BVwtfvfCOkGOzfFCzafnP0qSzg7BFVWPJLsGzovrFg8xv2aK268bgBcgTOvozf0FP9ql0QXv3esKuzlS8q3tKS8wFFUqKYYCfgnEBx0E0ZuC9YgDcww1L%2F5JyLvk8DyahYgyBEisvbLngl8H0Pkb%2BE1q132Fn97MS5Fz9HbKycab1P0jisHZnla5%2BadGOrQSFgEzwfcsaOZb7ExiTsTx9nWvy%2BzkRVNVG%2BM0Ddx4ZGTkmJGEO266tlMnCssxPL%2Fl96MdNp%2BzXJ1QCKNJU09GQ12%2BOAQ3n8B5MI%2BMmL0GOqUBL3GgFEc61bWfkog3HHY6o0aWoS%2B3CwUnK9oBsMTIKmfIh8SkUhk%2FcPAXbNlj9jzwiS%2FKqQ5%2F33MDq%2ByIHADUxFEZCoDNl2iBMnn6%2FfWuqyMJAFuSFTsYxVOuMcq3btiJBi5tJTDagTdebopHWX900cyJ9U7xYO0%2FlEQbuyNaN2vrOSEAtAqSSwjnoGYttdqbwlMix1fGui0Too%2BVkvwusdKZjqEy&X-Amz-Signature=5d9384f0498532177db8508596d8b4e24494bcc67da4f85f57974f5fb07c4745&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SMVWCIU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDTPMC6%2BfzjiXB%2FPjjEvmBtQeh5Z7RUP8fd8IV3rIK84AiEAwqda9PYrtDy1IMbRE93rftj8m%2FCL1CxxrQdpUsfzP7Qq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDAkaUy5iS8xZwJPC5SrcA4ObPzKIKx4jcpW4Ge8x4IzYTsr2I9k%2FSC4Z%2Fp1NcyTppUnVauWWmCalca8bOZ3yoWSjDYc%2F13%2BksIIbYbjr79QT1DS%2FQPTe2TKQ8p7TdqXaHXR3rChPStXtxgLcf39Ia9NZPg9KUzJ5mqUlndeg5zm5QbrW7A6EeWM88ovg4Fn2t5NxndIhqnGql8M9uTMpFzm3Dm1v13cACejpyRQ%2F89uUrw9IFt7H7efnNwU1GbxmKWmFEaW%2BqtzPXIdy2xVZsxE2FHy%2FenBkwdnSX1PLdJy%2BZqAXZHkueOIjBKTP5NwprZkjQEl8%2FJ41l16yIda31wkiyoYOtkeXypWKkKFM0fHPHcNK%2BVwtfvfCOkGOzfFCzafnP0qSzg7BFVWPJLsGzovrFg8xv2aK268bgBcgTOvozf0FP9ql0QXv3esKuzlS8q3tKS8wFFUqKYYCfgnEBx0E0ZuC9YgDcww1L%2F5JyLvk8DyahYgyBEisvbLngl8H0Pkb%2BE1q132Fn97MS5Fz9HbKycab1P0jisHZnla5%2BadGOrQSFgEzwfcsaOZb7ExiTsTx9nWvy%2BzkRVNVG%2BM0Ddx4ZGTkmJGEO266tlMnCssxPL%2Fl96MdNp%2BzXJ1QCKNJU09GQ12%2BOAQ3n8B5MI%2BMmL0GOqUBL3GgFEc61bWfkog3HHY6o0aWoS%2B3CwUnK9oBsMTIKmfIh8SkUhk%2FcPAXbNlj9jzwiS%2FKqQ5%2F33MDq%2ByIHADUxFEZCoDNl2iBMnn6%2FfWuqyMJAFuSFTsYxVOuMcq3btiJBi5tJTDagTdebopHWX900cyJ9U7xYO0%2FlEQbuyNaN2vrOSEAtAqSSwjnoGYttdqbwlMix1fGui0Too%2BVkvwusdKZjqEy&X-Amz-Signature=7adb12fb5de56f08a210f5ff8807fc4d7d21fbbbec494aab42915f0e94c09ba3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
