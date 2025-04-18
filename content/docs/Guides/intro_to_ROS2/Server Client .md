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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALPJ4AU%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE5Ey2T%2FtUGCbqvcDIW%2BH%2F9MjYEN%2BWGVD%2B46fgvHRjlQIhAMckyleN3OStVWz9xH1rQPbYQWNSxPCMIANDNJheOPxLKv8DCHwQABoMNjM3NDIzMTgzODA1IgzD%2B%2Bbrk49%2BZjGPTLUq3ANua8r03O5sM1ES0eu0rw07u5Oy1cZ2iAKdeL7xrzJZ1DTNQijXPCclIztl4GtXIgbjlmtrLbJklFXFbtvMIYHeKMhMwP19OgQp%2B%2FvdgnQyGojNJlCjHzJnngBO8QBd28T%2Fq9JpKb%2BxTMRPsItRFbsltk48JOD1pjeTb8WHBn%2BnzVxJRqW57%2FleGtjCbKQmscaPZZtBaGZC2UvIKfcDVVD5ijHv6XQQWokQ8jYTUTKmAGYIvhmIkqip1gasPMJizzuMpIB5yZ8S2sJ3FT8Cfr3jMQUrNOXXrcPhOQXiHIah17kaEbgqFkE69b4OyPb%2FQqF6KF9rieSCfuolayHuMswFlz1i%2FEozsmVcBInoA9elxpeTsh%2BAMl%2B76D1s4Ala7hNlYSABlpe292xYh82mla5dZ4wqArNxXHt26N3nVADeIXkOn1p00kSGT1flLME2i9T5h5ON0S0tHLuCEFWp3S4lXfFhVZDsRom8qXgXALF8KpJr1FtwkxOq0KYWHmE6T%2FdOEmQsf7wWdmfy%2BSFRipW6FkLd8LWPWDDi5Omvnw7fg3ozWymTsuhfm8t0A6pWgXBXGzeUOxw1AIDUi5zhPIyUn9a7x4vIPhUnnKNm79KJnpN%2FQ%2BA%2BEODJHecYAjC5yorABjqkAadAMHeIU%2F%2FIOA%2BNOg51jP8iR84SaGbkSm%2BRRDmt0zuVvnbnX4A0wWoM4zQk3bqD8O3VkE8XoRXpFDU52PsO2pNh7Cyk0Vug8L8OCmHTu1QVjGQ5WCvYbiLL08aZWS2BZvv2IwOVgkfRWJx0%2B%2BVV10UjeR7y5yWZiweyYlC6a8gwpic7%2Fpzf3RFRpQw3zhepsGvjCbDY3Dzow%2Bc1JGJPiiDaWBpF&X-Amz-Signature=c4db2191bae4e146ea8ebe06d24ef3b76e4cb5caa7cba95388741484156f2ecf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALPJ4AU%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE5Ey2T%2FtUGCbqvcDIW%2BH%2F9MjYEN%2BWGVD%2B46fgvHRjlQIhAMckyleN3OStVWz9xH1rQPbYQWNSxPCMIANDNJheOPxLKv8DCHwQABoMNjM3NDIzMTgzODA1IgzD%2B%2Bbrk49%2BZjGPTLUq3ANua8r03O5sM1ES0eu0rw07u5Oy1cZ2iAKdeL7xrzJZ1DTNQijXPCclIztl4GtXIgbjlmtrLbJklFXFbtvMIYHeKMhMwP19OgQp%2B%2FvdgnQyGojNJlCjHzJnngBO8QBd28T%2Fq9JpKb%2BxTMRPsItRFbsltk48JOD1pjeTb8WHBn%2BnzVxJRqW57%2FleGtjCbKQmscaPZZtBaGZC2UvIKfcDVVD5ijHv6XQQWokQ8jYTUTKmAGYIvhmIkqip1gasPMJizzuMpIB5yZ8S2sJ3FT8Cfr3jMQUrNOXXrcPhOQXiHIah17kaEbgqFkE69b4OyPb%2FQqF6KF9rieSCfuolayHuMswFlz1i%2FEozsmVcBInoA9elxpeTsh%2BAMl%2B76D1s4Ala7hNlYSABlpe292xYh82mla5dZ4wqArNxXHt26N3nVADeIXkOn1p00kSGT1flLME2i9T5h5ON0S0tHLuCEFWp3S4lXfFhVZDsRom8qXgXALF8KpJr1FtwkxOq0KYWHmE6T%2FdOEmQsf7wWdmfy%2BSFRipW6FkLd8LWPWDDi5Omvnw7fg3ozWymTsuhfm8t0A6pWgXBXGzeUOxw1AIDUi5zhPIyUn9a7x4vIPhUnnKNm79KJnpN%2FQ%2BA%2BEODJHecYAjC5yorABjqkAadAMHeIU%2F%2FIOA%2BNOg51jP8iR84SaGbkSm%2BRRDmt0zuVvnbnX4A0wWoM4zQk3bqD8O3VkE8XoRXpFDU52PsO2pNh7Cyk0Vug8L8OCmHTu1QVjGQ5WCvYbiLL08aZWS2BZvv2IwOVgkfRWJx0%2B%2BVV10UjeR7y5yWZiweyYlC6a8gwpic7%2Fpzf3RFRpQw3zhepsGvjCbDY3Dzow%2Bc1JGJPiiDaWBpF&X-Amz-Signature=eb1b5e8f797cc6d88e33faecdc1aecef4bb84fdbed83c83dac0841ee240c37fe&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALPJ4AU%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE5Ey2T%2FtUGCbqvcDIW%2BH%2F9MjYEN%2BWGVD%2B46fgvHRjlQIhAMckyleN3OStVWz9xH1rQPbYQWNSxPCMIANDNJheOPxLKv8DCHwQABoMNjM3NDIzMTgzODA1IgzD%2B%2Bbrk49%2BZjGPTLUq3ANua8r03O5sM1ES0eu0rw07u5Oy1cZ2iAKdeL7xrzJZ1DTNQijXPCclIztl4GtXIgbjlmtrLbJklFXFbtvMIYHeKMhMwP19OgQp%2B%2FvdgnQyGojNJlCjHzJnngBO8QBd28T%2Fq9JpKb%2BxTMRPsItRFbsltk48JOD1pjeTb8WHBn%2BnzVxJRqW57%2FleGtjCbKQmscaPZZtBaGZC2UvIKfcDVVD5ijHv6XQQWokQ8jYTUTKmAGYIvhmIkqip1gasPMJizzuMpIB5yZ8S2sJ3FT8Cfr3jMQUrNOXXrcPhOQXiHIah17kaEbgqFkE69b4OyPb%2FQqF6KF9rieSCfuolayHuMswFlz1i%2FEozsmVcBInoA9elxpeTsh%2BAMl%2B76D1s4Ala7hNlYSABlpe292xYh82mla5dZ4wqArNxXHt26N3nVADeIXkOn1p00kSGT1flLME2i9T5h5ON0S0tHLuCEFWp3S4lXfFhVZDsRom8qXgXALF8KpJr1FtwkxOq0KYWHmE6T%2FdOEmQsf7wWdmfy%2BSFRipW6FkLd8LWPWDDi5Omvnw7fg3ozWymTsuhfm8t0A6pWgXBXGzeUOxw1AIDUi5zhPIyUn9a7x4vIPhUnnKNm79KJnpN%2FQ%2BA%2BEODJHecYAjC5yorABjqkAadAMHeIU%2F%2FIOA%2BNOg51jP8iR84SaGbkSm%2BRRDmt0zuVvnbnX4A0wWoM4zQk3bqD8O3VkE8XoRXpFDU52PsO2pNh7Cyk0Vug8L8OCmHTu1QVjGQ5WCvYbiLL08aZWS2BZvv2IwOVgkfRWJx0%2B%2BVV10UjeR7y5yWZiweyYlC6a8gwpic7%2Fpzf3RFRpQw3zhepsGvjCbDY3Dzow%2Bc1JGJPiiDaWBpF&X-Amz-Signature=ee555663f9c39edf08144192d655efd82f8226dec5461d4f702b688c67f6b7ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALPJ4AU%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE5Ey2T%2FtUGCbqvcDIW%2BH%2F9MjYEN%2BWGVD%2B46fgvHRjlQIhAMckyleN3OStVWz9xH1rQPbYQWNSxPCMIANDNJheOPxLKv8DCHwQABoMNjM3NDIzMTgzODA1IgzD%2B%2Bbrk49%2BZjGPTLUq3ANua8r03O5sM1ES0eu0rw07u5Oy1cZ2iAKdeL7xrzJZ1DTNQijXPCclIztl4GtXIgbjlmtrLbJklFXFbtvMIYHeKMhMwP19OgQp%2B%2FvdgnQyGojNJlCjHzJnngBO8QBd28T%2Fq9JpKb%2BxTMRPsItRFbsltk48JOD1pjeTb8WHBn%2BnzVxJRqW57%2FleGtjCbKQmscaPZZtBaGZC2UvIKfcDVVD5ijHv6XQQWokQ8jYTUTKmAGYIvhmIkqip1gasPMJizzuMpIB5yZ8S2sJ3FT8Cfr3jMQUrNOXXrcPhOQXiHIah17kaEbgqFkE69b4OyPb%2FQqF6KF9rieSCfuolayHuMswFlz1i%2FEozsmVcBInoA9elxpeTsh%2BAMl%2B76D1s4Ala7hNlYSABlpe292xYh82mla5dZ4wqArNxXHt26N3nVADeIXkOn1p00kSGT1flLME2i9T5h5ON0S0tHLuCEFWp3S4lXfFhVZDsRom8qXgXALF8KpJr1FtwkxOq0KYWHmE6T%2FdOEmQsf7wWdmfy%2BSFRipW6FkLd8LWPWDDi5Omvnw7fg3ozWymTsuhfm8t0A6pWgXBXGzeUOxw1AIDUi5zhPIyUn9a7x4vIPhUnnKNm79KJnpN%2FQ%2BA%2BEODJHecYAjC5yorABjqkAadAMHeIU%2F%2FIOA%2BNOg51jP8iR84SaGbkSm%2BRRDmt0zuVvnbnX4A0wWoM4zQk3bqD8O3VkE8XoRXpFDU52PsO2pNh7Cyk0Vug8L8OCmHTu1QVjGQ5WCvYbiLL08aZWS2BZvv2IwOVgkfRWJx0%2B%2BVV10UjeR7y5yWZiweyYlC6a8gwpic7%2Fpzf3RFRpQw3zhepsGvjCbDY3Dzow%2Bc1JGJPiiDaWBpF&X-Amz-Signature=5bddeb05ebc6808ff42faefcf9fa6ef11d879d1ea7084fef286253c448c21ed7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALPJ4AU%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE5Ey2T%2FtUGCbqvcDIW%2BH%2F9MjYEN%2BWGVD%2B46fgvHRjlQIhAMckyleN3OStVWz9xH1rQPbYQWNSxPCMIANDNJheOPxLKv8DCHwQABoMNjM3NDIzMTgzODA1IgzD%2B%2Bbrk49%2BZjGPTLUq3ANua8r03O5sM1ES0eu0rw07u5Oy1cZ2iAKdeL7xrzJZ1DTNQijXPCclIztl4GtXIgbjlmtrLbJklFXFbtvMIYHeKMhMwP19OgQp%2B%2FvdgnQyGojNJlCjHzJnngBO8QBd28T%2Fq9JpKb%2BxTMRPsItRFbsltk48JOD1pjeTb8WHBn%2BnzVxJRqW57%2FleGtjCbKQmscaPZZtBaGZC2UvIKfcDVVD5ijHv6XQQWokQ8jYTUTKmAGYIvhmIkqip1gasPMJizzuMpIB5yZ8S2sJ3FT8Cfr3jMQUrNOXXrcPhOQXiHIah17kaEbgqFkE69b4OyPb%2FQqF6KF9rieSCfuolayHuMswFlz1i%2FEozsmVcBInoA9elxpeTsh%2BAMl%2B76D1s4Ala7hNlYSABlpe292xYh82mla5dZ4wqArNxXHt26N3nVADeIXkOn1p00kSGT1flLME2i9T5h5ON0S0tHLuCEFWp3S4lXfFhVZDsRom8qXgXALF8KpJr1FtwkxOq0KYWHmE6T%2FdOEmQsf7wWdmfy%2BSFRipW6FkLd8LWPWDDi5Omvnw7fg3ozWymTsuhfm8t0A6pWgXBXGzeUOxw1AIDUi5zhPIyUn9a7x4vIPhUnnKNm79KJnpN%2FQ%2BA%2BEODJHecYAjC5yorABjqkAadAMHeIU%2F%2FIOA%2BNOg51jP8iR84SaGbkSm%2BRRDmt0zuVvnbnX4A0wWoM4zQk3bqD8O3VkE8XoRXpFDU52PsO2pNh7Cyk0Vug8L8OCmHTu1QVjGQ5WCvYbiLL08aZWS2BZvv2IwOVgkfRWJx0%2B%2BVV10UjeR7y5yWZiweyYlC6a8gwpic7%2Fpzf3RFRpQw3zhepsGvjCbDY3Dzow%2Bc1JGJPiiDaWBpF&X-Amz-Signature=b68035125a6a6ce0208e321fef027c2a8e3a3937fdc07d8376832612048b6477&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
