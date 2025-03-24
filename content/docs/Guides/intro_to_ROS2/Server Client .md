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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPBMRVVZ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuEzX62AFXlyG6hPemWWuhHRaNBeTx34527IfjGNvgZAiBM%2FaaiYFa3fc%2B%2B97QlwH6MpydtcoBzzjyCl4iCjZDiOiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcYstS%2BLz6RP9JtZUKtwDGMaIEbHy4Wny%2FA6zbkbL9Bf0vygIgsP8aSve0iabHlHO2jAIpdGWKRNy5JCT90YAKZ1Vz%2FnfNLkUAeDBPQruhxCkxueNzs9PzE00Gbw7YHsL1yeX6SKAKdWATg2V5FlSZi%2FipwUvjdU8bvzUZILBOF0qjSs%2BKC5fjHfuMq1yTEvFvrHfC1srjX0MhzKN2S6j%2FFUYbOVsb%2B6G%2FKm3luOFTjJzlBmzhNzH2oyWrMedfqCt4feJaNtANkile8zwRqFPkqKCPGC1qPmZf1Ll5CnUUHTpc5Jz9dAfWMHhjyjb7uHTH9QVRkGAxJdmwkjZq6G%2BnpkH5IP0XXEib8GC1qYEIcrB80r%2FMy%2BcKNuwwj62J6mTAf6xLqCcCZF3JltdtBfAKl3OxKn9V88JLzPlrpbJJiuRmPwBcWJ8XrFRNBPYlO%2FH0GEfcRRkELkxnzwmNrF7AKz8KDnnfu%2B2lKxUGG4Krx1UwjZm%2FBNf3EtPnJSme0SWgn8qyDBh%2FMb2oE5gF1AcbiROkUqM4CmcK%2FyucJ6PW7gfEBcGWEGi8xJ9RfA0wdIUj3oQcWRpAe4Ai41DLexO7kmODilX7ciWPEVojPQuEeTW6Fmp%2FnVVCr7IJSsOu3y9ME%2FPvAJyPOfkoWQwz5CFvwY6pgFsXG3Zr03kWtsKhLsP2oqggWp8MyLfsxehHMFTgFCVIayaIW2zgU2mT3VP86tG1mrAS6Y9p%2F7bW89zAzvf9omagGQhNUmh6HT6wlpkm6FnCFCNiqkzZ4zz32R9dgAeSDv%2BaqilYgR%2BsgRBKqCkcCLSYNwfkpOhiHychoGFdW0yACIweQ1jitCdTE92jRxJhDbB2R6GA5KD2%2B%2BN4apb970LBPHYiJiK&X-Amz-Signature=88d2cf4b2025865b55ddf3487a056f673e7928e11e286643976f3cd184fdfc22&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPBMRVVZ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuEzX62AFXlyG6hPemWWuhHRaNBeTx34527IfjGNvgZAiBM%2FaaiYFa3fc%2B%2B97QlwH6MpydtcoBzzjyCl4iCjZDiOiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcYstS%2BLz6RP9JtZUKtwDGMaIEbHy4Wny%2FA6zbkbL9Bf0vygIgsP8aSve0iabHlHO2jAIpdGWKRNy5JCT90YAKZ1Vz%2FnfNLkUAeDBPQruhxCkxueNzs9PzE00Gbw7YHsL1yeX6SKAKdWATg2V5FlSZi%2FipwUvjdU8bvzUZILBOF0qjSs%2BKC5fjHfuMq1yTEvFvrHfC1srjX0MhzKN2S6j%2FFUYbOVsb%2B6G%2FKm3luOFTjJzlBmzhNzH2oyWrMedfqCt4feJaNtANkile8zwRqFPkqKCPGC1qPmZf1Ll5CnUUHTpc5Jz9dAfWMHhjyjb7uHTH9QVRkGAxJdmwkjZq6G%2BnpkH5IP0XXEib8GC1qYEIcrB80r%2FMy%2BcKNuwwj62J6mTAf6xLqCcCZF3JltdtBfAKl3OxKn9V88JLzPlrpbJJiuRmPwBcWJ8XrFRNBPYlO%2FH0GEfcRRkELkxnzwmNrF7AKz8KDnnfu%2B2lKxUGG4Krx1UwjZm%2FBNf3EtPnJSme0SWgn8qyDBh%2FMb2oE5gF1AcbiROkUqM4CmcK%2FyucJ6PW7gfEBcGWEGi8xJ9RfA0wdIUj3oQcWRpAe4Ai41DLexO7kmODilX7ciWPEVojPQuEeTW6Fmp%2FnVVCr7IJSsOu3y9ME%2FPvAJyPOfkoWQwz5CFvwY6pgFsXG3Zr03kWtsKhLsP2oqggWp8MyLfsxehHMFTgFCVIayaIW2zgU2mT3VP86tG1mrAS6Y9p%2F7bW89zAzvf9omagGQhNUmh6HT6wlpkm6FnCFCNiqkzZ4zz32R9dgAeSDv%2BaqilYgR%2BsgRBKqCkcCLSYNwfkpOhiHychoGFdW0yACIweQ1jitCdTE92jRxJhDbB2R6GA5KD2%2B%2BN4apb970LBPHYiJiK&X-Amz-Signature=a47d77460debe6ce1d4abbab3b5ddf1e620386c96503229d7e7f25190bcc92d1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPBMRVVZ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuEzX62AFXlyG6hPemWWuhHRaNBeTx34527IfjGNvgZAiBM%2FaaiYFa3fc%2B%2B97QlwH6MpydtcoBzzjyCl4iCjZDiOiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcYstS%2BLz6RP9JtZUKtwDGMaIEbHy4Wny%2FA6zbkbL9Bf0vygIgsP8aSve0iabHlHO2jAIpdGWKRNy5JCT90YAKZ1Vz%2FnfNLkUAeDBPQruhxCkxueNzs9PzE00Gbw7YHsL1yeX6SKAKdWATg2V5FlSZi%2FipwUvjdU8bvzUZILBOF0qjSs%2BKC5fjHfuMq1yTEvFvrHfC1srjX0MhzKN2S6j%2FFUYbOVsb%2B6G%2FKm3luOFTjJzlBmzhNzH2oyWrMedfqCt4feJaNtANkile8zwRqFPkqKCPGC1qPmZf1Ll5CnUUHTpc5Jz9dAfWMHhjyjb7uHTH9QVRkGAxJdmwkjZq6G%2BnpkH5IP0XXEib8GC1qYEIcrB80r%2FMy%2BcKNuwwj62J6mTAf6xLqCcCZF3JltdtBfAKl3OxKn9V88JLzPlrpbJJiuRmPwBcWJ8XrFRNBPYlO%2FH0GEfcRRkELkxnzwmNrF7AKz8KDnnfu%2B2lKxUGG4Krx1UwjZm%2FBNf3EtPnJSme0SWgn8qyDBh%2FMb2oE5gF1AcbiROkUqM4CmcK%2FyucJ6PW7gfEBcGWEGi8xJ9RfA0wdIUj3oQcWRpAe4Ai41DLexO7kmODilX7ciWPEVojPQuEeTW6Fmp%2FnVVCr7IJSsOu3y9ME%2FPvAJyPOfkoWQwz5CFvwY6pgFsXG3Zr03kWtsKhLsP2oqggWp8MyLfsxehHMFTgFCVIayaIW2zgU2mT3VP86tG1mrAS6Y9p%2F7bW89zAzvf9omagGQhNUmh6HT6wlpkm6FnCFCNiqkzZ4zz32R9dgAeSDv%2BaqilYgR%2BsgRBKqCkcCLSYNwfkpOhiHychoGFdW0yACIweQ1jitCdTE92jRxJhDbB2R6GA5KD2%2B%2BN4apb970LBPHYiJiK&X-Amz-Signature=2391d2d5a365a03a8c3d56d7296fd012c45f470f3972edeb27190d389acb50d2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPBMRVVZ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuEzX62AFXlyG6hPemWWuhHRaNBeTx34527IfjGNvgZAiBM%2FaaiYFa3fc%2B%2B97QlwH6MpydtcoBzzjyCl4iCjZDiOiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcYstS%2BLz6RP9JtZUKtwDGMaIEbHy4Wny%2FA6zbkbL9Bf0vygIgsP8aSve0iabHlHO2jAIpdGWKRNy5JCT90YAKZ1Vz%2FnfNLkUAeDBPQruhxCkxueNzs9PzE00Gbw7YHsL1yeX6SKAKdWATg2V5FlSZi%2FipwUvjdU8bvzUZILBOF0qjSs%2BKC5fjHfuMq1yTEvFvrHfC1srjX0MhzKN2S6j%2FFUYbOVsb%2B6G%2FKm3luOFTjJzlBmzhNzH2oyWrMedfqCt4feJaNtANkile8zwRqFPkqKCPGC1qPmZf1Ll5CnUUHTpc5Jz9dAfWMHhjyjb7uHTH9QVRkGAxJdmwkjZq6G%2BnpkH5IP0XXEib8GC1qYEIcrB80r%2FMy%2BcKNuwwj62J6mTAf6xLqCcCZF3JltdtBfAKl3OxKn9V88JLzPlrpbJJiuRmPwBcWJ8XrFRNBPYlO%2FH0GEfcRRkELkxnzwmNrF7AKz8KDnnfu%2B2lKxUGG4Krx1UwjZm%2FBNf3EtPnJSme0SWgn8qyDBh%2FMb2oE5gF1AcbiROkUqM4CmcK%2FyucJ6PW7gfEBcGWEGi8xJ9RfA0wdIUj3oQcWRpAe4Ai41DLexO7kmODilX7ciWPEVojPQuEeTW6Fmp%2FnVVCr7IJSsOu3y9ME%2FPvAJyPOfkoWQwz5CFvwY6pgFsXG3Zr03kWtsKhLsP2oqggWp8MyLfsxehHMFTgFCVIayaIW2zgU2mT3VP86tG1mrAS6Y9p%2F7bW89zAzvf9omagGQhNUmh6HT6wlpkm6FnCFCNiqkzZ4zz32R9dgAeSDv%2BaqilYgR%2BsgRBKqCkcCLSYNwfkpOhiHychoGFdW0yACIweQ1jitCdTE92jRxJhDbB2R6GA5KD2%2B%2BN4apb970LBPHYiJiK&X-Amz-Signature=36b911f25246ca84f0fb301774e5e4911eed1ab91813867ea96b1a82ca915eec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPBMRVVZ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuEzX62AFXlyG6hPemWWuhHRaNBeTx34527IfjGNvgZAiBM%2FaaiYFa3fc%2B%2B97QlwH6MpydtcoBzzjyCl4iCjZDiOiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcYstS%2BLz6RP9JtZUKtwDGMaIEbHy4Wny%2FA6zbkbL9Bf0vygIgsP8aSve0iabHlHO2jAIpdGWKRNy5JCT90YAKZ1Vz%2FnfNLkUAeDBPQruhxCkxueNzs9PzE00Gbw7YHsL1yeX6SKAKdWATg2V5FlSZi%2FipwUvjdU8bvzUZILBOF0qjSs%2BKC5fjHfuMq1yTEvFvrHfC1srjX0MhzKN2S6j%2FFUYbOVsb%2B6G%2FKm3luOFTjJzlBmzhNzH2oyWrMedfqCt4feJaNtANkile8zwRqFPkqKCPGC1qPmZf1Ll5CnUUHTpc5Jz9dAfWMHhjyjb7uHTH9QVRkGAxJdmwkjZq6G%2BnpkH5IP0XXEib8GC1qYEIcrB80r%2FMy%2BcKNuwwj62J6mTAf6xLqCcCZF3JltdtBfAKl3OxKn9V88JLzPlrpbJJiuRmPwBcWJ8XrFRNBPYlO%2FH0GEfcRRkELkxnzwmNrF7AKz8KDnnfu%2B2lKxUGG4Krx1UwjZm%2FBNf3EtPnJSme0SWgn8qyDBh%2FMb2oE5gF1AcbiROkUqM4CmcK%2FyucJ6PW7gfEBcGWEGi8xJ9RfA0wdIUj3oQcWRpAe4Ai41DLexO7kmODilX7ciWPEVojPQuEeTW6Fmp%2FnVVCr7IJSsOu3y9ME%2FPvAJyPOfkoWQwz5CFvwY6pgFsXG3Zr03kWtsKhLsP2oqggWp8MyLfsxehHMFTgFCVIayaIW2zgU2mT3VP86tG1mrAS6Y9p%2F7bW89zAzvf9omagGQhNUmh6HT6wlpkm6FnCFCNiqkzZ4zz32R9dgAeSDv%2BaqilYgR%2BsgRBKqCkcCLSYNwfkpOhiHychoGFdW0yACIweQ1jitCdTE92jRxJhDbB2R6GA5KD2%2B%2BN4apb970LBPHYiJiK&X-Amz-Signature=80cc7007c756a70f3acd4487f9696352e555389346a517a1dea59d88900a91ae&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
