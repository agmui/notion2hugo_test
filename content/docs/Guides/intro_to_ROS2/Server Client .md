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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3MMFPVS%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGUKzT0SqLWtictSuTNFkEfIrngOanXPY2qU%2B%2FSwtm1dAiEArkxR7dWzJ9ssVO9bdT6xOD0P%2BCA%2FL5RK900VXud%2B6pIq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDN6Sk%2BIEBUv%2BWApFQCrcA76xI96MP2XZbOodjlAfjvfH7gH0NoFED90TbgXFLu%2BsQpomrxalu%2B4E72sAQ8S%2FgQKfAjty0bmMzDQyMxIGeBHHLzkDWeFzmd%2B3yWm1soh0zqW5C%2FgMvcFWmNaw4lq7gR2bIsDRfelyocAlBwdM4RqbPAEdfmxTFtpd9c6igzTgPUosBcZF8nglRmB5vwKoWUw3Bawb1vQxGAplVRxb00fkNsQ2eYQQJ8r878C4J6iJJ1mPpl1ahbLsUy7MOkEa%2FSWaAokJpDcXlyjqGdrvYMybwJ7WI2wfpu%2BzzcDa0gB4aZYU83C9SjJYw5trVvvBL9SrDlJ6VN2q8LiOwkYm1WaJkfQayNkgo5rxVpgt1sZm5neSGFHhwx8cz%2FmRlNRhEJM5RRzIqA6Y65kS6%2FDFVWni%2BhvdYE1Vojc33%2FBTYFy5QHQshjXQLxTO5IVXcZPwXrTTuoePnEqdUqqPBDN7b9AwY83nPZUb%2F2dv4VRHAAp5o0CrRbJP%2BLadBNsiRCiKkhFG6%2BUSPIMv9qQxmz1BFMH%2Bz5KqWPDOhaW0zWiOWBa1B2VUNmCjMxbYzWjOff%2BJmlLnwk1luCE4CpMcNGIeH1QIAnrK7j6da7Aj%2FYrfHtuX4UowIZoUgg5l3%2BFYMIv46MIGOqUB6tHQFcz%2BPVL151FkebeZrjlsgjeMVJ%2FjQPpTPs1ISJ0C%2BOcmogA84LoifiEd%2FafiwEnAI5vT1WDEbaJl%2F1EkbdUkdYmo%2FV7VDBntNUeWjXExojHli%2Bxh5CmoCH%2FZTfRZVi6WcuwVLXsq3J9J7s0a9aiHAjpNN0lZ%2BmuPBEFYzxUH5Gqoo5yu7qQeR36FXC8l3O57Htlol7zTXNRrhHBPCuxL18%2Bh&X-Amz-Signature=c3b14d4e1244a7e19089187cce1b29720bf3e3163da53a5d2a9b636114bee793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3MMFPVS%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGUKzT0SqLWtictSuTNFkEfIrngOanXPY2qU%2B%2FSwtm1dAiEArkxR7dWzJ9ssVO9bdT6xOD0P%2BCA%2FL5RK900VXud%2B6pIq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDN6Sk%2BIEBUv%2BWApFQCrcA76xI96MP2XZbOodjlAfjvfH7gH0NoFED90TbgXFLu%2BsQpomrxalu%2B4E72sAQ8S%2FgQKfAjty0bmMzDQyMxIGeBHHLzkDWeFzmd%2B3yWm1soh0zqW5C%2FgMvcFWmNaw4lq7gR2bIsDRfelyocAlBwdM4RqbPAEdfmxTFtpd9c6igzTgPUosBcZF8nglRmB5vwKoWUw3Bawb1vQxGAplVRxb00fkNsQ2eYQQJ8r878C4J6iJJ1mPpl1ahbLsUy7MOkEa%2FSWaAokJpDcXlyjqGdrvYMybwJ7WI2wfpu%2BzzcDa0gB4aZYU83C9SjJYw5trVvvBL9SrDlJ6VN2q8LiOwkYm1WaJkfQayNkgo5rxVpgt1sZm5neSGFHhwx8cz%2FmRlNRhEJM5RRzIqA6Y65kS6%2FDFVWni%2BhvdYE1Vojc33%2FBTYFy5QHQshjXQLxTO5IVXcZPwXrTTuoePnEqdUqqPBDN7b9AwY83nPZUb%2F2dv4VRHAAp5o0CrRbJP%2BLadBNsiRCiKkhFG6%2BUSPIMv9qQxmz1BFMH%2Bz5KqWPDOhaW0zWiOWBa1B2VUNmCjMxbYzWjOff%2BJmlLnwk1luCE4CpMcNGIeH1QIAnrK7j6da7Aj%2FYrfHtuX4UowIZoUgg5l3%2BFYMIv46MIGOqUB6tHQFcz%2BPVL151FkebeZrjlsgjeMVJ%2FjQPpTPs1ISJ0C%2BOcmogA84LoifiEd%2FafiwEnAI5vT1WDEbaJl%2F1EkbdUkdYmo%2FV7VDBntNUeWjXExojHli%2Bxh5CmoCH%2FZTfRZVi6WcuwVLXsq3J9J7s0a9aiHAjpNN0lZ%2BmuPBEFYzxUH5Gqoo5yu7qQeR36FXC8l3O57Htlol7zTXNRrhHBPCuxL18%2Bh&X-Amz-Signature=ed5698d2c3fb2a1d9ee94449ba98c5745b7b8f0c5273abbab80202a7d4bc90ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3MMFPVS%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGUKzT0SqLWtictSuTNFkEfIrngOanXPY2qU%2B%2FSwtm1dAiEArkxR7dWzJ9ssVO9bdT6xOD0P%2BCA%2FL5RK900VXud%2B6pIq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDN6Sk%2BIEBUv%2BWApFQCrcA76xI96MP2XZbOodjlAfjvfH7gH0NoFED90TbgXFLu%2BsQpomrxalu%2B4E72sAQ8S%2FgQKfAjty0bmMzDQyMxIGeBHHLzkDWeFzmd%2B3yWm1soh0zqW5C%2FgMvcFWmNaw4lq7gR2bIsDRfelyocAlBwdM4RqbPAEdfmxTFtpd9c6igzTgPUosBcZF8nglRmB5vwKoWUw3Bawb1vQxGAplVRxb00fkNsQ2eYQQJ8r878C4J6iJJ1mPpl1ahbLsUy7MOkEa%2FSWaAokJpDcXlyjqGdrvYMybwJ7WI2wfpu%2BzzcDa0gB4aZYU83C9SjJYw5trVvvBL9SrDlJ6VN2q8LiOwkYm1WaJkfQayNkgo5rxVpgt1sZm5neSGFHhwx8cz%2FmRlNRhEJM5RRzIqA6Y65kS6%2FDFVWni%2BhvdYE1Vojc33%2FBTYFy5QHQshjXQLxTO5IVXcZPwXrTTuoePnEqdUqqPBDN7b9AwY83nPZUb%2F2dv4VRHAAp5o0CrRbJP%2BLadBNsiRCiKkhFG6%2BUSPIMv9qQxmz1BFMH%2Bz5KqWPDOhaW0zWiOWBa1B2VUNmCjMxbYzWjOff%2BJmlLnwk1luCE4CpMcNGIeH1QIAnrK7j6da7Aj%2FYrfHtuX4UowIZoUgg5l3%2BFYMIv46MIGOqUB6tHQFcz%2BPVL151FkebeZrjlsgjeMVJ%2FjQPpTPs1ISJ0C%2BOcmogA84LoifiEd%2FafiwEnAI5vT1WDEbaJl%2F1EkbdUkdYmo%2FV7VDBntNUeWjXExojHli%2Bxh5CmoCH%2FZTfRZVi6WcuwVLXsq3J9J7s0a9aiHAjpNN0lZ%2BmuPBEFYzxUH5Gqoo5yu7qQeR36FXC8l3O57Htlol7zTXNRrhHBPCuxL18%2Bh&X-Amz-Signature=96da3b610828147917b9d2c8f999227b08c2f1cd74d8416625d993e68f885214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3MMFPVS%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGUKzT0SqLWtictSuTNFkEfIrngOanXPY2qU%2B%2FSwtm1dAiEArkxR7dWzJ9ssVO9bdT6xOD0P%2BCA%2FL5RK900VXud%2B6pIq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDN6Sk%2BIEBUv%2BWApFQCrcA76xI96MP2XZbOodjlAfjvfH7gH0NoFED90TbgXFLu%2BsQpomrxalu%2B4E72sAQ8S%2FgQKfAjty0bmMzDQyMxIGeBHHLzkDWeFzmd%2B3yWm1soh0zqW5C%2FgMvcFWmNaw4lq7gR2bIsDRfelyocAlBwdM4RqbPAEdfmxTFtpd9c6igzTgPUosBcZF8nglRmB5vwKoWUw3Bawb1vQxGAplVRxb00fkNsQ2eYQQJ8r878C4J6iJJ1mPpl1ahbLsUy7MOkEa%2FSWaAokJpDcXlyjqGdrvYMybwJ7WI2wfpu%2BzzcDa0gB4aZYU83C9SjJYw5trVvvBL9SrDlJ6VN2q8LiOwkYm1WaJkfQayNkgo5rxVpgt1sZm5neSGFHhwx8cz%2FmRlNRhEJM5RRzIqA6Y65kS6%2FDFVWni%2BhvdYE1Vojc33%2FBTYFy5QHQshjXQLxTO5IVXcZPwXrTTuoePnEqdUqqPBDN7b9AwY83nPZUb%2F2dv4VRHAAp5o0CrRbJP%2BLadBNsiRCiKkhFG6%2BUSPIMv9qQxmz1BFMH%2Bz5KqWPDOhaW0zWiOWBa1B2VUNmCjMxbYzWjOff%2BJmlLnwk1luCE4CpMcNGIeH1QIAnrK7j6da7Aj%2FYrfHtuX4UowIZoUgg5l3%2BFYMIv46MIGOqUB6tHQFcz%2BPVL151FkebeZrjlsgjeMVJ%2FjQPpTPs1ISJ0C%2BOcmogA84LoifiEd%2FafiwEnAI5vT1WDEbaJl%2F1EkbdUkdYmo%2FV7VDBntNUeWjXExojHli%2Bxh5CmoCH%2FZTfRZVi6WcuwVLXsq3J9J7s0a9aiHAjpNN0lZ%2BmuPBEFYzxUH5Gqoo5yu7qQeR36FXC8l3O57Htlol7zTXNRrhHBPCuxL18%2Bh&X-Amz-Signature=df181f25e6320f3f0595a65b69c0ccc5551c472ac7f9925b450d41737a61da77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3MMFPVS%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGUKzT0SqLWtictSuTNFkEfIrngOanXPY2qU%2B%2FSwtm1dAiEArkxR7dWzJ9ssVO9bdT6xOD0P%2BCA%2FL5RK900VXud%2B6pIq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDN6Sk%2BIEBUv%2BWApFQCrcA76xI96MP2XZbOodjlAfjvfH7gH0NoFED90TbgXFLu%2BsQpomrxalu%2B4E72sAQ8S%2FgQKfAjty0bmMzDQyMxIGeBHHLzkDWeFzmd%2B3yWm1soh0zqW5C%2FgMvcFWmNaw4lq7gR2bIsDRfelyocAlBwdM4RqbPAEdfmxTFtpd9c6igzTgPUosBcZF8nglRmB5vwKoWUw3Bawb1vQxGAplVRxb00fkNsQ2eYQQJ8r878C4J6iJJ1mPpl1ahbLsUy7MOkEa%2FSWaAokJpDcXlyjqGdrvYMybwJ7WI2wfpu%2BzzcDa0gB4aZYU83C9SjJYw5trVvvBL9SrDlJ6VN2q8LiOwkYm1WaJkfQayNkgo5rxVpgt1sZm5neSGFHhwx8cz%2FmRlNRhEJM5RRzIqA6Y65kS6%2FDFVWni%2BhvdYE1Vojc33%2FBTYFy5QHQshjXQLxTO5IVXcZPwXrTTuoePnEqdUqqPBDN7b9AwY83nPZUb%2F2dv4VRHAAp5o0CrRbJP%2BLadBNsiRCiKkhFG6%2BUSPIMv9qQxmz1BFMH%2Bz5KqWPDOhaW0zWiOWBa1B2VUNmCjMxbYzWjOff%2BJmlLnwk1luCE4CpMcNGIeH1QIAnrK7j6da7Aj%2FYrfHtuX4UowIZoUgg5l3%2BFYMIv46MIGOqUB6tHQFcz%2BPVL151FkebeZrjlsgjeMVJ%2FjQPpTPs1ISJ0C%2BOcmogA84LoifiEd%2FafiwEnAI5vT1WDEbaJl%2F1EkbdUkdYmo%2FV7VDBntNUeWjXExojHli%2Bxh5CmoCH%2FZTfRZVi6WcuwVLXsq3J9J7s0a9aiHAjpNN0lZ%2BmuPBEFYzxUH5Gqoo5yu7qQeR36FXC8l3O57Htlol7zTXNRrhHBPCuxL18%2Bh&X-Amz-Signature=1a16563e8d0b961b9e940ba87d1bd2d3dc84c9bd4e523d67264c6565cfb1f9d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
