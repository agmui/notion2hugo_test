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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HMJVNK6%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDt41jdvYgdhpkVjzz8XWGZDhJlDT2JM5Trl0V7MIj4sAiEAvyQRHb1vZcgWkXVyqKO6dVzfzgdXeb6WEk2ktDtzMFcq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDFYZfTBYhHDXQ2SkKircAwKiS6b%2BsHmDQVjNJbcCDLH5FjGUuxoBrJ6Ud5eOn5iatHqfNlx9L3N2dP2hq%2B8FIrQnBHekWwRJETX3ourF98kuQwsQgpG24%2BUeoK8JEzSAJ3ehDLVhERhNYosu9GOK2LZHLGyKCYJsB5MXVyYjWht4tfLCbo9JFsZ2q9tJ9%2Bt%2Fj%2FzSqh%2FdnYGRTv7bmQMApmBvOuyRolxVnDz8CjbM9ztqbfCANU02C%2BSens0YLI7TyavypYUCMoBqDGQdWdH7cELXTP7unod7Q84DgI4T4lYVF%2F9yycrKYHIGVYvs1pEvxW29rLeCTn2t7LZEORSepT9k45rxNM83dfpqqX9%2FSYfYePNQUkDms1aQvpk0fbvwVOd%2BCE4eOo7IoWZeDAfLWK7BfKEhzy6CzMLyKs5ZQ5ZK4Aq%2FGco9C53sLob%2F0G%2BpGpN5%2BRxT670%2FWVxVVf4zz9aoGSmao1VEGymq%2FwXTLzqMx%2FScJOttap22AmR6a48PjkQD25io4VJhu5Xh424EZPSScBJnR%2BcyzHsTaRDMZN9Ac4kn6ffPBEbPzeWVqIoCcxTBjz7JuF9H9Bbl5goCslAkflQW93qMIbgbVXBeIvsIC8j8JplUG5As5NiA9kF1s%2Fo%2BpFYyG9LfI%2FtDMLqhu8AGOqUBlGm6hC56on8TUXPpYn46GTgc5RAbD%2F8UlaGIE7R4gTuSN8vHRNCS68y%2B3D5F3uDzOBdYxlL1G1Su8qRwHZUJ3VuzvocjHQ0EeuZ%2FxElf7dOC4Jk7tlqk5QqcHzN41W4z4OKTX7Fq6n7ifvLolAL7UjJK8lbFjfiRV8%2BHcCT532xwyTW3kCuNaJ%2FWLhVEfGgXIcHMatV1x13blrW3ecNVuiebVgig&X-Amz-Signature=b3b7e17a6cbc95735bb08f486e00f15544a7740528acdffe95dc98928aceea49&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HMJVNK6%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDt41jdvYgdhpkVjzz8XWGZDhJlDT2JM5Trl0V7MIj4sAiEAvyQRHb1vZcgWkXVyqKO6dVzfzgdXeb6WEk2ktDtzMFcq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDFYZfTBYhHDXQ2SkKircAwKiS6b%2BsHmDQVjNJbcCDLH5FjGUuxoBrJ6Ud5eOn5iatHqfNlx9L3N2dP2hq%2B8FIrQnBHekWwRJETX3ourF98kuQwsQgpG24%2BUeoK8JEzSAJ3ehDLVhERhNYosu9GOK2LZHLGyKCYJsB5MXVyYjWht4tfLCbo9JFsZ2q9tJ9%2Bt%2Fj%2FzSqh%2FdnYGRTv7bmQMApmBvOuyRolxVnDz8CjbM9ztqbfCANU02C%2BSens0YLI7TyavypYUCMoBqDGQdWdH7cELXTP7unod7Q84DgI4T4lYVF%2F9yycrKYHIGVYvs1pEvxW29rLeCTn2t7LZEORSepT9k45rxNM83dfpqqX9%2FSYfYePNQUkDms1aQvpk0fbvwVOd%2BCE4eOo7IoWZeDAfLWK7BfKEhzy6CzMLyKs5ZQ5ZK4Aq%2FGco9C53sLob%2F0G%2BpGpN5%2BRxT670%2FWVxVVf4zz9aoGSmao1VEGymq%2FwXTLzqMx%2FScJOttap22AmR6a48PjkQD25io4VJhu5Xh424EZPSScBJnR%2BcyzHsTaRDMZN9Ac4kn6ffPBEbPzeWVqIoCcxTBjz7JuF9H9Bbl5goCslAkflQW93qMIbgbVXBeIvsIC8j8JplUG5As5NiA9kF1s%2Fo%2BpFYyG9LfI%2FtDMLqhu8AGOqUBlGm6hC56on8TUXPpYn46GTgc5RAbD%2F8UlaGIE7R4gTuSN8vHRNCS68y%2B3D5F3uDzOBdYxlL1G1Su8qRwHZUJ3VuzvocjHQ0EeuZ%2FxElf7dOC4Jk7tlqk5QqcHzN41W4z4OKTX7Fq6n7ifvLolAL7UjJK8lbFjfiRV8%2BHcCT532xwyTW3kCuNaJ%2FWLhVEfGgXIcHMatV1x13blrW3ecNVuiebVgig&X-Amz-Signature=3256540cc08f756949d12d4ef5e85ae58b10757c9037ef858c28e338e630da64&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HMJVNK6%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDt41jdvYgdhpkVjzz8XWGZDhJlDT2JM5Trl0V7MIj4sAiEAvyQRHb1vZcgWkXVyqKO6dVzfzgdXeb6WEk2ktDtzMFcq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDFYZfTBYhHDXQ2SkKircAwKiS6b%2BsHmDQVjNJbcCDLH5FjGUuxoBrJ6Ud5eOn5iatHqfNlx9L3N2dP2hq%2B8FIrQnBHekWwRJETX3ourF98kuQwsQgpG24%2BUeoK8JEzSAJ3ehDLVhERhNYosu9GOK2LZHLGyKCYJsB5MXVyYjWht4tfLCbo9JFsZ2q9tJ9%2Bt%2Fj%2FzSqh%2FdnYGRTv7bmQMApmBvOuyRolxVnDz8CjbM9ztqbfCANU02C%2BSens0YLI7TyavypYUCMoBqDGQdWdH7cELXTP7unod7Q84DgI4T4lYVF%2F9yycrKYHIGVYvs1pEvxW29rLeCTn2t7LZEORSepT9k45rxNM83dfpqqX9%2FSYfYePNQUkDms1aQvpk0fbvwVOd%2BCE4eOo7IoWZeDAfLWK7BfKEhzy6CzMLyKs5ZQ5ZK4Aq%2FGco9C53sLob%2F0G%2BpGpN5%2BRxT670%2FWVxVVf4zz9aoGSmao1VEGymq%2FwXTLzqMx%2FScJOttap22AmR6a48PjkQD25io4VJhu5Xh424EZPSScBJnR%2BcyzHsTaRDMZN9Ac4kn6ffPBEbPzeWVqIoCcxTBjz7JuF9H9Bbl5goCslAkflQW93qMIbgbVXBeIvsIC8j8JplUG5As5NiA9kF1s%2Fo%2BpFYyG9LfI%2FtDMLqhu8AGOqUBlGm6hC56on8TUXPpYn46GTgc5RAbD%2F8UlaGIE7R4gTuSN8vHRNCS68y%2B3D5F3uDzOBdYxlL1G1Su8qRwHZUJ3VuzvocjHQ0EeuZ%2FxElf7dOC4Jk7tlqk5QqcHzN41W4z4OKTX7Fq6n7ifvLolAL7UjJK8lbFjfiRV8%2BHcCT532xwyTW3kCuNaJ%2FWLhVEfGgXIcHMatV1x13blrW3ecNVuiebVgig&X-Amz-Signature=95eae02b10bb3c7dd755a564b44db74ee5014b47f59f7d1f9231d5cd1bb39beb&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HMJVNK6%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDt41jdvYgdhpkVjzz8XWGZDhJlDT2JM5Trl0V7MIj4sAiEAvyQRHb1vZcgWkXVyqKO6dVzfzgdXeb6WEk2ktDtzMFcq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDFYZfTBYhHDXQ2SkKircAwKiS6b%2BsHmDQVjNJbcCDLH5FjGUuxoBrJ6Ud5eOn5iatHqfNlx9L3N2dP2hq%2B8FIrQnBHekWwRJETX3ourF98kuQwsQgpG24%2BUeoK8JEzSAJ3ehDLVhERhNYosu9GOK2LZHLGyKCYJsB5MXVyYjWht4tfLCbo9JFsZ2q9tJ9%2Bt%2Fj%2FzSqh%2FdnYGRTv7bmQMApmBvOuyRolxVnDz8CjbM9ztqbfCANU02C%2BSens0YLI7TyavypYUCMoBqDGQdWdH7cELXTP7unod7Q84DgI4T4lYVF%2F9yycrKYHIGVYvs1pEvxW29rLeCTn2t7LZEORSepT9k45rxNM83dfpqqX9%2FSYfYePNQUkDms1aQvpk0fbvwVOd%2BCE4eOo7IoWZeDAfLWK7BfKEhzy6CzMLyKs5ZQ5ZK4Aq%2FGco9C53sLob%2F0G%2BpGpN5%2BRxT670%2FWVxVVf4zz9aoGSmao1VEGymq%2FwXTLzqMx%2FScJOttap22AmR6a48PjkQD25io4VJhu5Xh424EZPSScBJnR%2BcyzHsTaRDMZN9Ac4kn6ffPBEbPzeWVqIoCcxTBjz7JuF9H9Bbl5goCslAkflQW93qMIbgbVXBeIvsIC8j8JplUG5As5NiA9kF1s%2Fo%2BpFYyG9LfI%2FtDMLqhu8AGOqUBlGm6hC56on8TUXPpYn46GTgc5RAbD%2F8UlaGIE7R4gTuSN8vHRNCS68y%2B3D5F3uDzOBdYxlL1G1Su8qRwHZUJ3VuzvocjHQ0EeuZ%2FxElf7dOC4Jk7tlqk5QqcHzN41W4z4OKTX7Fq6n7ifvLolAL7UjJK8lbFjfiRV8%2BHcCT532xwyTW3kCuNaJ%2FWLhVEfGgXIcHMatV1x13blrW3ecNVuiebVgig&X-Amz-Signature=c870d5297756b0eb00826b573b2c10bfe93cf44d2768a0a7d2aede9ffde432e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HMJVNK6%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDt41jdvYgdhpkVjzz8XWGZDhJlDT2JM5Trl0V7MIj4sAiEAvyQRHb1vZcgWkXVyqKO6dVzfzgdXeb6WEk2ktDtzMFcq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDFYZfTBYhHDXQ2SkKircAwKiS6b%2BsHmDQVjNJbcCDLH5FjGUuxoBrJ6Ud5eOn5iatHqfNlx9L3N2dP2hq%2B8FIrQnBHekWwRJETX3ourF98kuQwsQgpG24%2BUeoK8JEzSAJ3ehDLVhERhNYosu9GOK2LZHLGyKCYJsB5MXVyYjWht4tfLCbo9JFsZ2q9tJ9%2Bt%2Fj%2FzSqh%2FdnYGRTv7bmQMApmBvOuyRolxVnDz8CjbM9ztqbfCANU02C%2BSens0YLI7TyavypYUCMoBqDGQdWdH7cELXTP7unod7Q84DgI4T4lYVF%2F9yycrKYHIGVYvs1pEvxW29rLeCTn2t7LZEORSepT9k45rxNM83dfpqqX9%2FSYfYePNQUkDms1aQvpk0fbvwVOd%2BCE4eOo7IoWZeDAfLWK7BfKEhzy6CzMLyKs5ZQ5ZK4Aq%2FGco9C53sLob%2F0G%2BpGpN5%2BRxT670%2FWVxVVf4zz9aoGSmao1VEGymq%2FwXTLzqMx%2FScJOttap22AmR6a48PjkQD25io4VJhu5Xh424EZPSScBJnR%2BcyzHsTaRDMZN9Ac4kn6ffPBEbPzeWVqIoCcxTBjz7JuF9H9Bbl5goCslAkflQW93qMIbgbVXBeIvsIC8j8JplUG5As5NiA9kF1s%2Fo%2BpFYyG9LfI%2FtDMLqhu8AGOqUBlGm6hC56on8TUXPpYn46GTgc5RAbD%2F8UlaGIE7R4gTuSN8vHRNCS68y%2B3D5F3uDzOBdYxlL1G1Su8qRwHZUJ3VuzvocjHQ0EeuZ%2FxElf7dOC4Jk7tlqk5QqcHzN41W4z4OKTX7Fq6n7ifvLolAL7UjJK8lbFjfiRV8%2BHcCT532xwyTW3kCuNaJ%2FWLhVEfGgXIcHMatV1x13blrW3ecNVuiebVgig&X-Amz-Signature=6324c5a70914925433b78decb09abcb60f3830bcc74ae4fb2e6c89409c7d502c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
