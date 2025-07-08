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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WUX42EX%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2n8iOpR1Mt840gipDaKsaGUFHYkyIdj9Wa6GxfCQ2rwIgaUuJOnau6hkhSTjfKJLDlWAoUVPUnp%2Buckr0w0RCUh4qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9TGvBthIUgR0U1eircAyEkkVMhnLSeksgIkoZY6snJDAUuCuwa%2Bvy2FniJqhJ6MwrObKNe0aYS8FeHGLXApzpxbV4caAjZukEGL7XhsTZpB7K%2Fk3xX4kiDXFwQMSpeKh%2FJBhLjMAmnHF8j5yIavIRaN9mWYNuoJkM23imab%2F5A7k5LySOiQJ5ZGaMxLdOb97gJt2aUq6s%2B0eHRdqD4B30UcUJ2UHwFD%2BvP6O%2FJ03FaRw%2F2blb61WiFy9uy91oQJWS8gXfgYZJMXqaNKzEzyZ7HjExoQk51%2B342sOYwlUXSRSqoCHX%2FDtzMc53SuFkbInzqSKxd7VZzHJjbxvh%2FvAksvFtKz3ndk13%2BOZZM73a%2Bg6LQ3G98LtuVzFwoh%2Bm0FVFUI2LwJyyoQxROWCrbbIbxiXGx6XJZtcJugApM9CgQcooT5ZtFcEvgh63CZvq5swfjKdvOCqernR2qugl9SIf%2BKCr%2BvysWoSB0A%2Bt6lmCZLsX497P9EOR9HmtLr5WYmINDscrdX1qM2oc4RdSkF2cj3wvJCsA0sqrGCi0FBmcXItamuxWdeidWG2tRN7dQLMuNy4a3rZwHu7rgJJd7ERwqaR9PgdH3zV%2BI00WP8dHgovtlo7qv%2FL9Pe%2BDTON6T1wOVfEu2b87kR3FKMMPYtcMGOqUBI12%2F2IsSkCJ7yU7%2FHYRM1mzFGg9947rXD2flMaOZmbjjK7UJyJdk3A9pio2Vz4Gl46yjInz3mbMyPUnFNg9hnmCejaWfjXEqVIDJPwJ8pqzr3aao%2FoTKnxm2H3vuEqm2J4b6%2FdsWSnNf6U3VE1cmX3E75rACvYHLuBQB%2F90xFsveSnaVRA5XZbvNmI6V5ZOL6qnmb9kUVP36b1FzcbENM3cksP7q&X-Amz-Signature=7b87cb9c00003fd8eb343b2e0767e5c3d9ced097f5a6385dfc257840222ef5f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WUX42EX%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2n8iOpR1Mt840gipDaKsaGUFHYkyIdj9Wa6GxfCQ2rwIgaUuJOnau6hkhSTjfKJLDlWAoUVPUnp%2Buckr0w0RCUh4qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9TGvBthIUgR0U1eircAyEkkVMhnLSeksgIkoZY6snJDAUuCuwa%2Bvy2FniJqhJ6MwrObKNe0aYS8FeHGLXApzpxbV4caAjZukEGL7XhsTZpB7K%2Fk3xX4kiDXFwQMSpeKh%2FJBhLjMAmnHF8j5yIavIRaN9mWYNuoJkM23imab%2F5A7k5LySOiQJ5ZGaMxLdOb97gJt2aUq6s%2B0eHRdqD4B30UcUJ2UHwFD%2BvP6O%2FJ03FaRw%2F2blb61WiFy9uy91oQJWS8gXfgYZJMXqaNKzEzyZ7HjExoQk51%2B342sOYwlUXSRSqoCHX%2FDtzMc53SuFkbInzqSKxd7VZzHJjbxvh%2FvAksvFtKz3ndk13%2BOZZM73a%2Bg6LQ3G98LtuVzFwoh%2Bm0FVFUI2LwJyyoQxROWCrbbIbxiXGx6XJZtcJugApM9CgQcooT5ZtFcEvgh63CZvq5swfjKdvOCqernR2qugl9SIf%2BKCr%2BvysWoSB0A%2Bt6lmCZLsX497P9EOR9HmtLr5WYmINDscrdX1qM2oc4RdSkF2cj3wvJCsA0sqrGCi0FBmcXItamuxWdeidWG2tRN7dQLMuNy4a3rZwHu7rgJJd7ERwqaR9PgdH3zV%2BI00WP8dHgovtlo7qv%2FL9Pe%2BDTON6T1wOVfEu2b87kR3FKMMPYtcMGOqUBI12%2F2IsSkCJ7yU7%2FHYRM1mzFGg9947rXD2flMaOZmbjjK7UJyJdk3A9pio2Vz4Gl46yjInz3mbMyPUnFNg9hnmCejaWfjXEqVIDJPwJ8pqzr3aao%2FoTKnxm2H3vuEqm2J4b6%2FdsWSnNf6U3VE1cmX3E75rACvYHLuBQB%2F90xFsveSnaVRA5XZbvNmI6V5ZOL6qnmb9kUVP36b1FzcbENM3cksP7q&X-Amz-Signature=a1212fc403d7e8afd4142764680ebb1f9a3e3fb07e56e5d119d4d9c8fdceafab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WUX42EX%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2n8iOpR1Mt840gipDaKsaGUFHYkyIdj9Wa6GxfCQ2rwIgaUuJOnau6hkhSTjfKJLDlWAoUVPUnp%2Buckr0w0RCUh4qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9TGvBthIUgR0U1eircAyEkkVMhnLSeksgIkoZY6snJDAUuCuwa%2Bvy2FniJqhJ6MwrObKNe0aYS8FeHGLXApzpxbV4caAjZukEGL7XhsTZpB7K%2Fk3xX4kiDXFwQMSpeKh%2FJBhLjMAmnHF8j5yIavIRaN9mWYNuoJkM23imab%2F5A7k5LySOiQJ5ZGaMxLdOb97gJt2aUq6s%2B0eHRdqD4B30UcUJ2UHwFD%2BvP6O%2FJ03FaRw%2F2blb61WiFy9uy91oQJWS8gXfgYZJMXqaNKzEzyZ7HjExoQk51%2B342sOYwlUXSRSqoCHX%2FDtzMc53SuFkbInzqSKxd7VZzHJjbxvh%2FvAksvFtKz3ndk13%2BOZZM73a%2Bg6LQ3G98LtuVzFwoh%2Bm0FVFUI2LwJyyoQxROWCrbbIbxiXGx6XJZtcJugApM9CgQcooT5ZtFcEvgh63CZvq5swfjKdvOCqernR2qugl9SIf%2BKCr%2BvysWoSB0A%2Bt6lmCZLsX497P9EOR9HmtLr5WYmINDscrdX1qM2oc4RdSkF2cj3wvJCsA0sqrGCi0FBmcXItamuxWdeidWG2tRN7dQLMuNy4a3rZwHu7rgJJd7ERwqaR9PgdH3zV%2BI00WP8dHgovtlo7qv%2FL9Pe%2BDTON6T1wOVfEu2b87kR3FKMMPYtcMGOqUBI12%2F2IsSkCJ7yU7%2FHYRM1mzFGg9947rXD2flMaOZmbjjK7UJyJdk3A9pio2Vz4Gl46yjInz3mbMyPUnFNg9hnmCejaWfjXEqVIDJPwJ8pqzr3aao%2FoTKnxm2H3vuEqm2J4b6%2FdsWSnNf6U3VE1cmX3E75rACvYHLuBQB%2F90xFsveSnaVRA5XZbvNmI6V5ZOL6qnmb9kUVP36b1FzcbENM3cksP7q&X-Amz-Signature=aeb74db4bf672e6069a72076b1b9efc70f7e0809db4ae1b4d15a94504b1bf26f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WUX42EX%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2n8iOpR1Mt840gipDaKsaGUFHYkyIdj9Wa6GxfCQ2rwIgaUuJOnau6hkhSTjfKJLDlWAoUVPUnp%2Buckr0w0RCUh4qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9TGvBthIUgR0U1eircAyEkkVMhnLSeksgIkoZY6snJDAUuCuwa%2Bvy2FniJqhJ6MwrObKNe0aYS8FeHGLXApzpxbV4caAjZukEGL7XhsTZpB7K%2Fk3xX4kiDXFwQMSpeKh%2FJBhLjMAmnHF8j5yIavIRaN9mWYNuoJkM23imab%2F5A7k5LySOiQJ5ZGaMxLdOb97gJt2aUq6s%2B0eHRdqD4B30UcUJ2UHwFD%2BvP6O%2FJ03FaRw%2F2blb61WiFy9uy91oQJWS8gXfgYZJMXqaNKzEzyZ7HjExoQk51%2B342sOYwlUXSRSqoCHX%2FDtzMc53SuFkbInzqSKxd7VZzHJjbxvh%2FvAksvFtKz3ndk13%2BOZZM73a%2Bg6LQ3G98LtuVzFwoh%2Bm0FVFUI2LwJyyoQxROWCrbbIbxiXGx6XJZtcJugApM9CgQcooT5ZtFcEvgh63CZvq5swfjKdvOCqernR2qugl9SIf%2BKCr%2BvysWoSB0A%2Bt6lmCZLsX497P9EOR9HmtLr5WYmINDscrdX1qM2oc4RdSkF2cj3wvJCsA0sqrGCi0FBmcXItamuxWdeidWG2tRN7dQLMuNy4a3rZwHu7rgJJd7ERwqaR9PgdH3zV%2BI00WP8dHgovtlo7qv%2FL9Pe%2BDTON6T1wOVfEu2b87kR3FKMMPYtcMGOqUBI12%2F2IsSkCJ7yU7%2FHYRM1mzFGg9947rXD2flMaOZmbjjK7UJyJdk3A9pio2Vz4Gl46yjInz3mbMyPUnFNg9hnmCejaWfjXEqVIDJPwJ8pqzr3aao%2FoTKnxm2H3vuEqm2J4b6%2FdsWSnNf6U3VE1cmX3E75rACvYHLuBQB%2F90xFsveSnaVRA5XZbvNmI6V5ZOL6qnmb9kUVP36b1FzcbENM3cksP7q&X-Amz-Signature=48bb74c5f825f040dd25758eb7189c2449f05f99a0f94f15e53c6baadcdb6ad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WUX42EX%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2n8iOpR1Mt840gipDaKsaGUFHYkyIdj9Wa6GxfCQ2rwIgaUuJOnau6hkhSTjfKJLDlWAoUVPUnp%2Buckr0w0RCUh4qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9TGvBthIUgR0U1eircAyEkkVMhnLSeksgIkoZY6snJDAUuCuwa%2Bvy2FniJqhJ6MwrObKNe0aYS8FeHGLXApzpxbV4caAjZukEGL7XhsTZpB7K%2Fk3xX4kiDXFwQMSpeKh%2FJBhLjMAmnHF8j5yIavIRaN9mWYNuoJkM23imab%2F5A7k5LySOiQJ5ZGaMxLdOb97gJt2aUq6s%2B0eHRdqD4B30UcUJ2UHwFD%2BvP6O%2FJ03FaRw%2F2blb61WiFy9uy91oQJWS8gXfgYZJMXqaNKzEzyZ7HjExoQk51%2B342sOYwlUXSRSqoCHX%2FDtzMc53SuFkbInzqSKxd7VZzHJjbxvh%2FvAksvFtKz3ndk13%2BOZZM73a%2Bg6LQ3G98LtuVzFwoh%2Bm0FVFUI2LwJyyoQxROWCrbbIbxiXGx6XJZtcJugApM9CgQcooT5ZtFcEvgh63CZvq5swfjKdvOCqernR2qugl9SIf%2BKCr%2BvysWoSB0A%2Bt6lmCZLsX497P9EOR9HmtLr5WYmINDscrdX1qM2oc4RdSkF2cj3wvJCsA0sqrGCi0FBmcXItamuxWdeidWG2tRN7dQLMuNy4a3rZwHu7rgJJd7ERwqaR9PgdH3zV%2BI00WP8dHgovtlo7qv%2FL9Pe%2BDTON6T1wOVfEu2b87kR3FKMMPYtcMGOqUBI12%2F2IsSkCJ7yU7%2FHYRM1mzFGg9947rXD2flMaOZmbjjK7UJyJdk3A9pio2Vz4Gl46yjInz3mbMyPUnFNg9hnmCejaWfjXEqVIDJPwJ8pqzr3aao%2FoTKnxm2H3vuEqm2J4b6%2FdsWSnNf6U3VE1cmX3E75rACvYHLuBQB%2F90xFsveSnaVRA5XZbvNmI6V5ZOL6qnmb9kUVP36b1FzcbENM3cksP7q&X-Amz-Signature=c73baad1b408aa30d3a282ce3a2ede9fba31928bcb2669178dda4f6562c1c24e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
