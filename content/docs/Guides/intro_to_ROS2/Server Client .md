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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STIZSODV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICb3rk3HFxoh%2FxWTyqW3M1oL7XLt47k6Su42i%2BQJjvDCAiEA1LYoNYHDlCVQhXsJOiFMdOy0PVWvbNZdDKVGpp4t4LYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOnL9SyMC9tvI%2BHm0SrcA2oBrnOzHjohiWjW3GIiyGUYDJgnbdbq92YIiy3%2B0vhfTqo8Ky4XnWxWo8D8MXpvZznyyHf7pt9a6JXQ48Fz6XC5S4t7Nd%2B91yMdiCNhN568ScQmcZa4HHnIRWf5%2Fg9RJOOvT6q5uqE0BHz2c7MQQR5f19%2F7Bu8cxke%2FhYBkvlLtrlc3kwUe3l80YbVB%2FSq3f0rXZXX1rrd%2BMkQdUc53R0rrRZl3LYqVEFWGQzQCC5vphu1jL1%2BQTBcwRNXNQhCxjLzPM8GVLASKMOUaTm0OLB%2Fgtpmu94gNoxDV7tjGsD13ytf3qGeCZ1OlTJ1rAeD7mvGbgaJp6ojrblo98MnOWR4dmoR9GOwknz9QF%2FPh7qjIf%2BP0MINskQDw%2FT4CQV3f%2FVp9pxXFChIjtKl5Qt2refZ7wEJXVKOMJFW2zzbqej0O%2FhYQdvpN3rJN3bAABgAgucLgWP6Enz%2FsTfXgfpsKfTy8mS4fXYtWhxKlgU28DLiNKuVJ3UlBW28zrr3ug2ZtD7N5i2hdKH6rO%2BZTYVznxm4uPPoW5%2BMchUNPZj4DpTWO0Rcu46eNk3MMBELvMzcHI%2BdFVHRZGDl7Pnct6rD8EXIBpbuOlDIHXKdkFu0qCHKw4yJiH82yU6mH8F5gMJKrj8QGOqUBvnCNREhTPwi7rBNjR6BlEI2d4TxtjRtOys5yLbeXYffv5sRtXpLt8C%2B5KzZ3qsBiYHCdDLj3YfkUmZmcusqGO47cIMKwt8w5a1Qz9JtD3UpdqfoZGtW7KD5YepSepytwDR4W7%2FwNW9G9gStm%2Bp2Ta0g9sxK5bNoSl4VDA8yZ7k42a4dybOa18e8muQB8uvrktAwSxPM9QjCU0zKfyiigfJInyemJ&X-Amz-Signature=96eb558f883a1c4365157ed14b321690eebb43adaeb6a29ea49cd6e37c2e1e87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STIZSODV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICb3rk3HFxoh%2FxWTyqW3M1oL7XLt47k6Su42i%2BQJjvDCAiEA1LYoNYHDlCVQhXsJOiFMdOy0PVWvbNZdDKVGpp4t4LYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOnL9SyMC9tvI%2BHm0SrcA2oBrnOzHjohiWjW3GIiyGUYDJgnbdbq92YIiy3%2B0vhfTqo8Ky4XnWxWo8D8MXpvZznyyHf7pt9a6JXQ48Fz6XC5S4t7Nd%2B91yMdiCNhN568ScQmcZa4HHnIRWf5%2Fg9RJOOvT6q5uqE0BHz2c7MQQR5f19%2F7Bu8cxke%2FhYBkvlLtrlc3kwUe3l80YbVB%2FSq3f0rXZXX1rrd%2BMkQdUc53R0rrRZl3LYqVEFWGQzQCC5vphu1jL1%2BQTBcwRNXNQhCxjLzPM8GVLASKMOUaTm0OLB%2Fgtpmu94gNoxDV7tjGsD13ytf3qGeCZ1OlTJ1rAeD7mvGbgaJp6ojrblo98MnOWR4dmoR9GOwknz9QF%2FPh7qjIf%2BP0MINskQDw%2FT4CQV3f%2FVp9pxXFChIjtKl5Qt2refZ7wEJXVKOMJFW2zzbqej0O%2FhYQdvpN3rJN3bAABgAgucLgWP6Enz%2FsTfXgfpsKfTy8mS4fXYtWhxKlgU28DLiNKuVJ3UlBW28zrr3ug2ZtD7N5i2hdKH6rO%2BZTYVznxm4uPPoW5%2BMchUNPZj4DpTWO0Rcu46eNk3MMBELvMzcHI%2BdFVHRZGDl7Pnct6rD8EXIBpbuOlDIHXKdkFu0qCHKw4yJiH82yU6mH8F5gMJKrj8QGOqUBvnCNREhTPwi7rBNjR6BlEI2d4TxtjRtOys5yLbeXYffv5sRtXpLt8C%2B5KzZ3qsBiYHCdDLj3YfkUmZmcusqGO47cIMKwt8w5a1Qz9JtD3UpdqfoZGtW7KD5YepSepytwDR4W7%2FwNW9G9gStm%2Bp2Ta0g9sxK5bNoSl4VDA8yZ7k42a4dybOa18e8muQB8uvrktAwSxPM9QjCU0zKfyiigfJInyemJ&X-Amz-Signature=37b12e57fae6266fc92ac7e23c2ebb5d8567e87afcf80f653ae996750fc83c97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STIZSODV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICb3rk3HFxoh%2FxWTyqW3M1oL7XLt47k6Su42i%2BQJjvDCAiEA1LYoNYHDlCVQhXsJOiFMdOy0PVWvbNZdDKVGpp4t4LYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOnL9SyMC9tvI%2BHm0SrcA2oBrnOzHjohiWjW3GIiyGUYDJgnbdbq92YIiy3%2B0vhfTqo8Ky4XnWxWo8D8MXpvZznyyHf7pt9a6JXQ48Fz6XC5S4t7Nd%2B91yMdiCNhN568ScQmcZa4HHnIRWf5%2Fg9RJOOvT6q5uqE0BHz2c7MQQR5f19%2F7Bu8cxke%2FhYBkvlLtrlc3kwUe3l80YbVB%2FSq3f0rXZXX1rrd%2BMkQdUc53R0rrRZl3LYqVEFWGQzQCC5vphu1jL1%2BQTBcwRNXNQhCxjLzPM8GVLASKMOUaTm0OLB%2Fgtpmu94gNoxDV7tjGsD13ytf3qGeCZ1OlTJ1rAeD7mvGbgaJp6ojrblo98MnOWR4dmoR9GOwknz9QF%2FPh7qjIf%2BP0MINskQDw%2FT4CQV3f%2FVp9pxXFChIjtKl5Qt2refZ7wEJXVKOMJFW2zzbqej0O%2FhYQdvpN3rJN3bAABgAgucLgWP6Enz%2FsTfXgfpsKfTy8mS4fXYtWhxKlgU28DLiNKuVJ3UlBW28zrr3ug2ZtD7N5i2hdKH6rO%2BZTYVznxm4uPPoW5%2BMchUNPZj4DpTWO0Rcu46eNk3MMBELvMzcHI%2BdFVHRZGDl7Pnct6rD8EXIBpbuOlDIHXKdkFu0qCHKw4yJiH82yU6mH8F5gMJKrj8QGOqUBvnCNREhTPwi7rBNjR6BlEI2d4TxtjRtOys5yLbeXYffv5sRtXpLt8C%2B5KzZ3qsBiYHCdDLj3YfkUmZmcusqGO47cIMKwt8w5a1Qz9JtD3UpdqfoZGtW7KD5YepSepytwDR4W7%2FwNW9G9gStm%2Bp2Ta0g9sxK5bNoSl4VDA8yZ7k42a4dybOa18e8muQB8uvrktAwSxPM9QjCU0zKfyiigfJInyemJ&X-Amz-Signature=7ee74ad800b62d1e208daa023407ff9de0c10a7a35f866858406fd8a6cdd07b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STIZSODV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICb3rk3HFxoh%2FxWTyqW3M1oL7XLt47k6Su42i%2BQJjvDCAiEA1LYoNYHDlCVQhXsJOiFMdOy0PVWvbNZdDKVGpp4t4LYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOnL9SyMC9tvI%2BHm0SrcA2oBrnOzHjohiWjW3GIiyGUYDJgnbdbq92YIiy3%2B0vhfTqo8Ky4XnWxWo8D8MXpvZznyyHf7pt9a6JXQ48Fz6XC5S4t7Nd%2B91yMdiCNhN568ScQmcZa4HHnIRWf5%2Fg9RJOOvT6q5uqE0BHz2c7MQQR5f19%2F7Bu8cxke%2FhYBkvlLtrlc3kwUe3l80YbVB%2FSq3f0rXZXX1rrd%2BMkQdUc53R0rrRZl3LYqVEFWGQzQCC5vphu1jL1%2BQTBcwRNXNQhCxjLzPM8GVLASKMOUaTm0OLB%2Fgtpmu94gNoxDV7tjGsD13ytf3qGeCZ1OlTJ1rAeD7mvGbgaJp6ojrblo98MnOWR4dmoR9GOwknz9QF%2FPh7qjIf%2BP0MINskQDw%2FT4CQV3f%2FVp9pxXFChIjtKl5Qt2refZ7wEJXVKOMJFW2zzbqej0O%2FhYQdvpN3rJN3bAABgAgucLgWP6Enz%2FsTfXgfpsKfTy8mS4fXYtWhxKlgU28DLiNKuVJ3UlBW28zrr3ug2ZtD7N5i2hdKH6rO%2BZTYVznxm4uPPoW5%2BMchUNPZj4DpTWO0Rcu46eNk3MMBELvMzcHI%2BdFVHRZGDl7Pnct6rD8EXIBpbuOlDIHXKdkFu0qCHKw4yJiH82yU6mH8F5gMJKrj8QGOqUBvnCNREhTPwi7rBNjR6BlEI2d4TxtjRtOys5yLbeXYffv5sRtXpLt8C%2B5KzZ3qsBiYHCdDLj3YfkUmZmcusqGO47cIMKwt8w5a1Qz9JtD3UpdqfoZGtW7KD5YepSepytwDR4W7%2FwNW9G9gStm%2Bp2Ta0g9sxK5bNoSl4VDA8yZ7k42a4dybOa18e8muQB8uvrktAwSxPM9QjCU0zKfyiigfJInyemJ&X-Amz-Signature=9e86432041fb7d0204b95864a144e76ff103cfb88b2247575de953eeca6639ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STIZSODV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICb3rk3HFxoh%2FxWTyqW3M1oL7XLt47k6Su42i%2BQJjvDCAiEA1LYoNYHDlCVQhXsJOiFMdOy0PVWvbNZdDKVGpp4t4LYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOnL9SyMC9tvI%2BHm0SrcA2oBrnOzHjohiWjW3GIiyGUYDJgnbdbq92YIiy3%2B0vhfTqo8Ky4XnWxWo8D8MXpvZznyyHf7pt9a6JXQ48Fz6XC5S4t7Nd%2B91yMdiCNhN568ScQmcZa4HHnIRWf5%2Fg9RJOOvT6q5uqE0BHz2c7MQQR5f19%2F7Bu8cxke%2FhYBkvlLtrlc3kwUe3l80YbVB%2FSq3f0rXZXX1rrd%2BMkQdUc53R0rrRZl3LYqVEFWGQzQCC5vphu1jL1%2BQTBcwRNXNQhCxjLzPM8GVLASKMOUaTm0OLB%2Fgtpmu94gNoxDV7tjGsD13ytf3qGeCZ1OlTJ1rAeD7mvGbgaJp6ojrblo98MnOWR4dmoR9GOwknz9QF%2FPh7qjIf%2BP0MINskQDw%2FT4CQV3f%2FVp9pxXFChIjtKl5Qt2refZ7wEJXVKOMJFW2zzbqej0O%2FhYQdvpN3rJN3bAABgAgucLgWP6Enz%2FsTfXgfpsKfTy8mS4fXYtWhxKlgU28DLiNKuVJ3UlBW28zrr3ug2ZtD7N5i2hdKH6rO%2BZTYVznxm4uPPoW5%2BMchUNPZj4DpTWO0Rcu46eNk3MMBELvMzcHI%2BdFVHRZGDl7Pnct6rD8EXIBpbuOlDIHXKdkFu0qCHKw4yJiH82yU6mH8F5gMJKrj8QGOqUBvnCNREhTPwi7rBNjR6BlEI2d4TxtjRtOys5yLbeXYffv5sRtXpLt8C%2B5KzZ3qsBiYHCdDLj3YfkUmZmcusqGO47cIMKwt8w5a1Qz9JtD3UpdqfoZGtW7KD5YepSepytwDR4W7%2FwNW9G9gStm%2Bp2Ta0g9sxK5bNoSl4VDA8yZ7k42a4dybOa18e8muQB8uvrktAwSxPM9QjCU0zKfyiigfJInyemJ&X-Amz-Signature=a642b9e0904f0e5e8a2af3bad6fc0b665781a46fb1cf34decee52684f9051462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
