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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V67ISROB%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICw16s1YcNdkMA4b8nwlP8XLIt5%2F91M8ReoeXGiWjQapAiEAj71PyXwhYY6B1mPfvz6Ku3oP1Qd0LIorfc3NvqIL2WwqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKoGfqTuxbXmjeTv%2ByrcA38v6ZYZ%2B7Kwjz1VCqxRtt86bE4QTtYe8LMMWRQHk5TU8pMmCxp2yWY%2Bqn23AKruUGPONphcmK9RFlo37XaKIM2%2B4dikw35h6lqAKZQ9PyC4lhTnL3JuvXEUkqFyWAxxFRMJM3KEju3prb0n8hXKnc4l5EhxHI9PGVRhLMGoy4gEVrF3AW6A9IbIjvq5QlJRLGL3hxgADv1eyy3Zqte2KicK4UdxPbil14uTsykfVWb0B8xSTkE0peXs9IrtCRQRhYBngMI6wo%2BMiWx6R9rIlkHhekwdz6pEVdWA%2F1n0sZ8Xw%2BQUfBb%2BhFlIfJsVidIFxLC2BV3FlUoT%2Bu0i6B%2FYQogZ%2BW5rWpgsQyBYQZDjyyGcTJVyNL9j%2BWyQq3g3bhrSE4cLet7a2nysQczHkC7nFZZdpLDiKvisbobF3Scn0nl5qfmh3RMSdN4LutN89x9T0awEZpUFnasHUsurVfTiLP%2F3iBh%2Fh3YRECfZnY8jRwqa5ORS%2BsY10yzSaqT6iT4U3XVFAQoxJTBMEUOvlT6lo6UsCYZYcF9N4oyUkT5IwNww1HrxGVljTWczLA%2BQkElmfnY5PUa4VKJ14PTJUIGtUgBo2ymUTNqDUqGpRSiLWe56dXuDRMWkwPyMVfUcMPGPhb8GOqUBK7I7lPOQkrizJtaK1ahGOCSKoOiswcnGqL%2FRRHb3ZvoZAM7sd81FOQQx1dXd7BjP1UNbxYtiJHS57%2By5lDGQWSKpwtj0Vno6fDQi1TAr8x8rQEkZlsb4Bq4vpZjdMV0Is43xvW5iez2zi5vjCab1zAgKk%2Bp49y%2Bn6drdJY5KtRG6EImTVv6dYLbt%2FB7S8WVKEcYrYbWvxHrHtk5h9OuYYSQl1chB&X-Amz-Signature=b167e4ab680a1719a887aca433875e113348c036fb6d5282d97f48f1f332564c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V67ISROB%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICw16s1YcNdkMA4b8nwlP8XLIt5%2F91M8ReoeXGiWjQapAiEAj71PyXwhYY6B1mPfvz6Ku3oP1Qd0LIorfc3NvqIL2WwqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKoGfqTuxbXmjeTv%2ByrcA38v6ZYZ%2B7Kwjz1VCqxRtt86bE4QTtYe8LMMWRQHk5TU8pMmCxp2yWY%2Bqn23AKruUGPONphcmK9RFlo37XaKIM2%2B4dikw35h6lqAKZQ9PyC4lhTnL3JuvXEUkqFyWAxxFRMJM3KEju3prb0n8hXKnc4l5EhxHI9PGVRhLMGoy4gEVrF3AW6A9IbIjvq5QlJRLGL3hxgADv1eyy3Zqte2KicK4UdxPbil14uTsykfVWb0B8xSTkE0peXs9IrtCRQRhYBngMI6wo%2BMiWx6R9rIlkHhekwdz6pEVdWA%2F1n0sZ8Xw%2BQUfBb%2BhFlIfJsVidIFxLC2BV3FlUoT%2Bu0i6B%2FYQogZ%2BW5rWpgsQyBYQZDjyyGcTJVyNL9j%2BWyQq3g3bhrSE4cLet7a2nysQczHkC7nFZZdpLDiKvisbobF3Scn0nl5qfmh3RMSdN4LutN89x9T0awEZpUFnasHUsurVfTiLP%2F3iBh%2Fh3YRECfZnY8jRwqa5ORS%2BsY10yzSaqT6iT4U3XVFAQoxJTBMEUOvlT6lo6UsCYZYcF9N4oyUkT5IwNww1HrxGVljTWczLA%2BQkElmfnY5PUa4VKJ14PTJUIGtUgBo2ymUTNqDUqGpRSiLWe56dXuDRMWkwPyMVfUcMPGPhb8GOqUBK7I7lPOQkrizJtaK1ahGOCSKoOiswcnGqL%2FRRHb3ZvoZAM7sd81FOQQx1dXd7BjP1UNbxYtiJHS57%2By5lDGQWSKpwtj0Vno6fDQi1TAr8x8rQEkZlsb4Bq4vpZjdMV0Is43xvW5iez2zi5vjCab1zAgKk%2Bp49y%2Bn6drdJY5KtRG6EImTVv6dYLbt%2FB7S8WVKEcYrYbWvxHrHtk5h9OuYYSQl1chB&X-Amz-Signature=2485e0495f935683c0cdea6a38e65c38a765e2f09e03bc431a8b35c98a5a5c35&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V67ISROB%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICw16s1YcNdkMA4b8nwlP8XLIt5%2F91M8ReoeXGiWjQapAiEAj71PyXwhYY6B1mPfvz6Ku3oP1Qd0LIorfc3NvqIL2WwqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKoGfqTuxbXmjeTv%2ByrcA38v6ZYZ%2B7Kwjz1VCqxRtt86bE4QTtYe8LMMWRQHk5TU8pMmCxp2yWY%2Bqn23AKruUGPONphcmK9RFlo37XaKIM2%2B4dikw35h6lqAKZQ9PyC4lhTnL3JuvXEUkqFyWAxxFRMJM3KEju3prb0n8hXKnc4l5EhxHI9PGVRhLMGoy4gEVrF3AW6A9IbIjvq5QlJRLGL3hxgADv1eyy3Zqte2KicK4UdxPbil14uTsykfVWb0B8xSTkE0peXs9IrtCRQRhYBngMI6wo%2BMiWx6R9rIlkHhekwdz6pEVdWA%2F1n0sZ8Xw%2BQUfBb%2BhFlIfJsVidIFxLC2BV3FlUoT%2Bu0i6B%2FYQogZ%2BW5rWpgsQyBYQZDjyyGcTJVyNL9j%2BWyQq3g3bhrSE4cLet7a2nysQczHkC7nFZZdpLDiKvisbobF3Scn0nl5qfmh3RMSdN4LutN89x9T0awEZpUFnasHUsurVfTiLP%2F3iBh%2Fh3YRECfZnY8jRwqa5ORS%2BsY10yzSaqT6iT4U3XVFAQoxJTBMEUOvlT6lo6UsCYZYcF9N4oyUkT5IwNww1HrxGVljTWczLA%2BQkElmfnY5PUa4VKJ14PTJUIGtUgBo2ymUTNqDUqGpRSiLWe56dXuDRMWkwPyMVfUcMPGPhb8GOqUBK7I7lPOQkrizJtaK1ahGOCSKoOiswcnGqL%2FRRHb3ZvoZAM7sd81FOQQx1dXd7BjP1UNbxYtiJHS57%2By5lDGQWSKpwtj0Vno6fDQi1TAr8x8rQEkZlsb4Bq4vpZjdMV0Is43xvW5iez2zi5vjCab1zAgKk%2Bp49y%2Bn6drdJY5KtRG6EImTVv6dYLbt%2FB7S8WVKEcYrYbWvxHrHtk5h9OuYYSQl1chB&X-Amz-Signature=d3a96a2fb1b93a34a05470b95d40561a1571d2cbffbca45ba68912f3c0ac32df&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V67ISROB%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICw16s1YcNdkMA4b8nwlP8XLIt5%2F91M8ReoeXGiWjQapAiEAj71PyXwhYY6B1mPfvz6Ku3oP1Qd0LIorfc3NvqIL2WwqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKoGfqTuxbXmjeTv%2ByrcA38v6ZYZ%2B7Kwjz1VCqxRtt86bE4QTtYe8LMMWRQHk5TU8pMmCxp2yWY%2Bqn23AKruUGPONphcmK9RFlo37XaKIM2%2B4dikw35h6lqAKZQ9PyC4lhTnL3JuvXEUkqFyWAxxFRMJM3KEju3prb0n8hXKnc4l5EhxHI9PGVRhLMGoy4gEVrF3AW6A9IbIjvq5QlJRLGL3hxgADv1eyy3Zqte2KicK4UdxPbil14uTsykfVWb0B8xSTkE0peXs9IrtCRQRhYBngMI6wo%2BMiWx6R9rIlkHhekwdz6pEVdWA%2F1n0sZ8Xw%2BQUfBb%2BhFlIfJsVidIFxLC2BV3FlUoT%2Bu0i6B%2FYQogZ%2BW5rWpgsQyBYQZDjyyGcTJVyNL9j%2BWyQq3g3bhrSE4cLet7a2nysQczHkC7nFZZdpLDiKvisbobF3Scn0nl5qfmh3RMSdN4LutN89x9T0awEZpUFnasHUsurVfTiLP%2F3iBh%2Fh3YRECfZnY8jRwqa5ORS%2BsY10yzSaqT6iT4U3XVFAQoxJTBMEUOvlT6lo6UsCYZYcF9N4oyUkT5IwNww1HrxGVljTWczLA%2BQkElmfnY5PUa4VKJ14PTJUIGtUgBo2ymUTNqDUqGpRSiLWe56dXuDRMWkwPyMVfUcMPGPhb8GOqUBK7I7lPOQkrizJtaK1ahGOCSKoOiswcnGqL%2FRRHb3ZvoZAM7sd81FOQQx1dXd7BjP1UNbxYtiJHS57%2By5lDGQWSKpwtj0Vno6fDQi1TAr8x8rQEkZlsb4Bq4vpZjdMV0Is43xvW5iez2zi5vjCab1zAgKk%2Bp49y%2Bn6drdJY5KtRG6EImTVv6dYLbt%2FB7S8WVKEcYrYbWvxHrHtk5h9OuYYSQl1chB&X-Amz-Signature=64d482f7ab4083bd8cc86c5fb8ea688d5647a5ce01f0f16530435348c6b30970&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V67ISROB%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICw16s1YcNdkMA4b8nwlP8XLIt5%2F91M8ReoeXGiWjQapAiEAj71PyXwhYY6B1mPfvz6Ku3oP1Qd0LIorfc3NvqIL2WwqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKoGfqTuxbXmjeTv%2ByrcA38v6ZYZ%2B7Kwjz1VCqxRtt86bE4QTtYe8LMMWRQHk5TU8pMmCxp2yWY%2Bqn23AKruUGPONphcmK9RFlo37XaKIM2%2B4dikw35h6lqAKZQ9PyC4lhTnL3JuvXEUkqFyWAxxFRMJM3KEju3prb0n8hXKnc4l5EhxHI9PGVRhLMGoy4gEVrF3AW6A9IbIjvq5QlJRLGL3hxgADv1eyy3Zqte2KicK4UdxPbil14uTsykfVWb0B8xSTkE0peXs9IrtCRQRhYBngMI6wo%2BMiWx6R9rIlkHhekwdz6pEVdWA%2F1n0sZ8Xw%2BQUfBb%2BhFlIfJsVidIFxLC2BV3FlUoT%2Bu0i6B%2FYQogZ%2BW5rWpgsQyBYQZDjyyGcTJVyNL9j%2BWyQq3g3bhrSE4cLet7a2nysQczHkC7nFZZdpLDiKvisbobF3Scn0nl5qfmh3RMSdN4LutN89x9T0awEZpUFnasHUsurVfTiLP%2F3iBh%2Fh3YRECfZnY8jRwqa5ORS%2BsY10yzSaqT6iT4U3XVFAQoxJTBMEUOvlT6lo6UsCYZYcF9N4oyUkT5IwNww1HrxGVljTWczLA%2BQkElmfnY5PUa4VKJ14PTJUIGtUgBo2ymUTNqDUqGpRSiLWe56dXuDRMWkwPyMVfUcMPGPhb8GOqUBK7I7lPOQkrizJtaK1ahGOCSKoOiswcnGqL%2FRRHb3ZvoZAM7sd81FOQQx1dXd7BjP1UNbxYtiJHS57%2By5lDGQWSKpwtj0Vno6fDQi1TAr8x8rQEkZlsb4Bq4vpZjdMV0Is43xvW5iez2zi5vjCab1zAgKk%2Bp49y%2Bn6drdJY5KtRG6EImTVv6dYLbt%2FB7S8WVKEcYrYbWvxHrHtk5h9OuYYSQl1chB&X-Amz-Signature=14ba83f268e7e6b696efe5ed9dbe87a1147ed2e545d3b4e91261cf1b3c6b7585&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
