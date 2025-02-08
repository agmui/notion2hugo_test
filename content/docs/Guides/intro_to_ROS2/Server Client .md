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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZAJQKI3%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDAvf0gNtfvC7LuabLmST7HgBSeN%2BPwgXCh2YMLN53x8QIhAPkwM6z%2BEXOWsD42aE%2B%2BZzEDtenNaEM9%2FWt%2FY2trAv2aKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGxCkn2V8Tx2RJm34q3AN6%2F4YayWZzZLXDlTNLWo12tfBkyq7%2B39SOc%2FvNVzPQZBuQ9sy%2FvMPc%2FsDwGjPTEWWD50UrE18AcLM6UrAG3QCf6n98i0xKG5ZQs1SWz3qbhLau%2BXiPr7bRAixT758GWDDw2ppFQ1fl7HVRl7QmJcP8eEL7Iv49W0xU5Vp4D8b6B2OcN1B8QUeiTyuinMZfg%2BZizs7tfvOFn1F2r5SSBq9pHFbmzK%2FoQbb5uuB1yFEjuOI%2F6%2FDh3ytzS5AFi4ECeOosWfxJ%2FyYngOmVe5nEt%2Fl4bEXbk7OLxCGxn%2B%2BOTzbFZ4qb%2FOD5YMCJv9fQoUIVPspu5dThl%2FFRT454pJSzDP33mkYcUFJqKkRo6zYGBS%2FJIYs%2B0G%2BZ7FGls4MR9%2FYgYYoHqJYJ8h9Dq%2BLMTX6MqcPWGYOruOMzpUC98ADQ17gevYZVFEjxwtlpu7z7CS5vfhbuOL%2B0JeLUfTs2fzkvU76Als0DEGdtKzepFwMQqs%2FChpxskc2GCQF%2BJ4WUeefTr%2FAAB5YgJ4ahl4wZghoHitpQjyZbFtr4vomprRVQpBYGCSbujVI26mUCweuGyPyRHuyKUYj1SE1wks3O9ljOXmnVUnrWf1iGBGN0SEyz1WbFOZpPrqDisG8hSCYmjjC8kJy9BjqkAZLJG1kDAbcDtu7ouHjvyF7xzOEMmnIbuBNbJFPgmZDq%2B9T3s8sIo3u4ki1brBX5%2B7MnWJLbN76iHmfQhm3enULImUUdYn0aGtIGwLbVn8A%2BOK5gx1y6a7zE1oSDLDp%2Buv3O3W3pa1YW8EUFf%2BWc8iUnv6YivWxaCnJPASbpHfAh4C%2Bvy0U5Bb2KJUehVV1it0bH8Um3GoXSeurUwPdftDIBhTlu&X-Amz-Signature=c3286ea8ef01d12024df578606ee39795afe4b6758322844197460530f0fc9d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZAJQKI3%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDAvf0gNtfvC7LuabLmST7HgBSeN%2BPwgXCh2YMLN53x8QIhAPkwM6z%2BEXOWsD42aE%2B%2BZzEDtenNaEM9%2FWt%2FY2trAv2aKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGxCkn2V8Tx2RJm34q3AN6%2F4YayWZzZLXDlTNLWo12tfBkyq7%2B39SOc%2FvNVzPQZBuQ9sy%2FvMPc%2FsDwGjPTEWWD50UrE18AcLM6UrAG3QCf6n98i0xKG5ZQs1SWz3qbhLau%2BXiPr7bRAixT758GWDDw2ppFQ1fl7HVRl7QmJcP8eEL7Iv49W0xU5Vp4D8b6B2OcN1B8QUeiTyuinMZfg%2BZizs7tfvOFn1F2r5SSBq9pHFbmzK%2FoQbb5uuB1yFEjuOI%2F6%2FDh3ytzS5AFi4ECeOosWfxJ%2FyYngOmVe5nEt%2Fl4bEXbk7OLxCGxn%2B%2BOTzbFZ4qb%2FOD5YMCJv9fQoUIVPspu5dThl%2FFRT454pJSzDP33mkYcUFJqKkRo6zYGBS%2FJIYs%2B0G%2BZ7FGls4MR9%2FYgYYoHqJYJ8h9Dq%2BLMTX6MqcPWGYOruOMzpUC98ADQ17gevYZVFEjxwtlpu7z7CS5vfhbuOL%2B0JeLUfTs2fzkvU76Als0DEGdtKzepFwMQqs%2FChpxskc2GCQF%2BJ4WUeefTr%2FAAB5YgJ4ahl4wZghoHitpQjyZbFtr4vomprRVQpBYGCSbujVI26mUCweuGyPyRHuyKUYj1SE1wks3O9ljOXmnVUnrWf1iGBGN0SEyz1WbFOZpPrqDisG8hSCYmjjC8kJy9BjqkAZLJG1kDAbcDtu7ouHjvyF7xzOEMmnIbuBNbJFPgmZDq%2B9T3s8sIo3u4ki1brBX5%2B7MnWJLbN76iHmfQhm3enULImUUdYn0aGtIGwLbVn8A%2BOK5gx1y6a7zE1oSDLDp%2Buv3O3W3pa1YW8EUFf%2BWc8iUnv6YivWxaCnJPASbpHfAh4C%2Bvy0U5Bb2KJUehVV1it0bH8Um3GoXSeurUwPdftDIBhTlu&X-Amz-Signature=b63a2e57e9d8e9eedbb0caa4721997e2ee25fcc07880d8bb660176ce9c441b4c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZAJQKI3%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDAvf0gNtfvC7LuabLmST7HgBSeN%2BPwgXCh2YMLN53x8QIhAPkwM6z%2BEXOWsD42aE%2B%2BZzEDtenNaEM9%2FWt%2FY2trAv2aKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGxCkn2V8Tx2RJm34q3AN6%2F4YayWZzZLXDlTNLWo12tfBkyq7%2B39SOc%2FvNVzPQZBuQ9sy%2FvMPc%2FsDwGjPTEWWD50UrE18AcLM6UrAG3QCf6n98i0xKG5ZQs1SWz3qbhLau%2BXiPr7bRAixT758GWDDw2ppFQ1fl7HVRl7QmJcP8eEL7Iv49W0xU5Vp4D8b6B2OcN1B8QUeiTyuinMZfg%2BZizs7tfvOFn1F2r5SSBq9pHFbmzK%2FoQbb5uuB1yFEjuOI%2F6%2FDh3ytzS5AFi4ECeOosWfxJ%2FyYngOmVe5nEt%2Fl4bEXbk7OLxCGxn%2B%2BOTzbFZ4qb%2FOD5YMCJv9fQoUIVPspu5dThl%2FFRT454pJSzDP33mkYcUFJqKkRo6zYGBS%2FJIYs%2B0G%2BZ7FGls4MR9%2FYgYYoHqJYJ8h9Dq%2BLMTX6MqcPWGYOruOMzpUC98ADQ17gevYZVFEjxwtlpu7z7CS5vfhbuOL%2B0JeLUfTs2fzkvU76Als0DEGdtKzepFwMQqs%2FChpxskc2GCQF%2BJ4WUeefTr%2FAAB5YgJ4ahl4wZghoHitpQjyZbFtr4vomprRVQpBYGCSbujVI26mUCweuGyPyRHuyKUYj1SE1wks3O9ljOXmnVUnrWf1iGBGN0SEyz1WbFOZpPrqDisG8hSCYmjjC8kJy9BjqkAZLJG1kDAbcDtu7ouHjvyF7xzOEMmnIbuBNbJFPgmZDq%2B9T3s8sIo3u4ki1brBX5%2B7MnWJLbN76iHmfQhm3enULImUUdYn0aGtIGwLbVn8A%2BOK5gx1y6a7zE1oSDLDp%2Buv3O3W3pa1YW8EUFf%2BWc8iUnv6YivWxaCnJPASbpHfAh4C%2Bvy0U5Bb2KJUehVV1it0bH8Um3GoXSeurUwPdftDIBhTlu&X-Amz-Signature=b31af19c14406b370f401a4e30b6259c66e9665ea7eb16aee43da21fd40ceb6a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZAJQKI3%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDAvf0gNtfvC7LuabLmST7HgBSeN%2BPwgXCh2YMLN53x8QIhAPkwM6z%2BEXOWsD42aE%2B%2BZzEDtenNaEM9%2FWt%2FY2trAv2aKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGxCkn2V8Tx2RJm34q3AN6%2F4YayWZzZLXDlTNLWo12tfBkyq7%2B39SOc%2FvNVzPQZBuQ9sy%2FvMPc%2FsDwGjPTEWWD50UrE18AcLM6UrAG3QCf6n98i0xKG5ZQs1SWz3qbhLau%2BXiPr7bRAixT758GWDDw2ppFQ1fl7HVRl7QmJcP8eEL7Iv49W0xU5Vp4D8b6B2OcN1B8QUeiTyuinMZfg%2BZizs7tfvOFn1F2r5SSBq9pHFbmzK%2FoQbb5uuB1yFEjuOI%2F6%2FDh3ytzS5AFi4ECeOosWfxJ%2FyYngOmVe5nEt%2Fl4bEXbk7OLxCGxn%2B%2BOTzbFZ4qb%2FOD5YMCJv9fQoUIVPspu5dThl%2FFRT454pJSzDP33mkYcUFJqKkRo6zYGBS%2FJIYs%2B0G%2BZ7FGls4MR9%2FYgYYoHqJYJ8h9Dq%2BLMTX6MqcPWGYOruOMzpUC98ADQ17gevYZVFEjxwtlpu7z7CS5vfhbuOL%2B0JeLUfTs2fzkvU76Als0DEGdtKzepFwMQqs%2FChpxskc2GCQF%2BJ4WUeefTr%2FAAB5YgJ4ahl4wZghoHitpQjyZbFtr4vomprRVQpBYGCSbujVI26mUCweuGyPyRHuyKUYj1SE1wks3O9ljOXmnVUnrWf1iGBGN0SEyz1WbFOZpPrqDisG8hSCYmjjC8kJy9BjqkAZLJG1kDAbcDtu7ouHjvyF7xzOEMmnIbuBNbJFPgmZDq%2B9T3s8sIo3u4ki1brBX5%2B7MnWJLbN76iHmfQhm3enULImUUdYn0aGtIGwLbVn8A%2BOK5gx1y6a7zE1oSDLDp%2Buv3O3W3pa1YW8EUFf%2BWc8iUnv6YivWxaCnJPASbpHfAh4C%2Bvy0U5Bb2KJUehVV1it0bH8Um3GoXSeurUwPdftDIBhTlu&X-Amz-Signature=f6b63e70e6256b9887a739e3a328c34d6e011dd3656758b88bb2a36e2cb52f1d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZAJQKI3%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDAvf0gNtfvC7LuabLmST7HgBSeN%2BPwgXCh2YMLN53x8QIhAPkwM6z%2BEXOWsD42aE%2B%2BZzEDtenNaEM9%2FWt%2FY2trAv2aKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGxCkn2V8Tx2RJm34q3AN6%2F4YayWZzZLXDlTNLWo12tfBkyq7%2B39SOc%2FvNVzPQZBuQ9sy%2FvMPc%2FsDwGjPTEWWD50UrE18AcLM6UrAG3QCf6n98i0xKG5ZQs1SWz3qbhLau%2BXiPr7bRAixT758GWDDw2ppFQ1fl7HVRl7QmJcP8eEL7Iv49W0xU5Vp4D8b6B2OcN1B8QUeiTyuinMZfg%2BZizs7tfvOFn1F2r5SSBq9pHFbmzK%2FoQbb5uuB1yFEjuOI%2F6%2FDh3ytzS5AFi4ECeOosWfxJ%2FyYngOmVe5nEt%2Fl4bEXbk7OLxCGxn%2B%2BOTzbFZ4qb%2FOD5YMCJv9fQoUIVPspu5dThl%2FFRT454pJSzDP33mkYcUFJqKkRo6zYGBS%2FJIYs%2B0G%2BZ7FGls4MR9%2FYgYYoHqJYJ8h9Dq%2BLMTX6MqcPWGYOruOMzpUC98ADQ17gevYZVFEjxwtlpu7z7CS5vfhbuOL%2B0JeLUfTs2fzkvU76Als0DEGdtKzepFwMQqs%2FChpxskc2GCQF%2BJ4WUeefTr%2FAAB5YgJ4ahl4wZghoHitpQjyZbFtr4vomprRVQpBYGCSbujVI26mUCweuGyPyRHuyKUYj1SE1wks3O9ljOXmnVUnrWf1iGBGN0SEyz1WbFOZpPrqDisG8hSCYmjjC8kJy9BjqkAZLJG1kDAbcDtu7ouHjvyF7xzOEMmnIbuBNbJFPgmZDq%2B9T3s8sIo3u4ki1brBX5%2B7MnWJLbN76iHmfQhm3enULImUUdYn0aGtIGwLbVn8A%2BOK5gx1y6a7zE1oSDLDp%2Buv3O3W3pa1YW8EUFf%2BWc8iUnv6YivWxaCnJPASbpHfAh4C%2Bvy0U5Bb2KJUehVV1it0bH8Um3GoXSeurUwPdftDIBhTlu&X-Amz-Signature=51f44c56d97626ae8cc6437aa068de089876a2392affb2978edd22856c58c690&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
