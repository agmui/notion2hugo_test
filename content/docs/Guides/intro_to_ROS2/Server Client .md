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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBIRBPUR%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6HMgtMlFpLxiKfNjqZCoGPVPAzLw8V6RQk5qbz1%2FR5AIgK%2BeM2rUEdldElp7A715oDDK%2BaVEhKMpvremnYuKXwAsq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJLuz2w%2BXd3BBM6mGSrcAxngZ10mb4DI7JBy6l1xHmV0hfxqlzAT2YJTjxanlw3ahJ7PcBc4C38mYyY73euphqHkWIxH2PfL%2ByQbNDQwSTUoapAr7IJQtvPUal0hBd8JEmPmXoK9DoOkRCvMtT2qKlnUyn2ycoJbsE5eKJ3p3IoMDsfbEyGxG2wmzked8G%2BLlnblsA0I1fVeYxXeRkKjIEzZv2jGEnjfMg0qfutdtp%2Fc4cvaJB%2Ft%2FDOzGzXdheDBAkZu2H9pmVYPOKT2DXdbvqBM%2BXZ91xOQctWmSll60OWq8tKz4A8VC9ebc4HdJyjoe3HYprIeJ4tq%2B%2B6KyDBS4iF6gu8M%2FdExTPtThn6W3030eQVikOPbUGopfXImJpSiufQTl%2Bq3FH4sV7aiqK49b77AJzm%2B4y8YHp631J39mVNBpDLYgc8nQgbg69WwX2TS24KUXtr0sVSwyy7m%2FUREb648ICOlGLEUmWU9DyPsMPDFJ4Rrx7%2BGUP54ypZgnHWXv0FAc0wIRd97r8BRyLqFtJuCMjx2KIPm1oP7cCBgrax3c7d%2BcC5HWwEgLQMj2%2FyGlUR6yC5AGos7YhkXAseXgSEQ3Aj7VdTd69Bzuo2pLZB7HyUs71HylK%2B%2FbX46J9%2B8clMvbQ%2BJ6NMNJuzHMLuiwr8GOqUBqOipbZnB4Vf2JMRqtBc50%2F3ieUld%2FoU%2B6kaShSlLGAG%2Bj0Aq5F8qcVqjAyhWcScV52IdxGlgPVLkyASwBxs8HlhSN%2F1PZS7U0ivq9xcjONp9E8VujMEa37JgHioY%2Frj1tKpaLEbe%2BZu6lDEkP9x26Q071Nbxk7UWTkjG1U7miDyrxjifBOSPa53T%2B0jOJ%2BhwcrY21mSvXMObYmaZssX0bQKZTFDY&X-Amz-Signature=1a825b39354e60c88fee29bf5f56ee185cf4ed28267b3a5116883a727db576e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBIRBPUR%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6HMgtMlFpLxiKfNjqZCoGPVPAzLw8V6RQk5qbz1%2FR5AIgK%2BeM2rUEdldElp7A715oDDK%2BaVEhKMpvremnYuKXwAsq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJLuz2w%2BXd3BBM6mGSrcAxngZ10mb4DI7JBy6l1xHmV0hfxqlzAT2YJTjxanlw3ahJ7PcBc4C38mYyY73euphqHkWIxH2PfL%2ByQbNDQwSTUoapAr7IJQtvPUal0hBd8JEmPmXoK9DoOkRCvMtT2qKlnUyn2ycoJbsE5eKJ3p3IoMDsfbEyGxG2wmzked8G%2BLlnblsA0I1fVeYxXeRkKjIEzZv2jGEnjfMg0qfutdtp%2Fc4cvaJB%2Ft%2FDOzGzXdheDBAkZu2H9pmVYPOKT2DXdbvqBM%2BXZ91xOQctWmSll60OWq8tKz4A8VC9ebc4HdJyjoe3HYprIeJ4tq%2B%2B6KyDBS4iF6gu8M%2FdExTPtThn6W3030eQVikOPbUGopfXImJpSiufQTl%2Bq3FH4sV7aiqK49b77AJzm%2B4y8YHp631J39mVNBpDLYgc8nQgbg69WwX2TS24KUXtr0sVSwyy7m%2FUREb648ICOlGLEUmWU9DyPsMPDFJ4Rrx7%2BGUP54ypZgnHWXv0FAc0wIRd97r8BRyLqFtJuCMjx2KIPm1oP7cCBgrax3c7d%2BcC5HWwEgLQMj2%2FyGlUR6yC5AGos7YhkXAseXgSEQ3Aj7VdTd69Bzuo2pLZB7HyUs71HylK%2B%2FbX46J9%2B8clMvbQ%2BJ6NMNJuzHMLuiwr8GOqUBqOipbZnB4Vf2JMRqtBc50%2F3ieUld%2FoU%2B6kaShSlLGAG%2Bj0Aq5F8qcVqjAyhWcScV52IdxGlgPVLkyASwBxs8HlhSN%2F1PZS7U0ivq9xcjONp9E8VujMEa37JgHioY%2Frj1tKpaLEbe%2BZu6lDEkP9x26Q071Nbxk7UWTkjG1U7miDyrxjifBOSPa53T%2B0jOJ%2BhwcrY21mSvXMObYmaZssX0bQKZTFDY&X-Amz-Signature=6324a6f805583f753cbd29f2b5877da2be9a8a17dd9652f59463c6fe7c6288c3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBIRBPUR%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6HMgtMlFpLxiKfNjqZCoGPVPAzLw8V6RQk5qbz1%2FR5AIgK%2BeM2rUEdldElp7A715oDDK%2BaVEhKMpvremnYuKXwAsq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJLuz2w%2BXd3BBM6mGSrcAxngZ10mb4DI7JBy6l1xHmV0hfxqlzAT2YJTjxanlw3ahJ7PcBc4C38mYyY73euphqHkWIxH2PfL%2ByQbNDQwSTUoapAr7IJQtvPUal0hBd8JEmPmXoK9DoOkRCvMtT2qKlnUyn2ycoJbsE5eKJ3p3IoMDsfbEyGxG2wmzked8G%2BLlnblsA0I1fVeYxXeRkKjIEzZv2jGEnjfMg0qfutdtp%2Fc4cvaJB%2Ft%2FDOzGzXdheDBAkZu2H9pmVYPOKT2DXdbvqBM%2BXZ91xOQctWmSll60OWq8tKz4A8VC9ebc4HdJyjoe3HYprIeJ4tq%2B%2B6KyDBS4iF6gu8M%2FdExTPtThn6W3030eQVikOPbUGopfXImJpSiufQTl%2Bq3FH4sV7aiqK49b77AJzm%2B4y8YHp631J39mVNBpDLYgc8nQgbg69WwX2TS24KUXtr0sVSwyy7m%2FUREb648ICOlGLEUmWU9DyPsMPDFJ4Rrx7%2BGUP54ypZgnHWXv0FAc0wIRd97r8BRyLqFtJuCMjx2KIPm1oP7cCBgrax3c7d%2BcC5HWwEgLQMj2%2FyGlUR6yC5AGos7YhkXAseXgSEQ3Aj7VdTd69Bzuo2pLZB7HyUs71HylK%2B%2FbX46J9%2B8clMvbQ%2BJ6NMNJuzHMLuiwr8GOqUBqOipbZnB4Vf2JMRqtBc50%2F3ieUld%2FoU%2B6kaShSlLGAG%2Bj0Aq5F8qcVqjAyhWcScV52IdxGlgPVLkyASwBxs8HlhSN%2F1PZS7U0ivq9xcjONp9E8VujMEa37JgHioY%2Frj1tKpaLEbe%2BZu6lDEkP9x26Q071Nbxk7UWTkjG1U7miDyrxjifBOSPa53T%2B0jOJ%2BhwcrY21mSvXMObYmaZssX0bQKZTFDY&X-Amz-Signature=4ca7f2b9e7e161e6b3c2759b5409613ad7b616b6538f87c72787b7a7cf2d8d33&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBIRBPUR%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6HMgtMlFpLxiKfNjqZCoGPVPAzLw8V6RQk5qbz1%2FR5AIgK%2BeM2rUEdldElp7A715oDDK%2BaVEhKMpvremnYuKXwAsq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJLuz2w%2BXd3BBM6mGSrcAxngZ10mb4DI7JBy6l1xHmV0hfxqlzAT2YJTjxanlw3ahJ7PcBc4C38mYyY73euphqHkWIxH2PfL%2ByQbNDQwSTUoapAr7IJQtvPUal0hBd8JEmPmXoK9DoOkRCvMtT2qKlnUyn2ycoJbsE5eKJ3p3IoMDsfbEyGxG2wmzked8G%2BLlnblsA0I1fVeYxXeRkKjIEzZv2jGEnjfMg0qfutdtp%2Fc4cvaJB%2Ft%2FDOzGzXdheDBAkZu2H9pmVYPOKT2DXdbvqBM%2BXZ91xOQctWmSll60OWq8tKz4A8VC9ebc4HdJyjoe3HYprIeJ4tq%2B%2B6KyDBS4iF6gu8M%2FdExTPtThn6W3030eQVikOPbUGopfXImJpSiufQTl%2Bq3FH4sV7aiqK49b77AJzm%2B4y8YHp631J39mVNBpDLYgc8nQgbg69WwX2TS24KUXtr0sVSwyy7m%2FUREb648ICOlGLEUmWU9DyPsMPDFJ4Rrx7%2BGUP54ypZgnHWXv0FAc0wIRd97r8BRyLqFtJuCMjx2KIPm1oP7cCBgrax3c7d%2BcC5HWwEgLQMj2%2FyGlUR6yC5AGos7YhkXAseXgSEQ3Aj7VdTd69Bzuo2pLZB7HyUs71HylK%2B%2FbX46J9%2B8clMvbQ%2BJ6NMNJuzHMLuiwr8GOqUBqOipbZnB4Vf2JMRqtBc50%2F3ieUld%2FoU%2B6kaShSlLGAG%2Bj0Aq5F8qcVqjAyhWcScV52IdxGlgPVLkyASwBxs8HlhSN%2F1PZS7U0ivq9xcjONp9E8VujMEa37JgHioY%2Frj1tKpaLEbe%2BZu6lDEkP9x26Q071Nbxk7UWTkjG1U7miDyrxjifBOSPa53T%2B0jOJ%2BhwcrY21mSvXMObYmaZssX0bQKZTFDY&X-Amz-Signature=93a90e73adc44d7b768a8471b67508fa71d5ee96451d7d232b9438252b9f2159&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBIRBPUR%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6HMgtMlFpLxiKfNjqZCoGPVPAzLw8V6RQk5qbz1%2FR5AIgK%2BeM2rUEdldElp7A715oDDK%2BaVEhKMpvremnYuKXwAsq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJLuz2w%2BXd3BBM6mGSrcAxngZ10mb4DI7JBy6l1xHmV0hfxqlzAT2YJTjxanlw3ahJ7PcBc4C38mYyY73euphqHkWIxH2PfL%2ByQbNDQwSTUoapAr7IJQtvPUal0hBd8JEmPmXoK9DoOkRCvMtT2qKlnUyn2ycoJbsE5eKJ3p3IoMDsfbEyGxG2wmzked8G%2BLlnblsA0I1fVeYxXeRkKjIEzZv2jGEnjfMg0qfutdtp%2Fc4cvaJB%2Ft%2FDOzGzXdheDBAkZu2H9pmVYPOKT2DXdbvqBM%2BXZ91xOQctWmSll60OWq8tKz4A8VC9ebc4HdJyjoe3HYprIeJ4tq%2B%2B6KyDBS4iF6gu8M%2FdExTPtThn6W3030eQVikOPbUGopfXImJpSiufQTl%2Bq3FH4sV7aiqK49b77AJzm%2B4y8YHp631J39mVNBpDLYgc8nQgbg69WwX2TS24KUXtr0sVSwyy7m%2FUREb648ICOlGLEUmWU9DyPsMPDFJ4Rrx7%2BGUP54ypZgnHWXv0FAc0wIRd97r8BRyLqFtJuCMjx2KIPm1oP7cCBgrax3c7d%2BcC5HWwEgLQMj2%2FyGlUR6yC5AGos7YhkXAseXgSEQ3Aj7VdTd69Bzuo2pLZB7HyUs71HylK%2B%2FbX46J9%2B8clMvbQ%2BJ6NMNJuzHMLuiwr8GOqUBqOipbZnB4Vf2JMRqtBc50%2F3ieUld%2FoU%2B6kaShSlLGAG%2Bj0Aq5F8qcVqjAyhWcScV52IdxGlgPVLkyASwBxs8HlhSN%2F1PZS7U0ivq9xcjONp9E8VujMEa37JgHioY%2Frj1tKpaLEbe%2BZu6lDEkP9x26Q071Nbxk7UWTkjG1U7miDyrxjifBOSPa53T%2B0jOJ%2BhwcrY21mSvXMObYmaZssX0bQKZTFDY&X-Amz-Signature=cb8ebdf00acb468173d46855e8be69eb2a6651206f501997a5c2e587f400cf88&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
