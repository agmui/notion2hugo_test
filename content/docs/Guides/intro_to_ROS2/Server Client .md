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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFLU2UIN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIB7I%2FZ50MKbdkSJ%2BLmEiNg8aCpvEiiCmt3wJVJnND48EAiEA8X0prsCVF9K294TcOHKNoesn%2BuCOlenhyF2A38Y6NH4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCnWp%2BStopC%2FvtRgwyrcAzFVEybZkrerLMOBkbkhOn%2F2t%2BDcXBSRHuvD4WHPwNySTxeYl7hMjtnugZQDCDN7FQXAtr1T%2FnheCjKd2JDG4CeC6cD6x5CBjSP6Yy9O0erlDYPZ1zyBxfQlYwK%2BiHPGW81kI6tYo%2BbJIx5UH1Hb1n59A8zIyQRBHwd%2BjUPQTnRZidC1w5GZE249zTw6lWGJw93iP58HcrqhOWwKZrc66evBApil%2BGy%2F8h7adPN2GTa72e0ZUYkOgVRcvKrmNb6srJNF2BPalfBHXJTbrpDa%2BICb%2BFXsGjjFNCJMix2AgcxSONnZlchq29FR4bXzwAaiiZFdgvJ9NUcJ9NSmc%2F92PNgWgCZXxylOvjHf0ZQrneguCi7Mt7zNplxP9hoc1JHPSC9ZxzMClH%2FbmnZzVhgNTWDdn%2Bwmj2Xuh%2B5axWKW%2FSB8WStZfeMHmZ2N2lHdd%2Fkd7hHv7AIyJ1jaTShnYB1j6HVPmpnzxBwFDSj1idcxyl6k4%2F%2F3iB7%2FyMt8s321vyXzmG5rj68ZU9M%2FKp3f7GtGTEU5XWXd5LFCt2XlEZLCofeghvzfwzkkO4FwW4d5ZU3GPqAfikjDomQgJyzG%2BREk0AzbXRHvgEbJfN3hmULZUDGc%2FB8bKPzO8mjXOUqMMPr0mMQGOqUBg%2FCmoyFRnlbBumtHG6eusExyXntIYj7iM3DpHmC5VXas%2Fi4TSDiLLXtRM8mcHdyZiBKK8hjoT2HdVMl299127MYtL3oo12XopiVqJGCllT0H03Dxo8l3pVByAoBzbU3HxJzW942tHhnqfrRbSrmNEiShLuHH8N2hnyjvm7gYmLfyYCBtsCr4ZoMjmRAJ%2FWFFauhkHCYwY7TjDEo05%2FDrSrNV%2F6g0&X-Amz-Signature=40b2f0d091ab5f7e6a5de0e7585744f4d5ebefc31514a11ccc36bf6cd3bcdf26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFLU2UIN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIB7I%2FZ50MKbdkSJ%2BLmEiNg8aCpvEiiCmt3wJVJnND48EAiEA8X0prsCVF9K294TcOHKNoesn%2BuCOlenhyF2A38Y6NH4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCnWp%2BStopC%2FvtRgwyrcAzFVEybZkrerLMOBkbkhOn%2F2t%2BDcXBSRHuvD4WHPwNySTxeYl7hMjtnugZQDCDN7FQXAtr1T%2FnheCjKd2JDG4CeC6cD6x5CBjSP6Yy9O0erlDYPZ1zyBxfQlYwK%2BiHPGW81kI6tYo%2BbJIx5UH1Hb1n59A8zIyQRBHwd%2BjUPQTnRZidC1w5GZE249zTw6lWGJw93iP58HcrqhOWwKZrc66evBApil%2BGy%2F8h7adPN2GTa72e0ZUYkOgVRcvKrmNb6srJNF2BPalfBHXJTbrpDa%2BICb%2BFXsGjjFNCJMix2AgcxSONnZlchq29FR4bXzwAaiiZFdgvJ9NUcJ9NSmc%2F92PNgWgCZXxylOvjHf0ZQrneguCi7Mt7zNplxP9hoc1JHPSC9ZxzMClH%2FbmnZzVhgNTWDdn%2Bwmj2Xuh%2B5axWKW%2FSB8WStZfeMHmZ2N2lHdd%2Fkd7hHv7AIyJ1jaTShnYB1j6HVPmpnzxBwFDSj1idcxyl6k4%2F%2F3iB7%2FyMt8s321vyXzmG5rj68ZU9M%2FKp3f7GtGTEU5XWXd5LFCt2XlEZLCofeghvzfwzkkO4FwW4d5ZU3GPqAfikjDomQgJyzG%2BREk0AzbXRHvgEbJfN3hmULZUDGc%2FB8bKPzO8mjXOUqMMPr0mMQGOqUBg%2FCmoyFRnlbBumtHG6eusExyXntIYj7iM3DpHmC5VXas%2Fi4TSDiLLXtRM8mcHdyZiBKK8hjoT2HdVMl299127MYtL3oo12XopiVqJGCllT0H03Dxo8l3pVByAoBzbU3HxJzW942tHhnqfrRbSrmNEiShLuHH8N2hnyjvm7gYmLfyYCBtsCr4ZoMjmRAJ%2FWFFauhkHCYwY7TjDEo05%2FDrSrNV%2F6g0&X-Amz-Signature=812f20442a7f7e4a1e0afa72295253932171fa2dd5378569727fd22ce7b3c0ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFLU2UIN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIB7I%2FZ50MKbdkSJ%2BLmEiNg8aCpvEiiCmt3wJVJnND48EAiEA8X0prsCVF9K294TcOHKNoesn%2BuCOlenhyF2A38Y6NH4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCnWp%2BStopC%2FvtRgwyrcAzFVEybZkrerLMOBkbkhOn%2F2t%2BDcXBSRHuvD4WHPwNySTxeYl7hMjtnugZQDCDN7FQXAtr1T%2FnheCjKd2JDG4CeC6cD6x5CBjSP6Yy9O0erlDYPZ1zyBxfQlYwK%2BiHPGW81kI6tYo%2BbJIx5UH1Hb1n59A8zIyQRBHwd%2BjUPQTnRZidC1w5GZE249zTw6lWGJw93iP58HcrqhOWwKZrc66evBApil%2BGy%2F8h7adPN2GTa72e0ZUYkOgVRcvKrmNb6srJNF2BPalfBHXJTbrpDa%2BICb%2BFXsGjjFNCJMix2AgcxSONnZlchq29FR4bXzwAaiiZFdgvJ9NUcJ9NSmc%2F92PNgWgCZXxylOvjHf0ZQrneguCi7Mt7zNplxP9hoc1JHPSC9ZxzMClH%2FbmnZzVhgNTWDdn%2Bwmj2Xuh%2B5axWKW%2FSB8WStZfeMHmZ2N2lHdd%2Fkd7hHv7AIyJ1jaTShnYB1j6HVPmpnzxBwFDSj1idcxyl6k4%2F%2F3iB7%2FyMt8s321vyXzmG5rj68ZU9M%2FKp3f7GtGTEU5XWXd5LFCt2XlEZLCofeghvzfwzkkO4FwW4d5ZU3GPqAfikjDomQgJyzG%2BREk0AzbXRHvgEbJfN3hmULZUDGc%2FB8bKPzO8mjXOUqMMPr0mMQGOqUBg%2FCmoyFRnlbBumtHG6eusExyXntIYj7iM3DpHmC5VXas%2Fi4TSDiLLXtRM8mcHdyZiBKK8hjoT2HdVMl299127MYtL3oo12XopiVqJGCllT0H03Dxo8l3pVByAoBzbU3HxJzW942tHhnqfrRbSrmNEiShLuHH8N2hnyjvm7gYmLfyYCBtsCr4ZoMjmRAJ%2FWFFauhkHCYwY7TjDEo05%2FDrSrNV%2F6g0&X-Amz-Signature=072927880fdc4b60778053f7f01f98ff7fa25bcaeab716753ee53311a3878637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFLU2UIN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIB7I%2FZ50MKbdkSJ%2BLmEiNg8aCpvEiiCmt3wJVJnND48EAiEA8X0prsCVF9K294TcOHKNoesn%2BuCOlenhyF2A38Y6NH4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCnWp%2BStopC%2FvtRgwyrcAzFVEybZkrerLMOBkbkhOn%2F2t%2BDcXBSRHuvD4WHPwNySTxeYl7hMjtnugZQDCDN7FQXAtr1T%2FnheCjKd2JDG4CeC6cD6x5CBjSP6Yy9O0erlDYPZ1zyBxfQlYwK%2BiHPGW81kI6tYo%2BbJIx5UH1Hb1n59A8zIyQRBHwd%2BjUPQTnRZidC1w5GZE249zTw6lWGJw93iP58HcrqhOWwKZrc66evBApil%2BGy%2F8h7adPN2GTa72e0ZUYkOgVRcvKrmNb6srJNF2BPalfBHXJTbrpDa%2BICb%2BFXsGjjFNCJMix2AgcxSONnZlchq29FR4bXzwAaiiZFdgvJ9NUcJ9NSmc%2F92PNgWgCZXxylOvjHf0ZQrneguCi7Mt7zNplxP9hoc1JHPSC9ZxzMClH%2FbmnZzVhgNTWDdn%2Bwmj2Xuh%2B5axWKW%2FSB8WStZfeMHmZ2N2lHdd%2Fkd7hHv7AIyJ1jaTShnYB1j6HVPmpnzxBwFDSj1idcxyl6k4%2F%2F3iB7%2FyMt8s321vyXzmG5rj68ZU9M%2FKp3f7GtGTEU5XWXd5LFCt2XlEZLCofeghvzfwzkkO4FwW4d5ZU3GPqAfikjDomQgJyzG%2BREk0AzbXRHvgEbJfN3hmULZUDGc%2FB8bKPzO8mjXOUqMMPr0mMQGOqUBg%2FCmoyFRnlbBumtHG6eusExyXntIYj7iM3DpHmC5VXas%2Fi4TSDiLLXtRM8mcHdyZiBKK8hjoT2HdVMl299127MYtL3oo12XopiVqJGCllT0H03Dxo8l3pVByAoBzbU3HxJzW942tHhnqfrRbSrmNEiShLuHH8N2hnyjvm7gYmLfyYCBtsCr4ZoMjmRAJ%2FWFFauhkHCYwY7TjDEo05%2FDrSrNV%2F6g0&X-Amz-Signature=065301dcbf3ec7724d89075d2e93400bc786f797d55b35d5846a898181d71984&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFLU2UIN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIB7I%2FZ50MKbdkSJ%2BLmEiNg8aCpvEiiCmt3wJVJnND48EAiEA8X0prsCVF9K294TcOHKNoesn%2BuCOlenhyF2A38Y6NH4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCnWp%2BStopC%2FvtRgwyrcAzFVEybZkrerLMOBkbkhOn%2F2t%2BDcXBSRHuvD4WHPwNySTxeYl7hMjtnugZQDCDN7FQXAtr1T%2FnheCjKd2JDG4CeC6cD6x5CBjSP6Yy9O0erlDYPZ1zyBxfQlYwK%2BiHPGW81kI6tYo%2BbJIx5UH1Hb1n59A8zIyQRBHwd%2BjUPQTnRZidC1w5GZE249zTw6lWGJw93iP58HcrqhOWwKZrc66evBApil%2BGy%2F8h7adPN2GTa72e0ZUYkOgVRcvKrmNb6srJNF2BPalfBHXJTbrpDa%2BICb%2BFXsGjjFNCJMix2AgcxSONnZlchq29FR4bXzwAaiiZFdgvJ9NUcJ9NSmc%2F92PNgWgCZXxylOvjHf0ZQrneguCi7Mt7zNplxP9hoc1JHPSC9ZxzMClH%2FbmnZzVhgNTWDdn%2Bwmj2Xuh%2B5axWKW%2FSB8WStZfeMHmZ2N2lHdd%2Fkd7hHv7AIyJ1jaTShnYB1j6HVPmpnzxBwFDSj1idcxyl6k4%2F%2F3iB7%2FyMt8s321vyXzmG5rj68ZU9M%2FKp3f7GtGTEU5XWXd5LFCt2XlEZLCofeghvzfwzkkO4FwW4d5ZU3GPqAfikjDomQgJyzG%2BREk0AzbXRHvgEbJfN3hmULZUDGc%2FB8bKPzO8mjXOUqMMPr0mMQGOqUBg%2FCmoyFRnlbBumtHG6eusExyXntIYj7iM3DpHmC5VXas%2Fi4TSDiLLXtRM8mcHdyZiBKK8hjoT2HdVMl299127MYtL3oo12XopiVqJGCllT0H03Dxo8l3pVByAoBzbU3HxJzW942tHhnqfrRbSrmNEiShLuHH8N2hnyjvm7gYmLfyYCBtsCr4ZoMjmRAJ%2FWFFauhkHCYwY7TjDEo05%2FDrSrNV%2F6g0&X-Amz-Signature=ec32601b2acf6cc893d0958ff3b93a701402021ff30eebfd7a57eac8d58bca3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
