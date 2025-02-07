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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYIB6L4O%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCAq3AhGBMFH%2B2l3ClIGxIbg%2BcW%2B9zgvUJOxxST92CIMwIgY8BhT0ceemnQNJIbP%2Flik74xx20Ji1U9ceku2%2F5zMlIq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDN%2BEDsE7jaHIx%2FJuxyrcA2nIzG2IIj5TPiz%2FCVkC5W%2FBjLxJx1seno8TTjWkCCCU5ZJFaVCjkhwyDjL2mu5OdrkDMHduYDOXnPLIAt77%2BQKOv%2FI5SkzbKTNOe9lpCk02GaU6LpAm%2BmWTSxXrl4qhdGyc0Qxeh3zKwgda30mPpfGkvg7PbXe5RR%2FjE58WLqe2%2Bv7nKirm87cw9j%2FYNXRRjQLamOYfak2Hn2ultuwLGm1YbSdGew7YKs8NwojLLdmyEtBLBmG71e1kT2jggfUZhnK5hwzFdO4fQfF%2Bvr8JZx7Pi1E7It2wmL5vV%2FluSLYCMOHLye%2FlN1uU%2BpU6M38DCjhwO1SMRKxOAufgs%2B3u2z7wFj1e1tmhgIgohQ4IfHq4tWCAdV9mCw0115SPXzB8HLlRM45MoqhRdcwXcGQYy1O%2BqQElWhewxyafu6yRRa8Bw%2BpMelpZq%2Be1LLCRR0sscUjyQbW9ZaPFpZRQid9n8k3bkQlVcz3q5zzb0WCpmhug5KERL8%2BeMqi%2BtaAGWXNqxZxPRWXW0L0k406JMCu4tCrpW%2F4b9Ywwubw2MmCLDmJzNMXa8qShtJ8h%2BbTZBXxH5B7Ipv7cqhVs0DEneZL%2B1yKYNpZ0bEcTpGWkaDCqIYGzK7Y%2BR9exfIOrBD3iMJSblb0GOqUBin7GGHOGfLn1ezwLnTXmqlDmh7%2F2pypzzGbhsdimKUS3uFdEdxlwDzfYrptFEsA5KMVi1uL16LK9shktWAofD6TL1j7sUmT5He05P4K7iOmTnawNP7ohqd6lJqwNgnyJT3rqIKHedEExJdZgVwb8%2FMF6qtzp73Q%2F2pfUr%2BixNtQtkwLIzHC0oNWKmhzNR2NHZj5sOKuJL3bWE4fajjpGUKszG%2BfJ&X-Amz-Signature=b78ffeaf93d91f16b463c6580231a3905bfa6fdeb0d2a9783db8b8f183171244&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYIB6L4O%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCAq3AhGBMFH%2B2l3ClIGxIbg%2BcW%2B9zgvUJOxxST92CIMwIgY8BhT0ceemnQNJIbP%2Flik74xx20Ji1U9ceku2%2F5zMlIq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDN%2BEDsE7jaHIx%2FJuxyrcA2nIzG2IIj5TPiz%2FCVkC5W%2FBjLxJx1seno8TTjWkCCCU5ZJFaVCjkhwyDjL2mu5OdrkDMHduYDOXnPLIAt77%2BQKOv%2FI5SkzbKTNOe9lpCk02GaU6LpAm%2BmWTSxXrl4qhdGyc0Qxeh3zKwgda30mPpfGkvg7PbXe5RR%2FjE58WLqe2%2Bv7nKirm87cw9j%2FYNXRRjQLamOYfak2Hn2ultuwLGm1YbSdGew7YKs8NwojLLdmyEtBLBmG71e1kT2jggfUZhnK5hwzFdO4fQfF%2Bvr8JZx7Pi1E7It2wmL5vV%2FluSLYCMOHLye%2FlN1uU%2BpU6M38DCjhwO1SMRKxOAufgs%2B3u2z7wFj1e1tmhgIgohQ4IfHq4tWCAdV9mCw0115SPXzB8HLlRM45MoqhRdcwXcGQYy1O%2BqQElWhewxyafu6yRRa8Bw%2BpMelpZq%2Be1LLCRR0sscUjyQbW9ZaPFpZRQid9n8k3bkQlVcz3q5zzb0WCpmhug5KERL8%2BeMqi%2BtaAGWXNqxZxPRWXW0L0k406JMCu4tCrpW%2F4b9Ywwubw2MmCLDmJzNMXa8qShtJ8h%2BbTZBXxH5B7Ipv7cqhVs0DEneZL%2B1yKYNpZ0bEcTpGWkaDCqIYGzK7Y%2BR9exfIOrBD3iMJSblb0GOqUBin7GGHOGfLn1ezwLnTXmqlDmh7%2F2pypzzGbhsdimKUS3uFdEdxlwDzfYrptFEsA5KMVi1uL16LK9shktWAofD6TL1j7sUmT5He05P4K7iOmTnawNP7ohqd6lJqwNgnyJT3rqIKHedEExJdZgVwb8%2FMF6qtzp73Q%2F2pfUr%2BixNtQtkwLIzHC0oNWKmhzNR2NHZj5sOKuJL3bWE4fajjpGUKszG%2BfJ&X-Amz-Signature=6f1c8d828ffc40c1678ea0f2737c75a78d210bb52bed2eaac1e31c4e1eaea5fb&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYIB6L4O%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCAq3AhGBMFH%2B2l3ClIGxIbg%2BcW%2B9zgvUJOxxST92CIMwIgY8BhT0ceemnQNJIbP%2Flik74xx20Ji1U9ceku2%2F5zMlIq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDN%2BEDsE7jaHIx%2FJuxyrcA2nIzG2IIj5TPiz%2FCVkC5W%2FBjLxJx1seno8TTjWkCCCU5ZJFaVCjkhwyDjL2mu5OdrkDMHduYDOXnPLIAt77%2BQKOv%2FI5SkzbKTNOe9lpCk02GaU6LpAm%2BmWTSxXrl4qhdGyc0Qxeh3zKwgda30mPpfGkvg7PbXe5RR%2FjE58WLqe2%2Bv7nKirm87cw9j%2FYNXRRjQLamOYfak2Hn2ultuwLGm1YbSdGew7YKs8NwojLLdmyEtBLBmG71e1kT2jggfUZhnK5hwzFdO4fQfF%2Bvr8JZx7Pi1E7It2wmL5vV%2FluSLYCMOHLye%2FlN1uU%2BpU6M38DCjhwO1SMRKxOAufgs%2B3u2z7wFj1e1tmhgIgohQ4IfHq4tWCAdV9mCw0115SPXzB8HLlRM45MoqhRdcwXcGQYy1O%2BqQElWhewxyafu6yRRa8Bw%2BpMelpZq%2Be1LLCRR0sscUjyQbW9ZaPFpZRQid9n8k3bkQlVcz3q5zzb0WCpmhug5KERL8%2BeMqi%2BtaAGWXNqxZxPRWXW0L0k406JMCu4tCrpW%2F4b9Ywwubw2MmCLDmJzNMXa8qShtJ8h%2BbTZBXxH5B7Ipv7cqhVs0DEneZL%2B1yKYNpZ0bEcTpGWkaDCqIYGzK7Y%2BR9exfIOrBD3iMJSblb0GOqUBin7GGHOGfLn1ezwLnTXmqlDmh7%2F2pypzzGbhsdimKUS3uFdEdxlwDzfYrptFEsA5KMVi1uL16LK9shktWAofD6TL1j7sUmT5He05P4K7iOmTnawNP7ohqd6lJqwNgnyJT3rqIKHedEExJdZgVwb8%2FMF6qtzp73Q%2F2pfUr%2BixNtQtkwLIzHC0oNWKmhzNR2NHZj5sOKuJL3bWE4fajjpGUKszG%2BfJ&X-Amz-Signature=fb4dac5ff32e4ec29b0c6989b4a151a862e777fb46989e3954cdc7c1384eb2b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYIB6L4O%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCAq3AhGBMFH%2B2l3ClIGxIbg%2BcW%2B9zgvUJOxxST92CIMwIgY8BhT0ceemnQNJIbP%2Flik74xx20Ji1U9ceku2%2F5zMlIq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDN%2BEDsE7jaHIx%2FJuxyrcA2nIzG2IIj5TPiz%2FCVkC5W%2FBjLxJx1seno8TTjWkCCCU5ZJFaVCjkhwyDjL2mu5OdrkDMHduYDOXnPLIAt77%2BQKOv%2FI5SkzbKTNOe9lpCk02GaU6LpAm%2BmWTSxXrl4qhdGyc0Qxeh3zKwgda30mPpfGkvg7PbXe5RR%2FjE58WLqe2%2Bv7nKirm87cw9j%2FYNXRRjQLamOYfak2Hn2ultuwLGm1YbSdGew7YKs8NwojLLdmyEtBLBmG71e1kT2jggfUZhnK5hwzFdO4fQfF%2Bvr8JZx7Pi1E7It2wmL5vV%2FluSLYCMOHLye%2FlN1uU%2BpU6M38DCjhwO1SMRKxOAufgs%2B3u2z7wFj1e1tmhgIgohQ4IfHq4tWCAdV9mCw0115SPXzB8HLlRM45MoqhRdcwXcGQYy1O%2BqQElWhewxyafu6yRRa8Bw%2BpMelpZq%2Be1LLCRR0sscUjyQbW9ZaPFpZRQid9n8k3bkQlVcz3q5zzb0WCpmhug5KERL8%2BeMqi%2BtaAGWXNqxZxPRWXW0L0k406JMCu4tCrpW%2F4b9Ywwubw2MmCLDmJzNMXa8qShtJ8h%2BbTZBXxH5B7Ipv7cqhVs0DEneZL%2B1yKYNpZ0bEcTpGWkaDCqIYGzK7Y%2BR9exfIOrBD3iMJSblb0GOqUBin7GGHOGfLn1ezwLnTXmqlDmh7%2F2pypzzGbhsdimKUS3uFdEdxlwDzfYrptFEsA5KMVi1uL16LK9shktWAofD6TL1j7sUmT5He05P4K7iOmTnawNP7ohqd6lJqwNgnyJT3rqIKHedEExJdZgVwb8%2FMF6qtzp73Q%2F2pfUr%2BixNtQtkwLIzHC0oNWKmhzNR2NHZj5sOKuJL3bWE4fajjpGUKszG%2BfJ&X-Amz-Signature=af25100b4498b3f919eadaee1a7019ee3a31c95b4add2353b8331f38ed91c920&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYIB6L4O%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCAq3AhGBMFH%2B2l3ClIGxIbg%2BcW%2B9zgvUJOxxST92CIMwIgY8BhT0ceemnQNJIbP%2Flik74xx20Ji1U9ceku2%2F5zMlIq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDN%2BEDsE7jaHIx%2FJuxyrcA2nIzG2IIj5TPiz%2FCVkC5W%2FBjLxJx1seno8TTjWkCCCU5ZJFaVCjkhwyDjL2mu5OdrkDMHduYDOXnPLIAt77%2BQKOv%2FI5SkzbKTNOe9lpCk02GaU6LpAm%2BmWTSxXrl4qhdGyc0Qxeh3zKwgda30mPpfGkvg7PbXe5RR%2FjE58WLqe2%2Bv7nKirm87cw9j%2FYNXRRjQLamOYfak2Hn2ultuwLGm1YbSdGew7YKs8NwojLLdmyEtBLBmG71e1kT2jggfUZhnK5hwzFdO4fQfF%2Bvr8JZx7Pi1E7It2wmL5vV%2FluSLYCMOHLye%2FlN1uU%2BpU6M38DCjhwO1SMRKxOAufgs%2B3u2z7wFj1e1tmhgIgohQ4IfHq4tWCAdV9mCw0115SPXzB8HLlRM45MoqhRdcwXcGQYy1O%2BqQElWhewxyafu6yRRa8Bw%2BpMelpZq%2Be1LLCRR0sscUjyQbW9ZaPFpZRQid9n8k3bkQlVcz3q5zzb0WCpmhug5KERL8%2BeMqi%2BtaAGWXNqxZxPRWXW0L0k406JMCu4tCrpW%2F4b9Ywwubw2MmCLDmJzNMXa8qShtJ8h%2BbTZBXxH5B7Ipv7cqhVs0DEneZL%2B1yKYNpZ0bEcTpGWkaDCqIYGzK7Y%2BR9exfIOrBD3iMJSblb0GOqUBin7GGHOGfLn1ezwLnTXmqlDmh7%2F2pypzzGbhsdimKUS3uFdEdxlwDzfYrptFEsA5KMVi1uL16LK9shktWAofD6TL1j7sUmT5He05P4K7iOmTnawNP7ohqd6lJqwNgnyJT3rqIKHedEExJdZgVwb8%2FMF6qtzp73Q%2F2pfUr%2BixNtQtkwLIzHC0oNWKmhzNR2NHZj5sOKuJL3bWE4fajjpGUKszG%2BfJ&X-Amz-Signature=b4f4c50d7357dd9185b6333dbb768d2eabf38b983d5f4ba60dddf833426195c5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
