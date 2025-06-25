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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HYX4AUN%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDz5g0fynmeDZyDmAJQoKv4%2B2aVEz8%2FEweRcLVd7mxHRAIgGTDU2ooZaq0VYsBOWEYAOQ7ZN%2B%2Bg%2BywkSoZgeL1VAOMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHUIlqPOK9QkhyEp8SrcA3uypscuE9SF5g%2F15wq3jkC4BvAr07k8f%2B3FyqgUaTIK%2FITXyiA%2FZOfp8pDI5fhAdDw4m85Kj0R2pY31kqYL1c8wSXaR4f7MGoVJfEeSFgvT4H%2BRyEEHcTbeplxaw3gJTeLqrHqwMV4d7iB78Gezg2CP4LZWfweNe6i6%2BEpeSguVHaXJdoygCdvuMu8xVGiYcqpTLMuH3HEA6vTZHHtcUVABawxT1ApLcARVWg8iOjsvuvPXbOTIy3KdJGsVAEVS5JAKGkhHQhYVI8nCobvM7Ild2yPjrQA428Q%2Bfdcq0MHkANsc6BTBTL%2FbG7DDofSVnclCme12i7dbrR46u69HGpODYwc2P5FgV%2FKu2A%2BJKe7NHJDy9qgPMGox3zHMO3s6sTBswvkr7jK47SPCZ5D%2BiJuFYpVQHRTjKNJ31hIo%2F7r%2B%2B%2FlGm%2B4jh1Lbk7IIuNihdzhE2kv12pF1hRorJqpH%2FaOclmQh7BjcILYnCTjbMXMHeLUF2OkTLKZ5y34PhWWKtzdZFHYLpEeP3hrss8BtSlHe1vOx13nh0Tv7%2Fp1Zb1zT0CmLB92VSxucJbT3xNk9IVNgUxXKirk%2Fy3dRDAsxUrHi%2FdSGtKzZF7eq1pkhSYDjVWgVZROFxlUTEbcjMK2N8cIGOqUBt4pDXDxiac0y6XlQfkUIdvSyJbvGWb4ZEGqMOOO5Bi2wsWuoEqKjjOWff3pElBBWOIvIjPsQ4OK%2BJvcrx7WBLaBFRcC1IVpNdrxJbtOL7rm1OyLd5BaIZZLP4KUjVaPfsLI%2BscdrszKmpELyyMI7cNewMMQuY7JdGhCq23wz7vCpW0ICIA4IcG3HPa%2FnEP7aWEOlbqFs0tC55iRPnPHl4KWC11cV&X-Amz-Signature=73505a8d4df230ec210676c4bd2ea6147db09e82e85b877367e088b754a4df3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HYX4AUN%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDz5g0fynmeDZyDmAJQoKv4%2B2aVEz8%2FEweRcLVd7mxHRAIgGTDU2ooZaq0VYsBOWEYAOQ7ZN%2B%2Bg%2BywkSoZgeL1VAOMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHUIlqPOK9QkhyEp8SrcA3uypscuE9SF5g%2F15wq3jkC4BvAr07k8f%2B3FyqgUaTIK%2FITXyiA%2FZOfp8pDI5fhAdDw4m85Kj0R2pY31kqYL1c8wSXaR4f7MGoVJfEeSFgvT4H%2BRyEEHcTbeplxaw3gJTeLqrHqwMV4d7iB78Gezg2CP4LZWfweNe6i6%2BEpeSguVHaXJdoygCdvuMu8xVGiYcqpTLMuH3HEA6vTZHHtcUVABawxT1ApLcARVWg8iOjsvuvPXbOTIy3KdJGsVAEVS5JAKGkhHQhYVI8nCobvM7Ild2yPjrQA428Q%2Bfdcq0MHkANsc6BTBTL%2FbG7DDofSVnclCme12i7dbrR46u69HGpODYwc2P5FgV%2FKu2A%2BJKe7NHJDy9qgPMGox3zHMO3s6sTBswvkr7jK47SPCZ5D%2BiJuFYpVQHRTjKNJ31hIo%2F7r%2B%2B%2FlGm%2B4jh1Lbk7IIuNihdzhE2kv12pF1hRorJqpH%2FaOclmQh7BjcILYnCTjbMXMHeLUF2OkTLKZ5y34PhWWKtzdZFHYLpEeP3hrss8BtSlHe1vOx13nh0Tv7%2Fp1Zb1zT0CmLB92VSxucJbT3xNk9IVNgUxXKirk%2Fy3dRDAsxUrHi%2FdSGtKzZF7eq1pkhSYDjVWgVZROFxlUTEbcjMK2N8cIGOqUBt4pDXDxiac0y6XlQfkUIdvSyJbvGWb4ZEGqMOOO5Bi2wsWuoEqKjjOWff3pElBBWOIvIjPsQ4OK%2BJvcrx7WBLaBFRcC1IVpNdrxJbtOL7rm1OyLd5BaIZZLP4KUjVaPfsLI%2BscdrszKmpELyyMI7cNewMMQuY7JdGhCq23wz7vCpW0ICIA4IcG3HPa%2FnEP7aWEOlbqFs0tC55iRPnPHl4KWC11cV&X-Amz-Signature=59b714bb6c9aaf8ae8b276de58c45a07d9d8673abffe5f4b30415e86aeec6268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HYX4AUN%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDz5g0fynmeDZyDmAJQoKv4%2B2aVEz8%2FEweRcLVd7mxHRAIgGTDU2ooZaq0VYsBOWEYAOQ7ZN%2B%2Bg%2BywkSoZgeL1VAOMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHUIlqPOK9QkhyEp8SrcA3uypscuE9SF5g%2F15wq3jkC4BvAr07k8f%2B3FyqgUaTIK%2FITXyiA%2FZOfp8pDI5fhAdDw4m85Kj0R2pY31kqYL1c8wSXaR4f7MGoVJfEeSFgvT4H%2BRyEEHcTbeplxaw3gJTeLqrHqwMV4d7iB78Gezg2CP4LZWfweNe6i6%2BEpeSguVHaXJdoygCdvuMu8xVGiYcqpTLMuH3HEA6vTZHHtcUVABawxT1ApLcARVWg8iOjsvuvPXbOTIy3KdJGsVAEVS5JAKGkhHQhYVI8nCobvM7Ild2yPjrQA428Q%2Bfdcq0MHkANsc6BTBTL%2FbG7DDofSVnclCme12i7dbrR46u69HGpODYwc2P5FgV%2FKu2A%2BJKe7NHJDy9qgPMGox3zHMO3s6sTBswvkr7jK47SPCZ5D%2BiJuFYpVQHRTjKNJ31hIo%2F7r%2B%2B%2FlGm%2B4jh1Lbk7IIuNihdzhE2kv12pF1hRorJqpH%2FaOclmQh7BjcILYnCTjbMXMHeLUF2OkTLKZ5y34PhWWKtzdZFHYLpEeP3hrss8BtSlHe1vOx13nh0Tv7%2Fp1Zb1zT0CmLB92VSxucJbT3xNk9IVNgUxXKirk%2Fy3dRDAsxUrHi%2FdSGtKzZF7eq1pkhSYDjVWgVZROFxlUTEbcjMK2N8cIGOqUBt4pDXDxiac0y6XlQfkUIdvSyJbvGWb4ZEGqMOOO5Bi2wsWuoEqKjjOWff3pElBBWOIvIjPsQ4OK%2BJvcrx7WBLaBFRcC1IVpNdrxJbtOL7rm1OyLd5BaIZZLP4KUjVaPfsLI%2BscdrszKmpELyyMI7cNewMMQuY7JdGhCq23wz7vCpW0ICIA4IcG3HPa%2FnEP7aWEOlbqFs0tC55iRPnPHl4KWC11cV&X-Amz-Signature=1706842b6187545e68f3943773aaaa56f00ed3b557aad35d1f74d97b001bd02b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HYX4AUN%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDz5g0fynmeDZyDmAJQoKv4%2B2aVEz8%2FEweRcLVd7mxHRAIgGTDU2ooZaq0VYsBOWEYAOQ7ZN%2B%2Bg%2BywkSoZgeL1VAOMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHUIlqPOK9QkhyEp8SrcA3uypscuE9SF5g%2F15wq3jkC4BvAr07k8f%2B3FyqgUaTIK%2FITXyiA%2FZOfp8pDI5fhAdDw4m85Kj0R2pY31kqYL1c8wSXaR4f7MGoVJfEeSFgvT4H%2BRyEEHcTbeplxaw3gJTeLqrHqwMV4d7iB78Gezg2CP4LZWfweNe6i6%2BEpeSguVHaXJdoygCdvuMu8xVGiYcqpTLMuH3HEA6vTZHHtcUVABawxT1ApLcARVWg8iOjsvuvPXbOTIy3KdJGsVAEVS5JAKGkhHQhYVI8nCobvM7Ild2yPjrQA428Q%2Bfdcq0MHkANsc6BTBTL%2FbG7DDofSVnclCme12i7dbrR46u69HGpODYwc2P5FgV%2FKu2A%2BJKe7NHJDy9qgPMGox3zHMO3s6sTBswvkr7jK47SPCZ5D%2BiJuFYpVQHRTjKNJ31hIo%2F7r%2B%2B%2FlGm%2B4jh1Lbk7IIuNihdzhE2kv12pF1hRorJqpH%2FaOclmQh7BjcILYnCTjbMXMHeLUF2OkTLKZ5y34PhWWKtzdZFHYLpEeP3hrss8BtSlHe1vOx13nh0Tv7%2Fp1Zb1zT0CmLB92VSxucJbT3xNk9IVNgUxXKirk%2Fy3dRDAsxUrHi%2FdSGtKzZF7eq1pkhSYDjVWgVZROFxlUTEbcjMK2N8cIGOqUBt4pDXDxiac0y6XlQfkUIdvSyJbvGWb4ZEGqMOOO5Bi2wsWuoEqKjjOWff3pElBBWOIvIjPsQ4OK%2BJvcrx7WBLaBFRcC1IVpNdrxJbtOL7rm1OyLd5BaIZZLP4KUjVaPfsLI%2BscdrszKmpELyyMI7cNewMMQuY7JdGhCq23wz7vCpW0ICIA4IcG3HPa%2FnEP7aWEOlbqFs0tC55iRPnPHl4KWC11cV&X-Amz-Signature=c604cc73071a4e817c1858e8fe3e68ce2a5e3120cffaa50872baa03278840bb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HYX4AUN%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDz5g0fynmeDZyDmAJQoKv4%2B2aVEz8%2FEweRcLVd7mxHRAIgGTDU2ooZaq0VYsBOWEYAOQ7ZN%2B%2Bg%2BywkSoZgeL1VAOMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHUIlqPOK9QkhyEp8SrcA3uypscuE9SF5g%2F15wq3jkC4BvAr07k8f%2B3FyqgUaTIK%2FITXyiA%2FZOfp8pDI5fhAdDw4m85Kj0R2pY31kqYL1c8wSXaR4f7MGoVJfEeSFgvT4H%2BRyEEHcTbeplxaw3gJTeLqrHqwMV4d7iB78Gezg2CP4LZWfweNe6i6%2BEpeSguVHaXJdoygCdvuMu8xVGiYcqpTLMuH3HEA6vTZHHtcUVABawxT1ApLcARVWg8iOjsvuvPXbOTIy3KdJGsVAEVS5JAKGkhHQhYVI8nCobvM7Ild2yPjrQA428Q%2Bfdcq0MHkANsc6BTBTL%2FbG7DDofSVnclCme12i7dbrR46u69HGpODYwc2P5FgV%2FKu2A%2BJKe7NHJDy9qgPMGox3zHMO3s6sTBswvkr7jK47SPCZ5D%2BiJuFYpVQHRTjKNJ31hIo%2F7r%2B%2B%2FlGm%2B4jh1Lbk7IIuNihdzhE2kv12pF1hRorJqpH%2FaOclmQh7BjcILYnCTjbMXMHeLUF2OkTLKZ5y34PhWWKtzdZFHYLpEeP3hrss8BtSlHe1vOx13nh0Tv7%2Fp1Zb1zT0CmLB92VSxucJbT3xNk9IVNgUxXKirk%2Fy3dRDAsxUrHi%2FdSGtKzZF7eq1pkhSYDjVWgVZROFxlUTEbcjMK2N8cIGOqUBt4pDXDxiac0y6XlQfkUIdvSyJbvGWb4ZEGqMOOO5Bi2wsWuoEqKjjOWff3pElBBWOIvIjPsQ4OK%2BJvcrx7WBLaBFRcC1IVpNdrxJbtOL7rm1OyLd5BaIZZLP4KUjVaPfsLI%2BscdrszKmpELyyMI7cNewMMQuY7JdGhCq23wz7vCpW0ICIA4IcG3HPa%2FnEP7aWEOlbqFs0tC55iRPnPHl4KWC11cV&X-Amz-Signature=84fe0b5bbf27f80711eb859edbc9ba0fbd93ea54783ac37aee545501252fc4ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
