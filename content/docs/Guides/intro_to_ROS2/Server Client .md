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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ276CON%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQjWZ1iS4QrjvMNQtFC62MqoZOXq37SWua%2BjOfG%2Fb0KgIhAMueXOPriuJzjC62600MuapuzJYuoZs%2B3yHMmOaarPTkKv8DCE4QABoMNjM3NDIzMTgzODA1IgyrXxTx5%2BivBjaWxBsq3APORkXSCH78%2Bb6Jc%2FPk%2B%2FUkL6DSiuY4jf9i8drdI9zhCHXVlsdNCcx3oNdSKNQyzJLjSu5WVjuxKiABEvZak2Csdgx9ZUzbT0Wjjz7WjVA7%2BFAbQRX57MqaGN3ej1l%2Fjo7%2FEtfynhF1IIH5mM0fPsHwCqEoM3n5mkr7trmpqNOWaUyc6nsj6kRdzl6ZkiIHLmYOYI1lhmGRgXE7DDFpbLlGhvXRlBw%2BGVhM3sID2oKC4hW85eCWn5d1rJ9DBvAiRheP7ZJLEQ4dQmGLgmw1DW%2FV6Evg2WKM%2FbPtX88PTIpLbTdfGgTHvztPb%2BmMkb09d%2BP3TeqxUPSCGFTz9cRmaSoMeg3QlCJZzeocsYeFLTPHvyZGeVua5yNTcY8bIbtES8h1RCUp6Ezt7ZEHELWAzbhpRikwGirj5YYCEs8BKTfWfmb93fwyQ0Vykr%2FqcnvYQgtnv8ai791mJu5w5Eu3EzK98ReMk650r128LCPxYivjp5f5rqeXzh71zR25ixYS9RdkVXLKzgVC1U%2Fl6kvxEzqiDi3LaHmjGr2R3O3iiYghl%2Ftdfz9gcNgwUpK6a0mCDpaYOMBzofCDYyXv%2FmXZPYTN9xiTnsnuCHfZeXW103WShfseE0rqLwkE5udS4TC%2BrIDABjqkAQpruYX1hYq4jbbnNDX%2BzKWyytDf0SyPcq7k0ciFq6gayLVCGE2xo6zg3Rh4QiBM5wgb1VpmvWSDmBBU7wE3pAx6547wX%2FklNNWmLJcpBm3Fsfhz9RkwvJ5Bfs0Lmz0p%2BrCj1EJj6Rdv7R2QTisQ2KSYk4W7We37e727pKD7%2FuYyJEMR01C%2Bv%2FaWDDznqD7IBX6NoVZPnkVKFmUqVPmwsaBb1R5x&X-Amz-Signature=c85fea5a4520f47346f6ecf80d7c422c408a1f891d75b8f95dc377cc4ab84e71&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ276CON%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQjWZ1iS4QrjvMNQtFC62MqoZOXq37SWua%2BjOfG%2Fb0KgIhAMueXOPriuJzjC62600MuapuzJYuoZs%2B3yHMmOaarPTkKv8DCE4QABoMNjM3NDIzMTgzODA1IgyrXxTx5%2BivBjaWxBsq3APORkXSCH78%2Bb6Jc%2FPk%2B%2FUkL6DSiuY4jf9i8drdI9zhCHXVlsdNCcx3oNdSKNQyzJLjSu5WVjuxKiABEvZak2Csdgx9ZUzbT0Wjjz7WjVA7%2BFAbQRX57MqaGN3ej1l%2Fjo7%2FEtfynhF1IIH5mM0fPsHwCqEoM3n5mkr7trmpqNOWaUyc6nsj6kRdzl6ZkiIHLmYOYI1lhmGRgXE7DDFpbLlGhvXRlBw%2BGVhM3sID2oKC4hW85eCWn5d1rJ9DBvAiRheP7ZJLEQ4dQmGLgmw1DW%2FV6Evg2WKM%2FbPtX88PTIpLbTdfGgTHvztPb%2BmMkb09d%2BP3TeqxUPSCGFTz9cRmaSoMeg3QlCJZzeocsYeFLTPHvyZGeVua5yNTcY8bIbtES8h1RCUp6Ezt7ZEHELWAzbhpRikwGirj5YYCEs8BKTfWfmb93fwyQ0Vykr%2FqcnvYQgtnv8ai791mJu5w5Eu3EzK98ReMk650r128LCPxYivjp5f5rqeXzh71zR25ixYS9RdkVXLKzgVC1U%2Fl6kvxEzqiDi3LaHmjGr2R3O3iiYghl%2Ftdfz9gcNgwUpK6a0mCDpaYOMBzofCDYyXv%2FmXZPYTN9xiTnsnuCHfZeXW103WShfseE0rqLwkE5udS4TC%2BrIDABjqkAQpruYX1hYq4jbbnNDX%2BzKWyytDf0SyPcq7k0ciFq6gayLVCGE2xo6zg3Rh4QiBM5wgb1VpmvWSDmBBU7wE3pAx6547wX%2FklNNWmLJcpBm3Fsfhz9RkwvJ5Bfs0Lmz0p%2BrCj1EJj6Rdv7R2QTisQ2KSYk4W7We37e727pKD7%2FuYyJEMR01C%2Bv%2FaWDDznqD7IBX6NoVZPnkVKFmUqVPmwsaBb1R5x&X-Amz-Signature=ce347c8f6bcb87706cda4a508a0c90f74057b2d885f386ac676fd072401eb27d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ276CON%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQjWZ1iS4QrjvMNQtFC62MqoZOXq37SWua%2BjOfG%2Fb0KgIhAMueXOPriuJzjC62600MuapuzJYuoZs%2B3yHMmOaarPTkKv8DCE4QABoMNjM3NDIzMTgzODA1IgyrXxTx5%2BivBjaWxBsq3APORkXSCH78%2Bb6Jc%2FPk%2B%2FUkL6DSiuY4jf9i8drdI9zhCHXVlsdNCcx3oNdSKNQyzJLjSu5WVjuxKiABEvZak2Csdgx9ZUzbT0Wjjz7WjVA7%2BFAbQRX57MqaGN3ej1l%2Fjo7%2FEtfynhF1IIH5mM0fPsHwCqEoM3n5mkr7trmpqNOWaUyc6nsj6kRdzl6ZkiIHLmYOYI1lhmGRgXE7DDFpbLlGhvXRlBw%2BGVhM3sID2oKC4hW85eCWn5d1rJ9DBvAiRheP7ZJLEQ4dQmGLgmw1DW%2FV6Evg2WKM%2FbPtX88PTIpLbTdfGgTHvztPb%2BmMkb09d%2BP3TeqxUPSCGFTz9cRmaSoMeg3QlCJZzeocsYeFLTPHvyZGeVua5yNTcY8bIbtES8h1RCUp6Ezt7ZEHELWAzbhpRikwGirj5YYCEs8BKTfWfmb93fwyQ0Vykr%2FqcnvYQgtnv8ai791mJu5w5Eu3EzK98ReMk650r128LCPxYivjp5f5rqeXzh71zR25ixYS9RdkVXLKzgVC1U%2Fl6kvxEzqiDi3LaHmjGr2R3O3iiYghl%2Ftdfz9gcNgwUpK6a0mCDpaYOMBzofCDYyXv%2FmXZPYTN9xiTnsnuCHfZeXW103WShfseE0rqLwkE5udS4TC%2BrIDABjqkAQpruYX1hYq4jbbnNDX%2BzKWyytDf0SyPcq7k0ciFq6gayLVCGE2xo6zg3Rh4QiBM5wgb1VpmvWSDmBBU7wE3pAx6547wX%2FklNNWmLJcpBm3Fsfhz9RkwvJ5Bfs0Lmz0p%2BrCj1EJj6Rdv7R2QTisQ2KSYk4W7We37e727pKD7%2FuYyJEMR01C%2Bv%2FaWDDznqD7IBX6NoVZPnkVKFmUqVPmwsaBb1R5x&X-Amz-Signature=7c6db5a40c53fb3dd977f98e69aa0fc6a14b7e61c026533ad30b8afb176a3643&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ276CON%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQjWZ1iS4QrjvMNQtFC62MqoZOXq37SWua%2BjOfG%2Fb0KgIhAMueXOPriuJzjC62600MuapuzJYuoZs%2B3yHMmOaarPTkKv8DCE4QABoMNjM3NDIzMTgzODA1IgyrXxTx5%2BivBjaWxBsq3APORkXSCH78%2Bb6Jc%2FPk%2B%2FUkL6DSiuY4jf9i8drdI9zhCHXVlsdNCcx3oNdSKNQyzJLjSu5WVjuxKiABEvZak2Csdgx9ZUzbT0Wjjz7WjVA7%2BFAbQRX57MqaGN3ej1l%2Fjo7%2FEtfynhF1IIH5mM0fPsHwCqEoM3n5mkr7trmpqNOWaUyc6nsj6kRdzl6ZkiIHLmYOYI1lhmGRgXE7DDFpbLlGhvXRlBw%2BGVhM3sID2oKC4hW85eCWn5d1rJ9DBvAiRheP7ZJLEQ4dQmGLgmw1DW%2FV6Evg2WKM%2FbPtX88PTIpLbTdfGgTHvztPb%2BmMkb09d%2BP3TeqxUPSCGFTz9cRmaSoMeg3QlCJZzeocsYeFLTPHvyZGeVua5yNTcY8bIbtES8h1RCUp6Ezt7ZEHELWAzbhpRikwGirj5YYCEs8BKTfWfmb93fwyQ0Vykr%2FqcnvYQgtnv8ai791mJu5w5Eu3EzK98ReMk650r128LCPxYivjp5f5rqeXzh71zR25ixYS9RdkVXLKzgVC1U%2Fl6kvxEzqiDi3LaHmjGr2R3O3iiYghl%2Ftdfz9gcNgwUpK6a0mCDpaYOMBzofCDYyXv%2FmXZPYTN9xiTnsnuCHfZeXW103WShfseE0rqLwkE5udS4TC%2BrIDABjqkAQpruYX1hYq4jbbnNDX%2BzKWyytDf0SyPcq7k0ciFq6gayLVCGE2xo6zg3Rh4QiBM5wgb1VpmvWSDmBBU7wE3pAx6547wX%2FklNNWmLJcpBm3Fsfhz9RkwvJ5Bfs0Lmz0p%2BrCj1EJj6Rdv7R2QTisQ2KSYk4W7We37e727pKD7%2FuYyJEMR01C%2Bv%2FaWDDznqD7IBX6NoVZPnkVKFmUqVPmwsaBb1R5x&X-Amz-Signature=08a3e038b47051f41a2c665d294742c9a268d94395c6f1dba1a2df8c67f8a714&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ276CON%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQjWZ1iS4QrjvMNQtFC62MqoZOXq37SWua%2BjOfG%2Fb0KgIhAMueXOPriuJzjC62600MuapuzJYuoZs%2B3yHMmOaarPTkKv8DCE4QABoMNjM3NDIzMTgzODA1IgyrXxTx5%2BivBjaWxBsq3APORkXSCH78%2Bb6Jc%2FPk%2B%2FUkL6DSiuY4jf9i8drdI9zhCHXVlsdNCcx3oNdSKNQyzJLjSu5WVjuxKiABEvZak2Csdgx9ZUzbT0Wjjz7WjVA7%2BFAbQRX57MqaGN3ej1l%2Fjo7%2FEtfynhF1IIH5mM0fPsHwCqEoM3n5mkr7trmpqNOWaUyc6nsj6kRdzl6ZkiIHLmYOYI1lhmGRgXE7DDFpbLlGhvXRlBw%2BGVhM3sID2oKC4hW85eCWn5d1rJ9DBvAiRheP7ZJLEQ4dQmGLgmw1DW%2FV6Evg2WKM%2FbPtX88PTIpLbTdfGgTHvztPb%2BmMkb09d%2BP3TeqxUPSCGFTz9cRmaSoMeg3QlCJZzeocsYeFLTPHvyZGeVua5yNTcY8bIbtES8h1RCUp6Ezt7ZEHELWAzbhpRikwGirj5YYCEs8BKTfWfmb93fwyQ0Vykr%2FqcnvYQgtnv8ai791mJu5w5Eu3EzK98ReMk650r128LCPxYivjp5f5rqeXzh71zR25ixYS9RdkVXLKzgVC1U%2Fl6kvxEzqiDi3LaHmjGr2R3O3iiYghl%2Ftdfz9gcNgwUpK6a0mCDpaYOMBzofCDYyXv%2FmXZPYTN9xiTnsnuCHfZeXW103WShfseE0rqLwkE5udS4TC%2BrIDABjqkAQpruYX1hYq4jbbnNDX%2BzKWyytDf0SyPcq7k0ciFq6gayLVCGE2xo6zg3Rh4QiBM5wgb1VpmvWSDmBBU7wE3pAx6547wX%2FklNNWmLJcpBm3Fsfhz9RkwvJ5Bfs0Lmz0p%2BrCj1EJj6Rdv7R2QTisQ2KSYk4W7We37e727pKD7%2FuYyJEMR01C%2Bv%2FaWDDznqD7IBX6NoVZPnkVKFmUqVPmwsaBb1R5x&X-Amz-Signature=5a638ab65b51ba88c2cdf321d8476c5665564c7524cdd7c0c550b18393cde5d8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
