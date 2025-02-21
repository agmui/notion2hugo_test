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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXQYY2HL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH8xnqXG9oJa7WcNQNNnRI%2FebIjvXOwLMlnO%2F9bUm%2FIQIgAc5KZt9%2Br2e21UMsZx91d3MCKVj9QuDq7dVtshy24dwqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8lBj7Qdka0CjPf5CrcAxN6mfV9SZTOGOlLgyHJIMjxMg4JkYGtvDrRypaaVU6%2FwUtMMdDTUltXFTEpRb%2BX9wJlDF7yzkCw3T%2BCptYdiP%2BWrbE35pXZb8CVOBiDVInsjGGHhyBC2Ss%2B8qiL%2B9eyty9sRtSEIpU%2BUoa8HHHzZ8LA3FklRKcDYZCvhlLUqhHAkQ21egJxjzYsARTo4DOpG9oBBeGapwBzVHjCKuGufAkIOUPK9Joeu6zgboNdjvmZfnYakV9Ovi1ADtf6VSBdmuClMI2mTWdw9upm3EATdfDYhLZwWJxtgCKs99iGWIkXvJCcPbYS9Mxa0QytiDqyURLzVbuvp4k2aZKtEepRShdDtIVqNXOZB%2FJcvFSwbxdE8ngtGZ6YGDcydMjZSAo8TyHkkSjeMPDcRpJ5DigixnIYfZdjP6riF9O%2BRNkQwLTuA%2FDnm9yBDtVen38gW3BAEuszuHweXL84lUghqb7jWaHP4j60d7gb6gD8lP8u09jTYRX8ajKepWgnQsZZqhSNq%2FIs0Sdi%2B3%2BOegiiVfBN9qfH3pCRXHPZt2xWQIXzq4qjwqg018bDJ%2F0SxDpZk3M8rOUp6DqBd2fxRm0tRt0MIf7E4yJlUPJ5mu6XGSxROutcQTAEE0eNjRsOZvHSMK3M370GOqUBx9cfd6TCNNj8tAne2x5yh93le0z%2B3fLzIH1o3JXZZellrP88ctfT13PBJpZmYPe3XUACSJ6T5DW2fBgWMEaeWG%2FNvc4JMZ0PWgXoLcbAUHHx8V38GyBup0N2t%2FIjUV1FkiDEcEhtJnXoot9eD1f9JP3809q8TnaPYLhQhtgRiYBhjvoKkTLW0U2XvCGy4IV05oIrAP18wO%2B5kIm0xcyAssmXBCqH&X-Amz-Signature=b79110b46af7c57420c18203a73b6d2becf905eb63c44b9847c1574cbf538afd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXQYY2HL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH8xnqXG9oJa7WcNQNNnRI%2FebIjvXOwLMlnO%2F9bUm%2FIQIgAc5KZt9%2Br2e21UMsZx91d3MCKVj9QuDq7dVtshy24dwqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8lBj7Qdka0CjPf5CrcAxN6mfV9SZTOGOlLgyHJIMjxMg4JkYGtvDrRypaaVU6%2FwUtMMdDTUltXFTEpRb%2BX9wJlDF7yzkCw3T%2BCptYdiP%2BWrbE35pXZb8CVOBiDVInsjGGHhyBC2Ss%2B8qiL%2B9eyty9sRtSEIpU%2BUoa8HHHzZ8LA3FklRKcDYZCvhlLUqhHAkQ21egJxjzYsARTo4DOpG9oBBeGapwBzVHjCKuGufAkIOUPK9Joeu6zgboNdjvmZfnYakV9Ovi1ADtf6VSBdmuClMI2mTWdw9upm3EATdfDYhLZwWJxtgCKs99iGWIkXvJCcPbYS9Mxa0QytiDqyURLzVbuvp4k2aZKtEepRShdDtIVqNXOZB%2FJcvFSwbxdE8ngtGZ6YGDcydMjZSAo8TyHkkSjeMPDcRpJ5DigixnIYfZdjP6riF9O%2BRNkQwLTuA%2FDnm9yBDtVen38gW3BAEuszuHweXL84lUghqb7jWaHP4j60d7gb6gD8lP8u09jTYRX8ajKepWgnQsZZqhSNq%2FIs0Sdi%2B3%2BOegiiVfBN9qfH3pCRXHPZt2xWQIXzq4qjwqg018bDJ%2F0SxDpZk3M8rOUp6DqBd2fxRm0tRt0MIf7E4yJlUPJ5mu6XGSxROutcQTAEE0eNjRsOZvHSMK3M370GOqUBx9cfd6TCNNj8tAne2x5yh93le0z%2B3fLzIH1o3JXZZellrP88ctfT13PBJpZmYPe3XUACSJ6T5DW2fBgWMEaeWG%2FNvc4JMZ0PWgXoLcbAUHHx8V38GyBup0N2t%2FIjUV1FkiDEcEhtJnXoot9eD1f9JP3809q8TnaPYLhQhtgRiYBhjvoKkTLW0U2XvCGy4IV05oIrAP18wO%2B5kIm0xcyAssmXBCqH&X-Amz-Signature=b6e9c2914c3c3957ea8b8779d601e44482e0ba7f13b04d2ac807d8c08f6bf30a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXQYY2HL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH8xnqXG9oJa7WcNQNNnRI%2FebIjvXOwLMlnO%2F9bUm%2FIQIgAc5KZt9%2Br2e21UMsZx91d3MCKVj9QuDq7dVtshy24dwqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8lBj7Qdka0CjPf5CrcAxN6mfV9SZTOGOlLgyHJIMjxMg4JkYGtvDrRypaaVU6%2FwUtMMdDTUltXFTEpRb%2BX9wJlDF7yzkCw3T%2BCptYdiP%2BWrbE35pXZb8CVOBiDVInsjGGHhyBC2Ss%2B8qiL%2B9eyty9sRtSEIpU%2BUoa8HHHzZ8LA3FklRKcDYZCvhlLUqhHAkQ21egJxjzYsARTo4DOpG9oBBeGapwBzVHjCKuGufAkIOUPK9Joeu6zgboNdjvmZfnYakV9Ovi1ADtf6VSBdmuClMI2mTWdw9upm3EATdfDYhLZwWJxtgCKs99iGWIkXvJCcPbYS9Mxa0QytiDqyURLzVbuvp4k2aZKtEepRShdDtIVqNXOZB%2FJcvFSwbxdE8ngtGZ6YGDcydMjZSAo8TyHkkSjeMPDcRpJ5DigixnIYfZdjP6riF9O%2BRNkQwLTuA%2FDnm9yBDtVen38gW3BAEuszuHweXL84lUghqb7jWaHP4j60d7gb6gD8lP8u09jTYRX8ajKepWgnQsZZqhSNq%2FIs0Sdi%2B3%2BOegiiVfBN9qfH3pCRXHPZt2xWQIXzq4qjwqg018bDJ%2F0SxDpZk3M8rOUp6DqBd2fxRm0tRt0MIf7E4yJlUPJ5mu6XGSxROutcQTAEE0eNjRsOZvHSMK3M370GOqUBx9cfd6TCNNj8tAne2x5yh93le0z%2B3fLzIH1o3JXZZellrP88ctfT13PBJpZmYPe3XUACSJ6T5DW2fBgWMEaeWG%2FNvc4JMZ0PWgXoLcbAUHHx8V38GyBup0N2t%2FIjUV1FkiDEcEhtJnXoot9eD1f9JP3809q8TnaPYLhQhtgRiYBhjvoKkTLW0U2XvCGy4IV05oIrAP18wO%2B5kIm0xcyAssmXBCqH&X-Amz-Signature=2e20f0de2b729ff2ca1484e39fa6d4dcf0fb4fc1b12d21f68b7ec362700c05f6&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXQYY2HL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH8xnqXG9oJa7WcNQNNnRI%2FebIjvXOwLMlnO%2F9bUm%2FIQIgAc5KZt9%2Br2e21UMsZx91d3MCKVj9QuDq7dVtshy24dwqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8lBj7Qdka0CjPf5CrcAxN6mfV9SZTOGOlLgyHJIMjxMg4JkYGtvDrRypaaVU6%2FwUtMMdDTUltXFTEpRb%2BX9wJlDF7yzkCw3T%2BCptYdiP%2BWrbE35pXZb8CVOBiDVInsjGGHhyBC2Ss%2B8qiL%2B9eyty9sRtSEIpU%2BUoa8HHHzZ8LA3FklRKcDYZCvhlLUqhHAkQ21egJxjzYsARTo4DOpG9oBBeGapwBzVHjCKuGufAkIOUPK9Joeu6zgboNdjvmZfnYakV9Ovi1ADtf6VSBdmuClMI2mTWdw9upm3EATdfDYhLZwWJxtgCKs99iGWIkXvJCcPbYS9Mxa0QytiDqyURLzVbuvp4k2aZKtEepRShdDtIVqNXOZB%2FJcvFSwbxdE8ngtGZ6YGDcydMjZSAo8TyHkkSjeMPDcRpJ5DigixnIYfZdjP6riF9O%2BRNkQwLTuA%2FDnm9yBDtVen38gW3BAEuszuHweXL84lUghqb7jWaHP4j60d7gb6gD8lP8u09jTYRX8ajKepWgnQsZZqhSNq%2FIs0Sdi%2B3%2BOegiiVfBN9qfH3pCRXHPZt2xWQIXzq4qjwqg018bDJ%2F0SxDpZk3M8rOUp6DqBd2fxRm0tRt0MIf7E4yJlUPJ5mu6XGSxROutcQTAEE0eNjRsOZvHSMK3M370GOqUBx9cfd6TCNNj8tAne2x5yh93le0z%2B3fLzIH1o3JXZZellrP88ctfT13PBJpZmYPe3XUACSJ6T5DW2fBgWMEaeWG%2FNvc4JMZ0PWgXoLcbAUHHx8V38GyBup0N2t%2FIjUV1FkiDEcEhtJnXoot9eD1f9JP3809q8TnaPYLhQhtgRiYBhjvoKkTLW0U2XvCGy4IV05oIrAP18wO%2B5kIm0xcyAssmXBCqH&X-Amz-Signature=275514c1c77c980141ef61729cdd175c3b6905c16d7b6f377933dbb0cfe6f119&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXQYY2HL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH8xnqXG9oJa7WcNQNNnRI%2FebIjvXOwLMlnO%2F9bUm%2FIQIgAc5KZt9%2Br2e21UMsZx91d3MCKVj9QuDq7dVtshy24dwqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8lBj7Qdka0CjPf5CrcAxN6mfV9SZTOGOlLgyHJIMjxMg4JkYGtvDrRypaaVU6%2FwUtMMdDTUltXFTEpRb%2BX9wJlDF7yzkCw3T%2BCptYdiP%2BWrbE35pXZb8CVOBiDVInsjGGHhyBC2Ss%2B8qiL%2B9eyty9sRtSEIpU%2BUoa8HHHzZ8LA3FklRKcDYZCvhlLUqhHAkQ21egJxjzYsARTo4DOpG9oBBeGapwBzVHjCKuGufAkIOUPK9Joeu6zgboNdjvmZfnYakV9Ovi1ADtf6VSBdmuClMI2mTWdw9upm3EATdfDYhLZwWJxtgCKs99iGWIkXvJCcPbYS9Mxa0QytiDqyURLzVbuvp4k2aZKtEepRShdDtIVqNXOZB%2FJcvFSwbxdE8ngtGZ6YGDcydMjZSAo8TyHkkSjeMPDcRpJ5DigixnIYfZdjP6riF9O%2BRNkQwLTuA%2FDnm9yBDtVen38gW3BAEuszuHweXL84lUghqb7jWaHP4j60d7gb6gD8lP8u09jTYRX8ajKepWgnQsZZqhSNq%2FIs0Sdi%2B3%2BOegiiVfBN9qfH3pCRXHPZt2xWQIXzq4qjwqg018bDJ%2F0SxDpZk3M8rOUp6DqBd2fxRm0tRt0MIf7E4yJlUPJ5mu6XGSxROutcQTAEE0eNjRsOZvHSMK3M370GOqUBx9cfd6TCNNj8tAne2x5yh93le0z%2B3fLzIH1o3JXZZellrP88ctfT13PBJpZmYPe3XUACSJ6T5DW2fBgWMEaeWG%2FNvc4JMZ0PWgXoLcbAUHHx8V38GyBup0N2t%2FIjUV1FkiDEcEhtJnXoot9eD1f9JP3809q8TnaPYLhQhtgRiYBhjvoKkTLW0U2XvCGy4IV05oIrAP18wO%2B5kIm0xcyAssmXBCqH&X-Amz-Signature=91590acae0f0c37f67a7e59839802c24d5c694bdffcc7bb5fb5e07a6d1456414&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
