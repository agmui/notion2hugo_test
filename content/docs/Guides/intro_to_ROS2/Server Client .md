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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NFD6HZE%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuNJPB6AVASlO%2BYpku1%2BoW4Vht4YEJcHk6aBNDwFgd7AiEAr1PBqSyvmV1uxR0Gy9sYT4IfwXmHvCIsiXp1w8b6YeEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyau%2BY8lqeiRDckECrcAxwQQtxEL%2B8pH7N1B13K43dnzlsG0JHLWfohAQ%2FG08PAg7wu8M%2BaSZPnvs6BNeRMdShv5aDidz9EMS%2FPwwt40QKkP1VhVablgVTRrjMFGUc0J5JQ6FbdmLZ4G12RTv%2FiG89mZ8%2FqK6Bxw26hQ6R8RZSMtrZUYSKjDFunq0F%2FF1gASbILiJ0DDSBwZd0qTpZ1nm0egnUDUURHvBDi6vJyq0A1UClSImBM%2FNwkD3yfBu42DC7XMWZBN3HbVuifwIWX1NoYoLLJEE2Vv2BvhBbXV8iYFn5xi0K23lsyyHtEyaCPshR4kJhPywY2dODLD5RwvnbMOU6ZApnwzCHPD85o9XJPfjysr2y9SkuvZLxPTxS4VbrwxdkAux%2BaH%2BcKQcOWb6GrDrL0uKGdWc3IrlaIbkJDPeMkJTATII6fhzlo5247x45WMQ2utvmk%2FftIoRuC1fltbv4ipsUCEgR8qPOe3CZuD21DVowdLrO%2BuiWQLVkP%2FtjpX%2FFNAhAy4RxoIYqyY4niWcdKk8lpRkJq4tEK9alSOsrnkYaYvQ7rkI%2FnZP9vPHnz1gX7161M3uBys8DcclLat2Oe3gkTHA5rt%2FRFkfG1II1vjLtXk4Ao4wix95QBT49NppNkTDuqh%2FX%2BMOmWlb4GOqUBoYkvK7j3RgP2XjnjzFkPi%2F97mhpr3AU3oMHQEpA5%2BvZDtKns%2BNAK3OlP7dchj%2BO2BR7RlXlR3sGTzfRs4rmtcASU%2BVG4sJ0byNBY9x6%2BQDpq5mLtHdEI5YMl1eDGZ2ELFUtvFAk9N4CNCJI5WtzYAS5m9qP6dnlrjEz%2BoSlO2WchzegdRT6Zif%2BF051e9I0CwXaV7XpcPR3K%2BZOiU15PXPHPJa4K&X-Amz-Signature=b07cb3ed628b72fa1afdc1a422060378ce6b3deaa26c516f22b67f7c1a5bd5b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NFD6HZE%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuNJPB6AVASlO%2BYpku1%2BoW4Vht4YEJcHk6aBNDwFgd7AiEAr1PBqSyvmV1uxR0Gy9sYT4IfwXmHvCIsiXp1w8b6YeEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyau%2BY8lqeiRDckECrcAxwQQtxEL%2B8pH7N1B13K43dnzlsG0JHLWfohAQ%2FG08PAg7wu8M%2BaSZPnvs6BNeRMdShv5aDidz9EMS%2FPwwt40QKkP1VhVablgVTRrjMFGUc0J5JQ6FbdmLZ4G12RTv%2FiG89mZ8%2FqK6Bxw26hQ6R8RZSMtrZUYSKjDFunq0F%2FF1gASbILiJ0DDSBwZd0qTpZ1nm0egnUDUURHvBDi6vJyq0A1UClSImBM%2FNwkD3yfBu42DC7XMWZBN3HbVuifwIWX1NoYoLLJEE2Vv2BvhBbXV8iYFn5xi0K23lsyyHtEyaCPshR4kJhPywY2dODLD5RwvnbMOU6ZApnwzCHPD85o9XJPfjysr2y9SkuvZLxPTxS4VbrwxdkAux%2BaH%2BcKQcOWb6GrDrL0uKGdWc3IrlaIbkJDPeMkJTATII6fhzlo5247x45WMQ2utvmk%2FftIoRuC1fltbv4ipsUCEgR8qPOe3CZuD21DVowdLrO%2BuiWQLVkP%2FtjpX%2FFNAhAy4RxoIYqyY4niWcdKk8lpRkJq4tEK9alSOsrnkYaYvQ7rkI%2FnZP9vPHnz1gX7161M3uBys8DcclLat2Oe3gkTHA5rt%2FRFkfG1II1vjLtXk4Ao4wix95QBT49NppNkTDuqh%2FX%2BMOmWlb4GOqUBoYkvK7j3RgP2XjnjzFkPi%2F97mhpr3AU3oMHQEpA5%2BvZDtKns%2BNAK3OlP7dchj%2BO2BR7RlXlR3sGTzfRs4rmtcASU%2BVG4sJ0byNBY9x6%2BQDpq5mLtHdEI5YMl1eDGZ2ELFUtvFAk9N4CNCJI5WtzYAS5m9qP6dnlrjEz%2BoSlO2WchzegdRT6Zif%2BF051e9I0CwXaV7XpcPR3K%2BZOiU15PXPHPJa4K&X-Amz-Signature=d83db070dcbb36d40c8f9c7c26b098ca14092669c37dcd3c4dfa7ae65e0fbe42&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NFD6HZE%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuNJPB6AVASlO%2BYpku1%2BoW4Vht4YEJcHk6aBNDwFgd7AiEAr1PBqSyvmV1uxR0Gy9sYT4IfwXmHvCIsiXp1w8b6YeEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyau%2BY8lqeiRDckECrcAxwQQtxEL%2B8pH7N1B13K43dnzlsG0JHLWfohAQ%2FG08PAg7wu8M%2BaSZPnvs6BNeRMdShv5aDidz9EMS%2FPwwt40QKkP1VhVablgVTRrjMFGUc0J5JQ6FbdmLZ4G12RTv%2FiG89mZ8%2FqK6Bxw26hQ6R8RZSMtrZUYSKjDFunq0F%2FF1gASbILiJ0DDSBwZd0qTpZ1nm0egnUDUURHvBDi6vJyq0A1UClSImBM%2FNwkD3yfBu42DC7XMWZBN3HbVuifwIWX1NoYoLLJEE2Vv2BvhBbXV8iYFn5xi0K23lsyyHtEyaCPshR4kJhPywY2dODLD5RwvnbMOU6ZApnwzCHPD85o9XJPfjysr2y9SkuvZLxPTxS4VbrwxdkAux%2BaH%2BcKQcOWb6GrDrL0uKGdWc3IrlaIbkJDPeMkJTATII6fhzlo5247x45WMQ2utvmk%2FftIoRuC1fltbv4ipsUCEgR8qPOe3CZuD21DVowdLrO%2BuiWQLVkP%2FtjpX%2FFNAhAy4RxoIYqyY4niWcdKk8lpRkJq4tEK9alSOsrnkYaYvQ7rkI%2FnZP9vPHnz1gX7161M3uBys8DcclLat2Oe3gkTHA5rt%2FRFkfG1II1vjLtXk4Ao4wix95QBT49NppNkTDuqh%2FX%2BMOmWlb4GOqUBoYkvK7j3RgP2XjnjzFkPi%2F97mhpr3AU3oMHQEpA5%2BvZDtKns%2BNAK3OlP7dchj%2BO2BR7RlXlR3sGTzfRs4rmtcASU%2BVG4sJ0byNBY9x6%2BQDpq5mLtHdEI5YMl1eDGZ2ELFUtvFAk9N4CNCJI5WtzYAS5m9qP6dnlrjEz%2BoSlO2WchzegdRT6Zif%2BF051e9I0CwXaV7XpcPR3K%2BZOiU15PXPHPJa4K&X-Amz-Signature=18750b2a00fc76e2291ba0caec3a054453a6df3f858a23084ee20bf4b08cf55a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NFD6HZE%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuNJPB6AVASlO%2BYpku1%2BoW4Vht4YEJcHk6aBNDwFgd7AiEAr1PBqSyvmV1uxR0Gy9sYT4IfwXmHvCIsiXp1w8b6YeEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyau%2BY8lqeiRDckECrcAxwQQtxEL%2B8pH7N1B13K43dnzlsG0JHLWfohAQ%2FG08PAg7wu8M%2BaSZPnvs6BNeRMdShv5aDidz9EMS%2FPwwt40QKkP1VhVablgVTRrjMFGUc0J5JQ6FbdmLZ4G12RTv%2FiG89mZ8%2FqK6Bxw26hQ6R8RZSMtrZUYSKjDFunq0F%2FF1gASbILiJ0DDSBwZd0qTpZ1nm0egnUDUURHvBDi6vJyq0A1UClSImBM%2FNwkD3yfBu42DC7XMWZBN3HbVuifwIWX1NoYoLLJEE2Vv2BvhBbXV8iYFn5xi0K23lsyyHtEyaCPshR4kJhPywY2dODLD5RwvnbMOU6ZApnwzCHPD85o9XJPfjysr2y9SkuvZLxPTxS4VbrwxdkAux%2BaH%2BcKQcOWb6GrDrL0uKGdWc3IrlaIbkJDPeMkJTATII6fhzlo5247x45WMQ2utvmk%2FftIoRuC1fltbv4ipsUCEgR8qPOe3CZuD21DVowdLrO%2BuiWQLVkP%2FtjpX%2FFNAhAy4RxoIYqyY4niWcdKk8lpRkJq4tEK9alSOsrnkYaYvQ7rkI%2FnZP9vPHnz1gX7161M3uBys8DcclLat2Oe3gkTHA5rt%2FRFkfG1II1vjLtXk4Ao4wix95QBT49NppNkTDuqh%2FX%2BMOmWlb4GOqUBoYkvK7j3RgP2XjnjzFkPi%2F97mhpr3AU3oMHQEpA5%2BvZDtKns%2BNAK3OlP7dchj%2BO2BR7RlXlR3sGTzfRs4rmtcASU%2BVG4sJ0byNBY9x6%2BQDpq5mLtHdEI5YMl1eDGZ2ELFUtvFAk9N4CNCJI5WtzYAS5m9qP6dnlrjEz%2BoSlO2WchzegdRT6Zif%2BF051e9I0CwXaV7XpcPR3K%2BZOiU15PXPHPJa4K&X-Amz-Signature=ca2dbf25ca55ad846780dae83958fb17142ae5778d4dd3c96f1f6d4bc30b14db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NFD6HZE%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuNJPB6AVASlO%2BYpku1%2BoW4Vht4YEJcHk6aBNDwFgd7AiEAr1PBqSyvmV1uxR0Gy9sYT4IfwXmHvCIsiXp1w8b6YeEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyau%2BY8lqeiRDckECrcAxwQQtxEL%2B8pH7N1B13K43dnzlsG0JHLWfohAQ%2FG08PAg7wu8M%2BaSZPnvs6BNeRMdShv5aDidz9EMS%2FPwwt40QKkP1VhVablgVTRrjMFGUc0J5JQ6FbdmLZ4G12RTv%2FiG89mZ8%2FqK6Bxw26hQ6R8RZSMtrZUYSKjDFunq0F%2FF1gASbILiJ0DDSBwZd0qTpZ1nm0egnUDUURHvBDi6vJyq0A1UClSImBM%2FNwkD3yfBu42DC7XMWZBN3HbVuifwIWX1NoYoLLJEE2Vv2BvhBbXV8iYFn5xi0K23lsyyHtEyaCPshR4kJhPywY2dODLD5RwvnbMOU6ZApnwzCHPD85o9XJPfjysr2y9SkuvZLxPTxS4VbrwxdkAux%2BaH%2BcKQcOWb6GrDrL0uKGdWc3IrlaIbkJDPeMkJTATII6fhzlo5247x45WMQ2utvmk%2FftIoRuC1fltbv4ipsUCEgR8qPOe3CZuD21DVowdLrO%2BuiWQLVkP%2FtjpX%2FFNAhAy4RxoIYqyY4niWcdKk8lpRkJq4tEK9alSOsrnkYaYvQ7rkI%2FnZP9vPHnz1gX7161M3uBys8DcclLat2Oe3gkTHA5rt%2FRFkfG1II1vjLtXk4Ao4wix95QBT49NppNkTDuqh%2FX%2BMOmWlb4GOqUBoYkvK7j3RgP2XjnjzFkPi%2F97mhpr3AU3oMHQEpA5%2BvZDtKns%2BNAK3OlP7dchj%2BO2BR7RlXlR3sGTzfRs4rmtcASU%2BVG4sJ0byNBY9x6%2BQDpq5mLtHdEI5YMl1eDGZ2ELFUtvFAk9N4CNCJI5WtzYAS5m9qP6dnlrjEz%2BoSlO2WchzegdRT6Zif%2BF051e9I0CwXaV7XpcPR3K%2BZOiU15PXPHPJa4K&X-Amz-Signature=5b71db3ca302e13402fed5126b417d8c22c987392f4cd7432b7511649003783f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
