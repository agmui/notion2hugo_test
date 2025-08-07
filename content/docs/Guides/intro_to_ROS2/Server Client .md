---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USZ54PNT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIDFEqHx0bksVehlIAcOqWWgdhxFmBVs7o4G%2BSU%2F9Ly7eAiEAxXJ%2BLV5lVEiK4lQjNFaqoRuzlKvpKCy1YAJGtZJb6qkqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7gU7MHJIkx2W0c9CrcAyU1Cmim5Q%2FGrgqmTAdBhakUXN6uK4%2F%2FcLm9EDuK%2F4yNFK012wLj%2BXZHODm%2FlBR%2BK2iUSOZYFQGovERzim5EDaoBB0PvT7r8IAF4xX24oWnKoH2KJNr1xn7d4e8Jj0sMLkaRlaR%2B6%2BF%2Buz7FWteQbOBWwvjtkpCCg0XU2mX%2FSNyey3BXAElPnqshDTku%2BvoAfqAlW0gx76mW5SdSvwK7xBETCWHwW%2BAmX2sfUgegRyVv6GfVzpHWFvhth2fFLZW6bGNqqRvyyZ38JKGP%2BCpLTDzSbCWmo0vhl0%2FZvL0Uf%2FMv71IMh3DsfVkG92881sX265ptqOpwNNTFo1D0J4J9lTsFWYeXTON2WGQRrCY61lTtRzG%2FbxoEZmudafG5Rp%2Fkuj9mbflkztZSnTbnSDTrl%2Bv1hWvJ94oYzntezftFqBKa4BzUVMyfJcIVfPMZZrEGmzeoDgoII1WlItLZO1Q8k%2FbNvgpdEp%2B45GPKsMV4FEKABAfoNFnn0NFuo2TQA6FRcBjImnzA1%2FpIWsURXgKywZCFjAB2%2BAWkREns5q2F90adNmcrvHjQp5A6PYfapIMChLmVU%2BrGL5OpA%2FAz5rZUZivSEATr9BCiyaZESsDiHxeL%2FUckNOJTp75INsoDMLPI0MQGOqUBOE4rTwINTJmsLFaCbaReIOqlMoV73RzXMsz6ip8WhuJgZdWi8W9ZfXt8%2FwoneGmMzHnNaaZmGFy%2FWAadHKJV6PAq2sIrJqdg0cDBssaEqr64X%2FCeZOPE2VXEQKRqWL7g1nWalnvwV3c8tTIRVS1cclF2uIIUQ4QAy36Qgu5MB%2FQYFuMjwt8oD%2BTMg23NUy13mAoypVcWjfv%2B1IK3sHp1JfiP4IPT&X-Amz-Signature=fb754a6686671391fb001f57078d4dacd9d41b266d7eab46959540025c3ecb3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USZ54PNT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIDFEqHx0bksVehlIAcOqWWgdhxFmBVs7o4G%2BSU%2F9Ly7eAiEAxXJ%2BLV5lVEiK4lQjNFaqoRuzlKvpKCy1YAJGtZJb6qkqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7gU7MHJIkx2W0c9CrcAyU1Cmim5Q%2FGrgqmTAdBhakUXN6uK4%2F%2FcLm9EDuK%2F4yNFK012wLj%2BXZHODm%2FlBR%2BK2iUSOZYFQGovERzim5EDaoBB0PvT7r8IAF4xX24oWnKoH2KJNr1xn7d4e8Jj0sMLkaRlaR%2B6%2BF%2Buz7FWteQbOBWwvjtkpCCg0XU2mX%2FSNyey3BXAElPnqshDTku%2BvoAfqAlW0gx76mW5SdSvwK7xBETCWHwW%2BAmX2sfUgegRyVv6GfVzpHWFvhth2fFLZW6bGNqqRvyyZ38JKGP%2BCpLTDzSbCWmo0vhl0%2FZvL0Uf%2FMv71IMh3DsfVkG92881sX265ptqOpwNNTFo1D0J4J9lTsFWYeXTON2WGQRrCY61lTtRzG%2FbxoEZmudafG5Rp%2Fkuj9mbflkztZSnTbnSDTrl%2Bv1hWvJ94oYzntezftFqBKa4BzUVMyfJcIVfPMZZrEGmzeoDgoII1WlItLZO1Q8k%2FbNvgpdEp%2B45GPKsMV4FEKABAfoNFnn0NFuo2TQA6FRcBjImnzA1%2FpIWsURXgKywZCFjAB2%2BAWkREns5q2F90adNmcrvHjQp5A6PYfapIMChLmVU%2BrGL5OpA%2FAz5rZUZivSEATr9BCiyaZESsDiHxeL%2FUckNOJTp75INsoDMLPI0MQGOqUBOE4rTwINTJmsLFaCbaReIOqlMoV73RzXMsz6ip8WhuJgZdWi8W9ZfXt8%2FwoneGmMzHnNaaZmGFy%2FWAadHKJV6PAq2sIrJqdg0cDBssaEqr64X%2FCeZOPE2VXEQKRqWL7g1nWalnvwV3c8tTIRVS1cclF2uIIUQ4QAy36Qgu5MB%2FQYFuMjwt8oD%2BTMg23NUy13mAoypVcWjfv%2B1IK3sHp1JfiP4IPT&X-Amz-Signature=6e272d52fd59caa92b45a3505ab6d05ec1d66cf00f0bfe6865729b5195385fc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USZ54PNT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIDFEqHx0bksVehlIAcOqWWgdhxFmBVs7o4G%2BSU%2F9Ly7eAiEAxXJ%2BLV5lVEiK4lQjNFaqoRuzlKvpKCy1YAJGtZJb6qkqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7gU7MHJIkx2W0c9CrcAyU1Cmim5Q%2FGrgqmTAdBhakUXN6uK4%2F%2FcLm9EDuK%2F4yNFK012wLj%2BXZHODm%2FlBR%2BK2iUSOZYFQGovERzim5EDaoBB0PvT7r8IAF4xX24oWnKoH2KJNr1xn7d4e8Jj0sMLkaRlaR%2B6%2BF%2Buz7FWteQbOBWwvjtkpCCg0XU2mX%2FSNyey3BXAElPnqshDTku%2BvoAfqAlW0gx76mW5SdSvwK7xBETCWHwW%2BAmX2sfUgegRyVv6GfVzpHWFvhth2fFLZW6bGNqqRvyyZ38JKGP%2BCpLTDzSbCWmo0vhl0%2FZvL0Uf%2FMv71IMh3DsfVkG92881sX265ptqOpwNNTFo1D0J4J9lTsFWYeXTON2WGQRrCY61lTtRzG%2FbxoEZmudafG5Rp%2Fkuj9mbflkztZSnTbnSDTrl%2Bv1hWvJ94oYzntezftFqBKa4BzUVMyfJcIVfPMZZrEGmzeoDgoII1WlItLZO1Q8k%2FbNvgpdEp%2B45GPKsMV4FEKABAfoNFnn0NFuo2TQA6FRcBjImnzA1%2FpIWsURXgKywZCFjAB2%2BAWkREns5q2F90adNmcrvHjQp5A6PYfapIMChLmVU%2BrGL5OpA%2FAz5rZUZivSEATr9BCiyaZESsDiHxeL%2FUckNOJTp75INsoDMLPI0MQGOqUBOE4rTwINTJmsLFaCbaReIOqlMoV73RzXMsz6ip8WhuJgZdWi8W9ZfXt8%2FwoneGmMzHnNaaZmGFy%2FWAadHKJV6PAq2sIrJqdg0cDBssaEqr64X%2FCeZOPE2VXEQKRqWL7g1nWalnvwV3c8tTIRVS1cclF2uIIUQ4QAy36Qgu5MB%2FQYFuMjwt8oD%2BTMg23NUy13mAoypVcWjfv%2B1IK3sHp1JfiP4IPT&X-Amz-Signature=a3bf3e4dde81790834b7d40656c53eac97298ec3e50536fa8369542c7f26ea6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USZ54PNT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIDFEqHx0bksVehlIAcOqWWgdhxFmBVs7o4G%2BSU%2F9Ly7eAiEAxXJ%2BLV5lVEiK4lQjNFaqoRuzlKvpKCy1YAJGtZJb6qkqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7gU7MHJIkx2W0c9CrcAyU1Cmim5Q%2FGrgqmTAdBhakUXN6uK4%2F%2FcLm9EDuK%2F4yNFK012wLj%2BXZHODm%2FlBR%2BK2iUSOZYFQGovERzim5EDaoBB0PvT7r8IAF4xX24oWnKoH2KJNr1xn7d4e8Jj0sMLkaRlaR%2B6%2BF%2Buz7FWteQbOBWwvjtkpCCg0XU2mX%2FSNyey3BXAElPnqshDTku%2BvoAfqAlW0gx76mW5SdSvwK7xBETCWHwW%2BAmX2sfUgegRyVv6GfVzpHWFvhth2fFLZW6bGNqqRvyyZ38JKGP%2BCpLTDzSbCWmo0vhl0%2FZvL0Uf%2FMv71IMh3DsfVkG92881sX265ptqOpwNNTFo1D0J4J9lTsFWYeXTON2WGQRrCY61lTtRzG%2FbxoEZmudafG5Rp%2Fkuj9mbflkztZSnTbnSDTrl%2Bv1hWvJ94oYzntezftFqBKa4BzUVMyfJcIVfPMZZrEGmzeoDgoII1WlItLZO1Q8k%2FbNvgpdEp%2B45GPKsMV4FEKABAfoNFnn0NFuo2TQA6FRcBjImnzA1%2FpIWsURXgKywZCFjAB2%2BAWkREns5q2F90adNmcrvHjQp5A6PYfapIMChLmVU%2BrGL5OpA%2FAz5rZUZivSEATr9BCiyaZESsDiHxeL%2FUckNOJTp75INsoDMLPI0MQGOqUBOE4rTwINTJmsLFaCbaReIOqlMoV73RzXMsz6ip8WhuJgZdWi8W9ZfXt8%2FwoneGmMzHnNaaZmGFy%2FWAadHKJV6PAq2sIrJqdg0cDBssaEqr64X%2FCeZOPE2VXEQKRqWL7g1nWalnvwV3c8tTIRVS1cclF2uIIUQ4QAy36Qgu5MB%2FQYFuMjwt8oD%2BTMg23NUy13mAoypVcWjfv%2B1IK3sHp1JfiP4IPT&X-Amz-Signature=49f322c98d13728bc0f679e842b79c812a944a2afdeaf49d1c1525be8f60dd12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USZ54PNT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIDFEqHx0bksVehlIAcOqWWgdhxFmBVs7o4G%2BSU%2F9Ly7eAiEAxXJ%2BLV5lVEiK4lQjNFaqoRuzlKvpKCy1YAJGtZJb6qkqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7gU7MHJIkx2W0c9CrcAyU1Cmim5Q%2FGrgqmTAdBhakUXN6uK4%2F%2FcLm9EDuK%2F4yNFK012wLj%2BXZHODm%2FlBR%2BK2iUSOZYFQGovERzim5EDaoBB0PvT7r8IAF4xX24oWnKoH2KJNr1xn7d4e8Jj0sMLkaRlaR%2B6%2BF%2Buz7FWteQbOBWwvjtkpCCg0XU2mX%2FSNyey3BXAElPnqshDTku%2BvoAfqAlW0gx76mW5SdSvwK7xBETCWHwW%2BAmX2sfUgegRyVv6GfVzpHWFvhth2fFLZW6bGNqqRvyyZ38JKGP%2BCpLTDzSbCWmo0vhl0%2FZvL0Uf%2FMv71IMh3DsfVkG92881sX265ptqOpwNNTFo1D0J4J9lTsFWYeXTON2WGQRrCY61lTtRzG%2FbxoEZmudafG5Rp%2Fkuj9mbflkztZSnTbnSDTrl%2Bv1hWvJ94oYzntezftFqBKa4BzUVMyfJcIVfPMZZrEGmzeoDgoII1WlItLZO1Q8k%2FbNvgpdEp%2B45GPKsMV4FEKABAfoNFnn0NFuo2TQA6FRcBjImnzA1%2FpIWsURXgKywZCFjAB2%2BAWkREns5q2F90adNmcrvHjQp5A6PYfapIMChLmVU%2BrGL5OpA%2FAz5rZUZivSEATr9BCiyaZESsDiHxeL%2FUckNOJTp75INsoDMLPI0MQGOqUBOE4rTwINTJmsLFaCbaReIOqlMoV73RzXMsz6ip8WhuJgZdWi8W9ZfXt8%2FwoneGmMzHnNaaZmGFy%2FWAadHKJV6PAq2sIrJqdg0cDBssaEqr64X%2FCeZOPE2VXEQKRqWL7g1nWalnvwV3c8tTIRVS1cclF2uIIUQ4QAy36Qgu5MB%2FQYFuMjwt8oD%2BTMg23NUy13mAoypVcWjfv%2B1IK3sHp1JfiP4IPT&X-Amz-Signature=06fd6498bb06b7ca61eb3539927fbb66cdc6e7623ff4502c39a48b3dfa1deb2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
