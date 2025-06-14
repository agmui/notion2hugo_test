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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDSULT6K%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIEaK0rU7k6WUiGLpuKz%2B3vXJ98OWWf9rPW3LdQACkDpYAiEA%2Fa3fkKwYUS7tbcCYF2C7Y%2BUlfV7ZHB3LkArKEwiTZHEq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDKO%2F8PQCz6KMBDsVzircA2AFC5By0uUTnzEJEYHF6gsk47moaHmje3jqcIidJzo9aWrwCFbWXX1DUZMkJ3CP9yg5t8Ps%2BSsTph4hqysodgJG0qi5TAXgtHOcT6NYtLead%2FUj%2FkaG6gBDwe6pXvk%2FsEtoQgy%2FiSRkQQy0iOXxh0N%2FDEdhdXykhh4VTWlChCNY6Hrw%2BRTlJ6TlDMnvIlPSLfh%2FSEbC7yucKcS0GfRQj6srUvGWYT293IeP4KURt6XJnX2QtcfRsHqQpTvaEB380X3ht03g1cZTGorYdZBdjmqsl7craLi%2BqPGMkFLE1qEaiOvIKDbVYVsek9sl9i4uNZXBIFTj2PN1p6HibVcUT4y11tcyH%2BnD23zex5k9cvCAaQE9GyXxVQukWA0xjhkl%2FAgTVi12Pr6xFSqDfCDrj2Y2Mzf52gB3RsDVOawP20nZwhv7CGBNEG4ocBG63pLblj8dMPzI3vk7TpqSJogUaJ6bww%2BE7RFgt%2B4PTCz5CaHNFcwPvfmtypwVsZGhetJgA8OLIpbFl57nw48VEwhHUbCUlXXLntmYBeG74vZ3w%2B7GwS1JQNuhIDt2qgJs49iiXhtIlK5C8wzSCMo2GWEG1D7XZrAcSZbkdK6Xw4OdgV6u%2FDS0U9z%2FKzseC8uaMIOlt8IGOqUBdKOmnu76%2F4NGMEsiR2ppgRLVdZP7HRbVRqGMJxWNBclJ33dJQqDKNRJXgeB2l3GcELWwFyMTrvu0HDos1z1pEIHx%2B1B3BOsci5pvZfsEqFNryh6QXr5L%2BVBwxkPvlbnLuL1e9sP2Gfg%2F7WGhxtvSoSkBUrhLG6My%2FEKHc6AN04XQTvcJmhdvnYLg%2F8kVYyQVOXjDoCkrNsmYtGGMEdz38OCZTa%2B1&X-Amz-Signature=4d061733ae58fa28ccc5b440addf8e4dfbe1c9caff80f71278f0f84b0e40355a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDSULT6K%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIEaK0rU7k6WUiGLpuKz%2B3vXJ98OWWf9rPW3LdQACkDpYAiEA%2Fa3fkKwYUS7tbcCYF2C7Y%2BUlfV7ZHB3LkArKEwiTZHEq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDKO%2F8PQCz6KMBDsVzircA2AFC5By0uUTnzEJEYHF6gsk47moaHmje3jqcIidJzo9aWrwCFbWXX1DUZMkJ3CP9yg5t8Ps%2BSsTph4hqysodgJG0qi5TAXgtHOcT6NYtLead%2FUj%2FkaG6gBDwe6pXvk%2FsEtoQgy%2FiSRkQQy0iOXxh0N%2FDEdhdXykhh4VTWlChCNY6Hrw%2BRTlJ6TlDMnvIlPSLfh%2FSEbC7yucKcS0GfRQj6srUvGWYT293IeP4KURt6XJnX2QtcfRsHqQpTvaEB380X3ht03g1cZTGorYdZBdjmqsl7craLi%2BqPGMkFLE1qEaiOvIKDbVYVsek9sl9i4uNZXBIFTj2PN1p6HibVcUT4y11tcyH%2BnD23zex5k9cvCAaQE9GyXxVQukWA0xjhkl%2FAgTVi12Pr6xFSqDfCDrj2Y2Mzf52gB3RsDVOawP20nZwhv7CGBNEG4ocBG63pLblj8dMPzI3vk7TpqSJogUaJ6bww%2BE7RFgt%2B4PTCz5CaHNFcwPvfmtypwVsZGhetJgA8OLIpbFl57nw48VEwhHUbCUlXXLntmYBeG74vZ3w%2B7GwS1JQNuhIDt2qgJs49iiXhtIlK5C8wzSCMo2GWEG1D7XZrAcSZbkdK6Xw4OdgV6u%2FDS0U9z%2FKzseC8uaMIOlt8IGOqUBdKOmnu76%2F4NGMEsiR2ppgRLVdZP7HRbVRqGMJxWNBclJ33dJQqDKNRJXgeB2l3GcELWwFyMTrvu0HDos1z1pEIHx%2B1B3BOsci5pvZfsEqFNryh6QXr5L%2BVBwxkPvlbnLuL1e9sP2Gfg%2F7WGhxtvSoSkBUrhLG6My%2FEKHc6AN04XQTvcJmhdvnYLg%2F8kVYyQVOXjDoCkrNsmYtGGMEdz38OCZTa%2B1&X-Amz-Signature=a12407d494126083ad356d3a14b1c72651df5dda5ec5fd4d276316c3675355fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDSULT6K%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIEaK0rU7k6WUiGLpuKz%2B3vXJ98OWWf9rPW3LdQACkDpYAiEA%2Fa3fkKwYUS7tbcCYF2C7Y%2BUlfV7ZHB3LkArKEwiTZHEq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDKO%2F8PQCz6KMBDsVzircA2AFC5By0uUTnzEJEYHF6gsk47moaHmje3jqcIidJzo9aWrwCFbWXX1DUZMkJ3CP9yg5t8Ps%2BSsTph4hqysodgJG0qi5TAXgtHOcT6NYtLead%2FUj%2FkaG6gBDwe6pXvk%2FsEtoQgy%2FiSRkQQy0iOXxh0N%2FDEdhdXykhh4VTWlChCNY6Hrw%2BRTlJ6TlDMnvIlPSLfh%2FSEbC7yucKcS0GfRQj6srUvGWYT293IeP4KURt6XJnX2QtcfRsHqQpTvaEB380X3ht03g1cZTGorYdZBdjmqsl7craLi%2BqPGMkFLE1qEaiOvIKDbVYVsek9sl9i4uNZXBIFTj2PN1p6HibVcUT4y11tcyH%2BnD23zex5k9cvCAaQE9GyXxVQukWA0xjhkl%2FAgTVi12Pr6xFSqDfCDrj2Y2Mzf52gB3RsDVOawP20nZwhv7CGBNEG4ocBG63pLblj8dMPzI3vk7TpqSJogUaJ6bww%2BE7RFgt%2B4PTCz5CaHNFcwPvfmtypwVsZGhetJgA8OLIpbFl57nw48VEwhHUbCUlXXLntmYBeG74vZ3w%2B7GwS1JQNuhIDt2qgJs49iiXhtIlK5C8wzSCMo2GWEG1D7XZrAcSZbkdK6Xw4OdgV6u%2FDS0U9z%2FKzseC8uaMIOlt8IGOqUBdKOmnu76%2F4NGMEsiR2ppgRLVdZP7HRbVRqGMJxWNBclJ33dJQqDKNRJXgeB2l3GcELWwFyMTrvu0HDos1z1pEIHx%2B1B3BOsci5pvZfsEqFNryh6QXr5L%2BVBwxkPvlbnLuL1e9sP2Gfg%2F7WGhxtvSoSkBUrhLG6My%2FEKHc6AN04XQTvcJmhdvnYLg%2F8kVYyQVOXjDoCkrNsmYtGGMEdz38OCZTa%2B1&X-Amz-Signature=c76b2b728cb29f6f5c5e2bfa4823f98b206d821491d47f6374221da213bf1d36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDSULT6K%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIEaK0rU7k6WUiGLpuKz%2B3vXJ98OWWf9rPW3LdQACkDpYAiEA%2Fa3fkKwYUS7tbcCYF2C7Y%2BUlfV7ZHB3LkArKEwiTZHEq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDKO%2F8PQCz6KMBDsVzircA2AFC5By0uUTnzEJEYHF6gsk47moaHmje3jqcIidJzo9aWrwCFbWXX1DUZMkJ3CP9yg5t8Ps%2BSsTph4hqysodgJG0qi5TAXgtHOcT6NYtLead%2FUj%2FkaG6gBDwe6pXvk%2FsEtoQgy%2FiSRkQQy0iOXxh0N%2FDEdhdXykhh4VTWlChCNY6Hrw%2BRTlJ6TlDMnvIlPSLfh%2FSEbC7yucKcS0GfRQj6srUvGWYT293IeP4KURt6XJnX2QtcfRsHqQpTvaEB380X3ht03g1cZTGorYdZBdjmqsl7craLi%2BqPGMkFLE1qEaiOvIKDbVYVsek9sl9i4uNZXBIFTj2PN1p6HibVcUT4y11tcyH%2BnD23zex5k9cvCAaQE9GyXxVQukWA0xjhkl%2FAgTVi12Pr6xFSqDfCDrj2Y2Mzf52gB3RsDVOawP20nZwhv7CGBNEG4ocBG63pLblj8dMPzI3vk7TpqSJogUaJ6bww%2BE7RFgt%2B4PTCz5CaHNFcwPvfmtypwVsZGhetJgA8OLIpbFl57nw48VEwhHUbCUlXXLntmYBeG74vZ3w%2B7GwS1JQNuhIDt2qgJs49iiXhtIlK5C8wzSCMo2GWEG1D7XZrAcSZbkdK6Xw4OdgV6u%2FDS0U9z%2FKzseC8uaMIOlt8IGOqUBdKOmnu76%2F4NGMEsiR2ppgRLVdZP7HRbVRqGMJxWNBclJ33dJQqDKNRJXgeB2l3GcELWwFyMTrvu0HDos1z1pEIHx%2B1B3BOsci5pvZfsEqFNryh6QXr5L%2BVBwxkPvlbnLuL1e9sP2Gfg%2F7WGhxtvSoSkBUrhLG6My%2FEKHc6AN04XQTvcJmhdvnYLg%2F8kVYyQVOXjDoCkrNsmYtGGMEdz38OCZTa%2B1&X-Amz-Signature=488d22dc3b898258dcb17356a682d0770a58ade02cfa24743e5960a437d01a13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDSULT6K%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIEaK0rU7k6WUiGLpuKz%2B3vXJ98OWWf9rPW3LdQACkDpYAiEA%2Fa3fkKwYUS7tbcCYF2C7Y%2BUlfV7ZHB3LkArKEwiTZHEq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDKO%2F8PQCz6KMBDsVzircA2AFC5By0uUTnzEJEYHF6gsk47moaHmje3jqcIidJzo9aWrwCFbWXX1DUZMkJ3CP9yg5t8Ps%2BSsTph4hqysodgJG0qi5TAXgtHOcT6NYtLead%2FUj%2FkaG6gBDwe6pXvk%2FsEtoQgy%2FiSRkQQy0iOXxh0N%2FDEdhdXykhh4VTWlChCNY6Hrw%2BRTlJ6TlDMnvIlPSLfh%2FSEbC7yucKcS0GfRQj6srUvGWYT293IeP4KURt6XJnX2QtcfRsHqQpTvaEB380X3ht03g1cZTGorYdZBdjmqsl7craLi%2BqPGMkFLE1qEaiOvIKDbVYVsek9sl9i4uNZXBIFTj2PN1p6HibVcUT4y11tcyH%2BnD23zex5k9cvCAaQE9GyXxVQukWA0xjhkl%2FAgTVi12Pr6xFSqDfCDrj2Y2Mzf52gB3RsDVOawP20nZwhv7CGBNEG4ocBG63pLblj8dMPzI3vk7TpqSJogUaJ6bww%2BE7RFgt%2B4PTCz5CaHNFcwPvfmtypwVsZGhetJgA8OLIpbFl57nw48VEwhHUbCUlXXLntmYBeG74vZ3w%2B7GwS1JQNuhIDt2qgJs49iiXhtIlK5C8wzSCMo2GWEG1D7XZrAcSZbkdK6Xw4OdgV6u%2FDS0U9z%2FKzseC8uaMIOlt8IGOqUBdKOmnu76%2F4NGMEsiR2ppgRLVdZP7HRbVRqGMJxWNBclJ33dJQqDKNRJXgeB2l3GcELWwFyMTrvu0HDos1z1pEIHx%2B1B3BOsci5pvZfsEqFNryh6QXr5L%2BVBwxkPvlbnLuL1e9sP2Gfg%2F7WGhxtvSoSkBUrhLG6My%2FEKHc6AN04XQTvcJmhdvnYLg%2F8kVYyQVOXjDoCkrNsmYtGGMEdz38OCZTa%2B1&X-Amz-Signature=c1f091904b0914d67892d1e1f23b71478a507201155f7a699f05fb3b09635ad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
