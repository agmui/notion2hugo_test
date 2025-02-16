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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBKOCV3A%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCGXxDdnFPH2XakGomJw9A7DE76w3Wi8eIcP31J8ve0gAIhAPl%2Bt1IOStOle5sSVVhFKg40qhqyiAwTbCK4He8wruJ1Kv8DCFIQABoMNjM3NDIzMTgzODA1Igw1xNzkjvqKqHE4Onoq3AP9vCMflkvMS7REnyRqEzTRiU3yz8PhkRh8t0Yoqk5Lv%2BkrLTxfnN9kNhz0DUtr%2BmX1lxOFVzbe8vocUKjmK%2BHIcH8l39TzqEDKOfOUXasCo0P3wXV9wJWDzzYO4AREwZ%2FnaO7vrhTkhgtcu6gF%2FXSaVTTVzpeaLKk6%2FD2ftFTxJwV2GpxjQbfvQIJEStLuol%2FCJ5i6j%2BzXzfodeGvdGUHTuO7Ap%2B2ISQ6nBUpTktWbBVlSimQl3xqGURKK98%2BINET%2BnKrToDeysrWYllHLdHdHpUb6QYI2BtaDE7A06CT01EB8l32TENebYBHgxZxsm8Tq4SGfVyt2Jf5FGpjeC8IxkDzdsuvpeKItnTQL1Sxvxlo%2BYtvPGONU9YlWN3unpQqL7qZIbUYxQsuvbr%2BO3cRK%2FqF%2FcLikMFF0KrWl8%2Bi3oBPmBm5TeZ0n%2FfvKmHuNczfyCKsSMXOKizf9WJ2j436BN1QVa22MSZwGnV3XgZD%2BpBXTlRGoRpdBO5zLBDL2ppLnbXJd915KCVEhOc8gGTDSeVdNbqEzIfgb6NrikcwzvDNA%2FdDBAUTsu95PNi7zgq6QH7o21G%2FtcsCDcgeg4uDnBM3XuXcJosdjwXQaQT4zmUt3cMzW9xM86Sy%2BDzDT5cS9BjqkAcapVOE4oFAUs4VT2GqUv%2FlsUbXXjxP1L4TB04RKsqV6T6jI%2Fpaz3WaLEXaXy1tGz2MSJu%2FaJW5M0GZR0mkQnvYpo5Pc3yulFvr4zs7O5tkheol9QpDWKPvKog5cxIODnjfWOsutRytfNEUx9QaxnYHGjmwhDqSMNhqel9xDlf4HCqotfuoUVYeOBwU%2FzWdgOGY6pFDHskB4nK9ipe447q41TLcE&X-Amz-Signature=dda936c0512e1252969e74c0851447f0300f5c3e64151aae4ad4d12ea07ad90d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBKOCV3A%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCGXxDdnFPH2XakGomJw9A7DE76w3Wi8eIcP31J8ve0gAIhAPl%2Bt1IOStOle5sSVVhFKg40qhqyiAwTbCK4He8wruJ1Kv8DCFIQABoMNjM3NDIzMTgzODA1Igw1xNzkjvqKqHE4Onoq3AP9vCMflkvMS7REnyRqEzTRiU3yz8PhkRh8t0Yoqk5Lv%2BkrLTxfnN9kNhz0DUtr%2BmX1lxOFVzbe8vocUKjmK%2BHIcH8l39TzqEDKOfOUXasCo0P3wXV9wJWDzzYO4AREwZ%2FnaO7vrhTkhgtcu6gF%2FXSaVTTVzpeaLKk6%2FD2ftFTxJwV2GpxjQbfvQIJEStLuol%2FCJ5i6j%2BzXzfodeGvdGUHTuO7Ap%2B2ISQ6nBUpTktWbBVlSimQl3xqGURKK98%2BINET%2BnKrToDeysrWYllHLdHdHpUb6QYI2BtaDE7A06CT01EB8l32TENebYBHgxZxsm8Tq4SGfVyt2Jf5FGpjeC8IxkDzdsuvpeKItnTQL1Sxvxlo%2BYtvPGONU9YlWN3unpQqL7qZIbUYxQsuvbr%2BO3cRK%2FqF%2FcLikMFF0KrWl8%2Bi3oBPmBm5TeZ0n%2FfvKmHuNczfyCKsSMXOKizf9WJ2j436BN1QVa22MSZwGnV3XgZD%2BpBXTlRGoRpdBO5zLBDL2ppLnbXJd915KCVEhOc8gGTDSeVdNbqEzIfgb6NrikcwzvDNA%2FdDBAUTsu95PNi7zgq6QH7o21G%2FtcsCDcgeg4uDnBM3XuXcJosdjwXQaQT4zmUt3cMzW9xM86Sy%2BDzDT5cS9BjqkAcapVOE4oFAUs4VT2GqUv%2FlsUbXXjxP1L4TB04RKsqV6T6jI%2Fpaz3WaLEXaXy1tGz2MSJu%2FaJW5M0GZR0mkQnvYpo5Pc3yulFvr4zs7O5tkheol9QpDWKPvKog5cxIODnjfWOsutRytfNEUx9QaxnYHGjmwhDqSMNhqel9xDlf4HCqotfuoUVYeOBwU%2FzWdgOGY6pFDHskB4nK9ipe447q41TLcE&X-Amz-Signature=519fbc6c1eb46725d48816ef61159431c3b20c3a4edd0c37e7c64c862379c52f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBKOCV3A%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCGXxDdnFPH2XakGomJw9A7DE76w3Wi8eIcP31J8ve0gAIhAPl%2Bt1IOStOle5sSVVhFKg40qhqyiAwTbCK4He8wruJ1Kv8DCFIQABoMNjM3NDIzMTgzODA1Igw1xNzkjvqKqHE4Onoq3AP9vCMflkvMS7REnyRqEzTRiU3yz8PhkRh8t0Yoqk5Lv%2BkrLTxfnN9kNhz0DUtr%2BmX1lxOFVzbe8vocUKjmK%2BHIcH8l39TzqEDKOfOUXasCo0P3wXV9wJWDzzYO4AREwZ%2FnaO7vrhTkhgtcu6gF%2FXSaVTTVzpeaLKk6%2FD2ftFTxJwV2GpxjQbfvQIJEStLuol%2FCJ5i6j%2BzXzfodeGvdGUHTuO7Ap%2B2ISQ6nBUpTktWbBVlSimQl3xqGURKK98%2BINET%2BnKrToDeysrWYllHLdHdHpUb6QYI2BtaDE7A06CT01EB8l32TENebYBHgxZxsm8Tq4SGfVyt2Jf5FGpjeC8IxkDzdsuvpeKItnTQL1Sxvxlo%2BYtvPGONU9YlWN3unpQqL7qZIbUYxQsuvbr%2BO3cRK%2FqF%2FcLikMFF0KrWl8%2Bi3oBPmBm5TeZ0n%2FfvKmHuNczfyCKsSMXOKizf9WJ2j436BN1QVa22MSZwGnV3XgZD%2BpBXTlRGoRpdBO5zLBDL2ppLnbXJd915KCVEhOc8gGTDSeVdNbqEzIfgb6NrikcwzvDNA%2FdDBAUTsu95PNi7zgq6QH7o21G%2FtcsCDcgeg4uDnBM3XuXcJosdjwXQaQT4zmUt3cMzW9xM86Sy%2BDzDT5cS9BjqkAcapVOE4oFAUs4VT2GqUv%2FlsUbXXjxP1L4TB04RKsqV6T6jI%2Fpaz3WaLEXaXy1tGz2MSJu%2FaJW5M0GZR0mkQnvYpo5Pc3yulFvr4zs7O5tkheol9QpDWKPvKog5cxIODnjfWOsutRytfNEUx9QaxnYHGjmwhDqSMNhqel9xDlf4HCqotfuoUVYeOBwU%2FzWdgOGY6pFDHskB4nK9ipe447q41TLcE&X-Amz-Signature=c74c5b254fbec1f7fbe9576ac5fcae036bb4293d7c388fde151e358e0d80b708&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBKOCV3A%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCGXxDdnFPH2XakGomJw9A7DE76w3Wi8eIcP31J8ve0gAIhAPl%2Bt1IOStOle5sSVVhFKg40qhqyiAwTbCK4He8wruJ1Kv8DCFIQABoMNjM3NDIzMTgzODA1Igw1xNzkjvqKqHE4Onoq3AP9vCMflkvMS7REnyRqEzTRiU3yz8PhkRh8t0Yoqk5Lv%2BkrLTxfnN9kNhz0DUtr%2BmX1lxOFVzbe8vocUKjmK%2BHIcH8l39TzqEDKOfOUXasCo0P3wXV9wJWDzzYO4AREwZ%2FnaO7vrhTkhgtcu6gF%2FXSaVTTVzpeaLKk6%2FD2ftFTxJwV2GpxjQbfvQIJEStLuol%2FCJ5i6j%2BzXzfodeGvdGUHTuO7Ap%2B2ISQ6nBUpTktWbBVlSimQl3xqGURKK98%2BINET%2BnKrToDeysrWYllHLdHdHpUb6QYI2BtaDE7A06CT01EB8l32TENebYBHgxZxsm8Tq4SGfVyt2Jf5FGpjeC8IxkDzdsuvpeKItnTQL1Sxvxlo%2BYtvPGONU9YlWN3unpQqL7qZIbUYxQsuvbr%2BO3cRK%2FqF%2FcLikMFF0KrWl8%2Bi3oBPmBm5TeZ0n%2FfvKmHuNczfyCKsSMXOKizf9WJ2j436BN1QVa22MSZwGnV3XgZD%2BpBXTlRGoRpdBO5zLBDL2ppLnbXJd915KCVEhOc8gGTDSeVdNbqEzIfgb6NrikcwzvDNA%2FdDBAUTsu95PNi7zgq6QH7o21G%2FtcsCDcgeg4uDnBM3XuXcJosdjwXQaQT4zmUt3cMzW9xM86Sy%2BDzDT5cS9BjqkAcapVOE4oFAUs4VT2GqUv%2FlsUbXXjxP1L4TB04RKsqV6T6jI%2Fpaz3WaLEXaXy1tGz2MSJu%2FaJW5M0GZR0mkQnvYpo5Pc3yulFvr4zs7O5tkheol9QpDWKPvKog5cxIODnjfWOsutRytfNEUx9QaxnYHGjmwhDqSMNhqel9xDlf4HCqotfuoUVYeOBwU%2FzWdgOGY6pFDHskB4nK9ipe447q41TLcE&X-Amz-Signature=527a6ba270935c33907e67d2c37ffd0926850c6a87a3d1bc3506902e1d729a77&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBKOCV3A%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCGXxDdnFPH2XakGomJw9A7DE76w3Wi8eIcP31J8ve0gAIhAPl%2Bt1IOStOle5sSVVhFKg40qhqyiAwTbCK4He8wruJ1Kv8DCFIQABoMNjM3NDIzMTgzODA1Igw1xNzkjvqKqHE4Onoq3AP9vCMflkvMS7REnyRqEzTRiU3yz8PhkRh8t0Yoqk5Lv%2BkrLTxfnN9kNhz0DUtr%2BmX1lxOFVzbe8vocUKjmK%2BHIcH8l39TzqEDKOfOUXasCo0P3wXV9wJWDzzYO4AREwZ%2FnaO7vrhTkhgtcu6gF%2FXSaVTTVzpeaLKk6%2FD2ftFTxJwV2GpxjQbfvQIJEStLuol%2FCJ5i6j%2BzXzfodeGvdGUHTuO7Ap%2B2ISQ6nBUpTktWbBVlSimQl3xqGURKK98%2BINET%2BnKrToDeysrWYllHLdHdHpUb6QYI2BtaDE7A06CT01EB8l32TENebYBHgxZxsm8Tq4SGfVyt2Jf5FGpjeC8IxkDzdsuvpeKItnTQL1Sxvxlo%2BYtvPGONU9YlWN3unpQqL7qZIbUYxQsuvbr%2BO3cRK%2FqF%2FcLikMFF0KrWl8%2Bi3oBPmBm5TeZ0n%2FfvKmHuNczfyCKsSMXOKizf9WJ2j436BN1QVa22MSZwGnV3XgZD%2BpBXTlRGoRpdBO5zLBDL2ppLnbXJd915KCVEhOc8gGTDSeVdNbqEzIfgb6NrikcwzvDNA%2FdDBAUTsu95PNi7zgq6QH7o21G%2FtcsCDcgeg4uDnBM3XuXcJosdjwXQaQT4zmUt3cMzW9xM86Sy%2BDzDT5cS9BjqkAcapVOE4oFAUs4VT2GqUv%2FlsUbXXjxP1L4TB04RKsqV6T6jI%2Fpaz3WaLEXaXy1tGz2MSJu%2FaJW5M0GZR0mkQnvYpo5Pc3yulFvr4zs7O5tkheol9QpDWKPvKog5cxIODnjfWOsutRytfNEUx9QaxnYHGjmwhDqSMNhqel9xDlf4HCqotfuoUVYeOBwU%2FzWdgOGY6pFDHskB4nK9ipe447q41TLcE&X-Amz-Signature=b54b5b3379caa14f6320b0a29975b0c9d6a4d00ead18bf97b34e29b2a1f106a7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
