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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U22BQAMZ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0fF1KeqcVOfBd0SqEr2SRi4dwT5gSVhyIRzGZ81I5vAiEA2JiIlBSC%2Fuk3XliZC79aZTVXdoFYlifWJcwrlVIy4g8q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDKuaxkRyMM4o1aN3QCrcA5ukzPO4OauKi0FIjuSbOw7s2y5i%2Fx7ErLuL5DO%2Fvf3EPVtj0zzx%2F3Dh9mew0iSl5nkLFvHU6ZSlRnHuR9yTFXiSK83x8B4mtiH4RcI4u06DGt3ca1SQm2B83W2V1bnCg7o%2BBnjs%2FdhLSI%2FG%2FlFwUoURW1Vfnt85DrF8YblaymrTN7zA3nLeBDO%2FSiEaFMC3g0UNadEl0xtuCsRNiClXjGW05lHg8FwjlQADz7c9BgY2wY7bveyce6o4IoxwzwdiQ1VbPArluRDwKmCu9v1vFIhokxBbRU6Q1GZpSmt%2B060v%2BMRtWn%2B%2B%2FizxHkVw6sOtRD3aKLYLL02kG8w0g%2FVBUZTuqqZaiAjUeB4ZFFgVhtoWI7m6N1qYNtxSt33Z%2F86LFsTkpc8R9s4VC%2FomVXFAzuJihqgiggqFcGuo3aFfvlAGkGlmY9nFrT2hjgNgA2gTjz5AerM6gg2AHnB2ON38ER2ML8e9PLVGL%2FZV3cCA3lHRoZ55g9oRn0X%2B6d0xfeiddTVK8DsdIaLozdCVxlQlQKFUWKjNu6GStrRF7%2BcXEYWQsZjqUrV8DjqUV2z%2FdfUA2X3cVauPd3bjdwO%2Bls5ZtS0G82%2Fiu0f3IBK%2BHD7cs8GyOpJKekwBv9qFUXQlMKyYjL8GOqUBHQylaJUnZyUon8Q177feZquGqbnhM2Z79%2Fq083jnoFnTC4uo4UzNExTOzda807erB7Z0EZfEBnhuYZWr7gRc0UnOSFMszZ0mFdJsMmpDgAlntsjc3zTI2hG9fAmyu4kJyxtUjda%2BZOsk3sEZVWOzC666trCwNkLUnN70D0Yvt8c3a1wv0tHHlV4%2Bihv9KLg72qltg7A07zUU6DK8Beq8dzBc6id2&X-Amz-Signature=3bf84a513b11db4a60ef52349e270fd3e9a97103b9b892de790d34723387f6a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U22BQAMZ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0fF1KeqcVOfBd0SqEr2SRi4dwT5gSVhyIRzGZ81I5vAiEA2JiIlBSC%2Fuk3XliZC79aZTVXdoFYlifWJcwrlVIy4g8q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDKuaxkRyMM4o1aN3QCrcA5ukzPO4OauKi0FIjuSbOw7s2y5i%2Fx7ErLuL5DO%2Fvf3EPVtj0zzx%2F3Dh9mew0iSl5nkLFvHU6ZSlRnHuR9yTFXiSK83x8B4mtiH4RcI4u06DGt3ca1SQm2B83W2V1bnCg7o%2BBnjs%2FdhLSI%2FG%2FlFwUoURW1Vfnt85DrF8YblaymrTN7zA3nLeBDO%2FSiEaFMC3g0UNadEl0xtuCsRNiClXjGW05lHg8FwjlQADz7c9BgY2wY7bveyce6o4IoxwzwdiQ1VbPArluRDwKmCu9v1vFIhokxBbRU6Q1GZpSmt%2B060v%2BMRtWn%2B%2B%2FizxHkVw6sOtRD3aKLYLL02kG8w0g%2FVBUZTuqqZaiAjUeB4ZFFgVhtoWI7m6N1qYNtxSt33Z%2F86LFsTkpc8R9s4VC%2FomVXFAzuJihqgiggqFcGuo3aFfvlAGkGlmY9nFrT2hjgNgA2gTjz5AerM6gg2AHnB2ON38ER2ML8e9PLVGL%2FZV3cCA3lHRoZ55g9oRn0X%2B6d0xfeiddTVK8DsdIaLozdCVxlQlQKFUWKjNu6GStrRF7%2BcXEYWQsZjqUrV8DjqUV2z%2FdfUA2X3cVauPd3bjdwO%2Bls5ZtS0G82%2Fiu0f3IBK%2BHD7cs8GyOpJKekwBv9qFUXQlMKyYjL8GOqUBHQylaJUnZyUon8Q177feZquGqbnhM2Z79%2Fq083jnoFnTC4uo4UzNExTOzda807erB7Z0EZfEBnhuYZWr7gRc0UnOSFMszZ0mFdJsMmpDgAlntsjc3zTI2hG9fAmyu4kJyxtUjda%2BZOsk3sEZVWOzC666trCwNkLUnN70D0Yvt8c3a1wv0tHHlV4%2Bihv9KLg72qltg7A07zUU6DK8Beq8dzBc6id2&X-Amz-Signature=7b7615f9dd9ca0ce860c5f57753c8afd5f4de1d5a838fe7fbdcebf8173c55bcf&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U22BQAMZ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0fF1KeqcVOfBd0SqEr2SRi4dwT5gSVhyIRzGZ81I5vAiEA2JiIlBSC%2Fuk3XliZC79aZTVXdoFYlifWJcwrlVIy4g8q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDKuaxkRyMM4o1aN3QCrcA5ukzPO4OauKi0FIjuSbOw7s2y5i%2Fx7ErLuL5DO%2Fvf3EPVtj0zzx%2F3Dh9mew0iSl5nkLFvHU6ZSlRnHuR9yTFXiSK83x8B4mtiH4RcI4u06DGt3ca1SQm2B83W2V1bnCg7o%2BBnjs%2FdhLSI%2FG%2FlFwUoURW1Vfnt85DrF8YblaymrTN7zA3nLeBDO%2FSiEaFMC3g0UNadEl0xtuCsRNiClXjGW05lHg8FwjlQADz7c9BgY2wY7bveyce6o4IoxwzwdiQ1VbPArluRDwKmCu9v1vFIhokxBbRU6Q1GZpSmt%2B060v%2BMRtWn%2B%2B%2FizxHkVw6sOtRD3aKLYLL02kG8w0g%2FVBUZTuqqZaiAjUeB4ZFFgVhtoWI7m6N1qYNtxSt33Z%2F86LFsTkpc8R9s4VC%2FomVXFAzuJihqgiggqFcGuo3aFfvlAGkGlmY9nFrT2hjgNgA2gTjz5AerM6gg2AHnB2ON38ER2ML8e9PLVGL%2FZV3cCA3lHRoZ55g9oRn0X%2B6d0xfeiddTVK8DsdIaLozdCVxlQlQKFUWKjNu6GStrRF7%2BcXEYWQsZjqUrV8DjqUV2z%2FdfUA2X3cVauPd3bjdwO%2Bls5ZtS0G82%2Fiu0f3IBK%2BHD7cs8GyOpJKekwBv9qFUXQlMKyYjL8GOqUBHQylaJUnZyUon8Q177feZquGqbnhM2Z79%2Fq083jnoFnTC4uo4UzNExTOzda807erB7Z0EZfEBnhuYZWr7gRc0UnOSFMszZ0mFdJsMmpDgAlntsjc3zTI2hG9fAmyu4kJyxtUjda%2BZOsk3sEZVWOzC666trCwNkLUnN70D0Yvt8c3a1wv0tHHlV4%2Bihv9KLg72qltg7A07zUU6DK8Beq8dzBc6id2&X-Amz-Signature=f6b6f309b7e679ffd4bb3e08d40c4b1e475f220610406ef12e9fc372008927aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U22BQAMZ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0fF1KeqcVOfBd0SqEr2SRi4dwT5gSVhyIRzGZ81I5vAiEA2JiIlBSC%2Fuk3XliZC79aZTVXdoFYlifWJcwrlVIy4g8q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDKuaxkRyMM4o1aN3QCrcA5ukzPO4OauKi0FIjuSbOw7s2y5i%2Fx7ErLuL5DO%2Fvf3EPVtj0zzx%2F3Dh9mew0iSl5nkLFvHU6ZSlRnHuR9yTFXiSK83x8B4mtiH4RcI4u06DGt3ca1SQm2B83W2V1bnCg7o%2BBnjs%2FdhLSI%2FG%2FlFwUoURW1Vfnt85DrF8YblaymrTN7zA3nLeBDO%2FSiEaFMC3g0UNadEl0xtuCsRNiClXjGW05lHg8FwjlQADz7c9BgY2wY7bveyce6o4IoxwzwdiQ1VbPArluRDwKmCu9v1vFIhokxBbRU6Q1GZpSmt%2B060v%2BMRtWn%2B%2B%2FizxHkVw6sOtRD3aKLYLL02kG8w0g%2FVBUZTuqqZaiAjUeB4ZFFgVhtoWI7m6N1qYNtxSt33Z%2F86LFsTkpc8R9s4VC%2FomVXFAzuJihqgiggqFcGuo3aFfvlAGkGlmY9nFrT2hjgNgA2gTjz5AerM6gg2AHnB2ON38ER2ML8e9PLVGL%2FZV3cCA3lHRoZ55g9oRn0X%2B6d0xfeiddTVK8DsdIaLozdCVxlQlQKFUWKjNu6GStrRF7%2BcXEYWQsZjqUrV8DjqUV2z%2FdfUA2X3cVauPd3bjdwO%2Bls5ZtS0G82%2Fiu0f3IBK%2BHD7cs8GyOpJKekwBv9qFUXQlMKyYjL8GOqUBHQylaJUnZyUon8Q177feZquGqbnhM2Z79%2Fq083jnoFnTC4uo4UzNExTOzda807erB7Z0EZfEBnhuYZWr7gRc0UnOSFMszZ0mFdJsMmpDgAlntsjc3zTI2hG9fAmyu4kJyxtUjda%2BZOsk3sEZVWOzC666trCwNkLUnN70D0Yvt8c3a1wv0tHHlV4%2Bihv9KLg72qltg7A07zUU6DK8Beq8dzBc6id2&X-Amz-Signature=61030814678eed82dea1f5659ce805a918a07c3de52454d3760b4c8c600eab21&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U22BQAMZ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0fF1KeqcVOfBd0SqEr2SRi4dwT5gSVhyIRzGZ81I5vAiEA2JiIlBSC%2Fuk3XliZC79aZTVXdoFYlifWJcwrlVIy4g8q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDKuaxkRyMM4o1aN3QCrcA5ukzPO4OauKi0FIjuSbOw7s2y5i%2Fx7ErLuL5DO%2Fvf3EPVtj0zzx%2F3Dh9mew0iSl5nkLFvHU6ZSlRnHuR9yTFXiSK83x8B4mtiH4RcI4u06DGt3ca1SQm2B83W2V1bnCg7o%2BBnjs%2FdhLSI%2FG%2FlFwUoURW1Vfnt85DrF8YblaymrTN7zA3nLeBDO%2FSiEaFMC3g0UNadEl0xtuCsRNiClXjGW05lHg8FwjlQADz7c9BgY2wY7bveyce6o4IoxwzwdiQ1VbPArluRDwKmCu9v1vFIhokxBbRU6Q1GZpSmt%2B060v%2BMRtWn%2B%2B%2FizxHkVw6sOtRD3aKLYLL02kG8w0g%2FVBUZTuqqZaiAjUeB4ZFFgVhtoWI7m6N1qYNtxSt33Z%2F86LFsTkpc8R9s4VC%2FomVXFAzuJihqgiggqFcGuo3aFfvlAGkGlmY9nFrT2hjgNgA2gTjz5AerM6gg2AHnB2ON38ER2ML8e9PLVGL%2FZV3cCA3lHRoZ55g9oRn0X%2B6d0xfeiddTVK8DsdIaLozdCVxlQlQKFUWKjNu6GStrRF7%2BcXEYWQsZjqUrV8DjqUV2z%2FdfUA2X3cVauPd3bjdwO%2Bls5ZtS0G82%2Fiu0f3IBK%2BHD7cs8GyOpJKekwBv9qFUXQlMKyYjL8GOqUBHQylaJUnZyUon8Q177feZquGqbnhM2Z79%2Fq083jnoFnTC4uo4UzNExTOzda807erB7Z0EZfEBnhuYZWr7gRc0UnOSFMszZ0mFdJsMmpDgAlntsjc3zTI2hG9fAmyu4kJyxtUjda%2BZOsk3sEZVWOzC666trCwNkLUnN70D0Yvt8c3a1wv0tHHlV4%2Bihv9KLg72qltg7A07zUU6DK8Beq8dzBc6id2&X-Amz-Signature=abff600c08282a07a514cae16a9359ff0b1ec5210e713ebe5a57b62b7157b798&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
