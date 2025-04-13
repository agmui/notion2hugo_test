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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3PB3BFL%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T121330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCcV0qbuelfcYhe4GP5r3yADchM96Qr85eRmAX%2BKuQklAIgAif9PMUF0JMe8OgfUPiKMNqbB5RSw9xqU6pHO2ApjwcqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcbkz%2FEnQxOKlCe6SrcA3qpMTXRDaUdVmsYrnPtTso8rVzqFri8%2FiU5DulRhThyVPJg%2FZLhDyx%2FQCWgn8pZS86urU4tcT%2FA5uyGp1OM6LfE04oHeqXSVeb0lEw4w5MjXF%2FbcGZn4G3MewC%2FLIGaSGb7%2FUISn4FUq%2F%2FTIt29afIM5GL6ZdCOD%2Bf7g4Z74z9imfy77Esn6MiAWwKrL98GyBoxsW4wEEgnjxwd7rr3NIUUBBoUF%2B3pKsqD0WVWcQqNh6AFCoAEezr1zJIbzuZ4Bxo6xTorgirn6ilnAlkJ9jdxh6AYbnhk9%2BeW%2BdgimFAyUv615xAXfisliYbCHYyyLHTyg6H5YOJF%2FEE1rMAficmMwlpKSLATl0j2zS03ee5kUKVlSH0JfYXpjeWunO7Tq%2F%2BmrQ%2F%2BedWdH67nhJkt82cIa6%2Fp8GiB6FEwrgYABygL5%2FU9APw2ndpQLjd%2BiRvyZbQLYlJvVLI%2B4%2FzNKUe38ILFA2OPtGRoDSP5B%2FreZ6ycTFfrAVIylZ5QgLBPe99X0sTqB%2FiMSVg4UlPmtxK4jXLvWlrpvqvig8f64xQjYR7exLUmgYlz40hORW65YHeDl3R%2BdrmUfFLRmQLm68YIWRQWA4Vum7aP66HvGQ7Qcpsx8qEDA1rw1NZt4V%2BIMNO97r8GOqUBU6GIC2qnZ3R%2Fo%2BdmgR%2FJ5dG7LjL7xbCAsjRVv5cWpX7Vu1LBgPcaJPd8chPWbhBQmxsrrEm41S9kQbm87nysOWkmCwGajUudjLRoz45uftUGxcpYF4bfWQGhd65AH6JtlbLl%2BqahF1%2BiZ8MO%2FeiPh92zN9nBDC6iWPhpcxiToFZjHmy3LWVduXdMH%2B0NaU7yvty7mHE9HpLe7W0hI%2BHJahUiCNgM&X-Amz-Signature=021bc35efd316b59d63dccb1a6d7e2c7630991851cd4455a72c83288a28fcb71&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3PB3BFL%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T121330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCcV0qbuelfcYhe4GP5r3yADchM96Qr85eRmAX%2BKuQklAIgAif9PMUF0JMe8OgfUPiKMNqbB5RSw9xqU6pHO2ApjwcqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcbkz%2FEnQxOKlCe6SrcA3qpMTXRDaUdVmsYrnPtTso8rVzqFri8%2FiU5DulRhThyVPJg%2FZLhDyx%2FQCWgn8pZS86urU4tcT%2FA5uyGp1OM6LfE04oHeqXSVeb0lEw4w5MjXF%2FbcGZn4G3MewC%2FLIGaSGb7%2FUISn4FUq%2F%2FTIt29afIM5GL6ZdCOD%2Bf7g4Z74z9imfy77Esn6MiAWwKrL98GyBoxsW4wEEgnjxwd7rr3NIUUBBoUF%2B3pKsqD0WVWcQqNh6AFCoAEezr1zJIbzuZ4Bxo6xTorgirn6ilnAlkJ9jdxh6AYbnhk9%2BeW%2BdgimFAyUv615xAXfisliYbCHYyyLHTyg6H5YOJF%2FEE1rMAficmMwlpKSLATl0j2zS03ee5kUKVlSH0JfYXpjeWunO7Tq%2F%2BmrQ%2F%2BedWdH67nhJkt82cIa6%2Fp8GiB6FEwrgYABygL5%2FU9APw2ndpQLjd%2BiRvyZbQLYlJvVLI%2B4%2FzNKUe38ILFA2OPtGRoDSP5B%2FreZ6ycTFfrAVIylZ5QgLBPe99X0sTqB%2FiMSVg4UlPmtxK4jXLvWlrpvqvig8f64xQjYR7exLUmgYlz40hORW65YHeDl3R%2BdrmUfFLRmQLm68YIWRQWA4Vum7aP66HvGQ7Qcpsx8qEDA1rw1NZt4V%2BIMNO97r8GOqUBU6GIC2qnZ3R%2Fo%2BdmgR%2FJ5dG7LjL7xbCAsjRVv5cWpX7Vu1LBgPcaJPd8chPWbhBQmxsrrEm41S9kQbm87nysOWkmCwGajUudjLRoz45uftUGxcpYF4bfWQGhd65AH6JtlbLl%2BqahF1%2BiZ8MO%2FeiPh92zN9nBDC6iWPhpcxiToFZjHmy3LWVduXdMH%2B0NaU7yvty7mHE9HpLe7W0hI%2BHJahUiCNgM&X-Amz-Signature=c2ed094b1d87b07916fa0ec6446a353b195fc9c7288694bf35d3709bbb10e7ef&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3PB3BFL%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T121330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCcV0qbuelfcYhe4GP5r3yADchM96Qr85eRmAX%2BKuQklAIgAif9PMUF0JMe8OgfUPiKMNqbB5RSw9xqU6pHO2ApjwcqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcbkz%2FEnQxOKlCe6SrcA3qpMTXRDaUdVmsYrnPtTso8rVzqFri8%2FiU5DulRhThyVPJg%2FZLhDyx%2FQCWgn8pZS86urU4tcT%2FA5uyGp1OM6LfE04oHeqXSVeb0lEw4w5MjXF%2FbcGZn4G3MewC%2FLIGaSGb7%2FUISn4FUq%2F%2FTIt29afIM5GL6ZdCOD%2Bf7g4Z74z9imfy77Esn6MiAWwKrL98GyBoxsW4wEEgnjxwd7rr3NIUUBBoUF%2B3pKsqD0WVWcQqNh6AFCoAEezr1zJIbzuZ4Bxo6xTorgirn6ilnAlkJ9jdxh6AYbnhk9%2BeW%2BdgimFAyUv615xAXfisliYbCHYyyLHTyg6H5YOJF%2FEE1rMAficmMwlpKSLATl0j2zS03ee5kUKVlSH0JfYXpjeWunO7Tq%2F%2BmrQ%2F%2BedWdH67nhJkt82cIa6%2Fp8GiB6FEwrgYABygL5%2FU9APw2ndpQLjd%2BiRvyZbQLYlJvVLI%2B4%2FzNKUe38ILFA2OPtGRoDSP5B%2FreZ6ycTFfrAVIylZ5QgLBPe99X0sTqB%2FiMSVg4UlPmtxK4jXLvWlrpvqvig8f64xQjYR7exLUmgYlz40hORW65YHeDl3R%2BdrmUfFLRmQLm68YIWRQWA4Vum7aP66HvGQ7Qcpsx8qEDA1rw1NZt4V%2BIMNO97r8GOqUBU6GIC2qnZ3R%2Fo%2BdmgR%2FJ5dG7LjL7xbCAsjRVv5cWpX7Vu1LBgPcaJPd8chPWbhBQmxsrrEm41S9kQbm87nysOWkmCwGajUudjLRoz45uftUGxcpYF4bfWQGhd65AH6JtlbLl%2BqahF1%2BiZ8MO%2FeiPh92zN9nBDC6iWPhpcxiToFZjHmy3LWVduXdMH%2B0NaU7yvty7mHE9HpLe7W0hI%2BHJahUiCNgM&X-Amz-Signature=58562c25fff2aa6db6f5b9cf9c9ec1b48dd35eb58d673715a8fb78422dd9b32e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3PB3BFL%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T121330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCcV0qbuelfcYhe4GP5r3yADchM96Qr85eRmAX%2BKuQklAIgAif9PMUF0JMe8OgfUPiKMNqbB5RSw9xqU6pHO2ApjwcqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcbkz%2FEnQxOKlCe6SrcA3qpMTXRDaUdVmsYrnPtTso8rVzqFri8%2FiU5DulRhThyVPJg%2FZLhDyx%2FQCWgn8pZS86urU4tcT%2FA5uyGp1OM6LfE04oHeqXSVeb0lEw4w5MjXF%2FbcGZn4G3MewC%2FLIGaSGb7%2FUISn4FUq%2F%2FTIt29afIM5GL6ZdCOD%2Bf7g4Z74z9imfy77Esn6MiAWwKrL98GyBoxsW4wEEgnjxwd7rr3NIUUBBoUF%2B3pKsqD0WVWcQqNh6AFCoAEezr1zJIbzuZ4Bxo6xTorgirn6ilnAlkJ9jdxh6AYbnhk9%2BeW%2BdgimFAyUv615xAXfisliYbCHYyyLHTyg6H5YOJF%2FEE1rMAficmMwlpKSLATl0j2zS03ee5kUKVlSH0JfYXpjeWunO7Tq%2F%2BmrQ%2F%2BedWdH67nhJkt82cIa6%2Fp8GiB6FEwrgYABygL5%2FU9APw2ndpQLjd%2BiRvyZbQLYlJvVLI%2B4%2FzNKUe38ILFA2OPtGRoDSP5B%2FreZ6ycTFfrAVIylZ5QgLBPe99X0sTqB%2FiMSVg4UlPmtxK4jXLvWlrpvqvig8f64xQjYR7exLUmgYlz40hORW65YHeDl3R%2BdrmUfFLRmQLm68YIWRQWA4Vum7aP66HvGQ7Qcpsx8qEDA1rw1NZt4V%2BIMNO97r8GOqUBU6GIC2qnZ3R%2Fo%2BdmgR%2FJ5dG7LjL7xbCAsjRVv5cWpX7Vu1LBgPcaJPd8chPWbhBQmxsrrEm41S9kQbm87nysOWkmCwGajUudjLRoz45uftUGxcpYF4bfWQGhd65AH6JtlbLl%2BqahF1%2BiZ8MO%2FeiPh92zN9nBDC6iWPhpcxiToFZjHmy3LWVduXdMH%2B0NaU7yvty7mHE9HpLe7W0hI%2BHJahUiCNgM&X-Amz-Signature=c45fc35d831637d7efa32b750f20d7dd31e724eb0510ed56f4110cd4a1d41a7c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3PB3BFL%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T121330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCcV0qbuelfcYhe4GP5r3yADchM96Qr85eRmAX%2BKuQklAIgAif9PMUF0JMe8OgfUPiKMNqbB5RSw9xqU6pHO2ApjwcqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcbkz%2FEnQxOKlCe6SrcA3qpMTXRDaUdVmsYrnPtTso8rVzqFri8%2FiU5DulRhThyVPJg%2FZLhDyx%2FQCWgn8pZS86urU4tcT%2FA5uyGp1OM6LfE04oHeqXSVeb0lEw4w5MjXF%2FbcGZn4G3MewC%2FLIGaSGb7%2FUISn4FUq%2F%2FTIt29afIM5GL6ZdCOD%2Bf7g4Z74z9imfy77Esn6MiAWwKrL98GyBoxsW4wEEgnjxwd7rr3NIUUBBoUF%2B3pKsqD0WVWcQqNh6AFCoAEezr1zJIbzuZ4Bxo6xTorgirn6ilnAlkJ9jdxh6AYbnhk9%2BeW%2BdgimFAyUv615xAXfisliYbCHYyyLHTyg6H5YOJF%2FEE1rMAficmMwlpKSLATl0j2zS03ee5kUKVlSH0JfYXpjeWunO7Tq%2F%2BmrQ%2F%2BedWdH67nhJkt82cIa6%2Fp8GiB6FEwrgYABygL5%2FU9APw2ndpQLjd%2BiRvyZbQLYlJvVLI%2B4%2FzNKUe38ILFA2OPtGRoDSP5B%2FreZ6ycTFfrAVIylZ5QgLBPe99X0sTqB%2FiMSVg4UlPmtxK4jXLvWlrpvqvig8f64xQjYR7exLUmgYlz40hORW65YHeDl3R%2BdrmUfFLRmQLm68YIWRQWA4Vum7aP66HvGQ7Qcpsx8qEDA1rw1NZt4V%2BIMNO97r8GOqUBU6GIC2qnZ3R%2Fo%2BdmgR%2FJ5dG7LjL7xbCAsjRVv5cWpX7Vu1LBgPcaJPd8chPWbhBQmxsrrEm41S9kQbm87nysOWkmCwGajUudjLRoz45uftUGxcpYF4bfWQGhd65AH6JtlbLl%2BqahF1%2BiZ8MO%2FeiPh92zN9nBDC6iWPhpcxiToFZjHmy3LWVduXdMH%2B0NaU7yvty7mHE9HpLe7W0hI%2BHJahUiCNgM&X-Amz-Signature=4174dcc7e0d8b7db707cbea370b6c478d01129366ad2667451e48566dc551b5d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
