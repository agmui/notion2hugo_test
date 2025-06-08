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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665STVJCO%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMHmAP8x%2FeY0x%2BHtj15WHjpWdMp8vtzT5%2FkxQiGiCQNQIgDeZyu2lntqS52G%2BG%2FQeLbQqQ0X2aolSvdFRIFFTM%2FfoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAnZWvgbCK8SFM0YircAwotNaghixydyBaL7jITJdTYvSk0Sp8Tnde1NvmydP2mpsx8cdoIWZj1ijIXC%2FybqmU9MSX3Ht5xCJRNZF8ADuNI36NOtoK2e7hQe95%2B8to6tFyqb3skk9xgmJonbaP%2BfL7WNp0AQ%2FgOEuomGWfIWaoj5xI7hbxRhtemE%2Fm3%2FMwNxJ4SfDhfDnzT%2BDCgSnzySfsvx6MdoxxxOwAaDNzD9xsA12jVwE%2FOrZhHEEGc6HQZSkLbdzOwc4gMrXV743penvOPd71okmhg1FpLYeSb3YTrt6Ql52yM0XfKX%2Bln7bYDfz5Dg91IcQj1H8YMOGszHuMMIfkJn3j%2Fnyvr6aXCV6dSh3R0chHB8mTndOPb8pKWWt%2FdBMuTUfg9qgNe26so7hbPPrQ1AY6PYvy78miKWqR9Fld2s0J8q3fUXadf%2B479dTWgcCKW6QyK5frnC%2BkwQz8fjpY5olRRPbTzLN6BpKxOdQpi0ovJNFYZt0qtZjwrdowP8JJB8Nk8a8vWyJB%2FXif37U6b2Zrmbj0zVf0QjH7VSwpp%2FeVXS6u17OKXuVjzCsoEbL5LezjBX8nkfF438WB5zWaCArVd0IZWRL5NFqKaCmdnv9m0kNRXPHKZETaYBTgrmqLbBwNYJ7v5MPzBk8IGOqUBefMNFCp9MpUiYbp4X7tJ72EwEmSqlZAhz97z7CumfsiBJ5lqTEEAX%2FVxA%2FBDS05v%2FgwSZlZtTDngyNzmM8C5G0x%2Bd1LsBH7yhGEBYXju%2F0Y8TPtdcRWftailJAgQsceVQ8cwectO%2BPGC7%2BZzySIUYmNQq2nWUcuPZbye9kdOXaBl6MGnAfPnUFQnTBp%2B4BHClfIys6VIie7Czmu0S0dfytdzWH7Z&X-Amz-Signature=c3dfe4242505154d1cdfdada26562039e41b054883953ffd7f3bc3dfba6cb48b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665STVJCO%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMHmAP8x%2FeY0x%2BHtj15WHjpWdMp8vtzT5%2FkxQiGiCQNQIgDeZyu2lntqS52G%2BG%2FQeLbQqQ0X2aolSvdFRIFFTM%2FfoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAnZWvgbCK8SFM0YircAwotNaghixydyBaL7jITJdTYvSk0Sp8Tnde1NvmydP2mpsx8cdoIWZj1ijIXC%2FybqmU9MSX3Ht5xCJRNZF8ADuNI36NOtoK2e7hQe95%2B8to6tFyqb3skk9xgmJonbaP%2BfL7WNp0AQ%2FgOEuomGWfIWaoj5xI7hbxRhtemE%2Fm3%2FMwNxJ4SfDhfDnzT%2BDCgSnzySfsvx6MdoxxxOwAaDNzD9xsA12jVwE%2FOrZhHEEGc6HQZSkLbdzOwc4gMrXV743penvOPd71okmhg1FpLYeSb3YTrt6Ql52yM0XfKX%2Bln7bYDfz5Dg91IcQj1H8YMOGszHuMMIfkJn3j%2Fnyvr6aXCV6dSh3R0chHB8mTndOPb8pKWWt%2FdBMuTUfg9qgNe26so7hbPPrQ1AY6PYvy78miKWqR9Fld2s0J8q3fUXadf%2B479dTWgcCKW6QyK5frnC%2BkwQz8fjpY5olRRPbTzLN6BpKxOdQpi0ovJNFYZt0qtZjwrdowP8JJB8Nk8a8vWyJB%2FXif37U6b2Zrmbj0zVf0QjH7VSwpp%2FeVXS6u17OKXuVjzCsoEbL5LezjBX8nkfF438WB5zWaCArVd0IZWRL5NFqKaCmdnv9m0kNRXPHKZETaYBTgrmqLbBwNYJ7v5MPzBk8IGOqUBefMNFCp9MpUiYbp4X7tJ72EwEmSqlZAhz97z7CumfsiBJ5lqTEEAX%2FVxA%2FBDS05v%2FgwSZlZtTDngyNzmM8C5G0x%2Bd1LsBH7yhGEBYXju%2F0Y8TPtdcRWftailJAgQsceVQ8cwectO%2BPGC7%2BZzySIUYmNQq2nWUcuPZbye9kdOXaBl6MGnAfPnUFQnTBp%2B4BHClfIys6VIie7Czmu0S0dfytdzWH7Z&X-Amz-Signature=45d5d71b07db805d40290735c897b915d15700980b28d5f6e4bb85f635199c12&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665STVJCO%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMHmAP8x%2FeY0x%2BHtj15WHjpWdMp8vtzT5%2FkxQiGiCQNQIgDeZyu2lntqS52G%2BG%2FQeLbQqQ0X2aolSvdFRIFFTM%2FfoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAnZWvgbCK8SFM0YircAwotNaghixydyBaL7jITJdTYvSk0Sp8Tnde1NvmydP2mpsx8cdoIWZj1ijIXC%2FybqmU9MSX3Ht5xCJRNZF8ADuNI36NOtoK2e7hQe95%2B8to6tFyqb3skk9xgmJonbaP%2BfL7WNp0AQ%2FgOEuomGWfIWaoj5xI7hbxRhtemE%2Fm3%2FMwNxJ4SfDhfDnzT%2BDCgSnzySfsvx6MdoxxxOwAaDNzD9xsA12jVwE%2FOrZhHEEGc6HQZSkLbdzOwc4gMrXV743penvOPd71okmhg1FpLYeSb3YTrt6Ql52yM0XfKX%2Bln7bYDfz5Dg91IcQj1H8YMOGszHuMMIfkJn3j%2Fnyvr6aXCV6dSh3R0chHB8mTndOPb8pKWWt%2FdBMuTUfg9qgNe26so7hbPPrQ1AY6PYvy78miKWqR9Fld2s0J8q3fUXadf%2B479dTWgcCKW6QyK5frnC%2BkwQz8fjpY5olRRPbTzLN6BpKxOdQpi0ovJNFYZt0qtZjwrdowP8JJB8Nk8a8vWyJB%2FXif37U6b2Zrmbj0zVf0QjH7VSwpp%2FeVXS6u17OKXuVjzCsoEbL5LezjBX8nkfF438WB5zWaCArVd0IZWRL5NFqKaCmdnv9m0kNRXPHKZETaYBTgrmqLbBwNYJ7v5MPzBk8IGOqUBefMNFCp9MpUiYbp4X7tJ72EwEmSqlZAhz97z7CumfsiBJ5lqTEEAX%2FVxA%2FBDS05v%2FgwSZlZtTDngyNzmM8C5G0x%2Bd1LsBH7yhGEBYXju%2F0Y8TPtdcRWftailJAgQsceVQ8cwectO%2BPGC7%2BZzySIUYmNQq2nWUcuPZbye9kdOXaBl6MGnAfPnUFQnTBp%2B4BHClfIys6VIie7Czmu0S0dfytdzWH7Z&X-Amz-Signature=7fd1ec211af9a464384274554aa02129baf6f78dab2c28d625b66044c39bab82&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665STVJCO%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMHmAP8x%2FeY0x%2BHtj15WHjpWdMp8vtzT5%2FkxQiGiCQNQIgDeZyu2lntqS52G%2BG%2FQeLbQqQ0X2aolSvdFRIFFTM%2FfoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAnZWvgbCK8SFM0YircAwotNaghixydyBaL7jITJdTYvSk0Sp8Tnde1NvmydP2mpsx8cdoIWZj1ijIXC%2FybqmU9MSX3Ht5xCJRNZF8ADuNI36NOtoK2e7hQe95%2B8to6tFyqb3skk9xgmJonbaP%2BfL7WNp0AQ%2FgOEuomGWfIWaoj5xI7hbxRhtemE%2Fm3%2FMwNxJ4SfDhfDnzT%2BDCgSnzySfsvx6MdoxxxOwAaDNzD9xsA12jVwE%2FOrZhHEEGc6HQZSkLbdzOwc4gMrXV743penvOPd71okmhg1FpLYeSb3YTrt6Ql52yM0XfKX%2Bln7bYDfz5Dg91IcQj1H8YMOGszHuMMIfkJn3j%2Fnyvr6aXCV6dSh3R0chHB8mTndOPb8pKWWt%2FdBMuTUfg9qgNe26so7hbPPrQ1AY6PYvy78miKWqR9Fld2s0J8q3fUXadf%2B479dTWgcCKW6QyK5frnC%2BkwQz8fjpY5olRRPbTzLN6BpKxOdQpi0ovJNFYZt0qtZjwrdowP8JJB8Nk8a8vWyJB%2FXif37U6b2Zrmbj0zVf0QjH7VSwpp%2FeVXS6u17OKXuVjzCsoEbL5LezjBX8nkfF438WB5zWaCArVd0IZWRL5NFqKaCmdnv9m0kNRXPHKZETaYBTgrmqLbBwNYJ7v5MPzBk8IGOqUBefMNFCp9MpUiYbp4X7tJ72EwEmSqlZAhz97z7CumfsiBJ5lqTEEAX%2FVxA%2FBDS05v%2FgwSZlZtTDngyNzmM8C5G0x%2Bd1LsBH7yhGEBYXju%2F0Y8TPtdcRWftailJAgQsceVQ8cwectO%2BPGC7%2BZzySIUYmNQq2nWUcuPZbye9kdOXaBl6MGnAfPnUFQnTBp%2B4BHClfIys6VIie7Czmu0S0dfytdzWH7Z&X-Amz-Signature=e954fe45297fb891fd56c6f7226e57d4a40d88304049f0386f3e9614a4aece10&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665STVJCO%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMHmAP8x%2FeY0x%2BHtj15WHjpWdMp8vtzT5%2FkxQiGiCQNQIgDeZyu2lntqS52G%2BG%2FQeLbQqQ0X2aolSvdFRIFFTM%2FfoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAnZWvgbCK8SFM0YircAwotNaghixydyBaL7jITJdTYvSk0Sp8Tnde1NvmydP2mpsx8cdoIWZj1ijIXC%2FybqmU9MSX3Ht5xCJRNZF8ADuNI36NOtoK2e7hQe95%2B8to6tFyqb3skk9xgmJonbaP%2BfL7WNp0AQ%2FgOEuomGWfIWaoj5xI7hbxRhtemE%2Fm3%2FMwNxJ4SfDhfDnzT%2BDCgSnzySfsvx6MdoxxxOwAaDNzD9xsA12jVwE%2FOrZhHEEGc6HQZSkLbdzOwc4gMrXV743penvOPd71okmhg1FpLYeSb3YTrt6Ql52yM0XfKX%2Bln7bYDfz5Dg91IcQj1H8YMOGszHuMMIfkJn3j%2Fnyvr6aXCV6dSh3R0chHB8mTndOPb8pKWWt%2FdBMuTUfg9qgNe26so7hbPPrQ1AY6PYvy78miKWqR9Fld2s0J8q3fUXadf%2B479dTWgcCKW6QyK5frnC%2BkwQz8fjpY5olRRPbTzLN6BpKxOdQpi0ovJNFYZt0qtZjwrdowP8JJB8Nk8a8vWyJB%2FXif37U6b2Zrmbj0zVf0QjH7VSwpp%2FeVXS6u17OKXuVjzCsoEbL5LezjBX8nkfF438WB5zWaCArVd0IZWRL5NFqKaCmdnv9m0kNRXPHKZETaYBTgrmqLbBwNYJ7v5MPzBk8IGOqUBefMNFCp9MpUiYbp4X7tJ72EwEmSqlZAhz97z7CumfsiBJ5lqTEEAX%2FVxA%2FBDS05v%2FgwSZlZtTDngyNzmM8C5G0x%2Bd1LsBH7yhGEBYXju%2F0Y8TPtdcRWftailJAgQsceVQ8cwectO%2BPGC7%2BZzySIUYmNQq2nWUcuPZbye9kdOXaBl6MGnAfPnUFQnTBp%2B4BHClfIys6VIie7Czmu0S0dfytdzWH7Z&X-Amz-Signature=c9230bbd92ed573db670700deaa18ade5db29ec0d78b68ee7aa44055b60215ec&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
