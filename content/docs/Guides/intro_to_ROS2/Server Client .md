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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS4JXAA6%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIGfHWJ5mtDjrwTFENMkqv8GGAwMxoQBkmfD9qIkLgvoGAiEAnVeKaqaHMcdfVW4l98qDLqjWQjvmqvZkFYJ7WRJtlikq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLLxnBmGFDgJ%2BxkAWCrcA%2BiOmTafGne165pl4WpC8Tb9PG9BL%2F4RLetiA4QA2CVhe2NadOTPrBjAGQqAbBLt0FM4Pv7ODrll6E2ZmFkHZxGilIsNXoOhb9Z%2ByMuAeva0tioSgNCas%2B8eoDQ51WomD1TIgCwVvewIuvGVdXNrUcUHrZ0A2ZAMgyEh2vUGdBhWIH9JLWk9X84X0iJiipUB9SGrtFf%2ByWZ8JdEj0zlIl%2BsGsJkJkN6Oe9b8oVRbC9UGu4Ertjb5L3%2BEpelghXkEV6UjzPHofRB%2FkDKATMvYdokVlJH9pd6uTRHSZU%2B3nIh4bjmmo48PWQYKP4sJODUqYp7e2D%2F2kXyPq1QkX2Iz6MXs7I9dK3LwUKeKHC0ulmhjcRyoclRFSL6hCfF3RVcwo4vhtQe6tSBqEGqux7AnJ5wtOQZywpERI8MKmfktWTYOYC2R1s9X4EhfuM8%2FSMAbI4jUKKYytGtla3eB8VQa0J%2F0ImzgjSVNYli55XIXg0XTJf7mVwcy3A4udX8RvYdUlVLaUuPYN1kd7Sgi55SWqsLPRIq0%2FPRUNXBFMdjaakKiH%2BlwGIPk9a%2FmJab49CNyj54JmGO2nXqvOSZS7LZaLoQNjlCFuS6COhVmz0jchqqtUcbJbfDwrPKJ4C0DMML%2Fmb0GOqUBbbJZHga9P709l4s8krCtzJtOjhXpOW2cVXCx%2BLqrethpFEmBc1rpHacrKM%2BAQqdXNbcB9%2FosYYbrduwoNApepNYDdyfDfb59t5dG64kq9Vv0NNaS7O0vr0ykuFSuvFsL2wwnP5tF4W9B0isWtXdVDXgVLMbFeVozgyoYlL5WbYKPyPtzxeBuxWAhzSMARWh3fwU38ucZR%2FcTVPtAvb5f51uf7Zda&X-Amz-Signature=5be6c5122c031793fa3195d95fe265ef2e1a3120717663889e5e27c3cf751df9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS4JXAA6%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIGfHWJ5mtDjrwTFENMkqv8GGAwMxoQBkmfD9qIkLgvoGAiEAnVeKaqaHMcdfVW4l98qDLqjWQjvmqvZkFYJ7WRJtlikq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLLxnBmGFDgJ%2BxkAWCrcA%2BiOmTafGne165pl4WpC8Tb9PG9BL%2F4RLetiA4QA2CVhe2NadOTPrBjAGQqAbBLt0FM4Pv7ODrll6E2ZmFkHZxGilIsNXoOhb9Z%2ByMuAeva0tioSgNCas%2B8eoDQ51WomD1TIgCwVvewIuvGVdXNrUcUHrZ0A2ZAMgyEh2vUGdBhWIH9JLWk9X84X0iJiipUB9SGrtFf%2ByWZ8JdEj0zlIl%2BsGsJkJkN6Oe9b8oVRbC9UGu4Ertjb5L3%2BEpelghXkEV6UjzPHofRB%2FkDKATMvYdokVlJH9pd6uTRHSZU%2B3nIh4bjmmo48PWQYKP4sJODUqYp7e2D%2F2kXyPq1QkX2Iz6MXs7I9dK3LwUKeKHC0ulmhjcRyoclRFSL6hCfF3RVcwo4vhtQe6tSBqEGqux7AnJ5wtOQZywpERI8MKmfktWTYOYC2R1s9X4EhfuM8%2FSMAbI4jUKKYytGtla3eB8VQa0J%2F0ImzgjSVNYli55XIXg0XTJf7mVwcy3A4udX8RvYdUlVLaUuPYN1kd7Sgi55SWqsLPRIq0%2FPRUNXBFMdjaakKiH%2BlwGIPk9a%2FmJab49CNyj54JmGO2nXqvOSZS7LZaLoQNjlCFuS6COhVmz0jchqqtUcbJbfDwrPKJ4C0DMML%2Fmb0GOqUBbbJZHga9P709l4s8krCtzJtOjhXpOW2cVXCx%2BLqrethpFEmBc1rpHacrKM%2BAQqdXNbcB9%2FosYYbrduwoNApepNYDdyfDfb59t5dG64kq9Vv0NNaS7O0vr0ykuFSuvFsL2wwnP5tF4W9B0isWtXdVDXgVLMbFeVozgyoYlL5WbYKPyPtzxeBuxWAhzSMARWh3fwU38ucZR%2FcTVPtAvb5f51uf7Zda&X-Amz-Signature=8b606ece5cf9e8bc77bc232a436577ed1f5c05c3b24e31037c40c947e1ce91a8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS4JXAA6%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIGfHWJ5mtDjrwTFENMkqv8GGAwMxoQBkmfD9qIkLgvoGAiEAnVeKaqaHMcdfVW4l98qDLqjWQjvmqvZkFYJ7WRJtlikq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLLxnBmGFDgJ%2BxkAWCrcA%2BiOmTafGne165pl4WpC8Tb9PG9BL%2F4RLetiA4QA2CVhe2NadOTPrBjAGQqAbBLt0FM4Pv7ODrll6E2ZmFkHZxGilIsNXoOhb9Z%2ByMuAeva0tioSgNCas%2B8eoDQ51WomD1TIgCwVvewIuvGVdXNrUcUHrZ0A2ZAMgyEh2vUGdBhWIH9JLWk9X84X0iJiipUB9SGrtFf%2ByWZ8JdEj0zlIl%2BsGsJkJkN6Oe9b8oVRbC9UGu4Ertjb5L3%2BEpelghXkEV6UjzPHofRB%2FkDKATMvYdokVlJH9pd6uTRHSZU%2B3nIh4bjmmo48PWQYKP4sJODUqYp7e2D%2F2kXyPq1QkX2Iz6MXs7I9dK3LwUKeKHC0ulmhjcRyoclRFSL6hCfF3RVcwo4vhtQe6tSBqEGqux7AnJ5wtOQZywpERI8MKmfktWTYOYC2R1s9X4EhfuM8%2FSMAbI4jUKKYytGtla3eB8VQa0J%2F0ImzgjSVNYli55XIXg0XTJf7mVwcy3A4udX8RvYdUlVLaUuPYN1kd7Sgi55SWqsLPRIq0%2FPRUNXBFMdjaakKiH%2BlwGIPk9a%2FmJab49CNyj54JmGO2nXqvOSZS7LZaLoQNjlCFuS6COhVmz0jchqqtUcbJbfDwrPKJ4C0DMML%2Fmb0GOqUBbbJZHga9P709l4s8krCtzJtOjhXpOW2cVXCx%2BLqrethpFEmBc1rpHacrKM%2BAQqdXNbcB9%2FosYYbrduwoNApepNYDdyfDfb59t5dG64kq9Vv0NNaS7O0vr0ykuFSuvFsL2wwnP5tF4W9B0isWtXdVDXgVLMbFeVozgyoYlL5WbYKPyPtzxeBuxWAhzSMARWh3fwU38ucZR%2FcTVPtAvb5f51uf7Zda&X-Amz-Signature=33ce6ebb91cbe5b24624831d354d0ecd4798a4c5bbca8dd86842087cc319f8f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS4JXAA6%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIGfHWJ5mtDjrwTFENMkqv8GGAwMxoQBkmfD9qIkLgvoGAiEAnVeKaqaHMcdfVW4l98qDLqjWQjvmqvZkFYJ7WRJtlikq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLLxnBmGFDgJ%2BxkAWCrcA%2BiOmTafGne165pl4WpC8Tb9PG9BL%2F4RLetiA4QA2CVhe2NadOTPrBjAGQqAbBLt0FM4Pv7ODrll6E2ZmFkHZxGilIsNXoOhb9Z%2ByMuAeva0tioSgNCas%2B8eoDQ51WomD1TIgCwVvewIuvGVdXNrUcUHrZ0A2ZAMgyEh2vUGdBhWIH9JLWk9X84X0iJiipUB9SGrtFf%2ByWZ8JdEj0zlIl%2BsGsJkJkN6Oe9b8oVRbC9UGu4Ertjb5L3%2BEpelghXkEV6UjzPHofRB%2FkDKATMvYdokVlJH9pd6uTRHSZU%2B3nIh4bjmmo48PWQYKP4sJODUqYp7e2D%2F2kXyPq1QkX2Iz6MXs7I9dK3LwUKeKHC0ulmhjcRyoclRFSL6hCfF3RVcwo4vhtQe6tSBqEGqux7AnJ5wtOQZywpERI8MKmfktWTYOYC2R1s9X4EhfuM8%2FSMAbI4jUKKYytGtla3eB8VQa0J%2F0ImzgjSVNYli55XIXg0XTJf7mVwcy3A4udX8RvYdUlVLaUuPYN1kd7Sgi55SWqsLPRIq0%2FPRUNXBFMdjaakKiH%2BlwGIPk9a%2FmJab49CNyj54JmGO2nXqvOSZS7LZaLoQNjlCFuS6COhVmz0jchqqtUcbJbfDwrPKJ4C0DMML%2Fmb0GOqUBbbJZHga9P709l4s8krCtzJtOjhXpOW2cVXCx%2BLqrethpFEmBc1rpHacrKM%2BAQqdXNbcB9%2FosYYbrduwoNApepNYDdyfDfb59t5dG64kq9Vv0NNaS7O0vr0ykuFSuvFsL2wwnP5tF4W9B0isWtXdVDXgVLMbFeVozgyoYlL5WbYKPyPtzxeBuxWAhzSMARWh3fwU38ucZR%2FcTVPtAvb5f51uf7Zda&X-Amz-Signature=ad943a669a7a8a6d3264826b6d8e57ef989040b9d459207d0f6162b31771f08a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS4JXAA6%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIGfHWJ5mtDjrwTFENMkqv8GGAwMxoQBkmfD9qIkLgvoGAiEAnVeKaqaHMcdfVW4l98qDLqjWQjvmqvZkFYJ7WRJtlikq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLLxnBmGFDgJ%2BxkAWCrcA%2BiOmTafGne165pl4WpC8Tb9PG9BL%2F4RLetiA4QA2CVhe2NadOTPrBjAGQqAbBLt0FM4Pv7ODrll6E2ZmFkHZxGilIsNXoOhb9Z%2ByMuAeva0tioSgNCas%2B8eoDQ51WomD1TIgCwVvewIuvGVdXNrUcUHrZ0A2ZAMgyEh2vUGdBhWIH9JLWk9X84X0iJiipUB9SGrtFf%2ByWZ8JdEj0zlIl%2BsGsJkJkN6Oe9b8oVRbC9UGu4Ertjb5L3%2BEpelghXkEV6UjzPHofRB%2FkDKATMvYdokVlJH9pd6uTRHSZU%2B3nIh4bjmmo48PWQYKP4sJODUqYp7e2D%2F2kXyPq1QkX2Iz6MXs7I9dK3LwUKeKHC0ulmhjcRyoclRFSL6hCfF3RVcwo4vhtQe6tSBqEGqux7AnJ5wtOQZywpERI8MKmfktWTYOYC2R1s9X4EhfuM8%2FSMAbI4jUKKYytGtla3eB8VQa0J%2F0ImzgjSVNYli55XIXg0XTJf7mVwcy3A4udX8RvYdUlVLaUuPYN1kd7Sgi55SWqsLPRIq0%2FPRUNXBFMdjaakKiH%2BlwGIPk9a%2FmJab49CNyj54JmGO2nXqvOSZS7LZaLoQNjlCFuS6COhVmz0jchqqtUcbJbfDwrPKJ4C0DMML%2Fmb0GOqUBbbJZHga9P709l4s8krCtzJtOjhXpOW2cVXCx%2BLqrethpFEmBc1rpHacrKM%2BAQqdXNbcB9%2FosYYbrduwoNApepNYDdyfDfb59t5dG64kq9Vv0NNaS7O0vr0ykuFSuvFsL2wwnP5tF4W9B0isWtXdVDXgVLMbFeVozgyoYlL5WbYKPyPtzxeBuxWAhzSMARWh3fwU38ucZR%2FcTVPtAvb5f51uf7Zda&X-Amz-Signature=efc4d06ed7b217979b0093801bc641a4a695db04690fc07c0a033187c7f37f4d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
