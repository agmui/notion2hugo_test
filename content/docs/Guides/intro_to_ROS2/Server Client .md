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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4Z776Q3%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T024739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQD2HLFqiHSnHZwRldpa5ZIWNq5oxaqNQaFRNDxT1mJJ1AIgWujKIIXjvaTCzTLNA8csmR%2F4ElsEpjMhHvHckUyyrjUq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFjTRTCxCfzgQJtiqCrcAy4e2JWC1V5LNhPUnVviMv1lmY7eoqTBBU%2Bou%2BicxaBUu3oI4CA5XiCZZ%2BruNAeQkrDDo7eJWVZ6npyS3wZI3COj3LKHRTbfPiIgk7T%2BhDTJiALb5KAGEgVmbcSEdVEzGv2HsBHPPMhhTYSsunubSWZg5atK%2FIEswzHqRJXTP%2F7hUvKOoSeGCODAO4w%2Bb71aXptr2jzPT7B6IDq%2BbE2U3THQss9cSxcipToMPeufMbSy%2BHrQpdo43bpZdZn%2Fx%2BfcGLtB%2BrDHINST9snhwlhdUQ06PDuVLxlt6CzO25Xe1VuT6qGh55H9BZKLuma%2BnKvgcLyZCzdT9FD1RsaPZIMffKOkX7RNZs7BMkjfS6hJ%2BITVrxQJkcog%2Bv3hGXOPTS0UscGcbFBK2IN1QEe6KM%2BHrBKv2tPid4gqDFWWl0I76WWbmcfIwSCkyrzbtl60IdUJqF3v8kY6PK7lew15DUIL0sKGaW3uvl6%2FjZhxuzGh6RhMjVDWVKRXYtCsvzPA%2Beldev64Bzz0Zy8P4S1phTHQvvNewhaZy6pWD%2Bebg%2BAa1%2FztorRR2aqYjW%2B4rHXh1UoFm%2BGOAzGKp6UmbKaKTumRzEaI5LgypvCgyzk11GZiUuldzawuVYiTOJSaE7xkMIaNrMMGOqUBnyM8BjwKQaqJUJWLu4hU0%2FAESFt%2Fh%2FFRNzYIsGh4R10e%2B%2Fjs%2BWqNoeW%2BOG6qnTDVJs8TcPTRg78M5AMb%2B%2BTBXv67n%2B2OOq3P%2BkiQseatmVAJ7LW893mEt3BJfF%2FNLhX90N7waR8PbivRSO0r%2FSiIJyDEe2YuhX8u0Q0Qpv%2F3JwAdU714SCxHoWiTDIlGEyw9%2F0TNZen6fNG6RvlYHaz09hEX6xuL&X-Amz-Signature=1d45d65b8792a4d063d0e8b380c81433f7d9b49619e8a2e75f485957f636c3b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4Z776Q3%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T024739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQD2HLFqiHSnHZwRldpa5ZIWNq5oxaqNQaFRNDxT1mJJ1AIgWujKIIXjvaTCzTLNA8csmR%2F4ElsEpjMhHvHckUyyrjUq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFjTRTCxCfzgQJtiqCrcAy4e2JWC1V5LNhPUnVviMv1lmY7eoqTBBU%2Bou%2BicxaBUu3oI4CA5XiCZZ%2BruNAeQkrDDo7eJWVZ6npyS3wZI3COj3LKHRTbfPiIgk7T%2BhDTJiALb5KAGEgVmbcSEdVEzGv2HsBHPPMhhTYSsunubSWZg5atK%2FIEswzHqRJXTP%2F7hUvKOoSeGCODAO4w%2Bb71aXptr2jzPT7B6IDq%2BbE2U3THQss9cSxcipToMPeufMbSy%2BHrQpdo43bpZdZn%2Fx%2BfcGLtB%2BrDHINST9snhwlhdUQ06PDuVLxlt6CzO25Xe1VuT6qGh55H9BZKLuma%2BnKvgcLyZCzdT9FD1RsaPZIMffKOkX7RNZs7BMkjfS6hJ%2BITVrxQJkcog%2Bv3hGXOPTS0UscGcbFBK2IN1QEe6KM%2BHrBKv2tPid4gqDFWWl0I76WWbmcfIwSCkyrzbtl60IdUJqF3v8kY6PK7lew15DUIL0sKGaW3uvl6%2FjZhxuzGh6RhMjVDWVKRXYtCsvzPA%2Beldev64Bzz0Zy8P4S1phTHQvvNewhaZy6pWD%2Bebg%2BAa1%2FztorRR2aqYjW%2B4rHXh1UoFm%2BGOAzGKp6UmbKaKTumRzEaI5LgypvCgyzk11GZiUuldzawuVYiTOJSaE7xkMIaNrMMGOqUBnyM8BjwKQaqJUJWLu4hU0%2FAESFt%2Fh%2FFRNzYIsGh4R10e%2B%2Fjs%2BWqNoeW%2BOG6qnTDVJs8TcPTRg78M5AMb%2B%2BTBXv67n%2B2OOq3P%2BkiQseatmVAJ7LW893mEt3BJfF%2FNLhX90N7waR8PbivRSO0r%2FSiIJyDEe2YuhX8u0Q0Qpv%2F3JwAdU714SCxHoWiTDIlGEyw9%2F0TNZen6fNG6RvlYHaz09hEX6xuL&X-Amz-Signature=a67e8b35fec51069bf04ab8c4e2a309c1eb77b308e60d555f16abd083257398a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4Z776Q3%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T024739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQD2HLFqiHSnHZwRldpa5ZIWNq5oxaqNQaFRNDxT1mJJ1AIgWujKIIXjvaTCzTLNA8csmR%2F4ElsEpjMhHvHckUyyrjUq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFjTRTCxCfzgQJtiqCrcAy4e2JWC1V5LNhPUnVviMv1lmY7eoqTBBU%2Bou%2BicxaBUu3oI4CA5XiCZZ%2BruNAeQkrDDo7eJWVZ6npyS3wZI3COj3LKHRTbfPiIgk7T%2BhDTJiALb5KAGEgVmbcSEdVEzGv2HsBHPPMhhTYSsunubSWZg5atK%2FIEswzHqRJXTP%2F7hUvKOoSeGCODAO4w%2Bb71aXptr2jzPT7B6IDq%2BbE2U3THQss9cSxcipToMPeufMbSy%2BHrQpdo43bpZdZn%2Fx%2BfcGLtB%2BrDHINST9snhwlhdUQ06PDuVLxlt6CzO25Xe1VuT6qGh55H9BZKLuma%2BnKvgcLyZCzdT9FD1RsaPZIMffKOkX7RNZs7BMkjfS6hJ%2BITVrxQJkcog%2Bv3hGXOPTS0UscGcbFBK2IN1QEe6KM%2BHrBKv2tPid4gqDFWWl0I76WWbmcfIwSCkyrzbtl60IdUJqF3v8kY6PK7lew15DUIL0sKGaW3uvl6%2FjZhxuzGh6RhMjVDWVKRXYtCsvzPA%2Beldev64Bzz0Zy8P4S1phTHQvvNewhaZy6pWD%2Bebg%2BAa1%2FztorRR2aqYjW%2B4rHXh1UoFm%2BGOAzGKp6UmbKaKTumRzEaI5LgypvCgyzk11GZiUuldzawuVYiTOJSaE7xkMIaNrMMGOqUBnyM8BjwKQaqJUJWLu4hU0%2FAESFt%2Fh%2FFRNzYIsGh4R10e%2B%2Fjs%2BWqNoeW%2BOG6qnTDVJs8TcPTRg78M5AMb%2B%2BTBXv67n%2B2OOq3P%2BkiQseatmVAJ7LW893mEt3BJfF%2FNLhX90N7waR8PbivRSO0r%2FSiIJyDEe2YuhX8u0Q0Qpv%2F3JwAdU714SCxHoWiTDIlGEyw9%2F0TNZen6fNG6RvlYHaz09hEX6xuL&X-Amz-Signature=1d9ebdcce7c724c7d3bd55c2512d09ab2db3ead8ac245dc799b222bb6f939bd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4Z776Q3%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T024739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQD2HLFqiHSnHZwRldpa5ZIWNq5oxaqNQaFRNDxT1mJJ1AIgWujKIIXjvaTCzTLNA8csmR%2F4ElsEpjMhHvHckUyyrjUq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFjTRTCxCfzgQJtiqCrcAy4e2JWC1V5LNhPUnVviMv1lmY7eoqTBBU%2Bou%2BicxaBUu3oI4CA5XiCZZ%2BruNAeQkrDDo7eJWVZ6npyS3wZI3COj3LKHRTbfPiIgk7T%2BhDTJiALb5KAGEgVmbcSEdVEzGv2HsBHPPMhhTYSsunubSWZg5atK%2FIEswzHqRJXTP%2F7hUvKOoSeGCODAO4w%2Bb71aXptr2jzPT7B6IDq%2BbE2U3THQss9cSxcipToMPeufMbSy%2BHrQpdo43bpZdZn%2Fx%2BfcGLtB%2BrDHINST9snhwlhdUQ06PDuVLxlt6CzO25Xe1VuT6qGh55H9BZKLuma%2BnKvgcLyZCzdT9FD1RsaPZIMffKOkX7RNZs7BMkjfS6hJ%2BITVrxQJkcog%2Bv3hGXOPTS0UscGcbFBK2IN1QEe6KM%2BHrBKv2tPid4gqDFWWl0I76WWbmcfIwSCkyrzbtl60IdUJqF3v8kY6PK7lew15DUIL0sKGaW3uvl6%2FjZhxuzGh6RhMjVDWVKRXYtCsvzPA%2Beldev64Bzz0Zy8P4S1phTHQvvNewhaZy6pWD%2Bebg%2BAa1%2FztorRR2aqYjW%2B4rHXh1UoFm%2BGOAzGKp6UmbKaKTumRzEaI5LgypvCgyzk11GZiUuldzawuVYiTOJSaE7xkMIaNrMMGOqUBnyM8BjwKQaqJUJWLu4hU0%2FAESFt%2Fh%2FFRNzYIsGh4R10e%2B%2Fjs%2BWqNoeW%2BOG6qnTDVJs8TcPTRg78M5AMb%2B%2BTBXv67n%2B2OOq3P%2BkiQseatmVAJ7LW893mEt3BJfF%2FNLhX90N7waR8PbivRSO0r%2FSiIJyDEe2YuhX8u0Q0Qpv%2F3JwAdU714SCxHoWiTDIlGEyw9%2F0TNZen6fNG6RvlYHaz09hEX6xuL&X-Amz-Signature=3934e2694bc271ca4a844ba9a9584861fc1d7b08e6e609f3621d5ab6595304bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4Z776Q3%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T024739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQD2HLFqiHSnHZwRldpa5ZIWNq5oxaqNQaFRNDxT1mJJ1AIgWujKIIXjvaTCzTLNA8csmR%2F4ElsEpjMhHvHckUyyrjUq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFjTRTCxCfzgQJtiqCrcAy4e2JWC1V5LNhPUnVviMv1lmY7eoqTBBU%2Bou%2BicxaBUu3oI4CA5XiCZZ%2BruNAeQkrDDo7eJWVZ6npyS3wZI3COj3LKHRTbfPiIgk7T%2BhDTJiALb5KAGEgVmbcSEdVEzGv2HsBHPPMhhTYSsunubSWZg5atK%2FIEswzHqRJXTP%2F7hUvKOoSeGCODAO4w%2Bb71aXptr2jzPT7B6IDq%2BbE2U3THQss9cSxcipToMPeufMbSy%2BHrQpdo43bpZdZn%2Fx%2BfcGLtB%2BrDHINST9snhwlhdUQ06PDuVLxlt6CzO25Xe1VuT6qGh55H9BZKLuma%2BnKvgcLyZCzdT9FD1RsaPZIMffKOkX7RNZs7BMkjfS6hJ%2BITVrxQJkcog%2Bv3hGXOPTS0UscGcbFBK2IN1QEe6KM%2BHrBKv2tPid4gqDFWWl0I76WWbmcfIwSCkyrzbtl60IdUJqF3v8kY6PK7lew15DUIL0sKGaW3uvl6%2FjZhxuzGh6RhMjVDWVKRXYtCsvzPA%2Beldev64Bzz0Zy8P4S1phTHQvvNewhaZy6pWD%2Bebg%2BAa1%2FztorRR2aqYjW%2B4rHXh1UoFm%2BGOAzGKp6UmbKaKTumRzEaI5LgypvCgyzk11GZiUuldzawuVYiTOJSaE7xkMIaNrMMGOqUBnyM8BjwKQaqJUJWLu4hU0%2FAESFt%2Fh%2FFRNzYIsGh4R10e%2B%2Fjs%2BWqNoeW%2BOG6qnTDVJs8TcPTRg78M5AMb%2B%2BTBXv67n%2B2OOq3P%2BkiQseatmVAJ7LW893mEt3BJfF%2FNLhX90N7waR8PbivRSO0r%2FSiIJyDEe2YuhX8u0Q0Qpv%2F3JwAdU714SCxHoWiTDIlGEyw9%2F0TNZen6fNG6RvlYHaz09hEX6xuL&X-Amz-Signature=ab467427ab897eeed72b3e087525f9444d61c398c40c5397ff8a8a2e0b8270f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
