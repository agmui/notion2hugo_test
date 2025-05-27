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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VE26LKX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAglQwCPo6srfONyvIpioC5tw86gtZ2SNUSNqbWFRvIQIhAI2FKNYc0W3bXSCHve%2BwCe%2FouTKORjK5XjoG1oxbC4jBKv8DCFYQABoMNjM3NDIzMTgzODA1IgyjmuDIYJkcriHclIcq3AM8OOJjxIpn23kxw%2FdrIGPg6n9%2Bb7RoNYRpiWA%2BbveyMkuOkilelCpYn4L3rWGX8Z8Cu67h%2BbynMFR3KcKA7VSNncX5%2F%2FVtuitah2CDfi5Yb3GAQ6sm26jTLzGvvWt7Bq7gr1oP%2FkVZ3cBE09ZnBI%2FoosEe1mAV%2Bfi5OIvWPvOlznvvz8HmttNDd0Ec3PBPS9oWU0yWKpjwKehkHRKT8N8AfKfkIpuYenKekKN9UDBY2M4JxTSbYZXswRsodNsMiNsTs4HXZUGSGO7bmqcGdev%2BaoRP3g%2F9TjfO2kSEK95w0%2F4lUgiGf5FgYlzz35Hz7mci%2FyEWEmOdP6NXILV0lFpzYStW3E74FxunZu2veuCyJfwYdx7SK0fbV4FYw69J0dmpaAAlb%2FcprVe2VGs%2FYWJl52V1tCFVWtsGDqByEFwPJAXavZDHC9j1vUVqtrBlwRQqkO29ZSbGP%2Fur4byge154x0lFqRmNS4ozaXOxlc7BFiiTx9zRZu%2FnKJYjNLcSNn8Llr1B0C%2BDzdA16xy0almYiKV89jpIr2HLBQaMRyREcF7Cfki5bYFZqUxuzmG8hXI10iLZYGF3cvkXBzMxHa79KCwYTECxmT0KPz7V8zE7IB8swif%2BtG6zKtmhYzCZkNXBBjqkAaNFXobJF4G4QlMawFjtB0fhE9XXAdptYge9tZYVd2u%2BSKroliQSip%2BelEthncl33OmY52oLDTIj%2BdsFO5xKSnP%2B3ZmITc88KlW6HKY5lg3iIA5DXa0sa4aZRSQyvPwhfxkQ6Fvy%2FqWckfLgedtGGJ8XnUJuPokysh%2FFrZ86AwYOS9QfLt0uxqV6sSd8Uvs0GY5y2%2F4h8chtUk9m9PBBJ%2BIImYTD&X-Amz-Signature=b111f2bf31939c8ba977a0c751017da66b9111e2f7614cd363e9a2930aa1dd90&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VE26LKX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAglQwCPo6srfONyvIpioC5tw86gtZ2SNUSNqbWFRvIQIhAI2FKNYc0W3bXSCHve%2BwCe%2FouTKORjK5XjoG1oxbC4jBKv8DCFYQABoMNjM3NDIzMTgzODA1IgyjmuDIYJkcriHclIcq3AM8OOJjxIpn23kxw%2FdrIGPg6n9%2Bb7RoNYRpiWA%2BbveyMkuOkilelCpYn4L3rWGX8Z8Cu67h%2BbynMFR3KcKA7VSNncX5%2F%2FVtuitah2CDfi5Yb3GAQ6sm26jTLzGvvWt7Bq7gr1oP%2FkVZ3cBE09ZnBI%2FoosEe1mAV%2Bfi5OIvWPvOlznvvz8HmttNDd0Ec3PBPS9oWU0yWKpjwKehkHRKT8N8AfKfkIpuYenKekKN9UDBY2M4JxTSbYZXswRsodNsMiNsTs4HXZUGSGO7bmqcGdev%2BaoRP3g%2F9TjfO2kSEK95w0%2F4lUgiGf5FgYlzz35Hz7mci%2FyEWEmOdP6NXILV0lFpzYStW3E74FxunZu2veuCyJfwYdx7SK0fbV4FYw69J0dmpaAAlb%2FcprVe2VGs%2FYWJl52V1tCFVWtsGDqByEFwPJAXavZDHC9j1vUVqtrBlwRQqkO29ZSbGP%2Fur4byge154x0lFqRmNS4ozaXOxlc7BFiiTx9zRZu%2FnKJYjNLcSNn8Llr1B0C%2BDzdA16xy0almYiKV89jpIr2HLBQaMRyREcF7Cfki5bYFZqUxuzmG8hXI10iLZYGF3cvkXBzMxHa79KCwYTECxmT0KPz7V8zE7IB8swif%2BtG6zKtmhYzCZkNXBBjqkAaNFXobJF4G4QlMawFjtB0fhE9XXAdptYge9tZYVd2u%2BSKroliQSip%2BelEthncl33OmY52oLDTIj%2BdsFO5xKSnP%2B3ZmITc88KlW6HKY5lg3iIA5DXa0sa4aZRSQyvPwhfxkQ6Fvy%2FqWckfLgedtGGJ8XnUJuPokysh%2FFrZ86AwYOS9QfLt0uxqV6sSd8Uvs0GY5y2%2F4h8chtUk9m9PBBJ%2BIImYTD&X-Amz-Signature=33d2149a1c357c040712ca4a7da169ad73afab870f1fa1c3c7ba9c5e7a0dc7c0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VE26LKX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAglQwCPo6srfONyvIpioC5tw86gtZ2SNUSNqbWFRvIQIhAI2FKNYc0W3bXSCHve%2BwCe%2FouTKORjK5XjoG1oxbC4jBKv8DCFYQABoMNjM3NDIzMTgzODA1IgyjmuDIYJkcriHclIcq3AM8OOJjxIpn23kxw%2FdrIGPg6n9%2Bb7RoNYRpiWA%2BbveyMkuOkilelCpYn4L3rWGX8Z8Cu67h%2BbynMFR3KcKA7VSNncX5%2F%2FVtuitah2CDfi5Yb3GAQ6sm26jTLzGvvWt7Bq7gr1oP%2FkVZ3cBE09ZnBI%2FoosEe1mAV%2Bfi5OIvWPvOlznvvz8HmttNDd0Ec3PBPS9oWU0yWKpjwKehkHRKT8N8AfKfkIpuYenKekKN9UDBY2M4JxTSbYZXswRsodNsMiNsTs4HXZUGSGO7bmqcGdev%2BaoRP3g%2F9TjfO2kSEK95w0%2F4lUgiGf5FgYlzz35Hz7mci%2FyEWEmOdP6NXILV0lFpzYStW3E74FxunZu2veuCyJfwYdx7SK0fbV4FYw69J0dmpaAAlb%2FcprVe2VGs%2FYWJl52V1tCFVWtsGDqByEFwPJAXavZDHC9j1vUVqtrBlwRQqkO29ZSbGP%2Fur4byge154x0lFqRmNS4ozaXOxlc7BFiiTx9zRZu%2FnKJYjNLcSNn8Llr1B0C%2BDzdA16xy0almYiKV89jpIr2HLBQaMRyREcF7Cfki5bYFZqUxuzmG8hXI10iLZYGF3cvkXBzMxHa79KCwYTECxmT0KPz7V8zE7IB8swif%2BtG6zKtmhYzCZkNXBBjqkAaNFXobJF4G4QlMawFjtB0fhE9XXAdptYge9tZYVd2u%2BSKroliQSip%2BelEthncl33OmY52oLDTIj%2BdsFO5xKSnP%2B3ZmITc88KlW6HKY5lg3iIA5DXa0sa4aZRSQyvPwhfxkQ6Fvy%2FqWckfLgedtGGJ8XnUJuPokysh%2FFrZ86AwYOS9QfLt0uxqV6sSd8Uvs0GY5y2%2F4h8chtUk9m9PBBJ%2BIImYTD&X-Amz-Signature=f596297506c08244d442cf4a48aae6777e834235acd3ef8dad9560ec509ff779&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VE26LKX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAglQwCPo6srfONyvIpioC5tw86gtZ2SNUSNqbWFRvIQIhAI2FKNYc0W3bXSCHve%2BwCe%2FouTKORjK5XjoG1oxbC4jBKv8DCFYQABoMNjM3NDIzMTgzODA1IgyjmuDIYJkcriHclIcq3AM8OOJjxIpn23kxw%2FdrIGPg6n9%2Bb7RoNYRpiWA%2BbveyMkuOkilelCpYn4L3rWGX8Z8Cu67h%2BbynMFR3KcKA7VSNncX5%2F%2FVtuitah2CDfi5Yb3GAQ6sm26jTLzGvvWt7Bq7gr1oP%2FkVZ3cBE09ZnBI%2FoosEe1mAV%2Bfi5OIvWPvOlznvvz8HmttNDd0Ec3PBPS9oWU0yWKpjwKehkHRKT8N8AfKfkIpuYenKekKN9UDBY2M4JxTSbYZXswRsodNsMiNsTs4HXZUGSGO7bmqcGdev%2BaoRP3g%2F9TjfO2kSEK95w0%2F4lUgiGf5FgYlzz35Hz7mci%2FyEWEmOdP6NXILV0lFpzYStW3E74FxunZu2veuCyJfwYdx7SK0fbV4FYw69J0dmpaAAlb%2FcprVe2VGs%2FYWJl52V1tCFVWtsGDqByEFwPJAXavZDHC9j1vUVqtrBlwRQqkO29ZSbGP%2Fur4byge154x0lFqRmNS4ozaXOxlc7BFiiTx9zRZu%2FnKJYjNLcSNn8Llr1B0C%2BDzdA16xy0almYiKV89jpIr2HLBQaMRyREcF7Cfki5bYFZqUxuzmG8hXI10iLZYGF3cvkXBzMxHa79KCwYTECxmT0KPz7V8zE7IB8swif%2BtG6zKtmhYzCZkNXBBjqkAaNFXobJF4G4QlMawFjtB0fhE9XXAdptYge9tZYVd2u%2BSKroliQSip%2BelEthncl33OmY52oLDTIj%2BdsFO5xKSnP%2B3ZmITc88KlW6HKY5lg3iIA5DXa0sa4aZRSQyvPwhfxkQ6Fvy%2FqWckfLgedtGGJ8XnUJuPokysh%2FFrZ86AwYOS9QfLt0uxqV6sSd8Uvs0GY5y2%2F4h8chtUk9m9PBBJ%2BIImYTD&X-Amz-Signature=7635451fac22431aad629f103d882f8ccdc36ec6462344939a377a72a953be65&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VE26LKX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAglQwCPo6srfONyvIpioC5tw86gtZ2SNUSNqbWFRvIQIhAI2FKNYc0W3bXSCHve%2BwCe%2FouTKORjK5XjoG1oxbC4jBKv8DCFYQABoMNjM3NDIzMTgzODA1IgyjmuDIYJkcriHclIcq3AM8OOJjxIpn23kxw%2FdrIGPg6n9%2Bb7RoNYRpiWA%2BbveyMkuOkilelCpYn4L3rWGX8Z8Cu67h%2BbynMFR3KcKA7VSNncX5%2F%2FVtuitah2CDfi5Yb3GAQ6sm26jTLzGvvWt7Bq7gr1oP%2FkVZ3cBE09ZnBI%2FoosEe1mAV%2Bfi5OIvWPvOlznvvz8HmttNDd0Ec3PBPS9oWU0yWKpjwKehkHRKT8N8AfKfkIpuYenKekKN9UDBY2M4JxTSbYZXswRsodNsMiNsTs4HXZUGSGO7bmqcGdev%2BaoRP3g%2F9TjfO2kSEK95w0%2F4lUgiGf5FgYlzz35Hz7mci%2FyEWEmOdP6NXILV0lFpzYStW3E74FxunZu2veuCyJfwYdx7SK0fbV4FYw69J0dmpaAAlb%2FcprVe2VGs%2FYWJl52V1tCFVWtsGDqByEFwPJAXavZDHC9j1vUVqtrBlwRQqkO29ZSbGP%2Fur4byge154x0lFqRmNS4ozaXOxlc7BFiiTx9zRZu%2FnKJYjNLcSNn8Llr1B0C%2BDzdA16xy0almYiKV89jpIr2HLBQaMRyREcF7Cfki5bYFZqUxuzmG8hXI10iLZYGF3cvkXBzMxHa79KCwYTECxmT0KPz7V8zE7IB8swif%2BtG6zKtmhYzCZkNXBBjqkAaNFXobJF4G4QlMawFjtB0fhE9XXAdptYge9tZYVd2u%2BSKroliQSip%2BelEthncl33OmY52oLDTIj%2BdsFO5xKSnP%2B3ZmITc88KlW6HKY5lg3iIA5DXa0sa4aZRSQyvPwhfxkQ6Fvy%2FqWckfLgedtGGJ8XnUJuPokysh%2FFrZ86AwYOS9QfLt0uxqV6sSd8Uvs0GY5y2%2F4h8chtUk9m9PBBJ%2BIImYTD&X-Amz-Signature=bbcccdf7cb500d37a5f05da1f775a23febce7246b1bcee9fde697855cae62b69&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
