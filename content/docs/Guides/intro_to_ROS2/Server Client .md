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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PC42EUD%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbK0ymMV3q6PntG3TZbPqCa6%2FXkWl5i9s%2Fyiou0HascQIhAP2O9EvkR2NjJBoWVwL723e56bUqOvl%2F6zh28x4ngK1lKv8DCDAQABoMNjM3NDIzMTgzODA1Igw9yZqMVlGuxY32IvEq3ANUKXwgqyW6lBarlt5v%2FL3W0ySt8G0YQf%2F88M6KGJ0ofTCllzBh4Et7%2FrgZcqFLOVrbcGQDptSef3KLgPx04LOqGAawXArPgfOE8FLM8HjNhoRD8S4aVskAYdxmlcX09PCqFBH5hFrqsnQnA3PG%2BpwGPFPVlciXlb3MOieDgsq%2FY2LEDy4GyPQTB%2BQEhG9ZLO4zLdqZ7VktfSsrZ2Zgp6beSFkwE094BuguNzehGOhanfDH6Y%2BWFG3%2B%2Fo3DBc87n67Ewssww32302fPIgussf6lNAK9I%2BxBKHkJKP7BR3PMV68f0XO%2FYWIcbKgdJlKvgiSVDlmBl2hnRxhu7UG8nQvKm3FQAcC23%2F3b61YLg0x25iratKq008Vai0sfthY%2BZefOqEFuCnvxx%2F0iG62p8uKW4Y03%2B388kQtwHxG42%2B9jFIEhutVYImsGWPFvdjvThghhiVdlhXYERrFNM6lMpbhR1409ZYC3ICY9oF5R56ePYh9V0t4X8%2B8jYsYc8kB5%2B%2BTIhJQ%2BULPLo2UNfaIcc6wBOQFpSx71IWEfEbVocJi%2BR7ks%2B9e4MF27rGl9Etibmoz7wWQR3QBIWC2cYDZDc7XKvg5xgznTOfx9e9DZJ10kDeJNwsVQ292fXWz2OzC%2Bza7ABjqkAe60sDn0J%2FZHFO6Jx5WpxNeLk7dbRqzLiBMcXWR7vPxSM3FeLZqwzfRfCYpHbJzfk3lWHG07imXSYWBkgu2qwXBJw9Y2f0Cl%2BlUKRrNWBIsI1xFQtLoM5MOjNZI%2FT9bXhq0svkbPM90xG8eEiO2hGWJwMkMA%2B1IsWu1TaRO3ftSUCWAdPuj1sRA75Su4dql1UqPZw8mUXYGAd1nPjglht59Oakdo&X-Amz-Signature=e90b1ea800187c79875d1f406ab97b8cf853da0ab17b7ab4c3b587b68e0a70ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PC42EUD%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbK0ymMV3q6PntG3TZbPqCa6%2FXkWl5i9s%2Fyiou0HascQIhAP2O9EvkR2NjJBoWVwL723e56bUqOvl%2F6zh28x4ngK1lKv8DCDAQABoMNjM3NDIzMTgzODA1Igw9yZqMVlGuxY32IvEq3ANUKXwgqyW6lBarlt5v%2FL3W0ySt8G0YQf%2F88M6KGJ0ofTCllzBh4Et7%2FrgZcqFLOVrbcGQDptSef3KLgPx04LOqGAawXArPgfOE8FLM8HjNhoRD8S4aVskAYdxmlcX09PCqFBH5hFrqsnQnA3PG%2BpwGPFPVlciXlb3MOieDgsq%2FY2LEDy4GyPQTB%2BQEhG9ZLO4zLdqZ7VktfSsrZ2Zgp6beSFkwE094BuguNzehGOhanfDH6Y%2BWFG3%2B%2Fo3DBc87n67Ewssww32302fPIgussf6lNAK9I%2BxBKHkJKP7BR3PMV68f0XO%2FYWIcbKgdJlKvgiSVDlmBl2hnRxhu7UG8nQvKm3FQAcC23%2F3b61YLg0x25iratKq008Vai0sfthY%2BZefOqEFuCnvxx%2F0iG62p8uKW4Y03%2B388kQtwHxG42%2B9jFIEhutVYImsGWPFvdjvThghhiVdlhXYERrFNM6lMpbhR1409ZYC3ICY9oF5R56ePYh9V0t4X8%2B8jYsYc8kB5%2B%2BTIhJQ%2BULPLo2UNfaIcc6wBOQFpSx71IWEfEbVocJi%2BR7ks%2B9e4MF27rGl9Etibmoz7wWQR3QBIWC2cYDZDc7XKvg5xgznTOfx9e9DZJ10kDeJNwsVQ292fXWz2OzC%2Bza7ABjqkAe60sDn0J%2FZHFO6Jx5WpxNeLk7dbRqzLiBMcXWR7vPxSM3FeLZqwzfRfCYpHbJzfk3lWHG07imXSYWBkgu2qwXBJw9Y2f0Cl%2BlUKRrNWBIsI1xFQtLoM5MOjNZI%2FT9bXhq0svkbPM90xG8eEiO2hGWJwMkMA%2B1IsWu1TaRO3ftSUCWAdPuj1sRA75Su4dql1UqPZw8mUXYGAd1nPjglht59Oakdo&X-Amz-Signature=66b172708739c4d56fca9d7c71b41525984a297b7990f2fa277e8698d0f819b7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PC42EUD%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbK0ymMV3q6PntG3TZbPqCa6%2FXkWl5i9s%2Fyiou0HascQIhAP2O9EvkR2NjJBoWVwL723e56bUqOvl%2F6zh28x4ngK1lKv8DCDAQABoMNjM3NDIzMTgzODA1Igw9yZqMVlGuxY32IvEq3ANUKXwgqyW6lBarlt5v%2FL3W0ySt8G0YQf%2F88M6KGJ0ofTCllzBh4Et7%2FrgZcqFLOVrbcGQDptSef3KLgPx04LOqGAawXArPgfOE8FLM8HjNhoRD8S4aVskAYdxmlcX09PCqFBH5hFrqsnQnA3PG%2BpwGPFPVlciXlb3MOieDgsq%2FY2LEDy4GyPQTB%2BQEhG9ZLO4zLdqZ7VktfSsrZ2Zgp6beSFkwE094BuguNzehGOhanfDH6Y%2BWFG3%2B%2Fo3DBc87n67Ewssww32302fPIgussf6lNAK9I%2BxBKHkJKP7BR3PMV68f0XO%2FYWIcbKgdJlKvgiSVDlmBl2hnRxhu7UG8nQvKm3FQAcC23%2F3b61YLg0x25iratKq008Vai0sfthY%2BZefOqEFuCnvxx%2F0iG62p8uKW4Y03%2B388kQtwHxG42%2B9jFIEhutVYImsGWPFvdjvThghhiVdlhXYERrFNM6lMpbhR1409ZYC3ICY9oF5R56ePYh9V0t4X8%2B8jYsYc8kB5%2B%2BTIhJQ%2BULPLo2UNfaIcc6wBOQFpSx71IWEfEbVocJi%2BR7ks%2B9e4MF27rGl9Etibmoz7wWQR3QBIWC2cYDZDc7XKvg5xgznTOfx9e9DZJ10kDeJNwsVQ292fXWz2OzC%2Bza7ABjqkAe60sDn0J%2FZHFO6Jx5WpxNeLk7dbRqzLiBMcXWR7vPxSM3FeLZqwzfRfCYpHbJzfk3lWHG07imXSYWBkgu2qwXBJw9Y2f0Cl%2BlUKRrNWBIsI1xFQtLoM5MOjNZI%2FT9bXhq0svkbPM90xG8eEiO2hGWJwMkMA%2B1IsWu1TaRO3ftSUCWAdPuj1sRA75Su4dql1UqPZw8mUXYGAd1nPjglht59Oakdo&X-Amz-Signature=a383d40bebf36a121d6d5c3c4591f7827992e6b370b2a11d71ec2ec285102c53&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PC42EUD%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbK0ymMV3q6PntG3TZbPqCa6%2FXkWl5i9s%2Fyiou0HascQIhAP2O9EvkR2NjJBoWVwL723e56bUqOvl%2F6zh28x4ngK1lKv8DCDAQABoMNjM3NDIzMTgzODA1Igw9yZqMVlGuxY32IvEq3ANUKXwgqyW6lBarlt5v%2FL3W0ySt8G0YQf%2F88M6KGJ0ofTCllzBh4Et7%2FrgZcqFLOVrbcGQDptSef3KLgPx04LOqGAawXArPgfOE8FLM8HjNhoRD8S4aVskAYdxmlcX09PCqFBH5hFrqsnQnA3PG%2BpwGPFPVlciXlb3MOieDgsq%2FY2LEDy4GyPQTB%2BQEhG9ZLO4zLdqZ7VktfSsrZ2Zgp6beSFkwE094BuguNzehGOhanfDH6Y%2BWFG3%2B%2Fo3DBc87n67Ewssww32302fPIgussf6lNAK9I%2BxBKHkJKP7BR3PMV68f0XO%2FYWIcbKgdJlKvgiSVDlmBl2hnRxhu7UG8nQvKm3FQAcC23%2F3b61YLg0x25iratKq008Vai0sfthY%2BZefOqEFuCnvxx%2F0iG62p8uKW4Y03%2B388kQtwHxG42%2B9jFIEhutVYImsGWPFvdjvThghhiVdlhXYERrFNM6lMpbhR1409ZYC3ICY9oF5R56ePYh9V0t4X8%2B8jYsYc8kB5%2B%2BTIhJQ%2BULPLo2UNfaIcc6wBOQFpSx71IWEfEbVocJi%2BR7ks%2B9e4MF27rGl9Etibmoz7wWQR3QBIWC2cYDZDc7XKvg5xgznTOfx9e9DZJ10kDeJNwsVQ292fXWz2OzC%2Bza7ABjqkAe60sDn0J%2FZHFO6Jx5WpxNeLk7dbRqzLiBMcXWR7vPxSM3FeLZqwzfRfCYpHbJzfk3lWHG07imXSYWBkgu2qwXBJw9Y2f0Cl%2BlUKRrNWBIsI1xFQtLoM5MOjNZI%2FT9bXhq0svkbPM90xG8eEiO2hGWJwMkMA%2B1IsWu1TaRO3ftSUCWAdPuj1sRA75Su4dql1UqPZw8mUXYGAd1nPjglht59Oakdo&X-Amz-Signature=9b5c148eb5b22d17310fa0c16ee05503abadb9cab8401927e7473e9f8977a8d8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PC42EUD%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbK0ymMV3q6PntG3TZbPqCa6%2FXkWl5i9s%2Fyiou0HascQIhAP2O9EvkR2NjJBoWVwL723e56bUqOvl%2F6zh28x4ngK1lKv8DCDAQABoMNjM3NDIzMTgzODA1Igw9yZqMVlGuxY32IvEq3ANUKXwgqyW6lBarlt5v%2FL3W0ySt8G0YQf%2F88M6KGJ0ofTCllzBh4Et7%2FrgZcqFLOVrbcGQDptSef3KLgPx04LOqGAawXArPgfOE8FLM8HjNhoRD8S4aVskAYdxmlcX09PCqFBH5hFrqsnQnA3PG%2BpwGPFPVlciXlb3MOieDgsq%2FY2LEDy4GyPQTB%2BQEhG9ZLO4zLdqZ7VktfSsrZ2Zgp6beSFkwE094BuguNzehGOhanfDH6Y%2BWFG3%2B%2Fo3DBc87n67Ewssww32302fPIgussf6lNAK9I%2BxBKHkJKP7BR3PMV68f0XO%2FYWIcbKgdJlKvgiSVDlmBl2hnRxhu7UG8nQvKm3FQAcC23%2F3b61YLg0x25iratKq008Vai0sfthY%2BZefOqEFuCnvxx%2F0iG62p8uKW4Y03%2B388kQtwHxG42%2B9jFIEhutVYImsGWPFvdjvThghhiVdlhXYERrFNM6lMpbhR1409ZYC3ICY9oF5R56ePYh9V0t4X8%2B8jYsYc8kB5%2B%2BTIhJQ%2BULPLo2UNfaIcc6wBOQFpSx71IWEfEbVocJi%2BR7ks%2B9e4MF27rGl9Etibmoz7wWQR3QBIWC2cYDZDc7XKvg5xgznTOfx9e9DZJ10kDeJNwsVQ292fXWz2OzC%2Bza7ABjqkAe60sDn0J%2FZHFO6Jx5WpxNeLk7dbRqzLiBMcXWR7vPxSM3FeLZqwzfRfCYpHbJzfk3lWHG07imXSYWBkgu2qwXBJw9Y2f0Cl%2BlUKRrNWBIsI1xFQtLoM5MOjNZI%2FT9bXhq0svkbPM90xG8eEiO2hGWJwMkMA%2B1IsWu1TaRO3ftSUCWAdPuj1sRA75Su4dql1UqPZw8mUXYGAd1nPjglht59Oakdo&X-Amz-Signature=75595a39bbfd8419e14dced6b52b186090773dcd489b5b84bd8b9d37cc2f319c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
