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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZJZJK36%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T121552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIEBjLT9HgTTg47tWtha%2BKIHaQ3%2FjteRGFtWmp10kxSpFAiB9ddceZV980%2Fkjw1OhGp5QaGcOT38FhwTo1PdK5%2FW4zCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMomRCq3UxZiEYEVPaKtwDJPg99kxclg1xHz1pWna2WsaTFCBJ%2Fmh2NyLrLHzsJ0wImVC0W7qJGvVCITdC1hn9zm%2F8dSLF5LropQ%2BwbupzeFFEYRVHyHOReshrk4oTGc5Mwj2yqmecgwOWbFP1ViwCE1lgHQcCnD%2B9F8vnFvYqW11g4o3qgLlAntSwd9bpd3VMiabFwhKaUvbDRI8VlcgfpC0bx%2BQYhrha%2FETRthP4FBJ2bus%2Bulj8WG1iOcXMK3OOQljB2ZPQstu%2BhEiT1fydBZIU0aMm8tjSAbCHcCAS5wbTqRTSIAVBel8T57O35v0pMroFfZ4Ixsg99x31xFNNw7AILFE2WLnnBFGHvPcWok4sb2IWUh4OIuYPj0rtWUIceHsMyXptjqGTqtCdIBBEAZgLKLoUiOybD1sf4wkGrhAcKjQCpISC133o63KEVDcz0aqiZQbvulp3EOF4pi6lREf9D231d1aQME869JW8jjkL%2F8fEmCumoHw0j%2FhFWM018yvLXQM3gMDInAscmfAFHUXFSiwcTmixs2qRFiZiTSEit8ciKkG5doDfcJBqT6pbYaTAscA8lpJschBGzzzRB6zWx9q6eOGjM0NmieTaDy7yWMaKeFFoXAs395QiOUny%2BYCJwT9y%2FPF4dFEw9IiqwgY6pgH%2FKSDUc4lPgb1i2Q8hNrPWBiJl4QUdYcHsuoPoPDxmsgQrXaS%2Fb4KegK1%2BeNurSpxsoK8yamAOYtWnCzz4AvgJGB%2BKaQWTJHenW6hyVF9bSalD1eJZl3SobXXXkrXe5il1fQ34oQFgW703DZ12Bqg4eJtgZNZ307uly6FPvC0cmuhwOECXp1tIz%2Bo0yWuFGYRniDl%2FOn2aYyExaETUUnml75x2SN0Z&X-Amz-Signature=d38d38c27834c342b6218a795f1ac4790fcee0b42c90bd2eaaf53989f50f07d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZJZJK36%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T121552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIEBjLT9HgTTg47tWtha%2BKIHaQ3%2FjteRGFtWmp10kxSpFAiB9ddceZV980%2Fkjw1OhGp5QaGcOT38FhwTo1PdK5%2FW4zCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMomRCq3UxZiEYEVPaKtwDJPg99kxclg1xHz1pWna2WsaTFCBJ%2Fmh2NyLrLHzsJ0wImVC0W7qJGvVCITdC1hn9zm%2F8dSLF5LropQ%2BwbupzeFFEYRVHyHOReshrk4oTGc5Mwj2yqmecgwOWbFP1ViwCE1lgHQcCnD%2B9F8vnFvYqW11g4o3qgLlAntSwd9bpd3VMiabFwhKaUvbDRI8VlcgfpC0bx%2BQYhrha%2FETRthP4FBJ2bus%2Bulj8WG1iOcXMK3OOQljB2ZPQstu%2BhEiT1fydBZIU0aMm8tjSAbCHcCAS5wbTqRTSIAVBel8T57O35v0pMroFfZ4Ixsg99x31xFNNw7AILFE2WLnnBFGHvPcWok4sb2IWUh4OIuYPj0rtWUIceHsMyXptjqGTqtCdIBBEAZgLKLoUiOybD1sf4wkGrhAcKjQCpISC133o63KEVDcz0aqiZQbvulp3EOF4pi6lREf9D231d1aQME869JW8jjkL%2F8fEmCumoHw0j%2FhFWM018yvLXQM3gMDInAscmfAFHUXFSiwcTmixs2qRFiZiTSEit8ciKkG5doDfcJBqT6pbYaTAscA8lpJschBGzzzRB6zWx9q6eOGjM0NmieTaDy7yWMaKeFFoXAs395QiOUny%2BYCJwT9y%2FPF4dFEw9IiqwgY6pgH%2FKSDUc4lPgb1i2Q8hNrPWBiJl4QUdYcHsuoPoPDxmsgQrXaS%2Fb4KegK1%2BeNurSpxsoK8yamAOYtWnCzz4AvgJGB%2BKaQWTJHenW6hyVF9bSalD1eJZl3SobXXXkrXe5il1fQ34oQFgW703DZ12Bqg4eJtgZNZ307uly6FPvC0cmuhwOECXp1tIz%2Bo0yWuFGYRniDl%2FOn2aYyExaETUUnml75x2SN0Z&X-Amz-Signature=491ba090a75b93d9c957dbc73ef9421f9a94f51801ec8df0d6b70cbb6a0d7925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZJZJK36%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T121552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIEBjLT9HgTTg47tWtha%2BKIHaQ3%2FjteRGFtWmp10kxSpFAiB9ddceZV980%2Fkjw1OhGp5QaGcOT38FhwTo1PdK5%2FW4zCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMomRCq3UxZiEYEVPaKtwDJPg99kxclg1xHz1pWna2WsaTFCBJ%2Fmh2NyLrLHzsJ0wImVC0W7qJGvVCITdC1hn9zm%2F8dSLF5LropQ%2BwbupzeFFEYRVHyHOReshrk4oTGc5Mwj2yqmecgwOWbFP1ViwCE1lgHQcCnD%2B9F8vnFvYqW11g4o3qgLlAntSwd9bpd3VMiabFwhKaUvbDRI8VlcgfpC0bx%2BQYhrha%2FETRthP4FBJ2bus%2Bulj8WG1iOcXMK3OOQljB2ZPQstu%2BhEiT1fydBZIU0aMm8tjSAbCHcCAS5wbTqRTSIAVBel8T57O35v0pMroFfZ4Ixsg99x31xFNNw7AILFE2WLnnBFGHvPcWok4sb2IWUh4OIuYPj0rtWUIceHsMyXptjqGTqtCdIBBEAZgLKLoUiOybD1sf4wkGrhAcKjQCpISC133o63KEVDcz0aqiZQbvulp3EOF4pi6lREf9D231d1aQME869JW8jjkL%2F8fEmCumoHw0j%2FhFWM018yvLXQM3gMDInAscmfAFHUXFSiwcTmixs2qRFiZiTSEit8ciKkG5doDfcJBqT6pbYaTAscA8lpJschBGzzzRB6zWx9q6eOGjM0NmieTaDy7yWMaKeFFoXAs395QiOUny%2BYCJwT9y%2FPF4dFEw9IiqwgY6pgH%2FKSDUc4lPgb1i2Q8hNrPWBiJl4QUdYcHsuoPoPDxmsgQrXaS%2Fb4KegK1%2BeNurSpxsoK8yamAOYtWnCzz4AvgJGB%2BKaQWTJHenW6hyVF9bSalD1eJZl3SobXXXkrXe5il1fQ34oQFgW703DZ12Bqg4eJtgZNZ307uly6FPvC0cmuhwOECXp1tIz%2Bo0yWuFGYRniDl%2FOn2aYyExaETUUnml75x2SN0Z&X-Amz-Signature=194794046b3606191b2430810bec510d5dc84c7bde11a9b0820cf14f9fe9e6cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZJZJK36%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T121552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIEBjLT9HgTTg47tWtha%2BKIHaQ3%2FjteRGFtWmp10kxSpFAiB9ddceZV980%2Fkjw1OhGp5QaGcOT38FhwTo1PdK5%2FW4zCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMomRCq3UxZiEYEVPaKtwDJPg99kxclg1xHz1pWna2WsaTFCBJ%2Fmh2NyLrLHzsJ0wImVC0W7qJGvVCITdC1hn9zm%2F8dSLF5LropQ%2BwbupzeFFEYRVHyHOReshrk4oTGc5Mwj2yqmecgwOWbFP1ViwCE1lgHQcCnD%2B9F8vnFvYqW11g4o3qgLlAntSwd9bpd3VMiabFwhKaUvbDRI8VlcgfpC0bx%2BQYhrha%2FETRthP4FBJ2bus%2Bulj8WG1iOcXMK3OOQljB2ZPQstu%2BhEiT1fydBZIU0aMm8tjSAbCHcCAS5wbTqRTSIAVBel8T57O35v0pMroFfZ4Ixsg99x31xFNNw7AILFE2WLnnBFGHvPcWok4sb2IWUh4OIuYPj0rtWUIceHsMyXptjqGTqtCdIBBEAZgLKLoUiOybD1sf4wkGrhAcKjQCpISC133o63KEVDcz0aqiZQbvulp3EOF4pi6lREf9D231d1aQME869JW8jjkL%2F8fEmCumoHw0j%2FhFWM018yvLXQM3gMDInAscmfAFHUXFSiwcTmixs2qRFiZiTSEit8ciKkG5doDfcJBqT6pbYaTAscA8lpJschBGzzzRB6zWx9q6eOGjM0NmieTaDy7yWMaKeFFoXAs395QiOUny%2BYCJwT9y%2FPF4dFEw9IiqwgY6pgH%2FKSDUc4lPgb1i2Q8hNrPWBiJl4QUdYcHsuoPoPDxmsgQrXaS%2Fb4KegK1%2BeNurSpxsoK8yamAOYtWnCzz4AvgJGB%2BKaQWTJHenW6hyVF9bSalD1eJZl3SobXXXkrXe5il1fQ34oQFgW703DZ12Bqg4eJtgZNZ307uly6FPvC0cmuhwOECXp1tIz%2Bo0yWuFGYRniDl%2FOn2aYyExaETUUnml75x2SN0Z&X-Amz-Signature=dd3a2e09127de9ecb86e333b05f1660cf6e0a722b67f452b9f63b84965fcbc23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZJZJK36%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T121552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIEBjLT9HgTTg47tWtha%2BKIHaQ3%2FjteRGFtWmp10kxSpFAiB9ddceZV980%2Fkjw1OhGp5QaGcOT38FhwTo1PdK5%2FW4zCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMomRCq3UxZiEYEVPaKtwDJPg99kxclg1xHz1pWna2WsaTFCBJ%2Fmh2NyLrLHzsJ0wImVC0W7qJGvVCITdC1hn9zm%2F8dSLF5LropQ%2BwbupzeFFEYRVHyHOReshrk4oTGc5Mwj2yqmecgwOWbFP1ViwCE1lgHQcCnD%2B9F8vnFvYqW11g4o3qgLlAntSwd9bpd3VMiabFwhKaUvbDRI8VlcgfpC0bx%2BQYhrha%2FETRthP4FBJ2bus%2Bulj8WG1iOcXMK3OOQljB2ZPQstu%2BhEiT1fydBZIU0aMm8tjSAbCHcCAS5wbTqRTSIAVBel8T57O35v0pMroFfZ4Ixsg99x31xFNNw7AILFE2WLnnBFGHvPcWok4sb2IWUh4OIuYPj0rtWUIceHsMyXptjqGTqtCdIBBEAZgLKLoUiOybD1sf4wkGrhAcKjQCpISC133o63KEVDcz0aqiZQbvulp3EOF4pi6lREf9D231d1aQME869JW8jjkL%2F8fEmCumoHw0j%2FhFWM018yvLXQM3gMDInAscmfAFHUXFSiwcTmixs2qRFiZiTSEit8ciKkG5doDfcJBqT6pbYaTAscA8lpJschBGzzzRB6zWx9q6eOGjM0NmieTaDy7yWMaKeFFoXAs395QiOUny%2BYCJwT9y%2FPF4dFEw9IiqwgY6pgH%2FKSDUc4lPgb1i2Q8hNrPWBiJl4QUdYcHsuoPoPDxmsgQrXaS%2Fb4KegK1%2BeNurSpxsoK8yamAOYtWnCzz4AvgJGB%2BKaQWTJHenW6hyVF9bSalD1eJZl3SobXXXkrXe5il1fQ34oQFgW703DZ12Bqg4eJtgZNZ307uly6FPvC0cmuhwOECXp1tIz%2Bo0yWuFGYRniDl%2FOn2aYyExaETUUnml75x2SN0Z&X-Amz-Signature=374ad0b6da03e67c06caaac13878b62640a9c7c457df0525d98060e0dd6e8952&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
