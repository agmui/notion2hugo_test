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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S5F4FVX%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3LzxYd%2F2gG%2F7rdqXG54wu1QDpffoSSM4lfqNb1U40vAiAdta1UpDLFWn4rLA3pBYeiJdnVSFFK9jEqI%2B2YDu7cyir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMjOL878bhfBzXm%2BMTKtwDJbgteodgtxoWbrtIf4zFG%2FylqPZVs86WCM1L0MkEdxTsbVAvmcx7IxnjAmCRTs0%2FBoMmGT%2FL83tN3v5x3HtC80tKIgdSLx6NudaWq2ScZGrfgtKsB6l%2Fb%2FS1gcC1Uq4IXeEaYJV9wbyiB48weriDZvcPbTvUt%2FEpzR4pfq8%2FYIoKrvbjrL8TvMI30hop86VH0%2FlGTgTsLKIKCs7cVUfgsMFV07rf3LXmXlS8%2FyDB9yfZlOhWJbu3gv4iGLrFDhCuGWg0UdHI2nBK%2FEQKwLQO%2B90bhNu%2BdzjfgcDSgJ0IwhOfJ2K3oHDYIdpkMMtAvCckhYx9GRNkTN05CgREppT6lVYxZFAaDgN5O%2B5zT%2BX94AB%2F7W8kF8qMq8XPQZV7qJg3gNTwfqGmOYw8JGJYJ%2FCKyGuwJljBuHw1qRvQRjEHFIhO4nGEFduIyvE09nVr%2B8E4GQV7aY1sLnriAw8dsfpnxO1LbQB6pESj%2FYyIz3%2F5o1IxocT5yxuVVYlIcMOC0ILFohE1A9Qu31heLpdbSKqEyP1uCoqb23hi8ALTjgGyJOc2d%2F4M8jTtPwObKOipzL4jklXU0ubIZd72qEIKsHmdyCTFOT%2FHRlinFg1%2FXTxXb1ZDbvYEJf5MgGGs%2BWgwwIGRwgY6pgEnicf5ZggpIMYTrUSqgrSts%2BTg03Ro8eThMeTTXlCQpaZEhtEPEl1SQVstUCjOAA61jQgAuZYCg9Qv8PgiXmmiHPQLXfLElInq7X8g0s07AXNvgc2unzidjLav2cSNurez34kaFwxl0VojaMfUBj%2BqaeRyzpii4eAZCe74nmUqk7hqUJ%2F1ISCohl3j3Abv92naxqHLIoP7T2nNT2HFmxS5lnsWvl9w&X-Amz-Signature=28ca2275f1419f36326d1744b7bc0cda386477e6acea11f591063e483ee26f72&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S5F4FVX%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3LzxYd%2F2gG%2F7rdqXG54wu1QDpffoSSM4lfqNb1U40vAiAdta1UpDLFWn4rLA3pBYeiJdnVSFFK9jEqI%2B2YDu7cyir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMjOL878bhfBzXm%2BMTKtwDJbgteodgtxoWbrtIf4zFG%2FylqPZVs86WCM1L0MkEdxTsbVAvmcx7IxnjAmCRTs0%2FBoMmGT%2FL83tN3v5x3HtC80tKIgdSLx6NudaWq2ScZGrfgtKsB6l%2Fb%2FS1gcC1Uq4IXeEaYJV9wbyiB48weriDZvcPbTvUt%2FEpzR4pfq8%2FYIoKrvbjrL8TvMI30hop86VH0%2FlGTgTsLKIKCs7cVUfgsMFV07rf3LXmXlS8%2FyDB9yfZlOhWJbu3gv4iGLrFDhCuGWg0UdHI2nBK%2FEQKwLQO%2B90bhNu%2BdzjfgcDSgJ0IwhOfJ2K3oHDYIdpkMMtAvCckhYx9GRNkTN05CgREppT6lVYxZFAaDgN5O%2B5zT%2BX94AB%2F7W8kF8qMq8XPQZV7qJg3gNTwfqGmOYw8JGJYJ%2FCKyGuwJljBuHw1qRvQRjEHFIhO4nGEFduIyvE09nVr%2B8E4GQV7aY1sLnriAw8dsfpnxO1LbQB6pESj%2FYyIz3%2F5o1IxocT5yxuVVYlIcMOC0ILFohE1A9Qu31heLpdbSKqEyP1uCoqb23hi8ALTjgGyJOc2d%2F4M8jTtPwObKOipzL4jklXU0ubIZd72qEIKsHmdyCTFOT%2FHRlinFg1%2FXTxXb1ZDbvYEJf5MgGGs%2BWgwwIGRwgY6pgEnicf5ZggpIMYTrUSqgrSts%2BTg03Ro8eThMeTTXlCQpaZEhtEPEl1SQVstUCjOAA61jQgAuZYCg9Qv8PgiXmmiHPQLXfLElInq7X8g0s07AXNvgc2unzidjLav2cSNurez34kaFwxl0VojaMfUBj%2BqaeRyzpii4eAZCe74nmUqk7hqUJ%2F1ISCohl3j3Abv92naxqHLIoP7T2nNT2HFmxS5lnsWvl9w&X-Amz-Signature=b208559879adc31a4bf8d221eaa37a1489289fb15a050e870171d74bed213123&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S5F4FVX%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3LzxYd%2F2gG%2F7rdqXG54wu1QDpffoSSM4lfqNb1U40vAiAdta1UpDLFWn4rLA3pBYeiJdnVSFFK9jEqI%2B2YDu7cyir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMjOL878bhfBzXm%2BMTKtwDJbgteodgtxoWbrtIf4zFG%2FylqPZVs86WCM1L0MkEdxTsbVAvmcx7IxnjAmCRTs0%2FBoMmGT%2FL83tN3v5x3HtC80tKIgdSLx6NudaWq2ScZGrfgtKsB6l%2Fb%2FS1gcC1Uq4IXeEaYJV9wbyiB48weriDZvcPbTvUt%2FEpzR4pfq8%2FYIoKrvbjrL8TvMI30hop86VH0%2FlGTgTsLKIKCs7cVUfgsMFV07rf3LXmXlS8%2FyDB9yfZlOhWJbu3gv4iGLrFDhCuGWg0UdHI2nBK%2FEQKwLQO%2B90bhNu%2BdzjfgcDSgJ0IwhOfJ2K3oHDYIdpkMMtAvCckhYx9GRNkTN05CgREppT6lVYxZFAaDgN5O%2B5zT%2BX94AB%2F7W8kF8qMq8XPQZV7qJg3gNTwfqGmOYw8JGJYJ%2FCKyGuwJljBuHw1qRvQRjEHFIhO4nGEFduIyvE09nVr%2B8E4GQV7aY1sLnriAw8dsfpnxO1LbQB6pESj%2FYyIz3%2F5o1IxocT5yxuVVYlIcMOC0ILFohE1A9Qu31heLpdbSKqEyP1uCoqb23hi8ALTjgGyJOc2d%2F4M8jTtPwObKOipzL4jklXU0ubIZd72qEIKsHmdyCTFOT%2FHRlinFg1%2FXTxXb1ZDbvYEJf5MgGGs%2BWgwwIGRwgY6pgEnicf5ZggpIMYTrUSqgrSts%2BTg03Ro8eThMeTTXlCQpaZEhtEPEl1SQVstUCjOAA61jQgAuZYCg9Qv8PgiXmmiHPQLXfLElInq7X8g0s07AXNvgc2unzidjLav2cSNurez34kaFwxl0VojaMfUBj%2BqaeRyzpii4eAZCe74nmUqk7hqUJ%2F1ISCohl3j3Abv92naxqHLIoP7T2nNT2HFmxS5lnsWvl9w&X-Amz-Signature=fdadc447d9c63cbcdc8ed83179ed95bd8be64129620511e9d199eafc1488ee61&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S5F4FVX%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3LzxYd%2F2gG%2F7rdqXG54wu1QDpffoSSM4lfqNb1U40vAiAdta1UpDLFWn4rLA3pBYeiJdnVSFFK9jEqI%2B2YDu7cyir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMjOL878bhfBzXm%2BMTKtwDJbgteodgtxoWbrtIf4zFG%2FylqPZVs86WCM1L0MkEdxTsbVAvmcx7IxnjAmCRTs0%2FBoMmGT%2FL83tN3v5x3HtC80tKIgdSLx6NudaWq2ScZGrfgtKsB6l%2Fb%2FS1gcC1Uq4IXeEaYJV9wbyiB48weriDZvcPbTvUt%2FEpzR4pfq8%2FYIoKrvbjrL8TvMI30hop86VH0%2FlGTgTsLKIKCs7cVUfgsMFV07rf3LXmXlS8%2FyDB9yfZlOhWJbu3gv4iGLrFDhCuGWg0UdHI2nBK%2FEQKwLQO%2B90bhNu%2BdzjfgcDSgJ0IwhOfJ2K3oHDYIdpkMMtAvCckhYx9GRNkTN05CgREppT6lVYxZFAaDgN5O%2B5zT%2BX94AB%2F7W8kF8qMq8XPQZV7qJg3gNTwfqGmOYw8JGJYJ%2FCKyGuwJljBuHw1qRvQRjEHFIhO4nGEFduIyvE09nVr%2B8E4GQV7aY1sLnriAw8dsfpnxO1LbQB6pESj%2FYyIz3%2F5o1IxocT5yxuVVYlIcMOC0ILFohE1A9Qu31heLpdbSKqEyP1uCoqb23hi8ALTjgGyJOc2d%2F4M8jTtPwObKOipzL4jklXU0ubIZd72qEIKsHmdyCTFOT%2FHRlinFg1%2FXTxXb1ZDbvYEJf5MgGGs%2BWgwwIGRwgY6pgEnicf5ZggpIMYTrUSqgrSts%2BTg03Ro8eThMeTTXlCQpaZEhtEPEl1SQVstUCjOAA61jQgAuZYCg9Qv8PgiXmmiHPQLXfLElInq7X8g0s07AXNvgc2unzidjLav2cSNurez34kaFwxl0VojaMfUBj%2BqaeRyzpii4eAZCe74nmUqk7hqUJ%2F1ISCohl3j3Abv92naxqHLIoP7T2nNT2HFmxS5lnsWvl9w&X-Amz-Signature=54712cd26abdc3ba2b8254bce9cf663aa5625760cf1c9ba24ea0f1ee4ce1f9ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S5F4FVX%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3LzxYd%2F2gG%2F7rdqXG54wu1QDpffoSSM4lfqNb1U40vAiAdta1UpDLFWn4rLA3pBYeiJdnVSFFK9jEqI%2B2YDu7cyir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMjOL878bhfBzXm%2BMTKtwDJbgteodgtxoWbrtIf4zFG%2FylqPZVs86WCM1L0MkEdxTsbVAvmcx7IxnjAmCRTs0%2FBoMmGT%2FL83tN3v5x3HtC80tKIgdSLx6NudaWq2ScZGrfgtKsB6l%2Fb%2FS1gcC1Uq4IXeEaYJV9wbyiB48weriDZvcPbTvUt%2FEpzR4pfq8%2FYIoKrvbjrL8TvMI30hop86VH0%2FlGTgTsLKIKCs7cVUfgsMFV07rf3LXmXlS8%2FyDB9yfZlOhWJbu3gv4iGLrFDhCuGWg0UdHI2nBK%2FEQKwLQO%2B90bhNu%2BdzjfgcDSgJ0IwhOfJ2K3oHDYIdpkMMtAvCckhYx9GRNkTN05CgREppT6lVYxZFAaDgN5O%2B5zT%2BX94AB%2F7W8kF8qMq8XPQZV7qJg3gNTwfqGmOYw8JGJYJ%2FCKyGuwJljBuHw1qRvQRjEHFIhO4nGEFduIyvE09nVr%2B8E4GQV7aY1sLnriAw8dsfpnxO1LbQB6pESj%2FYyIz3%2F5o1IxocT5yxuVVYlIcMOC0ILFohE1A9Qu31heLpdbSKqEyP1uCoqb23hi8ALTjgGyJOc2d%2F4M8jTtPwObKOipzL4jklXU0ubIZd72qEIKsHmdyCTFOT%2FHRlinFg1%2FXTxXb1ZDbvYEJf5MgGGs%2BWgwwIGRwgY6pgEnicf5ZggpIMYTrUSqgrSts%2BTg03Ro8eThMeTTXlCQpaZEhtEPEl1SQVstUCjOAA61jQgAuZYCg9Qv8PgiXmmiHPQLXfLElInq7X8g0s07AXNvgc2unzidjLav2cSNurez34kaFwxl0VojaMfUBj%2BqaeRyzpii4eAZCe74nmUqk7hqUJ%2F1ISCohl3j3Abv92naxqHLIoP7T2nNT2HFmxS5lnsWvl9w&X-Amz-Signature=4afc4c4133ec9b29168660a246e10cea8a0fd2d8a4fb05a895e83b660cadb2e1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
