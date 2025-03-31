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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L6ANQP2%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGmvmAowUhqckgb3TBXWIFGbvevWu5mFPSnXKtKVJ9LMAiBhQfl840LvNs2YakLoMHUfBUbV3UqMZ%2F5TIh6K44SI6yqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEwEH6Wb0NjwSp1JmKtwDRimJRTLCtTgsZ36cP5xxi9jKRNZWelccfoSVLF9%2FEahdlBeWTc2nKzNN8vzPUOsQq9wwTytjR0xgqcQi9Nbar6wSs0ebCb4EACDUHhllJZVjOLI8IzljXVOTJdLkIHAkdE8RTTB7vi9teXfy5w7LGAeO0nCNzzUE5BNX0N2NA0jBSdbQJNgCdBnKmSY9tNr5LiUtpNv%2BGKW%2BSmtH%2B5S27kJKBHNHaazl2zz4RDhooG%2FN6OUDschGqaJyjxSqJZGDgqxYwGRjpPo%2FdSOGRbq%2BtTBgi%2FV0Uoyc%2FubQtyOdd0pxV3VdTecPw92UvV6r%2F57Sie3Y36DPKImvnITAO%2FEfVVqjEVGWzfoU2lGG4TtDxY0Z%2FU8WbRwSHv1nMHq%2FSY1AYzZyAKlqlPDfOR61huJPDdzvdrppi3iW0bNUdI7IEMr5q2%2BOwI7CJOrqewv3G%2BS0%2BFCrdRHLXvhni1hWYS17MIN7tj%2FztdJsHqXchEyDmSCoFwfLd6QSHKxo411438cRSp%2Fim94iVXd4FbXYfem1Nmw%2FWy7BdRvWk%2B44fUayAbHHfh9Fw6Diz74x2AQEQnFKyBn%2BzH4gmuBhcb9qonPIMwhqdhugQJapAXJcjRz2HT%2FkGVkpQSeRaed04Gcw%2FOOovwY6pgEGLB6PqSzcYDHqUqFCbHBvMljpv5S3%2Bzf860QrSkRvfgwddtbsHntKTLKC38O0nyq2wx4qstJ0Wt6jA4fulS6WC4ssIScSgxvqyLkaQchCIWdLXiXZch7wUQ2o0tZn5MJ67leWHLV7KEmKk18X5XbCV4z2vbgEnNDRdhBSmkBiOOTKn%2Ffxrh876ddE%2FcRb6td5OGiyXq71of%2FXbXt7US1ztMMXH6Ql&X-Amz-Signature=41e38f69e1656e167a1b8fa17c7b910167992468e2c55647739fe4a75c25c7a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L6ANQP2%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGmvmAowUhqckgb3TBXWIFGbvevWu5mFPSnXKtKVJ9LMAiBhQfl840LvNs2YakLoMHUfBUbV3UqMZ%2F5TIh6K44SI6yqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEwEH6Wb0NjwSp1JmKtwDRimJRTLCtTgsZ36cP5xxi9jKRNZWelccfoSVLF9%2FEahdlBeWTc2nKzNN8vzPUOsQq9wwTytjR0xgqcQi9Nbar6wSs0ebCb4EACDUHhllJZVjOLI8IzljXVOTJdLkIHAkdE8RTTB7vi9teXfy5w7LGAeO0nCNzzUE5BNX0N2NA0jBSdbQJNgCdBnKmSY9tNr5LiUtpNv%2BGKW%2BSmtH%2B5S27kJKBHNHaazl2zz4RDhooG%2FN6OUDschGqaJyjxSqJZGDgqxYwGRjpPo%2FdSOGRbq%2BtTBgi%2FV0Uoyc%2FubQtyOdd0pxV3VdTecPw92UvV6r%2F57Sie3Y36DPKImvnITAO%2FEfVVqjEVGWzfoU2lGG4TtDxY0Z%2FU8WbRwSHv1nMHq%2FSY1AYzZyAKlqlPDfOR61huJPDdzvdrppi3iW0bNUdI7IEMr5q2%2BOwI7CJOrqewv3G%2BS0%2BFCrdRHLXvhni1hWYS17MIN7tj%2FztdJsHqXchEyDmSCoFwfLd6QSHKxo411438cRSp%2Fim94iVXd4FbXYfem1Nmw%2FWy7BdRvWk%2B44fUayAbHHfh9Fw6Diz74x2AQEQnFKyBn%2BzH4gmuBhcb9qonPIMwhqdhugQJapAXJcjRz2HT%2FkGVkpQSeRaed04Gcw%2FOOovwY6pgEGLB6PqSzcYDHqUqFCbHBvMljpv5S3%2Bzf860QrSkRvfgwddtbsHntKTLKC38O0nyq2wx4qstJ0Wt6jA4fulS6WC4ssIScSgxvqyLkaQchCIWdLXiXZch7wUQ2o0tZn5MJ67leWHLV7KEmKk18X5XbCV4z2vbgEnNDRdhBSmkBiOOTKn%2Ffxrh876ddE%2FcRb6td5OGiyXq71of%2FXbXt7US1ztMMXH6Ql&X-Amz-Signature=6af8e977fe8a8ee97fff0c3fc1d9651865459debfee68635dd9f55968207e6fa&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L6ANQP2%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGmvmAowUhqckgb3TBXWIFGbvevWu5mFPSnXKtKVJ9LMAiBhQfl840LvNs2YakLoMHUfBUbV3UqMZ%2F5TIh6K44SI6yqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEwEH6Wb0NjwSp1JmKtwDRimJRTLCtTgsZ36cP5xxi9jKRNZWelccfoSVLF9%2FEahdlBeWTc2nKzNN8vzPUOsQq9wwTytjR0xgqcQi9Nbar6wSs0ebCb4EACDUHhllJZVjOLI8IzljXVOTJdLkIHAkdE8RTTB7vi9teXfy5w7LGAeO0nCNzzUE5BNX0N2NA0jBSdbQJNgCdBnKmSY9tNr5LiUtpNv%2BGKW%2BSmtH%2B5S27kJKBHNHaazl2zz4RDhooG%2FN6OUDschGqaJyjxSqJZGDgqxYwGRjpPo%2FdSOGRbq%2BtTBgi%2FV0Uoyc%2FubQtyOdd0pxV3VdTecPw92UvV6r%2F57Sie3Y36DPKImvnITAO%2FEfVVqjEVGWzfoU2lGG4TtDxY0Z%2FU8WbRwSHv1nMHq%2FSY1AYzZyAKlqlPDfOR61huJPDdzvdrppi3iW0bNUdI7IEMr5q2%2BOwI7CJOrqewv3G%2BS0%2BFCrdRHLXvhni1hWYS17MIN7tj%2FztdJsHqXchEyDmSCoFwfLd6QSHKxo411438cRSp%2Fim94iVXd4FbXYfem1Nmw%2FWy7BdRvWk%2B44fUayAbHHfh9Fw6Diz74x2AQEQnFKyBn%2BzH4gmuBhcb9qonPIMwhqdhugQJapAXJcjRz2HT%2FkGVkpQSeRaed04Gcw%2FOOovwY6pgEGLB6PqSzcYDHqUqFCbHBvMljpv5S3%2Bzf860QrSkRvfgwddtbsHntKTLKC38O0nyq2wx4qstJ0Wt6jA4fulS6WC4ssIScSgxvqyLkaQchCIWdLXiXZch7wUQ2o0tZn5MJ67leWHLV7KEmKk18X5XbCV4z2vbgEnNDRdhBSmkBiOOTKn%2Ffxrh876ddE%2FcRb6td5OGiyXq71of%2FXbXt7US1ztMMXH6Ql&X-Amz-Signature=44da88c754d172f246dbac401cfc01a18890ff44cb35827ba66f583d64089a17&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L6ANQP2%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGmvmAowUhqckgb3TBXWIFGbvevWu5mFPSnXKtKVJ9LMAiBhQfl840LvNs2YakLoMHUfBUbV3UqMZ%2F5TIh6K44SI6yqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEwEH6Wb0NjwSp1JmKtwDRimJRTLCtTgsZ36cP5xxi9jKRNZWelccfoSVLF9%2FEahdlBeWTc2nKzNN8vzPUOsQq9wwTytjR0xgqcQi9Nbar6wSs0ebCb4EACDUHhllJZVjOLI8IzljXVOTJdLkIHAkdE8RTTB7vi9teXfy5w7LGAeO0nCNzzUE5BNX0N2NA0jBSdbQJNgCdBnKmSY9tNr5LiUtpNv%2BGKW%2BSmtH%2B5S27kJKBHNHaazl2zz4RDhooG%2FN6OUDschGqaJyjxSqJZGDgqxYwGRjpPo%2FdSOGRbq%2BtTBgi%2FV0Uoyc%2FubQtyOdd0pxV3VdTecPw92UvV6r%2F57Sie3Y36DPKImvnITAO%2FEfVVqjEVGWzfoU2lGG4TtDxY0Z%2FU8WbRwSHv1nMHq%2FSY1AYzZyAKlqlPDfOR61huJPDdzvdrppi3iW0bNUdI7IEMr5q2%2BOwI7CJOrqewv3G%2BS0%2BFCrdRHLXvhni1hWYS17MIN7tj%2FztdJsHqXchEyDmSCoFwfLd6QSHKxo411438cRSp%2Fim94iVXd4FbXYfem1Nmw%2FWy7BdRvWk%2B44fUayAbHHfh9Fw6Diz74x2AQEQnFKyBn%2BzH4gmuBhcb9qonPIMwhqdhugQJapAXJcjRz2HT%2FkGVkpQSeRaed04Gcw%2FOOovwY6pgEGLB6PqSzcYDHqUqFCbHBvMljpv5S3%2Bzf860QrSkRvfgwddtbsHntKTLKC38O0nyq2wx4qstJ0Wt6jA4fulS6WC4ssIScSgxvqyLkaQchCIWdLXiXZch7wUQ2o0tZn5MJ67leWHLV7KEmKk18X5XbCV4z2vbgEnNDRdhBSmkBiOOTKn%2Ffxrh876ddE%2FcRb6td5OGiyXq71of%2FXbXt7US1ztMMXH6Ql&X-Amz-Signature=024df311bf28aabe4327546e33de879e0c2ca54dab9a7dc557844efc1fa1df32&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L6ANQP2%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGmvmAowUhqckgb3TBXWIFGbvevWu5mFPSnXKtKVJ9LMAiBhQfl840LvNs2YakLoMHUfBUbV3UqMZ%2F5TIh6K44SI6yqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEwEH6Wb0NjwSp1JmKtwDRimJRTLCtTgsZ36cP5xxi9jKRNZWelccfoSVLF9%2FEahdlBeWTc2nKzNN8vzPUOsQq9wwTytjR0xgqcQi9Nbar6wSs0ebCb4EACDUHhllJZVjOLI8IzljXVOTJdLkIHAkdE8RTTB7vi9teXfy5w7LGAeO0nCNzzUE5BNX0N2NA0jBSdbQJNgCdBnKmSY9tNr5LiUtpNv%2BGKW%2BSmtH%2B5S27kJKBHNHaazl2zz4RDhooG%2FN6OUDschGqaJyjxSqJZGDgqxYwGRjpPo%2FdSOGRbq%2BtTBgi%2FV0Uoyc%2FubQtyOdd0pxV3VdTecPw92UvV6r%2F57Sie3Y36DPKImvnITAO%2FEfVVqjEVGWzfoU2lGG4TtDxY0Z%2FU8WbRwSHv1nMHq%2FSY1AYzZyAKlqlPDfOR61huJPDdzvdrppi3iW0bNUdI7IEMr5q2%2BOwI7CJOrqewv3G%2BS0%2BFCrdRHLXvhni1hWYS17MIN7tj%2FztdJsHqXchEyDmSCoFwfLd6QSHKxo411438cRSp%2Fim94iVXd4FbXYfem1Nmw%2FWy7BdRvWk%2B44fUayAbHHfh9Fw6Diz74x2AQEQnFKyBn%2BzH4gmuBhcb9qonPIMwhqdhugQJapAXJcjRz2HT%2FkGVkpQSeRaed04Gcw%2FOOovwY6pgEGLB6PqSzcYDHqUqFCbHBvMljpv5S3%2Bzf860QrSkRvfgwddtbsHntKTLKC38O0nyq2wx4qstJ0Wt6jA4fulS6WC4ssIScSgxvqyLkaQchCIWdLXiXZch7wUQ2o0tZn5MJ67leWHLV7KEmKk18X5XbCV4z2vbgEnNDRdhBSmkBiOOTKn%2Ffxrh876ddE%2FcRb6td5OGiyXq71of%2FXbXt7US1ztMMXH6Ql&X-Amz-Signature=8ca7d93f5bdbbd15b83fc17fc0c12587cb448fffa8ee4de716c017c58d9b2282&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
