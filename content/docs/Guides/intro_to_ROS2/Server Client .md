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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOJU6LGT%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUCaL5pM8xo0aJ6XGbOHVxoFr7uHBk2D%2F844agOv9PYAiEAx9tfGjnCVxP0ILFP6cJlwxsX6mzOzEj4vo%2BqXaE%2Bgusq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDM%2B66tiLI44Jsl7gryrcA1p09Ivrc7I4imANqEA7OWFIlQBVSJVW6oAVvuuxBOUIP1AVuhBYdA0xlfd6ZVG5HF4rZohlZ0DAleoUtTK%2FRa%2BTSonq%2B8iXZrRiGjphDBeDVbAIyw4eeU9CWj%2F0X99U8oOcaEygiqWoRL5DrbrY4XR064stTfuMUSqd5bEkNfGcqcDB0qLUJgbCIayXz%2BzygPolY%2FtHWcz9RRBb4wDike0R1boAFSx16HZbdKqG7fmuADmro7yI%2FMrGO1eJEg0WXli7DKrhRzPI9Nfn7TjMqCUoS4cgRYN0%2BZV5ONYRubKx1C3hU8aXAdI2i40lP34u1i3tksn9ZSTAzsPI47YT2tJTrTfMMUNR12xiHJwYg8mqZJMpL%2BFuAmyTUY%2BYSmjkInUr4%2BcDqiW4CciChMSrxIWIDR03QTa1RlD2CPOUOvdR8%2BDH03j1Wi7vEbnN0RABVi4ojR1gfCifpLWcfNxS637lrTB44l9aLQc4ULvrgyvQTQW4X8k%2F%2FPYLR%2BKKdUhfK9rGoSFeSvPNCmn0tm5qIDJZem2%2FDPBYcj0Gw4Psed4eBJl6eBeqCRyGrZ%2Fk4a06mVF6u24uyeqDxnMWPmSewV61b%2FyQ8dFFWmNhdCr6l2wjG2K5sfSWmZesuwp8MI75nsEGOqUBkaBrwzdiRuTH5BYAlXPX3LRbIzxK5w7LLkya2%2BNysfmURCY1VNKiHVEWvff7oYadLWrgh%2FPWQ1KO4sKBp9xfay4VdKvV0MPGmfO2EMog3pKr8crek88T0hwEcWc0c%2FozkU0tUJzWozP3m31zxkIdWBeeERCGLBoSy1zQI%2BOs1xD98QEEweMmdDKKdK3go5nHvUbSZJ4wieYR11%2B6byCOQvHZoMsY&X-Amz-Signature=71863cc99fa113abf111b59112e261b7f0aa187e5d7f269149ea22eeefd99365&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOJU6LGT%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUCaL5pM8xo0aJ6XGbOHVxoFr7uHBk2D%2F844agOv9PYAiEAx9tfGjnCVxP0ILFP6cJlwxsX6mzOzEj4vo%2BqXaE%2Bgusq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDM%2B66tiLI44Jsl7gryrcA1p09Ivrc7I4imANqEA7OWFIlQBVSJVW6oAVvuuxBOUIP1AVuhBYdA0xlfd6ZVG5HF4rZohlZ0DAleoUtTK%2FRa%2BTSonq%2B8iXZrRiGjphDBeDVbAIyw4eeU9CWj%2F0X99U8oOcaEygiqWoRL5DrbrY4XR064stTfuMUSqd5bEkNfGcqcDB0qLUJgbCIayXz%2BzygPolY%2FtHWcz9RRBb4wDike0R1boAFSx16HZbdKqG7fmuADmro7yI%2FMrGO1eJEg0WXli7DKrhRzPI9Nfn7TjMqCUoS4cgRYN0%2BZV5ONYRubKx1C3hU8aXAdI2i40lP34u1i3tksn9ZSTAzsPI47YT2tJTrTfMMUNR12xiHJwYg8mqZJMpL%2BFuAmyTUY%2BYSmjkInUr4%2BcDqiW4CciChMSrxIWIDR03QTa1RlD2CPOUOvdR8%2BDH03j1Wi7vEbnN0RABVi4ojR1gfCifpLWcfNxS637lrTB44l9aLQc4ULvrgyvQTQW4X8k%2F%2FPYLR%2BKKdUhfK9rGoSFeSvPNCmn0tm5qIDJZem2%2FDPBYcj0Gw4Psed4eBJl6eBeqCRyGrZ%2Fk4a06mVF6u24uyeqDxnMWPmSewV61b%2FyQ8dFFWmNhdCr6l2wjG2K5sfSWmZesuwp8MI75nsEGOqUBkaBrwzdiRuTH5BYAlXPX3LRbIzxK5w7LLkya2%2BNysfmURCY1VNKiHVEWvff7oYadLWrgh%2FPWQ1KO4sKBp9xfay4VdKvV0MPGmfO2EMog3pKr8crek88T0hwEcWc0c%2FozkU0tUJzWozP3m31zxkIdWBeeERCGLBoSy1zQI%2BOs1xD98QEEweMmdDKKdK3go5nHvUbSZJ4wieYR11%2B6byCOQvHZoMsY&X-Amz-Signature=cde9c22970b5ef11d17bab09e93f058f782a49ed25fc32ece0879286fedc95d5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOJU6LGT%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUCaL5pM8xo0aJ6XGbOHVxoFr7uHBk2D%2F844agOv9PYAiEAx9tfGjnCVxP0ILFP6cJlwxsX6mzOzEj4vo%2BqXaE%2Bgusq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDM%2B66tiLI44Jsl7gryrcA1p09Ivrc7I4imANqEA7OWFIlQBVSJVW6oAVvuuxBOUIP1AVuhBYdA0xlfd6ZVG5HF4rZohlZ0DAleoUtTK%2FRa%2BTSonq%2B8iXZrRiGjphDBeDVbAIyw4eeU9CWj%2F0X99U8oOcaEygiqWoRL5DrbrY4XR064stTfuMUSqd5bEkNfGcqcDB0qLUJgbCIayXz%2BzygPolY%2FtHWcz9RRBb4wDike0R1boAFSx16HZbdKqG7fmuADmro7yI%2FMrGO1eJEg0WXli7DKrhRzPI9Nfn7TjMqCUoS4cgRYN0%2BZV5ONYRubKx1C3hU8aXAdI2i40lP34u1i3tksn9ZSTAzsPI47YT2tJTrTfMMUNR12xiHJwYg8mqZJMpL%2BFuAmyTUY%2BYSmjkInUr4%2BcDqiW4CciChMSrxIWIDR03QTa1RlD2CPOUOvdR8%2BDH03j1Wi7vEbnN0RABVi4ojR1gfCifpLWcfNxS637lrTB44l9aLQc4ULvrgyvQTQW4X8k%2F%2FPYLR%2BKKdUhfK9rGoSFeSvPNCmn0tm5qIDJZem2%2FDPBYcj0Gw4Psed4eBJl6eBeqCRyGrZ%2Fk4a06mVF6u24uyeqDxnMWPmSewV61b%2FyQ8dFFWmNhdCr6l2wjG2K5sfSWmZesuwp8MI75nsEGOqUBkaBrwzdiRuTH5BYAlXPX3LRbIzxK5w7LLkya2%2BNysfmURCY1VNKiHVEWvff7oYadLWrgh%2FPWQ1KO4sKBp9xfay4VdKvV0MPGmfO2EMog3pKr8crek88T0hwEcWc0c%2FozkU0tUJzWozP3m31zxkIdWBeeERCGLBoSy1zQI%2BOs1xD98QEEweMmdDKKdK3go5nHvUbSZJ4wieYR11%2B6byCOQvHZoMsY&X-Amz-Signature=c9891770d53ae97afe6781c79497962c8f7d1505e422f70afcf067e6775a665d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOJU6LGT%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUCaL5pM8xo0aJ6XGbOHVxoFr7uHBk2D%2F844agOv9PYAiEAx9tfGjnCVxP0ILFP6cJlwxsX6mzOzEj4vo%2BqXaE%2Bgusq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDM%2B66tiLI44Jsl7gryrcA1p09Ivrc7I4imANqEA7OWFIlQBVSJVW6oAVvuuxBOUIP1AVuhBYdA0xlfd6ZVG5HF4rZohlZ0DAleoUtTK%2FRa%2BTSonq%2B8iXZrRiGjphDBeDVbAIyw4eeU9CWj%2F0X99U8oOcaEygiqWoRL5DrbrY4XR064stTfuMUSqd5bEkNfGcqcDB0qLUJgbCIayXz%2BzygPolY%2FtHWcz9RRBb4wDike0R1boAFSx16HZbdKqG7fmuADmro7yI%2FMrGO1eJEg0WXli7DKrhRzPI9Nfn7TjMqCUoS4cgRYN0%2BZV5ONYRubKx1C3hU8aXAdI2i40lP34u1i3tksn9ZSTAzsPI47YT2tJTrTfMMUNR12xiHJwYg8mqZJMpL%2BFuAmyTUY%2BYSmjkInUr4%2BcDqiW4CciChMSrxIWIDR03QTa1RlD2CPOUOvdR8%2BDH03j1Wi7vEbnN0RABVi4ojR1gfCifpLWcfNxS637lrTB44l9aLQc4ULvrgyvQTQW4X8k%2F%2FPYLR%2BKKdUhfK9rGoSFeSvPNCmn0tm5qIDJZem2%2FDPBYcj0Gw4Psed4eBJl6eBeqCRyGrZ%2Fk4a06mVF6u24uyeqDxnMWPmSewV61b%2FyQ8dFFWmNhdCr6l2wjG2K5sfSWmZesuwp8MI75nsEGOqUBkaBrwzdiRuTH5BYAlXPX3LRbIzxK5w7LLkya2%2BNysfmURCY1VNKiHVEWvff7oYadLWrgh%2FPWQ1KO4sKBp9xfay4VdKvV0MPGmfO2EMog3pKr8crek88T0hwEcWc0c%2FozkU0tUJzWozP3m31zxkIdWBeeERCGLBoSy1zQI%2BOs1xD98QEEweMmdDKKdK3go5nHvUbSZJ4wieYR11%2B6byCOQvHZoMsY&X-Amz-Signature=52d9894302b94297a7d056795d71ff8dcf08c6669559ffbd5a05bcc0f05d4e1e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOJU6LGT%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUCaL5pM8xo0aJ6XGbOHVxoFr7uHBk2D%2F844agOv9PYAiEAx9tfGjnCVxP0ILFP6cJlwxsX6mzOzEj4vo%2BqXaE%2Bgusq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDM%2B66tiLI44Jsl7gryrcA1p09Ivrc7I4imANqEA7OWFIlQBVSJVW6oAVvuuxBOUIP1AVuhBYdA0xlfd6ZVG5HF4rZohlZ0DAleoUtTK%2FRa%2BTSonq%2B8iXZrRiGjphDBeDVbAIyw4eeU9CWj%2F0X99U8oOcaEygiqWoRL5DrbrY4XR064stTfuMUSqd5bEkNfGcqcDB0qLUJgbCIayXz%2BzygPolY%2FtHWcz9RRBb4wDike0R1boAFSx16HZbdKqG7fmuADmro7yI%2FMrGO1eJEg0WXli7DKrhRzPI9Nfn7TjMqCUoS4cgRYN0%2BZV5ONYRubKx1C3hU8aXAdI2i40lP34u1i3tksn9ZSTAzsPI47YT2tJTrTfMMUNR12xiHJwYg8mqZJMpL%2BFuAmyTUY%2BYSmjkInUr4%2BcDqiW4CciChMSrxIWIDR03QTa1RlD2CPOUOvdR8%2BDH03j1Wi7vEbnN0RABVi4ojR1gfCifpLWcfNxS637lrTB44l9aLQc4ULvrgyvQTQW4X8k%2F%2FPYLR%2BKKdUhfK9rGoSFeSvPNCmn0tm5qIDJZem2%2FDPBYcj0Gw4Psed4eBJl6eBeqCRyGrZ%2Fk4a06mVF6u24uyeqDxnMWPmSewV61b%2FyQ8dFFWmNhdCr6l2wjG2K5sfSWmZesuwp8MI75nsEGOqUBkaBrwzdiRuTH5BYAlXPX3LRbIzxK5w7LLkya2%2BNysfmURCY1VNKiHVEWvff7oYadLWrgh%2FPWQ1KO4sKBp9xfay4VdKvV0MPGmfO2EMog3pKr8crek88T0hwEcWc0c%2FozkU0tUJzWozP3m31zxkIdWBeeERCGLBoSy1zQI%2BOs1xD98QEEweMmdDKKdK3go5nHvUbSZJ4wieYR11%2B6byCOQvHZoMsY&X-Amz-Signature=3fa0befd684305ec7860d9ad1ad44a0e07eb5f855883261fa4732d27de23bbfa&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
