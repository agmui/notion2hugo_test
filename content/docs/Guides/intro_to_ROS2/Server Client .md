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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAALM4DV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQaasgU2AXj8LaRtB4mycjQgVntdH%2FTVpIfcYn1qTALAiEA6gqra4DY7DN3aPjabQmyPiqVs3pJhAIEZICRj7y4UKsqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvSSe7BzgeLWggFySrcA5zibmurMybn4fsUqZPaA7Mz4AWKg2dBjDD2VzEdc5PJqTg%2BvJc4utc8oiO0HsiRQPwyP18fguyOHGAMywcVMzRibMh8EUg3k85QiuHmdsNPaRB%2FSfwXLzZbw0K1WYA9zD0IBSm9plg%2B%2FliWq%2BHIo7RBlz9Cuy9qAkjOcJqS9e%2FvNltE44GLwSP3l37M0hHrXvcIRhpwHMhlsNMTcURPgOE7qfHKEqki%2F6KheZembrs5ebg2%2F6uP2tHCutsAnxngLYIwVDbh3QXoBKOu71W5WJBJGG9ggnW%2FJo5S6KFlPMU%2BhaCCCWlMQTLnlTkayPYbVsV77Fo2tjGKD%2F8%2FPUwbPCxy8CRyKR2ROGmDfJa5CA7wSBV0i%2BjG8boYe8Y8On0gFFmQRcegfWHk8IV95bNalfATv7fkIuxDcn3mbQrY1TKrT%2F6zxb%2F79GzptSEqmspfvuhKjBcthddGQ4YCcu1iYnMvHvIDqrvi5OAJ1aw06%2BkGdg9Y2YHHFT2%2FXuyPDvhtctxm9386Llyw5O0M381i3WWq7Fd67XZTn2ftCjHHU4zQHWS04eUBWlvyZdfbW83bOJDFyzUpKX9tPWdNUL5sdnJB%2FeOXsMtj%2B69u%2FCp8CH%2FeMeVxwyBqQNABlonTMIifqL0GOqUBqhdCqYv7zhILuo%2B2ItWj19Ct6kaYX%2Ba75K4oOKg5soh%2FviOxAdNjbFE%2FLXNERWLHsYqEgrBUdHYA9Xwc2PdcSfdR%2FR5ZvXEUEwa%2ByHHIl6lRgY8rgiUMbT3HD0l%2Bcz1gOZFa3pvJ71zOd3aeJsCYKpwSkJkGTFasu29jGPMpx%2FBF72531rXDpE%2F2acVMV7K%2B0SFSxZqUb3QA75igduuGcEj7P7Sx&X-Amz-Signature=0355aa068e908b2fd437dfab74c1e06281a0754126f8ba507d4711159b134578&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAALM4DV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQaasgU2AXj8LaRtB4mycjQgVntdH%2FTVpIfcYn1qTALAiEA6gqra4DY7DN3aPjabQmyPiqVs3pJhAIEZICRj7y4UKsqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvSSe7BzgeLWggFySrcA5zibmurMybn4fsUqZPaA7Mz4AWKg2dBjDD2VzEdc5PJqTg%2BvJc4utc8oiO0HsiRQPwyP18fguyOHGAMywcVMzRibMh8EUg3k85QiuHmdsNPaRB%2FSfwXLzZbw0K1WYA9zD0IBSm9plg%2B%2FliWq%2BHIo7RBlz9Cuy9qAkjOcJqS9e%2FvNltE44GLwSP3l37M0hHrXvcIRhpwHMhlsNMTcURPgOE7qfHKEqki%2F6KheZembrs5ebg2%2F6uP2tHCutsAnxngLYIwVDbh3QXoBKOu71W5WJBJGG9ggnW%2FJo5S6KFlPMU%2BhaCCCWlMQTLnlTkayPYbVsV77Fo2tjGKD%2F8%2FPUwbPCxy8CRyKR2ROGmDfJa5CA7wSBV0i%2BjG8boYe8Y8On0gFFmQRcegfWHk8IV95bNalfATv7fkIuxDcn3mbQrY1TKrT%2F6zxb%2F79GzptSEqmspfvuhKjBcthddGQ4YCcu1iYnMvHvIDqrvi5OAJ1aw06%2BkGdg9Y2YHHFT2%2FXuyPDvhtctxm9386Llyw5O0M381i3WWq7Fd67XZTn2ftCjHHU4zQHWS04eUBWlvyZdfbW83bOJDFyzUpKX9tPWdNUL5sdnJB%2FeOXsMtj%2B69u%2FCp8CH%2FeMeVxwyBqQNABlonTMIifqL0GOqUBqhdCqYv7zhILuo%2B2ItWj19Ct6kaYX%2Ba75K4oOKg5soh%2FviOxAdNjbFE%2FLXNERWLHsYqEgrBUdHYA9Xwc2PdcSfdR%2FR5ZvXEUEwa%2ByHHIl6lRgY8rgiUMbT3HD0l%2Bcz1gOZFa3pvJ71zOd3aeJsCYKpwSkJkGTFasu29jGPMpx%2FBF72531rXDpE%2F2acVMV7K%2B0SFSxZqUb3QA75igduuGcEj7P7Sx&X-Amz-Signature=a8f3bcf84fa3e41546681251c3c6ce7a51172349b254d2168013fd00d143739b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAALM4DV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQaasgU2AXj8LaRtB4mycjQgVntdH%2FTVpIfcYn1qTALAiEA6gqra4DY7DN3aPjabQmyPiqVs3pJhAIEZICRj7y4UKsqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvSSe7BzgeLWggFySrcA5zibmurMybn4fsUqZPaA7Mz4AWKg2dBjDD2VzEdc5PJqTg%2BvJc4utc8oiO0HsiRQPwyP18fguyOHGAMywcVMzRibMh8EUg3k85QiuHmdsNPaRB%2FSfwXLzZbw0K1WYA9zD0IBSm9plg%2B%2FliWq%2BHIo7RBlz9Cuy9qAkjOcJqS9e%2FvNltE44GLwSP3l37M0hHrXvcIRhpwHMhlsNMTcURPgOE7qfHKEqki%2F6KheZembrs5ebg2%2F6uP2tHCutsAnxngLYIwVDbh3QXoBKOu71W5WJBJGG9ggnW%2FJo5S6KFlPMU%2BhaCCCWlMQTLnlTkayPYbVsV77Fo2tjGKD%2F8%2FPUwbPCxy8CRyKR2ROGmDfJa5CA7wSBV0i%2BjG8boYe8Y8On0gFFmQRcegfWHk8IV95bNalfATv7fkIuxDcn3mbQrY1TKrT%2F6zxb%2F79GzptSEqmspfvuhKjBcthddGQ4YCcu1iYnMvHvIDqrvi5OAJ1aw06%2BkGdg9Y2YHHFT2%2FXuyPDvhtctxm9386Llyw5O0M381i3WWq7Fd67XZTn2ftCjHHU4zQHWS04eUBWlvyZdfbW83bOJDFyzUpKX9tPWdNUL5sdnJB%2FeOXsMtj%2B69u%2FCp8CH%2FeMeVxwyBqQNABlonTMIifqL0GOqUBqhdCqYv7zhILuo%2B2ItWj19Ct6kaYX%2Ba75K4oOKg5soh%2FviOxAdNjbFE%2FLXNERWLHsYqEgrBUdHYA9Xwc2PdcSfdR%2FR5ZvXEUEwa%2ByHHIl6lRgY8rgiUMbT3HD0l%2Bcz1gOZFa3pvJ71zOd3aeJsCYKpwSkJkGTFasu29jGPMpx%2FBF72531rXDpE%2F2acVMV7K%2B0SFSxZqUb3QA75igduuGcEj7P7Sx&X-Amz-Signature=871940cf5d37d141f48d250daf223aab2f174795e3df57a3320550a1bba55a3b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAALM4DV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQaasgU2AXj8LaRtB4mycjQgVntdH%2FTVpIfcYn1qTALAiEA6gqra4DY7DN3aPjabQmyPiqVs3pJhAIEZICRj7y4UKsqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvSSe7BzgeLWggFySrcA5zibmurMybn4fsUqZPaA7Mz4AWKg2dBjDD2VzEdc5PJqTg%2BvJc4utc8oiO0HsiRQPwyP18fguyOHGAMywcVMzRibMh8EUg3k85QiuHmdsNPaRB%2FSfwXLzZbw0K1WYA9zD0IBSm9plg%2B%2FliWq%2BHIo7RBlz9Cuy9qAkjOcJqS9e%2FvNltE44GLwSP3l37M0hHrXvcIRhpwHMhlsNMTcURPgOE7qfHKEqki%2F6KheZembrs5ebg2%2F6uP2tHCutsAnxngLYIwVDbh3QXoBKOu71W5WJBJGG9ggnW%2FJo5S6KFlPMU%2BhaCCCWlMQTLnlTkayPYbVsV77Fo2tjGKD%2F8%2FPUwbPCxy8CRyKR2ROGmDfJa5CA7wSBV0i%2BjG8boYe8Y8On0gFFmQRcegfWHk8IV95bNalfATv7fkIuxDcn3mbQrY1TKrT%2F6zxb%2F79GzptSEqmspfvuhKjBcthddGQ4YCcu1iYnMvHvIDqrvi5OAJ1aw06%2BkGdg9Y2YHHFT2%2FXuyPDvhtctxm9386Llyw5O0M381i3WWq7Fd67XZTn2ftCjHHU4zQHWS04eUBWlvyZdfbW83bOJDFyzUpKX9tPWdNUL5sdnJB%2FeOXsMtj%2B69u%2FCp8CH%2FeMeVxwyBqQNABlonTMIifqL0GOqUBqhdCqYv7zhILuo%2B2ItWj19Ct6kaYX%2Ba75K4oOKg5soh%2FviOxAdNjbFE%2FLXNERWLHsYqEgrBUdHYA9Xwc2PdcSfdR%2FR5ZvXEUEwa%2ByHHIl6lRgY8rgiUMbT3HD0l%2Bcz1gOZFa3pvJ71zOd3aeJsCYKpwSkJkGTFasu29jGPMpx%2FBF72531rXDpE%2F2acVMV7K%2B0SFSxZqUb3QA75igduuGcEj7P7Sx&X-Amz-Signature=6ab491e1059373979ead432a9df3f31a96c172b1ea81a07dcef25065aff79eac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAALM4DV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQaasgU2AXj8LaRtB4mycjQgVntdH%2FTVpIfcYn1qTALAiEA6gqra4DY7DN3aPjabQmyPiqVs3pJhAIEZICRj7y4UKsqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvSSe7BzgeLWggFySrcA5zibmurMybn4fsUqZPaA7Mz4AWKg2dBjDD2VzEdc5PJqTg%2BvJc4utc8oiO0HsiRQPwyP18fguyOHGAMywcVMzRibMh8EUg3k85QiuHmdsNPaRB%2FSfwXLzZbw0K1WYA9zD0IBSm9plg%2B%2FliWq%2BHIo7RBlz9Cuy9qAkjOcJqS9e%2FvNltE44GLwSP3l37M0hHrXvcIRhpwHMhlsNMTcURPgOE7qfHKEqki%2F6KheZembrs5ebg2%2F6uP2tHCutsAnxngLYIwVDbh3QXoBKOu71W5WJBJGG9ggnW%2FJo5S6KFlPMU%2BhaCCCWlMQTLnlTkayPYbVsV77Fo2tjGKD%2F8%2FPUwbPCxy8CRyKR2ROGmDfJa5CA7wSBV0i%2BjG8boYe8Y8On0gFFmQRcegfWHk8IV95bNalfATv7fkIuxDcn3mbQrY1TKrT%2F6zxb%2F79GzptSEqmspfvuhKjBcthddGQ4YCcu1iYnMvHvIDqrvi5OAJ1aw06%2BkGdg9Y2YHHFT2%2FXuyPDvhtctxm9386Llyw5O0M381i3WWq7Fd67XZTn2ftCjHHU4zQHWS04eUBWlvyZdfbW83bOJDFyzUpKX9tPWdNUL5sdnJB%2FeOXsMtj%2B69u%2FCp8CH%2FeMeVxwyBqQNABlonTMIifqL0GOqUBqhdCqYv7zhILuo%2B2ItWj19Ct6kaYX%2Ba75K4oOKg5soh%2FviOxAdNjbFE%2FLXNERWLHsYqEgrBUdHYA9Xwc2PdcSfdR%2FR5ZvXEUEwa%2ByHHIl6lRgY8rgiUMbT3HD0l%2Bcz1gOZFa3pvJ71zOd3aeJsCYKpwSkJkGTFasu29jGPMpx%2FBF72531rXDpE%2F2acVMV7K%2B0SFSxZqUb3QA75igduuGcEj7P7Sx&X-Amz-Signature=c08050d32940668da0de9f0b9eda48163b9efad97115b43b8259e00fc9a86fec&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
