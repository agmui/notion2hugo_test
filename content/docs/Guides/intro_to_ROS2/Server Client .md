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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ3IJSO5%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIETmHpDrMJISFtJ%2FRdJMgMR8DHehfhUG698%2BTg6TPTbKAiEAjhvODCl6mm1PbuytvpDUDrvrH8mv3YcmTHjaDyApINIqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6httbMfGXIPOH2PircAw6cA8SyxIbLnN%2F14pgJNdpva7VfnzZwSusbyQFVg9qU8M1oB%2FvKaS8FOjQByDIVxIp3prLEVtlgkpzcOykDTk446VHIFXy9RzKLFvXEolg0Hwe8Ckz5jAh32vaOvzzNeB5M8eQwidsBlaCvUQ6u5tvIlEwUVaJzJP8caglJXWY0A7BX6Wg%2B3rYU9Gam5SQgcJgV27BW29VDq%2F3FoxOu5aWWODZbbwDCftAeBuB4ek22qFXN23qazotXWLyxlaMZLtWKvqh2MJQaBgbvl7d5cUwn3tr8uqzqNvXydI3Q5gql5ErQudUBv2bqt9wnv9ex9%2Bd8qKq2htx2LKybOQpqsnswkNvopKVGmHnHkpbj0R9ikWwhvGWNMKoKcj9N%2FHgNs83KsAjHjgguGZm6rebs%2F920F0%2FqPwNjn05JQR2X6tQL9e9bsl79gwjeCq3ZIayWl0Dslvc80tIzgIESwa%2FYwz8pt17udZoGUejPobm2JttmcIHWvFkAO1kfvfWVEgyZuCX8180AmuE4cWQNI07zmIM8znw6OyUaRVE0hz1XWsNzXK%2BP2cCnjhX8YDbTNeARa7f64c1KAjK2GNbaHYyXEyg8HA70JOCtna5%2FJU6uzij8Izgo397yo8xxIep%2FMJWw8L8GOqUBYdxMfWGoT4W0lijIpuG3z%2BmjaSeADyuwoxHjTg90FXdNbZLKA9DyKTD1agmBE6zfnKB%2Bv0J2LzFUYTa8OA2%2BLZqYC7fiDUL7DZwNugnZJCKjiIcMdTHo647OiGE5axmfBnOT1C%2BEc5zV1AYfm4n31lzU3I4DdRt68JRantu7BoOcmylP3Wlk%2BtZEEvfhGYsYRqiMmN2l%2FecgaUFSuEpZhRhDHhId&X-Amz-Signature=192428e9aeb500a35a2667c1d785d4b984193dd1211b224ea8c74d28aec2df14&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ3IJSO5%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIETmHpDrMJISFtJ%2FRdJMgMR8DHehfhUG698%2BTg6TPTbKAiEAjhvODCl6mm1PbuytvpDUDrvrH8mv3YcmTHjaDyApINIqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6httbMfGXIPOH2PircAw6cA8SyxIbLnN%2F14pgJNdpva7VfnzZwSusbyQFVg9qU8M1oB%2FvKaS8FOjQByDIVxIp3prLEVtlgkpzcOykDTk446VHIFXy9RzKLFvXEolg0Hwe8Ckz5jAh32vaOvzzNeB5M8eQwidsBlaCvUQ6u5tvIlEwUVaJzJP8caglJXWY0A7BX6Wg%2B3rYU9Gam5SQgcJgV27BW29VDq%2F3FoxOu5aWWODZbbwDCftAeBuB4ek22qFXN23qazotXWLyxlaMZLtWKvqh2MJQaBgbvl7d5cUwn3tr8uqzqNvXydI3Q5gql5ErQudUBv2bqt9wnv9ex9%2Bd8qKq2htx2LKybOQpqsnswkNvopKVGmHnHkpbj0R9ikWwhvGWNMKoKcj9N%2FHgNs83KsAjHjgguGZm6rebs%2F920F0%2FqPwNjn05JQR2X6tQL9e9bsl79gwjeCq3ZIayWl0Dslvc80tIzgIESwa%2FYwz8pt17udZoGUejPobm2JttmcIHWvFkAO1kfvfWVEgyZuCX8180AmuE4cWQNI07zmIM8znw6OyUaRVE0hz1XWsNzXK%2BP2cCnjhX8YDbTNeARa7f64c1KAjK2GNbaHYyXEyg8HA70JOCtna5%2FJU6uzij8Izgo397yo8xxIep%2FMJWw8L8GOqUBYdxMfWGoT4W0lijIpuG3z%2BmjaSeADyuwoxHjTg90FXdNbZLKA9DyKTD1agmBE6zfnKB%2Bv0J2LzFUYTa8OA2%2BLZqYC7fiDUL7DZwNugnZJCKjiIcMdTHo647OiGE5axmfBnOT1C%2BEc5zV1AYfm4n31lzU3I4DdRt68JRantu7BoOcmylP3Wlk%2BtZEEvfhGYsYRqiMmN2l%2FecgaUFSuEpZhRhDHhId&X-Amz-Signature=2630bb2282cf1a759180dc7e93e2a2a2c4ccdc192210809535157b6a91190fd4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ3IJSO5%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIETmHpDrMJISFtJ%2FRdJMgMR8DHehfhUG698%2BTg6TPTbKAiEAjhvODCl6mm1PbuytvpDUDrvrH8mv3YcmTHjaDyApINIqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6httbMfGXIPOH2PircAw6cA8SyxIbLnN%2F14pgJNdpva7VfnzZwSusbyQFVg9qU8M1oB%2FvKaS8FOjQByDIVxIp3prLEVtlgkpzcOykDTk446VHIFXy9RzKLFvXEolg0Hwe8Ckz5jAh32vaOvzzNeB5M8eQwidsBlaCvUQ6u5tvIlEwUVaJzJP8caglJXWY0A7BX6Wg%2B3rYU9Gam5SQgcJgV27BW29VDq%2F3FoxOu5aWWODZbbwDCftAeBuB4ek22qFXN23qazotXWLyxlaMZLtWKvqh2MJQaBgbvl7d5cUwn3tr8uqzqNvXydI3Q5gql5ErQudUBv2bqt9wnv9ex9%2Bd8qKq2htx2LKybOQpqsnswkNvopKVGmHnHkpbj0R9ikWwhvGWNMKoKcj9N%2FHgNs83KsAjHjgguGZm6rebs%2F920F0%2FqPwNjn05JQR2X6tQL9e9bsl79gwjeCq3ZIayWl0Dslvc80tIzgIESwa%2FYwz8pt17udZoGUejPobm2JttmcIHWvFkAO1kfvfWVEgyZuCX8180AmuE4cWQNI07zmIM8znw6OyUaRVE0hz1XWsNzXK%2BP2cCnjhX8YDbTNeARa7f64c1KAjK2GNbaHYyXEyg8HA70JOCtna5%2FJU6uzij8Izgo397yo8xxIep%2FMJWw8L8GOqUBYdxMfWGoT4W0lijIpuG3z%2BmjaSeADyuwoxHjTg90FXdNbZLKA9DyKTD1agmBE6zfnKB%2Bv0J2LzFUYTa8OA2%2BLZqYC7fiDUL7DZwNugnZJCKjiIcMdTHo647OiGE5axmfBnOT1C%2BEc5zV1AYfm4n31lzU3I4DdRt68JRantu7BoOcmylP3Wlk%2BtZEEvfhGYsYRqiMmN2l%2FecgaUFSuEpZhRhDHhId&X-Amz-Signature=2146cef72ad95265794d0c6249a87be3c0687a50c234a21b5d27bbb54e3b02b5&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ3IJSO5%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIETmHpDrMJISFtJ%2FRdJMgMR8DHehfhUG698%2BTg6TPTbKAiEAjhvODCl6mm1PbuytvpDUDrvrH8mv3YcmTHjaDyApINIqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6httbMfGXIPOH2PircAw6cA8SyxIbLnN%2F14pgJNdpva7VfnzZwSusbyQFVg9qU8M1oB%2FvKaS8FOjQByDIVxIp3prLEVtlgkpzcOykDTk446VHIFXy9RzKLFvXEolg0Hwe8Ckz5jAh32vaOvzzNeB5M8eQwidsBlaCvUQ6u5tvIlEwUVaJzJP8caglJXWY0A7BX6Wg%2B3rYU9Gam5SQgcJgV27BW29VDq%2F3FoxOu5aWWODZbbwDCftAeBuB4ek22qFXN23qazotXWLyxlaMZLtWKvqh2MJQaBgbvl7d5cUwn3tr8uqzqNvXydI3Q5gql5ErQudUBv2bqt9wnv9ex9%2Bd8qKq2htx2LKybOQpqsnswkNvopKVGmHnHkpbj0R9ikWwhvGWNMKoKcj9N%2FHgNs83KsAjHjgguGZm6rebs%2F920F0%2FqPwNjn05JQR2X6tQL9e9bsl79gwjeCq3ZIayWl0Dslvc80tIzgIESwa%2FYwz8pt17udZoGUejPobm2JttmcIHWvFkAO1kfvfWVEgyZuCX8180AmuE4cWQNI07zmIM8znw6OyUaRVE0hz1XWsNzXK%2BP2cCnjhX8YDbTNeARa7f64c1KAjK2GNbaHYyXEyg8HA70JOCtna5%2FJU6uzij8Izgo397yo8xxIep%2FMJWw8L8GOqUBYdxMfWGoT4W0lijIpuG3z%2BmjaSeADyuwoxHjTg90FXdNbZLKA9DyKTD1agmBE6zfnKB%2Bv0J2LzFUYTa8OA2%2BLZqYC7fiDUL7DZwNugnZJCKjiIcMdTHo647OiGE5axmfBnOT1C%2BEc5zV1AYfm4n31lzU3I4DdRt68JRantu7BoOcmylP3Wlk%2BtZEEvfhGYsYRqiMmN2l%2FecgaUFSuEpZhRhDHhId&X-Amz-Signature=d26379011e7c79dcc9b5b4e556be49b846afdc82eb11375e4f07ff7cec218424&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ3IJSO5%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIETmHpDrMJISFtJ%2FRdJMgMR8DHehfhUG698%2BTg6TPTbKAiEAjhvODCl6mm1PbuytvpDUDrvrH8mv3YcmTHjaDyApINIqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6httbMfGXIPOH2PircAw6cA8SyxIbLnN%2F14pgJNdpva7VfnzZwSusbyQFVg9qU8M1oB%2FvKaS8FOjQByDIVxIp3prLEVtlgkpzcOykDTk446VHIFXy9RzKLFvXEolg0Hwe8Ckz5jAh32vaOvzzNeB5M8eQwidsBlaCvUQ6u5tvIlEwUVaJzJP8caglJXWY0A7BX6Wg%2B3rYU9Gam5SQgcJgV27BW29VDq%2F3FoxOu5aWWODZbbwDCftAeBuB4ek22qFXN23qazotXWLyxlaMZLtWKvqh2MJQaBgbvl7d5cUwn3tr8uqzqNvXydI3Q5gql5ErQudUBv2bqt9wnv9ex9%2Bd8qKq2htx2LKybOQpqsnswkNvopKVGmHnHkpbj0R9ikWwhvGWNMKoKcj9N%2FHgNs83KsAjHjgguGZm6rebs%2F920F0%2FqPwNjn05JQR2X6tQL9e9bsl79gwjeCq3ZIayWl0Dslvc80tIzgIESwa%2FYwz8pt17udZoGUejPobm2JttmcIHWvFkAO1kfvfWVEgyZuCX8180AmuE4cWQNI07zmIM8znw6OyUaRVE0hz1XWsNzXK%2BP2cCnjhX8YDbTNeARa7f64c1KAjK2GNbaHYyXEyg8HA70JOCtna5%2FJU6uzij8Izgo397yo8xxIep%2FMJWw8L8GOqUBYdxMfWGoT4W0lijIpuG3z%2BmjaSeADyuwoxHjTg90FXdNbZLKA9DyKTD1agmBE6zfnKB%2Bv0J2LzFUYTa8OA2%2BLZqYC7fiDUL7DZwNugnZJCKjiIcMdTHo647OiGE5axmfBnOT1C%2BEc5zV1AYfm4n31lzU3I4DdRt68JRantu7BoOcmylP3Wlk%2BtZEEvfhGYsYRqiMmN2l%2FecgaUFSuEpZhRhDHhId&X-Amz-Signature=43ea746039a7c5e997f03ee27590f39559b688e1ef2db616cc34b8453ff638d2&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
