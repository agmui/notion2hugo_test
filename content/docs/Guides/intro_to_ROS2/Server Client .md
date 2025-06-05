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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VBNLT6C%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCrU1xNfm8UEaQQmYRyun%2BOA3wk9S15%2BVYA9%2BfgW%2B3R5gIga7r%2BapnhbgGEpXUoVRsj78PbrJTkNaFhkmvizoR7J1Yq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMafGqTrS%2BhGi0d2CircA%2FY6%2Fr1QbGbQT3%2BbDT%2BG5Q9kjRiMtVMxj%2F8vpSyGAlxqO2uJ5B4W%2B9PlGN78vA%2Bz94ExXhLx62vtl7H6TFeSQGnv4uOD8zJ2ldKfvf69I%2FItHdpVm0f0Ha2zZR5GW5Ok6Kb025lmkneIzE74Op%2FlCIdKzAJHy23JQZpO3xiqR09s8bGkqn3uwe7ZYKvpVIeQKYNaIJS9dpGJjdt%2Fl4a371ULKuI3HTOxpZjAbrv%2BP7DdNYdVBBtm%2FZ432fHCVR1l738V1KixAvaU3Eh1l6iO4A0YZ%2FMzgfvTZ7tacGn2igSbDjreHmmD6qCJKnwvCjwqdyNd8tOBP2Op199ug1e9jjw1%2FbHFyF9qUfVNyt5il8ZIgP1mK2pFn5RkIjds%2BhmbtClibqBFNeVCxxEhHWrpqBA7F63zaJxdK%2FIwyQrse7BOAD9uvp9NQhQfyNIZyLWZrz1wJxTf0Y9WDPWtYi7UZpUlzJBzHpYcS5x96j4M6rIgueZsFcMU1m13gkQldIb3Lej3EsvymAF7xghiAjP3VkTfKCvDR1BBazSTaMdUcEV2qjY%2FYV%2BLORpw%2BpRZvbiNGBNjB0oz%2FNPlKtMe9zDIUlCDfnl9BvgRNAsx0NnbzFyR%2Bg9A8pPoCtszMLeVMLfYh8IGOqUB1%2BbvqezTvGQAVfv05cjhPcnBvENS9TjCRPTqL8mE3CY4j%2FjEEjhLZjfY1ETVimEBVp06JF5hPU5ygdrNaoDCk46SXFpbLXguXr4187TfxNs5wUgAq6slGR5dPjve%2Fszwf6PqHYcxW%2F7MtIkhComfFC0Qp2iGVmT1hVbogDByqkX2JH2pIOHPSx%2BfEgmlW4Em81G1063ze9DFexI3M%2FvWPlX2aNFh&X-Amz-Signature=e26bbff91b014de38cc7e7e143eed0bb111038c6c64a1a57b8c608319a864082&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VBNLT6C%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCrU1xNfm8UEaQQmYRyun%2BOA3wk9S15%2BVYA9%2BfgW%2B3R5gIga7r%2BapnhbgGEpXUoVRsj78PbrJTkNaFhkmvizoR7J1Yq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMafGqTrS%2BhGi0d2CircA%2FY6%2Fr1QbGbQT3%2BbDT%2BG5Q9kjRiMtVMxj%2F8vpSyGAlxqO2uJ5B4W%2B9PlGN78vA%2Bz94ExXhLx62vtl7H6TFeSQGnv4uOD8zJ2ldKfvf69I%2FItHdpVm0f0Ha2zZR5GW5Ok6Kb025lmkneIzE74Op%2FlCIdKzAJHy23JQZpO3xiqR09s8bGkqn3uwe7ZYKvpVIeQKYNaIJS9dpGJjdt%2Fl4a371ULKuI3HTOxpZjAbrv%2BP7DdNYdVBBtm%2FZ432fHCVR1l738V1KixAvaU3Eh1l6iO4A0YZ%2FMzgfvTZ7tacGn2igSbDjreHmmD6qCJKnwvCjwqdyNd8tOBP2Op199ug1e9jjw1%2FbHFyF9qUfVNyt5il8ZIgP1mK2pFn5RkIjds%2BhmbtClibqBFNeVCxxEhHWrpqBA7F63zaJxdK%2FIwyQrse7BOAD9uvp9NQhQfyNIZyLWZrz1wJxTf0Y9WDPWtYi7UZpUlzJBzHpYcS5x96j4M6rIgueZsFcMU1m13gkQldIb3Lej3EsvymAF7xghiAjP3VkTfKCvDR1BBazSTaMdUcEV2qjY%2FYV%2BLORpw%2BpRZvbiNGBNjB0oz%2FNPlKtMe9zDIUlCDfnl9BvgRNAsx0NnbzFyR%2Bg9A8pPoCtszMLeVMLfYh8IGOqUB1%2BbvqezTvGQAVfv05cjhPcnBvENS9TjCRPTqL8mE3CY4j%2FjEEjhLZjfY1ETVimEBVp06JF5hPU5ygdrNaoDCk46SXFpbLXguXr4187TfxNs5wUgAq6slGR5dPjve%2Fszwf6PqHYcxW%2F7MtIkhComfFC0Qp2iGVmT1hVbogDByqkX2JH2pIOHPSx%2BfEgmlW4Em81G1063ze9DFexI3M%2FvWPlX2aNFh&X-Amz-Signature=416c2275d48741e994a8217c3b2781eb81bbe5594324dcc3e4610eda3b7a0194&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VBNLT6C%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCrU1xNfm8UEaQQmYRyun%2BOA3wk9S15%2BVYA9%2BfgW%2B3R5gIga7r%2BapnhbgGEpXUoVRsj78PbrJTkNaFhkmvizoR7J1Yq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMafGqTrS%2BhGi0d2CircA%2FY6%2Fr1QbGbQT3%2BbDT%2BG5Q9kjRiMtVMxj%2F8vpSyGAlxqO2uJ5B4W%2B9PlGN78vA%2Bz94ExXhLx62vtl7H6TFeSQGnv4uOD8zJ2ldKfvf69I%2FItHdpVm0f0Ha2zZR5GW5Ok6Kb025lmkneIzE74Op%2FlCIdKzAJHy23JQZpO3xiqR09s8bGkqn3uwe7ZYKvpVIeQKYNaIJS9dpGJjdt%2Fl4a371ULKuI3HTOxpZjAbrv%2BP7DdNYdVBBtm%2FZ432fHCVR1l738V1KixAvaU3Eh1l6iO4A0YZ%2FMzgfvTZ7tacGn2igSbDjreHmmD6qCJKnwvCjwqdyNd8tOBP2Op199ug1e9jjw1%2FbHFyF9qUfVNyt5il8ZIgP1mK2pFn5RkIjds%2BhmbtClibqBFNeVCxxEhHWrpqBA7F63zaJxdK%2FIwyQrse7BOAD9uvp9NQhQfyNIZyLWZrz1wJxTf0Y9WDPWtYi7UZpUlzJBzHpYcS5x96j4M6rIgueZsFcMU1m13gkQldIb3Lej3EsvymAF7xghiAjP3VkTfKCvDR1BBazSTaMdUcEV2qjY%2FYV%2BLORpw%2BpRZvbiNGBNjB0oz%2FNPlKtMe9zDIUlCDfnl9BvgRNAsx0NnbzFyR%2Bg9A8pPoCtszMLeVMLfYh8IGOqUB1%2BbvqezTvGQAVfv05cjhPcnBvENS9TjCRPTqL8mE3CY4j%2FjEEjhLZjfY1ETVimEBVp06JF5hPU5ygdrNaoDCk46SXFpbLXguXr4187TfxNs5wUgAq6slGR5dPjve%2Fszwf6PqHYcxW%2F7MtIkhComfFC0Qp2iGVmT1hVbogDByqkX2JH2pIOHPSx%2BfEgmlW4Em81G1063ze9DFexI3M%2FvWPlX2aNFh&X-Amz-Signature=4f9bef77402aa98dc61191c7f002d7c2e3052cef397e826f65b6e854a13f82b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VBNLT6C%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCrU1xNfm8UEaQQmYRyun%2BOA3wk9S15%2BVYA9%2BfgW%2B3R5gIga7r%2BapnhbgGEpXUoVRsj78PbrJTkNaFhkmvizoR7J1Yq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMafGqTrS%2BhGi0d2CircA%2FY6%2Fr1QbGbQT3%2BbDT%2BG5Q9kjRiMtVMxj%2F8vpSyGAlxqO2uJ5B4W%2B9PlGN78vA%2Bz94ExXhLx62vtl7H6TFeSQGnv4uOD8zJ2ldKfvf69I%2FItHdpVm0f0Ha2zZR5GW5Ok6Kb025lmkneIzE74Op%2FlCIdKzAJHy23JQZpO3xiqR09s8bGkqn3uwe7ZYKvpVIeQKYNaIJS9dpGJjdt%2Fl4a371ULKuI3HTOxpZjAbrv%2BP7DdNYdVBBtm%2FZ432fHCVR1l738V1KixAvaU3Eh1l6iO4A0YZ%2FMzgfvTZ7tacGn2igSbDjreHmmD6qCJKnwvCjwqdyNd8tOBP2Op199ug1e9jjw1%2FbHFyF9qUfVNyt5il8ZIgP1mK2pFn5RkIjds%2BhmbtClibqBFNeVCxxEhHWrpqBA7F63zaJxdK%2FIwyQrse7BOAD9uvp9NQhQfyNIZyLWZrz1wJxTf0Y9WDPWtYi7UZpUlzJBzHpYcS5x96j4M6rIgueZsFcMU1m13gkQldIb3Lej3EsvymAF7xghiAjP3VkTfKCvDR1BBazSTaMdUcEV2qjY%2FYV%2BLORpw%2BpRZvbiNGBNjB0oz%2FNPlKtMe9zDIUlCDfnl9BvgRNAsx0NnbzFyR%2Bg9A8pPoCtszMLeVMLfYh8IGOqUB1%2BbvqezTvGQAVfv05cjhPcnBvENS9TjCRPTqL8mE3CY4j%2FjEEjhLZjfY1ETVimEBVp06JF5hPU5ygdrNaoDCk46SXFpbLXguXr4187TfxNs5wUgAq6slGR5dPjve%2Fszwf6PqHYcxW%2F7MtIkhComfFC0Qp2iGVmT1hVbogDByqkX2JH2pIOHPSx%2BfEgmlW4Em81G1063ze9DFexI3M%2FvWPlX2aNFh&X-Amz-Signature=090af4d9ed68aa79113c05fe453462092b08ccb69e1dffd00b0f5921923df0a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VBNLT6C%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCrU1xNfm8UEaQQmYRyun%2BOA3wk9S15%2BVYA9%2BfgW%2B3R5gIga7r%2BapnhbgGEpXUoVRsj78PbrJTkNaFhkmvizoR7J1Yq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMafGqTrS%2BhGi0d2CircA%2FY6%2Fr1QbGbQT3%2BbDT%2BG5Q9kjRiMtVMxj%2F8vpSyGAlxqO2uJ5B4W%2B9PlGN78vA%2Bz94ExXhLx62vtl7H6TFeSQGnv4uOD8zJ2ldKfvf69I%2FItHdpVm0f0Ha2zZR5GW5Ok6Kb025lmkneIzE74Op%2FlCIdKzAJHy23JQZpO3xiqR09s8bGkqn3uwe7ZYKvpVIeQKYNaIJS9dpGJjdt%2Fl4a371ULKuI3HTOxpZjAbrv%2BP7DdNYdVBBtm%2FZ432fHCVR1l738V1KixAvaU3Eh1l6iO4A0YZ%2FMzgfvTZ7tacGn2igSbDjreHmmD6qCJKnwvCjwqdyNd8tOBP2Op199ug1e9jjw1%2FbHFyF9qUfVNyt5il8ZIgP1mK2pFn5RkIjds%2BhmbtClibqBFNeVCxxEhHWrpqBA7F63zaJxdK%2FIwyQrse7BOAD9uvp9NQhQfyNIZyLWZrz1wJxTf0Y9WDPWtYi7UZpUlzJBzHpYcS5x96j4M6rIgueZsFcMU1m13gkQldIb3Lej3EsvymAF7xghiAjP3VkTfKCvDR1BBazSTaMdUcEV2qjY%2FYV%2BLORpw%2BpRZvbiNGBNjB0oz%2FNPlKtMe9zDIUlCDfnl9BvgRNAsx0NnbzFyR%2Bg9A8pPoCtszMLeVMLfYh8IGOqUB1%2BbvqezTvGQAVfv05cjhPcnBvENS9TjCRPTqL8mE3CY4j%2FjEEjhLZjfY1ETVimEBVp06JF5hPU5ygdrNaoDCk46SXFpbLXguXr4187TfxNs5wUgAq6slGR5dPjve%2Fszwf6PqHYcxW%2F7MtIkhComfFC0Qp2iGVmT1hVbogDByqkX2JH2pIOHPSx%2BfEgmlW4Em81G1063ze9DFexI3M%2FvWPlX2aNFh&X-Amz-Signature=fc9e0db60cee055aca3607f9e355c9f765f974ec631ec7654de4e1523537476a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
