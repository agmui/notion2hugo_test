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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZMHTTTU%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDR1DcsIeq5j5%2BCM9muTIOyDhjt8MlmBQF4W7PW%2Fdyx6gIhAIOGls0kKe1c2%2F9HRueZtJ%2BsSqcF1nyBAO%2Fm2rafv46DKv8DCDUQABoMNjM3NDIzMTgzODA1IgxlLvdCzWe%2B95I7GRIq3AMl5kAW8sW0PBxgzn7WahhSQH0F1xBP9pvvfBNaxxn%2BmzCPb8PRWcuLWazzBHF%2BysmVzQ%2FvU0UW1CtVezy4p6oHUBvDa1m5mQh1%2FRLQKQ74ez3%2Fm6ieL7TGI301JbC1rHk5OQLyXz0cYqG5O3aCFe7dimdb6hJ%2BFlZNyzHsYddRM2c1Jw%2Bty5ysbng7sqQ9iRi62xu8HkcozhNgsAId%2BwWEaCU1Et5lu3bDn5LE4AbUHw%2F5Io%2FE9%2BQC7iMKZnIUBLSL6Twav4Z0craEIA53bHr493bgt%2B35eBzzGbzxenzl5CLSXxOwkS9wMq8hzAQI%2Fa8%2F77Gxflg3XOvEffe9sQmlj2pTt%2BAwWMNI9uLIk2WmFInwFtql4wxFOD3HaffbedE7CN48pnJ7dphse0RZVAwUzPVfcBoopPa%2Foup2cV3u9snuHJ3NdvHxKglEKbqHNPXH5hhlnIN8ucrOuO7qdz5fTqIKfO4drimHpdNElp9BV27DSHRnmC8nhUZck%2FZFqxQTKrFHJesu9oS0i37rhzDglGCD4WtNgkCC4WWvb2DCM4VR0gXw83FlLkIuTC%2FG9RjYCw0DpJkBiMa%2B67%2FPafuN0cj62WJN2pxQFXq4eCjYdb%2F8gHtyt8C%2Bl4lnWDCF6KDDBjqkAb4cMXatJfzGVwsdPaiheEc7BM6zIGyedEGwYBhnWiElE%2BtQrmG7K4IOf2TO7M05VBYeh6s%2FLjnKZYTgyI69KHKkN4BYGywj%2BSqPOfzsONmvoH1qjxh2uN4UTBKesrPXAWOi6lKPDNz26TOZrMzo2ysCbsUiGAf2cF3TeBKgWJ5%2FxSyYkMg5qYCXKto2uYmy%2Ff6n%2BNaPSuPCN20hK1msmfZQcxk%2F&X-Amz-Signature=111b550c5fca58945867027d7c44ea33cce0e01d104b245d94aa314aa120b9c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZMHTTTU%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDR1DcsIeq5j5%2BCM9muTIOyDhjt8MlmBQF4W7PW%2Fdyx6gIhAIOGls0kKe1c2%2F9HRueZtJ%2BsSqcF1nyBAO%2Fm2rafv46DKv8DCDUQABoMNjM3NDIzMTgzODA1IgxlLvdCzWe%2B95I7GRIq3AMl5kAW8sW0PBxgzn7WahhSQH0F1xBP9pvvfBNaxxn%2BmzCPb8PRWcuLWazzBHF%2BysmVzQ%2FvU0UW1CtVezy4p6oHUBvDa1m5mQh1%2FRLQKQ74ez3%2Fm6ieL7TGI301JbC1rHk5OQLyXz0cYqG5O3aCFe7dimdb6hJ%2BFlZNyzHsYddRM2c1Jw%2Bty5ysbng7sqQ9iRi62xu8HkcozhNgsAId%2BwWEaCU1Et5lu3bDn5LE4AbUHw%2F5Io%2FE9%2BQC7iMKZnIUBLSL6Twav4Z0craEIA53bHr493bgt%2B35eBzzGbzxenzl5CLSXxOwkS9wMq8hzAQI%2Fa8%2F77Gxflg3XOvEffe9sQmlj2pTt%2BAwWMNI9uLIk2WmFInwFtql4wxFOD3HaffbedE7CN48pnJ7dphse0RZVAwUzPVfcBoopPa%2Foup2cV3u9snuHJ3NdvHxKglEKbqHNPXH5hhlnIN8ucrOuO7qdz5fTqIKfO4drimHpdNElp9BV27DSHRnmC8nhUZck%2FZFqxQTKrFHJesu9oS0i37rhzDglGCD4WtNgkCC4WWvb2DCM4VR0gXw83FlLkIuTC%2FG9RjYCw0DpJkBiMa%2B67%2FPafuN0cj62WJN2pxQFXq4eCjYdb%2F8gHtyt8C%2Bl4lnWDCF6KDDBjqkAb4cMXatJfzGVwsdPaiheEc7BM6zIGyedEGwYBhnWiElE%2BtQrmG7K4IOf2TO7M05VBYeh6s%2FLjnKZYTgyI69KHKkN4BYGywj%2BSqPOfzsONmvoH1qjxh2uN4UTBKesrPXAWOi6lKPDNz26TOZrMzo2ysCbsUiGAf2cF3TeBKgWJ5%2FxSyYkMg5qYCXKto2uYmy%2Ff6n%2BNaPSuPCN20hK1msmfZQcxk%2F&X-Amz-Signature=8542c141c4f8a8081d6ce5326005c02adce95fb5f6d26a382dd68fc54dddef7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZMHTTTU%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDR1DcsIeq5j5%2BCM9muTIOyDhjt8MlmBQF4W7PW%2Fdyx6gIhAIOGls0kKe1c2%2F9HRueZtJ%2BsSqcF1nyBAO%2Fm2rafv46DKv8DCDUQABoMNjM3NDIzMTgzODA1IgxlLvdCzWe%2B95I7GRIq3AMl5kAW8sW0PBxgzn7WahhSQH0F1xBP9pvvfBNaxxn%2BmzCPb8PRWcuLWazzBHF%2BysmVzQ%2FvU0UW1CtVezy4p6oHUBvDa1m5mQh1%2FRLQKQ74ez3%2Fm6ieL7TGI301JbC1rHk5OQLyXz0cYqG5O3aCFe7dimdb6hJ%2BFlZNyzHsYddRM2c1Jw%2Bty5ysbng7sqQ9iRi62xu8HkcozhNgsAId%2BwWEaCU1Et5lu3bDn5LE4AbUHw%2F5Io%2FE9%2BQC7iMKZnIUBLSL6Twav4Z0craEIA53bHr493bgt%2B35eBzzGbzxenzl5CLSXxOwkS9wMq8hzAQI%2Fa8%2F77Gxflg3XOvEffe9sQmlj2pTt%2BAwWMNI9uLIk2WmFInwFtql4wxFOD3HaffbedE7CN48pnJ7dphse0RZVAwUzPVfcBoopPa%2Foup2cV3u9snuHJ3NdvHxKglEKbqHNPXH5hhlnIN8ucrOuO7qdz5fTqIKfO4drimHpdNElp9BV27DSHRnmC8nhUZck%2FZFqxQTKrFHJesu9oS0i37rhzDglGCD4WtNgkCC4WWvb2DCM4VR0gXw83FlLkIuTC%2FG9RjYCw0DpJkBiMa%2B67%2FPafuN0cj62WJN2pxQFXq4eCjYdb%2F8gHtyt8C%2Bl4lnWDCF6KDDBjqkAb4cMXatJfzGVwsdPaiheEc7BM6zIGyedEGwYBhnWiElE%2BtQrmG7K4IOf2TO7M05VBYeh6s%2FLjnKZYTgyI69KHKkN4BYGywj%2BSqPOfzsONmvoH1qjxh2uN4UTBKesrPXAWOi6lKPDNz26TOZrMzo2ysCbsUiGAf2cF3TeBKgWJ5%2FxSyYkMg5qYCXKto2uYmy%2Ff6n%2BNaPSuPCN20hK1msmfZQcxk%2F&X-Amz-Signature=87edaa7e9b32878eba12024674cc7a928866b4602b71b7e67e64223521d642ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZMHTTTU%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDR1DcsIeq5j5%2BCM9muTIOyDhjt8MlmBQF4W7PW%2Fdyx6gIhAIOGls0kKe1c2%2F9HRueZtJ%2BsSqcF1nyBAO%2Fm2rafv46DKv8DCDUQABoMNjM3NDIzMTgzODA1IgxlLvdCzWe%2B95I7GRIq3AMl5kAW8sW0PBxgzn7WahhSQH0F1xBP9pvvfBNaxxn%2BmzCPb8PRWcuLWazzBHF%2BysmVzQ%2FvU0UW1CtVezy4p6oHUBvDa1m5mQh1%2FRLQKQ74ez3%2Fm6ieL7TGI301JbC1rHk5OQLyXz0cYqG5O3aCFe7dimdb6hJ%2BFlZNyzHsYddRM2c1Jw%2Bty5ysbng7sqQ9iRi62xu8HkcozhNgsAId%2BwWEaCU1Et5lu3bDn5LE4AbUHw%2F5Io%2FE9%2BQC7iMKZnIUBLSL6Twav4Z0craEIA53bHr493bgt%2B35eBzzGbzxenzl5CLSXxOwkS9wMq8hzAQI%2Fa8%2F77Gxflg3XOvEffe9sQmlj2pTt%2BAwWMNI9uLIk2WmFInwFtql4wxFOD3HaffbedE7CN48pnJ7dphse0RZVAwUzPVfcBoopPa%2Foup2cV3u9snuHJ3NdvHxKglEKbqHNPXH5hhlnIN8ucrOuO7qdz5fTqIKfO4drimHpdNElp9BV27DSHRnmC8nhUZck%2FZFqxQTKrFHJesu9oS0i37rhzDglGCD4WtNgkCC4WWvb2DCM4VR0gXw83FlLkIuTC%2FG9RjYCw0DpJkBiMa%2B67%2FPafuN0cj62WJN2pxQFXq4eCjYdb%2F8gHtyt8C%2Bl4lnWDCF6KDDBjqkAb4cMXatJfzGVwsdPaiheEc7BM6zIGyedEGwYBhnWiElE%2BtQrmG7K4IOf2TO7M05VBYeh6s%2FLjnKZYTgyI69KHKkN4BYGywj%2BSqPOfzsONmvoH1qjxh2uN4UTBKesrPXAWOi6lKPDNz26TOZrMzo2ysCbsUiGAf2cF3TeBKgWJ5%2FxSyYkMg5qYCXKto2uYmy%2Ff6n%2BNaPSuPCN20hK1msmfZQcxk%2F&X-Amz-Signature=624a93125c9b349a012826205de6f06b8d644b2be07d0e108e348df8d2140dc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZMHTTTU%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDR1DcsIeq5j5%2BCM9muTIOyDhjt8MlmBQF4W7PW%2Fdyx6gIhAIOGls0kKe1c2%2F9HRueZtJ%2BsSqcF1nyBAO%2Fm2rafv46DKv8DCDUQABoMNjM3NDIzMTgzODA1IgxlLvdCzWe%2B95I7GRIq3AMl5kAW8sW0PBxgzn7WahhSQH0F1xBP9pvvfBNaxxn%2BmzCPb8PRWcuLWazzBHF%2BysmVzQ%2FvU0UW1CtVezy4p6oHUBvDa1m5mQh1%2FRLQKQ74ez3%2Fm6ieL7TGI301JbC1rHk5OQLyXz0cYqG5O3aCFe7dimdb6hJ%2BFlZNyzHsYddRM2c1Jw%2Bty5ysbng7sqQ9iRi62xu8HkcozhNgsAId%2BwWEaCU1Et5lu3bDn5LE4AbUHw%2F5Io%2FE9%2BQC7iMKZnIUBLSL6Twav4Z0craEIA53bHr493bgt%2B35eBzzGbzxenzl5CLSXxOwkS9wMq8hzAQI%2Fa8%2F77Gxflg3XOvEffe9sQmlj2pTt%2BAwWMNI9uLIk2WmFInwFtql4wxFOD3HaffbedE7CN48pnJ7dphse0RZVAwUzPVfcBoopPa%2Foup2cV3u9snuHJ3NdvHxKglEKbqHNPXH5hhlnIN8ucrOuO7qdz5fTqIKfO4drimHpdNElp9BV27DSHRnmC8nhUZck%2FZFqxQTKrFHJesu9oS0i37rhzDglGCD4WtNgkCC4WWvb2DCM4VR0gXw83FlLkIuTC%2FG9RjYCw0DpJkBiMa%2B67%2FPafuN0cj62WJN2pxQFXq4eCjYdb%2F8gHtyt8C%2Bl4lnWDCF6KDDBjqkAb4cMXatJfzGVwsdPaiheEc7BM6zIGyedEGwYBhnWiElE%2BtQrmG7K4IOf2TO7M05VBYeh6s%2FLjnKZYTgyI69KHKkN4BYGywj%2BSqPOfzsONmvoH1qjxh2uN4UTBKesrPXAWOi6lKPDNz26TOZrMzo2ysCbsUiGAf2cF3TeBKgWJ5%2FxSyYkMg5qYCXKto2uYmy%2Ff6n%2BNaPSuPCN20hK1msmfZQcxk%2F&X-Amz-Signature=c679134bedb9ea6a1c3a77ef502d94b042147d55d03ffdcdec94c2460181150f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
