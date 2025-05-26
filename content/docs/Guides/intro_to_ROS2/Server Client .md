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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NJBL7Y%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuD71TowjXKoBuGbSmfq02jDEMkmVY%2BnuI7h2ggAGjNAIhAMrKmYCu3SCUrp9MDCg%2Fgt3Dihl9GB3Ez8o8mhpWP8R%2BKv8DCEwQABoMNjM3NDIzMTgzODA1IgxZ%2FDPHBEWE4gQ5D2Yq3AOr3SmsESDoQRNPxZmodTXZ1I63zpV8O71v1SHf3nYnDfeiwpljrMqcWyAK9W0bqOu3KufAQJVPjeouJgMmWyC4%2F%2Biq%2BP%2BOsgz1FlNkVTyWzuhF4IviHrXVwWWsRG%2FYT7pkrs%2Bf9nNnN3gf7ldtaJTl4SOxU6ZO6ASMLppcj3Z6PHmvvN0bdiXaDxqaMLCfPmdZi0IEuLfzYwRiPYVWXlavwXw48xYi1TdG7Neclt19Qvz7c5xwXsT%2F99C7fq3qR1f3OqPhemwVOebs6GgjyQdXhEK%2BfWuCP46BjOnNtpZ%2BkWTMQKGWkNh2cj%2B977V9ARJFXmdARdhFJb6IpOliZYuHMwHsajuwKdwl1J2fAtQMDDAqZBLzo1vVVAZP05gWKqj6%2BV2ULuvXVRJoGLQrktKlv%2Fo3p4mSjgpa%2BRCnTSEARrZfmrUImuZAh%2Fg4PRqb1le6truZSdzYZAXXZnyfBMt5OmqHosUEPyqzQhjgaawy2jbrQDXYCEk8n0HH7uDAZfpzmplNw1%2FKXERnDx9uYM9wxaEp4ZEPR1W%2FEhSrYKVUEgrmgCEWIFri3OQsp%2FxlSgcZzFkuZgztvu9SGqpT67GAzILmr7frKK7d7DMEY%2BqFCr10CAhcmooKcqEnTzCl%2BdLBBjqkAdygw25eG9zBlimtj7oIWwtpfEfVBSA1yOrghlnuxp55OpQWkxPiBnn14StugwlnRiiAioBQi44U4f9TR6x0pMj1yYr%2BfSnjyPwgZnmfVS49H4fiY5NUNMSyUooHzlu0CRAMRS162oG7EHMHGWPi4QFbjenMv6sxySW%2BVeOay%2FwUlLQoQaSwC5SpTEBu7%2BktKg1p85snf04849r2c7pA2OdDRDai&X-Amz-Signature=8612f7032ba7e33e402089547f2ee90942c82632e16e49d14498911c3cfe9184&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NJBL7Y%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuD71TowjXKoBuGbSmfq02jDEMkmVY%2BnuI7h2ggAGjNAIhAMrKmYCu3SCUrp9MDCg%2Fgt3Dihl9GB3Ez8o8mhpWP8R%2BKv8DCEwQABoMNjM3NDIzMTgzODA1IgxZ%2FDPHBEWE4gQ5D2Yq3AOr3SmsESDoQRNPxZmodTXZ1I63zpV8O71v1SHf3nYnDfeiwpljrMqcWyAK9W0bqOu3KufAQJVPjeouJgMmWyC4%2F%2Biq%2BP%2BOsgz1FlNkVTyWzuhF4IviHrXVwWWsRG%2FYT7pkrs%2Bf9nNnN3gf7ldtaJTl4SOxU6ZO6ASMLppcj3Z6PHmvvN0bdiXaDxqaMLCfPmdZi0IEuLfzYwRiPYVWXlavwXw48xYi1TdG7Neclt19Qvz7c5xwXsT%2F99C7fq3qR1f3OqPhemwVOebs6GgjyQdXhEK%2BfWuCP46BjOnNtpZ%2BkWTMQKGWkNh2cj%2B977V9ARJFXmdARdhFJb6IpOliZYuHMwHsajuwKdwl1J2fAtQMDDAqZBLzo1vVVAZP05gWKqj6%2BV2ULuvXVRJoGLQrktKlv%2Fo3p4mSjgpa%2BRCnTSEARrZfmrUImuZAh%2Fg4PRqb1le6truZSdzYZAXXZnyfBMt5OmqHosUEPyqzQhjgaawy2jbrQDXYCEk8n0HH7uDAZfpzmplNw1%2FKXERnDx9uYM9wxaEp4ZEPR1W%2FEhSrYKVUEgrmgCEWIFri3OQsp%2FxlSgcZzFkuZgztvu9SGqpT67GAzILmr7frKK7d7DMEY%2BqFCr10CAhcmooKcqEnTzCl%2BdLBBjqkAdygw25eG9zBlimtj7oIWwtpfEfVBSA1yOrghlnuxp55OpQWkxPiBnn14StugwlnRiiAioBQi44U4f9TR6x0pMj1yYr%2BfSnjyPwgZnmfVS49H4fiY5NUNMSyUooHzlu0CRAMRS162oG7EHMHGWPi4QFbjenMv6sxySW%2BVeOay%2FwUlLQoQaSwC5SpTEBu7%2BktKg1p85snf04849r2c7pA2OdDRDai&X-Amz-Signature=91910de9d494372f6402ff57e685a15daed4978f65cc34e0684dd9e5fbba6f68&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NJBL7Y%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuD71TowjXKoBuGbSmfq02jDEMkmVY%2BnuI7h2ggAGjNAIhAMrKmYCu3SCUrp9MDCg%2Fgt3Dihl9GB3Ez8o8mhpWP8R%2BKv8DCEwQABoMNjM3NDIzMTgzODA1IgxZ%2FDPHBEWE4gQ5D2Yq3AOr3SmsESDoQRNPxZmodTXZ1I63zpV8O71v1SHf3nYnDfeiwpljrMqcWyAK9W0bqOu3KufAQJVPjeouJgMmWyC4%2F%2Biq%2BP%2BOsgz1FlNkVTyWzuhF4IviHrXVwWWsRG%2FYT7pkrs%2Bf9nNnN3gf7ldtaJTl4SOxU6ZO6ASMLppcj3Z6PHmvvN0bdiXaDxqaMLCfPmdZi0IEuLfzYwRiPYVWXlavwXw48xYi1TdG7Neclt19Qvz7c5xwXsT%2F99C7fq3qR1f3OqPhemwVOebs6GgjyQdXhEK%2BfWuCP46BjOnNtpZ%2BkWTMQKGWkNh2cj%2B977V9ARJFXmdARdhFJb6IpOliZYuHMwHsajuwKdwl1J2fAtQMDDAqZBLzo1vVVAZP05gWKqj6%2BV2ULuvXVRJoGLQrktKlv%2Fo3p4mSjgpa%2BRCnTSEARrZfmrUImuZAh%2Fg4PRqb1le6truZSdzYZAXXZnyfBMt5OmqHosUEPyqzQhjgaawy2jbrQDXYCEk8n0HH7uDAZfpzmplNw1%2FKXERnDx9uYM9wxaEp4ZEPR1W%2FEhSrYKVUEgrmgCEWIFri3OQsp%2FxlSgcZzFkuZgztvu9SGqpT67GAzILmr7frKK7d7DMEY%2BqFCr10CAhcmooKcqEnTzCl%2BdLBBjqkAdygw25eG9zBlimtj7oIWwtpfEfVBSA1yOrghlnuxp55OpQWkxPiBnn14StugwlnRiiAioBQi44U4f9TR6x0pMj1yYr%2BfSnjyPwgZnmfVS49H4fiY5NUNMSyUooHzlu0CRAMRS162oG7EHMHGWPi4QFbjenMv6sxySW%2BVeOay%2FwUlLQoQaSwC5SpTEBu7%2BktKg1p85snf04849r2c7pA2OdDRDai&X-Amz-Signature=aaac709ad9d351754dfbfbc029036a718885ece1a739e1bceb03c6d2d39edb35&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NJBL7Y%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuD71TowjXKoBuGbSmfq02jDEMkmVY%2BnuI7h2ggAGjNAIhAMrKmYCu3SCUrp9MDCg%2Fgt3Dihl9GB3Ez8o8mhpWP8R%2BKv8DCEwQABoMNjM3NDIzMTgzODA1IgxZ%2FDPHBEWE4gQ5D2Yq3AOr3SmsESDoQRNPxZmodTXZ1I63zpV8O71v1SHf3nYnDfeiwpljrMqcWyAK9W0bqOu3KufAQJVPjeouJgMmWyC4%2F%2Biq%2BP%2BOsgz1FlNkVTyWzuhF4IviHrXVwWWsRG%2FYT7pkrs%2Bf9nNnN3gf7ldtaJTl4SOxU6ZO6ASMLppcj3Z6PHmvvN0bdiXaDxqaMLCfPmdZi0IEuLfzYwRiPYVWXlavwXw48xYi1TdG7Neclt19Qvz7c5xwXsT%2F99C7fq3qR1f3OqPhemwVOebs6GgjyQdXhEK%2BfWuCP46BjOnNtpZ%2BkWTMQKGWkNh2cj%2B977V9ARJFXmdARdhFJb6IpOliZYuHMwHsajuwKdwl1J2fAtQMDDAqZBLzo1vVVAZP05gWKqj6%2BV2ULuvXVRJoGLQrktKlv%2Fo3p4mSjgpa%2BRCnTSEARrZfmrUImuZAh%2Fg4PRqb1le6truZSdzYZAXXZnyfBMt5OmqHosUEPyqzQhjgaawy2jbrQDXYCEk8n0HH7uDAZfpzmplNw1%2FKXERnDx9uYM9wxaEp4ZEPR1W%2FEhSrYKVUEgrmgCEWIFri3OQsp%2FxlSgcZzFkuZgztvu9SGqpT67GAzILmr7frKK7d7DMEY%2BqFCr10CAhcmooKcqEnTzCl%2BdLBBjqkAdygw25eG9zBlimtj7oIWwtpfEfVBSA1yOrghlnuxp55OpQWkxPiBnn14StugwlnRiiAioBQi44U4f9TR6x0pMj1yYr%2BfSnjyPwgZnmfVS49H4fiY5NUNMSyUooHzlu0CRAMRS162oG7EHMHGWPi4QFbjenMv6sxySW%2BVeOay%2FwUlLQoQaSwC5SpTEBu7%2BktKg1p85snf04849r2c7pA2OdDRDai&X-Amz-Signature=412464064b7ec5651cc8dbf98067e3d53cb828744bfa04a04b1812d64736581f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NJBL7Y%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuD71TowjXKoBuGbSmfq02jDEMkmVY%2BnuI7h2ggAGjNAIhAMrKmYCu3SCUrp9MDCg%2Fgt3Dihl9GB3Ez8o8mhpWP8R%2BKv8DCEwQABoMNjM3NDIzMTgzODA1IgxZ%2FDPHBEWE4gQ5D2Yq3AOr3SmsESDoQRNPxZmodTXZ1I63zpV8O71v1SHf3nYnDfeiwpljrMqcWyAK9W0bqOu3KufAQJVPjeouJgMmWyC4%2F%2Biq%2BP%2BOsgz1FlNkVTyWzuhF4IviHrXVwWWsRG%2FYT7pkrs%2Bf9nNnN3gf7ldtaJTl4SOxU6ZO6ASMLppcj3Z6PHmvvN0bdiXaDxqaMLCfPmdZi0IEuLfzYwRiPYVWXlavwXw48xYi1TdG7Neclt19Qvz7c5xwXsT%2F99C7fq3qR1f3OqPhemwVOebs6GgjyQdXhEK%2BfWuCP46BjOnNtpZ%2BkWTMQKGWkNh2cj%2B977V9ARJFXmdARdhFJb6IpOliZYuHMwHsajuwKdwl1J2fAtQMDDAqZBLzo1vVVAZP05gWKqj6%2BV2ULuvXVRJoGLQrktKlv%2Fo3p4mSjgpa%2BRCnTSEARrZfmrUImuZAh%2Fg4PRqb1le6truZSdzYZAXXZnyfBMt5OmqHosUEPyqzQhjgaawy2jbrQDXYCEk8n0HH7uDAZfpzmplNw1%2FKXERnDx9uYM9wxaEp4ZEPR1W%2FEhSrYKVUEgrmgCEWIFri3OQsp%2FxlSgcZzFkuZgztvu9SGqpT67GAzILmr7frKK7d7DMEY%2BqFCr10CAhcmooKcqEnTzCl%2BdLBBjqkAdygw25eG9zBlimtj7oIWwtpfEfVBSA1yOrghlnuxp55OpQWkxPiBnn14StugwlnRiiAioBQi44U4f9TR6x0pMj1yYr%2BfSnjyPwgZnmfVS49H4fiY5NUNMSyUooHzlu0CRAMRS162oG7EHMHGWPi4QFbjenMv6sxySW%2BVeOay%2FwUlLQoQaSwC5SpTEBu7%2BktKg1p85snf04849r2c7pA2OdDRDai&X-Amz-Signature=9f0e2ac1c7038110318cd8d6f7ddcbd3644df5164be7f26e2e705154440acb61&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
