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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCT73OEK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDAKIicz4EEDJ6dh%2BQU%2Fh6NKqq4oapwWcQ0MhiM994cowIgVL1qMdvfZ6K6auZsu%2B9QMaBr29AgnDJ5o5qT8%2BIOc7Aq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDP4lMZRn6%2Fc4PfNr0SrcA28dPZfqC3HiR22gSDrrfKaj72bFPa3sIOZToPkmZkpic5bVwk45TuL9IrFlKmKbsz%2BdH2%2FF0uxswqW7mdv%2BOrjJdEsApOdMV2XEjj1YDbiTPp0i53VB%2FzYbxaTVZD6keypjdC2zHwY9k2IfvBOHipYXM6%2FSQrpxfKvF%2FkHKGVFK146USKFlvA%2FiRIrEU3qAJI9eKprX08vnLhAaXfIhxBiLV6YM34c6IeW4%2BoHR6eoRLPAiUZbhFr6YILAgLboaCa3eGXaeuUrkQRyAwxfPSJk2PxFYDPzkQe%2FG6yeDVNUvzVjTPjy%2BGxVXG2E3tvXMMJVkrQNeyuT3PzMqyBct2WNn2L%2FdD0ISZyJfk5RMTuUrnb86h0UbAjndi%2FK4bI7CgP%2FSw%2FBFHXTUNCxX5uLlGKrymdF3Xb5xXdOvH7HvhGPriQsH1nHyHgWPFzKowSFB9W3aHsM%2B7UWnIJj7vqQHXyV6ETFUrCX5WzdfCkpDLNUh5Fuz4hvOsTkurlnuL53HwzeqbiZVf9%2BKJktR5JpaqiK%2BGXBTuObsWKjXLduNkbLE8KzJHdUeizRmz8kBWJng5usYER1PRzbKkT7EAjdco21eHrKE9p0%2FmmBA8%2BaAxlKE%2FoXiwR267RdSlAKgMKneib0GOqUBJtdzfHvlLXA5xPzz6itZrg9XCOJl28PrVI57gv7tTmVGzXc3zzhr5BirRV2paebFsIlqrGREl1uW%2FBnf%2F%2BF%2BH737iUmNfq7H1LkBzxZUbo48Z9Va3oETS0Wl%2F6%2B6%2F6SIb0UzHrsO79l2VEQDBcC7C1pUxoIfOVldXjiuk7sDrjWeTy7%2Bd2H1884bMvFyTlR5QIdKhgLamJWJ2nDb4McQz2FEiQWC&X-Amz-Signature=52f6dc65146989c41a554e87a238b48f671f8eb2021f8ba5db94d22119079116&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCT73OEK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDAKIicz4EEDJ6dh%2BQU%2Fh6NKqq4oapwWcQ0MhiM994cowIgVL1qMdvfZ6K6auZsu%2B9QMaBr29AgnDJ5o5qT8%2BIOc7Aq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDP4lMZRn6%2Fc4PfNr0SrcA28dPZfqC3HiR22gSDrrfKaj72bFPa3sIOZToPkmZkpic5bVwk45TuL9IrFlKmKbsz%2BdH2%2FF0uxswqW7mdv%2BOrjJdEsApOdMV2XEjj1YDbiTPp0i53VB%2FzYbxaTVZD6keypjdC2zHwY9k2IfvBOHipYXM6%2FSQrpxfKvF%2FkHKGVFK146USKFlvA%2FiRIrEU3qAJI9eKprX08vnLhAaXfIhxBiLV6YM34c6IeW4%2BoHR6eoRLPAiUZbhFr6YILAgLboaCa3eGXaeuUrkQRyAwxfPSJk2PxFYDPzkQe%2FG6yeDVNUvzVjTPjy%2BGxVXG2E3tvXMMJVkrQNeyuT3PzMqyBct2WNn2L%2FdD0ISZyJfk5RMTuUrnb86h0UbAjndi%2FK4bI7CgP%2FSw%2FBFHXTUNCxX5uLlGKrymdF3Xb5xXdOvH7HvhGPriQsH1nHyHgWPFzKowSFB9W3aHsM%2B7UWnIJj7vqQHXyV6ETFUrCX5WzdfCkpDLNUh5Fuz4hvOsTkurlnuL53HwzeqbiZVf9%2BKJktR5JpaqiK%2BGXBTuObsWKjXLduNkbLE8KzJHdUeizRmz8kBWJng5usYER1PRzbKkT7EAjdco21eHrKE9p0%2FmmBA8%2BaAxlKE%2FoXiwR267RdSlAKgMKneib0GOqUBJtdzfHvlLXA5xPzz6itZrg9XCOJl28PrVI57gv7tTmVGzXc3zzhr5BirRV2paebFsIlqrGREl1uW%2FBnf%2F%2BF%2BH737iUmNfq7H1LkBzxZUbo48Z9Va3oETS0Wl%2F6%2B6%2F6SIb0UzHrsO79l2VEQDBcC7C1pUxoIfOVldXjiuk7sDrjWeTy7%2Bd2H1884bMvFyTlR5QIdKhgLamJWJ2nDb4McQz2FEiQWC&X-Amz-Signature=152d327cb7f74f15ddda7bff38ade782e96245ffc255a060434d738d84375ab0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCT73OEK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDAKIicz4EEDJ6dh%2BQU%2Fh6NKqq4oapwWcQ0MhiM994cowIgVL1qMdvfZ6K6auZsu%2B9QMaBr29AgnDJ5o5qT8%2BIOc7Aq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDP4lMZRn6%2Fc4PfNr0SrcA28dPZfqC3HiR22gSDrrfKaj72bFPa3sIOZToPkmZkpic5bVwk45TuL9IrFlKmKbsz%2BdH2%2FF0uxswqW7mdv%2BOrjJdEsApOdMV2XEjj1YDbiTPp0i53VB%2FzYbxaTVZD6keypjdC2zHwY9k2IfvBOHipYXM6%2FSQrpxfKvF%2FkHKGVFK146USKFlvA%2FiRIrEU3qAJI9eKprX08vnLhAaXfIhxBiLV6YM34c6IeW4%2BoHR6eoRLPAiUZbhFr6YILAgLboaCa3eGXaeuUrkQRyAwxfPSJk2PxFYDPzkQe%2FG6yeDVNUvzVjTPjy%2BGxVXG2E3tvXMMJVkrQNeyuT3PzMqyBct2WNn2L%2FdD0ISZyJfk5RMTuUrnb86h0UbAjndi%2FK4bI7CgP%2FSw%2FBFHXTUNCxX5uLlGKrymdF3Xb5xXdOvH7HvhGPriQsH1nHyHgWPFzKowSFB9W3aHsM%2B7UWnIJj7vqQHXyV6ETFUrCX5WzdfCkpDLNUh5Fuz4hvOsTkurlnuL53HwzeqbiZVf9%2BKJktR5JpaqiK%2BGXBTuObsWKjXLduNkbLE8KzJHdUeizRmz8kBWJng5usYER1PRzbKkT7EAjdco21eHrKE9p0%2FmmBA8%2BaAxlKE%2FoXiwR267RdSlAKgMKneib0GOqUBJtdzfHvlLXA5xPzz6itZrg9XCOJl28PrVI57gv7tTmVGzXc3zzhr5BirRV2paebFsIlqrGREl1uW%2FBnf%2F%2BF%2BH737iUmNfq7H1LkBzxZUbo48Z9Va3oETS0Wl%2F6%2B6%2F6SIb0UzHrsO79l2VEQDBcC7C1pUxoIfOVldXjiuk7sDrjWeTy7%2Bd2H1884bMvFyTlR5QIdKhgLamJWJ2nDb4McQz2FEiQWC&X-Amz-Signature=7369f8b239100927a52324777c7215d5b882c6eb98502c2bc7fbcbbdcb3f39a1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCT73OEK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDAKIicz4EEDJ6dh%2BQU%2Fh6NKqq4oapwWcQ0MhiM994cowIgVL1qMdvfZ6K6auZsu%2B9QMaBr29AgnDJ5o5qT8%2BIOc7Aq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDP4lMZRn6%2Fc4PfNr0SrcA28dPZfqC3HiR22gSDrrfKaj72bFPa3sIOZToPkmZkpic5bVwk45TuL9IrFlKmKbsz%2BdH2%2FF0uxswqW7mdv%2BOrjJdEsApOdMV2XEjj1YDbiTPp0i53VB%2FzYbxaTVZD6keypjdC2zHwY9k2IfvBOHipYXM6%2FSQrpxfKvF%2FkHKGVFK146USKFlvA%2FiRIrEU3qAJI9eKprX08vnLhAaXfIhxBiLV6YM34c6IeW4%2BoHR6eoRLPAiUZbhFr6YILAgLboaCa3eGXaeuUrkQRyAwxfPSJk2PxFYDPzkQe%2FG6yeDVNUvzVjTPjy%2BGxVXG2E3tvXMMJVkrQNeyuT3PzMqyBct2WNn2L%2FdD0ISZyJfk5RMTuUrnb86h0UbAjndi%2FK4bI7CgP%2FSw%2FBFHXTUNCxX5uLlGKrymdF3Xb5xXdOvH7HvhGPriQsH1nHyHgWPFzKowSFB9W3aHsM%2B7UWnIJj7vqQHXyV6ETFUrCX5WzdfCkpDLNUh5Fuz4hvOsTkurlnuL53HwzeqbiZVf9%2BKJktR5JpaqiK%2BGXBTuObsWKjXLduNkbLE8KzJHdUeizRmz8kBWJng5usYER1PRzbKkT7EAjdco21eHrKE9p0%2FmmBA8%2BaAxlKE%2FoXiwR267RdSlAKgMKneib0GOqUBJtdzfHvlLXA5xPzz6itZrg9XCOJl28PrVI57gv7tTmVGzXc3zzhr5BirRV2paebFsIlqrGREl1uW%2FBnf%2F%2BF%2BH737iUmNfq7H1LkBzxZUbo48Z9Va3oETS0Wl%2F6%2B6%2F6SIb0UzHrsO79l2VEQDBcC7C1pUxoIfOVldXjiuk7sDrjWeTy7%2Bd2H1884bMvFyTlR5QIdKhgLamJWJ2nDb4McQz2FEiQWC&X-Amz-Signature=ab667cb9400f0ad0618a7ebb9c72f82ce828726a4698d8e98a54bf1fc657d1bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCT73OEK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDAKIicz4EEDJ6dh%2BQU%2Fh6NKqq4oapwWcQ0MhiM994cowIgVL1qMdvfZ6K6auZsu%2B9QMaBr29AgnDJ5o5qT8%2BIOc7Aq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDP4lMZRn6%2Fc4PfNr0SrcA28dPZfqC3HiR22gSDrrfKaj72bFPa3sIOZToPkmZkpic5bVwk45TuL9IrFlKmKbsz%2BdH2%2FF0uxswqW7mdv%2BOrjJdEsApOdMV2XEjj1YDbiTPp0i53VB%2FzYbxaTVZD6keypjdC2zHwY9k2IfvBOHipYXM6%2FSQrpxfKvF%2FkHKGVFK146USKFlvA%2FiRIrEU3qAJI9eKprX08vnLhAaXfIhxBiLV6YM34c6IeW4%2BoHR6eoRLPAiUZbhFr6YILAgLboaCa3eGXaeuUrkQRyAwxfPSJk2PxFYDPzkQe%2FG6yeDVNUvzVjTPjy%2BGxVXG2E3tvXMMJVkrQNeyuT3PzMqyBct2WNn2L%2FdD0ISZyJfk5RMTuUrnb86h0UbAjndi%2FK4bI7CgP%2FSw%2FBFHXTUNCxX5uLlGKrymdF3Xb5xXdOvH7HvhGPriQsH1nHyHgWPFzKowSFB9W3aHsM%2B7UWnIJj7vqQHXyV6ETFUrCX5WzdfCkpDLNUh5Fuz4hvOsTkurlnuL53HwzeqbiZVf9%2BKJktR5JpaqiK%2BGXBTuObsWKjXLduNkbLE8KzJHdUeizRmz8kBWJng5usYER1PRzbKkT7EAjdco21eHrKE9p0%2FmmBA8%2BaAxlKE%2FoXiwR267RdSlAKgMKneib0GOqUBJtdzfHvlLXA5xPzz6itZrg9XCOJl28PrVI57gv7tTmVGzXc3zzhr5BirRV2paebFsIlqrGREl1uW%2FBnf%2F%2BF%2BH737iUmNfq7H1LkBzxZUbo48Z9Va3oETS0Wl%2F6%2B6%2F6SIb0UzHrsO79l2VEQDBcC7C1pUxoIfOVldXjiuk7sDrjWeTy7%2Bd2H1884bMvFyTlR5QIdKhgLamJWJ2nDb4McQz2FEiQWC&X-Amz-Signature=83ba4b57c6412bdbff8c12fc039f83fb1c8db2817b24b96048dbffb43588c3c6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
