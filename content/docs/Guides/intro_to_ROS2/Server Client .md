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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMGGALOG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDj9XutepwZhirwOuQQK9AJoDOzjoDjSVmRqP%2FKB03XpAiBupcki%2FYXhBx9yw1Qib6LZjEW5yrMsvtECP1dJobtAiyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn1kGfPqqsiNGvmQ3KtwD%2F1LWjuGL73KvJ%2Buyo%2F6VVMpSrOhraDZNAL376lr9AEKPsFLwevPhKQhIjKS4kFRrlXmCWm3t0WNad2evk9SLGxiqXBntgyM%2F%2F3lVLhmhU1ohcDM3j1mUP1AdwHFUmDshzPSxQ3r2hm50QezgDOm2VFFSdpe2pd3QJJES3P6EN2G%2F7In%2FZTGmay4OShoIqw5tbe0%2FxxtCAJx%2F3%2B%2F%2BXsKrCYB4EYnxoreSIyKqJoJaiPhBJUunavip44%2FkBem8NfWlj0FWkX9oqg58GRJoJj9jWr%2FNsHpkwddkTrtsFOMK7gtUQCSzvvpW7C3H%2F9A1hhWuwWz%2FYv9lW6qIVOuAr3cXmNumsl2y%2FqXkyYzWydbOOQxTJmOWsjUGM03z2YZf%2FW5L%2BJl85kTRPblQX7psCMo6LRPLsIEBBgOH8zx%2BSueu7Ggvxg8Ws2dmRhSP5cu1cvCxZHFfHItDVopht2muzbdjHzZjUhF1vQTrSs%2FdthOT6Ie5EUXRu0i9RyducFTM2F1ejJ2V7%2BLWRinqWD5Mpso15mywhJLSCM3oVtTY2pSanoq8S%2BSscvRUNLmfQ2O%2F5ecwM3W%2FWh%2BAm5%2F707uU12AvEAD4sJ8pyEbmd2f1oCs1P4fbUjN21NhIyYvaFb4wuvq0vwY6pgEgaBmWD%2B9qLE%2FmikzjgQBvWDhzl3eoMmfp5c5dkQ5mpk1DUYhUlMec%2Bf51Z%2Bgb4GedADUwoITi5w%2FfTZa38VmyJdyHHMo34IFhoEI9HYw8WiRvAUnyO1VLlnYdeeuwL2XlPMw2vOVB1r9aP0%2BFdKTUW%2F1EfYuZtgMWhaF5W7plWJ%2BdH%2F4MeJokn0EYK2d7Q2YR8P78g7DwCEIyKEx3z1YzeI%2FCLcM%2F&X-Amz-Signature=06269e52cdf6cdaf84c6a5a53318423fe5d9971b211abdcdafba3cadfad6a442&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMGGALOG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDj9XutepwZhirwOuQQK9AJoDOzjoDjSVmRqP%2FKB03XpAiBupcki%2FYXhBx9yw1Qib6LZjEW5yrMsvtECP1dJobtAiyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn1kGfPqqsiNGvmQ3KtwD%2F1LWjuGL73KvJ%2Buyo%2F6VVMpSrOhraDZNAL376lr9AEKPsFLwevPhKQhIjKS4kFRrlXmCWm3t0WNad2evk9SLGxiqXBntgyM%2F%2F3lVLhmhU1ohcDM3j1mUP1AdwHFUmDshzPSxQ3r2hm50QezgDOm2VFFSdpe2pd3QJJES3P6EN2G%2F7In%2FZTGmay4OShoIqw5tbe0%2FxxtCAJx%2F3%2B%2F%2BXsKrCYB4EYnxoreSIyKqJoJaiPhBJUunavip44%2FkBem8NfWlj0FWkX9oqg58GRJoJj9jWr%2FNsHpkwddkTrtsFOMK7gtUQCSzvvpW7C3H%2F9A1hhWuwWz%2FYv9lW6qIVOuAr3cXmNumsl2y%2FqXkyYzWydbOOQxTJmOWsjUGM03z2YZf%2FW5L%2BJl85kTRPblQX7psCMo6LRPLsIEBBgOH8zx%2BSueu7Ggvxg8Ws2dmRhSP5cu1cvCxZHFfHItDVopht2muzbdjHzZjUhF1vQTrSs%2FdthOT6Ie5EUXRu0i9RyducFTM2F1ejJ2V7%2BLWRinqWD5Mpso15mywhJLSCM3oVtTY2pSanoq8S%2BSscvRUNLmfQ2O%2F5ecwM3W%2FWh%2BAm5%2F707uU12AvEAD4sJ8pyEbmd2f1oCs1P4fbUjN21NhIyYvaFb4wuvq0vwY6pgEgaBmWD%2B9qLE%2FmikzjgQBvWDhzl3eoMmfp5c5dkQ5mpk1DUYhUlMec%2Bf51Z%2Bgb4GedADUwoITi5w%2FfTZa38VmyJdyHHMo34IFhoEI9HYw8WiRvAUnyO1VLlnYdeeuwL2XlPMw2vOVB1r9aP0%2BFdKTUW%2F1EfYuZtgMWhaF5W7plWJ%2BdH%2F4MeJokn0EYK2d7Q2YR8P78g7DwCEIyKEx3z1YzeI%2FCLcM%2F&X-Amz-Signature=dc1460e3347d592ce5ced118b17d21533c5165c59d48dfc5031fd67cf809c6a7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMGGALOG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDj9XutepwZhirwOuQQK9AJoDOzjoDjSVmRqP%2FKB03XpAiBupcki%2FYXhBx9yw1Qib6LZjEW5yrMsvtECP1dJobtAiyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn1kGfPqqsiNGvmQ3KtwD%2F1LWjuGL73KvJ%2Buyo%2F6VVMpSrOhraDZNAL376lr9AEKPsFLwevPhKQhIjKS4kFRrlXmCWm3t0WNad2evk9SLGxiqXBntgyM%2F%2F3lVLhmhU1ohcDM3j1mUP1AdwHFUmDshzPSxQ3r2hm50QezgDOm2VFFSdpe2pd3QJJES3P6EN2G%2F7In%2FZTGmay4OShoIqw5tbe0%2FxxtCAJx%2F3%2B%2F%2BXsKrCYB4EYnxoreSIyKqJoJaiPhBJUunavip44%2FkBem8NfWlj0FWkX9oqg58GRJoJj9jWr%2FNsHpkwddkTrtsFOMK7gtUQCSzvvpW7C3H%2F9A1hhWuwWz%2FYv9lW6qIVOuAr3cXmNumsl2y%2FqXkyYzWydbOOQxTJmOWsjUGM03z2YZf%2FW5L%2BJl85kTRPblQX7psCMo6LRPLsIEBBgOH8zx%2BSueu7Ggvxg8Ws2dmRhSP5cu1cvCxZHFfHItDVopht2muzbdjHzZjUhF1vQTrSs%2FdthOT6Ie5EUXRu0i9RyducFTM2F1ejJ2V7%2BLWRinqWD5Mpso15mywhJLSCM3oVtTY2pSanoq8S%2BSscvRUNLmfQ2O%2F5ecwM3W%2FWh%2BAm5%2F707uU12AvEAD4sJ8pyEbmd2f1oCs1P4fbUjN21NhIyYvaFb4wuvq0vwY6pgEgaBmWD%2B9qLE%2FmikzjgQBvWDhzl3eoMmfp5c5dkQ5mpk1DUYhUlMec%2Bf51Z%2Bgb4GedADUwoITi5w%2FfTZa38VmyJdyHHMo34IFhoEI9HYw8WiRvAUnyO1VLlnYdeeuwL2XlPMw2vOVB1r9aP0%2BFdKTUW%2F1EfYuZtgMWhaF5W7plWJ%2BdH%2F4MeJokn0EYK2d7Q2YR8P78g7DwCEIyKEx3z1YzeI%2FCLcM%2F&X-Amz-Signature=fb5ab60612892aff9503dae38bf3cdb4477c28bbae933ce3c2748a01981a45e6&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMGGALOG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDj9XutepwZhirwOuQQK9AJoDOzjoDjSVmRqP%2FKB03XpAiBupcki%2FYXhBx9yw1Qib6LZjEW5yrMsvtECP1dJobtAiyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn1kGfPqqsiNGvmQ3KtwD%2F1LWjuGL73KvJ%2Buyo%2F6VVMpSrOhraDZNAL376lr9AEKPsFLwevPhKQhIjKS4kFRrlXmCWm3t0WNad2evk9SLGxiqXBntgyM%2F%2F3lVLhmhU1ohcDM3j1mUP1AdwHFUmDshzPSxQ3r2hm50QezgDOm2VFFSdpe2pd3QJJES3P6EN2G%2F7In%2FZTGmay4OShoIqw5tbe0%2FxxtCAJx%2F3%2B%2F%2BXsKrCYB4EYnxoreSIyKqJoJaiPhBJUunavip44%2FkBem8NfWlj0FWkX9oqg58GRJoJj9jWr%2FNsHpkwddkTrtsFOMK7gtUQCSzvvpW7C3H%2F9A1hhWuwWz%2FYv9lW6qIVOuAr3cXmNumsl2y%2FqXkyYzWydbOOQxTJmOWsjUGM03z2YZf%2FW5L%2BJl85kTRPblQX7psCMo6LRPLsIEBBgOH8zx%2BSueu7Ggvxg8Ws2dmRhSP5cu1cvCxZHFfHItDVopht2muzbdjHzZjUhF1vQTrSs%2FdthOT6Ie5EUXRu0i9RyducFTM2F1ejJ2V7%2BLWRinqWD5Mpso15mywhJLSCM3oVtTY2pSanoq8S%2BSscvRUNLmfQ2O%2F5ecwM3W%2FWh%2BAm5%2F707uU12AvEAD4sJ8pyEbmd2f1oCs1P4fbUjN21NhIyYvaFb4wuvq0vwY6pgEgaBmWD%2B9qLE%2FmikzjgQBvWDhzl3eoMmfp5c5dkQ5mpk1DUYhUlMec%2Bf51Z%2Bgb4GedADUwoITi5w%2FfTZa38VmyJdyHHMo34IFhoEI9HYw8WiRvAUnyO1VLlnYdeeuwL2XlPMw2vOVB1r9aP0%2BFdKTUW%2F1EfYuZtgMWhaF5W7plWJ%2BdH%2F4MeJokn0EYK2d7Q2YR8P78g7DwCEIyKEx3z1YzeI%2FCLcM%2F&X-Amz-Signature=d8150790ba4cfaedab252edf9965d75796dfd39e587bf0a84079154455a9ca26&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMGGALOG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDj9XutepwZhirwOuQQK9AJoDOzjoDjSVmRqP%2FKB03XpAiBupcki%2FYXhBx9yw1Qib6LZjEW5yrMsvtECP1dJobtAiyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn1kGfPqqsiNGvmQ3KtwD%2F1LWjuGL73KvJ%2Buyo%2F6VVMpSrOhraDZNAL376lr9AEKPsFLwevPhKQhIjKS4kFRrlXmCWm3t0WNad2evk9SLGxiqXBntgyM%2F%2F3lVLhmhU1ohcDM3j1mUP1AdwHFUmDshzPSxQ3r2hm50QezgDOm2VFFSdpe2pd3QJJES3P6EN2G%2F7In%2FZTGmay4OShoIqw5tbe0%2FxxtCAJx%2F3%2B%2F%2BXsKrCYB4EYnxoreSIyKqJoJaiPhBJUunavip44%2FkBem8NfWlj0FWkX9oqg58GRJoJj9jWr%2FNsHpkwddkTrtsFOMK7gtUQCSzvvpW7C3H%2F9A1hhWuwWz%2FYv9lW6qIVOuAr3cXmNumsl2y%2FqXkyYzWydbOOQxTJmOWsjUGM03z2YZf%2FW5L%2BJl85kTRPblQX7psCMo6LRPLsIEBBgOH8zx%2BSueu7Ggvxg8Ws2dmRhSP5cu1cvCxZHFfHItDVopht2muzbdjHzZjUhF1vQTrSs%2FdthOT6Ie5EUXRu0i9RyducFTM2F1ejJ2V7%2BLWRinqWD5Mpso15mywhJLSCM3oVtTY2pSanoq8S%2BSscvRUNLmfQ2O%2F5ecwM3W%2FWh%2BAm5%2F707uU12AvEAD4sJ8pyEbmd2f1oCs1P4fbUjN21NhIyYvaFb4wuvq0vwY6pgEgaBmWD%2B9qLE%2FmikzjgQBvWDhzl3eoMmfp5c5dkQ5mpk1DUYhUlMec%2Bf51Z%2Bgb4GedADUwoITi5w%2FfTZa38VmyJdyHHMo34IFhoEI9HYw8WiRvAUnyO1VLlnYdeeuwL2XlPMw2vOVB1r9aP0%2BFdKTUW%2F1EfYuZtgMWhaF5W7plWJ%2BdH%2F4MeJokn0EYK2d7Q2YR8P78g7DwCEIyKEx3z1YzeI%2FCLcM%2F&X-Amz-Signature=c0e2207bf72e70ed135f4bc838aaa45c9cba86737ec159e27cc4c033819d3179&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
