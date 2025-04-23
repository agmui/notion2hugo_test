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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BKGBM2A%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCWt2%2FwwmHwW9O4uMLhZpvBDhl0JRVwUROcelZY%2FpMRLgIhALlkhxatgFYgU00x%2Fxdw%2BtJckAYVAFKUvapBP%2FpnxRUJKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtq%2FtKsroebpSCo94q3ANr8w%2Ffn0Q7mSp9vohKHD%2B8lEZdnVcstJU%2FPM0Qor9PzGFPyBHA%2BDFo9D0CmiCIxfLzWoimuZRbBXmSqZQq7QGI2mhGZGvF8wBhZuBPo9PMU3Mu%2BY5iOUDLmbqJyUGomPOYs0QfIzWWNvdWWX43HSPaiTHiau%2BkDuXQrCbQJ79dvknm5JkowSr4Kxrov4a81yOX88GdPWDNpgPwz3708Od7CHl%2F%2BcOfEcr6VrPzFefDflGfdf7hhzUeR6d9BpHR0jzFekzz3HCjIdrLntvACXlX9YtLjBoJGRKgIOKBlQi%2FMso6QLGvvYPxGc90h56Gfo9VF%2FPpUe%2BxqIqkNHF2n3WM54QYNwfVgZSlUW3O9mIHmjo5deKr7kkan0VAAD3PR87gNx9prFjK%2FrRhJPYsZVS%2BlVKuwclfFmqLUDyWHPtKdDUFgTi8Knfps6cjLNWgqMm2EAtyO4K1WKfdc%2FvT3zRBTvz0wRlGm0mVKbOxTjEr2OudqPtt6fo03rril7fMswihQDLD1%2FGUA4g2%2Bz2ZFOkjLJ94EZPYEwWFiphSvPT0OrlS7ssJ1KsC2Awe9MyUUVTiqAe1%2Bl6%2BWbiTZ%2B%2B19PBbxzpIPFON6Q%2FKTVSy%2FEh%2FdVf5xBUugKQyhkngnjCmoKLABjqkAbB%2ByE8X7dGNB32iMsnoOTj5tie3Vq5qHTfC57fdH%2FP2rjcoqFMJjPnM1TpkAC95eMyDPT0g7SWRVmZLrh6UekLAxx1HxokhCp1sXXEneupwfyoUEsf1zDGZPhbM3SDo%2BJ6uEjhX1%2F2KiUZFLH7H54Hb28z9RGi4%2FZSNlTGUXSxxPpbad4b59xA3HUTdGOuxNXlWT5nVQgK6DZNmj%2FwSkYh57KKw&X-Amz-Signature=54cf11b2b50aa114d4049611fc65185b6323761e3a0dfb275a8fb00016bb8a00&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BKGBM2A%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCWt2%2FwwmHwW9O4uMLhZpvBDhl0JRVwUROcelZY%2FpMRLgIhALlkhxatgFYgU00x%2Fxdw%2BtJckAYVAFKUvapBP%2FpnxRUJKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtq%2FtKsroebpSCo94q3ANr8w%2Ffn0Q7mSp9vohKHD%2B8lEZdnVcstJU%2FPM0Qor9PzGFPyBHA%2BDFo9D0CmiCIxfLzWoimuZRbBXmSqZQq7QGI2mhGZGvF8wBhZuBPo9PMU3Mu%2BY5iOUDLmbqJyUGomPOYs0QfIzWWNvdWWX43HSPaiTHiau%2BkDuXQrCbQJ79dvknm5JkowSr4Kxrov4a81yOX88GdPWDNpgPwz3708Od7CHl%2F%2BcOfEcr6VrPzFefDflGfdf7hhzUeR6d9BpHR0jzFekzz3HCjIdrLntvACXlX9YtLjBoJGRKgIOKBlQi%2FMso6QLGvvYPxGc90h56Gfo9VF%2FPpUe%2BxqIqkNHF2n3WM54QYNwfVgZSlUW3O9mIHmjo5deKr7kkan0VAAD3PR87gNx9prFjK%2FrRhJPYsZVS%2BlVKuwclfFmqLUDyWHPtKdDUFgTi8Knfps6cjLNWgqMm2EAtyO4K1WKfdc%2FvT3zRBTvz0wRlGm0mVKbOxTjEr2OudqPtt6fo03rril7fMswihQDLD1%2FGUA4g2%2Bz2ZFOkjLJ94EZPYEwWFiphSvPT0OrlS7ssJ1KsC2Awe9MyUUVTiqAe1%2Bl6%2BWbiTZ%2B%2B19PBbxzpIPFON6Q%2FKTVSy%2FEh%2FdVf5xBUugKQyhkngnjCmoKLABjqkAbB%2ByE8X7dGNB32iMsnoOTj5tie3Vq5qHTfC57fdH%2FP2rjcoqFMJjPnM1TpkAC95eMyDPT0g7SWRVmZLrh6UekLAxx1HxokhCp1sXXEneupwfyoUEsf1zDGZPhbM3SDo%2BJ6uEjhX1%2F2KiUZFLH7H54Hb28z9RGi4%2FZSNlTGUXSxxPpbad4b59xA3HUTdGOuxNXlWT5nVQgK6DZNmj%2FwSkYh57KKw&X-Amz-Signature=345f6430670ce322b9bc0ba98ff81456a9eb55aeaa1faa1df0b1c0dd47c5b824&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BKGBM2A%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCWt2%2FwwmHwW9O4uMLhZpvBDhl0JRVwUROcelZY%2FpMRLgIhALlkhxatgFYgU00x%2Fxdw%2BtJckAYVAFKUvapBP%2FpnxRUJKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtq%2FtKsroebpSCo94q3ANr8w%2Ffn0Q7mSp9vohKHD%2B8lEZdnVcstJU%2FPM0Qor9PzGFPyBHA%2BDFo9D0CmiCIxfLzWoimuZRbBXmSqZQq7QGI2mhGZGvF8wBhZuBPo9PMU3Mu%2BY5iOUDLmbqJyUGomPOYs0QfIzWWNvdWWX43HSPaiTHiau%2BkDuXQrCbQJ79dvknm5JkowSr4Kxrov4a81yOX88GdPWDNpgPwz3708Od7CHl%2F%2BcOfEcr6VrPzFefDflGfdf7hhzUeR6d9BpHR0jzFekzz3HCjIdrLntvACXlX9YtLjBoJGRKgIOKBlQi%2FMso6QLGvvYPxGc90h56Gfo9VF%2FPpUe%2BxqIqkNHF2n3WM54QYNwfVgZSlUW3O9mIHmjo5deKr7kkan0VAAD3PR87gNx9prFjK%2FrRhJPYsZVS%2BlVKuwclfFmqLUDyWHPtKdDUFgTi8Knfps6cjLNWgqMm2EAtyO4K1WKfdc%2FvT3zRBTvz0wRlGm0mVKbOxTjEr2OudqPtt6fo03rril7fMswihQDLD1%2FGUA4g2%2Bz2ZFOkjLJ94EZPYEwWFiphSvPT0OrlS7ssJ1KsC2Awe9MyUUVTiqAe1%2Bl6%2BWbiTZ%2B%2B19PBbxzpIPFON6Q%2FKTVSy%2FEh%2FdVf5xBUugKQyhkngnjCmoKLABjqkAbB%2ByE8X7dGNB32iMsnoOTj5tie3Vq5qHTfC57fdH%2FP2rjcoqFMJjPnM1TpkAC95eMyDPT0g7SWRVmZLrh6UekLAxx1HxokhCp1sXXEneupwfyoUEsf1zDGZPhbM3SDo%2BJ6uEjhX1%2F2KiUZFLH7H54Hb28z9RGi4%2FZSNlTGUXSxxPpbad4b59xA3HUTdGOuxNXlWT5nVQgK6DZNmj%2FwSkYh57KKw&X-Amz-Signature=0832398d61f97f881b68581a05d6f35213a9f3f9e850746d5bc781d2fa98c406&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BKGBM2A%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCWt2%2FwwmHwW9O4uMLhZpvBDhl0JRVwUROcelZY%2FpMRLgIhALlkhxatgFYgU00x%2Fxdw%2BtJckAYVAFKUvapBP%2FpnxRUJKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtq%2FtKsroebpSCo94q3ANr8w%2Ffn0Q7mSp9vohKHD%2B8lEZdnVcstJU%2FPM0Qor9PzGFPyBHA%2BDFo9D0CmiCIxfLzWoimuZRbBXmSqZQq7QGI2mhGZGvF8wBhZuBPo9PMU3Mu%2BY5iOUDLmbqJyUGomPOYs0QfIzWWNvdWWX43HSPaiTHiau%2BkDuXQrCbQJ79dvknm5JkowSr4Kxrov4a81yOX88GdPWDNpgPwz3708Od7CHl%2F%2BcOfEcr6VrPzFefDflGfdf7hhzUeR6d9BpHR0jzFekzz3HCjIdrLntvACXlX9YtLjBoJGRKgIOKBlQi%2FMso6QLGvvYPxGc90h56Gfo9VF%2FPpUe%2BxqIqkNHF2n3WM54QYNwfVgZSlUW3O9mIHmjo5deKr7kkan0VAAD3PR87gNx9prFjK%2FrRhJPYsZVS%2BlVKuwclfFmqLUDyWHPtKdDUFgTi8Knfps6cjLNWgqMm2EAtyO4K1WKfdc%2FvT3zRBTvz0wRlGm0mVKbOxTjEr2OudqPtt6fo03rril7fMswihQDLD1%2FGUA4g2%2Bz2ZFOkjLJ94EZPYEwWFiphSvPT0OrlS7ssJ1KsC2Awe9MyUUVTiqAe1%2Bl6%2BWbiTZ%2B%2B19PBbxzpIPFON6Q%2FKTVSy%2FEh%2FdVf5xBUugKQyhkngnjCmoKLABjqkAbB%2ByE8X7dGNB32iMsnoOTj5tie3Vq5qHTfC57fdH%2FP2rjcoqFMJjPnM1TpkAC95eMyDPT0g7SWRVmZLrh6UekLAxx1HxokhCp1sXXEneupwfyoUEsf1zDGZPhbM3SDo%2BJ6uEjhX1%2F2KiUZFLH7H54Hb28z9RGi4%2FZSNlTGUXSxxPpbad4b59xA3HUTdGOuxNXlWT5nVQgK6DZNmj%2FwSkYh57KKw&X-Amz-Signature=2ff19a9364e5d5ecaa3cb3517538219742d0a2e524f156c0886aebf6284fb2b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BKGBM2A%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCWt2%2FwwmHwW9O4uMLhZpvBDhl0JRVwUROcelZY%2FpMRLgIhALlkhxatgFYgU00x%2Fxdw%2BtJckAYVAFKUvapBP%2FpnxRUJKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtq%2FtKsroebpSCo94q3ANr8w%2Ffn0Q7mSp9vohKHD%2B8lEZdnVcstJU%2FPM0Qor9PzGFPyBHA%2BDFo9D0CmiCIxfLzWoimuZRbBXmSqZQq7QGI2mhGZGvF8wBhZuBPo9PMU3Mu%2BY5iOUDLmbqJyUGomPOYs0QfIzWWNvdWWX43HSPaiTHiau%2BkDuXQrCbQJ79dvknm5JkowSr4Kxrov4a81yOX88GdPWDNpgPwz3708Od7CHl%2F%2BcOfEcr6VrPzFefDflGfdf7hhzUeR6d9BpHR0jzFekzz3HCjIdrLntvACXlX9YtLjBoJGRKgIOKBlQi%2FMso6QLGvvYPxGc90h56Gfo9VF%2FPpUe%2BxqIqkNHF2n3WM54QYNwfVgZSlUW3O9mIHmjo5deKr7kkan0VAAD3PR87gNx9prFjK%2FrRhJPYsZVS%2BlVKuwclfFmqLUDyWHPtKdDUFgTi8Knfps6cjLNWgqMm2EAtyO4K1WKfdc%2FvT3zRBTvz0wRlGm0mVKbOxTjEr2OudqPtt6fo03rril7fMswihQDLD1%2FGUA4g2%2Bz2ZFOkjLJ94EZPYEwWFiphSvPT0OrlS7ssJ1KsC2Awe9MyUUVTiqAe1%2Bl6%2BWbiTZ%2B%2B19PBbxzpIPFON6Q%2FKTVSy%2FEh%2FdVf5xBUugKQyhkngnjCmoKLABjqkAbB%2ByE8X7dGNB32iMsnoOTj5tie3Vq5qHTfC57fdH%2FP2rjcoqFMJjPnM1TpkAC95eMyDPT0g7SWRVmZLrh6UekLAxx1HxokhCp1sXXEneupwfyoUEsf1zDGZPhbM3SDo%2BJ6uEjhX1%2F2KiUZFLH7H54Hb28z9RGi4%2FZSNlTGUXSxxPpbad4b59xA3HUTdGOuxNXlWT5nVQgK6DZNmj%2FwSkYh57KKw&X-Amz-Signature=5cc4eddfc8a8241bd82deeca48beaefbc01a67a4820b3a39d6abf00182dd77b8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
