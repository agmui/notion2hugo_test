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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI54BKPT%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIHjGHeMO1oIGJhiyMIYE1nohEdhdlSaBRIWK1ELQ6BtiAiEAn61ScBCzUuPWPHv6psslQ2IEY0I3ww3DSvqeb2PGkMQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDHaw1%2BtbnamBp63MfCrcA31n84qsA3PG8BqnA1la7YKHEm%2BLjnQseDIw5uvtu3xh3rPoxNK%2FUapPnxh%2B%2BXQe1sTPDbLGnTPZiyfT30VTkCm2OzGldv7fdB6%2Biu%2Bq5TesbjDd0yFX2zYGW3Vw4zpedX0%2Bt%2BhDoPvzBPdWqKUQ2X80I2cEk2Opt0r%2FDwJ5cCjyOf58mG9BMN3uHVzcNJJUU%2FKZumrx8JHN10jR01o9ajZNFRd2k3YBYS4OlFpDsBZ0qokgGdwjIide1TR43ZlJFVWFFnY8FQP%2BIDJGfF6BJu04sronFuiY0YqwX3tVEAkBVlmn3YO%2Ft%2BYziXaBb9Qhwp%2BaF8MR2WLZBWJJfNf7ZMdlH8Ee%2BV%2FfpXDJI1yAyttXAYAzn5zpyidlr8P0zZpNxaErjZB23BP1iMbjA67lsx19BgE%2F1S2fjHPTx%2F5xLIPleGDAyl5ggKp5Cl6l1VeHNNsvX0teVTcgfM6jQGDqFFInQ6quI10fFiXjay0GOn30B1%2BNXoNwtvEQn0MKoNt4O2uVUN0YBq43jnadSAY01BXLwWYtyOpKeCe9rGkiMDJXuUaDIdn5gkj3u%2BqDZfcqgP1G9XeoakdUvtgA0vOibcVxc0mck5c3k1LzLEsBF2AtCzcfvUP84ByjqXLkMJeV4sMGOqUB42rU65K1s%2B%2BCwUSEAhZ0P9909Pq8TARoj%2Bo5s2RvavV9d0dFqgoHVF870FldsSFsS9UM6pB1eX2HrON6SABIy3uq5AQx4jINcBDwehgb02DcEDR%2FZCEUiNtH5ZtXf5488A3Y9mbdWOlbVDT1yqmCl3OsRvekWdMH89g6%2B99YKULgVx4qjU9%2BP3aOfghi5eMJBe3hxmy2TqFBVqua8RXIqnBojGTj&X-Amz-Signature=421603e51bfb3537caa3d84e3c748ee4f621f6b31733734626379e43acb9df63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI54BKPT%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIHjGHeMO1oIGJhiyMIYE1nohEdhdlSaBRIWK1ELQ6BtiAiEAn61ScBCzUuPWPHv6psslQ2IEY0I3ww3DSvqeb2PGkMQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDHaw1%2BtbnamBp63MfCrcA31n84qsA3PG8BqnA1la7YKHEm%2BLjnQseDIw5uvtu3xh3rPoxNK%2FUapPnxh%2B%2BXQe1sTPDbLGnTPZiyfT30VTkCm2OzGldv7fdB6%2Biu%2Bq5TesbjDd0yFX2zYGW3Vw4zpedX0%2Bt%2BhDoPvzBPdWqKUQ2X80I2cEk2Opt0r%2FDwJ5cCjyOf58mG9BMN3uHVzcNJJUU%2FKZumrx8JHN10jR01o9ajZNFRd2k3YBYS4OlFpDsBZ0qokgGdwjIide1TR43ZlJFVWFFnY8FQP%2BIDJGfF6BJu04sronFuiY0YqwX3tVEAkBVlmn3YO%2Ft%2BYziXaBb9Qhwp%2BaF8MR2WLZBWJJfNf7ZMdlH8Ee%2BV%2FfpXDJI1yAyttXAYAzn5zpyidlr8P0zZpNxaErjZB23BP1iMbjA67lsx19BgE%2F1S2fjHPTx%2F5xLIPleGDAyl5ggKp5Cl6l1VeHNNsvX0teVTcgfM6jQGDqFFInQ6quI10fFiXjay0GOn30B1%2BNXoNwtvEQn0MKoNt4O2uVUN0YBq43jnadSAY01BXLwWYtyOpKeCe9rGkiMDJXuUaDIdn5gkj3u%2BqDZfcqgP1G9XeoakdUvtgA0vOibcVxc0mck5c3k1LzLEsBF2AtCzcfvUP84ByjqXLkMJeV4sMGOqUB42rU65K1s%2B%2BCwUSEAhZ0P9909Pq8TARoj%2Bo5s2RvavV9d0dFqgoHVF870FldsSFsS9UM6pB1eX2HrON6SABIy3uq5AQx4jINcBDwehgb02DcEDR%2FZCEUiNtH5ZtXf5488A3Y9mbdWOlbVDT1yqmCl3OsRvekWdMH89g6%2B99YKULgVx4qjU9%2BP3aOfghi5eMJBe3hxmy2TqFBVqua8RXIqnBojGTj&X-Amz-Signature=4ba5944cc6e45d4a7ef9bc6d35f6b7ced09dab690caf41c5315edc98bd488e1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI54BKPT%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIHjGHeMO1oIGJhiyMIYE1nohEdhdlSaBRIWK1ELQ6BtiAiEAn61ScBCzUuPWPHv6psslQ2IEY0I3ww3DSvqeb2PGkMQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDHaw1%2BtbnamBp63MfCrcA31n84qsA3PG8BqnA1la7YKHEm%2BLjnQseDIw5uvtu3xh3rPoxNK%2FUapPnxh%2B%2BXQe1sTPDbLGnTPZiyfT30VTkCm2OzGldv7fdB6%2Biu%2Bq5TesbjDd0yFX2zYGW3Vw4zpedX0%2Bt%2BhDoPvzBPdWqKUQ2X80I2cEk2Opt0r%2FDwJ5cCjyOf58mG9BMN3uHVzcNJJUU%2FKZumrx8JHN10jR01o9ajZNFRd2k3YBYS4OlFpDsBZ0qokgGdwjIide1TR43ZlJFVWFFnY8FQP%2BIDJGfF6BJu04sronFuiY0YqwX3tVEAkBVlmn3YO%2Ft%2BYziXaBb9Qhwp%2BaF8MR2WLZBWJJfNf7ZMdlH8Ee%2BV%2FfpXDJI1yAyttXAYAzn5zpyidlr8P0zZpNxaErjZB23BP1iMbjA67lsx19BgE%2F1S2fjHPTx%2F5xLIPleGDAyl5ggKp5Cl6l1VeHNNsvX0teVTcgfM6jQGDqFFInQ6quI10fFiXjay0GOn30B1%2BNXoNwtvEQn0MKoNt4O2uVUN0YBq43jnadSAY01BXLwWYtyOpKeCe9rGkiMDJXuUaDIdn5gkj3u%2BqDZfcqgP1G9XeoakdUvtgA0vOibcVxc0mck5c3k1LzLEsBF2AtCzcfvUP84ByjqXLkMJeV4sMGOqUB42rU65K1s%2B%2BCwUSEAhZ0P9909Pq8TARoj%2Bo5s2RvavV9d0dFqgoHVF870FldsSFsS9UM6pB1eX2HrON6SABIy3uq5AQx4jINcBDwehgb02DcEDR%2FZCEUiNtH5ZtXf5488A3Y9mbdWOlbVDT1yqmCl3OsRvekWdMH89g6%2B99YKULgVx4qjU9%2BP3aOfghi5eMJBe3hxmy2TqFBVqua8RXIqnBojGTj&X-Amz-Signature=5be5d4cf9db40cca8faa14f7cb016de4f59c9bc297dc630874c796bf4211dd31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI54BKPT%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIHjGHeMO1oIGJhiyMIYE1nohEdhdlSaBRIWK1ELQ6BtiAiEAn61ScBCzUuPWPHv6psslQ2IEY0I3ww3DSvqeb2PGkMQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDHaw1%2BtbnamBp63MfCrcA31n84qsA3PG8BqnA1la7YKHEm%2BLjnQseDIw5uvtu3xh3rPoxNK%2FUapPnxh%2B%2BXQe1sTPDbLGnTPZiyfT30VTkCm2OzGldv7fdB6%2Biu%2Bq5TesbjDd0yFX2zYGW3Vw4zpedX0%2Bt%2BhDoPvzBPdWqKUQ2X80I2cEk2Opt0r%2FDwJ5cCjyOf58mG9BMN3uHVzcNJJUU%2FKZumrx8JHN10jR01o9ajZNFRd2k3YBYS4OlFpDsBZ0qokgGdwjIide1TR43ZlJFVWFFnY8FQP%2BIDJGfF6BJu04sronFuiY0YqwX3tVEAkBVlmn3YO%2Ft%2BYziXaBb9Qhwp%2BaF8MR2WLZBWJJfNf7ZMdlH8Ee%2BV%2FfpXDJI1yAyttXAYAzn5zpyidlr8P0zZpNxaErjZB23BP1iMbjA67lsx19BgE%2F1S2fjHPTx%2F5xLIPleGDAyl5ggKp5Cl6l1VeHNNsvX0teVTcgfM6jQGDqFFInQ6quI10fFiXjay0GOn30B1%2BNXoNwtvEQn0MKoNt4O2uVUN0YBq43jnadSAY01BXLwWYtyOpKeCe9rGkiMDJXuUaDIdn5gkj3u%2BqDZfcqgP1G9XeoakdUvtgA0vOibcVxc0mck5c3k1LzLEsBF2AtCzcfvUP84ByjqXLkMJeV4sMGOqUB42rU65K1s%2B%2BCwUSEAhZ0P9909Pq8TARoj%2Bo5s2RvavV9d0dFqgoHVF870FldsSFsS9UM6pB1eX2HrON6SABIy3uq5AQx4jINcBDwehgb02DcEDR%2FZCEUiNtH5ZtXf5488A3Y9mbdWOlbVDT1yqmCl3OsRvekWdMH89g6%2B99YKULgVx4qjU9%2BP3aOfghi5eMJBe3hxmy2TqFBVqua8RXIqnBojGTj&X-Amz-Signature=fa3ae98bf7d9890250199103287a5df30df4b8994ca486f20efcc68c39318eb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI54BKPT%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIHjGHeMO1oIGJhiyMIYE1nohEdhdlSaBRIWK1ELQ6BtiAiEAn61ScBCzUuPWPHv6psslQ2IEY0I3ww3DSvqeb2PGkMQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDHaw1%2BtbnamBp63MfCrcA31n84qsA3PG8BqnA1la7YKHEm%2BLjnQseDIw5uvtu3xh3rPoxNK%2FUapPnxh%2B%2BXQe1sTPDbLGnTPZiyfT30VTkCm2OzGldv7fdB6%2Biu%2Bq5TesbjDd0yFX2zYGW3Vw4zpedX0%2Bt%2BhDoPvzBPdWqKUQ2X80I2cEk2Opt0r%2FDwJ5cCjyOf58mG9BMN3uHVzcNJJUU%2FKZumrx8JHN10jR01o9ajZNFRd2k3YBYS4OlFpDsBZ0qokgGdwjIide1TR43ZlJFVWFFnY8FQP%2BIDJGfF6BJu04sronFuiY0YqwX3tVEAkBVlmn3YO%2Ft%2BYziXaBb9Qhwp%2BaF8MR2WLZBWJJfNf7ZMdlH8Ee%2BV%2FfpXDJI1yAyttXAYAzn5zpyidlr8P0zZpNxaErjZB23BP1iMbjA67lsx19BgE%2F1S2fjHPTx%2F5xLIPleGDAyl5ggKp5Cl6l1VeHNNsvX0teVTcgfM6jQGDqFFInQ6quI10fFiXjay0GOn30B1%2BNXoNwtvEQn0MKoNt4O2uVUN0YBq43jnadSAY01BXLwWYtyOpKeCe9rGkiMDJXuUaDIdn5gkj3u%2BqDZfcqgP1G9XeoakdUvtgA0vOibcVxc0mck5c3k1LzLEsBF2AtCzcfvUP84ByjqXLkMJeV4sMGOqUB42rU65K1s%2B%2BCwUSEAhZ0P9909Pq8TARoj%2Bo5s2RvavV9d0dFqgoHVF870FldsSFsS9UM6pB1eX2HrON6SABIy3uq5AQx4jINcBDwehgb02DcEDR%2FZCEUiNtH5ZtXf5488A3Y9mbdWOlbVDT1yqmCl3OsRvekWdMH89g6%2B99YKULgVx4qjU9%2BP3aOfghi5eMJBe3hxmy2TqFBVqua8RXIqnBojGTj&X-Amz-Signature=6b1b017f24b8abbbe32c0be9b3269dca8231e417f63584eed62e5d3d8192a2ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
