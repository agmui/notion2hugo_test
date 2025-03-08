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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOFSOB7P%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDvk4%2BYj0ijBSfbiA2bKlNL4InzrYCISiaxjnuXViLwSwIga%2BTIl%2FvxzkLOdMDbUHpQPM3LM0XQ3xhaIRbIZMTZR4sq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBe5eLcSUefGUBM1VSrcA5Uoy23BsD7lJIcrEYt0uB%2FOeZgQl4vYW2Ox2BtEDo8vwcvhm5J4x9rE6WOjjI6qG%2FCavecZRCfUdBwk2aciAFnWPZSFa6roZbooivtImmn117kxSjkj%2BkEQlWS5ut7CLYOlXX0iZ05GVqYJ0LmZLl7%2BgHw65IE8VMryoD2oLxWRontyFApQg%2BaQoyK%2FgmXBEEfNikvaqVHL5%2FkTrBfVXP6tz%2Bwks3VG%2FQf9v8mvEGdivulC%2FXeuBTzll9VCypzivbpwHFMgwyUlJn1ohMMJFY9pZ5Sa9M0dV0TQcAA%2F%2FwfT%2Fv0cSWhO2MxoFOSV7zXfLlMd7Fn9WQ6npsKSsblRoXQGt%2BnkT1KyBav6c%2BHTaET5fdyJ9wnRXajcXWb0j6WfSmqEH5azCXCGhNFoUeJSMUW2AQsEjV6hT5p9CrkGh7Mj5NoKoPjw%2BvvrNgtsrsp%2B7%2FJaWPC%2BMf1A9o68gbkFDNml7sMCsG4bdvIxsTD9hKhJP2PC3tBSFNmQkhbySUhoUp8ydMgV2BkJfRNEn4AlibgMQwOeIdfAfY7uBUV8FMnJ4VD41uIEpeDmcuHws54AAt%2BeKwgfEqM%2FU%2F%2BS0Bb4guvFY%2FTLIGM2V4a9hOEDfmeP5I5mGtQn77LwxipfMKSzsb4GOqUBQ8S551Nrwa9EGxaFKd1uec2CjsOH38idTV70EVvPMvOejaX7A6QZubo4yIGJyWohE9E%2FToMO9BM9hTrzXVfeQosOL%2BtJNRt%2B5m6HqpuLBNnY9U7kN4Z8pXoJd50dww39UfjizsC6Qglylxzdx1j30lC4y63uOjpd9CMp2sYjV4wtVqts%2BCAjsldbnyXSV5dzDRdndUBktLtDlwYJkAx9vSbFpG%2BG&X-Amz-Signature=109d9ffa6c4b9841a8bcda7a550e365f1c869ea39120cf583dcd893786f3eb3a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOFSOB7P%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDvk4%2BYj0ijBSfbiA2bKlNL4InzrYCISiaxjnuXViLwSwIga%2BTIl%2FvxzkLOdMDbUHpQPM3LM0XQ3xhaIRbIZMTZR4sq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBe5eLcSUefGUBM1VSrcA5Uoy23BsD7lJIcrEYt0uB%2FOeZgQl4vYW2Ox2BtEDo8vwcvhm5J4x9rE6WOjjI6qG%2FCavecZRCfUdBwk2aciAFnWPZSFa6roZbooivtImmn117kxSjkj%2BkEQlWS5ut7CLYOlXX0iZ05GVqYJ0LmZLl7%2BgHw65IE8VMryoD2oLxWRontyFApQg%2BaQoyK%2FgmXBEEfNikvaqVHL5%2FkTrBfVXP6tz%2Bwks3VG%2FQf9v8mvEGdivulC%2FXeuBTzll9VCypzivbpwHFMgwyUlJn1ohMMJFY9pZ5Sa9M0dV0TQcAA%2F%2FwfT%2Fv0cSWhO2MxoFOSV7zXfLlMd7Fn9WQ6npsKSsblRoXQGt%2BnkT1KyBav6c%2BHTaET5fdyJ9wnRXajcXWb0j6WfSmqEH5azCXCGhNFoUeJSMUW2AQsEjV6hT5p9CrkGh7Mj5NoKoPjw%2BvvrNgtsrsp%2B7%2FJaWPC%2BMf1A9o68gbkFDNml7sMCsG4bdvIxsTD9hKhJP2PC3tBSFNmQkhbySUhoUp8ydMgV2BkJfRNEn4AlibgMQwOeIdfAfY7uBUV8FMnJ4VD41uIEpeDmcuHws54AAt%2BeKwgfEqM%2FU%2F%2BS0Bb4guvFY%2FTLIGM2V4a9hOEDfmeP5I5mGtQn77LwxipfMKSzsb4GOqUBQ8S551Nrwa9EGxaFKd1uec2CjsOH38idTV70EVvPMvOejaX7A6QZubo4yIGJyWohE9E%2FToMO9BM9hTrzXVfeQosOL%2BtJNRt%2B5m6HqpuLBNnY9U7kN4Z8pXoJd50dww39UfjizsC6Qglylxzdx1j30lC4y63uOjpd9CMp2sYjV4wtVqts%2BCAjsldbnyXSV5dzDRdndUBktLtDlwYJkAx9vSbFpG%2BG&X-Amz-Signature=8e68ea58fb47f30aa32fac294e89da6979ac532d635209e84a27e85ee0114d5a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOFSOB7P%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDvk4%2BYj0ijBSfbiA2bKlNL4InzrYCISiaxjnuXViLwSwIga%2BTIl%2FvxzkLOdMDbUHpQPM3LM0XQ3xhaIRbIZMTZR4sq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBe5eLcSUefGUBM1VSrcA5Uoy23BsD7lJIcrEYt0uB%2FOeZgQl4vYW2Ox2BtEDo8vwcvhm5J4x9rE6WOjjI6qG%2FCavecZRCfUdBwk2aciAFnWPZSFa6roZbooivtImmn117kxSjkj%2BkEQlWS5ut7CLYOlXX0iZ05GVqYJ0LmZLl7%2BgHw65IE8VMryoD2oLxWRontyFApQg%2BaQoyK%2FgmXBEEfNikvaqVHL5%2FkTrBfVXP6tz%2Bwks3VG%2FQf9v8mvEGdivulC%2FXeuBTzll9VCypzivbpwHFMgwyUlJn1ohMMJFY9pZ5Sa9M0dV0TQcAA%2F%2FwfT%2Fv0cSWhO2MxoFOSV7zXfLlMd7Fn9WQ6npsKSsblRoXQGt%2BnkT1KyBav6c%2BHTaET5fdyJ9wnRXajcXWb0j6WfSmqEH5azCXCGhNFoUeJSMUW2AQsEjV6hT5p9CrkGh7Mj5NoKoPjw%2BvvrNgtsrsp%2B7%2FJaWPC%2BMf1A9o68gbkFDNml7sMCsG4bdvIxsTD9hKhJP2PC3tBSFNmQkhbySUhoUp8ydMgV2BkJfRNEn4AlibgMQwOeIdfAfY7uBUV8FMnJ4VD41uIEpeDmcuHws54AAt%2BeKwgfEqM%2FU%2F%2BS0Bb4guvFY%2FTLIGM2V4a9hOEDfmeP5I5mGtQn77LwxipfMKSzsb4GOqUBQ8S551Nrwa9EGxaFKd1uec2CjsOH38idTV70EVvPMvOejaX7A6QZubo4yIGJyWohE9E%2FToMO9BM9hTrzXVfeQosOL%2BtJNRt%2B5m6HqpuLBNnY9U7kN4Z8pXoJd50dww39UfjizsC6Qglylxzdx1j30lC4y63uOjpd9CMp2sYjV4wtVqts%2BCAjsldbnyXSV5dzDRdndUBktLtDlwYJkAx9vSbFpG%2BG&X-Amz-Signature=6bfe6ad0128422ef700eee6b733bffbf81466b676e296b16fcb499640ac9f1c1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOFSOB7P%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDvk4%2BYj0ijBSfbiA2bKlNL4InzrYCISiaxjnuXViLwSwIga%2BTIl%2FvxzkLOdMDbUHpQPM3LM0XQ3xhaIRbIZMTZR4sq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBe5eLcSUefGUBM1VSrcA5Uoy23BsD7lJIcrEYt0uB%2FOeZgQl4vYW2Ox2BtEDo8vwcvhm5J4x9rE6WOjjI6qG%2FCavecZRCfUdBwk2aciAFnWPZSFa6roZbooivtImmn117kxSjkj%2BkEQlWS5ut7CLYOlXX0iZ05GVqYJ0LmZLl7%2BgHw65IE8VMryoD2oLxWRontyFApQg%2BaQoyK%2FgmXBEEfNikvaqVHL5%2FkTrBfVXP6tz%2Bwks3VG%2FQf9v8mvEGdivulC%2FXeuBTzll9VCypzivbpwHFMgwyUlJn1ohMMJFY9pZ5Sa9M0dV0TQcAA%2F%2FwfT%2Fv0cSWhO2MxoFOSV7zXfLlMd7Fn9WQ6npsKSsblRoXQGt%2BnkT1KyBav6c%2BHTaET5fdyJ9wnRXajcXWb0j6WfSmqEH5azCXCGhNFoUeJSMUW2AQsEjV6hT5p9CrkGh7Mj5NoKoPjw%2BvvrNgtsrsp%2B7%2FJaWPC%2BMf1A9o68gbkFDNml7sMCsG4bdvIxsTD9hKhJP2PC3tBSFNmQkhbySUhoUp8ydMgV2BkJfRNEn4AlibgMQwOeIdfAfY7uBUV8FMnJ4VD41uIEpeDmcuHws54AAt%2BeKwgfEqM%2FU%2F%2BS0Bb4guvFY%2FTLIGM2V4a9hOEDfmeP5I5mGtQn77LwxipfMKSzsb4GOqUBQ8S551Nrwa9EGxaFKd1uec2CjsOH38idTV70EVvPMvOejaX7A6QZubo4yIGJyWohE9E%2FToMO9BM9hTrzXVfeQosOL%2BtJNRt%2B5m6HqpuLBNnY9U7kN4Z8pXoJd50dww39UfjizsC6Qglylxzdx1j30lC4y63uOjpd9CMp2sYjV4wtVqts%2BCAjsldbnyXSV5dzDRdndUBktLtDlwYJkAx9vSbFpG%2BG&X-Amz-Signature=3fe69d61974044ca105a6dc5023518b55843e22a6ba788edd5c5a08159dbb668&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOFSOB7P%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDvk4%2BYj0ijBSfbiA2bKlNL4InzrYCISiaxjnuXViLwSwIga%2BTIl%2FvxzkLOdMDbUHpQPM3LM0XQ3xhaIRbIZMTZR4sq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBe5eLcSUefGUBM1VSrcA5Uoy23BsD7lJIcrEYt0uB%2FOeZgQl4vYW2Ox2BtEDo8vwcvhm5J4x9rE6WOjjI6qG%2FCavecZRCfUdBwk2aciAFnWPZSFa6roZbooivtImmn117kxSjkj%2BkEQlWS5ut7CLYOlXX0iZ05GVqYJ0LmZLl7%2BgHw65IE8VMryoD2oLxWRontyFApQg%2BaQoyK%2FgmXBEEfNikvaqVHL5%2FkTrBfVXP6tz%2Bwks3VG%2FQf9v8mvEGdivulC%2FXeuBTzll9VCypzivbpwHFMgwyUlJn1ohMMJFY9pZ5Sa9M0dV0TQcAA%2F%2FwfT%2Fv0cSWhO2MxoFOSV7zXfLlMd7Fn9WQ6npsKSsblRoXQGt%2BnkT1KyBav6c%2BHTaET5fdyJ9wnRXajcXWb0j6WfSmqEH5azCXCGhNFoUeJSMUW2AQsEjV6hT5p9CrkGh7Mj5NoKoPjw%2BvvrNgtsrsp%2B7%2FJaWPC%2BMf1A9o68gbkFDNml7sMCsG4bdvIxsTD9hKhJP2PC3tBSFNmQkhbySUhoUp8ydMgV2BkJfRNEn4AlibgMQwOeIdfAfY7uBUV8FMnJ4VD41uIEpeDmcuHws54AAt%2BeKwgfEqM%2FU%2F%2BS0Bb4guvFY%2FTLIGM2V4a9hOEDfmeP5I5mGtQn77LwxipfMKSzsb4GOqUBQ8S551Nrwa9EGxaFKd1uec2CjsOH38idTV70EVvPMvOejaX7A6QZubo4yIGJyWohE9E%2FToMO9BM9hTrzXVfeQosOL%2BtJNRt%2B5m6HqpuLBNnY9U7kN4Z8pXoJd50dww39UfjizsC6Qglylxzdx1j30lC4y63uOjpd9CMp2sYjV4wtVqts%2BCAjsldbnyXSV5dzDRdndUBktLtDlwYJkAx9vSbFpG%2BG&X-Amz-Signature=89fdecffb270cf2770484d15d485f1fcb2ea00a5a1cbb8a04fffa7fbfbdfec5a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
