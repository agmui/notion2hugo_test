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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USWR5KME%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhb7U1gqeDeaHScY0vkK1l9lYdpC%2FEp2MLoU1FWmh%2FhAiAXo3Xipgq94g73jdeezIuFDkYBy2W3fY26kAsCmHLn8SqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPOLRBZfnjHk%2FwlLpKtwDTP20IbTS3ZxUORJ24zqYY%2BAllPH3ry1mcrR%2B6HyxyTzOGjCOm3OHv%2BKWQ%2BFPHuV6wNsyTVHmo%2BbfKoeh9C%2FHV%2B5V8ifmiHND0%2BpPIjcyyB%2FiJwIHrCnGC3iOesugknFyfoM2bUdKoa9H5w9TUUlPTBq3%2BwU6VKeHk2%2BfjRyXjqvPBFzW4IFzwYcskB2Ydv8drUUiQo7JPChuvRmFuzQEkQYUKqkBi6PvX4llVOFm5pDUnAvXLlj3bD0IICyVSZ7fp%2ByhGAqQpPmpCQIXJMj%2BYaaF2g3UHTV1LalAnYu4aEscQTcDuIdhbt1YJu%2FG2vPi0W4JbRrk7Vo5KJCpbyN2nt9uWAeGIz%2FELT0ssX2bGEk7%2B5oQgPF6cixoLUnnIPRWuSLPCGEaax%2BKImJ%2B3UemJEcTInfoFOA1279zA5A3Az7QkBHTDMtViC0JP%2FkgCK%2FjwNGqbtLUhN86Lv0lIBn8IJl74QXd7n%2BTsO%2FCGM%2Fjjkq8gFzhJqOJmdDPEIVcI%2F5b75i4JhpNIzcdL%2FwnaimYiZnw9fDfKSFUsrS87DHDxzps8sSEdlsYZXwyZbOhOFck7LNpx6Yi4nlULjWOiqHNaDy1sYLLohVhwBdm%2FAdXeAl29ggxwdb8nS194Dsw8qLgvQY6pgFaCbiFFZz8DDLyfhECXyY11s%2FUWHlZFH1UO4o3fnynReNjLlIbxMLkW1CubtikKvchU7hDvJRdq1oDw%2BmzKyOR%2ByiVHsrUCCKrkXfG6drys4cHqih27QS9P1mjXfenhFXr06xFUqLpOVCO1lmCG4WfLahR1DsZAlkQBvLcFBEAK4X9l0w2BxdQVOgDBaaf5UXml%2BHPJ77fLA5z8TJqLvFkoacx634y&X-Amz-Signature=d0591be4b19dfbc7efa9c6f5d2080163d276f281ddaafed6fd3d1da9d7706c13&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USWR5KME%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhb7U1gqeDeaHScY0vkK1l9lYdpC%2FEp2MLoU1FWmh%2FhAiAXo3Xipgq94g73jdeezIuFDkYBy2W3fY26kAsCmHLn8SqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPOLRBZfnjHk%2FwlLpKtwDTP20IbTS3ZxUORJ24zqYY%2BAllPH3ry1mcrR%2B6HyxyTzOGjCOm3OHv%2BKWQ%2BFPHuV6wNsyTVHmo%2BbfKoeh9C%2FHV%2B5V8ifmiHND0%2BpPIjcyyB%2FiJwIHrCnGC3iOesugknFyfoM2bUdKoa9H5w9TUUlPTBq3%2BwU6VKeHk2%2BfjRyXjqvPBFzW4IFzwYcskB2Ydv8drUUiQo7JPChuvRmFuzQEkQYUKqkBi6PvX4llVOFm5pDUnAvXLlj3bD0IICyVSZ7fp%2ByhGAqQpPmpCQIXJMj%2BYaaF2g3UHTV1LalAnYu4aEscQTcDuIdhbt1YJu%2FG2vPi0W4JbRrk7Vo5KJCpbyN2nt9uWAeGIz%2FELT0ssX2bGEk7%2B5oQgPF6cixoLUnnIPRWuSLPCGEaax%2BKImJ%2B3UemJEcTInfoFOA1279zA5A3Az7QkBHTDMtViC0JP%2FkgCK%2FjwNGqbtLUhN86Lv0lIBn8IJl74QXd7n%2BTsO%2FCGM%2Fjjkq8gFzhJqOJmdDPEIVcI%2F5b75i4JhpNIzcdL%2FwnaimYiZnw9fDfKSFUsrS87DHDxzps8sSEdlsYZXwyZbOhOFck7LNpx6Yi4nlULjWOiqHNaDy1sYLLohVhwBdm%2FAdXeAl29ggxwdb8nS194Dsw8qLgvQY6pgFaCbiFFZz8DDLyfhECXyY11s%2FUWHlZFH1UO4o3fnynReNjLlIbxMLkW1CubtikKvchU7hDvJRdq1oDw%2BmzKyOR%2ByiVHsrUCCKrkXfG6drys4cHqih27QS9P1mjXfenhFXr06xFUqLpOVCO1lmCG4WfLahR1DsZAlkQBvLcFBEAK4X9l0w2BxdQVOgDBaaf5UXml%2BHPJ77fLA5z8TJqLvFkoacx634y&X-Amz-Signature=a5ab85d2c938cfb7429ef3a55fcdf7fe108463289f7ab97d9e1cc7490c411083&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USWR5KME%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhb7U1gqeDeaHScY0vkK1l9lYdpC%2FEp2MLoU1FWmh%2FhAiAXo3Xipgq94g73jdeezIuFDkYBy2W3fY26kAsCmHLn8SqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPOLRBZfnjHk%2FwlLpKtwDTP20IbTS3ZxUORJ24zqYY%2BAllPH3ry1mcrR%2B6HyxyTzOGjCOm3OHv%2BKWQ%2BFPHuV6wNsyTVHmo%2BbfKoeh9C%2FHV%2B5V8ifmiHND0%2BpPIjcyyB%2FiJwIHrCnGC3iOesugknFyfoM2bUdKoa9H5w9TUUlPTBq3%2BwU6VKeHk2%2BfjRyXjqvPBFzW4IFzwYcskB2Ydv8drUUiQo7JPChuvRmFuzQEkQYUKqkBi6PvX4llVOFm5pDUnAvXLlj3bD0IICyVSZ7fp%2ByhGAqQpPmpCQIXJMj%2BYaaF2g3UHTV1LalAnYu4aEscQTcDuIdhbt1YJu%2FG2vPi0W4JbRrk7Vo5KJCpbyN2nt9uWAeGIz%2FELT0ssX2bGEk7%2B5oQgPF6cixoLUnnIPRWuSLPCGEaax%2BKImJ%2B3UemJEcTInfoFOA1279zA5A3Az7QkBHTDMtViC0JP%2FkgCK%2FjwNGqbtLUhN86Lv0lIBn8IJl74QXd7n%2BTsO%2FCGM%2Fjjkq8gFzhJqOJmdDPEIVcI%2F5b75i4JhpNIzcdL%2FwnaimYiZnw9fDfKSFUsrS87DHDxzps8sSEdlsYZXwyZbOhOFck7LNpx6Yi4nlULjWOiqHNaDy1sYLLohVhwBdm%2FAdXeAl29ggxwdb8nS194Dsw8qLgvQY6pgFaCbiFFZz8DDLyfhECXyY11s%2FUWHlZFH1UO4o3fnynReNjLlIbxMLkW1CubtikKvchU7hDvJRdq1oDw%2BmzKyOR%2ByiVHsrUCCKrkXfG6drys4cHqih27QS9P1mjXfenhFXr06xFUqLpOVCO1lmCG4WfLahR1DsZAlkQBvLcFBEAK4X9l0w2BxdQVOgDBaaf5UXml%2BHPJ77fLA5z8TJqLvFkoacx634y&X-Amz-Signature=310433f62250e15adb60591f9b6f70db773dde116016b8c85c47b86fb639b9ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USWR5KME%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhb7U1gqeDeaHScY0vkK1l9lYdpC%2FEp2MLoU1FWmh%2FhAiAXo3Xipgq94g73jdeezIuFDkYBy2W3fY26kAsCmHLn8SqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPOLRBZfnjHk%2FwlLpKtwDTP20IbTS3ZxUORJ24zqYY%2BAllPH3ry1mcrR%2B6HyxyTzOGjCOm3OHv%2BKWQ%2BFPHuV6wNsyTVHmo%2BbfKoeh9C%2FHV%2B5V8ifmiHND0%2BpPIjcyyB%2FiJwIHrCnGC3iOesugknFyfoM2bUdKoa9H5w9TUUlPTBq3%2BwU6VKeHk2%2BfjRyXjqvPBFzW4IFzwYcskB2Ydv8drUUiQo7JPChuvRmFuzQEkQYUKqkBi6PvX4llVOFm5pDUnAvXLlj3bD0IICyVSZ7fp%2ByhGAqQpPmpCQIXJMj%2BYaaF2g3UHTV1LalAnYu4aEscQTcDuIdhbt1YJu%2FG2vPi0W4JbRrk7Vo5KJCpbyN2nt9uWAeGIz%2FELT0ssX2bGEk7%2B5oQgPF6cixoLUnnIPRWuSLPCGEaax%2BKImJ%2B3UemJEcTInfoFOA1279zA5A3Az7QkBHTDMtViC0JP%2FkgCK%2FjwNGqbtLUhN86Lv0lIBn8IJl74QXd7n%2BTsO%2FCGM%2Fjjkq8gFzhJqOJmdDPEIVcI%2F5b75i4JhpNIzcdL%2FwnaimYiZnw9fDfKSFUsrS87DHDxzps8sSEdlsYZXwyZbOhOFck7LNpx6Yi4nlULjWOiqHNaDy1sYLLohVhwBdm%2FAdXeAl29ggxwdb8nS194Dsw8qLgvQY6pgFaCbiFFZz8DDLyfhECXyY11s%2FUWHlZFH1UO4o3fnynReNjLlIbxMLkW1CubtikKvchU7hDvJRdq1oDw%2BmzKyOR%2ByiVHsrUCCKrkXfG6drys4cHqih27QS9P1mjXfenhFXr06xFUqLpOVCO1lmCG4WfLahR1DsZAlkQBvLcFBEAK4X9l0w2BxdQVOgDBaaf5UXml%2BHPJ77fLA5z8TJqLvFkoacx634y&X-Amz-Signature=5493c132204e40216a21a857101bad62ceb144d71fe0465e45a9abb98e847043&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USWR5KME%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhb7U1gqeDeaHScY0vkK1l9lYdpC%2FEp2MLoU1FWmh%2FhAiAXo3Xipgq94g73jdeezIuFDkYBy2W3fY26kAsCmHLn8SqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPOLRBZfnjHk%2FwlLpKtwDTP20IbTS3ZxUORJ24zqYY%2BAllPH3ry1mcrR%2B6HyxyTzOGjCOm3OHv%2BKWQ%2BFPHuV6wNsyTVHmo%2BbfKoeh9C%2FHV%2B5V8ifmiHND0%2BpPIjcyyB%2FiJwIHrCnGC3iOesugknFyfoM2bUdKoa9H5w9TUUlPTBq3%2BwU6VKeHk2%2BfjRyXjqvPBFzW4IFzwYcskB2Ydv8drUUiQo7JPChuvRmFuzQEkQYUKqkBi6PvX4llVOFm5pDUnAvXLlj3bD0IICyVSZ7fp%2ByhGAqQpPmpCQIXJMj%2BYaaF2g3UHTV1LalAnYu4aEscQTcDuIdhbt1YJu%2FG2vPi0W4JbRrk7Vo5KJCpbyN2nt9uWAeGIz%2FELT0ssX2bGEk7%2B5oQgPF6cixoLUnnIPRWuSLPCGEaax%2BKImJ%2B3UemJEcTInfoFOA1279zA5A3Az7QkBHTDMtViC0JP%2FkgCK%2FjwNGqbtLUhN86Lv0lIBn8IJl74QXd7n%2BTsO%2FCGM%2Fjjkq8gFzhJqOJmdDPEIVcI%2F5b75i4JhpNIzcdL%2FwnaimYiZnw9fDfKSFUsrS87DHDxzps8sSEdlsYZXwyZbOhOFck7LNpx6Yi4nlULjWOiqHNaDy1sYLLohVhwBdm%2FAdXeAl29ggxwdb8nS194Dsw8qLgvQY6pgFaCbiFFZz8DDLyfhECXyY11s%2FUWHlZFH1UO4o3fnynReNjLlIbxMLkW1CubtikKvchU7hDvJRdq1oDw%2BmzKyOR%2ByiVHsrUCCKrkXfG6drys4cHqih27QS9P1mjXfenhFXr06xFUqLpOVCO1lmCG4WfLahR1DsZAlkQBvLcFBEAK4X9l0w2BxdQVOgDBaaf5UXml%2BHPJ77fLA5z8TJqLvFkoacx634y&X-Amz-Signature=aca33b1a539666df53e031d942aa262431946678e0134869fcb86b5a3d3effd1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
