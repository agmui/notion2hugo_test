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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JE7LOP2%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCUYDxAZTckxL1vU0Jk%2BqPyH%2B7X%2FqZ4M39zHy%2B1ZcVJrAIhAPGTZiLdAa8NeMpS%2Frw%2F6t%2F0A7HYZOGKuouvJEazaE%2BSKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEhyd60chVGIQaxd0q3AOmcyd2%2B3nHkDLOYP33dftEHdW0CeHyMNvYlHHLbq9q5Ca9zlD93%2FioNk0dLDnVHHxc7sOTkXFVMqrw8lUiRet4HpPcuyD%2B7GoKn3joGDRPT77f5f7aMUNTT4N%2FWCnsyLuSdLpBrZV53HPJUvqUi6uv9kfxBvSZKSTvjTDT3f7uPx4TjKVSnHeghVwfNb%2BbPUk3To32qZs%2FQBW6FPH5oHRqBV4FsbjHBpv453o1qcmYkA3vY6fv4FcxjM7ZW8VMBMkWsncRYsy4de6Pp7%2F2czkuCOH9zz3Q1rqeqTKTJTJyDty%2FFLQPmcqC945zr7tBH%2BLW186PwarVS6BSHnKZ7vV55a657MQF8v9zh5GaPLX71%2FZr3O2rNRKQvFsv4Tm4cvM2BGJ1plGIVETe2GydwNLwaI1mjQU1J9ZVdDxCtXVSZg%2B1NTt7en%2F2OOzU7L6kF3GFJr%2F70oGatRSp7DC8SLLRxJ3txEDmFMDG4T4AFnZxWuw9umwLNX4JR4iwTdaQGAs%2B38JesLaBeiXcqCCQuztnju3MFTn%2BnvNnu0KzlmWfNUtuOnD5e7bR9yq4Hbm148QDSRjOsaY0kxXvt6mKaNt5IhfwtqAGC7tXqzEfLQIRs8Xrkb8JbZJk28VfHTCa%2BJ7ABjqkATPe%2BW51AjqkPSXStedvB2mK5J7LyLXCNsnoGAeTpx5JKrb3mUYiIl%2BAm7SU%2FgdwdrE682FxsnY6YxlK%2BfiHiAMnwT2JxF9qeDFKGbm4lRXseAM7C4%2Bcb58R5wSh%2FOuNXAXj1lCwa7mZE%2F05B2cOUiln9eXLOmKgZhB8kxBmPlNDO4RomKKg5qGLsrXsjBy6frDqhrfgWM7yxMwfeYZcGqV8L2FI&X-Amz-Signature=3f8276b8a145769addf26d60a2f94abcd5244f2180159dc92c5c35e517a542aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JE7LOP2%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCUYDxAZTckxL1vU0Jk%2BqPyH%2B7X%2FqZ4M39zHy%2B1ZcVJrAIhAPGTZiLdAa8NeMpS%2Frw%2F6t%2F0A7HYZOGKuouvJEazaE%2BSKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEhyd60chVGIQaxd0q3AOmcyd2%2B3nHkDLOYP33dftEHdW0CeHyMNvYlHHLbq9q5Ca9zlD93%2FioNk0dLDnVHHxc7sOTkXFVMqrw8lUiRet4HpPcuyD%2B7GoKn3joGDRPT77f5f7aMUNTT4N%2FWCnsyLuSdLpBrZV53HPJUvqUi6uv9kfxBvSZKSTvjTDT3f7uPx4TjKVSnHeghVwfNb%2BbPUk3To32qZs%2FQBW6FPH5oHRqBV4FsbjHBpv453o1qcmYkA3vY6fv4FcxjM7ZW8VMBMkWsncRYsy4de6Pp7%2F2czkuCOH9zz3Q1rqeqTKTJTJyDty%2FFLQPmcqC945zr7tBH%2BLW186PwarVS6BSHnKZ7vV55a657MQF8v9zh5GaPLX71%2FZr3O2rNRKQvFsv4Tm4cvM2BGJ1plGIVETe2GydwNLwaI1mjQU1J9ZVdDxCtXVSZg%2B1NTt7en%2F2OOzU7L6kF3GFJr%2F70oGatRSp7DC8SLLRxJ3txEDmFMDG4T4AFnZxWuw9umwLNX4JR4iwTdaQGAs%2B38JesLaBeiXcqCCQuztnju3MFTn%2BnvNnu0KzlmWfNUtuOnD5e7bR9yq4Hbm148QDSRjOsaY0kxXvt6mKaNt5IhfwtqAGC7tXqzEfLQIRs8Xrkb8JbZJk28VfHTCa%2BJ7ABjqkATPe%2BW51AjqkPSXStedvB2mK5J7LyLXCNsnoGAeTpx5JKrb3mUYiIl%2BAm7SU%2FgdwdrE682FxsnY6YxlK%2BfiHiAMnwT2JxF9qeDFKGbm4lRXseAM7C4%2Bcb58R5wSh%2FOuNXAXj1lCwa7mZE%2F05B2cOUiln9eXLOmKgZhB8kxBmPlNDO4RomKKg5qGLsrXsjBy6frDqhrfgWM7yxMwfeYZcGqV8L2FI&X-Amz-Signature=b6840709c49f05a97197252b1ccbf8d86936ed31b0635682db0156210fdc29e0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JE7LOP2%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCUYDxAZTckxL1vU0Jk%2BqPyH%2B7X%2FqZ4M39zHy%2B1ZcVJrAIhAPGTZiLdAa8NeMpS%2Frw%2F6t%2F0A7HYZOGKuouvJEazaE%2BSKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEhyd60chVGIQaxd0q3AOmcyd2%2B3nHkDLOYP33dftEHdW0CeHyMNvYlHHLbq9q5Ca9zlD93%2FioNk0dLDnVHHxc7sOTkXFVMqrw8lUiRet4HpPcuyD%2B7GoKn3joGDRPT77f5f7aMUNTT4N%2FWCnsyLuSdLpBrZV53HPJUvqUi6uv9kfxBvSZKSTvjTDT3f7uPx4TjKVSnHeghVwfNb%2BbPUk3To32qZs%2FQBW6FPH5oHRqBV4FsbjHBpv453o1qcmYkA3vY6fv4FcxjM7ZW8VMBMkWsncRYsy4de6Pp7%2F2czkuCOH9zz3Q1rqeqTKTJTJyDty%2FFLQPmcqC945zr7tBH%2BLW186PwarVS6BSHnKZ7vV55a657MQF8v9zh5GaPLX71%2FZr3O2rNRKQvFsv4Tm4cvM2BGJ1plGIVETe2GydwNLwaI1mjQU1J9ZVdDxCtXVSZg%2B1NTt7en%2F2OOzU7L6kF3GFJr%2F70oGatRSp7DC8SLLRxJ3txEDmFMDG4T4AFnZxWuw9umwLNX4JR4iwTdaQGAs%2B38JesLaBeiXcqCCQuztnju3MFTn%2BnvNnu0KzlmWfNUtuOnD5e7bR9yq4Hbm148QDSRjOsaY0kxXvt6mKaNt5IhfwtqAGC7tXqzEfLQIRs8Xrkb8JbZJk28VfHTCa%2BJ7ABjqkATPe%2BW51AjqkPSXStedvB2mK5J7LyLXCNsnoGAeTpx5JKrb3mUYiIl%2BAm7SU%2FgdwdrE682FxsnY6YxlK%2BfiHiAMnwT2JxF9qeDFKGbm4lRXseAM7C4%2Bcb58R5wSh%2FOuNXAXj1lCwa7mZE%2F05B2cOUiln9eXLOmKgZhB8kxBmPlNDO4RomKKg5qGLsrXsjBy6frDqhrfgWM7yxMwfeYZcGqV8L2FI&X-Amz-Signature=bf4bd607f98695efdc2f4ecfede27e00494745a9bdfe78f55fca0249e9f01ef0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JE7LOP2%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCUYDxAZTckxL1vU0Jk%2BqPyH%2B7X%2FqZ4M39zHy%2B1ZcVJrAIhAPGTZiLdAa8NeMpS%2Frw%2F6t%2F0A7HYZOGKuouvJEazaE%2BSKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEhyd60chVGIQaxd0q3AOmcyd2%2B3nHkDLOYP33dftEHdW0CeHyMNvYlHHLbq9q5Ca9zlD93%2FioNk0dLDnVHHxc7sOTkXFVMqrw8lUiRet4HpPcuyD%2B7GoKn3joGDRPT77f5f7aMUNTT4N%2FWCnsyLuSdLpBrZV53HPJUvqUi6uv9kfxBvSZKSTvjTDT3f7uPx4TjKVSnHeghVwfNb%2BbPUk3To32qZs%2FQBW6FPH5oHRqBV4FsbjHBpv453o1qcmYkA3vY6fv4FcxjM7ZW8VMBMkWsncRYsy4de6Pp7%2F2czkuCOH9zz3Q1rqeqTKTJTJyDty%2FFLQPmcqC945zr7tBH%2BLW186PwarVS6BSHnKZ7vV55a657MQF8v9zh5GaPLX71%2FZr3O2rNRKQvFsv4Tm4cvM2BGJ1plGIVETe2GydwNLwaI1mjQU1J9ZVdDxCtXVSZg%2B1NTt7en%2F2OOzU7L6kF3GFJr%2F70oGatRSp7DC8SLLRxJ3txEDmFMDG4T4AFnZxWuw9umwLNX4JR4iwTdaQGAs%2B38JesLaBeiXcqCCQuztnju3MFTn%2BnvNnu0KzlmWfNUtuOnD5e7bR9yq4Hbm148QDSRjOsaY0kxXvt6mKaNt5IhfwtqAGC7tXqzEfLQIRs8Xrkb8JbZJk28VfHTCa%2BJ7ABjqkATPe%2BW51AjqkPSXStedvB2mK5J7LyLXCNsnoGAeTpx5JKrb3mUYiIl%2BAm7SU%2FgdwdrE682FxsnY6YxlK%2BfiHiAMnwT2JxF9qeDFKGbm4lRXseAM7C4%2Bcb58R5wSh%2FOuNXAXj1lCwa7mZE%2F05B2cOUiln9eXLOmKgZhB8kxBmPlNDO4RomKKg5qGLsrXsjBy6frDqhrfgWM7yxMwfeYZcGqV8L2FI&X-Amz-Signature=20bae77ece19e3055b29d4b25ae17e5a7e39aa51194ff4ec58f27b1b14b20957&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JE7LOP2%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCUYDxAZTckxL1vU0Jk%2BqPyH%2B7X%2FqZ4M39zHy%2B1ZcVJrAIhAPGTZiLdAa8NeMpS%2Frw%2F6t%2F0A7HYZOGKuouvJEazaE%2BSKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEhyd60chVGIQaxd0q3AOmcyd2%2B3nHkDLOYP33dftEHdW0CeHyMNvYlHHLbq9q5Ca9zlD93%2FioNk0dLDnVHHxc7sOTkXFVMqrw8lUiRet4HpPcuyD%2B7GoKn3joGDRPT77f5f7aMUNTT4N%2FWCnsyLuSdLpBrZV53HPJUvqUi6uv9kfxBvSZKSTvjTDT3f7uPx4TjKVSnHeghVwfNb%2BbPUk3To32qZs%2FQBW6FPH5oHRqBV4FsbjHBpv453o1qcmYkA3vY6fv4FcxjM7ZW8VMBMkWsncRYsy4de6Pp7%2F2czkuCOH9zz3Q1rqeqTKTJTJyDty%2FFLQPmcqC945zr7tBH%2BLW186PwarVS6BSHnKZ7vV55a657MQF8v9zh5GaPLX71%2FZr3O2rNRKQvFsv4Tm4cvM2BGJ1plGIVETe2GydwNLwaI1mjQU1J9ZVdDxCtXVSZg%2B1NTt7en%2F2OOzU7L6kF3GFJr%2F70oGatRSp7DC8SLLRxJ3txEDmFMDG4T4AFnZxWuw9umwLNX4JR4iwTdaQGAs%2B38JesLaBeiXcqCCQuztnju3MFTn%2BnvNnu0KzlmWfNUtuOnD5e7bR9yq4Hbm148QDSRjOsaY0kxXvt6mKaNt5IhfwtqAGC7tXqzEfLQIRs8Xrkb8JbZJk28VfHTCa%2BJ7ABjqkATPe%2BW51AjqkPSXStedvB2mK5J7LyLXCNsnoGAeTpx5JKrb3mUYiIl%2BAm7SU%2FgdwdrE682FxsnY6YxlK%2BfiHiAMnwT2JxF9qeDFKGbm4lRXseAM7C4%2Bcb58R5wSh%2FOuNXAXj1lCwa7mZE%2F05B2cOUiln9eXLOmKgZhB8kxBmPlNDO4RomKKg5qGLsrXsjBy6frDqhrfgWM7yxMwfeYZcGqV8L2FI&X-Amz-Signature=928beababc6330642b2a85d29c6a924ab88dae761caeb1cc832eb06a4635c345&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
