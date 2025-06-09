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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2IPRVTY%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T004523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5OqqGnhCJ4kiDMVrvFjOWu6sCoh4mJ18e7BdTVKxsXQIgE%2Ba%2BXj3w6ZGYGOCe1d76dApwH4aIlAW7ImpCsTVlKHkqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa8Oef0NQIjI5yubCrcA1R661%2FuGFFBnUs2uv79UKr3vzTIAY%2Bf5l2lUp%2FCaWKuVYx%2FUTS%2BuovBbxwHX61lPlaoW%2BF%2Bp2QhoFEyBSOvFTsjp6zsqpEai5Z%2FrxTY9t6dLWVJkqC7qzWFNaWGBdaf8TqreC58FNWLxH6GLvvt9lWykR2zxUL5J3XOGYvDIxnImq5xBAUNVrDTynmoWUuGewDpAN3p5EPVcvzfnADQK9VY%2Fap%2BiSVx8dzmcPkRovximJmOdZMTKVrbdDU7jtN8zPPi9zbz6%2BsRdS6ka939uKrRQnPi2lGpIShkLDfp9mkEoMToc3YSetkbJnhZv5%2FABJxjOst4iuhfZe4JyxkD9iDCR52%2F8h5Y8Dg9quMJ6nOfAjeMa2uF57ps3LRaIG1qJ%2FRPf7g0K4MwoZfGLBTP3HwmBz%2BMn1MyDexfZbHJP66Vt1mc3UYePwapKDTMYgh8%2Bz%2FWO3LdJIHpU0%2FfnXeVGsaPOvJzsw8nsSoEt8d%2FdLYKitEiBg%2BsnTbgzXgCw3UDUPxmClGgITlS%2FcpZfGETGLiRiYq670ImExIIn%2FewYL2Fv4vvtThSWCvvwNVq%2Fny3lZK%2FvpcvMr6bcwDC0eoq36KXxrrpResNUmAdl7IPXKUGA9CBB2Wh9d4OAExlMMyimMIGOqUBHutJc46LFOZfaIMZSMqW1FwCNQ6TgQQgYA2iNtzZHQPafyK0jHJGOlvFHQ5FM0cL5X5D2vV%2BorlbjK1qpy69V4RFrZdZV%2FluWGzlGj7HFVrS9URPDOE3FKLDY5bwi1i8r3TufmJqK8Y%2BKrYDcf2kQ4YKelgeuW5qFwLPeOQO4fhQQnJRhpUfWTSYWVXGuYSypj8bq70TvZRJxZjWzP75VIkiotQu&X-Amz-Signature=9892572bdb7877bd221e0ea45d9abd94afdd518fc3017b0c01c5069ce9257b8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2IPRVTY%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T004523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5OqqGnhCJ4kiDMVrvFjOWu6sCoh4mJ18e7BdTVKxsXQIgE%2Ba%2BXj3w6ZGYGOCe1d76dApwH4aIlAW7ImpCsTVlKHkqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa8Oef0NQIjI5yubCrcA1R661%2FuGFFBnUs2uv79UKr3vzTIAY%2Bf5l2lUp%2FCaWKuVYx%2FUTS%2BuovBbxwHX61lPlaoW%2BF%2Bp2QhoFEyBSOvFTsjp6zsqpEai5Z%2FrxTY9t6dLWVJkqC7qzWFNaWGBdaf8TqreC58FNWLxH6GLvvt9lWykR2zxUL5J3XOGYvDIxnImq5xBAUNVrDTynmoWUuGewDpAN3p5EPVcvzfnADQK9VY%2Fap%2BiSVx8dzmcPkRovximJmOdZMTKVrbdDU7jtN8zPPi9zbz6%2BsRdS6ka939uKrRQnPi2lGpIShkLDfp9mkEoMToc3YSetkbJnhZv5%2FABJxjOst4iuhfZe4JyxkD9iDCR52%2F8h5Y8Dg9quMJ6nOfAjeMa2uF57ps3LRaIG1qJ%2FRPf7g0K4MwoZfGLBTP3HwmBz%2BMn1MyDexfZbHJP66Vt1mc3UYePwapKDTMYgh8%2Bz%2FWO3LdJIHpU0%2FfnXeVGsaPOvJzsw8nsSoEt8d%2FdLYKitEiBg%2BsnTbgzXgCw3UDUPxmClGgITlS%2FcpZfGETGLiRiYq670ImExIIn%2FewYL2Fv4vvtThSWCvvwNVq%2Fny3lZK%2FvpcvMr6bcwDC0eoq36KXxrrpResNUmAdl7IPXKUGA9CBB2Wh9d4OAExlMMyimMIGOqUBHutJc46LFOZfaIMZSMqW1FwCNQ6TgQQgYA2iNtzZHQPafyK0jHJGOlvFHQ5FM0cL5X5D2vV%2BorlbjK1qpy69V4RFrZdZV%2FluWGzlGj7HFVrS9URPDOE3FKLDY5bwi1i8r3TufmJqK8Y%2BKrYDcf2kQ4YKelgeuW5qFwLPeOQO4fhQQnJRhpUfWTSYWVXGuYSypj8bq70TvZRJxZjWzP75VIkiotQu&X-Amz-Signature=9f1a6a519903a60a9ba98e3462ae3f2103039bbd5e33e46588e255457d2164ca&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2IPRVTY%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T004523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5OqqGnhCJ4kiDMVrvFjOWu6sCoh4mJ18e7BdTVKxsXQIgE%2Ba%2BXj3w6ZGYGOCe1d76dApwH4aIlAW7ImpCsTVlKHkqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa8Oef0NQIjI5yubCrcA1R661%2FuGFFBnUs2uv79UKr3vzTIAY%2Bf5l2lUp%2FCaWKuVYx%2FUTS%2BuovBbxwHX61lPlaoW%2BF%2Bp2QhoFEyBSOvFTsjp6zsqpEai5Z%2FrxTY9t6dLWVJkqC7qzWFNaWGBdaf8TqreC58FNWLxH6GLvvt9lWykR2zxUL5J3XOGYvDIxnImq5xBAUNVrDTynmoWUuGewDpAN3p5EPVcvzfnADQK9VY%2Fap%2BiSVx8dzmcPkRovximJmOdZMTKVrbdDU7jtN8zPPi9zbz6%2BsRdS6ka939uKrRQnPi2lGpIShkLDfp9mkEoMToc3YSetkbJnhZv5%2FABJxjOst4iuhfZe4JyxkD9iDCR52%2F8h5Y8Dg9quMJ6nOfAjeMa2uF57ps3LRaIG1qJ%2FRPf7g0K4MwoZfGLBTP3HwmBz%2BMn1MyDexfZbHJP66Vt1mc3UYePwapKDTMYgh8%2Bz%2FWO3LdJIHpU0%2FfnXeVGsaPOvJzsw8nsSoEt8d%2FdLYKitEiBg%2BsnTbgzXgCw3UDUPxmClGgITlS%2FcpZfGETGLiRiYq670ImExIIn%2FewYL2Fv4vvtThSWCvvwNVq%2Fny3lZK%2FvpcvMr6bcwDC0eoq36KXxrrpResNUmAdl7IPXKUGA9CBB2Wh9d4OAExlMMyimMIGOqUBHutJc46LFOZfaIMZSMqW1FwCNQ6TgQQgYA2iNtzZHQPafyK0jHJGOlvFHQ5FM0cL5X5D2vV%2BorlbjK1qpy69V4RFrZdZV%2FluWGzlGj7HFVrS9URPDOE3FKLDY5bwi1i8r3TufmJqK8Y%2BKrYDcf2kQ4YKelgeuW5qFwLPeOQO4fhQQnJRhpUfWTSYWVXGuYSypj8bq70TvZRJxZjWzP75VIkiotQu&X-Amz-Signature=b18c7ed72ebe61c2b15630b0ee285ebe71098846ceff934adfd8a81bf7b625e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2IPRVTY%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T004523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5OqqGnhCJ4kiDMVrvFjOWu6sCoh4mJ18e7BdTVKxsXQIgE%2Ba%2BXj3w6ZGYGOCe1d76dApwH4aIlAW7ImpCsTVlKHkqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa8Oef0NQIjI5yubCrcA1R661%2FuGFFBnUs2uv79UKr3vzTIAY%2Bf5l2lUp%2FCaWKuVYx%2FUTS%2BuovBbxwHX61lPlaoW%2BF%2Bp2QhoFEyBSOvFTsjp6zsqpEai5Z%2FrxTY9t6dLWVJkqC7qzWFNaWGBdaf8TqreC58FNWLxH6GLvvt9lWykR2zxUL5J3XOGYvDIxnImq5xBAUNVrDTynmoWUuGewDpAN3p5EPVcvzfnADQK9VY%2Fap%2BiSVx8dzmcPkRovximJmOdZMTKVrbdDU7jtN8zPPi9zbz6%2BsRdS6ka939uKrRQnPi2lGpIShkLDfp9mkEoMToc3YSetkbJnhZv5%2FABJxjOst4iuhfZe4JyxkD9iDCR52%2F8h5Y8Dg9quMJ6nOfAjeMa2uF57ps3LRaIG1qJ%2FRPf7g0K4MwoZfGLBTP3HwmBz%2BMn1MyDexfZbHJP66Vt1mc3UYePwapKDTMYgh8%2Bz%2FWO3LdJIHpU0%2FfnXeVGsaPOvJzsw8nsSoEt8d%2FdLYKitEiBg%2BsnTbgzXgCw3UDUPxmClGgITlS%2FcpZfGETGLiRiYq670ImExIIn%2FewYL2Fv4vvtThSWCvvwNVq%2Fny3lZK%2FvpcvMr6bcwDC0eoq36KXxrrpResNUmAdl7IPXKUGA9CBB2Wh9d4OAExlMMyimMIGOqUBHutJc46LFOZfaIMZSMqW1FwCNQ6TgQQgYA2iNtzZHQPafyK0jHJGOlvFHQ5FM0cL5X5D2vV%2BorlbjK1qpy69V4RFrZdZV%2FluWGzlGj7HFVrS9URPDOE3FKLDY5bwi1i8r3TufmJqK8Y%2BKrYDcf2kQ4YKelgeuW5qFwLPeOQO4fhQQnJRhpUfWTSYWVXGuYSypj8bq70TvZRJxZjWzP75VIkiotQu&X-Amz-Signature=d21596013fb3fd48e054c36173ada6b44fe953c75bb5a4bcef478a4079c4b018&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2IPRVTY%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T004523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5OqqGnhCJ4kiDMVrvFjOWu6sCoh4mJ18e7BdTVKxsXQIgE%2Ba%2BXj3w6ZGYGOCe1d76dApwH4aIlAW7ImpCsTVlKHkqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa8Oef0NQIjI5yubCrcA1R661%2FuGFFBnUs2uv79UKr3vzTIAY%2Bf5l2lUp%2FCaWKuVYx%2FUTS%2BuovBbxwHX61lPlaoW%2BF%2Bp2QhoFEyBSOvFTsjp6zsqpEai5Z%2FrxTY9t6dLWVJkqC7qzWFNaWGBdaf8TqreC58FNWLxH6GLvvt9lWykR2zxUL5J3XOGYvDIxnImq5xBAUNVrDTynmoWUuGewDpAN3p5EPVcvzfnADQK9VY%2Fap%2BiSVx8dzmcPkRovximJmOdZMTKVrbdDU7jtN8zPPi9zbz6%2BsRdS6ka939uKrRQnPi2lGpIShkLDfp9mkEoMToc3YSetkbJnhZv5%2FABJxjOst4iuhfZe4JyxkD9iDCR52%2F8h5Y8Dg9quMJ6nOfAjeMa2uF57ps3LRaIG1qJ%2FRPf7g0K4MwoZfGLBTP3HwmBz%2BMn1MyDexfZbHJP66Vt1mc3UYePwapKDTMYgh8%2Bz%2FWO3LdJIHpU0%2FfnXeVGsaPOvJzsw8nsSoEt8d%2FdLYKitEiBg%2BsnTbgzXgCw3UDUPxmClGgITlS%2FcpZfGETGLiRiYq670ImExIIn%2FewYL2Fv4vvtThSWCvvwNVq%2Fny3lZK%2FvpcvMr6bcwDC0eoq36KXxrrpResNUmAdl7IPXKUGA9CBB2Wh9d4OAExlMMyimMIGOqUBHutJc46LFOZfaIMZSMqW1FwCNQ6TgQQgYA2iNtzZHQPafyK0jHJGOlvFHQ5FM0cL5X5D2vV%2BorlbjK1qpy69V4RFrZdZV%2FluWGzlGj7HFVrS9URPDOE3FKLDY5bwi1i8r3TufmJqK8Y%2BKrYDcf2kQ4YKelgeuW5qFwLPeOQO4fhQQnJRhpUfWTSYWVXGuYSypj8bq70TvZRJxZjWzP75VIkiotQu&X-Amz-Signature=03bee320bfd8566c690a99bbad6f3d640a374dde1ef4c89498a9b094c30825aa&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
