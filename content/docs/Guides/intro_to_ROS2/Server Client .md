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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CWVZYRN%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIGzFQJPUobgUFScZm3q3x6VJJm0RoE68f%2B%2FB24kcUUbiAiEApZpxpVU%2BQa20CEsQSliG2v%2B3N3csjbrv1jmI6TNAaJEqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJM8NGsJdd1SbgFz8SrcA%2Bz71qZ09cOn6vPjnfQU7asBTfm58JgdW%2Bwtp%2FnkmO3ETNAtf%2B5lrS3C%2BU2uBQyF42QVlzHO%2FwGO%2BTQOo1OQ3R6Q%2B96dGOgflqcadJT0AoryXfa8hzRuOGOnj%2BoGKp%2ButQMK3SXTLXAVaA47Mqb6w7aN4eoZQscMX5RYi5VXhUs8Vw7ZZJpZbkjDy0nH%2FWC%2FWjeAhDOvk8A8SGRMdU%2FhaxpgVrJch%2BVnHBoyCcNmbfrcKd0lcCJ%2FzsnXTSOyAUzJpxw3wslHGW5OJ9wKlZSle%2ByUIFoqh4JjK%2BPgnua6xL08Ast4JGpMPOeEI0mtbfxU18%2FtRHFhcyp5%2Ftv%2BdWvLeIDF%2F7rqVy%2F8pqLIOrZ8Hwf73hHHNm%2BjWRvoCifrJQ0vrjjuFen8FiyasZSERBNeLCpWYAw4nUWDrK%2FUOtls%2BZ4VN8gUdnrJEyD9x255ETrc2KUIh0rcyRFwNYl14%2FNwx79sVLpWRapK%2FDlrq1gNUF4dPqb1GoA2uYPA7k0mxLMVCYPvr%2BOFXjq7cyvzxysDOfwdG1vhhHIkN2PU%2F17TdMachgVgz622D1%2FrL%2F7yTN7VLWGt4LgBInD9rFCaC6kZyues3pyh9xzqZDLI4U304X313%2FV85m7%2FBt2tiFJiMMHy%2FcUGOqUBKAr7wuH%2FolcQp3uJS8dAb6Np4%2FD%2FiYKjs%2F9ZV7D8%2F1Zb3diqz0vcjcGABegUGcGbrrbXvWiAfmFpcUIqns2rZluWYTe6uKY1GevasoA%2FmMsETs7bKfSE1lzsvI2fQ8ztjh7Mm1QXgesXsx8bqrTyk8LB4omfdRyW0U1jObwgJHm4RE0A8krh7HvPMjQSnAGubiQMh%2BES37aA1w1Rj0kFbi1%2FYXLV&X-Amz-Signature=2031433a1996addfa868a2318cdc5035b7b47b490baa6fe00cfc3f8a9c1e9d13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CWVZYRN%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIGzFQJPUobgUFScZm3q3x6VJJm0RoE68f%2B%2FB24kcUUbiAiEApZpxpVU%2BQa20CEsQSliG2v%2B3N3csjbrv1jmI6TNAaJEqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJM8NGsJdd1SbgFz8SrcA%2Bz71qZ09cOn6vPjnfQU7asBTfm58JgdW%2Bwtp%2FnkmO3ETNAtf%2B5lrS3C%2BU2uBQyF42QVlzHO%2FwGO%2BTQOo1OQ3R6Q%2B96dGOgflqcadJT0AoryXfa8hzRuOGOnj%2BoGKp%2ButQMK3SXTLXAVaA47Mqb6w7aN4eoZQscMX5RYi5VXhUs8Vw7ZZJpZbkjDy0nH%2FWC%2FWjeAhDOvk8A8SGRMdU%2FhaxpgVrJch%2BVnHBoyCcNmbfrcKd0lcCJ%2FzsnXTSOyAUzJpxw3wslHGW5OJ9wKlZSle%2ByUIFoqh4JjK%2BPgnua6xL08Ast4JGpMPOeEI0mtbfxU18%2FtRHFhcyp5%2Ftv%2BdWvLeIDF%2F7rqVy%2F8pqLIOrZ8Hwf73hHHNm%2BjWRvoCifrJQ0vrjjuFen8FiyasZSERBNeLCpWYAw4nUWDrK%2FUOtls%2BZ4VN8gUdnrJEyD9x255ETrc2KUIh0rcyRFwNYl14%2FNwx79sVLpWRapK%2FDlrq1gNUF4dPqb1GoA2uYPA7k0mxLMVCYPvr%2BOFXjq7cyvzxysDOfwdG1vhhHIkN2PU%2F17TdMachgVgz622D1%2FrL%2F7yTN7VLWGt4LgBInD9rFCaC6kZyues3pyh9xzqZDLI4U304X313%2FV85m7%2FBt2tiFJiMMHy%2FcUGOqUBKAr7wuH%2FolcQp3uJS8dAb6Np4%2FD%2FiYKjs%2F9ZV7D8%2F1Zb3diqz0vcjcGABegUGcGbrrbXvWiAfmFpcUIqns2rZluWYTe6uKY1GevasoA%2FmMsETs7bKfSE1lzsvI2fQ8ztjh7Mm1QXgesXsx8bqrTyk8LB4omfdRyW0U1jObwgJHm4RE0A8krh7HvPMjQSnAGubiQMh%2BES37aA1w1Rj0kFbi1%2FYXLV&X-Amz-Signature=7f69c96b417d6e8b04b91678dad722f2f9731ab50b187410e6760ed7689a6f36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CWVZYRN%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIGzFQJPUobgUFScZm3q3x6VJJm0RoE68f%2B%2FB24kcUUbiAiEApZpxpVU%2BQa20CEsQSliG2v%2B3N3csjbrv1jmI6TNAaJEqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJM8NGsJdd1SbgFz8SrcA%2Bz71qZ09cOn6vPjnfQU7asBTfm58JgdW%2Bwtp%2FnkmO3ETNAtf%2B5lrS3C%2BU2uBQyF42QVlzHO%2FwGO%2BTQOo1OQ3R6Q%2B96dGOgflqcadJT0AoryXfa8hzRuOGOnj%2BoGKp%2ButQMK3SXTLXAVaA47Mqb6w7aN4eoZQscMX5RYi5VXhUs8Vw7ZZJpZbkjDy0nH%2FWC%2FWjeAhDOvk8A8SGRMdU%2FhaxpgVrJch%2BVnHBoyCcNmbfrcKd0lcCJ%2FzsnXTSOyAUzJpxw3wslHGW5OJ9wKlZSle%2ByUIFoqh4JjK%2BPgnua6xL08Ast4JGpMPOeEI0mtbfxU18%2FtRHFhcyp5%2Ftv%2BdWvLeIDF%2F7rqVy%2F8pqLIOrZ8Hwf73hHHNm%2BjWRvoCifrJQ0vrjjuFen8FiyasZSERBNeLCpWYAw4nUWDrK%2FUOtls%2BZ4VN8gUdnrJEyD9x255ETrc2KUIh0rcyRFwNYl14%2FNwx79sVLpWRapK%2FDlrq1gNUF4dPqb1GoA2uYPA7k0mxLMVCYPvr%2BOFXjq7cyvzxysDOfwdG1vhhHIkN2PU%2F17TdMachgVgz622D1%2FrL%2F7yTN7VLWGt4LgBInD9rFCaC6kZyues3pyh9xzqZDLI4U304X313%2FV85m7%2FBt2tiFJiMMHy%2FcUGOqUBKAr7wuH%2FolcQp3uJS8dAb6Np4%2FD%2FiYKjs%2F9ZV7D8%2F1Zb3diqz0vcjcGABegUGcGbrrbXvWiAfmFpcUIqns2rZluWYTe6uKY1GevasoA%2FmMsETs7bKfSE1lzsvI2fQ8ztjh7Mm1QXgesXsx8bqrTyk8LB4omfdRyW0U1jObwgJHm4RE0A8krh7HvPMjQSnAGubiQMh%2BES37aA1w1Rj0kFbi1%2FYXLV&X-Amz-Signature=3dc10e26500afec3ebc1ad505719a7369f303fe94fd46e78b4d5a428a86f6398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CWVZYRN%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIGzFQJPUobgUFScZm3q3x6VJJm0RoE68f%2B%2FB24kcUUbiAiEApZpxpVU%2BQa20CEsQSliG2v%2B3N3csjbrv1jmI6TNAaJEqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJM8NGsJdd1SbgFz8SrcA%2Bz71qZ09cOn6vPjnfQU7asBTfm58JgdW%2Bwtp%2FnkmO3ETNAtf%2B5lrS3C%2BU2uBQyF42QVlzHO%2FwGO%2BTQOo1OQ3R6Q%2B96dGOgflqcadJT0AoryXfa8hzRuOGOnj%2BoGKp%2ButQMK3SXTLXAVaA47Mqb6w7aN4eoZQscMX5RYi5VXhUs8Vw7ZZJpZbkjDy0nH%2FWC%2FWjeAhDOvk8A8SGRMdU%2FhaxpgVrJch%2BVnHBoyCcNmbfrcKd0lcCJ%2FzsnXTSOyAUzJpxw3wslHGW5OJ9wKlZSle%2ByUIFoqh4JjK%2BPgnua6xL08Ast4JGpMPOeEI0mtbfxU18%2FtRHFhcyp5%2Ftv%2BdWvLeIDF%2F7rqVy%2F8pqLIOrZ8Hwf73hHHNm%2BjWRvoCifrJQ0vrjjuFen8FiyasZSERBNeLCpWYAw4nUWDrK%2FUOtls%2BZ4VN8gUdnrJEyD9x255ETrc2KUIh0rcyRFwNYl14%2FNwx79sVLpWRapK%2FDlrq1gNUF4dPqb1GoA2uYPA7k0mxLMVCYPvr%2BOFXjq7cyvzxysDOfwdG1vhhHIkN2PU%2F17TdMachgVgz622D1%2FrL%2F7yTN7VLWGt4LgBInD9rFCaC6kZyues3pyh9xzqZDLI4U304X313%2FV85m7%2FBt2tiFJiMMHy%2FcUGOqUBKAr7wuH%2FolcQp3uJS8dAb6Np4%2FD%2FiYKjs%2F9ZV7D8%2F1Zb3diqz0vcjcGABegUGcGbrrbXvWiAfmFpcUIqns2rZluWYTe6uKY1GevasoA%2FmMsETs7bKfSE1lzsvI2fQ8ztjh7Mm1QXgesXsx8bqrTyk8LB4omfdRyW0U1jObwgJHm4RE0A8krh7HvPMjQSnAGubiQMh%2BES37aA1w1Rj0kFbi1%2FYXLV&X-Amz-Signature=0d4068df3b28198d1f5a493f976f599fe60b1c3542909a5bd74f9933064c955e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CWVZYRN%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIGzFQJPUobgUFScZm3q3x6VJJm0RoE68f%2B%2FB24kcUUbiAiEApZpxpVU%2BQa20CEsQSliG2v%2B3N3csjbrv1jmI6TNAaJEqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJM8NGsJdd1SbgFz8SrcA%2Bz71qZ09cOn6vPjnfQU7asBTfm58JgdW%2Bwtp%2FnkmO3ETNAtf%2B5lrS3C%2BU2uBQyF42QVlzHO%2FwGO%2BTQOo1OQ3R6Q%2B96dGOgflqcadJT0AoryXfa8hzRuOGOnj%2BoGKp%2ButQMK3SXTLXAVaA47Mqb6w7aN4eoZQscMX5RYi5VXhUs8Vw7ZZJpZbkjDy0nH%2FWC%2FWjeAhDOvk8A8SGRMdU%2FhaxpgVrJch%2BVnHBoyCcNmbfrcKd0lcCJ%2FzsnXTSOyAUzJpxw3wslHGW5OJ9wKlZSle%2ByUIFoqh4JjK%2BPgnua6xL08Ast4JGpMPOeEI0mtbfxU18%2FtRHFhcyp5%2Ftv%2BdWvLeIDF%2F7rqVy%2F8pqLIOrZ8Hwf73hHHNm%2BjWRvoCifrJQ0vrjjuFen8FiyasZSERBNeLCpWYAw4nUWDrK%2FUOtls%2BZ4VN8gUdnrJEyD9x255ETrc2KUIh0rcyRFwNYl14%2FNwx79sVLpWRapK%2FDlrq1gNUF4dPqb1GoA2uYPA7k0mxLMVCYPvr%2BOFXjq7cyvzxysDOfwdG1vhhHIkN2PU%2F17TdMachgVgz622D1%2FrL%2F7yTN7VLWGt4LgBInD9rFCaC6kZyues3pyh9xzqZDLI4U304X313%2FV85m7%2FBt2tiFJiMMHy%2FcUGOqUBKAr7wuH%2FolcQp3uJS8dAb6Np4%2FD%2FiYKjs%2F9ZV7D8%2F1Zb3diqz0vcjcGABegUGcGbrrbXvWiAfmFpcUIqns2rZluWYTe6uKY1GevasoA%2FmMsETs7bKfSE1lzsvI2fQ8ztjh7Mm1QXgesXsx8bqrTyk8LB4omfdRyW0U1jObwgJHm4RE0A8krh7HvPMjQSnAGubiQMh%2BES37aA1w1Rj0kFbi1%2FYXLV&X-Amz-Signature=9a8177ae6299d31497fd3b58f9a18535e126d06f99d6801c42f5a95b51c2d96b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
