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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGSELT4W%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRCFnDxg0BGJ4xfkNPjZFNWTHgpgj0V83PFRYuW7rtZAiBs1HBl5xJG1eL3n%2Bu837DAH%2Bp7uBp4gvoCI7Mp5p5YayqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIknfUqo9%2BCiHjdPVKtwDI6x8ySfZo0IJWhXo9aNTYjttW3azUv%2B7l7JsXIHPLtoqflLtzqP9RVPtnCDD3j3qSMBuj%2FZfrWPK0JrfZNewdAhslXuB64Ooi8pJuYbM56J6KKYEhmEZ4FgVRFoxNbtsWYQQ1eimhKzH80WS5mxTcj9Qpq1naY08FZ58GDvEbQYolOIDFUagXrnojFRZdS0DhXmc3%2BeDNzg771pbWa9M2GWH%2Fnff%2BJPK7cAMpkwZF8jrDAXz9WEhHQfHp4owsANLp5GYUF%2FlBpP6fUGAN53A81mHhtFXBo8TAOEbPNnBwOLAec4OEBQOyWCE7JSdcQyXUDySnZTO69%2FWaAj5Ptj95%2FFPb5WyB7Aq2S1CL%2BlMxzIBID4W1KQJdKBqzxsFN6EidXNeOJakqNchPHY8mGakRErLIoHsk6kuxkr%2BucQ1WcXBfoQipb5k75W7Je522TB9d49ajzBXpRtNzFafLxyqPQ%2Fs5cuptKhf%2FNqSNJOiMKkkpIY9CmK05Vp3nnkblGNlOZ8ERYAdhOSrXe7RQifH%2B6W%2FG0j51k1WswDRFqPTDFGF9zADSfWYi97C6kV1B2In%2FubEZIXF46QPLp1PJjhSXiXB5KHHYJsqoj6HwHX4yVs2jcU1bSn%2FhRyv83MwndebwgY6pgF%2B3u8ZTXnoanTs%2Fu307XX0Q%2FWyCi5FIk2c9lJn15ttsKuLlkAatX%2Bw6uA3BNOBMG%2B9xMDTMhgBc5eJ9rZPVXoXRB5tMKsWhX%2BLfEO6D3ZBbRB4FDQwicV83SQxF19l3THCSJGiX4ONsJS5t%2FhySCcPxnque7FWfi3K5fRmvl%2FmO3ksTX86cPIKUKzogi2edefykYh%2FHlnXRazKQYeA33cYJWKuL2lt&X-Amz-Signature=a4fe36ed35c18dc257b63b0b6d8041192a6f08dad523e5d25bbba57d760beda4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGSELT4W%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRCFnDxg0BGJ4xfkNPjZFNWTHgpgj0V83PFRYuW7rtZAiBs1HBl5xJG1eL3n%2Bu837DAH%2Bp7uBp4gvoCI7Mp5p5YayqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIknfUqo9%2BCiHjdPVKtwDI6x8ySfZo0IJWhXo9aNTYjttW3azUv%2B7l7JsXIHPLtoqflLtzqP9RVPtnCDD3j3qSMBuj%2FZfrWPK0JrfZNewdAhslXuB64Ooi8pJuYbM56J6KKYEhmEZ4FgVRFoxNbtsWYQQ1eimhKzH80WS5mxTcj9Qpq1naY08FZ58GDvEbQYolOIDFUagXrnojFRZdS0DhXmc3%2BeDNzg771pbWa9M2GWH%2Fnff%2BJPK7cAMpkwZF8jrDAXz9WEhHQfHp4owsANLp5GYUF%2FlBpP6fUGAN53A81mHhtFXBo8TAOEbPNnBwOLAec4OEBQOyWCE7JSdcQyXUDySnZTO69%2FWaAj5Ptj95%2FFPb5WyB7Aq2S1CL%2BlMxzIBID4W1KQJdKBqzxsFN6EidXNeOJakqNchPHY8mGakRErLIoHsk6kuxkr%2BucQ1WcXBfoQipb5k75W7Je522TB9d49ajzBXpRtNzFafLxyqPQ%2Fs5cuptKhf%2FNqSNJOiMKkkpIY9CmK05Vp3nnkblGNlOZ8ERYAdhOSrXe7RQifH%2B6W%2FG0j51k1WswDRFqPTDFGF9zADSfWYi97C6kV1B2In%2FubEZIXF46QPLp1PJjhSXiXB5KHHYJsqoj6HwHX4yVs2jcU1bSn%2FhRyv83MwndebwgY6pgF%2B3u8ZTXnoanTs%2Fu307XX0Q%2FWyCi5FIk2c9lJn15ttsKuLlkAatX%2Bw6uA3BNOBMG%2B9xMDTMhgBc5eJ9rZPVXoXRB5tMKsWhX%2BLfEO6D3ZBbRB4FDQwicV83SQxF19l3THCSJGiX4ONsJS5t%2FhySCcPxnque7FWfi3K5fRmvl%2FmO3ksTX86cPIKUKzogi2edefykYh%2FHlnXRazKQYeA33cYJWKuL2lt&X-Amz-Signature=18bf1f87e2940d8cc3b0ed26caf8fb1dd12adc3f1d54fd35ee3cc9691205f7ed&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGSELT4W%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRCFnDxg0BGJ4xfkNPjZFNWTHgpgj0V83PFRYuW7rtZAiBs1HBl5xJG1eL3n%2Bu837DAH%2Bp7uBp4gvoCI7Mp5p5YayqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIknfUqo9%2BCiHjdPVKtwDI6x8ySfZo0IJWhXo9aNTYjttW3azUv%2B7l7JsXIHPLtoqflLtzqP9RVPtnCDD3j3qSMBuj%2FZfrWPK0JrfZNewdAhslXuB64Ooi8pJuYbM56J6KKYEhmEZ4FgVRFoxNbtsWYQQ1eimhKzH80WS5mxTcj9Qpq1naY08FZ58GDvEbQYolOIDFUagXrnojFRZdS0DhXmc3%2BeDNzg771pbWa9M2GWH%2Fnff%2BJPK7cAMpkwZF8jrDAXz9WEhHQfHp4owsANLp5GYUF%2FlBpP6fUGAN53A81mHhtFXBo8TAOEbPNnBwOLAec4OEBQOyWCE7JSdcQyXUDySnZTO69%2FWaAj5Ptj95%2FFPb5WyB7Aq2S1CL%2BlMxzIBID4W1KQJdKBqzxsFN6EidXNeOJakqNchPHY8mGakRErLIoHsk6kuxkr%2BucQ1WcXBfoQipb5k75W7Je522TB9d49ajzBXpRtNzFafLxyqPQ%2Fs5cuptKhf%2FNqSNJOiMKkkpIY9CmK05Vp3nnkblGNlOZ8ERYAdhOSrXe7RQifH%2B6W%2FG0j51k1WswDRFqPTDFGF9zADSfWYi97C6kV1B2In%2FubEZIXF46QPLp1PJjhSXiXB5KHHYJsqoj6HwHX4yVs2jcU1bSn%2FhRyv83MwndebwgY6pgF%2B3u8ZTXnoanTs%2Fu307XX0Q%2FWyCi5FIk2c9lJn15ttsKuLlkAatX%2Bw6uA3BNOBMG%2B9xMDTMhgBc5eJ9rZPVXoXRB5tMKsWhX%2BLfEO6D3ZBbRB4FDQwicV83SQxF19l3THCSJGiX4ONsJS5t%2FhySCcPxnque7FWfi3K5fRmvl%2FmO3ksTX86cPIKUKzogi2edefykYh%2FHlnXRazKQYeA33cYJWKuL2lt&X-Amz-Signature=a35d292946dbd591dc3062db33027b9fb15803deee7dad28e06b26846dbebe9e&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGSELT4W%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRCFnDxg0BGJ4xfkNPjZFNWTHgpgj0V83PFRYuW7rtZAiBs1HBl5xJG1eL3n%2Bu837DAH%2Bp7uBp4gvoCI7Mp5p5YayqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIknfUqo9%2BCiHjdPVKtwDI6x8ySfZo0IJWhXo9aNTYjttW3azUv%2B7l7JsXIHPLtoqflLtzqP9RVPtnCDD3j3qSMBuj%2FZfrWPK0JrfZNewdAhslXuB64Ooi8pJuYbM56J6KKYEhmEZ4FgVRFoxNbtsWYQQ1eimhKzH80WS5mxTcj9Qpq1naY08FZ58GDvEbQYolOIDFUagXrnojFRZdS0DhXmc3%2BeDNzg771pbWa9M2GWH%2Fnff%2BJPK7cAMpkwZF8jrDAXz9WEhHQfHp4owsANLp5GYUF%2FlBpP6fUGAN53A81mHhtFXBo8TAOEbPNnBwOLAec4OEBQOyWCE7JSdcQyXUDySnZTO69%2FWaAj5Ptj95%2FFPb5WyB7Aq2S1CL%2BlMxzIBID4W1KQJdKBqzxsFN6EidXNeOJakqNchPHY8mGakRErLIoHsk6kuxkr%2BucQ1WcXBfoQipb5k75W7Je522TB9d49ajzBXpRtNzFafLxyqPQ%2Fs5cuptKhf%2FNqSNJOiMKkkpIY9CmK05Vp3nnkblGNlOZ8ERYAdhOSrXe7RQifH%2B6W%2FG0j51k1WswDRFqPTDFGF9zADSfWYi97C6kV1B2In%2FubEZIXF46QPLp1PJjhSXiXB5KHHYJsqoj6HwHX4yVs2jcU1bSn%2FhRyv83MwndebwgY6pgF%2B3u8ZTXnoanTs%2Fu307XX0Q%2FWyCi5FIk2c9lJn15ttsKuLlkAatX%2Bw6uA3BNOBMG%2B9xMDTMhgBc5eJ9rZPVXoXRB5tMKsWhX%2BLfEO6D3ZBbRB4FDQwicV83SQxF19l3THCSJGiX4ONsJS5t%2FhySCcPxnque7FWfi3K5fRmvl%2FmO3ksTX86cPIKUKzogi2edefykYh%2FHlnXRazKQYeA33cYJWKuL2lt&X-Amz-Signature=a29ebb57d64c896d2ef0aff25e3df32eeffb039719e1017fd73b4444a21373b2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGSELT4W%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRCFnDxg0BGJ4xfkNPjZFNWTHgpgj0V83PFRYuW7rtZAiBs1HBl5xJG1eL3n%2Bu837DAH%2Bp7uBp4gvoCI7Mp5p5YayqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIknfUqo9%2BCiHjdPVKtwDI6x8ySfZo0IJWhXo9aNTYjttW3azUv%2B7l7JsXIHPLtoqflLtzqP9RVPtnCDD3j3qSMBuj%2FZfrWPK0JrfZNewdAhslXuB64Ooi8pJuYbM56J6KKYEhmEZ4FgVRFoxNbtsWYQQ1eimhKzH80WS5mxTcj9Qpq1naY08FZ58GDvEbQYolOIDFUagXrnojFRZdS0DhXmc3%2BeDNzg771pbWa9M2GWH%2Fnff%2BJPK7cAMpkwZF8jrDAXz9WEhHQfHp4owsANLp5GYUF%2FlBpP6fUGAN53A81mHhtFXBo8TAOEbPNnBwOLAec4OEBQOyWCE7JSdcQyXUDySnZTO69%2FWaAj5Ptj95%2FFPb5WyB7Aq2S1CL%2BlMxzIBID4W1KQJdKBqzxsFN6EidXNeOJakqNchPHY8mGakRErLIoHsk6kuxkr%2BucQ1WcXBfoQipb5k75W7Je522TB9d49ajzBXpRtNzFafLxyqPQ%2Fs5cuptKhf%2FNqSNJOiMKkkpIY9CmK05Vp3nnkblGNlOZ8ERYAdhOSrXe7RQifH%2B6W%2FG0j51k1WswDRFqPTDFGF9zADSfWYi97C6kV1B2In%2FubEZIXF46QPLp1PJjhSXiXB5KHHYJsqoj6HwHX4yVs2jcU1bSn%2FhRyv83MwndebwgY6pgF%2B3u8ZTXnoanTs%2Fu307XX0Q%2FWyCi5FIk2c9lJn15ttsKuLlkAatX%2Bw6uA3BNOBMG%2B9xMDTMhgBc5eJ9rZPVXoXRB5tMKsWhX%2BLfEO6D3ZBbRB4FDQwicV83SQxF19l3THCSJGiX4ONsJS5t%2FhySCcPxnque7FWfi3K5fRmvl%2FmO3ksTX86cPIKUKzogi2edefykYh%2FHlnXRazKQYeA33cYJWKuL2lt&X-Amz-Signature=f5e49d28e0991d4dc72ccf739c593e59207578eaccf9cf02bd36985609386e1e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
