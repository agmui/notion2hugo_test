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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L5XT4N6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0XCPHZ7Gb%2FjIZfO292RcvSTu21bOFIbjoTIJyt3Vv4QIhALlHQWSq3%2Fe0x%2FgRElO6NjxyPGFOCjr6uVkvbw8pTlNmKv8DCEoQABoMNjM3NDIzMTgzODA1IgwI6SniGkJer6Di8o0q3AN%2FF7yyhVzs8ff3KsqxST7IfobnMhARqklXDxAWCHY7kvJRMwuSJ87HMlEIAIfUYGjKZC6jr3yHG2s%2BHkHooz%2F4Scj0sMxjr5WvWxZgcVAcicsdwJyhdxGQLneP%2F3meNRtQ3ghTZH4XE1XuxPGfe%2FMz3R6ZY2N2WXxjleDPew2tGUbLxn9iodu0PuBUiQ7vbnT7%2BgYVXgl6l6tZ8mscsfBF4Yk9YSS5U%2BlrdNUC2hf94XUw52P%2BVsYhN7VSpHyJM84oSZVEcBzc22e6FnMpLtI7FwT0ZrwQsDvmeHBfPIA7FDaJ5m8wNMCybz%2Br%2BFCRRpPSLyzSRDAJqU%2F3SZfnz9xiei2Zw73xVpmU90um2mxCngOp8sxayqzdNVOwFpLTnZvP%2BALsynWMM93M%2FWvnpEWyJcgH2OnqSYpEHCDlqN79SmYHRU3NMKMZPSUaxV7VCXaXNLWzcYf8dqvMNMPqYIOnfh%2FoRxPD2SO%2FvFL72R1UrOk5LqW%2F2Mc%2FBqh%2BUJq87WkJqkrBKunjx27YSPQNiaR%2Bhiy8Bs7tanHojnEDrMlFd%2BiP4ctkhRllZhtpQJ8E0eeXVgIpc4YiJT9027DwrXkeMEugNfKRc35iwS2ui6KV%2ByeGL68AALdtdjRfQzDJqLTABjqkAUKIzdtDD8T2V4O98an3kajAN51INzqQkFDFj3cHPy1IphvtgPyyN19pImO4n6d67VCkmI38%2FF7FG5bL%2B9eLpxUKSOYokEI5cx7KOc%2BwpMSYR5z0D4ODgCs%2F%2B4MrER88SOJKPa7CDTbgU6FaTtJcMDC4hUraDICtU%2Fjvw06sVSvvwCh6F43TQrYc15wr3awijTUKglJ1GoOd%2FlNsY5zkIsrF%2FEEf&X-Amz-Signature=915ee89a1d8ba957609daabe55c90a13a96fe112712125c982ae3045d1f69064&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L5XT4N6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0XCPHZ7Gb%2FjIZfO292RcvSTu21bOFIbjoTIJyt3Vv4QIhALlHQWSq3%2Fe0x%2FgRElO6NjxyPGFOCjr6uVkvbw8pTlNmKv8DCEoQABoMNjM3NDIzMTgzODA1IgwI6SniGkJer6Di8o0q3AN%2FF7yyhVzs8ff3KsqxST7IfobnMhARqklXDxAWCHY7kvJRMwuSJ87HMlEIAIfUYGjKZC6jr3yHG2s%2BHkHooz%2F4Scj0sMxjr5WvWxZgcVAcicsdwJyhdxGQLneP%2F3meNRtQ3ghTZH4XE1XuxPGfe%2FMz3R6ZY2N2WXxjleDPew2tGUbLxn9iodu0PuBUiQ7vbnT7%2BgYVXgl6l6tZ8mscsfBF4Yk9YSS5U%2BlrdNUC2hf94XUw52P%2BVsYhN7VSpHyJM84oSZVEcBzc22e6FnMpLtI7FwT0ZrwQsDvmeHBfPIA7FDaJ5m8wNMCybz%2Br%2BFCRRpPSLyzSRDAJqU%2F3SZfnz9xiei2Zw73xVpmU90um2mxCngOp8sxayqzdNVOwFpLTnZvP%2BALsynWMM93M%2FWvnpEWyJcgH2OnqSYpEHCDlqN79SmYHRU3NMKMZPSUaxV7VCXaXNLWzcYf8dqvMNMPqYIOnfh%2FoRxPD2SO%2FvFL72R1UrOk5LqW%2F2Mc%2FBqh%2BUJq87WkJqkrBKunjx27YSPQNiaR%2Bhiy8Bs7tanHojnEDrMlFd%2BiP4ctkhRllZhtpQJ8E0eeXVgIpc4YiJT9027DwrXkeMEugNfKRc35iwS2ui6KV%2ByeGL68AALdtdjRfQzDJqLTABjqkAUKIzdtDD8T2V4O98an3kajAN51INzqQkFDFj3cHPy1IphvtgPyyN19pImO4n6d67VCkmI38%2FF7FG5bL%2B9eLpxUKSOYokEI5cx7KOc%2BwpMSYR5z0D4ODgCs%2F%2B4MrER88SOJKPa7CDTbgU6FaTtJcMDC4hUraDICtU%2Fjvw06sVSvvwCh6F43TQrYc15wr3awijTUKglJ1GoOd%2FlNsY5zkIsrF%2FEEf&X-Amz-Signature=f004e6325f075cd4decc39aae3040c8d524f94e17e39514784c1b00c9026da73&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L5XT4N6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0XCPHZ7Gb%2FjIZfO292RcvSTu21bOFIbjoTIJyt3Vv4QIhALlHQWSq3%2Fe0x%2FgRElO6NjxyPGFOCjr6uVkvbw8pTlNmKv8DCEoQABoMNjM3NDIzMTgzODA1IgwI6SniGkJer6Di8o0q3AN%2FF7yyhVzs8ff3KsqxST7IfobnMhARqklXDxAWCHY7kvJRMwuSJ87HMlEIAIfUYGjKZC6jr3yHG2s%2BHkHooz%2F4Scj0sMxjr5WvWxZgcVAcicsdwJyhdxGQLneP%2F3meNRtQ3ghTZH4XE1XuxPGfe%2FMz3R6ZY2N2WXxjleDPew2tGUbLxn9iodu0PuBUiQ7vbnT7%2BgYVXgl6l6tZ8mscsfBF4Yk9YSS5U%2BlrdNUC2hf94XUw52P%2BVsYhN7VSpHyJM84oSZVEcBzc22e6FnMpLtI7FwT0ZrwQsDvmeHBfPIA7FDaJ5m8wNMCybz%2Br%2BFCRRpPSLyzSRDAJqU%2F3SZfnz9xiei2Zw73xVpmU90um2mxCngOp8sxayqzdNVOwFpLTnZvP%2BALsynWMM93M%2FWvnpEWyJcgH2OnqSYpEHCDlqN79SmYHRU3NMKMZPSUaxV7VCXaXNLWzcYf8dqvMNMPqYIOnfh%2FoRxPD2SO%2FvFL72R1UrOk5LqW%2F2Mc%2FBqh%2BUJq87WkJqkrBKunjx27YSPQNiaR%2Bhiy8Bs7tanHojnEDrMlFd%2BiP4ctkhRllZhtpQJ8E0eeXVgIpc4YiJT9027DwrXkeMEugNfKRc35iwS2ui6KV%2ByeGL68AALdtdjRfQzDJqLTABjqkAUKIzdtDD8T2V4O98an3kajAN51INzqQkFDFj3cHPy1IphvtgPyyN19pImO4n6d67VCkmI38%2FF7FG5bL%2B9eLpxUKSOYokEI5cx7KOc%2BwpMSYR5z0D4ODgCs%2F%2B4MrER88SOJKPa7CDTbgU6FaTtJcMDC4hUraDICtU%2Fjvw06sVSvvwCh6F43TQrYc15wr3awijTUKglJ1GoOd%2FlNsY5zkIsrF%2FEEf&X-Amz-Signature=754d0320c8a719b0b1eb1f0dad4b7c7401033c4a58f6f56d4bb4fb7f9710ea88&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L5XT4N6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0XCPHZ7Gb%2FjIZfO292RcvSTu21bOFIbjoTIJyt3Vv4QIhALlHQWSq3%2Fe0x%2FgRElO6NjxyPGFOCjr6uVkvbw8pTlNmKv8DCEoQABoMNjM3NDIzMTgzODA1IgwI6SniGkJer6Di8o0q3AN%2FF7yyhVzs8ff3KsqxST7IfobnMhARqklXDxAWCHY7kvJRMwuSJ87HMlEIAIfUYGjKZC6jr3yHG2s%2BHkHooz%2F4Scj0sMxjr5WvWxZgcVAcicsdwJyhdxGQLneP%2F3meNRtQ3ghTZH4XE1XuxPGfe%2FMz3R6ZY2N2WXxjleDPew2tGUbLxn9iodu0PuBUiQ7vbnT7%2BgYVXgl6l6tZ8mscsfBF4Yk9YSS5U%2BlrdNUC2hf94XUw52P%2BVsYhN7VSpHyJM84oSZVEcBzc22e6FnMpLtI7FwT0ZrwQsDvmeHBfPIA7FDaJ5m8wNMCybz%2Br%2BFCRRpPSLyzSRDAJqU%2F3SZfnz9xiei2Zw73xVpmU90um2mxCngOp8sxayqzdNVOwFpLTnZvP%2BALsynWMM93M%2FWvnpEWyJcgH2OnqSYpEHCDlqN79SmYHRU3NMKMZPSUaxV7VCXaXNLWzcYf8dqvMNMPqYIOnfh%2FoRxPD2SO%2FvFL72R1UrOk5LqW%2F2Mc%2FBqh%2BUJq87WkJqkrBKunjx27YSPQNiaR%2Bhiy8Bs7tanHojnEDrMlFd%2BiP4ctkhRllZhtpQJ8E0eeXVgIpc4YiJT9027DwrXkeMEugNfKRc35iwS2ui6KV%2ByeGL68AALdtdjRfQzDJqLTABjqkAUKIzdtDD8T2V4O98an3kajAN51INzqQkFDFj3cHPy1IphvtgPyyN19pImO4n6d67VCkmI38%2FF7FG5bL%2B9eLpxUKSOYokEI5cx7KOc%2BwpMSYR5z0D4ODgCs%2F%2B4MrER88SOJKPa7CDTbgU6FaTtJcMDC4hUraDICtU%2Fjvw06sVSvvwCh6F43TQrYc15wr3awijTUKglJ1GoOd%2FlNsY5zkIsrF%2FEEf&X-Amz-Signature=86e2138090eab4831428589ade0a1fbcbd0fa38897ea1079e2571b28f34518d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L5XT4N6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0XCPHZ7Gb%2FjIZfO292RcvSTu21bOFIbjoTIJyt3Vv4QIhALlHQWSq3%2Fe0x%2FgRElO6NjxyPGFOCjr6uVkvbw8pTlNmKv8DCEoQABoMNjM3NDIzMTgzODA1IgwI6SniGkJer6Di8o0q3AN%2FF7yyhVzs8ff3KsqxST7IfobnMhARqklXDxAWCHY7kvJRMwuSJ87HMlEIAIfUYGjKZC6jr3yHG2s%2BHkHooz%2F4Scj0sMxjr5WvWxZgcVAcicsdwJyhdxGQLneP%2F3meNRtQ3ghTZH4XE1XuxPGfe%2FMz3R6ZY2N2WXxjleDPew2tGUbLxn9iodu0PuBUiQ7vbnT7%2BgYVXgl6l6tZ8mscsfBF4Yk9YSS5U%2BlrdNUC2hf94XUw52P%2BVsYhN7VSpHyJM84oSZVEcBzc22e6FnMpLtI7FwT0ZrwQsDvmeHBfPIA7FDaJ5m8wNMCybz%2Br%2BFCRRpPSLyzSRDAJqU%2F3SZfnz9xiei2Zw73xVpmU90um2mxCngOp8sxayqzdNVOwFpLTnZvP%2BALsynWMM93M%2FWvnpEWyJcgH2OnqSYpEHCDlqN79SmYHRU3NMKMZPSUaxV7VCXaXNLWzcYf8dqvMNMPqYIOnfh%2FoRxPD2SO%2FvFL72R1UrOk5LqW%2F2Mc%2FBqh%2BUJq87WkJqkrBKunjx27YSPQNiaR%2Bhiy8Bs7tanHojnEDrMlFd%2BiP4ctkhRllZhtpQJ8E0eeXVgIpc4YiJT9027DwrXkeMEugNfKRc35iwS2ui6KV%2ByeGL68AALdtdjRfQzDJqLTABjqkAUKIzdtDD8T2V4O98an3kajAN51INzqQkFDFj3cHPy1IphvtgPyyN19pImO4n6d67VCkmI38%2FF7FG5bL%2B9eLpxUKSOYokEI5cx7KOc%2BwpMSYR5z0D4ODgCs%2F%2B4MrER88SOJKPa7CDTbgU6FaTtJcMDC4hUraDICtU%2Fjvw06sVSvvwCh6F43TQrYc15wr3awijTUKglJ1GoOd%2FlNsY5zkIsrF%2FEEf&X-Amz-Signature=a982344d98720d407264138694c6ef4c696c58d73b0aba4e4d2880138cd46f8e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
