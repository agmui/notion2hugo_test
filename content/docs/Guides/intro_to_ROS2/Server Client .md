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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUCYQYRC%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCbPbnrfPTmIlbTd8sfol0d8f%2FGUibZssBsC0zf7GHSlwIgR8gD3WSU14z%2ByibitEVlBszprIDusUwCU3Ohn4Zgx58qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxCHHMSM1wnbgThyCrcA6yHB2wp7PkPnT2kcL9yvM%2B%2Ff%2FiiwFzCYqWhjSpdW9bC3sI8NMgBe2Z%2BrCWjKkMDKxUxtqnhWy2naSrWLNiTlGXaPdokjYv%2F2Mhlei60B8VbAXoyL13OmaHbpMrqqbwWcF9h%2BUC%2F%2FzKdbk%2F%2BmBxOqY1EO6QW6QY9RrPSEc8Gkuqrw1H9rG5y7impi%2FINwfOuPfZ1l4law9QZ%2Frqwhg6ogOFZC8yTRURpM2ytrZYrLaHp4ySgilYQs24mG8%2B0YgpK0ykoXXzdkB2wdzq2L5beuS1l3yxE9uEqWaC%2BcQ%2FSCHMvRRCv%2BY7K%2FbScBR9xcVjRAoxUce4VCRao6q53AwO%2FqYamlAJ8g%2BtRtjwvCUjAdadGkxHA2JP9397XhfEoWcnpBIgd6ijDmLPdifykUtRC3BHsGaTW3GCcnrBQKqDL4tbT6j7PDOv%2FAS9HKqMHeUTTwepPhzz4AEmd%2FmPYWzfDb5sRNuywK2wG5S97fxHTBMSgVJi4tUNst%2Fsug3kHeFqm2OLh%2BQCCdcg6tpQz5rGLZK0dyDJQLLlJHGQJVj9VoI8dSJXPLGgfWtyilIFhYRU5aMflFVYx0mh4HCEHgw7usch%2BUtshSqJKVAuAXWU0TKrJKWuOxcGAT2m8MNg0MPXJu74GOqUBc7YQEOI9iKD0YRlXlrEQaGIKOohmEslgY5gmmFz8LBiBCMeSaA35yCGkxDL1qNRS87G6nZfgmNnTaE60uajniN0jVN1Jg6oxtL%2FG8Xfmr813PgFkxqdVj8rsMv0iby45bxUlt3ytL5MeucwBV3cGICINieO2gVCg4eiH16eD07khrWK%2BHCSvRUbd%2FUuPgcfWZFW%2FMOZNZ%2BwvtCTHC4Z4X41KUB90&X-Amz-Signature=1ddc46aa6e81aeca97a8fd1e651741b5b2893a460897a4711bd18ef29ba23d7a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUCYQYRC%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCbPbnrfPTmIlbTd8sfol0d8f%2FGUibZssBsC0zf7GHSlwIgR8gD3WSU14z%2ByibitEVlBszprIDusUwCU3Ohn4Zgx58qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxCHHMSM1wnbgThyCrcA6yHB2wp7PkPnT2kcL9yvM%2B%2Ff%2FiiwFzCYqWhjSpdW9bC3sI8NMgBe2Z%2BrCWjKkMDKxUxtqnhWy2naSrWLNiTlGXaPdokjYv%2F2Mhlei60B8VbAXoyL13OmaHbpMrqqbwWcF9h%2BUC%2F%2FzKdbk%2F%2BmBxOqY1EO6QW6QY9RrPSEc8Gkuqrw1H9rG5y7impi%2FINwfOuPfZ1l4law9QZ%2Frqwhg6ogOFZC8yTRURpM2ytrZYrLaHp4ySgilYQs24mG8%2B0YgpK0ykoXXzdkB2wdzq2L5beuS1l3yxE9uEqWaC%2BcQ%2FSCHMvRRCv%2BY7K%2FbScBR9xcVjRAoxUce4VCRao6q53AwO%2FqYamlAJ8g%2BtRtjwvCUjAdadGkxHA2JP9397XhfEoWcnpBIgd6ijDmLPdifykUtRC3BHsGaTW3GCcnrBQKqDL4tbT6j7PDOv%2FAS9HKqMHeUTTwepPhzz4AEmd%2FmPYWzfDb5sRNuywK2wG5S97fxHTBMSgVJi4tUNst%2Fsug3kHeFqm2OLh%2BQCCdcg6tpQz5rGLZK0dyDJQLLlJHGQJVj9VoI8dSJXPLGgfWtyilIFhYRU5aMflFVYx0mh4HCEHgw7usch%2BUtshSqJKVAuAXWU0TKrJKWuOxcGAT2m8MNg0MPXJu74GOqUBc7YQEOI9iKD0YRlXlrEQaGIKOohmEslgY5gmmFz8LBiBCMeSaA35yCGkxDL1qNRS87G6nZfgmNnTaE60uajniN0jVN1Jg6oxtL%2FG8Xfmr813PgFkxqdVj8rsMv0iby45bxUlt3ytL5MeucwBV3cGICINieO2gVCg4eiH16eD07khrWK%2BHCSvRUbd%2FUuPgcfWZFW%2FMOZNZ%2BwvtCTHC4Z4X41KUB90&X-Amz-Signature=36c4552f7917c03690c9aef43ceae95c9863470b67bb588898238f256e38c49b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUCYQYRC%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCbPbnrfPTmIlbTd8sfol0d8f%2FGUibZssBsC0zf7GHSlwIgR8gD3WSU14z%2ByibitEVlBszprIDusUwCU3Ohn4Zgx58qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxCHHMSM1wnbgThyCrcA6yHB2wp7PkPnT2kcL9yvM%2B%2Ff%2FiiwFzCYqWhjSpdW9bC3sI8NMgBe2Z%2BrCWjKkMDKxUxtqnhWy2naSrWLNiTlGXaPdokjYv%2F2Mhlei60B8VbAXoyL13OmaHbpMrqqbwWcF9h%2BUC%2F%2FzKdbk%2F%2BmBxOqY1EO6QW6QY9RrPSEc8Gkuqrw1H9rG5y7impi%2FINwfOuPfZ1l4law9QZ%2Frqwhg6ogOFZC8yTRURpM2ytrZYrLaHp4ySgilYQs24mG8%2B0YgpK0ykoXXzdkB2wdzq2L5beuS1l3yxE9uEqWaC%2BcQ%2FSCHMvRRCv%2BY7K%2FbScBR9xcVjRAoxUce4VCRao6q53AwO%2FqYamlAJ8g%2BtRtjwvCUjAdadGkxHA2JP9397XhfEoWcnpBIgd6ijDmLPdifykUtRC3BHsGaTW3GCcnrBQKqDL4tbT6j7PDOv%2FAS9HKqMHeUTTwepPhzz4AEmd%2FmPYWzfDb5sRNuywK2wG5S97fxHTBMSgVJi4tUNst%2Fsug3kHeFqm2OLh%2BQCCdcg6tpQz5rGLZK0dyDJQLLlJHGQJVj9VoI8dSJXPLGgfWtyilIFhYRU5aMflFVYx0mh4HCEHgw7usch%2BUtshSqJKVAuAXWU0TKrJKWuOxcGAT2m8MNg0MPXJu74GOqUBc7YQEOI9iKD0YRlXlrEQaGIKOohmEslgY5gmmFz8LBiBCMeSaA35yCGkxDL1qNRS87G6nZfgmNnTaE60uajniN0jVN1Jg6oxtL%2FG8Xfmr813PgFkxqdVj8rsMv0iby45bxUlt3ytL5MeucwBV3cGICINieO2gVCg4eiH16eD07khrWK%2BHCSvRUbd%2FUuPgcfWZFW%2FMOZNZ%2BwvtCTHC4Z4X41KUB90&X-Amz-Signature=3772ef6b3b6f3016ece9f41f07b3522f2eb8c76dcd72ad0e663c2ed5335f8a46&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUCYQYRC%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCbPbnrfPTmIlbTd8sfol0d8f%2FGUibZssBsC0zf7GHSlwIgR8gD3WSU14z%2ByibitEVlBszprIDusUwCU3Ohn4Zgx58qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxCHHMSM1wnbgThyCrcA6yHB2wp7PkPnT2kcL9yvM%2B%2Ff%2FiiwFzCYqWhjSpdW9bC3sI8NMgBe2Z%2BrCWjKkMDKxUxtqnhWy2naSrWLNiTlGXaPdokjYv%2F2Mhlei60B8VbAXoyL13OmaHbpMrqqbwWcF9h%2BUC%2F%2FzKdbk%2F%2BmBxOqY1EO6QW6QY9RrPSEc8Gkuqrw1H9rG5y7impi%2FINwfOuPfZ1l4law9QZ%2Frqwhg6ogOFZC8yTRURpM2ytrZYrLaHp4ySgilYQs24mG8%2B0YgpK0ykoXXzdkB2wdzq2L5beuS1l3yxE9uEqWaC%2BcQ%2FSCHMvRRCv%2BY7K%2FbScBR9xcVjRAoxUce4VCRao6q53AwO%2FqYamlAJ8g%2BtRtjwvCUjAdadGkxHA2JP9397XhfEoWcnpBIgd6ijDmLPdifykUtRC3BHsGaTW3GCcnrBQKqDL4tbT6j7PDOv%2FAS9HKqMHeUTTwepPhzz4AEmd%2FmPYWzfDb5sRNuywK2wG5S97fxHTBMSgVJi4tUNst%2Fsug3kHeFqm2OLh%2BQCCdcg6tpQz5rGLZK0dyDJQLLlJHGQJVj9VoI8dSJXPLGgfWtyilIFhYRU5aMflFVYx0mh4HCEHgw7usch%2BUtshSqJKVAuAXWU0TKrJKWuOxcGAT2m8MNg0MPXJu74GOqUBc7YQEOI9iKD0YRlXlrEQaGIKOohmEslgY5gmmFz8LBiBCMeSaA35yCGkxDL1qNRS87G6nZfgmNnTaE60uajniN0jVN1Jg6oxtL%2FG8Xfmr813PgFkxqdVj8rsMv0iby45bxUlt3ytL5MeucwBV3cGICINieO2gVCg4eiH16eD07khrWK%2BHCSvRUbd%2FUuPgcfWZFW%2FMOZNZ%2BwvtCTHC4Z4X41KUB90&X-Amz-Signature=8289a518c801ed95c0c6f991a78de4f6fe76f2862f45fe80a7d3dc0888f8235e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUCYQYRC%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCbPbnrfPTmIlbTd8sfol0d8f%2FGUibZssBsC0zf7GHSlwIgR8gD3WSU14z%2ByibitEVlBszprIDusUwCU3Ohn4Zgx58qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxCHHMSM1wnbgThyCrcA6yHB2wp7PkPnT2kcL9yvM%2B%2Ff%2FiiwFzCYqWhjSpdW9bC3sI8NMgBe2Z%2BrCWjKkMDKxUxtqnhWy2naSrWLNiTlGXaPdokjYv%2F2Mhlei60B8VbAXoyL13OmaHbpMrqqbwWcF9h%2BUC%2F%2FzKdbk%2F%2BmBxOqY1EO6QW6QY9RrPSEc8Gkuqrw1H9rG5y7impi%2FINwfOuPfZ1l4law9QZ%2Frqwhg6ogOFZC8yTRURpM2ytrZYrLaHp4ySgilYQs24mG8%2B0YgpK0ykoXXzdkB2wdzq2L5beuS1l3yxE9uEqWaC%2BcQ%2FSCHMvRRCv%2BY7K%2FbScBR9xcVjRAoxUce4VCRao6q53AwO%2FqYamlAJ8g%2BtRtjwvCUjAdadGkxHA2JP9397XhfEoWcnpBIgd6ijDmLPdifykUtRC3BHsGaTW3GCcnrBQKqDL4tbT6j7PDOv%2FAS9HKqMHeUTTwepPhzz4AEmd%2FmPYWzfDb5sRNuywK2wG5S97fxHTBMSgVJi4tUNst%2Fsug3kHeFqm2OLh%2BQCCdcg6tpQz5rGLZK0dyDJQLLlJHGQJVj9VoI8dSJXPLGgfWtyilIFhYRU5aMflFVYx0mh4HCEHgw7usch%2BUtshSqJKVAuAXWU0TKrJKWuOxcGAT2m8MNg0MPXJu74GOqUBc7YQEOI9iKD0YRlXlrEQaGIKOohmEslgY5gmmFz8LBiBCMeSaA35yCGkxDL1qNRS87G6nZfgmNnTaE60uajniN0jVN1Jg6oxtL%2FG8Xfmr813PgFkxqdVj8rsMv0iby45bxUlt3ytL5MeucwBV3cGICINieO2gVCg4eiH16eD07khrWK%2BHCSvRUbd%2FUuPgcfWZFW%2FMOZNZ%2BwvtCTHC4Z4X41KUB90&X-Amz-Signature=a3c110b6d38e11f3b0d4510f761a6aa74eceb188e72ed8bea73e86fc02459145&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
