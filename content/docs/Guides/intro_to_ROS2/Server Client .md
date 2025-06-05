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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ6KZBDD%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD66sKRQgoonr3TkP6KXJ7kZ4R12VsvJbo5t6%2B359zqaAIhAJuonrqxWSv1Cmnfgqby26xra2EajwEJkiqrggynm%2BDsKv8DCEcQABoMNjM3NDIzMTgzODA1Igw4%2BmGkmT%2B%2Bba4RMgoq3APIQgc%2Fdkws6pM9P1WkIL0suXxiA0w62kPM7wbNa1Joae74BGeRGFgQir0xdLpvxGdZr5AqRdx281Jq7%2B48qHqlcSDnOQvcEcHrP1c066nvc3HX9UR52%2BYYzk%2FnsJCBGaPPFYoDqYXBNOS749JX13ujJtsNTlxs5N%2FzW9wM4dKW6cAgC1e%2F5QSmB08aGH3llMjE08AVhWFUDDbZJ9Cyu00AvodTBQ6tQsUkOcemBbYuwZtJdeKZMKz29fk9%2FiwCEJcHVtxXUgjItG4FsNSQTTq%2FjxCryFQE3vNL7t36ouQgV4FGmIECZ%2FUKUauutjpt17HrDj%2Fw9Bjfa3Uxr5yxSFrk6o7YKMEcSSb18fjLUJ2yN7mPalzy0P%2By%2B1ZKRoM9BtmYV%2B2gqFKyy2MQ8yiWIC6VOc01VSv4sGxo4TMRYNXh997g0T%2Fw2aBmYFfEtgZSwsPVM%2B6nNGF1fcyfnSl39kQZBv6tfaoni1vXhL3%2BGw606%2BCTy6fcYSvTLX%2Fc8NT%2BaGTCMdJs52OUDi20Xk%2FwROMKPJj8dcrwhIVYJyR4cuwqaU6ZMZ%2Fq8ZjDBDCTr9dRBeLGuZv%2BfrUBXpXewk6fBYcn3uh9pQH2RF1BDCf1qoNErjEobmOeuLb6TVOawjDOxIbCBjqkAfO6rOM34pZ%2Fww3Mzq9yvwRCgurninPLQbqaxgJuURzgDnvqZzDP%2FAv3Tg4uAXJOHAJEWqKVQBtqgvz4GKnvex0kzM24qirnRZ6QgtYT9%2ByKN2Z3q6sOLFTDnN3xzavGVaeGsAAczId%2Fvscjdqi3VXaGMU1Saq0431jPrUNl%2FdNM7kmzNk1mZ3fUNGiyj7%2B%2FV0V3j3fNqFZvkoYfiQiB0gQUiNa9&X-Amz-Signature=b58cf76ec22abaed6bcdc2182084a880c84d902a9dcabddaaca03f6f5bf74dc8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ6KZBDD%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD66sKRQgoonr3TkP6KXJ7kZ4R12VsvJbo5t6%2B359zqaAIhAJuonrqxWSv1Cmnfgqby26xra2EajwEJkiqrggynm%2BDsKv8DCEcQABoMNjM3NDIzMTgzODA1Igw4%2BmGkmT%2B%2Bba4RMgoq3APIQgc%2Fdkws6pM9P1WkIL0suXxiA0w62kPM7wbNa1Joae74BGeRGFgQir0xdLpvxGdZr5AqRdx281Jq7%2B48qHqlcSDnOQvcEcHrP1c066nvc3HX9UR52%2BYYzk%2FnsJCBGaPPFYoDqYXBNOS749JX13ujJtsNTlxs5N%2FzW9wM4dKW6cAgC1e%2F5QSmB08aGH3llMjE08AVhWFUDDbZJ9Cyu00AvodTBQ6tQsUkOcemBbYuwZtJdeKZMKz29fk9%2FiwCEJcHVtxXUgjItG4FsNSQTTq%2FjxCryFQE3vNL7t36ouQgV4FGmIECZ%2FUKUauutjpt17HrDj%2Fw9Bjfa3Uxr5yxSFrk6o7YKMEcSSb18fjLUJ2yN7mPalzy0P%2By%2B1ZKRoM9BtmYV%2B2gqFKyy2MQ8yiWIC6VOc01VSv4sGxo4TMRYNXh997g0T%2Fw2aBmYFfEtgZSwsPVM%2B6nNGF1fcyfnSl39kQZBv6tfaoni1vXhL3%2BGw606%2BCTy6fcYSvTLX%2Fc8NT%2BaGTCMdJs52OUDi20Xk%2FwROMKPJj8dcrwhIVYJyR4cuwqaU6ZMZ%2Fq8ZjDBDCTr9dRBeLGuZv%2BfrUBXpXewk6fBYcn3uh9pQH2RF1BDCf1qoNErjEobmOeuLb6TVOawjDOxIbCBjqkAfO6rOM34pZ%2Fww3Mzq9yvwRCgurninPLQbqaxgJuURzgDnvqZzDP%2FAv3Tg4uAXJOHAJEWqKVQBtqgvz4GKnvex0kzM24qirnRZ6QgtYT9%2ByKN2Z3q6sOLFTDnN3xzavGVaeGsAAczId%2Fvscjdqi3VXaGMU1Saq0431jPrUNl%2FdNM7kmzNk1mZ3fUNGiyj7%2B%2FV0V3j3fNqFZvkoYfiQiB0gQUiNa9&X-Amz-Signature=cd410a254ef178c93f564c6b108b6c11ad64620f0e5c901420f82c4924973b0c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ6KZBDD%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD66sKRQgoonr3TkP6KXJ7kZ4R12VsvJbo5t6%2B359zqaAIhAJuonrqxWSv1Cmnfgqby26xra2EajwEJkiqrggynm%2BDsKv8DCEcQABoMNjM3NDIzMTgzODA1Igw4%2BmGkmT%2B%2Bba4RMgoq3APIQgc%2Fdkws6pM9P1WkIL0suXxiA0w62kPM7wbNa1Joae74BGeRGFgQir0xdLpvxGdZr5AqRdx281Jq7%2B48qHqlcSDnOQvcEcHrP1c066nvc3HX9UR52%2BYYzk%2FnsJCBGaPPFYoDqYXBNOS749JX13ujJtsNTlxs5N%2FzW9wM4dKW6cAgC1e%2F5QSmB08aGH3llMjE08AVhWFUDDbZJ9Cyu00AvodTBQ6tQsUkOcemBbYuwZtJdeKZMKz29fk9%2FiwCEJcHVtxXUgjItG4FsNSQTTq%2FjxCryFQE3vNL7t36ouQgV4FGmIECZ%2FUKUauutjpt17HrDj%2Fw9Bjfa3Uxr5yxSFrk6o7YKMEcSSb18fjLUJ2yN7mPalzy0P%2By%2B1ZKRoM9BtmYV%2B2gqFKyy2MQ8yiWIC6VOc01VSv4sGxo4TMRYNXh997g0T%2Fw2aBmYFfEtgZSwsPVM%2B6nNGF1fcyfnSl39kQZBv6tfaoni1vXhL3%2BGw606%2BCTy6fcYSvTLX%2Fc8NT%2BaGTCMdJs52OUDi20Xk%2FwROMKPJj8dcrwhIVYJyR4cuwqaU6ZMZ%2Fq8ZjDBDCTr9dRBeLGuZv%2BfrUBXpXewk6fBYcn3uh9pQH2RF1BDCf1qoNErjEobmOeuLb6TVOawjDOxIbCBjqkAfO6rOM34pZ%2Fww3Mzq9yvwRCgurninPLQbqaxgJuURzgDnvqZzDP%2FAv3Tg4uAXJOHAJEWqKVQBtqgvz4GKnvex0kzM24qirnRZ6QgtYT9%2ByKN2Z3q6sOLFTDnN3xzavGVaeGsAAczId%2Fvscjdqi3VXaGMU1Saq0431jPrUNl%2FdNM7kmzNk1mZ3fUNGiyj7%2B%2FV0V3j3fNqFZvkoYfiQiB0gQUiNa9&X-Amz-Signature=1e991b840c213d62f7af02c116a04bc5dc94a3572f054c1dcdf36439f9f9527d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ6KZBDD%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD66sKRQgoonr3TkP6KXJ7kZ4R12VsvJbo5t6%2B359zqaAIhAJuonrqxWSv1Cmnfgqby26xra2EajwEJkiqrggynm%2BDsKv8DCEcQABoMNjM3NDIzMTgzODA1Igw4%2BmGkmT%2B%2Bba4RMgoq3APIQgc%2Fdkws6pM9P1WkIL0suXxiA0w62kPM7wbNa1Joae74BGeRGFgQir0xdLpvxGdZr5AqRdx281Jq7%2B48qHqlcSDnOQvcEcHrP1c066nvc3HX9UR52%2BYYzk%2FnsJCBGaPPFYoDqYXBNOS749JX13ujJtsNTlxs5N%2FzW9wM4dKW6cAgC1e%2F5QSmB08aGH3llMjE08AVhWFUDDbZJ9Cyu00AvodTBQ6tQsUkOcemBbYuwZtJdeKZMKz29fk9%2FiwCEJcHVtxXUgjItG4FsNSQTTq%2FjxCryFQE3vNL7t36ouQgV4FGmIECZ%2FUKUauutjpt17HrDj%2Fw9Bjfa3Uxr5yxSFrk6o7YKMEcSSb18fjLUJ2yN7mPalzy0P%2By%2B1ZKRoM9BtmYV%2B2gqFKyy2MQ8yiWIC6VOc01VSv4sGxo4TMRYNXh997g0T%2Fw2aBmYFfEtgZSwsPVM%2B6nNGF1fcyfnSl39kQZBv6tfaoni1vXhL3%2BGw606%2BCTy6fcYSvTLX%2Fc8NT%2BaGTCMdJs52OUDi20Xk%2FwROMKPJj8dcrwhIVYJyR4cuwqaU6ZMZ%2Fq8ZjDBDCTr9dRBeLGuZv%2BfrUBXpXewk6fBYcn3uh9pQH2RF1BDCf1qoNErjEobmOeuLb6TVOawjDOxIbCBjqkAfO6rOM34pZ%2Fww3Mzq9yvwRCgurninPLQbqaxgJuURzgDnvqZzDP%2FAv3Tg4uAXJOHAJEWqKVQBtqgvz4GKnvex0kzM24qirnRZ6QgtYT9%2ByKN2Z3q6sOLFTDnN3xzavGVaeGsAAczId%2Fvscjdqi3VXaGMU1Saq0431jPrUNl%2FdNM7kmzNk1mZ3fUNGiyj7%2B%2FV0V3j3fNqFZvkoYfiQiB0gQUiNa9&X-Amz-Signature=7747379b95ddeed7d43dc6d82acae9e372c136c1de0f44fd209d534ad00c98e2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ6KZBDD%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD66sKRQgoonr3TkP6KXJ7kZ4R12VsvJbo5t6%2B359zqaAIhAJuonrqxWSv1Cmnfgqby26xra2EajwEJkiqrggynm%2BDsKv8DCEcQABoMNjM3NDIzMTgzODA1Igw4%2BmGkmT%2B%2Bba4RMgoq3APIQgc%2Fdkws6pM9P1WkIL0suXxiA0w62kPM7wbNa1Joae74BGeRGFgQir0xdLpvxGdZr5AqRdx281Jq7%2B48qHqlcSDnOQvcEcHrP1c066nvc3HX9UR52%2BYYzk%2FnsJCBGaPPFYoDqYXBNOS749JX13ujJtsNTlxs5N%2FzW9wM4dKW6cAgC1e%2F5QSmB08aGH3llMjE08AVhWFUDDbZJ9Cyu00AvodTBQ6tQsUkOcemBbYuwZtJdeKZMKz29fk9%2FiwCEJcHVtxXUgjItG4FsNSQTTq%2FjxCryFQE3vNL7t36ouQgV4FGmIECZ%2FUKUauutjpt17HrDj%2Fw9Bjfa3Uxr5yxSFrk6o7YKMEcSSb18fjLUJ2yN7mPalzy0P%2By%2B1ZKRoM9BtmYV%2B2gqFKyy2MQ8yiWIC6VOc01VSv4sGxo4TMRYNXh997g0T%2Fw2aBmYFfEtgZSwsPVM%2B6nNGF1fcyfnSl39kQZBv6tfaoni1vXhL3%2BGw606%2BCTy6fcYSvTLX%2Fc8NT%2BaGTCMdJs52OUDi20Xk%2FwROMKPJj8dcrwhIVYJyR4cuwqaU6ZMZ%2Fq8ZjDBDCTr9dRBeLGuZv%2BfrUBXpXewk6fBYcn3uh9pQH2RF1BDCf1qoNErjEobmOeuLb6TVOawjDOxIbCBjqkAfO6rOM34pZ%2Fww3Mzq9yvwRCgurninPLQbqaxgJuURzgDnvqZzDP%2FAv3Tg4uAXJOHAJEWqKVQBtqgvz4GKnvex0kzM24qirnRZ6QgtYT9%2ByKN2Z3q6sOLFTDnN3xzavGVaeGsAAczId%2Fvscjdqi3VXaGMU1Saq0431jPrUNl%2FdNM7kmzNk1mZ3fUNGiyj7%2B%2FV0V3j3fNqFZvkoYfiQiB0gQUiNa9&X-Amz-Signature=f540488337e3e623c325dd6bdda84abb39ff2a924ba7764aa04137ef888035ca&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
