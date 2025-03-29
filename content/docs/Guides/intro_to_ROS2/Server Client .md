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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJEOZGI5%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIAFSONX%2FbtDtBv%2By%2BXZNJZ46V9ZVZppm7d%2FiXwRbWoB0AiBhgmbz0OHysAhzurwdL31iHUVW6wsIGAUSslos642IrCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM6ITdbU5cYuFCXnUJKtwDtpGO2GhGJG4DXS8KqJCN%2FrTisJDgXJtVFb7xn5IlkcN7%2F1oDZnFh%2BLyFY9UN6%2B0YtdpxWz0Ks6n2nZnoTlnu%2Ffzz%2Bo7kvsd%2BdNUfvVxLYfcoMdQFkBLCwyb6QsOkFLGtiASpLw%2Fz81AD7oqYVt%2BmC97Qfo5Y2RRqWu6WScDgQjWLIXh7KHl4Dbg9T6f0GetGXCgxUCIYjA2M3KQLTh%2BOaPz7xE6h6AH0IALf9i533p%2FqWjzEjFeGCILTUc6bdjYsQs4LDUlUw01qIP5gtDHm4lvi4mY2C57ljhDypWEQG%2Fd0XKjvuNK1JNQ1oSy9QDyUJsB%2FsPWlSIOmtolYuAWVjVwCfXrkW%2BA%2BA%2FjCTTDCFoU8fmNgmzGq%2FI1OOa5f6eRm2YhnGO%2FmDt8TSPjG8wFVoW1qrCiw063vbeH9iXo3YY0YphKnWyQra0%2FkTveQpFfuynJEgqIhqEITjfX6GciYYQRzC5nBAP%2BYh%2FhKYg2hpZJQVqy94tnTjtajyAxNzLagpV%2FcCqFtZXAaVkN284LIg3%2FPXhgb6mRsgnduZltax5Y8Is5tq2NrJQJVLACCOLIP6sVmlZWnAcWT2Fg4yl%2FS1Ej2%2BknOciiKzKnvfUomXy%2B0L6PTZ3Iv2Pj%2B0R0wvN%2BcvwY6pgG1xvG%2BS1HM7irLeZRLFs7qgvmskZH%2BHbrd5JADPh46uK%2FPR493DhCH1ssshETTfKiMNZINDptiYKVzR%2FRuTH9mD%2BJtBAaZfNI4MIRsQliPVLQsENsCz0cCxyHfxIDnbrf93hQ2oStXVeULXKp3%2Bv82AgrZRGd9PCvILvkOImUNT6mEKcMdYp2oKuNOUsRfO7hggeFkS4qZE97LcOZT9hmVu6bxG2jE&X-Amz-Signature=8672b0dafa57706712c0217c85a5a652cea59e5c150489ff7aa475b687c9880a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJEOZGI5%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIAFSONX%2FbtDtBv%2By%2BXZNJZ46V9ZVZppm7d%2FiXwRbWoB0AiBhgmbz0OHysAhzurwdL31iHUVW6wsIGAUSslos642IrCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM6ITdbU5cYuFCXnUJKtwDtpGO2GhGJG4DXS8KqJCN%2FrTisJDgXJtVFb7xn5IlkcN7%2F1oDZnFh%2BLyFY9UN6%2B0YtdpxWz0Ks6n2nZnoTlnu%2Ffzz%2Bo7kvsd%2BdNUfvVxLYfcoMdQFkBLCwyb6QsOkFLGtiASpLw%2Fz81AD7oqYVt%2BmC97Qfo5Y2RRqWu6WScDgQjWLIXh7KHl4Dbg9T6f0GetGXCgxUCIYjA2M3KQLTh%2BOaPz7xE6h6AH0IALf9i533p%2FqWjzEjFeGCILTUc6bdjYsQs4LDUlUw01qIP5gtDHm4lvi4mY2C57ljhDypWEQG%2Fd0XKjvuNK1JNQ1oSy9QDyUJsB%2FsPWlSIOmtolYuAWVjVwCfXrkW%2BA%2BA%2FjCTTDCFoU8fmNgmzGq%2FI1OOa5f6eRm2YhnGO%2FmDt8TSPjG8wFVoW1qrCiw063vbeH9iXo3YY0YphKnWyQra0%2FkTveQpFfuynJEgqIhqEITjfX6GciYYQRzC5nBAP%2BYh%2FhKYg2hpZJQVqy94tnTjtajyAxNzLagpV%2FcCqFtZXAaVkN284LIg3%2FPXhgb6mRsgnduZltax5Y8Is5tq2NrJQJVLACCOLIP6sVmlZWnAcWT2Fg4yl%2FS1Ej2%2BknOciiKzKnvfUomXy%2B0L6PTZ3Iv2Pj%2B0R0wvN%2BcvwY6pgG1xvG%2BS1HM7irLeZRLFs7qgvmskZH%2BHbrd5JADPh46uK%2FPR493DhCH1ssshETTfKiMNZINDptiYKVzR%2FRuTH9mD%2BJtBAaZfNI4MIRsQliPVLQsENsCz0cCxyHfxIDnbrf93hQ2oStXVeULXKp3%2Bv82AgrZRGd9PCvILvkOImUNT6mEKcMdYp2oKuNOUsRfO7hggeFkS4qZE97LcOZT9hmVu6bxG2jE&X-Amz-Signature=407b7da9dc4d10c48c7abf4b394d86ed3a35e0688e7fcd5378b1eef033053de0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJEOZGI5%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIAFSONX%2FbtDtBv%2By%2BXZNJZ46V9ZVZppm7d%2FiXwRbWoB0AiBhgmbz0OHysAhzurwdL31iHUVW6wsIGAUSslos642IrCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM6ITdbU5cYuFCXnUJKtwDtpGO2GhGJG4DXS8KqJCN%2FrTisJDgXJtVFb7xn5IlkcN7%2F1oDZnFh%2BLyFY9UN6%2B0YtdpxWz0Ks6n2nZnoTlnu%2Ffzz%2Bo7kvsd%2BdNUfvVxLYfcoMdQFkBLCwyb6QsOkFLGtiASpLw%2Fz81AD7oqYVt%2BmC97Qfo5Y2RRqWu6WScDgQjWLIXh7KHl4Dbg9T6f0GetGXCgxUCIYjA2M3KQLTh%2BOaPz7xE6h6AH0IALf9i533p%2FqWjzEjFeGCILTUc6bdjYsQs4LDUlUw01qIP5gtDHm4lvi4mY2C57ljhDypWEQG%2Fd0XKjvuNK1JNQ1oSy9QDyUJsB%2FsPWlSIOmtolYuAWVjVwCfXrkW%2BA%2BA%2FjCTTDCFoU8fmNgmzGq%2FI1OOa5f6eRm2YhnGO%2FmDt8TSPjG8wFVoW1qrCiw063vbeH9iXo3YY0YphKnWyQra0%2FkTveQpFfuynJEgqIhqEITjfX6GciYYQRzC5nBAP%2BYh%2FhKYg2hpZJQVqy94tnTjtajyAxNzLagpV%2FcCqFtZXAaVkN284LIg3%2FPXhgb6mRsgnduZltax5Y8Is5tq2NrJQJVLACCOLIP6sVmlZWnAcWT2Fg4yl%2FS1Ej2%2BknOciiKzKnvfUomXy%2B0L6PTZ3Iv2Pj%2B0R0wvN%2BcvwY6pgG1xvG%2BS1HM7irLeZRLFs7qgvmskZH%2BHbrd5JADPh46uK%2FPR493DhCH1ssshETTfKiMNZINDptiYKVzR%2FRuTH9mD%2BJtBAaZfNI4MIRsQliPVLQsENsCz0cCxyHfxIDnbrf93hQ2oStXVeULXKp3%2Bv82AgrZRGd9PCvILvkOImUNT6mEKcMdYp2oKuNOUsRfO7hggeFkS4qZE97LcOZT9hmVu6bxG2jE&X-Amz-Signature=84cd4ce6e06bd568f312360de9be2999c12b86334b72193e0949971c34a7ebde&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJEOZGI5%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIAFSONX%2FbtDtBv%2By%2BXZNJZ46V9ZVZppm7d%2FiXwRbWoB0AiBhgmbz0OHysAhzurwdL31iHUVW6wsIGAUSslos642IrCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM6ITdbU5cYuFCXnUJKtwDtpGO2GhGJG4DXS8KqJCN%2FrTisJDgXJtVFb7xn5IlkcN7%2F1oDZnFh%2BLyFY9UN6%2B0YtdpxWz0Ks6n2nZnoTlnu%2Ffzz%2Bo7kvsd%2BdNUfvVxLYfcoMdQFkBLCwyb6QsOkFLGtiASpLw%2Fz81AD7oqYVt%2BmC97Qfo5Y2RRqWu6WScDgQjWLIXh7KHl4Dbg9T6f0GetGXCgxUCIYjA2M3KQLTh%2BOaPz7xE6h6AH0IALf9i533p%2FqWjzEjFeGCILTUc6bdjYsQs4LDUlUw01qIP5gtDHm4lvi4mY2C57ljhDypWEQG%2Fd0XKjvuNK1JNQ1oSy9QDyUJsB%2FsPWlSIOmtolYuAWVjVwCfXrkW%2BA%2BA%2FjCTTDCFoU8fmNgmzGq%2FI1OOa5f6eRm2YhnGO%2FmDt8TSPjG8wFVoW1qrCiw063vbeH9iXo3YY0YphKnWyQra0%2FkTveQpFfuynJEgqIhqEITjfX6GciYYQRzC5nBAP%2BYh%2FhKYg2hpZJQVqy94tnTjtajyAxNzLagpV%2FcCqFtZXAaVkN284LIg3%2FPXhgb6mRsgnduZltax5Y8Is5tq2NrJQJVLACCOLIP6sVmlZWnAcWT2Fg4yl%2FS1Ej2%2BknOciiKzKnvfUomXy%2B0L6PTZ3Iv2Pj%2B0R0wvN%2BcvwY6pgG1xvG%2BS1HM7irLeZRLFs7qgvmskZH%2BHbrd5JADPh46uK%2FPR493DhCH1ssshETTfKiMNZINDptiYKVzR%2FRuTH9mD%2BJtBAaZfNI4MIRsQliPVLQsENsCz0cCxyHfxIDnbrf93hQ2oStXVeULXKp3%2Bv82AgrZRGd9PCvILvkOImUNT6mEKcMdYp2oKuNOUsRfO7hggeFkS4qZE97LcOZT9hmVu6bxG2jE&X-Amz-Signature=74f6ab12cc3d66f243e5ab44ffd872ba5788691d04f6fd8c351441e45ad27892&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJEOZGI5%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIAFSONX%2FbtDtBv%2By%2BXZNJZ46V9ZVZppm7d%2FiXwRbWoB0AiBhgmbz0OHysAhzurwdL31iHUVW6wsIGAUSslos642IrCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM6ITdbU5cYuFCXnUJKtwDtpGO2GhGJG4DXS8KqJCN%2FrTisJDgXJtVFb7xn5IlkcN7%2F1oDZnFh%2BLyFY9UN6%2B0YtdpxWz0Ks6n2nZnoTlnu%2Ffzz%2Bo7kvsd%2BdNUfvVxLYfcoMdQFkBLCwyb6QsOkFLGtiASpLw%2Fz81AD7oqYVt%2BmC97Qfo5Y2RRqWu6WScDgQjWLIXh7KHl4Dbg9T6f0GetGXCgxUCIYjA2M3KQLTh%2BOaPz7xE6h6AH0IALf9i533p%2FqWjzEjFeGCILTUc6bdjYsQs4LDUlUw01qIP5gtDHm4lvi4mY2C57ljhDypWEQG%2Fd0XKjvuNK1JNQ1oSy9QDyUJsB%2FsPWlSIOmtolYuAWVjVwCfXrkW%2BA%2BA%2FjCTTDCFoU8fmNgmzGq%2FI1OOa5f6eRm2YhnGO%2FmDt8TSPjG8wFVoW1qrCiw063vbeH9iXo3YY0YphKnWyQra0%2FkTveQpFfuynJEgqIhqEITjfX6GciYYQRzC5nBAP%2BYh%2FhKYg2hpZJQVqy94tnTjtajyAxNzLagpV%2FcCqFtZXAaVkN284LIg3%2FPXhgb6mRsgnduZltax5Y8Is5tq2NrJQJVLACCOLIP6sVmlZWnAcWT2Fg4yl%2FS1Ej2%2BknOciiKzKnvfUomXy%2B0L6PTZ3Iv2Pj%2B0R0wvN%2BcvwY6pgG1xvG%2BS1HM7irLeZRLFs7qgvmskZH%2BHbrd5JADPh46uK%2FPR493DhCH1ssshETTfKiMNZINDptiYKVzR%2FRuTH9mD%2BJtBAaZfNI4MIRsQliPVLQsENsCz0cCxyHfxIDnbrf93hQ2oStXVeULXKp3%2Bv82AgrZRGd9PCvILvkOImUNT6mEKcMdYp2oKuNOUsRfO7hggeFkS4qZE97LcOZT9hmVu6bxG2jE&X-Amz-Signature=0f7ce7535995080508d82687cf8aadc0be5bba7d2d4d6c59efad3e50d38c0a9a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
