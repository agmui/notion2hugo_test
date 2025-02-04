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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657J7JFMF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGnGPMjwBXixZbwTiZPUySnkThI0v6jN0Cpx0mewl8wbAiBcaaHCn9mzHX4RmsgYmvX1W%2BAEhivlqnxrPbf%2BdlH%2F%2Fir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMS%2F1xGPPJwOk76kAHKtwDDugDUo3J%2BuIe7UtthXrwaSo%2FD2zQl%2FHyZsEh0cY9qp2Rx2kdagfHefqDvGeYFy%2BT54Ky1YZHgwgm293H6%2B%2F3nsQcnylKt5COMIjNnwss8QLrMdVh8iHr%2BbYftV9KtnZ%2FGKeVJH6z1zuSTNNRmYmfVI0ji%2FW9meJetpl9EDleKgthamTfHfp9%2F2r2v8eSQfO4kM%2BvQGgVQta%2F5tOlRTrH6JEsSKRD3%2FcMKF%2BNupz6HRaHdnF4qY6h46Tm9YlWwwV7ZiG5RsMQu1YhMnG7j4%2BYZQbn4hWB%2BO9a40sGfbbZIhNLkeRvjTJZ61zEs3SBLiWcmGXKXBq5UDqy951xn2hLemBNFQaoKr10GDFp6VweL1zbdUaHBq3kc9NI0qHJkCX6nmSSGdQkNSX7TiJ4aW0%2BbrslZWA%2FvVPuIdyFseNFH89qM3E54VKiurs7%2Br4PKxYnPRVdWVIPEafk5UQNIaxrPOAu8tKbCP6Ft5Tc0CcfoRKIl4iiA%2FQGXAbvY7mEdE%2BhTHKI24dKxHuXwmvrYoTmqQlEapNEICxF8uQeaegE4bJIbE%2FMOnEdnMFnImif3hBQkI95xpdOyx%2FHoUJo44aMp3DvznPMu4DAeF72mOsIqjwHskywIKTGYEIyG8Iw9p6IvQY6pgFITtezvG2kmcAh46ZjeXgaGaT0WnPk8t%2BmoxnSoR01lGuZ7J5Ta7i443jzWHbAD8LcD%2BZGhhNNfxYlYHydA1ddCakj7LqJHXj5BNilkLw%2FBAsTNFm1%2BfG7TWHMuIfK9gbtLUeGAcz5oTGgHhYd4Lf2t2nv9RzNIO2ExwmGC%2BkPD0zB0RKbVYhixBHPTP%2FEDaS9EijKaKMQpAD%2BSkDFCWP0%2BXkdMJCa&X-Amz-Signature=c1e6db6bda07551f6e1c7593ddb04208e9304d0dcb8c40170438a0363dd033b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657J7JFMF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGnGPMjwBXixZbwTiZPUySnkThI0v6jN0Cpx0mewl8wbAiBcaaHCn9mzHX4RmsgYmvX1W%2BAEhivlqnxrPbf%2BdlH%2F%2Fir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMS%2F1xGPPJwOk76kAHKtwDDugDUo3J%2BuIe7UtthXrwaSo%2FD2zQl%2FHyZsEh0cY9qp2Rx2kdagfHefqDvGeYFy%2BT54Ky1YZHgwgm293H6%2B%2F3nsQcnylKt5COMIjNnwss8QLrMdVh8iHr%2BbYftV9KtnZ%2FGKeVJH6z1zuSTNNRmYmfVI0ji%2FW9meJetpl9EDleKgthamTfHfp9%2F2r2v8eSQfO4kM%2BvQGgVQta%2F5tOlRTrH6JEsSKRD3%2FcMKF%2BNupz6HRaHdnF4qY6h46Tm9YlWwwV7ZiG5RsMQu1YhMnG7j4%2BYZQbn4hWB%2BO9a40sGfbbZIhNLkeRvjTJZ61zEs3SBLiWcmGXKXBq5UDqy951xn2hLemBNFQaoKr10GDFp6VweL1zbdUaHBq3kc9NI0qHJkCX6nmSSGdQkNSX7TiJ4aW0%2BbrslZWA%2FvVPuIdyFseNFH89qM3E54VKiurs7%2Br4PKxYnPRVdWVIPEafk5UQNIaxrPOAu8tKbCP6Ft5Tc0CcfoRKIl4iiA%2FQGXAbvY7mEdE%2BhTHKI24dKxHuXwmvrYoTmqQlEapNEICxF8uQeaegE4bJIbE%2FMOnEdnMFnImif3hBQkI95xpdOyx%2FHoUJo44aMp3DvznPMu4DAeF72mOsIqjwHskywIKTGYEIyG8Iw9p6IvQY6pgFITtezvG2kmcAh46ZjeXgaGaT0WnPk8t%2BmoxnSoR01lGuZ7J5Ta7i443jzWHbAD8LcD%2BZGhhNNfxYlYHydA1ddCakj7LqJHXj5BNilkLw%2FBAsTNFm1%2BfG7TWHMuIfK9gbtLUeGAcz5oTGgHhYd4Lf2t2nv9RzNIO2ExwmGC%2BkPD0zB0RKbVYhixBHPTP%2FEDaS9EijKaKMQpAD%2BSkDFCWP0%2BXkdMJCa&X-Amz-Signature=c11381f2adc755f48bda6d0a94ab415cfdecef145afd13054070743a32e527f1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657J7JFMF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGnGPMjwBXixZbwTiZPUySnkThI0v6jN0Cpx0mewl8wbAiBcaaHCn9mzHX4RmsgYmvX1W%2BAEhivlqnxrPbf%2BdlH%2F%2Fir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMS%2F1xGPPJwOk76kAHKtwDDugDUo3J%2BuIe7UtthXrwaSo%2FD2zQl%2FHyZsEh0cY9qp2Rx2kdagfHefqDvGeYFy%2BT54Ky1YZHgwgm293H6%2B%2F3nsQcnylKt5COMIjNnwss8QLrMdVh8iHr%2BbYftV9KtnZ%2FGKeVJH6z1zuSTNNRmYmfVI0ji%2FW9meJetpl9EDleKgthamTfHfp9%2F2r2v8eSQfO4kM%2BvQGgVQta%2F5tOlRTrH6JEsSKRD3%2FcMKF%2BNupz6HRaHdnF4qY6h46Tm9YlWwwV7ZiG5RsMQu1YhMnG7j4%2BYZQbn4hWB%2BO9a40sGfbbZIhNLkeRvjTJZ61zEs3SBLiWcmGXKXBq5UDqy951xn2hLemBNFQaoKr10GDFp6VweL1zbdUaHBq3kc9NI0qHJkCX6nmSSGdQkNSX7TiJ4aW0%2BbrslZWA%2FvVPuIdyFseNFH89qM3E54VKiurs7%2Br4PKxYnPRVdWVIPEafk5UQNIaxrPOAu8tKbCP6Ft5Tc0CcfoRKIl4iiA%2FQGXAbvY7mEdE%2BhTHKI24dKxHuXwmvrYoTmqQlEapNEICxF8uQeaegE4bJIbE%2FMOnEdnMFnImif3hBQkI95xpdOyx%2FHoUJo44aMp3DvznPMu4DAeF72mOsIqjwHskywIKTGYEIyG8Iw9p6IvQY6pgFITtezvG2kmcAh46ZjeXgaGaT0WnPk8t%2BmoxnSoR01lGuZ7J5Ta7i443jzWHbAD8LcD%2BZGhhNNfxYlYHydA1ddCakj7LqJHXj5BNilkLw%2FBAsTNFm1%2BfG7TWHMuIfK9gbtLUeGAcz5oTGgHhYd4Lf2t2nv9RzNIO2ExwmGC%2BkPD0zB0RKbVYhixBHPTP%2FEDaS9EijKaKMQpAD%2BSkDFCWP0%2BXkdMJCa&X-Amz-Signature=e1d6278e302a6f19e0f8cab14af4b3be8bd195a5b9875ca46832fc51828e809e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657J7JFMF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGnGPMjwBXixZbwTiZPUySnkThI0v6jN0Cpx0mewl8wbAiBcaaHCn9mzHX4RmsgYmvX1W%2BAEhivlqnxrPbf%2BdlH%2F%2Fir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMS%2F1xGPPJwOk76kAHKtwDDugDUo3J%2BuIe7UtthXrwaSo%2FD2zQl%2FHyZsEh0cY9qp2Rx2kdagfHefqDvGeYFy%2BT54Ky1YZHgwgm293H6%2B%2F3nsQcnylKt5COMIjNnwss8QLrMdVh8iHr%2BbYftV9KtnZ%2FGKeVJH6z1zuSTNNRmYmfVI0ji%2FW9meJetpl9EDleKgthamTfHfp9%2F2r2v8eSQfO4kM%2BvQGgVQta%2F5tOlRTrH6JEsSKRD3%2FcMKF%2BNupz6HRaHdnF4qY6h46Tm9YlWwwV7ZiG5RsMQu1YhMnG7j4%2BYZQbn4hWB%2BO9a40sGfbbZIhNLkeRvjTJZ61zEs3SBLiWcmGXKXBq5UDqy951xn2hLemBNFQaoKr10GDFp6VweL1zbdUaHBq3kc9NI0qHJkCX6nmSSGdQkNSX7TiJ4aW0%2BbrslZWA%2FvVPuIdyFseNFH89qM3E54VKiurs7%2Br4PKxYnPRVdWVIPEafk5UQNIaxrPOAu8tKbCP6Ft5Tc0CcfoRKIl4iiA%2FQGXAbvY7mEdE%2BhTHKI24dKxHuXwmvrYoTmqQlEapNEICxF8uQeaegE4bJIbE%2FMOnEdnMFnImif3hBQkI95xpdOyx%2FHoUJo44aMp3DvznPMu4DAeF72mOsIqjwHskywIKTGYEIyG8Iw9p6IvQY6pgFITtezvG2kmcAh46ZjeXgaGaT0WnPk8t%2BmoxnSoR01lGuZ7J5Ta7i443jzWHbAD8LcD%2BZGhhNNfxYlYHydA1ddCakj7LqJHXj5BNilkLw%2FBAsTNFm1%2BfG7TWHMuIfK9gbtLUeGAcz5oTGgHhYd4Lf2t2nv9RzNIO2ExwmGC%2BkPD0zB0RKbVYhixBHPTP%2FEDaS9EijKaKMQpAD%2BSkDFCWP0%2BXkdMJCa&X-Amz-Signature=a3b0a38415bd8cbd2ebfb313973cf4708fd7007cdcf23bc99238267b89a232c0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657J7JFMF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGnGPMjwBXixZbwTiZPUySnkThI0v6jN0Cpx0mewl8wbAiBcaaHCn9mzHX4RmsgYmvX1W%2BAEhivlqnxrPbf%2BdlH%2F%2Fir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMS%2F1xGPPJwOk76kAHKtwDDugDUo3J%2BuIe7UtthXrwaSo%2FD2zQl%2FHyZsEh0cY9qp2Rx2kdagfHefqDvGeYFy%2BT54Ky1YZHgwgm293H6%2B%2F3nsQcnylKt5COMIjNnwss8QLrMdVh8iHr%2BbYftV9KtnZ%2FGKeVJH6z1zuSTNNRmYmfVI0ji%2FW9meJetpl9EDleKgthamTfHfp9%2F2r2v8eSQfO4kM%2BvQGgVQta%2F5tOlRTrH6JEsSKRD3%2FcMKF%2BNupz6HRaHdnF4qY6h46Tm9YlWwwV7ZiG5RsMQu1YhMnG7j4%2BYZQbn4hWB%2BO9a40sGfbbZIhNLkeRvjTJZ61zEs3SBLiWcmGXKXBq5UDqy951xn2hLemBNFQaoKr10GDFp6VweL1zbdUaHBq3kc9NI0qHJkCX6nmSSGdQkNSX7TiJ4aW0%2BbrslZWA%2FvVPuIdyFseNFH89qM3E54VKiurs7%2Br4PKxYnPRVdWVIPEafk5UQNIaxrPOAu8tKbCP6Ft5Tc0CcfoRKIl4iiA%2FQGXAbvY7mEdE%2BhTHKI24dKxHuXwmvrYoTmqQlEapNEICxF8uQeaegE4bJIbE%2FMOnEdnMFnImif3hBQkI95xpdOyx%2FHoUJo44aMp3DvznPMu4DAeF72mOsIqjwHskywIKTGYEIyG8Iw9p6IvQY6pgFITtezvG2kmcAh46ZjeXgaGaT0WnPk8t%2BmoxnSoR01lGuZ7J5Ta7i443jzWHbAD8LcD%2BZGhhNNfxYlYHydA1ddCakj7LqJHXj5BNilkLw%2FBAsTNFm1%2BfG7TWHMuIfK9gbtLUeGAcz5oTGgHhYd4Lf2t2nv9RzNIO2ExwmGC%2BkPD0zB0RKbVYhixBHPTP%2FEDaS9EijKaKMQpAD%2BSkDFCWP0%2BXkdMJCa&X-Amz-Signature=13f171c02d9a84b5d6fae32dbc9d63912ec8a762149c7321760ed59044c3d002&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
