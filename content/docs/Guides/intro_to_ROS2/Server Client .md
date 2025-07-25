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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YWYWTKS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDdgr%2BS%2BgcNmHkHzp0X384EguKCcZfa0x8tOlzFwJFlPAiEA%2B7G6A3wVYgkLtPaWeqWIaXIpgyTOKy8XOXwAE2rhkrMq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDM226V5nPVVBkZEICrcA0i5xkpVVw4uVgWaRk6%2FdShv%2Fvc%2Bs3WBsBxZCXciLrETFW40sOKBfBz6xEUCv9IFecq7ffJg5tuV18r06YpS0V0%2FlGYYm5D%2Fn%2Bi8wqu8wHMrzyqsM7aeVWsCiRVMb6oQXu61Yf4RpbM8A8OC0DI3RJeaBx0anEPx6J2or0%2F4HltkmrSgMX9uVrgkjMzeUpFKBajod3oxj8izYkjawIKV0Vxkp24szH84VUcJOrCxWDk9SbB5qHrVFf%2FL6p2os9eVlrdCrO%2BkBjvaLjwr5bFuNGTbXNKNdQyltYkSj%2BI9jszs9hyUMKx9jDv88r6YFz0LWXzgt4B8Q%2BpfTObSLsbeGHQfMmJpAEBL4Iv4HibMClIyn0tpiQUrkkwHdIL5AcAnS39Sa8Dsk6WBLwuM85o7tcr2N8zOeLgNuUaDgjKfY37tTpAKzbnV1HIxsckK69UR5PQCMHoyiHao3Sz0TxbuPdKTk1eo5WElfwBJ8F33E9a6K2Qmq%2B4tHVl2CxUO%2F1nZwg%2B7fWsb9eOl31ReTAlBA%2B6Jqqn4XUG45Gj3CdqKMeAwH%2FiK2Oxjge%2Fw%2BN4eZ035kMOVwzGRzI3HrkLmL%2FzxAk%2Bt0hzKDoin%2BpKpJEF1EYEUEdUVU%2BnGVNw4TJvyMOrRj8QGOqUBprAJ1s7nthiPY4QEdzeO6w06jMFNsDTG53AXP6mgAvEqLd3Dtxt3%2Fen7XXyDyMJwe5o1zy4%2BluXcp%2Fmoo2pOwUbD%2B8dFPWdALxUeyDRSHZr7JNTqpa5leSlzIav0%2BTL%2FxqlgGiZRG2YQ6XIHvt3M3bOSWsOQCCD80TDamiK9RURUe8hmLGKoH27ooGwY%2FUBbxoqdBpP7M3Tdfv8btCTXaESOJFbL&X-Amz-Signature=8afb386cdbbd651a86b0d90f4c9a7912b9eaa4c722734bb550ce2433bbfa705d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YWYWTKS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDdgr%2BS%2BgcNmHkHzp0X384EguKCcZfa0x8tOlzFwJFlPAiEA%2B7G6A3wVYgkLtPaWeqWIaXIpgyTOKy8XOXwAE2rhkrMq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDM226V5nPVVBkZEICrcA0i5xkpVVw4uVgWaRk6%2FdShv%2Fvc%2Bs3WBsBxZCXciLrETFW40sOKBfBz6xEUCv9IFecq7ffJg5tuV18r06YpS0V0%2FlGYYm5D%2Fn%2Bi8wqu8wHMrzyqsM7aeVWsCiRVMb6oQXu61Yf4RpbM8A8OC0DI3RJeaBx0anEPx6J2or0%2F4HltkmrSgMX9uVrgkjMzeUpFKBajod3oxj8izYkjawIKV0Vxkp24szH84VUcJOrCxWDk9SbB5qHrVFf%2FL6p2os9eVlrdCrO%2BkBjvaLjwr5bFuNGTbXNKNdQyltYkSj%2BI9jszs9hyUMKx9jDv88r6YFz0LWXzgt4B8Q%2BpfTObSLsbeGHQfMmJpAEBL4Iv4HibMClIyn0tpiQUrkkwHdIL5AcAnS39Sa8Dsk6WBLwuM85o7tcr2N8zOeLgNuUaDgjKfY37tTpAKzbnV1HIxsckK69UR5PQCMHoyiHao3Sz0TxbuPdKTk1eo5WElfwBJ8F33E9a6K2Qmq%2B4tHVl2CxUO%2F1nZwg%2B7fWsb9eOl31ReTAlBA%2B6Jqqn4XUG45Gj3CdqKMeAwH%2FiK2Oxjge%2Fw%2BN4eZ035kMOVwzGRzI3HrkLmL%2FzxAk%2Bt0hzKDoin%2BpKpJEF1EYEUEdUVU%2BnGVNw4TJvyMOrRj8QGOqUBprAJ1s7nthiPY4QEdzeO6w06jMFNsDTG53AXP6mgAvEqLd3Dtxt3%2Fen7XXyDyMJwe5o1zy4%2BluXcp%2Fmoo2pOwUbD%2B8dFPWdALxUeyDRSHZr7JNTqpa5leSlzIav0%2BTL%2FxqlgGiZRG2YQ6XIHvt3M3bOSWsOQCCD80TDamiK9RURUe8hmLGKoH27ooGwY%2FUBbxoqdBpP7M3Tdfv8btCTXaESOJFbL&X-Amz-Signature=7a6a8e0a142cf14f36f70784c04f7c2866f68df93ee3e98c32bf180094e65e66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YWYWTKS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDdgr%2BS%2BgcNmHkHzp0X384EguKCcZfa0x8tOlzFwJFlPAiEA%2B7G6A3wVYgkLtPaWeqWIaXIpgyTOKy8XOXwAE2rhkrMq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDM226V5nPVVBkZEICrcA0i5xkpVVw4uVgWaRk6%2FdShv%2Fvc%2Bs3WBsBxZCXciLrETFW40sOKBfBz6xEUCv9IFecq7ffJg5tuV18r06YpS0V0%2FlGYYm5D%2Fn%2Bi8wqu8wHMrzyqsM7aeVWsCiRVMb6oQXu61Yf4RpbM8A8OC0DI3RJeaBx0anEPx6J2or0%2F4HltkmrSgMX9uVrgkjMzeUpFKBajod3oxj8izYkjawIKV0Vxkp24szH84VUcJOrCxWDk9SbB5qHrVFf%2FL6p2os9eVlrdCrO%2BkBjvaLjwr5bFuNGTbXNKNdQyltYkSj%2BI9jszs9hyUMKx9jDv88r6YFz0LWXzgt4B8Q%2BpfTObSLsbeGHQfMmJpAEBL4Iv4HibMClIyn0tpiQUrkkwHdIL5AcAnS39Sa8Dsk6WBLwuM85o7tcr2N8zOeLgNuUaDgjKfY37tTpAKzbnV1HIxsckK69UR5PQCMHoyiHao3Sz0TxbuPdKTk1eo5WElfwBJ8F33E9a6K2Qmq%2B4tHVl2CxUO%2F1nZwg%2B7fWsb9eOl31ReTAlBA%2B6Jqqn4XUG45Gj3CdqKMeAwH%2FiK2Oxjge%2Fw%2BN4eZ035kMOVwzGRzI3HrkLmL%2FzxAk%2Bt0hzKDoin%2BpKpJEF1EYEUEdUVU%2BnGVNw4TJvyMOrRj8QGOqUBprAJ1s7nthiPY4QEdzeO6w06jMFNsDTG53AXP6mgAvEqLd3Dtxt3%2Fen7XXyDyMJwe5o1zy4%2BluXcp%2Fmoo2pOwUbD%2B8dFPWdALxUeyDRSHZr7JNTqpa5leSlzIav0%2BTL%2FxqlgGiZRG2YQ6XIHvt3M3bOSWsOQCCD80TDamiK9RURUe8hmLGKoH27ooGwY%2FUBbxoqdBpP7M3Tdfv8btCTXaESOJFbL&X-Amz-Signature=f27ef86604441f051e52b4d0601abbef73e833eb7e0c8a1292f98e3111482963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YWYWTKS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDdgr%2BS%2BgcNmHkHzp0X384EguKCcZfa0x8tOlzFwJFlPAiEA%2B7G6A3wVYgkLtPaWeqWIaXIpgyTOKy8XOXwAE2rhkrMq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDM226V5nPVVBkZEICrcA0i5xkpVVw4uVgWaRk6%2FdShv%2Fvc%2Bs3WBsBxZCXciLrETFW40sOKBfBz6xEUCv9IFecq7ffJg5tuV18r06YpS0V0%2FlGYYm5D%2Fn%2Bi8wqu8wHMrzyqsM7aeVWsCiRVMb6oQXu61Yf4RpbM8A8OC0DI3RJeaBx0anEPx6J2or0%2F4HltkmrSgMX9uVrgkjMzeUpFKBajod3oxj8izYkjawIKV0Vxkp24szH84VUcJOrCxWDk9SbB5qHrVFf%2FL6p2os9eVlrdCrO%2BkBjvaLjwr5bFuNGTbXNKNdQyltYkSj%2BI9jszs9hyUMKx9jDv88r6YFz0LWXzgt4B8Q%2BpfTObSLsbeGHQfMmJpAEBL4Iv4HibMClIyn0tpiQUrkkwHdIL5AcAnS39Sa8Dsk6WBLwuM85o7tcr2N8zOeLgNuUaDgjKfY37tTpAKzbnV1HIxsckK69UR5PQCMHoyiHao3Sz0TxbuPdKTk1eo5WElfwBJ8F33E9a6K2Qmq%2B4tHVl2CxUO%2F1nZwg%2B7fWsb9eOl31ReTAlBA%2B6Jqqn4XUG45Gj3CdqKMeAwH%2FiK2Oxjge%2Fw%2BN4eZ035kMOVwzGRzI3HrkLmL%2FzxAk%2Bt0hzKDoin%2BpKpJEF1EYEUEdUVU%2BnGVNw4TJvyMOrRj8QGOqUBprAJ1s7nthiPY4QEdzeO6w06jMFNsDTG53AXP6mgAvEqLd3Dtxt3%2Fen7XXyDyMJwe5o1zy4%2BluXcp%2Fmoo2pOwUbD%2B8dFPWdALxUeyDRSHZr7JNTqpa5leSlzIav0%2BTL%2FxqlgGiZRG2YQ6XIHvt3M3bOSWsOQCCD80TDamiK9RURUe8hmLGKoH27ooGwY%2FUBbxoqdBpP7M3Tdfv8btCTXaESOJFbL&X-Amz-Signature=68a6572a74404c212865ec799342f2a334db4904c0ba9b076e61f14e697a3418&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YWYWTKS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDdgr%2BS%2BgcNmHkHzp0X384EguKCcZfa0x8tOlzFwJFlPAiEA%2B7G6A3wVYgkLtPaWeqWIaXIpgyTOKy8XOXwAE2rhkrMq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDM226V5nPVVBkZEICrcA0i5xkpVVw4uVgWaRk6%2FdShv%2Fvc%2Bs3WBsBxZCXciLrETFW40sOKBfBz6xEUCv9IFecq7ffJg5tuV18r06YpS0V0%2FlGYYm5D%2Fn%2Bi8wqu8wHMrzyqsM7aeVWsCiRVMb6oQXu61Yf4RpbM8A8OC0DI3RJeaBx0anEPx6J2or0%2F4HltkmrSgMX9uVrgkjMzeUpFKBajod3oxj8izYkjawIKV0Vxkp24szH84VUcJOrCxWDk9SbB5qHrVFf%2FL6p2os9eVlrdCrO%2BkBjvaLjwr5bFuNGTbXNKNdQyltYkSj%2BI9jszs9hyUMKx9jDv88r6YFz0LWXzgt4B8Q%2BpfTObSLsbeGHQfMmJpAEBL4Iv4HibMClIyn0tpiQUrkkwHdIL5AcAnS39Sa8Dsk6WBLwuM85o7tcr2N8zOeLgNuUaDgjKfY37tTpAKzbnV1HIxsckK69UR5PQCMHoyiHao3Sz0TxbuPdKTk1eo5WElfwBJ8F33E9a6K2Qmq%2B4tHVl2CxUO%2F1nZwg%2B7fWsb9eOl31ReTAlBA%2B6Jqqn4XUG45Gj3CdqKMeAwH%2FiK2Oxjge%2Fw%2BN4eZ035kMOVwzGRzI3HrkLmL%2FzxAk%2Bt0hzKDoin%2BpKpJEF1EYEUEdUVU%2BnGVNw4TJvyMOrRj8QGOqUBprAJ1s7nthiPY4QEdzeO6w06jMFNsDTG53AXP6mgAvEqLd3Dtxt3%2Fen7XXyDyMJwe5o1zy4%2BluXcp%2Fmoo2pOwUbD%2B8dFPWdALxUeyDRSHZr7JNTqpa5leSlzIav0%2BTL%2FxqlgGiZRG2YQ6XIHvt3M3bOSWsOQCCD80TDamiK9RURUe8hmLGKoH27ooGwY%2FUBbxoqdBpP7M3Tdfv8btCTXaESOJFbL&X-Amz-Signature=c9d5c52263b63181a66c86535414d878834d7d382b44d9e15b9ff7162a4186d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
