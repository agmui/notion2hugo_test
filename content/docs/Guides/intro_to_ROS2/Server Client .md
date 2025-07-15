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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6BJZYUG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIHSJ5hNRyTDOamtkEsMRXOt2yeGnQ4SUcc46%2FSJWbZd5AiEAut4nur%2BqEczvXfyKu0dRM%2FiomG5AS3BvWEpmksKgOL4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMa19K5m%2BMTl9rcZRircA%2B%2BvU5w4f6MwzYEdfdxj7MLE3eKijO6C6HLZpClNzZsIz2QmLVNrec8G5EDtn%2F6oZgtSJyWx%2F0A2Ou%2BWeX4znVwzlnw3McQkuRKD%2Bi1n88uzzHdw132utf7%2FggpeuqaStaOKk5qJfkpOayXsOW9Oxz3yFwFnMMKaeuvdmDHqGoJAqDbu%2ByK4TAMbrWDZp27TX9jrUtwX4cY2kElle6vnRXqLbNylWJU24Wakt8414No%2B1DMyUpkzMfCGe9kIP758j438nKpssaMbSSYRvVml6wawJVqd1gqLXi7efJ8%2BkuiIrgWoEv48%2BjejyDc3FEUXaISVO3bFCYQK0kUqLKw5pSSi4fyD2bcbI4UvHpsePygyunp0399nT%2FLd7WCtK4weAErRlGEmG%2BkAKCOsn%2BqxGCyIfpRCHSbiTpLDHNX0iSF0Psm6sUzBNxZl9nWxxH7OxtgGxN8rt98n2ZTf5YPPaQ6NtPvBXfrXkO7q931hBtF6t5OCUcJ%2BkSS69zbaziEsn4pJ%2BtJcTOi71Kudqz1NEXQ49x1cUmKBHtSsNJpHJ%2Fs%2FAyVKhoHKLY2QbnkaLNjyDmNgufch88IE3RF6AKbxUe50iavT%2FRjvtLNR3KT2X6QGau3CEaJvNTgo%2BUxfMIiG2sMGOqUBp7HRPI9x98gfKDXsUx4va5QO0pwggkyx1AamPUJrv%2FOdv%2Fsz32L%2FLdLdAj2cnIoUp6dfj%2B4HxMAvf1NccBGrMAfvsr7R65JDlBFacYWHQMvjOc5xpQJAJtG%2B%2B9fkW8gdDBwBYNYaEEuygMoumisAtC72dMCX%2BWdfa0GqOGVWNv%2B0jGzIiEA8e6BHgP6pWZ1e0c%2FYaX7LPXfFjYQfDfBhXlqre7st&X-Amz-Signature=dc6d05fbd8cabcef84ad7831587dbcef44ebb31f4343be7153e08392ed02f284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6BJZYUG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIHSJ5hNRyTDOamtkEsMRXOt2yeGnQ4SUcc46%2FSJWbZd5AiEAut4nur%2BqEczvXfyKu0dRM%2FiomG5AS3BvWEpmksKgOL4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMa19K5m%2BMTl9rcZRircA%2B%2BvU5w4f6MwzYEdfdxj7MLE3eKijO6C6HLZpClNzZsIz2QmLVNrec8G5EDtn%2F6oZgtSJyWx%2F0A2Ou%2BWeX4znVwzlnw3McQkuRKD%2Bi1n88uzzHdw132utf7%2FggpeuqaStaOKk5qJfkpOayXsOW9Oxz3yFwFnMMKaeuvdmDHqGoJAqDbu%2ByK4TAMbrWDZp27TX9jrUtwX4cY2kElle6vnRXqLbNylWJU24Wakt8414No%2B1DMyUpkzMfCGe9kIP758j438nKpssaMbSSYRvVml6wawJVqd1gqLXi7efJ8%2BkuiIrgWoEv48%2BjejyDc3FEUXaISVO3bFCYQK0kUqLKw5pSSi4fyD2bcbI4UvHpsePygyunp0399nT%2FLd7WCtK4weAErRlGEmG%2BkAKCOsn%2BqxGCyIfpRCHSbiTpLDHNX0iSF0Psm6sUzBNxZl9nWxxH7OxtgGxN8rt98n2ZTf5YPPaQ6NtPvBXfrXkO7q931hBtF6t5OCUcJ%2BkSS69zbaziEsn4pJ%2BtJcTOi71Kudqz1NEXQ49x1cUmKBHtSsNJpHJ%2Fs%2FAyVKhoHKLY2QbnkaLNjyDmNgufch88IE3RF6AKbxUe50iavT%2FRjvtLNR3KT2X6QGau3CEaJvNTgo%2BUxfMIiG2sMGOqUBp7HRPI9x98gfKDXsUx4va5QO0pwggkyx1AamPUJrv%2FOdv%2Fsz32L%2FLdLdAj2cnIoUp6dfj%2B4HxMAvf1NccBGrMAfvsr7R65JDlBFacYWHQMvjOc5xpQJAJtG%2B%2B9fkW8gdDBwBYNYaEEuygMoumisAtC72dMCX%2BWdfa0GqOGVWNv%2B0jGzIiEA8e6BHgP6pWZ1e0c%2FYaX7LPXfFjYQfDfBhXlqre7st&X-Amz-Signature=6e4abdbc727cd41ffb3af964cde88f6d4b2533c758d26042edcd22f984250948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6BJZYUG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIHSJ5hNRyTDOamtkEsMRXOt2yeGnQ4SUcc46%2FSJWbZd5AiEAut4nur%2BqEczvXfyKu0dRM%2FiomG5AS3BvWEpmksKgOL4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMa19K5m%2BMTl9rcZRircA%2B%2BvU5w4f6MwzYEdfdxj7MLE3eKijO6C6HLZpClNzZsIz2QmLVNrec8G5EDtn%2F6oZgtSJyWx%2F0A2Ou%2BWeX4znVwzlnw3McQkuRKD%2Bi1n88uzzHdw132utf7%2FggpeuqaStaOKk5qJfkpOayXsOW9Oxz3yFwFnMMKaeuvdmDHqGoJAqDbu%2ByK4TAMbrWDZp27TX9jrUtwX4cY2kElle6vnRXqLbNylWJU24Wakt8414No%2B1DMyUpkzMfCGe9kIP758j438nKpssaMbSSYRvVml6wawJVqd1gqLXi7efJ8%2BkuiIrgWoEv48%2BjejyDc3FEUXaISVO3bFCYQK0kUqLKw5pSSi4fyD2bcbI4UvHpsePygyunp0399nT%2FLd7WCtK4weAErRlGEmG%2BkAKCOsn%2BqxGCyIfpRCHSbiTpLDHNX0iSF0Psm6sUzBNxZl9nWxxH7OxtgGxN8rt98n2ZTf5YPPaQ6NtPvBXfrXkO7q931hBtF6t5OCUcJ%2BkSS69zbaziEsn4pJ%2BtJcTOi71Kudqz1NEXQ49x1cUmKBHtSsNJpHJ%2Fs%2FAyVKhoHKLY2QbnkaLNjyDmNgufch88IE3RF6AKbxUe50iavT%2FRjvtLNR3KT2X6QGau3CEaJvNTgo%2BUxfMIiG2sMGOqUBp7HRPI9x98gfKDXsUx4va5QO0pwggkyx1AamPUJrv%2FOdv%2Fsz32L%2FLdLdAj2cnIoUp6dfj%2B4HxMAvf1NccBGrMAfvsr7R65JDlBFacYWHQMvjOc5xpQJAJtG%2B%2B9fkW8gdDBwBYNYaEEuygMoumisAtC72dMCX%2BWdfa0GqOGVWNv%2B0jGzIiEA8e6BHgP6pWZ1e0c%2FYaX7LPXfFjYQfDfBhXlqre7st&X-Amz-Signature=a4c78d12f741502074d96761d383bc04d62ba31c248cb21fce36c9fc6bb99eb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6BJZYUG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIHSJ5hNRyTDOamtkEsMRXOt2yeGnQ4SUcc46%2FSJWbZd5AiEAut4nur%2BqEczvXfyKu0dRM%2FiomG5AS3BvWEpmksKgOL4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMa19K5m%2BMTl9rcZRircA%2B%2BvU5w4f6MwzYEdfdxj7MLE3eKijO6C6HLZpClNzZsIz2QmLVNrec8G5EDtn%2F6oZgtSJyWx%2F0A2Ou%2BWeX4znVwzlnw3McQkuRKD%2Bi1n88uzzHdw132utf7%2FggpeuqaStaOKk5qJfkpOayXsOW9Oxz3yFwFnMMKaeuvdmDHqGoJAqDbu%2ByK4TAMbrWDZp27TX9jrUtwX4cY2kElle6vnRXqLbNylWJU24Wakt8414No%2B1DMyUpkzMfCGe9kIP758j438nKpssaMbSSYRvVml6wawJVqd1gqLXi7efJ8%2BkuiIrgWoEv48%2BjejyDc3FEUXaISVO3bFCYQK0kUqLKw5pSSi4fyD2bcbI4UvHpsePygyunp0399nT%2FLd7WCtK4weAErRlGEmG%2BkAKCOsn%2BqxGCyIfpRCHSbiTpLDHNX0iSF0Psm6sUzBNxZl9nWxxH7OxtgGxN8rt98n2ZTf5YPPaQ6NtPvBXfrXkO7q931hBtF6t5OCUcJ%2BkSS69zbaziEsn4pJ%2BtJcTOi71Kudqz1NEXQ49x1cUmKBHtSsNJpHJ%2Fs%2FAyVKhoHKLY2QbnkaLNjyDmNgufch88IE3RF6AKbxUe50iavT%2FRjvtLNR3KT2X6QGau3CEaJvNTgo%2BUxfMIiG2sMGOqUBp7HRPI9x98gfKDXsUx4va5QO0pwggkyx1AamPUJrv%2FOdv%2Fsz32L%2FLdLdAj2cnIoUp6dfj%2B4HxMAvf1NccBGrMAfvsr7R65JDlBFacYWHQMvjOc5xpQJAJtG%2B%2B9fkW8gdDBwBYNYaEEuygMoumisAtC72dMCX%2BWdfa0GqOGVWNv%2B0jGzIiEA8e6BHgP6pWZ1e0c%2FYaX7LPXfFjYQfDfBhXlqre7st&X-Amz-Signature=9cd549eab75bd23b845c35c97801445edc209f9e8719507be2cff11a63d13162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6BJZYUG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIHSJ5hNRyTDOamtkEsMRXOt2yeGnQ4SUcc46%2FSJWbZd5AiEAut4nur%2BqEczvXfyKu0dRM%2FiomG5AS3BvWEpmksKgOL4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMa19K5m%2BMTl9rcZRircA%2B%2BvU5w4f6MwzYEdfdxj7MLE3eKijO6C6HLZpClNzZsIz2QmLVNrec8G5EDtn%2F6oZgtSJyWx%2F0A2Ou%2BWeX4znVwzlnw3McQkuRKD%2Bi1n88uzzHdw132utf7%2FggpeuqaStaOKk5qJfkpOayXsOW9Oxz3yFwFnMMKaeuvdmDHqGoJAqDbu%2ByK4TAMbrWDZp27TX9jrUtwX4cY2kElle6vnRXqLbNylWJU24Wakt8414No%2B1DMyUpkzMfCGe9kIP758j438nKpssaMbSSYRvVml6wawJVqd1gqLXi7efJ8%2BkuiIrgWoEv48%2BjejyDc3FEUXaISVO3bFCYQK0kUqLKw5pSSi4fyD2bcbI4UvHpsePygyunp0399nT%2FLd7WCtK4weAErRlGEmG%2BkAKCOsn%2BqxGCyIfpRCHSbiTpLDHNX0iSF0Psm6sUzBNxZl9nWxxH7OxtgGxN8rt98n2ZTf5YPPaQ6NtPvBXfrXkO7q931hBtF6t5OCUcJ%2BkSS69zbaziEsn4pJ%2BtJcTOi71Kudqz1NEXQ49x1cUmKBHtSsNJpHJ%2Fs%2FAyVKhoHKLY2QbnkaLNjyDmNgufch88IE3RF6AKbxUe50iavT%2FRjvtLNR3KT2X6QGau3CEaJvNTgo%2BUxfMIiG2sMGOqUBp7HRPI9x98gfKDXsUx4va5QO0pwggkyx1AamPUJrv%2FOdv%2Fsz32L%2FLdLdAj2cnIoUp6dfj%2B4HxMAvf1NccBGrMAfvsr7R65JDlBFacYWHQMvjOc5xpQJAJtG%2B%2B9fkW8gdDBwBYNYaEEuygMoumisAtC72dMCX%2BWdfa0GqOGVWNv%2B0jGzIiEA8e6BHgP6pWZ1e0c%2FYaX7LPXfFjYQfDfBhXlqre7st&X-Amz-Signature=c8bdf37813301eadb54f43f25e2d300f19e29a033c5e0a8cab9587ab074c28f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
