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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPQC2P33%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCaAls904tMlIA585zktK8cu8WR97iT1uBRRTCLhJGi9QIgUELga%2BKNayjmH06UxpCiBryy5cBXbsQIh7uOAzkt6yoq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDOZdW9xNS1Y2K9IREircA7SXnRB2SooInVq2hP1bUDjfufS9qojh7SbtFC2l0BQzQI%2BRkjmSK8m3E8%2BKb0pqssSCmXKXiB6%2FBfKUhFAOlD4s0Lr4NJzzB2ucXXjsI97mMrTMQO51AXeg2g9Vyr4Acbf6wN%2FkW%2BBbxw%2FCiT%2Bm%2FPS8rKYDA5DgjjiRnYlRK%2FyLw%2BM%2BPNOi%2Bs81sccA2wuC6GHGLNxtv8nQ1dSmJhLsxzEkf0P0NrqX%2BqdR8gjyFF4iHfFA1nHrTT3JLAzg0SgJ%2Busp0DRWb8Tne%2FqaDu6ShloYfBuDaNzZ27fxLK5d5MI47VYFuqLcbusCfbGVbNKEixyxbIi1V7sN45vml2%2FbeHfGVKkslmlNnFrEeZFfcWVXgWE%2BKmf6Cj4M2OXNTTZnF2U5txLFrmucMJcqm0CS1Dh1RdRXbtBNf5V2LUZZTSckhTpH9feOwUfLuKTkWzyN0H2O5jw4VwNdefsojrOPC5vivR3aDLxypondGn51luKcMW1kDI86ZXQ5VmHjy5AxruF5zG8NGeU726s9QSSU4zfF7Qh1ej9EhJCQ6VE%2FdFoZgtjJXFqkLCB7g14CWPxZyOvxNlvBy6CE5%2FFSUjXrmftP9ISbHVNccxkztX30SpzXE8Q%2BJAczwW0r%2BNy7MKiHp8MGOqUBpBYfmfTfwI1e%2B7zZSVaAkXmnQ1a5ZQcT7ko5Kt6QYWHnJQzDMBWdnByN0k%2B5OroKPbiRZdMeMKftkPeKMWMaNLdGnyQmX1d5AHm9%2Fa0nwFvUMWh%2FG%2BPvcdfpK8%2FQfeYt2DkTJ2fC8%2FQNJaE%2BZvKbPNgwVaVcPrezIZU0C%2BxqaMIbar6Cu1NXWh2tLkpYMYP91JgkfxTbbLeLO7WENcd0shaSdlDk&X-Amz-Signature=f70614aa42ae252a53c8ff740d6d918bb1ba49ca843926109c7312a03c24f496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPQC2P33%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCaAls904tMlIA585zktK8cu8WR97iT1uBRRTCLhJGi9QIgUELga%2BKNayjmH06UxpCiBryy5cBXbsQIh7uOAzkt6yoq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDOZdW9xNS1Y2K9IREircA7SXnRB2SooInVq2hP1bUDjfufS9qojh7SbtFC2l0BQzQI%2BRkjmSK8m3E8%2BKb0pqssSCmXKXiB6%2FBfKUhFAOlD4s0Lr4NJzzB2ucXXjsI97mMrTMQO51AXeg2g9Vyr4Acbf6wN%2FkW%2BBbxw%2FCiT%2Bm%2FPS8rKYDA5DgjjiRnYlRK%2FyLw%2BM%2BPNOi%2Bs81sccA2wuC6GHGLNxtv8nQ1dSmJhLsxzEkf0P0NrqX%2BqdR8gjyFF4iHfFA1nHrTT3JLAzg0SgJ%2Busp0DRWb8Tne%2FqaDu6ShloYfBuDaNzZ27fxLK5d5MI47VYFuqLcbusCfbGVbNKEixyxbIi1V7sN45vml2%2FbeHfGVKkslmlNnFrEeZFfcWVXgWE%2BKmf6Cj4M2OXNTTZnF2U5txLFrmucMJcqm0CS1Dh1RdRXbtBNf5V2LUZZTSckhTpH9feOwUfLuKTkWzyN0H2O5jw4VwNdefsojrOPC5vivR3aDLxypondGn51luKcMW1kDI86ZXQ5VmHjy5AxruF5zG8NGeU726s9QSSU4zfF7Qh1ej9EhJCQ6VE%2FdFoZgtjJXFqkLCB7g14CWPxZyOvxNlvBy6CE5%2FFSUjXrmftP9ISbHVNccxkztX30SpzXE8Q%2BJAczwW0r%2BNy7MKiHp8MGOqUBpBYfmfTfwI1e%2B7zZSVaAkXmnQ1a5ZQcT7ko5Kt6QYWHnJQzDMBWdnByN0k%2B5OroKPbiRZdMeMKftkPeKMWMaNLdGnyQmX1d5AHm9%2Fa0nwFvUMWh%2FG%2BPvcdfpK8%2FQfeYt2DkTJ2fC8%2FQNJaE%2BZvKbPNgwVaVcPrezIZU0C%2BxqaMIbar6Cu1NXWh2tLkpYMYP91JgkfxTbbLeLO7WENcd0shaSdlDk&X-Amz-Signature=052a1679aca304e1972110e813f4a7c647067def73701e1a1fe1b833e1d64778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPQC2P33%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCaAls904tMlIA585zktK8cu8WR97iT1uBRRTCLhJGi9QIgUELga%2BKNayjmH06UxpCiBryy5cBXbsQIh7uOAzkt6yoq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDOZdW9xNS1Y2K9IREircA7SXnRB2SooInVq2hP1bUDjfufS9qojh7SbtFC2l0BQzQI%2BRkjmSK8m3E8%2BKb0pqssSCmXKXiB6%2FBfKUhFAOlD4s0Lr4NJzzB2ucXXjsI97mMrTMQO51AXeg2g9Vyr4Acbf6wN%2FkW%2BBbxw%2FCiT%2Bm%2FPS8rKYDA5DgjjiRnYlRK%2FyLw%2BM%2BPNOi%2Bs81sccA2wuC6GHGLNxtv8nQ1dSmJhLsxzEkf0P0NrqX%2BqdR8gjyFF4iHfFA1nHrTT3JLAzg0SgJ%2Busp0DRWb8Tne%2FqaDu6ShloYfBuDaNzZ27fxLK5d5MI47VYFuqLcbusCfbGVbNKEixyxbIi1V7sN45vml2%2FbeHfGVKkslmlNnFrEeZFfcWVXgWE%2BKmf6Cj4M2OXNTTZnF2U5txLFrmucMJcqm0CS1Dh1RdRXbtBNf5V2LUZZTSckhTpH9feOwUfLuKTkWzyN0H2O5jw4VwNdefsojrOPC5vivR3aDLxypondGn51luKcMW1kDI86ZXQ5VmHjy5AxruF5zG8NGeU726s9QSSU4zfF7Qh1ej9EhJCQ6VE%2FdFoZgtjJXFqkLCB7g14CWPxZyOvxNlvBy6CE5%2FFSUjXrmftP9ISbHVNccxkztX30SpzXE8Q%2BJAczwW0r%2BNy7MKiHp8MGOqUBpBYfmfTfwI1e%2B7zZSVaAkXmnQ1a5ZQcT7ko5Kt6QYWHnJQzDMBWdnByN0k%2B5OroKPbiRZdMeMKftkPeKMWMaNLdGnyQmX1d5AHm9%2Fa0nwFvUMWh%2FG%2BPvcdfpK8%2FQfeYt2DkTJ2fC8%2FQNJaE%2BZvKbPNgwVaVcPrezIZU0C%2BxqaMIbar6Cu1NXWh2tLkpYMYP91JgkfxTbbLeLO7WENcd0shaSdlDk&X-Amz-Signature=01644db96dae72046e1c5883fad5df27c5fe150db82c5ba7b15e7ad52137c261&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPQC2P33%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCaAls904tMlIA585zktK8cu8WR97iT1uBRRTCLhJGi9QIgUELga%2BKNayjmH06UxpCiBryy5cBXbsQIh7uOAzkt6yoq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDOZdW9xNS1Y2K9IREircA7SXnRB2SooInVq2hP1bUDjfufS9qojh7SbtFC2l0BQzQI%2BRkjmSK8m3E8%2BKb0pqssSCmXKXiB6%2FBfKUhFAOlD4s0Lr4NJzzB2ucXXjsI97mMrTMQO51AXeg2g9Vyr4Acbf6wN%2FkW%2BBbxw%2FCiT%2Bm%2FPS8rKYDA5DgjjiRnYlRK%2FyLw%2BM%2BPNOi%2Bs81sccA2wuC6GHGLNxtv8nQ1dSmJhLsxzEkf0P0NrqX%2BqdR8gjyFF4iHfFA1nHrTT3JLAzg0SgJ%2Busp0DRWb8Tne%2FqaDu6ShloYfBuDaNzZ27fxLK5d5MI47VYFuqLcbusCfbGVbNKEixyxbIi1V7sN45vml2%2FbeHfGVKkslmlNnFrEeZFfcWVXgWE%2BKmf6Cj4M2OXNTTZnF2U5txLFrmucMJcqm0CS1Dh1RdRXbtBNf5V2LUZZTSckhTpH9feOwUfLuKTkWzyN0H2O5jw4VwNdefsojrOPC5vivR3aDLxypondGn51luKcMW1kDI86ZXQ5VmHjy5AxruF5zG8NGeU726s9QSSU4zfF7Qh1ej9EhJCQ6VE%2FdFoZgtjJXFqkLCB7g14CWPxZyOvxNlvBy6CE5%2FFSUjXrmftP9ISbHVNccxkztX30SpzXE8Q%2BJAczwW0r%2BNy7MKiHp8MGOqUBpBYfmfTfwI1e%2B7zZSVaAkXmnQ1a5ZQcT7ko5Kt6QYWHnJQzDMBWdnByN0k%2B5OroKPbiRZdMeMKftkPeKMWMaNLdGnyQmX1d5AHm9%2Fa0nwFvUMWh%2FG%2BPvcdfpK8%2FQfeYt2DkTJ2fC8%2FQNJaE%2BZvKbPNgwVaVcPrezIZU0C%2BxqaMIbar6Cu1NXWh2tLkpYMYP91JgkfxTbbLeLO7WENcd0shaSdlDk&X-Amz-Signature=cc3b27640433f5b4fdb4dc012b49dd70d394c04fdde2d697791def0a2cd2bf46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPQC2P33%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCaAls904tMlIA585zktK8cu8WR97iT1uBRRTCLhJGi9QIgUELga%2BKNayjmH06UxpCiBryy5cBXbsQIh7uOAzkt6yoq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDOZdW9xNS1Y2K9IREircA7SXnRB2SooInVq2hP1bUDjfufS9qojh7SbtFC2l0BQzQI%2BRkjmSK8m3E8%2BKb0pqssSCmXKXiB6%2FBfKUhFAOlD4s0Lr4NJzzB2ucXXjsI97mMrTMQO51AXeg2g9Vyr4Acbf6wN%2FkW%2BBbxw%2FCiT%2Bm%2FPS8rKYDA5DgjjiRnYlRK%2FyLw%2BM%2BPNOi%2Bs81sccA2wuC6GHGLNxtv8nQ1dSmJhLsxzEkf0P0NrqX%2BqdR8gjyFF4iHfFA1nHrTT3JLAzg0SgJ%2Busp0DRWb8Tne%2FqaDu6ShloYfBuDaNzZ27fxLK5d5MI47VYFuqLcbusCfbGVbNKEixyxbIi1V7sN45vml2%2FbeHfGVKkslmlNnFrEeZFfcWVXgWE%2BKmf6Cj4M2OXNTTZnF2U5txLFrmucMJcqm0CS1Dh1RdRXbtBNf5V2LUZZTSckhTpH9feOwUfLuKTkWzyN0H2O5jw4VwNdefsojrOPC5vivR3aDLxypondGn51luKcMW1kDI86ZXQ5VmHjy5AxruF5zG8NGeU726s9QSSU4zfF7Qh1ej9EhJCQ6VE%2FdFoZgtjJXFqkLCB7g14CWPxZyOvxNlvBy6CE5%2FFSUjXrmftP9ISbHVNccxkztX30SpzXE8Q%2BJAczwW0r%2BNy7MKiHp8MGOqUBpBYfmfTfwI1e%2B7zZSVaAkXmnQ1a5ZQcT7ko5Kt6QYWHnJQzDMBWdnByN0k%2B5OroKPbiRZdMeMKftkPeKMWMaNLdGnyQmX1d5AHm9%2Fa0nwFvUMWh%2FG%2BPvcdfpK8%2FQfeYt2DkTJ2fC8%2FQNJaE%2BZvKbPNgwVaVcPrezIZU0C%2BxqaMIbar6Cu1NXWh2tLkpYMYP91JgkfxTbbLeLO7WENcd0shaSdlDk&X-Amz-Signature=92e8a55af96d3c679a1a919aedc514e212fc134216e0ab0bc36eb7bea13def21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
