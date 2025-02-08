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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBW6IYE2%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T003455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQD%2FUHA%2F%2F17HbuP4EV4nzAJ7iJW%2Fhwiq7bQES9QgNQZQLwIgc%2BtXofxZ%2F%2FwL5aVbghsZcJyjp88IJ8n7PfETY8bc0k4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVUyeNhYHeKGKjlcSrcAyU1ZjP44wQITPcByFqkHmtv5e92BnK%2FDs5tdAq8zj8GluFNx%2Fidc7swemS%2FQ7YmIuqZgPPsaP7RdC9HYdROTTiRAO9nYWmOzuBTBPiZyMGhJqIr6NaTmziUMyWIyBupdYFz3hq%2BiFKPzxm7fpQ8vir1vLk%2BI4fybnjc4KA4rVvoMI7akHvx2Lu6ughmxLAsA7dYnx9q7fuRUPzNfC%2FBRP21FO9qjL9dFQuDWjKJfufq1rvPsQthCIrbMoa279abZnCIg8YYJ%2BUFfD4%2FGZU%2BnnEnuCRTzH0J6lRQBw3N0kmxO5wHEsZZEz7C8HHrmiMVXiga6QsT9nHrBLTLp40EXBb83tkOiSTOHGj%2BIIZW%2FiRE8PRj1a9gWogX1R%2FIIp2WOe9A6DyaKxVMzBRZv%2BvqXSnrLjQetw11NupF41yomceABbHGC8yxImSTj8MEpC%2BLI78uIcnuZl0f7m6GPoF6xUnleMCkue9XkinVx7Ig5ywYZy%2FltOQ67E7j%2F8MIrKs1dYqCIMrzg3qzNhK6uulQxyihc%2BRwh2Y293KXt1WRdaXYpeYgUyM%2F26z4Zcon684VXQ5m%2BwOr%2FBEJIUCZzWTa08Ywivl%2BqqyabcyCp%2FlvXuCOtqv%2FIWXETAXMJebZMJvAmr0GOqUBQ8KTlj5JTd6cC8cCiRj%2F5jqI2U9yDWmtbfrm%2FJ%2BCKka282xT5BRL1A59zAizg1in%2FSKXLojQKvUjQ1YX2MAAA74A1tSSL9r1ytbtvSLn12E3lsOQqQuWHb5GPs%2BVno9f1%2B%2B%2BbEz9CR4aH9qeXTWPuV760El8g4%2FTCEVjxoHIoZJcHyz0Oa2ZB701YBhpE9GwgX%2FYCeAN43D%2BUL4G1c2ulT1YXK6S&X-Amz-Signature=a330033c512ed5b517d638aedf460ff3af78ca9af42c1521d0e1bad8c978f911&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBW6IYE2%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T003455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQD%2FUHA%2F%2F17HbuP4EV4nzAJ7iJW%2Fhwiq7bQES9QgNQZQLwIgc%2BtXofxZ%2F%2FwL5aVbghsZcJyjp88IJ8n7PfETY8bc0k4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVUyeNhYHeKGKjlcSrcAyU1ZjP44wQITPcByFqkHmtv5e92BnK%2FDs5tdAq8zj8GluFNx%2Fidc7swemS%2FQ7YmIuqZgPPsaP7RdC9HYdROTTiRAO9nYWmOzuBTBPiZyMGhJqIr6NaTmziUMyWIyBupdYFz3hq%2BiFKPzxm7fpQ8vir1vLk%2BI4fybnjc4KA4rVvoMI7akHvx2Lu6ughmxLAsA7dYnx9q7fuRUPzNfC%2FBRP21FO9qjL9dFQuDWjKJfufq1rvPsQthCIrbMoa279abZnCIg8YYJ%2BUFfD4%2FGZU%2BnnEnuCRTzH0J6lRQBw3N0kmxO5wHEsZZEz7C8HHrmiMVXiga6QsT9nHrBLTLp40EXBb83tkOiSTOHGj%2BIIZW%2FiRE8PRj1a9gWogX1R%2FIIp2WOe9A6DyaKxVMzBRZv%2BvqXSnrLjQetw11NupF41yomceABbHGC8yxImSTj8MEpC%2BLI78uIcnuZl0f7m6GPoF6xUnleMCkue9XkinVx7Ig5ywYZy%2FltOQ67E7j%2F8MIrKs1dYqCIMrzg3qzNhK6uulQxyihc%2BRwh2Y293KXt1WRdaXYpeYgUyM%2F26z4Zcon684VXQ5m%2BwOr%2FBEJIUCZzWTa08Ywivl%2BqqyabcyCp%2FlvXuCOtqv%2FIWXETAXMJebZMJvAmr0GOqUBQ8KTlj5JTd6cC8cCiRj%2F5jqI2U9yDWmtbfrm%2FJ%2BCKka282xT5BRL1A59zAizg1in%2FSKXLojQKvUjQ1YX2MAAA74A1tSSL9r1ytbtvSLn12E3lsOQqQuWHb5GPs%2BVno9f1%2B%2B%2BbEz9CR4aH9qeXTWPuV760El8g4%2FTCEVjxoHIoZJcHyz0Oa2ZB701YBhpE9GwgX%2FYCeAN43D%2BUL4G1c2ulT1YXK6S&X-Amz-Signature=0236cd42312e84f1641989987cfdac2151fda0503372d3a48a42cb7c5cb3dd71&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBW6IYE2%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T003455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQD%2FUHA%2F%2F17HbuP4EV4nzAJ7iJW%2Fhwiq7bQES9QgNQZQLwIgc%2BtXofxZ%2F%2FwL5aVbghsZcJyjp88IJ8n7PfETY8bc0k4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVUyeNhYHeKGKjlcSrcAyU1ZjP44wQITPcByFqkHmtv5e92BnK%2FDs5tdAq8zj8GluFNx%2Fidc7swemS%2FQ7YmIuqZgPPsaP7RdC9HYdROTTiRAO9nYWmOzuBTBPiZyMGhJqIr6NaTmziUMyWIyBupdYFz3hq%2BiFKPzxm7fpQ8vir1vLk%2BI4fybnjc4KA4rVvoMI7akHvx2Lu6ughmxLAsA7dYnx9q7fuRUPzNfC%2FBRP21FO9qjL9dFQuDWjKJfufq1rvPsQthCIrbMoa279abZnCIg8YYJ%2BUFfD4%2FGZU%2BnnEnuCRTzH0J6lRQBw3N0kmxO5wHEsZZEz7C8HHrmiMVXiga6QsT9nHrBLTLp40EXBb83tkOiSTOHGj%2BIIZW%2FiRE8PRj1a9gWogX1R%2FIIp2WOe9A6DyaKxVMzBRZv%2BvqXSnrLjQetw11NupF41yomceABbHGC8yxImSTj8MEpC%2BLI78uIcnuZl0f7m6GPoF6xUnleMCkue9XkinVx7Ig5ywYZy%2FltOQ67E7j%2F8MIrKs1dYqCIMrzg3qzNhK6uulQxyihc%2BRwh2Y293KXt1WRdaXYpeYgUyM%2F26z4Zcon684VXQ5m%2BwOr%2FBEJIUCZzWTa08Ywivl%2BqqyabcyCp%2FlvXuCOtqv%2FIWXETAXMJebZMJvAmr0GOqUBQ8KTlj5JTd6cC8cCiRj%2F5jqI2U9yDWmtbfrm%2FJ%2BCKka282xT5BRL1A59zAizg1in%2FSKXLojQKvUjQ1YX2MAAA74A1tSSL9r1ytbtvSLn12E3lsOQqQuWHb5GPs%2BVno9f1%2B%2B%2BbEz9CR4aH9qeXTWPuV760El8g4%2FTCEVjxoHIoZJcHyz0Oa2ZB701YBhpE9GwgX%2FYCeAN43D%2BUL4G1c2ulT1YXK6S&X-Amz-Signature=51172de17f6019d9ff05cb2f9e7b8e166b33b2ad1ab08b4c78e52370c6554da6&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBW6IYE2%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T003455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQD%2FUHA%2F%2F17HbuP4EV4nzAJ7iJW%2Fhwiq7bQES9QgNQZQLwIgc%2BtXofxZ%2F%2FwL5aVbghsZcJyjp88IJ8n7PfETY8bc0k4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVUyeNhYHeKGKjlcSrcAyU1ZjP44wQITPcByFqkHmtv5e92BnK%2FDs5tdAq8zj8GluFNx%2Fidc7swemS%2FQ7YmIuqZgPPsaP7RdC9HYdROTTiRAO9nYWmOzuBTBPiZyMGhJqIr6NaTmziUMyWIyBupdYFz3hq%2BiFKPzxm7fpQ8vir1vLk%2BI4fybnjc4KA4rVvoMI7akHvx2Lu6ughmxLAsA7dYnx9q7fuRUPzNfC%2FBRP21FO9qjL9dFQuDWjKJfufq1rvPsQthCIrbMoa279abZnCIg8YYJ%2BUFfD4%2FGZU%2BnnEnuCRTzH0J6lRQBw3N0kmxO5wHEsZZEz7C8HHrmiMVXiga6QsT9nHrBLTLp40EXBb83tkOiSTOHGj%2BIIZW%2FiRE8PRj1a9gWogX1R%2FIIp2WOe9A6DyaKxVMzBRZv%2BvqXSnrLjQetw11NupF41yomceABbHGC8yxImSTj8MEpC%2BLI78uIcnuZl0f7m6GPoF6xUnleMCkue9XkinVx7Ig5ywYZy%2FltOQ67E7j%2F8MIrKs1dYqCIMrzg3qzNhK6uulQxyihc%2BRwh2Y293KXt1WRdaXYpeYgUyM%2F26z4Zcon684VXQ5m%2BwOr%2FBEJIUCZzWTa08Ywivl%2BqqyabcyCp%2FlvXuCOtqv%2FIWXETAXMJebZMJvAmr0GOqUBQ8KTlj5JTd6cC8cCiRj%2F5jqI2U9yDWmtbfrm%2FJ%2BCKka282xT5BRL1A59zAizg1in%2FSKXLojQKvUjQ1YX2MAAA74A1tSSL9r1ytbtvSLn12E3lsOQqQuWHb5GPs%2BVno9f1%2B%2B%2BbEz9CR4aH9qeXTWPuV760El8g4%2FTCEVjxoHIoZJcHyz0Oa2ZB701YBhpE9GwgX%2FYCeAN43D%2BUL4G1c2ulT1YXK6S&X-Amz-Signature=22480f243f91df5987ee779aa1ea895662cbc4924724d1770b1fb8b94461c398&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBW6IYE2%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T003455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQD%2FUHA%2F%2F17HbuP4EV4nzAJ7iJW%2Fhwiq7bQES9QgNQZQLwIgc%2BtXofxZ%2F%2FwL5aVbghsZcJyjp88IJ8n7PfETY8bc0k4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVUyeNhYHeKGKjlcSrcAyU1ZjP44wQITPcByFqkHmtv5e92BnK%2FDs5tdAq8zj8GluFNx%2Fidc7swemS%2FQ7YmIuqZgPPsaP7RdC9HYdROTTiRAO9nYWmOzuBTBPiZyMGhJqIr6NaTmziUMyWIyBupdYFz3hq%2BiFKPzxm7fpQ8vir1vLk%2BI4fybnjc4KA4rVvoMI7akHvx2Lu6ughmxLAsA7dYnx9q7fuRUPzNfC%2FBRP21FO9qjL9dFQuDWjKJfufq1rvPsQthCIrbMoa279abZnCIg8YYJ%2BUFfD4%2FGZU%2BnnEnuCRTzH0J6lRQBw3N0kmxO5wHEsZZEz7C8HHrmiMVXiga6QsT9nHrBLTLp40EXBb83tkOiSTOHGj%2BIIZW%2FiRE8PRj1a9gWogX1R%2FIIp2WOe9A6DyaKxVMzBRZv%2BvqXSnrLjQetw11NupF41yomceABbHGC8yxImSTj8MEpC%2BLI78uIcnuZl0f7m6GPoF6xUnleMCkue9XkinVx7Ig5ywYZy%2FltOQ67E7j%2F8MIrKs1dYqCIMrzg3qzNhK6uulQxyihc%2BRwh2Y293KXt1WRdaXYpeYgUyM%2F26z4Zcon684VXQ5m%2BwOr%2FBEJIUCZzWTa08Ywivl%2BqqyabcyCp%2FlvXuCOtqv%2FIWXETAXMJebZMJvAmr0GOqUBQ8KTlj5JTd6cC8cCiRj%2F5jqI2U9yDWmtbfrm%2FJ%2BCKka282xT5BRL1A59zAizg1in%2FSKXLojQKvUjQ1YX2MAAA74A1tSSL9r1ytbtvSLn12E3lsOQqQuWHb5GPs%2BVno9f1%2B%2B%2BbEz9CR4aH9qeXTWPuV760El8g4%2FTCEVjxoHIoZJcHyz0Oa2ZB701YBhpE9GwgX%2FYCeAN43D%2BUL4G1c2ulT1YXK6S&X-Amz-Signature=932cb0a93e56eb073efd40bd113b8459cb92438d2470d5e57b8336c68fe18923&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
