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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUVAECDM%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn4V1UdEVnjB8StvXJNk4TnkbjF5epNXDDKxUCs2jQkQIgPm%2BA9nFWLcrV5aZIWKFaIqD7eE3IkYKulxQyqs3ET9Mq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDEEPYziRfU2MEAYH4CrcA3tMONuMsVKioyAAhxxQkB%2BP9o4jA5SDv3N5KV%2FLySoEri8JBrtZfRlX%2FYcT0a9T5n5IV4gOEj3BFRoa2HnagBuxbQvnei0MAVMOEctMQRtGVexINC%2FNZ8s3ap80EAd8ctyVNrfLilqGWH0p%2FGNi21ks5fnk0purSBCLo2G8eP1ciZzUsRXqp7o3W%2BoQ06r2KKARaU1TekhEkUUxCW4DmKh%2BLQJ7zfqG1r6oyHmxk54SNXI1Q%2Bgn2Me9xrb7JidlgsBbPVMFb0noZrH64cGGP1hvrtYMp2cTl74jGR3zLSLzB36NjZ6rjv9aXawNUUw2UC5NAw1MAkV%2F0yYegKKvEK5LS2V1pZ4uR%2BRM8hzD3d5JShBayzV%2BsjhzWSJytJssKJefyKjPwyAB6RVqFOvzUv43s9DWtZIk6ayxTGVDFww3f%2FKdNLj1tgoj%2FLr0%2FUcl6HjL8WfsqGvKEkx%2B77GyauitxkCo%2Bfc8tKMEa4cX7VMJtdI3lTm3OxDQP3mUc5OYh%2FGCsuWyLCmHKSPRq4970S9DbHidyacMuyyEQSISe6LnRHyDMCZNSJu1dGb1z0k7J%2BOtMB3hog0gLHwKRGbwYPUflTjPkowSQpGq2L6lnkQ6cjAgqMZ3ncwiT9BwMMiX48AGOqUBQFQoYOmumgofsBJUJG4H6wAY8vucw4iY%2B9oV6ajY97JZM6WdJs%2BNgjNcL3wPYu65K%2B9dXY4Z0GxU0cYD78gDds2hfP2jh1ZH7HDKzQwQN%2FpPyH5QzdcxLdlJ%2FN3BC2JUMpYMpyPXE7L9tI51uXWaTqiZBO0ujueFeHVvZnY9LeFTCJn%2F%2F1ToBhuY6xzOwQ82v1%2BzMTdYqx9gsGRrHQMpzebqJCOe&X-Amz-Signature=c9872e75140b05bbd9c48ad47f61c3ceefdcc1b1c171a6bb19a14633601ef09f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUVAECDM%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn4V1UdEVnjB8StvXJNk4TnkbjF5epNXDDKxUCs2jQkQIgPm%2BA9nFWLcrV5aZIWKFaIqD7eE3IkYKulxQyqs3ET9Mq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDEEPYziRfU2MEAYH4CrcA3tMONuMsVKioyAAhxxQkB%2BP9o4jA5SDv3N5KV%2FLySoEri8JBrtZfRlX%2FYcT0a9T5n5IV4gOEj3BFRoa2HnagBuxbQvnei0MAVMOEctMQRtGVexINC%2FNZ8s3ap80EAd8ctyVNrfLilqGWH0p%2FGNi21ks5fnk0purSBCLo2G8eP1ciZzUsRXqp7o3W%2BoQ06r2KKARaU1TekhEkUUxCW4DmKh%2BLQJ7zfqG1r6oyHmxk54SNXI1Q%2Bgn2Me9xrb7JidlgsBbPVMFb0noZrH64cGGP1hvrtYMp2cTl74jGR3zLSLzB36NjZ6rjv9aXawNUUw2UC5NAw1MAkV%2F0yYegKKvEK5LS2V1pZ4uR%2BRM8hzD3d5JShBayzV%2BsjhzWSJytJssKJefyKjPwyAB6RVqFOvzUv43s9DWtZIk6ayxTGVDFww3f%2FKdNLj1tgoj%2FLr0%2FUcl6HjL8WfsqGvKEkx%2B77GyauitxkCo%2Bfc8tKMEa4cX7VMJtdI3lTm3OxDQP3mUc5OYh%2FGCsuWyLCmHKSPRq4970S9DbHidyacMuyyEQSISe6LnRHyDMCZNSJu1dGb1z0k7J%2BOtMB3hog0gLHwKRGbwYPUflTjPkowSQpGq2L6lnkQ6cjAgqMZ3ncwiT9BwMMiX48AGOqUBQFQoYOmumgofsBJUJG4H6wAY8vucw4iY%2B9oV6ajY97JZM6WdJs%2BNgjNcL3wPYu65K%2B9dXY4Z0GxU0cYD78gDds2hfP2jh1ZH7HDKzQwQN%2FpPyH5QzdcxLdlJ%2FN3BC2JUMpYMpyPXE7L9tI51uXWaTqiZBO0ujueFeHVvZnY9LeFTCJn%2F%2F1ToBhuY6xzOwQ82v1%2BzMTdYqx9gsGRrHQMpzebqJCOe&X-Amz-Signature=00c672d75836d297d4b732d74f50ace42c42dba35a3b73c672898e854837f8eb&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUVAECDM%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn4V1UdEVnjB8StvXJNk4TnkbjF5epNXDDKxUCs2jQkQIgPm%2BA9nFWLcrV5aZIWKFaIqD7eE3IkYKulxQyqs3ET9Mq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDEEPYziRfU2MEAYH4CrcA3tMONuMsVKioyAAhxxQkB%2BP9o4jA5SDv3N5KV%2FLySoEri8JBrtZfRlX%2FYcT0a9T5n5IV4gOEj3BFRoa2HnagBuxbQvnei0MAVMOEctMQRtGVexINC%2FNZ8s3ap80EAd8ctyVNrfLilqGWH0p%2FGNi21ks5fnk0purSBCLo2G8eP1ciZzUsRXqp7o3W%2BoQ06r2KKARaU1TekhEkUUxCW4DmKh%2BLQJ7zfqG1r6oyHmxk54SNXI1Q%2Bgn2Me9xrb7JidlgsBbPVMFb0noZrH64cGGP1hvrtYMp2cTl74jGR3zLSLzB36NjZ6rjv9aXawNUUw2UC5NAw1MAkV%2F0yYegKKvEK5LS2V1pZ4uR%2BRM8hzD3d5JShBayzV%2BsjhzWSJytJssKJefyKjPwyAB6RVqFOvzUv43s9DWtZIk6ayxTGVDFww3f%2FKdNLj1tgoj%2FLr0%2FUcl6HjL8WfsqGvKEkx%2B77GyauitxkCo%2Bfc8tKMEa4cX7VMJtdI3lTm3OxDQP3mUc5OYh%2FGCsuWyLCmHKSPRq4970S9DbHidyacMuyyEQSISe6LnRHyDMCZNSJu1dGb1z0k7J%2BOtMB3hog0gLHwKRGbwYPUflTjPkowSQpGq2L6lnkQ6cjAgqMZ3ncwiT9BwMMiX48AGOqUBQFQoYOmumgofsBJUJG4H6wAY8vucw4iY%2B9oV6ajY97JZM6WdJs%2BNgjNcL3wPYu65K%2B9dXY4Z0GxU0cYD78gDds2hfP2jh1ZH7HDKzQwQN%2FpPyH5QzdcxLdlJ%2FN3BC2JUMpYMpyPXE7L9tI51uXWaTqiZBO0ujueFeHVvZnY9LeFTCJn%2F%2F1ToBhuY6xzOwQ82v1%2BzMTdYqx9gsGRrHQMpzebqJCOe&X-Amz-Signature=d4acb50c9ba559a238a1859dc7028675a02cc1c08acab5a2eb5a9c6755fc550b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUVAECDM%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn4V1UdEVnjB8StvXJNk4TnkbjF5epNXDDKxUCs2jQkQIgPm%2BA9nFWLcrV5aZIWKFaIqD7eE3IkYKulxQyqs3ET9Mq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDEEPYziRfU2MEAYH4CrcA3tMONuMsVKioyAAhxxQkB%2BP9o4jA5SDv3N5KV%2FLySoEri8JBrtZfRlX%2FYcT0a9T5n5IV4gOEj3BFRoa2HnagBuxbQvnei0MAVMOEctMQRtGVexINC%2FNZ8s3ap80EAd8ctyVNrfLilqGWH0p%2FGNi21ks5fnk0purSBCLo2G8eP1ciZzUsRXqp7o3W%2BoQ06r2KKARaU1TekhEkUUxCW4DmKh%2BLQJ7zfqG1r6oyHmxk54SNXI1Q%2Bgn2Me9xrb7JidlgsBbPVMFb0noZrH64cGGP1hvrtYMp2cTl74jGR3zLSLzB36NjZ6rjv9aXawNUUw2UC5NAw1MAkV%2F0yYegKKvEK5LS2V1pZ4uR%2BRM8hzD3d5JShBayzV%2BsjhzWSJytJssKJefyKjPwyAB6RVqFOvzUv43s9DWtZIk6ayxTGVDFww3f%2FKdNLj1tgoj%2FLr0%2FUcl6HjL8WfsqGvKEkx%2B77GyauitxkCo%2Bfc8tKMEa4cX7VMJtdI3lTm3OxDQP3mUc5OYh%2FGCsuWyLCmHKSPRq4970S9DbHidyacMuyyEQSISe6LnRHyDMCZNSJu1dGb1z0k7J%2BOtMB3hog0gLHwKRGbwYPUflTjPkowSQpGq2L6lnkQ6cjAgqMZ3ncwiT9BwMMiX48AGOqUBQFQoYOmumgofsBJUJG4H6wAY8vucw4iY%2B9oV6ajY97JZM6WdJs%2BNgjNcL3wPYu65K%2B9dXY4Z0GxU0cYD78gDds2hfP2jh1ZH7HDKzQwQN%2FpPyH5QzdcxLdlJ%2FN3BC2JUMpYMpyPXE7L9tI51uXWaTqiZBO0ujueFeHVvZnY9LeFTCJn%2F%2F1ToBhuY6xzOwQ82v1%2BzMTdYqx9gsGRrHQMpzebqJCOe&X-Amz-Signature=542f27f5c14c1f23a62a196fc7401b9be71ed4975497a34bd278e0275335ec39&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUVAECDM%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn4V1UdEVnjB8StvXJNk4TnkbjF5epNXDDKxUCs2jQkQIgPm%2BA9nFWLcrV5aZIWKFaIqD7eE3IkYKulxQyqs3ET9Mq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDEEPYziRfU2MEAYH4CrcA3tMONuMsVKioyAAhxxQkB%2BP9o4jA5SDv3N5KV%2FLySoEri8JBrtZfRlX%2FYcT0a9T5n5IV4gOEj3BFRoa2HnagBuxbQvnei0MAVMOEctMQRtGVexINC%2FNZ8s3ap80EAd8ctyVNrfLilqGWH0p%2FGNi21ks5fnk0purSBCLo2G8eP1ciZzUsRXqp7o3W%2BoQ06r2KKARaU1TekhEkUUxCW4DmKh%2BLQJ7zfqG1r6oyHmxk54SNXI1Q%2Bgn2Me9xrb7JidlgsBbPVMFb0noZrH64cGGP1hvrtYMp2cTl74jGR3zLSLzB36NjZ6rjv9aXawNUUw2UC5NAw1MAkV%2F0yYegKKvEK5LS2V1pZ4uR%2BRM8hzD3d5JShBayzV%2BsjhzWSJytJssKJefyKjPwyAB6RVqFOvzUv43s9DWtZIk6ayxTGVDFww3f%2FKdNLj1tgoj%2FLr0%2FUcl6HjL8WfsqGvKEkx%2B77GyauitxkCo%2Bfc8tKMEa4cX7VMJtdI3lTm3OxDQP3mUc5OYh%2FGCsuWyLCmHKSPRq4970S9DbHidyacMuyyEQSISe6LnRHyDMCZNSJu1dGb1z0k7J%2BOtMB3hog0gLHwKRGbwYPUflTjPkowSQpGq2L6lnkQ6cjAgqMZ3ncwiT9BwMMiX48AGOqUBQFQoYOmumgofsBJUJG4H6wAY8vucw4iY%2B9oV6ajY97JZM6WdJs%2BNgjNcL3wPYu65K%2B9dXY4Z0GxU0cYD78gDds2hfP2jh1ZH7HDKzQwQN%2FpPyH5QzdcxLdlJ%2FN3BC2JUMpYMpyPXE7L9tI51uXWaTqiZBO0ujueFeHVvZnY9LeFTCJn%2F%2F1ToBhuY6xzOwQ82v1%2BzMTdYqx9gsGRrHQMpzebqJCOe&X-Amz-Signature=0a93fa017431ef5e9b55670d12b2581433ee3b548db269cac49223aca628be13&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
