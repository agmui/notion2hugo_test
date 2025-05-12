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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ4ISA57%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIA7oqlnRndNqMlBRj%2Bz%2F4Ak%2FOHy%2FmwBgDhJmDwLCpyd4AiEAzZiAdH36lEsOdUxdT59a%2FHRks8z0J%2FqD1EdNwbRXHWYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyAmYkNxzv%2BB5w40CrcA%2BDIeik0QtMREb6krjqcL13WYIFw86ZUXG%2B1Ej1E1f%2FPrl%2FEu1dXGJqbrUPeD%2FgZ0tmSoKIM1MEFJF56iFlWvwzjcggqHBFJqKD8CM8DiJDzEQ3MqhlHz5YZ93IxdeJIJ74z0eHor97F5A8OdbJa05g%2BnZskUbi9ocQMrF%2BWOnweToBqprrMTNv2Ky2kQ4t4DmiRoizvBGzWRM6BkpJzSOwKi8sewJqXuOjaohIuO3EfQyPMRG%2F87hYbduGgZT5eAZDe6pse2Lh%2FjdFCkTFrID%2BAYSxzkts3%2BKu35vkfn3u2TBhnDeA6NZSCLHo%2BUZKrAbJZQv5JyDVhIoGpNarv1m%2FolsRT%2FAHS6wkF5rZWH%2FMoJAQwK3hwU4q5WOBqQXl%2FyWHvLII3IKTa7ZwOeN8sunmrhpC6YBYR%2BNxdEI4l22qnO%2BLHTZf0IDWqXDIqW6rZMnqCM%2BcTgJ57oHtGHbsTjg0DoNREl%2BKb2Mw%2BvYacWwfzwRA1hriA2dzZgAWavscNNzlR%2BB8oSgSvNc3bJQX7p0jwRRQGy7pvs4QpnUNX80ds5IwwFZwNRO2oztUu%2Boglv%2BjefSZn2JelOi%2B3b8jT2YJc%2Ba%2FXa9yQ%2BK3OpYPyfVg1RDL99DC%2BE01DM5QaMLWFhsEGOqUBsuhFutY0tLcRZDXq5jRL6CMrmVsel0U4ucQYKQwN5wiP%2BxJ0yjCQIUDqMXozf5SK5B7s5fsANX0zoZNKVHAeSkbXu9UaGv6cK05VlyJ%2BV47vP3r8Pe0XRKTD7my6B96aOXxGUcsgLxwvaKGSfTSdCFdNgDhZhTBihrTt8g9tq6P1Ycwy5ieME2GkK01qHQoRAi7pmaPyyaoL40V3m8NA5%2BDefOXw&X-Amz-Signature=ec886eff70c8adbc38f8f9b56454bef1ecfe050e3544cabc07246906bcabdc4d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ4ISA57%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIA7oqlnRndNqMlBRj%2Bz%2F4Ak%2FOHy%2FmwBgDhJmDwLCpyd4AiEAzZiAdH36lEsOdUxdT59a%2FHRks8z0J%2FqD1EdNwbRXHWYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyAmYkNxzv%2BB5w40CrcA%2BDIeik0QtMREb6krjqcL13WYIFw86ZUXG%2B1Ej1E1f%2FPrl%2FEu1dXGJqbrUPeD%2FgZ0tmSoKIM1MEFJF56iFlWvwzjcggqHBFJqKD8CM8DiJDzEQ3MqhlHz5YZ93IxdeJIJ74z0eHor97F5A8OdbJa05g%2BnZskUbi9ocQMrF%2BWOnweToBqprrMTNv2Ky2kQ4t4DmiRoizvBGzWRM6BkpJzSOwKi8sewJqXuOjaohIuO3EfQyPMRG%2F87hYbduGgZT5eAZDe6pse2Lh%2FjdFCkTFrID%2BAYSxzkts3%2BKu35vkfn3u2TBhnDeA6NZSCLHo%2BUZKrAbJZQv5JyDVhIoGpNarv1m%2FolsRT%2FAHS6wkF5rZWH%2FMoJAQwK3hwU4q5WOBqQXl%2FyWHvLII3IKTa7ZwOeN8sunmrhpC6YBYR%2BNxdEI4l22qnO%2BLHTZf0IDWqXDIqW6rZMnqCM%2BcTgJ57oHtGHbsTjg0DoNREl%2BKb2Mw%2BvYacWwfzwRA1hriA2dzZgAWavscNNzlR%2BB8oSgSvNc3bJQX7p0jwRRQGy7pvs4QpnUNX80ds5IwwFZwNRO2oztUu%2Boglv%2BjefSZn2JelOi%2B3b8jT2YJc%2Ba%2FXa9yQ%2BK3OpYPyfVg1RDL99DC%2BE01DM5QaMLWFhsEGOqUBsuhFutY0tLcRZDXq5jRL6CMrmVsel0U4ucQYKQwN5wiP%2BxJ0yjCQIUDqMXozf5SK5B7s5fsANX0zoZNKVHAeSkbXu9UaGv6cK05VlyJ%2BV47vP3r8Pe0XRKTD7my6B96aOXxGUcsgLxwvaKGSfTSdCFdNgDhZhTBihrTt8g9tq6P1Ycwy5ieME2GkK01qHQoRAi7pmaPyyaoL40V3m8NA5%2BDefOXw&X-Amz-Signature=dea0a65ddf76d9f1cdac128ffa2f0f76d4ec06ca4b8c70ba1f1734b8513c514d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ4ISA57%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIA7oqlnRndNqMlBRj%2Bz%2F4Ak%2FOHy%2FmwBgDhJmDwLCpyd4AiEAzZiAdH36lEsOdUxdT59a%2FHRks8z0J%2FqD1EdNwbRXHWYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyAmYkNxzv%2BB5w40CrcA%2BDIeik0QtMREb6krjqcL13WYIFw86ZUXG%2B1Ej1E1f%2FPrl%2FEu1dXGJqbrUPeD%2FgZ0tmSoKIM1MEFJF56iFlWvwzjcggqHBFJqKD8CM8DiJDzEQ3MqhlHz5YZ93IxdeJIJ74z0eHor97F5A8OdbJa05g%2BnZskUbi9ocQMrF%2BWOnweToBqprrMTNv2Ky2kQ4t4DmiRoizvBGzWRM6BkpJzSOwKi8sewJqXuOjaohIuO3EfQyPMRG%2F87hYbduGgZT5eAZDe6pse2Lh%2FjdFCkTFrID%2BAYSxzkts3%2BKu35vkfn3u2TBhnDeA6NZSCLHo%2BUZKrAbJZQv5JyDVhIoGpNarv1m%2FolsRT%2FAHS6wkF5rZWH%2FMoJAQwK3hwU4q5WOBqQXl%2FyWHvLII3IKTa7ZwOeN8sunmrhpC6YBYR%2BNxdEI4l22qnO%2BLHTZf0IDWqXDIqW6rZMnqCM%2BcTgJ57oHtGHbsTjg0DoNREl%2BKb2Mw%2BvYacWwfzwRA1hriA2dzZgAWavscNNzlR%2BB8oSgSvNc3bJQX7p0jwRRQGy7pvs4QpnUNX80ds5IwwFZwNRO2oztUu%2Boglv%2BjefSZn2JelOi%2B3b8jT2YJc%2Ba%2FXa9yQ%2BK3OpYPyfVg1RDL99DC%2BE01DM5QaMLWFhsEGOqUBsuhFutY0tLcRZDXq5jRL6CMrmVsel0U4ucQYKQwN5wiP%2BxJ0yjCQIUDqMXozf5SK5B7s5fsANX0zoZNKVHAeSkbXu9UaGv6cK05VlyJ%2BV47vP3r8Pe0XRKTD7my6B96aOXxGUcsgLxwvaKGSfTSdCFdNgDhZhTBihrTt8g9tq6P1Ycwy5ieME2GkK01qHQoRAi7pmaPyyaoL40V3m8NA5%2BDefOXw&X-Amz-Signature=bde14dbabb7819ff30028d9f1063268abec79f275d88f4862f5c2d08b42cb1a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ4ISA57%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIA7oqlnRndNqMlBRj%2Bz%2F4Ak%2FOHy%2FmwBgDhJmDwLCpyd4AiEAzZiAdH36lEsOdUxdT59a%2FHRks8z0J%2FqD1EdNwbRXHWYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyAmYkNxzv%2BB5w40CrcA%2BDIeik0QtMREb6krjqcL13WYIFw86ZUXG%2B1Ej1E1f%2FPrl%2FEu1dXGJqbrUPeD%2FgZ0tmSoKIM1MEFJF56iFlWvwzjcggqHBFJqKD8CM8DiJDzEQ3MqhlHz5YZ93IxdeJIJ74z0eHor97F5A8OdbJa05g%2BnZskUbi9ocQMrF%2BWOnweToBqprrMTNv2Ky2kQ4t4DmiRoizvBGzWRM6BkpJzSOwKi8sewJqXuOjaohIuO3EfQyPMRG%2F87hYbduGgZT5eAZDe6pse2Lh%2FjdFCkTFrID%2BAYSxzkts3%2BKu35vkfn3u2TBhnDeA6NZSCLHo%2BUZKrAbJZQv5JyDVhIoGpNarv1m%2FolsRT%2FAHS6wkF5rZWH%2FMoJAQwK3hwU4q5WOBqQXl%2FyWHvLII3IKTa7ZwOeN8sunmrhpC6YBYR%2BNxdEI4l22qnO%2BLHTZf0IDWqXDIqW6rZMnqCM%2BcTgJ57oHtGHbsTjg0DoNREl%2BKb2Mw%2BvYacWwfzwRA1hriA2dzZgAWavscNNzlR%2BB8oSgSvNc3bJQX7p0jwRRQGy7pvs4QpnUNX80ds5IwwFZwNRO2oztUu%2Boglv%2BjefSZn2JelOi%2B3b8jT2YJc%2Ba%2FXa9yQ%2BK3OpYPyfVg1RDL99DC%2BE01DM5QaMLWFhsEGOqUBsuhFutY0tLcRZDXq5jRL6CMrmVsel0U4ucQYKQwN5wiP%2BxJ0yjCQIUDqMXozf5SK5B7s5fsANX0zoZNKVHAeSkbXu9UaGv6cK05VlyJ%2BV47vP3r8Pe0XRKTD7my6B96aOXxGUcsgLxwvaKGSfTSdCFdNgDhZhTBihrTt8g9tq6P1Ycwy5ieME2GkK01qHQoRAi7pmaPyyaoL40V3m8NA5%2BDefOXw&X-Amz-Signature=ba297ff59ee8cfdafa9cc93e4f5f7041d773cbb9e25d0987584799dca9310576&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ4ISA57%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIA7oqlnRndNqMlBRj%2Bz%2F4Ak%2FOHy%2FmwBgDhJmDwLCpyd4AiEAzZiAdH36lEsOdUxdT59a%2FHRks8z0J%2FqD1EdNwbRXHWYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyAmYkNxzv%2BB5w40CrcA%2BDIeik0QtMREb6krjqcL13WYIFw86ZUXG%2B1Ej1E1f%2FPrl%2FEu1dXGJqbrUPeD%2FgZ0tmSoKIM1MEFJF56iFlWvwzjcggqHBFJqKD8CM8DiJDzEQ3MqhlHz5YZ93IxdeJIJ74z0eHor97F5A8OdbJa05g%2BnZskUbi9ocQMrF%2BWOnweToBqprrMTNv2Ky2kQ4t4DmiRoizvBGzWRM6BkpJzSOwKi8sewJqXuOjaohIuO3EfQyPMRG%2F87hYbduGgZT5eAZDe6pse2Lh%2FjdFCkTFrID%2BAYSxzkts3%2BKu35vkfn3u2TBhnDeA6NZSCLHo%2BUZKrAbJZQv5JyDVhIoGpNarv1m%2FolsRT%2FAHS6wkF5rZWH%2FMoJAQwK3hwU4q5WOBqQXl%2FyWHvLII3IKTa7ZwOeN8sunmrhpC6YBYR%2BNxdEI4l22qnO%2BLHTZf0IDWqXDIqW6rZMnqCM%2BcTgJ57oHtGHbsTjg0DoNREl%2BKb2Mw%2BvYacWwfzwRA1hriA2dzZgAWavscNNzlR%2BB8oSgSvNc3bJQX7p0jwRRQGy7pvs4QpnUNX80ds5IwwFZwNRO2oztUu%2Boglv%2BjefSZn2JelOi%2B3b8jT2YJc%2Ba%2FXa9yQ%2BK3OpYPyfVg1RDL99DC%2BE01DM5QaMLWFhsEGOqUBsuhFutY0tLcRZDXq5jRL6CMrmVsel0U4ucQYKQwN5wiP%2BxJ0yjCQIUDqMXozf5SK5B7s5fsANX0zoZNKVHAeSkbXu9UaGv6cK05VlyJ%2BV47vP3r8Pe0XRKTD7my6B96aOXxGUcsgLxwvaKGSfTSdCFdNgDhZhTBihrTt8g9tq6P1Ycwy5ieME2GkK01qHQoRAi7pmaPyyaoL40V3m8NA5%2BDefOXw&X-Amz-Signature=cf15fb313d8ce87581447cb351a7131284e5527434807ac2fb00f75e13a17789&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
