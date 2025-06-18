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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VAACUYZ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYLX3ZEGb6yAlEBnAePoS7SD3tDnmWWZND1s9UFvl7LAIhAIRdAdXAGsVndlvosoM9D0Yn3Nr0ntBnWlWQngx7BRgNKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHy3TgEZN4SIH5RJAq3AM2RY50Dx9bdJvsqKA80oup%2F6B%2FTwci0rg5ativ1XfaAr7053LTo%2Fdte5E5kM0TYBHfLlCg01HYEY1OlCSPbX1%2FQx5gDpEv%2FDALiNEOXx8gLWZ7gM%2BQqDDGvOZL8YMvyTqBZp9qBFPt4AkOhfH8WGwWo%2FsNOivt5Qfy5K4fJq%2BrGB6Aqeth6ZdhItIRPDUNMviPSSj1znYeU6D6Vme51Mp1JBJ0psWJuvW512pv%2BApKXbJUMisYHJUcviUIQUnaXc3Aruk7apS7JROBTY8CCU2bbKnXIgaeFo%2FNPkpF7wAzlSbKAldhoekg4cNB4%2F%2FtaGgd9tCdaV29hHilIyG%2FWPW0L7IfwyxddvyTqVzU%2FLLmZ2tXiuyb2s%2Bs7V6pGs3%2FODsMtqA1prN3Oodc93EL9nxPqZJSKup0RRWa%2Bs7gb49ppP%2B5MrZH0ax6zApTGYWgeEuEjtBsgESHGLxL%2FEyqgE0EfYqy2nwOw38gP9Bj7yCBifAb1CVGnSKTP2y6ezrcWMi1RkZDmL3AQApo6%2Fqx94DtslxxIbF4VSuoMwldt9D%2FhGPJww4kG19d3ZJcO1flIan%2B9hGpI7CzuKqzn%2F3eegG5HrIxeqd%2BQAhapsteldN%2Be%2BJncSlHEP%2Bd7NpkETDEt8rCBjqkAVYu4U2i2tiQIrHzb%2B%2BkzbA884xbONeKHQNj2z5l%2B%2FMAuJT4EHrA3w%2FpFUUOExNj8piLI0ARH%2BkRNkDv3z0y3ryWKzAHL3VOJTINl8yANmAB6I4SQV2siXfKWXRF%2FM3j72MyAvFicJdjbh%2BzLbNpIYdrGYBCWpRYMf%2BplSTECNTbnO1KNxz0xDGK1UMy0SGdUVl3au0%2Fv7ZU9bXj8YLi69zMURX2&X-Amz-Signature=70810261fa6f2a593ebdb04d9e53a605a8576d2ce98f781174323107a9149b94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VAACUYZ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYLX3ZEGb6yAlEBnAePoS7SD3tDnmWWZND1s9UFvl7LAIhAIRdAdXAGsVndlvosoM9D0Yn3Nr0ntBnWlWQngx7BRgNKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHy3TgEZN4SIH5RJAq3AM2RY50Dx9bdJvsqKA80oup%2F6B%2FTwci0rg5ativ1XfaAr7053LTo%2Fdte5E5kM0TYBHfLlCg01HYEY1OlCSPbX1%2FQx5gDpEv%2FDALiNEOXx8gLWZ7gM%2BQqDDGvOZL8YMvyTqBZp9qBFPt4AkOhfH8WGwWo%2FsNOivt5Qfy5K4fJq%2BrGB6Aqeth6ZdhItIRPDUNMviPSSj1znYeU6D6Vme51Mp1JBJ0psWJuvW512pv%2BApKXbJUMisYHJUcviUIQUnaXc3Aruk7apS7JROBTY8CCU2bbKnXIgaeFo%2FNPkpF7wAzlSbKAldhoekg4cNB4%2F%2FtaGgd9tCdaV29hHilIyG%2FWPW0L7IfwyxddvyTqVzU%2FLLmZ2tXiuyb2s%2Bs7V6pGs3%2FODsMtqA1prN3Oodc93EL9nxPqZJSKup0RRWa%2Bs7gb49ppP%2B5MrZH0ax6zApTGYWgeEuEjtBsgESHGLxL%2FEyqgE0EfYqy2nwOw38gP9Bj7yCBifAb1CVGnSKTP2y6ezrcWMi1RkZDmL3AQApo6%2Fqx94DtslxxIbF4VSuoMwldt9D%2FhGPJww4kG19d3ZJcO1flIan%2B9hGpI7CzuKqzn%2F3eegG5HrIxeqd%2BQAhapsteldN%2Be%2BJncSlHEP%2Bd7NpkETDEt8rCBjqkAVYu4U2i2tiQIrHzb%2B%2BkzbA884xbONeKHQNj2z5l%2B%2FMAuJT4EHrA3w%2FpFUUOExNj8piLI0ARH%2BkRNkDv3z0y3ryWKzAHL3VOJTINl8yANmAB6I4SQV2siXfKWXRF%2FM3j72MyAvFicJdjbh%2BzLbNpIYdrGYBCWpRYMf%2BplSTECNTbnO1KNxz0xDGK1UMy0SGdUVl3au0%2Fv7ZU9bXj8YLi69zMURX2&X-Amz-Signature=94ee1676c7bd2f1f80ee966d6105a72a818feee1eae85555226f2f8ef95761cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VAACUYZ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYLX3ZEGb6yAlEBnAePoS7SD3tDnmWWZND1s9UFvl7LAIhAIRdAdXAGsVndlvosoM9D0Yn3Nr0ntBnWlWQngx7BRgNKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHy3TgEZN4SIH5RJAq3AM2RY50Dx9bdJvsqKA80oup%2F6B%2FTwci0rg5ativ1XfaAr7053LTo%2Fdte5E5kM0TYBHfLlCg01HYEY1OlCSPbX1%2FQx5gDpEv%2FDALiNEOXx8gLWZ7gM%2BQqDDGvOZL8YMvyTqBZp9qBFPt4AkOhfH8WGwWo%2FsNOivt5Qfy5K4fJq%2BrGB6Aqeth6ZdhItIRPDUNMviPSSj1znYeU6D6Vme51Mp1JBJ0psWJuvW512pv%2BApKXbJUMisYHJUcviUIQUnaXc3Aruk7apS7JROBTY8CCU2bbKnXIgaeFo%2FNPkpF7wAzlSbKAldhoekg4cNB4%2F%2FtaGgd9tCdaV29hHilIyG%2FWPW0L7IfwyxddvyTqVzU%2FLLmZ2tXiuyb2s%2Bs7V6pGs3%2FODsMtqA1prN3Oodc93EL9nxPqZJSKup0RRWa%2Bs7gb49ppP%2B5MrZH0ax6zApTGYWgeEuEjtBsgESHGLxL%2FEyqgE0EfYqy2nwOw38gP9Bj7yCBifAb1CVGnSKTP2y6ezrcWMi1RkZDmL3AQApo6%2Fqx94DtslxxIbF4VSuoMwldt9D%2FhGPJww4kG19d3ZJcO1flIan%2B9hGpI7CzuKqzn%2F3eegG5HrIxeqd%2BQAhapsteldN%2Be%2BJncSlHEP%2Bd7NpkETDEt8rCBjqkAVYu4U2i2tiQIrHzb%2B%2BkzbA884xbONeKHQNj2z5l%2B%2FMAuJT4EHrA3w%2FpFUUOExNj8piLI0ARH%2BkRNkDv3z0y3ryWKzAHL3VOJTINl8yANmAB6I4SQV2siXfKWXRF%2FM3j72MyAvFicJdjbh%2BzLbNpIYdrGYBCWpRYMf%2BplSTECNTbnO1KNxz0xDGK1UMy0SGdUVl3au0%2Fv7ZU9bXj8YLi69zMURX2&X-Amz-Signature=b85f586a877f462f13adced216093f9b8c4f6afcd0a7d9b914687e58f2e5c8de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VAACUYZ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYLX3ZEGb6yAlEBnAePoS7SD3tDnmWWZND1s9UFvl7LAIhAIRdAdXAGsVndlvosoM9D0Yn3Nr0ntBnWlWQngx7BRgNKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHy3TgEZN4SIH5RJAq3AM2RY50Dx9bdJvsqKA80oup%2F6B%2FTwci0rg5ativ1XfaAr7053LTo%2Fdte5E5kM0TYBHfLlCg01HYEY1OlCSPbX1%2FQx5gDpEv%2FDALiNEOXx8gLWZ7gM%2BQqDDGvOZL8YMvyTqBZp9qBFPt4AkOhfH8WGwWo%2FsNOivt5Qfy5K4fJq%2BrGB6Aqeth6ZdhItIRPDUNMviPSSj1znYeU6D6Vme51Mp1JBJ0psWJuvW512pv%2BApKXbJUMisYHJUcviUIQUnaXc3Aruk7apS7JROBTY8CCU2bbKnXIgaeFo%2FNPkpF7wAzlSbKAldhoekg4cNB4%2F%2FtaGgd9tCdaV29hHilIyG%2FWPW0L7IfwyxddvyTqVzU%2FLLmZ2tXiuyb2s%2Bs7V6pGs3%2FODsMtqA1prN3Oodc93EL9nxPqZJSKup0RRWa%2Bs7gb49ppP%2B5MrZH0ax6zApTGYWgeEuEjtBsgESHGLxL%2FEyqgE0EfYqy2nwOw38gP9Bj7yCBifAb1CVGnSKTP2y6ezrcWMi1RkZDmL3AQApo6%2Fqx94DtslxxIbF4VSuoMwldt9D%2FhGPJww4kG19d3ZJcO1flIan%2B9hGpI7CzuKqzn%2F3eegG5HrIxeqd%2BQAhapsteldN%2Be%2BJncSlHEP%2Bd7NpkETDEt8rCBjqkAVYu4U2i2tiQIrHzb%2B%2BkzbA884xbONeKHQNj2z5l%2B%2FMAuJT4EHrA3w%2FpFUUOExNj8piLI0ARH%2BkRNkDv3z0y3ryWKzAHL3VOJTINl8yANmAB6I4SQV2siXfKWXRF%2FM3j72MyAvFicJdjbh%2BzLbNpIYdrGYBCWpRYMf%2BplSTECNTbnO1KNxz0xDGK1UMy0SGdUVl3au0%2Fv7ZU9bXj8YLi69zMURX2&X-Amz-Signature=48eb38fa70f60c63379c362ed52433bef6c3a995ece145641b12f378a1077792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VAACUYZ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYLX3ZEGb6yAlEBnAePoS7SD3tDnmWWZND1s9UFvl7LAIhAIRdAdXAGsVndlvosoM9D0Yn3Nr0ntBnWlWQngx7BRgNKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHy3TgEZN4SIH5RJAq3AM2RY50Dx9bdJvsqKA80oup%2F6B%2FTwci0rg5ativ1XfaAr7053LTo%2Fdte5E5kM0TYBHfLlCg01HYEY1OlCSPbX1%2FQx5gDpEv%2FDALiNEOXx8gLWZ7gM%2BQqDDGvOZL8YMvyTqBZp9qBFPt4AkOhfH8WGwWo%2FsNOivt5Qfy5K4fJq%2BrGB6Aqeth6ZdhItIRPDUNMviPSSj1znYeU6D6Vme51Mp1JBJ0psWJuvW512pv%2BApKXbJUMisYHJUcviUIQUnaXc3Aruk7apS7JROBTY8CCU2bbKnXIgaeFo%2FNPkpF7wAzlSbKAldhoekg4cNB4%2F%2FtaGgd9tCdaV29hHilIyG%2FWPW0L7IfwyxddvyTqVzU%2FLLmZ2tXiuyb2s%2Bs7V6pGs3%2FODsMtqA1prN3Oodc93EL9nxPqZJSKup0RRWa%2Bs7gb49ppP%2B5MrZH0ax6zApTGYWgeEuEjtBsgESHGLxL%2FEyqgE0EfYqy2nwOw38gP9Bj7yCBifAb1CVGnSKTP2y6ezrcWMi1RkZDmL3AQApo6%2Fqx94DtslxxIbF4VSuoMwldt9D%2FhGPJww4kG19d3ZJcO1flIan%2B9hGpI7CzuKqzn%2F3eegG5HrIxeqd%2BQAhapsteldN%2Be%2BJncSlHEP%2Bd7NpkETDEt8rCBjqkAVYu4U2i2tiQIrHzb%2B%2BkzbA884xbONeKHQNj2z5l%2B%2FMAuJT4EHrA3w%2FpFUUOExNj8piLI0ARH%2BkRNkDv3z0y3ryWKzAHL3VOJTINl8yANmAB6I4SQV2siXfKWXRF%2FM3j72MyAvFicJdjbh%2BzLbNpIYdrGYBCWpRYMf%2BplSTECNTbnO1KNxz0xDGK1UMy0SGdUVl3au0%2Fv7ZU9bXj8YLi69zMURX2&X-Amz-Signature=3a23af587899fdf2e89068ec7c1a7e964af6f2c35725b68dae0caf99c85a7068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
