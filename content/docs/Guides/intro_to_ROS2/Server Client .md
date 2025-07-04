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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SISINLLI%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDN9swGD%2FQ5bc3N7pDLakYpNVscDvCI6pwZCvFVtN4BBQIgHVOXq7%2BuSYFtouvmNaLML4OPB5Tj48QLCBWipT0sFdgq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDI3zRd9y%2FQQntMBvRircA40RikSuGnVAlLQ8b3iHl7%2FrLC42pZ70gCtqAWC7sHRUuwc%2FTNQc7A0%2FntwUXgqZNrBIfvTiatrhsp1aj0OECF%2FqbuCwhu1kdTkWAZ0O7zRSls%2FXV2WpdQjhtBEAHPnOiQCt8ucviGXwC44tpwrcd%2FQ45Dq3tih8SNgckLMh5coukrwQh8TpsBe%2FWiRwAP8TpjLTwpaeN0ApBWBBbNtdMLiJ%2FbBLYJH0LMDZ0P8uV5cqCCj06BiB7PvpYq0ykiHno6O5iGDNJvM2hv9o%2BC8HtoEVJelrT07W92MOjulYJnTFCjA8CYfUb51AKqrLPe3aMHiZglA3vJcqD4%2BillcNNzb07WBYl7qr6ctuImKxFvO5EZxkE5TcyVVCPfdsr5QqMnNoWJYBQP6IJHEKH3sYCfD8JZmwuBSwkaJiyqZsGIbYL8dTk%2BIGX2NgSyrR8TQXyCcktQK2wsKzy73OkbOStkC0LaL4WEJ%2F7spddGDrhDdcRKU6h%2F5lcCC1bEHf2h2AeT53bFeIVjuHrOxfXP0uP9kRpjANvi6e3smVlPL4aarQlxruzUICG56zapgup6JL2dYVJSbrL85VsuzU5XoqTwhG%2Ft4hMeRasA4PPtOVPkzfNbPjeYB4%2Bp%2BNm62NMPTsn8MGOqUBUFXHw328Erhq%2FtzlMTLe2uGKXqI0mRT%2FbaVfThfNZ04Uo1oj4ZXyIndnH1tAeXgJgY6VR6RvIOhYVeKd62xClTBwrtgh13r2eWE%2BHtn6X4WJBCl1h9s%2F1Lo7mN9DNU8rkQK7%2BrwiqDlTQ%2FutEuaDrSZf1zOYZxd3oJDjO3QEi1vuQdeW1zTxYF37ljTWEWuB1C7ZscE4zPl6oaY%2BHuwsYOXwQHA6&X-Amz-Signature=d53d2891e3606afe7dcb3d9ba044eecc6c698e054414fc0a6282625594d4892f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SISINLLI%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDN9swGD%2FQ5bc3N7pDLakYpNVscDvCI6pwZCvFVtN4BBQIgHVOXq7%2BuSYFtouvmNaLML4OPB5Tj48QLCBWipT0sFdgq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDI3zRd9y%2FQQntMBvRircA40RikSuGnVAlLQ8b3iHl7%2FrLC42pZ70gCtqAWC7sHRUuwc%2FTNQc7A0%2FntwUXgqZNrBIfvTiatrhsp1aj0OECF%2FqbuCwhu1kdTkWAZ0O7zRSls%2FXV2WpdQjhtBEAHPnOiQCt8ucviGXwC44tpwrcd%2FQ45Dq3tih8SNgckLMh5coukrwQh8TpsBe%2FWiRwAP8TpjLTwpaeN0ApBWBBbNtdMLiJ%2FbBLYJH0LMDZ0P8uV5cqCCj06BiB7PvpYq0ykiHno6O5iGDNJvM2hv9o%2BC8HtoEVJelrT07W92MOjulYJnTFCjA8CYfUb51AKqrLPe3aMHiZglA3vJcqD4%2BillcNNzb07WBYl7qr6ctuImKxFvO5EZxkE5TcyVVCPfdsr5QqMnNoWJYBQP6IJHEKH3sYCfD8JZmwuBSwkaJiyqZsGIbYL8dTk%2BIGX2NgSyrR8TQXyCcktQK2wsKzy73OkbOStkC0LaL4WEJ%2F7spddGDrhDdcRKU6h%2F5lcCC1bEHf2h2AeT53bFeIVjuHrOxfXP0uP9kRpjANvi6e3smVlPL4aarQlxruzUICG56zapgup6JL2dYVJSbrL85VsuzU5XoqTwhG%2Ft4hMeRasA4PPtOVPkzfNbPjeYB4%2Bp%2BNm62NMPTsn8MGOqUBUFXHw328Erhq%2FtzlMTLe2uGKXqI0mRT%2FbaVfThfNZ04Uo1oj4ZXyIndnH1tAeXgJgY6VR6RvIOhYVeKd62xClTBwrtgh13r2eWE%2BHtn6X4WJBCl1h9s%2F1Lo7mN9DNU8rkQK7%2BrwiqDlTQ%2FutEuaDrSZf1zOYZxd3oJDjO3QEi1vuQdeW1zTxYF37ljTWEWuB1C7ZscE4zPl6oaY%2BHuwsYOXwQHA6&X-Amz-Signature=28fc104f1287d686eb4bdc0f9f3565cb26ee292e7646c09f3b90fba545c3d1a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SISINLLI%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDN9swGD%2FQ5bc3N7pDLakYpNVscDvCI6pwZCvFVtN4BBQIgHVOXq7%2BuSYFtouvmNaLML4OPB5Tj48QLCBWipT0sFdgq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDI3zRd9y%2FQQntMBvRircA40RikSuGnVAlLQ8b3iHl7%2FrLC42pZ70gCtqAWC7sHRUuwc%2FTNQc7A0%2FntwUXgqZNrBIfvTiatrhsp1aj0OECF%2FqbuCwhu1kdTkWAZ0O7zRSls%2FXV2WpdQjhtBEAHPnOiQCt8ucviGXwC44tpwrcd%2FQ45Dq3tih8SNgckLMh5coukrwQh8TpsBe%2FWiRwAP8TpjLTwpaeN0ApBWBBbNtdMLiJ%2FbBLYJH0LMDZ0P8uV5cqCCj06BiB7PvpYq0ykiHno6O5iGDNJvM2hv9o%2BC8HtoEVJelrT07W92MOjulYJnTFCjA8CYfUb51AKqrLPe3aMHiZglA3vJcqD4%2BillcNNzb07WBYl7qr6ctuImKxFvO5EZxkE5TcyVVCPfdsr5QqMnNoWJYBQP6IJHEKH3sYCfD8JZmwuBSwkaJiyqZsGIbYL8dTk%2BIGX2NgSyrR8TQXyCcktQK2wsKzy73OkbOStkC0LaL4WEJ%2F7spddGDrhDdcRKU6h%2F5lcCC1bEHf2h2AeT53bFeIVjuHrOxfXP0uP9kRpjANvi6e3smVlPL4aarQlxruzUICG56zapgup6JL2dYVJSbrL85VsuzU5XoqTwhG%2Ft4hMeRasA4PPtOVPkzfNbPjeYB4%2Bp%2BNm62NMPTsn8MGOqUBUFXHw328Erhq%2FtzlMTLe2uGKXqI0mRT%2FbaVfThfNZ04Uo1oj4ZXyIndnH1tAeXgJgY6VR6RvIOhYVeKd62xClTBwrtgh13r2eWE%2BHtn6X4WJBCl1h9s%2F1Lo7mN9DNU8rkQK7%2BrwiqDlTQ%2FutEuaDrSZf1zOYZxd3oJDjO3QEi1vuQdeW1zTxYF37ljTWEWuB1C7ZscE4zPl6oaY%2BHuwsYOXwQHA6&X-Amz-Signature=05a3b0725e7cd921d5209744eb14c433ef1a7f5b22d8ed9b816e84e307a04ce6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SISINLLI%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDN9swGD%2FQ5bc3N7pDLakYpNVscDvCI6pwZCvFVtN4BBQIgHVOXq7%2BuSYFtouvmNaLML4OPB5Tj48QLCBWipT0sFdgq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDI3zRd9y%2FQQntMBvRircA40RikSuGnVAlLQ8b3iHl7%2FrLC42pZ70gCtqAWC7sHRUuwc%2FTNQc7A0%2FntwUXgqZNrBIfvTiatrhsp1aj0OECF%2FqbuCwhu1kdTkWAZ0O7zRSls%2FXV2WpdQjhtBEAHPnOiQCt8ucviGXwC44tpwrcd%2FQ45Dq3tih8SNgckLMh5coukrwQh8TpsBe%2FWiRwAP8TpjLTwpaeN0ApBWBBbNtdMLiJ%2FbBLYJH0LMDZ0P8uV5cqCCj06BiB7PvpYq0ykiHno6O5iGDNJvM2hv9o%2BC8HtoEVJelrT07W92MOjulYJnTFCjA8CYfUb51AKqrLPe3aMHiZglA3vJcqD4%2BillcNNzb07WBYl7qr6ctuImKxFvO5EZxkE5TcyVVCPfdsr5QqMnNoWJYBQP6IJHEKH3sYCfD8JZmwuBSwkaJiyqZsGIbYL8dTk%2BIGX2NgSyrR8TQXyCcktQK2wsKzy73OkbOStkC0LaL4WEJ%2F7spddGDrhDdcRKU6h%2F5lcCC1bEHf2h2AeT53bFeIVjuHrOxfXP0uP9kRpjANvi6e3smVlPL4aarQlxruzUICG56zapgup6JL2dYVJSbrL85VsuzU5XoqTwhG%2Ft4hMeRasA4PPtOVPkzfNbPjeYB4%2Bp%2BNm62NMPTsn8MGOqUBUFXHw328Erhq%2FtzlMTLe2uGKXqI0mRT%2FbaVfThfNZ04Uo1oj4ZXyIndnH1tAeXgJgY6VR6RvIOhYVeKd62xClTBwrtgh13r2eWE%2BHtn6X4WJBCl1h9s%2F1Lo7mN9DNU8rkQK7%2BrwiqDlTQ%2FutEuaDrSZf1zOYZxd3oJDjO3QEi1vuQdeW1zTxYF37ljTWEWuB1C7ZscE4zPl6oaY%2BHuwsYOXwQHA6&X-Amz-Signature=513a6a0e7045453d3c44fc4b0c7336e8817c8cd8b4be02233e40ff568c2af5f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SISINLLI%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDN9swGD%2FQ5bc3N7pDLakYpNVscDvCI6pwZCvFVtN4BBQIgHVOXq7%2BuSYFtouvmNaLML4OPB5Tj48QLCBWipT0sFdgq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDI3zRd9y%2FQQntMBvRircA40RikSuGnVAlLQ8b3iHl7%2FrLC42pZ70gCtqAWC7sHRUuwc%2FTNQc7A0%2FntwUXgqZNrBIfvTiatrhsp1aj0OECF%2FqbuCwhu1kdTkWAZ0O7zRSls%2FXV2WpdQjhtBEAHPnOiQCt8ucviGXwC44tpwrcd%2FQ45Dq3tih8SNgckLMh5coukrwQh8TpsBe%2FWiRwAP8TpjLTwpaeN0ApBWBBbNtdMLiJ%2FbBLYJH0LMDZ0P8uV5cqCCj06BiB7PvpYq0ykiHno6O5iGDNJvM2hv9o%2BC8HtoEVJelrT07W92MOjulYJnTFCjA8CYfUb51AKqrLPe3aMHiZglA3vJcqD4%2BillcNNzb07WBYl7qr6ctuImKxFvO5EZxkE5TcyVVCPfdsr5QqMnNoWJYBQP6IJHEKH3sYCfD8JZmwuBSwkaJiyqZsGIbYL8dTk%2BIGX2NgSyrR8TQXyCcktQK2wsKzy73OkbOStkC0LaL4WEJ%2F7spddGDrhDdcRKU6h%2F5lcCC1bEHf2h2AeT53bFeIVjuHrOxfXP0uP9kRpjANvi6e3smVlPL4aarQlxruzUICG56zapgup6JL2dYVJSbrL85VsuzU5XoqTwhG%2Ft4hMeRasA4PPtOVPkzfNbPjeYB4%2Bp%2BNm62NMPTsn8MGOqUBUFXHw328Erhq%2FtzlMTLe2uGKXqI0mRT%2FbaVfThfNZ04Uo1oj4ZXyIndnH1tAeXgJgY6VR6RvIOhYVeKd62xClTBwrtgh13r2eWE%2BHtn6X4WJBCl1h9s%2F1Lo7mN9DNU8rkQK7%2BrwiqDlTQ%2FutEuaDrSZf1zOYZxd3oJDjO3QEi1vuQdeW1zTxYF37ljTWEWuB1C7ZscE4zPl6oaY%2BHuwsYOXwQHA6&X-Amz-Signature=a79497dc7991a34731740a4acde74b47cc8fab8d077f88ab8707940c16e3d43c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
