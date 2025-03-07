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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUFOKKQY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIF3e0UCOcMO0M%2B%2FX%2BZsIKoEmTriPzcz18keVQooHre%2FaAiEAg2okKCvfO1JP7Z4KRMkbzPmH8ii5U3iQT022wHlUqSEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCKlMmdzKqWHrowgnCrcA4b7f0pB3znRD7Gp%2FREjVVJxDq38qUxJZphexcQOJo5185Jb0akp%2B0MQxFhITF8cIvEKr2xGtdS0XZe01hZijmZ%2FLO1vnYW9ZJzG0hgQSNERF2ZPlTrTNOWL5oXXCWlJFn3zaiSBoHXudVCNBPbZONVwPjmuwfpCNsuSsBsSyC3MRHoVinMfu5ohJbjHFLXChqPiS5cpxScnNrD6Uhvy9SLtZ1JbO3wYhpvN3WnyUbB1B%2FNsig%2FeocoI2TTw8TNXPI410uRSJcOmHVzoh%2FZSBXcegeHSun1Oytzs3WLqsbTgZEPex5VePvWV1akAIEwtMgXMpZHNor4alFLUcszuezBgcmkWtUg23SnEFZAbjTUcko6pcwnMXImgCuHCpm0sGjvuF8uCxFoj6Ua0JDnG494z9GDWv7kKL%2BCeXu0FnicVKtiPuCpeBaRs%2FLTRuSOs3a3OReTuj2juJb2AZN%2BhrFBoLLqkN%2F09j%2FMCM48c%2FYD8bwkwJUSaseoUNgYD4S5xrMXXuC7e4s7Ih7CDc%2FznpYf6Buv%2FJBZ8ND6r2ppaeZSo2Pw%2BkhO2ap70rAAEt2lL2jbg2KPGOiej5U2nFSYiiKc6rfF6N3xTNrkp%2B%2FJFPbhEaRptndCDLCdMmvYDMPq%2FrL4GOqUB0ai7Bb4k6ebZIMVhmcKmvERLBQIcrOJRerd%2F8SHSEOIPLwPEL0b2p4YpC0IBEWeUPShrW9mJVn%2BVExrdVBLs4eo%2F8WzI3fw83GhPP4t38%2FtUcC%2BulVrWHqTJNeAXnj%2BP%2BQ6SH8OK%2F3sL%2FpN6SQj4aToupUvC8ndZHyN4lMf%2B%2BzhpjMPDBlnBE0l%2FxGCW%2FKeU1PrWFihsDXR6UH%2BDpfm7vbqCb1S2&X-Amz-Signature=af11cb0b7d697f39387ac43cb7941370e3ff1a9411bd8f13f583d381aea8b93e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUFOKKQY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIF3e0UCOcMO0M%2B%2FX%2BZsIKoEmTriPzcz18keVQooHre%2FaAiEAg2okKCvfO1JP7Z4KRMkbzPmH8ii5U3iQT022wHlUqSEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCKlMmdzKqWHrowgnCrcA4b7f0pB3znRD7Gp%2FREjVVJxDq38qUxJZphexcQOJo5185Jb0akp%2B0MQxFhITF8cIvEKr2xGtdS0XZe01hZijmZ%2FLO1vnYW9ZJzG0hgQSNERF2ZPlTrTNOWL5oXXCWlJFn3zaiSBoHXudVCNBPbZONVwPjmuwfpCNsuSsBsSyC3MRHoVinMfu5ohJbjHFLXChqPiS5cpxScnNrD6Uhvy9SLtZ1JbO3wYhpvN3WnyUbB1B%2FNsig%2FeocoI2TTw8TNXPI410uRSJcOmHVzoh%2FZSBXcegeHSun1Oytzs3WLqsbTgZEPex5VePvWV1akAIEwtMgXMpZHNor4alFLUcszuezBgcmkWtUg23SnEFZAbjTUcko6pcwnMXImgCuHCpm0sGjvuF8uCxFoj6Ua0JDnG494z9GDWv7kKL%2BCeXu0FnicVKtiPuCpeBaRs%2FLTRuSOs3a3OReTuj2juJb2AZN%2BhrFBoLLqkN%2F09j%2FMCM48c%2FYD8bwkwJUSaseoUNgYD4S5xrMXXuC7e4s7Ih7CDc%2FznpYf6Buv%2FJBZ8ND6r2ppaeZSo2Pw%2BkhO2ap70rAAEt2lL2jbg2KPGOiej5U2nFSYiiKc6rfF6N3xTNrkp%2B%2FJFPbhEaRptndCDLCdMmvYDMPq%2FrL4GOqUB0ai7Bb4k6ebZIMVhmcKmvERLBQIcrOJRerd%2F8SHSEOIPLwPEL0b2p4YpC0IBEWeUPShrW9mJVn%2BVExrdVBLs4eo%2F8WzI3fw83GhPP4t38%2FtUcC%2BulVrWHqTJNeAXnj%2BP%2BQ6SH8OK%2F3sL%2FpN6SQj4aToupUvC8ndZHyN4lMf%2B%2BzhpjMPDBlnBE0l%2FxGCW%2FKeU1PrWFihsDXR6UH%2BDpfm7vbqCb1S2&X-Amz-Signature=2d733b083278674ea2754efeccc83d0aaa23015e6a7aa1f71180f57e5abe9006&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUFOKKQY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIF3e0UCOcMO0M%2B%2FX%2BZsIKoEmTriPzcz18keVQooHre%2FaAiEAg2okKCvfO1JP7Z4KRMkbzPmH8ii5U3iQT022wHlUqSEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCKlMmdzKqWHrowgnCrcA4b7f0pB3znRD7Gp%2FREjVVJxDq38qUxJZphexcQOJo5185Jb0akp%2B0MQxFhITF8cIvEKr2xGtdS0XZe01hZijmZ%2FLO1vnYW9ZJzG0hgQSNERF2ZPlTrTNOWL5oXXCWlJFn3zaiSBoHXudVCNBPbZONVwPjmuwfpCNsuSsBsSyC3MRHoVinMfu5ohJbjHFLXChqPiS5cpxScnNrD6Uhvy9SLtZ1JbO3wYhpvN3WnyUbB1B%2FNsig%2FeocoI2TTw8TNXPI410uRSJcOmHVzoh%2FZSBXcegeHSun1Oytzs3WLqsbTgZEPex5VePvWV1akAIEwtMgXMpZHNor4alFLUcszuezBgcmkWtUg23SnEFZAbjTUcko6pcwnMXImgCuHCpm0sGjvuF8uCxFoj6Ua0JDnG494z9GDWv7kKL%2BCeXu0FnicVKtiPuCpeBaRs%2FLTRuSOs3a3OReTuj2juJb2AZN%2BhrFBoLLqkN%2F09j%2FMCM48c%2FYD8bwkwJUSaseoUNgYD4S5xrMXXuC7e4s7Ih7CDc%2FznpYf6Buv%2FJBZ8ND6r2ppaeZSo2Pw%2BkhO2ap70rAAEt2lL2jbg2KPGOiej5U2nFSYiiKc6rfF6N3xTNrkp%2B%2FJFPbhEaRptndCDLCdMmvYDMPq%2FrL4GOqUB0ai7Bb4k6ebZIMVhmcKmvERLBQIcrOJRerd%2F8SHSEOIPLwPEL0b2p4YpC0IBEWeUPShrW9mJVn%2BVExrdVBLs4eo%2F8WzI3fw83GhPP4t38%2FtUcC%2BulVrWHqTJNeAXnj%2BP%2BQ6SH8OK%2F3sL%2FpN6SQj4aToupUvC8ndZHyN4lMf%2B%2BzhpjMPDBlnBE0l%2FxGCW%2FKeU1PrWFihsDXR6UH%2BDpfm7vbqCb1S2&X-Amz-Signature=b742e2d0be955d8296e25a988e8d99a547b635e0614f476c218ad6c43b09a88f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUFOKKQY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIF3e0UCOcMO0M%2B%2FX%2BZsIKoEmTriPzcz18keVQooHre%2FaAiEAg2okKCvfO1JP7Z4KRMkbzPmH8ii5U3iQT022wHlUqSEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCKlMmdzKqWHrowgnCrcA4b7f0pB3znRD7Gp%2FREjVVJxDq38qUxJZphexcQOJo5185Jb0akp%2B0MQxFhITF8cIvEKr2xGtdS0XZe01hZijmZ%2FLO1vnYW9ZJzG0hgQSNERF2ZPlTrTNOWL5oXXCWlJFn3zaiSBoHXudVCNBPbZONVwPjmuwfpCNsuSsBsSyC3MRHoVinMfu5ohJbjHFLXChqPiS5cpxScnNrD6Uhvy9SLtZ1JbO3wYhpvN3WnyUbB1B%2FNsig%2FeocoI2TTw8TNXPI410uRSJcOmHVzoh%2FZSBXcegeHSun1Oytzs3WLqsbTgZEPex5VePvWV1akAIEwtMgXMpZHNor4alFLUcszuezBgcmkWtUg23SnEFZAbjTUcko6pcwnMXImgCuHCpm0sGjvuF8uCxFoj6Ua0JDnG494z9GDWv7kKL%2BCeXu0FnicVKtiPuCpeBaRs%2FLTRuSOs3a3OReTuj2juJb2AZN%2BhrFBoLLqkN%2F09j%2FMCM48c%2FYD8bwkwJUSaseoUNgYD4S5xrMXXuC7e4s7Ih7CDc%2FznpYf6Buv%2FJBZ8ND6r2ppaeZSo2Pw%2BkhO2ap70rAAEt2lL2jbg2KPGOiej5U2nFSYiiKc6rfF6N3xTNrkp%2B%2FJFPbhEaRptndCDLCdMmvYDMPq%2FrL4GOqUB0ai7Bb4k6ebZIMVhmcKmvERLBQIcrOJRerd%2F8SHSEOIPLwPEL0b2p4YpC0IBEWeUPShrW9mJVn%2BVExrdVBLs4eo%2F8WzI3fw83GhPP4t38%2FtUcC%2BulVrWHqTJNeAXnj%2BP%2BQ6SH8OK%2F3sL%2FpN6SQj4aToupUvC8ndZHyN4lMf%2B%2BzhpjMPDBlnBE0l%2FxGCW%2FKeU1PrWFihsDXR6UH%2BDpfm7vbqCb1S2&X-Amz-Signature=c9829904437ab09bf7d8a8b7c99d9efafd1a0dd25c3a4918b6b432133c93c5cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUFOKKQY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIF3e0UCOcMO0M%2B%2FX%2BZsIKoEmTriPzcz18keVQooHre%2FaAiEAg2okKCvfO1JP7Z4KRMkbzPmH8ii5U3iQT022wHlUqSEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCKlMmdzKqWHrowgnCrcA4b7f0pB3znRD7Gp%2FREjVVJxDq38qUxJZphexcQOJo5185Jb0akp%2B0MQxFhITF8cIvEKr2xGtdS0XZe01hZijmZ%2FLO1vnYW9ZJzG0hgQSNERF2ZPlTrTNOWL5oXXCWlJFn3zaiSBoHXudVCNBPbZONVwPjmuwfpCNsuSsBsSyC3MRHoVinMfu5ohJbjHFLXChqPiS5cpxScnNrD6Uhvy9SLtZ1JbO3wYhpvN3WnyUbB1B%2FNsig%2FeocoI2TTw8TNXPI410uRSJcOmHVzoh%2FZSBXcegeHSun1Oytzs3WLqsbTgZEPex5VePvWV1akAIEwtMgXMpZHNor4alFLUcszuezBgcmkWtUg23SnEFZAbjTUcko6pcwnMXImgCuHCpm0sGjvuF8uCxFoj6Ua0JDnG494z9GDWv7kKL%2BCeXu0FnicVKtiPuCpeBaRs%2FLTRuSOs3a3OReTuj2juJb2AZN%2BhrFBoLLqkN%2F09j%2FMCM48c%2FYD8bwkwJUSaseoUNgYD4S5xrMXXuC7e4s7Ih7CDc%2FznpYf6Buv%2FJBZ8ND6r2ppaeZSo2Pw%2BkhO2ap70rAAEt2lL2jbg2KPGOiej5U2nFSYiiKc6rfF6N3xTNrkp%2B%2FJFPbhEaRptndCDLCdMmvYDMPq%2FrL4GOqUB0ai7Bb4k6ebZIMVhmcKmvERLBQIcrOJRerd%2F8SHSEOIPLwPEL0b2p4YpC0IBEWeUPShrW9mJVn%2BVExrdVBLs4eo%2F8WzI3fw83GhPP4t38%2FtUcC%2BulVrWHqTJNeAXnj%2BP%2BQ6SH8OK%2F3sL%2FpN6SQj4aToupUvC8ndZHyN4lMf%2B%2BzhpjMPDBlnBE0l%2FxGCW%2FKeU1PrWFihsDXR6UH%2BDpfm7vbqCb1S2&X-Amz-Signature=e11d7029a9a0c79a2053baa4f6348bbeb4e336de41e2cc5dcceb5070b1050c67&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
