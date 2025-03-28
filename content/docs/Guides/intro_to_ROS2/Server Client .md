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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTXXKJI%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMC3B9SNveVq4GKb0a3riTJZRlfIXe5jYQx8MAmcxz9AiA3y3cbNspIL8AGkGpKefiMJJJLj2eG%2BARh0yh3OB5G9ir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMDCbOehlT5MMNgpSvKtwDjnh%2FA0Q7qrrPe3FfIe%2FB5ra6%2Fau2boZ1hoDMXJRpiAZOTc%2BNVBhrft9ehPQZXEptL68GgvrgR8Lcg30Q7Rk1K59TZSRBww8YwQ47LWlvBTDspi5fhTWdGJMrPXO9tOfKlhvcbC4qVW69SI2LbAI%2Fo1mR3pH2F95Fa8YU5Y2Jqb5imQRDlcDMkjwByFTvH8s3LCLviZZMdAs2qLSKYsgtzvpU00kGUjtHIWVimoAVNIQTQMS2YiNazJvEbQAAUdobpaicCoCksgRFUs6l8t%2FykGVYHdvVunjr77TRDVcNgxAp%2Bo%2FCzXkwVFd5ncwt%2FEpH2UeGnxmpRfLZecuXmCOm9Zvl%2BxOUZFwm01FTs4Mtpscu8t9YdIF0IVZryDTPF7zn5tBJM1kWcSiOXFPwzX%2BumxIamlizdZQkiEVnnZ7332L%2B%2BnYPUqmSnCHWxVetETspPynpLQEIQ1OC8NgxJ6%2FC6QZZp6Bh8EigdzP9tpL%2BmfYjm6LRv2TTb3kQ%2BvQq6%2B0upvWl2RqBMvUWjItYsj5MD1Nd%2BR18LbhVipvg975lhkMb2IY88I6buhK5SP1ziESE%2BRljCWdjEJ6WiTez0JykZPb2Dgp%2BzP2EzANX1sy%2BcKJIFfDFZet%2B4qg2hXcw9sOcvwY6pgGD%2FkeherUV7ftSyzy6vKLFRIPe9%2Bkt5JrSD5shHN2HA3Z6qKHWvrSTrl6o9%2BsO%2BpmniBAaw61tSKhNGOe6QXiwAyKHve2Nw7ueuMRCyVYMRfD%2BKzR4hvIzTbey97OFcSP9de%2BQXNGb8ZzttUwHF4qLcHOTdp5ApYLRIeNHheCOZoRpIRBqsWIOLAoOq0yUfkWejxm%2FCL3OMur2hgrKQ5QlGp%2F1yYuS&X-Amz-Signature=db14cd1b02758257b19ad0180e9cfaa1bfaf7b7f2ca2dc93988ffa660142a69a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTXXKJI%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMC3B9SNveVq4GKb0a3riTJZRlfIXe5jYQx8MAmcxz9AiA3y3cbNspIL8AGkGpKefiMJJJLj2eG%2BARh0yh3OB5G9ir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMDCbOehlT5MMNgpSvKtwDjnh%2FA0Q7qrrPe3FfIe%2FB5ra6%2Fau2boZ1hoDMXJRpiAZOTc%2BNVBhrft9ehPQZXEptL68GgvrgR8Lcg30Q7Rk1K59TZSRBww8YwQ47LWlvBTDspi5fhTWdGJMrPXO9tOfKlhvcbC4qVW69SI2LbAI%2Fo1mR3pH2F95Fa8YU5Y2Jqb5imQRDlcDMkjwByFTvH8s3LCLviZZMdAs2qLSKYsgtzvpU00kGUjtHIWVimoAVNIQTQMS2YiNazJvEbQAAUdobpaicCoCksgRFUs6l8t%2FykGVYHdvVunjr77TRDVcNgxAp%2Bo%2FCzXkwVFd5ncwt%2FEpH2UeGnxmpRfLZecuXmCOm9Zvl%2BxOUZFwm01FTs4Mtpscu8t9YdIF0IVZryDTPF7zn5tBJM1kWcSiOXFPwzX%2BumxIamlizdZQkiEVnnZ7332L%2B%2BnYPUqmSnCHWxVetETspPynpLQEIQ1OC8NgxJ6%2FC6QZZp6Bh8EigdzP9tpL%2BmfYjm6LRv2TTb3kQ%2BvQq6%2B0upvWl2RqBMvUWjItYsj5MD1Nd%2BR18LbhVipvg975lhkMb2IY88I6buhK5SP1ziESE%2BRljCWdjEJ6WiTez0JykZPb2Dgp%2BzP2EzANX1sy%2BcKJIFfDFZet%2B4qg2hXcw9sOcvwY6pgGD%2FkeherUV7ftSyzy6vKLFRIPe9%2Bkt5JrSD5shHN2HA3Z6qKHWvrSTrl6o9%2BsO%2BpmniBAaw61tSKhNGOe6QXiwAyKHve2Nw7ueuMRCyVYMRfD%2BKzR4hvIzTbey97OFcSP9de%2BQXNGb8ZzttUwHF4qLcHOTdp5ApYLRIeNHheCOZoRpIRBqsWIOLAoOq0yUfkWejxm%2FCL3OMur2hgrKQ5QlGp%2F1yYuS&X-Amz-Signature=acee29fdbd2e031cea4a128e503f0edeb4921b1a12fc2582b6c0f2a7e8ab378a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTXXKJI%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMC3B9SNveVq4GKb0a3riTJZRlfIXe5jYQx8MAmcxz9AiA3y3cbNspIL8AGkGpKefiMJJJLj2eG%2BARh0yh3OB5G9ir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMDCbOehlT5MMNgpSvKtwDjnh%2FA0Q7qrrPe3FfIe%2FB5ra6%2Fau2boZ1hoDMXJRpiAZOTc%2BNVBhrft9ehPQZXEptL68GgvrgR8Lcg30Q7Rk1K59TZSRBww8YwQ47LWlvBTDspi5fhTWdGJMrPXO9tOfKlhvcbC4qVW69SI2LbAI%2Fo1mR3pH2F95Fa8YU5Y2Jqb5imQRDlcDMkjwByFTvH8s3LCLviZZMdAs2qLSKYsgtzvpU00kGUjtHIWVimoAVNIQTQMS2YiNazJvEbQAAUdobpaicCoCksgRFUs6l8t%2FykGVYHdvVunjr77TRDVcNgxAp%2Bo%2FCzXkwVFd5ncwt%2FEpH2UeGnxmpRfLZecuXmCOm9Zvl%2BxOUZFwm01FTs4Mtpscu8t9YdIF0IVZryDTPF7zn5tBJM1kWcSiOXFPwzX%2BumxIamlizdZQkiEVnnZ7332L%2B%2BnYPUqmSnCHWxVetETspPynpLQEIQ1OC8NgxJ6%2FC6QZZp6Bh8EigdzP9tpL%2BmfYjm6LRv2TTb3kQ%2BvQq6%2B0upvWl2RqBMvUWjItYsj5MD1Nd%2BR18LbhVipvg975lhkMb2IY88I6buhK5SP1ziESE%2BRljCWdjEJ6WiTez0JykZPb2Dgp%2BzP2EzANX1sy%2BcKJIFfDFZet%2B4qg2hXcw9sOcvwY6pgGD%2FkeherUV7ftSyzy6vKLFRIPe9%2Bkt5JrSD5shHN2HA3Z6qKHWvrSTrl6o9%2BsO%2BpmniBAaw61tSKhNGOe6QXiwAyKHve2Nw7ueuMRCyVYMRfD%2BKzR4hvIzTbey97OFcSP9de%2BQXNGb8ZzttUwHF4qLcHOTdp5ApYLRIeNHheCOZoRpIRBqsWIOLAoOq0yUfkWejxm%2FCL3OMur2hgrKQ5QlGp%2F1yYuS&X-Amz-Signature=2c32ade66afe99630de8aae70befbbde22dfcf42ceff18d63e0f9a954e3440f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTXXKJI%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMC3B9SNveVq4GKb0a3riTJZRlfIXe5jYQx8MAmcxz9AiA3y3cbNspIL8AGkGpKefiMJJJLj2eG%2BARh0yh3OB5G9ir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMDCbOehlT5MMNgpSvKtwDjnh%2FA0Q7qrrPe3FfIe%2FB5ra6%2Fau2boZ1hoDMXJRpiAZOTc%2BNVBhrft9ehPQZXEptL68GgvrgR8Lcg30Q7Rk1K59TZSRBww8YwQ47LWlvBTDspi5fhTWdGJMrPXO9tOfKlhvcbC4qVW69SI2LbAI%2Fo1mR3pH2F95Fa8YU5Y2Jqb5imQRDlcDMkjwByFTvH8s3LCLviZZMdAs2qLSKYsgtzvpU00kGUjtHIWVimoAVNIQTQMS2YiNazJvEbQAAUdobpaicCoCksgRFUs6l8t%2FykGVYHdvVunjr77TRDVcNgxAp%2Bo%2FCzXkwVFd5ncwt%2FEpH2UeGnxmpRfLZecuXmCOm9Zvl%2BxOUZFwm01FTs4Mtpscu8t9YdIF0IVZryDTPF7zn5tBJM1kWcSiOXFPwzX%2BumxIamlizdZQkiEVnnZ7332L%2B%2BnYPUqmSnCHWxVetETspPynpLQEIQ1OC8NgxJ6%2FC6QZZp6Bh8EigdzP9tpL%2BmfYjm6LRv2TTb3kQ%2BvQq6%2B0upvWl2RqBMvUWjItYsj5MD1Nd%2BR18LbhVipvg975lhkMb2IY88I6buhK5SP1ziESE%2BRljCWdjEJ6WiTez0JykZPb2Dgp%2BzP2EzANX1sy%2BcKJIFfDFZet%2B4qg2hXcw9sOcvwY6pgGD%2FkeherUV7ftSyzy6vKLFRIPe9%2Bkt5JrSD5shHN2HA3Z6qKHWvrSTrl6o9%2BsO%2BpmniBAaw61tSKhNGOe6QXiwAyKHve2Nw7ueuMRCyVYMRfD%2BKzR4hvIzTbey97OFcSP9de%2BQXNGb8ZzttUwHF4qLcHOTdp5ApYLRIeNHheCOZoRpIRBqsWIOLAoOq0yUfkWejxm%2FCL3OMur2hgrKQ5QlGp%2F1yYuS&X-Amz-Signature=ea96d1b0af83b03f961a4362d56f83cf4bcc2c71311951195f132c0c4c5288b5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTXXKJI%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMC3B9SNveVq4GKb0a3riTJZRlfIXe5jYQx8MAmcxz9AiA3y3cbNspIL8AGkGpKefiMJJJLj2eG%2BARh0yh3OB5G9ir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMDCbOehlT5MMNgpSvKtwDjnh%2FA0Q7qrrPe3FfIe%2FB5ra6%2Fau2boZ1hoDMXJRpiAZOTc%2BNVBhrft9ehPQZXEptL68GgvrgR8Lcg30Q7Rk1K59TZSRBww8YwQ47LWlvBTDspi5fhTWdGJMrPXO9tOfKlhvcbC4qVW69SI2LbAI%2Fo1mR3pH2F95Fa8YU5Y2Jqb5imQRDlcDMkjwByFTvH8s3LCLviZZMdAs2qLSKYsgtzvpU00kGUjtHIWVimoAVNIQTQMS2YiNazJvEbQAAUdobpaicCoCksgRFUs6l8t%2FykGVYHdvVunjr77TRDVcNgxAp%2Bo%2FCzXkwVFd5ncwt%2FEpH2UeGnxmpRfLZecuXmCOm9Zvl%2BxOUZFwm01FTs4Mtpscu8t9YdIF0IVZryDTPF7zn5tBJM1kWcSiOXFPwzX%2BumxIamlizdZQkiEVnnZ7332L%2B%2BnYPUqmSnCHWxVetETspPynpLQEIQ1OC8NgxJ6%2FC6QZZp6Bh8EigdzP9tpL%2BmfYjm6LRv2TTb3kQ%2BvQq6%2B0upvWl2RqBMvUWjItYsj5MD1Nd%2BR18LbhVipvg975lhkMb2IY88I6buhK5SP1ziESE%2BRljCWdjEJ6WiTez0JykZPb2Dgp%2BzP2EzANX1sy%2BcKJIFfDFZet%2B4qg2hXcw9sOcvwY6pgGD%2FkeherUV7ftSyzy6vKLFRIPe9%2Bkt5JrSD5shHN2HA3Z6qKHWvrSTrl6o9%2BsO%2BpmniBAaw61tSKhNGOe6QXiwAyKHve2Nw7ueuMRCyVYMRfD%2BKzR4hvIzTbey97OFcSP9de%2BQXNGb8ZzttUwHF4qLcHOTdp5ApYLRIeNHheCOZoRpIRBqsWIOLAoOq0yUfkWejxm%2FCL3OMur2hgrKQ5QlGp%2F1yYuS&X-Amz-Signature=f9b215d14471b96f104a8d74bb25e5ab101638a6ba332a13ac8159ed10e44ef6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
