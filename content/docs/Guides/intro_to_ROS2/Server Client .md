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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3AW7YMJ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY6jmiHW3iiYP6Br5ZubnLDRyFrUBrwNtLuNcsrzXwUQIhAMiSapVpQN83rtzBvL1iodjEJZzqNXAnTeCcmK7FadcHKv8DCCEQABoMNjM3NDIzMTgzODA1IgzqyNGSCs9YJ0bzXnoq3AMbkW0xRH1AgbUliZFJCCi3qDdXezQI97VxwApDoHwXsTE9OFwywhGAx3x6B393H86bPAM81IWU%2F3TM1CH1u4FXM7H3gOIMYg7husEP6gpJ3o1d9rl5y%2BQBQgzrCq3tXw2y8MsgKWBeojr19d6sDV1pm9piXoxZRpfA6kpF7%2FbGmmO5wVh0Pf2ZNyei3NcZ4wJvzLSjQUgvEmZSU9t%2BS7%2F0oHRDjWsHjHLcYT3DVAflAbMzBRjFXmA%2BPIEjmmx0dHsMKz4O0OCd%2FdHZ%2FFN1nP7ZZ1kUr1nnImcrTJGG1kkjLFiInRdewPHbGcHuPdvkVfeAusjyrvQ578uM7XarB8igEWC%2F3iBTI3ezTureiyVdhQz08Y39Ri6VKaPbOOG5yOgSlC7mVYHqYFUjD%2F1nU0Hbfs2H7wpRbDmCWY9x3YDWLuM6pshIvNvgmnxIbCY6cY5zlG1WJNtsTNsGNYnH9SH%2Bk4%2BPMyrcefIv8swEJX0KJukcOd1cVUhmznWvGsog3032A7Jsmk%2BEpW0v8j9MHSIBkvC6YDlbgwFE8KsDcoxvJQ0OGlfMYewZUANo5WOd6Fad1EE0mlQrMtD1des0kg8AhWt%2BQsjZgIeJ7RJHhkP%2FXm%2Bq%2B%2BwCvGIEuysyujC8jo2%2FBjqkAdL6pkkfEW6Rjyl%2B2TT5NcqMo06mnGQpf%2BkMZrZOijGJ%2FnKm5hRmiuKJkzUPQ5I5I%2F8xCiX5XDYNs8%2F7KOPgEJ1TnwG9lTwZ%2BIate5GWN3mnJPpcnn3KaGBUjkkvKrCJplK5Hr0%2FS6ZE7nmYCuR%2FNOHuULTLBIM%2FZaBIVHdFu8waHuQ4a3bbLVe5rGQhIK6v35gSzXsmtv8B5v0vF5QfL3GSQz3W&X-Amz-Signature=af51e45811138968d4e26b2f6296bbfa1d726f26fab45f46cfcb9b2af577a0bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3AW7YMJ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY6jmiHW3iiYP6Br5ZubnLDRyFrUBrwNtLuNcsrzXwUQIhAMiSapVpQN83rtzBvL1iodjEJZzqNXAnTeCcmK7FadcHKv8DCCEQABoMNjM3NDIzMTgzODA1IgzqyNGSCs9YJ0bzXnoq3AMbkW0xRH1AgbUliZFJCCi3qDdXezQI97VxwApDoHwXsTE9OFwywhGAx3x6B393H86bPAM81IWU%2F3TM1CH1u4FXM7H3gOIMYg7husEP6gpJ3o1d9rl5y%2BQBQgzrCq3tXw2y8MsgKWBeojr19d6sDV1pm9piXoxZRpfA6kpF7%2FbGmmO5wVh0Pf2ZNyei3NcZ4wJvzLSjQUgvEmZSU9t%2BS7%2F0oHRDjWsHjHLcYT3DVAflAbMzBRjFXmA%2BPIEjmmx0dHsMKz4O0OCd%2FdHZ%2FFN1nP7ZZ1kUr1nnImcrTJGG1kkjLFiInRdewPHbGcHuPdvkVfeAusjyrvQ578uM7XarB8igEWC%2F3iBTI3ezTureiyVdhQz08Y39Ri6VKaPbOOG5yOgSlC7mVYHqYFUjD%2F1nU0Hbfs2H7wpRbDmCWY9x3YDWLuM6pshIvNvgmnxIbCY6cY5zlG1WJNtsTNsGNYnH9SH%2Bk4%2BPMyrcefIv8swEJX0KJukcOd1cVUhmznWvGsog3032A7Jsmk%2BEpW0v8j9MHSIBkvC6YDlbgwFE8KsDcoxvJQ0OGlfMYewZUANo5WOd6Fad1EE0mlQrMtD1des0kg8AhWt%2BQsjZgIeJ7RJHhkP%2FXm%2Bq%2B%2BwCvGIEuysyujC8jo2%2FBjqkAdL6pkkfEW6Rjyl%2B2TT5NcqMo06mnGQpf%2BkMZrZOijGJ%2FnKm5hRmiuKJkzUPQ5I5I%2F8xCiX5XDYNs8%2F7KOPgEJ1TnwG9lTwZ%2BIate5GWN3mnJPpcnn3KaGBUjkkvKrCJplK5Hr0%2FS6ZE7nmYCuR%2FNOHuULTLBIM%2FZaBIVHdFu8waHuQ4a3bbLVe5rGQhIK6v35gSzXsmtv8B5v0vF5QfL3GSQz3W&X-Amz-Signature=8e15ffbf2067eb0fb34e78fd21403a1565959a940bfe10e5ba4c088a132b126f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3AW7YMJ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY6jmiHW3iiYP6Br5ZubnLDRyFrUBrwNtLuNcsrzXwUQIhAMiSapVpQN83rtzBvL1iodjEJZzqNXAnTeCcmK7FadcHKv8DCCEQABoMNjM3NDIzMTgzODA1IgzqyNGSCs9YJ0bzXnoq3AMbkW0xRH1AgbUliZFJCCi3qDdXezQI97VxwApDoHwXsTE9OFwywhGAx3x6B393H86bPAM81IWU%2F3TM1CH1u4FXM7H3gOIMYg7husEP6gpJ3o1d9rl5y%2BQBQgzrCq3tXw2y8MsgKWBeojr19d6sDV1pm9piXoxZRpfA6kpF7%2FbGmmO5wVh0Pf2ZNyei3NcZ4wJvzLSjQUgvEmZSU9t%2BS7%2F0oHRDjWsHjHLcYT3DVAflAbMzBRjFXmA%2BPIEjmmx0dHsMKz4O0OCd%2FdHZ%2FFN1nP7ZZ1kUr1nnImcrTJGG1kkjLFiInRdewPHbGcHuPdvkVfeAusjyrvQ578uM7XarB8igEWC%2F3iBTI3ezTureiyVdhQz08Y39Ri6VKaPbOOG5yOgSlC7mVYHqYFUjD%2F1nU0Hbfs2H7wpRbDmCWY9x3YDWLuM6pshIvNvgmnxIbCY6cY5zlG1WJNtsTNsGNYnH9SH%2Bk4%2BPMyrcefIv8swEJX0KJukcOd1cVUhmznWvGsog3032A7Jsmk%2BEpW0v8j9MHSIBkvC6YDlbgwFE8KsDcoxvJQ0OGlfMYewZUANo5WOd6Fad1EE0mlQrMtD1des0kg8AhWt%2BQsjZgIeJ7RJHhkP%2FXm%2Bq%2B%2BwCvGIEuysyujC8jo2%2FBjqkAdL6pkkfEW6Rjyl%2B2TT5NcqMo06mnGQpf%2BkMZrZOijGJ%2FnKm5hRmiuKJkzUPQ5I5I%2F8xCiX5XDYNs8%2F7KOPgEJ1TnwG9lTwZ%2BIate5GWN3mnJPpcnn3KaGBUjkkvKrCJplK5Hr0%2FS6ZE7nmYCuR%2FNOHuULTLBIM%2FZaBIVHdFu8waHuQ4a3bbLVe5rGQhIK6v35gSzXsmtv8B5v0vF5QfL3GSQz3W&X-Amz-Signature=51e7db0292167ea6c8e3cff7bf3b56819048077b4c9b6cdf1e9d285c48ece166&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3AW7YMJ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY6jmiHW3iiYP6Br5ZubnLDRyFrUBrwNtLuNcsrzXwUQIhAMiSapVpQN83rtzBvL1iodjEJZzqNXAnTeCcmK7FadcHKv8DCCEQABoMNjM3NDIzMTgzODA1IgzqyNGSCs9YJ0bzXnoq3AMbkW0xRH1AgbUliZFJCCi3qDdXezQI97VxwApDoHwXsTE9OFwywhGAx3x6B393H86bPAM81IWU%2F3TM1CH1u4FXM7H3gOIMYg7husEP6gpJ3o1d9rl5y%2BQBQgzrCq3tXw2y8MsgKWBeojr19d6sDV1pm9piXoxZRpfA6kpF7%2FbGmmO5wVh0Pf2ZNyei3NcZ4wJvzLSjQUgvEmZSU9t%2BS7%2F0oHRDjWsHjHLcYT3DVAflAbMzBRjFXmA%2BPIEjmmx0dHsMKz4O0OCd%2FdHZ%2FFN1nP7ZZ1kUr1nnImcrTJGG1kkjLFiInRdewPHbGcHuPdvkVfeAusjyrvQ578uM7XarB8igEWC%2F3iBTI3ezTureiyVdhQz08Y39Ri6VKaPbOOG5yOgSlC7mVYHqYFUjD%2F1nU0Hbfs2H7wpRbDmCWY9x3YDWLuM6pshIvNvgmnxIbCY6cY5zlG1WJNtsTNsGNYnH9SH%2Bk4%2BPMyrcefIv8swEJX0KJukcOd1cVUhmznWvGsog3032A7Jsmk%2BEpW0v8j9MHSIBkvC6YDlbgwFE8KsDcoxvJQ0OGlfMYewZUANo5WOd6Fad1EE0mlQrMtD1des0kg8AhWt%2BQsjZgIeJ7RJHhkP%2FXm%2Bq%2B%2BwCvGIEuysyujC8jo2%2FBjqkAdL6pkkfEW6Rjyl%2B2TT5NcqMo06mnGQpf%2BkMZrZOijGJ%2FnKm5hRmiuKJkzUPQ5I5I%2F8xCiX5XDYNs8%2F7KOPgEJ1TnwG9lTwZ%2BIate5GWN3mnJPpcnn3KaGBUjkkvKrCJplK5Hr0%2FS6ZE7nmYCuR%2FNOHuULTLBIM%2FZaBIVHdFu8waHuQ4a3bbLVe5rGQhIK6v35gSzXsmtv8B5v0vF5QfL3GSQz3W&X-Amz-Signature=c6828e56ac04b799d674d8bfdce17b9ac68d8c23eab5a92bb5653f24e2185255&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3AW7YMJ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY6jmiHW3iiYP6Br5ZubnLDRyFrUBrwNtLuNcsrzXwUQIhAMiSapVpQN83rtzBvL1iodjEJZzqNXAnTeCcmK7FadcHKv8DCCEQABoMNjM3NDIzMTgzODA1IgzqyNGSCs9YJ0bzXnoq3AMbkW0xRH1AgbUliZFJCCi3qDdXezQI97VxwApDoHwXsTE9OFwywhGAx3x6B393H86bPAM81IWU%2F3TM1CH1u4FXM7H3gOIMYg7husEP6gpJ3o1d9rl5y%2BQBQgzrCq3tXw2y8MsgKWBeojr19d6sDV1pm9piXoxZRpfA6kpF7%2FbGmmO5wVh0Pf2ZNyei3NcZ4wJvzLSjQUgvEmZSU9t%2BS7%2F0oHRDjWsHjHLcYT3DVAflAbMzBRjFXmA%2BPIEjmmx0dHsMKz4O0OCd%2FdHZ%2FFN1nP7ZZ1kUr1nnImcrTJGG1kkjLFiInRdewPHbGcHuPdvkVfeAusjyrvQ578uM7XarB8igEWC%2F3iBTI3ezTureiyVdhQz08Y39Ri6VKaPbOOG5yOgSlC7mVYHqYFUjD%2F1nU0Hbfs2H7wpRbDmCWY9x3YDWLuM6pshIvNvgmnxIbCY6cY5zlG1WJNtsTNsGNYnH9SH%2Bk4%2BPMyrcefIv8swEJX0KJukcOd1cVUhmznWvGsog3032A7Jsmk%2BEpW0v8j9MHSIBkvC6YDlbgwFE8KsDcoxvJQ0OGlfMYewZUANo5WOd6Fad1EE0mlQrMtD1des0kg8AhWt%2BQsjZgIeJ7RJHhkP%2FXm%2Bq%2B%2BwCvGIEuysyujC8jo2%2FBjqkAdL6pkkfEW6Rjyl%2B2TT5NcqMo06mnGQpf%2BkMZrZOijGJ%2FnKm5hRmiuKJkzUPQ5I5I%2F8xCiX5XDYNs8%2F7KOPgEJ1TnwG9lTwZ%2BIate5GWN3mnJPpcnn3KaGBUjkkvKrCJplK5Hr0%2FS6ZE7nmYCuR%2FNOHuULTLBIM%2FZaBIVHdFu8waHuQ4a3bbLVe5rGQhIK6v35gSzXsmtv8B5v0vF5QfL3GSQz3W&X-Amz-Signature=889bc9001ebde753e79bd40c458f309e47f00a2652c1929f0fd8428cceb94f4f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
