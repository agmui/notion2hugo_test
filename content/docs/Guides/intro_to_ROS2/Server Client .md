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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CRJ2C2R%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCICb4t5RCZfewAJLp3olftyD%2Bb5U3MNJGQUKKCKCbzV%2B2AiA%2FRfiJNQ%2BQMrwg3DwGuR%2BQJh%2FVTK1zU5uoP4s2lePImSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM4Od%2F1bfhMMbb6ciKKtwDhJZ5bXHkbcoEwRLRvU2CR0NyM7%2BGB3LYDZs0fpjLkm3Ezhr252T4AsKDwpsH%2FPDtSOVRcFH5yG3ocIdy0OrW%2FNp98lqb2uVV97xRb6CuVCUHDeC6iN6ee1RJZSHWRts%2FVeE8A8cOwOLXhen0UP2J550Q9zYZo%2FXVxzsjCUEwkbnr9VXPuQQyXXVMoGgO0jJSxAwpeCCNwGA5fESzsRxUXbuK6wXo4tV1uHIldFowaUHEen09DIAjpeNL7hdDQGxAL6Vva0LXmv9byvFvrXukGact02yQ0tryxufSTvL9yGr3C99SPNKbnYg0rNLO08XfKbHgsvkS0PJ5ilFvw8Q%2BbyZHQqXiH6vutuNrofkJku7AUTGYx9NlfoiT3nVhZrRInXd%2Bf%2Fo0i9VHeNMG%2Byut1ryO1kj633XgtL%2FPzR8AviadxK9STHTwDaJ1pws40sLjS%2BY%2FvSfNBSGTF%2Fwi8qp3UvKu43Pq8Anljj06DQCji6i1xUYaNtyWftZyZ%2FbdGhzmyz9m27DYZl7o%2B7cX63UIDcVi9MMrA6rMLf2zU9f647Lj0pGNSPeHrnDwfZvHIO%2FLHAltW6u6nXF%2BYWXfJBvhdRqZuoOUkyZs3BHEMRoUnc9gpVhEPJq%2F8zlGkX8wpb6JvQY6pgGtbW4WnLeyiQVUSN2NZPsu6jlS%2B%2BU%2BnTMZkDosKM1sAz%2FVhujP1T%2FWzKXEZ%2B3UKdT21kEK1E2eAVIIzr%2Fy8TH6SiEWYffGmp5oOW%2BmY8B59NLVMxjqDjO8dY3sUakmIFiwzDOS3UJfZPt%2BujQE86k0Y5IgP9IRPSbN8uFx7Wg1NBjubxjqcPvXy4xH178kwzD3DuEQYrfRym%2BukYBP5waH9htOktdF&X-Amz-Signature=6d2d40650608da721dafd0f1b7eeb06a75602205642ad4fc5c5c883eb1cccf74&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CRJ2C2R%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCICb4t5RCZfewAJLp3olftyD%2Bb5U3MNJGQUKKCKCbzV%2B2AiA%2FRfiJNQ%2BQMrwg3DwGuR%2BQJh%2FVTK1zU5uoP4s2lePImSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM4Od%2F1bfhMMbb6ciKKtwDhJZ5bXHkbcoEwRLRvU2CR0NyM7%2BGB3LYDZs0fpjLkm3Ezhr252T4AsKDwpsH%2FPDtSOVRcFH5yG3ocIdy0OrW%2FNp98lqb2uVV97xRb6CuVCUHDeC6iN6ee1RJZSHWRts%2FVeE8A8cOwOLXhen0UP2J550Q9zYZo%2FXVxzsjCUEwkbnr9VXPuQQyXXVMoGgO0jJSxAwpeCCNwGA5fESzsRxUXbuK6wXo4tV1uHIldFowaUHEen09DIAjpeNL7hdDQGxAL6Vva0LXmv9byvFvrXukGact02yQ0tryxufSTvL9yGr3C99SPNKbnYg0rNLO08XfKbHgsvkS0PJ5ilFvw8Q%2BbyZHQqXiH6vutuNrofkJku7AUTGYx9NlfoiT3nVhZrRInXd%2Bf%2Fo0i9VHeNMG%2Byut1ryO1kj633XgtL%2FPzR8AviadxK9STHTwDaJ1pws40sLjS%2BY%2FvSfNBSGTF%2Fwi8qp3UvKu43Pq8Anljj06DQCji6i1xUYaNtyWftZyZ%2FbdGhzmyz9m27DYZl7o%2B7cX63UIDcVi9MMrA6rMLf2zU9f647Lj0pGNSPeHrnDwfZvHIO%2FLHAltW6u6nXF%2BYWXfJBvhdRqZuoOUkyZs3BHEMRoUnc9gpVhEPJq%2F8zlGkX8wpb6JvQY6pgGtbW4WnLeyiQVUSN2NZPsu6jlS%2B%2BU%2BnTMZkDosKM1sAz%2FVhujP1T%2FWzKXEZ%2B3UKdT21kEK1E2eAVIIzr%2Fy8TH6SiEWYffGmp5oOW%2BmY8B59NLVMxjqDjO8dY3sUakmIFiwzDOS3UJfZPt%2BujQE86k0Y5IgP9IRPSbN8uFx7Wg1NBjubxjqcPvXy4xH178kwzD3DuEQYrfRym%2BukYBP5waH9htOktdF&X-Amz-Signature=528fb8dc0806fcbe049be96b484e2391d1e9726a32caf2864a6d8d6937f902ad&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CRJ2C2R%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCICb4t5RCZfewAJLp3olftyD%2Bb5U3MNJGQUKKCKCbzV%2B2AiA%2FRfiJNQ%2BQMrwg3DwGuR%2BQJh%2FVTK1zU5uoP4s2lePImSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM4Od%2F1bfhMMbb6ciKKtwDhJZ5bXHkbcoEwRLRvU2CR0NyM7%2BGB3LYDZs0fpjLkm3Ezhr252T4AsKDwpsH%2FPDtSOVRcFH5yG3ocIdy0OrW%2FNp98lqb2uVV97xRb6CuVCUHDeC6iN6ee1RJZSHWRts%2FVeE8A8cOwOLXhen0UP2J550Q9zYZo%2FXVxzsjCUEwkbnr9VXPuQQyXXVMoGgO0jJSxAwpeCCNwGA5fESzsRxUXbuK6wXo4tV1uHIldFowaUHEen09DIAjpeNL7hdDQGxAL6Vva0LXmv9byvFvrXukGact02yQ0tryxufSTvL9yGr3C99SPNKbnYg0rNLO08XfKbHgsvkS0PJ5ilFvw8Q%2BbyZHQqXiH6vutuNrofkJku7AUTGYx9NlfoiT3nVhZrRInXd%2Bf%2Fo0i9VHeNMG%2Byut1ryO1kj633XgtL%2FPzR8AviadxK9STHTwDaJ1pws40sLjS%2BY%2FvSfNBSGTF%2Fwi8qp3UvKu43Pq8Anljj06DQCji6i1xUYaNtyWftZyZ%2FbdGhzmyz9m27DYZl7o%2B7cX63UIDcVi9MMrA6rMLf2zU9f647Lj0pGNSPeHrnDwfZvHIO%2FLHAltW6u6nXF%2BYWXfJBvhdRqZuoOUkyZs3BHEMRoUnc9gpVhEPJq%2F8zlGkX8wpb6JvQY6pgGtbW4WnLeyiQVUSN2NZPsu6jlS%2B%2BU%2BnTMZkDosKM1sAz%2FVhujP1T%2FWzKXEZ%2B3UKdT21kEK1E2eAVIIzr%2Fy8TH6SiEWYffGmp5oOW%2BmY8B59NLVMxjqDjO8dY3sUakmIFiwzDOS3UJfZPt%2BujQE86k0Y5IgP9IRPSbN8uFx7Wg1NBjubxjqcPvXy4xH178kwzD3DuEQYrfRym%2BukYBP5waH9htOktdF&X-Amz-Signature=71fb38390ca4edfe7fc6abe291ed872c4ae9b9bec81cade6676c37f7bdbc1e83&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CRJ2C2R%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCICb4t5RCZfewAJLp3olftyD%2Bb5U3MNJGQUKKCKCbzV%2B2AiA%2FRfiJNQ%2BQMrwg3DwGuR%2BQJh%2FVTK1zU5uoP4s2lePImSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM4Od%2F1bfhMMbb6ciKKtwDhJZ5bXHkbcoEwRLRvU2CR0NyM7%2BGB3LYDZs0fpjLkm3Ezhr252T4AsKDwpsH%2FPDtSOVRcFH5yG3ocIdy0OrW%2FNp98lqb2uVV97xRb6CuVCUHDeC6iN6ee1RJZSHWRts%2FVeE8A8cOwOLXhen0UP2J550Q9zYZo%2FXVxzsjCUEwkbnr9VXPuQQyXXVMoGgO0jJSxAwpeCCNwGA5fESzsRxUXbuK6wXo4tV1uHIldFowaUHEen09DIAjpeNL7hdDQGxAL6Vva0LXmv9byvFvrXukGact02yQ0tryxufSTvL9yGr3C99SPNKbnYg0rNLO08XfKbHgsvkS0PJ5ilFvw8Q%2BbyZHQqXiH6vutuNrofkJku7AUTGYx9NlfoiT3nVhZrRInXd%2Bf%2Fo0i9VHeNMG%2Byut1ryO1kj633XgtL%2FPzR8AviadxK9STHTwDaJ1pws40sLjS%2BY%2FvSfNBSGTF%2Fwi8qp3UvKu43Pq8Anljj06DQCji6i1xUYaNtyWftZyZ%2FbdGhzmyz9m27DYZl7o%2B7cX63UIDcVi9MMrA6rMLf2zU9f647Lj0pGNSPeHrnDwfZvHIO%2FLHAltW6u6nXF%2BYWXfJBvhdRqZuoOUkyZs3BHEMRoUnc9gpVhEPJq%2F8zlGkX8wpb6JvQY6pgGtbW4WnLeyiQVUSN2NZPsu6jlS%2B%2BU%2BnTMZkDosKM1sAz%2FVhujP1T%2FWzKXEZ%2B3UKdT21kEK1E2eAVIIzr%2Fy8TH6SiEWYffGmp5oOW%2BmY8B59NLVMxjqDjO8dY3sUakmIFiwzDOS3UJfZPt%2BujQE86k0Y5IgP9IRPSbN8uFx7Wg1NBjubxjqcPvXy4xH178kwzD3DuEQYrfRym%2BukYBP5waH9htOktdF&X-Amz-Signature=8449e82e9b2ad6cdbef7bf0c55be854dd07a18c972a926397bcd5277c0a7b7bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CRJ2C2R%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCICb4t5RCZfewAJLp3olftyD%2Bb5U3MNJGQUKKCKCbzV%2B2AiA%2FRfiJNQ%2BQMrwg3DwGuR%2BQJh%2FVTK1zU5uoP4s2lePImSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM4Od%2F1bfhMMbb6ciKKtwDhJZ5bXHkbcoEwRLRvU2CR0NyM7%2BGB3LYDZs0fpjLkm3Ezhr252T4AsKDwpsH%2FPDtSOVRcFH5yG3ocIdy0OrW%2FNp98lqb2uVV97xRb6CuVCUHDeC6iN6ee1RJZSHWRts%2FVeE8A8cOwOLXhen0UP2J550Q9zYZo%2FXVxzsjCUEwkbnr9VXPuQQyXXVMoGgO0jJSxAwpeCCNwGA5fESzsRxUXbuK6wXo4tV1uHIldFowaUHEen09DIAjpeNL7hdDQGxAL6Vva0LXmv9byvFvrXukGact02yQ0tryxufSTvL9yGr3C99SPNKbnYg0rNLO08XfKbHgsvkS0PJ5ilFvw8Q%2BbyZHQqXiH6vutuNrofkJku7AUTGYx9NlfoiT3nVhZrRInXd%2Bf%2Fo0i9VHeNMG%2Byut1ryO1kj633XgtL%2FPzR8AviadxK9STHTwDaJ1pws40sLjS%2BY%2FvSfNBSGTF%2Fwi8qp3UvKu43Pq8Anljj06DQCji6i1xUYaNtyWftZyZ%2FbdGhzmyz9m27DYZl7o%2B7cX63UIDcVi9MMrA6rMLf2zU9f647Lj0pGNSPeHrnDwfZvHIO%2FLHAltW6u6nXF%2BYWXfJBvhdRqZuoOUkyZs3BHEMRoUnc9gpVhEPJq%2F8zlGkX8wpb6JvQY6pgGtbW4WnLeyiQVUSN2NZPsu6jlS%2B%2BU%2BnTMZkDosKM1sAz%2FVhujP1T%2FWzKXEZ%2B3UKdT21kEK1E2eAVIIzr%2Fy8TH6SiEWYffGmp5oOW%2BmY8B59NLVMxjqDjO8dY3sUakmIFiwzDOS3UJfZPt%2BujQE86k0Y5IgP9IRPSbN8uFx7Wg1NBjubxjqcPvXy4xH178kwzD3DuEQYrfRym%2BukYBP5waH9htOktdF&X-Amz-Signature=1426343c254e9f83988f77f9d219f8cf7766e93e54cd59217c2841cc641a3fb6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
