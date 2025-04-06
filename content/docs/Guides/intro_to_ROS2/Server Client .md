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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ARVWEDJ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHas7j%2FD%2BWr3ON3WrsMtn6rHiDtti4h8EauY2xPxHLJgAiEAm1xP%2FCFRV5J2SJgm6ypu6yiBL%2FPvDAr6usr%2FBK70EU0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDAMGfX3V3FmXBKEx0CrcA2SVy5Ta4brpcGpk%2BueQUhU1q4NtaJLjAM9UeBHsLXJdkIbLNsTxHx1aB0RTEryHVQJsiz3uFS4yEAWog0ttNg3Ek9iwmv3ezwhKBq7kqINhxsNUiBk3zTDfaK4EWqlfXm%2Fb0wHux4tOH1iInj39yFA2I8aMsBU8B9SwWM7%2BbnvtPmcmWXmVxrgvgoLub6nM5vkZzrM6Av0KDWVK4QbEzGQhUw018xPllRgjk%2BM%2FfIZMRGk6I3aWuOCWFVSLZOAj%2B%2BL%2FIlS1IGd2Zi4M1ahdYwD%2FxU78%2BeWW3Bb9wQzzIbK2vz%2FsytN7Ap%2BQ1HFJ7Ejzcu5om650LsOXnea5CyEW%2BOnaAmiTPO0jbCS8LosVshmaKfmURtwRNRiQhwLnACpuJqIwa0qB4DDRUJK%2BnQo3mvmmpDwCHn%2BVUTnpMAlNMtvJzy9XDxQAuKWHT5IgAnc%2FiQz5PzF%2BB%2B7ymorfBllI7Vc3rMrHFSiplSeBsJVankmoTMD6RGC2OK8Ngz9Xu4dbD58nCMZEnjlo4ZQ5FyeGkxzkfIbTMtf5lC%2BftegoaBG2b4Y0%2BC%2BsZ3GG4b%2Bc91VwlqG3zFBcx3rhgMKSG0RRSD6mMm9DKtmRhW0DoDSTUAK%2FI0W9SN3sJ4HI%2FTgpMJqAyL8GOqUB6KxVh4o6COF%2BJfMun%2BrwGXhYsMfrJ%2FrYtvO9Gi2UvSyIF5XiCNHajRVSUJDkLmklFG%2BVmA8CN7f3E1zApNa1WHvlVbH5TANG2b6lXYBOkDY5dcmWESGUgkQLojTtJrHF%2Bdx84BAusGIi1e3Q2TUuQmvKZLZYC%2BCUqO4p4j%2BzCD2RiSatvyMtfUidAqKBTmORkx%2FTG5CFSLXcVs9UdxOEuG9%2BFw%2BI&X-Amz-Signature=81b4d2d264c6a198d077220a27170e23dffd27afcd6f108d465f6e7e2de0543d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ARVWEDJ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHas7j%2FD%2BWr3ON3WrsMtn6rHiDtti4h8EauY2xPxHLJgAiEAm1xP%2FCFRV5J2SJgm6ypu6yiBL%2FPvDAr6usr%2FBK70EU0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDAMGfX3V3FmXBKEx0CrcA2SVy5Ta4brpcGpk%2BueQUhU1q4NtaJLjAM9UeBHsLXJdkIbLNsTxHx1aB0RTEryHVQJsiz3uFS4yEAWog0ttNg3Ek9iwmv3ezwhKBq7kqINhxsNUiBk3zTDfaK4EWqlfXm%2Fb0wHux4tOH1iInj39yFA2I8aMsBU8B9SwWM7%2BbnvtPmcmWXmVxrgvgoLub6nM5vkZzrM6Av0KDWVK4QbEzGQhUw018xPllRgjk%2BM%2FfIZMRGk6I3aWuOCWFVSLZOAj%2B%2BL%2FIlS1IGd2Zi4M1ahdYwD%2FxU78%2BeWW3Bb9wQzzIbK2vz%2FsytN7Ap%2BQ1HFJ7Ejzcu5om650LsOXnea5CyEW%2BOnaAmiTPO0jbCS8LosVshmaKfmURtwRNRiQhwLnACpuJqIwa0qB4DDRUJK%2BnQo3mvmmpDwCHn%2BVUTnpMAlNMtvJzy9XDxQAuKWHT5IgAnc%2FiQz5PzF%2BB%2B7ymorfBllI7Vc3rMrHFSiplSeBsJVankmoTMD6RGC2OK8Ngz9Xu4dbD58nCMZEnjlo4ZQ5FyeGkxzkfIbTMtf5lC%2BftegoaBG2b4Y0%2BC%2BsZ3GG4b%2Bc91VwlqG3zFBcx3rhgMKSG0RRSD6mMm9DKtmRhW0DoDSTUAK%2FI0W9SN3sJ4HI%2FTgpMJqAyL8GOqUB6KxVh4o6COF%2BJfMun%2BrwGXhYsMfrJ%2FrYtvO9Gi2UvSyIF5XiCNHajRVSUJDkLmklFG%2BVmA8CN7f3E1zApNa1WHvlVbH5TANG2b6lXYBOkDY5dcmWESGUgkQLojTtJrHF%2Bdx84BAusGIi1e3Q2TUuQmvKZLZYC%2BCUqO4p4j%2BzCD2RiSatvyMtfUidAqKBTmORkx%2FTG5CFSLXcVs9UdxOEuG9%2BFw%2BI&X-Amz-Signature=39bced8a1408907718eac30e79065f4e717775b9a754c0642f7f633663df65bc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ARVWEDJ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHas7j%2FD%2BWr3ON3WrsMtn6rHiDtti4h8EauY2xPxHLJgAiEAm1xP%2FCFRV5J2SJgm6ypu6yiBL%2FPvDAr6usr%2FBK70EU0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDAMGfX3V3FmXBKEx0CrcA2SVy5Ta4brpcGpk%2BueQUhU1q4NtaJLjAM9UeBHsLXJdkIbLNsTxHx1aB0RTEryHVQJsiz3uFS4yEAWog0ttNg3Ek9iwmv3ezwhKBq7kqINhxsNUiBk3zTDfaK4EWqlfXm%2Fb0wHux4tOH1iInj39yFA2I8aMsBU8B9SwWM7%2BbnvtPmcmWXmVxrgvgoLub6nM5vkZzrM6Av0KDWVK4QbEzGQhUw018xPllRgjk%2BM%2FfIZMRGk6I3aWuOCWFVSLZOAj%2B%2BL%2FIlS1IGd2Zi4M1ahdYwD%2FxU78%2BeWW3Bb9wQzzIbK2vz%2FsytN7Ap%2BQ1HFJ7Ejzcu5om650LsOXnea5CyEW%2BOnaAmiTPO0jbCS8LosVshmaKfmURtwRNRiQhwLnACpuJqIwa0qB4DDRUJK%2BnQo3mvmmpDwCHn%2BVUTnpMAlNMtvJzy9XDxQAuKWHT5IgAnc%2FiQz5PzF%2BB%2B7ymorfBllI7Vc3rMrHFSiplSeBsJVankmoTMD6RGC2OK8Ngz9Xu4dbD58nCMZEnjlo4ZQ5FyeGkxzkfIbTMtf5lC%2BftegoaBG2b4Y0%2BC%2BsZ3GG4b%2Bc91VwlqG3zFBcx3rhgMKSG0RRSD6mMm9DKtmRhW0DoDSTUAK%2FI0W9SN3sJ4HI%2FTgpMJqAyL8GOqUB6KxVh4o6COF%2BJfMun%2BrwGXhYsMfrJ%2FrYtvO9Gi2UvSyIF5XiCNHajRVSUJDkLmklFG%2BVmA8CN7f3E1zApNa1WHvlVbH5TANG2b6lXYBOkDY5dcmWESGUgkQLojTtJrHF%2Bdx84BAusGIi1e3Q2TUuQmvKZLZYC%2BCUqO4p4j%2BzCD2RiSatvyMtfUidAqKBTmORkx%2FTG5CFSLXcVs9UdxOEuG9%2BFw%2BI&X-Amz-Signature=421326e1049da3a1514105331f02b688a1d559b9c4e42e6e2b292dd1cacea2d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ARVWEDJ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHas7j%2FD%2BWr3ON3WrsMtn6rHiDtti4h8EauY2xPxHLJgAiEAm1xP%2FCFRV5J2SJgm6ypu6yiBL%2FPvDAr6usr%2FBK70EU0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDAMGfX3V3FmXBKEx0CrcA2SVy5Ta4brpcGpk%2BueQUhU1q4NtaJLjAM9UeBHsLXJdkIbLNsTxHx1aB0RTEryHVQJsiz3uFS4yEAWog0ttNg3Ek9iwmv3ezwhKBq7kqINhxsNUiBk3zTDfaK4EWqlfXm%2Fb0wHux4tOH1iInj39yFA2I8aMsBU8B9SwWM7%2BbnvtPmcmWXmVxrgvgoLub6nM5vkZzrM6Av0KDWVK4QbEzGQhUw018xPllRgjk%2BM%2FfIZMRGk6I3aWuOCWFVSLZOAj%2B%2BL%2FIlS1IGd2Zi4M1ahdYwD%2FxU78%2BeWW3Bb9wQzzIbK2vz%2FsytN7Ap%2BQ1HFJ7Ejzcu5om650LsOXnea5CyEW%2BOnaAmiTPO0jbCS8LosVshmaKfmURtwRNRiQhwLnACpuJqIwa0qB4DDRUJK%2BnQo3mvmmpDwCHn%2BVUTnpMAlNMtvJzy9XDxQAuKWHT5IgAnc%2FiQz5PzF%2BB%2B7ymorfBllI7Vc3rMrHFSiplSeBsJVankmoTMD6RGC2OK8Ngz9Xu4dbD58nCMZEnjlo4ZQ5FyeGkxzkfIbTMtf5lC%2BftegoaBG2b4Y0%2BC%2BsZ3GG4b%2Bc91VwlqG3zFBcx3rhgMKSG0RRSD6mMm9DKtmRhW0DoDSTUAK%2FI0W9SN3sJ4HI%2FTgpMJqAyL8GOqUB6KxVh4o6COF%2BJfMun%2BrwGXhYsMfrJ%2FrYtvO9Gi2UvSyIF5XiCNHajRVSUJDkLmklFG%2BVmA8CN7f3E1zApNa1WHvlVbH5TANG2b6lXYBOkDY5dcmWESGUgkQLojTtJrHF%2Bdx84BAusGIi1e3Q2TUuQmvKZLZYC%2BCUqO4p4j%2BzCD2RiSatvyMtfUidAqKBTmORkx%2FTG5CFSLXcVs9UdxOEuG9%2BFw%2BI&X-Amz-Signature=3d15307b1e7b5eced6dbc42057e181ff38c754a0e4ee8fcfaacddd542d0d0b50&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ARVWEDJ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHas7j%2FD%2BWr3ON3WrsMtn6rHiDtti4h8EauY2xPxHLJgAiEAm1xP%2FCFRV5J2SJgm6ypu6yiBL%2FPvDAr6usr%2FBK70EU0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDAMGfX3V3FmXBKEx0CrcA2SVy5Ta4brpcGpk%2BueQUhU1q4NtaJLjAM9UeBHsLXJdkIbLNsTxHx1aB0RTEryHVQJsiz3uFS4yEAWog0ttNg3Ek9iwmv3ezwhKBq7kqINhxsNUiBk3zTDfaK4EWqlfXm%2Fb0wHux4tOH1iInj39yFA2I8aMsBU8B9SwWM7%2BbnvtPmcmWXmVxrgvgoLub6nM5vkZzrM6Av0KDWVK4QbEzGQhUw018xPllRgjk%2BM%2FfIZMRGk6I3aWuOCWFVSLZOAj%2B%2BL%2FIlS1IGd2Zi4M1ahdYwD%2FxU78%2BeWW3Bb9wQzzIbK2vz%2FsytN7Ap%2BQ1HFJ7Ejzcu5om650LsOXnea5CyEW%2BOnaAmiTPO0jbCS8LosVshmaKfmURtwRNRiQhwLnACpuJqIwa0qB4DDRUJK%2BnQo3mvmmpDwCHn%2BVUTnpMAlNMtvJzy9XDxQAuKWHT5IgAnc%2FiQz5PzF%2BB%2B7ymorfBllI7Vc3rMrHFSiplSeBsJVankmoTMD6RGC2OK8Ngz9Xu4dbD58nCMZEnjlo4ZQ5FyeGkxzkfIbTMtf5lC%2BftegoaBG2b4Y0%2BC%2BsZ3GG4b%2Bc91VwlqG3zFBcx3rhgMKSG0RRSD6mMm9DKtmRhW0DoDSTUAK%2FI0W9SN3sJ4HI%2FTgpMJqAyL8GOqUB6KxVh4o6COF%2BJfMun%2BrwGXhYsMfrJ%2FrYtvO9Gi2UvSyIF5XiCNHajRVSUJDkLmklFG%2BVmA8CN7f3E1zApNa1WHvlVbH5TANG2b6lXYBOkDY5dcmWESGUgkQLojTtJrHF%2Bdx84BAusGIi1e3Q2TUuQmvKZLZYC%2BCUqO4p4j%2BzCD2RiSatvyMtfUidAqKBTmORkx%2FTG5CFSLXcVs9UdxOEuG9%2BFw%2BI&X-Amz-Signature=de8031b116deba36d41fef8f355b4ff810ae1c84748d462066803d651bc58cdd&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
