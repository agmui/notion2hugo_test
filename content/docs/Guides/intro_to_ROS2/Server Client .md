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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFKWVRKU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBLmiIwsIWH5GzG1RapeOcCJVOPMz9QlHG4nW0vwgogAiEAuVVnMiaI%2B%2FgkN26ZdGK2m0W6I6E40FxyMaf2ouuq6eIqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8SOCtU8Cae07l3%2FCrcA2z1l33iQT2jHiicGMhfH4gtKG2AYGvvN6BoGOwHgGJqxueFmOVju0OgzDFA0opkycX01vuJ5OPcPcnvQmK2i4B945VA1oeMkNDzPeetp81yAcNH8bDrzEBen0UVOT3Ddxm47DYbbQhZCqH85cnXjdO20fY7ydSob7yCEM1SVEuTrDWmmVy590oRHBH5ggsDVhk%2B3J5YuVVDLVQPY4HsC%2FxCZKZWkLJpZRvQyNohCuxRYoDtruYXBoSYpRMa6e8Lqa4JjjeFv0fVcG%2FnT2IiEnHdlhEnYStUdiwaZwdAeKH9wpQFApIeN1%2BdV5OihUB8ykbf4VHoupfTlYti05RPSxbmP04Yzwk7hqV4u%2BhbQrQkzYFQRmB3FhX7JObFpeJtMYdMzAa67KVuQeClzFIQf4x3Z6OW4TkhsNkjfuDqOJAereWg9qb%2FixYNiVo2oL0qKx0rNYF9leeS4NCN%2Byp1cYrotHTx4ueMknhxy%2BUIi6JFxDangjTZ6ac2M29cdtVD5yIMM8gIsAItJ45efNzwwx9dpQT%2BtH%2F4VSAA50DGmZj0qb90ymFz1zZ1xDvbmYEVTcS%2FzjlE5%2FXuI5Qz3H5sA7xTBDcYXz0qc5n3sC02zYeh2q5uZ0dNPXLxp706MN6wub8GOqUB79H5kBzQxTBdElPPeT3zPf0hXx0TnFWxGTEEQCmwDsfGkrZkvVLi6SgCq8PR1T1mLvLPiU8dblc9xxvmnUiXdgvqgO9I0KuCDsMge3%2B5KB1VX5ZAcaHYE91La0mTe0qLkLMiNogoQH9AowpWOvaG0dqk%2BFKczCm241j1QfOiocrtnOcyJBPEMVRQYA7VZBa%2FvwPppt3fxfpVDTR7k4hemO6Ly3wm&X-Amz-Signature=017674d2a8b19c66b9c26efe4d3622541ec9c249db5ce911f095e162c8657a57&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFKWVRKU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBLmiIwsIWH5GzG1RapeOcCJVOPMz9QlHG4nW0vwgogAiEAuVVnMiaI%2B%2FgkN26ZdGK2m0W6I6E40FxyMaf2ouuq6eIqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8SOCtU8Cae07l3%2FCrcA2z1l33iQT2jHiicGMhfH4gtKG2AYGvvN6BoGOwHgGJqxueFmOVju0OgzDFA0opkycX01vuJ5OPcPcnvQmK2i4B945VA1oeMkNDzPeetp81yAcNH8bDrzEBen0UVOT3Ddxm47DYbbQhZCqH85cnXjdO20fY7ydSob7yCEM1SVEuTrDWmmVy590oRHBH5ggsDVhk%2B3J5YuVVDLVQPY4HsC%2FxCZKZWkLJpZRvQyNohCuxRYoDtruYXBoSYpRMa6e8Lqa4JjjeFv0fVcG%2FnT2IiEnHdlhEnYStUdiwaZwdAeKH9wpQFApIeN1%2BdV5OihUB8ykbf4VHoupfTlYti05RPSxbmP04Yzwk7hqV4u%2BhbQrQkzYFQRmB3FhX7JObFpeJtMYdMzAa67KVuQeClzFIQf4x3Z6OW4TkhsNkjfuDqOJAereWg9qb%2FixYNiVo2oL0qKx0rNYF9leeS4NCN%2Byp1cYrotHTx4ueMknhxy%2BUIi6JFxDangjTZ6ac2M29cdtVD5yIMM8gIsAItJ45efNzwwx9dpQT%2BtH%2F4VSAA50DGmZj0qb90ymFz1zZ1xDvbmYEVTcS%2FzjlE5%2FXuI5Qz3H5sA7xTBDcYXz0qc5n3sC02zYeh2q5uZ0dNPXLxp706MN6wub8GOqUB79H5kBzQxTBdElPPeT3zPf0hXx0TnFWxGTEEQCmwDsfGkrZkvVLi6SgCq8PR1T1mLvLPiU8dblc9xxvmnUiXdgvqgO9I0KuCDsMge3%2B5KB1VX5ZAcaHYE91La0mTe0qLkLMiNogoQH9AowpWOvaG0dqk%2BFKczCm241j1QfOiocrtnOcyJBPEMVRQYA7VZBa%2FvwPppt3fxfpVDTR7k4hemO6Ly3wm&X-Amz-Signature=e81a232c178da1415b04a8f28a58fce23b42481c634c3106569b7a0e134058a8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFKWVRKU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBLmiIwsIWH5GzG1RapeOcCJVOPMz9QlHG4nW0vwgogAiEAuVVnMiaI%2B%2FgkN26ZdGK2m0W6I6E40FxyMaf2ouuq6eIqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8SOCtU8Cae07l3%2FCrcA2z1l33iQT2jHiicGMhfH4gtKG2AYGvvN6BoGOwHgGJqxueFmOVju0OgzDFA0opkycX01vuJ5OPcPcnvQmK2i4B945VA1oeMkNDzPeetp81yAcNH8bDrzEBen0UVOT3Ddxm47DYbbQhZCqH85cnXjdO20fY7ydSob7yCEM1SVEuTrDWmmVy590oRHBH5ggsDVhk%2B3J5YuVVDLVQPY4HsC%2FxCZKZWkLJpZRvQyNohCuxRYoDtruYXBoSYpRMa6e8Lqa4JjjeFv0fVcG%2FnT2IiEnHdlhEnYStUdiwaZwdAeKH9wpQFApIeN1%2BdV5OihUB8ykbf4VHoupfTlYti05RPSxbmP04Yzwk7hqV4u%2BhbQrQkzYFQRmB3FhX7JObFpeJtMYdMzAa67KVuQeClzFIQf4x3Z6OW4TkhsNkjfuDqOJAereWg9qb%2FixYNiVo2oL0qKx0rNYF9leeS4NCN%2Byp1cYrotHTx4ueMknhxy%2BUIi6JFxDangjTZ6ac2M29cdtVD5yIMM8gIsAItJ45efNzwwx9dpQT%2BtH%2F4VSAA50DGmZj0qb90ymFz1zZ1xDvbmYEVTcS%2FzjlE5%2FXuI5Qz3H5sA7xTBDcYXz0qc5n3sC02zYeh2q5uZ0dNPXLxp706MN6wub8GOqUB79H5kBzQxTBdElPPeT3zPf0hXx0TnFWxGTEEQCmwDsfGkrZkvVLi6SgCq8PR1T1mLvLPiU8dblc9xxvmnUiXdgvqgO9I0KuCDsMge3%2B5KB1VX5ZAcaHYE91La0mTe0qLkLMiNogoQH9AowpWOvaG0dqk%2BFKczCm241j1QfOiocrtnOcyJBPEMVRQYA7VZBa%2FvwPppt3fxfpVDTR7k4hemO6Ly3wm&X-Amz-Signature=afb4864c803f37ebebb21d365c94309b3575d7a082ba32c138147495db4decc0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFKWVRKU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBLmiIwsIWH5GzG1RapeOcCJVOPMz9QlHG4nW0vwgogAiEAuVVnMiaI%2B%2FgkN26ZdGK2m0W6I6E40FxyMaf2ouuq6eIqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8SOCtU8Cae07l3%2FCrcA2z1l33iQT2jHiicGMhfH4gtKG2AYGvvN6BoGOwHgGJqxueFmOVju0OgzDFA0opkycX01vuJ5OPcPcnvQmK2i4B945VA1oeMkNDzPeetp81yAcNH8bDrzEBen0UVOT3Ddxm47DYbbQhZCqH85cnXjdO20fY7ydSob7yCEM1SVEuTrDWmmVy590oRHBH5ggsDVhk%2B3J5YuVVDLVQPY4HsC%2FxCZKZWkLJpZRvQyNohCuxRYoDtruYXBoSYpRMa6e8Lqa4JjjeFv0fVcG%2FnT2IiEnHdlhEnYStUdiwaZwdAeKH9wpQFApIeN1%2BdV5OihUB8ykbf4VHoupfTlYti05RPSxbmP04Yzwk7hqV4u%2BhbQrQkzYFQRmB3FhX7JObFpeJtMYdMzAa67KVuQeClzFIQf4x3Z6OW4TkhsNkjfuDqOJAereWg9qb%2FixYNiVo2oL0qKx0rNYF9leeS4NCN%2Byp1cYrotHTx4ueMknhxy%2BUIi6JFxDangjTZ6ac2M29cdtVD5yIMM8gIsAItJ45efNzwwx9dpQT%2BtH%2F4VSAA50DGmZj0qb90ymFz1zZ1xDvbmYEVTcS%2FzjlE5%2FXuI5Qz3H5sA7xTBDcYXz0qc5n3sC02zYeh2q5uZ0dNPXLxp706MN6wub8GOqUB79H5kBzQxTBdElPPeT3zPf0hXx0TnFWxGTEEQCmwDsfGkrZkvVLi6SgCq8PR1T1mLvLPiU8dblc9xxvmnUiXdgvqgO9I0KuCDsMge3%2B5KB1VX5ZAcaHYE91La0mTe0qLkLMiNogoQH9AowpWOvaG0dqk%2BFKczCm241j1QfOiocrtnOcyJBPEMVRQYA7VZBa%2FvwPppt3fxfpVDTR7k4hemO6Ly3wm&X-Amz-Signature=731f364a6e203097ccbcffe1f46acfcd126c3193ac10a9187063be474f432c5b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFKWVRKU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBLmiIwsIWH5GzG1RapeOcCJVOPMz9QlHG4nW0vwgogAiEAuVVnMiaI%2B%2FgkN26ZdGK2m0W6I6E40FxyMaf2ouuq6eIqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8SOCtU8Cae07l3%2FCrcA2z1l33iQT2jHiicGMhfH4gtKG2AYGvvN6BoGOwHgGJqxueFmOVju0OgzDFA0opkycX01vuJ5OPcPcnvQmK2i4B945VA1oeMkNDzPeetp81yAcNH8bDrzEBen0UVOT3Ddxm47DYbbQhZCqH85cnXjdO20fY7ydSob7yCEM1SVEuTrDWmmVy590oRHBH5ggsDVhk%2B3J5YuVVDLVQPY4HsC%2FxCZKZWkLJpZRvQyNohCuxRYoDtruYXBoSYpRMa6e8Lqa4JjjeFv0fVcG%2FnT2IiEnHdlhEnYStUdiwaZwdAeKH9wpQFApIeN1%2BdV5OihUB8ykbf4VHoupfTlYti05RPSxbmP04Yzwk7hqV4u%2BhbQrQkzYFQRmB3FhX7JObFpeJtMYdMzAa67KVuQeClzFIQf4x3Z6OW4TkhsNkjfuDqOJAereWg9qb%2FixYNiVo2oL0qKx0rNYF9leeS4NCN%2Byp1cYrotHTx4ueMknhxy%2BUIi6JFxDangjTZ6ac2M29cdtVD5yIMM8gIsAItJ45efNzwwx9dpQT%2BtH%2F4VSAA50DGmZj0qb90ymFz1zZ1xDvbmYEVTcS%2FzjlE5%2FXuI5Qz3H5sA7xTBDcYXz0qc5n3sC02zYeh2q5uZ0dNPXLxp706MN6wub8GOqUB79H5kBzQxTBdElPPeT3zPf0hXx0TnFWxGTEEQCmwDsfGkrZkvVLi6SgCq8PR1T1mLvLPiU8dblc9xxvmnUiXdgvqgO9I0KuCDsMge3%2B5KB1VX5ZAcaHYE91La0mTe0qLkLMiNogoQH9AowpWOvaG0dqk%2BFKczCm241j1QfOiocrtnOcyJBPEMVRQYA7VZBa%2FvwPppt3fxfpVDTR7k4hemO6Ly3wm&X-Amz-Signature=d97df932147666e5d2acbfe031395e8cd098d32ee4f75db6fc8029830562d484&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
