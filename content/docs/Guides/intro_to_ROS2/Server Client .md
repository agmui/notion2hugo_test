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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRZXRSJ5%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgbtsbp7tfO6zimBOXR%2FPv241Kh8WqUD3zAyEF6qoBWAiEA9PCIs9wmbCerTC9A13sO%2BhVTSQvVJsISiNv2D5VyTkMq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDNBD4u42kEMv35mx4ircA9m%2Fa7wjIDLnwHr6tmgN8scOunKvAGuCqvonNLifganDsypwEaKxo2AZKGmxtYhOpk%2BuyMAnYP4tHrY47KMcmU6zhXKZTj%2Fi7QV9R1dd5pdodxbMPv4RNfrwXtnDlbA6AILxYkbXHXEAuNrZuIMCl938u1wNObp9C63jssOozrpYaWxaaChH4mF9yw6Az63qwye7uK7XV%2BfYICKrlDClXR%2BN0BJsJ4hESjnglwMMIwNds75i5HhqqxzoSNuZGMbgD4b%2B3GTzPWyZNX860lisommI6WbfEwpGU1mvbbiCeilwCeMiTxP0HPt%2BPvS5zzC38aCgh8kaBLTB%2BZ1VIlFK28YTEjEr1aZpvwxJxeRwCAHPiEwnziODWRgDyR%2Fqn8RSjL5P9zF9oGz%2BJtl26DB7agjSFnj8Cq29YjEWs4eGrGbU0bjcp1BtO9WmQ7PsKWy4QLjpwgTq6%2FJVJKO0oXow%2Bz%2BiB1rLj5Nmza8B9eXvrmqhxLjtWV6GE9UaxoklGOCyAb54MQ7pNXsyo9RilKeq3SvxVUN2DOkeDO6zEZLnzsbs%2FrFAEYe1MfXDtKm%2BuSO5Co%2FLjyABtRc3jb9UrJmYteguqEBNkYU1axK7TCe%2BYpwBUljW09tDq0BYFgHNMNiVrMAGOqUB0vVMf7kF4bhedD%2FXEk1eeFRPr4q70Dg%2FQbvilFhZgjQA33ooCvF420PcsDpvVUy1rMLhXGQz4C948MN2kkDj5sKOrzoCJ0O2TH97ZR8cLZ8pqTmWn2yZaD7qA%2BwzAe3h3SKs45ar5ySUoCLclmbyS3dbQ24YFAMQuyFXooH7Dxq12OgMSSaaTN5cW3vWYh7r7HygSHfuiNF%2B8vx2on%2Btg6wektwF&X-Amz-Signature=bba680e3f76bd3eccb41fe9487f9653c66bc4193565995cd6b3d1680a5508658&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRZXRSJ5%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgbtsbp7tfO6zimBOXR%2FPv241Kh8WqUD3zAyEF6qoBWAiEA9PCIs9wmbCerTC9A13sO%2BhVTSQvVJsISiNv2D5VyTkMq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDNBD4u42kEMv35mx4ircA9m%2Fa7wjIDLnwHr6tmgN8scOunKvAGuCqvonNLifganDsypwEaKxo2AZKGmxtYhOpk%2BuyMAnYP4tHrY47KMcmU6zhXKZTj%2Fi7QV9R1dd5pdodxbMPv4RNfrwXtnDlbA6AILxYkbXHXEAuNrZuIMCl938u1wNObp9C63jssOozrpYaWxaaChH4mF9yw6Az63qwye7uK7XV%2BfYICKrlDClXR%2BN0BJsJ4hESjnglwMMIwNds75i5HhqqxzoSNuZGMbgD4b%2B3GTzPWyZNX860lisommI6WbfEwpGU1mvbbiCeilwCeMiTxP0HPt%2BPvS5zzC38aCgh8kaBLTB%2BZ1VIlFK28YTEjEr1aZpvwxJxeRwCAHPiEwnziODWRgDyR%2Fqn8RSjL5P9zF9oGz%2BJtl26DB7agjSFnj8Cq29YjEWs4eGrGbU0bjcp1BtO9WmQ7PsKWy4QLjpwgTq6%2FJVJKO0oXow%2Bz%2BiB1rLj5Nmza8B9eXvrmqhxLjtWV6GE9UaxoklGOCyAb54MQ7pNXsyo9RilKeq3SvxVUN2DOkeDO6zEZLnzsbs%2FrFAEYe1MfXDtKm%2BuSO5Co%2FLjyABtRc3jb9UrJmYteguqEBNkYU1axK7TCe%2BYpwBUljW09tDq0BYFgHNMNiVrMAGOqUB0vVMf7kF4bhedD%2FXEk1eeFRPr4q70Dg%2FQbvilFhZgjQA33ooCvF420PcsDpvVUy1rMLhXGQz4C948MN2kkDj5sKOrzoCJ0O2TH97ZR8cLZ8pqTmWn2yZaD7qA%2BwzAe3h3SKs45ar5ySUoCLclmbyS3dbQ24YFAMQuyFXooH7Dxq12OgMSSaaTN5cW3vWYh7r7HygSHfuiNF%2B8vx2on%2Btg6wektwF&X-Amz-Signature=84e5e6334e5bb1f3172dcfe8036d0333b7abc8c93d0bb85cc209e26c7b368b25&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRZXRSJ5%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgbtsbp7tfO6zimBOXR%2FPv241Kh8WqUD3zAyEF6qoBWAiEA9PCIs9wmbCerTC9A13sO%2BhVTSQvVJsISiNv2D5VyTkMq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDNBD4u42kEMv35mx4ircA9m%2Fa7wjIDLnwHr6tmgN8scOunKvAGuCqvonNLifganDsypwEaKxo2AZKGmxtYhOpk%2BuyMAnYP4tHrY47KMcmU6zhXKZTj%2Fi7QV9R1dd5pdodxbMPv4RNfrwXtnDlbA6AILxYkbXHXEAuNrZuIMCl938u1wNObp9C63jssOozrpYaWxaaChH4mF9yw6Az63qwye7uK7XV%2BfYICKrlDClXR%2BN0BJsJ4hESjnglwMMIwNds75i5HhqqxzoSNuZGMbgD4b%2B3GTzPWyZNX860lisommI6WbfEwpGU1mvbbiCeilwCeMiTxP0HPt%2BPvS5zzC38aCgh8kaBLTB%2BZ1VIlFK28YTEjEr1aZpvwxJxeRwCAHPiEwnziODWRgDyR%2Fqn8RSjL5P9zF9oGz%2BJtl26DB7agjSFnj8Cq29YjEWs4eGrGbU0bjcp1BtO9WmQ7PsKWy4QLjpwgTq6%2FJVJKO0oXow%2Bz%2BiB1rLj5Nmza8B9eXvrmqhxLjtWV6GE9UaxoklGOCyAb54MQ7pNXsyo9RilKeq3SvxVUN2DOkeDO6zEZLnzsbs%2FrFAEYe1MfXDtKm%2BuSO5Co%2FLjyABtRc3jb9UrJmYteguqEBNkYU1axK7TCe%2BYpwBUljW09tDq0BYFgHNMNiVrMAGOqUB0vVMf7kF4bhedD%2FXEk1eeFRPr4q70Dg%2FQbvilFhZgjQA33ooCvF420PcsDpvVUy1rMLhXGQz4C948MN2kkDj5sKOrzoCJ0O2TH97ZR8cLZ8pqTmWn2yZaD7qA%2BwzAe3h3SKs45ar5ySUoCLclmbyS3dbQ24YFAMQuyFXooH7Dxq12OgMSSaaTN5cW3vWYh7r7HygSHfuiNF%2B8vx2on%2Btg6wektwF&X-Amz-Signature=ea40f349f0820518c3282174896eb6a3758c38e8f37fc799494fd40592fa4723&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRZXRSJ5%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgbtsbp7tfO6zimBOXR%2FPv241Kh8WqUD3zAyEF6qoBWAiEA9PCIs9wmbCerTC9A13sO%2BhVTSQvVJsISiNv2D5VyTkMq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDNBD4u42kEMv35mx4ircA9m%2Fa7wjIDLnwHr6tmgN8scOunKvAGuCqvonNLifganDsypwEaKxo2AZKGmxtYhOpk%2BuyMAnYP4tHrY47KMcmU6zhXKZTj%2Fi7QV9R1dd5pdodxbMPv4RNfrwXtnDlbA6AILxYkbXHXEAuNrZuIMCl938u1wNObp9C63jssOozrpYaWxaaChH4mF9yw6Az63qwye7uK7XV%2BfYICKrlDClXR%2BN0BJsJ4hESjnglwMMIwNds75i5HhqqxzoSNuZGMbgD4b%2B3GTzPWyZNX860lisommI6WbfEwpGU1mvbbiCeilwCeMiTxP0HPt%2BPvS5zzC38aCgh8kaBLTB%2BZ1VIlFK28YTEjEr1aZpvwxJxeRwCAHPiEwnziODWRgDyR%2Fqn8RSjL5P9zF9oGz%2BJtl26DB7agjSFnj8Cq29YjEWs4eGrGbU0bjcp1BtO9WmQ7PsKWy4QLjpwgTq6%2FJVJKO0oXow%2Bz%2BiB1rLj5Nmza8B9eXvrmqhxLjtWV6GE9UaxoklGOCyAb54MQ7pNXsyo9RilKeq3SvxVUN2DOkeDO6zEZLnzsbs%2FrFAEYe1MfXDtKm%2BuSO5Co%2FLjyABtRc3jb9UrJmYteguqEBNkYU1axK7TCe%2BYpwBUljW09tDq0BYFgHNMNiVrMAGOqUB0vVMf7kF4bhedD%2FXEk1eeFRPr4q70Dg%2FQbvilFhZgjQA33ooCvF420PcsDpvVUy1rMLhXGQz4C948MN2kkDj5sKOrzoCJ0O2TH97ZR8cLZ8pqTmWn2yZaD7qA%2BwzAe3h3SKs45ar5ySUoCLclmbyS3dbQ24YFAMQuyFXooH7Dxq12OgMSSaaTN5cW3vWYh7r7HygSHfuiNF%2B8vx2on%2Btg6wektwF&X-Amz-Signature=7d68da80494584c6557ab2c118361f25a2537966aa32111f2cc800d7b17a1d9d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRZXRSJ5%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgbtsbp7tfO6zimBOXR%2FPv241Kh8WqUD3zAyEF6qoBWAiEA9PCIs9wmbCerTC9A13sO%2BhVTSQvVJsISiNv2D5VyTkMq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDNBD4u42kEMv35mx4ircA9m%2Fa7wjIDLnwHr6tmgN8scOunKvAGuCqvonNLifganDsypwEaKxo2AZKGmxtYhOpk%2BuyMAnYP4tHrY47KMcmU6zhXKZTj%2Fi7QV9R1dd5pdodxbMPv4RNfrwXtnDlbA6AILxYkbXHXEAuNrZuIMCl938u1wNObp9C63jssOozrpYaWxaaChH4mF9yw6Az63qwye7uK7XV%2BfYICKrlDClXR%2BN0BJsJ4hESjnglwMMIwNds75i5HhqqxzoSNuZGMbgD4b%2B3GTzPWyZNX860lisommI6WbfEwpGU1mvbbiCeilwCeMiTxP0HPt%2BPvS5zzC38aCgh8kaBLTB%2BZ1VIlFK28YTEjEr1aZpvwxJxeRwCAHPiEwnziODWRgDyR%2Fqn8RSjL5P9zF9oGz%2BJtl26DB7agjSFnj8Cq29YjEWs4eGrGbU0bjcp1BtO9WmQ7PsKWy4QLjpwgTq6%2FJVJKO0oXow%2Bz%2BiB1rLj5Nmza8B9eXvrmqhxLjtWV6GE9UaxoklGOCyAb54MQ7pNXsyo9RilKeq3SvxVUN2DOkeDO6zEZLnzsbs%2FrFAEYe1MfXDtKm%2BuSO5Co%2FLjyABtRc3jb9UrJmYteguqEBNkYU1axK7TCe%2BYpwBUljW09tDq0BYFgHNMNiVrMAGOqUB0vVMf7kF4bhedD%2FXEk1eeFRPr4q70Dg%2FQbvilFhZgjQA33ooCvF420PcsDpvVUy1rMLhXGQz4C948MN2kkDj5sKOrzoCJ0O2TH97ZR8cLZ8pqTmWn2yZaD7qA%2BwzAe3h3SKs45ar5ySUoCLclmbyS3dbQ24YFAMQuyFXooH7Dxq12OgMSSaaTN5cW3vWYh7r7HygSHfuiNF%2B8vx2on%2Btg6wektwF&X-Amz-Signature=8eb1de04928ce90ab63693a5b997ef0d53cbdf3e266766c67bf6cc4961d284eb&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
