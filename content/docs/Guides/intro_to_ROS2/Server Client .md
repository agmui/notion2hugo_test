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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5US2HRI%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCxIvKdUjB3ScRs8TWsyNhL9KMOA2fyXr4v4EEPVHx0HAIgLMYsohNMhWoLgabtzLBeAjFKoLVyvCvwV8aI5UCo5yUq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDFgelFz%2BFamlAAgO6SrcA1S6rAng8drMlHVC5SOmQ9ow8vsAo%2FXDST4NMUFc%2FDFeVVy1vb35GUH38bExwNEusq4jklrkczU2%2FkSg1KbwuBHT2O1J0upOzJcY%2BCeQJlZgsKv9JZWih41CprcaD8dAAQr7RuI8gbNB5QsPqdlHmW7JQTQvxhRf%2FORaI46F4PY0vLDZuKIzrKfxG%2BFUQ7XP1xjbAXhpbunlzbRmQHoPSAYx2CHWBwkwKzONwdh%2Fz8cVC3LCY2X3RG8XUyrTrlZYdxBArAQGN74v7s1zv0NM%2B63PhzDioo8ic7UCiXGzROn87dkTFbq0P8UgekLFcwWX1LStZvLM9CP%2BH53Bz%2FT%2Bx88sLQ%2FRIAPN%2F6EmsfFEScwMdUrf%2Bq1udcAP8LCT909lwqWj6tjbJ8a8mb7ltcH9gL5HEO%2BM0Nrwy1%2FcX8DjtIiUaNpXOkiPlmAIfueq7pp%2B1XN9vUHCMKAeSEAXvYRHWjbbng1bw1X%2BMoHVjJnISzlgW%2BSnX%2BHbEuYWzFwSaNczAT1bgqReFu81wKik8pzEZgIveNVyXR9hkZqDwdA1xqrCpOBPvQQWitd0%2FVxD0GUvA55SVn3ZV1AXnrvWk9bEaah3HjVjzF1GwBOwV4A90ZO818huXf%2B7Mbnp8TR0MIq5kcEGOqUBzRdmBpoLKKmqXyoHX6bMxGl1nmgFqE0h3%2BjwfkO9Z8z%2F%2F97x8NFsR%2B3Clc0u1w7pbe63HaKM%2FdYsPLdCv78p14r25X6s%2ByQY1BF%2FI6G2KToOZO03LzLoIGbijBkXLGlqaJrREcIjsI1KDbrJ09iTmETkc0MP6rCq4eM7%2FPr6HeXUZNlzcOXcxT1lw1BB6wBfNvlb8Bpwcn3jk9y%2Fr0nYCKNoUjhG&X-Amz-Signature=883320217e148edc433cd5d9a11ce3b31ce969128b8734b725e65d4081a29950&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5US2HRI%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCxIvKdUjB3ScRs8TWsyNhL9KMOA2fyXr4v4EEPVHx0HAIgLMYsohNMhWoLgabtzLBeAjFKoLVyvCvwV8aI5UCo5yUq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDFgelFz%2BFamlAAgO6SrcA1S6rAng8drMlHVC5SOmQ9ow8vsAo%2FXDST4NMUFc%2FDFeVVy1vb35GUH38bExwNEusq4jklrkczU2%2FkSg1KbwuBHT2O1J0upOzJcY%2BCeQJlZgsKv9JZWih41CprcaD8dAAQr7RuI8gbNB5QsPqdlHmW7JQTQvxhRf%2FORaI46F4PY0vLDZuKIzrKfxG%2BFUQ7XP1xjbAXhpbunlzbRmQHoPSAYx2CHWBwkwKzONwdh%2Fz8cVC3LCY2X3RG8XUyrTrlZYdxBArAQGN74v7s1zv0NM%2B63PhzDioo8ic7UCiXGzROn87dkTFbq0P8UgekLFcwWX1LStZvLM9CP%2BH53Bz%2FT%2Bx88sLQ%2FRIAPN%2F6EmsfFEScwMdUrf%2Bq1udcAP8LCT909lwqWj6tjbJ8a8mb7ltcH9gL5HEO%2BM0Nrwy1%2FcX8DjtIiUaNpXOkiPlmAIfueq7pp%2B1XN9vUHCMKAeSEAXvYRHWjbbng1bw1X%2BMoHVjJnISzlgW%2BSnX%2BHbEuYWzFwSaNczAT1bgqReFu81wKik8pzEZgIveNVyXR9hkZqDwdA1xqrCpOBPvQQWitd0%2FVxD0GUvA55SVn3ZV1AXnrvWk9bEaah3HjVjzF1GwBOwV4A90ZO818huXf%2B7Mbnp8TR0MIq5kcEGOqUBzRdmBpoLKKmqXyoHX6bMxGl1nmgFqE0h3%2BjwfkO9Z8z%2F%2F97x8NFsR%2B3Clc0u1w7pbe63HaKM%2FdYsPLdCv78p14r25X6s%2ByQY1BF%2FI6G2KToOZO03LzLoIGbijBkXLGlqaJrREcIjsI1KDbrJ09iTmETkc0MP6rCq4eM7%2FPr6HeXUZNlzcOXcxT1lw1BB6wBfNvlb8Bpwcn3jk9y%2Fr0nYCKNoUjhG&X-Amz-Signature=082b202df7ea81369ff25b14631244ef9218b1eacd27de6d4953b6603236ee03&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5US2HRI%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCxIvKdUjB3ScRs8TWsyNhL9KMOA2fyXr4v4EEPVHx0HAIgLMYsohNMhWoLgabtzLBeAjFKoLVyvCvwV8aI5UCo5yUq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDFgelFz%2BFamlAAgO6SrcA1S6rAng8drMlHVC5SOmQ9ow8vsAo%2FXDST4NMUFc%2FDFeVVy1vb35GUH38bExwNEusq4jklrkczU2%2FkSg1KbwuBHT2O1J0upOzJcY%2BCeQJlZgsKv9JZWih41CprcaD8dAAQr7RuI8gbNB5QsPqdlHmW7JQTQvxhRf%2FORaI46F4PY0vLDZuKIzrKfxG%2BFUQ7XP1xjbAXhpbunlzbRmQHoPSAYx2CHWBwkwKzONwdh%2Fz8cVC3LCY2X3RG8XUyrTrlZYdxBArAQGN74v7s1zv0NM%2B63PhzDioo8ic7UCiXGzROn87dkTFbq0P8UgekLFcwWX1LStZvLM9CP%2BH53Bz%2FT%2Bx88sLQ%2FRIAPN%2F6EmsfFEScwMdUrf%2Bq1udcAP8LCT909lwqWj6tjbJ8a8mb7ltcH9gL5HEO%2BM0Nrwy1%2FcX8DjtIiUaNpXOkiPlmAIfueq7pp%2B1XN9vUHCMKAeSEAXvYRHWjbbng1bw1X%2BMoHVjJnISzlgW%2BSnX%2BHbEuYWzFwSaNczAT1bgqReFu81wKik8pzEZgIveNVyXR9hkZqDwdA1xqrCpOBPvQQWitd0%2FVxD0GUvA55SVn3ZV1AXnrvWk9bEaah3HjVjzF1GwBOwV4A90ZO818huXf%2B7Mbnp8TR0MIq5kcEGOqUBzRdmBpoLKKmqXyoHX6bMxGl1nmgFqE0h3%2BjwfkO9Z8z%2F%2F97x8NFsR%2B3Clc0u1w7pbe63HaKM%2FdYsPLdCv78p14r25X6s%2ByQY1BF%2FI6G2KToOZO03LzLoIGbijBkXLGlqaJrREcIjsI1KDbrJ09iTmETkc0MP6rCq4eM7%2FPr6HeXUZNlzcOXcxT1lw1BB6wBfNvlb8Bpwcn3jk9y%2Fr0nYCKNoUjhG&X-Amz-Signature=fe9b20f93dfb3719ded91f34fe63de5341d9f38748a90e19a125e678350502f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5US2HRI%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCxIvKdUjB3ScRs8TWsyNhL9KMOA2fyXr4v4EEPVHx0HAIgLMYsohNMhWoLgabtzLBeAjFKoLVyvCvwV8aI5UCo5yUq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDFgelFz%2BFamlAAgO6SrcA1S6rAng8drMlHVC5SOmQ9ow8vsAo%2FXDST4NMUFc%2FDFeVVy1vb35GUH38bExwNEusq4jklrkczU2%2FkSg1KbwuBHT2O1J0upOzJcY%2BCeQJlZgsKv9JZWih41CprcaD8dAAQr7RuI8gbNB5QsPqdlHmW7JQTQvxhRf%2FORaI46F4PY0vLDZuKIzrKfxG%2BFUQ7XP1xjbAXhpbunlzbRmQHoPSAYx2CHWBwkwKzONwdh%2Fz8cVC3LCY2X3RG8XUyrTrlZYdxBArAQGN74v7s1zv0NM%2B63PhzDioo8ic7UCiXGzROn87dkTFbq0P8UgekLFcwWX1LStZvLM9CP%2BH53Bz%2FT%2Bx88sLQ%2FRIAPN%2F6EmsfFEScwMdUrf%2Bq1udcAP8LCT909lwqWj6tjbJ8a8mb7ltcH9gL5HEO%2BM0Nrwy1%2FcX8DjtIiUaNpXOkiPlmAIfueq7pp%2B1XN9vUHCMKAeSEAXvYRHWjbbng1bw1X%2BMoHVjJnISzlgW%2BSnX%2BHbEuYWzFwSaNczAT1bgqReFu81wKik8pzEZgIveNVyXR9hkZqDwdA1xqrCpOBPvQQWitd0%2FVxD0GUvA55SVn3ZV1AXnrvWk9bEaah3HjVjzF1GwBOwV4A90ZO818huXf%2B7Mbnp8TR0MIq5kcEGOqUBzRdmBpoLKKmqXyoHX6bMxGl1nmgFqE0h3%2BjwfkO9Z8z%2F%2F97x8NFsR%2B3Clc0u1w7pbe63HaKM%2FdYsPLdCv78p14r25X6s%2ByQY1BF%2FI6G2KToOZO03LzLoIGbijBkXLGlqaJrREcIjsI1KDbrJ09iTmETkc0MP6rCq4eM7%2FPr6HeXUZNlzcOXcxT1lw1BB6wBfNvlb8Bpwcn3jk9y%2Fr0nYCKNoUjhG&X-Amz-Signature=c858e6043f46632b29494cf7b67104e581f19dedab2fede28fb3581fbb89828f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5US2HRI%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCxIvKdUjB3ScRs8TWsyNhL9KMOA2fyXr4v4EEPVHx0HAIgLMYsohNMhWoLgabtzLBeAjFKoLVyvCvwV8aI5UCo5yUq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDFgelFz%2BFamlAAgO6SrcA1S6rAng8drMlHVC5SOmQ9ow8vsAo%2FXDST4NMUFc%2FDFeVVy1vb35GUH38bExwNEusq4jklrkczU2%2FkSg1KbwuBHT2O1J0upOzJcY%2BCeQJlZgsKv9JZWih41CprcaD8dAAQr7RuI8gbNB5QsPqdlHmW7JQTQvxhRf%2FORaI46F4PY0vLDZuKIzrKfxG%2BFUQ7XP1xjbAXhpbunlzbRmQHoPSAYx2CHWBwkwKzONwdh%2Fz8cVC3LCY2X3RG8XUyrTrlZYdxBArAQGN74v7s1zv0NM%2B63PhzDioo8ic7UCiXGzROn87dkTFbq0P8UgekLFcwWX1LStZvLM9CP%2BH53Bz%2FT%2Bx88sLQ%2FRIAPN%2F6EmsfFEScwMdUrf%2Bq1udcAP8LCT909lwqWj6tjbJ8a8mb7ltcH9gL5HEO%2BM0Nrwy1%2FcX8DjtIiUaNpXOkiPlmAIfueq7pp%2B1XN9vUHCMKAeSEAXvYRHWjbbng1bw1X%2BMoHVjJnISzlgW%2BSnX%2BHbEuYWzFwSaNczAT1bgqReFu81wKik8pzEZgIveNVyXR9hkZqDwdA1xqrCpOBPvQQWitd0%2FVxD0GUvA55SVn3ZV1AXnrvWk9bEaah3HjVjzF1GwBOwV4A90ZO818huXf%2B7Mbnp8TR0MIq5kcEGOqUBzRdmBpoLKKmqXyoHX6bMxGl1nmgFqE0h3%2BjwfkO9Z8z%2F%2F97x8NFsR%2B3Clc0u1w7pbe63HaKM%2FdYsPLdCv78p14r25X6s%2ByQY1BF%2FI6G2KToOZO03LzLoIGbijBkXLGlqaJrREcIjsI1KDbrJ09iTmETkc0MP6rCq4eM7%2FPr6HeXUZNlzcOXcxT1lw1BB6wBfNvlb8Bpwcn3jk9y%2Fr0nYCKNoUjhG&X-Amz-Signature=c341feea42c83e037f4b3c9770bafb8b01a9d4e4955f9fad7c2bb047edcdc4bf&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
