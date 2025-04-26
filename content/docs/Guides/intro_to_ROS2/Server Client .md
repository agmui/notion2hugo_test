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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PLZCKR2%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC8MY9SCHON6r9qhFfT9bg9mOwc5b9QM3THebalU9QcAIhAK5QMKnEVOqRJQcAvI7n2W%2FBVeRobbsOv3LrIVJK1XK%2BKv8DCEoQABoMNjM3NDIzMTgzODA1Igw2Iv%2FguafqhwkPL28q3AMHsdgzlMvqc4q3BdBSgijZXc7TjBmm7yyfafDUu1EiVwhE0AYfY3QCoEpu9FcoKCRIHkpW3rbt7VmJad4nZnvlaFbL2r0gvyEt%2FfrV3WMKy7Yrnhupy1wXKRnX%2BeRz6VlRZBXDHnZkA1HZvGeNZWZp1Kdpl0QxPXSoTnvsl6xLBPeygD9Q5KRxaVBbkfay1%2Bs%2BLCqe9Mno1ifyQ8LXyxUQI6tp0iBNHExMSQvipyYs5icBNz36nwIg%2FkkSaBTSjUbt0AJB3YWWYobgnp4cTWYWbYuvYjRcD8BOkpXe1f%2Bc6N9yMyC2Ch0TkJpvHRgmajb5uR0x4n7NdpHsxboitd3eiguJ59P5VNkYUE2vUrKdKYYmy1m5Ko4z57BCgubZR0FFV4LTNTZgd%2B8Cq7kk6BEvBFekjBf3Rl4GMsFc9qUJI%2F%2BcRDix1zQgV0a3wXYvdzK5H4bt6%2FKTFVt3JhPOiKpW35tTkrSgf%2FUFrjVIvfn4Icf8a9%2F0DrQw0xwTHvg4K97cKT1dxtsoiRs3cuP6B37cgy2p9JwnvAH1brkQXMk4rZwWyeINfLalG3qS1bGMUcqJ2vf1DP4LGpjuJXgl31gl8HAXYabJKHVe3ckaOJmn9wawkL%2FHagPY5fKWwTCLqbTABjqkAY9%2BERteJHIjPYd27xcjejW1xOXJC%2BMMlK8dmio%2FWdS2%2FqtpptAikLe6Izv5kDr5X5RD1ZlWA3Omo7eMrLUqIVV33pFAsp3oDlXJd9PCx28NTc6au%2FPE8T98FT1muB7mzv%2FK2TZ%2FtyuEC0SDrW%2FDkGYjv90oN3ur5gtOQCGm%2F7i%2FWNCYH%2F87YKerFBuQNx%2FkvrJhK0HQlX9JUN%2Bva%2FTKWJRElCQz&X-Amz-Signature=78e16d133be5aedd70e456aaaacbe126023e638d9281aeaa7161d22e9e97c524&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PLZCKR2%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC8MY9SCHON6r9qhFfT9bg9mOwc5b9QM3THebalU9QcAIhAK5QMKnEVOqRJQcAvI7n2W%2FBVeRobbsOv3LrIVJK1XK%2BKv8DCEoQABoMNjM3NDIzMTgzODA1Igw2Iv%2FguafqhwkPL28q3AMHsdgzlMvqc4q3BdBSgijZXc7TjBmm7yyfafDUu1EiVwhE0AYfY3QCoEpu9FcoKCRIHkpW3rbt7VmJad4nZnvlaFbL2r0gvyEt%2FfrV3WMKy7Yrnhupy1wXKRnX%2BeRz6VlRZBXDHnZkA1HZvGeNZWZp1Kdpl0QxPXSoTnvsl6xLBPeygD9Q5KRxaVBbkfay1%2Bs%2BLCqe9Mno1ifyQ8LXyxUQI6tp0iBNHExMSQvipyYs5icBNz36nwIg%2FkkSaBTSjUbt0AJB3YWWYobgnp4cTWYWbYuvYjRcD8BOkpXe1f%2Bc6N9yMyC2Ch0TkJpvHRgmajb5uR0x4n7NdpHsxboitd3eiguJ59P5VNkYUE2vUrKdKYYmy1m5Ko4z57BCgubZR0FFV4LTNTZgd%2B8Cq7kk6BEvBFekjBf3Rl4GMsFc9qUJI%2F%2BcRDix1zQgV0a3wXYvdzK5H4bt6%2FKTFVt3JhPOiKpW35tTkrSgf%2FUFrjVIvfn4Icf8a9%2F0DrQw0xwTHvg4K97cKT1dxtsoiRs3cuP6B37cgy2p9JwnvAH1brkQXMk4rZwWyeINfLalG3qS1bGMUcqJ2vf1DP4LGpjuJXgl31gl8HAXYabJKHVe3ckaOJmn9wawkL%2FHagPY5fKWwTCLqbTABjqkAY9%2BERteJHIjPYd27xcjejW1xOXJC%2BMMlK8dmio%2FWdS2%2FqtpptAikLe6Izv5kDr5X5RD1ZlWA3Omo7eMrLUqIVV33pFAsp3oDlXJd9PCx28NTc6au%2FPE8T98FT1muB7mzv%2FK2TZ%2FtyuEC0SDrW%2FDkGYjv90oN3ur5gtOQCGm%2F7i%2FWNCYH%2F87YKerFBuQNx%2FkvrJhK0HQlX9JUN%2Bva%2FTKWJRElCQz&X-Amz-Signature=06b6da014c31360f519a5f99e8016ec9f9680b2c46162efe7f3b17af2c83ca7d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PLZCKR2%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC8MY9SCHON6r9qhFfT9bg9mOwc5b9QM3THebalU9QcAIhAK5QMKnEVOqRJQcAvI7n2W%2FBVeRobbsOv3LrIVJK1XK%2BKv8DCEoQABoMNjM3NDIzMTgzODA1Igw2Iv%2FguafqhwkPL28q3AMHsdgzlMvqc4q3BdBSgijZXc7TjBmm7yyfafDUu1EiVwhE0AYfY3QCoEpu9FcoKCRIHkpW3rbt7VmJad4nZnvlaFbL2r0gvyEt%2FfrV3WMKy7Yrnhupy1wXKRnX%2BeRz6VlRZBXDHnZkA1HZvGeNZWZp1Kdpl0QxPXSoTnvsl6xLBPeygD9Q5KRxaVBbkfay1%2Bs%2BLCqe9Mno1ifyQ8LXyxUQI6tp0iBNHExMSQvipyYs5icBNz36nwIg%2FkkSaBTSjUbt0AJB3YWWYobgnp4cTWYWbYuvYjRcD8BOkpXe1f%2Bc6N9yMyC2Ch0TkJpvHRgmajb5uR0x4n7NdpHsxboitd3eiguJ59P5VNkYUE2vUrKdKYYmy1m5Ko4z57BCgubZR0FFV4LTNTZgd%2B8Cq7kk6BEvBFekjBf3Rl4GMsFc9qUJI%2F%2BcRDix1zQgV0a3wXYvdzK5H4bt6%2FKTFVt3JhPOiKpW35tTkrSgf%2FUFrjVIvfn4Icf8a9%2F0DrQw0xwTHvg4K97cKT1dxtsoiRs3cuP6B37cgy2p9JwnvAH1brkQXMk4rZwWyeINfLalG3qS1bGMUcqJ2vf1DP4LGpjuJXgl31gl8HAXYabJKHVe3ckaOJmn9wawkL%2FHagPY5fKWwTCLqbTABjqkAY9%2BERteJHIjPYd27xcjejW1xOXJC%2BMMlK8dmio%2FWdS2%2FqtpptAikLe6Izv5kDr5X5RD1ZlWA3Omo7eMrLUqIVV33pFAsp3oDlXJd9PCx28NTc6au%2FPE8T98FT1muB7mzv%2FK2TZ%2FtyuEC0SDrW%2FDkGYjv90oN3ur5gtOQCGm%2F7i%2FWNCYH%2F87YKerFBuQNx%2FkvrJhK0HQlX9JUN%2Bva%2FTKWJRElCQz&X-Amz-Signature=a553ca7ace3f324d5b785b2f490dc574050e9949fb4a5c4ecb7666fc842133ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PLZCKR2%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC8MY9SCHON6r9qhFfT9bg9mOwc5b9QM3THebalU9QcAIhAK5QMKnEVOqRJQcAvI7n2W%2FBVeRobbsOv3LrIVJK1XK%2BKv8DCEoQABoMNjM3NDIzMTgzODA1Igw2Iv%2FguafqhwkPL28q3AMHsdgzlMvqc4q3BdBSgijZXc7TjBmm7yyfafDUu1EiVwhE0AYfY3QCoEpu9FcoKCRIHkpW3rbt7VmJad4nZnvlaFbL2r0gvyEt%2FfrV3WMKy7Yrnhupy1wXKRnX%2BeRz6VlRZBXDHnZkA1HZvGeNZWZp1Kdpl0QxPXSoTnvsl6xLBPeygD9Q5KRxaVBbkfay1%2Bs%2BLCqe9Mno1ifyQ8LXyxUQI6tp0iBNHExMSQvipyYs5icBNz36nwIg%2FkkSaBTSjUbt0AJB3YWWYobgnp4cTWYWbYuvYjRcD8BOkpXe1f%2Bc6N9yMyC2Ch0TkJpvHRgmajb5uR0x4n7NdpHsxboitd3eiguJ59P5VNkYUE2vUrKdKYYmy1m5Ko4z57BCgubZR0FFV4LTNTZgd%2B8Cq7kk6BEvBFekjBf3Rl4GMsFc9qUJI%2F%2BcRDix1zQgV0a3wXYvdzK5H4bt6%2FKTFVt3JhPOiKpW35tTkrSgf%2FUFrjVIvfn4Icf8a9%2F0DrQw0xwTHvg4K97cKT1dxtsoiRs3cuP6B37cgy2p9JwnvAH1brkQXMk4rZwWyeINfLalG3qS1bGMUcqJ2vf1DP4LGpjuJXgl31gl8HAXYabJKHVe3ckaOJmn9wawkL%2FHagPY5fKWwTCLqbTABjqkAY9%2BERteJHIjPYd27xcjejW1xOXJC%2BMMlK8dmio%2FWdS2%2FqtpptAikLe6Izv5kDr5X5RD1ZlWA3Omo7eMrLUqIVV33pFAsp3oDlXJd9PCx28NTc6au%2FPE8T98FT1muB7mzv%2FK2TZ%2FtyuEC0SDrW%2FDkGYjv90oN3ur5gtOQCGm%2F7i%2FWNCYH%2F87YKerFBuQNx%2FkvrJhK0HQlX9JUN%2Bva%2FTKWJRElCQz&X-Amz-Signature=abe38f4f31c6eb7077e47e38547cd8148b657256061cdfdf137dd1fc25926b5f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PLZCKR2%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC8MY9SCHON6r9qhFfT9bg9mOwc5b9QM3THebalU9QcAIhAK5QMKnEVOqRJQcAvI7n2W%2FBVeRobbsOv3LrIVJK1XK%2BKv8DCEoQABoMNjM3NDIzMTgzODA1Igw2Iv%2FguafqhwkPL28q3AMHsdgzlMvqc4q3BdBSgijZXc7TjBmm7yyfafDUu1EiVwhE0AYfY3QCoEpu9FcoKCRIHkpW3rbt7VmJad4nZnvlaFbL2r0gvyEt%2FfrV3WMKy7Yrnhupy1wXKRnX%2BeRz6VlRZBXDHnZkA1HZvGeNZWZp1Kdpl0QxPXSoTnvsl6xLBPeygD9Q5KRxaVBbkfay1%2Bs%2BLCqe9Mno1ifyQ8LXyxUQI6tp0iBNHExMSQvipyYs5icBNz36nwIg%2FkkSaBTSjUbt0AJB3YWWYobgnp4cTWYWbYuvYjRcD8BOkpXe1f%2Bc6N9yMyC2Ch0TkJpvHRgmajb5uR0x4n7NdpHsxboitd3eiguJ59P5VNkYUE2vUrKdKYYmy1m5Ko4z57BCgubZR0FFV4LTNTZgd%2B8Cq7kk6BEvBFekjBf3Rl4GMsFc9qUJI%2F%2BcRDix1zQgV0a3wXYvdzK5H4bt6%2FKTFVt3JhPOiKpW35tTkrSgf%2FUFrjVIvfn4Icf8a9%2F0DrQw0xwTHvg4K97cKT1dxtsoiRs3cuP6B37cgy2p9JwnvAH1brkQXMk4rZwWyeINfLalG3qS1bGMUcqJ2vf1DP4LGpjuJXgl31gl8HAXYabJKHVe3ckaOJmn9wawkL%2FHagPY5fKWwTCLqbTABjqkAY9%2BERteJHIjPYd27xcjejW1xOXJC%2BMMlK8dmio%2FWdS2%2FqtpptAikLe6Izv5kDr5X5RD1ZlWA3Omo7eMrLUqIVV33pFAsp3oDlXJd9PCx28NTc6au%2FPE8T98FT1muB7mzv%2FK2TZ%2FtyuEC0SDrW%2FDkGYjv90oN3ur5gtOQCGm%2F7i%2FWNCYH%2F87YKerFBuQNx%2FkvrJhK0HQlX9JUN%2Bva%2FTKWJRElCQz&X-Amz-Signature=e1a7f063a05fae2cea8b553101827390d2d4c63a8c33aaeb45103bc96d66de81&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
