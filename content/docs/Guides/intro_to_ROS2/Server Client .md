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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDSEQRK5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T020854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDgnRjV9%2BuufwLkR7ACNS6AiQm9SI7BjcNmNhLOrnTdwIgXeM0qQVZCZ%2BO7Xoqyu%2B4vPVPBF5KhY3lIa64xw89rKwq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDN0WwiR7vOcM9ripxyrcAzjC57wWBLuodjwtVK4%2FLZaiJN9xghhi%2F7TXtaWicpoiYnMtV1QT3EUYqxWQVjIODi7diOVb2ZG57KHNv3Tl6TfZzsMs37hrnJ18BCo%2Bz%2BnUMIQClKMThS2bqjABVsmDbMcyzsD4Bcto9OtbayYJczbjHVi5sTqGHcXZq%2BCbIYlTLrVAQN7sDNkWb8b6RCA%2Bz9cYyoA7DuoklwL9Eh7gHW7wrrYZwKkAO%2FAfsrJH7B%2FhuyWrksTSagBcusmZUIAApvLQSlkR8D%2BkPgYDSSm9FziXOLyaOQic%2BwxvoNy8JYOIZ08bdUpIuvtaXT3H2gjJf%2BR7PYKTF7icSi7cvTfsef3Qa76lCusqlb8Bo%2BeeSQ4GNX5VLPHWpscZN5YOFljyzJPZBm1Cd9UcDsTUfkJCBcOrqsrvrDLGd%2Bp3fZCVHU1rg7IgCI89Un1YOxvQKUEdTcPVvn9rn7RPyuNCfxk32VZCVKFfxMZLWFhZh%2BGyLFM38wAPoo1QRPbbK83XLKbWBv1Fv%2FG234Gh90jnurgu%2Ffra6WRsiMqItLXYqr%2BrmXLXzF6zi4z4XTotT2LS3U3uWKBzmQ3A7N8PMco25mfm1ZAGYyceS2KT1RcgG7GISWyAVvNTV5Q5DsZLHlLJMMOour0GOqUBWVgROvBAL5mxoQU8g7BhJpa1wwRjLXiEJEedGqu6EuOhBLZKuCDZYV3NMeZOxuWeJBSXkFHJlcCYtd%2BMo%2FJuiMRSf2E1xpQ%2F6OmvefiFazHGilcl8i992m20%2FOEoMQvRvU%2BnwKfmKqUmUVrxEKisuVkZAA%2Fr3C6mOmiHnmKZQojJ%2FLYe3bnk03qUx1WihS5TyTbDE7ndp4PUkPJsvCAZdXvYaGVw&X-Amz-Signature=4736141e9631c31e3d9f2456dca902f575ad1372d1ef93361eb72c75b60fb74d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDSEQRK5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T020854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDgnRjV9%2BuufwLkR7ACNS6AiQm9SI7BjcNmNhLOrnTdwIgXeM0qQVZCZ%2BO7Xoqyu%2B4vPVPBF5KhY3lIa64xw89rKwq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDN0WwiR7vOcM9ripxyrcAzjC57wWBLuodjwtVK4%2FLZaiJN9xghhi%2F7TXtaWicpoiYnMtV1QT3EUYqxWQVjIODi7diOVb2ZG57KHNv3Tl6TfZzsMs37hrnJ18BCo%2Bz%2BnUMIQClKMThS2bqjABVsmDbMcyzsD4Bcto9OtbayYJczbjHVi5sTqGHcXZq%2BCbIYlTLrVAQN7sDNkWb8b6RCA%2Bz9cYyoA7DuoklwL9Eh7gHW7wrrYZwKkAO%2FAfsrJH7B%2FhuyWrksTSagBcusmZUIAApvLQSlkR8D%2BkPgYDSSm9FziXOLyaOQic%2BwxvoNy8JYOIZ08bdUpIuvtaXT3H2gjJf%2BR7PYKTF7icSi7cvTfsef3Qa76lCusqlb8Bo%2BeeSQ4GNX5VLPHWpscZN5YOFljyzJPZBm1Cd9UcDsTUfkJCBcOrqsrvrDLGd%2Bp3fZCVHU1rg7IgCI89Un1YOxvQKUEdTcPVvn9rn7RPyuNCfxk32VZCVKFfxMZLWFhZh%2BGyLFM38wAPoo1QRPbbK83XLKbWBv1Fv%2FG234Gh90jnurgu%2Ffra6WRsiMqItLXYqr%2BrmXLXzF6zi4z4XTotT2LS3U3uWKBzmQ3A7N8PMco25mfm1ZAGYyceS2KT1RcgG7GISWyAVvNTV5Q5DsZLHlLJMMOour0GOqUBWVgROvBAL5mxoQU8g7BhJpa1wwRjLXiEJEedGqu6EuOhBLZKuCDZYV3NMeZOxuWeJBSXkFHJlcCYtd%2BMo%2FJuiMRSf2E1xpQ%2F6OmvefiFazHGilcl8i992m20%2FOEoMQvRvU%2BnwKfmKqUmUVrxEKisuVkZAA%2Fr3C6mOmiHnmKZQojJ%2FLYe3bnk03qUx1WihS5TyTbDE7ndp4PUkPJsvCAZdXvYaGVw&X-Amz-Signature=dde14c9be5192a368f1a6864368e38e96e24850a30acfb15a6ae2694e229c6e5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDSEQRK5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T020854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDgnRjV9%2BuufwLkR7ACNS6AiQm9SI7BjcNmNhLOrnTdwIgXeM0qQVZCZ%2BO7Xoqyu%2B4vPVPBF5KhY3lIa64xw89rKwq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDN0WwiR7vOcM9ripxyrcAzjC57wWBLuodjwtVK4%2FLZaiJN9xghhi%2F7TXtaWicpoiYnMtV1QT3EUYqxWQVjIODi7diOVb2ZG57KHNv3Tl6TfZzsMs37hrnJ18BCo%2Bz%2BnUMIQClKMThS2bqjABVsmDbMcyzsD4Bcto9OtbayYJczbjHVi5sTqGHcXZq%2BCbIYlTLrVAQN7sDNkWb8b6RCA%2Bz9cYyoA7DuoklwL9Eh7gHW7wrrYZwKkAO%2FAfsrJH7B%2FhuyWrksTSagBcusmZUIAApvLQSlkR8D%2BkPgYDSSm9FziXOLyaOQic%2BwxvoNy8JYOIZ08bdUpIuvtaXT3H2gjJf%2BR7PYKTF7icSi7cvTfsef3Qa76lCusqlb8Bo%2BeeSQ4GNX5VLPHWpscZN5YOFljyzJPZBm1Cd9UcDsTUfkJCBcOrqsrvrDLGd%2Bp3fZCVHU1rg7IgCI89Un1YOxvQKUEdTcPVvn9rn7RPyuNCfxk32VZCVKFfxMZLWFhZh%2BGyLFM38wAPoo1QRPbbK83XLKbWBv1Fv%2FG234Gh90jnurgu%2Ffra6WRsiMqItLXYqr%2BrmXLXzF6zi4z4XTotT2LS3U3uWKBzmQ3A7N8PMco25mfm1ZAGYyceS2KT1RcgG7GISWyAVvNTV5Q5DsZLHlLJMMOour0GOqUBWVgROvBAL5mxoQU8g7BhJpa1wwRjLXiEJEedGqu6EuOhBLZKuCDZYV3NMeZOxuWeJBSXkFHJlcCYtd%2BMo%2FJuiMRSf2E1xpQ%2F6OmvefiFazHGilcl8i992m20%2FOEoMQvRvU%2BnwKfmKqUmUVrxEKisuVkZAA%2Fr3C6mOmiHnmKZQojJ%2FLYe3bnk03qUx1WihS5TyTbDE7ndp4PUkPJsvCAZdXvYaGVw&X-Amz-Signature=3c5003ae85fb4fe26fa1d2d9b02d86c4cb6d8f700ce7ae7fc2b4764c2c5a9087&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDSEQRK5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T020854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDgnRjV9%2BuufwLkR7ACNS6AiQm9SI7BjcNmNhLOrnTdwIgXeM0qQVZCZ%2BO7Xoqyu%2B4vPVPBF5KhY3lIa64xw89rKwq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDN0WwiR7vOcM9ripxyrcAzjC57wWBLuodjwtVK4%2FLZaiJN9xghhi%2F7TXtaWicpoiYnMtV1QT3EUYqxWQVjIODi7diOVb2ZG57KHNv3Tl6TfZzsMs37hrnJ18BCo%2Bz%2BnUMIQClKMThS2bqjABVsmDbMcyzsD4Bcto9OtbayYJczbjHVi5sTqGHcXZq%2BCbIYlTLrVAQN7sDNkWb8b6RCA%2Bz9cYyoA7DuoklwL9Eh7gHW7wrrYZwKkAO%2FAfsrJH7B%2FhuyWrksTSagBcusmZUIAApvLQSlkR8D%2BkPgYDSSm9FziXOLyaOQic%2BwxvoNy8JYOIZ08bdUpIuvtaXT3H2gjJf%2BR7PYKTF7icSi7cvTfsef3Qa76lCusqlb8Bo%2BeeSQ4GNX5VLPHWpscZN5YOFljyzJPZBm1Cd9UcDsTUfkJCBcOrqsrvrDLGd%2Bp3fZCVHU1rg7IgCI89Un1YOxvQKUEdTcPVvn9rn7RPyuNCfxk32VZCVKFfxMZLWFhZh%2BGyLFM38wAPoo1QRPbbK83XLKbWBv1Fv%2FG234Gh90jnurgu%2Ffra6WRsiMqItLXYqr%2BrmXLXzF6zi4z4XTotT2LS3U3uWKBzmQ3A7N8PMco25mfm1ZAGYyceS2KT1RcgG7GISWyAVvNTV5Q5DsZLHlLJMMOour0GOqUBWVgROvBAL5mxoQU8g7BhJpa1wwRjLXiEJEedGqu6EuOhBLZKuCDZYV3NMeZOxuWeJBSXkFHJlcCYtd%2BMo%2FJuiMRSf2E1xpQ%2F6OmvefiFazHGilcl8i992m20%2FOEoMQvRvU%2BnwKfmKqUmUVrxEKisuVkZAA%2Fr3C6mOmiHnmKZQojJ%2FLYe3bnk03qUx1WihS5TyTbDE7ndp4PUkPJsvCAZdXvYaGVw&X-Amz-Signature=0712993168bee3cdfa087a59e2a8363352ceced1fdb7cd6229316cf655efa8c1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDSEQRK5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T020854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDgnRjV9%2BuufwLkR7ACNS6AiQm9SI7BjcNmNhLOrnTdwIgXeM0qQVZCZ%2BO7Xoqyu%2B4vPVPBF5KhY3lIa64xw89rKwq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDN0WwiR7vOcM9ripxyrcAzjC57wWBLuodjwtVK4%2FLZaiJN9xghhi%2F7TXtaWicpoiYnMtV1QT3EUYqxWQVjIODi7diOVb2ZG57KHNv3Tl6TfZzsMs37hrnJ18BCo%2Bz%2BnUMIQClKMThS2bqjABVsmDbMcyzsD4Bcto9OtbayYJczbjHVi5sTqGHcXZq%2BCbIYlTLrVAQN7sDNkWb8b6RCA%2Bz9cYyoA7DuoklwL9Eh7gHW7wrrYZwKkAO%2FAfsrJH7B%2FhuyWrksTSagBcusmZUIAApvLQSlkR8D%2BkPgYDSSm9FziXOLyaOQic%2BwxvoNy8JYOIZ08bdUpIuvtaXT3H2gjJf%2BR7PYKTF7icSi7cvTfsef3Qa76lCusqlb8Bo%2BeeSQ4GNX5VLPHWpscZN5YOFljyzJPZBm1Cd9UcDsTUfkJCBcOrqsrvrDLGd%2Bp3fZCVHU1rg7IgCI89Un1YOxvQKUEdTcPVvn9rn7RPyuNCfxk32VZCVKFfxMZLWFhZh%2BGyLFM38wAPoo1QRPbbK83XLKbWBv1Fv%2FG234Gh90jnurgu%2Ffra6WRsiMqItLXYqr%2BrmXLXzF6zi4z4XTotT2LS3U3uWKBzmQ3A7N8PMco25mfm1ZAGYyceS2KT1RcgG7GISWyAVvNTV5Q5DsZLHlLJMMOour0GOqUBWVgROvBAL5mxoQU8g7BhJpa1wwRjLXiEJEedGqu6EuOhBLZKuCDZYV3NMeZOxuWeJBSXkFHJlcCYtd%2BMo%2FJuiMRSf2E1xpQ%2F6OmvefiFazHGilcl8i992m20%2FOEoMQvRvU%2BnwKfmKqUmUVrxEKisuVkZAA%2Fr3C6mOmiHnmKZQojJ%2FLYe3bnk03qUx1WihS5TyTbDE7ndp4PUkPJsvCAZdXvYaGVw&X-Amz-Signature=19a0e4ea707a4b1027d66584a3fa4a2bc7e92af965a6f03cb3496b23534c9675&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
