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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLOPXGTJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCfFdpBmzjHaPOay6P711fPDsaK7ElUbfY38p2Njur%2FvQIhALd%2FvThIBAs4hYdwXwBcHIhfESgtgMJLRdT3G3PJL51pKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzz%2FjAjWbQcNOmffWMq3AOsKw5aFXny9ZT%2FwFsFUAz%2Bi%2BIoVGIbqzkPAy2aPDtZXf1ENP5OeHw%2FL%2BYxmToOPZ1woWCtJpHaNbPFghZf9VTC8bU2%2Bx1z4HzNLIEA7asOEN1xLnS4fsC7Ik5Mq4AlWbdajR1s%2B8C2dwWYQaAVwtEKWZ9IA0o0QbsSJK5vvoQ5d0N3fZ4nEgmln%2FTVd1yDv8ibylBiC0MSXNnsb2N4d1NLsbZczBb1tjTTwtw%2B8A3pqyBfnE7Oow7itujdrIVWPS7mFxHXAxvxMcRC6PErfUO3skKvVpEw806uq78vIL7pJg%2FHQu%2FRgvVa1d4Hq6%2BkqP2g5evXE9gsFIET2UXr%2BcjxDb9fPwaoaxI8wtcsKsin1NWtKiHEQ%2FKe5u5LiVbiqBPtQILP1UIt%2BqAnxvNFF5Kpq8njHbUzV0FMW7zYhtoYrTGsublPOXMV46mwoV2Rgc%2Fy2GlaSIgA02KxtRnakwXmLbe7ABjzc7velIbeln8TIvOhJBQx24GlPmVfSeixPKp1y%2B8adf4PKRxTiS2LudtJGGsTR%2BSgH6i0LRqtuKkLgvfkOyIUC4kmhNA2FX849gzR62GL52YzWwFzOLUCMTfmdUAWjiCPPEEhx%2FuwORm0IuQBKtVwFg1xT8OFhDD%2B4v2%2BBjqkAVdVzLB%2F9Mp9s46S10UVnEXXanwM%2FUbDMKirj9xRwyYt65mt%2BpwF2POYgMx5oA2RlKOje1DtJ9RURzT6YkjQ9Q%2FavntSVuBOhbPLjeiZTGjwRNFTlsi0%2FjTJwKER2wye2l27Y3jT0MFwYvFaj0TCZt5afSAnpKqOLO%2FYqUFnXT2PiusoP7Rk2MBLdExB%2B5TjPei46qocqEsq4cKbu1jAaYyG8Otv&X-Amz-Signature=b0b0fff1c34e06bf799af0225c6b5197e31f8b6e92ce0dbb8b36172f28eb71fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLOPXGTJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCfFdpBmzjHaPOay6P711fPDsaK7ElUbfY38p2Njur%2FvQIhALd%2FvThIBAs4hYdwXwBcHIhfESgtgMJLRdT3G3PJL51pKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzz%2FjAjWbQcNOmffWMq3AOsKw5aFXny9ZT%2FwFsFUAz%2Bi%2BIoVGIbqzkPAy2aPDtZXf1ENP5OeHw%2FL%2BYxmToOPZ1woWCtJpHaNbPFghZf9VTC8bU2%2Bx1z4HzNLIEA7asOEN1xLnS4fsC7Ik5Mq4AlWbdajR1s%2B8C2dwWYQaAVwtEKWZ9IA0o0QbsSJK5vvoQ5d0N3fZ4nEgmln%2FTVd1yDv8ibylBiC0MSXNnsb2N4d1NLsbZczBb1tjTTwtw%2B8A3pqyBfnE7Oow7itujdrIVWPS7mFxHXAxvxMcRC6PErfUO3skKvVpEw806uq78vIL7pJg%2FHQu%2FRgvVa1d4Hq6%2BkqP2g5evXE9gsFIET2UXr%2BcjxDb9fPwaoaxI8wtcsKsin1NWtKiHEQ%2FKe5u5LiVbiqBPtQILP1UIt%2BqAnxvNFF5Kpq8njHbUzV0FMW7zYhtoYrTGsublPOXMV46mwoV2Rgc%2Fy2GlaSIgA02KxtRnakwXmLbe7ABjzc7velIbeln8TIvOhJBQx24GlPmVfSeixPKp1y%2B8adf4PKRxTiS2LudtJGGsTR%2BSgH6i0LRqtuKkLgvfkOyIUC4kmhNA2FX849gzR62GL52YzWwFzOLUCMTfmdUAWjiCPPEEhx%2FuwORm0IuQBKtVwFg1xT8OFhDD%2B4v2%2BBjqkAVdVzLB%2F9Mp9s46S10UVnEXXanwM%2FUbDMKirj9xRwyYt65mt%2BpwF2POYgMx5oA2RlKOje1DtJ9RURzT6YkjQ9Q%2FavntSVuBOhbPLjeiZTGjwRNFTlsi0%2FjTJwKER2wye2l27Y3jT0MFwYvFaj0TCZt5afSAnpKqOLO%2FYqUFnXT2PiusoP7Rk2MBLdExB%2B5TjPei46qocqEsq4cKbu1jAaYyG8Otv&X-Amz-Signature=93d87c62c9b874c830f791115882f99108eb68b13ddfafe0de67007fec8b58ef&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLOPXGTJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCfFdpBmzjHaPOay6P711fPDsaK7ElUbfY38p2Njur%2FvQIhALd%2FvThIBAs4hYdwXwBcHIhfESgtgMJLRdT3G3PJL51pKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzz%2FjAjWbQcNOmffWMq3AOsKw5aFXny9ZT%2FwFsFUAz%2Bi%2BIoVGIbqzkPAy2aPDtZXf1ENP5OeHw%2FL%2BYxmToOPZ1woWCtJpHaNbPFghZf9VTC8bU2%2Bx1z4HzNLIEA7asOEN1xLnS4fsC7Ik5Mq4AlWbdajR1s%2B8C2dwWYQaAVwtEKWZ9IA0o0QbsSJK5vvoQ5d0N3fZ4nEgmln%2FTVd1yDv8ibylBiC0MSXNnsb2N4d1NLsbZczBb1tjTTwtw%2B8A3pqyBfnE7Oow7itujdrIVWPS7mFxHXAxvxMcRC6PErfUO3skKvVpEw806uq78vIL7pJg%2FHQu%2FRgvVa1d4Hq6%2BkqP2g5evXE9gsFIET2UXr%2BcjxDb9fPwaoaxI8wtcsKsin1NWtKiHEQ%2FKe5u5LiVbiqBPtQILP1UIt%2BqAnxvNFF5Kpq8njHbUzV0FMW7zYhtoYrTGsublPOXMV46mwoV2Rgc%2Fy2GlaSIgA02KxtRnakwXmLbe7ABjzc7velIbeln8TIvOhJBQx24GlPmVfSeixPKp1y%2B8adf4PKRxTiS2LudtJGGsTR%2BSgH6i0LRqtuKkLgvfkOyIUC4kmhNA2FX849gzR62GL52YzWwFzOLUCMTfmdUAWjiCPPEEhx%2FuwORm0IuQBKtVwFg1xT8OFhDD%2B4v2%2BBjqkAVdVzLB%2F9Mp9s46S10UVnEXXanwM%2FUbDMKirj9xRwyYt65mt%2BpwF2POYgMx5oA2RlKOje1DtJ9RURzT6YkjQ9Q%2FavntSVuBOhbPLjeiZTGjwRNFTlsi0%2FjTJwKER2wye2l27Y3jT0MFwYvFaj0TCZt5afSAnpKqOLO%2FYqUFnXT2PiusoP7Rk2MBLdExB%2B5TjPei46qocqEsq4cKbu1jAaYyG8Otv&X-Amz-Signature=5807c752513cbac50ade7473299e8fad27b06a72a1905af641836eb3fcba5eaf&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLOPXGTJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCfFdpBmzjHaPOay6P711fPDsaK7ElUbfY38p2Njur%2FvQIhALd%2FvThIBAs4hYdwXwBcHIhfESgtgMJLRdT3G3PJL51pKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzz%2FjAjWbQcNOmffWMq3AOsKw5aFXny9ZT%2FwFsFUAz%2Bi%2BIoVGIbqzkPAy2aPDtZXf1ENP5OeHw%2FL%2BYxmToOPZ1woWCtJpHaNbPFghZf9VTC8bU2%2Bx1z4HzNLIEA7asOEN1xLnS4fsC7Ik5Mq4AlWbdajR1s%2B8C2dwWYQaAVwtEKWZ9IA0o0QbsSJK5vvoQ5d0N3fZ4nEgmln%2FTVd1yDv8ibylBiC0MSXNnsb2N4d1NLsbZczBb1tjTTwtw%2B8A3pqyBfnE7Oow7itujdrIVWPS7mFxHXAxvxMcRC6PErfUO3skKvVpEw806uq78vIL7pJg%2FHQu%2FRgvVa1d4Hq6%2BkqP2g5evXE9gsFIET2UXr%2BcjxDb9fPwaoaxI8wtcsKsin1NWtKiHEQ%2FKe5u5LiVbiqBPtQILP1UIt%2BqAnxvNFF5Kpq8njHbUzV0FMW7zYhtoYrTGsublPOXMV46mwoV2Rgc%2Fy2GlaSIgA02KxtRnakwXmLbe7ABjzc7velIbeln8TIvOhJBQx24GlPmVfSeixPKp1y%2B8adf4PKRxTiS2LudtJGGsTR%2BSgH6i0LRqtuKkLgvfkOyIUC4kmhNA2FX849gzR62GL52YzWwFzOLUCMTfmdUAWjiCPPEEhx%2FuwORm0IuQBKtVwFg1xT8OFhDD%2B4v2%2BBjqkAVdVzLB%2F9Mp9s46S10UVnEXXanwM%2FUbDMKirj9xRwyYt65mt%2BpwF2POYgMx5oA2RlKOje1DtJ9RURzT6YkjQ9Q%2FavntSVuBOhbPLjeiZTGjwRNFTlsi0%2FjTJwKER2wye2l27Y3jT0MFwYvFaj0TCZt5afSAnpKqOLO%2FYqUFnXT2PiusoP7Rk2MBLdExB%2B5TjPei46qocqEsq4cKbu1jAaYyG8Otv&X-Amz-Signature=9c19cfe55e42215d68a1f0f6b0e1d2489c0129c3dc5a63582a0dbd8f119d4056&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLOPXGTJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCfFdpBmzjHaPOay6P711fPDsaK7ElUbfY38p2Njur%2FvQIhALd%2FvThIBAs4hYdwXwBcHIhfESgtgMJLRdT3G3PJL51pKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzz%2FjAjWbQcNOmffWMq3AOsKw5aFXny9ZT%2FwFsFUAz%2Bi%2BIoVGIbqzkPAy2aPDtZXf1ENP5OeHw%2FL%2BYxmToOPZ1woWCtJpHaNbPFghZf9VTC8bU2%2Bx1z4HzNLIEA7asOEN1xLnS4fsC7Ik5Mq4AlWbdajR1s%2B8C2dwWYQaAVwtEKWZ9IA0o0QbsSJK5vvoQ5d0N3fZ4nEgmln%2FTVd1yDv8ibylBiC0MSXNnsb2N4d1NLsbZczBb1tjTTwtw%2B8A3pqyBfnE7Oow7itujdrIVWPS7mFxHXAxvxMcRC6PErfUO3skKvVpEw806uq78vIL7pJg%2FHQu%2FRgvVa1d4Hq6%2BkqP2g5evXE9gsFIET2UXr%2BcjxDb9fPwaoaxI8wtcsKsin1NWtKiHEQ%2FKe5u5LiVbiqBPtQILP1UIt%2BqAnxvNFF5Kpq8njHbUzV0FMW7zYhtoYrTGsublPOXMV46mwoV2Rgc%2Fy2GlaSIgA02KxtRnakwXmLbe7ABjzc7velIbeln8TIvOhJBQx24GlPmVfSeixPKp1y%2B8adf4PKRxTiS2LudtJGGsTR%2BSgH6i0LRqtuKkLgvfkOyIUC4kmhNA2FX849gzR62GL52YzWwFzOLUCMTfmdUAWjiCPPEEhx%2FuwORm0IuQBKtVwFg1xT8OFhDD%2B4v2%2BBjqkAVdVzLB%2F9Mp9s46S10UVnEXXanwM%2FUbDMKirj9xRwyYt65mt%2BpwF2POYgMx5oA2RlKOje1DtJ9RURzT6YkjQ9Q%2FavntSVuBOhbPLjeiZTGjwRNFTlsi0%2FjTJwKER2wye2l27Y3jT0MFwYvFaj0TCZt5afSAnpKqOLO%2FYqUFnXT2PiusoP7Rk2MBLdExB%2B5TjPei46qocqEsq4cKbu1jAaYyG8Otv&X-Amz-Signature=968ebd9a9ff8c00472dd3728f5c3a55e7cd36d96d967ae5db704407b9c3f63ed&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
