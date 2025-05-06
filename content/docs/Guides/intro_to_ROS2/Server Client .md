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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U53CEP6O%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1jp7Hj7tOoRloNxibxqe6NtyyT73sMZvBirck3ayzbAiEAheRS64EODL8SZl1%2FtyJcf%2FVeOfIccLa%2Bkpq0zdArZCMq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDBI1eSlmwGAYeRpEkCrcAyZT5dgkILCADA0CO%2FigW68VjSeLrsy%2BUTfAycYrwCzpVp5eojnHTlJEcVeg1gznxWuumZeFnkbg9FD8VXcE8G0lWmZtqMWoKwjCPJayujKKOgNsI0uTaWcak4WyX8ncDv3HRwfn0fpgLZfzirZ5vpBdBtcwrRysyZ0oa9FJ9dekoZBUOxCP%2FAlbSo19x6oZlxAwMpnv1BNboxJgiWrEPUDU07uvkazQoGkGzDZuTrZSLNbrhw8oHC%2F5Du4ywBCHm9yL8UVzC%2BQpil9NZQRw1MV6blZg9kjcowLQoMqWly6pA4gv09iV5PhZM1cluDn3kll1ccKRqO85nALzJZkTYrd%2Fja%2BFzMMTfn%2BsuJmW7tOoau69A7umdJkvn6PEW4bCcPaZkQPmwWxvuwEPtIGtp47%2Br2rL7%2BdyeK%2BANuCp9i8ZfqepQKEzHUSO34e3kZKoUoQPmT1FvuhYsAve1zjLonK7f7056jLf4KEldOZqk%2Fb80ZCcP28u0nYodRVvLCAO9f3sNyl4kDqFK2l%2BQspW8I6q10l%2FhlKEb7fR2G6xDlS1m2jXLqDAzHHYdZO6IuWPMiITz%2BJsu2ex0BRWsSpWf7L%2F8pq0yYgtSrMca8kGtrERYbuFqHJbqzerEXeyMPzm6MAGOqUBMQTxlRu7vqmcdbMEdh1eJYQoReg9ZAy%2Bp%2BHquq0UMGq0GD%2Br%2B6GAjR%2FlbkOET0kveCaBUxEx2AdS3RgmxAMrzoK8Hl4GYr%2ByOs%2FxwtO8AUS%2F4G2AO6CEaWjuLMmflThj0WGEn%2BGGNlp1QTbVfUDuB3TRVSxRP2Eu5qi10U2nYOlUcItHmtTWgLVzEbVhhqUplVlfsqvSnJz95XuPNZl6EK%2B%2FKZGu&X-Amz-Signature=470d27aeeb2f469032a65156516033cb5134489c4a1714ff6decfc7d9bdd2979&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U53CEP6O%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1jp7Hj7tOoRloNxibxqe6NtyyT73sMZvBirck3ayzbAiEAheRS64EODL8SZl1%2FtyJcf%2FVeOfIccLa%2Bkpq0zdArZCMq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDBI1eSlmwGAYeRpEkCrcAyZT5dgkILCADA0CO%2FigW68VjSeLrsy%2BUTfAycYrwCzpVp5eojnHTlJEcVeg1gznxWuumZeFnkbg9FD8VXcE8G0lWmZtqMWoKwjCPJayujKKOgNsI0uTaWcak4WyX8ncDv3HRwfn0fpgLZfzirZ5vpBdBtcwrRysyZ0oa9FJ9dekoZBUOxCP%2FAlbSo19x6oZlxAwMpnv1BNboxJgiWrEPUDU07uvkazQoGkGzDZuTrZSLNbrhw8oHC%2F5Du4ywBCHm9yL8UVzC%2BQpil9NZQRw1MV6blZg9kjcowLQoMqWly6pA4gv09iV5PhZM1cluDn3kll1ccKRqO85nALzJZkTYrd%2Fja%2BFzMMTfn%2BsuJmW7tOoau69A7umdJkvn6PEW4bCcPaZkQPmwWxvuwEPtIGtp47%2Br2rL7%2BdyeK%2BANuCp9i8ZfqepQKEzHUSO34e3kZKoUoQPmT1FvuhYsAve1zjLonK7f7056jLf4KEldOZqk%2Fb80ZCcP28u0nYodRVvLCAO9f3sNyl4kDqFK2l%2BQspW8I6q10l%2FhlKEb7fR2G6xDlS1m2jXLqDAzHHYdZO6IuWPMiITz%2BJsu2ex0BRWsSpWf7L%2F8pq0yYgtSrMca8kGtrERYbuFqHJbqzerEXeyMPzm6MAGOqUBMQTxlRu7vqmcdbMEdh1eJYQoReg9ZAy%2Bp%2BHquq0UMGq0GD%2Br%2B6GAjR%2FlbkOET0kveCaBUxEx2AdS3RgmxAMrzoK8Hl4GYr%2ByOs%2FxwtO8AUS%2F4G2AO6CEaWjuLMmflThj0WGEn%2BGGNlp1QTbVfUDuB3TRVSxRP2Eu5qi10U2nYOlUcItHmtTWgLVzEbVhhqUplVlfsqvSnJz95XuPNZl6EK%2B%2FKZGu&X-Amz-Signature=d086c8cfca84bcaddca87279f3f8f60384f768bd76401a70bffce4403930ded6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U53CEP6O%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1jp7Hj7tOoRloNxibxqe6NtyyT73sMZvBirck3ayzbAiEAheRS64EODL8SZl1%2FtyJcf%2FVeOfIccLa%2Bkpq0zdArZCMq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDBI1eSlmwGAYeRpEkCrcAyZT5dgkILCADA0CO%2FigW68VjSeLrsy%2BUTfAycYrwCzpVp5eojnHTlJEcVeg1gznxWuumZeFnkbg9FD8VXcE8G0lWmZtqMWoKwjCPJayujKKOgNsI0uTaWcak4WyX8ncDv3HRwfn0fpgLZfzirZ5vpBdBtcwrRysyZ0oa9FJ9dekoZBUOxCP%2FAlbSo19x6oZlxAwMpnv1BNboxJgiWrEPUDU07uvkazQoGkGzDZuTrZSLNbrhw8oHC%2F5Du4ywBCHm9yL8UVzC%2BQpil9NZQRw1MV6blZg9kjcowLQoMqWly6pA4gv09iV5PhZM1cluDn3kll1ccKRqO85nALzJZkTYrd%2Fja%2BFzMMTfn%2BsuJmW7tOoau69A7umdJkvn6PEW4bCcPaZkQPmwWxvuwEPtIGtp47%2Br2rL7%2BdyeK%2BANuCp9i8ZfqepQKEzHUSO34e3kZKoUoQPmT1FvuhYsAve1zjLonK7f7056jLf4KEldOZqk%2Fb80ZCcP28u0nYodRVvLCAO9f3sNyl4kDqFK2l%2BQspW8I6q10l%2FhlKEb7fR2G6xDlS1m2jXLqDAzHHYdZO6IuWPMiITz%2BJsu2ex0BRWsSpWf7L%2F8pq0yYgtSrMca8kGtrERYbuFqHJbqzerEXeyMPzm6MAGOqUBMQTxlRu7vqmcdbMEdh1eJYQoReg9ZAy%2Bp%2BHquq0UMGq0GD%2Br%2B6GAjR%2FlbkOET0kveCaBUxEx2AdS3RgmxAMrzoK8Hl4GYr%2ByOs%2FxwtO8AUS%2F4G2AO6CEaWjuLMmflThj0WGEn%2BGGNlp1QTbVfUDuB3TRVSxRP2Eu5qi10U2nYOlUcItHmtTWgLVzEbVhhqUplVlfsqvSnJz95XuPNZl6EK%2B%2FKZGu&X-Amz-Signature=bdae150844b3a31c4eb9a3b7d46799ebcc78ec9c038728c837c9fc01ccf89993&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U53CEP6O%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1jp7Hj7tOoRloNxibxqe6NtyyT73sMZvBirck3ayzbAiEAheRS64EODL8SZl1%2FtyJcf%2FVeOfIccLa%2Bkpq0zdArZCMq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDBI1eSlmwGAYeRpEkCrcAyZT5dgkILCADA0CO%2FigW68VjSeLrsy%2BUTfAycYrwCzpVp5eojnHTlJEcVeg1gznxWuumZeFnkbg9FD8VXcE8G0lWmZtqMWoKwjCPJayujKKOgNsI0uTaWcak4WyX8ncDv3HRwfn0fpgLZfzirZ5vpBdBtcwrRysyZ0oa9FJ9dekoZBUOxCP%2FAlbSo19x6oZlxAwMpnv1BNboxJgiWrEPUDU07uvkazQoGkGzDZuTrZSLNbrhw8oHC%2F5Du4ywBCHm9yL8UVzC%2BQpil9NZQRw1MV6blZg9kjcowLQoMqWly6pA4gv09iV5PhZM1cluDn3kll1ccKRqO85nALzJZkTYrd%2Fja%2BFzMMTfn%2BsuJmW7tOoau69A7umdJkvn6PEW4bCcPaZkQPmwWxvuwEPtIGtp47%2Br2rL7%2BdyeK%2BANuCp9i8ZfqepQKEzHUSO34e3kZKoUoQPmT1FvuhYsAve1zjLonK7f7056jLf4KEldOZqk%2Fb80ZCcP28u0nYodRVvLCAO9f3sNyl4kDqFK2l%2BQspW8I6q10l%2FhlKEb7fR2G6xDlS1m2jXLqDAzHHYdZO6IuWPMiITz%2BJsu2ex0BRWsSpWf7L%2F8pq0yYgtSrMca8kGtrERYbuFqHJbqzerEXeyMPzm6MAGOqUBMQTxlRu7vqmcdbMEdh1eJYQoReg9ZAy%2Bp%2BHquq0UMGq0GD%2Br%2B6GAjR%2FlbkOET0kveCaBUxEx2AdS3RgmxAMrzoK8Hl4GYr%2ByOs%2FxwtO8AUS%2F4G2AO6CEaWjuLMmflThj0WGEn%2BGGNlp1QTbVfUDuB3TRVSxRP2Eu5qi10U2nYOlUcItHmtTWgLVzEbVhhqUplVlfsqvSnJz95XuPNZl6EK%2B%2FKZGu&X-Amz-Signature=5aea6598fed75a8a9e479c3ed05ea92e810cde3df80da22e100b7416fe4eb265&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U53CEP6O%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1jp7Hj7tOoRloNxibxqe6NtyyT73sMZvBirck3ayzbAiEAheRS64EODL8SZl1%2FtyJcf%2FVeOfIccLa%2Bkpq0zdArZCMq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDBI1eSlmwGAYeRpEkCrcAyZT5dgkILCADA0CO%2FigW68VjSeLrsy%2BUTfAycYrwCzpVp5eojnHTlJEcVeg1gznxWuumZeFnkbg9FD8VXcE8G0lWmZtqMWoKwjCPJayujKKOgNsI0uTaWcak4WyX8ncDv3HRwfn0fpgLZfzirZ5vpBdBtcwrRysyZ0oa9FJ9dekoZBUOxCP%2FAlbSo19x6oZlxAwMpnv1BNboxJgiWrEPUDU07uvkazQoGkGzDZuTrZSLNbrhw8oHC%2F5Du4ywBCHm9yL8UVzC%2BQpil9NZQRw1MV6blZg9kjcowLQoMqWly6pA4gv09iV5PhZM1cluDn3kll1ccKRqO85nALzJZkTYrd%2Fja%2BFzMMTfn%2BsuJmW7tOoau69A7umdJkvn6PEW4bCcPaZkQPmwWxvuwEPtIGtp47%2Br2rL7%2BdyeK%2BANuCp9i8ZfqepQKEzHUSO34e3kZKoUoQPmT1FvuhYsAve1zjLonK7f7056jLf4KEldOZqk%2Fb80ZCcP28u0nYodRVvLCAO9f3sNyl4kDqFK2l%2BQspW8I6q10l%2FhlKEb7fR2G6xDlS1m2jXLqDAzHHYdZO6IuWPMiITz%2BJsu2ex0BRWsSpWf7L%2F8pq0yYgtSrMca8kGtrERYbuFqHJbqzerEXeyMPzm6MAGOqUBMQTxlRu7vqmcdbMEdh1eJYQoReg9ZAy%2Bp%2BHquq0UMGq0GD%2Br%2B6GAjR%2FlbkOET0kveCaBUxEx2AdS3RgmxAMrzoK8Hl4GYr%2ByOs%2FxwtO8AUS%2F4G2AO6CEaWjuLMmflThj0WGEn%2BGGNlp1QTbVfUDuB3TRVSxRP2Eu5qi10U2nYOlUcItHmtTWgLVzEbVhhqUplVlfsqvSnJz95XuPNZl6EK%2B%2FKZGu&X-Amz-Signature=58603c081f03e8c9e443bb7ee3545dc45b0a5ed9fc04e55fa01c44cf486b8daf&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
