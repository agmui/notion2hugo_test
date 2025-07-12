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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBMCAKC7%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T004459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4G3HhnCO5%2B%2Bg097S2vrWaqDNOLJlNK3tX%2Bta%2B4GIycAiEAqRru8ZfQY%2FbBLwkormSqkwO5WnsOs3u2jsGToIBRcDkqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9eYMN1uvKblf0wjircA3lXRer1dNnsKoa4FLWnrra7FSTCflbeIE8vFVsm8LvdxpDRHOJAFfxgOaenTulZmk1FTKelhyHyXPnP%2FscQzYNXEb2FgClVz5X93764nCyvXI3FiBDzg98MYanKWIvfMscoZa5%2BHOLWFA0b50K1zqp6CzL2EARrf%2Bj%2FmvCRSo%2BueakkM1k4nzQuPOMVI5ncsQZqOmT5eG1tZd7nCr2OQrvnXh4sfoG8KpMvZYDamcWSca%2BJxazcy93fN2pA8GUN4ZVq78JrkghIIeWNjdg%2F2ufqmGJxmUMciUMhYzG%2B64wtd9NLl71i5lQfbox1DV5hqhypFzqenuoHNowr7dJGNeJVvP7zumb2LLmgGlGtstltLD0iIELWXjr%2F78d4TZZbmwBGx6HNaR1F0Alr1qAt04ytSAWYz62Jpdh2kr1WITfIuA1MZhwHteSI%2FXQ8mNhEo71Wgvs6eZrEMK5dt0BxGQzCIaaPOtaqlJnc%2BgUWiHHnGbt%2FyeFV6mGoWvE5MMIVOVy1Ghg%2F9C0vUnzO6gzuafp1pTGSnfBaiomm03pG1F7SSXRwcKftaOdmeJBJtIM8sI8nuu1cHPem7DShXTr%2F3CYvFOKAVtJwxyjtcBQkaZ5iLapI2MayHEJ1EUooMP60xsMGOqUBRlbRY0nMR1FF7eHwUL4kSUBES%2BiJIb2P0f38kOSv9CYJBAUxM6%2BYoMf1NLKNDHRoonCByiztXUdLjo3F7qPQcRUHipQ0hZD8m5vtp4VmZiIezRY%2Bb5kg7wpwIUeNbTi8N6TLz7v2V%2Fr6Puzy3yW8BGhc%2Fm3KRhmds1Q6zP9ZvDbE37HyHcuIMk3%2F%2FGeZ0f3ne1sB7jRwXLN2Bh42VXnGFhGngrkw&X-Amz-Signature=3eff9789412046dfad99589aeff792879a9646d0c199660c48c5ff5a4758a6f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBMCAKC7%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T004459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4G3HhnCO5%2B%2Bg097S2vrWaqDNOLJlNK3tX%2Bta%2B4GIycAiEAqRru8ZfQY%2FbBLwkormSqkwO5WnsOs3u2jsGToIBRcDkqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9eYMN1uvKblf0wjircA3lXRer1dNnsKoa4FLWnrra7FSTCflbeIE8vFVsm8LvdxpDRHOJAFfxgOaenTulZmk1FTKelhyHyXPnP%2FscQzYNXEb2FgClVz5X93764nCyvXI3FiBDzg98MYanKWIvfMscoZa5%2BHOLWFA0b50K1zqp6CzL2EARrf%2Bj%2FmvCRSo%2BueakkM1k4nzQuPOMVI5ncsQZqOmT5eG1tZd7nCr2OQrvnXh4sfoG8KpMvZYDamcWSca%2BJxazcy93fN2pA8GUN4ZVq78JrkghIIeWNjdg%2F2ufqmGJxmUMciUMhYzG%2B64wtd9NLl71i5lQfbox1DV5hqhypFzqenuoHNowr7dJGNeJVvP7zumb2LLmgGlGtstltLD0iIELWXjr%2F78d4TZZbmwBGx6HNaR1F0Alr1qAt04ytSAWYz62Jpdh2kr1WITfIuA1MZhwHteSI%2FXQ8mNhEo71Wgvs6eZrEMK5dt0BxGQzCIaaPOtaqlJnc%2BgUWiHHnGbt%2FyeFV6mGoWvE5MMIVOVy1Ghg%2F9C0vUnzO6gzuafp1pTGSnfBaiomm03pG1F7SSXRwcKftaOdmeJBJtIM8sI8nuu1cHPem7DShXTr%2F3CYvFOKAVtJwxyjtcBQkaZ5iLapI2MayHEJ1EUooMP60xsMGOqUBRlbRY0nMR1FF7eHwUL4kSUBES%2BiJIb2P0f38kOSv9CYJBAUxM6%2BYoMf1NLKNDHRoonCByiztXUdLjo3F7qPQcRUHipQ0hZD8m5vtp4VmZiIezRY%2Bb5kg7wpwIUeNbTi8N6TLz7v2V%2Fr6Puzy3yW8BGhc%2Fm3KRhmds1Q6zP9ZvDbE37HyHcuIMk3%2F%2FGeZ0f3ne1sB7jRwXLN2Bh42VXnGFhGngrkw&X-Amz-Signature=d4c778e667536b1c953bc04ad5e27b4f59b389829840fcc496240fb9af581880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBMCAKC7%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T004459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4G3HhnCO5%2B%2Bg097S2vrWaqDNOLJlNK3tX%2Bta%2B4GIycAiEAqRru8ZfQY%2FbBLwkormSqkwO5WnsOs3u2jsGToIBRcDkqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9eYMN1uvKblf0wjircA3lXRer1dNnsKoa4FLWnrra7FSTCflbeIE8vFVsm8LvdxpDRHOJAFfxgOaenTulZmk1FTKelhyHyXPnP%2FscQzYNXEb2FgClVz5X93764nCyvXI3FiBDzg98MYanKWIvfMscoZa5%2BHOLWFA0b50K1zqp6CzL2EARrf%2Bj%2FmvCRSo%2BueakkM1k4nzQuPOMVI5ncsQZqOmT5eG1tZd7nCr2OQrvnXh4sfoG8KpMvZYDamcWSca%2BJxazcy93fN2pA8GUN4ZVq78JrkghIIeWNjdg%2F2ufqmGJxmUMciUMhYzG%2B64wtd9NLl71i5lQfbox1DV5hqhypFzqenuoHNowr7dJGNeJVvP7zumb2LLmgGlGtstltLD0iIELWXjr%2F78d4TZZbmwBGx6HNaR1F0Alr1qAt04ytSAWYz62Jpdh2kr1WITfIuA1MZhwHteSI%2FXQ8mNhEo71Wgvs6eZrEMK5dt0BxGQzCIaaPOtaqlJnc%2BgUWiHHnGbt%2FyeFV6mGoWvE5MMIVOVy1Ghg%2F9C0vUnzO6gzuafp1pTGSnfBaiomm03pG1F7SSXRwcKftaOdmeJBJtIM8sI8nuu1cHPem7DShXTr%2F3CYvFOKAVtJwxyjtcBQkaZ5iLapI2MayHEJ1EUooMP60xsMGOqUBRlbRY0nMR1FF7eHwUL4kSUBES%2BiJIb2P0f38kOSv9CYJBAUxM6%2BYoMf1NLKNDHRoonCByiztXUdLjo3F7qPQcRUHipQ0hZD8m5vtp4VmZiIezRY%2Bb5kg7wpwIUeNbTi8N6TLz7v2V%2Fr6Puzy3yW8BGhc%2Fm3KRhmds1Q6zP9ZvDbE37HyHcuIMk3%2F%2FGeZ0f3ne1sB7jRwXLN2Bh42VXnGFhGngrkw&X-Amz-Signature=652fcb386efe1c7cd50126d9ecdee383e982bf62278ad7a31d5d97e60736ac0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBMCAKC7%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T004459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4G3HhnCO5%2B%2Bg097S2vrWaqDNOLJlNK3tX%2Bta%2B4GIycAiEAqRru8ZfQY%2FbBLwkormSqkwO5WnsOs3u2jsGToIBRcDkqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9eYMN1uvKblf0wjircA3lXRer1dNnsKoa4FLWnrra7FSTCflbeIE8vFVsm8LvdxpDRHOJAFfxgOaenTulZmk1FTKelhyHyXPnP%2FscQzYNXEb2FgClVz5X93764nCyvXI3FiBDzg98MYanKWIvfMscoZa5%2BHOLWFA0b50K1zqp6CzL2EARrf%2Bj%2FmvCRSo%2BueakkM1k4nzQuPOMVI5ncsQZqOmT5eG1tZd7nCr2OQrvnXh4sfoG8KpMvZYDamcWSca%2BJxazcy93fN2pA8GUN4ZVq78JrkghIIeWNjdg%2F2ufqmGJxmUMciUMhYzG%2B64wtd9NLl71i5lQfbox1DV5hqhypFzqenuoHNowr7dJGNeJVvP7zumb2LLmgGlGtstltLD0iIELWXjr%2F78d4TZZbmwBGx6HNaR1F0Alr1qAt04ytSAWYz62Jpdh2kr1WITfIuA1MZhwHteSI%2FXQ8mNhEo71Wgvs6eZrEMK5dt0BxGQzCIaaPOtaqlJnc%2BgUWiHHnGbt%2FyeFV6mGoWvE5MMIVOVy1Ghg%2F9C0vUnzO6gzuafp1pTGSnfBaiomm03pG1F7SSXRwcKftaOdmeJBJtIM8sI8nuu1cHPem7DShXTr%2F3CYvFOKAVtJwxyjtcBQkaZ5iLapI2MayHEJ1EUooMP60xsMGOqUBRlbRY0nMR1FF7eHwUL4kSUBES%2BiJIb2P0f38kOSv9CYJBAUxM6%2BYoMf1NLKNDHRoonCByiztXUdLjo3F7qPQcRUHipQ0hZD8m5vtp4VmZiIezRY%2Bb5kg7wpwIUeNbTi8N6TLz7v2V%2Fr6Puzy3yW8BGhc%2Fm3KRhmds1Q6zP9ZvDbE37HyHcuIMk3%2F%2FGeZ0f3ne1sB7jRwXLN2Bh42VXnGFhGngrkw&X-Amz-Signature=8de707cfd0327dc5973e5beebdf1e13c44902464a40b554b4a574fb32e867451&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBMCAKC7%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T004459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4G3HhnCO5%2B%2Bg097S2vrWaqDNOLJlNK3tX%2Bta%2B4GIycAiEAqRru8ZfQY%2FbBLwkormSqkwO5WnsOs3u2jsGToIBRcDkqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9eYMN1uvKblf0wjircA3lXRer1dNnsKoa4FLWnrra7FSTCflbeIE8vFVsm8LvdxpDRHOJAFfxgOaenTulZmk1FTKelhyHyXPnP%2FscQzYNXEb2FgClVz5X93764nCyvXI3FiBDzg98MYanKWIvfMscoZa5%2BHOLWFA0b50K1zqp6CzL2EARrf%2Bj%2FmvCRSo%2BueakkM1k4nzQuPOMVI5ncsQZqOmT5eG1tZd7nCr2OQrvnXh4sfoG8KpMvZYDamcWSca%2BJxazcy93fN2pA8GUN4ZVq78JrkghIIeWNjdg%2F2ufqmGJxmUMciUMhYzG%2B64wtd9NLl71i5lQfbox1DV5hqhypFzqenuoHNowr7dJGNeJVvP7zumb2LLmgGlGtstltLD0iIELWXjr%2F78d4TZZbmwBGx6HNaR1F0Alr1qAt04ytSAWYz62Jpdh2kr1WITfIuA1MZhwHteSI%2FXQ8mNhEo71Wgvs6eZrEMK5dt0BxGQzCIaaPOtaqlJnc%2BgUWiHHnGbt%2FyeFV6mGoWvE5MMIVOVy1Ghg%2F9C0vUnzO6gzuafp1pTGSnfBaiomm03pG1F7SSXRwcKftaOdmeJBJtIM8sI8nuu1cHPem7DShXTr%2F3CYvFOKAVtJwxyjtcBQkaZ5iLapI2MayHEJ1EUooMP60xsMGOqUBRlbRY0nMR1FF7eHwUL4kSUBES%2BiJIb2P0f38kOSv9CYJBAUxM6%2BYoMf1NLKNDHRoonCByiztXUdLjo3F7qPQcRUHipQ0hZD8m5vtp4VmZiIezRY%2Bb5kg7wpwIUeNbTi8N6TLz7v2V%2Fr6Puzy3yW8BGhc%2Fm3KRhmds1Q6zP9ZvDbE37HyHcuIMk3%2F%2FGeZ0f3ne1sB7jRwXLN2Bh42VXnGFhGngrkw&X-Amz-Signature=59942f9c602c971f45469017141b72ab0f18d2656e402a9b100f497632780fff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
