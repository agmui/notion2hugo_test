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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XDZAWED%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkOLaHH6MnEElYpl3AfuPDGIDhlRGZOVb7xkXXylNHEAiEAysYBt5LMtbz%2BlF1X6xt%2BXc4w9d2YRZUa%2BQ9XDCNoOPsqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzJinK5rGf5teoOWyrcAx1hlTR%2BvAY8hlePnXqFXVJaTA6WdEFYLWMmwXuwVF0AP06C5Mb411hSfdacVHOQyp3TMsJHMZ%2F9KBpiOKo%2BaJKOL5cqDSMwgCtIs5Z4LHa1QKBRJbUOgRPb76vrQpVJq6fXxKWW3%2FcA2PHeRiXa0dY2%2BPyyzQcEIrqtyMWgZ%2B8zu1QyRFHSUSarIh%2ByIHOClTbKr0e9ZeyZkyI%2FGMmxuA7OyzCnquS18Lp0S8PUBDbf5jDbosoNQX2hZSNzAAjeCfg2ioS6Ewk5cMlsiLhy0beaUSQHPS9S4oQ8BFB27VBe35wovJYhz3QXy4r2HL5StvxwjIOuuyAeQwTU2aywHoyGL5J5ikB%2BZficR36UcBuqgndVRL8iBPYpXRHyNZBPlOWH31%2FJ8HPRALuhKDmvmO%2FBvRn%2Bdl5QKkTYBzYiC05d688IHeIOyICiSKCVMNJBKPls36J831QLORMmRZrXeEkzqBKvdnikJnYhS7nEPYVdQnwJYHnvwTOM2pG1lH70qEq4dBwRVS76cAmhlqJJTENQe2e0Eb6hZ6mSV1KkrDYeRxSCh9YT8wu%2BbyYP%2FbDZefPCSZM4pJsFnuQNB5Sq0LUTMjiaRJKHYlXWs%2F%2B7xOPDHbYxIUDWp6Qxo1EgMOCY4b0GOqUBA%2B8jlref9AxiKXScDo5V9sIc7tB8nrvPbTiBpY9d0dONF24niBnuOS9GrRZlZZwH3vj%2FTWVNeArWwL2f%2F%2FLgzbwkQHtkZp075jbrR1zkkTuBLhNGZwTEYYOyb4QWPIFjhypx%2F5IHADXc2XznkSP%2B7XpW3J9fRHFTIvpZGS%2BCyx7UqazG0R4x36y%2BUGESZTLtFlapbTcpG%2BNmKYgwDkieYBrykrgm&X-Amz-Signature=38edb66916f00b19e56e157cd2c30d7fbe3721df166b8869b6c2b52d4222fba5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XDZAWED%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkOLaHH6MnEElYpl3AfuPDGIDhlRGZOVb7xkXXylNHEAiEAysYBt5LMtbz%2BlF1X6xt%2BXc4w9d2YRZUa%2BQ9XDCNoOPsqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzJinK5rGf5teoOWyrcAx1hlTR%2BvAY8hlePnXqFXVJaTA6WdEFYLWMmwXuwVF0AP06C5Mb411hSfdacVHOQyp3TMsJHMZ%2F9KBpiOKo%2BaJKOL5cqDSMwgCtIs5Z4LHa1QKBRJbUOgRPb76vrQpVJq6fXxKWW3%2FcA2PHeRiXa0dY2%2BPyyzQcEIrqtyMWgZ%2B8zu1QyRFHSUSarIh%2ByIHOClTbKr0e9ZeyZkyI%2FGMmxuA7OyzCnquS18Lp0S8PUBDbf5jDbosoNQX2hZSNzAAjeCfg2ioS6Ewk5cMlsiLhy0beaUSQHPS9S4oQ8BFB27VBe35wovJYhz3QXy4r2HL5StvxwjIOuuyAeQwTU2aywHoyGL5J5ikB%2BZficR36UcBuqgndVRL8iBPYpXRHyNZBPlOWH31%2FJ8HPRALuhKDmvmO%2FBvRn%2Bdl5QKkTYBzYiC05d688IHeIOyICiSKCVMNJBKPls36J831QLORMmRZrXeEkzqBKvdnikJnYhS7nEPYVdQnwJYHnvwTOM2pG1lH70qEq4dBwRVS76cAmhlqJJTENQe2e0Eb6hZ6mSV1KkrDYeRxSCh9YT8wu%2BbyYP%2FbDZefPCSZM4pJsFnuQNB5Sq0LUTMjiaRJKHYlXWs%2F%2B7xOPDHbYxIUDWp6Qxo1EgMOCY4b0GOqUBA%2B8jlref9AxiKXScDo5V9sIc7tB8nrvPbTiBpY9d0dONF24niBnuOS9GrRZlZZwH3vj%2FTWVNeArWwL2f%2F%2FLgzbwkQHtkZp075jbrR1zkkTuBLhNGZwTEYYOyb4QWPIFjhypx%2F5IHADXc2XznkSP%2B7XpW3J9fRHFTIvpZGS%2BCyx7UqazG0R4x36y%2BUGESZTLtFlapbTcpG%2BNmKYgwDkieYBrykrgm&X-Amz-Signature=4974e874fa75543e79c00157f873de71a81cc7ea1039b9c17fbf538c0b7a6ac0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XDZAWED%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkOLaHH6MnEElYpl3AfuPDGIDhlRGZOVb7xkXXylNHEAiEAysYBt5LMtbz%2BlF1X6xt%2BXc4w9d2YRZUa%2BQ9XDCNoOPsqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzJinK5rGf5teoOWyrcAx1hlTR%2BvAY8hlePnXqFXVJaTA6WdEFYLWMmwXuwVF0AP06C5Mb411hSfdacVHOQyp3TMsJHMZ%2F9KBpiOKo%2BaJKOL5cqDSMwgCtIs5Z4LHa1QKBRJbUOgRPb76vrQpVJq6fXxKWW3%2FcA2PHeRiXa0dY2%2BPyyzQcEIrqtyMWgZ%2B8zu1QyRFHSUSarIh%2ByIHOClTbKr0e9ZeyZkyI%2FGMmxuA7OyzCnquS18Lp0S8PUBDbf5jDbosoNQX2hZSNzAAjeCfg2ioS6Ewk5cMlsiLhy0beaUSQHPS9S4oQ8BFB27VBe35wovJYhz3QXy4r2HL5StvxwjIOuuyAeQwTU2aywHoyGL5J5ikB%2BZficR36UcBuqgndVRL8iBPYpXRHyNZBPlOWH31%2FJ8HPRALuhKDmvmO%2FBvRn%2Bdl5QKkTYBzYiC05d688IHeIOyICiSKCVMNJBKPls36J831QLORMmRZrXeEkzqBKvdnikJnYhS7nEPYVdQnwJYHnvwTOM2pG1lH70qEq4dBwRVS76cAmhlqJJTENQe2e0Eb6hZ6mSV1KkrDYeRxSCh9YT8wu%2BbyYP%2FbDZefPCSZM4pJsFnuQNB5Sq0LUTMjiaRJKHYlXWs%2F%2B7xOPDHbYxIUDWp6Qxo1EgMOCY4b0GOqUBA%2B8jlref9AxiKXScDo5V9sIc7tB8nrvPbTiBpY9d0dONF24niBnuOS9GrRZlZZwH3vj%2FTWVNeArWwL2f%2F%2FLgzbwkQHtkZp075jbrR1zkkTuBLhNGZwTEYYOyb4QWPIFjhypx%2F5IHADXc2XznkSP%2B7XpW3J9fRHFTIvpZGS%2BCyx7UqazG0R4x36y%2BUGESZTLtFlapbTcpG%2BNmKYgwDkieYBrykrgm&X-Amz-Signature=f586254b93379a4b350ffd40eea2a79817093e050ef4032726d354ed06beada9&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XDZAWED%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkOLaHH6MnEElYpl3AfuPDGIDhlRGZOVb7xkXXylNHEAiEAysYBt5LMtbz%2BlF1X6xt%2BXc4w9d2YRZUa%2BQ9XDCNoOPsqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzJinK5rGf5teoOWyrcAx1hlTR%2BvAY8hlePnXqFXVJaTA6WdEFYLWMmwXuwVF0AP06C5Mb411hSfdacVHOQyp3TMsJHMZ%2F9KBpiOKo%2BaJKOL5cqDSMwgCtIs5Z4LHa1QKBRJbUOgRPb76vrQpVJq6fXxKWW3%2FcA2PHeRiXa0dY2%2BPyyzQcEIrqtyMWgZ%2B8zu1QyRFHSUSarIh%2ByIHOClTbKr0e9ZeyZkyI%2FGMmxuA7OyzCnquS18Lp0S8PUBDbf5jDbosoNQX2hZSNzAAjeCfg2ioS6Ewk5cMlsiLhy0beaUSQHPS9S4oQ8BFB27VBe35wovJYhz3QXy4r2HL5StvxwjIOuuyAeQwTU2aywHoyGL5J5ikB%2BZficR36UcBuqgndVRL8iBPYpXRHyNZBPlOWH31%2FJ8HPRALuhKDmvmO%2FBvRn%2Bdl5QKkTYBzYiC05d688IHeIOyICiSKCVMNJBKPls36J831QLORMmRZrXeEkzqBKvdnikJnYhS7nEPYVdQnwJYHnvwTOM2pG1lH70qEq4dBwRVS76cAmhlqJJTENQe2e0Eb6hZ6mSV1KkrDYeRxSCh9YT8wu%2BbyYP%2FbDZefPCSZM4pJsFnuQNB5Sq0LUTMjiaRJKHYlXWs%2F%2B7xOPDHbYxIUDWp6Qxo1EgMOCY4b0GOqUBA%2B8jlref9AxiKXScDo5V9sIc7tB8nrvPbTiBpY9d0dONF24niBnuOS9GrRZlZZwH3vj%2FTWVNeArWwL2f%2F%2FLgzbwkQHtkZp075jbrR1zkkTuBLhNGZwTEYYOyb4QWPIFjhypx%2F5IHADXc2XznkSP%2B7XpW3J9fRHFTIvpZGS%2BCyx7UqazG0R4x36y%2BUGESZTLtFlapbTcpG%2BNmKYgwDkieYBrykrgm&X-Amz-Signature=6cbf6732156b159e0599345db480fa73bea7d9c94e94d43018684e131f7add21&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XDZAWED%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkOLaHH6MnEElYpl3AfuPDGIDhlRGZOVb7xkXXylNHEAiEAysYBt5LMtbz%2BlF1X6xt%2BXc4w9d2YRZUa%2BQ9XDCNoOPsqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzJinK5rGf5teoOWyrcAx1hlTR%2BvAY8hlePnXqFXVJaTA6WdEFYLWMmwXuwVF0AP06C5Mb411hSfdacVHOQyp3TMsJHMZ%2F9KBpiOKo%2BaJKOL5cqDSMwgCtIs5Z4LHa1QKBRJbUOgRPb76vrQpVJq6fXxKWW3%2FcA2PHeRiXa0dY2%2BPyyzQcEIrqtyMWgZ%2B8zu1QyRFHSUSarIh%2ByIHOClTbKr0e9ZeyZkyI%2FGMmxuA7OyzCnquS18Lp0S8PUBDbf5jDbosoNQX2hZSNzAAjeCfg2ioS6Ewk5cMlsiLhy0beaUSQHPS9S4oQ8BFB27VBe35wovJYhz3QXy4r2HL5StvxwjIOuuyAeQwTU2aywHoyGL5J5ikB%2BZficR36UcBuqgndVRL8iBPYpXRHyNZBPlOWH31%2FJ8HPRALuhKDmvmO%2FBvRn%2Bdl5QKkTYBzYiC05d688IHeIOyICiSKCVMNJBKPls36J831QLORMmRZrXeEkzqBKvdnikJnYhS7nEPYVdQnwJYHnvwTOM2pG1lH70qEq4dBwRVS76cAmhlqJJTENQe2e0Eb6hZ6mSV1KkrDYeRxSCh9YT8wu%2BbyYP%2FbDZefPCSZM4pJsFnuQNB5Sq0LUTMjiaRJKHYlXWs%2F%2B7xOPDHbYxIUDWp6Qxo1EgMOCY4b0GOqUBA%2B8jlref9AxiKXScDo5V9sIc7tB8nrvPbTiBpY9d0dONF24niBnuOS9GrRZlZZwH3vj%2FTWVNeArWwL2f%2F%2FLgzbwkQHtkZp075jbrR1zkkTuBLhNGZwTEYYOyb4QWPIFjhypx%2F5IHADXc2XznkSP%2B7XpW3J9fRHFTIvpZGS%2BCyx7UqazG0R4x36y%2BUGESZTLtFlapbTcpG%2BNmKYgwDkieYBrykrgm&X-Amz-Signature=e2304255e6527d9f94e0869ac52f2ef317f3cc16007a65e3633c31fb12f8a3c0&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
