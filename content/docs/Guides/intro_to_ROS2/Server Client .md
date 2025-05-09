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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO62HICJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYHAlzZyZKXWM09%2FuHWF%2FbUfoJvQXnddCts3Hok9eq3AiEA7NAckLmpsZ0FrHtureXGCCXQmcr5srMlNo1WBBlMMAcqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVETYXvQDe3gNMNtyrcAy11FiHyihnxu%2BeLMAvHmEoChRBwRItzDSXc22WUMh0CArKmNAJrFgab2XhXZ7o76DaA0kUFyooNKNO83xJeWNV2Bb8UzXr97VkcaED4bdc4cVXJ96fFw3ayA0RQZBgCsBzsVQPXh0QyiVU%2B%2BL1%2F%2FcCYB0c76W2eoz3ULwgsTWbZv%2Fu2R7UgbPraL4CUM%2FuFYgcFMqQlkJnrfQRDWoQBHeQMnauaBgUhxvqkhrYPHjjqR%2BW84YE9NL98uGMM139ZNx1vzTdKqycZRGvUlTdMii9GXAjDkwrClJko11Wk7rJ8PiqrvmCpwPWjica3q4FOsoa%2B9XTCkQL1yV5T5el4eVBc6vHVWKBzLDvwhq0eITHysqEwk%2FOAZ%2BKgdWLg1F3qzCY9fIkooDh%2BP%2Fr2fZ3Vifwcw8ICT3U1tXHbeB4%2Fzj9lN%2BgakEyWGSM8y%2F2O9cjvI5NovLXw8F7LpTa3qCB%2F%2BcCyoziPmsck4HzqnJRQvgiMv8A0ZyiLugV8GglXPLvIh0qcpteyBHyRVe5SjI4023VoIILI1mDb9S4I3zORrWdCiAXTxnXqP8VfyaBfeiDzWuDVOnhMvnZqU2gU2qhVxo9B1Lt0DyOdroZ6QMlo%2FB4yLbY%2FwGqae%2BQcKBBfMMqH%2BMAGOqUBJ1%2BRpov4juEiVTBDf26bDAUlW79P3hUKV5dlks%2B2XDT%2BfR1aH%2FsfWM7p6g%2Be9N7soLHBwrlvct2wVQk7bKpiJeOgQuI8SH2wCrdD91cp91VyKo%2BuJPj1jNRsiv2x%2BhXSmmqQY9vWjDBQwZhDikASahsB7xjiPH7BkBPGWwIQomc8m2ePyQzr12FXYa0mbN589NolCQ7Su06Q97SRGNkAn2RM7c9P&X-Amz-Signature=fa1c4b3faa541ecb7279166785871339af0136e6e49256b3cdf82b1034be39c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO62HICJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYHAlzZyZKXWM09%2FuHWF%2FbUfoJvQXnddCts3Hok9eq3AiEA7NAckLmpsZ0FrHtureXGCCXQmcr5srMlNo1WBBlMMAcqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVETYXvQDe3gNMNtyrcAy11FiHyihnxu%2BeLMAvHmEoChRBwRItzDSXc22WUMh0CArKmNAJrFgab2XhXZ7o76DaA0kUFyooNKNO83xJeWNV2Bb8UzXr97VkcaED4bdc4cVXJ96fFw3ayA0RQZBgCsBzsVQPXh0QyiVU%2B%2BL1%2F%2FcCYB0c76W2eoz3ULwgsTWbZv%2Fu2R7UgbPraL4CUM%2FuFYgcFMqQlkJnrfQRDWoQBHeQMnauaBgUhxvqkhrYPHjjqR%2BW84YE9NL98uGMM139ZNx1vzTdKqycZRGvUlTdMii9GXAjDkwrClJko11Wk7rJ8PiqrvmCpwPWjica3q4FOsoa%2B9XTCkQL1yV5T5el4eVBc6vHVWKBzLDvwhq0eITHysqEwk%2FOAZ%2BKgdWLg1F3qzCY9fIkooDh%2BP%2Fr2fZ3Vifwcw8ICT3U1tXHbeB4%2Fzj9lN%2BgakEyWGSM8y%2F2O9cjvI5NovLXw8F7LpTa3qCB%2F%2BcCyoziPmsck4HzqnJRQvgiMv8A0ZyiLugV8GglXPLvIh0qcpteyBHyRVe5SjI4023VoIILI1mDb9S4I3zORrWdCiAXTxnXqP8VfyaBfeiDzWuDVOnhMvnZqU2gU2qhVxo9B1Lt0DyOdroZ6QMlo%2FB4yLbY%2FwGqae%2BQcKBBfMMqH%2BMAGOqUBJ1%2BRpov4juEiVTBDf26bDAUlW79P3hUKV5dlks%2B2XDT%2BfR1aH%2FsfWM7p6g%2Be9N7soLHBwrlvct2wVQk7bKpiJeOgQuI8SH2wCrdD91cp91VyKo%2BuJPj1jNRsiv2x%2BhXSmmqQY9vWjDBQwZhDikASahsB7xjiPH7BkBPGWwIQomc8m2ePyQzr12FXYa0mbN589NolCQ7Su06Q97SRGNkAn2RM7c9P&X-Amz-Signature=1f4baa240e8973a1c7c72b18e64fec82a7b6f7e728a796b263f8684f31b9ccf7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO62HICJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYHAlzZyZKXWM09%2FuHWF%2FbUfoJvQXnddCts3Hok9eq3AiEA7NAckLmpsZ0FrHtureXGCCXQmcr5srMlNo1WBBlMMAcqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVETYXvQDe3gNMNtyrcAy11FiHyihnxu%2BeLMAvHmEoChRBwRItzDSXc22WUMh0CArKmNAJrFgab2XhXZ7o76DaA0kUFyooNKNO83xJeWNV2Bb8UzXr97VkcaED4bdc4cVXJ96fFw3ayA0RQZBgCsBzsVQPXh0QyiVU%2B%2BL1%2F%2FcCYB0c76W2eoz3ULwgsTWbZv%2Fu2R7UgbPraL4CUM%2FuFYgcFMqQlkJnrfQRDWoQBHeQMnauaBgUhxvqkhrYPHjjqR%2BW84YE9NL98uGMM139ZNx1vzTdKqycZRGvUlTdMii9GXAjDkwrClJko11Wk7rJ8PiqrvmCpwPWjica3q4FOsoa%2B9XTCkQL1yV5T5el4eVBc6vHVWKBzLDvwhq0eITHysqEwk%2FOAZ%2BKgdWLg1F3qzCY9fIkooDh%2BP%2Fr2fZ3Vifwcw8ICT3U1tXHbeB4%2Fzj9lN%2BgakEyWGSM8y%2F2O9cjvI5NovLXw8F7LpTa3qCB%2F%2BcCyoziPmsck4HzqnJRQvgiMv8A0ZyiLugV8GglXPLvIh0qcpteyBHyRVe5SjI4023VoIILI1mDb9S4I3zORrWdCiAXTxnXqP8VfyaBfeiDzWuDVOnhMvnZqU2gU2qhVxo9B1Lt0DyOdroZ6QMlo%2FB4yLbY%2FwGqae%2BQcKBBfMMqH%2BMAGOqUBJ1%2BRpov4juEiVTBDf26bDAUlW79P3hUKV5dlks%2B2XDT%2BfR1aH%2FsfWM7p6g%2Be9N7soLHBwrlvct2wVQk7bKpiJeOgQuI8SH2wCrdD91cp91VyKo%2BuJPj1jNRsiv2x%2BhXSmmqQY9vWjDBQwZhDikASahsB7xjiPH7BkBPGWwIQomc8m2ePyQzr12FXYa0mbN589NolCQ7Su06Q97SRGNkAn2RM7c9P&X-Amz-Signature=548ff1e39c3003c75328bfd487ca15b297b512f9c205734ab202164766e6db29&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO62HICJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYHAlzZyZKXWM09%2FuHWF%2FbUfoJvQXnddCts3Hok9eq3AiEA7NAckLmpsZ0FrHtureXGCCXQmcr5srMlNo1WBBlMMAcqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVETYXvQDe3gNMNtyrcAy11FiHyihnxu%2BeLMAvHmEoChRBwRItzDSXc22WUMh0CArKmNAJrFgab2XhXZ7o76DaA0kUFyooNKNO83xJeWNV2Bb8UzXr97VkcaED4bdc4cVXJ96fFw3ayA0RQZBgCsBzsVQPXh0QyiVU%2B%2BL1%2F%2FcCYB0c76W2eoz3ULwgsTWbZv%2Fu2R7UgbPraL4CUM%2FuFYgcFMqQlkJnrfQRDWoQBHeQMnauaBgUhxvqkhrYPHjjqR%2BW84YE9NL98uGMM139ZNx1vzTdKqycZRGvUlTdMii9GXAjDkwrClJko11Wk7rJ8PiqrvmCpwPWjica3q4FOsoa%2B9XTCkQL1yV5T5el4eVBc6vHVWKBzLDvwhq0eITHysqEwk%2FOAZ%2BKgdWLg1F3qzCY9fIkooDh%2BP%2Fr2fZ3Vifwcw8ICT3U1tXHbeB4%2Fzj9lN%2BgakEyWGSM8y%2F2O9cjvI5NovLXw8F7LpTa3qCB%2F%2BcCyoziPmsck4HzqnJRQvgiMv8A0ZyiLugV8GglXPLvIh0qcpteyBHyRVe5SjI4023VoIILI1mDb9S4I3zORrWdCiAXTxnXqP8VfyaBfeiDzWuDVOnhMvnZqU2gU2qhVxo9B1Lt0DyOdroZ6QMlo%2FB4yLbY%2FwGqae%2BQcKBBfMMqH%2BMAGOqUBJ1%2BRpov4juEiVTBDf26bDAUlW79P3hUKV5dlks%2B2XDT%2BfR1aH%2FsfWM7p6g%2Be9N7soLHBwrlvct2wVQk7bKpiJeOgQuI8SH2wCrdD91cp91VyKo%2BuJPj1jNRsiv2x%2BhXSmmqQY9vWjDBQwZhDikASahsB7xjiPH7BkBPGWwIQomc8m2ePyQzr12FXYa0mbN589NolCQ7Su06Q97SRGNkAn2RM7c9P&X-Amz-Signature=fd4425da6edb7f0d5d3015e7e4b18505271833b1725521c9d425fab16538eb58&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO62HICJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYHAlzZyZKXWM09%2FuHWF%2FbUfoJvQXnddCts3Hok9eq3AiEA7NAckLmpsZ0FrHtureXGCCXQmcr5srMlNo1WBBlMMAcqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVETYXvQDe3gNMNtyrcAy11FiHyihnxu%2BeLMAvHmEoChRBwRItzDSXc22WUMh0CArKmNAJrFgab2XhXZ7o76DaA0kUFyooNKNO83xJeWNV2Bb8UzXr97VkcaED4bdc4cVXJ96fFw3ayA0RQZBgCsBzsVQPXh0QyiVU%2B%2BL1%2F%2FcCYB0c76W2eoz3ULwgsTWbZv%2Fu2R7UgbPraL4CUM%2FuFYgcFMqQlkJnrfQRDWoQBHeQMnauaBgUhxvqkhrYPHjjqR%2BW84YE9NL98uGMM139ZNx1vzTdKqycZRGvUlTdMii9GXAjDkwrClJko11Wk7rJ8PiqrvmCpwPWjica3q4FOsoa%2B9XTCkQL1yV5T5el4eVBc6vHVWKBzLDvwhq0eITHysqEwk%2FOAZ%2BKgdWLg1F3qzCY9fIkooDh%2BP%2Fr2fZ3Vifwcw8ICT3U1tXHbeB4%2Fzj9lN%2BgakEyWGSM8y%2F2O9cjvI5NovLXw8F7LpTa3qCB%2F%2BcCyoziPmsck4HzqnJRQvgiMv8A0ZyiLugV8GglXPLvIh0qcpteyBHyRVe5SjI4023VoIILI1mDb9S4I3zORrWdCiAXTxnXqP8VfyaBfeiDzWuDVOnhMvnZqU2gU2qhVxo9B1Lt0DyOdroZ6QMlo%2FB4yLbY%2FwGqae%2BQcKBBfMMqH%2BMAGOqUBJ1%2BRpov4juEiVTBDf26bDAUlW79P3hUKV5dlks%2B2XDT%2BfR1aH%2FsfWM7p6g%2Be9N7soLHBwrlvct2wVQk7bKpiJeOgQuI8SH2wCrdD91cp91VyKo%2BuJPj1jNRsiv2x%2BhXSmmqQY9vWjDBQwZhDikASahsB7xjiPH7BkBPGWwIQomc8m2ePyQzr12FXYa0mbN589NolCQ7Su06Q97SRGNkAn2RM7c9P&X-Amz-Signature=d8ee1fc120cfb91e408c63d37a2768fec7d808bf2a29968e8980d0ac0f1fd571&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
