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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPT2GTCH%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDKP4E1qaT%2B0t%2BxxWj7TcLD81mX8gUnG2Cq%2Fw2K5EjNngIhAKcFWlx2J9sYxpeWiXF0rwm7ZXYNBZgwfkMiw%2F0tsGxxKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyybZe%2BbTEbjjRc%2Booq3AMB%2FkKw9Oh0xw0156IFRsjZhAce%2FFYuj3%2B%2Bda5%2F43yDLQSnVQ08JWRjzBcxyxTD9BNk3JW394y9ebPg%2FLb8GM0A1tofNYm7zTJ4vl31h8qbij0ZsirozzNqP8SbGTZJGNhl%2FnOQMrKfeKNtmhL4H4noywIIiOSEtHgD0Ff%2FWWlvJoY8S%2BRi9MzoGRjt6tVQTQMx2sycsLiMl1ZTzL10zDvS9W%2B8WVmSzHkmULdCsjQlDogpjyrtSFLWCM3GnYnQcobvnqhDRpWQokFeu4yyPo0OaLP%2B5mj5SeXKFlUUm4gfds4n9Yelj3rsbkYMiRQigyVCpzqnOfehQp5OdW%2BxJ8Ht4Gq9MQNamWkIQXdDIPB8nh3O3nWWAowbt2IKkW6xqSanbq45huCasq5bitXu5ckSJOgrhuZaZVJCBJQYGjDIEnTkRaSchFZn8hxQ4%2FH6aO3TM85qtGz6xsJZQT2vA25ZYlsx%2BFXtQfZGsWytoer1eKrJhK4Xj44qULyfUQQ20VNSN8NjiyqkfDLCz82eyGSjWUaudvewouvhg2MG%2F4eSr2hUNZuLRjRlomjanUl%2FDdEhlQ2%2FSDLWhNd5Ag4YHey9Wx2nEi1icTpKANkLiltYy%2F1YN%2BShRM9uZQy%2FUzCGt%2Fy%2BBjqkAV72ldivEMVBayCUuXPPUqib2%2FsreWlSDWOLYNzXknDukBh0ibshPtywLuwXhofioo47%2BBc%2Be0X1edLHT%2BBx7U7p55SfcJQZlYa2oCqQ9adVrt%2FTNWknxDHqF%2Bsq1TpwevlHRx2lSWspNSTkF7AuX8aO1SYfdUhQBlCW5iq6%2FTss5kZ9USK%2Bt7%2FNQOe2YsQ04UNKilOouAB6LmJB%2BdEfxC90SNtS&X-Amz-Signature=03a4b93a182c2451fb6eb54da24f562415950782a3879eee912cdc905961be19&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPT2GTCH%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDKP4E1qaT%2B0t%2BxxWj7TcLD81mX8gUnG2Cq%2Fw2K5EjNngIhAKcFWlx2J9sYxpeWiXF0rwm7ZXYNBZgwfkMiw%2F0tsGxxKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyybZe%2BbTEbjjRc%2Booq3AMB%2FkKw9Oh0xw0156IFRsjZhAce%2FFYuj3%2B%2Bda5%2F43yDLQSnVQ08JWRjzBcxyxTD9BNk3JW394y9ebPg%2FLb8GM0A1tofNYm7zTJ4vl31h8qbij0ZsirozzNqP8SbGTZJGNhl%2FnOQMrKfeKNtmhL4H4noywIIiOSEtHgD0Ff%2FWWlvJoY8S%2BRi9MzoGRjt6tVQTQMx2sycsLiMl1ZTzL10zDvS9W%2B8WVmSzHkmULdCsjQlDogpjyrtSFLWCM3GnYnQcobvnqhDRpWQokFeu4yyPo0OaLP%2B5mj5SeXKFlUUm4gfds4n9Yelj3rsbkYMiRQigyVCpzqnOfehQp5OdW%2BxJ8Ht4Gq9MQNamWkIQXdDIPB8nh3O3nWWAowbt2IKkW6xqSanbq45huCasq5bitXu5ckSJOgrhuZaZVJCBJQYGjDIEnTkRaSchFZn8hxQ4%2FH6aO3TM85qtGz6xsJZQT2vA25ZYlsx%2BFXtQfZGsWytoer1eKrJhK4Xj44qULyfUQQ20VNSN8NjiyqkfDLCz82eyGSjWUaudvewouvhg2MG%2F4eSr2hUNZuLRjRlomjanUl%2FDdEhlQ2%2FSDLWhNd5Ag4YHey9Wx2nEi1icTpKANkLiltYy%2F1YN%2BShRM9uZQy%2FUzCGt%2Fy%2BBjqkAV72ldivEMVBayCUuXPPUqib2%2FsreWlSDWOLYNzXknDukBh0ibshPtywLuwXhofioo47%2BBc%2Be0X1edLHT%2BBx7U7p55SfcJQZlYa2oCqQ9adVrt%2FTNWknxDHqF%2Bsq1TpwevlHRx2lSWspNSTkF7AuX8aO1SYfdUhQBlCW5iq6%2FTss5kZ9USK%2Bt7%2FNQOe2YsQ04UNKilOouAB6LmJB%2BdEfxC90SNtS&X-Amz-Signature=f94b82b0faf04dfec903711b51c6ee8c7aebfeaac1e01b9eba0fe4574eb57521&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPT2GTCH%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDKP4E1qaT%2B0t%2BxxWj7TcLD81mX8gUnG2Cq%2Fw2K5EjNngIhAKcFWlx2J9sYxpeWiXF0rwm7ZXYNBZgwfkMiw%2F0tsGxxKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyybZe%2BbTEbjjRc%2Booq3AMB%2FkKw9Oh0xw0156IFRsjZhAce%2FFYuj3%2B%2Bda5%2F43yDLQSnVQ08JWRjzBcxyxTD9BNk3JW394y9ebPg%2FLb8GM0A1tofNYm7zTJ4vl31h8qbij0ZsirozzNqP8SbGTZJGNhl%2FnOQMrKfeKNtmhL4H4noywIIiOSEtHgD0Ff%2FWWlvJoY8S%2BRi9MzoGRjt6tVQTQMx2sycsLiMl1ZTzL10zDvS9W%2B8WVmSzHkmULdCsjQlDogpjyrtSFLWCM3GnYnQcobvnqhDRpWQokFeu4yyPo0OaLP%2B5mj5SeXKFlUUm4gfds4n9Yelj3rsbkYMiRQigyVCpzqnOfehQp5OdW%2BxJ8Ht4Gq9MQNamWkIQXdDIPB8nh3O3nWWAowbt2IKkW6xqSanbq45huCasq5bitXu5ckSJOgrhuZaZVJCBJQYGjDIEnTkRaSchFZn8hxQ4%2FH6aO3TM85qtGz6xsJZQT2vA25ZYlsx%2BFXtQfZGsWytoer1eKrJhK4Xj44qULyfUQQ20VNSN8NjiyqkfDLCz82eyGSjWUaudvewouvhg2MG%2F4eSr2hUNZuLRjRlomjanUl%2FDdEhlQ2%2FSDLWhNd5Ag4YHey9Wx2nEi1icTpKANkLiltYy%2F1YN%2BShRM9uZQy%2FUzCGt%2Fy%2BBjqkAV72ldivEMVBayCUuXPPUqib2%2FsreWlSDWOLYNzXknDukBh0ibshPtywLuwXhofioo47%2BBc%2Be0X1edLHT%2BBx7U7p55SfcJQZlYa2oCqQ9adVrt%2FTNWknxDHqF%2Bsq1TpwevlHRx2lSWspNSTkF7AuX8aO1SYfdUhQBlCW5iq6%2FTss5kZ9USK%2Bt7%2FNQOe2YsQ04UNKilOouAB6LmJB%2BdEfxC90SNtS&X-Amz-Signature=3318e99c8c96974512299ccab062c1e0a358c1bb31c63435e26aaca4c0a60554&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPT2GTCH%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDKP4E1qaT%2B0t%2BxxWj7TcLD81mX8gUnG2Cq%2Fw2K5EjNngIhAKcFWlx2J9sYxpeWiXF0rwm7ZXYNBZgwfkMiw%2F0tsGxxKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyybZe%2BbTEbjjRc%2Booq3AMB%2FkKw9Oh0xw0156IFRsjZhAce%2FFYuj3%2B%2Bda5%2F43yDLQSnVQ08JWRjzBcxyxTD9BNk3JW394y9ebPg%2FLb8GM0A1tofNYm7zTJ4vl31h8qbij0ZsirozzNqP8SbGTZJGNhl%2FnOQMrKfeKNtmhL4H4noywIIiOSEtHgD0Ff%2FWWlvJoY8S%2BRi9MzoGRjt6tVQTQMx2sycsLiMl1ZTzL10zDvS9W%2B8WVmSzHkmULdCsjQlDogpjyrtSFLWCM3GnYnQcobvnqhDRpWQokFeu4yyPo0OaLP%2B5mj5SeXKFlUUm4gfds4n9Yelj3rsbkYMiRQigyVCpzqnOfehQp5OdW%2BxJ8Ht4Gq9MQNamWkIQXdDIPB8nh3O3nWWAowbt2IKkW6xqSanbq45huCasq5bitXu5ckSJOgrhuZaZVJCBJQYGjDIEnTkRaSchFZn8hxQ4%2FH6aO3TM85qtGz6xsJZQT2vA25ZYlsx%2BFXtQfZGsWytoer1eKrJhK4Xj44qULyfUQQ20VNSN8NjiyqkfDLCz82eyGSjWUaudvewouvhg2MG%2F4eSr2hUNZuLRjRlomjanUl%2FDdEhlQ2%2FSDLWhNd5Ag4YHey9Wx2nEi1icTpKANkLiltYy%2F1YN%2BShRM9uZQy%2FUzCGt%2Fy%2BBjqkAV72ldivEMVBayCUuXPPUqib2%2FsreWlSDWOLYNzXknDukBh0ibshPtywLuwXhofioo47%2BBc%2Be0X1edLHT%2BBx7U7p55SfcJQZlYa2oCqQ9adVrt%2FTNWknxDHqF%2Bsq1TpwevlHRx2lSWspNSTkF7AuX8aO1SYfdUhQBlCW5iq6%2FTss5kZ9USK%2Bt7%2FNQOe2YsQ04UNKilOouAB6LmJB%2BdEfxC90SNtS&X-Amz-Signature=6223f09f140cbcd52ac361c3e199ffbe61307bf0964c1a9a5c8006145cf8ea54&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPT2GTCH%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDKP4E1qaT%2B0t%2BxxWj7TcLD81mX8gUnG2Cq%2Fw2K5EjNngIhAKcFWlx2J9sYxpeWiXF0rwm7ZXYNBZgwfkMiw%2F0tsGxxKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyybZe%2BbTEbjjRc%2Booq3AMB%2FkKw9Oh0xw0156IFRsjZhAce%2FFYuj3%2B%2Bda5%2F43yDLQSnVQ08JWRjzBcxyxTD9BNk3JW394y9ebPg%2FLb8GM0A1tofNYm7zTJ4vl31h8qbij0ZsirozzNqP8SbGTZJGNhl%2FnOQMrKfeKNtmhL4H4noywIIiOSEtHgD0Ff%2FWWlvJoY8S%2BRi9MzoGRjt6tVQTQMx2sycsLiMl1ZTzL10zDvS9W%2B8WVmSzHkmULdCsjQlDogpjyrtSFLWCM3GnYnQcobvnqhDRpWQokFeu4yyPo0OaLP%2B5mj5SeXKFlUUm4gfds4n9Yelj3rsbkYMiRQigyVCpzqnOfehQp5OdW%2BxJ8Ht4Gq9MQNamWkIQXdDIPB8nh3O3nWWAowbt2IKkW6xqSanbq45huCasq5bitXu5ckSJOgrhuZaZVJCBJQYGjDIEnTkRaSchFZn8hxQ4%2FH6aO3TM85qtGz6xsJZQT2vA25ZYlsx%2BFXtQfZGsWytoer1eKrJhK4Xj44qULyfUQQ20VNSN8NjiyqkfDLCz82eyGSjWUaudvewouvhg2MG%2F4eSr2hUNZuLRjRlomjanUl%2FDdEhlQ2%2FSDLWhNd5Ag4YHey9Wx2nEi1icTpKANkLiltYy%2F1YN%2BShRM9uZQy%2FUzCGt%2Fy%2BBjqkAV72ldivEMVBayCUuXPPUqib2%2FsreWlSDWOLYNzXknDukBh0ibshPtywLuwXhofioo47%2BBc%2Be0X1edLHT%2BBx7U7p55SfcJQZlYa2oCqQ9adVrt%2FTNWknxDHqF%2Bsq1TpwevlHRx2lSWspNSTkF7AuX8aO1SYfdUhQBlCW5iq6%2FTss5kZ9USK%2Bt7%2FNQOe2YsQ04UNKilOouAB6LmJB%2BdEfxC90SNtS&X-Amz-Signature=4895f23a23c4b27881008b7d7cff68a05ebb1026fdddb563955d8cea88c245c7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
