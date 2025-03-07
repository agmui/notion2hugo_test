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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VARDFJMM%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlQM2WFq8X2HxnWnNcA72CnT1qHknBuLGdyjlMc0ABGAiEA2o6nAenyayN763%2FRBhAAbT76K2e4xidHara6J84ruS8q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDEmL8sQh1wBxoCYWbyrcA1qZSwtq8lGPWTRa%2FusSVXj1K66qn9wC2BMU%2B8zDl4WLayVFpcGXAbm%2FXVDfU8rc26qDPMUUBPBe6nsjwiXCT9E5jwkA%2BBeE87bszrFgkTzXgdhuWn1UvKtCEBISOxcfeHfgsOjoBI%2BXaAI9ELNgVNLZs6YHLAkqqUcV0mr3CwzKjm5YUzL0wtv2oirV%2B0QtE8ZofLIk0M89qK08BzFce0oAABSkF5fbqbBLiEPnchgA2c%2FdNp36Wp00jG4OgI0JqkVctASalJrZXEe0W%2FUwvC2k%2BN2QTThhGnO6mtJnRJTUBvYVxsvp9ZA%2Fv49UHOcHlLubRcahBHG%2F5DUrFqWBrY3X4v41QYZg10J%2FJUM6MobRwGw79KPDhQlIfxSfIH%2FRxW1XrTYngoWd7LZ3VIbDm4mTGYWkghf8djwy5AcCyomIp2O5uF9IiJCyQmllXkzzTBWnfH6uOf9umi%2BXIlpGNaWD2hUCsHhwJSEMQeHAO6GnM4OTuAFQq3AxPX9FDKggVk27dChEcTmbsWehL9nymnzdgLHZ%2BYY0wsV1oezltsjjEQMr9RZFBcOAytJSVBO4JibqOeQnTzXHtX6sdeYC7PgaZUDcPjIQufrxhZwEOgG4s3ViHAXXlQ6tfWcbMPPvqL4GOqUB9xVnch20oFTh5XQBmoWJGfUVifPqm3W4W2JiDW5PhFyN0lR0wuyFl%2F9dzNfl%2FLR3w2L8Sz4Ouoq8R9OL26aXA8Ak6Cg29uzpLJcRcQzvk4FEa9Y%2BAeHE1IS2svSOhTR3s7GyhkJZUqEpBjhMJ%2FwrRQsNfA83HQvIKsMUyou1Xd%2F%2FU2JSY6stbVpUqGAeWUpA5QrWSfY7%2BZE1wxAGSEaO8fTcYOjP&X-Amz-Signature=c0bc94b0fa6b1846b3f1623ee8b092f76c979b4cdf64539a7ff572716bb37e59&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VARDFJMM%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlQM2WFq8X2HxnWnNcA72CnT1qHknBuLGdyjlMc0ABGAiEA2o6nAenyayN763%2FRBhAAbT76K2e4xidHara6J84ruS8q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDEmL8sQh1wBxoCYWbyrcA1qZSwtq8lGPWTRa%2FusSVXj1K66qn9wC2BMU%2B8zDl4WLayVFpcGXAbm%2FXVDfU8rc26qDPMUUBPBe6nsjwiXCT9E5jwkA%2BBeE87bszrFgkTzXgdhuWn1UvKtCEBISOxcfeHfgsOjoBI%2BXaAI9ELNgVNLZs6YHLAkqqUcV0mr3CwzKjm5YUzL0wtv2oirV%2B0QtE8ZofLIk0M89qK08BzFce0oAABSkF5fbqbBLiEPnchgA2c%2FdNp36Wp00jG4OgI0JqkVctASalJrZXEe0W%2FUwvC2k%2BN2QTThhGnO6mtJnRJTUBvYVxsvp9ZA%2Fv49UHOcHlLubRcahBHG%2F5DUrFqWBrY3X4v41QYZg10J%2FJUM6MobRwGw79KPDhQlIfxSfIH%2FRxW1XrTYngoWd7LZ3VIbDm4mTGYWkghf8djwy5AcCyomIp2O5uF9IiJCyQmllXkzzTBWnfH6uOf9umi%2BXIlpGNaWD2hUCsHhwJSEMQeHAO6GnM4OTuAFQq3AxPX9FDKggVk27dChEcTmbsWehL9nymnzdgLHZ%2BYY0wsV1oezltsjjEQMr9RZFBcOAytJSVBO4JibqOeQnTzXHtX6sdeYC7PgaZUDcPjIQufrxhZwEOgG4s3ViHAXXlQ6tfWcbMPPvqL4GOqUB9xVnch20oFTh5XQBmoWJGfUVifPqm3W4W2JiDW5PhFyN0lR0wuyFl%2F9dzNfl%2FLR3w2L8Sz4Ouoq8R9OL26aXA8Ak6Cg29uzpLJcRcQzvk4FEa9Y%2BAeHE1IS2svSOhTR3s7GyhkJZUqEpBjhMJ%2FwrRQsNfA83HQvIKsMUyou1Xd%2F%2FU2JSY6stbVpUqGAeWUpA5QrWSfY7%2BZE1wxAGSEaO8fTcYOjP&X-Amz-Signature=4830d124587515f0f440e6adfb9afecb5910550119e7f1b521b5df663aef6d54&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VARDFJMM%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlQM2WFq8X2HxnWnNcA72CnT1qHknBuLGdyjlMc0ABGAiEA2o6nAenyayN763%2FRBhAAbT76K2e4xidHara6J84ruS8q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDEmL8sQh1wBxoCYWbyrcA1qZSwtq8lGPWTRa%2FusSVXj1K66qn9wC2BMU%2B8zDl4WLayVFpcGXAbm%2FXVDfU8rc26qDPMUUBPBe6nsjwiXCT9E5jwkA%2BBeE87bszrFgkTzXgdhuWn1UvKtCEBISOxcfeHfgsOjoBI%2BXaAI9ELNgVNLZs6YHLAkqqUcV0mr3CwzKjm5YUzL0wtv2oirV%2B0QtE8ZofLIk0M89qK08BzFce0oAABSkF5fbqbBLiEPnchgA2c%2FdNp36Wp00jG4OgI0JqkVctASalJrZXEe0W%2FUwvC2k%2BN2QTThhGnO6mtJnRJTUBvYVxsvp9ZA%2Fv49UHOcHlLubRcahBHG%2F5DUrFqWBrY3X4v41QYZg10J%2FJUM6MobRwGw79KPDhQlIfxSfIH%2FRxW1XrTYngoWd7LZ3VIbDm4mTGYWkghf8djwy5AcCyomIp2O5uF9IiJCyQmllXkzzTBWnfH6uOf9umi%2BXIlpGNaWD2hUCsHhwJSEMQeHAO6GnM4OTuAFQq3AxPX9FDKggVk27dChEcTmbsWehL9nymnzdgLHZ%2BYY0wsV1oezltsjjEQMr9RZFBcOAytJSVBO4JibqOeQnTzXHtX6sdeYC7PgaZUDcPjIQufrxhZwEOgG4s3ViHAXXlQ6tfWcbMPPvqL4GOqUB9xVnch20oFTh5XQBmoWJGfUVifPqm3W4W2JiDW5PhFyN0lR0wuyFl%2F9dzNfl%2FLR3w2L8Sz4Ouoq8R9OL26aXA8Ak6Cg29uzpLJcRcQzvk4FEa9Y%2BAeHE1IS2svSOhTR3s7GyhkJZUqEpBjhMJ%2FwrRQsNfA83HQvIKsMUyou1Xd%2F%2FU2JSY6stbVpUqGAeWUpA5QrWSfY7%2BZE1wxAGSEaO8fTcYOjP&X-Amz-Signature=852814c10fadd77d4c0abe81f9a76664f1eb6fbfc252fb30c54fddc2cb79da3f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VARDFJMM%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlQM2WFq8X2HxnWnNcA72CnT1qHknBuLGdyjlMc0ABGAiEA2o6nAenyayN763%2FRBhAAbT76K2e4xidHara6J84ruS8q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDEmL8sQh1wBxoCYWbyrcA1qZSwtq8lGPWTRa%2FusSVXj1K66qn9wC2BMU%2B8zDl4WLayVFpcGXAbm%2FXVDfU8rc26qDPMUUBPBe6nsjwiXCT9E5jwkA%2BBeE87bszrFgkTzXgdhuWn1UvKtCEBISOxcfeHfgsOjoBI%2BXaAI9ELNgVNLZs6YHLAkqqUcV0mr3CwzKjm5YUzL0wtv2oirV%2B0QtE8ZofLIk0M89qK08BzFce0oAABSkF5fbqbBLiEPnchgA2c%2FdNp36Wp00jG4OgI0JqkVctASalJrZXEe0W%2FUwvC2k%2BN2QTThhGnO6mtJnRJTUBvYVxsvp9ZA%2Fv49UHOcHlLubRcahBHG%2F5DUrFqWBrY3X4v41QYZg10J%2FJUM6MobRwGw79KPDhQlIfxSfIH%2FRxW1XrTYngoWd7LZ3VIbDm4mTGYWkghf8djwy5AcCyomIp2O5uF9IiJCyQmllXkzzTBWnfH6uOf9umi%2BXIlpGNaWD2hUCsHhwJSEMQeHAO6GnM4OTuAFQq3AxPX9FDKggVk27dChEcTmbsWehL9nymnzdgLHZ%2BYY0wsV1oezltsjjEQMr9RZFBcOAytJSVBO4JibqOeQnTzXHtX6sdeYC7PgaZUDcPjIQufrxhZwEOgG4s3ViHAXXlQ6tfWcbMPPvqL4GOqUB9xVnch20oFTh5XQBmoWJGfUVifPqm3W4W2JiDW5PhFyN0lR0wuyFl%2F9dzNfl%2FLR3w2L8Sz4Ouoq8R9OL26aXA8Ak6Cg29uzpLJcRcQzvk4FEa9Y%2BAeHE1IS2svSOhTR3s7GyhkJZUqEpBjhMJ%2FwrRQsNfA83HQvIKsMUyou1Xd%2F%2FU2JSY6stbVpUqGAeWUpA5QrWSfY7%2BZE1wxAGSEaO8fTcYOjP&X-Amz-Signature=a819c0a8bb078346d8d768f03ac4d8f4c8014a2ce4d5ed304bfbc795cbde00c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VARDFJMM%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlQM2WFq8X2HxnWnNcA72CnT1qHknBuLGdyjlMc0ABGAiEA2o6nAenyayN763%2FRBhAAbT76K2e4xidHara6J84ruS8q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDEmL8sQh1wBxoCYWbyrcA1qZSwtq8lGPWTRa%2FusSVXj1K66qn9wC2BMU%2B8zDl4WLayVFpcGXAbm%2FXVDfU8rc26qDPMUUBPBe6nsjwiXCT9E5jwkA%2BBeE87bszrFgkTzXgdhuWn1UvKtCEBISOxcfeHfgsOjoBI%2BXaAI9ELNgVNLZs6YHLAkqqUcV0mr3CwzKjm5YUzL0wtv2oirV%2B0QtE8ZofLIk0M89qK08BzFce0oAABSkF5fbqbBLiEPnchgA2c%2FdNp36Wp00jG4OgI0JqkVctASalJrZXEe0W%2FUwvC2k%2BN2QTThhGnO6mtJnRJTUBvYVxsvp9ZA%2Fv49UHOcHlLubRcahBHG%2F5DUrFqWBrY3X4v41QYZg10J%2FJUM6MobRwGw79KPDhQlIfxSfIH%2FRxW1XrTYngoWd7LZ3VIbDm4mTGYWkghf8djwy5AcCyomIp2O5uF9IiJCyQmllXkzzTBWnfH6uOf9umi%2BXIlpGNaWD2hUCsHhwJSEMQeHAO6GnM4OTuAFQq3AxPX9FDKggVk27dChEcTmbsWehL9nymnzdgLHZ%2BYY0wsV1oezltsjjEQMr9RZFBcOAytJSVBO4JibqOeQnTzXHtX6sdeYC7PgaZUDcPjIQufrxhZwEOgG4s3ViHAXXlQ6tfWcbMPPvqL4GOqUB9xVnch20oFTh5XQBmoWJGfUVifPqm3W4W2JiDW5PhFyN0lR0wuyFl%2F9dzNfl%2FLR3w2L8Sz4Ouoq8R9OL26aXA8Ak6Cg29uzpLJcRcQzvk4FEa9Y%2BAeHE1IS2svSOhTR3s7GyhkJZUqEpBjhMJ%2FwrRQsNfA83HQvIKsMUyou1Xd%2F%2FU2JSY6stbVpUqGAeWUpA5QrWSfY7%2BZE1wxAGSEaO8fTcYOjP&X-Amz-Signature=a5e66affd20eba704b9cb5c658a9f78af966cdb36e3f733444e4bed4b24d253f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
