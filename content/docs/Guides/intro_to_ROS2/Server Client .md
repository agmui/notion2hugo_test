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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFEFDSQI%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIDutwOjRKavZm8jaDE8gNp3L8HlLKOMHusDJae5ZNPpxAiA60PTRjqL%2FBoIdR6Y%2B1Fc8L3bBa9VuAfjiE5Vl0rhwwCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyGL21qH%2FhxnkviaSKtwDuVrGsDTFNScauiDA7ALCHjO7MrbGmJH%2Bc8xpiRJp2W%2Fnr7XrEL2txXaFEL80JDOlu0BdrmRvj%2Fu9Yg0H5X%2B9DV2VXTi6OFJTCDYi7dGlSBGm1PNUxR4597kE0pFjXVQ1jol1rSsSldQZzS8yDhqvxtzCFSTBzBxF66Co2%2F2dM24E%2BD7yuBAYqNJviDpQxDL67kjs8Lo17AY1OkTtFsNdTUhiOiJviUY4U%2BZz23Qzum3wzOZXDyv4Ilva1osERsLI8TFMM1jLmkfRv6miRjfAj1dtf%2FiIwfDYAQl5ymj85DacwSczBrLY5xALPFWhmNNpcNmbUr1QcQ47MpZQ9aF%2FLgyJo%2F0ckygxse4JaV1OQ4dnXwUPSIMrZTi4mlXByzoJT78av9HhZ6jAt7sl%2FdmBAp5IL%2FKKnUH%2BeCaCOTYqc6noSgP7FTk4dFaaTdgtM%2FBjtBTaC0VkWnjnBqAU7wNIESgndrCKWc%2FQjpyQ7lC0cMbYnfI100GUKIsCddD5HhfSq9aisqlh%2FYch7%2FwtX%2BzkoNpX8dZRTuxHzq7zu3YxoPinCWNzb%2B%2FL%2BM1kLWcqeg0MuvpG%2BIgiILqdkr7AAyQfUkHx4YQgJCsuyEpiA4Jm64JLlLmOfo3ux88dTQ8wxYe%2BwQY6pgE9G3hF40Ww6tmY%2Fa1UfErzkow7T%2BgBUPjVcwX1bXhlM1V0701JjIvO06btQE9G2cAQUsRSqgpgi4ZL4Udf%2B5hkwR6ZaQro%2B831DazrTusy1Qm0kMytPXpkxpDhQ3%2BFG6kXMWu28qjcO6N2qqcrmUVIeDuIl3RmWWd1BPvKnytlUQjfDosaDuMJshDucMD0Yf9QAk6Qy7396YGk%2FJZS3aa1y9tXEcsO&X-Amz-Signature=3ad457e1cee796146959c2564dfff33a088ada8b1c90655a969f8db860f97454&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFEFDSQI%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIDutwOjRKavZm8jaDE8gNp3L8HlLKOMHusDJae5ZNPpxAiA60PTRjqL%2FBoIdR6Y%2B1Fc8L3bBa9VuAfjiE5Vl0rhwwCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyGL21qH%2FhxnkviaSKtwDuVrGsDTFNScauiDA7ALCHjO7MrbGmJH%2Bc8xpiRJp2W%2Fnr7XrEL2txXaFEL80JDOlu0BdrmRvj%2Fu9Yg0H5X%2B9DV2VXTi6OFJTCDYi7dGlSBGm1PNUxR4597kE0pFjXVQ1jol1rSsSldQZzS8yDhqvxtzCFSTBzBxF66Co2%2F2dM24E%2BD7yuBAYqNJviDpQxDL67kjs8Lo17AY1OkTtFsNdTUhiOiJviUY4U%2BZz23Qzum3wzOZXDyv4Ilva1osERsLI8TFMM1jLmkfRv6miRjfAj1dtf%2FiIwfDYAQl5ymj85DacwSczBrLY5xALPFWhmNNpcNmbUr1QcQ47MpZQ9aF%2FLgyJo%2F0ckygxse4JaV1OQ4dnXwUPSIMrZTi4mlXByzoJT78av9HhZ6jAt7sl%2FdmBAp5IL%2FKKnUH%2BeCaCOTYqc6noSgP7FTk4dFaaTdgtM%2FBjtBTaC0VkWnjnBqAU7wNIESgndrCKWc%2FQjpyQ7lC0cMbYnfI100GUKIsCddD5HhfSq9aisqlh%2FYch7%2FwtX%2BzkoNpX8dZRTuxHzq7zu3YxoPinCWNzb%2B%2FL%2BM1kLWcqeg0MuvpG%2BIgiILqdkr7AAyQfUkHx4YQgJCsuyEpiA4Jm64JLlLmOfo3ux88dTQ8wxYe%2BwQY6pgE9G3hF40Ww6tmY%2Fa1UfErzkow7T%2BgBUPjVcwX1bXhlM1V0701JjIvO06btQE9G2cAQUsRSqgpgi4ZL4Udf%2B5hkwR6ZaQro%2B831DazrTusy1Qm0kMytPXpkxpDhQ3%2BFG6kXMWu28qjcO6N2qqcrmUVIeDuIl3RmWWd1BPvKnytlUQjfDosaDuMJshDucMD0Yf9QAk6Qy7396YGk%2FJZS3aa1y9tXEcsO&X-Amz-Signature=26443261149a8313fd244a2c46c081858ee2334502571fb4e4e57f31c9157b14&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFEFDSQI%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIDutwOjRKavZm8jaDE8gNp3L8HlLKOMHusDJae5ZNPpxAiA60PTRjqL%2FBoIdR6Y%2B1Fc8L3bBa9VuAfjiE5Vl0rhwwCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyGL21qH%2FhxnkviaSKtwDuVrGsDTFNScauiDA7ALCHjO7MrbGmJH%2Bc8xpiRJp2W%2Fnr7XrEL2txXaFEL80JDOlu0BdrmRvj%2Fu9Yg0H5X%2B9DV2VXTi6OFJTCDYi7dGlSBGm1PNUxR4597kE0pFjXVQ1jol1rSsSldQZzS8yDhqvxtzCFSTBzBxF66Co2%2F2dM24E%2BD7yuBAYqNJviDpQxDL67kjs8Lo17AY1OkTtFsNdTUhiOiJviUY4U%2BZz23Qzum3wzOZXDyv4Ilva1osERsLI8TFMM1jLmkfRv6miRjfAj1dtf%2FiIwfDYAQl5ymj85DacwSczBrLY5xALPFWhmNNpcNmbUr1QcQ47MpZQ9aF%2FLgyJo%2F0ckygxse4JaV1OQ4dnXwUPSIMrZTi4mlXByzoJT78av9HhZ6jAt7sl%2FdmBAp5IL%2FKKnUH%2BeCaCOTYqc6noSgP7FTk4dFaaTdgtM%2FBjtBTaC0VkWnjnBqAU7wNIESgndrCKWc%2FQjpyQ7lC0cMbYnfI100GUKIsCddD5HhfSq9aisqlh%2FYch7%2FwtX%2BzkoNpX8dZRTuxHzq7zu3YxoPinCWNzb%2B%2FL%2BM1kLWcqeg0MuvpG%2BIgiILqdkr7AAyQfUkHx4YQgJCsuyEpiA4Jm64JLlLmOfo3ux88dTQ8wxYe%2BwQY6pgE9G3hF40Ww6tmY%2Fa1UfErzkow7T%2BgBUPjVcwX1bXhlM1V0701JjIvO06btQE9G2cAQUsRSqgpgi4ZL4Udf%2B5hkwR6ZaQro%2B831DazrTusy1Qm0kMytPXpkxpDhQ3%2BFG6kXMWu28qjcO6N2qqcrmUVIeDuIl3RmWWd1BPvKnytlUQjfDosaDuMJshDucMD0Yf9QAk6Qy7396YGk%2FJZS3aa1y9tXEcsO&X-Amz-Signature=ec122caca9e2901bd0dc115a4d2c9e96c11f1f482623b72f84d74f5969bf05c9&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFEFDSQI%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIDutwOjRKavZm8jaDE8gNp3L8HlLKOMHusDJae5ZNPpxAiA60PTRjqL%2FBoIdR6Y%2B1Fc8L3bBa9VuAfjiE5Vl0rhwwCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyGL21qH%2FhxnkviaSKtwDuVrGsDTFNScauiDA7ALCHjO7MrbGmJH%2Bc8xpiRJp2W%2Fnr7XrEL2txXaFEL80JDOlu0BdrmRvj%2Fu9Yg0H5X%2B9DV2VXTi6OFJTCDYi7dGlSBGm1PNUxR4597kE0pFjXVQ1jol1rSsSldQZzS8yDhqvxtzCFSTBzBxF66Co2%2F2dM24E%2BD7yuBAYqNJviDpQxDL67kjs8Lo17AY1OkTtFsNdTUhiOiJviUY4U%2BZz23Qzum3wzOZXDyv4Ilva1osERsLI8TFMM1jLmkfRv6miRjfAj1dtf%2FiIwfDYAQl5ymj85DacwSczBrLY5xALPFWhmNNpcNmbUr1QcQ47MpZQ9aF%2FLgyJo%2F0ckygxse4JaV1OQ4dnXwUPSIMrZTi4mlXByzoJT78av9HhZ6jAt7sl%2FdmBAp5IL%2FKKnUH%2BeCaCOTYqc6noSgP7FTk4dFaaTdgtM%2FBjtBTaC0VkWnjnBqAU7wNIESgndrCKWc%2FQjpyQ7lC0cMbYnfI100GUKIsCddD5HhfSq9aisqlh%2FYch7%2FwtX%2BzkoNpX8dZRTuxHzq7zu3YxoPinCWNzb%2B%2FL%2BM1kLWcqeg0MuvpG%2BIgiILqdkr7AAyQfUkHx4YQgJCsuyEpiA4Jm64JLlLmOfo3ux88dTQ8wxYe%2BwQY6pgE9G3hF40Ww6tmY%2Fa1UfErzkow7T%2BgBUPjVcwX1bXhlM1V0701JjIvO06btQE9G2cAQUsRSqgpgi4ZL4Udf%2B5hkwR6ZaQro%2B831DazrTusy1Qm0kMytPXpkxpDhQ3%2BFG6kXMWu28qjcO6N2qqcrmUVIeDuIl3RmWWd1BPvKnytlUQjfDosaDuMJshDucMD0Yf9QAk6Qy7396YGk%2FJZS3aa1y9tXEcsO&X-Amz-Signature=23bfeb40018cccfb07d8ee4f68c7851e569e7faba6a263db85804c7c304803e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFEFDSQI%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIDutwOjRKavZm8jaDE8gNp3L8HlLKOMHusDJae5ZNPpxAiA60PTRjqL%2FBoIdR6Y%2B1Fc8L3bBa9VuAfjiE5Vl0rhwwCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyGL21qH%2FhxnkviaSKtwDuVrGsDTFNScauiDA7ALCHjO7MrbGmJH%2Bc8xpiRJp2W%2Fnr7XrEL2txXaFEL80JDOlu0BdrmRvj%2Fu9Yg0H5X%2B9DV2VXTi6OFJTCDYi7dGlSBGm1PNUxR4597kE0pFjXVQ1jol1rSsSldQZzS8yDhqvxtzCFSTBzBxF66Co2%2F2dM24E%2BD7yuBAYqNJviDpQxDL67kjs8Lo17AY1OkTtFsNdTUhiOiJviUY4U%2BZz23Qzum3wzOZXDyv4Ilva1osERsLI8TFMM1jLmkfRv6miRjfAj1dtf%2FiIwfDYAQl5ymj85DacwSczBrLY5xALPFWhmNNpcNmbUr1QcQ47MpZQ9aF%2FLgyJo%2F0ckygxse4JaV1OQ4dnXwUPSIMrZTi4mlXByzoJT78av9HhZ6jAt7sl%2FdmBAp5IL%2FKKnUH%2BeCaCOTYqc6noSgP7FTk4dFaaTdgtM%2FBjtBTaC0VkWnjnBqAU7wNIESgndrCKWc%2FQjpyQ7lC0cMbYnfI100GUKIsCddD5HhfSq9aisqlh%2FYch7%2FwtX%2BzkoNpX8dZRTuxHzq7zu3YxoPinCWNzb%2B%2FL%2BM1kLWcqeg0MuvpG%2BIgiILqdkr7AAyQfUkHx4YQgJCsuyEpiA4Jm64JLlLmOfo3ux88dTQ8wxYe%2BwQY6pgE9G3hF40Ww6tmY%2Fa1UfErzkow7T%2BgBUPjVcwX1bXhlM1V0701JjIvO06btQE9G2cAQUsRSqgpgi4ZL4Udf%2B5hkwR6ZaQro%2B831DazrTusy1Qm0kMytPXpkxpDhQ3%2BFG6kXMWu28qjcO6N2qqcrmUVIeDuIl3RmWWd1BPvKnytlUQjfDosaDuMJshDucMD0Yf9QAk6Qy7396YGk%2FJZS3aa1y9tXEcsO&X-Amz-Signature=2428b238b6d6a1869e511f843ec4e99c86739b4ee8175afd5a717a0edadf2894&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
