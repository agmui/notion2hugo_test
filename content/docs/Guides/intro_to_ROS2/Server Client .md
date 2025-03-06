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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3Y2UFYV%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBB1DFuA%2FsX9%2FAHqwX%2B524ay9QNXdw66QgcZt2pztMdAiEA3VV2s3fygiAJNPE8FJ1bJFLDgVLZCzVja%2FIrQIkqk%2FYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLWpOLFxh2Y0ISll2CrcAz81GEVphhd1NV0LpfuyzkwHUysnOm12TW%2BXbBI1b7chwSdZwFqjs7LrNlDgY5onHQA2C2XKbUjWJ%2BRL1UZpvMBCCUlEwSSex5RMXEU53OgUXSzroQkvWLLS6B48WbevoGgWGNu56JEYs6sv8o6w8KeXB%2FOEmZOcbrHi3O6lolznZKQuOOCdnXa8YqDLwjJawris9oj1AapXuozt9aWiyQ525EtHVVpsrwnmZ9mpCWBXioTzIDw%2FhNncooCO2wc6EZXUNBcuSrpqe%2F%2F0wgaitMHuuwY1mnXwBkC5p3SnB%2Fw6dVc9LRHdBs4K9RxpcB4RBpb3f2%2F6mlM%2BgUX%2BsBga1%2FeyuYwV9%2Fk9pJh0gtFKMOUtpG%2FuxK3rzusGtp2iCERpAyEHsGlEMEDbUKRzhScbgluhbkM7oEiR15FP358udc8Ali3FUanFMgVJnIKXDrpavF6u6Hh45fkjZLkqXwTYkC2RIVfdkvb7jffI%2Bbp5cN6xIP7t%2BhVKqwpRpmXGo8T8bD9YoV6qZzSSMtHTI1MO8MU3Y7dEyh4D0ulmTBFsAa%2BWeD9Iaat%2Bx2haltrbF96OM56S20st3k5iMhsFYNF5y282ct9sJ68JeBqzwndrorsG5p%2FMnPGT42ax6H8IMIW2pb4GOqUBGWyULfFAF%2BwNYPW208aQnhUJQ6sj6wS6LVvsNuZIxwfC6GAvfAZl5Z792INIPBBKEXgpLhdfyldQc7Tjx5oNDXVWJlzea5LkaCIgwAn9LGfx%2FRAbJZi1OGbBNu6HcnUOyc7RS0QI3VuxXWT5H3VUDj5G5zN41qMoEWs2Etxck1h9E%2Br4Df6SL7pc1EQ%2FxF0otRcmB1rP8XRc4AqECPOc%2FLPZUAe2&X-Amz-Signature=efb41b9ad96c09e614b9b70d5a6d626663d484ad3e76a20a3c35a87ad3ff698e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3Y2UFYV%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBB1DFuA%2FsX9%2FAHqwX%2B524ay9QNXdw66QgcZt2pztMdAiEA3VV2s3fygiAJNPE8FJ1bJFLDgVLZCzVja%2FIrQIkqk%2FYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLWpOLFxh2Y0ISll2CrcAz81GEVphhd1NV0LpfuyzkwHUysnOm12TW%2BXbBI1b7chwSdZwFqjs7LrNlDgY5onHQA2C2XKbUjWJ%2BRL1UZpvMBCCUlEwSSex5RMXEU53OgUXSzroQkvWLLS6B48WbevoGgWGNu56JEYs6sv8o6w8KeXB%2FOEmZOcbrHi3O6lolznZKQuOOCdnXa8YqDLwjJawris9oj1AapXuozt9aWiyQ525EtHVVpsrwnmZ9mpCWBXioTzIDw%2FhNncooCO2wc6EZXUNBcuSrpqe%2F%2F0wgaitMHuuwY1mnXwBkC5p3SnB%2Fw6dVc9LRHdBs4K9RxpcB4RBpb3f2%2F6mlM%2BgUX%2BsBga1%2FeyuYwV9%2Fk9pJh0gtFKMOUtpG%2FuxK3rzusGtp2iCERpAyEHsGlEMEDbUKRzhScbgluhbkM7oEiR15FP358udc8Ali3FUanFMgVJnIKXDrpavF6u6Hh45fkjZLkqXwTYkC2RIVfdkvb7jffI%2Bbp5cN6xIP7t%2BhVKqwpRpmXGo8T8bD9YoV6qZzSSMtHTI1MO8MU3Y7dEyh4D0ulmTBFsAa%2BWeD9Iaat%2Bx2haltrbF96OM56S20st3k5iMhsFYNF5y282ct9sJ68JeBqzwndrorsG5p%2FMnPGT42ax6H8IMIW2pb4GOqUBGWyULfFAF%2BwNYPW208aQnhUJQ6sj6wS6LVvsNuZIxwfC6GAvfAZl5Z792INIPBBKEXgpLhdfyldQc7Tjx5oNDXVWJlzea5LkaCIgwAn9LGfx%2FRAbJZi1OGbBNu6HcnUOyc7RS0QI3VuxXWT5H3VUDj5G5zN41qMoEWs2Etxck1h9E%2Br4Df6SL7pc1EQ%2FxF0otRcmB1rP8XRc4AqECPOc%2FLPZUAe2&X-Amz-Signature=8656a7c4be0302e881769a38c044e7cef64a7be4c93ca3b35abc18cbe7551877&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3Y2UFYV%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBB1DFuA%2FsX9%2FAHqwX%2B524ay9QNXdw66QgcZt2pztMdAiEA3VV2s3fygiAJNPE8FJ1bJFLDgVLZCzVja%2FIrQIkqk%2FYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLWpOLFxh2Y0ISll2CrcAz81GEVphhd1NV0LpfuyzkwHUysnOm12TW%2BXbBI1b7chwSdZwFqjs7LrNlDgY5onHQA2C2XKbUjWJ%2BRL1UZpvMBCCUlEwSSex5RMXEU53OgUXSzroQkvWLLS6B48WbevoGgWGNu56JEYs6sv8o6w8KeXB%2FOEmZOcbrHi3O6lolznZKQuOOCdnXa8YqDLwjJawris9oj1AapXuozt9aWiyQ525EtHVVpsrwnmZ9mpCWBXioTzIDw%2FhNncooCO2wc6EZXUNBcuSrpqe%2F%2F0wgaitMHuuwY1mnXwBkC5p3SnB%2Fw6dVc9LRHdBs4K9RxpcB4RBpb3f2%2F6mlM%2BgUX%2BsBga1%2FeyuYwV9%2Fk9pJh0gtFKMOUtpG%2FuxK3rzusGtp2iCERpAyEHsGlEMEDbUKRzhScbgluhbkM7oEiR15FP358udc8Ali3FUanFMgVJnIKXDrpavF6u6Hh45fkjZLkqXwTYkC2RIVfdkvb7jffI%2Bbp5cN6xIP7t%2BhVKqwpRpmXGo8T8bD9YoV6qZzSSMtHTI1MO8MU3Y7dEyh4D0ulmTBFsAa%2BWeD9Iaat%2Bx2haltrbF96OM56S20st3k5iMhsFYNF5y282ct9sJ68JeBqzwndrorsG5p%2FMnPGT42ax6H8IMIW2pb4GOqUBGWyULfFAF%2BwNYPW208aQnhUJQ6sj6wS6LVvsNuZIxwfC6GAvfAZl5Z792INIPBBKEXgpLhdfyldQc7Tjx5oNDXVWJlzea5LkaCIgwAn9LGfx%2FRAbJZi1OGbBNu6HcnUOyc7RS0QI3VuxXWT5H3VUDj5G5zN41qMoEWs2Etxck1h9E%2Br4Df6SL7pc1EQ%2FxF0otRcmB1rP8XRc4AqECPOc%2FLPZUAe2&X-Amz-Signature=bfd1c1aa8b8bf3543d62d07a9de04f88a7ca831f4d53d9d52d64f0c5cd83432e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3Y2UFYV%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBB1DFuA%2FsX9%2FAHqwX%2B524ay9QNXdw66QgcZt2pztMdAiEA3VV2s3fygiAJNPE8FJ1bJFLDgVLZCzVja%2FIrQIkqk%2FYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLWpOLFxh2Y0ISll2CrcAz81GEVphhd1NV0LpfuyzkwHUysnOm12TW%2BXbBI1b7chwSdZwFqjs7LrNlDgY5onHQA2C2XKbUjWJ%2BRL1UZpvMBCCUlEwSSex5RMXEU53OgUXSzroQkvWLLS6B48WbevoGgWGNu56JEYs6sv8o6w8KeXB%2FOEmZOcbrHi3O6lolznZKQuOOCdnXa8YqDLwjJawris9oj1AapXuozt9aWiyQ525EtHVVpsrwnmZ9mpCWBXioTzIDw%2FhNncooCO2wc6EZXUNBcuSrpqe%2F%2F0wgaitMHuuwY1mnXwBkC5p3SnB%2Fw6dVc9LRHdBs4K9RxpcB4RBpb3f2%2F6mlM%2BgUX%2BsBga1%2FeyuYwV9%2Fk9pJh0gtFKMOUtpG%2FuxK3rzusGtp2iCERpAyEHsGlEMEDbUKRzhScbgluhbkM7oEiR15FP358udc8Ali3FUanFMgVJnIKXDrpavF6u6Hh45fkjZLkqXwTYkC2RIVfdkvb7jffI%2Bbp5cN6xIP7t%2BhVKqwpRpmXGo8T8bD9YoV6qZzSSMtHTI1MO8MU3Y7dEyh4D0ulmTBFsAa%2BWeD9Iaat%2Bx2haltrbF96OM56S20st3k5iMhsFYNF5y282ct9sJ68JeBqzwndrorsG5p%2FMnPGT42ax6H8IMIW2pb4GOqUBGWyULfFAF%2BwNYPW208aQnhUJQ6sj6wS6LVvsNuZIxwfC6GAvfAZl5Z792INIPBBKEXgpLhdfyldQc7Tjx5oNDXVWJlzea5LkaCIgwAn9LGfx%2FRAbJZi1OGbBNu6HcnUOyc7RS0QI3VuxXWT5H3VUDj5G5zN41qMoEWs2Etxck1h9E%2Br4Df6SL7pc1EQ%2FxF0otRcmB1rP8XRc4AqECPOc%2FLPZUAe2&X-Amz-Signature=f5acf6bc10e7710dcf683924d1fcb38e0652f54d4a72a271b797450483188655&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3Y2UFYV%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBB1DFuA%2FsX9%2FAHqwX%2B524ay9QNXdw66QgcZt2pztMdAiEA3VV2s3fygiAJNPE8FJ1bJFLDgVLZCzVja%2FIrQIkqk%2FYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLWpOLFxh2Y0ISll2CrcAz81GEVphhd1NV0LpfuyzkwHUysnOm12TW%2BXbBI1b7chwSdZwFqjs7LrNlDgY5onHQA2C2XKbUjWJ%2BRL1UZpvMBCCUlEwSSex5RMXEU53OgUXSzroQkvWLLS6B48WbevoGgWGNu56JEYs6sv8o6w8KeXB%2FOEmZOcbrHi3O6lolznZKQuOOCdnXa8YqDLwjJawris9oj1AapXuozt9aWiyQ525EtHVVpsrwnmZ9mpCWBXioTzIDw%2FhNncooCO2wc6EZXUNBcuSrpqe%2F%2F0wgaitMHuuwY1mnXwBkC5p3SnB%2Fw6dVc9LRHdBs4K9RxpcB4RBpb3f2%2F6mlM%2BgUX%2BsBga1%2FeyuYwV9%2Fk9pJh0gtFKMOUtpG%2FuxK3rzusGtp2iCERpAyEHsGlEMEDbUKRzhScbgluhbkM7oEiR15FP358udc8Ali3FUanFMgVJnIKXDrpavF6u6Hh45fkjZLkqXwTYkC2RIVfdkvb7jffI%2Bbp5cN6xIP7t%2BhVKqwpRpmXGo8T8bD9YoV6qZzSSMtHTI1MO8MU3Y7dEyh4D0ulmTBFsAa%2BWeD9Iaat%2Bx2haltrbF96OM56S20st3k5iMhsFYNF5y282ct9sJ68JeBqzwndrorsG5p%2FMnPGT42ax6H8IMIW2pb4GOqUBGWyULfFAF%2BwNYPW208aQnhUJQ6sj6wS6LVvsNuZIxwfC6GAvfAZl5Z792INIPBBKEXgpLhdfyldQc7Tjx5oNDXVWJlzea5LkaCIgwAn9LGfx%2FRAbJZi1OGbBNu6HcnUOyc7RS0QI3VuxXWT5H3VUDj5G5zN41qMoEWs2Etxck1h9E%2Br4Df6SL7pc1EQ%2FxF0otRcmB1rP8XRc4AqECPOc%2FLPZUAe2&X-Amz-Signature=d8b646d7af17150d6913e9efe082766cb5f741aa6f191f4d11555adbae06642a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
