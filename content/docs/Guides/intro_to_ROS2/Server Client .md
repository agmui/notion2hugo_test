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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KSYRYRZ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCrUggZSw8l5iDd6LMxgajC9ewnQzdA7ccETcFQuE9RtgIgL4jSulBA5JKXMakv4PTMoZzJG4dIXTICIk30HL2Ds6gq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDO603NoBrDqK8sLxvSrcA2dGsYXuKvUhCRM%2BYcwuyuAg1iSP%2FKqAFOVWTvZb6e6NHh5FbfoToTiTuI8tnVso99H%2FZkIPY75umt0MoT4gaNKIfdKEQ%2FzyuXKaZ2JY8uWuN%2FjIk8F0AzvniU4HMPupvcKgSLbITRLIV%2FDntd3yVQCJHSotm7rKKEISX%2Bg1ucWFWGi0MAEkyb8PaozA3ce9KIEH49sGLrB6ErrPrzvEUv%2BBY6P6pwEw1uwzDWk9vd5TnFakCQ0gc%2FoZbPwwKiWUczDBenj4JffxpnH08zC1BDdhqy0MHtWlWj3JmAl7edvnE01Yp9gdW8ovkRd2k0nF8xsR1338quXxDKCzZZ%2BDfGv5PLhobOhbjDXgVlI0EWpHwmlZ%2FMoCPZ4MdoO8%2FWRMLea9Io%2F6QhZFz%2BXHIplXMDb%2BIlNY%2FQPIq3C66CS8E%2B9syFZKAKk7OtibKsICmWOCwVwBq4FM90DWUOTJYYjr8M6XZkWbJCDOh%2B1kCt4rpJ0PxYRtkLJ0Kw3zMKK3yHPGlmd3yBzV0RellIGQ7%2FPnscKIdVRb82OM0CcuH7W4ACm%2BvhOTOETblsVSD9zkx%2BFjZ6Z1KO7G%2FVgLo%2FtRRwIauFt9vkan%2BYy7f22KFOwd8ev5hiAnN4p0DlClBJlhMLjK%2BMIGOqUBMi1BPNWCSY3OaPM7kXJTpyk4r8FPSHrUEthffaZLUBTpeBoNO14GZtKgldTYI122wmR8V%2B98XQ%2FJ%2Fe1PiAu0LTI%2BJOZkDNfh70lPdGZDbYh7MKpALXnRYiAgq1p7fgOOmhy1D5XJwUM9puEaLyVuNfx4Su%2BYTo46uW4LelVfPkOxzyDfbv4C6jrVZgK97BvhKoAOxCPdcvuRFGvRk0JKq20YYDXq&X-Amz-Signature=75b9acfe121e73074de9358276bef6ded2a06a3178028a1be5d0eadb81bf951f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KSYRYRZ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCrUggZSw8l5iDd6LMxgajC9ewnQzdA7ccETcFQuE9RtgIgL4jSulBA5JKXMakv4PTMoZzJG4dIXTICIk30HL2Ds6gq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDO603NoBrDqK8sLxvSrcA2dGsYXuKvUhCRM%2BYcwuyuAg1iSP%2FKqAFOVWTvZb6e6NHh5FbfoToTiTuI8tnVso99H%2FZkIPY75umt0MoT4gaNKIfdKEQ%2FzyuXKaZ2JY8uWuN%2FjIk8F0AzvniU4HMPupvcKgSLbITRLIV%2FDntd3yVQCJHSotm7rKKEISX%2Bg1ucWFWGi0MAEkyb8PaozA3ce9KIEH49sGLrB6ErrPrzvEUv%2BBY6P6pwEw1uwzDWk9vd5TnFakCQ0gc%2FoZbPwwKiWUczDBenj4JffxpnH08zC1BDdhqy0MHtWlWj3JmAl7edvnE01Yp9gdW8ovkRd2k0nF8xsR1338quXxDKCzZZ%2BDfGv5PLhobOhbjDXgVlI0EWpHwmlZ%2FMoCPZ4MdoO8%2FWRMLea9Io%2F6QhZFz%2BXHIplXMDb%2BIlNY%2FQPIq3C66CS8E%2B9syFZKAKk7OtibKsICmWOCwVwBq4FM90DWUOTJYYjr8M6XZkWbJCDOh%2B1kCt4rpJ0PxYRtkLJ0Kw3zMKK3yHPGlmd3yBzV0RellIGQ7%2FPnscKIdVRb82OM0CcuH7W4ACm%2BvhOTOETblsVSD9zkx%2BFjZ6Z1KO7G%2FVgLo%2FtRRwIauFt9vkan%2BYy7f22KFOwd8ev5hiAnN4p0DlClBJlhMLjK%2BMIGOqUBMi1BPNWCSY3OaPM7kXJTpyk4r8FPSHrUEthffaZLUBTpeBoNO14GZtKgldTYI122wmR8V%2B98XQ%2FJ%2Fe1PiAu0LTI%2BJOZkDNfh70lPdGZDbYh7MKpALXnRYiAgq1p7fgOOmhy1D5XJwUM9puEaLyVuNfx4Su%2BYTo46uW4LelVfPkOxzyDfbv4C6jrVZgK97BvhKoAOxCPdcvuRFGvRk0JKq20YYDXq&X-Amz-Signature=254e237d8f5ca06d9071bef553f7d547f8fa8c2a688dc26925a3fdfa6f38a708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KSYRYRZ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCrUggZSw8l5iDd6LMxgajC9ewnQzdA7ccETcFQuE9RtgIgL4jSulBA5JKXMakv4PTMoZzJG4dIXTICIk30HL2Ds6gq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDO603NoBrDqK8sLxvSrcA2dGsYXuKvUhCRM%2BYcwuyuAg1iSP%2FKqAFOVWTvZb6e6NHh5FbfoToTiTuI8tnVso99H%2FZkIPY75umt0MoT4gaNKIfdKEQ%2FzyuXKaZ2JY8uWuN%2FjIk8F0AzvniU4HMPupvcKgSLbITRLIV%2FDntd3yVQCJHSotm7rKKEISX%2Bg1ucWFWGi0MAEkyb8PaozA3ce9KIEH49sGLrB6ErrPrzvEUv%2BBY6P6pwEw1uwzDWk9vd5TnFakCQ0gc%2FoZbPwwKiWUczDBenj4JffxpnH08zC1BDdhqy0MHtWlWj3JmAl7edvnE01Yp9gdW8ovkRd2k0nF8xsR1338quXxDKCzZZ%2BDfGv5PLhobOhbjDXgVlI0EWpHwmlZ%2FMoCPZ4MdoO8%2FWRMLea9Io%2F6QhZFz%2BXHIplXMDb%2BIlNY%2FQPIq3C66CS8E%2B9syFZKAKk7OtibKsICmWOCwVwBq4FM90DWUOTJYYjr8M6XZkWbJCDOh%2B1kCt4rpJ0PxYRtkLJ0Kw3zMKK3yHPGlmd3yBzV0RellIGQ7%2FPnscKIdVRb82OM0CcuH7W4ACm%2BvhOTOETblsVSD9zkx%2BFjZ6Z1KO7G%2FVgLo%2FtRRwIauFt9vkan%2BYy7f22KFOwd8ev5hiAnN4p0DlClBJlhMLjK%2BMIGOqUBMi1BPNWCSY3OaPM7kXJTpyk4r8FPSHrUEthffaZLUBTpeBoNO14GZtKgldTYI122wmR8V%2B98XQ%2FJ%2Fe1PiAu0LTI%2BJOZkDNfh70lPdGZDbYh7MKpALXnRYiAgq1p7fgOOmhy1D5XJwUM9puEaLyVuNfx4Su%2BYTo46uW4LelVfPkOxzyDfbv4C6jrVZgK97BvhKoAOxCPdcvuRFGvRk0JKq20YYDXq&X-Amz-Signature=882f5891e6965b63fdde46f3ec26b1d41477059f063e9fab00b1044055ae2654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KSYRYRZ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCrUggZSw8l5iDd6LMxgajC9ewnQzdA7ccETcFQuE9RtgIgL4jSulBA5JKXMakv4PTMoZzJG4dIXTICIk30HL2Ds6gq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDO603NoBrDqK8sLxvSrcA2dGsYXuKvUhCRM%2BYcwuyuAg1iSP%2FKqAFOVWTvZb6e6NHh5FbfoToTiTuI8tnVso99H%2FZkIPY75umt0MoT4gaNKIfdKEQ%2FzyuXKaZ2JY8uWuN%2FjIk8F0AzvniU4HMPupvcKgSLbITRLIV%2FDntd3yVQCJHSotm7rKKEISX%2Bg1ucWFWGi0MAEkyb8PaozA3ce9KIEH49sGLrB6ErrPrzvEUv%2BBY6P6pwEw1uwzDWk9vd5TnFakCQ0gc%2FoZbPwwKiWUczDBenj4JffxpnH08zC1BDdhqy0MHtWlWj3JmAl7edvnE01Yp9gdW8ovkRd2k0nF8xsR1338quXxDKCzZZ%2BDfGv5PLhobOhbjDXgVlI0EWpHwmlZ%2FMoCPZ4MdoO8%2FWRMLea9Io%2F6QhZFz%2BXHIplXMDb%2BIlNY%2FQPIq3C66CS8E%2B9syFZKAKk7OtibKsICmWOCwVwBq4FM90DWUOTJYYjr8M6XZkWbJCDOh%2B1kCt4rpJ0PxYRtkLJ0Kw3zMKK3yHPGlmd3yBzV0RellIGQ7%2FPnscKIdVRb82OM0CcuH7W4ACm%2BvhOTOETblsVSD9zkx%2BFjZ6Z1KO7G%2FVgLo%2FtRRwIauFt9vkan%2BYy7f22KFOwd8ev5hiAnN4p0DlClBJlhMLjK%2BMIGOqUBMi1BPNWCSY3OaPM7kXJTpyk4r8FPSHrUEthffaZLUBTpeBoNO14GZtKgldTYI122wmR8V%2B98XQ%2FJ%2Fe1PiAu0LTI%2BJOZkDNfh70lPdGZDbYh7MKpALXnRYiAgq1p7fgOOmhy1D5XJwUM9puEaLyVuNfx4Su%2BYTo46uW4LelVfPkOxzyDfbv4C6jrVZgK97BvhKoAOxCPdcvuRFGvRk0JKq20YYDXq&X-Amz-Signature=06de9095d2c137a0dfc2bbbb0538d6fc241328423431be80e297e15a2f49d150&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KSYRYRZ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCrUggZSw8l5iDd6LMxgajC9ewnQzdA7ccETcFQuE9RtgIgL4jSulBA5JKXMakv4PTMoZzJG4dIXTICIk30HL2Ds6gq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDO603NoBrDqK8sLxvSrcA2dGsYXuKvUhCRM%2BYcwuyuAg1iSP%2FKqAFOVWTvZb6e6NHh5FbfoToTiTuI8tnVso99H%2FZkIPY75umt0MoT4gaNKIfdKEQ%2FzyuXKaZ2JY8uWuN%2FjIk8F0AzvniU4HMPupvcKgSLbITRLIV%2FDntd3yVQCJHSotm7rKKEISX%2Bg1ucWFWGi0MAEkyb8PaozA3ce9KIEH49sGLrB6ErrPrzvEUv%2BBY6P6pwEw1uwzDWk9vd5TnFakCQ0gc%2FoZbPwwKiWUczDBenj4JffxpnH08zC1BDdhqy0MHtWlWj3JmAl7edvnE01Yp9gdW8ovkRd2k0nF8xsR1338quXxDKCzZZ%2BDfGv5PLhobOhbjDXgVlI0EWpHwmlZ%2FMoCPZ4MdoO8%2FWRMLea9Io%2F6QhZFz%2BXHIplXMDb%2BIlNY%2FQPIq3C66CS8E%2B9syFZKAKk7OtibKsICmWOCwVwBq4FM90DWUOTJYYjr8M6XZkWbJCDOh%2B1kCt4rpJ0PxYRtkLJ0Kw3zMKK3yHPGlmd3yBzV0RellIGQ7%2FPnscKIdVRb82OM0CcuH7W4ACm%2BvhOTOETblsVSD9zkx%2BFjZ6Z1KO7G%2FVgLo%2FtRRwIauFt9vkan%2BYy7f22KFOwd8ev5hiAnN4p0DlClBJlhMLjK%2BMIGOqUBMi1BPNWCSY3OaPM7kXJTpyk4r8FPSHrUEthffaZLUBTpeBoNO14GZtKgldTYI122wmR8V%2B98XQ%2FJ%2Fe1PiAu0LTI%2BJOZkDNfh70lPdGZDbYh7MKpALXnRYiAgq1p7fgOOmhy1D5XJwUM9puEaLyVuNfx4Su%2BYTo46uW4LelVfPkOxzyDfbv4C6jrVZgK97BvhKoAOxCPdcvuRFGvRk0JKq20YYDXq&X-Amz-Signature=ae02078d7a5af2e4b7dd4efd963fdf18aad1966c6da5d723dc47f91c6dae83bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
