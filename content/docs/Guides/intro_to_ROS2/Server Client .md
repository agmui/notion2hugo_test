---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2024-09-12T01:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TKWRR3T%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDl2P3RPQqhFU8IhxHP01n8JqSa6IRP6NE5JllsLFR6twIhALyQ5xMpavBq10WBifZaJkVZ58CoimJOcV%2BT4zUN7Go8KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfTBFAZoH25mKGaVEq3ANLYxglgAV1AHsd4QQgte8wSuHB6Mw2saHRU8bINVxRi0z0aUg9ngQ1ZPahALraa4jjFJmSMrfjG%2FzoSEKwQJ%2FbPecIYb1UrwTjdbc7zV9HspKZa29OWmb1A5QiwCaS5KiS%2F4WpLDwPY%2FmEsXtGqPpqF4uoIkCppZ5iBXQB3QHFfqZNAvE0WAmezf9mmvidbwWJ%2FAtEysu0nGEqhbhIY%2FlxXseAv6Dy%2B9fNw6y0NZ1aBwCm%2BtHTH3%2Fn4umfQx3I61RaBMgd%2FWUMzQdGaQjiSWVetpSAAzkchsRnhSP6XdCJMOKiphjbwo8n7SP%2FNJO05exnFDIyocVDINyLwYrf4OqO8j1CBublaYBq0iyH8jcd%2F4Ug6S5DhMpOYmlj2C5V935rVeVShaGyHaOz0imhvlJtMUKzGCvWUXebZKPB5bhf7oI5EVBJirLsiqDUvQY3%2BYjWLvwOaYWUg1T3iashr7CR45g%2F5%2F0iUOU%2F8CPMhNob16i08F4%2F5TilahCXzSHyTknzF9F98QGlAoYA%2B7PPAfLES3MmJWThmRumTQmV0R2F3uQiBzBj9BlK8TVfUxDHm6Qx%2FkI3kgvqknr6wtU1kpiZ%2B%2FVLW%2B9oEtHC97v%2F%2FdL75BWA5BlvtzZV7dJHBzCD8KO%2FBjqkAWLy52tHNexjWMzGAPfVN18SnGNZ2Reifr3dH8gy7f8J9RDOiW7uB5nuReqjzrH6Ob8XohOuQSiiVXNdIIVeCNe%2FUmaA7VBNndBrwqph8noHf4kdDRKgBg8lYzTP84nOvGfMVoEJGnM%2F7kMsuSVR4%2FlRuLSPyIJBkT9dQOwz1yA4yd5FajYw5Bowh8esvngyF25mHXBSkv0KqNzvnli4x2xGLjC8&X-Amz-Signature=3ebce294f331eac2142efa56e63677b526f277d456614abe8a150f1b339ee8d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TKWRR3T%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDl2P3RPQqhFU8IhxHP01n8JqSa6IRP6NE5JllsLFR6twIhALyQ5xMpavBq10WBifZaJkVZ58CoimJOcV%2BT4zUN7Go8KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfTBFAZoH25mKGaVEq3ANLYxglgAV1AHsd4QQgte8wSuHB6Mw2saHRU8bINVxRi0z0aUg9ngQ1ZPahALraa4jjFJmSMrfjG%2FzoSEKwQJ%2FbPecIYb1UrwTjdbc7zV9HspKZa29OWmb1A5QiwCaS5KiS%2F4WpLDwPY%2FmEsXtGqPpqF4uoIkCppZ5iBXQB3QHFfqZNAvE0WAmezf9mmvidbwWJ%2FAtEysu0nGEqhbhIY%2FlxXseAv6Dy%2B9fNw6y0NZ1aBwCm%2BtHTH3%2Fn4umfQx3I61RaBMgd%2FWUMzQdGaQjiSWVetpSAAzkchsRnhSP6XdCJMOKiphjbwo8n7SP%2FNJO05exnFDIyocVDINyLwYrf4OqO8j1CBublaYBq0iyH8jcd%2F4Ug6S5DhMpOYmlj2C5V935rVeVShaGyHaOz0imhvlJtMUKzGCvWUXebZKPB5bhf7oI5EVBJirLsiqDUvQY3%2BYjWLvwOaYWUg1T3iashr7CR45g%2F5%2F0iUOU%2F8CPMhNob16i08F4%2F5TilahCXzSHyTknzF9F98QGlAoYA%2B7PPAfLES3MmJWThmRumTQmV0R2F3uQiBzBj9BlK8TVfUxDHm6Qx%2FkI3kgvqknr6wtU1kpiZ%2B%2FVLW%2B9oEtHC97v%2F%2FdL75BWA5BlvtzZV7dJHBzCD8KO%2FBjqkAWLy52tHNexjWMzGAPfVN18SnGNZ2Reifr3dH8gy7f8J9RDOiW7uB5nuReqjzrH6Ob8XohOuQSiiVXNdIIVeCNe%2FUmaA7VBNndBrwqph8noHf4kdDRKgBg8lYzTP84nOvGfMVoEJGnM%2F7kMsuSVR4%2FlRuLSPyIJBkT9dQOwz1yA4yd5FajYw5Bowh8esvngyF25mHXBSkv0KqNzvnli4x2xGLjC8&X-Amz-Signature=05887df1435930fe05fe4c6ec7db11510a634360a048b90db9f36646a8ad3abd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TKWRR3T%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDl2P3RPQqhFU8IhxHP01n8JqSa6IRP6NE5JllsLFR6twIhALyQ5xMpavBq10WBifZaJkVZ58CoimJOcV%2BT4zUN7Go8KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfTBFAZoH25mKGaVEq3ANLYxglgAV1AHsd4QQgte8wSuHB6Mw2saHRU8bINVxRi0z0aUg9ngQ1ZPahALraa4jjFJmSMrfjG%2FzoSEKwQJ%2FbPecIYb1UrwTjdbc7zV9HspKZa29OWmb1A5QiwCaS5KiS%2F4WpLDwPY%2FmEsXtGqPpqF4uoIkCppZ5iBXQB3QHFfqZNAvE0WAmezf9mmvidbwWJ%2FAtEysu0nGEqhbhIY%2FlxXseAv6Dy%2B9fNw6y0NZ1aBwCm%2BtHTH3%2Fn4umfQx3I61RaBMgd%2FWUMzQdGaQjiSWVetpSAAzkchsRnhSP6XdCJMOKiphjbwo8n7SP%2FNJO05exnFDIyocVDINyLwYrf4OqO8j1CBublaYBq0iyH8jcd%2F4Ug6S5DhMpOYmlj2C5V935rVeVShaGyHaOz0imhvlJtMUKzGCvWUXebZKPB5bhf7oI5EVBJirLsiqDUvQY3%2BYjWLvwOaYWUg1T3iashr7CR45g%2F5%2F0iUOU%2F8CPMhNob16i08F4%2F5TilahCXzSHyTknzF9F98QGlAoYA%2B7PPAfLES3MmJWThmRumTQmV0R2F3uQiBzBj9BlK8TVfUxDHm6Qx%2FkI3kgvqknr6wtU1kpiZ%2B%2FVLW%2B9oEtHC97v%2F%2FdL75BWA5BlvtzZV7dJHBzCD8KO%2FBjqkAWLy52tHNexjWMzGAPfVN18SnGNZ2Reifr3dH8gy7f8J9RDOiW7uB5nuReqjzrH6Ob8XohOuQSiiVXNdIIVeCNe%2FUmaA7VBNndBrwqph8noHf4kdDRKgBg8lYzTP84nOvGfMVoEJGnM%2F7kMsuSVR4%2FlRuLSPyIJBkT9dQOwz1yA4yd5FajYw5Bowh8esvngyF25mHXBSkv0KqNzvnli4x2xGLjC8&X-Amz-Signature=968a3d0fccd5c354c4179186d58e430d5f394e6cc0263f05e63141e2bf52e682&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TKWRR3T%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDl2P3RPQqhFU8IhxHP01n8JqSa6IRP6NE5JllsLFR6twIhALyQ5xMpavBq10WBifZaJkVZ58CoimJOcV%2BT4zUN7Go8KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfTBFAZoH25mKGaVEq3ANLYxglgAV1AHsd4QQgte8wSuHB6Mw2saHRU8bINVxRi0z0aUg9ngQ1ZPahALraa4jjFJmSMrfjG%2FzoSEKwQJ%2FbPecIYb1UrwTjdbc7zV9HspKZa29OWmb1A5QiwCaS5KiS%2F4WpLDwPY%2FmEsXtGqPpqF4uoIkCppZ5iBXQB3QHFfqZNAvE0WAmezf9mmvidbwWJ%2FAtEysu0nGEqhbhIY%2FlxXseAv6Dy%2B9fNw6y0NZ1aBwCm%2BtHTH3%2Fn4umfQx3I61RaBMgd%2FWUMzQdGaQjiSWVetpSAAzkchsRnhSP6XdCJMOKiphjbwo8n7SP%2FNJO05exnFDIyocVDINyLwYrf4OqO8j1CBublaYBq0iyH8jcd%2F4Ug6S5DhMpOYmlj2C5V935rVeVShaGyHaOz0imhvlJtMUKzGCvWUXebZKPB5bhf7oI5EVBJirLsiqDUvQY3%2BYjWLvwOaYWUg1T3iashr7CR45g%2F5%2F0iUOU%2F8CPMhNob16i08F4%2F5TilahCXzSHyTknzF9F98QGlAoYA%2B7PPAfLES3MmJWThmRumTQmV0R2F3uQiBzBj9BlK8TVfUxDHm6Qx%2FkI3kgvqknr6wtU1kpiZ%2B%2FVLW%2B9oEtHC97v%2F%2FdL75BWA5BlvtzZV7dJHBzCD8KO%2FBjqkAWLy52tHNexjWMzGAPfVN18SnGNZ2Reifr3dH8gy7f8J9RDOiW7uB5nuReqjzrH6Ob8XohOuQSiiVXNdIIVeCNe%2FUmaA7VBNndBrwqph8noHf4kdDRKgBg8lYzTP84nOvGfMVoEJGnM%2F7kMsuSVR4%2FlRuLSPyIJBkT9dQOwz1yA4yd5FajYw5Bowh8esvngyF25mHXBSkv0KqNzvnli4x2xGLjC8&X-Amz-Signature=c26c39d29702aa7e8d9bec1655cf3981ed9a07573c0f88c8a03756f3cd571ed9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TKWRR3T%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDl2P3RPQqhFU8IhxHP01n8JqSa6IRP6NE5JllsLFR6twIhALyQ5xMpavBq10WBifZaJkVZ58CoimJOcV%2BT4zUN7Go8KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfTBFAZoH25mKGaVEq3ANLYxglgAV1AHsd4QQgte8wSuHB6Mw2saHRU8bINVxRi0z0aUg9ngQ1ZPahALraa4jjFJmSMrfjG%2FzoSEKwQJ%2FbPecIYb1UrwTjdbc7zV9HspKZa29OWmb1A5QiwCaS5KiS%2F4WpLDwPY%2FmEsXtGqPpqF4uoIkCppZ5iBXQB3QHFfqZNAvE0WAmezf9mmvidbwWJ%2FAtEysu0nGEqhbhIY%2FlxXseAv6Dy%2B9fNw6y0NZ1aBwCm%2BtHTH3%2Fn4umfQx3I61RaBMgd%2FWUMzQdGaQjiSWVetpSAAzkchsRnhSP6XdCJMOKiphjbwo8n7SP%2FNJO05exnFDIyocVDINyLwYrf4OqO8j1CBublaYBq0iyH8jcd%2F4Ug6S5DhMpOYmlj2C5V935rVeVShaGyHaOz0imhvlJtMUKzGCvWUXebZKPB5bhf7oI5EVBJirLsiqDUvQY3%2BYjWLvwOaYWUg1T3iashr7CR45g%2F5%2F0iUOU%2F8CPMhNob16i08F4%2F5TilahCXzSHyTknzF9F98QGlAoYA%2B7PPAfLES3MmJWThmRumTQmV0R2F3uQiBzBj9BlK8TVfUxDHm6Qx%2FkI3kgvqknr6wtU1kpiZ%2B%2FVLW%2B9oEtHC97v%2F%2FdL75BWA5BlvtzZV7dJHBzCD8KO%2FBjqkAWLy52tHNexjWMzGAPfVN18SnGNZ2Reifr3dH8gy7f8J9RDOiW7uB5nuReqjzrH6Ob8XohOuQSiiVXNdIIVeCNe%2FUmaA7VBNndBrwqph8noHf4kdDRKgBg8lYzTP84nOvGfMVoEJGnM%2F7kMsuSVR4%2FlRuLSPyIJBkT9dQOwz1yA4yd5FajYw5Bowh8esvngyF25mHXBSkv0KqNzvnli4x2xGLjC8&X-Amz-Signature=a2cf638d0caa4a945be3b918ad04642e2ed177ad74a3978acaab88ede073a077&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
