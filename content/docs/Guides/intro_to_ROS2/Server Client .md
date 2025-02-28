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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STT3BWR%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC4cPRn13gLclqDY%2FescbKKq%2B7DRm8E19BdmVAHKN8ELgIgFzb5mDxMxmw1ox6Vn1PgAMkWSM%2FhFvVYbThz12%2Fhj9QqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKi%2BOVngWW8Iww5A9yrcA6otJsF68I%2Bwdf2rkcXIyYO4Frjf0EVeg%2BI6Rl14yKPHOqjQhw8JjvR8CuIAdVEljLEsMWLBsPM%2BWUkh9sUHWZXbuRId%2FtFl0N0n53GBzbgzZuJLog%2F3HmiQP51MVddcRUOAofLJdTifcGANwrGpXsuozp4%2FGYfePBOOPUM8tvJpqGOChAnghLDhJ5l5RVTHqszyU1LyoSeaR0uZFrkBBs6KcocQsW7WSxKFGh8dTvV%2BeP1PFD465fBYHH0vG%2B33kWOekJezwxHzQ9S9beOh2I5yJMA2KvbVM8CHMGbY5cJdD%2B7JIkKTPjB1P3g0Elke3xig4AFOeGMZJK1wHWmPrdbLbtmz8L%2BxFSm8%2Bua6rC0YWjx68wUJTMXvUfT1GGBMPUy%2FyQ0%2FB8d3bXzosYXCuUwuUAx1mvv0lB51V8j8B2YMi0lQ%2FluG8K3vbNPYvTPoZFjiclw4Tky3RpHljd2Ky%2FqnItStwocZ%2FVuca%2BAjYbrgZi0CV18qOBpk5nv3zUyI1hd0Id7BW8sACnE83uunatlNGRLqg%2F7cr4eMOC76O449BuhEY2mKfuKLhTb41wQ7QFP3Dkn8XHaplMyvH7z3QFUtyVamWimehHQdRBKSrfLXjSkrMqcvAuBbxqPGMIuMiL4GOqUBddtfCQZTzge7mgqy%2B2LivJeyoTT9KtWNClJtIQzCmpMTTYTUFwX5b4KyAEitHXuBHjdOYOZlqkcp9oitw9xPiYEECk2go98gBdWB94gleIgc276dzSEyXZHjRhl9Nbj5%2FrH%2B%2FlG1uC3TzO7BewtO3GFMSHrHnrSOaMVvEQgBM1O2i%2BoCjFGRZ3z0n5zoSHcQEfn8yy84wNZybG9Z6FJUbPcBrygX&X-Amz-Signature=53c4f0b2b729341d5792f624fad74e82bafe1ee258b4d9d0e24ab1ad9a8e0737&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STT3BWR%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC4cPRn13gLclqDY%2FescbKKq%2B7DRm8E19BdmVAHKN8ELgIgFzb5mDxMxmw1ox6Vn1PgAMkWSM%2FhFvVYbThz12%2Fhj9QqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKi%2BOVngWW8Iww5A9yrcA6otJsF68I%2Bwdf2rkcXIyYO4Frjf0EVeg%2BI6Rl14yKPHOqjQhw8JjvR8CuIAdVEljLEsMWLBsPM%2BWUkh9sUHWZXbuRId%2FtFl0N0n53GBzbgzZuJLog%2F3HmiQP51MVddcRUOAofLJdTifcGANwrGpXsuozp4%2FGYfePBOOPUM8tvJpqGOChAnghLDhJ5l5RVTHqszyU1LyoSeaR0uZFrkBBs6KcocQsW7WSxKFGh8dTvV%2BeP1PFD465fBYHH0vG%2B33kWOekJezwxHzQ9S9beOh2I5yJMA2KvbVM8CHMGbY5cJdD%2B7JIkKTPjB1P3g0Elke3xig4AFOeGMZJK1wHWmPrdbLbtmz8L%2BxFSm8%2Bua6rC0YWjx68wUJTMXvUfT1GGBMPUy%2FyQ0%2FB8d3bXzosYXCuUwuUAx1mvv0lB51V8j8B2YMi0lQ%2FluG8K3vbNPYvTPoZFjiclw4Tky3RpHljd2Ky%2FqnItStwocZ%2FVuca%2BAjYbrgZi0CV18qOBpk5nv3zUyI1hd0Id7BW8sACnE83uunatlNGRLqg%2F7cr4eMOC76O449BuhEY2mKfuKLhTb41wQ7QFP3Dkn8XHaplMyvH7z3QFUtyVamWimehHQdRBKSrfLXjSkrMqcvAuBbxqPGMIuMiL4GOqUBddtfCQZTzge7mgqy%2B2LivJeyoTT9KtWNClJtIQzCmpMTTYTUFwX5b4KyAEitHXuBHjdOYOZlqkcp9oitw9xPiYEECk2go98gBdWB94gleIgc276dzSEyXZHjRhl9Nbj5%2FrH%2B%2FlG1uC3TzO7BewtO3GFMSHrHnrSOaMVvEQgBM1O2i%2BoCjFGRZ3z0n5zoSHcQEfn8yy84wNZybG9Z6FJUbPcBrygX&X-Amz-Signature=4eca2297ae465f1a4f63a66bc898a491ad841a56369e0059bb5da3885c9f9857&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STT3BWR%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC4cPRn13gLclqDY%2FescbKKq%2B7DRm8E19BdmVAHKN8ELgIgFzb5mDxMxmw1ox6Vn1PgAMkWSM%2FhFvVYbThz12%2Fhj9QqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKi%2BOVngWW8Iww5A9yrcA6otJsF68I%2Bwdf2rkcXIyYO4Frjf0EVeg%2BI6Rl14yKPHOqjQhw8JjvR8CuIAdVEljLEsMWLBsPM%2BWUkh9sUHWZXbuRId%2FtFl0N0n53GBzbgzZuJLog%2F3HmiQP51MVddcRUOAofLJdTifcGANwrGpXsuozp4%2FGYfePBOOPUM8tvJpqGOChAnghLDhJ5l5RVTHqszyU1LyoSeaR0uZFrkBBs6KcocQsW7WSxKFGh8dTvV%2BeP1PFD465fBYHH0vG%2B33kWOekJezwxHzQ9S9beOh2I5yJMA2KvbVM8CHMGbY5cJdD%2B7JIkKTPjB1P3g0Elke3xig4AFOeGMZJK1wHWmPrdbLbtmz8L%2BxFSm8%2Bua6rC0YWjx68wUJTMXvUfT1GGBMPUy%2FyQ0%2FB8d3bXzosYXCuUwuUAx1mvv0lB51V8j8B2YMi0lQ%2FluG8K3vbNPYvTPoZFjiclw4Tky3RpHljd2Ky%2FqnItStwocZ%2FVuca%2BAjYbrgZi0CV18qOBpk5nv3zUyI1hd0Id7BW8sACnE83uunatlNGRLqg%2F7cr4eMOC76O449BuhEY2mKfuKLhTb41wQ7QFP3Dkn8XHaplMyvH7z3QFUtyVamWimehHQdRBKSrfLXjSkrMqcvAuBbxqPGMIuMiL4GOqUBddtfCQZTzge7mgqy%2B2LivJeyoTT9KtWNClJtIQzCmpMTTYTUFwX5b4KyAEitHXuBHjdOYOZlqkcp9oitw9xPiYEECk2go98gBdWB94gleIgc276dzSEyXZHjRhl9Nbj5%2FrH%2B%2FlG1uC3TzO7BewtO3GFMSHrHnrSOaMVvEQgBM1O2i%2BoCjFGRZ3z0n5zoSHcQEfn8yy84wNZybG9Z6FJUbPcBrygX&X-Amz-Signature=a60cbb0b94456f7b3056e7c00e8d6ad096a1d858a25c257136af80471a4c21f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STT3BWR%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC4cPRn13gLclqDY%2FescbKKq%2B7DRm8E19BdmVAHKN8ELgIgFzb5mDxMxmw1ox6Vn1PgAMkWSM%2FhFvVYbThz12%2Fhj9QqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKi%2BOVngWW8Iww5A9yrcA6otJsF68I%2Bwdf2rkcXIyYO4Frjf0EVeg%2BI6Rl14yKPHOqjQhw8JjvR8CuIAdVEljLEsMWLBsPM%2BWUkh9sUHWZXbuRId%2FtFl0N0n53GBzbgzZuJLog%2F3HmiQP51MVddcRUOAofLJdTifcGANwrGpXsuozp4%2FGYfePBOOPUM8tvJpqGOChAnghLDhJ5l5RVTHqszyU1LyoSeaR0uZFrkBBs6KcocQsW7WSxKFGh8dTvV%2BeP1PFD465fBYHH0vG%2B33kWOekJezwxHzQ9S9beOh2I5yJMA2KvbVM8CHMGbY5cJdD%2B7JIkKTPjB1P3g0Elke3xig4AFOeGMZJK1wHWmPrdbLbtmz8L%2BxFSm8%2Bua6rC0YWjx68wUJTMXvUfT1GGBMPUy%2FyQ0%2FB8d3bXzosYXCuUwuUAx1mvv0lB51V8j8B2YMi0lQ%2FluG8K3vbNPYvTPoZFjiclw4Tky3RpHljd2Ky%2FqnItStwocZ%2FVuca%2BAjYbrgZi0CV18qOBpk5nv3zUyI1hd0Id7BW8sACnE83uunatlNGRLqg%2F7cr4eMOC76O449BuhEY2mKfuKLhTb41wQ7QFP3Dkn8XHaplMyvH7z3QFUtyVamWimehHQdRBKSrfLXjSkrMqcvAuBbxqPGMIuMiL4GOqUBddtfCQZTzge7mgqy%2B2LivJeyoTT9KtWNClJtIQzCmpMTTYTUFwX5b4KyAEitHXuBHjdOYOZlqkcp9oitw9xPiYEECk2go98gBdWB94gleIgc276dzSEyXZHjRhl9Nbj5%2FrH%2B%2FlG1uC3TzO7BewtO3GFMSHrHnrSOaMVvEQgBM1O2i%2BoCjFGRZ3z0n5zoSHcQEfn8yy84wNZybG9Z6FJUbPcBrygX&X-Amz-Signature=e1d8255d1442f0e8dec40d72c3890448eab5dad6948d3007210bab0138829299&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STT3BWR%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC4cPRn13gLclqDY%2FescbKKq%2B7DRm8E19BdmVAHKN8ELgIgFzb5mDxMxmw1ox6Vn1PgAMkWSM%2FhFvVYbThz12%2Fhj9QqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKi%2BOVngWW8Iww5A9yrcA6otJsF68I%2Bwdf2rkcXIyYO4Frjf0EVeg%2BI6Rl14yKPHOqjQhw8JjvR8CuIAdVEljLEsMWLBsPM%2BWUkh9sUHWZXbuRId%2FtFl0N0n53GBzbgzZuJLog%2F3HmiQP51MVddcRUOAofLJdTifcGANwrGpXsuozp4%2FGYfePBOOPUM8tvJpqGOChAnghLDhJ5l5RVTHqszyU1LyoSeaR0uZFrkBBs6KcocQsW7WSxKFGh8dTvV%2BeP1PFD465fBYHH0vG%2B33kWOekJezwxHzQ9S9beOh2I5yJMA2KvbVM8CHMGbY5cJdD%2B7JIkKTPjB1P3g0Elke3xig4AFOeGMZJK1wHWmPrdbLbtmz8L%2BxFSm8%2Bua6rC0YWjx68wUJTMXvUfT1GGBMPUy%2FyQ0%2FB8d3bXzosYXCuUwuUAx1mvv0lB51V8j8B2YMi0lQ%2FluG8K3vbNPYvTPoZFjiclw4Tky3RpHljd2Ky%2FqnItStwocZ%2FVuca%2BAjYbrgZi0CV18qOBpk5nv3zUyI1hd0Id7BW8sACnE83uunatlNGRLqg%2F7cr4eMOC76O449BuhEY2mKfuKLhTb41wQ7QFP3Dkn8XHaplMyvH7z3QFUtyVamWimehHQdRBKSrfLXjSkrMqcvAuBbxqPGMIuMiL4GOqUBddtfCQZTzge7mgqy%2B2LivJeyoTT9KtWNClJtIQzCmpMTTYTUFwX5b4KyAEitHXuBHjdOYOZlqkcp9oitw9xPiYEECk2go98gBdWB94gleIgc276dzSEyXZHjRhl9Nbj5%2FrH%2B%2FlG1uC3TzO7BewtO3GFMSHrHnrSOaMVvEQgBM1O2i%2BoCjFGRZ3z0n5zoSHcQEfn8yy84wNZybG9Z6FJUbPcBrygX&X-Amz-Signature=95c076c27d4dd1ce2dd836cde475a6e835648ee9a72c4dd438f10b450e08ec33&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
