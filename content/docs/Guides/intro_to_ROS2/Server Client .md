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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MR3XFXP%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIEn3mULPCg3pTCeIpWIaWaiCmqdAvnMSfE3sjPc%2FDCr%2BAiEAkkmOErnUuEpZ5J6bES9KXvD%2B340ag1C00HGw3CtP%2F4kq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKVgwW2tLptVa4yjDCrcA2NyB6wbIot368rinoi90Y4Y1e6Xv0OraVNlyCfkvJMJ6XyJIq2UE6jRYG6HZbmolN%2FzWZchwsxJK58MVuQPaiwcSUYLWDgjjD9%2FrKqSYl4gI9bSS9VJ%2FhMKlK8a3LEIWIAgcznVPKwxovKz7zd2zylt68w9yixoFoFZq4ZzaWZbT5ZzN0U3%2F6dM5dbN2NvJi0ufwsECkkpxgxIAjDCcyYasJFbPBFxDnl2PzFBAvNKy87DOT0MvKwW%2B0rXH1Szt7x5U4O5vKjDuYRF8JWDxtTDZtPUdTf%2FEfFFFsIYTl%2FnB%2Fd6lk1DflcN%2B82VNjZ9TxkVvb8MxPln6zZX%2FLSMZbst1QvJTyJzpa2ixmYjrKTg%2BddYb3UGod9QW%2B2XUQfcN63hvPGYP0%2B54p93eemyUYQX%2BeikYrW51XwZQQc2DQ1FTZ7UZYk1Kjxru47DwUBLcweylLMCUy66h0nOcdNyRh1Y6YMPuyhoA11sP83CHtHTUbBxqenGX%2BX0W7N3gDJkg93yKCq9ZHobwBWE3cw6gwZUkooLshbal4mC2ztFbRlypM8xp3q2lFDf5fRGXWdxFXCiPwCp%2BOK%2BuNEa6Y58PHcwJz6AKwlS5w3cbqd7dgm%2FcBIwAqHnsyIesOBPWMMqSssIGOqUBMHr8xczrTjVH97ukj4vnvpq%2BXvngHzRwK7BOG7g2ILI4VfhaGBw8qoeiiScJDj35p%2FkDerQtMxZ8Lb%2BJxSP1ga529jGFuhWy6v8DED%2BhA8i1SBfn%2Bo7PwmHxm9FU9gVK3ayYVpu3BymfbaSk%2BUvBU4igyPS8x6bKHw%2Bar1FB9YhJnb6xNjvoxi892VbHxVD5Iq0ZIbri4wQ4%2Bf7IVrCy%2FnX25VOV&X-Amz-Signature=5989b4315a9d1cf5e27f8b4816757643f96a570c5f12a34806e0a6b849943df7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MR3XFXP%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIEn3mULPCg3pTCeIpWIaWaiCmqdAvnMSfE3sjPc%2FDCr%2BAiEAkkmOErnUuEpZ5J6bES9KXvD%2B340ag1C00HGw3CtP%2F4kq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKVgwW2tLptVa4yjDCrcA2NyB6wbIot368rinoi90Y4Y1e6Xv0OraVNlyCfkvJMJ6XyJIq2UE6jRYG6HZbmolN%2FzWZchwsxJK58MVuQPaiwcSUYLWDgjjD9%2FrKqSYl4gI9bSS9VJ%2FhMKlK8a3LEIWIAgcznVPKwxovKz7zd2zylt68w9yixoFoFZq4ZzaWZbT5ZzN0U3%2F6dM5dbN2NvJi0ufwsECkkpxgxIAjDCcyYasJFbPBFxDnl2PzFBAvNKy87DOT0MvKwW%2B0rXH1Szt7x5U4O5vKjDuYRF8JWDxtTDZtPUdTf%2FEfFFFsIYTl%2FnB%2Fd6lk1DflcN%2B82VNjZ9TxkVvb8MxPln6zZX%2FLSMZbst1QvJTyJzpa2ixmYjrKTg%2BddYb3UGod9QW%2B2XUQfcN63hvPGYP0%2B54p93eemyUYQX%2BeikYrW51XwZQQc2DQ1FTZ7UZYk1Kjxru47DwUBLcweylLMCUy66h0nOcdNyRh1Y6YMPuyhoA11sP83CHtHTUbBxqenGX%2BX0W7N3gDJkg93yKCq9ZHobwBWE3cw6gwZUkooLshbal4mC2ztFbRlypM8xp3q2lFDf5fRGXWdxFXCiPwCp%2BOK%2BuNEa6Y58PHcwJz6AKwlS5w3cbqd7dgm%2FcBIwAqHnsyIesOBPWMMqSssIGOqUBMHr8xczrTjVH97ukj4vnvpq%2BXvngHzRwK7BOG7g2ILI4VfhaGBw8qoeiiScJDj35p%2FkDerQtMxZ8Lb%2BJxSP1ga529jGFuhWy6v8DED%2BhA8i1SBfn%2Bo7PwmHxm9FU9gVK3ayYVpu3BymfbaSk%2BUvBU4igyPS8x6bKHw%2Bar1FB9YhJnb6xNjvoxi892VbHxVD5Iq0ZIbri4wQ4%2Bf7IVrCy%2FnX25VOV&X-Amz-Signature=43f477e59480d047aa83a09a8858702cd3785ae882059f65aa63c63db814bec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MR3XFXP%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIEn3mULPCg3pTCeIpWIaWaiCmqdAvnMSfE3sjPc%2FDCr%2BAiEAkkmOErnUuEpZ5J6bES9KXvD%2B340ag1C00HGw3CtP%2F4kq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKVgwW2tLptVa4yjDCrcA2NyB6wbIot368rinoi90Y4Y1e6Xv0OraVNlyCfkvJMJ6XyJIq2UE6jRYG6HZbmolN%2FzWZchwsxJK58MVuQPaiwcSUYLWDgjjD9%2FrKqSYl4gI9bSS9VJ%2FhMKlK8a3LEIWIAgcznVPKwxovKz7zd2zylt68w9yixoFoFZq4ZzaWZbT5ZzN0U3%2F6dM5dbN2NvJi0ufwsECkkpxgxIAjDCcyYasJFbPBFxDnl2PzFBAvNKy87DOT0MvKwW%2B0rXH1Szt7x5U4O5vKjDuYRF8JWDxtTDZtPUdTf%2FEfFFFsIYTl%2FnB%2Fd6lk1DflcN%2B82VNjZ9TxkVvb8MxPln6zZX%2FLSMZbst1QvJTyJzpa2ixmYjrKTg%2BddYb3UGod9QW%2B2XUQfcN63hvPGYP0%2B54p93eemyUYQX%2BeikYrW51XwZQQc2DQ1FTZ7UZYk1Kjxru47DwUBLcweylLMCUy66h0nOcdNyRh1Y6YMPuyhoA11sP83CHtHTUbBxqenGX%2BX0W7N3gDJkg93yKCq9ZHobwBWE3cw6gwZUkooLshbal4mC2ztFbRlypM8xp3q2lFDf5fRGXWdxFXCiPwCp%2BOK%2BuNEa6Y58PHcwJz6AKwlS5w3cbqd7dgm%2FcBIwAqHnsyIesOBPWMMqSssIGOqUBMHr8xczrTjVH97ukj4vnvpq%2BXvngHzRwK7BOG7g2ILI4VfhaGBw8qoeiiScJDj35p%2FkDerQtMxZ8Lb%2BJxSP1ga529jGFuhWy6v8DED%2BhA8i1SBfn%2Bo7PwmHxm9FU9gVK3ayYVpu3BymfbaSk%2BUvBU4igyPS8x6bKHw%2Bar1FB9YhJnb6xNjvoxi892VbHxVD5Iq0ZIbri4wQ4%2Bf7IVrCy%2FnX25VOV&X-Amz-Signature=e28a4ca78524bb023b9bb35b028e841f64ff7cb2e8bcba96ebfe20745a64dbcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MR3XFXP%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIEn3mULPCg3pTCeIpWIaWaiCmqdAvnMSfE3sjPc%2FDCr%2BAiEAkkmOErnUuEpZ5J6bES9KXvD%2B340ag1C00HGw3CtP%2F4kq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKVgwW2tLptVa4yjDCrcA2NyB6wbIot368rinoi90Y4Y1e6Xv0OraVNlyCfkvJMJ6XyJIq2UE6jRYG6HZbmolN%2FzWZchwsxJK58MVuQPaiwcSUYLWDgjjD9%2FrKqSYl4gI9bSS9VJ%2FhMKlK8a3LEIWIAgcznVPKwxovKz7zd2zylt68w9yixoFoFZq4ZzaWZbT5ZzN0U3%2F6dM5dbN2NvJi0ufwsECkkpxgxIAjDCcyYasJFbPBFxDnl2PzFBAvNKy87DOT0MvKwW%2B0rXH1Szt7x5U4O5vKjDuYRF8JWDxtTDZtPUdTf%2FEfFFFsIYTl%2FnB%2Fd6lk1DflcN%2B82VNjZ9TxkVvb8MxPln6zZX%2FLSMZbst1QvJTyJzpa2ixmYjrKTg%2BddYb3UGod9QW%2B2XUQfcN63hvPGYP0%2B54p93eemyUYQX%2BeikYrW51XwZQQc2DQ1FTZ7UZYk1Kjxru47DwUBLcweylLMCUy66h0nOcdNyRh1Y6YMPuyhoA11sP83CHtHTUbBxqenGX%2BX0W7N3gDJkg93yKCq9ZHobwBWE3cw6gwZUkooLshbal4mC2ztFbRlypM8xp3q2lFDf5fRGXWdxFXCiPwCp%2BOK%2BuNEa6Y58PHcwJz6AKwlS5w3cbqd7dgm%2FcBIwAqHnsyIesOBPWMMqSssIGOqUBMHr8xczrTjVH97ukj4vnvpq%2BXvngHzRwK7BOG7g2ILI4VfhaGBw8qoeiiScJDj35p%2FkDerQtMxZ8Lb%2BJxSP1ga529jGFuhWy6v8DED%2BhA8i1SBfn%2Bo7PwmHxm9FU9gVK3ayYVpu3BymfbaSk%2BUvBU4igyPS8x6bKHw%2Bar1FB9YhJnb6xNjvoxi892VbHxVD5Iq0ZIbri4wQ4%2Bf7IVrCy%2FnX25VOV&X-Amz-Signature=1b7bb7ebe779b92ed80d6f2a1037db1ca265cf756928fe322fc9ca54490dba39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MR3XFXP%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIEn3mULPCg3pTCeIpWIaWaiCmqdAvnMSfE3sjPc%2FDCr%2BAiEAkkmOErnUuEpZ5J6bES9KXvD%2B340ag1C00HGw3CtP%2F4kq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKVgwW2tLptVa4yjDCrcA2NyB6wbIot368rinoi90Y4Y1e6Xv0OraVNlyCfkvJMJ6XyJIq2UE6jRYG6HZbmolN%2FzWZchwsxJK58MVuQPaiwcSUYLWDgjjD9%2FrKqSYl4gI9bSS9VJ%2FhMKlK8a3LEIWIAgcznVPKwxovKz7zd2zylt68w9yixoFoFZq4ZzaWZbT5ZzN0U3%2F6dM5dbN2NvJi0ufwsECkkpxgxIAjDCcyYasJFbPBFxDnl2PzFBAvNKy87DOT0MvKwW%2B0rXH1Szt7x5U4O5vKjDuYRF8JWDxtTDZtPUdTf%2FEfFFFsIYTl%2FnB%2Fd6lk1DflcN%2B82VNjZ9TxkVvb8MxPln6zZX%2FLSMZbst1QvJTyJzpa2ixmYjrKTg%2BddYb3UGod9QW%2B2XUQfcN63hvPGYP0%2B54p93eemyUYQX%2BeikYrW51XwZQQc2DQ1FTZ7UZYk1Kjxru47DwUBLcweylLMCUy66h0nOcdNyRh1Y6YMPuyhoA11sP83CHtHTUbBxqenGX%2BX0W7N3gDJkg93yKCq9ZHobwBWE3cw6gwZUkooLshbal4mC2ztFbRlypM8xp3q2lFDf5fRGXWdxFXCiPwCp%2BOK%2BuNEa6Y58PHcwJz6AKwlS5w3cbqd7dgm%2FcBIwAqHnsyIesOBPWMMqSssIGOqUBMHr8xczrTjVH97ukj4vnvpq%2BXvngHzRwK7BOG7g2ILI4VfhaGBw8qoeiiScJDj35p%2FkDerQtMxZ8Lb%2BJxSP1ga529jGFuhWy6v8DED%2BhA8i1SBfn%2Bo7PwmHxm9FU9gVK3ayYVpu3BymfbaSk%2BUvBU4igyPS8x6bKHw%2Bar1FB9YhJnb6xNjvoxi892VbHxVD5Iq0ZIbri4wQ4%2Bf7IVrCy%2FnX25VOV&X-Amz-Signature=db4243dc6360acf2816b1c9b253289cc34d1246d9db1b2b79fcb97bb7f3a8ae8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
