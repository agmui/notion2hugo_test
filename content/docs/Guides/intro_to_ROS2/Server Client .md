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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC4Z5THN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIHVXXemHTxacf1K5K5uL7Tkdk22gbz6Rh090nZmzpXmTAiAWhJ8dchVgkiUCAZv5qktG79f1Y7MCesfRJ5oDXv10Oyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMaYCGLsCzujrjEnznKtwDggbxhyZVYK9k6VOPuxswBe243ybOi6YGBGcbICzjhDTVgHyY6GG%2BQYe%2FRG0DGSDtMI3cxyFtzqOvhHmIZqCMMa%2FIdbl1AfBAxYI%2BhHiMCTGcqlUVHhTy6T7a0Ib%2FnLmVKNS8JammPpHL%2FfKMj6DY3JPvGSianWSKJWMCfkdR6DyT2LEtezH4qFp8bgWFQa41SxkusZZ17YIVLc9S7Panyhzbx%2FogqZfHqYlfsxIBJcTTYLGNqQ9eEJ8gwvjzq8XnTK6viQ8LeVXO7VDOLVjWoJ7jdN1oavocBASSDLX8fuq6Md7eCfvxfNkYq6XH2z9zm5aTKZ64yMZLtRVlDNLBkbCsAYk8M%2FB3sazEkoivn6hux8jyrkbSLCWQTBikaLuOJr2JzF7R%2BN7%2BIRTpRDdy%2F8%2Bxvin%2FhDz%2Fw4u5eMvUmNdmb65R62G367YPeUyx8%2Fi0njtYvhkUkUs2pTiof4ST2i80jfmQNv%2F27FU0iZXJCa0C3qiW9M9%2BIBEsMK7Q6gYug1OLyOi62HfS8E9M5G%2B8Mj%2F%2FZuvvv%2BAXLeb2DQeso4DRTklqerVJToSyrjTTh5c62u5xTUtiTm9EC2A%2BTa3TbMP3Nu2wQ4lIa6qPwanZQ%2BOhbzfuz%2BHy8lbgx3wwg4eOxAY6pgFMYT0Tlctospc959FUlrpdYe%2BqImk3ohao0Nmgj%2BxmAWdJ%2B4k%2F%2BChUKnIEof9HpK3RpvmXbCF7V0%2FNwZJJ1rNHN9klH9fQgHcjAy0bW1ZOPMLB%2BsI9EUCaaURBU3J%2FCEZ5WFFg%2FIQE0mfug3P4gsmvjsqmKtO7ZU2XjfUyRdNomXTSVxeYCdKxH2xOZx5QmDQGyvRQ4A%2FvvLsQWc09UZh%2F5C%2B3fKQo&X-Amz-Signature=d6c90c39167de1c0ef2f3097ee89b144b4ce8d87b5717feb929f8dcc7fdc1622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC4Z5THN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIHVXXemHTxacf1K5K5uL7Tkdk22gbz6Rh090nZmzpXmTAiAWhJ8dchVgkiUCAZv5qktG79f1Y7MCesfRJ5oDXv10Oyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMaYCGLsCzujrjEnznKtwDggbxhyZVYK9k6VOPuxswBe243ybOi6YGBGcbICzjhDTVgHyY6GG%2BQYe%2FRG0DGSDtMI3cxyFtzqOvhHmIZqCMMa%2FIdbl1AfBAxYI%2BhHiMCTGcqlUVHhTy6T7a0Ib%2FnLmVKNS8JammPpHL%2FfKMj6DY3JPvGSianWSKJWMCfkdR6DyT2LEtezH4qFp8bgWFQa41SxkusZZ17YIVLc9S7Panyhzbx%2FogqZfHqYlfsxIBJcTTYLGNqQ9eEJ8gwvjzq8XnTK6viQ8LeVXO7VDOLVjWoJ7jdN1oavocBASSDLX8fuq6Md7eCfvxfNkYq6XH2z9zm5aTKZ64yMZLtRVlDNLBkbCsAYk8M%2FB3sazEkoivn6hux8jyrkbSLCWQTBikaLuOJr2JzF7R%2BN7%2BIRTpRDdy%2F8%2Bxvin%2FhDz%2Fw4u5eMvUmNdmb65R62G367YPeUyx8%2Fi0njtYvhkUkUs2pTiof4ST2i80jfmQNv%2F27FU0iZXJCa0C3qiW9M9%2BIBEsMK7Q6gYug1OLyOi62HfS8E9M5G%2B8Mj%2F%2FZuvvv%2BAXLeb2DQeso4DRTklqerVJToSyrjTTh5c62u5xTUtiTm9EC2A%2BTa3TbMP3Nu2wQ4lIa6qPwanZQ%2BOhbzfuz%2BHy8lbgx3wwg4eOxAY6pgFMYT0Tlctospc959FUlrpdYe%2BqImk3ohao0Nmgj%2BxmAWdJ%2B4k%2F%2BChUKnIEof9HpK3RpvmXbCF7V0%2FNwZJJ1rNHN9klH9fQgHcjAy0bW1ZOPMLB%2BsI9EUCaaURBU3J%2FCEZ5WFFg%2FIQE0mfug3P4gsmvjsqmKtO7ZU2XjfUyRdNomXTSVxeYCdKxH2xOZx5QmDQGyvRQ4A%2FvvLsQWc09UZh%2F5C%2B3fKQo&X-Amz-Signature=52782bada73373e3dec9b99bae2d9effa621390fe5a0d48ad81b18b892ee689d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC4Z5THN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIHVXXemHTxacf1K5K5uL7Tkdk22gbz6Rh090nZmzpXmTAiAWhJ8dchVgkiUCAZv5qktG79f1Y7MCesfRJ5oDXv10Oyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMaYCGLsCzujrjEnznKtwDggbxhyZVYK9k6VOPuxswBe243ybOi6YGBGcbICzjhDTVgHyY6GG%2BQYe%2FRG0DGSDtMI3cxyFtzqOvhHmIZqCMMa%2FIdbl1AfBAxYI%2BhHiMCTGcqlUVHhTy6T7a0Ib%2FnLmVKNS8JammPpHL%2FfKMj6DY3JPvGSianWSKJWMCfkdR6DyT2LEtezH4qFp8bgWFQa41SxkusZZ17YIVLc9S7Panyhzbx%2FogqZfHqYlfsxIBJcTTYLGNqQ9eEJ8gwvjzq8XnTK6viQ8LeVXO7VDOLVjWoJ7jdN1oavocBASSDLX8fuq6Md7eCfvxfNkYq6XH2z9zm5aTKZ64yMZLtRVlDNLBkbCsAYk8M%2FB3sazEkoivn6hux8jyrkbSLCWQTBikaLuOJr2JzF7R%2BN7%2BIRTpRDdy%2F8%2Bxvin%2FhDz%2Fw4u5eMvUmNdmb65R62G367YPeUyx8%2Fi0njtYvhkUkUs2pTiof4ST2i80jfmQNv%2F27FU0iZXJCa0C3qiW9M9%2BIBEsMK7Q6gYug1OLyOi62HfS8E9M5G%2B8Mj%2F%2FZuvvv%2BAXLeb2DQeso4DRTklqerVJToSyrjTTh5c62u5xTUtiTm9EC2A%2BTa3TbMP3Nu2wQ4lIa6qPwanZQ%2BOhbzfuz%2BHy8lbgx3wwg4eOxAY6pgFMYT0Tlctospc959FUlrpdYe%2BqImk3ohao0Nmgj%2BxmAWdJ%2B4k%2F%2BChUKnIEof9HpK3RpvmXbCF7V0%2FNwZJJ1rNHN9klH9fQgHcjAy0bW1ZOPMLB%2BsI9EUCaaURBU3J%2FCEZ5WFFg%2FIQE0mfug3P4gsmvjsqmKtO7ZU2XjfUyRdNomXTSVxeYCdKxH2xOZx5QmDQGyvRQ4A%2FvvLsQWc09UZh%2F5C%2B3fKQo&X-Amz-Signature=7892da6bda97c0eae52dc542512a8e1fbd4d9388a774ad8237cbb1a034e9f370&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC4Z5THN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIHVXXemHTxacf1K5K5uL7Tkdk22gbz6Rh090nZmzpXmTAiAWhJ8dchVgkiUCAZv5qktG79f1Y7MCesfRJ5oDXv10Oyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMaYCGLsCzujrjEnznKtwDggbxhyZVYK9k6VOPuxswBe243ybOi6YGBGcbICzjhDTVgHyY6GG%2BQYe%2FRG0DGSDtMI3cxyFtzqOvhHmIZqCMMa%2FIdbl1AfBAxYI%2BhHiMCTGcqlUVHhTy6T7a0Ib%2FnLmVKNS8JammPpHL%2FfKMj6DY3JPvGSianWSKJWMCfkdR6DyT2LEtezH4qFp8bgWFQa41SxkusZZ17YIVLc9S7Panyhzbx%2FogqZfHqYlfsxIBJcTTYLGNqQ9eEJ8gwvjzq8XnTK6viQ8LeVXO7VDOLVjWoJ7jdN1oavocBASSDLX8fuq6Md7eCfvxfNkYq6XH2z9zm5aTKZ64yMZLtRVlDNLBkbCsAYk8M%2FB3sazEkoivn6hux8jyrkbSLCWQTBikaLuOJr2JzF7R%2BN7%2BIRTpRDdy%2F8%2Bxvin%2FhDz%2Fw4u5eMvUmNdmb65R62G367YPeUyx8%2Fi0njtYvhkUkUs2pTiof4ST2i80jfmQNv%2F27FU0iZXJCa0C3qiW9M9%2BIBEsMK7Q6gYug1OLyOi62HfS8E9M5G%2B8Mj%2F%2FZuvvv%2BAXLeb2DQeso4DRTklqerVJToSyrjTTh5c62u5xTUtiTm9EC2A%2BTa3TbMP3Nu2wQ4lIa6qPwanZQ%2BOhbzfuz%2BHy8lbgx3wwg4eOxAY6pgFMYT0Tlctospc959FUlrpdYe%2BqImk3ohao0Nmgj%2BxmAWdJ%2B4k%2F%2BChUKnIEof9HpK3RpvmXbCF7V0%2FNwZJJ1rNHN9klH9fQgHcjAy0bW1ZOPMLB%2BsI9EUCaaURBU3J%2FCEZ5WFFg%2FIQE0mfug3P4gsmvjsqmKtO7ZU2XjfUyRdNomXTSVxeYCdKxH2xOZx5QmDQGyvRQ4A%2FvvLsQWc09UZh%2F5C%2B3fKQo&X-Amz-Signature=78ec13dd2fb9f709b8777f54cc29ef82365af1959bec16f15e23e0add062cde3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC4Z5THN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIHVXXemHTxacf1K5K5uL7Tkdk22gbz6Rh090nZmzpXmTAiAWhJ8dchVgkiUCAZv5qktG79f1Y7MCesfRJ5oDXv10Oyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMaYCGLsCzujrjEnznKtwDggbxhyZVYK9k6VOPuxswBe243ybOi6YGBGcbICzjhDTVgHyY6GG%2BQYe%2FRG0DGSDtMI3cxyFtzqOvhHmIZqCMMa%2FIdbl1AfBAxYI%2BhHiMCTGcqlUVHhTy6T7a0Ib%2FnLmVKNS8JammPpHL%2FfKMj6DY3JPvGSianWSKJWMCfkdR6DyT2LEtezH4qFp8bgWFQa41SxkusZZ17YIVLc9S7Panyhzbx%2FogqZfHqYlfsxIBJcTTYLGNqQ9eEJ8gwvjzq8XnTK6viQ8LeVXO7VDOLVjWoJ7jdN1oavocBASSDLX8fuq6Md7eCfvxfNkYq6XH2z9zm5aTKZ64yMZLtRVlDNLBkbCsAYk8M%2FB3sazEkoivn6hux8jyrkbSLCWQTBikaLuOJr2JzF7R%2BN7%2BIRTpRDdy%2F8%2Bxvin%2FhDz%2Fw4u5eMvUmNdmb65R62G367YPeUyx8%2Fi0njtYvhkUkUs2pTiof4ST2i80jfmQNv%2F27FU0iZXJCa0C3qiW9M9%2BIBEsMK7Q6gYug1OLyOi62HfS8E9M5G%2B8Mj%2F%2FZuvvv%2BAXLeb2DQeso4DRTklqerVJToSyrjTTh5c62u5xTUtiTm9EC2A%2BTa3TbMP3Nu2wQ4lIa6qPwanZQ%2BOhbzfuz%2BHy8lbgx3wwg4eOxAY6pgFMYT0Tlctospc959FUlrpdYe%2BqImk3ohao0Nmgj%2BxmAWdJ%2B4k%2F%2BChUKnIEof9HpK3RpvmXbCF7V0%2FNwZJJ1rNHN9klH9fQgHcjAy0bW1ZOPMLB%2BsI9EUCaaURBU3J%2FCEZ5WFFg%2FIQE0mfug3P4gsmvjsqmKtO7ZU2XjfUyRdNomXTSVxeYCdKxH2xOZx5QmDQGyvRQ4A%2FvvLsQWc09UZh%2F5C%2B3fKQo&X-Amz-Signature=4aa0fbef09e6ff7a61103555c678c697b41b38cc5a073de640352965f256f137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
