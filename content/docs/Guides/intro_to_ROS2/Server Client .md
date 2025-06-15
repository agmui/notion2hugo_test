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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N7KK7E4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQD60%2Bako2EknDU07Q0jskDVPawImV%2FsGnBIeI1JOx5s6AIgI%2BioMT9JS4u%2Ff4ZmzuYAaCgvz2ubfaV60vTaVuYU5aIq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDLtQQEJres26LEEUDircA6%2BCphsb1BFT59xyKqprHeu2rVsEEPvazc86f%2BpE8xG6PPJZrioBfoBuKOunC11%2B7Mbn4kcvNmmdn5VWShGKUFQW8xq9eQmRgzkraySTRdK7xCBakKlelHFXL1PsLAuQiOqEZ39JSUS%2BVQl851rEW6PokapAj0eSLtEHPrJ43G9mVcKfUcxkO62CjO%2BynFTzHW%2BSLqeVbLn2Dxn%2F3lows313wGMbKF%2B279OtUKKBobPQeS1nQ67DuV6Zf3YDOX%2B6nEQeT6vozuQEdmN%2B57638eK2znwK8vHK7TwPLIgZF7CHBRB4mjqhnjIhkIKrlnrojyBFHRs%2FzAjDbCs9adBWODngcps6l7AZksyzpZycf3FXaLIq%2BXROuqhtvQKNAwa8Sn1TM223xKP9wpiqWe7icwtSvEFUuJLRJYozRaF73uA%2FiYkfJzNYqYv%2BAlA3KxGqx%2Bya9kbuCVc70RZ3u2QNXcB%2Bzn8CH80JR2Nmps6ACF%2BY9u5MZUZV3hJUssMeea%2BJZ2efJ5%2FZTXq3QrWD%2BcQlTg5SHa8WYyyOeo406MAaTU%2FK9ZRitLmaLH5hHU4ix6XuS5YnAijesNZhR1ORncVXeWIa%2Blv5Edo4wRGR2Z25WMhB1mctIg3tCXk2zwTTMKysucIGOqUBOFwCcA87aPraqQfugep69jUL%2FDmnGAmAU6HC%2BDw0%2FXZ0VN93Gx3ahZBh1MSqMTCeJ%2BrP%2BY0uBkadz3VQYqKAxlUfJ0Lsy7z9hUdiKX9XNkqkKw0M37Cpm%2F2WGX20ricaC3y%2BhaHGBqAmxnqq9PP0y%2BdoquosGZyHCDByHVdUcIe8LB5XVSsccg1Rj83H%2BZ12W6c4tA7mXwh9CX0SBLiQouOxfN%2BE&X-Amz-Signature=2b27ba03566637a180371d9d684d642202e79c69f022fa3fcb838ba4281c823d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N7KK7E4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQD60%2Bako2EknDU07Q0jskDVPawImV%2FsGnBIeI1JOx5s6AIgI%2BioMT9JS4u%2Ff4ZmzuYAaCgvz2ubfaV60vTaVuYU5aIq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDLtQQEJres26LEEUDircA6%2BCphsb1BFT59xyKqprHeu2rVsEEPvazc86f%2BpE8xG6PPJZrioBfoBuKOunC11%2B7Mbn4kcvNmmdn5VWShGKUFQW8xq9eQmRgzkraySTRdK7xCBakKlelHFXL1PsLAuQiOqEZ39JSUS%2BVQl851rEW6PokapAj0eSLtEHPrJ43G9mVcKfUcxkO62CjO%2BynFTzHW%2BSLqeVbLn2Dxn%2F3lows313wGMbKF%2B279OtUKKBobPQeS1nQ67DuV6Zf3YDOX%2B6nEQeT6vozuQEdmN%2B57638eK2znwK8vHK7TwPLIgZF7CHBRB4mjqhnjIhkIKrlnrojyBFHRs%2FzAjDbCs9adBWODngcps6l7AZksyzpZycf3FXaLIq%2BXROuqhtvQKNAwa8Sn1TM223xKP9wpiqWe7icwtSvEFUuJLRJYozRaF73uA%2FiYkfJzNYqYv%2BAlA3KxGqx%2Bya9kbuCVc70RZ3u2QNXcB%2Bzn8CH80JR2Nmps6ACF%2BY9u5MZUZV3hJUssMeea%2BJZ2efJ5%2FZTXq3QrWD%2BcQlTg5SHa8WYyyOeo406MAaTU%2FK9ZRitLmaLH5hHU4ix6XuS5YnAijesNZhR1ORncVXeWIa%2Blv5Edo4wRGR2Z25WMhB1mctIg3tCXk2zwTTMKysucIGOqUBOFwCcA87aPraqQfugep69jUL%2FDmnGAmAU6HC%2BDw0%2FXZ0VN93Gx3ahZBh1MSqMTCeJ%2BrP%2BY0uBkadz3VQYqKAxlUfJ0Lsy7z9hUdiKX9XNkqkKw0M37Cpm%2F2WGX20ricaC3y%2BhaHGBqAmxnqq9PP0y%2BdoquosGZyHCDByHVdUcIe8LB5XVSsccg1Rj83H%2BZ12W6c4tA7mXwh9CX0SBLiQouOxfN%2BE&X-Amz-Signature=afbc790083888976737c5684859e591f87160196fbf6304bcf30a650ea9481e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N7KK7E4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQD60%2Bako2EknDU07Q0jskDVPawImV%2FsGnBIeI1JOx5s6AIgI%2BioMT9JS4u%2Ff4ZmzuYAaCgvz2ubfaV60vTaVuYU5aIq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDLtQQEJres26LEEUDircA6%2BCphsb1BFT59xyKqprHeu2rVsEEPvazc86f%2BpE8xG6PPJZrioBfoBuKOunC11%2B7Mbn4kcvNmmdn5VWShGKUFQW8xq9eQmRgzkraySTRdK7xCBakKlelHFXL1PsLAuQiOqEZ39JSUS%2BVQl851rEW6PokapAj0eSLtEHPrJ43G9mVcKfUcxkO62CjO%2BynFTzHW%2BSLqeVbLn2Dxn%2F3lows313wGMbKF%2B279OtUKKBobPQeS1nQ67DuV6Zf3YDOX%2B6nEQeT6vozuQEdmN%2B57638eK2znwK8vHK7TwPLIgZF7CHBRB4mjqhnjIhkIKrlnrojyBFHRs%2FzAjDbCs9adBWODngcps6l7AZksyzpZycf3FXaLIq%2BXROuqhtvQKNAwa8Sn1TM223xKP9wpiqWe7icwtSvEFUuJLRJYozRaF73uA%2FiYkfJzNYqYv%2BAlA3KxGqx%2Bya9kbuCVc70RZ3u2QNXcB%2Bzn8CH80JR2Nmps6ACF%2BY9u5MZUZV3hJUssMeea%2BJZ2efJ5%2FZTXq3QrWD%2BcQlTg5SHa8WYyyOeo406MAaTU%2FK9ZRitLmaLH5hHU4ix6XuS5YnAijesNZhR1ORncVXeWIa%2Blv5Edo4wRGR2Z25WMhB1mctIg3tCXk2zwTTMKysucIGOqUBOFwCcA87aPraqQfugep69jUL%2FDmnGAmAU6HC%2BDw0%2FXZ0VN93Gx3ahZBh1MSqMTCeJ%2BrP%2BY0uBkadz3VQYqKAxlUfJ0Lsy7z9hUdiKX9XNkqkKw0M37Cpm%2F2WGX20ricaC3y%2BhaHGBqAmxnqq9PP0y%2BdoquosGZyHCDByHVdUcIe8LB5XVSsccg1Rj83H%2BZ12W6c4tA7mXwh9CX0SBLiQouOxfN%2BE&X-Amz-Signature=6a56d898b24d643b451bddb66907ff25f6870c69cf7ff9f05b352b165cd12492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N7KK7E4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQD60%2Bako2EknDU07Q0jskDVPawImV%2FsGnBIeI1JOx5s6AIgI%2BioMT9JS4u%2Ff4ZmzuYAaCgvz2ubfaV60vTaVuYU5aIq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDLtQQEJres26LEEUDircA6%2BCphsb1BFT59xyKqprHeu2rVsEEPvazc86f%2BpE8xG6PPJZrioBfoBuKOunC11%2B7Mbn4kcvNmmdn5VWShGKUFQW8xq9eQmRgzkraySTRdK7xCBakKlelHFXL1PsLAuQiOqEZ39JSUS%2BVQl851rEW6PokapAj0eSLtEHPrJ43G9mVcKfUcxkO62CjO%2BynFTzHW%2BSLqeVbLn2Dxn%2F3lows313wGMbKF%2B279OtUKKBobPQeS1nQ67DuV6Zf3YDOX%2B6nEQeT6vozuQEdmN%2B57638eK2znwK8vHK7TwPLIgZF7CHBRB4mjqhnjIhkIKrlnrojyBFHRs%2FzAjDbCs9adBWODngcps6l7AZksyzpZycf3FXaLIq%2BXROuqhtvQKNAwa8Sn1TM223xKP9wpiqWe7icwtSvEFUuJLRJYozRaF73uA%2FiYkfJzNYqYv%2BAlA3KxGqx%2Bya9kbuCVc70RZ3u2QNXcB%2Bzn8CH80JR2Nmps6ACF%2BY9u5MZUZV3hJUssMeea%2BJZ2efJ5%2FZTXq3QrWD%2BcQlTg5SHa8WYyyOeo406MAaTU%2FK9ZRitLmaLH5hHU4ix6XuS5YnAijesNZhR1ORncVXeWIa%2Blv5Edo4wRGR2Z25WMhB1mctIg3tCXk2zwTTMKysucIGOqUBOFwCcA87aPraqQfugep69jUL%2FDmnGAmAU6HC%2BDw0%2FXZ0VN93Gx3ahZBh1MSqMTCeJ%2BrP%2BY0uBkadz3VQYqKAxlUfJ0Lsy7z9hUdiKX9XNkqkKw0M37Cpm%2F2WGX20ricaC3y%2BhaHGBqAmxnqq9PP0y%2BdoquosGZyHCDByHVdUcIe8LB5XVSsccg1Rj83H%2BZ12W6c4tA7mXwh9CX0SBLiQouOxfN%2BE&X-Amz-Signature=a291311aac09e4812748f01fa5609992e74f8664360c9ab01b2d9b6a69f70a13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N7KK7E4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQD60%2Bako2EknDU07Q0jskDVPawImV%2FsGnBIeI1JOx5s6AIgI%2BioMT9JS4u%2Ff4ZmzuYAaCgvz2ubfaV60vTaVuYU5aIq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDLtQQEJres26LEEUDircA6%2BCphsb1BFT59xyKqprHeu2rVsEEPvazc86f%2BpE8xG6PPJZrioBfoBuKOunC11%2B7Mbn4kcvNmmdn5VWShGKUFQW8xq9eQmRgzkraySTRdK7xCBakKlelHFXL1PsLAuQiOqEZ39JSUS%2BVQl851rEW6PokapAj0eSLtEHPrJ43G9mVcKfUcxkO62CjO%2BynFTzHW%2BSLqeVbLn2Dxn%2F3lows313wGMbKF%2B279OtUKKBobPQeS1nQ67DuV6Zf3YDOX%2B6nEQeT6vozuQEdmN%2B57638eK2znwK8vHK7TwPLIgZF7CHBRB4mjqhnjIhkIKrlnrojyBFHRs%2FzAjDbCs9adBWODngcps6l7AZksyzpZycf3FXaLIq%2BXROuqhtvQKNAwa8Sn1TM223xKP9wpiqWe7icwtSvEFUuJLRJYozRaF73uA%2FiYkfJzNYqYv%2BAlA3KxGqx%2Bya9kbuCVc70RZ3u2QNXcB%2Bzn8CH80JR2Nmps6ACF%2BY9u5MZUZV3hJUssMeea%2BJZ2efJ5%2FZTXq3QrWD%2BcQlTg5SHa8WYyyOeo406MAaTU%2FK9ZRitLmaLH5hHU4ix6XuS5YnAijesNZhR1ORncVXeWIa%2Blv5Edo4wRGR2Z25WMhB1mctIg3tCXk2zwTTMKysucIGOqUBOFwCcA87aPraqQfugep69jUL%2FDmnGAmAU6HC%2BDw0%2FXZ0VN93Gx3ahZBh1MSqMTCeJ%2BrP%2BY0uBkadz3VQYqKAxlUfJ0Lsy7z9hUdiKX9XNkqkKw0M37Cpm%2F2WGX20ricaC3y%2BhaHGBqAmxnqq9PP0y%2BdoquosGZyHCDByHVdUcIe8LB5XVSsccg1Rj83H%2BZ12W6c4tA7mXwh9CX0SBLiQouOxfN%2BE&X-Amz-Signature=7ea402d9af613949af4c3bc0c473b94f306445b489a49a08fbce844f72dc7c67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
