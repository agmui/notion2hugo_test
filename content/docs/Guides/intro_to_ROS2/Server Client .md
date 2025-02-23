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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAAJVEEK%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDypAI%2BUE2%2BoRIFpiZmLK07N%2FB2KlFOkgVU9CWLTXjasAIgG0GKOMuhri2FWArXipuqqfR3f6fSedQmof2hN1EvWJ4qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhgHcOLv3T1TgFfcyrcA1yl8Y5uVxLK0qRTZGuY3Jna6kPnR%2BQIvKpnhlmCoK%2FTLvclk2csPzjxwDl848HrDfDHhI6rJrnQH4bnP9SqONI05WPT%2BRWSzECm3faQDYwztEtnI%2BqIrw7JATJgi%2FEfMQHCsW4eJs65ikZefA9OWLE5C20Zg8CmLBtNzabdrybFwxOXOs51rFGPaB2FKYREYzDHxEcgfziJF6dahmz4yBrDFxBfcAEIM%2FQ1yPLDQk2lBxfue6u5wkdlMV5HRXbGvTL28fiE1DrwZ2TOWeH%2FTwoECLUKH5EJn3nJFHGtqtupuHBTh3VSQPdwvgNS5I6gePxQk%2FI6Ej22nOpH%2FSXUs41Y5so0DtNNfZqjcPLkcTw7jldwr16jhXAsgEROvrGmDl%2FxDdXtESJNO9QSWj%2FWi%2BOmW2%2BelweWLjA2j2ZEkbBk13vXtpGNkerzQRrFCcgQMyaKtD2wNbiDJUG%2BoqcXI85Trm7P73CnVNlHBRmP4bNjz5w43xiHj50KbDDPChT8ShvfoQSjpOoFCrAH54scQ9TxK10mRdmc0FN7lpMgojQnuNZ3PdQT43mV7qDRuNJ6I%2FtGhFcYo0ZLMo0avnJvCyClmPg91Bnwf6SJ1d7sG50gYQFk72AL9A0sDh85MMCn6r0GOqUBMHSPEQCtuukw7xTgfkL6QTC0mr6MntCnQFeFMgRsfWSlbVrxtJ0stiavJewjNiUZ1o%2FxbdiM1QXqWdW5uJRZfTy8g0y3DG9QcxgQK1NIeBO6bOkHQreR0R0vZxmTKdouBZwekihbgxaWYyfkbnDBvF3l6jpHzFVg8SJO9wtIlIDzRzyhdT6hpww%2F8RafMO%2FO8tKgQggqf3zmPUEkd7YmGYD%2BQsqm&X-Amz-Signature=aec1fe065fefbc6e3bae9ffdc76e630517de892ed9ea4c60355ca21a7e328ba8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAAJVEEK%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDypAI%2BUE2%2BoRIFpiZmLK07N%2FB2KlFOkgVU9CWLTXjasAIgG0GKOMuhri2FWArXipuqqfR3f6fSedQmof2hN1EvWJ4qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhgHcOLv3T1TgFfcyrcA1yl8Y5uVxLK0qRTZGuY3Jna6kPnR%2BQIvKpnhlmCoK%2FTLvclk2csPzjxwDl848HrDfDHhI6rJrnQH4bnP9SqONI05WPT%2BRWSzECm3faQDYwztEtnI%2BqIrw7JATJgi%2FEfMQHCsW4eJs65ikZefA9OWLE5C20Zg8CmLBtNzabdrybFwxOXOs51rFGPaB2FKYREYzDHxEcgfziJF6dahmz4yBrDFxBfcAEIM%2FQ1yPLDQk2lBxfue6u5wkdlMV5HRXbGvTL28fiE1DrwZ2TOWeH%2FTwoECLUKH5EJn3nJFHGtqtupuHBTh3VSQPdwvgNS5I6gePxQk%2FI6Ej22nOpH%2FSXUs41Y5so0DtNNfZqjcPLkcTw7jldwr16jhXAsgEROvrGmDl%2FxDdXtESJNO9QSWj%2FWi%2BOmW2%2BelweWLjA2j2ZEkbBk13vXtpGNkerzQRrFCcgQMyaKtD2wNbiDJUG%2BoqcXI85Trm7P73CnVNlHBRmP4bNjz5w43xiHj50KbDDPChT8ShvfoQSjpOoFCrAH54scQ9TxK10mRdmc0FN7lpMgojQnuNZ3PdQT43mV7qDRuNJ6I%2FtGhFcYo0ZLMo0avnJvCyClmPg91Bnwf6SJ1d7sG50gYQFk72AL9A0sDh85MMCn6r0GOqUBMHSPEQCtuukw7xTgfkL6QTC0mr6MntCnQFeFMgRsfWSlbVrxtJ0stiavJewjNiUZ1o%2FxbdiM1QXqWdW5uJRZfTy8g0y3DG9QcxgQK1NIeBO6bOkHQreR0R0vZxmTKdouBZwekihbgxaWYyfkbnDBvF3l6jpHzFVg8SJO9wtIlIDzRzyhdT6hpww%2F8RafMO%2FO8tKgQggqf3zmPUEkd7YmGYD%2BQsqm&X-Amz-Signature=8ad655655e7a774c9f85caf2bf7b5b5e58d7eafbb4c342c77108e96049fcc9c8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAAJVEEK%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDypAI%2BUE2%2BoRIFpiZmLK07N%2FB2KlFOkgVU9CWLTXjasAIgG0GKOMuhri2FWArXipuqqfR3f6fSedQmof2hN1EvWJ4qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhgHcOLv3T1TgFfcyrcA1yl8Y5uVxLK0qRTZGuY3Jna6kPnR%2BQIvKpnhlmCoK%2FTLvclk2csPzjxwDl848HrDfDHhI6rJrnQH4bnP9SqONI05WPT%2BRWSzECm3faQDYwztEtnI%2BqIrw7JATJgi%2FEfMQHCsW4eJs65ikZefA9OWLE5C20Zg8CmLBtNzabdrybFwxOXOs51rFGPaB2FKYREYzDHxEcgfziJF6dahmz4yBrDFxBfcAEIM%2FQ1yPLDQk2lBxfue6u5wkdlMV5HRXbGvTL28fiE1DrwZ2TOWeH%2FTwoECLUKH5EJn3nJFHGtqtupuHBTh3VSQPdwvgNS5I6gePxQk%2FI6Ej22nOpH%2FSXUs41Y5so0DtNNfZqjcPLkcTw7jldwr16jhXAsgEROvrGmDl%2FxDdXtESJNO9QSWj%2FWi%2BOmW2%2BelweWLjA2j2ZEkbBk13vXtpGNkerzQRrFCcgQMyaKtD2wNbiDJUG%2BoqcXI85Trm7P73CnVNlHBRmP4bNjz5w43xiHj50KbDDPChT8ShvfoQSjpOoFCrAH54scQ9TxK10mRdmc0FN7lpMgojQnuNZ3PdQT43mV7qDRuNJ6I%2FtGhFcYo0ZLMo0avnJvCyClmPg91Bnwf6SJ1d7sG50gYQFk72AL9A0sDh85MMCn6r0GOqUBMHSPEQCtuukw7xTgfkL6QTC0mr6MntCnQFeFMgRsfWSlbVrxtJ0stiavJewjNiUZ1o%2FxbdiM1QXqWdW5uJRZfTy8g0y3DG9QcxgQK1NIeBO6bOkHQreR0R0vZxmTKdouBZwekihbgxaWYyfkbnDBvF3l6jpHzFVg8SJO9wtIlIDzRzyhdT6hpww%2F8RafMO%2FO8tKgQggqf3zmPUEkd7YmGYD%2BQsqm&X-Amz-Signature=39b723d5a02dc53af1f5c802d43ce2bae526081cb8a88bfc09d4fcbfea53761f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAAJVEEK%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDypAI%2BUE2%2BoRIFpiZmLK07N%2FB2KlFOkgVU9CWLTXjasAIgG0GKOMuhri2FWArXipuqqfR3f6fSedQmof2hN1EvWJ4qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhgHcOLv3T1TgFfcyrcA1yl8Y5uVxLK0qRTZGuY3Jna6kPnR%2BQIvKpnhlmCoK%2FTLvclk2csPzjxwDl848HrDfDHhI6rJrnQH4bnP9SqONI05WPT%2BRWSzECm3faQDYwztEtnI%2BqIrw7JATJgi%2FEfMQHCsW4eJs65ikZefA9OWLE5C20Zg8CmLBtNzabdrybFwxOXOs51rFGPaB2FKYREYzDHxEcgfziJF6dahmz4yBrDFxBfcAEIM%2FQ1yPLDQk2lBxfue6u5wkdlMV5HRXbGvTL28fiE1DrwZ2TOWeH%2FTwoECLUKH5EJn3nJFHGtqtupuHBTh3VSQPdwvgNS5I6gePxQk%2FI6Ej22nOpH%2FSXUs41Y5so0DtNNfZqjcPLkcTw7jldwr16jhXAsgEROvrGmDl%2FxDdXtESJNO9QSWj%2FWi%2BOmW2%2BelweWLjA2j2ZEkbBk13vXtpGNkerzQRrFCcgQMyaKtD2wNbiDJUG%2BoqcXI85Trm7P73CnVNlHBRmP4bNjz5w43xiHj50KbDDPChT8ShvfoQSjpOoFCrAH54scQ9TxK10mRdmc0FN7lpMgojQnuNZ3PdQT43mV7qDRuNJ6I%2FtGhFcYo0ZLMo0avnJvCyClmPg91Bnwf6SJ1d7sG50gYQFk72AL9A0sDh85MMCn6r0GOqUBMHSPEQCtuukw7xTgfkL6QTC0mr6MntCnQFeFMgRsfWSlbVrxtJ0stiavJewjNiUZ1o%2FxbdiM1QXqWdW5uJRZfTy8g0y3DG9QcxgQK1NIeBO6bOkHQreR0R0vZxmTKdouBZwekihbgxaWYyfkbnDBvF3l6jpHzFVg8SJO9wtIlIDzRzyhdT6hpww%2F8RafMO%2FO8tKgQggqf3zmPUEkd7YmGYD%2BQsqm&X-Amz-Signature=a3615844e7ee26ea102d73ecdc7def5c1e424a4fe0cbb0559b7cbbba64a80d86&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAAJVEEK%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDypAI%2BUE2%2BoRIFpiZmLK07N%2FB2KlFOkgVU9CWLTXjasAIgG0GKOMuhri2FWArXipuqqfR3f6fSedQmof2hN1EvWJ4qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhgHcOLv3T1TgFfcyrcA1yl8Y5uVxLK0qRTZGuY3Jna6kPnR%2BQIvKpnhlmCoK%2FTLvclk2csPzjxwDl848HrDfDHhI6rJrnQH4bnP9SqONI05WPT%2BRWSzECm3faQDYwztEtnI%2BqIrw7JATJgi%2FEfMQHCsW4eJs65ikZefA9OWLE5C20Zg8CmLBtNzabdrybFwxOXOs51rFGPaB2FKYREYzDHxEcgfziJF6dahmz4yBrDFxBfcAEIM%2FQ1yPLDQk2lBxfue6u5wkdlMV5HRXbGvTL28fiE1DrwZ2TOWeH%2FTwoECLUKH5EJn3nJFHGtqtupuHBTh3VSQPdwvgNS5I6gePxQk%2FI6Ej22nOpH%2FSXUs41Y5so0DtNNfZqjcPLkcTw7jldwr16jhXAsgEROvrGmDl%2FxDdXtESJNO9QSWj%2FWi%2BOmW2%2BelweWLjA2j2ZEkbBk13vXtpGNkerzQRrFCcgQMyaKtD2wNbiDJUG%2BoqcXI85Trm7P73CnVNlHBRmP4bNjz5w43xiHj50KbDDPChT8ShvfoQSjpOoFCrAH54scQ9TxK10mRdmc0FN7lpMgojQnuNZ3PdQT43mV7qDRuNJ6I%2FtGhFcYo0ZLMo0avnJvCyClmPg91Bnwf6SJ1d7sG50gYQFk72AL9A0sDh85MMCn6r0GOqUBMHSPEQCtuukw7xTgfkL6QTC0mr6MntCnQFeFMgRsfWSlbVrxtJ0stiavJewjNiUZ1o%2FxbdiM1QXqWdW5uJRZfTy8g0y3DG9QcxgQK1NIeBO6bOkHQreR0R0vZxmTKdouBZwekihbgxaWYyfkbnDBvF3l6jpHzFVg8SJO9wtIlIDzRzyhdT6hpww%2F8RafMO%2FO8tKgQggqf3zmPUEkd7YmGYD%2BQsqm&X-Amz-Signature=c8b2c818e079a3032d31fcf40c2126460e2a57bec618d5c003ed4d6ad31bbc73&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
