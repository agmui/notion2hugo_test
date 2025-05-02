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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IQE7NHI%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDv44pRQ0E3QRQVgpG24GdeeIiklZm58FSe2hs5JL3zvwIgUu9kZ9%2BbZVHahtg8dRDSlwsanfR52hpRJN800ChciwQqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGo6%2FPeqoJn0RrrCzCrcAy2H%2BfKpiZBR%2BLY9zowcMW150vg9tkj6XWG3evggODPfQQU%2Bbi9RGenEqi%2BXGGljmszySr62uuw6Zdar0x878pEVSNv%2F9Iy176DkXN1YcKz5Ohhb2nLioEhsFwYPK7C7n5Bm4%2FMmt6i70bCL7UcTjeIH47cuQqJvHBxNek81rxRMlZwuGuXFS0g41oUbjqmI3P%2BPjiZJY1qlCRj%2Bac0YdwqAwLqzV0goHEsnexmNkzrX%2Fq2bMdRok%2Fxo%2FXpd%2B20QzSa6WOhZUPURQYeOy8lpHVFghhZN9cUhshPO2gLgpXEiKx194499S3Dprapx5r6jT6Z1NnoBKZ%2Fgv0JQWnPH9eqlodlBb3k%2BPojn4WkEUiyL6H%2FAvp%2FuQDNnYI5y9V5DdtyiWBsGOogtuZLxArrZnm553eGM7l%2FmPM51xqn0ytAJXMDUnFg8XgnTXKFjQRaMj5AUBpeoQSjv4E5kiKfO1zuKFipKrDUok8tNmGvCly7tke4SHSwPDZzEDFMH7AXMuTDm3NQcj%2BiwXnKDP7DouRlnpxndVQEgIW0jkiV0o%2F9dD8rwwZcocK3cc7yi1wwE%2FPq7F0x1UoaPYkZByKBf203JlRIl1bVuEO0nUvlavLCS5CkLz%2F8BTizW3W8FMJPk08AGOqUBEL332YXpHF5ID8lol4Cgg79MFqFHtkanakGB%2B%2Bm2RJPwNw%2F1tX62GNqwsU0F%2FUlsmHgtQM4AcU6MVvYi%2Bd6Pavhc5PNl9IT77AY4oqTiFDZCH008OPuv1ohNJdYKK7d6ItUpwQwGc2wm5S%2FlIqmQbGwcAXvvEg8CADeRSnOgc2cYK9oiyq78e0n91EHMc4K0HhZbAlp83ldCj3tgKWREX%2BJ%2BO%2FOe&X-Amz-Signature=bef08347500f0e071ebc9c0c1646ad5016ed00274b503aae044bad7cdeec0d74&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IQE7NHI%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDv44pRQ0E3QRQVgpG24GdeeIiklZm58FSe2hs5JL3zvwIgUu9kZ9%2BbZVHahtg8dRDSlwsanfR52hpRJN800ChciwQqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGo6%2FPeqoJn0RrrCzCrcAy2H%2BfKpiZBR%2BLY9zowcMW150vg9tkj6XWG3evggODPfQQU%2Bbi9RGenEqi%2BXGGljmszySr62uuw6Zdar0x878pEVSNv%2F9Iy176DkXN1YcKz5Ohhb2nLioEhsFwYPK7C7n5Bm4%2FMmt6i70bCL7UcTjeIH47cuQqJvHBxNek81rxRMlZwuGuXFS0g41oUbjqmI3P%2BPjiZJY1qlCRj%2Bac0YdwqAwLqzV0goHEsnexmNkzrX%2Fq2bMdRok%2Fxo%2FXpd%2B20QzSa6WOhZUPURQYeOy8lpHVFghhZN9cUhshPO2gLgpXEiKx194499S3Dprapx5r6jT6Z1NnoBKZ%2Fgv0JQWnPH9eqlodlBb3k%2BPojn4WkEUiyL6H%2FAvp%2FuQDNnYI5y9V5DdtyiWBsGOogtuZLxArrZnm553eGM7l%2FmPM51xqn0ytAJXMDUnFg8XgnTXKFjQRaMj5AUBpeoQSjv4E5kiKfO1zuKFipKrDUok8tNmGvCly7tke4SHSwPDZzEDFMH7AXMuTDm3NQcj%2BiwXnKDP7DouRlnpxndVQEgIW0jkiV0o%2F9dD8rwwZcocK3cc7yi1wwE%2FPq7F0x1UoaPYkZByKBf203JlRIl1bVuEO0nUvlavLCS5CkLz%2F8BTizW3W8FMJPk08AGOqUBEL332YXpHF5ID8lol4Cgg79MFqFHtkanakGB%2B%2Bm2RJPwNw%2F1tX62GNqwsU0F%2FUlsmHgtQM4AcU6MVvYi%2Bd6Pavhc5PNl9IT77AY4oqTiFDZCH008OPuv1ohNJdYKK7d6ItUpwQwGc2wm5S%2FlIqmQbGwcAXvvEg8CADeRSnOgc2cYK9oiyq78e0n91EHMc4K0HhZbAlp83ldCj3tgKWREX%2BJ%2BO%2FOe&X-Amz-Signature=1f77fef326e10a781b26b19fb9e2983fce83c723742a5738e1228f1a38e64a25&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IQE7NHI%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDv44pRQ0E3QRQVgpG24GdeeIiklZm58FSe2hs5JL3zvwIgUu9kZ9%2BbZVHahtg8dRDSlwsanfR52hpRJN800ChciwQqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGo6%2FPeqoJn0RrrCzCrcAy2H%2BfKpiZBR%2BLY9zowcMW150vg9tkj6XWG3evggODPfQQU%2Bbi9RGenEqi%2BXGGljmszySr62uuw6Zdar0x878pEVSNv%2F9Iy176DkXN1YcKz5Ohhb2nLioEhsFwYPK7C7n5Bm4%2FMmt6i70bCL7UcTjeIH47cuQqJvHBxNek81rxRMlZwuGuXFS0g41oUbjqmI3P%2BPjiZJY1qlCRj%2Bac0YdwqAwLqzV0goHEsnexmNkzrX%2Fq2bMdRok%2Fxo%2FXpd%2B20QzSa6WOhZUPURQYeOy8lpHVFghhZN9cUhshPO2gLgpXEiKx194499S3Dprapx5r6jT6Z1NnoBKZ%2Fgv0JQWnPH9eqlodlBb3k%2BPojn4WkEUiyL6H%2FAvp%2FuQDNnYI5y9V5DdtyiWBsGOogtuZLxArrZnm553eGM7l%2FmPM51xqn0ytAJXMDUnFg8XgnTXKFjQRaMj5AUBpeoQSjv4E5kiKfO1zuKFipKrDUok8tNmGvCly7tke4SHSwPDZzEDFMH7AXMuTDm3NQcj%2BiwXnKDP7DouRlnpxndVQEgIW0jkiV0o%2F9dD8rwwZcocK3cc7yi1wwE%2FPq7F0x1UoaPYkZByKBf203JlRIl1bVuEO0nUvlavLCS5CkLz%2F8BTizW3W8FMJPk08AGOqUBEL332YXpHF5ID8lol4Cgg79MFqFHtkanakGB%2B%2Bm2RJPwNw%2F1tX62GNqwsU0F%2FUlsmHgtQM4AcU6MVvYi%2Bd6Pavhc5PNl9IT77AY4oqTiFDZCH008OPuv1ohNJdYKK7d6ItUpwQwGc2wm5S%2FlIqmQbGwcAXvvEg8CADeRSnOgc2cYK9oiyq78e0n91EHMc4K0HhZbAlp83ldCj3tgKWREX%2BJ%2BO%2FOe&X-Amz-Signature=3273681b2dd4bcb0118eb831aff6c06018b67bb43f7a968efe019b6d15022ae8&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IQE7NHI%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDv44pRQ0E3QRQVgpG24GdeeIiklZm58FSe2hs5JL3zvwIgUu9kZ9%2BbZVHahtg8dRDSlwsanfR52hpRJN800ChciwQqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGo6%2FPeqoJn0RrrCzCrcAy2H%2BfKpiZBR%2BLY9zowcMW150vg9tkj6XWG3evggODPfQQU%2Bbi9RGenEqi%2BXGGljmszySr62uuw6Zdar0x878pEVSNv%2F9Iy176DkXN1YcKz5Ohhb2nLioEhsFwYPK7C7n5Bm4%2FMmt6i70bCL7UcTjeIH47cuQqJvHBxNek81rxRMlZwuGuXFS0g41oUbjqmI3P%2BPjiZJY1qlCRj%2Bac0YdwqAwLqzV0goHEsnexmNkzrX%2Fq2bMdRok%2Fxo%2FXpd%2B20QzSa6WOhZUPURQYeOy8lpHVFghhZN9cUhshPO2gLgpXEiKx194499S3Dprapx5r6jT6Z1NnoBKZ%2Fgv0JQWnPH9eqlodlBb3k%2BPojn4WkEUiyL6H%2FAvp%2FuQDNnYI5y9V5DdtyiWBsGOogtuZLxArrZnm553eGM7l%2FmPM51xqn0ytAJXMDUnFg8XgnTXKFjQRaMj5AUBpeoQSjv4E5kiKfO1zuKFipKrDUok8tNmGvCly7tke4SHSwPDZzEDFMH7AXMuTDm3NQcj%2BiwXnKDP7DouRlnpxndVQEgIW0jkiV0o%2F9dD8rwwZcocK3cc7yi1wwE%2FPq7F0x1UoaPYkZByKBf203JlRIl1bVuEO0nUvlavLCS5CkLz%2F8BTizW3W8FMJPk08AGOqUBEL332YXpHF5ID8lol4Cgg79MFqFHtkanakGB%2B%2Bm2RJPwNw%2F1tX62GNqwsU0F%2FUlsmHgtQM4AcU6MVvYi%2Bd6Pavhc5PNl9IT77AY4oqTiFDZCH008OPuv1ohNJdYKK7d6ItUpwQwGc2wm5S%2FlIqmQbGwcAXvvEg8CADeRSnOgc2cYK9oiyq78e0n91EHMc4K0HhZbAlp83ldCj3tgKWREX%2BJ%2BO%2FOe&X-Amz-Signature=4fe10252f36949055f9501340e68135f17072cd35916bf8e0fa72e161f8bf6d2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IQE7NHI%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDv44pRQ0E3QRQVgpG24GdeeIiklZm58FSe2hs5JL3zvwIgUu9kZ9%2BbZVHahtg8dRDSlwsanfR52hpRJN800ChciwQqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGo6%2FPeqoJn0RrrCzCrcAy2H%2BfKpiZBR%2BLY9zowcMW150vg9tkj6XWG3evggODPfQQU%2Bbi9RGenEqi%2BXGGljmszySr62uuw6Zdar0x878pEVSNv%2F9Iy176DkXN1YcKz5Ohhb2nLioEhsFwYPK7C7n5Bm4%2FMmt6i70bCL7UcTjeIH47cuQqJvHBxNek81rxRMlZwuGuXFS0g41oUbjqmI3P%2BPjiZJY1qlCRj%2Bac0YdwqAwLqzV0goHEsnexmNkzrX%2Fq2bMdRok%2Fxo%2FXpd%2B20QzSa6WOhZUPURQYeOy8lpHVFghhZN9cUhshPO2gLgpXEiKx194499S3Dprapx5r6jT6Z1NnoBKZ%2Fgv0JQWnPH9eqlodlBb3k%2BPojn4WkEUiyL6H%2FAvp%2FuQDNnYI5y9V5DdtyiWBsGOogtuZLxArrZnm553eGM7l%2FmPM51xqn0ytAJXMDUnFg8XgnTXKFjQRaMj5AUBpeoQSjv4E5kiKfO1zuKFipKrDUok8tNmGvCly7tke4SHSwPDZzEDFMH7AXMuTDm3NQcj%2BiwXnKDP7DouRlnpxndVQEgIW0jkiV0o%2F9dD8rwwZcocK3cc7yi1wwE%2FPq7F0x1UoaPYkZByKBf203JlRIl1bVuEO0nUvlavLCS5CkLz%2F8BTizW3W8FMJPk08AGOqUBEL332YXpHF5ID8lol4Cgg79MFqFHtkanakGB%2B%2Bm2RJPwNw%2F1tX62GNqwsU0F%2FUlsmHgtQM4AcU6MVvYi%2Bd6Pavhc5PNl9IT77AY4oqTiFDZCH008OPuv1ohNJdYKK7d6ItUpwQwGc2wm5S%2FlIqmQbGwcAXvvEg8CADeRSnOgc2cYK9oiyq78e0n91EHMc4K0HhZbAlp83ldCj3tgKWREX%2BJ%2BO%2FOe&X-Amz-Signature=8f243d521b68e379298fbb015b265bc13435229b1837e6b006dc17ea63dd995d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
