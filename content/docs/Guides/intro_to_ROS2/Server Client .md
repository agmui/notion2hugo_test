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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634OLTSRH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCID88FieiWUVnY6Tqcxx7juHWT9b0fchH%2BbYEPNtSY6zOAiEAtOQGkbwFCgeJZkUQWgtHnS2rITeFjDBYJednU7hMdw0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfFJWTua42SvNRj4SrcA7wvpjJjLuoj9I9Rtly4krFAzIXNEY%2F2kzaRtMVpv4u4lmoF3A6mSVDtbE%2F0XB5FBEnzpHMV6MUVf52Y8oElK8NF6l5gps0ky31Isi2z4VQ8UBKDTCRFn24pZt4Y1%2BZJ7LvH27m6MA1J%2BKN1cShOhzhSisf1jRwPXUWfN9Bc3f%2BbPSyhtOfAxptBH2aHbtkwufdzBud7fq%2BTkl8SVMtZntElAhkHFJopb2FDSI1jqAP8w0IR5W6laoY4gGkt1ywg%2FexNw9I%2BVhuZXJ%2Fxa7q8elEMfXcn0ptmxVyskvWfNvX0973MSykBiQXx2AkKMSLSrNmYvyj7k3l3iFtiU6bW8oTMuU09osr6ezndTLzfB8Jg%2FLZAC0W5uNiOH6TUMlbWieI%2BUfBnpRrV9sVuHFdX4p5oOcxY6NRWj7oITlbVSJowd5NhVnfHA%2BIFHq9jKLiI%2FNOw%2FqmNqgTemGR%2BClgy2OuI6I%2FHjiVyxci8yxvzjZ3jxCY5GUaMQjOJIIEqZYlKlB7aJ4Dit4RyxHLvjeSHTshQ%2Fb2YbbONps9AwTDWRsZwJifz8BYxdaTW%2F9FaPAbLLKpWL%2B2BzaJo8%2BYwpdBycgaYSu%2B4b9XrjtGkrEg67Kr%2ByRZ%2BCifGj1yzm2yMMKzumsQGOqUBxUGi2TRgLJNl6qcWXnHaG4ZQNV3uBmbfeWGnEUJcdv%2FmQIBhjXbmQtcBd1Mc6U6uEEannEYldKFs8vfyLyk2NS8PtU8dL3K8Rlm1YTOmA5X%2FeECuB7KK5oHl%2BCJBPs4AY%2BEc71Zbu8dme%2FdKh51s4xIrgvLl1Uh%2Bja0x5QZ2vgPif9EF%2BZleIeyhrJZNnnDHvCwGEmMWykMjhHnzlspPkbK0JAhC&X-Amz-Signature=abe030ba10a672827ad03e5b03be4b8f7d8f73fd9f7f83c73a5daf661c0104e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634OLTSRH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCID88FieiWUVnY6Tqcxx7juHWT9b0fchH%2BbYEPNtSY6zOAiEAtOQGkbwFCgeJZkUQWgtHnS2rITeFjDBYJednU7hMdw0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfFJWTua42SvNRj4SrcA7wvpjJjLuoj9I9Rtly4krFAzIXNEY%2F2kzaRtMVpv4u4lmoF3A6mSVDtbE%2F0XB5FBEnzpHMV6MUVf52Y8oElK8NF6l5gps0ky31Isi2z4VQ8UBKDTCRFn24pZt4Y1%2BZJ7LvH27m6MA1J%2BKN1cShOhzhSisf1jRwPXUWfN9Bc3f%2BbPSyhtOfAxptBH2aHbtkwufdzBud7fq%2BTkl8SVMtZntElAhkHFJopb2FDSI1jqAP8w0IR5W6laoY4gGkt1ywg%2FexNw9I%2BVhuZXJ%2Fxa7q8elEMfXcn0ptmxVyskvWfNvX0973MSykBiQXx2AkKMSLSrNmYvyj7k3l3iFtiU6bW8oTMuU09osr6ezndTLzfB8Jg%2FLZAC0W5uNiOH6TUMlbWieI%2BUfBnpRrV9sVuHFdX4p5oOcxY6NRWj7oITlbVSJowd5NhVnfHA%2BIFHq9jKLiI%2FNOw%2FqmNqgTemGR%2BClgy2OuI6I%2FHjiVyxci8yxvzjZ3jxCY5GUaMQjOJIIEqZYlKlB7aJ4Dit4RyxHLvjeSHTshQ%2Fb2YbbONps9AwTDWRsZwJifz8BYxdaTW%2F9FaPAbLLKpWL%2B2BzaJo8%2BYwpdBycgaYSu%2B4b9XrjtGkrEg67Kr%2ByRZ%2BCifGj1yzm2yMMKzumsQGOqUBxUGi2TRgLJNl6qcWXnHaG4ZQNV3uBmbfeWGnEUJcdv%2FmQIBhjXbmQtcBd1Mc6U6uEEannEYldKFs8vfyLyk2NS8PtU8dL3K8Rlm1YTOmA5X%2FeECuB7KK5oHl%2BCJBPs4AY%2BEc71Zbu8dme%2FdKh51s4xIrgvLl1Uh%2Bja0x5QZ2vgPif9EF%2BZleIeyhrJZNnnDHvCwGEmMWykMjhHnzlspPkbK0JAhC&X-Amz-Signature=7ee12f4827ecab275ec7e5c4f3054b567e42980ae4c1257b4460196254ee2974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634OLTSRH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCID88FieiWUVnY6Tqcxx7juHWT9b0fchH%2BbYEPNtSY6zOAiEAtOQGkbwFCgeJZkUQWgtHnS2rITeFjDBYJednU7hMdw0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfFJWTua42SvNRj4SrcA7wvpjJjLuoj9I9Rtly4krFAzIXNEY%2F2kzaRtMVpv4u4lmoF3A6mSVDtbE%2F0XB5FBEnzpHMV6MUVf52Y8oElK8NF6l5gps0ky31Isi2z4VQ8UBKDTCRFn24pZt4Y1%2BZJ7LvH27m6MA1J%2BKN1cShOhzhSisf1jRwPXUWfN9Bc3f%2BbPSyhtOfAxptBH2aHbtkwufdzBud7fq%2BTkl8SVMtZntElAhkHFJopb2FDSI1jqAP8w0IR5W6laoY4gGkt1ywg%2FexNw9I%2BVhuZXJ%2Fxa7q8elEMfXcn0ptmxVyskvWfNvX0973MSykBiQXx2AkKMSLSrNmYvyj7k3l3iFtiU6bW8oTMuU09osr6ezndTLzfB8Jg%2FLZAC0W5uNiOH6TUMlbWieI%2BUfBnpRrV9sVuHFdX4p5oOcxY6NRWj7oITlbVSJowd5NhVnfHA%2BIFHq9jKLiI%2FNOw%2FqmNqgTemGR%2BClgy2OuI6I%2FHjiVyxci8yxvzjZ3jxCY5GUaMQjOJIIEqZYlKlB7aJ4Dit4RyxHLvjeSHTshQ%2Fb2YbbONps9AwTDWRsZwJifz8BYxdaTW%2F9FaPAbLLKpWL%2B2BzaJo8%2BYwpdBycgaYSu%2B4b9XrjtGkrEg67Kr%2ByRZ%2BCifGj1yzm2yMMKzumsQGOqUBxUGi2TRgLJNl6qcWXnHaG4ZQNV3uBmbfeWGnEUJcdv%2FmQIBhjXbmQtcBd1Mc6U6uEEannEYldKFs8vfyLyk2NS8PtU8dL3K8Rlm1YTOmA5X%2FeECuB7KK5oHl%2BCJBPs4AY%2BEc71Zbu8dme%2FdKh51s4xIrgvLl1Uh%2Bja0x5QZ2vgPif9EF%2BZleIeyhrJZNnnDHvCwGEmMWykMjhHnzlspPkbK0JAhC&X-Amz-Signature=21af7282e0bd95c30158069e4b7381c4b0aa4f6fc8c978f25f091f93f28a6491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634OLTSRH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCID88FieiWUVnY6Tqcxx7juHWT9b0fchH%2BbYEPNtSY6zOAiEAtOQGkbwFCgeJZkUQWgtHnS2rITeFjDBYJednU7hMdw0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfFJWTua42SvNRj4SrcA7wvpjJjLuoj9I9Rtly4krFAzIXNEY%2F2kzaRtMVpv4u4lmoF3A6mSVDtbE%2F0XB5FBEnzpHMV6MUVf52Y8oElK8NF6l5gps0ky31Isi2z4VQ8UBKDTCRFn24pZt4Y1%2BZJ7LvH27m6MA1J%2BKN1cShOhzhSisf1jRwPXUWfN9Bc3f%2BbPSyhtOfAxptBH2aHbtkwufdzBud7fq%2BTkl8SVMtZntElAhkHFJopb2FDSI1jqAP8w0IR5W6laoY4gGkt1ywg%2FexNw9I%2BVhuZXJ%2Fxa7q8elEMfXcn0ptmxVyskvWfNvX0973MSykBiQXx2AkKMSLSrNmYvyj7k3l3iFtiU6bW8oTMuU09osr6ezndTLzfB8Jg%2FLZAC0W5uNiOH6TUMlbWieI%2BUfBnpRrV9sVuHFdX4p5oOcxY6NRWj7oITlbVSJowd5NhVnfHA%2BIFHq9jKLiI%2FNOw%2FqmNqgTemGR%2BClgy2OuI6I%2FHjiVyxci8yxvzjZ3jxCY5GUaMQjOJIIEqZYlKlB7aJ4Dit4RyxHLvjeSHTshQ%2Fb2YbbONps9AwTDWRsZwJifz8BYxdaTW%2F9FaPAbLLKpWL%2B2BzaJo8%2BYwpdBycgaYSu%2B4b9XrjtGkrEg67Kr%2ByRZ%2BCifGj1yzm2yMMKzumsQGOqUBxUGi2TRgLJNl6qcWXnHaG4ZQNV3uBmbfeWGnEUJcdv%2FmQIBhjXbmQtcBd1Mc6U6uEEannEYldKFs8vfyLyk2NS8PtU8dL3K8Rlm1YTOmA5X%2FeECuB7KK5oHl%2BCJBPs4AY%2BEc71Zbu8dme%2FdKh51s4xIrgvLl1Uh%2Bja0x5QZ2vgPif9EF%2BZleIeyhrJZNnnDHvCwGEmMWykMjhHnzlspPkbK0JAhC&X-Amz-Signature=e1722d9c44653b176c4413698ab241ec50414c34e959510fb19f94f933650065&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634OLTSRH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCID88FieiWUVnY6Tqcxx7juHWT9b0fchH%2BbYEPNtSY6zOAiEAtOQGkbwFCgeJZkUQWgtHnS2rITeFjDBYJednU7hMdw0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfFJWTua42SvNRj4SrcA7wvpjJjLuoj9I9Rtly4krFAzIXNEY%2F2kzaRtMVpv4u4lmoF3A6mSVDtbE%2F0XB5FBEnzpHMV6MUVf52Y8oElK8NF6l5gps0ky31Isi2z4VQ8UBKDTCRFn24pZt4Y1%2BZJ7LvH27m6MA1J%2BKN1cShOhzhSisf1jRwPXUWfN9Bc3f%2BbPSyhtOfAxptBH2aHbtkwufdzBud7fq%2BTkl8SVMtZntElAhkHFJopb2FDSI1jqAP8w0IR5W6laoY4gGkt1ywg%2FexNw9I%2BVhuZXJ%2Fxa7q8elEMfXcn0ptmxVyskvWfNvX0973MSykBiQXx2AkKMSLSrNmYvyj7k3l3iFtiU6bW8oTMuU09osr6ezndTLzfB8Jg%2FLZAC0W5uNiOH6TUMlbWieI%2BUfBnpRrV9sVuHFdX4p5oOcxY6NRWj7oITlbVSJowd5NhVnfHA%2BIFHq9jKLiI%2FNOw%2FqmNqgTemGR%2BClgy2OuI6I%2FHjiVyxci8yxvzjZ3jxCY5GUaMQjOJIIEqZYlKlB7aJ4Dit4RyxHLvjeSHTshQ%2Fb2YbbONps9AwTDWRsZwJifz8BYxdaTW%2F9FaPAbLLKpWL%2B2BzaJo8%2BYwpdBycgaYSu%2B4b9XrjtGkrEg67Kr%2ByRZ%2BCifGj1yzm2yMMKzumsQGOqUBxUGi2TRgLJNl6qcWXnHaG4ZQNV3uBmbfeWGnEUJcdv%2FmQIBhjXbmQtcBd1Mc6U6uEEannEYldKFs8vfyLyk2NS8PtU8dL3K8Rlm1YTOmA5X%2FeECuB7KK5oHl%2BCJBPs4AY%2BEc71Zbu8dme%2FdKh51s4xIrgvLl1Uh%2Bja0x5QZ2vgPif9EF%2BZleIeyhrJZNnnDHvCwGEmMWykMjhHnzlspPkbK0JAhC&X-Amz-Signature=e04c6aa5b7ae2dfcee2de3cde5cc21a330d95cb587ea74cb515a657997922d73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
