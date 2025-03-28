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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCMTEXC7%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF99mXfdqPkjG6bUmjwborlY7VyznN8FV7nczSj2BCmcAiBXeWoFO3kIQYhd9YQelQPplicJTSpdT7PObzyey%2BwYOyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM3%2FzmcYbZIbyh7CI6KtwDmHLi5Gi5XzIG9JDWMk09hhhPve7PhpLU0vmaTVIHDBzUSErFDw%2FBS9zsB4sP4ncXx0sB7jcoETMLEh2kCAg%2F0Sqn%2FIVaSKgNxgAi1ffvZZbS0jVHAcq6wIqdONTF9oNrS0XvGo5TByfVi%2Brt8kXeLv4Nqp3rVlHdQpC%2Bn%2FwLGwRvnFIOwIk2AW4c8ppsAIhcFYZA4AXm%2BGIjX4M3FHng3ldxUcQ4E266LTNI%2BNLEVBFEpjr5w42KVSVHsfa00jj1Yyxp4kRcqoYlikBvGTluCF02JMgkvwcLQTNz2zGDgR6LWp0dttTHQho0j%2Fg6ddHaWLl2LVohlukxY2Y%2F%2FI3hHdaTGPYbODHgqsBun6iEBaShze4WcrqAv9qDvRUvzxwaWYN%2FLGJ35JrfkB7laGi1Matb0ZcPvn4CEJVWwhHdPhkgdFpCNda%2FumaT4ljzGuyMpbIVQ2PUASC%2BGjumb8fNgiJ2QFGy4PQmqz3ShY%2B0%2BHPXbU8JeM7dMJbjFLxRXDlrejN5CmHm2ETeeRqOXAZpKB2jCnOjOJXBmeAo7gTQWKMND3nUrHKsGsgbQ1czgMc2sDRAMIpD%2FWBXhDfFQtT1cgQgxuwzMIBoY927u7D2dCtrK9p1IUA5utjsj%2FEw2e%2BavwY6pgEOVJppFR8flLuuCrRZvbtadP0cIZ8kJH73QUPXKXb0xiGWlYwj2IrIFyeGy%2BYd9Op1SSCmE%2FHJIgrHxOE2DjrysYo2jhj5eC5HOpJJi45ZDs0mmbsL3sHbVUgK1T9LnX%2FlXiPm04v%2FITwMfoG%2FHbRhhDVrR7CvGvsbi7BWarMUGiiam%2BKqRw3i%2BPMeJZPpgmCfrxPFTJMfcuWp7wIkpt4VfYyypzgA&X-Amz-Signature=494f7ed688c33e7754bdb1a7c00a69ef420294caff2ed3bc7a624787c5628361&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCMTEXC7%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF99mXfdqPkjG6bUmjwborlY7VyznN8FV7nczSj2BCmcAiBXeWoFO3kIQYhd9YQelQPplicJTSpdT7PObzyey%2BwYOyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM3%2FzmcYbZIbyh7CI6KtwDmHLi5Gi5XzIG9JDWMk09hhhPve7PhpLU0vmaTVIHDBzUSErFDw%2FBS9zsB4sP4ncXx0sB7jcoETMLEh2kCAg%2F0Sqn%2FIVaSKgNxgAi1ffvZZbS0jVHAcq6wIqdONTF9oNrS0XvGo5TByfVi%2Brt8kXeLv4Nqp3rVlHdQpC%2Bn%2FwLGwRvnFIOwIk2AW4c8ppsAIhcFYZA4AXm%2BGIjX4M3FHng3ldxUcQ4E266LTNI%2BNLEVBFEpjr5w42KVSVHsfa00jj1Yyxp4kRcqoYlikBvGTluCF02JMgkvwcLQTNz2zGDgR6LWp0dttTHQho0j%2Fg6ddHaWLl2LVohlukxY2Y%2F%2FI3hHdaTGPYbODHgqsBun6iEBaShze4WcrqAv9qDvRUvzxwaWYN%2FLGJ35JrfkB7laGi1Matb0ZcPvn4CEJVWwhHdPhkgdFpCNda%2FumaT4ljzGuyMpbIVQ2PUASC%2BGjumb8fNgiJ2QFGy4PQmqz3ShY%2B0%2BHPXbU8JeM7dMJbjFLxRXDlrejN5CmHm2ETeeRqOXAZpKB2jCnOjOJXBmeAo7gTQWKMND3nUrHKsGsgbQ1czgMc2sDRAMIpD%2FWBXhDfFQtT1cgQgxuwzMIBoY927u7D2dCtrK9p1IUA5utjsj%2FEw2e%2BavwY6pgEOVJppFR8flLuuCrRZvbtadP0cIZ8kJH73QUPXKXb0xiGWlYwj2IrIFyeGy%2BYd9Op1SSCmE%2FHJIgrHxOE2DjrysYo2jhj5eC5HOpJJi45ZDs0mmbsL3sHbVUgK1T9LnX%2FlXiPm04v%2FITwMfoG%2FHbRhhDVrR7CvGvsbi7BWarMUGiiam%2BKqRw3i%2BPMeJZPpgmCfrxPFTJMfcuWp7wIkpt4VfYyypzgA&X-Amz-Signature=79f6d7a07d42640ceb59629714abfb295bc1415205465c2f30866cc8a1cafd63&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCMTEXC7%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF99mXfdqPkjG6bUmjwborlY7VyznN8FV7nczSj2BCmcAiBXeWoFO3kIQYhd9YQelQPplicJTSpdT7PObzyey%2BwYOyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM3%2FzmcYbZIbyh7CI6KtwDmHLi5Gi5XzIG9JDWMk09hhhPve7PhpLU0vmaTVIHDBzUSErFDw%2FBS9zsB4sP4ncXx0sB7jcoETMLEh2kCAg%2F0Sqn%2FIVaSKgNxgAi1ffvZZbS0jVHAcq6wIqdONTF9oNrS0XvGo5TByfVi%2Brt8kXeLv4Nqp3rVlHdQpC%2Bn%2FwLGwRvnFIOwIk2AW4c8ppsAIhcFYZA4AXm%2BGIjX4M3FHng3ldxUcQ4E266LTNI%2BNLEVBFEpjr5w42KVSVHsfa00jj1Yyxp4kRcqoYlikBvGTluCF02JMgkvwcLQTNz2zGDgR6LWp0dttTHQho0j%2Fg6ddHaWLl2LVohlukxY2Y%2F%2FI3hHdaTGPYbODHgqsBun6iEBaShze4WcrqAv9qDvRUvzxwaWYN%2FLGJ35JrfkB7laGi1Matb0ZcPvn4CEJVWwhHdPhkgdFpCNda%2FumaT4ljzGuyMpbIVQ2PUASC%2BGjumb8fNgiJ2QFGy4PQmqz3ShY%2B0%2BHPXbU8JeM7dMJbjFLxRXDlrejN5CmHm2ETeeRqOXAZpKB2jCnOjOJXBmeAo7gTQWKMND3nUrHKsGsgbQ1czgMc2sDRAMIpD%2FWBXhDfFQtT1cgQgxuwzMIBoY927u7D2dCtrK9p1IUA5utjsj%2FEw2e%2BavwY6pgEOVJppFR8flLuuCrRZvbtadP0cIZ8kJH73QUPXKXb0xiGWlYwj2IrIFyeGy%2BYd9Op1SSCmE%2FHJIgrHxOE2DjrysYo2jhj5eC5HOpJJi45ZDs0mmbsL3sHbVUgK1T9LnX%2FlXiPm04v%2FITwMfoG%2FHbRhhDVrR7CvGvsbi7BWarMUGiiam%2BKqRw3i%2BPMeJZPpgmCfrxPFTJMfcuWp7wIkpt4VfYyypzgA&X-Amz-Signature=2119000ce4084d0b333ce862a58dfb3ef59bf380a9427140cd4ef6a28d0bbbdc&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCMTEXC7%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF99mXfdqPkjG6bUmjwborlY7VyznN8FV7nczSj2BCmcAiBXeWoFO3kIQYhd9YQelQPplicJTSpdT7PObzyey%2BwYOyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM3%2FzmcYbZIbyh7CI6KtwDmHLi5Gi5XzIG9JDWMk09hhhPve7PhpLU0vmaTVIHDBzUSErFDw%2FBS9zsB4sP4ncXx0sB7jcoETMLEh2kCAg%2F0Sqn%2FIVaSKgNxgAi1ffvZZbS0jVHAcq6wIqdONTF9oNrS0XvGo5TByfVi%2Brt8kXeLv4Nqp3rVlHdQpC%2Bn%2FwLGwRvnFIOwIk2AW4c8ppsAIhcFYZA4AXm%2BGIjX4M3FHng3ldxUcQ4E266LTNI%2BNLEVBFEpjr5w42KVSVHsfa00jj1Yyxp4kRcqoYlikBvGTluCF02JMgkvwcLQTNz2zGDgR6LWp0dttTHQho0j%2Fg6ddHaWLl2LVohlukxY2Y%2F%2FI3hHdaTGPYbODHgqsBun6iEBaShze4WcrqAv9qDvRUvzxwaWYN%2FLGJ35JrfkB7laGi1Matb0ZcPvn4CEJVWwhHdPhkgdFpCNda%2FumaT4ljzGuyMpbIVQ2PUASC%2BGjumb8fNgiJ2QFGy4PQmqz3ShY%2B0%2BHPXbU8JeM7dMJbjFLxRXDlrejN5CmHm2ETeeRqOXAZpKB2jCnOjOJXBmeAo7gTQWKMND3nUrHKsGsgbQ1czgMc2sDRAMIpD%2FWBXhDfFQtT1cgQgxuwzMIBoY927u7D2dCtrK9p1IUA5utjsj%2FEw2e%2BavwY6pgEOVJppFR8flLuuCrRZvbtadP0cIZ8kJH73QUPXKXb0xiGWlYwj2IrIFyeGy%2BYd9Op1SSCmE%2FHJIgrHxOE2DjrysYo2jhj5eC5HOpJJi45ZDs0mmbsL3sHbVUgK1T9LnX%2FlXiPm04v%2FITwMfoG%2FHbRhhDVrR7CvGvsbi7BWarMUGiiam%2BKqRw3i%2BPMeJZPpgmCfrxPFTJMfcuWp7wIkpt4VfYyypzgA&X-Amz-Signature=03509e830b0cd94fe3b2c77d0cf0191c0cee7488ab14a4b74864fae3d79c60b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCMTEXC7%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF99mXfdqPkjG6bUmjwborlY7VyznN8FV7nczSj2BCmcAiBXeWoFO3kIQYhd9YQelQPplicJTSpdT7PObzyey%2BwYOyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM3%2FzmcYbZIbyh7CI6KtwDmHLi5Gi5XzIG9JDWMk09hhhPve7PhpLU0vmaTVIHDBzUSErFDw%2FBS9zsB4sP4ncXx0sB7jcoETMLEh2kCAg%2F0Sqn%2FIVaSKgNxgAi1ffvZZbS0jVHAcq6wIqdONTF9oNrS0XvGo5TByfVi%2Brt8kXeLv4Nqp3rVlHdQpC%2Bn%2FwLGwRvnFIOwIk2AW4c8ppsAIhcFYZA4AXm%2BGIjX4M3FHng3ldxUcQ4E266LTNI%2BNLEVBFEpjr5w42KVSVHsfa00jj1Yyxp4kRcqoYlikBvGTluCF02JMgkvwcLQTNz2zGDgR6LWp0dttTHQho0j%2Fg6ddHaWLl2LVohlukxY2Y%2F%2FI3hHdaTGPYbODHgqsBun6iEBaShze4WcrqAv9qDvRUvzxwaWYN%2FLGJ35JrfkB7laGi1Matb0ZcPvn4CEJVWwhHdPhkgdFpCNda%2FumaT4ljzGuyMpbIVQ2PUASC%2BGjumb8fNgiJ2QFGy4PQmqz3ShY%2B0%2BHPXbU8JeM7dMJbjFLxRXDlrejN5CmHm2ETeeRqOXAZpKB2jCnOjOJXBmeAo7gTQWKMND3nUrHKsGsgbQ1czgMc2sDRAMIpD%2FWBXhDfFQtT1cgQgxuwzMIBoY927u7D2dCtrK9p1IUA5utjsj%2FEw2e%2BavwY6pgEOVJppFR8flLuuCrRZvbtadP0cIZ8kJH73QUPXKXb0xiGWlYwj2IrIFyeGy%2BYd9Op1SSCmE%2FHJIgrHxOE2DjrysYo2jhj5eC5HOpJJi45ZDs0mmbsL3sHbVUgK1T9LnX%2FlXiPm04v%2FITwMfoG%2FHbRhhDVrR7CvGvsbi7BWarMUGiiam%2BKqRw3i%2BPMeJZPpgmCfrxPFTJMfcuWp7wIkpt4VfYyypzgA&X-Amz-Signature=a618c6c45cdbb149be1e61618ce06c86771f9cf077f40099d82207c45ce3d283&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
