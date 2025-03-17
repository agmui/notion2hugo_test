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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ7ZIOIJ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2IX%2FnciXwG%2Bk36%2FvAduHUQwYG7bZg3rCiCGrfDXs7vAiAkF3jq4pbAF0R%2FBta1351YXMwr0T%2F3sL2rl0PMmu7q%2FSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMjyXZnsA92U6gcw7kKtwDyZW29cC5nW9AlZuiZEED55L9iAxN8VRjrcyKCvh2rXePuq5GsYRaA3r3WDOs034PcKXnbXDqNmzc6wCOTA%2B162bzVZRkxN%2B5QlM6rSjrtiEps7S6nodnJhiL%2BiixtjHtGf00pSbsXb2vNjrP8PaJ5HYA6BX8sJ%2F3folU2MC7LcCCTeOcrSyzgyzday%2FL0qfCPWk7J52FpSicisy8MDlOEYliircYi3L%2BABtUeBi4ka3vaDQRgWTaqO3BIS4ig3dUTqcXts2SQu%2F52GTDOEfmK9lJ6gxqkWpF0zUzbapfbvhNULPE1q2DJV%2FDl6ArJJCaCOnfAeIDha5JRlifRVAfP23Scl0y0U7wHTaZ%2BoN17khs8NNi%2FWbh0HwDJMhbXmBtIL0XDPrZuIvbOezFx8pDPyKznXU0AuAvd%2FfNBPPPliO4jHM11NfMEOCG7mLnyCjPGcFBepGZcgRKnONJRI%2BqH1hrONiZ2JtZyK3M2zstEx09kf7yylJ%2BnsYDcxgJgHarcrlDqWo4gDzy7zGgSkiyl4eBVT8X9RCcLq3wqn0e3nDgCkDE8PaFI71rU2o9urtJyKYVjrhh46xo81qTElCjGnHtjYwnasNvCszSJG1rvBwXf9IoDqTNbQaiBYEwvrzevgY6pgHnP7Wf74PSZwfegBuQws6VV1GtQxQwetGGkiBKI08xsH%2FFfNGdQaUkDGNdLCpXuU9%2BhY7%2B7idVUhoVXDC6Vpk%2FUEDGk5lXwEB9bS%2FUXNjNzo1LgDcG57nVdKIF5%2BDX5c%2Fuu27YxnTFqD6sL2FxDb74t83xEpbeycj3C2GeOPagqRyiUMxIlsOPCnL6sl8xUDOv5NLBQB9gKv2Rn16QMnI6hG%2BateKf&X-Amz-Signature=22e7ada5576204330bc088d62f026d1d0fd4825a2f26daa7c5ae0880ddeff7c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ7ZIOIJ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2IX%2FnciXwG%2Bk36%2FvAduHUQwYG7bZg3rCiCGrfDXs7vAiAkF3jq4pbAF0R%2FBta1351YXMwr0T%2F3sL2rl0PMmu7q%2FSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMjyXZnsA92U6gcw7kKtwDyZW29cC5nW9AlZuiZEED55L9iAxN8VRjrcyKCvh2rXePuq5GsYRaA3r3WDOs034PcKXnbXDqNmzc6wCOTA%2B162bzVZRkxN%2B5QlM6rSjrtiEps7S6nodnJhiL%2BiixtjHtGf00pSbsXb2vNjrP8PaJ5HYA6BX8sJ%2F3folU2MC7LcCCTeOcrSyzgyzday%2FL0qfCPWk7J52FpSicisy8MDlOEYliircYi3L%2BABtUeBi4ka3vaDQRgWTaqO3BIS4ig3dUTqcXts2SQu%2F52GTDOEfmK9lJ6gxqkWpF0zUzbapfbvhNULPE1q2DJV%2FDl6ArJJCaCOnfAeIDha5JRlifRVAfP23Scl0y0U7wHTaZ%2BoN17khs8NNi%2FWbh0HwDJMhbXmBtIL0XDPrZuIvbOezFx8pDPyKznXU0AuAvd%2FfNBPPPliO4jHM11NfMEOCG7mLnyCjPGcFBepGZcgRKnONJRI%2BqH1hrONiZ2JtZyK3M2zstEx09kf7yylJ%2BnsYDcxgJgHarcrlDqWo4gDzy7zGgSkiyl4eBVT8X9RCcLq3wqn0e3nDgCkDE8PaFI71rU2o9urtJyKYVjrhh46xo81qTElCjGnHtjYwnasNvCszSJG1rvBwXf9IoDqTNbQaiBYEwvrzevgY6pgHnP7Wf74PSZwfegBuQws6VV1GtQxQwetGGkiBKI08xsH%2FFfNGdQaUkDGNdLCpXuU9%2BhY7%2B7idVUhoVXDC6Vpk%2FUEDGk5lXwEB9bS%2FUXNjNzo1LgDcG57nVdKIF5%2BDX5c%2Fuu27YxnTFqD6sL2FxDb74t83xEpbeycj3C2GeOPagqRyiUMxIlsOPCnL6sl8xUDOv5NLBQB9gKv2Rn16QMnI6hG%2BateKf&X-Amz-Signature=e8e2b964a75063044bcd3a2b872b7500e3f987b732131f7db4c98a69111f3f98&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ7ZIOIJ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2IX%2FnciXwG%2Bk36%2FvAduHUQwYG7bZg3rCiCGrfDXs7vAiAkF3jq4pbAF0R%2FBta1351YXMwr0T%2F3sL2rl0PMmu7q%2FSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMjyXZnsA92U6gcw7kKtwDyZW29cC5nW9AlZuiZEED55L9iAxN8VRjrcyKCvh2rXePuq5GsYRaA3r3WDOs034PcKXnbXDqNmzc6wCOTA%2B162bzVZRkxN%2B5QlM6rSjrtiEps7S6nodnJhiL%2BiixtjHtGf00pSbsXb2vNjrP8PaJ5HYA6BX8sJ%2F3folU2MC7LcCCTeOcrSyzgyzday%2FL0qfCPWk7J52FpSicisy8MDlOEYliircYi3L%2BABtUeBi4ka3vaDQRgWTaqO3BIS4ig3dUTqcXts2SQu%2F52GTDOEfmK9lJ6gxqkWpF0zUzbapfbvhNULPE1q2DJV%2FDl6ArJJCaCOnfAeIDha5JRlifRVAfP23Scl0y0U7wHTaZ%2BoN17khs8NNi%2FWbh0HwDJMhbXmBtIL0XDPrZuIvbOezFx8pDPyKznXU0AuAvd%2FfNBPPPliO4jHM11NfMEOCG7mLnyCjPGcFBepGZcgRKnONJRI%2BqH1hrONiZ2JtZyK3M2zstEx09kf7yylJ%2BnsYDcxgJgHarcrlDqWo4gDzy7zGgSkiyl4eBVT8X9RCcLq3wqn0e3nDgCkDE8PaFI71rU2o9urtJyKYVjrhh46xo81qTElCjGnHtjYwnasNvCszSJG1rvBwXf9IoDqTNbQaiBYEwvrzevgY6pgHnP7Wf74PSZwfegBuQws6VV1GtQxQwetGGkiBKI08xsH%2FFfNGdQaUkDGNdLCpXuU9%2BhY7%2B7idVUhoVXDC6Vpk%2FUEDGk5lXwEB9bS%2FUXNjNzo1LgDcG57nVdKIF5%2BDX5c%2Fuu27YxnTFqD6sL2FxDb74t83xEpbeycj3C2GeOPagqRyiUMxIlsOPCnL6sl8xUDOv5NLBQB9gKv2Rn16QMnI6hG%2BateKf&X-Amz-Signature=71550f3c6d7cb16255b9a70fc7faef7cbf0b97c5c0ec3852cb258700428c413d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ7ZIOIJ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2IX%2FnciXwG%2Bk36%2FvAduHUQwYG7bZg3rCiCGrfDXs7vAiAkF3jq4pbAF0R%2FBta1351YXMwr0T%2F3sL2rl0PMmu7q%2FSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMjyXZnsA92U6gcw7kKtwDyZW29cC5nW9AlZuiZEED55L9iAxN8VRjrcyKCvh2rXePuq5GsYRaA3r3WDOs034PcKXnbXDqNmzc6wCOTA%2B162bzVZRkxN%2B5QlM6rSjrtiEps7S6nodnJhiL%2BiixtjHtGf00pSbsXb2vNjrP8PaJ5HYA6BX8sJ%2F3folU2MC7LcCCTeOcrSyzgyzday%2FL0qfCPWk7J52FpSicisy8MDlOEYliircYi3L%2BABtUeBi4ka3vaDQRgWTaqO3BIS4ig3dUTqcXts2SQu%2F52GTDOEfmK9lJ6gxqkWpF0zUzbapfbvhNULPE1q2DJV%2FDl6ArJJCaCOnfAeIDha5JRlifRVAfP23Scl0y0U7wHTaZ%2BoN17khs8NNi%2FWbh0HwDJMhbXmBtIL0XDPrZuIvbOezFx8pDPyKznXU0AuAvd%2FfNBPPPliO4jHM11NfMEOCG7mLnyCjPGcFBepGZcgRKnONJRI%2BqH1hrONiZ2JtZyK3M2zstEx09kf7yylJ%2BnsYDcxgJgHarcrlDqWo4gDzy7zGgSkiyl4eBVT8X9RCcLq3wqn0e3nDgCkDE8PaFI71rU2o9urtJyKYVjrhh46xo81qTElCjGnHtjYwnasNvCszSJG1rvBwXf9IoDqTNbQaiBYEwvrzevgY6pgHnP7Wf74PSZwfegBuQws6VV1GtQxQwetGGkiBKI08xsH%2FFfNGdQaUkDGNdLCpXuU9%2BhY7%2B7idVUhoVXDC6Vpk%2FUEDGk5lXwEB9bS%2FUXNjNzo1LgDcG57nVdKIF5%2BDX5c%2Fuu27YxnTFqD6sL2FxDb74t83xEpbeycj3C2GeOPagqRyiUMxIlsOPCnL6sl8xUDOv5NLBQB9gKv2Rn16QMnI6hG%2BateKf&X-Amz-Signature=9f8a0962e68ad075cb82775e51006535225d74fc1456b5ba833f7b3aead130bf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ7ZIOIJ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2IX%2FnciXwG%2Bk36%2FvAduHUQwYG7bZg3rCiCGrfDXs7vAiAkF3jq4pbAF0R%2FBta1351YXMwr0T%2F3sL2rl0PMmu7q%2FSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMjyXZnsA92U6gcw7kKtwDyZW29cC5nW9AlZuiZEED55L9iAxN8VRjrcyKCvh2rXePuq5GsYRaA3r3WDOs034PcKXnbXDqNmzc6wCOTA%2B162bzVZRkxN%2B5QlM6rSjrtiEps7S6nodnJhiL%2BiixtjHtGf00pSbsXb2vNjrP8PaJ5HYA6BX8sJ%2F3folU2MC7LcCCTeOcrSyzgyzday%2FL0qfCPWk7J52FpSicisy8MDlOEYliircYi3L%2BABtUeBi4ka3vaDQRgWTaqO3BIS4ig3dUTqcXts2SQu%2F52GTDOEfmK9lJ6gxqkWpF0zUzbapfbvhNULPE1q2DJV%2FDl6ArJJCaCOnfAeIDha5JRlifRVAfP23Scl0y0U7wHTaZ%2BoN17khs8NNi%2FWbh0HwDJMhbXmBtIL0XDPrZuIvbOezFx8pDPyKznXU0AuAvd%2FfNBPPPliO4jHM11NfMEOCG7mLnyCjPGcFBepGZcgRKnONJRI%2BqH1hrONiZ2JtZyK3M2zstEx09kf7yylJ%2BnsYDcxgJgHarcrlDqWo4gDzy7zGgSkiyl4eBVT8X9RCcLq3wqn0e3nDgCkDE8PaFI71rU2o9urtJyKYVjrhh46xo81qTElCjGnHtjYwnasNvCszSJG1rvBwXf9IoDqTNbQaiBYEwvrzevgY6pgHnP7Wf74PSZwfegBuQws6VV1GtQxQwetGGkiBKI08xsH%2FFfNGdQaUkDGNdLCpXuU9%2BhY7%2B7idVUhoVXDC6Vpk%2FUEDGk5lXwEB9bS%2FUXNjNzo1LgDcG57nVdKIF5%2BDX5c%2Fuu27YxnTFqD6sL2FxDb74t83xEpbeycj3C2GeOPagqRyiUMxIlsOPCnL6sl8xUDOv5NLBQB9gKv2Rn16QMnI6hG%2BateKf&X-Amz-Signature=8953d3e8d32f96eaa42296bf5d9580f43002e0b6e485efa20f5d00e1b6cd2ff6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
