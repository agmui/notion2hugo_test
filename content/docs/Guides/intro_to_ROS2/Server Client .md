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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZNH6RFO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDUE0HvdlstE2EmQhZ1tgQ44E2UezhL1%2B2uWnXZ5fI7lgIgH7UTU9L31adONn0ZqDmrDYuGw4B%2F%2Bg4zLL7Z2%2FGpjOcq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMMgAyxxnbf%2FVJpSCCrcA5vpAusmAJ5Sq73k4b8IOByuctQHsCuZNa%2Ft%2FjxdRJtDdHNrvUTm7qBG1uRQPg9karraofE0PQvxIY34%2B%2BJepzVENWSfM5T3GEL0l%2Bv2xJjeVIfxukkAYomG%2Blnv9JhG5sqx4dsO7%2FrAPrx3mq72%2FwXLlRMrTEhy3F54FyscjEBa%2By4Efa%2FJnWfN9z%2BJmgucJIQTY%2FWar%2FMZEl63f67mWhTjjGnes0CbrFhaIuhfTMdzAZLqLptnG9H6PnzyuWVJ9Q7NVUOl5LmSfg%2FrdhMmWbfu6xc%2FiNh5S1idDqLYYYuGo4rHBuOuAZhp1gWnHkk2NHlTOXnI6KYenS1iFiKOhKHMb6ZQV0HXfZWhkDpMgN3kd%2BLx5Gjs40ZZN5lhtXcXexgRcj7UmjfM%2BmSlVec3Y4n2s4b8on0IX00%2BR4Ojh6yInoupFUY96vG1P3XD8NmgM3pN%2F7P0Ww8qEXDn1qzmcbHScOMGlBRQzgC3olV2QQFMWkngEno%2BNkAi5MOoCWhRo%2Bz2IXaoLn%2B8Nm%2BIC4n2YEgNq8YlPT1kJ3rLi6H2pT%2BeH3m4iwFltomNuDEk3%2FzvyLscQTKllATT%2B05W3Eh2LEMAePB%2FVWuVDGmEW8o51p3%2BX4WXj2QjlIy1FVmUMJTaxsQGOqUBLvhed5RRFvwbb6xawfxiPE1xcoceqcXEOjQdkbEEurBlT7Zw0gVn8F7KUmF6%2F2n1YC2Owch2J3R%2B8dz9J2sabkKZV1eMr4CyKGLpjc%2BWpRqeDGEIbNy7sHoNEu3yW8gLv0frcjF%2Bg%2FQgJfEc5Tn9F2MUWczG4bfUVmy2VCsL9ZM8MxWxvqoDh7%2FabRe6jdvhxubKJoWNdJEzHeLkOlo5%2BUriFbXP&X-Amz-Signature=ce6df25b54f33ead522e12063e824f65a4a9d27539141726aa9dbea06cb30a81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZNH6RFO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDUE0HvdlstE2EmQhZ1tgQ44E2UezhL1%2B2uWnXZ5fI7lgIgH7UTU9L31adONn0ZqDmrDYuGw4B%2F%2Bg4zLL7Z2%2FGpjOcq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMMgAyxxnbf%2FVJpSCCrcA5vpAusmAJ5Sq73k4b8IOByuctQHsCuZNa%2Ft%2FjxdRJtDdHNrvUTm7qBG1uRQPg9karraofE0PQvxIY34%2B%2BJepzVENWSfM5T3GEL0l%2Bv2xJjeVIfxukkAYomG%2Blnv9JhG5sqx4dsO7%2FrAPrx3mq72%2FwXLlRMrTEhy3F54FyscjEBa%2By4Efa%2FJnWfN9z%2BJmgucJIQTY%2FWar%2FMZEl63f67mWhTjjGnes0CbrFhaIuhfTMdzAZLqLptnG9H6PnzyuWVJ9Q7NVUOl5LmSfg%2FrdhMmWbfu6xc%2FiNh5S1idDqLYYYuGo4rHBuOuAZhp1gWnHkk2NHlTOXnI6KYenS1iFiKOhKHMb6ZQV0HXfZWhkDpMgN3kd%2BLx5Gjs40ZZN5lhtXcXexgRcj7UmjfM%2BmSlVec3Y4n2s4b8on0IX00%2BR4Ojh6yInoupFUY96vG1P3XD8NmgM3pN%2F7P0Ww8qEXDn1qzmcbHScOMGlBRQzgC3olV2QQFMWkngEno%2BNkAi5MOoCWhRo%2Bz2IXaoLn%2B8Nm%2BIC4n2YEgNq8YlPT1kJ3rLi6H2pT%2BeH3m4iwFltomNuDEk3%2FzvyLscQTKllATT%2B05W3Eh2LEMAePB%2FVWuVDGmEW8o51p3%2BX4WXj2QjlIy1FVmUMJTaxsQGOqUBLvhed5RRFvwbb6xawfxiPE1xcoceqcXEOjQdkbEEurBlT7Zw0gVn8F7KUmF6%2F2n1YC2Owch2J3R%2B8dz9J2sabkKZV1eMr4CyKGLpjc%2BWpRqeDGEIbNy7sHoNEu3yW8gLv0frcjF%2Bg%2FQgJfEc5Tn9F2MUWczG4bfUVmy2VCsL9ZM8MxWxvqoDh7%2FabRe6jdvhxubKJoWNdJEzHeLkOlo5%2BUriFbXP&X-Amz-Signature=9b594decfcb90f5cd9a80cf024e2cd48cf296312e2aa68408d43090da749ca70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZNH6RFO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDUE0HvdlstE2EmQhZ1tgQ44E2UezhL1%2B2uWnXZ5fI7lgIgH7UTU9L31adONn0ZqDmrDYuGw4B%2F%2Bg4zLL7Z2%2FGpjOcq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMMgAyxxnbf%2FVJpSCCrcA5vpAusmAJ5Sq73k4b8IOByuctQHsCuZNa%2Ft%2FjxdRJtDdHNrvUTm7qBG1uRQPg9karraofE0PQvxIY34%2B%2BJepzVENWSfM5T3GEL0l%2Bv2xJjeVIfxukkAYomG%2Blnv9JhG5sqx4dsO7%2FrAPrx3mq72%2FwXLlRMrTEhy3F54FyscjEBa%2By4Efa%2FJnWfN9z%2BJmgucJIQTY%2FWar%2FMZEl63f67mWhTjjGnes0CbrFhaIuhfTMdzAZLqLptnG9H6PnzyuWVJ9Q7NVUOl5LmSfg%2FrdhMmWbfu6xc%2FiNh5S1idDqLYYYuGo4rHBuOuAZhp1gWnHkk2NHlTOXnI6KYenS1iFiKOhKHMb6ZQV0HXfZWhkDpMgN3kd%2BLx5Gjs40ZZN5lhtXcXexgRcj7UmjfM%2BmSlVec3Y4n2s4b8on0IX00%2BR4Ojh6yInoupFUY96vG1P3XD8NmgM3pN%2F7P0Ww8qEXDn1qzmcbHScOMGlBRQzgC3olV2QQFMWkngEno%2BNkAi5MOoCWhRo%2Bz2IXaoLn%2B8Nm%2BIC4n2YEgNq8YlPT1kJ3rLi6H2pT%2BeH3m4iwFltomNuDEk3%2FzvyLscQTKllATT%2B05W3Eh2LEMAePB%2FVWuVDGmEW8o51p3%2BX4WXj2QjlIy1FVmUMJTaxsQGOqUBLvhed5RRFvwbb6xawfxiPE1xcoceqcXEOjQdkbEEurBlT7Zw0gVn8F7KUmF6%2F2n1YC2Owch2J3R%2B8dz9J2sabkKZV1eMr4CyKGLpjc%2BWpRqeDGEIbNy7sHoNEu3yW8gLv0frcjF%2Bg%2FQgJfEc5Tn9F2MUWczG4bfUVmy2VCsL9ZM8MxWxvqoDh7%2FabRe6jdvhxubKJoWNdJEzHeLkOlo5%2BUriFbXP&X-Amz-Signature=e3b5213bc2314bd70043ae5519cbf76bb241fd5d8763bde4b6b13fa64113828b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZNH6RFO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDUE0HvdlstE2EmQhZ1tgQ44E2UezhL1%2B2uWnXZ5fI7lgIgH7UTU9L31adONn0ZqDmrDYuGw4B%2F%2Bg4zLL7Z2%2FGpjOcq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMMgAyxxnbf%2FVJpSCCrcA5vpAusmAJ5Sq73k4b8IOByuctQHsCuZNa%2Ft%2FjxdRJtDdHNrvUTm7qBG1uRQPg9karraofE0PQvxIY34%2B%2BJepzVENWSfM5T3GEL0l%2Bv2xJjeVIfxukkAYomG%2Blnv9JhG5sqx4dsO7%2FrAPrx3mq72%2FwXLlRMrTEhy3F54FyscjEBa%2By4Efa%2FJnWfN9z%2BJmgucJIQTY%2FWar%2FMZEl63f67mWhTjjGnes0CbrFhaIuhfTMdzAZLqLptnG9H6PnzyuWVJ9Q7NVUOl5LmSfg%2FrdhMmWbfu6xc%2FiNh5S1idDqLYYYuGo4rHBuOuAZhp1gWnHkk2NHlTOXnI6KYenS1iFiKOhKHMb6ZQV0HXfZWhkDpMgN3kd%2BLx5Gjs40ZZN5lhtXcXexgRcj7UmjfM%2BmSlVec3Y4n2s4b8on0IX00%2BR4Ojh6yInoupFUY96vG1P3XD8NmgM3pN%2F7P0Ww8qEXDn1qzmcbHScOMGlBRQzgC3olV2QQFMWkngEno%2BNkAi5MOoCWhRo%2Bz2IXaoLn%2B8Nm%2BIC4n2YEgNq8YlPT1kJ3rLi6H2pT%2BeH3m4iwFltomNuDEk3%2FzvyLscQTKllATT%2B05W3Eh2LEMAePB%2FVWuVDGmEW8o51p3%2BX4WXj2QjlIy1FVmUMJTaxsQGOqUBLvhed5RRFvwbb6xawfxiPE1xcoceqcXEOjQdkbEEurBlT7Zw0gVn8F7KUmF6%2F2n1YC2Owch2J3R%2B8dz9J2sabkKZV1eMr4CyKGLpjc%2BWpRqeDGEIbNy7sHoNEu3yW8gLv0frcjF%2Bg%2FQgJfEc5Tn9F2MUWczG4bfUVmy2VCsL9ZM8MxWxvqoDh7%2FabRe6jdvhxubKJoWNdJEzHeLkOlo5%2BUriFbXP&X-Amz-Signature=ee55fc26c1c9731a3e66e0e999f359e89715d138734123a97f1815dac229babf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZNH6RFO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDUE0HvdlstE2EmQhZ1tgQ44E2UezhL1%2B2uWnXZ5fI7lgIgH7UTU9L31adONn0ZqDmrDYuGw4B%2F%2Bg4zLL7Z2%2FGpjOcq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMMgAyxxnbf%2FVJpSCCrcA5vpAusmAJ5Sq73k4b8IOByuctQHsCuZNa%2Ft%2FjxdRJtDdHNrvUTm7qBG1uRQPg9karraofE0PQvxIY34%2B%2BJepzVENWSfM5T3GEL0l%2Bv2xJjeVIfxukkAYomG%2Blnv9JhG5sqx4dsO7%2FrAPrx3mq72%2FwXLlRMrTEhy3F54FyscjEBa%2By4Efa%2FJnWfN9z%2BJmgucJIQTY%2FWar%2FMZEl63f67mWhTjjGnes0CbrFhaIuhfTMdzAZLqLptnG9H6PnzyuWVJ9Q7NVUOl5LmSfg%2FrdhMmWbfu6xc%2FiNh5S1idDqLYYYuGo4rHBuOuAZhp1gWnHkk2NHlTOXnI6KYenS1iFiKOhKHMb6ZQV0HXfZWhkDpMgN3kd%2BLx5Gjs40ZZN5lhtXcXexgRcj7UmjfM%2BmSlVec3Y4n2s4b8on0IX00%2BR4Ojh6yInoupFUY96vG1P3XD8NmgM3pN%2F7P0Ww8qEXDn1qzmcbHScOMGlBRQzgC3olV2QQFMWkngEno%2BNkAi5MOoCWhRo%2Bz2IXaoLn%2B8Nm%2BIC4n2YEgNq8YlPT1kJ3rLi6H2pT%2BeH3m4iwFltomNuDEk3%2FzvyLscQTKllATT%2B05W3Eh2LEMAePB%2FVWuVDGmEW8o51p3%2BX4WXj2QjlIy1FVmUMJTaxsQGOqUBLvhed5RRFvwbb6xawfxiPE1xcoceqcXEOjQdkbEEurBlT7Zw0gVn8F7KUmF6%2F2n1YC2Owch2J3R%2B8dz9J2sabkKZV1eMr4CyKGLpjc%2BWpRqeDGEIbNy7sHoNEu3yW8gLv0frcjF%2Bg%2FQgJfEc5Tn9F2MUWczG4bfUVmy2VCsL9ZM8MxWxvqoDh7%2FabRe6jdvhxubKJoWNdJEzHeLkOlo5%2BUriFbXP&X-Amz-Signature=898cb20c426c7ba745c47ae4f398aec33a83aebb1c0f7d1f15d31a0093417d86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
