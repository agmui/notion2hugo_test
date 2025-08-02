---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHIBJ5P5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCphxir%2B5dqZHUw9DLKAlFG%2B0P3kRn0E7rFTQT5L8O%2BwIgda2Tbek9b1gQan8k2lElhMCwwd4ErNl7YNkx78ZlYLcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDBgOSRyePo4zFREUtyrcA6H89XjOAIw5aLFndtDN0sufg1VMCBkJZZU5fRg%2FsRKXXcR8uZC6qatC3o%2FesVl5fbseTQlFfoTKNHzk%2FVu9a0VJbLRfJpD3YMXFM7xyA%2BFNcO%2FesmLmnYi%2F70iZZ7JSGOXC03dEQJcG3w%2BcWe76Vsgqr6U5JizQtVMSlosr8FmbpwvBpkyff67vwWmT4mcmFHhZLgRb6EEs5UEn%2BQZtwcLVbHl211C5E4B4YCNagGKGp9O1ppVJDNtFMoz1NGUngdRH%2Bohazl3m5Ahok4WOocd%2FWC4ZuYj4CQl1gGkzN9tIvBlixdWAzSE0uS3Dz80uMFuEmmt7i0SW5nVpHsFFMD6fEVg7TrUDTEdkzQfp%2FO91lYP4Qu4EsoVH5hdyeDJVRBZ8TxJHTV7YdVYU3lZUL08kAFoi0zRL1cRPtqAPXv0IciIfU%2B0abjvwKCvvyq%2BhkKf603LhYQ7JPdvKGnP6eAOj43wuOggYIA8G9S0WV6CVrGw551Y6zKru2f5S4ZgL1ZkcvdIss4o4SC2dSzjoWjqn%2FKCPysj%2FgkQwwUzhRBnokw16Ct%2FO4c%2F0fp%2FQOpuwdnfhzCQxpJatRKLfc8GEradYasAujB4N0dHKIc0oZYbZoHn73uix1%2Bh%2FNLooMNWOuMQGOqUBTaEn7haozHyjEGu2DfaYM6b3ijG%2B8Bk9U%2FKFjbPfm4OI9xYyYNI8oz73D9tVZvBpTkUSTDijA%2FoSWRC%2BP4zx8%2Biky3N82J1DjU%2BqigZ1ioKrEHkVQjrwfo6jTVcssbrfPPYrcO3FiruvXOf2Yo68X00xNd4OBQBO0UcwqmeZbb7d8LTM0UelTSY%2FomKT%2ByGSgUob1t1DCXZrf96rrq%2BUsW%2BtoZKN&X-Amz-Signature=73df7a98cfd50b52737d3dbd5dcd2ef45d88fc971779487a2b01d204af63e481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHIBJ5P5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCphxir%2B5dqZHUw9DLKAlFG%2B0P3kRn0E7rFTQT5L8O%2BwIgda2Tbek9b1gQan8k2lElhMCwwd4ErNl7YNkx78ZlYLcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDBgOSRyePo4zFREUtyrcA6H89XjOAIw5aLFndtDN0sufg1VMCBkJZZU5fRg%2FsRKXXcR8uZC6qatC3o%2FesVl5fbseTQlFfoTKNHzk%2FVu9a0VJbLRfJpD3YMXFM7xyA%2BFNcO%2FesmLmnYi%2F70iZZ7JSGOXC03dEQJcG3w%2BcWe76Vsgqr6U5JizQtVMSlosr8FmbpwvBpkyff67vwWmT4mcmFHhZLgRb6EEs5UEn%2BQZtwcLVbHl211C5E4B4YCNagGKGp9O1ppVJDNtFMoz1NGUngdRH%2Bohazl3m5Ahok4WOocd%2FWC4ZuYj4CQl1gGkzN9tIvBlixdWAzSE0uS3Dz80uMFuEmmt7i0SW5nVpHsFFMD6fEVg7TrUDTEdkzQfp%2FO91lYP4Qu4EsoVH5hdyeDJVRBZ8TxJHTV7YdVYU3lZUL08kAFoi0zRL1cRPtqAPXv0IciIfU%2B0abjvwKCvvyq%2BhkKf603LhYQ7JPdvKGnP6eAOj43wuOggYIA8G9S0WV6CVrGw551Y6zKru2f5S4ZgL1ZkcvdIss4o4SC2dSzjoWjqn%2FKCPysj%2FgkQwwUzhRBnokw16Ct%2FO4c%2F0fp%2FQOpuwdnfhzCQxpJatRKLfc8GEradYasAujB4N0dHKIc0oZYbZoHn73uix1%2Bh%2FNLooMNWOuMQGOqUBTaEn7haozHyjEGu2DfaYM6b3ijG%2B8Bk9U%2FKFjbPfm4OI9xYyYNI8oz73D9tVZvBpTkUSTDijA%2FoSWRC%2BP4zx8%2Biky3N82J1DjU%2BqigZ1ioKrEHkVQjrwfo6jTVcssbrfPPYrcO3FiruvXOf2Yo68X00xNd4OBQBO0UcwqmeZbb7d8LTM0UelTSY%2FomKT%2ByGSgUob1t1DCXZrf96rrq%2BUsW%2BtoZKN&X-Amz-Signature=287d655a2cebdae322804b1875b1566a4943bea88f34a9d73b1ca4aa0343dda1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHIBJ5P5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCphxir%2B5dqZHUw9DLKAlFG%2B0P3kRn0E7rFTQT5L8O%2BwIgda2Tbek9b1gQan8k2lElhMCwwd4ErNl7YNkx78ZlYLcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDBgOSRyePo4zFREUtyrcA6H89XjOAIw5aLFndtDN0sufg1VMCBkJZZU5fRg%2FsRKXXcR8uZC6qatC3o%2FesVl5fbseTQlFfoTKNHzk%2FVu9a0VJbLRfJpD3YMXFM7xyA%2BFNcO%2FesmLmnYi%2F70iZZ7JSGOXC03dEQJcG3w%2BcWe76Vsgqr6U5JizQtVMSlosr8FmbpwvBpkyff67vwWmT4mcmFHhZLgRb6EEs5UEn%2BQZtwcLVbHl211C5E4B4YCNagGKGp9O1ppVJDNtFMoz1NGUngdRH%2Bohazl3m5Ahok4WOocd%2FWC4ZuYj4CQl1gGkzN9tIvBlixdWAzSE0uS3Dz80uMFuEmmt7i0SW5nVpHsFFMD6fEVg7TrUDTEdkzQfp%2FO91lYP4Qu4EsoVH5hdyeDJVRBZ8TxJHTV7YdVYU3lZUL08kAFoi0zRL1cRPtqAPXv0IciIfU%2B0abjvwKCvvyq%2BhkKf603LhYQ7JPdvKGnP6eAOj43wuOggYIA8G9S0WV6CVrGw551Y6zKru2f5S4ZgL1ZkcvdIss4o4SC2dSzjoWjqn%2FKCPysj%2FgkQwwUzhRBnokw16Ct%2FO4c%2F0fp%2FQOpuwdnfhzCQxpJatRKLfc8GEradYasAujB4N0dHKIc0oZYbZoHn73uix1%2Bh%2FNLooMNWOuMQGOqUBTaEn7haozHyjEGu2DfaYM6b3ijG%2B8Bk9U%2FKFjbPfm4OI9xYyYNI8oz73D9tVZvBpTkUSTDijA%2FoSWRC%2BP4zx8%2Biky3N82J1DjU%2BqigZ1ioKrEHkVQjrwfo6jTVcssbrfPPYrcO3FiruvXOf2Yo68X00xNd4OBQBO0UcwqmeZbb7d8LTM0UelTSY%2FomKT%2ByGSgUob1t1DCXZrf96rrq%2BUsW%2BtoZKN&X-Amz-Signature=1f7dc56856668f299202baf43a6271b312cfaf450175dfaaffbcebe967ceb103&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHIBJ5P5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCphxir%2B5dqZHUw9DLKAlFG%2B0P3kRn0E7rFTQT5L8O%2BwIgda2Tbek9b1gQan8k2lElhMCwwd4ErNl7YNkx78ZlYLcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDBgOSRyePo4zFREUtyrcA6H89XjOAIw5aLFndtDN0sufg1VMCBkJZZU5fRg%2FsRKXXcR8uZC6qatC3o%2FesVl5fbseTQlFfoTKNHzk%2FVu9a0VJbLRfJpD3YMXFM7xyA%2BFNcO%2FesmLmnYi%2F70iZZ7JSGOXC03dEQJcG3w%2BcWe76Vsgqr6U5JizQtVMSlosr8FmbpwvBpkyff67vwWmT4mcmFHhZLgRb6EEs5UEn%2BQZtwcLVbHl211C5E4B4YCNagGKGp9O1ppVJDNtFMoz1NGUngdRH%2Bohazl3m5Ahok4WOocd%2FWC4ZuYj4CQl1gGkzN9tIvBlixdWAzSE0uS3Dz80uMFuEmmt7i0SW5nVpHsFFMD6fEVg7TrUDTEdkzQfp%2FO91lYP4Qu4EsoVH5hdyeDJVRBZ8TxJHTV7YdVYU3lZUL08kAFoi0zRL1cRPtqAPXv0IciIfU%2B0abjvwKCvvyq%2BhkKf603LhYQ7JPdvKGnP6eAOj43wuOggYIA8G9S0WV6CVrGw551Y6zKru2f5S4ZgL1ZkcvdIss4o4SC2dSzjoWjqn%2FKCPysj%2FgkQwwUzhRBnokw16Ct%2FO4c%2F0fp%2FQOpuwdnfhzCQxpJatRKLfc8GEradYasAujB4N0dHKIc0oZYbZoHn73uix1%2Bh%2FNLooMNWOuMQGOqUBTaEn7haozHyjEGu2DfaYM6b3ijG%2B8Bk9U%2FKFjbPfm4OI9xYyYNI8oz73D9tVZvBpTkUSTDijA%2FoSWRC%2BP4zx8%2Biky3N82J1DjU%2BqigZ1ioKrEHkVQjrwfo6jTVcssbrfPPYrcO3FiruvXOf2Yo68X00xNd4OBQBO0UcwqmeZbb7d8LTM0UelTSY%2FomKT%2ByGSgUob1t1DCXZrf96rrq%2BUsW%2BtoZKN&X-Amz-Signature=cd1f5ccd9f15c9a881c6d9cbefe6ba9163b48bcacf9b28084108b01b77854868&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHIBJ5P5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCphxir%2B5dqZHUw9DLKAlFG%2B0P3kRn0E7rFTQT5L8O%2BwIgda2Tbek9b1gQan8k2lElhMCwwd4ErNl7YNkx78ZlYLcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDBgOSRyePo4zFREUtyrcA6H89XjOAIw5aLFndtDN0sufg1VMCBkJZZU5fRg%2FsRKXXcR8uZC6qatC3o%2FesVl5fbseTQlFfoTKNHzk%2FVu9a0VJbLRfJpD3YMXFM7xyA%2BFNcO%2FesmLmnYi%2F70iZZ7JSGOXC03dEQJcG3w%2BcWe76Vsgqr6U5JizQtVMSlosr8FmbpwvBpkyff67vwWmT4mcmFHhZLgRb6EEs5UEn%2BQZtwcLVbHl211C5E4B4YCNagGKGp9O1ppVJDNtFMoz1NGUngdRH%2Bohazl3m5Ahok4WOocd%2FWC4ZuYj4CQl1gGkzN9tIvBlixdWAzSE0uS3Dz80uMFuEmmt7i0SW5nVpHsFFMD6fEVg7TrUDTEdkzQfp%2FO91lYP4Qu4EsoVH5hdyeDJVRBZ8TxJHTV7YdVYU3lZUL08kAFoi0zRL1cRPtqAPXv0IciIfU%2B0abjvwKCvvyq%2BhkKf603LhYQ7JPdvKGnP6eAOj43wuOggYIA8G9S0WV6CVrGw551Y6zKru2f5S4ZgL1ZkcvdIss4o4SC2dSzjoWjqn%2FKCPysj%2FgkQwwUzhRBnokw16Ct%2FO4c%2F0fp%2FQOpuwdnfhzCQxpJatRKLfc8GEradYasAujB4N0dHKIc0oZYbZoHn73uix1%2Bh%2FNLooMNWOuMQGOqUBTaEn7haozHyjEGu2DfaYM6b3ijG%2B8Bk9U%2FKFjbPfm4OI9xYyYNI8oz73D9tVZvBpTkUSTDijA%2FoSWRC%2BP4zx8%2Biky3N82J1DjU%2BqigZ1ioKrEHkVQjrwfo6jTVcssbrfPPYrcO3FiruvXOf2Yo68X00xNd4OBQBO0UcwqmeZbb7d8LTM0UelTSY%2FomKT%2ByGSgUob1t1DCXZrf96rrq%2BUsW%2BtoZKN&X-Amz-Signature=e1dae284e32856f9eaebb33be5d767f835615492ebd6bbd23b2f4080c0069c95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
