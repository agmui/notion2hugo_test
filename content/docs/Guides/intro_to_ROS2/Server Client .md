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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GJ74346%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIF44%2FeB9Jbfvr%2BvhsGzm2NtMj3qj%2BsvTenM%2BIPtOsQKmAiEAh07NN4gDUQMAIiUyNy04fxF8ddqSlsKhDWp68ExdkyIqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDheiXTBIctFIuLByrcA9%2Fn35oiVdS8%2BnO3v77ktKU5TM9iS3a%2Bw%2Fco4ZoYAZJWVUD2kWV8ufsfS96VTVg8wnxerGOvbbpF%2BrKxC3LX41QD%2F5p84K31Xbw8ZUqGvQ6sIigyp%2BIVGTKToBMaGpa%2Bt8Ney8ppP50cpnTmPzRr0LTl6fvOOnkZVWAb1RU2jXP78%2B%2BNqhe10BJEkLQDRu89PZPrQXSnxGcI%2Fx8HT48iAD5LxH4%2F%2BSK7c%2BvlX7MbFajl8d%2BI2MWmMaVpP2ZcOXWjg69%2BlyUO1%2BpJgfloDK3EgVWc0N86MgeOd%2Fu8SQgp54l7hHLl2AtbvsT3k%2FMffwzmYj55qeLVSnJ%2FAM6mnjIlkJwWHtzDPA8l5DmWiujxx33jQX4OnschfusqKb8UNWFxP%2Fw%2Bz5fGAwus3dQb81wJ%2F9Xf%2BKpdUniScLopohMD6xIFZndAyLvzq2zSMDtholsn6EvWuVizRX33Zey9lGhzA1fH1e2%2B9k7vouNGI13CWQCURZIlwyjnB1K4wV5TAxzhgnG9LNuTLHPj3tXQpummEo8inVSjifjuWc0f%2FL%2FAgWIYjcyIgeCH0qGs5WLwGakO%2FOWhBX%2BgZ%2BRAaa95Im3h%2Fbrf4mxnCIb6ydNQ8mWaXSlVe9hPBLT%2BaN4LXj1pMIuSvMEGOqUBjZOG6LtZEWuflA393rSdv0VtzUlHrD5IAQPa0cIHe%2BDClUBc9XNM61ZNlVqt0BgmJOK%2FJX%2BjO5%2B%2B2yHM3VTWBNtaHyi5%2BHuRM1vgEX1i%2FGX3QJUvMWjsw2DszsTkNlsY03XtFRhyVgs8pnwi0z7Wk0twuE8UMJ3yDL08sgzXRXiUKQBgzT7ND4XNTuac64K5L%2BD7%2BO1t7z1R5%2F8Zn8yV4ul993SG&X-Amz-Signature=adc5c8a0b6e548d82ed50d01430e10f927d67997236762419067eff2f623defa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GJ74346%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIF44%2FeB9Jbfvr%2BvhsGzm2NtMj3qj%2BsvTenM%2BIPtOsQKmAiEAh07NN4gDUQMAIiUyNy04fxF8ddqSlsKhDWp68ExdkyIqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDheiXTBIctFIuLByrcA9%2Fn35oiVdS8%2BnO3v77ktKU5TM9iS3a%2Bw%2Fco4ZoYAZJWVUD2kWV8ufsfS96VTVg8wnxerGOvbbpF%2BrKxC3LX41QD%2F5p84K31Xbw8ZUqGvQ6sIigyp%2BIVGTKToBMaGpa%2Bt8Ney8ppP50cpnTmPzRr0LTl6fvOOnkZVWAb1RU2jXP78%2B%2BNqhe10BJEkLQDRu89PZPrQXSnxGcI%2Fx8HT48iAD5LxH4%2F%2BSK7c%2BvlX7MbFajl8d%2BI2MWmMaVpP2ZcOXWjg69%2BlyUO1%2BpJgfloDK3EgVWc0N86MgeOd%2Fu8SQgp54l7hHLl2AtbvsT3k%2FMffwzmYj55qeLVSnJ%2FAM6mnjIlkJwWHtzDPA8l5DmWiujxx33jQX4OnschfusqKb8UNWFxP%2Fw%2Bz5fGAwus3dQb81wJ%2F9Xf%2BKpdUniScLopohMD6xIFZndAyLvzq2zSMDtholsn6EvWuVizRX33Zey9lGhzA1fH1e2%2B9k7vouNGI13CWQCURZIlwyjnB1K4wV5TAxzhgnG9LNuTLHPj3tXQpummEo8inVSjifjuWc0f%2FL%2FAgWIYjcyIgeCH0qGs5WLwGakO%2FOWhBX%2BgZ%2BRAaa95Im3h%2Fbrf4mxnCIb6ydNQ8mWaXSlVe9hPBLT%2BaN4LXj1pMIuSvMEGOqUBjZOG6LtZEWuflA393rSdv0VtzUlHrD5IAQPa0cIHe%2BDClUBc9XNM61ZNlVqt0BgmJOK%2FJX%2BjO5%2B%2B2yHM3VTWBNtaHyi5%2BHuRM1vgEX1i%2FGX3QJUvMWjsw2DszsTkNlsY03XtFRhyVgs8pnwi0z7Wk0twuE8UMJ3yDL08sgzXRXiUKQBgzT7ND4XNTuac64K5L%2BD7%2BO1t7z1R5%2F8Zn8yV4ul993SG&X-Amz-Signature=500c676845c32e2da33e28c3b48d1f82c5c5ba81afa7c95e5d3dbf9b698f37a6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GJ74346%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIF44%2FeB9Jbfvr%2BvhsGzm2NtMj3qj%2BsvTenM%2BIPtOsQKmAiEAh07NN4gDUQMAIiUyNy04fxF8ddqSlsKhDWp68ExdkyIqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDheiXTBIctFIuLByrcA9%2Fn35oiVdS8%2BnO3v77ktKU5TM9iS3a%2Bw%2Fco4ZoYAZJWVUD2kWV8ufsfS96VTVg8wnxerGOvbbpF%2BrKxC3LX41QD%2F5p84K31Xbw8ZUqGvQ6sIigyp%2BIVGTKToBMaGpa%2Bt8Ney8ppP50cpnTmPzRr0LTl6fvOOnkZVWAb1RU2jXP78%2B%2BNqhe10BJEkLQDRu89PZPrQXSnxGcI%2Fx8HT48iAD5LxH4%2F%2BSK7c%2BvlX7MbFajl8d%2BI2MWmMaVpP2ZcOXWjg69%2BlyUO1%2BpJgfloDK3EgVWc0N86MgeOd%2Fu8SQgp54l7hHLl2AtbvsT3k%2FMffwzmYj55qeLVSnJ%2FAM6mnjIlkJwWHtzDPA8l5DmWiujxx33jQX4OnschfusqKb8UNWFxP%2Fw%2Bz5fGAwus3dQb81wJ%2F9Xf%2BKpdUniScLopohMD6xIFZndAyLvzq2zSMDtholsn6EvWuVizRX33Zey9lGhzA1fH1e2%2B9k7vouNGI13CWQCURZIlwyjnB1K4wV5TAxzhgnG9LNuTLHPj3tXQpummEo8inVSjifjuWc0f%2FL%2FAgWIYjcyIgeCH0qGs5WLwGakO%2FOWhBX%2BgZ%2BRAaa95Im3h%2Fbrf4mxnCIb6ydNQ8mWaXSlVe9hPBLT%2BaN4LXj1pMIuSvMEGOqUBjZOG6LtZEWuflA393rSdv0VtzUlHrD5IAQPa0cIHe%2BDClUBc9XNM61ZNlVqt0BgmJOK%2FJX%2BjO5%2B%2B2yHM3VTWBNtaHyi5%2BHuRM1vgEX1i%2FGX3QJUvMWjsw2DszsTkNlsY03XtFRhyVgs8pnwi0z7Wk0twuE8UMJ3yDL08sgzXRXiUKQBgzT7ND4XNTuac64K5L%2BD7%2BO1t7z1R5%2F8Zn8yV4ul993SG&X-Amz-Signature=f514e0fe9d596022dd9aa003e3c602471bcef1e2c1cf8bdf955353ffcae45567&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GJ74346%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIF44%2FeB9Jbfvr%2BvhsGzm2NtMj3qj%2BsvTenM%2BIPtOsQKmAiEAh07NN4gDUQMAIiUyNy04fxF8ddqSlsKhDWp68ExdkyIqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDheiXTBIctFIuLByrcA9%2Fn35oiVdS8%2BnO3v77ktKU5TM9iS3a%2Bw%2Fco4ZoYAZJWVUD2kWV8ufsfS96VTVg8wnxerGOvbbpF%2BrKxC3LX41QD%2F5p84K31Xbw8ZUqGvQ6sIigyp%2BIVGTKToBMaGpa%2Bt8Ney8ppP50cpnTmPzRr0LTl6fvOOnkZVWAb1RU2jXP78%2B%2BNqhe10BJEkLQDRu89PZPrQXSnxGcI%2Fx8HT48iAD5LxH4%2F%2BSK7c%2BvlX7MbFajl8d%2BI2MWmMaVpP2ZcOXWjg69%2BlyUO1%2BpJgfloDK3EgVWc0N86MgeOd%2Fu8SQgp54l7hHLl2AtbvsT3k%2FMffwzmYj55qeLVSnJ%2FAM6mnjIlkJwWHtzDPA8l5DmWiujxx33jQX4OnschfusqKb8UNWFxP%2Fw%2Bz5fGAwus3dQb81wJ%2F9Xf%2BKpdUniScLopohMD6xIFZndAyLvzq2zSMDtholsn6EvWuVizRX33Zey9lGhzA1fH1e2%2B9k7vouNGI13CWQCURZIlwyjnB1K4wV5TAxzhgnG9LNuTLHPj3tXQpummEo8inVSjifjuWc0f%2FL%2FAgWIYjcyIgeCH0qGs5WLwGakO%2FOWhBX%2BgZ%2BRAaa95Im3h%2Fbrf4mxnCIb6ydNQ8mWaXSlVe9hPBLT%2BaN4LXj1pMIuSvMEGOqUBjZOG6LtZEWuflA393rSdv0VtzUlHrD5IAQPa0cIHe%2BDClUBc9XNM61ZNlVqt0BgmJOK%2FJX%2BjO5%2B%2B2yHM3VTWBNtaHyi5%2BHuRM1vgEX1i%2FGX3QJUvMWjsw2DszsTkNlsY03XtFRhyVgs8pnwi0z7Wk0twuE8UMJ3yDL08sgzXRXiUKQBgzT7ND4XNTuac64K5L%2BD7%2BO1t7z1R5%2F8Zn8yV4ul993SG&X-Amz-Signature=05e623932ee45e3410f475d3d64f944f087fa1637f0b379b05fd1f53523e5f9f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GJ74346%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIF44%2FeB9Jbfvr%2BvhsGzm2NtMj3qj%2BsvTenM%2BIPtOsQKmAiEAh07NN4gDUQMAIiUyNy04fxF8ddqSlsKhDWp68ExdkyIqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDheiXTBIctFIuLByrcA9%2Fn35oiVdS8%2BnO3v77ktKU5TM9iS3a%2Bw%2Fco4ZoYAZJWVUD2kWV8ufsfS96VTVg8wnxerGOvbbpF%2BrKxC3LX41QD%2F5p84K31Xbw8ZUqGvQ6sIigyp%2BIVGTKToBMaGpa%2Bt8Ney8ppP50cpnTmPzRr0LTl6fvOOnkZVWAb1RU2jXP78%2B%2BNqhe10BJEkLQDRu89PZPrQXSnxGcI%2Fx8HT48iAD5LxH4%2F%2BSK7c%2BvlX7MbFajl8d%2BI2MWmMaVpP2ZcOXWjg69%2BlyUO1%2BpJgfloDK3EgVWc0N86MgeOd%2Fu8SQgp54l7hHLl2AtbvsT3k%2FMffwzmYj55qeLVSnJ%2FAM6mnjIlkJwWHtzDPA8l5DmWiujxx33jQX4OnschfusqKb8UNWFxP%2Fw%2Bz5fGAwus3dQb81wJ%2F9Xf%2BKpdUniScLopohMD6xIFZndAyLvzq2zSMDtholsn6EvWuVizRX33Zey9lGhzA1fH1e2%2B9k7vouNGI13CWQCURZIlwyjnB1K4wV5TAxzhgnG9LNuTLHPj3tXQpummEo8inVSjifjuWc0f%2FL%2FAgWIYjcyIgeCH0qGs5WLwGakO%2FOWhBX%2BgZ%2BRAaa95Im3h%2Fbrf4mxnCIb6ydNQ8mWaXSlVe9hPBLT%2BaN4LXj1pMIuSvMEGOqUBjZOG6LtZEWuflA393rSdv0VtzUlHrD5IAQPa0cIHe%2BDClUBc9XNM61ZNlVqt0BgmJOK%2FJX%2BjO5%2B%2B2yHM3VTWBNtaHyi5%2BHuRM1vgEX1i%2FGX3QJUvMWjsw2DszsTkNlsY03XtFRhyVgs8pnwi0z7Wk0twuE8UMJ3yDL08sgzXRXiUKQBgzT7ND4XNTuac64K5L%2BD7%2BO1t7z1R5%2F8Zn8yV4ul993SG&X-Amz-Signature=4ad66fb8fbe345cc175cf2e5cda15b01545191148832f16443fb5274d976d507&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
