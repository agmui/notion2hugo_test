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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXA3GDKQ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICbI3mHw8hnM7ae7Oi5p6iezduzCV3v4Fonw4iBKnhXDAiEA7eryskXaqeZajpzmvVRUDwc4lJ6MybzgBv%2FKoHi%2F2CYq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDJzJ7p7fq6JgVSXTSrcAw0TJ7l832ESgTm1mAEVZ2%2BzwUbiBp2jppByozYX4u0noXO3KiddHTqtgxvhwj2FqdWFklPSu7UtboMLiFwxiounE1ychj27WTWGMn34v5HZO1JQFc2rvRP2HaoVwkvN2Mz8QWn3cwt1wPkxf%2BkzvqNk%2BErqegMjt0ZOWr62eQRUlZ1OERVGo9mefJtJ7IYvw4hB7snoCSI5q1ThFjrDgPcicwcfi1UfwNtMEdzMO%2Fa5bxV8qzML4duHenUieCAfCJko%2ByBK3rIiCGwi%2BSEA2IIW%2FBChc%2BwjlUWmHE%2Ba8MVnEsgC0ul1cQQyp9TO%2B7Zyzb7q9wSwh7VaMh2JXYyNGPolQ17qKlctj1%2F0yEukGrXltxhKdE7ZCbu%2B7shBJpU6fSBomYl7ruVfuTfOuktxoMo7BRuOaGZk1gV8TneXijRFkspO46rhJMYdc86uJuF0gFrFqztgqFhEMe%2FvqHlsf2wXabsm4ri%2Fp2ECfAm2SnkmsZAQdJAgAHDeUPh4RQkukMZVDaoUz1Xgb0a9lPkOcZzXm0Ajdo4c9IGpspN9iUpZWgv3meZ6Qqxdg6skwaVYaRlMmZ9Aog4jvD%2B%2FihtPDLk%2FnKjNN%2Fwz1bTj5rD3diPNGjXkLfXF4vwpgxnlMNbJyr0GOqUBHrqKDvoVCuPp8%2F1uOG4ySSmkZ9Dhq0uPLz9O7Qwt0%2Byz1ak1dXtFdzJjZiFG%2Br%2FG8LwuBWPQJiXOuwryBgqOJF2G77Q%2Bh%2FdU%2BFf3Ar6RlrmvGuuJk5a9C1W5DqhoR%2BklnLxu8fPPgojpgii9tHSV51tACn6XvbHUlO0nFwPR3ROJVD9fLpmgZ5yrLd9dWssL2%2BEErd%2FfZbP%2FgOegxqGCQ6WYMC3z&X-Amz-Signature=d2d3e82392f878bcdd0ae5be92a17656ef9469827746f77d55d64fc0124b6836&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXA3GDKQ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICbI3mHw8hnM7ae7Oi5p6iezduzCV3v4Fonw4iBKnhXDAiEA7eryskXaqeZajpzmvVRUDwc4lJ6MybzgBv%2FKoHi%2F2CYq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDJzJ7p7fq6JgVSXTSrcAw0TJ7l832ESgTm1mAEVZ2%2BzwUbiBp2jppByozYX4u0noXO3KiddHTqtgxvhwj2FqdWFklPSu7UtboMLiFwxiounE1ychj27WTWGMn34v5HZO1JQFc2rvRP2HaoVwkvN2Mz8QWn3cwt1wPkxf%2BkzvqNk%2BErqegMjt0ZOWr62eQRUlZ1OERVGo9mefJtJ7IYvw4hB7snoCSI5q1ThFjrDgPcicwcfi1UfwNtMEdzMO%2Fa5bxV8qzML4duHenUieCAfCJko%2ByBK3rIiCGwi%2BSEA2IIW%2FBChc%2BwjlUWmHE%2Ba8MVnEsgC0ul1cQQyp9TO%2B7Zyzb7q9wSwh7VaMh2JXYyNGPolQ17qKlctj1%2F0yEukGrXltxhKdE7ZCbu%2B7shBJpU6fSBomYl7ruVfuTfOuktxoMo7BRuOaGZk1gV8TneXijRFkspO46rhJMYdc86uJuF0gFrFqztgqFhEMe%2FvqHlsf2wXabsm4ri%2Fp2ECfAm2SnkmsZAQdJAgAHDeUPh4RQkukMZVDaoUz1Xgb0a9lPkOcZzXm0Ajdo4c9IGpspN9iUpZWgv3meZ6Qqxdg6skwaVYaRlMmZ9Aog4jvD%2B%2FihtPDLk%2FnKjNN%2Fwz1bTj5rD3diPNGjXkLfXF4vwpgxnlMNbJyr0GOqUBHrqKDvoVCuPp8%2F1uOG4ySSmkZ9Dhq0uPLz9O7Qwt0%2Byz1ak1dXtFdzJjZiFG%2Br%2FG8LwuBWPQJiXOuwryBgqOJF2G77Q%2Bh%2FdU%2BFf3Ar6RlrmvGuuJk5a9C1W5DqhoR%2BklnLxu8fPPgojpgii9tHSV51tACn6XvbHUlO0nFwPR3ROJVD9fLpmgZ5yrLd9dWssL2%2BEErd%2FfZbP%2FgOegxqGCQ6WYMC3z&X-Amz-Signature=ab1cb8dfb44679da040a380cd3fb1ca4304c2940badad385e0c14722b012130f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXA3GDKQ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICbI3mHw8hnM7ae7Oi5p6iezduzCV3v4Fonw4iBKnhXDAiEA7eryskXaqeZajpzmvVRUDwc4lJ6MybzgBv%2FKoHi%2F2CYq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDJzJ7p7fq6JgVSXTSrcAw0TJ7l832ESgTm1mAEVZ2%2BzwUbiBp2jppByozYX4u0noXO3KiddHTqtgxvhwj2FqdWFklPSu7UtboMLiFwxiounE1ychj27WTWGMn34v5HZO1JQFc2rvRP2HaoVwkvN2Mz8QWn3cwt1wPkxf%2BkzvqNk%2BErqegMjt0ZOWr62eQRUlZ1OERVGo9mefJtJ7IYvw4hB7snoCSI5q1ThFjrDgPcicwcfi1UfwNtMEdzMO%2Fa5bxV8qzML4duHenUieCAfCJko%2ByBK3rIiCGwi%2BSEA2IIW%2FBChc%2BwjlUWmHE%2Ba8MVnEsgC0ul1cQQyp9TO%2B7Zyzb7q9wSwh7VaMh2JXYyNGPolQ17qKlctj1%2F0yEukGrXltxhKdE7ZCbu%2B7shBJpU6fSBomYl7ruVfuTfOuktxoMo7BRuOaGZk1gV8TneXijRFkspO46rhJMYdc86uJuF0gFrFqztgqFhEMe%2FvqHlsf2wXabsm4ri%2Fp2ECfAm2SnkmsZAQdJAgAHDeUPh4RQkukMZVDaoUz1Xgb0a9lPkOcZzXm0Ajdo4c9IGpspN9iUpZWgv3meZ6Qqxdg6skwaVYaRlMmZ9Aog4jvD%2B%2FihtPDLk%2FnKjNN%2Fwz1bTj5rD3diPNGjXkLfXF4vwpgxnlMNbJyr0GOqUBHrqKDvoVCuPp8%2F1uOG4ySSmkZ9Dhq0uPLz9O7Qwt0%2Byz1ak1dXtFdzJjZiFG%2Br%2FG8LwuBWPQJiXOuwryBgqOJF2G77Q%2Bh%2FdU%2BFf3Ar6RlrmvGuuJk5a9C1W5DqhoR%2BklnLxu8fPPgojpgii9tHSV51tACn6XvbHUlO0nFwPR3ROJVD9fLpmgZ5yrLd9dWssL2%2BEErd%2FfZbP%2FgOegxqGCQ6WYMC3z&X-Amz-Signature=f35cec1aaa61708bcf815edd159835577553e211e0d8dfd11cce1719e6557558&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXA3GDKQ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICbI3mHw8hnM7ae7Oi5p6iezduzCV3v4Fonw4iBKnhXDAiEA7eryskXaqeZajpzmvVRUDwc4lJ6MybzgBv%2FKoHi%2F2CYq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDJzJ7p7fq6JgVSXTSrcAw0TJ7l832ESgTm1mAEVZ2%2BzwUbiBp2jppByozYX4u0noXO3KiddHTqtgxvhwj2FqdWFklPSu7UtboMLiFwxiounE1ychj27WTWGMn34v5HZO1JQFc2rvRP2HaoVwkvN2Mz8QWn3cwt1wPkxf%2BkzvqNk%2BErqegMjt0ZOWr62eQRUlZ1OERVGo9mefJtJ7IYvw4hB7snoCSI5q1ThFjrDgPcicwcfi1UfwNtMEdzMO%2Fa5bxV8qzML4duHenUieCAfCJko%2ByBK3rIiCGwi%2BSEA2IIW%2FBChc%2BwjlUWmHE%2Ba8MVnEsgC0ul1cQQyp9TO%2B7Zyzb7q9wSwh7VaMh2JXYyNGPolQ17qKlctj1%2F0yEukGrXltxhKdE7ZCbu%2B7shBJpU6fSBomYl7ruVfuTfOuktxoMo7BRuOaGZk1gV8TneXijRFkspO46rhJMYdc86uJuF0gFrFqztgqFhEMe%2FvqHlsf2wXabsm4ri%2Fp2ECfAm2SnkmsZAQdJAgAHDeUPh4RQkukMZVDaoUz1Xgb0a9lPkOcZzXm0Ajdo4c9IGpspN9iUpZWgv3meZ6Qqxdg6skwaVYaRlMmZ9Aog4jvD%2B%2FihtPDLk%2FnKjNN%2Fwz1bTj5rD3diPNGjXkLfXF4vwpgxnlMNbJyr0GOqUBHrqKDvoVCuPp8%2F1uOG4ySSmkZ9Dhq0uPLz9O7Qwt0%2Byz1ak1dXtFdzJjZiFG%2Br%2FG8LwuBWPQJiXOuwryBgqOJF2G77Q%2Bh%2FdU%2BFf3Ar6RlrmvGuuJk5a9C1W5DqhoR%2BklnLxu8fPPgojpgii9tHSV51tACn6XvbHUlO0nFwPR3ROJVD9fLpmgZ5yrLd9dWssL2%2BEErd%2FfZbP%2FgOegxqGCQ6WYMC3z&X-Amz-Signature=c3b15dfa0062fa24e51e8c186d57b8403050f46e8d3f91050a0700d415f836fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXA3GDKQ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICbI3mHw8hnM7ae7Oi5p6iezduzCV3v4Fonw4iBKnhXDAiEA7eryskXaqeZajpzmvVRUDwc4lJ6MybzgBv%2FKoHi%2F2CYq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDJzJ7p7fq6JgVSXTSrcAw0TJ7l832ESgTm1mAEVZ2%2BzwUbiBp2jppByozYX4u0noXO3KiddHTqtgxvhwj2FqdWFklPSu7UtboMLiFwxiounE1ychj27WTWGMn34v5HZO1JQFc2rvRP2HaoVwkvN2Mz8QWn3cwt1wPkxf%2BkzvqNk%2BErqegMjt0ZOWr62eQRUlZ1OERVGo9mefJtJ7IYvw4hB7snoCSI5q1ThFjrDgPcicwcfi1UfwNtMEdzMO%2Fa5bxV8qzML4duHenUieCAfCJko%2ByBK3rIiCGwi%2BSEA2IIW%2FBChc%2BwjlUWmHE%2Ba8MVnEsgC0ul1cQQyp9TO%2B7Zyzb7q9wSwh7VaMh2JXYyNGPolQ17qKlctj1%2F0yEukGrXltxhKdE7ZCbu%2B7shBJpU6fSBomYl7ruVfuTfOuktxoMo7BRuOaGZk1gV8TneXijRFkspO46rhJMYdc86uJuF0gFrFqztgqFhEMe%2FvqHlsf2wXabsm4ri%2Fp2ECfAm2SnkmsZAQdJAgAHDeUPh4RQkukMZVDaoUz1Xgb0a9lPkOcZzXm0Ajdo4c9IGpspN9iUpZWgv3meZ6Qqxdg6skwaVYaRlMmZ9Aog4jvD%2B%2FihtPDLk%2FnKjNN%2Fwz1bTj5rD3diPNGjXkLfXF4vwpgxnlMNbJyr0GOqUBHrqKDvoVCuPp8%2F1uOG4ySSmkZ9Dhq0uPLz9O7Qwt0%2Byz1ak1dXtFdzJjZiFG%2Br%2FG8LwuBWPQJiXOuwryBgqOJF2G77Q%2Bh%2FdU%2BFf3Ar6RlrmvGuuJk5a9C1W5DqhoR%2BklnLxu8fPPgojpgii9tHSV51tACn6XvbHUlO0nFwPR3ROJVD9fLpmgZ5yrLd9dWssL2%2BEErd%2FfZbP%2FgOegxqGCQ6WYMC3z&X-Amz-Signature=7d277e8e925901f05ed95df97fb1c01da2c70557b170bcea5df3a3235dee8fc8&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
