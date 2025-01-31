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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VUUSVR3%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBQ4gL0DbWHmbRvrdOvqRp5sa3w%2FnXCEZpU%2FOhijwb4wIhAM2MDVBlqna4dPi7IK9ODxfGXbBRaJrU5DmmEaZCNLOMKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQdPPfUejVYhFbgwoq3APANX0jNZEKfPm0oNSOEcUfAw72ePEvBV3olxPURRKhy8T46x%2FjRNZnlDxTTKTjcCUnGSQzk5vBGT9vYUzHq%2FIv9eLf3uLyinJF0sGzxwYrqKoHVeJ5ZLyhDDreKmFR2hcI4bhH1OMjNAGAdAmNiUltOqffhqgd6t16rOjGPKC00hziq9qHT2gnc1VVgFp21dytryVizswPnAxUQveX%2FbTU2prDxJZRzPHyZaOaAzoV1unNLh%2Bqi28r5CBbC5h5Yqn6osWzEF1la6JETUXh4eeWTSRD3fq9kAAJKQ2j7JJuMFHWqeqz0MGeww7PFTCvgktzZXHcnVzCK8x%2B%2FYCR5sOoD3JVwUztVvoUwH3E%2BgtG07MXUUF2TL5FiToWPpk0yZ%2BzSfdWORdRwbwTtt7oEDD0hcYWCqsY9j7wajG6svTDhNb559Cy8w%2B%2BYAjhVPR7AHkNVo9QP1nh8E8IS4TsLVutuHVwcDPBrelB5Zj23mV8RPSBoMhm8p%2Bfc5rQFqgcEttWmxWL%2BaV7%2Bwzs0BjiCnlW%2BUZ1%2FHjqSl9uui%2FIq6hwDErisItNfrycCw87OBAyoRfsXMTrc3YbI6iKOTY3rebz2WOzyMdhY7UdowRON7%2B5KvsQcuAsAZEMH36QqzDR0fC8BjqkATMMGIXXTxLNiZDVpFhY3NUCZt98Cl0NN3TfHqEe%2B3yHyDHiNyEcFUGKwQWinCcSF0JB3LqrEjod5PWum8c5wcirRdLORpEJifNyWm40Xd%2BRnPZuKEEqu5KhflFJ3nc09X7LIcMoSEt1aaTmx3wXaf1pVQ9pooJyntHSxhDqdyFiosZfplLOaXQZB8bb1P1u%2BMtQ9p9vAon%2FTHHx4TNEyX6GkdrI&X-Amz-Signature=71c3e7fe43422440530bf99b5ef3ba80ce5f6e274f191339a864939fae3186f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VUUSVR3%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBQ4gL0DbWHmbRvrdOvqRp5sa3w%2FnXCEZpU%2FOhijwb4wIhAM2MDVBlqna4dPi7IK9ODxfGXbBRaJrU5DmmEaZCNLOMKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQdPPfUejVYhFbgwoq3APANX0jNZEKfPm0oNSOEcUfAw72ePEvBV3olxPURRKhy8T46x%2FjRNZnlDxTTKTjcCUnGSQzk5vBGT9vYUzHq%2FIv9eLf3uLyinJF0sGzxwYrqKoHVeJ5ZLyhDDreKmFR2hcI4bhH1OMjNAGAdAmNiUltOqffhqgd6t16rOjGPKC00hziq9qHT2gnc1VVgFp21dytryVizswPnAxUQveX%2FbTU2prDxJZRzPHyZaOaAzoV1unNLh%2Bqi28r5CBbC5h5Yqn6osWzEF1la6JETUXh4eeWTSRD3fq9kAAJKQ2j7JJuMFHWqeqz0MGeww7PFTCvgktzZXHcnVzCK8x%2B%2FYCR5sOoD3JVwUztVvoUwH3E%2BgtG07MXUUF2TL5FiToWPpk0yZ%2BzSfdWORdRwbwTtt7oEDD0hcYWCqsY9j7wajG6svTDhNb559Cy8w%2B%2BYAjhVPR7AHkNVo9QP1nh8E8IS4TsLVutuHVwcDPBrelB5Zj23mV8RPSBoMhm8p%2Bfc5rQFqgcEttWmxWL%2BaV7%2Bwzs0BjiCnlW%2BUZ1%2FHjqSl9uui%2FIq6hwDErisItNfrycCw87OBAyoRfsXMTrc3YbI6iKOTY3rebz2WOzyMdhY7UdowRON7%2B5KvsQcuAsAZEMH36QqzDR0fC8BjqkATMMGIXXTxLNiZDVpFhY3NUCZt98Cl0NN3TfHqEe%2B3yHyDHiNyEcFUGKwQWinCcSF0JB3LqrEjod5PWum8c5wcirRdLORpEJifNyWm40Xd%2BRnPZuKEEqu5KhflFJ3nc09X7LIcMoSEt1aaTmx3wXaf1pVQ9pooJyntHSxhDqdyFiosZfplLOaXQZB8bb1P1u%2BMtQ9p9vAon%2FTHHx4TNEyX6GkdrI&X-Amz-Signature=0279ee9974fd405add8a2c37d10baa1491dd8a697edb2762bdbb5b621976a461&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VUUSVR3%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBQ4gL0DbWHmbRvrdOvqRp5sa3w%2FnXCEZpU%2FOhijwb4wIhAM2MDVBlqna4dPi7IK9ODxfGXbBRaJrU5DmmEaZCNLOMKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQdPPfUejVYhFbgwoq3APANX0jNZEKfPm0oNSOEcUfAw72ePEvBV3olxPURRKhy8T46x%2FjRNZnlDxTTKTjcCUnGSQzk5vBGT9vYUzHq%2FIv9eLf3uLyinJF0sGzxwYrqKoHVeJ5ZLyhDDreKmFR2hcI4bhH1OMjNAGAdAmNiUltOqffhqgd6t16rOjGPKC00hziq9qHT2gnc1VVgFp21dytryVizswPnAxUQveX%2FbTU2prDxJZRzPHyZaOaAzoV1unNLh%2Bqi28r5CBbC5h5Yqn6osWzEF1la6JETUXh4eeWTSRD3fq9kAAJKQ2j7JJuMFHWqeqz0MGeww7PFTCvgktzZXHcnVzCK8x%2B%2FYCR5sOoD3JVwUztVvoUwH3E%2BgtG07MXUUF2TL5FiToWPpk0yZ%2BzSfdWORdRwbwTtt7oEDD0hcYWCqsY9j7wajG6svTDhNb559Cy8w%2B%2BYAjhVPR7AHkNVo9QP1nh8E8IS4TsLVutuHVwcDPBrelB5Zj23mV8RPSBoMhm8p%2Bfc5rQFqgcEttWmxWL%2BaV7%2Bwzs0BjiCnlW%2BUZ1%2FHjqSl9uui%2FIq6hwDErisItNfrycCw87OBAyoRfsXMTrc3YbI6iKOTY3rebz2WOzyMdhY7UdowRON7%2B5KvsQcuAsAZEMH36QqzDR0fC8BjqkATMMGIXXTxLNiZDVpFhY3NUCZt98Cl0NN3TfHqEe%2B3yHyDHiNyEcFUGKwQWinCcSF0JB3LqrEjod5PWum8c5wcirRdLORpEJifNyWm40Xd%2BRnPZuKEEqu5KhflFJ3nc09X7LIcMoSEt1aaTmx3wXaf1pVQ9pooJyntHSxhDqdyFiosZfplLOaXQZB8bb1P1u%2BMtQ9p9vAon%2FTHHx4TNEyX6GkdrI&X-Amz-Signature=1af78b1735c9ac5c7b98a01de6900ba7724086072398b11e17a188e95c1aa7df&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VUUSVR3%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBQ4gL0DbWHmbRvrdOvqRp5sa3w%2FnXCEZpU%2FOhijwb4wIhAM2MDVBlqna4dPi7IK9ODxfGXbBRaJrU5DmmEaZCNLOMKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQdPPfUejVYhFbgwoq3APANX0jNZEKfPm0oNSOEcUfAw72ePEvBV3olxPURRKhy8T46x%2FjRNZnlDxTTKTjcCUnGSQzk5vBGT9vYUzHq%2FIv9eLf3uLyinJF0sGzxwYrqKoHVeJ5ZLyhDDreKmFR2hcI4bhH1OMjNAGAdAmNiUltOqffhqgd6t16rOjGPKC00hziq9qHT2gnc1VVgFp21dytryVizswPnAxUQveX%2FbTU2prDxJZRzPHyZaOaAzoV1unNLh%2Bqi28r5CBbC5h5Yqn6osWzEF1la6JETUXh4eeWTSRD3fq9kAAJKQ2j7JJuMFHWqeqz0MGeww7PFTCvgktzZXHcnVzCK8x%2B%2FYCR5sOoD3JVwUztVvoUwH3E%2BgtG07MXUUF2TL5FiToWPpk0yZ%2BzSfdWORdRwbwTtt7oEDD0hcYWCqsY9j7wajG6svTDhNb559Cy8w%2B%2BYAjhVPR7AHkNVo9QP1nh8E8IS4TsLVutuHVwcDPBrelB5Zj23mV8RPSBoMhm8p%2Bfc5rQFqgcEttWmxWL%2BaV7%2Bwzs0BjiCnlW%2BUZ1%2FHjqSl9uui%2FIq6hwDErisItNfrycCw87OBAyoRfsXMTrc3YbI6iKOTY3rebz2WOzyMdhY7UdowRON7%2B5KvsQcuAsAZEMH36QqzDR0fC8BjqkATMMGIXXTxLNiZDVpFhY3NUCZt98Cl0NN3TfHqEe%2B3yHyDHiNyEcFUGKwQWinCcSF0JB3LqrEjod5PWum8c5wcirRdLORpEJifNyWm40Xd%2BRnPZuKEEqu5KhflFJ3nc09X7LIcMoSEt1aaTmx3wXaf1pVQ9pooJyntHSxhDqdyFiosZfplLOaXQZB8bb1P1u%2BMtQ9p9vAon%2FTHHx4TNEyX6GkdrI&X-Amz-Signature=854f2fbfbafd8dc0fa23e8fdea0a27ade407cb12e8b8e97981e0bae77a5ad9ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VUUSVR3%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBQ4gL0DbWHmbRvrdOvqRp5sa3w%2FnXCEZpU%2FOhijwb4wIhAM2MDVBlqna4dPi7IK9ODxfGXbBRaJrU5DmmEaZCNLOMKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQdPPfUejVYhFbgwoq3APANX0jNZEKfPm0oNSOEcUfAw72ePEvBV3olxPURRKhy8T46x%2FjRNZnlDxTTKTjcCUnGSQzk5vBGT9vYUzHq%2FIv9eLf3uLyinJF0sGzxwYrqKoHVeJ5ZLyhDDreKmFR2hcI4bhH1OMjNAGAdAmNiUltOqffhqgd6t16rOjGPKC00hziq9qHT2gnc1VVgFp21dytryVizswPnAxUQveX%2FbTU2prDxJZRzPHyZaOaAzoV1unNLh%2Bqi28r5CBbC5h5Yqn6osWzEF1la6JETUXh4eeWTSRD3fq9kAAJKQ2j7JJuMFHWqeqz0MGeww7PFTCvgktzZXHcnVzCK8x%2B%2FYCR5sOoD3JVwUztVvoUwH3E%2BgtG07MXUUF2TL5FiToWPpk0yZ%2BzSfdWORdRwbwTtt7oEDD0hcYWCqsY9j7wajG6svTDhNb559Cy8w%2B%2BYAjhVPR7AHkNVo9QP1nh8E8IS4TsLVutuHVwcDPBrelB5Zj23mV8RPSBoMhm8p%2Bfc5rQFqgcEttWmxWL%2BaV7%2Bwzs0BjiCnlW%2BUZ1%2FHjqSl9uui%2FIq6hwDErisItNfrycCw87OBAyoRfsXMTrc3YbI6iKOTY3rebz2WOzyMdhY7UdowRON7%2B5KvsQcuAsAZEMH36QqzDR0fC8BjqkATMMGIXXTxLNiZDVpFhY3NUCZt98Cl0NN3TfHqEe%2B3yHyDHiNyEcFUGKwQWinCcSF0JB3LqrEjod5PWum8c5wcirRdLORpEJifNyWm40Xd%2BRnPZuKEEqu5KhflFJ3nc09X7LIcMoSEt1aaTmx3wXaf1pVQ9pooJyntHSxhDqdyFiosZfplLOaXQZB8bb1P1u%2BMtQ9p9vAon%2FTHHx4TNEyX6GkdrI&X-Amz-Signature=bf49db63c29e0d6d579a504477fda7eb18e846b7196f3f94fb1d645dcbe2ce49&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
