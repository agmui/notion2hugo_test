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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBFZPFLG%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGX8Lz7SH3QxY480ReMPzFYwiu7qpsFtYnBC4D7Mj5F3AiEAxjTjWBpHi3%2BQiRqz04rS9eByK%2Fq139BKHD8FmVWERwUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFq0IUVQ8OlvKRp%2F7SrcA7sZV7eBkiOUW4PvUPsKBMYdLdqu95hN7Hb5Hc7tiLoxW4CfJuA3tEP7RFOtSKdvXbVQYW60O5plwNTJi%2F1uqQOt4kcj4VVBe45j%2FyPiu0tS%2BG3Z3ViAT3gATLt%2Bt%2BYMuWxn6FitTAeKF5oJAClgDxvjJHWrmAPIkGbXlp4ymhOGbnByPp157eHyKQN6zc2jLnrNfTQ2GV%2F5fsCV5cRJ6aFy1B1R5H8kMJfywwzlgbuKUxy4VWWKSQ4LvmwvDaqCENwRCNM%2Fg3438%2FrDlDNJM%2BrRV1zsl%2Bc99txMmH2T1%2Bh2aKesBn45PxiqayIfYNFmF7jl%2Bkz6aOU0%2BZhHSReHy%2Fjsshcr94okKk0TY0jhGAC4MFdaQfvHT3NQr26gUWZqg%2FFcveI9pKe1N0iSm4H7OzhI%2BxbAzu2vQkcZUdwwuf%2BDgolrVzP06BVRfhc%2BfURQ93rso%2FW0NL9hCFv8WJvYKU9%2BTF0e4wVpXfCff0M9hHIhGddko1QO6wPUM1Az7ajGeO%2BOi9uCGbyKa%2Blwm2xFGWPf%2FirOT4ICYSgVPE6GA%2BiQVtsBmgmBC4JlTJ5Z%2FK8pFPBKSbRBpRoldsuiWBOhTXxfATBAoJAghHpgVUfrjRB%2FDx0V%2BoY0nrDixDFiMNC%2FoMIGOqUB3BEQ9zE%2B%2BkKruN9TL%2F7WzS079nrCltAqIEV%2Fe8GU4ShQFWBOuMJ5IN%2BwO6pY04sYupEiEKnb9JU%2FsWZfk4QCQqiDWWgOUZoH6atI4Hk6YMpuVlYyWnePo8MK0y%2BLNXylAjzhTHuYZ3x8VLex7%2BUpwb3fCH%2Fx8jkhuHj2B9XSO166KCpYzy1IcDKhNN6YI2V1NWhYskZV0hA%2FQ7x2PPuPLQ83y3lf&X-Amz-Signature=d73c976d6e1b416aa1946f6f1dd22c67e2776d737e824c0a441400faa9c9876e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBFZPFLG%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGX8Lz7SH3QxY480ReMPzFYwiu7qpsFtYnBC4D7Mj5F3AiEAxjTjWBpHi3%2BQiRqz04rS9eByK%2Fq139BKHD8FmVWERwUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFq0IUVQ8OlvKRp%2F7SrcA7sZV7eBkiOUW4PvUPsKBMYdLdqu95hN7Hb5Hc7tiLoxW4CfJuA3tEP7RFOtSKdvXbVQYW60O5plwNTJi%2F1uqQOt4kcj4VVBe45j%2FyPiu0tS%2BG3Z3ViAT3gATLt%2Bt%2BYMuWxn6FitTAeKF5oJAClgDxvjJHWrmAPIkGbXlp4ymhOGbnByPp157eHyKQN6zc2jLnrNfTQ2GV%2F5fsCV5cRJ6aFy1B1R5H8kMJfywwzlgbuKUxy4VWWKSQ4LvmwvDaqCENwRCNM%2Fg3438%2FrDlDNJM%2BrRV1zsl%2Bc99txMmH2T1%2Bh2aKesBn45PxiqayIfYNFmF7jl%2Bkz6aOU0%2BZhHSReHy%2Fjsshcr94okKk0TY0jhGAC4MFdaQfvHT3NQr26gUWZqg%2FFcveI9pKe1N0iSm4H7OzhI%2BxbAzu2vQkcZUdwwuf%2BDgolrVzP06BVRfhc%2BfURQ93rso%2FW0NL9hCFv8WJvYKU9%2BTF0e4wVpXfCff0M9hHIhGddko1QO6wPUM1Az7ajGeO%2BOi9uCGbyKa%2Blwm2xFGWPf%2FirOT4ICYSgVPE6GA%2BiQVtsBmgmBC4JlTJ5Z%2FK8pFPBKSbRBpRoldsuiWBOhTXxfATBAoJAghHpgVUfrjRB%2FDx0V%2BoY0nrDixDFiMNC%2FoMIGOqUB3BEQ9zE%2B%2BkKruN9TL%2F7WzS079nrCltAqIEV%2Fe8GU4ShQFWBOuMJ5IN%2BwO6pY04sYupEiEKnb9JU%2FsWZfk4QCQqiDWWgOUZoH6atI4Hk6YMpuVlYyWnePo8MK0y%2BLNXylAjzhTHuYZ3x8VLex7%2BUpwb3fCH%2Fx8jkhuHj2B9XSO166KCpYzy1IcDKhNN6YI2V1NWhYskZV0hA%2FQ7x2PPuPLQ83y3lf&X-Amz-Signature=c0a6ead92f64708f2175a17052dc5a0f160ef64432af4474bbbe740fe4062ed6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBFZPFLG%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGX8Lz7SH3QxY480ReMPzFYwiu7qpsFtYnBC4D7Mj5F3AiEAxjTjWBpHi3%2BQiRqz04rS9eByK%2Fq139BKHD8FmVWERwUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFq0IUVQ8OlvKRp%2F7SrcA7sZV7eBkiOUW4PvUPsKBMYdLdqu95hN7Hb5Hc7tiLoxW4CfJuA3tEP7RFOtSKdvXbVQYW60O5plwNTJi%2F1uqQOt4kcj4VVBe45j%2FyPiu0tS%2BG3Z3ViAT3gATLt%2Bt%2BYMuWxn6FitTAeKF5oJAClgDxvjJHWrmAPIkGbXlp4ymhOGbnByPp157eHyKQN6zc2jLnrNfTQ2GV%2F5fsCV5cRJ6aFy1B1R5H8kMJfywwzlgbuKUxy4VWWKSQ4LvmwvDaqCENwRCNM%2Fg3438%2FrDlDNJM%2BrRV1zsl%2Bc99txMmH2T1%2Bh2aKesBn45PxiqayIfYNFmF7jl%2Bkz6aOU0%2BZhHSReHy%2Fjsshcr94okKk0TY0jhGAC4MFdaQfvHT3NQr26gUWZqg%2FFcveI9pKe1N0iSm4H7OzhI%2BxbAzu2vQkcZUdwwuf%2BDgolrVzP06BVRfhc%2BfURQ93rso%2FW0NL9hCFv8WJvYKU9%2BTF0e4wVpXfCff0M9hHIhGddko1QO6wPUM1Az7ajGeO%2BOi9uCGbyKa%2Blwm2xFGWPf%2FirOT4ICYSgVPE6GA%2BiQVtsBmgmBC4JlTJ5Z%2FK8pFPBKSbRBpRoldsuiWBOhTXxfATBAoJAghHpgVUfrjRB%2FDx0V%2BoY0nrDixDFiMNC%2FoMIGOqUB3BEQ9zE%2B%2BkKruN9TL%2F7WzS079nrCltAqIEV%2Fe8GU4ShQFWBOuMJ5IN%2BwO6pY04sYupEiEKnb9JU%2FsWZfk4QCQqiDWWgOUZoH6atI4Hk6YMpuVlYyWnePo8MK0y%2BLNXylAjzhTHuYZ3x8VLex7%2BUpwb3fCH%2Fx8jkhuHj2B9XSO166KCpYzy1IcDKhNN6YI2V1NWhYskZV0hA%2FQ7x2PPuPLQ83y3lf&X-Amz-Signature=b6e900d12a811a5d65ba56c72fabee504013f8ce7f60e938266d7a9914e3087f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBFZPFLG%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGX8Lz7SH3QxY480ReMPzFYwiu7qpsFtYnBC4D7Mj5F3AiEAxjTjWBpHi3%2BQiRqz04rS9eByK%2Fq139BKHD8FmVWERwUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFq0IUVQ8OlvKRp%2F7SrcA7sZV7eBkiOUW4PvUPsKBMYdLdqu95hN7Hb5Hc7tiLoxW4CfJuA3tEP7RFOtSKdvXbVQYW60O5plwNTJi%2F1uqQOt4kcj4VVBe45j%2FyPiu0tS%2BG3Z3ViAT3gATLt%2Bt%2BYMuWxn6FitTAeKF5oJAClgDxvjJHWrmAPIkGbXlp4ymhOGbnByPp157eHyKQN6zc2jLnrNfTQ2GV%2F5fsCV5cRJ6aFy1B1R5H8kMJfywwzlgbuKUxy4VWWKSQ4LvmwvDaqCENwRCNM%2Fg3438%2FrDlDNJM%2BrRV1zsl%2Bc99txMmH2T1%2Bh2aKesBn45PxiqayIfYNFmF7jl%2Bkz6aOU0%2BZhHSReHy%2Fjsshcr94okKk0TY0jhGAC4MFdaQfvHT3NQr26gUWZqg%2FFcveI9pKe1N0iSm4H7OzhI%2BxbAzu2vQkcZUdwwuf%2BDgolrVzP06BVRfhc%2BfURQ93rso%2FW0NL9hCFv8WJvYKU9%2BTF0e4wVpXfCff0M9hHIhGddko1QO6wPUM1Az7ajGeO%2BOi9uCGbyKa%2Blwm2xFGWPf%2FirOT4ICYSgVPE6GA%2BiQVtsBmgmBC4JlTJ5Z%2FK8pFPBKSbRBpRoldsuiWBOhTXxfATBAoJAghHpgVUfrjRB%2FDx0V%2BoY0nrDixDFiMNC%2FoMIGOqUB3BEQ9zE%2B%2BkKruN9TL%2F7WzS079nrCltAqIEV%2Fe8GU4ShQFWBOuMJ5IN%2BwO6pY04sYupEiEKnb9JU%2FsWZfk4QCQqiDWWgOUZoH6atI4Hk6YMpuVlYyWnePo8MK0y%2BLNXylAjzhTHuYZ3x8VLex7%2BUpwb3fCH%2Fx8jkhuHj2B9XSO166KCpYzy1IcDKhNN6YI2V1NWhYskZV0hA%2FQ7x2PPuPLQ83y3lf&X-Amz-Signature=df8b96f3843d116334d324ef227f38f2f74ab86c5b5a213a595afb6ade997d54&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBFZPFLG%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGX8Lz7SH3QxY480ReMPzFYwiu7qpsFtYnBC4D7Mj5F3AiEAxjTjWBpHi3%2BQiRqz04rS9eByK%2Fq139BKHD8FmVWERwUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFq0IUVQ8OlvKRp%2F7SrcA7sZV7eBkiOUW4PvUPsKBMYdLdqu95hN7Hb5Hc7tiLoxW4CfJuA3tEP7RFOtSKdvXbVQYW60O5plwNTJi%2F1uqQOt4kcj4VVBe45j%2FyPiu0tS%2BG3Z3ViAT3gATLt%2Bt%2BYMuWxn6FitTAeKF5oJAClgDxvjJHWrmAPIkGbXlp4ymhOGbnByPp157eHyKQN6zc2jLnrNfTQ2GV%2F5fsCV5cRJ6aFy1B1R5H8kMJfywwzlgbuKUxy4VWWKSQ4LvmwvDaqCENwRCNM%2Fg3438%2FrDlDNJM%2BrRV1zsl%2Bc99txMmH2T1%2Bh2aKesBn45PxiqayIfYNFmF7jl%2Bkz6aOU0%2BZhHSReHy%2Fjsshcr94okKk0TY0jhGAC4MFdaQfvHT3NQr26gUWZqg%2FFcveI9pKe1N0iSm4H7OzhI%2BxbAzu2vQkcZUdwwuf%2BDgolrVzP06BVRfhc%2BfURQ93rso%2FW0NL9hCFv8WJvYKU9%2BTF0e4wVpXfCff0M9hHIhGddko1QO6wPUM1Az7ajGeO%2BOi9uCGbyKa%2Blwm2xFGWPf%2FirOT4ICYSgVPE6GA%2BiQVtsBmgmBC4JlTJ5Z%2FK8pFPBKSbRBpRoldsuiWBOhTXxfATBAoJAghHpgVUfrjRB%2FDx0V%2BoY0nrDixDFiMNC%2FoMIGOqUB3BEQ9zE%2B%2BkKruN9TL%2F7WzS079nrCltAqIEV%2Fe8GU4ShQFWBOuMJ5IN%2BwO6pY04sYupEiEKnb9JU%2FsWZfk4QCQqiDWWgOUZoH6atI4Hk6YMpuVlYyWnePo8MK0y%2BLNXylAjzhTHuYZ3x8VLex7%2BUpwb3fCH%2Fx8jkhuHj2B9XSO166KCpYzy1IcDKhNN6YI2V1NWhYskZV0hA%2FQ7x2PPuPLQ83y3lf&X-Amz-Signature=6d518d42b9785e0788de3909ef6644a5f44ee23393dcd51b8c4700670146b8e7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
