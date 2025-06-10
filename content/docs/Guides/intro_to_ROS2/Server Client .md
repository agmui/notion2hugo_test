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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DMD4QNK%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0NTaHI0dYOmQ%2BTp8GGVbMX1PDcM%2BdI3zO47KqAC4uDAIgBF6bnRiGfUCkfnTGrXpnHK6YfA%2BinJNuiflpzHm%2B59IqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPwwxXfW2KcsWkom9yrcA%2Fnk%2B5oQpdnQJ%2FcFtO9qTZ8%2BV9lJHu7WVGVu0BnvmjuxMDJmWekbNgoDwB%2FkpUHt%2BOJ2HIbBllrAf6yMES9cz4Idh8iZv3r7k2PKcqeDHheC3QUmJeotJwqmb7K9XzDzZgm7lbIRJjTYfSsj7cvjaJP29QJokj0JBW3SDJ2cI1ARVOq6YgNc%2BI01OWBceisyZLFFS%2FG6WioZdMl9hQeIlZatNAbI9ce%2BMnfyiKKUpB%2FwwHbvOwqzvB31cHeR6zgm6wk2v%2BrdAROc19Ef5TYWNU%2FBcKiqEO6zpMCyEKaAYGBdwX9dvX401XvR7N4gdiKD4CXdC6xJAENkMPaHoMGfep%2FtF%2BB6VGtEW6QIvGyy%2BQV2FCUD%2FT%2BlzISS8COW5wUmlhGzsckcnVYJyAnbr7gP3btEQOLFNzvu8hUPfeWKia4qlJmHM8DCLgOMhOHqj5YC8g%2FcVA%2BU06O%2FpoB%2Bjhmuvnf5%2Fc2MoPWOrooZFMEh24mF0PtPQMDLvasqizZlXa8VfPCYlgNbcRRJevKsSzlZ%2FNNJuMODnuepuvEjkg2vWE6%2BKDyZ9n3sfVtA3GLArtJVEFHKeyroJ%2FIKR%2BMebcdIW39h3abvP29nDFIMcCMVVOiyr4iY%2F7sb01%2BHClmDMOHwncIGOqUBiDPATRtiAbmRkfBxRs91qO85Pu7gwLvdHpoWXih%2BFgxxuUhmip0Pl%2BboCCivagMqewkLX3V8RGk9u7RJ0bOcuFndWxfA8I6o3b6saVsef55XrnpD4uxBVvVrrmu4vlEgdc5HB3NOFIxxl13Dm7PUXUXcF%2BNCDmWC%2Bhxil4OKtwLKh3ozD5QqFfjXsnaSkHniP%2BTNieZ4vdFBftvY9lRqww2kSSQs&X-Amz-Signature=d882b6483f662614537f15d6cfd1c7eab844b3e5f1a93cf8d6f2805e9c2b86e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DMD4QNK%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0NTaHI0dYOmQ%2BTp8GGVbMX1PDcM%2BdI3zO47KqAC4uDAIgBF6bnRiGfUCkfnTGrXpnHK6YfA%2BinJNuiflpzHm%2B59IqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPwwxXfW2KcsWkom9yrcA%2Fnk%2B5oQpdnQJ%2FcFtO9qTZ8%2BV9lJHu7WVGVu0BnvmjuxMDJmWekbNgoDwB%2FkpUHt%2BOJ2HIbBllrAf6yMES9cz4Idh8iZv3r7k2PKcqeDHheC3QUmJeotJwqmb7K9XzDzZgm7lbIRJjTYfSsj7cvjaJP29QJokj0JBW3SDJ2cI1ARVOq6YgNc%2BI01OWBceisyZLFFS%2FG6WioZdMl9hQeIlZatNAbI9ce%2BMnfyiKKUpB%2FwwHbvOwqzvB31cHeR6zgm6wk2v%2BrdAROc19Ef5TYWNU%2FBcKiqEO6zpMCyEKaAYGBdwX9dvX401XvR7N4gdiKD4CXdC6xJAENkMPaHoMGfep%2FtF%2BB6VGtEW6QIvGyy%2BQV2FCUD%2FT%2BlzISS8COW5wUmlhGzsckcnVYJyAnbr7gP3btEQOLFNzvu8hUPfeWKia4qlJmHM8DCLgOMhOHqj5YC8g%2FcVA%2BU06O%2FpoB%2Bjhmuvnf5%2Fc2MoPWOrooZFMEh24mF0PtPQMDLvasqizZlXa8VfPCYlgNbcRRJevKsSzlZ%2FNNJuMODnuepuvEjkg2vWE6%2BKDyZ9n3sfVtA3GLArtJVEFHKeyroJ%2FIKR%2BMebcdIW39h3abvP29nDFIMcCMVVOiyr4iY%2F7sb01%2BHClmDMOHwncIGOqUBiDPATRtiAbmRkfBxRs91qO85Pu7gwLvdHpoWXih%2BFgxxuUhmip0Pl%2BboCCivagMqewkLX3V8RGk9u7RJ0bOcuFndWxfA8I6o3b6saVsef55XrnpD4uxBVvVrrmu4vlEgdc5HB3NOFIxxl13Dm7PUXUXcF%2BNCDmWC%2Bhxil4OKtwLKh3ozD5QqFfjXsnaSkHniP%2BTNieZ4vdFBftvY9lRqww2kSSQs&X-Amz-Signature=9ed1e20513bc0bf5d78c1fdc9d4d6e0a0be7b632ca2bc8f6fbea7752a0bdae69&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DMD4QNK%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0NTaHI0dYOmQ%2BTp8GGVbMX1PDcM%2BdI3zO47KqAC4uDAIgBF6bnRiGfUCkfnTGrXpnHK6YfA%2BinJNuiflpzHm%2B59IqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPwwxXfW2KcsWkom9yrcA%2Fnk%2B5oQpdnQJ%2FcFtO9qTZ8%2BV9lJHu7WVGVu0BnvmjuxMDJmWekbNgoDwB%2FkpUHt%2BOJ2HIbBllrAf6yMES9cz4Idh8iZv3r7k2PKcqeDHheC3QUmJeotJwqmb7K9XzDzZgm7lbIRJjTYfSsj7cvjaJP29QJokj0JBW3SDJ2cI1ARVOq6YgNc%2BI01OWBceisyZLFFS%2FG6WioZdMl9hQeIlZatNAbI9ce%2BMnfyiKKUpB%2FwwHbvOwqzvB31cHeR6zgm6wk2v%2BrdAROc19Ef5TYWNU%2FBcKiqEO6zpMCyEKaAYGBdwX9dvX401XvR7N4gdiKD4CXdC6xJAENkMPaHoMGfep%2FtF%2BB6VGtEW6QIvGyy%2BQV2FCUD%2FT%2BlzISS8COW5wUmlhGzsckcnVYJyAnbr7gP3btEQOLFNzvu8hUPfeWKia4qlJmHM8DCLgOMhOHqj5YC8g%2FcVA%2BU06O%2FpoB%2Bjhmuvnf5%2Fc2MoPWOrooZFMEh24mF0PtPQMDLvasqizZlXa8VfPCYlgNbcRRJevKsSzlZ%2FNNJuMODnuepuvEjkg2vWE6%2BKDyZ9n3sfVtA3GLArtJVEFHKeyroJ%2FIKR%2BMebcdIW39h3abvP29nDFIMcCMVVOiyr4iY%2F7sb01%2BHClmDMOHwncIGOqUBiDPATRtiAbmRkfBxRs91qO85Pu7gwLvdHpoWXih%2BFgxxuUhmip0Pl%2BboCCivagMqewkLX3V8RGk9u7RJ0bOcuFndWxfA8I6o3b6saVsef55XrnpD4uxBVvVrrmu4vlEgdc5HB3NOFIxxl13Dm7PUXUXcF%2BNCDmWC%2Bhxil4OKtwLKh3ozD5QqFfjXsnaSkHniP%2BTNieZ4vdFBftvY9lRqww2kSSQs&X-Amz-Signature=1c4f75a4ffa95a238c567cd93cc5728c282fb5ee40e5e68b70706c0204a2cef8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DMD4QNK%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0NTaHI0dYOmQ%2BTp8GGVbMX1PDcM%2BdI3zO47KqAC4uDAIgBF6bnRiGfUCkfnTGrXpnHK6YfA%2BinJNuiflpzHm%2B59IqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPwwxXfW2KcsWkom9yrcA%2Fnk%2B5oQpdnQJ%2FcFtO9qTZ8%2BV9lJHu7WVGVu0BnvmjuxMDJmWekbNgoDwB%2FkpUHt%2BOJ2HIbBllrAf6yMES9cz4Idh8iZv3r7k2PKcqeDHheC3QUmJeotJwqmb7K9XzDzZgm7lbIRJjTYfSsj7cvjaJP29QJokj0JBW3SDJ2cI1ARVOq6YgNc%2BI01OWBceisyZLFFS%2FG6WioZdMl9hQeIlZatNAbI9ce%2BMnfyiKKUpB%2FwwHbvOwqzvB31cHeR6zgm6wk2v%2BrdAROc19Ef5TYWNU%2FBcKiqEO6zpMCyEKaAYGBdwX9dvX401XvR7N4gdiKD4CXdC6xJAENkMPaHoMGfep%2FtF%2BB6VGtEW6QIvGyy%2BQV2FCUD%2FT%2BlzISS8COW5wUmlhGzsckcnVYJyAnbr7gP3btEQOLFNzvu8hUPfeWKia4qlJmHM8DCLgOMhOHqj5YC8g%2FcVA%2BU06O%2FpoB%2Bjhmuvnf5%2Fc2MoPWOrooZFMEh24mF0PtPQMDLvasqizZlXa8VfPCYlgNbcRRJevKsSzlZ%2FNNJuMODnuepuvEjkg2vWE6%2BKDyZ9n3sfVtA3GLArtJVEFHKeyroJ%2FIKR%2BMebcdIW39h3abvP29nDFIMcCMVVOiyr4iY%2F7sb01%2BHClmDMOHwncIGOqUBiDPATRtiAbmRkfBxRs91qO85Pu7gwLvdHpoWXih%2BFgxxuUhmip0Pl%2BboCCivagMqewkLX3V8RGk9u7RJ0bOcuFndWxfA8I6o3b6saVsef55XrnpD4uxBVvVrrmu4vlEgdc5HB3NOFIxxl13Dm7PUXUXcF%2BNCDmWC%2Bhxil4OKtwLKh3ozD5QqFfjXsnaSkHniP%2BTNieZ4vdFBftvY9lRqww2kSSQs&X-Amz-Signature=1b1b028f940ef8c99f765292984012e18b76b665367d306468803707f2e260c1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DMD4QNK%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0NTaHI0dYOmQ%2BTp8GGVbMX1PDcM%2BdI3zO47KqAC4uDAIgBF6bnRiGfUCkfnTGrXpnHK6YfA%2BinJNuiflpzHm%2B59IqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPwwxXfW2KcsWkom9yrcA%2Fnk%2B5oQpdnQJ%2FcFtO9qTZ8%2BV9lJHu7WVGVu0BnvmjuxMDJmWekbNgoDwB%2FkpUHt%2BOJ2HIbBllrAf6yMES9cz4Idh8iZv3r7k2PKcqeDHheC3QUmJeotJwqmb7K9XzDzZgm7lbIRJjTYfSsj7cvjaJP29QJokj0JBW3SDJ2cI1ARVOq6YgNc%2BI01OWBceisyZLFFS%2FG6WioZdMl9hQeIlZatNAbI9ce%2BMnfyiKKUpB%2FwwHbvOwqzvB31cHeR6zgm6wk2v%2BrdAROc19Ef5TYWNU%2FBcKiqEO6zpMCyEKaAYGBdwX9dvX401XvR7N4gdiKD4CXdC6xJAENkMPaHoMGfep%2FtF%2BB6VGtEW6QIvGyy%2BQV2FCUD%2FT%2BlzISS8COW5wUmlhGzsckcnVYJyAnbr7gP3btEQOLFNzvu8hUPfeWKia4qlJmHM8DCLgOMhOHqj5YC8g%2FcVA%2BU06O%2FpoB%2Bjhmuvnf5%2Fc2MoPWOrooZFMEh24mF0PtPQMDLvasqizZlXa8VfPCYlgNbcRRJevKsSzlZ%2FNNJuMODnuepuvEjkg2vWE6%2BKDyZ9n3sfVtA3GLArtJVEFHKeyroJ%2FIKR%2BMebcdIW39h3abvP29nDFIMcCMVVOiyr4iY%2F7sb01%2BHClmDMOHwncIGOqUBiDPATRtiAbmRkfBxRs91qO85Pu7gwLvdHpoWXih%2BFgxxuUhmip0Pl%2BboCCivagMqewkLX3V8RGk9u7RJ0bOcuFndWxfA8I6o3b6saVsef55XrnpD4uxBVvVrrmu4vlEgdc5HB3NOFIxxl13Dm7PUXUXcF%2BNCDmWC%2Bhxil4OKtwLKh3ozD5QqFfjXsnaSkHniP%2BTNieZ4vdFBftvY9lRqww2kSSQs&X-Amz-Signature=6dc26293d1c5b73e0961bb50e4682e7d407e848bd30bf30f0611b1615d23c227&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
