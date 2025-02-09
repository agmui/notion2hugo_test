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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI2STFDG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4eABMU9ywE9%2Bs6ufBZKQrM3fAOnHXPjw6ItdRu6vJ0gIgGsNbMMKIy8Y%2F%2BMgKbOw4mbRiQaSrUd%2FK5SSiew00AqsqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyldBIKFs9yaQTz9yrcA%2BrVkOogLSkhqSRwPv4EH4SnGX59Xyt2kUnCL4HogmX%2BC%2FFhDQuwSuPjJa3BavO6qBPnRBx6IXbXcLtoyhwwAy0ys%2F%2FOsq%2FExv1nyxz8iHfquD7FJzFTPxJO4Ogf1piVRE%2FB9ajRGyRLlSwSd6XVSdvrFqi%2Bvf3FISTsiZ172hyLcbAZ9ez%2BmwBR85A5Pf8ApkSr1631l5rEuM1wwQ6WkwR1mL9EUZSCX2LwxfFJzP3QJvgeLRUBgJbb7SrLgLOl%2F8R%2FL9eBDRDDUm9ac22XVsJhGpBmV4KUi5QEa70txuGvMvF4zIyj0Ou5MS8TJZBqxfajbWkIrVY2neVPU%2F4zAbe8c3AfEckZLOstqZ5Rb4pHnzFKZG8tykptL61cJriLST6nuKhyNuiq43mjdudJGh%2B2FaiDqKBOrZIE6f5zIsol%2BlM39GdFqAWysp%2FCUFQupFTEjOMUolwbiVTd2IutGYQOprtLiFvk6TftaS38ilWWXBhnUIkFAuvpfxiB%2ByGdHu8brhFfLD21gER2QXnXmmMy86r6%2BmBdAA7hFUn%2BelTy1ABn6Gs4QUz%2Ff2ADES0kCSjLV2kQFaO1DpasYgbe652ZyqM70wWz4vldXeadjkzZ5yaqZ4icF1QGvqbFMN6%2BoL0GOqUBC6pyTXNRWkOk0GDAZoMuGRKn9leXLMbXMsAeQZLeorYOIFAE0yqBOhIMI4tFNKHuDK9l2WfGyWPvPMEImcuZfCPHzc4qK5P9engg3Qnf4%2BHRfGzC1xFuZVtlqo9GoZbbH2RTbBx0FlFD8PyyH9feyyIXGD%2BcZS%2BAm1XuxZCcyqNq%2Bp6Z1CZ%2FNOHit5uUpkArqjMEQqFZoVlgzbcNiFZLdkySrKn4&X-Amz-Signature=6696008ffe721607af473da835b4b23d3afddd3937de1f82e2e8506b90b87b60&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI2STFDG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4eABMU9ywE9%2Bs6ufBZKQrM3fAOnHXPjw6ItdRu6vJ0gIgGsNbMMKIy8Y%2F%2BMgKbOw4mbRiQaSrUd%2FK5SSiew00AqsqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyldBIKFs9yaQTz9yrcA%2BrVkOogLSkhqSRwPv4EH4SnGX59Xyt2kUnCL4HogmX%2BC%2FFhDQuwSuPjJa3BavO6qBPnRBx6IXbXcLtoyhwwAy0ys%2F%2FOsq%2FExv1nyxz8iHfquD7FJzFTPxJO4Ogf1piVRE%2FB9ajRGyRLlSwSd6XVSdvrFqi%2Bvf3FISTsiZ172hyLcbAZ9ez%2BmwBR85A5Pf8ApkSr1631l5rEuM1wwQ6WkwR1mL9EUZSCX2LwxfFJzP3QJvgeLRUBgJbb7SrLgLOl%2F8R%2FL9eBDRDDUm9ac22XVsJhGpBmV4KUi5QEa70txuGvMvF4zIyj0Ou5MS8TJZBqxfajbWkIrVY2neVPU%2F4zAbe8c3AfEckZLOstqZ5Rb4pHnzFKZG8tykptL61cJriLST6nuKhyNuiq43mjdudJGh%2B2FaiDqKBOrZIE6f5zIsol%2BlM39GdFqAWysp%2FCUFQupFTEjOMUolwbiVTd2IutGYQOprtLiFvk6TftaS38ilWWXBhnUIkFAuvpfxiB%2ByGdHu8brhFfLD21gER2QXnXmmMy86r6%2BmBdAA7hFUn%2BelTy1ABn6Gs4QUz%2Ff2ADES0kCSjLV2kQFaO1DpasYgbe652ZyqM70wWz4vldXeadjkzZ5yaqZ4icF1QGvqbFMN6%2BoL0GOqUBC6pyTXNRWkOk0GDAZoMuGRKn9leXLMbXMsAeQZLeorYOIFAE0yqBOhIMI4tFNKHuDK9l2WfGyWPvPMEImcuZfCPHzc4qK5P9engg3Qnf4%2BHRfGzC1xFuZVtlqo9GoZbbH2RTbBx0FlFD8PyyH9feyyIXGD%2BcZS%2BAm1XuxZCcyqNq%2Bp6Z1CZ%2FNOHit5uUpkArqjMEQqFZoVlgzbcNiFZLdkySrKn4&X-Amz-Signature=1c7037154f2b2b4017522d6c3908e2be011c02109a131ceea77fa8c7515c98bd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI2STFDG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4eABMU9ywE9%2Bs6ufBZKQrM3fAOnHXPjw6ItdRu6vJ0gIgGsNbMMKIy8Y%2F%2BMgKbOw4mbRiQaSrUd%2FK5SSiew00AqsqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyldBIKFs9yaQTz9yrcA%2BrVkOogLSkhqSRwPv4EH4SnGX59Xyt2kUnCL4HogmX%2BC%2FFhDQuwSuPjJa3BavO6qBPnRBx6IXbXcLtoyhwwAy0ys%2F%2FOsq%2FExv1nyxz8iHfquD7FJzFTPxJO4Ogf1piVRE%2FB9ajRGyRLlSwSd6XVSdvrFqi%2Bvf3FISTsiZ172hyLcbAZ9ez%2BmwBR85A5Pf8ApkSr1631l5rEuM1wwQ6WkwR1mL9EUZSCX2LwxfFJzP3QJvgeLRUBgJbb7SrLgLOl%2F8R%2FL9eBDRDDUm9ac22XVsJhGpBmV4KUi5QEa70txuGvMvF4zIyj0Ou5MS8TJZBqxfajbWkIrVY2neVPU%2F4zAbe8c3AfEckZLOstqZ5Rb4pHnzFKZG8tykptL61cJriLST6nuKhyNuiq43mjdudJGh%2B2FaiDqKBOrZIE6f5zIsol%2BlM39GdFqAWysp%2FCUFQupFTEjOMUolwbiVTd2IutGYQOprtLiFvk6TftaS38ilWWXBhnUIkFAuvpfxiB%2ByGdHu8brhFfLD21gER2QXnXmmMy86r6%2BmBdAA7hFUn%2BelTy1ABn6Gs4QUz%2Ff2ADES0kCSjLV2kQFaO1DpasYgbe652ZyqM70wWz4vldXeadjkzZ5yaqZ4icF1QGvqbFMN6%2BoL0GOqUBC6pyTXNRWkOk0GDAZoMuGRKn9leXLMbXMsAeQZLeorYOIFAE0yqBOhIMI4tFNKHuDK9l2WfGyWPvPMEImcuZfCPHzc4qK5P9engg3Qnf4%2BHRfGzC1xFuZVtlqo9GoZbbH2RTbBx0FlFD8PyyH9feyyIXGD%2BcZS%2BAm1XuxZCcyqNq%2Bp6Z1CZ%2FNOHit5uUpkArqjMEQqFZoVlgzbcNiFZLdkySrKn4&X-Amz-Signature=e20d2d1d42ad5c47b3b94ab115f3979f1202b579883199ccf4319206aeb5e7c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI2STFDG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4eABMU9ywE9%2Bs6ufBZKQrM3fAOnHXPjw6ItdRu6vJ0gIgGsNbMMKIy8Y%2F%2BMgKbOw4mbRiQaSrUd%2FK5SSiew00AqsqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyldBIKFs9yaQTz9yrcA%2BrVkOogLSkhqSRwPv4EH4SnGX59Xyt2kUnCL4HogmX%2BC%2FFhDQuwSuPjJa3BavO6qBPnRBx6IXbXcLtoyhwwAy0ys%2F%2FOsq%2FExv1nyxz8iHfquD7FJzFTPxJO4Ogf1piVRE%2FB9ajRGyRLlSwSd6XVSdvrFqi%2Bvf3FISTsiZ172hyLcbAZ9ez%2BmwBR85A5Pf8ApkSr1631l5rEuM1wwQ6WkwR1mL9EUZSCX2LwxfFJzP3QJvgeLRUBgJbb7SrLgLOl%2F8R%2FL9eBDRDDUm9ac22XVsJhGpBmV4KUi5QEa70txuGvMvF4zIyj0Ou5MS8TJZBqxfajbWkIrVY2neVPU%2F4zAbe8c3AfEckZLOstqZ5Rb4pHnzFKZG8tykptL61cJriLST6nuKhyNuiq43mjdudJGh%2B2FaiDqKBOrZIE6f5zIsol%2BlM39GdFqAWysp%2FCUFQupFTEjOMUolwbiVTd2IutGYQOprtLiFvk6TftaS38ilWWXBhnUIkFAuvpfxiB%2ByGdHu8brhFfLD21gER2QXnXmmMy86r6%2BmBdAA7hFUn%2BelTy1ABn6Gs4QUz%2Ff2ADES0kCSjLV2kQFaO1DpasYgbe652ZyqM70wWz4vldXeadjkzZ5yaqZ4icF1QGvqbFMN6%2BoL0GOqUBC6pyTXNRWkOk0GDAZoMuGRKn9leXLMbXMsAeQZLeorYOIFAE0yqBOhIMI4tFNKHuDK9l2WfGyWPvPMEImcuZfCPHzc4qK5P9engg3Qnf4%2BHRfGzC1xFuZVtlqo9GoZbbH2RTbBx0FlFD8PyyH9feyyIXGD%2BcZS%2BAm1XuxZCcyqNq%2Bp6Z1CZ%2FNOHit5uUpkArqjMEQqFZoVlgzbcNiFZLdkySrKn4&X-Amz-Signature=5b97048357b5088d324fe7ba159af1190606c24cfa0d5a8dee07f827c438af8e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI2STFDG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4eABMU9ywE9%2Bs6ufBZKQrM3fAOnHXPjw6ItdRu6vJ0gIgGsNbMMKIy8Y%2F%2BMgKbOw4mbRiQaSrUd%2FK5SSiew00AqsqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyldBIKFs9yaQTz9yrcA%2BrVkOogLSkhqSRwPv4EH4SnGX59Xyt2kUnCL4HogmX%2BC%2FFhDQuwSuPjJa3BavO6qBPnRBx6IXbXcLtoyhwwAy0ys%2F%2FOsq%2FExv1nyxz8iHfquD7FJzFTPxJO4Ogf1piVRE%2FB9ajRGyRLlSwSd6XVSdvrFqi%2Bvf3FISTsiZ172hyLcbAZ9ez%2BmwBR85A5Pf8ApkSr1631l5rEuM1wwQ6WkwR1mL9EUZSCX2LwxfFJzP3QJvgeLRUBgJbb7SrLgLOl%2F8R%2FL9eBDRDDUm9ac22XVsJhGpBmV4KUi5QEa70txuGvMvF4zIyj0Ou5MS8TJZBqxfajbWkIrVY2neVPU%2F4zAbe8c3AfEckZLOstqZ5Rb4pHnzFKZG8tykptL61cJriLST6nuKhyNuiq43mjdudJGh%2B2FaiDqKBOrZIE6f5zIsol%2BlM39GdFqAWysp%2FCUFQupFTEjOMUolwbiVTd2IutGYQOprtLiFvk6TftaS38ilWWXBhnUIkFAuvpfxiB%2ByGdHu8brhFfLD21gER2QXnXmmMy86r6%2BmBdAA7hFUn%2BelTy1ABn6Gs4QUz%2Ff2ADES0kCSjLV2kQFaO1DpasYgbe652ZyqM70wWz4vldXeadjkzZ5yaqZ4icF1QGvqbFMN6%2BoL0GOqUBC6pyTXNRWkOk0GDAZoMuGRKn9leXLMbXMsAeQZLeorYOIFAE0yqBOhIMI4tFNKHuDK9l2WfGyWPvPMEImcuZfCPHzc4qK5P9engg3Qnf4%2BHRfGzC1xFuZVtlqo9GoZbbH2RTbBx0FlFD8PyyH9feyyIXGD%2BcZS%2BAm1XuxZCcyqNq%2Bp6Z1CZ%2FNOHit5uUpkArqjMEQqFZoVlgzbcNiFZLdkySrKn4&X-Amz-Signature=8996a092a1b8e19243f3fd05b9342913808ea6403c34317395e4c8f40b3d716b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
