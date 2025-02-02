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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFBVHPUW%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHR41Zih8ftnjBZFkQnjkSnYLxY2pzCsTIVEsWeg3NgAiEA5IMOKSZjnMWjo%2B3GSTHxNle9b%2FkuUfLeXnvAim0kKmkqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLG80ByA6nBKu4GR3yrcA2jtuZesdbYUtYV5c24Rqdp5QO2QCjnMtUXybf32NwScGHuC79beXB22hTLzfLilpVGvjDw8mfLRe%2BsALqpuLC%2FDYz6vnrg47uV82mZau6v0oEOE1D34LPFNpMInxSlA2VoCZ5hhGYBR6zf4fjizS0D%2B1ULje2IwRKz6%2Bt1E4URJvpw%2B%2Fz98Tp79ac5RuUb9rNal3D%2B47SkgH8g0Q3B59DcksgekPzwxE%2BzldikU6h0WA6s55BwDSx69ccTV9a8e99ZhH5pyG1Dx%2FawwUJQzRknKcde2Hcpt9ZeDqoY%2FAhxEy32MN8gZaMa6vz7FvsXeDGb8TeQgPe7CE%2BalTUD3snhUGzvKXI%2BenTw6FGSAJ%2FnEzicSBPZ1RSFIxECT59HfQHO2ldRSp61jfYxHyLyV9m17fwZxpezLtGS1oeYLUkrVUY6mLsKntm5hMg6zdKV6LW3VIiiVG%2FjGozRFgpE8sxOful7sXs5nFoWlg4RuIYz9hqgkU0iptT9bSObO90fSWOq%2FSIMjil4R1IRK4UpmhEYGgMhNgXMtaofnTgCTJiUvTuE49sQfAhUW3Jr18dWSia%2BrA91sCHxsfjs2ppY7VKKB5fJW9sJL8mKWJ92eywiQjy30pz%2BPj1Iaon5rMI6g%2B7wGOqUBxOTDOAl2oEGiaJEuXrmugybIj4HvHfTaCrjmjaxowFZPiF9jyE4SstKPqswhaNQDHh%2FjmcwRvdKZddF8Ge1%2FoBv%2BuwL4L4%2B9Q67e4mc6nKemz9xYsm61uTTt24YTyY%2FeT8viRCbby%2FfeA85LWOmmfc7Vlc6V1QZOm0ffCXBhI0qKSUD%2BADsDfEhrxerJY5ea0aXKxupBseZZxD4iXNV%2BrXrtveT4&X-Amz-Signature=3e038e8cda8ebb294e1b23ae7140f047a481088fc1c5ef93e4aac19ad262e661&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFBVHPUW%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHR41Zih8ftnjBZFkQnjkSnYLxY2pzCsTIVEsWeg3NgAiEA5IMOKSZjnMWjo%2B3GSTHxNle9b%2FkuUfLeXnvAim0kKmkqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLG80ByA6nBKu4GR3yrcA2jtuZesdbYUtYV5c24Rqdp5QO2QCjnMtUXybf32NwScGHuC79beXB22hTLzfLilpVGvjDw8mfLRe%2BsALqpuLC%2FDYz6vnrg47uV82mZau6v0oEOE1D34LPFNpMInxSlA2VoCZ5hhGYBR6zf4fjizS0D%2B1ULje2IwRKz6%2Bt1E4URJvpw%2B%2Fz98Tp79ac5RuUb9rNal3D%2B47SkgH8g0Q3B59DcksgekPzwxE%2BzldikU6h0WA6s55BwDSx69ccTV9a8e99ZhH5pyG1Dx%2FawwUJQzRknKcde2Hcpt9ZeDqoY%2FAhxEy32MN8gZaMa6vz7FvsXeDGb8TeQgPe7CE%2BalTUD3snhUGzvKXI%2BenTw6FGSAJ%2FnEzicSBPZ1RSFIxECT59HfQHO2ldRSp61jfYxHyLyV9m17fwZxpezLtGS1oeYLUkrVUY6mLsKntm5hMg6zdKV6LW3VIiiVG%2FjGozRFgpE8sxOful7sXs5nFoWlg4RuIYz9hqgkU0iptT9bSObO90fSWOq%2FSIMjil4R1IRK4UpmhEYGgMhNgXMtaofnTgCTJiUvTuE49sQfAhUW3Jr18dWSia%2BrA91sCHxsfjs2ppY7VKKB5fJW9sJL8mKWJ92eywiQjy30pz%2BPj1Iaon5rMI6g%2B7wGOqUBxOTDOAl2oEGiaJEuXrmugybIj4HvHfTaCrjmjaxowFZPiF9jyE4SstKPqswhaNQDHh%2FjmcwRvdKZddF8Ge1%2FoBv%2BuwL4L4%2B9Q67e4mc6nKemz9xYsm61uTTt24YTyY%2FeT8viRCbby%2FfeA85LWOmmfc7Vlc6V1QZOm0ffCXBhI0qKSUD%2BADsDfEhrxerJY5ea0aXKxupBseZZxD4iXNV%2BrXrtveT4&X-Amz-Signature=c1746921ac53cd3c551241e48f097ddf18f0f6536f99bcad73a962ef1d3355c7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFBVHPUW%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHR41Zih8ftnjBZFkQnjkSnYLxY2pzCsTIVEsWeg3NgAiEA5IMOKSZjnMWjo%2B3GSTHxNle9b%2FkuUfLeXnvAim0kKmkqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLG80ByA6nBKu4GR3yrcA2jtuZesdbYUtYV5c24Rqdp5QO2QCjnMtUXybf32NwScGHuC79beXB22hTLzfLilpVGvjDw8mfLRe%2BsALqpuLC%2FDYz6vnrg47uV82mZau6v0oEOE1D34LPFNpMInxSlA2VoCZ5hhGYBR6zf4fjizS0D%2B1ULje2IwRKz6%2Bt1E4URJvpw%2B%2Fz98Tp79ac5RuUb9rNal3D%2B47SkgH8g0Q3B59DcksgekPzwxE%2BzldikU6h0WA6s55BwDSx69ccTV9a8e99ZhH5pyG1Dx%2FawwUJQzRknKcde2Hcpt9ZeDqoY%2FAhxEy32MN8gZaMa6vz7FvsXeDGb8TeQgPe7CE%2BalTUD3snhUGzvKXI%2BenTw6FGSAJ%2FnEzicSBPZ1RSFIxECT59HfQHO2ldRSp61jfYxHyLyV9m17fwZxpezLtGS1oeYLUkrVUY6mLsKntm5hMg6zdKV6LW3VIiiVG%2FjGozRFgpE8sxOful7sXs5nFoWlg4RuIYz9hqgkU0iptT9bSObO90fSWOq%2FSIMjil4R1IRK4UpmhEYGgMhNgXMtaofnTgCTJiUvTuE49sQfAhUW3Jr18dWSia%2BrA91sCHxsfjs2ppY7VKKB5fJW9sJL8mKWJ92eywiQjy30pz%2BPj1Iaon5rMI6g%2B7wGOqUBxOTDOAl2oEGiaJEuXrmugybIj4HvHfTaCrjmjaxowFZPiF9jyE4SstKPqswhaNQDHh%2FjmcwRvdKZddF8Ge1%2FoBv%2BuwL4L4%2B9Q67e4mc6nKemz9xYsm61uTTt24YTyY%2FeT8viRCbby%2FfeA85LWOmmfc7Vlc6V1QZOm0ffCXBhI0qKSUD%2BADsDfEhrxerJY5ea0aXKxupBseZZxD4iXNV%2BrXrtveT4&X-Amz-Signature=fde2c6ddec807db3b1dd473d273407058c948e87213f211e25b6b74fed258916&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFBVHPUW%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHR41Zih8ftnjBZFkQnjkSnYLxY2pzCsTIVEsWeg3NgAiEA5IMOKSZjnMWjo%2B3GSTHxNle9b%2FkuUfLeXnvAim0kKmkqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLG80ByA6nBKu4GR3yrcA2jtuZesdbYUtYV5c24Rqdp5QO2QCjnMtUXybf32NwScGHuC79beXB22hTLzfLilpVGvjDw8mfLRe%2BsALqpuLC%2FDYz6vnrg47uV82mZau6v0oEOE1D34LPFNpMInxSlA2VoCZ5hhGYBR6zf4fjizS0D%2B1ULje2IwRKz6%2Bt1E4URJvpw%2B%2Fz98Tp79ac5RuUb9rNal3D%2B47SkgH8g0Q3B59DcksgekPzwxE%2BzldikU6h0WA6s55BwDSx69ccTV9a8e99ZhH5pyG1Dx%2FawwUJQzRknKcde2Hcpt9ZeDqoY%2FAhxEy32MN8gZaMa6vz7FvsXeDGb8TeQgPe7CE%2BalTUD3snhUGzvKXI%2BenTw6FGSAJ%2FnEzicSBPZ1RSFIxECT59HfQHO2ldRSp61jfYxHyLyV9m17fwZxpezLtGS1oeYLUkrVUY6mLsKntm5hMg6zdKV6LW3VIiiVG%2FjGozRFgpE8sxOful7sXs5nFoWlg4RuIYz9hqgkU0iptT9bSObO90fSWOq%2FSIMjil4R1IRK4UpmhEYGgMhNgXMtaofnTgCTJiUvTuE49sQfAhUW3Jr18dWSia%2BrA91sCHxsfjs2ppY7VKKB5fJW9sJL8mKWJ92eywiQjy30pz%2BPj1Iaon5rMI6g%2B7wGOqUBxOTDOAl2oEGiaJEuXrmugybIj4HvHfTaCrjmjaxowFZPiF9jyE4SstKPqswhaNQDHh%2FjmcwRvdKZddF8Ge1%2FoBv%2BuwL4L4%2B9Q67e4mc6nKemz9xYsm61uTTt24YTyY%2FeT8viRCbby%2FfeA85LWOmmfc7Vlc6V1QZOm0ffCXBhI0qKSUD%2BADsDfEhrxerJY5ea0aXKxupBseZZxD4iXNV%2BrXrtveT4&X-Amz-Signature=8d0f31ea87642e09493c15eeeeda25ccca022fc34a5e4b22927c497accb03af9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFBVHPUW%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHR41Zih8ftnjBZFkQnjkSnYLxY2pzCsTIVEsWeg3NgAiEA5IMOKSZjnMWjo%2B3GSTHxNle9b%2FkuUfLeXnvAim0kKmkqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLG80ByA6nBKu4GR3yrcA2jtuZesdbYUtYV5c24Rqdp5QO2QCjnMtUXybf32NwScGHuC79beXB22hTLzfLilpVGvjDw8mfLRe%2BsALqpuLC%2FDYz6vnrg47uV82mZau6v0oEOE1D34LPFNpMInxSlA2VoCZ5hhGYBR6zf4fjizS0D%2B1ULje2IwRKz6%2Bt1E4URJvpw%2B%2Fz98Tp79ac5RuUb9rNal3D%2B47SkgH8g0Q3B59DcksgekPzwxE%2BzldikU6h0WA6s55BwDSx69ccTV9a8e99ZhH5pyG1Dx%2FawwUJQzRknKcde2Hcpt9ZeDqoY%2FAhxEy32MN8gZaMa6vz7FvsXeDGb8TeQgPe7CE%2BalTUD3snhUGzvKXI%2BenTw6FGSAJ%2FnEzicSBPZ1RSFIxECT59HfQHO2ldRSp61jfYxHyLyV9m17fwZxpezLtGS1oeYLUkrVUY6mLsKntm5hMg6zdKV6LW3VIiiVG%2FjGozRFgpE8sxOful7sXs5nFoWlg4RuIYz9hqgkU0iptT9bSObO90fSWOq%2FSIMjil4R1IRK4UpmhEYGgMhNgXMtaofnTgCTJiUvTuE49sQfAhUW3Jr18dWSia%2BrA91sCHxsfjs2ppY7VKKB5fJW9sJL8mKWJ92eywiQjy30pz%2BPj1Iaon5rMI6g%2B7wGOqUBxOTDOAl2oEGiaJEuXrmugybIj4HvHfTaCrjmjaxowFZPiF9jyE4SstKPqswhaNQDHh%2FjmcwRvdKZddF8Ge1%2FoBv%2BuwL4L4%2B9Q67e4mc6nKemz9xYsm61uTTt24YTyY%2FeT8viRCbby%2FfeA85LWOmmfc7Vlc6V1QZOm0ffCXBhI0qKSUD%2BADsDfEhrxerJY5ea0aXKxupBseZZxD4iXNV%2BrXrtveT4&X-Amz-Signature=dd6a89ebdb50ac1d1ab38ab7c80059b13ec02dd33a84b5be403fce6562957206&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
