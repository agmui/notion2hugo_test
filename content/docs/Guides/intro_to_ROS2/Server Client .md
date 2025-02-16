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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUO6IQZS%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQD8wgaYiQ%2ByTHSst59BBYKSNjghL%2Fi14WBqqQ7OsebW6wIgWZrjyDKAESZFhlnsOFr4wdp8nFebwNTKu1jEs3JeUo0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIzxr7R0M4z8Z0GU%2FircA6ASmkK3ni0OeeEQcJ%2FrDcgFvWTnUXTBtejrUe59KJVxK9vbjQfv13DtsYh8iYKuu%2B6HI%2FA9giaLvkAlWCWI3MSw8r4R4nLUKH9inRx0IlCVW83GjX3iqft85yqlhaFuAyf3SUrkcpYZZhRPKul3ZFnq0OAib0JZdNgulhgIpCXEecI16TcFy6rvXtOiJz1f0wDkSrC3uXciIT9jAmmkxe9srihKq9mR8vfYt1nLYJOYOT6V1c0%2ByIj4COnJ%2BXP1b9t%2FHFm7ZNNGnybxEY5cE97ObfvqSsJZ965WedPudYpsCkHsi0GGyOaoR1hMu6aRyGvokPoR0mHvy2B7g28GfvEBL3hWG5svUspj39hlO9EPOdPs%2B2KgNSlJUmT%2B0MOFty3W6anONyn%2BB%2BrWVbbzf4RIBc%2FdH7GLtBT8j%2FlMlJWzvE9JmMSyKqsaGBtDr32kJq2eR0xLeaoSx3q0t%2B%2F8yjXLadvIIQKZdncVZBs6%2BZ5FoUAICnrpz05SNGJqI%2BcRoOiyA1O60%2FKngQoh0suX6%2Fm0dJsBXHHrOt%2F0qzwqgGJnJXh2MC2690iN3nzXwHEAO2SdGgQBoL9zbwH%2FfrwBSSNQLxV3vJxFJ6s%2BPQ8qCM3NY2DM7juuBDEwudaJMP%2Fexb0GOqUB5aHkXgpH8c8JFFR6lrAJ27Sgh8xO0Qnb73qth4VNOHrAT1VfQ7%2Fg3OGeoO3RRGBadwjYXgGupkaaYAHVdOBseLhf2hyRucZGs%2FNgwGAwzLWWJUTPq49%2BhKZ34H9R0v9npk1YATH%2Ft%2F0d8UVTN8rwxAi4yCQnTcRn%2FlCV488VxvMsYR%2B33VSkxY30zdvkJB4cB2dYLOLRkOaQ7rbXNYqXLSOfgJBD&X-Amz-Signature=8cf5697bc5c0a558760c23d15e41dd6e4a9b126796ac9bf0192cdf82019df804&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUO6IQZS%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQD8wgaYiQ%2ByTHSst59BBYKSNjghL%2Fi14WBqqQ7OsebW6wIgWZrjyDKAESZFhlnsOFr4wdp8nFebwNTKu1jEs3JeUo0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIzxr7R0M4z8Z0GU%2FircA6ASmkK3ni0OeeEQcJ%2FrDcgFvWTnUXTBtejrUe59KJVxK9vbjQfv13DtsYh8iYKuu%2B6HI%2FA9giaLvkAlWCWI3MSw8r4R4nLUKH9inRx0IlCVW83GjX3iqft85yqlhaFuAyf3SUrkcpYZZhRPKul3ZFnq0OAib0JZdNgulhgIpCXEecI16TcFy6rvXtOiJz1f0wDkSrC3uXciIT9jAmmkxe9srihKq9mR8vfYt1nLYJOYOT6V1c0%2ByIj4COnJ%2BXP1b9t%2FHFm7ZNNGnybxEY5cE97ObfvqSsJZ965WedPudYpsCkHsi0GGyOaoR1hMu6aRyGvokPoR0mHvy2B7g28GfvEBL3hWG5svUspj39hlO9EPOdPs%2B2KgNSlJUmT%2B0MOFty3W6anONyn%2BB%2BrWVbbzf4RIBc%2FdH7GLtBT8j%2FlMlJWzvE9JmMSyKqsaGBtDr32kJq2eR0xLeaoSx3q0t%2B%2F8yjXLadvIIQKZdncVZBs6%2BZ5FoUAICnrpz05SNGJqI%2BcRoOiyA1O60%2FKngQoh0suX6%2Fm0dJsBXHHrOt%2F0qzwqgGJnJXh2MC2690iN3nzXwHEAO2SdGgQBoL9zbwH%2FfrwBSSNQLxV3vJxFJ6s%2BPQ8qCM3NY2DM7juuBDEwudaJMP%2Fexb0GOqUB5aHkXgpH8c8JFFR6lrAJ27Sgh8xO0Qnb73qth4VNOHrAT1VfQ7%2Fg3OGeoO3RRGBadwjYXgGupkaaYAHVdOBseLhf2hyRucZGs%2FNgwGAwzLWWJUTPq49%2BhKZ34H9R0v9npk1YATH%2Ft%2F0d8UVTN8rwxAi4yCQnTcRn%2FlCV488VxvMsYR%2B33VSkxY30zdvkJB4cB2dYLOLRkOaQ7rbXNYqXLSOfgJBD&X-Amz-Signature=5127c5892882328a2d85774293a89f241141066534d2089da80c731c06d70ee9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUO6IQZS%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQD8wgaYiQ%2ByTHSst59BBYKSNjghL%2Fi14WBqqQ7OsebW6wIgWZrjyDKAESZFhlnsOFr4wdp8nFebwNTKu1jEs3JeUo0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIzxr7R0M4z8Z0GU%2FircA6ASmkK3ni0OeeEQcJ%2FrDcgFvWTnUXTBtejrUe59KJVxK9vbjQfv13DtsYh8iYKuu%2B6HI%2FA9giaLvkAlWCWI3MSw8r4R4nLUKH9inRx0IlCVW83GjX3iqft85yqlhaFuAyf3SUrkcpYZZhRPKul3ZFnq0OAib0JZdNgulhgIpCXEecI16TcFy6rvXtOiJz1f0wDkSrC3uXciIT9jAmmkxe9srihKq9mR8vfYt1nLYJOYOT6V1c0%2ByIj4COnJ%2BXP1b9t%2FHFm7ZNNGnybxEY5cE97ObfvqSsJZ965WedPudYpsCkHsi0GGyOaoR1hMu6aRyGvokPoR0mHvy2B7g28GfvEBL3hWG5svUspj39hlO9EPOdPs%2B2KgNSlJUmT%2B0MOFty3W6anONyn%2BB%2BrWVbbzf4RIBc%2FdH7GLtBT8j%2FlMlJWzvE9JmMSyKqsaGBtDr32kJq2eR0xLeaoSx3q0t%2B%2F8yjXLadvIIQKZdncVZBs6%2BZ5FoUAICnrpz05SNGJqI%2BcRoOiyA1O60%2FKngQoh0suX6%2Fm0dJsBXHHrOt%2F0qzwqgGJnJXh2MC2690iN3nzXwHEAO2SdGgQBoL9zbwH%2FfrwBSSNQLxV3vJxFJ6s%2BPQ8qCM3NY2DM7juuBDEwudaJMP%2Fexb0GOqUB5aHkXgpH8c8JFFR6lrAJ27Sgh8xO0Qnb73qth4VNOHrAT1VfQ7%2Fg3OGeoO3RRGBadwjYXgGupkaaYAHVdOBseLhf2hyRucZGs%2FNgwGAwzLWWJUTPq49%2BhKZ34H9R0v9npk1YATH%2Ft%2F0d8UVTN8rwxAi4yCQnTcRn%2FlCV488VxvMsYR%2B33VSkxY30zdvkJB4cB2dYLOLRkOaQ7rbXNYqXLSOfgJBD&X-Amz-Signature=0ac65af66fc3b005f34cfe80ba89a7d4419b42e05cd6a5a6719b06541750ca19&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUO6IQZS%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQD8wgaYiQ%2ByTHSst59BBYKSNjghL%2Fi14WBqqQ7OsebW6wIgWZrjyDKAESZFhlnsOFr4wdp8nFebwNTKu1jEs3JeUo0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIzxr7R0M4z8Z0GU%2FircA6ASmkK3ni0OeeEQcJ%2FrDcgFvWTnUXTBtejrUe59KJVxK9vbjQfv13DtsYh8iYKuu%2B6HI%2FA9giaLvkAlWCWI3MSw8r4R4nLUKH9inRx0IlCVW83GjX3iqft85yqlhaFuAyf3SUrkcpYZZhRPKul3ZFnq0OAib0JZdNgulhgIpCXEecI16TcFy6rvXtOiJz1f0wDkSrC3uXciIT9jAmmkxe9srihKq9mR8vfYt1nLYJOYOT6V1c0%2ByIj4COnJ%2BXP1b9t%2FHFm7ZNNGnybxEY5cE97ObfvqSsJZ965WedPudYpsCkHsi0GGyOaoR1hMu6aRyGvokPoR0mHvy2B7g28GfvEBL3hWG5svUspj39hlO9EPOdPs%2B2KgNSlJUmT%2B0MOFty3W6anONyn%2BB%2BrWVbbzf4RIBc%2FdH7GLtBT8j%2FlMlJWzvE9JmMSyKqsaGBtDr32kJq2eR0xLeaoSx3q0t%2B%2F8yjXLadvIIQKZdncVZBs6%2BZ5FoUAICnrpz05SNGJqI%2BcRoOiyA1O60%2FKngQoh0suX6%2Fm0dJsBXHHrOt%2F0qzwqgGJnJXh2MC2690iN3nzXwHEAO2SdGgQBoL9zbwH%2FfrwBSSNQLxV3vJxFJ6s%2BPQ8qCM3NY2DM7juuBDEwudaJMP%2Fexb0GOqUB5aHkXgpH8c8JFFR6lrAJ27Sgh8xO0Qnb73qth4VNOHrAT1VfQ7%2Fg3OGeoO3RRGBadwjYXgGupkaaYAHVdOBseLhf2hyRucZGs%2FNgwGAwzLWWJUTPq49%2BhKZ34H9R0v9npk1YATH%2Ft%2F0d8UVTN8rwxAi4yCQnTcRn%2FlCV488VxvMsYR%2B33VSkxY30zdvkJB4cB2dYLOLRkOaQ7rbXNYqXLSOfgJBD&X-Amz-Signature=2543e9eb3a71b2057b0589ad31098b28368023f82b0f897edb7e9de4cc61b05b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUO6IQZS%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQD8wgaYiQ%2ByTHSst59BBYKSNjghL%2Fi14WBqqQ7OsebW6wIgWZrjyDKAESZFhlnsOFr4wdp8nFebwNTKu1jEs3JeUo0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIzxr7R0M4z8Z0GU%2FircA6ASmkK3ni0OeeEQcJ%2FrDcgFvWTnUXTBtejrUe59KJVxK9vbjQfv13DtsYh8iYKuu%2B6HI%2FA9giaLvkAlWCWI3MSw8r4R4nLUKH9inRx0IlCVW83GjX3iqft85yqlhaFuAyf3SUrkcpYZZhRPKul3ZFnq0OAib0JZdNgulhgIpCXEecI16TcFy6rvXtOiJz1f0wDkSrC3uXciIT9jAmmkxe9srihKq9mR8vfYt1nLYJOYOT6V1c0%2ByIj4COnJ%2BXP1b9t%2FHFm7ZNNGnybxEY5cE97ObfvqSsJZ965WedPudYpsCkHsi0GGyOaoR1hMu6aRyGvokPoR0mHvy2B7g28GfvEBL3hWG5svUspj39hlO9EPOdPs%2B2KgNSlJUmT%2B0MOFty3W6anONyn%2BB%2BrWVbbzf4RIBc%2FdH7GLtBT8j%2FlMlJWzvE9JmMSyKqsaGBtDr32kJq2eR0xLeaoSx3q0t%2B%2F8yjXLadvIIQKZdncVZBs6%2BZ5FoUAICnrpz05SNGJqI%2BcRoOiyA1O60%2FKngQoh0suX6%2Fm0dJsBXHHrOt%2F0qzwqgGJnJXh2MC2690iN3nzXwHEAO2SdGgQBoL9zbwH%2FfrwBSSNQLxV3vJxFJ6s%2BPQ8qCM3NY2DM7juuBDEwudaJMP%2Fexb0GOqUB5aHkXgpH8c8JFFR6lrAJ27Sgh8xO0Qnb73qth4VNOHrAT1VfQ7%2Fg3OGeoO3RRGBadwjYXgGupkaaYAHVdOBseLhf2hyRucZGs%2FNgwGAwzLWWJUTPq49%2BhKZ34H9R0v9npk1YATH%2Ft%2F0d8UVTN8rwxAi4yCQnTcRn%2FlCV488VxvMsYR%2B33VSkxY30zdvkJB4cB2dYLOLRkOaQ7rbXNYqXLSOfgJBD&X-Amz-Signature=bd83181c784f9725dcfdfec4e8fd0caab01920886fed4e62445d7adfd0f4a9d6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
