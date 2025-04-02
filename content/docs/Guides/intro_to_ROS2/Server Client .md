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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB4TVUNU%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCU4sBTdwz1iHuV1iZ4QwzYCAQ9HZsYD5Hyz%2BYo5nV2WwIgXy8dSIAlBq1AvLDZdzDynz8QgiAxQyGWJFfo28UQY7gqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBC2it1K%2FxIuz8Z4nyrcAym2VsasCsIn5GY0yJdLin37tQtsn0egZVYBy3mQP1vWj95K7WA0Vw37xONTKJIr8aSI7DnLEjhfHtRZOp7mXrVt%2B1smrWWodVf%2BrBZrpxxJTIlJ%2FWxJqqAecrAlu%2BgUgzMWOZOYQNLcQsv4SHO9LouQM4ZdRz7bnNpIW6mJ7vicoOR%2FxmG71XURQAs%2F7GwD7GrFr6zJHFHIhjTgvGDN8wxKDn25qYezMi8SD3CZTT3U4RT3WxCB8iPjWLN0AwwFItQ%2Fy2RijXKhivJ3K1W%2BvZBEs74T%2BlfLenuObLVc6Qa%2BqrmXNr%2BPTwJGFEGQvsa%2F%2BneNXdeIYlfB92a5OVhaTixT1ijc1p%2FJVRYlqzTyPLG28iBR6dDc72uw4lPpYp1q6waC3t%2FlHtoMVS2inz2SlYO5HVSAYeShJ3xFr3txzQ4FHeh8yrP5ukXpLvjECV2Eend%2BLmtylc1FXZ1byRuPf3QwOfh1ZieC1sJJ9GAVtrCScTpq5Odr%2FV3ef4bbVXA0%2B%2FqH9q4nex5ten44xrhF5U6BkklToCPA2oJWjIKyh0WPIk25niK0UbQxDiuouiLDsprUxRfBY6fQR0YOat86Q4ZZgmRXuV3yXE8akkoXx3lJGYMhTWqf2VwXpLboMK2psb8GOqUBoxvM9pb4T8dROTy2ts1UzR1HbmZvFyWUyLdvh2o2BjCY4GSXpFZbsWI7JdrkBDcBqksbXC4rJXoeIW5xLdubO5mJySREyWdvF8YIRGZas0KBOzvuhdBEeNLjTXbIlBzE4Brt19yi3ulW%2FnqOCpSXorpyzQe9rZ%2BM7p4fil2%2FM3ZGmpAMeXlK1SwU%2FMTd90tlfZbH8I%2F3FGVCdoFg1s1xr1P58A8q&X-Amz-Signature=0ebda89abbe1b0399841fe98efde850012d439e4c8296d795bc78fd86942864a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB4TVUNU%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCU4sBTdwz1iHuV1iZ4QwzYCAQ9HZsYD5Hyz%2BYo5nV2WwIgXy8dSIAlBq1AvLDZdzDynz8QgiAxQyGWJFfo28UQY7gqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBC2it1K%2FxIuz8Z4nyrcAym2VsasCsIn5GY0yJdLin37tQtsn0egZVYBy3mQP1vWj95K7WA0Vw37xONTKJIr8aSI7DnLEjhfHtRZOp7mXrVt%2B1smrWWodVf%2BrBZrpxxJTIlJ%2FWxJqqAecrAlu%2BgUgzMWOZOYQNLcQsv4SHO9LouQM4ZdRz7bnNpIW6mJ7vicoOR%2FxmG71XURQAs%2F7GwD7GrFr6zJHFHIhjTgvGDN8wxKDn25qYezMi8SD3CZTT3U4RT3WxCB8iPjWLN0AwwFItQ%2Fy2RijXKhivJ3K1W%2BvZBEs74T%2BlfLenuObLVc6Qa%2BqrmXNr%2BPTwJGFEGQvsa%2F%2BneNXdeIYlfB92a5OVhaTixT1ijc1p%2FJVRYlqzTyPLG28iBR6dDc72uw4lPpYp1q6waC3t%2FlHtoMVS2inz2SlYO5HVSAYeShJ3xFr3txzQ4FHeh8yrP5ukXpLvjECV2Eend%2BLmtylc1FXZ1byRuPf3QwOfh1ZieC1sJJ9GAVtrCScTpq5Odr%2FV3ef4bbVXA0%2B%2FqH9q4nex5ten44xrhF5U6BkklToCPA2oJWjIKyh0WPIk25niK0UbQxDiuouiLDsprUxRfBY6fQR0YOat86Q4ZZgmRXuV3yXE8akkoXx3lJGYMhTWqf2VwXpLboMK2psb8GOqUBoxvM9pb4T8dROTy2ts1UzR1HbmZvFyWUyLdvh2o2BjCY4GSXpFZbsWI7JdrkBDcBqksbXC4rJXoeIW5xLdubO5mJySREyWdvF8YIRGZas0KBOzvuhdBEeNLjTXbIlBzE4Brt19yi3ulW%2FnqOCpSXorpyzQe9rZ%2BM7p4fil2%2FM3ZGmpAMeXlK1SwU%2FMTd90tlfZbH8I%2F3FGVCdoFg1s1xr1P58A8q&X-Amz-Signature=fc4f43dd5f5e8341798167b0dbe2cc53565c692d74374245f49c2bf6fba53b44&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB4TVUNU%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCU4sBTdwz1iHuV1iZ4QwzYCAQ9HZsYD5Hyz%2BYo5nV2WwIgXy8dSIAlBq1AvLDZdzDynz8QgiAxQyGWJFfo28UQY7gqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBC2it1K%2FxIuz8Z4nyrcAym2VsasCsIn5GY0yJdLin37tQtsn0egZVYBy3mQP1vWj95K7WA0Vw37xONTKJIr8aSI7DnLEjhfHtRZOp7mXrVt%2B1smrWWodVf%2BrBZrpxxJTIlJ%2FWxJqqAecrAlu%2BgUgzMWOZOYQNLcQsv4SHO9LouQM4ZdRz7bnNpIW6mJ7vicoOR%2FxmG71XURQAs%2F7GwD7GrFr6zJHFHIhjTgvGDN8wxKDn25qYezMi8SD3CZTT3U4RT3WxCB8iPjWLN0AwwFItQ%2Fy2RijXKhivJ3K1W%2BvZBEs74T%2BlfLenuObLVc6Qa%2BqrmXNr%2BPTwJGFEGQvsa%2F%2BneNXdeIYlfB92a5OVhaTixT1ijc1p%2FJVRYlqzTyPLG28iBR6dDc72uw4lPpYp1q6waC3t%2FlHtoMVS2inz2SlYO5HVSAYeShJ3xFr3txzQ4FHeh8yrP5ukXpLvjECV2Eend%2BLmtylc1FXZ1byRuPf3QwOfh1ZieC1sJJ9GAVtrCScTpq5Odr%2FV3ef4bbVXA0%2B%2FqH9q4nex5ten44xrhF5U6BkklToCPA2oJWjIKyh0WPIk25niK0UbQxDiuouiLDsprUxRfBY6fQR0YOat86Q4ZZgmRXuV3yXE8akkoXx3lJGYMhTWqf2VwXpLboMK2psb8GOqUBoxvM9pb4T8dROTy2ts1UzR1HbmZvFyWUyLdvh2o2BjCY4GSXpFZbsWI7JdrkBDcBqksbXC4rJXoeIW5xLdubO5mJySREyWdvF8YIRGZas0KBOzvuhdBEeNLjTXbIlBzE4Brt19yi3ulW%2FnqOCpSXorpyzQe9rZ%2BM7p4fil2%2FM3ZGmpAMeXlK1SwU%2FMTd90tlfZbH8I%2F3FGVCdoFg1s1xr1P58A8q&X-Amz-Signature=d1504e0b8605c386b8ae1854af2386f642d17e8e7cae4e0667525eed377877bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB4TVUNU%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCU4sBTdwz1iHuV1iZ4QwzYCAQ9HZsYD5Hyz%2BYo5nV2WwIgXy8dSIAlBq1AvLDZdzDynz8QgiAxQyGWJFfo28UQY7gqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBC2it1K%2FxIuz8Z4nyrcAym2VsasCsIn5GY0yJdLin37tQtsn0egZVYBy3mQP1vWj95K7WA0Vw37xONTKJIr8aSI7DnLEjhfHtRZOp7mXrVt%2B1smrWWodVf%2BrBZrpxxJTIlJ%2FWxJqqAecrAlu%2BgUgzMWOZOYQNLcQsv4SHO9LouQM4ZdRz7bnNpIW6mJ7vicoOR%2FxmG71XURQAs%2F7GwD7GrFr6zJHFHIhjTgvGDN8wxKDn25qYezMi8SD3CZTT3U4RT3WxCB8iPjWLN0AwwFItQ%2Fy2RijXKhivJ3K1W%2BvZBEs74T%2BlfLenuObLVc6Qa%2BqrmXNr%2BPTwJGFEGQvsa%2F%2BneNXdeIYlfB92a5OVhaTixT1ijc1p%2FJVRYlqzTyPLG28iBR6dDc72uw4lPpYp1q6waC3t%2FlHtoMVS2inz2SlYO5HVSAYeShJ3xFr3txzQ4FHeh8yrP5ukXpLvjECV2Eend%2BLmtylc1FXZ1byRuPf3QwOfh1ZieC1sJJ9GAVtrCScTpq5Odr%2FV3ef4bbVXA0%2B%2FqH9q4nex5ten44xrhF5U6BkklToCPA2oJWjIKyh0WPIk25niK0UbQxDiuouiLDsprUxRfBY6fQR0YOat86Q4ZZgmRXuV3yXE8akkoXx3lJGYMhTWqf2VwXpLboMK2psb8GOqUBoxvM9pb4T8dROTy2ts1UzR1HbmZvFyWUyLdvh2o2BjCY4GSXpFZbsWI7JdrkBDcBqksbXC4rJXoeIW5xLdubO5mJySREyWdvF8YIRGZas0KBOzvuhdBEeNLjTXbIlBzE4Brt19yi3ulW%2FnqOCpSXorpyzQe9rZ%2BM7p4fil2%2FM3ZGmpAMeXlK1SwU%2FMTd90tlfZbH8I%2F3FGVCdoFg1s1xr1P58A8q&X-Amz-Signature=2c2716169a0f336143944c47fa2d79d05547ef59f0b9e6a3c10c62afb7199b4d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB4TVUNU%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCU4sBTdwz1iHuV1iZ4QwzYCAQ9HZsYD5Hyz%2BYo5nV2WwIgXy8dSIAlBq1AvLDZdzDynz8QgiAxQyGWJFfo28UQY7gqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBC2it1K%2FxIuz8Z4nyrcAym2VsasCsIn5GY0yJdLin37tQtsn0egZVYBy3mQP1vWj95K7WA0Vw37xONTKJIr8aSI7DnLEjhfHtRZOp7mXrVt%2B1smrWWodVf%2BrBZrpxxJTIlJ%2FWxJqqAecrAlu%2BgUgzMWOZOYQNLcQsv4SHO9LouQM4ZdRz7bnNpIW6mJ7vicoOR%2FxmG71XURQAs%2F7GwD7GrFr6zJHFHIhjTgvGDN8wxKDn25qYezMi8SD3CZTT3U4RT3WxCB8iPjWLN0AwwFItQ%2Fy2RijXKhivJ3K1W%2BvZBEs74T%2BlfLenuObLVc6Qa%2BqrmXNr%2BPTwJGFEGQvsa%2F%2BneNXdeIYlfB92a5OVhaTixT1ijc1p%2FJVRYlqzTyPLG28iBR6dDc72uw4lPpYp1q6waC3t%2FlHtoMVS2inz2SlYO5HVSAYeShJ3xFr3txzQ4FHeh8yrP5ukXpLvjECV2Eend%2BLmtylc1FXZ1byRuPf3QwOfh1ZieC1sJJ9GAVtrCScTpq5Odr%2FV3ef4bbVXA0%2B%2FqH9q4nex5ten44xrhF5U6BkklToCPA2oJWjIKyh0WPIk25niK0UbQxDiuouiLDsprUxRfBY6fQR0YOat86Q4ZZgmRXuV3yXE8akkoXx3lJGYMhTWqf2VwXpLboMK2psb8GOqUBoxvM9pb4T8dROTy2ts1UzR1HbmZvFyWUyLdvh2o2BjCY4GSXpFZbsWI7JdrkBDcBqksbXC4rJXoeIW5xLdubO5mJySREyWdvF8YIRGZas0KBOzvuhdBEeNLjTXbIlBzE4Brt19yi3ulW%2FnqOCpSXorpyzQe9rZ%2BM7p4fil2%2FM3ZGmpAMeXlK1SwU%2FMTd90tlfZbH8I%2F3FGVCdoFg1s1xr1P58A8q&X-Amz-Signature=081d38ea2c73e597ac72ec624e8c78a6c9cd0d37f8c979e447cd669a334028a3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
