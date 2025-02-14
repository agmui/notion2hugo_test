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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMREN7IE%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCKJ%2BOhZw01oE3E6ex7AdmPQAKeQNeMiR6Q5xi6PJeyFwIhAMbvHXpYeRhM6Dm8LuBR5cwPtds6FC08MrZYqoaEZprjKv8DCCkQABoMNjM3NDIzMTgzODA1IgydIWfO%2BAJ6jNQWEZ0q3APLEWIU%2Bt4LA7Nzny5pb1r4JMsCMNE92PPHggikzp2x636ooTCHssptqebOThUm2LyXaquYqoeaTGp3yIjJD%2FZozcS6yoi%2By7XZg%2F%2F75ziPCnClQ3YlzBB%2BsHofCbollYIw7c%2F0XMpAwE8hQklkiSLlYnyQEFiDDIIubwELrta05b1VDoEl3djqXcTXdehoEJZqwu2k%2FSp%2FBc2zmhObGkbIXkUIYXxDXAnf3c%2BsvU8Gt0n2tNhOM6QtGOvUe1RxW2sEfkgQSFahZpK7L1KxU%2FhCnZ54LSKiDOVm0mvRADtPBOirHnBIRWj%2BCM%2Bqsg1gSjc4AZsYHGKY4McbiD5ggWdvr%2Facfa8Ncl%2FK4nDgjyO3LymxIMXKuXWKhEhOpDME8ItMpItvMAEB8uqco1AnQB8BKgioRS8BTIO9DdTGfaQc1EKtDksBQlNvP5Vo0fqYoVYnILT8ycPuFG8L0FAeLnFyl2YymX2YqxBEnfNnZnd0kFnsPCaDjiUNEAgwdBrCY0DQ8%2B%2BAWcPA86jz%2B4AqGWmcfBzzySNdMeAUbYVCuAZkpuyNtDidrFZRE%2BUT66YcY9UfveOP2E2k8kW44ffmi0t08HwyMDMT%2FiM4%2BGjAyF1P3fW55xw4oxtYPc9jZTDj6bu9BjqkAR5p18Yo5ljFi%2FK53H%2BwLcBMFACAMuc8oGRSlbVhaG4cTLpCvhoK9yjYr6hJyDQiqbo8hBWvXJu5YkY8CPp1GFPDMzoCaBK0IZFRdWAOl%2BKUS67qNYBvnrp9IaUJD1e3itA06k2B2vEU1F5r5KsmKbqLM2CoISRGCgraAmAVRB7rCbOqXtO9KfFeHQaNX3I%2FvL0ln7sl8SompEY1umV%2Fn68AsDfO&X-Amz-Signature=567937524e4b2cc3b97845ba2d65cfcdf634b0893b0bef46816a17a5ad6f673f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMREN7IE%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCKJ%2BOhZw01oE3E6ex7AdmPQAKeQNeMiR6Q5xi6PJeyFwIhAMbvHXpYeRhM6Dm8LuBR5cwPtds6FC08MrZYqoaEZprjKv8DCCkQABoMNjM3NDIzMTgzODA1IgydIWfO%2BAJ6jNQWEZ0q3APLEWIU%2Bt4LA7Nzny5pb1r4JMsCMNE92PPHggikzp2x636ooTCHssptqebOThUm2LyXaquYqoeaTGp3yIjJD%2FZozcS6yoi%2By7XZg%2F%2F75ziPCnClQ3YlzBB%2BsHofCbollYIw7c%2F0XMpAwE8hQklkiSLlYnyQEFiDDIIubwELrta05b1VDoEl3djqXcTXdehoEJZqwu2k%2FSp%2FBc2zmhObGkbIXkUIYXxDXAnf3c%2BsvU8Gt0n2tNhOM6QtGOvUe1RxW2sEfkgQSFahZpK7L1KxU%2FhCnZ54LSKiDOVm0mvRADtPBOirHnBIRWj%2BCM%2Bqsg1gSjc4AZsYHGKY4McbiD5ggWdvr%2Facfa8Ncl%2FK4nDgjyO3LymxIMXKuXWKhEhOpDME8ItMpItvMAEB8uqco1AnQB8BKgioRS8BTIO9DdTGfaQc1EKtDksBQlNvP5Vo0fqYoVYnILT8ycPuFG8L0FAeLnFyl2YymX2YqxBEnfNnZnd0kFnsPCaDjiUNEAgwdBrCY0DQ8%2B%2BAWcPA86jz%2B4AqGWmcfBzzySNdMeAUbYVCuAZkpuyNtDidrFZRE%2BUT66YcY9UfveOP2E2k8kW44ffmi0t08HwyMDMT%2FiM4%2BGjAyF1P3fW55xw4oxtYPc9jZTDj6bu9BjqkAR5p18Yo5ljFi%2FK53H%2BwLcBMFACAMuc8oGRSlbVhaG4cTLpCvhoK9yjYr6hJyDQiqbo8hBWvXJu5YkY8CPp1GFPDMzoCaBK0IZFRdWAOl%2BKUS67qNYBvnrp9IaUJD1e3itA06k2B2vEU1F5r5KsmKbqLM2CoISRGCgraAmAVRB7rCbOqXtO9KfFeHQaNX3I%2FvL0ln7sl8SompEY1umV%2Fn68AsDfO&X-Amz-Signature=7e6e15246648c8619f2971c9bbc2e429b91fc5f49eaf146afec53b5032dfc815&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMREN7IE%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCKJ%2BOhZw01oE3E6ex7AdmPQAKeQNeMiR6Q5xi6PJeyFwIhAMbvHXpYeRhM6Dm8LuBR5cwPtds6FC08MrZYqoaEZprjKv8DCCkQABoMNjM3NDIzMTgzODA1IgydIWfO%2BAJ6jNQWEZ0q3APLEWIU%2Bt4LA7Nzny5pb1r4JMsCMNE92PPHggikzp2x636ooTCHssptqebOThUm2LyXaquYqoeaTGp3yIjJD%2FZozcS6yoi%2By7XZg%2F%2F75ziPCnClQ3YlzBB%2BsHofCbollYIw7c%2F0XMpAwE8hQklkiSLlYnyQEFiDDIIubwELrta05b1VDoEl3djqXcTXdehoEJZqwu2k%2FSp%2FBc2zmhObGkbIXkUIYXxDXAnf3c%2BsvU8Gt0n2tNhOM6QtGOvUe1RxW2sEfkgQSFahZpK7L1KxU%2FhCnZ54LSKiDOVm0mvRADtPBOirHnBIRWj%2BCM%2Bqsg1gSjc4AZsYHGKY4McbiD5ggWdvr%2Facfa8Ncl%2FK4nDgjyO3LymxIMXKuXWKhEhOpDME8ItMpItvMAEB8uqco1AnQB8BKgioRS8BTIO9DdTGfaQc1EKtDksBQlNvP5Vo0fqYoVYnILT8ycPuFG8L0FAeLnFyl2YymX2YqxBEnfNnZnd0kFnsPCaDjiUNEAgwdBrCY0DQ8%2B%2BAWcPA86jz%2B4AqGWmcfBzzySNdMeAUbYVCuAZkpuyNtDidrFZRE%2BUT66YcY9UfveOP2E2k8kW44ffmi0t08HwyMDMT%2FiM4%2BGjAyF1P3fW55xw4oxtYPc9jZTDj6bu9BjqkAR5p18Yo5ljFi%2FK53H%2BwLcBMFACAMuc8oGRSlbVhaG4cTLpCvhoK9yjYr6hJyDQiqbo8hBWvXJu5YkY8CPp1GFPDMzoCaBK0IZFRdWAOl%2BKUS67qNYBvnrp9IaUJD1e3itA06k2B2vEU1F5r5KsmKbqLM2CoISRGCgraAmAVRB7rCbOqXtO9KfFeHQaNX3I%2FvL0ln7sl8SompEY1umV%2Fn68AsDfO&X-Amz-Signature=7467984998cfdf3cc3d06e7cbcd2fdf496a00000dd4f263881309e3af3216d64&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMREN7IE%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCKJ%2BOhZw01oE3E6ex7AdmPQAKeQNeMiR6Q5xi6PJeyFwIhAMbvHXpYeRhM6Dm8LuBR5cwPtds6FC08MrZYqoaEZprjKv8DCCkQABoMNjM3NDIzMTgzODA1IgydIWfO%2BAJ6jNQWEZ0q3APLEWIU%2Bt4LA7Nzny5pb1r4JMsCMNE92PPHggikzp2x636ooTCHssptqebOThUm2LyXaquYqoeaTGp3yIjJD%2FZozcS6yoi%2By7XZg%2F%2F75ziPCnClQ3YlzBB%2BsHofCbollYIw7c%2F0XMpAwE8hQklkiSLlYnyQEFiDDIIubwELrta05b1VDoEl3djqXcTXdehoEJZqwu2k%2FSp%2FBc2zmhObGkbIXkUIYXxDXAnf3c%2BsvU8Gt0n2tNhOM6QtGOvUe1RxW2sEfkgQSFahZpK7L1KxU%2FhCnZ54LSKiDOVm0mvRADtPBOirHnBIRWj%2BCM%2Bqsg1gSjc4AZsYHGKY4McbiD5ggWdvr%2Facfa8Ncl%2FK4nDgjyO3LymxIMXKuXWKhEhOpDME8ItMpItvMAEB8uqco1AnQB8BKgioRS8BTIO9DdTGfaQc1EKtDksBQlNvP5Vo0fqYoVYnILT8ycPuFG8L0FAeLnFyl2YymX2YqxBEnfNnZnd0kFnsPCaDjiUNEAgwdBrCY0DQ8%2B%2BAWcPA86jz%2B4AqGWmcfBzzySNdMeAUbYVCuAZkpuyNtDidrFZRE%2BUT66YcY9UfveOP2E2k8kW44ffmi0t08HwyMDMT%2FiM4%2BGjAyF1P3fW55xw4oxtYPc9jZTDj6bu9BjqkAR5p18Yo5ljFi%2FK53H%2BwLcBMFACAMuc8oGRSlbVhaG4cTLpCvhoK9yjYr6hJyDQiqbo8hBWvXJu5YkY8CPp1GFPDMzoCaBK0IZFRdWAOl%2BKUS67qNYBvnrp9IaUJD1e3itA06k2B2vEU1F5r5KsmKbqLM2CoISRGCgraAmAVRB7rCbOqXtO9KfFeHQaNX3I%2FvL0ln7sl8SompEY1umV%2Fn68AsDfO&X-Amz-Signature=4a2ab9cc22468590582ccb8d94d437ac8feabbb16e6ebc2fe3382b08c74adffb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMREN7IE%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCKJ%2BOhZw01oE3E6ex7AdmPQAKeQNeMiR6Q5xi6PJeyFwIhAMbvHXpYeRhM6Dm8LuBR5cwPtds6FC08MrZYqoaEZprjKv8DCCkQABoMNjM3NDIzMTgzODA1IgydIWfO%2BAJ6jNQWEZ0q3APLEWIU%2Bt4LA7Nzny5pb1r4JMsCMNE92PPHggikzp2x636ooTCHssptqebOThUm2LyXaquYqoeaTGp3yIjJD%2FZozcS6yoi%2By7XZg%2F%2F75ziPCnClQ3YlzBB%2BsHofCbollYIw7c%2F0XMpAwE8hQklkiSLlYnyQEFiDDIIubwELrta05b1VDoEl3djqXcTXdehoEJZqwu2k%2FSp%2FBc2zmhObGkbIXkUIYXxDXAnf3c%2BsvU8Gt0n2tNhOM6QtGOvUe1RxW2sEfkgQSFahZpK7L1KxU%2FhCnZ54LSKiDOVm0mvRADtPBOirHnBIRWj%2BCM%2Bqsg1gSjc4AZsYHGKY4McbiD5ggWdvr%2Facfa8Ncl%2FK4nDgjyO3LymxIMXKuXWKhEhOpDME8ItMpItvMAEB8uqco1AnQB8BKgioRS8BTIO9DdTGfaQc1EKtDksBQlNvP5Vo0fqYoVYnILT8ycPuFG8L0FAeLnFyl2YymX2YqxBEnfNnZnd0kFnsPCaDjiUNEAgwdBrCY0DQ8%2B%2BAWcPA86jz%2B4AqGWmcfBzzySNdMeAUbYVCuAZkpuyNtDidrFZRE%2BUT66YcY9UfveOP2E2k8kW44ffmi0t08HwyMDMT%2FiM4%2BGjAyF1P3fW55xw4oxtYPc9jZTDj6bu9BjqkAR5p18Yo5ljFi%2FK53H%2BwLcBMFACAMuc8oGRSlbVhaG4cTLpCvhoK9yjYr6hJyDQiqbo8hBWvXJu5YkY8CPp1GFPDMzoCaBK0IZFRdWAOl%2BKUS67qNYBvnrp9IaUJD1e3itA06k2B2vEU1F5r5KsmKbqLM2CoISRGCgraAmAVRB7rCbOqXtO9KfFeHQaNX3I%2FvL0ln7sl8SompEY1umV%2Fn68AsDfO&X-Amz-Signature=4570bc0c70853bb4f0ce7ba30ddbb1bf14cf4283d978da6ac3303285396b4581&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
