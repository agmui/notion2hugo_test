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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D7NRMVW%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICRYFOAfRlB1IOtLPYrHsYIltaxFvMl2FcvqtO8BdkB5AiEAvgsqwfjgmUbQUiQ78uFIP5K3QaqPi8%2F0AzMkKTitEVAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfdAKXsAm%2FEl3kCZSrcA9ctFh1f0dKrKsv4Dfoypjv6H8nXh9H1S1%2Fs18kE2z42XQlVy8csjxI4%2Fm3WCAlIwRTVDlmfm%2FJ3PipFQVCVnrIu9mpuT5fccbyI%2Fj8dbooQr6esirJ%2BR7uHyQzTQZTuLmyeneUefJAKEVtTG1QcF2efK1iDnvl5s7FEjP1Q%2FqAZXw2xxo6je%2BrX1YE%2FKqiNUFa95krBmxhLOpge8Pg9wpisrWAiT4BCEUHi5pobd7HZ6ZcQRbFaeazocpynGWisbRlGwp0FucQPB9z7%2FIgn2YUKd1t%2FQ2dabQpOIVxghpmBxiMJCy%2ByV8C8ed3fJ%2BPg347x6I5tPq%2FHnERy7wrgi5lqT0TMH%2FRUaSZVD%2FJIDWKON9v4wPGvTKZJHh7PbS5rD04w0bNMnI%2B5bT4zpZLjVQQsnNziDxvCmGpgG49uakJfD5hHf5dtnTnRTfAkqWf%2B%2BHD68A6j6eDIYa1s0JB8yqothNcwhi4s6RtFmXoKdzMpVD%2FiYMn7BlI%2FmM1SzxIpweRMs%2BN6WmqKmM3L9VF0hiq5ZVljRspHjNdUvi2DULv3SDkpFAr2x2bE1vEZLLxuzIh68MtbVOJuTUZhix2jRT2kS1XDsgbB9b%2ByEukCQkeKkh2dPHzkS3dW%2FeQ2MJW16MkGOqUBBBbc7Dxq9MekSBnyFJjOzKr29trg8U2Q9Z%2F2Smw4VAkJMnNKnuhZl%2BNWGzz1tJD48uwOyt6Pd4LyXuSsdeloP5R4MqugcovqJTBP6lkV2BIiPfUzv0X23KjGPygOhW%2BmQlAqaMHF9WHqO4bRUisJUGvdu4Gm3KMKTjcRd7VSyUi8heO91yAdoUFfujbxQfPXZL37mxuoG%2Br1gw5uOnQOT9RT8UBb&X-Amz-Signature=04bdecf465483e10b558977ebc921e5742a5d4c0a4569feb85112ab7ecaf39a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D7NRMVW%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICRYFOAfRlB1IOtLPYrHsYIltaxFvMl2FcvqtO8BdkB5AiEAvgsqwfjgmUbQUiQ78uFIP5K3QaqPi8%2F0AzMkKTitEVAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfdAKXsAm%2FEl3kCZSrcA9ctFh1f0dKrKsv4Dfoypjv6H8nXh9H1S1%2Fs18kE2z42XQlVy8csjxI4%2Fm3WCAlIwRTVDlmfm%2FJ3PipFQVCVnrIu9mpuT5fccbyI%2Fj8dbooQr6esirJ%2BR7uHyQzTQZTuLmyeneUefJAKEVtTG1QcF2efK1iDnvl5s7FEjP1Q%2FqAZXw2xxo6je%2BrX1YE%2FKqiNUFa95krBmxhLOpge8Pg9wpisrWAiT4BCEUHi5pobd7HZ6ZcQRbFaeazocpynGWisbRlGwp0FucQPB9z7%2FIgn2YUKd1t%2FQ2dabQpOIVxghpmBxiMJCy%2ByV8C8ed3fJ%2BPg347x6I5tPq%2FHnERy7wrgi5lqT0TMH%2FRUaSZVD%2FJIDWKON9v4wPGvTKZJHh7PbS5rD04w0bNMnI%2B5bT4zpZLjVQQsnNziDxvCmGpgG49uakJfD5hHf5dtnTnRTfAkqWf%2B%2BHD68A6j6eDIYa1s0JB8yqothNcwhi4s6RtFmXoKdzMpVD%2FiYMn7BlI%2FmM1SzxIpweRMs%2BN6WmqKmM3L9VF0hiq5ZVljRspHjNdUvi2DULv3SDkpFAr2x2bE1vEZLLxuzIh68MtbVOJuTUZhix2jRT2kS1XDsgbB9b%2ByEukCQkeKkh2dPHzkS3dW%2FeQ2MJW16MkGOqUBBBbc7Dxq9MekSBnyFJjOzKr29trg8U2Q9Z%2F2Smw4VAkJMnNKnuhZl%2BNWGzz1tJD48uwOyt6Pd4LyXuSsdeloP5R4MqugcovqJTBP6lkV2BIiPfUzv0X23KjGPygOhW%2BmQlAqaMHF9WHqO4bRUisJUGvdu4Gm3KMKTjcRd7VSyUi8heO91yAdoUFfujbxQfPXZL37mxuoG%2Br1gw5uOnQOT9RT8UBb&X-Amz-Signature=6875207dc8fa595dce1cd9a6481e673c1c694b520788892475f0f954821d7bed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D7NRMVW%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICRYFOAfRlB1IOtLPYrHsYIltaxFvMl2FcvqtO8BdkB5AiEAvgsqwfjgmUbQUiQ78uFIP5K3QaqPi8%2F0AzMkKTitEVAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfdAKXsAm%2FEl3kCZSrcA9ctFh1f0dKrKsv4Dfoypjv6H8nXh9H1S1%2Fs18kE2z42XQlVy8csjxI4%2Fm3WCAlIwRTVDlmfm%2FJ3PipFQVCVnrIu9mpuT5fccbyI%2Fj8dbooQr6esirJ%2BR7uHyQzTQZTuLmyeneUefJAKEVtTG1QcF2efK1iDnvl5s7FEjP1Q%2FqAZXw2xxo6je%2BrX1YE%2FKqiNUFa95krBmxhLOpge8Pg9wpisrWAiT4BCEUHi5pobd7HZ6ZcQRbFaeazocpynGWisbRlGwp0FucQPB9z7%2FIgn2YUKd1t%2FQ2dabQpOIVxghpmBxiMJCy%2ByV8C8ed3fJ%2BPg347x6I5tPq%2FHnERy7wrgi5lqT0TMH%2FRUaSZVD%2FJIDWKON9v4wPGvTKZJHh7PbS5rD04w0bNMnI%2B5bT4zpZLjVQQsnNziDxvCmGpgG49uakJfD5hHf5dtnTnRTfAkqWf%2B%2BHD68A6j6eDIYa1s0JB8yqothNcwhi4s6RtFmXoKdzMpVD%2FiYMn7BlI%2FmM1SzxIpweRMs%2BN6WmqKmM3L9VF0hiq5ZVljRspHjNdUvi2DULv3SDkpFAr2x2bE1vEZLLxuzIh68MtbVOJuTUZhix2jRT2kS1XDsgbB9b%2ByEukCQkeKkh2dPHzkS3dW%2FeQ2MJW16MkGOqUBBBbc7Dxq9MekSBnyFJjOzKr29trg8U2Q9Z%2F2Smw4VAkJMnNKnuhZl%2BNWGzz1tJD48uwOyt6Pd4LyXuSsdeloP5R4MqugcovqJTBP6lkV2BIiPfUzv0X23KjGPygOhW%2BmQlAqaMHF9WHqO4bRUisJUGvdu4Gm3KMKTjcRd7VSyUi8heO91yAdoUFfujbxQfPXZL37mxuoG%2Br1gw5uOnQOT9RT8UBb&X-Amz-Signature=64e1c4a35e2f32439a0ab487eb728866b670c874dfe42324c37a646c539df383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D7NRMVW%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICRYFOAfRlB1IOtLPYrHsYIltaxFvMl2FcvqtO8BdkB5AiEAvgsqwfjgmUbQUiQ78uFIP5K3QaqPi8%2F0AzMkKTitEVAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfdAKXsAm%2FEl3kCZSrcA9ctFh1f0dKrKsv4Dfoypjv6H8nXh9H1S1%2Fs18kE2z42XQlVy8csjxI4%2Fm3WCAlIwRTVDlmfm%2FJ3PipFQVCVnrIu9mpuT5fccbyI%2Fj8dbooQr6esirJ%2BR7uHyQzTQZTuLmyeneUefJAKEVtTG1QcF2efK1iDnvl5s7FEjP1Q%2FqAZXw2xxo6je%2BrX1YE%2FKqiNUFa95krBmxhLOpge8Pg9wpisrWAiT4BCEUHi5pobd7HZ6ZcQRbFaeazocpynGWisbRlGwp0FucQPB9z7%2FIgn2YUKd1t%2FQ2dabQpOIVxghpmBxiMJCy%2ByV8C8ed3fJ%2BPg347x6I5tPq%2FHnERy7wrgi5lqT0TMH%2FRUaSZVD%2FJIDWKON9v4wPGvTKZJHh7PbS5rD04w0bNMnI%2B5bT4zpZLjVQQsnNziDxvCmGpgG49uakJfD5hHf5dtnTnRTfAkqWf%2B%2BHD68A6j6eDIYa1s0JB8yqothNcwhi4s6RtFmXoKdzMpVD%2FiYMn7BlI%2FmM1SzxIpweRMs%2BN6WmqKmM3L9VF0hiq5ZVljRspHjNdUvi2DULv3SDkpFAr2x2bE1vEZLLxuzIh68MtbVOJuTUZhix2jRT2kS1XDsgbB9b%2ByEukCQkeKkh2dPHzkS3dW%2FeQ2MJW16MkGOqUBBBbc7Dxq9MekSBnyFJjOzKr29trg8U2Q9Z%2F2Smw4VAkJMnNKnuhZl%2BNWGzz1tJD48uwOyt6Pd4LyXuSsdeloP5R4MqugcovqJTBP6lkV2BIiPfUzv0X23KjGPygOhW%2BmQlAqaMHF9WHqO4bRUisJUGvdu4Gm3KMKTjcRd7VSyUi8heO91yAdoUFfujbxQfPXZL37mxuoG%2Br1gw5uOnQOT9RT8UBb&X-Amz-Signature=6ecc0d548cf3f5c9cd02b14a9b0249d0312334ae9b27a902d6bc3e9c9ba78afa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D7NRMVW%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICRYFOAfRlB1IOtLPYrHsYIltaxFvMl2FcvqtO8BdkB5AiEAvgsqwfjgmUbQUiQ78uFIP5K3QaqPi8%2F0AzMkKTitEVAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfdAKXsAm%2FEl3kCZSrcA9ctFh1f0dKrKsv4Dfoypjv6H8nXh9H1S1%2Fs18kE2z42XQlVy8csjxI4%2Fm3WCAlIwRTVDlmfm%2FJ3PipFQVCVnrIu9mpuT5fccbyI%2Fj8dbooQr6esirJ%2BR7uHyQzTQZTuLmyeneUefJAKEVtTG1QcF2efK1iDnvl5s7FEjP1Q%2FqAZXw2xxo6je%2BrX1YE%2FKqiNUFa95krBmxhLOpge8Pg9wpisrWAiT4BCEUHi5pobd7HZ6ZcQRbFaeazocpynGWisbRlGwp0FucQPB9z7%2FIgn2YUKd1t%2FQ2dabQpOIVxghpmBxiMJCy%2ByV8C8ed3fJ%2BPg347x6I5tPq%2FHnERy7wrgi5lqT0TMH%2FRUaSZVD%2FJIDWKON9v4wPGvTKZJHh7PbS5rD04w0bNMnI%2B5bT4zpZLjVQQsnNziDxvCmGpgG49uakJfD5hHf5dtnTnRTfAkqWf%2B%2BHD68A6j6eDIYa1s0JB8yqothNcwhi4s6RtFmXoKdzMpVD%2FiYMn7BlI%2FmM1SzxIpweRMs%2BN6WmqKmM3L9VF0hiq5ZVljRspHjNdUvi2DULv3SDkpFAr2x2bE1vEZLLxuzIh68MtbVOJuTUZhix2jRT2kS1XDsgbB9b%2ByEukCQkeKkh2dPHzkS3dW%2FeQ2MJW16MkGOqUBBBbc7Dxq9MekSBnyFJjOzKr29trg8U2Q9Z%2F2Smw4VAkJMnNKnuhZl%2BNWGzz1tJD48uwOyt6Pd4LyXuSsdeloP5R4MqugcovqJTBP6lkV2BIiPfUzv0X23KjGPygOhW%2BmQlAqaMHF9WHqO4bRUisJUGvdu4Gm3KMKTjcRd7VSyUi8heO91yAdoUFfujbxQfPXZL37mxuoG%2Br1gw5uOnQOT9RT8UBb&X-Amz-Signature=315105b7ce6e03ec82bdc3c29d153875eaa815eec0c2c2b0bb33b1f39c702b6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
