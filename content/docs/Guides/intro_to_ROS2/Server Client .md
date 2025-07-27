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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQHACJ7N%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIAo9SWJCPZXk%2BqCheS%2BoxQERujzu7L9gDL4YCmziO%2FGIAiBgx9qwW1dx%2B1ocFRrsRvzpZC3%2Fd6CMdVcR%2FicdaRGRHCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM6xWwYfhjSceBMVepKtwD3Ab%2BMUWlBi5oaMwqovnCSdKl7YfPiYA21j9pkWaAOFCOnHJhoPf8VEHRtSZzPMPhIfN%2F7eDrJ9m7%2B9jpAjvHMCqMXpAWnDd3ShRxtbB6VSqWVpHqe%2FQbFPUkUT3JlJQ2geLN7alLlAPmGZ7Py6AkaCBYtwEjOkcsGVR%2BRWh%2F5%2BgYHKcVUxkC3AiclTmuWkUnElQTbl16WeXrlqjidOVjFtkjIKN25WCo%2BvVDJHjsQMEdAmkse6gszeMPwvNGyp3%2Fp3LySM6BbrsU3IHJ7Z1R4vraPAz%2BqAZm%2BNZ6gPfEdWUcvwAkGc0f4y5Z9GQI7hsX454BsdMY1bm2DXYbiprZqF1FZ0i83Eu%2Blm94BwPCa7u%2BY3%2Bv0SPmbfkmQ9tjpgIh09bmHlDqWIqB1qDssyAb2UXE41CwoLaUZAYJB%2FV373ndRjZ9meHCi%2BAdaKj%2BlBkAFpkfZNqb0fd%2FaOMAD7LVx7SA3rooIMbCYyz8cw4A8yBrjbNRnlLWILSL11X%2BCq6sLAIB0VuR%2FdQ1FRGXoMOYeJGW89WI2EYAXhyGEl%2FZM9lv7yq%2F%2BCItVL9aXY%2B5eCRA5ZYfdlw5klaPxBM%2BJYz6apOLLHhaPUOrepSMuC3VNePjK4h6Up7LvyQAR%2FowyeCXxAY6pgFSztu5sJocbaeZmD%2Fwnkm6MSNMwaVjyQQPq7Wa9lTYtR1OSP8ZBZPckQ7aise3KxKcY7ernpyv5zuqBCFYZakLcjN70X9ku%2FofcWVp9I90QfY3K7GEXAuLUY13rJs3y69kUCacWvt4TlFdujPHO0n597ujdy%2FL6UIOYxgMmttuRJahZUZneCdVSN07ju5tDbq7xCRUejq671fo5NZJv8tNBIH199bH&X-Amz-Signature=abed6ae935604f868295f9ec9533376981ee290c1b2bcf39c87e63a098a298ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQHACJ7N%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIAo9SWJCPZXk%2BqCheS%2BoxQERujzu7L9gDL4YCmziO%2FGIAiBgx9qwW1dx%2B1ocFRrsRvzpZC3%2Fd6CMdVcR%2FicdaRGRHCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM6xWwYfhjSceBMVepKtwD3Ab%2BMUWlBi5oaMwqovnCSdKl7YfPiYA21j9pkWaAOFCOnHJhoPf8VEHRtSZzPMPhIfN%2F7eDrJ9m7%2B9jpAjvHMCqMXpAWnDd3ShRxtbB6VSqWVpHqe%2FQbFPUkUT3JlJQ2geLN7alLlAPmGZ7Py6AkaCBYtwEjOkcsGVR%2BRWh%2F5%2BgYHKcVUxkC3AiclTmuWkUnElQTbl16WeXrlqjidOVjFtkjIKN25WCo%2BvVDJHjsQMEdAmkse6gszeMPwvNGyp3%2Fp3LySM6BbrsU3IHJ7Z1R4vraPAz%2BqAZm%2BNZ6gPfEdWUcvwAkGc0f4y5Z9GQI7hsX454BsdMY1bm2DXYbiprZqF1FZ0i83Eu%2Blm94BwPCa7u%2BY3%2Bv0SPmbfkmQ9tjpgIh09bmHlDqWIqB1qDssyAb2UXE41CwoLaUZAYJB%2FV373ndRjZ9meHCi%2BAdaKj%2BlBkAFpkfZNqb0fd%2FaOMAD7LVx7SA3rooIMbCYyz8cw4A8yBrjbNRnlLWILSL11X%2BCq6sLAIB0VuR%2FdQ1FRGXoMOYeJGW89WI2EYAXhyGEl%2FZM9lv7yq%2F%2BCItVL9aXY%2B5eCRA5ZYfdlw5klaPxBM%2BJYz6apOLLHhaPUOrepSMuC3VNePjK4h6Up7LvyQAR%2FowyeCXxAY6pgFSztu5sJocbaeZmD%2Fwnkm6MSNMwaVjyQQPq7Wa9lTYtR1OSP8ZBZPckQ7aise3KxKcY7ernpyv5zuqBCFYZakLcjN70X9ku%2FofcWVp9I90QfY3K7GEXAuLUY13rJs3y69kUCacWvt4TlFdujPHO0n597ujdy%2FL6UIOYxgMmttuRJahZUZneCdVSN07ju5tDbq7xCRUejq671fo5NZJv8tNBIH199bH&X-Amz-Signature=96be0a48e5ebc80176929c42a91b0cb7ad6a008427cc91a6c866d7d017e77c09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQHACJ7N%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIAo9SWJCPZXk%2BqCheS%2BoxQERujzu7L9gDL4YCmziO%2FGIAiBgx9qwW1dx%2B1ocFRrsRvzpZC3%2Fd6CMdVcR%2FicdaRGRHCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM6xWwYfhjSceBMVepKtwD3Ab%2BMUWlBi5oaMwqovnCSdKl7YfPiYA21j9pkWaAOFCOnHJhoPf8VEHRtSZzPMPhIfN%2F7eDrJ9m7%2B9jpAjvHMCqMXpAWnDd3ShRxtbB6VSqWVpHqe%2FQbFPUkUT3JlJQ2geLN7alLlAPmGZ7Py6AkaCBYtwEjOkcsGVR%2BRWh%2F5%2BgYHKcVUxkC3AiclTmuWkUnElQTbl16WeXrlqjidOVjFtkjIKN25WCo%2BvVDJHjsQMEdAmkse6gszeMPwvNGyp3%2Fp3LySM6BbrsU3IHJ7Z1R4vraPAz%2BqAZm%2BNZ6gPfEdWUcvwAkGc0f4y5Z9GQI7hsX454BsdMY1bm2DXYbiprZqF1FZ0i83Eu%2Blm94BwPCa7u%2BY3%2Bv0SPmbfkmQ9tjpgIh09bmHlDqWIqB1qDssyAb2UXE41CwoLaUZAYJB%2FV373ndRjZ9meHCi%2BAdaKj%2BlBkAFpkfZNqb0fd%2FaOMAD7LVx7SA3rooIMbCYyz8cw4A8yBrjbNRnlLWILSL11X%2BCq6sLAIB0VuR%2FdQ1FRGXoMOYeJGW89WI2EYAXhyGEl%2FZM9lv7yq%2F%2BCItVL9aXY%2B5eCRA5ZYfdlw5klaPxBM%2BJYz6apOLLHhaPUOrepSMuC3VNePjK4h6Up7LvyQAR%2FowyeCXxAY6pgFSztu5sJocbaeZmD%2Fwnkm6MSNMwaVjyQQPq7Wa9lTYtR1OSP8ZBZPckQ7aise3KxKcY7ernpyv5zuqBCFYZakLcjN70X9ku%2FofcWVp9I90QfY3K7GEXAuLUY13rJs3y69kUCacWvt4TlFdujPHO0n597ujdy%2FL6UIOYxgMmttuRJahZUZneCdVSN07ju5tDbq7xCRUejq671fo5NZJv8tNBIH199bH&X-Amz-Signature=898a13c354104cf1098375f6d16df5e71178931b2983fbed60e50fa1ef86d15c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQHACJ7N%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIAo9SWJCPZXk%2BqCheS%2BoxQERujzu7L9gDL4YCmziO%2FGIAiBgx9qwW1dx%2B1ocFRrsRvzpZC3%2Fd6CMdVcR%2FicdaRGRHCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM6xWwYfhjSceBMVepKtwD3Ab%2BMUWlBi5oaMwqovnCSdKl7YfPiYA21j9pkWaAOFCOnHJhoPf8VEHRtSZzPMPhIfN%2F7eDrJ9m7%2B9jpAjvHMCqMXpAWnDd3ShRxtbB6VSqWVpHqe%2FQbFPUkUT3JlJQ2geLN7alLlAPmGZ7Py6AkaCBYtwEjOkcsGVR%2BRWh%2F5%2BgYHKcVUxkC3AiclTmuWkUnElQTbl16WeXrlqjidOVjFtkjIKN25WCo%2BvVDJHjsQMEdAmkse6gszeMPwvNGyp3%2Fp3LySM6BbrsU3IHJ7Z1R4vraPAz%2BqAZm%2BNZ6gPfEdWUcvwAkGc0f4y5Z9GQI7hsX454BsdMY1bm2DXYbiprZqF1FZ0i83Eu%2Blm94BwPCa7u%2BY3%2Bv0SPmbfkmQ9tjpgIh09bmHlDqWIqB1qDssyAb2UXE41CwoLaUZAYJB%2FV373ndRjZ9meHCi%2BAdaKj%2BlBkAFpkfZNqb0fd%2FaOMAD7LVx7SA3rooIMbCYyz8cw4A8yBrjbNRnlLWILSL11X%2BCq6sLAIB0VuR%2FdQ1FRGXoMOYeJGW89WI2EYAXhyGEl%2FZM9lv7yq%2F%2BCItVL9aXY%2B5eCRA5ZYfdlw5klaPxBM%2BJYz6apOLLHhaPUOrepSMuC3VNePjK4h6Up7LvyQAR%2FowyeCXxAY6pgFSztu5sJocbaeZmD%2Fwnkm6MSNMwaVjyQQPq7Wa9lTYtR1OSP8ZBZPckQ7aise3KxKcY7ernpyv5zuqBCFYZakLcjN70X9ku%2FofcWVp9I90QfY3K7GEXAuLUY13rJs3y69kUCacWvt4TlFdujPHO0n597ujdy%2FL6UIOYxgMmttuRJahZUZneCdVSN07ju5tDbq7xCRUejq671fo5NZJv8tNBIH199bH&X-Amz-Signature=9df82deaaaf65d51d3a948e8542eb52b09b7796ff7102322e43bd9340765b992&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQHACJ7N%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIAo9SWJCPZXk%2BqCheS%2BoxQERujzu7L9gDL4YCmziO%2FGIAiBgx9qwW1dx%2B1ocFRrsRvzpZC3%2Fd6CMdVcR%2FicdaRGRHCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM6xWwYfhjSceBMVepKtwD3Ab%2BMUWlBi5oaMwqovnCSdKl7YfPiYA21j9pkWaAOFCOnHJhoPf8VEHRtSZzPMPhIfN%2F7eDrJ9m7%2B9jpAjvHMCqMXpAWnDd3ShRxtbB6VSqWVpHqe%2FQbFPUkUT3JlJQ2geLN7alLlAPmGZ7Py6AkaCBYtwEjOkcsGVR%2BRWh%2F5%2BgYHKcVUxkC3AiclTmuWkUnElQTbl16WeXrlqjidOVjFtkjIKN25WCo%2BvVDJHjsQMEdAmkse6gszeMPwvNGyp3%2Fp3LySM6BbrsU3IHJ7Z1R4vraPAz%2BqAZm%2BNZ6gPfEdWUcvwAkGc0f4y5Z9GQI7hsX454BsdMY1bm2DXYbiprZqF1FZ0i83Eu%2Blm94BwPCa7u%2BY3%2Bv0SPmbfkmQ9tjpgIh09bmHlDqWIqB1qDssyAb2UXE41CwoLaUZAYJB%2FV373ndRjZ9meHCi%2BAdaKj%2BlBkAFpkfZNqb0fd%2FaOMAD7LVx7SA3rooIMbCYyz8cw4A8yBrjbNRnlLWILSL11X%2BCq6sLAIB0VuR%2FdQ1FRGXoMOYeJGW89WI2EYAXhyGEl%2FZM9lv7yq%2F%2BCItVL9aXY%2B5eCRA5ZYfdlw5klaPxBM%2BJYz6apOLLHhaPUOrepSMuC3VNePjK4h6Up7LvyQAR%2FowyeCXxAY6pgFSztu5sJocbaeZmD%2Fwnkm6MSNMwaVjyQQPq7Wa9lTYtR1OSP8ZBZPckQ7aise3KxKcY7ernpyv5zuqBCFYZakLcjN70X9ku%2FofcWVp9I90QfY3K7GEXAuLUY13rJs3y69kUCacWvt4TlFdujPHO0n597ujdy%2FL6UIOYxgMmttuRJahZUZneCdVSN07ju5tDbq7xCRUejq671fo5NZJv8tNBIH199bH&X-Amz-Signature=9833e5105367e9e41c3ecffa317cfed6fa5a09f234e284eb31980f9d5d9af27f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
