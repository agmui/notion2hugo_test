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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XI7FPOC%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIH%2FkVSlSHj4X2UTBgnGA%2FckEL9hIu%2B663SwmDggEHr54AiBCgCvpy%2F4yQsa1HGKqwbYtLENaBOD%2BQRfBSJR%2BTVruwCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSigyduuxKrsHuJ0LKtwDehpx8uFDv9Vh5WPfcEVTSyx1%2BQR5PdKhwh4HxxqDIj1zbktgyfFzmYeESdX0XiZGkcD8FiMQE3mELFW28nwGM2EYQWyQ1G7TTd9EdPQ%2BszkdtWIkItkiWD5lQYR3VkV6Us%2BYN%2FVP0G4611k9qXXCA5syq06ONwdGSdp9NEeUuHNLaz0c46bjlvMxPQRYzoQunvC%2B3WZ1bVSXEvgr8XFdyqjqQcYj1JcCHD3saDdPNiIoc8QUFzxShpkIsjWmRlAu%2F1GIfEvU1mQxfDeOdRz55%2B0jEIh%2FUv4hCOeY5%2Bs9Al%2Bb78iTl5NWJcZ3%2BkVB%2BICGD0dQRa5NANYxsNKNvXURDA%2BaE8s%2FYUI1CzMIC8oFMJ7Ljl3V2BvnKVeugb6AnaE2OayaabcPw1v8CUX0aPuredpxHjuo%2FgG84RfPn1RpM5Ybs8gwxmW8ROCGnT2HNo2a%2BUbvlJtgrFQW43927dXo92SN0Tu69MUB0pFEKP1wok7s4C64PngZwg90%2BNi9cCmWDNE3zJ3cjM%2FKmgsq0Y57lk32dwVP4INOZkZ2Q4pNCHh7nWCAXMGWC6BfAMqNNwh4aY67NMbTZ6ABT1sNeo0iPOugEMBLe3WJ2ChW8s7LNDqE7CxuvUKQO9zCoy4wtISvwgY6pgHMSaCVEhezFXysCCEV7mJYVwyIiwZ4p8nXTqp9SJdQNytd0KFQuVQeG5pzBLYXNQUlGiOPyzWJg%2BOdWHWPau0TfEjXjwJ5Uq60zda7Nka9BxifXwEtSr8PQzh4XjjpdjvvCLp3dx%2BP68zefxrjaZ6HywdFT0Eb%2BYjG22QUZ8ZlEBN1sVpm4Sgiw2Y7vZio9OBnUj8ZFs%2Fq63byei4%2FR801dxNRX7tx&X-Amz-Signature=cc15a6adb786cce120e75b7219e01f198d2b4d7ef9fba072395df8fe404e56ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XI7FPOC%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIH%2FkVSlSHj4X2UTBgnGA%2FckEL9hIu%2B663SwmDggEHr54AiBCgCvpy%2F4yQsa1HGKqwbYtLENaBOD%2BQRfBSJR%2BTVruwCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSigyduuxKrsHuJ0LKtwDehpx8uFDv9Vh5WPfcEVTSyx1%2BQR5PdKhwh4HxxqDIj1zbktgyfFzmYeESdX0XiZGkcD8FiMQE3mELFW28nwGM2EYQWyQ1G7TTd9EdPQ%2BszkdtWIkItkiWD5lQYR3VkV6Us%2BYN%2FVP0G4611k9qXXCA5syq06ONwdGSdp9NEeUuHNLaz0c46bjlvMxPQRYzoQunvC%2B3WZ1bVSXEvgr8XFdyqjqQcYj1JcCHD3saDdPNiIoc8QUFzxShpkIsjWmRlAu%2F1GIfEvU1mQxfDeOdRz55%2B0jEIh%2FUv4hCOeY5%2Bs9Al%2Bb78iTl5NWJcZ3%2BkVB%2BICGD0dQRa5NANYxsNKNvXURDA%2BaE8s%2FYUI1CzMIC8oFMJ7Ljl3V2BvnKVeugb6AnaE2OayaabcPw1v8CUX0aPuredpxHjuo%2FgG84RfPn1RpM5Ybs8gwxmW8ROCGnT2HNo2a%2BUbvlJtgrFQW43927dXo92SN0Tu69MUB0pFEKP1wok7s4C64PngZwg90%2BNi9cCmWDNE3zJ3cjM%2FKmgsq0Y57lk32dwVP4INOZkZ2Q4pNCHh7nWCAXMGWC6BfAMqNNwh4aY67NMbTZ6ABT1sNeo0iPOugEMBLe3WJ2ChW8s7LNDqE7CxuvUKQO9zCoy4wtISvwgY6pgHMSaCVEhezFXysCCEV7mJYVwyIiwZ4p8nXTqp9SJdQNytd0KFQuVQeG5pzBLYXNQUlGiOPyzWJg%2BOdWHWPau0TfEjXjwJ5Uq60zda7Nka9BxifXwEtSr8PQzh4XjjpdjvvCLp3dx%2BP68zefxrjaZ6HywdFT0Eb%2BYjG22QUZ8ZlEBN1sVpm4Sgiw2Y7vZio9OBnUj8ZFs%2Fq63byei4%2FR801dxNRX7tx&X-Amz-Signature=05403e93fe816f9bdad74f45a8a5a2e88c303f78cc19f53823e61d5b17ac52c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XI7FPOC%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIH%2FkVSlSHj4X2UTBgnGA%2FckEL9hIu%2B663SwmDggEHr54AiBCgCvpy%2F4yQsa1HGKqwbYtLENaBOD%2BQRfBSJR%2BTVruwCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSigyduuxKrsHuJ0LKtwDehpx8uFDv9Vh5WPfcEVTSyx1%2BQR5PdKhwh4HxxqDIj1zbktgyfFzmYeESdX0XiZGkcD8FiMQE3mELFW28nwGM2EYQWyQ1G7TTd9EdPQ%2BszkdtWIkItkiWD5lQYR3VkV6Us%2BYN%2FVP0G4611k9qXXCA5syq06ONwdGSdp9NEeUuHNLaz0c46bjlvMxPQRYzoQunvC%2B3WZ1bVSXEvgr8XFdyqjqQcYj1JcCHD3saDdPNiIoc8QUFzxShpkIsjWmRlAu%2F1GIfEvU1mQxfDeOdRz55%2B0jEIh%2FUv4hCOeY5%2Bs9Al%2Bb78iTl5NWJcZ3%2BkVB%2BICGD0dQRa5NANYxsNKNvXURDA%2BaE8s%2FYUI1CzMIC8oFMJ7Ljl3V2BvnKVeugb6AnaE2OayaabcPw1v8CUX0aPuredpxHjuo%2FgG84RfPn1RpM5Ybs8gwxmW8ROCGnT2HNo2a%2BUbvlJtgrFQW43927dXo92SN0Tu69MUB0pFEKP1wok7s4C64PngZwg90%2BNi9cCmWDNE3zJ3cjM%2FKmgsq0Y57lk32dwVP4INOZkZ2Q4pNCHh7nWCAXMGWC6BfAMqNNwh4aY67NMbTZ6ABT1sNeo0iPOugEMBLe3WJ2ChW8s7LNDqE7CxuvUKQO9zCoy4wtISvwgY6pgHMSaCVEhezFXysCCEV7mJYVwyIiwZ4p8nXTqp9SJdQNytd0KFQuVQeG5pzBLYXNQUlGiOPyzWJg%2BOdWHWPau0TfEjXjwJ5Uq60zda7Nka9BxifXwEtSr8PQzh4XjjpdjvvCLp3dx%2BP68zefxrjaZ6HywdFT0Eb%2BYjG22QUZ8ZlEBN1sVpm4Sgiw2Y7vZio9OBnUj8ZFs%2Fq63byei4%2FR801dxNRX7tx&X-Amz-Signature=94a287ab5b800f99907103dedf650ba4c1be878ad2e7e5e3e568ac9ecf753afd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XI7FPOC%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIH%2FkVSlSHj4X2UTBgnGA%2FckEL9hIu%2B663SwmDggEHr54AiBCgCvpy%2F4yQsa1HGKqwbYtLENaBOD%2BQRfBSJR%2BTVruwCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSigyduuxKrsHuJ0LKtwDehpx8uFDv9Vh5WPfcEVTSyx1%2BQR5PdKhwh4HxxqDIj1zbktgyfFzmYeESdX0XiZGkcD8FiMQE3mELFW28nwGM2EYQWyQ1G7TTd9EdPQ%2BszkdtWIkItkiWD5lQYR3VkV6Us%2BYN%2FVP0G4611k9qXXCA5syq06ONwdGSdp9NEeUuHNLaz0c46bjlvMxPQRYzoQunvC%2B3WZ1bVSXEvgr8XFdyqjqQcYj1JcCHD3saDdPNiIoc8QUFzxShpkIsjWmRlAu%2F1GIfEvU1mQxfDeOdRz55%2B0jEIh%2FUv4hCOeY5%2Bs9Al%2Bb78iTl5NWJcZ3%2BkVB%2BICGD0dQRa5NANYxsNKNvXURDA%2BaE8s%2FYUI1CzMIC8oFMJ7Ljl3V2BvnKVeugb6AnaE2OayaabcPw1v8CUX0aPuredpxHjuo%2FgG84RfPn1RpM5Ybs8gwxmW8ROCGnT2HNo2a%2BUbvlJtgrFQW43927dXo92SN0Tu69MUB0pFEKP1wok7s4C64PngZwg90%2BNi9cCmWDNE3zJ3cjM%2FKmgsq0Y57lk32dwVP4INOZkZ2Q4pNCHh7nWCAXMGWC6BfAMqNNwh4aY67NMbTZ6ABT1sNeo0iPOugEMBLe3WJ2ChW8s7LNDqE7CxuvUKQO9zCoy4wtISvwgY6pgHMSaCVEhezFXysCCEV7mJYVwyIiwZ4p8nXTqp9SJdQNytd0KFQuVQeG5pzBLYXNQUlGiOPyzWJg%2BOdWHWPau0TfEjXjwJ5Uq60zda7Nka9BxifXwEtSr8PQzh4XjjpdjvvCLp3dx%2BP68zefxrjaZ6HywdFT0Eb%2BYjG22QUZ8ZlEBN1sVpm4Sgiw2Y7vZio9OBnUj8ZFs%2Fq63byei4%2FR801dxNRX7tx&X-Amz-Signature=0daf979e93ea422b777c3fcfc6598650dd1f41d5bbee9f2bb27416f654a0da55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XI7FPOC%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIH%2FkVSlSHj4X2UTBgnGA%2FckEL9hIu%2B663SwmDggEHr54AiBCgCvpy%2F4yQsa1HGKqwbYtLENaBOD%2BQRfBSJR%2BTVruwCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSigyduuxKrsHuJ0LKtwDehpx8uFDv9Vh5WPfcEVTSyx1%2BQR5PdKhwh4HxxqDIj1zbktgyfFzmYeESdX0XiZGkcD8FiMQE3mELFW28nwGM2EYQWyQ1G7TTd9EdPQ%2BszkdtWIkItkiWD5lQYR3VkV6Us%2BYN%2FVP0G4611k9qXXCA5syq06ONwdGSdp9NEeUuHNLaz0c46bjlvMxPQRYzoQunvC%2B3WZ1bVSXEvgr8XFdyqjqQcYj1JcCHD3saDdPNiIoc8QUFzxShpkIsjWmRlAu%2F1GIfEvU1mQxfDeOdRz55%2B0jEIh%2FUv4hCOeY5%2Bs9Al%2Bb78iTl5NWJcZ3%2BkVB%2BICGD0dQRa5NANYxsNKNvXURDA%2BaE8s%2FYUI1CzMIC8oFMJ7Ljl3V2BvnKVeugb6AnaE2OayaabcPw1v8CUX0aPuredpxHjuo%2FgG84RfPn1RpM5Ybs8gwxmW8ROCGnT2HNo2a%2BUbvlJtgrFQW43927dXo92SN0Tu69MUB0pFEKP1wok7s4C64PngZwg90%2BNi9cCmWDNE3zJ3cjM%2FKmgsq0Y57lk32dwVP4INOZkZ2Q4pNCHh7nWCAXMGWC6BfAMqNNwh4aY67NMbTZ6ABT1sNeo0iPOugEMBLe3WJ2ChW8s7LNDqE7CxuvUKQO9zCoy4wtISvwgY6pgHMSaCVEhezFXysCCEV7mJYVwyIiwZ4p8nXTqp9SJdQNytd0KFQuVQeG5pzBLYXNQUlGiOPyzWJg%2BOdWHWPau0TfEjXjwJ5Uq60zda7Nka9BxifXwEtSr8PQzh4XjjpdjvvCLp3dx%2BP68zefxrjaZ6HywdFT0Eb%2BYjG22QUZ8ZlEBN1sVpm4Sgiw2Y7vZio9OBnUj8ZFs%2Fq63byei4%2FR801dxNRX7tx&X-Amz-Signature=695b671849e8c3f991e857363e7596ca9ee5417fbdbc72b429b24d81a5e56f48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
