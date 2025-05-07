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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNTEN5ZB%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGrh7MJ4D45TwZvN4pRLwFmSzZd7SlEzmU5znaEq2P6pAiBHsIN72LBllOQU86TY3iD2syspHu2fOzOpL2hPUTaQESr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMXPdoxtcDGm5KkNngKtwD0oq4a5iLv0U8O1eXUuium25fonuziBzYcW%2Fh74wnrviETe8kgh9Ef0ES%2FER6T3jNPa9z2ofuqkjtWy8DFfb0vVzKHqdrPO3TjMeY6mYXf8X1i7A1gggGfI2bnT6MGdafjOPWJ%2ByK9LX6Fg1S99P0ph2n5Q78DyYuODtHfiiFpHAkxYJSmFjDWyenN4vRDyA96wBWiExKbLNBDTRkI5Ea%2BF7TsmTxWtFqd%2FKHUI00pz9Rz%2BIsCzXsdb2cgjRgTkApVGf1CjHWy5W%2F%2BR5tSllixh1JyxnaqNSuRk7JWWnWDR%2BjXYpnWeDtfV19yHn1Q5um4E85oqFb3LjoYWH4zxULvEK1X1sKrDLdqGld%2BQ0lNgEyEFhdn9ByMeefBWD3xF3hmOjNOWxNvrInbgmvb7q9w4sB3W6Q8yHY4S7zJzjH6LpbVzF3EAawBy8Z6d4dlZIkDcqD2OJVAXe3g2k%2BWQ0nTqbtTbN2pPzctWgBDUf4UyKFUPegRpKNrjaxYmW43gfjmv1db2xxUHozfXB7ukW8delqLTSIH7w8ojXj9IaCMjQ5hor6vkkbbR1s8D8BnO2aef%2BVqe3uRFxJ1b4H6G4wfCiC5zODPip60QumFfNxEr8NWn%2B%2BMiq5dnM5CoEw67HswAY6pgHpih%2B1cHs82%2B%2FMaRh97%2B8nU8K4GWwbtyU0ox5sB5t9hI2hoiQTnh2jBLFHs0N4EcNs1R2Lhpg1IR3KgjmUaKcI%2FpESeN2dAo6qHlbJxNWH60BpeU0ZdPretnPeZ45Tn4uuuWQyTH9Af3EfHPw7WUJzK3%2BOfT0HG1UV3VNpQOTldxLGBWBBvY8e%2FOfP2YUmWXImn1VexzBBEpa2ZL7rUNmn0eEla4mW&X-Amz-Signature=f5daa1a1589ba52918907b4d6e14b071f5c4b1f775f34cc6eaff845644ed4f1b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNTEN5ZB%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGrh7MJ4D45TwZvN4pRLwFmSzZd7SlEzmU5znaEq2P6pAiBHsIN72LBllOQU86TY3iD2syspHu2fOzOpL2hPUTaQESr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMXPdoxtcDGm5KkNngKtwD0oq4a5iLv0U8O1eXUuium25fonuziBzYcW%2Fh74wnrviETe8kgh9Ef0ES%2FER6T3jNPa9z2ofuqkjtWy8DFfb0vVzKHqdrPO3TjMeY6mYXf8X1i7A1gggGfI2bnT6MGdafjOPWJ%2ByK9LX6Fg1S99P0ph2n5Q78DyYuODtHfiiFpHAkxYJSmFjDWyenN4vRDyA96wBWiExKbLNBDTRkI5Ea%2BF7TsmTxWtFqd%2FKHUI00pz9Rz%2BIsCzXsdb2cgjRgTkApVGf1CjHWy5W%2F%2BR5tSllixh1JyxnaqNSuRk7JWWnWDR%2BjXYpnWeDtfV19yHn1Q5um4E85oqFb3LjoYWH4zxULvEK1X1sKrDLdqGld%2BQ0lNgEyEFhdn9ByMeefBWD3xF3hmOjNOWxNvrInbgmvb7q9w4sB3W6Q8yHY4S7zJzjH6LpbVzF3EAawBy8Z6d4dlZIkDcqD2OJVAXe3g2k%2BWQ0nTqbtTbN2pPzctWgBDUf4UyKFUPegRpKNrjaxYmW43gfjmv1db2xxUHozfXB7ukW8delqLTSIH7w8ojXj9IaCMjQ5hor6vkkbbR1s8D8BnO2aef%2BVqe3uRFxJ1b4H6G4wfCiC5zODPip60QumFfNxEr8NWn%2B%2BMiq5dnM5CoEw67HswAY6pgHpih%2B1cHs82%2B%2FMaRh97%2B8nU8K4GWwbtyU0ox5sB5t9hI2hoiQTnh2jBLFHs0N4EcNs1R2Lhpg1IR3KgjmUaKcI%2FpESeN2dAo6qHlbJxNWH60BpeU0ZdPretnPeZ45Tn4uuuWQyTH9Af3EfHPw7WUJzK3%2BOfT0HG1UV3VNpQOTldxLGBWBBvY8e%2FOfP2YUmWXImn1VexzBBEpa2ZL7rUNmn0eEla4mW&X-Amz-Signature=e0ed4c23d9b9d00c9c874843910ab1e2fdcd2e5ea4b6c72adf0a879323338d81&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNTEN5ZB%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGrh7MJ4D45TwZvN4pRLwFmSzZd7SlEzmU5znaEq2P6pAiBHsIN72LBllOQU86TY3iD2syspHu2fOzOpL2hPUTaQESr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMXPdoxtcDGm5KkNngKtwD0oq4a5iLv0U8O1eXUuium25fonuziBzYcW%2Fh74wnrviETe8kgh9Ef0ES%2FER6T3jNPa9z2ofuqkjtWy8DFfb0vVzKHqdrPO3TjMeY6mYXf8X1i7A1gggGfI2bnT6MGdafjOPWJ%2ByK9LX6Fg1S99P0ph2n5Q78DyYuODtHfiiFpHAkxYJSmFjDWyenN4vRDyA96wBWiExKbLNBDTRkI5Ea%2BF7TsmTxWtFqd%2FKHUI00pz9Rz%2BIsCzXsdb2cgjRgTkApVGf1CjHWy5W%2F%2BR5tSllixh1JyxnaqNSuRk7JWWnWDR%2BjXYpnWeDtfV19yHn1Q5um4E85oqFb3LjoYWH4zxULvEK1X1sKrDLdqGld%2BQ0lNgEyEFhdn9ByMeefBWD3xF3hmOjNOWxNvrInbgmvb7q9w4sB3W6Q8yHY4S7zJzjH6LpbVzF3EAawBy8Z6d4dlZIkDcqD2OJVAXe3g2k%2BWQ0nTqbtTbN2pPzctWgBDUf4UyKFUPegRpKNrjaxYmW43gfjmv1db2xxUHozfXB7ukW8delqLTSIH7w8ojXj9IaCMjQ5hor6vkkbbR1s8D8BnO2aef%2BVqe3uRFxJ1b4H6G4wfCiC5zODPip60QumFfNxEr8NWn%2B%2BMiq5dnM5CoEw67HswAY6pgHpih%2B1cHs82%2B%2FMaRh97%2B8nU8K4GWwbtyU0ox5sB5t9hI2hoiQTnh2jBLFHs0N4EcNs1R2Lhpg1IR3KgjmUaKcI%2FpESeN2dAo6qHlbJxNWH60BpeU0ZdPretnPeZ45Tn4uuuWQyTH9Af3EfHPw7WUJzK3%2BOfT0HG1UV3VNpQOTldxLGBWBBvY8e%2FOfP2YUmWXImn1VexzBBEpa2ZL7rUNmn0eEla4mW&X-Amz-Signature=309cee1114e4af3cc96c7ad2c8f1f72798e66d8f63c5e3717da4a2ff68627fb4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNTEN5ZB%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGrh7MJ4D45TwZvN4pRLwFmSzZd7SlEzmU5znaEq2P6pAiBHsIN72LBllOQU86TY3iD2syspHu2fOzOpL2hPUTaQESr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMXPdoxtcDGm5KkNngKtwD0oq4a5iLv0U8O1eXUuium25fonuziBzYcW%2Fh74wnrviETe8kgh9Ef0ES%2FER6T3jNPa9z2ofuqkjtWy8DFfb0vVzKHqdrPO3TjMeY6mYXf8X1i7A1gggGfI2bnT6MGdafjOPWJ%2ByK9LX6Fg1S99P0ph2n5Q78DyYuODtHfiiFpHAkxYJSmFjDWyenN4vRDyA96wBWiExKbLNBDTRkI5Ea%2BF7TsmTxWtFqd%2FKHUI00pz9Rz%2BIsCzXsdb2cgjRgTkApVGf1CjHWy5W%2F%2BR5tSllixh1JyxnaqNSuRk7JWWnWDR%2BjXYpnWeDtfV19yHn1Q5um4E85oqFb3LjoYWH4zxULvEK1X1sKrDLdqGld%2BQ0lNgEyEFhdn9ByMeefBWD3xF3hmOjNOWxNvrInbgmvb7q9w4sB3W6Q8yHY4S7zJzjH6LpbVzF3EAawBy8Z6d4dlZIkDcqD2OJVAXe3g2k%2BWQ0nTqbtTbN2pPzctWgBDUf4UyKFUPegRpKNrjaxYmW43gfjmv1db2xxUHozfXB7ukW8delqLTSIH7w8ojXj9IaCMjQ5hor6vkkbbR1s8D8BnO2aef%2BVqe3uRFxJ1b4H6G4wfCiC5zODPip60QumFfNxEr8NWn%2B%2BMiq5dnM5CoEw67HswAY6pgHpih%2B1cHs82%2B%2FMaRh97%2B8nU8K4GWwbtyU0ox5sB5t9hI2hoiQTnh2jBLFHs0N4EcNs1R2Lhpg1IR3KgjmUaKcI%2FpESeN2dAo6qHlbJxNWH60BpeU0ZdPretnPeZ45Tn4uuuWQyTH9Af3EfHPw7WUJzK3%2BOfT0HG1UV3VNpQOTldxLGBWBBvY8e%2FOfP2YUmWXImn1VexzBBEpa2ZL7rUNmn0eEla4mW&X-Amz-Signature=676d2df56681b99ad7851f08ebeada9ccfe771a6a146ac87a6af05183f4f6068&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNTEN5ZB%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGrh7MJ4D45TwZvN4pRLwFmSzZd7SlEzmU5znaEq2P6pAiBHsIN72LBllOQU86TY3iD2syspHu2fOzOpL2hPUTaQESr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMXPdoxtcDGm5KkNngKtwD0oq4a5iLv0U8O1eXUuium25fonuziBzYcW%2Fh74wnrviETe8kgh9Ef0ES%2FER6T3jNPa9z2ofuqkjtWy8DFfb0vVzKHqdrPO3TjMeY6mYXf8X1i7A1gggGfI2bnT6MGdafjOPWJ%2ByK9LX6Fg1S99P0ph2n5Q78DyYuODtHfiiFpHAkxYJSmFjDWyenN4vRDyA96wBWiExKbLNBDTRkI5Ea%2BF7TsmTxWtFqd%2FKHUI00pz9Rz%2BIsCzXsdb2cgjRgTkApVGf1CjHWy5W%2F%2BR5tSllixh1JyxnaqNSuRk7JWWnWDR%2BjXYpnWeDtfV19yHn1Q5um4E85oqFb3LjoYWH4zxULvEK1X1sKrDLdqGld%2BQ0lNgEyEFhdn9ByMeefBWD3xF3hmOjNOWxNvrInbgmvb7q9w4sB3W6Q8yHY4S7zJzjH6LpbVzF3EAawBy8Z6d4dlZIkDcqD2OJVAXe3g2k%2BWQ0nTqbtTbN2pPzctWgBDUf4UyKFUPegRpKNrjaxYmW43gfjmv1db2xxUHozfXB7ukW8delqLTSIH7w8ojXj9IaCMjQ5hor6vkkbbR1s8D8BnO2aef%2BVqe3uRFxJ1b4H6G4wfCiC5zODPip60QumFfNxEr8NWn%2B%2BMiq5dnM5CoEw67HswAY6pgHpih%2B1cHs82%2B%2FMaRh97%2B8nU8K4GWwbtyU0ox5sB5t9hI2hoiQTnh2jBLFHs0N4EcNs1R2Lhpg1IR3KgjmUaKcI%2FpESeN2dAo6qHlbJxNWH60BpeU0ZdPretnPeZ45Tn4uuuWQyTH9Af3EfHPw7WUJzK3%2BOfT0HG1UV3VNpQOTldxLGBWBBvY8e%2FOfP2YUmWXImn1VexzBBEpa2ZL7rUNmn0eEla4mW&X-Amz-Signature=5b52003ed4787fd208e8bbdcfb1644ea43754c3381b55613e95ed240fa0a0a10&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
