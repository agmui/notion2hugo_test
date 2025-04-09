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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XTCUWLB%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIFdxCMuhLaozWGCLO5CT5q3%2FY7xz%2FLGWlcBthZ335CMmAiEAqNS18P92d6EcCz7u7iGUWDQzNnToqKZTA80MyXxIxg8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIe6MXUke69nHPwIircAyBmOfQNrk%2FIaTkMlzrfY1t4axSpNyJIZIYe%2BOfAqjYph4qeQ8lbTsbkusJOrsn%2BKP0DC5jCckDAh%2FuqLhak5LvLr5SOBbGWShyDUrOUdfUgkUljy1IWNSskDejNNFByRp5%2BudTAwYs8g0Sttz6iT0CUXPq%2FIaI6mFirvygoHwIzw%2BeehF5oZqWMwa7mfTW7I9%2FajJu7TmPHlRh7Dd1nuY2a%2Bpo7c2aE4mLNXJMpSrmhHCm2GvXNUMFPVvIbFvMhH0FIsj9ve%2BXNnCbcwOJcrk6QgZ2%2B2yTh0Z%2FJmHB1bSpEMfw2pY3SjjvgRCW1lrQdihrTiRD9QapwbSf5msJqBdxx9%2B48I%2BduSoLkRfZj1xLkYTI7cQpRkCULvWJdyPjATxJ%2F9QTDeysS%2FVrC95aptYj340CoqtSJrx6M52VZrBsPeVFJa1OKf%2BBYBsYS3xgoW8mzvAMhmhROPu8FoAFbqch7iAD0ufZB73J5gqK3HiBA0IHjc58WQJHMuOJyGOGhdq37mGeNIAY8WDSIh8sAPz4yeFiQcaF1SPlwqCAfzw4XqMvrpL4q1%2BCfVmXbyPlWVgaUa1sW9EH0vz2BijtcxS%2BnSgZGeIOUtvjAJsoWUShAza6sN8PuMuFi5xz%2FMKvj278GOqUBUyY%2F2BXDWSM9%2F9NAtbvz6JUsZRes55I3NtxIO981k%2Fk6Sd99RFQMR8rFNC18Jf7C%2FkDGuINnM1I4wp7VB3Tjd8yTk076sxPCIvn1IrYLrEw1KhMLApGS9jwOyA%2Bc%2F7uxxiGq%2Fl8DIgwa7wWL8P1D7Mdi2xxwyy4aIKBqDYW6z5%2B5jb7NL2aQAS34gDKXFNY0IW%2BanoKO%2BDU15w2kDAu39Csa7B9y&X-Amz-Signature=0ea90535ae548266985b399216190de12876e7081bb3eef260240900bb8a04b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XTCUWLB%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIFdxCMuhLaozWGCLO5CT5q3%2FY7xz%2FLGWlcBthZ335CMmAiEAqNS18P92d6EcCz7u7iGUWDQzNnToqKZTA80MyXxIxg8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIe6MXUke69nHPwIircAyBmOfQNrk%2FIaTkMlzrfY1t4axSpNyJIZIYe%2BOfAqjYph4qeQ8lbTsbkusJOrsn%2BKP0DC5jCckDAh%2FuqLhak5LvLr5SOBbGWShyDUrOUdfUgkUljy1IWNSskDejNNFByRp5%2BudTAwYs8g0Sttz6iT0CUXPq%2FIaI6mFirvygoHwIzw%2BeehF5oZqWMwa7mfTW7I9%2FajJu7TmPHlRh7Dd1nuY2a%2Bpo7c2aE4mLNXJMpSrmhHCm2GvXNUMFPVvIbFvMhH0FIsj9ve%2BXNnCbcwOJcrk6QgZ2%2B2yTh0Z%2FJmHB1bSpEMfw2pY3SjjvgRCW1lrQdihrTiRD9QapwbSf5msJqBdxx9%2B48I%2BduSoLkRfZj1xLkYTI7cQpRkCULvWJdyPjATxJ%2F9QTDeysS%2FVrC95aptYj340CoqtSJrx6M52VZrBsPeVFJa1OKf%2BBYBsYS3xgoW8mzvAMhmhROPu8FoAFbqch7iAD0ufZB73J5gqK3HiBA0IHjc58WQJHMuOJyGOGhdq37mGeNIAY8WDSIh8sAPz4yeFiQcaF1SPlwqCAfzw4XqMvrpL4q1%2BCfVmXbyPlWVgaUa1sW9EH0vz2BijtcxS%2BnSgZGeIOUtvjAJsoWUShAza6sN8PuMuFi5xz%2FMKvj278GOqUBUyY%2F2BXDWSM9%2F9NAtbvz6JUsZRes55I3NtxIO981k%2Fk6Sd99RFQMR8rFNC18Jf7C%2FkDGuINnM1I4wp7VB3Tjd8yTk076sxPCIvn1IrYLrEw1KhMLApGS9jwOyA%2Bc%2F7uxxiGq%2Fl8DIgwa7wWL8P1D7Mdi2xxwyy4aIKBqDYW6z5%2B5jb7NL2aQAS34gDKXFNY0IW%2BanoKO%2BDU15w2kDAu39Csa7B9y&X-Amz-Signature=be01dba86748d87a8f9c9936e14e01ff2218cee7acb496101c2c151d2a080ff6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XTCUWLB%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIFdxCMuhLaozWGCLO5CT5q3%2FY7xz%2FLGWlcBthZ335CMmAiEAqNS18P92d6EcCz7u7iGUWDQzNnToqKZTA80MyXxIxg8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIe6MXUke69nHPwIircAyBmOfQNrk%2FIaTkMlzrfY1t4axSpNyJIZIYe%2BOfAqjYph4qeQ8lbTsbkusJOrsn%2BKP0DC5jCckDAh%2FuqLhak5LvLr5SOBbGWShyDUrOUdfUgkUljy1IWNSskDejNNFByRp5%2BudTAwYs8g0Sttz6iT0CUXPq%2FIaI6mFirvygoHwIzw%2BeehF5oZqWMwa7mfTW7I9%2FajJu7TmPHlRh7Dd1nuY2a%2Bpo7c2aE4mLNXJMpSrmhHCm2GvXNUMFPVvIbFvMhH0FIsj9ve%2BXNnCbcwOJcrk6QgZ2%2B2yTh0Z%2FJmHB1bSpEMfw2pY3SjjvgRCW1lrQdihrTiRD9QapwbSf5msJqBdxx9%2B48I%2BduSoLkRfZj1xLkYTI7cQpRkCULvWJdyPjATxJ%2F9QTDeysS%2FVrC95aptYj340CoqtSJrx6M52VZrBsPeVFJa1OKf%2BBYBsYS3xgoW8mzvAMhmhROPu8FoAFbqch7iAD0ufZB73J5gqK3HiBA0IHjc58WQJHMuOJyGOGhdq37mGeNIAY8WDSIh8sAPz4yeFiQcaF1SPlwqCAfzw4XqMvrpL4q1%2BCfVmXbyPlWVgaUa1sW9EH0vz2BijtcxS%2BnSgZGeIOUtvjAJsoWUShAza6sN8PuMuFi5xz%2FMKvj278GOqUBUyY%2F2BXDWSM9%2F9NAtbvz6JUsZRes55I3NtxIO981k%2Fk6Sd99RFQMR8rFNC18Jf7C%2FkDGuINnM1I4wp7VB3Tjd8yTk076sxPCIvn1IrYLrEw1KhMLApGS9jwOyA%2Bc%2F7uxxiGq%2Fl8DIgwa7wWL8P1D7Mdi2xxwyy4aIKBqDYW6z5%2B5jb7NL2aQAS34gDKXFNY0IW%2BanoKO%2BDU15w2kDAu39Csa7B9y&X-Amz-Signature=5b02e7145a845261cbfaa06c9e8a9c1ececfd39e662146ea673df01b396694f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XTCUWLB%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIFdxCMuhLaozWGCLO5CT5q3%2FY7xz%2FLGWlcBthZ335CMmAiEAqNS18P92d6EcCz7u7iGUWDQzNnToqKZTA80MyXxIxg8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIe6MXUke69nHPwIircAyBmOfQNrk%2FIaTkMlzrfY1t4axSpNyJIZIYe%2BOfAqjYph4qeQ8lbTsbkusJOrsn%2BKP0DC5jCckDAh%2FuqLhak5LvLr5SOBbGWShyDUrOUdfUgkUljy1IWNSskDejNNFByRp5%2BudTAwYs8g0Sttz6iT0CUXPq%2FIaI6mFirvygoHwIzw%2BeehF5oZqWMwa7mfTW7I9%2FajJu7TmPHlRh7Dd1nuY2a%2Bpo7c2aE4mLNXJMpSrmhHCm2GvXNUMFPVvIbFvMhH0FIsj9ve%2BXNnCbcwOJcrk6QgZ2%2B2yTh0Z%2FJmHB1bSpEMfw2pY3SjjvgRCW1lrQdihrTiRD9QapwbSf5msJqBdxx9%2B48I%2BduSoLkRfZj1xLkYTI7cQpRkCULvWJdyPjATxJ%2F9QTDeysS%2FVrC95aptYj340CoqtSJrx6M52VZrBsPeVFJa1OKf%2BBYBsYS3xgoW8mzvAMhmhROPu8FoAFbqch7iAD0ufZB73J5gqK3HiBA0IHjc58WQJHMuOJyGOGhdq37mGeNIAY8WDSIh8sAPz4yeFiQcaF1SPlwqCAfzw4XqMvrpL4q1%2BCfVmXbyPlWVgaUa1sW9EH0vz2BijtcxS%2BnSgZGeIOUtvjAJsoWUShAza6sN8PuMuFi5xz%2FMKvj278GOqUBUyY%2F2BXDWSM9%2F9NAtbvz6JUsZRes55I3NtxIO981k%2Fk6Sd99RFQMR8rFNC18Jf7C%2FkDGuINnM1I4wp7VB3Tjd8yTk076sxPCIvn1IrYLrEw1KhMLApGS9jwOyA%2Bc%2F7uxxiGq%2Fl8DIgwa7wWL8P1D7Mdi2xxwyy4aIKBqDYW6z5%2B5jb7NL2aQAS34gDKXFNY0IW%2BanoKO%2BDU15w2kDAu39Csa7B9y&X-Amz-Signature=e43d7061ce8eb3b4eba540722c4a67f230743f3da208d216408adfbf6e135491&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XTCUWLB%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIFdxCMuhLaozWGCLO5CT5q3%2FY7xz%2FLGWlcBthZ335CMmAiEAqNS18P92d6EcCz7u7iGUWDQzNnToqKZTA80MyXxIxg8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIe6MXUke69nHPwIircAyBmOfQNrk%2FIaTkMlzrfY1t4axSpNyJIZIYe%2BOfAqjYph4qeQ8lbTsbkusJOrsn%2BKP0DC5jCckDAh%2FuqLhak5LvLr5SOBbGWShyDUrOUdfUgkUljy1IWNSskDejNNFByRp5%2BudTAwYs8g0Sttz6iT0CUXPq%2FIaI6mFirvygoHwIzw%2BeehF5oZqWMwa7mfTW7I9%2FajJu7TmPHlRh7Dd1nuY2a%2Bpo7c2aE4mLNXJMpSrmhHCm2GvXNUMFPVvIbFvMhH0FIsj9ve%2BXNnCbcwOJcrk6QgZ2%2B2yTh0Z%2FJmHB1bSpEMfw2pY3SjjvgRCW1lrQdihrTiRD9QapwbSf5msJqBdxx9%2B48I%2BduSoLkRfZj1xLkYTI7cQpRkCULvWJdyPjATxJ%2F9QTDeysS%2FVrC95aptYj340CoqtSJrx6M52VZrBsPeVFJa1OKf%2BBYBsYS3xgoW8mzvAMhmhROPu8FoAFbqch7iAD0ufZB73J5gqK3HiBA0IHjc58WQJHMuOJyGOGhdq37mGeNIAY8WDSIh8sAPz4yeFiQcaF1SPlwqCAfzw4XqMvrpL4q1%2BCfVmXbyPlWVgaUa1sW9EH0vz2BijtcxS%2BnSgZGeIOUtvjAJsoWUShAza6sN8PuMuFi5xz%2FMKvj278GOqUBUyY%2F2BXDWSM9%2F9NAtbvz6JUsZRes55I3NtxIO981k%2Fk6Sd99RFQMR8rFNC18Jf7C%2FkDGuINnM1I4wp7VB3Tjd8yTk076sxPCIvn1IrYLrEw1KhMLApGS9jwOyA%2Bc%2F7uxxiGq%2Fl8DIgwa7wWL8P1D7Mdi2xxwyy4aIKBqDYW6z5%2B5jb7NL2aQAS34gDKXFNY0IW%2BanoKO%2BDU15w2kDAu39Csa7B9y&X-Amz-Signature=1207676292d1ee4a0c16c430ac4547b2d66989723e01a0cbf4bebb3ec2655dbf&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
