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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6GHACOG%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDhVBDsn%2By9Ck1NLlumhLJbWlv1ELXB8FSld1opYgldhAIhANgvi%2ByLMzfvi3K4ZPqS1Ka4%2B3P9ZIt0boK8M60EbAyAKv8DCBwQABoMNjM3NDIzMTgzODA1IgxCmP09GhGdtsDoAI0q3ANqtKSiDivFXbGDU8JC0reHXNNIlta76jwqrkzIqb%2FFbxQmJWrdu8CoA5Z15aZ%2FW65n6xx1XWxsmjTdlp69A54F%2F6HcM6MUsEpecqC0oyCk3R%2FC1LiVmRH9F3UMqC1WpvHCiP0BB6RH4otxXSEqxfSvZv3zwZF%2FeD4ROpYRKqfOjDBAFMSkCMTFmK%2BfM9BB%2BFKD2bZyiH90VIJbhjnKOiIzQl8mBuuCjvQqr%2FCDQU8ibVeNRk2SuvR2vEF9pUuzXbdOrzVLw0xktv2%2BFIC%2FzwWzuEpS6N3Qw5sZr0ihNo9zMdeWcVwCu88%2F9B%2F3otfKlzzy9XdFvrkWizUlzl2AjIKj8bfb7Emch9Vgi4QUeETOKtSapYNF4tDTP7W1oLSP4qZgsK0OTPZ9z%2FQWwjz88iRZ%2BIDSb1wKfBUlMXOVXcBL7udFuTBvJTA79nwTAmN9CgkCvX%2F98npGDRV8WImjPbmafpWKQU%2FdMcMlvvuy1aZOF1Y92L%2Ft5VbPOEb0BGhtd%2BZYxLrTYJ%2BXrSTkjcY2ltsppTx5%2B6Vkw5NALCv2uDlF4e3wfHofegJXUR62DboULmKC0Zm2Rms4s8swnoThWnTt6qd26sPaZtALXjOU4nH%2BUT3Jbv69rEQtceEOKTDH0JPBBjqkAc0Db4O16dCUh8v%2F0zws3mNAhaQjV4PXVkR%2FUS3TdjuJaA7P%2FGkLHp0j1AXFE2zP9ra5WHeAfRlRxB2XtpSuUbREtbiXleI0UKUaBSKeskFaz48WEBsQH7jqRG19TZFsQedjZrBXF8RWJmBlJTMPtgjAwXttlgjlr5qnj5L%2FPg%2FcB0mPD1FupHP1a4IJhcNIEXXtYX5a9QddAjdtqUMaUKSRauW%2F&X-Amz-Signature=ba719fce61c078d90e695cfa26aa1462a2f139450a89e90868c458cb84fd08aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6GHACOG%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDhVBDsn%2By9Ck1NLlumhLJbWlv1ELXB8FSld1opYgldhAIhANgvi%2ByLMzfvi3K4ZPqS1Ka4%2B3P9ZIt0boK8M60EbAyAKv8DCBwQABoMNjM3NDIzMTgzODA1IgxCmP09GhGdtsDoAI0q3ANqtKSiDivFXbGDU8JC0reHXNNIlta76jwqrkzIqb%2FFbxQmJWrdu8CoA5Z15aZ%2FW65n6xx1XWxsmjTdlp69A54F%2F6HcM6MUsEpecqC0oyCk3R%2FC1LiVmRH9F3UMqC1WpvHCiP0BB6RH4otxXSEqxfSvZv3zwZF%2FeD4ROpYRKqfOjDBAFMSkCMTFmK%2BfM9BB%2BFKD2bZyiH90VIJbhjnKOiIzQl8mBuuCjvQqr%2FCDQU8ibVeNRk2SuvR2vEF9pUuzXbdOrzVLw0xktv2%2BFIC%2FzwWzuEpS6N3Qw5sZr0ihNo9zMdeWcVwCu88%2F9B%2F3otfKlzzy9XdFvrkWizUlzl2AjIKj8bfb7Emch9Vgi4QUeETOKtSapYNF4tDTP7W1oLSP4qZgsK0OTPZ9z%2FQWwjz88iRZ%2BIDSb1wKfBUlMXOVXcBL7udFuTBvJTA79nwTAmN9CgkCvX%2F98npGDRV8WImjPbmafpWKQU%2FdMcMlvvuy1aZOF1Y92L%2Ft5VbPOEb0BGhtd%2BZYxLrTYJ%2BXrSTkjcY2ltsppTx5%2B6Vkw5NALCv2uDlF4e3wfHofegJXUR62DboULmKC0Zm2Rms4s8swnoThWnTt6qd26sPaZtALXjOU4nH%2BUT3Jbv69rEQtceEOKTDH0JPBBjqkAc0Db4O16dCUh8v%2F0zws3mNAhaQjV4PXVkR%2FUS3TdjuJaA7P%2FGkLHp0j1AXFE2zP9ra5WHeAfRlRxB2XtpSuUbREtbiXleI0UKUaBSKeskFaz48WEBsQH7jqRG19TZFsQedjZrBXF8RWJmBlJTMPtgjAwXttlgjlr5qnj5L%2FPg%2FcB0mPD1FupHP1a4IJhcNIEXXtYX5a9QddAjdtqUMaUKSRauW%2F&X-Amz-Signature=0bbf24bb76348d4aae6635c7fa8d323a99e05316bcf6e63daff855ee9fcb63e3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6GHACOG%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDhVBDsn%2By9Ck1NLlumhLJbWlv1ELXB8FSld1opYgldhAIhANgvi%2ByLMzfvi3K4ZPqS1Ka4%2B3P9ZIt0boK8M60EbAyAKv8DCBwQABoMNjM3NDIzMTgzODA1IgxCmP09GhGdtsDoAI0q3ANqtKSiDivFXbGDU8JC0reHXNNIlta76jwqrkzIqb%2FFbxQmJWrdu8CoA5Z15aZ%2FW65n6xx1XWxsmjTdlp69A54F%2F6HcM6MUsEpecqC0oyCk3R%2FC1LiVmRH9F3UMqC1WpvHCiP0BB6RH4otxXSEqxfSvZv3zwZF%2FeD4ROpYRKqfOjDBAFMSkCMTFmK%2BfM9BB%2BFKD2bZyiH90VIJbhjnKOiIzQl8mBuuCjvQqr%2FCDQU8ibVeNRk2SuvR2vEF9pUuzXbdOrzVLw0xktv2%2BFIC%2FzwWzuEpS6N3Qw5sZr0ihNo9zMdeWcVwCu88%2F9B%2F3otfKlzzy9XdFvrkWizUlzl2AjIKj8bfb7Emch9Vgi4QUeETOKtSapYNF4tDTP7W1oLSP4qZgsK0OTPZ9z%2FQWwjz88iRZ%2BIDSb1wKfBUlMXOVXcBL7udFuTBvJTA79nwTAmN9CgkCvX%2F98npGDRV8WImjPbmafpWKQU%2FdMcMlvvuy1aZOF1Y92L%2Ft5VbPOEb0BGhtd%2BZYxLrTYJ%2BXrSTkjcY2ltsppTx5%2B6Vkw5NALCv2uDlF4e3wfHofegJXUR62DboULmKC0Zm2Rms4s8swnoThWnTt6qd26sPaZtALXjOU4nH%2BUT3Jbv69rEQtceEOKTDH0JPBBjqkAc0Db4O16dCUh8v%2F0zws3mNAhaQjV4PXVkR%2FUS3TdjuJaA7P%2FGkLHp0j1AXFE2zP9ra5WHeAfRlRxB2XtpSuUbREtbiXleI0UKUaBSKeskFaz48WEBsQH7jqRG19TZFsQedjZrBXF8RWJmBlJTMPtgjAwXttlgjlr5qnj5L%2FPg%2FcB0mPD1FupHP1a4IJhcNIEXXtYX5a9QddAjdtqUMaUKSRauW%2F&X-Amz-Signature=fcc9a44793518d87eb5a0d6f692f62544ccd41c7f6151c0dce4d2b3a7b451a33&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6GHACOG%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDhVBDsn%2By9Ck1NLlumhLJbWlv1ELXB8FSld1opYgldhAIhANgvi%2ByLMzfvi3K4ZPqS1Ka4%2B3P9ZIt0boK8M60EbAyAKv8DCBwQABoMNjM3NDIzMTgzODA1IgxCmP09GhGdtsDoAI0q3ANqtKSiDivFXbGDU8JC0reHXNNIlta76jwqrkzIqb%2FFbxQmJWrdu8CoA5Z15aZ%2FW65n6xx1XWxsmjTdlp69A54F%2F6HcM6MUsEpecqC0oyCk3R%2FC1LiVmRH9F3UMqC1WpvHCiP0BB6RH4otxXSEqxfSvZv3zwZF%2FeD4ROpYRKqfOjDBAFMSkCMTFmK%2BfM9BB%2BFKD2bZyiH90VIJbhjnKOiIzQl8mBuuCjvQqr%2FCDQU8ibVeNRk2SuvR2vEF9pUuzXbdOrzVLw0xktv2%2BFIC%2FzwWzuEpS6N3Qw5sZr0ihNo9zMdeWcVwCu88%2F9B%2F3otfKlzzy9XdFvrkWizUlzl2AjIKj8bfb7Emch9Vgi4QUeETOKtSapYNF4tDTP7W1oLSP4qZgsK0OTPZ9z%2FQWwjz88iRZ%2BIDSb1wKfBUlMXOVXcBL7udFuTBvJTA79nwTAmN9CgkCvX%2F98npGDRV8WImjPbmafpWKQU%2FdMcMlvvuy1aZOF1Y92L%2Ft5VbPOEb0BGhtd%2BZYxLrTYJ%2BXrSTkjcY2ltsppTx5%2B6Vkw5NALCv2uDlF4e3wfHofegJXUR62DboULmKC0Zm2Rms4s8swnoThWnTt6qd26sPaZtALXjOU4nH%2BUT3Jbv69rEQtceEOKTDH0JPBBjqkAc0Db4O16dCUh8v%2F0zws3mNAhaQjV4PXVkR%2FUS3TdjuJaA7P%2FGkLHp0j1AXFE2zP9ra5WHeAfRlRxB2XtpSuUbREtbiXleI0UKUaBSKeskFaz48WEBsQH7jqRG19TZFsQedjZrBXF8RWJmBlJTMPtgjAwXttlgjlr5qnj5L%2FPg%2FcB0mPD1FupHP1a4IJhcNIEXXtYX5a9QddAjdtqUMaUKSRauW%2F&X-Amz-Signature=7ea4a6138705eaf3d9f9716ccc018b3fb180acbf2d7041425714fac7cf854072&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6GHACOG%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDhVBDsn%2By9Ck1NLlumhLJbWlv1ELXB8FSld1opYgldhAIhANgvi%2ByLMzfvi3K4ZPqS1Ka4%2B3P9ZIt0boK8M60EbAyAKv8DCBwQABoMNjM3NDIzMTgzODA1IgxCmP09GhGdtsDoAI0q3ANqtKSiDivFXbGDU8JC0reHXNNIlta76jwqrkzIqb%2FFbxQmJWrdu8CoA5Z15aZ%2FW65n6xx1XWxsmjTdlp69A54F%2F6HcM6MUsEpecqC0oyCk3R%2FC1LiVmRH9F3UMqC1WpvHCiP0BB6RH4otxXSEqxfSvZv3zwZF%2FeD4ROpYRKqfOjDBAFMSkCMTFmK%2BfM9BB%2BFKD2bZyiH90VIJbhjnKOiIzQl8mBuuCjvQqr%2FCDQU8ibVeNRk2SuvR2vEF9pUuzXbdOrzVLw0xktv2%2BFIC%2FzwWzuEpS6N3Qw5sZr0ihNo9zMdeWcVwCu88%2F9B%2F3otfKlzzy9XdFvrkWizUlzl2AjIKj8bfb7Emch9Vgi4QUeETOKtSapYNF4tDTP7W1oLSP4qZgsK0OTPZ9z%2FQWwjz88iRZ%2BIDSb1wKfBUlMXOVXcBL7udFuTBvJTA79nwTAmN9CgkCvX%2F98npGDRV8WImjPbmafpWKQU%2FdMcMlvvuy1aZOF1Y92L%2Ft5VbPOEb0BGhtd%2BZYxLrTYJ%2BXrSTkjcY2ltsppTx5%2B6Vkw5NALCv2uDlF4e3wfHofegJXUR62DboULmKC0Zm2Rms4s8swnoThWnTt6qd26sPaZtALXjOU4nH%2BUT3Jbv69rEQtceEOKTDH0JPBBjqkAc0Db4O16dCUh8v%2F0zws3mNAhaQjV4PXVkR%2FUS3TdjuJaA7P%2FGkLHp0j1AXFE2zP9ra5WHeAfRlRxB2XtpSuUbREtbiXleI0UKUaBSKeskFaz48WEBsQH7jqRG19TZFsQedjZrBXF8RWJmBlJTMPtgjAwXttlgjlr5qnj5L%2FPg%2FcB0mPD1FupHP1a4IJhcNIEXXtYX5a9QddAjdtqUMaUKSRauW%2F&X-Amz-Signature=57441a47c8f0af2e05a1e63758c67c7347569ff4650bc46b8166f7152c42f4fd&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
