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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LGBUPZB%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T034340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDu1sl6SaNIrXjxD%2BHdgowl5kX6%2BvImSRa3H3PgWv%2FK4AIgQxRI0GOiqv8c%2B6GM2IVw63gVsdTIhay56BGFHHyQ%2BYMq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDMZTB5lyRw5BepHNuSrcA1yF7ISn8JNVxu6pc2avUbXCBFDuocgap75Le84PTIo875NB3m%2B8glXMXRgsj%2Fpl772HfRT0auqVg1%2FoGYS8vCY9wOkBU8EasW21LV8FqW2rvlQ3N4YXeJ%2B33kD650L5WDsE%2FucfG%2F8dYCWLIcNlAw%2Fez%2FaTDWHB7QvGsVbtCtfCNfBS%2BKXcdhCwFmzdKSjQmCA66%2BFpIbFY9msA%2FRKyQS8szNVovm390zy9l531nq%2ByfHUK5qbYVu7UOxZ%2B3rVJsoiQWIhi2ymJPHfnytwGBfGTi00WWk2IlcGtR%2FRqqWB3zpqnTnQ0EMCS3Sj5jFygwd%2FeUPyAmY4BGgsgsHNZ5TNXCwRl0U7FehmXeUmg3pEWcClKvvcGKBc8vUSx1%2B49d1aHg6pPlKKrLlbaOptb%2BERMnvGti8L2HVOow2zpKp5Yy8YHYUfzF2upVD0EKE%2BqF66xfiOa5p5Mlys%2BxdBpOStUHlrHQrSvoaA3Jk7D0OwjYev6mX3f%2FF9YYYTZJzdzsYPq0dLpDgdtQNuH3ZrL4MA%2Bv%2FPUfyojrYU5R58bpAi%2BMW5s2FY4poHc5MkhFQ1sldvicXpO72nbCsABN8xFj%2B3ScVQJCqRclPhT%2F7qlc99AnWQvcdZdBo7LxnQTMNfC7cIGOqUBtfJOA4f7n%2B4al89guEUDOXv545eDjSlRLm5wjdvN5izsrcJzyfclaWoM7uO%2FW7n0SkC2dSjCw1q7h%2FmkRgXa0SqPuY98E2lXqCMnndDSsEsaNwo36EejJuFR3RlX9nZzU%2BPobueU%2FbbPOB%2F1QdWBptbvNYpTE0a4fTQOo1w%2Bd%2BEUBpN79kV1WJmwxdJ4QHJDhHqBqYQrb8iWMYWSacp6DUR19nIN&X-Amz-Signature=0e9002968544a9778b86dc58eb3229289df6ac371c7d5e20605ceed724caedd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LGBUPZB%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T034340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDu1sl6SaNIrXjxD%2BHdgowl5kX6%2BvImSRa3H3PgWv%2FK4AIgQxRI0GOiqv8c%2B6GM2IVw63gVsdTIhay56BGFHHyQ%2BYMq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDMZTB5lyRw5BepHNuSrcA1yF7ISn8JNVxu6pc2avUbXCBFDuocgap75Le84PTIo875NB3m%2B8glXMXRgsj%2Fpl772HfRT0auqVg1%2FoGYS8vCY9wOkBU8EasW21LV8FqW2rvlQ3N4YXeJ%2B33kD650L5WDsE%2FucfG%2F8dYCWLIcNlAw%2Fez%2FaTDWHB7QvGsVbtCtfCNfBS%2BKXcdhCwFmzdKSjQmCA66%2BFpIbFY9msA%2FRKyQS8szNVovm390zy9l531nq%2ByfHUK5qbYVu7UOxZ%2B3rVJsoiQWIhi2ymJPHfnytwGBfGTi00WWk2IlcGtR%2FRqqWB3zpqnTnQ0EMCS3Sj5jFygwd%2FeUPyAmY4BGgsgsHNZ5TNXCwRl0U7FehmXeUmg3pEWcClKvvcGKBc8vUSx1%2B49d1aHg6pPlKKrLlbaOptb%2BERMnvGti8L2HVOow2zpKp5Yy8YHYUfzF2upVD0EKE%2BqF66xfiOa5p5Mlys%2BxdBpOStUHlrHQrSvoaA3Jk7D0OwjYev6mX3f%2FF9YYYTZJzdzsYPq0dLpDgdtQNuH3ZrL4MA%2Bv%2FPUfyojrYU5R58bpAi%2BMW5s2FY4poHc5MkhFQ1sldvicXpO72nbCsABN8xFj%2B3ScVQJCqRclPhT%2F7qlc99AnWQvcdZdBo7LxnQTMNfC7cIGOqUBtfJOA4f7n%2B4al89guEUDOXv545eDjSlRLm5wjdvN5izsrcJzyfclaWoM7uO%2FW7n0SkC2dSjCw1q7h%2FmkRgXa0SqPuY98E2lXqCMnndDSsEsaNwo36EejJuFR3RlX9nZzU%2BPobueU%2FbbPOB%2F1QdWBptbvNYpTE0a4fTQOo1w%2Bd%2BEUBpN79kV1WJmwxdJ4QHJDhHqBqYQrb8iWMYWSacp6DUR19nIN&X-Amz-Signature=2156d5eb2a52333f1def6d5e9cd3271694a01d4a208db3c7e4903a4bbd0e9e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LGBUPZB%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T034340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDu1sl6SaNIrXjxD%2BHdgowl5kX6%2BvImSRa3H3PgWv%2FK4AIgQxRI0GOiqv8c%2B6GM2IVw63gVsdTIhay56BGFHHyQ%2BYMq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDMZTB5lyRw5BepHNuSrcA1yF7ISn8JNVxu6pc2avUbXCBFDuocgap75Le84PTIo875NB3m%2B8glXMXRgsj%2Fpl772HfRT0auqVg1%2FoGYS8vCY9wOkBU8EasW21LV8FqW2rvlQ3N4YXeJ%2B33kD650L5WDsE%2FucfG%2F8dYCWLIcNlAw%2Fez%2FaTDWHB7QvGsVbtCtfCNfBS%2BKXcdhCwFmzdKSjQmCA66%2BFpIbFY9msA%2FRKyQS8szNVovm390zy9l531nq%2ByfHUK5qbYVu7UOxZ%2B3rVJsoiQWIhi2ymJPHfnytwGBfGTi00WWk2IlcGtR%2FRqqWB3zpqnTnQ0EMCS3Sj5jFygwd%2FeUPyAmY4BGgsgsHNZ5TNXCwRl0U7FehmXeUmg3pEWcClKvvcGKBc8vUSx1%2B49d1aHg6pPlKKrLlbaOptb%2BERMnvGti8L2HVOow2zpKp5Yy8YHYUfzF2upVD0EKE%2BqF66xfiOa5p5Mlys%2BxdBpOStUHlrHQrSvoaA3Jk7D0OwjYev6mX3f%2FF9YYYTZJzdzsYPq0dLpDgdtQNuH3ZrL4MA%2Bv%2FPUfyojrYU5R58bpAi%2BMW5s2FY4poHc5MkhFQ1sldvicXpO72nbCsABN8xFj%2B3ScVQJCqRclPhT%2F7qlc99AnWQvcdZdBo7LxnQTMNfC7cIGOqUBtfJOA4f7n%2B4al89guEUDOXv545eDjSlRLm5wjdvN5izsrcJzyfclaWoM7uO%2FW7n0SkC2dSjCw1q7h%2FmkRgXa0SqPuY98E2lXqCMnndDSsEsaNwo36EejJuFR3RlX9nZzU%2BPobueU%2FbbPOB%2F1QdWBptbvNYpTE0a4fTQOo1w%2Bd%2BEUBpN79kV1WJmwxdJ4QHJDhHqBqYQrb8iWMYWSacp6DUR19nIN&X-Amz-Signature=2f31442aa19f0f8e208f74de8cd28b6848dad2805604ab04f6b61a3150d90367&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LGBUPZB%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T034340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDu1sl6SaNIrXjxD%2BHdgowl5kX6%2BvImSRa3H3PgWv%2FK4AIgQxRI0GOiqv8c%2B6GM2IVw63gVsdTIhay56BGFHHyQ%2BYMq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDMZTB5lyRw5BepHNuSrcA1yF7ISn8JNVxu6pc2avUbXCBFDuocgap75Le84PTIo875NB3m%2B8glXMXRgsj%2Fpl772HfRT0auqVg1%2FoGYS8vCY9wOkBU8EasW21LV8FqW2rvlQ3N4YXeJ%2B33kD650L5WDsE%2FucfG%2F8dYCWLIcNlAw%2Fez%2FaTDWHB7QvGsVbtCtfCNfBS%2BKXcdhCwFmzdKSjQmCA66%2BFpIbFY9msA%2FRKyQS8szNVovm390zy9l531nq%2ByfHUK5qbYVu7UOxZ%2B3rVJsoiQWIhi2ymJPHfnytwGBfGTi00WWk2IlcGtR%2FRqqWB3zpqnTnQ0EMCS3Sj5jFygwd%2FeUPyAmY4BGgsgsHNZ5TNXCwRl0U7FehmXeUmg3pEWcClKvvcGKBc8vUSx1%2B49d1aHg6pPlKKrLlbaOptb%2BERMnvGti8L2HVOow2zpKp5Yy8YHYUfzF2upVD0EKE%2BqF66xfiOa5p5Mlys%2BxdBpOStUHlrHQrSvoaA3Jk7D0OwjYev6mX3f%2FF9YYYTZJzdzsYPq0dLpDgdtQNuH3ZrL4MA%2Bv%2FPUfyojrYU5R58bpAi%2BMW5s2FY4poHc5MkhFQ1sldvicXpO72nbCsABN8xFj%2B3ScVQJCqRclPhT%2F7qlc99AnWQvcdZdBo7LxnQTMNfC7cIGOqUBtfJOA4f7n%2B4al89guEUDOXv545eDjSlRLm5wjdvN5izsrcJzyfclaWoM7uO%2FW7n0SkC2dSjCw1q7h%2FmkRgXa0SqPuY98E2lXqCMnndDSsEsaNwo36EejJuFR3RlX9nZzU%2BPobueU%2FbbPOB%2F1QdWBptbvNYpTE0a4fTQOo1w%2Bd%2BEUBpN79kV1WJmwxdJ4QHJDhHqBqYQrb8iWMYWSacp6DUR19nIN&X-Amz-Signature=855f2d627adda52d764670b8b2ccdc78b214ec137267f37f5695ec55393e8efa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LGBUPZB%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T034340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDu1sl6SaNIrXjxD%2BHdgowl5kX6%2BvImSRa3H3PgWv%2FK4AIgQxRI0GOiqv8c%2B6GM2IVw63gVsdTIhay56BGFHHyQ%2BYMq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDMZTB5lyRw5BepHNuSrcA1yF7ISn8JNVxu6pc2avUbXCBFDuocgap75Le84PTIo875NB3m%2B8glXMXRgsj%2Fpl772HfRT0auqVg1%2FoGYS8vCY9wOkBU8EasW21LV8FqW2rvlQ3N4YXeJ%2B33kD650L5WDsE%2FucfG%2F8dYCWLIcNlAw%2Fez%2FaTDWHB7QvGsVbtCtfCNfBS%2BKXcdhCwFmzdKSjQmCA66%2BFpIbFY9msA%2FRKyQS8szNVovm390zy9l531nq%2ByfHUK5qbYVu7UOxZ%2B3rVJsoiQWIhi2ymJPHfnytwGBfGTi00WWk2IlcGtR%2FRqqWB3zpqnTnQ0EMCS3Sj5jFygwd%2FeUPyAmY4BGgsgsHNZ5TNXCwRl0U7FehmXeUmg3pEWcClKvvcGKBc8vUSx1%2B49d1aHg6pPlKKrLlbaOptb%2BERMnvGti8L2HVOow2zpKp5Yy8YHYUfzF2upVD0EKE%2BqF66xfiOa5p5Mlys%2BxdBpOStUHlrHQrSvoaA3Jk7D0OwjYev6mX3f%2FF9YYYTZJzdzsYPq0dLpDgdtQNuH3ZrL4MA%2Bv%2FPUfyojrYU5R58bpAi%2BMW5s2FY4poHc5MkhFQ1sldvicXpO72nbCsABN8xFj%2B3ScVQJCqRclPhT%2F7qlc99AnWQvcdZdBo7LxnQTMNfC7cIGOqUBtfJOA4f7n%2B4al89guEUDOXv545eDjSlRLm5wjdvN5izsrcJzyfclaWoM7uO%2FW7n0SkC2dSjCw1q7h%2FmkRgXa0SqPuY98E2lXqCMnndDSsEsaNwo36EejJuFR3RlX9nZzU%2BPobueU%2FbbPOB%2F1QdWBptbvNYpTE0a4fTQOo1w%2Bd%2BEUBpN79kV1WJmwxdJ4QHJDhHqBqYQrb8iWMYWSacp6DUR19nIN&X-Amz-Signature=e08bc8730079bda4ff23db3c0959234d32e6af14bb7c0d11b3c834f1098d7dce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
