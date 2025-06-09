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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5GTI6B2%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2zYxtsdTcl27n9jVFH9dM2Ac97NS%2FsRi1IfDTkQeO4QIhAPs%2F6JD7%2Be5QeTqdckqA%2Bp7hBMi2O47bhY3giHeN7MtAKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyv%2FBto1raRrClFDMkq3ANgDMF7OJx2rX2iY8j1qAf%2B9PzxPHwrkWLWJIrM7%2F96bA5jACh3igKNPNSRw2aoOZ9aiJV1sZOcwC%2FvsH8kHdARcYZ%2BIVSw6MemLnd73AaPAGmBNFBoTqqJmDx2m5F1Pg2RAdvNY46azMpIv31fnytSQTSTrv2eNBtWLOZXUS%2FFlMwVG2ypCe24DsuVwAC2d6DKulRvPs9FQb5sH7FaPalWktUcBw0VU%2BGAmeqOCi4eM8AsvIqxFysnmKpAOTrTTY4tGFhCQyJIUkMYhFUnB%2BtgEZ3fPLm7eJy4sgR858pPvt9VKw0FPdhSQqJdxzLR%2BNhwQpvVzRsM3pWOKRfl7JGDwSCi4FCFPrCaotZMkniga%2B7JQLazqXuInu2RXTDqdvu7%2F7d%2F8uumNGMrQXFRN4MV5Bb5ehSv3miWToce5dwRNA6qJ7d8eksIkTbbpfAii29K9vq84xV%2FlcE4hi2hMIO%2BlEzBfMEXiS37BpHGc3edR%2FNd2L9dqAYPQ7SzeNGcTYOLPF998w1HTdZijF9aCsQifAP5qI57QfNNVhz%2BEa7%2BAQ6fAwCpLkOZuBC7%2B%2FDKTBJPoL%2FYlHrUlUcyITsZpkUSfazDGNcRyvSWo8n%2BSRuL4eLaq2h7Axh56rY4QTDV%2BZzCBjqkARdEXobAKYivl8Z7gQWlJah8XIozAkaaMtfUAtLVXV4i%2F5JBsGmtXsgX0WFxLRQ3D%2FyzCEFmSggK825gNDDX%2BGWRafizas3wM6FFCub22kNqrTvKi94DKfaPTkfR%2BisTobK25RANsEfYNL%2F62i6nwCNUrDC1qSvUM%2FyUr1n%2FWRB3ihXXBLo99l8JW6Vro%2FTpzrFCEUaWEykmuFm617vRg6iRXnZb&X-Amz-Signature=d4a04642cc8c5029dac6b1796eb93421fe65fc1807f5d8158cac3540f1d92be8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5GTI6B2%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2zYxtsdTcl27n9jVFH9dM2Ac97NS%2FsRi1IfDTkQeO4QIhAPs%2F6JD7%2Be5QeTqdckqA%2Bp7hBMi2O47bhY3giHeN7MtAKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyv%2FBto1raRrClFDMkq3ANgDMF7OJx2rX2iY8j1qAf%2B9PzxPHwrkWLWJIrM7%2F96bA5jACh3igKNPNSRw2aoOZ9aiJV1sZOcwC%2FvsH8kHdARcYZ%2BIVSw6MemLnd73AaPAGmBNFBoTqqJmDx2m5F1Pg2RAdvNY46azMpIv31fnytSQTSTrv2eNBtWLOZXUS%2FFlMwVG2ypCe24DsuVwAC2d6DKulRvPs9FQb5sH7FaPalWktUcBw0VU%2BGAmeqOCi4eM8AsvIqxFysnmKpAOTrTTY4tGFhCQyJIUkMYhFUnB%2BtgEZ3fPLm7eJy4sgR858pPvt9VKw0FPdhSQqJdxzLR%2BNhwQpvVzRsM3pWOKRfl7JGDwSCi4FCFPrCaotZMkniga%2B7JQLazqXuInu2RXTDqdvu7%2F7d%2F8uumNGMrQXFRN4MV5Bb5ehSv3miWToce5dwRNA6qJ7d8eksIkTbbpfAii29K9vq84xV%2FlcE4hi2hMIO%2BlEzBfMEXiS37BpHGc3edR%2FNd2L9dqAYPQ7SzeNGcTYOLPF998w1HTdZijF9aCsQifAP5qI57QfNNVhz%2BEa7%2BAQ6fAwCpLkOZuBC7%2B%2FDKTBJPoL%2FYlHrUlUcyITsZpkUSfazDGNcRyvSWo8n%2BSRuL4eLaq2h7Axh56rY4QTDV%2BZzCBjqkARdEXobAKYivl8Z7gQWlJah8XIozAkaaMtfUAtLVXV4i%2F5JBsGmtXsgX0WFxLRQ3D%2FyzCEFmSggK825gNDDX%2BGWRafizas3wM6FFCub22kNqrTvKi94DKfaPTkfR%2BisTobK25RANsEfYNL%2F62i6nwCNUrDC1qSvUM%2FyUr1n%2FWRB3ihXXBLo99l8JW6Vro%2FTpzrFCEUaWEykmuFm617vRg6iRXnZb&X-Amz-Signature=7d703f0423cefec6f418f552b3ca6f7780baa6721112ac361dcb50a4ef809710&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5GTI6B2%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2zYxtsdTcl27n9jVFH9dM2Ac97NS%2FsRi1IfDTkQeO4QIhAPs%2F6JD7%2Be5QeTqdckqA%2Bp7hBMi2O47bhY3giHeN7MtAKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyv%2FBto1raRrClFDMkq3ANgDMF7OJx2rX2iY8j1qAf%2B9PzxPHwrkWLWJIrM7%2F96bA5jACh3igKNPNSRw2aoOZ9aiJV1sZOcwC%2FvsH8kHdARcYZ%2BIVSw6MemLnd73AaPAGmBNFBoTqqJmDx2m5F1Pg2RAdvNY46azMpIv31fnytSQTSTrv2eNBtWLOZXUS%2FFlMwVG2ypCe24DsuVwAC2d6DKulRvPs9FQb5sH7FaPalWktUcBw0VU%2BGAmeqOCi4eM8AsvIqxFysnmKpAOTrTTY4tGFhCQyJIUkMYhFUnB%2BtgEZ3fPLm7eJy4sgR858pPvt9VKw0FPdhSQqJdxzLR%2BNhwQpvVzRsM3pWOKRfl7JGDwSCi4FCFPrCaotZMkniga%2B7JQLazqXuInu2RXTDqdvu7%2F7d%2F8uumNGMrQXFRN4MV5Bb5ehSv3miWToce5dwRNA6qJ7d8eksIkTbbpfAii29K9vq84xV%2FlcE4hi2hMIO%2BlEzBfMEXiS37BpHGc3edR%2FNd2L9dqAYPQ7SzeNGcTYOLPF998w1HTdZijF9aCsQifAP5qI57QfNNVhz%2BEa7%2BAQ6fAwCpLkOZuBC7%2B%2FDKTBJPoL%2FYlHrUlUcyITsZpkUSfazDGNcRyvSWo8n%2BSRuL4eLaq2h7Axh56rY4QTDV%2BZzCBjqkARdEXobAKYivl8Z7gQWlJah8XIozAkaaMtfUAtLVXV4i%2F5JBsGmtXsgX0WFxLRQ3D%2FyzCEFmSggK825gNDDX%2BGWRafizas3wM6FFCub22kNqrTvKi94DKfaPTkfR%2BisTobK25RANsEfYNL%2F62i6nwCNUrDC1qSvUM%2FyUr1n%2FWRB3ihXXBLo99l8JW6Vro%2FTpzrFCEUaWEykmuFm617vRg6iRXnZb&X-Amz-Signature=68dfc603d0432b4bd0608487bd394e1179466d7710b4e5af2c49c4a36ac62249&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5GTI6B2%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2zYxtsdTcl27n9jVFH9dM2Ac97NS%2FsRi1IfDTkQeO4QIhAPs%2F6JD7%2Be5QeTqdckqA%2Bp7hBMi2O47bhY3giHeN7MtAKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyv%2FBto1raRrClFDMkq3ANgDMF7OJx2rX2iY8j1qAf%2B9PzxPHwrkWLWJIrM7%2F96bA5jACh3igKNPNSRw2aoOZ9aiJV1sZOcwC%2FvsH8kHdARcYZ%2BIVSw6MemLnd73AaPAGmBNFBoTqqJmDx2m5F1Pg2RAdvNY46azMpIv31fnytSQTSTrv2eNBtWLOZXUS%2FFlMwVG2ypCe24DsuVwAC2d6DKulRvPs9FQb5sH7FaPalWktUcBw0VU%2BGAmeqOCi4eM8AsvIqxFysnmKpAOTrTTY4tGFhCQyJIUkMYhFUnB%2BtgEZ3fPLm7eJy4sgR858pPvt9VKw0FPdhSQqJdxzLR%2BNhwQpvVzRsM3pWOKRfl7JGDwSCi4FCFPrCaotZMkniga%2B7JQLazqXuInu2RXTDqdvu7%2F7d%2F8uumNGMrQXFRN4MV5Bb5ehSv3miWToce5dwRNA6qJ7d8eksIkTbbpfAii29K9vq84xV%2FlcE4hi2hMIO%2BlEzBfMEXiS37BpHGc3edR%2FNd2L9dqAYPQ7SzeNGcTYOLPF998w1HTdZijF9aCsQifAP5qI57QfNNVhz%2BEa7%2BAQ6fAwCpLkOZuBC7%2B%2FDKTBJPoL%2FYlHrUlUcyITsZpkUSfazDGNcRyvSWo8n%2BSRuL4eLaq2h7Axh56rY4QTDV%2BZzCBjqkARdEXobAKYivl8Z7gQWlJah8XIozAkaaMtfUAtLVXV4i%2F5JBsGmtXsgX0WFxLRQ3D%2FyzCEFmSggK825gNDDX%2BGWRafizas3wM6FFCub22kNqrTvKi94DKfaPTkfR%2BisTobK25RANsEfYNL%2F62i6nwCNUrDC1qSvUM%2FyUr1n%2FWRB3ihXXBLo99l8JW6Vro%2FTpzrFCEUaWEykmuFm617vRg6iRXnZb&X-Amz-Signature=3a3e9cca6b737f71621756b9679c7a00e6dcd5352bd98292ac5d5475e2bca50a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5GTI6B2%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2zYxtsdTcl27n9jVFH9dM2Ac97NS%2FsRi1IfDTkQeO4QIhAPs%2F6JD7%2Be5QeTqdckqA%2Bp7hBMi2O47bhY3giHeN7MtAKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyv%2FBto1raRrClFDMkq3ANgDMF7OJx2rX2iY8j1qAf%2B9PzxPHwrkWLWJIrM7%2F96bA5jACh3igKNPNSRw2aoOZ9aiJV1sZOcwC%2FvsH8kHdARcYZ%2BIVSw6MemLnd73AaPAGmBNFBoTqqJmDx2m5F1Pg2RAdvNY46azMpIv31fnytSQTSTrv2eNBtWLOZXUS%2FFlMwVG2ypCe24DsuVwAC2d6DKulRvPs9FQb5sH7FaPalWktUcBw0VU%2BGAmeqOCi4eM8AsvIqxFysnmKpAOTrTTY4tGFhCQyJIUkMYhFUnB%2BtgEZ3fPLm7eJy4sgR858pPvt9VKw0FPdhSQqJdxzLR%2BNhwQpvVzRsM3pWOKRfl7JGDwSCi4FCFPrCaotZMkniga%2B7JQLazqXuInu2RXTDqdvu7%2F7d%2F8uumNGMrQXFRN4MV5Bb5ehSv3miWToce5dwRNA6qJ7d8eksIkTbbpfAii29K9vq84xV%2FlcE4hi2hMIO%2BlEzBfMEXiS37BpHGc3edR%2FNd2L9dqAYPQ7SzeNGcTYOLPF998w1HTdZijF9aCsQifAP5qI57QfNNVhz%2BEa7%2BAQ6fAwCpLkOZuBC7%2B%2FDKTBJPoL%2FYlHrUlUcyITsZpkUSfazDGNcRyvSWo8n%2BSRuL4eLaq2h7Axh56rY4QTDV%2BZzCBjqkARdEXobAKYivl8Z7gQWlJah8XIozAkaaMtfUAtLVXV4i%2F5JBsGmtXsgX0WFxLRQ3D%2FyzCEFmSggK825gNDDX%2BGWRafizas3wM6FFCub22kNqrTvKi94DKfaPTkfR%2BisTobK25RANsEfYNL%2F62i6nwCNUrDC1qSvUM%2FyUr1n%2FWRB3ihXXBLo99l8JW6Vro%2FTpzrFCEUaWEykmuFm617vRg6iRXnZb&X-Amz-Signature=7d8e5782af60a02de261692f524dd7f906545a2a9af675a5d9cf7c9c34fa9a92&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
