---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QRIK6P7%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFh9hs4Gg%2Fctmz1WaIOzZzmDonX139uYyfTh4nke4QjOAiEA%2FQcccBigiyaDduCQpRlRz7dBaQtZbQ4AcoxfEDNjNqQq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHxkt6fG1JTIyhli2CrcA%2BWZD1fLNNJR%2FogpFnE0jIb%2B3kmNThnxAMA6wlPs6KiJ3d%2B55nIiaGZmSqrur0U2599KuTLASfGuwV0z1y%2BYYY%2FSVVmuG4vPauXGsI%2FaisF%2BEWBgckKIDBMls%2BLcUYtr%2Bfv0a1xIzaI8UeOTgb5HlyDUJL7fX0%2FKqK5KjsLdB0tts8gLhhuJIci%2B4qOMW%2Bx%2FEpDqo1LA6rlX8zE%2BDZ5MDWV%2BjyMfBVDvosR2hThh%2BrHqUBlURDdknVqI0VPljkFy8%2F5eiWNr7kWBLkzX%2BxeOsJ%2BrDKh4DA4uEe%2F0a6qL5BloTj6aZ3z5EBla3vjCkRwZ1A0L2GO4NCeneNhqXfr364u%2BMbgEEEZJ%2FXlIB%2FR6rarjB0ya2ygTU4rxXP68CckC077Y3Li%2BwymyA2ScF5pUWAfss1fqKn755BE4QgTUrAymaaL5lsCRYN89p6OGm03bfAY6mqr8LLP7vDsaBQsDDNKBfkFvvEi0iZHJYiW8XXL5PMeb1gQ%2FDOXERyj9n7x4XbKwAwHDu8BPSLMyPbmOgQZDLp6j4WFn5Y%2BMEeqzg9PzP77OO%2FovFlqth3Iten4UZO0L%2FpjCMt5ucv8pHr6tt9FXMN99uAX2hxeNRI6q41GCwKV4ZuBPkT18mqXMMLuJ2cUGOqUBGFgnHmpLf8NHLBJMz8f9cTT6s4DSpW%2FgrhOsOkY9p5loYtqa63cImqDLiHqYQRMnTF6EE3v%2BWyTS9TxYcY5NdiZZ%2B9rCTStHiP%2B6TdmIeaq3pXzAjQe0ZE3ElLz74bKT3wIn2LLm5DwVGih5vNbVN%2BLs2AIA4FTFgXpuL3fEnE3dQ9kn6DziIPpVF4dHcJ5w4ytcwzeglmdq9upv9c8z7skdvtIC&X-Amz-Signature=94b3145bb906a9ba8ad0d9b0809211d06bed79596875a1719a43d418741ee4f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QRIK6P7%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFh9hs4Gg%2Fctmz1WaIOzZzmDonX139uYyfTh4nke4QjOAiEA%2FQcccBigiyaDduCQpRlRz7dBaQtZbQ4AcoxfEDNjNqQq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHxkt6fG1JTIyhli2CrcA%2BWZD1fLNNJR%2FogpFnE0jIb%2B3kmNThnxAMA6wlPs6KiJ3d%2B55nIiaGZmSqrur0U2599KuTLASfGuwV0z1y%2BYYY%2FSVVmuG4vPauXGsI%2FaisF%2BEWBgckKIDBMls%2BLcUYtr%2Bfv0a1xIzaI8UeOTgb5HlyDUJL7fX0%2FKqK5KjsLdB0tts8gLhhuJIci%2B4qOMW%2Bx%2FEpDqo1LA6rlX8zE%2BDZ5MDWV%2BjyMfBVDvosR2hThh%2BrHqUBlURDdknVqI0VPljkFy8%2F5eiWNr7kWBLkzX%2BxeOsJ%2BrDKh4DA4uEe%2F0a6qL5BloTj6aZ3z5EBla3vjCkRwZ1A0L2GO4NCeneNhqXfr364u%2BMbgEEEZJ%2FXlIB%2FR6rarjB0ya2ygTU4rxXP68CckC077Y3Li%2BwymyA2ScF5pUWAfss1fqKn755BE4QgTUrAymaaL5lsCRYN89p6OGm03bfAY6mqr8LLP7vDsaBQsDDNKBfkFvvEi0iZHJYiW8XXL5PMeb1gQ%2FDOXERyj9n7x4XbKwAwHDu8BPSLMyPbmOgQZDLp6j4WFn5Y%2BMEeqzg9PzP77OO%2FovFlqth3Iten4UZO0L%2FpjCMt5ucv8pHr6tt9FXMN99uAX2hxeNRI6q41GCwKV4ZuBPkT18mqXMMLuJ2cUGOqUBGFgnHmpLf8NHLBJMz8f9cTT6s4DSpW%2FgrhOsOkY9p5loYtqa63cImqDLiHqYQRMnTF6EE3v%2BWyTS9TxYcY5NdiZZ%2B9rCTStHiP%2B6TdmIeaq3pXzAjQe0ZE3ElLz74bKT3wIn2LLm5DwVGih5vNbVN%2BLs2AIA4FTFgXpuL3fEnE3dQ9kn6DziIPpVF4dHcJ5w4ytcwzeglmdq9upv9c8z7skdvtIC&X-Amz-Signature=1f1ebc716fd6b837be3f7a1b62ba4c0bdaefe2705b92c65f42de7a05e0d7ad00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QRIK6P7%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFh9hs4Gg%2Fctmz1WaIOzZzmDonX139uYyfTh4nke4QjOAiEA%2FQcccBigiyaDduCQpRlRz7dBaQtZbQ4AcoxfEDNjNqQq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHxkt6fG1JTIyhli2CrcA%2BWZD1fLNNJR%2FogpFnE0jIb%2B3kmNThnxAMA6wlPs6KiJ3d%2B55nIiaGZmSqrur0U2599KuTLASfGuwV0z1y%2BYYY%2FSVVmuG4vPauXGsI%2FaisF%2BEWBgckKIDBMls%2BLcUYtr%2Bfv0a1xIzaI8UeOTgb5HlyDUJL7fX0%2FKqK5KjsLdB0tts8gLhhuJIci%2B4qOMW%2Bx%2FEpDqo1LA6rlX8zE%2BDZ5MDWV%2BjyMfBVDvosR2hThh%2BrHqUBlURDdknVqI0VPljkFy8%2F5eiWNr7kWBLkzX%2BxeOsJ%2BrDKh4DA4uEe%2F0a6qL5BloTj6aZ3z5EBla3vjCkRwZ1A0L2GO4NCeneNhqXfr364u%2BMbgEEEZJ%2FXlIB%2FR6rarjB0ya2ygTU4rxXP68CckC077Y3Li%2BwymyA2ScF5pUWAfss1fqKn755BE4QgTUrAymaaL5lsCRYN89p6OGm03bfAY6mqr8LLP7vDsaBQsDDNKBfkFvvEi0iZHJYiW8XXL5PMeb1gQ%2FDOXERyj9n7x4XbKwAwHDu8BPSLMyPbmOgQZDLp6j4WFn5Y%2BMEeqzg9PzP77OO%2FovFlqth3Iten4UZO0L%2FpjCMt5ucv8pHr6tt9FXMN99uAX2hxeNRI6q41GCwKV4ZuBPkT18mqXMMLuJ2cUGOqUBGFgnHmpLf8NHLBJMz8f9cTT6s4DSpW%2FgrhOsOkY9p5loYtqa63cImqDLiHqYQRMnTF6EE3v%2BWyTS9TxYcY5NdiZZ%2B9rCTStHiP%2B6TdmIeaq3pXzAjQe0ZE3ElLz74bKT3wIn2LLm5DwVGih5vNbVN%2BLs2AIA4FTFgXpuL3fEnE3dQ9kn6DziIPpVF4dHcJ5w4ytcwzeglmdq9upv9c8z7skdvtIC&X-Amz-Signature=4c4aac5dd5effbd1af26e1571d320c8a000570e9d84d93b9069ebb207e357a7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QRIK6P7%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFh9hs4Gg%2Fctmz1WaIOzZzmDonX139uYyfTh4nke4QjOAiEA%2FQcccBigiyaDduCQpRlRz7dBaQtZbQ4AcoxfEDNjNqQq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHxkt6fG1JTIyhli2CrcA%2BWZD1fLNNJR%2FogpFnE0jIb%2B3kmNThnxAMA6wlPs6KiJ3d%2B55nIiaGZmSqrur0U2599KuTLASfGuwV0z1y%2BYYY%2FSVVmuG4vPauXGsI%2FaisF%2BEWBgckKIDBMls%2BLcUYtr%2Bfv0a1xIzaI8UeOTgb5HlyDUJL7fX0%2FKqK5KjsLdB0tts8gLhhuJIci%2B4qOMW%2Bx%2FEpDqo1LA6rlX8zE%2BDZ5MDWV%2BjyMfBVDvosR2hThh%2BrHqUBlURDdknVqI0VPljkFy8%2F5eiWNr7kWBLkzX%2BxeOsJ%2BrDKh4DA4uEe%2F0a6qL5BloTj6aZ3z5EBla3vjCkRwZ1A0L2GO4NCeneNhqXfr364u%2BMbgEEEZJ%2FXlIB%2FR6rarjB0ya2ygTU4rxXP68CckC077Y3Li%2BwymyA2ScF5pUWAfss1fqKn755BE4QgTUrAymaaL5lsCRYN89p6OGm03bfAY6mqr8LLP7vDsaBQsDDNKBfkFvvEi0iZHJYiW8XXL5PMeb1gQ%2FDOXERyj9n7x4XbKwAwHDu8BPSLMyPbmOgQZDLp6j4WFn5Y%2BMEeqzg9PzP77OO%2FovFlqth3Iten4UZO0L%2FpjCMt5ucv8pHr6tt9FXMN99uAX2hxeNRI6q41GCwKV4ZuBPkT18mqXMMLuJ2cUGOqUBGFgnHmpLf8NHLBJMz8f9cTT6s4DSpW%2FgrhOsOkY9p5loYtqa63cImqDLiHqYQRMnTF6EE3v%2BWyTS9TxYcY5NdiZZ%2B9rCTStHiP%2B6TdmIeaq3pXzAjQe0ZE3ElLz74bKT3wIn2LLm5DwVGih5vNbVN%2BLs2AIA4FTFgXpuL3fEnE3dQ9kn6DziIPpVF4dHcJ5w4ytcwzeglmdq9upv9c8z7skdvtIC&X-Amz-Signature=630ffde8e763bb1c576a8d73cfbf1e4aba4d9378975f1d614b04fd1897032aa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QRIK6P7%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFh9hs4Gg%2Fctmz1WaIOzZzmDonX139uYyfTh4nke4QjOAiEA%2FQcccBigiyaDduCQpRlRz7dBaQtZbQ4AcoxfEDNjNqQq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHxkt6fG1JTIyhli2CrcA%2BWZD1fLNNJR%2FogpFnE0jIb%2B3kmNThnxAMA6wlPs6KiJ3d%2B55nIiaGZmSqrur0U2599KuTLASfGuwV0z1y%2BYYY%2FSVVmuG4vPauXGsI%2FaisF%2BEWBgckKIDBMls%2BLcUYtr%2Bfv0a1xIzaI8UeOTgb5HlyDUJL7fX0%2FKqK5KjsLdB0tts8gLhhuJIci%2B4qOMW%2Bx%2FEpDqo1LA6rlX8zE%2BDZ5MDWV%2BjyMfBVDvosR2hThh%2BrHqUBlURDdknVqI0VPljkFy8%2F5eiWNr7kWBLkzX%2BxeOsJ%2BrDKh4DA4uEe%2F0a6qL5BloTj6aZ3z5EBla3vjCkRwZ1A0L2GO4NCeneNhqXfr364u%2BMbgEEEZJ%2FXlIB%2FR6rarjB0ya2ygTU4rxXP68CckC077Y3Li%2BwymyA2ScF5pUWAfss1fqKn755BE4QgTUrAymaaL5lsCRYN89p6OGm03bfAY6mqr8LLP7vDsaBQsDDNKBfkFvvEi0iZHJYiW8XXL5PMeb1gQ%2FDOXERyj9n7x4XbKwAwHDu8BPSLMyPbmOgQZDLp6j4WFn5Y%2BMEeqzg9PzP77OO%2FovFlqth3Iten4UZO0L%2FpjCMt5ucv8pHr6tt9FXMN99uAX2hxeNRI6q41GCwKV4ZuBPkT18mqXMMLuJ2cUGOqUBGFgnHmpLf8NHLBJMz8f9cTT6s4DSpW%2FgrhOsOkY9p5loYtqa63cImqDLiHqYQRMnTF6EE3v%2BWyTS9TxYcY5NdiZZ%2B9rCTStHiP%2B6TdmIeaq3pXzAjQe0ZE3ElLz74bKT3wIn2LLm5DwVGih5vNbVN%2BLs2AIA4FTFgXpuL3fEnE3dQ9kn6DziIPpVF4dHcJ5w4ytcwzeglmdq9upv9c8z7skdvtIC&X-Amz-Signature=cc59c35da8f5ede6703afd09e58aae45382067dc41a4c0887c05202bd5247e44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
