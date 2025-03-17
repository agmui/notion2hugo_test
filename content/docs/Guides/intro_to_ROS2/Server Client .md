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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TV4NSI2%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T032252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnjs1JD%2BBi6UD%2BHrAwHTWNFFynAQnQO0phi%2F4W8Pe1wAiEA3O1DmFnzua%2BWYdI1AmYhB5Umuy0zR8UhFSbpkZLwsUMq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDBUUFr43mM0K%2FwiD1ircA1xFJmxpUOKa1wP9nbyKzS%2B0wf8RvknJrveOt%2FPJOXkTwzEDLcRV%2B6KWkGtjQs%2B0hO%2FwbRfkDwkjm2DBHaNuKIX0AEJyjXHs3r%2BbDvS8ZcunvvFDzLUfL4P%2Fy1BwCdag%2BMOVpa8zsEaQPHeUEuoSuLYgkBkPNQwFqXLoWDfMudp9GBQN3ZXw5FAJIxW%2BOfgxRLlDNnW5mv%2FdhnBDINkQ7MOHEz4E9e8%2BNvWElHKg%2B3Y0OersFHBpwkAZZxHjLl%2Fc%2B6Yp7lUMb6rt8s3XtGTsu5HROVIQM9QZyGr09kylGh%2B1Fh%2BDBl2pyyhVhPCSSU3k%2BPpa6B7RlHf1E4K6pJLQitHDfttYnWHj0%2BIHOe1kC9UFbvaN2s57ZSoT0sCuPGwc1qET4ObVcOjhdsJcxyFDf4LCW0hcfjdi5YNbOFxdjWjX8Wm8h4JKK26n%2FwnHackEwpDm4lHNKl95NCq7poG0fiORd%2Fzsrg7J3GwJQT4MD9Im0oo%2FK8JUhwFBV9XTYuBJkq%2BLq%2FVumR3kXcA4ZJADPQOl7vAvVhc79C2s%2FrtBQNxkCvgnOjLUAQZAE8llRIjQhoEwVcOke5dB2%2BMBcCUphUVxJTdlsBM7M3BMKPtNU9x0gKeD9fd9ca0Q4fiVMJOb3r4GOqUBhDUcRBL2uBnTmdmi9qUyFw3cdHqRtsW3bVzZdr4VBwU3NANs8YKHToUxj17YVo5sg43uPXo54JN%2B1jEYaYIV8lqywT3dMevS2MPkavyI3TIT1GnENfzlPjxn72tCucKD856wU6wEwfKQKVJ13S94xVG5DAaT%2BojpL6qcs5EVjA1WQGzCOM2vN18lhi%2F9d0Md7UAsi6xoWW%2FVB2au8UMrHtMxx0%2FK&X-Amz-Signature=253c64e3cb4c946861f9811fc1800e86dbc098b6cb7ace1b3978f3989aaf90be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TV4NSI2%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T032252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnjs1JD%2BBi6UD%2BHrAwHTWNFFynAQnQO0phi%2F4W8Pe1wAiEA3O1DmFnzua%2BWYdI1AmYhB5Umuy0zR8UhFSbpkZLwsUMq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDBUUFr43mM0K%2FwiD1ircA1xFJmxpUOKa1wP9nbyKzS%2B0wf8RvknJrveOt%2FPJOXkTwzEDLcRV%2B6KWkGtjQs%2B0hO%2FwbRfkDwkjm2DBHaNuKIX0AEJyjXHs3r%2BbDvS8ZcunvvFDzLUfL4P%2Fy1BwCdag%2BMOVpa8zsEaQPHeUEuoSuLYgkBkPNQwFqXLoWDfMudp9GBQN3ZXw5FAJIxW%2BOfgxRLlDNnW5mv%2FdhnBDINkQ7MOHEz4E9e8%2BNvWElHKg%2B3Y0OersFHBpwkAZZxHjLl%2Fc%2B6Yp7lUMb6rt8s3XtGTsu5HROVIQM9QZyGr09kylGh%2B1Fh%2BDBl2pyyhVhPCSSU3k%2BPpa6B7RlHf1E4K6pJLQitHDfttYnWHj0%2BIHOe1kC9UFbvaN2s57ZSoT0sCuPGwc1qET4ObVcOjhdsJcxyFDf4LCW0hcfjdi5YNbOFxdjWjX8Wm8h4JKK26n%2FwnHackEwpDm4lHNKl95NCq7poG0fiORd%2Fzsrg7J3GwJQT4MD9Im0oo%2FK8JUhwFBV9XTYuBJkq%2BLq%2FVumR3kXcA4ZJADPQOl7vAvVhc79C2s%2FrtBQNxkCvgnOjLUAQZAE8llRIjQhoEwVcOke5dB2%2BMBcCUphUVxJTdlsBM7M3BMKPtNU9x0gKeD9fd9ca0Q4fiVMJOb3r4GOqUBhDUcRBL2uBnTmdmi9qUyFw3cdHqRtsW3bVzZdr4VBwU3NANs8YKHToUxj17YVo5sg43uPXo54JN%2B1jEYaYIV8lqywT3dMevS2MPkavyI3TIT1GnENfzlPjxn72tCucKD856wU6wEwfKQKVJ13S94xVG5DAaT%2BojpL6qcs5EVjA1WQGzCOM2vN18lhi%2F9d0Md7UAsi6xoWW%2FVB2au8UMrHtMxx0%2FK&X-Amz-Signature=11d1aaa5dcac0e561b477bb35dec143f760740396791b89cdf90a0fb5d76ae29&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TV4NSI2%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T032252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnjs1JD%2BBi6UD%2BHrAwHTWNFFynAQnQO0phi%2F4W8Pe1wAiEA3O1DmFnzua%2BWYdI1AmYhB5Umuy0zR8UhFSbpkZLwsUMq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDBUUFr43mM0K%2FwiD1ircA1xFJmxpUOKa1wP9nbyKzS%2B0wf8RvknJrveOt%2FPJOXkTwzEDLcRV%2B6KWkGtjQs%2B0hO%2FwbRfkDwkjm2DBHaNuKIX0AEJyjXHs3r%2BbDvS8ZcunvvFDzLUfL4P%2Fy1BwCdag%2BMOVpa8zsEaQPHeUEuoSuLYgkBkPNQwFqXLoWDfMudp9GBQN3ZXw5FAJIxW%2BOfgxRLlDNnW5mv%2FdhnBDINkQ7MOHEz4E9e8%2BNvWElHKg%2B3Y0OersFHBpwkAZZxHjLl%2Fc%2B6Yp7lUMb6rt8s3XtGTsu5HROVIQM9QZyGr09kylGh%2B1Fh%2BDBl2pyyhVhPCSSU3k%2BPpa6B7RlHf1E4K6pJLQitHDfttYnWHj0%2BIHOe1kC9UFbvaN2s57ZSoT0sCuPGwc1qET4ObVcOjhdsJcxyFDf4LCW0hcfjdi5YNbOFxdjWjX8Wm8h4JKK26n%2FwnHackEwpDm4lHNKl95NCq7poG0fiORd%2Fzsrg7J3GwJQT4MD9Im0oo%2FK8JUhwFBV9XTYuBJkq%2BLq%2FVumR3kXcA4ZJADPQOl7vAvVhc79C2s%2FrtBQNxkCvgnOjLUAQZAE8llRIjQhoEwVcOke5dB2%2BMBcCUphUVxJTdlsBM7M3BMKPtNU9x0gKeD9fd9ca0Q4fiVMJOb3r4GOqUBhDUcRBL2uBnTmdmi9qUyFw3cdHqRtsW3bVzZdr4VBwU3NANs8YKHToUxj17YVo5sg43uPXo54JN%2B1jEYaYIV8lqywT3dMevS2MPkavyI3TIT1GnENfzlPjxn72tCucKD856wU6wEwfKQKVJ13S94xVG5DAaT%2BojpL6qcs5EVjA1WQGzCOM2vN18lhi%2F9d0Md7UAsi6xoWW%2FVB2au8UMrHtMxx0%2FK&X-Amz-Signature=105590e46180bf06ba3c04c957982820e7051b9ecfce78388554f5ccc050dbcd&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TV4NSI2%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T032252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnjs1JD%2BBi6UD%2BHrAwHTWNFFynAQnQO0phi%2F4W8Pe1wAiEA3O1DmFnzua%2BWYdI1AmYhB5Umuy0zR8UhFSbpkZLwsUMq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDBUUFr43mM0K%2FwiD1ircA1xFJmxpUOKa1wP9nbyKzS%2B0wf8RvknJrveOt%2FPJOXkTwzEDLcRV%2B6KWkGtjQs%2B0hO%2FwbRfkDwkjm2DBHaNuKIX0AEJyjXHs3r%2BbDvS8ZcunvvFDzLUfL4P%2Fy1BwCdag%2BMOVpa8zsEaQPHeUEuoSuLYgkBkPNQwFqXLoWDfMudp9GBQN3ZXw5FAJIxW%2BOfgxRLlDNnW5mv%2FdhnBDINkQ7MOHEz4E9e8%2BNvWElHKg%2B3Y0OersFHBpwkAZZxHjLl%2Fc%2B6Yp7lUMb6rt8s3XtGTsu5HROVIQM9QZyGr09kylGh%2B1Fh%2BDBl2pyyhVhPCSSU3k%2BPpa6B7RlHf1E4K6pJLQitHDfttYnWHj0%2BIHOe1kC9UFbvaN2s57ZSoT0sCuPGwc1qET4ObVcOjhdsJcxyFDf4LCW0hcfjdi5YNbOFxdjWjX8Wm8h4JKK26n%2FwnHackEwpDm4lHNKl95NCq7poG0fiORd%2Fzsrg7J3GwJQT4MD9Im0oo%2FK8JUhwFBV9XTYuBJkq%2BLq%2FVumR3kXcA4ZJADPQOl7vAvVhc79C2s%2FrtBQNxkCvgnOjLUAQZAE8llRIjQhoEwVcOke5dB2%2BMBcCUphUVxJTdlsBM7M3BMKPtNU9x0gKeD9fd9ca0Q4fiVMJOb3r4GOqUBhDUcRBL2uBnTmdmi9qUyFw3cdHqRtsW3bVzZdr4VBwU3NANs8YKHToUxj17YVo5sg43uPXo54JN%2B1jEYaYIV8lqywT3dMevS2MPkavyI3TIT1GnENfzlPjxn72tCucKD856wU6wEwfKQKVJ13S94xVG5DAaT%2BojpL6qcs5EVjA1WQGzCOM2vN18lhi%2F9d0Md7UAsi6xoWW%2FVB2au8UMrHtMxx0%2FK&X-Amz-Signature=f5359851a79f1c7128e05b4456c93b8e6f3403621dc99030243205b9155aeeb4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TV4NSI2%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T032252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnjs1JD%2BBi6UD%2BHrAwHTWNFFynAQnQO0phi%2F4W8Pe1wAiEA3O1DmFnzua%2BWYdI1AmYhB5Umuy0zR8UhFSbpkZLwsUMq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDBUUFr43mM0K%2FwiD1ircA1xFJmxpUOKa1wP9nbyKzS%2B0wf8RvknJrveOt%2FPJOXkTwzEDLcRV%2B6KWkGtjQs%2B0hO%2FwbRfkDwkjm2DBHaNuKIX0AEJyjXHs3r%2BbDvS8ZcunvvFDzLUfL4P%2Fy1BwCdag%2BMOVpa8zsEaQPHeUEuoSuLYgkBkPNQwFqXLoWDfMudp9GBQN3ZXw5FAJIxW%2BOfgxRLlDNnW5mv%2FdhnBDINkQ7MOHEz4E9e8%2BNvWElHKg%2B3Y0OersFHBpwkAZZxHjLl%2Fc%2B6Yp7lUMb6rt8s3XtGTsu5HROVIQM9QZyGr09kylGh%2B1Fh%2BDBl2pyyhVhPCSSU3k%2BPpa6B7RlHf1E4K6pJLQitHDfttYnWHj0%2BIHOe1kC9UFbvaN2s57ZSoT0sCuPGwc1qET4ObVcOjhdsJcxyFDf4LCW0hcfjdi5YNbOFxdjWjX8Wm8h4JKK26n%2FwnHackEwpDm4lHNKl95NCq7poG0fiORd%2Fzsrg7J3GwJQT4MD9Im0oo%2FK8JUhwFBV9XTYuBJkq%2BLq%2FVumR3kXcA4ZJADPQOl7vAvVhc79C2s%2FrtBQNxkCvgnOjLUAQZAE8llRIjQhoEwVcOke5dB2%2BMBcCUphUVxJTdlsBM7M3BMKPtNU9x0gKeD9fd9ca0Q4fiVMJOb3r4GOqUBhDUcRBL2uBnTmdmi9qUyFw3cdHqRtsW3bVzZdr4VBwU3NANs8YKHToUxj17YVo5sg43uPXo54JN%2B1jEYaYIV8lqywT3dMevS2MPkavyI3TIT1GnENfzlPjxn72tCucKD856wU6wEwfKQKVJ13S94xVG5DAaT%2BojpL6qcs5EVjA1WQGzCOM2vN18lhi%2F9d0Md7UAsi6xoWW%2FVB2au8UMrHtMxx0%2FK&X-Amz-Signature=cb5d1fde624e09c425d818a5489fc4545f0a71e8b550d9f359feae9b35e0f426&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
