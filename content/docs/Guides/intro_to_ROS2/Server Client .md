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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO7IOFPE%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCaePiRcFF9mDBULVzW4fCEXwCLnyQD2qfHfRP9TmICPAIgdPooHTLeJmEMqZDTLITtOtQaU%2F12n4BfdUgYJqZKaGoqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGnHlNV%2BQ54R4apcSrcA4o8%2FJPdgZk%2B3nNSzAfwfTLPSo5rgApSr1XXh193upt3UJrGHCmI1MmMI4Pq8ikrhH1WhVWhEsGQ3p6GzCz8cMO19BZzx%2FJ7l4PRdsq8MWkmq9%2BraVgdk6dU8qZr%2BzD9%2B8epCW8EQVFfBVlfPVpPtz%2Fz4mCWuXE38sd8KcDNamMko1OIP813vKYB5S%2BCKn246UhjTDmzF1wZwKv%2FqVMAWrgeZcbO0iqCr0Ao2SksOTQM199gQ2BuV5PwMlN5WpmR4IYvndCg2pdmN5MV593h90vN80Y%2FYtu%2Bw0WhA59VJLDpVgY%2BisrMHC0u1INFMpDN2izP37iJ4Eq9fXODN4zoQ%2BWIW1JoqeDAHWPX5TwU7HgKGr7CTCaVRM2wrkBueJekwglebEEWoswPnsDMYvyXp5p8GNNaX5Gsz%2BRMGENhJAecdXpjx5umotrSPQ8frhO7AVQsM1D%2F22q%2F2RUwrUKLL2wg7AR1y%2FqkGoFrdBizhUwewG%2BFzSI76fQvSZ9LJtpk%2Fzz5ym4Jk3MOzUMPmu4R0NoJDaZAyPmkV4HLl%2BObUJy7H%2BSX24McROkxVh0G4VT%2BNOgp%2B8fQ%2FbLQn53%2BgCawMyQyCSKel0XopF3Wq9lVf7Qh4FAzk8X9hq9jCR7mMM7Axr4GOqUB4w76PzQXTe%2BRL66xsfNr5KZQDHYwZGwGyD2AA1%2BSRMzAKzf5POEeBipWDTQzIZygMruDwhA0kp0Sf4BsAQP6k1K%2FVM4q%2BjH8TxC4HoqKNCVENyyZ2TN5RV%2BuYt01Qdfi6iGbV9KqB2zh3zn2Vt4mbtBSHUsxRPGhANt6yN7UwgklhWloKAU2PhO6pHd%2BK6ea3UGVzhZZd3JwgtmAy53liKuKesDQ&X-Amz-Signature=2248a7e64d8fda725f64f43012b0f8168a2ee5068ce7f3ef206ac1650d04bdf9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO7IOFPE%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCaePiRcFF9mDBULVzW4fCEXwCLnyQD2qfHfRP9TmICPAIgdPooHTLeJmEMqZDTLITtOtQaU%2F12n4BfdUgYJqZKaGoqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGnHlNV%2BQ54R4apcSrcA4o8%2FJPdgZk%2B3nNSzAfwfTLPSo5rgApSr1XXh193upt3UJrGHCmI1MmMI4Pq8ikrhH1WhVWhEsGQ3p6GzCz8cMO19BZzx%2FJ7l4PRdsq8MWkmq9%2BraVgdk6dU8qZr%2BzD9%2B8epCW8EQVFfBVlfPVpPtz%2Fz4mCWuXE38sd8KcDNamMko1OIP813vKYB5S%2BCKn246UhjTDmzF1wZwKv%2FqVMAWrgeZcbO0iqCr0Ao2SksOTQM199gQ2BuV5PwMlN5WpmR4IYvndCg2pdmN5MV593h90vN80Y%2FYtu%2Bw0WhA59VJLDpVgY%2BisrMHC0u1INFMpDN2izP37iJ4Eq9fXODN4zoQ%2BWIW1JoqeDAHWPX5TwU7HgKGr7CTCaVRM2wrkBueJekwglebEEWoswPnsDMYvyXp5p8GNNaX5Gsz%2BRMGENhJAecdXpjx5umotrSPQ8frhO7AVQsM1D%2F22q%2F2RUwrUKLL2wg7AR1y%2FqkGoFrdBizhUwewG%2BFzSI76fQvSZ9LJtpk%2Fzz5ym4Jk3MOzUMPmu4R0NoJDaZAyPmkV4HLl%2BObUJy7H%2BSX24McROkxVh0G4VT%2BNOgp%2B8fQ%2FbLQn53%2BgCawMyQyCSKel0XopF3Wq9lVf7Qh4FAzk8X9hq9jCR7mMM7Axr4GOqUB4w76PzQXTe%2BRL66xsfNr5KZQDHYwZGwGyD2AA1%2BSRMzAKzf5POEeBipWDTQzIZygMruDwhA0kp0Sf4BsAQP6k1K%2FVM4q%2BjH8TxC4HoqKNCVENyyZ2TN5RV%2BuYt01Qdfi6iGbV9KqB2zh3zn2Vt4mbtBSHUsxRPGhANt6yN7UwgklhWloKAU2PhO6pHd%2BK6ea3UGVzhZZd3JwgtmAy53liKuKesDQ&X-Amz-Signature=c23a8d703af461d9faa6d1d9f6a2c80899b9cb201f175970e30f5fb2dd29459a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO7IOFPE%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCaePiRcFF9mDBULVzW4fCEXwCLnyQD2qfHfRP9TmICPAIgdPooHTLeJmEMqZDTLITtOtQaU%2F12n4BfdUgYJqZKaGoqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGnHlNV%2BQ54R4apcSrcA4o8%2FJPdgZk%2B3nNSzAfwfTLPSo5rgApSr1XXh193upt3UJrGHCmI1MmMI4Pq8ikrhH1WhVWhEsGQ3p6GzCz8cMO19BZzx%2FJ7l4PRdsq8MWkmq9%2BraVgdk6dU8qZr%2BzD9%2B8epCW8EQVFfBVlfPVpPtz%2Fz4mCWuXE38sd8KcDNamMko1OIP813vKYB5S%2BCKn246UhjTDmzF1wZwKv%2FqVMAWrgeZcbO0iqCr0Ao2SksOTQM199gQ2BuV5PwMlN5WpmR4IYvndCg2pdmN5MV593h90vN80Y%2FYtu%2Bw0WhA59VJLDpVgY%2BisrMHC0u1INFMpDN2izP37iJ4Eq9fXODN4zoQ%2BWIW1JoqeDAHWPX5TwU7HgKGr7CTCaVRM2wrkBueJekwglebEEWoswPnsDMYvyXp5p8GNNaX5Gsz%2BRMGENhJAecdXpjx5umotrSPQ8frhO7AVQsM1D%2F22q%2F2RUwrUKLL2wg7AR1y%2FqkGoFrdBizhUwewG%2BFzSI76fQvSZ9LJtpk%2Fzz5ym4Jk3MOzUMPmu4R0NoJDaZAyPmkV4HLl%2BObUJy7H%2BSX24McROkxVh0G4VT%2BNOgp%2B8fQ%2FbLQn53%2BgCawMyQyCSKel0XopF3Wq9lVf7Qh4FAzk8X9hq9jCR7mMM7Axr4GOqUB4w76PzQXTe%2BRL66xsfNr5KZQDHYwZGwGyD2AA1%2BSRMzAKzf5POEeBipWDTQzIZygMruDwhA0kp0Sf4BsAQP6k1K%2FVM4q%2BjH8TxC4HoqKNCVENyyZ2TN5RV%2BuYt01Qdfi6iGbV9KqB2zh3zn2Vt4mbtBSHUsxRPGhANt6yN7UwgklhWloKAU2PhO6pHd%2BK6ea3UGVzhZZd3JwgtmAy53liKuKesDQ&X-Amz-Signature=5ff87c067fa124db3c5ae7d7ec58987c948b39bf260f69ebab8e33677be6c5ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO7IOFPE%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCaePiRcFF9mDBULVzW4fCEXwCLnyQD2qfHfRP9TmICPAIgdPooHTLeJmEMqZDTLITtOtQaU%2F12n4BfdUgYJqZKaGoqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGnHlNV%2BQ54R4apcSrcA4o8%2FJPdgZk%2B3nNSzAfwfTLPSo5rgApSr1XXh193upt3UJrGHCmI1MmMI4Pq8ikrhH1WhVWhEsGQ3p6GzCz8cMO19BZzx%2FJ7l4PRdsq8MWkmq9%2BraVgdk6dU8qZr%2BzD9%2B8epCW8EQVFfBVlfPVpPtz%2Fz4mCWuXE38sd8KcDNamMko1OIP813vKYB5S%2BCKn246UhjTDmzF1wZwKv%2FqVMAWrgeZcbO0iqCr0Ao2SksOTQM199gQ2BuV5PwMlN5WpmR4IYvndCg2pdmN5MV593h90vN80Y%2FYtu%2Bw0WhA59VJLDpVgY%2BisrMHC0u1INFMpDN2izP37iJ4Eq9fXODN4zoQ%2BWIW1JoqeDAHWPX5TwU7HgKGr7CTCaVRM2wrkBueJekwglebEEWoswPnsDMYvyXp5p8GNNaX5Gsz%2BRMGENhJAecdXpjx5umotrSPQ8frhO7AVQsM1D%2F22q%2F2RUwrUKLL2wg7AR1y%2FqkGoFrdBizhUwewG%2BFzSI76fQvSZ9LJtpk%2Fzz5ym4Jk3MOzUMPmu4R0NoJDaZAyPmkV4HLl%2BObUJy7H%2BSX24McROkxVh0G4VT%2BNOgp%2B8fQ%2FbLQn53%2BgCawMyQyCSKel0XopF3Wq9lVf7Qh4FAzk8X9hq9jCR7mMM7Axr4GOqUB4w76PzQXTe%2BRL66xsfNr5KZQDHYwZGwGyD2AA1%2BSRMzAKzf5POEeBipWDTQzIZygMruDwhA0kp0Sf4BsAQP6k1K%2FVM4q%2BjH8TxC4HoqKNCVENyyZ2TN5RV%2BuYt01Qdfi6iGbV9KqB2zh3zn2Vt4mbtBSHUsxRPGhANt6yN7UwgklhWloKAU2PhO6pHd%2BK6ea3UGVzhZZd3JwgtmAy53liKuKesDQ&X-Amz-Signature=e2b790cc30682afc3b9da2c6c105287385a58b0c5fe6413699058914b98d3f1e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO7IOFPE%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCaePiRcFF9mDBULVzW4fCEXwCLnyQD2qfHfRP9TmICPAIgdPooHTLeJmEMqZDTLITtOtQaU%2F12n4BfdUgYJqZKaGoqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGnHlNV%2BQ54R4apcSrcA4o8%2FJPdgZk%2B3nNSzAfwfTLPSo5rgApSr1XXh193upt3UJrGHCmI1MmMI4Pq8ikrhH1WhVWhEsGQ3p6GzCz8cMO19BZzx%2FJ7l4PRdsq8MWkmq9%2BraVgdk6dU8qZr%2BzD9%2B8epCW8EQVFfBVlfPVpPtz%2Fz4mCWuXE38sd8KcDNamMko1OIP813vKYB5S%2BCKn246UhjTDmzF1wZwKv%2FqVMAWrgeZcbO0iqCr0Ao2SksOTQM199gQ2BuV5PwMlN5WpmR4IYvndCg2pdmN5MV593h90vN80Y%2FYtu%2Bw0WhA59VJLDpVgY%2BisrMHC0u1INFMpDN2izP37iJ4Eq9fXODN4zoQ%2BWIW1JoqeDAHWPX5TwU7HgKGr7CTCaVRM2wrkBueJekwglebEEWoswPnsDMYvyXp5p8GNNaX5Gsz%2BRMGENhJAecdXpjx5umotrSPQ8frhO7AVQsM1D%2F22q%2F2RUwrUKLL2wg7AR1y%2FqkGoFrdBizhUwewG%2BFzSI76fQvSZ9LJtpk%2Fzz5ym4Jk3MOzUMPmu4R0NoJDaZAyPmkV4HLl%2BObUJy7H%2BSX24McROkxVh0G4VT%2BNOgp%2B8fQ%2FbLQn53%2BgCawMyQyCSKel0XopF3Wq9lVf7Qh4FAzk8X9hq9jCR7mMM7Axr4GOqUB4w76PzQXTe%2BRL66xsfNr5KZQDHYwZGwGyD2AA1%2BSRMzAKzf5POEeBipWDTQzIZygMruDwhA0kp0Sf4BsAQP6k1K%2FVM4q%2BjH8TxC4HoqKNCVENyyZ2TN5RV%2BuYt01Qdfi6iGbV9KqB2zh3zn2Vt4mbtBSHUsxRPGhANt6yN7UwgklhWloKAU2PhO6pHd%2BK6ea3UGVzhZZd3JwgtmAy53liKuKesDQ&X-Amz-Signature=f1a5935b9df954d800976012c694dcc0fc7d76d2c0eaa0ce4705ec2ff7ffbbc6&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
