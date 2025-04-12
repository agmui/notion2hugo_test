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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z44H5I3J%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDeU2Nfh6MMbv2WOF09ZU0Trw%2FvOf8ZST%2B23a%2FI%2BpMA%2FgIgIA%2Fu5AiEFEKRS92vZzzP0fELFF%2B4fEN8G4KHmEiBSd4qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7irBY5WUoEIzaA6SrcAzelRoHoD8fgUt%2BpgqoQ1XudBpUZt12jWC8lxBh0TIyOcgnHQP2URYUUSVtdasKe7Dn62siIBOEGObn4Fta1HTyMFm4HVOzU1GwPNJvc4D7UA8cIqBxxaQ4IfHSkuWG6RyXeYJmoaYxWld%2FXZZIuzKEHZRmyyUZzhVNAJu1U6xi9iVdeCj5bjd8b7YVinR3O8ozEb6skCjXXjO6Goys%2FS9gz9OpSeLxnIFAEYShDN6Z8xrgTnNm7YM4Y5%2Bc0750hGdEw6kceWSrOkokSGDtJAa2EqpGznICaMoIRAfvA8691BJT9qUTj%2BnmA0bOwJeL%2Fa8LlwV1Pr9trL%2F2jSxnFxuOvnKmshGhULzyqhQ6J847WYFjh%2B%2F1gx2u1olr5neINVSBEcPHgYir%2FAa%2FwrIdQPoEZBX8Jw8YAf%2Fd4a6y1ZYWrXltqSxTYdm0ux8TsjOhbNIwTr2JN4m%2B18Lu%2Bv8IoxhptY44qNl5Ev76nMVekL4P95RkCM2q9hNlQoBQGdTBnUFjLNxE5dTxk9gmEwM0LrBUVUBQE7B3gGF2pPaEk8LWxBopNLM4wCzBYka5DvdIu76tAf8IiaW0QhExEZuUSZR75Cz3%2FAJZEVH1LZULbNZ0H8DYYS76RkWGm0oqmMJLK6b8GOqUBiYAee2ja4SxJVWSEifrnVjHwYUN%2FsBYL0Is7ie5D1QnnPot2%2B91pl3gap5hWIkqzHZciT%2F1Ue12fKtmfoLF5QTMk0PwPwVrqKITtTyUMuMQH%2F9S6AHCiFi9vI87cN%2BPGjVch%2FcfDTrPuC631mSjDcNQpM1%2FUybIXMgMDSmZKPt%2FKxi9Ekq6%2FyXJmFtM5MSZDYZpEZxqeXqdd%2BAbID9lU8Q%2BZD7EF&X-Amz-Signature=6dfea1cf307c7418635161a96298f353497ac7e5fa17bda0d44718360b151676&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z44H5I3J%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDeU2Nfh6MMbv2WOF09ZU0Trw%2FvOf8ZST%2B23a%2FI%2BpMA%2FgIgIA%2Fu5AiEFEKRS92vZzzP0fELFF%2B4fEN8G4KHmEiBSd4qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7irBY5WUoEIzaA6SrcAzelRoHoD8fgUt%2BpgqoQ1XudBpUZt12jWC8lxBh0TIyOcgnHQP2URYUUSVtdasKe7Dn62siIBOEGObn4Fta1HTyMFm4HVOzU1GwPNJvc4D7UA8cIqBxxaQ4IfHSkuWG6RyXeYJmoaYxWld%2FXZZIuzKEHZRmyyUZzhVNAJu1U6xi9iVdeCj5bjd8b7YVinR3O8ozEb6skCjXXjO6Goys%2FS9gz9OpSeLxnIFAEYShDN6Z8xrgTnNm7YM4Y5%2Bc0750hGdEw6kceWSrOkokSGDtJAa2EqpGznICaMoIRAfvA8691BJT9qUTj%2BnmA0bOwJeL%2Fa8LlwV1Pr9trL%2F2jSxnFxuOvnKmshGhULzyqhQ6J847WYFjh%2B%2F1gx2u1olr5neINVSBEcPHgYir%2FAa%2FwrIdQPoEZBX8Jw8YAf%2Fd4a6y1ZYWrXltqSxTYdm0ux8TsjOhbNIwTr2JN4m%2B18Lu%2Bv8IoxhptY44qNl5Ev76nMVekL4P95RkCM2q9hNlQoBQGdTBnUFjLNxE5dTxk9gmEwM0LrBUVUBQE7B3gGF2pPaEk8LWxBopNLM4wCzBYka5DvdIu76tAf8IiaW0QhExEZuUSZR75Cz3%2FAJZEVH1LZULbNZ0H8DYYS76RkWGm0oqmMJLK6b8GOqUBiYAee2ja4SxJVWSEifrnVjHwYUN%2FsBYL0Is7ie5D1QnnPot2%2B91pl3gap5hWIkqzHZciT%2F1Ue12fKtmfoLF5QTMk0PwPwVrqKITtTyUMuMQH%2F9S6AHCiFi9vI87cN%2BPGjVch%2FcfDTrPuC631mSjDcNQpM1%2FUybIXMgMDSmZKPt%2FKxi9Ekq6%2FyXJmFtM5MSZDYZpEZxqeXqdd%2BAbID9lU8Q%2BZD7EF&X-Amz-Signature=7228cf1d4deb2163a34b70b261acdce23353332e4900ce073b3c52b7b9a4cf5e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z44H5I3J%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDeU2Nfh6MMbv2WOF09ZU0Trw%2FvOf8ZST%2B23a%2FI%2BpMA%2FgIgIA%2Fu5AiEFEKRS92vZzzP0fELFF%2B4fEN8G4KHmEiBSd4qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7irBY5WUoEIzaA6SrcAzelRoHoD8fgUt%2BpgqoQ1XudBpUZt12jWC8lxBh0TIyOcgnHQP2URYUUSVtdasKe7Dn62siIBOEGObn4Fta1HTyMFm4HVOzU1GwPNJvc4D7UA8cIqBxxaQ4IfHSkuWG6RyXeYJmoaYxWld%2FXZZIuzKEHZRmyyUZzhVNAJu1U6xi9iVdeCj5bjd8b7YVinR3O8ozEb6skCjXXjO6Goys%2FS9gz9OpSeLxnIFAEYShDN6Z8xrgTnNm7YM4Y5%2Bc0750hGdEw6kceWSrOkokSGDtJAa2EqpGznICaMoIRAfvA8691BJT9qUTj%2BnmA0bOwJeL%2Fa8LlwV1Pr9trL%2F2jSxnFxuOvnKmshGhULzyqhQ6J847WYFjh%2B%2F1gx2u1olr5neINVSBEcPHgYir%2FAa%2FwrIdQPoEZBX8Jw8YAf%2Fd4a6y1ZYWrXltqSxTYdm0ux8TsjOhbNIwTr2JN4m%2B18Lu%2Bv8IoxhptY44qNl5Ev76nMVekL4P95RkCM2q9hNlQoBQGdTBnUFjLNxE5dTxk9gmEwM0LrBUVUBQE7B3gGF2pPaEk8LWxBopNLM4wCzBYka5DvdIu76tAf8IiaW0QhExEZuUSZR75Cz3%2FAJZEVH1LZULbNZ0H8DYYS76RkWGm0oqmMJLK6b8GOqUBiYAee2ja4SxJVWSEifrnVjHwYUN%2FsBYL0Is7ie5D1QnnPot2%2B91pl3gap5hWIkqzHZciT%2F1Ue12fKtmfoLF5QTMk0PwPwVrqKITtTyUMuMQH%2F9S6AHCiFi9vI87cN%2BPGjVch%2FcfDTrPuC631mSjDcNQpM1%2FUybIXMgMDSmZKPt%2FKxi9Ekq6%2FyXJmFtM5MSZDYZpEZxqeXqdd%2BAbID9lU8Q%2BZD7EF&X-Amz-Signature=3521b9c47f9491c285eb28829f4986cb3dcc1fe83f1af212dd94738f42a1fac0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z44H5I3J%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDeU2Nfh6MMbv2WOF09ZU0Trw%2FvOf8ZST%2B23a%2FI%2BpMA%2FgIgIA%2Fu5AiEFEKRS92vZzzP0fELFF%2B4fEN8G4KHmEiBSd4qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7irBY5WUoEIzaA6SrcAzelRoHoD8fgUt%2BpgqoQ1XudBpUZt12jWC8lxBh0TIyOcgnHQP2URYUUSVtdasKe7Dn62siIBOEGObn4Fta1HTyMFm4HVOzU1GwPNJvc4D7UA8cIqBxxaQ4IfHSkuWG6RyXeYJmoaYxWld%2FXZZIuzKEHZRmyyUZzhVNAJu1U6xi9iVdeCj5bjd8b7YVinR3O8ozEb6skCjXXjO6Goys%2FS9gz9OpSeLxnIFAEYShDN6Z8xrgTnNm7YM4Y5%2Bc0750hGdEw6kceWSrOkokSGDtJAa2EqpGznICaMoIRAfvA8691BJT9qUTj%2BnmA0bOwJeL%2Fa8LlwV1Pr9trL%2F2jSxnFxuOvnKmshGhULzyqhQ6J847WYFjh%2B%2F1gx2u1olr5neINVSBEcPHgYir%2FAa%2FwrIdQPoEZBX8Jw8YAf%2Fd4a6y1ZYWrXltqSxTYdm0ux8TsjOhbNIwTr2JN4m%2B18Lu%2Bv8IoxhptY44qNl5Ev76nMVekL4P95RkCM2q9hNlQoBQGdTBnUFjLNxE5dTxk9gmEwM0LrBUVUBQE7B3gGF2pPaEk8LWxBopNLM4wCzBYka5DvdIu76tAf8IiaW0QhExEZuUSZR75Cz3%2FAJZEVH1LZULbNZ0H8DYYS76RkWGm0oqmMJLK6b8GOqUBiYAee2ja4SxJVWSEifrnVjHwYUN%2FsBYL0Is7ie5D1QnnPot2%2B91pl3gap5hWIkqzHZciT%2F1Ue12fKtmfoLF5QTMk0PwPwVrqKITtTyUMuMQH%2F9S6AHCiFi9vI87cN%2BPGjVch%2FcfDTrPuC631mSjDcNQpM1%2FUybIXMgMDSmZKPt%2FKxi9Ekq6%2FyXJmFtM5MSZDYZpEZxqeXqdd%2BAbID9lU8Q%2BZD7EF&X-Amz-Signature=97d0a25e684b5dcc460474355e52f63365839612dcec80b6ae38a8641a655336&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z44H5I3J%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDeU2Nfh6MMbv2WOF09ZU0Trw%2FvOf8ZST%2B23a%2FI%2BpMA%2FgIgIA%2Fu5AiEFEKRS92vZzzP0fELFF%2B4fEN8G4KHmEiBSd4qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7irBY5WUoEIzaA6SrcAzelRoHoD8fgUt%2BpgqoQ1XudBpUZt12jWC8lxBh0TIyOcgnHQP2URYUUSVtdasKe7Dn62siIBOEGObn4Fta1HTyMFm4HVOzU1GwPNJvc4D7UA8cIqBxxaQ4IfHSkuWG6RyXeYJmoaYxWld%2FXZZIuzKEHZRmyyUZzhVNAJu1U6xi9iVdeCj5bjd8b7YVinR3O8ozEb6skCjXXjO6Goys%2FS9gz9OpSeLxnIFAEYShDN6Z8xrgTnNm7YM4Y5%2Bc0750hGdEw6kceWSrOkokSGDtJAa2EqpGznICaMoIRAfvA8691BJT9qUTj%2BnmA0bOwJeL%2Fa8LlwV1Pr9trL%2F2jSxnFxuOvnKmshGhULzyqhQ6J847WYFjh%2B%2F1gx2u1olr5neINVSBEcPHgYir%2FAa%2FwrIdQPoEZBX8Jw8YAf%2Fd4a6y1ZYWrXltqSxTYdm0ux8TsjOhbNIwTr2JN4m%2B18Lu%2Bv8IoxhptY44qNl5Ev76nMVekL4P95RkCM2q9hNlQoBQGdTBnUFjLNxE5dTxk9gmEwM0LrBUVUBQE7B3gGF2pPaEk8LWxBopNLM4wCzBYka5DvdIu76tAf8IiaW0QhExEZuUSZR75Cz3%2FAJZEVH1LZULbNZ0H8DYYS76RkWGm0oqmMJLK6b8GOqUBiYAee2ja4SxJVWSEifrnVjHwYUN%2FsBYL0Is7ie5D1QnnPot2%2B91pl3gap5hWIkqzHZciT%2F1Ue12fKtmfoLF5QTMk0PwPwVrqKITtTyUMuMQH%2F9S6AHCiFi9vI87cN%2BPGjVch%2FcfDTrPuC631mSjDcNQpM1%2FUybIXMgMDSmZKPt%2FKxi9Ekq6%2FyXJmFtM5MSZDYZpEZxqeXqdd%2BAbID9lU8Q%2BZD7EF&X-Amz-Signature=c4923aae7b5ef89e6a530b91ba77c6359e2d0dc8ceaabb45a45b9d51dad4d2e1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
