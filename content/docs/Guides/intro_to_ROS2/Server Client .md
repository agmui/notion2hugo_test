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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZRBH6AS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2xfTa4ew1LAGkZWSI6I11KhSFlhYgp2ZAFZhL4XHC4AiBwUiaeK8EGbh7feWICwLGNwb4MVovMjVmPcIB%2FgOanOyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPoIPYO8hq2nOB2jbKtwDAZg%2B4ORorhEyald9yFrjz9hsds4WB3EKZ5dgsPJeHT3PbF%2BEAR0z2SBBYCZK%2FzldgQXhGOICShvVjd3%2BNjCn9AsOlxpteRrQQqKLVPZ31Krr9deshOxbC0Nq2OlI6WZX6ydWBBqariXj3%2B0rthFHJvnay5QyTCOpuagmVD0XVC%2BtROJpY4N1gSpiLFhAWwZGYVSroAstNZQYhCExM77G%2B73LmeQ4UUSDa%2Bgfn8xLRim1ZFeU4kZ9iTUpQx%2FlVt9Pip0YG8bU8h%2FBKtfo%2BdmPTHLnNThyyuykaseYyPhkF6ciV7pHeExOtOFI0wqFHiF9yDK8f9MSjr8F9y6RjpTQENuthre46oAXcF8ZN8Pmu%2BmIzKercKTiMjrV1VrVh7jGFOiArPUwXBQV1VfCzC1pymyfsniMQFquYoosX00FEGDF3u8BryiohTeKZ7JzXl5Hzp02LmBh5XHJmINmMYNfhwTPlcJ0Qso6F%2BO3pBSS5OWdECDsxfeCeSpGcNJk%2FQ3BmnYfn%2FOVLs3WSgSayUekAQ%2BYUhsQOYTzX8pal2lG47vE8AOhIg4lxpP1%2BR2g13hkXuMJUcc%2BUO2ioNyn8oyCqOf8rBgK0ctsNSSCXv5KRsPSoVdXLRlO6p5tJrUwkrTiwQY6pgGXpCpz8uN2%2BPa9Llx%2FdEzObb%2FfgKzfQQiu5U3gzVPEs8dPeAV2tCVddVm3VkfTx28nJ0YwQzxNdgD6UKyBH1iq8Y7HXp%2B3Zr%2FrllmQ2YL7EKWk9rDdira%2Bf%2BHoRdzFVwTdHyum9akAYjK9GNuF%2FZvaROeWFvny%2B6DToXTX40hLYfC97IZ6hTWqy9I5a%2B21Or5f9PhyO4ZmSOvdsRn%2FiV16ShyaF9dI&X-Amz-Signature=b719cda961e31c7f70b476c25a1e62a2c5cc0c5128d0735b84a698b2d10a2cc5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZRBH6AS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2xfTa4ew1LAGkZWSI6I11KhSFlhYgp2ZAFZhL4XHC4AiBwUiaeK8EGbh7feWICwLGNwb4MVovMjVmPcIB%2FgOanOyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPoIPYO8hq2nOB2jbKtwDAZg%2B4ORorhEyald9yFrjz9hsds4WB3EKZ5dgsPJeHT3PbF%2BEAR0z2SBBYCZK%2FzldgQXhGOICShvVjd3%2BNjCn9AsOlxpteRrQQqKLVPZ31Krr9deshOxbC0Nq2OlI6WZX6ydWBBqariXj3%2B0rthFHJvnay5QyTCOpuagmVD0XVC%2BtROJpY4N1gSpiLFhAWwZGYVSroAstNZQYhCExM77G%2B73LmeQ4UUSDa%2Bgfn8xLRim1ZFeU4kZ9iTUpQx%2FlVt9Pip0YG8bU8h%2FBKtfo%2BdmPTHLnNThyyuykaseYyPhkF6ciV7pHeExOtOFI0wqFHiF9yDK8f9MSjr8F9y6RjpTQENuthre46oAXcF8ZN8Pmu%2BmIzKercKTiMjrV1VrVh7jGFOiArPUwXBQV1VfCzC1pymyfsniMQFquYoosX00FEGDF3u8BryiohTeKZ7JzXl5Hzp02LmBh5XHJmINmMYNfhwTPlcJ0Qso6F%2BO3pBSS5OWdECDsxfeCeSpGcNJk%2FQ3BmnYfn%2FOVLs3WSgSayUekAQ%2BYUhsQOYTzX8pal2lG47vE8AOhIg4lxpP1%2BR2g13hkXuMJUcc%2BUO2ioNyn8oyCqOf8rBgK0ctsNSSCXv5KRsPSoVdXLRlO6p5tJrUwkrTiwQY6pgGXpCpz8uN2%2BPa9Llx%2FdEzObb%2FfgKzfQQiu5U3gzVPEs8dPeAV2tCVddVm3VkfTx28nJ0YwQzxNdgD6UKyBH1iq8Y7HXp%2B3Zr%2FrllmQ2YL7EKWk9rDdira%2Bf%2BHoRdzFVwTdHyum9akAYjK9GNuF%2FZvaROeWFvny%2B6DToXTX40hLYfC97IZ6hTWqy9I5a%2B21Or5f9PhyO4ZmSOvdsRn%2FiV16ShyaF9dI&X-Amz-Signature=23c90b4fe70a4784cf513a218880d64322359228977a9091792bfc2d0212f188&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZRBH6AS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2xfTa4ew1LAGkZWSI6I11KhSFlhYgp2ZAFZhL4XHC4AiBwUiaeK8EGbh7feWICwLGNwb4MVovMjVmPcIB%2FgOanOyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPoIPYO8hq2nOB2jbKtwDAZg%2B4ORorhEyald9yFrjz9hsds4WB3EKZ5dgsPJeHT3PbF%2BEAR0z2SBBYCZK%2FzldgQXhGOICShvVjd3%2BNjCn9AsOlxpteRrQQqKLVPZ31Krr9deshOxbC0Nq2OlI6WZX6ydWBBqariXj3%2B0rthFHJvnay5QyTCOpuagmVD0XVC%2BtROJpY4N1gSpiLFhAWwZGYVSroAstNZQYhCExM77G%2B73LmeQ4UUSDa%2Bgfn8xLRim1ZFeU4kZ9iTUpQx%2FlVt9Pip0YG8bU8h%2FBKtfo%2BdmPTHLnNThyyuykaseYyPhkF6ciV7pHeExOtOFI0wqFHiF9yDK8f9MSjr8F9y6RjpTQENuthre46oAXcF8ZN8Pmu%2BmIzKercKTiMjrV1VrVh7jGFOiArPUwXBQV1VfCzC1pymyfsniMQFquYoosX00FEGDF3u8BryiohTeKZ7JzXl5Hzp02LmBh5XHJmINmMYNfhwTPlcJ0Qso6F%2BO3pBSS5OWdECDsxfeCeSpGcNJk%2FQ3BmnYfn%2FOVLs3WSgSayUekAQ%2BYUhsQOYTzX8pal2lG47vE8AOhIg4lxpP1%2BR2g13hkXuMJUcc%2BUO2ioNyn8oyCqOf8rBgK0ctsNSSCXv5KRsPSoVdXLRlO6p5tJrUwkrTiwQY6pgGXpCpz8uN2%2BPa9Llx%2FdEzObb%2FfgKzfQQiu5U3gzVPEs8dPeAV2tCVddVm3VkfTx28nJ0YwQzxNdgD6UKyBH1iq8Y7HXp%2B3Zr%2FrllmQ2YL7EKWk9rDdira%2Bf%2BHoRdzFVwTdHyum9akAYjK9GNuF%2FZvaROeWFvny%2B6DToXTX40hLYfC97IZ6hTWqy9I5a%2B21Or5f9PhyO4ZmSOvdsRn%2FiV16ShyaF9dI&X-Amz-Signature=b51e4ee935c61ad0545dd4adbc976d86923983a2a1c11701d472b5880d6afd30&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZRBH6AS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2xfTa4ew1LAGkZWSI6I11KhSFlhYgp2ZAFZhL4XHC4AiBwUiaeK8EGbh7feWICwLGNwb4MVovMjVmPcIB%2FgOanOyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPoIPYO8hq2nOB2jbKtwDAZg%2B4ORorhEyald9yFrjz9hsds4WB3EKZ5dgsPJeHT3PbF%2BEAR0z2SBBYCZK%2FzldgQXhGOICShvVjd3%2BNjCn9AsOlxpteRrQQqKLVPZ31Krr9deshOxbC0Nq2OlI6WZX6ydWBBqariXj3%2B0rthFHJvnay5QyTCOpuagmVD0XVC%2BtROJpY4N1gSpiLFhAWwZGYVSroAstNZQYhCExM77G%2B73LmeQ4UUSDa%2Bgfn8xLRim1ZFeU4kZ9iTUpQx%2FlVt9Pip0YG8bU8h%2FBKtfo%2BdmPTHLnNThyyuykaseYyPhkF6ciV7pHeExOtOFI0wqFHiF9yDK8f9MSjr8F9y6RjpTQENuthre46oAXcF8ZN8Pmu%2BmIzKercKTiMjrV1VrVh7jGFOiArPUwXBQV1VfCzC1pymyfsniMQFquYoosX00FEGDF3u8BryiohTeKZ7JzXl5Hzp02LmBh5XHJmINmMYNfhwTPlcJ0Qso6F%2BO3pBSS5OWdECDsxfeCeSpGcNJk%2FQ3BmnYfn%2FOVLs3WSgSayUekAQ%2BYUhsQOYTzX8pal2lG47vE8AOhIg4lxpP1%2BR2g13hkXuMJUcc%2BUO2ioNyn8oyCqOf8rBgK0ctsNSSCXv5KRsPSoVdXLRlO6p5tJrUwkrTiwQY6pgGXpCpz8uN2%2BPa9Llx%2FdEzObb%2FfgKzfQQiu5U3gzVPEs8dPeAV2tCVddVm3VkfTx28nJ0YwQzxNdgD6UKyBH1iq8Y7HXp%2B3Zr%2FrllmQ2YL7EKWk9rDdira%2Bf%2BHoRdzFVwTdHyum9akAYjK9GNuF%2FZvaROeWFvny%2B6DToXTX40hLYfC97IZ6hTWqy9I5a%2B21Or5f9PhyO4ZmSOvdsRn%2FiV16ShyaF9dI&X-Amz-Signature=354f06d6ab29f54dd384b71b73ac0aa14c76dad195353d4bf340473a3ee10343&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZRBH6AS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2xfTa4ew1LAGkZWSI6I11KhSFlhYgp2ZAFZhL4XHC4AiBwUiaeK8EGbh7feWICwLGNwb4MVovMjVmPcIB%2FgOanOyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPoIPYO8hq2nOB2jbKtwDAZg%2B4ORorhEyald9yFrjz9hsds4WB3EKZ5dgsPJeHT3PbF%2BEAR0z2SBBYCZK%2FzldgQXhGOICShvVjd3%2BNjCn9AsOlxpteRrQQqKLVPZ31Krr9deshOxbC0Nq2OlI6WZX6ydWBBqariXj3%2B0rthFHJvnay5QyTCOpuagmVD0XVC%2BtROJpY4N1gSpiLFhAWwZGYVSroAstNZQYhCExM77G%2B73LmeQ4UUSDa%2Bgfn8xLRim1ZFeU4kZ9iTUpQx%2FlVt9Pip0YG8bU8h%2FBKtfo%2BdmPTHLnNThyyuykaseYyPhkF6ciV7pHeExOtOFI0wqFHiF9yDK8f9MSjr8F9y6RjpTQENuthre46oAXcF8ZN8Pmu%2BmIzKercKTiMjrV1VrVh7jGFOiArPUwXBQV1VfCzC1pymyfsniMQFquYoosX00FEGDF3u8BryiohTeKZ7JzXl5Hzp02LmBh5XHJmINmMYNfhwTPlcJ0Qso6F%2BO3pBSS5OWdECDsxfeCeSpGcNJk%2FQ3BmnYfn%2FOVLs3WSgSayUekAQ%2BYUhsQOYTzX8pal2lG47vE8AOhIg4lxpP1%2BR2g13hkXuMJUcc%2BUO2ioNyn8oyCqOf8rBgK0ctsNSSCXv5KRsPSoVdXLRlO6p5tJrUwkrTiwQY6pgGXpCpz8uN2%2BPa9Llx%2FdEzObb%2FfgKzfQQiu5U3gzVPEs8dPeAV2tCVddVm3VkfTx28nJ0YwQzxNdgD6UKyBH1iq8Y7HXp%2B3Zr%2FrllmQ2YL7EKWk9rDdira%2Bf%2BHoRdzFVwTdHyum9akAYjK9GNuF%2FZvaROeWFvny%2B6DToXTX40hLYfC97IZ6hTWqy9I5a%2B21Or5f9PhyO4ZmSOvdsRn%2FiV16ShyaF9dI&X-Amz-Signature=76bb8f97dbb38bcca78b511e07f35355572bfaf74206c2dea71cccb21fd91ec3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
