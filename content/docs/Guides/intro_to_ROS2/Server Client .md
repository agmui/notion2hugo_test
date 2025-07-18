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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWOFNCKS%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDMwJamRYbRTH2rEzpxz8Fc7mD1J1gm7dSVOmzsQzUdZgIhAPyElYpc%2B%2F4hX0OQtWVDOnYUu33vjGCjFalm6P3LuCedKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytRYVXKmyVF3WITGoq3ANaYIbsnYIUopgcuDZO3TEI5hUJuiBkkP6eWiEms6PkAuaG4UpCGcs4kK0dau33My7K4y%2BiNmZIXEg7Z3V2LkjCFQrKeY1PWNd%2Br4aJ79JAUuNNeiDg%2Frqbj4l8h9JyBMEK2iIji96PicLnqSJRJ5VXPWMVCIyKP0g42mOBjb718Dg7O%2Bfl4pOJ3iuHPF5z0ishSquhFuNZllwL%2FyNjere8tckjS7vrzq8Dr%2BHoGjswW6kal1Aq0OS8tsap1PsD7hY9sK5SMrZI8%2Bd3YloV93JsbllmNPy6KpN0PeWNkNam9%2BA9iZcEMTlujBRQUPuAKKAs64FflJ%2Bnn1RfYxebnvSRZffpJ2kA5h%2BYY6GXa36QAM1Een90d7olb2Kg2DRldQI0itd3wtWJm92ykjJfivfQ1C1a9gCvQgvknOr90ZcMd3%2FnpZmsqpYUt962qp3iWBEJjsa4aIqKZoMPaJYEAmMLOk1OMuwAkhX9U47AeTyRXMXumZHbBgLGcViEoeDVvx0qQmZ01nfM2QgHZC6wPgPWHtBTuXq%2BCN6ZTALb%2F7hdwErF%2F45yFh9YIURoH47e66GTkQKx3pDDATLBzVRYM4P9DgxgLXNZP2NrmsrlZ7eTjwj5G2RSxO85ZgHzBDCmz%2BjDBjqkAVo6%2Bk1jAzYcNwxUIrdMK%2BQMRbQdAoIrfnV7XfCQGbJHQsv36qVO4zoS6UBFq49P8H%2BHn257bq0D6CsAYuOCCv060N8zL4GQBSO1ailGYE0bfvaEp86xndXoeA1zGDzDkgYB3IenF%2BPR4mOG5lVNM4K63KWtAzF2TTAm3hmHoYftcqe1KG3okBLWoxZpIiuSe33%2FZMGrfFVOmbr3JKvph9zbhd4i&X-Amz-Signature=9d297619e5c473d62ec29f082a8dfc92e90e21fb088bf74b178fae9434b92086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWOFNCKS%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDMwJamRYbRTH2rEzpxz8Fc7mD1J1gm7dSVOmzsQzUdZgIhAPyElYpc%2B%2F4hX0OQtWVDOnYUu33vjGCjFalm6P3LuCedKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytRYVXKmyVF3WITGoq3ANaYIbsnYIUopgcuDZO3TEI5hUJuiBkkP6eWiEms6PkAuaG4UpCGcs4kK0dau33My7K4y%2BiNmZIXEg7Z3V2LkjCFQrKeY1PWNd%2Br4aJ79JAUuNNeiDg%2Frqbj4l8h9JyBMEK2iIji96PicLnqSJRJ5VXPWMVCIyKP0g42mOBjb718Dg7O%2Bfl4pOJ3iuHPF5z0ishSquhFuNZllwL%2FyNjere8tckjS7vrzq8Dr%2BHoGjswW6kal1Aq0OS8tsap1PsD7hY9sK5SMrZI8%2Bd3YloV93JsbllmNPy6KpN0PeWNkNam9%2BA9iZcEMTlujBRQUPuAKKAs64FflJ%2Bnn1RfYxebnvSRZffpJ2kA5h%2BYY6GXa36QAM1Een90d7olb2Kg2DRldQI0itd3wtWJm92ykjJfivfQ1C1a9gCvQgvknOr90ZcMd3%2FnpZmsqpYUt962qp3iWBEJjsa4aIqKZoMPaJYEAmMLOk1OMuwAkhX9U47AeTyRXMXumZHbBgLGcViEoeDVvx0qQmZ01nfM2QgHZC6wPgPWHtBTuXq%2BCN6ZTALb%2F7hdwErF%2F45yFh9YIURoH47e66GTkQKx3pDDATLBzVRYM4P9DgxgLXNZP2NrmsrlZ7eTjwj5G2RSxO85ZgHzBDCmz%2BjDBjqkAVo6%2Bk1jAzYcNwxUIrdMK%2BQMRbQdAoIrfnV7XfCQGbJHQsv36qVO4zoS6UBFq49P8H%2BHn257bq0D6CsAYuOCCv060N8zL4GQBSO1ailGYE0bfvaEp86xndXoeA1zGDzDkgYB3IenF%2BPR4mOG5lVNM4K63KWtAzF2TTAm3hmHoYftcqe1KG3okBLWoxZpIiuSe33%2FZMGrfFVOmbr3JKvph9zbhd4i&X-Amz-Signature=a0e43a8fc2584cf2b23ee9b15da9d7af276d4a08281e7b909eb7b1caf777518b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWOFNCKS%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDMwJamRYbRTH2rEzpxz8Fc7mD1J1gm7dSVOmzsQzUdZgIhAPyElYpc%2B%2F4hX0OQtWVDOnYUu33vjGCjFalm6P3LuCedKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytRYVXKmyVF3WITGoq3ANaYIbsnYIUopgcuDZO3TEI5hUJuiBkkP6eWiEms6PkAuaG4UpCGcs4kK0dau33My7K4y%2BiNmZIXEg7Z3V2LkjCFQrKeY1PWNd%2Br4aJ79JAUuNNeiDg%2Frqbj4l8h9JyBMEK2iIji96PicLnqSJRJ5VXPWMVCIyKP0g42mOBjb718Dg7O%2Bfl4pOJ3iuHPF5z0ishSquhFuNZllwL%2FyNjere8tckjS7vrzq8Dr%2BHoGjswW6kal1Aq0OS8tsap1PsD7hY9sK5SMrZI8%2Bd3YloV93JsbllmNPy6KpN0PeWNkNam9%2BA9iZcEMTlujBRQUPuAKKAs64FflJ%2Bnn1RfYxebnvSRZffpJ2kA5h%2BYY6GXa36QAM1Een90d7olb2Kg2DRldQI0itd3wtWJm92ykjJfivfQ1C1a9gCvQgvknOr90ZcMd3%2FnpZmsqpYUt962qp3iWBEJjsa4aIqKZoMPaJYEAmMLOk1OMuwAkhX9U47AeTyRXMXumZHbBgLGcViEoeDVvx0qQmZ01nfM2QgHZC6wPgPWHtBTuXq%2BCN6ZTALb%2F7hdwErF%2F45yFh9YIURoH47e66GTkQKx3pDDATLBzVRYM4P9DgxgLXNZP2NrmsrlZ7eTjwj5G2RSxO85ZgHzBDCmz%2BjDBjqkAVo6%2Bk1jAzYcNwxUIrdMK%2BQMRbQdAoIrfnV7XfCQGbJHQsv36qVO4zoS6UBFq49P8H%2BHn257bq0D6CsAYuOCCv060N8zL4GQBSO1ailGYE0bfvaEp86xndXoeA1zGDzDkgYB3IenF%2BPR4mOG5lVNM4K63KWtAzF2TTAm3hmHoYftcqe1KG3okBLWoxZpIiuSe33%2FZMGrfFVOmbr3JKvph9zbhd4i&X-Amz-Signature=1b36f82038dfe4285fd2d87b8c371358110e7d8a991021a94efad8f18e668271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWOFNCKS%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDMwJamRYbRTH2rEzpxz8Fc7mD1J1gm7dSVOmzsQzUdZgIhAPyElYpc%2B%2F4hX0OQtWVDOnYUu33vjGCjFalm6P3LuCedKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytRYVXKmyVF3WITGoq3ANaYIbsnYIUopgcuDZO3TEI5hUJuiBkkP6eWiEms6PkAuaG4UpCGcs4kK0dau33My7K4y%2BiNmZIXEg7Z3V2LkjCFQrKeY1PWNd%2Br4aJ79JAUuNNeiDg%2Frqbj4l8h9JyBMEK2iIji96PicLnqSJRJ5VXPWMVCIyKP0g42mOBjb718Dg7O%2Bfl4pOJ3iuHPF5z0ishSquhFuNZllwL%2FyNjere8tckjS7vrzq8Dr%2BHoGjswW6kal1Aq0OS8tsap1PsD7hY9sK5SMrZI8%2Bd3YloV93JsbllmNPy6KpN0PeWNkNam9%2BA9iZcEMTlujBRQUPuAKKAs64FflJ%2Bnn1RfYxebnvSRZffpJ2kA5h%2BYY6GXa36QAM1Een90d7olb2Kg2DRldQI0itd3wtWJm92ykjJfivfQ1C1a9gCvQgvknOr90ZcMd3%2FnpZmsqpYUt962qp3iWBEJjsa4aIqKZoMPaJYEAmMLOk1OMuwAkhX9U47AeTyRXMXumZHbBgLGcViEoeDVvx0qQmZ01nfM2QgHZC6wPgPWHtBTuXq%2BCN6ZTALb%2F7hdwErF%2F45yFh9YIURoH47e66GTkQKx3pDDATLBzVRYM4P9DgxgLXNZP2NrmsrlZ7eTjwj5G2RSxO85ZgHzBDCmz%2BjDBjqkAVo6%2Bk1jAzYcNwxUIrdMK%2BQMRbQdAoIrfnV7XfCQGbJHQsv36qVO4zoS6UBFq49P8H%2BHn257bq0D6CsAYuOCCv060N8zL4GQBSO1ailGYE0bfvaEp86xndXoeA1zGDzDkgYB3IenF%2BPR4mOG5lVNM4K63KWtAzF2TTAm3hmHoYftcqe1KG3okBLWoxZpIiuSe33%2FZMGrfFVOmbr3JKvph9zbhd4i&X-Amz-Signature=1ba729a0fad74255c9cffe4609f8baef7ba58d537523009436e18d3e3dfbf3d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWOFNCKS%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDMwJamRYbRTH2rEzpxz8Fc7mD1J1gm7dSVOmzsQzUdZgIhAPyElYpc%2B%2F4hX0OQtWVDOnYUu33vjGCjFalm6P3LuCedKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytRYVXKmyVF3WITGoq3ANaYIbsnYIUopgcuDZO3TEI5hUJuiBkkP6eWiEms6PkAuaG4UpCGcs4kK0dau33My7K4y%2BiNmZIXEg7Z3V2LkjCFQrKeY1PWNd%2Br4aJ79JAUuNNeiDg%2Frqbj4l8h9JyBMEK2iIji96PicLnqSJRJ5VXPWMVCIyKP0g42mOBjb718Dg7O%2Bfl4pOJ3iuHPF5z0ishSquhFuNZllwL%2FyNjere8tckjS7vrzq8Dr%2BHoGjswW6kal1Aq0OS8tsap1PsD7hY9sK5SMrZI8%2Bd3YloV93JsbllmNPy6KpN0PeWNkNam9%2BA9iZcEMTlujBRQUPuAKKAs64FflJ%2Bnn1RfYxebnvSRZffpJ2kA5h%2BYY6GXa36QAM1Een90d7olb2Kg2DRldQI0itd3wtWJm92ykjJfivfQ1C1a9gCvQgvknOr90ZcMd3%2FnpZmsqpYUt962qp3iWBEJjsa4aIqKZoMPaJYEAmMLOk1OMuwAkhX9U47AeTyRXMXumZHbBgLGcViEoeDVvx0qQmZ01nfM2QgHZC6wPgPWHtBTuXq%2BCN6ZTALb%2F7hdwErF%2F45yFh9YIURoH47e66GTkQKx3pDDATLBzVRYM4P9DgxgLXNZP2NrmsrlZ7eTjwj5G2RSxO85ZgHzBDCmz%2BjDBjqkAVo6%2Bk1jAzYcNwxUIrdMK%2BQMRbQdAoIrfnV7XfCQGbJHQsv36qVO4zoS6UBFq49P8H%2BHn257bq0D6CsAYuOCCv060N8zL4GQBSO1ailGYE0bfvaEp86xndXoeA1zGDzDkgYB3IenF%2BPR4mOG5lVNM4K63KWtAzF2TTAm3hmHoYftcqe1KG3okBLWoxZpIiuSe33%2FZMGrfFVOmbr3JKvph9zbhd4i&X-Amz-Signature=b700eb406ec96c5638f26eff6f25c5cd1231545042a29ab7976b93b1de07dbaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
