---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634BTAUZN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIE%2FWyhVB1mJTgGQgSMDZwTvbjTtHISKespJ0iZmhWNxLAiB9e2McFJa8rCTnGQn3F5NGwRm3fcwgS5kbPOh5zSvc9ir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMmrY%2BBg7arxez9wjgKtwDfblJlVCNoVSSJHYaq8vIXFkcYvjklM5f6GQBWEp%2F2TvetApJcPqrWZlyPNLjlJN85OjgfGSKQQt5cKkSXDAvQoSIWRIORWHFDEJLGTVJ1%2Bn274fXZ04xuII0SRLwi53S6zSpTwgtjlLuOGyI9Ll5wX0Cn1rvL6Nmt8yyvyFK0XT7t2BmlHjzsbKav9cbGzTD1ujyTNe%2FIPjCC8kowJHKXShQdKoXrUEqY3E1i%2FaLoMjKs7oi44%2BC76yQHJaN6vsJEAZMYQdxAPGx0OON6VO6FcovOmiJUvHAw7fhAraQUp%2B%2Fsw8VizV%2Fk2cqctf9ZQXjZOwKE4iZmxS8G8V24%2F1gj3NhME3T4OKEukZctTK3jqFK74Olxt0oNJbk4KS0fzRq%2BEypZBofuWMZIfqcJlemW9xOI67ZjsXPKDZoB%2BGAUJf4mKAsX6rCCwAJH9cd1v1YvFyUT5qJsewUNaAiGqAIrfvaRf6blnhyNj9TW8T%2BP0pbvK3U1V7%2BfKWp3OBZXs4csWduKMVuKPk%2BCwaq1ik0DNxd9DNAikgJG%2F11m1hFn2qhEFrD5ktKKAJoJb%2F2Ty%2FJIRbMUeJEQQsWFckiU4gYxSmZuvLfUcr8fSqAR8RVE1dnJlZ4KiYfm7MIR90w7p3ExAY6pgEHAuwM%2BpkYI7XvF%2FfpKPXDuKdlwWGKnuval%2F%2BH41fLx1ZtlF0NAJTnSO8gL6MGtQYVWJJJbJMoWbUbLIij5jnPQkvaheyfPQXadFEIUGTrMXUMMQZgGG2tFiz7%2BVTMX5YwBh1Kz5XvcYOP%2Ft2ruAJC4%2BZAE%2BhYASNYkxrrU%2BdLFdC%2BaV7wC7Yoselbm2GTOnro%2BUPho40q4Bi53iGRpHHirNcxpauG&X-Amz-Signature=66eb0e0578c5a8465fcd893e04035f9ee8c0e1d1230b921b1ea537ebc0310b8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634BTAUZN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIE%2FWyhVB1mJTgGQgSMDZwTvbjTtHISKespJ0iZmhWNxLAiB9e2McFJa8rCTnGQn3F5NGwRm3fcwgS5kbPOh5zSvc9ir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMmrY%2BBg7arxez9wjgKtwDfblJlVCNoVSSJHYaq8vIXFkcYvjklM5f6GQBWEp%2F2TvetApJcPqrWZlyPNLjlJN85OjgfGSKQQt5cKkSXDAvQoSIWRIORWHFDEJLGTVJ1%2Bn274fXZ04xuII0SRLwi53S6zSpTwgtjlLuOGyI9Ll5wX0Cn1rvL6Nmt8yyvyFK0XT7t2BmlHjzsbKav9cbGzTD1ujyTNe%2FIPjCC8kowJHKXShQdKoXrUEqY3E1i%2FaLoMjKs7oi44%2BC76yQHJaN6vsJEAZMYQdxAPGx0OON6VO6FcovOmiJUvHAw7fhAraQUp%2B%2Fsw8VizV%2Fk2cqctf9ZQXjZOwKE4iZmxS8G8V24%2F1gj3NhME3T4OKEukZctTK3jqFK74Olxt0oNJbk4KS0fzRq%2BEypZBofuWMZIfqcJlemW9xOI67ZjsXPKDZoB%2BGAUJf4mKAsX6rCCwAJH9cd1v1YvFyUT5qJsewUNaAiGqAIrfvaRf6blnhyNj9TW8T%2BP0pbvK3U1V7%2BfKWp3OBZXs4csWduKMVuKPk%2BCwaq1ik0DNxd9DNAikgJG%2F11m1hFn2qhEFrD5ktKKAJoJb%2F2Ty%2FJIRbMUeJEQQsWFckiU4gYxSmZuvLfUcr8fSqAR8RVE1dnJlZ4KiYfm7MIR90w7p3ExAY6pgEHAuwM%2BpkYI7XvF%2FfpKPXDuKdlwWGKnuval%2F%2BH41fLx1ZtlF0NAJTnSO8gL6MGtQYVWJJJbJMoWbUbLIij5jnPQkvaheyfPQXadFEIUGTrMXUMMQZgGG2tFiz7%2BVTMX5YwBh1Kz5XvcYOP%2Ft2ruAJC4%2BZAE%2BhYASNYkxrrU%2BdLFdC%2BaV7wC7Yoselbm2GTOnro%2BUPho40q4Bi53iGRpHHirNcxpauG&X-Amz-Signature=4bc2a114dfbd202dda60a3ecb9f74d4b9bf274ce95a15e6ab9d9237b32974952&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634BTAUZN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIE%2FWyhVB1mJTgGQgSMDZwTvbjTtHISKespJ0iZmhWNxLAiB9e2McFJa8rCTnGQn3F5NGwRm3fcwgS5kbPOh5zSvc9ir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMmrY%2BBg7arxez9wjgKtwDfblJlVCNoVSSJHYaq8vIXFkcYvjklM5f6GQBWEp%2F2TvetApJcPqrWZlyPNLjlJN85OjgfGSKQQt5cKkSXDAvQoSIWRIORWHFDEJLGTVJ1%2Bn274fXZ04xuII0SRLwi53S6zSpTwgtjlLuOGyI9Ll5wX0Cn1rvL6Nmt8yyvyFK0XT7t2BmlHjzsbKav9cbGzTD1ujyTNe%2FIPjCC8kowJHKXShQdKoXrUEqY3E1i%2FaLoMjKs7oi44%2BC76yQHJaN6vsJEAZMYQdxAPGx0OON6VO6FcovOmiJUvHAw7fhAraQUp%2B%2Fsw8VizV%2Fk2cqctf9ZQXjZOwKE4iZmxS8G8V24%2F1gj3NhME3T4OKEukZctTK3jqFK74Olxt0oNJbk4KS0fzRq%2BEypZBofuWMZIfqcJlemW9xOI67ZjsXPKDZoB%2BGAUJf4mKAsX6rCCwAJH9cd1v1YvFyUT5qJsewUNaAiGqAIrfvaRf6blnhyNj9TW8T%2BP0pbvK3U1V7%2BfKWp3OBZXs4csWduKMVuKPk%2BCwaq1ik0DNxd9DNAikgJG%2F11m1hFn2qhEFrD5ktKKAJoJb%2F2Ty%2FJIRbMUeJEQQsWFckiU4gYxSmZuvLfUcr8fSqAR8RVE1dnJlZ4KiYfm7MIR90w7p3ExAY6pgEHAuwM%2BpkYI7XvF%2FfpKPXDuKdlwWGKnuval%2F%2BH41fLx1ZtlF0NAJTnSO8gL6MGtQYVWJJJbJMoWbUbLIij5jnPQkvaheyfPQXadFEIUGTrMXUMMQZgGG2tFiz7%2BVTMX5YwBh1Kz5XvcYOP%2Ft2ruAJC4%2BZAE%2BhYASNYkxrrU%2BdLFdC%2BaV7wC7Yoselbm2GTOnro%2BUPho40q4Bi53iGRpHHirNcxpauG&X-Amz-Signature=95c054b54aa80dcee6747670feb37add1a2d6c657a6ddd0836b74d5bb8cebe67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634BTAUZN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIE%2FWyhVB1mJTgGQgSMDZwTvbjTtHISKespJ0iZmhWNxLAiB9e2McFJa8rCTnGQn3F5NGwRm3fcwgS5kbPOh5zSvc9ir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMmrY%2BBg7arxez9wjgKtwDfblJlVCNoVSSJHYaq8vIXFkcYvjklM5f6GQBWEp%2F2TvetApJcPqrWZlyPNLjlJN85OjgfGSKQQt5cKkSXDAvQoSIWRIORWHFDEJLGTVJ1%2Bn274fXZ04xuII0SRLwi53S6zSpTwgtjlLuOGyI9Ll5wX0Cn1rvL6Nmt8yyvyFK0XT7t2BmlHjzsbKav9cbGzTD1ujyTNe%2FIPjCC8kowJHKXShQdKoXrUEqY3E1i%2FaLoMjKs7oi44%2BC76yQHJaN6vsJEAZMYQdxAPGx0OON6VO6FcovOmiJUvHAw7fhAraQUp%2B%2Fsw8VizV%2Fk2cqctf9ZQXjZOwKE4iZmxS8G8V24%2F1gj3NhME3T4OKEukZctTK3jqFK74Olxt0oNJbk4KS0fzRq%2BEypZBofuWMZIfqcJlemW9xOI67ZjsXPKDZoB%2BGAUJf4mKAsX6rCCwAJH9cd1v1YvFyUT5qJsewUNaAiGqAIrfvaRf6blnhyNj9TW8T%2BP0pbvK3U1V7%2BfKWp3OBZXs4csWduKMVuKPk%2BCwaq1ik0DNxd9DNAikgJG%2F11m1hFn2qhEFrD5ktKKAJoJb%2F2Ty%2FJIRbMUeJEQQsWFckiU4gYxSmZuvLfUcr8fSqAR8RVE1dnJlZ4KiYfm7MIR90w7p3ExAY6pgEHAuwM%2BpkYI7XvF%2FfpKPXDuKdlwWGKnuval%2F%2BH41fLx1ZtlF0NAJTnSO8gL6MGtQYVWJJJbJMoWbUbLIij5jnPQkvaheyfPQXadFEIUGTrMXUMMQZgGG2tFiz7%2BVTMX5YwBh1Kz5XvcYOP%2Ft2ruAJC4%2BZAE%2BhYASNYkxrrU%2BdLFdC%2BaV7wC7Yoselbm2GTOnro%2BUPho40q4Bi53iGRpHHirNcxpauG&X-Amz-Signature=76bb4c4f15dbf59dd04193d89464cc7b3c302ab50b6146ecf4f61fd15bf306b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634BTAUZN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIE%2FWyhVB1mJTgGQgSMDZwTvbjTtHISKespJ0iZmhWNxLAiB9e2McFJa8rCTnGQn3F5NGwRm3fcwgS5kbPOh5zSvc9ir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMmrY%2BBg7arxez9wjgKtwDfblJlVCNoVSSJHYaq8vIXFkcYvjklM5f6GQBWEp%2F2TvetApJcPqrWZlyPNLjlJN85OjgfGSKQQt5cKkSXDAvQoSIWRIORWHFDEJLGTVJ1%2Bn274fXZ04xuII0SRLwi53S6zSpTwgtjlLuOGyI9Ll5wX0Cn1rvL6Nmt8yyvyFK0XT7t2BmlHjzsbKav9cbGzTD1ujyTNe%2FIPjCC8kowJHKXShQdKoXrUEqY3E1i%2FaLoMjKs7oi44%2BC76yQHJaN6vsJEAZMYQdxAPGx0OON6VO6FcovOmiJUvHAw7fhAraQUp%2B%2Fsw8VizV%2Fk2cqctf9ZQXjZOwKE4iZmxS8G8V24%2F1gj3NhME3T4OKEukZctTK3jqFK74Olxt0oNJbk4KS0fzRq%2BEypZBofuWMZIfqcJlemW9xOI67ZjsXPKDZoB%2BGAUJf4mKAsX6rCCwAJH9cd1v1YvFyUT5qJsewUNaAiGqAIrfvaRf6blnhyNj9TW8T%2BP0pbvK3U1V7%2BfKWp3OBZXs4csWduKMVuKPk%2BCwaq1ik0DNxd9DNAikgJG%2F11m1hFn2qhEFrD5ktKKAJoJb%2F2Ty%2FJIRbMUeJEQQsWFckiU4gYxSmZuvLfUcr8fSqAR8RVE1dnJlZ4KiYfm7MIR90w7p3ExAY6pgEHAuwM%2BpkYI7XvF%2FfpKPXDuKdlwWGKnuval%2F%2BH41fLx1ZtlF0NAJTnSO8gL6MGtQYVWJJJbJMoWbUbLIij5jnPQkvaheyfPQXadFEIUGTrMXUMMQZgGG2tFiz7%2BVTMX5YwBh1Kz5XvcYOP%2Ft2ruAJC4%2BZAE%2BhYASNYkxrrU%2BdLFdC%2BaV7wC7Yoselbm2GTOnro%2BUPho40q4Bi53iGRpHHirNcxpauG&X-Amz-Signature=459b4f3bfd8367d30c224215d627e7c5b09340d8e1ebc0d9ea70b79c3379a82b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
