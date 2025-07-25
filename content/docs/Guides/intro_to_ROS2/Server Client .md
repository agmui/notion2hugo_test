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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK62XXO3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDeQLN%2FxIErEMMnQndY2uzS%2B%2BcSc1EHt0W12tNtAvjjNAIgOafcFaFEGa4LsgFD77rteWAW8WqS%2FIwYXHl82B8dakQq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBCmDxh%2BRCZu9NIitircA16JCpSzoQYKxPmQ064qSoRBVu6Uczj42z2HqoimYi2eGkXZ4hihMGCacbw5mJgfljoycJAQyMYs1uMxzI%2Bc0lrlCyzsQpb1yhsED73KxQ7NsaJEL3rJt8%2FcdlpkBHdXo%2FWdx5LLirnk10ByyHliZotNviBvpx4eaUvyJ8SW88hDpTUT%2FuxpoopYinvWIVnurgZFbbzkEWu9LMLOPBhe8YHdjhYxzBt1QD83gJnWXiXJn2Vu1Ds%2FoVk%2FFLF3hTyC3%2Fz0t9ERJRU9aGWec7%2FAGvKjsMfNnF1vwyUx4MdlfLtAZRX%2BXjdgmXIbG6wjd97kzEPaoaSy9puhueOBRK%2BP%2FEdVS4CwSs2gD9Xbi6msGQfK00FxfzV34s3RfcJnW%2FtHVCftXR2wswDBktb0N5sic8S6zR12dppaQhl72kxWY61uNK9hW8Aeayo2LRX%2BXp6h1JBwnr3C60dXHK3lacZYmj72CMGOBUgGJyg59Mhl%2Bc0HEEcXVD1Nk0CWHmto6h0KfRq6E9vtuAPZMW4K0VfzjaDLS2Wti1vCctrNhs%2Be5zj1L1MpHZSPfFUC2RBIz%2Bs79d4zztAqDtk1eA6ewNeYYntg5WtmmOZMdzt8S07Ygd7ma0xL85rOarifLVxQMJv%2FlMQGOqUB7XG4oYuHg1XZfES0K00AZmTFxh%2Bd2Q6y04KJk8tKenLtijOqfJtX4Exm2lLKqqD54HfnXLVxf9ZIpXF8KFH9tP%2FxQvK9bqnVZudamIMNCEMKFBCUXR%2FywKHwOYqt5yDF8wAb3gPcDQZLaDqjePdZerky%2B0BpSl5KWKZ1APmsspcmEkvpx6lodCJEFJASCwB7PrY07Z2WAZKZbgWe2Ift00MTtD0f&X-Amz-Signature=d3ba92b849ec1c7e1fcb3dfe3e04482b14639b7ea1dbcf2c8ad30290509d00cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK62XXO3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDeQLN%2FxIErEMMnQndY2uzS%2B%2BcSc1EHt0W12tNtAvjjNAIgOafcFaFEGa4LsgFD77rteWAW8WqS%2FIwYXHl82B8dakQq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBCmDxh%2BRCZu9NIitircA16JCpSzoQYKxPmQ064qSoRBVu6Uczj42z2HqoimYi2eGkXZ4hihMGCacbw5mJgfljoycJAQyMYs1uMxzI%2Bc0lrlCyzsQpb1yhsED73KxQ7NsaJEL3rJt8%2FcdlpkBHdXo%2FWdx5LLirnk10ByyHliZotNviBvpx4eaUvyJ8SW88hDpTUT%2FuxpoopYinvWIVnurgZFbbzkEWu9LMLOPBhe8YHdjhYxzBt1QD83gJnWXiXJn2Vu1Ds%2FoVk%2FFLF3hTyC3%2Fz0t9ERJRU9aGWec7%2FAGvKjsMfNnF1vwyUx4MdlfLtAZRX%2BXjdgmXIbG6wjd97kzEPaoaSy9puhueOBRK%2BP%2FEdVS4CwSs2gD9Xbi6msGQfK00FxfzV34s3RfcJnW%2FtHVCftXR2wswDBktb0N5sic8S6zR12dppaQhl72kxWY61uNK9hW8Aeayo2LRX%2BXp6h1JBwnr3C60dXHK3lacZYmj72CMGOBUgGJyg59Mhl%2Bc0HEEcXVD1Nk0CWHmto6h0KfRq6E9vtuAPZMW4K0VfzjaDLS2Wti1vCctrNhs%2Be5zj1L1MpHZSPfFUC2RBIz%2Bs79d4zztAqDtk1eA6ewNeYYntg5WtmmOZMdzt8S07Ygd7ma0xL85rOarifLVxQMJv%2FlMQGOqUB7XG4oYuHg1XZfES0K00AZmTFxh%2Bd2Q6y04KJk8tKenLtijOqfJtX4Exm2lLKqqD54HfnXLVxf9ZIpXF8KFH9tP%2FxQvK9bqnVZudamIMNCEMKFBCUXR%2FywKHwOYqt5yDF8wAb3gPcDQZLaDqjePdZerky%2B0BpSl5KWKZ1APmsspcmEkvpx6lodCJEFJASCwB7PrY07Z2WAZKZbgWe2Ift00MTtD0f&X-Amz-Signature=68b128e18e84a75c0626f533f5f8dff51b99b5ad38c7c5f0d99bf84d2ee44384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK62XXO3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDeQLN%2FxIErEMMnQndY2uzS%2B%2BcSc1EHt0W12tNtAvjjNAIgOafcFaFEGa4LsgFD77rteWAW8WqS%2FIwYXHl82B8dakQq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBCmDxh%2BRCZu9NIitircA16JCpSzoQYKxPmQ064qSoRBVu6Uczj42z2HqoimYi2eGkXZ4hihMGCacbw5mJgfljoycJAQyMYs1uMxzI%2Bc0lrlCyzsQpb1yhsED73KxQ7NsaJEL3rJt8%2FcdlpkBHdXo%2FWdx5LLirnk10ByyHliZotNviBvpx4eaUvyJ8SW88hDpTUT%2FuxpoopYinvWIVnurgZFbbzkEWu9LMLOPBhe8YHdjhYxzBt1QD83gJnWXiXJn2Vu1Ds%2FoVk%2FFLF3hTyC3%2Fz0t9ERJRU9aGWec7%2FAGvKjsMfNnF1vwyUx4MdlfLtAZRX%2BXjdgmXIbG6wjd97kzEPaoaSy9puhueOBRK%2BP%2FEdVS4CwSs2gD9Xbi6msGQfK00FxfzV34s3RfcJnW%2FtHVCftXR2wswDBktb0N5sic8S6zR12dppaQhl72kxWY61uNK9hW8Aeayo2LRX%2BXp6h1JBwnr3C60dXHK3lacZYmj72CMGOBUgGJyg59Mhl%2Bc0HEEcXVD1Nk0CWHmto6h0KfRq6E9vtuAPZMW4K0VfzjaDLS2Wti1vCctrNhs%2Be5zj1L1MpHZSPfFUC2RBIz%2Bs79d4zztAqDtk1eA6ewNeYYntg5WtmmOZMdzt8S07Ygd7ma0xL85rOarifLVxQMJv%2FlMQGOqUB7XG4oYuHg1XZfES0K00AZmTFxh%2Bd2Q6y04KJk8tKenLtijOqfJtX4Exm2lLKqqD54HfnXLVxf9ZIpXF8KFH9tP%2FxQvK9bqnVZudamIMNCEMKFBCUXR%2FywKHwOYqt5yDF8wAb3gPcDQZLaDqjePdZerky%2B0BpSl5KWKZ1APmsspcmEkvpx6lodCJEFJASCwB7PrY07Z2WAZKZbgWe2Ift00MTtD0f&X-Amz-Signature=43019df7a5486c700385a4ea822c7aad7032e3f5aafce879732b9c1961bc91ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK62XXO3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDeQLN%2FxIErEMMnQndY2uzS%2B%2BcSc1EHt0W12tNtAvjjNAIgOafcFaFEGa4LsgFD77rteWAW8WqS%2FIwYXHl82B8dakQq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBCmDxh%2BRCZu9NIitircA16JCpSzoQYKxPmQ064qSoRBVu6Uczj42z2HqoimYi2eGkXZ4hihMGCacbw5mJgfljoycJAQyMYs1uMxzI%2Bc0lrlCyzsQpb1yhsED73KxQ7NsaJEL3rJt8%2FcdlpkBHdXo%2FWdx5LLirnk10ByyHliZotNviBvpx4eaUvyJ8SW88hDpTUT%2FuxpoopYinvWIVnurgZFbbzkEWu9LMLOPBhe8YHdjhYxzBt1QD83gJnWXiXJn2Vu1Ds%2FoVk%2FFLF3hTyC3%2Fz0t9ERJRU9aGWec7%2FAGvKjsMfNnF1vwyUx4MdlfLtAZRX%2BXjdgmXIbG6wjd97kzEPaoaSy9puhueOBRK%2BP%2FEdVS4CwSs2gD9Xbi6msGQfK00FxfzV34s3RfcJnW%2FtHVCftXR2wswDBktb0N5sic8S6zR12dppaQhl72kxWY61uNK9hW8Aeayo2LRX%2BXp6h1JBwnr3C60dXHK3lacZYmj72CMGOBUgGJyg59Mhl%2Bc0HEEcXVD1Nk0CWHmto6h0KfRq6E9vtuAPZMW4K0VfzjaDLS2Wti1vCctrNhs%2Be5zj1L1MpHZSPfFUC2RBIz%2Bs79d4zztAqDtk1eA6ewNeYYntg5WtmmOZMdzt8S07Ygd7ma0xL85rOarifLVxQMJv%2FlMQGOqUB7XG4oYuHg1XZfES0K00AZmTFxh%2Bd2Q6y04KJk8tKenLtijOqfJtX4Exm2lLKqqD54HfnXLVxf9ZIpXF8KFH9tP%2FxQvK9bqnVZudamIMNCEMKFBCUXR%2FywKHwOYqt5yDF8wAb3gPcDQZLaDqjePdZerky%2B0BpSl5KWKZ1APmsspcmEkvpx6lodCJEFJASCwB7PrY07Z2WAZKZbgWe2Ift00MTtD0f&X-Amz-Signature=f5fc23ea46fcf1013e59cf1c87da560643c00dcb1ae26e950187aa8ae47e3384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK62XXO3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDeQLN%2FxIErEMMnQndY2uzS%2B%2BcSc1EHt0W12tNtAvjjNAIgOafcFaFEGa4LsgFD77rteWAW8WqS%2FIwYXHl82B8dakQq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBCmDxh%2BRCZu9NIitircA16JCpSzoQYKxPmQ064qSoRBVu6Uczj42z2HqoimYi2eGkXZ4hihMGCacbw5mJgfljoycJAQyMYs1uMxzI%2Bc0lrlCyzsQpb1yhsED73KxQ7NsaJEL3rJt8%2FcdlpkBHdXo%2FWdx5LLirnk10ByyHliZotNviBvpx4eaUvyJ8SW88hDpTUT%2FuxpoopYinvWIVnurgZFbbzkEWu9LMLOPBhe8YHdjhYxzBt1QD83gJnWXiXJn2Vu1Ds%2FoVk%2FFLF3hTyC3%2Fz0t9ERJRU9aGWec7%2FAGvKjsMfNnF1vwyUx4MdlfLtAZRX%2BXjdgmXIbG6wjd97kzEPaoaSy9puhueOBRK%2BP%2FEdVS4CwSs2gD9Xbi6msGQfK00FxfzV34s3RfcJnW%2FtHVCftXR2wswDBktb0N5sic8S6zR12dppaQhl72kxWY61uNK9hW8Aeayo2LRX%2BXp6h1JBwnr3C60dXHK3lacZYmj72CMGOBUgGJyg59Mhl%2Bc0HEEcXVD1Nk0CWHmto6h0KfRq6E9vtuAPZMW4K0VfzjaDLS2Wti1vCctrNhs%2Be5zj1L1MpHZSPfFUC2RBIz%2Bs79d4zztAqDtk1eA6ewNeYYntg5WtmmOZMdzt8S07Ygd7ma0xL85rOarifLVxQMJv%2FlMQGOqUB7XG4oYuHg1XZfES0K00AZmTFxh%2Bd2Q6y04KJk8tKenLtijOqfJtX4Exm2lLKqqD54HfnXLVxf9ZIpXF8KFH9tP%2FxQvK9bqnVZudamIMNCEMKFBCUXR%2FywKHwOYqt5yDF8wAb3gPcDQZLaDqjePdZerky%2B0BpSl5KWKZ1APmsspcmEkvpx6lodCJEFJASCwB7PrY07Z2WAZKZbgWe2Ift00MTtD0f&X-Amz-Signature=52fa032a45638237635b3964f744cb780a9a30399b6b771bfcc95bd5a936062a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
