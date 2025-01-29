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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPCXCRQ2%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkXFahUnw9do8glF3K35Ay1S4Yk7oDCuhiamW%2BnMN0kAiBs4Aq4jxhKSOnEQgAjXxXX5fyRxAZfEugWutFs3uAXjSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMORTTwBUOWwhRLzh1KtwDnmnITcSwwGLC1bbbzkw3pgsd5flPsTv6mPLPPmc9POBypbpRegR3Rwy%2BuNX7V76z4ivmrROgHOegA8Dlikg9BZFG5%2FwsEjzlO%2Fo%2BeV5BTIxyP4L9%2BowBryRfPcpql8IgpDhowdexVrDngRFoknnY%2BQW610hNWSm1pPmJ7tzrlV79EdZQI0eteWC5JKxLq8LWKEm5s0iYGb%2B6ol0xehVpo%2FhSTAKbTtARbQZtj24q%2BBLUarkDGW%2FoSWtYY56a%2F9Gk4xys9w9l02c67Se%2BPeT5LoBFptSI7OvCnies%2FT7ADddaYCduO3FMYlFsrfpDmcSGGAImoSfBDC685BleMhg1KZf06lIBORuC%2FALAkGuWF%2BKve8RocmsYK4UmKmBQ1iUeu7fS3xckYP5WaAQoBXmlz%2FVeEk5jm4teXkeqhZYQ0Fs3rNAQbu9T8bMAeKTu%2BvuGbRa25jxJNe7FavX%2Fqvt5cVjBd7pGB%2FKHkxvDsxzhf1t%2Fex0x78YAdFyv9qiDbwaMnRchF3wxgkYa5F9dfcchiGfvMSTLnw4Q4XcM2mHbGFCE6BEMBtE%2Bg5K%2F74Y3q4YA0cr%2BpL%2BAK9MlBMll8NlelQCgT%2BcaT9z39E%2BxrAegeI%2BF3esMyc8EeV%2Fdtekw%2BPbpvAY6pgHrqoNwyx37WDw9bp24S0fU7%2BC%2BixoDdnmqLI8Vs7uREo%2FlqtuecD8AQ60%2BVCkG%2BH1ljxiKzBkU%2FpXZwNrfvZ653%2FUI%2FVQtaaD3F9hv9FtckdrqtmvmGH0imszXjom1sBkJ2Kn3N1X5OhQO0O%2FUvrmJ5x2R1A22TMQAsItC%2BnJ7GT%2B1NfYYSRbWlmntrbX5g1SUbyuvX%2F2sy3H64pA2CKg3Oxv8ReK7&X-Amz-Signature=d290d04322f55eec99c944b35020b85cecb71b08b32249c0f72e9b5e46dc1ab3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPCXCRQ2%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkXFahUnw9do8glF3K35Ay1S4Yk7oDCuhiamW%2BnMN0kAiBs4Aq4jxhKSOnEQgAjXxXX5fyRxAZfEugWutFs3uAXjSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMORTTwBUOWwhRLzh1KtwDnmnITcSwwGLC1bbbzkw3pgsd5flPsTv6mPLPPmc9POBypbpRegR3Rwy%2BuNX7V76z4ivmrROgHOegA8Dlikg9BZFG5%2FwsEjzlO%2Fo%2BeV5BTIxyP4L9%2BowBryRfPcpql8IgpDhowdexVrDngRFoknnY%2BQW610hNWSm1pPmJ7tzrlV79EdZQI0eteWC5JKxLq8LWKEm5s0iYGb%2B6ol0xehVpo%2FhSTAKbTtARbQZtj24q%2BBLUarkDGW%2FoSWtYY56a%2F9Gk4xys9w9l02c67Se%2BPeT5LoBFptSI7OvCnies%2FT7ADddaYCduO3FMYlFsrfpDmcSGGAImoSfBDC685BleMhg1KZf06lIBORuC%2FALAkGuWF%2BKve8RocmsYK4UmKmBQ1iUeu7fS3xckYP5WaAQoBXmlz%2FVeEk5jm4teXkeqhZYQ0Fs3rNAQbu9T8bMAeKTu%2BvuGbRa25jxJNe7FavX%2Fqvt5cVjBd7pGB%2FKHkxvDsxzhf1t%2Fex0x78YAdFyv9qiDbwaMnRchF3wxgkYa5F9dfcchiGfvMSTLnw4Q4XcM2mHbGFCE6BEMBtE%2Bg5K%2F74Y3q4YA0cr%2BpL%2BAK9MlBMll8NlelQCgT%2BcaT9z39E%2BxrAegeI%2BF3esMyc8EeV%2Fdtekw%2BPbpvAY6pgHrqoNwyx37WDw9bp24S0fU7%2BC%2BixoDdnmqLI8Vs7uREo%2FlqtuecD8AQ60%2BVCkG%2BH1ljxiKzBkU%2FpXZwNrfvZ653%2FUI%2FVQtaaD3F9hv9FtckdrqtmvmGH0imszXjom1sBkJ2Kn3N1X5OhQO0O%2FUvrmJ5x2R1A22TMQAsItC%2BnJ7GT%2B1NfYYSRbWlmntrbX5g1SUbyuvX%2F2sy3H64pA2CKg3Oxv8ReK7&X-Amz-Signature=051f8407bab85e19b7a66c395bf15d9131c540557d195298d656becc03a8c923&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPCXCRQ2%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkXFahUnw9do8glF3K35Ay1S4Yk7oDCuhiamW%2BnMN0kAiBs4Aq4jxhKSOnEQgAjXxXX5fyRxAZfEugWutFs3uAXjSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMORTTwBUOWwhRLzh1KtwDnmnITcSwwGLC1bbbzkw3pgsd5flPsTv6mPLPPmc9POBypbpRegR3Rwy%2BuNX7V76z4ivmrROgHOegA8Dlikg9BZFG5%2FwsEjzlO%2Fo%2BeV5BTIxyP4L9%2BowBryRfPcpql8IgpDhowdexVrDngRFoknnY%2BQW610hNWSm1pPmJ7tzrlV79EdZQI0eteWC5JKxLq8LWKEm5s0iYGb%2B6ol0xehVpo%2FhSTAKbTtARbQZtj24q%2BBLUarkDGW%2FoSWtYY56a%2F9Gk4xys9w9l02c67Se%2BPeT5LoBFptSI7OvCnies%2FT7ADddaYCduO3FMYlFsrfpDmcSGGAImoSfBDC685BleMhg1KZf06lIBORuC%2FALAkGuWF%2BKve8RocmsYK4UmKmBQ1iUeu7fS3xckYP5WaAQoBXmlz%2FVeEk5jm4teXkeqhZYQ0Fs3rNAQbu9T8bMAeKTu%2BvuGbRa25jxJNe7FavX%2Fqvt5cVjBd7pGB%2FKHkxvDsxzhf1t%2Fex0x78YAdFyv9qiDbwaMnRchF3wxgkYa5F9dfcchiGfvMSTLnw4Q4XcM2mHbGFCE6BEMBtE%2Bg5K%2F74Y3q4YA0cr%2BpL%2BAK9MlBMll8NlelQCgT%2BcaT9z39E%2BxrAegeI%2BF3esMyc8EeV%2Fdtekw%2BPbpvAY6pgHrqoNwyx37WDw9bp24S0fU7%2BC%2BixoDdnmqLI8Vs7uREo%2FlqtuecD8AQ60%2BVCkG%2BH1ljxiKzBkU%2FpXZwNrfvZ653%2FUI%2FVQtaaD3F9hv9FtckdrqtmvmGH0imszXjom1sBkJ2Kn3N1X5OhQO0O%2FUvrmJ5x2R1A22TMQAsItC%2BnJ7GT%2B1NfYYSRbWlmntrbX5g1SUbyuvX%2F2sy3H64pA2CKg3Oxv8ReK7&X-Amz-Signature=7f1242f288b2811409f4ded111ee6711125f5432731081d6c7ab1494b30a62b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPCXCRQ2%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkXFahUnw9do8glF3K35Ay1S4Yk7oDCuhiamW%2BnMN0kAiBs4Aq4jxhKSOnEQgAjXxXX5fyRxAZfEugWutFs3uAXjSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMORTTwBUOWwhRLzh1KtwDnmnITcSwwGLC1bbbzkw3pgsd5flPsTv6mPLPPmc9POBypbpRegR3Rwy%2BuNX7V76z4ivmrROgHOegA8Dlikg9BZFG5%2FwsEjzlO%2Fo%2BeV5BTIxyP4L9%2BowBryRfPcpql8IgpDhowdexVrDngRFoknnY%2BQW610hNWSm1pPmJ7tzrlV79EdZQI0eteWC5JKxLq8LWKEm5s0iYGb%2B6ol0xehVpo%2FhSTAKbTtARbQZtj24q%2BBLUarkDGW%2FoSWtYY56a%2F9Gk4xys9w9l02c67Se%2BPeT5LoBFptSI7OvCnies%2FT7ADddaYCduO3FMYlFsrfpDmcSGGAImoSfBDC685BleMhg1KZf06lIBORuC%2FALAkGuWF%2BKve8RocmsYK4UmKmBQ1iUeu7fS3xckYP5WaAQoBXmlz%2FVeEk5jm4teXkeqhZYQ0Fs3rNAQbu9T8bMAeKTu%2BvuGbRa25jxJNe7FavX%2Fqvt5cVjBd7pGB%2FKHkxvDsxzhf1t%2Fex0x78YAdFyv9qiDbwaMnRchF3wxgkYa5F9dfcchiGfvMSTLnw4Q4XcM2mHbGFCE6BEMBtE%2Bg5K%2F74Y3q4YA0cr%2BpL%2BAK9MlBMll8NlelQCgT%2BcaT9z39E%2BxrAegeI%2BF3esMyc8EeV%2Fdtekw%2BPbpvAY6pgHrqoNwyx37WDw9bp24S0fU7%2BC%2BixoDdnmqLI8Vs7uREo%2FlqtuecD8AQ60%2BVCkG%2BH1ljxiKzBkU%2FpXZwNrfvZ653%2FUI%2FVQtaaD3F9hv9FtckdrqtmvmGH0imszXjom1sBkJ2Kn3N1X5OhQO0O%2FUvrmJ5x2R1A22TMQAsItC%2BnJ7GT%2B1NfYYSRbWlmntrbX5g1SUbyuvX%2F2sy3H64pA2CKg3Oxv8ReK7&X-Amz-Signature=b069d4e67f2fd5eb9402578c7e2ea3f7844c7ce0ccae575b4cacce041baa0842&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPCXCRQ2%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkXFahUnw9do8glF3K35Ay1S4Yk7oDCuhiamW%2BnMN0kAiBs4Aq4jxhKSOnEQgAjXxXX5fyRxAZfEugWutFs3uAXjSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMORTTwBUOWwhRLzh1KtwDnmnITcSwwGLC1bbbzkw3pgsd5flPsTv6mPLPPmc9POBypbpRegR3Rwy%2BuNX7V76z4ivmrROgHOegA8Dlikg9BZFG5%2FwsEjzlO%2Fo%2BeV5BTIxyP4L9%2BowBryRfPcpql8IgpDhowdexVrDngRFoknnY%2BQW610hNWSm1pPmJ7tzrlV79EdZQI0eteWC5JKxLq8LWKEm5s0iYGb%2B6ol0xehVpo%2FhSTAKbTtARbQZtj24q%2BBLUarkDGW%2FoSWtYY56a%2F9Gk4xys9w9l02c67Se%2BPeT5LoBFptSI7OvCnies%2FT7ADddaYCduO3FMYlFsrfpDmcSGGAImoSfBDC685BleMhg1KZf06lIBORuC%2FALAkGuWF%2BKve8RocmsYK4UmKmBQ1iUeu7fS3xckYP5WaAQoBXmlz%2FVeEk5jm4teXkeqhZYQ0Fs3rNAQbu9T8bMAeKTu%2BvuGbRa25jxJNe7FavX%2Fqvt5cVjBd7pGB%2FKHkxvDsxzhf1t%2Fex0x78YAdFyv9qiDbwaMnRchF3wxgkYa5F9dfcchiGfvMSTLnw4Q4XcM2mHbGFCE6BEMBtE%2Bg5K%2F74Y3q4YA0cr%2BpL%2BAK9MlBMll8NlelQCgT%2BcaT9z39E%2BxrAegeI%2BF3esMyc8EeV%2Fdtekw%2BPbpvAY6pgHrqoNwyx37WDw9bp24S0fU7%2BC%2BixoDdnmqLI8Vs7uREo%2FlqtuecD8AQ60%2BVCkG%2BH1ljxiKzBkU%2FpXZwNrfvZ653%2FUI%2FVQtaaD3F9hv9FtckdrqtmvmGH0imszXjom1sBkJ2Kn3N1X5OhQO0O%2FUvrmJ5x2R1A22TMQAsItC%2BnJ7GT%2B1NfYYSRbWlmntrbX5g1SUbyuvX%2F2sy3H64pA2CKg3Oxv8ReK7&X-Amz-Signature=3cdd538194693d7f00e8913180f499df3c3b56d3e4cc7eada7dbacd0855215c5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
