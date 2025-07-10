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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTTXAJQJ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMLDbbuUzSLHW%2F0sdFPqlHUA1M%2BrYlbm0txIiXQYIIvgIgY5nsLRkVrbnE%2FK94fk1iAZXxt2e5odh6fvxLnsE%2BQhQqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdAB5ygPRiikOiTBCrcA5FTfauS81T3IVs3m2Q2pgSgG5BFCwkyrWknvyaLVULmdKzk1d%2Bx0iojzGzO3OPPYLw9LvVNMT9MQ6W0aa4mhixd45DH%2Bj0sSYOUn41nqhf37KrPcOH5nr0ZWXha9FwqJg55%2FeptcjfJfBdnbc7j7zsqYNuNMY3TLkSspGG95puxCy1FmEdOGcg%2FgOzg0%2FVoSvLl8Wc6R3w1hBeOt%2FhFSMcjyzvAXEVpcd9je5ebZQD8MRy7D3Gi%2BQ5Jj1Ms2dV%2BUF6ydnh674qdFLS9edNi%2B15lMjXik610ZGswxCAfR6wDiZrWEUC3rwhaDmwc%2B%2FukisWI93ZIwhgWuO%2FRyi1sm%2Fid%2FD9HAXfH1XhvK3WYmhTlVHWSs0UVIy84ktnFeueYNzGTabiaIQVh55%2BwE9v73lZNs%2Boma4Z90d%2FDUuwkolYSI352rfwjUL%2FU5RE3LdMZEw%2FAU%2FF%2BsfrKYWuJdvLzQZszap1IOtV8hIE7NDmGWRQgS8dAckiBYt5JoHL%2BcyXHgLagf%2BS8m1Trh6fElQXWXljqZnl5RS6FvrVwhExHUTNxUFbEnZIOcxYK%2Bz%2F1mpbVsddnBYPZ3GRuMPasQg3sGfwdzKnNTEsCCsuzp0fXza4qh00JuRD0bKSF94UdMLjNwMMGOqUBNV7LJqP%2FIdjDoQdrCtch5GtYGNHCf79KjC9581MfdJhv%2FnxANKW2E9F%2BHvOdYOsPk%2BSavDYGt8ephMibq2YKpjdlGms5iGO2rFbZxlbe5vyAI6tSZ2ukdM80LL%2Fsy3taVhYIkmfPk1og%2B6moOZs6GqdaAaIA6RsBZemnWF8Hk%2B22Sqk0%2FNsiTt%2BOTCw%2FruD1AFuPorcvRhB8jgfC3gottYWnmqhy&X-Amz-Signature=8ad701ecde96dbc2b7b023a3b6352d8605c8e9c028bac86be5cc10e089a06033&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTTXAJQJ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMLDbbuUzSLHW%2F0sdFPqlHUA1M%2BrYlbm0txIiXQYIIvgIgY5nsLRkVrbnE%2FK94fk1iAZXxt2e5odh6fvxLnsE%2BQhQqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdAB5ygPRiikOiTBCrcA5FTfauS81T3IVs3m2Q2pgSgG5BFCwkyrWknvyaLVULmdKzk1d%2Bx0iojzGzO3OPPYLw9LvVNMT9MQ6W0aa4mhixd45DH%2Bj0sSYOUn41nqhf37KrPcOH5nr0ZWXha9FwqJg55%2FeptcjfJfBdnbc7j7zsqYNuNMY3TLkSspGG95puxCy1FmEdOGcg%2FgOzg0%2FVoSvLl8Wc6R3w1hBeOt%2FhFSMcjyzvAXEVpcd9je5ebZQD8MRy7D3Gi%2BQ5Jj1Ms2dV%2BUF6ydnh674qdFLS9edNi%2B15lMjXik610ZGswxCAfR6wDiZrWEUC3rwhaDmwc%2B%2FukisWI93ZIwhgWuO%2FRyi1sm%2Fid%2FD9HAXfH1XhvK3WYmhTlVHWSs0UVIy84ktnFeueYNzGTabiaIQVh55%2BwE9v73lZNs%2Boma4Z90d%2FDUuwkolYSI352rfwjUL%2FU5RE3LdMZEw%2FAU%2FF%2BsfrKYWuJdvLzQZszap1IOtV8hIE7NDmGWRQgS8dAckiBYt5JoHL%2BcyXHgLagf%2BS8m1Trh6fElQXWXljqZnl5RS6FvrVwhExHUTNxUFbEnZIOcxYK%2Bz%2F1mpbVsddnBYPZ3GRuMPasQg3sGfwdzKnNTEsCCsuzp0fXza4qh00JuRD0bKSF94UdMLjNwMMGOqUBNV7LJqP%2FIdjDoQdrCtch5GtYGNHCf79KjC9581MfdJhv%2FnxANKW2E9F%2BHvOdYOsPk%2BSavDYGt8ephMibq2YKpjdlGms5iGO2rFbZxlbe5vyAI6tSZ2ukdM80LL%2Fsy3taVhYIkmfPk1og%2B6moOZs6GqdaAaIA6RsBZemnWF8Hk%2B22Sqk0%2FNsiTt%2BOTCw%2FruD1AFuPorcvRhB8jgfC3gottYWnmqhy&X-Amz-Signature=8f4e7974ccf3a32027d34794ce5ef0052b5a70ec7aae071db9ea26c8ccb0ec25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTTXAJQJ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMLDbbuUzSLHW%2F0sdFPqlHUA1M%2BrYlbm0txIiXQYIIvgIgY5nsLRkVrbnE%2FK94fk1iAZXxt2e5odh6fvxLnsE%2BQhQqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdAB5ygPRiikOiTBCrcA5FTfauS81T3IVs3m2Q2pgSgG5BFCwkyrWknvyaLVULmdKzk1d%2Bx0iojzGzO3OPPYLw9LvVNMT9MQ6W0aa4mhixd45DH%2Bj0sSYOUn41nqhf37KrPcOH5nr0ZWXha9FwqJg55%2FeptcjfJfBdnbc7j7zsqYNuNMY3TLkSspGG95puxCy1FmEdOGcg%2FgOzg0%2FVoSvLl8Wc6R3w1hBeOt%2FhFSMcjyzvAXEVpcd9je5ebZQD8MRy7D3Gi%2BQ5Jj1Ms2dV%2BUF6ydnh674qdFLS9edNi%2B15lMjXik610ZGswxCAfR6wDiZrWEUC3rwhaDmwc%2B%2FukisWI93ZIwhgWuO%2FRyi1sm%2Fid%2FD9HAXfH1XhvK3WYmhTlVHWSs0UVIy84ktnFeueYNzGTabiaIQVh55%2BwE9v73lZNs%2Boma4Z90d%2FDUuwkolYSI352rfwjUL%2FU5RE3LdMZEw%2FAU%2FF%2BsfrKYWuJdvLzQZszap1IOtV8hIE7NDmGWRQgS8dAckiBYt5JoHL%2BcyXHgLagf%2BS8m1Trh6fElQXWXljqZnl5RS6FvrVwhExHUTNxUFbEnZIOcxYK%2Bz%2F1mpbVsddnBYPZ3GRuMPasQg3sGfwdzKnNTEsCCsuzp0fXza4qh00JuRD0bKSF94UdMLjNwMMGOqUBNV7LJqP%2FIdjDoQdrCtch5GtYGNHCf79KjC9581MfdJhv%2FnxANKW2E9F%2BHvOdYOsPk%2BSavDYGt8ephMibq2YKpjdlGms5iGO2rFbZxlbe5vyAI6tSZ2ukdM80LL%2Fsy3taVhYIkmfPk1og%2B6moOZs6GqdaAaIA6RsBZemnWF8Hk%2B22Sqk0%2FNsiTt%2BOTCw%2FruD1AFuPorcvRhB8jgfC3gottYWnmqhy&X-Amz-Signature=ec217b0c6432e3536a9ebf848cd74153be3e5f49e209db5132bc6a5d8dae7795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTTXAJQJ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMLDbbuUzSLHW%2F0sdFPqlHUA1M%2BrYlbm0txIiXQYIIvgIgY5nsLRkVrbnE%2FK94fk1iAZXxt2e5odh6fvxLnsE%2BQhQqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdAB5ygPRiikOiTBCrcA5FTfauS81T3IVs3m2Q2pgSgG5BFCwkyrWknvyaLVULmdKzk1d%2Bx0iojzGzO3OPPYLw9LvVNMT9MQ6W0aa4mhixd45DH%2Bj0sSYOUn41nqhf37KrPcOH5nr0ZWXha9FwqJg55%2FeptcjfJfBdnbc7j7zsqYNuNMY3TLkSspGG95puxCy1FmEdOGcg%2FgOzg0%2FVoSvLl8Wc6R3w1hBeOt%2FhFSMcjyzvAXEVpcd9je5ebZQD8MRy7D3Gi%2BQ5Jj1Ms2dV%2BUF6ydnh674qdFLS9edNi%2B15lMjXik610ZGswxCAfR6wDiZrWEUC3rwhaDmwc%2B%2FukisWI93ZIwhgWuO%2FRyi1sm%2Fid%2FD9HAXfH1XhvK3WYmhTlVHWSs0UVIy84ktnFeueYNzGTabiaIQVh55%2BwE9v73lZNs%2Boma4Z90d%2FDUuwkolYSI352rfwjUL%2FU5RE3LdMZEw%2FAU%2FF%2BsfrKYWuJdvLzQZszap1IOtV8hIE7NDmGWRQgS8dAckiBYt5JoHL%2BcyXHgLagf%2BS8m1Trh6fElQXWXljqZnl5RS6FvrVwhExHUTNxUFbEnZIOcxYK%2Bz%2F1mpbVsddnBYPZ3GRuMPasQg3sGfwdzKnNTEsCCsuzp0fXza4qh00JuRD0bKSF94UdMLjNwMMGOqUBNV7LJqP%2FIdjDoQdrCtch5GtYGNHCf79KjC9581MfdJhv%2FnxANKW2E9F%2BHvOdYOsPk%2BSavDYGt8ephMibq2YKpjdlGms5iGO2rFbZxlbe5vyAI6tSZ2ukdM80LL%2Fsy3taVhYIkmfPk1og%2B6moOZs6GqdaAaIA6RsBZemnWF8Hk%2B22Sqk0%2FNsiTt%2BOTCw%2FruD1AFuPorcvRhB8jgfC3gottYWnmqhy&X-Amz-Signature=626c6095051d4538e4f317ee421df0377f85afb281c78c9d0e0728e0481f484f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTTXAJQJ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMLDbbuUzSLHW%2F0sdFPqlHUA1M%2BrYlbm0txIiXQYIIvgIgY5nsLRkVrbnE%2FK94fk1iAZXxt2e5odh6fvxLnsE%2BQhQqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdAB5ygPRiikOiTBCrcA5FTfauS81T3IVs3m2Q2pgSgG5BFCwkyrWknvyaLVULmdKzk1d%2Bx0iojzGzO3OPPYLw9LvVNMT9MQ6W0aa4mhixd45DH%2Bj0sSYOUn41nqhf37KrPcOH5nr0ZWXha9FwqJg55%2FeptcjfJfBdnbc7j7zsqYNuNMY3TLkSspGG95puxCy1FmEdOGcg%2FgOzg0%2FVoSvLl8Wc6R3w1hBeOt%2FhFSMcjyzvAXEVpcd9je5ebZQD8MRy7D3Gi%2BQ5Jj1Ms2dV%2BUF6ydnh674qdFLS9edNi%2B15lMjXik610ZGswxCAfR6wDiZrWEUC3rwhaDmwc%2B%2FukisWI93ZIwhgWuO%2FRyi1sm%2Fid%2FD9HAXfH1XhvK3WYmhTlVHWSs0UVIy84ktnFeueYNzGTabiaIQVh55%2BwE9v73lZNs%2Boma4Z90d%2FDUuwkolYSI352rfwjUL%2FU5RE3LdMZEw%2FAU%2FF%2BsfrKYWuJdvLzQZszap1IOtV8hIE7NDmGWRQgS8dAckiBYt5JoHL%2BcyXHgLagf%2BS8m1Trh6fElQXWXljqZnl5RS6FvrVwhExHUTNxUFbEnZIOcxYK%2Bz%2F1mpbVsddnBYPZ3GRuMPasQg3sGfwdzKnNTEsCCsuzp0fXza4qh00JuRD0bKSF94UdMLjNwMMGOqUBNV7LJqP%2FIdjDoQdrCtch5GtYGNHCf79KjC9581MfdJhv%2FnxANKW2E9F%2BHvOdYOsPk%2BSavDYGt8ephMibq2YKpjdlGms5iGO2rFbZxlbe5vyAI6tSZ2ukdM80LL%2Fsy3taVhYIkmfPk1og%2B6moOZs6GqdaAaIA6RsBZemnWF8Hk%2B22Sqk0%2FNsiTt%2BOTCw%2FruD1AFuPorcvRhB8jgfC3gottYWnmqhy&X-Amz-Signature=10737b98fced9647eccdd22b2d6ec891e6933dd1a3c265ee990379d1c5db7374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
