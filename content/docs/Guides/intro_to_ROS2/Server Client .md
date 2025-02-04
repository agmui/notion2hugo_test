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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQBULNL7%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIFB6zyY1mvhV0tBGqCw9JVJxbTKSZlGTfYVQntUVd9VuAiAKVyOfqZcssD%2BZDrcu%2FutbAdtRa%2FzmO7zX14Csza9B8yr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMvxU0Q5rBAMx9WUnAKtwD0GPDEKCaNGoOCaeFBDvECE7TJfUlh7YuUatkzuo0uJtCW8W6gublTCDnhx6vJuMN8GpkwU%2FFADLmTRL32hitSKv5e5Msdqb6SfdNZEH02tKUhPpGZjRQFPwiNowKemiOe6aJPiahMUwvIO05mqLO7cpNUMe1EeM%2BYLHgVY9Ijfn88gsHvJZKaVfHjQrjD3lP%2BeWIhR7wDRKfjgl%2FpzKRN0RVhj8mqc0uCZsbP9Ld3ICAGyynscingO3oAeNwG2Z9A92bSP%2BLDmMxt2Qs4X4ePUCnVOQZ16Ej8rxWFfRU2pw4L0N9LeX25TSuel8RlIXygAmlrknJMd0XFwLEAO2LvUorVh7BMkLrE0fVhzn4JMPSbkDyKIcw1J%2BL%2BiFn0e6PMAOD2Qo5lWzNeNEyYi9xENkBfb80nFsN5HPzBhuPydLmkqx%2BC4qOBHeSCA30PwUQ9T11qsPaZcY80ElxglBR7I2YiASUGWUKUfd8fx%2FNydnXQOCdjjm2U5BdJIKp2vl4Q9M4P6NDVAaDN7Jiog409okT3FHWZnDfckyygaIot9Lp%2BHhbTIOnrYIo6e8Og%2FA8eAVIkqeK42SVXGJfJzvVvjG%2Bl354eYAR1VaTYCzG8sWyNiolfmYZMpsUakEwkcyHvQY6pgERqL%2BRNSZ8J8gH3%2BI7Q00uFPZpMXOLLfvVfNeRx7r325nj%2FJGcNgFX7pZ%2B47cWYjwUpa2qiVvKPxLjMC9VfcNjjgibguI%2F4bwJi0vtMEN03c4UOMwkjE97Q90pkC9MGCsbXVggkvhBr6eta6rKqYXSkPDckxU475wWdX3zEs1dnKEqcfzUFECZyE6ltpkwJiWeUOdv5eoOR54iIS3gozQ%2FeRhxawCX&X-Amz-Signature=5ba1434dd379da53b87a2d9c884f92b739353cb13c416b40c34a835304718073&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQBULNL7%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIFB6zyY1mvhV0tBGqCw9JVJxbTKSZlGTfYVQntUVd9VuAiAKVyOfqZcssD%2BZDrcu%2FutbAdtRa%2FzmO7zX14Csza9B8yr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMvxU0Q5rBAMx9WUnAKtwD0GPDEKCaNGoOCaeFBDvECE7TJfUlh7YuUatkzuo0uJtCW8W6gublTCDnhx6vJuMN8GpkwU%2FFADLmTRL32hitSKv5e5Msdqb6SfdNZEH02tKUhPpGZjRQFPwiNowKemiOe6aJPiahMUwvIO05mqLO7cpNUMe1EeM%2BYLHgVY9Ijfn88gsHvJZKaVfHjQrjD3lP%2BeWIhR7wDRKfjgl%2FpzKRN0RVhj8mqc0uCZsbP9Ld3ICAGyynscingO3oAeNwG2Z9A92bSP%2BLDmMxt2Qs4X4ePUCnVOQZ16Ej8rxWFfRU2pw4L0N9LeX25TSuel8RlIXygAmlrknJMd0XFwLEAO2LvUorVh7BMkLrE0fVhzn4JMPSbkDyKIcw1J%2BL%2BiFn0e6PMAOD2Qo5lWzNeNEyYi9xENkBfb80nFsN5HPzBhuPydLmkqx%2BC4qOBHeSCA30PwUQ9T11qsPaZcY80ElxglBR7I2YiASUGWUKUfd8fx%2FNydnXQOCdjjm2U5BdJIKp2vl4Q9M4P6NDVAaDN7Jiog409okT3FHWZnDfckyygaIot9Lp%2BHhbTIOnrYIo6e8Og%2FA8eAVIkqeK42SVXGJfJzvVvjG%2Bl354eYAR1VaTYCzG8sWyNiolfmYZMpsUakEwkcyHvQY6pgERqL%2BRNSZ8J8gH3%2BI7Q00uFPZpMXOLLfvVfNeRx7r325nj%2FJGcNgFX7pZ%2B47cWYjwUpa2qiVvKPxLjMC9VfcNjjgibguI%2F4bwJi0vtMEN03c4UOMwkjE97Q90pkC9MGCsbXVggkvhBr6eta6rKqYXSkPDckxU475wWdX3zEs1dnKEqcfzUFECZyE6ltpkwJiWeUOdv5eoOR54iIS3gozQ%2FeRhxawCX&X-Amz-Signature=49136da63940a5ea2078aa0e13e9f2b584e4f568048534c38db3e1ec4325390b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQBULNL7%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIFB6zyY1mvhV0tBGqCw9JVJxbTKSZlGTfYVQntUVd9VuAiAKVyOfqZcssD%2BZDrcu%2FutbAdtRa%2FzmO7zX14Csza9B8yr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMvxU0Q5rBAMx9WUnAKtwD0GPDEKCaNGoOCaeFBDvECE7TJfUlh7YuUatkzuo0uJtCW8W6gublTCDnhx6vJuMN8GpkwU%2FFADLmTRL32hitSKv5e5Msdqb6SfdNZEH02tKUhPpGZjRQFPwiNowKemiOe6aJPiahMUwvIO05mqLO7cpNUMe1EeM%2BYLHgVY9Ijfn88gsHvJZKaVfHjQrjD3lP%2BeWIhR7wDRKfjgl%2FpzKRN0RVhj8mqc0uCZsbP9Ld3ICAGyynscingO3oAeNwG2Z9A92bSP%2BLDmMxt2Qs4X4ePUCnVOQZ16Ej8rxWFfRU2pw4L0N9LeX25TSuel8RlIXygAmlrknJMd0XFwLEAO2LvUorVh7BMkLrE0fVhzn4JMPSbkDyKIcw1J%2BL%2BiFn0e6PMAOD2Qo5lWzNeNEyYi9xENkBfb80nFsN5HPzBhuPydLmkqx%2BC4qOBHeSCA30PwUQ9T11qsPaZcY80ElxglBR7I2YiASUGWUKUfd8fx%2FNydnXQOCdjjm2U5BdJIKp2vl4Q9M4P6NDVAaDN7Jiog409okT3FHWZnDfckyygaIot9Lp%2BHhbTIOnrYIo6e8Og%2FA8eAVIkqeK42SVXGJfJzvVvjG%2Bl354eYAR1VaTYCzG8sWyNiolfmYZMpsUakEwkcyHvQY6pgERqL%2BRNSZ8J8gH3%2BI7Q00uFPZpMXOLLfvVfNeRx7r325nj%2FJGcNgFX7pZ%2B47cWYjwUpa2qiVvKPxLjMC9VfcNjjgibguI%2F4bwJi0vtMEN03c4UOMwkjE97Q90pkC9MGCsbXVggkvhBr6eta6rKqYXSkPDckxU475wWdX3zEs1dnKEqcfzUFECZyE6ltpkwJiWeUOdv5eoOR54iIS3gozQ%2FeRhxawCX&X-Amz-Signature=b572ba4a6c1c1d9baf25728f087c5e869a780b477a2d529075423131a3f7cd0a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQBULNL7%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIFB6zyY1mvhV0tBGqCw9JVJxbTKSZlGTfYVQntUVd9VuAiAKVyOfqZcssD%2BZDrcu%2FutbAdtRa%2FzmO7zX14Csza9B8yr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMvxU0Q5rBAMx9WUnAKtwD0GPDEKCaNGoOCaeFBDvECE7TJfUlh7YuUatkzuo0uJtCW8W6gublTCDnhx6vJuMN8GpkwU%2FFADLmTRL32hitSKv5e5Msdqb6SfdNZEH02tKUhPpGZjRQFPwiNowKemiOe6aJPiahMUwvIO05mqLO7cpNUMe1EeM%2BYLHgVY9Ijfn88gsHvJZKaVfHjQrjD3lP%2BeWIhR7wDRKfjgl%2FpzKRN0RVhj8mqc0uCZsbP9Ld3ICAGyynscingO3oAeNwG2Z9A92bSP%2BLDmMxt2Qs4X4ePUCnVOQZ16Ej8rxWFfRU2pw4L0N9LeX25TSuel8RlIXygAmlrknJMd0XFwLEAO2LvUorVh7BMkLrE0fVhzn4JMPSbkDyKIcw1J%2BL%2BiFn0e6PMAOD2Qo5lWzNeNEyYi9xENkBfb80nFsN5HPzBhuPydLmkqx%2BC4qOBHeSCA30PwUQ9T11qsPaZcY80ElxglBR7I2YiASUGWUKUfd8fx%2FNydnXQOCdjjm2U5BdJIKp2vl4Q9M4P6NDVAaDN7Jiog409okT3FHWZnDfckyygaIot9Lp%2BHhbTIOnrYIo6e8Og%2FA8eAVIkqeK42SVXGJfJzvVvjG%2Bl354eYAR1VaTYCzG8sWyNiolfmYZMpsUakEwkcyHvQY6pgERqL%2BRNSZ8J8gH3%2BI7Q00uFPZpMXOLLfvVfNeRx7r325nj%2FJGcNgFX7pZ%2B47cWYjwUpa2qiVvKPxLjMC9VfcNjjgibguI%2F4bwJi0vtMEN03c4UOMwkjE97Q90pkC9MGCsbXVggkvhBr6eta6rKqYXSkPDckxU475wWdX3zEs1dnKEqcfzUFECZyE6ltpkwJiWeUOdv5eoOR54iIS3gozQ%2FeRhxawCX&X-Amz-Signature=a97b39956aaa7d9ae14dd079f8f4c3589ce3f7d19187f77e4e14b460223b6d0b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQBULNL7%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIFB6zyY1mvhV0tBGqCw9JVJxbTKSZlGTfYVQntUVd9VuAiAKVyOfqZcssD%2BZDrcu%2FutbAdtRa%2FzmO7zX14Csza9B8yr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMvxU0Q5rBAMx9WUnAKtwD0GPDEKCaNGoOCaeFBDvECE7TJfUlh7YuUatkzuo0uJtCW8W6gublTCDnhx6vJuMN8GpkwU%2FFADLmTRL32hitSKv5e5Msdqb6SfdNZEH02tKUhPpGZjRQFPwiNowKemiOe6aJPiahMUwvIO05mqLO7cpNUMe1EeM%2BYLHgVY9Ijfn88gsHvJZKaVfHjQrjD3lP%2BeWIhR7wDRKfjgl%2FpzKRN0RVhj8mqc0uCZsbP9Ld3ICAGyynscingO3oAeNwG2Z9A92bSP%2BLDmMxt2Qs4X4ePUCnVOQZ16Ej8rxWFfRU2pw4L0N9LeX25TSuel8RlIXygAmlrknJMd0XFwLEAO2LvUorVh7BMkLrE0fVhzn4JMPSbkDyKIcw1J%2BL%2BiFn0e6PMAOD2Qo5lWzNeNEyYi9xENkBfb80nFsN5HPzBhuPydLmkqx%2BC4qOBHeSCA30PwUQ9T11qsPaZcY80ElxglBR7I2YiASUGWUKUfd8fx%2FNydnXQOCdjjm2U5BdJIKp2vl4Q9M4P6NDVAaDN7Jiog409okT3FHWZnDfckyygaIot9Lp%2BHhbTIOnrYIo6e8Og%2FA8eAVIkqeK42SVXGJfJzvVvjG%2Bl354eYAR1VaTYCzG8sWyNiolfmYZMpsUakEwkcyHvQY6pgERqL%2BRNSZ8J8gH3%2BI7Q00uFPZpMXOLLfvVfNeRx7r325nj%2FJGcNgFX7pZ%2B47cWYjwUpa2qiVvKPxLjMC9VfcNjjgibguI%2F4bwJi0vtMEN03c4UOMwkjE97Q90pkC9MGCsbXVggkvhBr6eta6rKqYXSkPDckxU475wWdX3zEs1dnKEqcfzUFECZyE6ltpkwJiWeUOdv5eoOR54iIS3gozQ%2FeRhxawCX&X-Amz-Signature=690e6636127cfb0d50f3722d79e8501829d66e4604c86ee5bd1cb951b870571b&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
