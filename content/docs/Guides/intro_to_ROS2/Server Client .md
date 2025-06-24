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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGBAGMSN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQC4Cs2mWVhHM5Rd6tQXouU9eQXsex5lEBJGxIQQusiM3wIgYbY3eqMe%2FNukzQFRtIfz72UOZKx3IH9G%2BZ81gmWLmAAq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGvpwAvqTqKfgUpRRircAwKEKaBo3FpaY6TqsGdrCquiDprL4ywoKv3FJBYoGXRDKN9I3kNzr0wczrzd44W8bWYkEefgKAkVISAml8kWfPCV8LihPVa6XHih9V7hpYzAQWsZy%2BkXzngW%2F5W%2BGqRK%2F2g9TwuXQ3qLzLpbZC8PlQ9urCJ4Bn4ItHUSlBTfKi5ywRvtNaomjaJeecLANZ3YE5O1mMZnja54LFMsg4%2FTXfzA1Dv%2BNiHpjAm%2FvhKNwOfNxNTWbA0dMNEURmqiitqR%2F7gKWOuO7RPwJzVoifYQ3Ejhhghi4%2BmdVda4zKqnyJsSUXo%2Bcq3LNt%2Bv5BqyGf5fcSfaRkyWV8e%2FxcR2%2FVK4278oNpOB%2Bn9bcLlirJz7tHrsprcjVYp0MkMR2bSzAYhqZ4IFHpTneyeXuol4D%2F1UeY%2FjjcWdZNc2eUbqaZd9rMIlA3NAYhWRbEQmuZmB8upZAUMTRs4Djt3mbm4n54aXJVIsCQTnjXpDrSijVzlqrU36vXb50wg%2FzXo2xI%2FJrjlXiJGkoWVRhvXA49xEnEFyL7%2BxXe3Z%2FRxBMxy3TGGO6%2B7Kkt29i0rj47G5inj1eDO2IL4A%2B9JPOjIM3YFUqKl7ts0cjrrs2awPFBr1u7dMaLm7%2F7K8V5xXhqZeJr%2BlMP2968IGOqUB5oiam0DJ8lcLy0JWpCVgG5dvRQjn1na2SQg4fvPzltOVdR232zFYOkXZxNAYMntZmQgrbuWXFuUy6KhlQCazKk1EWktorpG%2BnXEEVwPeaeNBpHqTftNJOxMfWfGdf%2FHjt5KA2SJqdGAWo9LV2Uzftm7Dhy9P8jHPvD33IVvXX9q7qquraYssNxwec9cIqe5hBfnfR2IclCYQSJlT7eqkeO%2FTXcQq&X-Amz-Signature=2fc74647dce335b54a46152cc02e609a4465ea5e96c0453b33050fd76ca0879d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGBAGMSN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQC4Cs2mWVhHM5Rd6tQXouU9eQXsex5lEBJGxIQQusiM3wIgYbY3eqMe%2FNukzQFRtIfz72UOZKx3IH9G%2BZ81gmWLmAAq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGvpwAvqTqKfgUpRRircAwKEKaBo3FpaY6TqsGdrCquiDprL4ywoKv3FJBYoGXRDKN9I3kNzr0wczrzd44W8bWYkEefgKAkVISAml8kWfPCV8LihPVa6XHih9V7hpYzAQWsZy%2BkXzngW%2F5W%2BGqRK%2F2g9TwuXQ3qLzLpbZC8PlQ9urCJ4Bn4ItHUSlBTfKi5ywRvtNaomjaJeecLANZ3YE5O1mMZnja54LFMsg4%2FTXfzA1Dv%2BNiHpjAm%2FvhKNwOfNxNTWbA0dMNEURmqiitqR%2F7gKWOuO7RPwJzVoifYQ3Ejhhghi4%2BmdVda4zKqnyJsSUXo%2Bcq3LNt%2Bv5BqyGf5fcSfaRkyWV8e%2FxcR2%2FVK4278oNpOB%2Bn9bcLlirJz7tHrsprcjVYp0MkMR2bSzAYhqZ4IFHpTneyeXuol4D%2F1UeY%2FjjcWdZNc2eUbqaZd9rMIlA3NAYhWRbEQmuZmB8upZAUMTRs4Djt3mbm4n54aXJVIsCQTnjXpDrSijVzlqrU36vXb50wg%2FzXo2xI%2FJrjlXiJGkoWVRhvXA49xEnEFyL7%2BxXe3Z%2FRxBMxy3TGGO6%2B7Kkt29i0rj47G5inj1eDO2IL4A%2B9JPOjIM3YFUqKl7ts0cjrrs2awPFBr1u7dMaLm7%2F7K8V5xXhqZeJr%2BlMP2968IGOqUB5oiam0DJ8lcLy0JWpCVgG5dvRQjn1na2SQg4fvPzltOVdR232zFYOkXZxNAYMntZmQgrbuWXFuUy6KhlQCazKk1EWktorpG%2BnXEEVwPeaeNBpHqTftNJOxMfWfGdf%2FHjt5KA2SJqdGAWo9LV2Uzftm7Dhy9P8jHPvD33IVvXX9q7qquraYssNxwec9cIqe5hBfnfR2IclCYQSJlT7eqkeO%2FTXcQq&X-Amz-Signature=ac1adcb6871b0abd15e1815d52c339d6759b058c8b2a5ab513014dc6eeb8f550&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGBAGMSN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQC4Cs2mWVhHM5Rd6tQXouU9eQXsex5lEBJGxIQQusiM3wIgYbY3eqMe%2FNukzQFRtIfz72UOZKx3IH9G%2BZ81gmWLmAAq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGvpwAvqTqKfgUpRRircAwKEKaBo3FpaY6TqsGdrCquiDprL4ywoKv3FJBYoGXRDKN9I3kNzr0wczrzd44W8bWYkEefgKAkVISAml8kWfPCV8LihPVa6XHih9V7hpYzAQWsZy%2BkXzngW%2F5W%2BGqRK%2F2g9TwuXQ3qLzLpbZC8PlQ9urCJ4Bn4ItHUSlBTfKi5ywRvtNaomjaJeecLANZ3YE5O1mMZnja54LFMsg4%2FTXfzA1Dv%2BNiHpjAm%2FvhKNwOfNxNTWbA0dMNEURmqiitqR%2F7gKWOuO7RPwJzVoifYQ3Ejhhghi4%2BmdVda4zKqnyJsSUXo%2Bcq3LNt%2Bv5BqyGf5fcSfaRkyWV8e%2FxcR2%2FVK4278oNpOB%2Bn9bcLlirJz7tHrsprcjVYp0MkMR2bSzAYhqZ4IFHpTneyeXuol4D%2F1UeY%2FjjcWdZNc2eUbqaZd9rMIlA3NAYhWRbEQmuZmB8upZAUMTRs4Djt3mbm4n54aXJVIsCQTnjXpDrSijVzlqrU36vXb50wg%2FzXo2xI%2FJrjlXiJGkoWVRhvXA49xEnEFyL7%2BxXe3Z%2FRxBMxy3TGGO6%2B7Kkt29i0rj47G5inj1eDO2IL4A%2B9JPOjIM3YFUqKl7ts0cjrrs2awPFBr1u7dMaLm7%2F7K8V5xXhqZeJr%2BlMP2968IGOqUB5oiam0DJ8lcLy0JWpCVgG5dvRQjn1na2SQg4fvPzltOVdR232zFYOkXZxNAYMntZmQgrbuWXFuUy6KhlQCazKk1EWktorpG%2BnXEEVwPeaeNBpHqTftNJOxMfWfGdf%2FHjt5KA2SJqdGAWo9LV2Uzftm7Dhy9P8jHPvD33IVvXX9q7qquraYssNxwec9cIqe5hBfnfR2IclCYQSJlT7eqkeO%2FTXcQq&X-Amz-Signature=61c8ec0a2cec2c73a85df919fda6d0f075207bd187a85319d6dba8cd1770c5e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGBAGMSN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQC4Cs2mWVhHM5Rd6tQXouU9eQXsex5lEBJGxIQQusiM3wIgYbY3eqMe%2FNukzQFRtIfz72UOZKx3IH9G%2BZ81gmWLmAAq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGvpwAvqTqKfgUpRRircAwKEKaBo3FpaY6TqsGdrCquiDprL4ywoKv3FJBYoGXRDKN9I3kNzr0wczrzd44W8bWYkEefgKAkVISAml8kWfPCV8LihPVa6XHih9V7hpYzAQWsZy%2BkXzngW%2F5W%2BGqRK%2F2g9TwuXQ3qLzLpbZC8PlQ9urCJ4Bn4ItHUSlBTfKi5ywRvtNaomjaJeecLANZ3YE5O1mMZnja54LFMsg4%2FTXfzA1Dv%2BNiHpjAm%2FvhKNwOfNxNTWbA0dMNEURmqiitqR%2F7gKWOuO7RPwJzVoifYQ3Ejhhghi4%2BmdVda4zKqnyJsSUXo%2Bcq3LNt%2Bv5BqyGf5fcSfaRkyWV8e%2FxcR2%2FVK4278oNpOB%2Bn9bcLlirJz7tHrsprcjVYp0MkMR2bSzAYhqZ4IFHpTneyeXuol4D%2F1UeY%2FjjcWdZNc2eUbqaZd9rMIlA3NAYhWRbEQmuZmB8upZAUMTRs4Djt3mbm4n54aXJVIsCQTnjXpDrSijVzlqrU36vXb50wg%2FzXo2xI%2FJrjlXiJGkoWVRhvXA49xEnEFyL7%2BxXe3Z%2FRxBMxy3TGGO6%2B7Kkt29i0rj47G5inj1eDO2IL4A%2B9JPOjIM3YFUqKl7ts0cjrrs2awPFBr1u7dMaLm7%2F7K8V5xXhqZeJr%2BlMP2968IGOqUB5oiam0DJ8lcLy0JWpCVgG5dvRQjn1na2SQg4fvPzltOVdR232zFYOkXZxNAYMntZmQgrbuWXFuUy6KhlQCazKk1EWktorpG%2BnXEEVwPeaeNBpHqTftNJOxMfWfGdf%2FHjt5KA2SJqdGAWo9LV2Uzftm7Dhy9P8jHPvD33IVvXX9q7qquraYssNxwec9cIqe5hBfnfR2IclCYQSJlT7eqkeO%2FTXcQq&X-Amz-Signature=f6c701fd53a3579d0f2e7eac1d01e243cee804409af7f1ae4e20c6507110adfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGBAGMSN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQC4Cs2mWVhHM5Rd6tQXouU9eQXsex5lEBJGxIQQusiM3wIgYbY3eqMe%2FNukzQFRtIfz72UOZKx3IH9G%2BZ81gmWLmAAq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGvpwAvqTqKfgUpRRircAwKEKaBo3FpaY6TqsGdrCquiDprL4ywoKv3FJBYoGXRDKN9I3kNzr0wczrzd44W8bWYkEefgKAkVISAml8kWfPCV8LihPVa6XHih9V7hpYzAQWsZy%2BkXzngW%2F5W%2BGqRK%2F2g9TwuXQ3qLzLpbZC8PlQ9urCJ4Bn4ItHUSlBTfKi5ywRvtNaomjaJeecLANZ3YE5O1mMZnja54LFMsg4%2FTXfzA1Dv%2BNiHpjAm%2FvhKNwOfNxNTWbA0dMNEURmqiitqR%2F7gKWOuO7RPwJzVoifYQ3Ejhhghi4%2BmdVda4zKqnyJsSUXo%2Bcq3LNt%2Bv5BqyGf5fcSfaRkyWV8e%2FxcR2%2FVK4278oNpOB%2Bn9bcLlirJz7tHrsprcjVYp0MkMR2bSzAYhqZ4IFHpTneyeXuol4D%2F1UeY%2FjjcWdZNc2eUbqaZd9rMIlA3NAYhWRbEQmuZmB8upZAUMTRs4Djt3mbm4n54aXJVIsCQTnjXpDrSijVzlqrU36vXb50wg%2FzXo2xI%2FJrjlXiJGkoWVRhvXA49xEnEFyL7%2BxXe3Z%2FRxBMxy3TGGO6%2B7Kkt29i0rj47G5inj1eDO2IL4A%2B9JPOjIM3YFUqKl7ts0cjrrs2awPFBr1u7dMaLm7%2F7K8V5xXhqZeJr%2BlMP2968IGOqUB5oiam0DJ8lcLy0JWpCVgG5dvRQjn1na2SQg4fvPzltOVdR232zFYOkXZxNAYMntZmQgrbuWXFuUy6KhlQCazKk1EWktorpG%2BnXEEVwPeaeNBpHqTftNJOxMfWfGdf%2FHjt5KA2SJqdGAWo9LV2Uzftm7Dhy9P8jHPvD33IVvXX9q7qquraYssNxwec9cIqe5hBfnfR2IclCYQSJlT7eqkeO%2FTXcQq&X-Amz-Signature=76a40343f91c3f1e16912a396da198db6549b203be09553a45ed0709680b4263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
