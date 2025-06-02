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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GT3G3N3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIEkZsUhKy3tMP2t%2FNH9wOB1wRlVtywelYuY0wTUFFx1mAiBUqYMIt4LwfVtPUdQoEenqxX6riwdNRwCyAIeQid1D8iqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM10WvWKTt9XSzgYO7KtwDSCR0G%2FfkfVIjdxcvlCy2xIvqQ4cVOGs2y49SZ5XsAca3PN9xGz6L5OYFvtpAUccLTP62NddhPm05N8cgVENDck%2Bv0oNcb7Kv09ugF4%2Bjhqk%2FawlPNhS32Sd5qq6MCs7%2FYWyNRNQj8JJeotkvC1rXnhRyD5bA3tp433Gwtv%2BOUvBCQvn4unfqsIu3alcLrqGAbn%2Bngo4ExOr1CgmxxGI1Yb%2B9NbNmM5RPHggPjXmmHSdvvrVAaal%2BSOsroIHzf%2F6EsAhVpTpFaQIkiIYfnA9%2BqhRrkVc8TVe7%2FZAfcK%2FW1ayYUNp6fV1DMsWmtvQmHOerP%2BGB9%2FX56g4EDMeGq6tU9NTE0P%2FJ9g%2BoTsb%2FdJJ8qXBrngvWlZ0puZ68J4tnOj%2BA1cVDeaWB0F8nCbVo432B2u1Ph7HKWdu7LhZGhFKSctX7C16s4Sjf%2FDt%2BaYQvkRSBeWvDY9YmFgPkxsS5j2%2Bhqqh9XpFzY4YzYd3wyi5n2oDrmkGI9tA2ygcP0J%2BCYPFYZHGw%2FqeCyzcvQRt0%2FmkMxUbFdKOgFJaqm5YJ%2FRDGXsRcF4ypGhYNXCqlUYStCUFWm5qY1O7wew7MmQn5LK2keSizmzGkd4xUFt8bcgAfm181DNmGxKUdg6Jd550wv9f0wQY6pgFllb5Zf%2FuiS3WrePrGVn%2FTUk7DDYsBL0PJGUeLO5WzPIknJt2HgjDcsGXz0mQftiEsAJNrN1%2BgzMRqgoXvtygdgSioF%2BKzcLlXFqrztmlk8kDIDSbGeTPOaa7zmJz%2FRm7yemlYZ0sCR86BwPOkYVTffmQrnDdZCsBT6gHHA7Lx2ux93CCva%2B9B5N56h1SPqqRh2KgRsJN5YCTS%2BFLe69oSdQewBv8R&X-Amz-Signature=ae0bfeb09eed73550bd19503a482ab2a54ab4f2d6d3acb6dc285faf47b6a94ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GT3G3N3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIEkZsUhKy3tMP2t%2FNH9wOB1wRlVtywelYuY0wTUFFx1mAiBUqYMIt4LwfVtPUdQoEenqxX6riwdNRwCyAIeQid1D8iqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM10WvWKTt9XSzgYO7KtwDSCR0G%2FfkfVIjdxcvlCy2xIvqQ4cVOGs2y49SZ5XsAca3PN9xGz6L5OYFvtpAUccLTP62NddhPm05N8cgVENDck%2Bv0oNcb7Kv09ugF4%2Bjhqk%2FawlPNhS32Sd5qq6MCs7%2FYWyNRNQj8JJeotkvC1rXnhRyD5bA3tp433Gwtv%2BOUvBCQvn4unfqsIu3alcLrqGAbn%2Bngo4ExOr1CgmxxGI1Yb%2B9NbNmM5RPHggPjXmmHSdvvrVAaal%2BSOsroIHzf%2F6EsAhVpTpFaQIkiIYfnA9%2BqhRrkVc8TVe7%2FZAfcK%2FW1ayYUNp6fV1DMsWmtvQmHOerP%2BGB9%2FX56g4EDMeGq6tU9NTE0P%2FJ9g%2BoTsb%2FdJJ8qXBrngvWlZ0puZ68J4tnOj%2BA1cVDeaWB0F8nCbVo432B2u1Ph7HKWdu7LhZGhFKSctX7C16s4Sjf%2FDt%2BaYQvkRSBeWvDY9YmFgPkxsS5j2%2Bhqqh9XpFzY4YzYd3wyi5n2oDrmkGI9tA2ygcP0J%2BCYPFYZHGw%2FqeCyzcvQRt0%2FmkMxUbFdKOgFJaqm5YJ%2FRDGXsRcF4ypGhYNXCqlUYStCUFWm5qY1O7wew7MmQn5LK2keSizmzGkd4xUFt8bcgAfm181DNmGxKUdg6Jd550wv9f0wQY6pgFllb5Zf%2FuiS3WrePrGVn%2FTUk7DDYsBL0PJGUeLO5WzPIknJt2HgjDcsGXz0mQftiEsAJNrN1%2BgzMRqgoXvtygdgSioF%2BKzcLlXFqrztmlk8kDIDSbGeTPOaa7zmJz%2FRm7yemlYZ0sCR86BwPOkYVTffmQrnDdZCsBT6gHHA7Lx2ux93CCva%2B9B5N56h1SPqqRh2KgRsJN5YCTS%2BFLe69oSdQewBv8R&X-Amz-Signature=7929a812f209db383d04f55318ac372777042bcd7786ce2c59e01ec7b4037072&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GT3G3N3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIEkZsUhKy3tMP2t%2FNH9wOB1wRlVtywelYuY0wTUFFx1mAiBUqYMIt4LwfVtPUdQoEenqxX6riwdNRwCyAIeQid1D8iqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM10WvWKTt9XSzgYO7KtwDSCR0G%2FfkfVIjdxcvlCy2xIvqQ4cVOGs2y49SZ5XsAca3PN9xGz6L5OYFvtpAUccLTP62NddhPm05N8cgVENDck%2Bv0oNcb7Kv09ugF4%2Bjhqk%2FawlPNhS32Sd5qq6MCs7%2FYWyNRNQj8JJeotkvC1rXnhRyD5bA3tp433Gwtv%2BOUvBCQvn4unfqsIu3alcLrqGAbn%2Bngo4ExOr1CgmxxGI1Yb%2B9NbNmM5RPHggPjXmmHSdvvrVAaal%2BSOsroIHzf%2F6EsAhVpTpFaQIkiIYfnA9%2BqhRrkVc8TVe7%2FZAfcK%2FW1ayYUNp6fV1DMsWmtvQmHOerP%2BGB9%2FX56g4EDMeGq6tU9NTE0P%2FJ9g%2BoTsb%2FdJJ8qXBrngvWlZ0puZ68J4tnOj%2BA1cVDeaWB0F8nCbVo432B2u1Ph7HKWdu7LhZGhFKSctX7C16s4Sjf%2FDt%2BaYQvkRSBeWvDY9YmFgPkxsS5j2%2Bhqqh9XpFzY4YzYd3wyi5n2oDrmkGI9tA2ygcP0J%2BCYPFYZHGw%2FqeCyzcvQRt0%2FmkMxUbFdKOgFJaqm5YJ%2FRDGXsRcF4ypGhYNXCqlUYStCUFWm5qY1O7wew7MmQn5LK2keSizmzGkd4xUFt8bcgAfm181DNmGxKUdg6Jd550wv9f0wQY6pgFllb5Zf%2FuiS3WrePrGVn%2FTUk7DDYsBL0PJGUeLO5WzPIknJt2HgjDcsGXz0mQftiEsAJNrN1%2BgzMRqgoXvtygdgSioF%2BKzcLlXFqrztmlk8kDIDSbGeTPOaa7zmJz%2FRm7yemlYZ0sCR86BwPOkYVTffmQrnDdZCsBT6gHHA7Lx2ux93CCva%2B9B5N56h1SPqqRh2KgRsJN5YCTS%2BFLe69oSdQewBv8R&X-Amz-Signature=77b728acff7ce798c739aa49afef2897ff5692536d88eba459dd31a62a72016e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GT3G3N3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIEkZsUhKy3tMP2t%2FNH9wOB1wRlVtywelYuY0wTUFFx1mAiBUqYMIt4LwfVtPUdQoEenqxX6riwdNRwCyAIeQid1D8iqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM10WvWKTt9XSzgYO7KtwDSCR0G%2FfkfVIjdxcvlCy2xIvqQ4cVOGs2y49SZ5XsAca3PN9xGz6L5OYFvtpAUccLTP62NddhPm05N8cgVENDck%2Bv0oNcb7Kv09ugF4%2Bjhqk%2FawlPNhS32Sd5qq6MCs7%2FYWyNRNQj8JJeotkvC1rXnhRyD5bA3tp433Gwtv%2BOUvBCQvn4unfqsIu3alcLrqGAbn%2Bngo4ExOr1CgmxxGI1Yb%2B9NbNmM5RPHggPjXmmHSdvvrVAaal%2BSOsroIHzf%2F6EsAhVpTpFaQIkiIYfnA9%2BqhRrkVc8TVe7%2FZAfcK%2FW1ayYUNp6fV1DMsWmtvQmHOerP%2BGB9%2FX56g4EDMeGq6tU9NTE0P%2FJ9g%2BoTsb%2FdJJ8qXBrngvWlZ0puZ68J4tnOj%2BA1cVDeaWB0F8nCbVo432B2u1Ph7HKWdu7LhZGhFKSctX7C16s4Sjf%2FDt%2BaYQvkRSBeWvDY9YmFgPkxsS5j2%2Bhqqh9XpFzY4YzYd3wyi5n2oDrmkGI9tA2ygcP0J%2BCYPFYZHGw%2FqeCyzcvQRt0%2FmkMxUbFdKOgFJaqm5YJ%2FRDGXsRcF4ypGhYNXCqlUYStCUFWm5qY1O7wew7MmQn5LK2keSizmzGkd4xUFt8bcgAfm181DNmGxKUdg6Jd550wv9f0wQY6pgFllb5Zf%2FuiS3WrePrGVn%2FTUk7DDYsBL0PJGUeLO5WzPIknJt2HgjDcsGXz0mQftiEsAJNrN1%2BgzMRqgoXvtygdgSioF%2BKzcLlXFqrztmlk8kDIDSbGeTPOaa7zmJz%2FRm7yemlYZ0sCR86BwPOkYVTffmQrnDdZCsBT6gHHA7Lx2ux93CCva%2B9B5N56h1SPqqRh2KgRsJN5YCTS%2BFLe69oSdQewBv8R&X-Amz-Signature=fd7fa82dffb7f3a94f746fbf7635d02f89f4fb933efc756ee8f75cfbcf22e1f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GT3G3N3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIEkZsUhKy3tMP2t%2FNH9wOB1wRlVtywelYuY0wTUFFx1mAiBUqYMIt4LwfVtPUdQoEenqxX6riwdNRwCyAIeQid1D8iqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM10WvWKTt9XSzgYO7KtwDSCR0G%2FfkfVIjdxcvlCy2xIvqQ4cVOGs2y49SZ5XsAca3PN9xGz6L5OYFvtpAUccLTP62NddhPm05N8cgVENDck%2Bv0oNcb7Kv09ugF4%2Bjhqk%2FawlPNhS32Sd5qq6MCs7%2FYWyNRNQj8JJeotkvC1rXnhRyD5bA3tp433Gwtv%2BOUvBCQvn4unfqsIu3alcLrqGAbn%2Bngo4ExOr1CgmxxGI1Yb%2B9NbNmM5RPHggPjXmmHSdvvrVAaal%2BSOsroIHzf%2F6EsAhVpTpFaQIkiIYfnA9%2BqhRrkVc8TVe7%2FZAfcK%2FW1ayYUNp6fV1DMsWmtvQmHOerP%2BGB9%2FX56g4EDMeGq6tU9NTE0P%2FJ9g%2BoTsb%2FdJJ8qXBrngvWlZ0puZ68J4tnOj%2BA1cVDeaWB0F8nCbVo432B2u1Ph7HKWdu7LhZGhFKSctX7C16s4Sjf%2FDt%2BaYQvkRSBeWvDY9YmFgPkxsS5j2%2Bhqqh9XpFzY4YzYd3wyi5n2oDrmkGI9tA2ygcP0J%2BCYPFYZHGw%2FqeCyzcvQRt0%2FmkMxUbFdKOgFJaqm5YJ%2FRDGXsRcF4ypGhYNXCqlUYStCUFWm5qY1O7wew7MmQn5LK2keSizmzGkd4xUFt8bcgAfm181DNmGxKUdg6Jd550wv9f0wQY6pgFllb5Zf%2FuiS3WrePrGVn%2FTUk7DDYsBL0PJGUeLO5WzPIknJt2HgjDcsGXz0mQftiEsAJNrN1%2BgzMRqgoXvtygdgSioF%2BKzcLlXFqrztmlk8kDIDSbGeTPOaa7zmJz%2FRm7yemlYZ0sCR86BwPOkYVTffmQrnDdZCsBT6gHHA7Lx2ux93CCva%2B9B5N56h1SPqqRh2KgRsJN5YCTS%2BFLe69oSdQewBv8R&X-Amz-Signature=6017381a68afa99d38aad1f17e2319141b73f6d6a8a17393eeabcae8927ef837&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
