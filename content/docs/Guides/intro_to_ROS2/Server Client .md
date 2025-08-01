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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UREC5FNJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIES1pjwFoEyG6WjmoP2SiYvp5iSprbph0YwPMdzo9hAuAiEA%2BuBJimQ2dpE6qFiIMbe9TZd4UbC648B4NklZ5%2BLNZZcqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGvSLJ%2F5W1B23%2FRmyrcA9kfyiqPayhvofmNv%2BMkAOmnvnsjY8rY6yKs9jdra2cWZQFfNbYVRyRk5UWWF99v%2FxP3%2BKhah8zU8KSLzzrfFGsSYz3bYgs60ypY%2BATnDJKd9Y6OM3Wa0kjdP8%2Bh%2BVjyTiYBOsGZ781y%2BoQ7AFL9g%2F0o6AILebmFWLBrqtZAJHiJGXNoFzTlb4RnTgVPG5Q5KI5kzI2tNDDcWR9KRol85yV92cXUPyujdlUMnt34BDPPv7LKzrGyuGCEsBXT5W2RtVm2YM0H9GlofZjVIFD8vHVLT2dCQ10PDIp6BVD5JOF57E%2B65UpXWW5IEODH%2Byp%2FR2pKR1%2BOrlREepSaXChlPXv15F%2FTtPjGaUcu2kKGv97BzKzMv4JgW8LW91BuUGtbiZJPiSp9jYzTc0i8GPlruy2VWOPELjU2l2N80AbOBEzdNa11eWhY2a9KET1Ev1NpCc1gWW%2FOz3oFyx6RlfMsv7f%2B%2FjW7Jn1NCgPRfrKU7FWObC07jEERvn9hqOiIMa2lNU%2B90UOPA6HYzs6PNJnuuyTg8VXmNzVhCAXdLUiMWUfIFq94YDYevY4nrs3qFcAqFDpum2pt0kr6q%2FV2%2FFrkrbMuQTV9%2B1j%2BL36bPbxkeymgHzzhbQf8wOuXi4C7MLvttMQGOqUBXAyJm2AcigO%2FDwcmViUVTu9niJoSJcMtKOqLnKVWGjoV%2FI%2FzT3Y8%2Bp3HXrrBEjwUZptLbCxJ382vvhB%2FE4F6rITUkoMuQaEb6ICOfjJTnsfymmIupSTy8pjPptxmMyUJSJTLk85C2EuHxWgK0QxleI%2B1GiW6pjqMPX%2ByWHNvVuuhcGPfbMeVIY6sjuzChzVXDohw0VIOfdLas2XMzZep3Gzc7QOV&X-Amz-Signature=53f64d738ab0c9fc9d83b1c6e307a1d3f198c5f9c44f40ac7efc32724d5dc478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UREC5FNJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIES1pjwFoEyG6WjmoP2SiYvp5iSprbph0YwPMdzo9hAuAiEA%2BuBJimQ2dpE6qFiIMbe9TZd4UbC648B4NklZ5%2BLNZZcqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGvSLJ%2F5W1B23%2FRmyrcA9kfyiqPayhvofmNv%2BMkAOmnvnsjY8rY6yKs9jdra2cWZQFfNbYVRyRk5UWWF99v%2FxP3%2BKhah8zU8KSLzzrfFGsSYz3bYgs60ypY%2BATnDJKd9Y6OM3Wa0kjdP8%2Bh%2BVjyTiYBOsGZ781y%2BoQ7AFL9g%2F0o6AILebmFWLBrqtZAJHiJGXNoFzTlb4RnTgVPG5Q5KI5kzI2tNDDcWR9KRol85yV92cXUPyujdlUMnt34BDPPv7LKzrGyuGCEsBXT5W2RtVm2YM0H9GlofZjVIFD8vHVLT2dCQ10PDIp6BVD5JOF57E%2B65UpXWW5IEODH%2Byp%2FR2pKR1%2BOrlREepSaXChlPXv15F%2FTtPjGaUcu2kKGv97BzKzMv4JgW8LW91BuUGtbiZJPiSp9jYzTc0i8GPlruy2VWOPELjU2l2N80AbOBEzdNa11eWhY2a9KET1Ev1NpCc1gWW%2FOz3oFyx6RlfMsv7f%2B%2FjW7Jn1NCgPRfrKU7FWObC07jEERvn9hqOiIMa2lNU%2B90UOPA6HYzs6PNJnuuyTg8VXmNzVhCAXdLUiMWUfIFq94YDYevY4nrs3qFcAqFDpum2pt0kr6q%2FV2%2FFrkrbMuQTV9%2B1j%2BL36bPbxkeymgHzzhbQf8wOuXi4C7MLvttMQGOqUBXAyJm2AcigO%2FDwcmViUVTu9niJoSJcMtKOqLnKVWGjoV%2FI%2FzT3Y8%2Bp3HXrrBEjwUZptLbCxJ382vvhB%2FE4F6rITUkoMuQaEb6ICOfjJTnsfymmIupSTy8pjPptxmMyUJSJTLk85C2EuHxWgK0QxleI%2B1GiW6pjqMPX%2ByWHNvVuuhcGPfbMeVIY6sjuzChzVXDohw0VIOfdLas2XMzZep3Gzc7QOV&X-Amz-Signature=3a3c2bb19dde7e70e43d0a1227138a5fd132f586e2ee13bea9ac07d867698ad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UREC5FNJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIES1pjwFoEyG6WjmoP2SiYvp5iSprbph0YwPMdzo9hAuAiEA%2BuBJimQ2dpE6qFiIMbe9TZd4UbC648B4NklZ5%2BLNZZcqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGvSLJ%2F5W1B23%2FRmyrcA9kfyiqPayhvofmNv%2BMkAOmnvnsjY8rY6yKs9jdra2cWZQFfNbYVRyRk5UWWF99v%2FxP3%2BKhah8zU8KSLzzrfFGsSYz3bYgs60ypY%2BATnDJKd9Y6OM3Wa0kjdP8%2Bh%2BVjyTiYBOsGZ781y%2BoQ7AFL9g%2F0o6AILebmFWLBrqtZAJHiJGXNoFzTlb4RnTgVPG5Q5KI5kzI2tNDDcWR9KRol85yV92cXUPyujdlUMnt34BDPPv7LKzrGyuGCEsBXT5W2RtVm2YM0H9GlofZjVIFD8vHVLT2dCQ10PDIp6BVD5JOF57E%2B65UpXWW5IEODH%2Byp%2FR2pKR1%2BOrlREepSaXChlPXv15F%2FTtPjGaUcu2kKGv97BzKzMv4JgW8LW91BuUGtbiZJPiSp9jYzTc0i8GPlruy2VWOPELjU2l2N80AbOBEzdNa11eWhY2a9KET1Ev1NpCc1gWW%2FOz3oFyx6RlfMsv7f%2B%2FjW7Jn1NCgPRfrKU7FWObC07jEERvn9hqOiIMa2lNU%2B90UOPA6HYzs6PNJnuuyTg8VXmNzVhCAXdLUiMWUfIFq94YDYevY4nrs3qFcAqFDpum2pt0kr6q%2FV2%2FFrkrbMuQTV9%2B1j%2BL36bPbxkeymgHzzhbQf8wOuXi4C7MLvttMQGOqUBXAyJm2AcigO%2FDwcmViUVTu9niJoSJcMtKOqLnKVWGjoV%2FI%2FzT3Y8%2Bp3HXrrBEjwUZptLbCxJ382vvhB%2FE4F6rITUkoMuQaEb6ICOfjJTnsfymmIupSTy8pjPptxmMyUJSJTLk85C2EuHxWgK0QxleI%2B1GiW6pjqMPX%2ByWHNvVuuhcGPfbMeVIY6sjuzChzVXDohw0VIOfdLas2XMzZep3Gzc7QOV&X-Amz-Signature=941deeb867384a4146f5f7f056c8df8c703d10bf4d8b6e5e439d2bd777b82152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UREC5FNJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIES1pjwFoEyG6WjmoP2SiYvp5iSprbph0YwPMdzo9hAuAiEA%2BuBJimQ2dpE6qFiIMbe9TZd4UbC648B4NklZ5%2BLNZZcqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGvSLJ%2F5W1B23%2FRmyrcA9kfyiqPayhvofmNv%2BMkAOmnvnsjY8rY6yKs9jdra2cWZQFfNbYVRyRk5UWWF99v%2FxP3%2BKhah8zU8KSLzzrfFGsSYz3bYgs60ypY%2BATnDJKd9Y6OM3Wa0kjdP8%2Bh%2BVjyTiYBOsGZ781y%2BoQ7AFL9g%2F0o6AILebmFWLBrqtZAJHiJGXNoFzTlb4RnTgVPG5Q5KI5kzI2tNDDcWR9KRol85yV92cXUPyujdlUMnt34BDPPv7LKzrGyuGCEsBXT5W2RtVm2YM0H9GlofZjVIFD8vHVLT2dCQ10PDIp6BVD5JOF57E%2B65UpXWW5IEODH%2Byp%2FR2pKR1%2BOrlREepSaXChlPXv15F%2FTtPjGaUcu2kKGv97BzKzMv4JgW8LW91BuUGtbiZJPiSp9jYzTc0i8GPlruy2VWOPELjU2l2N80AbOBEzdNa11eWhY2a9KET1Ev1NpCc1gWW%2FOz3oFyx6RlfMsv7f%2B%2FjW7Jn1NCgPRfrKU7FWObC07jEERvn9hqOiIMa2lNU%2B90UOPA6HYzs6PNJnuuyTg8VXmNzVhCAXdLUiMWUfIFq94YDYevY4nrs3qFcAqFDpum2pt0kr6q%2FV2%2FFrkrbMuQTV9%2B1j%2BL36bPbxkeymgHzzhbQf8wOuXi4C7MLvttMQGOqUBXAyJm2AcigO%2FDwcmViUVTu9niJoSJcMtKOqLnKVWGjoV%2FI%2FzT3Y8%2Bp3HXrrBEjwUZptLbCxJ382vvhB%2FE4F6rITUkoMuQaEb6ICOfjJTnsfymmIupSTy8pjPptxmMyUJSJTLk85C2EuHxWgK0QxleI%2B1GiW6pjqMPX%2ByWHNvVuuhcGPfbMeVIY6sjuzChzVXDohw0VIOfdLas2XMzZep3Gzc7QOV&X-Amz-Signature=35fefa9ccda5865a41d2b5ed59d3c52450e57b16ae362481964711324e1ee97f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UREC5FNJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIES1pjwFoEyG6WjmoP2SiYvp5iSprbph0YwPMdzo9hAuAiEA%2BuBJimQ2dpE6qFiIMbe9TZd4UbC648B4NklZ5%2BLNZZcqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGvSLJ%2F5W1B23%2FRmyrcA9kfyiqPayhvofmNv%2BMkAOmnvnsjY8rY6yKs9jdra2cWZQFfNbYVRyRk5UWWF99v%2FxP3%2BKhah8zU8KSLzzrfFGsSYz3bYgs60ypY%2BATnDJKd9Y6OM3Wa0kjdP8%2Bh%2BVjyTiYBOsGZ781y%2BoQ7AFL9g%2F0o6AILebmFWLBrqtZAJHiJGXNoFzTlb4RnTgVPG5Q5KI5kzI2tNDDcWR9KRol85yV92cXUPyujdlUMnt34BDPPv7LKzrGyuGCEsBXT5W2RtVm2YM0H9GlofZjVIFD8vHVLT2dCQ10PDIp6BVD5JOF57E%2B65UpXWW5IEODH%2Byp%2FR2pKR1%2BOrlREepSaXChlPXv15F%2FTtPjGaUcu2kKGv97BzKzMv4JgW8LW91BuUGtbiZJPiSp9jYzTc0i8GPlruy2VWOPELjU2l2N80AbOBEzdNa11eWhY2a9KET1Ev1NpCc1gWW%2FOz3oFyx6RlfMsv7f%2B%2FjW7Jn1NCgPRfrKU7FWObC07jEERvn9hqOiIMa2lNU%2B90UOPA6HYzs6PNJnuuyTg8VXmNzVhCAXdLUiMWUfIFq94YDYevY4nrs3qFcAqFDpum2pt0kr6q%2FV2%2FFrkrbMuQTV9%2B1j%2BL36bPbxkeymgHzzhbQf8wOuXi4C7MLvttMQGOqUBXAyJm2AcigO%2FDwcmViUVTu9niJoSJcMtKOqLnKVWGjoV%2FI%2FzT3Y8%2Bp3HXrrBEjwUZptLbCxJ382vvhB%2FE4F6rITUkoMuQaEb6ICOfjJTnsfymmIupSTy8pjPptxmMyUJSJTLk85C2EuHxWgK0QxleI%2B1GiW6pjqMPX%2ByWHNvVuuhcGPfbMeVIY6sjuzChzVXDohw0VIOfdLas2XMzZep3Gzc7QOV&X-Amz-Signature=27df51e507e10d7e83e42649ff496e43463f3a7d6c2a8f53fa5addd84a9c7f32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
