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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJVEDK4G%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUO5bwyGH%2BBbGpYQfMnml0WhHl86aKwVO%2BcYtHLXtzNAiEAg6juKhOW%2B2AhM2RBehrK8NREw%2BzU9WE1ISeH3l1px6MqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAi2NOFPRYSzbIVLmircAzppLAv%2BtENb2GFZBa3iIlzaVs0INb54l3X01pjQFnfKXJn7QhXGIRZ4Cnjwrf7oduNk6cbx7LrvAMMn%2FlsetvmIi%2FhJFkHWEP2qpp7gL%2BJXuEvF2J2%2B%2F3OByZ600zYUa3%2BbI4daYf1Vl1CUnIj9TKERNWnOnfwJ4LHp1U75D0OpGNukKEasP2P9tm9JwMWQKT4heDd71NWypgdaZXYGOkG3K9luYJE%2BEquR0sq26quDHXzc9XCotyUBUrT34HUG7GB5SsVRWTptlUOgHw5eAhwYVza5BSjUVOH7Rb5k675gKrNz9teT1MrQ2BwDFcg1DgYuzWd%2FOwEs%2Bd6wJLMG1wzq%2Fozj%2Fu8D2xPec8SJnC%2FceY%2B3aYiYatlWCK%2BWJ6%2B%2FbhGCJECxK%2FJldR1mUSUt4r%2F6gVqg2aZK25mCuv7wVgzcgltZE5vPnOU02%2BEK21wtO7TD7vvpXb6tLJww518fuQVp2tdHG4h0VcOc0QYwml3otiDyqste2E5Ns4Xr1MCvoFvU4vpIqYPl7qv%2FbM%2FxmXUTtDWQYVbNaeiTzOWQl0WtDUVjQK8llqj8y793GxGu%2FWKGKsm0XqdN97stAUsyDU%2BAbxek2e7mrAsJXYy4qf8UzvUkPe3PgSR9BCh5MMev2MIGOqUBFTkFO1FksF9TOsJSvale9wCicBmipOos95AfcDgqO4bV2DpEkGerkHNxaWC62QOTPX5kE10gojn4r%2FElcUPWswXkYzqIaDWBgZkf%2Fpuvi1gMkSH4L%2BGAPk4sRtakTMk%2BJI9DTYkTAtIi4B5JZbATsBi4DVsUslEEWntRNqbg6ENjZEtRq%2FcidARdXHPHPnFNjrULnjSrMOeNFACHhtXvRuiBcMYN&X-Amz-Signature=edcd16f7f738407e2323824e378bf90014692a665767a751fd6c1cf0d00037d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJVEDK4G%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUO5bwyGH%2BBbGpYQfMnml0WhHl86aKwVO%2BcYtHLXtzNAiEAg6juKhOW%2B2AhM2RBehrK8NREw%2BzU9WE1ISeH3l1px6MqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAi2NOFPRYSzbIVLmircAzppLAv%2BtENb2GFZBa3iIlzaVs0INb54l3X01pjQFnfKXJn7QhXGIRZ4Cnjwrf7oduNk6cbx7LrvAMMn%2FlsetvmIi%2FhJFkHWEP2qpp7gL%2BJXuEvF2J2%2B%2F3OByZ600zYUa3%2BbI4daYf1Vl1CUnIj9TKERNWnOnfwJ4LHp1U75D0OpGNukKEasP2P9tm9JwMWQKT4heDd71NWypgdaZXYGOkG3K9luYJE%2BEquR0sq26quDHXzc9XCotyUBUrT34HUG7GB5SsVRWTptlUOgHw5eAhwYVza5BSjUVOH7Rb5k675gKrNz9teT1MrQ2BwDFcg1DgYuzWd%2FOwEs%2Bd6wJLMG1wzq%2Fozj%2Fu8D2xPec8SJnC%2FceY%2B3aYiYatlWCK%2BWJ6%2B%2FbhGCJECxK%2FJldR1mUSUt4r%2F6gVqg2aZK25mCuv7wVgzcgltZE5vPnOU02%2BEK21wtO7TD7vvpXb6tLJww518fuQVp2tdHG4h0VcOc0QYwml3otiDyqste2E5Ns4Xr1MCvoFvU4vpIqYPl7qv%2FbM%2FxmXUTtDWQYVbNaeiTzOWQl0WtDUVjQK8llqj8y793GxGu%2FWKGKsm0XqdN97stAUsyDU%2BAbxek2e7mrAsJXYy4qf8UzvUkPe3PgSR9BCh5MMev2MIGOqUBFTkFO1FksF9TOsJSvale9wCicBmipOos95AfcDgqO4bV2DpEkGerkHNxaWC62QOTPX5kE10gojn4r%2FElcUPWswXkYzqIaDWBgZkf%2Fpuvi1gMkSH4L%2BGAPk4sRtakTMk%2BJI9DTYkTAtIi4B5JZbATsBi4DVsUslEEWntRNqbg6ENjZEtRq%2FcidARdXHPHPnFNjrULnjSrMOeNFACHhtXvRuiBcMYN&X-Amz-Signature=d054498610d201136136ba6ec23906d687b4db0636e8a26279f9a8749840ce94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJVEDK4G%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUO5bwyGH%2BBbGpYQfMnml0WhHl86aKwVO%2BcYtHLXtzNAiEAg6juKhOW%2B2AhM2RBehrK8NREw%2BzU9WE1ISeH3l1px6MqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAi2NOFPRYSzbIVLmircAzppLAv%2BtENb2GFZBa3iIlzaVs0INb54l3X01pjQFnfKXJn7QhXGIRZ4Cnjwrf7oduNk6cbx7LrvAMMn%2FlsetvmIi%2FhJFkHWEP2qpp7gL%2BJXuEvF2J2%2B%2F3OByZ600zYUa3%2BbI4daYf1Vl1CUnIj9TKERNWnOnfwJ4LHp1U75D0OpGNukKEasP2P9tm9JwMWQKT4heDd71NWypgdaZXYGOkG3K9luYJE%2BEquR0sq26quDHXzc9XCotyUBUrT34HUG7GB5SsVRWTptlUOgHw5eAhwYVza5BSjUVOH7Rb5k675gKrNz9teT1MrQ2BwDFcg1DgYuzWd%2FOwEs%2Bd6wJLMG1wzq%2Fozj%2Fu8D2xPec8SJnC%2FceY%2B3aYiYatlWCK%2BWJ6%2B%2FbhGCJECxK%2FJldR1mUSUt4r%2F6gVqg2aZK25mCuv7wVgzcgltZE5vPnOU02%2BEK21wtO7TD7vvpXb6tLJww518fuQVp2tdHG4h0VcOc0QYwml3otiDyqste2E5Ns4Xr1MCvoFvU4vpIqYPl7qv%2FbM%2FxmXUTtDWQYVbNaeiTzOWQl0WtDUVjQK8llqj8y793GxGu%2FWKGKsm0XqdN97stAUsyDU%2BAbxek2e7mrAsJXYy4qf8UzvUkPe3PgSR9BCh5MMev2MIGOqUBFTkFO1FksF9TOsJSvale9wCicBmipOos95AfcDgqO4bV2DpEkGerkHNxaWC62QOTPX5kE10gojn4r%2FElcUPWswXkYzqIaDWBgZkf%2Fpuvi1gMkSH4L%2BGAPk4sRtakTMk%2BJI9DTYkTAtIi4B5JZbATsBi4DVsUslEEWntRNqbg6ENjZEtRq%2FcidARdXHPHPnFNjrULnjSrMOeNFACHhtXvRuiBcMYN&X-Amz-Signature=12d285673e911519c23c2f7ff6d0a583ef6ded80cd1f2ae5f55b9a4ea6fc7da1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJVEDK4G%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUO5bwyGH%2BBbGpYQfMnml0WhHl86aKwVO%2BcYtHLXtzNAiEAg6juKhOW%2B2AhM2RBehrK8NREw%2BzU9WE1ISeH3l1px6MqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAi2NOFPRYSzbIVLmircAzppLAv%2BtENb2GFZBa3iIlzaVs0INb54l3X01pjQFnfKXJn7QhXGIRZ4Cnjwrf7oduNk6cbx7LrvAMMn%2FlsetvmIi%2FhJFkHWEP2qpp7gL%2BJXuEvF2J2%2B%2F3OByZ600zYUa3%2BbI4daYf1Vl1CUnIj9TKERNWnOnfwJ4LHp1U75D0OpGNukKEasP2P9tm9JwMWQKT4heDd71NWypgdaZXYGOkG3K9luYJE%2BEquR0sq26quDHXzc9XCotyUBUrT34HUG7GB5SsVRWTptlUOgHw5eAhwYVza5BSjUVOH7Rb5k675gKrNz9teT1MrQ2BwDFcg1DgYuzWd%2FOwEs%2Bd6wJLMG1wzq%2Fozj%2Fu8D2xPec8SJnC%2FceY%2B3aYiYatlWCK%2BWJ6%2B%2FbhGCJECxK%2FJldR1mUSUt4r%2F6gVqg2aZK25mCuv7wVgzcgltZE5vPnOU02%2BEK21wtO7TD7vvpXb6tLJww518fuQVp2tdHG4h0VcOc0QYwml3otiDyqste2E5Ns4Xr1MCvoFvU4vpIqYPl7qv%2FbM%2FxmXUTtDWQYVbNaeiTzOWQl0WtDUVjQK8llqj8y793GxGu%2FWKGKsm0XqdN97stAUsyDU%2BAbxek2e7mrAsJXYy4qf8UzvUkPe3PgSR9BCh5MMev2MIGOqUBFTkFO1FksF9TOsJSvale9wCicBmipOos95AfcDgqO4bV2DpEkGerkHNxaWC62QOTPX5kE10gojn4r%2FElcUPWswXkYzqIaDWBgZkf%2Fpuvi1gMkSH4L%2BGAPk4sRtakTMk%2BJI9DTYkTAtIi4B5JZbATsBi4DVsUslEEWntRNqbg6ENjZEtRq%2FcidARdXHPHPnFNjrULnjSrMOeNFACHhtXvRuiBcMYN&X-Amz-Signature=00e4407f37ac220c8bbe3167da40c5a30db6ff7935ef4bad7bce52577cf3aec8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJVEDK4G%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUO5bwyGH%2BBbGpYQfMnml0WhHl86aKwVO%2BcYtHLXtzNAiEAg6juKhOW%2B2AhM2RBehrK8NREw%2BzU9WE1ISeH3l1px6MqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAi2NOFPRYSzbIVLmircAzppLAv%2BtENb2GFZBa3iIlzaVs0INb54l3X01pjQFnfKXJn7QhXGIRZ4Cnjwrf7oduNk6cbx7LrvAMMn%2FlsetvmIi%2FhJFkHWEP2qpp7gL%2BJXuEvF2J2%2B%2F3OByZ600zYUa3%2BbI4daYf1Vl1CUnIj9TKERNWnOnfwJ4LHp1U75D0OpGNukKEasP2P9tm9JwMWQKT4heDd71NWypgdaZXYGOkG3K9luYJE%2BEquR0sq26quDHXzc9XCotyUBUrT34HUG7GB5SsVRWTptlUOgHw5eAhwYVza5BSjUVOH7Rb5k675gKrNz9teT1MrQ2BwDFcg1DgYuzWd%2FOwEs%2Bd6wJLMG1wzq%2Fozj%2Fu8D2xPec8SJnC%2FceY%2B3aYiYatlWCK%2BWJ6%2B%2FbhGCJECxK%2FJldR1mUSUt4r%2F6gVqg2aZK25mCuv7wVgzcgltZE5vPnOU02%2BEK21wtO7TD7vvpXb6tLJww518fuQVp2tdHG4h0VcOc0QYwml3otiDyqste2E5Ns4Xr1MCvoFvU4vpIqYPl7qv%2FbM%2FxmXUTtDWQYVbNaeiTzOWQl0WtDUVjQK8llqj8y793GxGu%2FWKGKsm0XqdN97stAUsyDU%2BAbxek2e7mrAsJXYy4qf8UzvUkPe3PgSR9BCh5MMev2MIGOqUBFTkFO1FksF9TOsJSvale9wCicBmipOos95AfcDgqO4bV2DpEkGerkHNxaWC62QOTPX5kE10gojn4r%2FElcUPWswXkYzqIaDWBgZkf%2Fpuvi1gMkSH4L%2BGAPk4sRtakTMk%2BJI9DTYkTAtIi4B5JZbATsBi4DVsUslEEWntRNqbg6ENjZEtRq%2FcidARdXHPHPnFNjrULnjSrMOeNFACHhtXvRuiBcMYN&X-Amz-Signature=fcde9b474c2b3448e5930cb61fb97e4ddb0661b9318897467177aef533654a74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
