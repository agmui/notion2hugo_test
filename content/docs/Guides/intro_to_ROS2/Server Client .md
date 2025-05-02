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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HW2AJTQ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIENdS1kl6PCzSV2%2F%2BM27B7o0FHj17owYuJYfQjErW74uAiEAnBwLLhGrUKJILVDl9rgqA4b3V4khS7UCSmGTrvqfOgEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWcewuZCwU2NqLCHyrcAwb%2BmYsn%2BH3z8cqPJhttPyPeHv6ecNSetS40s26RAv8sy9B1R%2BbK5L72AAAV2TWTPMPcGnbaYe0S8W2PjaVQfh8QpxeBi0k1anbe847TKhKRr%2Bn1HloEXdTYd5Q4dnVCMxwLvyLacqVUcXpUSKFDDxsCXFEiSU2SEZz4NtfziNihgqi%2B%2FUCChMDO5qMYTDQXEy0ENjIDHFJyYeaKYaReQ8B%2B%2Fv1r%2BCVE8wj0GmMUfXF%2BImlvSRNecZSsKazmvOwcsC67NZNCtf16uMLhSGO2eMK6VhshFsir6bpC8HgyVbR%2BAN4zccS80tSb22ELvZBEbYInUXssjsTIkkCp2zqaOnQx9rOaxZ26Lqj6%2FVpIHnePw400iYBm%2FrN0ANsiTavSAb5T4Dx%2F1ZOVKJvnFblea8G2PLQZ2dUgG3j7JVDdv162o7bpa9l4dpg1TWnfa6BVYRWhovKHPeHWb0wV1H1bR7YCFwievX5pHa3pIMIcldHnJR%2BijnGCHIunVGYV4BMZ8tzGJ9%2FxK3JV31S6RA5ZNcoloJfL10TY9fqr8GcYbPHlpxF0XeMIdetC4dTkNyfLd5qoA0%2FwvQhHIXqpZ3w4Z%2BPoHyRQH908t0QWwy9JIHPFRkf4Ur0nmDw5bJe2MJa90cAGOqUBGu6kY33Nzof8XSTcCdM0T7xcn0L8ayQDJknG%2Fc%2BDFum6upJytFPuOqHSOLFQXItvtVMuqdnCteDuxpiZ%2BWRswfI99LQQYma8phAgdN1B1CDsVdZWNCfqKm0M9TxUMf2SlgnstTx2VEMXuFtU0fTnT9Pez1qpc3p8YWlBV5wTsmjgEd4bhANODDex1ez5fIfVoaEjFVQQ3LfqPZWHHHXxhjmGiBL6&X-Amz-Signature=30727d95f8f60dafd1d9050436dacaaf0d3d8ffa9cce92204be144f1f722e0e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HW2AJTQ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIENdS1kl6PCzSV2%2F%2BM27B7o0FHj17owYuJYfQjErW74uAiEAnBwLLhGrUKJILVDl9rgqA4b3V4khS7UCSmGTrvqfOgEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWcewuZCwU2NqLCHyrcAwb%2BmYsn%2BH3z8cqPJhttPyPeHv6ecNSetS40s26RAv8sy9B1R%2BbK5L72AAAV2TWTPMPcGnbaYe0S8W2PjaVQfh8QpxeBi0k1anbe847TKhKRr%2Bn1HloEXdTYd5Q4dnVCMxwLvyLacqVUcXpUSKFDDxsCXFEiSU2SEZz4NtfziNihgqi%2B%2FUCChMDO5qMYTDQXEy0ENjIDHFJyYeaKYaReQ8B%2B%2Fv1r%2BCVE8wj0GmMUfXF%2BImlvSRNecZSsKazmvOwcsC67NZNCtf16uMLhSGO2eMK6VhshFsir6bpC8HgyVbR%2BAN4zccS80tSb22ELvZBEbYInUXssjsTIkkCp2zqaOnQx9rOaxZ26Lqj6%2FVpIHnePw400iYBm%2FrN0ANsiTavSAb5T4Dx%2F1ZOVKJvnFblea8G2PLQZ2dUgG3j7JVDdv162o7bpa9l4dpg1TWnfa6BVYRWhovKHPeHWb0wV1H1bR7YCFwievX5pHa3pIMIcldHnJR%2BijnGCHIunVGYV4BMZ8tzGJ9%2FxK3JV31S6RA5ZNcoloJfL10TY9fqr8GcYbPHlpxF0XeMIdetC4dTkNyfLd5qoA0%2FwvQhHIXqpZ3w4Z%2BPoHyRQH908t0QWwy9JIHPFRkf4Ur0nmDw5bJe2MJa90cAGOqUBGu6kY33Nzof8XSTcCdM0T7xcn0L8ayQDJknG%2Fc%2BDFum6upJytFPuOqHSOLFQXItvtVMuqdnCteDuxpiZ%2BWRswfI99LQQYma8phAgdN1B1CDsVdZWNCfqKm0M9TxUMf2SlgnstTx2VEMXuFtU0fTnT9Pez1qpc3p8YWlBV5wTsmjgEd4bhANODDex1ez5fIfVoaEjFVQQ3LfqPZWHHHXxhjmGiBL6&X-Amz-Signature=45aeceffda96e0c685e57a4f3442f60effd5b2022446395faae2ff6741a4bdc6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HW2AJTQ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIENdS1kl6PCzSV2%2F%2BM27B7o0FHj17owYuJYfQjErW74uAiEAnBwLLhGrUKJILVDl9rgqA4b3V4khS7UCSmGTrvqfOgEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWcewuZCwU2NqLCHyrcAwb%2BmYsn%2BH3z8cqPJhttPyPeHv6ecNSetS40s26RAv8sy9B1R%2BbK5L72AAAV2TWTPMPcGnbaYe0S8W2PjaVQfh8QpxeBi0k1anbe847TKhKRr%2Bn1HloEXdTYd5Q4dnVCMxwLvyLacqVUcXpUSKFDDxsCXFEiSU2SEZz4NtfziNihgqi%2B%2FUCChMDO5qMYTDQXEy0ENjIDHFJyYeaKYaReQ8B%2B%2Fv1r%2BCVE8wj0GmMUfXF%2BImlvSRNecZSsKazmvOwcsC67NZNCtf16uMLhSGO2eMK6VhshFsir6bpC8HgyVbR%2BAN4zccS80tSb22ELvZBEbYInUXssjsTIkkCp2zqaOnQx9rOaxZ26Lqj6%2FVpIHnePw400iYBm%2FrN0ANsiTavSAb5T4Dx%2F1ZOVKJvnFblea8G2PLQZ2dUgG3j7JVDdv162o7bpa9l4dpg1TWnfa6BVYRWhovKHPeHWb0wV1H1bR7YCFwievX5pHa3pIMIcldHnJR%2BijnGCHIunVGYV4BMZ8tzGJ9%2FxK3JV31S6RA5ZNcoloJfL10TY9fqr8GcYbPHlpxF0XeMIdetC4dTkNyfLd5qoA0%2FwvQhHIXqpZ3w4Z%2BPoHyRQH908t0QWwy9JIHPFRkf4Ur0nmDw5bJe2MJa90cAGOqUBGu6kY33Nzof8XSTcCdM0T7xcn0L8ayQDJknG%2Fc%2BDFum6upJytFPuOqHSOLFQXItvtVMuqdnCteDuxpiZ%2BWRswfI99LQQYma8phAgdN1B1CDsVdZWNCfqKm0M9TxUMf2SlgnstTx2VEMXuFtU0fTnT9Pez1qpc3p8YWlBV5wTsmjgEd4bhANODDex1ez5fIfVoaEjFVQQ3LfqPZWHHHXxhjmGiBL6&X-Amz-Signature=aef490f7ad40544a54b2727be63cb2ed8bc47d1ad5a48035a92831142aa4dee5&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HW2AJTQ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIENdS1kl6PCzSV2%2F%2BM27B7o0FHj17owYuJYfQjErW74uAiEAnBwLLhGrUKJILVDl9rgqA4b3V4khS7UCSmGTrvqfOgEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWcewuZCwU2NqLCHyrcAwb%2BmYsn%2BH3z8cqPJhttPyPeHv6ecNSetS40s26RAv8sy9B1R%2BbK5L72AAAV2TWTPMPcGnbaYe0S8W2PjaVQfh8QpxeBi0k1anbe847TKhKRr%2Bn1HloEXdTYd5Q4dnVCMxwLvyLacqVUcXpUSKFDDxsCXFEiSU2SEZz4NtfziNihgqi%2B%2FUCChMDO5qMYTDQXEy0ENjIDHFJyYeaKYaReQ8B%2B%2Fv1r%2BCVE8wj0GmMUfXF%2BImlvSRNecZSsKazmvOwcsC67NZNCtf16uMLhSGO2eMK6VhshFsir6bpC8HgyVbR%2BAN4zccS80tSb22ELvZBEbYInUXssjsTIkkCp2zqaOnQx9rOaxZ26Lqj6%2FVpIHnePw400iYBm%2FrN0ANsiTavSAb5T4Dx%2F1ZOVKJvnFblea8G2PLQZ2dUgG3j7JVDdv162o7bpa9l4dpg1TWnfa6BVYRWhovKHPeHWb0wV1H1bR7YCFwievX5pHa3pIMIcldHnJR%2BijnGCHIunVGYV4BMZ8tzGJ9%2FxK3JV31S6RA5ZNcoloJfL10TY9fqr8GcYbPHlpxF0XeMIdetC4dTkNyfLd5qoA0%2FwvQhHIXqpZ3w4Z%2BPoHyRQH908t0QWwy9JIHPFRkf4Ur0nmDw5bJe2MJa90cAGOqUBGu6kY33Nzof8XSTcCdM0T7xcn0L8ayQDJknG%2Fc%2BDFum6upJytFPuOqHSOLFQXItvtVMuqdnCteDuxpiZ%2BWRswfI99LQQYma8phAgdN1B1CDsVdZWNCfqKm0M9TxUMf2SlgnstTx2VEMXuFtU0fTnT9Pez1qpc3p8YWlBV5wTsmjgEd4bhANODDex1ez5fIfVoaEjFVQQ3LfqPZWHHHXxhjmGiBL6&X-Amz-Signature=aa38b1f92ba1efb8f8526571d9ff0829ba2ad92d90aa0194663937108e629943&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HW2AJTQ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIENdS1kl6PCzSV2%2F%2BM27B7o0FHj17owYuJYfQjErW74uAiEAnBwLLhGrUKJILVDl9rgqA4b3V4khS7UCSmGTrvqfOgEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWcewuZCwU2NqLCHyrcAwb%2BmYsn%2BH3z8cqPJhttPyPeHv6ecNSetS40s26RAv8sy9B1R%2BbK5L72AAAV2TWTPMPcGnbaYe0S8W2PjaVQfh8QpxeBi0k1anbe847TKhKRr%2Bn1HloEXdTYd5Q4dnVCMxwLvyLacqVUcXpUSKFDDxsCXFEiSU2SEZz4NtfziNihgqi%2B%2FUCChMDO5qMYTDQXEy0ENjIDHFJyYeaKYaReQ8B%2B%2Fv1r%2BCVE8wj0GmMUfXF%2BImlvSRNecZSsKazmvOwcsC67NZNCtf16uMLhSGO2eMK6VhshFsir6bpC8HgyVbR%2BAN4zccS80tSb22ELvZBEbYInUXssjsTIkkCp2zqaOnQx9rOaxZ26Lqj6%2FVpIHnePw400iYBm%2FrN0ANsiTavSAb5T4Dx%2F1ZOVKJvnFblea8G2PLQZ2dUgG3j7JVDdv162o7bpa9l4dpg1TWnfa6BVYRWhovKHPeHWb0wV1H1bR7YCFwievX5pHa3pIMIcldHnJR%2BijnGCHIunVGYV4BMZ8tzGJ9%2FxK3JV31S6RA5ZNcoloJfL10TY9fqr8GcYbPHlpxF0XeMIdetC4dTkNyfLd5qoA0%2FwvQhHIXqpZ3w4Z%2BPoHyRQH908t0QWwy9JIHPFRkf4Ur0nmDw5bJe2MJa90cAGOqUBGu6kY33Nzof8XSTcCdM0T7xcn0L8ayQDJknG%2Fc%2BDFum6upJytFPuOqHSOLFQXItvtVMuqdnCteDuxpiZ%2BWRswfI99LQQYma8phAgdN1B1CDsVdZWNCfqKm0M9TxUMf2SlgnstTx2VEMXuFtU0fTnT9Pez1qpc3p8YWlBV5wTsmjgEd4bhANODDex1ez5fIfVoaEjFVQQ3LfqPZWHHHXxhjmGiBL6&X-Amz-Signature=e651b4a56c2bea63e10297c9c0ac6c813fa0299dc568bab7191b926beb525efa&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
