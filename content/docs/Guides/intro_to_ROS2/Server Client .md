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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBKMFP2%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T070838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmDyvOOoRIyQiDbX6EmyyjZZOG1ZZ0CsweCaD%2FbRVCFAiBIJBO5Oqw2AHhUTZH9dtAeBIXxvOiUolygCJmOfZqlYCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMyRePthTY4XHLhR5tKtwDm3TenC%2FBOcoJxXZ7dBdUctn%2FjzeRViSxbqmyorQg4M%2BDK6%2BVCaGXPGtTUJqNhXPw7il9emkF6ip7MB%2B4Y61l4c2DF6Roc9OZnIYQ5bSqo5IzuyYLqPhrd6amUdPMLts7EBML4Mjm5vi2bkjAey29hJFY66ENTymSkv5DHaph5x5YdK7tlfbejmGE5s3%2FEmI7HcS%2BCQW%2F5RCI%2BGA14Kf90e3tQ0fMUVqA4qXxHnKDJWi%2FsF4KftZZJNeeR3An1M2JgNFuBaMfuBmnzLUo2Urqk36qghlFTH%2Ft9maTJfkn2NeKK8ULlkxEEA2T0YX2sqORMOPe%2BCQQKpMn3OKEfazxu6UNPbhknWhqbJmdJXdfn%2BABaC%2FRGKfSza%2FyikJBcH0PNrtjXobr2IHY9ByQMIstirmbOqfbC3Oh00MEI9xiy0z3oEkAY7SlB%2FKztmlXGmdeHutAP9VYOybPqpaxCtYxwYhC%2FkT8LNI41JExFrJDaEIDG1B%2Bqu5B5OUOy%2BM5s67zYRLUe76VaFPgFfxcaTje8KrlcRfD450WdZSUqeP2LNr7TcDZ55vS0DrgqL0MtjiwGaq0SP8dJngT6OEMx4vsBCN4BZD%2FBtX3392uk9PuHAvCkH%2F96Cat2Oj74dcwwueTvwY6pgGbLqkbsfFOaI7MNEaPCPATPt4IEJko6mMnaYqKAfz%2BWynByPi4aCXnix%2BAq0gfdW1epU%2BXawVQyaCVnzdXYs0zLYGwkzvDHhvDaO%2B9DjalCZTwFTf91cqdj7BMwFSJUy%2Bt5Gmvb%2BBwW4yGEYGzMNybxilZ2M62zndZxgMhNKuQfdBUaSWup6NUQD1jpiXGioqu2O0NX9SU3nFzcWb1z%2FrxlUngCHFI&X-Amz-Signature=f9887d58549cafe6e83b95680ce6ad4dbf8684200e8bfe94b31c1f2394a58923&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBKMFP2%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T070838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmDyvOOoRIyQiDbX6EmyyjZZOG1ZZ0CsweCaD%2FbRVCFAiBIJBO5Oqw2AHhUTZH9dtAeBIXxvOiUolygCJmOfZqlYCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMyRePthTY4XHLhR5tKtwDm3TenC%2FBOcoJxXZ7dBdUctn%2FjzeRViSxbqmyorQg4M%2BDK6%2BVCaGXPGtTUJqNhXPw7il9emkF6ip7MB%2B4Y61l4c2DF6Roc9OZnIYQ5bSqo5IzuyYLqPhrd6amUdPMLts7EBML4Mjm5vi2bkjAey29hJFY66ENTymSkv5DHaph5x5YdK7tlfbejmGE5s3%2FEmI7HcS%2BCQW%2F5RCI%2BGA14Kf90e3tQ0fMUVqA4qXxHnKDJWi%2FsF4KftZZJNeeR3An1M2JgNFuBaMfuBmnzLUo2Urqk36qghlFTH%2Ft9maTJfkn2NeKK8ULlkxEEA2T0YX2sqORMOPe%2BCQQKpMn3OKEfazxu6UNPbhknWhqbJmdJXdfn%2BABaC%2FRGKfSza%2FyikJBcH0PNrtjXobr2IHY9ByQMIstirmbOqfbC3Oh00MEI9xiy0z3oEkAY7SlB%2FKztmlXGmdeHutAP9VYOybPqpaxCtYxwYhC%2FkT8LNI41JExFrJDaEIDG1B%2Bqu5B5OUOy%2BM5s67zYRLUe76VaFPgFfxcaTje8KrlcRfD450WdZSUqeP2LNr7TcDZ55vS0DrgqL0MtjiwGaq0SP8dJngT6OEMx4vsBCN4BZD%2FBtX3392uk9PuHAvCkH%2F96Cat2Oj74dcwwueTvwY6pgGbLqkbsfFOaI7MNEaPCPATPt4IEJko6mMnaYqKAfz%2BWynByPi4aCXnix%2BAq0gfdW1epU%2BXawVQyaCVnzdXYs0zLYGwkzvDHhvDaO%2B9DjalCZTwFTf91cqdj7BMwFSJUy%2Bt5Gmvb%2BBwW4yGEYGzMNybxilZ2M62zndZxgMhNKuQfdBUaSWup6NUQD1jpiXGioqu2O0NX9SU3nFzcWb1z%2FrxlUngCHFI&X-Amz-Signature=92cb04b93f57aeaa7e2c0bb5279a3f52295ad8ef21c406e6843d2c0b1e92f08d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBKMFP2%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T070838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmDyvOOoRIyQiDbX6EmyyjZZOG1ZZ0CsweCaD%2FbRVCFAiBIJBO5Oqw2AHhUTZH9dtAeBIXxvOiUolygCJmOfZqlYCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMyRePthTY4XHLhR5tKtwDm3TenC%2FBOcoJxXZ7dBdUctn%2FjzeRViSxbqmyorQg4M%2BDK6%2BVCaGXPGtTUJqNhXPw7il9emkF6ip7MB%2B4Y61l4c2DF6Roc9OZnIYQ5bSqo5IzuyYLqPhrd6amUdPMLts7EBML4Mjm5vi2bkjAey29hJFY66ENTymSkv5DHaph5x5YdK7tlfbejmGE5s3%2FEmI7HcS%2BCQW%2F5RCI%2BGA14Kf90e3tQ0fMUVqA4qXxHnKDJWi%2FsF4KftZZJNeeR3An1M2JgNFuBaMfuBmnzLUo2Urqk36qghlFTH%2Ft9maTJfkn2NeKK8ULlkxEEA2T0YX2sqORMOPe%2BCQQKpMn3OKEfazxu6UNPbhknWhqbJmdJXdfn%2BABaC%2FRGKfSza%2FyikJBcH0PNrtjXobr2IHY9ByQMIstirmbOqfbC3Oh00MEI9xiy0z3oEkAY7SlB%2FKztmlXGmdeHutAP9VYOybPqpaxCtYxwYhC%2FkT8LNI41JExFrJDaEIDG1B%2Bqu5B5OUOy%2BM5s67zYRLUe76VaFPgFfxcaTje8KrlcRfD450WdZSUqeP2LNr7TcDZ55vS0DrgqL0MtjiwGaq0SP8dJngT6OEMx4vsBCN4BZD%2FBtX3392uk9PuHAvCkH%2F96Cat2Oj74dcwwueTvwY6pgGbLqkbsfFOaI7MNEaPCPATPt4IEJko6mMnaYqKAfz%2BWynByPi4aCXnix%2BAq0gfdW1epU%2BXawVQyaCVnzdXYs0zLYGwkzvDHhvDaO%2B9DjalCZTwFTf91cqdj7BMwFSJUy%2Bt5Gmvb%2BBwW4yGEYGzMNybxilZ2M62zndZxgMhNKuQfdBUaSWup6NUQD1jpiXGioqu2O0NX9SU3nFzcWb1z%2FrxlUngCHFI&X-Amz-Signature=3101311b9914fe3941a6d44755914a0d80701b5ceb333644993378defc0d0f85&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBKMFP2%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T070838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmDyvOOoRIyQiDbX6EmyyjZZOG1ZZ0CsweCaD%2FbRVCFAiBIJBO5Oqw2AHhUTZH9dtAeBIXxvOiUolygCJmOfZqlYCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMyRePthTY4XHLhR5tKtwDm3TenC%2FBOcoJxXZ7dBdUctn%2FjzeRViSxbqmyorQg4M%2BDK6%2BVCaGXPGtTUJqNhXPw7il9emkF6ip7MB%2B4Y61l4c2DF6Roc9OZnIYQ5bSqo5IzuyYLqPhrd6amUdPMLts7EBML4Mjm5vi2bkjAey29hJFY66ENTymSkv5DHaph5x5YdK7tlfbejmGE5s3%2FEmI7HcS%2BCQW%2F5RCI%2BGA14Kf90e3tQ0fMUVqA4qXxHnKDJWi%2FsF4KftZZJNeeR3An1M2JgNFuBaMfuBmnzLUo2Urqk36qghlFTH%2Ft9maTJfkn2NeKK8ULlkxEEA2T0YX2sqORMOPe%2BCQQKpMn3OKEfazxu6UNPbhknWhqbJmdJXdfn%2BABaC%2FRGKfSza%2FyikJBcH0PNrtjXobr2IHY9ByQMIstirmbOqfbC3Oh00MEI9xiy0z3oEkAY7SlB%2FKztmlXGmdeHutAP9VYOybPqpaxCtYxwYhC%2FkT8LNI41JExFrJDaEIDG1B%2Bqu5B5OUOy%2BM5s67zYRLUe76VaFPgFfxcaTje8KrlcRfD450WdZSUqeP2LNr7TcDZ55vS0DrgqL0MtjiwGaq0SP8dJngT6OEMx4vsBCN4BZD%2FBtX3392uk9PuHAvCkH%2F96Cat2Oj74dcwwueTvwY6pgGbLqkbsfFOaI7MNEaPCPATPt4IEJko6mMnaYqKAfz%2BWynByPi4aCXnix%2BAq0gfdW1epU%2BXawVQyaCVnzdXYs0zLYGwkzvDHhvDaO%2B9DjalCZTwFTf91cqdj7BMwFSJUy%2Bt5Gmvb%2BBwW4yGEYGzMNybxilZ2M62zndZxgMhNKuQfdBUaSWup6NUQD1jpiXGioqu2O0NX9SU3nFzcWb1z%2FrxlUngCHFI&X-Amz-Signature=d2a302588fb4bf8043640522eaae6d74d26b98edee5ad81f2e2f456a5973c99f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBKMFP2%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T070838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmDyvOOoRIyQiDbX6EmyyjZZOG1ZZ0CsweCaD%2FbRVCFAiBIJBO5Oqw2AHhUTZH9dtAeBIXxvOiUolygCJmOfZqlYCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMyRePthTY4XHLhR5tKtwDm3TenC%2FBOcoJxXZ7dBdUctn%2FjzeRViSxbqmyorQg4M%2BDK6%2BVCaGXPGtTUJqNhXPw7il9emkF6ip7MB%2B4Y61l4c2DF6Roc9OZnIYQ5bSqo5IzuyYLqPhrd6amUdPMLts7EBML4Mjm5vi2bkjAey29hJFY66ENTymSkv5DHaph5x5YdK7tlfbejmGE5s3%2FEmI7HcS%2BCQW%2F5RCI%2BGA14Kf90e3tQ0fMUVqA4qXxHnKDJWi%2FsF4KftZZJNeeR3An1M2JgNFuBaMfuBmnzLUo2Urqk36qghlFTH%2Ft9maTJfkn2NeKK8ULlkxEEA2T0YX2sqORMOPe%2BCQQKpMn3OKEfazxu6UNPbhknWhqbJmdJXdfn%2BABaC%2FRGKfSza%2FyikJBcH0PNrtjXobr2IHY9ByQMIstirmbOqfbC3Oh00MEI9xiy0z3oEkAY7SlB%2FKztmlXGmdeHutAP9VYOybPqpaxCtYxwYhC%2FkT8LNI41JExFrJDaEIDG1B%2Bqu5B5OUOy%2BM5s67zYRLUe76VaFPgFfxcaTje8KrlcRfD450WdZSUqeP2LNr7TcDZ55vS0DrgqL0MtjiwGaq0SP8dJngT6OEMx4vsBCN4BZD%2FBtX3392uk9PuHAvCkH%2F96Cat2Oj74dcwwueTvwY6pgGbLqkbsfFOaI7MNEaPCPATPt4IEJko6mMnaYqKAfz%2BWynByPi4aCXnix%2BAq0gfdW1epU%2BXawVQyaCVnzdXYs0zLYGwkzvDHhvDaO%2B9DjalCZTwFTf91cqdj7BMwFSJUy%2Bt5Gmvb%2BBwW4yGEYGzMNybxilZ2M62zndZxgMhNKuQfdBUaSWup6NUQD1jpiXGioqu2O0NX9SU3nFzcWb1z%2FrxlUngCHFI&X-Amz-Signature=38c8d082863279ad786cdd15e4a3b8b773cce6139f43da276fe6aa5970354aeb&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
