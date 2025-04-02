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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLV4I4ME%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIB6Vm78RKlZFxbuRcwcDzQDAH0SttoBDOiW%2FIBWPqL4%2BAiAMBy7dEDsAgYJCwokkW4TQWuR1Vh5ysiEK3rGD9vywjyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAk1I0FVB9MRYd0HIKtwDZph7nn%2BXAf2pCN84CTu6k%2FpqdouwAk0ETUc%2Beh%2B17Xm06kD0DKAKdRJDCV8kbDw3hzr3Y0nsAp8sJ4IDlaTVaIZy3emcTKirtlB7wr7NMG6ac2n1R2P%2FOkMB9tSg7tpzizRz24cjXH7EgegJWndRHsS8n%2BagFc1SIH4ZgcnWHHyxwbb0rEIDDqS1vuIoaktes3ZCs%2FaQ6Eqz7bvEvZY1MyIiDC3wBbytWkpboMSK2Sdz2YKCopDoUQ8oqYmTo6v54mrPPk5SEQBVzOP1HoGrCUTEM7YUbj%2FULsMCd7oKxEmdJba7lFRqOD0ZaBrLexhXqzCuuIx31ThWWotedEnSDv9C1%2BBhSzxh5TuniI24Xu0oK727%2B8%2FvvtE8vb%2BrtJcfQ4Xqn9TQwht3lP62UgQOtHyGbwCmUacn2cENoOwZktvlJNL2NfnJTheXkiNqset7Qm70bhcqyAgwgcJ0R%2B9yULyilnLZljL602l3YvKF6mlgd6zX43TI4PWPlIj0vH%2FNuGuyefxdMdLGy%2B9TTNtsnwtNL1uC6%2BdHCDZ7RGgv9VH45ZYQBH1HS6jAFdHRFIQGRcltSUSijk%2FOG5swxnGPNmhJNeXTCtWpOjlr5aERfjzxg603H5LFPf73e4cw3eizvwY6pgHVA66EauG9a0zGMsDZCZB8ZhlSf3%2BvLRpsrDUb%2FMPdYGudP%2FMEffrzRC%2BBag1g%2B5KLnQG5UH2qTXyh2M1CVbZ134P%2F%2BHW57JXXGusKHkhmtM9HNuiuboDrgocL1h%2Bze0h28HriOABvRzo38U6rVTmjXX5YmomRqPyH4BD%2FgNMIYJZuecDLBhfuvGp3YpPfqTPJHO0g7N9vsH3I5JOpmgHce73ODivR&X-Amz-Signature=89b0ef8e9fd0bc529fd3026e5535ae0a295ee646f2369a9526b2add7e06c392b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLV4I4ME%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIB6Vm78RKlZFxbuRcwcDzQDAH0SttoBDOiW%2FIBWPqL4%2BAiAMBy7dEDsAgYJCwokkW4TQWuR1Vh5ysiEK3rGD9vywjyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAk1I0FVB9MRYd0HIKtwDZph7nn%2BXAf2pCN84CTu6k%2FpqdouwAk0ETUc%2Beh%2B17Xm06kD0DKAKdRJDCV8kbDw3hzr3Y0nsAp8sJ4IDlaTVaIZy3emcTKirtlB7wr7NMG6ac2n1R2P%2FOkMB9tSg7tpzizRz24cjXH7EgegJWndRHsS8n%2BagFc1SIH4ZgcnWHHyxwbb0rEIDDqS1vuIoaktes3ZCs%2FaQ6Eqz7bvEvZY1MyIiDC3wBbytWkpboMSK2Sdz2YKCopDoUQ8oqYmTo6v54mrPPk5SEQBVzOP1HoGrCUTEM7YUbj%2FULsMCd7oKxEmdJba7lFRqOD0ZaBrLexhXqzCuuIx31ThWWotedEnSDv9C1%2BBhSzxh5TuniI24Xu0oK727%2B8%2FvvtE8vb%2BrtJcfQ4Xqn9TQwht3lP62UgQOtHyGbwCmUacn2cENoOwZktvlJNL2NfnJTheXkiNqset7Qm70bhcqyAgwgcJ0R%2B9yULyilnLZljL602l3YvKF6mlgd6zX43TI4PWPlIj0vH%2FNuGuyefxdMdLGy%2B9TTNtsnwtNL1uC6%2BdHCDZ7RGgv9VH45ZYQBH1HS6jAFdHRFIQGRcltSUSijk%2FOG5swxnGPNmhJNeXTCtWpOjlr5aERfjzxg603H5LFPf73e4cw3eizvwY6pgHVA66EauG9a0zGMsDZCZB8ZhlSf3%2BvLRpsrDUb%2FMPdYGudP%2FMEffrzRC%2BBag1g%2B5KLnQG5UH2qTXyh2M1CVbZ134P%2F%2BHW57JXXGusKHkhmtM9HNuiuboDrgocL1h%2Bze0h28HriOABvRzo38U6rVTmjXX5YmomRqPyH4BD%2FgNMIYJZuecDLBhfuvGp3YpPfqTPJHO0g7N9vsH3I5JOpmgHce73ODivR&X-Amz-Signature=9b01f3c4de08dad308005464b40ecceca7167fcdd493688ced99ec280a1ab6d5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLV4I4ME%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIB6Vm78RKlZFxbuRcwcDzQDAH0SttoBDOiW%2FIBWPqL4%2BAiAMBy7dEDsAgYJCwokkW4TQWuR1Vh5ysiEK3rGD9vywjyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAk1I0FVB9MRYd0HIKtwDZph7nn%2BXAf2pCN84CTu6k%2FpqdouwAk0ETUc%2Beh%2B17Xm06kD0DKAKdRJDCV8kbDw3hzr3Y0nsAp8sJ4IDlaTVaIZy3emcTKirtlB7wr7NMG6ac2n1R2P%2FOkMB9tSg7tpzizRz24cjXH7EgegJWndRHsS8n%2BagFc1SIH4ZgcnWHHyxwbb0rEIDDqS1vuIoaktes3ZCs%2FaQ6Eqz7bvEvZY1MyIiDC3wBbytWkpboMSK2Sdz2YKCopDoUQ8oqYmTo6v54mrPPk5SEQBVzOP1HoGrCUTEM7YUbj%2FULsMCd7oKxEmdJba7lFRqOD0ZaBrLexhXqzCuuIx31ThWWotedEnSDv9C1%2BBhSzxh5TuniI24Xu0oK727%2B8%2FvvtE8vb%2BrtJcfQ4Xqn9TQwht3lP62UgQOtHyGbwCmUacn2cENoOwZktvlJNL2NfnJTheXkiNqset7Qm70bhcqyAgwgcJ0R%2B9yULyilnLZljL602l3YvKF6mlgd6zX43TI4PWPlIj0vH%2FNuGuyefxdMdLGy%2B9TTNtsnwtNL1uC6%2BdHCDZ7RGgv9VH45ZYQBH1HS6jAFdHRFIQGRcltSUSijk%2FOG5swxnGPNmhJNeXTCtWpOjlr5aERfjzxg603H5LFPf73e4cw3eizvwY6pgHVA66EauG9a0zGMsDZCZB8ZhlSf3%2BvLRpsrDUb%2FMPdYGudP%2FMEffrzRC%2BBag1g%2B5KLnQG5UH2qTXyh2M1CVbZ134P%2F%2BHW57JXXGusKHkhmtM9HNuiuboDrgocL1h%2Bze0h28HriOABvRzo38U6rVTmjXX5YmomRqPyH4BD%2FgNMIYJZuecDLBhfuvGp3YpPfqTPJHO0g7N9vsH3I5JOpmgHce73ODivR&X-Amz-Signature=5e1e24d49cc89a56aace1f16c7993ccf52c914bf28d9ba863b442b21c1444c18&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLV4I4ME%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIB6Vm78RKlZFxbuRcwcDzQDAH0SttoBDOiW%2FIBWPqL4%2BAiAMBy7dEDsAgYJCwokkW4TQWuR1Vh5ysiEK3rGD9vywjyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAk1I0FVB9MRYd0HIKtwDZph7nn%2BXAf2pCN84CTu6k%2FpqdouwAk0ETUc%2Beh%2B17Xm06kD0DKAKdRJDCV8kbDw3hzr3Y0nsAp8sJ4IDlaTVaIZy3emcTKirtlB7wr7NMG6ac2n1R2P%2FOkMB9tSg7tpzizRz24cjXH7EgegJWndRHsS8n%2BagFc1SIH4ZgcnWHHyxwbb0rEIDDqS1vuIoaktes3ZCs%2FaQ6Eqz7bvEvZY1MyIiDC3wBbytWkpboMSK2Sdz2YKCopDoUQ8oqYmTo6v54mrPPk5SEQBVzOP1HoGrCUTEM7YUbj%2FULsMCd7oKxEmdJba7lFRqOD0ZaBrLexhXqzCuuIx31ThWWotedEnSDv9C1%2BBhSzxh5TuniI24Xu0oK727%2B8%2FvvtE8vb%2BrtJcfQ4Xqn9TQwht3lP62UgQOtHyGbwCmUacn2cENoOwZktvlJNL2NfnJTheXkiNqset7Qm70bhcqyAgwgcJ0R%2B9yULyilnLZljL602l3YvKF6mlgd6zX43TI4PWPlIj0vH%2FNuGuyefxdMdLGy%2B9TTNtsnwtNL1uC6%2BdHCDZ7RGgv9VH45ZYQBH1HS6jAFdHRFIQGRcltSUSijk%2FOG5swxnGPNmhJNeXTCtWpOjlr5aERfjzxg603H5LFPf73e4cw3eizvwY6pgHVA66EauG9a0zGMsDZCZB8ZhlSf3%2BvLRpsrDUb%2FMPdYGudP%2FMEffrzRC%2BBag1g%2B5KLnQG5UH2qTXyh2M1CVbZ134P%2F%2BHW57JXXGusKHkhmtM9HNuiuboDrgocL1h%2Bze0h28HriOABvRzo38U6rVTmjXX5YmomRqPyH4BD%2FgNMIYJZuecDLBhfuvGp3YpPfqTPJHO0g7N9vsH3I5JOpmgHce73ODivR&X-Amz-Signature=eff1c3b392c27ce4bf78577aea80b4b43a6b56ca98441b619ecbe10554dc4852&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLV4I4ME%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIB6Vm78RKlZFxbuRcwcDzQDAH0SttoBDOiW%2FIBWPqL4%2BAiAMBy7dEDsAgYJCwokkW4TQWuR1Vh5ysiEK3rGD9vywjyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAk1I0FVB9MRYd0HIKtwDZph7nn%2BXAf2pCN84CTu6k%2FpqdouwAk0ETUc%2Beh%2B17Xm06kD0DKAKdRJDCV8kbDw3hzr3Y0nsAp8sJ4IDlaTVaIZy3emcTKirtlB7wr7NMG6ac2n1R2P%2FOkMB9tSg7tpzizRz24cjXH7EgegJWndRHsS8n%2BagFc1SIH4ZgcnWHHyxwbb0rEIDDqS1vuIoaktes3ZCs%2FaQ6Eqz7bvEvZY1MyIiDC3wBbytWkpboMSK2Sdz2YKCopDoUQ8oqYmTo6v54mrPPk5SEQBVzOP1HoGrCUTEM7YUbj%2FULsMCd7oKxEmdJba7lFRqOD0ZaBrLexhXqzCuuIx31ThWWotedEnSDv9C1%2BBhSzxh5TuniI24Xu0oK727%2B8%2FvvtE8vb%2BrtJcfQ4Xqn9TQwht3lP62UgQOtHyGbwCmUacn2cENoOwZktvlJNL2NfnJTheXkiNqset7Qm70bhcqyAgwgcJ0R%2B9yULyilnLZljL602l3YvKF6mlgd6zX43TI4PWPlIj0vH%2FNuGuyefxdMdLGy%2B9TTNtsnwtNL1uC6%2BdHCDZ7RGgv9VH45ZYQBH1HS6jAFdHRFIQGRcltSUSijk%2FOG5swxnGPNmhJNeXTCtWpOjlr5aERfjzxg603H5LFPf73e4cw3eizvwY6pgHVA66EauG9a0zGMsDZCZB8ZhlSf3%2BvLRpsrDUb%2FMPdYGudP%2FMEffrzRC%2BBag1g%2B5KLnQG5UH2qTXyh2M1CVbZ134P%2F%2BHW57JXXGusKHkhmtM9HNuiuboDrgocL1h%2Bze0h28HriOABvRzo38U6rVTmjXX5YmomRqPyH4BD%2FgNMIYJZuecDLBhfuvGp3YpPfqTPJHO0g7N9vsH3I5JOpmgHce73ODivR&X-Amz-Signature=590484175b645e40563a1b6fc6c82b37cc0b530c6188ea978666367e012a01a4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
