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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDIZQ2VK%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCShksqhQVvBpOLk5vQ00JIUPYS53TKGwBednOcNG0zjQIhANfKciAeBmeQV1G%2BL7rFQFO%2BeR%2F6OVD59z6ZEBcdRN%2BnKv8DCFgQABoMNjM3NDIzMTgzODA1IgwIFvoetjtRKEhu2tMq3AMojjny5N4%2F3DC0ECNQ5c%2Fq6fSWJDAnVWXNPgFotmZkFFu9gwH24Z5VMAYjvzrOoz84ZOJiv5GnG7EW9FEZLDosLJTk2Rvqq0Rk%2FvMrRJLwLbHKxzlycv7sMZpfir4If19Nzf1T9oRtwDMP4o9sbHF0baZKfuGZIRjbSzNRc0JTQCtSybge3iWRCSGZvnf5uh%2BFZqV8XKRubP5R1Uz8RUxu2mkceKW1kTSPzfHXlT86qx1OCVHkWEypqIhkIHlzgBQ0ZJDq64UscSrm%2FQGJgly1%2F9brcbp4Yi8DE83xQW4pENDwdsxPZtNzPbAGbhnIaDeUAMCrB3trSDbdwB0SXnse%2BSgERd8P1UjUp0IWhObvtDjHGuTyfYf4ycp4Nw5WtJuUP2GqJklLI3FPw446KPRCpHDITaxtAtxqsl2w4znGlzkEorWrzkQI0V93kHWh4oVFlWZ1YqNXRC6MebKlcu%2FbgJHqc%2FOyXyZH3hO4SRXVz6ynGpeWdMC7eQ1GEkR4TIjck46pZCImvTVLQb99elSOtT0Vj%2FD3zt0Z6%2BAOQ7TJ2kN3CnoMhHh%2FdEU915R00nH7vZKb9gB%2BQP11dgOKpmjnHIpz60ig2ljt4bRSQjrPZ0bX12w8FDJQEo2cTDCy4K%2B%2BBjqkAQurjs%2FYYgve%2FYvWDZFwjjwriU%2BDZnWbnW1fB2uW6%2B0zZlNCaKsCk5CT7Tc71ANDBhYUjoaPFOLExdKPFPAK1o0%2F4M66Sb7RCP1a1oe1clQkbCJzfx6QSr2CWT%2FEFr3VOfo3xDoa82pRZTlJvtI13rv9WQPUI700Mn24aZfN4G%2FeGBgpqSKhYEyxD79ffit3%2FcpjhNjb3wwmwbWLGM5Es4r7rSE2&X-Amz-Signature=33dc7aa2ad58c4fd432d024236116ca6a68009d4e99bd7551a3ac9933d85c15b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDIZQ2VK%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCShksqhQVvBpOLk5vQ00JIUPYS53TKGwBednOcNG0zjQIhANfKciAeBmeQV1G%2BL7rFQFO%2BeR%2F6OVD59z6ZEBcdRN%2BnKv8DCFgQABoMNjM3NDIzMTgzODA1IgwIFvoetjtRKEhu2tMq3AMojjny5N4%2F3DC0ECNQ5c%2Fq6fSWJDAnVWXNPgFotmZkFFu9gwH24Z5VMAYjvzrOoz84ZOJiv5GnG7EW9FEZLDosLJTk2Rvqq0Rk%2FvMrRJLwLbHKxzlycv7sMZpfir4If19Nzf1T9oRtwDMP4o9sbHF0baZKfuGZIRjbSzNRc0JTQCtSybge3iWRCSGZvnf5uh%2BFZqV8XKRubP5R1Uz8RUxu2mkceKW1kTSPzfHXlT86qx1OCVHkWEypqIhkIHlzgBQ0ZJDq64UscSrm%2FQGJgly1%2F9brcbp4Yi8DE83xQW4pENDwdsxPZtNzPbAGbhnIaDeUAMCrB3trSDbdwB0SXnse%2BSgERd8P1UjUp0IWhObvtDjHGuTyfYf4ycp4Nw5WtJuUP2GqJklLI3FPw446KPRCpHDITaxtAtxqsl2w4znGlzkEorWrzkQI0V93kHWh4oVFlWZ1YqNXRC6MebKlcu%2FbgJHqc%2FOyXyZH3hO4SRXVz6ynGpeWdMC7eQ1GEkR4TIjck46pZCImvTVLQb99elSOtT0Vj%2FD3zt0Z6%2BAOQ7TJ2kN3CnoMhHh%2FdEU915R00nH7vZKb9gB%2BQP11dgOKpmjnHIpz60ig2ljt4bRSQjrPZ0bX12w8FDJQEo2cTDCy4K%2B%2BBjqkAQurjs%2FYYgve%2FYvWDZFwjjwriU%2BDZnWbnW1fB2uW6%2B0zZlNCaKsCk5CT7Tc71ANDBhYUjoaPFOLExdKPFPAK1o0%2F4M66Sb7RCP1a1oe1clQkbCJzfx6QSr2CWT%2FEFr3VOfo3xDoa82pRZTlJvtI13rv9WQPUI700Mn24aZfN4G%2FeGBgpqSKhYEyxD79ffit3%2FcpjhNjb3wwmwbWLGM5Es4r7rSE2&X-Amz-Signature=d589d7130a5330b94b68e53e82bbbb6ca5c60d653dffef38cdf6dc3b09336bbd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDIZQ2VK%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCShksqhQVvBpOLk5vQ00JIUPYS53TKGwBednOcNG0zjQIhANfKciAeBmeQV1G%2BL7rFQFO%2BeR%2F6OVD59z6ZEBcdRN%2BnKv8DCFgQABoMNjM3NDIzMTgzODA1IgwIFvoetjtRKEhu2tMq3AMojjny5N4%2F3DC0ECNQ5c%2Fq6fSWJDAnVWXNPgFotmZkFFu9gwH24Z5VMAYjvzrOoz84ZOJiv5GnG7EW9FEZLDosLJTk2Rvqq0Rk%2FvMrRJLwLbHKxzlycv7sMZpfir4If19Nzf1T9oRtwDMP4o9sbHF0baZKfuGZIRjbSzNRc0JTQCtSybge3iWRCSGZvnf5uh%2BFZqV8XKRubP5R1Uz8RUxu2mkceKW1kTSPzfHXlT86qx1OCVHkWEypqIhkIHlzgBQ0ZJDq64UscSrm%2FQGJgly1%2F9brcbp4Yi8DE83xQW4pENDwdsxPZtNzPbAGbhnIaDeUAMCrB3trSDbdwB0SXnse%2BSgERd8P1UjUp0IWhObvtDjHGuTyfYf4ycp4Nw5WtJuUP2GqJklLI3FPw446KPRCpHDITaxtAtxqsl2w4znGlzkEorWrzkQI0V93kHWh4oVFlWZ1YqNXRC6MebKlcu%2FbgJHqc%2FOyXyZH3hO4SRXVz6ynGpeWdMC7eQ1GEkR4TIjck46pZCImvTVLQb99elSOtT0Vj%2FD3zt0Z6%2BAOQ7TJ2kN3CnoMhHh%2FdEU915R00nH7vZKb9gB%2BQP11dgOKpmjnHIpz60ig2ljt4bRSQjrPZ0bX12w8FDJQEo2cTDCy4K%2B%2BBjqkAQurjs%2FYYgve%2FYvWDZFwjjwriU%2BDZnWbnW1fB2uW6%2B0zZlNCaKsCk5CT7Tc71ANDBhYUjoaPFOLExdKPFPAK1o0%2F4M66Sb7RCP1a1oe1clQkbCJzfx6QSr2CWT%2FEFr3VOfo3xDoa82pRZTlJvtI13rv9WQPUI700Mn24aZfN4G%2FeGBgpqSKhYEyxD79ffit3%2FcpjhNjb3wwmwbWLGM5Es4r7rSE2&X-Amz-Signature=bd4e7781eee6f18ac9e955c27a99a24590b1c99b5b608d5ca370e85122782aa0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDIZQ2VK%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCShksqhQVvBpOLk5vQ00JIUPYS53TKGwBednOcNG0zjQIhANfKciAeBmeQV1G%2BL7rFQFO%2BeR%2F6OVD59z6ZEBcdRN%2BnKv8DCFgQABoMNjM3NDIzMTgzODA1IgwIFvoetjtRKEhu2tMq3AMojjny5N4%2F3DC0ECNQ5c%2Fq6fSWJDAnVWXNPgFotmZkFFu9gwH24Z5VMAYjvzrOoz84ZOJiv5GnG7EW9FEZLDosLJTk2Rvqq0Rk%2FvMrRJLwLbHKxzlycv7sMZpfir4If19Nzf1T9oRtwDMP4o9sbHF0baZKfuGZIRjbSzNRc0JTQCtSybge3iWRCSGZvnf5uh%2BFZqV8XKRubP5R1Uz8RUxu2mkceKW1kTSPzfHXlT86qx1OCVHkWEypqIhkIHlzgBQ0ZJDq64UscSrm%2FQGJgly1%2F9brcbp4Yi8DE83xQW4pENDwdsxPZtNzPbAGbhnIaDeUAMCrB3trSDbdwB0SXnse%2BSgERd8P1UjUp0IWhObvtDjHGuTyfYf4ycp4Nw5WtJuUP2GqJklLI3FPw446KPRCpHDITaxtAtxqsl2w4znGlzkEorWrzkQI0V93kHWh4oVFlWZ1YqNXRC6MebKlcu%2FbgJHqc%2FOyXyZH3hO4SRXVz6ynGpeWdMC7eQ1GEkR4TIjck46pZCImvTVLQb99elSOtT0Vj%2FD3zt0Z6%2BAOQ7TJ2kN3CnoMhHh%2FdEU915R00nH7vZKb9gB%2BQP11dgOKpmjnHIpz60ig2ljt4bRSQjrPZ0bX12w8FDJQEo2cTDCy4K%2B%2BBjqkAQurjs%2FYYgve%2FYvWDZFwjjwriU%2BDZnWbnW1fB2uW6%2B0zZlNCaKsCk5CT7Tc71ANDBhYUjoaPFOLExdKPFPAK1o0%2F4M66Sb7RCP1a1oe1clQkbCJzfx6QSr2CWT%2FEFr3VOfo3xDoa82pRZTlJvtI13rv9WQPUI700Mn24aZfN4G%2FeGBgpqSKhYEyxD79ffit3%2FcpjhNjb3wwmwbWLGM5Es4r7rSE2&X-Amz-Signature=1b9d2238c8b8d1c4ee04416a408d0f40d77392a814ad99a675c7eb58156bb4f3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDIZQ2VK%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCShksqhQVvBpOLk5vQ00JIUPYS53TKGwBednOcNG0zjQIhANfKciAeBmeQV1G%2BL7rFQFO%2BeR%2F6OVD59z6ZEBcdRN%2BnKv8DCFgQABoMNjM3NDIzMTgzODA1IgwIFvoetjtRKEhu2tMq3AMojjny5N4%2F3DC0ECNQ5c%2Fq6fSWJDAnVWXNPgFotmZkFFu9gwH24Z5VMAYjvzrOoz84ZOJiv5GnG7EW9FEZLDosLJTk2Rvqq0Rk%2FvMrRJLwLbHKxzlycv7sMZpfir4If19Nzf1T9oRtwDMP4o9sbHF0baZKfuGZIRjbSzNRc0JTQCtSybge3iWRCSGZvnf5uh%2BFZqV8XKRubP5R1Uz8RUxu2mkceKW1kTSPzfHXlT86qx1OCVHkWEypqIhkIHlzgBQ0ZJDq64UscSrm%2FQGJgly1%2F9brcbp4Yi8DE83xQW4pENDwdsxPZtNzPbAGbhnIaDeUAMCrB3trSDbdwB0SXnse%2BSgERd8P1UjUp0IWhObvtDjHGuTyfYf4ycp4Nw5WtJuUP2GqJklLI3FPw446KPRCpHDITaxtAtxqsl2w4znGlzkEorWrzkQI0V93kHWh4oVFlWZ1YqNXRC6MebKlcu%2FbgJHqc%2FOyXyZH3hO4SRXVz6ynGpeWdMC7eQ1GEkR4TIjck46pZCImvTVLQb99elSOtT0Vj%2FD3zt0Z6%2BAOQ7TJ2kN3CnoMhHh%2FdEU915R00nH7vZKb9gB%2BQP11dgOKpmjnHIpz60ig2ljt4bRSQjrPZ0bX12w8FDJQEo2cTDCy4K%2B%2BBjqkAQurjs%2FYYgve%2FYvWDZFwjjwriU%2BDZnWbnW1fB2uW6%2B0zZlNCaKsCk5CT7Tc71ANDBhYUjoaPFOLExdKPFPAK1o0%2F4M66Sb7RCP1a1oe1clQkbCJzfx6QSr2CWT%2FEFr3VOfo3xDoa82pRZTlJvtI13rv9WQPUI700Mn24aZfN4G%2FeGBgpqSKhYEyxD79ffit3%2FcpjhNjb3wwmwbWLGM5Es4r7rSE2&X-Amz-Signature=fa5c53eabbc99d1f8b0bb7a0aebca072e5155f4851f9d143197fac3ffa4d367f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
