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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPF72XZI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDuTZfgm2t06p8jOeQOBXyeTMY%2F6PO%2F0oCfirtP61siAAIgSet3hdySlPwLJ4WCxQZebCwLtusqj%2FuK5mv6TaawQBcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDP6m7rvqXJ53dsoOqSrcA4HotrAMg%2BY3ccbSG01X3bjDTXmVKaz4AdpdKbiecgxKOkkQ6FxrFD9XTmSuNRu%2Fdl2NLnlGtijPA0DnWUOqaHnc4yx9dWeWKVuyMlVxhgyn0LuCpgcPLMyyEiK7NydH%2BiDWj7ruSWik2PfYpl9I5U5BFAnWSTtdVMNjBXRy7g%2FgCl%2BHeHdBziZvYe1RuFxsd9QOi2lm979aDO1Wm7SS3QFY%2FgP6X8lQhiCaYZ5ZiZhV94lwtut%2F1Bby4c3YR0TjiVZbzpS4D9bZ9lduE9yqWntcURiK%2Fjiayk4LeFs55jEGN9LLT%2BImz6Z10GhnmssVOp3S0vOu9wAmpSmYCrURoLzsJqLd%2BimKiFUiFyU03VCsTn2Bp1w9A6GdBym0JQEkftZkBEDggxZsFrqJ8AFn0E%2F93zcbSgZiFdyj%2F0idy4vu%2FUBVHRkxiC0vf7e%2FaEDy7fiIIzZmEne%2FNQFtnqmagzkNiJrB182Su4mnMA7I%2BXjbI%2BNDE%2F%2BmlfTYqAP5FRx7p095SHNHW8dNmpqS%2BjTCEtY%2BClEVUIlQXvccIsV5lFlBDyG4ZJSzMI43UDKbIpodhYHMTx1wXiDdc7TO9GGi6CIm9zubHlu%2FCAtHs5KvAa5EbfsAcetR366HUZ2QMNHdl8QGOqUBKrVt9Jmaxjyc%2B4PXj86GWasZrjOAFsfTxjgCjPhdFWtiP79a8uygZ7NOEaPgY5HGm34k%2BnRsyyYg6cCH4HCT4BJibevsm3aKg5mWGDeNwvSbOuTVdCWk1OkRifi2JCaBKtbja0c12zxIV%2FDqQHkW1OttBWF%2FgD0YomWcKjWWi9HgJ0qxHTJMWqZRZes1dOKjhv47S3fxRUh8tabxTnMSXv8wjMlF&X-Amz-Signature=c6233e874a6d1d6ca8de9f404ae164e2e8ecc9c8044be3ead0fccd77a2b17313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPF72XZI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDuTZfgm2t06p8jOeQOBXyeTMY%2F6PO%2F0oCfirtP61siAAIgSet3hdySlPwLJ4WCxQZebCwLtusqj%2FuK5mv6TaawQBcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDP6m7rvqXJ53dsoOqSrcA4HotrAMg%2BY3ccbSG01X3bjDTXmVKaz4AdpdKbiecgxKOkkQ6FxrFD9XTmSuNRu%2Fdl2NLnlGtijPA0DnWUOqaHnc4yx9dWeWKVuyMlVxhgyn0LuCpgcPLMyyEiK7NydH%2BiDWj7ruSWik2PfYpl9I5U5BFAnWSTtdVMNjBXRy7g%2FgCl%2BHeHdBziZvYe1RuFxsd9QOi2lm979aDO1Wm7SS3QFY%2FgP6X8lQhiCaYZ5ZiZhV94lwtut%2F1Bby4c3YR0TjiVZbzpS4D9bZ9lduE9yqWntcURiK%2Fjiayk4LeFs55jEGN9LLT%2BImz6Z10GhnmssVOp3S0vOu9wAmpSmYCrURoLzsJqLd%2BimKiFUiFyU03VCsTn2Bp1w9A6GdBym0JQEkftZkBEDggxZsFrqJ8AFn0E%2F93zcbSgZiFdyj%2F0idy4vu%2FUBVHRkxiC0vf7e%2FaEDy7fiIIzZmEne%2FNQFtnqmagzkNiJrB182Su4mnMA7I%2BXjbI%2BNDE%2F%2BmlfTYqAP5FRx7p095SHNHW8dNmpqS%2BjTCEtY%2BClEVUIlQXvccIsV5lFlBDyG4ZJSzMI43UDKbIpodhYHMTx1wXiDdc7TO9GGi6CIm9zubHlu%2FCAtHs5KvAa5EbfsAcetR366HUZ2QMNHdl8QGOqUBKrVt9Jmaxjyc%2B4PXj86GWasZrjOAFsfTxjgCjPhdFWtiP79a8uygZ7NOEaPgY5HGm34k%2BnRsyyYg6cCH4HCT4BJibevsm3aKg5mWGDeNwvSbOuTVdCWk1OkRifi2JCaBKtbja0c12zxIV%2FDqQHkW1OttBWF%2FgD0YomWcKjWWi9HgJ0qxHTJMWqZRZes1dOKjhv47S3fxRUh8tabxTnMSXv8wjMlF&X-Amz-Signature=ac3857525e5ae814105b0c62af90666269aa5925e94b3da907e8f3e5641579ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPF72XZI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDuTZfgm2t06p8jOeQOBXyeTMY%2F6PO%2F0oCfirtP61siAAIgSet3hdySlPwLJ4WCxQZebCwLtusqj%2FuK5mv6TaawQBcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDP6m7rvqXJ53dsoOqSrcA4HotrAMg%2BY3ccbSG01X3bjDTXmVKaz4AdpdKbiecgxKOkkQ6FxrFD9XTmSuNRu%2Fdl2NLnlGtijPA0DnWUOqaHnc4yx9dWeWKVuyMlVxhgyn0LuCpgcPLMyyEiK7NydH%2BiDWj7ruSWik2PfYpl9I5U5BFAnWSTtdVMNjBXRy7g%2FgCl%2BHeHdBziZvYe1RuFxsd9QOi2lm979aDO1Wm7SS3QFY%2FgP6X8lQhiCaYZ5ZiZhV94lwtut%2F1Bby4c3YR0TjiVZbzpS4D9bZ9lduE9yqWntcURiK%2Fjiayk4LeFs55jEGN9LLT%2BImz6Z10GhnmssVOp3S0vOu9wAmpSmYCrURoLzsJqLd%2BimKiFUiFyU03VCsTn2Bp1w9A6GdBym0JQEkftZkBEDggxZsFrqJ8AFn0E%2F93zcbSgZiFdyj%2F0idy4vu%2FUBVHRkxiC0vf7e%2FaEDy7fiIIzZmEne%2FNQFtnqmagzkNiJrB182Su4mnMA7I%2BXjbI%2BNDE%2F%2BmlfTYqAP5FRx7p095SHNHW8dNmpqS%2BjTCEtY%2BClEVUIlQXvccIsV5lFlBDyG4ZJSzMI43UDKbIpodhYHMTx1wXiDdc7TO9GGi6CIm9zubHlu%2FCAtHs5KvAa5EbfsAcetR366HUZ2QMNHdl8QGOqUBKrVt9Jmaxjyc%2B4PXj86GWasZrjOAFsfTxjgCjPhdFWtiP79a8uygZ7NOEaPgY5HGm34k%2BnRsyyYg6cCH4HCT4BJibevsm3aKg5mWGDeNwvSbOuTVdCWk1OkRifi2JCaBKtbja0c12zxIV%2FDqQHkW1OttBWF%2FgD0YomWcKjWWi9HgJ0qxHTJMWqZRZes1dOKjhv47S3fxRUh8tabxTnMSXv8wjMlF&X-Amz-Signature=c7f119907d3f18977c0cea8520fb83334e5599923dcea94292de66dbdb6ec681&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPF72XZI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDuTZfgm2t06p8jOeQOBXyeTMY%2F6PO%2F0oCfirtP61siAAIgSet3hdySlPwLJ4WCxQZebCwLtusqj%2FuK5mv6TaawQBcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDP6m7rvqXJ53dsoOqSrcA4HotrAMg%2BY3ccbSG01X3bjDTXmVKaz4AdpdKbiecgxKOkkQ6FxrFD9XTmSuNRu%2Fdl2NLnlGtijPA0DnWUOqaHnc4yx9dWeWKVuyMlVxhgyn0LuCpgcPLMyyEiK7NydH%2BiDWj7ruSWik2PfYpl9I5U5BFAnWSTtdVMNjBXRy7g%2FgCl%2BHeHdBziZvYe1RuFxsd9QOi2lm979aDO1Wm7SS3QFY%2FgP6X8lQhiCaYZ5ZiZhV94lwtut%2F1Bby4c3YR0TjiVZbzpS4D9bZ9lduE9yqWntcURiK%2Fjiayk4LeFs55jEGN9LLT%2BImz6Z10GhnmssVOp3S0vOu9wAmpSmYCrURoLzsJqLd%2BimKiFUiFyU03VCsTn2Bp1w9A6GdBym0JQEkftZkBEDggxZsFrqJ8AFn0E%2F93zcbSgZiFdyj%2F0idy4vu%2FUBVHRkxiC0vf7e%2FaEDy7fiIIzZmEne%2FNQFtnqmagzkNiJrB182Su4mnMA7I%2BXjbI%2BNDE%2F%2BmlfTYqAP5FRx7p095SHNHW8dNmpqS%2BjTCEtY%2BClEVUIlQXvccIsV5lFlBDyG4ZJSzMI43UDKbIpodhYHMTx1wXiDdc7TO9GGi6CIm9zubHlu%2FCAtHs5KvAa5EbfsAcetR366HUZ2QMNHdl8QGOqUBKrVt9Jmaxjyc%2B4PXj86GWasZrjOAFsfTxjgCjPhdFWtiP79a8uygZ7NOEaPgY5HGm34k%2BnRsyyYg6cCH4HCT4BJibevsm3aKg5mWGDeNwvSbOuTVdCWk1OkRifi2JCaBKtbja0c12zxIV%2FDqQHkW1OttBWF%2FgD0YomWcKjWWi9HgJ0qxHTJMWqZRZes1dOKjhv47S3fxRUh8tabxTnMSXv8wjMlF&X-Amz-Signature=daf62651dcec19fa5b24c6088ec0a1854b2518a947fd28cb7760b1bf6786aca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPF72XZI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDuTZfgm2t06p8jOeQOBXyeTMY%2F6PO%2F0oCfirtP61siAAIgSet3hdySlPwLJ4WCxQZebCwLtusqj%2FuK5mv6TaawQBcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDP6m7rvqXJ53dsoOqSrcA4HotrAMg%2BY3ccbSG01X3bjDTXmVKaz4AdpdKbiecgxKOkkQ6FxrFD9XTmSuNRu%2Fdl2NLnlGtijPA0DnWUOqaHnc4yx9dWeWKVuyMlVxhgyn0LuCpgcPLMyyEiK7NydH%2BiDWj7ruSWik2PfYpl9I5U5BFAnWSTtdVMNjBXRy7g%2FgCl%2BHeHdBziZvYe1RuFxsd9QOi2lm979aDO1Wm7SS3QFY%2FgP6X8lQhiCaYZ5ZiZhV94lwtut%2F1Bby4c3YR0TjiVZbzpS4D9bZ9lduE9yqWntcURiK%2Fjiayk4LeFs55jEGN9LLT%2BImz6Z10GhnmssVOp3S0vOu9wAmpSmYCrURoLzsJqLd%2BimKiFUiFyU03VCsTn2Bp1w9A6GdBym0JQEkftZkBEDggxZsFrqJ8AFn0E%2F93zcbSgZiFdyj%2F0idy4vu%2FUBVHRkxiC0vf7e%2FaEDy7fiIIzZmEne%2FNQFtnqmagzkNiJrB182Su4mnMA7I%2BXjbI%2BNDE%2F%2BmlfTYqAP5FRx7p095SHNHW8dNmpqS%2BjTCEtY%2BClEVUIlQXvccIsV5lFlBDyG4ZJSzMI43UDKbIpodhYHMTx1wXiDdc7TO9GGi6CIm9zubHlu%2FCAtHs5KvAa5EbfsAcetR366HUZ2QMNHdl8QGOqUBKrVt9Jmaxjyc%2B4PXj86GWasZrjOAFsfTxjgCjPhdFWtiP79a8uygZ7NOEaPgY5HGm34k%2BnRsyyYg6cCH4HCT4BJibevsm3aKg5mWGDeNwvSbOuTVdCWk1OkRifi2JCaBKtbja0c12zxIV%2FDqQHkW1OttBWF%2FgD0YomWcKjWWi9HgJ0qxHTJMWqZRZes1dOKjhv47S3fxRUh8tabxTnMSXv8wjMlF&X-Amz-Signature=1aa48a81228393eb9587aca6e4f04344dfe99c1dfad17e6229fd9f23b7f2b83a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
