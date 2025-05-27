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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBBSCPTX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2RT75bhsNQFADZ5%2BTmKt5g2RrrtSe1CbqrGdswrqRKAiAFDipZpSoZPVfPjpHtFCpSj9IGNBIOAa6JJNy6rWwUWir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMfHVRkeRVocVfYjDBKtwDIdw6lfF%2FJgU563OsI9M53osSBljQUMKh8BZo88SK8bB71f0n3teDFIvNa3a6mCmOxp1x9F8UhI9XLs%2Bq4PzzTa68DXoMY8Nb%2FtfKegiw6ryr9Mm2pK06H85T19N%2BQYCrBLaW4QEiexHhfJKhKA5vqVSh5UFsrR7S4ZtltBqgLJgFZKNXXYzf5lHojADDTDIJ%2Bxu4t4QkPMH0rPk0eTa%2FE8tyczTPICu2llWJ1nLUVF0G1Q2rkcy%2FeCIuBA8kJN5Fe0ncVKWCU%2BiAJO0StK4ejCjduKMbSa%2BhRIRnbeZKU0USDwOtZH4%2Fggdvnu21963zGXpgepLjZXrkNLJEY9Yu0A8X%2FtUvJtQW6QFx8n7RyRI6C7%2FATnkfiuGdjUdhNdkXFo%2FEMtWVdbxMXmA5dd2OYutuhV0YlyhK6b0GpLbsSfVW5zTyPt33YrLSdH%2FC1wyccRP%2BwBZjoKjTv0NHa5YJlDE0EFKl6NncVblz5SGamcZJv%2FrHexFbyL6iNU0KvX7VtNTaMPANVgAm7qd2QzMmiJruhYNKPbmFi%2FN3sFx%2BXRjYMyJhhUTsEbmnJYXCaHq3MZAnD21wD19W2f2mnIEV9ngMUsFyMDENlwz4lst4g1qVcSXaOh0IEl%2F%2FwXAw4tTWwQY6pgFTnA1OjAUPp1hHqNNPcBXy4d%2BX6RALz9IjXSbYxcEZGgRyTYeuShPRau0YsnIACFbeIdb%2FpWfcMDEEvOir4GCy9Yth1Bsv3bttVLMy6jGhOgUb8qdB5gUSOE0QlkdjR7hvyhUIu0C9RUpd8Plxgr%2FEIx%2FBGz0Vny5Oo4JioTl15%2BQb3yiqGTDgsewZrZ4B%2Bb3ZDcqaXFVN7W4E1oBfIwWPvbJbQ779&X-Amz-Signature=4aaa008f165e76b6c43540fc14b976427491d481a21bc4908137c018e8c4a9f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBBSCPTX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2RT75bhsNQFADZ5%2BTmKt5g2RrrtSe1CbqrGdswrqRKAiAFDipZpSoZPVfPjpHtFCpSj9IGNBIOAa6JJNy6rWwUWir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMfHVRkeRVocVfYjDBKtwDIdw6lfF%2FJgU563OsI9M53osSBljQUMKh8BZo88SK8bB71f0n3teDFIvNa3a6mCmOxp1x9F8UhI9XLs%2Bq4PzzTa68DXoMY8Nb%2FtfKegiw6ryr9Mm2pK06H85T19N%2BQYCrBLaW4QEiexHhfJKhKA5vqVSh5UFsrR7S4ZtltBqgLJgFZKNXXYzf5lHojADDTDIJ%2Bxu4t4QkPMH0rPk0eTa%2FE8tyczTPICu2llWJ1nLUVF0G1Q2rkcy%2FeCIuBA8kJN5Fe0ncVKWCU%2BiAJO0StK4ejCjduKMbSa%2BhRIRnbeZKU0USDwOtZH4%2Fggdvnu21963zGXpgepLjZXrkNLJEY9Yu0A8X%2FtUvJtQW6QFx8n7RyRI6C7%2FATnkfiuGdjUdhNdkXFo%2FEMtWVdbxMXmA5dd2OYutuhV0YlyhK6b0GpLbsSfVW5zTyPt33YrLSdH%2FC1wyccRP%2BwBZjoKjTv0NHa5YJlDE0EFKl6NncVblz5SGamcZJv%2FrHexFbyL6iNU0KvX7VtNTaMPANVgAm7qd2QzMmiJruhYNKPbmFi%2FN3sFx%2BXRjYMyJhhUTsEbmnJYXCaHq3MZAnD21wD19W2f2mnIEV9ngMUsFyMDENlwz4lst4g1qVcSXaOh0IEl%2F%2FwXAw4tTWwQY6pgFTnA1OjAUPp1hHqNNPcBXy4d%2BX6RALz9IjXSbYxcEZGgRyTYeuShPRau0YsnIACFbeIdb%2FpWfcMDEEvOir4GCy9Yth1Bsv3bttVLMy6jGhOgUb8qdB5gUSOE0QlkdjR7hvyhUIu0C9RUpd8Plxgr%2FEIx%2FBGz0Vny5Oo4JioTl15%2BQb3yiqGTDgsewZrZ4B%2Bb3ZDcqaXFVN7W4E1oBfIwWPvbJbQ779&X-Amz-Signature=35142d65aabad240f57677a624c96f381d73f8a17357dbf9b94bfed5a6f4edad&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBBSCPTX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2RT75bhsNQFADZ5%2BTmKt5g2RrrtSe1CbqrGdswrqRKAiAFDipZpSoZPVfPjpHtFCpSj9IGNBIOAa6JJNy6rWwUWir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMfHVRkeRVocVfYjDBKtwDIdw6lfF%2FJgU563OsI9M53osSBljQUMKh8BZo88SK8bB71f0n3teDFIvNa3a6mCmOxp1x9F8UhI9XLs%2Bq4PzzTa68DXoMY8Nb%2FtfKegiw6ryr9Mm2pK06H85T19N%2BQYCrBLaW4QEiexHhfJKhKA5vqVSh5UFsrR7S4ZtltBqgLJgFZKNXXYzf5lHojADDTDIJ%2Bxu4t4QkPMH0rPk0eTa%2FE8tyczTPICu2llWJ1nLUVF0G1Q2rkcy%2FeCIuBA8kJN5Fe0ncVKWCU%2BiAJO0StK4ejCjduKMbSa%2BhRIRnbeZKU0USDwOtZH4%2Fggdvnu21963zGXpgepLjZXrkNLJEY9Yu0A8X%2FtUvJtQW6QFx8n7RyRI6C7%2FATnkfiuGdjUdhNdkXFo%2FEMtWVdbxMXmA5dd2OYutuhV0YlyhK6b0GpLbsSfVW5zTyPt33YrLSdH%2FC1wyccRP%2BwBZjoKjTv0NHa5YJlDE0EFKl6NncVblz5SGamcZJv%2FrHexFbyL6iNU0KvX7VtNTaMPANVgAm7qd2QzMmiJruhYNKPbmFi%2FN3sFx%2BXRjYMyJhhUTsEbmnJYXCaHq3MZAnD21wD19W2f2mnIEV9ngMUsFyMDENlwz4lst4g1qVcSXaOh0IEl%2F%2FwXAw4tTWwQY6pgFTnA1OjAUPp1hHqNNPcBXy4d%2BX6RALz9IjXSbYxcEZGgRyTYeuShPRau0YsnIACFbeIdb%2FpWfcMDEEvOir4GCy9Yth1Bsv3bttVLMy6jGhOgUb8qdB5gUSOE0QlkdjR7hvyhUIu0C9RUpd8Plxgr%2FEIx%2FBGz0Vny5Oo4JioTl15%2BQb3yiqGTDgsewZrZ4B%2Bb3ZDcqaXFVN7W4E1oBfIwWPvbJbQ779&X-Amz-Signature=cfd19b89e64f7595a640987585f2195e1c48dc2aa10d76519d1e59eb828d771b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBBSCPTX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2RT75bhsNQFADZ5%2BTmKt5g2RrrtSe1CbqrGdswrqRKAiAFDipZpSoZPVfPjpHtFCpSj9IGNBIOAa6JJNy6rWwUWir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMfHVRkeRVocVfYjDBKtwDIdw6lfF%2FJgU563OsI9M53osSBljQUMKh8BZo88SK8bB71f0n3teDFIvNa3a6mCmOxp1x9F8UhI9XLs%2Bq4PzzTa68DXoMY8Nb%2FtfKegiw6ryr9Mm2pK06H85T19N%2BQYCrBLaW4QEiexHhfJKhKA5vqVSh5UFsrR7S4ZtltBqgLJgFZKNXXYzf5lHojADDTDIJ%2Bxu4t4QkPMH0rPk0eTa%2FE8tyczTPICu2llWJ1nLUVF0G1Q2rkcy%2FeCIuBA8kJN5Fe0ncVKWCU%2BiAJO0StK4ejCjduKMbSa%2BhRIRnbeZKU0USDwOtZH4%2Fggdvnu21963zGXpgepLjZXrkNLJEY9Yu0A8X%2FtUvJtQW6QFx8n7RyRI6C7%2FATnkfiuGdjUdhNdkXFo%2FEMtWVdbxMXmA5dd2OYutuhV0YlyhK6b0GpLbsSfVW5zTyPt33YrLSdH%2FC1wyccRP%2BwBZjoKjTv0NHa5YJlDE0EFKl6NncVblz5SGamcZJv%2FrHexFbyL6iNU0KvX7VtNTaMPANVgAm7qd2QzMmiJruhYNKPbmFi%2FN3sFx%2BXRjYMyJhhUTsEbmnJYXCaHq3MZAnD21wD19W2f2mnIEV9ngMUsFyMDENlwz4lst4g1qVcSXaOh0IEl%2F%2FwXAw4tTWwQY6pgFTnA1OjAUPp1hHqNNPcBXy4d%2BX6RALz9IjXSbYxcEZGgRyTYeuShPRau0YsnIACFbeIdb%2FpWfcMDEEvOir4GCy9Yth1Bsv3bttVLMy6jGhOgUb8qdB5gUSOE0QlkdjR7hvyhUIu0C9RUpd8Plxgr%2FEIx%2FBGz0Vny5Oo4JioTl15%2BQb3yiqGTDgsewZrZ4B%2Bb3ZDcqaXFVN7W4E1oBfIwWPvbJbQ779&X-Amz-Signature=e842a84d0d79d52f60c3edfee56a9f0e49b0cf510ed872b7fe9f9bac56634644&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBBSCPTX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2RT75bhsNQFADZ5%2BTmKt5g2RrrtSe1CbqrGdswrqRKAiAFDipZpSoZPVfPjpHtFCpSj9IGNBIOAa6JJNy6rWwUWir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMfHVRkeRVocVfYjDBKtwDIdw6lfF%2FJgU563OsI9M53osSBljQUMKh8BZo88SK8bB71f0n3teDFIvNa3a6mCmOxp1x9F8UhI9XLs%2Bq4PzzTa68DXoMY8Nb%2FtfKegiw6ryr9Mm2pK06H85T19N%2BQYCrBLaW4QEiexHhfJKhKA5vqVSh5UFsrR7S4ZtltBqgLJgFZKNXXYzf5lHojADDTDIJ%2Bxu4t4QkPMH0rPk0eTa%2FE8tyczTPICu2llWJ1nLUVF0G1Q2rkcy%2FeCIuBA8kJN5Fe0ncVKWCU%2BiAJO0StK4ejCjduKMbSa%2BhRIRnbeZKU0USDwOtZH4%2Fggdvnu21963zGXpgepLjZXrkNLJEY9Yu0A8X%2FtUvJtQW6QFx8n7RyRI6C7%2FATnkfiuGdjUdhNdkXFo%2FEMtWVdbxMXmA5dd2OYutuhV0YlyhK6b0GpLbsSfVW5zTyPt33YrLSdH%2FC1wyccRP%2BwBZjoKjTv0NHa5YJlDE0EFKl6NncVblz5SGamcZJv%2FrHexFbyL6iNU0KvX7VtNTaMPANVgAm7qd2QzMmiJruhYNKPbmFi%2FN3sFx%2BXRjYMyJhhUTsEbmnJYXCaHq3MZAnD21wD19W2f2mnIEV9ngMUsFyMDENlwz4lst4g1qVcSXaOh0IEl%2F%2FwXAw4tTWwQY6pgFTnA1OjAUPp1hHqNNPcBXy4d%2BX6RALz9IjXSbYxcEZGgRyTYeuShPRau0YsnIACFbeIdb%2FpWfcMDEEvOir4GCy9Yth1Bsv3bttVLMy6jGhOgUb8qdB5gUSOE0QlkdjR7hvyhUIu0C9RUpd8Plxgr%2FEIx%2FBGz0Vny5Oo4JioTl15%2BQb3yiqGTDgsewZrZ4B%2Bb3ZDcqaXFVN7W4E1oBfIwWPvbJbQ779&X-Amz-Signature=b1ebffba70bd02261bf776bd10974c5ab3ae91881c790f6e469c2f5dfd7b9e10&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
