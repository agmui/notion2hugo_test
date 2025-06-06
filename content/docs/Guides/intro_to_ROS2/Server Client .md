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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EA4VJJ5%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd2NAKRBPY9M0ya31DgHHV%2BJqP%2FeUbd3JGFbNDuO398wIhAOZ3PRc%2BoEJCAyKeNbxM7lcnzzJzEeaZiUG96iR93BtjKv8DCGEQABoMNjM3NDIzMTgzODA1Igxsz7mp0qidU7NB9Vwq3APhltzQeGgW098BqQhdu6hh1rWxsPeW8mnPyhZVdNiASj9p6wZhTkriQeBTOJGAOuXqIsJMAiPXyogyg%2FDgSaAav7%2BfhVPV1yJM0GSmu8pqqw6MND5WaAKUd5t4JcfQyDFvnjAyU%2B8LgN9nNNH9JQlxiz5kreyp1kvUVq0zEtGo9teEPeAMJwjlgIEY3Xp6qh0gesZTtpyxxN5YMB%2FTXxZZywc4nIA7dVshRz8GKG3yPFTFJvPkctLSDafxOYcb7gFiCRJaraZuk9X1x8ddImn1j8CGjsMHlXlESwXp0rKo%2B8L5K5j2587nRW49YaE3d5jKTO4l8E8sdejLlf1nCaVHVYjMpa9KNd2i51YPls4FwZEJrxrGZ9b0GKcIOimU%2F8GFuzXp5S%2FOrjltrOVmmIxEHIv1Njm8MbDiLtsfrDzBol477330u6OQzeFxyQIRHFCr8fm3mX7Wsp%2BrYd3XMRnxwarDOGzXHRDJqdO12sunh12gxwcccNDM5%2BYP6LCwcDaqTVBjzlhL%2FfWHmr3LGxs9l6mpmQ4Y7HfUR3inIzCL4XyFvXrHWGhVsBBR6wtcIOq4adYNAmNhRob0LlVEf2m4smu7p2sn4ezlwgTqftNF%2B5UiVmLG08WZAySVcTD%2BoYzCBjqkAToBjdk2j54GZxkMMpUrooYfH0OGdd4P3%2Bp0P3h7eXrOjXbaiXy6eGaG0lYPASJlRc%2Bfoxm9SwnCTWfs7wIipKnFER1GkX8YRyZZUIOsOjGlllylv6zWQiaUmwsLy57f%2BW1qH%2B3KLTxYeMplzlntLfjWt9scz8GsuXEw2sl8nlt74zcPitqX7GwBCB6kCoac35G0YMJD0UOXDXU%2Bfo1%2BneHSMNvr&X-Amz-Signature=628e4169fab837043a91e52c13323808275018654c637cabdfc62ec65d3cb574&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EA4VJJ5%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd2NAKRBPY9M0ya31DgHHV%2BJqP%2FeUbd3JGFbNDuO398wIhAOZ3PRc%2BoEJCAyKeNbxM7lcnzzJzEeaZiUG96iR93BtjKv8DCGEQABoMNjM3NDIzMTgzODA1Igxsz7mp0qidU7NB9Vwq3APhltzQeGgW098BqQhdu6hh1rWxsPeW8mnPyhZVdNiASj9p6wZhTkriQeBTOJGAOuXqIsJMAiPXyogyg%2FDgSaAav7%2BfhVPV1yJM0GSmu8pqqw6MND5WaAKUd5t4JcfQyDFvnjAyU%2B8LgN9nNNH9JQlxiz5kreyp1kvUVq0zEtGo9teEPeAMJwjlgIEY3Xp6qh0gesZTtpyxxN5YMB%2FTXxZZywc4nIA7dVshRz8GKG3yPFTFJvPkctLSDafxOYcb7gFiCRJaraZuk9X1x8ddImn1j8CGjsMHlXlESwXp0rKo%2B8L5K5j2587nRW49YaE3d5jKTO4l8E8sdejLlf1nCaVHVYjMpa9KNd2i51YPls4FwZEJrxrGZ9b0GKcIOimU%2F8GFuzXp5S%2FOrjltrOVmmIxEHIv1Njm8MbDiLtsfrDzBol477330u6OQzeFxyQIRHFCr8fm3mX7Wsp%2BrYd3XMRnxwarDOGzXHRDJqdO12sunh12gxwcccNDM5%2BYP6LCwcDaqTVBjzlhL%2FfWHmr3LGxs9l6mpmQ4Y7HfUR3inIzCL4XyFvXrHWGhVsBBR6wtcIOq4adYNAmNhRob0LlVEf2m4smu7p2sn4ezlwgTqftNF%2B5UiVmLG08WZAySVcTD%2BoYzCBjqkAToBjdk2j54GZxkMMpUrooYfH0OGdd4P3%2Bp0P3h7eXrOjXbaiXy6eGaG0lYPASJlRc%2Bfoxm9SwnCTWfs7wIipKnFER1GkX8YRyZZUIOsOjGlllylv6zWQiaUmwsLy57f%2BW1qH%2B3KLTxYeMplzlntLfjWt9scz8GsuXEw2sl8nlt74zcPitqX7GwBCB6kCoac35G0YMJD0UOXDXU%2Bfo1%2BneHSMNvr&X-Amz-Signature=38e8962ecb365af6e563fd98c7d6d8718bc8144cb457e42514f5f17be226748c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EA4VJJ5%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd2NAKRBPY9M0ya31DgHHV%2BJqP%2FeUbd3JGFbNDuO398wIhAOZ3PRc%2BoEJCAyKeNbxM7lcnzzJzEeaZiUG96iR93BtjKv8DCGEQABoMNjM3NDIzMTgzODA1Igxsz7mp0qidU7NB9Vwq3APhltzQeGgW098BqQhdu6hh1rWxsPeW8mnPyhZVdNiASj9p6wZhTkriQeBTOJGAOuXqIsJMAiPXyogyg%2FDgSaAav7%2BfhVPV1yJM0GSmu8pqqw6MND5WaAKUd5t4JcfQyDFvnjAyU%2B8LgN9nNNH9JQlxiz5kreyp1kvUVq0zEtGo9teEPeAMJwjlgIEY3Xp6qh0gesZTtpyxxN5YMB%2FTXxZZywc4nIA7dVshRz8GKG3yPFTFJvPkctLSDafxOYcb7gFiCRJaraZuk9X1x8ddImn1j8CGjsMHlXlESwXp0rKo%2B8L5K5j2587nRW49YaE3d5jKTO4l8E8sdejLlf1nCaVHVYjMpa9KNd2i51YPls4FwZEJrxrGZ9b0GKcIOimU%2F8GFuzXp5S%2FOrjltrOVmmIxEHIv1Njm8MbDiLtsfrDzBol477330u6OQzeFxyQIRHFCr8fm3mX7Wsp%2BrYd3XMRnxwarDOGzXHRDJqdO12sunh12gxwcccNDM5%2BYP6LCwcDaqTVBjzlhL%2FfWHmr3LGxs9l6mpmQ4Y7HfUR3inIzCL4XyFvXrHWGhVsBBR6wtcIOq4adYNAmNhRob0LlVEf2m4smu7p2sn4ezlwgTqftNF%2B5UiVmLG08WZAySVcTD%2BoYzCBjqkAToBjdk2j54GZxkMMpUrooYfH0OGdd4P3%2Bp0P3h7eXrOjXbaiXy6eGaG0lYPASJlRc%2Bfoxm9SwnCTWfs7wIipKnFER1GkX8YRyZZUIOsOjGlllylv6zWQiaUmwsLy57f%2BW1qH%2B3KLTxYeMplzlntLfjWt9scz8GsuXEw2sl8nlt74zcPitqX7GwBCB6kCoac35G0YMJD0UOXDXU%2Bfo1%2BneHSMNvr&X-Amz-Signature=4f8c3278dd168fb483b9d893c640e8daaed30e70919d6eced32a9139d851b852&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EA4VJJ5%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd2NAKRBPY9M0ya31DgHHV%2BJqP%2FeUbd3JGFbNDuO398wIhAOZ3PRc%2BoEJCAyKeNbxM7lcnzzJzEeaZiUG96iR93BtjKv8DCGEQABoMNjM3NDIzMTgzODA1Igxsz7mp0qidU7NB9Vwq3APhltzQeGgW098BqQhdu6hh1rWxsPeW8mnPyhZVdNiASj9p6wZhTkriQeBTOJGAOuXqIsJMAiPXyogyg%2FDgSaAav7%2BfhVPV1yJM0GSmu8pqqw6MND5WaAKUd5t4JcfQyDFvnjAyU%2B8LgN9nNNH9JQlxiz5kreyp1kvUVq0zEtGo9teEPeAMJwjlgIEY3Xp6qh0gesZTtpyxxN5YMB%2FTXxZZywc4nIA7dVshRz8GKG3yPFTFJvPkctLSDafxOYcb7gFiCRJaraZuk9X1x8ddImn1j8CGjsMHlXlESwXp0rKo%2B8L5K5j2587nRW49YaE3d5jKTO4l8E8sdejLlf1nCaVHVYjMpa9KNd2i51YPls4FwZEJrxrGZ9b0GKcIOimU%2F8GFuzXp5S%2FOrjltrOVmmIxEHIv1Njm8MbDiLtsfrDzBol477330u6OQzeFxyQIRHFCr8fm3mX7Wsp%2BrYd3XMRnxwarDOGzXHRDJqdO12sunh12gxwcccNDM5%2BYP6LCwcDaqTVBjzlhL%2FfWHmr3LGxs9l6mpmQ4Y7HfUR3inIzCL4XyFvXrHWGhVsBBR6wtcIOq4adYNAmNhRob0LlVEf2m4smu7p2sn4ezlwgTqftNF%2B5UiVmLG08WZAySVcTD%2BoYzCBjqkAToBjdk2j54GZxkMMpUrooYfH0OGdd4P3%2Bp0P3h7eXrOjXbaiXy6eGaG0lYPASJlRc%2Bfoxm9SwnCTWfs7wIipKnFER1GkX8YRyZZUIOsOjGlllylv6zWQiaUmwsLy57f%2BW1qH%2B3KLTxYeMplzlntLfjWt9scz8GsuXEw2sl8nlt74zcPitqX7GwBCB6kCoac35G0YMJD0UOXDXU%2Bfo1%2BneHSMNvr&X-Amz-Signature=80580d6ac6c4bfaeba071ed0d0a3c02663e961d6e455312b832f19fdfae4a9f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EA4VJJ5%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd2NAKRBPY9M0ya31DgHHV%2BJqP%2FeUbd3JGFbNDuO398wIhAOZ3PRc%2BoEJCAyKeNbxM7lcnzzJzEeaZiUG96iR93BtjKv8DCGEQABoMNjM3NDIzMTgzODA1Igxsz7mp0qidU7NB9Vwq3APhltzQeGgW098BqQhdu6hh1rWxsPeW8mnPyhZVdNiASj9p6wZhTkriQeBTOJGAOuXqIsJMAiPXyogyg%2FDgSaAav7%2BfhVPV1yJM0GSmu8pqqw6MND5WaAKUd5t4JcfQyDFvnjAyU%2B8LgN9nNNH9JQlxiz5kreyp1kvUVq0zEtGo9teEPeAMJwjlgIEY3Xp6qh0gesZTtpyxxN5YMB%2FTXxZZywc4nIA7dVshRz8GKG3yPFTFJvPkctLSDafxOYcb7gFiCRJaraZuk9X1x8ddImn1j8CGjsMHlXlESwXp0rKo%2B8L5K5j2587nRW49YaE3d5jKTO4l8E8sdejLlf1nCaVHVYjMpa9KNd2i51YPls4FwZEJrxrGZ9b0GKcIOimU%2F8GFuzXp5S%2FOrjltrOVmmIxEHIv1Njm8MbDiLtsfrDzBol477330u6OQzeFxyQIRHFCr8fm3mX7Wsp%2BrYd3XMRnxwarDOGzXHRDJqdO12sunh12gxwcccNDM5%2BYP6LCwcDaqTVBjzlhL%2FfWHmr3LGxs9l6mpmQ4Y7HfUR3inIzCL4XyFvXrHWGhVsBBR6wtcIOq4adYNAmNhRob0LlVEf2m4smu7p2sn4ezlwgTqftNF%2B5UiVmLG08WZAySVcTD%2BoYzCBjqkAToBjdk2j54GZxkMMpUrooYfH0OGdd4P3%2Bp0P3h7eXrOjXbaiXy6eGaG0lYPASJlRc%2Bfoxm9SwnCTWfs7wIipKnFER1GkX8YRyZZUIOsOjGlllylv6zWQiaUmwsLy57f%2BW1qH%2B3KLTxYeMplzlntLfjWt9scz8GsuXEw2sl8nlt74zcPitqX7GwBCB6kCoac35G0YMJD0UOXDXU%2Bfo1%2BneHSMNvr&X-Amz-Signature=8a14e2af59cf37f38ee65adf16b2ec8839f4a0903125a8266a082f7da3c4025b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
