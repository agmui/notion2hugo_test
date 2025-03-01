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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKPSZRB4%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDY5d5w2%2FdkH4PdHUgXkiNnMaykuPUOOshy07XqXNqG4wIgDW%2FqBL9285h9nNbx1LqESJygRdYvZbFml%2BPIAUKptpoqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGb%2BWRE%2FB07ES%2BqD1SrcA8oRIRzgKEXHP2qmZJnVACRodXTkuuWxm6%2BPm4bljzun8BfedCf0nVT6bGy7JhcL7yGzVDHFQEf%2B7LYPOlV2L%2FFhV8JZrkhlGryZQubV17UrcYJxZ9ZDRfS7O3xreHnLL7hC8%2FbnzR%2FqxrmSnXuTXPgKwdzs%2FsrqmhkwI%2FpUThZBOZoO%2B4vIl%2FPlvy8dtxq3TvN2XsQFueeTcBDa3LXNj3PhwCKrCakMwNw7%2F5cWe%2B2rrRv72MOHUBhgG4wB9CoiQgWTXuWCYoXdWf3z0WDq%2FuQ%2BQI5CMJ1g9Jn7sOymyfvnTNUgajmNL9SmPo5WAxR1TR3YPk6idkrGvKd2sDhRe6cXaIkxkLV%2FMrIw4xYBYq8mrTSqotQwPRXWHXQHhPWqnLa1GWMplcNdtPgpwSbc03V0WQlbYjtYlDI7XlG2wcG3J2e9mRAdGvnX%2BjFILVhZFn7cbqlmwsTZcvqqMc%2FEF8oNpQtvzSow2D0QyN45HGcDzGWgcr0Xbf6IxmnDEQ1nGMSpTaA6SvUCpyGp4gmTQCpLSGV4%2FnjX9%2BVAIUuqU%2Bg0w0rVctGVVBBDpNtTpvtBbl4UvI5WRvcGOwPcxd6TpLJZ3PMxVARg4GjRg%2FyTXH%2B5hg0NSONiuYMkeGfeMNOQir4GOqUBnBcBCRuHS7e3uOIGGeAg45Jx0qWE%2FXaLymeXFQO9KQ452s3TMQtvlQmhERFeSYdH528EauQ6Y%2B8s3BERArZFwrYzLkLZJPvwUuZBjq3GUEi66IKAGEW3rFgtFIdyPe9wlqPFIoeLtkCrJiOVsC0I31WQmQXMSuC7IWD5MrcU9qIBuHmUYi6%2FgbNNAojYtezjLn9AbYmDzq4S9u3arAk2x3txuT%2Bb&X-Amz-Signature=c10b91c45cc869b3ff0bce738c443f0c13655daaa442529aadb0f67223ed4dda&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKPSZRB4%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDY5d5w2%2FdkH4PdHUgXkiNnMaykuPUOOshy07XqXNqG4wIgDW%2FqBL9285h9nNbx1LqESJygRdYvZbFml%2BPIAUKptpoqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGb%2BWRE%2FB07ES%2BqD1SrcA8oRIRzgKEXHP2qmZJnVACRodXTkuuWxm6%2BPm4bljzun8BfedCf0nVT6bGy7JhcL7yGzVDHFQEf%2B7LYPOlV2L%2FFhV8JZrkhlGryZQubV17UrcYJxZ9ZDRfS7O3xreHnLL7hC8%2FbnzR%2FqxrmSnXuTXPgKwdzs%2FsrqmhkwI%2FpUThZBOZoO%2B4vIl%2FPlvy8dtxq3TvN2XsQFueeTcBDa3LXNj3PhwCKrCakMwNw7%2F5cWe%2B2rrRv72MOHUBhgG4wB9CoiQgWTXuWCYoXdWf3z0WDq%2FuQ%2BQI5CMJ1g9Jn7sOymyfvnTNUgajmNL9SmPo5WAxR1TR3YPk6idkrGvKd2sDhRe6cXaIkxkLV%2FMrIw4xYBYq8mrTSqotQwPRXWHXQHhPWqnLa1GWMplcNdtPgpwSbc03V0WQlbYjtYlDI7XlG2wcG3J2e9mRAdGvnX%2BjFILVhZFn7cbqlmwsTZcvqqMc%2FEF8oNpQtvzSow2D0QyN45HGcDzGWgcr0Xbf6IxmnDEQ1nGMSpTaA6SvUCpyGp4gmTQCpLSGV4%2FnjX9%2BVAIUuqU%2Bg0w0rVctGVVBBDpNtTpvtBbl4UvI5WRvcGOwPcxd6TpLJZ3PMxVARg4GjRg%2FyTXH%2B5hg0NSONiuYMkeGfeMNOQir4GOqUBnBcBCRuHS7e3uOIGGeAg45Jx0qWE%2FXaLymeXFQO9KQ452s3TMQtvlQmhERFeSYdH528EauQ6Y%2B8s3BERArZFwrYzLkLZJPvwUuZBjq3GUEi66IKAGEW3rFgtFIdyPe9wlqPFIoeLtkCrJiOVsC0I31WQmQXMSuC7IWD5MrcU9qIBuHmUYi6%2FgbNNAojYtezjLn9AbYmDzq4S9u3arAk2x3txuT%2Bb&X-Amz-Signature=6950db23633a70123db8fc2f49d2ebad7f51077cca81c73ed0e2cd0d8dcb448c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKPSZRB4%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDY5d5w2%2FdkH4PdHUgXkiNnMaykuPUOOshy07XqXNqG4wIgDW%2FqBL9285h9nNbx1LqESJygRdYvZbFml%2BPIAUKptpoqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGb%2BWRE%2FB07ES%2BqD1SrcA8oRIRzgKEXHP2qmZJnVACRodXTkuuWxm6%2BPm4bljzun8BfedCf0nVT6bGy7JhcL7yGzVDHFQEf%2B7LYPOlV2L%2FFhV8JZrkhlGryZQubV17UrcYJxZ9ZDRfS7O3xreHnLL7hC8%2FbnzR%2FqxrmSnXuTXPgKwdzs%2FsrqmhkwI%2FpUThZBOZoO%2B4vIl%2FPlvy8dtxq3TvN2XsQFueeTcBDa3LXNj3PhwCKrCakMwNw7%2F5cWe%2B2rrRv72MOHUBhgG4wB9CoiQgWTXuWCYoXdWf3z0WDq%2FuQ%2BQI5CMJ1g9Jn7sOymyfvnTNUgajmNL9SmPo5WAxR1TR3YPk6idkrGvKd2sDhRe6cXaIkxkLV%2FMrIw4xYBYq8mrTSqotQwPRXWHXQHhPWqnLa1GWMplcNdtPgpwSbc03V0WQlbYjtYlDI7XlG2wcG3J2e9mRAdGvnX%2BjFILVhZFn7cbqlmwsTZcvqqMc%2FEF8oNpQtvzSow2D0QyN45HGcDzGWgcr0Xbf6IxmnDEQ1nGMSpTaA6SvUCpyGp4gmTQCpLSGV4%2FnjX9%2BVAIUuqU%2Bg0w0rVctGVVBBDpNtTpvtBbl4UvI5WRvcGOwPcxd6TpLJZ3PMxVARg4GjRg%2FyTXH%2B5hg0NSONiuYMkeGfeMNOQir4GOqUBnBcBCRuHS7e3uOIGGeAg45Jx0qWE%2FXaLymeXFQO9KQ452s3TMQtvlQmhERFeSYdH528EauQ6Y%2B8s3BERArZFwrYzLkLZJPvwUuZBjq3GUEi66IKAGEW3rFgtFIdyPe9wlqPFIoeLtkCrJiOVsC0I31WQmQXMSuC7IWD5MrcU9qIBuHmUYi6%2FgbNNAojYtezjLn9AbYmDzq4S9u3arAk2x3txuT%2Bb&X-Amz-Signature=e2292478d0b035b45a3f944c801b3b533849e819714f110fdb35e7551ddca815&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKPSZRB4%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDY5d5w2%2FdkH4PdHUgXkiNnMaykuPUOOshy07XqXNqG4wIgDW%2FqBL9285h9nNbx1LqESJygRdYvZbFml%2BPIAUKptpoqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGb%2BWRE%2FB07ES%2BqD1SrcA8oRIRzgKEXHP2qmZJnVACRodXTkuuWxm6%2BPm4bljzun8BfedCf0nVT6bGy7JhcL7yGzVDHFQEf%2B7LYPOlV2L%2FFhV8JZrkhlGryZQubV17UrcYJxZ9ZDRfS7O3xreHnLL7hC8%2FbnzR%2FqxrmSnXuTXPgKwdzs%2FsrqmhkwI%2FpUThZBOZoO%2B4vIl%2FPlvy8dtxq3TvN2XsQFueeTcBDa3LXNj3PhwCKrCakMwNw7%2F5cWe%2B2rrRv72MOHUBhgG4wB9CoiQgWTXuWCYoXdWf3z0WDq%2FuQ%2BQI5CMJ1g9Jn7sOymyfvnTNUgajmNL9SmPo5WAxR1TR3YPk6idkrGvKd2sDhRe6cXaIkxkLV%2FMrIw4xYBYq8mrTSqotQwPRXWHXQHhPWqnLa1GWMplcNdtPgpwSbc03V0WQlbYjtYlDI7XlG2wcG3J2e9mRAdGvnX%2BjFILVhZFn7cbqlmwsTZcvqqMc%2FEF8oNpQtvzSow2D0QyN45HGcDzGWgcr0Xbf6IxmnDEQ1nGMSpTaA6SvUCpyGp4gmTQCpLSGV4%2FnjX9%2BVAIUuqU%2Bg0w0rVctGVVBBDpNtTpvtBbl4UvI5WRvcGOwPcxd6TpLJZ3PMxVARg4GjRg%2FyTXH%2B5hg0NSONiuYMkeGfeMNOQir4GOqUBnBcBCRuHS7e3uOIGGeAg45Jx0qWE%2FXaLymeXFQO9KQ452s3TMQtvlQmhERFeSYdH528EauQ6Y%2B8s3BERArZFwrYzLkLZJPvwUuZBjq3GUEi66IKAGEW3rFgtFIdyPe9wlqPFIoeLtkCrJiOVsC0I31WQmQXMSuC7IWD5MrcU9qIBuHmUYi6%2FgbNNAojYtezjLn9AbYmDzq4S9u3arAk2x3txuT%2Bb&X-Amz-Signature=ccdedf34d6c9d681997a93d7b7b4e299427e6bcfb39cf930e581c51b499eb6c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKPSZRB4%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDY5d5w2%2FdkH4PdHUgXkiNnMaykuPUOOshy07XqXNqG4wIgDW%2FqBL9285h9nNbx1LqESJygRdYvZbFml%2BPIAUKptpoqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGb%2BWRE%2FB07ES%2BqD1SrcA8oRIRzgKEXHP2qmZJnVACRodXTkuuWxm6%2BPm4bljzun8BfedCf0nVT6bGy7JhcL7yGzVDHFQEf%2B7LYPOlV2L%2FFhV8JZrkhlGryZQubV17UrcYJxZ9ZDRfS7O3xreHnLL7hC8%2FbnzR%2FqxrmSnXuTXPgKwdzs%2FsrqmhkwI%2FpUThZBOZoO%2B4vIl%2FPlvy8dtxq3TvN2XsQFueeTcBDa3LXNj3PhwCKrCakMwNw7%2F5cWe%2B2rrRv72MOHUBhgG4wB9CoiQgWTXuWCYoXdWf3z0WDq%2FuQ%2BQI5CMJ1g9Jn7sOymyfvnTNUgajmNL9SmPo5WAxR1TR3YPk6idkrGvKd2sDhRe6cXaIkxkLV%2FMrIw4xYBYq8mrTSqotQwPRXWHXQHhPWqnLa1GWMplcNdtPgpwSbc03V0WQlbYjtYlDI7XlG2wcG3J2e9mRAdGvnX%2BjFILVhZFn7cbqlmwsTZcvqqMc%2FEF8oNpQtvzSow2D0QyN45HGcDzGWgcr0Xbf6IxmnDEQ1nGMSpTaA6SvUCpyGp4gmTQCpLSGV4%2FnjX9%2BVAIUuqU%2Bg0w0rVctGVVBBDpNtTpvtBbl4UvI5WRvcGOwPcxd6TpLJZ3PMxVARg4GjRg%2FyTXH%2B5hg0NSONiuYMkeGfeMNOQir4GOqUBnBcBCRuHS7e3uOIGGeAg45Jx0qWE%2FXaLymeXFQO9KQ452s3TMQtvlQmhERFeSYdH528EauQ6Y%2B8s3BERArZFwrYzLkLZJPvwUuZBjq3GUEi66IKAGEW3rFgtFIdyPe9wlqPFIoeLtkCrJiOVsC0I31WQmQXMSuC7IWD5MrcU9qIBuHmUYi6%2FgbNNAojYtezjLn9AbYmDzq4S9u3arAk2x3txuT%2Bb&X-Amz-Signature=624df4c3b545754164355a8e417e187d6ed160db3e33761181031559bcc2837d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
