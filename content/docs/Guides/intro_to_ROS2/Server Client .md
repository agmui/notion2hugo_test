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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3C5OHHQ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNMCyYSCate9hOGMrbDc%2FiiAKLklh1MlLbqg4YhmTkLAiBlMAM1eXr4zM%2B%2BrQfDczkfqsly%2FD2fM0sbM%2FqPCRmEESr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMe0MPnW%2BVLw0BkcDUKtwDMb%2FO5tMNrnWV5zeyfKF73f6KNz2J0GJUzM%2BE2ro4GfXoZP%2BDtupXaEU3yXJo5lddP%2BDwlYkmoLxkr2yQ8ihL9XVFtFzzOXW5cw9xiGFhpA5Kzd4QrfT51OxLy3qthrVj3NuJ%2B0E39WvKTCGgFXiw2nXiNvACN%2FVGky%2FDRfG0DDt35DqHzRvsnld9zD6M06z6Mqx1wf1U6hzj3Y%2FvPc9M6iopM848kMKcQG%2BC2SO3k4CyeO1WEFQnOFDiq0vnei1hlzaf3Gc5nqItR9Goqx9gU7kKNlcHnS5xpML5ErQYdr1pSrH1MY7PvJisTgeDLO1lHFev5qfCzLUdgsx7UzlZwDG%2BQY8e%2FQ16bjfiYI5PYYfM%2Fitjau5QxZssXa5kShD3slZQPK0Ih1QDv0cl0BXu5RS3aU9udPSyuMhv6YP%2FDX%2BhziyzzUzKlNNRy84pBJZzvHo%2BeyVmLWVtqdoiDOJQe4dPU6rsnKXS63vPCcaFukxDfav53Ttd3OZqXNpHPAyFN0reTANrTkkfvnfwo%2BL4BWdPtt42w%2F5WLOyPMIfS8iAt40869hJmNfcuIRT8aKx1AAUxrpslyhVA4K4vhZA7rWgDL3tSHoJIPGlNzsHwHBuC%2FAspMFt8WrEfLqUwjJbkwAY6pgG4f%2B%2Fv7r00Z0xIBHDrSi5znzXq34VAK3EYT50S%2F3pTCcKtRwRBD%2Fv79BtRUgM15Zs1v1PZDERL8q%2FKbwDumcLvuNmnFMKbPVK4LUEHy70poUuFEjKPK49HZpixk1bFlnSCQrBF8HJ61Zq%2B1HwBDS4w42iPKzK4YwT5QW86rjb1R9uleRU9COeTDcioSe%2FUi8D9R%2B3GtEapXF0H362%2FQcL8MpoaUg6V&X-Amz-Signature=02e5c6c1e8a337c1de3e5a42d56bf0ffe1896cda8c1a78e0731ef27f0bd60113&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3C5OHHQ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNMCyYSCate9hOGMrbDc%2FiiAKLklh1MlLbqg4YhmTkLAiBlMAM1eXr4zM%2B%2BrQfDczkfqsly%2FD2fM0sbM%2FqPCRmEESr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMe0MPnW%2BVLw0BkcDUKtwDMb%2FO5tMNrnWV5zeyfKF73f6KNz2J0GJUzM%2BE2ro4GfXoZP%2BDtupXaEU3yXJo5lddP%2BDwlYkmoLxkr2yQ8ihL9XVFtFzzOXW5cw9xiGFhpA5Kzd4QrfT51OxLy3qthrVj3NuJ%2B0E39WvKTCGgFXiw2nXiNvACN%2FVGky%2FDRfG0DDt35DqHzRvsnld9zD6M06z6Mqx1wf1U6hzj3Y%2FvPc9M6iopM848kMKcQG%2BC2SO3k4CyeO1WEFQnOFDiq0vnei1hlzaf3Gc5nqItR9Goqx9gU7kKNlcHnS5xpML5ErQYdr1pSrH1MY7PvJisTgeDLO1lHFev5qfCzLUdgsx7UzlZwDG%2BQY8e%2FQ16bjfiYI5PYYfM%2Fitjau5QxZssXa5kShD3slZQPK0Ih1QDv0cl0BXu5RS3aU9udPSyuMhv6YP%2FDX%2BhziyzzUzKlNNRy84pBJZzvHo%2BeyVmLWVtqdoiDOJQe4dPU6rsnKXS63vPCcaFukxDfav53Ttd3OZqXNpHPAyFN0reTANrTkkfvnfwo%2BL4BWdPtt42w%2F5WLOyPMIfS8iAt40869hJmNfcuIRT8aKx1AAUxrpslyhVA4K4vhZA7rWgDL3tSHoJIPGlNzsHwHBuC%2FAspMFt8WrEfLqUwjJbkwAY6pgG4f%2B%2Fv7r00Z0xIBHDrSi5znzXq34VAK3EYT50S%2F3pTCcKtRwRBD%2Fv79BtRUgM15Zs1v1PZDERL8q%2FKbwDumcLvuNmnFMKbPVK4LUEHy70poUuFEjKPK49HZpixk1bFlnSCQrBF8HJ61Zq%2B1HwBDS4w42iPKzK4YwT5QW86rjb1R9uleRU9COeTDcioSe%2FUi8D9R%2B3GtEapXF0H362%2FQcL8MpoaUg6V&X-Amz-Signature=b36acf244e76357059812d71c8e51cd00ff22ec14230567090538ed1e25e7368&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3C5OHHQ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNMCyYSCate9hOGMrbDc%2FiiAKLklh1MlLbqg4YhmTkLAiBlMAM1eXr4zM%2B%2BrQfDczkfqsly%2FD2fM0sbM%2FqPCRmEESr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMe0MPnW%2BVLw0BkcDUKtwDMb%2FO5tMNrnWV5zeyfKF73f6KNz2J0GJUzM%2BE2ro4GfXoZP%2BDtupXaEU3yXJo5lddP%2BDwlYkmoLxkr2yQ8ihL9XVFtFzzOXW5cw9xiGFhpA5Kzd4QrfT51OxLy3qthrVj3NuJ%2B0E39WvKTCGgFXiw2nXiNvACN%2FVGky%2FDRfG0DDt35DqHzRvsnld9zD6M06z6Mqx1wf1U6hzj3Y%2FvPc9M6iopM848kMKcQG%2BC2SO3k4CyeO1WEFQnOFDiq0vnei1hlzaf3Gc5nqItR9Goqx9gU7kKNlcHnS5xpML5ErQYdr1pSrH1MY7PvJisTgeDLO1lHFev5qfCzLUdgsx7UzlZwDG%2BQY8e%2FQ16bjfiYI5PYYfM%2Fitjau5QxZssXa5kShD3slZQPK0Ih1QDv0cl0BXu5RS3aU9udPSyuMhv6YP%2FDX%2BhziyzzUzKlNNRy84pBJZzvHo%2BeyVmLWVtqdoiDOJQe4dPU6rsnKXS63vPCcaFukxDfav53Ttd3OZqXNpHPAyFN0reTANrTkkfvnfwo%2BL4BWdPtt42w%2F5WLOyPMIfS8iAt40869hJmNfcuIRT8aKx1AAUxrpslyhVA4K4vhZA7rWgDL3tSHoJIPGlNzsHwHBuC%2FAspMFt8WrEfLqUwjJbkwAY6pgG4f%2B%2Fv7r00Z0xIBHDrSi5znzXq34VAK3EYT50S%2F3pTCcKtRwRBD%2Fv79BtRUgM15Zs1v1PZDERL8q%2FKbwDumcLvuNmnFMKbPVK4LUEHy70poUuFEjKPK49HZpixk1bFlnSCQrBF8HJ61Zq%2B1HwBDS4w42iPKzK4YwT5QW86rjb1R9uleRU9COeTDcioSe%2FUi8D9R%2B3GtEapXF0H362%2FQcL8MpoaUg6V&X-Amz-Signature=013b24d02cb91e63f0820cf053a7c0307877a7206a6570cc5cb825584b1c8259&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3C5OHHQ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNMCyYSCate9hOGMrbDc%2FiiAKLklh1MlLbqg4YhmTkLAiBlMAM1eXr4zM%2B%2BrQfDczkfqsly%2FD2fM0sbM%2FqPCRmEESr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMe0MPnW%2BVLw0BkcDUKtwDMb%2FO5tMNrnWV5zeyfKF73f6KNz2J0GJUzM%2BE2ro4GfXoZP%2BDtupXaEU3yXJo5lddP%2BDwlYkmoLxkr2yQ8ihL9XVFtFzzOXW5cw9xiGFhpA5Kzd4QrfT51OxLy3qthrVj3NuJ%2B0E39WvKTCGgFXiw2nXiNvACN%2FVGky%2FDRfG0DDt35DqHzRvsnld9zD6M06z6Mqx1wf1U6hzj3Y%2FvPc9M6iopM848kMKcQG%2BC2SO3k4CyeO1WEFQnOFDiq0vnei1hlzaf3Gc5nqItR9Goqx9gU7kKNlcHnS5xpML5ErQYdr1pSrH1MY7PvJisTgeDLO1lHFev5qfCzLUdgsx7UzlZwDG%2BQY8e%2FQ16bjfiYI5PYYfM%2Fitjau5QxZssXa5kShD3slZQPK0Ih1QDv0cl0BXu5RS3aU9udPSyuMhv6YP%2FDX%2BhziyzzUzKlNNRy84pBJZzvHo%2BeyVmLWVtqdoiDOJQe4dPU6rsnKXS63vPCcaFukxDfav53Ttd3OZqXNpHPAyFN0reTANrTkkfvnfwo%2BL4BWdPtt42w%2F5WLOyPMIfS8iAt40869hJmNfcuIRT8aKx1AAUxrpslyhVA4K4vhZA7rWgDL3tSHoJIPGlNzsHwHBuC%2FAspMFt8WrEfLqUwjJbkwAY6pgG4f%2B%2Fv7r00Z0xIBHDrSi5znzXq34VAK3EYT50S%2F3pTCcKtRwRBD%2Fv79BtRUgM15Zs1v1PZDERL8q%2FKbwDumcLvuNmnFMKbPVK4LUEHy70poUuFEjKPK49HZpixk1bFlnSCQrBF8HJ61Zq%2B1HwBDS4w42iPKzK4YwT5QW86rjb1R9uleRU9COeTDcioSe%2FUi8D9R%2B3GtEapXF0H362%2FQcL8MpoaUg6V&X-Amz-Signature=b9b592a4d22c1f770dd1b655cdc8f7fb594f8717e24659b24ee8992f78a4948b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3C5OHHQ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNMCyYSCate9hOGMrbDc%2FiiAKLklh1MlLbqg4YhmTkLAiBlMAM1eXr4zM%2B%2BrQfDczkfqsly%2FD2fM0sbM%2FqPCRmEESr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMe0MPnW%2BVLw0BkcDUKtwDMb%2FO5tMNrnWV5zeyfKF73f6KNz2J0GJUzM%2BE2ro4GfXoZP%2BDtupXaEU3yXJo5lddP%2BDwlYkmoLxkr2yQ8ihL9XVFtFzzOXW5cw9xiGFhpA5Kzd4QrfT51OxLy3qthrVj3NuJ%2B0E39WvKTCGgFXiw2nXiNvACN%2FVGky%2FDRfG0DDt35DqHzRvsnld9zD6M06z6Mqx1wf1U6hzj3Y%2FvPc9M6iopM848kMKcQG%2BC2SO3k4CyeO1WEFQnOFDiq0vnei1hlzaf3Gc5nqItR9Goqx9gU7kKNlcHnS5xpML5ErQYdr1pSrH1MY7PvJisTgeDLO1lHFev5qfCzLUdgsx7UzlZwDG%2BQY8e%2FQ16bjfiYI5PYYfM%2Fitjau5QxZssXa5kShD3slZQPK0Ih1QDv0cl0BXu5RS3aU9udPSyuMhv6YP%2FDX%2BhziyzzUzKlNNRy84pBJZzvHo%2BeyVmLWVtqdoiDOJQe4dPU6rsnKXS63vPCcaFukxDfav53Ttd3OZqXNpHPAyFN0reTANrTkkfvnfwo%2BL4BWdPtt42w%2F5WLOyPMIfS8iAt40869hJmNfcuIRT8aKx1AAUxrpslyhVA4K4vhZA7rWgDL3tSHoJIPGlNzsHwHBuC%2FAspMFt8WrEfLqUwjJbkwAY6pgG4f%2B%2Fv7r00Z0xIBHDrSi5znzXq34VAK3EYT50S%2F3pTCcKtRwRBD%2Fv79BtRUgM15Zs1v1PZDERL8q%2FKbwDumcLvuNmnFMKbPVK4LUEHy70poUuFEjKPK49HZpixk1bFlnSCQrBF8HJ61Zq%2B1HwBDS4w42iPKzK4YwT5QW86rjb1R9uleRU9COeTDcioSe%2FUi8D9R%2B3GtEapXF0H362%2FQcL8MpoaUg6V&X-Amz-Signature=92e22f29d1c547e15c14713234f5548fdeab5234c485f3ccaac6d729d1d57f52&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
