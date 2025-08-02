---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JOTG3PP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4taeeuC%2Fi9vwJ%2BuEWHAJ10CiwgU6kvEDqxmhPU49HYgIgTyrNto1xxUarPBvPbFq1gipaVZ2CgcnH67qe0uRB%2FGMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDSjEvSXrvHDZcFNeSrcA9Zy2fuUTvrCe3L2BPWfG3MJtlUispgkUe7cPuNbewctHk5z%2BJV6%2F%2BHr5VqAfLWhQWKKCDhpWEIUnzMIAnZDFCEaYdlbyjeDniDg03btWDRg59X0x7wS0%2FqbBJqEc04pzUowu1JERLGie5RdfPXz7DGrZZeiyd%2BT%2BCAIlufaGPAUG2%2FjC3LGf3NTvEZvSoFy5nLD6Z2Ae3fGfgZLEpwOkT6qOTtRs86lOjSpHHYcku6zxo9vo2eL0MAVhehJiRSqBeauKGS9E4YmqLlE%2FZd%2B25RnNnw%2BI5%2F7roFBFUMw%2FF6mhhhogRIp0hQHfi8aBObRR%2FUhZLsgioerwAyzzwE7sZ1me6N%2Fe9sVwdhqhSVjsp8RPFEt37kztuqbsSJICR9qwuGLabyqZfBqYAAW2fWeQvtTlW8JnMpuLqO1HXK4WSNvqruc2pOSvhOSuqpIA7YD9yZjXWbFvEzZsQZTffTy0fQvdtQmebywVIuGSqk67s6w6rNhTViuJXqPbelUUnANqxboGmGpQlXO6u0EzjS8rU5s16dEXdwngPyjyVlRuvrxio8NUUASlbhazuSa%2BU11%2Bme6TmfU0XVFcTJAaffGdSBebJiVBX5VmwlqjJjosXuXftiQICkX%2BKMw4%2BteMIOeucQGOqUBaInnScJkJwhXywCsqJy1NVCvAMM8%2FM14KYTpmTsW9SXzABN8XItXHtDsMvVbBqBDMA9m3r4tHnj4rUztCJi%2Fr5X83MtCUiOU%2BKLEyNcjeWbyDyH2AHFr5nyqxkaYBeYOofITJy1gnUOq9mJtul0Jd%2Ffo8svzkoqjBwKgS%2BxHrSc%2F%2FsmPQRRDDQpCRR7rfGlrQ5HL6MJC%2BHG9qoG8%2BHLz%2F4zxR5g%2F&X-Amz-Signature=832480a255171766ddce5e711b46dcb7e0f0efc8a6bac44b206feb7f9e03af09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JOTG3PP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4taeeuC%2Fi9vwJ%2BuEWHAJ10CiwgU6kvEDqxmhPU49HYgIgTyrNto1xxUarPBvPbFq1gipaVZ2CgcnH67qe0uRB%2FGMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDSjEvSXrvHDZcFNeSrcA9Zy2fuUTvrCe3L2BPWfG3MJtlUispgkUe7cPuNbewctHk5z%2BJV6%2F%2BHr5VqAfLWhQWKKCDhpWEIUnzMIAnZDFCEaYdlbyjeDniDg03btWDRg59X0x7wS0%2FqbBJqEc04pzUowu1JERLGie5RdfPXz7DGrZZeiyd%2BT%2BCAIlufaGPAUG2%2FjC3LGf3NTvEZvSoFy5nLD6Z2Ae3fGfgZLEpwOkT6qOTtRs86lOjSpHHYcku6zxo9vo2eL0MAVhehJiRSqBeauKGS9E4YmqLlE%2FZd%2B25RnNnw%2BI5%2F7roFBFUMw%2FF6mhhhogRIp0hQHfi8aBObRR%2FUhZLsgioerwAyzzwE7sZ1me6N%2Fe9sVwdhqhSVjsp8RPFEt37kztuqbsSJICR9qwuGLabyqZfBqYAAW2fWeQvtTlW8JnMpuLqO1HXK4WSNvqruc2pOSvhOSuqpIA7YD9yZjXWbFvEzZsQZTffTy0fQvdtQmebywVIuGSqk67s6w6rNhTViuJXqPbelUUnANqxboGmGpQlXO6u0EzjS8rU5s16dEXdwngPyjyVlRuvrxio8NUUASlbhazuSa%2BU11%2Bme6TmfU0XVFcTJAaffGdSBebJiVBX5VmwlqjJjosXuXftiQICkX%2BKMw4%2BteMIOeucQGOqUBaInnScJkJwhXywCsqJy1NVCvAMM8%2FM14KYTpmTsW9SXzABN8XItXHtDsMvVbBqBDMA9m3r4tHnj4rUztCJi%2Fr5X83MtCUiOU%2BKLEyNcjeWbyDyH2AHFr5nyqxkaYBeYOofITJy1gnUOq9mJtul0Jd%2Ffo8svzkoqjBwKgS%2BxHrSc%2F%2FsmPQRRDDQpCRR7rfGlrQ5HL6MJC%2BHG9qoG8%2BHLz%2F4zxR5g%2F&X-Amz-Signature=903f75827cc8dfa2f0d38e11ae0d2e6827bc320f336ba3640206f3dfbcd30311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JOTG3PP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4taeeuC%2Fi9vwJ%2BuEWHAJ10CiwgU6kvEDqxmhPU49HYgIgTyrNto1xxUarPBvPbFq1gipaVZ2CgcnH67qe0uRB%2FGMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDSjEvSXrvHDZcFNeSrcA9Zy2fuUTvrCe3L2BPWfG3MJtlUispgkUe7cPuNbewctHk5z%2BJV6%2F%2BHr5VqAfLWhQWKKCDhpWEIUnzMIAnZDFCEaYdlbyjeDniDg03btWDRg59X0x7wS0%2FqbBJqEc04pzUowu1JERLGie5RdfPXz7DGrZZeiyd%2BT%2BCAIlufaGPAUG2%2FjC3LGf3NTvEZvSoFy5nLD6Z2Ae3fGfgZLEpwOkT6qOTtRs86lOjSpHHYcku6zxo9vo2eL0MAVhehJiRSqBeauKGS9E4YmqLlE%2FZd%2B25RnNnw%2BI5%2F7roFBFUMw%2FF6mhhhogRIp0hQHfi8aBObRR%2FUhZLsgioerwAyzzwE7sZ1me6N%2Fe9sVwdhqhSVjsp8RPFEt37kztuqbsSJICR9qwuGLabyqZfBqYAAW2fWeQvtTlW8JnMpuLqO1HXK4WSNvqruc2pOSvhOSuqpIA7YD9yZjXWbFvEzZsQZTffTy0fQvdtQmebywVIuGSqk67s6w6rNhTViuJXqPbelUUnANqxboGmGpQlXO6u0EzjS8rU5s16dEXdwngPyjyVlRuvrxio8NUUASlbhazuSa%2BU11%2Bme6TmfU0XVFcTJAaffGdSBebJiVBX5VmwlqjJjosXuXftiQICkX%2BKMw4%2BteMIOeucQGOqUBaInnScJkJwhXywCsqJy1NVCvAMM8%2FM14KYTpmTsW9SXzABN8XItXHtDsMvVbBqBDMA9m3r4tHnj4rUztCJi%2Fr5X83MtCUiOU%2BKLEyNcjeWbyDyH2AHFr5nyqxkaYBeYOofITJy1gnUOq9mJtul0Jd%2Ffo8svzkoqjBwKgS%2BxHrSc%2F%2FsmPQRRDDQpCRR7rfGlrQ5HL6MJC%2BHG9qoG8%2BHLz%2F4zxR5g%2F&X-Amz-Signature=46603a990067879102ab63358ff9a1360da47591f376fe15f0eabb1ba0bc55d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JOTG3PP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4taeeuC%2Fi9vwJ%2BuEWHAJ10CiwgU6kvEDqxmhPU49HYgIgTyrNto1xxUarPBvPbFq1gipaVZ2CgcnH67qe0uRB%2FGMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDSjEvSXrvHDZcFNeSrcA9Zy2fuUTvrCe3L2BPWfG3MJtlUispgkUe7cPuNbewctHk5z%2BJV6%2F%2BHr5VqAfLWhQWKKCDhpWEIUnzMIAnZDFCEaYdlbyjeDniDg03btWDRg59X0x7wS0%2FqbBJqEc04pzUowu1JERLGie5RdfPXz7DGrZZeiyd%2BT%2BCAIlufaGPAUG2%2FjC3LGf3NTvEZvSoFy5nLD6Z2Ae3fGfgZLEpwOkT6qOTtRs86lOjSpHHYcku6zxo9vo2eL0MAVhehJiRSqBeauKGS9E4YmqLlE%2FZd%2B25RnNnw%2BI5%2F7roFBFUMw%2FF6mhhhogRIp0hQHfi8aBObRR%2FUhZLsgioerwAyzzwE7sZ1me6N%2Fe9sVwdhqhSVjsp8RPFEt37kztuqbsSJICR9qwuGLabyqZfBqYAAW2fWeQvtTlW8JnMpuLqO1HXK4WSNvqruc2pOSvhOSuqpIA7YD9yZjXWbFvEzZsQZTffTy0fQvdtQmebywVIuGSqk67s6w6rNhTViuJXqPbelUUnANqxboGmGpQlXO6u0EzjS8rU5s16dEXdwngPyjyVlRuvrxio8NUUASlbhazuSa%2BU11%2Bme6TmfU0XVFcTJAaffGdSBebJiVBX5VmwlqjJjosXuXftiQICkX%2BKMw4%2BteMIOeucQGOqUBaInnScJkJwhXywCsqJy1NVCvAMM8%2FM14KYTpmTsW9SXzABN8XItXHtDsMvVbBqBDMA9m3r4tHnj4rUztCJi%2Fr5X83MtCUiOU%2BKLEyNcjeWbyDyH2AHFr5nyqxkaYBeYOofITJy1gnUOq9mJtul0Jd%2Ffo8svzkoqjBwKgS%2BxHrSc%2F%2FsmPQRRDDQpCRR7rfGlrQ5HL6MJC%2BHG9qoG8%2BHLz%2F4zxR5g%2F&X-Amz-Signature=afd81727704878d75d17bcdd8e80585a4fa0ef58832faccc7a21c5b64b1c1b64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JOTG3PP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4taeeuC%2Fi9vwJ%2BuEWHAJ10CiwgU6kvEDqxmhPU49HYgIgTyrNto1xxUarPBvPbFq1gipaVZ2CgcnH67qe0uRB%2FGMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDSjEvSXrvHDZcFNeSrcA9Zy2fuUTvrCe3L2BPWfG3MJtlUispgkUe7cPuNbewctHk5z%2BJV6%2F%2BHr5VqAfLWhQWKKCDhpWEIUnzMIAnZDFCEaYdlbyjeDniDg03btWDRg59X0x7wS0%2FqbBJqEc04pzUowu1JERLGie5RdfPXz7DGrZZeiyd%2BT%2BCAIlufaGPAUG2%2FjC3LGf3NTvEZvSoFy5nLD6Z2Ae3fGfgZLEpwOkT6qOTtRs86lOjSpHHYcku6zxo9vo2eL0MAVhehJiRSqBeauKGS9E4YmqLlE%2FZd%2B25RnNnw%2BI5%2F7roFBFUMw%2FF6mhhhogRIp0hQHfi8aBObRR%2FUhZLsgioerwAyzzwE7sZ1me6N%2Fe9sVwdhqhSVjsp8RPFEt37kztuqbsSJICR9qwuGLabyqZfBqYAAW2fWeQvtTlW8JnMpuLqO1HXK4WSNvqruc2pOSvhOSuqpIA7YD9yZjXWbFvEzZsQZTffTy0fQvdtQmebywVIuGSqk67s6w6rNhTViuJXqPbelUUnANqxboGmGpQlXO6u0EzjS8rU5s16dEXdwngPyjyVlRuvrxio8NUUASlbhazuSa%2BU11%2Bme6TmfU0XVFcTJAaffGdSBebJiVBX5VmwlqjJjosXuXftiQICkX%2BKMw4%2BteMIOeucQGOqUBaInnScJkJwhXywCsqJy1NVCvAMM8%2FM14KYTpmTsW9SXzABN8XItXHtDsMvVbBqBDMA9m3r4tHnj4rUztCJi%2Fr5X83MtCUiOU%2BKLEyNcjeWbyDyH2AHFr5nyqxkaYBeYOofITJy1gnUOq9mJtul0Jd%2Ffo8svzkoqjBwKgS%2BxHrSc%2F%2FsmPQRRDDQpCRR7rfGlrQ5HL6MJC%2BHG9qoG8%2BHLz%2F4zxR5g%2F&X-Amz-Signature=9ae8075b2bbb9befced5bf014a71c75378b51d3749d739d762d2cf4179aea64e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
