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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAOZYKKV%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG6PrJ63lhA5kq4GeQkFe5%2B5OHK%2FWU1dDCh%2BE9%2BtoOrpAiEA3WiN4b0WGhWPkwbrraCVwf2KjkFG%2FyOkb3UJ9wH7Cw4qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBetrg21xlnO25mRqSrcA0ABBhc%2Bw9pP7XLOcXx%2FNDfgU79bA2Q0p%2BHIRPM0oBBgA1KcU%2BUbItiqZU4%2Fuco8BTSAASl3LGYYVttcC4OI5Mka1MVCELyAhR4SOlJN2tIjGlaXzCyRXqteVz%2BSHNuotRhh5gy%2Bf880V3jimf5HmB5EIdVS3unqh9Xi4p24PZ8pG5oalaFpRjByZESBB9nCMkvvPihgosZCs9g9erUMp7YhpO5iSLDUH5UAnMiEK8waYotbRmaotWeyOHBqWXHEEf%2BM3EUCak3qwNEDsPNa900r9EnPJuYvteqehFsIzlcmy95wZDKFzB2e1J5Jz8nqAnHQRhC7ezT4g%2Feb6KHuJxcQNhNZk%2FVp3nJ579MxYmdWOYDBd495OoxH8QxbFUHQuoM6Uoe5sCwmy0w1%2Fw3dInPl7Z8ZEoVqOvlTDEELXZ6nRj%2BOVjUhqRyvuxgwnD65r%2F5B24QuFV2pwWaPzvZfvcV88sqWtAuhi4AxPlnQvPY3x9%2F%2FhNTfN0Oz4x30x6x00YVyTOh%2FE%2BHpuTEGcHkrQinTV9%2BiStyEDdgt1pJaNUaixzsGIYtTeukIz%2F28SCNX40zbPh6nFJWAJGuhQDx0hCorE5ozrOPcY%2BcD0%2BfP0cDbv%2FYO7UJApVy63ZgKMJCq7MEGOqUB5S9hKHLvVokxT3YCsWx7QyAOLEILqEXpKNp4pfmssFvoWfBEtTo33dZDlSyB2UxUFm3F%2B508h5nY0VeueHpITx5VvZUur69U5NSjoXaT3pgB23ScvFJC2cvTkHqURCT3Wm9K1KFaZv4CTlMmgycpPGDOFZArTk7ugOULCqsyAvDwQ8%2Fa1kUt0ZfNnGLUX9zKHgDVv5V%2BP28WAV6vDvWnA5BnIIiJ&X-Amz-Signature=673479eb96eb083b08eb97475a28666410022dfadb94847efac58be74adc9b3d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAOZYKKV%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG6PrJ63lhA5kq4GeQkFe5%2B5OHK%2FWU1dDCh%2BE9%2BtoOrpAiEA3WiN4b0WGhWPkwbrraCVwf2KjkFG%2FyOkb3UJ9wH7Cw4qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBetrg21xlnO25mRqSrcA0ABBhc%2Bw9pP7XLOcXx%2FNDfgU79bA2Q0p%2BHIRPM0oBBgA1KcU%2BUbItiqZU4%2Fuco8BTSAASl3LGYYVttcC4OI5Mka1MVCELyAhR4SOlJN2tIjGlaXzCyRXqteVz%2BSHNuotRhh5gy%2Bf880V3jimf5HmB5EIdVS3unqh9Xi4p24PZ8pG5oalaFpRjByZESBB9nCMkvvPihgosZCs9g9erUMp7YhpO5iSLDUH5UAnMiEK8waYotbRmaotWeyOHBqWXHEEf%2BM3EUCak3qwNEDsPNa900r9EnPJuYvteqehFsIzlcmy95wZDKFzB2e1J5Jz8nqAnHQRhC7ezT4g%2Feb6KHuJxcQNhNZk%2FVp3nJ579MxYmdWOYDBd495OoxH8QxbFUHQuoM6Uoe5sCwmy0w1%2Fw3dInPl7Z8ZEoVqOvlTDEELXZ6nRj%2BOVjUhqRyvuxgwnD65r%2F5B24QuFV2pwWaPzvZfvcV88sqWtAuhi4AxPlnQvPY3x9%2F%2FhNTfN0Oz4x30x6x00YVyTOh%2FE%2BHpuTEGcHkrQinTV9%2BiStyEDdgt1pJaNUaixzsGIYtTeukIz%2F28SCNX40zbPh6nFJWAJGuhQDx0hCorE5ozrOPcY%2BcD0%2BfP0cDbv%2FYO7UJApVy63ZgKMJCq7MEGOqUB5S9hKHLvVokxT3YCsWx7QyAOLEILqEXpKNp4pfmssFvoWfBEtTo33dZDlSyB2UxUFm3F%2B508h5nY0VeueHpITx5VvZUur69U5NSjoXaT3pgB23ScvFJC2cvTkHqURCT3Wm9K1KFaZv4CTlMmgycpPGDOFZArTk7ugOULCqsyAvDwQ8%2Fa1kUt0ZfNnGLUX9zKHgDVv5V%2BP28WAV6vDvWnA5BnIIiJ&X-Amz-Signature=8a1bd658555d846d3f65158e83327b150a09f70925719d399ccaa73a3888aefd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAOZYKKV%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG6PrJ63lhA5kq4GeQkFe5%2B5OHK%2FWU1dDCh%2BE9%2BtoOrpAiEA3WiN4b0WGhWPkwbrraCVwf2KjkFG%2FyOkb3UJ9wH7Cw4qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBetrg21xlnO25mRqSrcA0ABBhc%2Bw9pP7XLOcXx%2FNDfgU79bA2Q0p%2BHIRPM0oBBgA1KcU%2BUbItiqZU4%2Fuco8BTSAASl3LGYYVttcC4OI5Mka1MVCELyAhR4SOlJN2tIjGlaXzCyRXqteVz%2BSHNuotRhh5gy%2Bf880V3jimf5HmB5EIdVS3unqh9Xi4p24PZ8pG5oalaFpRjByZESBB9nCMkvvPihgosZCs9g9erUMp7YhpO5iSLDUH5UAnMiEK8waYotbRmaotWeyOHBqWXHEEf%2BM3EUCak3qwNEDsPNa900r9EnPJuYvteqehFsIzlcmy95wZDKFzB2e1J5Jz8nqAnHQRhC7ezT4g%2Feb6KHuJxcQNhNZk%2FVp3nJ579MxYmdWOYDBd495OoxH8QxbFUHQuoM6Uoe5sCwmy0w1%2Fw3dInPl7Z8ZEoVqOvlTDEELXZ6nRj%2BOVjUhqRyvuxgwnD65r%2F5B24QuFV2pwWaPzvZfvcV88sqWtAuhi4AxPlnQvPY3x9%2F%2FhNTfN0Oz4x30x6x00YVyTOh%2FE%2BHpuTEGcHkrQinTV9%2BiStyEDdgt1pJaNUaixzsGIYtTeukIz%2F28SCNX40zbPh6nFJWAJGuhQDx0hCorE5ozrOPcY%2BcD0%2BfP0cDbv%2FYO7UJApVy63ZgKMJCq7MEGOqUB5S9hKHLvVokxT3YCsWx7QyAOLEILqEXpKNp4pfmssFvoWfBEtTo33dZDlSyB2UxUFm3F%2B508h5nY0VeueHpITx5VvZUur69U5NSjoXaT3pgB23ScvFJC2cvTkHqURCT3Wm9K1KFaZv4CTlMmgycpPGDOFZArTk7ugOULCqsyAvDwQ8%2Fa1kUt0ZfNnGLUX9zKHgDVv5V%2BP28WAV6vDvWnA5BnIIiJ&X-Amz-Signature=f8c0fc2b5be74b4248769673c7fb7f26231f046dd06ec570585e2339159cb95b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAOZYKKV%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG6PrJ63lhA5kq4GeQkFe5%2B5OHK%2FWU1dDCh%2BE9%2BtoOrpAiEA3WiN4b0WGhWPkwbrraCVwf2KjkFG%2FyOkb3UJ9wH7Cw4qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBetrg21xlnO25mRqSrcA0ABBhc%2Bw9pP7XLOcXx%2FNDfgU79bA2Q0p%2BHIRPM0oBBgA1KcU%2BUbItiqZU4%2Fuco8BTSAASl3LGYYVttcC4OI5Mka1MVCELyAhR4SOlJN2tIjGlaXzCyRXqteVz%2BSHNuotRhh5gy%2Bf880V3jimf5HmB5EIdVS3unqh9Xi4p24PZ8pG5oalaFpRjByZESBB9nCMkvvPihgosZCs9g9erUMp7YhpO5iSLDUH5UAnMiEK8waYotbRmaotWeyOHBqWXHEEf%2BM3EUCak3qwNEDsPNa900r9EnPJuYvteqehFsIzlcmy95wZDKFzB2e1J5Jz8nqAnHQRhC7ezT4g%2Feb6KHuJxcQNhNZk%2FVp3nJ579MxYmdWOYDBd495OoxH8QxbFUHQuoM6Uoe5sCwmy0w1%2Fw3dInPl7Z8ZEoVqOvlTDEELXZ6nRj%2BOVjUhqRyvuxgwnD65r%2F5B24QuFV2pwWaPzvZfvcV88sqWtAuhi4AxPlnQvPY3x9%2F%2FhNTfN0Oz4x30x6x00YVyTOh%2FE%2BHpuTEGcHkrQinTV9%2BiStyEDdgt1pJaNUaixzsGIYtTeukIz%2F28SCNX40zbPh6nFJWAJGuhQDx0hCorE5ozrOPcY%2BcD0%2BfP0cDbv%2FYO7UJApVy63ZgKMJCq7MEGOqUB5S9hKHLvVokxT3YCsWx7QyAOLEILqEXpKNp4pfmssFvoWfBEtTo33dZDlSyB2UxUFm3F%2B508h5nY0VeueHpITx5VvZUur69U5NSjoXaT3pgB23ScvFJC2cvTkHqURCT3Wm9K1KFaZv4CTlMmgycpPGDOFZArTk7ugOULCqsyAvDwQ8%2Fa1kUt0ZfNnGLUX9zKHgDVv5V%2BP28WAV6vDvWnA5BnIIiJ&X-Amz-Signature=73f0c7fee94e9443505cb81486433b3cd48852793d8a865404920f38576f52d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAOZYKKV%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG6PrJ63lhA5kq4GeQkFe5%2B5OHK%2FWU1dDCh%2BE9%2BtoOrpAiEA3WiN4b0WGhWPkwbrraCVwf2KjkFG%2FyOkb3UJ9wH7Cw4qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBetrg21xlnO25mRqSrcA0ABBhc%2Bw9pP7XLOcXx%2FNDfgU79bA2Q0p%2BHIRPM0oBBgA1KcU%2BUbItiqZU4%2Fuco8BTSAASl3LGYYVttcC4OI5Mka1MVCELyAhR4SOlJN2tIjGlaXzCyRXqteVz%2BSHNuotRhh5gy%2Bf880V3jimf5HmB5EIdVS3unqh9Xi4p24PZ8pG5oalaFpRjByZESBB9nCMkvvPihgosZCs9g9erUMp7YhpO5iSLDUH5UAnMiEK8waYotbRmaotWeyOHBqWXHEEf%2BM3EUCak3qwNEDsPNa900r9EnPJuYvteqehFsIzlcmy95wZDKFzB2e1J5Jz8nqAnHQRhC7ezT4g%2Feb6KHuJxcQNhNZk%2FVp3nJ579MxYmdWOYDBd495OoxH8QxbFUHQuoM6Uoe5sCwmy0w1%2Fw3dInPl7Z8ZEoVqOvlTDEELXZ6nRj%2BOVjUhqRyvuxgwnD65r%2F5B24QuFV2pwWaPzvZfvcV88sqWtAuhi4AxPlnQvPY3x9%2F%2FhNTfN0Oz4x30x6x00YVyTOh%2FE%2BHpuTEGcHkrQinTV9%2BiStyEDdgt1pJaNUaixzsGIYtTeukIz%2F28SCNX40zbPh6nFJWAJGuhQDx0hCorE5ozrOPcY%2BcD0%2BfP0cDbv%2FYO7UJApVy63ZgKMJCq7MEGOqUB5S9hKHLvVokxT3YCsWx7QyAOLEILqEXpKNp4pfmssFvoWfBEtTo33dZDlSyB2UxUFm3F%2B508h5nY0VeueHpITx5VvZUur69U5NSjoXaT3pgB23ScvFJC2cvTkHqURCT3Wm9K1KFaZv4CTlMmgycpPGDOFZArTk7ugOULCqsyAvDwQ8%2Fa1kUt0ZfNnGLUX9zKHgDVv5V%2BP28WAV6vDvWnA5BnIIiJ&X-Amz-Signature=d4eb56b8e814f1969f0f2f807a1f1b75442f46f9cdb2c6da66b2880490ce64fc&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
