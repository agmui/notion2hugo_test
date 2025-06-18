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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPQCZ7EC%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T132645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfWztzakQAVOLT9mTs8cY20gZlHvQZocys1AH1K5Tj2wIgKy4TDksG6warQWHquJ5yzDf867H4Z%2BsRlv9kuSn8hAUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvQjIdd8rpj3XMiFircAw22xd%2Bpe4Vau5UFQhtbYYeQQyu7plAFusswrAH7oNkPlMiR5cLYofT%2BtD6FwHB%2FxUjfuN7A%2FZmI4DqxPMQsoSaipv12oNEaAf2mwOcZtgyKMwxmSptDBAxY4tH3OrHPJZ4mjgK9F29nd7YSPFPm92yqALgbCtzDvlrsqS2v8CrJ46qIBKKMIeBQg4ry35IE76rfgdUQuX9%2Bh%2FXzvPHW2Ybvyi%2F9VyTk2VOZZygMR3nzHq8Jql6U0ZjwL96BmGLZR1BBoOEolUPI0anntEheRJc8Id%2BC0NGchGKaxJyJPcf6FRI9e5oeIdglpeyMmjMpPdLzDokN1DDQ8BL2vDyvvvg6sV5%2BJ3HXsneIuRhfbOdMGBB68uLFo4JxMbF19Wy24VPZYmCBhUNQG5vyB8PmhKgB2Ey9LAr8%2BU%2BVOnV0DlOBA%2B0wnn8UtI9Pk0vz%2BgahV%2FxA36N1UE0UoaDkumLS0rzgPO032J%2BjpEeGLaqTCfJGEmG%2B1DpsgXIN2xkCsXba3OMxmqHHYbE2Ss%2FKe%2B8Fg3YUINUr9IEVrtq%2FIQpkInKSLvdtbvBYCxVSGMg%2Fphkck2sSw01LQNUG4F0X3u%2B8%2Fnk4FGCMC%2F%2F1l%2BTvuMo5PKj2GimV97IHikKqNFBFMLHzysIGOqUBarOOHwOOitPGjb1kX3iCTy7td%2Bimw3F2SMcjKCxUdN%2BaPvuAZbGtMcUwrEXL6yW0jXRYpGojUqIi4tO1NNwiMsFsoRVr0v%2BE1onE67NYqqycKKQ6tSoEEscZmD%2F6bzNRogD61Qzf5iWFrfV3uhpxHLOYkAqtkbwBbsDPr7dsx%2FgLBVKJn3U34g6nxvy1eji0mwzr2tzPkNkZp8KWLjRgk2Hiw7yI&X-Amz-Signature=44003a4b773fced9b8cd7801598a284d87560ac36976334875c037a735af1005&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPQCZ7EC%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T132645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfWztzakQAVOLT9mTs8cY20gZlHvQZocys1AH1K5Tj2wIgKy4TDksG6warQWHquJ5yzDf867H4Z%2BsRlv9kuSn8hAUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvQjIdd8rpj3XMiFircAw22xd%2Bpe4Vau5UFQhtbYYeQQyu7plAFusswrAH7oNkPlMiR5cLYofT%2BtD6FwHB%2FxUjfuN7A%2FZmI4DqxPMQsoSaipv12oNEaAf2mwOcZtgyKMwxmSptDBAxY4tH3OrHPJZ4mjgK9F29nd7YSPFPm92yqALgbCtzDvlrsqS2v8CrJ46qIBKKMIeBQg4ry35IE76rfgdUQuX9%2Bh%2FXzvPHW2Ybvyi%2F9VyTk2VOZZygMR3nzHq8Jql6U0ZjwL96BmGLZR1BBoOEolUPI0anntEheRJc8Id%2BC0NGchGKaxJyJPcf6FRI9e5oeIdglpeyMmjMpPdLzDokN1DDQ8BL2vDyvvvg6sV5%2BJ3HXsneIuRhfbOdMGBB68uLFo4JxMbF19Wy24VPZYmCBhUNQG5vyB8PmhKgB2Ey9LAr8%2BU%2BVOnV0DlOBA%2B0wnn8UtI9Pk0vz%2BgahV%2FxA36N1UE0UoaDkumLS0rzgPO032J%2BjpEeGLaqTCfJGEmG%2B1DpsgXIN2xkCsXba3OMxmqHHYbE2Ss%2FKe%2B8Fg3YUINUr9IEVrtq%2FIQpkInKSLvdtbvBYCxVSGMg%2Fphkck2sSw01LQNUG4F0X3u%2B8%2Fnk4FGCMC%2F%2F1l%2BTvuMo5PKj2GimV97IHikKqNFBFMLHzysIGOqUBarOOHwOOitPGjb1kX3iCTy7td%2Bimw3F2SMcjKCxUdN%2BaPvuAZbGtMcUwrEXL6yW0jXRYpGojUqIi4tO1NNwiMsFsoRVr0v%2BE1onE67NYqqycKKQ6tSoEEscZmD%2F6bzNRogD61Qzf5iWFrfV3uhpxHLOYkAqtkbwBbsDPr7dsx%2FgLBVKJn3U34g6nxvy1eji0mwzr2tzPkNkZp8KWLjRgk2Hiw7yI&X-Amz-Signature=a472710df0afce081d84a014a3f837f90e9163299eb26e32120b8ff081aa6ab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPQCZ7EC%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T132645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfWztzakQAVOLT9mTs8cY20gZlHvQZocys1AH1K5Tj2wIgKy4TDksG6warQWHquJ5yzDf867H4Z%2BsRlv9kuSn8hAUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvQjIdd8rpj3XMiFircAw22xd%2Bpe4Vau5UFQhtbYYeQQyu7plAFusswrAH7oNkPlMiR5cLYofT%2BtD6FwHB%2FxUjfuN7A%2FZmI4DqxPMQsoSaipv12oNEaAf2mwOcZtgyKMwxmSptDBAxY4tH3OrHPJZ4mjgK9F29nd7YSPFPm92yqALgbCtzDvlrsqS2v8CrJ46qIBKKMIeBQg4ry35IE76rfgdUQuX9%2Bh%2FXzvPHW2Ybvyi%2F9VyTk2VOZZygMR3nzHq8Jql6U0ZjwL96BmGLZR1BBoOEolUPI0anntEheRJc8Id%2BC0NGchGKaxJyJPcf6FRI9e5oeIdglpeyMmjMpPdLzDokN1DDQ8BL2vDyvvvg6sV5%2BJ3HXsneIuRhfbOdMGBB68uLFo4JxMbF19Wy24VPZYmCBhUNQG5vyB8PmhKgB2Ey9LAr8%2BU%2BVOnV0DlOBA%2B0wnn8UtI9Pk0vz%2BgahV%2FxA36N1UE0UoaDkumLS0rzgPO032J%2BjpEeGLaqTCfJGEmG%2B1DpsgXIN2xkCsXba3OMxmqHHYbE2Ss%2FKe%2B8Fg3YUINUr9IEVrtq%2FIQpkInKSLvdtbvBYCxVSGMg%2Fphkck2sSw01LQNUG4F0X3u%2B8%2Fnk4FGCMC%2F%2F1l%2BTvuMo5PKj2GimV97IHikKqNFBFMLHzysIGOqUBarOOHwOOitPGjb1kX3iCTy7td%2Bimw3F2SMcjKCxUdN%2BaPvuAZbGtMcUwrEXL6yW0jXRYpGojUqIi4tO1NNwiMsFsoRVr0v%2BE1onE67NYqqycKKQ6tSoEEscZmD%2F6bzNRogD61Qzf5iWFrfV3uhpxHLOYkAqtkbwBbsDPr7dsx%2FgLBVKJn3U34g6nxvy1eji0mwzr2tzPkNkZp8KWLjRgk2Hiw7yI&X-Amz-Signature=7768cc16312eb0fe84fac72f8b934348afc6ef5418bc89dcb9d1ae518091bda3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPQCZ7EC%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T132645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfWztzakQAVOLT9mTs8cY20gZlHvQZocys1AH1K5Tj2wIgKy4TDksG6warQWHquJ5yzDf867H4Z%2BsRlv9kuSn8hAUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvQjIdd8rpj3XMiFircAw22xd%2Bpe4Vau5UFQhtbYYeQQyu7plAFusswrAH7oNkPlMiR5cLYofT%2BtD6FwHB%2FxUjfuN7A%2FZmI4DqxPMQsoSaipv12oNEaAf2mwOcZtgyKMwxmSptDBAxY4tH3OrHPJZ4mjgK9F29nd7YSPFPm92yqALgbCtzDvlrsqS2v8CrJ46qIBKKMIeBQg4ry35IE76rfgdUQuX9%2Bh%2FXzvPHW2Ybvyi%2F9VyTk2VOZZygMR3nzHq8Jql6U0ZjwL96BmGLZR1BBoOEolUPI0anntEheRJc8Id%2BC0NGchGKaxJyJPcf6FRI9e5oeIdglpeyMmjMpPdLzDokN1DDQ8BL2vDyvvvg6sV5%2BJ3HXsneIuRhfbOdMGBB68uLFo4JxMbF19Wy24VPZYmCBhUNQG5vyB8PmhKgB2Ey9LAr8%2BU%2BVOnV0DlOBA%2B0wnn8UtI9Pk0vz%2BgahV%2FxA36N1UE0UoaDkumLS0rzgPO032J%2BjpEeGLaqTCfJGEmG%2B1DpsgXIN2xkCsXba3OMxmqHHYbE2Ss%2FKe%2B8Fg3YUINUr9IEVrtq%2FIQpkInKSLvdtbvBYCxVSGMg%2Fphkck2sSw01LQNUG4F0X3u%2B8%2Fnk4FGCMC%2F%2F1l%2BTvuMo5PKj2GimV97IHikKqNFBFMLHzysIGOqUBarOOHwOOitPGjb1kX3iCTy7td%2Bimw3F2SMcjKCxUdN%2BaPvuAZbGtMcUwrEXL6yW0jXRYpGojUqIi4tO1NNwiMsFsoRVr0v%2BE1onE67NYqqycKKQ6tSoEEscZmD%2F6bzNRogD61Qzf5iWFrfV3uhpxHLOYkAqtkbwBbsDPr7dsx%2FgLBVKJn3U34g6nxvy1eji0mwzr2tzPkNkZp8KWLjRgk2Hiw7yI&X-Amz-Signature=da1aa0181087fb2975afd5160adf999c2ccaf25c66f20bff42e8c3e439e83ea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPQCZ7EC%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T132646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfWztzakQAVOLT9mTs8cY20gZlHvQZocys1AH1K5Tj2wIgKy4TDksG6warQWHquJ5yzDf867H4Z%2BsRlv9kuSn8hAUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvQjIdd8rpj3XMiFircAw22xd%2Bpe4Vau5UFQhtbYYeQQyu7plAFusswrAH7oNkPlMiR5cLYofT%2BtD6FwHB%2FxUjfuN7A%2FZmI4DqxPMQsoSaipv12oNEaAf2mwOcZtgyKMwxmSptDBAxY4tH3OrHPJZ4mjgK9F29nd7YSPFPm92yqALgbCtzDvlrsqS2v8CrJ46qIBKKMIeBQg4ry35IE76rfgdUQuX9%2Bh%2FXzvPHW2Ybvyi%2F9VyTk2VOZZygMR3nzHq8Jql6U0ZjwL96BmGLZR1BBoOEolUPI0anntEheRJc8Id%2BC0NGchGKaxJyJPcf6FRI9e5oeIdglpeyMmjMpPdLzDokN1DDQ8BL2vDyvvvg6sV5%2BJ3HXsneIuRhfbOdMGBB68uLFo4JxMbF19Wy24VPZYmCBhUNQG5vyB8PmhKgB2Ey9LAr8%2BU%2BVOnV0DlOBA%2B0wnn8UtI9Pk0vz%2BgahV%2FxA36N1UE0UoaDkumLS0rzgPO032J%2BjpEeGLaqTCfJGEmG%2B1DpsgXIN2xkCsXba3OMxmqHHYbE2Ss%2FKe%2B8Fg3YUINUr9IEVrtq%2FIQpkInKSLvdtbvBYCxVSGMg%2Fphkck2sSw01LQNUG4F0X3u%2B8%2Fnk4FGCMC%2F%2F1l%2BTvuMo5PKj2GimV97IHikKqNFBFMLHzysIGOqUBarOOHwOOitPGjb1kX3iCTy7td%2Bimw3F2SMcjKCxUdN%2BaPvuAZbGtMcUwrEXL6yW0jXRYpGojUqIi4tO1NNwiMsFsoRVr0v%2BE1onE67NYqqycKKQ6tSoEEscZmD%2F6bzNRogD61Qzf5iWFrfV3uhpxHLOYkAqtkbwBbsDPr7dsx%2FgLBVKJn3U34g6nxvy1eji0mwzr2tzPkNkZp8KWLjRgk2Hiw7yI&X-Amz-Signature=127db2c239813d348736e443b640fe80fa2a2a32ab85df0b2b84104b497e5770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
