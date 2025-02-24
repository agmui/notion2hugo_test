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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IG2Y4BF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHHEawYGst%2BhbwVdvCnKXnnNbbBYpkzSjV1vjI%2BqTjEwIgGY74NpMQM6Qtn0oHcz557j31pZKhG%2FJNcehzxEFhRSgq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGc0%2F5oJ0e41vhxjmSrcAzwk%2Bln5QGiIgT%2BDwX2o%2BB3TiSjWoEI3n874EGTp9MOZLR7%2BYGyZTmY7lOC61jTmP6%2BNMESws909Ud4YaCAjLgiyMN0H%2FMEjmsxRtCLfql3m7de%2BMZcCgyjEUukmt50o%2BGhcykDuu0mhfCfzFQv1DZEykgHvEFBxUTyEdh%2BocX%2BnRBIIcQ4QVzwXHg%2B457xF0mezJmGfekwbEezelPFuwjEKAGVQuxGcv9c82atHxJZlGpcQOxGjIKcBdgThIy08aN%2BGG0CdVfBEaDNu6p%2FjADu5IHCh2suyweeaGsYDLUO78bmOLnyqgq2nTr3AxCrN%2Fp5mnJUlG4ckSfPWBFyv5UMLV6bMpiBjFa%2FLJvsLl2MH3vc%2FahFBmPgj8xJLL%2FhCXGqXeP4wnmtOPQOiwUQSjTBuqzTNxHaMzjwXdfBwyranpTogN0viD9k%2F8vTIscwl%2FkUiHUZ46C2R5Nq%2FCy22BwmP%2FN4IvGiwJT35KeLz760pHh8xit9Vs1cnE8E6fOzqlY9yLytmqzEhihEXFzuzHxTDAp9McXgmMWLsi1NH5AfGqRnFBnJlY7jEMi4If5OIJFRqCSNJQJJEf5GKmN18b60QYqaE9dXqaikmiDtJ45472K8EF4HDTnXufY5YMPrx7r0GOqUBIrpnjQijZZQKZQxsg%2BaiRmIoP1sXmYDNNCDBQbjf3Om7PjKw6ITpQQfDOeEEFg2%2Fx3a2cNJJOyWGtx%2BUuTVHPsArD%2BMxsiHkp67nhu6z66t4CloJEOfx37ECLrcWQiEjYbKqc18%2F%2BQe78dkm%2Bljwx1f%2FtDOukmQwr6jprJbHpi7UqMnE%2F6MbWFhO9GJVZUHqYxxlCG98i%2FXVnrxZislHF02NIa8M&X-Amz-Signature=9d281553fa3bd49c029feb79465ff1412bb1a857267545706ec694614ac9f663&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IG2Y4BF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHHEawYGst%2BhbwVdvCnKXnnNbbBYpkzSjV1vjI%2BqTjEwIgGY74NpMQM6Qtn0oHcz557j31pZKhG%2FJNcehzxEFhRSgq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGc0%2F5oJ0e41vhxjmSrcAzwk%2Bln5QGiIgT%2BDwX2o%2BB3TiSjWoEI3n874EGTp9MOZLR7%2BYGyZTmY7lOC61jTmP6%2BNMESws909Ud4YaCAjLgiyMN0H%2FMEjmsxRtCLfql3m7de%2BMZcCgyjEUukmt50o%2BGhcykDuu0mhfCfzFQv1DZEykgHvEFBxUTyEdh%2BocX%2BnRBIIcQ4QVzwXHg%2B457xF0mezJmGfekwbEezelPFuwjEKAGVQuxGcv9c82atHxJZlGpcQOxGjIKcBdgThIy08aN%2BGG0CdVfBEaDNu6p%2FjADu5IHCh2suyweeaGsYDLUO78bmOLnyqgq2nTr3AxCrN%2Fp5mnJUlG4ckSfPWBFyv5UMLV6bMpiBjFa%2FLJvsLl2MH3vc%2FahFBmPgj8xJLL%2FhCXGqXeP4wnmtOPQOiwUQSjTBuqzTNxHaMzjwXdfBwyranpTogN0viD9k%2F8vTIscwl%2FkUiHUZ46C2R5Nq%2FCy22BwmP%2FN4IvGiwJT35KeLz760pHh8xit9Vs1cnE8E6fOzqlY9yLytmqzEhihEXFzuzHxTDAp9McXgmMWLsi1NH5AfGqRnFBnJlY7jEMi4If5OIJFRqCSNJQJJEf5GKmN18b60QYqaE9dXqaikmiDtJ45472K8EF4HDTnXufY5YMPrx7r0GOqUBIrpnjQijZZQKZQxsg%2BaiRmIoP1sXmYDNNCDBQbjf3Om7PjKw6ITpQQfDOeEEFg2%2Fx3a2cNJJOyWGtx%2BUuTVHPsArD%2BMxsiHkp67nhu6z66t4CloJEOfx37ECLrcWQiEjYbKqc18%2F%2BQe78dkm%2Bljwx1f%2FtDOukmQwr6jprJbHpi7UqMnE%2F6MbWFhO9GJVZUHqYxxlCG98i%2FXVnrxZislHF02NIa8M&X-Amz-Signature=705bab5de5e31b9c0253ef52d1989454015b02f95789221eec7220272398a2f0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IG2Y4BF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHHEawYGst%2BhbwVdvCnKXnnNbbBYpkzSjV1vjI%2BqTjEwIgGY74NpMQM6Qtn0oHcz557j31pZKhG%2FJNcehzxEFhRSgq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGc0%2F5oJ0e41vhxjmSrcAzwk%2Bln5QGiIgT%2BDwX2o%2BB3TiSjWoEI3n874EGTp9MOZLR7%2BYGyZTmY7lOC61jTmP6%2BNMESws909Ud4YaCAjLgiyMN0H%2FMEjmsxRtCLfql3m7de%2BMZcCgyjEUukmt50o%2BGhcykDuu0mhfCfzFQv1DZEykgHvEFBxUTyEdh%2BocX%2BnRBIIcQ4QVzwXHg%2B457xF0mezJmGfekwbEezelPFuwjEKAGVQuxGcv9c82atHxJZlGpcQOxGjIKcBdgThIy08aN%2BGG0CdVfBEaDNu6p%2FjADu5IHCh2suyweeaGsYDLUO78bmOLnyqgq2nTr3AxCrN%2Fp5mnJUlG4ckSfPWBFyv5UMLV6bMpiBjFa%2FLJvsLl2MH3vc%2FahFBmPgj8xJLL%2FhCXGqXeP4wnmtOPQOiwUQSjTBuqzTNxHaMzjwXdfBwyranpTogN0viD9k%2F8vTIscwl%2FkUiHUZ46C2R5Nq%2FCy22BwmP%2FN4IvGiwJT35KeLz760pHh8xit9Vs1cnE8E6fOzqlY9yLytmqzEhihEXFzuzHxTDAp9McXgmMWLsi1NH5AfGqRnFBnJlY7jEMi4If5OIJFRqCSNJQJJEf5GKmN18b60QYqaE9dXqaikmiDtJ45472K8EF4HDTnXufY5YMPrx7r0GOqUBIrpnjQijZZQKZQxsg%2BaiRmIoP1sXmYDNNCDBQbjf3Om7PjKw6ITpQQfDOeEEFg2%2Fx3a2cNJJOyWGtx%2BUuTVHPsArD%2BMxsiHkp67nhu6z66t4CloJEOfx37ECLrcWQiEjYbKqc18%2F%2BQe78dkm%2Bljwx1f%2FtDOukmQwr6jprJbHpi7UqMnE%2F6MbWFhO9GJVZUHqYxxlCG98i%2FXVnrxZislHF02NIa8M&X-Amz-Signature=a01cce3f66b580e5c9e978e0fdeba890350c3202f8c5877b89f8e4525bca79e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IG2Y4BF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHHEawYGst%2BhbwVdvCnKXnnNbbBYpkzSjV1vjI%2BqTjEwIgGY74NpMQM6Qtn0oHcz557j31pZKhG%2FJNcehzxEFhRSgq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGc0%2F5oJ0e41vhxjmSrcAzwk%2Bln5QGiIgT%2BDwX2o%2BB3TiSjWoEI3n874EGTp9MOZLR7%2BYGyZTmY7lOC61jTmP6%2BNMESws909Ud4YaCAjLgiyMN0H%2FMEjmsxRtCLfql3m7de%2BMZcCgyjEUukmt50o%2BGhcykDuu0mhfCfzFQv1DZEykgHvEFBxUTyEdh%2BocX%2BnRBIIcQ4QVzwXHg%2B457xF0mezJmGfekwbEezelPFuwjEKAGVQuxGcv9c82atHxJZlGpcQOxGjIKcBdgThIy08aN%2BGG0CdVfBEaDNu6p%2FjADu5IHCh2suyweeaGsYDLUO78bmOLnyqgq2nTr3AxCrN%2Fp5mnJUlG4ckSfPWBFyv5UMLV6bMpiBjFa%2FLJvsLl2MH3vc%2FahFBmPgj8xJLL%2FhCXGqXeP4wnmtOPQOiwUQSjTBuqzTNxHaMzjwXdfBwyranpTogN0viD9k%2F8vTIscwl%2FkUiHUZ46C2R5Nq%2FCy22BwmP%2FN4IvGiwJT35KeLz760pHh8xit9Vs1cnE8E6fOzqlY9yLytmqzEhihEXFzuzHxTDAp9McXgmMWLsi1NH5AfGqRnFBnJlY7jEMi4If5OIJFRqCSNJQJJEf5GKmN18b60QYqaE9dXqaikmiDtJ45472K8EF4HDTnXufY5YMPrx7r0GOqUBIrpnjQijZZQKZQxsg%2BaiRmIoP1sXmYDNNCDBQbjf3Om7PjKw6ITpQQfDOeEEFg2%2Fx3a2cNJJOyWGtx%2BUuTVHPsArD%2BMxsiHkp67nhu6z66t4CloJEOfx37ECLrcWQiEjYbKqc18%2F%2BQe78dkm%2Bljwx1f%2FtDOukmQwr6jprJbHpi7UqMnE%2F6MbWFhO9GJVZUHqYxxlCG98i%2FXVnrxZislHF02NIa8M&X-Amz-Signature=edd39e252e44f9081d28b2e1ef90941484fb0975e8af2d8e9e189faa9f911b61&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IG2Y4BF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHHEawYGst%2BhbwVdvCnKXnnNbbBYpkzSjV1vjI%2BqTjEwIgGY74NpMQM6Qtn0oHcz557j31pZKhG%2FJNcehzxEFhRSgq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGc0%2F5oJ0e41vhxjmSrcAzwk%2Bln5QGiIgT%2BDwX2o%2BB3TiSjWoEI3n874EGTp9MOZLR7%2BYGyZTmY7lOC61jTmP6%2BNMESws909Ud4YaCAjLgiyMN0H%2FMEjmsxRtCLfql3m7de%2BMZcCgyjEUukmt50o%2BGhcykDuu0mhfCfzFQv1DZEykgHvEFBxUTyEdh%2BocX%2BnRBIIcQ4QVzwXHg%2B457xF0mezJmGfekwbEezelPFuwjEKAGVQuxGcv9c82atHxJZlGpcQOxGjIKcBdgThIy08aN%2BGG0CdVfBEaDNu6p%2FjADu5IHCh2suyweeaGsYDLUO78bmOLnyqgq2nTr3AxCrN%2Fp5mnJUlG4ckSfPWBFyv5UMLV6bMpiBjFa%2FLJvsLl2MH3vc%2FahFBmPgj8xJLL%2FhCXGqXeP4wnmtOPQOiwUQSjTBuqzTNxHaMzjwXdfBwyranpTogN0viD9k%2F8vTIscwl%2FkUiHUZ46C2R5Nq%2FCy22BwmP%2FN4IvGiwJT35KeLz760pHh8xit9Vs1cnE8E6fOzqlY9yLytmqzEhihEXFzuzHxTDAp9McXgmMWLsi1NH5AfGqRnFBnJlY7jEMi4If5OIJFRqCSNJQJJEf5GKmN18b60QYqaE9dXqaikmiDtJ45472K8EF4HDTnXufY5YMPrx7r0GOqUBIrpnjQijZZQKZQxsg%2BaiRmIoP1sXmYDNNCDBQbjf3Om7PjKw6ITpQQfDOeEEFg2%2Fx3a2cNJJOyWGtx%2BUuTVHPsArD%2BMxsiHkp67nhu6z66t4CloJEOfx37ECLrcWQiEjYbKqc18%2F%2BQe78dkm%2Bljwx1f%2FtDOukmQwr6jprJbHpi7UqMnE%2F6MbWFhO9GJVZUHqYxxlCG98i%2FXVnrxZislHF02NIa8M&X-Amz-Signature=ba334dccfe41a7ee47f5ec5a112f0df2b82102230d4943025747624aaefc706f&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
