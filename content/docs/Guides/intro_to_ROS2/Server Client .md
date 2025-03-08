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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYU64CWS%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIF8c7cCMA43YX3G%2FyRaOtb5H27Iqhjds3xgDv%2F8fFaA2AiEAuy1vrRq11YG0xgphPGnDHhDTUXnrzhHNC15fatK50t4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOhkdfWfgyygUWTQMyrcA8FKx6NC3W3QXNL0mHmkBusXPvXHBDXci%2F%2FbLHtHINVVsgfB6rNagiRvWQZsQWuiQdTUoxVbdRszkWJoMQumfTnErwtZbJ54Zn23Yiqu8qvtyUPofg1b4ye%2BkL4dG4vvWVG2YmD5V4BN8yKBUXfnSNfi9El3z1YE%2FxO8yL8%2BVMlgFI4Bh8xEBi6ykq8u7tXdUMM2SF4E4W27%2B9LKTlNCcXG0e6vTEXjV%2BNq1aB8X9uczsFBw5n3vF4Y1fMgr%2BLCLgMMOB1DmZmwVrpPE80ZssjroCD7sV2HxtQsLfr05f8XhnncqfTkcsmmni8juqJmHwSYKXbX6684cEzLRwP9PT3S8HYH8wfbEI6MfOPCmNNkBJhB6FTwzPOhwN7pyIV%2FHV0JFGJbGq6a2qMtGYlYfFSPV3bhLuf%2B1DJdDED3JEC%2FWpu8Kqo2T6EMYZ8spw0d57CRCdvl4PQLn9QaMnk6VgxGBe1OdM5KvM%2FkL2ulK9KI74mYukmlz9RQBhw9cCeLMubSi34aoT%2BUDlwUMKkIwk8qAFG2PKN9EfnIOFKMFe5yAx7y680n9JcWeHXcWvig5jITIjogRnhNj%2FhmSqhp6kPQ6%2BB%2B07k01UmrrnINnsgv3156SGN6xOqldQUyJMJa9rr4GOqUB05iG1IIMYtEwVI2FTKpGfHEyk3HDPi2CwL6BsETtackDtA7As%2By2HmDs91DNnPW%2BS6WS5y9arO9mRCr14BnEG%2BveZzGkduBu19VyF9LocB4zOB7pzzlrpT7R2N%2BIFzsAcI%2BvCjEKavwaZswMf7Hg2iek38J7CEZXqv%2BWxoDaU8PW1QWIPPzzq5F9qJknNtJr7Uw3Y9vgrfFlkaTZL59UoHk5Nqiz&X-Amz-Signature=44692a5b51e53572feb8ecb57206771219bc1969527cadb425330906884dd721&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYU64CWS%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIF8c7cCMA43YX3G%2FyRaOtb5H27Iqhjds3xgDv%2F8fFaA2AiEAuy1vrRq11YG0xgphPGnDHhDTUXnrzhHNC15fatK50t4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOhkdfWfgyygUWTQMyrcA8FKx6NC3W3QXNL0mHmkBusXPvXHBDXci%2F%2FbLHtHINVVsgfB6rNagiRvWQZsQWuiQdTUoxVbdRszkWJoMQumfTnErwtZbJ54Zn23Yiqu8qvtyUPofg1b4ye%2BkL4dG4vvWVG2YmD5V4BN8yKBUXfnSNfi9El3z1YE%2FxO8yL8%2BVMlgFI4Bh8xEBi6ykq8u7tXdUMM2SF4E4W27%2B9LKTlNCcXG0e6vTEXjV%2BNq1aB8X9uczsFBw5n3vF4Y1fMgr%2BLCLgMMOB1DmZmwVrpPE80ZssjroCD7sV2HxtQsLfr05f8XhnncqfTkcsmmni8juqJmHwSYKXbX6684cEzLRwP9PT3S8HYH8wfbEI6MfOPCmNNkBJhB6FTwzPOhwN7pyIV%2FHV0JFGJbGq6a2qMtGYlYfFSPV3bhLuf%2B1DJdDED3JEC%2FWpu8Kqo2T6EMYZ8spw0d57CRCdvl4PQLn9QaMnk6VgxGBe1OdM5KvM%2FkL2ulK9KI74mYukmlz9RQBhw9cCeLMubSi34aoT%2BUDlwUMKkIwk8qAFG2PKN9EfnIOFKMFe5yAx7y680n9JcWeHXcWvig5jITIjogRnhNj%2FhmSqhp6kPQ6%2BB%2B07k01UmrrnINnsgv3156SGN6xOqldQUyJMJa9rr4GOqUB05iG1IIMYtEwVI2FTKpGfHEyk3HDPi2CwL6BsETtackDtA7As%2By2HmDs91DNnPW%2BS6WS5y9arO9mRCr14BnEG%2BveZzGkduBu19VyF9LocB4zOB7pzzlrpT7R2N%2BIFzsAcI%2BvCjEKavwaZswMf7Hg2iek38J7CEZXqv%2BWxoDaU8PW1QWIPPzzq5F9qJknNtJr7Uw3Y9vgrfFlkaTZL59UoHk5Nqiz&X-Amz-Signature=ef4feccaec916ccb81da1dff1eeca114e68c87ad9dfa7b75d0867a55916c70c3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYU64CWS%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIF8c7cCMA43YX3G%2FyRaOtb5H27Iqhjds3xgDv%2F8fFaA2AiEAuy1vrRq11YG0xgphPGnDHhDTUXnrzhHNC15fatK50t4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOhkdfWfgyygUWTQMyrcA8FKx6NC3W3QXNL0mHmkBusXPvXHBDXci%2F%2FbLHtHINVVsgfB6rNagiRvWQZsQWuiQdTUoxVbdRszkWJoMQumfTnErwtZbJ54Zn23Yiqu8qvtyUPofg1b4ye%2BkL4dG4vvWVG2YmD5V4BN8yKBUXfnSNfi9El3z1YE%2FxO8yL8%2BVMlgFI4Bh8xEBi6ykq8u7tXdUMM2SF4E4W27%2B9LKTlNCcXG0e6vTEXjV%2BNq1aB8X9uczsFBw5n3vF4Y1fMgr%2BLCLgMMOB1DmZmwVrpPE80ZssjroCD7sV2HxtQsLfr05f8XhnncqfTkcsmmni8juqJmHwSYKXbX6684cEzLRwP9PT3S8HYH8wfbEI6MfOPCmNNkBJhB6FTwzPOhwN7pyIV%2FHV0JFGJbGq6a2qMtGYlYfFSPV3bhLuf%2B1DJdDED3JEC%2FWpu8Kqo2T6EMYZ8spw0d57CRCdvl4PQLn9QaMnk6VgxGBe1OdM5KvM%2FkL2ulK9KI74mYukmlz9RQBhw9cCeLMubSi34aoT%2BUDlwUMKkIwk8qAFG2PKN9EfnIOFKMFe5yAx7y680n9JcWeHXcWvig5jITIjogRnhNj%2FhmSqhp6kPQ6%2BB%2B07k01UmrrnINnsgv3156SGN6xOqldQUyJMJa9rr4GOqUB05iG1IIMYtEwVI2FTKpGfHEyk3HDPi2CwL6BsETtackDtA7As%2By2HmDs91DNnPW%2BS6WS5y9arO9mRCr14BnEG%2BveZzGkduBu19VyF9LocB4zOB7pzzlrpT7R2N%2BIFzsAcI%2BvCjEKavwaZswMf7Hg2iek38J7CEZXqv%2BWxoDaU8PW1QWIPPzzq5F9qJknNtJr7Uw3Y9vgrfFlkaTZL59UoHk5Nqiz&X-Amz-Signature=4db50fd83de6c74bbe439cbbbc2fc8f3a44ea760592e576a2d10185ae9c79cc8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYU64CWS%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIF8c7cCMA43YX3G%2FyRaOtb5H27Iqhjds3xgDv%2F8fFaA2AiEAuy1vrRq11YG0xgphPGnDHhDTUXnrzhHNC15fatK50t4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOhkdfWfgyygUWTQMyrcA8FKx6NC3W3QXNL0mHmkBusXPvXHBDXci%2F%2FbLHtHINVVsgfB6rNagiRvWQZsQWuiQdTUoxVbdRszkWJoMQumfTnErwtZbJ54Zn23Yiqu8qvtyUPofg1b4ye%2BkL4dG4vvWVG2YmD5V4BN8yKBUXfnSNfi9El3z1YE%2FxO8yL8%2BVMlgFI4Bh8xEBi6ykq8u7tXdUMM2SF4E4W27%2B9LKTlNCcXG0e6vTEXjV%2BNq1aB8X9uczsFBw5n3vF4Y1fMgr%2BLCLgMMOB1DmZmwVrpPE80ZssjroCD7sV2HxtQsLfr05f8XhnncqfTkcsmmni8juqJmHwSYKXbX6684cEzLRwP9PT3S8HYH8wfbEI6MfOPCmNNkBJhB6FTwzPOhwN7pyIV%2FHV0JFGJbGq6a2qMtGYlYfFSPV3bhLuf%2B1DJdDED3JEC%2FWpu8Kqo2T6EMYZ8spw0d57CRCdvl4PQLn9QaMnk6VgxGBe1OdM5KvM%2FkL2ulK9KI74mYukmlz9RQBhw9cCeLMubSi34aoT%2BUDlwUMKkIwk8qAFG2PKN9EfnIOFKMFe5yAx7y680n9JcWeHXcWvig5jITIjogRnhNj%2FhmSqhp6kPQ6%2BB%2B07k01UmrrnINnsgv3156SGN6xOqldQUyJMJa9rr4GOqUB05iG1IIMYtEwVI2FTKpGfHEyk3HDPi2CwL6BsETtackDtA7As%2By2HmDs91DNnPW%2BS6WS5y9arO9mRCr14BnEG%2BveZzGkduBu19VyF9LocB4zOB7pzzlrpT7R2N%2BIFzsAcI%2BvCjEKavwaZswMf7Hg2iek38J7CEZXqv%2BWxoDaU8PW1QWIPPzzq5F9qJknNtJr7Uw3Y9vgrfFlkaTZL59UoHk5Nqiz&X-Amz-Signature=dfea44a7962996e385edac07813cf995cb091132a077cda359b0df12d2c5a0be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYU64CWS%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIF8c7cCMA43YX3G%2FyRaOtb5H27Iqhjds3xgDv%2F8fFaA2AiEAuy1vrRq11YG0xgphPGnDHhDTUXnrzhHNC15fatK50t4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOhkdfWfgyygUWTQMyrcA8FKx6NC3W3QXNL0mHmkBusXPvXHBDXci%2F%2FbLHtHINVVsgfB6rNagiRvWQZsQWuiQdTUoxVbdRszkWJoMQumfTnErwtZbJ54Zn23Yiqu8qvtyUPofg1b4ye%2BkL4dG4vvWVG2YmD5V4BN8yKBUXfnSNfi9El3z1YE%2FxO8yL8%2BVMlgFI4Bh8xEBi6ykq8u7tXdUMM2SF4E4W27%2B9LKTlNCcXG0e6vTEXjV%2BNq1aB8X9uczsFBw5n3vF4Y1fMgr%2BLCLgMMOB1DmZmwVrpPE80ZssjroCD7sV2HxtQsLfr05f8XhnncqfTkcsmmni8juqJmHwSYKXbX6684cEzLRwP9PT3S8HYH8wfbEI6MfOPCmNNkBJhB6FTwzPOhwN7pyIV%2FHV0JFGJbGq6a2qMtGYlYfFSPV3bhLuf%2B1DJdDED3JEC%2FWpu8Kqo2T6EMYZ8spw0d57CRCdvl4PQLn9QaMnk6VgxGBe1OdM5KvM%2FkL2ulK9KI74mYukmlz9RQBhw9cCeLMubSi34aoT%2BUDlwUMKkIwk8qAFG2PKN9EfnIOFKMFe5yAx7y680n9JcWeHXcWvig5jITIjogRnhNj%2FhmSqhp6kPQ6%2BB%2B07k01UmrrnINnsgv3156SGN6xOqldQUyJMJa9rr4GOqUB05iG1IIMYtEwVI2FTKpGfHEyk3HDPi2CwL6BsETtackDtA7As%2By2HmDs91DNnPW%2BS6WS5y9arO9mRCr14BnEG%2BveZzGkduBu19VyF9LocB4zOB7pzzlrpT7R2N%2BIFzsAcI%2BvCjEKavwaZswMf7Hg2iek38J7CEZXqv%2BWxoDaU8PW1QWIPPzzq5F9qJknNtJr7Uw3Y9vgrfFlkaTZL59UoHk5Nqiz&X-Amz-Signature=db8ebed7d83fa9d41bb78d58f0b6707c31e8dadc864047bc6f47b8bc70eb3652&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
