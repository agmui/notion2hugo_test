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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TCORJWK%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR%2FFlhAG3P%2BDiE5Xpc8KndXD4yhmmFuj6B2vFHv82oVwIhAMQfIm72v2LN3zuEPj2SXtJGUzLtraIMdnaYgus9JdBuKv8DCG4QABoMNjM3NDIzMTgzODA1IgyQXsgq%2FDL3%2FWzOud0q3AM0DTmMH%2FYz1ac7RC5QXSANVaGB%2F9uz1DgGUXmpnMdWRULqz8UFJjk%2B93ik9X2kSjtTX3CpvNYoTxQ6%2Fv%2FH1v73AQzpm3BnJehhlIRGyCiWyPbzqEVwGRzGHchFBTiW2Io5wL8oiwe404AqwnF3Y7A0zq2o0g%2BUML1XvzSCm4S0Hrf%2BONcjAMLkuNWNYk0am1n15yI9S6Ocd%2F3oatrUbOq9qDil7ydVvJXdUtCQ23CfxxdTQLacW4TjUndqOsXMF4fvXUgIMQUuWciyESzRep%2FnTjutt6yaH9DBIlWr8MwAMN2jZXqsOZ2Fy7cpcrQCRoYpSgbw2by0ilEQm2H5sZ536FHA5UkRElMC9dm%2Fold3RR5yRid%2FidsaYupyUa9FVl7B%2FIYFLnhAIcWVJx7GGgg7bvbPbeEALLswXu7eUVIJfDM%2BdeU8Uishmut0p53Stod0yCmRwBgXC3Gqgm8bLu13OW3v71Z2XhoqIMJgFDEfITbGBWU95JSTBmE9mdPwSp1PW5Lk9lZqUSUfgou%2FuoRhyC1Ceg3CYUULP8ydxPiX8wILW1TfwO6SvG81eqGxCppxe%2Bi0TSznzT4R7b43wHg%2FsNyVtKgy%2FRq3%2Fucz6ZcqE4j8lPF52%2BJCsXtWsTDf09K%2FBjqkAQGz6vTp3e5%2Fknzdjuvqe8PO0XKHNzfrhXA5UgPhcjJnF2OZmIjHJ3E3QHvNY%2B%2Fz2nhx5WTzf2bWVllpAgY%2BGOyQK1IR3SpqYgAADvR7KkSpRK1roaA%2BKDgGELFhqOovhyFr8MhMHGMMi9mvkpBACC2At0%2Bi%2BSszvVsPMNlFagB6W6kNXxg7QLliBccIeCsYFBA%2Bkaa1J7Fh9s9EXOPS3ogQsFS6&X-Amz-Signature=f0a259eefe45ae1338ff07ed2fcf4d1270eed72eefa29d403b4d7c11d6d829bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TCORJWK%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR%2FFlhAG3P%2BDiE5Xpc8KndXD4yhmmFuj6B2vFHv82oVwIhAMQfIm72v2LN3zuEPj2SXtJGUzLtraIMdnaYgus9JdBuKv8DCG4QABoMNjM3NDIzMTgzODA1IgyQXsgq%2FDL3%2FWzOud0q3AM0DTmMH%2FYz1ac7RC5QXSANVaGB%2F9uz1DgGUXmpnMdWRULqz8UFJjk%2B93ik9X2kSjtTX3CpvNYoTxQ6%2Fv%2FH1v73AQzpm3BnJehhlIRGyCiWyPbzqEVwGRzGHchFBTiW2Io5wL8oiwe404AqwnF3Y7A0zq2o0g%2BUML1XvzSCm4S0Hrf%2BONcjAMLkuNWNYk0am1n15yI9S6Ocd%2F3oatrUbOq9qDil7ydVvJXdUtCQ23CfxxdTQLacW4TjUndqOsXMF4fvXUgIMQUuWciyESzRep%2FnTjutt6yaH9DBIlWr8MwAMN2jZXqsOZ2Fy7cpcrQCRoYpSgbw2by0ilEQm2H5sZ536FHA5UkRElMC9dm%2Fold3RR5yRid%2FidsaYupyUa9FVl7B%2FIYFLnhAIcWVJx7GGgg7bvbPbeEALLswXu7eUVIJfDM%2BdeU8Uishmut0p53Stod0yCmRwBgXC3Gqgm8bLu13OW3v71Z2XhoqIMJgFDEfITbGBWU95JSTBmE9mdPwSp1PW5Lk9lZqUSUfgou%2FuoRhyC1Ceg3CYUULP8ydxPiX8wILW1TfwO6SvG81eqGxCppxe%2Bi0TSznzT4R7b43wHg%2FsNyVtKgy%2FRq3%2Fucz6ZcqE4j8lPF52%2BJCsXtWsTDf09K%2FBjqkAQGz6vTp3e5%2Fknzdjuvqe8PO0XKHNzfrhXA5UgPhcjJnF2OZmIjHJ3E3QHvNY%2B%2Fz2nhx5WTzf2bWVllpAgY%2BGOyQK1IR3SpqYgAADvR7KkSpRK1roaA%2BKDgGELFhqOovhyFr8MhMHGMMi9mvkpBACC2At0%2Bi%2BSszvVsPMNlFagB6W6kNXxg7QLliBccIeCsYFBA%2Bkaa1J7Fh9s9EXOPS3ogQsFS6&X-Amz-Signature=e5b46ded8d74ab8fa2ce4207ac7b0d09862949ad8553c7a03fc3ef0532882ae6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TCORJWK%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR%2FFlhAG3P%2BDiE5Xpc8KndXD4yhmmFuj6B2vFHv82oVwIhAMQfIm72v2LN3zuEPj2SXtJGUzLtraIMdnaYgus9JdBuKv8DCG4QABoMNjM3NDIzMTgzODA1IgyQXsgq%2FDL3%2FWzOud0q3AM0DTmMH%2FYz1ac7RC5QXSANVaGB%2F9uz1DgGUXmpnMdWRULqz8UFJjk%2B93ik9X2kSjtTX3CpvNYoTxQ6%2Fv%2FH1v73AQzpm3BnJehhlIRGyCiWyPbzqEVwGRzGHchFBTiW2Io5wL8oiwe404AqwnF3Y7A0zq2o0g%2BUML1XvzSCm4S0Hrf%2BONcjAMLkuNWNYk0am1n15yI9S6Ocd%2F3oatrUbOq9qDil7ydVvJXdUtCQ23CfxxdTQLacW4TjUndqOsXMF4fvXUgIMQUuWciyESzRep%2FnTjutt6yaH9DBIlWr8MwAMN2jZXqsOZ2Fy7cpcrQCRoYpSgbw2by0ilEQm2H5sZ536FHA5UkRElMC9dm%2Fold3RR5yRid%2FidsaYupyUa9FVl7B%2FIYFLnhAIcWVJx7GGgg7bvbPbeEALLswXu7eUVIJfDM%2BdeU8Uishmut0p53Stod0yCmRwBgXC3Gqgm8bLu13OW3v71Z2XhoqIMJgFDEfITbGBWU95JSTBmE9mdPwSp1PW5Lk9lZqUSUfgou%2FuoRhyC1Ceg3CYUULP8ydxPiX8wILW1TfwO6SvG81eqGxCppxe%2Bi0TSznzT4R7b43wHg%2FsNyVtKgy%2FRq3%2Fucz6ZcqE4j8lPF52%2BJCsXtWsTDf09K%2FBjqkAQGz6vTp3e5%2Fknzdjuvqe8PO0XKHNzfrhXA5UgPhcjJnF2OZmIjHJ3E3QHvNY%2B%2Fz2nhx5WTzf2bWVllpAgY%2BGOyQK1IR3SpqYgAADvR7KkSpRK1roaA%2BKDgGELFhqOovhyFr8MhMHGMMi9mvkpBACC2At0%2Bi%2BSszvVsPMNlFagB6W6kNXxg7QLliBccIeCsYFBA%2Bkaa1J7Fh9s9EXOPS3ogQsFS6&X-Amz-Signature=e1c7531184a9b9095d1a4e459a9693ce24c40cb4bc6733726ab5b59a963c8964&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TCORJWK%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR%2FFlhAG3P%2BDiE5Xpc8KndXD4yhmmFuj6B2vFHv82oVwIhAMQfIm72v2LN3zuEPj2SXtJGUzLtraIMdnaYgus9JdBuKv8DCG4QABoMNjM3NDIzMTgzODA1IgyQXsgq%2FDL3%2FWzOud0q3AM0DTmMH%2FYz1ac7RC5QXSANVaGB%2F9uz1DgGUXmpnMdWRULqz8UFJjk%2B93ik9X2kSjtTX3CpvNYoTxQ6%2Fv%2FH1v73AQzpm3BnJehhlIRGyCiWyPbzqEVwGRzGHchFBTiW2Io5wL8oiwe404AqwnF3Y7A0zq2o0g%2BUML1XvzSCm4S0Hrf%2BONcjAMLkuNWNYk0am1n15yI9S6Ocd%2F3oatrUbOq9qDil7ydVvJXdUtCQ23CfxxdTQLacW4TjUndqOsXMF4fvXUgIMQUuWciyESzRep%2FnTjutt6yaH9DBIlWr8MwAMN2jZXqsOZ2Fy7cpcrQCRoYpSgbw2by0ilEQm2H5sZ536FHA5UkRElMC9dm%2Fold3RR5yRid%2FidsaYupyUa9FVl7B%2FIYFLnhAIcWVJx7GGgg7bvbPbeEALLswXu7eUVIJfDM%2BdeU8Uishmut0p53Stod0yCmRwBgXC3Gqgm8bLu13OW3v71Z2XhoqIMJgFDEfITbGBWU95JSTBmE9mdPwSp1PW5Lk9lZqUSUfgou%2FuoRhyC1Ceg3CYUULP8ydxPiX8wILW1TfwO6SvG81eqGxCppxe%2Bi0TSznzT4R7b43wHg%2FsNyVtKgy%2FRq3%2Fucz6ZcqE4j8lPF52%2BJCsXtWsTDf09K%2FBjqkAQGz6vTp3e5%2Fknzdjuvqe8PO0XKHNzfrhXA5UgPhcjJnF2OZmIjHJ3E3QHvNY%2B%2Fz2nhx5WTzf2bWVllpAgY%2BGOyQK1IR3SpqYgAADvR7KkSpRK1roaA%2BKDgGELFhqOovhyFr8MhMHGMMi9mvkpBACC2At0%2Bi%2BSszvVsPMNlFagB6W6kNXxg7QLliBccIeCsYFBA%2Bkaa1J7Fh9s9EXOPS3ogQsFS6&X-Amz-Signature=c681eecc3de3100a4c89e8112c309ce7574777e0f7a37527facee232e1631bcd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TCORJWK%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR%2FFlhAG3P%2BDiE5Xpc8KndXD4yhmmFuj6B2vFHv82oVwIhAMQfIm72v2LN3zuEPj2SXtJGUzLtraIMdnaYgus9JdBuKv8DCG4QABoMNjM3NDIzMTgzODA1IgyQXsgq%2FDL3%2FWzOud0q3AM0DTmMH%2FYz1ac7RC5QXSANVaGB%2F9uz1DgGUXmpnMdWRULqz8UFJjk%2B93ik9X2kSjtTX3CpvNYoTxQ6%2Fv%2FH1v73AQzpm3BnJehhlIRGyCiWyPbzqEVwGRzGHchFBTiW2Io5wL8oiwe404AqwnF3Y7A0zq2o0g%2BUML1XvzSCm4S0Hrf%2BONcjAMLkuNWNYk0am1n15yI9S6Ocd%2F3oatrUbOq9qDil7ydVvJXdUtCQ23CfxxdTQLacW4TjUndqOsXMF4fvXUgIMQUuWciyESzRep%2FnTjutt6yaH9DBIlWr8MwAMN2jZXqsOZ2Fy7cpcrQCRoYpSgbw2by0ilEQm2H5sZ536FHA5UkRElMC9dm%2Fold3RR5yRid%2FidsaYupyUa9FVl7B%2FIYFLnhAIcWVJx7GGgg7bvbPbeEALLswXu7eUVIJfDM%2BdeU8Uishmut0p53Stod0yCmRwBgXC3Gqgm8bLu13OW3v71Z2XhoqIMJgFDEfITbGBWU95JSTBmE9mdPwSp1PW5Lk9lZqUSUfgou%2FuoRhyC1Ceg3CYUULP8ydxPiX8wILW1TfwO6SvG81eqGxCppxe%2Bi0TSznzT4R7b43wHg%2FsNyVtKgy%2FRq3%2Fucz6ZcqE4j8lPF52%2BJCsXtWsTDf09K%2FBjqkAQGz6vTp3e5%2Fknzdjuvqe8PO0XKHNzfrhXA5UgPhcjJnF2OZmIjHJ3E3QHvNY%2B%2Fz2nhx5WTzf2bWVllpAgY%2BGOyQK1IR3SpqYgAADvR7KkSpRK1roaA%2BKDgGELFhqOovhyFr8MhMHGMMi9mvkpBACC2At0%2Bi%2BSszvVsPMNlFagB6W6kNXxg7QLliBccIeCsYFBA%2Bkaa1J7Fh9s9EXOPS3ogQsFS6&X-Amz-Signature=88abd71237c4a9dc3741092a3ff7e8a12965c3406b5842ea24bd0c9cf48ee6cb&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
