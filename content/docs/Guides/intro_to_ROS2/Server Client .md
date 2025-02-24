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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWXOGXGM%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9mfNVErUPc9qpaOXA1a6FkV75sqffGsB41%2B18iVeM1gIhAJFsHLvTSgFr9943JytnaVttVsBA8WObk0gDfvCnyFgTKv8DCC0QABoMNjM3NDIzMTgzODA1Igx9IJUO9yMrn2Uzbo8q3APe73CS55NWY1xuWsDTwInKhZUU5Uo9TYKYOqeb2xUPohNqUhOBcnEDYs7apcl51ti5vpu2nfkZp4cxuxST4fvbbRg1APDsOPKrgnCts5kSVGXCHRueOFIrHZs5OjqaWBDiDPtiqgQM%2BovqWlDbeepfs8PA58Ap1rwaNnvKIZXUZiLGS8rnOJxxd1l4jMWQjQYtv4uiEOVo1NYRR5jeBIMfloc5Zso4s4UzZJ43Vdp3s%2BgLtQzxRUqFeSk6DzYAOF3xyBwLvjvZtzIAbDNXuJtXUXes4XX0Ky5F2Knp8bDxRH5Pf3MT92WjRXfNGr9i2ROAJpvpnT3RpVTwkncZEvQNPYdYZhGYpWIMTd%2BM81y%2FM9aIm88B%2BsIbqlFnDSkA%2B6XsyjXBxZOh1ec4X8AzENKTHhCmHzKuSyk7m4GTg%2BakpXh13DAIeylNs0Pz14EX5OElnD3fcapm%2BxyGZ1zWIr7u6Iw%2FdLKnlPISfRaI3maFISAaS0BqjS5S9HSUn3kwO6LrvsolufR4Stft6uJIPPII2%2F1kX7S7HELv4a6QiiQVzr8%2Fu8soSmUadU3WCrnxSWUVat2G4bS2M4cXaHbsP49cvaAPCUU338ejHU0kyWZgcmOIbSJIvfFVXlxEeTCkuPG9BjqkARNs6NFRXFcE8Bs2t6t8f4nq0I2RH0PzX7L0qQJV6lDgot7zRKzbJ%2FHx%2Ft8HkOBorj8QnfkoZdJGWtme25G0TpfsVZU3a99aASBB89%2BRb6Hjmp2%2BPuRzxAyiOr9F65ia3dtAqYMOf6eec1R1Pby174n53y48YzecpXC3I6mA3zanu6O5PUmkXwyMLvgyhmKHWBHxndSfa1hmYL4TE6DxLfF0Ascp&X-Amz-Signature=4683d932b3102017d6be3d135f5bf72338b53e603b29060de5b56c10112cecf1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWXOGXGM%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9mfNVErUPc9qpaOXA1a6FkV75sqffGsB41%2B18iVeM1gIhAJFsHLvTSgFr9943JytnaVttVsBA8WObk0gDfvCnyFgTKv8DCC0QABoMNjM3NDIzMTgzODA1Igx9IJUO9yMrn2Uzbo8q3APe73CS55NWY1xuWsDTwInKhZUU5Uo9TYKYOqeb2xUPohNqUhOBcnEDYs7apcl51ti5vpu2nfkZp4cxuxST4fvbbRg1APDsOPKrgnCts5kSVGXCHRueOFIrHZs5OjqaWBDiDPtiqgQM%2BovqWlDbeepfs8PA58Ap1rwaNnvKIZXUZiLGS8rnOJxxd1l4jMWQjQYtv4uiEOVo1NYRR5jeBIMfloc5Zso4s4UzZJ43Vdp3s%2BgLtQzxRUqFeSk6DzYAOF3xyBwLvjvZtzIAbDNXuJtXUXes4XX0Ky5F2Knp8bDxRH5Pf3MT92WjRXfNGr9i2ROAJpvpnT3RpVTwkncZEvQNPYdYZhGYpWIMTd%2BM81y%2FM9aIm88B%2BsIbqlFnDSkA%2B6XsyjXBxZOh1ec4X8AzENKTHhCmHzKuSyk7m4GTg%2BakpXh13DAIeylNs0Pz14EX5OElnD3fcapm%2BxyGZ1zWIr7u6Iw%2FdLKnlPISfRaI3maFISAaS0BqjS5S9HSUn3kwO6LrvsolufR4Stft6uJIPPII2%2F1kX7S7HELv4a6QiiQVzr8%2Fu8soSmUadU3WCrnxSWUVat2G4bS2M4cXaHbsP49cvaAPCUU338ejHU0kyWZgcmOIbSJIvfFVXlxEeTCkuPG9BjqkARNs6NFRXFcE8Bs2t6t8f4nq0I2RH0PzX7L0qQJV6lDgot7zRKzbJ%2FHx%2Ft8HkOBorj8QnfkoZdJGWtme25G0TpfsVZU3a99aASBB89%2BRb6Hjmp2%2BPuRzxAyiOr9F65ia3dtAqYMOf6eec1R1Pby174n53y48YzecpXC3I6mA3zanu6O5PUmkXwyMLvgyhmKHWBHxndSfa1hmYL4TE6DxLfF0Ascp&X-Amz-Signature=41178bff5cd1cece4ca080f0c597bc7a33f25ba16fd61acb5574a1ba0b71190c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWXOGXGM%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9mfNVErUPc9qpaOXA1a6FkV75sqffGsB41%2B18iVeM1gIhAJFsHLvTSgFr9943JytnaVttVsBA8WObk0gDfvCnyFgTKv8DCC0QABoMNjM3NDIzMTgzODA1Igx9IJUO9yMrn2Uzbo8q3APe73CS55NWY1xuWsDTwInKhZUU5Uo9TYKYOqeb2xUPohNqUhOBcnEDYs7apcl51ti5vpu2nfkZp4cxuxST4fvbbRg1APDsOPKrgnCts5kSVGXCHRueOFIrHZs5OjqaWBDiDPtiqgQM%2BovqWlDbeepfs8PA58Ap1rwaNnvKIZXUZiLGS8rnOJxxd1l4jMWQjQYtv4uiEOVo1NYRR5jeBIMfloc5Zso4s4UzZJ43Vdp3s%2BgLtQzxRUqFeSk6DzYAOF3xyBwLvjvZtzIAbDNXuJtXUXes4XX0Ky5F2Knp8bDxRH5Pf3MT92WjRXfNGr9i2ROAJpvpnT3RpVTwkncZEvQNPYdYZhGYpWIMTd%2BM81y%2FM9aIm88B%2BsIbqlFnDSkA%2B6XsyjXBxZOh1ec4X8AzENKTHhCmHzKuSyk7m4GTg%2BakpXh13DAIeylNs0Pz14EX5OElnD3fcapm%2BxyGZ1zWIr7u6Iw%2FdLKnlPISfRaI3maFISAaS0BqjS5S9HSUn3kwO6LrvsolufR4Stft6uJIPPII2%2F1kX7S7HELv4a6QiiQVzr8%2Fu8soSmUadU3WCrnxSWUVat2G4bS2M4cXaHbsP49cvaAPCUU338ejHU0kyWZgcmOIbSJIvfFVXlxEeTCkuPG9BjqkARNs6NFRXFcE8Bs2t6t8f4nq0I2RH0PzX7L0qQJV6lDgot7zRKzbJ%2FHx%2Ft8HkOBorj8QnfkoZdJGWtme25G0TpfsVZU3a99aASBB89%2BRb6Hjmp2%2BPuRzxAyiOr9F65ia3dtAqYMOf6eec1R1Pby174n53y48YzecpXC3I6mA3zanu6O5PUmkXwyMLvgyhmKHWBHxndSfa1hmYL4TE6DxLfF0Ascp&X-Amz-Signature=977c754aa3a050ea291db89b26b1cf7f1f05bbebca78af7fce7fb2ea8c0c4436&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWXOGXGM%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9mfNVErUPc9qpaOXA1a6FkV75sqffGsB41%2B18iVeM1gIhAJFsHLvTSgFr9943JytnaVttVsBA8WObk0gDfvCnyFgTKv8DCC0QABoMNjM3NDIzMTgzODA1Igx9IJUO9yMrn2Uzbo8q3APe73CS55NWY1xuWsDTwInKhZUU5Uo9TYKYOqeb2xUPohNqUhOBcnEDYs7apcl51ti5vpu2nfkZp4cxuxST4fvbbRg1APDsOPKrgnCts5kSVGXCHRueOFIrHZs5OjqaWBDiDPtiqgQM%2BovqWlDbeepfs8PA58Ap1rwaNnvKIZXUZiLGS8rnOJxxd1l4jMWQjQYtv4uiEOVo1NYRR5jeBIMfloc5Zso4s4UzZJ43Vdp3s%2BgLtQzxRUqFeSk6DzYAOF3xyBwLvjvZtzIAbDNXuJtXUXes4XX0Ky5F2Knp8bDxRH5Pf3MT92WjRXfNGr9i2ROAJpvpnT3RpVTwkncZEvQNPYdYZhGYpWIMTd%2BM81y%2FM9aIm88B%2BsIbqlFnDSkA%2B6XsyjXBxZOh1ec4X8AzENKTHhCmHzKuSyk7m4GTg%2BakpXh13DAIeylNs0Pz14EX5OElnD3fcapm%2BxyGZ1zWIr7u6Iw%2FdLKnlPISfRaI3maFISAaS0BqjS5S9HSUn3kwO6LrvsolufR4Stft6uJIPPII2%2F1kX7S7HELv4a6QiiQVzr8%2Fu8soSmUadU3WCrnxSWUVat2G4bS2M4cXaHbsP49cvaAPCUU338ejHU0kyWZgcmOIbSJIvfFVXlxEeTCkuPG9BjqkARNs6NFRXFcE8Bs2t6t8f4nq0I2RH0PzX7L0qQJV6lDgot7zRKzbJ%2FHx%2Ft8HkOBorj8QnfkoZdJGWtme25G0TpfsVZU3a99aASBB89%2BRb6Hjmp2%2BPuRzxAyiOr9F65ia3dtAqYMOf6eec1R1Pby174n53y48YzecpXC3I6mA3zanu6O5PUmkXwyMLvgyhmKHWBHxndSfa1hmYL4TE6DxLfF0Ascp&X-Amz-Signature=fcbb598fe3bc049618e983d739717e9134ecfe3bb06600b1b67bce38a1c43728&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWXOGXGM%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9mfNVErUPc9qpaOXA1a6FkV75sqffGsB41%2B18iVeM1gIhAJFsHLvTSgFr9943JytnaVttVsBA8WObk0gDfvCnyFgTKv8DCC0QABoMNjM3NDIzMTgzODA1Igx9IJUO9yMrn2Uzbo8q3APe73CS55NWY1xuWsDTwInKhZUU5Uo9TYKYOqeb2xUPohNqUhOBcnEDYs7apcl51ti5vpu2nfkZp4cxuxST4fvbbRg1APDsOPKrgnCts5kSVGXCHRueOFIrHZs5OjqaWBDiDPtiqgQM%2BovqWlDbeepfs8PA58Ap1rwaNnvKIZXUZiLGS8rnOJxxd1l4jMWQjQYtv4uiEOVo1NYRR5jeBIMfloc5Zso4s4UzZJ43Vdp3s%2BgLtQzxRUqFeSk6DzYAOF3xyBwLvjvZtzIAbDNXuJtXUXes4XX0Ky5F2Knp8bDxRH5Pf3MT92WjRXfNGr9i2ROAJpvpnT3RpVTwkncZEvQNPYdYZhGYpWIMTd%2BM81y%2FM9aIm88B%2BsIbqlFnDSkA%2B6XsyjXBxZOh1ec4X8AzENKTHhCmHzKuSyk7m4GTg%2BakpXh13DAIeylNs0Pz14EX5OElnD3fcapm%2BxyGZ1zWIr7u6Iw%2FdLKnlPISfRaI3maFISAaS0BqjS5S9HSUn3kwO6LrvsolufR4Stft6uJIPPII2%2F1kX7S7HELv4a6QiiQVzr8%2Fu8soSmUadU3WCrnxSWUVat2G4bS2M4cXaHbsP49cvaAPCUU338ejHU0kyWZgcmOIbSJIvfFVXlxEeTCkuPG9BjqkARNs6NFRXFcE8Bs2t6t8f4nq0I2RH0PzX7L0qQJV6lDgot7zRKzbJ%2FHx%2Ft8HkOBorj8QnfkoZdJGWtme25G0TpfsVZU3a99aASBB89%2BRb6Hjmp2%2BPuRzxAyiOr9F65ia3dtAqYMOf6eec1R1Pby174n53y48YzecpXC3I6mA3zanu6O5PUmkXwyMLvgyhmKHWBHxndSfa1hmYL4TE6DxLfF0Ascp&X-Amz-Signature=ea18157df8bff68e6ce11ed96a2c4515a01318d72b352528e6b10ac6be4f6ad9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
