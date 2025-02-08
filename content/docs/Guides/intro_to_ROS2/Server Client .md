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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3S2HTED%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIG85Iv%2BWq0tX%2BCjv6FNXrkTKeuinKi%2BOxjhGvTG5vsdqAiEAoT4zhLD6XQ4OlwBrk%2BrLy%2FKVpMoXJL%2FOqV1vVMHldTwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9yXU%2BKQ0GnKdYFSircAxZHom%2FToT5k9XOpYG4PJavHbfCcCOMY96hi2uXCJ4yqzZitPmoWshXM2hWnAYcLjOwsF4QBG0xVuhmUWY5Os8gtjHgxQJ4k5HmqOPnAYe1TVxCRKgmBRYzWU1NWZ%2Fd0dQ2sd7nTYsCJoo%2FWO%2FHZ5M2jlpO0MPlOZl8hr5PHqq5oQoEJPa0ZvVH%2BexabtSyo7AAtELNppdn5ORSi8h%2Fex0esk8Oxn6hhj2jQLRT0gWunx%2BtNznjlivZSP%2FUclYtqotx1%2Fe3NoWZBxq%2B8V35dp3WB%2FufSNv8G%2BTHZ8ktz4bmTmLckg1PUr7AjgzyC%2BPuZ89Bey%2BODMu72Q9%2FdZJMRw%2BHZ241dErpBXonFHF2xp%2FyCL9vgYWhdUJPY5n2bIdEp4WE1CywwdRaO83GaiW7PJQW5cIuMwxIAjLCYElI%2BFOtX9f6Kzu7zgNmwDkSYyhdyoqQ3drL4KzAVIFfOf8EXhRc1%2FelI6eAhunlV32JPj7Vrh0x326geWRekmOF1rYcBxe0TIvN81CJPL5l5860nWe0X3MfiAdRwctbs1YpkD4M8fFVPpvPE4NyNtl8roaOBxTzjC6CRKiW0ie%2FeT30r2ZCxS9pDMDBzP9cIJb1JAnLLDfcGAqXgRu2p%2FMoPMM7gnr0GOqUBfIWqBZneX8IlDrDDuI2peU8raKCh2Rk1g1Y3NdEZs50oaPRfnf7oHC%2B6bCbPNZqDR7bS9JLTH%2BSS06ARFtto6%2FMsRoMxyKpSZculRq%2F22rGz4G4A7EBiO%2FA1VwvFB2TPbMv0wrd%2BH4BMjZ8qymGinDhTe8ppRHGlJAwUWWZpnMCLR04umVEnSw86kqHchZwWQuro9G1KtF4kUAiTvs6Zbji%2BOEah&X-Amz-Signature=e91d2498286ebbc26080a7d0db61eec846ffeeca0de5edcb7725cc2e90a34a43&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3S2HTED%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIG85Iv%2BWq0tX%2BCjv6FNXrkTKeuinKi%2BOxjhGvTG5vsdqAiEAoT4zhLD6XQ4OlwBrk%2BrLy%2FKVpMoXJL%2FOqV1vVMHldTwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9yXU%2BKQ0GnKdYFSircAxZHom%2FToT5k9XOpYG4PJavHbfCcCOMY96hi2uXCJ4yqzZitPmoWshXM2hWnAYcLjOwsF4QBG0xVuhmUWY5Os8gtjHgxQJ4k5HmqOPnAYe1TVxCRKgmBRYzWU1NWZ%2Fd0dQ2sd7nTYsCJoo%2FWO%2FHZ5M2jlpO0MPlOZl8hr5PHqq5oQoEJPa0ZvVH%2BexabtSyo7AAtELNppdn5ORSi8h%2Fex0esk8Oxn6hhj2jQLRT0gWunx%2BtNznjlivZSP%2FUclYtqotx1%2Fe3NoWZBxq%2B8V35dp3WB%2FufSNv8G%2BTHZ8ktz4bmTmLckg1PUr7AjgzyC%2BPuZ89Bey%2BODMu72Q9%2FdZJMRw%2BHZ241dErpBXonFHF2xp%2FyCL9vgYWhdUJPY5n2bIdEp4WE1CywwdRaO83GaiW7PJQW5cIuMwxIAjLCYElI%2BFOtX9f6Kzu7zgNmwDkSYyhdyoqQ3drL4KzAVIFfOf8EXhRc1%2FelI6eAhunlV32JPj7Vrh0x326geWRekmOF1rYcBxe0TIvN81CJPL5l5860nWe0X3MfiAdRwctbs1YpkD4M8fFVPpvPE4NyNtl8roaOBxTzjC6CRKiW0ie%2FeT30r2ZCxS9pDMDBzP9cIJb1JAnLLDfcGAqXgRu2p%2FMoPMM7gnr0GOqUBfIWqBZneX8IlDrDDuI2peU8raKCh2Rk1g1Y3NdEZs50oaPRfnf7oHC%2B6bCbPNZqDR7bS9JLTH%2BSS06ARFtto6%2FMsRoMxyKpSZculRq%2F22rGz4G4A7EBiO%2FA1VwvFB2TPbMv0wrd%2BH4BMjZ8qymGinDhTe8ppRHGlJAwUWWZpnMCLR04umVEnSw86kqHchZwWQuro9G1KtF4kUAiTvs6Zbji%2BOEah&X-Amz-Signature=8939d049df08808126f3d64ce73d630926e6c5eeeb42743ae495882cf01cf114&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3S2HTED%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIG85Iv%2BWq0tX%2BCjv6FNXrkTKeuinKi%2BOxjhGvTG5vsdqAiEAoT4zhLD6XQ4OlwBrk%2BrLy%2FKVpMoXJL%2FOqV1vVMHldTwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9yXU%2BKQ0GnKdYFSircAxZHom%2FToT5k9XOpYG4PJavHbfCcCOMY96hi2uXCJ4yqzZitPmoWshXM2hWnAYcLjOwsF4QBG0xVuhmUWY5Os8gtjHgxQJ4k5HmqOPnAYe1TVxCRKgmBRYzWU1NWZ%2Fd0dQ2sd7nTYsCJoo%2FWO%2FHZ5M2jlpO0MPlOZl8hr5PHqq5oQoEJPa0ZvVH%2BexabtSyo7AAtELNppdn5ORSi8h%2Fex0esk8Oxn6hhj2jQLRT0gWunx%2BtNznjlivZSP%2FUclYtqotx1%2Fe3NoWZBxq%2B8V35dp3WB%2FufSNv8G%2BTHZ8ktz4bmTmLckg1PUr7AjgzyC%2BPuZ89Bey%2BODMu72Q9%2FdZJMRw%2BHZ241dErpBXonFHF2xp%2FyCL9vgYWhdUJPY5n2bIdEp4WE1CywwdRaO83GaiW7PJQW5cIuMwxIAjLCYElI%2BFOtX9f6Kzu7zgNmwDkSYyhdyoqQ3drL4KzAVIFfOf8EXhRc1%2FelI6eAhunlV32JPj7Vrh0x326geWRekmOF1rYcBxe0TIvN81CJPL5l5860nWe0X3MfiAdRwctbs1YpkD4M8fFVPpvPE4NyNtl8roaOBxTzjC6CRKiW0ie%2FeT30r2ZCxS9pDMDBzP9cIJb1JAnLLDfcGAqXgRu2p%2FMoPMM7gnr0GOqUBfIWqBZneX8IlDrDDuI2peU8raKCh2Rk1g1Y3NdEZs50oaPRfnf7oHC%2B6bCbPNZqDR7bS9JLTH%2BSS06ARFtto6%2FMsRoMxyKpSZculRq%2F22rGz4G4A7EBiO%2FA1VwvFB2TPbMv0wrd%2BH4BMjZ8qymGinDhTe8ppRHGlJAwUWWZpnMCLR04umVEnSw86kqHchZwWQuro9G1KtF4kUAiTvs6Zbji%2BOEah&X-Amz-Signature=c202ea294dbd4dc14522632bd5e91bc277d55c0db12da28a68463a04c2403389&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3S2HTED%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIG85Iv%2BWq0tX%2BCjv6FNXrkTKeuinKi%2BOxjhGvTG5vsdqAiEAoT4zhLD6XQ4OlwBrk%2BrLy%2FKVpMoXJL%2FOqV1vVMHldTwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9yXU%2BKQ0GnKdYFSircAxZHom%2FToT5k9XOpYG4PJavHbfCcCOMY96hi2uXCJ4yqzZitPmoWshXM2hWnAYcLjOwsF4QBG0xVuhmUWY5Os8gtjHgxQJ4k5HmqOPnAYe1TVxCRKgmBRYzWU1NWZ%2Fd0dQ2sd7nTYsCJoo%2FWO%2FHZ5M2jlpO0MPlOZl8hr5PHqq5oQoEJPa0ZvVH%2BexabtSyo7AAtELNppdn5ORSi8h%2Fex0esk8Oxn6hhj2jQLRT0gWunx%2BtNznjlivZSP%2FUclYtqotx1%2Fe3NoWZBxq%2B8V35dp3WB%2FufSNv8G%2BTHZ8ktz4bmTmLckg1PUr7AjgzyC%2BPuZ89Bey%2BODMu72Q9%2FdZJMRw%2BHZ241dErpBXonFHF2xp%2FyCL9vgYWhdUJPY5n2bIdEp4WE1CywwdRaO83GaiW7PJQW5cIuMwxIAjLCYElI%2BFOtX9f6Kzu7zgNmwDkSYyhdyoqQ3drL4KzAVIFfOf8EXhRc1%2FelI6eAhunlV32JPj7Vrh0x326geWRekmOF1rYcBxe0TIvN81CJPL5l5860nWe0X3MfiAdRwctbs1YpkD4M8fFVPpvPE4NyNtl8roaOBxTzjC6CRKiW0ie%2FeT30r2ZCxS9pDMDBzP9cIJb1JAnLLDfcGAqXgRu2p%2FMoPMM7gnr0GOqUBfIWqBZneX8IlDrDDuI2peU8raKCh2Rk1g1Y3NdEZs50oaPRfnf7oHC%2B6bCbPNZqDR7bS9JLTH%2BSS06ARFtto6%2FMsRoMxyKpSZculRq%2F22rGz4G4A7EBiO%2FA1VwvFB2TPbMv0wrd%2BH4BMjZ8qymGinDhTe8ppRHGlJAwUWWZpnMCLR04umVEnSw86kqHchZwWQuro9G1KtF4kUAiTvs6Zbji%2BOEah&X-Amz-Signature=9a89ace561fc8eeaf60a2a81a8bf841a020ae4699711422c7b2b2b6bf3704e0d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3S2HTED%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIG85Iv%2BWq0tX%2BCjv6FNXrkTKeuinKi%2BOxjhGvTG5vsdqAiEAoT4zhLD6XQ4OlwBrk%2BrLy%2FKVpMoXJL%2FOqV1vVMHldTwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9yXU%2BKQ0GnKdYFSircAxZHom%2FToT5k9XOpYG4PJavHbfCcCOMY96hi2uXCJ4yqzZitPmoWshXM2hWnAYcLjOwsF4QBG0xVuhmUWY5Os8gtjHgxQJ4k5HmqOPnAYe1TVxCRKgmBRYzWU1NWZ%2Fd0dQ2sd7nTYsCJoo%2FWO%2FHZ5M2jlpO0MPlOZl8hr5PHqq5oQoEJPa0ZvVH%2BexabtSyo7AAtELNppdn5ORSi8h%2Fex0esk8Oxn6hhj2jQLRT0gWunx%2BtNznjlivZSP%2FUclYtqotx1%2Fe3NoWZBxq%2B8V35dp3WB%2FufSNv8G%2BTHZ8ktz4bmTmLckg1PUr7AjgzyC%2BPuZ89Bey%2BODMu72Q9%2FdZJMRw%2BHZ241dErpBXonFHF2xp%2FyCL9vgYWhdUJPY5n2bIdEp4WE1CywwdRaO83GaiW7PJQW5cIuMwxIAjLCYElI%2BFOtX9f6Kzu7zgNmwDkSYyhdyoqQ3drL4KzAVIFfOf8EXhRc1%2FelI6eAhunlV32JPj7Vrh0x326geWRekmOF1rYcBxe0TIvN81CJPL5l5860nWe0X3MfiAdRwctbs1YpkD4M8fFVPpvPE4NyNtl8roaOBxTzjC6CRKiW0ie%2FeT30r2ZCxS9pDMDBzP9cIJb1JAnLLDfcGAqXgRu2p%2FMoPMM7gnr0GOqUBfIWqBZneX8IlDrDDuI2peU8raKCh2Rk1g1Y3NdEZs50oaPRfnf7oHC%2B6bCbPNZqDR7bS9JLTH%2BSS06ARFtto6%2FMsRoMxyKpSZculRq%2F22rGz4G4A7EBiO%2FA1VwvFB2TPbMv0wrd%2BH4BMjZ8qymGinDhTe8ppRHGlJAwUWWZpnMCLR04umVEnSw86kqHchZwWQuro9G1KtF4kUAiTvs6Zbji%2BOEah&X-Amz-Signature=574aefcd5052a4e2e6877428ff0fa2ed2e980f306fefae76bc52eb3927dec91d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
