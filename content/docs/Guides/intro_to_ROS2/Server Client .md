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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BVAE4WA%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIH4EVhAvhrm45cSuAqLFTVH%2BpHjX0yDbFt3b6XWBgN0AAiABYc7%2FllSfMYmXUVYdozx%2FWUoq6KNLmwXUcdUdkZ4bNCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0sOQKG%2FoEZG5Qtf0KtwD6L7UyNC8GOLJ3BbfCZ4NT7adpa3EMFXkhEEN9B7eswLEQTk5wN%2B0tt9KPet%2F56Ezd%2B4KyGUOqyETz5gcn70kjK%2B%2FIfB1kxFIl5UIrdA%2BY8BHIGqQuBZACsEfx61TVv33HnNJwAVVuma1jr0ZgiJ7z7cbESQ0ofQgKr1kopYmZzfH4b1pEayK2%2F9CGBZwXNoMgMRy8gpZcBbIzI0Dipt7UzElerX6yDRQuefA70dOqpE2ilyun1%2Bi1DwR%2ByEc9STOmd%2FWIoszA3nuCIQePqasnkZmE0eZYk1W5Lsy%2FR6I1lQtkl5oZdB%2FMrEqluxHi4cQ1yz7DwF3%2FjpuNLmox%2B6dDYQN%2BprOZrc%2FVmSrZNh5O0ibw4BXIv8EKKXeO%2B%2B7quSJzwiFo0xCfkHEGComWc2z3fsYf1QU%2FslrONTSG8lzXfyCi3kYjT4DHkue78G56QQmDyWRVzSNMlhfd4oAIMBNhg9brN8s%2FNEQBYNgXrPomEygfJO5ba%2FrQhI5yo2qvTAmzyJb6vjbnPP9qcqzfAh6szMpZGK%2BGaDFL3Hvrzln9c4YaKluzrqLEYD1KtVewkrLEi29zhQlBS6GT6Aon1kY0PeGR2Guh7hawD3S7sfVaSBPh8bEst5oLiNZVSswp%2Fu0vwY6pgHOlRDFnU0MkffoZOAPAtaRF8SI7hdZrWdbSQ%2BWp3G7Bn%2Fs%2BPozP96g7nhXTN0ADvL1teefVUKZUt%2B77lLQfUYMYGKjscfB7VVzFkQVVpPMS%2FgGbpeePGB28QNqOuPJJ1durqhYIYeDfhDCKrUr2S%2FKH%2FFBn7T70al1zOQB7dts6IM0yhVbxjVsBRPY6zYQUlPz%2FkIjyNRllFWPVvRx%2FwWGw03i6wZ%2F&X-Amz-Signature=d2bc75bfd69c46f7cc4dec561a50c9e694ec3270230caf39c092b2bb203f066c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BVAE4WA%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIH4EVhAvhrm45cSuAqLFTVH%2BpHjX0yDbFt3b6XWBgN0AAiABYc7%2FllSfMYmXUVYdozx%2FWUoq6KNLmwXUcdUdkZ4bNCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0sOQKG%2FoEZG5Qtf0KtwD6L7UyNC8GOLJ3BbfCZ4NT7adpa3EMFXkhEEN9B7eswLEQTk5wN%2B0tt9KPet%2F56Ezd%2B4KyGUOqyETz5gcn70kjK%2B%2FIfB1kxFIl5UIrdA%2BY8BHIGqQuBZACsEfx61TVv33HnNJwAVVuma1jr0ZgiJ7z7cbESQ0ofQgKr1kopYmZzfH4b1pEayK2%2F9CGBZwXNoMgMRy8gpZcBbIzI0Dipt7UzElerX6yDRQuefA70dOqpE2ilyun1%2Bi1DwR%2ByEc9STOmd%2FWIoszA3nuCIQePqasnkZmE0eZYk1W5Lsy%2FR6I1lQtkl5oZdB%2FMrEqluxHi4cQ1yz7DwF3%2FjpuNLmox%2B6dDYQN%2BprOZrc%2FVmSrZNh5O0ibw4BXIv8EKKXeO%2B%2B7quSJzwiFo0xCfkHEGComWc2z3fsYf1QU%2FslrONTSG8lzXfyCi3kYjT4DHkue78G56QQmDyWRVzSNMlhfd4oAIMBNhg9brN8s%2FNEQBYNgXrPomEygfJO5ba%2FrQhI5yo2qvTAmzyJb6vjbnPP9qcqzfAh6szMpZGK%2BGaDFL3Hvrzln9c4YaKluzrqLEYD1KtVewkrLEi29zhQlBS6GT6Aon1kY0PeGR2Guh7hawD3S7sfVaSBPh8bEst5oLiNZVSswp%2Fu0vwY6pgHOlRDFnU0MkffoZOAPAtaRF8SI7hdZrWdbSQ%2BWp3G7Bn%2Fs%2BPozP96g7nhXTN0ADvL1teefVUKZUt%2B77lLQfUYMYGKjscfB7VVzFkQVVpPMS%2FgGbpeePGB28QNqOuPJJ1durqhYIYeDfhDCKrUr2S%2FKH%2FFBn7T70al1zOQB7dts6IM0yhVbxjVsBRPY6zYQUlPz%2FkIjyNRllFWPVvRx%2FwWGw03i6wZ%2F&X-Amz-Signature=b23d993e0159dfe5feeeed95a9481ccbd87476386532140c582d2843ee34afce&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BVAE4WA%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIH4EVhAvhrm45cSuAqLFTVH%2BpHjX0yDbFt3b6XWBgN0AAiABYc7%2FllSfMYmXUVYdozx%2FWUoq6KNLmwXUcdUdkZ4bNCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0sOQKG%2FoEZG5Qtf0KtwD6L7UyNC8GOLJ3BbfCZ4NT7adpa3EMFXkhEEN9B7eswLEQTk5wN%2B0tt9KPet%2F56Ezd%2B4KyGUOqyETz5gcn70kjK%2B%2FIfB1kxFIl5UIrdA%2BY8BHIGqQuBZACsEfx61TVv33HnNJwAVVuma1jr0ZgiJ7z7cbESQ0ofQgKr1kopYmZzfH4b1pEayK2%2F9CGBZwXNoMgMRy8gpZcBbIzI0Dipt7UzElerX6yDRQuefA70dOqpE2ilyun1%2Bi1DwR%2ByEc9STOmd%2FWIoszA3nuCIQePqasnkZmE0eZYk1W5Lsy%2FR6I1lQtkl5oZdB%2FMrEqluxHi4cQ1yz7DwF3%2FjpuNLmox%2B6dDYQN%2BprOZrc%2FVmSrZNh5O0ibw4BXIv8EKKXeO%2B%2B7quSJzwiFo0xCfkHEGComWc2z3fsYf1QU%2FslrONTSG8lzXfyCi3kYjT4DHkue78G56QQmDyWRVzSNMlhfd4oAIMBNhg9brN8s%2FNEQBYNgXrPomEygfJO5ba%2FrQhI5yo2qvTAmzyJb6vjbnPP9qcqzfAh6szMpZGK%2BGaDFL3Hvrzln9c4YaKluzrqLEYD1KtVewkrLEi29zhQlBS6GT6Aon1kY0PeGR2Guh7hawD3S7sfVaSBPh8bEst5oLiNZVSswp%2Fu0vwY6pgHOlRDFnU0MkffoZOAPAtaRF8SI7hdZrWdbSQ%2BWp3G7Bn%2Fs%2BPozP96g7nhXTN0ADvL1teefVUKZUt%2B77lLQfUYMYGKjscfB7VVzFkQVVpPMS%2FgGbpeePGB28QNqOuPJJ1durqhYIYeDfhDCKrUr2S%2FKH%2FFBn7T70al1zOQB7dts6IM0yhVbxjVsBRPY6zYQUlPz%2FkIjyNRllFWPVvRx%2FwWGw03i6wZ%2F&X-Amz-Signature=caafe8acf4fa2ad0b455c08a3b5a363e4ee372f89c16eee53e9943e180250aae&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BVAE4WA%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIH4EVhAvhrm45cSuAqLFTVH%2BpHjX0yDbFt3b6XWBgN0AAiABYc7%2FllSfMYmXUVYdozx%2FWUoq6KNLmwXUcdUdkZ4bNCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0sOQKG%2FoEZG5Qtf0KtwD6L7UyNC8GOLJ3BbfCZ4NT7adpa3EMFXkhEEN9B7eswLEQTk5wN%2B0tt9KPet%2F56Ezd%2B4KyGUOqyETz5gcn70kjK%2B%2FIfB1kxFIl5UIrdA%2BY8BHIGqQuBZACsEfx61TVv33HnNJwAVVuma1jr0ZgiJ7z7cbESQ0ofQgKr1kopYmZzfH4b1pEayK2%2F9CGBZwXNoMgMRy8gpZcBbIzI0Dipt7UzElerX6yDRQuefA70dOqpE2ilyun1%2Bi1DwR%2ByEc9STOmd%2FWIoszA3nuCIQePqasnkZmE0eZYk1W5Lsy%2FR6I1lQtkl5oZdB%2FMrEqluxHi4cQ1yz7DwF3%2FjpuNLmox%2B6dDYQN%2BprOZrc%2FVmSrZNh5O0ibw4BXIv8EKKXeO%2B%2B7quSJzwiFo0xCfkHEGComWc2z3fsYf1QU%2FslrONTSG8lzXfyCi3kYjT4DHkue78G56QQmDyWRVzSNMlhfd4oAIMBNhg9brN8s%2FNEQBYNgXrPomEygfJO5ba%2FrQhI5yo2qvTAmzyJb6vjbnPP9qcqzfAh6szMpZGK%2BGaDFL3Hvrzln9c4YaKluzrqLEYD1KtVewkrLEi29zhQlBS6GT6Aon1kY0PeGR2Guh7hawD3S7sfVaSBPh8bEst5oLiNZVSswp%2Fu0vwY6pgHOlRDFnU0MkffoZOAPAtaRF8SI7hdZrWdbSQ%2BWp3G7Bn%2Fs%2BPozP96g7nhXTN0ADvL1teefVUKZUt%2B77lLQfUYMYGKjscfB7VVzFkQVVpPMS%2FgGbpeePGB28QNqOuPJJ1durqhYIYeDfhDCKrUr2S%2FKH%2FFBn7T70al1zOQB7dts6IM0yhVbxjVsBRPY6zYQUlPz%2FkIjyNRllFWPVvRx%2FwWGw03i6wZ%2F&X-Amz-Signature=50650ac927aa866b79a0ed6f6654caba7ab798c3e76f9da5d1eee376b54ac0a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BVAE4WA%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIH4EVhAvhrm45cSuAqLFTVH%2BpHjX0yDbFt3b6XWBgN0AAiABYc7%2FllSfMYmXUVYdozx%2FWUoq6KNLmwXUcdUdkZ4bNCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0sOQKG%2FoEZG5Qtf0KtwD6L7UyNC8GOLJ3BbfCZ4NT7adpa3EMFXkhEEN9B7eswLEQTk5wN%2B0tt9KPet%2F56Ezd%2B4KyGUOqyETz5gcn70kjK%2B%2FIfB1kxFIl5UIrdA%2BY8BHIGqQuBZACsEfx61TVv33HnNJwAVVuma1jr0ZgiJ7z7cbESQ0ofQgKr1kopYmZzfH4b1pEayK2%2F9CGBZwXNoMgMRy8gpZcBbIzI0Dipt7UzElerX6yDRQuefA70dOqpE2ilyun1%2Bi1DwR%2ByEc9STOmd%2FWIoszA3nuCIQePqasnkZmE0eZYk1W5Lsy%2FR6I1lQtkl5oZdB%2FMrEqluxHi4cQ1yz7DwF3%2FjpuNLmox%2B6dDYQN%2BprOZrc%2FVmSrZNh5O0ibw4BXIv8EKKXeO%2B%2B7quSJzwiFo0xCfkHEGComWc2z3fsYf1QU%2FslrONTSG8lzXfyCi3kYjT4DHkue78G56QQmDyWRVzSNMlhfd4oAIMBNhg9brN8s%2FNEQBYNgXrPomEygfJO5ba%2FrQhI5yo2qvTAmzyJb6vjbnPP9qcqzfAh6szMpZGK%2BGaDFL3Hvrzln9c4YaKluzrqLEYD1KtVewkrLEi29zhQlBS6GT6Aon1kY0PeGR2Guh7hawD3S7sfVaSBPh8bEst5oLiNZVSswp%2Fu0vwY6pgHOlRDFnU0MkffoZOAPAtaRF8SI7hdZrWdbSQ%2BWp3G7Bn%2Fs%2BPozP96g7nhXTN0ADvL1teefVUKZUt%2B77lLQfUYMYGKjscfB7VVzFkQVVpPMS%2FgGbpeePGB28QNqOuPJJ1durqhYIYeDfhDCKrUr2S%2FKH%2FFBn7T70al1zOQB7dts6IM0yhVbxjVsBRPY6zYQUlPz%2FkIjyNRllFWPVvRx%2FwWGw03i6wZ%2F&X-Amz-Signature=1eb87d9dbfce1ff70b90969af0da560e8425e0d9c72c1f7df9c9b0cbc003e718&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
