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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZRIOVN5%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmie8gBm4dsJeZhF%2B6fNR8zhmm8QlcK7i%2Fg0trhBTnQAiEArhAFJLCH2hhO77VFepbMHOLDuXA6Vq%2Blfc4c71MdbM8qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNDNkeYPZxJYLFvVCrcA%2B6OoxuPdR1fQJd5ABOHMxwLQgLc6Tyl7FqSfCIx6JnTFrTwUDzG88hDampQTat%2BoAgdWM7K4xJr8WFqD7uKboL64C6xqC1oxoO1m%2F3m%2B%2BVq7GxqbBVDJB0w3fxmmyhoIACJKwEkCTB7ud4lR1GPbUjwcDBdMmVRrLp4KxR5hFaI9rFIIrpDldRF68H%2FrMWElNkciE779WfF5rj0udYAwkQIXhYcpKYQN%2BSvlWOBZq0K%2FfHrgNy%2FNk9DirwDsS4E6TMnhsCEX%2Ftvl3oL1fxc9ZuSCPED1oXOFXHMaE%2FSeKa3s8cXMADxuZg4b979FW3A3pc9JpWWVcIjJ0u4xh7xCPNMHoVCDsBzq%2FX6SYxTuTDpQRxyisn6jSiHBebr22JzXf5QA1retgYTKJfpUg4lP0S2gKwK1M839UTpNbPbSCEyQ9BYMAnogvsjvBekzkYqiD3KCfbRH9DRRrsLO7VsHYzxPYl4R0j4xaNDoHPuqTWHmeJIeOXhHbklYq6dKLHmssmTHv43Eqe%2Bul7P2xZmX6POjiNUsD6LT0MRNYIdsCzM0h6LhiVTDcXn0NB7pF4hZ2mm67EG6FeGaP%2Bu0o8w671gunzFbQPyRsfRiOLHRSdFmhGZVnUTONIWmfzMMI6TrsEGOqUBqGix03bgDor%2Bp2etS3saUdLtLr1SKweHmaxpBZb%2Fbpqko5nw16hYv%2BHOKvzQFKYu7J777%2Bn7BlXYV7htu7XZkzoiF53VJRavVrBttn1aEE2uPT8CL%2F6NfcfTYbtyfy1pviTMbV8%2F%2FNvumTylJeZiS4DlCSdZ8fKHHUaNrkO9McwlBFXGmqxGnN2KBhCoiSOrXMB6%2FSFIk65YrABRxqJnaGHy6cem&X-Amz-Signature=e0304cebd12d25ce3f6146b47b18d3ce37c2a17378ece023b7d3577ffb55c690&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZRIOVN5%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmie8gBm4dsJeZhF%2B6fNR8zhmm8QlcK7i%2Fg0trhBTnQAiEArhAFJLCH2hhO77VFepbMHOLDuXA6Vq%2Blfc4c71MdbM8qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNDNkeYPZxJYLFvVCrcA%2B6OoxuPdR1fQJd5ABOHMxwLQgLc6Tyl7FqSfCIx6JnTFrTwUDzG88hDampQTat%2BoAgdWM7K4xJr8WFqD7uKboL64C6xqC1oxoO1m%2F3m%2B%2BVq7GxqbBVDJB0w3fxmmyhoIACJKwEkCTB7ud4lR1GPbUjwcDBdMmVRrLp4KxR5hFaI9rFIIrpDldRF68H%2FrMWElNkciE779WfF5rj0udYAwkQIXhYcpKYQN%2BSvlWOBZq0K%2FfHrgNy%2FNk9DirwDsS4E6TMnhsCEX%2Ftvl3oL1fxc9ZuSCPED1oXOFXHMaE%2FSeKa3s8cXMADxuZg4b979FW3A3pc9JpWWVcIjJ0u4xh7xCPNMHoVCDsBzq%2FX6SYxTuTDpQRxyisn6jSiHBebr22JzXf5QA1retgYTKJfpUg4lP0S2gKwK1M839UTpNbPbSCEyQ9BYMAnogvsjvBekzkYqiD3KCfbRH9DRRrsLO7VsHYzxPYl4R0j4xaNDoHPuqTWHmeJIeOXhHbklYq6dKLHmssmTHv43Eqe%2Bul7P2xZmX6POjiNUsD6LT0MRNYIdsCzM0h6LhiVTDcXn0NB7pF4hZ2mm67EG6FeGaP%2Bu0o8w671gunzFbQPyRsfRiOLHRSdFmhGZVnUTONIWmfzMMI6TrsEGOqUBqGix03bgDor%2Bp2etS3saUdLtLr1SKweHmaxpBZb%2Fbpqko5nw16hYv%2BHOKvzQFKYu7J777%2Bn7BlXYV7htu7XZkzoiF53VJRavVrBttn1aEE2uPT8CL%2F6NfcfTYbtyfy1pviTMbV8%2F%2FNvumTylJeZiS4DlCSdZ8fKHHUaNrkO9McwlBFXGmqxGnN2KBhCoiSOrXMB6%2FSFIk65YrABRxqJnaGHy6cem&X-Amz-Signature=95ab1b3b893db3c7fe9c0e12b2a7a1dbbc2bedb52d445dfedf16a60095cd4192&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZRIOVN5%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmie8gBm4dsJeZhF%2B6fNR8zhmm8QlcK7i%2Fg0trhBTnQAiEArhAFJLCH2hhO77VFepbMHOLDuXA6Vq%2Blfc4c71MdbM8qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNDNkeYPZxJYLFvVCrcA%2B6OoxuPdR1fQJd5ABOHMxwLQgLc6Tyl7FqSfCIx6JnTFrTwUDzG88hDampQTat%2BoAgdWM7K4xJr8WFqD7uKboL64C6xqC1oxoO1m%2F3m%2B%2BVq7GxqbBVDJB0w3fxmmyhoIACJKwEkCTB7ud4lR1GPbUjwcDBdMmVRrLp4KxR5hFaI9rFIIrpDldRF68H%2FrMWElNkciE779WfF5rj0udYAwkQIXhYcpKYQN%2BSvlWOBZq0K%2FfHrgNy%2FNk9DirwDsS4E6TMnhsCEX%2Ftvl3oL1fxc9ZuSCPED1oXOFXHMaE%2FSeKa3s8cXMADxuZg4b979FW3A3pc9JpWWVcIjJ0u4xh7xCPNMHoVCDsBzq%2FX6SYxTuTDpQRxyisn6jSiHBebr22JzXf5QA1retgYTKJfpUg4lP0S2gKwK1M839UTpNbPbSCEyQ9BYMAnogvsjvBekzkYqiD3KCfbRH9DRRrsLO7VsHYzxPYl4R0j4xaNDoHPuqTWHmeJIeOXhHbklYq6dKLHmssmTHv43Eqe%2Bul7P2xZmX6POjiNUsD6LT0MRNYIdsCzM0h6LhiVTDcXn0NB7pF4hZ2mm67EG6FeGaP%2Bu0o8w671gunzFbQPyRsfRiOLHRSdFmhGZVnUTONIWmfzMMI6TrsEGOqUBqGix03bgDor%2Bp2etS3saUdLtLr1SKweHmaxpBZb%2Fbpqko5nw16hYv%2BHOKvzQFKYu7J777%2Bn7BlXYV7htu7XZkzoiF53VJRavVrBttn1aEE2uPT8CL%2F6NfcfTYbtyfy1pviTMbV8%2F%2FNvumTylJeZiS4DlCSdZ8fKHHUaNrkO9McwlBFXGmqxGnN2KBhCoiSOrXMB6%2FSFIk65YrABRxqJnaGHy6cem&X-Amz-Signature=174fcb4c7886778d4e619ff1a7da130df47f205ebf5adb6a7d79e9d4cfc657c0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZRIOVN5%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmie8gBm4dsJeZhF%2B6fNR8zhmm8QlcK7i%2Fg0trhBTnQAiEArhAFJLCH2hhO77VFepbMHOLDuXA6Vq%2Blfc4c71MdbM8qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNDNkeYPZxJYLFvVCrcA%2B6OoxuPdR1fQJd5ABOHMxwLQgLc6Tyl7FqSfCIx6JnTFrTwUDzG88hDampQTat%2BoAgdWM7K4xJr8WFqD7uKboL64C6xqC1oxoO1m%2F3m%2B%2BVq7GxqbBVDJB0w3fxmmyhoIACJKwEkCTB7ud4lR1GPbUjwcDBdMmVRrLp4KxR5hFaI9rFIIrpDldRF68H%2FrMWElNkciE779WfF5rj0udYAwkQIXhYcpKYQN%2BSvlWOBZq0K%2FfHrgNy%2FNk9DirwDsS4E6TMnhsCEX%2Ftvl3oL1fxc9ZuSCPED1oXOFXHMaE%2FSeKa3s8cXMADxuZg4b979FW3A3pc9JpWWVcIjJ0u4xh7xCPNMHoVCDsBzq%2FX6SYxTuTDpQRxyisn6jSiHBebr22JzXf5QA1retgYTKJfpUg4lP0S2gKwK1M839UTpNbPbSCEyQ9BYMAnogvsjvBekzkYqiD3KCfbRH9DRRrsLO7VsHYzxPYl4R0j4xaNDoHPuqTWHmeJIeOXhHbklYq6dKLHmssmTHv43Eqe%2Bul7P2xZmX6POjiNUsD6LT0MRNYIdsCzM0h6LhiVTDcXn0NB7pF4hZ2mm67EG6FeGaP%2Bu0o8w671gunzFbQPyRsfRiOLHRSdFmhGZVnUTONIWmfzMMI6TrsEGOqUBqGix03bgDor%2Bp2etS3saUdLtLr1SKweHmaxpBZb%2Fbpqko5nw16hYv%2BHOKvzQFKYu7J777%2Bn7BlXYV7htu7XZkzoiF53VJRavVrBttn1aEE2uPT8CL%2F6NfcfTYbtyfy1pviTMbV8%2F%2FNvumTylJeZiS4DlCSdZ8fKHHUaNrkO9McwlBFXGmqxGnN2KBhCoiSOrXMB6%2FSFIk65YrABRxqJnaGHy6cem&X-Amz-Signature=8bcf58bd1147bff09ac5f7c38f0a3e331d40aa1620ce85e6586e8820d431cb59&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZRIOVN5%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmie8gBm4dsJeZhF%2B6fNR8zhmm8QlcK7i%2Fg0trhBTnQAiEArhAFJLCH2hhO77VFepbMHOLDuXA6Vq%2Blfc4c71MdbM8qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNDNkeYPZxJYLFvVCrcA%2B6OoxuPdR1fQJd5ABOHMxwLQgLc6Tyl7FqSfCIx6JnTFrTwUDzG88hDampQTat%2BoAgdWM7K4xJr8WFqD7uKboL64C6xqC1oxoO1m%2F3m%2B%2BVq7GxqbBVDJB0w3fxmmyhoIACJKwEkCTB7ud4lR1GPbUjwcDBdMmVRrLp4KxR5hFaI9rFIIrpDldRF68H%2FrMWElNkciE779WfF5rj0udYAwkQIXhYcpKYQN%2BSvlWOBZq0K%2FfHrgNy%2FNk9DirwDsS4E6TMnhsCEX%2Ftvl3oL1fxc9ZuSCPED1oXOFXHMaE%2FSeKa3s8cXMADxuZg4b979FW3A3pc9JpWWVcIjJ0u4xh7xCPNMHoVCDsBzq%2FX6SYxTuTDpQRxyisn6jSiHBebr22JzXf5QA1retgYTKJfpUg4lP0S2gKwK1M839UTpNbPbSCEyQ9BYMAnogvsjvBekzkYqiD3KCfbRH9DRRrsLO7VsHYzxPYl4R0j4xaNDoHPuqTWHmeJIeOXhHbklYq6dKLHmssmTHv43Eqe%2Bul7P2xZmX6POjiNUsD6LT0MRNYIdsCzM0h6LhiVTDcXn0NB7pF4hZ2mm67EG6FeGaP%2Bu0o8w671gunzFbQPyRsfRiOLHRSdFmhGZVnUTONIWmfzMMI6TrsEGOqUBqGix03bgDor%2Bp2etS3saUdLtLr1SKweHmaxpBZb%2Fbpqko5nw16hYv%2BHOKvzQFKYu7J777%2Bn7BlXYV7htu7XZkzoiF53VJRavVrBttn1aEE2uPT8CL%2F6NfcfTYbtyfy1pviTMbV8%2F%2FNvumTylJeZiS4DlCSdZ8fKHHUaNrkO9McwlBFXGmqxGnN2KBhCoiSOrXMB6%2FSFIk65YrABRxqJnaGHy6cem&X-Amz-Signature=88cba812e905bffcff917a774d779d76d29f26fe7c51736390727ee433da2353&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
