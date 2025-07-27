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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUBNVI2O%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIEjEIdjJhF980WCdS2G6HImt6UNlSJUdrjtd%2BHDNzjKUAiEAnBRXrI2LHBF0kEYXJEy9lCj0xMEyYk7f8IBcjgzXAIUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJJttPyHyIcaNogI%2BSrcA18AMwFONIpyfyuRVRKnwvpwHkf3gwVTPMiltvuJh0daFfxT1FqeF%2BvKgK6mdT162Wit9%2BAwQKwW%2FKAy4hiWe1%2BgxDN49u3giaIDKxqaVoE%2F1E6sbH3v7%2B0DOL9xP8NRuWh23VEnWwHU0cVpJlBAatLXNg7fF8t30KqIt%2Fo12tyTZrz%2F3aH%2FSMdFDl0CXpCYakAarizDZk32vQnFkjQeuYQCdMoGoq9yuXPHDHXCwB83WztvptkX%2FQSy9uuRQKHsH6Sm6yEO5nso0797xWS%2F3JkvlvCZ%2BUQyhgJr2h48T32TNXwy80RsqRS%2FMzFoa6WwlaZsVutv%2B4XfTxPO88LY2ba%2F6%2BQITr5iao7QOWNXY5laAMeNwgo%2F4DbLrZkgqaxE4YPhzOatPNrNP7frpaw99CcOZdi5YPD05SvgmYUC9ewbCaOayGoDPhLpISXTZ6g2AJg83ddi1chvqIlvlNWr6N1LK2vWTRCxa8opHLJD%2BoeSYYS3P3%2BbBlEnwafckBbqUx4vI0UXRZqYxHHOQ1xovCfnv%2Fqvu8NtrbANXAqSa3LoPDSQAyXxFjwvLTD4JrFxdpsxx7T6%2BpZLFNlbbtma2cV8AmUEzwdEQ%2BRtOcIQvTTFcigiGRwkAWqgyworMMSkmsQGOqUB68TnAOtUOc%2BHIJl%2Bh%2BH%2Fq0xoDsO1gpFHRbZaYhHSW%2F5ylNbv2SU%2FnHQvCohsD60Dh5XgFBA8hJ4cuwcJbK%2FOemZyQ87E2oVZql9LfjrLHkpZFNK8SowTmb4UUCqWd6TLPLoD%2B7ThuNCRWiDjNuWKQUwUyPhqCdqbLn53jLZmgrj%2BavArS8KaShCpmIlFLvFyR%2FMpznTAH47wey7OlbYhAPWiMRfA&X-Amz-Signature=7000f863b9697a985a172b07dad8d714c8cac2b9b7268c190227944643237dab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUBNVI2O%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIEjEIdjJhF980WCdS2G6HImt6UNlSJUdrjtd%2BHDNzjKUAiEAnBRXrI2LHBF0kEYXJEy9lCj0xMEyYk7f8IBcjgzXAIUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJJttPyHyIcaNogI%2BSrcA18AMwFONIpyfyuRVRKnwvpwHkf3gwVTPMiltvuJh0daFfxT1FqeF%2BvKgK6mdT162Wit9%2BAwQKwW%2FKAy4hiWe1%2BgxDN49u3giaIDKxqaVoE%2F1E6sbH3v7%2B0DOL9xP8NRuWh23VEnWwHU0cVpJlBAatLXNg7fF8t30KqIt%2Fo12tyTZrz%2F3aH%2FSMdFDl0CXpCYakAarizDZk32vQnFkjQeuYQCdMoGoq9yuXPHDHXCwB83WztvptkX%2FQSy9uuRQKHsH6Sm6yEO5nso0797xWS%2F3JkvlvCZ%2BUQyhgJr2h48T32TNXwy80RsqRS%2FMzFoa6WwlaZsVutv%2B4XfTxPO88LY2ba%2F6%2BQITr5iao7QOWNXY5laAMeNwgo%2F4DbLrZkgqaxE4YPhzOatPNrNP7frpaw99CcOZdi5YPD05SvgmYUC9ewbCaOayGoDPhLpISXTZ6g2AJg83ddi1chvqIlvlNWr6N1LK2vWTRCxa8opHLJD%2BoeSYYS3P3%2BbBlEnwafckBbqUx4vI0UXRZqYxHHOQ1xovCfnv%2Fqvu8NtrbANXAqSa3LoPDSQAyXxFjwvLTD4JrFxdpsxx7T6%2BpZLFNlbbtma2cV8AmUEzwdEQ%2BRtOcIQvTTFcigiGRwkAWqgyworMMSkmsQGOqUB68TnAOtUOc%2BHIJl%2Bh%2BH%2Fq0xoDsO1gpFHRbZaYhHSW%2F5ylNbv2SU%2FnHQvCohsD60Dh5XgFBA8hJ4cuwcJbK%2FOemZyQ87E2oVZql9LfjrLHkpZFNK8SowTmb4UUCqWd6TLPLoD%2B7ThuNCRWiDjNuWKQUwUyPhqCdqbLn53jLZmgrj%2BavArS8KaShCpmIlFLvFyR%2FMpznTAH47wey7OlbYhAPWiMRfA&X-Amz-Signature=57f533e009ed9fad08510439f4a7ca405529ebfb79caa339ea704d42be4879ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUBNVI2O%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIEjEIdjJhF980WCdS2G6HImt6UNlSJUdrjtd%2BHDNzjKUAiEAnBRXrI2LHBF0kEYXJEy9lCj0xMEyYk7f8IBcjgzXAIUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJJttPyHyIcaNogI%2BSrcA18AMwFONIpyfyuRVRKnwvpwHkf3gwVTPMiltvuJh0daFfxT1FqeF%2BvKgK6mdT162Wit9%2BAwQKwW%2FKAy4hiWe1%2BgxDN49u3giaIDKxqaVoE%2F1E6sbH3v7%2B0DOL9xP8NRuWh23VEnWwHU0cVpJlBAatLXNg7fF8t30KqIt%2Fo12tyTZrz%2F3aH%2FSMdFDl0CXpCYakAarizDZk32vQnFkjQeuYQCdMoGoq9yuXPHDHXCwB83WztvptkX%2FQSy9uuRQKHsH6Sm6yEO5nso0797xWS%2F3JkvlvCZ%2BUQyhgJr2h48T32TNXwy80RsqRS%2FMzFoa6WwlaZsVutv%2B4XfTxPO88LY2ba%2F6%2BQITr5iao7QOWNXY5laAMeNwgo%2F4DbLrZkgqaxE4YPhzOatPNrNP7frpaw99CcOZdi5YPD05SvgmYUC9ewbCaOayGoDPhLpISXTZ6g2AJg83ddi1chvqIlvlNWr6N1LK2vWTRCxa8opHLJD%2BoeSYYS3P3%2BbBlEnwafckBbqUx4vI0UXRZqYxHHOQ1xovCfnv%2Fqvu8NtrbANXAqSa3LoPDSQAyXxFjwvLTD4JrFxdpsxx7T6%2BpZLFNlbbtma2cV8AmUEzwdEQ%2BRtOcIQvTTFcigiGRwkAWqgyworMMSkmsQGOqUB68TnAOtUOc%2BHIJl%2Bh%2BH%2Fq0xoDsO1gpFHRbZaYhHSW%2F5ylNbv2SU%2FnHQvCohsD60Dh5XgFBA8hJ4cuwcJbK%2FOemZyQ87E2oVZql9LfjrLHkpZFNK8SowTmb4UUCqWd6TLPLoD%2B7ThuNCRWiDjNuWKQUwUyPhqCdqbLn53jLZmgrj%2BavArS8KaShCpmIlFLvFyR%2FMpznTAH47wey7OlbYhAPWiMRfA&X-Amz-Signature=292af05b18abf4a0e3b97b0262dab560cd3759167540ef68342c98cf06224cbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUBNVI2O%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIEjEIdjJhF980WCdS2G6HImt6UNlSJUdrjtd%2BHDNzjKUAiEAnBRXrI2LHBF0kEYXJEy9lCj0xMEyYk7f8IBcjgzXAIUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJJttPyHyIcaNogI%2BSrcA18AMwFONIpyfyuRVRKnwvpwHkf3gwVTPMiltvuJh0daFfxT1FqeF%2BvKgK6mdT162Wit9%2BAwQKwW%2FKAy4hiWe1%2BgxDN49u3giaIDKxqaVoE%2F1E6sbH3v7%2B0DOL9xP8NRuWh23VEnWwHU0cVpJlBAatLXNg7fF8t30KqIt%2Fo12tyTZrz%2F3aH%2FSMdFDl0CXpCYakAarizDZk32vQnFkjQeuYQCdMoGoq9yuXPHDHXCwB83WztvptkX%2FQSy9uuRQKHsH6Sm6yEO5nso0797xWS%2F3JkvlvCZ%2BUQyhgJr2h48T32TNXwy80RsqRS%2FMzFoa6WwlaZsVutv%2B4XfTxPO88LY2ba%2F6%2BQITr5iao7QOWNXY5laAMeNwgo%2F4DbLrZkgqaxE4YPhzOatPNrNP7frpaw99CcOZdi5YPD05SvgmYUC9ewbCaOayGoDPhLpISXTZ6g2AJg83ddi1chvqIlvlNWr6N1LK2vWTRCxa8opHLJD%2BoeSYYS3P3%2BbBlEnwafckBbqUx4vI0UXRZqYxHHOQ1xovCfnv%2Fqvu8NtrbANXAqSa3LoPDSQAyXxFjwvLTD4JrFxdpsxx7T6%2BpZLFNlbbtma2cV8AmUEzwdEQ%2BRtOcIQvTTFcigiGRwkAWqgyworMMSkmsQGOqUB68TnAOtUOc%2BHIJl%2Bh%2BH%2Fq0xoDsO1gpFHRbZaYhHSW%2F5ylNbv2SU%2FnHQvCohsD60Dh5XgFBA8hJ4cuwcJbK%2FOemZyQ87E2oVZql9LfjrLHkpZFNK8SowTmb4UUCqWd6TLPLoD%2B7ThuNCRWiDjNuWKQUwUyPhqCdqbLn53jLZmgrj%2BavArS8KaShCpmIlFLvFyR%2FMpznTAH47wey7OlbYhAPWiMRfA&X-Amz-Signature=2679f916afe180578bbcd643aed4e00e3f7e20a5a5762284c7da4e46fbcec9c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUBNVI2O%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIEjEIdjJhF980WCdS2G6HImt6UNlSJUdrjtd%2BHDNzjKUAiEAnBRXrI2LHBF0kEYXJEy9lCj0xMEyYk7f8IBcjgzXAIUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJJttPyHyIcaNogI%2BSrcA18AMwFONIpyfyuRVRKnwvpwHkf3gwVTPMiltvuJh0daFfxT1FqeF%2BvKgK6mdT162Wit9%2BAwQKwW%2FKAy4hiWe1%2BgxDN49u3giaIDKxqaVoE%2F1E6sbH3v7%2B0DOL9xP8NRuWh23VEnWwHU0cVpJlBAatLXNg7fF8t30KqIt%2Fo12tyTZrz%2F3aH%2FSMdFDl0CXpCYakAarizDZk32vQnFkjQeuYQCdMoGoq9yuXPHDHXCwB83WztvptkX%2FQSy9uuRQKHsH6Sm6yEO5nso0797xWS%2F3JkvlvCZ%2BUQyhgJr2h48T32TNXwy80RsqRS%2FMzFoa6WwlaZsVutv%2B4XfTxPO88LY2ba%2F6%2BQITr5iao7QOWNXY5laAMeNwgo%2F4DbLrZkgqaxE4YPhzOatPNrNP7frpaw99CcOZdi5YPD05SvgmYUC9ewbCaOayGoDPhLpISXTZ6g2AJg83ddi1chvqIlvlNWr6N1LK2vWTRCxa8opHLJD%2BoeSYYS3P3%2BbBlEnwafckBbqUx4vI0UXRZqYxHHOQ1xovCfnv%2Fqvu8NtrbANXAqSa3LoPDSQAyXxFjwvLTD4JrFxdpsxx7T6%2BpZLFNlbbtma2cV8AmUEzwdEQ%2BRtOcIQvTTFcigiGRwkAWqgyworMMSkmsQGOqUB68TnAOtUOc%2BHIJl%2Bh%2BH%2Fq0xoDsO1gpFHRbZaYhHSW%2F5ylNbv2SU%2FnHQvCohsD60Dh5XgFBA8hJ4cuwcJbK%2FOemZyQ87E2oVZql9LfjrLHkpZFNK8SowTmb4UUCqWd6TLPLoD%2B7ThuNCRWiDjNuWKQUwUyPhqCdqbLn53jLZmgrj%2BavArS8KaShCpmIlFLvFyR%2FMpznTAH47wey7OlbYhAPWiMRfA&X-Amz-Signature=2fb01a9e4e77de93ff78b16da860a7229cac4604a3c7591d22cc03de478ca0ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
