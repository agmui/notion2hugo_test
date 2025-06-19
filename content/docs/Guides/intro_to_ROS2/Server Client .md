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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6AXGIMC%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbTzVe0UaC6iL6UKPSb8eF5BO3ytyM55ZeOrHQOUFp8AiAp3fsQ86xlztKP02tEX20%2FR9osAiF9xThNJuyoJCCeNSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0F0KiMkblm4Wvy3OKtwDq2NLXcwa9q6dg3TKcWXpPv%2BkjDdKcRo4Q50y52XpDPGf%2BXzKTluo76%2BGU2%2F0xb7d4OMuOcmUvBJ90%2B3AiMhchun2kJnU%2FHaGBwnHni8qzEFHYW3v9RjPbT9abfPFQSr%2FEcm35Lgk%2BjilVcwfihrK3nODWFCJt4clpPJXxXnmK35PRujgzpZUT0o2RdN8jxGdh3SPCs8FBtGNScUb3KCfZ7P0Dw7CsX%2BVU1%2F%2FWzjcZq%2F2w0jsVimmp2JiRvV14dxGE6OLvO6OJbHAWGCfPost9e9OolOwRxRdu7FL8D6FxW5TlFe%2F03Qm9d0WQBu7BsTBDZiJxXmVQiVSyR%2BgJroMh1YHTEzRqjz1B%2FjwEf2HGUmn%2B1bzui9rtinsSKeTZdz%2Bm68aur1KHGwv5IURa18Udq2unOn58ymhmLnVRW7lzrSuPe%2BjeTRUK7UVAQMLW1LRRsSpxSjuhxm4Is6r%2BjEySVnugPoIVTP%2FGnLCLGVBcE2eiMiHkHp0QR%2FhwuNNMF29dteMaJBDL9l0EswIfom2gpC4O82Lj4jFQdP5A5ft6BYEnpsgZEnO34hVpdRQ%2F9eGOeji76VyRP2%2FWR0girp3SFGKysGsvr9ZmsHjwPHjtz%2Fi2QBEgFxQeDBnEFkwvoTOwgY6pgH0%2FV6CnSmrHR%2B52BhigtKwWbEpHPmKUIzZG7n925g91VEIzHNi1Bj7sUgrG6UbbH1jCEXo0%2FzdYZ8Y1jsMNfWTSlYCU1Y4TbvJUU4%2FBkkz8vmHF%2BmMqYrwpXLx8oj1AXkAkPBP4NmAzmMO8MU7hGi1dpujmbc5VYs64fKoiM3UkQFJC3E4fj1ZzAz2ZWE8GzdrLamUUscDLZNHQidNVJ69%2FE2qlTUN&X-Amz-Signature=de4ebeb8d09224c59bed4c6077a52564f95dca7cc6fc5bd99deb271cb66dadad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6AXGIMC%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbTzVe0UaC6iL6UKPSb8eF5BO3ytyM55ZeOrHQOUFp8AiAp3fsQ86xlztKP02tEX20%2FR9osAiF9xThNJuyoJCCeNSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0F0KiMkblm4Wvy3OKtwDq2NLXcwa9q6dg3TKcWXpPv%2BkjDdKcRo4Q50y52XpDPGf%2BXzKTluo76%2BGU2%2F0xb7d4OMuOcmUvBJ90%2B3AiMhchun2kJnU%2FHaGBwnHni8qzEFHYW3v9RjPbT9abfPFQSr%2FEcm35Lgk%2BjilVcwfihrK3nODWFCJt4clpPJXxXnmK35PRujgzpZUT0o2RdN8jxGdh3SPCs8FBtGNScUb3KCfZ7P0Dw7CsX%2BVU1%2F%2FWzjcZq%2F2w0jsVimmp2JiRvV14dxGE6OLvO6OJbHAWGCfPost9e9OolOwRxRdu7FL8D6FxW5TlFe%2F03Qm9d0WQBu7BsTBDZiJxXmVQiVSyR%2BgJroMh1YHTEzRqjz1B%2FjwEf2HGUmn%2B1bzui9rtinsSKeTZdz%2Bm68aur1KHGwv5IURa18Udq2unOn58ymhmLnVRW7lzrSuPe%2BjeTRUK7UVAQMLW1LRRsSpxSjuhxm4Is6r%2BjEySVnugPoIVTP%2FGnLCLGVBcE2eiMiHkHp0QR%2FhwuNNMF29dteMaJBDL9l0EswIfom2gpC4O82Lj4jFQdP5A5ft6BYEnpsgZEnO34hVpdRQ%2F9eGOeji76VyRP2%2FWR0girp3SFGKysGsvr9ZmsHjwPHjtz%2Fi2QBEgFxQeDBnEFkwvoTOwgY6pgH0%2FV6CnSmrHR%2B52BhigtKwWbEpHPmKUIzZG7n925g91VEIzHNi1Bj7sUgrG6UbbH1jCEXo0%2FzdYZ8Y1jsMNfWTSlYCU1Y4TbvJUU4%2FBkkz8vmHF%2BmMqYrwpXLx8oj1AXkAkPBP4NmAzmMO8MU7hGi1dpujmbc5VYs64fKoiM3UkQFJC3E4fj1ZzAz2ZWE8GzdrLamUUscDLZNHQidNVJ69%2FE2qlTUN&X-Amz-Signature=bdbee3a36260f41a926e34516ba0427744efd70ddfaf440fc82da7938f0997d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6AXGIMC%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbTzVe0UaC6iL6UKPSb8eF5BO3ytyM55ZeOrHQOUFp8AiAp3fsQ86xlztKP02tEX20%2FR9osAiF9xThNJuyoJCCeNSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0F0KiMkblm4Wvy3OKtwDq2NLXcwa9q6dg3TKcWXpPv%2BkjDdKcRo4Q50y52XpDPGf%2BXzKTluo76%2BGU2%2F0xb7d4OMuOcmUvBJ90%2B3AiMhchun2kJnU%2FHaGBwnHni8qzEFHYW3v9RjPbT9abfPFQSr%2FEcm35Lgk%2BjilVcwfihrK3nODWFCJt4clpPJXxXnmK35PRujgzpZUT0o2RdN8jxGdh3SPCs8FBtGNScUb3KCfZ7P0Dw7CsX%2BVU1%2F%2FWzjcZq%2F2w0jsVimmp2JiRvV14dxGE6OLvO6OJbHAWGCfPost9e9OolOwRxRdu7FL8D6FxW5TlFe%2F03Qm9d0WQBu7BsTBDZiJxXmVQiVSyR%2BgJroMh1YHTEzRqjz1B%2FjwEf2HGUmn%2B1bzui9rtinsSKeTZdz%2Bm68aur1KHGwv5IURa18Udq2unOn58ymhmLnVRW7lzrSuPe%2BjeTRUK7UVAQMLW1LRRsSpxSjuhxm4Is6r%2BjEySVnugPoIVTP%2FGnLCLGVBcE2eiMiHkHp0QR%2FhwuNNMF29dteMaJBDL9l0EswIfom2gpC4O82Lj4jFQdP5A5ft6BYEnpsgZEnO34hVpdRQ%2F9eGOeji76VyRP2%2FWR0girp3SFGKysGsvr9ZmsHjwPHjtz%2Fi2QBEgFxQeDBnEFkwvoTOwgY6pgH0%2FV6CnSmrHR%2B52BhigtKwWbEpHPmKUIzZG7n925g91VEIzHNi1Bj7sUgrG6UbbH1jCEXo0%2FzdYZ8Y1jsMNfWTSlYCU1Y4TbvJUU4%2FBkkz8vmHF%2BmMqYrwpXLx8oj1AXkAkPBP4NmAzmMO8MU7hGi1dpujmbc5VYs64fKoiM3UkQFJC3E4fj1ZzAz2ZWE8GzdrLamUUscDLZNHQidNVJ69%2FE2qlTUN&X-Amz-Signature=e2a8d972831161860f49892e56ca1d1538b3b31c42f258dfb8f0c42603227d62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6AXGIMC%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbTzVe0UaC6iL6UKPSb8eF5BO3ytyM55ZeOrHQOUFp8AiAp3fsQ86xlztKP02tEX20%2FR9osAiF9xThNJuyoJCCeNSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0F0KiMkblm4Wvy3OKtwDq2NLXcwa9q6dg3TKcWXpPv%2BkjDdKcRo4Q50y52XpDPGf%2BXzKTluo76%2BGU2%2F0xb7d4OMuOcmUvBJ90%2B3AiMhchun2kJnU%2FHaGBwnHni8qzEFHYW3v9RjPbT9abfPFQSr%2FEcm35Lgk%2BjilVcwfihrK3nODWFCJt4clpPJXxXnmK35PRujgzpZUT0o2RdN8jxGdh3SPCs8FBtGNScUb3KCfZ7P0Dw7CsX%2BVU1%2F%2FWzjcZq%2F2w0jsVimmp2JiRvV14dxGE6OLvO6OJbHAWGCfPost9e9OolOwRxRdu7FL8D6FxW5TlFe%2F03Qm9d0WQBu7BsTBDZiJxXmVQiVSyR%2BgJroMh1YHTEzRqjz1B%2FjwEf2HGUmn%2B1bzui9rtinsSKeTZdz%2Bm68aur1KHGwv5IURa18Udq2unOn58ymhmLnVRW7lzrSuPe%2BjeTRUK7UVAQMLW1LRRsSpxSjuhxm4Is6r%2BjEySVnugPoIVTP%2FGnLCLGVBcE2eiMiHkHp0QR%2FhwuNNMF29dteMaJBDL9l0EswIfom2gpC4O82Lj4jFQdP5A5ft6BYEnpsgZEnO34hVpdRQ%2F9eGOeji76VyRP2%2FWR0girp3SFGKysGsvr9ZmsHjwPHjtz%2Fi2QBEgFxQeDBnEFkwvoTOwgY6pgH0%2FV6CnSmrHR%2B52BhigtKwWbEpHPmKUIzZG7n925g91VEIzHNi1Bj7sUgrG6UbbH1jCEXo0%2FzdYZ8Y1jsMNfWTSlYCU1Y4TbvJUU4%2FBkkz8vmHF%2BmMqYrwpXLx8oj1AXkAkPBP4NmAzmMO8MU7hGi1dpujmbc5VYs64fKoiM3UkQFJC3E4fj1ZzAz2ZWE8GzdrLamUUscDLZNHQidNVJ69%2FE2qlTUN&X-Amz-Signature=8ac02ef7012a7af36a1ab1b91e99b842b30f3face9ad7ff911914d590b3e926a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6AXGIMC%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbTzVe0UaC6iL6UKPSb8eF5BO3ytyM55ZeOrHQOUFp8AiAp3fsQ86xlztKP02tEX20%2FR9osAiF9xThNJuyoJCCeNSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0F0KiMkblm4Wvy3OKtwDq2NLXcwa9q6dg3TKcWXpPv%2BkjDdKcRo4Q50y52XpDPGf%2BXzKTluo76%2BGU2%2F0xb7d4OMuOcmUvBJ90%2B3AiMhchun2kJnU%2FHaGBwnHni8qzEFHYW3v9RjPbT9abfPFQSr%2FEcm35Lgk%2BjilVcwfihrK3nODWFCJt4clpPJXxXnmK35PRujgzpZUT0o2RdN8jxGdh3SPCs8FBtGNScUb3KCfZ7P0Dw7CsX%2BVU1%2F%2FWzjcZq%2F2w0jsVimmp2JiRvV14dxGE6OLvO6OJbHAWGCfPost9e9OolOwRxRdu7FL8D6FxW5TlFe%2F03Qm9d0WQBu7BsTBDZiJxXmVQiVSyR%2BgJroMh1YHTEzRqjz1B%2FjwEf2HGUmn%2B1bzui9rtinsSKeTZdz%2Bm68aur1KHGwv5IURa18Udq2unOn58ymhmLnVRW7lzrSuPe%2BjeTRUK7UVAQMLW1LRRsSpxSjuhxm4Is6r%2BjEySVnugPoIVTP%2FGnLCLGVBcE2eiMiHkHp0QR%2FhwuNNMF29dteMaJBDL9l0EswIfom2gpC4O82Lj4jFQdP5A5ft6BYEnpsgZEnO34hVpdRQ%2F9eGOeji76VyRP2%2FWR0girp3SFGKysGsvr9ZmsHjwPHjtz%2Fi2QBEgFxQeDBnEFkwvoTOwgY6pgH0%2FV6CnSmrHR%2B52BhigtKwWbEpHPmKUIzZG7n925g91VEIzHNi1Bj7sUgrG6UbbH1jCEXo0%2FzdYZ8Y1jsMNfWTSlYCU1Y4TbvJUU4%2FBkkz8vmHF%2BmMqYrwpXLx8oj1AXkAkPBP4NmAzmMO8MU7hGi1dpujmbc5VYs64fKoiM3UkQFJC3E4fj1ZzAz2ZWE8GzdrLamUUscDLZNHQidNVJ69%2FE2qlTUN&X-Amz-Signature=f98980baac0889c9afb2f10f78a7dc6b4576a806cf923c90392b976cb6b2ae4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
