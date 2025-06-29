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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EAJLHI6%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAG%2Fw1jBNNyo%2BKmzFD4B7%2F%2FSKjJ9Tpx9v2tL0%2Blcodr5AiAciG6hYe0FUWyP%2FzJXqXtEEpl67ENQxaS31ikIRmz%2BjCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7jnNmXqSrbx8I0WYKtwDiXBmDbk4veEF4RWQK4Km2U85y0RTGPrEU46aeOxTwZ6czhtuMY8HyP%2Fd6ADKZ0S8nScjS3M9uTg9QenYLBMng%2Bw31K9Ckjzo8I0zNIGp7U19eYv69QJEerL5bvBVftC7ZS0elTqYRHFOoOQNg6mRCC%2Fgqo%2FuX%2BS9L2o%2Bp1dzDWGBSodpU0gPl8YOWIBpOxTGBvW7zyx0UHRgURVK24VGaLc3ATA1KK79mG%2FeXjq5mIZHQC6yGh6ZipxpH%2BMb73rhpbNh8tinQvL%2F9Gumh%2Bhx09zVoG%2BrU0%2FVtLjWAajn0kqeaN2A13NOAtwog2E%2FmKvktjT1PxAqjmmmRXjOp3J%2B233htz0%2Fg8wKpLleRhbALKumPetSKtiD8hEdHHb7lsF58yqbUXmv03eiyNkqNt0Ak2RNMK0rah5%2Bya5vJDxy8%2BxRjDtEdFhFmLNTrZt0gQetXUO468%2F3V1Ji2X5gwDpREvpZECklmDnNpwNtvcLt%2B9q34YkfnIUCks3C4oktIVRp285SflUQ1FI7TWSqSARsaRQGWs8s7osq1YFVI6DPawYrZBUZD%2FLb2vJayE4oE6vtWBH4i5z1kQYcyH2niavhekqRbFbWkF6uK2TCtGW%2BeIdSb5kizy2oEicb39Ywmc2GwwY6pgGlq2NlCkbLmNNn1QRHF%2Bg4Hxdkjzuza5Jlh6lGHgOxpnyx8tqT3nQw72EAt6sdwPXs0jWAT87bE5jXbWVmqcYEvu%2BI66iY9qfmpwwxT5ScaD1HiNtqC6%2FdoETTgeunHjNIthr%2FQ8QvqngpriV6nGo8ht159Ee7NH2D4RuY7%2FAV6KPue9wUlYMUcjhG1Blo4T5eADGPrUKIFbXaF5ouwnAe5vlvivua&X-Amz-Signature=6270acee3a3e98d6e8e472aa556c8e3ba0e59ca06bf754565a4534155c979967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EAJLHI6%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAG%2Fw1jBNNyo%2BKmzFD4B7%2F%2FSKjJ9Tpx9v2tL0%2Blcodr5AiAciG6hYe0FUWyP%2FzJXqXtEEpl67ENQxaS31ikIRmz%2BjCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7jnNmXqSrbx8I0WYKtwDiXBmDbk4veEF4RWQK4Km2U85y0RTGPrEU46aeOxTwZ6czhtuMY8HyP%2Fd6ADKZ0S8nScjS3M9uTg9QenYLBMng%2Bw31K9Ckjzo8I0zNIGp7U19eYv69QJEerL5bvBVftC7ZS0elTqYRHFOoOQNg6mRCC%2Fgqo%2FuX%2BS9L2o%2Bp1dzDWGBSodpU0gPl8YOWIBpOxTGBvW7zyx0UHRgURVK24VGaLc3ATA1KK79mG%2FeXjq5mIZHQC6yGh6ZipxpH%2BMb73rhpbNh8tinQvL%2F9Gumh%2Bhx09zVoG%2BrU0%2FVtLjWAajn0kqeaN2A13NOAtwog2E%2FmKvktjT1PxAqjmmmRXjOp3J%2B233htz0%2Fg8wKpLleRhbALKumPetSKtiD8hEdHHb7lsF58yqbUXmv03eiyNkqNt0Ak2RNMK0rah5%2Bya5vJDxy8%2BxRjDtEdFhFmLNTrZt0gQetXUO468%2F3V1Ji2X5gwDpREvpZECklmDnNpwNtvcLt%2B9q34YkfnIUCks3C4oktIVRp285SflUQ1FI7TWSqSARsaRQGWs8s7osq1YFVI6DPawYrZBUZD%2FLb2vJayE4oE6vtWBH4i5z1kQYcyH2niavhekqRbFbWkF6uK2TCtGW%2BeIdSb5kizy2oEicb39Ywmc2GwwY6pgGlq2NlCkbLmNNn1QRHF%2Bg4Hxdkjzuza5Jlh6lGHgOxpnyx8tqT3nQw72EAt6sdwPXs0jWAT87bE5jXbWVmqcYEvu%2BI66iY9qfmpwwxT5ScaD1HiNtqC6%2FdoETTgeunHjNIthr%2FQ8QvqngpriV6nGo8ht159Ee7NH2D4RuY7%2FAV6KPue9wUlYMUcjhG1Blo4T5eADGPrUKIFbXaF5ouwnAe5vlvivua&X-Amz-Signature=f028bf9d817da056dd026844993b3e4e86dbfa840914f75d06f3d624235af321&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EAJLHI6%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAG%2Fw1jBNNyo%2BKmzFD4B7%2F%2FSKjJ9Tpx9v2tL0%2Blcodr5AiAciG6hYe0FUWyP%2FzJXqXtEEpl67ENQxaS31ikIRmz%2BjCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7jnNmXqSrbx8I0WYKtwDiXBmDbk4veEF4RWQK4Km2U85y0RTGPrEU46aeOxTwZ6czhtuMY8HyP%2Fd6ADKZ0S8nScjS3M9uTg9QenYLBMng%2Bw31K9Ckjzo8I0zNIGp7U19eYv69QJEerL5bvBVftC7ZS0elTqYRHFOoOQNg6mRCC%2Fgqo%2FuX%2BS9L2o%2Bp1dzDWGBSodpU0gPl8YOWIBpOxTGBvW7zyx0UHRgURVK24VGaLc3ATA1KK79mG%2FeXjq5mIZHQC6yGh6ZipxpH%2BMb73rhpbNh8tinQvL%2F9Gumh%2Bhx09zVoG%2BrU0%2FVtLjWAajn0kqeaN2A13NOAtwog2E%2FmKvktjT1PxAqjmmmRXjOp3J%2B233htz0%2Fg8wKpLleRhbALKumPetSKtiD8hEdHHb7lsF58yqbUXmv03eiyNkqNt0Ak2RNMK0rah5%2Bya5vJDxy8%2BxRjDtEdFhFmLNTrZt0gQetXUO468%2F3V1Ji2X5gwDpREvpZECklmDnNpwNtvcLt%2B9q34YkfnIUCks3C4oktIVRp285SflUQ1FI7TWSqSARsaRQGWs8s7osq1YFVI6DPawYrZBUZD%2FLb2vJayE4oE6vtWBH4i5z1kQYcyH2niavhekqRbFbWkF6uK2TCtGW%2BeIdSb5kizy2oEicb39Ywmc2GwwY6pgGlq2NlCkbLmNNn1QRHF%2Bg4Hxdkjzuza5Jlh6lGHgOxpnyx8tqT3nQw72EAt6sdwPXs0jWAT87bE5jXbWVmqcYEvu%2BI66iY9qfmpwwxT5ScaD1HiNtqC6%2FdoETTgeunHjNIthr%2FQ8QvqngpriV6nGo8ht159Ee7NH2D4RuY7%2FAV6KPue9wUlYMUcjhG1Blo4T5eADGPrUKIFbXaF5ouwnAe5vlvivua&X-Amz-Signature=7cc450dd7da2b82db0b9f9b5d521fdea4cd42275f08874c104b02ade71396947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EAJLHI6%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAG%2Fw1jBNNyo%2BKmzFD4B7%2F%2FSKjJ9Tpx9v2tL0%2Blcodr5AiAciG6hYe0FUWyP%2FzJXqXtEEpl67ENQxaS31ikIRmz%2BjCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7jnNmXqSrbx8I0WYKtwDiXBmDbk4veEF4RWQK4Km2U85y0RTGPrEU46aeOxTwZ6czhtuMY8HyP%2Fd6ADKZ0S8nScjS3M9uTg9QenYLBMng%2Bw31K9Ckjzo8I0zNIGp7U19eYv69QJEerL5bvBVftC7ZS0elTqYRHFOoOQNg6mRCC%2Fgqo%2FuX%2BS9L2o%2Bp1dzDWGBSodpU0gPl8YOWIBpOxTGBvW7zyx0UHRgURVK24VGaLc3ATA1KK79mG%2FeXjq5mIZHQC6yGh6ZipxpH%2BMb73rhpbNh8tinQvL%2F9Gumh%2Bhx09zVoG%2BrU0%2FVtLjWAajn0kqeaN2A13NOAtwog2E%2FmKvktjT1PxAqjmmmRXjOp3J%2B233htz0%2Fg8wKpLleRhbALKumPetSKtiD8hEdHHb7lsF58yqbUXmv03eiyNkqNt0Ak2RNMK0rah5%2Bya5vJDxy8%2BxRjDtEdFhFmLNTrZt0gQetXUO468%2F3V1Ji2X5gwDpREvpZECklmDnNpwNtvcLt%2B9q34YkfnIUCks3C4oktIVRp285SflUQ1FI7TWSqSARsaRQGWs8s7osq1YFVI6DPawYrZBUZD%2FLb2vJayE4oE6vtWBH4i5z1kQYcyH2niavhekqRbFbWkF6uK2TCtGW%2BeIdSb5kizy2oEicb39Ywmc2GwwY6pgGlq2NlCkbLmNNn1QRHF%2Bg4Hxdkjzuza5Jlh6lGHgOxpnyx8tqT3nQw72EAt6sdwPXs0jWAT87bE5jXbWVmqcYEvu%2BI66iY9qfmpwwxT5ScaD1HiNtqC6%2FdoETTgeunHjNIthr%2FQ8QvqngpriV6nGo8ht159Ee7NH2D4RuY7%2FAV6KPue9wUlYMUcjhG1Blo4T5eADGPrUKIFbXaF5ouwnAe5vlvivua&X-Amz-Signature=dcdbb27d77573bdcd81eb2186474427581c873b68c2cc63ec6eb6160ee3eec45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EAJLHI6%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAG%2Fw1jBNNyo%2BKmzFD4B7%2F%2FSKjJ9Tpx9v2tL0%2Blcodr5AiAciG6hYe0FUWyP%2FzJXqXtEEpl67ENQxaS31ikIRmz%2BjCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7jnNmXqSrbx8I0WYKtwDiXBmDbk4veEF4RWQK4Km2U85y0RTGPrEU46aeOxTwZ6czhtuMY8HyP%2Fd6ADKZ0S8nScjS3M9uTg9QenYLBMng%2Bw31K9Ckjzo8I0zNIGp7U19eYv69QJEerL5bvBVftC7ZS0elTqYRHFOoOQNg6mRCC%2Fgqo%2FuX%2BS9L2o%2Bp1dzDWGBSodpU0gPl8YOWIBpOxTGBvW7zyx0UHRgURVK24VGaLc3ATA1KK79mG%2FeXjq5mIZHQC6yGh6ZipxpH%2BMb73rhpbNh8tinQvL%2F9Gumh%2Bhx09zVoG%2BrU0%2FVtLjWAajn0kqeaN2A13NOAtwog2E%2FmKvktjT1PxAqjmmmRXjOp3J%2B233htz0%2Fg8wKpLleRhbALKumPetSKtiD8hEdHHb7lsF58yqbUXmv03eiyNkqNt0Ak2RNMK0rah5%2Bya5vJDxy8%2BxRjDtEdFhFmLNTrZt0gQetXUO468%2F3V1Ji2X5gwDpREvpZECklmDnNpwNtvcLt%2B9q34YkfnIUCks3C4oktIVRp285SflUQ1FI7TWSqSARsaRQGWs8s7osq1YFVI6DPawYrZBUZD%2FLb2vJayE4oE6vtWBH4i5z1kQYcyH2niavhekqRbFbWkF6uK2TCtGW%2BeIdSb5kizy2oEicb39Ywmc2GwwY6pgGlq2NlCkbLmNNn1QRHF%2Bg4Hxdkjzuza5Jlh6lGHgOxpnyx8tqT3nQw72EAt6sdwPXs0jWAT87bE5jXbWVmqcYEvu%2BI66iY9qfmpwwxT5ScaD1HiNtqC6%2FdoETTgeunHjNIthr%2FQ8QvqngpriV6nGo8ht159Ee7NH2D4RuY7%2FAV6KPue9wUlYMUcjhG1Blo4T5eADGPrUKIFbXaF5ouwnAe5vlvivua&X-Amz-Signature=fd721210ad43bb5c162720c4c9b13acd2fa0bd2200b8d809435af5fbccccecba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
