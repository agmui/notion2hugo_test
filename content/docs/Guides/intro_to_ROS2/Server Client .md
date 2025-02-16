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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCRWPO2D%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDk%2FPFiaLtTYmhvZyu5hQatp87UNlNW3ABwaO9nAeu%2FZwIhAKbI6EHQjtHYXRHXUCInThXzHCijKiVigfNSh3dUIpKBKv8DCF0QABoMNjM3NDIzMTgzODA1IgxTQL63bpQ8gch1nkAq3AMhm8nFHjDZR22vL8XxNRlD8zy6EZUrtX798CDf7pl3TPco0nSRdANwmDLMue56zsrMj8SxW7ByCBRTGpmzYyRtKnA0FAbOrk4AxU%2FQJY66i7%2FLzLIrgJjIl7KDXFQ%2B%2BP6JIIROiHJvLTDnfs7b9xD8Ctj21hCX2DZa3S%2FFFe9A3Zun1Xvkp4Eu1VE%2BZEivmkYf%2FM%2FatxvQkFK1ofvANGBu4UUBpRm34uU%2BrM3E69rEx62xeKVOSJe1ZLJTFNvs9J%2BOnpIuPgHQZqVHYXxQIDXgnZYn2FItJRgdrKBVcSnoe4a%2BRjS0cyz%2FIEo2LUfeDcwx4B6eFe06gHkDu1Mqm57V40VSi6BMksbI9fXh77ArH017r2IryToJl8sE8YnnrApRoUX%2F%2FUV8BlHwDGWIhg8XUlZkA6GeCyGv7D%2FpYgyatV7V7tPYNr1KSkXESBnD%2BLO8Ez76mLLfLoGxhuWhm%2Fglxg4i3%2F%2FJLPUSjhMtGOTNdYkF%2BZtPKxo7F12Av7%2FtqcBUKi%2Bv96iB8Eh57AV%2Fe7Fwe1wDkt6M%2Fwues0RCgovdmxTuLCiyeMmP%2FSCoNuD0JLPojdyimZTDBNEMzncvKIzXmzjiDUIwG0p2lEPe2lvT8owiR1h%2BHvXLqs72XTDkose9BjqkAXWfZ%2FNrtqAcb2DHPwRO98yZFmZRIPkm8xCpbLcDEAXEM%2BsdbaJLs45dTBW9gIDCJUNSQplyxUf4dOigc5x%2BOqoTDIUFqokYQ6zPqGpjVgS3v3LCUqGRNwhJg1LQMpjJ9W6WsYWmueHG5eZBN2S50lBqAGM23NZWcxA%2FdVz8SYWe7VGyBtzzFynyfFtIfykJianwmPMN1Ut0zWoNZRVsN5AqS0yz&X-Amz-Signature=3275c706bf5740ae1ad66a8985d21811abb6031f50b9ffc719cc9d2693958e5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCRWPO2D%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDk%2FPFiaLtTYmhvZyu5hQatp87UNlNW3ABwaO9nAeu%2FZwIhAKbI6EHQjtHYXRHXUCInThXzHCijKiVigfNSh3dUIpKBKv8DCF0QABoMNjM3NDIzMTgzODA1IgxTQL63bpQ8gch1nkAq3AMhm8nFHjDZR22vL8XxNRlD8zy6EZUrtX798CDf7pl3TPco0nSRdANwmDLMue56zsrMj8SxW7ByCBRTGpmzYyRtKnA0FAbOrk4AxU%2FQJY66i7%2FLzLIrgJjIl7KDXFQ%2B%2BP6JIIROiHJvLTDnfs7b9xD8Ctj21hCX2DZa3S%2FFFe9A3Zun1Xvkp4Eu1VE%2BZEivmkYf%2FM%2FatxvQkFK1ofvANGBu4UUBpRm34uU%2BrM3E69rEx62xeKVOSJe1ZLJTFNvs9J%2BOnpIuPgHQZqVHYXxQIDXgnZYn2FItJRgdrKBVcSnoe4a%2BRjS0cyz%2FIEo2LUfeDcwx4B6eFe06gHkDu1Mqm57V40VSi6BMksbI9fXh77ArH017r2IryToJl8sE8YnnrApRoUX%2F%2FUV8BlHwDGWIhg8XUlZkA6GeCyGv7D%2FpYgyatV7V7tPYNr1KSkXESBnD%2BLO8Ez76mLLfLoGxhuWhm%2Fglxg4i3%2F%2FJLPUSjhMtGOTNdYkF%2BZtPKxo7F12Av7%2FtqcBUKi%2Bv96iB8Eh57AV%2Fe7Fwe1wDkt6M%2Fwues0RCgovdmxTuLCiyeMmP%2FSCoNuD0JLPojdyimZTDBNEMzncvKIzXmzjiDUIwG0p2lEPe2lvT8owiR1h%2BHvXLqs72XTDkose9BjqkAXWfZ%2FNrtqAcb2DHPwRO98yZFmZRIPkm8xCpbLcDEAXEM%2BsdbaJLs45dTBW9gIDCJUNSQplyxUf4dOigc5x%2BOqoTDIUFqokYQ6zPqGpjVgS3v3LCUqGRNwhJg1LQMpjJ9W6WsYWmueHG5eZBN2S50lBqAGM23NZWcxA%2FdVz8SYWe7VGyBtzzFynyfFtIfykJianwmPMN1Ut0zWoNZRVsN5AqS0yz&X-Amz-Signature=c6bcb9c822b2bf0bc3f73ddeecc2ba63331e5109c91afeea9bc4a93fa919c4f8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCRWPO2D%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDk%2FPFiaLtTYmhvZyu5hQatp87UNlNW3ABwaO9nAeu%2FZwIhAKbI6EHQjtHYXRHXUCInThXzHCijKiVigfNSh3dUIpKBKv8DCF0QABoMNjM3NDIzMTgzODA1IgxTQL63bpQ8gch1nkAq3AMhm8nFHjDZR22vL8XxNRlD8zy6EZUrtX798CDf7pl3TPco0nSRdANwmDLMue56zsrMj8SxW7ByCBRTGpmzYyRtKnA0FAbOrk4AxU%2FQJY66i7%2FLzLIrgJjIl7KDXFQ%2B%2BP6JIIROiHJvLTDnfs7b9xD8Ctj21hCX2DZa3S%2FFFe9A3Zun1Xvkp4Eu1VE%2BZEivmkYf%2FM%2FatxvQkFK1ofvANGBu4UUBpRm34uU%2BrM3E69rEx62xeKVOSJe1ZLJTFNvs9J%2BOnpIuPgHQZqVHYXxQIDXgnZYn2FItJRgdrKBVcSnoe4a%2BRjS0cyz%2FIEo2LUfeDcwx4B6eFe06gHkDu1Mqm57V40VSi6BMksbI9fXh77ArH017r2IryToJl8sE8YnnrApRoUX%2F%2FUV8BlHwDGWIhg8XUlZkA6GeCyGv7D%2FpYgyatV7V7tPYNr1KSkXESBnD%2BLO8Ez76mLLfLoGxhuWhm%2Fglxg4i3%2F%2FJLPUSjhMtGOTNdYkF%2BZtPKxo7F12Av7%2FtqcBUKi%2Bv96iB8Eh57AV%2Fe7Fwe1wDkt6M%2Fwues0RCgovdmxTuLCiyeMmP%2FSCoNuD0JLPojdyimZTDBNEMzncvKIzXmzjiDUIwG0p2lEPe2lvT8owiR1h%2BHvXLqs72XTDkose9BjqkAXWfZ%2FNrtqAcb2DHPwRO98yZFmZRIPkm8xCpbLcDEAXEM%2BsdbaJLs45dTBW9gIDCJUNSQplyxUf4dOigc5x%2BOqoTDIUFqokYQ6zPqGpjVgS3v3LCUqGRNwhJg1LQMpjJ9W6WsYWmueHG5eZBN2S50lBqAGM23NZWcxA%2FdVz8SYWe7VGyBtzzFynyfFtIfykJianwmPMN1Ut0zWoNZRVsN5AqS0yz&X-Amz-Signature=a812e41789d8dd73b3caaaf55ecbd6cfa03897c56e5204e9ad4e84a0ea6126fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCRWPO2D%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDk%2FPFiaLtTYmhvZyu5hQatp87UNlNW3ABwaO9nAeu%2FZwIhAKbI6EHQjtHYXRHXUCInThXzHCijKiVigfNSh3dUIpKBKv8DCF0QABoMNjM3NDIzMTgzODA1IgxTQL63bpQ8gch1nkAq3AMhm8nFHjDZR22vL8XxNRlD8zy6EZUrtX798CDf7pl3TPco0nSRdANwmDLMue56zsrMj8SxW7ByCBRTGpmzYyRtKnA0FAbOrk4AxU%2FQJY66i7%2FLzLIrgJjIl7KDXFQ%2B%2BP6JIIROiHJvLTDnfs7b9xD8Ctj21hCX2DZa3S%2FFFe9A3Zun1Xvkp4Eu1VE%2BZEivmkYf%2FM%2FatxvQkFK1ofvANGBu4UUBpRm34uU%2BrM3E69rEx62xeKVOSJe1ZLJTFNvs9J%2BOnpIuPgHQZqVHYXxQIDXgnZYn2FItJRgdrKBVcSnoe4a%2BRjS0cyz%2FIEo2LUfeDcwx4B6eFe06gHkDu1Mqm57V40VSi6BMksbI9fXh77ArH017r2IryToJl8sE8YnnrApRoUX%2F%2FUV8BlHwDGWIhg8XUlZkA6GeCyGv7D%2FpYgyatV7V7tPYNr1KSkXESBnD%2BLO8Ez76mLLfLoGxhuWhm%2Fglxg4i3%2F%2FJLPUSjhMtGOTNdYkF%2BZtPKxo7F12Av7%2FtqcBUKi%2Bv96iB8Eh57AV%2Fe7Fwe1wDkt6M%2Fwues0RCgovdmxTuLCiyeMmP%2FSCoNuD0JLPojdyimZTDBNEMzncvKIzXmzjiDUIwG0p2lEPe2lvT8owiR1h%2BHvXLqs72XTDkose9BjqkAXWfZ%2FNrtqAcb2DHPwRO98yZFmZRIPkm8xCpbLcDEAXEM%2BsdbaJLs45dTBW9gIDCJUNSQplyxUf4dOigc5x%2BOqoTDIUFqokYQ6zPqGpjVgS3v3LCUqGRNwhJg1LQMpjJ9W6WsYWmueHG5eZBN2S50lBqAGM23NZWcxA%2FdVz8SYWe7VGyBtzzFynyfFtIfykJianwmPMN1Ut0zWoNZRVsN5AqS0yz&X-Amz-Signature=9ca7b31627fd4d53597deba4450325260cafd7a1b02f7b13a4ea8f05ce0cb68b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCRWPO2D%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDk%2FPFiaLtTYmhvZyu5hQatp87UNlNW3ABwaO9nAeu%2FZwIhAKbI6EHQjtHYXRHXUCInThXzHCijKiVigfNSh3dUIpKBKv8DCF0QABoMNjM3NDIzMTgzODA1IgxTQL63bpQ8gch1nkAq3AMhm8nFHjDZR22vL8XxNRlD8zy6EZUrtX798CDf7pl3TPco0nSRdANwmDLMue56zsrMj8SxW7ByCBRTGpmzYyRtKnA0FAbOrk4AxU%2FQJY66i7%2FLzLIrgJjIl7KDXFQ%2B%2BP6JIIROiHJvLTDnfs7b9xD8Ctj21hCX2DZa3S%2FFFe9A3Zun1Xvkp4Eu1VE%2BZEivmkYf%2FM%2FatxvQkFK1ofvANGBu4UUBpRm34uU%2BrM3E69rEx62xeKVOSJe1ZLJTFNvs9J%2BOnpIuPgHQZqVHYXxQIDXgnZYn2FItJRgdrKBVcSnoe4a%2BRjS0cyz%2FIEo2LUfeDcwx4B6eFe06gHkDu1Mqm57V40VSi6BMksbI9fXh77ArH017r2IryToJl8sE8YnnrApRoUX%2F%2FUV8BlHwDGWIhg8XUlZkA6GeCyGv7D%2FpYgyatV7V7tPYNr1KSkXESBnD%2BLO8Ez76mLLfLoGxhuWhm%2Fglxg4i3%2F%2FJLPUSjhMtGOTNdYkF%2BZtPKxo7F12Av7%2FtqcBUKi%2Bv96iB8Eh57AV%2Fe7Fwe1wDkt6M%2Fwues0RCgovdmxTuLCiyeMmP%2FSCoNuD0JLPojdyimZTDBNEMzncvKIzXmzjiDUIwG0p2lEPe2lvT8owiR1h%2BHvXLqs72XTDkose9BjqkAXWfZ%2FNrtqAcb2DHPwRO98yZFmZRIPkm8xCpbLcDEAXEM%2BsdbaJLs45dTBW9gIDCJUNSQplyxUf4dOigc5x%2BOqoTDIUFqokYQ6zPqGpjVgS3v3LCUqGRNwhJg1LQMpjJ9W6WsYWmueHG5eZBN2S50lBqAGM23NZWcxA%2FdVz8SYWe7VGyBtzzFynyfFtIfykJianwmPMN1Ut0zWoNZRVsN5AqS0yz&X-Amz-Signature=bebd46b0e26aebe808db22772f9fe0610d557c75d4c158397208bf80da0670c4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
