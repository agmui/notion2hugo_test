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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPMXFFD%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGsz%2Fu1gta0Xbh%2BGMG9DoqSVP4Jbu9cDY%2FaqWy81%2BIcBAiA6mk5Kmru%2FP74UGqcH0PDCXB%2F3cakMIMERLsQE6r0TYyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMPF3cmxayNcps71yMKtwDANWQMqRUgad1F5ByZijnKd7K8rg%2Bpz9oG%2FX7tv%2BB10ZBuBotufCDKsS5pcyxc%2B7S1wI6vl81RYtAuPWoWNH4lvyBQvSDa8%2F86cyHX%2BcHoWjjFCY%2F0PQmdXhi9%2BvQy%2F%2FudTyWUr4TJRGI7lsQcxDwQ9DX5v7cbFd7mbVZmGcZgnA7Mp4rkSXDZh01LEcxdZRgYS8iuWWWNzxVIEsDQHLWduisR03KdUyXOdjP7znSBJ6z%2FkBMEGSkInmCQYm3iN3PAv2Q8kxGGBPJqBh%2BLrAFAKUfNKukYuUZ5ckr%2Bjerye4jpIiIbKewoUTnv%2FrEb40eUVHcn6gZtZccaVTP1g5L9vA%2B%2BhAOP%2FsZU5opFVntlzI20hCgmR3SwgO4C79msNW8inRKTICmpcUn7Tojk3WE4QtRIzVKFtMXvDBxTTOfZb9i7pjRAqfWqYTI1oyp825jw4CWTD%2Fh7mVQFnwgEeGKv1Fd4WJXsn8lh8TS9NbocMJZ2MxTQR14ahgz4NsBX4dI1w%2BBwpnAeGEeX54mDvsJ5esyoOohuYBFLpZAP%2FpW9%2FgDC32jxqQ5T2YEgQe3MaRaLKLvhV2%2FKYkYO0O2GgsevNSdD8WGdnR3Itpi9aD2pPhJU0LTuvsEYK3aBmAw9%2BeowAY6pgElCsAIHHiPyYTMP7mtDY0QVtZsDdPIDvEhNks91PNQjuktykA0lncQlvUY1AvsKh0V42qainILICujG88Eoh3Ze4U61%2Bs6IkKWBDVs3LKhDYCYFXTXoj4AtcCaG1E9bDskoTklpmGoDgFtdI4iwnWx8S%2FUfU0SEqEcyma%2BuNn8d4RXE7OqOUCEAxMlx7zI1OGE4ZZQvFK5T5Z4CJl1xVxxi9BabAdB&X-Amz-Signature=557b186fe1c563a9217d738b1ad35aabd119f583bc1da6ab2bb7e445b117a0e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPMXFFD%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGsz%2Fu1gta0Xbh%2BGMG9DoqSVP4Jbu9cDY%2FaqWy81%2BIcBAiA6mk5Kmru%2FP74UGqcH0PDCXB%2F3cakMIMERLsQE6r0TYyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMPF3cmxayNcps71yMKtwDANWQMqRUgad1F5ByZijnKd7K8rg%2Bpz9oG%2FX7tv%2BB10ZBuBotufCDKsS5pcyxc%2B7S1wI6vl81RYtAuPWoWNH4lvyBQvSDa8%2F86cyHX%2BcHoWjjFCY%2F0PQmdXhi9%2BvQy%2F%2FudTyWUr4TJRGI7lsQcxDwQ9DX5v7cbFd7mbVZmGcZgnA7Mp4rkSXDZh01LEcxdZRgYS8iuWWWNzxVIEsDQHLWduisR03KdUyXOdjP7znSBJ6z%2FkBMEGSkInmCQYm3iN3PAv2Q8kxGGBPJqBh%2BLrAFAKUfNKukYuUZ5ckr%2Bjerye4jpIiIbKewoUTnv%2FrEb40eUVHcn6gZtZccaVTP1g5L9vA%2B%2BhAOP%2FsZU5opFVntlzI20hCgmR3SwgO4C79msNW8inRKTICmpcUn7Tojk3WE4QtRIzVKFtMXvDBxTTOfZb9i7pjRAqfWqYTI1oyp825jw4CWTD%2Fh7mVQFnwgEeGKv1Fd4WJXsn8lh8TS9NbocMJZ2MxTQR14ahgz4NsBX4dI1w%2BBwpnAeGEeX54mDvsJ5esyoOohuYBFLpZAP%2FpW9%2FgDC32jxqQ5T2YEgQe3MaRaLKLvhV2%2FKYkYO0O2GgsevNSdD8WGdnR3Itpi9aD2pPhJU0LTuvsEYK3aBmAw9%2BeowAY6pgElCsAIHHiPyYTMP7mtDY0QVtZsDdPIDvEhNks91PNQjuktykA0lncQlvUY1AvsKh0V42qainILICujG88Eoh3Ze4U61%2Bs6IkKWBDVs3LKhDYCYFXTXoj4AtcCaG1E9bDskoTklpmGoDgFtdI4iwnWx8S%2FUfU0SEqEcyma%2BuNn8d4RXE7OqOUCEAxMlx7zI1OGE4ZZQvFK5T5Z4CJl1xVxxi9BabAdB&X-Amz-Signature=2805f53a5824a5c9cd462d2f5717aa4c82fa2f55e606acb352ebe806756e23bf&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPMXFFD%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGsz%2Fu1gta0Xbh%2BGMG9DoqSVP4Jbu9cDY%2FaqWy81%2BIcBAiA6mk5Kmru%2FP74UGqcH0PDCXB%2F3cakMIMERLsQE6r0TYyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMPF3cmxayNcps71yMKtwDANWQMqRUgad1F5ByZijnKd7K8rg%2Bpz9oG%2FX7tv%2BB10ZBuBotufCDKsS5pcyxc%2B7S1wI6vl81RYtAuPWoWNH4lvyBQvSDa8%2F86cyHX%2BcHoWjjFCY%2F0PQmdXhi9%2BvQy%2F%2FudTyWUr4TJRGI7lsQcxDwQ9DX5v7cbFd7mbVZmGcZgnA7Mp4rkSXDZh01LEcxdZRgYS8iuWWWNzxVIEsDQHLWduisR03KdUyXOdjP7znSBJ6z%2FkBMEGSkInmCQYm3iN3PAv2Q8kxGGBPJqBh%2BLrAFAKUfNKukYuUZ5ckr%2Bjerye4jpIiIbKewoUTnv%2FrEb40eUVHcn6gZtZccaVTP1g5L9vA%2B%2BhAOP%2FsZU5opFVntlzI20hCgmR3SwgO4C79msNW8inRKTICmpcUn7Tojk3WE4QtRIzVKFtMXvDBxTTOfZb9i7pjRAqfWqYTI1oyp825jw4CWTD%2Fh7mVQFnwgEeGKv1Fd4WJXsn8lh8TS9NbocMJZ2MxTQR14ahgz4NsBX4dI1w%2BBwpnAeGEeX54mDvsJ5esyoOohuYBFLpZAP%2FpW9%2FgDC32jxqQ5T2YEgQe3MaRaLKLvhV2%2FKYkYO0O2GgsevNSdD8WGdnR3Itpi9aD2pPhJU0LTuvsEYK3aBmAw9%2BeowAY6pgElCsAIHHiPyYTMP7mtDY0QVtZsDdPIDvEhNks91PNQjuktykA0lncQlvUY1AvsKh0V42qainILICujG88Eoh3Ze4U61%2Bs6IkKWBDVs3LKhDYCYFXTXoj4AtcCaG1E9bDskoTklpmGoDgFtdI4iwnWx8S%2FUfU0SEqEcyma%2BuNn8d4RXE7OqOUCEAxMlx7zI1OGE4ZZQvFK5T5Z4CJl1xVxxi9BabAdB&X-Amz-Signature=e8e1c8994711452ea82dba36f433e9a9a5229e204e463d015fee96f917249507&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPMXFFD%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGsz%2Fu1gta0Xbh%2BGMG9DoqSVP4Jbu9cDY%2FaqWy81%2BIcBAiA6mk5Kmru%2FP74UGqcH0PDCXB%2F3cakMIMERLsQE6r0TYyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMPF3cmxayNcps71yMKtwDANWQMqRUgad1F5ByZijnKd7K8rg%2Bpz9oG%2FX7tv%2BB10ZBuBotufCDKsS5pcyxc%2B7S1wI6vl81RYtAuPWoWNH4lvyBQvSDa8%2F86cyHX%2BcHoWjjFCY%2F0PQmdXhi9%2BvQy%2F%2FudTyWUr4TJRGI7lsQcxDwQ9DX5v7cbFd7mbVZmGcZgnA7Mp4rkSXDZh01LEcxdZRgYS8iuWWWNzxVIEsDQHLWduisR03KdUyXOdjP7znSBJ6z%2FkBMEGSkInmCQYm3iN3PAv2Q8kxGGBPJqBh%2BLrAFAKUfNKukYuUZ5ckr%2Bjerye4jpIiIbKewoUTnv%2FrEb40eUVHcn6gZtZccaVTP1g5L9vA%2B%2BhAOP%2FsZU5opFVntlzI20hCgmR3SwgO4C79msNW8inRKTICmpcUn7Tojk3WE4QtRIzVKFtMXvDBxTTOfZb9i7pjRAqfWqYTI1oyp825jw4CWTD%2Fh7mVQFnwgEeGKv1Fd4WJXsn8lh8TS9NbocMJZ2MxTQR14ahgz4NsBX4dI1w%2BBwpnAeGEeX54mDvsJ5esyoOohuYBFLpZAP%2FpW9%2FgDC32jxqQ5T2YEgQe3MaRaLKLvhV2%2FKYkYO0O2GgsevNSdD8WGdnR3Itpi9aD2pPhJU0LTuvsEYK3aBmAw9%2BeowAY6pgElCsAIHHiPyYTMP7mtDY0QVtZsDdPIDvEhNks91PNQjuktykA0lncQlvUY1AvsKh0V42qainILICujG88Eoh3Ze4U61%2Bs6IkKWBDVs3LKhDYCYFXTXoj4AtcCaG1E9bDskoTklpmGoDgFtdI4iwnWx8S%2FUfU0SEqEcyma%2BuNn8d4RXE7OqOUCEAxMlx7zI1OGE4ZZQvFK5T5Z4CJl1xVxxi9BabAdB&X-Amz-Signature=c2aa6b02fe6294de5d795046f1d4d2a8a3c486bbdcd2dd1c4a7704be39771df1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPMXFFD%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGsz%2Fu1gta0Xbh%2BGMG9DoqSVP4Jbu9cDY%2FaqWy81%2BIcBAiA6mk5Kmru%2FP74UGqcH0PDCXB%2F3cakMIMERLsQE6r0TYyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMPF3cmxayNcps71yMKtwDANWQMqRUgad1F5ByZijnKd7K8rg%2Bpz9oG%2FX7tv%2BB10ZBuBotufCDKsS5pcyxc%2B7S1wI6vl81RYtAuPWoWNH4lvyBQvSDa8%2F86cyHX%2BcHoWjjFCY%2F0PQmdXhi9%2BvQy%2F%2FudTyWUr4TJRGI7lsQcxDwQ9DX5v7cbFd7mbVZmGcZgnA7Mp4rkSXDZh01LEcxdZRgYS8iuWWWNzxVIEsDQHLWduisR03KdUyXOdjP7znSBJ6z%2FkBMEGSkInmCQYm3iN3PAv2Q8kxGGBPJqBh%2BLrAFAKUfNKukYuUZ5ckr%2Bjerye4jpIiIbKewoUTnv%2FrEb40eUVHcn6gZtZccaVTP1g5L9vA%2B%2BhAOP%2FsZU5opFVntlzI20hCgmR3SwgO4C79msNW8inRKTICmpcUn7Tojk3WE4QtRIzVKFtMXvDBxTTOfZb9i7pjRAqfWqYTI1oyp825jw4CWTD%2Fh7mVQFnwgEeGKv1Fd4WJXsn8lh8TS9NbocMJZ2MxTQR14ahgz4NsBX4dI1w%2BBwpnAeGEeX54mDvsJ5esyoOohuYBFLpZAP%2FpW9%2FgDC32jxqQ5T2YEgQe3MaRaLKLvhV2%2FKYkYO0O2GgsevNSdD8WGdnR3Itpi9aD2pPhJU0LTuvsEYK3aBmAw9%2BeowAY6pgElCsAIHHiPyYTMP7mtDY0QVtZsDdPIDvEhNks91PNQjuktykA0lncQlvUY1AvsKh0V42qainILICujG88Eoh3Ze4U61%2Bs6IkKWBDVs3LKhDYCYFXTXoj4AtcCaG1E9bDskoTklpmGoDgFtdI4iwnWx8S%2FUfU0SEqEcyma%2BuNn8d4RXE7OqOUCEAxMlx7zI1OGE4ZZQvFK5T5Z4CJl1xVxxi9BabAdB&X-Amz-Signature=f087b6fc4c241c6df8b96ba8643ffeeefa74385ae81f25ef287152ce404a2924&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
