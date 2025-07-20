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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWM4X37E%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhZEz0dJB7Mft9SnpwPLlvyQWJLoxei%2Fz1P%2B0rKQKIVAiEAieE%2BFne3qwuc6BGarYiHp5%2B6Z%2FLfRNg450Cg%2FzXALIkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJCO5rRAM90UDHO0GircAwrIOC2a2f9RPnJsVZqyaSTnAnr0BuUzzNzSHKf05yB7QptQfuwm6NUG5SqdVQzWY4Vleg%2BKUReUm0ZkIC3QSFWrwDdquSkZJ6FmxLOKmQD90bfkA3Mh%2F7yRRiTGk7TsEq%2BZjhbD9w8F0Fk7e4cQJc4tRil2bgLTFBZ2Pyo2562It%2BIOVzRVrjCVCO%2BzXkFNC5RGYCP3jAxZ3U%2B9f7jLqLCZMm4nTp3JPyND42fbJR0J2FfuEqmZkk1rBHpIlTO0bheRf%2FuA7MdvTzKz633BtHPOUgMJklQT67J8ibmNeMJ9uHtDylEm1rPsvqHph61woIjsv%2FTKEazq94xR9dXeFpaK1zeH7g5olRpvubQI%2FQV5qQIl7ZmTpgcxpZvkUXJGnSRqiPZzt3gWwLylauwwztC%2FTQv9iVXHvBFjF7IkD2E5p0qsIdsl%2F%2FT3NVJp4DQPi3gCzk6tWWaTcrdsCPR0NEKrOZJJnl9ereaRqqBpwRJcHBm8CVduWXTmiD7LDxZyzB086xfEQ1595undcv2zAaA4wewcnMaaiK40b09zZS1F4%2FmFPseKPibQEZ9RGvTcHBun3dzENjrjiisapnHG4dg2n4aBEcoYOQvFev6E59TE6rqJlqWXKUDcBJdbMLK78sMGOqUBywJO%2F2UAKHIOnMIIEmNStHubTEHFuVwjetsbSuzxKRpcR3IMOCnV5bTo7mctnZ9qNyhGv6Y3MBDCi47vEG2RVEl8UKA5fSRx%2BPGptKJL1STn1SBHmiT%2FnFniIyrq7sqnG3PGnl9FzYoGmegVRiRC2cJLofzb08Ai602Wx%2F4VmCM7RiWWVp2WQTf%2B%2Fobvu8%2FG25xgq5kpfAXn%2FTrKcFzmiHWbKo4%2B&X-Amz-Signature=fee57467ccf65f458ca56d73f6aede615d4f58917db6c6d51c39186d42790fac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWM4X37E%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhZEz0dJB7Mft9SnpwPLlvyQWJLoxei%2Fz1P%2B0rKQKIVAiEAieE%2BFne3qwuc6BGarYiHp5%2B6Z%2FLfRNg450Cg%2FzXALIkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJCO5rRAM90UDHO0GircAwrIOC2a2f9RPnJsVZqyaSTnAnr0BuUzzNzSHKf05yB7QptQfuwm6NUG5SqdVQzWY4Vleg%2BKUReUm0ZkIC3QSFWrwDdquSkZJ6FmxLOKmQD90bfkA3Mh%2F7yRRiTGk7TsEq%2BZjhbD9w8F0Fk7e4cQJc4tRil2bgLTFBZ2Pyo2562It%2BIOVzRVrjCVCO%2BzXkFNC5RGYCP3jAxZ3U%2B9f7jLqLCZMm4nTp3JPyND42fbJR0J2FfuEqmZkk1rBHpIlTO0bheRf%2FuA7MdvTzKz633BtHPOUgMJklQT67J8ibmNeMJ9uHtDylEm1rPsvqHph61woIjsv%2FTKEazq94xR9dXeFpaK1zeH7g5olRpvubQI%2FQV5qQIl7ZmTpgcxpZvkUXJGnSRqiPZzt3gWwLylauwwztC%2FTQv9iVXHvBFjF7IkD2E5p0qsIdsl%2F%2FT3NVJp4DQPi3gCzk6tWWaTcrdsCPR0NEKrOZJJnl9ereaRqqBpwRJcHBm8CVduWXTmiD7LDxZyzB086xfEQ1595undcv2zAaA4wewcnMaaiK40b09zZS1F4%2FmFPseKPibQEZ9RGvTcHBun3dzENjrjiisapnHG4dg2n4aBEcoYOQvFev6E59TE6rqJlqWXKUDcBJdbMLK78sMGOqUBywJO%2F2UAKHIOnMIIEmNStHubTEHFuVwjetsbSuzxKRpcR3IMOCnV5bTo7mctnZ9qNyhGv6Y3MBDCi47vEG2RVEl8UKA5fSRx%2BPGptKJL1STn1SBHmiT%2FnFniIyrq7sqnG3PGnl9FzYoGmegVRiRC2cJLofzb08Ai602Wx%2F4VmCM7RiWWVp2WQTf%2B%2Fobvu8%2FG25xgq5kpfAXn%2FTrKcFzmiHWbKo4%2B&X-Amz-Signature=0f3bc70f47a794177fe7c141053c5936c3c719011f21023ecd4d85ea3aaf2b14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWM4X37E%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhZEz0dJB7Mft9SnpwPLlvyQWJLoxei%2Fz1P%2B0rKQKIVAiEAieE%2BFne3qwuc6BGarYiHp5%2B6Z%2FLfRNg450Cg%2FzXALIkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJCO5rRAM90UDHO0GircAwrIOC2a2f9RPnJsVZqyaSTnAnr0BuUzzNzSHKf05yB7QptQfuwm6NUG5SqdVQzWY4Vleg%2BKUReUm0ZkIC3QSFWrwDdquSkZJ6FmxLOKmQD90bfkA3Mh%2F7yRRiTGk7TsEq%2BZjhbD9w8F0Fk7e4cQJc4tRil2bgLTFBZ2Pyo2562It%2BIOVzRVrjCVCO%2BzXkFNC5RGYCP3jAxZ3U%2B9f7jLqLCZMm4nTp3JPyND42fbJR0J2FfuEqmZkk1rBHpIlTO0bheRf%2FuA7MdvTzKz633BtHPOUgMJklQT67J8ibmNeMJ9uHtDylEm1rPsvqHph61woIjsv%2FTKEazq94xR9dXeFpaK1zeH7g5olRpvubQI%2FQV5qQIl7ZmTpgcxpZvkUXJGnSRqiPZzt3gWwLylauwwztC%2FTQv9iVXHvBFjF7IkD2E5p0qsIdsl%2F%2FT3NVJp4DQPi3gCzk6tWWaTcrdsCPR0NEKrOZJJnl9ereaRqqBpwRJcHBm8CVduWXTmiD7LDxZyzB086xfEQ1595undcv2zAaA4wewcnMaaiK40b09zZS1F4%2FmFPseKPibQEZ9RGvTcHBun3dzENjrjiisapnHG4dg2n4aBEcoYOQvFev6E59TE6rqJlqWXKUDcBJdbMLK78sMGOqUBywJO%2F2UAKHIOnMIIEmNStHubTEHFuVwjetsbSuzxKRpcR3IMOCnV5bTo7mctnZ9qNyhGv6Y3MBDCi47vEG2RVEl8UKA5fSRx%2BPGptKJL1STn1SBHmiT%2FnFniIyrq7sqnG3PGnl9FzYoGmegVRiRC2cJLofzb08Ai602Wx%2F4VmCM7RiWWVp2WQTf%2B%2Fobvu8%2FG25xgq5kpfAXn%2FTrKcFzmiHWbKo4%2B&X-Amz-Signature=6b8b86ba77496fadee6ffa341de28cee45e19dcfa1408a4d22aaf1eda7d333b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWM4X37E%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhZEz0dJB7Mft9SnpwPLlvyQWJLoxei%2Fz1P%2B0rKQKIVAiEAieE%2BFne3qwuc6BGarYiHp5%2B6Z%2FLfRNg450Cg%2FzXALIkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJCO5rRAM90UDHO0GircAwrIOC2a2f9RPnJsVZqyaSTnAnr0BuUzzNzSHKf05yB7QptQfuwm6NUG5SqdVQzWY4Vleg%2BKUReUm0ZkIC3QSFWrwDdquSkZJ6FmxLOKmQD90bfkA3Mh%2F7yRRiTGk7TsEq%2BZjhbD9w8F0Fk7e4cQJc4tRil2bgLTFBZ2Pyo2562It%2BIOVzRVrjCVCO%2BzXkFNC5RGYCP3jAxZ3U%2B9f7jLqLCZMm4nTp3JPyND42fbJR0J2FfuEqmZkk1rBHpIlTO0bheRf%2FuA7MdvTzKz633BtHPOUgMJklQT67J8ibmNeMJ9uHtDylEm1rPsvqHph61woIjsv%2FTKEazq94xR9dXeFpaK1zeH7g5olRpvubQI%2FQV5qQIl7ZmTpgcxpZvkUXJGnSRqiPZzt3gWwLylauwwztC%2FTQv9iVXHvBFjF7IkD2E5p0qsIdsl%2F%2FT3NVJp4DQPi3gCzk6tWWaTcrdsCPR0NEKrOZJJnl9ereaRqqBpwRJcHBm8CVduWXTmiD7LDxZyzB086xfEQ1595undcv2zAaA4wewcnMaaiK40b09zZS1F4%2FmFPseKPibQEZ9RGvTcHBun3dzENjrjiisapnHG4dg2n4aBEcoYOQvFev6E59TE6rqJlqWXKUDcBJdbMLK78sMGOqUBywJO%2F2UAKHIOnMIIEmNStHubTEHFuVwjetsbSuzxKRpcR3IMOCnV5bTo7mctnZ9qNyhGv6Y3MBDCi47vEG2RVEl8UKA5fSRx%2BPGptKJL1STn1SBHmiT%2FnFniIyrq7sqnG3PGnl9FzYoGmegVRiRC2cJLofzb08Ai602Wx%2F4VmCM7RiWWVp2WQTf%2B%2Fobvu8%2FG25xgq5kpfAXn%2FTrKcFzmiHWbKo4%2B&X-Amz-Signature=d0aba1b12cf602a27c51d32768fafb8ab9bfa739b987c294315508e6abe302f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWM4X37E%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhZEz0dJB7Mft9SnpwPLlvyQWJLoxei%2Fz1P%2B0rKQKIVAiEAieE%2BFne3qwuc6BGarYiHp5%2B6Z%2FLfRNg450Cg%2FzXALIkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJCO5rRAM90UDHO0GircAwrIOC2a2f9RPnJsVZqyaSTnAnr0BuUzzNzSHKf05yB7QptQfuwm6NUG5SqdVQzWY4Vleg%2BKUReUm0ZkIC3QSFWrwDdquSkZJ6FmxLOKmQD90bfkA3Mh%2F7yRRiTGk7TsEq%2BZjhbD9w8F0Fk7e4cQJc4tRil2bgLTFBZ2Pyo2562It%2BIOVzRVrjCVCO%2BzXkFNC5RGYCP3jAxZ3U%2B9f7jLqLCZMm4nTp3JPyND42fbJR0J2FfuEqmZkk1rBHpIlTO0bheRf%2FuA7MdvTzKz633BtHPOUgMJklQT67J8ibmNeMJ9uHtDylEm1rPsvqHph61woIjsv%2FTKEazq94xR9dXeFpaK1zeH7g5olRpvubQI%2FQV5qQIl7ZmTpgcxpZvkUXJGnSRqiPZzt3gWwLylauwwztC%2FTQv9iVXHvBFjF7IkD2E5p0qsIdsl%2F%2FT3NVJp4DQPi3gCzk6tWWaTcrdsCPR0NEKrOZJJnl9ereaRqqBpwRJcHBm8CVduWXTmiD7LDxZyzB086xfEQ1595undcv2zAaA4wewcnMaaiK40b09zZS1F4%2FmFPseKPibQEZ9RGvTcHBun3dzENjrjiisapnHG4dg2n4aBEcoYOQvFev6E59TE6rqJlqWXKUDcBJdbMLK78sMGOqUBywJO%2F2UAKHIOnMIIEmNStHubTEHFuVwjetsbSuzxKRpcR3IMOCnV5bTo7mctnZ9qNyhGv6Y3MBDCi47vEG2RVEl8UKA5fSRx%2BPGptKJL1STn1SBHmiT%2FnFniIyrq7sqnG3PGnl9FzYoGmegVRiRC2cJLofzb08Ai602Wx%2F4VmCM7RiWWVp2WQTf%2B%2Fobvu8%2FG25xgq5kpfAXn%2FTrKcFzmiHWbKo4%2B&X-Amz-Signature=e581aea3e9f4544cd44a7036fe9a7dd46825270c735fe6fd46e7a17e3ef450a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
