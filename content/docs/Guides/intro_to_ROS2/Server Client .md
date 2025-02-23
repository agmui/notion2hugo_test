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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W5F2GHO%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiiPM8FNJdsNvtpqSPxs6o79ZPqbGO9e2uQy%2Fno%2Bo6RAIhAIRq0eubQuds9yXInCWlcS0Gh3o3Wi1Ni%2BeaA6G5i8BEKv8DCBMQABoMNjM3NDIzMTgzODA1IgzWAHJdPXcoSkT%2B01Aq3AOdR2%2BMfcSVP%2BEyHWTyUcfq2pKFnllUAJJPWU2Qu%2BsZkw%2FHxfO1vm6jXGkiHsZx%2FuezCih5Jpw3IyBENlu4LOTNSU4%2BcVkoz0eeTgEoqm6dMyk4o5d8U44jlOGYbXAfh9NsOtkVr5I9%2FRjH7jp4C2JQOhDjoabWWZJ4ihRUFcg%2BVnI%2FrNpyPbOECIKjHSvwp0tzkbDnO5kUZHRi7H%2FlhfzhZvLOK40CzdAiuTRXaGbaGP1Zrm2A0315cwoOubR2%2F5hX4RzOYCKxvv0RDgD3KfNHmHFJmyJ5fqum7dXv9qcTtApYdXqBBw3WZFg%2BgboXC%2FECXrsE7hwXBfBR6ngl0325yhbYFNFAaY1IcVj9tZvk3Zd8kKsGUAmmQNY939MveUTuG6hXo6NkTJCei6niHep6xCxwVdPPNapbF1AYRrSVGtXf341lBC%2BtY7%2FbVNIl9f0EQw4RrlWsxfxyZjLvdjH%2BzMe3%2FLIdBZmJkVu3AM%2FSwj2B4sVe1WtKXZI8XLHKcM4p0p4QlOOCX9clanW618ghZbh9%2BD5I3I5J9%2FTUSo9OEldrw3dclcjJVvvXVz3tcijzWpx6ufCsmZFj4mhUDl1n0BSkqVDNGkfzfVGVbIeXB1PWW3%2F0jBg2vQcFNTDP4eu9BjqkAfe88WjeCml6AtWCQuceOwvi0NgyUlg%2Fvxp8VOLxpIawdwNIg6P3fHZvdY0hjw7jZS%2Bbiq6P8Hmf3GUGrFqqPQWZ58iJMws0%2BI7GRb6CfUyfFviOK%2FsqfAmRKfexmDgZgakZr8b9opXaFSbN%2ByRw7Wdv89T2IuoSdAN7r4IEDLWVwT4ohNS%2BheL%2BOIj%2BSHTRYzUkfg6CYrTnDLCzjaIz%2B4fgD4WP&X-Amz-Signature=1d4042bbed278165ba030dfaa811fc121d503b8abf7c7397b2d2171ccc4556bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W5F2GHO%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiiPM8FNJdsNvtpqSPxs6o79ZPqbGO9e2uQy%2Fno%2Bo6RAIhAIRq0eubQuds9yXInCWlcS0Gh3o3Wi1Ni%2BeaA6G5i8BEKv8DCBMQABoMNjM3NDIzMTgzODA1IgzWAHJdPXcoSkT%2B01Aq3AOdR2%2BMfcSVP%2BEyHWTyUcfq2pKFnllUAJJPWU2Qu%2BsZkw%2FHxfO1vm6jXGkiHsZx%2FuezCih5Jpw3IyBENlu4LOTNSU4%2BcVkoz0eeTgEoqm6dMyk4o5d8U44jlOGYbXAfh9NsOtkVr5I9%2FRjH7jp4C2JQOhDjoabWWZJ4ihRUFcg%2BVnI%2FrNpyPbOECIKjHSvwp0tzkbDnO5kUZHRi7H%2FlhfzhZvLOK40CzdAiuTRXaGbaGP1Zrm2A0315cwoOubR2%2F5hX4RzOYCKxvv0RDgD3KfNHmHFJmyJ5fqum7dXv9qcTtApYdXqBBw3WZFg%2BgboXC%2FECXrsE7hwXBfBR6ngl0325yhbYFNFAaY1IcVj9tZvk3Zd8kKsGUAmmQNY939MveUTuG6hXo6NkTJCei6niHep6xCxwVdPPNapbF1AYRrSVGtXf341lBC%2BtY7%2FbVNIl9f0EQw4RrlWsxfxyZjLvdjH%2BzMe3%2FLIdBZmJkVu3AM%2FSwj2B4sVe1WtKXZI8XLHKcM4p0p4QlOOCX9clanW618ghZbh9%2BD5I3I5J9%2FTUSo9OEldrw3dclcjJVvvXVz3tcijzWpx6ufCsmZFj4mhUDl1n0BSkqVDNGkfzfVGVbIeXB1PWW3%2F0jBg2vQcFNTDP4eu9BjqkAfe88WjeCml6AtWCQuceOwvi0NgyUlg%2Fvxp8VOLxpIawdwNIg6P3fHZvdY0hjw7jZS%2Bbiq6P8Hmf3GUGrFqqPQWZ58iJMws0%2BI7GRb6CfUyfFviOK%2FsqfAmRKfexmDgZgakZr8b9opXaFSbN%2ByRw7Wdv89T2IuoSdAN7r4IEDLWVwT4ohNS%2BheL%2BOIj%2BSHTRYzUkfg6CYrTnDLCzjaIz%2B4fgD4WP&X-Amz-Signature=201e4a4103514d8a13b36a4e5a12b09015afca9a776446de7fb357a377700bbc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W5F2GHO%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiiPM8FNJdsNvtpqSPxs6o79ZPqbGO9e2uQy%2Fno%2Bo6RAIhAIRq0eubQuds9yXInCWlcS0Gh3o3Wi1Ni%2BeaA6G5i8BEKv8DCBMQABoMNjM3NDIzMTgzODA1IgzWAHJdPXcoSkT%2B01Aq3AOdR2%2BMfcSVP%2BEyHWTyUcfq2pKFnllUAJJPWU2Qu%2BsZkw%2FHxfO1vm6jXGkiHsZx%2FuezCih5Jpw3IyBENlu4LOTNSU4%2BcVkoz0eeTgEoqm6dMyk4o5d8U44jlOGYbXAfh9NsOtkVr5I9%2FRjH7jp4C2JQOhDjoabWWZJ4ihRUFcg%2BVnI%2FrNpyPbOECIKjHSvwp0tzkbDnO5kUZHRi7H%2FlhfzhZvLOK40CzdAiuTRXaGbaGP1Zrm2A0315cwoOubR2%2F5hX4RzOYCKxvv0RDgD3KfNHmHFJmyJ5fqum7dXv9qcTtApYdXqBBw3WZFg%2BgboXC%2FECXrsE7hwXBfBR6ngl0325yhbYFNFAaY1IcVj9tZvk3Zd8kKsGUAmmQNY939MveUTuG6hXo6NkTJCei6niHep6xCxwVdPPNapbF1AYRrSVGtXf341lBC%2BtY7%2FbVNIl9f0EQw4RrlWsxfxyZjLvdjH%2BzMe3%2FLIdBZmJkVu3AM%2FSwj2B4sVe1WtKXZI8XLHKcM4p0p4QlOOCX9clanW618ghZbh9%2BD5I3I5J9%2FTUSo9OEldrw3dclcjJVvvXVz3tcijzWpx6ufCsmZFj4mhUDl1n0BSkqVDNGkfzfVGVbIeXB1PWW3%2F0jBg2vQcFNTDP4eu9BjqkAfe88WjeCml6AtWCQuceOwvi0NgyUlg%2Fvxp8VOLxpIawdwNIg6P3fHZvdY0hjw7jZS%2Bbiq6P8Hmf3GUGrFqqPQWZ58iJMws0%2BI7GRb6CfUyfFviOK%2FsqfAmRKfexmDgZgakZr8b9opXaFSbN%2ByRw7Wdv89T2IuoSdAN7r4IEDLWVwT4ohNS%2BheL%2BOIj%2BSHTRYzUkfg6CYrTnDLCzjaIz%2B4fgD4WP&X-Amz-Signature=2a26c4ebbc9ca574ded3121111ad93c0d507c8d5b9e7d2836a94e966c3927755&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W5F2GHO%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiiPM8FNJdsNvtpqSPxs6o79ZPqbGO9e2uQy%2Fno%2Bo6RAIhAIRq0eubQuds9yXInCWlcS0Gh3o3Wi1Ni%2BeaA6G5i8BEKv8DCBMQABoMNjM3NDIzMTgzODA1IgzWAHJdPXcoSkT%2B01Aq3AOdR2%2BMfcSVP%2BEyHWTyUcfq2pKFnllUAJJPWU2Qu%2BsZkw%2FHxfO1vm6jXGkiHsZx%2FuezCih5Jpw3IyBENlu4LOTNSU4%2BcVkoz0eeTgEoqm6dMyk4o5d8U44jlOGYbXAfh9NsOtkVr5I9%2FRjH7jp4C2JQOhDjoabWWZJ4ihRUFcg%2BVnI%2FrNpyPbOECIKjHSvwp0tzkbDnO5kUZHRi7H%2FlhfzhZvLOK40CzdAiuTRXaGbaGP1Zrm2A0315cwoOubR2%2F5hX4RzOYCKxvv0RDgD3KfNHmHFJmyJ5fqum7dXv9qcTtApYdXqBBw3WZFg%2BgboXC%2FECXrsE7hwXBfBR6ngl0325yhbYFNFAaY1IcVj9tZvk3Zd8kKsGUAmmQNY939MveUTuG6hXo6NkTJCei6niHep6xCxwVdPPNapbF1AYRrSVGtXf341lBC%2BtY7%2FbVNIl9f0EQw4RrlWsxfxyZjLvdjH%2BzMe3%2FLIdBZmJkVu3AM%2FSwj2B4sVe1WtKXZI8XLHKcM4p0p4QlOOCX9clanW618ghZbh9%2BD5I3I5J9%2FTUSo9OEldrw3dclcjJVvvXVz3tcijzWpx6ufCsmZFj4mhUDl1n0BSkqVDNGkfzfVGVbIeXB1PWW3%2F0jBg2vQcFNTDP4eu9BjqkAfe88WjeCml6AtWCQuceOwvi0NgyUlg%2Fvxp8VOLxpIawdwNIg6P3fHZvdY0hjw7jZS%2Bbiq6P8Hmf3GUGrFqqPQWZ58iJMws0%2BI7GRb6CfUyfFviOK%2FsqfAmRKfexmDgZgakZr8b9opXaFSbN%2ByRw7Wdv89T2IuoSdAN7r4IEDLWVwT4ohNS%2BheL%2BOIj%2BSHTRYzUkfg6CYrTnDLCzjaIz%2B4fgD4WP&X-Amz-Signature=12de84399ec8a49f226bc8d1fab14f117480b63794119558913b5d6ef44fc328&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W5F2GHO%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiiPM8FNJdsNvtpqSPxs6o79ZPqbGO9e2uQy%2Fno%2Bo6RAIhAIRq0eubQuds9yXInCWlcS0Gh3o3Wi1Ni%2BeaA6G5i8BEKv8DCBMQABoMNjM3NDIzMTgzODA1IgzWAHJdPXcoSkT%2B01Aq3AOdR2%2BMfcSVP%2BEyHWTyUcfq2pKFnllUAJJPWU2Qu%2BsZkw%2FHxfO1vm6jXGkiHsZx%2FuezCih5Jpw3IyBENlu4LOTNSU4%2BcVkoz0eeTgEoqm6dMyk4o5d8U44jlOGYbXAfh9NsOtkVr5I9%2FRjH7jp4C2JQOhDjoabWWZJ4ihRUFcg%2BVnI%2FrNpyPbOECIKjHSvwp0tzkbDnO5kUZHRi7H%2FlhfzhZvLOK40CzdAiuTRXaGbaGP1Zrm2A0315cwoOubR2%2F5hX4RzOYCKxvv0RDgD3KfNHmHFJmyJ5fqum7dXv9qcTtApYdXqBBw3WZFg%2BgboXC%2FECXrsE7hwXBfBR6ngl0325yhbYFNFAaY1IcVj9tZvk3Zd8kKsGUAmmQNY939MveUTuG6hXo6NkTJCei6niHep6xCxwVdPPNapbF1AYRrSVGtXf341lBC%2BtY7%2FbVNIl9f0EQw4RrlWsxfxyZjLvdjH%2BzMe3%2FLIdBZmJkVu3AM%2FSwj2B4sVe1WtKXZI8XLHKcM4p0p4QlOOCX9clanW618ghZbh9%2BD5I3I5J9%2FTUSo9OEldrw3dclcjJVvvXVz3tcijzWpx6ufCsmZFj4mhUDl1n0BSkqVDNGkfzfVGVbIeXB1PWW3%2F0jBg2vQcFNTDP4eu9BjqkAfe88WjeCml6AtWCQuceOwvi0NgyUlg%2Fvxp8VOLxpIawdwNIg6P3fHZvdY0hjw7jZS%2Bbiq6P8Hmf3GUGrFqqPQWZ58iJMws0%2BI7GRb6CfUyfFviOK%2FsqfAmRKfexmDgZgakZr8b9opXaFSbN%2ByRw7Wdv89T2IuoSdAN7r4IEDLWVwT4ohNS%2BheL%2BOIj%2BSHTRYzUkfg6CYrTnDLCzjaIz%2B4fgD4WP&X-Amz-Signature=9934f4c5c8c0f5878930fb567221ed44d5985e69d2483028ff88f272be22167b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
