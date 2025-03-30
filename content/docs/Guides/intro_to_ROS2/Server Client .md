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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6KTDH4%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCl2tz%2BIi7tu6wL%2Fmhflj3%2BTHjwRpmZQs6bYZg5h4qPKAIgdHMz2BNbTDuuCpxmWoRsD%2BvJMqLvcy9MsPhcagJQ8KMqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8FTBsXOME36O%2FBUircA%2F0i6%2BPDgv3i4ou38agSohwSGw74vvuSr8ryB%2BsQ%2FjjVZLGEsHdXBgmIwsvhP6LYHtL08AUBIHGApnAX2kKTea1H9TGojfpEW9uN2Ls62WMnPRqXr03hFlCvw5o8Mw1I5CdizevqgfwVzG0oGVXcrI%2FcqhbiuP2fI121O6rv78adjEAcwJ5BvqkrPocQEdOrJ8xsL8pO%2FdhBZcPMk2CAfR0gZKeA6zowp6J4Mz33K2LESQ8c654iEcILUGxBgjwB8WZKsFM%2FslFIDlcmNh5Gkw9AMoMOE0k5I0zCebfQVPjh%2FF4iuoQ9QVDqxzSxK9pQZspUEGPmhA1KUHgva0vg5LmoLmNhVXr0ZGNq2knLz12nZtjUB9TcZCCwrJahYmu%2FsyL0d9OEYyklt4EVzQvC8po59ZGiaGjQYghjoZ9pXyyFTm%2FlMq18mtQIQje%2BdXYDXkf5AkILfCNF0b%2FCrSktQuRKnuiR2VWyH1SO7VRnfgX9i5HXGy743QujKwiC3ukDl3OA8wE0sQcwyz%2Fhgkf42pv%2BBA%2Bi7l%2FJ9MBBAAqAC3S%2B1QvVm%2FROo695S4HJHI%2Fg4mYoxBaHzb2BWXA%2BThvDtmm031Z6Ke1O5XdQQAC83qrXM4xvcPnI%2BjDelJmEMO%2Fpor8GOqUBL71sj%2B2yfpLn1KUG%2BwEqUwGWRcJHIGEaH0WRdTsD7uSt6jbtXGZbL1YUa2Ty73ELAfEVlUZ51%2FcPMwIWlXMc%2BVdH2mpGWzcC%2BlhSdgsTjKl3W5RuabJjxxmVCZqE4kSMiFAPf6cKhCRQzfZ8ERrQb4gkmunKnNU2FMxQX0J%2F85kyqfdm6jHnDrp2aaHkueUBzd85gol7KT85T9lKzv794SaMhw73&X-Amz-Signature=0c619f6a98bb67bf9f8dc4fd7ee80878f18e98df3e2b4d27257e3ba36b572b9d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6KTDH4%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCl2tz%2BIi7tu6wL%2Fmhflj3%2BTHjwRpmZQs6bYZg5h4qPKAIgdHMz2BNbTDuuCpxmWoRsD%2BvJMqLvcy9MsPhcagJQ8KMqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8FTBsXOME36O%2FBUircA%2F0i6%2BPDgv3i4ou38agSohwSGw74vvuSr8ryB%2BsQ%2FjjVZLGEsHdXBgmIwsvhP6LYHtL08AUBIHGApnAX2kKTea1H9TGojfpEW9uN2Ls62WMnPRqXr03hFlCvw5o8Mw1I5CdizevqgfwVzG0oGVXcrI%2FcqhbiuP2fI121O6rv78adjEAcwJ5BvqkrPocQEdOrJ8xsL8pO%2FdhBZcPMk2CAfR0gZKeA6zowp6J4Mz33K2LESQ8c654iEcILUGxBgjwB8WZKsFM%2FslFIDlcmNh5Gkw9AMoMOE0k5I0zCebfQVPjh%2FF4iuoQ9QVDqxzSxK9pQZspUEGPmhA1KUHgva0vg5LmoLmNhVXr0ZGNq2knLz12nZtjUB9TcZCCwrJahYmu%2FsyL0d9OEYyklt4EVzQvC8po59ZGiaGjQYghjoZ9pXyyFTm%2FlMq18mtQIQje%2BdXYDXkf5AkILfCNF0b%2FCrSktQuRKnuiR2VWyH1SO7VRnfgX9i5HXGy743QujKwiC3ukDl3OA8wE0sQcwyz%2Fhgkf42pv%2BBA%2Bi7l%2FJ9MBBAAqAC3S%2B1QvVm%2FROo695S4HJHI%2Fg4mYoxBaHzb2BWXA%2BThvDtmm031Z6Ke1O5XdQQAC83qrXM4xvcPnI%2BjDelJmEMO%2Fpor8GOqUBL71sj%2B2yfpLn1KUG%2BwEqUwGWRcJHIGEaH0WRdTsD7uSt6jbtXGZbL1YUa2Ty73ELAfEVlUZ51%2FcPMwIWlXMc%2BVdH2mpGWzcC%2BlhSdgsTjKl3W5RuabJjxxmVCZqE4kSMiFAPf6cKhCRQzfZ8ERrQb4gkmunKnNU2FMxQX0J%2F85kyqfdm6jHnDrp2aaHkueUBzd85gol7KT85T9lKzv794SaMhw73&X-Amz-Signature=e8b084ce66e7d99aaf152c570d74968851b02c4fc3623afa4d0b5bdc49d75cef&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6KTDH4%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCl2tz%2BIi7tu6wL%2Fmhflj3%2BTHjwRpmZQs6bYZg5h4qPKAIgdHMz2BNbTDuuCpxmWoRsD%2BvJMqLvcy9MsPhcagJQ8KMqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8FTBsXOME36O%2FBUircA%2F0i6%2BPDgv3i4ou38agSohwSGw74vvuSr8ryB%2BsQ%2FjjVZLGEsHdXBgmIwsvhP6LYHtL08AUBIHGApnAX2kKTea1H9TGojfpEW9uN2Ls62WMnPRqXr03hFlCvw5o8Mw1I5CdizevqgfwVzG0oGVXcrI%2FcqhbiuP2fI121O6rv78adjEAcwJ5BvqkrPocQEdOrJ8xsL8pO%2FdhBZcPMk2CAfR0gZKeA6zowp6J4Mz33K2LESQ8c654iEcILUGxBgjwB8WZKsFM%2FslFIDlcmNh5Gkw9AMoMOE0k5I0zCebfQVPjh%2FF4iuoQ9QVDqxzSxK9pQZspUEGPmhA1KUHgva0vg5LmoLmNhVXr0ZGNq2knLz12nZtjUB9TcZCCwrJahYmu%2FsyL0d9OEYyklt4EVzQvC8po59ZGiaGjQYghjoZ9pXyyFTm%2FlMq18mtQIQje%2BdXYDXkf5AkILfCNF0b%2FCrSktQuRKnuiR2VWyH1SO7VRnfgX9i5HXGy743QujKwiC3ukDl3OA8wE0sQcwyz%2Fhgkf42pv%2BBA%2Bi7l%2FJ9MBBAAqAC3S%2B1QvVm%2FROo695S4HJHI%2Fg4mYoxBaHzb2BWXA%2BThvDtmm031Z6Ke1O5XdQQAC83qrXM4xvcPnI%2BjDelJmEMO%2Fpor8GOqUBL71sj%2B2yfpLn1KUG%2BwEqUwGWRcJHIGEaH0WRdTsD7uSt6jbtXGZbL1YUa2Ty73ELAfEVlUZ51%2FcPMwIWlXMc%2BVdH2mpGWzcC%2BlhSdgsTjKl3W5RuabJjxxmVCZqE4kSMiFAPf6cKhCRQzfZ8ERrQb4gkmunKnNU2FMxQX0J%2F85kyqfdm6jHnDrp2aaHkueUBzd85gol7KT85T9lKzv794SaMhw73&X-Amz-Signature=1312a7d899ee7437c760617a4cb0c4e6e9b4b779a1ed713d93c5bd6ba07a01dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6KTDH4%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCl2tz%2BIi7tu6wL%2Fmhflj3%2BTHjwRpmZQs6bYZg5h4qPKAIgdHMz2BNbTDuuCpxmWoRsD%2BvJMqLvcy9MsPhcagJQ8KMqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8FTBsXOME36O%2FBUircA%2F0i6%2BPDgv3i4ou38agSohwSGw74vvuSr8ryB%2BsQ%2FjjVZLGEsHdXBgmIwsvhP6LYHtL08AUBIHGApnAX2kKTea1H9TGojfpEW9uN2Ls62WMnPRqXr03hFlCvw5o8Mw1I5CdizevqgfwVzG0oGVXcrI%2FcqhbiuP2fI121O6rv78adjEAcwJ5BvqkrPocQEdOrJ8xsL8pO%2FdhBZcPMk2CAfR0gZKeA6zowp6J4Mz33K2LESQ8c654iEcILUGxBgjwB8WZKsFM%2FslFIDlcmNh5Gkw9AMoMOE0k5I0zCebfQVPjh%2FF4iuoQ9QVDqxzSxK9pQZspUEGPmhA1KUHgva0vg5LmoLmNhVXr0ZGNq2knLz12nZtjUB9TcZCCwrJahYmu%2FsyL0d9OEYyklt4EVzQvC8po59ZGiaGjQYghjoZ9pXyyFTm%2FlMq18mtQIQje%2BdXYDXkf5AkILfCNF0b%2FCrSktQuRKnuiR2VWyH1SO7VRnfgX9i5HXGy743QujKwiC3ukDl3OA8wE0sQcwyz%2Fhgkf42pv%2BBA%2Bi7l%2FJ9MBBAAqAC3S%2B1QvVm%2FROo695S4HJHI%2Fg4mYoxBaHzb2BWXA%2BThvDtmm031Z6Ke1O5XdQQAC83qrXM4xvcPnI%2BjDelJmEMO%2Fpor8GOqUBL71sj%2B2yfpLn1KUG%2BwEqUwGWRcJHIGEaH0WRdTsD7uSt6jbtXGZbL1YUa2Ty73ELAfEVlUZ51%2FcPMwIWlXMc%2BVdH2mpGWzcC%2BlhSdgsTjKl3W5RuabJjxxmVCZqE4kSMiFAPf6cKhCRQzfZ8ERrQb4gkmunKnNU2FMxQX0J%2F85kyqfdm6jHnDrp2aaHkueUBzd85gol7KT85T9lKzv794SaMhw73&X-Amz-Signature=b6371ffcaf917ff6a93c73fda1b995b043c7cd2a281b51a8256ed196b442b6b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6KTDH4%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCl2tz%2BIi7tu6wL%2Fmhflj3%2BTHjwRpmZQs6bYZg5h4qPKAIgdHMz2BNbTDuuCpxmWoRsD%2BvJMqLvcy9MsPhcagJQ8KMqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8FTBsXOME36O%2FBUircA%2F0i6%2BPDgv3i4ou38agSohwSGw74vvuSr8ryB%2BsQ%2FjjVZLGEsHdXBgmIwsvhP6LYHtL08AUBIHGApnAX2kKTea1H9TGojfpEW9uN2Ls62WMnPRqXr03hFlCvw5o8Mw1I5CdizevqgfwVzG0oGVXcrI%2FcqhbiuP2fI121O6rv78adjEAcwJ5BvqkrPocQEdOrJ8xsL8pO%2FdhBZcPMk2CAfR0gZKeA6zowp6J4Mz33K2LESQ8c654iEcILUGxBgjwB8WZKsFM%2FslFIDlcmNh5Gkw9AMoMOE0k5I0zCebfQVPjh%2FF4iuoQ9QVDqxzSxK9pQZspUEGPmhA1KUHgva0vg5LmoLmNhVXr0ZGNq2knLz12nZtjUB9TcZCCwrJahYmu%2FsyL0d9OEYyklt4EVzQvC8po59ZGiaGjQYghjoZ9pXyyFTm%2FlMq18mtQIQje%2BdXYDXkf5AkILfCNF0b%2FCrSktQuRKnuiR2VWyH1SO7VRnfgX9i5HXGy743QujKwiC3ukDl3OA8wE0sQcwyz%2Fhgkf42pv%2BBA%2Bi7l%2FJ9MBBAAqAC3S%2B1QvVm%2FROo695S4HJHI%2Fg4mYoxBaHzb2BWXA%2BThvDtmm031Z6Ke1O5XdQQAC83qrXM4xvcPnI%2BjDelJmEMO%2Fpor8GOqUBL71sj%2B2yfpLn1KUG%2BwEqUwGWRcJHIGEaH0WRdTsD7uSt6jbtXGZbL1YUa2Ty73ELAfEVlUZ51%2FcPMwIWlXMc%2BVdH2mpGWzcC%2BlhSdgsTjKl3W5RuabJjxxmVCZqE4kSMiFAPf6cKhCRQzfZ8ERrQb4gkmunKnNU2FMxQX0J%2F85kyqfdm6jHnDrp2aaHkueUBzd85gol7KT85T9lKzv794SaMhw73&X-Amz-Signature=eae30d3a1f5e13509077a3226e71fbeb53c5dcf73d60f3f7c442eda532555726&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
