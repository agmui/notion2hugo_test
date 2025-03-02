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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GIWZ5K3%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAH3e1EIq1XW3C0dDWwlma2NACJjdrE9nSa5im9WSKulAiEAse%2BAHEQ1xbTI9gTfZgQLpehtsP9vjDxeFo3gPENp0YcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxHOAn35sqhpty9oyrcA1UFTLHbBOKFtoysrrAIUggpmVfW4NdP6N7e3Rd4uieRpmGQNioJHCQ11nZoqJ3BpWgnh79dC20rZSDwGOnVYafERZBAI7qH84mzEkbyfTV8Utc6YFG89g%2FkfyLmjCa%2Bjsxmj9vid4fyxaHkatabtt8uqOzsY1aR%2BCneTlU07MyfENoW4AEfku9U8vfnTHJ7UKahuitemxLSwsVVj2uIyvzVjbABOoabCMtxcR8YK7lWKX%2BB3TB6zrV8qhvAMcrSLSHtwzhH3uRXnJ8Lytlr%2FiTWPBtDcqh9%2BcN5d3Vn2J%2Bs%2B0FKTqPU9bqSuzX%2FQEc0SOKes6KVAyYBSsGDrAmhvECRNBDu1LOga%2FGn0QnokNH7JIRwmgNtruMsWXiZP6%2FPwFrFGjWl7W%2F2tFV92%2BEHkFAGTWKFXi6F215vCZMfoIbvDaaH496CTRGehM4TOrtK3c6IXXlfgTb3Mq0jR%2FyvbzEQI8mr8tC5r%2BhX3j4F3l0hvhwj8C25C1%2FzxTW%2Blpxftox4ogQRVkieOojzolzqxtP9AEZ0FBXIVStzq7e7gIGNPU9WfwMpM6ZU9tvXPK%2FKMZ9zw%2Bv4jQ%2F9Wu2bNJ2G4s5bWBY%2BEzlDXjNYKGYfQ83jorN9bzq2ZE%2FaoiuoMMeXkr4GOqUBPl1jcsK58pTM1U6ypHBQYnwObmfpImmIo%2FxxqubDVs67QjrTzbTq76ygVYprH1%2FUIsIeEpWR4%2FNRRFtiA%2FVjHGElYO%2BZtEKWSkZnc6qxrwvyhYSBsGNWmWrgURLwvB0H7ItC9VErZ6v3lclCfJpn0n3qzVNi064eCfl5azs%2FjZmMlNVVRos1Nh%2FDeifS6a6TcgU43ZnQrUeiESV0pgzgSCFgaMgu&X-Amz-Signature=1b5d32239367e06630014025b54682cb9f5db2527e577c35f8afda46c5ae61f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GIWZ5K3%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAH3e1EIq1XW3C0dDWwlma2NACJjdrE9nSa5im9WSKulAiEAse%2BAHEQ1xbTI9gTfZgQLpehtsP9vjDxeFo3gPENp0YcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxHOAn35sqhpty9oyrcA1UFTLHbBOKFtoysrrAIUggpmVfW4NdP6N7e3Rd4uieRpmGQNioJHCQ11nZoqJ3BpWgnh79dC20rZSDwGOnVYafERZBAI7qH84mzEkbyfTV8Utc6YFG89g%2FkfyLmjCa%2Bjsxmj9vid4fyxaHkatabtt8uqOzsY1aR%2BCneTlU07MyfENoW4AEfku9U8vfnTHJ7UKahuitemxLSwsVVj2uIyvzVjbABOoabCMtxcR8YK7lWKX%2BB3TB6zrV8qhvAMcrSLSHtwzhH3uRXnJ8Lytlr%2FiTWPBtDcqh9%2BcN5d3Vn2J%2Bs%2B0FKTqPU9bqSuzX%2FQEc0SOKes6KVAyYBSsGDrAmhvECRNBDu1LOga%2FGn0QnokNH7JIRwmgNtruMsWXiZP6%2FPwFrFGjWl7W%2F2tFV92%2BEHkFAGTWKFXi6F215vCZMfoIbvDaaH496CTRGehM4TOrtK3c6IXXlfgTb3Mq0jR%2FyvbzEQI8mr8tC5r%2BhX3j4F3l0hvhwj8C25C1%2FzxTW%2Blpxftox4ogQRVkieOojzolzqxtP9AEZ0FBXIVStzq7e7gIGNPU9WfwMpM6ZU9tvXPK%2FKMZ9zw%2Bv4jQ%2F9Wu2bNJ2G4s5bWBY%2BEzlDXjNYKGYfQ83jorN9bzq2ZE%2FaoiuoMMeXkr4GOqUBPl1jcsK58pTM1U6ypHBQYnwObmfpImmIo%2FxxqubDVs67QjrTzbTq76ygVYprH1%2FUIsIeEpWR4%2FNRRFtiA%2FVjHGElYO%2BZtEKWSkZnc6qxrwvyhYSBsGNWmWrgURLwvB0H7ItC9VErZ6v3lclCfJpn0n3qzVNi064eCfl5azs%2FjZmMlNVVRos1Nh%2FDeifS6a6TcgU43ZnQrUeiESV0pgzgSCFgaMgu&X-Amz-Signature=61e421037d2f5585acf5054fbbf85d118ffd39450859c21de12383f31c8bed87&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GIWZ5K3%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAH3e1EIq1XW3C0dDWwlma2NACJjdrE9nSa5im9WSKulAiEAse%2BAHEQ1xbTI9gTfZgQLpehtsP9vjDxeFo3gPENp0YcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxHOAn35sqhpty9oyrcA1UFTLHbBOKFtoysrrAIUggpmVfW4NdP6N7e3Rd4uieRpmGQNioJHCQ11nZoqJ3BpWgnh79dC20rZSDwGOnVYafERZBAI7qH84mzEkbyfTV8Utc6YFG89g%2FkfyLmjCa%2Bjsxmj9vid4fyxaHkatabtt8uqOzsY1aR%2BCneTlU07MyfENoW4AEfku9U8vfnTHJ7UKahuitemxLSwsVVj2uIyvzVjbABOoabCMtxcR8YK7lWKX%2BB3TB6zrV8qhvAMcrSLSHtwzhH3uRXnJ8Lytlr%2FiTWPBtDcqh9%2BcN5d3Vn2J%2Bs%2B0FKTqPU9bqSuzX%2FQEc0SOKes6KVAyYBSsGDrAmhvECRNBDu1LOga%2FGn0QnokNH7JIRwmgNtruMsWXiZP6%2FPwFrFGjWl7W%2F2tFV92%2BEHkFAGTWKFXi6F215vCZMfoIbvDaaH496CTRGehM4TOrtK3c6IXXlfgTb3Mq0jR%2FyvbzEQI8mr8tC5r%2BhX3j4F3l0hvhwj8C25C1%2FzxTW%2Blpxftox4ogQRVkieOojzolzqxtP9AEZ0FBXIVStzq7e7gIGNPU9WfwMpM6ZU9tvXPK%2FKMZ9zw%2Bv4jQ%2F9Wu2bNJ2G4s5bWBY%2BEzlDXjNYKGYfQ83jorN9bzq2ZE%2FaoiuoMMeXkr4GOqUBPl1jcsK58pTM1U6ypHBQYnwObmfpImmIo%2FxxqubDVs67QjrTzbTq76ygVYprH1%2FUIsIeEpWR4%2FNRRFtiA%2FVjHGElYO%2BZtEKWSkZnc6qxrwvyhYSBsGNWmWrgURLwvB0H7ItC9VErZ6v3lclCfJpn0n3qzVNi064eCfl5azs%2FjZmMlNVVRos1Nh%2FDeifS6a6TcgU43ZnQrUeiESV0pgzgSCFgaMgu&X-Amz-Signature=9d9b9f0e3bc0bb5a224afcdd4adb271e86e3e1662103ee4f79d57923268acaa7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GIWZ5K3%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAH3e1EIq1XW3C0dDWwlma2NACJjdrE9nSa5im9WSKulAiEAse%2BAHEQ1xbTI9gTfZgQLpehtsP9vjDxeFo3gPENp0YcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxHOAn35sqhpty9oyrcA1UFTLHbBOKFtoysrrAIUggpmVfW4NdP6N7e3Rd4uieRpmGQNioJHCQ11nZoqJ3BpWgnh79dC20rZSDwGOnVYafERZBAI7qH84mzEkbyfTV8Utc6YFG89g%2FkfyLmjCa%2Bjsxmj9vid4fyxaHkatabtt8uqOzsY1aR%2BCneTlU07MyfENoW4AEfku9U8vfnTHJ7UKahuitemxLSwsVVj2uIyvzVjbABOoabCMtxcR8YK7lWKX%2BB3TB6zrV8qhvAMcrSLSHtwzhH3uRXnJ8Lytlr%2FiTWPBtDcqh9%2BcN5d3Vn2J%2Bs%2B0FKTqPU9bqSuzX%2FQEc0SOKes6KVAyYBSsGDrAmhvECRNBDu1LOga%2FGn0QnokNH7JIRwmgNtruMsWXiZP6%2FPwFrFGjWl7W%2F2tFV92%2BEHkFAGTWKFXi6F215vCZMfoIbvDaaH496CTRGehM4TOrtK3c6IXXlfgTb3Mq0jR%2FyvbzEQI8mr8tC5r%2BhX3j4F3l0hvhwj8C25C1%2FzxTW%2Blpxftox4ogQRVkieOojzolzqxtP9AEZ0FBXIVStzq7e7gIGNPU9WfwMpM6ZU9tvXPK%2FKMZ9zw%2Bv4jQ%2F9Wu2bNJ2G4s5bWBY%2BEzlDXjNYKGYfQ83jorN9bzq2ZE%2FaoiuoMMeXkr4GOqUBPl1jcsK58pTM1U6ypHBQYnwObmfpImmIo%2FxxqubDVs67QjrTzbTq76ygVYprH1%2FUIsIeEpWR4%2FNRRFtiA%2FVjHGElYO%2BZtEKWSkZnc6qxrwvyhYSBsGNWmWrgURLwvB0H7ItC9VErZ6v3lclCfJpn0n3qzVNi064eCfl5azs%2FjZmMlNVVRos1Nh%2FDeifS6a6TcgU43ZnQrUeiESV0pgzgSCFgaMgu&X-Amz-Signature=6f4c0e3218cc0e8c55666b550347b26ddf9962eccf7052b9b0362430d51c81ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GIWZ5K3%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAH3e1EIq1XW3C0dDWwlma2NACJjdrE9nSa5im9WSKulAiEAse%2BAHEQ1xbTI9gTfZgQLpehtsP9vjDxeFo3gPENp0YcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxHOAn35sqhpty9oyrcA1UFTLHbBOKFtoysrrAIUggpmVfW4NdP6N7e3Rd4uieRpmGQNioJHCQ11nZoqJ3BpWgnh79dC20rZSDwGOnVYafERZBAI7qH84mzEkbyfTV8Utc6YFG89g%2FkfyLmjCa%2Bjsxmj9vid4fyxaHkatabtt8uqOzsY1aR%2BCneTlU07MyfENoW4AEfku9U8vfnTHJ7UKahuitemxLSwsVVj2uIyvzVjbABOoabCMtxcR8YK7lWKX%2BB3TB6zrV8qhvAMcrSLSHtwzhH3uRXnJ8Lytlr%2FiTWPBtDcqh9%2BcN5d3Vn2J%2Bs%2B0FKTqPU9bqSuzX%2FQEc0SOKes6KVAyYBSsGDrAmhvECRNBDu1LOga%2FGn0QnokNH7JIRwmgNtruMsWXiZP6%2FPwFrFGjWl7W%2F2tFV92%2BEHkFAGTWKFXi6F215vCZMfoIbvDaaH496CTRGehM4TOrtK3c6IXXlfgTb3Mq0jR%2FyvbzEQI8mr8tC5r%2BhX3j4F3l0hvhwj8C25C1%2FzxTW%2Blpxftox4ogQRVkieOojzolzqxtP9AEZ0FBXIVStzq7e7gIGNPU9WfwMpM6ZU9tvXPK%2FKMZ9zw%2Bv4jQ%2F9Wu2bNJ2G4s5bWBY%2BEzlDXjNYKGYfQ83jorN9bzq2ZE%2FaoiuoMMeXkr4GOqUBPl1jcsK58pTM1U6ypHBQYnwObmfpImmIo%2FxxqubDVs67QjrTzbTq76ygVYprH1%2FUIsIeEpWR4%2FNRRFtiA%2FVjHGElYO%2BZtEKWSkZnc6qxrwvyhYSBsGNWmWrgURLwvB0H7ItC9VErZ6v3lclCfJpn0n3qzVNi064eCfl5azs%2FjZmMlNVVRos1Nh%2FDeifS6a6TcgU43ZnQrUeiESV0pgzgSCFgaMgu&X-Amz-Signature=42f99a047e02c76b8f73167fff2f8522821982369c3f8cdc4eb01ff5b1ecc66f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
