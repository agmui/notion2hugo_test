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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WNPGZTS%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDujSOgEDdMh6Yik26RIad9r67x3lZUovNOULoJ8OkDHQIgdYYPMXKKvpcLkJtcDFkIsFhjIA%2FJ1E5TJv1MAlc4eMUqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLC192YjgBDvDEXkPCrcA9PXH6U4LkcHhysbzYTh0jLE%2FePjI%2FNpNjkfsQi5IGORMJkcU94lT35W4OsXwmgwkzlEOjWDANbdMRhr0xdl3QJCc3x%2FOjVv5hTdZnGUb68KyASGobeTPj0LT4dvraCgv8HlVqTJgyv4Z0r9cWWAyXAqESSeGx7c2Wd4QjvWkutoqC8JyonSDcyMeHz%2BjngC%2FJP%2BZRqZ3mgeK9s5YV6Po8F92N9bJnNM0OJkVcRflQnzEMJxvx4iqLg5dBU2a%2B41lPtYS2VMwz6h%2FCWc7zQq5tSiSOz6cl1%2BGeiMA9ArJJ83jUPELo%2Bj%2BvPD08NFYVV4ZsI5rctqjCk2YmPgpLyp9tW23G6sAMMcSrWufao2NrezVu%2Bt9OVU6KkYqYzKbB9zYHvgTs8peHnxVY6xKnvZHqIeFawBABBRNhJVFzp5GAUPlABCwQkn3JHNKMfYN4T12ctOqOzE0bcCLd1mbTTRUXb8gFBknLzt31LsuIhPNoAcZWhnJ6CIl5STs4scP%2BrtjCDzbW1G2RwoCx7EKCnEQSbrLeMcB63rzz4uvBG1P4SJ3C5PnyjEeEAJTOj4kK5jQvsmzNW8ldCitbs7%2Bt8iKXJslQqB0pkVjweOZxAqMO97uEVA8zrVfsx%2FLiuqMMyy1sIGOqUBl5VFIH9MpeZAUqhe3BCsGmz19Apprz8uLVyK0l6scloW3kRfp9Vr%2FyZV68Z1U0eIH6Ogbevmq3Y%2FbWQmvR6QqmDBa2m2LK4zWHC%2BdTwcVcYeDdb3dCH8qBFM5qkAWUQqcT1%2B0e%2FviI9Y9kqUHkW2EYuqlUXSCqyI9Qm2iu49f57wRJNZIhFnN%2FPEC4EA9jZDY17Kf1OAHoBs%2F6DyhBZkD0RxCReK&X-Amz-Signature=e6ea34a792af22bf66a25cd4932b86d2fa51600301134c00168c8d250d2cff1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WNPGZTS%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDujSOgEDdMh6Yik26RIad9r67x3lZUovNOULoJ8OkDHQIgdYYPMXKKvpcLkJtcDFkIsFhjIA%2FJ1E5TJv1MAlc4eMUqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLC192YjgBDvDEXkPCrcA9PXH6U4LkcHhysbzYTh0jLE%2FePjI%2FNpNjkfsQi5IGORMJkcU94lT35W4OsXwmgwkzlEOjWDANbdMRhr0xdl3QJCc3x%2FOjVv5hTdZnGUb68KyASGobeTPj0LT4dvraCgv8HlVqTJgyv4Z0r9cWWAyXAqESSeGx7c2Wd4QjvWkutoqC8JyonSDcyMeHz%2BjngC%2FJP%2BZRqZ3mgeK9s5YV6Po8F92N9bJnNM0OJkVcRflQnzEMJxvx4iqLg5dBU2a%2B41lPtYS2VMwz6h%2FCWc7zQq5tSiSOz6cl1%2BGeiMA9ArJJ83jUPELo%2Bj%2BvPD08NFYVV4ZsI5rctqjCk2YmPgpLyp9tW23G6sAMMcSrWufao2NrezVu%2Bt9OVU6KkYqYzKbB9zYHvgTs8peHnxVY6xKnvZHqIeFawBABBRNhJVFzp5GAUPlABCwQkn3JHNKMfYN4T12ctOqOzE0bcCLd1mbTTRUXb8gFBknLzt31LsuIhPNoAcZWhnJ6CIl5STs4scP%2BrtjCDzbW1G2RwoCx7EKCnEQSbrLeMcB63rzz4uvBG1P4SJ3C5PnyjEeEAJTOj4kK5jQvsmzNW8ldCitbs7%2Bt8iKXJslQqB0pkVjweOZxAqMO97uEVA8zrVfsx%2FLiuqMMyy1sIGOqUBl5VFIH9MpeZAUqhe3BCsGmz19Apprz8uLVyK0l6scloW3kRfp9Vr%2FyZV68Z1U0eIH6Ogbevmq3Y%2FbWQmvR6QqmDBa2m2LK4zWHC%2BdTwcVcYeDdb3dCH8qBFM5qkAWUQqcT1%2B0e%2FviI9Y9kqUHkW2EYuqlUXSCqyI9Qm2iu49f57wRJNZIhFnN%2FPEC4EA9jZDY17Kf1OAHoBs%2F6DyhBZkD0RxCReK&X-Amz-Signature=ee0ad9beb78113afe7833ba36f232577540a739c11196d623986764f2dad6646&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WNPGZTS%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDujSOgEDdMh6Yik26RIad9r67x3lZUovNOULoJ8OkDHQIgdYYPMXKKvpcLkJtcDFkIsFhjIA%2FJ1E5TJv1MAlc4eMUqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLC192YjgBDvDEXkPCrcA9PXH6U4LkcHhysbzYTh0jLE%2FePjI%2FNpNjkfsQi5IGORMJkcU94lT35W4OsXwmgwkzlEOjWDANbdMRhr0xdl3QJCc3x%2FOjVv5hTdZnGUb68KyASGobeTPj0LT4dvraCgv8HlVqTJgyv4Z0r9cWWAyXAqESSeGx7c2Wd4QjvWkutoqC8JyonSDcyMeHz%2BjngC%2FJP%2BZRqZ3mgeK9s5YV6Po8F92N9bJnNM0OJkVcRflQnzEMJxvx4iqLg5dBU2a%2B41lPtYS2VMwz6h%2FCWc7zQq5tSiSOz6cl1%2BGeiMA9ArJJ83jUPELo%2Bj%2BvPD08NFYVV4ZsI5rctqjCk2YmPgpLyp9tW23G6sAMMcSrWufao2NrezVu%2Bt9OVU6KkYqYzKbB9zYHvgTs8peHnxVY6xKnvZHqIeFawBABBRNhJVFzp5GAUPlABCwQkn3JHNKMfYN4T12ctOqOzE0bcCLd1mbTTRUXb8gFBknLzt31LsuIhPNoAcZWhnJ6CIl5STs4scP%2BrtjCDzbW1G2RwoCx7EKCnEQSbrLeMcB63rzz4uvBG1P4SJ3C5PnyjEeEAJTOj4kK5jQvsmzNW8ldCitbs7%2Bt8iKXJslQqB0pkVjweOZxAqMO97uEVA8zrVfsx%2FLiuqMMyy1sIGOqUBl5VFIH9MpeZAUqhe3BCsGmz19Apprz8uLVyK0l6scloW3kRfp9Vr%2FyZV68Z1U0eIH6Ogbevmq3Y%2FbWQmvR6QqmDBa2m2LK4zWHC%2BdTwcVcYeDdb3dCH8qBFM5qkAWUQqcT1%2B0e%2FviI9Y9kqUHkW2EYuqlUXSCqyI9Qm2iu49f57wRJNZIhFnN%2FPEC4EA9jZDY17Kf1OAHoBs%2F6DyhBZkD0RxCReK&X-Amz-Signature=efb43642519ba748ad68a1058477d3d9ddac3ecde5fbf0f0c44d266edec50753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WNPGZTS%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDujSOgEDdMh6Yik26RIad9r67x3lZUovNOULoJ8OkDHQIgdYYPMXKKvpcLkJtcDFkIsFhjIA%2FJ1E5TJv1MAlc4eMUqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLC192YjgBDvDEXkPCrcA9PXH6U4LkcHhysbzYTh0jLE%2FePjI%2FNpNjkfsQi5IGORMJkcU94lT35W4OsXwmgwkzlEOjWDANbdMRhr0xdl3QJCc3x%2FOjVv5hTdZnGUb68KyASGobeTPj0LT4dvraCgv8HlVqTJgyv4Z0r9cWWAyXAqESSeGx7c2Wd4QjvWkutoqC8JyonSDcyMeHz%2BjngC%2FJP%2BZRqZ3mgeK9s5YV6Po8F92N9bJnNM0OJkVcRflQnzEMJxvx4iqLg5dBU2a%2B41lPtYS2VMwz6h%2FCWc7zQq5tSiSOz6cl1%2BGeiMA9ArJJ83jUPELo%2Bj%2BvPD08NFYVV4ZsI5rctqjCk2YmPgpLyp9tW23G6sAMMcSrWufao2NrezVu%2Bt9OVU6KkYqYzKbB9zYHvgTs8peHnxVY6xKnvZHqIeFawBABBRNhJVFzp5GAUPlABCwQkn3JHNKMfYN4T12ctOqOzE0bcCLd1mbTTRUXb8gFBknLzt31LsuIhPNoAcZWhnJ6CIl5STs4scP%2BrtjCDzbW1G2RwoCx7EKCnEQSbrLeMcB63rzz4uvBG1P4SJ3C5PnyjEeEAJTOj4kK5jQvsmzNW8ldCitbs7%2Bt8iKXJslQqB0pkVjweOZxAqMO97uEVA8zrVfsx%2FLiuqMMyy1sIGOqUBl5VFIH9MpeZAUqhe3BCsGmz19Apprz8uLVyK0l6scloW3kRfp9Vr%2FyZV68Z1U0eIH6Ogbevmq3Y%2FbWQmvR6QqmDBa2m2LK4zWHC%2BdTwcVcYeDdb3dCH8qBFM5qkAWUQqcT1%2B0e%2FviI9Y9kqUHkW2EYuqlUXSCqyI9Qm2iu49f57wRJNZIhFnN%2FPEC4EA9jZDY17Kf1OAHoBs%2F6DyhBZkD0RxCReK&X-Amz-Signature=bfa04d8003968d863f96b717d6e0d4b735fa4568aba9ed054754e4691a3c15ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WNPGZTS%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDujSOgEDdMh6Yik26RIad9r67x3lZUovNOULoJ8OkDHQIgdYYPMXKKvpcLkJtcDFkIsFhjIA%2FJ1E5TJv1MAlc4eMUqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLC192YjgBDvDEXkPCrcA9PXH6U4LkcHhysbzYTh0jLE%2FePjI%2FNpNjkfsQi5IGORMJkcU94lT35W4OsXwmgwkzlEOjWDANbdMRhr0xdl3QJCc3x%2FOjVv5hTdZnGUb68KyASGobeTPj0LT4dvraCgv8HlVqTJgyv4Z0r9cWWAyXAqESSeGx7c2Wd4QjvWkutoqC8JyonSDcyMeHz%2BjngC%2FJP%2BZRqZ3mgeK9s5YV6Po8F92N9bJnNM0OJkVcRflQnzEMJxvx4iqLg5dBU2a%2B41lPtYS2VMwz6h%2FCWc7zQq5tSiSOz6cl1%2BGeiMA9ArJJ83jUPELo%2Bj%2BvPD08NFYVV4ZsI5rctqjCk2YmPgpLyp9tW23G6sAMMcSrWufao2NrezVu%2Bt9OVU6KkYqYzKbB9zYHvgTs8peHnxVY6xKnvZHqIeFawBABBRNhJVFzp5GAUPlABCwQkn3JHNKMfYN4T12ctOqOzE0bcCLd1mbTTRUXb8gFBknLzt31LsuIhPNoAcZWhnJ6CIl5STs4scP%2BrtjCDzbW1G2RwoCx7EKCnEQSbrLeMcB63rzz4uvBG1P4SJ3C5PnyjEeEAJTOj4kK5jQvsmzNW8ldCitbs7%2Bt8iKXJslQqB0pkVjweOZxAqMO97uEVA8zrVfsx%2FLiuqMMyy1sIGOqUBl5VFIH9MpeZAUqhe3BCsGmz19Apprz8uLVyK0l6scloW3kRfp9Vr%2FyZV68Z1U0eIH6Ogbevmq3Y%2FbWQmvR6QqmDBa2m2LK4zWHC%2BdTwcVcYeDdb3dCH8qBFM5qkAWUQqcT1%2B0e%2FviI9Y9kqUHkW2EYuqlUXSCqyI9Qm2iu49f57wRJNZIhFnN%2FPEC4EA9jZDY17Kf1OAHoBs%2F6DyhBZkD0RxCReK&X-Amz-Signature=dac93b702edfd9de660240a868fc81a4a00088c7a31247e3caa02b50a72f3d3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
