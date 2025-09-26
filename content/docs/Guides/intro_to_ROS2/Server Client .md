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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAVFCY4S%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDCTa3aV%2Byr3z4mzNNouXi9SiCEzCt5WoZHdEkNywIVAIhAMygFMuNxcM4vKZNpHe4dXLH8Ti4dAll%2BBvQYikDZJHXKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMpgKhMJ31qBhqcJ8q3AOsmtmiTSWvf%2BdjJTfEpnVKgIKFb9PhP8sa1U5wU%2BPo9H81YD5L7bvIGmI2SKiPmF6dxyxv38pPlui82p3O1uu%2F28ihXPAS%2BQV69Gv4IgRVSopTD%2B782mzGn45ELTSzM4VyE9PFpqH0b1GJ2cAbI%2BXCQsMACCqDDlf9umypsuX5Yl1VMCGZ%2BGvCsLAbjkKTaWcwdi2YgcJDAGobaH5044cEHbovOBzC0Ai5T9tLQNGP4ZiPGvTg1pOthEWb9md%2F8yfitCFrL7QKP%2F0QTB5T%2BqdeuSbvC%2FdfktQwsDLN%2BLeTeiU6RqEE%2FTAPB6V2Wc83MkMrx%2FDk7EMI4UlWSRmHEzKAa9cYTtZwdZHD9NOdY8X8pQ80KP2%2B%2BPGNbQ3n5os9deUteNfyQzFWEAdtRJ6K6dB33Ymxax5JvrwHeC9exwryJxNSs5%2BLOFaUE2JLLjS2rtXj5VK7CdX7jzeHfq39DdTt1uI0QLJ4tBYSsjSj%2FvgY0YBYjFcWpv%2Ff8R32Pzb6tCh7kE3s1P1G0SXSft2%2BgIyNTx8vO4t3LC43e8obZKSY4MRnaolTeM6Y17rzoUY5ypMWfqkVMmrc9UMS92Zcg0R1eTwQ8S3HpHLR8LU2r9Tfs%2Bc3C%2FkRaJ5qTFGA1DCxqNfGBjqkARF5nFgcwjrlhH9KmgSxUiAk3lNhNBrUgfunNrzMXjrZrBqyZJSL3a8jFDjw00hTJdgCya%2B6kc0pJFsX8lAWTcwYJaos7gWdcr14gFLyefN78aWp4twNy8i4T%2BJeTt7U8wLd9%2FYIPhj8LVy4sykcZ10GczNIfzzn%2B74IYY88m4CqlNiG2EQ1GF9er7dnMdl1O7i9rz2QEatskgrVeI03Rp4VoPFS&X-Amz-Signature=6afccfa88e25f63a9bfabf1d36e1cdd590d40146349d8f58b6fab39131db76e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAVFCY4S%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDCTa3aV%2Byr3z4mzNNouXi9SiCEzCt5WoZHdEkNywIVAIhAMygFMuNxcM4vKZNpHe4dXLH8Ti4dAll%2BBvQYikDZJHXKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMpgKhMJ31qBhqcJ8q3AOsmtmiTSWvf%2BdjJTfEpnVKgIKFb9PhP8sa1U5wU%2BPo9H81YD5L7bvIGmI2SKiPmF6dxyxv38pPlui82p3O1uu%2F28ihXPAS%2BQV69Gv4IgRVSopTD%2B782mzGn45ELTSzM4VyE9PFpqH0b1GJ2cAbI%2BXCQsMACCqDDlf9umypsuX5Yl1VMCGZ%2BGvCsLAbjkKTaWcwdi2YgcJDAGobaH5044cEHbovOBzC0Ai5T9tLQNGP4ZiPGvTg1pOthEWb9md%2F8yfitCFrL7QKP%2F0QTB5T%2BqdeuSbvC%2FdfktQwsDLN%2BLeTeiU6RqEE%2FTAPB6V2Wc83MkMrx%2FDk7EMI4UlWSRmHEzKAa9cYTtZwdZHD9NOdY8X8pQ80KP2%2B%2BPGNbQ3n5os9deUteNfyQzFWEAdtRJ6K6dB33Ymxax5JvrwHeC9exwryJxNSs5%2BLOFaUE2JLLjS2rtXj5VK7CdX7jzeHfq39DdTt1uI0QLJ4tBYSsjSj%2FvgY0YBYjFcWpv%2Ff8R32Pzb6tCh7kE3s1P1G0SXSft2%2BgIyNTx8vO4t3LC43e8obZKSY4MRnaolTeM6Y17rzoUY5ypMWfqkVMmrc9UMS92Zcg0R1eTwQ8S3HpHLR8LU2r9Tfs%2Bc3C%2FkRaJ5qTFGA1DCxqNfGBjqkARF5nFgcwjrlhH9KmgSxUiAk3lNhNBrUgfunNrzMXjrZrBqyZJSL3a8jFDjw00hTJdgCya%2B6kc0pJFsX8lAWTcwYJaos7gWdcr14gFLyefN78aWp4twNy8i4T%2BJeTt7U8wLd9%2FYIPhj8LVy4sykcZ10GczNIfzzn%2B74IYY88m4CqlNiG2EQ1GF9er7dnMdl1O7i9rz2QEatskgrVeI03Rp4VoPFS&X-Amz-Signature=983402fc3b17d522936835eb7470399ced95b5ed7184b4251489017386a17100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAVFCY4S%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDCTa3aV%2Byr3z4mzNNouXi9SiCEzCt5WoZHdEkNywIVAIhAMygFMuNxcM4vKZNpHe4dXLH8Ti4dAll%2BBvQYikDZJHXKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMpgKhMJ31qBhqcJ8q3AOsmtmiTSWvf%2BdjJTfEpnVKgIKFb9PhP8sa1U5wU%2BPo9H81YD5L7bvIGmI2SKiPmF6dxyxv38pPlui82p3O1uu%2F28ihXPAS%2BQV69Gv4IgRVSopTD%2B782mzGn45ELTSzM4VyE9PFpqH0b1GJ2cAbI%2BXCQsMACCqDDlf9umypsuX5Yl1VMCGZ%2BGvCsLAbjkKTaWcwdi2YgcJDAGobaH5044cEHbovOBzC0Ai5T9tLQNGP4ZiPGvTg1pOthEWb9md%2F8yfitCFrL7QKP%2F0QTB5T%2BqdeuSbvC%2FdfktQwsDLN%2BLeTeiU6RqEE%2FTAPB6V2Wc83MkMrx%2FDk7EMI4UlWSRmHEzKAa9cYTtZwdZHD9NOdY8X8pQ80KP2%2B%2BPGNbQ3n5os9deUteNfyQzFWEAdtRJ6K6dB33Ymxax5JvrwHeC9exwryJxNSs5%2BLOFaUE2JLLjS2rtXj5VK7CdX7jzeHfq39DdTt1uI0QLJ4tBYSsjSj%2FvgY0YBYjFcWpv%2Ff8R32Pzb6tCh7kE3s1P1G0SXSft2%2BgIyNTx8vO4t3LC43e8obZKSY4MRnaolTeM6Y17rzoUY5ypMWfqkVMmrc9UMS92Zcg0R1eTwQ8S3HpHLR8LU2r9Tfs%2Bc3C%2FkRaJ5qTFGA1DCxqNfGBjqkARF5nFgcwjrlhH9KmgSxUiAk3lNhNBrUgfunNrzMXjrZrBqyZJSL3a8jFDjw00hTJdgCya%2B6kc0pJFsX8lAWTcwYJaos7gWdcr14gFLyefN78aWp4twNy8i4T%2BJeTt7U8wLd9%2FYIPhj8LVy4sykcZ10GczNIfzzn%2B74IYY88m4CqlNiG2EQ1GF9er7dnMdl1O7i9rz2QEatskgrVeI03Rp4VoPFS&X-Amz-Signature=fce6e8b9d4ef36e5169acd53ec3aae7f4231df351fe845bbe361ca602eee78ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAVFCY4S%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDCTa3aV%2Byr3z4mzNNouXi9SiCEzCt5WoZHdEkNywIVAIhAMygFMuNxcM4vKZNpHe4dXLH8Ti4dAll%2BBvQYikDZJHXKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMpgKhMJ31qBhqcJ8q3AOsmtmiTSWvf%2BdjJTfEpnVKgIKFb9PhP8sa1U5wU%2BPo9H81YD5L7bvIGmI2SKiPmF6dxyxv38pPlui82p3O1uu%2F28ihXPAS%2BQV69Gv4IgRVSopTD%2B782mzGn45ELTSzM4VyE9PFpqH0b1GJ2cAbI%2BXCQsMACCqDDlf9umypsuX5Yl1VMCGZ%2BGvCsLAbjkKTaWcwdi2YgcJDAGobaH5044cEHbovOBzC0Ai5T9tLQNGP4ZiPGvTg1pOthEWb9md%2F8yfitCFrL7QKP%2F0QTB5T%2BqdeuSbvC%2FdfktQwsDLN%2BLeTeiU6RqEE%2FTAPB6V2Wc83MkMrx%2FDk7EMI4UlWSRmHEzKAa9cYTtZwdZHD9NOdY8X8pQ80KP2%2B%2BPGNbQ3n5os9deUteNfyQzFWEAdtRJ6K6dB33Ymxax5JvrwHeC9exwryJxNSs5%2BLOFaUE2JLLjS2rtXj5VK7CdX7jzeHfq39DdTt1uI0QLJ4tBYSsjSj%2FvgY0YBYjFcWpv%2Ff8R32Pzb6tCh7kE3s1P1G0SXSft2%2BgIyNTx8vO4t3LC43e8obZKSY4MRnaolTeM6Y17rzoUY5ypMWfqkVMmrc9UMS92Zcg0R1eTwQ8S3HpHLR8LU2r9Tfs%2Bc3C%2FkRaJ5qTFGA1DCxqNfGBjqkARF5nFgcwjrlhH9KmgSxUiAk3lNhNBrUgfunNrzMXjrZrBqyZJSL3a8jFDjw00hTJdgCya%2B6kc0pJFsX8lAWTcwYJaos7gWdcr14gFLyefN78aWp4twNy8i4T%2BJeTt7U8wLd9%2FYIPhj8LVy4sykcZ10GczNIfzzn%2B74IYY88m4CqlNiG2EQ1GF9er7dnMdl1O7i9rz2QEatskgrVeI03Rp4VoPFS&X-Amz-Signature=8c77889509f0c06c8ad5c9647e97c3c9d8ac514b98238b7bc881f9f1caf1b815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAVFCY4S%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDCTa3aV%2Byr3z4mzNNouXi9SiCEzCt5WoZHdEkNywIVAIhAMygFMuNxcM4vKZNpHe4dXLH8Ti4dAll%2BBvQYikDZJHXKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMpgKhMJ31qBhqcJ8q3AOsmtmiTSWvf%2BdjJTfEpnVKgIKFb9PhP8sa1U5wU%2BPo9H81YD5L7bvIGmI2SKiPmF6dxyxv38pPlui82p3O1uu%2F28ihXPAS%2BQV69Gv4IgRVSopTD%2B782mzGn45ELTSzM4VyE9PFpqH0b1GJ2cAbI%2BXCQsMACCqDDlf9umypsuX5Yl1VMCGZ%2BGvCsLAbjkKTaWcwdi2YgcJDAGobaH5044cEHbovOBzC0Ai5T9tLQNGP4ZiPGvTg1pOthEWb9md%2F8yfitCFrL7QKP%2F0QTB5T%2BqdeuSbvC%2FdfktQwsDLN%2BLeTeiU6RqEE%2FTAPB6V2Wc83MkMrx%2FDk7EMI4UlWSRmHEzKAa9cYTtZwdZHD9NOdY8X8pQ80KP2%2B%2BPGNbQ3n5os9deUteNfyQzFWEAdtRJ6K6dB33Ymxax5JvrwHeC9exwryJxNSs5%2BLOFaUE2JLLjS2rtXj5VK7CdX7jzeHfq39DdTt1uI0QLJ4tBYSsjSj%2FvgY0YBYjFcWpv%2Ff8R32Pzb6tCh7kE3s1P1G0SXSft2%2BgIyNTx8vO4t3LC43e8obZKSY4MRnaolTeM6Y17rzoUY5ypMWfqkVMmrc9UMS92Zcg0R1eTwQ8S3HpHLR8LU2r9Tfs%2Bc3C%2FkRaJ5qTFGA1DCxqNfGBjqkARF5nFgcwjrlhH9KmgSxUiAk3lNhNBrUgfunNrzMXjrZrBqyZJSL3a8jFDjw00hTJdgCya%2B6kc0pJFsX8lAWTcwYJaos7gWdcr14gFLyefN78aWp4twNy8i4T%2BJeTt7U8wLd9%2FYIPhj8LVy4sykcZ10GczNIfzzn%2B74IYY88m4CqlNiG2EQ1GF9er7dnMdl1O7i9rz2QEatskgrVeI03Rp4VoPFS&X-Amz-Signature=42b7515bc9e44bdc9c34c3ef87bdf29cd8ab3692dcfb5a620282a50361bc087c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
