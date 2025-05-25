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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JYW4J5O%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICIYztfh90dXX8BaIrEgBCcz2teOAQOGzSCw2K1bMzuDAiBj4hQPuog6yq9fEmq%2FT%2F9FmBh5%2B%2FnsrlVWWcpOeQQbRyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMV7%2FjOCSBamXkYJu%2BKtwDwdwV3YZ2L7y36Y9JlwmFypMnZGeTCt%2BI2zCKfL%2F68aZslAW3yClJtUbmFlqCdO3DVcfekNa%2F397snNg6b7V61jyVIplZ8oB1EWDkXgbJmIMQ1hpAZSy2ADGV3d%2B1w07z1bOsJJj5XNAiKZ8%2FckNJMzYkby%2BRwdCStaHWHY8P057z94BXEQFMhAUeaATYQ9hnN%2BHpjG3OB1cOF%2BrtRk%2B7S82v5UirAsf%2FrArjAcNLgmbN8HF73H7dj65iD2I0x%2BSpwOV6Rkan9yhHUdnr6amBsmOQ6jAD1QnNa1wpulAmw79E3PwFmngqmvtnc2LrKyIh0s%2F%2B%2Fcm6iPaT5W%2FHUMpqTvjH3dthZ6vjP%2B4ATclhmY7Huy4IibSIBtmag0VD%2Fnjn%2FNKoDBYv4hgdJl0G9NDKUFB61VW7D1Hih5fpnDvfp2iG3Dw1mmWuM%2B1VNS%2FqB12fw0WhQMKICxtMiwipCsIGSe0BAkCU%2B8zByUfxS6Xw7o7HYvLj8B9p7TW3rlsXE%2FOZf3R9c9%2FUyMZ7Ss3%2Bac%2BogoRZ3H5CEXSS282HVCJO5Yb9N8AuSzAWbinfBwUlkhcwqR76lJxEhSdC4J7RzSOwiQvpJ48D6HJuQd0lWIgKl6FfzLkhQwA6im10Ly4whtbLwQY6pgE5%2Fg2bE01be%2FyyXcpU%2FdSLmLcF1EVg0ZfU8TnzIqqyeuoG4nszLUn437xsShpGQZtftE5aWVXtvUoIRfWHwGfKsdO3FLKAZachuWm9D3Koo%2F%2B6SbD9fy4GK1LbPXzIo1ZYyzc3krBIpj4CvnlHxeGKS1czjFVKaKrHnxNX44pECLoobYDYp7aMCX8RfNHF86j4Air%2BcebCxnvu6pjjZapNlXTPqqPH&X-Amz-Signature=a1bb3311d2faf8b1e7f324742b5c234c8c1ecd6abffb2f98a7fbee9f266ae0cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JYW4J5O%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICIYztfh90dXX8BaIrEgBCcz2teOAQOGzSCw2K1bMzuDAiBj4hQPuog6yq9fEmq%2FT%2F9FmBh5%2B%2FnsrlVWWcpOeQQbRyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMV7%2FjOCSBamXkYJu%2BKtwDwdwV3YZ2L7y36Y9JlwmFypMnZGeTCt%2BI2zCKfL%2F68aZslAW3yClJtUbmFlqCdO3DVcfekNa%2F397snNg6b7V61jyVIplZ8oB1EWDkXgbJmIMQ1hpAZSy2ADGV3d%2B1w07z1bOsJJj5XNAiKZ8%2FckNJMzYkby%2BRwdCStaHWHY8P057z94BXEQFMhAUeaATYQ9hnN%2BHpjG3OB1cOF%2BrtRk%2B7S82v5UirAsf%2FrArjAcNLgmbN8HF73H7dj65iD2I0x%2BSpwOV6Rkan9yhHUdnr6amBsmOQ6jAD1QnNa1wpulAmw79E3PwFmngqmvtnc2LrKyIh0s%2F%2B%2Fcm6iPaT5W%2FHUMpqTvjH3dthZ6vjP%2B4ATclhmY7Huy4IibSIBtmag0VD%2Fnjn%2FNKoDBYv4hgdJl0G9NDKUFB61VW7D1Hih5fpnDvfp2iG3Dw1mmWuM%2B1VNS%2FqB12fw0WhQMKICxtMiwipCsIGSe0BAkCU%2B8zByUfxS6Xw7o7HYvLj8B9p7TW3rlsXE%2FOZf3R9c9%2FUyMZ7Ss3%2Bac%2BogoRZ3H5CEXSS282HVCJO5Yb9N8AuSzAWbinfBwUlkhcwqR76lJxEhSdC4J7RzSOwiQvpJ48D6HJuQd0lWIgKl6FfzLkhQwA6im10Ly4whtbLwQY6pgE5%2Fg2bE01be%2FyyXcpU%2FdSLmLcF1EVg0ZfU8TnzIqqyeuoG4nszLUn437xsShpGQZtftE5aWVXtvUoIRfWHwGfKsdO3FLKAZachuWm9D3Koo%2F%2B6SbD9fy4GK1LbPXzIo1ZYyzc3krBIpj4CvnlHxeGKS1czjFVKaKrHnxNX44pECLoobYDYp7aMCX8RfNHF86j4Air%2BcebCxnvu6pjjZapNlXTPqqPH&X-Amz-Signature=8760053613ffd0516600164d0bf0a6931cecf3a9079e2c7d8c0696ec220d40d2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JYW4J5O%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICIYztfh90dXX8BaIrEgBCcz2teOAQOGzSCw2K1bMzuDAiBj4hQPuog6yq9fEmq%2FT%2F9FmBh5%2B%2FnsrlVWWcpOeQQbRyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMV7%2FjOCSBamXkYJu%2BKtwDwdwV3YZ2L7y36Y9JlwmFypMnZGeTCt%2BI2zCKfL%2F68aZslAW3yClJtUbmFlqCdO3DVcfekNa%2F397snNg6b7V61jyVIplZ8oB1EWDkXgbJmIMQ1hpAZSy2ADGV3d%2B1w07z1bOsJJj5XNAiKZ8%2FckNJMzYkby%2BRwdCStaHWHY8P057z94BXEQFMhAUeaATYQ9hnN%2BHpjG3OB1cOF%2BrtRk%2B7S82v5UirAsf%2FrArjAcNLgmbN8HF73H7dj65iD2I0x%2BSpwOV6Rkan9yhHUdnr6amBsmOQ6jAD1QnNa1wpulAmw79E3PwFmngqmvtnc2LrKyIh0s%2F%2B%2Fcm6iPaT5W%2FHUMpqTvjH3dthZ6vjP%2B4ATclhmY7Huy4IibSIBtmag0VD%2Fnjn%2FNKoDBYv4hgdJl0G9NDKUFB61VW7D1Hih5fpnDvfp2iG3Dw1mmWuM%2B1VNS%2FqB12fw0WhQMKICxtMiwipCsIGSe0BAkCU%2B8zByUfxS6Xw7o7HYvLj8B9p7TW3rlsXE%2FOZf3R9c9%2FUyMZ7Ss3%2Bac%2BogoRZ3H5CEXSS282HVCJO5Yb9N8AuSzAWbinfBwUlkhcwqR76lJxEhSdC4J7RzSOwiQvpJ48D6HJuQd0lWIgKl6FfzLkhQwA6im10Ly4whtbLwQY6pgE5%2Fg2bE01be%2FyyXcpU%2FdSLmLcF1EVg0ZfU8TnzIqqyeuoG4nszLUn437xsShpGQZtftE5aWVXtvUoIRfWHwGfKsdO3FLKAZachuWm9D3Koo%2F%2B6SbD9fy4GK1LbPXzIo1ZYyzc3krBIpj4CvnlHxeGKS1czjFVKaKrHnxNX44pECLoobYDYp7aMCX8RfNHF86j4Air%2BcebCxnvu6pjjZapNlXTPqqPH&X-Amz-Signature=65a8d55db0742f28753cb03be56d25f9c1f6c72bf20d9c60169ef5c68e08cc71&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JYW4J5O%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICIYztfh90dXX8BaIrEgBCcz2teOAQOGzSCw2K1bMzuDAiBj4hQPuog6yq9fEmq%2FT%2F9FmBh5%2B%2FnsrlVWWcpOeQQbRyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMV7%2FjOCSBamXkYJu%2BKtwDwdwV3YZ2L7y36Y9JlwmFypMnZGeTCt%2BI2zCKfL%2F68aZslAW3yClJtUbmFlqCdO3DVcfekNa%2F397snNg6b7V61jyVIplZ8oB1EWDkXgbJmIMQ1hpAZSy2ADGV3d%2B1w07z1bOsJJj5XNAiKZ8%2FckNJMzYkby%2BRwdCStaHWHY8P057z94BXEQFMhAUeaATYQ9hnN%2BHpjG3OB1cOF%2BrtRk%2B7S82v5UirAsf%2FrArjAcNLgmbN8HF73H7dj65iD2I0x%2BSpwOV6Rkan9yhHUdnr6amBsmOQ6jAD1QnNa1wpulAmw79E3PwFmngqmvtnc2LrKyIh0s%2F%2B%2Fcm6iPaT5W%2FHUMpqTvjH3dthZ6vjP%2B4ATclhmY7Huy4IibSIBtmag0VD%2Fnjn%2FNKoDBYv4hgdJl0G9NDKUFB61VW7D1Hih5fpnDvfp2iG3Dw1mmWuM%2B1VNS%2FqB12fw0WhQMKICxtMiwipCsIGSe0BAkCU%2B8zByUfxS6Xw7o7HYvLj8B9p7TW3rlsXE%2FOZf3R9c9%2FUyMZ7Ss3%2Bac%2BogoRZ3H5CEXSS282HVCJO5Yb9N8AuSzAWbinfBwUlkhcwqR76lJxEhSdC4J7RzSOwiQvpJ48D6HJuQd0lWIgKl6FfzLkhQwA6im10Ly4whtbLwQY6pgE5%2Fg2bE01be%2FyyXcpU%2FdSLmLcF1EVg0ZfU8TnzIqqyeuoG4nszLUn437xsShpGQZtftE5aWVXtvUoIRfWHwGfKsdO3FLKAZachuWm9D3Koo%2F%2B6SbD9fy4GK1LbPXzIo1ZYyzc3krBIpj4CvnlHxeGKS1czjFVKaKrHnxNX44pECLoobYDYp7aMCX8RfNHF86j4Air%2BcebCxnvu6pjjZapNlXTPqqPH&X-Amz-Signature=ba0a1418d9562ec150795b98a9a612d4e4bf7fb64a5dbdaf6160f7c2bb5d4110&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JYW4J5O%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICIYztfh90dXX8BaIrEgBCcz2teOAQOGzSCw2K1bMzuDAiBj4hQPuog6yq9fEmq%2FT%2F9FmBh5%2B%2FnsrlVWWcpOeQQbRyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMV7%2FjOCSBamXkYJu%2BKtwDwdwV3YZ2L7y36Y9JlwmFypMnZGeTCt%2BI2zCKfL%2F68aZslAW3yClJtUbmFlqCdO3DVcfekNa%2F397snNg6b7V61jyVIplZ8oB1EWDkXgbJmIMQ1hpAZSy2ADGV3d%2B1w07z1bOsJJj5XNAiKZ8%2FckNJMzYkby%2BRwdCStaHWHY8P057z94BXEQFMhAUeaATYQ9hnN%2BHpjG3OB1cOF%2BrtRk%2B7S82v5UirAsf%2FrArjAcNLgmbN8HF73H7dj65iD2I0x%2BSpwOV6Rkan9yhHUdnr6amBsmOQ6jAD1QnNa1wpulAmw79E3PwFmngqmvtnc2LrKyIh0s%2F%2B%2Fcm6iPaT5W%2FHUMpqTvjH3dthZ6vjP%2B4ATclhmY7Huy4IibSIBtmag0VD%2Fnjn%2FNKoDBYv4hgdJl0G9NDKUFB61VW7D1Hih5fpnDvfp2iG3Dw1mmWuM%2B1VNS%2FqB12fw0WhQMKICxtMiwipCsIGSe0BAkCU%2B8zByUfxS6Xw7o7HYvLj8B9p7TW3rlsXE%2FOZf3R9c9%2FUyMZ7Ss3%2Bac%2BogoRZ3H5CEXSS282HVCJO5Yb9N8AuSzAWbinfBwUlkhcwqR76lJxEhSdC4J7RzSOwiQvpJ48D6HJuQd0lWIgKl6FfzLkhQwA6im10Ly4whtbLwQY6pgE5%2Fg2bE01be%2FyyXcpU%2FdSLmLcF1EVg0ZfU8TnzIqqyeuoG4nszLUn437xsShpGQZtftE5aWVXtvUoIRfWHwGfKsdO3FLKAZachuWm9D3Koo%2F%2B6SbD9fy4GK1LbPXzIo1ZYyzc3krBIpj4CvnlHxeGKS1czjFVKaKrHnxNX44pECLoobYDYp7aMCX8RfNHF86j4Air%2BcebCxnvu6pjjZapNlXTPqqPH&X-Amz-Signature=98a7882257c7919b75a31dc486cab02552206556f1748921a4962d266bfca478&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
