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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFKI3R2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBk9m1NQd8yQg8LcsN8wuwHdwA9lRD9Dvv1sKqncJXRiAiEAijor%2FbyEBu%2FtuXB933%2BD36XZv%2BSh%2FNIY06W%2BuWhPDgoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHhnWzNVtTAo%2F9AOcSrcA9KDsD0pztlGWYscJwnENxHKD4LqUIy1anCACYLL9quO0mw%2Fqq6kcyOuyp5vkG9Cp3tp%2BzG2T3aa5oTVmB95ZMoOoo4gCLSIzgTaN%2BnbNq2mUgpTrK7EmEpUCyuxOOtos2qQ8GjgFF824NlEtaFw5XLIDTg46aZ%2BciXnO%2BS5rirctc41QNVz45C%2B%2BiDlRKPGFMi6OLkm1V56jdGzQtapp0bq6J5KqxskJx2BWK02dLpIl3Kf3PMPiV22HEQbd9iVtGzbWua5pVwAEb%2BOhUWf%2F2%2B42xfHVWsr5Xu638CTIc9hrSq5W0iRRIpqqgNjeJdcmh6%2Fc4ua4jrRje8s7TEu6Y2rkYXgDMHB4%2F3Azi78XCttnw%2Bn4teALHWtdnz%2BMMvPeE5mdsJ%2F7ZQde9myYMjAwWZeKpR7FPEtJUq8TqTZJSd8moQ%2FNiDdiUnG%2BKa8nkKXs3N8FNQNRGms19wEmmBPI%2B9%2BSfh2w6IWib6A2bMiBF%2FhXW29CtcXAmiTysjpAgZZew%2BJe1cROZL57zFtZDXAssXufaVr8s%2FqCtzA9YOFsez8du3usUX%2BCkf%2B5apE8rOlW6FcOeT2C4yO8nGCBCL2bLwcs%2FNCNUNhblOBvKpUJ9izX2vZ4kz8G0JvbgxTMKfr28AGOqUBpdS5m0pjQXr%2FvkOi1M%2B1oHvjsj4zXlKNncb8TOqFqm%2BWK2u9Pq5IAlpCjy02SzExf5IO7yqGiCS2Jf9VOi0OY%2FrvCooIOScGo78bRyYB%2B1mzY%2FkxaydzxHGZlpC4%2FizRVNVrszRAJZ%2BWRbuYnGkw0I%2B0ILxtUtUPeRMTD1YgosbyoZpECjekn8rlEbfTf5jNAOaYO3qVb1xl3MxFv08tluTsbXk%2F&X-Amz-Signature=7f3f10074b0449c32319b81dbf3b9a4ee406090eed35dc98f7aca536b704994e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFKI3R2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBk9m1NQd8yQg8LcsN8wuwHdwA9lRD9Dvv1sKqncJXRiAiEAijor%2FbyEBu%2FtuXB933%2BD36XZv%2BSh%2FNIY06W%2BuWhPDgoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHhnWzNVtTAo%2F9AOcSrcA9KDsD0pztlGWYscJwnENxHKD4LqUIy1anCACYLL9quO0mw%2Fqq6kcyOuyp5vkG9Cp3tp%2BzG2T3aa5oTVmB95ZMoOoo4gCLSIzgTaN%2BnbNq2mUgpTrK7EmEpUCyuxOOtos2qQ8GjgFF824NlEtaFw5XLIDTg46aZ%2BciXnO%2BS5rirctc41QNVz45C%2B%2BiDlRKPGFMi6OLkm1V56jdGzQtapp0bq6J5KqxskJx2BWK02dLpIl3Kf3PMPiV22HEQbd9iVtGzbWua5pVwAEb%2BOhUWf%2F2%2B42xfHVWsr5Xu638CTIc9hrSq5W0iRRIpqqgNjeJdcmh6%2Fc4ua4jrRje8s7TEu6Y2rkYXgDMHB4%2F3Azi78XCttnw%2Bn4teALHWtdnz%2BMMvPeE5mdsJ%2F7ZQde9myYMjAwWZeKpR7FPEtJUq8TqTZJSd8moQ%2FNiDdiUnG%2BKa8nkKXs3N8FNQNRGms19wEmmBPI%2B9%2BSfh2w6IWib6A2bMiBF%2FhXW29CtcXAmiTysjpAgZZew%2BJe1cROZL57zFtZDXAssXufaVr8s%2FqCtzA9YOFsez8du3usUX%2BCkf%2B5apE8rOlW6FcOeT2C4yO8nGCBCL2bLwcs%2FNCNUNhblOBvKpUJ9izX2vZ4kz8G0JvbgxTMKfr28AGOqUBpdS5m0pjQXr%2FvkOi1M%2B1oHvjsj4zXlKNncb8TOqFqm%2BWK2u9Pq5IAlpCjy02SzExf5IO7yqGiCS2Jf9VOi0OY%2FrvCooIOScGo78bRyYB%2B1mzY%2FkxaydzxHGZlpC4%2FizRVNVrszRAJZ%2BWRbuYnGkw0I%2B0ILxtUtUPeRMTD1YgosbyoZpECjekn8rlEbfTf5jNAOaYO3qVb1xl3MxFv08tluTsbXk%2F&X-Amz-Signature=6015a7bc2281b99f3487f5ec1eba14c375c0dc4307594792a2cf19a90147bd67&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFKI3R2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBk9m1NQd8yQg8LcsN8wuwHdwA9lRD9Dvv1sKqncJXRiAiEAijor%2FbyEBu%2FtuXB933%2BD36XZv%2BSh%2FNIY06W%2BuWhPDgoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHhnWzNVtTAo%2F9AOcSrcA9KDsD0pztlGWYscJwnENxHKD4LqUIy1anCACYLL9quO0mw%2Fqq6kcyOuyp5vkG9Cp3tp%2BzG2T3aa5oTVmB95ZMoOoo4gCLSIzgTaN%2BnbNq2mUgpTrK7EmEpUCyuxOOtos2qQ8GjgFF824NlEtaFw5XLIDTg46aZ%2BciXnO%2BS5rirctc41QNVz45C%2B%2BiDlRKPGFMi6OLkm1V56jdGzQtapp0bq6J5KqxskJx2BWK02dLpIl3Kf3PMPiV22HEQbd9iVtGzbWua5pVwAEb%2BOhUWf%2F2%2B42xfHVWsr5Xu638CTIc9hrSq5W0iRRIpqqgNjeJdcmh6%2Fc4ua4jrRje8s7TEu6Y2rkYXgDMHB4%2F3Azi78XCttnw%2Bn4teALHWtdnz%2BMMvPeE5mdsJ%2F7ZQde9myYMjAwWZeKpR7FPEtJUq8TqTZJSd8moQ%2FNiDdiUnG%2BKa8nkKXs3N8FNQNRGms19wEmmBPI%2B9%2BSfh2w6IWib6A2bMiBF%2FhXW29CtcXAmiTysjpAgZZew%2BJe1cROZL57zFtZDXAssXufaVr8s%2FqCtzA9YOFsez8du3usUX%2BCkf%2B5apE8rOlW6FcOeT2C4yO8nGCBCL2bLwcs%2FNCNUNhblOBvKpUJ9izX2vZ4kz8G0JvbgxTMKfr28AGOqUBpdS5m0pjQXr%2FvkOi1M%2B1oHvjsj4zXlKNncb8TOqFqm%2BWK2u9Pq5IAlpCjy02SzExf5IO7yqGiCS2Jf9VOi0OY%2FrvCooIOScGo78bRyYB%2B1mzY%2FkxaydzxHGZlpC4%2FizRVNVrszRAJZ%2BWRbuYnGkw0I%2B0ILxtUtUPeRMTD1YgosbyoZpECjekn8rlEbfTf5jNAOaYO3qVb1xl3MxFv08tluTsbXk%2F&X-Amz-Signature=07dde53061ec8c6797b08e9a5b9b6322535e56f076fb9bd8acd64fee7ea87e8e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFKI3R2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBk9m1NQd8yQg8LcsN8wuwHdwA9lRD9Dvv1sKqncJXRiAiEAijor%2FbyEBu%2FtuXB933%2BD36XZv%2BSh%2FNIY06W%2BuWhPDgoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHhnWzNVtTAo%2F9AOcSrcA9KDsD0pztlGWYscJwnENxHKD4LqUIy1anCACYLL9quO0mw%2Fqq6kcyOuyp5vkG9Cp3tp%2BzG2T3aa5oTVmB95ZMoOoo4gCLSIzgTaN%2BnbNq2mUgpTrK7EmEpUCyuxOOtos2qQ8GjgFF824NlEtaFw5XLIDTg46aZ%2BciXnO%2BS5rirctc41QNVz45C%2B%2BiDlRKPGFMi6OLkm1V56jdGzQtapp0bq6J5KqxskJx2BWK02dLpIl3Kf3PMPiV22HEQbd9iVtGzbWua5pVwAEb%2BOhUWf%2F2%2B42xfHVWsr5Xu638CTIc9hrSq5W0iRRIpqqgNjeJdcmh6%2Fc4ua4jrRje8s7TEu6Y2rkYXgDMHB4%2F3Azi78XCttnw%2Bn4teALHWtdnz%2BMMvPeE5mdsJ%2F7ZQde9myYMjAwWZeKpR7FPEtJUq8TqTZJSd8moQ%2FNiDdiUnG%2BKa8nkKXs3N8FNQNRGms19wEmmBPI%2B9%2BSfh2w6IWib6A2bMiBF%2FhXW29CtcXAmiTysjpAgZZew%2BJe1cROZL57zFtZDXAssXufaVr8s%2FqCtzA9YOFsez8du3usUX%2BCkf%2B5apE8rOlW6FcOeT2C4yO8nGCBCL2bLwcs%2FNCNUNhblOBvKpUJ9izX2vZ4kz8G0JvbgxTMKfr28AGOqUBpdS5m0pjQXr%2FvkOi1M%2B1oHvjsj4zXlKNncb8TOqFqm%2BWK2u9Pq5IAlpCjy02SzExf5IO7yqGiCS2Jf9VOi0OY%2FrvCooIOScGo78bRyYB%2B1mzY%2FkxaydzxHGZlpC4%2FizRVNVrszRAJZ%2BWRbuYnGkw0I%2B0ILxtUtUPeRMTD1YgosbyoZpECjekn8rlEbfTf5jNAOaYO3qVb1xl3MxFv08tluTsbXk%2F&X-Amz-Signature=4f49dd9eecaed69b8d750d7258ac54021193374437928a6d0cf6a69abdf56c4c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFKI3R2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBk9m1NQd8yQg8LcsN8wuwHdwA9lRD9Dvv1sKqncJXRiAiEAijor%2FbyEBu%2FtuXB933%2BD36XZv%2BSh%2FNIY06W%2BuWhPDgoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHhnWzNVtTAo%2F9AOcSrcA9KDsD0pztlGWYscJwnENxHKD4LqUIy1anCACYLL9quO0mw%2Fqq6kcyOuyp5vkG9Cp3tp%2BzG2T3aa5oTVmB95ZMoOoo4gCLSIzgTaN%2BnbNq2mUgpTrK7EmEpUCyuxOOtos2qQ8GjgFF824NlEtaFw5XLIDTg46aZ%2BciXnO%2BS5rirctc41QNVz45C%2B%2BiDlRKPGFMi6OLkm1V56jdGzQtapp0bq6J5KqxskJx2BWK02dLpIl3Kf3PMPiV22HEQbd9iVtGzbWua5pVwAEb%2BOhUWf%2F2%2B42xfHVWsr5Xu638CTIc9hrSq5W0iRRIpqqgNjeJdcmh6%2Fc4ua4jrRje8s7TEu6Y2rkYXgDMHB4%2F3Azi78XCttnw%2Bn4teALHWtdnz%2BMMvPeE5mdsJ%2F7ZQde9myYMjAwWZeKpR7FPEtJUq8TqTZJSd8moQ%2FNiDdiUnG%2BKa8nkKXs3N8FNQNRGms19wEmmBPI%2B9%2BSfh2w6IWib6A2bMiBF%2FhXW29CtcXAmiTysjpAgZZew%2BJe1cROZL57zFtZDXAssXufaVr8s%2FqCtzA9YOFsez8du3usUX%2BCkf%2B5apE8rOlW6FcOeT2C4yO8nGCBCL2bLwcs%2FNCNUNhblOBvKpUJ9izX2vZ4kz8G0JvbgxTMKfr28AGOqUBpdS5m0pjQXr%2FvkOi1M%2B1oHvjsj4zXlKNncb8TOqFqm%2BWK2u9Pq5IAlpCjy02SzExf5IO7yqGiCS2Jf9VOi0OY%2FrvCooIOScGo78bRyYB%2B1mzY%2FkxaydzxHGZlpC4%2FizRVNVrszRAJZ%2BWRbuYnGkw0I%2B0ILxtUtUPeRMTD1YgosbyoZpECjekn8rlEbfTf5jNAOaYO3qVb1xl3MxFv08tluTsbXk%2F&X-Amz-Signature=eda40cdd3a1887c91fb93e04e1bf968d492d8f6aa550ae1d71c7ba6a5b50deb0&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
