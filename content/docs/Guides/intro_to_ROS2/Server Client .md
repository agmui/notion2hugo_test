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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFWEQFSW%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCD9ERWE%2FAlxYYuzIuQmNqdLOqvZmZKMrdD1GohjeBApwIgX8UJyzTKBM16ORAiy8I82DjknIt072Z0l3kop8sUmzYq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDEcSnGJbz%2BXkyLtBsCrcA1bSKT60oNGhLMMOfI9wtikETaRuH1jkPXfDnkd%2FiXvskIrYkSuyQRsEtHkucN5BZSdPirhIwFWcxxI%2BMHKxaumNcOivWcTSbpmQ4wR4QQZsVxSJA3YRjcbEYsipUGeJfv%2FFuyazdvQNh6sxDrVECRg3P6EjXJcwLrFXJ2fuOnGrS6j4Go8A2TOR%2Fc6w4OKcElDfAuJ2gK5EUrlWMwXAFEz26GOHVNQIYAOEg4J0xeIJquu0xpoMy%2BKrESpU05qC7X7kEVOrCvesVfrNIGApufSZ3OTa1hBfrvALXBbfdjskCY6k8hWQ%2FoxiwTf6rjL1Wj03SRj3ryxQruEnxN5TdvogSPXisVIl6LDegKenvdgfmtyom3VMmqQV6q0u68v6MWcWH%2BnAOG0eoWu3BPZBOlieMYP5O3Np%2B%2BHPe%2FuUL3li8rMvJSr6U497pra3CQZay3TnuA9Sb4bVRDeJcWs2Dafdft4Vdj%2Bnih2uL1Rgunxyc9jTgj5TBdmsMTtGOrSXEJ3a7dlm8%2FxJbMz%2FO9BLh7Yi2RqCklyc8UDF%2Bpaf%2FmknIZmtmLp7GyXi18VY1GutXGebIcXtkCaAXbqs7IRNso32%2FMYYBmFZfamDC%2FeWJz5hcm3lHorcoP73xYJsMJr198IGOqUBX28v7S2CF7w4iYQT60kUWkHJxykQbaDoK28QX9t%2FqTX5URko%2BbeQZFQsXBhvoICxEHYzr5PHjx5XDEZMuwP5rT85rqr7ygX%2Bn94d0WtMUMcfY%2FQZX5JY3JX9ep5fbHxTXegTnwpcQiNEoOApDQCKo%2Fh7Cr%2FKR6Y4wAupWFas77ksl0mJNXDRvNQnhq4yUnQHQfoPqADVjv3C5hRuSTd%2BGbeMB0Eb&X-Amz-Signature=16fed394ff5b9fe29790e68c7c479d37b9c4e7933bc773bd2d02f3adf954e5a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFWEQFSW%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCD9ERWE%2FAlxYYuzIuQmNqdLOqvZmZKMrdD1GohjeBApwIgX8UJyzTKBM16ORAiy8I82DjknIt072Z0l3kop8sUmzYq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDEcSnGJbz%2BXkyLtBsCrcA1bSKT60oNGhLMMOfI9wtikETaRuH1jkPXfDnkd%2FiXvskIrYkSuyQRsEtHkucN5BZSdPirhIwFWcxxI%2BMHKxaumNcOivWcTSbpmQ4wR4QQZsVxSJA3YRjcbEYsipUGeJfv%2FFuyazdvQNh6sxDrVECRg3P6EjXJcwLrFXJ2fuOnGrS6j4Go8A2TOR%2Fc6w4OKcElDfAuJ2gK5EUrlWMwXAFEz26GOHVNQIYAOEg4J0xeIJquu0xpoMy%2BKrESpU05qC7X7kEVOrCvesVfrNIGApufSZ3OTa1hBfrvALXBbfdjskCY6k8hWQ%2FoxiwTf6rjL1Wj03SRj3ryxQruEnxN5TdvogSPXisVIl6LDegKenvdgfmtyom3VMmqQV6q0u68v6MWcWH%2BnAOG0eoWu3BPZBOlieMYP5O3Np%2B%2BHPe%2FuUL3li8rMvJSr6U497pra3CQZay3TnuA9Sb4bVRDeJcWs2Dafdft4Vdj%2Bnih2uL1Rgunxyc9jTgj5TBdmsMTtGOrSXEJ3a7dlm8%2FxJbMz%2FO9BLh7Yi2RqCklyc8UDF%2Bpaf%2FmknIZmtmLp7GyXi18VY1GutXGebIcXtkCaAXbqs7IRNso32%2FMYYBmFZfamDC%2FeWJz5hcm3lHorcoP73xYJsMJr198IGOqUBX28v7S2CF7w4iYQT60kUWkHJxykQbaDoK28QX9t%2FqTX5URko%2BbeQZFQsXBhvoICxEHYzr5PHjx5XDEZMuwP5rT85rqr7ygX%2Bn94d0WtMUMcfY%2FQZX5JY3JX9ep5fbHxTXegTnwpcQiNEoOApDQCKo%2Fh7Cr%2FKR6Y4wAupWFas77ksl0mJNXDRvNQnhq4yUnQHQfoPqADVjv3C5hRuSTd%2BGbeMB0Eb&X-Amz-Signature=f35beebfcfbc66a0718f87a826ffea9aa8d6211509b7a77c026cb75afcdfd76a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFWEQFSW%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCD9ERWE%2FAlxYYuzIuQmNqdLOqvZmZKMrdD1GohjeBApwIgX8UJyzTKBM16ORAiy8I82DjknIt072Z0l3kop8sUmzYq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDEcSnGJbz%2BXkyLtBsCrcA1bSKT60oNGhLMMOfI9wtikETaRuH1jkPXfDnkd%2FiXvskIrYkSuyQRsEtHkucN5BZSdPirhIwFWcxxI%2BMHKxaumNcOivWcTSbpmQ4wR4QQZsVxSJA3YRjcbEYsipUGeJfv%2FFuyazdvQNh6sxDrVECRg3P6EjXJcwLrFXJ2fuOnGrS6j4Go8A2TOR%2Fc6w4OKcElDfAuJ2gK5EUrlWMwXAFEz26GOHVNQIYAOEg4J0xeIJquu0xpoMy%2BKrESpU05qC7X7kEVOrCvesVfrNIGApufSZ3OTa1hBfrvALXBbfdjskCY6k8hWQ%2FoxiwTf6rjL1Wj03SRj3ryxQruEnxN5TdvogSPXisVIl6LDegKenvdgfmtyom3VMmqQV6q0u68v6MWcWH%2BnAOG0eoWu3BPZBOlieMYP5O3Np%2B%2BHPe%2FuUL3li8rMvJSr6U497pra3CQZay3TnuA9Sb4bVRDeJcWs2Dafdft4Vdj%2Bnih2uL1Rgunxyc9jTgj5TBdmsMTtGOrSXEJ3a7dlm8%2FxJbMz%2FO9BLh7Yi2RqCklyc8UDF%2Bpaf%2FmknIZmtmLp7GyXi18VY1GutXGebIcXtkCaAXbqs7IRNso32%2FMYYBmFZfamDC%2FeWJz5hcm3lHorcoP73xYJsMJr198IGOqUBX28v7S2CF7w4iYQT60kUWkHJxykQbaDoK28QX9t%2FqTX5URko%2BbeQZFQsXBhvoICxEHYzr5PHjx5XDEZMuwP5rT85rqr7ygX%2Bn94d0WtMUMcfY%2FQZX5JY3JX9ep5fbHxTXegTnwpcQiNEoOApDQCKo%2Fh7Cr%2FKR6Y4wAupWFas77ksl0mJNXDRvNQnhq4yUnQHQfoPqADVjv3C5hRuSTd%2BGbeMB0Eb&X-Amz-Signature=804e364416401167f0182c4a77f9981bb21a2517252624cc56c228acfbb836aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFWEQFSW%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCD9ERWE%2FAlxYYuzIuQmNqdLOqvZmZKMrdD1GohjeBApwIgX8UJyzTKBM16ORAiy8I82DjknIt072Z0l3kop8sUmzYq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDEcSnGJbz%2BXkyLtBsCrcA1bSKT60oNGhLMMOfI9wtikETaRuH1jkPXfDnkd%2FiXvskIrYkSuyQRsEtHkucN5BZSdPirhIwFWcxxI%2BMHKxaumNcOivWcTSbpmQ4wR4QQZsVxSJA3YRjcbEYsipUGeJfv%2FFuyazdvQNh6sxDrVECRg3P6EjXJcwLrFXJ2fuOnGrS6j4Go8A2TOR%2Fc6w4OKcElDfAuJ2gK5EUrlWMwXAFEz26GOHVNQIYAOEg4J0xeIJquu0xpoMy%2BKrESpU05qC7X7kEVOrCvesVfrNIGApufSZ3OTa1hBfrvALXBbfdjskCY6k8hWQ%2FoxiwTf6rjL1Wj03SRj3ryxQruEnxN5TdvogSPXisVIl6LDegKenvdgfmtyom3VMmqQV6q0u68v6MWcWH%2BnAOG0eoWu3BPZBOlieMYP5O3Np%2B%2BHPe%2FuUL3li8rMvJSr6U497pra3CQZay3TnuA9Sb4bVRDeJcWs2Dafdft4Vdj%2Bnih2uL1Rgunxyc9jTgj5TBdmsMTtGOrSXEJ3a7dlm8%2FxJbMz%2FO9BLh7Yi2RqCklyc8UDF%2Bpaf%2FmknIZmtmLp7GyXi18VY1GutXGebIcXtkCaAXbqs7IRNso32%2FMYYBmFZfamDC%2FeWJz5hcm3lHorcoP73xYJsMJr198IGOqUBX28v7S2CF7w4iYQT60kUWkHJxykQbaDoK28QX9t%2FqTX5URko%2BbeQZFQsXBhvoICxEHYzr5PHjx5XDEZMuwP5rT85rqr7ygX%2Bn94d0WtMUMcfY%2FQZX5JY3JX9ep5fbHxTXegTnwpcQiNEoOApDQCKo%2Fh7Cr%2FKR6Y4wAupWFas77ksl0mJNXDRvNQnhq4yUnQHQfoPqADVjv3C5hRuSTd%2BGbeMB0Eb&X-Amz-Signature=1e1b93693df13ece871e2b5ae4ad431e0317a9026c14a8dc10045e78b5afe4fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFWEQFSW%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCD9ERWE%2FAlxYYuzIuQmNqdLOqvZmZKMrdD1GohjeBApwIgX8UJyzTKBM16ORAiy8I82DjknIt072Z0l3kop8sUmzYq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDEcSnGJbz%2BXkyLtBsCrcA1bSKT60oNGhLMMOfI9wtikETaRuH1jkPXfDnkd%2FiXvskIrYkSuyQRsEtHkucN5BZSdPirhIwFWcxxI%2BMHKxaumNcOivWcTSbpmQ4wR4QQZsVxSJA3YRjcbEYsipUGeJfv%2FFuyazdvQNh6sxDrVECRg3P6EjXJcwLrFXJ2fuOnGrS6j4Go8A2TOR%2Fc6w4OKcElDfAuJ2gK5EUrlWMwXAFEz26GOHVNQIYAOEg4J0xeIJquu0xpoMy%2BKrESpU05qC7X7kEVOrCvesVfrNIGApufSZ3OTa1hBfrvALXBbfdjskCY6k8hWQ%2FoxiwTf6rjL1Wj03SRj3ryxQruEnxN5TdvogSPXisVIl6LDegKenvdgfmtyom3VMmqQV6q0u68v6MWcWH%2BnAOG0eoWu3BPZBOlieMYP5O3Np%2B%2BHPe%2FuUL3li8rMvJSr6U497pra3CQZay3TnuA9Sb4bVRDeJcWs2Dafdft4Vdj%2Bnih2uL1Rgunxyc9jTgj5TBdmsMTtGOrSXEJ3a7dlm8%2FxJbMz%2FO9BLh7Yi2RqCklyc8UDF%2Bpaf%2FmknIZmtmLp7GyXi18VY1GutXGebIcXtkCaAXbqs7IRNso32%2FMYYBmFZfamDC%2FeWJz5hcm3lHorcoP73xYJsMJr198IGOqUBX28v7S2CF7w4iYQT60kUWkHJxykQbaDoK28QX9t%2FqTX5URko%2BbeQZFQsXBhvoICxEHYzr5PHjx5XDEZMuwP5rT85rqr7ygX%2Bn94d0WtMUMcfY%2FQZX5JY3JX9ep5fbHxTXegTnwpcQiNEoOApDQCKo%2Fh7Cr%2FKR6Y4wAupWFas77ksl0mJNXDRvNQnhq4yUnQHQfoPqADVjv3C5hRuSTd%2BGbeMB0Eb&X-Amz-Signature=6ecf65a01d26a4d3e60671c48227a557f1206af540e5e7cd28b05c4f5426d483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
