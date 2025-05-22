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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJCOOMPV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQC%2BB3Do4Wu01I2fDm%2Fj6I%2B2SCNEZDmKHXJaKrUHiWq%2BQAIhAN8MbFYA5Z0F9fzXYpc3C8wwU9I1xRTJG4wNLCgAMGVzKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPcClK85WlBD37yKkq3APAs1KNBbRCVoUwVqjJghQ1qhIzN597ojGH6Vc1WMJjDT%2BI8pXIEGrC5xdxBqGIIYjUwbsmM8%2BrqSi8dDUMBA6ZaxKvH9PQCbLLdsM3BRQ9utUoMbkhxIuF77ImuaQwwyI%2B3NbE28rJcfQrdQ8%2FZ0QSxVdMNqYxTB1TZ33BMh5xEK1BlmE5WK%2FaDBpDcNuixErn%2BD0QMSkDq%2BpOK5QLC4BjlUUfzUk8LmsYR1ziT0CrVS1lyUlI8%2F55NY36F%2BIVqScwM%2BuQl3j66Divhy8iuwhFGuM2TvzwChGosetesQRXcEGxeqXdZo%2FbvSX7Fl4g5WSicw%2BisYssTTWKxB4Dvcl6L%2B8aIYaSwgt%2B%2BjZXYCR%2FStXsEZyG821bEYYFTyApy55RtiPlv4YENIZPPggThVkyal%2FVYWQ%2FcsZIjKE2uU3p5tO1yOjFNoUrbkUCxPFxYZkp1o%2FgR4b7e4ADrShOfRtPjXBulhwIOegcQyiM2zU%2FzzfvjFuPTur9aBLMMId4VPyqItf1lGEHYmSikP4PBApbBS%2FnL4fwHBgzTnwtttHoeaGbLS4QTb2cFMjUOvEJPJePd3bJnmIpCDcLl8dTgIHIzmXHLveZvrcMqRzWJ9KzzVpt98q5joVJQgS%2F5DCi4rzBBjqkAejZUfvHTbrRIHnxFuo7m%2FEln2jtrV3GVWaT0NN4ZxumdvzrPB11xTHICroKL%2FQ7LxjWDCjxTqkI%2BXsvGFjNXwOL6cx%2F%2Bgq9nMIF1HzEgOFlnjlKntN51ZExQUgXMWT2OVZnXRWaJiMmkPrQlpHyWRRmKu6cUqJkq%2BWleHxKeAVO5MS2qiZsq0%2FO%2BnuxdEGoMIcfx3y6%2B3Otrq7XHznIkY87hNRs&X-Amz-Signature=2162cdcde3832706e939edd451e446e26dcb2b8aeafa9fb42826ca64e35188d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJCOOMPV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQC%2BB3Do4Wu01I2fDm%2Fj6I%2B2SCNEZDmKHXJaKrUHiWq%2BQAIhAN8MbFYA5Z0F9fzXYpc3C8wwU9I1xRTJG4wNLCgAMGVzKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPcClK85WlBD37yKkq3APAs1KNBbRCVoUwVqjJghQ1qhIzN597ojGH6Vc1WMJjDT%2BI8pXIEGrC5xdxBqGIIYjUwbsmM8%2BrqSi8dDUMBA6ZaxKvH9PQCbLLdsM3BRQ9utUoMbkhxIuF77ImuaQwwyI%2B3NbE28rJcfQrdQ8%2FZ0QSxVdMNqYxTB1TZ33BMh5xEK1BlmE5WK%2FaDBpDcNuixErn%2BD0QMSkDq%2BpOK5QLC4BjlUUfzUk8LmsYR1ziT0CrVS1lyUlI8%2F55NY36F%2BIVqScwM%2BuQl3j66Divhy8iuwhFGuM2TvzwChGosetesQRXcEGxeqXdZo%2FbvSX7Fl4g5WSicw%2BisYssTTWKxB4Dvcl6L%2B8aIYaSwgt%2B%2BjZXYCR%2FStXsEZyG821bEYYFTyApy55RtiPlv4YENIZPPggThVkyal%2FVYWQ%2FcsZIjKE2uU3p5tO1yOjFNoUrbkUCxPFxYZkp1o%2FgR4b7e4ADrShOfRtPjXBulhwIOegcQyiM2zU%2FzzfvjFuPTur9aBLMMId4VPyqItf1lGEHYmSikP4PBApbBS%2FnL4fwHBgzTnwtttHoeaGbLS4QTb2cFMjUOvEJPJePd3bJnmIpCDcLl8dTgIHIzmXHLveZvrcMqRzWJ9KzzVpt98q5joVJQgS%2F5DCi4rzBBjqkAejZUfvHTbrRIHnxFuo7m%2FEln2jtrV3GVWaT0NN4ZxumdvzrPB11xTHICroKL%2FQ7LxjWDCjxTqkI%2BXsvGFjNXwOL6cx%2F%2Bgq9nMIF1HzEgOFlnjlKntN51ZExQUgXMWT2OVZnXRWaJiMmkPrQlpHyWRRmKu6cUqJkq%2BWleHxKeAVO5MS2qiZsq0%2FO%2BnuxdEGoMIcfx3y6%2B3Otrq7XHznIkY87hNRs&X-Amz-Signature=c656bb466406f03ddb034d7ba18d8d18babe9f921793d977ab492169444520f2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJCOOMPV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQC%2BB3Do4Wu01I2fDm%2Fj6I%2B2SCNEZDmKHXJaKrUHiWq%2BQAIhAN8MbFYA5Z0F9fzXYpc3C8wwU9I1xRTJG4wNLCgAMGVzKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPcClK85WlBD37yKkq3APAs1KNBbRCVoUwVqjJghQ1qhIzN597ojGH6Vc1WMJjDT%2BI8pXIEGrC5xdxBqGIIYjUwbsmM8%2BrqSi8dDUMBA6ZaxKvH9PQCbLLdsM3BRQ9utUoMbkhxIuF77ImuaQwwyI%2B3NbE28rJcfQrdQ8%2FZ0QSxVdMNqYxTB1TZ33BMh5xEK1BlmE5WK%2FaDBpDcNuixErn%2BD0QMSkDq%2BpOK5QLC4BjlUUfzUk8LmsYR1ziT0CrVS1lyUlI8%2F55NY36F%2BIVqScwM%2BuQl3j66Divhy8iuwhFGuM2TvzwChGosetesQRXcEGxeqXdZo%2FbvSX7Fl4g5WSicw%2BisYssTTWKxB4Dvcl6L%2B8aIYaSwgt%2B%2BjZXYCR%2FStXsEZyG821bEYYFTyApy55RtiPlv4YENIZPPggThVkyal%2FVYWQ%2FcsZIjKE2uU3p5tO1yOjFNoUrbkUCxPFxYZkp1o%2FgR4b7e4ADrShOfRtPjXBulhwIOegcQyiM2zU%2FzzfvjFuPTur9aBLMMId4VPyqItf1lGEHYmSikP4PBApbBS%2FnL4fwHBgzTnwtttHoeaGbLS4QTb2cFMjUOvEJPJePd3bJnmIpCDcLl8dTgIHIzmXHLveZvrcMqRzWJ9KzzVpt98q5joVJQgS%2F5DCi4rzBBjqkAejZUfvHTbrRIHnxFuo7m%2FEln2jtrV3GVWaT0NN4ZxumdvzrPB11xTHICroKL%2FQ7LxjWDCjxTqkI%2BXsvGFjNXwOL6cx%2F%2Bgq9nMIF1HzEgOFlnjlKntN51ZExQUgXMWT2OVZnXRWaJiMmkPrQlpHyWRRmKu6cUqJkq%2BWleHxKeAVO5MS2qiZsq0%2FO%2BnuxdEGoMIcfx3y6%2B3Otrq7XHznIkY87hNRs&X-Amz-Signature=522c9e0587ae1104e8bbbc29a608347985076e0023b95163239f702b12e0dae3&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJCOOMPV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQC%2BB3Do4Wu01I2fDm%2Fj6I%2B2SCNEZDmKHXJaKrUHiWq%2BQAIhAN8MbFYA5Z0F9fzXYpc3C8wwU9I1xRTJG4wNLCgAMGVzKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPcClK85WlBD37yKkq3APAs1KNBbRCVoUwVqjJghQ1qhIzN597ojGH6Vc1WMJjDT%2BI8pXIEGrC5xdxBqGIIYjUwbsmM8%2BrqSi8dDUMBA6ZaxKvH9PQCbLLdsM3BRQ9utUoMbkhxIuF77ImuaQwwyI%2B3NbE28rJcfQrdQ8%2FZ0QSxVdMNqYxTB1TZ33BMh5xEK1BlmE5WK%2FaDBpDcNuixErn%2BD0QMSkDq%2BpOK5QLC4BjlUUfzUk8LmsYR1ziT0CrVS1lyUlI8%2F55NY36F%2BIVqScwM%2BuQl3j66Divhy8iuwhFGuM2TvzwChGosetesQRXcEGxeqXdZo%2FbvSX7Fl4g5WSicw%2BisYssTTWKxB4Dvcl6L%2B8aIYaSwgt%2B%2BjZXYCR%2FStXsEZyG821bEYYFTyApy55RtiPlv4YENIZPPggThVkyal%2FVYWQ%2FcsZIjKE2uU3p5tO1yOjFNoUrbkUCxPFxYZkp1o%2FgR4b7e4ADrShOfRtPjXBulhwIOegcQyiM2zU%2FzzfvjFuPTur9aBLMMId4VPyqItf1lGEHYmSikP4PBApbBS%2FnL4fwHBgzTnwtttHoeaGbLS4QTb2cFMjUOvEJPJePd3bJnmIpCDcLl8dTgIHIzmXHLveZvrcMqRzWJ9KzzVpt98q5joVJQgS%2F5DCi4rzBBjqkAejZUfvHTbrRIHnxFuo7m%2FEln2jtrV3GVWaT0NN4ZxumdvzrPB11xTHICroKL%2FQ7LxjWDCjxTqkI%2BXsvGFjNXwOL6cx%2F%2Bgq9nMIF1HzEgOFlnjlKntN51ZExQUgXMWT2OVZnXRWaJiMmkPrQlpHyWRRmKu6cUqJkq%2BWleHxKeAVO5MS2qiZsq0%2FO%2BnuxdEGoMIcfx3y6%2B3Otrq7XHznIkY87hNRs&X-Amz-Signature=ebd6313f476d344d0e08d2a375961baecfceac10f4151b5896b4b51b09f75c5a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJCOOMPV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQC%2BB3Do4Wu01I2fDm%2Fj6I%2B2SCNEZDmKHXJaKrUHiWq%2BQAIhAN8MbFYA5Z0F9fzXYpc3C8wwU9I1xRTJG4wNLCgAMGVzKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPcClK85WlBD37yKkq3APAs1KNBbRCVoUwVqjJghQ1qhIzN597ojGH6Vc1WMJjDT%2BI8pXIEGrC5xdxBqGIIYjUwbsmM8%2BrqSi8dDUMBA6ZaxKvH9PQCbLLdsM3BRQ9utUoMbkhxIuF77ImuaQwwyI%2B3NbE28rJcfQrdQ8%2FZ0QSxVdMNqYxTB1TZ33BMh5xEK1BlmE5WK%2FaDBpDcNuixErn%2BD0QMSkDq%2BpOK5QLC4BjlUUfzUk8LmsYR1ziT0CrVS1lyUlI8%2F55NY36F%2BIVqScwM%2BuQl3j66Divhy8iuwhFGuM2TvzwChGosetesQRXcEGxeqXdZo%2FbvSX7Fl4g5WSicw%2BisYssTTWKxB4Dvcl6L%2B8aIYaSwgt%2B%2BjZXYCR%2FStXsEZyG821bEYYFTyApy55RtiPlv4YENIZPPggThVkyal%2FVYWQ%2FcsZIjKE2uU3p5tO1yOjFNoUrbkUCxPFxYZkp1o%2FgR4b7e4ADrShOfRtPjXBulhwIOegcQyiM2zU%2FzzfvjFuPTur9aBLMMId4VPyqItf1lGEHYmSikP4PBApbBS%2FnL4fwHBgzTnwtttHoeaGbLS4QTb2cFMjUOvEJPJePd3bJnmIpCDcLl8dTgIHIzmXHLveZvrcMqRzWJ9KzzVpt98q5joVJQgS%2F5DCi4rzBBjqkAejZUfvHTbrRIHnxFuo7m%2FEln2jtrV3GVWaT0NN4ZxumdvzrPB11xTHICroKL%2FQ7LxjWDCjxTqkI%2BXsvGFjNXwOL6cx%2F%2Bgq9nMIF1HzEgOFlnjlKntN51ZExQUgXMWT2OVZnXRWaJiMmkPrQlpHyWRRmKu6cUqJkq%2BWleHxKeAVO5MS2qiZsq0%2FO%2BnuxdEGoMIcfx3y6%2B3Otrq7XHznIkY87hNRs&X-Amz-Signature=2c2ef11592e8a9fc83d1f61be0fa4f3560d6901e6e5b739437af4a20aef48927&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
