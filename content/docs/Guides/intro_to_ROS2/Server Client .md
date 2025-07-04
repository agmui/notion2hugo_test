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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ5FTSA3%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDtoiLtvYiHSReFm%2B00%2Fio6RbBErPg1nh1F9WtxMzi%2BpQIgfuMEoXslgKk2%2Bv0ybMjC%2BDX4s5vTYZZkdMzwEc5sL4Eq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDIH%2FCMuNiC8lpRdfQircA8X%2Fiy0UeG%2FHMGjvK%2BCa0ePkkAjl8EH9DYUdC9gK08Vag%2FFnce4ADaffcXZN9BOiOiiuRg9q%2FoulYcCT%2BJV606QGGHlLENrZ918P%2FRcUaN%2FXwPc2%2BJHQCVxXKf8M9f20Of5dqMemudZT8eilCAaDeqfWb1lZRjO9MZ5we669QPtGnpQQJLqXKXRxHFZoBJuIPlm3v6qQxTBfqM9cQbdwKrhXOnVb1tV7aYAb2bBN8yb75VqoCTHoQkxxjZlsJFFlr7l5ytWeuEa6Ex9lSh0vm3GA%2FQ1b3LgEYbQRFXqTDmTM4buVrm%2Ff8rZiJ7JMy0otRdJvwSwUz7Q%2BGCXJ6WVyHGYFeMMsieCB%2FzcFVBady57M5CVP0O68S%2BGI27qYxSiIvsOJfB7xDTVUeKThkAgOn0Ju6gyMyNPa4gJp6oXsYP8LjioG7o2uN0MbkeDT9wvqM6qhoORnAWfR6EYLup81n1t%2FsZiF4wTdKXZFd0pnXRBbj5B3SGHhf57Bi7ca4P%2BfZ9xzODFgct53Gp4P4PbFqyrPqFTX5lj6P6ezIq8FaMesMnddQ6QNd%2BcUg57gkazB772hTDLn0QMb25s1ZvBac4FEeQN1GiNU7xZgy8m%2F1%2BNdZerrPX%2BPtNPUc%2B%2FnMP21ncMGOqUBdUo1Xu68Ll5YoLo%2F9Sw64zsN89cebgtX3SnceNLR%2BKWcVyGu3UBIdjUBkjRqtuy379qCKED4QLIdB6QOSfa6XOXXeCFKPrSFiP8k8ziEipQ5SboJg6kYShFSasHaWu%2BjGyD3WWU7mTU%2FWgOxfvtM56gnSoAnyvWwqhdlbok%2FRArlExcSLPu4TS67q%2FfxLONsRNLP0DqY76BpvrNwFqzqCh43UVNM&X-Amz-Signature=a5453061227dec587a12ec8a41165831fedeb99c05d9d5a1b35946b9cf62b989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ5FTSA3%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDtoiLtvYiHSReFm%2B00%2Fio6RbBErPg1nh1F9WtxMzi%2BpQIgfuMEoXslgKk2%2Bv0ybMjC%2BDX4s5vTYZZkdMzwEc5sL4Eq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDIH%2FCMuNiC8lpRdfQircA8X%2Fiy0UeG%2FHMGjvK%2BCa0ePkkAjl8EH9DYUdC9gK08Vag%2FFnce4ADaffcXZN9BOiOiiuRg9q%2FoulYcCT%2BJV606QGGHlLENrZ918P%2FRcUaN%2FXwPc2%2BJHQCVxXKf8M9f20Of5dqMemudZT8eilCAaDeqfWb1lZRjO9MZ5we669QPtGnpQQJLqXKXRxHFZoBJuIPlm3v6qQxTBfqM9cQbdwKrhXOnVb1tV7aYAb2bBN8yb75VqoCTHoQkxxjZlsJFFlr7l5ytWeuEa6Ex9lSh0vm3GA%2FQ1b3LgEYbQRFXqTDmTM4buVrm%2Ff8rZiJ7JMy0otRdJvwSwUz7Q%2BGCXJ6WVyHGYFeMMsieCB%2FzcFVBady57M5CVP0O68S%2BGI27qYxSiIvsOJfB7xDTVUeKThkAgOn0Ju6gyMyNPa4gJp6oXsYP8LjioG7o2uN0MbkeDT9wvqM6qhoORnAWfR6EYLup81n1t%2FsZiF4wTdKXZFd0pnXRBbj5B3SGHhf57Bi7ca4P%2BfZ9xzODFgct53Gp4P4PbFqyrPqFTX5lj6P6ezIq8FaMesMnddQ6QNd%2BcUg57gkazB772hTDLn0QMb25s1ZvBac4FEeQN1GiNU7xZgy8m%2F1%2BNdZerrPX%2BPtNPUc%2B%2FnMP21ncMGOqUBdUo1Xu68Ll5YoLo%2F9Sw64zsN89cebgtX3SnceNLR%2BKWcVyGu3UBIdjUBkjRqtuy379qCKED4QLIdB6QOSfa6XOXXeCFKPrSFiP8k8ziEipQ5SboJg6kYShFSasHaWu%2BjGyD3WWU7mTU%2FWgOxfvtM56gnSoAnyvWwqhdlbok%2FRArlExcSLPu4TS67q%2FfxLONsRNLP0DqY76BpvrNwFqzqCh43UVNM&X-Amz-Signature=0258f87d8f776c3f80d566d257f0ba0eef50c8b4595fd299c8344d7936b60eba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ5FTSA3%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDtoiLtvYiHSReFm%2B00%2Fio6RbBErPg1nh1F9WtxMzi%2BpQIgfuMEoXslgKk2%2Bv0ybMjC%2BDX4s5vTYZZkdMzwEc5sL4Eq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDIH%2FCMuNiC8lpRdfQircA8X%2Fiy0UeG%2FHMGjvK%2BCa0ePkkAjl8EH9DYUdC9gK08Vag%2FFnce4ADaffcXZN9BOiOiiuRg9q%2FoulYcCT%2BJV606QGGHlLENrZ918P%2FRcUaN%2FXwPc2%2BJHQCVxXKf8M9f20Of5dqMemudZT8eilCAaDeqfWb1lZRjO9MZ5we669QPtGnpQQJLqXKXRxHFZoBJuIPlm3v6qQxTBfqM9cQbdwKrhXOnVb1tV7aYAb2bBN8yb75VqoCTHoQkxxjZlsJFFlr7l5ytWeuEa6Ex9lSh0vm3GA%2FQ1b3LgEYbQRFXqTDmTM4buVrm%2Ff8rZiJ7JMy0otRdJvwSwUz7Q%2BGCXJ6WVyHGYFeMMsieCB%2FzcFVBady57M5CVP0O68S%2BGI27qYxSiIvsOJfB7xDTVUeKThkAgOn0Ju6gyMyNPa4gJp6oXsYP8LjioG7o2uN0MbkeDT9wvqM6qhoORnAWfR6EYLup81n1t%2FsZiF4wTdKXZFd0pnXRBbj5B3SGHhf57Bi7ca4P%2BfZ9xzODFgct53Gp4P4PbFqyrPqFTX5lj6P6ezIq8FaMesMnddQ6QNd%2BcUg57gkazB772hTDLn0QMb25s1ZvBac4FEeQN1GiNU7xZgy8m%2F1%2BNdZerrPX%2BPtNPUc%2B%2FnMP21ncMGOqUBdUo1Xu68Ll5YoLo%2F9Sw64zsN89cebgtX3SnceNLR%2BKWcVyGu3UBIdjUBkjRqtuy379qCKED4QLIdB6QOSfa6XOXXeCFKPrSFiP8k8ziEipQ5SboJg6kYShFSasHaWu%2BjGyD3WWU7mTU%2FWgOxfvtM56gnSoAnyvWwqhdlbok%2FRArlExcSLPu4TS67q%2FfxLONsRNLP0DqY76BpvrNwFqzqCh43UVNM&X-Amz-Signature=885e26a84dae59029915cc231f8f026d20983513d72c06c6f51ac5b50f76c547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ5FTSA3%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDtoiLtvYiHSReFm%2B00%2Fio6RbBErPg1nh1F9WtxMzi%2BpQIgfuMEoXslgKk2%2Bv0ybMjC%2BDX4s5vTYZZkdMzwEc5sL4Eq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDIH%2FCMuNiC8lpRdfQircA8X%2Fiy0UeG%2FHMGjvK%2BCa0ePkkAjl8EH9DYUdC9gK08Vag%2FFnce4ADaffcXZN9BOiOiiuRg9q%2FoulYcCT%2BJV606QGGHlLENrZ918P%2FRcUaN%2FXwPc2%2BJHQCVxXKf8M9f20Of5dqMemudZT8eilCAaDeqfWb1lZRjO9MZ5we669QPtGnpQQJLqXKXRxHFZoBJuIPlm3v6qQxTBfqM9cQbdwKrhXOnVb1tV7aYAb2bBN8yb75VqoCTHoQkxxjZlsJFFlr7l5ytWeuEa6Ex9lSh0vm3GA%2FQ1b3LgEYbQRFXqTDmTM4buVrm%2Ff8rZiJ7JMy0otRdJvwSwUz7Q%2BGCXJ6WVyHGYFeMMsieCB%2FzcFVBady57M5CVP0O68S%2BGI27qYxSiIvsOJfB7xDTVUeKThkAgOn0Ju6gyMyNPa4gJp6oXsYP8LjioG7o2uN0MbkeDT9wvqM6qhoORnAWfR6EYLup81n1t%2FsZiF4wTdKXZFd0pnXRBbj5B3SGHhf57Bi7ca4P%2BfZ9xzODFgct53Gp4P4PbFqyrPqFTX5lj6P6ezIq8FaMesMnddQ6QNd%2BcUg57gkazB772hTDLn0QMb25s1ZvBac4FEeQN1GiNU7xZgy8m%2F1%2BNdZerrPX%2BPtNPUc%2B%2FnMP21ncMGOqUBdUo1Xu68Ll5YoLo%2F9Sw64zsN89cebgtX3SnceNLR%2BKWcVyGu3UBIdjUBkjRqtuy379qCKED4QLIdB6QOSfa6XOXXeCFKPrSFiP8k8ziEipQ5SboJg6kYShFSasHaWu%2BjGyD3WWU7mTU%2FWgOxfvtM56gnSoAnyvWwqhdlbok%2FRArlExcSLPu4TS67q%2FfxLONsRNLP0DqY76BpvrNwFqzqCh43UVNM&X-Amz-Signature=41794411059110ef91dee99b5b4a6ff59e1bc0b001e4b91e101f1e4964fd6cce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ5FTSA3%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDtoiLtvYiHSReFm%2B00%2Fio6RbBErPg1nh1F9WtxMzi%2BpQIgfuMEoXslgKk2%2Bv0ybMjC%2BDX4s5vTYZZkdMzwEc5sL4Eq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDIH%2FCMuNiC8lpRdfQircA8X%2Fiy0UeG%2FHMGjvK%2BCa0ePkkAjl8EH9DYUdC9gK08Vag%2FFnce4ADaffcXZN9BOiOiiuRg9q%2FoulYcCT%2BJV606QGGHlLENrZ918P%2FRcUaN%2FXwPc2%2BJHQCVxXKf8M9f20Of5dqMemudZT8eilCAaDeqfWb1lZRjO9MZ5we669QPtGnpQQJLqXKXRxHFZoBJuIPlm3v6qQxTBfqM9cQbdwKrhXOnVb1tV7aYAb2bBN8yb75VqoCTHoQkxxjZlsJFFlr7l5ytWeuEa6Ex9lSh0vm3GA%2FQ1b3LgEYbQRFXqTDmTM4buVrm%2Ff8rZiJ7JMy0otRdJvwSwUz7Q%2BGCXJ6WVyHGYFeMMsieCB%2FzcFVBady57M5CVP0O68S%2BGI27qYxSiIvsOJfB7xDTVUeKThkAgOn0Ju6gyMyNPa4gJp6oXsYP8LjioG7o2uN0MbkeDT9wvqM6qhoORnAWfR6EYLup81n1t%2FsZiF4wTdKXZFd0pnXRBbj5B3SGHhf57Bi7ca4P%2BfZ9xzODFgct53Gp4P4PbFqyrPqFTX5lj6P6ezIq8FaMesMnddQ6QNd%2BcUg57gkazB772hTDLn0QMb25s1ZvBac4FEeQN1GiNU7xZgy8m%2F1%2BNdZerrPX%2BPtNPUc%2B%2FnMP21ncMGOqUBdUo1Xu68Ll5YoLo%2F9Sw64zsN89cebgtX3SnceNLR%2BKWcVyGu3UBIdjUBkjRqtuy379qCKED4QLIdB6QOSfa6XOXXeCFKPrSFiP8k8ziEipQ5SboJg6kYShFSasHaWu%2BjGyD3WWU7mTU%2FWgOxfvtM56gnSoAnyvWwqhdlbok%2FRArlExcSLPu4TS67q%2FfxLONsRNLP0DqY76BpvrNwFqzqCh43UVNM&X-Amz-Signature=ee95fad4d32f4b569f0bf3eb08acbbfd72de5f5589cbf4d19f104d02ee3545ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
