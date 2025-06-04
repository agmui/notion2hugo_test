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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZWIHHOJ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIDQcd9r2ecfT%2BxILOOqyrBL0qXmlXK7DXECs8T9i362fAiEA35a1fFTqmBw3zJdzlb8%2FFxnJFporl%2FF2ASGozkrku0Aq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBGkfWppWQ1H57sORCrcAyuMGgMwE4H7XB8LXZ%2BeXvAOf%2Fcwq4XrdUhfqzh0upv5ommUKYui4haNBahbM0H5iWVx2%2BP6kPBWWmlAqq6cQ8TPTapXlpNMTjXBS0sxH1ws3XaeH7fI%2FViUR2v1eQlBvicOnRjnjooiCrdo2kUGVAp71KifrblgLqxtFoKhl%2FUGgPhQgvMcMzhPadSQxuzBQiPwP2EOyJKAffhvZxKW5p5YeMnpsMLbPyC7KZmVAtHEYvMG2ZqJyr7FFHKiv0JfmFDsiuaS7wUupXTqmrhAhlkYjZED37o%2Frr%2Bbx3WAqiHPS9chaEY6Z0%2BVb1Fd3j58EUAKTBG3tXSgsA%2FmM5cK7cTfAytqG%2BojwjGwznRq4Ml9kwpcpJXXVF1EEKsDA8kEo4YFuPL8xIPtxCPIKjrCWNC9FtpoNC5zcUJgX43Is%2Bf%2FNTWJ72GOCXZmuU1LkCLBrVV79vT05HCDLyjOk6U06SCMESPBNVaBcfzPjnyAaa2MvubfurXeEhZKOQOdQ37X6RZNkEYHRY7UeYzZGvV%2FertYjf9WWHqH8DffDuOM9IhXsSsYIM0dQp0fy1Au9V4y2V9xychnkJhvtKuncZjnr0NdqqIHy3sPGCklnXaKfYL2xLasGhTYu%2FM2W%2FehMOutgsIGOqUBDQ%2Fm672e%2BJsgKE1mrhkjuMhfFtUTOu3g0hmZjp1YmmOlsBFMdJRdcOu4GmdKPLmzZWII3m2VwfFa5aiHpyi%2FcuafqctOg04%2BQz151GUOWFYc43aJ6nDrg8qEdomKTv4b4mfdE729T8mcqznVaYeNvPOsGi5LjDqXxKQcuPiAMa7zb27WwdJojhfM2wh3xq3fIhv3AsLKtCLYhl6HcTRdcuqCdGl8&X-Amz-Signature=151b49ea2bc73b9815b7fdfda5bb3278c88c2aeaa58479b16e826f23af69d2e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZWIHHOJ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIDQcd9r2ecfT%2BxILOOqyrBL0qXmlXK7DXECs8T9i362fAiEA35a1fFTqmBw3zJdzlb8%2FFxnJFporl%2FF2ASGozkrku0Aq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBGkfWppWQ1H57sORCrcAyuMGgMwE4H7XB8LXZ%2BeXvAOf%2Fcwq4XrdUhfqzh0upv5ommUKYui4haNBahbM0H5iWVx2%2BP6kPBWWmlAqq6cQ8TPTapXlpNMTjXBS0sxH1ws3XaeH7fI%2FViUR2v1eQlBvicOnRjnjooiCrdo2kUGVAp71KifrblgLqxtFoKhl%2FUGgPhQgvMcMzhPadSQxuzBQiPwP2EOyJKAffhvZxKW5p5YeMnpsMLbPyC7KZmVAtHEYvMG2ZqJyr7FFHKiv0JfmFDsiuaS7wUupXTqmrhAhlkYjZED37o%2Frr%2Bbx3WAqiHPS9chaEY6Z0%2BVb1Fd3j58EUAKTBG3tXSgsA%2FmM5cK7cTfAytqG%2BojwjGwznRq4Ml9kwpcpJXXVF1EEKsDA8kEo4YFuPL8xIPtxCPIKjrCWNC9FtpoNC5zcUJgX43Is%2Bf%2FNTWJ72GOCXZmuU1LkCLBrVV79vT05HCDLyjOk6U06SCMESPBNVaBcfzPjnyAaa2MvubfurXeEhZKOQOdQ37X6RZNkEYHRY7UeYzZGvV%2FertYjf9WWHqH8DffDuOM9IhXsSsYIM0dQp0fy1Au9V4y2V9xychnkJhvtKuncZjnr0NdqqIHy3sPGCklnXaKfYL2xLasGhTYu%2FM2W%2FehMOutgsIGOqUBDQ%2Fm672e%2BJsgKE1mrhkjuMhfFtUTOu3g0hmZjp1YmmOlsBFMdJRdcOu4GmdKPLmzZWII3m2VwfFa5aiHpyi%2FcuafqctOg04%2BQz151GUOWFYc43aJ6nDrg8qEdomKTv4b4mfdE729T8mcqznVaYeNvPOsGi5LjDqXxKQcuPiAMa7zb27WwdJojhfM2wh3xq3fIhv3AsLKtCLYhl6HcTRdcuqCdGl8&X-Amz-Signature=698ba997a7208ed0c5fb64769926ceebf4503c4199d0189f1b859476a309fe28&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZWIHHOJ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIDQcd9r2ecfT%2BxILOOqyrBL0qXmlXK7DXECs8T9i362fAiEA35a1fFTqmBw3zJdzlb8%2FFxnJFporl%2FF2ASGozkrku0Aq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBGkfWppWQ1H57sORCrcAyuMGgMwE4H7XB8LXZ%2BeXvAOf%2Fcwq4XrdUhfqzh0upv5ommUKYui4haNBahbM0H5iWVx2%2BP6kPBWWmlAqq6cQ8TPTapXlpNMTjXBS0sxH1ws3XaeH7fI%2FViUR2v1eQlBvicOnRjnjooiCrdo2kUGVAp71KifrblgLqxtFoKhl%2FUGgPhQgvMcMzhPadSQxuzBQiPwP2EOyJKAffhvZxKW5p5YeMnpsMLbPyC7KZmVAtHEYvMG2ZqJyr7FFHKiv0JfmFDsiuaS7wUupXTqmrhAhlkYjZED37o%2Frr%2Bbx3WAqiHPS9chaEY6Z0%2BVb1Fd3j58EUAKTBG3tXSgsA%2FmM5cK7cTfAytqG%2BojwjGwznRq4Ml9kwpcpJXXVF1EEKsDA8kEo4YFuPL8xIPtxCPIKjrCWNC9FtpoNC5zcUJgX43Is%2Bf%2FNTWJ72GOCXZmuU1LkCLBrVV79vT05HCDLyjOk6U06SCMESPBNVaBcfzPjnyAaa2MvubfurXeEhZKOQOdQ37X6RZNkEYHRY7UeYzZGvV%2FertYjf9WWHqH8DffDuOM9IhXsSsYIM0dQp0fy1Au9V4y2V9xychnkJhvtKuncZjnr0NdqqIHy3sPGCklnXaKfYL2xLasGhTYu%2FM2W%2FehMOutgsIGOqUBDQ%2Fm672e%2BJsgKE1mrhkjuMhfFtUTOu3g0hmZjp1YmmOlsBFMdJRdcOu4GmdKPLmzZWII3m2VwfFa5aiHpyi%2FcuafqctOg04%2BQz151GUOWFYc43aJ6nDrg8qEdomKTv4b4mfdE729T8mcqznVaYeNvPOsGi5LjDqXxKQcuPiAMa7zb27WwdJojhfM2wh3xq3fIhv3AsLKtCLYhl6HcTRdcuqCdGl8&X-Amz-Signature=3381a49e9cfae08c2eb398f5dda27aa8a77a9192061973c6783321d3b56fe2db&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZWIHHOJ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIDQcd9r2ecfT%2BxILOOqyrBL0qXmlXK7DXECs8T9i362fAiEA35a1fFTqmBw3zJdzlb8%2FFxnJFporl%2FF2ASGozkrku0Aq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBGkfWppWQ1H57sORCrcAyuMGgMwE4H7XB8LXZ%2BeXvAOf%2Fcwq4XrdUhfqzh0upv5ommUKYui4haNBahbM0H5iWVx2%2BP6kPBWWmlAqq6cQ8TPTapXlpNMTjXBS0sxH1ws3XaeH7fI%2FViUR2v1eQlBvicOnRjnjooiCrdo2kUGVAp71KifrblgLqxtFoKhl%2FUGgPhQgvMcMzhPadSQxuzBQiPwP2EOyJKAffhvZxKW5p5YeMnpsMLbPyC7KZmVAtHEYvMG2ZqJyr7FFHKiv0JfmFDsiuaS7wUupXTqmrhAhlkYjZED37o%2Frr%2Bbx3WAqiHPS9chaEY6Z0%2BVb1Fd3j58EUAKTBG3tXSgsA%2FmM5cK7cTfAytqG%2BojwjGwznRq4Ml9kwpcpJXXVF1EEKsDA8kEo4YFuPL8xIPtxCPIKjrCWNC9FtpoNC5zcUJgX43Is%2Bf%2FNTWJ72GOCXZmuU1LkCLBrVV79vT05HCDLyjOk6U06SCMESPBNVaBcfzPjnyAaa2MvubfurXeEhZKOQOdQ37X6RZNkEYHRY7UeYzZGvV%2FertYjf9WWHqH8DffDuOM9IhXsSsYIM0dQp0fy1Au9V4y2V9xychnkJhvtKuncZjnr0NdqqIHy3sPGCklnXaKfYL2xLasGhTYu%2FM2W%2FehMOutgsIGOqUBDQ%2Fm672e%2BJsgKE1mrhkjuMhfFtUTOu3g0hmZjp1YmmOlsBFMdJRdcOu4GmdKPLmzZWII3m2VwfFa5aiHpyi%2FcuafqctOg04%2BQz151GUOWFYc43aJ6nDrg8qEdomKTv4b4mfdE729T8mcqznVaYeNvPOsGi5LjDqXxKQcuPiAMa7zb27WwdJojhfM2wh3xq3fIhv3AsLKtCLYhl6HcTRdcuqCdGl8&X-Amz-Signature=e84ce918ea0ab461a224b8550fc7154b42adbbc0124fd96fa8a306175dfb9332&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZWIHHOJ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIDQcd9r2ecfT%2BxILOOqyrBL0qXmlXK7DXECs8T9i362fAiEA35a1fFTqmBw3zJdzlb8%2FFxnJFporl%2FF2ASGozkrku0Aq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBGkfWppWQ1H57sORCrcAyuMGgMwE4H7XB8LXZ%2BeXvAOf%2Fcwq4XrdUhfqzh0upv5ommUKYui4haNBahbM0H5iWVx2%2BP6kPBWWmlAqq6cQ8TPTapXlpNMTjXBS0sxH1ws3XaeH7fI%2FViUR2v1eQlBvicOnRjnjooiCrdo2kUGVAp71KifrblgLqxtFoKhl%2FUGgPhQgvMcMzhPadSQxuzBQiPwP2EOyJKAffhvZxKW5p5YeMnpsMLbPyC7KZmVAtHEYvMG2ZqJyr7FFHKiv0JfmFDsiuaS7wUupXTqmrhAhlkYjZED37o%2Frr%2Bbx3WAqiHPS9chaEY6Z0%2BVb1Fd3j58EUAKTBG3tXSgsA%2FmM5cK7cTfAytqG%2BojwjGwznRq4Ml9kwpcpJXXVF1EEKsDA8kEo4YFuPL8xIPtxCPIKjrCWNC9FtpoNC5zcUJgX43Is%2Bf%2FNTWJ72GOCXZmuU1LkCLBrVV79vT05HCDLyjOk6U06SCMESPBNVaBcfzPjnyAaa2MvubfurXeEhZKOQOdQ37X6RZNkEYHRY7UeYzZGvV%2FertYjf9WWHqH8DffDuOM9IhXsSsYIM0dQp0fy1Au9V4y2V9xychnkJhvtKuncZjnr0NdqqIHy3sPGCklnXaKfYL2xLasGhTYu%2FM2W%2FehMOutgsIGOqUBDQ%2Fm672e%2BJsgKE1mrhkjuMhfFtUTOu3g0hmZjp1YmmOlsBFMdJRdcOu4GmdKPLmzZWII3m2VwfFa5aiHpyi%2FcuafqctOg04%2BQz151GUOWFYc43aJ6nDrg8qEdomKTv4b4mfdE729T8mcqznVaYeNvPOsGi5LjDqXxKQcuPiAMa7zb27WwdJojhfM2wh3xq3fIhv3AsLKtCLYhl6HcTRdcuqCdGl8&X-Amz-Signature=dbb0dff1d705e3b1b72c4ce96cfb4e7fff21e5d93291917346c3f448e924127d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
