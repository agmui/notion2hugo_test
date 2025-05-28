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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y36BJTVG%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEsoWg11FUQM%2ByvUDMvSdvoV%2BdMJgvA0qE8CD3AefrbAiEAhPsbpNa3k9hgnVd5Dy8HRCx1iI5SvRqXTEZjZb4USeoq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJskta8Fu3mpT7G8nyrcA45QAkElcdG70kSS%2F2uCIUC5F%2BUtGj7mrlhJKTfbo9l24bJx0%2BwFM7eOavQqTBPyjGJA57oGpQkD9e%2BeTfknJzXf%2BCZv2LsA4lVKQrOmEt9kRRGIskuZIwFCvmT1AB1j5yO2n3cObjZGpBchG%2FsJgm9thCK5h4TgpkmkzCAGEZRHtjEc9tRlEB8nDEehm%2BTvK6MorPyH0JJw2yZ2ofgTIC71yqUVm91VKwoZhjnXZic%2BvJklSN2pGmV%2BUf23SsQT4Z7MCnPbDiBQV7i8PFT0JNWHbJun2iQyby9mZT8h8V%2FTQ7Imf9tm7UubiXy3EA%2Fi%2FWjsALgJW4SHL1inQJ%2BIxfKpQaEhR3QM4fpOPMAvw%2FJezZL%2F8C6%2B%2F9UNUYJdshysikLKUstrCeoBgmvecNupLUWTXVydZrnqAyh%2FZnQgJGeqmUbkhWIEBLQzY%2BJfwh%2Fb3kIxthbYt3dYteAg4wETxYPdJZ03udsqqC%2FvEHrdZ3LjMNV5dateo6zBHRPO4ZHnKukf9Z%2FwMZmmtCaUfqN8moHzvap63supPg%2FbBZISAmbS1jMEYUKLPQmcRefnpfG59MD2lmW7VF66uctxj4705mN7XsJouj17mfj%2B%2FwlsdOJlEOvucXOfSXJigQJMMPiT3MEGOqUB91HqM0ewONB96e3%2BKKPg8FDBuBgU4XcDVIga6qiG8PoLEES%2FrAlMq8%2FgkyoIllsViBKY8xPhxDsyZGusMDt8hawzS6KRFY5hqrdu40ol3C9qaqhfNZ93FtaUnpEUNHPuWekVl%2FeFakBSzROwGWvJV4WpilLSugzxCGeIk9jSZr30NGkSHRSnsgI%2FHBZ%2BWvsfuXIdjR2deg16QoHk3ScSYrhBkedf&X-Amz-Signature=7407d87543c2e8b76547eca4146ff4e98878dce92ddc5acd0eb8e0f868e0d341&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y36BJTVG%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEsoWg11FUQM%2ByvUDMvSdvoV%2BdMJgvA0qE8CD3AefrbAiEAhPsbpNa3k9hgnVd5Dy8HRCx1iI5SvRqXTEZjZb4USeoq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJskta8Fu3mpT7G8nyrcA45QAkElcdG70kSS%2F2uCIUC5F%2BUtGj7mrlhJKTfbo9l24bJx0%2BwFM7eOavQqTBPyjGJA57oGpQkD9e%2BeTfknJzXf%2BCZv2LsA4lVKQrOmEt9kRRGIskuZIwFCvmT1AB1j5yO2n3cObjZGpBchG%2FsJgm9thCK5h4TgpkmkzCAGEZRHtjEc9tRlEB8nDEehm%2BTvK6MorPyH0JJw2yZ2ofgTIC71yqUVm91VKwoZhjnXZic%2BvJklSN2pGmV%2BUf23SsQT4Z7MCnPbDiBQV7i8PFT0JNWHbJun2iQyby9mZT8h8V%2FTQ7Imf9tm7UubiXy3EA%2Fi%2FWjsALgJW4SHL1inQJ%2BIxfKpQaEhR3QM4fpOPMAvw%2FJezZL%2F8C6%2B%2F9UNUYJdshysikLKUstrCeoBgmvecNupLUWTXVydZrnqAyh%2FZnQgJGeqmUbkhWIEBLQzY%2BJfwh%2Fb3kIxthbYt3dYteAg4wETxYPdJZ03udsqqC%2FvEHrdZ3LjMNV5dateo6zBHRPO4ZHnKukf9Z%2FwMZmmtCaUfqN8moHzvap63supPg%2FbBZISAmbS1jMEYUKLPQmcRefnpfG59MD2lmW7VF66uctxj4705mN7XsJouj17mfj%2B%2FwlsdOJlEOvucXOfSXJigQJMMPiT3MEGOqUB91HqM0ewONB96e3%2BKKPg8FDBuBgU4XcDVIga6qiG8PoLEES%2FrAlMq8%2FgkyoIllsViBKY8xPhxDsyZGusMDt8hawzS6KRFY5hqrdu40ol3C9qaqhfNZ93FtaUnpEUNHPuWekVl%2FeFakBSzROwGWvJV4WpilLSugzxCGeIk9jSZr30NGkSHRSnsgI%2FHBZ%2BWvsfuXIdjR2deg16QoHk3ScSYrhBkedf&X-Amz-Signature=7e8ef47feac87963a9fdb8e2afe357839e9c025c46584ee8dae9d815fcb87733&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y36BJTVG%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEsoWg11FUQM%2ByvUDMvSdvoV%2BdMJgvA0qE8CD3AefrbAiEAhPsbpNa3k9hgnVd5Dy8HRCx1iI5SvRqXTEZjZb4USeoq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJskta8Fu3mpT7G8nyrcA45QAkElcdG70kSS%2F2uCIUC5F%2BUtGj7mrlhJKTfbo9l24bJx0%2BwFM7eOavQqTBPyjGJA57oGpQkD9e%2BeTfknJzXf%2BCZv2LsA4lVKQrOmEt9kRRGIskuZIwFCvmT1AB1j5yO2n3cObjZGpBchG%2FsJgm9thCK5h4TgpkmkzCAGEZRHtjEc9tRlEB8nDEehm%2BTvK6MorPyH0JJw2yZ2ofgTIC71yqUVm91VKwoZhjnXZic%2BvJklSN2pGmV%2BUf23SsQT4Z7MCnPbDiBQV7i8PFT0JNWHbJun2iQyby9mZT8h8V%2FTQ7Imf9tm7UubiXy3EA%2Fi%2FWjsALgJW4SHL1inQJ%2BIxfKpQaEhR3QM4fpOPMAvw%2FJezZL%2F8C6%2B%2F9UNUYJdshysikLKUstrCeoBgmvecNupLUWTXVydZrnqAyh%2FZnQgJGeqmUbkhWIEBLQzY%2BJfwh%2Fb3kIxthbYt3dYteAg4wETxYPdJZ03udsqqC%2FvEHrdZ3LjMNV5dateo6zBHRPO4ZHnKukf9Z%2FwMZmmtCaUfqN8moHzvap63supPg%2FbBZISAmbS1jMEYUKLPQmcRefnpfG59MD2lmW7VF66uctxj4705mN7XsJouj17mfj%2B%2FwlsdOJlEOvucXOfSXJigQJMMPiT3MEGOqUB91HqM0ewONB96e3%2BKKPg8FDBuBgU4XcDVIga6qiG8PoLEES%2FrAlMq8%2FgkyoIllsViBKY8xPhxDsyZGusMDt8hawzS6KRFY5hqrdu40ol3C9qaqhfNZ93FtaUnpEUNHPuWekVl%2FeFakBSzROwGWvJV4WpilLSugzxCGeIk9jSZr30NGkSHRSnsgI%2FHBZ%2BWvsfuXIdjR2deg16QoHk3ScSYrhBkedf&X-Amz-Signature=6d1c7851d44f21b52cb293d72e7478b6623141ab09f0b8fdb895edab031ead53&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y36BJTVG%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEsoWg11FUQM%2ByvUDMvSdvoV%2BdMJgvA0qE8CD3AefrbAiEAhPsbpNa3k9hgnVd5Dy8HRCx1iI5SvRqXTEZjZb4USeoq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJskta8Fu3mpT7G8nyrcA45QAkElcdG70kSS%2F2uCIUC5F%2BUtGj7mrlhJKTfbo9l24bJx0%2BwFM7eOavQqTBPyjGJA57oGpQkD9e%2BeTfknJzXf%2BCZv2LsA4lVKQrOmEt9kRRGIskuZIwFCvmT1AB1j5yO2n3cObjZGpBchG%2FsJgm9thCK5h4TgpkmkzCAGEZRHtjEc9tRlEB8nDEehm%2BTvK6MorPyH0JJw2yZ2ofgTIC71yqUVm91VKwoZhjnXZic%2BvJklSN2pGmV%2BUf23SsQT4Z7MCnPbDiBQV7i8PFT0JNWHbJun2iQyby9mZT8h8V%2FTQ7Imf9tm7UubiXy3EA%2Fi%2FWjsALgJW4SHL1inQJ%2BIxfKpQaEhR3QM4fpOPMAvw%2FJezZL%2F8C6%2B%2F9UNUYJdshysikLKUstrCeoBgmvecNupLUWTXVydZrnqAyh%2FZnQgJGeqmUbkhWIEBLQzY%2BJfwh%2Fb3kIxthbYt3dYteAg4wETxYPdJZ03udsqqC%2FvEHrdZ3LjMNV5dateo6zBHRPO4ZHnKukf9Z%2FwMZmmtCaUfqN8moHzvap63supPg%2FbBZISAmbS1jMEYUKLPQmcRefnpfG59MD2lmW7VF66uctxj4705mN7XsJouj17mfj%2B%2FwlsdOJlEOvucXOfSXJigQJMMPiT3MEGOqUB91HqM0ewONB96e3%2BKKPg8FDBuBgU4XcDVIga6qiG8PoLEES%2FrAlMq8%2FgkyoIllsViBKY8xPhxDsyZGusMDt8hawzS6KRFY5hqrdu40ol3C9qaqhfNZ93FtaUnpEUNHPuWekVl%2FeFakBSzROwGWvJV4WpilLSugzxCGeIk9jSZr30NGkSHRSnsgI%2FHBZ%2BWvsfuXIdjR2deg16QoHk3ScSYrhBkedf&X-Amz-Signature=ac57aec69e3a6e929fc9157099ef29d402ae0aa53ebff0ef3b8c1c381d7618b6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y36BJTVG%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEsoWg11FUQM%2ByvUDMvSdvoV%2BdMJgvA0qE8CD3AefrbAiEAhPsbpNa3k9hgnVd5Dy8HRCx1iI5SvRqXTEZjZb4USeoq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJskta8Fu3mpT7G8nyrcA45QAkElcdG70kSS%2F2uCIUC5F%2BUtGj7mrlhJKTfbo9l24bJx0%2BwFM7eOavQqTBPyjGJA57oGpQkD9e%2BeTfknJzXf%2BCZv2LsA4lVKQrOmEt9kRRGIskuZIwFCvmT1AB1j5yO2n3cObjZGpBchG%2FsJgm9thCK5h4TgpkmkzCAGEZRHtjEc9tRlEB8nDEehm%2BTvK6MorPyH0JJw2yZ2ofgTIC71yqUVm91VKwoZhjnXZic%2BvJklSN2pGmV%2BUf23SsQT4Z7MCnPbDiBQV7i8PFT0JNWHbJun2iQyby9mZT8h8V%2FTQ7Imf9tm7UubiXy3EA%2Fi%2FWjsALgJW4SHL1inQJ%2BIxfKpQaEhR3QM4fpOPMAvw%2FJezZL%2F8C6%2B%2F9UNUYJdshysikLKUstrCeoBgmvecNupLUWTXVydZrnqAyh%2FZnQgJGeqmUbkhWIEBLQzY%2BJfwh%2Fb3kIxthbYt3dYteAg4wETxYPdJZ03udsqqC%2FvEHrdZ3LjMNV5dateo6zBHRPO4ZHnKukf9Z%2FwMZmmtCaUfqN8moHzvap63supPg%2FbBZISAmbS1jMEYUKLPQmcRefnpfG59MD2lmW7VF66uctxj4705mN7XsJouj17mfj%2B%2FwlsdOJlEOvucXOfSXJigQJMMPiT3MEGOqUB91HqM0ewONB96e3%2BKKPg8FDBuBgU4XcDVIga6qiG8PoLEES%2FrAlMq8%2FgkyoIllsViBKY8xPhxDsyZGusMDt8hawzS6KRFY5hqrdu40ol3C9qaqhfNZ93FtaUnpEUNHPuWekVl%2FeFakBSzROwGWvJV4WpilLSugzxCGeIk9jSZr30NGkSHRSnsgI%2FHBZ%2BWvsfuXIdjR2deg16QoHk3ScSYrhBkedf&X-Amz-Signature=7d44237f8b8d0cca2bf82d95c42334de2b32781fa2163a6ad02f743b29891272&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
