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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRSE6AO%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6xHhFTDGSZ3OhT3lHJfTT9%2BrvnVH0wGFQfmN7APBZfAiEAw9tsZQuf80aF8sN4gXOfG0O6qFpDSZBtxNT2L3azRwkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDPdEgRs6rlzl1cv4OyrcA2fq4xDk5mICiNQvGSFjvLgvne6Gf1KqwPgWoM2VbK61yvg1Q57oncYuQKgDQ27Kpe2iGE24dEgPk%2Fv0h3qyyO9Dn1V%2FXc3jqYHxrMdMV%2BKP6ywdJmAHrSXrRazMZEAuYTRdOWbnp6x3nPVXQh%2BASWpBjyllMRL2IpKfIxWoi3xXZJmHGI4ts1wnvWSfzQ1S7Nj3KqbTnyUJzKINCXDui85nv1dcMg%2B395ePbZYzOFI8ns2bd4zs7I77dBaAc36YOJ%2BCzMAOFS3%2FMn9rg13MnPer3%2BDT0%2FBQmhLA1j2tViu9e05fEJyPwA5H3m%2BorMSEynXrSkpZU%2F03TAEX6AxeP148ihOuvr0vlYQrnT6JD6miF4yELprulrVk6FDxwI5Ua2Gvm0HCHlkiFh%2FVuA%2BXA8%2BLJaSBxjaRhuhrFFWdANiiHBqTkAgz%2F4cDeE9k8vc%2Bt7NRTcUYstXxH9oUiZHLa5%2BZv0CkFXFN8KPPYEf1LQJk5vCcP%2Fke0g8nica5XcurIp3hgUxXPP7ieP99maQSwS6xP0w%2B5np6Puh2yZi9CWu3aO9Ufs%2BDOnZ2LY752BmXD9cUh1cAk%2BeNdA7LGzX81hwxV%2BFsn%2BuLSawyrEu%2BCX%2F6eEsAtYayjpLE0zUpML3kisAGOqUBnhI9eQtSWbub1baJoHJWdw%2BSlNgxuqgtgr5XWXYmPFLhbrwNDXpg5nwJjiZeVyMknp%2BYiQJ95tdAp0bP%2Fch3QD8Ql8dhEp8T9A20YsZlWmY%2Fsc4lEzms2W%2FVe%2FHQSEceYBHeMd4iaR%2B71l057tPkcMDfb5ksRbfZfF3mf2niUPzOCBW9baSq%2B%2FZPyklNzQGNJB70uR%2Fk4Ecs%2BHapL11V15Xfxk1p&X-Amz-Signature=0ebefc991de6dba01930d5f03f0494de5128428552bcf6620d41dc0c3a472023&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRSE6AO%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6xHhFTDGSZ3OhT3lHJfTT9%2BrvnVH0wGFQfmN7APBZfAiEAw9tsZQuf80aF8sN4gXOfG0O6qFpDSZBtxNT2L3azRwkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDPdEgRs6rlzl1cv4OyrcA2fq4xDk5mICiNQvGSFjvLgvne6Gf1KqwPgWoM2VbK61yvg1Q57oncYuQKgDQ27Kpe2iGE24dEgPk%2Fv0h3qyyO9Dn1V%2FXc3jqYHxrMdMV%2BKP6ywdJmAHrSXrRazMZEAuYTRdOWbnp6x3nPVXQh%2BASWpBjyllMRL2IpKfIxWoi3xXZJmHGI4ts1wnvWSfzQ1S7Nj3KqbTnyUJzKINCXDui85nv1dcMg%2B395ePbZYzOFI8ns2bd4zs7I77dBaAc36YOJ%2BCzMAOFS3%2FMn9rg13MnPer3%2BDT0%2FBQmhLA1j2tViu9e05fEJyPwA5H3m%2BorMSEynXrSkpZU%2F03TAEX6AxeP148ihOuvr0vlYQrnT6JD6miF4yELprulrVk6FDxwI5Ua2Gvm0HCHlkiFh%2FVuA%2BXA8%2BLJaSBxjaRhuhrFFWdANiiHBqTkAgz%2F4cDeE9k8vc%2Bt7NRTcUYstXxH9oUiZHLa5%2BZv0CkFXFN8KPPYEf1LQJk5vCcP%2Fke0g8nica5XcurIp3hgUxXPP7ieP99maQSwS6xP0w%2B5np6Puh2yZi9CWu3aO9Ufs%2BDOnZ2LY752BmXD9cUh1cAk%2BeNdA7LGzX81hwxV%2BFsn%2BuLSawyrEu%2BCX%2F6eEsAtYayjpLE0zUpML3kisAGOqUBnhI9eQtSWbub1baJoHJWdw%2BSlNgxuqgtgr5XWXYmPFLhbrwNDXpg5nwJjiZeVyMknp%2BYiQJ95tdAp0bP%2Fch3QD8Ql8dhEp8T9A20YsZlWmY%2Fsc4lEzms2W%2FVe%2FHQSEceYBHeMd4iaR%2B71l057tPkcMDfb5ksRbfZfF3mf2niUPzOCBW9baSq%2B%2FZPyklNzQGNJB70uR%2Fk4Ecs%2BHapL11V15Xfxk1p&X-Amz-Signature=37666eddefe1458b048a18adcf1f2fd7ac3078ce6eb92afd84d0b7d5d2147b84&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRSE6AO%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6xHhFTDGSZ3OhT3lHJfTT9%2BrvnVH0wGFQfmN7APBZfAiEAw9tsZQuf80aF8sN4gXOfG0O6qFpDSZBtxNT2L3azRwkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDPdEgRs6rlzl1cv4OyrcA2fq4xDk5mICiNQvGSFjvLgvne6Gf1KqwPgWoM2VbK61yvg1Q57oncYuQKgDQ27Kpe2iGE24dEgPk%2Fv0h3qyyO9Dn1V%2FXc3jqYHxrMdMV%2BKP6ywdJmAHrSXrRazMZEAuYTRdOWbnp6x3nPVXQh%2BASWpBjyllMRL2IpKfIxWoi3xXZJmHGI4ts1wnvWSfzQ1S7Nj3KqbTnyUJzKINCXDui85nv1dcMg%2B395ePbZYzOFI8ns2bd4zs7I77dBaAc36YOJ%2BCzMAOFS3%2FMn9rg13MnPer3%2BDT0%2FBQmhLA1j2tViu9e05fEJyPwA5H3m%2BorMSEynXrSkpZU%2F03TAEX6AxeP148ihOuvr0vlYQrnT6JD6miF4yELprulrVk6FDxwI5Ua2Gvm0HCHlkiFh%2FVuA%2BXA8%2BLJaSBxjaRhuhrFFWdANiiHBqTkAgz%2F4cDeE9k8vc%2Bt7NRTcUYstXxH9oUiZHLa5%2BZv0CkFXFN8KPPYEf1LQJk5vCcP%2Fke0g8nica5XcurIp3hgUxXPP7ieP99maQSwS6xP0w%2B5np6Puh2yZi9CWu3aO9Ufs%2BDOnZ2LY752BmXD9cUh1cAk%2BeNdA7LGzX81hwxV%2BFsn%2BuLSawyrEu%2BCX%2F6eEsAtYayjpLE0zUpML3kisAGOqUBnhI9eQtSWbub1baJoHJWdw%2BSlNgxuqgtgr5XWXYmPFLhbrwNDXpg5nwJjiZeVyMknp%2BYiQJ95tdAp0bP%2Fch3QD8Ql8dhEp8T9A20YsZlWmY%2Fsc4lEzms2W%2FVe%2FHQSEceYBHeMd4iaR%2B71l057tPkcMDfb5ksRbfZfF3mf2niUPzOCBW9baSq%2B%2FZPyklNzQGNJB70uR%2Fk4Ecs%2BHapL11V15Xfxk1p&X-Amz-Signature=557e928ae98f1a03b1e2bc2fbc2852e6238a529c9f522f7d87a6a695e23d12dc&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRSE6AO%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6xHhFTDGSZ3OhT3lHJfTT9%2BrvnVH0wGFQfmN7APBZfAiEAw9tsZQuf80aF8sN4gXOfG0O6qFpDSZBtxNT2L3azRwkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDPdEgRs6rlzl1cv4OyrcA2fq4xDk5mICiNQvGSFjvLgvne6Gf1KqwPgWoM2VbK61yvg1Q57oncYuQKgDQ27Kpe2iGE24dEgPk%2Fv0h3qyyO9Dn1V%2FXc3jqYHxrMdMV%2BKP6ywdJmAHrSXrRazMZEAuYTRdOWbnp6x3nPVXQh%2BASWpBjyllMRL2IpKfIxWoi3xXZJmHGI4ts1wnvWSfzQ1S7Nj3KqbTnyUJzKINCXDui85nv1dcMg%2B395ePbZYzOFI8ns2bd4zs7I77dBaAc36YOJ%2BCzMAOFS3%2FMn9rg13MnPer3%2BDT0%2FBQmhLA1j2tViu9e05fEJyPwA5H3m%2BorMSEynXrSkpZU%2F03TAEX6AxeP148ihOuvr0vlYQrnT6JD6miF4yELprulrVk6FDxwI5Ua2Gvm0HCHlkiFh%2FVuA%2BXA8%2BLJaSBxjaRhuhrFFWdANiiHBqTkAgz%2F4cDeE9k8vc%2Bt7NRTcUYstXxH9oUiZHLa5%2BZv0CkFXFN8KPPYEf1LQJk5vCcP%2Fke0g8nica5XcurIp3hgUxXPP7ieP99maQSwS6xP0w%2B5np6Puh2yZi9CWu3aO9Ufs%2BDOnZ2LY752BmXD9cUh1cAk%2BeNdA7LGzX81hwxV%2BFsn%2BuLSawyrEu%2BCX%2F6eEsAtYayjpLE0zUpML3kisAGOqUBnhI9eQtSWbub1baJoHJWdw%2BSlNgxuqgtgr5XWXYmPFLhbrwNDXpg5nwJjiZeVyMknp%2BYiQJ95tdAp0bP%2Fch3QD8Ql8dhEp8T9A20YsZlWmY%2Fsc4lEzms2W%2FVe%2FHQSEceYBHeMd4iaR%2B71l057tPkcMDfb5ksRbfZfF3mf2niUPzOCBW9baSq%2B%2FZPyklNzQGNJB70uR%2Fk4Ecs%2BHapL11V15Xfxk1p&X-Amz-Signature=acbd9749fbda832650b3fc6c5b6786b2ad7b5bf62a4af7bc5fc5641f2d358551&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRSE6AO%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6xHhFTDGSZ3OhT3lHJfTT9%2BrvnVH0wGFQfmN7APBZfAiEAw9tsZQuf80aF8sN4gXOfG0O6qFpDSZBtxNT2L3azRwkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDPdEgRs6rlzl1cv4OyrcA2fq4xDk5mICiNQvGSFjvLgvne6Gf1KqwPgWoM2VbK61yvg1Q57oncYuQKgDQ27Kpe2iGE24dEgPk%2Fv0h3qyyO9Dn1V%2FXc3jqYHxrMdMV%2BKP6ywdJmAHrSXrRazMZEAuYTRdOWbnp6x3nPVXQh%2BASWpBjyllMRL2IpKfIxWoi3xXZJmHGI4ts1wnvWSfzQ1S7Nj3KqbTnyUJzKINCXDui85nv1dcMg%2B395ePbZYzOFI8ns2bd4zs7I77dBaAc36YOJ%2BCzMAOFS3%2FMn9rg13MnPer3%2BDT0%2FBQmhLA1j2tViu9e05fEJyPwA5H3m%2BorMSEynXrSkpZU%2F03TAEX6AxeP148ihOuvr0vlYQrnT6JD6miF4yELprulrVk6FDxwI5Ua2Gvm0HCHlkiFh%2FVuA%2BXA8%2BLJaSBxjaRhuhrFFWdANiiHBqTkAgz%2F4cDeE9k8vc%2Bt7NRTcUYstXxH9oUiZHLa5%2BZv0CkFXFN8KPPYEf1LQJk5vCcP%2Fke0g8nica5XcurIp3hgUxXPP7ieP99maQSwS6xP0w%2B5np6Puh2yZi9CWu3aO9Ufs%2BDOnZ2LY752BmXD9cUh1cAk%2BeNdA7LGzX81hwxV%2BFsn%2BuLSawyrEu%2BCX%2F6eEsAtYayjpLE0zUpML3kisAGOqUBnhI9eQtSWbub1baJoHJWdw%2BSlNgxuqgtgr5XWXYmPFLhbrwNDXpg5nwJjiZeVyMknp%2BYiQJ95tdAp0bP%2Fch3QD8Ql8dhEp8T9A20YsZlWmY%2Fsc4lEzms2W%2FVe%2FHQSEceYBHeMd4iaR%2B71l057tPkcMDfb5ksRbfZfF3mf2niUPzOCBW9baSq%2B%2FZPyklNzQGNJB70uR%2Fk4Ecs%2BHapL11V15Xfxk1p&X-Amz-Signature=62d9328490660de78a8dafbfd9ee4b85052ecad98acdde7f300a7cf85b3e77e3&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
