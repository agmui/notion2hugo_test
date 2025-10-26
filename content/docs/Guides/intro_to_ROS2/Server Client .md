---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNEEBXOZ%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDBbEU0InC1yBdtq3eJygkmHuGMBoWYYC%2BkXR0BiRtQwIhAOBxYPz6n55Ql%2FS%2FP8hYcrn5cZOmz5UAc%2FmElsSyhJ60KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwkizUmbzPiO5lficq3APgImy3UCF1fVIePBhJnjr%2FyV2nlcv2vQhGtsslbPwp5NzEAmH%2ByLvnAc7FzPtM8Dm62yRnrLboY4HqLq6pkF7OKYV%2FG3CnJ%2BmAs%2FDHpBAuykHSaFxnckehVwYon%2FbiVodUYDTX0Ro6eva7UXs1vUmztJyeJusleu4sMPUl4skroS%2BfA0NmATvpQ21%2FC3FVVLAt7GzjM91FFGkYjZQOVMCsMbCRk7a71%2BnQN1bjtXAR3Hl4mMY7yTsqWpJO5TcjVtK1xJBeKWewpJhm6kCIzH%2F1f1zT5RgGQLmlJTKIhmPrzF18CckWDrnn%2B3LXkfgPd5gb03N2xkHpW1yVulPOzTs%2Bn3f8ql%2BdQrCLGm1lcaaSDqcSXfwkULBFYNb5ZcfVdW2bKDQuEcqVhRb3bdSZQhRntffmuth3CN8V%2FPL3VNk%2FIsjmxW4Y6BM1ok17VOyhkl8thJvoYTA6lLKpAWjXWu1VPs%2FrzqVWkNHR0BN9X5lht9Wri77uhiWLTpmgGfnR6ZgABjkwATBiaNh52yZE5BrnXMS8Aj%2B3iaswVW%2FQZMf3EI%2FRd0am%2F1oTEgQpdTmteAHYHb1hY%2B798AjhL%2BpYdJK964Zw5dUUpza1xc%2BeZL%2BSG0AF9T4QhywT8Tt1LjD%2BsPXHBjqkAQSYK%2FOBM7bdTGivJjIphma1bcIwV%2FTKpq%2BeLvX0OgtZyt6f3ftAnyQ42kqHPYE5iXm2SUy66V3SAmoJ1ya1cF7JLKM73VWI4O5G0EBdq7lxi%2Bt1QOQE6QS6cfiWk%2BKFPGIpZjEC0MzDcJp%2FcAfFVMAVOPympojK8seW%2Fyzwu91%2F0mq5okddMEXJG%2BzYAk42e7FfeW6lmbJ%2FMGZFUPGCyB2VMNrx&X-Amz-Signature=c5a2719fa323ae198f2343c48505904961c5ad16aa9c3626a7927e0793682a41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNEEBXOZ%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDBbEU0InC1yBdtq3eJygkmHuGMBoWYYC%2BkXR0BiRtQwIhAOBxYPz6n55Ql%2FS%2FP8hYcrn5cZOmz5UAc%2FmElsSyhJ60KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwkizUmbzPiO5lficq3APgImy3UCF1fVIePBhJnjr%2FyV2nlcv2vQhGtsslbPwp5NzEAmH%2ByLvnAc7FzPtM8Dm62yRnrLboY4HqLq6pkF7OKYV%2FG3CnJ%2BmAs%2FDHpBAuykHSaFxnckehVwYon%2FbiVodUYDTX0Ro6eva7UXs1vUmztJyeJusleu4sMPUl4skroS%2BfA0NmATvpQ21%2FC3FVVLAt7GzjM91FFGkYjZQOVMCsMbCRk7a71%2BnQN1bjtXAR3Hl4mMY7yTsqWpJO5TcjVtK1xJBeKWewpJhm6kCIzH%2F1f1zT5RgGQLmlJTKIhmPrzF18CckWDrnn%2B3LXkfgPd5gb03N2xkHpW1yVulPOzTs%2Bn3f8ql%2BdQrCLGm1lcaaSDqcSXfwkULBFYNb5ZcfVdW2bKDQuEcqVhRb3bdSZQhRntffmuth3CN8V%2FPL3VNk%2FIsjmxW4Y6BM1ok17VOyhkl8thJvoYTA6lLKpAWjXWu1VPs%2FrzqVWkNHR0BN9X5lht9Wri77uhiWLTpmgGfnR6ZgABjkwATBiaNh52yZE5BrnXMS8Aj%2B3iaswVW%2FQZMf3EI%2FRd0am%2F1oTEgQpdTmteAHYHb1hY%2B798AjhL%2BpYdJK964Zw5dUUpza1xc%2BeZL%2BSG0AF9T4QhywT8Tt1LjD%2BsPXHBjqkAQSYK%2FOBM7bdTGivJjIphma1bcIwV%2FTKpq%2BeLvX0OgtZyt6f3ftAnyQ42kqHPYE5iXm2SUy66V3SAmoJ1ya1cF7JLKM73VWI4O5G0EBdq7lxi%2Bt1QOQE6QS6cfiWk%2BKFPGIpZjEC0MzDcJp%2FcAfFVMAVOPympojK8seW%2Fyzwu91%2F0mq5okddMEXJG%2BzYAk42e7FfeW6lmbJ%2FMGZFUPGCyB2VMNrx&X-Amz-Signature=8ac3fe54b2d2de3531be7da7b6fea4f86fdf9a0099988e2b094b8514bdfca2ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNEEBXOZ%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDBbEU0InC1yBdtq3eJygkmHuGMBoWYYC%2BkXR0BiRtQwIhAOBxYPz6n55Ql%2FS%2FP8hYcrn5cZOmz5UAc%2FmElsSyhJ60KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwkizUmbzPiO5lficq3APgImy3UCF1fVIePBhJnjr%2FyV2nlcv2vQhGtsslbPwp5NzEAmH%2ByLvnAc7FzPtM8Dm62yRnrLboY4HqLq6pkF7OKYV%2FG3CnJ%2BmAs%2FDHpBAuykHSaFxnckehVwYon%2FbiVodUYDTX0Ro6eva7UXs1vUmztJyeJusleu4sMPUl4skroS%2BfA0NmATvpQ21%2FC3FVVLAt7GzjM91FFGkYjZQOVMCsMbCRk7a71%2BnQN1bjtXAR3Hl4mMY7yTsqWpJO5TcjVtK1xJBeKWewpJhm6kCIzH%2F1f1zT5RgGQLmlJTKIhmPrzF18CckWDrnn%2B3LXkfgPd5gb03N2xkHpW1yVulPOzTs%2Bn3f8ql%2BdQrCLGm1lcaaSDqcSXfwkULBFYNb5ZcfVdW2bKDQuEcqVhRb3bdSZQhRntffmuth3CN8V%2FPL3VNk%2FIsjmxW4Y6BM1ok17VOyhkl8thJvoYTA6lLKpAWjXWu1VPs%2FrzqVWkNHR0BN9X5lht9Wri77uhiWLTpmgGfnR6ZgABjkwATBiaNh52yZE5BrnXMS8Aj%2B3iaswVW%2FQZMf3EI%2FRd0am%2F1oTEgQpdTmteAHYHb1hY%2B798AjhL%2BpYdJK964Zw5dUUpza1xc%2BeZL%2BSG0AF9T4QhywT8Tt1LjD%2BsPXHBjqkAQSYK%2FOBM7bdTGivJjIphma1bcIwV%2FTKpq%2BeLvX0OgtZyt6f3ftAnyQ42kqHPYE5iXm2SUy66V3SAmoJ1ya1cF7JLKM73VWI4O5G0EBdq7lxi%2Bt1QOQE6QS6cfiWk%2BKFPGIpZjEC0MzDcJp%2FcAfFVMAVOPympojK8seW%2Fyzwu91%2F0mq5okddMEXJG%2BzYAk42e7FfeW6lmbJ%2FMGZFUPGCyB2VMNrx&X-Amz-Signature=31c80fbc0b4cb534f0117572ed8c284c1db2e7dd23f73f5b9cb01f3572348669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNEEBXOZ%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDBbEU0InC1yBdtq3eJygkmHuGMBoWYYC%2BkXR0BiRtQwIhAOBxYPz6n55Ql%2FS%2FP8hYcrn5cZOmz5UAc%2FmElsSyhJ60KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwkizUmbzPiO5lficq3APgImy3UCF1fVIePBhJnjr%2FyV2nlcv2vQhGtsslbPwp5NzEAmH%2ByLvnAc7FzPtM8Dm62yRnrLboY4HqLq6pkF7OKYV%2FG3CnJ%2BmAs%2FDHpBAuykHSaFxnckehVwYon%2FbiVodUYDTX0Ro6eva7UXs1vUmztJyeJusleu4sMPUl4skroS%2BfA0NmATvpQ21%2FC3FVVLAt7GzjM91FFGkYjZQOVMCsMbCRk7a71%2BnQN1bjtXAR3Hl4mMY7yTsqWpJO5TcjVtK1xJBeKWewpJhm6kCIzH%2F1f1zT5RgGQLmlJTKIhmPrzF18CckWDrnn%2B3LXkfgPd5gb03N2xkHpW1yVulPOzTs%2Bn3f8ql%2BdQrCLGm1lcaaSDqcSXfwkULBFYNb5ZcfVdW2bKDQuEcqVhRb3bdSZQhRntffmuth3CN8V%2FPL3VNk%2FIsjmxW4Y6BM1ok17VOyhkl8thJvoYTA6lLKpAWjXWu1VPs%2FrzqVWkNHR0BN9X5lht9Wri77uhiWLTpmgGfnR6ZgABjkwATBiaNh52yZE5BrnXMS8Aj%2B3iaswVW%2FQZMf3EI%2FRd0am%2F1oTEgQpdTmteAHYHb1hY%2B798AjhL%2BpYdJK964Zw5dUUpza1xc%2BeZL%2BSG0AF9T4QhywT8Tt1LjD%2BsPXHBjqkAQSYK%2FOBM7bdTGivJjIphma1bcIwV%2FTKpq%2BeLvX0OgtZyt6f3ftAnyQ42kqHPYE5iXm2SUy66V3SAmoJ1ya1cF7JLKM73VWI4O5G0EBdq7lxi%2Bt1QOQE6QS6cfiWk%2BKFPGIpZjEC0MzDcJp%2FcAfFVMAVOPympojK8seW%2Fyzwu91%2F0mq5okddMEXJG%2BzYAk42e7FfeW6lmbJ%2FMGZFUPGCyB2VMNrx&X-Amz-Signature=e8c895c85460e5a64e2af5fac39b5c540377480c6ec7c5051b0408642ab4ea67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNEEBXOZ%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDBbEU0InC1yBdtq3eJygkmHuGMBoWYYC%2BkXR0BiRtQwIhAOBxYPz6n55Ql%2FS%2FP8hYcrn5cZOmz5UAc%2FmElsSyhJ60KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwkizUmbzPiO5lficq3APgImy3UCF1fVIePBhJnjr%2FyV2nlcv2vQhGtsslbPwp5NzEAmH%2ByLvnAc7FzPtM8Dm62yRnrLboY4HqLq6pkF7OKYV%2FG3CnJ%2BmAs%2FDHpBAuykHSaFxnckehVwYon%2FbiVodUYDTX0Ro6eva7UXs1vUmztJyeJusleu4sMPUl4skroS%2BfA0NmATvpQ21%2FC3FVVLAt7GzjM91FFGkYjZQOVMCsMbCRk7a71%2BnQN1bjtXAR3Hl4mMY7yTsqWpJO5TcjVtK1xJBeKWewpJhm6kCIzH%2F1f1zT5RgGQLmlJTKIhmPrzF18CckWDrnn%2B3LXkfgPd5gb03N2xkHpW1yVulPOzTs%2Bn3f8ql%2BdQrCLGm1lcaaSDqcSXfwkULBFYNb5ZcfVdW2bKDQuEcqVhRb3bdSZQhRntffmuth3CN8V%2FPL3VNk%2FIsjmxW4Y6BM1ok17VOyhkl8thJvoYTA6lLKpAWjXWu1VPs%2FrzqVWkNHR0BN9X5lht9Wri77uhiWLTpmgGfnR6ZgABjkwATBiaNh52yZE5BrnXMS8Aj%2B3iaswVW%2FQZMf3EI%2FRd0am%2F1oTEgQpdTmteAHYHb1hY%2B798AjhL%2BpYdJK964Zw5dUUpza1xc%2BeZL%2BSG0AF9T4QhywT8Tt1LjD%2BsPXHBjqkAQSYK%2FOBM7bdTGivJjIphma1bcIwV%2FTKpq%2BeLvX0OgtZyt6f3ftAnyQ42kqHPYE5iXm2SUy66V3SAmoJ1ya1cF7JLKM73VWI4O5G0EBdq7lxi%2Bt1QOQE6QS6cfiWk%2BKFPGIpZjEC0MzDcJp%2FcAfFVMAVOPympojK8seW%2Fyzwu91%2F0mq5okddMEXJG%2BzYAk42e7FfeW6lmbJ%2FMGZFUPGCyB2VMNrx&X-Amz-Signature=3d917564054afb8f5e0f95e835a02aad88b301b713db0b2e234cc05d33e749a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
