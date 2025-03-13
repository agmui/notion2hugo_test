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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466276Y5FA3%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBx8XVz1MAOG%2FABEt8GPLJoqBSLm3H%2B2mJQI5ozp277lAiEA8jwxl8%2FYa4r%2FVW2Fj%2BM7pA2%2FUJo0KkTZOnK4qtZfOqcqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVkNX899Y3ijqybzSrcA8o8s4eFRf9Q2QRLtDooyRKht%2B30wSyp7EaCSfEZaZjM4mxoAuobLTN2p2Zz0%2BYkHurVGCdZdAUr3s8ynZ0c%2FU6VwwHQQYtMysjMDVLaop3%2FLNogClmtIAYy86Cy9vRBWpFpVRzgJT3zQtc8ll7Lb2Y2BOfGVDArChs%2FHEH5jhE1HQBmA7QdLWIH8BzQmj8StR6O2d43Ngkj6G%2FcvxDpRk0jE6gzMCj9fZju3dXvJzULOHQ8ClwrwqQ45aBeVZqhlbwVcNR19Ynl7eGu2CkFZIY28HsG7j4j7Z14Iqr7oEHPEjwpROvcyr7HN4XF8Q0Vkws9sNj0JdOVdphR%2Fpx2eHDyZlNzY3MBl0%2Fk7OHDs0RaEQ%2FoeNFWdFz%2FWMKnNvF9IFXsDvuKLooIKfIUP5%2FZpL1yrQdNISHDEX3BV%2FYXw3x698idhGVEYJte7YuVG5lFkQY4LVX%2BZVN8NiH%2F2A5q7AtxOU0geerIUNfMFRRFHNVHsOFKxocZ3lQN0ly91P5KFUPOdF8mZddsNfc46igI48J2JKrRnGuNm%2BmJtuurfRslGJhZQ9p%2F29r3jpYiRU27QPE36SHVjIgutU%2BIERvGZasTfz9cVDj%2FzjzUlIajo48jEUoCfm0m4aOgECyqMOm7y74GOqUBuWLdHVcfMKdU3x%2FuvC8HlntfL%2BxO5UvPGKAT46yq%2BlqDUaAEfbGEmVzKDKp2OFLimp9ZZUJC4AQiiSer9mPbG10JEz%2F7bfbpZACcTwTXg%2BItNXupsXm%2FTaGyXKz7dnGnX1LkfF1aMnxBxPSSmHSX2G41Bcvr24ppOgA1F6hWPmgmDjvuHY9mQokwN2SdBVJfziBFp4cmZvr6Ri%2FtJBo4oMIRAe%2BE&X-Amz-Signature=72197f61f9ffb377770dd867f626c938931059ace9f0eb9c58d111f9f2c0f8ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466276Y5FA3%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBx8XVz1MAOG%2FABEt8GPLJoqBSLm3H%2B2mJQI5ozp277lAiEA8jwxl8%2FYa4r%2FVW2Fj%2BM7pA2%2FUJo0KkTZOnK4qtZfOqcqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVkNX899Y3ijqybzSrcA8o8s4eFRf9Q2QRLtDooyRKht%2B30wSyp7EaCSfEZaZjM4mxoAuobLTN2p2Zz0%2BYkHurVGCdZdAUr3s8ynZ0c%2FU6VwwHQQYtMysjMDVLaop3%2FLNogClmtIAYy86Cy9vRBWpFpVRzgJT3zQtc8ll7Lb2Y2BOfGVDArChs%2FHEH5jhE1HQBmA7QdLWIH8BzQmj8StR6O2d43Ngkj6G%2FcvxDpRk0jE6gzMCj9fZju3dXvJzULOHQ8ClwrwqQ45aBeVZqhlbwVcNR19Ynl7eGu2CkFZIY28HsG7j4j7Z14Iqr7oEHPEjwpROvcyr7HN4XF8Q0Vkws9sNj0JdOVdphR%2Fpx2eHDyZlNzY3MBl0%2Fk7OHDs0RaEQ%2FoeNFWdFz%2FWMKnNvF9IFXsDvuKLooIKfIUP5%2FZpL1yrQdNISHDEX3BV%2FYXw3x698idhGVEYJte7YuVG5lFkQY4LVX%2BZVN8NiH%2F2A5q7AtxOU0geerIUNfMFRRFHNVHsOFKxocZ3lQN0ly91P5KFUPOdF8mZddsNfc46igI48J2JKrRnGuNm%2BmJtuurfRslGJhZQ9p%2F29r3jpYiRU27QPE36SHVjIgutU%2BIERvGZasTfz9cVDj%2FzjzUlIajo48jEUoCfm0m4aOgECyqMOm7y74GOqUBuWLdHVcfMKdU3x%2FuvC8HlntfL%2BxO5UvPGKAT46yq%2BlqDUaAEfbGEmVzKDKp2OFLimp9ZZUJC4AQiiSer9mPbG10JEz%2F7bfbpZACcTwTXg%2BItNXupsXm%2FTaGyXKz7dnGnX1LkfF1aMnxBxPSSmHSX2G41Bcvr24ppOgA1F6hWPmgmDjvuHY9mQokwN2SdBVJfziBFp4cmZvr6Ri%2FtJBo4oMIRAe%2BE&X-Amz-Signature=8ab86f74af7997fced9ab4dc768b24a773d6f1d3161dd3446f4d3db5f7f34bb9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466276Y5FA3%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBx8XVz1MAOG%2FABEt8GPLJoqBSLm3H%2B2mJQI5ozp277lAiEA8jwxl8%2FYa4r%2FVW2Fj%2BM7pA2%2FUJo0KkTZOnK4qtZfOqcqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVkNX899Y3ijqybzSrcA8o8s4eFRf9Q2QRLtDooyRKht%2B30wSyp7EaCSfEZaZjM4mxoAuobLTN2p2Zz0%2BYkHurVGCdZdAUr3s8ynZ0c%2FU6VwwHQQYtMysjMDVLaop3%2FLNogClmtIAYy86Cy9vRBWpFpVRzgJT3zQtc8ll7Lb2Y2BOfGVDArChs%2FHEH5jhE1HQBmA7QdLWIH8BzQmj8StR6O2d43Ngkj6G%2FcvxDpRk0jE6gzMCj9fZju3dXvJzULOHQ8ClwrwqQ45aBeVZqhlbwVcNR19Ynl7eGu2CkFZIY28HsG7j4j7Z14Iqr7oEHPEjwpROvcyr7HN4XF8Q0Vkws9sNj0JdOVdphR%2Fpx2eHDyZlNzY3MBl0%2Fk7OHDs0RaEQ%2FoeNFWdFz%2FWMKnNvF9IFXsDvuKLooIKfIUP5%2FZpL1yrQdNISHDEX3BV%2FYXw3x698idhGVEYJte7YuVG5lFkQY4LVX%2BZVN8NiH%2F2A5q7AtxOU0geerIUNfMFRRFHNVHsOFKxocZ3lQN0ly91P5KFUPOdF8mZddsNfc46igI48J2JKrRnGuNm%2BmJtuurfRslGJhZQ9p%2F29r3jpYiRU27QPE36SHVjIgutU%2BIERvGZasTfz9cVDj%2FzjzUlIajo48jEUoCfm0m4aOgECyqMOm7y74GOqUBuWLdHVcfMKdU3x%2FuvC8HlntfL%2BxO5UvPGKAT46yq%2BlqDUaAEfbGEmVzKDKp2OFLimp9ZZUJC4AQiiSer9mPbG10JEz%2F7bfbpZACcTwTXg%2BItNXupsXm%2FTaGyXKz7dnGnX1LkfF1aMnxBxPSSmHSX2G41Bcvr24ppOgA1F6hWPmgmDjvuHY9mQokwN2SdBVJfziBFp4cmZvr6Ri%2FtJBo4oMIRAe%2BE&X-Amz-Signature=e99d21ad75ad1651a3a0165cc8ff136d6fcafd8ec4f6e8b811cfef76ee04695d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466276Y5FA3%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBx8XVz1MAOG%2FABEt8GPLJoqBSLm3H%2B2mJQI5ozp277lAiEA8jwxl8%2FYa4r%2FVW2Fj%2BM7pA2%2FUJo0KkTZOnK4qtZfOqcqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVkNX899Y3ijqybzSrcA8o8s4eFRf9Q2QRLtDooyRKht%2B30wSyp7EaCSfEZaZjM4mxoAuobLTN2p2Zz0%2BYkHurVGCdZdAUr3s8ynZ0c%2FU6VwwHQQYtMysjMDVLaop3%2FLNogClmtIAYy86Cy9vRBWpFpVRzgJT3zQtc8ll7Lb2Y2BOfGVDArChs%2FHEH5jhE1HQBmA7QdLWIH8BzQmj8StR6O2d43Ngkj6G%2FcvxDpRk0jE6gzMCj9fZju3dXvJzULOHQ8ClwrwqQ45aBeVZqhlbwVcNR19Ynl7eGu2CkFZIY28HsG7j4j7Z14Iqr7oEHPEjwpROvcyr7HN4XF8Q0Vkws9sNj0JdOVdphR%2Fpx2eHDyZlNzY3MBl0%2Fk7OHDs0RaEQ%2FoeNFWdFz%2FWMKnNvF9IFXsDvuKLooIKfIUP5%2FZpL1yrQdNISHDEX3BV%2FYXw3x698idhGVEYJte7YuVG5lFkQY4LVX%2BZVN8NiH%2F2A5q7AtxOU0geerIUNfMFRRFHNVHsOFKxocZ3lQN0ly91P5KFUPOdF8mZddsNfc46igI48J2JKrRnGuNm%2BmJtuurfRslGJhZQ9p%2F29r3jpYiRU27QPE36SHVjIgutU%2BIERvGZasTfz9cVDj%2FzjzUlIajo48jEUoCfm0m4aOgECyqMOm7y74GOqUBuWLdHVcfMKdU3x%2FuvC8HlntfL%2BxO5UvPGKAT46yq%2BlqDUaAEfbGEmVzKDKp2OFLimp9ZZUJC4AQiiSer9mPbG10JEz%2F7bfbpZACcTwTXg%2BItNXupsXm%2FTaGyXKz7dnGnX1LkfF1aMnxBxPSSmHSX2G41Bcvr24ppOgA1F6hWPmgmDjvuHY9mQokwN2SdBVJfziBFp4cmZvr6Ri%2FtJBo4oMIRAe%2BE&X-Amz-Signature=50bab7cb410275d19829b30ac1635a31b5dc47d53e0448c305b014cd8dc5dd45&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466276Y5FA3%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBx8XVz1MAOG%2FABEt8GPLJoqBSLm3H%2B2mJQI5ozp277lAiEA8jwxl8%2FYa4r%2FVW2Fj%2BM7pA2%2FUJo0KkTZOnK4qtZfOqcqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVkNX899Y3ijqybzSrcA8o8s4eFRf9Q2QRLtDooyRKht%2B30wSyp7EaCSfEZaZjM4mxoAuobLTN2p2Zz0%2BYkHurVGCdZdAUr3s8ynZ0c%2FU6VwwHQQYtMysjMDVLaop3%2FLNogClmtIAYy86Cy9vRBWpFpVRzgJT3zQtc8ll7Lb2Y2BOfGVDArChs%2FHEH5jhE1HQBmA7QdLWIH8BzQmj8StR6O2d43Ngkj6G%2FcvxDpRk0jE6gzMCj9fZju3dXvJzULOHQ8ClwrwqQ45aBeVZqhlbwVcNR19Ynl7eGu2CkFZIY28HsG7j4j7Z14Iqr7oEHPEjwpROvcyr7HN4XF8Q0Vkws9sNj0JdOVdphR%2Fpx2eHDyZlNzY3MBl0%2Fk7OHDs0RaEQ%2FoeNFWdFz%2FWMKnNvF9IFXsDvuKLooIKfIUP5%2FZpL1yrQdNISHDEX3BV%2FYXw3x698idhGVEYJte7YuVG5lFkQY4LVX%2BZVN8NiH%2F2A5q7AtxOU0geerIUNfMFRRFHNVHsOFKxocZ3lQN0ly91P5KFUPOdF8mZddsNfc46igI48J2JKrRnGuNm%2BmJtuurfRslGJhZQ9p%2F29r3jpYiRU27QPE36SHVjIgutU%2BIERvGZasTfz9cVDj%2FzjzUlIajo48jEUoCfm0m4aOgECyqMOm7y74GOqUBuWLdHVcfMKdU3x%2FuvC8HlntfL%2BxO5UvPGKAT46yq%2BlqDUaAEfbGEmVzKDKp2OFLimp9ZZUJC4AQiiSer9mPbG10JEz%2F7bfbpZACcTwTXg%2BItNXupsXm%2FTaGyXKz7dnGnX1LkfF1aMnxBxPSSmHSX2G41Bcvr24ppOgA1F6hWPmgmDjvuHY9mQokwN2SdBVJfziBFp4cmZvr6Ri%2FtJBo4oMIRAe%2BE&X-Amz-Signature=e0e50e6d2d7d51bbe38d499dbd94936d4e5a44fb95128f485bb3b6a550450af0&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
