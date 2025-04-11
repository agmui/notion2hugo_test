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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQCTRRZR%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDNVT9%2FRtoOki5k592kMY63sIAbrrpAbz8w5s3DoA2e%2BwIgbBeJw0uUAha5v9VyS4fJod2UydYcGbFWdKWXCoNxJUYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOfKmTD%2FOrCZozSKHCrcA5pcWkUc1cTsdt1cJQAjxWELANvS20aAO%2B64RICF%2FsaReJoiExQRSaYYGsDDwLBT9OjWmQ7ZUzbOdI3FlHLlZx3P7pazxNQf8PBMB5acdV5VzXPce6ZJz8z%2BDDK6pUfapXYX9phj%2FG1udJbPH2hGnnneIESGmcjhcU7l6bFIyDa%2BAvkvYpvtaJFt3sxnLoewrmQoeEPJMWCqApaX3ML9crrFA%2FFcVvROq6cOnAYkU9MDwWQ3jmivYgYPTSR2jNsoMqV8dod6GrgSxGgFp4mNv4%2BW8VFF6rrLNVqxFECH4DJOrzUuN13ChMcaPYjfVa3nC6ajFYduUdkbjjdfXlAPH9yrrm0An3xk97CAHN8iAsd58iVi3Tu8CHvc6eGrf0HSn%2BhUQjGQQSGVr0pHr8owgiPSjFGwahA3QfKGQzfhbVSlQaxPqqdIxHKq5Vvev8z3HFN4BPN9x3AlP1sLJN5Shf%2BROUk%2FwEf5VazOUJyZKz%2BjwoeekVXAURQGwT7XjIfwN7XGBE2aLBr9i5Ax7uRDgQMCcz4TwostyVqHVppqjdnPk%2Bu%2FmdPjnWtAbAadbL4I878XaxMAu4r4S%2FdaWseaYRlYwFvKxugklyz7yUmKQ%2BhewNfk1Z2GauXoRRG%2FMITe4b8GOqUBBo60FJIb6KvioaLgsOgSKBkDHKS1cRlmfXDx5dF5xzIjsr4%2BTQ%2By8Kfws4je39lVQS4QARobXzY3krFgaMOXh6fxfry6%2BeES2diK91mMVojzJVroZXd1Y%2Bc3%2ByKS4P7aSAVg5cmhDuzQ8wDQ6MQjIOXQXmZeFd0ONa3p9%2BM7%2Bw15BzoAzKviLvS0U4BnBG2ehktLIJb7PY9vAhsv5x051KYhbYot&X-Amz-Signature=6b1e00c9f323439f7ea2f3726315109001fb36d509079316e08ff9b037a6f66b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQCTRRZR%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDNVT9%2FRtoOki5k592kMY63sIAbrrpAbz8w5s3DoA2e%2BwIgbBeJw0uUAha5v9VyS4fJod2UydYcGbFWdKWXCoNxJUYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOfKmTD%2FOrCZozSKHCrcA5pcWkUc1cTsdt1cJQAjxWELANvS20aAO%2B64RICF%2FsaReJoiExQRSaYYGsDDwLBT9OjWmQ7ZUzbOdI3FlHLlZx3P7pazxNQf8PBMB5acdV5VzXPce6ZJz8z%2BDDK6pUfapXYX9phj%2FG1udJbPH2hGnnneIESGmcjhcU7l6bFIyDa%2BAvkvYpvtaJFt3sxnLoewrmQoeEPJMWCqApaX3ML9crrFA%2FFcVvROq6cOnAYkU9MDwWQ3jmivYgYPTSR2jNsoMqV8dod6GrgSxGgFp4mNv4%2BW8VFF6rrLNVqxFECH4DJOrzUuN13ChMcaPYjfVa3nC6ajFYduUdkbjjdfXlAPH9yrrm0An3xk97CAHN8iAsd58iVi3Tu8CHvc6eGrf0HSn%2BhUQjGQQSGVr0pHr8owgiPSjFGwahA3QfKGQzfhbVSlQaxPqqdIxHKq5Vvev8z3HFN4BPN9x3AlP1sLJN5Shf%2BROUk%2FwEf5VazOUJyZKz%2BjwoeekVXAURQGwT7XjIfwN7XGBE2aLBr9i5Ax7uRDgQMCcz4TwostyVqHVppqjdnPk%2Bu%2FmdPjnWtAbAadbL4I878XaxMAu4r4S%2FdaWseaYRlYwFvKxugklyz7yUmKQ%2BhewNfk1Z2GauXoRRG%2FMITe4b8GOqUBBo60FJIb6KvioaLgsOgSKBkDHKS1cRlmfXDx5dF5xzIjsr4%2BTQ%2By8Kfws4je39lVQS4QARobXzY3krFgaMOXh6fxfry6%2BeES2diK91mMVojzJVroZXd1Y%2Bc3%2ByKS4P7aSAVg5cmhDuzQ8wDQ6MQjIOXQXmZeFd0ONa3p9%2BM7%2Bw15BzoAzKviLvS0U4BnBG2ehktLIJb7PY9vAhsv5x051KYhbYot&X-Amz-Signature=345e880784c924a9acae856c76c165d21dc7d8c6ef99f12e44213ae3962db507&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQCTRRZR%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDNVT9%2FRtoOki5k592kMY63sIAbrrpAbz8w5s3DoA2e%2BwIgbBeJw0uUAha5v9VyS4fJod2UydYcGbFWdKWXCoNxJUYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOfKmTD%2FOrCZozSKHCrcA5pcWkUc1cTsdt1cJQAjxWELANvS20aAO%2B64RICF%2FsaReJoiExQRSaYYGsDDwLBT9OjWmQ7ZUzbOdI3FlHLlZx3P7pazxNQf8PBMB5acdV5VzXPce6ZJz8z%2BDDK6pUfapXYX9phj%2FG1udJbPH2hGnnneIESGmcjhcU7l6bFIyDa%2BAvkvYpvtaJFt3sxnLoewrmQoeEPJMWCqApaX3ML9crrFA%2FFcVvROq6cOnAYkU9MDwWQ3jmivYgYPTSR2jNsoMqV8dod6GrgSxGgFp4mNv4%2BW8VFF6rrLNVqxFECH4DJOrzUuN13ChMcaPYjfVa3nC6ajFYduUdkbjjdfXlAPH9yrrm0An3xk97CAHN8iAsd58iVi3Tu8CHvc6eGrf0HSn%2BhUQjGQQSGVr0pHr8owgiPSjFGwahA3QfKGQzfhbVSlQaxPqqdIxHKq5Vvev8z3HFN4BPN9x3AlP1sLJN5Shf%2BROUk%2FwEf5VazOUJyZKz%2BjwoeekVXAURQGwT7XjIfwN7XGBE2aLBr9i5Ax7uRDgQMCcz4TwostyVqHVppqjdnPk%2Bu%2FmdPjnWtAbAadbL4I878XaxMAu4r4S%2FdaWseaYRlYwFvKxugklyz7yUmKQ%2BhewNfk1Z2GauXoRRG%2FMITe4b8GOqUBBo60FJIb6KvioaLgsOgSKBkDHKS1cRlmfXDx5dF5xzIjsr4%2BTQ%2By8Kfws4je39lVQS4QARobXzY3krFgaMOXh6fxfry6%2BeES2diK91mMVojzJVroZXd1Y%2Bc3%2ByKS4P7aSAVg5cmhDuzQ8wDQ6MQjIOXQXmZeFd0ONa3p9%2BM7%2Bw15BzoAzKviLvS0U4BnBG2ehktLIJb7PY9vAhsv5x051KYhbYot&X-Amz-Signature=8d92ca19c58aa9af1756fecb1b9af6c2e3c3b84923b8c4298252ad8cada88807&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQCTRRZR%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDNVT9%2FRtoOki5k592kMY63sIAbrrpAbz8w5s3DoA2e%2BwIgbBeJw0uUAha5v9VyS4fJod2UydYcGbFWdKWXCoNxJUYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOfKmTD%2FOrCZozSKHCrcA5pcWkUc1cTsdt1cJQAjxWELANvS20aAO%2B64RICF%2FsaReJoiExQRSaYYGsDDwLBT9OjWmQ7ZUzbOdI3FlHLlZx3P7pazxNQf8PBMB5acdV5VzXPce6ZJz8z%2BDDK6pUfapXYX9phj%2FG1udJbPH2hGnnneIESGmcjhcU7l6bFIyDa%2BAvkvYpvtaJFt3sxnLoewrmQoeEPJMWCqApaX3ML9crrFA%2FFcVvROq6cOnAYkU9MDwWQ3jmivYgYPTSR2jNsoMqV8dod6GrgSxGgFp4mNv4%2BW8VFF6rrLNVqxFECH4DJOrzUuN13ChMcaPYjfVa3nC6ajFYduUdkbjjdfXlAPH9yrrm0An3xk97CAHN8iAsd58iVi3Tu8CHvc6eGrf0HSn%2BhUQjGQQSGVr0pHr8owgiPSjFGwahA3QfKGQzfhbVSlQaxPqqdIxHKq5Vvev8z3HFN4BPN9x3AlP1sLJN5Shf%2BROUk%2FwEf5VazOUJyZKz%2BjwoeekVXAURQGwT7XjIfwN7XGBE2aLBr9i5Ax7uRDgQMCcz4TwostyVqHVppqjdnPk%2Bu%2FmdPjnWtAbAadbL4I878XaxMAu4r4S%2FdaWseaYRlYwFvKxugklyz7yUmKQ%2BhewNfk1Z2GauXoRRG%2FMITe4b8GOqUBBo60FJIb6KvioaLgsOgSKBkDHKS1cRlmfXDx5dF5xzIjsr4%2BTQ%2By8Kfws4je39lVQS4QARobXzY3krFgaMOXh6fxfry6%2BeES2diK91mMVojzJVroZXd1Y%2Bc3%2ByKS4P7aSAVg5cmhDuzQ8wDQ6MQjIOXQXmZeFd0ONa3p9%2BM7%2Bw15BzoAzKviLvS0U4BnBG2ehktLIJb7PY9vAhsv5x051KYhbYot&X-Amz-Signature=f7dc94880f65995ea2b4efd68caa58962cf7f521109de23c1d93a26924783c89&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQCTRRZR%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDNVT9%2FRtoOki5k592kMY63sIAbrrpAbz8w5s3DoA2e%2BwIgbBeJw0uUAha5v9VyS4fJod2UydYcGbFWdKWXCoNxJUYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOfKmTD%2FOrCZozSKHCrcA5pcWkUc1cTsdt1cJQAjxWELANvS20aAO%2B64RICF%2FsaReJoiExQRSaYYGsDDwLBT9OjWmQ7ZUzbOdI3FlHLlZx3P7pazxNQf8PBMB5acdV5VzXPce6ZJz8z%2BDDK6pUfapXYX9phj%2FG1udJbPH2hGnnneIESGmcjhcU7l6bFIyDa%2BAvkvYpvtaJFt3sxnLoewrmQoeEPJMWCqApaX3ML9crrFA%2FFcVvROq6cOnAYkU9MDwWQ3jmivYgYPTSR2jNsoMqV8dod6GrgSxGgFp4mNv4%2BW8VFF6rrLNVqxFECH4DJOrzUuN13ChMcaPYjfVa3nC6ajFYduUdkbjjdfXlAPH9yrrm0An3xk97CAHN8iAsd58iVi3Tu8CHvc6eGrf0HSn%2BhUQjGQQSGVr0pHr8owgiPSjFGwahA3QfKGQzfhbVSlQaxPqqdIxHKq5Vvev8z3HFN4BPN9x3AlP1sLJN5Shf%2BROUk%2FwEf5VazOUJyZKz%2BjwoeekVXAURQGwT7XjIfwN7XGBE2aLBr9i5Ax7uRDgQMCcz4TwostyVqHVppqjdnPk%2Bu%2FmdPjnWtAbAadbL4I878XaxMAu4r4S%2FdaWseaYRlYwFvKxugklyz7yUmKQ%2BhewNfk1Z2GauXoRRG%2FMITe4b8GOqUBBo60FJIb6KvioaLgsOgSKBkDHKS1cRlmfXDx5dF5xzIjsr4%2BTQ%2By8Kfws4je39lVQS4QARobXzY3krFgaMOXh6fxfry6%2BeES2diK91mMVojzJVroZXd1Y%2Bc3%2ByKS4P7aSAVg5cmhDuzQ8wDQ6MQjIOXQXmZeFd0ONa3p9%2BM7%2Bw15BzoAzKviLvS0U4BnBG2ehktLIJb7PY9vAhsv5x051KYhbYot&X-Amz-Signature=603fa59be01f9b2a14594701b393f33107178ff64ee869aa20b5508becec4b70&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
