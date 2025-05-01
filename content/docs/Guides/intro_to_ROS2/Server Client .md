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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBPQI37C%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIHyj87rAlXvoJQWNVM0QDUI771eLKMDbKBAOA4L%2FwfxCAiEA6OEFmFd3XdguF7R1pGsLYGBI3CNFRO8GNfnuDJY1oVEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXSAqNmr8i8tBqg5CrcA%2BbAWh516DRsccIfk%2FyaB4wudXc5Ls2riMhiiy%2Bv6aFvC3nXJIEHs0U0gts2YUVqN7WD3Pm3CNRvCjsPtJpNE2Mo5z6rjzD1fK7%2BJL8%2FbCbCmc4svq2DphRm3mqgvKAF8yDBCPoXvomifsEP1sqjD%2FFp2nRL7xPawJtLEGyn%2Fezn8NSZhDikjUeOL%2FYDqcMjc8wpbU8Jx%2FK%2Fjfh3Xds7qqqaIKabeIW33P%2F6lQnLnkofl7EKxXtmLQINISHAxdATVuOPLftj9KPilezZqeZ7K88NQ9lnJ9D%2BOnywFAyq7swjPpOAseK0oWmUt10MvbQQYNwU2gHx0MgxCYSeFeXRsaPLJ0rB5SIaDo6%2F60koy2pGMTET4GsAn4YQ1jz8RPi41dnUs6jW%2FqgcvRNPSJE1Mr1G3%2BFse8Wcf3hUh2dfAZ5xHDeBHpiZL%2Fb0jmO%2B91BzF0sb63Jwn37bbVrjQ77jsECadn%2Bn4egqtWQNeqHju%2B11edGR8ft83nlLaxaYaGcul6OU5K3mATYHtnJwaRQpRcfHLy8EPo54w2GQ2lHlCOivtOXWTSLcptpEIDBCsdB1%2FwJAz4uHMXSRPrsC769fvXgBv6yZJT%2FxlL8yn0Y9pCXICdOdP54GZQmiUjUmMO3zzsAGOqUBA93dl7Jpo4wc4TW7sIVkzhl8bdZ6Uf5ddeJc%2F5Es8U46n9oxdMBcRjXh7ZLET8DunPn%2BOm6xII3NCdRzPx9vgMowTH4rH7mamwRo%2FfM4AQVJEqZT9ov%2F%2B70TjRG4%2FVfGXhOK81T%2F2a3iETlAQ6gKhuFHjPgqvJP5lh0iyvbbRpz54z5nnQrvQ%2Ff0jLFSxVsbwnGqyqbc4oox2Asj1QL39IDflHHE&X-Amz-Signature=d466b925d8e40ddb6f4c179be03b2f05da1b4370746fce3e4bbb0c9df4694b12&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBPQI37C%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIHyj87rAlXvoJQWNVM0QDUI771eLKMDbKBAOA4L%2FwfxCAiEA6OEFmFd3XdguF7R1pGsLYGBI3CNFRO8GNfnuDJY1oVEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXSAqNmr8i8tBqg5CrcA%2BbAWh516DRsccIfk%2FyaB4wudXc5Ls2riMhiiy%2Bv6aFvC3nXJIEHs0U0gts2YUVqN7WD3Pm3CNRvCjsPtJpNE2Mo5z6rjzD1fK7%2BJL8%2FbCbCmc4svq2DphRm3mqgvKAF8yDBCPoXvomifsEP1sqjD%2FFp2nRL7xPawJtLEGyn%2Fezn8NSZhDikjUeOL%2FYDqcMjc8wpbU8Jx%2FK%2Fjfh3Xds7qqqaIKabeIW33P%2F6lQnLnkofl7EKxXtmLQINISHAxdATVuOPLftj9KPilezZqeZ7K88NQ9lnJ9D%2BOnywFAyq7swjPpOAseK0oWmUt10MvbQQYNwU2gHx0MgxCYSeFeXRsaPLJ0rB5SIaDo6%2F60koy2pGMTET4GsAn4YQ1jz8RPi41dnUs6jW%2FqgcvRNPSJE1Mr1G3%2BFse8Wcf3hUh2dfAZ5xHDeBHpiZL%2Fb0jmO%2B91BzF0sb63Jwn37bbVrjQ77jsECadn%2Bn4egqtWQNeqHju%2B11edGR8ft83nlLaxaYaGcul6OU5K3mATYHtnJwaRQpRcfHLy8EPo54w2GQ2lHlCOivtOXWTSLcptpEIDBCsdB1%2FwJAz4uHMXSRPrsC769fvXgBv6yZJT%2FxlL8yn0Y9pCXICdOdP54GZQmiUjUmMO3zzsAGOqUBA93dl7Jpo4wc4TW7sIVkzhl8bdZ6Uf5ddeJc%2F5Es8U46n9oxdMBcRjXh7ZLET8DunPn%2BOm6xII3NCdRzPx9vgMowTH4rH7mamwRo%2FfM4AQVJEqZT9ov%2F%2B70TjRG4%2FVfGXhOK81T%2F2a3iETlAQ6gKhuFHjPgqvJP5lh0iyvbbRpz54z5nnQrvQ%2Ff0jLFSxVsbwnGqyqbc4oox2Asj1QL39IDflHHE&X-Amz-Signature=4e8b1521e3cc0a1e09351755ce81a21b13aadaca05b2b71432d01cd83be64e97&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBPQI37C%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIHyj87rAlXvoJQWNVM0QDUI771eLKMDbKBAOA4L%2FwfxCAiEA6OEFmFd3XdguF7R1pGsLYGBI3CNFRO8GNfnuDJY1oVEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXSAqNmr8i8tBqg5CrcA%2BbAWh516DRsccIfk%2FyaB4wudXc5Ls2riMhiiy%2Bv6aFvC3nXJIEHs0U0gts2YUVqN7WD3Pm3CNRvCjsPtJpNE2Mo5z6rjzD1fK7%2BJL8%2FbCbCmc4svq2DphRm3mqgvKAF8yDBCPoXvomifsEP1sqjD%2FFp2nRL7xPawJtLEGyn%2Fezn8NSZhDikjUeOL%2FYDqcMjc8wpbU8Jx%2FK%2Fjfh3Xds7qqqaIKabeIW33P%2F6lQnLnkofl7EKxXtmLQINISHAxdATVuOPLftj9KPilezZqeZ7K88NQ9lnJ9D%2BOnywFAyq7swjPpOAseK0oWmUt10MvbQQYNwU2gHx0MgxCYSeFeXRsaPLJ0rB5SIaDo6%2F60koy2pGMTET4GsAn4YQ1jz8RPi41dnUs6jW%2FqgcvRNPSJE1Mr1G3%2BFse8Wcf3hUh2dfAZ5xHDeBHpiZL%2Fb0jmO%2B91BzF0sb63Jwn37bbVrjQ77jsECadn%2Bn4egqtWQNeqHju%2B11edGR8ft83nlLaxaYaGcul6OU5K3mATYHtnJwaRQpRcfHLy8EPo54w2GQ2lHlCOivtOXWTSLcptpEIDBCsdB1%2FwJAz4uHMXSRPrsC769fvXgBv6yZJT%2FxlL8yn0Y9pCXICdOdP54GZQmiUjUmMO3zzsAGOqUBA93dl7Jpo4wc4TW7sIVkzhl8bdZ6Uf5ddeJc%2F5Es8U46n9oxdMBcRjXh7ZLET8DunPn%2BOm6xII3NCdRzPx9vgMowTH4rH7mamwRo%2FfM4AQVJEqZT9ov%2F%2B70TjRG4%2FVfGXhOK81T%2F2a3iETlAQ6gKhuFHjPgqvJP5lh0iyvbbRpz54z5nnQrvQ%2Ff0jLFSxVsbwnGqyqbc4oox2Asj1QL39IDflHHE&X-Amz-Signature=3f1b888dab4b622ab47b05df013b2cd9189235e831b9dbb91ecb0252dcc6d8ca&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBPQI37C%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIHyj87rAlXvoJQWNVM0QDUI771eLKMDbKBAOA4L%2FwfxCAiEA6OEFmFd3XdguF7R1pGsLYGBI3CNFRO8GNfnuDJY1oVEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXSAqNmr8i8tBqg5CrcA%2BbAWh516DRsccIfk%2FyaB4wudXc5Ls2riMhiiy%2Bv6aFvC3nXJIEHs0U0gts2YUVqN7WD3Pm3CNRvCjsPtJpNE2Mo5z6rjzD1fK7%2BJL8%2FbCbCmc4svq2DphRm3mqgvKAF8yDBCPoXvomifsEP1sqjD%2FFp2nRL7xPawJtLEGyn%2Fezn8NSZhDikjUeOL%2FYDqcMjc8wpbU8Jx%2FK%2Fjfh3Xds7qqqaIKabeIW33P%2F6lQnLnkofl7EKxXtmLQINISHAxdATVuOPLftj9KPilezZqeZ7K88NQ9lnJ9D%2BOnywFAyq7swjPpOAseK0oWmUt10MvbQQYNwU2gHx0MgxCYSeFeXRsaPLJ0rB5SIaDo6%2F60koy2pGMTET4GsAn4YQ1jz8RPi41dnUs6jW%2FqgcvRNPSJE1Mr1G3%2BFse8Wcf3hUh2dfAZ5xHDeBHpiZL%2Fb0jmO%2B91BzF0sb63Jwn37bbVrjQ77jsECadn%2Bn4egqtWQNeqHju%2B11edGR8ft83nlLaxaYaGcul6OU5K3mATYHtnJwaRQpRcfHLy8EPo54w2GQ2lHlCOivtOXWTSLcptpEIDBCsdB1%2FwJAz4uHMXSRPrsC769fvXgBv6yZJT%2FxlL8yn0Y9pCXICdOdP54GZQmiUjUmMO3zzsAGOqUBA93dl7Jpo4wc4TW7sIVkzhl8bdZ6Uf5ddeJc%2F5Es8U46n9oxdMBcRjXh7ZLET8DunPn%2BOm6xII3NCdRzPx9vgMowTH4rH7mamwRo%2FfM4AQVJEqZT9ov%2F%2B70TjRG4%2FVfGXhOK81T%2F2a3iETlAQ6gKhuFHjPgqvJP5lh0iyvbbRpz54z5nnQrvQ%2Ff0jLFSxVsbwnGqyqbc4oox2Asj1QL39IDflHHE&X-Amz-Signature=c9772261be08d2c0916e1a3d7cbeba789bee66f760cde3686a50becdc250ddcb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBPQI37C%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIHyj87rAlXvoJQWNVM0QDUI771eLKMDbKBAOA4L%2FwfxCAiEA6OEFmFd3XdguF7R1pGsLYGBI3CNFRO8GNfnuDJY1oVEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXSAqNmr8i8tBqg5CrcA%2BbAWh516DRsccIfk%2FyaB4wudXc5Ls2riMhiiy%2Bv6aFvC3nXJIEHs0U0gts2YUVqN7WD3Pm3CNRvCjsPtJpNE2Mo5z6rjzD1fK7%2BJL8%2FbCbCmc4svq2DphRm3mqgvKAF8yDBCPoXvomifsEP1sqjD%2FFp2nRL7xPawJtLEGyn%2Fezn8NSZhDikjUeOL%2FYDqcMjc8wpbU8Jx%2FK%2Fjfh3Xds7qqqaIKabeIW33P%2F6lQnLnkofl7EKxXtmLQINISHAxdATVuOPLftj9KPilezZqeZ7K88NQ9lnJ9D%2BOnywFAyq7swjPpOAseK0oWmUt10MvbQQYNwU2gHx0MgxCYSeFeXRsaPLJ0rB5SIaDo6%2F60koy2pGMTET4GsAn4YQ1jz8RPi41dnUs6jW%2FqgcvRNPSJE1Mr1G3%2BFse8Wcf3hUh2dfAZ5xHDeBHpiZL%2Fb0jmO%2B91BzF0sb63Jwn37bbVrjQ77jsECadn%2Bn4egqtWQNeqHju%2B11edGR8ft83nlLaxaYaGcul6OU5K3mATYHtnJwaRQpRcfHLy8EPo54w2GQ2lHlCOivtOXWTSLcptpEIDBCsdB1%2FwJAz4uHMXSRPrsC769fvXgBv6yZJT%2FxlL8yn0Y9pCXICdOdP54GZQmiUjUmMO3zzsAGOqUBA93dl7Jpo4wc4TW7sIVkzhl8bdZ6Uf5ddeJc%2F5Es8U46n9oxdMBcRjXh7ZLET8DunPn%2BOm6xII3NCdRzPx9vgMowTH4rH7mamwRo%2FfM4AQVJEqZT9ov%2F%2B70TjRG4%2FVfGXhOK81T%2F2a3iETlAQ6gKhuFHjPgqvJP5lh0iyvbbRpz54z5nnQrvQ%2Ff0jLFSxVsbwnGqyqbc4oox2Asj1QL39IDflHHE&X-Amz-Signature=84d5bbe563b8e7688373ac14cb70ff8a004aa04c976ebba5b03e5694ccd9e31b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
