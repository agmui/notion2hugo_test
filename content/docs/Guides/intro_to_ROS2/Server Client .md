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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXBJV4RZ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5Rq61VWTzot34lcp4Jp2gTVbxCH9HMNuhloy6e2yqJAiEA%2BA5iwiJZ9FIRHdrdyOQM93esR%2FsQJBChQdimFf%2FyF7sqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrNTemMDEHwBhIdkircA50jYPbq20NYwba9S1YJc8Td9qdqbMTzeeQPM7xBVCTx1SAR6XQVsSISCXqWQwl7ZfDSTmtrGbyXavO%2F%2Fbtl4DXkrWkgk3SDq9dr32iPP5NXdpCvki%2FEAJAEOZWk7jIGARosQ%2BMSoSynJCqKJOSq%2FRdSBET%2FJyXQ9aMuv9ua6bFXoUBkoqTFtPT7mN0pFfkoklnAlMHumofUHEo2APhTPiw8NhFyUIZ22%2B60KNFysxIsbjg%2BUaiH9OOL1V6%2Fw7%2BoF7NTGkoqAr0lqwuu%2F0BN34QIRXGhfcrcRT066dm5P24wEGX0EHLfq4f%2BwJczQ2pJ8FGyJhE4%2BlM4ipzFHTxPzKWFY%2B4nRkM7SVuNpVC9Ii1NvLBE8%2FE%2FUVqpKWuq6pQSongxKASQ0nqNvGeB7KcwFZj1uTEYASfYdMRvLFLvW%2Bmvt5BHf73nhRFoijhEoB9AYzQUI6ph%2FJAeV7Bd6rMjm1FvelFnAuwWjnEfIvYD4lLeDmf93krILtALKbXh4j1HmSNrxzn2mOVCD5%2BK0kl4fWojw%2BcYQ3XKJ0esuIPWKXJfGCdFPw%2F0TkkUC2OfORyPMLSD3Y6SDbTzM%2BHofcMH9be1vKz5B5wSkupuwdpZJLM4nTnPj8Xn650KvNIGMJvfvb8GOqUB%2B%2B3dTHz0AdZ7FRbCYGRzByMegavJgbxJTdZSozaAlQKUe8%2FMtn8rHSbUHhIzubcE5%2Bs1D9FHQTsZiBVhLkiJG1dTKzwX9ol1yA98qBS8PypZaL2daszoKBiwmRRawfHu3nYy4u8%2BfG%2Fg1hihQIRFePgXvpAYP9Cml0mLZ9W2jSb8A9h1lQwu2O8CNer69uCggUCGzRaY%2Bv0PWXumgiEYTs0M28u4&X-Amz-Signature=1cd524e1fc18daad5eb9688a1aac014fec7c29ea13eb713ec73736de00cb18a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXBJV4RZ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5Rq61VWTzot34lcp4Jp2gTVbxCH9HMNuhloy6e2yqJAiEA%2BA5iwiJZ9FIRHdrdyOQM93esR%2FsQJBChQdimFf%2FyF7sqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrNTemMDEHwBhIdkircA50jYPbq20NYwba9S1YJc8Td9qdqbMTzeeQPM7xBVCTx1SAR6XQVsSISCXqWQwl7ZfDSTmtrGbyXavO%2F%2Fbtl4DXkrWkgk3SDq9dr32iPP5NXdpCvki%2FEAJAEOZWk7jIGARosQ%2BMSoSynJCqKJOSq%2FRdSBET%2FJyXQ9aMuv9ua6bFXoUBkoqTFtPT7mN0pFfkoklnAlMHumofUHEo2APhTPiw8NhFyUIZ22%2B60KNFysxIsbjg%2BUaiH9OOL1V6%2Fw7%2BoF7NTGkoqAr0lqwuu%2F0BN34QIRXGhfcrcRT066dm5P24wEGX0EHLfq4f%2BwJczQ2pJ8FGyJhE4%2BlM4ipzFHTxPzKWFY%2B4nRkM7SVuNpVC9Ii1NvLBE8%2FE%2FUVqpKWuq6pQSongxKASQ0nqNvGeB7KcwFZj1uTEYASfYdMRvLFLvW%2Bmvt5BHf73nhRFoijhEoB9AYzQUI6ph%2FJAeV7Bd6rMjm1FvelFnAuwWjnEfIvYD4lLeDmf93krILtALKbXh4j1HmSNrxzn2mOVCD5%2BK0kl4fWojw%2BcYQ3XKJ0esuIPWKXJfGCdFPw%2F0TkkUC2OfORyPMLSD3Y6SDbTzM%2BHofcMH9be1vKz5B5wSkupuwdpZJLM4nTnPj8Xn650KvNIGMJvfvb8GOqUB%2B%2B3dTHz0AdZ7FRbCYGRzByMegavJgbxJTdZSozaAlQKUe8%2FMtn8rHSbUHhIzubcE5%2Bs1D9FHQTsZiBVhLkiJG1dTKzwX9ol1yA98qBS8PypZaL2daszoKBiwmRRawfHu3nYy4u8%2BfG%2Fg1hihQIRFePgXvpAYP9Cml0mLZ9W2jSb8A9h1lQwu2O8CNer69uCggUCGzRaY%2Bv0PWXumgiEYTs0M28u4&X-Amz-Signature=c3b6eac00d7354c5f1611c2f9099b190d6811a522ae07394a0d52e503dd23af7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXBJV4RZ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5Rq61VWTzot34lcp4Jp2gTVbxCH9HMNuhloy6e2yqJAiEA%2BA5iwiJZ9FIRHdrdyOQM93esR%2FsQJBChQdimFf%2FyF7sqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrNTemMDEHwBhIdkircA50jYPbq20NYwba9S1YJc8Td9qdqbMTzeeQPM7xBVCTx1SAR6XQVsSISCXqWQwl7ZfDSTmtrGbyXavO%2F%2Fbtl4DXkrWkgk3SDq9dr32iPP5NXdpCvki%2FEAJAEOZWk7jIGARosQ%2BMSoSynJCqKJOSq%2FRdSBET%2FJyXQ9aMuv9ua6bFXoUBkoqTFtPT7mN0pFfkoklnAlMHumofUHEo2APhTPiw8NhFyUIZ22%2B60KNFysxIsbjg%2BUaiH9OOL1V6%2Fw7%2BoF7NTGkoqAr0lqwuu%2F0BN34QIRXGhfcrcRT066dm5P24wEGX0EHLfq4f%2BwJczQ2pJ8FGyJhE4%2BlM4ipzFHTxPzKWFY%2B4nRkM7SVuNpVC9Ii1NvLBE8%2FE%2FUVqpKWuq6pQSongxKASQ0nqNvGeB7KcwFZj1uTEYASfYdMRvLFLvW%2Bmvt5BHf73nhRFoijhEoB9AYzQUI6ph%2FJAeV7Bd6rMjm1FvelFnAuwWjnEfIvYD4lLeDmf93krILtALKbXh4j1HmSNrxzn2mOVCD5%2BK0kl4fWojw%2BcYQ3XKJ0esuIPWKXJfGCdFPw%2F0TkkUC2OfORyPMLSD3Y6SDbTzM%2BHofcMH9be1vKz5B5wSkupuwdpZJLM4nTnPj8Xn650KvNIGMJvfvb8GOqUB%2B%2B3dTHz0AdZ7FRbCYGRzByMegavJgbxJTdZSozaAlQKUe8%2FMtn8rHSbUHhIzubcE5%2Bs1D9FHQTsZiBVhLkiJG1dTKzwX9ol1yA98qBS8PypZaL2daszoKBiwmRRawfHu3nYy4u8%2BfG%2Fg1hihQIRFePgXvpAYP9Cml0mLZ9W2jSb8A9h1lQwu2O8CNer69uCggUCGzRaY%2Bv0PWXumgiEYTs0M28u4&X-Amz-Signature=f776d7f8e0e424b988d572ff38036034ecc46adea91fa5698e771bea9994ab30&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXBJV4RZ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5Rq61VWTzot34lcp4Jp2gTVbxCH9HMNuhloy6e2yqJAiEA%2BA5iwiJZ9FIRHdrdyOQM93esR%2FsQJBChQdimFf%2FyF7sqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrNTemMDEHwBhIdkircA50jYPbq20NYwba9S1YJc8Td9qdqbMTzeeQPM7xBVCTx1SAR6XQVsSISCXqWQwl7ZfDSTmtrGbyXavO%2F%2Fbtl4DXkrWkgk3SDq9dr32iPP5NXdpCvki%2FEAJAEOZWk7jIGARosQ%2BMSoSynJCqKJOSq%2FRdSBET%2FJyXQ9aMuv9ua6bFXoUBkoqTFtPT7mN0pFfkoklnAlMHumofUHEo2APhTPiw8NhFyUIZ22%2B60KNFysxIsbjg%2BUaiH9OOL1V6%2Fw7%2BoF7NTGkoqAr0lqwuu%2F0BN34QIRXGhfcrcRT066dm5P24wEGX0EHLfq4f%2BwJczQ2pJ8FGyJhE4%2BlM4ipzFHTxPzKWFY%2B4nRkM7SVuNpVC9Ii1NvLBE8%2FE%2FUVqpKWuq6pQSongxKASQ0nqNvGeB7KcwFZj1uTEYASfYdMRvLFLvW%2Bmvt5BHf73nhRFoijhEoB9AYzQUI6ph%2FJAeV7Bd6rMjm1FvelFnAuwWjnEfIvYD4lLeDmf93krILtALKbXh4j1HmSNrxzn2mOVCD5%2BK0kl4fWojw%2BcYQ3XKJ0esuIPWKXJfGCdFPw%2F0TkkUC2OfORyPMLSD3Y6SDbTzM%2BHofcMH9be1vKz5B5wSkupuwdpZJLM4nTnPj8Xn650KvNIGMJvfvb8GOqUB%2B%2B3dTHz0AdZ7FRbCYGRzByMegavJgbxJTdZSozaAlQKUe8%2FMtn8rHSbUHhIzubcE5%2Bs1D9FHQTsZiBVhLkiJG1dTKzwX9ol1yA98qBS8PypZaL2daszoKBiwmRRawfHu3nYy4u8%2BfG%2Fg1hihQIRFePgXvpAYP9Cml0mLZ9W2jSb8A9h1lQwu2O8CNer69uCggUCGzRaY%2Bv0PWXumgiEYTs0M28u4&X-Amz-Signature=d4228f4304eb21214642a65101ff4d005fe05d3ff18f5feba05cfacceba42405&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXBJV4RZ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5Rq61VWTzot34lcp4Jp2gTVbxCH9HMNuhloy6e2yqJAiEA%2BA5iwiJZ9FIRHdrdyOQM93esR%2FsQJBChQdimFf%2FyF7sqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrNTemMDEHwBhIdkircA50jYPbq20NYwba9S1YJc8Td9qdqbMTzeeQPM7xBVCTx1SAR6XQVsSISCXqWQwl7ZfDSTmtrGbyXavO%2F%2Fbtl4DXkrWkgk3SDq9dr32iPP5NXdpCvki%2FEAJAEOZWk7jIGARosQ%2BMSoSynJCqKJOSq%2FRdSBET%2FJyXQ9aMuv9ua6bFXoUBkoqTFtPT7mN0pFfkoklnAlMHumofUHEo2APhTPiw8NhFyUIZ22%2B60KNFysxIsbjg%2BUaiH9OOL1V6%2Fw7%2BoF7NTGkoqAr0lqwuu%2F0BN34QIRXGhfcrcRT066dm5P24wEGX0EHLfq4f%2BwJczQ2pJ8FGyJhE4%2BlM4ipzFHTxPzKWFY%2B4nRkM7SVuNpVC9Ii1NvLBE8%2FE%2FUVqpKWuq6pQSongxKASQ0nqNvGeB7KcwFZj1uTEYASfYdMRvLFLvW%2Bmvt5BHf73nhRFoijhEoB9AYzQUI6ph%2FJAeV7Bd6rMjm1FvelFnAuwWjnEfIvYD4lLeDmf93krILtALKbXh4j1HmSNrxzn2mOVCD5%2BK0kl4fWojw%2BcYQ3XKJ0esuIPWKXJfGCdFPw%2F0TkkUC2OfORyPMLSD3Y6SDbTzM%2BHofcMH9be1vKz5B5wSkupuwdpZJLM4nTnPj8Xn650KvNIGMJvfvb8GOqUB%2B%2B3dTHz0AdZ7FRbCYGRzByMegavJgbxJTdZSozaAlQKUe8%2FMtn8rHSbUHhIzubcE5%2Bs1D9FHQTsZiBVhLkiJG1dTKzwX9ol1yA98qBS8PypZaL2daszoKBiwmRRawfHu3nYy4u8%2BfG%2Fg1hihQIRFePgXvpAYP9Cml0mLZ9W2jSb8A9h1lQwu2O8CNer69uCggUCGzRaY%2Bv0PWXumgiEYTs0M28u4&X-Amz-Signature=b0483b17a77ffe9c9298e9e748b446299a7ac253ec2e343300f58ee9f5f8bcb4&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
