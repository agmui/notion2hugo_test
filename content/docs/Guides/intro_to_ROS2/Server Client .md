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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUXGXWHS%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDLCNMVMCqT3lDbl5mRgbJRr0r5axtI7S7%2ByQUQ0cSDEgIhAOF4RfjlHBPCZYOwCXv897VbuDrGjmWQFQKB1gtE2vUpKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkeuGEVxVot7AvBmcq3AOW4g24iwiO1LXkptEdn%2BiTlnNN7kxAVKTjY%2Fdg%2Fb54fDFYDiX86ynHhFkZiDcLna%2FupsmL14oFzc3F%2By8Th5ixKL4jIx351ICmYyzBVZ3Dg%2FCEPiPFs9sYfxk%2F%2F4n7pfHpgAQ1GApNgf46dShDPF82GemfywjG72nDfgh9dJ119Ws9pcTiXIJ50vVKXmQqYe8gP0%2Fighfvz%2B5oBOqNBm1fs2WQjQNOPWyW02taOnvnrmt%2BHC0W0ysZk2odfhNjFdf0MxeEuD8tj7WUGQZdcXAjVHRFaBMhOU%2BmM1MpI84cTIMrxdo1%2BTxxJhDY2yXeJ6WIvaROuZ6QRSn76ZW3F9E2VNPOryHPIe2Bpagy0pnNThUH0rIYJzi4r4%2B7dFkTCu3uNOOCMFVfS8atSAy7w0STIDtLR%2BjAGp2bBr3inenWa2aN%2BoVnfvd51j8qVvPXbjTD8JOuzvYvtfBAUEaNcY3lCNyJ12TqWkfKnDJ68HgHm3VGcvMdY3WfaAc4SSSdwD6zswQLjGO9B4mtqxp3KbYg0QesYn7XE1n4VX%2BO6tH9%2FLDKSTbI3DP18xCeUzdjQITLeaEd2EOsR7B32St18cGbW5FlcvuDCrT011YRtNk%2FHshJmxvxttjTublwdzDshOa8BjqkAd7tAduNRGRRBghuwcLfSv%2BSE3IBSGG3BmODdOdq6QqsY1w2AXDor%2BPsqc74zuBwFA8XfbTut5IfRd8ckkmRNsgYyExpJNX8uKDA1ayP79kJxVtqjTQMrEmWIJoGEx5CNc1dWsuXQhB5nZ73qXnyLNZjKhTnCiXu5bbuqYmYr%2Fdz34GfsuMXX8cFtfaQGVMKCvNFO19BEJly%2BkGlQmcGtnmbuDpe&X-Amz-Signature=078f0685dcf95ca48dfcfdd867eb3b73a6c9117884a9c784be60bc534eb31017&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUXGXWHS%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDLCNMVMCqT3lDbl5mRgbJRr0r5axtI7S7%2ByQUQ0cSDEgIhAOF4RfjlHBPCZYOwCXv897VbuDrGjmWQFQKB1gtE2vUpKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkeuGEVxVot7AvBmcq3AOW4g24iwiO1LXkptEdn%2BiTlnNN7kxAVKTjY%2Fdg%2Fb54fDFYDiX86ynHhFkZiDcLna%2FupsmL14oFzc3F%2By8Th5ixKL4jIx351ICmYyzBVZ3Dg%2FCEPiPFs9sYfxk%2F%2F4n7pfHpgAQ1GApNgf46dShDPF82GemfywjG72nDfgh9dJ119Ws9pcTiXIJ50vVKXmQqYe8gP0%2Fighfvz%2B5oBOqNBm1fs2WQjQNOPWyW02taOnvnrmt%2BHC0W0ysZk2odfhNjFdf0MxeEuD8tj7WUGQZdcXAjVHRFaBMhOU%2BmM1MpI84cTIMrxdo1%2BTxxJhDY2yXeJ6WIvaROuZ6QRSn76ZW3F9E2VNPOryHPIe2Bpagy0pnNThUH0rIYJzi4r4%2B7dFkTCu3uNOOCMFVfS8atSAy7w0STIDtLR%2BjAGp2bBr3inenWa2aN%2BoVnfvd51j8qVvPXbjTD8JOuzvYvtfBAUEaNcY3lCNyJ12TqWkfKnDJ68HgHm3VGcvMdY3WfaAc4SSSdwD6zswQLjGO9B4mtqxp3KbYg0QesYn7XE1n4VX%2BO6tH9%2FLDKSTbI3DP18xCeUzdjQITLeaEd2EOsR7B32St18cGbW5FlcvuDCrT011YRtNk%2FHshJmxvxttjTublwdzDshOa8BjqkAd7tAduNRGRRBghuwcLfSv%2BSE3IBSGG3BmODdOdq6QqsY1w2AXDor%2BPsqc74zuBwFA8XfbTut5IfRd8ckkmRNsgYyExpJNX8uKDA1ayP79kJxVtqjTQMrEmWIJoGEx5CNc1dWsuXQhB5nZ73qXnyLNZjKhTnCiXu5bbuqYmYr%2Fdz34GfsuMXX8cFtfaQGVMKCvNFO19BEJly%2BkGlQmcGtnmbuDpe&X-Amz-Signature=35d5e8afb3dfae6c881b0d648e1fea0159e0206bdc5a39679cab0fd26d606426&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUXGXWHS%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDLCNMVMCqT3lDbl5mRgbJRr0r5axtI7S7%2ByQUQ0cSDEgIhAOF4RfjlHBPCZYOwCXv897VbuDrGjmWQFQKB1gtE2vUpKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkeuGEVxVot7AvBmcq3AOW4g24iwiO1LXkptEdn%2BiTlnNN7kxAVKTjY%2Fdg%2Fb54fDFYDiX86ynHhFkZiDcLna%2FupsmL14oFzc3F%2By8Th5ixKL4jIx351ICmYyzBVZ3Dg%2FCEPiPFs9sYfxk%2F%2F4n7pfHpgAQ1GApNgf46dShDPF82GemfywjG72nDfgh9dJ119Ws9pcTiXIJ50vVKXmQqYe8gP0%2Fighfvz%2B5oBOqNBm1fs2WQjQNOPWyW02taOnvnrmt%2BHC0W0ysZk2odfhNjFdf0MxeEuD8tj7WUGQZdcXAjVHRFaBMhOU%2BmM1MpI84cTIMrxdo1%2BTxxJhDY2yXeJ6WIvaROuZ6QRSn76ZW3F9E2VNPOryHPIe2Bpagy0pnNThUH0rIYJzi4r4%2B7dFkTCu3uNOOCMFVfS8atSAy7w0STIDtLR%2BjAGp2bBr3inenWa2aN%2BoVnfvd51j8qVvPXbjTD8JOuzvYvtfBAUEaNcY3lCNyJ12TqWkfKnDJ68HgHm3VGcvMdY3WfaAc4SSSdwD6zswQLjGO9B4mtqxp3KbYg0QesYn7XE1n4VX%2BO6tH9%2FLDKSTbI3DP18xCeUzdjQITLeaEd2EOsR7B32St18cGbW5FlcvuDCrT011YRtNk%2FHshJmxvxttjTublwdzDshOa8BjqkAd7tAduNRGRRBghuwcLfSv%2BSE3IBSGG3BmODdOdq6QqsY1w2AXDor%2BPsqc74zuBwFA8XfbTut5IfRd8ckkmRNsgYyExpJNX8uKDA1ayP79kJxVtqjTQMrEmWIJoGEx5CNc1dWsuXQhB5nZ73qXnyLNZjKhTnCiXu5bbuqYmYr%2Fdz34GfsuMXX8cFtfaQGVMKCvNFO19BEJly%2BkGlQmcGtnmbuDpe&X-Amz-Signature=a9da767eb7c6a3c8c9ba414cc8a11456e21036e8f8af0db052e2b6c3fa598ae8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUXGXWHS%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDLCNMVMCqT3lDbl5mRgbJRr0r5axtI7S7%2ByQUQ0cSDEgIhAOF4RfjlHBPCZYOwCXv897VbuDrGjmWQFQKB1gtE2vUpKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkeuGEVxVot7AvBmcq3AOW4g24iwiO1LXkptEdn%2BiTlnNN7kxAVKTjY%2Fdg%2Fb54fDFYDiX86ynHhFkZiDcLna%2FupsmL14oFzc3F%2By8Th5ixKL4jIx351ICmYyzBVZ3Dg%2FCEPiPFs9sYfxk%2F%2F4n7pfHpgAQ1GApNgf46dShDPF82GemfywjG72nDfgh9dJ119Ws9pcTiXIJ50vVKXmQqYe8gP0%2Fighfvz%2B5oBOqNBm1fs2WQjQNOPWyW02taOnvnrmt%2BHC0W0ysZk2odfhNjFdf0MxeEuD8tj7WUGQZdcXAjVHRFaBMhOU%2BmM1MpI84cTIMrxdo1%2BTxxJhDY2yXeJ6WIvaROuZ6QRSn76ZW3F9E2VNPOryHPIe2Bpagy0pnNThUH0rIYJzi4r4%2B7dFkTCu3uNOOCMFVfS8atSAy7w0STIDtLR%2BjAGp2bBr3inenWa2aN%2BoVnfvd51j8qVvPXbjTD8JOuzvYvtfBAUEaNcY3lCNyJ12TqWkfKnDJ68HgHm3VGcvMdY3WfaAc4SSSdwD6zswQLjGO9B4mtqxp3KbYg0QesYn7XE1n4VX%2BO6tH9%2FLDKSTbI3DP18xCeUzdjQITLeaEd2EOsR7B32St18cGbW5FlcvuDCrT011YRtNk%2FHshJmxvxttjTublwdzDshOa8BjqkAd7tAduNRGRRBghuwcLfSv%2BSE3IBSGG3BmODdOdq6QqsY1w2AXDor%2BPsqc74zuBwFA8XfbTut5IfRd8ckkmRNsgYyExpJNX8uKDA1ayP79kJxVtqjTQMrEmWIJoGEx5CNc1dWsuXQhB5nZ73qXnyLNZjKhTnCiXu5bbuqYmYr%2Fdz34GfsuMXX8cFtfaQGVMKCvNFO19BEJly%2BkGlQmcGtnmbuDpe&X-Amz-Signature=d172a10807b3ab8260e0b567549e97e45e0b9520874f4f73c4d286d6bb31f0f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUXGXWHS%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDLCNMVMCqT3lDbl5mRgbJRr0r5axtI7S7%2ByQUQ0cSDEgIhAOF4RfjlHBPCZYOwCXv897VbuDrGjmWQFQKB1gtE2vUpKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkeuGEVxVot7AvBmcq3AOW4g24iwiO1LXkptEdn%2BiTlnNN7kxAVKTjY%2Fdg%2Fb54fDFYDiX86ynHhFkZiDcLna%2FupsmL14oFzc3F%2By8Th5ixKL4jIx351ICmYyzBVZ3Dg%2FCEPiPFs9sYfxk%2F%2F4n7pfHpgAQ1GApNgf46dShDPF82GemfywjG72nDfgh9dJ119Ws9pcTiXIJ50vVKXmQqYe8gP0%2Fighfvz%2B5oBOqNBm1fs2WQjQNOPWyW02taOnvnrmt%2BHC0W0ysZk2odfhNjFdf0MxeEuD8tj7WUGQZdcXAjVHRFaBMhOU%2BmM1MpI84cTIMrxdo1%2BTxxJhDY2yXeJ6WIvaROuZ6QRSn76ZW3F9E2VNPOryHPIe2Bpagy0pnNThUH0rIYJzi4r4%2B7dFkTCu3uNOOCMFVfS8atSAy7w0STIDtLR%2BjAGp2bBr3inenWa2aN%2BoVnfvd51j8qVvPXbjTD8JOuzvYvtfBAUEaNcY3lCNyJ12TqWkfKnDJ68HgHm3VGcvMdY3WfaAc4SSSdwD6zswQLjGO9B4mtqxp3KbYg0QesYn7XE1n4VX%2BO6tH9%2FLDKSTbI3DP18xCeUzdjQITLeaEd2EOsR7B32St18cGbW5FlcvuDCrT011YRtNk%2FHshJmxvxttjTublwdzDshOa8BjqkAd7tAduNRGRRBghuwcLfSv%2BSE3IBSGG3BmODdOdq6QqsY1w2AXDor%2BPsqc74zuBwFA8XfbTut5IfRd8ckkmRNsgYyExpJNX8uKDA1ayP79kJxVtqjTQMrEmWIJoGEx5CNc1dWsuXQhB5nZ73qXnyLNZjKhTnCiXu5bbuqYmYr%2Fdz34GfsuMXX8cFtfaQGVMKCvNFO19BEJly%2BkGlQmcGtnmbuDpe&X-Amz-Signature=49e94debb45a8a5ab17e50389cd986e58a68561fa21c394ec658130da611ac5b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
