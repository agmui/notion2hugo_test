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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T52T4ZKP%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVGXsQoNzVrCw7FgEeOxsilX3eMKlWuvGXaeM3fDcFDQIgFnK1nnSjr37WVrQWVGxQeKPK2bQZoL2BYF7n276ZcpQqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnxToyS%2BJqC1AVxryrcA5rFc1RXYouhqhNG1vG6vsTvBtXtxBEadURmbC45GKACqrhtJEJQphD5S%2B1rWBArqRGpOcj9C3CRyrE2LwczV0s6s5I19YHX%2BH8RbfRhWRgH975jNToz5jIYz5P9vZNFKEyUQ5FRGsQffJWC8ebPq7G%2BFSx5JKvskbRjlFJPLY3zHXBtp3QAeQBe5H4rHeT72UvCGxUQ7RqsHbscpzohigedD6OeliUMXMhbJcrC%2BRr7JO5yDg1v2EBU1SfvXHd%2BLmJqIK22cLukWoK3DYxtsgTJiIbylyAmIcKUpS6AlyASKC8F7edOyzmt64tvgwmLL2%2B6xuFamC7xwgvaIRdQf0JTjQG1LYlJDBYn6UP75qGhhJUrtQWMgjhUir8V3FFZ1OQQOUfPlptlFHIkKeASxM9cx2wMJhW4ECTRKYGrx6E9TXRb80kcxf%2FV8PeLg7LeiijVnEiPQ1uyYBLsJpCp37Irg86EAnfobWNX8%2FDEZjLBFceGlgYSZBfJWpATeBb9y9Ipm4RDOtN78uwJbvP%2BhCbda5yG1Qutoa9sagmYUwSvF0WK2wXdeVcHNo%2F24EfCJ5vXI03KvoYQFx3BvTEdvOAbY%2BD4oEnd11%2FOYt5rozByhLbRSHbnfboGqmw9MPH%2FtMMGOqUB7K16mZowyi4Wx6Cc83NTflzfldseXlJMB4%2B%2BH7ovfX7ZAjD1eJ7Q%2FKqjx%2BRVeiiHbwb%2BWbzGEZOT9jOxiDDk1TsA0NIehxjv8ZmoeuYrq9ftPP1cVsUcE75C5zkQ3qTNmGsDuVeAA6PI5Yu2agJ%2BsQaj3vSwfdtmk5p%2FNJXQyYDClhObFrO1U%2Bc8izASoFjg9hQZjJiz9r9F9apexKqQSxgzWnhI&X-Amz-Signature=75de19c1c00bb753c8d60680a62ffb6d3e9d7c3090f968c693c7d78a29cc474b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T52T4ZKP%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVGXsQoNzVrCw7FgEeOxsilX3eMKlWuvGXaeM3fDcFDQIgFnK1nnSjr37WVrQWVGxQeKPK2bQZoL2BYF7n276ZcpQqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnxToyS%2BJqC1AVxryrcA5rFc1RXYouhqhNG1vG6vsTvBtXtxBEadURmbC45GKACqrhtJEJQphD5S%2B1rWBArqRGpOcj9C3CRyrE2LwczV0s6s5I19YHX%2BH8RbfRhWRgH975jNToz5jIYz5P9vZNFKEyUQ5FRGsQffJWC8ebPq7G%2BFSx5JKvskbRjlFJPLY3zHXBtp3QAeQBe5H4rHeT72UvCGxUQ7RqsHbscpzohigedD6OeliUMXMhbJcrC%2BRr7JO5yDg1v2EBU1SfvXHd%2BLmJqIK22cLukWoK3DYxtsgTJiIbylyAmIcKUpS6AlyASKC8F7edOyzmt64tvgwmLL2%2B6xuFamC7xwgvaIRdQf0JTjQG1LYlJDBYn6UP75qGhhJUrtQWMgjhUir8V3FFZ1OQQOUfPlptlFHIkKeASxM9cx2wMJhW4ECTRKYGrx6E9TXRb80kcxf%2FV8PeLg7LeiijVnEiPQ1uyYBLsJpCp37Irg86EAnfobWNX8%2FDEZjLBFceGlgYSZBfJWpATeBb9y9Ipm4RDOtN78uwJbvP%2BhCbda5yG1Qutoa9sagmYUwSvF0WK2wXdeVcHNo%2F24EfCJ5vXI03KvoYQFx3BvTEdvOAbY%2BD4oEnd11%2FOYt5rozByhLbRSHbnfboGqmw9MPH%2FtMMGOqUB7K16mZowyi4Wx6Cc83NTflzfldseXlJMB4%2B%2BH7ovfX7ZAjD1eJ7Q%2FKqjx%2BRVeiiHbwb%2BWbzGEZOT9jOxiDDk1TsA0NIehxjv8ZmoeuYrq9ftPP1cVsUcE75C5zkQ3qTNmGsDuVeAA6PI5Yu2agJ%2BsQaj3vSwfdtmk5p%2FNJXQyYDClhObFrO1U%2Bc8izASoFjg9hQZjJiz9r9F9apexKqQSxgzWnhI&X-Amz-Signature=d753cd16889c228d1f9bf71ee539d55f66ac19069674bd46f3752c6460cf8634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T52T4ZKP%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVGXsQoNzVrCw7FgEeOxsilX3eMKlWuvGXaeM3fDcFDQIgFnK1nnSjr37WVrQWVGxQeKPK2bQZoL2BYF7n276ZcpQqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnxToyS%2BJqC1AVxryrcA5rFc1RXYouhqhNG1vG6vsTvBtXtxBEadURmbC45GKACqrhtJEJQphD5S%2B1rWBArqRGpOcj9C3CRyrE2LwczV0s6s5I19YHX%2BH8RbfRhWRgH975jNToz5jIYz5P9vZNFKEyUQ5FRGsQffJWC8ebPq7G%2BFSx5JKvskbRjlFJPLY3zHXBtp3QAeQBe5H4rHeT72UvCGxUQ7RqsHbscpzohigedD6OeliUMXMhbJcrC%2BRr7JO5yDg1v2EBU1SfvXHd%2BLmJqIK22cLukWoK3DYxtsgTJiIbylyAmIcKUpS6AlyASKC8F7edOyzmt64tvgwmLL2%2B6xuFamC7xwgvaIRdQf0JTjQG1LYlJDBYn6UP75qGhhJUrtQWMgjhUir8V3FFZ1OQQOUfPlptlFHIkKeASxM9cx2wMJhW4ECTRKYGrx6E9TXRb80kcxf%2FV8PeLg7LeiijVnEiPQ1uyYBLsJpCp37Irg86EAnfobWNX8%2FDEZjLBFceGlgYSZBfJWpATeBb9y9Ipm4RDOtN78uwJbvP%2BhCbda5yG1Qutoa9sagmYUwSvF0WK2wXdeVcHNo%2F24EfCJ5vXI03KvoYQFx3BvTEdvOAbY%2BD4oEnd11%2FOYt5rozByhLbRSHbnfboGqmw9MPH%2FtMMGOqUB7K16mZowyi4Wx6Cc83NTflzfldseXlJMB4%2B%2BH7ovfX7ZAjD1eJ7Q%2FKqjx%2BRVeiiHbwb%2BWbzGEZOT9jOxiDDk1TsA0NIehxjv8ZmoeuYrq9ftPP1cVsUcE75C5zkQ3qTNmGsDuVeAA6PI5Yu2agJ%2BsQaj3vSwfdtmk5p%2FNJXQyYDClhObFrO1U%2Bc8izASoFjg9hQZjJiz9r9F9apexKqQSxgzWnhI&X-Amz-Signature=d57a6281a24e0f9f8b466a88339b0b18706a2ba7b3f56e719d4608068e0cdb9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T52T4ZKP%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVGXsQoNzVrCw7FgEeOxsilX3eMKlWuvGXaeM3fDcFDQIgFnK1nnSjr37WVrQWVGxQeKPK2bQZoL2BYF7n276ZcpQqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnxToyS%2BJqC1AVxryrcA5rFc1RXYouhqhNG1vG6vsTvBtXtxBEadURmbC45GKACqrhtJEJQphD5S%2B1rWBArqRGpOcj9C3CRyrE2LwczV0s6s5I19YHX%2BH8RbfRhWRgH975jNToz5jIYz5P9vZNFKEyUQ5FRGsQffJWC8ebPq7G%2BFSx5JKvskbRjlFJPLY3zHXBtp3QAeQBe5H4rHeT72UvCGxUQ7RqsHbscpzohigedD6OeliUMXMhbJcrC%2BRr7JO5yDg1v2EBU1SfvXHd%2BLmJqIK22cLukWoK3DYxtsgTJiIbylyAmIcKUpS6AlyASKC8F7edOyzmt64tvgwmLL2%2B6xuFamC7xwgvaIRdQf0JTjQG1LYlJDBYn6UP75qGhhJUrtQWMgjhUir8V3FFZ1OQQOUfPlptlFHIkKeASxM9cx2wMJhW4ECTRKYGrx6E9TXRb80kcxf%2FV8PeLg7LeiijVnEiPQ1uyYBLsJpCp37Irg86EAnfobWNX8%2FDEZjLBFceGlgYSZBfJWpATeBb9y9Ipm4RDOtN78uwJbvP%2BhCbda5yG1Qutoa9sagmYUwSvF0WK2wXdeVcHNo%2F24EfCJ5vXI03KvoYQFx3BvTEdvOAbY%2BD4oEnd11%2FOYt5rozByhLbRSHbnfboGqmw9MPH%2FtMMGOqUB7K16mZowyi4Wx6Cc83NTflzfldseXlJMB4%2B%2BH7ovfX7ZAjD1eJ7Q%2FKqjx%2BRVeiiHbwb%2BWbzGEZOT9jOxiDDk1TsA0NIehxjv8ZmoeuYrq9ftPP1cVsUcE75C5zkQ3qTNmGsDuVeAA6PI5Yu2agJ%2BsQaj3vSwfdtmk5p%2FNJXQyYDClhObFrO1U%2Bc8izASoFjg9hQZjJiz9r9F9apexKqQSxgzWnhI&X-Amz-Signature=320f00552564a092b63035b4e969cb91fe9f23ae90437481998f9eacc7762156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T52T4ZKP%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVGXsQoNzVrCw7FgEeOxsilX3eMKlWuvGXaeM3fDcFDQIgFnK1nnSjr37WVrQWVGxQeKPK2bQZoL2BYF7n276ZcpQqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnxToyS%2BJqC1AVxryrcA5rFc1RXYouhqhNG1vG6vsTvBtXtxBEadURmbC45GKACqrhtJEJQphD5S%2B1rWBArqRGpOcj9C3CRyrE2LwczV0s6s5I19YHX%2BH8RbfRhWRgH975jNToz5jIYz5P9vZNFKEyUQ5FRGsQffJWC8ebPq7G%2BFSx5JKvskbRjlFJPLY3zHXBtp3QAeQBe5H4rHeT72UvCGxUQ7RqsHbscpzohigedD6OeliUMXMhbJcrC%2BRr7JO5yDg1v2EBU1SfvXHd%2BLmJqIK22cLukWoK3DYxtsgTJiIbylyAmIcKUpS6AlyASKC8F7edOyzmt64tvgwmLL2%2B6xuFamC7xwgvaIRdQf0JTjQG1LYlJDBYn6UP75qGhhJUrtQWMgjhUir8V3FFZ1OQQOUfPlptlFHIkKeASxM9cx2wMJhW4ECTRKYGrx6E9TXRb80kcxf%2FV8PeLg7LeiijVnEiPQ1uyYBLsJpCp37Irg86EAnfobWNX8%2FDEZjLBFceGlgYSZBfJWpATeBb9y9Ipm4RDOtN78uwJbvP%2BhCbda5yG1Qutoa9sagmYUwSvF0WK2wXdeVcHNo%2F24EfCJ5vXI03KvoYQFx3BvTEdvOAbY%2BD4oEnd11%2FOYt5rozByhLbRSHbnfboGqmw9MPH%2FtMMGOqUB7K16mZowyi4Wx6Cc83NTflzfldseXlJMB4%2B%2BH7ovfX7ZAjD1eJ7Q%2FKqjx%2BRVeiiHbwb%2BWbzGEZOT9jOxiDDk1TsA0NIehxjv8ZmoeuYrq9ftPP1cVsUcE75C5zkQ3qTNmGsDuVeAA6PI5Yu2agJ%2BsQaj3vSwfdtmk5p%2FNJXQyYDClhObFrO1U%2Bc8izASoFjg9hQZjJiz9r9F9apexKqQSxgzWnhI&X-Amz-Signature=dfa2ad5821ce9d74fc44da0e4b7057e80b2eabfb44b396d0d13bfe75da131759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
