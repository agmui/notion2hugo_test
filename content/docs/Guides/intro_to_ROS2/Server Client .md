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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7OWZZEG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIGmbV0TwHo3FPaHBAKl0hq7anQNk68dz2eRBSgBgkL1ZAiEAiA80enWpc4MWlpVeDd5nZBwV3x5B%2FE6MjZmBxasamYQqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOEivXpPiZbO%2BRcgpCrcA3l7yQcP2Vk%2Fa1nY1ScPf8b02OXJJlcHxWPUt1cSDvyAqOOLUM42KoxR2T8W51yCksNBt1U3XsD2fecDaYItFRk3xq0b7NvXOrFq61Wm5erI4Dkso8qZ4VyBtTDXLq%2Fciu%2BLtNl5JL4JVCbio2nwafYordd0p7KLI2lc6VQOUT99Ww%2BcpYKTF6V7%2Bp9WcqhuejcwL1T38l0Z1MQ%2FpDzWHmgVanhuj%2B8t0e50HicnLqpg9J5sCXwQO0EZtc9X9Lc%2BjJsFWy5Z9DNQXEomrmINMR2bLKkbIaD4NnAMRiv%2BaaYowXr8mVH2siLxqyYDZv9ONrTcH6lLUEk%2Bax4VTfZUqD1KZdadeYJkiOm%2FnNUNvQh%2BA2umTRG6mWRFWWm6a6FF%2BH3z84cieMzY8XtTftONhxWvmhRDJBl6XPD5X9l%2FEhsaQbi6bxUEECHqU016T3%2Fa4aTmlJdK7gObrq1D7WR%2BGH0FbqUeKxpL1oM2w%2F7mRMUPpJO6EtLTNX3VTuxH31XNOjNbO2jhtcfgsAj%2F3DGlW30gxjlnj6zSqBEjEsAP6q8Utt48dJvdtFfYYJivR7zEfX1ie3yOw1HStBetb5wBD%2BULJZe1zCphkfKAabjlVbdfk%2FIoxHBgpQSc7R83MMXQsr8GOqUBlzVl9WeAVYB84G6WfTmEhlKRykblvmsxO2J%2FENcapSmMa66o5ryZQk%2FXftHwpI035vKH4Ikn6XDrM7BExpGXNJD4lc22TywYj64IIjFHN8m1viL%2FjjouIHHCBVOVY62PFclfCdRHPJ%2FPQIhh7Sv842CvljJCVL%2Bto5TprvageshEM87%2Fpm42uROA41bFJms78ajUM4phQNR%2BpZxGwm7b7Qg2Olpx&X-Amz-Signature=3de44c0bf076ccabd22e8e1099460341d6ebfd6023af5b7fe7b54ba3ebcd15e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7OWZZEG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIGmbV0TwHo3FPaHBAKl0hq7anQNk68dz2eRBSgBgkL1ZAiEAiA80enWpc4MWlpVeDd5nZBwV3x5B%2FE6MjZmBxasamYQqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOEivXpPiZbO%2BRcgpCrcA3l7yQcP2Vk%2Fa1nY1ScPf8b02OXJJlcHxWPUt1cSDvyAqOOLUM42KoxR2T8W51yCksNBt1U3XsD2fecDaYItFRk3xq0b7NvXOrFq61Wm5erI4Dkso8qZ4VyBtTDXLq%2Fciu%2BLtNl5JL4JVCbio2nwafYordd0p7KLI2lc6VQOUT99Ww%2BcpYKTF6V7%2Bp9WcqhuejcwL1T38l0Z1MQ%2FpDzWHmgVanhuj%2B8t0e50HicnLqpg9J5sCXwQO0EZtc9X9Lc%2BjJsFWy5Z9DNQXEomrmINMR2bLKkbIaD4NnAMRiv%2BaaYowXr8mVH2siLxqyYDZv9ONrTcH6lLUEk%2Bax4VTfZUqD1KZdadeYJkiOm%2FnNUNvQh%2BA2umTRG6mWRFWWm6a6FF%2BH3z84cieMzY8XtTftONhxWvmhRDJBl6XPD5X9l%2FEhsaQbi6bxUEECHqU016T3%2Fa4aTmlJdK7gObrq1D7WR%2BGH0FbqUeKxpL1oM2w%2F7mRMUPpJO6EtLTNX3VTuxH31XNOjNbO2jhtcfgsAj%2F3DGlW30gxjlnj6zSqBEjEsAP6q8Utt48dJvdtFfYYJivR7zEfX1ie3yOw1HStBetb5wBD%2BULJZe1zCphkfKAabjlVbdfk%2FIoxHBgpQSc7R83MMXQsr8GOqUBlzVl9WeAVYB84G6WfTmEhlKRykblvmsxO2J%2FENcapSmMa66o5ryZQk%2FXftHwpI035vKH4Ikn6XDrM7BExpGXNJD4lc22TywYj64IIjFHN8m1viL%2FjjouIHHCBVOVY62PFclfCdRHPJ%2FPQIhh7Sv842CvljJCVL%2Bto5TprvageshEM87%2Fpm42uROA41bFJms78ajUM4phQNR%2BpZxGwm7b7Qg2Olpx&X-Amz-Signature=59183e0fe69d9fc477553b48eae480830a3c6743b05ccf5cc1032c1fdbbe3409&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7OWZZEG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIGmbV0TwHo3FPaHBAKl0hq7anQNk68dz2eRBSgBgkL1ZAiEAiA80enWpc4MWlpVeDd5nZBwV3x5B%2FE6MjZmBxasamYQqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOEivXpPiZbO%2BRcgpCrcA3l7yQcP2Vk%2Fa1nY1ScPf8b02OXJJlcHxWPUt1cSDvyAqOOLUM42KoxR2T8W51yCksNBt1U3XsD2fecDaYItFRk3xq0b7NvXOrFq61Wm5erI4Dkso8qZ4VyBtTDXLq%2Fciu%2BLtNl5JL4JVCbio2nwafYordd0p7KLI2lc6VQOUT99Ww%2BcpYKTF6V7%2Bp9WcqhuejcwL1T38l0Z1MQ%2FpDzWHmgVanhuj%2B8t0e50HicnLqpg9J5sCXwQO0EZtc9X9Lc%2BjJsFWy5Z9DNQXEomrmINMR2bLKkbIaD4NnAMRiv%2BaaYowXr8mVH2siLxqyYDZv9ONrTcH6lLUEk%2Bax4VTfZUqD1KZdadeYJkiOm%2FnNUNvQh%2BA2umTRG6mWRFWWm6a6FF%2BH3z84cieMzY8XtTftONhxWvmhRDJBl6XPD5X9l%2FEhsaQbi6bxUEECHqU016T3%2Fa4aTmlJdK7gObrq1D7WR%2BGH0FbqUeKxpL1oM2w%2F7mRMUPpJO6EtLTNX3VTuxH31XNOjNbO2jhtcfgsAj%2F3DGlW30gxjlnj6zSqBEjEsAP6q8Utt48dJvdtFfYYJivR7zEfX1ie3yOw1HStBetb5wBD%2BULJZe1zCphkfKAabjlVbdfk%2FIoxHBgpQSc7R83MMXQsr8GOqUBlzVl9WeAVYB84G6WfTmEhlKRykblvmsxO2J%2FENcapSmMa66o5ryZQk%2FXftHwpI035vKH4Ikn6XDrM7BExpGXNJD4lc22TywYj64IIjFHN8m1viL%2FjjouIHHCBVOVY62PFclfCdRHPJ%2FPQIhh7Sv842CvljJCVL%2Bto5TprvageshEM87%2Fpm42uROA41bFJms78ajUM4phQNR%2BpZxGwm7b7Qg2Olpx&X-Amz-Signature=bcb560907ae113859ea292356d0190626354a8df9e63eab29ce6187038d17981&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7OWZZEG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIGmbV0TwHo3FPaHBAKl0hq7anQNk68dz2eRBSgBgkL1ZAiEAiA80enWpc4MWlpVeDd5nZBwV3x5B%2FE6MjZmBxasamYQqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOEivXpPiZbO%2BRcgpCrcA3l7yQcP2Vk%2Fa1nY1ScPf8b02OXJJlcHxWPUt1cSDvyAqOOLUM42KoxR2T8W51yCksNBt1U3XsD2fecDaYItFRk3xq0b7NvXOrFq61Wm5erI4Dkso8qZ4VyBtTDXLq%2Fciu%2BLtNl5JL4JVCbio2nwafYordd0p7KLI2lc6VQOUT99Ww%2BcpYKTF6V7%2Bp9WcqhuejcwL1T38l0Z1MQ%2FpDzWHmgVanhuj%2B8t0e50HicnLqpg9J5sCXwQO0EZtc9X9Lc%2BjJsFWy5Z9DNQXEomrmINMR2bLKkbIaD4NnAMRiv%2BaaYowXr8mVH2siLxqyYDZv9ONrTcH6lLUEk%2Bax4VTfZUqD1KZdadeYJkiOm%2FnNUNvQh%2BA2umTRG6mWRFWWm6a6FF%2BH3z84cieMzY8XtTftONhxWvmhRDJBl6XPD5X9l%2FEhsaQbi6bxUEECHqU016T3%2Fa4aTmlJdK7gObrq1D7WR%2BGH0FbqUeKxpL1oM2w%2F7mRMUPpJO6EtLTNX3VTuxH31XNOjNbO2jhtcfgsAj%2F3DGlW30gxjlnj6zSqBEjEsAP6q8Utt48dJvdtFfYYJivR7zEfX1ie3yOw1HStBetb5wBD%2BULJZe1zCphkfKAabjlVbdfk%2FIoxHBgpQSc7R83MMXQsr8GOqUBlzVl9WeAVYB84G6WfTmEhlKRykblvmsxO2J%2FENcapSmMa66o5ryZQk%2FXftHwpI035vKH4Ikn6XDrM7BExpGXNJD4lc22TywYj64IIjFHN8m1viL%2FjjouIHHCBVOVY62PFclfCdRHPJ%2FPQIhh7Sv842CvljJCVL%2Bto5TprvageshEM87%2Fpm42uROA41bFJms78ajUM4phQNR%2BpZxGwm7b7Qg2Olpx&X-Amz-Signature=5001b11736fab6870cd879ec6238e9d931371753161b71b36e8ad542d95ec8ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7OWZZEG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIGmbV0TwHo3FPaHBAKl0hq7anQNk68dz2eRBSgBgkL1ZAiEAiA80enWpc4MWlpVeDd5nZBwV3x5B%2FE6MjZmBxasamYQqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOEivXpPiZbO%2BRcgpCrcA3l7yQcP2Vk%2Fa1nY1ScPf8b02OXJJlcHxWPUt1cSDvyAqOOLUM42KoxR2T8W51yCksNBt1U3XsD2fecDaYItFRk3xq0b7NvXOrFq61Wm5erI4Dkso8qZ4VyBtTDXLq%2Fciu%2BLtNl5JL4JVCbio2nwafYordd0p7KLI2lc6VQOUT99Ww%2BcpYKTF6V7%2Bp9WcqhuejcwL1T38l0Z1MQ%2FpDzWHmgVanhuj%2B8t0e50HicnLqpg9J5sCXwQO0EZtc9X9Lc%2BjJsFWy5Z9DNQXEomrmINMR2bLKkbIaD4NnAMRiv%2BaaYowXr8mVH2siLxqyYDZv9ONrTcH6lLUEk%2Bax4VTfZUqD1KZdadeYJkiOm%2FnNUNvQh%2BA2umTRG6mWRFWWm6a6FF%2BH3z84cieMzY8XtTftONhxWvmhRDJBl6XPD5X9l%2FEhsaQbi6bxUEECHqU016T3%2Fa4aTmlJdK7gObrq1D7WR%2BGH0FbqUeKxpL1oM2w%2F7mRMUPpJO6EtLTNX3VTuxH31XNOjNbO2jhtcfgsAj%2F3DGlW30gxjlnj6zSqBEjEsAP6q8Utt48dJvdtFfYYJivR7zEfX1ie3yOw1HStBetb5wBD%2BULJZe1zCphkfKAabjlVbdfk%2FIoxHBgpQSc7R83MMXQsr8GOqUBlzVl9WeAVYB84G6WfTmEhlKRykblvmsxO2J%2FENcapSmMa66o5ryZQk%2FXftHwpI035vKH4Ikn6XDrM7BExpGXNJD4lc22TywYj64IIjFHN8m1viL%2FjjouIHHCBVOVY62PFclfCdRHPJ%2FPQIhh7Sv842CvljJCVL%2Bto5TprvageshEM87%2Fpm42uROA41bFJms78ajUM4phQNR%2BpZxGwm7b7Qg2Olpx&X-Amz-Signature=c9bd04347cd98d53d417ca9b485dd908ef13bca4af7bbc3b52294afac52cf414&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
