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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLNNADFZ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDN6cb%2B9RRkVFWPSpf%2BOxdHfOgSiUYBpkgRYi6S6AZdNwIhANDV1%2FmI7Kp4xGcqZIeg0KF3llZ%2FlCEXBugEeD1XA9jBKv8DCFcQABoMNjM3NDIzMTgzODA1IgzJ9hbA9Upwo2ijOAcq3ANVXxjdz0NTboQzTXrT7UMmV5ahI90qDif%2BQ5K2aSc9GCuxmPfqy3Fsubz6whhOzJLJ1ZyWEC8uKwykDyXxk2795WGMhkvh2Q401JWS1%2BqvHUA4EULDJ7k8g3DP8b0Cd%2FJ2xh6L1HNHyR75NGihmWCjtLyqh0nZo5w1c1O37YVmOPlqealp3wLy7QjKDuAviWHq%2B29mq6fN0fjI96d2veMVLL2FjAjcTxE7yy9AqDWNk0lj2tF5nHXqPHmC1GCbEVbjru6gNsd7FyRfTA7w1Xe0D880vSMiGD5AUyEI8Xl7Z0u75MItT5xXDLZP5mwNt0bkVzCKcxwsyTdrM%2Bp0jwti1LgaEg%2BdG2ZZx%2F51v22tf2VJL4hVUrQoRoJ7kIlLzXyo65Lm21Mrv560TwWSOCyOM1iwK3Kstg%2BHNj4COQOOv7d8r6oDfQylODDS6Nx1DqP7B3NspcD7EbSK8YZadDfrdqI2Y9DwFtn8udE6v4%2BFQ0LOHns%2BLxFS6bzOUf2XKah%2BJXiuBYqK7%2BUMz%2B5v7NcrIYT4NB9jtrGoF7Mb6sAZAJCkgfJbFEErCqcbHirfeDn2uPP3F0Ty6BkC6vc8YGLit75tiuMtIyo9eDNzOeOl2M3WOF%2FNhRaeI4GjSDChm5G9BjqkAd8ASEoYXBA1%2BKdpBES3GbB1%2FFEn%2FLLXWJYxAAWT2pBwIq5I2LZ69em9S5srPhwamdt2kliseNf1U%2BbopHIuUk6TKJDSiC6AeAn0a%2FXObes3CLsscJLwjn75i%2BqEkZ1OE3e5jNgldlPIMDxQOk03ydmQaXr5l%2B9grEVS3eoE23T0bp818A3AM5Rxvzj4hUspWWFgu6HnR0E%2F8QqK0s6X8nBO%2Bfuc&X-Amz-Signature=76547f01036631dda8fac94314ceebea0a7f8c4a0e2024d8ea552be584a95426&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLNNADFZ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDN6cb%2B9RRkVFWPSpf%2BOxdHfOgSiUYBpkgRYi6S6AZdNwIhANDV1%2FmI7Kp4xGcqZIeg0KF3llZ%2FlCEXBugEeD1XA9jBKv8DCFcQABoMNjM3NDIzMTgzODA1IgzJ9hbA9Upwo2ijOAcq3ANVXxjdz0NTboQzTXrT7UMmV5ahI90qDif%2BQ5K2aSc9GCuxmPfqy3Fsubz6whhOzJLJ1ZyWEC8uKwykDyXxk2795WGMhkvh2Q401JWS1%2BqvHUA4EULDJ7k8g3DP8b0Cd%2FJ2xh6L1HNHyR75NGihmWCjtLyqh0nZo5w1c1O37YVmOPlqealp3wLy7QjKDuAviWHq%2B29mq6fN0fjI96d2veMVLL2FjAjcTxE7yy9AqDWNk0lj2tF5nHXqPHmC1GCbEVbjru6gNsd7FyRfTA7w1Xe0D880vSMiGD5AUyEI8Xl7Z0u75MItT5xXDLZP5mwNt0bkVzCKcxwsyTdrM%2Bp0jwti1LgaEg%2BdG2ZZx%2F51v22tf2VJL4hVUrQoRoJ7kIlLzXyo65Lm21Mrv560TwWSOCyOM1iwK3Kstg%2BHNj4COQOOv7d8r6oDfQylODDS6Nx1DqP7B3NspcD7EbSK8YZadDfrdqI2Y9DwFtn8udE6v4%2BFQ0LOHns%2BLxFS6bzOUf2XKah%2BJXiuBYqK7%2BUMz%2B5v7NcrIYT4NB9jtrGoF7Mb6sAZAJCkgfJbFEErCqcbHirfeDn2uPP3F0Ty6BkC6vc8YGLit75tiuMtIyo9eDNzOeOl2M3WOF%2FNhRaeI4GjSDChm5G9BjqkAd8ASEoYXBA1%2BKdpBES3GbB1%2FFEn%2FLLXWJYxAAWT2pBwIq5I2LZ69em9S5srPhwamdt2kliseNf1U%2BbopHIuUk6TKJDSiC6AeAn0a%2FXObes3CLsscJLwjn75i%2BqEkZ1OE3e5jNgldlPIMDxQOk03ydmQaXr5l%2B9grEVS3eoE23T0bp818A3AM5Rxvzj4hUspWWFgu6HnR0E%2F8QqK0s6X8nBO%2Bfuc&X-Amz-Signature=88f54a89f3a4d4d267a55f2142438c6aec7e991000052ee7388e832a0cc6b9b4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLNNADFZ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDN6cb%2B9RRkVFWPSpf%2BOxdHfOgSiUYBpkgRYi6S6AZdNwIhANDV1%2FmI7Kp4xGcqZIeg0KF3llZ%2FlCEXBugEeD1XA9jBKv8DCFcQABoMNjM3NDIzMTgzODA1IgzJ9hbA9Upwo2ijOAcq3ANVXxjdz0NTboQzTXrT7UMmV5ahI90qDif%2BQ5K2aSc9GCuxmPfqy3Fsubz6whhOzJLJ1ZyWEC8uKwykDyXxk2795WGMhkvh2Q401JWS1%2BqvHUA4EULDJ7k8g3DP8b0Cd%2FJ2xh6L1HNHyR75NGihmWCjtLyqh0nZo5w1c1O37YVmOPlqealp3wLy7QjKDuAviWHq%2B29mq6fN0fjI96d2veMVLL2FjAjcTxE7yy9AqDWNk0lj2tF5nHXqPHmC1GCbEVbjru6gNsd7FyRfTA7w1Xe0D880vSMiGD5AUyEI8Xl7Z0u75MItT5xXDLZP5mwNt0bkVzCKcxwsyTdrM%2Bp0jwti1LgaEg%2BdG2ZZx%2F51v22tf2VJL4hVUrQoRoJ7kIlLzXyo65Lm21Mrv560TwWSOCyOM1iwK3Kstg%2BHNj4COQOOv7d8r6oDfQylODDS6Nx1DqP7B3NspcD7EbSK8YZadDfrdqI2Y9DwFtn8udE6v4%2BFQ0LOHns%2BLxFS6bzOUf2XKah%2BJXiuBYqK7%2BUMz%2B5v7NcrIYT4NB9jtrGoF7Mb6sAZAJCkgfJbFEErCqcbHirfeDn2uPP3F0Ty6BkC6vc8YGLit75tiuMtIyo9eDNzOeOl2M3WOF%2FNhRaeI4GjSDChm5G9BjqkAd8ASEoYXBA1%2BKdpBES3GbB1%2FFEn%2FLLXWJYxAAWT2pBwIq5I2LZ69em9S5srPhwamdt2kliseNf1U%2BbopHIuUk6TKJDSiC6AeAn0a%2FXObes3CLsscJLwjn75i%2BqEkZ1OE3e5jNgldlPIMDxQOk03ydmQaXr5l%2B9grEVS3eoE23T0bp818A3AM5Rxvzj4hUspWWFgu6HnR0E%2F8QqK0s6X8nBO%2Bfuc&X-Amz-Signature=bf9f75b67e7eeb00f7c24223b13ee7c31052f35067374254f0c2f8833efdcf35&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLNNADFZ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDN6cb%2B9RRkVFWPSpf%2BOxdHfOgSiUYBpkgRYi6S6AZdNwIhANDV1%2FmI7Kp4xGcqZIeg0KF3llZ%2FlCEXBugEeD1XA9jBKv8DCFcQABoMNjM3NDIzMTgzODA1IgzJ9hbA9Upwo2ijOAcq3ANVXxjdz0NTboQzTXrT7UMmV5ahI90qDif%2BQ5K2aSc9GCuxmPfqy3Fsubz6whhOzJLJ1ZyWEC8uKwykDyXxk2795WGMhkvh2Q401JWS1%2BqvHUA4EULDJ7k8g3DP8b0Cd%2FJ2xh6L1HNHyR75NGihmWCjtLyqh0nZo5w1c1O37YVmOPlqealp3wLy7QjKDuAviWHq%2B29mq6fN0fjI96d2veMVLL2FjAjcTxE7yy9AqDWNk0lj2tF5nHXqPHmC1GCbEVbjru6gNsd7FyRfTA7w1Xe0D880vSMiGD5AUyEI8Xl7Z0u75MItT5xXDLZP5mwNt0bkVzCKcxwsyTdrM%2Bp0jwti1LgaEg%2BdG2ZZx%2F51v22tf2VJL4hVUrQoRoJ7kIlLzXyo65Lm21Mrv560TwWSOCyOM1iwK3Kstg%2BHNj4COQOOv7d8r6oDfQylODDS6Nx1DqP7B3NspcD7EbSK8YZadDfrdqI2Y9DwFtn8udE6v4%2BFQ0LOHns%2BLxFS6bzOUf2XKah%2BJXiuBYqK7%2BUMz%2B5v7NcrIYT4NB9jtrGoF7Mb6sAZAJCkgfJbFEErCqcbHirfeDn2uPP3F0Ty6BkC6vc8YGLit75tiuMtIyo9eDNzOeOl2M3WOF%2FNhRaeI4GjSDChm5G9BjqkAd8ASEoYXBA1%2BKdpBES3GbB1%2FFEn%2FLLXWJYxAAWT2pBwIq5I2LZ69em9S5srPhwamdt2kliseNf1U%2BbopHIuUk6TKJDSiC6AeAn0a%2FXObes3CLsscJLwjn75i%2BqEkZ1OE3e5jNgldlPIMDxQOk03ydmQaXr5l%2B9grEVS3eoE23T0bp818A3AM5Rxvzj4hUspWWFgu6HnR0E%2F8QqK0s6X8nBO%2Bfuc&X-Amz-Signature=83809ce9bb66ab77d80fc4a21b32c76adbf803936565b63cc54058a35eae5952&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLNNADFZ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDN6cb%2B9RRkVFWPSpf%2BOxdHfOgSiUYBpkgRYi6S6AZdNwIhANDV1%2FmI7Kp4xGcqZIeg0KF3llZ%2FlCEXBugEeD1XA9jBKv8DCFcQABoMNjM3NDIzMTgzODA1IgzJ9hbA9Upwo2ijOAcq3ANVXxjdz0NTboQzTXrT7UMmV5ahI90qDif%2BQ5K2aSc9GCuxmPfqy3Fsubz6whhOzJLJ1ZyWEC8uKwykDyXxk2795WGMhkvh2Q401JWS1%2BqvHUA4EULDJ7k8g3DP8b0Cd%2FJ2xh6L1HNHyR75NGihmWCjtLyqh0nZo5w1c1O37YVmOPlqealp3wLy7QjKDuAviWHq%2B29mq6fN0fjI96d2veMVLL2FjAjcTxE7yy9AqDWNk0lj2tF5nHXqPHmC1GCbEVbjru6gNsd7FyRfTA7w1Xe0D880vSMiGD5AUyEI8Xl7Z0u75MItT5xXDLZP5mwNt0bkVzCKcxwsyTdrM%2Bp0jwti1LgaEg%2BdG2ZZx%2F51v22tf2VJL4hVUrQoRoJ7kIlLzXyo65Lm21Mrv560TwWSOCyOM1iwK3Kstg%2BHNj4COQOOv7d8r6oDfQylODDS6Nx1DqP7B3NspcD7EbSK8YZadDfrdqI2Y9DwFtn8udE6v4%2BFQ0LOHns%2BLxFS6bzOUf2XKah%2BJXiuBYqK7%2BUMz%2B5v7NcrIYT4NB9jtrGoF7Mb6sAZAJCkgfJbFEErCqcbHirfeDn2uPP3F0Ty6BkC6vc8YGLit75tiuMtIyo9eDNzOeOl2M3WOF%2FNhRaeI4GjSDChm5G9BjqkAd8ASEoYXBA1%2BKdpBES3GbB1%2FFEn%2FLLXWJYxAAWT2pBwIq5I2LZ69em9S5srPhwamdt2kliseNf1U%2BbopHIuUk6TKJDSiC6AeAn0a%2FXObes3CLsscJLwjn75i%2BqEkZ1OE3e5jNgldlPIMDxQOk03ydmQaXr5l%2B9grEVS3eoE23T0bp818A3AM5Rxvzj4hUspWWFgu6HnR0E%2F8QqK0s6X8nBO%2Bfuc&X-Amz-Signature=fe9eb5a9bcc0f76f4364217bec4cb7d7b5b2ea274bb9e5a3c9fea7eeb4cf682d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
