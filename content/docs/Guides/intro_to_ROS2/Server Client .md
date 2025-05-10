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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBUWWR7T%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDmavr2LV6MZQUfZJ2ShJrWyYcSlpEsluKrT3ZdUd3i%2BgIgEdmraVyx%2B4Ou8IBE2EvX1jjEKaq2U5hcp2%2BYuIyf5bQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHoEo29ZuddbmNT29yrcA2KDIY5lOqrv56%2F9n6SvmG%2B9VIK%2FClKPLppHzkr1BwP%2BTHhDk0ACgVf8ISdAl%2BNk2NuB4Wc55b327i6o%2FUO%2Bz%2BcFQCz%2BWeyjQMN0nWVlfkO5ESW9ajuNRbHVUYaAUrffBPQE%2BfJEWQn2BjkkGVMaBBducb3lobWA9v4h930BTRP5RZDOzOK3mjMO0Z0gJOuPPpzAS8cPOBJBFHEMs1CD9Z5ovBYVBs59Y%2FJYEpHoo6k%2BkzuPXDVncTfVR5n8H7mIxGNJSyZXqaiiOS%2FnGL1tqt2oqCmEt0NGzDfRu9m6gbohxTC388AJAMDV%2Fa0fJo9nQiea9su%2BJUWenpy0F1N8kFQa%2FJt%2BEfUIxtcTdduqkc4Yfl0fsITkxpRay9CfMT09On8zosSeG3otiNkYlQGQngJq1nhAGU4zof5rW%2BYao9B9sycUwKPos7PPFbKCCAtfrrrf9J2c7A51%2Bytoz%2Fav1FQ7YqUvhZWWOsquWdUTdmyWZ5mx1%2B0cHuZoLniTqU6%2FFFHeP2qeIifD%2BsOjD1bYrVTIiYHgXM%2BUOYR8JtPjzR%2BsUaqH7hsyZqeNp3GTzwv8ULPwVr4UBeP2SkZ45mQ4y5lagC4yqLit9uawJJEnBy0MplpOMovQNzzPJm8SMLrS%2FsAGOqUBDSdDYdSiktzc7cIqJOa3A9vX8x63HYznM3lHe%2BfMSsAJfOXdpHC8GzgIDA9e3mS6bupa9O1c4ji2gY%2BfTOrJs6iJqFisUbXw7dGY0XZUdNQyNvYlDFjxBRy6HbGvxf2zd9JDE70qAWxeO5u74lgKpje1CyEZHrwD2mRnAm824o0cNckgjchR1Vr32ZM4TmPud%2FV5FPsdw1e6zaghv5X2ytcgEO%2F6&X-Amz-Signature=fde3ac319fec9d1508e2007cc4322f3e92c962cf5aa98d02ee1a02a6c4dbaf9b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBUWWR7T%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDmavr2LV6MZQUfZJ2ShJrWyYcSlpEsluKrT3ZdUd3i%2BgIgEdmraVyx%2B4Ou8IBE2EvX1jjEKaq2U5hcp2%2BYuIyf5bQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHoEo29ZuddbmNT29yrcA2KDIY5lOqrv56%2F9n6SvmG%2B9VIK%2FClKPLppHzkr1BwP%2BTHhDk0ACgVf8ISdAl%2BNk2NuB4Wc55b327i6o%2FUO%2Bz%2BcFQCz%2BWeyjQMN0nWVlfkO5ESW9ajuNRbHVUYaAUrffBPQE%2BfJEWQn2BjkkGVMaBBducb3lobWA9v4h930BTRP5RZDOzOK3mjMO0Z0gJOuPPpzAS8cPOBJBFHEMs1CD9Z5ovBYVBs59Y%2FJYEpHoo6k%2BkzuPXDVncTfVR5n8H7mIxGNJSyZXqaiiOS%2FnGL1tqt2oqCmEt0NGzDfRu9m6gbohxTC388AJAMDV%2Fa0fJo9nQiea9su%2BJUWenpy0F1N8kFQa%2FJt%2BEfUIxtcTdduqkc4Yfl0fsITkxpRay9CfMT09On8zosSeG3otiNkYlQGQngJq1nhAGU4zof5rW%2BYao9B9sycUwKPos7PPFbKCCAtfrrrf9J2c7A51%2Bytoz%2Fav1FQ7YqUvhZWWOsquWdUTdmyWZ5mx1%2B0cHuZoLniTqU6%2FFFHeP2qeIifD%2BsOjD1bYrVTIiYHgXM%2BUOYR8JtPjzR%2BsUaqH7hsyZqeNp3GTzwv8ULPwVr4UBeP2SkZ45mQ4y5lagC4yqLit9uawJJEnBy0MplpOMovQNzzPJm8SMLrS%2FsAGOqUBDSdDYdSiktzc7cIqJOa3A9vX8x63HYznM3lHe%2BfMSsAJfOXdpHC8GzgIDA9e3mS6bupa9O1c4ji2gY%2BfTOrJs6iJqFisUbXw7dGY0XZUdNQyNvYlDFjxBRy6HbGvxf2zd9JDE70qAWxeO5u74lgKpje1CyEZHrwD2mRnAm824o0cNckgjchR1Vr32ZM4TmPud%2FV5FPsdw1e6zaghv5X2ytcgEO%2F6&X-Amz-Signature=9d1500b00474816367ee597ba91475f5e5b5a68425b225f0419cbd46acb7b587&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBUWWR7T%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDmavr2LV6MZQUfZJ2ShJrWyYcSlpEsluKrT3ZdUd3i%2BgIgEdmraVyx%2B4Ou8IBE2EvX1jjEKaq2U5hcp2%2BYuIyf5bQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHoEo29ZuddbmNT29yrcA2KDIY5lOqrv56%2F9n6SvmG%2B9VIK%2FClKPLppHzkr1BwP%2BTHhDk0ACgVf8ISdAl%2BNk2NuB4Wc55b327i6o%2FUO%2Bz%2BcFQCz%2BWeyjQMN0nWVlfkO5ESW9ajuNRbHVUYaAUrffBPQE%2BfJEWQn2BjkkGVMaBBducb3lobWA9v4h930BTRP5RZDOzOK3mjMO0Z0gJOuPPpzAS8cPOBJBFHEMs1CD9Z5ovBYVBs59Y%2FJYEpHoo6k%2BkzuPXDVncTfVR5n8H7mIxGNJSyZXqaiiOS%2FnGL1tqt2oqCmEt0NGzDfRu9m6gbohxTC388AJAMDV%2Fa0fJo9nQiea9su%2BJUWenpy0F1N8kFQa%2FJt%2BEfUIxtcTdduqkc4Yfl0fsITkxpRay9CfMT09On8zosSeG3otiNkYlQGQngJq1nhAGU4zof5rW%2BYao9B9sycUwKPos7PPFbKCCAtfrrrf9J2c7A51%2Bytoz%2Fav1FQ7YqUvhZWWOsquWdUTdmyWZ5mx1%2B0cHuZoLniTqU6%2FFFHeP2qeIifD%2BsOjD1bYrVTIiYHgXM%2BUOYR8JtPjzR%2BsUaqH7hsyZqeNp3GTzwv8ULPwVr4UBeP2SkZ45mQ4y5lagC4yqLit9uawJJEnBy0MplpOMovQNzzPJm8SMLrS%2FsAGOqUBDSdDYdSiktzc7cIqJOa3A9vX8x63HYznM3lHe%2BfMSsAJfOXdpHC8GzgIDA9e3mS6bupa9O1c4ji2gY%2BfTOrJs6iJqFisUbXw7dGY0XZUdNQyNvYlDFjxBRy6HbGvxf2zd9JDE70qAWxeO5u74lgKpje1CyEZHrwD2mRnAm824o0cNckgjchR1Vr32ZM4TmPud%2FV5FPsdw1e6zaghv5X2ytcgEO%2F6&X-Amz-Signature=697c6fe125e86fba234cca4803907da00c7bd5523d8e1ccd8c18b1f7ee08e48a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBUWWR7T%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDmavr2LV6MZQUfZJ2ShJrWyYcSlpEsluKrT3ZdUd3i%2BgIgEdmraVyx%2B4Ou8IBE2EvX1jjEKaq2U5hcp2%2BYuIyf5bQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHoEo29ZuddbmNT29yrcA2KDIY5lOqrv56%2F9n6SvmG%2B9VIK%2FClKPLppHzkr1BwP%2BTHhDk0ACgVf8ISdAl%2BNk2NuB4Wc55b327i6o%2FUO%2Bz%2BcFQCz%2BWeyjQMN0nWVlfkO5ESW9ajuNRbHVUYaAUrffBPQE%2BfJEWQn2BjkkGVMaBBducb3lobWA9v4h930BTRP5RZDOzOK3mjMO0Z0gJOuPPpzAS8cPOBJBFHEMs1CD9Z5ovBYVBs59Y%2FJYEpHoo6k%2BkzuPXDVncTfVR5n8H7mIxGNJSyZXqaiiOS%2FnGL1tqt2oqCmEt0NGzDfRu9m6gbohxTC388AJAMDV%2Fa0fJo9nQiea9su%2BJUWenpy0F1N8kFQa%2FJt%2BEfUIxtcTdduqkc4Yfl0fsITkxpRay9CfMT09On8zosSeG3otiNkYlQGQngJq1nhAGU4zof5rW%2BYao9B9sycUwKPos7PPFbKCCAtfrrrf9J2c7A51%2Bytoz%2Fav1FQ7YqUvhZWWOsquWdUTdmyWZ5mx1%2B0cHuZoLniTqU6%2FFFHeP2qeIifD%2BsOjD1bYrVTIiYHgXM%2BUOYR8JtPjzR%2BsUaqH7hsyZqeNp3GTzwv8ULPwVr4UBeP2SkZ45mQ4y5lagC4yqLit9uawJJEnBy0MplpOMovQNzzPJm8SMLrS%2FsAGOqUBDSdDYdSiktzc7cIqJOa3A9vX8x63HYznM3lHe%2BfMSsAJfOXdpHC8GzgIDA9e3mS6bupa9O1c4ji2gY%2BfTOrJs6iJqFisUbXw7dGY0XZUdNQyNvYlDFjxBRy6HbGvxf2zd9JDE70qAWxeO5u74lgKpje1CyEZHrwD2mRnAm824o0cNckgjchR1Vr32ZM4TmPud%2FV5FPsdw1e6zaghv5X2ytcgEO%2F6&X-Amz-Signature=82dcd780b5193bfd8c51121da00bbd7bbdd7e8e32d452d2d6e46663984077cf7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBUWWR7T%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDmavr2LV6MZQUfZJ2ShJrWyYcSlpEsluKrT3ZdUd3i%2BgIgEdmraVyx%2B4Ou8IBE2EvX1jjEKaq2U5hcp2%2BYuIyf5bQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHoEo29ZuddbmNT29yrcA2KDIY5lOqrv56%2F9n6SvmG%2B9VIK%2FClKPLppHzkr1BwP%2BTHhDk0ACgVf8ISdAl%2BNk2NuB4Wc55b327i6o%2FUO%2Bz%2BcFQCz%2BWeyjQMN0nWVlfkO5ESW9ajuNRbHVUYaAUrffBPQE%2BfJEWQn2BjkkGVMaBBducb3lobWA9v4h930BTRP5RZDOzOK3mjMO0Z0gJOuPPpzAS8cPOBJBFHEMs1CD9Z5ovBYVBs59Y%2FJYEpHoo6k%2BkzuPXDVncTfVR5n8H7mIxGNJSyZXqaiiOS%2FnGL1tqt2oqCmEt0NGzDfRu9m6gbohxTC388AJAMDV%2Fa0fJo9nQiea9su%2BJUWenpy0F1N8kFQa%2FJt%2BEfUIxtcTdduqkc4Yfl0fsITkxpRay9CfMT09On8zosSeG3otiNkYlQGQngJq1nhAGU4zof5rW%2BYao9B9sycUwKPos7PPFbKCCAtfrrrf9J2c7A51%2Bytoz%2Fav1FQ7YqUvhZWWOsquWdUTdmyWZ5mx1%2B0cHuZoLniTqU6%2FFFHeP2qeIifD%2BsOjD1bYrVTIiYHgXM%2BUOYR8JtPjzR%2BsUaqH7hsyZqeNp3GTzwv8ULPwVr4UBeP2SkZ45mQ4y5lagC4yqLit9uawJJEnBy0MplpOMovQNzzPJm8SMLrS%2FsAGOqUBDSdDYdSiktzc7cIqJOa3A9vX8x63HYznM3lHe%2BfMSsAJfOXdpHC8GzgIDA9e3mS6bupa9O1c4ji2gY%2BfTOrJs6iJqFisUbXw7dGY0XZUdNQyNvYlDFjxBRy6HbGvxf2zd9JDE70qAWxeO5u74lgKpje1CyEZHrwD2mRnAm824o0cNckgjchR1Vr32ZM4TmPud%2FV5FPsdw1e6zaghv5X2ytcgEO%2F6&X-Amz-Signature=1bb200393c40200a1cec962b6ede2ee7e8a56647f14e4559231433e610e92d75&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
