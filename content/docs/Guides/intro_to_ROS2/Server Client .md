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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645DPC446%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWcSVFfzNDafEJdSqYmwKa7OqIomak9zRBj7JPzDP35QIgKeChU7Xv83hNa4McGyveo%2FJEoihycIHH1HsDjpDM5AMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAeQC4B7y9zYnvxZOircAwco7goZ635vYaxvSe0xfdOQ0OEaQKCmiYkSdSyIzim9%2F%2BLRHB%2BVKV8VIdiDz80gOP5yNoTHqKlQyrzy31ru%2BqlkAp33wDimHzwgNm6GHI2V6mxM7vlk8%2FDRxgUrj5ttDV6ZybwCEMZ3To9w%2Fd14FA1z7RlS5MHH6Rg6l0qomuYY77KdpWLsUBIr5DzfEPFxq5bfQMq5lxAcBn1r386FsAtL287myWHxkoy%2BktEYZaO5BVexF2M287q9Qm2uChoZMlhsyU8uJFgIukZlKq%2BYcjTY77C2SmioXuhzLKHHeKVDFtNHhQVf0W%2BOy%2FUeU7OduPweN%2FLB3AL%2Fe07a86ivsKSlDRAdiJulF84pZSg6gwSCSlKFZG%2F%2Fo%2F7yrOn1uTxIlKVyKPk%2FrC8SDmJycgqZwCDz1aAn22u%2FPHPwUb%2BliXLdOQCLe9JBvFPBeMA%2FL6MKb%2FH4bxeR79Wl5SDLhoSnQgUcDtTCTZ9fPK14kDmMPSQFPJ6OuaooF93RZEBv5XoWS94%2FIGtmHP7JwVNlLnt2uQ6IIGRzHrcBH7V6oos2wV1MJZTVySDsRm2i19ktlybYLHHVG4Mb%2FWV7yj%2BeFERi8BqLMKZjuCHoz69u%2FAX0fakxpkoACSCHAZg9SHyQMJTCvMQGOqUBsc0ejy1uqALGLHaRzz9HR0rFWlEu8MrdAgW54n8wuvCSySX3FbC%2F4LQoT6QAI%2BWi9nN1EfIwaHzy5oj%2BuL08ZUNffLHm%2FZd0fixM%2BTgF5x1U6STGhJFeiVX3hvrsmcOa76xddBOkYYKdROoeuTr1RjVErYAr%2ByM5K2pTgWVAym9TvamKSRQvUZbtqkgD1ZaB5I2ZffR1gxELfQSy7K4AOAiuiLpl&X-Amz-Signature=30bee3950f053e22ddf0a9cb2893a5439dce0d8e6130dd25467b1806df429511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645DPC446%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWcSVFfzNDafEJdSqYmwKa7OqIomak9zRBj7JPzDP35QIgKeChU7Xv83hNa4McGyveo%2FJEoihycIHH1HsDjpDM5AMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAeQC4B7y9zYnvxZOircAwco7goZ635vYaxvSe0xfdOQ0OEaQKCmiYkSdSyIzim9%2F%2BLRHB%2BVKV8VIdiDz80gOP5yNoTHqKlQyrzy31ru%2BqlkAp33wDimHzwgNm6GHI2V6mxM7vlk8%2FDRxgUrj5ttDV6ZybwCEMZ3To9w%2Fd14FA1z7RlS5MHH6Rg6l0qomuYY77KdpWLsUBIr5DzfEPFxq5bfQMq5lxAcBn1r386FsAtL287myWHxkoy%2BktEYZaO5BVexF2M287q9Qm2uChoZMlhsyU8uJFgIukZlKq%2BYcjTY77C2SmioXuhzLKHHeKVDFtNHhQVf0W%2BOy%2FUeU7OduPweN%2FLB3AL%2Fe07a86ivsKSlDRAdiJulF84pZSg6gwSCSlKFZG%2F%2Fo%2F7yrOn1uTxIlKVyKPk%2FrC8SDmJycgqZwCDz1aAn22u%2FPHPwUb%2BliXLdOQCLe9JBvFPBeMA%2FL6MKb%2FH4bxeR79Wl5SDLhoSnQgUcDtTCTZ9fPK14kDmMPSQFPJ6OuaooF93RZEBv5XoWS94%2FIGtmHP7JwVNlLnt2uQ6IIGRzHrcBH7V6oos2wV1MJZTVySDsRm2i19ktlybYLHHVG4Mb%2FWV7yj%2BeFERi8BqLMKZjuCHoz69u%2FAX0fakxpkoACSCHAZg9SHyQMJTCvMQGOqUBsc0ejy1uqALGLHaRzz9HR0rFWlEu8MrdAgW54n8wuvCSySX3FbC%2F4LQoT6QAI%2BWi9nN1EfIwaHzy5oj%2BuL08ZUNffLHm%2FZd0fixM%2BTgF5x1U6STGhJFeiVX3hvrsmcOa76xddBOkYYKdROoeuTr1RjVErYAr%2ByM5K2pTgWVAym9TvamKSRQvUZbtqkgD1ZaB5I2ZffR1gxELfQSy7K4AOAiuiLpl&X-Amz-Signature=6a8a30a85ed4f10e181c4adb3993ab4f9f96689865012108020a8b8bd48a1944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645DPC446%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWcSVFfzNDafEJdSqYmwKa7OqIomak9zRBj7JPzDP35QIgKeChU7Xv83hNa4McGyveo%2FJEoihycIHH1HsDjpDM5AMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAeQC4B7y9zYnvxZOircAwco7goZ635vYaxvSe0xfdOQ0OEaQKCmiYkSdSyIzim9%2F%2BLRHB%2BVKV8VIdiDz80gOP5yNoTHqKlQyrzy31ru%2BqlkAp33wDimHzwgNm6GHI2V6mxM7vlk8%2FDRxgUrj5ttDV6ZybwCEMZ3To9w%2Fd14FA1z7RlS5MHH6Rg6l0qomuYY77KdpWLsUBIr5DzfEPFxq5bfQMq5lxAcBn1r386FsAtL287myWHxkoy%2BktEYZaO5BVexF2M287q9Qm2uChoZMlhsyU8uJFgIukZlKq%2BYcjTY77C2SmioXuhzLKHHeKVDFtNHhQVf0W%2BOy%2FUeU7OduPweN%2FLB3AL%2Fe07a86ivsKSlDRAdiJulF84pZSg6gwSCSlKFZG%2F%2Fo%2F7yrOn1uTxIlKVyKPk%2FrC8SDmJycgqZwCDz1aAn22u%2FPHPwUb%2BliXLdOQCLe9JBvFPBeMA%2FL6MKb%2FH4bxeR79Wl5SDLhoSnQgUcDtTCTZ9fPK14kDmMPSQFPJ6OuaooF93RZEBv5XoWS94%2FIGtmHP7JwVNlLnt2uQ6IIGRzHrcBH7V6oos2wV1MJZTVySDsRm2i19ktlybYLHHVG4Mb%2FWV7yj%2BeFERi8BqLMKZjuCHoz69u%2FAX0fakxpkoACSCHAZg9SHyQMJTCvMQGOqUBsc0ejy1uqALGLHaRzz9HR0rFWlEu8MrdAgW54n8wuvCSySX3FbC%2F4LQoT6QAI%2BWi9nN1EfIwaHzy5oj%2BuL08ZUNffLHm%2FZd0fixM%2BTgF5x1U6STGhJFeiVX3hvrsmcOa76xddBOkYYKdROoeuTr1RjVErYAr%2ByM5K2pTgWVAym9TvamKSRQvUZbtqkgD1ZaB5I2ZffR1gxELfQSy7K4AOAiuiLpl&X-Amz-Signature=48d514da8d9f8a0c93b9c98f8dcc9717eac87507ad78ace7bb47ea7bcb2d2058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645DPC446%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWcSVFfzNDafEJdSqYmwKa7OqIomak9zRBj7JPzDP35QIgKeChU7Xv83hNa4McGyveo%2FJEoihycIHH1HsDjpDM5AMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAeQC4B7y9zYnvxZOircAwco7goZ635vYaxvSe0xfdOQ0OEaQKCmiYkSdSyIzim9%2F%2BLRHB%2BVKV8VIdiDz80gOP5yNoTHqKlQyrzy31ru%2BqlkAp33wDimHzwgNm6GHI2V6mxM7vlk8%2FDRxgUrj5ttDV6ZybwCEMZ3To9w%2Fd14FA1z7RlS5MHH6Rg6l0qomuYY77KdpWLsUBIr5DzfEPFxq5bfQMq5lxAcBn1r386FsAtL287myWHxkoy%2BktEYZaO5BVexF2M287q9Qm2uChoZMlhsyU8uJFgIukZlKq%2BYcjTY77C2SmioXuhzLKHHeKVDFtNHhQVf0W%2BOy%2FUeU7OduPweN%2FLB3AL%2Fe07a86ivsKSlDRAdiJulF84pZSg6gwSCSlKFZG%2F%2Fo%2F7yrOn1uTxIlKVyKPk%2FrC8SDmJycgqZwCDz1aAn22u%2FPHPwUb%2BliXLdOQCLe9JBvFPBeMA%2FL6MKb%2FH4bxeR79Wl5SDLhoSnQgUcDtTCTZ9fPK14kDmMPSQFPJ6OuaooF93RZEBv5XoWS94%2FIGtmHP7JwVNlLnt2uQ6IIGRzHrcBH7V6oos2wV1MJZTVySDsRm2i19ktlybYLHHVG4Mb%2FWV7yj%2BeFERi8BqLMKZjuCHoz69u%2FAX0fakxpkoACSCHAZg9SHyQMJTCvMQGOqUBsc0ejy1uqALGLHaRzz9HR0rFWlEu8MrdAgW54n8wuvCSySX3FbC%2F4LQoT6QAI%2BWi9nN1EfIwaHzy5oj%2BuL08ZUNffLHm%2FZd0fixM%2BTgF5x1U6STGhJFeiVX3hvrsmcOa76xddBOkYYKdROoeuTr1RjVErYAr%2ByM5K2pTgWVAym9TvamKSRQvUZbtqkgD1ZaB5I2ZffR1gxELfQSy7K4AOAiuiLpl&X-Amz-Signature=8d93e96dc85f52324261bcd4ff7eedeabb28412590b980a62a4d86d0e9774a32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645DPC446%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWcSVFfzNDafEJdSqYmwKa7OqIomak9zRBj7JPzDP35QIgKeChU7Xv83hNa4McGyveo%2FJEoihycIHH1HsDjpDM5AMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAeQC4B7y9zYnvxZOircAwco7goZ635vYaxvSe0xfdOQ0OEaQKCmiYkSdSyIzim9%2F%2BLRHB%2BVKV8VIdiDz80gOP5yNoTHqKlQyrzy31ru%2BqlkAp33wDimHzwgNm6GHI2V6mxM7vlk8%2FDRxgUrj5ttDV6ZybwCEMZ3To9w%2Fd14FA1z7RlS5MHH6Rg6l0qomuYY77KdpWLsUBIr5DzfEPFxq5bfQMq5lxAcBn1r386FsAtL287myWHxkoy%2BktEYZaO5BVexF2M287q9Qm2uChoZMlhsyU8uJFgIukZlKq%2BYcjTY77C2SmioXuhzLKHHeKVDFtNHhQVf0W%2BOy%2FUeU7OduPweN%2FLB3AL%2Fe07a86ivsKSlDRAdiJulF84pZSg6gwSCSlKFZG%2F%2Fo%2F7yrOn1uTxIlKVyKPk%2FrC8SDmJycgqZwCDz1aAn22u%2FPHPwUb%2BliXLdOQCLe9JBvFPBeMA%2FL6MKb%2FH4bxeR79Wl5SDLhoSnQgUcDtTCTZ9fPK14kDmMPSQFPJ6OuaooF93RZEBv5XoWS94%2FIGtmHP7JwVNlLnt2uQ6IIGRzHrcBH7V6oos2wV1MJZTVySDsRm2i19ktlybYLHHVG4Mb%2FWV7yj%2BeFERi8BqLMKZjuCHoz69u%2FAX0fakxpkoACSCHAZg9SHyQMJTCvMQGOqUBsc0ejy1uqALGLHaRzz9HR0rFWlEu8MrdAgW54n8wuvCSySX3FbC%2F4LQoT6QAI%2BWi9nN1EfIwaHzy5oj%2BuL08ZUNffLHm%2FZd0fixM%2BTgF5x1U6STGhJFeiVX3hvrsmcOa76xddBOkYYKdROoeuTr1RjVErYAr%2ByM5K2pTgWVAym9TvamKSRQvUZbtqkgD1ZaB5I2ZffR1gxELfQSy7K4AOAiuiLpl&X-Amz-Signature=58207b44adcb45a63e090e495f177c6103b73e724ad896e1c6e3156401ab0de2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
