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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RUYP56U%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEs05lKVf2HqFX586aJ2t92ZLUlvwEubtZBkRcrWoJ6AiEAq1RZi8dWyo7IbVC%2BzeXA0Ng9sU3mVXaxtU2WkIHUErEq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDE94IWBtHCHk1ssVPyrcA5%2BwARCmFo%2BzimXlHoz%2BaX15hDsCgJ0oFfoXitlWYgdnh4esNrldERXlgeLfGAbLrA%2FbQ6tYbSllraH7KfhJtH6phQa85b3xc%2BA8y0BUXGEbgQNY72jMxw5nN3ipT2mVwqmiqJZtAqLrXdv3lSpcfnOuJfEAdGelVQzJgo2xJdDQrJQJRbZOim7qE7aRLCazWPRqZwi1YgnqGGvjJ5e44eWN7lnv1bmeKu2payP3hfA79Q%2BaZA1S0p%2B1%2BF7fRFpZO93m42XzmD2GVvfTavKOt3PbmmdGZ6srHwvLkuTF4mBYPD3sPsNusd9mSbvM5hJHXyWVvvlP7AFdj1R%2B2MgtdBrQahDl88xzDNCOviOIktoCTZwkN68Ybf2W4AyXRLUIZszjn5AYYBjUeLVXJ8Vo49R8PMsABgJzKywE2pJ9Q8vbxJ2WDxz5sez66TUsUwTrxpQwYj3nIePgE1qPkEGMBqVDENOqOwyTCqykuZ12swnuOpVdDOcBqjzKwETDUfZ3NuNBPWt7aoo%2Fswm5QAiGtSvHszoCNmDgPDQ7TJijLPQ2mQ%2B1aX7xL9TNXjxWIyUm1T3Mj6WZ6inPGEJYFtMrJmPoBb2Q3nEt0Km9VQahXLbrw6by7h%2BvuEOT5QtlMKj6jsIGOqUBXetueIYi8fIT0SCQ3OyslzTa12sk5cX9ZP1pMzIMVEKa6TmZIG1f8HDH%2F9mgsL4P7uXhg098l7zPRRAPTajD9IAC74AWiQww0ftiik3qHrTTVhr2qFCpMZCG%2FjycBps%2BKH46rKZU9nzGCJEClqqCKqhg5SiHcTRskUXz0Jierb9LFL4dtdciqnGDM6rhl7EOh1bf0qSz8jnZpdIunO%2BaAEvUx7es&X-Amz-Signature=5f459a82d50aa87451e790b257813792bec81f0ab01282f299755341b2f44669&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RUYP56U%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEs05lKVf2HqFX586aJ2t92ZLUlvwEubtZBkRcrWoJ6AiEAq1RZi8dWyo7IbVC%2BzeXA0Ng9sU3mVXaxtU2WkIHUErEq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDE94IWBtHCHk1ssVPyrcA5%2BwARCmFo%2BzimXlHoz%2BaX15hDsCgJ0oFfoXitlWYgdnh4esNrldERXlgeLfGAbLrA%2FbQ6tYbSllraH7KfhJtH6phQa85b3xc%2BA8y0BUXGEbgQNY72jMxw5nN3ipT2mVwqmiqJZtAqLrXdv3lSpcfnOuJfEAdGelVQzJgo2xJdDQrJQJRbZOim7qE7aRLCazWPRqZwi1YgnqGGvjJ5e44eWN7lnv1bmeKu2payP3hfA79Q%2BaZA1S0p%2B1%2BF7fRFpZO93m42XzmD2GVvfTavKOt3PbmmdGZ6srHwvLkuTF4mBYPD3sPsNusd9mSbvM5hJHXyWVvvlP7AFdj1R%2B2MgtdBrQahDl88xzDNCOviOIktoCTZwkN68Ybf2W4AyXRLUIZszjn5AYYBjUeLVXJ8Vo49R8PMsABgJzKywE2pJ9Q8vbxJ2WDxz5sez66TUsUwTrxpQwYj3nIePgE1qPkEGMBqVDENOqOwyTCqykuZ12swnuOpVdDOcBqjzKwETDUfZ3NuNBPWt7aoo%2Fswm5QAiGtSvHszoCNmDgPDQ7TJijLPQ2mQ%2B1aX7xL9TNXjxWIyUm1T3Mj6WZ6inPGEJYFtMrJmPoBb2Q3nEt0Km9VQahXLbrw6by7h%2BvuEOT5QtlMKj6jsIGOqUBXetueIYi8fIT0SCQ3OyslzTa12sk5cX9ZP1pMzIMVEKa6TmZIG1f8HDH%2F9mgsL4P7uXhg098l7zPRRAPTajD9IAC74AWiQww0ftiik3qHrTTVhr2qFCpMZCG%2FjycBps%2BKH46rKZU9nzGCJEClqqCKqhg5SiHcTRskUXz0Jierb9LFL4dtdciqnGDM6rhl7EOh1bf0qSz8jnZpdIunO%2BaAEvUx7es&X-Amz-Signature=b2af79ead05e6f86cb2f60d069c695f0c05579c5a63f80d640395139992ca9f5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RUYP56U%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEs05lKVf2HqFX586aJ2t92ZLUlvwEubtZBkRcrWoJ6AiEAq1RZi8dWyo7IbVC%2BzeXA0Ng9sU3mVXaxtU2WkIHUErEq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDE94IWBtHCHk1ssVPyrcA5%2BwARCmFo%2BzimXlHoz%2BaX15hDsCgJ0oFfoXitlWYgdnh4esNrldERXlgeLfGAbLrA%2FbQ6tYbSllraH7KfhJtH6phQa85b3xc%2BA8y0BUXGEbgQNY72jMxw5nN3ipT2mVwqmiqJZtAqLrXdv3lSpcfnOuJfEAdGelVQzJgo2xJdDQrJQJRbZOim7qE7aRLCazWPRqZwi1YgnqGGvjJ5e44eWN7lnv1bmeKu2payP3hfA79Q%2BaZA1S0p%2B1%2BF7fRFpZO93m42XzmD2GVvfTavKOt3PbmmdGZ6srHwvLkuTF4mBYPD3sPsNusd9mSbvM5hJHXyWVvvlP7AFdj1R%2B2MgtdBrQahDl88xzDNCOviOIktoCTZwkN68Ybf2W4AyXRLUIZszjn5AYYBjUeLVXJ8Vo49R8PMsABgJzKywE2pJ9Q8vbxJ2WDxz5sez66TUsUwTrxpQwYj3nIePgE1qPkEGMBqVDENOqOwyTCqykuZ12swnuOpVdDOcBqjzKwETDUfZ3NuNBPWt7aoo%2Fswm5QAiGtSvHszoCNmDgPDQ7TJijLPQ2mQ%2B1aX7xL9TNXjxWIyUm1T3Mj6WZ6inPGEJYFtMrJmPoBb2Q3nEt0Km9VQahXLbrw6by7h%2BvuEOT5QtlMKj6jsIGOqUBXetueIYi8fIT0SCQ3OyslzTa12sk5cX9ZP1pMzIMVEKa6TmZIG1f8HDH%2F9mgsL4P7uXhg098l7zPRRAPTajD9IAC74AWiQww0ftiik3qHrTTVhr2qFCpMZCG%2FjycBps%2BKH46rKZU9nzGCJEClqqCKqhg5SiHcTRskUXz0Jierb9LFL4dtdciqnGDM6rhl7EOh1bf0qSz8jnZpdIunO%2BaAEvUx7es&X-Amz-Signature=04b4f7d894ceda059ad40395fe4d137ebcdf6836a4183c34cc02b4e86be79ab6&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RUYP56U%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEs05lKVf2HqFX586aJ2t92ZLUlvwEubtZBkRcrWoJ6AiEAq1RZi8dWyo7IbVC%2BzeXA0Ng9sU3mVXaxtU2WkIHUErEq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDE94IWBtHCHk1ssVPyrcA5%2BwARCmFo%2BzimXlHoz%2BaX15hDsCgJ0oFfoXitlWYgdnh4esNrldERXlgeLfGAbLrA%2FbQ6tYbSllraH7KfhJtH6phQa85b3xc%2BA8y0BUXGEbgQNY72jMxw5nN3ipT2mVwqmiqJZtAqLrXdv3lSpcfnOuJfEAdGelVQzJgo2xJdDQrJQJRbZOim7qE7aRLCazWPRqZwi1YgnqGGvjJ5e44eWN7lnv1bmeKu2payP3hfA79Q%2BaZA1S0p%2B1%2BF7fRFpZO93m42XzmD2GVvfTavKOt3PbmmdGZ6srHwvLkuTF4mBYPD3sPsNusd9mSbvM5hJHXyWVvvlP7AFdj1R%2B2MgtdBrQahDl88xzDNCOviOIktoCTZwkN68Ybf2W4AyXRLUIZszjn5AYYBjUeLVXJ8Vo49R8PMsABgJzKywE2pJ9Q8vbxJ2WDxz5sez66TUsUwTrxpQwYj3nIePgE1qPkEGMBqVDENOqOwyTCqykuZ12swnuOpVdDOcBqjzKwETDUfZ3NuNBPWt7aoo%2Fswm5QAiGtSvHszoCNmDgPDQ7TJijLPQ2mQ%2B1aX7xL9TNXjxWIyUm1T3Mj6WZ6inPGEJYFtMrJmPoBb2Q3nEt0Km9VQahXLbrw6by7h%2BvuEOT5QtlMKj6jsIGOqUBXetueIYi8fIT0SCQ3OyslzTa12sk5cX9ZP1pMzIMVEKa6TmZIG1f8HDH%2F9mgsL4P7uXhg098l7zPRRAPTajD9IAC74AWiQww0ftiik3qHrTTVhr2qFCpMZCG%2FjycBps%2BKH46rKZU9nzGCJEClqqCKqhg5SiHcTRskUXz0Jierb9LFL4dtdciqnGDM6rhl7EOh1bf0qSz8jnZpdIunO%2BaAEvUx7es&X-Amz-Signature=124581ae72844f3090c7dd0103d61f94c2f8e08b5a24d53f2d08e6cc3890ddc9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RUYP56U%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEs05lKVf2HqFX586aJ2t92ZLUlvwEubtZBkRcrWoJ6AiEAq1RZi8dWyo7IbVC%2BzeXA0Ng9sU3mVXaxtU2WkIHUErEq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDE94IWBtHCHk1ssVPyrcA5%2BwARCmFo%2BzimXlHoz%2BaX15hDsCgJ0oFfoXitlWYgdnh4esNrldERXlgeLfGAbLrA%2FbQ6tYbSllraH7KfhJtH6phQa85b3xc%2BA8y0BUXGEbgQNY72jMxw5nN3ipT2mVwqmiqJZtAqLrXdv3lSpcfnOuJfEAdGelVQzJgo2xJdDQrJQJRbZOim7qE7aRLCazWPRqZwi1YgnqGGvjJ5e44eWN7lnv1bmeKu2payP3hfA79Q%2BaZA1S0p%2B1%2BF7fRFpZO93m42XzmD2GVvfTavKOt3PbmmdGZ6srHwvLkuTF4mBYPD3sPsNusd9mSbvM5hJHXyWVvvlP7AFdj1R%2B2MgtdBrQahDl88xzDNCOviOIktoCTZwkN68Ybf2W4AyXRLUIZszjn5AYYBjUeLVXJ8Vo49R8PMsABgJzKywE2pJ9Q8vbxJ2WDxz5sez66TUsUwTrxpQwYj3nIePgE1qPkEGMBqVDENOqOwyTCqykuZ12swnuOpVdDOcBqjzKwETDUfZ3NuNBPWt7aoo%2Fswm5QAiGtSvHszoCNmDgPDQ7TJijLPQ2mQ%2B1aX7xL9TNXjxWIyUm1T3Mj6WZ6inPGEJYFtMrJmPoBb2Q3nEt0Km9VQahXLbrw6by7h%2BvuEOT5QtlMKj6jsIGOqUBXetueIYi8fIT0SCQ3OyslzTa12sk5cX9ZP1pMzIMVEKa6TmZIG1f8HDH%2F9mgsL4P7uXhg098l7zPRRAPTajD9IAC74AWiQww0ftiik3qHrTTVhr2qFCpMZCG%2FjycBps%2BKH46rKZU9nzGCJEClqqCKqhg5SiHcTRskUXz0Jierb9LFL4dtdciqnGDM6rhl7EOh1bf0qSz8jnZpdIunO%2BaAEvUx7es&X-Amz-Signature=8c3b7de0193733eaaf58283928d969e75c79a05fd8bc40b0d6b32840af661f72&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
