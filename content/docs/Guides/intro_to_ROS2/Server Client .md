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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRVQGTKQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCx2CkpXyhYtKKZx5sn2aB3aasrgs3cB8WNbkO%2BlgCLngIgNlJKNwuWLS5LV9Nr92HAgkPKZBtoY6N%2BJQuMjF9uPDwqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAF%2Fu7RHsOhCraW1lCrcAx9E0Wl8qZkLxog4BrhpZ0B45eBpkGmEz%2F09rEk5CCOfXKevAC1fcaW%2FGCjWvVj2Qx7MD8p3EXlvGbKjzTrZvOEJD1JNC5tzYPiPt6r%2BGM%2F%2BwOZd8GWDexuQGGsWdUWQjop2PJ%2BUn3cqqiR0bUSsJ%2F52KAIkonV1R4ZR5ykY9Z8%2BeO25DBDxJhqzEIxSdKJeN18wJ3Rtn5qR%2BmOM3jAIid%2FI8BwcqIdm6hct6338iBxZfsr8uDNnRLM5v6IgEIprQdH9%2Bn6LiuAeUmm1mZjIEV2IQxQCodOhJjo7%2FN4bdzGFDyeXkRLnzkE%2BhFAwxajR3ENqFVKsChU67%2FaIhna%2FMGDUNhsq0Y1M85qtOdvVdU0EY%2FdR9svB%2BAp9UF2FUNS16GQHBMUUoqSzweX0j%2BWyZSuEM5%2FD5JBOEmRKEAwJdxK%2BGSX5vuZsIkGLHPy09OT6irb8vXE7ybzreae8%2FEQJgYvSGTwfpxKMDUCOaQl4J%2Bp7wTgNqOxwGWguvb%2FLmRjWFrsmQAXcoi1bEVFyZqpHeMyouUhovMfwUefG8jcFe8O0vzRsLdZv9i%2BmQVNmOm8ZMi6zTyvchpy3LyalZoxI6zzgt0AAo2KlGmSAmiuavLbxK4Fc0zgZO2JaPpUaMN6Qh74GOqUBo7uemmUEcUKJLZwy8WgBLznH%2BW5UjO1WEP6oXiozpDVL6B1zgJ5pnm8z15qAUE%2BO%2B%2FSqvOLqRMG8TraT1pIZ%2BivP%2FojVhLFy16HcxDRl5UdjYAx6dEYwW1TcJdgV9H7ssB4itL4G4knrbgQxo5Rmc7R1veece1cLJfaQNmpS%2FsGmWHT3VejhYCGOzMEHJK1B9aN%2F0f3cAR5VFVGIpEEzyjIFXxp1&X-Amz-Signature=567ad4e52b08205022854556368edb24477de1e91e17066fd09fc511c05d0ca1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRVQGTKQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCx2CkpXyhYtKKZx5sn2aB3aasrgs3cB8WNbkO%2BlgCLngIgNlJKNwuWLS5LV9Nr92HAgkPKZBtoY6N%2BJQuMjF9uPDwqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAF%2Fu7RHsOhCraW1lCrcAx9E0Wl8qZkLxog4BrhpZ0B45eBpkGmEz%2F09rEk5CCOfXKevAC1fcaW%2FGCjWvVj2Qx7MD8p3EXlvGbKjzTrZvOEJD1JNC5tzYPiPt6r%2BGM%2F%2BwOZd8GWDexuQGGsWdUWQjop2PJ%2BUn3cqqiR0bUSsJ%2F52KAIkonV1R4ZR5ykY9Z8%2BeO25DBDxJhqzEIxSdKJeN18wJ3Rtn5qR%2BmOM3jAIid%2FI8BwcqIdm6hct6338iBxZfsr8uDNnRLM5v6IgEIprQdH9%2Bn6LiuAeUmm1mZjIEV2IQxQCodOhJjo7%2FN4bdzGFDyeXkRLnzkE%2BhFAwxajR3ENqFVKsChU67%2FaIhna%2FMGDUNhsq0Y1M85qtOdvVdU0EY%2FdR9svB%2BAp9UF2FUNS16GQHBMUUoqSzweX0j%2BWyZSuEM5%2FD5JBOEmRKEAwJdxK%2BGSX5vuZsIkGLHPy09OT6irb8vXE7ybzreae8%2FEQJgYvSGTwfpxKMDUCOaQl4J%2Bp7wTgNqOxwGWguvb%2FLmRjWFrsmQAXcoi1bEVFyZqpHeMyouUhovMfwUefG8jcFe8O0vzRsLdZv9i%2BmQVNmOm8ZMi6zTyvchpy3LyalZoxI6zzgt0AAo2KlGmSAmiuavLbxK4Fc0zgZO2JaPpUaMN6Qh74GOqUBo7uemmUEcUKJLZwy8WgBLznH%2BW5UjO1WEP6oXiozpDVL6B1zgJ5pnm8z15qAUE%2BO%2B%2FSqvOLqRMG8TraT1pIZ%2BivP%2FojVhLFy16HcxDRl5UdjYAx6dEYwW1TcJdgV9H7ssB4itL4G4knrbgQxo5Rmc7R1veece1cLJfaQNmpS%2FsGmWHT3VejhYCGOzMEHJK1B9aN%2F0f3cAR5VFVGIpEEzyjIFXxp1&X-Amz-Signature=e4c83203faf23ca09760b2e3933d4798b89ae9c9c3d04874f2804b8d03c7b8df&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRVQGTKQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCx2CkpXyhYtKKZx5sn2aB3aasrgs3cB8WNbkO%2BlgCLngIgNlJKNwuWLS5LV9Nr92HAgkPKZBtoY6N%2BJQuMjF9uPDwqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAF%2Fu7RHsOhCraW1lCrcAx9E0Wl8qZkLxog4BrhpZ0B45eBpkGmEz%2F09rEk5CCOfXKevAC1fcaW%2FGCjWvVj2Qx7MD8p3EXlvGbKjzTrZvOEJD1JNC5tzYPiPt6r%2BGM%2F%2BwOZd8GWDexuQGGsWdUWQjop2PJ%2BUn3cqqiR0bUSsJ%2F52KAIkonV1R4ZR5ykY9Z8%2BeO25DBDxJhqzEIxSdKJeN18wJ3Rtn5qR%2BmOM3jAIid%2FI8BwcqIdm6hct6338iBxZfsr8uDNnRLM5v6IgEIprQdH9%2Bn6LiuAeUmm1mZjIEV2IQxQCodOhJjo7%2FN4bdzGFDyeXkRLnzkE%2BhFAwxajR3ENqFVKsChU67%2FaIhna%2FMGDUNhsq0Y1M85qtOdvVdU0EY%2FdR9svB%2BAp9UF2FUNS16GQHBMUUoqSzweX0j%2BWyZSuEM5%2FD5JBOEmRKEAwJdxK%2BGSX5vuZsIkGLHPy09OT6irb8vXE7ybzreae8%2FEQJgYvSGTwfpxKMDUCOaQl4J%2Bp7wTgNqOxwGWguvb%2FLmRjWFrsmQAXcoi1bEVFyZqpHeMyouUhovMfwUefG8jcFe8O0vzRsLdZv9i%2BmQVNmOm8ZMi6zTyvchpy3LyalZoxI6zzgt0AAo2KlGmSAmiuavLbxK4Fc0zgZO2JaPpUaMN6Qh74GOqUBo7uemmUEcUKJLZwy8WgBLznH%2BW5UjO1WEP6oXiozpDVL6B1zgJ5pnm8z15qAUE%2BO%2B%2FSqvOLqRMG8TraT1pIZ%2BivP%2FojVhLFy16HcxDRl5UdjYAx6dEYwW1TcJdgV9H7ssB4itL4G4knrbgQxo5Rmc7R1veece1cLJfaQNmpS%2FsGmWHT3VejhYCGOzMEHJK1B9aN%2F0f3cAR5VFVGIpEEzyjIFXxp1&X-Amz-Signature=03d0c9f326e241711e86f111b2a0e21da1e42508fd57a2a1d98af6c23a4417f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRVQGTKQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCx2CkpXyhYtKKZx5sn2aB3aasrgs3cB8WNbkO%2BlgCLngIgNlJKNwuWLS5LV9Nr92HAgkPKZBtoY6N%2BJQuMjF9uPDwqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAF%2Fu7RHsOhCraW1lCrcAx9E0Wl8qZkLxog4BrhpZ0B45eBpkGmEz%2F09rEk5CCOfXKevAC1fcaW%2FGCjWvVj2Qx7MD8p3EXlvGbKjzTrZvOEJD1JNC5tzYPiPt6r%2BGM%2F%2BwOZd8GWDexuQGGsWdUWQjop2PJ%2BUn3cqqiR0bUSsJ%2F52KAIkonV1R4ZR5ykY9Z8%2BeO25DBDxJhqzEIxSdKJeN18wJ3Rtn5qR%2BmOM3jAIid%2FI8BwcqIdm6hct6338iBxZfsr8uDNnRLM5v6IgEIprQdH9%2Bn6LiuAeUmm1mZjIEV2IQxQCodOhJjo7%2FN4bdzGFDyeXkRLnzkE%2BhFAwxajR3ENqFVKsChU67%2FaIhna%2FMGDUNhsq0Y1M85qtOdvVdU0EY%2FdR9svB%2BAp9UF2FUNS16GQHBMUUoqSzweX0j%2BWyZSuEM5%2FD5JBOEmRKEAwJdxK%2BGSX5vuZsIkGLHPy09OT6irb8vXE7ybzreae8%2FEQJgYvSGTwfpxKMDUCOaQl4J%2Bp7wTgNqOxwGWguvb%2FLmRjWFrsmQAXcoi1bEVFyZqpHeMyouUhovMfwUefG8jcFe8O0vzRsLdZv9i%2BmQVNmOm8ZMi6zTyvchpy3LyalZoxI6zzgt0AAo2KlGmSAmiuavLbxK4Fc0zgZO2JaPpUaMN6Qh74GOqUBo7uemmUEcUKJLZwy8WgBLznH%2BW5UjO1WEP6oXiozpDVL6B1zgJ5pnm8z15qAUE%2BO%2B%2FSqvOLqRMG8TraT1pIZ%2BivP%2FojVhLFy16HcxDRl5UdjYAx6dEYwW1TcJdgV9H7ssB4itL4G4knrbgQxo5Rmc7R1veece1cLJfaQNmpS%2FsGmWHT3VejhYCGOzMEHJK1B9aN%2F0f3cAR5VFVGIpEEzyjIFXxp1&X-Amz-Signature=8c12732114ccb9438724a10673f213f48656527bf06eb43c81dde46d676cdf52&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRVQGTKQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCx2CkpXyhYtKKZx5sn2aB3aasrgs3cB8WNbkO%2BlgCLngIgNlJKNwuWLS5LV9Nr92HAgkPKZBtoY6N%2BJQuMjF9uPDwqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAF%2Fu7RHsOhCraW1lCrcAx9E0Wl8qZkLxog4BrhpZ0B45eBpkGmEz%2F09rEk5CCOfXKevAC1fcaW%2FGCjWvVj2Qx7MD8p3EXlvGbKjzTrZvOEJD1JNC5tzYPiPt6r%2BGM%2F%2BwOZd8GWDexuQGGsWdUWQjop2PJ%2BUn3cqqiR0bUSsJ%2F52KAIkonV1R4ZR5ykY9Z8%2BeO25DBDxJhqzEIxSdKJeN18wJ3Rtn5qR%2BmOM3jAIid%2FI8BwcqIdm6hct6338iBxZfsr8uDNnRLM5v6IgEIprQdH9%2Bn6LiuAeUmm1mZjIEV2IQxQCodOhJjo7%2FN4bdzGFDyeXkRLnzkE%2BhFAwxajR3ENqFVKsChU67%2FaIhna%2FMGDUNhsq0Y1M85qtOdvVdU0EY%2FdR9svB%2BAp9UF2FUNS16GQHBMUUoqSzweX0j%2BWyZSuEM5%2FD5JBOEmRKEAwJdxK%2BGSX5vuZsIkGLHPy09OT6irb8vXE7ybzreae8%2FEQJgYvSGTwfpxKMDUCOaQl4J%2Bp7wTgNqOxwGWguvb%2FLmRjWFrsmQAXcoi1bEVFyZqpHeMyouUhovMfwUefG8jcFe8O0vzRsLdZv9i%2BmQVNmOm8ZMi6zTyvchpy3LyalZoxI6zzgt0AAo2KlGmSAmiuavLbxK4Fc0zgZO2JaPpUaMN6Qh74GOqUBo7uemmUEcUKJLZwy8WgBLznH%2BW5UjO1WEP6oXiozpDVL6B1zgJ5pnm8z15qAUE%2BO%2B%2FSqvOLqRMG8TraT1pIZ%2BivP%2FojVhLFy16HcxDRl5UdjYAx6dEYwW1TcJdgV9H7ssB4itL4G4knrbgQxo5Rmc7R1veece1cLJfaQNmpS%2FsGmWHT3VejhYCGOzMEHJK1B9aN%2F0f3cAR5VFVGIpEEzyjIFXxp1&X-Amz-Signature=b6362acc83b5d70a3867433474971f4a13216e0094f478915b5c3f4263c12f8d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
