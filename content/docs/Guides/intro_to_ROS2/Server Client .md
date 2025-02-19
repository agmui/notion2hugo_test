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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SUIEZOX%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGdIrZ9SHzeIaAOdB%2Bil0wsN1lE97FSTOTkPcT1f9FbAAiEAl0OhekuFkrsPB1JOP5ijPzBZRc2TfPw02Cd%2F7jUyGxMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOEEDh0hJRjSG2xQ7CrcA5DuZNmHq9ov7ru0%2F9WH6cyBH%2FOnvkPsNSmSUWiLYGtA6csfqBk6yUW3FGlqUml%2BulVzfIwb9eFUjNJn08WAkG1hDQlUzZihaBoYES83fhWNAKYxnvrXGld6Wor%2B0Fp3wE3W13MEzo%2FCr1vH1PRA22yGuHK8%2BPdad2CBxXRwsTEsaoj6rO57ihurt207HJCHXI%2FkKMQloG7hYzurVQo5r10ZNKPTitprszRDO6d8xzzWE2%2FcSFx5THvpcGk6tMLXuFRV6hSc4446xsh028bwYS2X%2BxlzRsnI9FvYDXvCId5BHnrXdeRe%2Bt%2FjNMF5xatXs3JwPnEhzL0613l6GgG%2FFUxo968ktOQNrNAXkC%2F%2BixeRGEL469KeQibOdeop4oKJ4xEXFm8Qj0bywwC8lBI9w0NeXkXf51%2B31UpCPp6nOoBsagbYFOUe%2BbKriCATKp0BxaUbvrUuuG9sDie4pdjhhDfKvbQ5fb3JE5PEl5j22ba%2BCeTbQFsE589j6vHE7KrhP7sa16XADX%2FCxFsbdktyzd4sSC5WtJc6IASQ4TqlXA%2BUkfT7TMYWqH%2FoBlM6tMNs6RnzM%2B8Cdw5Z0RpLaSzLO3e5hmgiHQmj6X2R9HniRqPtmGB4jP4kWh%2BiatU9MMSG1b0GOqUBzPTBdHWWzzzSNIDuI4%2FRn8emlJW0Sbf0UslFBh32vRFKLzzLbFaqaYQ%2F5KukALKKtYCXwsLxbkUyJyr5GmUHjLtumPtZpwAZDNofK%2FbTPw6nhFrBl%2FYvCkPp59Y2amM1XwWpTD0s1SzDhksqFM6I6SFNiclNFVkFikSreNE%2F8A849VK95LPSZKmhaE0jzr%2Fae2kTVx2sSo6LqQIqd2C9iyemqYF4&X-Amz-Signature=48cfa55422d79078a451ea7ee9fd0851767be542d2e0950b663dc4b74c7d8736&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SUIEZOX%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGdIrZ9SHzeIaAOdB%2Bil0wsN1lE97FSTOTkPcT1f9FbAAiEAl0OhekuFkrsPB1JOP5ijPzBZRc2TfPw02Cd%2F7jUyGxMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOEEDh0hJRjSG2xQ7CrcA5DuZNmHq9ov7ru0%2F9WH6cyBH%2FOnvkPsNSmSUWiLYGtA6csfqBk6yUW3FGlqUml%2BulVzfIwb9eFUjNJn08WAkG1hDQlUzZihaBoYES83fhWNAKYxnvrXGld6Wor%2B0Fp3wE3W13MEzo%2FCr1vH1PRA22yGuHK8%2BPdad2CBxXRwsTEsaoj6rO57ihurt207HJCHXI%2FkKMQloG7hYzurVQo5r10ZNKPTitprszRDO6d8xzzWE2%2FcSFx5THvpcGk6tMLXuFRV6hSc4446xsh028bwYS2X%2BxlzRsnI9FvYDXvCId5BHnrXdeRe%2Bt%2FjNMF5xatXs3JwPnEhzL0613l6GgG%2FFUxo968ktOQNrNAXkC%2F%2BixeRGEL469KeQibOdeop4oKJ4xEXFm8Qj0bywwC8lBI9w0NeXkXf51%2B31UpCPp6nOoBsagbYFOUe%2BbKriCATKp0BxaUbvrUuuG9sDie4pdjhhDfKvbQ5fb3JE5PEl5j22ba%2BCeTbQFsE589j6vHE7KrhP7sa16XADX%2FCxFsbdktyzd4sSC5WtJc6IASQ4TqlXA%2BUkfT7TMYWqH%2FoBlM6tMNs6RnzM%2B8Cdw5Z0RpLaSzLO3e5hmgiHQmj6X2R9HniRqPtmGB4jP4kWh%2BiatU9MMSG1b0GOqUBzPTBdHWWzzzSNIDuI4%2FRn8emlJW0Sbf0UslFBh32vRFKLzzLbFaqaYQ%2F5KukALKKtYCXwsLxbkUyJyr5GmUHjLtumPtZpwAZDNofK%2FbTPw6nhFrBl%2FYvCkPp59Y2amM1XwWpTD0s1SzDhksqFM6I6SFNiclNFVkFikSreNE%2F8A849VK95LPSZKmhaE0jzr%2Fae2kTVx2sSo6LqQIqd2C9iyemqYF4&X-Amz-Signature=435696635d311bf65e91e4ff16b4b5bd9cf4fe95abc4202821eb37bf7b2cedf5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SUIEZOX%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGdIrZ9SHzeIaAOdB%2Bil0wsN1lE97FSTOTkPcT1f9FbAAiEAl0OhekuFkrsPB1JOP5ijPzBZRc2TfPw02Cd%2F7jUyGxMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOEEDh0hJRjSG2xQ7CrcA5DuZNmHq9ov7ru0%2F9WH6cyBH%2FOnvkPsNSmSUWiLYGtA6csfqBk6yUW3FGlqUml%2BulVzfIwb9eFUjNJn08WAkG1hDQlUzZihaBoYES83fhWNAKYxnvrXGld6Wor%2B0Fp3wE3W13MEzo%2FCr1vH1PRA22yGuHK8%2BPdad2CBxXRwsTEsaoj6rO57ihurt207HJCHXI%2FkKMQloG7hYzurVQo5r10ZNKPTitprszRDO6d8xzzWE2%2FcSFx5THvpcGk6tMLXuFRV6hSc4446xsh028bwYS2X%2BxlzRsnI9FvYDXvCId5BHnrXdeRe%2Bt%2FjNMF5xatXs3JwPnEhzL0613l6GgG%2FFUxo968ktOQNrNAXkC%2F%2BixeRGEL469KeQibOdeop4oKJ4xEXFm8Qj0bywwC8lBI9w0NeXkXf51%2B31UpCPp6nOoBsagbYFOUe%2BbKriCATKp0BxaUbvrUuuG9sDie4pdjhhDfKvbQ5fb3JE5PEl5j22ba%2BCeTbQFsE589j6vHE7KrhP7sa16XADX%2FCxFsbdktyzd4sSC5WtJc6IASQ4TqlXA%2BUkfT7TMYWqH%2FoBlM6tMNs6RnzM%2B8Cdw5Z0RpLaSzLO3e5hmgiHQmj6X2R9HniRqPtmGB4jP4kWh%2BiatU9MMSG1b0GOqUBzPTBdHWWzzzSNIDuI4%2FRn8emlJW0Sbf0UslFBh32vRFKLzzLbFaqaYQ%2F5KukALKKtYCXwsLxbkUyJyr5GmUHjLtumPtZpwAZDNofK%2FbTPw6nhFrBl%2FYvCkPp59Y2amM1XwWpTD0s1SzDhksqFM6I6SFNiclNFVkFikSreNE%2F8A849VK95LPSZKmhaE0jzr%2Fae2kTVx2sSo6LqQIqd2C9iyemqYF4&X-Amz-Signature=62c421d2dac5f348ad3e96a08a2877bb6569ecc0c41a11c5a934265d164bfba1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SUIEZOX%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGdIrZ9SHzeIaAOdB%2Bil0wsN1lE97FSTOTkPcT1f9FbAAiEAl0OhekuFkrsPB1JOP5ijPzBZRc2TfPw02Cd%2F7jUyGxMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOEEDh0hJRjSG2xQ7CrcA5DuZNmHq9ov7ru0%2F9WH6cyBH%2FOnvkPsNSmSUWiLYGtA6csfqBk6yUW3FGlqUml%2BulVzfIwb9eFUjNJn08WAkG1hDQlUzZihaBoYES83fhWNAKYxnvrXGld6Wor%2B0Fp3wE3W13MEzo%2FCr1vH1PRA22yGuHK8%2BPdad2CBxXRwsTEsaoj6rO57ihurt207HJCHXI%2FkKMQloG7hYzurVQo5r10ZNKPTitprszRDO6d8xzzWE2%2FcSFx5THvpcGk6tMLXuFRV6hSc4446xsh028bwYS2X%2BxlzRsnI9FvYDXvCId5BHnrXdeRe%2Bt%2FjNMF5xatXs3JwPnEhzL0613l6GgG%2FFUxo968ktOQNrNAXkC%2F%2BixeRGEL469KeQibOdeop4oKJ4xEXFm8Qj0bywwC8lBI9w0NeXkXf51%2B31UpCPp6nOoBsagbYFOUe%2BbKriCATKp0BxaUbvrUuuG9sDie4pdjhhDfKvbQ5fb3JE5PEl5j22ba%2BCeTbQFsE589j6vHE7KrhP7sa16XADX%2FCxFsbdktyzd4sSC5WtJc6IASQ4TqlXA%2BUkfT7TMYWqH%2FoBlM6tMNs6RnzM%2B8Cdw5Z0RpLaSzLO3e5hmgiHQmj6X2R9HniRqPtmGB4jP4kWh%2BiatU9MMSG1b0GOqUBzPTBdHWWzzzSNIDuI4%2FRn8emlJW0Sbf0UslFBh32vRFKLzzLbFaqaYQ%2F5KukALKKtYCXwsLxbkUyJyr5GmUHjLtumPtZpwAZDNofK%2FbTPw6nhFrBl%2FYvCkPp59Y2amM1XwWpTD0s1SzDhksqFM6I6SFNiclNFVkFikSreNE%2F8A849VK95LPSZKmhaE0jzr%2Fae2kTVx2sSo6LqQIqd2C9iyemqYF4&X-Amz-Signature=dbaecb512fdfec1efc3c253e0a2b2952492465c0e36c49143fb27a6285c909e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SUIEZOX%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGdIrZ9SHzeIaAOdB%2Bil0wsN1lE97FSTOTkPcT1f9FbAAiEAl0OhekuFkrsPB1JOP5ijPzBZRc2TfPw02Cd%2F7jUyGxMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOEEDh0hJRjSG2xQ7CrcA5DuZNmHq9ov7ru0%2F9WH6cyBH%2FOnvkPsNSmSUWiLYGtA6csfqBk6yUW3FGlqUml%2BulVzfIwb9eFUjNJn08WAkG1hDQlUzZihaBoYES83fhWNAKYxnvrXGld6Wor%2B0Fp3wE3W13MEzo%2FCr1vH1PRA22yGuHK8%2BPdad2CBxXRwsTEsaoj6rO57ihurt207HJCHXI%2FkKMQloG7hYzurVQo5r10ZNKPTitprszRDO6d8xzzWE2%2FcSFx5THvpcGk6tMLXuFRV6hSc4446xsh028bwYS2X%2BxlzRsnI9FvYDXvCId5BHnrXdeRe%2Bt%2FjNMF5xatXs3JwPnEhzL0613l6GgG%2FFUxo968ktOQNrNAXkC%2F%2BixeRGEL469KeQibOdeop4oKJ4xEXFm8Qj0bywwC8lBI9w0NeXkXf51%2B31UpCPp6nOoBsagbYFOUe%2BbKriCATKp0BxaUbvrUuuG9sDie4pdjhhDfKvbQ5fb3JE5PEl5j22ba%2BCeTbQFsE589j6vHE7KrhP7sa16XADX%2FCxFsbdktyzd4sSC5WtJc6IASQ4TqlXA%2BUkfT7TMYWqH%2FoBlM6tMNs6RnzM%2B8Cdw5Z0RpLaSzLO3e5hmgiHQmj6X2R9HniRqPtmGB4jP4kWh%2BiatU9MMSG1b0GOqUBzPTBdHWWzzzSNIDuI4%2FRn8emlJW0Sbf0UslFBh32vRFKLzzLbFaqaYQ%2F5KukALKKtYCXwsLxbkUyJyr5GmUHjLtumPtZpwAZDNofK%2FbTPw6nhFrBl%2FYvCkPp59Y2amM1XwWpTD0s1SzDhksqFM6I6SFNiclNFVkFikSreNE%2F8A849VK95LPSZKmhaE0jzr%2Fae2kTVx2sSo6LqQIqd2C9iyemqYF4&X-Amz-Signature=f063f920d59d5b0a29cebe9776cf6ca04cf893a08735bb1f699234d46ae68da9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
