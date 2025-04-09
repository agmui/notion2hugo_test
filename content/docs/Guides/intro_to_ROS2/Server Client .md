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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AGX55EK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIEPzd8nM9UE2Qwvu1SIWMC9UNTqZZAxh5Pa3KBRSf7hwAiEAoezO8RYb%2F9nVGugwzlskQYwGBBsMKYVvNzJXNNE0KiwqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvuq6dcTX0H6G%2FeMCrcAyfpAvAnwnZ0kbzO3AdpDM5ikkNLhZFO%2Ba9w%2FefRF%2BXlCgponQouSxxNv5EzPrUH3gdLFbtTo442b9EerForzxLPR9FV8he%2BWlebQ1Dpo1x%2FRJIlpRnoyC53XOIxjfDlwiHqi0rJTbP0%2FImiLtyQQr%2FmutaTApan9WORYAt7tppE15CYd%2BOPSCDAqry9XdnRNPemrtFWt6tOG8DzveVU7HK0By1g1CcYt5%2FrymAruapddQpt9Znqp3X%2FRssWERyZCUF%2BHgyhNwWTP4VjotmerKZ1s631WjLlfHpIZNxj4T6MWgPResHp7ImNgOvm8DSjKP4KLkwPoy46MyizsO%2BzTCuGU%2BJ%2BwESr0vzoyvqnsylvI1tassgzLDTisdrjhu5XLJAfQtyCGTibTWRrxkwhT6w2s6yYHCiFGycQC%2BCQOw8KhHpJAW08Zt4mOqnrA4BR%2BKcYOZNA75koN9hLoNYYebnESFTRty4oVHeFrINWUMSkFk59r%2Fxh4hVpH5ScjT3rreneCK35dsft6LHMBSTfpUt%2BDFkesWs5FNizN55xiYMyYBuhcO3c7BC53WRI99cY2vIGzrNbJ1PkHRN8A%2BJG2OHpbWWBFk8rcqZK5DyPvNwVxkOqyxN5i9o5%2BdGBMNXW178GOqUBZZuuaF7CNL5FqQs2%2B7tUhzHBGk3MLnXrCmJcBJmg9Xf2nkBpwnDFV8t75ghsJ8uC5LSPIvMOj2XKlmGr7CuGMUkHjS%2BKmBT%2B3tMHvq%2F2LlnIzBdqbVJ5J8orBhnMO2bgkJmZ3SkOuMn9puZ%2FT4FmaK64CwnGbPde5ZQnllwUW83MKHo1fUdQPjew4aFPAE1xWhITxm%2Bj1JGuXZps5YR0k5cdHfpc&X-Amz-Signature=04f25de1e4efbdf28463fd1b691c9fecbf03f0cfbc24696d91e2d2f421180d3c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AGX55EK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIEPzd8nM9UE2Qwvu1SIWMC9UNTqZZAxh5Pa3KBRSf7hwAiEAoezO8RYb%2F9nVGugwzlskQYwGBBsMKYVvNzJXNNE0KiwqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvuq6dcTX0H6G%2FeMCrcAyfpAvAnwnZ0kbzO3AdpDM5ikkNLhZFO%2Ba9w%2FefRF%2BXlCgponQouSxxNv5EzPrUH3gdLFbtTo442b9EerForzxLPR9FV8he%2BWlebQ1Dpo1x%2FRJIlpRnoyC53XOIxjfDlwiHqi0rJTbP0%2FImiLtyQQr%2FmutaTApan9WORYAt7tppE15CYd%2BOPSCDAqry9XdnRNPemrtFWt6tOG8DzveVU7HK0By1g1CcYt5%2FrymAruapddQpt9Znqp3X%2FRssWERyZCUF%2BHgyhNwWTP4VjotmerKZ1s631WjLlfHpIZNxj4T6MWgPResHp7ImNgOvm8DSjKP4KLkwPoy46MyizsO%2BzTCuGU%2BJ%2BwESr0vzoyvqnsylvI1tassgzLDTisdrjhu5XLJAfQtyCGTibTWRrxkwhT6w2s6yYHCiFGycQC%2BCQOw8KhHpJAW08Zt4mOqnrA4BR%2BKcYOZNA75koN9hLoNYYebnESFTRty4oVHeFrINWUMSkFk59r%2Fxh4hVpH5ScjT3rreneCK35dsft6LHMBSTfpUt%2BDFkesWs5FNizN55xiYMyYBuhcO3c7BC53WRI99cY2vIGzrNbJ1PkHRN8A%2BJG2OHpbWWBFk8rcqZK5DyPvNwVxkOqyxN5i9o5%2BdGBMNXW178GOqUBZZuuaF7CNL5FqQs2%2B7tUhzHBGk3MLnXrCmJcBJmg9Xf2nkBpwnDFV8t75ghsJ8uC5LSPIvMOj2XKlmGr7CuGMUkHjS%2BKmBT%2B3tMHvq%2F2LlnIzBdqbVJ5J8orBhnMO2bgkJmZ3SkOuMn9puZ%2FT4FmaK64CwnGbPde5ZQnllwUW83MKHo1fUdQPjew4aFPAE1xWhITxm%2Bj1JGuXZps5YR0k5cdHfpc&X-Amz-Signature=b86533e66b04ce1d95170b711adbd13f2d423a446a080763187b1077fc628a9a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AGX55EK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIEPzd8nM9UE2Qwvu1SIWMC9UNTqZZAxh5Pa3KBRSf7hwAiEAoezO8RYb%2F9nVGugwzlskQYwGBBsMKYVvNzJXNNE0KiwqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvuq6dcTX0H6G%2FeMCrcAyfpAvAnwnZ0kbzO3AdpDM5ikkNLhZFO%2Ba9w%2FefRF%2BXlCgponQouSxxNv5EzPrUH3gdLFbtTo442b9EerForzxLPR9FV8he%2BWlebQ1Dpo1x%2FRJIlpRnoyC53XOIxjfDlwiHqi0rJTbP0%2FImiLtyQQr%2FmutaTApan9WORYAt7tppE15CYd%2BOPSCDAqry9XdnRNPemrtFWt6tOG8DzveVU7HK0By1g1CcYt5%2FrymAruapddQpt9Znqp3X%2FRssWERyZCUF%2BHgyhNwWTP4VjotmerKZ1s631WjLlfHpIZNxj4T6MWgPResHp7ImNgOvm8DSjKP4KLkwPoy46MyizsO%2BzTCuGU%2BJ%2BwESr0vzoyvqnsylvI1tassgzLDTisdrjhu5XLJAfQtyCGTibTWRrxkwhT6w2s6yYHCiFGycQC%2BCQOw8KhHpJAW08Zt4mOqnrA4BR%2BKcYOZNA75koN9hLoNYYebnESFTRty4oVHeFrINWUMSkFk59r%2Fxh4hVpH5ScjT3rreneCK35dsft6LHMBSTfpUt%2BDFkesWs5FNizN55xiYMyYBuhcO3c7BC53WRI99cY2vIGzrNbJ1PkHRN8A%2BJG2OHpbWWBFk8rcqZK5DyPvNwVxkOqyxN5i9o5%2BdGBMNXW178GOqUBZZuuaF7CNL5FqQs2%2B7tUhzHBGk3MLnXrCmJcBJmg9Xf2nkBpwnDFV8t75ghsJ8uC5LSPIvMOj2XKlmGr7CuGMUkHjS%2BKmBT%2B3tMHvq%2F2LlnIzBdqbVJ5J8orBhnMO2bgkJmZ3SkOuMn9puZ%2FT4FmaK64CwnGbPde5ZQnllwUW83MKHo1fUdQPjew4aFPAE1xWhITxm%2Bj1JGuXZps5YR0k5cdHfpc&X-Amz-Signature=8cd367c687ad0d2f2f56d33be42aad55d85cfd3f85d33f2322fdb8c39a1d2bb0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AGX55EK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIEPzd8nM9UE2Qwvu1SIWMC9UNTqZZAxh5Pa3KBRSf7hwAiEAoezO8RYb%2F9nVGugwzlskQYwGBBsMKYVvNzJXNNE0KiwqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvuq6dcTX0H6G%2FeMCrcAyfpAvAnwnZ0kbzO3AdpDM5ikkNLhZFO%2Ba9w%2FefRF%2BXlCgponQouSxxNv5EzPrUH3gdLFbtTo442b9EerForzxLPR9FV8he%2BWlebQ1Dpo1x%2FRJIlpRnoyC53XOIxjfDlwiHqi0rJTbP0%2FImiLtyQQr%2FmutaTApan9WORYAt7tppE15CYd%2BOPSCDAqry9XdnRNPemrtFWt6tOG8DzveVU7HK0By1g1CcYt5%2FrymAruapddQpt9Znqp3X%2FRssWERyZCUF%2BHgyhNwWTP4VjotmerKZ1s631WjLlfHpIZNxj4T6MWgPResHp7ImNgOvm8DSjKP4KLkwPoy46MyizsO%2BzTCuGU%2BJ%2BwESr0vzoyvqnsylvI1tassgzLDTisdrjhu5XLJAfQtyCGTibTWRrxkwhT6w2s6yYHCiFGycQC%2BCQOw8KhHpJAW08Zt4mOqnrA4BR%2BKcYOZNA75koN9hLoNYYebnESFTRty4oVHeFrINWUMSkFk59r%2Fxh4hVpH5ScjT3rreneCK35dsft6LHMBSTfpUt%2BDFkesWs5FNizN55xiYMyYBuhcO3c7BC53WRI99cY2vIGzrNbJ1PkHRN8A%2BJG2OHpbWWBFk8rcqZK5DyPvNwVxkOqyxN5i9o5%2BdGBMNXW178GOqUBZZuuaF7CNL5FqQs2%2B7tUhzHBGk3MLnXrCmJcBJmg9Xf2nkBpwnDFV8t75ghsJ8uC5LSPIvMOj2XKlmGr7CuGMUkHjS%2BKmBT%2B3tMHvq%2F2LlnIzBdqbVJ5J8orBhnMO2bgkJmZ3SkOuMn9puZ%2FT4FmaK64CwnGbPde5ZQnllwUW83MKHo1fUdQPjew4aFPAE1xWhITxm%2Bj1JGuXZps5YR0k5cdHfpc&X-Amz-Signature=27911c7370142d836f89e94622e4885a82dd32369750277b470a4f914ddc8c2e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AGX55EK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIEPzd8nM9UE2Qwvu1SIWMC9UNTqZZAxh5Pa3KBRSf7hwAiEAoezO8RYb%2F9nVGugwzlskQYwGBBsMKYVvNzJXNNE0KiwqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvuq6dcTX0H6G%2FeMCrcAyfpAvAnwnZ0kbzO3AdpDM5ikkNLhZFO%2Ba9w%2FefRF%2BXlCgponQouSxxNv5EzPrUH3gdLFbtTo442b9EerForzxLPR9FV8he%2BWlebQ1Dpo1x%2FRJIlpRnoyC53XOIxjfDlwiHqi0rJTbP0%2FImiLtyQQr%2FmutaTApan9WORYAt7tppE15CYd%2BOPSCDAqry9XdnRNPemrtFWt6tOG8DzveVU7HK0By1g1CcYt5%2FrymAruapddQpt9Znqp3X%2FRssWERyZCUF%2BHgyhNwWTP4VjotmerKZ1s631WjLlfHpIZNxj4T6MWgPResHp7ImNgOvm8DSjKP4KLkwPoy46MyizsO%2BzTCuGU%2BJ%2BwESr0vzoyvqnsylvI1tassgzLDTisdrjhu5XLJAfQtyCGTibTWRrxkwhT6w2s6yYHCiFGycQC%2BCQOw8KhHpJAW08Zt4mOqnrA4BR%2BKcYOZNA75koN9hLoNYYebnESFTRty4oVHeFrINWUMSkFk59r%2Fxh4hVpH5ScjT3rreneCK35dsft6LHMBSTfpUt%2BDFkesWs5FNizN55xiYMyYBuhcO3c7BC53WRI99cY2vIGzrNbJ1PkHRN8A%2BJG2OHpbWWBFk8rcqZK5DyPvNwVxkOqyxN5i9o5%2BdGBMNXW178GOqUBZZuuaF7CNL5FqQs2%2B7tUhzHBGk3MLnXrCmJcBJmg9Xf2nkBpwnDFV8t75ghsJ8uC5LSPIvMOj2XKlmGr7CuGMUkHjS%2BKmBT%2B3tMHvq%2F2LlnIzBdqbVJ5J8orBhnMO2bgkJmZ3SkOuMn9puZ%2FT4FmaK64CwnGbPde5ZQnllwUW83MKHo1fUdQPjew4aFPAE1xWhITxm%2Bj1JGuXZps5YR0k5cdHfpc&X-Amz-Signature=9b912447e8e01cb5ca160da4ebc5f5e0bfc8006142a31b1517bd49e1088baf40&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
