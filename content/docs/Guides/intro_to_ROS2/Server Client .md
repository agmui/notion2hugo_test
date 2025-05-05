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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AEHHPJI%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdo1IiJYsiyyP37DB9IlvOpVf%2FngACSCCcghjbjOG9FAiEAyU9Xr9x9e0%2F2kXGPbEL3TmMSETebbZgFaIow5UQaiUAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDF06utjgbF9H0VQNTyrcAzWlaTatDe53Sk2eQjpBJSMH3Pcp%2FWp8irRDScJLY8aw9%2BH1MW6710XHqVZC3QYA7P4T8O7GRVf4gThEhRI6w%2BNKaHXPaSkzb8y%2FoP6ANggbmXjhoTlfJKa8GDp3otPw8F4SlO8R3igJOgVl42N%2FpOoGGK7UgSbgp6Lz5q9gwLGBD%2FRsRURiVFrLoGZ67hPlJFwaUIAcxZxfuygMexzRzmBAGn7DPlk9ug%2BslLClz1k4J3OETqGTBzSsFHbcqZiqCJqpItnSjp82N1JcXoZcZLD%2B0bERKyq0zNth8mSX6MuYW6JQvJthOBlHOD%2BTlTK7Nrav78byTnlNI9mjodjTHtHkI0%2FfslkpEpK18bNbYcTy%2BGD57JPPxkjCkkynqmoWAUZkfAW0L%2B4%2BPV1iRzRhfeagQ7rMKt2GluSooZ9ThsEPg1BuGHMDv13Vgl1lGfH%2Bu57LG5DIpooOdpz81fUsgcJeMt6KgTDOhDY6iobEufougqPGTFu96qbEE1nce562zXqpbgXqM6hrz%2BuTmCdS4F%2FKU59YPEkVGenpyjXbU2%2Bio8sPXJjTZG4NiIfRnecZySqeDgGtpRONskrCMLigzlNhYap%2BdUB%2BsIPgN8ddCb%2B%2Fn5CmpS%2BniJK3F639MNWx5MAGOqUB63zMJymJFRBZ%2BakuGIpKD4aPRDyPd6qXf%2FLluruxZTfo6mj95q1pIUnoxcrPP3%2BwlDtpO5CtmvlcjrdBI32a0m4PO7nLdyU4TiybRhga1oEz94bjfzqMIGU3FzTtYG3K%2B1%2BzxaoSHppchUpYB1xvIDtAHhPYOiZDzKpIWW0a7LeJ78z456j1peA3lrjwmxkqC4HQ7MYO1EVQJEN1pDhGzupTXiVB&X-Amz-Signature=d410e01647dc24062a75983541ccbd00566a0af53829984645bd5315eaf99fc6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AEHHPJI%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdo1IiJYsiyyP37DB9IlvOpVf%2FngACSCCcghjbjOG9FAiEAyU9Xr9x9e0%2F2kXGPbEL3TmMSETebbZgFaIow5UQaiUAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDF06utjgbF9H0VQNTyrcAzWlaTatDe53Sk2eQjpBJSMH3Pcp%2FWp8irRDScJLY8aw9%2BH1MW6710XHqVZC3QYA7P4T8O7GRVf4gThEhRI6w%2BNKaHXPaSkzb8y%2FoP6ANggbmXjhoTlfJKa8GDp3otPw8F4SlO8R3igJOgVl42N%2FpOoGGK7UgSbgp6Lz5q9gwLGBD%2FRsRURiVFrLoGZ67hPlJFwaUIAcxZxfuygMexzRzmBAGn7DPlk9ug%2BslLClz1k4J3OETqGTBzSsFHbcqZiqCJqpItnSjp82N1JcXoZcZLD%2B0bERKyq0zNth8mSX6MuYW6JQvJthOBlHOD%2BTlTK7Nrav78byTnlNI9mjodjTHtHkI0%2FfslkpEpK18bNbYcTy%2BGD57JPPxkjCkkynqmoWAUZkfAW0L%2B4%2BPV1iRzRhfeagQ7rMKt2GluSooZ9ThsEPg1BuGHMDv13Vgl1lGfH%2Bu57LG5DIpooOdpz81fUsgcJeMt6KgTDOhDY6iobEufougqPGTFu96qbEE1nce562zXqpbgXqM6hrz%2BuTmCdS4F%2FKU59YPEkVGenpyjXbU2%2Bio8sPXJjTZG4NiIfRnecZySqeDgGtpRONskrCMLigzlNhYap%2BdUB%2BsIPgN8ddCb%2B%2Fn5CmpS%2BniJK3F639MNWx5MAGOqUB63zMJymJFRBZ%2BakuGIpKD4aPRDyPd6qXf%2FLluruxZTfo6mj95q1pIUnoxcrPP3%2BwlDtpO5CtmvlcjrdBI32a0m4PO7nLdyU4TiybRhga1oEz94bjfzqMIGU3FzTtYG3K%2B1%2BzxaoSHppchUpYB1xvIDtAHhPYOiZDzKpIWW0a7LeJ78z456j1peA3lrjwmxkqC4HQ7MYO1EVQJEN1pDhGzupTXiVB&X-Amz-Signature=73f6ef21fd093705d2e6e8dd4680e77ee0f6c4496c7489cccfc41303294cf7f1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AEHHPJI%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdo1IiJYsiyyP37DB9IlvOpVf%2FngACSCCcghjbjOG9FAiEAyU9Xr9x9e0%2F2kXGPbEL3TmMSETebbZgFaIow5UQaiUAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDF06utjgbF9H0VQNTyrcAzWlaTatDe53Sk2eQjpBJSMH3Pcp%2FWp8irRDScJLY8aw9%2BH1MW6710XHqVZC3QYA7P4T8O7GRVf4gThEhRI6w%2BNKaHXPaSkzb8y%2FoP6ANggbmXjhoTlfJKa8GDp3otPw8F4SlO8R3igJOgVl42N%2FpOoGGK7UgSbgp6Lz5q9gwLGBD%2FRsRURiVFrLoGZ67hPlJFwaUIAcxZxfuygMexzRzmBAGn7DPlk9ug%2BslLClz1k4J3OETqGTBzSsFHbcqZiqCJqpItnSjp82N1JcXoZcZLD%2B0bERKyq0zNth8mSX6MuYW6JQvJthOBlHOD%2BTlTK7Nrav78byTnlNI9mjodjTHtHkI0%2FfslkpEpK18bNbYcTy%2BGD57JPPxkjCkkynqmoWAUZkfAW0L%2B4%2BPV1iRzRhfeagQ7rMKt2GluSooZ9ThsEPg1BuGHMDv13Vgl1lGfH%2Bu57LG5DIpooOdpz81fUsgcJeMt6KgTDOhDY6iobEufougqPGTFu96qbEE1nce562zXqpbgXqM6hrz%2BuTmCdS4F%2FKU59YPEkVGenpyjXbU2%2Bio8sPXJjTZG4NiIfRnecZySqeDgGtpRONskrCMLigzlNhYap%2BdUB%2BsIPgN8ddCb%2B%2Fn5CmpS%2BniJK3F639MNWx5MAGOqUB63zMJymJFRBZ%2BakuGIpKD4aPRDyPd6qXf%2FLluruxZTfo6mj95q1pIUnoxcrPP3%2BwlDtpO5CtmvlcjrdBI32a0m4PO7nLdyU4TiybRhga1oEz94bjfzqMIGU3FzTtYG3K%2B1%2BzxaoSHppchUpYB1xvIDtAHhPYOiZDzKpIWW0a7LeJ78z456j1peA3lrjwmxkqC4HQ7MYO1EVQJEN1pDhGzupTXiVB&X-Amz-Signature=8f7b436742c9cebc13f1e79001ef7f4c23468eacce9825c737784a7e7043f861&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AEHHPJI%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdo1IiJYsiyyP37DB9IlvOpVf%2FngACSCCcghjbjOG9FAiEAyU9Xr9x9e0%2F2kXGPbEL3TmMSETebbZgFaIow5UQaiUAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDF06utjgbF9H0VQNTyrcAzWlaTatDe53Sk2eQjpBJSMH3Pcp%2FWp8irRDScJLY8aw9%2BH1MW6710XHqVZC3QYA7P4T8O7GRVf4gThEhRI6w%2BNKaHXPaSkzb8y%2FoP6ANggbmXjhoTlfJKa8GDp3otPw8F4SlO8R3igJOgVl42N%2FpOoGGK7UgSbgp6Lz5q9gwLGBD%2FRsRURiVFrLoGZ67hPlJFwaUIAcxZxfuygMexzRzmBAGn7DPlk9ug%2BslLClz1k4J3OETqGTBzSsFHbcqZiqCJqpItnSjp82N1JcXoZcZLD%2B0bERKyq0zNth8mSX6MuYW6JQvJthOBlHOD%2BTlTK7Nrav78byTnlNI9mjodjTHtHkI0%2FfslkpEpK18bNbYcTy%2BGD57JPPxkjCkkynqmoWAUZkfAW0L%2B4%2BPV1iRzRhfeagQ7rMKt2GluSooZ9ThsEPg1BuGHMDv13Vgl1lGfH%2Bu57LG5DIpooOdpz81fUsgcJeMt6KgTDOhDY6iobEufougqPGTFu96qbEE1nce562zXqpbgXqM6hrz%2BuTmCdS4F%2FKU59YPEkVGenpyjXbU2%2Bio8sPXJjTZG4NiIfRnecZySqeDgGtpRONskrCMLigzlNhYap%2BdUB%2BsIPgN8ddCb%2B%2Fn5CmpS%2BniJK3F639MNWx5MAGOqUB63zMJymJFRBZ%2BakuGIpKD4aPRDyPd6qXf%2FLluruxZTfo6mj95q1pIUnoxcrPP3%2BwlDtpO5CtmvlcjrdBI32a0m4PO7nLdyU4TiybRhga1oEz94bjfzqMIGU3FzTtYG3K%2B1%2BzxaoSHppchUpYB1xvIDtAHhPYOiZDzKpIWW0a7LeJ78z456j1peA3lrjwmxkqC4HQ7MYO1EVQJEN1pDhGzupTXiVB&X-Amz-Signature=089a5871b9f6542c01a3a785b9ac0bbbc00c077563fd8902eadb7ba2db50f1c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AEHHPJI%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdo1IiJYsiyyP37DB9IlvOpVf%2FngACSCCcghjbjOG9FAiEAyU9Xr9x9e0%2F2kXGPbEL3TmMSETebbZgFaIow5UQaiUAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDF06utjgbF9H0VQNTyrcAzWlaTatDe53Sk2eQjpBJSMH3Pcp%2FWp8irRDScJLY8aw9%2BH1MW6710XHqVZC3QYA7P4T8O7GRVf4gThEhRI6w%2BNKaHXPaSkzb8y%2FoP6ANggbmXjhoTlfJKa8GDp3otPw8F4SlO8R3igJOgVl42N%2FpOoGGK7UgSbgp6Lz5q9gwLGBD%2FRsRURiVFrLoGZ67hPlJFwaUIAcxZxfuygMexzRzmBAGn7DPlk9ug%2BslLClz1k4J3OETqGTBzSsFHbcqZiqCJqpItnSjp82N1JcXoZcZLD%2B0bERKyq0zNth8mSX6MuYW6JQvJthOBlHOD%2BTlTK7Nrav78byTnlNI9mjodjTHtHkI0%2FfslkpEpK18bNbYcTy%2BGD57JPPxkjCkkynqmoWAUZkfAW0L%2B4%2BPV1iRzRhfeagQ7rMKt2GluSooZ9ThsEPg1BuGHMDv13Vgl1lGfH%2Bu57LG5DIpooOdpz81fUsgcJeMt6KgTDOhDY6iobEufougqPGTFu96qbEE1nce562zXqpbgXqM6hrz%2BuTmCdS4F%2FKU59YPEkVGenpyjXbU2%2Bio8sPXJjTZG4NiIfRnecZySqeDgGtpRONskrCMLigzlNhYap%2BdUB%2BsIPgN8ddCb%2B%2Fn5CmpS%2BniJK3F639MNWx5MAGOqUB63zMJymJFRBZ%2BakuGIpKD4aPRDyPd6qXf%2FLluruxZTfo6mj95q1pIUnoxcrPP3%2BwlDtpO5CtmvlcjrdBI32a0m4PO7nLdyU4TiybRhga1oEz94bjfzqMIGU3FzTtYG3K%2B1%2BzxaoSHppchUpYB1xvIDtAHhPYOiZDzKpIWW0a7LeJ78z456j1peA3lrjwmxkqC4HQ7MYO1EVQJEN1pDhGzupTXiVB&X-Amz-Signature=a19dd7389e462e6db1a169e682493a3318003a8ca143414e8208bd788f653395&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
