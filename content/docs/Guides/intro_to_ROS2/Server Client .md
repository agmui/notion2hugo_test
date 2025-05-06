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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5Q2T5VH%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHSy95a5Rf2bSuUC%2BgYV91rjWMYAGIxIS75OMBjVQ7dQAiEA2FfsfjIFo8bDrvr4D6iWiYWPNefqoQ2F7OGcTa%2BXsMUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHlHTbjxGkHVLl%2B6nyrcAxhsU4KalCxTtp3P6j2BZwYo5GaSP7Ko90EuXwpk9grHvz%2FSFBW9qKBj8hvXd%2Fo2gWS4mLyRpb2AhYnfXD3rWHYgnYxeSmyAvvtAuu4y2tfTbk38Ck283JU36bcn5tfvoOCH2VvFaTrwvRw6Sy%2Bkllig0bdv5fA7izGoOp9ej7F%2BxtVQayZjR7%2Bt5QozV5SSN0S1sHnD44SstuK6FWRIUUKsmpjGGrcGndyUlXaZK5W8BHuJQw4jyqn9szB5g7xETZagVs30uKABZNHXisfEsVhtlV9BEtIIGlAUD5ljrbrZaCPUPF3vATWsK5Gdz2upbAvjFLhvP84SIh7yVEg%2B5AAO0dEkWMOuULB749Dblq1C9FvZ%2Brc6hT%2B1CI%2FhG9bhLN9iKSQzfJIlegVVlbjrXdq%2FGrroqozAFnOOcUVxGI02NutsljNYtAzJbenQGTcn4bdjE67AIf47zFSMDXZtqLlsNd8rYzDtBEDwcpiV3PJt3qorL%2BFUEnMBiwi8I7h1p2EJMa3DqNbwZajwL2Dw6RRNF8y533wiJUlLIIcHEbMP0ExokhYSxpKfp8FuFRQHJ8s3CA%2FKcoiCKQyv2Po1bzf%2BqXEYEh4WbR6cAscCgnOsLkwh0ZhYpIXPQe3wMPyw5sAGOqUBXFBgLcqxatlSAKoT4leMuw9uXu4pQ4CN2eUmO01DUTLkSKWGq2oq0gouX5eCwsQM5xHwJUVIDrqtsHqMDlUHzG%2FiZBp6A52wyZEn7%2FLbRwfVDIdbWtqtzZ5yWnDoZ%2FvLFQipN29fMzC%2B%2Fjg2LYxz1Y74289ivymkz%2F%2BB759S7%2BdLEKdFd3799O42oSnJakMX6FVxAizZbkRqV4Fjfh7iIz%2B1VoLQ&X-Amz-Signature=79bba6bff2041f566b3ea3fdd9f8b78e63ce02a9082c5e5b047c4e8d744af272&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5Q2T5VH%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHSy95a5Rf2bSuUC%2BgYV91rjWMYAGIxIS75OMBjVQ7dQAiEA2FfsfjIFo8bDrvr4D6iWiYWPNefqoQ2F7OGcTa%2BXsMUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHlHTbjxGkHVLl%2B6nyrcAxhsU4KalCxTtp3P6j2BZwYo5GaSP7Ko90EuXwpk9grHvz%2FSFBW9qKBj8hvXd%2Fo2gWS4mLyRpb2AhYnfXD3rWHYgnYxeSmyAvvtAuu4y2tfTbk38Ck283JU36bcn5tfvoOCH2VvFaTrwvRw6Sy%2Bkllig0bdv5fA7izGoOp9ej7F%2BxtVQayZjR7%2Bt5QozV5SSN0S1sHnD44SstuK6FWRIUUKsmpjGGrcGndyUlXaZK5W8BHuJQw4jyqn9szB5g7xETZagVs30uKABZNHXisfEsVhtlV9BEtIIGlAUD5ljrbrZaCPUPF3vATWsK5Gdz2upbAvjFLhvP84SIh7yVEg%2B5AAO0dEkWMOuULB749Dblq1C9FvZ%2Brc6hT%2B1CI%2FhG9bhLN9iKSQzfJIlegVVlbjrXdq%2FGrroqozAFnOOcUVxGI02NutsljNYtAzJbenQGTcn4bdjE67AIf47zFSMDXZtqLlsNd8rYzDtBEDwcpiV3PJt3qorL%2BFUEnMBiwi8I7h1p2EJMa3DqNbwZajwL2Dw6RRNF8y533wiJUlLIIcHEbMP0ExokhYSxpKfp8FuFRQHJ8s3CA%2FKcoiCKQyv2Po1bzf%2BqXEYEh4WbR6cAscCgnOsLkwh0ZhYpIXPQe3wMPyw5sAGOqUBXFBgLcqxatlSAKoT4leMuw9uXu4pQ4CN2eUmO01DUTLkSKWGq2oq0gouX5eCwsQM5xHwJUVIDrqtsHqMDlUHzG%2FiZBp6A52wyZEn7%2FLbRwfVDIdbWtqtzZ5yWnDoZ%2FvLFQipN29fMzC%2B%2Fjg2LYxz1Y74289ivymkz%2F%2BB759S7%2BdLEKdFd3799O42oSnJakMX6FVxAizZbkRqV4Fjfh7iIz%2B1VoLQ&X-Amz-Signature=3bf84b460c66fe6f55c63b2f1200a5a904c6a272bca6feb1b19a8e5dccaaf808&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5Q2T5VH%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHSy95a5Rf2bSuUC%2BgYV91rjWMYAGIxIS75OMBjVQ7dQAiEA2FfsfjIFo8bDrvr4D6iWiYWPNefqoQ2F7OGcTa%2BXsMUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHlHTbjxGkHVLl%2B6nyrcAxhsU4KalCxTtp3P6j2BZwYo5GaSP7Ko90EuXwpk9grHvz%2FSFBW9qKBj8hvXd%2Fo2gWS4mLyRpb2AhYnfXD3rWHYgnYxeSmyAvvtAuu4y2tfTbk38Ck283JU36bcn5tfvoOCH2VvFaTrwvRw6Sy%2Bkllig0bdv5fA7izGoOp9ej7F%2BxtVQayZjR7%2Bt5QozV5SSN0S1sHnD44SstuK6FWRIUUKsmpjGGrcGndyUlXaZK5W8BHuJQw4jyqn9szB5g7xETZagVs30uKABZNHXisfEsVhtlV9BEtIIGlAUD5ljrbrZaCPUPF3vATWsK5Gdz2upbAvjFLhvP84SIh7yVEg%2B5AAO0dEkWMOuULB749Dblq1C9FvZ%2Brc6hT%2B1CI%2FhG9bhLN9iKSQzfJIlegVVlbjrXdq%2FGrroqozAFnOOcUVxGI02NutsljNYtAzJbenQGTcn4bdjE67AIf47zFSMDXZtqLlsNd8rYzDtBEDwcpiV3PJt3qorL%2BFUEnMBiwi8I7h1p2EJMa3DqNbwZajwL2Dw6RRNF8y533wiJUlLIIcHEbMP0ExokhYSxpKfp8FuFRQHJ8s3CA%2FKcoiCKQyv2Po1bzf%2BqXEYEh4WbR6cAscCgnOsLkwh0ZhYpIXPQe3wMPyw5sAGOqUBXFBgLcqxatlSAKoT4leMuw9uXu4pQ4CN2eUmO01DUTLkSKWGq2oq0gouX5eCwsQM5xHwJUVIDrqtsHqMDlUHzG%2FiZBp6A52wyZEn7%2FLbRwfVDIdbWtqtzZ5yWnDoZ%2FvLFQipN29fMzC%2B%2Fjg2LYxz1Y74289ivymkz%2F%2BB759S7%2BdLEKdFd3799O42oSnJakMX6FVxAizZbkRqV4Fjfh7iIz%2B1VoLQ&X-Amz-Signature=dba36d552af92fbad82050708ca69b485f71637ccf777af794a8ddeb789f3067&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5Q2T5VH%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHSy95a5Rf2bSuUC%2BgYV91rjWMYAGIxIS75OMBjVQ7dQAiEA2FfsfjIFo8bDrvr4D6iWiYWPNefqoQ2F7OGcTa%2BXsMUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHlHTbjxGkHVLl%2B6nyrcAxhsU4KalCxTtp3P6j2BZwYo5GaSP7Ko90EuXwpk9grHvz%2FSFBW9qKBj8hvXd%2Fo2gWS4mLyRpb2AhYnfXD3rWHYgnYxeSmyAvvtAuu4y2tfTbk38Ck283JU36bcn5tfvoOCH2VvFaTrwvRw6Sy%2Bkllig0bdv5fA7izGoOp9ej7F%2BxtVQayZjR7%2Bt5QozV5SSN0S1sHnD44SstuK6FWRIUUKsmpjGGrcGndyUlXaZK5W8BHuJQw4jyqn9szB5g7xETZagVs30uKABZNHXisfEsVhtlV9BEtIIGlAUD5ljrbrZaCPUPF3vATWsK5Gdz2upbAvjFLhvP84SIh7yVEg%2B5AAO0dEkWMOuULB749Dblq1C9FvZ%2Brc6hT%2B1CI%2FhG9bhLN9iKSQzfJIlegVVlbjrXdq%2FGrroqozAFnOOcUVxGI02NutsljNYtAzJbenQGTcn4bdjE67AIf47zFSMDXZtqLlsNd8rYzDtBEDwcpiV3PJt3qorL%2BFUEnMBiwi8I7h1p2EJMa3DqNbwZajwL2Dw6RRNF8y533wiJUlLIIcHEbMP0ExokhYSxpKfp8FuFRQHJ8s3CA%2FKcoiCKQyv2Po1bzf%2BqXEYEh4WbR6cAscCgnOsLkwh0ZhYpIXPQe3wMPyw5sAGOqUBXFBgLcqxatlSAKoT4leMuw9uXu4pQ4CN2eUmO01DUTLkSKWGq2oq0gouX5eCwsQM5xHwJUVIDrqtsHqMDlUHzG%2FiZBp6A52wyZEn7%2FLbRwfVDIdbWtqtzZ5yWnDoZ%2FvLFQipN29fMzC%2B%2Fjg2LYxz1Y74289ivymkz%2F%2BB759S7%2BdLEKdFd3799O42oSnJakMX6FVxAizZbkRqV4Fjfh7iIz%2B1VoLQ&X-Amz-Signature=90eab5ca8c137b5cf0b450f956e5583f8261d07f0c67301231f4d4e6a1accc58&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5Q2T5VH%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHSy95a5Rf2bSuUC%2BgYV91rjWMYAGIxIS75OMBjVQ7dQAiEA2FfsfjIFo8bDrvr4D6iWiYWPNefqoQ2F7OGcTa%2BXsMUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHlHTbjxGkHVLl%2B6nyrcAxhsU4KalCxTtp3P6j2BZwYo5GaSP7Ko90EuXwpk9grHvz%2FSFBW9qKBj8hvXd%2Fo2gWS4mLyRpb2AhYnfXD3rWHYgnYxeSmyAvvtAuu4y2tfTbk38Ck283JU36bcn5tfvoOCH2VvFaTrwvRw6Sy%2Bkllig0bdv5fA7izGoOp9ej7F%2BxtVQayZjR7%2Bt5QozV5SSN0S1sHnD44SstuK6FWRIUUKsmpjGGrcGndyUlXaZK5W8BHuJQw4jyqn9szB5g7xETZagVs30uKABZNHXisfEsVhtlV9BEtIIGlAUD5ljrbrZaCPUPF3vATWsK5Gdz2upbAvjFLhvP84SIh7yVEg%2B5AAO0dEkWMOuULB749Dblq1C9FvZ%2Brc6hT%2B1CI%2FhG9bhLN9iKSQzfJIlegVVlbjrXdq%2FGrroqozAFnOOcUVxGI02NutsljNYtAzJbenQGTcn4bdjE67AIf47zFSMDXZtqLlsNd8rYzDtBEDwcpiV3PJt3qorL%2BFUEnMBiwi8I7h1p2EJMa3DqNbwZajwL2Dw6RRNF8y533wiJUlLIIcHEbMP0ExokhYSxpKfp8FuFRQHJ8s3CA%2FKcoiCKQyv2Po1bzf%2BqXEYEh4WbR6cAscCgnOsLkwh0ZhYpIXPQe3wMPyw5sAGOqUBXFBgLcqxatlSAKoT4leMuw9uXu4pQ4CN2eUmO01DUTLkSKWGq2oq0gouX5eCwsQM5xHwJUVIDrqtsHqMDlUHzG%2FiZBp6A52wyZEn7%2FLbRwfVDIdbWtqtzZ5yWnDoZ%2FvLFQipN29fMzC%2B%2Fjg2LYxz1Y74289ivymkz%2F%2BB759S7%2BdLEKdFd3799O42oSnJakMX6FVxAizZbkRqV4Fjfh7iIz%2B1VoLQ&X-Amz-Signature=3cd21f69ae3a6c462ae8e955178406cbe9506e6bd03dc82b367ec4684e355989&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
