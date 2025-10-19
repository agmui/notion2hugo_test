---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPEQKKRR%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIClhabmFmUIndl1uqsxa5%2Figvf8gtO13w5VlK44SqPIqAiEAs%2BwHX7XtMmRLXH09yX8XqJnW5P260HXmemGgedJ%2Fg3AqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNNWVfk0IkXE2l6BYyrcA5qsA%2Frss%2FyH2OS5rkqgYh%2Bc6kXfj5tSfiFV5S2Ou9Yuad3GSQ1EypBWFQP9qYxob80XQnX1KHW6PZ4iSGVxPELOo68eH7Lg2K34vmUNzwM2sM8En7fpgeaA%2BrY9cjmJTSMq44uNh%2BmJwgYjQDq%2F9s3v%2F0A7R%2FCgKVARz7ST6vOuzqx1Q%2BsZnNRnxsz2VsV1w55S11HvE6vUPDPtnP6shpshQz6iIhjSqyWrTZEKEo8t1qQpAI0KsrmLytjsym4P8YBgvc8cCWP1ZCMiF8Kdwp6zs%2B%2FtmRcMNWbEMtCgBR1%2BNvt7B%2FuX9o%2BmMq0F6uQEoq9AgzEUDFWPasEvmjo8a6TGcbGvna0T4SFjJC%2FuK4hWBTVaKJG3%2FyCfLruWc4CTMdljIHi1zcgn5ZWC1fch5U7Ax78L7WHukJ%2B5kKIxHEcbU2D7iuJiH6H%2B%2BvpAz9OanhJchOFTfOR%2FMxHSpM7K6Epc6TLnY%2BIHANFRXAgftsdKlHK8DwcHH%2FoQ5yyMgooprDFOrJ9ULgad3qZ%2BF3CcaHkovgDRj1IIOCfUcY1fk%2FUgoGDKuSBKYxdMxoHeLCQvkmr%2BalzG4d6zpMy8y4PFTYiKBDj8ey8m7ZYoIbgptHGowqezR6H3PGXSAXIoMPH40McGOqUBhrSjItRbpbBE10OrwliP0xGPmBVIP1tIKQRcwZ4Hysxcjd4ok0bgd2cCGKFplPJa7ifQAqlqPlnLDH5%2F93ElJtOGCBZWPBsonXK6t5C74a0ixqZ71uMLkB7LQvZpNkIMxDO14lCinAAneXt856n7lZ7CsTjAVihcbpC5dkjkej930EGmIxiY5Hkn3zeLV0XG3vOW%2BERoU1CaQJOae60%2BJs2U4OrK&X-Amz-Signature=0812f1b58cccad1ab6310791367c945583bf5f5126bfe8271e7eb677892ef2ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPEQKKRR%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIClhabmFmUIndl1uqsxa5%2Figvf8gtO13w5VlK44SqPIqAiEAs%2BwHX7XtMmRLXH09yX8XqJnW5P260HXmemGgedJ%2Fg3AqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNNWVfk0IkXE2l6BYyrcA5qsA%2Frss%2FyH2OS5rkqgYh%2Bc6kXfj5tSfiFV5S2Ou9Yuad3GSQ1EypBWFQP9qYxob80XQnX1KHW6PZ4iSGVxPELOo68eH7Lg2K34vmUNzwM2sM8En7fpgeaA%2BrY9cjmJTSMq44uNh%2BmJwgYjQDq%2F9s3v%2F0A7R%2FCgKVARz7ST6vOuzqx1Q%2BsZnNRnxsz2VsV1w55S11HvE6vUPDPtnP6shpshQz6iIhjSqyWrTZEKEo8t1qQpAI0KsrmLytjsym4P8YBgvc8cCWP1ZCMiF8Kdwp6zs%2B%2FtmRcMNWbEMtCgBR1%2BNvt7B%2FuX9o%2BmMq0F6uQEoq9AgzEUDFWPasEvmjo8a6TGcbGvna0T4SFjJC%2FuK4hWBTVaKJG3%2FyCfLruWc4CTMdljIHi1zcgn5ZWC1fch5U7Ax78L7WHukJ%2B5kKIxHEcbU2D7iuJiH6H%2B%2BvpAz9OanhJchOFTfOR%2FMxHSpM7K6Epc6TLnY%2BIHANFRXAgftsdKlHK8DwcHH%2FoQ5yyMgooprDFOrJ9ULgad3qZ%2BF3CcaHkovgDRj1IIOCfUcY1fk%2FUgoGDKuSBKYxdMxoHeLCQvkmr%2BalzG4d6zpMy8y4PFTYiKBDj8ey8m7ZYoIbgptHGowqezR6H3PGXSAXIoMPH40McGOqUBhrSjItRbpbBE10OrwliP0xGPmBVIP1tIKQRcwZ4Hysxcjd4ok0bgd2cCGKFplPJa7ifQAqlqPlnLDH5%2F93ElJtOGCBZWPBsonXK6t5C74a0ixqZ71uMLkB7LQvZpNkIMxDO14lCinAAneXt856n7lZ7CsTjAVihcbpC5dkjkej930EGmIxiY5Hkn3zeLV0XG3vOW%2BERoU1CaQJOae60%2BJs2U4OrK&X-Amz-Signature=3dc2c5e803e5473cf984ccbf63c7209cfdd0986f91f88ace1d9c20cd91edeeee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPEQKKRR%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIClhabmFmUIndl1uqsxa5%2Figvf8gtO13w5VlK44SqPIqAiEAs%2BwHX7XtMmRLXH09yX8XqJnW5P260HXmemGgedJ%2Fg3AqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNNWVfk0IkXE2l6BYyrcA5qsA%2Frss%2FyH2OS5rkqgYh%2Bc6kXfj5tSfiFV5S2Ou9Yuad3GSQ1EypBWFQP9qYxob80XQnX1KHW6PZ4iSGVxPELOo68eH7Lg2K34vmUNzwM2sM8En7fpgeaA%2BrY9cjmJTSMq44uNh%2BmJwgYjQDq%2F9s3v%2F0A7R%2FCgKVARz7ST6vOuzqx1Q%2BsZnNRnxsz2VsV1w55S11HvE6vUPDPtnP6shpshQz6iIhjSqyWrTZEKEo8t1qQpAI0KsrmLytjsym4P8YBgvc8cCWP1ZCMiF8Kdwp6zs%2B%2FtmRcMNWbEMtCgBR1%2BNvt7B%2FuX9o%2BmMq0F6uQEoq9AgzEUDFWPasEvmjo8a6TGcbGvna0T4SFjJC%2FuK4hWBTVaKJG3%2FyCfLruWc4CTMdljIHi1zcgn5ZWC1fch5U7Ax78L7WHukJ%2B5kKIxHEcbU2D7iuJiH6H%2B%2BvpAz9OanhJchOFTfOR%2FMxHSpM7K6Epc6TLnY%2BIHANFRXAgftsdKlHK8DwcHH%2FoQ5yyMgooprDFOrJ9ULgad3qZ%2BF3CcaHkovgDRj1IIOCfUcY1fk%2FUgoGDKuSBKYxdMxoHeLCQvkmr%2BalzG4d6zpMy8y4PFTYiKBDj8ey8m7ZYoIbgptHGowqezR6H3PGXSAXIoMPH40McGOqUBhrSjItRbpbBE10OrwliP0xGPmBVIP1tIKQRcwZ4Hysxcjd4ok0bgd2cCGKFplPJa7ifQAqlqPlnLDH5%2F93ElJtOGCBZWPBsonXK6t5C74a0ixqZ71uMLkB7LQvZpNkIMxDO14lCinAAneXt856n7lZ7CsTjAVihcbpC5dkjkej930EGmIxiY5Hkn3zeLV0XG3vOW%2BERoU1CaQJOae60%2BJs2U4OrK&X-Amz-Signature=2bec6999d72f8d155ce2bf4685d0e60df52cbf054d7845711f86146be36597bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPEQKKRR%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIClhabmFmUIndl1uqsxa5%2Figvf8gtO13w5VlK44SqPIqAiEAs%2BwHX7XtMmRLXH09yX8XqJnW5P260HXmemGgedJ%2Fg3AqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNNWVfk0IkXE2l6BYyrcA5qsA%2Frss%2FyH2OS5rkqgYh%2Bc6kXfj5tSfiFV5S2Ou9Yuad3GSQ1EypBWFQP9qYxob80XQnX1KHW6PZ4iSGVxPELOo68eH7Lg2K34vmUNzwM2sM8En7fpgeaA%2BrY9cjmJTSMq44uNh%2BmJwgYjQDq%2F9s3v%2F0A7R%2FCgKVARz7ST6vOuzqx1Q%2BsZnNRnxsz2VsV1w55S11HvE6vUPDPtnP6shpshQz6iIhjSqyWrTZEKEo8t1qQpAI0KsrmLytjsym4P8YBgvc8cCWP1ZCMiF8Kdwp6zs%2B%2FtmRcMNWbEMtCgBR1%2BNvt7B%2FuX9o%2BmMq0F6uQEoq9AgzEUDFWPasEvmjo8a6TGcbGvna0T4SFjJC%2FuK4hWBTVaKJG3%2FyCfLruWc4CTMdljIHi1zcgn5ZWC1fch5U7Ax78L7WHukJ%2B5kKIxHEcbU2D7iuJiH6H%2B%2BvpAz9OanhJchOFTfOR%2FMxHSpM7K6Epc6TLnY%2BIHANFRXAgftsdKlHK8DwcHH%2FoQ5yyMgooprDFOrJ9ULgad3qZ%2BF3CcaHkovgDRj1IIOCfUcY1fk%2FUgoGDKuSBKYxdMxoHeLCQvkmr%2BalzG4d6zpMy8y4PFTYiKBDj8ey8m7ZYoIbgptHGowqezR6H3PGXSAXIoMPH40McGOqUBhrSjItRbpbBE10OrwliP0xGPmBVIP1tIKQRcwZ4Hysxcjd4ok0bgd2cCGKFplPJa7ifQAqlqPlnLDH5%2F93ElJtOGCBZWPBsonXK6t5C74a0ixqZ71uMLkB7LQvZpNkIMxDO14lCinAAneXt856n7lZ7CsTjAVihcbpC5dkjkej930EGmIxiY5Hkn3zeLV0XG3vOW%2BERoU1CaQJOae60%2BJs2U4OrK&X-Amz-Signature=2d6c4cddbba9497df8a0bca176622a9c45fcc283c5b61a04ffec7c2be8ebdc0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPEQKKRR%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIClhabmFmUIndl1uqsxa5%2Figvf8gtO13w5VlK44SqPIqAiEAs%2BwHX7XtMmRLXH09yX8XqJnW5P260HXmemGgedJ%2Fg3AqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNNWVfk0IkXE2l6BYyrcA5qsA%2Frss%2FyH2OS5rkqgYh%2Bc6kXfj5tSfiFV5S2Ou9Yuad3GSQ1EypBWFQP9qYxob80XQnX1KHW6PZ4iSGVxPELOo68eH7Lg2K34vmUNzwM2sM8En7fpgeaA%2BrY9cjmJTSMq44uNh%2BmJwgYjQDq%2F9s3v%2F0A7R%2FCgKVARz7ST6vOuzqx1Q%2BsZnNRnxsz2VsV1w55S11HvE6vUPDPtnP6shpshQz6iIhjSqyWrTZEKEo8t1qQpAI0KsrmLytjsym4P8YBgvc8cCWP1ZCMiF8Kdwp6zs%2B%2FtmRcMNWbEMtCgBR1%2BNvt7B%2FuX9o%2BmMq0F6uQEoq9AgzEUDFWPasEvmjo8a6TGcbGvna0T4SFjJC%2FuK4hWBTVaKJG3%2FyCfLruWc4CTMdljIHi1zcgn5ZWC1fch5U7Ax78L7WHukJ%2B5kKIxHEcbU2D7iuJiH6H%2B%2BvpAz9OanhJchOFTfOR%2FMxHSpM7K6Epc6TLnY%2BIHANFRXAgftsdKlHK8DwcHH%2FoQ5yyMgooprDFOrJ9ULgad3qZ%2BF3CcaHkovgDRj1IIOCfUcY1fk%2FUgoGDKuSBKYxdMxoHeLCQvkmr%2BalzG4d6zpMy8y4PFTYiKBDj8ey8m7ZYoIbgptHGowqezR6H3PGXSAXIoMPH40McGOqUBhrSjItRbpbBE10OrwliP0xGPmBVIP1tIKQRcwZ4Hysxcjd4ok0bgd2cCGKFplPJa7ifQAqlqPlnLDH5%2F93ElJtOGCBZWPBsonXK6t5C74a0ixqZ71uMLkB7LQvZpNkIMxDO14lCinAAneXt856n7lZ7CsTjAVihcbpC5dkjkej930EGmIxiY5Hkn3zeLV0XG3vOW%2BERoU1CaQJOae60%2BJs2U4OrK&X-Amz-Signature=4fd46111176b90b23bddc2068dcca9484fb6a2b23755f14c86dc8c36be6dae20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
