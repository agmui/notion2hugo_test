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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642VBEC75%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQC7ftXqvhztLlXXJROW6VLjgmmNP8wWC0E0RPRIAXEYOAIgOnROsDbhoJIDJfYMfeJnaylpyMHRweqXAK%2BRB%2F0nURMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDAOhZ6WylnvuN7FODyrcAzVoeDndgTeUA0AtSTBExSa3le18fkbg6Auza5VfkbOIg6Q3i%2BxHYmwZJLQjGENoxaAU23HPgsvEBDaZCXNWoXwUcAzfryoDf7TiLapGMDsDKxEO6g0htXh5cm2rncUcc9QTSmKzK9uhEmq8v8u7cvPPKyroXFgMG5cTGDIHaEaq5p0mHKcR2ntfdkp0yfgXRGZZoXE5A002kuH8vSnboptiApb%2FXyqfpeaOjmnwM6QuqxC1z%2FKfx%2BgOBxUrUUfGz%2Fzsv4yF6g5Hu03j75oTdlqSZ6ZmO78V%2FV6jY3osHAmY8yNMHMAAYZJ%2B7wtjXmrIWznXB%2BdIWh8EblSxK0yzr9mBRYZzIApml2dyqH0tzQtM9Y7niKMIFBMt5lYqnmLHFDMJvhjFU7rUiYvwldeDKiHeQ5bqfBAIUb%2BVSch4gQOORYA0v5wqAf1lTvuvl2RHDWLOgu%2FcgksOzxqMZ0nSfL767wGZzy1qao8gpvET8QBCFx2z4E01IWNb43ZIEl0cliDllVka5EwAIw%2FRRlEwbbdW8oNtQ9mH%2Fysg2UAvH9XcVWVafbKLOBj8ae2lL%2Fj525D%2B1piv4Zxt11W%2B5zG1PyzQnnt%2FuVWWXR%2F0lN4bnVK4uyiMP34Uwimco2YfMJ%2FlhMIGOqUB6wny%2B973szqP9iwQgRb1SLBoFbicBeKwQ1gYxqLTFmtgAI2CurzR%2F9i2ImZfcr9w%2BFpT5YIhg0y1UBrydNOZnHmx%2FwJwqxaCMz6dEfZ3g7%2Fa5VD5p9XFFGu3eq5WnV%2FZNZyCNoA91eMImz2Tm5oa0FOrcYR%2F4vBlPeTCZaVilpjfflp8DYKYydOgCsRxZtdPC836%2B4D80Wx6c0Q2ySVFoimEI12k&X-Amz-Signature=6aa442e19ffaee7de413f830ade403afb6f0bf613ef0dedc39ad9d4ac5e3de42&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642VBEC75%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQC7ftXqvhztLlXXJROW6VLjgmmNP8wWC0E0RPRIAXEYOAIgOnROsDbhoJIDJfYMfeJnaylpyMHRweqXAK%2BRB%2F0nURMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDAOhZ6WylnvuN7FODyrcAzVoeDndgTeUA0AtSTBExSa3le18fkbg6Auza5VfkbOIg6Q3i%2BxHYmwZJLQjGENoxaAU23HPgsvEBDaZCXNWoXwUcAzfryoDf7TiLapGMDsDKxEO6g0htXh5cm2rncUcc9QTSmKzK9uhEmq8v8u7cvPPKyroXFgMG5cTGDIHaEaq5p0mHKcR2ntfdkp0yfgXRGZZoXE5A002kuH8vSnboptiApb%2FXyqfpeaOjmnwM6QuqxC1z%2FKfx%2BgOBxUrUUfGz%2Fzsv4yF6g5Hu03j75oTdlqSZ6ZmO78V%2FV6jY3osHAmY8yNMHMAAYZJ%2B7wtjXmrIWznXB%2BdIWh8EblSxK0yzr9mBRYZzIApml2dyqH0tzQtM9Y7niKMIFBMt5lYqnmLHFDMJvhjFU7rUiYvwldeDKiHeQ5bqfBAIUb%2BVSch4gQOORYA0v5wqAf1lTvuvl2RHDWLOgu%2FcgksOzxqMZ0nSfL767wGZzy1qao8gpvET8QBCFx2z4E01IWNb43ZIEl0cliDllVka5EwAIw%2FRRlEwbbdW8oNtQ9mH%2Fysg2UAvH9XcVWVafbKLOBj8ae2lL%2Fj525D%2B1piv4Zxt11W%2B5zG1PyzQnnt%2FuVWWXR%2F0lN4bnVK4uyiMP34Uwimco2YfMJ%2FlhMIGOqUB6wny%2B973szqP9iwQgRb1SLBoFbicBeKwQ1gYxqLTFmtgAI2CurzR%2F9i2ImZfcr9w%2BFpT5YIhg0y1UBrydNOZnHmx%2FwJwqxaCMz6dEfZ3g7%2Fa5VD5p9XFFGu3eq5WnV%2FZNZyCNoA91eMImz2Tm5oa0FOrcYR%2F4vBlPeTCZaVilpjfflp8DYKYydOgCsRxZtdPC836%2B4D80Wx6c0Q2ySVFoimEI12k&X-Amz-Signature=f2040e24cffd27a07feb52569cb6a05dccca960f3a9bd31a007eab4e2381638d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642VBEC75%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQC7ftXqvhztLlXXJROW6VLjgmmNP8wWC0E0RPRIAXEYOAIgOnROsDbhoJIDJfYMfeJnaylpyMHRweqXAK%2BRB%2F0nURMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDAOhZ6WylnvuN7FODyrcAzVoeDndgTeUA0AtSTBExSa3le18fkbg6Auza5VfkbOIg6Q3i%2BxHYmwZJLQjGENoxaAU23HPgsvEBDaZCXNWoXwUcAzfryoDf7TiLapGMDsDKxEO6g0htXh5cm2rncUcc9QTSmKzK9uhEmq8v8u7cvPPKyroXFgMG5cTGDIHaEaq5p0mHKcR2ntfdkp0yfgXRGZZoXE5A002kuH8vSnboptiApb%2FXyqfpeaOjmnwM6QuqxC1z%2FKfx%2BgOBxUrUUfGz%2Fzsv4yF6g5Hu03j75oTdlqSZ6ZmO78V%2FV6jY3osHAmY8yNMHMAAYZJ%2B7wtjXmrIWznXB%2BdIWh8EblSxK0yzr9mBRYZzIApml2dyqH0tzQtM9Y7niKMIFBMt5lYqnmLHFDMJvhjFU7rUiYvwldeDKiHeQ5bqfBAIUb%2BVSch4gQOORYA0v5wqAf1lTvuvl2RHDWLOgu%2FcgksOzxqMZ0nSfL767wGZzy1qao8gpvET8QBCFx2z4E01IWNb43ZIEl0cliDllVka5EwAIw%2FRRlEwbbdW8oNtQ9mH%2Fysg2UAvH9XcVWVafbKLOBj8ae2lL%2Fj525D%2B1piv4Zxt11W%2B5zG1PyzQnnt%2FuVWWXR%2F0lN4bnVK4uyiMP34Uwimco2YfMJ%2FlhMIGOqUB6wny%2B973szqP9iwQgRb1SLBoFbicBeKwQ1gYxqLTFmtgAI2CurzR%2F9i2ImZfcr9w%2BFpT5YIhg0y1UBrydNOZnHmx%2FwJwqxaCMz6dEfZ3g7%2Fa5VD5p9XFFGu3eq5WnV%2FZNZyCNoA91eMImz2Tm5oa0FOrcYR%2F4vBlPeTCZaVilpjfflp8DYKYydOgCsRxZtdPC836%2B4D80Wx6c0Q2ySVFoimEI12k&X-Amz-Signature=ac9e444d1305d51d6c3d17661c4feb305aca9546aeae8450bedb0c95d535260d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642VBEC75%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQC7ftXqvhztLlXXJROW6VLjgmmNP8wWC0E0RPRIAXEYOAIgOnROsDbhoJIDJfYMfeJnaylpyMHRweqXAK%2BRB%2F0nURMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDAOhZ6WylnvuN7FODyrcAzVoeDndgTeUA0AtSTBExSa3le18fkbg6Auza5VfkbOIg6Q3i%2BxHYmwZJLQjGENoxaAU23HPgsvEBDaZCXNWoXwUcAzfryoDf7TiLapGMDsDKxEO6g0htXh5cm2rncUcc9QTSmKzK9uhEmq8v8u7cvPPKyroXFgMG5cTGDIHaEaq5p0mHKcR2ntfdkp0yfgXRGZZoXE5A002kuH8vSnboptiApb%2FXyqfpeaOjmnwM6QuqxC1z%2FKfx%2BgOBxUrUUfGz%2Fzsv4yF6g5Hu03j75oTdlqSZ6ZmO78V%2FV6jY3osHAmY8yNMHMAAYZJ%2B7wtjXmrIWznXB%2BdIWh8EblSxK0yzr9mBRYZzIApml2dyqH0tzQtM9Y7niKMIFBMt5lYqnmLHFDMJvhjFU7rUiYvwldeDKiHeQ5bqfBAIUb%2BVSch4gQOORYA0v5wqAf1lTvuvl2RHDWLOgu%2FcgksOzxqMZ0nSfL767wGZzy1qao8gpvET8QBCFx2z4E01IWNb43ZIEl0cliDllVka5EwAIw%2FRRlEwbbdW8oNtQ9mH%2Fysg2UAvH9XcVWVafbKLOBj8ae2lL%2Fj525D%2B1piv4Zxt11W%2B5zG1PyzQnnt%2FuVWWXR%2F0lN4bnVK4uyiMP34Uwimco2YfMJ%2FlhMIGOqUB6wny%2B973szqP9iwQgRb1SLBoFbicBeKwQ1gYxqLTFmtgAI2CurzR%2F9i2ImZfcr9w%2BFpT5YIhg0y1UBrydNOZnHmx%2FwJwqxaCMz6dEfZ3g7%2Fa5VD5p9XFFGu3eq5WnV%2FZNZyCNoA91eMImz2Tm5oa0FOrcYR%2F4vBlPeTCZaVilpjfflp8DYKYydOgCsRxZtdPC836%2B4D80Wx6c0Q2ySVFoimEI12k&X-Amz-Signature=5e1d3ac73f051978056338ca4729be91a10f4e52e3c7559869eda057c1e13657&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642VBEC75%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQC7ftXqvhztLlXXJROW6VLjgmmNP8wWC0E0RPRIAXEYOAIgOnROsDbhoJIDJfYMfeJnaylpyMHRweqXAK%2BRB%2F0nURMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDAOhZ6WylnvuN7FODyrcAzVoeDndgTeUA0AtSTBExSa3le18fkbg6Auza5VfkbOIg6Q3i%2BxHYmwZJLQjGENoxaAU23HPgsvEBDaZCXNWoXwUcAzfryoDf7TiLapGMDsDKxEO6g0htXh5cm2rncUcc9QTSmKzK9uhEmq8v8u7cvPPKyroXFgMG5cTGDIHaEaq5p0mHKcR2ntfdkp0yfgXRGZZoXE5A002kuH8vSnboptiApb%2FXyqfpeaOjmnwM6QuqxC1z%2FKfx%2BgOBxUrUUfGz%2Fzsv4yF6g5Hu03j75oTdlqSZ6ZmO78V%2FV6jY3osHAmY8yNMHMAAYZJ%2B7wtjXmrIWznXB%2BdIWh8EblSxK0yzr9mBRYZzIApml2dyqH0tzQtM9Y7niKMIFBMt5lYqnmLHFDMJvhjFU7rUiYvwldeDKiHeQ5bqfBAIUb%2BVSch4gQOORYA0v5wqAf1lTvuvl2RHDWLOgu%2FcgksOzxqMZ0nSfL767wGZzy1qao8gpvET8QBCFx2z4E01IWNb43ZIEl0cliDllVka5EwAIw%2FRRlEwbbdW8oNtQ9mH%2Fysg2UAvH9XcVWVafbKLOBj8ae2lL%2Fj525D%2B1piv4Zxt11W%2B5zG1PyzQnnt%2FuVWWXR%2F0lN4bnVK4uyiMP34Uwimco2YfMJ%2FlhMIGOqUB6wny%2B973szqP9iwQgRb1SLBoFbicBeKwQ1gYxqLTFmtgAI2CurzR%2F9i2ImZfcr9w%2BFpT5YIhg0y1UBrydNOZnHmx%2FwJwqxaCMz6dEfZ3g7%2Fa5VD5p9XFFGu3eq5WnV%2FZNZyCNoA91eMImz2Tm5oa0FOrcYR%2F4vBlPeTCZaVilpjfflp8DYKYydOgCsRxZtdPC836%2B4D80Wx6c0Q2ySVFoimEI12k&X-Amz-Signature=09cf2482a48eff14c5ad6b8808a30ca7e484c7f6dee9f132ab1422ca84e48453&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
