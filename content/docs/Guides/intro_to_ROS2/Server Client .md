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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625UCQWZD%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCID0dgOlh4AiTrAMxg5rIDDyPqMAFw7CXobLTcSS6bjO4AiEAz%2FodvmWOmMpyqinoq%2Brnm%2F2zB1sxj4YHVNLYCdPeCSQqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6BTlTbFm8I1dtMlircA64sXj%2FSKBN9yWcLPJbrtJrM6Zimbj54sGEqDuRKtVmW5iBSK6tVi1c22A%2F%2BkFEvdEXCHPF%2FrXk1N%2FKP%2Fl2NLL%2BEoatc%2Bdnvuh6LOrCFjAAfcM129ar0XPimzRY9gAXwWTFucxUzabAfc4uKOc2bsZ%2FzwaF6jh%2BgkE9DKbjMudAqN70s6a7rHzc%2F6687tXz0R%2F%2FJn7ZqX4nSYbVYR0uQ92bZYxMjILPVw3HkdIMRIUJzldyxaCw4GlzCDDz0sC2zeDqXVk5vXXChlwhijZJ0f3Qf2gQrkls9OD9jup3EaWJYTmG1eBjpeMGJcPuZCggidne9nDFVUGboxoxCdG7DO%2Fk0Rb%2FQfMX%2FikjsCvlwLk2VR6%2B%2F%2FEPzsDjWcurAAEHxa1TFgl64MthwoPmIm5tMpZHjV8bmHEiQ55UAZ3gh2EDDpus3e0gmET9ooS4R7u030KgP0DKKjl1wGe5Aq0KDBiWCL3%2B3uo5zMORStsLEnvckx%2FNCjk7y1Y%2FaIRwhzgLdR4%2FCA8FpJ2ojL9EiPqdeqOMd%2F%2Bhx0rOsiwWR2rUdnTd55fQB2mFxGelEaxYaJBZOhp6bl5oNt7Rg8H4Kv0euZUp85f6OESNqorSN9mJTv6s9h7fCRwrobD%2BPv3AMMK6Hnb0GOqUBGrYjKnQ9%2FsQspuQEM7CAbmJGqjzej8cpO5fLYi1cqXMKH%2FjXyJwigtuy0q3zax6SNcx9grZ1hjMHKgcQgdd2yaIeB5diOd0y9PiTVMo7v%2BXJV2FQOiXCae2hfGSnhtOtfkp94qGoQQFPf2%2Bq5YhtPfwBykte6O%2BAUcya2WjvFqxhIT1DRowWNJ4GflVNCBQc0UUSMIP6UeZG1FMynbRjD7r14ouO&X-Amz-Signature=169e674ac07f9c8656c3af791f55ff6b6a4e06a9cb18e5d1a6a66e453e8636c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625UCQWZD%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCID0dgOlh4AiTrAMxg5rIDDyPqMAFw7CXobLTcSS6bjO4AiEAz%2FodvmWOmMpyqinoq%2Brnm%2F2zB1sxj4YHVNLYCdPeCSQqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6BTlTbFm8I1dtMlircA64sXj%2FSKBN9yWcLPJbrtJrM6Zimbj54sGEqDuRKtVmW5iBSK6tVi1c22A%2F%2BkFEvdEXCHPF%2FrXk1N%2FKP%2Fl2NLL%2BEoatc%2Bdnvuh6LOrCFjAAfcM129ar0XPimzRY9gAXwWTFucxUzabAfc4uKOc2bsZ%2FzwaF6jh%2BgkE9DKbjMudAqN70s6a7rHzc%2F6687tXz0R%2F%2FJn7ZqX4nSYbVYR0uQ92bZYxMjILPVw3HkdIMRIUJzldyxaCw4GlzCDDz0sC2zeDqXVk5vXXChlwhijZJ0f3Qf2gQrkls9OD9jup3EaWJYTmG1eBjpeMGJcPuZCggidne9nDFVUGboxoxCdG7DO%2Fk0Rb%2FQfMX%2FikjsCvlwLk2VR6%2B%2F%2FEPzsDjWcurAAEHxa1TFgl64MthwoPmIm5tMpZHjV8bmHEiQ55UAZ3gh2EDDpus3e0gmET9ooS4R7u030KgP0DKKjl1wGe5Aq0KDBiWCL3%2B3uo5zMORStsLEnvckx%2FNCjk7y1Y%2FaIRwhzgLdR4%2FCA8FpJ2ojL9EiPqdeqOMd%2F%2Bhx0rOsiwWR2rUdnTd55fQB2mFxGelEaxYaJBZOhp6bl5oNt7Rg8H4Kv0euZUp85f6OESNqorSN9mJTv6s9h7fCRwrobD%2BPv3AMMK6Hnb0GOqUBGrYjKnQ9%2FsQspuQEM7CAbmJGqjzej8cpO5fLYi1cqXMKH%2FjXyJwigtuy0q3zax6SNcx9grZ1hjMHKgcQgdd2yaIeB5diOd0y9PiTVMo7v%2BXJV2FQOiXCae2hfGSnhtOtfkp94qGoQQFPf2%2Bq5YhtPfwBykte6O%2BAUcya2WjvFqxhIT1DRowWNJ4GflVNCBQc0UUSMIP6UeZG1FMynbRjD7r14ouO&X-Amz-Signature=83e6b1a3100c906780dc67556d1d7bb7c5f7ecdc86a1a341cbee39d0afd157de&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625UCQWZD%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCID0dgOlh4AiTrAMxg5rIDDyPqMAFw7CXobLTcSS6bjO4AiEAz%2FodvmWOmMpyqinoq%2Brnm%2F2zB1sxj4YHVNLYCdPeCSQqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6BTlTbFm8I1dtMlircA64sXj%2FSKBN9yWcLPJbrtJrM6Zimbj54sGEqDuRKtVmW5iBSK6tVi1c22A%2F%2BkFEvdEXCHPF%2FrXk1N%2FKP%2Fl2NLL%2BEoatc%2Bdnvuh6LOrCFjAAfcM129ar0XPimzRY9gAXwWTFucxUzabAfc4uKOc2bsZ%2FzwaF6jh%2BgkE9DKbjMudAqN70s6a7rHzc%2F6687tXz0R%2F%2FJn7ZqX4nSYbVYR0uQ92bZYxMjILPVw3HkdIMRIUJzldyxaCw4GlzCDDz0sC2zeDqXVk5vXXChlwhijZJ0f3Qf2gQrkls9OD9jup3EaWJYTmG1eBjpeMGJcPuZCggidne9nDFVUGboxoxCdG7DO%2Fk0Rb%2FQfMX%2FikjsCvlwLk2VR6%2B%2F%2FEPzsDjWcurAAEHxa1TFgl64MthwoPmIm5tMpZHjV8bmHEiQ55UAZ3gh2EDDpus3e0gmET9ooS4R7u030KgP0DKKjl1wGe5Aq0KDBiWCL3%2B3uo5zMORStsLEnvckx%2FNCjk7y1Y%2FaIRwhzgLdR4%2FCA8FpJ2ojL9EiPqdeqOMd%2F%2Bhx0rOsiwWR2rUdnTd55fQB2mFxGelEaxYaJBZOhp6bl5oNt7Rg8H4Kv0euZUp85f6OESNqorSN9mJTv6s9h7fCRwrobD%2BPv3AMMK6Hnb0GOqUBGrYjKnQ9%2FsQspuQEM7CAbmJGqjzej8cpO5fLYi1cqXMKH%2FjXyJwigtuy0q3zax6SNcx9grZ1hjMHKgcQgdd2yaIeB5diOd0y9PiTVMo7v%2BXJV2FQOiXCae2hfGSnhtOtfkp94qGoQQFPf2%2Bq5YhtPfwBykte6O%2BAUcya2WjvFqxhIT1DRowWNJ4GflVNCBQc0UUSMIP6UeZG1FMynbRjD7r14ouO&X-Amz-Signature=55e4a61477d096ab01dc553686f3bcf5f480e5d50629ffe94ed967d72bf06e37&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625UCQWZD%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCID0dgOlh4AiTrAMxg5rIDDyPqMAFw7CXobLTcSS6bjO4AiEAz%2FodvmWOmMpyqinoq%2Brnm%2F2zB1sxj4YHVNLYCdPeCSQqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6BTlTbFm8I1dtMlircA64sXj%2FSKBN9yWcLPJbrtJrM6Zimbj54sGEqDuRKtVmW5iBSK6tVi1c22A%2F%2BkFEvdEXCHPF%2FrXk1N%2FKP%2Fl2NLL%2BEoatc%2Bdnvuh6LOrCFjAAfcM129ar0XPimzRY9gAXwWTFucxUzabAfc4uKOc2bsZ%2FzwaF6jh%2BgkE9DKbjMudAqN70s6a7rHzc%2F6687tXz0R%2F%2FJn7ZqX4nSYbVYR0uQ92bZYxMjILPVw3HkdIMRIUJzldyxaCw4GlzCDDz0sC2zeDqXVk5vXXChlwhijZJ0f3Qf2gQrkls9OD9jup3EaWJYTmG1eBjpeMGJcPuZCggidne9nDFVUGboxoxCdG7DO%2Fk0Rb%2FQfMX%2FikjsCvlwLk2VR6%2B%2F%2FEPzsDjWcurAAEHxa1TFgl64MthwoPmIm5tMpZHjV8bmHEiQ55UAZ3gh2EDDpus3e0gmET9ooS4R7u030KgP0DKKjl1wGe5Aq0KDBiWCL3%2B3uo5zMORStsLEnvckx%2FNCjk7y1Y%2FaIRwhzgLdR4%2FCA8FpJ2ojL9EiPqdeqOMd%2F%2Bhx0rOsiwWR2rUdnTd55fQB2mFxGelEaxYaJBZOhp6bl5oNt7Rg8H4Kv0euZUp85f6OESNqorSN9mJTv6s9h7fCRwrobD%2BPv3AMMK6Hnb0GOqUBGrYjKnQ9%2FsQspuQEM7CAbmJGqjzej8cpO5fLYi1cqXMKH%2FjXyJwigtuy0q3zax6SNcx9grZ1hjMHKgcQgdd2yaIeB5diOd0y9PiTVMo7v%2BXJV2FQOiXCae2hfGSnhtOtfkp94qGoQQFPf2%2Bq5YhtPfwBykte6O%2BAUcya2WjvFqxhIT1DRowWNJ4GflVNCBQc0UUSMIP6UeZG1FMynbRjD7r14ouO&X-Amz-Signature=002be7e262537dcd87636de97405213c384c91bc482785282768d5b205ab93a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625UCQWZD%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCID0dgOlh4AiTrAMxg5rIDDyPqMAFw7CXobLTcSS6bjO4AiEAz%2FodvmWOmMpyqinoq%2Brnm%2F2zB1sxj4YHVNLYCdPeCSQqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6BTlTbFm8I1dtMlircA64sXj%2FSKBN9yWcLPJbrtJrM6Zimbj54sGEqDuRKtVmW5iBSK6tVi1c22A%2F%2BkFEvdEXCHPF%2FrXk1N%2FKP%2Fl2NLL%2BEoatc%2Bdnvuh6LOrCFjAAfcM129ar0XPimzRY9gAXwWTFucxUzabAfc4uKOc2bsZ%2FzwaF6jh%2BgkE9DKbjMudAqN70s6a7rHzc%2F6687tXz0R%2F%2FJn7ZqX4nSYbVYR0uQ92bZYxMjILPVw3HkdIMRIUJzldyxaCw4GlzCDDz0sC2zeDqXVk5vXXChlwhijZJ0f3Qf2gQrkls9OD9jup3EaWJYTmG1eBjpeMGJcPuZCggidne9nDFVUGboxoxCdG7DO%2Fk0Rb%2FQfMX%2FikjsCvlwLk2VR6%2B%2F%2FEPzsDjWcurAAEHxa1TFgl64MthwoPmIm5tMpZHjV8bmHEiQ55UAZ3gh2EDDpus3e0gmET9ooS4R7u030KgP0DKKjl1wGe5Aq0KDBiWCL3%2B3uo5zMORStsLEnvckx%2FNCjk7y1Y%2FaIRwhzgLdR4%2FCA8FpJ2ojL9EiPqdeqOMd%2F%2Bhx0rOsiwWR2rUdnTd55fQB2mFxGelEaxYaJBZOhp6bl5oNt7Rg8H4Kv0euZUp85f6OESNqorSN9mJTv6s9h7fCRwrobD%2BPv3AMMK6Hnb0GOqUBGrYjKnQ9%2FsQspuQEM7CAbmJGqjzej8cpO5fLYi1cqXMKH%2FjXyJwigtuy0q3zax6SNcx9grZ1hjMHKgcQgdd2yaIeB5diOd0y9PiTVMo7v%2BXJV2FQOiXCae2hfGSnhtOtfkp94qGoQQFPf2%2Bq5YhtPfwBykte6O%2BAUcya2WjvFqxhIT1DRowWNJ4GflVNCBQc0UUSMIP6UeZG1FMynbRjD7r14ouO&X-Amz-Signature=5b8a9397c934d1cd792f68e4c39ad05631fbda4d4c553752ca171a8a9ebf27a1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
