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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STU7DNIS%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDA1xQWVLAzNeBhWgsc0BpjaI4AyxjdGtsULZoK43%2B10wIgOYm7g77Dwnerw50J%2Bc%2B7ltMA%2FCUNCHQCT848k%2B8nemsqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsO66ImNdW%2FEtFI1yrcA2RuyIcIBJjBS46PMr0VvQVm8jb49W81qmu%2BMOTDqnhwjCGVXqBIZcr0ikT2UNITYveX%2Fq99ayeJC4DO6k56J%2B2J5ndB9PSL4kr5uUx4%2BQa1svUvUSWawhh%2BfjlfmuX1fkYWBBrMcplmwvCv%2BVvOYGGN3ueRweeinDVB71Ilp93eywP5rXRm%2BZRu7Xs%2FM0wxXLoK5hj2IDiN31L%2BSa9U0%2Freq9KSp7sou9g7kAR5XapLQRgZWnTmDA0NKYCi0dV2D%2B7r%2BWqIkOLy0SktuAgVPiArNNP9jW9nPZPTzo0Mtl0QApkLrp8f7eEB9UuDoUFNWhCEPZlaYmy89haC6WQAI6Lx3VbrLeYVdpBgn4rV1MpEyirR64XO92kH%2FZNZGA81%2BL%2FEkg8Y%2FpP3PnOj2gCuBDo%2BXUgu%2FE2T4agSOJVCJHrzmcVjtQsDiehQlVuv3x6ZxkOueVgAKj%2BQlW2vrKpfmq81hYLhKHGO5sgoejy68Ob1Ux5L7L61Csn5rhAX5YQKsoXhJVkt3NRC%2FCaFUiD95ceh0xJ3mXMMdbDissC8lK8jZt2cOkjcybKPcf%2FwjmwuEa4qioWq8zd3aDkaeD2GU0eGImAzxiyRHxCCSZc1fJ0tIKt4zMHsUXcBB5lVMOPQvMMGOqUBGqujpuAiDYzHjC%2FziK4uFv74V2snxFrjDeWYPdiGCAPgMLlu5BsPDyEXYIn7f0DbixsUoqepGBGL4oapcCzn35ZOKlF8GeAX0CTZjS2qtxGX7SH0LdidgDID6SMxuiOcrZDD6CGhCwBK8oHj0Qgg%2Bltw6XO4JC2LrokqqU8OSyfj06y6pqfAhpcewu6ZXB7LppTxMAkA%2Bv%2FALLnp6LrnR9%2FvFk7e&X-Amz-Signature=83c225c83537b80774d802ca6a2705c01fbf278020294c0295eadf4b17af703a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STU7DNIS%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDA1xQWVLAzNeBhWgsc0BpjaI4AyxjdGtsULZoK43%2B10wIgOYm7g77Dwnerw50J%2Bc%2B7ltMA%2FCUNCHQCT848k%2B8nemsqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsO66ImNdW%2FEtFI1yrcA2RuyIcIBJjBS46PMr0VvQVm8jb49W81qmu%2BMOTDqnhwjCGVXqBIZcr0ikT2UNITYveX%2Fq99ayeJC4DO6k56J%2B2J5ndB9PSL4kr5uUx4%2BQa1svUvUSWawhh%2BfjlfmuX1fkYWBBrMcplmwvCv%2BVvOYGGN3ueRweeinDVB71Ilp93eywP5rXRm%2BZRu7Xs%2FM0wxXLoK5hj2IDiN31L%2BSa9U0%2Freq9KSp7sou9g7kAR5XapLQRgZWnTmDA0NKYCi0dV2D%2B7r%2BWqIkOLy0SktuAgVPiArNNP9jW9nPZPTzo0Mtl0QApkLrp8f7eEB9UuDoUFNWhCEPZlaYmy89haC6WQAI6Lx3VbrLeYVdpBgn4rV1MpEyirR64XO92kH%2FZNZGA81%2BL%2FEkg8Y%2FpP3PnOj2gCuBDo%2BXUgu%2FE2T4agSOJVCJHrzmcVjtQsDiehQlVuv3x6ZxkOueVgAKj%2BQlW2vrKpfmq81hYLhKHGO5sgoejy68Ob1Ux5L7L61Csn5rhAX5YQKsoXhJVkt3NRC%2FCaFUiD95ceh0xJ3mXMMdbDissC8lK8jZt2cOkjcybKPcf%2FwjmwuEa4qioWq8zd3aDkaeD2GU0eGImAzxiyRHxCCSZc1fJ0tIKt4zMHsUXcBB5lVMOPQvMMGOqUBGqujpuAiDYzHjC%2FziK4uFv74V2snxFrjDeWYPdiGCAPgMLlu5BsPDyEXYIn7f0DbixsUoqepGBGL4oapcCzn35ZOKlF8GeAX0CTZjS2qtxGX7SH0LdidgDID6SMxuiOcrZDD6CGhCwBK8oHj0Qgg%2Bltw6XO4JC2LrokqqU8OSyfj06y6pqfAhpcewu6ZXB7LppTxMAkA%2Bv%2FALLnp6LrnR9%2FvFk7e&X-Amz-Signature=804a95c085d0affaa6f83c9fab64f1cba6b9346b660c78abbf69365e34cf1f81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STU7DNIS%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDA1xQWVLAzNeBhWgsc0BpjaI4AyxjdGtsULZoK43%2B10wIgOYm7g77Dwnerw50J%2Bc%2B7ltMA%2FCUNCHQCT848k%2B8nemsqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsO66ImNdW%2FEtFI1yrcA2RuyIcIBJjBS46PMr0VvQVm8jb49W81qmu%2BMOTDqnhwjCGVXqBIZcr0ikT2UNITYveX%2Fq99ayeJC4DO6k56J%2B2J5ndB9PSL4kr5uUx4%2BQa1svUvUSWawhh%2BfjlfmuX1fkYWBBrMcplmwvCv%2BVvOYGGN3ueRweeinDVB71Ilp93eywP5rXRm%2BZRu7Xs%2FM0wxXLoK5hj2IDiN31L%2BSa9U0%2Freq9KSp7sou9g7kAR5XapLQRgZWnTmDA0NKYCi0dV2D%2B7r%2BWqIkOLy0SktuAgVPiArNNP9jW9nPZPTzo0Mtl0QApkLrp8f7eEB9UuDoUFNWhCEPZlaYmy89haC6WQAI6Lx3VbrLeYVdpBgn4rV1MpEyirR64XO92kH%2FZNZGA81%2BL%2FEkg8Y%2FpP3PnOj2gCuBDo%2BXUgu%2FE2T4agSOJVCJHrzmcVjtQsDiehQlVuv3x6ZxkOueVgAKj%2BQlW2vrKpfmq81hYLhKHGO5sgoejy68Ob1Ux5L7L61Csn5rhAX5YQKsoXhJVkt3NRC%2FCaFUiD95ceh0xJ3mXMMdbDissC8lK8jZt2cOkjcybKPcf%2FwjmwuEa4qioWq8zd3aDkaeD2GU0eGImAzxiyRHxCCSZc1fJ0tIKt4zMHsUXcBB5lVMOPQvMMGOqUBGqujpuAiDYzHjC%2FziK4uFv74V2snxFrjDeWYPdiGCAPgMLlu5BsPDyEXYIn7f0DbixsUoqepGBGL4oapcCzn35ZOKlF8GeAX0CTZjS2qtxGX7SH0LdidgDID6SMxuiOcrZDD6CGhCwBK8oHj0Qgg%2Bltw6XO4JC2LrokqqU8OSyfj06y6pqfAhpcewu6ZXB7LppTxMAkA%2Bv%2FALLnp6LrnR9%2FvFk7e&X-Amz-Signature=1dbf4298e3e831feb9876f9b44b54193aee943f6184ba094459676741e11fae2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STU7DNIS%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDA1xQWVLAzNeBhWgsc0BpjaI4AyxjdGtsULZoK43%2B10wIgOYm7g77Dwnerw50J%2Bc%2B7ltMA%2FCUNCHQCT848k%2B8nemsqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsO66ImNdW%2FEtFI1yrcA2RuyIcIBJjBS46PMr0VvQVm8jb49W81qmu%2BMOTDqnhwjCGVXqBIZcr0ikT2UNITYveX%2Fq99ayeJC4DO6k56J%2B2J5ndB9PSL4kr5uUx4%2BQa1svUvUSWawhh%2BfjlfmuX1fkYWBBrMcplmwvCv%2BVvOYGGN3ueRweeinDVB71Ilp93eywP5rXRm%2BZRu7Xs%2FM0wxXLoK5hj2IDiN31L%2BSa9U0%2Freq9KSp7sou9g7kAR5XapLQRgZWnTmDA0NKYCi0dV2D%2B7r%2BWqIkOLy0SktuAgVPiArNNP9jW9nPZPTzo0Mtl0QApkLrp8f7eEB9UuDoUFNWhCEPZlaYmy89haC6WQAI6Lx3VbrLeYVdpBgn4rV1MpEyirR64XO92kH%2FZNZGA81%2BL%2FEkg8Y%2FpP3PnOj2gCuBDo%2BXUgu%2FE2T4agSOJVCJHrzmcVjtQsDiehQlVuv3x6ZxkOueVgAKj%2BQlW2vrKpfmq81hYLhKHGO5sgoejy68Ob1Ux5L7L61Csn5rhAX5YQKsoXhJVkt3NRC%2FCaFUiD95ceh0xJ3mXMMdbDissC8lK8jZt2cOkjcybKPcf%2FwjmwuEa4qioWq8zd3aDkaeD2GU0eGImAzxiyRHxCCSZc1fJ0tIKt4zMHsUXcBB5lVMOPQvMMGOqUBGqujpuAiDYzHjC%2FziK4uFv74V2snxFrjDeWYPdiGCAPgMLlu5BsPDyEXYIn7f0DbixsUoqepGBGL4oapcCzn35ZOKlF8GeAX0CTZjS2qtxGX7SH0LdidgDID6SMxuiOcrZDD6CGhCwBK8oHj0Qgg%2Bltw6XO4JC2LrokqqU8OSyfj06y6pqfAhpcewu6ZXB7LppTxMAkA%2Bv%2FALLnp6LrnR9%2FvFk7e&X-Amz-Signature=8c8273149d88aed02f932af810ef1e65216884cbe401fcb74f6ce767735c11fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STU7DNIS%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDA1xQWVLAzNeBhWgsc0BpjaI4AyxjdGtsULZoK43%2B10wIgOYm7g77Dwnerw50J%2Bc%2B7ltMA%2FCUNCHQCT848k%2B8nemsqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsO66ImNdW%2FEtFI1yrcA2RuyIcIBJjBS46PMr0VvQVm8jb49W81qmu%2BMOTDqnhwjCGVXqBIZcr0ikT2UNITYveX%2Fq99ayeJC4DO6k56J%2B2J5ndB9PSL4kr5uUx4%2BQa1svUvUSWawhh%2BfjlfmuX1fkYWBBrMcplmwvCv%2BVvOYGGN3ueRweeinDVB71Ilp93eywP5rXRm%2BZRu7Xs%2FM0wxXLoK5hj2IDiN31L%2BSa9U0%2Freq9KSp7sou9g7kAR5XapLQRgZWnTmDA0NKYCi0dV2D%2B7r%2BWqIkOLy0SktuAgVPiArNNP9jW9nPZPTzo0Mtl0QApkLrp8f7eEB9UuDoUFNWhCEPZlaYmy89haC6WQAI6Lx3VbrLeYVdpBgn4rV1MpEyirR64XO92kH%2FZNZGA81%2BL%2FEkg8Y%2FpP3PnOj2gCuBDo%2BXUgu%2FE2T4agSOJVCJHrzmcVjtQsDiehQlVuv3x6ZxkOueVgAKj%2BQlW2vrKpfmq81hYLhKHGO5sgoejy68Ob1Ux5L7L61Csn5rhAX5YQKsoXhJVkt3NRC%2FCaFUiD95ceh0xJ3mXMMdbDissC8lK8jZt2cOkjcybKPcf%2FwjmwuEa4qioWq8zd3aDkaeD2GU0eGImAzxiyRHxCCSZc1fJ0tIKt4zMHsUXcBB5lVMOPQvMMGOqUBGqujpuAiDYzHjC%2FziK4uFv74V2snxFrjDeWYPdiGCAPgMLlu5BsPDyEXYIn7f0DbixsUoqepGBGL4oapcCzn35ZOKlF8GeAX0CTZjS2qtxGX7SH0LdidgDID6SMxuiOcrZDD6CGhCwBK8oHj0Qgg%2Bltw6XO4JC2LrokqqU8OSyfj06y6pqfAhpcewu6ZXB7LppTxMAkA%2Bv%2FALLnp6LrnR9%2FvFk7e&X-Amz-Signature=634e23df584b20ef26c22eaee4ccb2266245db163a636e474898dd7168e03e92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
