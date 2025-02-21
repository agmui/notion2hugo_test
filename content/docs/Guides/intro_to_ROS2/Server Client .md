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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKFIOAHJ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeTiG05NpbeAqLTjDRYoGNxqlUe8cE3nE9HGNZZVMeMwIhANT4Wyw%2BApeme8ZMPIa%2FnAZvcPKP3PyCpaT1rJlmf8HOKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEHb09xFL0knd3R9Aq3AMT3I%2Bs43uxNMuJRThfPi73ZNLkNwyz6EH9j4%2Fdr%2ByKw6sxYC%2FlviJhKVzsb1nUimu%2BI%2BK%2FdTzbZ1I%2FgMQceLXNd42r0QVLqaNjeOUrCqpx7PNJc2HQnbmNqfMTeHxdRw8393ECB0wezqsJXSZNGluC4t2g0I3rxOJPl87j35IeNIdLcvZQnT5njn0RIEuRlP1SLGhjUduRjFCzWKE2bCb3G%2FtTENPXyZiJvhyzLP7u6BdUGosIw4H3y7VwvukkFPoyOJOw9%2B%2F%2BnXpHhEjPqfK7WzQpNTKAH73PyFsBnHCvch%2BkZpf%2FZ8IIb1%2FDtSTzAVHVDCYD37QClYuiLKdB1ahV9wrxGgfWZy%2B7%2BPFn%2Fm1tsIhZVfto7698y2t9nlaT5X22msfgMlj%2BMLuINvdsfJRdNLmpByOQsP1%2FZx50DF7T%2B7E1Z2HW733E56SBXC%2FyGfTyOP%2B7jxXW7gxF7YbnyVlsQpa8gq8KZ6Qhng%2BdnhtwDeX9VJ8ZkBUY5ZV8E7jwwGwDXqVg9xIUROlV4jKKzwgjeolsSraQ5aVNDNGzp3TRCYu2COn06N39Bd6%2Bd8GA8hvfde4OzlqFEWaAceJn2RGSCfladou7g013ZnJPM9DpgTVfbX7uZIS%2FSoir5zDGmeG9BjqkARfUcE3zpHLRxj2JRZo1%2F3LJM407VOwNmiQxMtteGTpUfYOI%2F0sTjYxpY7EAvSBWaxE5bB2fTYO%2FHHM366mQkfX6VJkcusNDLXAeZKNWZM9nQe3A2InDyju0MAlM19NBoNG%2F1QReiwv0G9f%2Bm1FhqRB33ickpI12YHRezZ6QIdFmc%2BNExZyi45Woa0y%2BD5KqZlTy0aYqCTQLM3iUFcj2JHePQsG3&X-Amz-Signature=aecfa52169c05314dd7bc839281c22cbafc704e104e1b3acb47d48a6dcd007bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKFIOAHJ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeTiG05NpbeAqLTjDRYoGNxqlUe8cE3nE9HGNZZVMeMwIhANT4Wyw%2BApeme8ZMPIa%2FnAZvcPKP3PyCpaT1rJlmf8HOKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEHb09xFL0knd3R9Aq3AMT3I%2Bs43uxNMuJRThfPi73ZNLkNwyz6EH9j4%2Fdr%2ByKw6sxYC%2FlviJhKVzsb1nUimu%2BI%2BK%2FdTzbZ1I%2FgMQceLXNd42r0QVLqaNjeOUrCqpx7PNJc2HQnbmNqfMTeHxdRw8393ECB0wezqsJXSZNGluC4t2g0I3rxOJPl87j35IeNIdLcvZQnT5njn0RIEuRlP1SLGhjUduRjFCzWKE2bCb3G%2FtTENPXyZiJvhyzLP7u6BdUGosIw4H3y7VwvukkFPoyOJOw9%2B%2F%2BnXpHhEjPqfK7WzQpNTKAH73PyFsBnHCvch%2BkZpf%2FZ8IIb1%2FDtSTzAVHVDCYD37QClYuiLKdB1ahV9wrxGgfWZy%2B7%2BPFn%2Fm1tsIhZVfto7698y2t9nlaT5X22msfgMlj%2BMLuINvdsfJRdNLmpByOQsP1%2FZx50DF7T%2B7E1Z2HW733E56SBXC%2FyGfTyOP%2B7jxXW7gxF7YbnyVlsQpa8gq8KZ6Qhng%2BdnhtwDeX9VJ8ZkBUY5ZV8E7jwwGwDXqVg9xIUROlV4jKKzwgjeolsSraQ5aVNDNGzp3TRCYu2COn06N39Bd6%2Bd8GA8hvfde4OzlqFEWaAceJn2RGSCfladou7g013ZnJPM9DpgTVfbX7uZIS%2FSoir5zDGmeG9BjqkARfUcE3zpHLRxj2JRZo1%2F3LJM407VOwNmiQxMtteGTpUfYOI%2F0sTjYxpY7EAvSBWaxE5bB2fTYO%2FHHM366mQkfX6VJkcusNDLXAeZKNWZM9nQe3A2InDyju0MAlM19NBoNG%2F1QReiwv0G9f%2Bm1FhqRB33ickpI12YHRezZ6QIdFmc%2BNExZyi45Woa0y%2BD5KqZlTy0aYqCTQLM3iUFcj2JHePQsG3&X-Amz-Signature=da2d7ace18a30235533b23d5b84f78b2846009a1fba7111e0d306dc82691a66c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKFIOAHJ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeTiG05NpbeAqLTjDRYoGNxqlUe8cE3nE9HGNZZVMeMwIhANT4Wyw%2BApeme8ZMPIa%2FnAZvcPKP3PyCpaT1rJlmf8HOKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEHb09xFL0knd3R9Aq3AMT3I%2Bs43uxNMuJRThfPi73ZNLkNwyz6EH9j4%2Fdr%2ByKw6sxYC%2FlviJhKVzsb1nUimu%2BI%2BK%2FdTzbZ1I%2FgMQceLXNd42r0QVLqaNjeOUrCqpx7PNJc2HQnbmNqfMTeHxdRw8393ECB0wezqsJXSZNGluC4t2g0I3rxOJPl87j35IeNIdLcvZQnT5njn0RIEuRlP1SLGhjUduRjFCzWKE2bCb3G%2FtTENPXyZiJvhyzLP7u6BdUGosIw4H3y7VwvukkFPoyOJOw9%2B%2F%2BnXpHhEjPqfK7WzQpNTKAH73PyFsBnHCvch%2BkZpf%2FZ8IIb1%2FDtSTzAVHVDCYD37QClYuiLKdB1ahV9wrxGgfWZy%2B7%2BPFn%2Fm1tsIhZVfto7698y2t9nlaT5X22msfgMlj%2BMLuINvdsfJRdNLmpByOQsP1%2FZx50DF7T%2B7E1Z2HW733E56SBXC%2FyGfTyOP%2B7jxXW7gxF7YbnyVlsQpa8gq8KZ6Qhng%2BdnhtwDeX9VJ8ZkBUY5ZV8E7jwwGwDXqVg9xIUROlV4jKKzwgjeolsSraQ5aVNDNGzp3TRCYu2COn06N39Bd6%2Bd8GA8hvfde4OzlqFEWaAceJn2RGSCfladou7g013ZnJPM9DpgTVfbX7uZIS%2FSoir5zDGmeG9BjqkARfUcE3zpHLRxj2JRZo1%2F3LJM407VOwNmiQxMtteGTpUfYOI%2F0sTjYxpY7EAvSBWaxE5bB2fTYO%2FHHM366mQkfX6VJkcusNDLXAeZKNWZM9nQe3A2InDyju0MAlM19NBoNG%2F1QReiwv0G9f%2Bm1FhqRB33ickpI12YHRezZ6QIdFmc%2BNExZyi45Woa0y%2BD5KqZlTy0aYqCTQLM3iUFcj2JHePQsG3&X-Amz-Signature=a5397d6ccffa2bd7ebf55cde8c63bd21f9eaeedbe2e33f95224a08de912b0274&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKFIOAHJ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeTiG05NpbeAqLTjDRYoGNxqlUe8cE3nE9HGNZZVMeMwIhANT4Wyw%2BApeme8ZMPIa%2FnAZvcPKP3PyCpaT1rJlmf8HOKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEHb09xFL0knd3R9Aq3AMT3I%2Bs43uxNMuJRThfPi73ZNLkNwyz6EH9j4%2Fdr%2ByKw6sxYC%2FlviJhKVzsb1nUimu%2BI%2BK%2FdTzbZ1I%2FgMQceLXNd42r0QVLqaNjeOUrCqpx7PNJc2HQnbmNqfMTeHxdRw8393ECB0wezqsJXSZNGluC4t2g0I3rxOJPl87j35IeNIdLcvZQnT5njn0RIEuRlP1SLGhjUduRjFCzWKE2bCb3G%2FtTENPXyZiJvhyzLP7u6BdUGosIw4H3y7VwvukkFPoyOJOw9%2B%2F%2BnXpHhEjPqfK7WzQpNTKAH73PyFsBnHCvch%2BkZpf%2FZ8IIb1%2FDtSTzAVHVDCYD37QClYuiLKdB1ahV9wrxGgfWZy%2B7%2BPFn%2Fm1tsIhZVfto7698y2t9nlaT5X22msfgMlj%2BMLuINvdsfJRdNLmpByOQsP1%2FZx50DF7T%2B7E1Z2HW733E56SBXC%2FyGfTyOP%2B7jxXW7gxF7YbnyVlsQpa8gq8KZ6Qhng%2BdnhtwDeX9VJ8ZkBUY5ZV8E7jwwGwDXqVg9xIUROlV4jKKzwgjeolsSraQ5aVNDNGzp3TRCYu2COn06N39Bd6%2Bd8GA8hvfde4OzlqFEWaAceJn2RGSCfladou7g013ZnJPM9DpgTVfbX7uZIS%2FSoir5zDGmeG9BjqkARfUcE3zpHLRxj2JRZo1%2F3LJM407VOwNmiQxMtteGTpUfYOI%2F0sTjYxpY7EAvSBWaxE5bB2fTYO%2FHHM366mQkfX6VJkcusNDLXAeZKNWZM9nQe3A2InDyju0MAlM19NBoNG%2F1QReiwv0G9f%2Bm1FhqRB33ickpI12YHRezZ6QIdFmc%2BNExZyi45Woa0y%2BD5KqZlTy0aYqCTQLM3iUFcj2JHePQsG3&X-Amz-Signature=4963f8ca1105ae8b9e5f59b6a63350f7633f6f571552095726d642413a49134a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKFIOAHJ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeTiG05NpbeAqLTjDRYoGNxqlUe8cE3nE9HGNZZVMeMwIhANT4Wyw%2BApeme8ZMPIa%2FnAZvcPKP3PyCpaT1rJlmf8HOKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEHb09xFL0knd3R9Aq3AMT3I%2Bs43uxNMuJRThfPi73ZNLkNwyz6EH9j4%2Fdr%2ByKw6sxYC%2FlviJhKVzsb1nUimu%2BI%2BK%2FdTzbZ1I%2FgMQceLXNd42r0QVLqaNjeOUrCqpx7PNJc2HQnbmNqfMTeHxdRw8393ECB0wezqsJXSZNGluC4t2g0I3rxOJPl87j35IeNIdLcvZQnT5njn0RIEuRlP1SLGhjUduRjFCzWKE2bCb3G%2FtTENPXyZiJvhyzLP7u6BdUGosIw4H3y7VwvukkFPoyOJOw9%2B%2F%2BnXpHhEjPqfK7WzQpNTKAH73PyFsBnHCvch%2BkZpf%2FZ8IIb1%2FDtSTzAVHVDCYD37QClYuiLKdB1ahV9wrxGgfWZy%2B7%2BPFn%2Fm1tsIhZVfto7698y2t9nlaT5X22msfgMlj%2BMLuINvdsfJRdNLmpByOQsP1%2FZx50DF7T%2B7E1Z2HW733E56SBXC%2FyGfTyOP%2B7jxXW7gxF7YbnyVlsQpa8gq8KZ6Qhng%2BdnhtwDeX9VJ8ZkBUY5ZV8E7jwwGwDXqVg9xIUROlV4jKKzwgjeolsSraQ5aVNDNGzp3TRCYu2COn06N39Bd6%2Bd8GA8hvfde4OzlqFEWaAceJn2RGSCfladou7g013ZnJPM9DpgTVfbX7uZIS%2FSoir5zDGmeG9BjqkARfUcE3zpHLRxj2JRZo1%2F3LJM407VOwNmiQxMtteGTpUfYOI%2F0sTjYxpY7EAvSBWaxE5bB2fTYO%2FHHM366mQkfX6VJkcusNDLXAeZKNWZM9nQe3A2InDyju0MAlM19NBoNG%2F1QReiwv0G9f%2Bm1FhqRB33ickpI12YHRezZ6QIdFmc%2BNExZyi45Woa0y%2BD5KqZlTy0aYqCTQLM3iUFcj2JHePQsG3&X-Amz-Signature=ad2dbefd59a00f7b50757dbf4fd27cf2f9c69b9619a5c3b6cab0c8482c0beb8b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
