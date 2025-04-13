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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGAKTMF6%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T090801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCICcvifiAnLO5%2Bxg3s62uZz34yH6XbTPXVEqDztTb02d6AiEAlYFOiNd%2ByiMj2w7ka%2FmsVR%2BVjFHT0eyzXSDXy0CksDsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4aZhJ8OOAOi27lFSrcA2K4uNAHlrc9QFl8l3XYj9iI89qs7ATY8epKwyeMiaQDW12ppsVbQJae9qn2b9c47p0vP2JqBM8sHiDhIZgmA0x4meam5ovmxp0lehsHlDpU6AO0WPIkaI54iRluWu3Hlwv2i%2BSdMDNWJmJgd4Bly4E0TwUfzXScu%2FBAIzk2SqflxDQuCC0f4wjRXd0LzAFSGFhHkqQvBGZljw8vNw0jdXidKPJEJPuOxa4Cyc5WD9emCWTbO%2FXieHFflL5cpwUuo0Hxk0%2F6bU7pd7ii7bBUGCVXPyN4GRjYf7%2BR0zi5%2BKJCHdbf%2BLmQDbdgdGw0%2FUWNeJm%2BKazve2GcRb9NDenPTZUYKdkA9%2BZrY4k%2BxbQLnyo4fWQKLc1VAuSTuRkHd4jYKn%2Fu0g7DHIaQM3fUNcmYbn3jjtYHn4kpzel3Y6isMtPON2lvdqV6Jva73m2AtDCi5trv9dTpJ9SM0X%2F%2F1VvOP6lZVRxGflVl2KwDRYIcZd7g8WXZhtvN7aYMovdkH9coHj1sh4Nmnkruo757BZ8kj3G%2F47DfrPsRtijyRHmnTpDdLJZsKTpA5bmd9x4EHmYWDxED%2Bp%2FV2k0gPYEK3SzmIHKu93fynJomXEtZM5Vou0Zw8BKluwlgx6HvWs%2BIMOrg7b8GOqUBGVoq%2BdOSscvwBrVb0cCTjNgytVmebGhhwglwbupS2yB3ggU7QuCtg2GuDKK5PfJvDK2fYFWlrGJnanULEIdcDTUe2%2BltyFu80D14a0kAfC17TdiJvqXjJdmvlYwvM4zP4ihFo8YJ7yRigXFUG8XDXNOaFLyAVvmS%2B1qpf688kDUQXtL75WnB5VHEwHFWu5DNYpjjpDZb%2FRATjTVAq9QXTBUjePpg&X-Amz-Signature=932251c3f1361cb6f4190ccc191eab27bf6d71842ff117258f1ca69cd7c968d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGAKTMF6%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T090801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCICcvifiAnLO5%2Bxg3s62uZz34yH6XbTPXVEqDztTb02d6AiEAlYFOiNd%2ByiMj2w7ka%2FmsVR%2BVjFHT0eyzXSDXy0CksDsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4aZhJ8OOAOi27lFSrcA2K4uNAHlrc9QFl8l3XYj9iI89qs7ATY8epKwyeMiaQDW12ppsVbQJae9qn2b9c47p0vP2JqBM8sHiDhIZgmA0x4meam5ovmxp0lehsHlDpU6AO0WPIkaI54iRluWu3Hlwv2i%2BSdMDNWJmJgd4Bly4E0TwUfzXScu%2FBAIzk2SqflxDQuCC0f4wjRXd0LzAFSGFhHkqQvBGZljw8vNw0jdXidKPJEJPuOxa4Cyc5WD9emCWTbO%2FXieHFflL5cpwUuo0Hxk0%2F6bU7pd7ii7bBUGCVXPyN4GRjYf7%2BR0zi5%2BKJCHdbf%2BLmQDbdgdGw0%2FUWNeJm%2BKazve2GcRb9NDenPTZUYKdkA9%2BZrY4k%2BxbQLnyo4fWQKLc1VAuSTuRkHd4jYKn%2Fu0g7DHIaQM3fUNcmYbn3jjtYHn4kpzel3Y6isMtPON2lvdqV6Jva73m2AtDCi5trv9dTpJ9SM0X%2F%2F1VvOP6lZVRxGflVl2KwDRYIcZd7g8WXZhtvN7aYMovdkH9coHj1sh4Nmnkruo757BZ8kj3G%2F47DfrPsRtijyRHmnTpDdLJZsKTpA5bmd9x4EHmYWDxED%2Bp%2FV2k0gPYEK3SzmIHKu93fynJomXEtZM5Vou0Zw8BKluwlgx6HvWs%2BIMOrg7b8GOqUBGVoq%2BdOSscvwBrVb0cCTjNgytVmebGhhwglwbupS2yB3ggU7QuCtg2GuDKK5PfJvDK2fYFWlrGJnanULEIdcDTUe2%2BltyFu80D14a0kAfC17TdiJvqXjJdmvlYwvM4zP4ihFo8YJ7yRigXFUG8XDXNOaFLyAVvmS%2B1qpf688kDUQXtL75WnB5VHEwHFWu5DNYpjjpDZb%2FRATjTVAq9QXTBUjePpg&X-Amz-Signature=f1ad39b31c89908e3285fcecb824bc3400effc4bfe5f355fb1a6b9ca6812fc1c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGAKTMF6%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T090801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCICcvifiAnLO5%2Bxg3s62uZz34yH6XbTPXVEqDztTb02d6AiEAlYFOiNd%2ByiMj2w7ka%2FmsVR%2BVjFHT0eyzXSDXy0CksDsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4aZhJ8OOAOi27lFSrcA2K4uNAHlrc9QFl8l3XYj9iI89qs7ATY8epKwyeMiaQDW12ppsVbQJae9qn2b9c47p0vP2JqBM8sHiDhIZgmA0x4meam5ovmxp0lehsHlDpU6AO0WPIkaI54iRluWu3Hlwv2i%2BSdMDNWJmJgd4Bly4E0TwUfzXScu%2FBAIzk2SqflxDQuCC0f4wjRXd0LzAFSGFhHkqQvBGZljw8vNw0jdXidKPJEJPuOxa4Cyc5WD9emCWTbO%2FXieHFflL5cpwUuo0Hxk0%2F6bU7pd7ii7bBUGCVXPyN4GRjYf7%2BR0zi5%2BKJCHdbf%2BLmQDbdgdGw0%2FUWNeJm%2BKazve2GcRb9NDenPTZUYKdkA9%2BZrY4k%2BxbQLnyo4fWQKLc1VAuSTuRkHd4jYKn%2Fu0g7DHIaQM3fUNcmYbn3jjtYHn4kpzel3Y6isMtPON2lvdqV6Jva73m2AtDCi5trv9dTpJ9SM0X%2F%2F1VvOP6lZVRxGflVl2KwDRYIcZd7g8WXZhtvN7aYMovdkH9coHj1sh4Nmnkruo757BZ8kj3G%2F47DfrPsRtijyRHmnTpDdLJZsKTpA5bmd9x4EHmYWDxED%2Bp%2FV2k0gPYEK3SzmIHKu93fynJomXEtZM5Vou0Zw8BKluwlgx6HvWs%2BIMOrg7b8GOqUBGVoq%2BdOSscvwBrVb0cCTjNgytVmebGhhwglwbupS2yB3ggU7QuCtg2GuDKK5PfJvDK2fYFWlrGJnanULEIdcDTUe2%2BltyFu80D14a0kAfC17TdiJvqXjJdmvlYwvM4zP4ihFo8YJ7yRigXFUG8XDXNOaFLyAVvmS%2B1qpf688kDUQXtL75WnB5VHEwHFWu5DNYpjjpDZb%2FRATjTVAq9QXTBUjePpg&X-Amz-Signature=b366a3f9e25a89bdfb48f69736d798c1de1ba5d72eba592b317097cc565cf073&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGAKTMF6%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T090801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCICcvifiAnLO5%2Bxg3s62uZz34yH6XbTPXVEqDztTb02d6AiEAlYFOiNd%2ByiMj2w7ka%2FmsVR%2BVjFHT0eyzXSDXy0CksDsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4aZhJ8OOAOi27lFSrcA2K4uNAHlrc9QFl8l3XYj9iI89qs7ATY8epKwyeMiaQDW12ppsVbQJae9qn2b9c47p0vP2JqBM8sHiDhIZgmA0x4meam5ovmxp0lehsHlDpU6AO0WPIkaI54iRluWu3Hlwv2i%2BSdMDNWJmJgd4Bly4E0TwUfzXScu%2FBAIzk2SqflxDQuCC0f4wjRXd0LzAFSGFhHkqQvBGZljw8vNw0jdXidKPJEJPuOxa4Cyc5WD9emCWTbO%2FXieHFflL5cpwUuo0Hxk0%2F6bU7pd7ii7bBUGCVXPyN4GRjYf7%2BR0zi5%2BKJCHdbf%2BLmQDbdgdGw0%2FUWNeJm%2BKazve2GcRb9NDenPTZUYKdkA9%2BZrY4k%2BxbQLnyo4fWQKLc1VAuSTuRkHd4jYKn%2Fu0g7DHIaQM3fUNcmYbn3jjtYHn4kpzel3Y6isMtPON2lvdqV6Jva73m2AtDCi5trv9dTpJ9SM0X%2F%2F1VvOP6lZVRxGflVl2KwDRYIcZd7g8WXZhtvN7aYMovdkH9coHj1sh4Nmnkruo757BZ8kj3G%2F47DfrPsRtijyRHmnTpDdLJZsKTpA5bmd9x4EHmYWDxED%2Bp%2FV2k0gPYEK3SzmIHKu93fynJomXEtZM5Vou0Zw8BKluwlgx6HvWs%2BIMOrg7b8GOqUBGVoq%2BdOSscvwBrVb0cCTjNgytVmebGhhwglwbupS2yB3ggU7QuCtg2GuDKK5PfJvDK2fYFWlrGJnanULEIdcDTUe2%2BltyFu80D14a0kAfC17TdiJvqXjJdmvlYwvM4zP4ihFo8YJ7yRigXFUG8XDXNOaFLyAVvmS%2B1qpf688kDUQXtL75WnB5VHEwHFWu5DNYpjjpDZb%2FRATjTVAq9QXTBUjePpg&X-Amz-Signature=db3bd677e19386d898ec47f7abc07784a7b21537eaf9421bf7682eab3d66462a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGAKTMF6%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T090801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCICcvifiAnLO5%2Bxg3s62uZz34yH6XbTPXVEqDztTb02d6AiEAlYFOiNd%2ByiMj2w7ka%2FmsVR%2BVjFHT0eyzXSDXy0CksDsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4aZhJ8OOAOi27lFSrcA2K4uNAHlrc9QFl8l3XYj9iI89qs7ATY8epKwyeMiaQDW12ppsVbQJae9qn2b9c47p0vP2JqBM8sHiDhIZgmA0x4meam5ovmxp0lehsHlDpU6AO0WPIkaI54iRluWu3Hlwv2i%2BSdMDNWJmJgd4Bly4E0TwUfzXScu%2FBAIzk2SqflxDQuCC0f4wjRXd0LzAFSGFhHkqQvBGZljw8vNw0jdXidKPJEJPuOxa4Cyc5WD9emCWTbO%2FXieHFflL5cpwUuo0Hxk0%2F6bU7pd7ii7bBUGCVXPyN4GRjYf7%2BR0zi5%2BKJCHdbf%2BLmQDbdgdGw0%2FUWNeJm%2BKazve2GcRb9NDenPTZUYKdkA9%2BZrY4k%2BxbQLnyo4fWQKLc1VAuSTuRkHd4jYKn%2Fu0g7DHIaQM3fUNcmYbn3jjtYHn4kpzel3Y6isMtPON2lvdqV6Jva73m2AtDCi5trv9dTpJ9SM0X%2F%2F1VvOP6lZVRxGflVl2KwDRYIcZd7g8WXZhtvN7aYMovdkH9coHj1sh4Nmnkruo757BZ8kj3G%2F47DfrPsRtijyRHmnTpDdLJZsKTpA5bmd9x4EHmYWDxED%2Bp%2FV2k0gPYEK3SzmIHKu93fynJomXEtZM5Vou0Zw8BKluwlgx6HvWs%2BIMOrg7b8GOqUBGVoq%2BdOSscvwBrVb0cCTjNgytVmebGhhwglwbupS2yB3ggU7QuCtg2GuDKK5PfJvDK2fYFWlrGJnanULEIdcDTUe2%2BltyFu80D14a0kAfC17TdiJvqXjJdmvlYwvM4zP4ihFo8YJ7yRigXFUG8XDXNOaFLyAVvmS%2B1qpf688kDUQXtL75WnB5VHEwHFWu5DNYpjjpDZb%2FRATjTVAq9QXTBUjePpg&X-Amz-Signature=b466e0926578df1f1211c3e7e84f69b829af81ef7b0eda95878a986eab4a6be8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
