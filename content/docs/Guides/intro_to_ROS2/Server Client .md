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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIRYDJKS%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5kMNwKkklZtTy2%2BEI5MlSqS6mmTTNX4NYQ7gqxNO9NAIhAJPXTsBZf9CUvwIjbxOxwgWui%2FTxp%2Fr1eWsqAbhnTICYKv8DCB4QABoMNjM3NDIzMTgzODA1IgwaDmeRw4MwZn0sKJwq3AN160s0dsM%2FT92X%2F06Zqg9QB%2B6a%2F%2BhczAyQ4xM9UzX5596ti7rLPyc%2FHRG2vqNkVvXwu7jLfqUzjTqc5k2yOak9ZsQh7m%2BebPx4jG2vZlbJjmQ1bFFeRuJv021clbWnX%2F%2BX1DkuckFOVOK3gGd%2B8Q5mkZKTVsrJYSNiIbPN%2Fmhl6zMNHg3aWtg8ATeOjrT1mGSNsLpKJ1tZxdwj5iMJxHTSevgZlV7f0EO8e3bsxHOTTDNOHhlAujD13w8D0c7E%2BILQbC673GvQT%2FeVM0OwHP%2BKvY9Y8xLJ3x9Xn1lSvnNdyvnJbjHHWNCkC8MY99KmgAxvWlHFBdgQxz2Vx6Ls5iQzl5FwwG%2BDzYPQD6MZtEk9Zkl1tEGIK37InPc6NuJbk5lZ60LCrnu%2FiS%2B3eUnebIIeWHBnfXoJwUkHYIBw0oi4WLYBQx2ojx3CPzBkLG6pK4bJQ16ZXarmVtjPWHfikOvSNJWNhoTfz28GMHzAlSP0ke0RiEPTBcb3L45E1vH1%2BDF9UJlBb4nZc14P4lXTdIgfe%2FsILOH6ONSmI2fU3BN66h2959cOlv0CMNGZlFaA8hiZY9lTDwX%2B8En9IOkl1cqSFlih0oLQGvMUwJx19oj9BnlYRJ41nfDXDGOc8zCciMG%2FBjqkAdIYB39legCFEAivw8K%2BPMeXTMNJNMwVnTBrjf6rMS9VoqJcTzISSax0CICAE0p83ypNwFcg6arFHpLI%2FCchWhx9rdcLAIjN2%2Bj8fp9xbdsOEf3faEJafxsLV72CYv%2BTpVPfFToxpmG%2BILctPAzT4bEv5%2Fxvg5hsoZ6PxPtVE%2FJe79w%2F6Rg8%2BsgkNEIve39mBnCynQkLHAl%2F8D0pfGzeflbvXYug&X-Amz-Signature=dbc11e3a41ff546a52b627a52a78884d303d393fbf7ebfeb582bed2eb85af542&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIRYDJKS%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5kMNwKkklZtTy2%2BEI5MlSqS6mmTTNX4NYQ7gqxNO9NAIhAJPXTsBZf9CUvwIjbxOxwgWui%2FTxp%2Fr1eWsqAbhnTICYKv8DCB4QABoMNjM3NDIzMTgzODA1IgwaDmeRw4MwZn0sKJwq3AN160s0dsM%2FT92X%2F06Zqg9QB%2B6a%2F%2BhczAyQ4xM9UzX5596ti7rLPyc%2FHRG2vqNkVvXwu7jLfqUzjTqc5k2yOak9ZsQh7m%2BebPx4jG2vZlbJjmQ1bFFeRuJv021clbWnX%2F%2BX1DkuckFOVOK3gGd%2B8Q5mkZKTVsrJYSNiIbPN%2Fmhl6zMNHg3aWtg8ATeOjrT1mGSNsLpKJ1tZxdwj5iMJxHTSevgZlV7f0EO8e3bsxHOTTDNOHhlAujD13w8D0c7E%2BILQbC673GvQT%2FeVM0OwHP%2BKvY9Y8xLJ3x9Xn1lSvnNdyvnJbjHHWNCkC8MY99KmgAxvWlHFBdgQxz2Vx6Ls5iQzl5FwwG%2BDzYPQD6MZtEk9Zkl1tEGIK37InPc6NuJbk5lZ60LCrnu%2FiS%2B3eUnebIIeWHBnfXoJwUkHYIBw0oi4WLYBQx2ojx3CPzBkLG6pK4bJQ16ZXarmVtjPWHfikOvSNJWNhoTfz28GMHzAlSP0ke0RiEPTBcb3L45E1vH1%2BDF9UJlBb4nZc14P4lXTdIgfe%2FsILOH6ONSmI2fU3BN66h2959cOlv0CMNGZlFaA8hiZY9lTDwX%2B8En9IOkl1cqSFlih0oLQGvMUwJx19oj9BnlYRJ41nfDXDGOc8zCciMG%2FBjqkAdIYB39legCFEAivw8K%2BPMeXTMNJNMwVnTBrjf6rMS9VoqJcTzISSax0CICAE0p83ypNwFcg6arFHpLI%2FCchWhx9rdcLAIjN2%2Bj8fp9xbdsOEf3faEJafxsLV72CYv%2BTpVPfFToxpmG%2BILctPAzT4bEv5%2Fxvg5hsoZ6PxPtVE%2FJe79w%2F6Rg8%2BsgkNEIve39mBnCynQkLHAl%2F8D0pfGzeflbvXYug&X-Amz-Signature=4f36b82caafd5967036ca89ec2e7d36f30ab3d6110d1e01c48c06ddc1a2a56fc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIRYDJKS%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5kMNwKkklZtTy2%2BEI5MlSqS6mmTTNX4NYQ7gqxNO9NAIhAJPXTsBZf9CUvwIjbxOxwgWui%2FTxp%2Fr1eWsqAbhnTICYKv8DCB4QABoMNjM3NDIzMTgzODA1IgwaDmeRw4MwZn0sKJwq3AN160s0dsM%2FT92X%2F06Zqg9QB%2B6a%2F%2BhczAyQ4xM9UzX5596ti7rLPyc%2FHRG2vqNkVvXwu7jLfqUzjTqc5k2yOak9ZsQh7m%2BebPx4jG2vZlbJjmQ1bFFeRuJv021clbWnX%2F%2BX1DkuckFOVOK3gGd%2B8Q5mkZKTVsrJYSNiIbPN%2Fmhl6zMNHg3aWtg8ATeOjrT1mGSNsLpKJ1tZxdwj5iMJxHTSevgZlV7f0EO8e3bsxHOTTDNOHhlAujD13w8D0c7E%2BILQbC673GvQT%2FeVM0OwHP%2BKvY9Y8xLJ3x9Xn1lSvnNdyvnJbjHHWNCkC8MY99KmgAxvWlHFBdgQxz2Vx6Ls5iQzl5FwwG%2BDzYPQD6MZtEk9Zkl1tEGIK37InPc6NuJbk5lZ60LCrnu%2FiS%2B3eUnebIIeWHBnfXoJwUkHYIBw0oi4WLYBQx2ojx3CPzBkLG6pK4bJQ16ZXarmVtjPWHfikOvSNJWNhoTfz28GMHzAlSP0ke0RiEPTBcb3L45E1vH1%2BDF9UJlBb4nZc14P4lXTdIgfe%2FsILOH6ONSmI2fU3BN66h2959cOlv0CMNGZlFaA8hiZY9lTDwX%2B8En9IOkl1cqSFlih0oLQGvMUwJx19oj9BnlYRJ41nfDXDGOc8zCciMG%2FBjqkAdIYB39legCFEAivw8K%2BPMeXTMNJNMwVnTBrjf6rMS9VoqJcTzISSax0CICAE0p83ypNwFcg6arFHpLI%2FCchWhx9rdcLAIjN2%2Bj8fp9xbdsOEf3faEJafxsLV72CYv%2BTpVPfFToxpmG%2BILctPAzT4bEv5%2Fxvg5hsoZ6PxPtVE%2FJe79w%2F6Rg8%2BsgkNEIve39mBnCynQkLHAl%2F8D0pfGzeflbvXYug&X-Amz-Signature=5552a6f44cc81f807d8c29a3458195487aeee9b344d7e79571bec04b9f07f126&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIRYDJKS%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5kMNwKkklZtTy2%2BEI5MlSqS6mmTTNX4NYQ7gqxNO9NAIhAJPXTsBZf9CUvwIjbxOxwgWui%2FTxp%2Fr1eWsqAbhnTICYKv8DCB4QABoMNjM3NDIzMTgzODA1IgwaDmeRw4MwZn0sKJwq3AN160s0dsM%2FT92X%2F06Zqg9QB%2B6a%2F%2BhczAyQ4xM9UzX5596ti7rLPyc%2FHRG2vqNkVvXwu7jLfqUzjTqc5k2yOak9ZsQh7m%2BebPx4jG2vZlbJjmQ1bFFeRuJv021clbWnX%2F%2BX1DkuckFOVOK3gGd%2B8Q5mkZKTVsrJYSNiIbPN%2Fmhl6zMNHg3aWtg8ATeOjrT1mGSNsLpKJ1tZxdwj5iMJxHTSevgZlV7f0EO8e3bsxHOTTDNOHhlAujD13w8D0c7E%2BILQbC673GvQT%2FeVM0OwHP%2BKvY9Y8xLJ3x9Xn1lSvnNdyvnJbjHHWNCkC8MY99KmgAxvWlHFBdgQxz2Vx6Ls5iQzl5FwwG%2BDzYPQD6MZtEk9Zkl1tEGIK37InPc6NuJbk5lZ60LCrnu%2FiS%2B3eUnebIIeWHBnfXoJwUkHYIBw0oi4WLYBQx2ojx3CPzBkLG6pK4bJQ16ZXarmVtjPWHfikOvSNJWNhoTfz28GMHzAlSP0ke0RiEPTBcb3L45E1vH1%2BDF9UJlBb4nZc14P4lXTdIgfe%2FsILOH6ONSmI2fU3BN66h2959cOlv0CMNGZlFaA8hiZY9lTDwX%2B8En9IOkl1cqSFlih0oLQGvMUwJx19oj9BnlYRJ41nfDXDGOc8zCciMG%2FBjqkAdIYB39legCFEAivw8K%2BPMeXTMNJNMwVnTBrjf6rMS9VoqJcTzISSax0CICAE0p83ypNwFcg6arFHpLI%2FCchWhx9rdcLAIjN2%2Bj8fp9xbdsOEf3faEJafxsLV72CYv%2BTpVPfFToxpmG%2BILctPAzT4bEv5%2Fxvg5hsoZ6PxPtVE%2FJe79w%2F6Rg8%2BsgkNEIve39mBnCynQkLHAl%2F8D0pfGzeflbvXYug&X-Amz-Signature=c9cfc570540151aa852f7e3707478dd540234bcc942af7a5687c3ee935e87c50&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIRYDJKS%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5kMNwKkklZtTy2%2BEI5MlSqS6mmTTNX4NYQ7gqxNO9NAIhAJPXTsBZf9CUvwIjbxOxwgWui%2FTxp%2Fr1eWsqAbhnTICYKv8DCB4QABoMNjM3NDIzMTgzODA1IgwaDmeRw4MwZn0sKJwq3AN160s0dsM%2FT92X%2F06Zqg9QB%2B6a%2F%2BhczAyQ4xM9UzX5596ti7rLPyc%2FHRG2vqNkVvXwu7jLfqUzjTqc5k2yOak9ZsQh7m%2BebPx4jG2vZlbJjmQ1bFFeRuJv021clbWnX%2F%2BX1DkuckFOVOK3gGd%2B8Q5mkZKTVsrJYSNiIbPN%2Fmhl6zMNHg3aWtg8ATeOjrT1mGSNsLpKJ1tZxdwj5iMJxHTSevgZlV7f0EO8e3bsxHOTTDNOHhlAujD13w8D0c7E%2BILQbC673GvQT%2FeVM0OwHP%2BKvY9Y8xLJ3x9Xn1lSvnNdyvnJbjHHWNCkC8MY99KmgAxvWlHFBdgQxz2Vx6Ls5iQzl5FwwG%2BDzYPQD6MZtEk9Zkl1tEGIK37InPc6NuJbk5lZ60LCrnu%2FiS%2B3eUnebIIeWHBnfXoJwUkHYIBw0oi4WLYBQx2ojx3CPzBkLG6pK4bJQ16ZXarmVtjPWHfikOvSNJWNhoTfz28GMHzAlSP0ke0RiEPTBcb3L45E1vH1%2BDF9UJlBb4nZc14P4lXTdIgfe%2FsILOH6ONSmI2fU3BN66h2959cOlv0CMNGZlFaA8hiZY9lTDwX%2B8En9IOkl1cqSFlih0oLQGvMUwJx19oj9BnlYRJ41nfDXDGOc8zCciMG%2FBjqkAdIYB39legCFEAivw8K%2BPMeXTMNJNMwVnTBrjf6rMS9VoqJcTzISSax0CICAE0p83ypNwFcg6arFHpLI%2FCchWhx9rdcLAIjN2%2Bj8fp9xbdsOEf3faEJafxsLV72CYv%2BTpVPfFToxpmG%2BILctPAzT4bEv5%2Fxvg5hsoZ6PxPtVE%2FJe79w%2F6Rg8%2BsgkNEIve39mBnCynQkLHAl%2F8D0pfGzeflbvXYug&X-Amz-Signature=a9167a61141d98ab99747a6313135de300ed6f89b5bf0f596794cfe5406d1798&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
