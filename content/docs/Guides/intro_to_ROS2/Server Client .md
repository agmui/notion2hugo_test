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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663BSNMF2%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCXJvIbyYcyM4mbHw2PdrZSTwX683gsxZowAoEJEReppwIgV9fprzEhadHNGMmmmpIITi948Q9VwaglSMPf8l5zl3cq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDLaVghCeMEvMaBgz3yrcA%2FO%2B93G9Fx6r9m%2BnRtuIpHW3TPzwB9asI6Zn1Y1Rha25prKsnoWvv5hRybXhpVj2gU7xQhQO4sVX0RQSiZIwC%2FnjHRl1jAvYcu7pG1bwtYQ13mZpbwNs0BdRR2WdECtVhGdhh2tcbu49j%2FTnE9cvtKwsGaAXU%2Fm%2F8jnXTn%2BCTSQjzHivwA3RcomabQ2Hwe0zDMEENE%2B4BgUT%2F269SxgktBDyf5gG4pMiuzF9ZsAWRIohWGekEEHwZO2fDhcjwecE%2Bq7AkPoBlappobei3KMqCkbheZES6Hwj%2BTav4QI%2F1QtWaMIv7L%2FwyWcy2JkXjy2vCR4VytQ4C4uo%2F2qVzAD2kYi%2Fth16%2FEHjbhouMoc8yuJtUFqedZCRPmS7Q%2FDpI2iijf3D2Z9MPYdmu71M1HtzW1DG5pXnkuhxhtSdHRO7jfAOL5w2L5nI95zeGwALQZdU13Ht5PzUE57UgnDzQm7t2SjUiK2cDmHeHJyazyp9cnTrD1QRpVgVtciSR7aU%2Fg9AjPRM40N0GOMmYWGxcvxZb4DYVv6ufxKnvaLSkkQo7tEs%2ByrUBtsI19s2H1Qn8JY82%2FvQCpl1QwcHwArdFcI91CMkAbm%2ByHSgsPVl6Yy3i8S3rhYU7bpoO%2FnHNtZoMMS9nsMGOqUBiHl0aoammN59N4%2Fd5E2oHzOhQCd8TbXbLcvUSSzP3g74gS%2BgUMWznppFor4SSsOTECUGG2CEcd5LYdj2Fr9f%2FjHB8YsZKDvaf%2B%2BhslmW2yFMVCmnLwSomylqvjnfEAMXm9zsUyRwMLeIkkuLzA4o0O5AQCoSDOIh1EDFZk3%2BS%2FvldiH5fvuuBXgyFREmcrjR6wbMGQIPfJqzAX2lFWG5SBnpDOhm&X-Amz-Signature=7bea46e106e7634b56ea0e13abb5ea3449b0e625b1f1edeb87e09351c12e4b26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663BSNMF2%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCXJvIbyYcyM4mbHw2PdrZSTwX683gsxZowAoEJEReppwIgV9fprzEhadHNGMmmmpIITi948Q9VwaglSMPf8l5zl3cq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDLaVghCeMEvMaBgz3yrcA%2FO%2B93G9Fx6r9m%2BnRtuIpHW3TPzwB9asI6Zn1Y1Rha25prKsnoWvv5hRybXhpVj2gU7xQhQO4sVX0RQSiZIwC%2FnjHRl1jAvYcu7pG1bwtYQ13mZpbwNs0BdRR2WdECtVhGdhh2tcbu49j%2FTnE9cvtKwsGaAXU%2Fm%2F8jnXTn%2BCTSQjzHivwA3RcomabQ2Hwe0zDMEENE%2B4BgUT%2F269SxgktBDyf5gG4pMiuzF9ZsAWRIohWGekEEHwZO2fDhcjwecE%2Bq7AkPoBlappobei3KMqCkbheZES6Hwj%2BTav4QI%2F1QtWaMIv7L%2FwyWcy2JkXjy2vCR4VytQ4C4uo%2F2qVzAD2kYi%2Fth16%2FEHjbhouMoc8yuJtUFqedZCRPmS7Q%2FDpI2iijf3D2Z9MPYdmu71M1HtzW1DG5pXnkuhxhtSdHRO7jfAOL5w2L5nI95zeGwALQZdU13Ht5PzUE57UgnDzQm7t2SjUiK2cDmHeHJyazyp9cnTrD1QRpVgVtciSR7aU%2Fg9AjPRM40N0GOMmYWGxcvxZb4DYVv6ufxKnvaLSkkQo7tEs%2ByrUBtsI19s2H1Qn8JY82%2FvQCpl1QwcHwArdFcI91CMkAbm%2ByHSgsPVl6Yy3i8S3rhYU7bpoO%2FnHNtZoMMS9nsMGOqUBiHl0aoammN59N4%2Fd5E2oHzOhQCd8TbXbLcvUSSzP3g74gS%2BgUMWznppFor4SSsOTECUGG2CEcd5LYdj2Fr9f%2FjHB8YsZKDvaf%2B%2BhslmW2yFMVCmnLwSomylqvjnfEAMXm9zsUyRwMLeIkkuLzA4o0O5AQCoSDOIh1EDFZk3%2BS%2FvldiH5fvuuBXgyFREmcrjR6wbMGQIPfJqzAX2lFWG5SBnpDOhm&X-Amz-Signature=9c1e90e359746eda2f2651ba0bf75dfd9ef0ee9f2611cdc275b3bfd8039b595e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663BSNMF2%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCXJvIbyYcyM4mbHw2PdrZSTwX683gsxZowAoEJEReppwIgV9fprzEhadHNGMmmmpIITi948Q9VwaglSMPf8l5zl3cq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDLaVghCeMEvMaBgz3yrcA%2FO%2B93G9Fx6r9m%2BnRtuIpHW3TPzwB9asI6Zn1Y1Rha25prKsnoWvv5hRybXhpVj2gU7xQhQO4sVX0RQSiZIwC%2FnjHRl1jAvYcu7pG1bwtYQ13mZpbwNs0BdRR2WdECtVhGdhh2tcbu49j%2FTnE9cvtKwsGaAXU%2Fm%2F8jnXTn%2BCTSQjzHivwA3RcomabQ2Hwe0zDMEENE%2B4BgUT%2F269SxgktBDyf5gG4pMiuzF9ZsAWRIohWGekEEHwZO2fDhcjwecE%2Bq7AkPoBlappobei3KMqCkbheZES6Hwj%2BTav4QI%2F1QtWaMIv7L%2FwyWcy2JkXjy2vCR4VytQ4C4uo%2F2qVzAD2kYi%2Fth16%2FEHjbhouMoc8yuJtUFqedZCRPmS7Q%2FDpI2iijf3D2Z9MPYdmu71M1HtzW1DG5pXnkuhxhtSdHRO7jfAOL5w2L5nI95zeGwALQZdU13Ht5PzUE57UgnDzQm7t2SjUiK2cDmHeHJyazyp9cnTrD1QRpVgVtciSR7aU%2Fg9AjPRM40N0GOMmYWGxcvxZb4DYVv6ufxKnvaLSkkQo7tEs%2ByrUBtsI19s2H1Qn8JY82%2FvQCpl1QwcHwArdFcI91CMkAbm%2ByHSgsPVl6Yy3i8S3rhYU7bpoO%2FnHNtZoMMS9nsMGOqUBiHl0aoammN59N4%2Fd5E2oHzOhQCd8TbXbLcvUSSzP3g74gS%2BgUMWznppFor4SSsOTECUGG2CEcd5LYdj2Fr9f%2FjHB8YsZKDvaf%2B%2BhslmW2yFMVCmnLwSomylqvjnfEAMXm9zsUyRwMLeIkkuLzA4o0O5AQCoSDOIh1EDFZk3%2BS%2FvldiH5fvuuBXgyFREmcrjR6wbMGQIPfJqzAX2lFWG5SBnpDOhm&X-Amz-Signature=a6a0553f3c4438ea621217a67d15adfcbce7afb1f5349ad06a1c22013a7bc480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663BSNMF2%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCXJvIbyYcyM4mbHw2PdrZSTwX683gsxZowAoEJEReppwIgV9fprzEhadHNGMmmmpIITi948Q9VwaglSMPf8l5zl3cq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDLaVghCeMEvMaBgz3yrcA%2FO%2B93G9Fx6r9m%2BnRtuIpHW3TPzwB9asI6Zn1Y1Rha25prKsnoWvv5hRybXhpVj2gU7xQhQO4sVX0RQSiZIwC%2FnjHRl1jAvYcu7pG1bwtYQ13mZpbwNs0BdRR2WdECtVhGdhh2tcbu49j%2FTnE9cvtKwsGaAXU%2Fm%2F8jnXTn%2BCTSQjzHivwA3RcomabQ2Hwe0zDMEENE%2B4BgUT%2F269SxgktBDyf5gG4pMiuzF9ZsAWRIohWGekEEHwZO2fDhcjwecE%2Bq7AkPoBlappobei3KMqCkbheZES6Hwj%2BTav4QI%2F1QtWaMIv7L%2FwyWcy2JkXjy2vCR4VytQ4C4uo%2F2qVzAD2kYi%2Fth16%2FEHjbhouMoc8yuJtUFqedZCRPmS7Q%2FDpI2iijf3D2Z9MPYdmu71M1HtzW1DG5pXnkuhxhtSdHRO7jfAOL5w2L5nI95zeGwALQZdU13Ht5PzUE57UgnDzQm7t2SjUiK2cDmHeHJyazyp9cnTrD1QRpVgVtciSR7aU%2Fg9AjPRM40N0GOMmYWGxcvxZb4DYVv6ufxKnvaLSkkQo7tEs%2ByrUBtsI19s2H1Qn8JY82%2FvQCpl1QwcHwArdFcI91CMkAbm%2ByHSgsPVl6Yy3i8S3rhYU7bpoO%2FnHNtZoMMS9nsMGOqUBiHl0aoammN59N4%2Fd5E2oHzOhQCd8TbXbLcvUSSzP3g74gS%2BgUMWznppFor4SSsOTECUGG2CEcd5LYdj2Fr9f%2FjHB8YsZKDvaf%2B%2BhslmW2yFMVCmnLwSomylqvjnfEAMXm9zsUyRwMLeIkkuLzA4o0O5AQCoSDOIh1EDFZk3%2BS%2FvldiH5fvuuBXgyFREmcrjR6wbMGQIPfJqzAX2lFWG5SBnpDOhm&X-Amz-Signature=fdb09cc487ffaf25965ba20f052fdfba82c261dd3f11ca5dc7a5a5c716a5868c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663BSNMF2%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCXJvIbyYcyM4mbHw2PdrZSTwX683gsxZowAoEJEReppwIgV9fprzEhadHNGMmmmpIITi948Q9VwaglSMPf8l5zl3cq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDLaVghCeMEvMaBgz3yrcA%2FO%2B93G9Fx6r9m%2BnRtuIpHW3TPzwB9asI6Zn1Y1Rha25prKsnoWvv5hRybXhpVj2gU7xQhQO4sVX0RQSiZIwC%2FnjHRl1jAvYcu7pG1bwtYQ13mZpbwNs0BdRR2WdECtVhGdhh2tcbu49j%2FTnE9cvtKwsGaAXU%2Fm%2F8jnXTn%2BCTSQjzHivwA3RcomabQ2Hwe0zDMEENE%2B4BgUT%2F269SxgktBDyf5gG4pMiuzF9ZsAWRIohWGekEEHwZO2fDhcjwecE%2Bq7AkPoBlappobei3KMqCkbheZES6Hwj%2BTav4QI%2F1QtWaMIv7L%2FwyWcy2JkXjy2vCR4VytQ4C4uo%2F2qVzAD2kYi%2Fth16%2FEHjbhouMoc8yuJtUFqedZCRPmS7Q%2FDpI2iijf3D2Z9MPYdmu71M1HtzW1DG5pXnkuhxhtSdHRO7jfAOL5w2L5nI95zeGwALQZdU13Ht5PzUE57UgnDzQm7t2SjUiK2cDmHeHJyazyp9cnTrD1QRpVgVtciSR7aU%2Fg9AjPRM40N0GOMmYWGxcvxZb4DYVv6ufxKnvaLSkkQo7tEs%2ByrUBtsI19s2H1Qn8JY82%2FvQCpl1QwcHwArdFcI91CMkAbm%2ByHSgsPVl6Yy3i8S3rhYU7bpoO%2FnHNtZoMMS9nsMGOqUBiHl0aoammN59N4%2Fd5E2oHzOhQCd8TbXbLcvUSSzP3g74gS%2BgUMWznppFor4SSsOTECUGG2CEcd5LYdj2Fr9f%2FjHB8YsZKDvaf%2B%2BhslmW2yFMVCmnLwSomylqvjnfEAMXm9zsUyRwMLeIkkuLzA4o0O5AQCoSDOIh1EDFZk3%2BS%2FvldiH5fvuuBXgyFREmcrjR6wbMGQIPfJqzAX2lFWG5SBnpDOhm&X-Amz-Signature=f0e309335f7462a837cecc117debcc0c22dd23ac05eebe493abb7a21b68279a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
