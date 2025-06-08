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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWE5KDTS%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9QkBKZOKUvznY0yfM8xKHs%2BMd6y15BsxLJB6xvabrygIhAIyaFs%2BUHkJKFDjuytVZLEOGhFe7RVyAtGQGeg92Ig%2BWKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwkn1FrWEtbkInYjMUq3ANupydsFJL%2Bk5%2FDD5AGZjEm3xaMhVdwcsqhqJVOX3S0QmG7jn3F4I0HXETyv8N6adi8GRFhgYHYM8NrSixVXo9IDJzxZxfaWVV6Uo1nm2vRF7RE8ufVPu5NFMUMm3vLzIDa4VRhU99dTGBa8%2Fi6iJvGvVpVeTe1xwzMeEhyl0QQgowZfEKdJbHqCZgpvfnsmOEugXMgMzUWdSoX%2B8cdTUcbsQtIOGiPrZN7%2FCFPJk9%2FXe1BFI1aas%2B0L10M62KpljL%2Fjh%2FdOKH4rEBoYTCUCxZTOCna0RTP%2BzQAlkvdFNHI%2FteLiTMgf1Wv6l3abm%2BMbbn0npqcDI9YVtvz20CGZ9GKOBFiJiJ9iH3hnlewEo40zUlaWtFx4trt8yeLOdxBdi0OCe%2Ft1zDLbXEgzu0Z2sVto%2BketSh4DhMYt%2B7yNBl04oE%2FKRDuoMbaBrZM0C%2BH05%2BYDFz9FzeqBQpJ4Sd83dWYDKsLUaMrbK7YVI390b4PJsC6pTVT7%2BXtD43PlmerJ8n2tp5KG5w1N1wOnX6WXPPAygq6IwmAx5K990ZPwFPE4UxA%2BmueVWy%2Fpni7MIvVXSaVHlBL%2FnPeVqvEV6U9NiFDlPj6GFySxmRv6TTPPBe6r9F0%2FUQ75nHozn3p6DDpsJTCBjqkAZYqJWm%2B5UEuDsvdC0XpGl%2FKc3VegFsJxmRLzgBTGKjHeN6BGg6uKn2SWSuVWZHnKOQmKjLzXu0ZdbVxbtAm8R0PExIeYwr8UHKq9Hw03x2hWw5bmzyCFPcN9Dcj%2FIv30DUXCV1vj3tcB517Pw7VSn1e2VOBPBIj3jO6%2FB1D5uppp2clL0W3amClTvhAWAN20eKb0jOAoHsJP%2FxIeU4Pkd3zI7HP&X-Amz-Signature=be66f2ed31cd1a31ec14fecacad303e83ee44354cddaf9d85efc15791a4a858c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWE5KDTS%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9QkBKZOKUvznY0yfM8xKHs%2BMd6y15BsxLJB6xvabrygIhAIyaFs%2BUHkJKFDjuytVZLEOGhFe7RVyAtGQGeg92Ig%2BWKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwkn1FrWEtbkInYjMUq3ANupydsFJL%2Bk5%2FDD5AGZjEm3xaMhVdwcsqhqJVOX3S0QmG7jn3F4I0HXETyv8N6adi8GRFhgYHYM8NrSixVXo9IDJzxZxfaWVV6Uo1nm2vRF7RE8ufVPu5NFMUMm3vLzIDa4VRhU99dTGBa8%2Fi6iJvGvVpVeTe1xwzMeEhyl0QQgowZfEKdJbHqCZgpvfnsmOEugXMgMzUWdSoX%2B8cdTUcbsQtIOGiPrZN7%2FCFPJk9%2FXe1BFI1aas%2B0L10M62KpljL%2Fjh%2FdOKH4rEBoYTCUCxZTOCna0RTP%2BzQAlkvdFNHI%2FteLiTMgf1Wv6l3abm%2BMbbn0npqcDI9YVtvz20CGZ9GKOBFiJiJ9iH3hnlewEo40zUlaWtFx4trt8yeLOdxBdi0OCe%2Ft1zDLbXEgzu0Z2sVto%2BketSh4DhMYt%2B7yNBl04oE%2FKRDuoMbaBrZM0C%2BH05%2BYDFz9FzeqBQpJ4Sd83dWYDKsLUaMrbK7YVI390b4PJsC6pTVT7%2BXtD43PlmerJ8n2tp5KG5w1N1wOnX6WXPPAygq6IwmAx5K990ZPwFPE4UxA%2BmueVWy%2Fpni7MIvVXSaVHlBL%2FnPeVqvEV6U9NiFDlPj6GFySxmRv6TTPPBe6r9F0%2FUQ75nHozn3p6DDpsJTCBjqkAZYqJWm%2B5UEuDsvdC0XpGl%2FKc3VegFsJxmRLzgBTGKjHeN6BGg6uKn2SWSuVWZHnKOQmKjLzXu0ZdbVxbtAm8R0PExIeYwr8UHKq9Hw03x2hWw5bmzyCFPcN9Dcj%2FIv30DUXCV1vj3tcB517Pw7VSn1e2VOBPBIj3jO6%2FB1D5uppp2clL0W3amClTvhAWAN20eKb0jOAoHsJP%2FxIeU4Pkd3zI7HP&X-Amz-Signature=5d51a41d7604ec690189ed6766c3b495995223e126e21e0804f4db2d3be24781&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWE5KDTS%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9QkBKZOKUvznY0yfM8xKHs%2BMd6y15BsxLJB6xvabrygIhAIyaFs%2BUHkJKFDjuytVZLEOGhFe7RVyAtGQGeg92Ig%2BWKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwkn1FrWEtbkInYjMUq3ANupydsFJL%2Bk5%2FDD5AGZjEm3xaMhVdwcsqhqJVOX3S0QmG7jn3F4I0HXETyv8N6adi8GRFhgYHYM8NrSixVXo9IDJzxZxfaWVV6Uo1nm2vRF7RE8ufVPu5NFMUMm3vLzIDa4VRhU99dTGBa8%2Fi6iJvGvVpVeTe1xwzMeEhyl0QQgowZfEKdJbHqCZgpvfnsmOEugXMgMzUWdSoX%2B8cdTUcbsQtIOGiPrZN7%2FCFPJk9%2FXe1BFI1aas%2B0L10M62KpljL%2Fjh%2FdOKH4rEBoYTCUCxZTOCna0RTP%2BzQAlkvdFNHI%2FteLiTMgf1Wv6l3abm%2BMbbn0npqcDI9YVtvz20CGZ9GKOBFiJiJ9iH3hnlewEo40zUlaWtFx4trt8yeLOdxBdi0OCe%2Ft1zDLbXEgzu0Z2sVto%2BketSh4DhMYt%2B7yNBl04oE%2FKRDuoMbaBrZM0C%2BH05%2BYDFz9FzeqBQpJ4Sd83dWYDKsLUaMrbK7YVI390b4PJsC6pTVT7%2BXtD43PlmerJ8n2tp5KG5w1N1wOnX6WXPPAygq6IwmAx5K990ZPwFPE4UxA%2BmueVWy%2Fpni7MIvVXSaVHlBL%2FnPeVqvEV6U9NiFDlPj6GFySxmRv6TTPPBe6r9F0%2FUQ75nHozn3p6DDpsJTCBjqkAZYqJWm%2B5UEuDsvdC0XpGl%2FKc3VegFsJxmRLzgBTGKjHeN6BGg6uKn2SWSuVWZHnKOQmKjLzXu0ZdbVxbtAm8R0PExIeYwr8UHKq9Hw03x2hWw5bmzyCFPcN9Dcj%2FIv30DUXCV1vj3tcB517Pw7VSn1e2VOBPBIj3jO6%2FB1D5uppp2clL0W3amClTvhAWAN20eKb0jOAoHsJP%2FxIeU4Pkd3zI7HP&X-Amz-Signature=5e9439de8d3ef9d54416b71c518b970bbda4c8d38734a427261a8f6e1965bfee&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWE5KDTS%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9QkBKZOKUvznY0yfM8xKHs%2BMd6y15BsxLJB6xvabrygIhAIyaFs%2BUHkJKFDjuytVZLEOGhFe7RVyAtGQGeg92Ig%2BWKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwkn1FrWEtbkInYjMUq3ANupydsFJL%2Bk5%2FDD5AGZjEm3xaMhVdwcsqhqJVOX3S0QmG7jn3F4I0HXETyv8N6adi8GRFhgYHYM8NrSixVXo9IDJzxZxfaWVV6Uo1nm2vRF7RE8ufVPu5NFMUMm3vLzIDa4VRhU99dTGBa8%2Fi6iJvGvVpVeTe1xwzMeEhyl0QQgowZfEKdJbHqCZgpvfnsmOEugXMgMzUWdSoX%2B8cdTUcbsQtIOGiPrZN7%2FCFPJk9%2FXe1BFI1aas%2B0L10M62KpljL%2Fjh%2FdOKH4rEBoYTCUCxZTOCna0RTP%2BzQAlkvdFNHI%2FteLiTMgf1Wv6l3abm%2BMbbn0npqcDI9YVtvz20CGZ9GKOBFiJiJ9iH3hnlewEo40zUlaWtFx4trt8yeLOdxBdi0OCe%2Ft1zDLbXEgzu0Z2sVto%2BketSh4DhMYt%2B7yNBl04oE%2FKRDuoMbaBrZM0C%2BH05%2BYDFz9FzeqBQpJ4Sd83dWYDKsLUaMrbK7YVI390b4PJsC6pTVT7%2BXtD43PlmerJ8n2tp5KG5w1N1wOnX6WXPPAygq6IwmAx5K990ZPwFPE4UxA%2BmueVWy%2Fpni7MIvVXSaVHlBL%2FnPeVqvEV6U9NiFDlPj6GFySxmRv6TTPPBe6r9F0%2FUQ75nHozn3p6DDpsJTCBjqkAZYqJWm%2B5UEuDsvdC0XpGl%2FKc3VegFsJxmRLzgBTGKjHeN6BGg6uKn2SWSuVWZHnKOQmKjLzXu0ZdbVxbtAm8R0PExIeYwr8UHKq9Hw03x2hWw5bmzyCFPcN9Dcj%2FIv30DUXCV1vj3tcB517Pw7VSn1e2VOBPBIj3jO6%2FB1D5uppp2clL0W3amClTvhAWAN20eKb0jOAoHsJP%2FxIeU4Pkd3zI7HP&X-Amz-Signature=4bb2fa3db7d1fbb17ca1d07e83a50348a19a734098a8786537ad3742b34c2cf5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWE5KDTS%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9QkBKZOKUvznY0yfM8xKHs%2BMd6y15BsxLJB6xvabrygIhAIyaFs%2BUHkJKFDjuytVZLEOGhFe7RVyAtGQGeg92Ig%2BWKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwkn1FrWEtbkInYjMUq3ANupydsFJL%2Bk5%2FDD5AGZjEm3xaMhVdwcsqhqJVOX3S0QmG7jn3F4I0HXETyv8N6adi8GRFhgYHYM8NrSixVXo9IDJzxZxfaWVV6Uo1nm2vRF7RE8ufVPu5NFMUMm3vLzIDa4VRhU99dTGBa8%2Fi6iJvGvVpVeTe1xwzMeEhyl0QQgowZfEKdJbHqCZgpvfnsmOEugXMgMzUWdSoX%2B8cdTUcbsQtIOGiPrZN7%2FCFPJk9%2FXe1BFI1aas%2B0L10M62KpljL%2Fjh%2FdOKH4rEBoYTCUCxZTOCna0RTP%2BzQAlkvdFNHI%2FteLiTMgf1Wv6l3abm%2BMbbn0npqcDI9YVtvz20CGZ9GKOBFiJiJ9iH3hnlewEo40zUlaWtFx4trt8yeLOdxBdi0OCe%2Ft1zDLbXEgzu0Z2sVto%2BketSh4DhMYt%2B7yNBl04oE%2FKRDuoMbaBrZM0C%2BH05%2BYDFz9FzeqBQpJ4Sd83dWYDKsLUaMrbK7YVI390b4PJsC6pTVT7%2BXtD43PlmerJ8n2tp5KG5w1N1wOnX6WXPPAygq6IwmAx5K990ZPwFPE4UxA%2BmueVWy%2Fpni7MIvVXSaVHlBL%2FnPeVqvEV6U9NiFDlPj6GFySxmRv6TTPPBe6r9F0%2FUQ75nHozn3p6DDpsJTCBjqkAZYqJWm%2B5UEuDsvdC0XpGl%2FKc3VegFsJxmRLzgBTGKjHeN6BGg6uKn2SWSuVWZHnKOQmKjLzXu0ZdbVxbtAm8R0PExIeYwr8UHKq9Hw03x2hWw5bmzyCFPcN9Dcj%2FIv30DUXCV1vj3tcB517Pw7VSn1e2VOBPBIj3jO6%2FB1D5uppp2clL0W3amClTvhAWAN20eKb0jOAoHsJP%2FxIeU4Pkd3zI7HP&X-Amz-Signature=65f6baa64b048dcb119cf4952e20402cb6ecb340dc2f3aa609d85223df2048ab&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
