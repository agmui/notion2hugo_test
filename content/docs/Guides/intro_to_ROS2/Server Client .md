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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWFFTR3I%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWAriH3b3rtCLLX4jFkywrZJ2GZa6tbnfdUlXPZtM8VQIhAPsdhd5YvJwZcZr3df7V0Y1DHtNiSPlnyyQDpwQmODPLKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2cJPtC8iTnAdLcuAq3AO7LH6pp412Z3BaNUKcu3LuUaT6xdQb8qAG5Lb3PbHZ8pyADBZkNuK8knzX1PRasqc1KCUKWjEbgAaZ9kPqFbBfkUI2QzmWCXPmRdFiCgC2N90xl5WXe4qHm4kcI2pWgO%2BaOjyC7qSeRoiMq4%2BkLvAVklhAlX%2B76uJnNQwVf9uSfx0HtskHh4vLuTP%2Fjl5VYqDpqTCWeK%2BaTHn1tUnHzplick0n9zQIP0sHGZChXHxU8TJZjtMhhGGIBH0CfgTY24N7k1fvZQKLCtd4lnDDno572Fs8noMMDh%2BllBGgs3aLA2%2BbJvmsnJuAAYw6M0OZqwg91uoqF%2FMRqD09ZNe%2F9duCPlubz5ZXPLnb8LX3wSvPyYMeLPAc4iU9z1HVTsr7m%2FSlH5Az6ncDfLu6VuzxI0x7nklK16iXy3okJd%2FcyGNf1TxS6MFFHBQvQHRJbIwHUB73yPCaT6ZiWeGJ20oA2Uz8JLXnuajWPpoLhlHrCuH2oKoigX%2B6tQM%2BxrrzCmig%2BxqhW0fyB55Ojdw2oQIH921CpH0YSIUfZOlLAtmaoZRunRrjK%2BLAQbDioxrFyIaWYpoOmXOygh8nfavHtXCKHRTyIhkly6rIRwc2KAc%2B6h58Cep8V9YzXBHv%2BelGvjCM2fK8BjqkAQLvZWYzwBXK%2Bi7tbM%2FhqbzhZJPriaZGcSqTV%2FjLRn04Opd49uwB%2BxaA8b3U9esWHlI%2FTQfwbF47lOTIV%2FU83k8YAHfFhEYqkgHbL5FMCQiK1RQwaue6Q5iDCDtIZulM0vflvnKjgHnqiBBwAmIlE3uvlpApWvdxx4b%2BJjWNX4sxDmLnVo%2FqjnYfYCYOd%2Bof0picQivEqqsAu7w6nvJhWKg6Ar2Q&X-Amz-Signature=43a521af1caee99d21201fca6ba466979aeef068e7928f78c1edc655f60cc430&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWFFTR3I%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWAriH3b3rtCLLX4jFkywrZJ2GZa6tbnfdUlXPZtM8VQIhAPsdhd5YvJwZcZr3df7V0Y1DHtNiSPlnyyQDpwQmODPLKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2cJPtC8iTnAdLcuAq3AO7LH6pp412Z3BaNUKcu3LuUaT6xdQb8qAG5Lb3PbHZ8pyADBZkNuK8knzX1PRasqc1KCUKWjEbgAaZ9kPqFbBfkUI2QzmWCXPmRdFiCgC2N90xl5WXe4qHm4kcI2pWgO%2BaOjyC7qSeRoiMq4%2BkLvAVklhAlX%2B76uJnNQwVf9uSfx0HtskHh4vLuTP%2Fjl5VYqDpqTCWeK%2BaTHn1tUnHzplick0n9zQIP0sHGZChXHxU8TJZjtMhhGGIBH0CfgTY24N7k1fvZQKLCtd4lnDDno572Fs8noMMDh%2BllBGgs3aLA2%2BbJvmsnJuAAYw6M0OZqwg91uoqF%2FMRqD09ZNe%2F9duCPlubz5ZXPLnb8LX3wSvPyYMeLPAc4iU9z1HVTsr7m%2FSlH5Az6ncDfLu6VuzxI0x7nklK16iXy3okJd%2FcyGNf1TxS6MFFHBQvQHRJbIwHUB73yPCaT6ZiWeGJ20oA2Uz8JLXnuajWPpoLhlHrCuH2oKoigX%2B6tQM%2BxrrzCmig%2BxqhW0fyB55Ojdw2oQIH921CpH0YSIUfZOlLAtmaoZRunRrjK%2BLAQbDioxrFyIaWYpoOmXOygh8nfavHtXCKHRTyIhkly6rIRwc2KAc%2B6h58Cep8V9YzXBHv%2BelGvjCM2fK8BjqkAQLvZWYzwBXK%2Bi7tbM%2FhqbzhZJPriaZGcSqTV%2FjLRn04Opd49uwB%2BxaA8b3U9esWHlI%2FTQfwbF47lOTIV%2FU83k8YAHfFhEYqkgHbL5FMCQiK1RQwaue6Q5iDCDtIZulM0vflvnKjgHnqiBBwAmIlE3uvlpApWvdxx4b%2BJjWNX4sxDmLnVo%2FqjnYfYCYOd%2Bof0picQivEqqsAu7w6nvJhWKg6Ar2Q&X-Amz-Signature=ac8b1ee8ac765a82645ab8118e4679cb600811fc3cc9fd94cc27d17430911cd3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWFFTR3I%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWAriH3b3rtCLLX4jFkywrZJ2GZa6tbnfdUlXPZtM8VQIhAPsdhd5YvJwZcZr3df7V0Y1DHtNiSPlnyyQDpwQmODPLKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2cJPtC8iTnAdLcuAq3AO7LH6pp412Z3BaNUKcu3LuUaT6xdQb8qAG5Lb3PbHZ8pyADBZkNuK8knzX1PRasqc1KCUKWjEbgAaZ9kPqFbBfkUI2QzmWCXPmRdFiCgC2N90xl5WXe4qHm4kcI2pWgO%2BaOjyC7qSeRoiMq4%2BkLvAVklhAlX%2B76uJnNQwVf9uSfx0HtskHh4vLuTP%2Fjl5VYqDpqTCWeK%2BaTHn1tUnHzplick0n9zQIP0sHGZChXHxU8TJZjtMhhGGIBH0CfgTY24N7k1fvZQKLCtd4lnDDno572Fs8noMMDh%2BllBGgs3aLA2%2BbJvmsnJuAAYw6M0OZqwg91uoqF%2FMRqD09ZNe%2F9duCPlubz5ZXPLnb8LX3wSvPyYMeLPAc4iU9z1HVTsr7m%2FSlH5Az6ncDfLu6VuzxI0x7nklK16iXy3okJd%2FcyGNf1TxS6MFFHBQvQHRJbIwHUB73yPCaT6ZiWeGJ20oA2Uz8JLXnuajWPpoLhlHrCuH2oKoigX%2B6tQM%2BxrrzCmig%2BxqhW0fyB55Ojdw2oQIH921CpH0YSIUfZOlLAtmaoZRunRrjK%2BLAQbDioxrFyIaWYpoOmXOygh8nfavHtXCKHRTyIhkly6rIRwc2KAc%2B6h58Cep8V9YzXBHv%2BelGvjCM2fK8BjqkAQLvZWYzwBXK%2Bi7tbM%2FhqbzhZJPriaZGcSqTV%2FjLRn04Opd49uwB%2BxaA8b3U9esWHlI%2FTQfwbF47lOTIV%2FU83k8YAHfFhEYqkgHbL5FMCQiK1RQwaue6Q5iDCDtIZulM0vflvnKjgHnqiBBwAmIlE3uvlpApWvdxx4b%2BJjWNX4sxDmLnVo%2FqjnYfYCYOd%2Bof0picQivEqqsAu7w6nvJhWKg6Ar2Q&X-Amz-Signature=d89cde2e586fd8fe46596e0a006267d8268ea21ed2539514a99673502bfbea4d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWFFTR3I%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWAriH3b3rtCLLX4jFkywrZJ2GZa6tbnfdUlXPZtM8VQIhAPsdhd5YvJwZcZr3df7V0Y1DHtNiSPlnyyQDpwQmODPLKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2cJPtC8iTnAdLcuAq3AO7LH6pp412Z3BaNUKcu3LuUaT6xdQb8qAG5Lb3PbHZ8pyADBZkNuK8knzX1PRasqc1KCUKWjEbgAaZ9kPqFbBfkUI2QzmWCXPmRdFiCgC2N90xl5WXe4qHm4kcI2pWgO%2BaOjyC7qSeRoiMq4%2BkLvAVklhAlX%2B76uJnNQwVf9uSfx0HtskHh4vLuTP%2Fjl5VYqDpqTCWeK%2BaTHn1tUnHzplick0n9zQIP0sHGZChXHxU8TJZjtMhhGGIBH0CfgTY24N7k1fvZQKLCtd4lnDDno572Fs8noMMDh%2BllBGgs3aLA2%2BbJvmsnJuAAYw6M0OZqwg91uoqF%2FMRqD09ZNe%2F9duCPlubz5ZXPLnb8LX3wSvPyYMeLPAc4iU9z1HVTsr7m%2FSlH5Az6ncDfLu6VuzxI0x7nklK16iXy3okJd%2FcyGNf1TxS6MFFHBQvQHRJbIwHUB73yPCaT6ZiWeGJ20oA2Uz8JLXnuajWPpoLhlHrCuH2oKoigX%2B6tQM%2BxrrzCmig%2BxqhW0fyB55Ojdw2oQIH921CpH0YSIUfZOlLAtmaoZRunRrjK%2BLAQbDioxrFyIaWYpoOmXOygh8nfavHtXCKHRTyIhkly6rIRwc2KAc%2B6h58Cep8V9YzXBHv%2BelGvjCM2fK8BjqkAQLvZWYzwBXK%2Bi7tbM%2FhqbzhZJPriaZGcSqTV%2FjLRn04Opd49uwB%2BxaA8b3U9esWHlI%2FTQfwbF47lOTIV%2FU83k8YAHfFhEYqkgHbL5FMCQiK1RQwaue6Q5iDCDtIZulM0vflvnKjgHnqiBBwAmIlE3uvlpApWvdxx4b%2BJjWNX4sxDmLnVo%2FqjnYfYCYOd%2Bof0picQivEqqsAu7w6nvJhWKg6Ar2Q&X-Amz-Signature=897fec73e2faf9d6778938c11e60bce54fd9de08d8224507cf477f8140b14a9c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWFFTR3I%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWAriH3b3rtCLLX4jFkywrZJ2GZa6tbnfdUlXPZtM8VQIhAPsdhd5YvJwZcZr3df7V0Y1DHtNiSPlnyyQDpwQmODPLKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2cJPtC8iTnAdLcuAq3AO7LH6pp412Z3BaNUKcu3LuUaT6xdQb8qAG5Lb3PbHZ8pyADBZkNuK8knzX1PRasqc1KCUKWjEbgAaZ9kPqFbBfkUI2QzmWCXPmRdFiCgC2N90xl5WXe4qHm4kcI2pWgO%2BaOjyC7qSeRoiMq4%2BkLvAVklhAlX%2B76uJnNQwVf9uSfx0HtskHh4vLuTP%2Fjl5VYqDpqTCWeK%2BaTHn1tUnHzplick0n9zQIP0sHGZChXHxU8TJZjtMhhGGIBH0CfgTY24N7k1fvZQKLCtd4lnDDno572Fs8noMMDh%2BllBGgs3aLA2%2BbJvmsnJuAAYw6M0OZqwg91uoqF%2FMRqD09ZNe%2F9duCPlubz5ZXPLnb8LX3wSvPyYMeLPAc4iU9z1HVTsr7m%2FSlH5Az6ncDfLu6VuzxI0x7nklK16iXy3okJd%2FcyGNf1TxS6MFFHBQvQHRJbIwHUB73yPCaT6ZiWeGJ20oA2Uz8JLXnuajWPpoLhlHrCuH2oKoigX%2B6tQM%2BxrrzCmig%2BxqhW0fyB55Ojdw2oQIH921CpH0YSIUfZOlLAtmaoZRunRrjK%2BLAQbDioxrFyIaWYpoOmXOygh8nfavHtXCKHRTyIhkly6rIRwc2KAc%2B6h58Cep8V9YzXBHv%2BelGvjCM2fK8BjqkAQLvZWYzwBXK%2Bi7tbM%2FhqbzhZJPriaZGcSqTV%2FjLRn04Opd49uwB%2BxaA8b3U9esWHlI%2FTQfwbF47lOTIV%2FU83k8YAHfFhEYqkgHbL5FMCQiK1RQwaue6Q5iDCDtIZulM0vflvnKjgHnqiBBwAmIlE3uvlpApWvdxx4b%2BJjWNX4sxDmLnVo%2FqjnYfYCYOd%2Bof0picQivEqqsAu7w6nvJhWKg6Ar2Q&X-Amz-Signature=caf28924a8f07f69df3efb6f3c57d3869a4c0d7c5d7e1a320ac0d825a71d9054&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
