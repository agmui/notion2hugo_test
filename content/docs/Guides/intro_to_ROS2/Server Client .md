---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2024-09-12T01:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ4FASRC%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANPkJwNcDP7l2f8RDo9LffC7D2HHXfwAdm%2FCI8aR4LXAiEAjExE%2BDlawTfHjdjH2AitnigS3BuWNv2C%2Ftydnw5UydQqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC0SL%2BF%2B4sJXpPlPpCrcA42Y7RzsXE2qU9LHWrKt1aIfRnYamG8PCnzLlibwmBhjMnTsufpXXMWTK5szQ3Nia03fEYXCZIBZTga%2BoEm%2BIs%2BsmeJNeaVrfX1MEGRNf78unNcZrVdmxJs4tUuQY27fViGrBjEaJANr3TG1UiLjh8BCoeRMcP7nDizgZZTxbzFB5e%2BbK8R7Aq8i5zz%2BTtScNwPFoSGzI724cbBbdo26Rbj2dePsG4BALmeWbX6KVDWsdz5IkTNYJc0SvjOCp9l6IhFecksZwQ0h81P8fgS0qLWVOcj%2BPweKWzAlEqXTgxuGKoPSa7sRp1Z3d9XTkGAF%2FwJinIJnDCoEMIQmDl%2BMyG3%2F3ugwoflJNah35kxgoXjQj8v%2B%2FApk9nF6aKd%2Fmu4BRcHdSzMsH%2FTiU%2FFAIq4QyTf13xRvJOcl8TPoq6YAk8bvBsMSmYEsGV2DqWM0QsXzgIgm4Q0bg%2BbJDBknOqWDmCOrqWxtlbQGmxLPdkxWsesTc2Xxh%2BdDWsTSvVv6%2FT2pCvbp56Q0uzO3bGSp7%2F%2FkDz6pt7MJSnJox%2Bou2QxVcYHwHOhj%2BjSosKod9dg2ZFCHRyAFbMYExQXiXHzipVyHT1nlJefI2bym6tvKCSJi5U11c6qmXutc6ygaQk8KMMP1zL4GOqUBi5L5U0qpZ4jPlsMZAA308JsY4JzwhWt6TwuOzPMuCC98ySXTlLzSGmhDvQuSBkxGNctm6NEX9g5aPqFwbICNQnUAIj4pXBNSVs1XFhKoIcEhOoCUe2u5EjE2LFX9pZw5vP6%2BaX1fmK29u68r%2Foux3OtURBsy8GKhRIRTafV1oGOoOSBUoRmx4Aw3LiiBDituOkBR2LT6Q%2FqTCnODYXDDRaaT0Ete&X-Amz-Signature=524fc08fa8bb427c21a17dcd3445b37785171b0184fb50bb3ca65a1c00b352de&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ4FASRC%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANPkJwNcDP7l2f8RDo9LffC7D2HHXfwAdm%2FCI8aR4LXAiEAjExE%2BDlawTfHjdjH2AitnigS3BuWNv2C%2Ftydnw5UydQqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC0SL%2BF%2B4sJXpPlPpCrcA42Y7RzsXE2qU9LHWrKt1aIfRnYamG8PCnzLlibwmBhjMnTsufpXXMWTK5szQ3Nia03fEYXCZIBZTga%2BoEm%2BIs%2BsmeJNeaVrfX1MEGRNf78unNcZrVdmxJs4tUuQY27fViGrBjEaJANr3TG1UiLjh8BCoeRMcP7nDizgZZTxbzFB5e%2BbK8R7Aq8i5zz%2BTtScNwPFoSGzI724cbBbdo26Rbj2dePsG4BALmeWbX6KVDWsdz5IkTNYJc0SvjOCp9l6IhFecksZwQ0h81P8fgS0qLWVOcj%2BPweKWzAlEqXTgxuGKoPSa7sRp1Z3d9XTkGAF%2FwJinIJnDCoEMIQmDl%2BMyG3%2F3ugwoflJNah35kxgoXjQj8v%2B%2FApk9nF6aKd%2Fmu4BRcHdSzMsH%2FTiU%2FFAIq4QyTf13xRvJOcl8TPoq6YAk8bvBsMSmYEsGV2DqWM0QsXzgIgm4Q0bg%2BbJDBknOqWDmCOrqWxtlbQGmxLPdkxWsesTc2Xxh%2BdDWsTSvVv6%2FT2pCvbp56Q0uzO3bGSp7%2F%2FkDz6pt7MJSnJox%2Bou2QxVcYHwHOhj%2BjSosKod9dg2ZFCHRyAFbMYExQXiXHzipVyHT1nlJefI2bym6tvKCSJi5U11c6qmXutc6ygaQk8KMMP1zL4GOqUBi5L5U0qpZ4jPlsMZAA308JsY4JzwhWt6TwuOzPMuCC98ySXTlLzSGmhDvQuSBkxGNctm6NEX9g5aPqFwbICNQnUAIj4pXBNSVs1XFhKoIcEhOoCUe2u5EjE2LFX9pZw5vP6%2BaX1fmK29u68r%2Foux3OtURBsy8GKhRIRTafV1oGOoOSBUoRmx4Aw3LiiBDituOkBR2LT6Q%2FqTCnODYXDDRaaT0Ete&X-Amz-Signature=58a0b22730eb1ac913ac6e3949c0bdcbdf262b9a317c4a03f51ae3cf1a395daa&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ4FASRC%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANPkJwNcDP7l2f8RDo9LffC7D2HHXfwAdm%2FCI8aR4LXAiEAjExE%2BDlawTfHjdjH2AitnigS3BuWNv2C%2Ftydnw5UydQqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC0SL%2BF%2B4sJXpPlPpCrcA42Y7RzsXE2qU9LHWrKt1aIfRnYamG8PCnzLlibwmBhjMnTsufpXXMWTK5szQ3Nia03fEYXCZIBZTga%2BoEm%2BIs%2BsmeJNeaVrfX1MEGRNf78unNcZrVdmxJs4tUuQY27fViGrBjEaJANr3TG1UiLjh8BCoeRMcP7nDizgZZTxbzFB5e%2BbK8R7Aq8i5zz%2BTtScNwPFoSGzI724cbBbdo26Rbj2dePsG4BALmeWbX6KVDWsdz5IkTNYJc0SvjOCp9l6IhFecksZwQ0h81P8fgS0qLWVOcj%2BPweKWzAlEqXTgxuGKoPSa7sRp1Z3d9XTkGAF%2FwJinIJnDCoEMIQmDl%2BMyG3%2F3ugwoflJNah35kxgoXjQj8v%2B%2FApk9nF6aKd%2Fmu4BRcHdSzMsH%2FTiU%2FFAIq4QyTf13xRvJOcl8TPoq6YAk8bvBsMSmYEsGV2DqWM0QsXzgIgm4Q0bg%2BbJDBknOqWDmCOrqWxtlbQGmxLPdkxWsesTc2Xxh%2BdDWsTSvVv6%2FT2pCvbp56Q0uzO3bGSp7%2F%2FkDz6pt7MJSnJox%2Bou2QxVcYHwHOhj%2BjSosKod9dg2ZFCHRyAFbMYExQXiXHzipVyHT1nlJefI2bym6tvKCSJi5U11c6qmXutc6ygaQk8KMMP1zL4GOqUBi5L5U0qpZ4jPlsMZAA308JsY4JzwhWt6TwuOzPMuCC98ySXTlLzSGmhDvQuSBkxGNctm6NEX9g5aPqFwbICNQnUAIj4pXBNSVs1XFhKoIcEhOoCUe2u5EjE2LFX9pZw5vP6%2BaX1fmK29u68r%2Foux3OtURBsy8GKhRIRTafV1oGOoOSBUoRmx4Aw3LiiBDituOkBR2LT6Q%2FqTCnODYXDDRaaT0Ete&X-Amz-Signature=663bf981bae69471c2b622f9707efd0a2e280e3e93be1a829ce1f746c7306f95&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ4FASRC%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANPkJwNcDP7l2f8RDo9LffC7D2HHXfwAdm%2FCI8aR4LXAiEAjExE%2BDlawTfHjdjH2AitnigS3BuWNv2C%2Ftydnw5UydQqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC0SL%2BF%2B4sJXpPlPpCrcA42Y7RzsXE2qU9LHWrKt1aIfRnYamG8PCnzLlibwmBhjMnTsufpXXMWTK5szQ3Nia03fEYXCZIBZTga%2BoEm%2BIs%2BsmeJNeaVrfX1MEGRNf78unNcZrVdmxJs4tUuQY27fViGrBjEaJANr3TG1UiLjh8BCoeRMcP7nDizgZZTxbzFB5e%2BbK8R7Aq8i5zz%2BTtScNwPFoSGzI724cbBbdo26Rbj2dePsG4BALmeWbX6KVDWsdz5IkTNYJc0SvjOCp9l6IhFecksZwQ0h81P8fgS0qLWVOcj%2BPweKWzAlEqXTgxuGKoPSa7sRp1Z3d9XTkGAF%2FwJinIJnDCoEMIQmDl%2BMyG3%2F3ugwoflJNah35kxgoXjQj8v%2B%2FApk9nF6aKd%2Fmu4BRcHdSzMsH%2FTiU%2FFAIq4QyTf13xRvJOcl8TPoq6YAk8bvBsMSmYEsGV2DqWM0QsXzgIgm4Q0bg%2BbJDBknOqWDmCOrqWxtlbQGmxLPdkxWsesTc2Xxh%2BdDWsTSvVv6%2FT2pCvbp56Q0uzO3bGSp7%2F%2FkDz6pt7MJSnJox%2Bou2QxVcYHwHOhj%2BjSosKod9dg2ZFCHRyAFbMYExQXiXHzipVyHT1nlJefI2bym6tvKCSJi5U11c6qmXutc6ygaQk8KMMP1zL4GOqUBi5L5U0qpZ4jPlsMZAA308JsY4JzwhWt6TwuOzPMuCC98ySXTlLzSGmhDvQuSBkxGNctm6NEX9g5aPqFwbICNQnUAIj4pXBNSVs1XFhKoIcEhOoCUe2u5EjE2LFX9pZw5vP6%2BaX1fmK29u68r%2Foux3OtURBsy8GKhRIRTafV1oGOoOSBUoRmx4Aw3LiiBDituOkBR2LT6Q%2FqTCnODYXDDRaaT0Ete&X-Amz-Signature=4ff9b768e8a3002e19686c1bb4a414c054c837c2f1591d1fd0ca4cf88a7894c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ4FASRC%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANPkJwNcDP7l2f8RDo9LffC7D2HHXfwAdm%2FCI8aR4LXAiEAjExE%2BDlawTfHjdjH2AitnigS3BuWNv2C%2Ftydnw5UydQqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC0SL%2BF%2B4sJXpPlPpCrcA42Y7RzsXE2qU9LHWrKt1aIfRnYamG8PCnzLlibwmBhjMnTsufpXXMWTK5szQ3Nia03fEYXCZIBZTga%2BoEm%2BIs%2BsmeJNeaVrfX1MEGRNf78unNcZrVdmxJs4tUuQY27fViGrBjEaJANr3TG1UiLjh8BCoeRMcP7nDizgZZTxbzFB5e%2BbK8R7Aq8i5zz%2BTtScNwPFoSGzI724cbBbdo26Rbj2dePsG4BALmeWbX6KVDWsdz5IkTNYJc0SvjOCp9l6IhFecksZwQ0h81P8fgS0qLWVOcj%2BPweKWzAlEqXTgxuGKoPSa7sRp1Z3d9XTkGAF%2FwJinIJnDCoEMIQmDl%2BMyG3%2F3ugwoflJNah35kxgoXjQj8v%2B%2FApk9nF6aKd%2Fmu4BRcHdSzMsH%2FTiU%2FFAIq4QyTf13xRvJOcl8TPoq6YAk8bvBsMSmYEsGV2DqWM0QsXzgIgm4Q0bg%2BbJDBknOqWDmCOrqWxtlbQGmxLPdkxWsesTc2Xxh%2BdDWsTSvVv6%2FT2pCvbp56Q0uzO3bGSp7%2F%2FkDz6pt7MJSnJox%2Bou2QxVcYHwHOhj%2BjSosKod9dg2ZFCHRyAFbMYExQXiXHzipVyHT1nlJefI2bym6tvKCSJi5U11c6qmXutc6ygaQk8KMMP1zL4GOqUBi5L5U0qpZ4jPlsMZAA308JsY4JzwhWt6TwuOzPMuCC98ySXTlLzSGmhDvQuSBkxGNctm6NEX9g5aPqFwbICNQnUAIj4pXBNSVs1XFhKoIcEhOoCUe2u5EjE2LFX9pZw5vP6%2BaX1fmK29u68r%2Foux3OtURBsy8GKhRIRTafV1oGOoOSBUoRmx4Aw3LiiBDituOkBR2LT6Q%2FqTCnODYXDDRaaT0Ete&X-Amz-Signature=cb69220154673aa3853faaeb0c8f9f605c270d88ba8ad416fd04e4e243f32cd7&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
