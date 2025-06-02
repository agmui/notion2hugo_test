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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N5SU3WJ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCyAAonPTakqJrPTsBnWRMwOPLMH3y2bGtSYavXUiIFtAIgTVcAO699JYyNBaMx%2Bk6xOee91WD7uIskaXKp2tPj2b0qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4AsCayCkbDeVadUyrcA96yBgIMBQgpwBSt9N%2FsY8pOvm3%2B7f7bjQq7i4HMetFqRyu6MYTUGDDC9IA740hZFfs2EN8K%2FVFF5MQ66ypmW82QONchSojzlZd9Qq1dhkL1Sr65a2MsfOeVuKy2FCyEoNTPxKpfBNuYKYTktlSor6KXoC3TNwSFC32aBz5g6E%2FZbmTuP8myDL%2BYirPqMoPN3rdW6vnEB73vDKokTsHzVA22q6s5zXMbtrK94guNHwCKSa7GqQma4F3DMzChszzDM2tkSJORoyTBF%2Fyr57tsP0s6eApAAp2i1i5ZpdoErZWZOoWI1V%2FE%2BA6fxjiJjsHH0iAZ%2F1eHOwB7RGUYOX4IFLZUZLzYxTbaknVMfkHNNint1XmTwuuduf4gK0FQfAGPofpKpftxoR9inVve2O8bG4EjUyiEM6BpfN0Hxektrjs8fsc5fd3wAg781wlWA%2BBkrw7bI6oAaiNMaomuY%2BJQItG4MYqG3lD47cWpgUsgDRIEIO7yPRGXqOkvlFSXwWrfulm338yZYxFWDkC6bIpU7yLUf2c6GZu71iVCQFFpSe0wwF6cBFNRA6Zs7%2B1hcmF3d7H637sYUom4c6BBPuTuXugmjJrQdRvHob%2FYzfDhChdMXq8nq2hvLN114tYlMIbi98EGOqUBWraHO7hGPeIgvtWTHBcmc3MqpRTmzxwmFjaMFJtsFn4K6zKxQ3AnKOJCuG6dGYnSopDw3g3swLWAbnq7nsAveP5FACYBeBNZMp5pw04VfRGllQR3Hfv9Kb%2BcS8Nwix5kTnU%2BUJHqH8Faxp7fSjcCHQ0Si0VizF6pNv%2FVvhsjvzv8i0P0ulvKdbfWid0ZesC5LM%2FLS53w4DGqdk3ySmAjU1KWcoLr&X-Amz-Signature=abb7dc65c373d4c0e54e8756a93bdc048ba1386c458279d824868711077e9f24&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N5SU3WJ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCyAAonPTakqJrPTsBnWRMwOPLMH3y2bGtSYavXUiIFtAIgTVcAO699JYyNBaMx%2Bk6xOee91WD7uIskaXKp2tPj2b0qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4AsCayCkbDeVadUyrcA96yBgIMBQgpwBSt9N%2FsY8pOvm3%2B7f7bjQq7i4HMetFqRyu6MYTUGDDC9IA740hZFfs2EN8K%2FVFF5MQ66ypmW82QONchSojzlZd9Qq1dhkL1Sr65a2MsfOeVuKy2FCyEoNTPxKpfBNuYKYTktlSor6KXoC3TNwSFC32aBz5g6E%2FZbmTuP8myDL%2BYirPqMoPN3rdW6vnEB73vDKokTsHzVA22q6s5zXMbtrK94guNHwCKSa7GqQma4F3DMzChszzDM2tkSJORoyTBF%2Fyr57tsP0s6eApAAp2i1i5ZpdoErZWZOoWI1V%2FE%2BA6fxjiJjsHH0iAZ%2F1eHOwB7RGUYOX4IFLZUZLzYxTbaknVMfkHNNint1XmTwuuduf4gK0FQfAGPofpKpftxoR9inVve2O8bG4EjUyiEM6BpfN0Hxektrjs8fsc5fd3wAg781wlWA%2BBkrw7bI6oAaiNMaomuY%2BJQItG4MYqG3lD47cWpgUsgDRIEIO7yPRGXqOkvlFSXwWrfulm338yZYxFWDkC6bIpU7yLUf2c6GZu71iVCQFFpSe0wwF6cBFNRA6Zs7%2B1hcmF3d7H637sYUom4c6BBPuTuXugmjJrQdRvHob%2FYzfDhChdMXq8nq2hvLN114tYlMIbi98EGOqUBWraHO7hGPeIgvtWTHBcmc3MqpRTmzxwmFjaMFJtsFn4K6zKxQ3AnKOJCuG6dGYnSopDw3g3swLWAbnq7nsAveP5FACYBeBNZMp5pw04VfRGllQR3Hfv9Kb%2BcS8Nwix5kTnU%2BUJHqH8Faxp7fSjcCHQ0Si0VizF6pNv%2FVvhsjvzv8i0P0ulvKdbfWid0ZesC5LM%2FLS53w4DGqdk3ySmAjU1KWcoLr&X-Amz-Signature=facf338cbf40c8af7815f1b6eee52cd9cc53e973984b5f1168732db5c68ba453&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N5SU3WJ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCyAAonPTakqJrPTsBnWRMwOPLMH3y2bGtSYavXUiIFtAIgTVcAO699JYyNBaMx%2Bk6xOee91WD7uIskaXKp2tPj2b0qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4AsCayCkbDeVadUyrcA96yBgIMBQgpwBSt9N%2FsY8pOvm3%2B7f7bjQq7i4HMetFqRyu6MYTUGDDC9IA740hZFfs2EN8K%2FVFF5MQ66ypmW82QONchSojzlZd9Qq1dhkL1Sr65a2MsfOeVuKy2FCyEoNTPxKpfBNuYKYTktlSor6KXoC3TNwSFC32aBz5g6E%2FZbmTuP8myDL%2BYirPqMoPN3rdW6vnEB73vDKokTsHzVA22q6s5zXMbtrK94guNHwCKSa7GqQma4F3DMzChszzDM2tkSJORoyTBF%2Fyr57tsP0s6eApAAp2i1i5ZpdoErZWZOoWI1V%2FE%2BA6fxjiJjsHH0iAZ%2F1eHOwB7RGUYOX4IFLZUZLzYxTbaknVMfkHNNint1XmTwuuduf4gK0FQfAGPofpKpftxoR9inVve2O8bG4EjUyiEM6BpfN0Hxektrjs8fsc5fd3wAg781wlWA%2BBkrw7bI6oAaiNMaomuY%2BJQItG4MYqG3lD47cWpgUsgDRIEIO7yPRGXqOkvlFSXwWrfulm338yZYxFWDkC6bIpU7yLUf2c6GZu71iVCQFFpSe0wwF6cBFNRA6Zs7%2B1hcmF3d7H637sYUom4c6BBPuTuXugmjJrQdRvHob%2FYzfDhChdMXq8nq2hvLN114tYlMIbi98EGOqUBWraHO7hGPeIgvtWTHBcmc3MqpRTmzxwmFjaMFJtsFn4K6zKxQ3AnKOJCuG6dGYnSopDw3g3swLWAbnq7nsAveP5FACYBeBNZMp5pw04VfRGllQR3Hfv9Kb%2BcS8Nwix5kTnU%2BUJHqH8Faxp7fSjcCHQ0Si0VizF6pNv%2FVvhsjvzv8i0P0ulvKdbfWid0ZesC5LM%2FLS53w4DGqdk3ySmAjU1KWcoLr&X-Amz-Signature=474181aaae6f471fb960d2571a386c8d0bc15a958d4595d8f4c2f85b0a537c03&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N5SU3WJ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCyAAonPTakqJrPTsBnWRMwOPLMH3y2bGtSYavXUiIFtAIgTVcAO699JYyNBaMx%2Bk6xOee91WD7uIskaXKp2tPj2b0qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4AsCayCkbDeVadUyrcA96yBgIMBQgpwBSt9N%2FsY8pOvm3%2B7f7bjQq7i4HMetFqRyu6MYTUGDDC9IA740hZFfs2EN8K%2FVFF5MQ66ypmW82QONchSojzlZd9Qq1dhkL1Sr65a2MsfOeVuKy2FCyEoNTPxKpfBNuYKYTktlSor6KXoC3TNwSFC32aBz5g6E%2FZbmTuP8myDL%2BYirPqMoPN3rdW6vnEB73vDKokTsHzVA22q6s5zXMbtrK94guNHwCKSa7GqQma4F3DMzChszzDM2tkSJORoyTBF%2Fyr57tsP0s6eApAAp2i1i5ZpdoErZWZOoWI1V%2FE%2BA6fxjiJjsHH0iAZ%2F1eHOwB7RGUYOX4IFLZUZLzYxTbaknVMfkHNNint1XmTwuuduf4gK0FQfAGPofpKpftxoR9inVve2O8bG4EjUyiEM6BpfN0Hxektrjs8fsc5fd3wAg781wlWA%2BBkrw7bI6oAaiNMaomuY%2BJQItG4MYqG3lD47cWpgUsgDRIEIO7yPRGXqOkvlFSXwWrfulm338yZYxFWDkC6bIpU7yLUf2c6GZu71iVCQFFpSe0wwF6cBFNRA6Zs7%2B1hcmF3d7H637sYUom4c6BBPuTuXugmjJrQdRvHob%2FYzfDhChdMXq8nq2hvLN114tYlMIbi98EGOqUBWraHO7hGPeIgvtWTHBcmc3MqpRTmzxwmFjaMFJtsFn4K6zKxQ3AnKOJCuG6dGYnSopDw3g3swLWAbnq7nsAveP5FACYBeBNZMp5pw04VfRGllQR3Hfv9Kb%2BcS8Nwix5kTnU%2BUJHqH8Faxp7fSjcCHQ0Si0VizF6pNv%2FVvhsjvzv8i0P0ulvKdbfWid0ZesC5LM%2FLS53w4DGqdk3ySmAjU1KWcoLr&X-Amz-Signature=edc785f86e911493fa04b820bd8f9ca9eb35232337de928aca7533363444d01e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N5SU3WJ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCyAAonPTakqJrPTsBnWRMwOPLMH3y2bGtSYavXUiIFtAIgTVcAO699JYyNBaMx%2Bk6xOee91WD7uIskaXKp2tPj2b0qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4AsCayCkbDeVadUyrcA96yBgIMBQgpwBSt9N%2FsY8pOvm3%2B7f7bjQq7i4HMetFqRyu6MYTUGDDC9IA740hZFfs2EN8K%2FVFF5MQ66ypmW82QONchSojzlZd9Qq1dhkL1Sr65a2MsfOeVuKy2FCyEoNTPxKpfBNuYKYTktlSor6KXoC3TNwSFC32aBz5g6E%2FZbmTuP8myDL%2BYirPqMoPN3rdW6vnEB73vDKokTsHzVA22q6s5zXMbtrK94guNHwCKSa7GqQma4F3DMzChszzDM2tkSJORoyTBF%2Fyr57tsP0s6eApAAp2i1i5ZpdoErZWZOoWI1V%2FE%2BA6fxjiJjsHH0iAZ%2F1eHOwB7RGUYOX4IFLZUZLzYxTbaknVMfkHNNint1XmTwuuduf4gK0FQfAGPofpKpftxoR9inVve2O8bG4EjUyiEM6BpfN0Hxektrjs8fsc5fd3wAg781wlWA%2BBkrw7bI6oAaiNMaomuY%2BJQItG4MYqG3lD47cWpgUsgDRIEIO7yPRGXqOkvlFSXwWrfulm338yZYxFWDkC6bIpU7yLUf2c6GZu71iVCQFFpSe0wwF6cBFNRA6Zs7%2B1hcmF3d7H637sYUom4c6BBPuTuXugmjJrQdRvHob%2FYzfDhChdMXq8nq2hvLN114tYlMIbi98EGOqUBWraHO7hGPeIgvtWTHBcmc3MqpRTmzxwmFjaMFJtsFn4K6zKxQ3AnKOJCuG6dGYnSopDw3g3swLWAbnq7nsAveP5FACYBeBNZMp5pw04VfRGllQR3Hfv9Kb%2BcS8Nwix5kTnU%2BUJHqH8Faxp7fSjcCHQ0Si0VizF6pNv%2FVvhsjvzv8i0P0ulvKdbfWid0ZesC5LM%2FLS53w4DGqdk3ySmAjU1KWcoLr&X-Amz-Signature=d76369276074092432a02b063618bdeccf6f0c6ed210bc292fa3cb5d498be71e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
