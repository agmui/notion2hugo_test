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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O5UGY6E%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGxpKrNPqZV1ZDNNDV1W9E1CexlH%2Bx3JiNPuHi4FWptAiBfIp%2F%2F6r8IeD0li2P7JZdnuT163R%2BjocIsEKt7DPk1yiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2RVCh0nUJ3ItdqUYKtwDRdW8uqlM6PwMnaWIDgnVqF%2Bk71ewgq9HtKFYTK%2FbkaQ9XT4YquydOhJ7EkTIuHuypuoVFCJjDLjlkR3bFLMzAxml4f%2BxrxN0052beTngHMitXISosSSOjZ1AFRPxLJvW%2BFsAVawACBo3uNCk5Tm7V69jbAsnTdCr7DpKRzrjwXZ0XnmphrJNr5G0fKd3UTeDZFx7jujeEqIrdtl%2B0SM63iT3vcQ4iFgpH3X%2BojiKo3%2FRNWkmlcbWE%2BrVgGYtmBlSI0UWgobwcZdHTbO9g1BqK9LH8ma1IE8K4EvlZreMekbeSbNbg5gjfvKo60mK2vHjeR1d8Coyu5%2BWFz7%2BfLbXyp78yz7lhxx7kWNJEUnfyfv1y9Y0omNkFVnpfY3lsLyil%2FaAd5LFKoIKlO35%2BbCW0bGENPGdKGoGndjSKPUw8pZzGImrUMiR%2Bv2YVKrHIozMnMYgmPSRO%2Fuv9BT%2FepHeDDGbZgtyRrZ2b9%2BbT8YBKVbJ558PpLpA7P4rpaVqRk2yXlrGY1S%2FJtAynYZydCMlJRphwQ8%2FA3kDiIKOXZugKvdkuX3iUz4Gtqx%2FTsJYoK47Z9dkgTyAYa0SSku4Hh1Agl4Im%2B91yWEdRvO6fifjvVYBxXGTQiZVdt9%2Bvgkw7rXRwgY6pgH3zopHe5CPKg1F6kOvL20%2B%2F5cEc4wtabWotYLg0eluqhvVbQC6Ti4FogBvkR6bv9Nwz70DOdZR9q5B2KDpTP5v9oCFFTTR6PVUfIHUP5Y9X08iDY4gNN4HD3HYeZstnQOy2HlwuGYSqlZx3dox%2BRPf%2Fzr%2FMilr7dOdFioXNhqTzb3dEKWa2puz1NUL5NmEua2g7s1neb%2BUXFJgp3LJ4q67cgDaS7D0&X-Amz-Signature=8047f05c1ac2abb28143933ddd7f2d256a8af16a244df1adf7b9737deb10b734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O5UGY6E%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGxpKrNPqZV1ZDNNDV1W9E1CexlH%2Bx3JiNPuHi4FWptAiBfIp%2F%2F6r8IeD0li2P7JZdnuT163R%2BjocIsEKt7DPk1yiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2RVCh0nUJ3ItdqUYKtwDRdW8uqlM6PwMnaWIDgnVqF%2Bk71ewgq9HtKFYTK%2FbkaQ9XT4YquydOhJ7EkTIuHuypuoVFCJjDLjlkR3bFLMzAxml4f%2BxrxN0052beTngHMitXISosSSOjZ1AFRPxLJvW%2BFsAVawACBo3uNCk5Tm7V69jbAsnTdCr7DpKRzrjwXZ0XnmphrJNr5G0fKd3UTeDZFx7jujeEqIrdtl%2B0SM63iT3vcQ4iFgpH3X%2BojiKo3%2FRNWkmlcbWE%2BrVgGYtmBlSI0UWgobwcZdHTbO9g1BqK9LH8ma1IE8K4EvlZreMekbeSbNbg5gjfvKo60mK2vHjeR1d8Coyu5%2BWFz7%2BfLbXyp78yz7lhxx7kWNJEUnfyfv1y9Y0omNkFVnpfY3lsLyil%2FaAd5LFKoIKlO35%2BbCW0bGENPGdKGoGndjSKPUw8pZzGImrUMiR%2Bv2YVKrHIozMnMYgmPSRO%2Fuv9BT%2FepHeDDGbZgtyRrZ2b9%2BbT8YBKVbJ558PpLpA7P4rpaVqRk2yXlrGY1S%2FJtAynYZydCMlJRphwQ8%2FA3kDiIKOXZugKvdkuX3iUz4Gtqx%2FTsJYoK47Z9dkgTyAYa0SSku4Hh1Agl4Im%2B91yWEdRvO6fifjvVYBxXGTQiZVdt9%2Bvgkw7rXRwgY6pgH3zopHe5CPKg1F6kOvL20%2B%2F5cEc4wtabWotYLg0eluqhvVbQC6Ti4FogBvkR6bv9Nwz70DOdZR9q5B2KDpTP5v9oCFFTTR6PVUfIHUP5Y9X08iDY4gNN4HD3HYeZstnQOy2HlwuGYSqlZx3dox%2BRPf%2Fzr%2FMilr7dOdFioXNhqTzb3dEKWa2puz1NUL5NmEua2g7s1neb%2BUXFJgp3LJ4q67cgDaS7D0&X-Amz-Signature=d33f4a089d7a1cb87fd9d6bcbc6c9f7e8f02178339c9c0046ad5989ecdf03ef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O5UGY6E%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGxpKrNPqZV1ZDNNDV1W9E1CexlH%2Bx3JiNPuHi4FWptAiBfIp%2F%2F6r8IeD0li2P7JZdnuT163R%2BjocIsEKt7DPk1yiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2RVCh0nUJ3ItdqUYKtwDRdW8uqlM6PwMnaWIDgnVqF%2Bk71ewgq9HtKFYTK%2FbkaQ9XT4YquydOhJ7EkTIuHuypuoVFCJjDLjlkR3bFLMzAxml4f%2BxrxN0052beTngHMitXISosSSOjZ1AFRPxLJvW%2BFsAVawACBo3uNCk5Tm7V69jbAsnTdCr7DpKRzrjwXZ0XnmphrJNr5G0fKd3UTeDZFx7jujeEqIrdtl%2B0SM63iT3vcQ4iFgpH3X%2BojiKo3%2FRNWkmlcbWE%2BrVgGYtmBlSI0UWgobwcZdHTbO9g1BqK9LH8ma1IE8K4EvlZreMekbeSbNbg5gjfvKo60mK2vHjeR1d8Coyu5%2BWFz7%2BfLbXyp78yz7lhxx7kWNJEUnfyfv1y9Y0omNkFVnpfY3lsLyil%2FaAd5LFKoIKlO35%2BbCW0bGENPGdKGoGndjSKPUw8pZzGImrUMiR%2Bv2YVKrHIozMnMYgmPSRO%2Fuv9BT%2FepHeDDGbZgtyRrZ2b9%2BbT8YBKVbJ558PpLpA7P4rpaVqRk2yXlrGY1S%2FJtAynYZydCMlJRphwQ8%2FA3kDiIKOXZugKvdkuX3iUz4Gtqx%2FTsJYoK47Z9dkgTyAYa0SSku4Hh1Agl4Im%2B91yWEdRvO6fifjvVYBxXGTQiZVdt9%2Bvgkw7rXRwgY6pgH3zopHe5CPKg1F6kOvL20%2B%2F5cEc4wtabWotYLg0eluqhvVbQC6Ti4FogBvkR6bv9Nwz70DOdZR9q5B2KDpTP5v9oCFFTTR6PVUfIHUP5Y9X08iDY4gNN4HD3HYeZstnQOy2HlwuGYSqlZx3dox%2BRPf%2Fzr%2FMilr7dOdFioXNhqTzb3dEKWa2puz1NUL5NmEua2g7s1neb%2BUXFJgp3LJ4q67cgDaS7D0&X-Amz-Signature=2aa9466f63952bbb8d7672347b1124742e861fd7102ab0af1168d1d9e4cdf471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O5UGY6E%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGxpKrNPqZV1ZDNNDV1W9E1CexlH%2Bx3JiNPuHi4FWptAiBfIp%2F%2F6r8IeD0li2P7JZdnuT163R%2BjocIsEKt7DPk1yiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2RVCh0nUJ3ItdqUYKtwDRdW8uqlM6PwMnaWIDgnVqF%2Bk71ewgq9HtKFYTK%2FbkaQ9XT4YquydOhJ7EkTIuHuypuoVFCJjDLjlkR3bFLMzAxml4f%2BxrxN0052beTngHMitXISosSSOjZ1AFRPxLJvW%2BFsAVawACBo3uNCk5Tm7V69jbAsnTdCr7DpKRzrjwXZ0XnmphrJNr5G0fKd3UTeDZFx7jujeEqIrdtl%2B0SM63iT3vcQ4iFgpH3X%2BojiKo3%2FRNWkmlcbWE%2BrVgGYtmBlSI0UWgobwcZdHTbO9g1BqK9LH8ma1IE8K4EvlZreMekbeSbNbg5gjfvKo60mK2vHjeR1d8Coyu5%2BWFz7%2BfLbXyp78yz7lhxx7kWNJEUnfyfv1y9Y0omNkFVnpfY3lsLyil%2FaAd5LFKoIKlO35%2BbCW0bGENPGdKGoGndjSKPUw8pZzGImrUMiR%2Bv2YVKrHIozMnMYgmPSRO%2Fuv9BT%2FepHeDDGbZgtyRrZ2b9%2BbT8YBKVbJ558PpLpA7P4rpaVqRk2yXlrGY1S%2FJtAynYZydCMlJRphwQ8%2FA3kDiIKOXZugKvdkuX3iUz4Gtqx%2FTsJYoK47Z9dkgTyAYa0SSku4Hh1Agl4Im%2B91yWEdRvO6fifjvVYBxXGTQiZVdt9%2Bvgkw7rXRwgY6pgH3zopHe5CPKg1F6kOvL20%2B%2F5cEc4wtabWotYLg0eluqhvVbQC6Ti4FogBvkR6bv9Nwz70DOdZR9q5B2KDpTP5v9oCFFTTR6PVUfIHUP5Y9X08iDY4gNN4HD3HYeZstnQOy2HlwuGYSqlZx3dox%2BRPf%2Fzr%2FMilr7dOdFioXNhqTzb3dEKWa2puz1NUL5NmEua2g7s1neb%2BUXFJgp3LJ4q67cgDaS7D0&X-Amz-Signature=306c5b84d54323f2f950c4044ab531ee3b8aefd651d4a52f1337f558ed64e7f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O5UGY6E%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGxpKrNPqZV1ZDNNDV1W9E1CexlH%2Bx3JiNPuHi4FWptAiBfIp%2F%2F6r8IeD0li2P7JZdnuT163R%2BjocIsEKt7DPk1yiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2RVCh0nUJ3ItdqUYKtwDRdW8uqlM6PwMnaWIDgnVqF%2Bk71ewgq9HtKFYTK%2FbkaQ9XT4YquydOhJ7EkTIuHuypuoVFCJjDLjlkR3bFLMzAxml4f%2BxrxN0052beTngHMitXISosSSOjZ1AFRPxLJvW%2BFsAVawACBo3uNCk5Tm7V69jbAsnTdCr7DpKRzrjwXZ0XnmphrJNr5G0fKd3UTeDZFx7jujeEqIrdtl%2B0SM63iT3vcQ4iFgpH3X%2BojiKo3%2FRNWkmlcbWE%2BrVgGYtmBlSI0UWgobwcZdHTbO9g1BqK9LH8ma1IE8K4EvlZreMekbeSbNbg5gjfvKo60mK2vHjeR1d8Coyu5%2BWFz7%2BfLbXyp78yz7lhxx7kWNJEUnfyfv1y9Y0omNkFVnpfY3lsLyil%2FaAd5LFKoIKlO35%2BbCW0bGENPGdKGoGndjSKPUw8pZzGImrUMiR%2Bv2YVKrHIozMnMYgmPSRO%2Fuv9BT%2FepHeDDGbZgtyRrZ2b9%2BbT8YBKVbJ558PpLpA7P4rpaVqRk2yXlrGY1S%2FJtAynYZydCMlJRphwQ8%2FA3kDiIKOXZugKvdkuX3iUz4Gtqx%2FTsJYoK47Z9dkgTyAYa0SSku4Hh1Agl4Im%2B91yWEdRvO6fifjvVYBxXGTQiZVdt9%2Bvgkw7rXRwgY6pgH3zopHe5CPKg1F6kOvL20%2B%2F5cEc4wtabWotYLg0eluqhvVbQC6Ti4FogBvkR6bv9Nwz70DOdZR9q5B2KDpTP5v9oCFFTTR6PVUfIHUP5Y9X08iDY4gNN4HD3HYeZstnQOy2HlwuGYSqlZx3dox%2BRPf%2Fzr%2FMilr7dOdFioXNhqTzb3dEKWa2puz1NUL5NmEua2g7s1neb%2BUXFJgp3LJ4q67cgDaS7D0&X-Amz-Signature=e16a01a88f631726b5aec3d8c73bf99a33018d988e623bdedc93d6a75525e7d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
