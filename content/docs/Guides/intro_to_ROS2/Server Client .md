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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN53GGCH%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIHjLmw0A3hNHEGDq%2FXyca4d%2FfiNEzi3NKlJX31VbbnCQAiBFXzASyVlsLvGp74EQLlMrZuBInqILTZ4sIPnixiC2viqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf0x5%2FVA4e08PSC7FKtwDFS3G%2F8zdGlsSkv7v1p%2Bt5qguWp5MilKUZYXsSkyH6gdUYp0KUE7ZWi1zibD6Z6vg2PSV1QfR67Yo0KOziHXJRnSRaBQ%2FvgjxIWj9Du%2FWXuSCz5HiIzRqw93N3JpPmmNQ%2BSmm6q9T2p7DIAqMIxmEtmFn0P4bgHFldMqkiMVdvcD%2FB0SbzsYb8jyCAvCMdP%2BSDWi%2BTcAuCPsxyTcgZd8dCeuroVJxQyH2MCLhL6u1iFrrZJA0bH9%2Fx5%2F2HNzx2FD%2BWnAIoC5s%2BTTCVRcGkq7A%2BpuiwFhWoCUphff%2F1XPC%2B0%2FvuGbPNzLsU8pseZr5viCYEUGY5OWl620LKSSVDEtBOCdCIBbS9QjMSA%2Fg13QWQdNtiwDaQORQ6cYFTKP%2F5oGhmx29ANiHpF60Ywn%2FV9VRS3q90703W86T3MZ2hcuRaiUGQEa2BKly8JRQLYGxxqaP56X6xI3t%2BAhCx3FXnjtTvSgO2dd%2BYjmUrlG0v%2BNbVIBdxaHOPJupq5Uq7oVnq9xH9GLAR6Czwe2mSDMhS97sNowrOgxIHm4YhxhyXfSsx5Zot6MbIuuehbv3DfoHUAb8BBgyxOmdq%2BBj0jbe3LsLP3m%2FwIYv0RRw%2FWrG41AxLYfv%2BLNfSVOdVry6sIkw0NWuwgY6pgHMDx4SQ0XJqChDnIE%2FJeUDLdn4jj8jJn0By604fKtzrmUFXSBvmKxXvb6yZqqycevHMEIsh6TdFibfb9g8uMYDZPHmTtxA8thMhgiUSskwqVbqfWu%2BlYYbi2PaGy7cDNRrfCSE842g9PSysOILwXRAi5Jt5p%2BOfuy2MurZo7zgkARmrRGqNDQMUXARWlBmdQKfcQUizV3H49pq2sN7121r6k7JrcEF&X-Amz-Signature=07aa71deda22468c5ae73f0dedf0d91fb07b6565001d86aa02940e8a2f70d9c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN53GGCH%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIHjLmw0A3hNHEGDq%2FXyca4d%2FfiNEzi3NKlJX31VbbnCQAiBFXzASyVlsLvGp74EQLlMrZuBInqILTZ4sIPnixiC2viqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf0x5%2FVA4e08PSC7FKtwDFS3G%2F8zdGlsSkv7v1p%2Bt5qguWp5MilKUZYXsSkyH6gdUYp0KUE7ZWi1zibD6Z6vg2PSV1QfR67Yo0KOziHXJRnSRaBQ%2FvgjxIWj9Du%2FWXuSCz5HiIzRqw93N3JpPmmNQ%2BSmm6q9T2p7DIAqMIxmEtmFn0P4bgHFldMqkiMVdvcD%2FB0SbzsYb8jyCAvCMdP%2BSDWi%2BTcAuCPsxyTcgZd8dCeuroVJxQyH2MCLhL6u1iFrrZJA0bH9%2Fx5%2F2HNzx2FD%2BWnAIoC5s%2BTTCVRcGkq7A%2BpuiwFhWoCUphff%2F1XPC%2B0%2FvuGbPNzLsU8pseZr5viCYEUGY5OWl620LKSSVDEtBOCdCIBbS9QjMSA%2Fg13QWQdNtiwDaQORQ6cYFTKP%2F5oGhmx29ANiHpF60Ywn%2FV9VRS3q90703W86T3MZ2hcuRaiUGQEa2BKly8JRQLYGxxqaP56X6xI3t%2BAhCx3FXnjtTvSgO2dd%2BYjmUrlG0v%2BNbVIBdxaHOPJupq5Uq7oVnq9xH9GLAR6Czwe2mSDMhS97sNowrOgxIHm4YhxhyXfSsx5Zot6MbIuuehbv3DfoHUAb8BBgyxOmdq%2BBj0jbe3LsLP3m%2FwIYv0RRw%2FWrG41AxLYfv%2BLNfSVOdVry6sIkw0NWuwgY6pgHMDx4SQ0XJqChDnIE%2FJeUDLdn4jj8jJn0By604fKtzrmUFXSBvmKxXvb6yZqqycevHMEIsh6TdFibfb9g8uMYDZPHmTtxA8thMhgiUSskwqVbqfWu%2BlYYbi2PaGy7cDNRrfCSE842g9PSysOILwXRAi5Jt5p%2BOfuy2MurZo7zgkARmrRGqNDQMUXARWlBmdQKfcQUizV3H49pq2sN7121r6k7JrcEF&X-Amz-Signature=03eb857b40b7595894c66ce5a7e54d44617eeaa1286380500f21cd4c90b2cf13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN53GGCH%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIHjLmw0A3hNHEGDq%2FXyca4d%2FfiNEzi3NKlJX31VbbnCQAiBFXzASyVlsLvGp74EQLlMrZuBInqILTZ4sIPnixiC2viqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf0x5%2FVA4e08PSC7FKtwDFS3G%2F8zdGlsSkv7v1p%2Bt5qguWp5MilKUZYXsSkyH6gdUYp0KUE7ZWi1zibD6Z6vg2PSV1QfR67Yo0KOziHXJRnSRaBQ%2FvgjxIWj9Du%2FWXuSCz5HiIzRqw93N3JpPmmNQ%2BSmm6q9T2p7DIAqMIxmEtmFn0P4bgHFldMqkiMVdvcD%2FB0SbzsYb8jyCAvCMdP%2BSDWi%2BTcAuCPsxyTcgZd8dCeuroVJxQyH2MCLhL6u1iFrrZJA0bH9%2Fx5%2F2HNzx2FD%2BWnAIoC5s%2BTTCVRcGkq7A%2BpuiwFhWoCUphff%2F1XPC%2B0%2FvuGbPNzLsU8pseZr5viCYEUGY5OWl620LKSSVDEtBOCdCIBbS9QjMSA%2Fg13QWQdNtiwDaQORQ6cYFTKP%2F5oGhmx29ANiHpF60Ywn%2FV9VRS3q90703W86T3MZ2hcuRaiUGQEa2BKly8JRQLYGxxqaP56X6xI3t%2BAhCx3FXnjtTvSgO2dd%2BYjmUrlG0v%2BNbVIBdxaHOPJupq5Uq7oVnq9xH9GLAR6Czwe2mSDMhS97sNowrOgxIHm4YhxhyXfSsx5Zot6MbIuuehbv3DfoHUAb8BBgyxOmdq%2BBj0jbe3LsLP3m%2FwIYv0RRw%2FWrG41AxLYfv%2BLNfSVOdVry6sIkw0NWuwgY6pgHMDx4SQ0XJqChDnIE%2FJeUDLdn4jj8jJn0By604fKtzrmUFXSBvmKxXvb6yZqqycevHMEIsh6TdFibfb9g8uMYDZPHmTtxA8thMhgiUSskwqVbqfWu%2BlYYbi2PaGy7cDNRrfCSE842g9PSysOILwXRAi5Jt5p%2BOfuy2MurZo7zgkARmrRGqNDQMUXARWlBmdQKfcQUizV3H49pq2sN7121r6k7JrcEF&X-Amz-Signature=0718dd47cd42400724dffd147d3288d237c7cc365e038d866db23db37eab31be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN53GGCH%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIHjLmw0A3hNHEGDq%2FXyca4d%2FfiNEzi3NKlJX31VbbnCQAiBFXzASyVlsLvGp74EQLlMrZuBInqILTZ4sIPnixiC2viqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf0x5%2FVA4e08PSC7FKtwDFS3G%2F8zdGlsSkv7v1p%2Bt5qguWp5MilKUZYXsSkyH6gdUYp0KUE7ZWi1zibD6Z6vg2PSV1QfR67Yo0KOziHXJRnSRaBQ%2FvgjxIWj9Du%2FWXuSCz5HiIzRqw93N3JpPmmNQ%2BSmm6q9T2p7DIAqMIxmEtmFn0P4bgHFldMqkiMVdvcD%2FB0SbzsYb8jyCAvCMdP%2BSDWi%2BTcAuCPsxyTcgZd8dCeuroVJxQyH2MCLhL6u1iFrrZJA0bH9%2Fx5%2F2HNzx2FD%2BWnAIoC5s%2BTTCVRcGkq7A%2BpuiwFhWoCUphff%2F1XPC%2B0%2FvuGbPNzLsU8pseZr5viCYEUGY5OWl620LKSSVDEtBOCdCIBbS9QjMSA%2Fg13QWQdNtiwDaQORQ6cYFTKP%2F5oGhmx29ANiHpF60Ywn%2FV9VRS3q90703W86T3MZ2hcuRaiUGQEa2BKly8JRQLYGxxqaP56X6xI3t%2BAhCx3FXnjtTvSgO2dd%2BYjmUrlG0v%2BNbVIBdxaHOPJupq5Uq7oVnq9xH9GLAR6Czwe2mSDMhS97sNowrOgxIHm4YhxhyXfSsx5Zot6MbIuuehbv3DfoHUAb8BBgyxOmdq%2BBj0jbe3LsLP3m%2FwIYv0RRw%2FWrG41AxLYfv%2BLNfSVOdVry6sIkw0NWuwgY6pgHMDx4SQ0XJqChDnIE%2FJeUDLdn4jj8jJn0By604fKtzrmUFXSBvmKxXvb6yZqqycevHMEIsh6TdFibfb9g8uMYDZPHmTtxA8thMhgiUSskwqVbqfWu%2BlYYbi2PaGy7cDNRrfCSE842g9PSysOILwXRAi5Jt5p%2BOfuy2MurZo7zgkARmrRGqNDQMUXARWlBmdQKfcQUizV3H49pq2sN7121r6k7JrcEF&X-Amz-Signature=b649ee6dd163d61b9b67427f06129c1163a3cf3f547f14f64317dce5d75b8e9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN53GGCH%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIHjLmw0A3hNHEGDq%2FXyca4d%2FfiNEzi3NKlJX31VbbnCQAiBFXzASyVlsLvGp74EQLlMrZuBInqILTZ4sIPnixiC2viqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf0x5%2FVA4e08PSC7FKtwDFS3G%2F8zdGlsSkv7v1p%2Bt5qguWp5MilKUZYXsSkyH6gdUYp0KUE7ZWi1zibD6Z6vg2PSV1QfR67Yo0KOziHXJRnSRaBQ%2FvgjxIWj9Du%2FWXuSCz5HiIzRqw93N3JpPmmNQ%2BSmm6q9T2p7DIAqMIxmEtmFn0P4bgHFldMqkiMVdvcD%2FB0SbzsYb8jyCAvCMdP%2BSDWi%2BTcAuCPsxyTcgZd8dCeuroVJxQyH2MCLhL6u1iFrrZJA0bH9%2Fx5%2F2HNzx2FD%2BWnAIoC5s%2BTTCVRcGkq7A%2BpuiwFhWoCUphff%2F1XPC%2B0%2FvuGbPNzLsU8pseZr5viCYEUGY5OWl620LKSSVDEtBOCdCIBbS9QjMSA%2Fg13QWQdNtiwDaQORQ6cYFTKP%2F5oGhmx29ANiHpF60Ywn%2FV9VRS3q90703W86T3MZ2hcuRaiUGQEa2BKly8JRQLYGxxqaP56X6xI3t%2BAhCx3FXnjtTvSgO2dd%2BYjmUrlG0v%2BNbVIBdxaHOPJupq5Uq7oVnq9xH9GLAR6Czwe2mSDMhS97sNowrOgxIHm4YhxhyXfSsx5Zot6MbIuuehbv3DfoHUAb8BBgyxOmdq%2BBj0jbe3LsLP3m%2FwIYv0RRw%2FWrG41AxLYfv%2BLNfSVOdVry6sIkw0NWuwgY6pgHMDx4SQ0XJqChDnIE%2FJeUDLdn4jj8jJn0By604fKtzrmUFXSBvmKxXvb6yZqqycevHMEIsh6TdFibfb9g8uMYDZPHmTtxA8thMhgiUSskwqVbqfWu%2BlYYbi2PaGy7cDNRrfCSE842g9PSysOILwXRAi5Jt5p%2BOfuy2MurZo7zgkARmrRGqNDQMUXARWlBmdQKfcQUizV3H49pq2sN7121r6k7JrcEF&X-Amz-Signature=95dda5fc1e19a23e2f5388b45daa7c7c0ca18a788513b6ee2cc47e8ff77a3389&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
