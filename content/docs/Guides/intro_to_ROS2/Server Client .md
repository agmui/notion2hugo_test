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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V25D3F2K%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGaI0nTV94e%2Fp88rPaxFDl8rhGTSayKYhSxY%2BeWnxHr4AiBKvA04%2FrbTV3AXvlneDa%2FheaJa1sWp4EBDZyzeFfdlIyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNB8L7HRRqeqUBfJwKtwDWE2%2FA4U%2FjnhhS7fmYKWIyWXi8JHoVbiF%2BBp0EcI%2FrKMc0tr8zcM9haM3U8HAn95wjRDZFyLy%2F5%2FxZropd2CJ0svTa81c4VYVTbD34PSi49LAJMxE4UstBwEYor3pwPWCBdlRclrEEr7dXJcGjpFJoKJF9yNuLF5uYsvrPv5r%2BBkZbjW40wQCcIOpfORxKCEiXyhW9QXWr4Q9efcYaevkglQcdIhVgtkEPTLqhu7J8XT8qpdGD3JaG23pfpVwpiD%2FI7%2FlGTOud8SadmifS06udS2N4as6jjhz5NMch1DjULK1Fp9oHv8ThXn9zqQ9po2vjkpssEg8og6wgPV4DifeQp4qtAwRo7sKpf7uCySvhdc%2FYe2m5JQTKQ69Z7Zl1A007ht2oAhL8XeK%2F6JndP%2FmMItpyBCuxjoZFy912aeeffRaiaGfawxlIe%2FOlcUDEAUpZw1Xb3xQ%2Bm5CIn0Z4MK7S7IECTZeLFO4vMCHBeg7QRVaBhXtXfpNeT%2B4VFIUHwAJkHoXbysbvcvL7%2Ffr4jiqOvX9pbH28OzV1X9Do6VXb6YFOTE5NFr%2FsKyxKRqV4ey9TJFuO%2FTG2BRhafYlPTHqtpiQwhegQC%2BGFnljbyiVJE2tjj7fshrh79cwPuQwhYijvQY6pgGhu3%2FoNauDBT%2FeeL12UzxNMEfz2qrxvGwgD39l8UgdsYpdp0lDutKeb2p6gTIgtpjBCOrj3XxE1sB%2FOq5d988bKuIXjIxigGAUlb54DVSRZRdWFl65Lz%2FMfWARYHsrVeZqHZxLTlX6KWkAdPf%2FADRVD3LECi49QDDbkPnNnV%2F%2BhSyHK9y%2FBBu9ALgFdROU%2Fq3BwukhNdDayKc%2BbyuoX0qAEOeeDsdF&X-Amz-Signature=91676ecb731e8490d4d366143803ca87b02a3c7752caaa6e4e00c990e66869cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V25D3F2K%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGaI0nTV94e%2Fp88rPaxFDl8rhGTSayKYhSxY%2BeWnxHr4AiBKvA04%2FrbTV3AXvlneDa%2FheaJa1sWp4EBDZyzeFfdlIyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNB8L7HRRqeqUBfJwKtwDWE2%2FA4U%2FjnhhS7fmYKWIyWXi8JHoVbiF%2BBp0EcI%2FrKMc0tr8zcM9haM3U8HAn95wjRDZFyLy%2F5%2FxZropd2CJ0svTa81c4VYVTbD34PSi49LAJMxE4UstBwEYor3pwPWCBdlRclrEEr7dXJcGjpFJoKJF9yNuLF5uYsvrPv5r%2BBkZbjW40wQCcIOpfORxKCEiXyhW9QXWr4Q9efcYaevkglQcdIhVgtkEPTLqhu7J8XT8qpdGD3JaG23pfpVwpiD%2FI7%2FlGTOud8SadmifS06udS2N4as6jjhz5NMch1DjULK1Fp9oHv8ThXn9zqQ9po2vjkpssEg8og6wgPV4DifeQp4qtAwRo7sKpf7uCySvhdc%2FYe2m5JQTKQ69Z7Zl1A007ht2oAhL8XeK%2F6JndP%2FmMItpyBCuxjoZFy912aeeffRaiaGfawxlIe%2FOlcUDEAUpZw1Xb3xQ%2Bm5CIn0Z4MK7S7IECTZeLFO4vMCHBeg7QRVaBhXtXfpNeT%2B4VFIUHwAJkHoXbysbvcvL7%2Ffr4jiqOvX9pbH28OzV1X9Do6VXb6YFOTE5NFr%2FsKyxKRqV4ey9TJFuO%2FTG2BRhafYlPTHqtpiQwhegQC%2BGFnljbyiVJE2tjj7fshrh79cwPuQwhYijvQY6pgGhu3%2FoNauDBT%2FeeL12UzxNMEfz2qrxvGwgD39l8UgdsYpdp0lDutKeb2p6gTIgtpjBCOrj3XxE1sB%2FOq5d988bKuIXjIxigGAUlb54DVSRZRdWFl65Lz%2FMfWARYHsrVeZqHZxLTlX6KWkAdPf%2FADRVD3LECi49QDDbkPnNnV%2F%2BhSyHK9y%2FBBu9ALgFdROU%2Fq3BwukhNdDayKc%2BbyuoX0qAEOeeDsdF&X-Amz-Signature=4c0b0ef35378f4f469fa007b2cbc8b20880e104a48955e6ab2c16995e4fe5eca&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V25D3F2K%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGaI0nTV94e%2Fp88rPaxFDl8rhGTSayKYhSxY%2BeWnxHr4AiBKvA04%2FrbTV3AXvlneDa%2FheaJa1sWp4EBDZyzeFfdlIyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNB8L7HRRqeqUBfJwKtwDWE2%2FA4U%2FjnhhS7fmYKWIyWXi8JHoVbiF%2BBp0EcI%2FrKMc0tr8zcM9haM3U8HAn95wjRDZFyLy%2F5%2FxZropd2CJ0svTa81c4VYVTbD34PSi49LAJMxE4UstBwEYor3pwPWCBdlRclrEEr7dXJcGjpFJoKJF9yNuLF5uYsvrPv5r%2BBkZbjW40wQCcIOpfORxKCEiXyhW9QXWr4Q9efcYaevkglQcdIhVgtkEPTLqhu7J8XT8qpdGD3JaG23pfpVwpiD%2FI7%2FlGTOud8SadmifS06udS2N4as6jjhz5NMch1DjULK1Fp9oHv8ThXn9zqQ9po2vjkpssEg8og6wgPV4DifeQp4qtAwRo7sKpf7uCySvhdc%2FYe2m5JQTKQ69Z7Zl1A007ht2oAhL8XeK%2F6JndP%2FmMItpyBCuxjoZFy912aeeffRaiaGfawxlIe%2FOlcUDEAUpZw1Xb3xQ%2Bm5CIn0Z4MK7S7IECTZeLFO4vMCHBeg7QRVaBhXtXfpNeT%2B4VFIUHwAJkHoXbysbvcvL7%2Ffr4jiqOvX9pbH28OzV1X9Do6VXb6YFOTE5NFr%2FsKyxKRqV4ey9TJFuO%2FTG2BRhafYlPTHqtpiQwhegQC%2BGFnljbyiVJE2tjj7fshrh79cwPuQwhYijvQY6pgGhu3%2FoNauDBT%2FeeL12UzxNMEfz2qrxvGwgD39l8UgdsYpdp0lDutKeb2p6gTIgtpjBCOrj3XxE1sB%2FOq5d988bKuIXjIxigGAUlb54DVSRZRdWFl65Lz%2FMfWARYHsrVeZqHZxLTlX6KWkAdPf%2FADRVD3LECi49QDDbkPnNnV%2F%2BhSyHK9y%2FBBu9ALgFdROU%2Fq3BwukhNdDayKc%2BbyuoX0qAEOeeDsdF&X-Amz-Signature=e292cc8d51a2952b58797b6ef10db20d44c173f8a7eb4eb43208e4f37bc24e2e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V25D3F2K%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGaI0nTV94e%2Fp88rPaxFDl8rhGTSayKYhSxY%2BeWnxHr4AiBKvA04%2FrbTV3AXvlneDa%2FheaJa1sWp4EBDZyzeFfdlIyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNB8L7HRRqeqUBfJwKtwDWE2%2FA4U%2FjnhhS7fmYKWIyWXi8JHoVbiF%2BBp0EcI%2FrKMc0tr8zcM9haM3U8HAn95wjRDZFyLy%2F5%2FxZropd2CJ0svTa81c4VYVTbD34PSi49LAJMxE4UstBwEYor3pwPWCBdlRclrEEr7dXJcGjpFJoKJF9yNuLF5uYsvrPv5r%2BBkZbjW40wQCcIOpfORxKCEiXyhW9QXWr4Q9efcYaevkglQcdIhVgtkEPTLqhu7J8XT8qpdGD3JaG23pfpVwpiD%2FI7%2FlGTOud8SadmifS06udS2N4as6jjhz5NMch1DjULK1Fp9oHv8ThXn9zqQ9po2vjkpssEg8og6wgPV4DifeQp4qtAwRo7sKpf7uCySvhdc%2FYe2m5JQTKQ69Z7Zl1A007ht2oAhL8XeK%2F6JndP%2FmMItpyBCuxjoZFy912aeeffRaiaGfawxlIe%2FOlcUDEAUpZw1Xb3xQ%2Bm5CIn0Z4MK7S7IECTZeLFO4vMCHBeg7QRVaBhXtXfpNeT%2B4VFIUHwAJkHoXbysbvcvL7%2Ffr4jiqOvX9pbH28OzV1X9Do6VXb6YFOTE5NFr%2FsKyxKRqV4ey9TJFuO%2FTG2BRhafYlPTHqtpiQwhegQC%2BGFnljbyiVJE2tjj7fshrh79cwPuQwhYijvQY6pgGhu3%2FoNauDBT%2FeeL12UzxNMEfz2qrxvGwgD39l8UgdsYpdp0lDutKeb2p6gTIgtpjBCOrj3XxE1sB%2FOq5d988bKuIXjIxigGAUlb54DVSRZRdWFl65Lz%2FMfWARYHsrVeZqHZxLTlX6KWkAdPf%2FADRVD3LECi49QDDbkPnNnV%2F%2BhSyHK9y%2FBBu9ALgFdROU%2Fq3BwukhNdDayKc%2BbyuoX0qAEOeeDsdF&X-Amz-Signature=135b57f9b6c91aa32da21b61ba54201833ea57e32a7262ec41d6daf40a552379&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V25D3F2K%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGaI0nTV94e%2Fp88rPaxFDl8rhGTSayKYhSxY%2BeWnxHr4AiBKvA04%2FrbTV3AXvlneDa%2FheaJa1sWp4EBDZyzeFfdlIyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNB8L7HRRqeqUBfJwKtwDWE2%2FA4U%2FjnhhS7fmYKWIyWXi8JHoVbiF%2BBp0EcI%2FrKMc0tr8zcM9haM3U8HAn95wjRDZFyLy%2F5%2FxZropd2CJ0svTa81c4VYVTbD34PSi49LAJMxE4UstBwEYor3pwPWCBdlRclrEEr7dXJcGjpFJoKJF9yNuLF5uYsvrPv5r%2BBkZbjW40wQCcIOpfORxKCEiXyhW9QXWr4Q9efcYaevkglQcdIhVgtkEPTLqhu7J8XT8qpdGD3JaG23pfpVwpiD%2FI7%2FlGTOud8SadmifS06udS2N4as6jjhz5NMch1DjULK1Fp9oHv8ThXn9zqQ9po2vjkpssEg8og6wgPV4DifeQp4qtAwRo7sKpf7uCySvhdc%2FYe2m5JQTKQ69Z7Zl1A007ht2oAhL8XeK%2F6JndP%2FmMItpyBCuxjoZFy912aeeffRaiaGfawxlIe%2FOlcUDEAUpZw1Xb3xQ%2Bm5CIn0Z4MK7S7IECTZeLFO4vMCHBeg7QRVaBhXtXfpNeT%2B4VFIUHwAJkHoXbysbvcvL7%2Ffr4jiqOvX9pbH28OzV1X9Do6VXb6YFOTE5NFr%2FsKyxKRqV4ey9TJFuO%2FTG2BRhafYlPTHqtpiQwhegQC%2BGFnljbyiVJE2tjj7fshrh79cwPuQwhYijvQY6pgGhu3%2FoNauDBT%2FeeL12UzxNMEfz2qrxvGwgD39l8UgdsYpdp0lDutKeb2p6gTIgtpjBCOrj3XxE1sB%2FOq5d988bKuIXjIxigGAUlb54DVSRZRdWFl65Lz%2FMfWARYHsrVeZqHZxLTlX6KWkAdPf%2FADRVD3LECi49QDDbkPnNnV%2F%2BhSyHK9y%2FBBu9ALgFdROU%2Fq3BwukhNdDayKc%2BbyuoX0qAEOeeDsdF&X-Amz-Signature=75778b045be6e59dbdb96da3b949c0d9cd1c21b2327af5437370dfdfd0811d7d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
