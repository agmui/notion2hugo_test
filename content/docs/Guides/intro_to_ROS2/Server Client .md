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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW53RR6T%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDSwywUOIJZj1lMQNzZA3eGLIadCTH5BVKSB6jy%2Bt3%2BWQIgCFbD61mZQ3o4%2B4jc2uYtC4pUhltxdjdOB%2FjmbFsucE4q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDLcC6pok06BUqCrUVCrcA3SdSzPq6i%2BvXwszLecb%2BsoFv0SbotNgYHC%2B%2FwG2tn7JI1I4fFAeK5XGhtGozmu3pE7v1%2F%2ByBGtsEGq8A4k297XjUX9iwsLbJf2hq6m2PPGYn2G3qywym7EM7QjEG7ljEAQdV5rxWNTgXngr4uZMRjd1BUdP%2B0Mo%2BlrdixZ82bp6rMCA7Qeikdph8Tp2vL9WgKETDdcKKHEFEyHbfKxmeUYxeIS1Ds8Azgpz%2F1iFuG3yDdmx5xaXZhFtUlVIr946xm6%2F9QkXEBm4wZU2chpWXrbXqPWt%2F8ahuQdR7czhF3K6K7IZlgwG%2FODmKz5cqJt8rvA8s2usSjvAfeeV9E7ado9QoX76THhDy9ixbaH6Ji%2FOKTx6HbKVAcGS%2FFoYbgN9nsOIU9JvpmVJpF9hvjRHjrUMcV17r7FgKRNFg2vOoVXQeUijsfrhwCloI1WFQll4ulS%2BFFBTXjOHQNzAVL1V5NkqCB7pZdvVG2mwt9h1ypJGmLWg8%2BZ6WfDZnl2sZQgkMU95F9afN9mUAnp6LrROdna5lHRm3lee1fk918KWKdcIK%2FLR0oMdWO3INGqMQcL5MadUz4TyLJ7VdbRsGRukMDpi7B4LM%2F4uIQjlewzX%2FFRb65WvlVNZLFvJCDbKMN28tMIGOqUB9W8Pb07uTIF0h1IzKs%2BBYMrQclpgHSZTGUahOu1HZaw%2Fc2XBD784ZaI%2FHjleyJf7W5CNy54vltS01FsMLzCexW9vbJr%2FSYU9%2FrkWIMWhKLQH9DAhu5W%2BnSFZEMIRjJB5znMv1Mw5UdgDInR5LNJ1ZZetRkgcfmbe225GOjb3PtqCa6i99ug8Ci%2FWzlGUrcSsUPN%2FVkDaTJy%2BKduYDShWSgYyYAJj&X-Amz-Signature=a5d32f63d7ace72e086c19c53d19b75216a05c6b85ae0b2473b5c9a924b40f9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW53RR6T%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDSwywUOIJZj1lMQNzZA3eGLIadCTH5BVKSB6jy%2Bt3%2BWQIgCFbD61mZQ3o4%2B4jc2uYtC4pUhltxdjdOB%2FjmbFsucE4q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDLcC6pok06BUqCrUVCrcA3SdSzPq6i%2BvXwszLecb%2BsoFv0SbotNgYHC%2B%2FwG2tn7JI1I4fFAeK5XGhtGozmu3pE7v1%2F%2ByBGtsEGq8A4k297XjUX9iwsLbJf2hq6m2PPGYn2G3qywym7EM7QjEG7ljEAQdV5rxWNTgXngr4uZMRjd1BUdP%2B0Mo%2BlrdixZ82bp6rMCA7Qeikdph8Tp2vL9WgKETDdcKKHEFEyHbfKxmeUYxeIS1Ds8Azgpz%2F1iFuG3yDdmx5xaXZhFtUlVIr946xm6%2F9QkXEBm4wZU2chpWXrbXqPWt%2F8ahuQdR7czhF3K6K7IZlgwG%2FODmKz5cqJt8rvA8s2usSjvAfeeV9E7ado9QoX76THhDy9ixbaH6Ji%2FOKTx6HbKVAcGS%2FFoYbgN9nsOIU9JvpmVJpF9hvjRHjrUMcV17r7FgKRNFg2vOoVXQeUijsfrhwCloI1WFQll4ulS%2BFFBTXjOHQNzAVL1V5NkqCB7pZdvVG2mwt9h1ypJGmLWg8%2BZ6WfDZnl2sZQgkMU95F9afN9mUAnp6LrROdna5lHRm3lee1fk918KWKdcIK%2FLR0oMdWO3INGqMQcL5MadUz4TyLJ7VdbRsGRukMDpi7B4LM%2F4uIQjlewzX%2FFRb65WvlVNZLFvJCDbKMN28tMIGOqUB9W8Pb07uTIF0h1IzKs%2BBYMrQclpgHSZTGUahOu1HZaw%2Fc2XBD784ZaI%2FHjleyJf7W5CNy54vltS01FsMLzCexW9vbJr%2FSYU9%2FrkWIMWhKLQH9DAhu5W%2BnSFZEMIRjJB5znMv1Mw5UdgDInR5LNJ1ZZetRkgcfmbe225GOjb3PtqCa6i99ug8Ci%2FWzlGUrcSsUPN%2FVkDaTJy%2BKduYDShWSgYyYAJj&X-Amz-Signature=b57de142b5f8e944eb7f65f9cc112b1237b0e9dc68e904d2113d56f2210b3ca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW53RR6T%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDSwywUOIJZj1lMQNzZA3eGLIadCTH5BVKSB6jy%2Bt3%2BWQIgCFbD61mZQ3o4%2B4jc2uYtC4pUhltxdjdOB%2FjmbFsucE4q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDLcC6pok06BUqCrUVCrcA3SdSzPq6i%2BvXwszLecb%2BsoFv0SbotNgYHC%2B%2FwG2tn7JI1I4fFAeK5XGhtGozmu3pE7v1%2F%2ByBGtsEGq8A4k297XjUX9iwsLbJf2hq6m2PPGYn2G3qywym7EM7QjEG7ljEAQdV5rxWNTgXngr4uZMRjd1BUdP%2B0Mo%2BlrdixZ82bp6rMCA7Qeikdph8Tp2vL9WgKETDdcKKHEFEyHbfKxmeUYxeIS1Ds8Azgpz%2F1iFuG3yDdmx5xaXZhFtUlVIr946xm6%2F9QkXEBm4wZU2chpWXrbXqPWt%2F8ahuQdR7czhF3K6K7IZlgwG%2FODmKz5cqJt8rvA8s2usSjvAfeeV9E7ado9QoX76THhDy9ixbaH6Ji%2FOKTx6HbKVAcGS%2FFoYbgN9nsOIU9JvpmVJpF9hvjRHjrUMcV17r7FgKRNFg2vOoVXQeUijsfrhwCloI1WFQll4ulS%2BFFBTXjOHQNzAVL1V5NkqCB7pZdvVG2mwt9h1ypJGmLWg8%2BZ6WfDZnl2sZQgkMU95F9afN9mUAnp6LrROdna5lHRm3lee1fk918KWKdcIK%2FLR0oMdWO3INGqMQcL5MadUz4TyLJ7VdbRsGRukMDpi7B4LM%2F4uIQjlewzX%2FFRb65WvlVNZLFvJCDbKMN28tMIGOqUB9W8Pb07uTIF0h1IzKs%2BBYMrQclpgHSZTGUahOu1HZaw%2Fc2XBD784ZaI%2FHjleyJf7W5CNy54vltS01FsMLzCexW9vbJr%2FSYU9%2FrkWIMWhKLQH9DAhu5W%2BnSFZEMIRjJB5znMv1Mw5UdgDInR5LNJ1ZZetRkgcfmbe225GOjb3PtqCa6i99ug8Ci%2FWzlGUrcSsUPN%2FVkDaTJy%2BKduYDShWSgYyYAJj&X-Amz-Signature=45338666923a476a8307d8a78f491cc9e31e0b4f3a929aa383c80ce00e2419a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW53RR6T%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDSwywUOIJZj1lMQNzZA3eGLIadCTH5BVKSB6jy%2Bt3%2BWQIgCFbD61mZQ3o4%2B4jc2uYtC4pUhltxdjdOB%2FjmbFsucE4q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDLcC6pok06BUqCrUVCrcA3SdSzPq6i%2BvXwszLecb%2BsoFv0SbotNgYHC%2B%2FwG2tn7JI1I4fFAeK5XGhtGozmu3pE7v1%2F%2ByBGtsEGq8A4k297XjUX9iwsLbJf2hq6m2PPGYn2G3qywym7EM7QjEG7ljEAQdV5rxWNTgXngr4uZMRjd1BUdP%2B0Mo%2BlrdixZ82bp6rMCA7Qeikdph8Tp2vL9WgKETDdcKKHEFEyHbfKxmeUYxeIS1Ds8Azgpz%2F1iFuG3yDdmx5xaXZhFtUlVIr946xm6%2F9QkXEBm4wZU2chpWXrbXqPWt%2F8ahuQdR7czhF3K6K7IZlgwG%2FODmKz5cqJt8rvA8s2usSjvAfeeV9E7ado9QoX76THhDy9ixbaH6Ji%2FOKTx6HbKVAcGS%2FFoYbgN9nsOIU9JvpmVJpF9hvjRHjrUMcV17r7FgKRNFg2vOoVXQeUijsfrhwCloI1WFQll4ulS%2BFFBTXjOHQNzAVL1V5NkqCB7pZdvVG2mwt9h1ypJGmLWg8%2BZ6WfDZnl2sZQgkMU95F9afN9mUAnp6LrROdna5lHRm3lee1fk918KWKdcIK%2FLR0oMdWO3INGqMQcL5MadUz4TyLJ7VdbRsGRukMDpi7B4LM%2F4uIQjlewzX%2FFRb65WvlVNZLFvJCDbKMN28tMIGOqUB9W8Pb07uTIF0h1IzKs%2BBYMrQclpgHSZTGUahOu1HZaw%2Fc2XBD784ZaI%2FHjleyJf7W5CNy54vltS01FsMLzCexW9vbJr%2FSYU9%2FrkWIMWhKLQH9DAhu5W%2BnSFZEMIRjJB5znMv1Mw5UdgDInR5LNJ1ZZetRkgcfmbe225GOjb3PtqCa6i99ug8Ci%2FWzlGUrcSsUPN%2FVkDaTJy%2BKduYDShWSgYyYAJj&X-Amz-Signature=998662e166b97ba988909105b5b79be5e5f147278c907161a187f563d418b079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW53RR6T%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDSwywUOIJZj1lMQNzZA3eGLIadCTH5BVKSB6jy%2Bt3%2BWQIgCFbD61mZQ3o4%2B4jc2uYtC4pUhltxdjdOB%2FjmbFsucE4q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDLcC6pok06BUqCrUVCrcA3SdSzPq6i%2BvXwszLecb%2BsoFv0SbotNgYHC%2B%2FwG2tn7JI1I4fFAeK5XGhtGozmu3pE7v1%2F%2ByBGtsEGq8A4k297XjUX9iwsLbJf2hq6m2PPGYn2G3qywym7EM7QjEG7ljEAQdV5rxWNTgXngr4uZMRjd1BUdP%2B0Mo%2BlrdixZ82bp6rMCA7Qeikdph8Tp2vL9WgKETDdcKKHEFEyHbfKxmeUYxeIS1Ds8Azgpz%2F1iFuG3yDdmx5xaXZhFtUlVIr946xm6%2F9QkXEBm4wZU2chpWXrbXqPWt%2F8ahuQdR7czhF3K6K7IZlgwG%2FODmKz5cqJt8rvA8s2usSjvAfeeV9E7ado9QoX76THhDy9ixbaH6Ji%2FOKTx6HbKVAcGS%2FFoYbgN9nsOIU9JvpmVJpF9hvjRHjrUMcV17r7FgKRNFg2vOoVXQeUijsfrhwCloI1WFQll4ulS%2BFFBTXjOHQNzAVL1V5NkqCB7pZdvVG2mwt9h1ypJGmLWg8%2BZ6WfDZnl2sZQgkMU95F9afN9mUAnp6LrROdna5lHRm3lee1fk918KWKdcIK%2FLR0oMdWO3INGqMQcL5MadUz4TyLJ7VdbRsGRukMDpi7B4LM%2F4uIQjlewzX%2FFRb65WvlVNZLFvJCDbKMN28tMIGOqUB9W8Pb07uTIF0h1IzKs%2BBYMrQclpgHSZTGUahOu1HZaw%2Fc2XBD784ZaI%2FHjleyJf7W5CNy54vltS01FsMLzCexW9vbJr%2FSYU9%2FrkWIMWhKLQH9DAhu5W%2BnSFZEMIRjJB5znMv1Mw5UdgDInR5LNJ1ZZetRkgcfmbe225GOjb3PtqCa6i99ug8Ci%2FWzlGUrcSsUPN%2FVkDaTJy%2BKduYDShWSgYyYAJj&X-Amz-Signature=e0eece6b40f108ef6b33874e1c5fdf75d7330469a5e353c501e4bff11f86c9f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
