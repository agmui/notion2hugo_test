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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FZQ5XYY%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCY5Bu2j7FMxaDtCXSRVfdphMImJpX%2FvjztHll%2BCljNDQIgfFaUH%2FzDY8Iur1W5wM9TYBLuG2OYSy7QtjoJJ8iis48q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDEpvUekhXgP%2FTWSkyyrcA%2BzJ5e4SKSpUFpwMBt8UvGZqA4FSzoEipd9HaRwr0zo07S8CghianeWjtICr74MLKFNviV8vQIiNvkBxtj1E1PKN8AoloUY%2Fw0kB4mcObBpTDkAyzcS%2FhMhhomDpQ1nwxl9mQwKn0y8UkHjJKrbhjUvSVGyhP3MRMXB86uita140EIXRB%2Fn3v0s%2B3eA3Qw1ttA6PFRmCMIcvY4zXqcF6jw2C6GPIzDYH0lnSZnhRUKacfFys0XKOz3T%2BBM6aFt0akxBxdK5T7GLczG2%2Bj9PyfWm9lswWfDq7Q82mewZur4x5JbnH%2Bk2Nnum1lH7Ziip%2FpK8EbTowVOvR2dPTfgO5k%2FJSI2EAuzIW1kgPtRi9f%2BG9Hlp%2Fl8djtIJrTaBGCkeT4mKvG5%2B2bwkCr2gqiB7EoXct0uEjV8tgwWU%2FsHJnORq5SNyVT1Z3c4rmF2WZlrVokMpmxoIJdgqc3KX3c6%2Fg7iBqaSvu1DpXXXvTrfYrgtIJoXnElVvwHOxz1nyqcXuJDxpd8p%2F9BEmtE7ZZV0wG8njJaF5dFeqwnCx5Fb7FBW04nmVjRjAzn7i2qbhoKPO1yS1jfCs0CO8L5AQGGEx6tPD01HJ6AF7idAZGPgzmobN9zSza6FKNdlIzgzhBMISI6sIGOqUBViWVTtHRoRd3fVigIBe8fQS7Kqas91cNurH5oV8Bokb6LrVAXjHmCxNlh7TWKtdN2hoIKu34McJKfgFr68l72UjwUepjfGL9AoSnrT6xs2ef7grQsfesGEkS3Um3B7Uq2iyxN0BbfbHwTyHRDKU2PPaf14NFc3e5tFOJidZRmM6luKr%2FzslV53hilZ0C2Ua1G98dFfbLVYU3VxscC%2BP8twmroNqt&X-Amz-Signature=d527a93d0e4feac6fbbd3f2f645ce3463630866c1649e2150535504677aa478d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FZQ5XYY%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCY5Bu2j7FMxaDtCXSRVfdphMImJpX%2FvjztHll%2BCljNDQIgfFaUH%2FzDY8Iur1W5wM9TYBLuG2OYSy7QtjoJJ8iis48q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDEpvUekhXgP%2FTWSkyyrcA%2BzJ5e4SKSpUFpwMBt8UvGZqA4FSzoEipd9HaRwr0zo07S8CghianeWjtICr74MLKFNviV8vQIiNvkBxtj1E1PKN8AoloUY%2Fw0kB4mcObBpTDkAyzcS%2FhMhhomDpQ1nwxl9mQwKn0y8UkHjJKrbhjUvSVGyhP3MRMXB86uita140EIXRB%2Fn3v0s%2B3eA3Qw1ttA6PFRmCMIcvY4zXqcF6jw2C6GPIzDYH0lnSZnhRUKacfFys0XKOz3T%2BBM6aFt0akxBxdK5T7GLczG2%2Bj9PyfWm9lswWfDq7Q82mewZur4x5JbnH%2Bk2Nnum1lH7Ziip%2FpK8EbTowVOvR2dPTfgO5k%2FJSI2EAuzIW1kgPtRi9f%2BG9Hlp%2Fl8djtIJrTaBGCkeT4mKvG5%2B2bwkCr2gqiB7EoXct0uEjV8tgwWU%2FsHJnORq5SNyVT1Z3c4rmF2WZlrVokMpmxoIJdgqc3KX3c6%2Fg7iBqaSvu1DpXXXvTrfYrgtIJoXnElVvwHOxz1nyqcXuJDxpd8p%2F9BEmtE7ZZV0wG8njJaF5dFeqwnCx5Fb7FBW04nmVjRjAzn7i2qbhoKPO1yS1jfCs0CO8L5AQGGEx6tPD01HJ6AF7idAZGPgzmobN9zSza6FKNdlIzgzhBMISI6sIGOqUBViWVTtHRoRd3fVigIBe8fQS7Kqas91cNurH5oV8Bokb6LrVAXjHmCxNlh7TWKtdN2hoIKu34McJKfgFr68l72UjwUepjfGL9AoSnrT6xs2ef7grQsfesGEkS3Um3B7Uq2iyxN0BbfbHwTyHRDKU2PPaf14NFc3e5tFOJidZRmM6luKr%2FzslV53hilZ0C2Ua1G98dFfbLVYU3VxscC%2BP8twmroNqt&X-Amz-Signature=787d1049fc3afe2b5fdeb21583d1e97063f008f458313961e6bbb4f29130bf73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FZQ5XYY%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCY5Bu2j7FMxaDtCXSRVfdphMImJpX%2FvjztHll%2BCljNDQIgfFaUH%2FzDY8Iur1W5wM9TYBLuG2OYSy7QtjoJJ8iis48q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDEpvUekhXgP%2FTWSkyyrcA%2BzJ5e4SKSpUFpwMBt8UvGZqA4FSzoEipd9HaRwr0zo07S8CghianeWjtICr74MLKFNviV8vQIiNvkBxtj1E1PKN8AoloUY%2Fw0kB4mcObBpTDkAyzcS%2FhMhhomDpQ1nwxl9mQwKn0y8UkHjJKrbhjUvSVGyhP3MRMXB86uita140EIXRB%2Fn3v0s%2B3eA3Qw1ttA6PFRmCMIcvY4zXqcF6jw2C6GPIzDYH0lnSZnhRUKacfFys0XKOz3T%2BBM6aFt0akxBxdK5T7GLczG2%2Bj9PyfWm9lswWfDq7Q82mewZur4x5JbnH%2Bk2Nnum1lH7Ziip%2FpK8EbTowVOvR2dPTfgO5k%2FJSI2EAuzIW1kgPtRi9f%2BG9Hlp%2Fl8djtIJrTaBGCkeT4mKvG5%2B2bwkCr2gqiB7EoXct0uEjV8tgwWU%2FsHJnORq5SNyVT1Z3c4rmF2WZlrVokMpmxoIJdgqc3KX3c6%2Fg7iBqaSvu1DpXXXvTrfYrgtIJoXnElVvwHOxz1nyqcXuJDxpd8p%2F9BEmtE7ZZV0wG8njJaF5dFeqwnCx5Fb7FBW04nmVjRjAzn7i2qbhoKPO1yS1jfCs0CO8L5AQGGEx6tPD01HJ6AF7idAZGPgzmobN9zSza6FKNdlIzgzhBMISI6sIGOqUBViWVTtHRoRd3fVigIBe8fQS7Kqas91cNurH5oV8Bokb6LrVAXjHmCxNlh7TWKtdN2hoIKu34McJKfgFr68l72UjwUepjfGL9AoSnrT6xs2ef7grQsfesGEkS3Um3B7Uq2iyxN0BbfbHwTyHRDKU2PPaf14NFc3e5tFOJidZRmM6luKr%2FzslV53hilZ0C2Ua1G98dFfbLVYU3VxscC%2BP8twmroNqt&X-Amz-Signature=c76e5e08ea0ca64c1472cedb0e871367155686c46c461e9ff659ee70df570849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FZQ5XYY%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCY5Bu2j7FMxaDtCXSRVfdphMImJpX%2FvjztHll%2BCljNDQIgfFaUH%2FzDY8Iur1W5wM9TYBLuG2OYSy7QtjoJJ8iis48q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDEpvUekhXgP%2FTWSkyyrcA%2BzJ5e4SKSpUFpwMBt8UvGZqA4FSzoEipd9HaRwr0zo07S8CghianeWjtICr74MLKFNviV8vQIiNvkBxtj1E1PKN8AoloUY%2Fw0kB4mcObBpTDkAyzcS%2FhMhhomDpQ1nwxl9mQwKn0y8UkHjJKrbhjUvSVGyhP3MRMXB86uita140EIXRB%2Fn3v0s%2B3eA3Qw1ttA6PFRmCMIcvY4zXqcF6jw2C6GPIzDYH0lnSZnhRUKacfFys0XKOz3T%2BBM6aFt0akxBxdK5T7GLczG2%2Bj9PyfWm9lswWfDq7Q82mewZur4x5JbnH%2Bk2Nnum1lH7Ziip%2FpK8EbTowVOvR2dPTfgO5k%2FJSI2EAuzIW1kgPtRi9f%2BG9Hlp%2Fl8djtIJrTaBGCkeT4mKvG5%2B2bwkCr2gqiB7EoXct0uEjV8tgwWU%2FsHJnORq5SNyVT1Z3c4rmF2WZlrVokMpmxoIJdgqc3KX3c6%2Fg7iBqaSvu1DpXXXvTrfYrgtIJoXnElVvwHOxz1nyqcXuJDxpd8p%2F9BEmtE7ZZV0wG8njJaF5dFeqwnCx5Fb7FBW04nmVjRjAzn7i2qbhoKPO1yS1jfCs0CO8L5AQGGEx6tPD01HJ6AF7idAZGPgzmobN9zSza6FKNdlIzgzhBMISI6sIGOqUBViWVTtHRoRd3fVigIBe8fQS7Kqas91cNurH5oV8Bokb6LrVAXjHmCxNlh7TWKtdN2hoIKu34McJKfgFr68l72UjwUepjfGL9AoSnrT6xs2ef7grQsfesGEkS3Um3B7Uq2iyxN0BbfbHwTyHRDKU2PPaf14NFc3e5tFOJidZRmM6luKr%2FzslV53hilZ0C2Ua1G98dFfbLVYU3VxscC%2BP8twmroNqt&X-Amz-Signature=aac395e1cd08dea1c0c9222d6a758db3dc4f76db41a00779331325843ce64e95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FZQ5XYY%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCY5Bu2j7FMxaDtCXSRVfdphMImJpX%2FvjztHll%2BCljNDQIgfFaUH%2FzDY8Iur1W5wM9TYBLuG2OYSy7QtjoJJ8iis48q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDEpvUekhXgP%2FTWSkyyrcA%2BzJ5e4SKSpUFpwMBt8UvGZqA4FSzoEipd9HaRwr0zo07S8CghianeWjtICr74MLKFNviV8vQIiNvkBxtj1E1PKN8AoloUY%2Fw0kB4mcObBpTDkAyzcS%2FhMhhomDpQ1nwxl9mQwKn0y8UkHjJKrbhjUvSVGyhP3MRMXB86uita140EIXRB%2Fn3v0s%2B3eA3Qw1ttA6PFRmCMIcvY4zXqcF6jw2C6GPIzDYH0lnSZnhRUKacfFys0XKOz3T%2BBM6aFt0akxBxdK5T7GLczG2%2Bj9PyfWm9lswWfDq7Q82mewZur4x5JbnH%2Bk2Nnum1lH7Ziip%2FpK8EbTowVOvR2dPTfgO5k%2FJSI2EAuzIW1kgPtRi9f%2BG9Hlp%2Fl8djtIJrTaBGCkeT4mKvG5%2B2bwkCr2gqiB7EoXct0uEjV8tgwWU%2FsHJnORq5SNyVT1Z3c4rmF2WZlrVokMpmxoIJdgqc3KX3c6%2Fg7iBqaSvu1DpXXXvTrfYrgtIJoXnElVvwHOxz1nyqcXuJDxpd8p%2F9BEmtE7ZZV0wG8njJaF5dFeqwnCx5Fb7FBW04nmVjRjAzn7i2qbhoKPO1yS1jfCs0CO8L5AQGGEx6tPD01HJ6AF7idAZGPgzmobN9zSza6FKNdlIzgzhBMISI6sIGOqUBViWVTtHRoRd3fVigIBe8fQS7Kqas91cNurH5oV8Bokb6LrVAXjHmCxNlh7TWKtdN2hoIKu34McJKfgFr68l72UjwUepjfGL9AoSnrT6xs2ef7grQsfesGEkS3Um3B7Uq2iyxN0BbfbHwTyHRDKU2PPaf14NFc3e5tFOJidZRmM6luKr%2FzslV53hilZ0C2Ua1G98dFfbLVYU3VxscC%2BP8twmroNqt&X-Amz-Signature=0a6a63bdf51e4567e0640059d8d103446cefc2686bccb4ad3fde890ee4247c74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
