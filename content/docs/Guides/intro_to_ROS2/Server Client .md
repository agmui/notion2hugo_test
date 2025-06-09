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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3JXSUEU%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMePFBbicT1p%2BcLq8zLaDFxJ3%2BNzRXS0LlKkuaRJzYbAiEAlNncc3YQmL78FLWZxIhE1DF7CJiDH9tW%2F05AClk3fqcqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjdsN16zXDma6F%2FzCrcA21i4o7Eg7COv9tSgU6nN3cxuKcn8VDh15EQaAX6FT3HmKEmcVQqiltani5ADc1A67riBX7p4DZOQ0kkJultBtWLyZycl0vWULhSoEPuvkMmZlyQB5efLO4HhnykrdSIK4178BfRl19KIKTRJklhQkvUuil1rT74Oah3q9MJn%2BXGG872BewZbc62wczLRDuR1KJjzpkKDm88Xv%2FHb0ocyjPZPCOpe2PZnSW4yDfocEiqeNzz0FPYK1XgjdT1Byf0BXGV44WowNlWK%2BUP4MJJ1LwClPcX2zniwqmssYpfnphozz7lMTsInLSalxeBJFB751HNBFphhd30YV1EhKsYsG4AkhGPpdkEEEXQLWKQGYleT2y1RtK0o2vYwYF3T1BQxHB0%2BAYjtbn8SZMxnB52kGsVy8f0thfnkWvLo%2FnCbPuTnR9lCjg1TqxEyVXKfM7tQUJBzFMWo0XZWrdiuw%2Be%2FtOpOCyRJiBpUSQjA%2BAxQ0O1EuQNOWJ8RkKvAc1RYB4EpTeivdXj6xp%2F%2Fi%2FR9rJORfLv6Men%2FsK1IDvkUjleIsc%2BCYkVCDqq4sfHvYwN6XNCWSh21mAEYHmAHUA%2F9ogIwuwaPRpV%2BnWHj9T3%2FIQjUwcgy78el28ahfHncwHrMPiXncIGOqUBidXI0MxzVhpXJvLSNYg5lGPTYTST%2F%2BbPb80yAGPTfLSUOq0fqMHtVF6mz3ydj5HjkDrXrciRjn3EhxvdKv39DkpWnJguJAeVdr9uK84SagzU4RP1fsuNbjFsd%2BEQw1ut5jKaU6qeXw1ZZtMya8a%2BIz21TQLju9k9v2NsIpZBOl1IZpoZJ5QkaJDytVxRHhBaI3W3DNrJKn8mj9%2Fetnid9bt%2FlD9N&X-Amz-Signature=32fe4829890441542d7ae35e479fad40332f07b63f5495825915af2084a605c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3JXSUEU%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMePFBbicT1p%2BcLq8zLaDFxJ3%2BNzRXS0LlKkuaRJzYbAiEAlNncc3YQmL78FLWZxIhE1DF7CJiDH9tW%2F05AClk3fqcqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjdsN16zXDma6F%2FzCrcA21i4o7Eg7COv9tSgU6nN3cxuKcn8VDh15EQaAX6FT3HmKEmcVQqiltani5ADc1A67riBX7p4DZOQ0kkJultBtWLyZycl0vWULhSoEPuvkMmZlyQB5efLO4HhnykrdSIK4178BfRl19KIKTRJklhQkvUuil1rT74Oah3q9MJn%2BXGG872BewZbc62wczLRDuR1KJjzpkKDm88Xv%2FHb0ocyjPZPCOpe2PZnSW4yDfocEiqeNzz0FPYK1XgjdT1Byf0BXGV44WowNlWK%2BUP4MJJ1LwClPcX2zniwqmssYpfnphozz7lMTsInLSalxeBJFB751HNBFphhd30YV1EhKsYsG4AkhGPpdkEEEXQLWKQGYleT2y1RtK0o2vYwYF3T1BQxHB0%2BAYjtbn8SZMxnB52kGsVy8f0thfnkWvLo%2FnCbPuTnR9lCjg1TqxEyVXKfM7tQUJBzFMWo0XZWrdiuw%2Be%2FtOpOCyRJiBpUSQjA%2BAxQ0O1EuQNOWJ8RkKvAc1RYB4EpTeivdXj6xp%2F%2Fi%2FR9rJORfLv6Men%2FsK1IDvkUjleIsc%2BCYkVCDqq4sfHvYwN6XNCWSh21mAEYHmAHUA%2F9ogIwuwaPRpV%2BnWHj9T3%2FIQjUwcgy78el28ahfHncwHrMPiXncIGOqUBidXI0MxzVhpXJvLSNYg5lGPTYTST%2F%2BbPb80yAGPTfLSUOq0fqMHtVF6mz3ydj5HjkDrXrciRjn3EhxvdKv39DkpWnJguJAeVdr9uK84SagzU4RP1fsuNbjFsd%2BEQw1ut5jKaU6qeXw1ZZtMya8a%2BIz21TQLju9k9v2NsIpZBOl1IZpoZJ5QkaJDytVxRHhBaI3W3DNrJKn8mj9%2Fetnid9bt%2FlD9N&X-Amz-Signature=99d76ebc4e2f90cf5bbdfe86f0790ae2f8621515a89edc6e95e5eec6780a9503&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3JXSUEU%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMePFBbicT1p%2BcLq8zLaDFxJ3%2BNzRXS0LlKkuaRJzYbAiEAlNncc3YQmL78FLWZxIhE1DF7CJiDH9tW%2F05AClk3fqcqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjdsN16zXDma6F%2FzCrcA21i4o7Eg7COv9tSgU6nN3cxuKcn8VDh15EQaAX6FT3HmKEmcVQqiltani5ADc1A67riBX7p4DZOQ0kkJultBtWLyZycl0vWULhSoEPuvkMmZlyQB5efLO4HhnykrdSIK4178BfRl19KIKTRJklhQkvUuil1rT74Oah3q9MJn%2BXGG872BewZbc62wczLRDuR1KJjzpkKDm88Xv%2FHb0ocyjPZPCOpe2PZnSW4yDfocEiqeNzz0FPYK1XgjdT1Byf0BXGV44WowNlWK%2BUP4MJJ1LwClPcX2zniwqmssYpfnphozz7lMTsInLSalxeBJFB751HNBFphhd30YV1EhKsYsG4AkhGPpdkEEEXQLWKQGYleT2y1RtK0o2vYwYF3T1BQxHB0%2BAYjtbn8SZMxnB52kGsVy8f0thfnkWvLo%2FnCbPuTnR9lCjg1TqxEyVXKfM7tQUJBzFMWo0XZWrdiuw%2Be%2FtOpOCyRJiBpUSQjA%2BAxQ0O1EuQNOWJ8RkKvAc1RYB4EpTeivdXj6xp%2F%2Fi%2FR9rJORfLv6Men%2FsK1IDvkUjleIsc%2BCYkVCDqq4sfHvYwN6XNCWSh21mAEYHmAHUA%2F9ogIwuwaPRpV%2BnWHj9T3%2FIQjUwcgy78el28ahfHncwHrMPiXncIGOqUBidXI0MxzVhpXJvLSNYg5lGPTYTST%2F%2BbPb80yAGPTfLSUOq0fqMHtVF6mz3ydj5HjkDrXrciRjn3EhxvdKv39DkpWnJguJAeVdr9uK84SagzU4RP1fsuNbjFsd%2BEQw1ut5jKaU6qeXw1ZZtMya8a%2BIz21TQLju9k9v2NsIpZBOl1IZpoZJ5QkaJDytVxRHhBaI3W3DNrJKn8mj9%2Fetnid9bt%2FlD9N&X-Amz-Signature=f974c150e9b8360084bffc899377321a52b81898a73f7e617499027d93ed8654&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3JXSUEU%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMePFBbicT1p%2BcLq8zLaDFxJ3%2BNzRXS0LlKkuaRJzYbAiEAlNncc3YQmL78FLWZxIhE1DF7CJiDH9tW%2F05AClk3fqcqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjdsN16zXDma6F%2FzCrcA21i4o7Eg7COv9tSgU6nN3cxuKcn8VDh15EQaAX6FT3HmKEmcVQqiltani5ADc1A67riBX7p4DZOQ0kkJultBtWLyZycl0vWULhSoEPuvkMmZlyQB5efLO4HhnykrdSIK4178BfRl19KIKTRJklhQkvUuil1rT74Oah3q9MJn%2BXGG872BewZbc62wczLRDuR1KJjzpkKDm88Xv%2FHb0ocyjPZPCOpe2PZnSW4yDfocEiqeNzz0FPYK1XgjdT1Byf0BXGV44WowNlWK%2BUP4MJJ1LwClPcX2zniwqmssYpfnphozz7lMTsInLSalxeBJFB751HNBFphhd30YV1EhKsYsG4AkhGPpdkEEEXQLWKQGYleT2y1RtK0o2vYwYF3T1BQxHB0%2BAYjtbn8SZMxnB52kGsVy8f0thfnkWvLo%2FnCbPuTnR9lCjg1TqxEyVXKfM7tQUJBzFMWo0XZWrdiuw%2Be%2FtOpOCyRJiBpUSQjA%2BAxQ0O1EuQNOWJ8RkKvAc1RYB4EpTeivdXj6xp%2F%2Fi%2FR9rJORfLv6Men%2FsK1IDvkUjleIsc%2BCYkVCDqq4sfHvYwN6XNCWSh21mAEYHmAHUA%2F9ogIwuwaPRpV%2BnWHj9T3%2FIQjUwcgy78el28ahfHncwHrMPiXncIGOqUBidXI0MxzVhpXJvLSNYg5lGPTYTST%2F%2BbPb80yAGPTfLSUOq0fqMHtVF6mz3ydj5HjkDrXrciRjn3EhxvdKv39DkpWnJguJAeVdr9uK84SagzU4RP1fsuNbjFsd%2BEQw1ut5jKaU6qeXw1ZZtMya8a%2BIz21TQLju9k9v2NsIpZBOl1IZpoZJ5QkaJDytVxRHhBaI3W3DNrJKn8mj9%2Fetnid9bt%2FlD9N&X-Amz-Signature=93506a724c99926184a405b2f0eeaf06be534bd2324b68f62bf948c2a16647f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3JXSUEU%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMePFBbicT1p%2BcLq8zLaDFxJ3%2BNzRXS0LlKkuaRJzYbAiEAlNncc3YQmL78FLWZxIhE1DF7CJiDH9tW%2F05AClk3fqcqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjdsN16zXDma6F%2FzCrcA21i4o7Eg7COv9tSgU6nN3cxuKcn8VDh15EQaAX6FT3HmKEmcVQqiltani5ADc1A67riBX7p4DZOQ0kkJultBtWLyZycl0vWULhSoEPuvkMmZlyQB5efLO4HhnykrdSIK4178BfRl19KIKTRJklhQkvUuil1rT74Oah3q9MJn%2BXGG872BewZbc62wczLRDuR1KJjzpkKDm88Xv%2FHb0ocyjPZPCOpe2PZnSW4yDfocEiqeNzz0FPYK1XgjdT1Byf0BXGV44WowNlWK%2BUP4MJJ1LwClPcX2zniwqmssYpfnphozz7lMTsInLSalxeBJFB751HNBFphhd30YV1EhKsYsG4AkhGPpdkEEEXQLWKQGYleT2y1RtK0o2vYwYF3T1BQxHB0%2BAYjtbn8SZMxnB52kGsVy8f0thfnkWvLo%2FnCbPuTnR9lCjg1TqxEyVXKfM7tQUJBzFMWo0XZWrdiuw%2Be%2FtOpOCyRJiBpUSQjA%2BAxQ0O1EuQNOWJ8RkKvAc1RYB4EpTeivdXj6xp%2F%2Fi%2FR9rJORfLv6Men%2FsK1IDvkUjleIsc%2BCYkVCDqq4sfHvYwN6XNCWSh21mAEYHmAHUA%2F9ogIwuwaPRpV%2BnWHj9T3%2FIQjUwcgy78el28ahfHncwHrMPiXncIGOqUBidXI0MxzVhpXJvLSNYg5lGPTYTST%2F%2BbPb80yAGPTfLSUOq0fqMHtVF6mz3ydj5HjkDrXrciRjn3EhxvdKv39DkpWnJguJAeVdr9uK84SagzU4RP1fsuNbjFsd%2BEQw1ut5jKaU6qeXw1ZZtMya8a%2BIz21TQLju9k9v2NsIpZBOl1IZpoZJ5QkaJDytVxRHhBaI3W3DNrJKn8mj9%2Fetnid9bt%2FlD9N&X-Amz-Signature=213263267bef94867990ef3f868c8d98eb2260237e8efa74cf77bbd3254f1355&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
