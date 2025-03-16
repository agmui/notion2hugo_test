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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647EJHYFY%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB3lUHE3i2y60ydJ5%2BDGiqTGsCwFhftvMuzti4RDOW9gIhAN7iTdBTkg5i4BnJAfkGJlcyveHEkoWEEzAXFEBWa1sbKv8DCCwQABoMNjM3NDIzMTgzODA1Igweu0a488obraAjC6gq3AMqRkO%2B9DicxzZks4Tdal%2FuzrIyW7%2Bce%2FFhGspKios16sms9t%2Bq4m3aT0Nvr2FlDLW9NfBLOwkYjkbV%2BnwTiTRiCuhzVVuPF8f%2BLlc%2FxVWbCwYSFouXAw6u2oZEbtnvaMq7%2FjTFgc1uZGtVifHD1NS%2F12eIqT9azMXMidgQRZjPFz8al5pB7YhKwCAhXrQAaEG1TyH95g3MCKiuWvBCTLKFVwR%2BkhVT0X93WdkaMxlTKc14l6G8I5e3%2BuWqrV2PhyPnPnhY8R9Eh%2Fszw%2Bcc0TREVxw1WtzzU5RFTb5mdsEzAOdtzybysHuKDqd3MmD%2BXcWgkkITbir5O9De4K6%2FhM%2BBrYq5WZhS%2FPZAX6gZtTQi%2B%2Fa%2BdEOiDJ2UjSMEYwx%2FxYox8i9s2FrkfzeIw4O9eFoAiT78l8AfA5Rprp50Z1kRTkzEHEUiuowqHw%2B6a1EG6Sxl0K1rvVjvsnsbL1L9SAwnyOh6DiXQwKx6IXq8eeQcieslIp1r3xOonms1uaPH%2BEHIXU6V9TG4vHCL0MJq7TLtTfDYDNI%2FaXjTTkfaoGnPmmY25%2FafCKnWzgioHubZEtVYdq7lpZf%2FPBPnbJZ4HmIh7rN1R6O6ypkABC9%2F1rymHR%2BGiPknaiJWjikDVjCd2Nq%2BBjqkAVUSh0LSSxBO1kE%2FoogKlcjECbtrth6Yxf2fqopYdTYKBN9vUGBTnyOqlIHn1Lp0USqtLx5TG5lO4%2BFkq%2FBV%2F8xz8rIkAi%2FuKqr0D9KCH835GnXBcMvg3qIzIQEwSeU4fDcyx1oDu%2BS0XWg1DSWSMD24GLhZpztByTh0W%2BModN75lKYk3cBC7SP45fYkBgwl%2BPjFbAbJcqo9KtsqPMp8YkUpsV%2FN&X-Amz-Signature=a24a16e59cd5d7b90bf9a1744be6dcc66c1403cb33953b6e9f62f6dc54b50cf0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647EJHYFY%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB3lUHE3i2y60ydJ5%2BDGiqTGsCwFhftvMuzti4RDOW9gIhAN7iTdBTkg5i4BnJAfkGJlcyveHEkoWEEzAXFEBWa1sbKv8DCCwQABoMNjM3NDIzMTgzODA1Igweu0a488obraAjC6gq3AMqRkO%2B9DicxzZks4Tdal%2FuzrIyW7%2Bce%2FFhGspKios16sms9t%2Bq4m3aT0Nvr2FlDLW9NfBLOwkYjkbV%2BnwTiTRiCuhzVVuPF8f%2BLlc%2FxVWbCwYSFouXAw6u2oZEbtnvaMq7%2FjTFgc1uZGtVifHD1NS%2F12eIqT9azMXMidgQRZjPFz8al5pB7YhKwCAhXrQAaEG1TyH95g3MCKiuWvBCTLKFVwR%2BkhVT0X93WdkaMxlTKc14l6G8I5e3%2BuWqrV2PhyPnPnhY8R9Eh%2Fszw%2Bcc0TREVxw1WtzzU5RFTb5mdsEzAOdtzybysHuKDqd3MmD%2BXcWgkkITbir5O9De4K6%2FhM%2BBrYq5WZhS%2FPZAX6gZtTQi%2B%2Fa%2BdEOiDJ2UjSMEYwx%2FxYox8i9s2FrkfzeIw4O9eFoAiT78l8AfA5Rprp50Z1kRTkzEHEUiuowqHw%2B6a1EG6Sxl0K1rvVjvsnsbL1L9SAwnyOh6DiXQwKx6IXq8eeQcieslIp1r3xOonms1uaPH%2BEHIXU6V9TG4vHCL0MJq7TLtTfDYDNI%2FaXjTTkfaoGnPmmY25%2FafCKnWzgioHubZEtVYdq7lpZf%2FPBPnbJZ4HmIh7rN1R6O6ypkABC9%2F1rymHR%2BGiPknaiJWjikDVjCd2Nq%2BBjqkAVUSh0LSSxBO1kE%2FoogKlcjECbtrth6Yxf2fqopYdTYKBN9vUGBTnyOqlIHn1Lp0USqtLx5TG5lO4%2BFkq%2FBV%2F8xz8rIkAi%2FuKqr0D9KCH835GnXBcMvg3qIzIQEwSeU4fDcyx1oDu%2BS0XWg1DSWSMD24GLhZpztByTh0W%2BModN75lKYk3cBC7SP45fYkBgwl%2BPjFbAbJcqo9KtsqPMp8YkUpsV%2FN&X-Amz-Signature=0bb2a8b98902dadd63487d5b4cbaf216d67483dbf1061d412ea061772a09b482&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647EJHYFY%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB3lUHE3i2y60ydJ5%2BDGiqTGsCwFhftvMuzti4RDOW9gIhAN7iTdBTkg5i4BnJAfkGJlcyveHEkoWEEzAXFEBWa1sbKv8DCCwQABoMNjM3NDIzMTgzODA1Igweu0a488obraAjC6gq3AMqRkO%2B9DicxzZks4Tdal%2FuzrIyW7%2Bce%2FFhGspKios16sms9t%2Bq4m3aT0Nvr2FlDLW9NfBLOwkYjkbV%2BnwTiTRiCuhzVVuPF8f%2BLlc%2FxVWbCwYSFouXAw6u2oZEbtnvaMq7%2FjTFgc1uZGtVifHD1NS%2F12eIqT9azMXMidgQRZjPFz8al5pB7YhKwCAhXrQAaEG1TyH95g3MCKiuWvBCTLKFVwR%2BkhVT0X93WdkaMxlTKc14l6G8I5e3%2BuWqrV2PhyPnPnhY8R9Eh%2Fszw%2Bcc0TREVxw1WtzzU5RFTb5mdsEzAOdtzybysHuKDqd3MmD%2BXcWgkkITbir5O9De4K6%2FhM%2BBrYq5WZhS%2FPZAX6gZtTQi%2B%2Fa%2BdEOiDJ2UjSMEYwx%2FxYox8i9s2FrkfzeIw4O9eFoAiT78l8AfA5Rprp50Z1kRTkzEHEUiuowqHw%2B6a1EG6Sxl0K1rvVjvsnsbL1L9SAwnyOh6DiXQwKx6IXq8eeQcieslIp1r3xOonms1uaPH%2BEHIXU6V9TG4vHCL0MJq7TLtTfDYDNI%2FaXjTTkfaoGnPmmY25%2FafCKnWzgioHubZEtVYdq7lpZf%2FPBPnbJZ4HmIh7rN1R6O6ypkABC9%2F1rymHR%2BGiPknaiJWjikDVjCd2Nq%2BBjqkAVUSh0LSSxBO1kE%2FoogKlcjECbtrth6Yxf2fqopYdTYKBN9vUGBTnyOqlIHn1Lp0USqtLx5TG5lO4%2BFkq%2FBV%2F8xz8rIkAi%2FuKqr0D9KCH835GnXBcMvg3qIzIQEwSeU4fDcyx1oDu%2BS0XWg1DSWSMD24GLhZpztByTh0W%2BModN75lKYk3cBC7SP45fYkBgwl%2BPjFbAbJcqo9KtsqPMp8YkUpsV%2FN&X-Amz-Signature=e389e9e3738c6ce75163d702104eeee1207e8658d55c90438f08e30a1383568f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647EJHYFY%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB3lUHE3i2y60ydJ5%2BDGiqTGsCwFhftvMuzti4RDOW9gIhAN7iTdBTkg5i4BnJAfkGJlcyveHEkoWEEzAXFEBWa1sbKv8DCCwQABoMNjM3NDIzMTgzODA1Igweu0a488obraAjC6gq3AMqRkO%2B9DicxzZks4Tdal%2FuzrIyW7%2Bce%2FFhGspKios16sms9t%2Bq4m3aT0Nvr2FlDLW9NfBLOwkYjkbV%2BnwTiTRiCuhzVVuPF8f%2BLlc%2FxVWbCwYSFouXAw6u2oZEbtnvaMq7%2FjTFgc1uZGtVifHD1NS%2F12eIqT9azMXMidgQRZjPFz8al5pB7YhKwCAhXrQAaEG1TyH95g3MCKiuWvBCTLKFVwR%2BkhVT0X93WdkaMxlTKc14l6G8I5e3%2BuWqrV2PhyPnPnhY8R9Eh%2Fszw%2Bcc0TREVxw1WtzzU5RFTb5mdsEzAOdtzybysHuKDqd3MmD%2BXcWgkkITbir5O9De4K6%2FhM%2BBrYq5WZhS%2FPZAX6gZtTQi%2B%2Fa%2BdEOiDJ2UjSMEYwx%2FxYox8i9s2FrkfzeIw4O9eFoAiT78l8AfA5Rprp50Z1kRTkzEHEUiuowqHw%2B6a1EG6Sxl0K1rvVjvsnsbL1L9SAwnyOh6DiXQwKx6IXq8eeQcieslIp1r3xOonms1uaPH%2BEHIXU6V9TG4vHCL0MJq7TLtTfDYDNI%2FaXjTTkfaoGnPmmY25%2FafCKnWzgioHubZEtVYdq7lpZf%2FPBPnbJZ4HmIh7rN1R6O6ypkABC9%2F1rymHR%2BGiPknaiJWjikDVjCd2Nq%2BBjqkAVUSh0LSSxBO1kE%2FoogKlcjECbtrth6Yxf2fqopYdTYKBN9vUGBTnyOqlIHn1Lp0USqtLx5TG5lO4%2BFkq%2FBV%2F8xz8rIkAi%2FuKqr0D9KCH835GnXBcMvg3qIzIQEwSeU4fDcyx1oDu%2BS0XWg1DSWSMD24GLhZpztByTh0W%2BModN75lKYk3cBC7SP45fYkBgwl%2BPjFbAbJcqo9KtsqPMp8YkUpsV%2FN&X-Amz-Signature=4fbf39c7abcc09b7335c172e625ed9ffed10d747042d273ecd8be3b740ac415e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647EJHYFY%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB3lUHE3i2y60ydJ5%2BDGiqTGsCwFhftvMuzti4RDOW9gIhAN7iTdBTkg5i4BnJAfkGJlcyveHEkoWEEzAXFEBWa1sbKv8DCCwQABoMNjM3NDIzMTgzODA1Igweu0a488obraAjC6gq3AMqRkO%2B9DicxzZks4Tdal%2FuzrIyW7%2Bce%2FFhGspKios16sms9t%2Bq4m3aT0Nvr2FlDLW9NfBLOwkYjkbV%2BnwTiTRiCuhzVVuPF8f%2BLlc%2FxVWbCwYSFouXAw6u2oZEbtnvaMq7%2FjTFgc1uZGtVifHD1NS%2F12eIqT9azMXMidgQRZjPFz8al5pB7YhKwCAhXrQAaEG1TyH95g3MCKiuWvBCTLKFVwR%2BkhVT0X93WdkaMxlTKc14l6G8I5e3%2BuWqrV2PhyPnPnhY8R9Eh%2Fszw%2Bcc0TREVxw1WtzzU5RFTb5mdsEzAOdtzybysHuKDqd3MmD%2BXcWgkkITbir5O9De4K6%2FhM%2BBrYq5WZhS%2FPZAX6gZtTQi%2B%2Fa%2BdEOiDJ2UjSMEYwx%2FxYox8i9s2FrkfzeIw4O9eFoAiT78l8AfA5Rprp50Z1kRTkzEHEUiuowqHw%2B6a1EG6Sxl0K1rvVjvsnsbL1L9SAwnyOh6DiXQwKx6IXq8eeQcieslIp1r3xOonms1uaPH%2BEHIXU6V9TG4vHCL0MJq7TLtTfDYDNI%2FaXjTTkfaoGnPmmY25%2FafCKnWzgioHubZEtVYdq7lpZf%2FPBPnbJZ4HmIh7rN1R6O6ypkABC9%2F1rymHR%2BGiPknaiJWjikDVjCd2Nq%2BBjqkAVUSh0LSSxBO1kE%2FoogKlcjECbtrth6Yxf2fqopYdTYKBN9vUGBTnyOqlIHn1Lp0USqtLx5TG5lO4%2BFkq%2FBV%2F8xz8rIkAi%2FuKqr0D9KCH835GnXBcMvg3qIzIQEwSeU4fDcyx1oDu%2BS0XWg1DSWSMD24GLhZpztByTh0W%2BModN75lKYk3cBC7SP45fYkBgwl%2BPjFbAbJcqo9KtsqPMp8YkUpsV%2FN&X-Amz-Signature=b7fa43333e06125dc39e7f93b20aafd4068f92e9973925b5b214ff398637124d&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
