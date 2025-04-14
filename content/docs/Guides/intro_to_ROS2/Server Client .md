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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWVMKGN%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWcIglg%2FW7N9nIBl4zddMehfHufpb8gPA1j1p2ZyhBZAiBuOLbdO%2FW%2BSIXdCOz7bHucThXIlM5rCMreVuyp3lH22Sr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMZTDeKiGtIOagNvmzKtwDZWRBmMwaTwWoYua47jIas1hHqbDw1cX1RVVQmzJQte0E99l7PjnhPdndUHLxXyPbrxZZfQzTBquYo6qKpM2fJGRTcVq1FWL%2F0bpxBxhEga7B8A9SaKL9XtZ5e%2BPWXulBnsCTtepsV7jDUHBTsfuLVAltNac3NkdCMx%2BFVrQ4M7p3X94QSBDtHszjuoi1k%2FdNFzXn%2Bne392wr%2FBZjPB5O%2FCh2fUhlO%2BAmTSnSRFZIO9xg0XpUUnykvTFdmLvm51qybSZHfpsjOk8LztfcF1o6JGr9ZtG15nb4qcRooTRdvfRb%2FdeQr8jqChic9msbswV5f9K6OvYzNVUDT0INq%2F36j0P4joF6%2FttLpKcfQmJNbPVzZ9%2F8315e5%2BhKMaqnvGYcyvNhsmPKabjThpUGdOkwCWo9E2UiOSkb9LaJ8B7OSgfhYNMgH9nsQyVF5fYlUrtNxUCG1%2BUmUC%2FrhyMVm3w3zfAq5t1SvIbzNnmrYj9137EWgmlMXjpqJfjq6inQZdwq2vVm9RelkJ53OBeUSPwMqZ5FaVua2Ny5cbYzkyefX0W1tyrjqNJIP18ZD%2FlcwkB6yTo%2FYuQOHHutrBa4rwB9%2F4bNY2iQ5XLUAw%2F3LtHG1Ujk8PkiCBbd0PpLAX0wt5v2vwY6pgHORKyJ5YiWRxlflQnuB3gSCkqhFXI0L2NeHqNehrmFFQj%2BCtNJyDb6UFSgC1bkxWn0i43gTsyoECHq0ogOonsBbdcIJK1bKKbpz3lsTT3ifiokw%2BVsgtnj7TqdO4bnmHXLixX3ujLtweqcHnjXesVOyTHm5iET6J3w1uRRiNYpP5sn9uUuZS9CLnLBWgsps06jBbRCrNog%2BXc1QM7%2Bs%2FSz9400MKhg&X-Amz-Signature=0f237abb4aad0dde2fc0c7de5067ffb83d71f7f634a638565bb3907e1e588f26&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWVMKGN%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWcIglg%2FW7N9nIBl4zddMehfHufpb8gPA1j1p2ZyhBZAiBuOLbdO%2FW%2BSIXdCOz7bHucThXIlM5rCMreVuyp3lH22Sr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMZTDeKiGtIOagNvmzKtwDZWRBmMwaTwWoYua47jIas1hHqbDw1cX1RVVQmzJQte0E99l7PjnhPdndUHLxXyPbrxZZfQzTBquYo6qKpM2fJGRTcVq1FWL%2F0bpxBxhEga7B8A9SaKL9XtZ5e%2BPWXulBnsCTtepsV7jDUHBTsfuLVAltNac3NkdCMx%2BFVrQ4M7p3X94QSBDtHszjuoi1k%2FdNFzXn%2Bne392wr%2FBZjPB5O%2FCh2fUhlO%2BAmTSnSRFZIO9xg0XpUUnykvTFdmLvm51qybSZHfpsjOk8LztfcF1o6JGr9ZtG15nb4qcRooTRdvfRb%2FdeQr8jqChic9msbswV5f9K6OvYzNVUDT0INq%2F36j0P4joF6%2FttLpKcfQmJNbPVzZ9%2F8315e5%2BhKMaqnvGYcyvNhsmPKabjThpUGdOkwCWo9E2UiOSkb9LaJ8B7OSgfhYNMgH9nsQyVF5fYlUrtNxUCG1%2BUmUC%2FrhyMVm3w3zfAq5t1SvIbzNnmrYj9137EWgmlMXjpqJfjq6inQZdwq2vVm9RelkJ53OBeUSPwMqZ5FaVua2Ny5cbYzkyefX0W1tyrjqNJIP18ZD%2FlcwkB6yTo%2FYuQOHHutrBa4rwB9%2F4bNY2iQ5XLUAw%2F3LtHG1Ujk8PkiCBbd0PpLAX0wt5v2vwY6pgHORKyJ5YiWRxlflQnuB3gSCkqhFXI0L2NeHqNehrmFFQj%2BCtNJyDb6UFSgC1bkxWn0i43gTsyoECHq0ogOonsBbdcIJK1bKKbpz3lsTT3ifiokw%2BVsgtnj7TqdO4bnmHXLixX3ujLtweqcHnjXesVOyTHm5iET6J3w1uRRiNYpP5sn9uUuZS9CLnLBWgsps06jBbRCrNog%2BXc1QM7%2Bs%2FSz9400MKhg&X-Amz-Signature=c7412599e8617b565479eb969375940ffeb0b73e2c842a5e55e6523cbcdfa014&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWVMKGN%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWcIglg%2FW7N9nIBl4zddMehfHufpb8gPA1j1p2ZyhBZAiBuOLbdO%2FW%2BSIXdCOz7bHucThXIlM5rCMreVuyp3lH22Sr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMZTDeKiGtIOagNvmzKtwDZWRBmMwaTwWoYua47jIas1hHqbDw1cX1RVVQmzJQte0E99l7PjnhPdndUHLxXyPbrxZZfQzTBquYo6qKpM2fJGRTcVq1FWL%2F0bpxBxhEga7B8A9SaKL9XtZ5e%2BPWXulBnsCTtepsV7jDUHBTsfuLVAltNac3NkdCMx%2BFVrQ4M7p3X94QSBDtHszjuoi1k%2FdNFzXn%2Bne392wr%2FBZjPB5O%2FCh2fUhlO%2BAmTSnSRFZIO9xg0XpUUnykvTFdmLvm51qybSZHfpsjOk8LztfcF1o6JGr9ZtG15nb4qcRooTRdvfRb%2FdeQr8jqChic9msbswV5f9K6OvYzNVUDT0INq%2F36j0P4joF6%2FttLpKcfQmJNbPVzZ9%2F8315e5%2BhKMaqnvGYcyvNhsmPKabjThpUGdOkwCWo9E2UiOSkb9LaJ8B7OSgfhYNMgH9nsQyVF5fYlUrtNxUCG1%2BUmUC%2FrhyMVm3w3zfAq5t1SvIbzNnmrYj9137EWgmlMXjpqJfjq6inQZdwq2vVm9RelkJ53OBeUSPwMqZ5FaVua2Ny5cbYzkyefX0W1tyrjqNJIP18ZD%2FlcwkB6yTo%2FYuQOHHutrBa4rwB9%2F4bNY2iQ5XLUAw%2F3LtHG1Ujk8PkiCBbd0PpLAX0wt5v2vwY6pgHORKyJ5YiWRxlflQnuB3gSCkqhFXI0L2NeHqNehrmFFQj%2BCtNJyDb6UFSgC1bkxWn0i43gTsyoECHq0ogOonsBbdcIJK1bKKbpz3lsTT3ifiokw%2BVsgtnj7TqdO4bnmHXLixX3ujLtweqcHnjXesVOyTHm5iET6J3w1uRRiNYpP5sn9uUuZS9CLnLBWgsps06jBbRCrNog%2BXc1QM7%2Bs%2FSz9400MKhg&X-Amz-Signature=003a1aa1f7d4a61e3ace65559b4b457ef0bcde838acc4ec6d6b55b3b3dde42ca&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWVMKGN%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWcIglg%2FW7N9nIBl4zddMehfHufpb8gPA1j1p2ZyhBZAiBuOLbdO%2FW%2BSIXdCOz7bHucThXIlM5rCMreVuyp3lH22Sr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMZTDeKiGtIOagNvmzKtwDZWRBmMwaTwWoYua47jIas1hHqbDw1cX1RVVQmzJQte0E99l7PjnhPdndUHLxXyPbrxZZfQzTBquYo6qKpM2fJGRTcVq1FWL%2F0bpxBxhEga7B8A9SaKL9XtZ5e%2BPWXulBnsCTtepsV7jDUHBTsfuLVAltNac3NkdCMx%2BFVrQ4M7p3X94QSBDtHszjuoi1k%2FdNFzXn%2Bne392wr%2FBZjPB5O%2FCh2fUhlO%2BAmTSnSRFZIO9xg0XpUUnykvTFdmLvm51qybSZHfpsjOk8LztfcF1o6JGr9ZtG15nb4qcRooTRdvfRb%2FdeQr8jqChic9msbswV5f9K6OvYzNVUDT0INq%2F36j0P4joF6%2FttLpKcfQmJNbPVzZ9%2F8315e5%2BhKMaqnvGYcyvNhsmPKabjThpUGdOkwCWo9E2UiOSkb9LaJ8B7OSgfhYNMgH9nsQyVF5fYlUrtNxUCG1%2BUmUC%2FrhyMVm3w3zfAq5t1SvIbzNnmrYj9137EWgmlMXjpqJfjq6inQZdwq2vVm9RelkJ53OBeUSPwMqZ5FaVua2Ny5cbYzkyefX0W1tyrjqNJIP18ZD%2FlcwkB6yTo%2FYuQOHHutrBa4rwB9%2F4bNY2iQ5XLUAw%2F3LtHG1Ujk8PkiCBbd0PpLAX0wt5v2vwY6pgHORKyJ5YiWRxlflQnuB3gSCkqhFXI0L2NeHqNehrmFFQj%2BCtNJyDb6UFSgC1bkxWn0i43gTsyoECHq0ogOonsBbdcIJK1bKKbpz3lsTT3ifiokw%2BVsgtnj7TqdO4bnmHXLixX3ujLtweqcHnjXesVOyTHm5iET6J3w1uRRiNYpP5sn9uUuZS9CLnLBWgsps06jBbRCrNog%2BXc1QM7%2Bs%2FSz9400MKhg&X-Amz-Signature=b10d4f4bb9b82c9a24c37a682ca5c944e234584ff3373903620c90f7809c9755&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWVMKGN%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWcIglg%2FW7N9nIBl4zddMehfHufpb8gPA1j1p2ZyhBZAiBuOLbdO%2FW%2BSIXdCOz7bHucThXIlM5rCMreVuyp3lH22Sr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMZTDeKiGtIOagNvmzKtwDZWRBmMwaTwWoYua47jIas1hHqbDw1cX1RVVQmzJQte0E99l7PjnhPdndUHLxXyPbrxZZfQzTBquYo6qKpM2fJGRTcVq1FWL%2F0bpxBxhEga7B8A9SaKL9XtZ5e%2BPWXulBnsCTtepsV7jDUHBTsfuLVAltNac3NkdCMx%2BFVrQ4M7p3X94QSBDtHszjuoi1k%2FdNFzXn%2Bne392wr%2FBZjPB5O%2FCh2fUhlO%2BAmTSnSRFZIO9xg0XpUUnykvTFdmLvm51qybSZHfpsjOk8LztfcF1o6JGr9ZtG15nb4qcRooTRdvfRb%2FdeQr8jqChic9msbswV5f9K6OvYzNVUDT0INq%2F36j0P4joF6%2FttLpKcfQmJNbPVzZ9%2F8315e5%2BhKMaqnvGYcyvNhsmPKabjThpUGdOkwCWo9E2UiOSkb9LaJ8B7OSgfhYNMgH9nsQyVF5fYlUrtNxUCG1%2BUmUC%2FrhyMVm3w3zfAq5t1SvIbzNnmrYj9137EWgmlMXjpqJfjq6inQZdwq2vVm9RelkJ53OBeUSPwMqZ5FaVua2Ny5cbYzkyefX0W1tyrjqNJIP18ZD%2FlcwkB6yTo%2FYuQOHHutrBa4rwB9%2F4bNY2iQ5XLUAw%2F3LtHG1Ujk8PkiCBbd0PpLAX0wt5v2vwY6pgHORKyJ5YiWRxlflQnuB3gSCkqhFXI0L2NeHqNehrmFFQj%2BCtNJyDb6UFSgC1bkxWn0i43gTsyoECHq0ogOonsBbdcIJK1bKKbpz3lsTT3ifiokw%2BVsgtnj7TqdO4bnmHXLixX3ujLtweqcHnjXesVOyTHm5iET6J3w1uRRiNYpP5sn9uUuZS9CLnLBWgsps06jBbRCrNog%2BXc1QM7%2Bs%2FSz9400MKhg&X-Amz-Signature=1e66a3ebba2f529b2093be3da7db97601347706352a9f153f3be3ca10d51b44a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
