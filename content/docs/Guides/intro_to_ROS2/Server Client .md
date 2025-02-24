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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKHW5UN%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmkWyfmod%2FLwWxF883dQynELrd3PNTdom%2BnXa6Je5KwgIgU7b0mZka%2BKvZhBB3PvOgtGpR63WE2L2lBGTo1OX8OoAq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDH%2FjwmVUWevh8DgAySrcA0oEqgfoaXS0MDk1%2F3yVcDbKibDKJG4i%2BCX7Hif4TqGqoS6pLrpAoN%2FsPhpSGNfaUdjJV%2Fi17aslLwz6YvO0BISO%2FrPqbp1hQNaUYzwFCRpklXMlMJjgxfVOofvVtUDFHSLBP6Rzo4TZt1GZzqRfnRc2NZgodp3iZuN1AqMwSqgFN2cLVtYf%2FFOc9ouHe9YTheRiUs7hGZvu2pfYgMTD%2BoMab77OfnxvAJIvTfWvu8pCHYQNzuzcILOclCqfMUQXgSSijFuESBUFvlb57MxDb%2F6ukb2gm%2FLJP1HkxqAjh35yVA1ssLJXvoC8iLHVCo0o7m52Wfha5A6Wak5%2B%2BSGuQc8Frni5he%2BN%2B9n2al9OIHisrTK9%2F3dXSCWgEm4UvygByoq4GMHX7D2nlofBMYU5VWK%2Bv2w1bSMmdcNQZD%2BuTM4t5Lti14MpoHUS1cND4DVKTsnCtNK81KdMw2JhF58Ke%2FCVL%2BuXVx9%2BcwP8myyHUZBjKTMHXYWmlkBwYE%2BiSGCtkzmT9yMBatIYCH3Jg2Mwq7tJeZMa7QpcchCJSENgedp%2BUjLHhioHOoX8A5D8SQq4Fq7910Cf4S2QL0cTDVRgn97u8XUEpP%2FnH3tswGtrn44ZTkem8nQoTqlWNTpiMKXx7r0GOqUBwOkZsZl5BTtBiY0hF8PwTT%2B%2B%2Bg14d5nJFX52qgMx9Xd3IKSBVOm5w%2BmJimUsfZ21J1ZE9cyevYqpeSfTH02GM0LU9QkLl8T1IvLC3hFzQ1CbKVMubrGTdvGZ7A2HiRPnm%2B40SKIobYLwrQsgVB6d4%2B%2FyUbDAZ7El2uhoJy93bgQxiVhCTYNlT7hEQyyaarvbqLifz1knC5NUz2Q7fWg9SU7Eb5Gp&X-Amz-Signature=a6f33959d61d775e1e8733015a34132a8f231c797d1b6e1894016720cb6d0f55&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKHW5UN%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmkWyfmod%2FLwWxF883dQynELrd3PNTdom%2BnXa6Je5KwgIgU7b0mZka%2BKvZhBB3PvOgtGpR63WE2L2lBGTo1OX8OoAq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDH%2FjwmVUWevh8DgAySrcA0oEqgfoaXS0MDk1%2F3yVcDbKibDKJG4i%2BCX7Hif4TqGqoS6pLrpAoN%2FsPhpSGNfaUdjJV%2Fi17aslLwz6YvO0BISO%2FrPqbp1hQNaUYzwFCRpklXMlMJjgxfVOofvVtUDFHSLBP6Rzo4TZt1GZzqRfnRc2NZgodp3iZuN1AqMwSqgFN2cLVtYf%2FFOc9ouHe9YTheRiUs7hGZvu2pfYgMTD%2BoMab77OfnxvAJIvTfWvu8pCHYQNzuzcILOclCqfMUQXgSSijFuESBUFvlb57MxDb%2F6ukb2gm%2FLJP1HkxqAjh35yVA1ssLJXvoC8iLHVCo0o7m52Wfha5A6Wak5%2B%2BSGuQc8Frni5he%2BN%2B9n2al9OIHisrTK9%2F3dXSCWgEm4UvygByoq4GMHX7D2nlofBMYU5VWK%2Bv2w1bSMmdcNQZD%2BuTM4t5Lti14MpoHUS1cND4DVKTsnCtNK81KdMw2JhF58Ke%2FCVL%2BuXVx9%2BcwP8myyHUZBjKTMHXYWmlkBwYE%2BiSGCtkzmT9yMBatIYCH3Jg2Mwq7tJeZMa7QpcchCJSENgedp%2BUjLHhioHOoX8A5D8SQq4Fq7910Cf4S2QL0cTDVRgn97u8XUEpP%2FnH3tswGtrn44ZTkem8nQoTqlWNTpiMKXx7r0GOqUBwOkZsZl5BTtBiY0hF8PwTT%2B%2B%2Bg14d5nJFX52qgMx9Xd3IKSBVOm5w%2BmJimUsfZ21J1ZE9cyevYqpeSfTH02GM0LU9QkLl8T1IvLC3hFzQ1CbKVMubrGTdvGZ7A2HiRPnm%2B40SKIobYLwrQsgVB6d4%2B%2FyUbDAZ7El2uhoJy93bgQxiVhCTYNlT7hEQyyaarvbqLifz1knC5NUz2Q7fWg9SU7Eb5Gp&X-Amz-Signature=9d5ed807ff0a2e11fec67bb6e01201ea9bbff1349a7082b4cfdeede532453238&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKHW5UN%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmkWyfmod%2FLwWxF883dQynELrd3PNTdom%2BnXa6Je5KwgIgU7b0mZka%2BKvZhBB3PvOgtGpR63WE2L2lBGTo1OX8OoAq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDH%2FjwmVUWevh8DgAySrcA0oEqgfoaXS0MDk1%2F3yVcDbKibDKJG4i%2BCX7Hif4TqGqoS6pLrpAoN%2FsPhpSGNfaUdjJV%2Fi17aslLwz6YvO0BISO%2FrPqbp1hQNaUYzwFCRpklXMlMJjgxfVOofvVtUDFHSLBP6Rzo4TZt1GZzqRfnRc2NZgodp3iZuN1AqMwSqgFN2cLVtYf%2FFOc9ouHe9YTheRiUs7hGZvu2pfYgMTD%2BoMab77OfnxvAJIvTfWvu8pCHYQNzuzcILOclCqfMUQXgSSijFuESBUFvlb57MxDb%2F6ukb2gm%2FLJP1HkxqAjh35yVA1ssLJXvoC8iLHVCo0o7m52Wfha5A6Wak5%2B%2BSGuQc8Frni5he%2BN%2B9n2al9OIHisrTK9%2F3dXSCWgEm4UvygByoq4GMHX7D2nlofBMYU5VWK%2Bv2w1bSMmdcNQZD%2BuTM4t5Lti14MpoHUS1cND4DVKTsnCtNK81KdMw2JhF58Ke%2FCVL%2BuXVx9%2BcwP8myyHUZBjKTMHXYWmlkBwYE%2BiSGCtkzmT9yMBatIYCH3Jg2Mwq7tJeZMa7QpcchCJSENgedp%2BUjLHhioHOoX8A5D8SQq4Fq7910Cf4S2QL0cTDVRgn97u8XUEpP%2FnH3tswGtrn44ZTkem8nQoTqlWNTpiMKXx7r0GOqUBwOkZsZl5BTtBiY0hF8PwTT%2B%2B%2Bg14d5nJFX52qgMx9Xd3IKSBVOm5w%2BmJimUsfZ21J1ZE9cyevYqpeSfTH02GM0LU9QkLl8T1IvLC3hFzQ1CbKVMubrGTdvGZ7A2HiRPnm%2B40SKIobYLwrQsgVB6d4%2B%2FyUbDAZ7El2uhoJy93bgQxiVhCTYNlT7hEQyyaarvbqLifz1knC5NUz2Q7fWg9SU7Eb5Gp&X-Amz-Signature=ba61db67bc67bf9483de977eea9a009115e01ed50d8662c56f744fd4825f23e6&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKHW5UN%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmkWyfmod%2FLwWxF883dQynELrd3PNTdom%2BnXa6Je5KwgIgU7b0mZka%2BKvZhBB3PvOgtGpR63WE2L2lBGTo1OX8OoAq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDH%2FjwmVUWevh8DgAySrcA0oEqgfoaXS0MDk1%2F3yVcDbKibDKJG4i%2BCX7Hif4TqGqoS6pLrpAoN%2FsPhpSGNfaUdjJV%2Fi17aslLwz6YvO0BISO%2FrPqbp1hQNaUYzwFCRpklXMlMJjgxfVOofvVtUDFHSLBP6Rzo4TZt1GZzqRfnRc2NZgodp3iZuN1AqMwSqgFN2cLVtYf%2FFOc9ouHe9YTheRiUs7hGZvu2pfYgMTD%2BoMab77OfnxvAJIvTfWvu8pCHYQNzuzcILOclCqfMUQXgSSijFuESBUFvlb57MxDb%2F6ukb2gm%2FLJP1HkxqAjh35yVA1ssLJXvoC8iLHVCo0o7m52Wfha5A6Wak5%2B%2BSGuQc8Frni5he%2BN%2B9n2al9OIHisrTK9%2F3dXSCWgEm4UvygByoq4GMHX7D2nlofBMYU5VWK%2Bv2w1bSMmdcNQZD%2BuTM4t5Lti14MpoHUS1cND4DVKTsnCtNK81KdMw2JhF58Ke%2FCVL%2BuXVx9%2BcwP8myyHUZBjKTMHXYWmlkBwYE%2BiSGCtkzmT9yMBatIYCH3Jg2Mwq7tJeZMa7QpcchCJSENgedp%2BUjLHhioHOoX8A5D8SQq4Fq7910Cf4S2QL0cTDVRgn97u8XUEpP%2FnH3tswGtrn44ZTkem8nQoTqlWNTpiMKXx7r0GOqUBwOkZsZl5BTtBiY0hF8PwTT%2B%2B%2Bg14d5nJFX52qgMx9Xd3IKSBVOm5w%2BmJimUsfZ21J1ZE9cyevYqpeSfTH02GM0LU9QkLl8T1IvLC3hFzQ1CbKVMubrGTdvGZ7A2HiRPnm%2B40SKIobYLwrQsgVB6d4%2B%2FyUbDAZ7El2uhoJy93bgQxiVhCTYNlT7hEQyyaarvbqLifz1knC5NUz2Q7fWg9SU7Eb5Gp&X-Amz-Signature=49b27b936f2de811417c65919f65bffe1b3cdfba439dfef97a00611d7709d683&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKHW5UN%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmkWyfmod%2FLwWxF883dQynELrd3PNTdom%2BnXa6Je5KwgIgU7b0mZka%2BKvZhBB3PvOgtGpR63WE2L2lBGTo1OX8OoAq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDH%2FjwmVUWevh8DgAySrcA0oEqgfoaXS0MDk1%2F3yVcDbKibDKJG4i%2BCX7Hif4TqGqoS6pLrpAoN%2FsPhpSGNfaUdjJV%2Fi17aslLwz6YvO0BISO%2FrPqbp1hQNaUYzwFCRpklXMlMJjgxfVOofvVtUDFHSLBP6Rzo4TZt1GZzqRfnRc2NZgodp3iZuN1AqMwSqgFN2cLVtYf%2FFOc9ouHe9YTheRiUs7hGZvu2pfYgMTD%2BoMab77OfnxvAJIvTfWvu8pCHYQNzuzcILOclCqfMUQXgSSijFuESBUFvlb57MxDb%2F6ukb2gm%2FLJP1HkxqAjh35yVA1ssLJXvoC8iLHVCo0o7m52Wfha5A6Wak5%2B%2BSGuQc8Frni5he%2BN%2B9n2al9OIHisrTK9%2F3dXSCWgEm4UvygByoq4GMHX7D2nlofBMYU5VWK%2Bv2w1bSMmdcNQZD%2BuTM4t5Lti14MpoHUS1cND4DVKTsnCtNK81KdMw2JhF58Ke%2FCVL%2BuXVx9%2BcwP8myyHUZBjKTMHXYWmlkBwYE%2BiSGCtkzmT9yMBatIYCH3Jg2Mwq7tJeZMa7QpcchCJSENgedp%2BUjLHhioHOoX8A5D8SQq4Fq7910Cf4S2QL0cTDVRgn97u8XUEpP%2FnH3tswGtrn44ZTkem8nQoTqlWNTpiMKXx7r0GOqUBwOkZsZl5BTtBiY0hF8PwTT%2B%2B%2Bg14d5nJFX52qgMx9Xd3IKSBVOm5w%2BmJimUsfZ21J1ZE9cyevYqpeSfTH02GM0LU9QkLl8T1IvLC3hFzQ1CbKVMubrGTdvGZ7A2HiRPnm%2B40SKIobYLwrQsgVB6d4%2B%2FyUbDAZ7El2uhoJy93bgQxiVhCTYNlT7hEQyyaarvbqLifz1knC5NUz2Q7fWg9SU7Eb5Gp&X-Amz-Signature=0ac06edbae2c7f808bfb847c2459c10b9975f4a3b0bd69d3eab07b200916a578&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
