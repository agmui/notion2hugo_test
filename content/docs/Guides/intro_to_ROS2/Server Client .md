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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKLYG2L%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCkNUWY%2F1HfJ2S21noTsIuiqByM5htyQ4cdb9MLzvQ82wIgbBWvd%2B6M4fecFKWXK0dYvg6emhpwgaiAmvxCVp%2BuJXwq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDLNW1kOQ4QFMRpCWfSrcAy88IgQCTqZRysukIB3bmPZkXzlr7ZUX1TK7Iu8hnGY4cV9gybehhc0InDBJnUhgmv%2BD0z3jXsi%2Bp0diIt130%2BNdBWsCdB4bz7r78tu25S%2Bm1tqyHLyX14ZtF0H8ajtlqphO2LEF%2BgR%2B9S1ijNyheYP67Ri%2BkSsqr8RsDmzrRAe96G7F2o9sPdmatjk%2FmI%2BkCIs%2BQJ1XxXxfF4lbf3TpfdmTVCcJA%2FVEscaay0JBf90s2VNY5d6h5O4Zxe8K5OjkwadGeKeo9XwBEMwSXpLOx2%2BrWRQ5VqJcZCFcmLpaucHo%2BSUra8ilJP8bLMbvvF879B9ZitZphAz8ikf3zG7mToTc0ts%2BSG7n7CnKOzei2DeCIsgVbVpdqfJrQUfisre4KErEcsKwPoOP%2FB%2FffEYkSzz4N5DE3EpBCr91oHRVAuLFM8H7Ve0u5Uvj%2FZT0QkbTTkWLpR34UQPNrqrK6xZYDBxq6AOzPF84do%2FOxwGgouTFVEgMelbYCOb3wljhBx0eKn43VQ9RfQ01vJozS3A8RHIIvXMdIw4yLYfS6iBDdmqYAeBrgnzG14Ejoh%2Fl0O1zBXmx7okCyL5ELylkm9LsNqzJnRXN9fUFN9%2BDf1qSEmbMYLsQ1ZrliZ33dhdtMLTsj70GOqUBKO26EXKf01RdQGE97WkOOCthur%2FM83zBX10Fp4R38PsoXyyvvm5%2B4V%2B6BLzmle2vyCJeUasY%2FWflDoFxsXjd3OETKgULcaXKwH%2FvRZRlWs8HNXw2x4UqKbUOSrjkg6CR7daZThhx%2BJoeaUTnxDY9G5QU9KMqD9XwSVgFv0qGMt5GKUCo7WhoDkfKFTn6fE0XbxoStgSAC%2FuhTcKPABhjYamCEVSb&X-Amz-Signature=b6b211c7f6d5018e0f7e803f58e0a752bdcc555251cae9234565b59868d3b5da&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKLYG2L%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCkNUWY%2F1HfJ2S21noTsIuiqByM5htyQ4cdb9MLzvQ82wIgbBWvd%2B6M4fecFKWXK0dYvg6emhpwgaiAmvxCVp%2BuJXwq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDLNW1kOQ4QFMRpCWfSrcAy88IgQCTqZRysukIB3bmPZkXzlr7ZUX1TK7Iu8hnGY4cV9gybehhc0InDBJnUhgmv%2BD0z3jXsi%2Bp0diIt130%2BNdBWsCdB4bz7r78tu25S%2Bm1tqyHLyX14ZtF0H8ajtlqphO2LEF%2BgR%2B9S1ijNyheYP67Ri%2BkSsqr8RsDmzrRAe96G7F2o9sPdmatjk%2FmI%2BkCIs%2BQJ1XxXxfF4lbf3TpfdmTVCcJA%2FVEscaay0JBf90s2VNY5d6h5O4Zxe8K5OjkwadGeKeo9XwBEMwSXpLOx2%2BrWRQ5VqJcZCFcmLpaucHo%2BSUra8ilJP8bLMbvvF879B9ZitZphAz8ikf3zG7mToTc0ts%2BSG7n7CnKOzei2DeCIsgVbVpdqfJrQUfisre4KErEcsKwPoOP%2FB%2FffEYkSzz4N5DE3EpBCr91oHRVAuLFM8H7Ve0u5Uvj%2FZT0QkbTTkWLpR34UQPNrqrK6xZYDBxq6AOzPF84do%2FOxwGgouTFVEgMelbYCOb3wljhBx0eKn43VQ9RfQ01vJozS3A8RHIIvXMdIw4yLYfS6iBDdmqYAeBrgnzG14Ejoh%2Fl0O1zBXmx7okCyL5ELylkm9LsNqzJnRXN9fUFN9%2BDf1qSEmbMYLsQ1ZrliZ33dhdtMLTsj70GOqUBKO26EXKf01RdQGE97WkOOCthur%2FM83zBX10Fp4R38PsoXyyvvm5%2B4V%2B6BLzmle2vyCJeUasY%2FWflDoFxsXjd3OETKgULcaXKwH%2FvRZRlWs8HNXw2x4UqKbUOSrjkg6CR7daZThhx%2BJoeaUTnxDY9G5QU9KMqD9XwSVgFv0qGMt5GKUCo7WhoDkfKFTn6fE0XbxoStgSAC%2FuhTcKPABhjYamCEVSb&X-Amz-Signature=4b49b77226855ab4394da899539edb81026339561af5536fc6d3dc3825f64b4b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKLYG2L%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCkNUWY%2F1HfJ2S21noTsIuiqByM5htyQ4cdb9MLzvQ82wIgbBWvd%2B6M4fecFKWXK0dYvg6emhpwgaiAmvxCVp%2BuJXwq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDLNW1kOQ4QFMRpCWfSrcAy88IgQCTqZRysukIB3bmPZkXzlr7ZUX1TK7Iu8hnGY4cV9gybehhc0InDBJnUhgmv%2BD0z3jXsi%2Bp0diIt130%2BNdBWsCdB4bz7r78tu25S%2Bm1tqyHLyX14ZtF0H8ajtlqphO2LEF%2BgR%2B9S1ijNyheYP67Ri%2BkSsqr8RsDmzrRAe96G7F2o9sPdmatjk%2FmI%2BkCIs%2BQJ1XxXxfF4lbf3TpfdmTVCcJA%2FVEscaay0JBf90s2VNY5d6h5O4Zxe8K5OjkwadGeKeo9XwBEMwSXpLOx2%2BrWRQ5VqJcZCFcmLpaucHo%2BSUra8ilJP8bLMbvvF879B9ZitZphAz8ikf3zG7mToTc0ts%2BSG7n7CnKOzei2DeCIsgVbVpdqfJrQUfisre4KErEcsKwPoOP%2FB%2FffEYkSzz4N5DE3EpBCr91oHRVAuLFM8H7Ve0u5Uvj%2FZT0QkbTTkWLpR34UQPNrqrK6xZYDBxq6AOzPF84do%2FOxwGgouTFVEgMelbYCOb3wljhBx0eKn43VQ9RfQ01vJozS3A8RHIIvXMdIw4yLYfS6iBDdmqYAeBrgnzG14Ejoh%2Fl0O1zBXmx7okCyL5ELylkm9LsNqzJnRXN9fUFN9%2BDf1qSEmbMYLsQ1ZrliZ33dhdtMLTsj70GOqUBKO26EXKf01RdQGE97WkOOCthur%2FM83zBX10Fp4R38PsoXyyvvm5%2B4V%2B6BLzmle2vyCJeUasY%2FWflDoFxsXjd3OETKgULcaXKwH%2FvRZRlWs8HNXw2x4UqKbUOSrjkg6CR7daZThhx%2BJoeaUTnxDY9G5QU9KMqD9XwSVgFv0qGMt5GKUCo7WhoDkfKFTn6fE0XbxoStgSAC%2FuhTcKPABhjYamCEVSb&X-Amz-Signature=ad41b0114092c6250b348e48e1348c12566f552ceabcc6d3886c550a0551f9fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKLYG2L%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCkNUWY%2F1HfJ2S21noTsIuiqByM5htyQ4cdb9MLzvQ82wIgbBWvd%2B6M4fecFKWXK0dYvg6emhpwgaiAmvxCVp%2BuJXwq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDLNW1kOQ4QFMRpCWfSrcAy88IgQCTqZRysukIB3bmPZkXzlr7ZUX1TK7Iu8hnGY4cV9gybehhc0InDBJnUhgmv%2BD0z3jXsi%2Bp0diIt130%2BNdBWsCdB4bz7r78tu25S%2Bm1tqyHLyX14ZtF0H8ajtlqphO2LEF%2BgR%2B9S1ijNyheYP67Ri%2BkSsqr8RsDmzrRAe96G7F2o9sPdmatjk%2FmI%2BkCIs%2BQJ1XxXxfF4lbf3TpfdmTVCcJA%2FVEscaay0JBf90s2VNY5d6h5O4Zxe8K5OjkwadGeKeo9XwBEMwSXpLOx2%2BrWRQ5VqJcZCFcmLpaucHo%2BSUra8ilJP8bLMbvvF879B9ZitZphAz8ikf3zG7mToTc0ts%2BSG7n7CnKOzei2DeCIsgVbVpdqfJrQUfisre4KErEcsKwPoOP%2FB%2FffEYkSzz4N5DE3EpBCr91oHRVAuLFM8H7Ve0u5Uvj%2FZT0QkbTTkWLpR34UQPNrqrK6xZYDBxq6AOzPF84do%2FOxwGgouTFVEgMelbYCOb3wljhBx0eKn43VQ9RfQ01vJozS3A8RHIIvXMdIw4yLYfS6iBDdmqYAeBrgnzG14Ejoh%2Fl0O1zBXmx7okCyL5ELylkm9LsNqzJnRXN9fUFN9%2BDf1qSEmbMYLsQ1ZrliZ33dhdtMLTsj70GOqUBKO26EXKf01RdQGE97WkOOCthur%2FM83zBX10Fp4R38PsoXyyvvm5%2B4V%2B6BLzmle2vyCJeUasY%2FWflDoFxsXjd3OETKgULcaXKwH%2FvRZRlWs8HNXw2x4UqKbUOSrjkg6CR7daZThhx%2BJoeaUTnxDY9G5QU9KMqD9XwSVgFv0qGMt5GKUCo7WhoDkfKFTn6fE0XbxoStgSAC%2FuhTcKPABhjYamCEVSb&X-Amz-Signature=0a8fabbd1cc62f23244e7dd8ab0997305fa10bf345c77fdb0b0b02c2238ec895&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKLYG2L%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCkNUWY%2F1HfJ2S21noTsIuiqByM5htyQ4cdb9MLzvQ82wIgbBWvd%2B6M4fecFKWXK0dYvg6emhpwgaiAmvxCVp%2BuJXwq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDLNW1kOQ4QFMRpCWfSrcAy88IgQCTqZRysukIB3bmPZkXzlr7ZUX1TK7Iu8hnGY4cV9gybehhc0InDBJnUhgmv%2BD0z3jXsi%2Bp0diIt130%2BNdBWsCdB4bz7r78tu25S%2Bm1tqyHLyX14ZtF0H8ajtlqphO2LEF%2BgR%2B9S1ijNyheYP67Ri%2BkSsqr8RsDmzrRAe96G7F2o9sPdmatjk%2FmI%2BkCIs%2BQJ1XxXxfF4lbf3TpfdmTVCcJA%2FVEscaay0JBf90s2VNY5d6h5O4Zxe8K5OjkwadGeKeo9XwBEMwSXpLOx2%2BrWRQ5VqJcZCFcmLpaucHo%2BSUra8ilJP8bLMbvvF879B9ZitZphAz8ikf3zG7mToTc0ts%2BSG7n7CnKOzei2DeCIsgVbVpdqfJrQUfisre4KErEcsKwPoOP%2FB%2FffEYkSzz4N5DE3EpBCr91oHRVAuLFM8H7Ve0u5Uvj%2FZT0QkbTTkWLpR34UQPNrqrK6xZYDBxq6AOzPF84do%2FOxwGgouTFVEgMelbYCOb3wljhBx0eKn43VQ9RfQ01vJozS3A8RHIIvXMdIw4yLYfS6iBDdmqYAeBrgnzG14Ejoh%2Fl0O1zBXmx7okCyL5ELylkm9LsNqzJnRXN9fUFN9%2BDf1qSEmbMYLsQ1ZrliZ33dhdtMLTsj70GOqUBKO26EXKf01RdQGE97WkOOCthur%2FM83zBX10Fp4R38PsoXyyvvm5%2B4V%2B6BLzmle2vyCJeUasY%2FWflDoFxsXjd3OETKgULcaXKwH%2FvRZRlWs8HNXw2x4UqKbUOSrjkg6CR7daZThhx%2BJoeaUTnxDY9G5QU9KMqD9XwSVgFv0qGMt5GKUCo7WhoDkfKFTn6fE0XbxoStgSAC%2FuhTcKPABhjYamCEVSb&X-Amz-Signature=df40c6b97621d3d95a46470eccbecb28478650104ba0ef76e0f2d9795478cd83&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
