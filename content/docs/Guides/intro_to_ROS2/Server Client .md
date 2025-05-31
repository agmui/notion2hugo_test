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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FEZ4QIF%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQu41CBzC2XRTtQ%2FnQf0JfZqLhbd23AoCwD%2BkkABFqjAIgOt8H0ZFIU1mcQLDZoMxrqMLhumEgp58k7gtToJTcAbMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMR3eGnqnBeHpGpXxircA4%2FcMKa0HAx4X7AgIkzymboxkJ30VXBZQPDWnvkeVAoFIbWc%2Bo6ZzWzDR72CGR3vgzm0Jtx3GOiofNOtTttVsBuafs6p41UN%2Fbr3FuQvBmywDqDyOwTFvu893FhC0JcmfKT3zW9M7hgUefeF6DbjKHpgrtftMGSiXp3t0MTgNV%2FWAMu0V%2BI%2FhEcG7CGxA295aoY6CspdFKctD4tdq7xTP%2F%2BitSXZsNIE8MoKZtvEO%2F78fPIyNlhpQ8WqgTqE3cb0k4estpW8lUswYCovgVI5qtnIf8n1utfufpPypaaG4xZH5eHlWQzLPmwwoeEmaVnZU4vlOM2GukTCWPF527q0Q%2BOqvnfd73HU1vIGsRxnrFDwmdX3VsOS4VtypYRvpcmGZ%2BXTLbB3%2BMZnzT0zhPdFiRgVmvDG9L8uTL5cwue%2BRZN6NCGKJxTRVv%2F8Wivn6dXG07X23fE3R1nCkLj9rLl3JvknaHT%2FyCCZxBFKjjrf40h9TxupuGacrOICM0LspZc%2Bz4%2F8%2FdCkA91FwVIfOU3fHJ08CFIAYuplMjfKmd1pG9ohbTqVYRdKu10XKskfpnPSBI25YVQ0Oai%2BOnh3ZcjevKNn%2Bm8DVsEe3QEqakksCHLd06fOtpg33eQxz13VMKCE68EGOqUBKN4iDeyFp0ahdcnni%2B99jAhtu%2FS%2Fq1fWHNHOYZXEIHyS6Arb0OIKTbLvcsTG7%2Fn3YvYrzsYnvnWAlNJVvEAOQ%2F2%2BL8N3pMvnCN2PAIWywwb43QIjOWmBwe4DBUr4%2BmfqtWHE2askWpw580mtBudpDmt8OhEjFSvAtnksFiGVmFs2AmCD05ua4grh1XDqQdwEJ%2FkkdyHcyOsL1Hc9V%2Bw%2B4JF6%2Ba8b&X-Amz-Signature=4540bc15a448d2e217267141ea9769c2b1ec84b0e1796ad9e0858222d7d5d321&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FEZ4QIF%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQu41CBzC2XRTtQ%2FnQf0JfZqLhbd23AoCwD%2BkkABFqjAIgOt8H0ZFIU1mcQLDZoMxrqMLhumEgp58k7gtToJTcAbMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMR3eGnqnBeHpGpXxircA4%2FcMKa0HAx4X7AgIkzymboxkJ30VXBZQPDWnvkeVAoFIbWc%2Bo6ZzWzDR72CGR3vgzm0Jtx3GOiofNOtTttVsBuafs6p41UN%2Fbr3FuQvBmywDqDyOwTFvu893FhC0JcmfKT3zW9M7hgUefeF6DbjKHpgrtftMGSiXp3t0MTgNV%2FWAMu0V%2BI%2FhEcG7CGxA295aoY6CspdFKctD4tdq7xTP%2F%2BitSXZsNIE8MoKZtvEO%2F78fPIyNlhpQ8WqgTqE3cb0k4estpW8lUswYCovgVI5qtnIf8n1utfufpPypaaG4xZH5eHlWQzLPmwwoeEmaVnZU4vlOM2GukTCWPF527q0Q%2BOqvnfd73HU1vIGsRxnrFDwmdX3VsOS4VtypYRvpcmGZ%2BXTLbB3%2BMZnzT0zhPdFiRgVmvDG9L8uTL5cwue%2BRZN6NCGKJxTRVv%2F8Wivn6dXG07X23fE3R1nCkLj9rLl3JvknaHT%2FyCCZxBFKjjrf40h9TxupuGacrOICM0LspZc%2Bz4%2F8%2FdCkA91FwVIfOU3fHJ08CFIAYuplMjfKmd1pG9ohbTqVYRdKu10XKskfpnPSBI25YVQ0Oai%2BOnh3ZcjevKNn%2Bm8DVsEe3QEqakksCHLd06fOtpg33eQxz13VMKCE68EGOqUBKN4iDeyFp0ahdcnni%2B99jAhtu%2FS%2Fq1fWHNHOYZXEIHyS6Arb0OIKTbLvcsTG7%2Fn3YvYrzsYnvnWAlNJVvEAOQ%2F2%2BL8N3pMvnCN2PAIWywwb43QIjOWmBwe4DBUr4%2BmfqtWHE2askWpw580mtBudpDmt8OhEjFSvAtnksFiGVmFs2AmCD05ua4grh1XDqQdwEJ%2FkkdyHcyOsL1Hc9V%2Bw%2B4JF6%2Ba8b&X-Amz-Signature=85c631ad422f57d6085b02f632d663d7cc434682268a1bf0db8b0f2686949375&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FEZ4QIF%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQu41CBzC2XRTtQ%2FnQf0JfZqLhbd23AoCwD%2BkkABFqjAIgOt8H0ZFIU1mcQLDZoMxrqMLhumEgp58k7gtToJTcAbMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMR3eGnqnBeHpGpXxircA4%2FcMKa0HAx4X7AgIkzymboxkJ30VXBZQPDWnvkeVAoFIbWc%2Bo6ZzWzDR72CGR3vgzm0Jtx3GOiofNOtTttVsBuafs6p41UN%2Fbr3FuQvBmywDqDyOwTFvu893FhC0JcmfKT3zW9M7hgUefeF6DbjKHpgrtftMGSiXp3t0MTgNV%2FWAMu0V%2BI%2FhEcG7CGxA295aoY6CspdFKctD4tdq7xTP%2F%2BitSXZsNIE8MoKZtvEO%2F78fPIyNlhpQ8WqgTqE3cb0k4estpW8lUswYCovgVI5qtnIf8n1utfufpPypaaG4xZH5eHlWQzLPmwwoeEmaVnZU4vlOM2GukTCWPF527q0Q%2BOqvnfd73HU1vIGsRxnrFDwmdX3VsOS4VtypYRvpcmGZ%2BXTLbB3%2BMZnzT0zhPdFiRgVmvDG9L8uTL5cwue%2BRZN6NCGKJxTRVv%2F8Wivn6dXG07X23fE3R1nCkLj9rLl3JvknaHT%2FyCCZxBFKjjrf40h9TxupuGacrOICM0LspZc%2Bz4%2F8%2FdCkA91FwVIfOU3fHJ08CFIAYuplMjfKmd1pG9ohbTqVYRdKu10XKskfpnPSBI25YVQ0Oai%2BOnh3ZcjevKNn%2Bm8DVsEe3QEqakksCHLd06fOtpg33eQxz13VMKCE68EGOqUBKN4iDeyFp0ahdcnni%2B99jAhtu%2FS%2Fq1fWHNHOYZXEIHyS6Arb0OIKTbLvcsTG7%2Fn3YvYrzsYnvnWAlNJVvEAOQ%2F2%2BL8N3pMvnCN2PAIWywwb43QIjOWmBwe4DBUr4%2BmfqtWHE2askWpw580mtBudpDmt8OhEjFSvAtnksFiGVmFs2AmCD05ua4grh1XDqQdwEJ%2FkkdyHcyOsL1Hc9V%2Bw%2B4JF6%2Ba8b&X-Amz-Signature=15b86f2d2a6fd29a06bccfff14694b05d42c4a4bc3ab67365c7ad328cbd1a435&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FEZ4QIF%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQu41CBzC2XRTtQ%2FnQf0JfZqLhbd23AoCwD%2BkkABFqjAIgOt8H0ZFIU1mcQLDZoMxrqMLhumEgp58k7gtToJTcAbMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMR3eGnqnBeHpGpXxircA4%2FcMKa0HAx4X7AgIkzymboxkJ30VXBZQPDWnvkeVAoFIbWc%2Bo6ZzWzDR72CGR3vgzm0Jtx3GOiofNOtTttVsBuafs6p41UN%2Fbr3FuQvBmywDqDyOwTFvu893FhC0JcmfKT3zW9M7hgUefeF6DbjKHpgrtftMGSiXp3t0MTgNV%2FWAMu0V%2BI%2FhEcG7CGxA295aoY6CspdFKctD4tdq7xTP%2F%2BitSXZsNIE8MoKZtvEO%2F78fPIyNlhpQ8WqgTqE3cb0k4estpW8lUswYCovgVI5qtnIf8n1utfufpPypaaG4xZH5eHlWQzLPmwwoeEmaVnZU4vlOM2GukTCWPF527q0Q%2BOqvnfd73HU1vIGsRxnrFDwmdX3VsOS4VtypYRvpcmGZ%2BXTLbB3%2BMZnzT0zhPdFiRgVmvDG9L8uTL5cwue%2BRZN6NCGKJxTRVv%2F8Wivn6dXG07X23fE3R1nCkLj9rLl3JvknaHT%2FyCCZxBFKjjrf40h9TxupuGacrOICM0LspZc%2Bz4%2F8%2FdCkA91FwVIfOU3fHJ08CFIAYuplMjfKmd1pG9ohbTqVYRdKu10XKskfpnPSBI25YVQ0Oai%2BOnh3ZcjevKNn%2Bm8DVsEe3QEqakksCHLd06fOtpg33eQxz13VMKCE68EGOqUBKN4iDeyFp0ahdcnni%2B99jAhtu%2FS%2Fq1fWHNHOYZXEIHyS6Arb0OIKTbLvcsTG7%2Fn3YvYrzsYnvnWAlNJVvEAOQ%2F2%2BL8N3pMvnCN2PAIWywwb43QIjOWmBwe4DBUr4%2BmfqtWHE2askWpw580mtBudpDmt8OhEjFSvAtnksFiGVmFs2AmCD05ua4grh1XDqQdwEJ%2FkkdyHcyOsL1Hc9V%2Bw%2B4JF6%2Ba8b&X-Amz-Signature=d812ac86dc2372a25fe2bcd499bb89b66f050e2ab0064d3e52fde3774752ba88&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FEZ4QIF%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQu41CBzC2XRTtQ%2FnQf0JfZqLhbd23AoCwD%2BkkABFqjAIgOt8H0ZFIU1mcQLDZoMxrqMLhumEgp58k7gtToJTcAbMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMR3eGnqnBeHpGpXxircA4%2FcMKa0HAx4X7AgIkzymboxkJ30VXBZQPDWnvkeVAoFIbWc%2Bo6ZzWzDR72CGR3vgzm0Jtx3GOiofNOtTttVsBuafs6p41UN%2Fbr3FuQvBmywDqDyOwTFvu893FhC0JcmfKT3zW9M7hgUefeF6DbjKHpgrtftMGSiXp3t0MTgNV%2FWAMu0V%2BI%2FhEcG7CGxA295aoY6CspdFKctD4tdq7xTP%2F%2BitSXZsNIE8MoKZtvEO%2F78fPIyNlhpQ8WqgTqE3cb0k4estpW8lUswYCovgVI5qtnIf8n1utfufpPypaaG4xZH5eHlWQzLPmwwoeEmaVnZU4vlOM2GukTCWPF527q0Q%2BOqvnfd73HU1vIGsRxnrFDwmdX3VsOS4VtypYRvpcmGZ%2BXTLbB3%2BMZnzT0zhPdFiRgVmvDG9L8uTL5cwue%2BRZN6NCGKJxTRVv%2F8Wivn6dXG07X23fE3R1nCkLj9rLl3JvknaHT%2FyCCZxBFKjjrf40h9TxupuGacrOICM0LspZc%2Bz4%2F8%2FdCkA91FwVIfOU3fHJ08CFIAYuplMjfKmd1pG9ohbTqVYRdKu10XKskfpnPSBI25YVQ0Oai%2BOnh3ZcjevKNn%2Bm8DVsEe3QEqakksCHLd06fOtpg33eQxz13VMKCE68EGOqUBKN4iDeyFp0ahdcnni%2B99jAhtu%2FS%2Fq1fWHNHOYZXEIHyS6Arb0OIKTbLvcsTG7%2Fn3YvYrzsYnvnWAlNJVvEAOQ%2F2%2BL8N3pMvnCN2PAIWywwb43QIjOWmBwe4DBUr4%2BmfqtWHE2askWpw580mtBudpDmt8OhEjFSvAtnksFiGVmFs2AmCD05ua4grh1XDqQdwEJ%2FkkdyHcyOsL1Hc9V%2Bw%2B4JF6%2Ba8b&X-Amz-Signature=44b8af8a86d2670939de6a6f5ef77f89f13b5bfffb9af8937811fc3b447d4ee9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
