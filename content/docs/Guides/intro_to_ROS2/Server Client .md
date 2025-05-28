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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654VM4TJT%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T033654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc%2FH5mz13U1rYhMhk40B0zZ2UWZr8VkN%2FrxW5eIFt3jAIhAN0UYUIVMS%2BJPV1HmBve1GU6%2F76FJQT92qGfVTfuucAlKv8DCGwQABoMNjM3NDIzMTgzODA1IgxlTOyjf2jsmrWEYsgq3AN1bTnFoN2IL7EKMsm5qf16CTrv4sFXve4hJgNybcjYG121c877XNh%2BOTO3Ho9HiDaBrtSnmAJw0PlRcX9JJUHRE9fAABsvvlsI2233rHhZ51to4xMx1FxPl%2BGo0LfoqIdu2xxxiuU47sL9P%2F1W90tH6aPWFNaYp1%2F84gj09PSEF3c6VNMd2vm5SfAgJxDj5ULU6GdDvZWYhHk1RiSEdSLBq9V413Djp4Oo5oXFyyqFC%2BqlAUZczlLwdsCfViTLF00j4LGDRSgSn94Aep4h0tA9FI4WRbJmZB7I0AAv07jJMad1ZACg5HEquKbnc%2BmuLeH9T484pdpYEAof1DueT5MSPtINRO46Oi42kyHal84VcO%2Bu2QuvvhwJhBsRMJLfx%2FEiwQqab5nQlI%2BZo3UhvQkeWbUF7EsKyvjROyUfcNlDra2j6qgTmsnZ2dDRel58lh22ZJq7LaD3y1ysCGeIpV0hblqP2O1bMWZ%2FBMVxAzVTeGobqn4pNcLeBTuVQC0Jjc2A7lGyr6H6O7HKUf%2Fq9HqhKo6eOv9BLvjiyOZTHIAIY3gChdkdunknoKlwJGn225GB17IZCqZj0WC%2BWw2B5S%2BZizYy4t7lqn03WH8NWk9rXc%2FsnqXWL%2FeesvetODCG69nBBjqkAWQJWkJ3fa%2BVJbJFa%2Bk%2B1mK8SdM2tK26TTptZ3bN2xLdUfSf6Mgxzn4jj4tAPUkhoGlCMjeNsfUynDf3iQVJcbuhX6VhieQus3Cq6EMYsVPrN1hqV45zlMEYDqJ2GE2DbgtMOnDMAjQS5wffsa7knZTD6gr5SKmvMUNZnOefat6TJiY0fq5RDQNxBJrpeuGVs38kOZ3lHAbYs2C4ZWuNjB%2BJMDqI&X-Amz-Signature=3569e8ee00d38a999b7c27a5c791e3f35ccc26281e1f572d59ca261a9d365340&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654VM4TJT%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T033654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc%2FH5mz13U1rYhMhk40B0zZ2UWZr8VkN%2FrxW5eIFt3jAIhAN0UYUIVMS%2BJPV1HmBve1GU6%2F76FJQT92qGfVTfuucAlKv8DCGwQABoMNjM3NDIzMTgzODA1IgxlTOyjf2jsmrWEYsgq3AN1bTnFoN2IL7EKMsm5qf16CTrv4sFXve4hJgNybcjYG121c877XNh%2BOTO3Ho9HiDaBrtSnmAJw0PlRcX9JJUHRE9fAABsvvlsI2233rHhZ51to4xMx1FxPl%2BGo0LfoqIdu2xxxiuU47sL9P%2F1W90tH6aPWFNaYp1%2F84gj09PSEF3c6VNMd2vm5SfAgJxDj5ULU6GdDvZWYhHk1RiSEdSLBq9V413Djp4Oo5oXFyyqFC%2BqlAUZczlLwdsCfViTLF00j4LGDRSgSn94Aep4h0tA9FI4WRbJmZB7I0AAv07jJMad1ZACg5HEquKbnc%2BmuLeH9T484pdpYEAof1DueT5MSPtINRO46Oi42kyHal84VcO%2Bu2QuvvhwJhBsRMJLfx%2FEiwQqab5nQlI%2BZo3UhvQkeWbUF7EsKyvjROyUfcNlDra2j6qgTmsnZ2dDRel58lh22ZJq7LaD3y1ysCGeIpV0hblqP2O1bMWZ%2FBMVxAzVTeGobqn4pNcLeBTuVQC0Jjc2A7lGyr6H6O7HKUf%2Fq9HqhKo6eOv9BLvjiyOZTHIAIY3gChdkdunknoKlwJGn225GB17IZCqZj0WC%2BWw2B5S%2BZizYy4t7lqn03WH8NWk9rXc%2FsnqXWL%2FeesvetODCG69nBBjqkAWQJWkJ3fa%2BVJbJFa%2Bk%2B1mK8SdM2tK26TTptZ3bN2xLdUfSf6Mgxzn4jj4tAPUkhoGlCMjeNsfUynDf3iQVJcbuhX6VhieQus3Cq6EMYsVPrN1hqV45zlMEYDqJ2GE2DbgtMOnDMAjQS5wffsa7knZTD6gr5SKmvMUNZnOefat6TJiY0fq5RDQNxBJrpeuGVs38kOZ3lHAbYs2C4ZWuNjB%2BJMDqI&X-Amz-Signature=0405ae050e6713fc2992045983372774547b7bd96d1571bf2e3928431e4cdd02&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654VM4TJT%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T033654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc%2FH5mz13U1rYhMhk40B0zZ2UWZr8VkN%2FrxW5eIFt3jAIhAN0UYUIVMS%2BJPV1HmBve1GU6%2F76FJQT92qGfVTfuucAlKv8DCGwQABoMNjM3NDIzMTgzODA1IgxlTOyjf2jsmrWEYsgq3AN1bTnFoN2IL7EKMsm5qf16CTrv4sFXve4hJgNybcjYG121c877XNh%2BOTO3Ho9HiDaBrtSnmAJw0PlRcX9JJUHRE9fAABsvvlsI2233rHhZ51to4xMx1FxPl%2BGo0LfoqIdu2xxxiuU47sL9P%2F1W90tH6aPWFNaYp1%2F84gj09PSEF3c6VNMd2vm5SfAgJxDj5ULU6GdDvZWYhHk1RiSEdSLBq9V413Djp4Oo5oXFyyqFC%2BqlAUZczlLwdsCfViTLF00j4LGDRSgSn94Aep4h0tA9FI4WRbJmZB7I0AAv07jJMad1ZACg5HEquKbnc%2BmuLeH9T484pdpYEAof1DueT5MSPtINRO46Oi42kyHal84VcO%2Bu2QuvvhwJhBsRMJLfx%2FEiwQqab5nQlI%2BZo3UhvQkeWbUF7EsKyvjROyUfcNlDra2j6qgTmsnZ2dDRel58lh22ZJq7LaD3y1ysCGeIpV0hblqP2O1bMWZ%2FBMVxAzVTeGobqn4pNcLeBTuVQC0Jjc2A7lGyr6H6O7HKUf%2Fq9HqhKo6eOv9BLvjiyOZTHIAIY3gChdkdunknoKlwJGn225GB17IZCqZj0WC%2BWw2B5S%2BZizYy4t7lqn03WH8NWk9rXc%2FsnqXWL%2FeesvetODCG69nBBjqkAWQJWkJ3fa%2BVJbJFa%2Bk%2B1mK8SdM2tK26TTptZ3bN2xLdUfSf6Mgxzn4jj4tAPUkhoGlCMjeNsfUynDf3iQVJcbuhX6VhieQus3Cq6EMYsVPrN1hqV45zlMEYDqJ2GE2DbgtMOnDMAjQS5wffsa7knZTD6gr5SKmvMUNZnOefat6TJiY0fq5RDQNxBJrpeuGVs38kOZ3lHAbYs2C4ZWuNjB%2BJMDqI&X-Amz-Signature=9bc2a0c3568a66bec11185d8956126ee0ba467878f0f15944d2f53199684636f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654VM4TJT%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T033654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc%2FH5mz13U1rYhMhk40B0zZ2UWZr8VkN%2FrxW5eIFt3jAIhAN0UYUIVMS%2BJPV1HmBve1GU6%2F76FJQT92qGfVTfuucAlKv8DCGwQABoMNjM3NDIzMTgzODA1IgxlTOyjf2jsmrWEYsgq3AN1bTnFoN2IL7EKMsm5qf16CTrv4sFXve4hJgNybcjYG121c877XNh%2BOTO3Ho9HiDaBrtSnmAJw0PlRcX9JJUHRE9fAABsvvlsI2233rHhZ51to4xMx1FxPl%2BGo0LfoqIdu2xxxiuU47sL9P%2F1W90tH6aPWFNaYp1%2F84gj09PSEF3c6VNMd2vm5SfAgJxDj5ULU6GdDvZWYhHk1RiSEdSLBq9V413Djp4Oo5oXFyyqFC%2BqlAUZczlLwdsCfViTLF00j4LGDRSgSn94Aep4h0tA9FI4WRbJmZB7I0AAv07jJMad1ZACg5HEquKbnc%2BmuLeH9T484pdpYEAof1DueT5MSPtINRO46Oi42kyHal84VcO%2Bu2QuvvhwJhBsRMJLfx%2FEiwQqab5nQlI%2BZo3UhvQkeWbUF7EsKyvjROyUfcNlDra2j6qgTmsnZ2dDRel58lh22ZJq7LaD3y1ysCGeIpV0hblqP2O1bMWZ%2FBMVxAzVTeGobqn4pNcLeBTuVQC0Jjc2A7lGyr6H6O7HKUf%2Fq9HqhKo6eOv9BLvjiyOZTHIAIY3gChdkdunknoKlwJGn225GB17IZCqZj0WC%2BWw2B5S%2BZizYy4t7lqn03WH8NWk9rXc%2FsnqXWL%2FeesvetODCG69nBBjqkAWQJWkJ3fa%2BVJbJFa%2Bk%2B1mK8SdM2tK26TTptZ3bN2xLdUfSf6Mgxzn4jj4tAPUkhoGlCMjeNsfUynDf3iQVJcbuhX6VhieQus3Cq6EMYsVPrN1hqV45zlMEYDqJ2GE2DbgtMOnDMAjQS5wffsa7knZTD6gr5SKmvMUNZnOefat6TJiY0fq5RDQNxBJrpeuGVs38kOZ3lHAbYs2C4ZWuNjB%2BJMDqI&X-Amz-Signature=b44b9be55b005aef82acad035ec70774a48130a21b399e1c23a556f4d683ba01&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654VM4TJT%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T033654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc%2FH5mz13U1rYhMhk40B0zZ2UWZr8VkN%2FrxW5eIFt3jAIhAN0UYUIVMS%2BJPV1HmBve1GU6%2F76FJQT92qGfVTfuucAlKv8DCGwQABoMNjM3NDIzMTgzODA1IgxlTOyjf2jsmrWEYsgq3AN1bTnFoN2IL7EKMsm5qf16CTrv4sFXve4hJgNybcjYG121c877XNh%2BOTO3Ho9HiDaBrtSnmAJw0PlRcX9JJUHRE9fAABsvvlsI2233rHhZ51to4xMx1FxPl%2BGo0LfoqIdu2xxxiuU47sL9P%2F1W90tH6aPWFNaYp1%2F84gj09PSEF3c6VNMd2vm5SfAgJxDj5ULU6GdDvZWYhHk1RiSEdSLBq9V413Djp4Oo5oXFyyqFC%2BqlAUZczlLwdsCfViTLF00j4LGDRSgSn94Aep4h0tA9FI4WRbJmZB7I0AAv07jJMad1ZACg5HEquKbnc%2BmuLeH9T484pdpYEAof1DueT5MSPtINRO46Oi42kyHal84VcO%2Bu2QuvvhwJhBsRMJLfx%2FEiwQqab5nQlI%2BZo3UhvQkeWbUF7EsKyvjROyUfcNlDra2j6qgTmsnZ2dDRel58lh22ZJq7LaD3y1ysCGeIpV0hblqP2O1bMWZ%2FBMVxAzVTeGobqn4pNcLeBTuVQC0Jjc2A7lGyr6H6O7HKUf%2Fq9HqhKo6eOv9BLvjiyOZTHIAIY3gChdkdunknoKlwJGn225GB17IZCqZj0WC%2BWw2B5S%2BZizYy4t7lqn03WH8NWk9rXc%2FsnqXWL%2FeesvetODCG69nBBjqkAWQJWkJ3fa%2BVJbJFa%2Bk%2B1mK8SdM2tK26TTptZ3bN2xLdUfSf6Mgxzn4jj4tAPUkhoGlCMjeNsfUynDf3iQVJcbuhX6VhieQus3Cq6EMYsVPrN1hqV45zlMEYDqJ2GE2DbgtMOnDMAjQS5wffsa7knZTD6gr5SKmvMUNZnOefat6TJiY0fq5RDQNxBJrpeuGVs38kOZ3lHAbYs2C4ZWuNjB%2BJMDqI&X-Amz-Signature=7dd372ae45da7f0bed2e07707c26ab2053f598f824ae88cc942be38420e3ab3f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
