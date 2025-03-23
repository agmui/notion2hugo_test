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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2LNUIDP%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T022302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEAmZ9fuhXKP0oTjRSRt681GK%2BWuHLsuGcINT2Zpj0LwAiEA9OuxV1bQjfDvKUHHLsJfi0hEFOcS0scHdHM0yQ608Y0qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzEP6KuhbPPdVI7PircA3a2nNlSF1q29cn3EMHfPsi4WEbFA68tTg6nWLfF7bGvsbmqG4%2Fht8G78RT954ZT2T8YKU%2FkD9QE7xElqDkuTZoQHiPBQdMsb2oM%2BwOLNMJayeNCB56W3YMrBKVXnCI%2FztHWEXlqu8c%2FnKbLs82AbAkjurl2SIwcF4v6KJXlpSFVjIjqVrXScBwc3%2BknnGP%2FZ%2BARgxFx8VOXIpip7kLOLoNbJTrUrWvHraWDF%2BDmfjklKo%2B691J9yeOsHOe8HDQtZiOoe6iHGaripYZ2ppUNAsjfJE7QxRFC5pESHtG07eAdF%2BrHDjCjCrS4y7e2p%2BWA7C%2FI5M1xnuFg%2BuCGV3cKyX1JH5OZ%2FakIob3ESldeTZbh%2BGgrlkJCVM3l09xtmrhKELm9UuAzI49tKG0jarxYGGCrEBrZivaUaNFxoIVYhSRUw3%2FlbRpuuf5qjVSm4FKQkrUGpnVewetTsoyMWqQ0xFFZ7vB0PO%2B4Eaen0gHNlOZCU7tnHVh5WP6HpHQT4YSzCGMuYmVERNWKxsAeibpJqPVCOWitX22OX6YAuFi73WmFkGxZb%2FlnpT5dKt4K6rpQvU8QiByzzv23XSdNH%2FJB%2BoruXo3b64hZ6CAsr9%2FMiqs9P%2Be0n2uBrQ1IwVoGMLLZ%2Fb4GOqUBLy2%2BhhJ0CoMmlQZliulCFgEjPuq%2BuhyFVfiASzKCeaOqs96d%2BeKAOp2rbxufjKP0TY5bC1mKF3lCjrF7buWLq4xoA5YcBhd%2Bz1cvi80KwnZjZemhMKBqWhwt9usc0dd8K6Eu5K1gFOAwzfKQO4ENDPRwJNZ672igStT0ruRCcx73eYE7q0BAmTCdWFms59qMQ3U5dtnAi84OeStKbErHTYikJknj&X-Amz-Signature=24df53b66b11d238b29389f71ac352d029c72d3f0e7554abf9c3f7d433373992&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2LNUIDP%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T022302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEAmZ9fuhXKP0oTjRSRt681GK%2BWuHLsuGcINT2Zpj0LwAiEA9OuxV1bQjfDvKUHHLsJfi0hEFOcS0scHdHM0yQ608Y0qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzEP6KuhbPPdVI7PircA3a2nNlSF1q29cn3EMHfPsi4WEbFA68tTg6nWLfF7bGvsbmqG4%2Fht8G78RT954ZT2T8YKU%2FkD9QE7xElqDkuTZoQHiPBQdMsb2oM%2BwOLNMJayeNCB56W3YMrBKVXnCI%2FztHWEXlqu8c%2FnKbLs82AbAkjurl2SIwcF4v6KJXlpSFVjIjqVrXScBwc3%2BknnGP%2FZ%2BARgxFx8VOXIpip7kLOLoNbJTrUrWvHraWDF%2BDmfjklKo%2B691J9yeOsHOe8HDQtZiOoe6iHGaripYZ2ppUNAsjfJE7QxRFC5pESHtG07eAdF%2BrHDjCjCrS4y7e2p%2BWA7C%2FI5M1xnuFg%2BuCGV3cKyX1JH5OZ%2FakIob3ESldeTZbh%2BGgrlkJCVM3l09xtmrhKELm9UuAzI49tKG0jarxYGGCrEBrZivaUaNFxoIVYhSRUw3%2FlbRpuuf5qjVSm4FKQkrUGpnVewetTsoyMWqQ0xFFZ7vB0PO%2B4Eaen0gHNlOZCU7tnHVh5WP6HpHQT4YSzCGMuYmVERNWKxsAeibpJqPVCOWitX22OX6YAuFi73WmFkGxZb%2FlnpT5dKt4K6rpQvU8QiByzzv23XSdNH%2FJB%2BoruXo3b64hZ6CAsr9%2FMiqs9P%2Be0n2uBrQ1IwVoGMLLZ%2Fb4GOqUBLy2%2BhhJ0CoMmlQZliulCFgEjPuq%2BuhyFVfiASzKCeaOqs96d%2BeKAOp2rbxufjKP0TY5bC1mKF3lCjrF7buWLq4xoA5YcBhd%2Bz1cvi80KwnZjZemhMKBqWhwt9usc0dd8K6Eu5K1gFOAwzfKQO4ENDPRwJNZ672igStT0ruRCcx73eYE7q0BAmTCdWFms59qMQ3U5dtnAi84OeStKbErHTYikJknj&X-Amz-Signature=ae4bce0224a87e15c61f4da0b979c9f0cbbca7e653937433ca4de09ade42fbb3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2LNUIDP%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T022302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEAmZ9fuhXKP0oTjRSRt681GK%2BWuHLsuGcINT2Zpj0LwAiEA9OuxV1bQjfDvKUHHLsJfi0hEFOcS0scHdHM0yQ608Y0qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzEP6KuhbPPdVI7PircA3a2nNlSF1q29cn3EMHfPsi4WEbFA68tTg6nWLfF7bGvsbmqG4%2Fht8G78RT954ZT2T8YKU%2FkD9QE7xElqDkuTZoQHiPBQdMsb2oM%2BwOLNMJayeNCB56W3YMrBKVXnCI%2FztHWEXlqu8c%2FnKbLs82AbAkjurl2SIwcF4v6KJXlpSFVjIjqVrXScBwc3%2BknnGP%2FZ%2BARgxFx8VOXIpip7kLOLoNbJTrUrWvHraWDF%2BDmfjklKo%2B691J9yeOsHOe8HDQtZiOoe6iHGaripYZ2ppUNAsjfJE7QxRFC5pESHtG07eAdF%2BrHDjCjCrS4y7e2p%2BWA7C%2FI5M1xnuFg%2BuCGV3cKyX1JH5OZ%2FakIob3ESldeTZbh%2BGgrlkJCVM3l09xtmrhKELm9UuAzI49tKG0jarxYGGCrEBrZivaUaNFxoIVYhSRUw3%2FlbRpuuf5qjVSm4FKQkrUGpnVewetTsoyMWqQ0xFFZ7vB0PO%2B4Eaen0gHNlOZCU7tnHVh5WP6HpHQT4YSzCGMuYmVERNWKxsAeibpJqPVCOWitX22OX6YAuFi73WmFkGxZb%2FlnpT5dKt4K6rpQvU8QiByzzv23XSdNH%2FJB%2BoruXo3b64hZ6CAsr9%2FMiqs9P%2Be0n2uBrQ1IwVoGMLLZ%2Fb4GOqUBLy2%2BhhJ0CoMmlQZliulCFgEjPuq%2BuhyFVfiASzKCeaOqs96d%2BeKAOp2rbxufjKP0TY5bC1mKF3lCjrF7buWLq4xoA5YcBhd%2Bz1cvi80KwnZjZemhMKBqWhwt9usc0dd8K6Eu5K1gFOAwzfKQO4ENDPRwJNZ672igStT0ruRCcx73eYE7q0BAmTCdWFms59qMQ3U5dtnAi84OeStKbErHTYikJknj&X-Amz-Signature=d67fbb8bf76101f5f544d22eb14246cbbd44996b54a1138ecadc9eb324289548&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2LNUIDP%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T022302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEAmZ9fuhXKP0oTjRSRt681GK%2BWuHLsuGcINT2Zpj0LwAiEA9OuxV1bQjfDvKUHHLsJfi0hEFOcS0scHdHM0yQ608Y0qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzEP6KuhbPPdVI7PircA3a2nNlSF1q29cn3EMHfPsi4WEbFA68tTg6nWLfF7bGvsbmqG4%2Fht8G78RT954ZT2T8YKU%2FkD9QE7xElqDkuTZoQHiPBQdMsb2oM%2BwOLNMJayeNCB56W3YMrBKVXnCI%2FztHWEXlqu8c%2FnKbLs82AbAkjurl2SIwcF4v6KJXlpSFVjIjqVrXScBwc3%2BknnGP%2FZ%2BARgxFx8VOXIpip7kLOLoNbJTrUrWvHraWDF%2BDmfjklKo%2B691J9yeOsHOe8HDQtZiOoe6iHGaripYZ2ppUNAsjfJE7QxRFC5pESHtG07eAdF%2BrHDjCjCrS4y7e2p%2BWA7C%2FI5M1xnuFg%2BuCGV3cKyX1JH5OZ%2FakIob3ESldeTZbh%2BGgrlkJCVM3l09xtmrhKELm9UuAzI49tKG0jarxYGGCrEBrZivaUaNFxoIVYhSRUw3%2FlbRpuuf5qjVSm4FKQkrUGpnVewetTsoyMWqQ0xFFZ7vB0PO%2B4Eaen0gHNlOZCU7tnHVh5WP6HpHQT4YSzCGMuYmVERNWKxsAeibpJqPVCOWitX22OX6YAuFi73WmFkGxZb%2FlnpT5dKt4K6rpQvU8QiByzzv23XSdNH%2FJB%2BoruXo3b64hZ6CAsr9%2FMiqs9P%2Be0n2uBrQ1IwVoGMLLZ%2Fb4GOqUBLy2%2BhhJ0CoMmlQZliulCFgEjPuq%2BuhyFVfiASzKCeaOqs96d%2BeKAOp2rbxufjKP0TY5bC1mKF3lCjrF7buWLq4xoA5YcBhd%2Bz1cvi80KwnZjZemhMKBqWhwt9usc0dd8K6Eu5K1gFOAwzfKQO4ENDPRwJNZ672igStT0ruRCcx73eYE7q0BAmTCdWFms59qMQ3U5dtnAi84OeStKbErHTYikJknj&X-Amz-Signature=c5f418052e9b17676956225656c5a2da5660513e9d2f9df1aaeec2b69efc00c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2LNUIDP%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T022302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEAmZ9fuhXKP0oTjRSRt681GK%2BWuHLsuGcINT2Zpj0LwAiEA9OuxV1bQjfDvKUHHLsJfi0hEFOcS0scHdHM0yQ608Y0qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzEP6KuhbPPdVI7PircA3a2nNlSF1q29cn3EMHfPsi4WEbFA68tTg6nWLfF7bGvsbmqG4%2Fht8G78RT954ZT2T8YKU%2FkD9QE7xElqDkuTZoQHiPBQdMsb2oM%2BwOLNMJayeNCB56W3YMrBKVXnCI%2FztHWEXlqu8c%2FnKbLs82AbAkjurl2SIwcF4v6KJXlpSFVjIjqVrXScBwc3%2BknnGP%2FZ%2BARgxFx8VOXIpip7kLOLoNbJTrUrWvHraWDF%2BDmfjklKo%2B691J9yeOsHOe8HDQtZiOoe6iHGaripYZ2ppUNAsjfJE7QxRFC5pESHtG07eAdF%2BrHDjCjCrS4y7e2p%2BWA7C%2FI5M1xnuFg%2BuCGV3cKyX1JH5OZ%2FakIob3ESldeTZbh%2BGgrlkJCVM3l09xtmrhKELm9UuAzI49tKG0jarxYGGCrEBrZivaUaNFxoIVYhSRUw3%2FlbRpuuf5qjVSm4FKQkrUGpnVewetTsoyMWqQ0xFFZ7vB0PO%2B4Eaen0gHNlOZCU7tnHVh5WP6HpHQT4YSzCGMuYmVERNWKxsAeibpJqPVCOWitX22OX6YAuFi73WmFkGxZb%2FlnpT5dKt4K6rpQvU8QiByzzv23XSdNH%2FJB%2BoruXo3b64hZ6CAsr9%2FMiqs9P%2Be0n2uBrQ1IwVoGMLLZ%2Fb4GOqUBLy2%2BhhJ0CoMmlQZliulCFgEjPuq%2BuhyFVfiASzKCeaOqs96d%2BeKAOp2rbxufjKP0TY5bC1mKF3lCjrF7buWLq4xoA5YcBhd%2Bz1cvi80KwnZjZemhMKBqWhwt9usc0dd8K6Eu5K1gFOAwzfKQO4ENDPRwJNZ672igStT0ruRCcx73eYE7q0BAmTCdWFms59qMQ3U5dtnAi84OeStKbErHTYikJknj&X-Amz-Signature=ba890c986e316228b9038402a61d8652677a9f626f55a47d85a5637067add97f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
