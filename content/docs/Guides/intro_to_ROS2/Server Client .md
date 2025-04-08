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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YWSXPPL%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCP6rtyAhfBorSXy4lhxjnnRvd5cCQ8XLKv2PRV8xv4lAIgXFtDzwqGiCGobhEDLWonpxYe8schFUieJ6rlDg%2BvWpYq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDH%2Fq7agmYFr%2BIMpfrCrcA%2FMJuME95cKjZ0sLiEUuFHF%2BGmsYaO9kCglv%2BeF0TVUt5ZdVj7keRII9CmSCD8Acr5OpnfyfpPk8N4M8K4tHIzTfMzzIZyK4S938j9p6lGO%2FMYD%2BwDWcKmXtgvTWpHjIsDN%2FX3%2Bsr30Nb35iCkC9lW%2BHP0md6p9rcpNfbqUBXFCDU%2BO4yVhOt6d%2Fc72gNoKR4Agh%2FVDFVbpx%2FW6zBGSSqdGO%2F6dW041n1y3HV%2BylNPuyyP0nvNwYQjjNdxzhy4AjB5wZO5mHTUgczLPMKbyYJ9fleKJGDXBUkVi17eYy6fW5y14Vka%2FPFuqoiJj1BELic2QE%2FqthtbV2Zy3uJDEI%2FDDpX%2BSZMYldsqJ64ofwwAuAftxzOZ3bHp%2FRruf3I2edjADclm53SzVLpiPSr%2Ba%2FGJmcXsKh5zdaecqDckX07Shm7FxHzGoOit2bsI6i3%2BIw0iT3GMgXXmKYXufhC9EzDnTykh3L6QoxbULIfGWnoJAxng0tJHePNdNp2Hy%2BwIoaIb3J394gKOZ4PAoPHcuOxqMIbfpDSi91swvFW8OfsVR66UWvPv%2FBKYUL01i7oS5qZ1MMBuTQUqGDMT9H8hsmXBKcv5ADefPEET06YSNDCsUqoLhj3D3pMRRKQdiUMJzw1b8GOqUB66FKV6EYpJielyTGUdx78OvhEZ%2F7nRcpr8XlyJx9C5MPCxdasyIQEk68jvTt16dSP96WUgLJquUD18cKa9y%2FsTiNamJSrW674lfQXwpkspy1DrGos4hKcVIl8CLiAW2YUvWChuKxvRvH3Eo6usw%2FzEl6%2BR9LL6vf7m72dbgqNoRHqleT8FiXku5Pz%2BMu2B7FJlj7zst0Of22XAgSpXCyWvWGyBcf&X-Amz-Signature=e2a4526d22cd3f83a11cbafcdb5f06afdd48a68f9ccec711b13ba0986ee62a08&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YWSXPPL%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCP6rtyAhfBorSXy4lhxjnnRvd5cCQ8XLKv2PRV8xv4lAIgXFtDzwqGiCGobhEDLWonpxYe8schFUieJ6rlDg%2BvWpYq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDH%2Fq7agmYFr%2BIMpfrCrcA%2FMJuME95cKjZ0sLiEUuFHF%2BGmsYaO9kCglv%2BeF0TVUt5ZdVj7keRII9CmSCD8Acr5OpnfyfpPk8N4M8K4tHIzTfMzzIZyK4S938j9p6lGO%2FMYD%2BwDWcKmXtgvTWpHjIsDN%2FX3%2Bsr30Nb35iCkC9lW%2BHP0md6p9rcpNfbqUBXFCDU%2BO4yVhOt6d%2Fc72gNoKR4Agh%2FVDFVbpx%2FW6zBGSSqdGO%2F6dW041n1y3HV%2BylNPuyyP0nvNwYQjjNdxzhy4AjB5wZO5mHTUgczLPMKbyYJ9fleKJGDXBUkVi17eYy6fW5y14Vka%2FPFuqoiJj1BELic2QE%2FqthtbV2Zy3uJDEI%2FDDpX%2BSZMYldsqJ64ofwwAuAftxzOZ3bHp%2FRruf3I2edjADclm53SzVLpiPSr%2Ba%2FGJmcXsKh5zdaecqDckX07Shm7FxHzGoOit2bsI6i3%2BIw0iT3GMgXXmKYXufhC9EzDnTykh3L6QoxbULIfGWnoJAxng0tJHePNdNp2Hy%2BwIoaIb3J394gKOZ4PAoPHcuOxqMIbfpDSi91swvFW8OfsVR66UWvPv%2FBKYUL01i7oS5qZ1MMBuTQUqGDMT9H8hsmXBKcv5ADefPEET06YSNDCsUqoLhj3D3pMRRKQdiUMJzw1b8GOqUB66FKV6EYpJielyTGUdx78OvhEZ%2F7nRcpr8XlyJx9C5MPCxdasyIQEk68jvTt16dSP96WUgLJquUD18cKa9y%2FsTiNamJSrW674lfQXwpkspy1DrGos4hKcVIl8CLiAW2YUvWChuKxvRvH3Eo6usw%2FzEl6%2BR9LL6vf7m72dbgqNoRHqleT8FiXku5Pz%2BMu2B7FJlj7zst0Of22XAgSpXCyWvWGyBcf&X-Amz-Signature=10a3a7f63381dad5a9f5ea06df14c2a448b6a0a5516e89db3bbbd91a64110a57&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YWSXPPL%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCP6rtyAhfBorSXy4lhxjnnRvd5cCQ8XLKv2PRV8xv4lAIgXFtDzwqGiCGobhEDLWonpxYe8schFUieJ6rlDg%2BvWpYq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDH%2Fq7agmYFr%2BIMpfrCrcA%2FMJuME95cKjZ0sLiEUuFHF%2BGmsYaO9kCglv%2BeF0TVUt5ZdVj7keRII9CmSCD8Acr5OpnfyfpPk8N4M8K4tHIzTfMzzIZyK4S938j9p6lGO%2FMYD%2BwDWcKmXtgvTWpHjIsDN%2FX3%2Bsr30Nb35iCkC9lW%2BHP0md6p9rcpNfbqUBXFCDU%2BO4yVhOt6d%2Fc72gNoKR4Agh%2FVDFVbpx%2FW6zBGSSqdGO%2F6dW041n1y3HV%2BylNPuyyP0nvNwYQjjNdxzhy4AjB5wZO5mHTUgczLPMKbyYJ9fleKJGDXBUkVi17eYy6fW5y14Vka%2FPFuqoiJj1BELic2QE%2FqthtbV2Zy3uJDEI%2FDDpX%2BSZMYldsqJ64ofwwAuAftxzOZ3bHp%2FRruf3I2edjADclm53SzVLpiPSr%2Ba%2FGJmcXsKh5zdaecqDckX07Shm7FxHzGoOit2bsI6i3%2BIw0iT3GMgXXmKYXufhC9EzDnTykh3L6QoxbULIfGWnoJAxng0tJHePNdNp2Hy%2BwIoaIb3J394gKOZ4PAoPHcuOxqMIbfpDSi91swvFW8OfsVR66UWvPv%2FBKYUL01i7oS5qZ1MMBuTQUqGDMT9H8hsmXBKcv5ADefPEET06YSNDCsUqoLhj3D3pMRRKQdiUMJzw1b8GOqUB66FKV6EYpJielyTGUdx78OvhEZ%2F7nRcpr8XlyJx9C5MPCxdasyIQEk68jvTt16dSP96WUgLJquUD18cKa9y%2FsTiNamJSrW674lfQXwpkspy1DrGos4hKcVIl8CLiAW2YUvWChuKxvRvH3Eo6usw%2FzEl6%2BR9LL6vf7m72dbgqNoRHqleT8FiXku5Pz%2BMu2B7FJlj7zst0Of22XAgSpXCyWvWGyBcf&X-Amz-Signature=9d892c16e749402ce645f8f22f82cfed020fb09ffb4566fce261e2d6c87e64b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YWSXPPL%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCP6rtyAhfBorSXy4lhxjnnRvd5cCQ8XLKv2PRV8xv4lAIgXFtDzwqGiCGobhEDLWonpxYe8schFUieJ6rlDg%2BvWpYq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDH%2Fq7agmYFr%2BIMpfrCrcA%2FMJuME95cKjZ0sLiEUuFHF%2BGmsYaO9kCglv%2BeF0TVUt5ZdVj7keRII9CmSCD8Acr5OpnfyfpPk8N4M8K4tHIzTfMzzIZyK4S938j9p6lGO%2FMYD%2BwDWcKmXtgvTWpHjIsDN%2FX3%2Bsr30Nb35iCkC9lW%2BHP0md6p9rcpNfbqUBXFCDU%2BO4yVhOt6d%2Fc72gNoKR4Agh%2FVDFVbpx%2FW6zBGSSqdGO%2F6dW041n1y3HV%2BylNPuyyP0nvNwYQjjNdxzhy4AjB5wZO5mHTUgczLPMKbyYJ9fleKJGDXBUkVi17eYy6fW5y14Vka%2FPFuqoiJj1BELic2QE%2FqthtbV2Zy3uJDEI%2FDDpX%2BSZMYldsqJ64ofwwAuAftxzOZ3bHp%2FRruf3I2edjADclm53SzVLpiPSr%2Ba%2FGJmcXsKh5zdaecqDckX07Shm7FxHzGoOit2bsI6i3%2BIw0iT3GMgXXmKYXufhC9EzDnTykh3L6QoxbULIfGWnoJAxng0tJHePNdNp2Hy%2BwIoaIb3J394gKOZ4PAoPHcuOxqMIbfpDSi91swvFW8OfsVR66UWvPv%2FBKYUL01i7oS5qZ1MMBuTQUqGDMT9H8hsmXBKcv5ADefPEET06YSNDCsUqoLhj3D3pMRRKQdiUMJzw1b8GOqUB66FKV6EYpJielyTGUdx78OvhEZ%2F7nRcpr8XlyJx9C5MPCxdasyIQEk68jvTt16dSP96WUgLJquUD18cKa9y%2FsTiNamJSrW674lfQXwpkspy1DrGos4hKcVIl8CLiAW2YUvWChuKxvRvH3Eo6usw%2FzEl6%2BR9LL6vf7m72dbgqNoRHqleT8FiXku5Pz%2BMu2B7FJlj7zst0Of22XAgSpXCyWvWGyBcf&X-Amz-Signature=d685772f29833f5e977c3b492bfcd7387ece8516503af29472caf01f150288ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YWSXPPL%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCP6rtyAhfBorSXy4lhxjnnRvd5cCQ8XLKv2PRV8xv4lAIgXFtDzwqGiCGobhEDLWonpxYe8schFUieJ6rlDg%2BvWpYq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDH%2Fq7agmYFr%2BIMpfrCrcA%2FMJuME95cKjZ0sLiEUuFHF%2BGmsYaO9kCglv%2BeF0TVUt5ZdVj7keRII9CmSCD8Acr5OpnfyfpPk8N4M8K4tHIzTfMzzIZyK4S938j9p6lGO%2FMYD%2BwDWcKmXtgvTWpHjIsDN%2FX3%2Bsr30Nb35iCkC9lW%2BHP0md6p9rcpNfbqUBXFCDU%2BO4yVhOt6d%2Fc72gNoKR4Agh%2FVDFVbpx%2FW6zBGSSqdGO%2F6dW041n1y3HV%2BylNPuyyP0nvNwYQjjNdxzhy4AjB5wZO5mHTUgczLPMKbyYJ9fleKJGDXBUkVi17eYy6fW5y14Vka%2FPFuqoiJj1BELic2QE%2FqthtbV2Zy3uJDEI%2FDDpX%2BSZMYldsqJ64ofwwAuAftxzOZ3bHp%2FRruf3I2edjADclm53SzVLpiPSr%2Ba%2FGJmcXsKh5zdaecqDckX07Shm7FxHzGoOit2bsI6i3%2BIw0iT3GMgXXmKYXufhC9EzDnTykh3L6QoxbULIfGWnoJAxng0tJHePNdNp2Hy%2BwIoaIb3J394gKOZ4PAoPHcuOxqMIbfpDSi91swvFW8OfsVR66UWvPv%2FBKYUL01i7oS5qZ1MMBuTQUqGDMT9H8hsmXBKcv5ADefPEET06YSNDCsUqoLhj3D3pMRRKQdiUMJzw1b8GOqUB66FKV6EYpJielyTGUdx78OvhEZ%2F7nRcpr8XlyJx9C5MPCxdasyIQEk68jvTt16dSP96WUgLJquUD18cKa9y%2FsTiNamJSrW674lfQXwpkspy1DrGos4hKcVIl8CLiAW2YUvWChuKxvRvH3Eo6usw%2FzEl6%2BR9LL6vf7m72dbgqNoRHqleT8FiXku5Pz%2BMu2B7FJlj7zst0Of22XAgSpXCyWvWGyBcf&X-Amz-Signature=3b185e0817599a0ae633a6289d46367db8357d5af07fd0b07a89200b8ced449c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
