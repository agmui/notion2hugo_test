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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWFCAADW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCr5JysTU7prsvRjB%2B8ytjN5li410qsYooSn2JbU2mXQAIgd6k72UpvAjf4X1ikR%2BsjiTAn7W1hbTJ8U%2FYSIO61b9sqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtSXPX4P0djuagYYyrcA44B3%2BUcQSSNEspuHCRXVJsNCa2iybHM0pmtQHYnrSzCiUimoNolRxrkgcjAKkiSr9%2FNqgOarMKylfVndfYPDLCAMPvOio7gLPZl80Ve3P1oo%2BgdByIa%2BATEOwn4%2BZTGDdiRqkUwpXq2Xy%2BThsXXHBgJpIb%2Fk6JJvkPITEgrXV73KLLEsE%2FZbB1MhOXpS7ULCNPmAGSJ%2B8WNvc572in459LVvc2wWYSCpQJJQ2Bfkl%2Ft1NaRDUumqpQUNyxQZS%2F3oJoNXy7wN0H%2BlvBnjS4mLWXalVmw073Y%2FRvD9%2BHy8U54l6mUSp831RUGwYUfN%2FgKDVqFF%2Bmh%2FIJblwjkZMjhLAEcqm034Rwu2GPBtQlRcItkvm%2FvmogB5Ty0UX21%2B1kA7YBZFY8q%2FHf24kD3Y2iHEVO%2F12NWYqAlgiJs0wekP1uHcKE602n3aIeTXP4layTNG0cKDlBMZAW0%2B4WiD3svKHn23XSKDBZXRhPJmybs%2FjCf69fPB4Vhsr8Gu9Cx6NOc%2Bp6%2BSLJL3ExMvr%2Bd2vFxwF7k1aYONpJnWnzKKJpB3UV0J6X7PS4CTlfOhxpF%2FtQmcrue3LPBfLYYcM1uySN73XKtIlzXH%2FQ7Y6u4FTv6E3Gd7nA5stToOp7tfRbtMJnDv8EGOqUBMuW0O82uuKNuIYGxZPQtwuYieWLQoyvjoFiEeSSuYNnI%2Bnc34i2ukFX6PEU4%2FHKt7272g0fg1zRzJZiMEqqwzhVgaTQotT%2FN0zJ4dGGOD1L3A7fFS41TbFl7WAAffHm0KqH2UP17Q9jdtwv2%2B9G7U7HNk8Cl0eioOv0wK2BAjB%2BY6btrhGNXOISW%2BI9aOQUlKoYVGDWOxMkC1%2FAbvdSWFoqmv6Ro&X-Amz-Signature=c1827ae94b4947ba9b5f54d86383738a1afcf0969af37493be410075c5d092d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWFCAADW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCr5JysTU7prsvRjB%2B8ytjN5li410qsYooSn2JbU2mXQAIgd6k72UpvAjf4X1ikR%2BsjiTAn7W1hbTJ8U%2FYSIO61b9sqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtSXPX4P0djuagYYyrcA44B3%2BUcQSSNEspuHCRXVJsNCa2iybHM0pmtQHYnrSzCiUimoNolRxrkgcjAKkiSr9%2FNqgOarMKylfVndfYPDLCAMPvOio7gLPZl80Ve3P1oo%2BgdByIa%2BATEOwn4%2BZTGDdiRqkUwpXq2Xy%2BThsXXHBgJpIb%2Fk6JJvkPITEgrXV73KLLEsE%2FZbB1MhOXpS7ULCNPmAGSJ%2B8WNvc572in459LVvc2wWYSCpQJJQ2Bfkl%2Ft1NaRDUumqpQUNyxQZS%2F3oJoNXy7wN0H%2BlvBnjS4mLWXalVmw073Y%2FRvD9%2BHy8U54l6mUSp831RUGwYUfN%2FgKDVqFF%2Bmh%2FIJblwjkZMjhLAEcqm034Rwu2GPBtQlRcItkvm%2FvmogB5Ty0UX21%2B1kA7YBZFY8q%2FHf24kD3Y2iHEVO%2F12NWYqAlgiJs0wekP1uHcKE602n3aIeTXP4layTNG0cKDlBMZAW0%2B4WiD3svKHn23XSKDBZXRhPJmybs%2FjCf69fPB4Vhsr8Gu9Cx6NOc%2Bp6%2BSLJL3ExMvr%2Bd2vFxwF7k1aYONpJnWnzKKJpB3UV0J6X7PS4CTlfOhxpF%2FtQmcrue3LPBfLYYcM1uySN73XKtIlzXH%2FQ7Y6u4FTv6E3Gd7nA5stToOp7tfRbtMJnDv8EGOqUBMuW0O82uuKNuIYGxZPQtwuYieWLQoyvjoFiEeSSuYNnI%2Bnc34i2ukFX6PEU4%2FHKt7272g0fg1zRzJZiMEqqwzhVgaTQotT%2FN0zJ4dGGOD1L3A7fFS41TbFl7WAAffHm0KqH2UP17Q9jdtwv2%2B9G7U7HNk8Cl0eioOv0wK2BAjB%2BY6btrhGNXOISW%2BI9aOQUlKoYVGDWOxMkC1%2FAbvdSWFoqmv6Ro&X-Amz-Signature=07c9044863032dfdddf738c4310d3be9f337277a9add770b5e5f1febcb79dc90&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWFCAADW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCr5JysTU7prsvRjB%2B8ytjN5li410qsYooSn2JbU2mXQAIgd6k72UpvAjf4X1ikR%2BsjiTAn7W1hbTJ8U%2FYSIO61b9sqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtSXPX4P0djuagYYyrcA44B3%2BUcQSSNEspuHCRXVJsNCa2iybHM0pmtQHYnrSzCiUimoNolRxrkgcjAKkiSr9%2FNqgOarMKylfVndfYPDLCAMPvOio7gLPZl80Ve3P1oo%2BgdByIa%2BATEOwn4%2BZTGDdiRqkUwpXq2Xy%2BThsXXHBgJpIb%2Fk6JJvkPITEgrXV73KLLEsE%2FZbB1MhOXpS7ULCNPmAGSJ%2B8WNvc572in459LVvc2wWYSCpQJJQ2Bfkl%2Ft1NaRDUumqpQUNyxQZS%2F3oJoNXy7wN0H%2BlvBnjS4mLWXalVmw073Y%2FRvD9%2BHy8U54l6mUSp831RUGwYUfN%2FgKDVqFF%2Bmh%2FIJblwjkZMjhLAEcqm034Rwu2GPBtQlRcItkvm%2FvmogB5Ty0UX21%2B1kA7YBZFY8q%2FHf24kD3Y2iHEVO%2F12NWYqAlgiJs0wekP1uHcKE602n3aIeTXP4layTNG0cKDlBMZAW0%2B4WiD3svKHn23XSKDBZXRhPJmybs%2FjCf69fPB4Vhsr8Gu9Cx6NOc%2Bp6%2BSLJL3ExMvr%2Bd2vFxwF7k1aYONpJnWnzKKJpB3UV0J6X7PS4CTlfOhxpF%2FtQmcrue3LPBfLYYcM1uySN73XKtIlzXH%2FQ7Y6u4FTv6E3Gd7nA5stToOp7tfRbtMJnDv8EGOqUBMuW0O82uuKNuIYGxZPQtwuYieWLQoyvjoFiEeSSuYNnI%2Bnc34i2ukFX6PEU4%2FHKt7272g0fg1zRzJZiMEqqwzhVgaTQotT%2FN0zJ4dGGOD1L3A7fFS41TbFl7WAAffHm0KqH2UP17Q9jdtwv2%2B9G7U7HNk8Cl0eioOv0wK2BAjB%2BY6btrhGNXOISW%2BI9aOQUlKoYVGDWOxMkC1%2FAbvdSWFoqmv6Ro&X-Amz-Signature=60011dfab983ca149905415e30a5b21bd3673e0841011f6769b606f5445786c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWFCAADW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCr5JysTU7prsvRjB%2B8ytjN5li410qsYooSn2JbU2mXQAIgd6k72UpvAjf4X1ikR%2BsjiTAn7W1hbTJ8U%2FYSIO61b9sqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtSXPX4P0djuagYYyrcA44B3%2BUcQSSNEspuHCRXVJsNCa2iybHM0pmtQHYnrSzCiUimoNolRxrkgcjAKkiSr9%2FNqgOarMKylfVndfYPDLCAMPvOio7gLPZl80Ve3P1oo%2BgdByIa%2BATEOwn4%2BZTGDdiRqkUwpXq2Xy%2BThsXXHBgJpIb%2Fk6JJvkPITEgrXV73KLLEsE%2FZbB1MhOXpS7ULCNPmAGSJ%2B8WNvc572in459LVvc2wWYSCpQJJQ2Bfkl%2Ft1NaRDUumqpQUNyxQZS%2F3oJoNXy7wN0H%2BlvBnjS4mLWXalVmw073Y%2FRvD9%2BHy8U54l6mUSp831RUGwYUfN%2FgKDVqFF%2Bmh%2FIJblwjkZMjhLAEcqm034Rwu2GPBtQlRcItkvm%2FvmogB5Ty0UX21%2B1kA7YBZFY8q%2FHf24kD3Y2iHEVO%2F12NWYqAlgiJs0wekP1uHcKE602n3aIeTXP4layTNG0cKDlBMZAW0%2B4WiD3svKHn23XSKDBZXRhPJmybs%2FjCf69fPB4Vhsr8Gu9Cx6NOc%2Bp6%2BSLJL3ExMvr%2Bd2vFxwF7k1aYONpJnWnzKKJpB3UV0J6X7PS4CTlfOhxpF%2FtQmcrue3LPBfLYYcM1uySN73XKtIlzXH%2FQ7Y6u4FTv6E3Gd7nA5stToOp7tfRbtMJnDv8EGOqUBMuW0O82uuKNuIYGxZPQtwuYieWLQoyvjoFiEeSSuYNnI%2Bnc34i2ukFX6PEU4%2FHKt7272g0fg1zRzJZiMEqqwzhVgaTQotT%2FN0zJ4dGGOD1L3A7fFS41TbFl7WAAffHm0KqH2UP17Q9jdtwv2%2B9G7U7HNk8Cl0eioOv0wK2BAjB%2BY6btrhGNXOISW%2BI9aOQUlKoYVGDWOxMkC1%2FAbvdSWFoqmv6Ro&X-Amz-Signature=8526a0d258d6551a8f5a3bd837b1098c4592e63f95a7d474bec5b54af5f1c54e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWFCAADW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCr5JysTU7prsvRjB%2B8ytjN5li410qsYooSn2JbU2mXQAIgd6k72UpvAjf4X1ikR%2BsjiTAn7W1hbTJ8U%2FYSIO61b9sqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtSXPX4P0djuagYYyrcA44B3%2BUcQSSNEspuHCRXVJsNCa2iybHM0pmtQHYnrSzCiUimoNolRxrkgcjAKkiSr9%2FNqgOarMKylfVndfYPDLCAMPvOio7gLPZl80Ve3P1oo%2BgdByIa%2BATEOwn4%2BZTGDdiRqkUwpXq2Xy%2BThsXXHBgJpIb%2Fk6JJvkPITEgrXV73KLLEsE%2FZbB1MhOXpS7ULCNPmAGSJ%2B8WNvc572in459LVvc2wWYSCpQJJQ2Bfkl%2Ft1NaRDUumqpQUNyxQZS%2F3oJoNXy7wN0H%2BlvBnjS4mLWXalVmw073Y%2FRvD9%2BHy8U54l6mUSp831RUGwYUfN%2FgKDVqFF%2Bmh%2FIJblwjkZMjhLAEcqm034Rwu2GPBtQlRcItkvm%2FvmogB5Ty0UX21%2B1kA7YBZFY8q%2FHf24kD3Y2iHEVO%2F12NWYqAlgiJs0wekP1uHcKE602n3aIeTXP4layTNG0cKDlBMZAW0%2B4WiD3svKHn23XSKDBZXRhPJmybs%2FjCf69fPB4Vhsr8Gu9Cx6NOc%2Bp6%2BSLJL3ExMvr%2Bd2vFxwF7k1aYONpJnWnzKKJpB3UV0J6X7PS4CTlfOhxpF%2FtQmcrue3LPBfLYYcM1uySN73XKtIlzXH%2FQ7Y6u4FTv6E3Gd7nA5stToOp7tfRbtMJnDv8EGOqUBMuW0O82uuKNuIYGxZPQtwuYieWLQoyvjoFiEeSSuYNnI%2Bnc34i2ukFX6PEU4%2FHKt7272g0fg1zRzJZiMEqqwzhVgaTQotT%2FN0zJ4dGGOD1L3A7fFS41TbFl7WAAffHm0KqH2UP17Q9jdtwv2%2B9G7U7HNk8Cl0eioOv0wK2BAjB%2BY6btrhGNXOISW%2BI9aOQUlKoYVGDWOxMkC1%2FAbvdSWFoqmv6Ro&X-Amz-Signature=bb8d53b77236bc12edfe28ee47c203e822b1c1d04aa99e76a06f784670487460&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
