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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TYMTVTO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcjEYBjVw9uLCflf%2FBAACg04OYDyeHSe0FWbzx9%2FQ1xAiEA0BkALh7XYzYiqCrReKaxtxitEpChaIw9olOuLCKSqjEq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDGbPMnitsaavqcF8AyrcA78RTMOg1QNRQ6YAtqKDkqOx%2BlpcWNAF4MSftxX%2F8owuzKFFYQt%2Fpgs0oELlwYq2yiORh7oJufyruUTnOP%2BmdaZ7S%2BZWZnCku5RXIJzXk45IaxCDBeQqolLFiQAZxD0ZCy%2FFPglgOnDSZT%2B1hqGEL7zTJEzMTua7ttDUEGmWCTomJquh7frqr2wEekPZEUsqP%2B642qEK0LDrvc0UzCGCaspu1EF1nCwaRhsO%2Fo6RPF5Ywt8LfqTD%2BRkraeffgwOQaB4jhAzI2Fel9chqQ3VcLu84uPdoB6ITPgRmN%2Fn9HTHINZ7hmhWXkofcKzK3XH4YzhsuY6aPzuBo5nRG4zzJQVfFwLDB72KsTkTJHVct8TIr0ibQuTgwNfUex2QLuSMzzqRoXL06SoBVJsV5jhG4JP2lAnbTWCQyCpFKnUsIKOOrA8FV6jopFXm9O8ZNV2uT%2F9K8wEkBetzmx%2BB4ox9DiU5%2FJmdljBYl1d7IdqKd4ORlhS7Vw7JJD%2ByvJMSM4cszsVYE3TuFrnHbOjoFJz4%2BPhaQHNcQiRikmCCll0GzovBsSZTVKw7BoUhRi4AwW9rlVZrUrC8uOITW7FXV6fICTHCFMPYsF4EzthqNEfgc8cOYdcDS0%2B2DgESR47VGMOaXv78GOqUBtLbaPRxM%2BsEOFeo0fPE%2BwDzF%2Fc0DbeWArfvjBigGicscpAv30YILMspnbMubtEUwkEttzpioM1RVIWt0xPMGfg4eRQ%2FrgBB%2BPyrU733mAi%2Fg7LWgQrllfjPkXEgtkGMKYm1G6j1Auf%2F%2BRUfp9FHuXod8jeAcWP0YzSnu2vYUzAY8yGf0vx6HrvoBC1T4bP6n4lWVv30Md%2F3AKQ%2BuGTxfLzwSWaSj&X-Amz-Signature=f02270f6e6db197773d311a7319ce58ac46bd4220f9deca653d87ae84cf93002&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TYMTVTO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcjEYBjVw9uLCflf%2FBAACg04OYDyeHSe0FWbzx9%2FQ1xAiEA0BkALh7XYzYiqCrReKaxtxitEpChaIw9olOuLCKSqjEq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDGbPMnitsaavqcF8AyrcA78RTMOg1QNRQ6YAtqKDkqOx%2BlpcWNAF4MSftxX%2F8owuzKFFYQt%2Fpgs0oELlwYq2yiORh7oJufyruUTnOP%2BmdaZ7S%2BZWZnCku5RXIJzXk45IaxCDBeQqolLFiQAZxD0ZCy%2FFPglgOnDSZT%2B1hqGEL7zTJEzMTua7ttDUEGmWCTomJquh7frqr2wEekPZEUsqP%2B642qEK0LDrvc0UzCGCaspu1EF1nCwaRhsO%2Fo6RPF5Ywt8LfqTD%2BRkraeffgwOQaB4jhAzI2Fel9chqQ3VcLu84uPdoB6ITPgRmN%2Fn9HTHINZ7hmhWXkofcKzK3XH4YzhsuY6aPzuBo5nRG4zzJQVfFwLDB72KsTkTJHVct8TIr0ibQuTgwNfUex2QLuSMzzqRoXL06SoBVJsV5jhG4JP2lAnbTWCQyCpFKnUsIKOOrA8FV6jopFXm9O8ZNV2uT%2F9K8wEkBetzmx%2BB4ox9DiU5%2FJmdljBYl1d7IdqKd4ORlhS7Vw7JJD%2ByvJMSM4cszsVYE3TuFrnHbOjoFJz4%2BPhaQHNcQiRikmCCll0GzovBsSZTVKw7BoUhRi4AwW9rlVZrUrC8uOITW7FXV6fICTHCFMPYsF4EzthqNEfgc8cOYdcDS0%2B2DgESR47VGMOaXv78GOqUBtLbaPRxM%2BsEOFeo0fPE%2BwDzF%2Fc0DbeWArfvjBigGicscpAv30YILMspnbMubtEUwkEttzpioM1RVIWt0xPMGfg4eRQ%2FrgBB%2BPyrU733mAi%2Fg7LWgQrllfjPkXEgtkGMKYm1G6j1Auf%2F%2BRUfp9FHuXod8jeAcWP0YzSnu2vYUzAY8yGf0vx6HrvoBC1T4bP6n4lWVv30Md%2F3AKQ%2BuGTxfLzwSWaSj&X-Amz-Signature=de6fff4942ae4eaadc00d6a77ede44b814e1127f844e3281bb63872ceca19291&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TYMTVTO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcjEYBjVw9uLCflf%2FBAACg04OYDyeHSe0FWbzx9%2FQ1xAiEA0BkALh7XYzYiqCrReKaxtxitEpChaIw9olOuLCKSqjEq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDGbPMnitsaavqcF8AyrcA78RTMOg1QNRQ6YAtqKDkqOx%2BlpcWNAF4MSftxX%2F8owuzKFFYQt%2Fpgs0oELlwYq2yiORh7oJufyruUTnOP%2BmdaZ7S%2BZWZnCku5RXIJzXk45IaxCDBeQqolLFiQAZxD0ZCy%2FFPglgOnDSZT%2B1hqGEL7zTJEzMTua7ttDUEGmWCTomJquh7frqr2wEekPZEUsqP%2B642qEK0LDrvc0UzCGCaspu1EF1nCwaRhsO%2Fo6RPF5Ywt8LfqTD%2BRkraeffgwOQaB4jhAzI2Fel9chqQ3VcLu84uPdoB6ITPgRmN%2Fn9HTHINZ7hmhWXkofcKzK3XH4YzhsuY6aPzuBo5nRG4zzJQVfFwLDB72KsTkTJHVct8TIr0ibQuTgwNfUex2QLuSMzzqRoXL06SoBVJsV5jhG4JP2lAnbTWCQyCpFKnUsIKOOrA8FV6jopFXm9O8ZNV2uT%2F9K8wEkBetzmx%2BB4ox9DiU5%2FJmdljBYl1d7IdqKd4ORlhS7Vw7JJD%2ByvJMSM4cszsVYE3TuFrnHbOjoFJz4%2BPhaQHNcQiRikmCCll0GzovBsSZTVKw7BoUhRi4AwW9rlVZrUrC8uOITW7FXV6fICTHCFMPYsF4EzthqNEfgc8cOYdcDS0%2B2DgESR47VGMOaXv78GOqUBtLbaPRxM%2BsEOFeo0fPE%2BwDzF%2Fc0DbeWArfvjBigGicscpAv30YILMspnbMubtEUwkEttzpioM1RVIWt0xPMGfg4eRQ%2FrgBB%2BPyrU733mAi%2Fg7LWgQrllfjPkXEgtkGMKYm1G6j1Auf%2F%2BRUfp9FHuXod8jeAcWP0YzSnu2vYUzAY8yGf0vx6HrvoBC1T4bP6n4lWVv30Md%2F3AKQ%2BuGTxfLzwSWaSj&X-Amz-Signature=0db3a2475505ca52aafa1b0fc8329d7d63c791dd294e9ebb5633808565d9f2b3&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TYMTVTO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcjEYBjVw9uLCflf%2FBAACg04OYDyeHSe0FWbzx9%2FQ1xAiEA0BkALh7XYzYiqCrReKaxtxitEpChaIw9olOuLCKSqjEq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDGbPMnitsaavqcF8AyrcA78RTMOg1QNRQ6YAtqKDkqOx%2BlpcWNAF4MSftxX%2F8owuzKFFYQt%2Fpgs0oELlwYq2yiORh7oJufyruUTnOP%2BmdaZ7S%2BZWZnCku5RXIJzXk45IaxCDBeQqolLFiQAZxD0ZCy%2FFPglgOnDSZT%2B1hqGEL7zTJEzMTua7ttDUEGmWCTomJquh7frqr2wEekPZEUsqP%2B642qEK0LDrvc0UzCGCaspu1EF1nCwaRhsO%2Fo6RPF5Ywt8LfqTD%2BRkraeffgwOQaB4jhAzI2Fel9chqQ3VcLu84uPdoB6ITPgRmN%2Fn9HTHINZ7hmhWXkofcKzK3XH4YzhsuY6aPzuBo5nRG4zzJQVfFwLDB72KsTkTJHVct8TIr0ibQuTgwNfUex2QLuSMzzqRoXL06SoBVJsV5jhG4JP2lAnbTWCQyCpFKnUsIKOOrA8FV6jopFXm9O8ZNV2uT%2F9K8wEkBetzmx%2BB4ox9DiU5%2FJmdljBYl1d7IdqKd4ORlhS7Vw7JJD%2ByvJMSM4cszsVYE3TuFrnHbOjoFJz4%2BPhaQHNcQiRikmCCll0GzovBsSZTVKw7BoUhRi4AwW9rlVZrUrC8uOITW7FXV6fICTHCFMPYsF4EzthqNEfgc8cOYdcDS0%2B2DgESR47VGMOaXv78GOqUBtLbaPRxM%2BsEOFeo0fPE%2BwDzF%2Fc0DbeWArfvjBigGicscpAv30YILMspnbMubtEUwkEttzpioM1RVIWt0xPMGfg4eRQ%2FrgBB%2BPyrU733mAi%2Fg7LWgQrllfjPkXEgtkGMKYm1G6j1Auf%2F%2BRUfp9FHuXod8jeAcWP0YzSnu2vYUzAY8yGf0vx6HrvoBC1T4bP6n4lWVv30Md%2F3AKQ%2BuGTxfLzwSWaSj&X-Amz-Signature=ba2c6cc19c6e2c1427f9268cce20c56dfdfed17bf09eab7ad2b4c85226ac7f77&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TYMTVTO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcjEYBjVw9uLCflf%2FBAACg04OYDyeHSe0FWbzx9%2FQ1xAiEA0BkALh7XYzYiqCrReKaxtxitEpChaIw9olOuLCKSqjEq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDGbPMnitsaavqcF8AyrcA78RTMOg1QNRQ6YAtqKDkqOx%2BlpcWNAF4MSftxX%2F8owuzKFFYQt%2Fpgs0oELlwYq2yiORh7oJufyruUTnOP%2BmdaZ7S%2BZWZnCku5RXIJzXk45IaxCDBeQqolLFiQAZxD0ZCy%2FFPglgOnDSZT%2B1hqGEL7zTJEzMTua7ttDUEGmWCTomJquh7frqr2wEekPZEUsqP%2B642qEK0LDrvc0UzCGCaspu1EF1nCwaRhsO%2Fo6RPF5Ywt8LfqTD%2BRkraeffgwOQaB4jhAzI2Fel9chqQ3VcLu84uPdoB6ITPgRmN%2Fn9HTHINZ7hmhWXkofcKzK3XH4YzhsuY6aPzuBo5nRG4zzJQVfFwLDB72KsTkTJHVct8TIr0ibQuTgwNfUex2QLuSMzzqRoXL06SoBVJsV5jhG4JP2lAnbTWCQyCpFKnUsIKOOrA8FV6jopFXm9O8ZNV2uT%2F9K8wEkBetzmx%2BB4ox9DiU5%2FJmdljBYl1d7IdqKd4ORlhS7Vw7JJD%2ByvJMSM4cszsVYE3TuFrnHbOjoFJz4%2BPhaQHNcQiRikmCCll0GzovBsSZTVKw7BoUhRi4AwW9rlVZrUrC8uOITW7FXV6fICTHCFMPYsF4EzthqNEfgc8cOYdcDS0%2B2DgESR47VGMOaXv78GOqUBtLbaPRxM%2BsEOFeo0fPE%2BwDzF%2Fc0DbeWArfvjBigGicscpAv30YILMspnbMubtEUwkEttzpioM1RVIWt0xPMGfg4eRQ%2FrgBB%2BPyrU733mAi%2Fg7LWgQrllfjPkXEgtkGMKYm1G6j1Auf%2F%2BRUfp9FHuXod8jeAcWP0YzSnu2vYUzAY8yGf0vx6HrvoBC1T4bP6n4lWVv30Md%2F3AKQ%2BuGTxfLzwSWaSj&X-Amz-Signature=7004630f7e1c90d3d21b8e97d39587b48e05e5ffe26e7c100f56752ae6e2c63d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
