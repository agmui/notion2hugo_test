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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ3ITK52%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCz%2FS5TUtO%2FUYH8fPadIl4YWezJcqaV5tw%2Fk2GTIjKJagIgFIgtRYsj669hLTY6y3S9wKAbs5yQS952SkkZO6ta6ccq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOdxekaBnzR%2F5aS85SrcAzOrNqadaqLsno3pEzmEb1cSGxjqUpWXK94%2BEdcrOsQtMMniSzK6hVy0e297v06iTDdRj8LsqFINMnYCrLTe%2Bq7KKxIaBGxbvipkJtm5wzSA3b6K0%2B8HC9cYe2Xq3w8nO%2BOBYgbzZIbaF94Its%2FlM%2BWAr36k2UdtQBAu3bLvCa4r6pC5eh87tdtbl%2Bbp3MyH%2Fi4IhWfYRQWxfwtdbZ4WrI0Ge7DFl39fjhMo0L%2ByqPZrgRotLGNC5IT27PZLjncL7OD%2FchSWsAAQNeOb1sraWjGqiLCPP05PcK0luLL60x5U4NjeU9VClDSk9BLByyERZxP%2FtcArkblY%2FDWb2TcCLqdo4Ef1L32sH5zoKPH81naBS7RuuMdWeKyEfTsj7h0g%2BVSxkRWiVier7yWbtvUSnlGW%2B23iGDa51IQoJh5md15j4olMEV7jRdw4HZV%2BZHw2RxSLRF%2BVUnKs1AXGl49cGclFHDqrPvE3hyof36Xm7GGdlSUfgav%2FeL4NCER8aPOMVmj0o%2FoONyvEb5Z%2FU3iSz7sarGKAGAE6H2m%2FreXP3kV2vK0B%2BakzoDM03ALXgz0J9yoJ%2Bo%2FwGTJlKfO0h5UCAvrOvpgYSym%2BLAbr80vyTsSer8cpdtvNpyKW0G0LMO2tusIGOqUBxFPHQAS%2BDOgXr1sLr9IzZr8loJ%2BABhlhqVbNjL4Tg1c6BIz9QbivvjpQgEBVK9%2FrB0eT%2FI6eyyz0vh3%2BQzkdnVgYkOgsMnd3clodsh1PD3JwefbjxKxDWdH9VxZsXYuN796zBu0dKPYBU7lhqmFBPyDk39fbgF19SBO1e4KL490Fj9Zh5fTVy9DvRz1V4bDd%2BYxUE5ahyBYq7%2Fi4hESeec%2B%2Boo5V&X-Amz-Signature=7541496ce06be185b9623eb3f52e4aae318f500721d5483b1f773a1b8ede9556&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ3ITK52%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCz%2FS5TUtO%2FUYH8fPadIl4YWezJcqaV5tw%2Fk2GTIjKJagIgFIgtRYsj669hLTY6y3S9wKAbs5yQS952SkkZO6ta6ccq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOdxekaBnzR%2F5aS85SrcAzOrNqadaqLsno3pEzmEb1cSGxjqUpWXK94%2BEdcrOsQtMMniSzK6hVy0e297v06iTDdRj8LsqFINMnYCrLTe%2Bq7KKxIaBGxbvipkJtm5wzSA3b6K0%2B8HC9cYe2Xq3w8nO%2BOBYgbzZIbaF94Its%2FlM%2BWAr36k2UdtQBAu3bLvCa4r6pC5eh87tdtbl%2Bbp3MyH%2Fi4IhWfYRQWxfwtdbZ4WrI0Ge7DFl39fjhMo0L%2ByqPZrgRotLGNC5IT27PZLjncL7OD%2FchSWsAAQNeOb1sraWjGqiLCPP05PcK0luLL60x5U4NjeU9VClDSk9BLByyERZxP%2FtcArkblY%2FDWb2TcCLqdo4Ef1L32sH5zoKPH81naBS7RuuMdWeKyEfTsj7h0g%2BVSxkRWiVier7yWbtvUSnlGW%2B23iGDa51IQoJh5md15j4olMEV7jRdw4HZV%2BZHw2RxSLRF%2BVUnKs1AXGl49cGclFHDqrPvE3hyof36Xm7GGdlSUfgav%2FeL4NCER8aPOMVmj0o%2FoONyvEb5Z%2FU3iSz7sarGKAGAE6H2m%2FreXP3kV2vK0B%2BakzoDM03ALXgz0J9yoJ%2Bo%2FwGTJlKfO0h5UCAvrOvpgYSym%2BLAbr80vyTsSer8cpdtvNpyKW0G0LMO2tusIGOqUBxFPHQAS%2BDOgXr1sLr9IzZr8loJ%2BABhlhqVbNjL4Tg1c6BIz9QbivvjpQgEBVK9%2FrB0eT%2FI6eyyz0vh3%2BQzkdnVgYkOgsMnd3clodsh1PD3JwefbjxKxDWdH9VxZsXYuN796zBu0dKPYBU7lhqmFBPyDk39fbgF19SBO1e4KL490Fj9Zh5fTVy9DvRz1V4bDd%2BYxUE5ahyBYq7%2Fi4hESeec%2B%2Boo5V&X-Amz-Signature=0dbd40d9e9c5163ce1c034b59d67d91f7b9f892e83dc426978762c9744c77d47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ3ITK52%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCz%2FS5TUtO%2FUYH8fPadIl4YWezJcqaV5tw%2Fk2GTIjKJagIgFIgtRYsj669hLTY6y3S9wKAbs5yQS952SkkZO6ta6ccq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOdxekaBnzR%2F5aS85SrcAzOrNqadaqLsno3pEzmEb1cSGxjqUpWXK94%2BEdcrOsQtMMniSzK6hVy0e297v06iTDdRj8LsqFINMnYCrLTe%2Bq7KKxIaBGxbvipkJtm5wzSA3b6K0%2B8HC9cYe2Xq3w8nO%2BOBYgbzZIbaF94Its%2FlM%2BWAr36k2UdtQBAu3bLvCa4r6pC5eh87tdtbl%2Bbp3MyH%2Fi4IhWfYRQWxfwtdbZ4WrI0Ge7DFl39fjhMo0L%2ByqPZrgRotLGNC5IT27PZLjncL7OD%2FchSWsAAQNeOb1sraWjGqiLCPP05PcK0luLL60x5U4NjeU9VClDSk9BLByyERZxP%2FtcArkblY%2FDWb2TcCLqdo4Ef1L32sH5zoKPH81naBS7RuuMdWeKyEfTsj7h0g%2BVSxkRWiVier7yWbtvUSnlGW%2B23iGDa51IQoJh5md15j4olMEV7jRdw4HZV%2BZHw2RxSLRF%2BVUnKs1AXGl49cGclFHDqrPvE3hyof36Xm7GGdlSUfgav%2FeL4NCER8aPOMVmj0o%2FoONyvEb5Z%2FU3iSz7sarGKAGAE6H2m%2FreXP3kV2vK0B%2BakzoDM03ALXgz0J9yoJ%2Bo%2FwGTJlKfO0h5UCAvrOvpgYSym%2BLAbr80vyTsSer8cpdtvNpyKW0G0LMO2tusIGOqUBxFPHQAS%2BDOgXr1sLr9IzZr8loJ%2BABhlhqVbNjL4Tg1c6BIz9QbivvjpQgEBVK9%2FrB0eT%2FI6eyyz0vh3%2BQzkdnVgYkOgsMnd3clodsh1PD3JwefbjxKxDWdH9VxZsXYuN796zBu0dKPYBU7lhqmFBPyDk39fbgF19SBO1e4KL490Fj9Zh5fTVy9DvRz1V4bDd%2BYxUE5ahyBYq7%2Fi4hESeec%2B%2Boo5V&X-Amz-Signature=a5b8dea2dad62453c162495de21ef6b450aa6adcc09a9212c0a3d2639d8b1c4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ3ITK52%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCz%2FS5TUtO%2FUYH8fPadIl4YWezJcqaV5tw%2Fk2GTIjKJagIgFIgtRYsj669hLTY6y3S9wKAbs5yQS952SkkZO6ta6ccq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOdxekaBnzR%2F5aS85SrcAzOrNqadaqLsno3pEzmEb1cSGxjqUpWXK94%2BEdcrOsQtMMniSzK6hVy0e297v06iTDdRj8LsqFINMnYCrLTe%2Bq7KKxIaBGxbvipkJtm5wzSA3b6K0%2B8HC9cYe2Xq3w8nO%2BOBYgbzZIbaF94Its%2FlM%2BWAr36k2UdtQBAu3bLvCa4r6pC5eh87tdtbl%2Bbp3MyH%2Fi4IhWfYRQWxfwtdbZ4WrI0Ge7DFl39fjhMo0L%2ByqPZrgRotLGNC5IT27PZLjncL7OD%2FchSWsAAQNeOb1sraWjGqiLCPP05PcK0luLL60x5U4NjeU9VClDSk9BLByyERZxP%2FtcArkblY%2FDWb2TcCLqdo4Ef1L32sH5zoKPH81naBS7RuuMdWeKyEfTsj7h0g%2BVSxkRWiVier7yWbtvUSnlGW%2B23iGDa51IQoJh5md15j4olMEV7jRdw4HZV%2BZHw2RxSLRF%2BVUnKs1AXGl49cGclFHDqrPvE3hyof36Xm7GGdlSUfgav%2FeL4NCER8aPOMVmj0o%2FoONyvEb5Z%2FU3iSz7sarGKAGAE6H2m%2FreXP3kV2vK0B%2BakzoDM03ALXgz0J9yoJ%2Bo%2FwGTJlKfO0h5UCAvrOvpgYSym%2BLAbr80vyTsSer8cpdtvNpyKW0G0LMO2tusIGOqUBxFPHQAS%2BDOgXr1sLr9IzZr8loJ%2BABhlhqVbNjL4Tg1c6BIz9QbivvjpQgEBVK9%2FrB0eT%2FI6eyyz0vh3%2BQzkdnVgYkOgsMnd3clodsh1PD3JwefbjxKxDWdH9VxZsXYuN796zBu0dKPYBU7lhqmFBPyDk39fbgF19SBO1e4KL490Fj9Zh5fTVy9DvRz1V4bDd%2BYxUE5ahyBYq7%2Fi4hESeec%2B%2Boo5V&X-Amz-Signature=ff315104e8f88ae9a1eb55c0c711fb12b747cafb3c2f2b3b0fddcbca3bbadf61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ3ITK52%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCz%2FS5TUtO%2FUYH8fPadIl4YWezJcqaV5tw%2Fk2GTIjKJagIgFIgtRYsj669hLTY6y3S9wKAbs5yQS952SkkZO6ta6ccq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOdxekaBnzR%2F5aS85SrcAzOrNqadaqLsno3pEzmEb1cSGxjqUpWXK94%2BEdcrOsQtMMniSzK6hVy0e297v06iTDdRj8LsqFINMnYCrLTe%2Bq7KKxIaBGxbvipkJtm5wzSA3b6K0%2B8HC9cYe2Xq3w8nO%2BOBYgbzZIbaF94Its%2FlM%2BWAr36k2UdtQBAu3bLvCa4r6pC5eh87tdtbl%2Bbp3MyH%2Fi4IhWfYRQWxfwtdbZ4WrI0Ge7DFl39fjhMo0L%2ByqPZrgRotLGNC5IT27PZLjncL7OD%2FchSWsAAQNeOb1sraWjGqiLCPP05PcK0luLL60x5U4NjeU9VClDSk9BLByyERZxP%2FtcArkblY%2FDWb2TcCLqdo4Ef1L32sH5zoKPH81naBS7RuuMdWeKyEfTsj7h0g%2BVSxkRWiVier7yWbtvUSnlGW%2B23iGDa51IQoJh5md15j4olMEV7jRdw4HZV%2BZHw2RxSLRF%2BVUnKs1AXGl49cGclFHDqrPvE3hyof36Xm7GGdlSUfgav%2FeL4NCER8aPOMVmj0o%2FoONyvEb5Z%2FU3iSz7sarGKAGAE6H2m%2FreXP3kV2vK0B%2BakzoDM03ALXgz0J9yoJ%2Bo%2FwGTJlKfO0h5UCAvrOvpgYSym%2BLAbr80vyTsSer8cpdtvNpyKW0G0LMO2tusIGOqUBxFPHQAS%2BDOgXr1sLr9IzZr8loJ%2BABhlhqVbNjL4Tg1c6BIz9QbivvjpQgEBVK9%2FrB0eT%2FI6eyyz0vh3%2BQzkdnVgYkOgsMnd3clodsh1PD3JwefbjxKxDWdH9VxZsXYuN796zBu0dKPYBU7lhqmFBPyDk39fbgF19SBO1e4KL490Fj9Zh5fTVy9DvRz1V4bDd%2BYxUE5ahyBYq7%2Fi4hESeec%2B%2Boo5V&X-Amz-Signature=55bb4adef01705f557e9da7c682b96525e84c6507bc1fabe4b8f36d3ca7d954f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
