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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOJACL4M%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDsiDbA26d%2FmZSfZCImtJTW0Mf0ICFUWLcitAToRkGwwQIgTgO6OGEegJ8JE45YxQx2n%2FSMu7ya6UZVer6Om3cYVLAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDHiMuyK7VZJlGUdtfCrcA9kVO7p1ktZ5JwCH6sMTFjHCZJp2CKIASBmML8vCsYYot7DDBMTqrmmUVomEUQ47g0e6N8Rf1C%2FSuU7IPgd4y3RcG0qR2%2Fd5134QchGWwID7pysqdauvS6BLX3rDA7yo5pwpphzmxV9%2FI7B4geu94vN2ZTUI2WFwBoifpppV%2F5wtdVZzG3V5bpHH0wjEgZ8%2FSagG5MUy4THFwBrzSBk3wnUs7PavHJm5PEl4jcjvsxyr%2Fp550sHURFU37cFpgFeJqvVJwyjkjYcvQkVfhMLamMAuoFykPSMPZummMfP%2BPsHZ0MoV3AOPcUt6KSQMwLPWQTR8%2BxilG3A6wQyIduubfc22cUbGynXqqVEqykciPT97C9oyx6yJrVKEOOVt7DVcndNocBHKxsgf0Pgp9g%2BMRp9libnyESnZSKwglf1RCXhSG4tVoZORhgoMO%2BH425F9HNU8WveqIC10FPP0ts7MUnBb6jQGVHwFL%2Bkirk7hJQs817yzhovBYCDC01luEGroH4LjYAPQYjFC5Lfpu6aN%2BEbPQEw5d7Sr66Qn6f%2Fao%2FOm0xa0tna4l4owyKv4f7oTTzmrW1HiYVNSL%2Fm4DS9XL3%2Bg6IbsRHjyI3Ya%2BnQnIhg%2BZMO0JrCHYWPg0o7sMNiC9L0GOqUBnAQa4PHqknCBenki2QOQytOoA%2FciWW0ZQSPeN3QXS4cr1kVRRKA3x9F8jh7Vj9lzbN7LqQAb13ku0WLbJoOrg4VsZCPAGx93aU9tAPIZTN0%2BXCw%2FWWudACkcr8HVJRzmvfX2fvDuC%2FTL09kVqAdehfYNUVU561ZAUZBzY6x3Nmp8F1Ehq8mRMj5CYr7L9aZbQnNUzldqLljvN8NNUH2qMsaJ8dMf&X-Amz-Signature=fae9634f937d190745dfa88fcd6c3e63ff5d54e3d1a9a9f6cb5990b229c333bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOJACL4M%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDsiDbA26d%2FmZSfZCImtJTW0Mf0ICFUWLcitAToRkGwwQIgTgO6OGEegJ8JE45YxQx2n%2FSMu7ya6UZVer6Om3cYVLAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDHiMuyK7VZJlGUdtfCrcA9kVO7p1ktZ5JwCH6sMTFjHCZJp2CKIASBmML8vCsYYot7DDBMTqrmmUVomEUQ47g0e6N8Rf1C%2FSuU7IPgd4y3RcG0qR2%2Fd5134QchGWwID7pysqdauvS6BLX3rDA7yo5pwpphzmxV9%2FI7B4geu94vN2ZTUI2WFwBoifpppV%2F5wtdVZzG3V5bpHH0wjEgZ8%2FSagG5MUy4THFwBrzSBk3wnUs7PavHJm5PEl4jcjvsxyr%2Fp550sHURFU37cFpgFeJqvVJwyjkjYcvQkVfhMLamMAuoFykPSMPZummMfP%2BPsHZ0MoV3AOPcUt6KSQMwLPWQTR8%2BxilG3A6wQyIduubfc22cUbGynXqqVEqykciPT97C9oyx6yJrVKEOOVt7DVcndNocBHKxsgf0Pgp9g%2BMRp9libnyESnZSKwglf1RCXhSG4tVoZORhgoMO%2BH425F9HNU8WveqIC10FPP0ts7MUnBb6jQGVHwFL%2Bkirk7hJQs817yzhovBYCDC01luEGroH4LjYAPQYjFC5Lfpu6aN%2BEbPQEw5d7Sr66Qn6f%2Fao%2FOm0xa0tna4l4owyKv4f7oTTzmrW1HiYVNSL%2Fm4DS9XL3%2Bg6IbsRHjyI3Ya%2BnQnIhg%2BZMO0JrCHYWPg0o7sMNiC9L0GOqUBnAQa4PHqknCBenki2QOQytOoA%2FciWW0ZQSPeN3QXS4cr1kVRRKA3x9F8jh7Vj9lzbN7LqQAb13ku0WLbJoOrg4VsZCPAGx93aU9tAPIZTN0%2BXCw%2FWWudACkcr8HVJRzmvfX2fvDuC%2FTL09kVqAdehfYNUVU561ZAUZBzY6x3Nmp8F1Ehq8mRMj5CYr7L9aZbQnNUzldqLljvN8NNUH2qMsaJ8dMf&X-Amz-Signature=107f3ca03f0128940e0638686753a9394864c0912208b1358af2ddfe589fa901&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOJACL4M%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDsiDbA26d%2FmZSfZCImtJTW0Mf0ICFUWLcitAToRkGwwQIgTgO6OGEegJ8JE45YxQx2n%2FSMu7ya6UZVer6Om3cYVLAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDHiMuyK7VZJlGUdtfCrcA9kVO7p1ktZ5JwCH6sMTFjHCZJp2CKIASBmML8vCsYYot7DDBMTqrmmUVomEUQ47g0e6N8Rf1C%2FSuU7IPgd4y3RcG0qR2%2Fd5134QchGWwID7pysqdauvS6BLX3rDA7yo5pwpphzmxV9%2FI7B4geu94vN2ZTUI2WFwBoifpppV%2F5wtdVZzG3V5bpHH0wjEgZ8%2FSagG5MUy4THFwBrzSBk3wnUs7PavHJm5PEl4jcjvsxyr%2Fp550sHURFU37cFpgFeJqvVJwyjkjYcvQkVfhMLamMAuoFykPSMPZummMfP%2BPsHZ0MoV3AOPcUt6KSQMwLPWQTR8%2BxilG3A6wQyIduubfc22cUbGynXqqVEqykciPT97C9oyx6yJrVKEOOVt7DVcndNocBHKxsgf0Pgp9g%2BMRp9libnyESnZSKwglf1RCXhSG4tVoZORhgoMO%2BH425F9HNU8WveqIC10FPP0ts7MUnBb6jQGVHwFL%2Bkirk7hJQs817yzhovBYCDC01luEGroH4LjYAPQYjFC5Lfpu6aN%2BEbPQEw5d7Sr66Qn6f%2Fao%2FOm0xa0tna4l4owyKv4f7oTTzmrW1HiYVNSL%2Fm4DS9XL3%2Bg6IbsRHjyI3Ya%2BnQnIhg%2BZMO0JrCHYWPg0o7sMNiC9L0GOqUBnAQa4PHqknCBenki2QOQytOoA%2FciWW0ZQSPeN3QXS4cr1kVRRKA3x9F8jh7Vj9lzbN7LqQAb13ku0WLbJoOrg4VsZCPAGx93aU9tAPIZTN0%2BXCw%2FWWudACkcr8HVJRzmvfX2fvDuC%2FTL09kVqAdehfYNUVU561ZAUZBzY6x3Nmp8F1Ehq8mRMj5CYr7L9aZbQnNUzldqLljvN8NNUH2qMsaJ8dMf&X-Amz-Signature=1776fd56970c6c9966b1bedab19dd7a3959fc8dbc44e0e5bc3b949d9abb00578&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOJACL4M%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDsiDbA26d%2FmZSfZCImtJTW0Mf0ICFUWLcitAToRkGwwQIgTgO6OGEegJ8JE45YxQx2n%2FSMu7ya6UZVer6Om3cYVLAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDHiMuyK7VZJlGUdtfCrcA9kVO7p1ktZ5JwCH6sMTFjHCZJp2CKIASBmML8vCsYYot7DDBMTqrmmUVomEUQ47g0e6N8Rf1C%2FSuU7IPgd4y3RcG0qR2%2Fd5134QchGWwID7pysqdauvS6BLX3rDA7yo5pwpphzmxV9%2FI7B4geu94vN2ZTUI2WFwBoifpppV%2F5wtdVZzG3V5bpHH0wjEgZ8%2FSagG5MUy4THFwBrzSBk3wnUs7PavHJm5PEl4jcjvsxyr%2Fp550sHURFU37cFpgFeJqvVJwyjkjYcvQkVfhMLamMAuoFykPSMPZummMfP%2BPsHZ0MoV3AOPcUt6KSQMwLPWQTR8%2BxilG3A6wQyIduubfc22cUbGynXqqVEqykciPT97C9oyx6yJrVKEOOVt7DVcndNocBHKxsgf0Pgp9g%2BMRp9libnyESnZSKwglf1RCXhSG4tVoZORhgoMO%2BH425F9HNU8WveqIC10FPP0ts7MUnBb6jQGVHwFL%2Bkirk7hJQs817yzhovBYCDC01luEGroH4LjYAPQYjFC5Lfpu6aN%2BEbPQEw5d7Sr66Qn6f%2Fao%2FOm0xa0tna4l4owyKv4f7oTTzmrW1HiYVNSL%2Fm4DS9XL3%2Bg6IbsRHjyI3Ya%2BnQnIhg%2BZMO0JrCHYWPg0o7sMNiC9L0GOqUBnAQa4PHqknCBenki2QOQytOoA%2FciWW0ZQSPeN3QXS4cr1kVRRKA3x9F8jh7Vj9lzbN7LqQAb13ku0WLbJoOrg4VsZCPAGx93aU9tAPIZTN0%2BXCw%2FWWudACkcr8HVJRzmvfX2fvDuC%2FTL09kVqAdehfYNUVU561ZAUZBzY6x3Nmp8F1Ehq8mRMj5CYr7L9aZbQnNUzldqLljvN8NNUH2qMsaJ8dMf&X-Amz-Signature=902233d340843437ded3618bb6d1905bf52f7e5750d65c5647b68a7c575f0904&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOJACL4M%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDsiDbA26d%2FmZSfZCImtJTW0Mf0ICFUWLcitAToRkGwwQIgTgO6OGEegJ8JE45YxQx2n%2FSMu7ya6UZVer6Om3cYVLAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDHiMuyK7VZJlGUdtfCrcA9kVO7p1ktZ5JwCH6sMTFjHCZJp2CKIASBmML8vCsYYot7DDBMTqrmmUVomEUQ47g0e6N8Rf1C%2FSuU7IPgd4y3RcG0qR2%2Fd5134QchGWwID7pysqdauvS6BLX3rDA7yo5pwpphzmxV9%2FI7B4geu94vN2ZTUI2WFwBoifpppV%2F5wtdVZzG3V5bpHH0wjEgZ8%2FSagG5MUy4THFwBrzSBk3wnUs7PavHJm5PEl4jcjvsxyr%2Fp550sHURFU37cFpgFeJqvVJwyjkjYcvQkVfhMLamMAuoFykPSMPZummMfP%2BPsHZ0MoV3AOPcUt6KSQMwLPWQTR8%2BxilG3A6wQyIduubfc22cUbGynXqqVEqykciPT97C9oyx6yJrVKEOOVt7DVcndNocBHKxsgf0Pgp9g%2BMRp9libnyESnZSKwglf1RCXhSG4tVoZORhgoMO%2BH425F9HNU8WveqIC10FPP0ts7MUnBb6jQGVHwFL%2Bkirk7hJQs817yzhovBYCDC01luEGroH4LjYAPQYjFC5Lfpu6aN%2BEbPQEw5d7Sr66Qn6f%2Fao%2FOm0xa0tna4l4owyKv4f7oTTzmrW1HiYVNSL%2Fm4DS9XL3%2Bg6IbsRHjyI3Ya%2BnQnIhg%2BZMO0JrCHYWPg0o7sMNiC9L0GOqUBnAQa4PHqknCBenki2QOQytOoA%2FciWW0ZQSPeN3QXS4cr1kVRRKA3x9F8jh7Vj9lzbN7LqQAb13ku0WLbJoOrg4VsZCPAGx93aU9tAPIZTN0%2BXCw%2FWWudACkcr8HVJRzmvfX2fvDuC%2FTL09kVqAdehfYNUVU561ZAUZBzY6x3Nmp8F1Ehq8mRMj5CYr7L9aZbQnNUzldqLljvN8NNUH2qMsaJ8dMf&X-Amz-Signature=0fe2d1518c42ad8c653769ea9557919c284ab13b4fc35e44ec7ce660cd149277&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
