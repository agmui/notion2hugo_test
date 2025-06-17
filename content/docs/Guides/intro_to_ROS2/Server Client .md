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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR4FEVZ4%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T151048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8cKBOTYyGhRIHzhn48hlU70eCAzqCRTCS0dUpseFhSAiAWNxKu4ajupqhe1%2Bw0CNGh8FtQELe%2BR16B8C4%2B5iQcMSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM8l5dKvQihQKFZShSKtwD8iJxlFz4VGbliPEz%2ByOn9ubEEbOQd4VrAnjHsaJB9JLD1o3RAWc5t3j9NSXya0KV0r9kEn6EskHpQyb5xdMDVPfS7vuFr7Ng1Y0BXfL%2BELqavwsIPBsom3cZQ%2BUujBw7mklk6LgjgF%2F8TDRNyCCqxaqzEBMzhB9bpQ2vgPCNiQOSVF3HbUKOEJLLOJvMtFQTUT5nMFe2TfNNCeCykZvqfMIpxNNila45PuQUQtJiE%2B2aE1%2BgvaQryKYR3BvD%2FBZNhIY0quI72aCGzq17k3ohGklOaIi4RaRNx9tI9hukPbR9ux0ZHiklfZQ6HgzdVmvpsV70nqX9KIOjs%2B610GwTfkTmkc%2FV9SWcJcfPqi5%2Fw3X1czJ2BSK2ipuvOUtqNN87gVTrOfe2hY4naRwp%2B%2F4mvaDV8BkPagVwWw43romhbFb0glkwv%2FDcUtwhcrX57otVRX831WMqXTUgIE%2BlGyG6DGTY1GGTax2Etf4TdO47DLVKdh0wmzxAU6OXSkiADNWPV8miTrXmFSlhCFwLpWD5Osj%2FJjPbY9es0ZOsaH24JtE30Clj%2Fv16gYgsAEr6JxnXb44Uq87GW9BaOTNk4MfmwBw1aNrZtdGd1yklWa6ujkRZcrqge1WbB14o480wzqbFwgY6pgG7SWakVXY9fBk2ftslnlMMEP053UBUKSffqX%2BcTncarTmOfvZXlrjSJ6Irw2zuAWG5z2Y0jaS625yNwYagG0oCXZUQHuzYDLhfCL%2BFieidCqypllln4sntem%2BNF0XTjc785y9Cdk1Zkt1sx%2FOIqsWbTiU1SsUhZZeRWUVmyGDbQLPzzhxz7Q5%2B7ZbC0Xk%2BbCTyIXd2lwBK4jrkLc0Rv5oOhpQM2KG7&X-Amz-Signature=44f08ddde1d4de6ae52c9e751238e3654505b24364829cbb729c6d787274fb16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR4FEVZ4%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T151048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8cKBOTYyGhRIHzhn48hlU70eCAzqCRTCS0dUpseFhSAiAWNxKu4ajupqhe1%2Bw0CNGh8FtQELe%2BR16B8C4%2B5iQcMSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM8l5dKvQihQKFZShSKtwD8iJxlFz4VGbliPEz%2ByOn9ubEEbOQd4VrAnjHsaJB9JLD1o3RAWc5t3j9NSXya0KV0r9kEn6EskHpQyb5xdMDVPfS7vuFr7Ng1Y0BXfL%2BELqavwsIPBsom3cZQ%2BUujBw7mklk6LgjgF%2F8TDRNyCCqxaqzEBMzhB9bpQ2vgPCNiQOSVF3HbUKOEJLLOJvMtFQTUT5nMFe2TfNNCeCykZvqfMIpxNNila45PuQUQtJiE%2B2aE1%2BgvaQryKYR3BvD%2FBZNhIY0quI72aCGzq17k3ohGklOaIi4RaRNx9tI9hukPbR9ux0ZHiklfZQ6HgzdVmvpsV70nqX9KIOjs%2B610GwTfkTmkc%2FV9SWcJcfPqi5%2Fw3X1czJ2BSK2ipuvOUtqNN87gVTrOfe2hY4naRwp%2B%2F4mvaDV8BkPagVwWw43romhbFb0glkwv%2FDcUtwhcrX57otVRX831WMqXTUgIE%2BlGyG6DGTY1GGTax2Etf4TdO47DLVKdh0wmzxAU6OXSkiADNWPV8miTrXmFSlhCFwLpWD5Osj%2FJjPbY9es0ZOsaH24JtE30Clj%2Fv16gYgsAEr6JxnXb44Uq87GW9BaOTNk4MfmwBw1aNrZtdGd1yklWa6ujkRZcrqge1WbB14o480wzqbFwgY6pgG7SWakVXY9fBk2ftslnlMMEP053UBUKSffqX%2BcTncarTmOfvZXlrjSJ6Irw2zuAWG5z2Y0jaS625yNwYagG0oCXZUQHuzYDLhfCL%2BFieidCqypllln4sntem%2BNF0XTjc785y9Cdk1Zkt1sx%2FOIqsWbTiU1SsUhZZeRWUVmyGDbQLPzzhxz7Q5%2B7ZbC0Xk%2BbCTyIXd2lwBK4jrkLc0Rv5oOhpQM2KG7&X-Amz-Signature=316b2922d4d5217521d380e0403251eddf6c203feff05014bff8160c5687dba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR4FEVZ4%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8cKBOTYyGhRIHzhn48hlU70eCAzqCRTCS0dUpseFhSAiAWNxKu4ajupqhe1%2Bw0CNGh8FtQELe%2BR16B8C4%2B5iQcMSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM8l5dKvQihQKFZShSKtwD8iJxlFz4VGbliPEz%2ByOn9ubEEbOQd4VrAnjHsaJB9JLD1o3RAWc5t3j9NSXya0KV0r9kEn6EskHpQyb5xdMDVPfS7vuFr7Ng1Y0BXfL%2BELqavwsIPBsom3cZQ%2BUujBw7mklk6LgjgF%2F8TDRNyCCqxaqzEBMzhB9bpQ2vgPCNiQOSVF3HbUKOEJLLOJvMtFQTUT5nMFe2TfNNCeCykZvqfMIpxNNila45PuQUQtJiE%2B2aE1%2BgvaQryKYR3BvD%2FBZNhIY0quI72aCGzq17k3ohGklOaIi4RaRNx9tI9hukPbR9ux0ZHiklfZQ6HgzdVmvpsV70nqX9KIOjs%2B610GwTfkTmkc%2FV9SWcJcfPqi5%2Fw3X1czJ2BSK2ipuvOUtqNN87gVTrOfe2hY4naRwp%2B%2F4mvaDV8BkPagVwWw43romhbFb0glkwv%2FDcUtwhcrX57otVRX831WMqXTUgIE%2BlGyG6DGTY1GGTax2Etf4TdO47DLVKdh0wmzxAU6OXSkiADNWPV8miTrXmFSlhCFwLpWD5Osj%2FJjPbY9es0ZOsaH24JtE30Clj%2Fv16gYgsAEr6JxnXb44Uq87GW9BaOTNk4MfmwBw1aNrZtdGd1yklWa6ujkRZcrqge1WbB14o480wzqbFwgY6pgG7SWakVXY9fBk2ftslnlMMEP053UBUKSffqX%2BcTncarTmOfvZXlrjSJ6Irw2zuAWG5z2Y0jaS625yNwYagG0oCXZUQHuzYDLhfCL%2BFieidCqypllln4sntem%2BNF0XTjc785y9Cdk1Zkt1sx%2FOIqsWbTiU1SsUhZZeRWUVmyGDbQLPzzhxz7Q5%2B7ZbC0Xk%2BbCTyIXd2lwBK4jrkLc0Rv5oOhpQM2KG7&X-Amz-Signature=0f2dc21dcaa04c246cdeb5ba544d2aa6c32d9a6addd9fd101916756883e5585c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR4FEVZ4%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T151048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8cKBOTYyGhRIHzhn48hlU70eCAzqCRTCS0dUpseFhSAiAWNxKu4ajupqhe1%2Bw0CNGh8FtQELe%2BR16B8C4%2B5iQcMSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM8l5dKvQihQKFZShSKtwD8iJxlFz4VGbliPEz%2ByOn9ubEEbOQd4VrAnjHsaJB9JLD1o3RAWc5t3j9NSXya0KV0r9kEn6EskHpQyb5xdMDVPfS7vuFr7Ng1Y0BXfL%2BELqavwsIPBsom3cZQ%2BUujBw7mklk6LgjgF%2F8TDRNyCCqxaqzEBMzhB9bpQ2vgPCNiQOSVF3HbUKOEJLLOJvMtFQTUT5nMFe2TfNNCeCykZvqfMIpxNNila45PuQUQtJiE%2B2aE1%2BgvaQryKYR3BvD%2FBZNhIY0quI72aCGzq17k3ohGklOaIi4RaRNx9tI9hukPbR9ux0ZHiklfZQ6HgzdVmvpsV70nqX9KIOjs%2B610GwTfkTmkc%2FV9SWcJcfPqi5%2Fw3X1czJ2BSK2ipuvOUtqNN87gVTrOfe2hY4naRwp%2B%2F4mvaDV8BkPagVwWw43romhbFb0glkwv%2FDcUtwhcrX57otVRX831WMqXTUgIE%2BlGyG6DGTY1GGTax2Etf4TdO47DLVKdh0wmzxAU6OXSkiADNWPV8miTrXmFSlhCFwLpWD5Osj%2FJjPbY9es0ZOsaH24JtE30Clj%2Fv16gYgsAEr6JxnXb44Uq87GW9BaOTNk4MfmwBw1aNrZtdGd1yklWa6ujkRZcrqge1WbB14o480wzqbFwgY6pgG7SWakVXY9fBk2ftslnlMMEP053UBUKSffqX%2BcTncarTmOfvZXlrjSJ6Irw2zuAWG5z2Y0jaS625yNwYagG0oCXZUQHuzYDLhfCL%2BFieidCqypllln4sntem%2BNF0XTjc785y9Cdk1Zkt1sx%2FOIqsWbTiU1SsUhZZeRWUVmyGDbQLPzzhxz7Q5%2B7ZbC0Xk%2BbCTyIXd2lwBK4jrkLc0Rv5oOhpQM2KG7&X-Amz-Signature=eb0764dd90097a01a4ceb4571a0da329856750486b75a217e0ff8afc5d15605b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR4FEVZ4%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8cKBOTYyGhRIHzhn48hlU70eCAzqCRTCS0dUpseFhSAiAWNxKu4ajupqhe1%2Bw0CNGh8FtQELe%2BR16B8C4%2B5iQcMSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM8l5dKvQihQKFZShSKtwD8iJxlFz4VGbliPEz%2ByOn9ubEEbOQd4VrAnjHsaJB9JLD1o3RAWc5t3j9NSXya0KV0r9kEn6EskHpQyb5xdMDVPfS7vuFr7Ng1Y0BXfL%2BELqavwsIPBsom3cZQ%2BUujBw7mklk6LgjgF%2F8TDRNyCCqxaqzEBMzhB9bpQ2vgPCNiQOSVF3HbUKOEJLLOJvMtFQTUT5nMFe2TfNNCeCykZvqfMIpxNNila45PuQUQtJiE%2B2aE1%2BgvaQryKYR3BvD%2FBZNhIY0quI72aCGzq17k3ohGklOaIi4RaRNx9tI9hukPbR9ux0ZHiklfZQ6HgzdVmvpsV70nqX9KIOjs%2B610GwTfkTmkc%2FV9SWcJcfPqi5%2Fw3X1czJ2BSK2ipuvOUtqNN87gVTrOfe2hY4naRwp%2B%2F4mvaDV8BkPagVwWw43romhbFb0glkwv%2FDcUtwhcrX57otVRX831WMqXTUgIE%2BlGyG6DGTY1GGTax2Etf4TdO47DLVKdh0wmzxAU6OXSkiADNWPV8miTrXmFSlhCFwLpWD5Osj%2FJjPbY9es0ZOsaH24JtE30Clj%2Fv16gYgsAEr6JxnXb44Uq87GW9BaOTNk4MfmwBw1aNrZtdGd1yklWa6ujkRZcrqge1WbB14o480wzqbFwgY6pgG7SWakVXY9fBk2ftslnlMMEP053UBUKSffqX%2BcTncarTmOfvZXlrjSJ6Irw2zuAWG5z2Y0jaS625yNwYagG0oCXZUQHuzYDLhfCL%2BFieidCqypllln4sntem%2BNF0XTjc785y9Cdk1Zkt1sx%2FOIqsWbTiU1SsUhZZeRWUVmyGDbQLPzzhxz7Q5%2B7ZbC0Xk%2BbCTyIXd2lwBK4jrkLc0Rv5oOhpQM2KG7&X-Amz-Signature=c4fa59a5723b843be9b5b31aee0db7562cbfb9c3e3725456e2f8b78826d5215c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
