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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCU2GL6A%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDgISagEwQuFVGyMa0ORsrXHjnFdQITTaVYsP5Zye%2BKcwIgJputE3m5ulLYAk5JNkXvBcFbhjID7M9egruQdH3Yqk8q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDJB8W3ne9AM%2BY98HSCrcAyK5mr5elduJzuh%2F6yRZ%2BBGgKp2D7nsRkTzvmBA2zsJ%2BVd7C0lYEj4y8rOcvlPLHXGPQKaj5h5qMCdWpDFdTJY7yTsbZ7dDsjsKXzt2N4Cb0pa31r7esnPosIg%2Burseo4nWDrBsmWqoxoDdbt6K2t4jYKqyjqh7Ijs85KBKjhS33DfHG%2FJPmRHDVMU9Fx4y4y5o9YsxP8exoRu44GmOPVPXTuZ8WNwdYJ2rIXlEpiB%2FyF0kHm1QdwnQa6rKUJYLux5ZlDujO2ALcdykIX5qbjpSH2EdnEiKs6c7kfglA4uT%2BiLH5WhiWx%2BTLsQL5opHa47IW38OIWjlOsysGtlvfRIVM3dbGSrDbYdKGup6GJ%2F6l7aEfbjB6Eu%2F5b5IJmCm97KaJZo2%2BIi7pkiMjWly5wecavdV7Yl1uLU9FAP6WMPSPxqEIae5WRdk5DqSKBlLwxcmZ0hF6QQQfDzX1xWt9%2Bdo54fevHEiKCcOY6DmfucV5ZiFMOrzWbW6ieOo%2BcQ1E8g4e9Z%2F4La1lW2bvIib11jsBmgQfJJV%2FjynTTMvXGuqRF1BslpbPlfREQKuOd0doLYhWpfumq8oFvQh4IYF%2FefbgDDdXaEftBvnjEDU%2BWk9N500q41rxvkx4tyjdMPuZisIGOqUBByzsDWix0CYR4C24mHucmIQFjVUW998yR6qdO6zlxWury1R5DxrH7sgb%2BMXv%2BoNwD6AHtYjEaL%2FWxgCSRiwy6E%2BiBuKzPOJLV2%2FO2l8kngNQX0a5kaflZETXNDKabB9Ouk3%2FaAO%2BhUlBgzRkEYHNtIYynB6T3bgOIZHtGcrQ2AMx9eAI686rbD4mZY%2FP60PRGlt3%2BhXjqidEbK1U7mZNLxHo%2F7NQ&X-Amz-Signature=50e74fa12655468d5df5a0944de75430d40175da7eb817807af7da863c38d993&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCU2GL6A%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDgISagEwQuFVGyMa0ORsrXHjnFdQITTaVYsP5Zye%2BKcwIgJputE3m5ulLYAk5JNkXvBcFbhjID7M9egruQdH3Yqk8q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDJB8W3ne9AM%2BY98HSCrcAyK5mr5elduJzuh%2F6yRZ%2BBGgKp2D7nsRkTzvmBA2zsJ%2BVd7C0lYEj4y8rOcvlPLHXGPQKaj5h5qMCdWpDFdTJY7yTsbZ7dDsjsKXzt2N4Cb0pa31r7esnPosIg%2Burseo4nWDrBsmWqoxoDdbt6K2t4jYKqyjqh7Ijs85KBKjhS33DfHG%2FJPmRHDVMU9Fx4y4y5o9YsxP8exoRu44GmOPVPXTuZ8WNwdYJ2rIXlEpiB%2FyF0kHm1QdwnQa6rKUJYLux5ZlDujO2ALcdykIX5qbjpSH2EdnEiKs6c7kfglA4uT%2BiLH5WhiWx%2BTLsQL5opHa47IW38OIWjlOsysGtlvfRIVM3dbGSrDbYdKGup6GJ%2F6l7aEfbjB6Eu%2F5b5IJmCm97KaJZo2%2BIi7pkiMjWly5wecavdV7Yl1uLU9FAP6WMPSPxqEIae5WRdk5DqSKBlLwxcmZ0hF6QQQfDzX1xWt9%2Bdo54fevHEiKCcOY6DmfucV5ZiFMOrzWbW6ieOo%2BcQ1E8g4e9Z%2F4La1lW2bvIib11jsBmgQfJJV%2FjynTTMvXGuqRF1BslpbPlfREQKuOd0doLYhWpfumq8oFvQh4IYF%2FefbgDDdXaEftBvnjEDU%2BWk9N500q41rxvkx4tyjdMPuZisIGOqUBByzsDWix0CYR4C24mHucmIQFjVUW998yR6qdO6zlxWury1R5DxrH7sgb%2BMXv%2BoNwD6AHtYjEaL%2FWxgCSRiwy6E%2BiBuKzPOJLV2%2FO2l8kngNQX0a5kaflZETXNDKabB9Ouk3%2FaAO%2BhUlBgzRkEYHNtIYynB6T3bgOIZHtGcrQ2AMx9eAI686rbD4mZY%2FP60PRGlt3%2BhXjqidEbK1U7mZNLxHo%2F7NQ&X-Amz-Signature=3c4323dd3a8f79a73c406e283fe92b22c5ac509fd3d641d81c0dc77dc4a0c078&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCU2GL6A%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDgISagEwQuFVGyMa0ORsrXHjnFdQITTaVYsP5Zye%2BKcwIgJputE3m5ulLYAk5JNkXvBcFbhjID7M9egruQdH3Yqk8q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDJB8W3ne9AM%2BY98HSCrcAyK5mr5elduJzuh%2F6yRZ%2BBGgKp2D7nsRkTzvmBA2zsJ%2BVd7C0lYEj4y8rOcvlPLHXGPQKaj5h5qMCdWpDFdTJY7yTsbZ7dDsjsKXzt2N4Cb0pa31r7esnPosIg%2Burseo4nWDrBsmWqoxoDdbt6K2t4jYKqyjqh7Ijs85KBKjhS33DfHG%2FJPmRHDVMU9Fx4y4y5o9YsxP8exoRu44GmOPVPXTuZ8WNwdYJ2rIXlEpiB%2FyF0kHm1QdwnQa6rKUJYLux5ZlDujO2ALcdykIX5qbjpSH2EdnEiKs6c7kfglA4uT%2BiLH5WhiWx%2BTLsQL5opHa47IW38OIWjlOsysGtlvfRIVM3dbGSrDbYdKGup6GJ%2F6l7aEfbjB6Eu%2F5b5IJmCm97KaJZo2%2BIi7pkiMjWly5wecavdV7Yl1uLU9FAP6WMPSPxqEIae5WRdk5DqSKBlLwxcmZ0hF6QQQfDzX1xWt9%2Bdo54fevHEiKCcOY6DmfucV5ZiFMOrzWbW6ieOo%2BcQ1E8g4e9Z%2F4La1lW2bvIib11jsBmgQfJJV%2FjynTTMvXGuqRF1BslpbPlfREQKuOd0doLYhWpfumq8oFvQh4IYF%2FefbgDDdXaEftBvnjEDU%2BWk9N500q41rxvkx4tyjdMPuZisIGOqUBByzsDWix0CYR4C24mHucmIQFjVUW998yR6qdO6zlxWury1R5DxrH7sgb%2BMXv%2BoNwD6AHtYjEaL%2FWxgCSRiwy6E%2BiBuKzPOJLV2%2FO2l8kngNQX0a5kaflZETXNDKabB9Ouk3%2FaAO%2BhUlBgzRkEYHNtIYynB6T3bgOIZHtGcrQ2AMx9eAI686rbD4mZY%2FP60PRGlt3%2BhXjqidEbK1U7mZNLxHo%2F7NQ&X-Amz-Signature=e47bf3ae785a50e540837ba8eb4a3a67ed980a615eed435c3cc34cd625d2e0e2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCU2GL6A%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDgISagEwQuFVGyMa0ORsrXHjnFdQITTaVYsP5Zye%2BKcwIgJputE3m5ulLYAk5JNkXvBcFbhjID7M9egruQdH3Yqk8q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDJB8W3ne9AM%2BY98HSCrcAyK5mr5elduJzuh%2F6yRZ%2BBGgKp2D7nsRkTzvmBA2zsJ%2BVd7C0lYEj4y8rOcvlPLHXGPQKaj5h5qMCdWpDFdTJY7yTsbZ7dDsjsKXzt2N4Cb0pa31r7esnPosIg%2Burseo4nWDrBsmWqoxoDdbt6K2t4jYKqyjqh7Ijs85KBKjhS33DfHG%2FJPmRHDVMU9Fx4y4y5o9YsxP8exoRu44GmOPVPXTuZ8WNwdYJ2rIXlEpiB%2FyF0kHm1QdwnQa6rKUJYLux5ZlDujO2ALcdykIX5qbjpSH2EdnEiKs6c7kfglA4uT%2BiLH5WhiWx%2BTLsQL5opHa47IW38OIWjlOsysGtlvfRIVM3dbGSrDbYdKGup6GJ%2F6l7aEfbjB6Eu%2F5b5IJmCm97KaJZo2%2BIi7pkiMjWly5wecavdV7Yl1uLU9FAP6WMPSPxqEIae5WRdk5DqSKBlLwxcmZ0hF6QQQfDzX1xWt9%2Bdo54fevHEiKCcOY6DmfucV5ZiFMOrzWbW6ieOo%2BcQ1E8g4e9Z%2F4La1lW2bvIib11jsBmgQfJJV%2FjynTTMvXGuqRF1BslpbPlfREQKuOd0doLYhWpfumq8oFvQh4IYF%2FefbgDDdXaEftBvnjEDU%2BWk9N500q41rxvkx4tyjdMPuZisIGOqUBByzsDWix0CYR4C24mHucmIQFjVUW998yR6qdO6zlxWury1R5DxrH7sgb%2BMXv%2BoNwD6AHtYjEaL%2FWxgCSRiwy6E%2BiBuKzPOJLV2%2FO2l8kngNQX0a5kaflZETXNDKabB9Ouk3%2FaAO%2BhUlBgzRkEYHNtIYynB6T3bgOIZHtGcrQ2AMx9eAI686rbD4mZY%2FP60PRGlt3%2BhXjqidEbK1U7mZNLxHo%2F7NQ&X-Amz-Signature=20f2f1caa008f255e6edbc96c29c5b2ba120915d58fafd48a83739d08637b01a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCU2GL6A%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDgISagEwQuFVGyMa0ORsrXHjnFdQITTaVYsP5Zye%2BKcwIgJputE3m5ulLYAk5JNkXvBcFbhjID7M9egruQdH3Yqk8q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDJB8W3ne9AM%2BY98HSCrcAyK5mr5elduJzuh%2F6yRZ%2BBGgKp2D7nsRkTzvmBA2zsJ%2BVd7C0lYEj4y8rOcvlPLHXGPQKaj5h5qMCdWpDFdTJY7yTsbZ7dDsjsKXzt2N4Cb0pa31r7esnPosIg%2Burseo4nWDrBsmWqoxoDdbt6K2t4jYKqyjqh7Ijs85KBKjhS33DfHG%2FJPmRHDVMU9Fx4y4y5o9YsxP8exoRu44GmOPVPXTuZ8WNwdYJ2rIXlEpiB%2FyF0kHm1QdwnQa6rKUJYLux5ZlDujO2ALcdykIX5qbjpSH2EdnEiKs6c7kfglA4uT%2BiLH5WhiWx%2BTLsQL5opHa47IW38OIWjlOsysGtlvfRIVM3dbGSrDbYdKGup6GJ%2F6l7aEfbjB6Eu%2F5b5IJmCm97KaJZo2%2BIi7pkiMjWly5wecavdV7Yl1uLU9FAP6WMPSPxqEIae5WRdk5DqSKBlLwxcmZ0hF6QQQfDzX1xWt9%2Bdo54fevHEiKCcOY6DmfucV5ZiFMOrzWbW6ieOo%2BcQ1E8g4e9Z%2F4La1lW2bvIib11jsBmgQfJJV%2FjynTTMvXGuqRF1BslpbPlfREQKuOd0doLYhWpfumq8oFvQh4IYF%2FefbgDDdXaEftBvnjEDU%2BWk9N500q41rxvkx4tyjdMPuZisIGOqUBByzsDWix0CYR4C24mHucmIQFjVUW998yR6qdO6zlxWury1R5DxrH7sgb%2BMXv%2BoNwD6AHtYjEaL%2FWxgCSRiwy6E%2BiBuKzPOJLV2%2FO2l8kngNQX0a5kaflZETXNDKabB9Ouk3%2FaAO%2BhUlBgzRkEYHNtIYynB6T3bgOIZHtGcrQ2AMx9eAI686rbD4mZY%2FP60PRGlt3%2BhXjqidEbK1U7mZNLxHo%2F7NQ&X-Amz-Signature=27f9eebcabe45d99efd5faafc9bfcc89162fb68f43248c876a0e77129a8055ef&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
