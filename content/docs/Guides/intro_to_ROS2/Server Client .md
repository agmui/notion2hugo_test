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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GTMBISE%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkXGazfQR4S11g51glMkG1UE2Q%2BUoYlsoMG23%2BUvdBVAIgFGkT3g9zF7%2Fr2fp8%2BAStzBQJbip2Xf1LiR2erINsGogqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQN2mVEEkXA8ilN4SrcAyx9BaAAZkHL%2BiWto79EEHIl837Rqr3pyhMVN1v464vAR7DA%2BAM6eNxh5KEe2CIvxIcTc2f%2BaywmOFLxPWvge08fvPTXMtUbJjtnEx8%2BLukP0ZlGTTSXSImJSgP7apD73WgNyw4AXhtfGeyHe8hqgl2PkHinltNwPIGi5J9twJ%2B9G%2BFIod4tjmUorjM6B70wldJhUD2lVhP7NeMuzYmickQMaXongUK9lOcEbe6XcJfhV1prQo77I%2B3MMFQTiA3Pk%2BIfyTd1%2BeNGWUHj1%2B6Ip6SjaRVaJem8t4KyeCVfZXx%2Bf7TfZEj9C0E1BqcLF6l44pR3h%2BMIMVacyHdnVj8HbrB4diy9zaojTIfyxZyRWghcG4HupTiCC5mOZ2g6xOWsB1xtoDdWm7ETKieA8Vdfz0KizuRkXrFxH1BTk4X7CoBCBKyvfxqNZKjCn86IL9Ly%2FBigSpBiaaQMzhkqqGilYGCvJbRCmpC7TBtMrOSx8l6DYFzpEdpQoKvJTzTkGFWoRa%2B1jiOWFFDjtJ9sVB68SDuizXF2QnNUZxBiV9QVFIbuQD9ptM48SJbQcrAbcJg%2Bw4FkOvwMUGBpK7VmMnEhRbWmUBSv0BZsQMSrqLJJcglP9qxlX7KEbS%2BAyneyMPuEisMGOqUBH6d9fhSjDk2ki6cCQ0mKUFz9fhLhk6y%2FKrsSn%2Fn06sATZgaqZEfqrsdMn9oEKqmAZftyyiHPz7WboDCh8pEQgor0vxKoRwdTzvS4mM8odFUzN%2BfTfa40Wn9y58QKqynOPx06C%2BQF1y4IjsGBBxT3G9JQTHDQDebVDNvWhgybeF0JdRkh7XMJrNDF0MzmT5eLYKv5cDp1JluEx%2BkQhG0GZeMbbAXH&X-Amz-Signature=54de375c093defbc90b3d04b6a94a901e334630cdbc6c890d1264c25383d192d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GTMBISE%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkXGazfQR4S11g51glMkG1UE2Q%2BUoYlsoMG23%2BUvdBVAIgFGkT3g9zF7%2Fr2fp8%2BAStzBQJbip2Xf1LiR2erINsGogqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQN2mVEEkXA8ilN4SrcAyx9BaAAZkHL%2BiWto79EEHIl837Rqr3pyhMVN1v464vAR7DA%2BAM6eNxh5KEe2CIvxIcTc2f%2BaywmOFLxPWvge08fvPTXMtUbJjtnEx8%2BLukP0ZlGTTSXSImJSgP7apD73WgNyw4AXhtfGeyHe8hqgl2PkHinltNwPIGi5J9twJ%2B9G%2BFIod4tjmUorjM6B70wldJhUD2lVhP7NeMuzYmickQMaXongUK9lOcEbe6XcJfhV1prQo77I%2B3MMFQTiA3Pk%2BIfyTd1%2BeNGWUHj1%2B6Ip6SjaRVaJem8t4KyeCVfZXx%2Bf7TfZEj9C0E1BqcLF6l44pR3h%2BMIMVacyHdnVj8HbrB4diy9zaojTIfyxZyRWghcG4HupTiCC5mOZ2g6xOWsB1xtoDdWm7ETKieA8Vdfz0KizuRkXrFxH1BTk4X7CoBCBKyvfxqNZKjCn86IL9Ly%2FBigSpBiaaQMzhkqqGilYGCvJbRCmpC7TBtMrOSx8l6DYFzpEdpQoKvJTzTkGFWoRa%2B1jiOWFFDjtJ9sVB68SDuizXF2QnNUZxBiV9QVFIbuQD9ptM48SJbQcrAbcJg%2Bw4FkOvwMUGBpK7VmMnEhRbWmUBSv0BZsQMSrqLJJcglP9qxlX7KEbS%2BAyneyMPuEisMGOqUBH6d9fhSjDk2ki6cCQ0mKUFz9fhLhk6y%2FKrsSn%2Fn06sATZgaqZEfqrsdMn9oEKqmAZftyyiHPz7WboDCh8pEQgor0vxKoRwdTzvS4mM8odFUzN%2BfTfa40Wn9y58QKqynOPx06C%2BQF1y4IjsGBBxT3G9JQTHDQDebVDNvWhgybeF0JdRkh7XMJrNDF0MzmT5eLYKv5cDp1JluEx%2BkQhG0GZeMbbAXH&X-Amz-Signature=32a7e1a6f9ca4e7a5d4b1ff0e48929febd4122934d14ec5d88764d1296d7ae03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GTMBISE%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkXGazfQR4S11g51glMkG1UE2Q%2BUoYlsoMG23%2BUvdBVAIgFGkT3g9zF7%2Fr2fp8%2BAStzBQJbip2Xf1LiR2erINsGogqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQN2mVEEkXA8ilN4SrcAyx9BaAAZkHL%2BiWto79EEHIl837Rqr3pyhMVN1v464vAR7DA%2BAM6eNxh5KEe2CIvxIcTc2f%2BaywmOFLxPWvge08fvPTXMtUbJjtnEx8%2BLukP0ZlGTTSXSImJSgP7apD73WgNyw4AXhtfGeyHe8hqgl2PkHinltNwPIGi5J9twJ%2B9G%2BFIod4tjmUorjM6B70wldJhUD2lVhP7NeMuzYmickQMaXongUK9lOcEbe6XcJfhV1prQo77I%2B3MMFQTiA3Pk%2BIfyTd1%2BeNGWUHj1%2B6Ip6SjaRVaJem8t4KyeCVfZXx%2Bf7TfZEj9C0E1BqcLF6l44pR3h%2BMIMVacyHdnVj8HbrB4diy9zaojTIfyxZyRWghcG4HupTiCC5mOZ2g6xOWsB1xtoDdWm7ETKieA8Vdfz0KizuRkXrFxH1BTk4X7CoBCBKyvfxqNZKjCn86IL9Ly%2FBigSpBiaaQMzhkqqGilYGCvJbRCmpC7TBtMrOSx8l6DYFzpEdpQoKvJTzTkGFWoRa%2B1jiOWFFDjtJ9sVB68SDuizXF2QnNUZxBiV9QVFIbuQD9ptM48SJbQcrAbcJg%2Bw4FkOvwMUGBpK7VmMnEhRbWmUBSv0BZsQMSrqLJJcglP9qxlX7KEbS%2BAyneyMPuEisMGOqUBH6d9fhSjDk2ki6cCQ0mKUFz9fhLhk6y%2FKrsSn%2Fn06sATZgaqZEfqrsdMn9oEKqmAZftyyiHPz7WboDCh8pEQgor0vxKoRwdTzvS4mM8odFUzN%2BfTfa40Wn9y58QKqynOPx06C%2BQF1y4IjsGBBxT3G9JQTHDQDebVDNvWhgybeF0JdRkh7XMJrNDF0MzmT5eLYKv5cDp1JluEx%2BkQhG0GZeMbbAXH&X-Amz-Signature=14ff332badc75db3c1a413cd1f002f767b68cad8b56df4aa13f45bfc23815bf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GTMBISE%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkXGazfQR4S11g51glMkG1UE2Q%2BUoYlsoMG23%2BUvdBVAIgFGkT3g9zF7%2Fr2fp8%2BAStzBQJbip2Xf1LiR2erINsGogqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQN2mVEEkXA8ilN4SrcAyx9BaAAZkHL%2BiWto79EEHIl837Rqr3pyhMVN1v464vAR7DA%2BAM6eNxh5KEe2CIvxIcTc2f%2BaywmOFLxPWvge08fvPTXMtUbJjtnEx8%2BLukP0ZlGTTSXSImJSgP7apD73WgNyw4AXhtfGeyHe8hqgl2PkHinltNwPIGi5J9twJ%2B9G%2BFIod4tjmUorjM6B70wldJhUD2lVhP7NeMuzYmickQMaXongUK9lOcEbe6XcJfhV1prQo77I%2B3MMFQTiA3Pk%2BIfyTd1%2BeNGWUHj1%2B6Ip6SjaRVaJem8t4KyeCVfZXx%2Bf7TfZEj9C0E1BqcLF6l44pR3h%2BMIMVacyHdnVj8HbrB4diy9zaojTIfyxZyRWghcG4HupTiCC5mOZ2g6xOWsB1xtoDdWm7ETKieA8Vdfz0KizuRkXrFxH1BTk4X7CoBCBKyvfxqNZKjCn86IL9Ly%2FBigSpBiaaQMzhkqqGilYGCvJbRCmpC7TBtMrOSx8l6DYFzpEdpQoKvJTzTkGFWoRa%2B1jiOWFFDjtJ9sVB68SDuizXF2QnNUZxBiV9QVFIbuQD9ptM48SJbQcrAbcJg%2Bw4FkOvwMUGBpK7VmMnEhRbWmUBSv0BZsQMSrqLJJcglP9qxlX7KEbS%2BAyneyMPuEisMGOqUBH6d9fhSjDk2ki6cCQ0mKUFz9fhLhk6y%2FKrsSn%2Fn06sATZgaqZEfqrsdMn9oEKqmAZftyyiHPz7WboDCh8pEQgor0vxKoRwdTzvS4mM8odFUzN%2BfTfa40Wn9y58QKqynOPx06C%2BQF1y4IjsGBBxT3G9JQTHDQDebVDNvWhgybeF0JdRkh7XMJrNDF0MzmT5eLYKv5cDp1JluEx%2BkQhG0GZeMbbAXH&X-Amz-Signature=dbf350b831d10d787da426c399ad80dce1137cc4c66f33481a4e8a07a8ab13da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GTMBISE%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkXGazfQR4S11g51glMkG1UE2Q%2BUoYlsoMG23%2BUvdBVAIgFGkT3g9zF7%2Fr2fp8%2BAStzBQJbip2Xf1LiR2erINsGogqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQN2mVEEkXA8ilN4SrcAyx9BaAAZkHL%2BiWto79EEHIl837Rqr3pyhMVN1v464vAR7DA%2BAM6eNxh5KEe2CIvxIcTc2f%2BaywmOFLxPWvge08fvPTXMtUbJjtnEx8%2BLukP0ZlGTTSXSImJSgP7apD73WgNyw4AXhtfGeyHe8hqgl2PkHinltNwPIGi5J9twJ%2B9G%2BFIod4tjmUorjM6B70wldJhUD2lVhP7NeMuzYmickQMaXongUK9lOcEbe6XcJfhV1prQo77I%2B3MMFQTiA3Pk%2BIfyTd1%2BeNGWUHj1%2B6Ip6SjaRVaJem8t4KyeCVfZXx%2Bf7TfZEj9C0E1BqcLF6l44pR3h%2BMIMVacyHdnVj8HbrB4diy9zaojTIfyxZyRWghcG4HupTiCC5mOZ2g6xOWsB1xtoDdWm7ETKieA8Vdfz0KizuRkXrFxH1BTk4X7CoBCBKyvfxqNZKjCn86IL9Ly%2FBigSpBiaaQMzhkqqGilYGCvJbRCmpC7TBtMrOSx8l6DYFzpEdpQoKvJTzTkGFWoRa%2B1jiOWFFDjtJ9sVB68SDuizXF2QnNUZxBiV9QVFIbuQD9ptM48SJbQcrAbcJg%2Bw4FkOvwMUGBpK7VmMnEhRbWmUBSv0BZsQMSrqLJJcglP9qxlX7KEbS%2BAyneyMPuEisMGOqUBH6d9fhSjDk2ki6cCQ0mKUFz9fhLhk6y%2FKrsSn%2Fn06sATZgaqZEfqrsdMn9oEKqmAZftyyiHPz7WboDCh8pEQgor0vxKoRwdTzvS4mM8odFUzN%2BfTfa40Wn9y58QKqynOPx06C%2BQF1y4IjsGBBxT3G9JQTHDQDebVDNvWhgybeF0JdRkh7XMJrNDF0MzmT5eLYKv5cDp1JluEx%2BkQhG0GZeMbbAXH&X-Amz-Signature=a69a102af902da4a29339830e7af8eabc02b966dc932f2b5717fb5bad55e348b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
