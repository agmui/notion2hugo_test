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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6ALW5R6%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmILT3BAyyMvw0Td%2BTEGMMw1QZYSCvcNcPAPQVSCZzZAiAFJhDM%2F7KQ6MJk9bePlp72CCzUqGFMRpQt25zqO0lKgyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMGhcwEv9nAxWoMEKFKtwDAWXvXvkfh97i3GofvCyHFURNfW02bVC3kUtEfak%2FM3OxEhClG1Q9gjKOU319BLFUeQoctQCoA1ovXN%2FNs%2B2pScotnHoy3H6eZA%2BN063SdEPeYzEoxjGN%2FBz4%2BUnYi5rDKzxav4KlkkW0RXtzOjCSVc%2F1ZbMkn4a6eumNifKvU3GF5jJxf6WbeH%2FVcjoVuT%2Fhv1577D3CS3uyI45TzT%2BSLZy6jJC%2B0r%2BB2e1e3rr7wSpRexzv339pjfsjbw2Al77dOkx4iaYUya4avUYUOlyc%2F2G5AA8qDvAkGfBjwbjwIsVHT4f9eh%2FC1BBRMUlkkuTyHHHfUM5JA0A2ssEJUccmFYa%2BOk3fmRxCW7hQ3%2FrUzCLh5Vzu%2BMLf9aiG8ipi2pvEuBE7G7hZNH3S0KrRg4mzp08rkhT7YvzPLfNuS9gOxKa70aCvZGxcDXP8bF6apx8flktb3ynS2gXGUfAIGQOHc5hp6pbMoi%2F4A02lnCqCL9Rrsx72LoyBFhyOkxtWAoZTSsoKOcF4eRD6mDaWwcV1xGNBeWkFz4iuUz5jnTHqLBL%2BPNQWInpoVuE8Vx1nrqpxYO%2BlimWy2UNOy%2Fl4yLI4h%2FAAoaU%2FFX69ExSFXS84pj8F6y5z1UZ2voYcMSIw%2FbPpwAY6pgEdfbchPV06RMY7SvR67THQtE1nPX7Zj%2F8VUfJCMUvmdWvmH%2BTwn1rmsuTnsZac2WErIEKKlL%2BQyusXuUGVAs2Y7YYWZSlkaP0gHMoNvrm4wypxJczjoKEZRRDqpfu6QgWXzVHg0v48JDBOi8g5ZGNjZadEBpc2C8cHCSLPh5KxaxUcMdYrYTYH6sZqItyoovesfsScDiC6KGidee1Ui0rpZ9fTOi0x&X-Amz-Signature=d2fae168c924185e7bd7c958b51d15ee35027fd6de3e8123dbe153aea2f8cc91&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6ALW5R6%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmILT3BAyyMvw0Td%2BTEGMMw1QZYSCvcNcPAPQVSCZzZAiAFJhDM%2F7KQ6MJk9bePlp72CCzUqGFMRpQt25zqO0lKgyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMGhcwEv9nAxWoMEKFKtwDAWXvXvkfh97i3GofvCyHFURNfW02bVC3kUtEfak%2FM3OxEhClG1Q9gjKOU319BLFUeQoctQCoA1ovXN%2FNs%2B2pScotnHoy3H6eZA%2BN063SdEPeYzEoxjGN%2FBz4%2BUnYi5rDKzxav4KlkkW0RXtzOjCSVc%2F1ZbMkn4a6eumNifKvU3GF5jJxf6WbeH%2FVcjoVuT%2Fhv1577D3CS3uyI45TzT%2BSLZy6jJC%2B0r%2BB2e1e3rr7wSpRexzv339pjfsjbw2Al77dOkx4iaYUya4avUYUOlyc%2F2G5AA8qDvAkGfBjwbjwIsVHT4f9eh%2FC1BBRMUlkkuTyHHHfUM5JA0A2ssEJUccmFYa%2BOk3fmRxCW7hQ3%2FrUzCLh5Vzu%2BMLf9aiG8ipi2pvEuBE7G7hZNH3S0KrRg4mzp08rkhT7YvzPLfNuS9gOxKa70aCvZGxcDXP8bF6apx8flktb3ynS2gXGUfAIGQOHc5hp6pbMoi%2F4A02lnCqCL9Rrsx72LoyBFhyOkxtWAoZTSsoKOcF4eRD6mDaWwcV1xGNBeWkFz4iuUz5jnTHqLBL%2BPNQWInpoVuE8Vx1nrqpxYO%2BlimWy2UNOy%2Fl4yLI4h%2FAAoaU%2FFX69ExSFXS84pj8F6y5z1UZ2voYcMSIw%2FbPpwAY6pgEdfbchPV06RMY7SvR67THQtE1nPX7Zj%2F8VUfJCMUvmdWvmH%2BTwn1rmsuTnsZac2WErIEKKlL%2BQyusXuUGVAs2Y7YYWZSlkaP0gHMoNvrm4wypxJczjoKEZRRDqpfu6QgWXzVHg0v48JDBOi8g5ZGNjZadEBpc2C8cHCSLPh5KxaxUcMdYrYTYH6sZqItyoovesfsScDiC6KGidee1Ui0rpZ9fTOi0x&X-Amz-Signature=bea8ec4ab3cb29bcc15aaa346d3c235962421025b036ccfee3f63e67ef42d2f4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6ALW5R6%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmILT3BAyyMvw0Td%2BTEGMMw1QZYSCvcNcPAPQVSCZzZAiAFJhDM%2F7KQ6MJk9bePlp72CCzUqGFMRpQt25zqO0lKgyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMGhcwEv9nAxWoMEKFKtwDAWXvXvkfh97i3GofvCyHFURNfW02bVC3kUtEfak%2FM3OxEhClG1Q9gjKOU319BLFUeQoctQCoA1ovXN%2FNs%2B2pScotnHoy3H6eZA%2BN063SdEPeYzEoxjGN%2FBz4%2BUnYi5rDKzxav4KlkkW0RXtzOjCSVc%2F1ZbMkn4a6eumNifKvU3GF5jJxf6WbeH%2FVcjoVuT%2Fhv1577D3CS3uyI45TzT%2BSLZy6jJC%2B0r%2BB2e1e3rr7wSpRexzv339pjfsjbw2Al77dOkx4iaYUya4avUYUOlyc%2F2G5AA8qDvAkGfBjwbjwIsVHT4f9eh%2FC1BBRMUlkkuTyHHHfUM5JA0A2ssEJUccmFYa%2BOk3fmRxCW7hQ3%2FrUzCLh5Vzu%2BMLf9aiG8ipi2pvEuBE7G7hZNH3S0KrRg4mzp08rkhT7YvzPLfNuS9gOxKa70aCvZGxcDXP8bF6apx8flktb3ynS2gXGUfAIGQOHc5hp6pbMoi%2F4A02lnCqCL9Rrsx72LoyBFhyOkxtWAoZTSsoKOcF4eRD6mDaWwcV1xGNBeWkFz4iuUz5jnTHqLBL%2BPNQWInpoVuE8Vx1nrqpxYO%2BlimWy2UNOy%2Fl4yLI4h%2FAAoaU%2FFX69ExSFXS84pj8F6y5z1UZ2voYcMSIw%2FbPpwAY6pgEdfbchPV06RMY7SvR67THQtE1nPX7Zj%2F8VUfJCMUvmdWvmH%2BTwn1rmsuTnsZac2WErIEKKlL%2BQyusXuUGVAs2Y7YYWZSlkaP0gHMoNvrm4wypxJczjoKEZRRDqpfu6QgWXzVHg0v48JDBOi8g5ZGNjZadEBpc2C8cHCSLPh5KxaxUcMdYrYTYH6sZqItyoovesfsScDiC6KGidee1Ui0rpZ9fTOi0x&X-Amz-Signature=2bdb2376c3036b72c4263acb25b734af8050bea4d6cc5b0f6c05441f29fb944d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6ALW5R6%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmILT3BAyyMvw0Td%2BTEGMMw1QZYSCvcNcPAPQVSCZzZAiAFJhDM%2F7KQ6MJk9bePlp72CCzUqGFMRpQt25zqO0lKgyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMGhcwEv9nAxWoMEKFKtwDAWXvXvkfh97i3GofvCyHFURNfW02bVC3kUtEfak%2FM3OxEhClG1Q9gjKOU319BLFUeQoctQCoA1ovXN%2FNs%2B2pScotnHoy3H6eZA%2BN063SdEPeYzEoxjGN%2FBz4%2BUnYi5rDKzxav4KlkkW0RXtzOjCSVc%2F1ZbMkn4a6eumNifKvU3GF5jJxf6WbeH%2FVcjoVuT%2Fhv1577D3CS3uyI45TzT%2BSLZy6jJC%2B0r%2BB2e1e3rr7wSpRexzv339pjfsjbw2Al77dOkx4iaYUya4avUYUOlyc%2F2G5AA8qDvAkGfBjwbjwIsVHT4f9eh%2FC1BBRMUlkkuTyHHHfUM5JA0A2ssEJUccmFYa%2BOk3fmRxCW7hQ3%2FrUzCLh5Vzu%2BMLf9aiG8ipi2pvEuBE7G7hZNH3S0KrRg4mzp08rkhT7YvzPLfNuS9gOxKa70aCvZGxcDXP8bF6apx8flktb3ynS2gXGUfAIGQOHc5hp6pbMoi%2F4A02lnCqCL9Rrsx72LoyBFhyOkxtWAoZTSsoKOcF4eRD6mDaWwcV1xGNBeWkFz4iuUz5jnTHqLBL%2BPNQWInpoVuE8Vx1nrqpxYO%2BlimWy2UNOy%2Fl4yLI4h%2FAAoaU%2FFX69ExSFXS84pj8F6y5z1UZ2voYcMSIw%2FbPpwAY6pgEdfbchPV06RMY7SvR67THQtE1nPX7Zj%2F8VUfJCMUvmdWvmH%2BTwn1rmsuTnsZac2WErIEKKlL%2BQyusXuUGVAs2Y7YYWZSlkaP0gHMoNvrm4wypxJczjoKEZRRDqpfu6QgWXzVHg0v48JDBOi8g5ZGNjZadEBpc2C8cHCSLPh5KxaxUcMdYrYTYH6sZqItyoovesfsScDiC6KGidee1Ui0rpZ9fTOi0x&X-Amz-Signature=0243d66ec800d851dac34c67c5fab619c798c8e767d9bd07f424587a050197dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6ALW5R6%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmILT3BAyyMvw0Td%2BTEGMMw1QZYSCvcNcPAPQVSCZzZAiAFJhDM%2F7KQ6MJk9bePlp72CCzUqGFMRpQt25zqO0lKgyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMGhcwEv9nAxWoMEKFKtwDAWXvXvkfh97i3GofvCyHFURNfW02bVC3kUtEfak%2FM3OxEhClG1Q9gjKOU319BLFUeQoctQCoA1ovXN%2FNs%2B2pScotnHoy3H6eZA%2BN063SdEPeYzEoxjGN%2FBz4%2BUnYi5rDKzxav4KlkkW0RXtzOjCSVc%2F1ZbMkn4a6eumNifKvU3GF5jJxf6WbeH%2FVcjoVuT%2Fhv1577D3CS3uyI45TzT%2BSLZy6jJC%2B0r%2BB2e1e3rr7wSpRexzv339pjfsjbw2Al77dOkx4iaYUya4avUYUOlyc%2F2G5AA8qDvAkGfBjwbjwIsVHT4f9eh%2FC1BBRMUlkkuTyHHHfUM5JA0A2ssEJUccmFYa%2BOk3fmRxCW7hQ3%2FrUzCLh5Vzu%2BMLf9aiG8ipi2pvEuBE7G7hZNH3S0KrRg4mzp08rkhT7YvzPLfNuS9gOxKa70aCvZGxcDXP8bF6apx8flktb3ynS2gXGUfAIGQOHc5hp6pbMoi%2F4A02lnCqCL9Rrsx72LoyBFhyOkxtWAoZTSsoKOcF4eRD6mDaWwcV1xGNBeWkFz4iuUz5jnTHqLBL%2BPNQWInpoVuE8Vx1nrqpxYO%2BlimWy2UNOy%2Fl4yLI4h%2FAAoaU%2FFX69ExSFXS84pj8F6y5z1UZ2voYcMSIw%2FbPpwAY6pgEdfbchPV06RMY7SvR67THQtE1nPX7Zj%2F8VUfJCMUvmdWvmH%2BTwn1rmsuTnsZac2WErIEKKlL%2BQyusXuUGVAs2Y7YYWZSlkaP0gHMoNvrm4wypxJczjoKEZRRDqpfu6QgWXzVHg0v48JDBOi8g5ZGNjZadEBpc2C8cHCSLPh5KxaxUcMdYrYTYH6sZqItyoovesfsScDiC6KGidee1Ui0rpZ9fTOi0x&X-Amz-Signature=d8b2c21c2e2ff8ffa78878fd68854e830d726108c132ed676399d0ede181ec1e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
