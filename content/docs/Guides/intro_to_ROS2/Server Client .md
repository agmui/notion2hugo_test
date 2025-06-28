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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWLAZYHQ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDaIF80xd189Yqmg0TzWmjoIrKLTuciweRy6Z7OoXDsAIgR6aMg4gkYG91kdzh7dK4FMHFi5XooV%2By6VnNOUizfMsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsYU60lR3qjuYK59yrcA4KeNJoAkJjo0yUkjV6602AzZjpQwwxgCadDSc2GxF8cEjaJyLVKiwubmgS4d%2BS0pjhDneG88xUtM8oWD0qR028GDydQAZ0acWGYG786bY5ES69VFkWvmQYR0wDar55KH%2BcIlv9i9bambhwQwmkCK1cxVwnSF%2BMiMpEt4B79sjCl3Es7Ngrfk5sf8OgNybRkp1eWZbB0mpV7fsHviuaEexnW%2Bp5W22JC6JhpI29L5oUUAIrR1NcBTlbOmk1%2FnxWrrxQdZlJcZDyhz78rjXJ7oJ6W82rxvB%2BI9qWrXmyWIiqqrsSxpj8eR1XI8CmmXRyjsBH6m47%2B1TzL1lBakZZRGMW17V%2BGOeenjlAx8l9GDlPg5VWm1D%2FxnIXxgT8YmYdvhJvlsDoVtgDZ9cKQv56DIfzgASiWNs7s5dVcpmvIE%2FwVt%2BZFnAksCAAfk%2FR7xw9wp5omZT8QeN6O8J0%2BF4gx%2FT%2B4Y%2F2jdPsYflXf1v1o293c66uPy7GY%2FwKpV5tQZF%2BAziousZuk0lfRWZtTRFneku683ybqzQBlaYq0n8a6zEQqdbQwGwyQuU5TDcfr1Ys1FSTv41yOYPS%2FVv28SwubNKUWLiqOEDQGJoNDWzuNX%2FkH9veTh9BTwuVh%2BgjVMKmk%2F8IGOqUBfFGxqwLvEkPG5dzq6f2m2mskZrkI6PdWgPrNpPcebix2r7Mp4%2BYBZhHdZUfJt%2BC6wg33Yrnbv%2BXsxugddyznOvPDM02IWGtpgHkAVY7ULVSZVdnj4dLvAFiGgZxCndMXgTJD5YuOZyyqVpyZu%2BjyjBsLubwhUXxmEMMWjm%2Bkv1RCrnftA66%2FuWR67OahDwGDRhMoinU6L%2FyOHM1FpKCnpBL0Dfn4&X-Amz-Signature=1bbfef1f0682e4238fe5f8b39de7b8f5b2078001c3915656639f6461b256abd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWLAZYHQ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDaIF80xd189Yqmg0TzWmjoIrKLTuciweRy6Z7OoXDsAIgR6aMg4gkYG91kdzh7dK4FMHFi5XooV%2By6VnNOUizfMsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsYU60lR3qjuYK59yrcA4KeNJoAkJjo0yUkjV6602AzZjpQwwxgCadDSc2GxF8cEjaJyLVKiwubmgS4d%2BS0pjhDneG88xUtM8oWD0qR028GDydQAZ0acWGYG786bY5ES69VFkWvmQYR0wDar55KH%2BcIlv9i9bambhwQwmkCK1cxVwnSF%2BMiMpEt4B79sjCl3Es7Ngrfk5sf8OgNybRkp1eWZbB0mpV7fsHviuaEexnW%2Bp5W22JC6JhpI29L5oUUAIrR1NcBTlbOmk1%2FnxWrrxQdZlJcZDyhz78rjXJ7oJ6W82rxvB%2BI9qWrXmyWIiqqrsSxpj8eR1XI8CmmXRyjsBH6m47%2B1TzL1lBakZZRGMW17V%2BGOeenjlAx8l9GDlPg5VWm1D%2FxnIXxgT8YmYdvhJvlsDoVtgDZ9cKQv56DIfzgASiWNs7s5dVcpmvIE%2FwVt%2BZFnAksCAAfk%2FR7xw9wp5omZT8QeN6O8J0%2BF4gx%2FT%2B4Y%2F2jdPsYflXf1v1o293c66uPy7GY%2FwKpV5tQZF%2BAziousZuk0lfRWZtTRFneku683ybqzQBlaYq0n8a6zEQqdbQwGwyQuU5TDcfr1Ys1FSTv41yOYPS%2FVv28SwubNKUWLiqOEDQGJoNDWzuNX%2FkH9veTh9BTwuVh%2BgjVMKmk%2F8IGOqUBfFGxqwLvEkPG5dzq6f2m2mskZrkI6PdWgPrNpPcebix2r7Mp4%2BYBZhHdZUfJt%2BC6wg33Yrnbv%2BXsxugddyznOvPDM02IWGtpgHkAVY7ULVSZVdnj4dLvAFiGgZxCndMXgTJD5YuOZyyqVpyZu%2BjyjBsLubwhUXxmEMMWjm%2Bkv1RCrnftA66%2FuWR67OahDwGDRhMoinU6L%2FyOHM1FpKCnpBL0Dfn4&X-Amz-Signature=415b70fd3bc5f6a13bc538d3d11294c8ba0cbe69a116206c31976314158b1dc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWLAZYHQ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDaIF80xd189Yqmg0TzWmjoIrKLTuciweRy6Z7OoXDsAIgR6aMg4gkYG91kdzh7dK4FMHFi5XooV%2By6VnNOUizfMsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsYU60lR3qjuYK59yrcA4KeNJoAkJjo0yUkjV6602AzZjpQwwxgCadDSc2GxF8cEjaJyLVKiwubmgS4d%2BS0pjhDneG88xUtM8oWD0qR028GDydQAZ0acWGYG786bY5ES69VFkWvmQYR0wDar55KH%2BcIlv9i9bambhwQwmkCK1cxVwnSF%2BMiMpEt4B79sjCl3Es7Ngrfk5sf8OgNybRkp1eWZbB0mpV7fsHviuaEexnW%2Bp5W22JC6JhpI29L5oUUAIrR1NcBTlbOmk1%2FnxWrrxQdZlJcZDyhz78rjXJ7oJ6W82rxvB%2BI9qWrXmyWIiqqrsSxpj8eR1XI8CmmXRyjsBH6m47%2B1TzL1lBakZZRGMW17V%2BGOeenjlAx8l9GDlPg5VWm1D%2FxnIXxgT8YmYdvhJvlsDoVtgDZ9cKQv56DIfzgASiWNs7s5dVcpmvIE%2FwVt%2BZFnAksCAAfk%2FR7xw9wp5omZT8QeN6O8J0%2BF4gx%2FT%2B4Y%2F2jdPsYflXf1v1o293c66uPy7GY%2FwKpV5tQZF%2BAziousZuk0lfRWZtTRFneku683ybqzQBlaYq0n8a6zEQqdbQwGwyQuU5TDcfr1Ys1FSTv41yOYPS%2FVv28SwubNKUWLiqOEDQGJoNDWzuNX%2FkH9veTh9BTwuVh%2BgjVMKmk%2F8IGOqUBfFGxqwLvEkPG5dzq6f2m2mskZrkI6PdWgPrNpPcebix2r7Mp4%2BYBZhHdZUfJt%2BC6wg33Yrnbv%2BXsxugddyznOvPDM02IWGtpgHkAVY7ULVSZVdnj4dLvAFiGgZxCndMXgTJD5YuOZyyqVpyZu%2BjyjBsLubwhUXxmEMMWjm%2Bkv1RCrnftA66%2FuWR67OahDwGDRhMoinU6L%2FyOHM1FpKCnpBL0Dfn4&X-Amz-Signature=4df7962a5506008fd4dc1b03a07d8cfd8edf5f37765e8e5bc3f9a6545558c9af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWLAZYHQ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDaIF80xd189Yqmg0TzWmjoIrKLTuciweRy6Z7OoXDsAIgR6aMg4gkYG91kdzh7dK4FMHFi5XooV%2By6VnNOUizfMsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsYU60lR3qjuYK59yrcA4KeNJoAkJjo0yUkjV6602AzZjpQwwxgCadDSc2GxF8cEjaJyLVKiwubmgS4d%2BS0pjhDneG88xUtM8oWD0qR028GDydQAZ0acWGYG786bY5ES69VFkWvmQYR0wDar55KH%2BcIlv9i9bambhwQwmkCK1cxVwnSF%2BMiMpEt4B79sjCl3Es7Ngrfk5sf8OgNybRkp1eWZbB0mpV7fsHviuaEexnW%2Bp5W22JC6JhpI29L5oUUAIrR1NcBTlbOmk1%2FnxWrrxQdZlJcZDyhz78rjXJ7oJ6W82rxvB%2BI9qWrXmyWIiqqrsSxpj8eR1XI8CmmXRyjsBH6m47%2B1TzL1lBakZZRGMW17V%2BGOeenjlAx8l9GDlPg5VWm1D%2FxnIXxgT8YmYdvhJvlsDoVtgDZ9cKQv56DIfzgASiWNs7s5dVcpmvIE%2FwVt%2BZFnAksCAAfk%2FR7xw9wp5omZT8QeN6O8J0%2BF4gx%2FT%2B4Y%2F2jdPsYflXf1v1o293c66uPy7GY%2FwKpV5tQZF%2BAziousZuk0lfRWZtTRFneku683ybqzQBlaYq0n8a6zEQqdbQwGwyQuU5TDcfr1Ys1FSTv41yOYPS%2FVv28SwubNKUWLiqOEDQGJoNDWzuNX%2FkH9veTh9BTwuVh%2BgjVMKmk%2F8IGOqUBfFGxqwLvEkPG5dzq6f2m2mskZrkI6PdWgPrNpPcebix2r7Mp4%2BYBZhHdZUfJt%2BC6wg33Yrnbv%2BXsxugddyznOvPDM02IWGtpgHkAVY7ULVSZVdnj4dLvAFiGgZxCndMXgTJD5YuOZyyqVpyZu%2BjyjBsLubwhUXxmEMMWjm%2Bkv1RCrnftA66%2FuWR67OahDwGDRhMoinU6L%2FyOHM1FpKCnpBL0Dfn4&X-Amz-Signature=dabf46a09ad6247f16107efd21bf3185b5a46cae340b77d7ef923acaa1deb865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWLAZYHQ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDaIF80xd189Yqmg0TzWmjoIrKLTuciweRy6Z7OoXDsAIgR6aMg4gkYG91kdzh7dK4FMHFi5XooV%2By6VnNOUizfMsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsYU60lR3qjuYK59yrcA4KeNJoAkJjo0yUkjV6602AzZjpQwwxgCadDSc2GxF8cEjaJyLVKiwubmgS4d%2BS0pjhDneG88xUtM8oWD0qR028GDydQAZ0acWGYG786bY5ES69VFkWvmQYR0wDar55KH%2BcIlv9i9bambhwQwmkCK1cxVwnSF%2BMiMpEt4B79sjCl3Es7Ngrfk5sf8OgNybRkp1eWZbB0mpV7fsHviuaEexnW%2Bp5W22JC6JhpI29L5oUUAIrR1NcBTlbOmk1%2FnxWrrxQdZlJcZDyhz78rjXJ7oJ6W82rxvB%2BI9qWrXmyWIiqqrsSxpj8eR1XI8CmmXRyjsBH6m47%2B1TzL1lBakZZRGMW17V%2BGOeenjlAx8l9GDlPg5VWm1D%2FxnIXxgT8YmYdvhJvlsDoVtgDZ9cKQv56DIfzgASiWNs7s5dVcpmvIE%2FwVt%2BZFnAksCAAfk%2FR7xw9wp5omZT8QeN6O8J0%2BF4gx%2FT%2B4Y%2F2jdPsYflXf1v1o293c66uPy7GY%2FwKpV5tQZF%2BAziousZuk0lfRWZtTRFneku683ybqzQBlaYq0n8a6zEQqdbQwGwyQuU5TDcfr1Ys1FSTv41yOYPS%2FVv28SwubNKUWLiqOEDQGJoNDWzuNX%2FkH9veTh9BTwuVh%2BgjVMKmk%2F8IGOqUBfFGxqwLvEkPG5dzq6f2m2mskZrkI6PdWgPrNpPcebix2r7Mp4%2BYBZhHdZUfJt%2BC6wg33Yrnbv%2BXsxugddyznOvPDM02IWGtpgHkAVY7ULVSZVdnj4dLvAFiGgZxCndMXgTJD5YuOZyyqVpyZu%2BjyjBsLubwhUXxmEMMWjm%2Bkv1RCrnftA66%2FuWR67OahDwGDRhMoinU6L%2FyOHM1FpKCnpBL0Dfn4&X-Amz-Signature=af455440cbf94f23e3bdc35f4947086107017959078728f7840a145966e525aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
