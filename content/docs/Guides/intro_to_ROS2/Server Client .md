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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU3N37XR%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzlEbWs5Ie73eSDp2VAsIvmLfAhI4GRsLypeagecKYeAIgEMOiPdqvTGgXBlq9dkw7p2kzfk3SQ8GXwApJdpmDToAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJqFEeeLowJqeZPFyrcAze0WUIVWrTkwfBafNT1JJPPlvA2BZXLnG9tyx9eg%2BkZwUpbbgKPAdPSa%2BJpsIk0D%2BuRBDiPo34aFOlCxUyFIZIZuYc7ZqKbqV%2F7LxtDtaPvRAGAigFW%2FVwpD5bTExZyYDZ5PaIyNu48SU2XUJ%2B1p5VuLcy46%2BuzQ4ElkmUtKIHFwZbM66FQ2C3BRMoLPayTQ%2BR6vy0Obwqw6u%2FW%2Fx7yhF28rR3xslGWIXQD9HfVqfJGQXnv4g4CVvZs2kL%2FEMrgdamZXuzkzgLNWvI0u7Rq50Ck07GH2QQSrqfFAHlW%2BqmmvVy8i%2FzbgM0ehzVNduFn%2BTwGHoZJKbrN2B2YOP1X9UTlVM2pTCEURJlOT8c04fNp4WUo6eYtJL5flH9UQNvSYL5yhxooqokfvP07WH4Jy6HroDBLGWD7b4dxAQZkoOmHaPw%2BgxzoIszYvlMYI9wYnjtUutJXY3L%2FIhYY5XbYnMw6wwDkCzFegeIpxcfqhpUh9UnkYJvHlWeMeLGhVxX3vSHcB6qY8QRN4ON59chRLDV2g8qviv6ORiY5Ws8GzzdXM7TU16MBP2hPWdk5f5PdlQW%2FeRBLNTHCJ9vqWiEhuPYV1%2F3QLALyvUICTmmnOhZChMJR45%2BkZlAsbArwMKL6pb0GOqUBRsY2E8BtGlJe2YPeHmCudDwSzWhHrvtBEycX6VXvE%2B4bkycW2YuMSgaqwi%2B5vyvc3gIYY1bgOS4P4kJIg00blEAYqTGbeffPhGh1bYJy6t9rONpxOcyH7EMMyj0tDMoxN%2BkrzFgnn8STrqpNRAC6SzBseZsQCckjrCzw95sQKzG1hr%2BzKv%2BJ0b0LMrOEyl6dlkqFXYsM8Cku5WRWr1nhicBvDocD&X-Amz-Signature=ce0c8fccee53366d4093421539318b50123eefe93a4e7f597ba91fb5e9d0a4e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU3N37XR%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzlEbWs5Ie73eSDp2VAsIvmLfAhI4GRsLypeagecKYeAIgEMOiPdqvTGgXBlq9dkw7p2kzfk3SQ8GXwApJdpmDToAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJqFEeeLowJqeZPFyrcAze0WUIVWrTkwfBafNT1JJPPlvA2BZXLnG9tyx9eg%2BkZwUpbbgKPAdPSa%2BJpsIk0D%2BuRBDiPo34aFOlCxUyFIZIZuYc7ZqKbqV%2F7LxtDtaPvRAGAigFW%2FVwpD5bTExZyYDZ5PaIyNu48SU2XUJ%2B1p5VuLcy46%2BuzQ4ElkmUtKIHFwZbM66FQ2C3BRMoLPayTQ%2BR6vy0Obwqw6u%2FW%2Fx7yhF28rR3xslGWIXQD9HfVqfJGQXnv4g4CVvZs2kL%2FEMrgdamZXuzkzgLNWvI0u7Rq50Ck07GH2QQSrqfFAHlW%2BqmmvVy8i%2FzbgM0ehzVNduFn%2BTwGHoZJKbrN2B2YOP1X9UTlVM2pTCEURJlOT8c04fNp4WUo6eYtJL5flH9UQNvSYL5yhxooqokfvP07WH4Jy6HroDBLGWD7b4dxAQZkoOmHaPw%2BgxzoIszYvlMYI9wYnjtUutJXY3L%2FIhYY5XbYnMw6wwDkCzFegeIpxcfqhpUh9UnkYJvHlWeMeLGhVxX3vSHcB6qY8QRN4ON59chRLDV2g8qviv6ORiY5Ws8GzzdXM7TU16MBP2hPWdk5f5PdlQW%2FeRBLNTHCJ9vqWiEhuPYV1%2F3QLALyvUICTmmnOhZChMJR45%2BkZlAsbArwMKL6pb0GOqUBRsY2E8BtGlJe2YPeHmCudDwSzWhHrvtBEycX6VXvE%2B4bkycW2YuMSgaqwi%2B5vyvc3gIYY1bgOS4P4kJIg00blEAYqTGbeffPhGh1bYJy6t9rONpxOcyH7EMMyj0tDMoxN%2BkrzFgnn8STrqpNRAC6SzBseZsQCckjrCzw95sQKzG1hr%2BzKv%2BJ0b0LMrOEyl6dlkqFXYsM8Cku5WRWr1nhicBvDocD&X-Amz-Signature=faa1e9c5153a000ae64d3412f8a75b787eab15245ae7363685df337ec6112261&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU3N37XR%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzlEbWs5Ie73eSDp2VAsIvmLfAhI4GRsLypeagecKYeAIgEMOiPdqvTGgXBlq9dkw7p2kzfk3SQ8GXwApJdpmDToAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJqFEeeLowJqeZPFyrcAze0WUIVWrTkwfBafNT1JJPPlvA2BZXLnG9tyx9eg%2BkZwUpbbgKPAdPSa%2BJpsIk0D%2BuRBDiPo34aFOlCxUyFIZIZuYc7ZqKbqV%2F7LxtDtaPvRAGAigFW%2FVwpD5bTExZyYDZ5PaIyNu48SU2XUJ%2B1p5VuLcy46%2BuzQ4ElkmUtKIHFwZbM66FQ2C3BRMoLPayTQ%2BR6vy0Obwqw6u%2FW%2Fx7yhF28rR3xslGWIXQD9HfVqfJGQXnv4g4CVvZs2kL%2FEMrgdamZXuzkzgLNWvI0u7Rq50Ck07GH2QQSrqfFAHlW%2BqmmvVy8i%2FzbgM0ehzVNduFn%2BTwGHoZJKbrN2B2YOP1X9UTlVM2pTCEURJlOT8c04fNp4WUo6eYtJL5flH9UQNvSYL5yhxooqokfvP07WH4Jy6HroDBLGWD7b4dxAQZkoOmHaPw%2BgxzoIszYvlMYI9wYnjtUutJXY3L%2FIhYY5XbYnMw6wwDkCzFegeIpxcfqhpUh9UnkYJvHlWeMeLGhVxX3vSHcB6qY8QRN4ON59chRLDV2g8qviv6ORiY5Ws8GzzdXM7TU16MBP2hPWdk5f5PdlQW%2FeRBLNTHCJ9vqWiEhuPYV1%2F3QLALyvUICTmmnOhZChMJR45%2BkZlAsbArwMKL6pb0GOqUBRsY2E8BtGlJe2YPeHmCudDwSzWhHrvtBEycX6VXvE%2B4bkycW2YuMSgaqwi%2B5vyvc3gIYY1bgOS4P4kJIg00blEAYqTGbeffPhGh1bYJy6t9rONpxOcyH7EMMyj0tDMoxN%2BkrzFgnn8STrqpNRAC6SzBseZsQCckjrCzw95sQKzG1hr%2BzKv%2BJ0b0LMrOEyl6dlkqFXYsM8Cku5WRWr1nhicBvDocD&X-Amz-Signature=d27109fad0065d8c54cdf78621615ae6e11f2d7de6c9afad464036a125da34da&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU3N37XR%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzlEbWs5Ie73eSDp2VAsIvmLfAhI4GRsLypeagecKYeAIgEMOiPdqvTGgXBlq9dkw7p2kzfk3SQ8GXwApJdpmDToAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJqFEeeLowJqeZPFyrcAze0WUIVWrTkwfBafNT1JJPPlvA2BZXLnG9tyx9eg%2BkZwUpbbgKPAdPSa%2BJpsIk0D%2BuRBDiPo34aFOlCxUyFIZIZuYc7ZqKbqV%2F7LxtDtaPvRAGAigFW%2FVwpD5bTExZyYDZ5PaIyNu48SU2XUJ%2B1p5VuLcy46%2BuzQ4ElkmUtKIHFwZbM66FQ2C3BRMoLPayTQ%2BR6vy0Obwqw6u%2FW%2Fx7yhF28rR3xslGWIXQD9HfVqfJGQXnv4g4CVvZs2kL%2FEMrgdamZXuzkzgLNWvI0u7Rq50Ck07GH2QQSrqfFAHlW%2BqmmvVy8i%2FzbgM0ehzVNduFn%2BTwGHoZJKbrN2B2YOP1X9UTlVM2pTCEURJlOT8c04fNp4WUo6eYtJL5flH9UQNvSYL5yhxooqokfvP07WH4Jy6HroDBLGWD7b4dxAQZkoOmHaPw%2BgxzoIszYvlMYI9wYnjtUutJXY3L%2FIhYY5XbYnMw6wwDkCzFegeIpxcfqhpUh9UnkYJvHlWeMeLGhVxX3vSHcB6qY8QRN4ON59chRLDV2g8qviv6ORiY5Ws8GzzdXM7TU16MBP2hPWdk5f5PdlQW%2FeRBLNTHCJ9vqWiEhuPYV1%2F3QLALyvUICTmmnOhZChMJR45%2BkZlAsbArwMKL6pb0GOqUBRsY2E8BtGlJe2YPeHmCudDwSzWhHrvtBEycX6VXvE%2B4bkycW2YuMSgaqwi%2B5vyvc3gIYY1bgOS4P4kJIg00blEAYqTGbeffPhGh1bYJy6t9rONpxOcyH7EMMyj0tDMoxN%2BkrzFgnn8STrqpNRAC6SzBseZsQCckjrCzw95sQKzG1hr%2BzKv%2BJ0b0LMrOEyl6dlkqFXYsM8Cku5WRWr1nhicBvDocD&X-Amz-Signature=aa332aca430e956a1226dcbf829eb5bcebee4a4a6d0dea85a0de3a63aad8a15b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU3N37XR%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzlEbWs5Ie73eSDp2VAsIvmLfAhI4GRsLypeagecKYeAIgEMOiPdqvTGgXBlq9dkw7p2kzfk3SQ8GXwApJdpmDToAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJqFEeeLowJqeZPFyrcAze0WUIVWrTkwfBafNT1JJPPlvA2BZXLnG9tyx9eg%2BkZwUpbbgKPAdPSa%2BJpsIk0D%2BuRBDiPo34aFOlCxUyFIZIZuYc7ZqKbqV%2F7LxtDtaPvRAGAigFW%2FVwpD5bTExZyYDZ5PaIyNu48SU2XUJ%2B1p5VuLcy46%2BuzQ4ElkmUtKIHFwZbM66FQ2C3BRMoLPayTQ%2BR6vy0Obwqw6u%2FW%2Fx7yhF28rR3xslGWIXQD9HfVqfJGQXnv4g4CVvZs2kL%2FEMrgdamZXuzkzgLNWvI0u7Rq50Ck07GH2QQSrqfFAHlW%2BqmmvVy8i%2FzbgM0ehzVNduFn%2BTwGHoZJKbrN2B2YOP1X9UTlVM2pTCEURJlOT8c04fNp4WUo6eYtJL5flH9UQNvSYL5yhxooqokfvP07WH4Jy6HroDBLGWD7b4dxAQZkoOmHaPw%2BgxzoIszYvlMYI9wYnjtUutJXY3L%2FIhYY5XbYnMw6wwDkCzFegeIpxcfqhpUh9UnkYJvHlWeMeLGhVxX3vSHcB6qY8QRN4ON59chRLDV2g8qviv6ORiY5Ws8GzzdXM7TU16MBP2hPWdk5f5PdlQW%2FeRBLNTHCJ9vqWiEhuPYV1%2F3QLALyvUICTmmnOhZChMJR45%2BkZlAsbArwMKL6pb0GOqUBRsY2E8BtGlJe2YPeHmCudDwSzWhHrvtBEycX6VXvE%2B4bkycW2YuMSgaqwi%2B5vyvc3gIYY1bgOS4P4kJIg00blEAYqTGbeffPhGh1bYJy6t9rONpxOcyH7EMMyj0tDMoxN%2BkrzFgnn8STrqpNRAC6SzBseZsQCckjrCzw95sQKzG1hr%2BzKv%2BJ0b0LMrOEyl6dlkqFXYsM8Cku5WRWr1nhicBvDocD&X-Amz-Signature=0b89121e9e6176479d96b4ab8155fbc0b1d7b137853b48149cb01ae173020a84&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
