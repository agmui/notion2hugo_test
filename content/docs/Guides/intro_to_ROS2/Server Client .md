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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656EKC43S%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4J%2F1cPD2U%2B3nA7tUFRlkl0%2FvSxK0ifwfopOqMY3PhwAiA1L8C%2FByI5Ira5EAR5fk%2FTw9D%2FcJ2SRXtc2V5RGWyhgyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMKxnRGXEJ4Xjd%2B0TWKtwDUQ6gKCcwCNWfjA5Hg2p%2FMRpl3spPXO2nZU6idv1dR%2F%2F6mHS91%2Bwa%2Bg4mt%2BrLtXkr5j46LxceH8RYUomcMFoEaaU5Y1g8UyNZZG3b%2FTUi%2Bm4dmeSFvjuNnJeoUgaKkw4ih1jkQxuTSKKJ9YLgNAokxDZQ0f%2BT3FVL4uZpttDWnNDwC7WGnWanSrU1IWrUVloE2k8mk8dH%2FSuRcH0k7NyDRgkJarQ7Wo7Hyv8XrwV2QLz8s%2BfbZoeBplU7V6VJR1c2w26YBq4NerRLqKoT3zqE00yRLvA3%2FMoPieMPVdrVAldhtzPYQYeKh%2F1Twu35MKeUpmFfTiQrmjPt4W9hzbxmIkmpf7VhqyyvEuZhl7hK5FgjuL1vpWL43JMeV9PtHABhEec8anexhAWTU9%2BrtZ0zd0JriAkEu7QwwJo%2FpgwXMOUPL3%2B%2F8EiFrCMoPVN4W0ZWHHA%2FQ6Waqzi8rkW56v6OuRlGOLYNpzMabSB4PHsfdHAKT28wHr0HeQvFwVlTgKRVnQJNaobcLBxk%2F6rzc7QJ7wnO3TIF%2FzB45RNzaXS3bFNvnkg0apPVc6%2BRD%2F%2B1ebYvnZjdOoEUXJlekqUEN0hgo1b%2F%2F0TxoNv36l%2Fvo96C9yvhsatCpTJrGCOuCEUwr%2F7IvwY6pgHpngzWGUSNuBiknoAAmr2axUOB7TRlVQA5WxYztnKVE7b6zOSXWNDJ3uNVmjBlafYbRwL2jNXbI1ixpSSAmsrQI8XZuP2BRGOV%2FxTbmAmCrIMpk5lsNiBgH3%2FXZIDpfQUBlwxAizu7Q9QJe%2B%2FZphuv50Pek0IDof6LUUJnMF80VIJ%2F2OpMyH3zo6n3J00tMMRgmD5J%2F6rYutXO2sxQ7LVlQjeFriHk&X-Amz-Signature=347c18dad89dd3d65ae7fd7058f0efd93f3411f2ef9e3028fa07249c596c224d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656EKC43S%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4J%2F1cPD2U%2B3nA7tUFRlkl0%2FvSxK0ifwfopOqMY3PhwAiA1L8C%2FByI5Ira5EAR5fk%2FTw9D%2FcJ2SRXtc2V5RGWyhgyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMKxnRGXEJ4Xjd%2B0TWKtwDUQ6gKCcwCNWfjA5Hg2p%2FMRpl3spPXO2nZU6idv1dR%2F%2F6mHS91%2Bwa%2Bg4mt%2BrLtXkr5j46LxceH8RYUomcMFoEaaU5Y1g8UyNZZG3b%2FTUi%2Bm4dmeSFvjuNnJeoUgaKkw4ih1jkQxuTSKKJ9YLgNAokxDZQ0f%2BT3FVL4uZpttDWnNDwC7WGnWanSrU1IWrUVloE2k8mk8dH%2FSuRcH0k7NyDRgkJarQ7Wo7Hyv8XrwV2QLz8s%2BfbZoeBplU7V6VJR1c2w26YBq4NerRLqKoT3zqE00yRLvA3%2FMoPieMPVdrVAldhtzPYQYeKh%2F1Twu35MKeUpmFfTiQrmjPt4W9hzbxmIkmpf7VhqyyvEuZhl7hK5FgjuL1vpWL43JMeV9PtHABhEec8anexhAWTU9%2BrtZ0zd0JriAkEu7QwwJo%2FpgwXMOUPL3%2B%2F8EiFrCMoPVN4W0ZWHHA%2FQ6Waqzi8rkW56v6OuRlGOLYNpzMabSB4PHsfdHAKT28wHr0HeQvFwVlTgKRVnQJNaobcLBxk%2F6rzc7QJ7wnO3TIF%2FzB45RNzaXS3bFNvnkg0apPVc6%2BRD%2F%2B1ebYvnZjdOoEUXJlekqUEN0hgo1b%2F%2F0TxoNv36l%2Fvo96C9yvhsatCpTJrGCOuCEUwr%2F7IvwY6pgHpngzWGUSNuBiknoAAmr2axUOB7TRlVQA5WxYztnKVE7b6zOSXWNDJ3uNVmjBlafYbRwL2jNXbI1ixpSSAmsrQI8XZuP2BRGOV%2FxTbmAmCrIMpk5lsNiBgH3%2FXZIDpfQUBlwxAizu7Q9QJe%2B%2FZphuv50Pek0IDof6LUUJnMF80VIJ%2F2OpMyH3zo6n3J00tMMRgmD5J%2F6rYutXO2sxQ7LVlQjeFriHk&X-Amz-Signature=15cc1abecfd98e519b55565e9be7f18ca064b268f40ea7197091253c7783a058&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656EKC43S%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4J%2F1cPD2U%2B3nA7tUFRlkl0%2FvSxK0ifwfopOqMY3PhwAiA1L8C%2FByI5Ira5EAR5fk%2FTw9D%2FcJ2SRXtc2V5RGWyhgyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMKxnRGXEJ4Xjd%2B0TWKtwDUQ6gKCcwCNWfjA5Hg2p%2FMRpl3spPXO2nZU6idv1dR%2F%2F6mHS91%2Bwa%2Bg4mt%2BrLtXkr5j46LxceH8RYUomcMFoEaaU5Y1g8UyNZZG3b%2FTUi%2Bm4dmeSFvjuNnJeoUgaKkw4ih1jkQxuTSKKJ9YLgNAokxDZQ0f%2BT3FVL4uZpttDWnNDwC7WGnWanSrU1IWrUVloE2k8mk8dH%2FSuRcH0k7NyDRgkJarQ7Wo7Hyv8XrwV2QLz8s%2BfbZoeBplU7V6VJR1c2w26YBq4NerRLqKoT3zqE00yRLvA3%2FMoPieMPVdrVAldhtzPYQYeKh%2F1Twu35MKeUpmFfTiQrmjPt4W9hzbxmIkmpf7VhqyyvEuZhl7hK5FgjuL1vpWL43JMeV9PtHABhEec8anexhAWTU9%2BrtZ0zd0JriAkEu7QwwJo%2FpgwXMOUPL3%2B%2F8EiFrCMoPVN4W0ZWHHA%2FQ6Waqzi8rkW56v6OuRlGOLYNpzMabSB4PHsfdHAKT28wHr0HeQvFwVlTgKRVnQJNaobcLBxk%2F6rzc7QJ7wnO3TIF%2FzB45RNzaXS3bFNvnkg0apPVc6%2BRD%2F%2B1ebYvnZjdOoEUXJlekqUEN0hgo1b%2F%2F0TxoNv36l%2Fvo96C9yvhsatCpTJrGCOuCEUwr%2F7IvwY6pgHpngzWGUSNuBiknoAAmr2axUOB7TRlVQA5WxYztnKVE7b6zOSXWNDJ3uNVmjBlafYbRwL2jNXbI1ixpSSAmsrQI8XZuP2BRGOV%2FxTbmAmCrIMpk5lsNiBgH3%2FXZIDpfQUBlwxAizu7Q9QJe%2B%2FZphuv50Pek0IDof6LUUJnMF80VIJ%2F2OpMyH3zo6n3J00tMMRgmD5J%2F6rYutXO2sxQ7LVlQjeFriHk&X-Amz-Signature=f4ca6f3ec3da0ab219a889648f282f7359a0f30088c6741d93261326bf8bd195&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656EKC43S%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4J%2F1cPD2U%2B3nA7tUFRlkl0%2FvSxK0ifwfopOqMY3PhwAiA1L8C%2FByI5Ira5EAR5fk%2FTw9D%2FcJ2SRXtc2V5RGWyhgyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMKxnRGXEJ4Xjd%2B0TWKtwDUQ6gKCcwCNWfjA5Hg2p%2FMRpl3spPXO2nZU6idv1dR%2F%2F6mHS91%2Bwa%2Bg4mt%2BrLtXkr5j46LxceH8RYUomcMFoEaaU5Y1g8UyNZZG3b%2FTUi%2Bm4dmeSFvjuNnJeoUgaKkw4ih1jkQxuTSKKJ9YLgNAokxDZQ0f%2BT3FVL4uZpttDWnNDwC7WGnWanSrU1IWrUVloE2k8mk8dH%2FSuRcH0k7NyDRgkJarQ7Wo7Hyv8XrwV2QLz8s%2BfbZoeBplU7V6VJR1c2w26YBq4NerRLqKoT3zqE00yRLvA3%2FMoPieMPVdrVAldhtzPYQYeKh%2F1Twu35MKeUpmFfTiQrmjPt4W9hzbxmIkmpf7VhqyyvEuZhl7hK5FgjuL1vpWL43JMeV9PtHABhEec8anexhAWTU9%2BrtZ0zd0JriAkEu7QwwJo%2FpgwXMOUPL3%2B%2F8EiFrCMoPVN4W0ZWHHA%2FQ6Waqzi8rkW56v6OuRlGOLYNpzMabSB4PHsfdHAKT28wHr0HeQvFwVlTgKRVnQJNaobcLBxk%2F6rzc7QJ7wnO3TIF%2FzB45RNzaXS3bFNvnkg0apPVc6%2BRD%2F%2B1ebYvnZjdOoEUXJlekqUEN0hgo1b%2F%2F0TxoNv36l%2Fvo96C9yvhsatCpTJrGCOuCEUwr%2F7IvwY6pgHpngzWGUSNuBiknoAAmr2axUOB7TRlVQA5WxYztnKVE7b6zOSXWNDJ3uNVmjBlafYbRwL2jNXbI1ixpSSAmsrQI8XZuP2BRGOV%2FxTbmAmCrIMpk5lsNiBgH3%2FXZIDpfQUBlwxAizu7Q9QJe%2B%2FZphuv50Pek0IDof6LUUJnMF80VIJ%2F2OpMyH3zo6n3J00tMMRgmD5J%2F6rYutXO2sxQ7LVlQjeFriHk&X-Amz-Signature=7d305f2aae1a691457ccfb09962d05f6bc069bea5156285ed3409bf48962dd93&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656EKC43S%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4J%2F1cPD2U%2B3nA7tUFRlkl0%2FvSxK0ifwfopOqMY3PhwAiA1L8C%2FByI5Ira5EAR5fk%2FTw9D%2FcJ2SRXtc2V5RGWyhgyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMKxnRGXEJ4Xjd%2B0TWKtwDUQ6gKCcwCNWfjA5Hg2p%2FMRpl3spPXO2nZU6idv1dR%2F%2F6mHS91%2Bwa%2Bg4mt%2BrLtXkr5j46LxceH8RYUomcMFoEaaU5Y1g8UyNZZG3b%2FTUi%2Bm4dmeSFvjuNnJeoUgaKkw4ih1jkQxuTSKKJ9YLgNAokxDZQ0f%2BT3FVL4uZpttDWnNDwC7WGnWanSrU1IWrUVloE2k8mk8dH%2FSuRcH0k7NyDRgkJarQ7Wo7Hyv8XrwV2QLz8s%2BfbZoeBplU7V6VJR1c2w26YBq4NerRLqKoT3zqE00yRLvA3%2FMoPieMPVdrVAldhtzPYQYeKh%2F1Twu35MKeUpmFfTiQrmjPt4W9hzbxmIkmpf7VhqyyvEuZhl7hK5FgjuL1vpWL43JMeV9PtHABhEec8anexhAWTU9%2BrtZ0zd0JriAkEu7QwwJo%2FpgwXMOUPL3%2B%2F8EiFrCMoPVN4W0ZWHHA%2FQ6Waqzi8rkW56v6OuRlGOLYNpzMabSB4PHsfdHAKT28wHr0HeQvFwVlTgKRVnQJNaobcLBxk%2F6rzc7QJ7wnO3TIF%2FzB45RNzaXS3bFNvnkg0apPVc6%2BRD%2F%2B1ebYvnZjdOoEUXJlekqUEN0hgo1b%2F%2F0TxoNv36l%2Fvo96C9yvhsatCpTJrGCOuCEUwr%2F7IvwY6pgHpngzWGUSNuBiknoAAmr2axUOB7TRlVQA5WxYztnKVE7b6zOSXWNDJ3uNVmjBlafYbRwL2jNXbI1ixpSSAmsrQI8XZuP2BRGOV%2FxTbmAmCrIMpk5lsNiBgH3%2FXZIDpfQUBlwxAizu7Q9QJe%2B%2FZphuv50Pek0IDof6LUUJnMF80VIJ%2F2OpMyH3zo6n3J00tMMRgmD5J%2F6rYutXO2sxQ7LVlQjeFriHk&X-Amz-Signature=72bd6b220fb734772f0b416ce73113270f66d8ae43b165556fc0f894861f4095&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
