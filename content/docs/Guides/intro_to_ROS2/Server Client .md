---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZYDLI7R%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDeRIEWlgcydyPS56P39V0fzAvSN86YGVEqKsKMWfSiWQIhAIUTTMvzbxsT0tcdXwU0hO31In4w5kk8f%2Fb5jz4wL3AiKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwyhfn1l0gXW392IOMq3AObqB2ZQfxwQvF11D4F4ljf75XQluMRg18PSgxDtEa6D2i%2BUOAeQiDHbihtjzCM0kAt2ohuDYnfTSsS8pPlwPqwjjr44XK8F5SuOchiaMnHUggG77QILRTq8eeyUjWhVYmFmbUVTm9mKWyQKNDRD7zhXyZ6dTZIgB%2BOWnHNXqs9H2nbrjtEyD2ZmJT%2Fq0ouuzcCcDpna4kPZRAOnPHt%2FqY6N0wMY1nR%2BBGAlvA%2FkmOv5NbKCqELKM7PtNci4pinZ4gxM34hpAfLtgRQsrGIBJ%2B29mSozdiSL3OOIgXt5%2B1kKU8v4tVvfAouorcPrSKgZU2oVYIkpx0PoDJ70fDsvM3e%2FKTfkMIXxTg3TM4lBzZa%2FOvAm7CF3%2BP1IGH5RxWThbORuCilSWroPi7rFbl94DQvk785hy2YJRZykQa6at%2Fej7Db0cE94hjnM5S0fifgtVDY%2BHQziMSFZuYE6uasbKdLWmOaOPCuVRzvUXCFykfqJulPDBAIGK6nYEMJvGAm338FkRWE4GvL6hBqWh8uga4EJlqLfIfkCXwtKihSdq2vDN2NbwNaAkUx37lm53D7oOJnKOYBOADavit6MLwewXbsmqNm5xFBvQj64Ls0JbFJuAcE54PaPT%2FBq9E0lDC%2BydPEBjqkAcxrGoIDTTrIvo4FEwz7a%2B2NxOO6NNzNACq0fzv45Llp4rkRlJxOomibO%2Bt5Vh%2BV6rGH91vcq%2BiJKOZuIM2j1mihbNX%2By9YcDdDlrZMs3MHKEKExDbLAkyADgeN%2FrHm%2BFaqMZw3B9QzXnAyEXgTkMZJ0PuYNHDhPrFGZ7Fe%2FnFCd2%2B3dcXjiJiOiDHjNXFQ%2BLxeXm7H6aBx%2F8qoDJlqbanJksMkw&X-Amz-Signature=eca54bc5d86179f212e115af5863b0bb971bc286226dc82ff1ef38b7ed5b9d88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZYDLI7R%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDeRIEWlgcydyPS56P39V0fzAvSN86YGVEqKsKMWfSiWQIhAIUTTMvzbxsT0tcdXwU0hO31In4w5kk8f%2Fb5jz4wL3AiKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwyhfn1l0gXW392IOMq3AObqB2ZQfxwQvF11D4F4ljf75XQluMRg18PSgxDtEa6D2i%2BUOAeQiDHbihtjzCM0kAt2ohuDYnfTSsS8pPlwPqwjjr44XK8F5SuOchiaMnHUggG77QILRTq8eeyUjWhVYmFmbUVTm9mKWyQKNDRD7zhXyZ6dTZIgB%2BOWnHNXqs9H2nbrjtEyD2ZmJT%2Fq0ouuzcCcDpna4kPZRAOnPHt%2FqY6N0wMY1nR%2BBGAlvA%2FkmOv5NbKCqELKM7PtNci4pinZ4gxM34hpAfLtgRQsrGIBJ%2B29mSozdiSL3OOIgXt5%2B1kKU8v4tVvfAouorcPrSKgZU2oVYIkpx0PoDJ70fDsvM3e%2FKTfkMIXxTg3TM4lBzZa%2FOvAm7CF3%2BP1IGH5RxWThbORuCilSWroPi7rFbl94DQvk785hy2YJRZykQa6at%2Fej7Db0cE94hjnM5S0fifgtVDY%2BHQziMSFZuYE6uasbKdLWmOaOPCuVRzvUXCFykfqJulPDBAIGK6nYEMJvGAm338FkRWE4GvL6hBqWh8uga4EJlqLfIfkCXwtKihSdq2vDN2NbwNaAkUx37lm53D7oOJnKOYBOADavit6MLwewXbsmqNm5xFBvQj64Ls0JbFJuAcE54PaPT%2FBq9E0lDC%2BydPEBjqkAcxrGoIDTTrIvo4FEwz7a%2B2NxOO6NNzNACq0fzv45Llp4rkRlJxOomibO%2Bt5Vh%2BV6rGH91vcq%2BiJKOZuIM2j1mihbNX%2By9YcDdDlrZMs3MHKEKExDbLAkyADgeN%2FrHm%2BFaqMZw3B9QzXnAyEXgTkMZJ0PuYNHDhPrFGZ7Fe%2FnFCd2%2B3dcXjiJiOiDHjNXFQ%2BLxeXm7H6aBx%2F8qoDJlqbanJksMkw&X-Amz-Signature=cc537eb808cf341ddde537c9607ae401cbae9c7e6d5ea80e01acd456b58ac1a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZYDLI7R%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDeRIEWlgcydyPS56P39V0fzAvSN86YGVEqKsKMWfSiWQIhAIUTTMvzbxsT0tcdXwU0hO31In4w5kk8f%2Fb5jz4wL3AiKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwyhfn1l0gXW392IOMq3AObqB2ZQfxwQvF11D4F4ljf75XQluMRg18PSgxDtEa6D2i%2BUOAeQiDHbihtjzCM0kAt2ohuDYnfTSsS8pPlwPqwjjr44XK8F5SuOchiaMnHUggG77QILRTq8eeyUjWhVYmFmbUVTm9mKWyQKNDRD7zhXyZ6dTZIgB%2BOWnHNXqs9H2nbrjtEyD2ZmJT%2Fq0ouuzcCcDpna4kPZRAOnPHt%2FqY6N0wMY1nR%2BBGAlvA%2FkmOv5NbKCqELKM7PtNci4pinZ4gxM34hpAfLtgRQsrGIBJ%2B29mSozdiSL3OOIgXt5%2B1kKU8v4tVvfAouorcPrSKgZU2oVYIkpx0PoDJ70fDsvM3e%2FKTfkMIXxTg3TM4lBzZa%2FOvAm7CF3%2BP1IGH5RxWThbORuCilSWroPi7rFbl94DQvk785hy2YJRZykQa6at%2Fej7Db0cE94hjnM5S0fifgtVDY%2BHQziMSFZuYE6uasbKdLWmOaOPCuVRzvUXCFykfqJulPDBAIGK6nYEMJvGAm338FkRWE4GvL6hBqWh8uga4EJlqLfIfkCXwtKihSdq2vDN2NbwNaAkUx37lm53D7oOJnKOYBOADavit6MLwewXbsmqNm5xFBvQj64Ls0JbFJuAcE54PaPT%2FBq9E0lDC%2BydPEBjqkAcxrGoIDTTrIvo4FEwz7a%2B2NxOO6NNzNACq0fzv45Llp4rkRlJxOomibO%2Bt5Vh%2BV6rGH91vcq%2BiJKOZuIM2j1mihbNX%2By9YcDdDlrZMs3MHKEKExDbLAkyADgeN%2FrHm%2BFaqMZw3B9QzXnAyEXgTkMZJ0PuYNHDhPrFGZ7Fe%2FnFCd2%2B3dcXjiJiOiDHjNXFQ%2BLxeXm7H6aBx%2F8qoDJlqbanJksMkw&X-Amz-Signature=bb7d05a873f3b2718c735ee18cb70aae9537a13320406cc0530275b533a5066b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZYDLI7R%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDeRIEWlgcydyPS56P39V0fzAvSN86YGVEqKsKMWfSiWQIhAIUTTMvzbxsT0tcdXwU0hO31In4w5kk8f%2Fb5jz4wL3AiKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwyhfn1l0gXW392IOMq3AObqB2ZQfxwQvF11D4F4ljf75XQluMRg18PSgxDtEa6D2i%2BUOAeQiDHbihtjzCM0kAt2ohuDYnfTSsS8pPlwPqwjjr44XK8F5SuOchiaMnHUggG77QILRTq8eeyUjWhVYmFmbUVTm9mKWyQKNDRD7zhXyZ6dTZIgB%2BOWnHNXqs9H2nbrjtEyD2ZmJT%2Fq0ouuzcCcDpna4kPZRAOnPHt%2FqY6N0wMY1nR%2BBGAlvA%2FkmOv5NbKCqELKM7PtNci4pinZ4gxM34hpAfLtgRQsrGIBJ%2B29mSozdiSL3OOIgXt5%2B1kKU8v4tVvfAouorcPrSKgZU2oVYIkpx0PoDJ70fDsvM3e%2FKTfkMIXxTg3TM4lBzZa%2FOvAm7CF3%2BP1IGH5RxWThbORuCilSWroPi7rFbl94DQvk785hy2YJRZykQa6at%2Fej7Db0cE94hjnM5S0fifgtVDY%2BHQziMSFZuYE6uasbKdLWmOaOPCuVRzvUXCFykfqJulPDBAIGK6nYEMJvGAm338FkRWE4GvL6hBqWh8uga4EJlqLfIfkCXwtKihSdq2vDN2NbwNaAkUx37lm53D7oOJnKOYBOADavit6MLwewXbsmqNm5xFBvQj64Ls0JbFJuAcE54PaPT%2FBq9E0lDC%2BydPEBjqkAcxrGoIDTTrIvo4FEwz7a%2B2NxOO6NNzNACq0fzv45Llp4rkRlJxOomibO%2Bt5Vh%2BV6rGH91vcq%2BiJKOZuIM2j1mihbNX%2By9YcDdDlrZMs3MHKEKExDbLAkyADgeN%2FrHm%2BFaqMZw3B9QzXnAyEXgTkMZJ0PuYNHDhPrFGZ7Fe%2FnFCd2%2B3dcXjiJiOiDHjNXFQ%2BLxeXm7H6aBx%2F8qoDJlqbanJksMkw&X-Amz-Signature=fbaecf148fa29c3dca376d62a8f89bc18f0463777d8984f9176ccd76657bfe06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZYDLI7R%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDeRIEWlgcydyPS56P39V0fzAvSN86YGVEqKsKMWfSiWQIhAIUTTMvzbxsT0tcdXwU0hO31In4w5kk8f%2Fb5jz4wL3AiKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwyhfn1l0gXW392IOMq3AObqB2ZQfxwQvF11D4F4ljf75XQluMRg18PSgxDtEa6D2i%2BUOAeQiDHbihtjzCM0kAt2ohuDYnfTSsS8pPlwPqwjjr44XK8F5SuOchiaMnHUggG77QILRTq8eeyUjWhVYmFmbUVTm9mKWyQKNDRD7zhXyZ6dTZIgB%2BOWnHNXqs9H2nbrjtEyD2ZmJT%2Fq0ouuzcCcDpna4kPZRAOnPHt%2FqY6N0wMY1nR%2BBGAlvA%2FkmOv5NbKCqELKM7PtNci4pinZ4gxM34hpAfLtgRQsrGIBJ%2B29mSozdiSL3OOIgXt5%2B1kKU8v4tVvfAouorcPrSKgZU2oVYIkpx0PoDJ70fDsvM3e%2FKTfkMIXxTg3TM4lBzZa%2FOvAm7CF3%2BP1IGH5RxWThbORuCilSWroPi7rFbl94DQvk785hy2YJRZykQa6at%2Fej7Db0cE94hjnM5S0fifgtVDY%2BHQziMSFZuYE6uasbKdLWmOaOPCuVRzvUXCFykfqJulPDBAIGK6nYEMJvGAm338FkRWE4GvL6hBqWh8uga4EJlqLfIfkCXwtKihSdq2vDN2NbwNaAkUx37lm53D7oOJnKOYBOADavit6MLwewXbsmqNm5xFBvQj64Ls0JbFJuAcE54PaPT%2FBq9E0lDC%2BydPEBjqkAcxrGoIDTTrIvo4FEwz7a%2B2NxOO6NNzNACq0fzv45Llp4rkRlJxOomibO%2Bt5Vh%2BV6rGH91vcq%2BiJKOZuIM2j1mihbNX%2By9YcDdDlrZMs3MHKEKExDbLAkyADgeN%2FrHm%2BFaqMZw3B9QzXnAyEXgTkMZJ0PuYNHDhPrFGZ7Fe%2FnFCd2%2B3dcXjiJiOiDHjNXFQ%2BLxeXm7H6aBx%2F8qoDJlqbanJksMkw&X-Amz-Signature=7d20a6daa6ec67f169e15f5815963836aa42a28efba6992ee450c9968e097a28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
