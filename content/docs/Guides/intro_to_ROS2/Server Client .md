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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BABPLQ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoAm6%2F%2BGmh1v22d9PPnB6RdZ3PS5DK0DFHVffROk0%2FTAIgQYIqo69JFcb%2BzHyIXlgJMcXOtp%2FbGAE91HS4xcUGB0YqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxnoiYwMIELFuyulSrcA37oEJWY7X4Ol9uhClC0h3FO8UbXOismcbslMQSMEjc7Sw%2BGC%2Bqt8JkdS0qOy2KYOZt8Nm5w0fQnGRcGqR0w7Hi%2BZUP3YSOKZmDuMhRBgpXqNknJkKJ8L%2B4ETy2NbE%2BSJwxdN2E1J%2BDjUbMTe5WkEG0FKGTIGChpvV9SylbPTdk8dsNCwY3xF4BuEuZtyqI8DeWj29dxcSWVPCQR%2Fk7slqgpYsAdSyG98%2Fb%2BCTsrlwSVxOZTPg95JAQf6TLe3wdqe9kk4dPUD5YrmxBZNbdcERx1RASdvQYmsOG%2Bts7X9E4XOrQ%2Fkrvh%2FzA8N3TSmJuyaarXO9pB4g0MP3M7yh8UNbpCCtU%2BgkrhZa2R07WT6muPFXAKYTDENrGsnVcElMHhrTTDncjDLC%2ByLIlowKbEGYmmE6supbpn3RlYXg7Yz%2BwlEf7qT%2FC3Yv8t2G%2Bh2R5amWlFSG4JM2CQLj6wNrnXhDv5kMHw7LuwjUYNwS%2BI81BMNcyrhKtQIo2Yoi01Xn%2Fv9%2Fm4%2Bq1KSkEIvGOCFUH1zKus5rfegg8XBEPertsrL1Re7s03Ta7mOf8VvUy4ax%2FyS97ngTU%2FNaW5TkdhrZnqphwOHPEw8ZzfL6k8rt1u8INxAi8HwJZNcmnssvVOMPqjm74GOqUB95N6i4Gs1hiWRp6G56nNjnDULf4RtkzOsG%2B800n%2F1IpZiZY0qxQdXGmWZjMW%2BZYkENMcYgCfunOEgKHbV8S%2B1VpCvXx3yg0tKpqeAlR4nhxl7TzP6k8vAlcSXfGgz2HWUDSjb7NmkzxefTfEGmQbTbf6wDFdWI5BXurhhZ5ntpN8H5NUfjDQjJlzD4MUr5IDtJk5%2FrKSCcMQ6NwCfRlbsd%2FHq5QE&X-Amz-Signature=0be69cf0160018bbc9325f08c7a5fb23dcf4305304072576b0aeec25de5ffe87&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BABPLQ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoAm6%2F%2BGmh1v22d9PPnB6RdZ3PS5DK0DFHVffROk0%2FTAIgQYIqo69JFcb%2BzHyIXlgJMcXOtp%2FbGAE91HS4xcUGB0YqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxnoiYwMIELFuyulSrcA37oEJWY7X4Ol9uhClC0h3FO8UbXOismcbslMQSMEjc7Sw%2BGC%2Bqt8JkdS0qOy2KYOZt8Nm5w0fQnGRcGqR0w7Hi%2BZUP3YSOKZmDuMhRBgpXqNknJkKJ8L%2B4ETy2NbE%2BSJwxdN2E1J%2BDjUbMTe5WkEG0FKGTIGChpvV9SylbPTdk8dsNCwY3xF4BuEuZtyqI8DeWj29dxcSWVPCQR%2Fk7slqgpYsAdSyG98%2Fb%2BCTsrlwSVxOZTPg95JAQf6TLe3wdqe9kk4dPUD5YrmxBZNbdcERx1RASdvQYmsOG%2Bts7X9E4XOrQ%2Fkrvh%2FzA8N3TSmJuyaarXO9pB4g0MP3M7yh8UNbpCCtU%2BgkrhZa2R07WT6muPFXAKYTDENrGsnVcElMHhrTTDncjDLC%2ByLIlowKbEGYmmE6supbpn3RlYXg7Yz%2BwlEf7qT%2FC3Yv8t2G%2Bh2R5amWlFSG4JM2CQLj6wNrnXhDv5kMHw7LuwjUYNwS%2BI81BMNcyrhKtQIo2Yoi01Xn%2Fv9%2Fm4%2Bq1KSkEIvGOCFUH1zKus5rfegg8XBEPertsrL1Re7s03Ta7mOf8VvUy4ax%2FyS97ngTU%2FNaW5TkdhrZnqphwOHPEw8ZzfL6k8rt1u8INxAi8HwJZNcmnssvVOMPqjm74GOqUB95N6i4Gs1hiWRp6G56nNjnDULf4RtkzOsG%2B800n%2F1IpZiZY0qxQdXGmWZjMW%2BZYkENMcYgCfunOEgKHbV8S%2B1VpCvXx3yg0tKpqeAlR4nhxl7TzP6k8vAlcSXfGgz2HWUDSjb7NmkzxefTfEGmQbTbf6wDFdWI5BXurhhZ5ntpN8H5NUfjDQjJlzD4MUr5IDtJk5%2FrKSCcMQ6NwCfRlbsd%2FHq5QE&X-Amz-Signature=3dd0ae31b6a95b4e0985f9d5dfc18435ef3316f8c46f0a2a7b64a87d7196f18c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BABPLQ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoAm6%2F%2BGmh1v22d9PPnB6RdZ3PS5DK0DFHVffROk0%2FTAIgQYIqo69JFcb%2BzHyIXlgJMcXOtp%2FbGAE91HS4xcUGB0YqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxnoiYwMIELFuyulSrcA37oEJWY7X4Ol9uhClC0h3FO8UbXOismcbslMQSMEjc7Sw%2BGC%2Bqt8JkdS0qOy2KYOZt8Nm5w0fQnGRcGqR0w7Hi%2BZUP3YSOKZmDuMhRBgpXqNknJkKJ8L%2B4ETy2NbE%2BSJwxdN2E1J%2BDjUbMTe5WkEG0FKGTIGChpvV9SylbPTdk8dsNCwY3xF4BuEuZtyqI8DeWj29dxcSWVPCQR%2Fk7slqgpYsAdSyG98%2Fb%2BCTsrlwSVxOZTPg95JAQf6TLe3wdqe9kk4dPUD5YrmxBZNbdcERx1RASdvQYmsOG%2Bts7X9E4XOrQ%2Fkrvh%2FzA8N3TSmJuyaarXO9pB4g0MP3M7yh8UNbpCCtU%2BgkrhZa2R07WT6muPFXAKYTDENrGsnVcElMHhrTTDncjDLC%2ByLIlowKbEGYmmE6supbpn3RlYXg7Yz%2BwlEf7qT%2FC3Yv8t2G%2Bh2R5amWlFSG4JM2CQLj6wNrnXhDv5kMHw7LuwjUYNwS%2BI81BMNcyrhKtQIo2Yoi01Xn%2Fv9%2Fm4%2Bq1KSkEIvGOCFUH1zKus5rfegg8XBEPertsrL1Re7s03Ta7mOf8VvUy4ax%2FyS97ngTU%2FNaW5TkdhrZnqphwOHPEw8ZzfL6k8rt1u8INxAi8HwJZNcmnssvVOMPqjm74GOqUB95N6i4Gs1hiWRp6G56nNjnDULf4RtkzOsG%2B800n%2F1IpZiZY0qxQdXGmWZjMW%2BZYkENMcYgCfunOEgKHbV8S%2B1VpCvXx3yg0tKpqeAlR4nhxl7TzP6k8vAlcSXfGgz2HWUDSjb7NmkzxefTfEGmQbTbf6wDFdWI5BXurhhZ5ntpN8H5NUfjDQjJlzD4MUr5IDtJk5%2FrKSCcMQ6NwCfRlbsd%2FHq5QE&X-Amz-Signature=ea89f5e4702e0a7c37eced521935cf98df8b16e90f785027b7fbcf3cc2763168&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BABPLQ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoAm6%2F%2BGmh1v22d9PPnB6RdZ3PS5DK0DFHVffROk0%2FTAIgQYIqo69JFcb%2BzHyIXlgJMcXOtp%2FbGAE91HS4xcUGB0YqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxnoiYwMIELFuyulSrcA37oEJWY7X4Ol9uhClC0h3FO8UbXOismcbslMQSMEjc7Sw%2BGC%2Bqt8JkdS0qOy2KYOZt8Nm5w0fQnGRcGqR0w7Hi%2BZUP3YSOKZmDuMhRBgpXqNknJkKJ8L%2B4ETy2NbE%2BSJwxdN2E1J%2BDjUbMTe5WkEG0FKGTIGChpvV9SylbPTdk8dsNCwY3xF4BuEuZtyqI8DeWj29dxcSWVPCQR%2Fk7slqgpYsAdSyG98%2Fb%2BCTsrlwSVxOZTPg95JAQf6TLe3wdqe9kk4dPUD5YrmxBZNbdcERx1RASdvQYmsOG%2Bts7X9E4XOrQ%2Fkrvh%2FzA8N3TSmJuyaarXO9pB4g0MP3M7yh8UNbpCCtU%2BgkrhZa2R07WT6muPFXAKYTDENrGsnVcElMHhrTTDncjDLC%2ByLIlowKbEGYmmE6supbpn3RlYXg7Yz%2BwlEf7qT%2FC3Yv8t2G%2Bh2R5amWlFSG4JM2CQLj6wNrnXhDv5kMHw7LuwjUYNwS%2BI81BMNcyrhKtQIo2Yoi01Xn%2Fv9%2Fm4%2Bq1KSkEIvGOCFUH1zKus5rfegg8XBEPertsrL1Re7s03Ta7mOf8VvUy4ax%2FyS97ngTU%2FNaW5TkdhrZnqphwOHPEw8ZzfL6k8rt1u8INxAi8HwJZNcmnssvVOMPqjm74GOqUB95N6i4Gs1hiWRp6G56nNjnDULf4RtkzOsG%2B800n%2F1IpZiZY0qxQdXGmWZjMW%2BZYkENMcYgCfunOEgKHbV8S%2B1VpCvXx3yg0tKpqeAlR4nhxl7TzP6k8vAlcSXfGgz2HWUDSjb7NmkzxefTfEGmQbTbf6wDFdWI5BXurhhZ5ntpN8H5NUfjDQjJlzD4MUr5IDtJk5%2FrKSCcMQ6NwCfRlbsd%2FHq5QE&X-Amz-Signature=2afd95882a9fea591a27a2d4a4beba3c7ff73243ddc1c69adec0d74897744a7e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BABPLQ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoAm6%2F%2BGmh1v22d9PPnB6RdZ3PS5DK0DFHVffROk0%2FTAIgQYIqo69JFcb%2BzHyIXlgJMcXOtp%2FbGAE91HS4xcUGB0YqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxnoiYwMIELFuyulSrcA37oEJWY7X4Ol9uhClC0h3FO8UbXOismcbslMQSMEjc7Sw%2BGC%2Bqt8JkdS0qOy2KYOZt8Nm5w0fQnGRcGqR0w7Hi%2BZUP3YSOKZmDuMhRBgpXqNknJkKJ8L%2B4ETy2NbE%2BSJwxdN2E1J%2BDjUbMTe5WkEG0FKGTIGChpvV9SylbPTdk8dsNCwY3xF4BuEuZtyqI8DeWj29dxcSWVPCQR%2Fk7slqgpYsAdSyG98%2Fb%2BCTsrlwSVxOZTPg95JAQf6TLe3wdqe9kk4dPUD5YrmxBZNbdcERx1RASdvQYmsOG%2Bts7X9E4XOrQ%2Fkrvh%2FzA8N3TSmJuyaarXO9pB4g0MP3M7yh8UNbpCCtU%2BgkrhZa2R07WT6muPFXAKYTDENrGsnVcElMHhrTTDncjDLC%2ByLIlowKbEGYmmE6supbpn3RlYXg7Yz%2BwlEf7qT%2FC3Yv8t2G%2Bh2R5amWlFSG4JM2CQLj6wNrnXhDv5kMHw7LuwjUYNwS%2BI81BMNcyrhKtQIo2Yoi01Xn%2Fv9%2Fm4%2Bq1KSkEIvGOCFUH1zKus5rfegg8XBEPertsrL1Re7s03Ta7mOf8VvUy4ax%2FyS97ngTU%2FNaW5TkdhrZnqphwOHPEw8ZzfL6k8rt1u8INxAi8HwJZNcmnssvVOMPqjm74GOqUB95N6i4Gs1hiWRp6G56nNjnDULf4RtkzOsG%2B800n%2F1IpZiZY0qxQdXGmWZjMW%2BZYkENMcYgCfunOEgKHbV8S%2B1VpCvXx3yg0tKpqeAlR4nhxl7TzP6k8vAlcSXfGgz2HWUDSjb7NmkzxefTfEGmQbTbf6wDFdWI5BXurhhZ5ntpN8H5NUfjDQjJlzD4MUr5IDtJk5%2FrKSCcMQ6NwCfRlbsd%2FHq5QE&X-Amz-Signature=b3b802fc2e73b58723b9bddcce036d7daaa682aa56349bc05a1bf0245948f745&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
