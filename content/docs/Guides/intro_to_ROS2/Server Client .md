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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEHYQZIE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8ZR1IbOqlXEW0LK7ruO%2Fw2%2Bk70vqeP47y4LoAeRDV9wIhAJGZ9ASEGFHqwIt1FFoJTNq2ir%2Fu4%2FrsFlz48rSGtFivKv8DCBAQABoMNjM3NDIzMTgzODA1IgzxnVnn%2Fy2Wmh%2BtkH0q3AMkyi1lnF5fFbMa6g0CQ5aBWq8%2BFjrsYXG4Tgx0lX59nWMH5ExnSLrOEMKPgmB%2BCx9%2Fs89UcE9R8j%2FzxvM8HFY4y8lw2ZPtr%2B8IBynzNn3n877q%2BWtC5zOSe8usPd5JerG2H6fOn4uR%2BQ9mDacFOhKURwqIcdDwTXSEt4G4gguW89m%2BjsKVIKdg6nbiU5y3Iw5pQ4PgJUka5uo%2FQ4CQdrcnA9nqYEUZs1LeBNVLFlxE9ZNsE8O5A1ov8zmDZB8bmRZAc07Zum40RIDJ6txQM1kl%2FXKz9hmrC%2Fjq36E09TOxTERrzfiso744M0Z7Ovk4FEv3ukvaoVNhtuSEvzpJMRdofoJRZl5gmyo5flRrjd5JDzozzYkPEm%2BDvCLQt8WO2OA4ObUwIQofkLoKu3tslRn7uFvg7fE0gsWzwr81LILxrg6ozBkEncbMipZky5yON%2F%2B03wrlyIOx5JBrskmej24Ir5oN91w3s%2Be9QFx0TLOAxOI3naeraki93MNu1G3FNDvDWZ1flm4%2FDN8IGTt4snpDXnFSkJ2La%2F9O1S%2BeHzymZPZdUVeMFvsdk3QcZ7pggWjfYoLY%2BmTP9GOnAZMAVsUUYyR0a0fL%2FMYUXLm5Ya%2BQkpHNsh8Rs2pm56a3SzDIpM3DBjqkAe2WHN4Rh7FcFs1ia%2B%2BGjCn%2Fi8Bgif2sFt5%2BRawIe%2F%2B0tPVHgbg9iLLr2NOkpxUej5jdlUeqOvD%2BT7J2K4jcxitvHlP6jiGwlTaqfst31IpmzdWyfLt8gAWXR1skq%2FmXy8v31QAGKebq%2FFOHr1w3TbKRojses3sQNA5taxnZyaAYXMsDLVX2Mi3H9wR%2Bm4OoNqBqZuZ5Vp6gzchjay%2Bne2PrO6rD&X-Amz-Signature=c12600dfcf9a624fe4e40caeb3bf0785e27d413629a5ac15af47d5f4f7d325a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEHYQZIE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8ZR1IbOqlXEW0LK7ruO%2Fw2%2Bk70vqeP47y4LoAeRDV9wIhAJGZ9ASEGFHqwIt1FFoJTNq2ir%2Fu4%2FrsFlz48rSGtFivKv8DCBAQABoMNjM3NDIzMTgzODA1IgzxnVnn%2Fy2Wmh%2BtkH0q3AMkyi1lnF5fFbMa6g0CQ5aBWq8%2BFjrsYXG4Tgx0lX59nWMH5ExnSLrOEMKPgmB%2BCx9%2Fs89UcE9R8j%2FzxvM8HFY4y8lw2ZPtr%2B8IBynzNn3n877q%2BWtC5zOSe8usPd5JerG2H6fOn4uR%2BQ9mDacFOhKURwqIcdDwTXSEt4G4gguW89m%2BjsKVIKdg6nbiU5y3Iw5pQ4PgJUka5uo%2FQ4CQdrcnA9nqYEUZs1LeBNVLFlxE9ZNsE8O5A1ov8zmDZB8bmRZAc07Zum40RIDJ6txQM1kl%2FXKz9hmrC%2Fjq36E09TOxTERrzfiso744M0Z7Ovk4FEv3ukvaoVNhtuSEvzpJMRdofoJRZl5gmyo5flRrjd5JDzozzYkPEm%2BDvCLQt8WO2OA4ObUwIQofkLoKu3tslRn7uFvg7fE0gsWzwr81LILxrg6ozBkEncbMipZky5yON%2F%2B03wrlyIOx5JBrskmej24Ir5oN91w3s%2Be9QFx0TLOAxOI3naeraki93MNu1G3FNDvDWZ1flm4%2FDN8IGTt4snpDXnFSkJ2La%2F9O1S%2BeHzymZPZdUVeMFvsdk3QcZ7pggWjfYoLY%2BmTP9GOnAZMAVsUUYyR0a0fL%2FMYUXLm5Ya%2BQkpHNsh8Rs2pm56a3SzDIpM3DBjqkAe2WHN4Rh7FcFs1ia%2B%2BGjCn%2Fi8Bgif2sFt5%2BRawIe%2F%2B0tPVHgbg9iLLr2NOkpxUej5jdlUeqOvD%2BT7J2K4jcxitvHlP6jiGwlTaqfst31IpmzdWyfLt8gAWXR1skq%2FmXy8v31QAGKebq%2FFOHr1w3TbKRojses3sQNA5taxnZyaAYXMsDLVX2Mi3H9wR%2Bm4OoNqBqZuZ5Vp6gzchjay%2Bne2PrO6rD&X-Amz-Signature=080e6b5a822a1e557855b9973c5aebccbd31fd472236d7833e7fc7d40928146e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEHYQZIE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8ZR1IbOqlXEW0LK7ruO%2Fw2%2Bk70vqeP47y4LoAeRDV9wIhAJGZ9ASEGFHqwIt1FFoJTNq2ir%2Fu4%2FrsFlz48rSGtFivKv8DCBAQABoMNjM3NDIzMTgzODA1IgzxnVnn%2Fy2Wmh%2BtkH0q3AMkyi1lnF5fFbMa6g0CQ5aBWq8%2BFjrsYXG4Tgx0lX59nWMH5ExnSLrOEMKPgmB%2BCx9%2Fs89UcE9R8j%2FzxvM8HFY4y8lw2ZPtr%2B8IBynzNn3n877q%2BWtC5zOSe8usPd5JerG2H6fOn4uR%2BQ9mDacFOhKURwqIcdDwTXSEt4G4gguW89m%2BjsKVIKdg6nbiU5y3Iw5pQ4PgJUka5uo%2FQ4CQdrcnA9nqYEUZs1LeBNVLFlxE9ZNsE8O5A1ov8zmDZB8bmRZAc07Zum40RIDJ6txQM1kl%2FXKz9hmrC%2Fjq36E09TOxTERrzfiso744M0Z7Ovk4FEv3ukvaoVNhtuSEvzpJMRdofoJRZl5gmyo5flRrjd5JDzozzYkPEm%2BDvCLQt8WO2OA4ObUwIQofkLoKu3tslRn7uFvg7fE0gsWzwr81LILxrg6ozBkEncbMipZky5yON%2F%2B03wrlyIOx5JBrskmej24Ir5oN91w3s%2Be9QFx0TLOAxOI3naeraki93MNu1G3FNDvDWZ1flm4%2FDN8IGTt4snpDXnFSkJ2La%2F9O1S%2BeHzymZPZdUVeMFvsdk3QcZ7pggWjfYoLY%2BmTP9GOnAZMAVsUUYyR0a0fL%2FMYUXLm5Ya%2BQkpHNsh8Rs2pm56a3SzDIpM3DBjqkAe2WHN4Rh7FcFs1ia%2B%2BGjCn%2Fi8Bgif2sFt5%2BRawIe%2F%2B0tPVHgbg9iLLr2NOkpxUej5jdlUeqOvD%2BT7J2K4jcxitvHlP6jiGwlTaqfst31IpmzdWyfLt8gAWXR1skq%2FmXy8v31QAGKebq%2FFOHr1w3TbKRojses3sQNA5taxnZyaAYXMsDLVX2Mi3H9wR%2Bm4OoNqBqZuZ5Vp6gzchjay%2Bne2PrO6rD&X-Amz-Signature=b22ac475b19b1c882be6a36b8e0b6763998aedadc8c945309c0cf609d717f25b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEHYQZIE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8ZR1IbOqlXEW0LK7ruO%2Fw2%2Bk70vqeP47y4LoAeRDV9wIhAJGZ9ASEGFHqwIt1FFoJTNq2ir%2Fu4%2FrsFlz48rSGtFivKv8DCBAQABoMNjM3NDIzMTgzODA1IgzxnVnn%2Fy2Wmh%2BtkH0q3AMkyi1lnF5fFbMa6g0CQ5aBWq8%2BFjrsYXG4Tgx0lX59nWMH5ExnSLrOEMKPgmB%2BCx9%2Fs89UcE9R8j%2FzxvM8HFY4y8lw2ZPtr%2B8IBynzNn3n877q%2BWtC5zOSe8usPd5JerG2H6fOn4uR%2BQ9mDacFOhKURwqIcdDwTXSEt4G4gguW89m%2BjsKVIKdg6nbiU5y3Iw5pQ4PgJUka5uo%2FQ4CQdrcnA9nqYEUZs1LeBNVLFlxE9ZNsE8O5A1ov8zmDZB8bmRZAc07Zum40RIDJ6txQM1kl%2FXKz9hmrC%2Fjq36E09TOxTERrzfiso744M0Z7Ovk4FEv3ukvaoVNhtuSEvzpJMRdofoJRZl5gmyo5flRrjd5JDzozzYkPEm%2BDvCLQt8WO2OA4ObUwIQofkLoKu3tslRn7uFvg7fE0gsWzwr81LILxrg6ozBkEncbMipZky5yON%2F%2B03wrlyIOx5JBrskmej24Ir5oN91w3s%2Be9QFx0TLOAxOI3naeraki93MNu1G3FNDvDWZ1flm4%2FDN8IGTt4snpDXnFSkJ2La%2F9O1S%2BeHzymZPZdUVeMFvsdk3QcZ7pggWjfYoLY%2BmTP9GOnAZMAVsUUYyR0a0fL%2FMYUXLm5Ya%2BQkpHNsh8Rs2pm56a3SzDIpM3DBjqkAe2WHN4Rh7FcFs1ia%2B%2BGjCn%2Fi8Bgif2sFt5%2BRawIe%2F%2B0tPVHgbg9iLLr2NOkpxUej5jdlUeqOvD%2BT7J2K4jcxitvHlP6jiGwlTaqfst31IpmzdWyfLt8gAWXR1skq%2FmXy8v31QAGKebq%2FFOHr1w3TbKRojses3sQNA5taxnZyaAYXMsDLVX2Mi3H9wR%2Bm4OoNqBqZuZ5Vp6gzchjay%2Bne2PrO6rD&X-Amz-Signature=e476b9219a2120f48a16a17020c0d278568fef59831c4d6d9a061d9a94553f67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEHYQZIE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8ZR1IbOqlXEW0LK7ruO%2Fw2%2Bk70vqeP47y4LoAeRDV9wIhAJGZ9ASEGFHqwIt1FFoJTNq2ir%2Fu4%2FrsFlz48rSGtFivKv8DCBAQABoMNjM3NDIzMTgzODA1IgzxnVnn%2Fy2Wmh%2BtkH0q3AMkyi1lnF5fFbMa6g0CQ5aBWq8%2BFjrsYXG4Tgx0lX59nWMH5ExnSLrOEMKPgmB%2BCx9%2Fs89UcE9R8j%2FzxvM8HFY4y8lw2ZPtr%2B8IBynzNn3n877q%2BWtC5zOSe8usPd5JerG2H6fOn4uR%2BQ9mDacFOhKURwqIcdDwTXSEt4G4gguW89m%2BjsKVIKdg6nbiU5y3Iw5pQ4PgJUka5uo%2FQ4CQdrcnA9nqYEUZs1LeBNVLFlxE9ZNsE8O5A1ov8zmDZB8bmRZAc07Zum40RIDJ6txQM1kl%2FXKz9hmrC%2Fjq36E09TOxTERrzfiso744M0Z7Ovk4FEv3ukvaoVNhtuSEvzpJMRdofoJRZl5gmyo5flRrjd5JDzozzYkPEm%2BDvCLQt8WO2OA4ObUwIQofkLoKu3tslRn7uFvg7fE0gsWzwr81LILxrg6ozBkEncbMipZky5yON%2F%2B03wrlyIOx5JBrskmej24Ir5oN91w3s%2Be9QFx0TLOAxOI3naeraki93MNu1G3FNDvDWZ1flm4%2FDN8IGTt4snpDXnFSkJ2La%2F9O1S%2BeHzymZPZdUVeMFvsdk3QcZ7pggWjfYoLY%2BmTP9GOnAZMAVsUUYyR0a0fL%2FMYUXLm5Ya%2BQkpHNsh8Rs2pm56a3SzDIpM3DBjqkAe2WHN4Rh7FcFs1ia%2B%2BGjCn%2Fi8Bgif2sFt5%2BRawIe%2F%2B0tPVHgbg9iLLr2NOkpxUej5jdlUeqOvD%2BT7J2K4jcxitvHlP6jiGwlTaqfst31IpmzdWyfLt8gAWXR1skq%2FmXy8v31QAGKebq%2FFOHr1w3TbKRojses3sQNA5taxnZyaAYXMsDLVX2Mi3H9wR%2Bm4OoNqBqZuZ5Vp6gzchjay%2Bne2PrO6rD&X-Amz-Signature=f27fae4eeaa65bedeeb611fcc096b4ea53b9fff8d38cf0f3f53a9b6ab6046459&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
