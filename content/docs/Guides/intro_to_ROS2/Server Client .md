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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466775KKJ5E%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICBcF5kNCOFG9GPKx4sR981hQZzpFDzacLJRKnBdYz0uAiA%2BsCutjpDiUmFkHNyScZW6E7G1Qh9%2Bm%2BB30hN3Cjf5sCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTtYvSo%2BAuJnFxkzoKtwD4Emtr2qFUyt%2B%2B6F%2F%2F7qOW0Tm584uu4eboVMsP3ojc3m%2BKIFadSCCxnHscd1dHyzC5FK57%2Fsw1EdvrqUepYRepjtLe52fwiANv5CRNfODHLfu%2B42s8gSxlBNvQGIrqE0Fv5v4CMzw2c3Y3HnnbThQ6h07GR5rGZqiOEQfNrSa53atsJb%2FTw7kn9srPa8V0tb4ZGHqUtnFESmQuMVs57xPl3QqOLN7Lc2ZfGKfIGCKrYMr9cG3jI7pHX5HI6U47StnmvrUYKBxjKrG74MXA7qImuZAsqekKa4AMfBkA669h0ObhArochjysv9nMYgaVKZcYm82r9Tfom7FflSvsayyGi3qcnRQEI%2FGTC5W5AD8FdrnQjJwKs%2BCKze9AX%2Bk8HofyyoFQb6hnhneDmB2naP5GNxmlMuMs%2FIECYGfJyeh%2Fxlf%2BoxlQPzk0Ceya4V%2Bvl%2B0ijlWvXSrEXz2CFs4c48%2B7%2FBRhpkm12Yi5krJQRr%2FZ3K5m9a3AFSIdc2rt8aXkCtm913nRQRhzooTQCddoIjOxY5P%2BGTX7BEhIJt%2BXDXH7P8gdfeMKD7OBbTU5bwmUmTiL0nqn8clCSTL0n0J7UWWD25kkAhgsGtP5ntoXWTBmEQ7X1OK4F8q0iJs7CcwjoSywwY6pgH9QahTm5cvjYJYJkJy81UK3FIffsECCgVKISt97SpjiSDqm4s9jiYSvtBU2daGxFL%2Fy%2BGzfAscW1QOSl5wGq7dZd1cAp%2FrsAXbqBgxkGeVhjmUXAlDSKHJy68%2FfTNuohEIIzlp2tiz5WCB9dpKduTz79j4t6RgU3Zj2dy03KpWz23B%2BUMSrlPjQuqMcpZi70dldJKBXY19Sf3vJQ2ltPRqUilQ9ymK&X-Amz-Signature=64488b5380a2218499ca96ecc53f886bdf28f4af32ef37a3ba0ea6d833c516f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466775KKJ5E%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICBcF5kNCOFG9GPKx4sR981hQZzpFDzacLJRKnBdYz0uAiA%2BsCutjpDiUmFkHNyScZW6E7G1Qh9%2Bm%2BB30hN3Cjf5sCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTtYvSo%2BAuJnFxkzoKtwD4Emtr2qFUyt%2B%2B6F%2F%2F7qOW0Tm584uu4eboVMsP3ojc3m%2BKIFadSCCxnHscd1dHyzC5FK57%2Fsw1EdvrqUepYRepjtLe52fwiANv5CRNfODHLfu%2B42s8gSxlBNvQGIrqE0Fv5v4CMzw2c3Y3HnnbThQ6h07GR5rGZqiOEQfNrSa53atsJb%2FTw7kn9srPa8V0tb4ZGHqUtnFESmQuMVs57xPl3QqOLN7Lc2ZfGKfIGCKrYMr9cG3jI7pHX5HI6U47StnmvrUYKBxjKrG74MXA7qImuZAsqekKa4AMfBkA669h0ObhArochjysv9nMYgaVKZcYm82r9Tfom7FflSvsayyGi3qcnRQEI%2FGTC5W5AD8FdrnQjJwKs%2BCKze9AX%2Bk8HofyyoFQb6hnhneDmB2naP5GNxmlMuMs%2FIECYGfJyeh%2Fxlf%2BoxlQPzk0Ceya4V%2Bvl%2B0ijlWvXSrEXz2CFs4c48%2B7%2FBRhpkm12Yi5krJQRr%2FZ3K5m9a3AFSIdc2rt8aXkCtm913nRQRhzooTQCddoIjOxY5P%2BGTX7BEhIJt%2BXDXH7P8gdfeMKD7OBbTU5bwmUmTiL0nqn8clCSTL0n0J7UWWD25kkAhgsGtP5ntoXWTBmEQ7X1OK4F8q0iJs7CcwjoSywwY6pgH9QahTm5cvjYJYJkJy81UK3FIffsECCgVKISt97SpjiSDqm4s9jiYSvtBU2daGxFL%2Fy%2BGzfAscW1QOSl5wGq7dZd1cAp%2FrsAXbqBgxkGeVhjmUXAlDSKHJy68%2FfTNuohEIIzlp2tiz5WCB9dpKduTz79j4t6RgU3Zj2dy03KpWz23B%2BUMSrlPjQuqMcpZi70dldJKBXY19Sf3vJQ2ltPRqUilQ9ymK&X-Amz-Signature=3bfa71919ed8c0a919515477d86806366f7234f91a07836c101f810f112140f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466775KKJ5E%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICBcF5kNCOFG9GPKx4sR981hQZzpFDzacLJRKnBdYz0uAiA%2BsCutjpDiUmFkHNyScZW6E7G1Qh9%2Bm%2BB30hN3Cjf5sCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTtYvSo%2BAuJnFxkzoKtwD4Emtr2qFUyt%2B%2B6F%2F%2F7qOW0Tm584uu4eboVMsP3ojc3m%2BKIFadSCCxnHscd1dHyzC5FK57%2Fsw1EdvrqUepYRepjtLe52fwiANv5CRNfODHLfu%2B42s8gSxlBNvQGIrqE0Fv5v4CMzw2c3Y3HnnbThQ6h07GR5rGZqiOEQfNrSa53atsJb%2FTw7kn9srPa8V0tb4ZGHqUtnFESmQuMVs57xPl3QqOLN7Lc2ZfGKfIGCKrYMr9cG3jI7pHX5HI6U47StnmvrUYKBxjKrG74MXA7qImuZAsqekKa4AMfBkA669h0ObhArochjysv9nMYgaVKZcYm82r9Tfom7FflSvsayyGi3qcnRQEI%2FGTC5W5AD8FdrnQjJwKs%2BCKze9AX%2Bk8HofyyoFQb6hnhneDmB2naP5GNxmlMuMs%2FIECYGfJyeh%2Fxlf%2BoxlQPzk0Ceya4V%2Bvl%2B0ijlWvXSrEXz2CFs4c48%2B7%2FBRhpkm12Yi5krJQRr%2FZ3K5m9a3AFSIdc2rt8aXkCtm913nRQRhzooTQCddoIjOxY5P%2BGTX7BEhIJt%2BXDXH7P8gdfeMKD7OBbTU5bwmUmTiL0nqn8clCSTL0n0J7UWWD25kkAhgsGtP5ntoXWTBmEQ7X1OK4F8q0iJs7CcwjoSywwY6pgH9QahTm5cvjYJYJkJy81UK3FIffsECCgVKISt97SpjiSDqm4s9jiYSvtBU2daGxFL%2Fy%2BGzfAscW1QOSl5wGq7dZd1cAp%2FrsAXbqBgxkGeVhjmUXAlDSKHJy68%2FfTNuohEIIzlp2tiz5WCB9dpKduTz79j4t6RgU3Zj2dy03KpWz23B%2BUMSrlPjQuqMcpZi70dldJKBXY19Sf3vJQ2ltPRqUilQ9ymK&X-Amz-Signature=56c8a595c284ea284435a3c128ac1a9ca6b1c3f9187bc187477f471465a13184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466775KKJ5E%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICBcF5kNCOFG9GPKx4sR981hQZzpFDzacLJRKnBdYz0uAiA%2BsCutjpDiUmFkHNyScZW6E7G1Qh9%2Bm%2BB30hN3Cjf5sCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTtYvSo%2BAuJnFxkzoKtwD4Emtr2qFUyt%2B%2B6F%2F%2F7qOW0Tm584uu4eboVMsP3ojc3m%2BKIFadSCCxnHscd1dHyzC5FK57%2Fsw1EdvrqUepYRepjtLe52fwiANv5CRNfODHLfu%2B42s8gSxlBNvQGIrqE0Fv5v4CMzw2c3Y3HnnbThQ6h07GR5rGZqiOEQfNrSa53atsJb%2FTw7kn9srPa8V0tb4ZGHqUtnFESmQuMVs57xPl3QqOLN7Lc2ZfGKfIGCKrYMr9cG3jI7pHX5HI6U47StnmvrUYKBxjKrG74MXA7qImuZAsqekKa4AMfBkA669h0ObhArochjysv9nMYgaVKZcYm82r9Tfom7FflSvsayyGi3qcnRQEI%2FGTC5W5AD8FdrnQjJwKs%2BCKze9AX%2Bk8HofyyoFQb6hnhneDmB2naP5GNxmlMuMs%2FIECYGfJyeh%2Fxlf%2BoxlQPzk0Ceya4V%2Bvl%2B0ijlWvXSrEXz2CFs4c48%2B7%2FBRhpkm12Yi5krJQRr%2FZ3K5m9a3AFSIdc2rt8aXkCtm913nRQRhzooTQCddoIjOxY5P%2BGTX7BEhIJt%2BXDXH7P8gdfeMKD7OBbTU5bwmUmTiL0nqn8clCSTL0n0J7UWWD25kkAhgsGtP5ntoXWTBmEQ7X1OK4F8q0iJs7CcwjoSywwY6pgH9QahTm5cvjYJYJkJy81UK3FIffsECCgVKISt97SpjiSDqm4s9jiYSvtBU2daGxFL%2Fy%2BGzfAscW1QOSl5wGq7dZd1cAp%2FrsAXbqBgxkGeVhjmUXAlDSKHJy68%2FfTNuohEIIzlp2tiz5WCB9dpKduTz79j4t6RgU3Zj2dy03KpWz23B%2BUMSrlPjQuqMcpZi70dldJKBXY19Sf3vJQ2ltPRqUilQ9ymK&X-Amz-Signature=f4ecd219d418ed1e17bbb7cbf4a6bee1f731fbb57989fc98c2db022cd4cd0072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466775KKJ5E%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICBcF5kNCOFG9GPKx4sR981hQZzpFDzacLJRKnBdYz0uAiA%2BsCutjpDiUmFkHNyScZW6E7G1Qh9%2Bm%2BB30hN3Cjf5sCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTtYvSo%2BAuJnFxkzoKtwD4Emtr2qFUyt%2B%2B6F%2F%2F7qOW0Tm584uu4eboVMsP3ojc3m%2BKIFadSCCxnHscd1dHyzC5FK57%2Fsw1EdvrqUepYRepjtLe52fwiANv5CRNfODHLfu%2B42s8gSxlBNvQGIrqE0Fv5v4CMzw2c3Y3HnnbThQ6h07GR5rGZqiOEQfNrSa53atsJb%2FTw7kn9srPa8V0tb4ZGHqUtnFESmQuMVs57xPl3QqOLN7Lc2ZfGKfIGCKrYMr9cG3jI7pHX5HI6U47StnmvrUYKBxjKrG74MXA7qImuZAsqekKa4AMfBkA669h0ObhArochjysv9nMYgaVKZcYm82r9Tfom7FflSvsayyGi3qcnRQEI%2FGTC5W5AD8FdrnQjJwKs%2BCKze9AX%2Bk8HofyyoFQb6hnhneDmB2naP5GNxmlMuMs%2FIECYGfJyeh%2Fxlf%2BoxlQPzk0Ceya4V%2Bvl%2B0ijlWvXSrEXz2CFs4c48%2B7%2FBRhpkm12Yi5krJQRr%2FZ3K5m9a3AFSIdc2rt8aXkCtm913nRQRhzooTQCddoIjOxY5P%2BGTX7BEhIJt%2BXDXH7P8gdfeMKD7OBbTU5bwmUmTiL0nqn8clCSTL0n0J7UWWD25kkAhgsGtP5ntoXWTBmEQ7X1OK4F8q0iJs7CcwjoSywwY6pgH9QahTm5cvjYJYJkJy81UK3FIffsECCgVKISt97SpjiSDqm4s9jiYSvtBU2daGxFL%2Fy%2BGzfAscW1QOSl5wGq7dZd1cAp%2FrsAXbqBgxkGeVhjmUXAlDSKHJy68%2FfTNuohEIIzlp2tiz5WCB9dpKduTz79j4t6RgU3Zj2dy03KpWz23B%2BUMSrlPjQuqMcpZi70dldJKBXY19Sf3vJQ2ltPRqUilQ9ymK&X-Amz-Signature=47509c993149f34a7d417124e6b37f0813b918476fa6852512b0f07e785abe8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
