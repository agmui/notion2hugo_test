---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGS2RLOD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCH%2BpSy52vB1xVMdMkJlHDtvVffGHi0y%2FVqDLvn9wDs8QIgfWsL0gIF4jvYNLPxRM5haospz%2BxbAT4dZ6vkkwwWYFYq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDDvl5PjJw2%2F3Tugm%2ByrcA2USrBZ%2BFmQPKo54QbcVkVxRJV6SkrDxtw6VWB6P4tbsbJbALDw9X%2B9A4i6aWEBWvC0NDMIqcLZ66E2KLcKANZnSaZ%2BZw9SMx3krJ2WUZrTBXWAdMQ0YakY0QLPydgCZS3nnaShs3%2F30odMeaIsmQfTWXreb85%2BCbH3vCd4%2FX46gY3HxPatEx74fq8IU1%2FkilmmSR4lUnC5iCLEzRLW9I6BvTqhim2kxT%2F8cvrf14BFYtns9itssuo2r4wmy15oBBmbh5s4VuChLdcsq0Ozz%2F%2B8tceB8eCyVDwHTtx5BMoHmOb4yAWAL6esP8RTTMDEOLeKwGV3u5yCWizkX%2Bkh2bi%2FkQGDSbhHhQGlj%2BaySuOrcCX7msAE0sI8LUmFNbHYuo9uoFSnx9PYhnahN1DwGdIQA9QTaofKFIm0Mfkb0MtM4VPDdT7s6NC3%2BdxFREru4C5%2B9kO5GQXOr5QjDNL3hRn4jiQnMc6K%2BihH6djwoLpaTJCYYXo%2FgnR1zxHoYoZAZfgEZNYFOGE7tVidm2KPg%2BTT3nhU4rM%2F6Yvy9ptrZj3s%2FRBBhMSzBmKOZ%2Fib4EZ%2FfWTpXoEmt3a0aUs94%2Fx9oJOCyI%2BhsVgQHGmq9FJLaDkO0H1lgZGC6HJFRqddOMIrLy8QGOqUBG1mK1FPIhXKBF%2BbLjrwOdqrKJMc5MS3rb0gToFyJThU5OrPRwBfHMmQRqk72bRpLVOeQ80q7kXtotbzJQd7UwavZBjhXRu7ZibIPrArW4XpX8Jo1r7T59ViOLaK6ZBWc0fTm%2FXDB0VzBy1xbcaNIsbTEjiKhzz%2Fi6azcVmjeLQesWmbL49LM8WkqIFsR5rgkXOUZVSX2dy50dNYQfIYt8QtdrGzc&X-Amz-Signature=375b43afe9006479cb76a16be6e2bde62f45cd05427e19010ba73610a7d273d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGS2RLOD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCH%2BpSy52vB1xVMdMkJlHDtvVffGHi0y%2FVqDLvn9wDs8QIgfWsL0gIF4jvYNLPxRM5haospz%2BxbAT4dZ6vkkwwWYFYq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDDvl5PjJw2%2F3Tugm%2ByrcA2USrBZ%2BFmQPKo54QbcVkVxRJV6SkrDxtw6VWB6P4tbsbJbALDw9X%2B9A4i6aWEBWvC0NDMIqcLZ66E2KLcKANZnSaZ%2BZw9SMx3krJ2WUZrTBXWAdMQ0YakY0QLPydgCZS3nnaShs3%2F30odMeaIsmQfTWXreb85%2BCbH3vCd4%2FX46gY3HxPatEx74fq8IU1%2FkilmmSR4lUnC5iCLEzRLW9I6BvTqhim2kxT%2F8cvrf14BFYtns9itssuo2r4wmy15oBBmbh5s4VuChLdcsq0Ozz%2F%2B8tceB8eCyVDwHTtx5BMoHmOb4yAWAL6esP8RTTMDEOLeKwGV3u5yCWizkX%2Bkh2bi%2FkQGDSbhHhQGlj%2BaySuOrcCX7msAE0sI8LUmFNbHYuo9uoFSnx9PYhnahN1DwGdIQA9QTaofKFIm0Mfkb0MtM4VPDdT7s6NC3%2BdxFREru4C5%2B9kO5GQXOr5QjDNL3hRn4jiQnMc6K%2BihH6djwoLpaTJCYYXo%2FgnR1zxHoYoZAZfgEZNYFOGE7tVidm2KPg%2BTT3nhU4rM%2F6Yvy9ptrZj3s%2FRBBhMSzBmKOZ%2Fib4EZ%2FfWTpXoEmt3a0aUs94%2Fx9oJOCyI%2BhsVgQHGmq9FJLaDkO0H1lgZGC6HJFRqddOMIrLy8QGOqUBG1mK1FPIhXKBF%2BbLjrwOdqrKJMc5MS3rb0gToFyJThU5OrPRwBfHMmQRqk72bRpLVOeQ80q7kXtotbzJQd7UwavZBjhXRu7ZibIPrArW4XpX8Jo1r7T59ViOLaK6ZBWc0fTm%2FXDB0VzBy1xbcaNIsbTEjiKhzz%2Fi6azcVmjeLQesWmbL49LM8WkqIFsR5rgkXOUZVSX2dy50dNYQfIYt8QtdrGzc&X-Amz-Signature=a9c411db625ac372a8afbf546ca4cda70d815c3c986777a212cad428dfa760a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGS2RLOD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCH%2BpSy52vB1xVMdMkJlHDtvVffGHi0y%2FVqDLvn9wDs8QIgfWsL0gIF4jvYNLPxRM5haospz%2BxbAT4dZ6vkkwwWYFYq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDDvl5PjJw2%2F3Tugm%2ByrcA2USrBZ%2BFmQPKo54QbcVkVxRJV6SkrDxtw6VWB6P4tbsbJbALDw9X%2B9A4i6aWEBWvC0NDMIqcLZ66E2KLcKANZnSaZ%2BZw9SMx3krJ2WUZrTBXWAdMQ0YakY0QLPydgCZS3nnaShs3%2F30odMeaIsmQfTWXreb85%2BCbH3vCd4%2FX46gY3HxPatEx74fq8IU1%2FkilmmSR4lUnC5iCLEzRLW9I6BvTqhim2kxT%2F8cvrf14BFYtns9itssuo2r4wmy15oBBmbh5s4VuChLdcsq0Ozz%2F%2B8tceB8eCyVDwHTtx5BMoHmOb4yAWAL6esP8RTTMDEOLeKwGV3u5yCWizkX%2Bkh2bi%2FkQGDSbhHhQGlj%2BaySuOrcCX7msAE0sI8LUmFNbHYuo9uoFSnx9PYhnahN1DwGdIQA9QTaofKFIm0Mfkb0MtM4VPDdT7s6NC3%2BdxFREru4C5%2B9kO5GQXOr5QjDNL3hRn4jiQnMc6K%2BihH6djwoLpaTJCYYXo%2FgnR1zxHoYoZAZfgEZNYFOGE7tVidm2KPg%2BTT3nhU4rM%2F6Yvy9ptrZj3s%2FRBBhMSzBmKOZ%2Fib4EZ%2FfWTpXoEmt3a0aUs94%2Fx9oJOCyI%2BhsVgQHGmq9FJLaDkO0H1lgZGC6HJFRqddOMIrLy8QGOqUBG1mK1FPIhXKBF%2BbLjrwOdqrKJMc5MS3rb0gToFyJThU5OrPRwBfHMmQRqk72bRpLVOeQ80q7kXtotbzJQd7UwavZBjhXRu7ZibIPrArW4XpX8Jo1r7T59ViOLaK6ZBWc0fTm%2FXDB0VzBy1xbcaNIsbTEjiKhzz%2Fi6azcVmjeLQesWmbL49LM8WkqIFsR5rgkXOUZVSX2dy50dNYQfIYt8QtdrGzc&X-Amz-Signature=a6aa3386e7a7f54c154fcd35c40427de2dcb87c2f6416ae2179472a14979a4e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGS2RLOD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCH%2BpSy52vB1xVMdMkJlHDtvVffGHi0y%2FVqDLvn9wDs8QIgfWsL0gIF4jvYNLPxRM5haospz%2BxbAT4dZ6vkkwwWYFYq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDDvl5PjJw2%2F3Tugm%2ByrcA2USrBZ%2BFmQPKo54QbcVkVxRJV6SkrDxtw6VWB6P4tbsbJbALDw9X%2B9A4i6aWEBWvC0NDMIqcLZ66E2KLcKANZnSaZ%2BZw9SMx3krJ2WUZrTBXWAdMQ0YakY0QLPydgCZS3nnaShs3%2F30odMeaIsmQfTWXreb85%2BCbH3vCd4%2FX46gY3HxPatEx74fq8IU1%2FkilmmSR4lUnC5iCLEzRLW9I6BvTqhim2kxT%2F8cvrf14BFYtns9itssuo2r4wmy15oBBmbh5s4VuChLdcsq0Ozz%2F%2B8tceB8eCyVDwHTtx5BMoHmOb4yAWAL6esP8RTTMDEOLeKwGV3u5yCWizkX%2Bkh2bi%2FkQGDSbhHhQGlj%2BaySuOrcCX7msAE0sI8LUmFNbHYuo9uoFSnx9PYhnahN1DwGdIQA9QTaofKFIm0Mfkb0MtM4VPDdT7s6NC3%2BdxFREru4C5%2B9kO5GQXOr5QjDNL3hRn4jiQnMc6K%2BihH6djwoLpaTJCYYXo%2FgnR1zxHoYoZAZfgEZNYFOGE7tVidm2KPg%2BTT3nhU4rM%2F6Yvy9ptrZj3s%2FRBBhMSzBmKOZ%2Fib4EZ%2FfWTpXoEmt3a0aUs94%2Fx9oJOCyI%2BhsVgQHGmq9FJLaDkO0H1lgZGC6HJFRqddOMIrLy8QGOqUBG1mK1FPIhXKBF%2BbLjrwOdqrKJMc5MS3rb0gToFyJThU5OrPRwBfHMmQRqk72bRpLVOeQ80q7kXtotbzJQd7UwavZBjhXRu7ZibIPrArW4XpX8Jo1r7T59ViOLaK6ZBWc0fTm%2FXDB0VzBy1xbcaNIsbTEjiKhzz%2Fi6azcVmjeLQesWmbL49LM8WkqIFsR5rgkXOUZVSX2dy50dNYQfIYt8QtdrGzc&X-Amz-Signature=6bde416d5f57a02479d05585643b3b9f47025bbf0842081a9a375c96c9a8050f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGS2RLOD%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCH%2BpSy52vB1xVMdMkJlHDtvVffGHi0y%2FVqDLvn9wDs8QIgfWsL0gIF4jvYNLPxRM5haospz%2BxbAT4dZ6vkkwwWYFYq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDDvl5PjJw2%2F3Tugm%2ByrcA2USrBZ%2BFmQPKo54QbcVkVxRJV6SkrDxtw6VWB6P4tbsbJbALDw9X%2B9A4i6aWEBWvC0NDMIqcLZ66E2KLcKANZnSaZ%2BZw9SMx3krJ2WUZrTBXWAdMQ0YakY0QLPydgCZS3nnaShs3%2F30odMeaIsmQfTWXreb85%2BCbH3vCd4%2FX46gY3HxPatEx74fq8IU1%2FkilmmSR4lUnC5iCLEzRLW9I6BvTqhim2kxT%2F8cvrf14BFYtns9itssuo2r4wmy15oBBmbh5s4VuChLdcsq0Ozz%2F%2B8tceB8eCyVDwHTtx5BMoHmOb4yAWAL6esP8RTTMDEOLeKwGV3u5yCWizkX%2Bkh2bi%2FkQGDSbhHhQGlj%2BaySuOrcCX7msAE0sI8LUmFNbHYuo9uoFSnx9PYhnahN1DwGdIQA9QTaofKFIm0Mfkb0MtM4VPDdT7s6NC3%2BdxFREru4C5%2B9kO5GQXOr5QjDNL3hRn4jiQnMc6K%2BihH6djwoLpaTJCYYXo%2FgnR1zxHoYoZAZfgEZNYFOGE7tVidm2KPg%2BTT3nhU4rM%2F6Yvy9ptrZj3s%2FRBBhMSzBmKOZ%2Fib4EZ%2FfWTpXoEmt3a0aUs94%2Fx9oJOCyI%2BhsVgQHGmq9FJLaDkO0H1lgZGC6HJFRqddOMIrLy8QGOqUBG1mK1FPIhXKBF%2BbLjrwOdqrKJMc5MS3rb0gToFyJThU5OrPRwBfHMmQRqk72bRpLVOeQ80q7kXtotbzJQd7UwavZBjhXRu7ZibIPrArW4XpX8Jo1r7T59ViOLaK6ZBWc0fTm%2FXDB0VzBy1xbcaNIsbTEjiKhzz%2Fi6azcVmjeLQesWmbL49LM8WkqIFsR5rgkXOUZVSX2dy50dNYQfIYt8QtdrGzc&X-Amz-Signature=23c954a8611bfd940ff954889c7978889a94cf8dd279ac79005346689f8fe1c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
