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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYB25HOB%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQD5LMGdUuU6zZe8%2FDAHf70lbaoS7v4PagnW3Hja%2BgHcKAIgKxHdwXbiX0J4K4xkI4AH63Q2cg2CxzgTrmGPS6nVrcEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDA8peS6YlsPHcaqLwyrcAwsmiFjGe5GnezLZkBTjDXnCgxMGb%2BqttoKOd4S1%2B%2F8iU6UyGxdwhvsED1MX%2B8Mid4bDwa%2F1ZXLUKONqaCzbDT0b3T%2FlQk9WD3VocoKLSqHmSICL%2F%2FwkN2y%2BM6wkZuBxNqAJGpJ2bpTF%2F8EtWllxg8bkoi%2FHXHCToHpuF%2BfuWGiVseQoxn82rcr%2FXR0l20N6i35bcMuRFiVz3NYx49uqV03i5qUFSwxUTFJ%2BCkr%2FEgNuMjQpvEjkLONILo8QpMnr38GYz8Uv5iRfvl0%2BjbRwDB8BoXN%2FErENVvPwvH3RJH8eLg%2BaAvxKlMg%2BgneGGBBWo%2F77rx5Z2D0QYptL1gmt4rANSRmTw2al05YafVjrM7QqLJ60zg2Mo%2FYLRjF3XPAvh1Qyox5XwwYajyEOYdQdyWjPl2STpR7pYE5RMXAFfe3hZqWVmQ2SHS%2BSzlNaz4O4uxMoYlynhUqbAj1k2WRRYJESgPYJB2C9Y%2BC6%2BhX8mGOHv9MaeTPAeQN5%2BVe20BH2T6xvNb%2BtcmFtNeq8JplmwHpVl%2BV5AELD5TyEGSrh01fKJzObKNlw0a5w4xQjMaaAEVaPKqe77HQaRCxTFpUHbwcbuetXUo6NbJi6tk4wvhtgb9Txh66RUVZg%2BW40MJDMt8IGOqUBMqrM8OPdA10RNxCbMPrOdbApiTvAZ07YAFSeMKZXzT7sQmJQzNgChw3UHYfF1Y21Eqz%2BC4vqMzavb7Rrxy7vYuBgU9SIZ%2FpCsny0Z6FLscBuHZ7ooAidWWhp1VWq5mmjTPjFZ%2FO4mNsOz8g3xlxJN1y61EjMcUA2SgnVpobhmmh56WItYp0GO%2BkuOqE58uEiWHx9U8hiX5lTOxjiyC1QUXSpUrwq&X-Amz-Signature=e3b602e479399873986091d66d17bf97197b3f78f2609b30e9cdc6f58793bb92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYB25HOB%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQD5LMGdUuU6zZe8%2FDAHf70lbaoS7v4PagnW3Hja%2BgHcKAIgKxHdwXbiX0J4K4xkI4AH63Q2cg2CxzgTrmGPS6nVrcEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDA8peS6YlsPHcaqLwyrcAwsmiFjGe5GnezLZkBTjDXnCgxMGb%2BqttoKOd4S1%2B%2F8iU6UyGxdwhvsED1MX%2B8Mid4bDwa%2F1ZXLUKONqaCzbDT0b3T%2FlQk9WD3VocoKLSqHmSICL%2F%2FwkN2y%2BM6wkZuBxNqAJGpJ2bpTF%2F8EtWllxg8bkoi%2FHXHCToHpuF%2BfuWGiVseQoxn82rcr%2FXR0l20N6i35bcMuRFiVz3NYx49uqV03i5qUFSwxUTFJ%2BCkr%2FEgNuMjQpvEjkLONILo8QpMnr38GYz8Uv5iRfvl0%2BjbRwDB8BoXN%2FErENVvPwvH3RJH8eLg%2BaAvxKlMg%2BgneGGBBWo%2F77rx5Z2D0QYptL1gmt4rANSRmTw2al05YafVjrM7QqLJ60zg2Mo%2FYLRjF3XPAvh1Qyox5XwwYajyEOYdQdyWjPl2STpR7pYE5RMXAFfe3hZqWVmQ2SHS%2BSzlNaz4O4uxMoYlynhUqbAj1k2WRRYJESgPYJB2C9Y%2BC6%2BhX8mGOHv9MaeTPAeQN5%2BVe20BH2T6xvNb%2BtcmFtNeq8JplmwHpVl%2BV5AELD5TyEGSrh01fKJzObKNlw0a5w4xQjMaaAEVaPKqe77HQaRCxTFpUHbwcbuetXUo6NbJi6tk4wvhtgb9Txh66RUVZg%2BW40MJDMt8IGOqUBMqrM8OPdA10RNxCbMPrOdbApiTvAZ07YAFSeMKZXzT7sQmJQzNgChw3UHYfF1Y21Eqz%2BC4vqMzavb7Rrxy7vYuBgU9SIZ%2FpCsny0Z6FLscBuHZ7ooAidWWhp1VWq5mmjTPjFZ%2FO4mNsOz8g3xlxJN1y61EjMcUA2SgnVpobhmmh56WItYp0GO%2BkuOqE58uEiWHx9U8hiX5lTOxjiyC1QUXSpUrwq&X-Amz-Signature=7a3737818daddaa19078f8d7234aa38f033f075808865e918b856a3aebdf2aa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYB25HOB%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQD5LMGdUuU6zZe8%2FDAHf70lbaoS7v4PagnW3Hja%2BgHcKAIgKxHdwXbiX0J4K4xkI4AH63Q2cg2CxzgTrmGPS6nVrcEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDA8peS6YlsPHcaqLwyrcAwsmiFjGe5GnezLZkBTjDXnCgxMGb%2BqttoKOd4S1%2B%2F8iU6UyGxdwhvsED1MX%2B8Mid4bDwa%2F1ZXLUKONqaCzbDT0b3T%2FlQk9WD3VocoKLSqHmSICL%2F%2FwkN2y%2BM6wkZuBxNqAJGpJ2bpTF%2F8EtWllxg8bkoi%2FHXHCToHpuF%2BfuWGiVseQoxn82rcr%2FXR0l20N6i35bcMuRFiVz3NYx49uqV03i5qUFSwxUTFJ%2BCkr%2FEgNuMjQpvEjkLONILo8QpMnr38GYz8Uv5iRfvl0%2BjbRwDB8BoXN%2FErENVvPwvH3RJH8eLg%2BaAvxKlMg%2BgneGGBBWo%2F77rx5Z2D0QYptL1gmt4rANSRmTw2al05YafVjrM7QqLJ60zg2Mo%2FYLRjF3XPAvh1Qyox5XwwYajyEOYdQdyWjPl2STpR7pYE5RMXAFfe3hZqWVmQ2SHS%2BSzlNaz4O4uxMoYlynhUqbAj1k2WRRYJESgPYJB2C9Y%2BC6%2BhX8mGOHv9MaeTPAeQN5%2BVe20BH2T6xvNb%2BtcmFtNeq8JplmwHpVl%2BV5AELD5TyEGSrh01fKJzObKNlw0a5w4xQjMaaAEVaPKqe77HQaRCxTFpUHbwcbuetXUo6NbJi6tk4wvhtgb9Txh66RUVZg%2BW40MJDMt8IGOqUBMqrM8OPdA10RNxCbMPrOdbApiTvAZ07YAFSeMKZXzT7sQmJQzNgChw3UHYfF1Y21Eqz%2BC4vqMzavb7Rrxy7vYuBgU9SIZ%2FpCsny0Z6FLscBuHZ7ooAidWWhp1VWq5mmjTPjFZ%2FO4mNsOz8g3xlxJN1y61EjMcUA2SgnVpobhmmh56WItYp0GO%2BkuOqE58uEiWHx9U8hiX5lTOxjiyC1QUXSpUrwq&X-Amz-Signature=bd32017849e21fc1ef855d701000676fd1b252904929c9bcf7431cdf3fc78ff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYB25HOB%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQD5LMGdUuU6zZe8%2FDAHf70lbaoS7v4PagnW3Hja%2BgHcKAIgKxHdwXbiX0J4K4xkI4AH63Q2cg2CxzgTrmGPS6nVrcEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDA8peS6YlsPHcaqLwyrcAwsmiFjGe5GnezLZkBTjDXnCgxMGb%2BqttoKOd4S1%2B%2F8iU6UyGxdwhvsED1MX%2B8Mid4bDwa%2F1ZXLUKONqaCzbDT0b3T%2FlQk9WD3VocoKLSqHmSICL%2F%2FwkN2y%2BM6wkZuBxNqAJGpJ2bpTF%2F8EtWllxg8bkoi%2FHXHCToHpuF%2BfuWGiVseQoxn82rcr%2FXR0l20N6i35bcMuRFiVz3NYx49uqV03i5qUFSwxUTFJ%2BCkr%2FEgNuMjQpvEjkLONILo8QpMnr38GYz8Uv5iRfvl0%2BjbRwDB8BoXN%2FErENVvPwvH3RJH8eLg%2BaAvxKlMg%2BgneGGBBWo%2F77rx5Z2D0QYptL1gmt4rANSRmTw2al05YafVjrM7QqLJ60zg2Mo%2FYLRjF3XPAvh1Qyox5XwwYajyEOYdQdyWjPl2STpR7pYE5RMXAFfe3hZqWVmQ2SHS%2BSzlNaz4O4uxMoYlynhUqbAj1k2WRRYJESgPYJB2C9Y%2BC6%2BhX8mGOHv9MaeTPAeQN5%2BVe20BH2T6xvNb%2BtcmFtNeq8JplmwHpVl%2BV5AELD5TyEGSrh01fKJzObKNlw0a5w4xQjMaaAEVaPKqe77HQaRCxTFpUHbwcbuetXUo6NbJi6tk4wvhtgb9Txh66RUVZg%2BW40MJDMt8IGOqUBMqrM8OPdA10RNxCbMPrOdbApiTvAZ07YAFSeMKZXzT7sQmJQzNgChw3UHYfF1Y21Eqz%2BC4vqMzavb7Rrxy7vYuBgU9SIZ%2FpCsny0Z6FLscBuHZ7ooAidWWhp1VWq5mmjTPjFZ%2FO4mNsOz8g3xlxJN1y61EjMcUA2SgnVpobhmmh56WItYp0GO%2BkuOqE58uEiWHx9U8hiX5lTOxjiyC1QUXSpUrwq&X-Amz-Signature=643eaf3aa4c0b3691d937a65fdef89d7775ab661060a02ab1177e30bb58908b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYB25HOB%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQD5LMGdUuU6zZe8%2FDAHf70lbaoS7v4PagnW3Hja%2BgHcKAIgKxHdwXbiX0J4K4xkI4AH63Q2cg2CxzgTrmGPS6nVrcEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDA8peS6YlsPHcaqLwyrcAwsmiFjGe5GnezLZkBTjDXnCgxMGb%2BqttoKOd4S1%2B%2F8iU6UyGxdwhvsED1MX%2B8Mid4bDwa%2F1ZXLUKONqaCzbDT0b3T%2FlQk9WD3VocoKLSqHmSICL%2F%2FwkN2y%2BM6wkZuBxNqAJGpJ2bpTF%2F8EtWllxg8bkoi%2FHXHCToHpuF%2BfuWGiVseQoxn82rcr%2FXR0l20N6i35bcMuRFiVz3NYx49uqV03i5qUFSwxUTFJ%2BCkr%2FEgNuMjQpvEjkLONILo8QpMnr38GYz8Uv5iRfvl0%2BjbRwDB8BoXN%2FErENVvPwvH3RJH8eLg%2BaAvxKlMg%2BgneGGBBWo%2F77rx5Z2D0QYptL1gmt4rANSRmTw2al05YafVjrM7QqLJ60zg2Mo%2FYLRjF3XPAvh1Qyox5XwwYajyEOYdQdyWjPl2STpR7pYE5RMXAFfe3hZqWVmQ2SHS%2BSzlNaz4O4uxMoYlynhUqbAj1k2WRRYJESgPYJB2C9Y%2BC6%2BhX8mGOHv9MaeTPAeQN5%2BVe20BH2T6xvNb%2BtcmFtNeq8JplmwHpVl%2BV5AELD5TyEGSrh01fKJzObKNlw0a5w4xQjMaaAEVaPKqe77HQaRCxTFpUHbwcbuetXUo6NbJi6tk4wvhtgb9Txh66RUVZg%2BW40MJDMt8IGOqUBMqrM8OPdA10RNxCbMPrOdbApiTvAZ07YAFSeMKZXzT7sQmJQzNgChw3UHYfF1Y21Eqz%2BC4vqMzavb7Rrxy7vYuBgU9SIZ%2FpCsny0Z6FLscBuHZ7ooAidWWhp1VWq5mmjTPjFZ%2FO4mNsOz8g3xlxJN1y61EjMcUA2SgnVpobhmmh56WItYp0GO%2BkuOqE58uEiWHx9U8hiX5lTOxjiyC1QUXSpUrwq&X-Amz-Signature=3a5d1827b1f6ba2baa4a1ba7a22b0e8e6e8bae547c815aef93b16aa6962c201c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
