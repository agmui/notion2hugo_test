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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDBAODAV%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T091018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP%2B2OWOVQ9pZ%2F5QMweClx9Hr4PapHQwM9fwJ2sBGlbIwIgIThMGkIQsTZHU78fNrx3rbropvZgrNR5Mx82Jbh8tjcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIScK9wNeK8b3fgSXCrcAwBJ1%2FdbZqCUZTQsugfY3prBYVtTE1I5W%2F6CurqbGhvRrRFj5yHaiO%2BBJYV4i6yTGPy5HsEEbyf0cSIgiNg1hoCKqDM0iHiVWmNtb1WDxJOZHvGzZ9x%2F8qwRDzAdq%2BNity2McbGAE4DTy6c24o7Hhl2sUdIzlq9WkYIP8SjTrUe0WBshClqK6fpH9P8r%2BmTOboLC7j5zTUh8%2BOZHtxjnSR5ewI22NzbAA427s0MANSMpu%2FuGm7f7xTblp8rI3IYI2XvmyxUTGlRCTv8HjWYXBEzdX7PXcQPpUyPkZkAni1zMezTlpRw8IDd1O6DbQLS%2BurBbH7Hp%2FEsPkrDqqTConsh0Yzm2gREX3R5lgBw3nP1OruWAT81VNb49lEZeHwJhUsg8fLt1kq7T4xrhdArmMdaGPDSQR3hQXc53MEbdHo0F1PT%2Bmq3mJtScZclyMRTPXeVEGv9hRdpKFU9RFeac8yTfWCmClh4bJpVXAGdScEi7DmcwZ1dT5ZemhaWxGOQk4S7%2Fqk3%2FZR46S7AX4qnGsQricImzLYtO2EfZurhJkvAgv04yu26BFjhjYB8LK9FAb%2FRe5DQ%2FpFSdVTwWOJhP3n%2ByCguk4EqPljtT072eaYNBE27w2CzL%2BuFhEu23MMjj8r8GOqUBL%2BzRyDOKs8vvdtN%2BjMdcnmG4IEYYaG6z8WoTVFMD4bbH9dliEp6ay0M%2FDK980RxS00yXwXAL4m62%2FXOUHTi%2BLM8FIRDbN3vo%2FQDxhI9l908ga0ty9Dkx7PPjEY%2FBevveE5VePIIXfRNgGqVnc6uc7tlDzkE9qmQlAHaVE67n99uf9YkbdeXCJiEwiapJqU698VfGlBjWD%2F92gG7pqGaQqHWBgkxX&X-Amz-Signature=ce87c67d27dac6dfd4653973588271e94ecfe2c4fd20b65c81c2401c93e961eb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDBAODAV%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T091018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP%2B2OWOVQ9pZ%2F5QMweClx9Hr4PapHQwM9fwJ2sBGlbIwIgIThMGkIQsTZHU78fNrx3rbropvZgrNR5Mx82Jbh8tjcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIScK9wNeK8b3fgSXCrcAwBJ1%2FdbZqCUZTQsugfY3prBYVtTE1I5W%2F6CurqbGhvRrRFj5yHaiO%2BBJYV4i6yTGPy5HsEEbyf0cSIgiNg1hoCKqDM0iHiVWmNtb1WDxJOZHvGzZ9x%2F8qwRDzAdq%2BNity2McbGAE4DTy6c24o7Hhl2sUdIzlq9WkYIP8SjTrUe0WBshClqK6fpH9P8r%2BmTOboLC7j5zTUh8%2BOZHtxjnSR5ewI22NzbAA427s0MANSMpu%2FuGm7f7xTblp8rI3IYI2XvmyxUTGlRCTv8HjWYXBEzdX7PXcQPpUyPkZkAni1zMezTlpRw8IDd1O6DbQLS%2BurBbH7Hp%2FEsPkrDqqTConsh0Yzm2gREX3R5lgBw3nP1OruWAT81VNb49lEZeHwJhUsg8fLt1kq7T4xrhdArmMdaGPDSQR3hQXc53MEbdHo0F1PT%2Bmq3mJtScZclyMRTPXeVEGv9hRdpKFU9RFeac8yTfWCmClh4bJpVXAGdScEi7DmcwZ1dT5ZemhaWxGOQk4S7%2Fqk3%2FZR46S7AX4qnGsQricImzLYtO2EfZurhJkvAgv04yu26BFjhjYB8LK9FAb%2FRe5DQ%2FpFSdVTwWOJhP3n%2ByCguk4EqPljtT072eaYNBE27w2CzL%2BuFhEu23MMjj8r8GOqUBL%2BzRyDOKs8vvdtN%2BjMdcnmG4IEYYaG6z8WoTVFMD4bbH9dliEp6ay0M%2FDK980RxS00yXwXAL4m62%2FXOUHTi%2BLM8FIRDbN3vo%2FQDxhI9l908ga0ty9Dkx7PPjEY%2FBevveE5VePIIXfRNgGqVnc6uc7tlDzkE9qmQlAHaVE67n99uf9YkbdeXCJiEwiapJqU698VfGlBjWD%2F92gG7pqGaQqHWBgkxX&X-Amz-Signature=433f43309d9fec995a283c269ff6d9ffb93bdf6a790b400d506932b961ae2e47&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDBAODAV%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T091018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP%2B2OWOVQ9pZ%2F5QMweClx9Hr4PapHQwM9fwJ2sBGlbIwIgIThMGkIQsTZHU78fNrx3rbropvZgrNR5Mx82Jbh8tjcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIScK9wNeK8b3fgSXCrcAwBJ1%2FdbZqCUZTQsugfY3prBYVtTE1I5W%2F6CurqbGhvRrRFj5yHaiO%2BBJYV4i6yTGPy5HsEEbyf0cSIgiNg1hoCKqDM0iHiVWmNtb1WDxJOZHvGzZ9x%2F8qwRDzAdq%2BNity2McbGAE4DTy6c24o7Hhl2sUdIzlq9WkYIP8SjTrUe0WBshClqK6fpH9P8r%2BmTOboLC7j5zTUh8%2BOZHtxjnSR5ewI22NzbAA427s0MANSMpu%2FuGm7f7xTblp8rI3IYI2XvmyxUTGlRCTv8HjWYXBEzdX7PXcQPpUyPkZkAni1zMezTlpRw8IDd1O6DbQLS%2BurBbH7Hp%2FEsPkrDqqTConsh0Yzm2gREX3R5lgBw3nP1OruWAT81VNb49lEZeHwJhUsg8fLt1kq7T4xrhdArmMdaGPDSQR3hQXc53MEbdHo0F1PT%2Bmq3mJtScZclyMRTPXeVEGv9hRdpKFU9RFeac8yTfWCmClh4bJpVXAGdScEi7DmcwZ1dT5ZemhaWxGOQk4S7%2Fqk3%2FZR46S7AX4qnGsQricImzLYtO2EfZurhJkvAgv04yu26BFjhjYB8LK9FAb%2FRe5DQ%2FpFSdVTwWOJhP3n%2ByCguk4EqPljtT072eaYNBE27w2CzL%2BuFhEu23MMjj8r8GOqUBL%2BzRyDOKs8vvdtN%2BjMdcnmG4IEYYaG6z8WoTVFMD4bbH9dliEp6ay0M%2FDK980RxS00yXwXAL4m62%2FXOUHTi%2BLM8FIRDbN3vo%2FQDxhI9l908ga0ty9Dkx7PPjEY%2FBevveE5VePIIXfRNgGqVnc6uc7tlDzkE9qmQlAHaVE67n99uf9YkbdeXCJiEwiapJqU698VfGlBjWD%2F92gG7pqGaQqHWBgkxX&X-Amz-Signature=e7a260f374898515267b3e89958c596cb33a9339fe5177ddfb336d3abbe570ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDBAODAV%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T091018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP%2B2OWOVQ9pZ%2F5QMweClx9Hr4PapHQwM9fwJ2sBGlbIwIgIThMGkIQsTZHU78fNrx3rbropvZgrNR5Mx82Jbh8tjcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIScK9wNeK8b3fgSXCrcAwBJ1%2FdbZqCUZTQsugfY3prBYVtTE1I5W%2F6CurqbGhvRrRFj5yHaiO%2BBJYV4i6yTGPy5HsEEbyf0cSIgiNg1hoCKqDM0iHiVWmNtb1WDxJOZHvGzZ9x%2F8qwRDzAdq%2BNity2McbGAE4DTy6c24o7Hhl2sUdIzlq9WkYIP8SjTrUe0WBshClqK6fpH9P8r%2BmTOboLC7j5zTUh8%2BOZHtxjnSR5ewI22NzbAA427s0MANSMpu%2FuGm7f7xTblp8rI3IYI2XvmyxUTGlRCTv8HjWYXBEzdX7PXcQPpUyPkZkAni1zMezTlpRw8IDd1O6DbQLS%2BurBbH7Hp%2FEsPkrDqqTConsh0Yzm2gREX3R5lgBw3nP1OruWAT81VNb49lEZeHwJhUsg8fLt1kq7T4xrhdArmMdaGPDSQR3hQXc53MEbdHo0F1PT%2Bmq3mJtScZclyMRTPXeVEGv9hRdpKFU9RFeac8yTfWCmClh4bJpVXAGdScEi7DmcwZ1dT5ZemhaWxGOQk4S7%2Fqk3%2FZR46S7AX4qnGsQricImzLYtO2EfZurhJkvAgv04yu26BFjhjYB8LK9FAb%2FRe5DQ%2FpFSdVTwWOJhP3n%2ByCguk4EqPljtT072eaYNBE27w2CzL%2BuFhEu23MMjj8r8GOqUBL%2BzRyDOKs8vvdtN%2BjMdcnmG4IEYYaG6z8WoTVFMD4bbH9dliEp6ay0M%2FDK980RxS00yXwXAL4m62%2FXOUHTi%2BLM8FIRDbN3vo%2FQDxhI9l908ga0ty9Dkx7PPjEY%2FBevveE5VePIIXfRNgGqVnc6uc7tlDzkE9qmQlAHaVE67n99uf9YkbdeXCJiEwiapJqU698VfGlBjWD%2F92gG7pqGaQqHWBgkxX&X-Amz-Signature=4a63378d5c51bba7ad8914883873a42d0e0e732e7678e51bbf4c1f7c9d9607e3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDBAODAV%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T091018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP%2B2OWOVQ9pZ%2F5QMweClx9Hr4PapHQwM9fwJ2sBGlbIwIgIThMGkIQsTZHU78fNrx3rbropvZgrNR5Mx82Jbh8tjcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIScK9wNeK8b3fgSXCrcAwBJ1%2FdbZqCUZTQsugfY3prBYVtTE1I5W%2F6CurqbGhvRrRFj5yHaiO%2BBJYV4i6yTGPy5HsEEbyf0cSIgiNg1hoCKqDM0iHiVWmNtb1WDxJOZHvGzZ9x%2F8qwRDzAdq%2BNity2McbGAE4DTy6c24o7Hhl2sUdIzlq9WkYIP8SjTrUe0WBshClqK6fpH9P8r%2BmTOboLC7j5zTUh8%2BOZHtxjnSR5ewI22NzbAA427s0MANSMpu%2FuGm7f7xTblp8rI3IYI2XvmyxUTGlRCTv8HjWYXBEzdX7PXcQPpUyPkZkAni1zMezTlpRw8IDd1O6DbQLS%2BurBbH7Hp%2FEsPkrDqqTConsh0Yzm2gREX3R5lgBw3nP1OruWAT81VNb49lEZeHwJhUsg8fLt1kq7T4xrhdArmMdaGPDSQR3hQXc53MEbdHo0F1PT%2Bmq3mJtScZclyMRTPXeVEGv9hRdpKFU9RFeac8yTfWCmClh4bJpVXAGdScEi7DmcwZ1dT5ZemhaWxGOQk4S7%2Fqk3%2FZR46S7AX4qnGsQricImzLYtO2EfZurhJkvAgv04yu26BFjhjYB8LK9FAb%2FRe5DQ%2FpFSdVTwWOJhP3n%2ByCguk4EqPljtT072eaYNBE27w2CzL%2BuFhEu23MMjj8r8GOqUBL%2BzRyDOKs8vvdtN%2BjMdcnmG4IEYYaG6z8WoTVFMD4bbH9dliEp6ay0M%2FDK980RxS00yXwXAL4m62%2FXOUHTi%2BLM8FIRDbN3vo%2FQDxhI9l908ga0ty9Dkx7PPjEY%2FBevveE5VePIIXfRNgGqVnc6uc7tlDzkE9qmQlAHaVE67n99uf9YkbdeXCJiEwiapJqU698VfGlBjWD%2F92gG7pqGaQqHWBgkxX&X-Amz-Signature=7b30416d45bbbdee787a4d02b7b9a3db4c85da8fba9566e33fb3db28f8dd0a5d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
