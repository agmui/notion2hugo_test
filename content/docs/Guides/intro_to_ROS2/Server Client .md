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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7UPGSY4%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCCTR3ZYZqos0wHgeu89coIbFiYC73VeMk49CT6R%2BLTLAIgdkbIFHi1NOsvPMrgNAemCYJ0uknZdGlrfR4VAUnr1fwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEqsM5SWBTo7ceZ2SrcA5eaiCMsymWL7ca%2BPhjvvPdD8beCfYD2DmYfqIxnGnpVKi1DtdWgAX%2F2VO5E%2Bs%2FyjbXUlBw%2FoChq%2F15u3aGVs7BxRrmaag6G3vSyZ5k0tTDpanKKhInLuQI2xH0jMxtoq5mBiOME4XPYIy%2BSFNIdOczHSuZNkR4YHdPkRDkzbLwvVkpQ8QsD%2BIomqn1BojAuphlNpOOW18Yps52lFjIusK1LQTpe0iBucRxdHQpljJYu4vg3tDtlMuPRpO6FQs%2BPtBF9ovYxzonzM%2BvLr2K7FiTQGf%2BnFDsep80NY3BaTEHsp2%2BPZoOU02OG%2F8lBBbdLraoBywHGvaNn%2FjDYh33YmjASuAM%2BMwIld%2BVH80XBnB9jcF9T5WCtnSPif974cmdZ7mGgVhQK%2BxgX3ylltCbFbp%2BcExIXs91JNK6f8jS2DGgsL990B%2BYj8wsAZU5TYG92yKlw0ggbwIzkTitw%2BdEDyvhvRTy6mPfWOmi2OO1TorTPiS91aOogXgh5OubfX%2BCpY%2BcxvzQ3a7o02hxtf%2FVkNPP4TTlDQhjoPoqY83i6wkrOsE5bJliAPpabNVxIsFL%2F9VMLI%2FaPc9nmayZD%2BRKgfvreLEYYrpbKMgEwtajlFckN%2BJuwZTyHwvBQ9nKdMLTg7b8GOqUBRwryIaFeTUN51FHB9pCuIRU5KjgIXRv3%2BMtkOKhDVo7hY7Xk77AcjzTtYMirth%2BSkmxQwR16inkazsREpaaIHvoKFSD2HEXQjb7H2CaU4fdZTXZky0Lm47ETS2vRSxlctigVWutimlbVRNEf3g5UtghsisFKswpTgfwpe1d4dLH11t%2BQarpCIUSIBTXVoeA%2FlvXOedd0qGvvGb3UNOVnNqKU59WW&X-Amz-Signature=eb5d11bf0feaf2b46d03bdaa268f68d5bb84d9006f837b3289cc84f62eae2c7b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7UPGSY4%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCCTR3ZYZqos0wHgeu89coIbFiYC73VeMk49CT6R%2BLTLAIgdkbIFHi1NOsvPMrgNAemCYJ0uknZdGlrfR4VAUnr1fwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEqsM5SWBTo7ceZ2SrcA5eaiCMsymWL7ca%2BPhjvvPdD8beCfYD2DmYfqIxnGnpVKi1DtdWgAX%2F2VO5E%2Bs%2FyjbXUlBw%2FoChq%2F15u3aGVs7BxRrmaag6G3vSyZ5k0tTDpanKKhInLuQI2xH0jMxtoq5mBiOME4XPYIy%2BSFNIdOczHSuZNkR4YHdPkRDkzbLwvVkpQ8QsD%2BIomqn1BojAuphlNpOOW18Yps52lFjIusK1LQTpe0iBucRxdHQpljJYu4vg3tDtlMuPRpO6FQs%2BPtBF9ovYxzonzM%2BvLr2K7FiTQGf%2BnFDsep80NY3BaTEHsp2%2BPZoOU02OG%2F8lBBbdLraoBywHGvaNn%2FjDYh33YmjASuAM%2BMwIld%2BVH80XBnB9jcF9T5WCtnSPif974cmdZ7mGgVhQK%2BxgX3ylltCbFbp%2BcExIXs91JNK6f8jS2DGgsL990B%2BYj8wsAZU5TYG92yKlw0ggbwIzkTitw%2BdEDyvhvRTy6mPfWOmi2OO1TorTPiS91aOogXgh5OubfX%2BCpY%2BcxvzQ3a7o02hxtf%2FVkNPP4TTlDQhjoPoqY83i6wkrOsE5bJliAPpabNVxIsFL%2F9VMLI%2FaPc9nmayZD%2BRKgfvreLEYYrpbKMgEwtajlFckN%2BJuwZTyHwvBQ9nKdMLTg7b8GOqUBRwryIaFeTUN51FHB9pCuIRU5KjgIXRv3%2BMtkOKhDVo7hY7Xk77AcjzTtYMirth%2BSkmxQwR16inkazsREpaaIHvoKFSD2HEXQjb7H2CaU4fdZTXZky0Lm47ETS2vRSxlctigVWutimlbVRNEf3g5UtghsisFKswpTgfwpe1d4dLH11t%2BQarpCIUSIBTXVoeA%2FlvXOedd0qGvvGb3UNOVnNqKU59WW&X-Amz-Signature=a58603c02db2b66974dbdbd34f3cef475820ca3f234aa86ef2c35f4e090b9c27&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7UPGSY4%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCCTR3ZYZqos0wHgeu89coIbFiYC73VeMk49CT6R%2BLTLAIgdkbIFHi1NOsvPMrgNAemCYJ0uknZdGlrfR4VAUnr1fwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEqsM5SWBTo7ceZ2SrcA5eaiCMsymWL7ca%2BPhjvvPdD8beCfYD2DmYfqIxnGnpVKi1DtdWgAX%2F2VO5E%2Bs%2FyjbXUlBw%2FoChq%2F15u3aGVs7BxRrmaag6G3vSyZ5k0tTDpanKKhInLuQI2xH0jMxtoq5mBiOME4XPYIy%2BSFNIdOczHSuZNkR4YHdPkRDkzbLwvVkpQ8QsD%2BIomqn1BojAuphlNpOOW18Yps52lFjIusK1LQTpe0iBucRxdHQpljJYu4vg3tDtlMuPRpO6FQs%2BPtBF9ovYxzonzM%2BvLr2K7FiTQGf%2BnFDsep80NY3BaTEHsp2%2BPZoOU02OG%2F8lBBbdLraoBywHGvaNn%2FjDYh33YmjASuAM%2BMwIld%2BVH80XBnB9jcF9T5WCtnSPif974cmdZ7mGgVhQK%2BxgX3ylltCbFbp%2BcExIXs91JNK6f8jS2DGgsL990B%2BYj8wsAZU5TYG92yKlw0ggbwIzkTitw%2BdEDyvhvRTy6mPfWOmi2OO1TorTPiS91aOogXgh5OubfX%2BCpY%2BcxvzQ3a7o02hxtf%2FVkNPP4TTlDQhjoPoqY83i6wkrOsE5bJliAPpabNVxIsFL%2F9VMLI%2FaPc9nmayZD%2BRKgfvreLEYYrpbKMgEwtajlFckN%2BJuwZTyHwvBQ9nKdMLTg7b8GOqUBRwryIaFeTUN51FHB9pCuIRU5KjgIXRv3%2BMtkOKhDVo7hY7Xk77AcjzTtYMirth%2BSkmxQwR16inkazsREpaaIHvoKFSD2HEXQjb7H2CaU4fdZTXZky0Lm47ETS2vRSxlctigVWutimlbVRNEf3g5UtghsisFKswpTgfwpe1d4dLH11t%2BQarpCIUSIBTXVoeA%2FlvXOedd0qGvvGb3UNOVnNqKU59WW&X-Amz-Signature=ad7ed15768cc6b4553dfa045667c9a551deba24822c54ab8230fa47be28bbbfc&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7UPGSY4%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCCTR3ZYZqos0wHgeu89coIbFiYC73VeMk49CT6R%2BLTLAIgdkbIFHi1NOsvPMrgNAemCYJ0uknZdGlrfR4VAUnr1fwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEqsM5SWBTo7ceZ2SrcA5eaiCMsymWL7ca%2BPhjvvPdD8beCfYD2DmYfqIxnGnpVKi1DtdWgAX%2F2VO5E%2Bs%2FyjbXUlBw%2FoChq%2F15u3aGVs7BxRrmaag6G3vSyZ5k0tTDpanKKhInLuQI2xH0jMxtoq5mBiOME4XPYIy%2BSFNIdOczHSuZNkR4YHdPkRDkzbLwvVkpQ8QsD%2BIomqn1BojAuphlNpOOW18Yps52lFjIusK1LQTpe0iBucRxdHQpljJYu4vg3tDtlMuPRpO6FQs%2BPtBF9ovYxzonzM%2BvLr2K7FiTQGf%2BnFDsep80NY3BaTEHsp2%2BPZoOU02OG%2F8lBBbdLraoBywHGvaNn%2FjDYh33YmjASuAM%2BMwIld%2BVH80XBnB9jcF9T5WCtnSPif974cmdZ7mGgVhQK%2BxgX3ylltCbFbp%2BcExIXs91JNK6f8jS2DGgsL990B%2BYj8wsAZU5TYG92yKlw0ggbwIzkTitw%2BdEDyvhvRTy6mPfWOmi2OO1TorTPiS91aOogXgh5OubfX%2BCpY%2BcxvzQ3a7o02hxtf%2FVkNPP4TTlDQhjoPoqY83i6wkrOsE5bJliAPpabNVxIsFL%2F9VMLI%2FaPc9nmayZD%2BRKgfvreLEYYrpbKMgEwtajlFckN%2BJuwZTyHwvBQ9nKdMLTg7b8GOqUBRwryIaFeTUN51FHB9pCuIRU5KjgIXRv3%2BMtkOKhDVo7hY7Xk77AcjzTtYMirth%2BSkmxQwR16inkazsREpaaIHvoKFSD2HEXQjb7H2CaU4fdZTXZky0Lm47ETS2vRSxlctigVWutimlbVRNEf3g5UtghsisFKswpTgfwpe1d4dLH11t%2BQarpCIUSIBTXVoeA%2FlvXOedd0qGvvGb3UNOVnNqKU59WW&X-Amz-Signature=de57946ecc78e44ad0493dcc0384060ba5646ba6bea61f5a6c5ebedfef55b6b5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7UPGSY4%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCCTR3ZYZqos0wHgeu89coIbFiYC73VeMk49CT6R%2BLTLAIgdkbIFHi1NOsvPMrgNAemCYJ0uknZdGlrfR4VAUnr1fwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEqsM5SWBTo7ceZ2SrcA5eaiCMsymWL7ca%2BPhjvvPdD8beCfYD2DmYfqIxnGnpVKi1DtdWgAX%2F2VO5E%2Bs%2FyjbXUlBw%2FoChq%2F15u3aGVs7BxRrmaag6G3vSyZ5k0tTDpanKKhInLuQI2xH0jMxtoq5mBiOME4XPYIy%2BSFNIdOczHSuZNkR4YHdPkRDkzbLwvVkpQ8QsD%2BIomqn1BojAuphlNpOOW18Yps52lFjIusK1LQTpe0iBucRxdHQpljJYu4vg3tDtlMuPRpO6FQs%2BPtBF9ovYxzonzM%2BvLr2K7FiTQGf%2BnFDsep80NY3BaTEHsp2%2BPZoOU02OG%2F8lBBbdLraoBywHGvaNn%2FjDYh33YmjASuAM%2BMwIld%2BVH80XBnB9jcF9T5WCtnSPif974cmdZ7mGgVhQK%2BxgX3ylltCbFbp%2BcExIXs91JNK6f8jS2DGgsL990B%2BYj8wsAZU5TYG92yKlw0ggbwIzkTitw%2BdEDyvhvRTy6mPfWOmi2OO1TorTPiS91aOogXgh5OubfX%2BCpY%2BcxvzQ3a7o02hxtf%2FVkNPP4TTlDQhjoPoqY83i6wkrOsE5bJliAPpabNVxIsFL%2F9VMLI%2FaPc9nmayZD%2BRKgfvreLEYYrpbKMgEwtajlFckN%2BJuwZTyHwvBQ9nKdMLTg7b8GOqUBRwryIaFeTUN51FHB9pCuIRU5KjgIXRv3%2BMtkOKhDVo7hY7Xk77AcjzTtYMirth%2BSkmxQwR16inkazsREpaaIHvoKFSD2HEXQjb7H2CaU4fdZTXZky0Lm47ETS2vRSxlctigVWutimlbVRNEf3g5UtghsisFKswpTgfwpe1d4dLH11t%2BQarpCIUSIBTXVoeA%2FlvXOedd0qGvvGb3UNOVnNqKU59WW&X-Amz-Signature=79398841c28b7caf239e6e463e53601a5264751c97554d52e6919e2b76cc11cd&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
