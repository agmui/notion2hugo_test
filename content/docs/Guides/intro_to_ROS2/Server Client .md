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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJ6J5TP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDWvtK%2BeIU9SZt8GFl8aOdNTjtnNv6ckOGRf7Vy%2BaKHbQIhAIZzKr1FClWzwvMABBs%2BncEH7V1Hqngis2gWsPne21jHKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Bw1%2FD8lFI86%2B1igcq3AOysh4%2Fe6FhyfkPZaUfb1YGGIBiiG1FPsaS507Ui%2FN%2BcyvWQZ0tQMfJd8D3nfHeaLxCaWfgtmHeR80qEYSoyD4m8Q5IbAhVCOJb1nu4MhNWTDD1Ry1bOJTI90xUgdsWw%2F4IYAVwlbqHoF3aBXa8zhbYZsBLqbXmrV6uSYDeokqgXlHr20csno7%2FGJ6ObPYXWvjAwx7tidHUXPCLSAL84icsukczGoaJJBD%2BoahNv5TFvu9ILhB7RwTmYQCEBnv%2BvB59ITb5Jtpg7VqldgS9am5ec4h5%2FHrjs%2FXhlbCXP88ThWu%2FL6dRcpb345A2%2Byck1jJv9EgRRF5A2AL%2BIyFCKnhAYhi33X875NdaYok9yenXj6VeUuSLDkKcTUmpC8fbHp1jSu1JfHKrUON%2FFY4auphlPT3cROGM36tfA2eNVuErJfzi0sxxQUIDMV2pfKOEDkyqjLuJ3qFt4UhycbFfZsGNDfx5t%2Bc5eK%2BXSvjEUU7tCoiFYoCflxncPCjhpCyPw%2F9LBW%2BEYEfKtknW96A14w%2BUkMRy8%2Ficds5ujjYEQGjbYTvxji%2Fv1ZydPLlG%2BNh3LedX32f4Kb7hMaI7PF3jAFaIKozRdiEQR86z45sxDhK8gUx%2BrofLxmc8qm%2FYwTDG%2B7e%2FBjqkAbiJciRZL6jQixqbdaTMgoMjT%2BaL3EjhH9B6s8X%2Fiwyb8yEiGVZNbvLx8vDULEugtjdddDbPAnXogUX%2Fqd9QB4dK4con5PRBzq7UF8J2OSlCEjQdjSxZg1Pt8RCzv2NgQsWTwHj7zKLKX1Vv6lKj1rDpVUUG97SP8GtzTSuKYy2gXrxNy8z8m9s1P25TDzWO1hKncqc5LSDRKIM58XsWSFUGIjAB&X-Amz-Signature=cce02c0fd0e15824d0002fb987b94de01d3106d661957e5492c9593d3b2480e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJ6J5TP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDWvtK%2BeIU9SZt8GFl8aOdNTjtnNv6ckOGRf7Vy%2BaKHbQIhAIZzKr1FClWzwvMABBs%2BncEH7V1Hqngis2gWsPne21jHKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Bw1%2FD8lFI86%2B1igcq3AOysh4%2Fe6FhyfkPZaUfb1YGGIBiiG1FPsaS507Ui%2FN%2BcyvWQZ0tQMfJd8D3nfHeaLxCaWfgtmHeR80qEYSoyD4m8Q5IbAhVCOJb1nu4MhNWTDD1Ry1bOJTI90xUgdsWw%2F4IYAVwlbqHoF3aBXa8zhbYZsBLqbXmrV6uSYDeokqgXlHr20csno7%2FGJ6ObPYXWvjAwx7tidHUXPCLSAL84icsukczGoaJJBD%2BoahNv5TFvu9ILhB7RwTmYQCEBnv%2BvB59ITb5Jtpg7VqldgS9am5ec4h5%2FHrjs%2FXhlbCXP88ThWu%2FL6dRcpb345A2%2Byck1jJv9EgRRF5A2AL%2BIyFCKnhAYhi33X875NdaYok9yenXj6VeUuSLDkKcTUmpC8fbHp1jSu1JfHKrUON%2FFY4auphlPT3cROGM36tfA2eNVuErJfzi0sxxQUIDMV2pfKOEDkyqjLuJ3qFt4UhycbFfZsGNDfx5t%2Bc5eK%2BXSvjEUU7tCoiFYoCflxncPCjhpCyPw%2F9LBW%2BEYEfKtknW96A14w%2BUkMRy8%2Ficds5ujjYEQGjbYTvxji%2Fv1ZydPLlG%2BNh3LedX32f4Kb7hMaI7PF3jAFaIKozRdiEQR86z45sxDhK8gUx%2BrofLxmc8qm%2FYwTDG%2B7e%2FBjqkAbiJciRZL6jQixqbdaTMgoMjT%2BaL3EjhH9B6s8X%2Fiwyb8yEiGVZNbvLx8vDULEugtjdddDbPAnXogUX%2Fqd9QB4dK4con5PRBzq7UF8J2OSlCEjQdjSxZg1Pt8RCzv2NgQsWTwHj7zKLKX1Vv6lKj1rDpVUUG97SP8GtzTSuKYy2gXrxNy8z8m9s1P25TDzWO1hKncqc5LSDRKIM58XsWSFUGIjAB&X-Amz-Signature=f7e2143dbede5e6c77ae8ec03d15dd73f1ba1e21c53cf780b6752763d9f2ad2f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJ6J5TP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDWvtK%2BeIU9SZt8GFl8aOdNTjtnNv6ckOGRf7Vy%2BaKHbQIhAIZzKr1FClWzwvMABBs%2BncEH7V1Hqngis2gWsPne21jHKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Bw1%2FD8lFI86%2B1igcq3AOysh4%2Fe6FhyfkPZaUfb1YGGIBiiG1FPsaS507Ui%2FN%2BcyvWQZ0tQMfJd8D3nfHeaLxCaWfgtmHeR80qEYSoyD4m8Q5IbAhVCOJb1nu4MhNWTDD1Ry1bOJTI90xUgdsWw%2F4IYAVwlbqHoF3aBXa8zhbYZsBLqbXmrV6uSYDeokqgXlHr20csno7%2FGJ6ObPYXWvjAwx7tidHUXPCLSAL84icsukczGoaJJBD%2BoahNv5TFvu9ILhB7RwTmYQCEBnv%2BvB59ITb5Jtpg7VqldgS9am5ec4h5%2FHrjs%2FXhlbCXP88ThWu%2FL6dRcpb345A2%2Byck1jJv9EgRRF5A2AL%2BIyFCKnhAYhi33X875NdaYok9yenXj6VeUuSLDkKcTUmpC8fbHp1jSu1JfHKrUON%2FFY4auphlPT3cROGM36tfA2eNVuErJfzi0sxxQUIDMV2pfKOEDkyqjLuJ3qFt4UhycbFfZsGNDfx5t%2Bc5eK%2BXSvjEUU7tCoiFYoCflxncPCjhpCyPw%2F9LBW%2BEYEfKtknW96A14w%2BUkMRy8%2Ficds5ujjYEQGjbYTvxji%2Fv1ZydPLlG%2BNh3LedX32f4Kb7hMaI7PF3jAFaIKozRdiEQR86z45sxDhK8gUx%2BrofLxmc8qm%2FYwTDG%2B7e%2FBjqkAbiJciRZL6jQixqbdaTMgoMjT%2BaL3EjhH9B6s8X%2Fiwyb8yEiGVZNbvLx8vDULEugtjdddDbPAnXogUX%2Fqd9QB4dK4con5PRBzq7UF8J2OSlCEjQdjSxZg1Pt8RCzv2NgQsWTwHj7zKLKX1Vv6lKj1rDpVUUG97SP8GtzTSuKYy2gXrxNy8z8m9s1P25TDzWO1hKncqc5LSDRKIM58XsWSFUGIjAB&X-Amz-Signature=80e80186e7d7f4822f71c63ca62832b74f2e85e392205f3a3f6a728edd209a3f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJ6J5TP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDWvtK%2BeIU9SZt8GFl8aOdNTjtnNv6ckOGRf7Vy%2BaKHbQIhAIZzKr1FClWzwvMABBs%2BncEH7V1Hqngis2gWsPne21jHKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Bw1%2FD8lFI86%2B1igcq3AOysh4%2Fe6FhyfkPZaUfb1YGGIBiiG1FPsaS507Ui%2FN%2BcyvWQZ0tQMfJd8D3nfHeaLxCaWfgtmHeR80qEYSoyD4m8Q5IbAhVCOJb1nu4MhNWTDD1Ry1bOJTI90xUgdsWw%2F4IYAVwlbqHoF3aBXa8zhbYZsBLqbXmrV6uSYDeokqgXlHr20csno7%2FGJ6ObPYXWvjAwx7tidHUXPCLSAL84icsukczGoaJJBD%2BoahNv5TFvu9ILhB7RwTmYQCEBnv%2BvB59ITb5Jtpg7VqldgS9am5ec4h5%2FHrjs%2FXhlbCXP88ThWu%2FL6dRcpb345A2%2Byck1jJv9EgRRF5A2AL%2BIyFCKnhAYhi33X875NdaYok9yenXj6VeUuSLDkKcTUmpC8fbHp1jSu1JfHKrUON%2FFY4auphlPT3cROGM36tfA2eNVuErJfzi0sxxQUIDMV2pfKOEDkyqjLuJ3qFt4UhycbFfZsGNDfx5t%2Bc5eK%2BXSvjEUU7tCoiFYoCflxncPCjhpCyPw%2F9LBW%2BEYEfKtknW96A14w%2BUkMRy8%2Ficds5ujjYEQGjbYTvxji%2Fv1ZydPLlG%2BNh3LedX32f4Kb7hMaI7PF3jAFaIKozRdiEQR86z45sxDhK8gUx%2BrofLxmc8qm%2FYwTDG%2B7e%2FBjqkAbiJciRZL6jQixqbdaTMgoMjT%2BaL3EjhH9B6s8X%2Fiwyb8yEiGVZNbvLx8vDULEugtjdddDbPAnXogUX%2Fqd9QB4dK4con5PRBzq7UF8J2OSlCEjQdjSxZg1Pt8RCzv2NgQsWTwHj7zKLKX1Vv6lKj1rDpVUUG97SP8GtzTSuKYy2gXrxNy8z8m9s1P25TDzWO1hKncqc5LSDRKIM58XsWSFUGIjAB&X-Amz-Signature=b246191f16414731b38f4d01b0e13c4fbd4f89828fdc2e71166d910a005bf6b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJ6J5TP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDWvtK%2BeIU9SZt8GFl8aOdNTjtnNv6ckOGRf7Vy%2BaKHbQIhAIZzKr1FClWzwvMABBs%2BncEH7V1Hqngis2gWsPne21jHKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Bw1%2FD8lFI86%2B1igcq3AOysh4%2Fe6FhyfkPZaUfb1YGGIBiiG1FPsaS507Ui%2FN%2BcyvWQZ0tQMfJd8D3nfHeaLxCaWfgtmHeR80qEYSoyD4m8Q5IbAhVCOJb1nu4MhNWTDD1Ry1bOJTI90xUgdsWw%2F4IYAVwlbqHoF3aBXa8zhbYZsBLqbXmrV6uSYDeokqgXlHr20csno7%2FGJ6ObPYXWvjAwx7tidHUXPCLSAL84icsukczGoaJJBD%2BoahNv5TFvu9ILhB7RwTmYQCEBnv%2BvB59ITb5Jtpg7VqldgS9am5ec4h5%2FHrjs%2FXhlbCXP88ThWu%2FL6dRcpb345A2%2Byck1jJv9EgRRF5A2AL%2BIyFCKnhAYhi33X875NdaYok9yenXj6VeUuSLDkKcTUmpC8fbHp1jSu1JfHKrUON%2FFY4auphlPT3cROGM36tfA2eNVuErJfzi0sxxQUIDMV2pfKOEDkyqjLuJ3qFt4UhycbFfZsGNDfx5t%2Bc5eK%2BXSvjEUU7tCoiFYoCflxncPCjhpCyPw%2F9LBW%2BEYEfKtknW96A14w%2BUkMRy8%2Ficds5ujjYEQGjbYTvxji%2Fv1ZydPLlG%2BNh3LedX32f4Kb7hMaI7PF3jAFaIKozRdiEQR86z45sxDhK8gUx%2BrofLxmc8qm%2FYwTDG%2B7e%2FBjqkAbiJciRZL6jQixqbdaTMgoMjT%2BaL3EjhH9B6s8X%2Fiwyb8yEiGVZNbvLx8vDULEugtjdddDbPAnXogUX%2Fqd9QB4dK4con5PRBzq7UF8J2OSlCEjQdjSxZg1Pt8RCzv2NgQsWTwHj7zKLKX1Vv6lKj1rDpVUUG97SP8GtzTSuKYy2gXrxNy8z8m9s1P25TDzWO1hKncqc5LSDRKIM58XsWSFUGIjAB&X-Amz-Signature=7e89af204b9461b3b386c17e08c07a0ef7aa47691dfad4b3e5608ccb508d7335&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
