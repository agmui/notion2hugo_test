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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WQDP5A4%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjowUeIJQm5PhQtkIqNbRkwbT%2FtVKxotJPWO8XZ64K6AiB%2F%2BgrudWUOdIHSXpSoBMQwQPt7WISz5qDdJkp5lo3lGyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMbMFkWmK%2BQbPlu3I7KtwD1aoV%2FILAEdCBpaZvCbIE1XS8xOWTV38ZAZ6wQnqXWx6muDcvozNi1hCBn8JihwMI%2FY%2BBXgpGq5R5kz8GE93XG31F2LYEXswFUfDIL6yfGEmT%2FoiO%2Fj8y1TUZIuncbaDM7mB7K6kVVAOzgW5hL80i2lZjT6LzloKJVZjeu0m19idYvLbFb47hZ5xe0JY1tTtkBEWK3dtovEL97kSOXOxNvo%2Fj6KSHXqVZYAL7aVC7%2BJYxysnYMVrTLE%2BlitilzWbep9SlYVmSKZZiw80CALfySxNyLUD3pEFiK2GH7hWeTPt9MlG3ZHN4ReQ4Gw1P%2Fi1nik8m7UObfriWBjVrpd81ijfVquHajV%2FGE5hGovHoQR7OFNRgHTF44Ad2hDRLY%2BN3Xdbx%2Bhe48i5MW4oJFYEnG47SrojXYa93tZQQvWGMjF2VIYY8BvINe0wym6bSKqVGbB6nuOzQiJs21owO1To0c9FUNlA3UdnwtQRopRpLtaGVWNHPrdpPz273r5OANR%2Fwyzpy3eTXZLpl81iDFI3UpeSPVKAgBeHxuNbywOQF0BHW3zirVz5yq4kiBNPBGK19mMh7dERe2Telu5gPbmw39UrVpsdH%2BxiMbM966zQrzTruU5RX4tdbLYW8H5gwxbrOvwY6pgG71ANgFADiw%2BN6rKlz9OoMNrghb0Y5llmNd3brS8vx58U4Mi8q%2Fe%2BZEEajoNHTQTQ%2B1ed41317fhNYS7C8edgjD3dloWfafhZAd3aExKm0CdO7f%2B5tzz6FnLvGSzZPeGtmCWGCIw3U8Mdpse84I3YiWMgdudrQjGXKMONWARnvwFKDRU5sJ%2BCslzd2to8QV2N9WYADNbevBbEQIJaqNbyCxeyRsC3a&X-Amz-Signature=675c77553cc45abc5fa57703c2b85c50aa4c3441518ecdc85ddfc276da6ef891&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WQDP5A4%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjowUeIJQm5PhQtkIqNbRkwbT%2FtVKxotJPWO8XZ64K6AiB%2F%2BgrudWUOdIHSXpSoBMQwQPt7WISz5qDdJkp5lo3lGyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMbMFkWmK%2BQbPlu3I7KtwD1aoV%2FILAEdCBpaZvCbIE1XS8xOWTV38ZAZ6wQnqXWx6muDcvozNi1hCBn8JihwMI%2FY%2BBXgpGq5R5kz8GE93XG31F2LYEXswFUfDIL6yfGEmT%2FoiO%2Fj8y1TUZIuncbaDM7mB7K6kVVAOzgW5hL80i2lZjT6LzloKJVZjeu0m19idYvLbFb47hZ5xe0JY1tTtkBEWK3dtovEL97kSOXOxNvo%2Fj6KSHXqVZYAL7aVC7%2BJYxysnYMVrTLE%2BlitilzWbep9SlYVmSKZZiw80CALfySxNyLUD3pEFiK2GH7hWeTPt9MlG3ZHN4ReQ4Gw1P%2Fi1nik8m7UObfriWBjVrpd81ijfVquHajV%2FGE5hGovHoQR7OFNRgHTF44Ad2hDRLY%2BN3Xdbx%2Bhe48i5MW4oJFYEnG47SrojXYa93tZQQvWGMjF2VIYY8BvINe0wym6bSKqVGbB6nuOzQiJs21owO1To0c9FUNlA3UdnwtQRopRpLtaGVWNHPrdpPz273r5OANR%2Fwyzpy3eTXZLpl81iDFI3UpeSPVKAgBeHxuNbywOQF0BHW3zirVz5yq4kiBNPBGK19mMh7dERe2Telu5gPbmw39UrVpsdH%2BxiMbM966zQrzTruU5RX4tdbLYW8H5gwxbrOvwY6pgG71ANgFADiw%2BN6rKlz9OoMNrghb0Y5llmNd3brS8vx58U4Mi8q%2Fe%2BZEEajoNHTQTQ%2B1ed41317fhNYS7C8edgjD3dloWfafhZAd3aExKm0CdO7f%2B5tzz6FnLvGSzZPeGtmCWGCIw3U8Mdpse84I3YiWMgdudrQjGXKMONWARnvwFKDRU5sJ%2BCslzd2to8QV2N9WYADNbevBbEQIJaqNbyCxeyRsC3a&X-Amz-Signature=422dc9cf71f6d5e40edd3d59079da0976e73b8417e598352a1399d0ea0b85c81&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WQDP5A4%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjowUeIJQm5PhQtkIqNbRkwbT%2FtVKxotJPWO8XZ64K6AiB%2F%2BgrudWUOdIHSXpSoBMQwQPt7WISz5qDdJkp5lo3lGyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMbMFkWmK%2BQbPlu3I7KtwD1aoV%2FILAEdCBpaZvCbIE1XS8xOWTV38ZAZ6wQnqXWx6muDcvozNi1hCBn8JihwMI%2FY%2BBXgpGq5R5kz8GE93XG31F2LYEXswFUfDIL6yfGEmT%2FoiO%2Fj8y1TUZIuncbaDM7mB7K6kVVAOzgW5hL80i2lZjT6LzloKJVZjeu0m19idYvLbFb47hZ5xe0JY1tTtkBEWK3dtovEL97kSOXOxNvo%2Fj6KSHXqVZYAL7aVC7%2BJYxysnYMVrTLE%2BlitilzWbep9SlYVmSKZZiw80CALfySxNyLUD3pEFiK2GH7hWeTPt9MlG3ZHN4ReQ4Gw1P%2Fi1nik8m7UObfriWBjVrpd81ijfVquHajV%2FGE5hGovHoQR7OFNRgHTF44Ad2hDRLY%2BN3Xdbx%2Bhe48i5MW4oJFYEnG47SrojXYa93tZQQvWGMjF2VIYY8BvINe0wym6bSKqVGbB6nuOzQiJs21owO1To0c9FUNlA3UdnwtQRopRpLtaGVWNHPrdpPz273r5OANR%2Fwyzpy3eTXZLpl81iDFI3UpeSPVKAgBeHxuNbywOQF0BHW3zirVz5yq4kiBNPBGK19mMh7dERe2Telu5gPbmw39UrVpsdH%2BxiMbM966zQrzTruU5RX4tdbLYW8H5gwxbrOvwY6pgG71ANgFADiw%2BN6rKlz9OoMNrghb0Y5llmNd3brS8vx58U4Mi8q%2Fe%2BZEEajoNHTQTQ%2B1ed41317fhNYS7C8edgjD3dloWfafhZAd3aExKm0CdO7f%2B5tzz6FnLvGSzZPeGtmCWGCIw3U8Mdpse84I3YiWMgdudrQjGXKMONWARnvwFKDRU5sJ%2BCslzd2to8QV2N9WYADNbevBbEQIJaqNbyCxeyRsC3a&X-Amz-Signature=d56cf920c3a951393759eb5e787eb0dbfada440b2d3c2d08525f2c172d1207b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WQDP5A4%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjowUeIJQm5PhQtkIqNbRkwbT%2FtVKxotJPWO8XZ64K6AiB%2F%2BgrudWUOdIHSXpSoBMQwQPt7WISz5qDdJkp5lo3lGyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMbMFkWmK%2BQbPlu3I7KtwD1aoV%2FILAEdCBpaZvCbIE1XS8xOWTV38ZAZ6wQnqXWx6muDcvozNi1hCBn8JihwMI%2FY%2BBXgpGq5R5kz8GE93XG31F2LYEXswFUfDIL6yfGEmT%2FoiO%2Fj8y1TUZIuncbaDM7mB7K6kVVAOzgW5hL80i2lZjT6LzloKJVZjeu0m19idYvLbFb47hZ5xe0JY1tTtkBEWK3dtovEL97kSOXOxNvo%2Fj6KSHXqVZYAL7aVC7%2BJYxysnYMVrTLE%2BlitilzWbep9SlYVmSKZZiw80CALfySxNyLUD3pEFiK2GH7hWeTPt9MlG3ZHN4ReQ4Gw1P%2Fi1nik8m7UObfriWBjVrpd81ijfVquHajV%2FGE5hGovHoQR7OFNRgHTF44Ad2hDRLY%2BN3Xdbx%2Bhe48i5MW4oJFYEnG47SrojXYa93tZQQvWGMjF2VIYY8BvINe0wym6bSKqVGbB6nuOzQiJs21owO1To0c9FUNlA3UdnwtQRopRpLtaGVWNHPrdpPz273r5OANR%2Fwyzpy3eTXZLpl81iDFI3UpeSPVKAgBeHxuNbywOQF0BHW3zirVz5yq4kiBNPBGK19mMh7dERe2Telu5gPbmw39UrVpsdH%2BxiMbM966zQrzTruU5RX4tdbLYW8H5gwxbrOvwY6pgG71ANgFADiw%2BN6rKlz9OoMNrghb0Y5llmNd3brS8vx58U4Mi8q%2Fe%2BZEEajoNHTQTQ%2B1ed41317fhNYS7C8edgjD3dloWfafhZAd3aExKm0CdO7f%2B5tzz6FnLvGSzZPeGtmCWGCIw3U8Mdpse84I3YiWMgdudrQjGXKMONWARnvwFKDRU5sJ%2BCslzd2to8QV2N9WYADNbevBbEQIJaqNbyCxeyRsC3a&X-Amz-Signature=ec6d659405e707787ae0c1d6860b900c2163171dba3ef8f90705468034d6f102&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WQDP5A4%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjowUeIJQm5PhQtkIqNbRkwbT%2FtVKxotJPWO8XZ64K6AiB%2F%2BgrudWUOdIHSXpSoBMQwQPt7WISz5qDdJkp5lo3lGyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMbMFkWmK%2BQbPlu3I7KtwD1aoV%2FILAEdCBpaZvCbIE1XS8xOWTV38ZAZ6wQnqXWx6muDcvozNi1hCBn8JihwMI%2FY%2BBXgpGq5R5kz8GE93XG31F2LYEXswFUfDIL6yfGEmT%2FoiO%2Fj8y1TUZIuncbaDM7mB7K6kVVAOzgW5hL80i2lZjT6LzloKJVZjeu0m19idYvLbFb47hZ5xe0JY1tTtkBEWK3dtovEL97kSOXOxNvo%2Fj6KSHXqVZYAL7aVC7%2BJYxysnYMVrTLE%2BlitilzWbep9SlYVmSKZZiw80CALfySxNyLUD3pEFiK2GH7hWeTPt9MlG3ZHN4ReQ4Gw1P%2Fi1nik8m7UObfriWBjVrpd81ijfVquHajV%2FGE5hGovHoQR7OFNRgHTF44Ad2hDRLY%2BN3Xdbx%2Bhe48i5MW4oJFYEnG47SrojXYa93tZQQvWGMjF2VIYY8BvINe0wym6bSKqVGbB6nuOzQiJs21owO1To0c9FUNlA3UdnwtQRopRpLtaGVWNHPrdpPz273r5OANR%2Fwyzpy3eTXZLpl81iDFI3UpeSPVKAgBeHxuNbywOQF0BHW3zirVz5yq4kiBNPBGK19mMh7dERe2Telu5gPbmw39UrVpsdH%2BxiMbM966zQrzTruU5RX4tdbLYW8H5gwxbrOvwY6pgG71ANgFADiw%2BN6rKlz9OoMNrghb0Y5llmNd3brS8vx58U4Mi8q%2Fe%2BZEEajoNHTQTQ%2B1ed41317fhNYS7C8edgjD3dloWfafhZAd3aExKm0CdO7f%2B5tzz6FnLvGSzZPeGtmCWGCIw3U8Mdpse84I3YiWMgdudrQjGXKMONWARnvwFKDRU5sJ%2BCslzd2to8QV2N9WYADNbevBbEQIJaqNbyCxeyRsC3a&X-Amz-Signature=53c37c7417e0b0499b72bc64225c9db7850cd9f80dd1be237e2084ba757bb68d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
