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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS4LG3PW%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCICIbIXRrn%2FlPiWjlUsg6l%2Fj8j0XXl1pk6LITZXH%2BnAtmAiEA%2FW69QYq3DxB4SWIPOhEgyFxe48zzKjwSE05zQPhrEugqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQWBwxJuvJVBIeu6yrcAwAlYq%2BGDiFdOdhSiA65hnl0BBDxHUSPCE4ZhwteduDreeyEcZ%2FWTBz9sFrdEPTUbN%2F8ivNgrCLqN2roeSz0wiqOWJNKqO8H0g0QEBWe2Rt66%2BMnL2Q9no9JbtW3QXjHBjqwtxIEXSjEO2398wXaEUO9zCoUxY7sgxSM%2FSwpbiNr34Sin3hJrJoxkrgj%2BwLdopKHBufVhIdsrEaH5V1Z5blguMpSrBYD1mYfm9FGPl0I%2BwoBeRKEp4mV7IxZ4tjiFok72ixCWM2YQ08zKREMGNBjoVwFQc04wtDw3cWzWWZ81l4HnoMEFGqkudBlDt3fBbwn%2F7aU1kHJcdL83jQNkFberSJH4M9BOH8AdGUHQw22BTgAc7STEnqlE27CbVkErweaSBdaUgda6MW9PnNUGAp9VuEipqfur9Sk1rOqsLWLN5P5WAs9VuKqOdzERg3jXqMy9m9BY0G9kupWPTPyjmErhzi25GYpPuI9ZRAh7X22AcEFEZXWmnQ0UrQDZmrNV7%2F0CcSLVO4NE8VnuP44XX6AKJmVeqhumERogvh0cfNunTKZkGv%2FRFa%2BKsLRwLZns43VLC%2FKenCI7rycqKG9NAftU8Wf0bwjea%2FojdAkhK2MfbdPQRMwJJg4Dk4yMKel8L4GOqUBNAQfHXz%2FT5TvYVXSVeYm%2FryOhNmjRQIk%2Br4s5LHYz94H9e4POdgrzhQ2Tl%2FR4pBg%2BH7GxOnJ2eq46Mp5ow%2FSYCH6LY3229r4EtSoa5pFLo6aoyN1%2BdqCZXQy7ut7YqhRsGyxr9uXeVopQb65D%2BHOfDQeDjR2t7g6Eo8pvsCChZxcN9kQLucHpJar%2FaQhHBXUtNy%2FmXYx2obQV%2FN6Ads5zRN33k9E&X-Amz-Signature=778c954b8c53dd667d444ae968b47f8cd368b7d8f1bbdd1a9edd107ffa4dadd3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS4LG3PW%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCICIbIXRrn%2FlPiWjlUsg6l%2Fj8j0XXl1pk6LITZXH%2BnAtmAiEA%2FW69QYq3DxB4SWIPOhEgyFxe48zzKjwSE05zQPhrEugqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQWBwxJuvJVBIeu6yrcAwAlYq%2BGDiFdOdhSiA65hnl0BBDxHUSPCE4ZhwteduDreeyEcZ%2FWTBz9sFrdEPTUbN%2F8ivNgrCLqN2roeSz0wiqOWJNKqO8H0g0QEBWe2Rt66%2BMnL2Q9no9JbtW3QXjHBjqwtxIEXSjEO2398wXaEUO9zCoUxY7sgxSM%2FSwpbiNr34Sin3hJrJoxkrgj%2BwLdopKHBufVhIdsrEaH5V1Z5blguMpSrBYD1mYfm9FGPl0I%2BwoBeRKEp4mV7IxZ4tjiFok72ixCWM2YQ08zKREMGNBjoVwFQc04wtDw3cWzWWZ81l4HnoMEFGqkudBlDt3fBbwn%2F7aU1kHJcdL83jQNkFberSJH4M9BOH8AdGUHQw22BTgAc7STEnqlE27CbVkErweaSBdaUgda6MW9PnNUGAp9VuEipqfur9Sk1rOqsLWLN5P5WAs9VuKqOdzERg3jXqMy9m9BY0G9kupWPTPyjmErhzi25GYpPuI9ZRAh7X22AcEFEZXWmnQ0UrQDZmrNV7%2F0CcSLVO4NE8VnuP44XX6AKJmVeqhumERogvh0cfNunTKZkGv%2FRFa%2BKsLRwLZns43VLC%2FKenCI7rycqKG9NAftU8Wf0bwjea%2FojdAkhK2MfbdPQRMwJJg4Dk4yMKel8L4GOqUBNAQfHXz%2FT5TvYVXSVeYm%2FryOhNmjRQIk%2Br4s5LHYz94H9e4POdgrzhQ2Tl%2FR4pBg%2BH7GxOnJ2eq46Mp5ow%2FSYCH6LY3229r4EtSoa5pFLo6aoyN1%2BdqCZXQy7ut7YqhRsGyxr9uXeVopQb65D%2BHOfDQeDjR2t7g6Eo8pvsCChZxcN9kQLucHpJar%2FaQhHBXUtNy%2FmXYx2obQV%2FN6Ads5zRN33k9E&X-Amz-Signature=25203be597d71fec04b1fd0849bd8f711634831cf341b7e66b358f09c4c345f6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS4LG3PW%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCICIbIXRrn%2FlPiWjlUsg6l%2Fj8j0XXl1pk6LITZXH%2BnAtmAiEA%2FW69QYq3DxB4SWIPOhEgyFxe48zzKjwSE05zQPhrEugqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQWBwxJuvJVBIeu6yrcAwAlYq%2BGDiFdOdhSiA65hnl0BBDxHUSPCE4ZhwteduDreeyEcZ%2FWTBz9sFrdEPTUbN%2F8ivNgrCLqN2roeSz0wiqOWJNKqO8H0g0QEBWe2Rt66%2BMnL2Q9no9JbtW3QXjHBjqwtxIEXSjEO2398wXaEUO9zCoUxY7sgxSM%2FSwpbiNr34Sin3hJrJoxkrgj%2BwLdopKHBufVhIdsrEaH5V1Z5blguMpSrBYD1mYfm9FGPl0I%2BwoBeRKEp4mV7IxZ4tjiFok72ixCWM2YQ08zKREMGNBjoVwFQc04wtDw3cWzWWZ81l4HnoMEFGqkudBlDt3fBbwn%2F7aU1kHJcdL83jQNkFberSJH4M9BOH8AdGUHQw22BTgAc7STEnqlE27CbVkErweaSBdaUgda6MW9PnNUGAp9VuEipqfur9Sk1rOqsLWLN5P5WAs9VuKqOdzERg3jXqMy9m9BY0G9kupWPTPyjmErhzi25GYpPuI9ZRAh7X22AcEFEZXWmnQ0UrQDZmrNV7%2F0CcSLVO4NE8VnuP44XX6AKJmVeqhumERogvh0cfNunTKZkGv%2FRFa%2BKsLRwLZns43VLC%2FKenCI7rycqKG9NAftU8Wf0bwjea%2FojdAkhK2MfbdPQRMwJJg4Dk4yMKel8L4GOqUBNAQfHXz%2FT5TvYVXSVeYm%2FryOhNmjRQIk%2Br4s5LHYz94H9e4POdgrzhQ2Tl%2FR4pBg%2BH7GxOnJ2eq46Mp5ow%2FSYCH6LY3229r4EtSoa5pFLo6aoyN1%2BdqCZXQy7ut7YqhRsGyxr9uXeVopQb65D%2BHOfDQeDjR2t7g6Eo8pvsCChZxcN9kQLucHpJar%2FaQhHBXUtNy%2FmXYx2obQV%2FN6Ads5zRN33k9E&X-Amz-Signature=72880d3d45e02cb6ace9064c6442f2933d7ba7d48d5c62a0d4028645c0790d92&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS4LG3PW%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCICIbIXRrn%2FlPiWjlUsg6l%2Fj8j0XXl1pk6LITZXH%2BnAtmAiEA%2FW69QYq3DxB4SWIPOhEgyFxe48zzKjwSE05zQPhrEugqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQWBwxJuvJVBIeu6yrcAwAlYq%2BGDiFdOdhSiA65hnl0BBDxHUSPCE4ZhwteduDreeyEcZ%2FWTBz9sFrdEPTUbN%2F8ivNgrCLqN2roeSz0wiqOWJNKqO8H0g0QEBWe2Rt66%2BMnL2Q9no9JbtW3QXjHBjqwtxIEXSjEO2398wXaEUO9zCoUxY7sgxSM%2FSwpbiNr34Sin3hJrJoxkrgj%2BwLdopKHBufVhIdsrEaH5V1Z5blguMpSrBYD1mYfm9FGPl0I%2BwoBeRKEp4mV7IxZ4tjiFok72ixCWM2YQ08zKREMGNBjoVwFQc04wtDw3cWzWWZ81l4HnoMEFGqkudBlDt3fBbwn%2F7aU1kHJcdL83jQNkFberSJH4M9BOH8AdGUHQw22BTgAc7STEnqlE27CbVkErweaSBdaUgda6MW9PnNUGAp9VuEipqfur9Sk1rOqsLWLN5P5WAs9VuKqOdzERg3jXqMy9m9BY0G9kupWPTPyjmErhzi25GYpPuI9ZRAh7X22AcEFEZXWmnQ0UrQDZmrNV7%2F0CcSLVO4NE8VnuP44XX6AKJmVeqhumERogvh0cfNunTKZkGv%2FRFa%2BKsLRwLZns43VLC%2FKenCI7rycqKG9NAftU8Wf0bwjea%2FojdAkhK2MfbdPQRMwJJg4Dk4yMKel8L4GOqUBNAQfHXz%2FT5TvYVXSVeYm%2FryOhNmjRQIk%2Br4s5LHYz94H9e4POdgrzhQ2Tl%2FR4pBg%2BH7GxOnJ2eq46Mp5ow%2FSYCH6LY3229r4EtSoa5pFLo6aoyN1%2BdqCZXQy7ut7YqhRsGyxr9uXeVopQb65D%2BHOfDQeDjR2t7g6Eo8pvsCChZxcN9kQLucHpJar%2FaQhHBXUtNy%2FmXYx2obQV%2FN6Ads5zRN33k9E&X-Amz-Signature=7d1e158af16725ed3207c9373e73c08f8985fb93f9827cfe810d08bda572eef8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS4LG3PW%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCICIbIXRrn%2FlPiWjlUsg6l%2Fj8j0XXl1pk6LITZXH%2BnAtmAiEA%2FW69QYq3DxB4SWIPOhEgyFxe48zzKjwSE05zQPhrEugqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQWBwxJuvJVBIeu6yrcAwAlYq%2BGDiFdOdhSiA65hnl0BBDxHUSPCE4ZhwteduDreeyEcZ%2FWTBz9sFrdEPTUbN%2F8ivNgrCLqN2roeSz0wiqOWJNKqO8H0g0QEBWe2Rt66%2BMnL2Q9no9JbtW3QXjHBjqwtxIEXSjEO2398wXaEUO9zCoUxY7sgxSM%2FSwpbiNr34Sin3hJrJoxkrgj%2BwLdopKHBufVhIdsrEaH5V1Z5blguMpSrBYD1mYfm9FGPl0I%2BwoBeRKEp4mV7IxZ4tjiFok72ixCWM2YQ08zKREMGNBjoVwFQc04wtDw3cWzWWZ81l4HnoMEFGqkudBlDt3fBbwn%2F7aU1kHJcdL83jQNkFberSJH4M9BOH8AdGUHQw22BTgAc7STEnqlE27CbVkErweaSBdaUgda6MW9PnNUGAp9VuEipqfur9Sk1rOqsLWLN5P5WAs9VuKqOdzERg3jXqMy9m9BY0G9kupWPTPyjmErhzi25GYpPuI9ZRAh7X22AcEFEZXWmnQ0UrQDZmrNV7%2F0CcSLVO4NE8VnuP44XX6AKJmVeqhumERogvh0cfNunTKZkGv%2FRFa%2BKsLRwLZns43VLC%2FKenCI7rycqKG9NAftU8Wf0bwjea%2FojdAkhK2MfbdPQRMwJJg4Dk4yMKel8L4GOqUBNAQfHXz%2FT5TvYVXSVeYm%2FryOhNmjRQIk%2Br4s5LHYz94H9e4POdgrzhQ2Tl%2FR4pBg%2BH7GxOnJ2eq46Mp5ow%2FSYCH6LY3229r4EtSoa5pFLo6aoyN1%2BdqCZXQy7ut7YqhRsGyxr9uXeVopQb65D%2BHOfDQeDjR2t7g6Eo8pvsCChZxcN9kQLucHpJar%2FaQhHBXUtNy%2FmXYx2obQV%2FN6Ads5zRN33k9E&X-Amz-Signature=d7964348cabc4f1aa90e1935673092f6c0c4f5deeaa928f29bac976378c03232&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
