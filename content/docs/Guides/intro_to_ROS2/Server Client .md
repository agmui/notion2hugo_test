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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXODSYWU%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaxjA1FV3ri34HRxqu2FkVIO3UfSWuVXkl7jC4pBi87AiEA0B21T86cJKmK%2BIBGg%2FDDC3lvhnwOMb7al794rPWI6WQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtFejQii8ptI%2FMprCrcA1CbNM1x4QoomnsF0UdBxe7jc%2BDQAK%2FCPyavJWQ%2FFbcdsmYVMJdPASqY5EpNL2LdQzcBVVoTKj6akZ4yfrdS1Dti0NzzI9WEF%2BD6egLKjjcKaHZB5ubiZ9SFaJx2UT1c9DvRV2GQbZ9J%2B7MeJ3j7Jq8GP3qxn1kO6s2Epom8p%2B4Azx72%2Bcr%2BkeEny2LUMzdLrwR4lk%2Bd5Q6meR5g6n4DK2t7mnue4hLfDh1Bx5m7VhZ3be2I83dyIEy4HlAsjLJ618CGghTd%2BM6TYmPxZ8Sug0vxJSTIm7UjnHVQZRa8ccM5q1W8lgN%2F4uSKi48w1u%2BM4R9cDf7VLEtdoQ2OKs1DZCCUqIbG%2BpSRWchw%2BbZwYIlTTRI7STvu0uQiZtBHBgyijQAkI85a%2FIEDZldMpMzvk%2BP5It684YbRA1ioIclBlGv5Y3CUzRbjs1LfgI4lMgUEY2dv7VNP%2B0OFYREc0Z09DGU2Gmq2CrDO1sPw5VAPlRdlTwu0FrysJtvO8p8cA8%2BrBf3g7YI%2F4sIxYmo%2B2nrmbtHU93xj2acsn38Zj5Irwj3MaX2wUtitEKWrSzGyYzs03FsuWzEm5MbdCVGlO3uglsCmo2j0V0nDUbib9cGCvDbjJSRXoogc6KqqeelXMN%2Fd5MEGOqUBG2TTyXGAJc8Lw5qzqkttsqpQ%2B8BrBPuEgf9FGCwFlvY%2FyqYwdwwliQanjwLp1HfTx9xnSwqWnMm9RuKPPkW9us1gLHIDDlFryOc9fzRcvCZd7UGxeI69jvQCRya1g0G1GAoOGyieLazUx8PCEZMP9ME9CQN2VHBCmub7PubtgrGtpJaPL3HkbtkfdDdFglTPlky32YuRr20rB3D7%2B8fOaEJK7cr1&X-Amz-Signature=623cef05f78e2bfba8074377a8208428611a0f2d004bec14ef109786f576c633&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXODSYWU%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaxjA1FV3ri34HRxqu2FkVIO3UfSWuVXkl7jC4pBi87AiEA0B21T86cJKmK%2BIBGg%2FDDC3lvhnwOMb7al794rPWI6WQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtFejQii8ptI%2FMprCrcA1CbNM1x4QoomnsF0UdBxe7jc%2BDQAK%2FCPyavJWQ%2FFbcdsmYVMJdPASqY5EpNL2LdQzcBVVoTKj6akZ4yfrdS1Dti0NzzI9WEF%2BD6egLKjjcKaHZB5ubiZ9SFaJx2UT1c9DvRV2GQbZ9J%2B7MeJ3j7Jq8GP3qxn1kO6s2Epom8p%2B4Azx72%2Bcr%2BkeEny2LUMzdLrwR4lk%2Bd5Q6meR5g6n4DK2t7mnue4hLfDh1Bx5m7VhZ3be2I83dyIEy4HlAsjLJ618CGghTd%2BM6TYmPxZ8Sug0vxJSTIm7UjnHVQZRa8ccM5q1W8lgN%2F4uSKi48w1u%2BM4R9cDf7VLEtdoQ2OKs1DZCCUqIbG%2BpSRWchw%2BbZwYIlTTRI7STvu0uQiZtBHBgyijQAkI85a%2FIEDZldMpMzvk%2BP5It684YbRA1ioIclBlGv5Y3CUzRbjs1LfgI4lMgUEY2dv7VNP%2B0OFYREc0Z09DGU2Gmq2CrDO1sPw5VAPlRdlTwu0FrysJtvO8p8cA8%2BrBf3g7YI%2F4sIxYmo%2B2nrmbtHU93xj2acsn38Zj5Irwj3MaX2wUtitEKWrSzGyYzs03FsuWzEm5MbdCVGlO3uglsCmo2j0V0nDUbib9cGCvDbjJSRXoogc6KqqeelXMN%2Fd5MEGOqUBG2TTyXGAJc8Lw5qzqkttsqpQ%2B8BrBPuEgf9FGCwFlvY%2FyqYwdwwliQanjwLp1HfTx9xnSwqWnMm9RuKPPkW9us1gLHIDDlFryOc9fzRcvCZd7UGxeI69jvQCRya1g0G1GAoOGyieLazUx8PCEZMP9ME9CQN2VHBCmub7PubtgrGtpJaPL3HkbtkfdDdFglTPlky32YuRr20rB3D7%2B8fOaEJK7cr1&X-Amz-Signature=f266984777aebff6f8bf440c9dea004264af05c4fb94286e4b87ae643f033d6b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXODSYWU%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaxjA1FV3ri34HRxqu2FkVIO3UfSWuVXkl7jC4pBi87AiEA0B21T86cJKmK%2BIBGg%2FDDC3lvhnwOMb7al794rPWI6WQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtFejQii8ptI%2FMprCrcA1CbNM1x4QoomnsF0UdBxe7jc%2BDQAK%2FCPyavJWQ%2FFbcdsmYVMJdPASqY5EpNL2LdQzcBVVoTKj6akZ4yfrdS1Dti0NzzI9WEF%2BD6egLKjjcKaHZB5ubiZ9SFaJx2UT1c9DvRV2GQbZ9J%2B7MeJ3j7Jq8GP3qxn1kO6s2Epom8p%2B4Azx72%2Bcr%2BkeEny2LUMzdLrwR4lk%2Bd5Q6meR5g6n4DK2t7mnue4hLfDh1Bx5m7VhZ3be2I83dyIEy4HlAsjLJ618CGghTd%2BM6TYmPxZ8Sug0vxJSTIm7UjnHVQZRa8ccM5q1W8lgN%2F4uSKi48w1u%2BM4R9cDf7VLEtdoQ2OKs1DZCCUqIbG%2BpSRWchw%2BbZwYIlTTRI7STvu0uQiZtBHBgyijQAkI85a%2FIEDZldMpMzvk%2BP5It684YbRA1ioIclBlGv5Y3CUzRbjs1LfgI4lMgUEY2dv7VNP%2B0OFYREc0Z09DGU2Gmq2CrDO1sPw5VAPlRdlTwu0FrysJtvO8p8cA8%2BrBf3g7YI%2F4sIxYmo%2B2nrmbtHU93xj2acsn38Zj5Irwj3MaX2wUtitEKWrSzGyYzs03FsuWzEm5MbdCVGlO3uglsCmo2j0V0nDUbib9cGCvDbjJSRXoogc6KqqeelXMN%2Fd5MEGOqUBG2TTyXGAJc8Lw5qzqkttsqpQ%2B8BrBPuEgf9FGCwFlvY%2FyqYwdwwliQanjwLp1HfTx9xnSwqWnMm9RuKPPkW9us1gLHIDDlFryOc9fzRcvCZd7UGxeI69jvQCRya1g0G1GAoOGyieLazUx8PCEZMP9ME9CQN2VHBCmub7PubtgrGtpJaPL3HkbtkfdDdFglTPlky32YuRr20rB3D7%2B8fOaEJK7cr1&X-Amz-Signature=983370e48994204882684be22e43668fdcb9365b69cafbb98d4db0cb121b29e3&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXODSYWU%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaxjA1FV3ri34HRxqu2FkVIO3UfSWuVXkl7jC4pBi87AiEA0B21T86cJKmK%2BIBGg%2FDDC3lvhnwOMb7al794rPWI6WQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtFejQii8ptI%2FMprCrcA1CbNM1x4QoomnsF0UdBxe7jc%2BDQAK%2FCPyavJWQ%2FFbcdsmYVMJdPASqY5EpNL2LdQzcBVVoTKj6akZ4yfrdS1Dti0NzzI9WEF%2BD6egLKjjcKaHZB5ubiZ9SFaJx2UT1c9DvRV2GQbZ9J%2B7MeJ3j7Jq8GP3qxn1kO6s2Epom8p%2B4Azx72%2Bcr%2BkeEny2LUMzdLrwR4lk%2Bd5Q6meR5g6n4DK2t7mnue4hLfDh1Bx5m7VhZ3be2I83dyIEy4HlAsjLJ618CGghTd%2BM6TYmPxZ8Sug0vxJSTIm7UjnHVQZRa8ccM5q1W8lgN%2F4uSKi48w1u%2BM4R9cDf7VLEtdoQ2OKs1DZCCUqIbG%2BpSRWchw%2BbZwYIlTTRI7STvu0uQiZtBHBgyijQAkI85a%2FIEDZldMpMzvk%2BP5It684YbRA1ioIclBlGv5Y3CUzRbjs1LfgI4lMgUEY2dv7VNP%2B0OFYREc0Z09DGU2Gmq2CrDO1sPw5VAPlRdlTwu0FrysJtvO8p8cA8%2BrBf3g7YI%2F4sIxYmo%2B2nrmbtHU93xj2acsn38Zj5Irwj3MaX2wUtitEKWrSzGyYzs03FsuWzEm5MbdCVGlO3uglsCmo2j0V0nDUbib9cGCvDbjJSRXoogc6KqqeelXMN%2Fd5MEGOqUBG2TTyXGAJc8Lw5qzqkttsqpQ%2B8BrBPuEgf9FGCwFlvY%2FyqYwdwwliQanjwLp1HfTx9xnSwqWnMm9RuKPPkW9us1gLHIDDlFryOc9fzRcvCZd7UGxeI69jvQCRya1g0G1GAoOGyieLazUx8PCEZMP9ME9CQN2VHBCmub7PubtgrGtpJaPL3HkbtkfdDdFglTPlky32YuRr20rB3D7%2B8fOaEJK7cr1&X-Amz-Signature=4cce66af433904e663a45ca476857f15fca534d75be0730b3397327e1a4a0438&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXODSYWU%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaxjA1FV3ri34HRxqu2FkVIO3UfSWuVXkl7jC4pBi87AiEA0B21T86cJKmK%2BIBGg%2FDDC3lvhnwOMb7al794rPWI6WQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtFejQii8ptI%2FMprCrcA1CbNM1x4QoomnsF0UdBxe7jc%2BDQAK%2FCPyavJWQ%2FFbcdsmYVMJdPASqY5EpNL2LdQzcBVVoTKj6akZ4yfrdS1Dti0NzzI9WEF%2BD6egLKjjcKaHZB5ubiZ9SFaJx2UT1c9DvRV2GQbZ9J%2B7MeJ3j7Jq8GP3qxn1kO6s2Epom8p%2B4Azx72%2Bcr%2BkeEny2LUMzdLrwR4lk%2Bd5Q6meR5g6n4DK2t7mnue4hLfDh1Bx5m7VhZ3be2I83dyIEy4HlAsjLJ618CGghTd%2BM6TYmPxZ8Sug0vxJSTIm7UjnHVQZRa8ccM5q1W8lgN%2F4uSKi48w1u%2BM4R9cDf7VLEtdoQ2OKs1DZCCUqIbG%2BpSRWchw%2BbZwYIlTTRI7STvu0uQiZtBHBgyijQAkI85a%2FIEDZldMpMzvk%2BP5It684YbRA1ioIclBlGv5Y3CUzRbjs1LfgI4lMgUEY2dv7VNP%2B0OFYREc0Z09DGU2Gmq2CrDO1sPw5VAPlRdlTwu0FrysJtvO8p8cA8%2BrBf3g7YI%2F4sIxYmo%2B2nrmbtHU93xj2acsn38Zj5Irwj3MaX2wUtitEKWrSzGyYzs03FsuWzEm5MbdCVGlO3uglsCmo2j0V0nDUbib9cGCvDbjJSRXoogc6KqqeelXMN%2Fd5MEGOqUBG2TTyXGAJc8Lw5qzqkttsqpQ%2B8BrBPuEgf9FGCwFlvY%2FyqYwdwwliQanjwLp1HfTx9xnSwqWnMm9RuKPPkW9us1gLHIDDlFryOc9fzRcvCZd7UGxeI69jvQCRya1g0G1GAoOGyieLazUx8PCEZMP9ME9CQN2VHBCmub7PubtgrGtpJaPL3HkbtkfdDdFglTPlky32YuRr20rB3D7%2B8fOaEJK7cr1&X-Amz-Signature=034c84597b8bad8e1cc32e60097efef7c5c38d46c17cc7865e44dd66846cff14&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
