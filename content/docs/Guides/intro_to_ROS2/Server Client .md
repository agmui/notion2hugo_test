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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSWLVUUQ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBtY4uj2gSJbni%2F66tIk5XjeUqZ7bTzEXuV6bAvQVrAfAiEA33TFSEbwMCGvN9T7ZKPMTk3nyfUfgcHUC3JbkuZ8muUqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBJ2YbnNz07wNUkZSrcA%2FH5lN%2F%2FgiOcQ2%2BLaBja1MHTUIuK5RX0oK8FKoxzCul8cGQb7DDMfW9lRChFMr%2FBTEhtyiBdrVQufwQiU%2BhGhzMjJ8OAjfih1I0VJaYjseFTWNxKEebbQYwVFsswgt6M5nzUwxJy0retxMMiIzwd5L0aKyevSJ5WegeyuUOmWxiphKs%2Fw2z7c82zzzBhAJ5knZletH9wEh0nyr0ArgooKqnpR26NtEhjyYuJsd5J0tlGfX52ljzlg85Zu7neSYMyC4rnX0b0nrOCbKrmlcvmpIa3NcWXCxVpE8avHDAeT5DIKTqwsVWWvPAmfPJqE6Kb8BSXH18T1FR4r%2BBm1Mhbwdn%2B%2BzP5B6xC%2BgKSOETOw70HfNf3MSMkvss8auD%2FESqqPgHGdD3a%2FscqxWOm2pGSZURYMT6i6HKgjoOnNVgrla9oiDKpO4bMBOSnTCHYDWeIOtssudcUSpjfVy%2BdRunyBgsw8IXBK67Put9Dh15aY%2FPMk3yT5MOu%2FSHaf3WG%2FY6CwaW75q3a7DsqvCJliqq2UM7JKQPIKrQ6qtCK0%2FQHEI51k1Nhc1DGAqJNcC4LSeR%2FbluAtgcMr%2FInlNa0EzJ%2FV5Nf2Ais0BqRpR93t4%2BBduwO4QA%2BPXvnRFC7O%2FIIMMXr28AGOqUBPYJu1X3jbIW1kuxiH%2BPTLfg9uSDVblq%2FMnBXRNofHwUgn1v2vmcugMLPW55wz%2FXU14TFbX6u597kgmy0NkSH5ehm0%2BMmQwHOrGEU69u8X2oVk8NOzKYejwgP4my74jka0TRFj%2BdEdMeJ6bkPm%2F%2FiS2wkb2%2F%2F2kNq5a%2B9ZySlaZAInX7MYuf%2BhtKMmKMwMt%2BEt6Yr1B3Tv5rPrt%2BC8RetHeuW6dC8&X-Amz-Signature=9c8899222e7fd45a0489b693a2ad0badfd898757b6648f19d765439f14535edb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSWLVUUQ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBtY4uj2gSJbni%2F66tIk5XjeUqZ7bTzEXuV6bAvQVrAfAiEA33TFSEbwMCGvN9T7ZKPMTk3nyfUfgcHUC3JbkuZ8muUqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBJ2YbnNz07wNUkZSrcA%2FH5lN%2F%2FgiOcQ2%2BLaBja1MHTUIuK5RX0oK8FKoxzCul8cGQb7DDMfW9lRChFMr%2FBTEhtyiBdrVQufwQiU%2BhGhzMjJ8OAjfih1I0VJaYjseFTWNxKEebbQYwVFsswgt6M5nzUwxJy0retxMMiIzwd5L0aKyevSJ5WegeyuUOmWxiphKs%2Fw2z7c82zzzBhAJ5knZletH9wEh0nyr0ArgooKqnpR26NtEhjyYuJsd5J0tlGfX52ljzlg85Zu7neSYMyC4rnX0b0nrOCbKrmlcvmpIa3NcWXCxVpE8avHDAeT5DIKTqwsVWWvPAmfPJqE6Kb8BSXH18T1FR4r%2BBm1Mhbwdn%2B%2BzP5B6xC%2BgKSOETOw70HfNf3MSMkvss8auD%2FESqqPgHGdD3a%2FscqxWOm2pGSZURYMT6i6HKgjoOnNVgrla9oiDKpO4bMBOSnTCHYDWeIOtssudcUSpjfVy%2BdRunyBgsw8IXBK67Put9Dh15aY%2FPMk3yT5MOu%2FSHaf3WG%2FY6CwaW75q3a7DsqvCJliqq2UM7JKQPIKrQ6qtCK0%2FQHEI51k1Nhc1DGAqJNcC4LSeR%2FbluAtgcMr%2FInlNa0EzJ%2FV5Nf2Ais0BqRpR93t4%2BBduwO4QA%2BPXvnRFC7O%2FIIMMXr28AGOqUBPYJu1X3jbIW1kuxiH%2BPTLfg9uSDVblq%2FMnBXRNofHwUgn1v2vmcugMLPW55wz%2FXU14TFbX6u597kgmy0NkSH5ehm0%2BMmQwHOrGEU69u8X2oVk8NOzKYejwgP4my74jka0TRFj%2BdEdMeJ6bkPm%2F%2FiS2wkb2%2F%2F2kNq5a%2B9ZySlaZAInX7MYuf%2BhtKMmKMwMt%2BEt6Yr1B3Tv5rPrt%2BC8RetHeuW6dC8&X-Amz-Signature=ab4e358f768bccd92f4cba9bd079d2e6c2edc8131f1750d94de7573d9b445a84&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSWLVUUQ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBtY4uj2gSJbni%2F66tIk5XjeUqZ7bTzEXuV6bAvQVrAfAiEA33TFSEbwMCGvN9T7ZKPMTk3nyfUfgcHUC3JbkuZ8muUqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBJ2YbnNz07wNUkZSrcA%2FH5lN%2F%2FgiOcQ2%2BLaBja1MHTUIuK5RX0oK8FKoxzCul8cGQb7DDMfW9lRChFMr%2FBTEhtyiBdrVQufwQiU%2BhGhzMjJ8OAjfih1I0VJaYjseFTWNxKEebbQYwVFsswgt6M5nzUwxJy0retxMMiIzwd5L0aKyevSJ5WegeyuUOmWxiphKs%2Fw2z7c82zzzBhAJ5knZletH9wEh0nyr0ArgooKqnpR26NtEhjyYuJsd5J0tlGfX52ljzlg85Zu7neSYMyC4rnX0b0nrOCbKrmlcvmpIa3NcWXCxVpE8avHDAeT5DIKTqwsVWWvPAmfPJqE6Kb8BSXH18T1FR4r%2BBm1Mhbwdn%2B%2BzP5B6xC%2BgKSOETOw70HfNf3MSMkvss8auD%2FESqqPgHGdD3a%2FscqxWOm2pGSZURYMT6i6HKgjoOnNVgrla9oiDKpO4bMBOSnTCHYDWeIOtssudcUSpjfVy%2BdRunyBgsw8IXBK67Put9Dh15aY%2FPMk3yT5MOu%2FSHaf3WG%2FY6CwaW75q3a7DsqvCJliqq2UM7JKQPIKrQ6qtCK0%2FQHEI51k1Nhc1DGAqJNcC4LSeR%2FbluAtgcMr%2FInlNa0EzJ%2FV5Nf2Ais0BqRpR93t4%2BBduwO4QA%2BPXvnRFC7O%2FIIMMXr28AGOqUBPYJu1X3jbIW1kuxiH%2BPTLfg9uSDVblq%2FMnBXRNofHwUgn1v2vmcugMLPW55wz%2FXU14TFbX6u597kgmy0NkSH5ehm0%2BMmQwHOrGEU69u8X2oVk8NOzKYejwgP4my74jka0TRFj%2BdEdMeJ6bkPm%2F%2FiS2wkb2%2F%2F2kNq5a%2B9ZySlaZAInX7MYuf%2BhtKMmKMwMt%2BEt6Yr1B3Tv5rPrt%2BC8RetHeuW6dC8&X-Amz-Signature=76ae8153b8c738d98b4c2e0fde663ec235f2161223d3f164be476516d2b3e44f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSWLVUUQ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBtY4uj2gSJbni%2F66tIk5XjeUqZ7bTzEXuV6bAvQVrAfAiEA33TFSEbwMCGvN9T7ZKPMTk3nyfUfgcHUC3JbkuZ8muUqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBJ2YbnNz07wNUkZSrcA%2FH5lN%2F%2FgiOcQ2%2BLaBja1MHTUIuK5RX0oK8FKoxzCul8cGQb7DDMfW9lRChFMr%2FBTEhtyiBdrVQufwQiU%2BhGhzMjJ8OAjfih1I0VJaYjseFTWNxKEebbQYwVFsswgt6M5nzUwxJy0retxMMiIzwd5L0aKyevSJ5WegeyuUOmWxiphKs%2Fw2z7c82zzzBhAJ5knZletH9wEh0nyr0ArgooKqnpR26NtEhjyYuJsd5J0tlGfX52ljzlg85Zu7neSYMyC4rnX0b0nrOCbKrmlcvmpIa3NcWXCxVpE8avHDAeT5DIKTqwsVWWvPAmfPJqE6Kb8BSXH18T1FR4r%2BBm1Mhbwdn%2B%2BzP5B6xC%2BgKSOETOw70HfNf3MSMkvss8auD%2FESqqPgHGdD3a%2FscqxWOm2pGSZURYMT6i6HKgjoOnNVgrla9oiDKpO4bMBOSnTCHYDWeIOtssudcUSpjfVy%2BdRunyBgsw8IXBK67Put9Dh15aY%2FPMk3yT5MOu%2FSHaf3WG%2FY6CwaW75q3a7DsqvCJliqq2UM7JKQPIKrQ6qtCK0%2FQHEI51k1Nhc1DGAqJNcC4LSeR%2FbluAtgcMr%2FInlNa0EzJ%2FV5Nf2Ais0BqRpR93t4%2BBduwO4QA%2BPXvnRFC7O%2FIIMMXr28AGOqUBPYJu1X3jbIW1kuxiH%2BPTLfg9uSDVblq%2FMnBXRNofHwUgn1v2vmcugMLPW55wz%2FXU14TFbX6u597kgmy0NkSH5ehm0%2BMmQwHOrGEU69u8X2oVk8NOzKYejwgP4my74jka0TRFj%2BdEdMeJ6bkPm%2F%2FiS2wkb2%2F%2F2kNq5a%2B9ZySlaZAInX7MYuf%2BhtKMmKMwMt%2BEt6Yr1B3Tv5rPrt%2BC8RetHeuW6dC8&X-Amz-Signature=f465475625f8bcb7ff9a860149387fafe1560b10d4061b9075350992b8108f7c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSWLVUUQ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBtY4uj2gSJbni%2F66tIk5XjeUqZ7bTzEXuV6bAvQVrAfAiEA33TFSEbwMCGvN9T7ZKPMTk3nyfUfgcHUC3JbkuZ8muUqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBJ2YbnNz07wNUkZSrcA%2FH5lN%2F%2FgiOcQ2%2BLaBja1MHTUIuK5RX0oK8FKoxzCul8cGQb7DDMfW9lRChFMr%2FBTEhtyiBdrVQufwQiU%2BhGhzMjJ8OAjfih1I0VJaYjseFTWNxKEebbQYwVFsswgt6M5nzUwxJy0retxMMiIzwd5L0aKyevSJ5WegeyuUOmWxiphKs%2Fw2z7c82zzzBhAJ5knZletH9wEh0nyr0ArgooKqnpR26NtEhjyYuJsd5J0tlGfX52ljzlg85Zu7neSYMyC4rnX0b0nrOCbKrmlcvmpIa3NcWXCxVpE8avHDAeT5DIKTqwsVWWvPAmfPJqE6Kb8BSXH18T1FR4r%2BBm1Mhbwdn%2B%2BzP5B6xC%2BgKSOETOw70HfNf3MSMkvss8auD%2FESqqPgHGdD3a%2FscqxWOm2pGSZURYMT6i6HKgjoOnNVgrla9oiDKpO4bMBOSnTCHYDWeIOtssudcUSpjfVy%2BdRunyBgsw8IXBK67Put9Dh15aY%2FPMk3yT5MOu%2FSHaf3WG%2FY6CwaW75q3a7DsqvCJliqq2UM7JKQPIKrQ6qtCK0%2FQHEI51k1Nhc1DGAqJNcC4LSeR%2FbluAtgcMr%2FInlNa0EzJ%2FV5Nf2Ais0BqRpR93t4%2BBduwO4QA%2BPXvnRFC7O%2FIIMMXr28AGOqUBPYJu1X3jbIW1kuxiH%2BPTLfg9uSDVblq%2FMnBXRNofHwUgn1v2vmcugMLPW55wz%2FXU14TFbX6u597kgmy0NkSH5ehm0%2BMmQwHOrGEU69u8X2oVk8NOzKYejwgP4my74jka0TRFj%2BdEdMeJ6bkPm%2F%2FiS2wkb2%2F%2F2kNq5a%2B9ZySlaZAInX7MYuf%2BhtKMmKMwMt%2BEt6Yr1B3Tv5rPrt%2BC8RetHeuW6dC8&X-Amz-Signature=19628b10a63c15f4f18e4fe48291398360dcbd0912f76eadc558aaf445e37a47&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
