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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIUWELLU%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVRffHYvClYD1u%2BzkM0HrSVxdPhmkrtijjfTGhzFsI6AiEAhKB5ndeGRgo1mWzV%2BnkNxdoX1gGiKNNvh59IRnGhc%2BAq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDPAOXZ7LsqClQGeqPSrcA2Ad3e9eBScyYWRvSbIBjKmsoNfCOElwiFE1spE0kIlFhJJHlMoxvjIgEIgeVwXISKs52bGiVYpBxErQTIwNeIEyJ7AP%2BTSgSVLoSIdskIM8W4BJLAg3sLsOGE%2BjMFnXBh8nbePQCBNGmbYRkUKkepvQ47yp4hKs78p5Foo8FPSOXx%2B2Yax3K3VaZWYeLxeAFoGyyqQGhr9peP4%2F3fxs1llWEeqmwM8WSzVFH3B5LgTH8esq44gUYO7MQjzrBh8MzLsGUh1%2FLTj7bS3gtoZBOOEeOGGgbBcu2Tl3lJKa9BjjLbL7Se8YMAg6qIvkdeyXaH0gUEyon6Z%2B%2Bx2gr%2BX3hKQePAJo%2BO3ip09YER4p%2F99R%2FVx4xw4fVjMnW68bXkxYlFyh7%2FIkE8Jbwlle1b7GGR%2F%2B3RwHflJhmyVmBPSoEcOXx0Dgm%2FICKeBGutgydXkuj43H89OA9884hEbUhFe2DaylP7YugKz9OGFiA7Ns7mpYZlL46is9NMgppsZlrPjabOmfIvkbcJSC0eZDfOrtGk4Ef5MLSIvNfLAQx1wr9%2FWc8hiHil5KGs6d2859vQosm1o5NiWl1YiI7aHuGBrPMuCnuVo7D4latxJrv9%2B%2FQrPe6ush%2FCVrPVjNdtYbMOfl3cEGOqUB3Mupt%2F9zmIZh1BKP7m5%2F0sbZA48h00HSjYPEOreVdVmImphz%2FDOLutUGhhvwVJnlShGdOzNX1UMMSRzW34mDbayzHaHr3OOiPvA%2BdpuKw3upq1JmW3YJ5yQcpedRhQ%2BO%2BXegAWpGycCSHZQ1mv1d0gU8ca0UUkX41wHpNAFtnhz9qHpJT3yFP2oIMCkXVUaCS0ZDPb0DUhFJEjppketDm0GiWWyq&X-Amz-Signature=32ba1d8cb94e959e5c7c755d31ce2b12e8cc664f9af15d84b2b2d6926efbf8d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIUWELLU%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVRffHYvClYD1u%2BzkM0HrSVxdPhmkrtijjfTGhzFsI6AiEAhKB5ndeGRgo1mWzV%2BnkNxdoX1gGiKNNvh59IRnGhc%2BAq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDPAOXZ7LsqClQGeqPSrcA2Ad3e9eBScyYWRvSbIBjKmsoNfCOElwiFE1spE0kIlFhJJHlMoxvjIgEIgeVwXISKs52bGiVYpBxErQTIwNeIEyJ7AP%2BTSgSVLoSIdskIM8W4BJLAg3sLsOGE%2BjMFnXBh8nbePQCBNGmbYRkUKkepvQ47yp4hKs78p5Foo8FPSOXx%2B2Yax3K3VaZWYeLxeAFoGyyqQGhr9peP4%2F3fxs1llWEeqmwM8WSzVFH3B5LgTH8esq44gUYO7MQjzrBh8MzLsGUh1%2FLTj7bS3gtoZBOOEeOGGgbBcu2Tl3lJKa9BjjLbL7Se8YMAg6qIvkdeyXaH0gUEyon6Z%2B%2Bx2gr%2BX3hKQePAJo%2BO3ip09YER4p%2F99R%2FVx4xw4fVjMnW68bXkxYlFyh7%2FIkE8Jbwlle1b7GGR%2F%2B3RwHflJhmyVmBPSoEcOXx0Dgm%2FICKeBGutgydXkuj43H89OA9884hEbUhFe2DaylP7YugKz9OGFiA7Ns7mpYZlL46is9NMgppsZlrPjabOmfIvkbcJSC0eZDfOrtGk4Ef5MLSIvNfLAQx1wr9%2FWc8hiHil5KGs6d2859vQosm1o5NiWl1YiI7aHuGBrPMuCnuVo7D4latxJrv9%2B%2FQrPe6ush%2FCVrPVjNdtYbMOfl3cEGOqUB3Mupt%2F9zmIZh1BKP7m5%2F0sbZA48h00HSjYPEOreVdVmImphz%2FDOLutUGhhvwVJnlShGdOzNX1UMMSRzW34mDbayzHaHr3OOiPvA%2BdpuKw3upq1JmW3YJ5yQcpedRhQ%2BO%2BXegAWpGycCSHZQ1mv1d0gU8ca0UUkX41wHpNAFtnhz9qHpJT3yFP2oIMCkXVUaCS0ZDPb0DUhFJEjppketDm0GiWWyq&X-Amz-Signature=0a422fb81ccbdc91baf95043474b0299c67640a5bc6a7a292ea1aad8d471e688&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIUWELLU%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVRffHYvClYD1u%2BzkM0HrSVxdPhmkrtijjfTGhzFsI6AiEAhKB5ndeGRgo1mWzV%2BnkNxdoX1gGiKNNvh59IRnGhc%2BAq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDPAOXZ7LsqClQGeqPSrcA2Ad3e9eBScyYWRvSbIBjKmsoNfCOElwiFE1spE0kIlFhJJHlMoxvjIgEIgeVwXISKs52bGiVYpBxErQTIwNeIEyJ7AP%2BTSgSVLoSIdskIM8W4BJLAg3sLsOGE%2BjMFnXBh8nbePQCBNGmbYRkUKkepvQ47yp4hKs78p5Foo8FPSOXx%2B2Yax3K3VaZWYeLxeAFoGyyqQGhr9peP4%2F3fxs1llWEeqmwM8WSzVFH3B5LgTH8esq44gUYO7MQjzrBh8MzLsGUh1%2FLTj7bS3gtoZBOOEeOGGgbBcu2Tl3lJKa9BjjLbL7Se8YMAg6qIvkdeyXaH0gUEyon6Z%2B%2Bx2gr%2BX3hKQePAJo%2BO3ip09YER4p%2F99R%2FVx4xw4fVjMnW68bXkxYlFyh7%2FIkE8Jbwlle1b7GGR%2F%2B3RwHflJhmyVmBPSoEcOXx0Dgm%2FICKeBGutgydXkuj43H89OA9884hEbUhFe2DaylP7YugKz9OGFiA7Ns7mpYZlL46is9NMgppsZlrPjabOmfIvkbcJSC0eZDfOrtGk4Ef5MLSIvNfLAQx1wr9%2FWc8hiHil5KGs6d2859vQosm1o5NiWl1YiI7aHuGBrPMuCnuVo7D4latxJrv9%2B%2FQrPe6ush%2FCVrPVjNdtYbMOfl3cEGOqUB3Mupt%2F9zmIZh1BKP7m5%2F0sbZA48h00HSjYPEOreVdVmImphz%2FDOLutUGhhvwVJnlShGdOzNX1UMMSRzW34mDbayzHaHr3OOiPvA%2BdpuKw3upq1JmW3YJ5yQcpedRhQ%2BO%2BXegAWpGycCSHZQ1mv1d0gU8ca0UUkX41wHpNAFtnhz9qHpJT3yFP2oIMCkXVUaCS0ZDPb0DUhFJEjppketDm0GiWWyq&X-Amz-Signature=dae2779cacd55c8c97ae854113c6a7a8b459f6e18bf92e9a5f0c0304a6e7e444&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIUWELLU%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVRffHYvClYD1u%2BzkM0HrSVxdPhmkrtijjfTGhzFsI6AiEAhKB5ndeGRgo1mWzV%2BnkNxdoX1gGiKNNvh59IRnGhc%2BAq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDPAOXZ7LsqClQGeqPSrcA2Ad3e9eBScyYWRvSbIBjKmsoNfCOElwiFE1spE0kIlFhJJHlMoxvjIgEIgeVwXISKs52bGiVYpBxErQTIwNeIEyJ7AP%2BTSgSVLoSIdskIM8W4BJLAg3sLsOGE%2BjMFnXBh8nbePQCBNGmbYRkUKkepvQ47yp4hKs78p5Foo8FPSOXx%2B2Yax3K3VaZWYeLxeAFoGyyqQGhr9peP4%2F3fxs1llWEeqmwM8WSzVFH3B5LgTH8esq44gUYO7MQjzrBh8MzLsGUh1%2FLTj7bS3gtoZBOOEeOGGgbBcu2Tl3lJKa9BjjLbL7Se8YMAg6qIvkdeyXaH0gUEyon6Z%2B%2Bx2gr%2BX3hKQePAJo%2BO3ip09YER4p%2F99R%2FVx4xw4fVjMnW68bXkxYlFyh7%2FIkE8Jbwlle1b7GGR%2F%2B3RwHflJhmyVmBPSoEcOXx0Dgm%2FICKeBGutgydXkuj43H89OA9884hEbUhFe2DaylP7YugKz9OGFiA7Ns7mpYZlL46is9NMgppsZlrPjabOmfIvkbcJSC0eZDfOrtGk4Ef5MLSIvNfLAQx1wr9%2FWc8hiHil5KGs6d2859vQosm1o5NiWl1YiI7aHuGBrPMuCnuVo7D4latxJrv9%2B%2FQrPe6ush%2FCVrPVjNdtYbMOfl3cEGOqUB3Mupt%2F9zmIZh1BKP7m5%2F0sbZA48h00HSjYPEOreVdVmImphz%2FDOLutUGhhvwVJnlShGdOzNX1UMMSRzW34mDbayzHaHr3OOiPvA%2BdpuKw3upq1JmW3YJ5yQcpedRhQ%2BO%2BXegAWpGycCSHZQ1mv1d0gU8ca0UUkX41wHpNAFtnhz9qHpJT3yFP2oIMCkXVUaCS0ZDPb0DUhFJEjppketDm0GiWWyq&X-Amz-Signature=ebde15fa0df69558e29c8aa50f4207d4edbca8d3c07de05b1fe957b80308578c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIUWELLU%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVRffHYvClYD1u%2BzkM0HrSVxdPhmkrtijjfTGhzFsI6AiEAhKB5ndeGRgo1mWzV%2BnkNxdoX1gGiKNNvh59IRnGhc%2BAq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDPAOXZ7LsqClQGeqPSrcA2Ad3e9eBScyYWRvSbIBjKmsoNfCOElwiFE1spE0kIlFhJJHlMoxvjIgEIgeVwXISKs52bGiVYpBxErQTIwNeIEyJ7AP%2BTSgSVLoSIdskIM8W4BJLAg3sLsOGE%2BjMFnXBh8nbePQCBNGmbYRkUKkepvQ47yp4hKs78p5Foo8FPSOXx%2B2Yax3K3VaZWYeLxeAFoGyyqQGhr9peP4%2F3fxs1llWEeqmwM8WSzVFH3B5LgTH8esq44gUYO7MQjzrBh8MzLsGUh1%2FLTj7bS3gtoZBOOEeOGGgbBcu2Tl3lJKa9BjjLbL7Se8YMAg6qIvkdeyXaH0gUEyon6Z%2B%2Bx2gr%2BX3hKQePAJo%2BO3ip09YER4p%2F99R%2FVx4xw4fVjMnW68bXkxYlFyh7%2FIkE8Jbwlle1b7GGR%2F%2B3RwHflJhmyVmBPSoEcOXx0Dgm%2FICKeBGutgydXkuj43H89OA9884hEbUhFe2DaylP7YugKz9OGFiA7Ns7mpYZlL46is9NMgppsZlrPjabOmfIvkbcJSC0eZDfOrtGk4Ef5MLSIvNfLAQx1wr9%2FWc8hiHil5KGs6d2859vQosm1o5NiWl1YiI7aHuGBrPMuCnuVo7D4latxJrv9%2B%2FQrPe6ush%2FCVrPVjNdtYbMOfl3cEGOqUB3Mupt%2F9zmIZh1BKP7m5%2F0sbZA48h00HSjYPEOreVdVmImphz%2FDOLutUGhhvwVJnlShGdOzNX1UMMSRzW34mDbayzHaHr3OOiPvA%2BdpuKw3upq1JmW3YJ5yQcpedRhQ%2BO%2BXegAWpGycCSHZQ1mv1d0gU8ca0UUkX41wHpNAFtnhz9qHpJT3yFP2oIMCkXVUaCS0ZDPb0DUhFJEjppketDm0GiWWyq&X-Amz-Signature=7a797dc5f3329861d486b11dab25b5a72d745646b02b585ee419ae3cefef247b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
