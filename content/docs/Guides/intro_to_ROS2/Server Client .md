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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5IHQD2Y%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcz%2BKPjOYAAtNNQiGV87BX0zgOAF0U%2BJGCR2A75kpnHgIhAOejUCnqQUQFpTDXF6WJcSPFGls1XfEsofVfvCPu4IEPKv8DCCoQABoMNjM3NDIzMTgzODA1Igx2s7VbD4lfbhauKpoq3AM0IE3soddtXxBJhNEw3SYYQFO1lBYp2GLUPRRO0SLpTUvFnCTGUxIkT4eCeOJ9XsMveCgKS9ns18W2qN%2BoBktpnOJr8ErZd%2FQuwjROYNAhS9g%2FwxhAlPK77X3a%2B1g5HOJhphs0cCEMvHQPeNwVHJY6zNLfB49TJIc4u4jbkiubbHrZF9w8s8TT3yEwfHf5CtxDF10ET1kaUyRqb0fzUE9jJluU8Uc2K6U3QiajGd6PIHXyeQQqsXh9DDF1Vf0kxG04EByN%2FezAXIcaRG9AA%2BsbEVTVd%2FeRgR4iZKG2CfQmQvOPGT1QbMt3Pu9PhgsC9shEUH55Qn42j%2BX8XQC6DFiBM0bBZR0NLjxYPsmhQEIcfFJpQ69b04I%2FvpQ0PfWgANA6umln%2F7Y%2BIU6jkYDamDSdN%2BUGc%2FrkmD19z7SghK7RP%2BVKRsdkfA9sQzK0AFHn8dGErlCKLrOJBnKSXv24hZ9zTdMC3fPgRt7%2FU5%2FOBJR4RsvUa0wTtWud294SIDwwFx2H%2FMfRiHiLF3gwqPNqhmEif0K4sYPFpH%2Ftl20hBzcZn5uJ%2BUIyFdz6oO%2B9%2BuafrE99gnNQlKeloSSNbPNetKIMnLICf9RM8XRkQTMbPT385jhWJfGUT81mUxhb7zDH5MO%2FBjqkAX6guTRTpfkVGVsO90e%2FEsnLxb7XwCPsQv5sat4LZvBy6Lr0QEXauUc2LLqcK3vwFERCqIL%2FOvph7oNfaE8GPuSIqsdW8PCK36op1qbgnHBVCTOfJ2uVYR47dHWxvDIGpiZcgS%2B10KqSZ8H1wEDwNTDyLcG%2FkHyPKjRI0MdRsyt8AzLjopWogc8hG6um47rQY6QGQsxzScvp68PiGb%2FiPOfEyQlY&X-Amz-Signature=8ed3248e7fd0fef02294b0444720b28a114c06ff672900cde10710e5fa914d88&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5IHQD2Y%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcz%2BKPjOYAAtNNQiGV87BX0zgOAF0U%2BJGCR2A75kpnHgIhAOejUCnqQUQFpTDXF6WJcSPFGls1XfEsofVfvCPu4IEPKv8DCCoQABoMNjM3NDIzMTgzODA1Igx2s7VbD4lfbhauKpoq3AM0IE3soddtXxBJhNEw3SYYQFO1lBYp2GLUPRRO0SLpTUvFnCTGUxIkT4eCeOJ9XsMveCgKS9ns18W2qN%2BoBktpnOJr8ErZd%2FQuwjROYNAhS9g%2FwxhAlPK77X3a%2B1g5HOJhphs0cCEMvHQPeNwVHJY6zNLfB49TJIc4u4jbkiubbHrZF9w8s8TT3yEwfHf5CtxDF10ET1kaUyRqb0fzUE9jJluU8Uc2K6U3QiajGd6PIHXyeQQqsXh9DDF1Vf0kxG04EByN%2FezAXIcaRG9AA%2BsbEVTVd%2FeRgR4iZKG2CfQmQvOPGT1QbMt3Pu9PhgsC9shEUH55Qn42j%2BX8XQC6DFiBM0bBZR0NLjxYPsmhQEIcfFJpQ69b04I%2FvpQ0PfWgANA6umln%2F7Y%2BIU6jkYDamDSdN%2BUGc%2FrkmD19z7SghK7RP%2BVKRsdkfA9sQzK0AFHn8dGErlCKLrOJBnKSXv24hZ9zTdMC3fPgRt7%2FU5%2FOBJR4RsvUa0wTtWud294SIDwwFx2H%2FMfRiHiLF3gwqPNqhmEif0K4sYPFpH%2Ftl20hBzcZn5uJ%2BUIyFdz6oO%2B9%2BuafrE99gnNQlKeloSSNbPNetKIMnLICf9RM8XRkQTMbPT385jhWJfGUT81mUxhb7zDH5MO%2FBjqkAX6guTRTpfkVGVsO90e%2FEsnLxb7XwCPsQv5sat4LZvBy6Lr0QEXauUc2LLqcK3vwFERCqIL%2FOvph7oNfaE8GPuSIqsdW8PCK36op1qbgnHBVCTOfJ2uVYR47dHWxvDIGpiZcgS%2B10KqSZ8H1wEDwNTDyLcG%2FkHyPKjRI0MdRsyt8AzLjopWogc8hG6um47rQY6QGQsxzScvp68PiGb%2FiPOfEyQlY&X-Amz-Signature=3dd4ff565a44b2bd4822cb2e2c88f6ed213c11ca5e587dcbc7c8ae06c531e815&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5IHQD2Y%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcz%2BKPjOYAAtNNQiGV87BX0zgOAF0U%2BJGCR2A75kpnHgIhAOejUCnqQUQFpTDXF6WJcSPFGls1XfEsofVfvCPu4IEPKv8DCCoQABoMNjM3NDIzMTgzODA1Igx2s7VbD4lfbhauKpoq3AM0IE3soddtXxBJhNEw3SYYQFO1lBYp2GLUPRRO0SLpTUvFnCTGUxIkT4eCeOJ9XsMveCgKS9ns18W2qN%2BoBktpnOJr8ErZd%2FQuwjROYNAhS9g%2FwxhAlPK77X3a%2B1g5HOJhphs0cCEMvHQPeNwVHJY6zNLfB49TJIc4u4jbkiubbHrZF9w8s8TT3yEwfHf5CtxDF10ET1kaUyRqb0fzUE9jJluU8Uc2K6U3QiajGd6PIHXyeQQqsXh9DDF1Vf0kxG04EByN%2FezAXIcaRG9AA%2BsbEVTVd%2FeRgR4iZKG2CfQmQvOPGT1QbMt3Pu9PhgsC9shEUH55Qn42j%2BX8XQC6DFiBM0bBZR0NLjxYPsmhQEIcfFJpQ69b04I%2FvpQ0PfWgANA6umln%2F7Y%2BIU6jkYDamDSdN%2BUGc%2FrkmD19z7SghK7RP%2BVKRsdkfA9sQzK0AFHn8dGErlCKLrOJBnKSXv24hZ9zTdMC3fPgRt7%2FU5%2FOBJR4RsvUa0wTtWud294SIDwwFx2H%2FMfRiHiLF3gwqPNqhmEif0K4sYPFpH%2Ftl20hBzcZn5uJ%2BUIyFdz6oO%2B9%2BuafrE99gnNQlKeloSSNbPNetKIMnLICf9RM8XRkQTMbPT385jhWJfGUT81mUxhb7zDH5MO%2FBjqkAX6guTRTpfkVGVsO90e%2FEsnLxb7XwCPsQv5sat4LZvBy6Lr0QEXauUc2LLqcK3vwFERCqIL%2FOvph7oNfaE8GPuSIqsdW8PCK36op1qbgnHBVCTOfJ2uVYR47dHWxvDIGpiZcgS%2B10KqSZ8H1wEDwNTDyLcG%2FkHyPKjRI0MdRsyt8AzLjopWogc8hG6um47rQY6QGQsxzScvp68PiGb%2FiPOfEyQlY&X-Amz-Signature=aad567a4533affaf6b15e9544df28cf5b5df27950bf1ca61707879ceaf7527e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5IHQD2Y%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcz%2BKPjOYAAtNNQiGV87BX0zgOAF0U%2BJGCR2A75kpnHgIhAOejUCnqQUQFpTDXF6WJcSPFGls1XfEsofVfvCPu4IEPKv8DCCoQABoMNjM3NDIzMTgzODA1Igx2s7VbD4lfbhauKpoq3AM0IE3soddtXxBJhNEw3SYYQFO1lBYp2GLUPRRO0SLpTUvFnCTGUxIkT4eCeOJ9XsMveCgKS9ns18W2qN%2BoBktpnOJr8ErZd%2FQuwjROYNAhS9g%2FwxhAlPK77X3a%2B1g5HOJhphs0cCEMvHQPeNwVHJY6zNLfB49TJIc4u4jbkiubbHrZF9w8s8TT3yEwfHf5CtxDF10ET1kaUyRqb0fzUE9jJluU8Uc2K6U3QiajGd6PIHXyeQQqsXh9DDF1Vf0kxG04EByN%2FezAXIcaRG9AA%2BsbEVTVd%2FeRgR4iZKG2CfQmQvOPGT1QbMt3Pu9PhgsC9shEUH55Qn42j%2BX8XQC6DFiBM0bBZR0NLjxYPsmhQEIcfFJpQ69b04I%2FvpQ0PfWgANA6umln%2F7Y%2BIU6jkYDamDSdN%2BUGc%2FrkmD19z7SghK7RP%2BVKRsdkfA9sQzK0AFHn8dGErlCKLrOJBnKSXv24hZ9zTdMC3fPgRt7%2FU5%2FOBJR4RsvUa0wTtWud294SIDwwFx2H%2FMfRiHiLF3gwqPNqhmEif0K4sYPFpH%2Ftl20hBzcZn5uJ%2BUIyFdz6oO%2B9%2BuafrE99gnNQlKeloSSNbPNetKIMnLICf9RM8XRkQTMbPT385jhWJfGUT81mUxhb7zDH5MO%2FBjqkAX6guTRTpfkVGVsO90e%2FEsnLxb7XwCPsQv5sat4LZvBy6Lr0QEXauUc2LLqcK3vwFERCqIL%2FOvph7oNfaE8GPuSIqsdW8PCK36op1qbgnHBVCTOfJ2uVYR47dHWxvDIGpiZcgS%2B10KqSZ8H1wEDwNTDyLcG%2FkHyPKjRI0MdRsyt8AzLjopWogc8hG6um47rQY6QGQsxzScvp68PiGb%2FiPOfEyQlY&X-Amz-Signature=28af51dfffcc2aa0943848aec7156e108fe288855a006bafb8017dfce0900132&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5IHQD2Y%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcz%2BKPjOYAAtNNQiGV87BX0zgOAF0U%2BJGCR2A75kpnHgIhAOejUCnqQUQFpTDXF6WJcSPFGls1XfEsofVfvCPu4IEPKv8DCCoQABoMNjM3NDIzMTgzODA1Igx2s7VbD4lfbhauKpoq3AM0IE3soddtXxBJhNEw3SYYQFO1lBYp2GLUPRRO0SLpTUvFnCTGUxIkT4eCeOJ9XsMveCgKS9ns18W2qN%2BoBktpnOJr8ErZd%2FQuwjROYNAhS9g%2FwxhAlPK77X3a%2B1g5HOJhphs0cCEMvHQPeNwVHJY6zNLfB49TJIc4u4jbkiubbHrZF9w8s8TT3yEwfHf5CtxDF10ET1kaUyRqb0fzUE9jJluU8Uc2K6U3QiajGd6PIHXyeQQqsXh9DDF1Vf0kxG04EByN%2FezAXIcaRG9AA%2BsbEVTVd%2FeRgR4iZKG2CfQmQvOPGT1QbMt3Pu9PhgsC9shEUH55Qn42j%2BX8XQC6DFiBM0bBZR0NLjxYPsmhQEIcfFJpQ69b04I%2FvpQ0PfWgANA6umln%2F7Y%2BIU6jkYDamDSdN%2BUGc%2FrkmD19z7SghK7RP%2BVKRsdkfA9sQzK0AFHn8dGErlCKLrOJBnKSXv24hZ9zTdMC3fPgRt7%2FU5%2FOBJR4RsvUa0wTtWud294SIDwwFx2H%2FMfRiHiLF3gwqPNqhmEif0K4sYPFpH%2Ftl20hBzcZn5uJ%2BUIyFdz6oO%2B9%2BuafrE99gnNQlKeloSSNbPNetKIMnLICf9RM8XRkQTMbPT385jhWJfGUT81mUxhb7zDH5MO%2FBjqkAX6guTRTpfkVGVsO90e%2FEsnLxb7XwCPsQv5sat4LZvBy6Lr0QEXauUc2LLqcK3vwFERCqIL%2FOvph7oNfaE8GPuSIqsdW8PCK36op1qbgnHBVCTOfJ2uVYR47dHWxvDIGpiZcgS%2B10KqSZ8H1wEDwNTDyLcG%2FkHyPKjRI0MdRsyt8AzLjopWogc8hG6um47rQY6QGQsxzScvp68PiGb%2FiPOfEyQlY&X-Amz-Signature=04c3f70516be2a15aa759a202c3eb13759640284468f94281e640cef076166b7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
