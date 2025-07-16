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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CDM2PZ5%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIApPTtq%2Fv%2FWITPGInnxRUJrdG4v5F31zm%2BfgFB7a7XIbAiAK67Q%2Ft8HsWyiruk22%2FHSBfqkB%2B8iEuKBp%2BsCeHw5V2Cr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM0VRfcmIZxhiCoAOAKtwDrBF676IYgU9wj%2F6nXGH7qPVvocFRUuV3Z1QMOZn0Dydq2XrMd0WVZI06CvxdSFs7C56EEhNidOSlYxbv%2BHg%2BlxmtZZ84JiVPvA6Vrt16HSbU4swzlz%2FYRvU4Z9Uoc5wZonPgV%2Ff7LWmD0c8YU8QGh399IG5ib22Lb1sl55H8ODWhcuogu4dV5ig5FTugKFKL0RMus8faC4JYB4HI8u9A7r5jlKevvCu7cVyUSM3XWKTeUt5hYT%2F0UwQt1eQRBGK9%2FwJw309hhy%2FQzV3t23NLhBjp3lU4%2BCk%2BWQ8egxatIi%2FICuoiLCg0Nsdq1zr%2Bgn8HGheFI1qefnDjoSHXBQqYZsQg7dceQtq60lauBmPAKoqWnuRIlTQmJ%2BkvrLnEW3I1J5Y4F0iTrYR6yBoDxW55e1Wa9uq9xwRU4aFeGP62SS0LSGR%2BBMyhi91RPFcAzIP9RHYxrxlwbox80ptz%2BgHr2mZTFNQ34Os94x6KlgKXsR93mUqRApLgYBhMQ49m%2FDVSRHjKrZ0AyvMzDHAWVdudQtR7JDW91hbXpmH2JAkj%2BSwcVSnH5bihaDKB4e4ugrqXOLt2qm2kmsy%2BDJ%2B6DDCDJcLwHCgKuA1BofN21np2ACHTaarxPtkCB%2FJFwfIwpb3dwwY6pgGWS0j0FoLLD4m8ofpvJkHU8Vk98OQOzrzn4NNSkVdy25l6hT66ykrdMJpfE64V8%2BcnOivCJrVass9mXAtAQG4ELLqYrlh8PE%2FYjLJ53aeUjlQnyz0WM9kbCSqC7UgKqQ%2BZhuNnD9eOYcqc5g1xdF1dG9twYNoIhenSXTMDecOi5VFD4EYZbKyISpZpXH296dvt1VbE3Hx2GTTjMN0ODkQXQOJAb5dT&X-Amz-Signature=0b9761567e523dd5fd820e3eb7c982b305b04fd1c94fab633151311c598515e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CDM2PZ5%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIApPTtq%2Fv%2FWITPGInnxRUJrdG4v5F31zm%2BfgFB7a7XIbAiAK67Q%2Ft8HsWyiruk22%2FHSBfqkB%2B8iEuKBp%2BsCeHw5V2Cr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM0VRfcmIZxhiCoAOAKtwDrBF676IYgU9wj%2F6nXGH7qPVvocFRUuV3Z1QMOZn0Dydq2XrMd0WVZI06CvxdSFs7C56EEhNidOSlYxbv%2BHg%2BlxmtZZ84JiVPvA6Vrt16HSbU4swzlz%2FYRvU4Z9Uoc5wZonPgV%2Ff7LWmD0c8YU8QGh399IG5ib22Lb1sl55H8ODWhcuogu4dV5ig5FTugKFKL0RMus8faC4JYB4HI8u9A7r5jlKevvCu7cVyUSM3XWKTeUt5hYT%2F0UwQt1eQRBGK9%2FwJw309hhy%2FQzV3t23NLhBjp3lU4%2BCk%2BWQ8egxatIi%2FICuoiLCg0Nsdq1zr%2Bgn8HGheFI1qefnDjoSHXBQqYZsQg7dceQtq60lauBmPAKoqWnuRIlTQmJ%2BkvrLnEW3I1J5Y4F0iTrYR6yBoDxW55e1Wa9uq9xwRU4aFeGP62SS0LSGR%2BBMyhi91RPFcAzIP9RHYxrxlwbox80ptz%2BgHr2mZTFNQ34Os94x6KlgKXsR93mUqRApLgYBhMQ49m%2FDVSRHjKrZ0AyvMzDHAWVdudQtR7JDW91hbXpmH2JAkj%2BSwcVSnH5bihaDKB4e4ugrqXOLt2qm2kmsy%2BDJ%2B6DDCDJcLwHCgKuA1BofN21np2ACHTaarxPtkCB%2FJFwfIwpb3dwwY6pgGWS0j0FoLLD4m8ofpvJkHU8Vk98OQOzrzn4NNSkVdy25l6hT66ykrdMJpfE64V8%2BcnOivCJrVass9mXAtAQG4ELLqYrlh8PE%2FYjLJ53aeUjlQnyz0WM9kbCSqC7UgKqQ%2BZhuNnD9eOYcqc5g1xdF1dG9twYNoIhenSXTMDecOi5VFD4EYZbKyISpZpXH296dvt1VbE3Hx2GTTjMN0ODkQXQOJAb5dT&X-Amz-Signature=6d8366b2a07f26a03b3b95665e7917f9d4a868b6521c3865b30cbefd13bdc146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CDM2PZ5%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIApPTtq%2Fv%2FWITPGInnxRUJrdG4v5F31zm%2BfgFB7a7XIbAiAK67Q%2Ft8HsWyiruk22%2FHSBfqkB%2B8iEuKBp%2BsCeHw5V2Cr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM0VRfcmIZxhiCoAOAKtwDrBF676IYgU9wj%2F6nXGH7qPVvocFRUuV3Z1QMOZn0Dydq2XrMd0WVZI06CvxdSFs7C56EEhNidOSlYxbv%2BHg%2BlxmtZZ84JiVPvA6Vrt16HSbU4swzlz%2FYRvU4Z9Uoc5wZonPgV%2Ff7LWmD0c8YU8QGh399IG5ib22Lb1sl55H8ODWhcuogu4dV5ig5FTugKFKL0RMus8faC4JYB4HI8u9A7r5jlKevvCu7cVyUSM3XWKTeUt5hYT%2F0UwQt1eQRBGK9%2FwJw309hhy%2FQzV3t23NLhBjp3lU4%2BCk%2BWQ8egxatIi%2FICuoiLCg0Nsdq1zr%2Bgn8HGheFI1qefnDjoSHXBQqYZsQg7dceQtq60lauBmPAKoqWnuRIlTQmJ%2BkvrLnEW3I1J5Y4F0iTrYR6yBoDxW55e1Wa9uq9xwRU4aFeGP62SS0LSGR%2BBMyhi91RPFcAzIP9RHYxrxlwbox80ptz%2BgHr2mZTFNQ34Os94x6KlgKXsR93mUqRApLgYBhMQ49m%2FDVSRHjKrZ0AyvMzDHAWVdudQtR7JDW91hbXpmH2JAkj%2BSwcVSnH5bihaDKB4e4ugrqXOLt2qm2kmsy%2BDJ%2B6DDCDJcLwHCgKuA1BofN21np2ACHTaarxPtkCB%2FJFwfIwpb3dwwY6pgGWS0j0FoLLD4m8ofpvJkHU8Vk98OQOzrzn4NNSkVdy25l6hT66ykrdMJpfE64V8%2BcnOivCJrVass9mXAtAQG4ELLqYrlh8PE%2FYjLJ53aeUjlQnyz0WM9kbCSqC7UgKqQ%2BZhuNnD9eOYcqc5g1xdF1dG9twYNoIhenSXTMDecOi5VFD4EYZbKyISpZpXH296dvt1VbE3Hx2GTTjMN0ODkQXQOJAb5dT&X-Amz-Signature=e30d3d75b6f450f7a2ca1cffedd8e16190a2f76713811c72eea2c1db70809c9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CDM2PZ5%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIApPTtq%2Fv%2FWITPGInnxRUJrdG4v5F31zm%2BfgFB7a7XIbAiAK67Q%2Ft8HsWyiruk22%2FHSBfqkB%2B8iEuKBp%2BsCeHw5V2Cr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM0VRfcmIZxhiCoAOAKtwDrBF676IYgU9wj%2F6nXGH7qPVvocFRUuV3Z1QMOZn0Dydq2XrMd0WVZI06CvxdSFs7C56EEhNidOSlYxbv%2BHg%2BlxmtZZ84JiVPvA6Vrt16HSbU4swzlz%2FYRvU4Z9Uoc5wZonPgV%2Ff7LWmD0c8YU8QGh399IG5ib22Lb1sl55H8ODWhcuogu4dV5ig5FTugKFKL0RMus8faC4JYB4HI8u9A7r5jlKevvCu7cVyUSM3XWKTeUt5hYT%2F0UwQt1eQRBGK9%2FwJw309hhy%2FQzV3t23NLhBjp3lU4%2BCk%2BWQ8egxatIi%2FICuoiLCg0Nsdq1zr%2Bgn8HGheFI1qefnDjoSHXBQqYZsQg7dceQtq60lauBmPAKoqWnuRIlTQmJ%2BkvrLnEW3I1J5Y4F0iTrYR6yBoDxW55e1Wa9uq9xwRU4aFeGP62SS0LSGR%2BBMyhi91RPFcAzIP9RHYxrxlwbox80ptz%2BgHr2mZTFNQ34Os94x6KlgKXsR93mUqRApLgYBhMQ49m%2FDVSRHjKrZ0AyvMzDHAWVdudQtR7JDW91hbXpmH2JAkj%2BSwcVSnH5bihaDKB4e4ugrqXOLt2qm2kmsy%2BDJ%2B6DDCDJcLwHCgKuA1BofN21np2ACHTaarxPtkCB%2FJFwfIwpb3dwwY6pgGWS0j0FoLLD4m8ofpvJkHU8Vk98OQOzrzn4NNSkVdy25l6hT66ykrdMJpfE64V8%2BcnOivCJrVass9mXAtAQG4ELLqYrlh8PE%2FYjLJ53aeUjlQnyz0WM9kbCSqC7UgKqQ%2BZhuNnD9eOYcqc5g1xdF1dG9twYNoIhenSXTMDecOi5VFD4EYZbKyISpZpXH296dvt1VbE3Hx2GTTjMN0ODkQXQOJAb5dT&X-Amz-Signature=09b7ceb08cfe5f2d952654fdffac85111348dabc0ca4c200fac715cf5ae2df4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CDM2PZ5%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIApPTtq%2Fv%2FWITPGInnxRUJrdG4v5F31zm%2BfgFB7a7XIbAiAK67Q%2Ft8HsWyiruk22%2FHSBfqkB%2B8iEuKBp%2BsCeHw5V2Cr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM0VRfcmIZxhiCoAOAKtwDrBF676IYgU9wj%2F6nXGH7qPVvocFRUuV3Z1QMOZn0Dydq2XrMd0WVZI06CvxdSFs7C56EEhNidOSlYxbv%2BHg%2BlxmtZZ84JiVPvA6Vrt16HSbU4swzlz%2FYRvU4Z9Uoc5wZonPgV%2Ff7LWmD0c8YU8QGh399IG5ib22Lb1sl55H8ODWhcuogu4dV5ig5FTugKFKL0RMus8faC4JYB4HI8u9A7r5jlKevvCu7cVyUSM3XWKTeUt5hYT%2F0UwQt1eQRBGK9%2FwJw309hhy%2FQzV3t23NLhBjp3lU4%2BCk%2BWQ8egxatIi%2FICuoiLCg0Nsdq1zr%2Bgn8HGheFI1qefnDjoSHXBQqYZsQg7dceQtq60lauBmPAKoqWnuRIlTQmJ%2BkvrLnEW3I1J5Y4F0iTrYR6yBoDxW55e1Wa9uq9xwRU4aFeGP62SS0LSGR%2BBMyhi91RPFcAzIP9RHYxrxlwbox80ptz%2BgHr2mZTFNQ34Os94x6KlgKXsR93mUqRApLgYBhMQ49m%2FDVSRHjKrZ0AyvMzDHAWVdudQtR7JDW91hbXpmH2JAkj%2BSwcVSnH5bihaDKB4e4ugrqXOLt2qm2kmsy%2BDJ%2B6DDCDJcLwHCgKuA1BofN21np2ACHTaarxPtkCB%2FJFwfIwpb3dwwY6pgGWS0j0FoLLD4m8ofpvJkHU8Vk98OQOzrzn4NNSkVdy25l6hT66ykrdMJpfE64V8%2BcnOivCJrVass9mXAtAQG4ELLqYrlh8PE%2FYjLJ53aeUjlQnyz0WM9kbCSqC7UgKqQ%2BZhuNnD9eOYcqc5g1xdF1dG9twYNoIhenSXTMDecOi5VFD4EYZbKyISpZpXH296dvt1VbE3Hx2GTTjMN0ODkQXQOJAb5dT&X-Amz-Signature=504f7554c726bac56a90cb18fe52186e69c68bc062b3a1d4b69058102e5112a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
