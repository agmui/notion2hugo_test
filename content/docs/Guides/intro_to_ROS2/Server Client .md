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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655KIWIXI%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCJfgS65n19OPuQqq5TSeHgzhsRqdJ52QRZYWMgJj9ggIgXDdYUDaUkP01wv7IYUfczcPRiSRcUPSgp6N%2F7oC9D9gqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwzM38adBJ9Xnc0NSrcA2Me%2BXGm%2B3neBLcjstsoWow5cKMQuTgMUx5MoPCuxSS8kEi%2BDsXRWeQaDG6nIKYTJ8PI9TV7ZnIgJ7CPBR2GjMoTBvN2GCdzx76%2Fl72h7up3YXV4a7wB%2B0dXnUVZqK5cFsSZzFQb6v4uLP1EWcwrklS%2FfvfH25hNnQghxA3SiswEgFKLd2BfIPQ7aPrzITjVkaUJ%2Bpe6%2FcpAWU9G%2BJxOb39I%2BJrpgW1PEx2ftKRTPIeaJvckSd%2BWV0B2lqw6OBMZit6yJl%2F2aeQpG2Rjtf17CuR1tu69deFtRDl7U%2FxChprnlZAC%2BX3xYto%2BrRKvCTHTcrdY9xiIF7vc4JYtWaxAexXw6nZjxwgWtU0u1RbGfM1gRPkw12hfhf6ddRDMSAOewQCD541UpynxJ8acrb3wruFujy81gbp2Qv3rW0d%2FZbr%2Fx5P25WAS42WGO6SMoG5XiwFk71dScknBFskyKBvchxjX8YgN%2FWV6PNcyRpsr2y%2B6896OXnjimKKpAE%2F9jaL4eKyluvrxriNZW1S7Zn5GavuWhN%2FUMF6Yo99pIX8YVIaAzmPJnVUSTNDFOaRrhO%2Ba3u0gRgxpsoxV8b7alHO0nxN5pS7LGXhoxd3k9Z6ggL8s19uiAgAGlrTXrLC8MICA%2FcIGOqUBg3xdbWjke7b8djCDjenjZP9JlfQl5S469nEl%2BW%2BAsy6DUpGHCJfXvri6oGgTbpAtHMlOMZwdeUNXbnxGFhhhvTlDLRbbYQqamhLhzmT52SJcxFNPXRQHvu607bYY8FXPDYAGgvaoa9kYKmEfH99XyxvpNdY%2BIEm%2BhHYejtLJJtDdMlGIBbbap%2B%2Ff%2Bm63J7jZyLRZtaLo3FFH%2FO32JG%2BnREML1cNF&X-Amz-Signature=fec95344b9dea3e2fd08c801d89572f323e0c3ac38c866124f783b2f5a4d60eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655KIWIXI%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCJfgS65n19OPuQqq5TSeHgzhsRqdJ52QRZYWMgJj9ggIgXDdYUDaUkP01wv7IYUfczcPRiSRcUPSgp6N%2F7oC9D9gqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwzM38adBJ9Xnc0NSrcA2Me%2BXGm%2B3neBLcjstsoWow5cKMQuTgMUx5MoPCuxSS8kEi%2BDsXRWeQaDG6nIKYTJ8PI9TV7ZnIgJ7CPBR2GjMoTBvN2GCdzx76%2Fl72h7up3YXV4a7wB%2B0dXnUVZqK5cFsSZzFQb6v4uLP1EWcwrklS%2FfvfH25hNnQghxA3SiswEgFKLd2BfIPQ7aPrzITjVkaUJ%2Bpe6%2FcpAWU9G%2BJxOb39I%2BJrpgW1PEx2ftKRTPIeaJvckSd%2BWV0B2lqw6OBMZit6yJl%2F2aeQpG2Rjtf17CuR1tu69deFtRDl7U%2FxChprnlZAC%2BX3xYto%2BrRKvCTHTcrdY9xiIF7vc4JYtWaxAexXw6nZjxwgWtU0u1RbGfM1gRPkw12hfhf6ddRDMSAOewQCD541UpynxJ8acrb3wruFujy81gbp2Qv3rW0d%2FZbr%2Fx5P25WAS42WGO6SMoG5XiwFk71dScknBFskyKBvchxjX8YgN%2FWV6PNcyRpsr2y%2B6896OXnjimKKpAE%2F9jaL4eKyluvrxriNZW1S7Zn5GavuWhN%2FUMF6Yo99pIX8YVIaAzmPJnVUSTNDFOaRrhO%2Ba3u0gRgxpsoxV8b7alHO0nxN5pS7LGXhoxd3k9Z6ggL8s19uiAgAGlrTXrLC8MICA%2FcIGOqUBg3xdbWjke7b8djCDjenjZP9JlfQl5S469nEl%2BW%2BAsy6DUpGHCJfXvri6oGgTbpAtHMlOMZwdeUNXbnxGFhhhvTlDLRbbYQqamhLhzmT52SJcxFNPXRQHvu607bYY8FXPDYAGgvaoa9kYKmEfH99XyxvpNdY%2BIEm%2BhHYejtLJJtDdMlGIBbbap%2B%2Ff%2Bm63J7jZyLRZtaLo3FFH%2FO32JG%2BnREML1cNF&X-Amz-Signature=97e55612999691d8575b73fe0446ec69722b34956df98463de7529990a0982ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655KIWIXI%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCJfgS65n19OPuQqq5TSeHgzhsRqdJ52QRZYWMgJj9ggIgXDdYUDaUkP01wv7IYUfczcPRiSRcUPSgp6N%2F7oC9D9gqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwzM38adBJ9Xnc0NSrcA2Me%2BXGm%2B3neBLcjstsoWow5cKMQuTgMUx5MoPCuxSS8kEi%2BDsXRWeQaDG6nIKYTJ8PI9TV7ZnIgJ7CPBR2GjMoTBvN2GCdzx76%2Fl72h7up3YXV4a7wB%2B0dXnUVZqK5cFsSZzFQb6v4uLP1EWcwrklS%2FfvfH25hNnQghxA3SiswEgFKLd2BfIPQ7aPrzITjVkaUJ%2Bpe6%2FcpAWU9G%2BJxOb39I%2BJrpgW1PEx2ftKRTPIeaJvckSd%2BWV0B2lqw6OBMZit6yJl%2F2aeQpG2Rjtf17CuR1tu69deFtRDl7U%2FxChprnlZAC%2BX3xYto%2BrRKvCTHTcrdY9xiIF7vc4JYtWaxAexXw6nZjxwgWtU0u1RbGfM1gRPkw12hfhf6ddRDMSAOewQCD541UpynxJ8acrb3wruFujy81gbp2Qv3rW0d%2FZbr%2Fx5P25WAS42WGO6SMoG5XiwFk71dScknBFskyKBvchxjX8YgN%2FWV6PNcyRpsr2y%2B6896OXnjimKKpAE%2F9jaL4eKyluvrxriNZW1S7Zn5GavuWhN%2FUMF6Yo99pIX8YVIaAzmPJnVUSTNDFOaRrhO%2Ba3u0gRgxpsoxV8b7alHO0nxN5pS7LGXhoxd3k9Z6ggL8s19uiAgAGlrTXrLC8MICA%2FcIGOqUBg3xdbWjke7b8djCDjenjZP9JlfQl5S469nEl%2BW%2BAsy6DUpGHCJfXvri6oGgTbpAtHMlOMZwdeUNXbnxGFhhhvTlDLRbbYQqamhLhzmT52SJcxFNPXRQHvu607bYY8FXPDYAGgvaoa9kYKmEfH99XyxvpNdY%2BIEm%2BhHYejtLJJtDdMlGIBbbap%2B%2Ff%2Bm63J7jZyLRZtaLo3FFH%2FO32JG%2BnREML1cNF&X-Amz-Signature=401ecf35f3ded50db8e688150dd3a9774d7bb1e6ea084474dcecc7de097c9988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655KIWIXI%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCJfgS65n19OPuQqq5TSeHgzhsRqdJ52QRZYWMgJj9ggIgXDdYUDaUkP01wv7IYUfczcPRiSRcUPSgp6N%2F7oC9D9gqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwzM38adBJ9Xnc0NSrcA2Me%2BXGm%2B3neBLcjstsoWow5cKMQuTgMUx5MoPCuxSS8kEi%2BDsXRWeQaDG6nIKYTJ8PI9TV7ZnIgJ7CPBR2GjMoTBvN2GCdzx76%2Fl72h7up3YXV4a7wB%2B0dXnUVZqK5cFsSZzFQb6v4uLP1EWcwrklS%2FfvfH25hNnQghxA3SiswEgFKLd2BfIPQ7aPrzITjVkaUJ%2Bpe6%2FcpAWU9G%2BJxOb39I%2BJrpgW1PEx2ftKRTPIeaJvckSd%2BWV0B2lqw6OBMZit6yJl%2F2aeQpG2Rjtf17CuR1tu69deFtRDl7U%2FxChprnlZAC%2BX3xYto%2BrRKvCTHTcrdY9xiIF7vc4JYtWaxAexXw6nZjxwgWtU0u1RbGfM1gRPkw12hfhf6ddRDMSAOewQCD541UpynxJ8acrb3wruFujy81gbp2Qv3rW0d%2FZbr%2Fx5P25WAS42WGO6SMoG5XiwFk71dScknBFskyKBvchxjX8YgN%2FWV6PNcyRpsr2y%2B6896OXnjimKKpAE%2F9jaL4eKyluvrxriNZW1S7Zn5GavuWhN%2FUMF6Yo99pIX8YVIaAzmPJnVUSTNDFOaRrhO%2Ba3u0gRgxpsoxV8b7alHO0nxN5pS7LGXhoxd3k9Z6ggL8s19uiAgAGlrTXrLC8MICA%2FcIGOqUBg3xdbWjke7b8djCDjenjZP9JlfQl5S469nEl%2BW%2BAsy6DUpGHCJfXvri6oGgTbpAtHMlOMZwdeUNXbnxGFhhhvTlDLRbbYQqamhLhzmT52SJcxFNPXRQHvu607bYY8FXPDYAGgvaoa9kYKmEfH99XyxvpNdY%2BIEm%2BhHYejtLJJtDdMlGIBbbap%2B%2Ff%2Bm63J7jZyLRZtaLo3FFH%2FO32JG%2BnREML1cNF&X-Amz-Signature=6caca56e6e09d8daa779377ba0795dcb8fefa69798651c508420571e453e8640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655KIWIXI%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCJfgS65n19OPuQqq5TSeHgzhsRqdJ52QRZYWMgJj9ggIgXDdYUDaUkP01wv7IYUfczcPRiSRcUPSgp6N%2F7oC9D9gqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwzM38adBJ9Xnc0NSrcA2Me%2BXGm%2B3neBLcjstsoWow5cKMQuTgMUx5MoPCuxSS8kEi%2BDsXRWeQaDG6nIKYTJ8PI9TV7ZnIgJ7CPBR2GjMoTBvN2GCdzx76%2Fl72h7up3YXV4a7wB%2B0dXnUVZqK5cFsSZzFQb6v4uLP1EWcwrklS%2FfvfH25hNnQghxA3SiswEgFKLd2BfIPQ7aPrzITjVkaUJ%2Bpe6%2FcpAWU9G%2BJxOb39I%2BJrpgW1PEx2ftKRTPIeaJvckSd%2BWV0B2lqw6OBMZit6yJl%2F2aeQpG2Rjtf17CuR1tu69deFtRDl7U%2FxChprnlZAC%2BX3xYto%2BrRKvCTHTcrdY9xiIF7vc4JYtWaxAexXw6nZjxwgWtU0u1RbGfM1gRPkw12hfhf6ddRDMSAOewQCD541UpynxJ8acrb3wruFujy81gbp2Qv3rW0d%2FZbr%2Fx5P25WAS42WGO6SMoG5XiwFk71dScknBFskyKBvchxjX8YgN%2FWV6PNcyRpsr2y%2B6896OXnjimKKpAE%2F9jaL4eKyluvrxriNZW1S7Zn5GavuWhN%2FUMF6Yo99pIX8YVIaAzmPJnVUSTNDFOaRrhO%2Ba3u0gRgxpsoxV8b7alHO0nxN5pS7LGXhoxd3k9Z6ggL8s19uiAgAGlrTXrLC8MICA%2FcIGOqUBg3xdbWjke7b8djCDjenjZP9JlfQl5S469nEl%2BW%2BAsy6DUpGHCJfXvri6oGgTbpAtHMlOMZwdeUNXbnxGFhhhvTlDLRbbYQqamhLhzmT52SJcxFNPXRQHvu607bYY8FXPDYAGgvaoa9kYKmEfH99XyxvpNdY%2BIEm%2BhHYejtLJJtDdMlGIBbbap%2B%2Ff%2Bm63J7jZyLRZtaLo3FFH%2FO32JG%2BnREML1cNF&X-Amz-Signature=72c837e3a62b32ad3e31c1fe5bbaf824ef6640de33063b326f92d51362bfdf48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
