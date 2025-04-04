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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466575BG3VU%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPH5Zsf4RPe5u6a%2FNtKHy3eZbgCBKsVzlv%2BWm0j%2BeZqAiEA0G8WIuc%2BGXoYE1tcl6JaUdrETttMP4GCFCn03JbZbpsq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDEG2fujuaHFIBFuJbircA1miDc0WZeRcdEmf27EMJynGUZQW5eC1oFvpEt86OGjZ1qm2ypkitXenKoUyUgdPBn3HdULY5erBB%2F9fKzxlH6M9xNq2QKpS0YZT5N7dCSGKLK9oMuTZEZw8klxsqSlbK1B94Mrcy0k5IHqOuv8X0Z5Fjr9T%2BOlQ0uFGiL8YVUhvqQnyC6DAyg9jT07ns%2FWuTSex8WRMgNhTGYTdSMDFz8OA4Dl2RF3nL42Y3yc2V4%2B8n9%2FG6xE36zFwyFQq0IkeywVkPH0XZ%2BUJ9%2Fq4%2FXy5X5FzOQvdXsRRvjHrCtOk3%2Be5EQjB0UcUvpoU3X2IBrs3IIt0ekWrlzKbG0Z0xbxomjB9ESnG5VdZDFP9t%2FCVOzy3h1WuvhVbevxyftCA2ma2ICLBMiryecOBGusK7ze%2Bd5gbH1e2tnHEFS%2FkOCQOOSNB3NH0SKkZnnAowzy6vLIIdTdvcChznlOVfViLqn6aJkyBbW18WIhS%2BnurMBnvA3iRmTm%2Fh273LBfsQLlj%2FNoRyXQWAI%2BesVl4%2B3QJMHSYdr0ZkeyM9iYwQv240BnNmJ99jgCHJjBZuLDcSR9%2FX9WCv1IN5Y794dIKnoQ0XIOtv13EnN6zQNJlRVz8R8Piga2jkK0Cfo7Q23qn%2FZC0MO7SwL8GOqUBrSjA%2FHNBVHERjnMWVuQoX0mEsWWHg7%2Bz9Dvpmd%2B6gZGhdU7%2FwJsmifakog2BfCHEwtzd4%2Bxg2mMVqi5Zho8GT4zfuuiOGrfCqYt4ko4jd9oY39JPh1FE7OAKpXHJukDWAeVb3SxGu%2FHTIv%2FUBASydxa6Ahz%2FQwe49exZvTEkO2cVOezCvfiKiwgpzJwJEwt7oRExr48pl2ihR5lTeaD98UV6oEou&X-Amz-Signature=b2b4b8df53084e7108363ff373bd3b4a9fe776faee26bb105e0e8b7aaeb4f83c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466575BG3VU%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPH5Zsf4RPe5u6a%2FNtKHy3eZbgCBKsVzlv%2BWm0j%2BeZqAiEA0G8WIuc%2BGXoYE1tcl6JaUdrETttMP4GCFCn03JbZbpsq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDEG2fujuaHFIBFuJbircA1miDc0WZeRcdEmf27EMJynGUZQW5eC1oFvpEt86OGjZ1qm2ypkitXenKoUyUgdPBn3HdULY5erBB%2F9fKzxlH6M9xNq2QKpS0YZT5N7dCSGKLK9oMuTZEZw8klxsqSlbK1B94Mrcy0k5IHqOuv8X0Z5Fjr9T%2BOlQ0uFGiL8YVUhvqQnyC6DAyg9jT07ns%2FWuTSex8WRMgNhTGYTdSMDFz8OA4Dl2RF3nL42Y3yc2V4%2B8n9%2FG6xE36zFwyFQq0IkeywVkPH0XZ%2BUJ9%2Fq4%2FXy5X5FzOQvdXsRRvjHrCtOk3%2Be5EQjB0UcUvpoU3X2IBrs3IIt0ekWrlzKbG0Z0xbxomjB9ESnG5VdZDFP9t%2FCVOzy3h1WuvhVbevxyftCA2ma2ICLBMiryecOBGusK7ze%2Bd5gbH1e2tnHEFS%2FkOCQOOSNB3NH0SKkZnnAowzy6vLIIdTdvcChznlOVfViLqn6aJkyBbW18WIhS%2BnurMBnvA3iRmTm%2Fh273LBfsQLlj%2FNoRyXQWAI%2BesVl4%2B3QJMHSYdr0ZkeyM9iYwQv240BnNmJ99jgCHJjBZuLDcSR9%2FX9WCv1IN5Y794dIKnoQ0XIOtv13EnN6zQNJlRVz8R8Piga2jkK0Cfo7Q23qn%2FZC0MO7SwL8GOqUBrSjA%2FHNBVHERjnMWVuQoX0mEsWWHg7%2Bz9Dvpmd%2B6gZGhdU7%2FwJsmifakog2BfCHEwtzd4%2Bxg2mMVqi5Zho8GT4zfuuiOGrfCqYt4ko4jd9oY39JPh1FE7OAKpXHJukDWAeVb3SxGu%2FHTIv%2FUBASydxa6Ahz%2FQwe49exZvTEkO2cVOezCvfiKiwgpzJwJEwt7oRExr48pl2ihR5lTeaD98UV6oEou&X-Amz-Signature=8ef2cd63bef27a188ed3c799149c58d186e20f2eba6160930ffbf7e9f9a5f90b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466575BG3VU%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPH5Zsf4RPe5u6a%2FNtKHy3eZbgCBKsVzlv%2BWm0j%2BeZqAiEA0G8WIuc%2BGXoYE1tcl6JaUdrETttMP4GCFCn03JbZbpsq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDEG2fujuaHFIBFuJbircA1miDc0WZeRcdEmf27EMJynGUZQW5eC1oFvpEt86OGjZ1qm2ypkitXenKoUyUgdPBn3HdULY5erBB%2F9fKzxlH6M9xNq2QKpS0YZT5N7dCSGKLK9oMuTZEZw8klxsqSlbK1B94Mrcy0k5IHqOuv8X0Z5Fjr9T%2BOlQ0uFGiL8YVUhvqQnyC6DAyg9jT07ns%2FWuTSex8WRMgNhTGYTdSMDFz8OA4Dl2RF3nL42Y3yc2V4%2B8n9%2FG6xE36zFwyFQq0IkeywVkPH0XZ%2BUJ9%2Fq4%2FXy5X5FzOQvdXsRRvjHrCtOk3%2Be5EQjB0UcUvpoU3X2IBrs3IIt0ekWrlzKbG0Z0xbxomjB9ESnG5VdZDFP9t%2FCVOzy3h1WuvhVbevxyftCA2ma2ICLBMiryecOBGusK7ze%2Bd5gbH1e2tnHEFS%2FkOCQOOSNB3NH0SKkZnnAowzy6vLIIdTdvcChznlOVfViLqn6aJkyBbW18WIhS%2BnurMBnvA3iRmTm%2Fh273LBfsQLlj%2FNoRyXQWAI%2BesVl4%2B3QJMHSYdr0ZkeyM9iYwQv240BnNmJ99jgCHJjBZuLDcSR9%2FX9WCv1IN5Y794dIKnoQ0XIOtv13EnN6zQNJlRVz8R8Piga2jkK0Cfo7Q23qn%2FZC0MO7SwL8GOqUBrSjA%2FHNBVHERjnMWVuQoX0mEsWWHg7%2Bz9Dvpmd%2B6gZGhdU7%2FwJsmifakog2BfCHEwtzd4%2Bxg2mMVqi5Zho8GT4zfuuiOGrfCqYt4ko4jd9oY39JPh1FE7OAKpXHJukDWAeVb3SxGu%2FHTIv%2FUBASydxa6Ahz%2FQwe49exZvTEkO2cVOezCvfiKiwgpzJwJEwt7oRExr48pl2ihR5lTeaD98UV6oEou&X-Amz-Signature=fdfda13a354877dc67a87c0949d7420af6ef6797de64f3f62dfcfa2f4ce78289&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466575BG3VU%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPH5Zsf4RPe5u6a%2FNtKHy3eZbgCBKsVzlv%2BWm0j%2BeZqAiEA0G8WIuc%2BGXoYE1tcl6JaUdrETttMP4GCFCn03JbZbpsq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDEG2fujuaHFIBFuJbircA1miDc0WZeRcdEmf27EMJynGUZQW5eC1oFvpEt86OGjZ1qm2ypkitXenKoUyUgdPBn3HdULY5erBB%2F9fKzxlH6M9xNq2QKpS0YZT5N7dCSGKLK9oMuTZEZw8klxsqSlbK1B94Mrcy0k5IHqOuv8X0Z5Fjr9T%2BOlQ0uFGiL8YVUhvqQnyC6DAyg9jT07ns%2FWuTSex8WRMgNhTGYTdSMDFz8OA4Dl2RF3nL42Y3yc2V4%2B8n9%2FG6xE36zFwyFQq0IkeywVkPH0XZ%2BUJ9%2Fq4%2FXy5X5FzOQvdXsRRvjHrCtOk3%2Be5EQjB0UcUvpoU3X2IBrs3IIt0ekWrlzKbG0Z0xbxomjB9ESnG5VdZDFP9t%2FCVOzy3h1WuvhVbevxyftCA2ma2ICLBMiryecOBGusK7ze%2Bd5gbH1e2tnHEFS%2FkOCQOOSNB3NH0SKkZnnAowzy6vLIIdTdvcChznlOVfViLqn6aJkyBbW18WIhS%2BnurMBnvA3iRmTm%2Fh273LBfsQLlj%2FNoRyXQWAI%2BesVl4%2B3QJMHSYdr0ZkeyM9iYwQv240BnNmJ99jgCHJjBZuLDcSR9%2FX9WCv1IN5Y794dIKnoQ0XIOtv13EnN6zQNJlRVz8R8Piga2jkK0Cfo7Q23qn%2FZC0MO7SwL8GOqUBrSjA%2FHNBVHERjnMWVuQoX0mEsWWHg7%2Bz9Dvpmd%2B6gZGhdU7%2FwJsmifakog2BfCHEwtzd4%2Bxg2mMVqi5Zho8GT4zfuuiOGrfCqYt4ko4jd9oY39JPh1FE7OAKpXHJukDWAeVb3SxGu%2FHTIv%2FUBASydxa6Ahz%2FQwe49exZvTEkO2cVOezCvfiKiwgpzJwJEwt7oRExr48pl2ihR5lTeaD98UV6oEou&X-Amz-Signature=23e577f4af752cc1b16898ba10291632abf0b0d71b800d2660d1681465560d98&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466575BG3VU%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPH5Zsf4RPe5u6a%2FNtKHy3eZbgCBKsVzlv%2BWm0j%2BeZqAiEA0G8WIuc%2BGXoYE1tcl6JaUdrETttMP4GCFCn03JbZbpsq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDEG2fujuaHFIBFuJbircA1miDc0WZeRcdEmf27EMJynGUZQW5eC1oFvpEt86OGjZ1qm2ypkitXenKoUyUgdPBn3HdULY5erBB%2F9fKzxlH6M9xNq2QKpS0YZT5N7dCSGKLK9oMuTZEZw8klxsqSlbK1B94Mrcy0k5IHqOuv8X0Z5Fjr9T%2BOlQ0uFGiL8YVUhvqQnyC6DAyg9jT07ns%2FWuTSex8WRMgNhTGYTdSMDFz8OA4Dl2RF3nL42Y3yc2V4%2B8n9%2FG6xE36zFwyFQq0IkeywVkPH0XZ%2BUJ9%2Fq4%2FXy5X5FzOQvdXsRRvjHrCtOk3%2Be5EQjB0UcUvpoU3X2IBrs3IIt0ekWrlzKbG0Z0xbxomjB9ESnG5VdZDFP9t%2FCVOzy3h1WuvhVbevxyftCA2ma2ICLBMiryecOBGusK7ze%2Bd5gbH1e2tnHEFS%2FkOCQOOSNB3NH0SKkZnnAowzy6vLIIdTdvcChznlOVfViLqn6aJkyBbW18WIhS%2BnurMBnvA3iRmTm%2Fh273LBfsQLlj%2FNoRyXQWAI%2BesVl4%2B3QJMHSYdr0ZkeyM9iYwQv240BnNmJ99jgCHJjBZuLDcSR9%2FX9WCv1IN5Y794dIKnoQ0XIOtv13EnN6zQNJlRVz8R8Piga2jkK0Cfo7Q23qn%2FZC0MO7SwL8GOqUBrSjA%2FHNBVHERjnMWVuQoX0mEsWWHg7%2Bz9Dvpmd%2B6gZGhdU7%2FwJsmifakog2BfCHEwtzd4%2Bxg2mMVqi5Zho8GT4zfuuiOGrfCqYt4ko4jd9oY39JPh1FE7OAKpXHJukDWAeVb3SxGu%2FHTIv%2FUBASydxa6Ahz%2FQwe49exZvTEkO2cVOezCvfiKiwgpzJwJEwt7oRExr48pl2ihR5lTeaD98UV6oEou&X-Amz-Signature=9250c6db8d68e0731bc2c4c7301eef9c567c49d8ee8be39843fd168d01b85bae&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
