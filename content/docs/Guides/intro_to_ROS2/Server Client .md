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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2OY4OZ4%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAYP3%2BKiw5qBhmB%2FctxALn6AQnsJHW9frWPpygSPAPJEAiEA2YJsGlIyQhnJCnPqxRqpEbSK7aOWnxEveW64tLrjhhcqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0pNKQEA5p99huxTSrcAxz9kQwp0BWbmTY%2Bt91q%2BJSgtfVTGAoDa76%2F9P0GDVDLKA6282waifb8evn9pQdSA0gdhiBkx3eB%2FmO4IKAsSHbaE4sGuwky0QEMp%2FOBfql4eI7%2B7nsXUlI28O09wugcHVuvvhFiz9aeRF8s0VGCFPkg0E9fHD2gAVpcxowuZT6vOB%2FgytNmgIpXWlFyapoSHN7Meu8oWMmJ46EnigbVTDA%2FlKGOwgQn1Z%2BS%2BAddYEckryEBBsdr%2BWIRGRVJ1q9Xiz%2BJ1rtXYeNxPXKoEF2nWZgW55qGJcCFQP2wzfpc6NNpJ2F9m0YgtcHcLkAwy6kiNFwVCLyHh4QE57gDAi%2FsZdBWQVs6%2BlrML9IqH5ZLlHhBSEurpdPmRm6lwBeSwjuE6HhPcPUoDmqAHVIn0a0RbmWKHJ%2FRAMqjP7p89s%2FUNS3SPSoFhemRP1aKyaiY%2F3NxkXOznPFCv8GOT3VvcVltRvVY%2BTCBrbSeCoSl1HdcvdUYwnRDtucgmUPI2%2F9UF1zYqzzH%2F3mr%2FCJb5YBwiq6sygnCpt1W%2FWntROG5Udc88BsC4TXK7rqpUdimL7OqP10t78QgmyZsG8LRwB%2FOameFssKlBbOtVxGw6UY9oBCDfEVFJS%2BoH5wPdlzfnMRCMNSdm8AGOqUBNZLQ5At4uYZUZMPMm%2FnUmGxZg48Zpg9NnE4WQn07gsHvqzs8LfK6Dk8p53gdcDc2wpTv6iIq1h28gyN5XKKevKixkrvf6LAugS3ZXTo50OMYhm2PgL9LLK%2FzkDC%2Bmggpax7utD7YF%2Bsr%2BZ8IUvN6ur1so11LjuO6VL%2B%2FQy305PZprAVxkgD%2BrGpjY4fG3TvmxrY6TjflZidE32BwE5QhnjK3i2e9&X-Amz-Signature=cd23850bd03cf63a98c14702c8d82a998568f256e1d33bd269962c428f72135b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2OY4OZ4%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAYP3%2BKiw5qBhmB%2FctxALn6AQnsJHW9frWPpygSPAPJEAiEA2YJsGlIyQhnJCnPqxRqpEbSK7aOWnxEveW64tLrjhhcqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0pNKQEA5p99huxTSrcAxz9kQwp0BWbmTY%2Bt91q%2BJSgtfVTGAoDa76%2F9P0GDVDLKA6282waifb8evn9pQdSA0gdhiBkx3eB%2FmO4IKAsSHbaE4sGuwky0QEMp%2FOBfql4eI7%2B7nsXUlI28O09wugcHVuvvhFiz9aeRF8s0VGCFPkg0E9fHD2gAVpcxowuZT6vOB%2FgytNmgIpXWlFyapoSHN7Meu8oWMmJ46EnigbVTDA%2FlKGOwgQn1Z%2BS%2BAddYEckryEBBsdr%2BWIRGRVJ1q9Xiz%2BJ1rtXYeNxPXKoEF2nWZgW55qGJcCFQP2wzfpc6NNpJ2F9m0YgtcHcLkAwy6kiNFwVCLyHh4QE57gDAi%2FsZdBWQVs6%2BlrML9IqH5ZLlHhBSEurpdPmRm6lwBeSwjuE6HhPcPUoDmqAHVIn0a0RbmWKHJ%2FRAMqjP7p89s%2FUNS3SPSoFhemRP1aKyaiY%2F3NxkXOznPFCv8GOT3VvcVltRvVY%2BTCBrbSeCoSl1HdcvdUYwnRDtucgmUPI2%2F9UF1zYqzzH%2F3mr%2FCJb5YBwiq6sygnCpt1W%2FWntROG5Udc88BsC4TXK7rqpUdimL7OqP10t78QgmyZsG8LRwB%2FOameFssKlBbOtVxGw6UY9oBCDfEVFJS%2BoH5wPdlzfnMRCMNSdm8AGOqUBNZLQ5At4uYZUZMPMm%2FnUmGxZg48Zpg9NnE4WQn07gsHvqzs8LfK6Dk8p53gdcDc2wpTv6iIq1h28gyN5XKKevKixkrvf6LAugS3ZXTo50OMYhm2PgL9LLK%2FzkDC%2Bmggpax7utD7YF%2Bsr%2BZ8IUvN6ur1so11LjuO6VL%2B%2FQy305PZprAVxkgD%2BrGpjY4fG3TvmxrY6TjflZidE32BwE5QhnjK3i2e9&X-Amz-Signature=b3670d9a85d7317eb0c61f8e6ae37d9e8a9a612cc0cdc5b8c859b4b758dfe9bc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2OY4OZ4%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAYP3%2BKiw5qBhmB%2FctxALn6AQnsJHW9frWPpygSPAPJEAiEA2YJsGlIyQhnJCnPqxRqpEbSK7aOWnxEveW64tLrjhhcqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0pNKQEA5p99huxTSrcAxz9kQwp0BWbmTY%2Bt91q%2BJSgtfVTGAoDa76%2F9P0GDVDLKA6282waifb8evn9pQdSA0gdhiBkx3eB%2FmO4IKAsSHbaE4sGuwky0QEMp%2FOBfql4eI7%2B7nsXUlI28O09wugcHVuvvhFiz9aeRF8s0VGCFPkg0E9fHD2gAVpcxowuZT6vOB%2FgytNmgIpXWlFyapoSHN7Meu8oWMmJ46EnigbVTDA%2FlKGOwgQn1Z%2BS%2BAddYEckryEBBsdr%2BWIRGRVJ1q9Xiz%2BJ1rtXYeNxPXKoEF2nWZgW55qGJcCFQP2wzfpc6NNpJ2F9m0YgtcHcLkAwy6kiNFwVCLyHh4QE57gDAi%2FsZdBWQVs6%2BlrML9IqH5ZLlHhBSEurpdPmRm6lwBeSwjuE6HhPcPUoDmqAHVIn0a0RbmWKHJ%2FRAMqjP7p89s%2FUNS3SPSoFhemRP1aKyaiY%2F3NxkXOznPFCv8GOT3VvcVltRvVY%2BTCBrbSeCoSl1HdcvdUYwnRDtucgmUPI2%2F9UF1zYqzzH%2F3mr%2FCJb5YBwiq6sygnCpt1W%2FWntROG5Udc88BsC4TXK7rqpUdimL7OqP10t78QgmyZsG8LRwB%2FOameFssKlBbOtVxGw6UY9oBCDfEVFJS%2BoH5wPdlzfnMRCMNSdm8AGOqUBNZLQ5At4uYZUZMPMm%2FnUmGxZg48Zpg9NnE4WQn07gsHvqzs8LfK6Dk8p53gdcDc2wpTv6iIq1h28gyN5XKKevKixkrvf6LAugS3ZXTo50OMYhm2PgL9LLK%2FzkDC%2Bmggpax7utD7YF%2Bsr%2BZ8IUvN6ur1so11LjuO6VL%2B%2FQy305PZprAVxkgD%2BrGpjY4fG3TvmxrY6TjflZidE32BwE5QhnjK3i2e9&X-Amz-Signature=6ce9ce5cbe88c1af5e05fc13912b8438103c7550701d7630da79e06f26338dbe&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2OY4OZ4%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAYP3%2BKiw5qBhmB%2FctxALn6AQnsJHW9frWPpygSPAPJEAiEA2YJsGlIyQhnJCnPqxRqpEbSK7aOWnxEveW64tLrjhhcqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0pNKQEA5p99huxTSrcAxz9kQwp0BWbmTY%2Bt91q%2BJSgtfVTGAoDa76%2F9P0GDVDLKA6282waifb8evn9pQdSA0gdhiBkx3eB%2FmO4IKAsSHbaE4sGuwky0QEMp%2FOBfql4eI7%2B7nsXUlI28O09wugcHVuvvhFiz9aeRF8s0VGCFPkg0E9fHD2gAVpcxowuZT6vOB%2FgytNmgIpXWlFyapoSHN7Meu8oWMmJ46EnigbVTDA%2FlKGOwgQn1Z%2BS%2BAddYEckryEBBsdr%2BWIRGRVJ1q9Xiz%2BJ1rtXYeNxPXKoEF2nWZgW55qGJcCFQP2wzfpc6NNpJ2F9m0YgtcHcLkAwy6kiNFwVCLyHh4QE57gDAi%2FsZdBWQVs6%2BlrML9IqH5ZLlHhBSEurpdPmRm6lwBeSwjuE6HhPcPUoDmqAHVIn0a0RbmWKHJ%2FRAMqjP7p89s%2FUNS3SPSoFhemRP1aKyaiY%2F3NxkXOznPFCv8GOT3VvcVltRvVY%2BTCBrbSeCoSl1HdcvdUYwnRDtucgmUPI2%2F9UF1zYqzzH%2F3mr%2FCJb5YBwiq6sygnCpt1W%2FWntROG5Udc88BsC4TXK7rqpUdimL7OqP10t78QgmyZsG8LRwB%2FOameFssKlBbOtVxGw6UY9oBCDfEVFJS%2BoH5wPdlzfnMRCMNSdm8AGOqUBNZLQ5At4uYZUZMPMm%2FnUmGxZg48Zpg9NnE4WQn07gsHvqzs8LfK6Dk8p53gdcDc2wpTv6iIq1h28gyN5XKKevKixkrvf6LAugS3ZXTo50OMYhm2PgL9LLK%2FzkDC%2Bmggpax7utD7YF%2Bsr%2BZ8IUvN6ur1so11LjuO6VL%2B%2FQy305PZprAVxkgD%2BrGpjY4fG3TvmxrY6TjflZidE32BwE5QhnjK3i2e9&X-Amz-Signature=6e669a68db90c2a297e089f06d878ff7b3adb0782e23c281457b819fdc67a461&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2OY4OZ4%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAYP3%2BKiw5qBhmB%2FctxALn6AQnsJHW9frWPpygSPAPJEAiEA2YJsGlIyQhnJCnPqxRqpEbSK7aOWnxEveW64tLrjhhcqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0pNKQEA5p99huxTSrcAxz9kQwp0BWbmTY%2Bt91q%2BJSgtfVTGAoDa76%2F9P0GDVDLKA6282waifb8evn9pQdSA0gdhiBkx3eB%2FmO4IKAsSHbaE4sGuwky0QEMp%2FOBfql4eI7%2B7nsXUlI28O09wugcHVuvvhFiz9aeRF8s0VGCFPkg0E9fHD2gAVpcxowuZT6vOB%2FgytNmgIpXWlFyapoSHN7Meu8oWMmJ46EnigbVTDA%2FlKGOwgQn1Z%2BS%2BAddYEckryEBBsdr%2BWIRGRVJ1q9Xiz%2BJ1rtXYeNxPXKoEF2nWZgW55qGJcCFQP2wzfpc6NNpJ2F9m0YgtcHcLkAwy6kiNFwVCLyHh4QE57gDAi%2FsZdBWQVs6%2BlrML9IqH5ZLlHhBSEurpdPmRm6lwBeSwjuE6HhPcPUoDmqAHVIn0a0RbmWKHJ%2FRAMqjP7p89s%2FUNS3SPSoFhemRP1aKyaiY%2F3NxkXOznPFCv8GOT3VvcVltRvVY%2BTCBrbSeCoSl1HdcvdUYwnRDtucgmUPI2%2F9UF1zYqzzH%2F3mr%2FCJb5YBwiq6sygnCpt1W%2FWntROG5Udc88BsC4TXK7rqpUdimL7OqP10t78QgmyZsG8LRwB%2FOameFssKlBbOtVxGw6UY9oBCDfEVFJS%2BoH5wPdlzfnMRCMNSdm8AGOqUBNZLQ5At4uYZUZMPMm%2FnUmGxZg48Zpg9NnE4WQn07gsHvqzs8LfK6Dk8p53gdcDc2wpTv6iIq1h28gyN5XKKevKixkrvf6LAugS3ZXTo50OMYhm2PgL9LLK%2FzkDC%2Bmggpax7utD7YF%2Bsr%2BZ8IUvN6ur1so11LjuO6VL%2B%2FQy305PZprAVxkgD%2BrGpjY4fG3TvmxrY6TjflZidE32BwE5QhnjK3i2e9&X-Amz-Signature=031a82c6da08c0c1f52baed4430f394e6cff93c1040b73c1687b3bb0fc9fb0e5&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
