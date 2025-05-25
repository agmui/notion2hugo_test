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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TPDJZIY%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDV6O6I87kNzBaVb95ah0pHH8r7bingL013LnoA611OdgIgPbGOnw0nYfM6ZFhsphbqGcRi6w8fjGQKOItu8Z5Z3Kkq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDOQ%2FEIoYHIv2HHKSkircA7kSncNtUx%2BY37tE11HNXuXQd4YB7Loff8hpJmZickd%2FB8DlScMbNoCMKZ1jpZqaYOxRYVVoTu70A%2B6MutHoU7O3CAw2Pz84FV9LCQArAo35FMpFJAb14te2kr7A%2FFM2G6WmqsQPNnMxe6Y8HJlRIc%2F%2Fmp5z02cZ%2Fbzp3X6eOu1R9iIWXPS7nZB9k0hSoeT1RTAOn7DEn1qQtsDuOJaY5X5xIq6kX2if%2FJmtkT4MhyPqxcF4Q%2BpsFL7le7ME0ojBSeGPAE%2F%2BseM04s3hR%2BeOKh4%2FKv2aYtUqTI3PFgngHItNTI8In9XZSJYLEZaLWWO9uNSLDVHIKc41%2FKaGhjX6LCaeFnKRKuNITJKbVQAAEyJ%2BIsAYQEWJu4C3vUhShnYZXiwzJfywP6tlCMCjAAJuuyr0egXCjbG2FAKORMyglKn21PBMu%2Fqx9E2VD%2FEUp%2F%2Fh6SCWThj4yGCNoOwtfQq9pmPxB8SUpwk%2BCe4XnbY6allppmuRB0DpVM9a9qhYtxdSwhwiSA1AItfzXecjvVagoKCcGTjW4URDxBoG91RcPLsFwgVeY9n01WobbT8zHPbxB%2B%2FtoV29GnIciRrOovFFvAOMXn43DYpuf%2By%2B4nlniCWUk6G0B%2Fz94I5FQ1AyMIP%2FzMEGOqUBzAjHNVrIqrXEADiq1FqAMbbUpNIKwPNmZMKMmgwuffrkaVNi1NMVTf3I3qeJWg0JBbyj3iAyMQeBAbRPZARZ4QBK6cZjFn215%2Fao6a1C96zzh0YCjkwasCAh5f6lRSxyUVuqU8Hhc70oxY5x0RgPm%2FqCDrnvZwjYFBMhE%2BXelch0QB%2Bp0HrR9iNqZFzJ0pbmum4QXrm2emiIOGi9czKdctLSj1IC&X-Amz-Signature=02091a9e218fe61604b96b065a3a2425b86c75441f863b94126699955f87fa14&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TPDJZIY%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDV6O6I87kNzBaVb95ah0pHH8r7bingL013LnoA611OdgIgPbGOnw0nYfM6ZFhsphbqGcRi6w8fjGQKOItu8Z5Z3Kkq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDOQ%2FEIoYHIv2HHKSkircA7kSncNtUx%2BY37tE11HNXuXQd4YB7Loff8hpJmZickd%2FB8DlScMbNoCMKZ1jpZqaYOxRYVVoTu70A%2B6MutHoU7O3CAw2Pz84FV9LCQArAo35FMpFJAb14te2kr7A%2FFM2G6WmqsQPNnMxe6Y8HJlRIc%2F%2Fmp5z02cZ%2Fbzp3X6eOu1R9iIWXPS7nZB9k0hSoeT1RTAOn7DEn1qQtsDuOJaY5X5xIq6kX2if%2FJmtkT4MhyPqxcF4Q%2BpsFL7le7ME0ojBSeGPAE%2F%2BseM04s3hR%2BeOKh4%2FKv2aYtUqTI3PFgngHItNTI8In9XZSJYLEZaLWWO9uNSLDVHIKc41%2FKaGhjX6LCaeFnKRKuNITJKbVQAAEyJ%2BIsAYQEWJu4C3vUhShnYZXiwzJfywP6tlCMCjAAJuuyr0egXCjbG2FAKORMyglKn21PBMu%2Fqx9E2VD%2FEUp%2F%2Fh6SCWThj4yGCNoOwtfQq9pmPxB8SUpwk%2BCe4XnbY6allppmuRB0DpVM9a9qhYtxdSwhwiSA1AItfzXecjvVagoKCcGTjW4URDxBoG91RcPLsFwgVeY9n01WobbT8zHPbxB%2B%2FtoV29GnIciRrOovFFvAOMXn43DYpuf%2By%2B4nlniCWUk6G0B%2Fz94I5FQ1AyMIP%2FzMEGOqUBzAjHNVrIqrXEADiq1FqAMbbUpNIKwPNmZMKMmgwuffrkaVNi1NMVTf3I3qeJWg0JBbyj3iAyMQeBAbRPZARZ4QBK6cZjFn215%2Fao6a1C96zzh0YCjkwasCAh5f6lRSxyUVuqU8Hhc70oxY5x0RgPm%2FqCDrnvZwjYFBMhE%2BXelch0QB%2Bp0HrR9iNqZFzJ0pbmum4QXrm2emiIOGi9czKdctLSj1IC&X-Amz-Signature=0724cdda13f31aefb6f23e11ffdc6746f0813e3399ade474a6b803a8317d8aeb&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TPDJZIY%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDV6O6I87kNzBaVb95ah0pHH8r7bingL013LnoA611OdgIgPbGOnw0nYfM6ZFhsphbqGcRi6w8fjGQKOItu8Z5Z3Kkq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDOQ%2FEIoYHIv2HHKSkircA7kSncNtUx%2BY37tE11HNXuXQd4YB7Loff8hpJmZickd%2FB8DlScMbNoCMKZ1jpZqaYOxRYVVoTu70A%2B6MutHoU7O3CAw2Pz84FV9LCQArAo35FMpFJAb14te2kr7A%2FFM2G6WmqsQPNnMxe6Y8HJlRIc%2F%2Fmp5z02cZ%2Fbzp3X6eOu1R9iIWXPS7nZB9k0hSoeT1RTAOn7DEn1qQtsDuOJaY5X5xIq6kX2if%2FJmtkT4MhyPqxcF4Q%2BpsFL7le7ME0ojBSeGPAE%2F%2BseM04s3hR%2BeOKh4%2FKv2aYtUqTI3PFgngHItNTI8In9XZSJYLEZaLWWO9uNSLDVHIKc41%2FKaGhjX6LCaeFnKRKuNITJKbVQAAEyJ%2BIsAYQEWJu4C3vUhShnYZXiwzJfywP6tlCMCjAAJuuyr0egXCjbG2FAKORMyglKn21PBMu%2Fqx9E2VD%2FEUp%2F%2Fh6SCWThj4yGCNoOwtfQq9pmPxB8SUpwk%2BCe4XnbY6allppmuRB0DpVM9a9qhYtxdSwhwiSA1AItfzXecjvVagoKCcGTjW4URDxBoG91RcPLsFwgVeY9n01WobbT8zHPbxB%2B%2FtoV29GnIciRrOovFFvAOMXn43DYpuf%2By%2B4nlniCWUk6G0B%2Fz94I5FQ1AyMIP%2FzMEGOqUBzAjHNVrIqrXEADiq1FqAMbbUpNIKwPNmZMKMmgwuffrkaVNi1NMVTf3I3qeJWg0JBbyj3iAyMQeBAbRPZARZ4QBK6cZjFn215%2Fao6a1C96zzh0YCjkwasCAh5f6lRSxyUVuqU8Hhc70oxY5x0RgPm%2FqCDrnvZwjYFBMhE%2BXelch0QB%2Bp0HrR9iNqZFzJ0pbmum4QXrm2emiIOGi9czKdctLSj1IC&X-Amz-Signature=550a25351cce2c59543d3d625be0d325b643117d2f7828e1a7662eaca5a852f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TPDJZIY%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDV6O6I87kNzBaVb95ah0pHH8r7bingL013LnoA611OdgIgPbGOnw0nYfM6ZFhsphbqGcRi6w8fjGQKOItu8Z5Z3Kkq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDOQ%2FEIoYHIv2HHKSkircA7kSncNtUx%2BY37tE11HNXuXQd4YB7Loff8hpJmZickd%2FB8DlScMbNoCMKZ1jpZqaYOxRYVVoTu70A%2B6MutHoU7O3CAw2Pz84FV9LCQArAo35FMpFJAb14te2kr7A%2FFM2G6WmqsQPNnMxe6Y8HJlRIc%2F%2Fmp5z02cZ%2Fbzp3X6eOu1R9iIWXPS7nZB9k0hSoeT1RTAOn7DEn1qQtsDuOJaY5X5xIq6kX2if%2FJmtkT4MhyPqxcF4Q%2BpsFL7le7ME0ojBSeGPAE%2F%2BseM04s3hR%2BeOKh4%2FKv2aYtUqTI3PFgngHItNTI8In9XZSJYLEZaLWWO9uNSLDVHIKc41%2FKaGhjX6LCaeFnKRKuNITJKbVQAAEyJ%2BIsAYQEWJu4C3vUhShnYZXiwzJfywP6tlCMCjAAJuuyr0egXCjbG2FAKORMyglKn21PBMu%2Fqx9E2VD%2FEUp%2F%2Fh6SCWThj4yGCNoOwtfQq9pmPxB8SUpwk%2BCe4XnbY6allppmuRB0DpVM9a9qhYtxdSwhwiSA1AItfzXecjvVagoKCcGTjW4URDxBoG91RcPLsFwgVeY9n01WobbT8zHPbxB%2B%2FtoV29GnIciRrOovFFvAOMXn43DYpuf%2By%2B4nlniCWUk6G0B%2Fz94I5FQ1AyMIP%2FzMEGOqUBzAjHNVrIqrXEADiq1FqAMbbUpNIKwPNmZMKMmgwuffrkaVNi1NMVTf3I3qeJWg0JBbyj3iAyMQeBAbRPZARZ4QBK6cZjFn215%2Fao6a1C96zzh0YCjkwasCAh5f6lRSxyUVuqU8Hhc70oxY5x0RgPm%2FqCDrnvZwjYFBMhE%2BXelch0QB%2Bp0HrR9iNqZFzJ0pbmum4QXrm2emiIOGi9czKdctLSj1IC&X-Amz-Signature=caefd540435aca890df3308b43f02f4b40132a0cf4bf0e0b31da2ee7fafa866c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TPDJZIY%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDV6O6I87kNzBaVb95ah0pHH8r7bingL013LnoA611OdgIgPbGOnw0nYfM6ZFhsphbqGcRi6w8fjGQKOItu8Z5Z3Kkq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDOQ%2FEIoYHIv2HHKSkircA7kSncNtUx%2BY37tE11HNXuXQd4YB7Loff8hpJmZickd%2FB8DlScMbNoCMKZ1jpZqaYOxRYVVoTu70A%2B6MutHoU7O3CAw2Pz84FV9LCQArAo35FMpFJAb14te2kr7A%2FFM2G6WmqsQPNnMxe6Y8HJlRIc%2F%2Fmp5z02cZ%2Fbzp3X6eOu1R9iIWXPS7nZB9k0hSoeT1RTAOn7DEn1qQtsDuOJaY5X5xIq6kX2if%2FJmtkT4MhyPqxcF4Q%2BpsFL7le7ME0ojBSeGPAE%2F%2BseM04s3hR%2BeOKh4%2FKv2aYtUqTI3PFgngHItNTI8In9XZSJYLEZaLWWO9uNSLDVHIKc41%2FKaGhjX6LCaeFnKRKuNITJKbVQAAEyJ%2BIsAYQEWJu4C3vUhShnYZXiwzJfywP6tlCMCjAAJuuyr0egXCjbG2FAKORMyglKn21PBMu%2Fqx9E2VD%2FEUp%2F%2Fh6SCWThj4yGCNoOwtfQq9pmPxB8SUpwk%2BCe4XnbY6allppmuRB0DpVM9a9qhYtxdSwhwiSA1AItfzXecjvVagoKCcGTjW4URDxBoG91RcPLsFwgVeY9n01WobbT8zHPbxB%2B%2FtoV29GnIciRrOovFFvAOMXn43DYpuf%2By%2B4nlniCWUk6G0B%2Fz94I5FQ1AyMIP%2FzMEGOqUBzAjHNVrIqrXEADiq1FqAMbbUpNIKwPNmZMKMmgwuffrkaVNi1NMVTf3I3qeJWg0JBbyj3iAyMQeBAbRPZARZ4QBK6cZjFn215%2Fao6a1C96zzh0YCjkwasCAh5f6lRSxyUVuqU8Hhc70oxY5x0RgPm%2FqCDrnvZwjYFBMhE%2BXelch0QB%2Bp0HrR9iNqZFzJ0pbmum4QXrm2emiIOGi9czKdctLSj1IC&X-Amz-Signature=74967ff6ffbb81b05d0fa65611d8d6abd9151bb90075dea4f8da7af6b3d7a198&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
