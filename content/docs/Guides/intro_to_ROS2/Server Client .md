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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKG7MYIN%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIAutUvzlTRfLF%2ByV2f1XmxSlFlNnKmxU%2FyKClhcdsCLJAiEAov48v0nqz2oJkNI0lRTFvULx%2BOtnDfV781hhPAtUWAAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDANrPz8uGWaMfdEUcyrcA7Vb0huGS11%2FFzPDn6UWJAK%2BCR1qKKr5fgRbDwpp4ch%2FF7asQHWvXLRw6YOyQos6vMLmvjwJEPKk7N4FmpoJANEY6JRhwzoZbxwTV4Bq%2BufPaotjjC0aJ1Y2%2FzX3m7AhY7lMGCNbbs9jUoLKjskN0hHE42Ahp%2BSXkfX%2Blg6jPdxyB1%2FYLoEx1ug4BD%2BP0JEP4l4KECC1Wx43l5Z6TRg13AdlyNoiGFibb7mGadFGEipcQZmWO%2F%2BoPKWfTy%2FPnAJg5DyN8OkbHtB9GUrnlnDCUCzIQgCG3Eb0%2BHz1ScrLkVIIUC2jRh7t79R53%2BPjUcRCUJTK4CxQuO8WKjOaiQrYcr7XYSaRJfUD%2Fe60m3fsz9PzJKpAdFDlIunC%2Fm7TwKWkThTCN3jdOlMHm1JNKYtx3whyavUpArrX4NH5hwN1q6gJSg%2F3lLNMFUBW%2BL%2BOXoyge8IiRqay7%2B3%2BUKy84g7xuIzmv%2FW%2FhN2QdXzvfQKUe2vqLF7Eq%2B2a47nQhIk9rWlREBnCZqbI2C5iholtGf6b8h6KE7VFahMSiJyxVfqKdMTaEJd4tDPy0kM%2FcbQ8%2F%2BvSL18Ryn5dy%2BqiJ3T49nmDMhhwxhQItQ69C5V7bpmVMByMov1rNF%2FVCIGgG6EeMLGlqMMGOqUBrjnLD7gPDbNi7xx3LYwl8htra90XmtEKMdXny9ShH7PCCp4nP9Rwbop3D1dASLKXwFSIjdboyBnO0dGIz1H92qcS6Dtkc48pZmM2%2B63x3zxI19TtwcwUm969797rVmYCjVfe%2FB6ivhjgposcM5889l3dPP4j4R03U5xeEXJ8Y%2B%2F5JdCPRodINahlQdSczHi9i%2BygOx%2FmFmmuVHBCZlHsQOc9y%2Foz&X-Amz-Signature=a6b933e73546acaed4d1e44a2834739e94fcac9d2b1e727d57654e2b7d9960d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKG7MYIN%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIAutUvzlTRfLF%2ByV2f1XmxSlFlNnKmxU%2FyKClhcdsCLJAiEAov48v0nqz2oJkNI0lRTFvULx%2BOtnDfV781hhPAtUWAAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDANrPz8uGWaMfdEUcyrcA7Vb0huGS11%2FFzPDn6UWJAK%2BCR1qKKr5fgRbDwpp4ch%2FF7asQHWvXLRw6YOyQos6vMLmvjwJEPKk7N4FmpoJANEY6JRhwzoZbxwTV4Bq%2BufPaotjjC0aJ1Y2%2FzX3m7AhY7lMGCNbbs9jUoLKjskN0hHE42Ahp%2BSXkfX%2Blg6jPdxyB1%2FYLoEx1ug4BD%2BP0JEP4l4KECC1Wx43l5Z6TRg13AdlyNoiGFibb7mGadFGEipcQZmWO%2F%2BoPKWfTy%2FPnAJg5DyN8OkbHtB9GUrnlnDCUCzIQgCG3Eb0%2BHz1ScrLkVIIUC2jRh7t79R53%2BPjUcRCUJTK4CxQuO8WKjOaiQrYcr7XYSaRJfUD%2Fe60m3fsz9PzJKpAdFDlIunC%2Fm7TwKWkThTCN3jdOlMHm1JNKYtx3whyavUpArrX4NH5hwN1q6gJSg%2F3lLNMFUBW%2BL%2BOXoyge8IiRqay7%2B3%2BUKy84g7xuIzmv%2FW%2FhN2QdXzvfQKUe2vqLF7Eq%2B2a47nQhIk9rWlREBnCZqbI2C5iholtGf6b8h6KE7VFahMSiJyxVfqKdMTaEJd4tDPy0kM%2FcbQ8%2F%2BvSL18Ryn5dy%2BqiJ3T49nmDMhhwxhQItQ69C5V7bpmVMByMov1rNF%2FVCIGgG6EeMLGlqMMGOqUBrjnLD7gPDbNi7xx3LYwl8htra90XmtEKMdXny9ShH7PCCp4nP9Rwbop3D1dASLKXwFSIjdboyBnO0dGIz1H92qcS6Dtkc48pZmM2%2B63x3zxI19TtwcwUm969797rVmYCjVfe%2FB6ivhjgposcM5889l3dPP4j4R03U5xeEXJ8Y%2B%2F5JdCPRodINahlQdSczHi9i%2BygOx%2FmFmmuVHBCZlHsQOc9y%2Foz&X-Amz-Signature=3809e71b7e542ad2f18b86369cb83801a0d46426b1540ce8520c4d0cc8b11365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKG7MYIN%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIAutUvzlTRfLF%2ByV2f1XmxSlFlNnKmxU%2FyKClhcdsCLJAiEAov48v0nqz2oJkNI0lRTFvULx%2BOtnDfV781hhPAtUWAAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDANrPz8uGWaMfdEUcyrcA7Vb0huGS11%2FFzPDn6UWJAK%2BCR1qKKr5fgRbDwpp4ch%2FF7asQHWvXLRw6YOyQos6vMLmvjwJEPKk7N4FmpoJANEY6JRhwzoZbxwTV4Bq%2BufPaotjjC0aJ1Y2%2FzX3m7AhY7lMGCNbbs9jUoLKjskN0hHE42Ahp%2BSXkfX%2Blg6jPdxyB1%2FYLoEx1ug4BD%2BP0JEP4l4KECC1Wx43l5Z6TRg13AdlyNoiGFibb7mGadFGEipcQZmWO%2F%2BoPKWfTy%2FPnAJg5DyN8OkbHtB9GUrnlnDCUCzIQgCG3Eb0%2BHz1ScrLkVIIUC2jRh7t79R53%2BPjUcRCUJTK4CxQuO8WKjOaiQrYcr7XYSaRJfUD%2Fe60m3fsz9PzJKpAdFDlIunC%2Fm7TwKWkThTCN3jdOlMHm1JNKYtx3whyavUpArrX4NH5hwN1q6gJSg%2F3lLNMFUBW%2BL%2BOXoyge8IiRqay7%2B3%2BUKy84g7xuIzmv%2FW%2FhN2QdXzvfQKUe2vqLF7Eq%2B2a47nQhIk9rWlREBnCZqbI2C5iholtGf6b8h6KE7VFahMSiJyxVfqKdMTaEJd4tDPy0kM%2FcbQ8%2F%2BvSL18Ryn5dy%2BqiJ3T49nmDMhhwxhQItQ69C5V7bpmVMByMov1rNF%2FVCIGgG6EeMLGlqMMGOqUBrjnLD7gPDbNi7xx3LYwl8htra90XmtEKMdXny9ShH7PCCp4nP9Rwbop3D1dASLKXwFSIjdboyBnO0dGIz1H92qcS6Dtkc48pZmM2%2B63x3zxI19TtwcwUm969797rVmYCjVfe%2FB6ivhjgposcM5889l3dPP4j4R03U5xeEXJ8Y%2B%2F5JdCPRodINahlQdSczHi9i%2BygOx%2FmFmmuVHBCZlHsQOc9y%2Foz&X-Amz-Signature=d59a1410fe4d3abc23bf7abd69242aaa5f190bae2f64b404316c24c169f3d69c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKG7MYIN%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIAutUvzlTRfLF%2ByV2f1XmxSlFlNnKmxU%2FyKClhcdsCLJAiEAov48v0nqz2oJkNI0lRTFvULx%2BOtnDfV781hhPAtUWAAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDANrPz8uGWaMfdEUcyrcA7Vb0huGS11%2FFzPDn6UWJAK%2BCR1qKKr5fgRbDwpp4ch%2FF7asQHWvXLRw6YOyQos6vMLmvjwJEPKk7N4FmpoJANEY6JRhwzoZbxwTV4Bq%2BufPaotjjC0aJ1Y2%2FzX3m7AhY7lMGCNbbs9jUoLKjskN0hHE42Ahp%2BSXkfX%2Blg6jPdxyB1%2FYLoEx1ug4BD%2BP0JEP4l4KECC1Wx43l5Z6TRg13AdlyNoiGFibb7mGadFGEipcQZmWO%2F%2BoPKWfTy%2FPnAJg5DyN8OkbHtB9GUrnlnDCUCzIQgCG3Eb0%2BHz1ScrLkVIIUC2jRh7t79R53%2BPjUcRCUJTK4CxQuO8WKjOaiQrYcr7XYSaRJfUD%2Fe60m3fsz9PzJKpAdFDlIunC%2Fm7TwKWkThTCN3jdOlMHm1JNKYtx3whyavUpArrX4NH5hwN1q6gJSg%2F3lLNMFUBW%2BL%2BOXoyge8IiRqay7%2B3%2BUKy84g7xuIzmv%2FW%2FhN2QdXzvfQKUe2vqLF7Eq%2B2a47nQhIk9rWlREBnCZqbI2C5iholtGf6b8h6KE7VFahMSiJyxVfqKdMTaEJd4tDPy0kM%2FcbQ8%2F%2BvSL18Ryn5dy%2BqiJ3T49nmDMhhwxhQItQ69C5V7bpmVMByMov1rNF%2FVCIGgG6EeMLGlqMMGOqUBrjnLD7gPDbNi7xx3LYwl8htra90XmtEKMdXny9ShH7PCCp4nP9Rwbop3D1dASLKXwFSIjdboyBnO0dGIz1H92qcS6Dtkc48pZmM2%2B63x3zxI19TtwcwUm969797rVmYCjVfe%2FB6ivhjgposcM5889l3dPP4j4R03U5xeEXJ8Y%2B%2F5JdCPRodINahlQdSczHi9i%2BygOx%2FmFmmuVHBCZlHsQOc9y%2Foz&X-Amz-Signature=e6d62269a1fbe4b3ec71dea6775d7b091e704b49c4b5216ba3bb64d23184bf96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKG7MYIN%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIAutUvzlTRfLF%2ByV2f1XmxSlFlNnKmxU%2FyKClhcdsCLJAiEAov48v0nqz2oJkNI0lRTFvULx%2BOtnDfV781hhPAtUWAAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDANrPz8uGWaMfdEUcyrcA7Vb0huGS11%2FFzPDn6UWJAK%2BCR1qKKr5fgRbDwpp4ch%2FF7asQHWvXLRw6YOyQos6vMLmvjwJEPKk7N4FmpoJANEY6JRhwzoZbxwTV4Bq%2BufPaotjjC0aJ1Y2%2FzX3m7AhY7lMGCNbbs9jUoLKjskN0hHE42Ahp%2BSXkfX%2Blg6jPdxyB1%2FYLoEx1ug4BD%2BP0JEP4l4KECC1Wx43l5Z6TRg13AdlyNoiGFibb7mGadFGEipcQZmWO%2F%2BoPKWfTy%2FPnAJg5DyN8OkbHtB9GUrnlnDCUCzIQgCG3Eb0%2BHz1ScrLkVIIUC2jRh7t79R53%2BPjUcRCUJTK4CxQuO8WKjOaiQrYcr7XYSaRJfUD%2Fe60m3fsz9PzJKpAdFDlIunC%2Fm7TwKWkThTCN3jdOlMHm1JNKYtx3whyavUpArrX4NH5hwN1q6gJSg%2F3lLNMFUBW%2BL%2BOXoyge8IiRqay7%2B3%2BUKy84g7xuIzmv%2FW%2FhN2QdXzvfQKUe2vqLF7Eq%2B2a47nQhIk9rWlREBnCZqbI2C5iholtGf6b8h6KE7VFahMSiJyxVfqKdMTaEJd4tDPy0kM%2FcbQ8%2F%2BvSL18Ryn5dy%2BqiJ3T49nmDMhhwxhQItQ69C5V7bpmVMByMov1rNF%2FVCIGgG6EeMLGlqMMGOqUBrjnLD7gPDbNi7xx3LYwl8htra90XmtEKMdXny9ShH7PCCp4nP9Rwbop3D1dASLKXwFSIjdboyBnO0dGIz1H92qcS6Dtkc48pZmM2%2B63x3zxI19TtwcwUm969797rVmYCjVfe%2FB6ivhjgposcM5889l3dPP4j4R03U5xeEXJ8Y%2B%2F5JdCPRodINahlQdSczHi9i%2BygOx%2FmFmmuVHBCZlHsQOc9y%2Foz&X-Amz-Signature=6405f6f8dac72592b3a39da57b4622ca04bc2026e0a542772da68a4b7f4a461f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
