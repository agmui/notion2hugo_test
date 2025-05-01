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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEWMOUZE%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIHQgmJJ8O5%2FiOf0%2FXYpgk0b2XGXp1RE1ySn6v0esJdY7AiBDqSs2kbsRYFw40Z035lCGAMkOzIMoMVB37OF%2FsJinbCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMioiKpmZo%2BxibHb55KtwDp3CzVA8WwRoWvf2zWwBPz2iTjomkGNn%2FGgLGSwGzgs6ptT21m%2Bu7833VY94NtAEg6vgzGvryUISjd7f4eKD3hMNJIntAsAv9Fs%2FQM%2FbS8LgOX09qtBbUcPKMTaJUsibziPeme42krPwvW5Ab1QS1a%2FPHX7gF42fRoyfxMhXq555TibJcXbL%2BQkVpcBjE6NO2abLPDXVqoAZ4XB6iktxAreHmt%2Br630gibWRQqrLHimlQlJGM2yrUmg4Hcm3tt3iH82xFs3GzbQCqsVYE6%2FUv2cpS31D%2FTuQWicvGI8gSxt3IQSi6QTNnb1qNUNPSpVIfV0UGrbOEzWzuypD8QayZ9I9hhL4IGGEKN%2Fb09YRf7kBo%2Fo0j1pibeNjXbz%2B6P%2BJx1CX%2F1JysvOTK3UvTzKz%2FKNildY9vZLCU%2F5mrWK0tACao5sW1j1M29%2FW%2BNRdZxY%2BkyMR6261OVCLBgKvIp2xqk0pYMp6mcht%2Bl%2FT7Z0oFz7AiWCsRrLykOn5mcCjjqGvyEYhuBHZ%2Bb%2BCoFZ36fTB5JqTxAo5uJ38ZhEiL8NBi%2FumxiaXLcWxJSt2WnojIxqfmyhzDXudw9BjYrbigKbiUERoIVvpPwHk53bpQAdVpXtDa4sA4M26XXxLJu3swtcfPwAY6pgGjWuhYdyekkcRnGW7O796lBfyCG1kom5Zewrk6clInsYylyld9IDSnUMPJHjiCAZhy2%2BSRc9aEmXjnD63iSPltW5Dcy4o2JQG1GIi240L33K56zCEGkqOzOeN81IwL1%2F%2F%2F4%2By9mrkikM09i8erY%2FQhVHLs3ZTaiYeMrgiK%2Fy05VCnoNbYg9Bk1G9rzOdZXe6ZKihMjZfAnfeB6A%2BnUxtEKwC6SiOy1&X-Amz-Signature=af2e87e88ab71d8b9b024e8f4851a2ec8b311e9eb850b1fb5bb03fd336922c40&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEWMOUZE%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIHQgmJJ8O5%2FiOf0%2FXYpgk0b2XGXp1RE1ySn6v0esJdY7AiBDqSs2kbsRYFw40Z035lCGAMkOzIMoMVB37OF%2FsJinbCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMioiKpmZo%2BxibHb55KtwDp3CzVA8WwRoWvf2zWwBPz2iTjomkGNn%2FGgLGSwGzgs6ptT21m%2Bu7833VY94NtAEg6vgzGvryUISjd7f4eKD3hMNJIntAsAv9Fs%2FQM%2FbS8LgOX09qtBbUcPKMTaJUsibziPeme42krPwvW5Ab1QS1a%2FPHX7gF42fRoyfxMhXq555TibJcXbL%2BQkVpcBjE6NO2abLPDXVqoAZ4XB6iktxAreHmt%2Br630gibWRQqrLHimlQlJGM2yrUmg4Hcm3tt3iH82xFs3GzbQCqsVYE6%2FUv2cpS31D%2FTuQWicvGI8gSxt3IQSi6QTNnb1qNUNPSpVIfV0UGrbOEzWzuypD8QayZ9I9hhL4IGGEKN%2Fb09YRf7kBo%2Fo0j1pibeNjXbz%2B6P%2BJx1CX%2F1JysvOTK3UvTzKz%2FKNildY9vZLCU%2F5mrWK0tACao5sW1j1M29%2FW%2BNRdZxY%2BkyMR6261OVCLBgKvIp2xqk0pYMp6mcht%2Bl%2FT7Z0oFz7AiWCsRrLykOn5mcCjjqGvyEYhuBHZ%2Bb%2BCoFZ36fTB5JqTxAo5uJ38ZhEiL8NBi%2FumxiaXLcWxJSt2WnojIxqfmyhzDXudw9BjYrbigKbiUERoIVvpPwHk53bpQAdVpXtDa4sA4M26XXxLJu3swtcfPwAY6pgGjWuhYdyekkcRnGW7O796lBfyCG1kom5Zewrk6clInsYylyld9IDSnUMPJHjiCAZhy2%2BSRc9aEmXjnD63iSPltW5Dcy4o2JQG1GIi240L33K56zCEGkqOzOeN81IwL1%2F%2F%2F4%2By9mrkikM09i8erY%2FQhVHLs3ZTaiYeMrgiK%2Fy05VCnoNbYg9Bk1G9rzOdZXe6ZKihMjZfAnfeB6A%2BnUxtEKwC6SiOy1&X-Amz-Signature=844a03bb687554dccb3bf55fc9374fc22a3364f9fdd426d571ff585acdb5d86a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEWMOUZE%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIHQgmJJ8O5%2FiOf0%2FXYpgk0b2XGXp1RE1ySn6v0esJdY7AiBDqSs2kbsRYFw40Z035lCGAMkOzIMoMVB37OF%2FsJinbCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMioiKpmZo%2BxibHb55KtwDp3CzVA8WwRoWvf2zWwBPz2iTjomkGNn%2FGgLGSwGzgs6ptT21m%2Bu7833VY94NtAEg6vgzGvryUISjd7f4eKD3hMNJIntAsAv9Fs%2FQM%2FbS8LgOX09qtBbUcPKMTaJUsibziPeme42krPwvW5Ab1QS1a%2FPHX7gF42fRoyfxMhXq555TibJcXbL%2BQkVpcBjE6NO2abLPDXVqoAZ4XB6iktxAreHmt%2Br630gibWRQqrLHimlQlJGM2yrUmg4Hcm3tt3iH82xFs3GzbQCqsVYE6%2FUv2cpS31D%2FTuQWicvGI8gSxt3IQSi6QTNnb1qNUNPSpVIfV0UGrbOEzWzuypD8QayZ9I9hhL4IGGEKN%2Fb09YRf7kBo%2Fo0j1pibeNjXbz%2B6P%2BJx1CX%2F1JysvOTK3UvTzKz%2FKNildY9vZLCU%2F5mrWK0tACao5sW1j1M29%2FW%2BNRdZxY%2BkyMR6261OVCLBgKvIp2xqk0pYMp6mcht%2Bl%2FT7Z0oFz7AiWCsRrLykOn5mcCjjqGvyEYhuBHZ%2Bb%2BCoFZ36fTB5JqTxAo5uJ38ZhEiL8NBi%2FumxiaXLcWxJSt2WnojIxqfmyhzDXudw9BjYrbigKbiUERoIVvpPwHk53bpQAdVpXtDa4sA4M26XXxLJu3swtcfPwAY6pgGjWuhYdyekkcRnGW7O796lBfyCG1kom5Zewrk6clInsYylyld9IDSnUMPJHjiCAZhy2%2BSRc9aEmXjnD63iSPltW5Dcy4o2JQG1GIi240L33K56zCEGkqOzOeN81IwL1%2F%2F%2F4%2By9mrkikM09i8erY%2FQhVHLs3ZTaiYeMrgiK%2Fy05VCnoNbYg9Bk1G9rzOdZXe6ZKihMjZfAnfeB6A%2BnUxtEKwC6SiOy1&X-Amz-Signature=96d243fa583dc7e95d66633072f25421c4ef5d7a9ba7cd47fe9dbc78d854af2e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEWMOUZE%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIHQgmJJ8O5%2FiOf0%2FXYpgk0b2XGXp1RE1ySn6v0esJdY7AiBDqSs2kbsRYFw40Z035lCGAMkOzIMoMVB37OF%2FsJinbCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMioiKpmZo%2BxibHb55KtwDp3CzVA8WwRoWvf2zWwBPz2iTjomkGNn%2FGgLGSwGzgs6ptT21m%2Bu7833VY94NtAEg6vgzGvryUISjd7f4eKD3hMNJIntAsAv9Fs%2FQM%2FbS8LgOX09qtBbUcPKMTaJUsibziPeme42krPwvW5Ab1QS1a%2FPHX7gF42fRoyfxMhXq555TibJcXbL%2BQkVpcBjE6NO2abLPDXVqoAZ4XB6iktxAreHmt%2Br630gibWRQqrLHimlQlJGM2yrUmg4Hcm3tt3iH82xFs3GzbQCqsVYE6%2FUv2cpS31D%2FTuQWicvGI8gSxt3IQSi6QTNnb1qNUNPSpVIfV0UGrbOEzWzuypD8QayZ9I9hhL4IGGEKN%2Fb09YRf7kBo%2Fo0j1pibeNjXbz%2B6P%2BJx1CX%2F1JysvOTK3UvTzKz%2FKNildY9vZLCU%2F5mrWK0tACao5sW1j1M29%2FW%2BNRdZxY%2BkyMR6261OVCLBgKvIp2xqk0pYMp6mcht%2Bl%2FT7Z0oFz7AiWCsRrLykOn5mcCjjqGvyEYhuBHZ%2Bb%2BCoFZ36fTB5JqTxAo5uJ38ZhEiL8NBi%2FumxiaXLcWxJSt2WnojIxqfmyhzDXudw9BjYrbigKbiUERoIVvpPwHk53bpQAdVpXtDa4sA4M26XXxLJu3swtcfPwAY6pgGjWuhYdyekkcRnGW7O796lBfyCG1kom5Zewrk6clInsYylyld9IDSnUMPJHjiCAZhy2%2BSRc9aEmXjnD63iSPltW5Dcy4o2JQG1GIi240L33K56zCEGkqOzOeN81IwL1%2F%2F%2F4%2By9mrkikM09i8erY%2FQhVHLs3ZTaiYeMrgiK%2Fy05VCnoNbYg9Bk1G9rzOdZXe6ZKihMjZfAnfeB6A%2BnUxtEKwC6SiOy1&X-Amz-Signature=35b05b4a6cf3c376777916e9e0f48ac110b089aff19ece31622e5535b33d9445&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEWMOUZE%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIHQgmJJ8O5%2FiOf0%2FXYpgk0b2XGXp1RE1ySn6v0esJdY7AiBDqSs2kbsRYFw40Z035lCGAMkOzIMoMVB37OF%2FsJinbCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMioiKpmZo%2BxibHb55KtwDp3CzVA8WwRoWvf2zWwBPz2iTjomkGNn%2FGgLGSwGzgs6ptT21m%2Bu7833VY94NtAEg6vgzGvryUISjd7f4eKD3hMNJIntAsAv9Fs%2FQM%2FbS8LgOX09qtBbUcPKMTaJUsibziPeme42krPwvW5Ab1QS1a%2FPHX7gF42fRoyfxMhXq555TibJcXbL%2BQkVpcBjE6NO2abLPDXVqoAZ4XB6iktxAreHmt%2Br630gibWRQqrLHimlQlJGM2yrUmg4Hcm3tt3iH82xFs3GzbQCqsVYE6%2FUv2cpS31D%2FTuQWicvGI8gSxt3IQSi6QTNnb1qNUNPSpVIfV0UGrbOEzWzuypD8QayZ9I9hhL4IGGEKN%2Fb09YRf7kBo%2Fo0j1pibeNjXbz%2B6P%2BJx1CX%2F1JysvOTK3UvTzKz%2FKNildY9vZLCU%2F5mrWK0tACao5sW1j1M29%2FW%2BNRdZxY%2BkyMR6261OVCLBgKvIp2xqk0pYMp6mcht%2Bl%2FT7Z0oFz7AiWCsRrLykOn5mcCjjqGvyEYhuBHZ%2Bb%2BCoFZ36fTB5JqTxAo5uJ38ZhEiL8NBi%2FumxiaXLcWxJSt2WnojIxqfmyhzDXudw9BjYrbigKbiUERoIVvpPwHk53bpQAdVpXtDa4sA4M26XXxLJu3swtcfPwAY6pgGjWuhYdyekkcRnGW7O796lBfyCG1kom5Zewrk6clInsYylyld9IDSnUMPJHjiCAZhy2%2BSRc9aEmXjnD63iSPltW5Dcy4o2JQG1GIi240L33K56zCEGkqOzOeN81IwL1%2F%2F%2F4%2By9mrkikM09i8erY%2FQhVHLs3ZTaiYeMrgiK%2Fy05VCnoNbYg9Bk1G9rzOdZXe6ZKihMjZfAnfeB6A%2BnUxtEKwC6SiOy1&X-Amz-Signature=0cb4aa95805aae349975ad1e519d82c94c8c364a080154e0bb5a5feb7717842a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
