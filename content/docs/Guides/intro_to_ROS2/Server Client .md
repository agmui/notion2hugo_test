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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YLIRZIV%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE38Xn0Mm5WeabsyarhoFY%2BBPQF2FYLFKjo5gCCqMYjIAiEA96ZqRQa1sKlnhamGyYN3b3qjB4G5C2ww3O6G3YbwW%2BIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHajMRMhhDbPsUkn0yrcA%2Fxx2Mc6d%2FgiWbDsbWUS2YbG%2BwJWpd5AWOwaTPIuSKYQ5bsQPfyQ%2BDozrTm1BALm3Kfwfnwb4bjDA%2FrUExyRe%2BKpwswhikgSc31iizr11hXMyUfyJj%2BN4dMk1k1z56ROoVlI9%2BQdE73nd3Jrcc7QTpafPrAc6TOMkFaX6u7JVAJrw7%2FN49p9XjR8GlwSFxe49P4QZPrLwfRAKp9Bud6gYvv1SOM7gOivvRslT1YDZq6A591mLhS78YZTF%2BFkMTL%2BzIK0he%2Bx470XpBmCH4GW0vP0zKy5JLwbZzVnffWv61YMczG2QBP2K4XmyEKfdchtm%2BjuUrC9BjI2arVL1QPBZosew28zWs22%2FC%2B%2FtJ8HLaDtwGx2r4VM7jSzIWFw66vjuzGSFEtWloBmsxANazpLxN6f4M1lxABMzkSy6RyfrKU2hbUBKIdV1BHfrM%2FLGUnl9ruiWBYule48yCJSCxY6pi0TopM6Lcn6rgB5zUBGPQPbBzpK0uXNHxI6eMtYmb20q%2BG0d2BDQX0CWaqpCCuKtdfmqcOfAQ6CAKbAzRjdhvkhQZqAn%2BH2Xpf%2BK%2FQ%2B9XeSbs9LX3xElHuAgVEA2VL7t%2B6phMEy9xedW8T66qJ8ugm95E6qjukx1dZ424dLMIK7qcQGOqUBt2xEt1cInHtfd6JGdASN1Hf2gpB%2FwhOWHQL4QocO%2BI2HaUgCDEa0bYPvouX8OzUrJRhBgPl3MqtH7ALSwsEqH7CXNL%2FbSkwL1fHg6LKpTRkeGfYidK%2FRlkk1Jdvca8taKN%2BhYnk4B8Lezn6zIHxUzr1iuTHIT9qADaUfYhjiUBDEb8IKfsMUjm2OQB%2BW%2F4dqsEBjFPCTwcVmI38fSE4pBtRVYWLz&X-Amz-Signature=9a83ff2ce50214779ded9c1d15148ef7fd134db022f059639a1cde84a1c5dfbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YLIRZIV%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE38Xn0Mm5WeabsyarhoFY%2BBPQF2FYLFKjo5gCCqMYjIAiEA96ZqRQa1sKlnhamGyYN3b3qjB4G5C2ww3O6G3YbwW%2BIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHajMRMhhDbPsUkn0yrcA%2Fxx2Mc6d%2FgiWbDsbWUS2YbG%2BwJWpd5AWOwaTPIuSKYQ5bsQPfyQ%2BDozrTm1BALm3Kfwfnwb4bjDA%2FrUExyRe%2BKpwswhikgSc31iizr11hXMyUfyJj%2BN4dMk1k1z56ROoVlI9%2BQdE73nd3Jrcc7QTpafPrAc6TOMkFaX6u7JVAJrw7%2FN49p9XjR8GlwSFxe49P4QZPrLwfRAKp9Bud6gYvv1SOM7gOivvRslT1YDZq6A591mLhS78YZTF%2BFkMTL%2BzIK0he%2Bx470XpBmCH4GW0vP0zKy5JLwbZzVnffWv61YMczG2QBP2K4XmyEKfdchtm%2BjuUrC9BjI2arVL1QPBZosew28zWs22%2FC%2B%2FtJ8HLaDtwGx2r4VM7jSzIWFw66vjuzGSFEtWloBmsxANazpLxN6f4M1lxABMzkSy6RyfrKU2hbUBKIdV1BHfrM%2FLGUnl9ruiWBYule48yCJSCxY6pi0TopM6Lcn6rgB5zUBGPQPbBzpK0uXNHxI6eMtYmb20q%2BG0d2BDQX0CWaqpCCuKtdfmqcOfAQ6CAKbAzRjdhvkhQZqAn%2BH2Xpf%2BK%2FQ%2B9XeSbs9LX3xElHuAgVEA2VL7t%2B6phMEy9xedW8T66qJ8ugm95E6qjukx1dZ424dLMIK7qcQGOqUBt2xEt1cInHtfd6JGdASN1Hf2gpB%2FwhOWHQL4QocO%2BI2HaUgCDEa0bYPvouX8OzUrJRhBgPl3MqtH7ALSwsEqH7CXNL%2FbSkwL1fHg6LKpTRkeGfYidK%2FRlkk1Jdvca8taKN%2BhYnk4B8Lezn6zIHxUzr1iuTHIT9qADaUfYhjiUBDEb8IKfsMUjm2OQB%2BW%2F4dqsEBjFPCTwcVmI38fSE4pBtRVYWLz&X-Amz-Signature=0bac776061995864fdc98b566b8feabc098c0b8e18a7a09f5092b122d36709cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YLIRZIV%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE38Xn0Mm5WeabsyarhoFY%2BBPQF2FYLFKjo5gCCqMYjIAiEA96ZqRQa1sKlnhamGyYN3b3qjB4G5C2ww3O6G3YbwW%2BIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHajMRMhhDbPsUkn0yrcA%2Fxx2Mc6d%2FgiWbDsbWUS2YbG%2BwJWpd5AWOwaTPIuSKYQ5bsQPfyQ%2BDozrTm1BALm3Kfwfnwb4bjDA%2FrUExyRe%2BKpwswhikgSc31iizr11hXMyUfyJj%2BN4dMk1k1z56ROoVlI9%2BQdE73nd3Jrcc7QTpafPrAc6TOMkFaX6u7JVAJrw7%2FN49p9XjR8GlwSFxe49P4QZPrLwfRAKp9Bud6gYvv1SOM7gOivvRslT1YDZq6A591mLhS78YZTF%2BFkMTL%2BzIK0he%2Bx470XpBmCH4GW0vP0zKy5JLwbZzVnffWv61YMczG2QBP2K4XmyEKfdchtm%2BjuUrC9BjI2arVL1QPBZosew28zWs22%2FC%2B%2FtJ8HLaDtwGx2r4VM7jSzIWFw66vjuzGSFEtWloBmsxANazpLxN6f4M1lxABMzkSy6RyfrKU2hbUBKIdV1BHfrM%2FLGUnl9ruiWBYule48yCJSCxY6pi0TopM6Lcn6rgB5zUBGPQPbBzpK0uXNHxI6eMtYmb20q%2BG0d2BDQX0CWaqpCCuKtdfmqcOfAQ6CAKbAzRjdhvkhQZqAn%2BH2Xpf%2BK%2FQ%2B9XeSbs9LX3xElHuAgVEA2VL7t%2B6phMEy9xedW8T66qJ8ugm95E6qjukx1dZ424dLMIK7qcQGOqUBt2xEt1cInHtfd6JGdASN1Hf2gpB%2FwhOWHQL4QocO%2BI2HaUgCDEa0bYPvouX8OzUrJRhBgPl3MqtH7ALSwsEqH7CXNL%2FbSkwL1fHg6LKpTRkeGfYidK%2FRlkk1Jdvca8taKN%2BhYnk4B8Lezn6zIHxUzr1iuTHIT9qADaUfYhjiUBDEb8IKfsMUjm2OQB%2BW%2F4dqsEBjFPCTwcVmI38fSE4pBtRVYWLz&X-Amz-Signature=c35f1fc786fa0c381e39002a4e881e5572fc81d935299e8a64beb268e8767710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YLIRZIV%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE38Xn0Mm5WeabsyarhoFY%2BBPQF2FYLFKjo5gCCqMYjIAiEA96ZqRQa1sKlnhamGyYN3b3qjB4G5C2ww3O6G3YbwW%2BIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHajMRMhhDbPsUkn0yrcA%2Fxx2Mc6d%2FgiWbDsbWUS2YbG%2BwJWpd5AWOwaTPIuSKYQ5bsQPfyQ%2BDozrTm1BALm3Kfwfnwb4bjDA%2FrUExyRe%2BKpwswhikgSc31iizr11hXMyUfyJj%2BN4dMk1k1z56ROoVlI9%2BQdE73nd3Jrcc7QTpafPrAc6TOMkFaX6u7JVAJrw7%2FN49p9XjR8GlwSFxe49P4QZPrLwfRAKp9Bud6gYvv1SOM7gOivvRslT1YDZq6A591mLhS78YZTF%2BFkMTL%2BzIK0he%2Bx470XpBmCH4GW0vP0zKy5JLwbZzVnffWv61YMczG2QBP2K4XmyEKfdchtm%2BjuUrC9BjI2arVL1QPBZosew28zWs22%2FC%2B%2FtJ8HLaDtwGx2r4VM7jSzIWFw66vjuzGSFEtWloBmsxANazpLxN6f4M1lxABMzkSy6RyfrKU2hbUBKIdV1BHfrM%2FLGUnl9ruiWBYule48yCJSCxY6pi0TopM6Lcn6rgB5zUBGPQPbBzpK0uXNHxI6eMtYmb20q%2BG0d2BDQX0CWaqpCCuKtdfmqcOfAQ6CAKbAzRjdhvkhQZqAn%2BH2Xpf%2BK%2FQ%2B9XeSbs9LX3xElHuAgVEA2VL7t%2B6phMEy9xedW8T66qJ8ugm95E6qjukx1dZ424dLMIK7qcQGOqUBt2xEt1cInHtfd6JGdASN1Hf2gpB%2FwhOWHQL4QocO%2BI2HaUgCDEa0bYPvouX8OzUrJRhBgPl3MqtH7ALSwsEqH7CXNL%2FbSkwL1fHg6LKpTRkeGfYidK%2FRlkk1Jdvca8taKN%2BhYnk4B8Lezn6zIHxUzr1iuTHIT9qADaUfYhjiUBDEb8IKfsMUjm2OQB%2BW%2F4dqsEBjFPCTwcVmI38fSE4pBtRVYWLz&X-Amz-Signature=dbb8be11dc6fe6b11c06b0ff3bc62fa91f092c87fdd7a96e3a24f05f04d15656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YLIRZIV%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE38Xn0Mm5WeabsyarhoFY%2BBPQF2FYLFKjo5gCCqMYjIAiEA96ZqRQa1sKlnhamGyYN3b3qjB4G5C2ww3O6G3YbwW%2BIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHajMRMhhDbPsUkn0yrcA%2Fxx2Mc6d%2FgiWbDsbWUS2YbG%2BwJWpd5AWOwaTPIuSKYQ5bsQPfyQ%2BDozrTm1BALm3Kfwfnwb4bjDA%2FrUExyRe%2BKpwswhikgSc31iizr11hXMyUfyJj%2BN4dMk1k1z56ROoVlI9%2BQdE73nd3Jrcc7QTpafPrAc6TOMkFaX6u7JVAJrw7%2FN49p9XjR8GlwSFxe49P4QZPrLwfRAKp9Bud6gYvv1SOM7gOivvRslT1YDZq6A591mLhS78YZTF%2BFkMTL%2BzIK0he%2Bx470XpBmCH4GW0vP0zKy5JLwbZzVnffWv61YMczG2QBP2K4XmyEKfdchtm%2BjuUrC9BjI2arVL1QPBZosew28zWs22%2FC%2B%2FtJ8HLaDtwGx2r4VM7jSzIWFw66vjuzGSFEtWloBmsxANazpLxN6f4M1lxABMzkSy6RyfrKU2hbUBKIdV1BHfrM%2FLGUnl9ruiWBYule48yCJSCxY6pi0TopM6Lcn6rgB5zUBGPQPbBzpK0uXNHxI6eMtYmb20q%2BG0d2BDQX0CWaqpCCuKtdfmqcOfAQ6CAKbAzRjdhvkhQZqAn%2BH2Xpf%2BK%2FQ%2B9XeSbs9LX3xElHuAgVEA2VL7t%2B6phMEy9xedW8T66qJ8ugm95E6qjukx1dZ424dLMIK7qcQGOqUBt2xEt1cInHtfd6JGdASN1Hf2gpB%2FwhOWHQL4QocO%2BI2HaUgCDEa0bYPvouX8OzUrJRhBgPl3MqtH7ALSwsEqH7CXNL%2FbSkwL1fHg6LKpTRkeGfYidK%2FRlkk1Jdvca8taKN%2BhYnk4B8Lezn6zIHxUzr1iuTHIT9qADaUfYhjiUBDEb8IKfsMUjm2OQB%2BW%2F4dqsEBjFPCTwcVmI38fSE4pBtRVYWLz&X-Amz-Signature=ee6e1b0df97c0060f3b92000fb70146c9c9b98309421b44a8d2192deee163057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
