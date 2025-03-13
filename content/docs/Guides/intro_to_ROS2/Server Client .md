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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIMWQPYN%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtF0%2FJAoM4J4w5KlLr7EXO9QyiPK6wn8dtD3tm%2FOW7wAiEA%2F94nRIb%2FW5eI6BPNd3JNeS1M%2FxcepsD54x31NPnfYlcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjPzS66tvYzqPA1FircAyXUPAwdhZz%2FFpCEyeNeIdIdzA%2BgA%2Fsvzk0uqEv%2Bu3iiG4HuxsmOCJVCqkgMLejcer15elh%2Fk%2BVK7SStTZPA3vtjwqKBoju2h6QDQZhfOCReT30NSq1X86aouDWuv7OkTG%2FoAALdKvhYeljhdV6JQWaArWmechKzu5aHbWxOndXvlLKaY9u1EtW7p8a4ByjFPHbxLAOEnXkvpD4iGYjBsLnbt%2B3cMil1wZp%2BR6AuVOoCwxe13RB4lDOl9TwduQKlRW3WPxi%2FurMI0e8j0ebla0LmQTY8SKuENWcHp40Btab5O6QSppJEvDXCezzYs80zAelHZ9F0Uq2Fs%2BgXJ2%2Bp0xsX6WqNLs9lDo5c4t0wppEK5191ZeeANYwGAb%2FjE0YWWPdowQplhEdaReFFurCeZ3priaW4GK%2BOCurBBZK%2FAIdU3W8x8In7nShhFnlJBWr0yehRmtF02LXDh4qoDIrq3%2FgavGQo%2BYfOG8rqpcJmtlC1T0ec3HFrcYWN%2Bvxng5ldfu919%2BogsvRxfjIVb3i5JUtVX6d7lk7Loc0iBCcRKYG84AlCEXs%2FkkEOEq2uKnBAksxOvx9%2FM5lqYwVt8LiY0zSXYE%2FJsDCgfigV9b7ie5B%2BoXs31yvUd14PYPWTMI%2B1zL4GOqUB4em3bRG0CL27mo9yri66nXpeaiO81btIOOtwOstne1UDdBnR0%2BCFtY04cXh9jZ2DNkakd4Xahr2xuqzHzJZ95LqEfYWb%2FbRgIIzH%2B0yNT9J%2F%2FpWFsJOYSvyySzRSYVBoXBkFh7E4K56P%2FbtiU%2BmBa2OM7twyvjEHVl%2BlrlmNGSWvVf0ymDajbBpx%2BmMWb6Pn3YkftArvn%2FGusE8PC9E9iXBn39da&X-Amz-Signature=7a5d7ba5a4fa2272a85269c4d6d2a013a305b4ac975e83999fab1099e3189d4a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIMWQPYN%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtF0%2FJAoM4J4w5KlLr7EXO9QyiPK6wn8dtD3tm%2FOW7wAiEA%2F94nRIb%2FW5eI6BPNd3JNeS1M%2FxcepsD54x31NPnfYlcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjPzS66tvYzqPA1FircAyXUPAwdhZz%2FFpCEyeNeIdIdzA%2BgA%2Fsvzk0uqEv%2Bu3iiG4HuxsmOCJVCqkgMLejcer15elh%2Fk%2BVK7SStTZPA3vtjwqKBoju2h6QDQZhfOCReT30NSq1X86aouDWuv7OkTG%2FoAALdKvhYeljhdV6JQWaArWmechKzu5aHbWxOndXvlLKaY9u1EtW7p8a4ByjFPHbxLAOEnXkvpD4iGYjBsLnbt%2B3cMil1wZp%2BR6AuVOoCwxe13RB4lDOl9TwduQKlRW3WPxi%2FurMI0e8j0ebla0LmQTY8SKuENWcHp40Btab5O6QSppJEvDXCezzYs80zAelHZ9F0Uq2Fs%2BgXJ2%2Bp0xsX6WqNLs9lDo5c4t0wppEK5191ZeeANYwGAb%2FjE0YWWPdowQplhEdaReFFurCeZ3priaW4GK%2BOCurBBZK%2FAIdU3W8x8In7nShhFnlJBWr0yehRmtF02LXDh4qoDIrq3%2FgavGQo%2BYfOG8rqpcJmtlC1T0ec3HFrcYWN%2Bvxng5ldfu919%2BogsvRxfjIVb3i5JUtVX6d7lk7Loc0iBCcRKYG84AlCEXs%2FkkEOEq2uKnBAksxOvx9%2FM5lqYwVt8LiY0zSXYE%2FJsDCgfigV9b7ie5B%2BoXs31yvUd14PYPWTMI%2B1zL4GOqUB4em3bRG0CL27mo9yri66nXpeaiO81btIOOtwOstne1UDdBnR0%2BCFtY04cXh9jZ2DNkakd4Xahr2xuqzHzJZ95LqEfYWb%2FbRgIIzH%2B0yNT9J%2F%2FpWFsJOYSvyySzRSYVBoXBkFh7E4K56P%2FbtiU%2BmBa2OM7twyvjEHVl%2BlrlmNGSWvVf0ymDajbBpx%2BmMWb6Pn3YkftArvn%2FGusE8PC9E9iXBn39da&X-Amz-Signature=1a9a586ec4c650f727eac91b9aaff55f7acc18b5106b04ea37741e961fc813f8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIMWQPYN%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtF0%2FJAoM4J4w5KlLr7EXO9QyiPK6wn8dtD3tm%2FOW7wAiEA%2F94nRIb%2FW5eI6BPNd3JNeS1M%2FxcepsD54x31NPnfYlcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjPzS66tvYzqPA1FircAyXUPAwdhZz%2FFpCEyeNeIdIdzA%2BgA%2Fsvzk0uqEv%2Bu3iiG4HuxsmOCJVCqkgMLejcer15elh%2Fk%2BVK7SStTZPA3vtjwqKBoju2h6QDQZhfOCReT30NSq1X86aouDWuv7OkTG%2FoAALdKvhYeljhdV6JQWaArWmechKzu5aHbWxOndXvlLKaY9u1EtW7p8a4ByjFPHbxLAOEnXkvpD4iGYjBsLnbt%2B3cMil1wZp%2BR6AuVOoCwxe13RB4lDOl9TwduQKlRW3WPxi%2FurMI0e8j0ebla0LmQTY8SKuENWcHp40Btab5O6QSppJEvDXCezzYs80zAelHZ9F0Uq2Fs%2BgXJ2%2Bp0xsX6WqNLs9lDo5c4t0wppEK5191ZeeANYwGAb%2FjE0YWWPdowQplhEdaReFFurCeZ3priaW4GK%2BOCurBBZK%2FAIdU3W8x8In7nShhFnlJBWr0yehRmtF02LXDh4qoDIrq3%2FgavGQo%2BYfOG8rqpcJmtlC1T0ec3HFrcYWN%2Bvxng5ldfu919%2BogsvRxfjIVb3i5JUtVX6d7lk7Loc0iBCcRKYG84AlCEXs%2FkkEOEq2uKnBAksxOvx9%2FM5lqYwVt8LiY0zSXYE%2FJsDCgfigV9b7ie5B%2BoXs31yvUd14PYPWTMI%2B1zL4GOqUB4em3bRG0CL27mo9yri66nXpeaiO81btIOOtwOstne1UDdBnR0%2BCFtY04cXh9jZ2DNkakd4Xahr2xuqzHzJZ95LqEfYWb%2FbRgIIzH%2B0yNT9J%2F%2FpWFsJOYSvyySzRSYVBoXBkFh7E4K56P%2FbtiU%2BmBa2OM7twyvjEHVl%2BlrlmNGSWvVf0ymDajbBpx%2BmMWb6Pn3YkftArvn%2FGusE8PC9E9iXBn39da&X-Amz-Signature=f9c75c0eed8e97ee2f67d48e5e0be9714ab6f651370ef428c08317ed11b886f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIMWQPYN%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtF0%2FJAoM4J4w5KlLr7EXO9QyiPK6wn8dtD3tm%2FOW7wAiEA%2F94nRIb%2FW5eI6BPNd3JNeS1M%2FxcepsD54x31NPnfYlcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjPzS66tvYzqPA1FircAyXUPAwdhZz%2FFpCEyeNeIdIdzA%2BgA%2Fsvzk0uqEv%2Bu3iiG4HuxsmOCJVCqkgMLejcer15elh%2Fk%2BVK7SStTZPA3vtjwqKBoju2h6QDQZhfOCReT30NSq1X86aouDWuv7OkTG%2FoAALdKvhYeljhdV6JQWaArWmechKzu5aHbWxOndXvlLKaY9u1EtW7p8a4ByjFPHbxLAOEnXkvpD4iGYjBsLnbt%2B3cMil1wZp%2BR6AuVOoCwxe13RB4lDOl9TwduQKlRW3WPxi%2FurMI0e8j0ebla0LmQTY8SKuENWcHp40Btab5O6QSppJEvDXCezzYs80zAelHZ9F0Uq2Fs%2BgXJ2%2Bp0xsX6WqNLs9lDo5c4t0wppEK5191ZeeANYwGAb%2FjE0YWWPdowQplhEdaReFFurCeZ3priaW4GK%2BOCurBBZK%2FAIdU3W8x8In7nShhFnlJBWr0yehRmtF02LXDh4qoDIrq3%2FgavGQo%2BYfOG8rqpcJmtlC1T0ec3HFrcYWN%2Bvxng5ldfu919%2BogsvRxfjIVb3i5JUtVX6d7lk7Loc0iBCcRKYG84AlCEXs%2FkkEOEq2uKnBAksxOvx9%2FM5lqYwVt8LiY0zSXYE%2FJsDCgfigV9b7ie5B%2BoXs31yvUd14PYPWTMI%2B1zL4GOqUB4em3bRG0CL27mo9yri66nXpeaiO81btIOOtwOstne1UDdBnR0%2BCFtY04cXh9jZ2DNkakd4Xahr2xuqzHzJZ95LqEfYWb%2FbRgIIzH%2B0yNT9J%2F%2FpWFsJOYSvyySzRSYVBoXBkFh7E4K56P%2FbtiU%2BmBa2OM7twyvjEHVl%2BlrlmNGSWvVf0ymDajbBpx%2BmMWb6Pn3YkftArvn%2FGusE8PC9E9iXBn39da&X-Amz-Signature=6b5d7c93ddfb835e26c480af6d950531dbe8898987ed861bb7d73a410198d21e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIMWQPYN%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtF0%2FJAoM4J4w5KlLr7EXO9QyiPK6wn8dtD3tm%2FOW7wAiEA%2F94nRIb%2FW5eI6BPNd3JNeS1M%2FxcepsD54x31NPnfYlcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjPzS66tvYzqPA1FircAyXUPAwdhZz%2FFpCEyeNeIdIdzA%2BgA%2Fsvzk0uqEv%2Bu3iiG4HuxsmOCJVCqkgMLejcer15elh%2Fk%2BVK7SStTZPA3vtjwqKBoju2h6QDQZhfOCReT30NSq1X86aouDWuv7OkTG%2FoAALdKvhYeljhdV6JQWaArWmechKzu5aHbWxOndXvlLKaY9u1EtW7p8a4ByjFPHbxLAOEnXkvpD4iGYjBsLnbt%2B3cMil1wZp%2BR6AuVOoCwxe13RB4lDOl9TwduQKlRW3WPxi%2FurMI0e8j0ebla0LmQTY8SKuENWcHp40Btab5O6QSppJEvDXCezzYs80zAelHZ9F0Uq2Fs%2BgXJ2%2Bp0xsX6WqNLs9lDo5c4t0wppEK5191ZeeANYwGAb%2FjE0YWWPdowQplhEdaReFFurCeZ3priaW4GK%2BOCurBBZK%2FAIdU3W8x8In7nShhFnlJBWr0yehRmtF02LXDh4qoDIrq3%2FgavGQo%2BYfOG8rqpcJmtlC1T0ec3HFrcYWN%2Bvxng5ldfu919%2BogsvRxfjIVb3i5JUtVX6d7lk7Loc0iBCcRKYG84AlCEXs%2FkkEOEq2uKnBAksxOvx9%2FM5lqYwVt8LiY0zSXYE%2FJsDCgfigV9b7ie5B%2BoXs31yvUd14PYPWTMI%2B1zL4GOqUB4em3bRG0CL27mo9yri66nXpeaiO81btIOOtwOstne1UDdBnR0%2BCFtY04cXh9jZ2DNkakd4Xahr2xuqzHzJZ95LqEfYWb%2FbRgIIzH%2B0yNT9J%2F%2FpWFsJOYSvyySzRSYVBoXBkFh7E4K56P%2FbtiU%2BmBa2OM7twyvjEHVl%2BlrlmNGSWvVf0ymDajbBpx%2BmMWb6Pn3YkftArvn%2FGusE8PC9E9iXBn39da&X-Amz-Signature=9db4964f68b746f3c0f5febd3500f092e07b20b633619b76da98ea845c9feff6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
