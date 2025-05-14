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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHIKZJVZ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEDLqdMd2ZmLRGqBVQLUcIvd%2Bd9JXgX0%2BrwdX2saIpITAiEA98KMbkQBP4PteBKXrKvqG44pmrREVPlD5Mgm2zvWEaAq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDCUT26vY1wlZ53FmvCrcA20OOP92GuuyYVUffttDJTxo5E7yEJH6vhgKlO7fzDPg1yep2gXvd6At4Kwj4ReZNiAQ76vSk%2Buv3He%2FUnqehyQ93kTj2W2erEN%2Bw9K5hd5qW3wypSe4krOSHor3ko4LeSyFy2zbax97eKWDSsDpy08%2BuKEGJDfVVTNwh0gz8EDPz0bhwBpKOO6vZhPXWLWKvjnEckNotCfK1M%2Fs3ctgYXKr5c1NqxJCJpDWXE94yKpW8d6%2FKKQBOP4k1%2FQYsBNwMRz%2B0WuLYrec0T8oDN1lTkcD%2BqrVrZp1xqdDQkHU7QQ5v2qa5m%2B3UL4zjfxHxe52cnUAJbA5Wz4Vp9rq4NyDSBILoHQyjUeRKTFrs6tGZujT8z3U77%2BIWHHK5nrr%2FgzRrnqiN8isna6axyjXv8bmE18VQEZTM5FZwNqmRWVeMIoalNZ9g73U9VyWUY%2B9DPkEJs0Qt2y49uki4PLsoABRZ564gb5v%2BXIw1%2FTIeG37skpks2EjnMeizzA0fWGhBYGCYSVqyfT6GmmzPw4CWEFSTSQJi0J8HAvnXYnTznNFtwknl2REMTX2VaCKrnW8Dmk21EWZ0wVwGolw2idWWZ13QinixY0jRc8Ke6iRAd7Hb%2BgojQ%2FKHEyjiHYRn6s%2BMNOhlMEGOqUBAmDrh77Jp5mqQe3kjTuW5V%2BWfYCTIfMyXK7%2Bch7%2BJR24qdMKgL249bSDCTUQqvv4oCCdMULtqf1K8dciUtv26XXa3%2FrXVjI2luSJ4BOA5ne3eQWEmIWh%2B7w4mjd4D4lRU9bQmJcT1I94Y1kN8AOcehpbXAFl06sczZsDjAS3EcEU9wWE0nzJLLMtCmW9We30M%2FKO67vDEMIaB6qHeWRxyP5fB%2Fzi&X-Amz-Signature=d7a6d364e99cc4ce5d4f10063d83e0898d5e22733cb30e1e0c098d0452ae405e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHIKZJVZ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEDLqdMd2ZmLRGqBVQLUcIvd%2Bd9JXgX0%2BrwdX2saIpITAiEA98KMbkQBP4PteBKXrKvqG44pmrREVPlD5Mgm2zvWEaAq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDCUT26vY1wlZ53FmvCrcA20OOP92GuuyYVUffttDJTxo5E7yEJH6vhgKlO7fzDPg1yep2gXvd6At4Kwj4ReZNiAQ76vSk%2Buv3He%2FUnqehyQ93kTj2W2erEN%2Bw9K5hd5qW3wypSe4krOSHor3ko4LeSyFy2zbax97eKWDSsDpy08%2BuKEGJDfVVTNwh0gz8EDPz0bhwBpKOO6vZhPXWLWKvjnEckNotCfK1M%2Fs3ctgYXKr5c1NqxJCJpDWXE94yKpW8d6%2FKKQBOP4k1%2FQYsBNwMRz%2B0WuLYrec0T8oDN1lTkcD%2BqrVrZp1xqdDQkHU7QQ5v2qa5m%2B3UL4zjfxHxe52cnUAJbA5Wz4Vp9rq4NyDSBILoHQyjUeRKTFrs6tGZujT8z3U77%2BIWHHK5nrr%2FgzRrnqiN8isna6axyjXv8bmE18VQEZTM5FZwNqmRWVeMIoalNZ9g73U9VyWUY%2B9DPkEJs0Qt2y49uki4PLsoABRZ564gb5v%2BXIw1%2FTIeG37skpks2EjnMeizzA0fWGhBYGCYSVqyfT6GmmzPw4CWEFSTSQJi0J8HAvnXYnTznNFtwknl2REMTX2VaCKrnW8Dmk21EWZ0wVwGolw2idWWZ13QinixY0jRc8Ke6iRAd7Hb%2BgojQ%2FKHEyjiHYRn6s%2BMNOhlMEGOqUBAmDrh77Jp5mqQe3kjTuW5V%2BWfYCTIfMyXK7%2Bch7%2BJR24qdMKgL249bSDCTUQqvv4oCCdMULtqf1K8dciUtv26XXa3%2FrXVjI2luSJ4BOA5ne3eQWEmIWh%2B7w4mjd4D4lRU9bQmJcT1I94Y1kN8AOcehpbXAFl06sczZsDjAS3EcEU9wWE0nzJLLMtCmW9We30M%2FKO67vDEMIaB6qHeWRxyP5fB%2Fzi&X-Amz-Signature=ae325a381159f8e123c4a327a48cf80483430ede659cf33fee65e84b321d91fb&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHIKZJVZ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEDLqdMd2ZmLRGqBVQLUcIvd%2Bd9JXgX0%2BrwdX2saIpITAiEA98KMbkQBP4PteBKXrKvqG44pmrREVPlD5Mgm2zvWEaAq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDCUT26vY1wlZ53FmvCrcA20OOP92GuuyYVUffttDJTxo5E7yEJH6vhgKlO7fzDPg1yep2gXvd6At4Kwj4ReZNiAQ76vSk%2Buv3He%2FUnqehyQ93kTj2W2erEN%2Bw9K5hd5qW3wypSe4krOSHor3ko4LeSyFy2zbax97eKWDSsDpy08%2BuKEGJDfVVTNwh0gz8EDPz0bhwBpKOO6vZhPXWLWKvjnEckNotCfK1M%2Fs3ctgYXKr5c1NqxJCJpDWXE94yKpW8d6%2FKKQBOP4k1%2FQYsBNwMRz%2B0WuLYrec0T8oDN1lTkcD%2BqrVrZp1xqdDQkHU7QQ5v2qa5m%2B3UL4zjfxHxe52cnUAJbA5Wz4Vp9rq4NyDSBILoHQyjUeRKTFrs6tGZujT8z3U77%2BIWHHK5nrr%2FgzRrnqiN8isna6axyjXv8bmE18VQEZTM5FZwNqmRWVeMIoalNZ9g73U9VyWUY%2B9DPkEJs0Qt2y49uki4PLsoABRZ564gb5v%2BXIw1%2FTIeG37skpks2EjnMeizzA0fWGhBYGCYSVqyfT6GmmzPw4CWEFSTSQJi0J8HAvnXYnTznNFtwknl2REMTX2VaCKrnW8Dmk21EWZ0wVwGolw2idWWZ13QinixY0jRc8Ke6iRAd7Hb%2BgojQ%2FKHEyjiHYRn6s%2BMNOhlMEGOqUBAmDrh77Jp5mqQe3kjTuW5V%2BWfYCTIfMyXK7%2Bch7%2BJR24qdMKgL249bSDCTUQqvv4oCCdMULtqf1K8dciUtv26XXa3%2FrXVjI2luSJ4BOA5ne3eQWEmIWh%2B7w4mjd4D4lRU9bQmJcT1I94Y1kN8AOcehpbXAFl06sczZsDjAS3EcEU9wWE0nzJLLMtCmW9We30M%2FKO67vDEMIaB6qHeWRxyP5fB%2Fzi&X-Amz-Signature=ebbf16171d571ceb8225e67d8b1197f3e60610c2cc1b00f39c424a5fcce5c4af&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHIKZJVZ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEDLqdMd2ZmLRGqBVQLUcIvd%2Bd9JXgX0%2BrwdX2saIpITAiEA98KMbkQBP4PteBKXrKvqG44pmrREVPlD5Mgm2zvWEaAq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDCUT26vY1wlZ53FmvCrcA20OOP92GuuyYVUffttDJTxo5E7yEJH6vhgKlO7fzDPg1yep2gXvd6At4Kwj4ReZNiAQ76vSk%2Buv3He%2FUnqehyQ93kTj2W2erEN%2Bw9K5hd5qW3wypSe4krOSHor3ko4LeSyFy2zbax97eKWDSsDpy08%2BuKEGJDfVVTNwh0gz8EDPz0bhwBpKOO6vZhPXWLWKvjnEckNotCfK1M%2Fs3ctgYXKr5c1NqxJCJpDWXE94yKpW8d6%2FKKQBOP4k1%2FQYsBNwMRz%2B0WuLYrec0T8oDN1lTkcD%2BqrVrZp1xqdDQkHU7QQ5v2qa5m%2B3UL4zjfxHxe52cnUAJbA5Wz4Vp9rq4NyDSBILoHQyjUeRKTFrs6tGZujT8z3U77%2BIWHHK5nrr%2FgzRrnqiN8isna6axyjXv8bmE18VQEZTM5FZwNqmRWVeMIoalNZ9g73U9VyWUY%2B9DPkEJs0Qt2y49uki4PLsoABRZ564gb5v%2BXIw1%2FTIeG37skpks2EjnMeizzA0fWGhBYGCYSVqyfT6GmmzPw4CWEFSTSQJi0J8HAvnXYnTznNFtwknl2REMTX2VaCKrnW8Dmk21EWZ0wVwGolw2idWWZ13QinixY0jRc8Ke6iRAd7Hb%2BgojQ%2FKHEyjiHYRn6s%2BMNOhlMEGOqUBAmDrh77Jp5mqQe3kjTuW5V%2BWfYCTIfMyXK7%2Bch7%2BJR24qdMKgL249bSDCTUQqvv4oCCdMULtqf1K8dciUtv26XXa3%2FrXVjI2luSJ4BOA5ne3eQWEmIWh%2B7w4mjd4D4lRU9bQmJcT1I94Y1kN8AOcehpbXAFl06sczZsDjAS3EcEU9wWE0nzJLLMtCmW9We30M%2FKO67vDEMIaB6qHeWRxyP5fB%2Fzi&X-Amz-Signature=d4b8e2089ace4bd375d4168c22e802d39f871fa13a3dd382f0b6e3b6dc34383b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHIKZJVZ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEDLqdMd2ZmLRGqBVQLUcIvd%2Bd9JXgX0%2BrwdX2saIpITAiEA98KMbkQBP4PteBKXrKvqG44pmrREVPlD5Mgm2zvWEaAq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDCUT26vY1wlZ53FmvCrcA20OOP92GuuyYVUffttDJTxo5E7yEJH6vhgKlO7fzDPg1yep2gXvd6At4Kwj4ReZNiAQ76vSk%2Buv3He%2FUnqehyQ93kTj2W2erEN%2Bw9K5hd5qW3wypSe4krOSHor3ko4LeSyFy2zbax97eKWDSsDpy08%2BuKEGJDfVVTNwh0gz8EDPz0bhwBpKOO6vZhPXWLWKvjnEckNotCfK1M%2Fs3ctgYXKr5c1NqxJCJpDWXE94yKpW8d6%2FKKQBOP4k1%2FQYsBNwMRz%2B0WuLYrec0T8oDN1lTkcD%2BqrVrZp1xqdDQkHU7QQ5v2qa5m%2B3UL4zjfxHxe52cnUAJbA5Wz4Vp9rq4NyDSBILoHQyjUeRKTFrs6tGZujT8z3U77%2BIWHHK5nrr%2FgzRrnqiN8isna6axyjXv8bmE18VQEZTM5FZwNqmRWVeMIoalNZ9g73U9VyWUY%2B9DPkEJs0Qt2y49uki4PLsoABRZ564gb5v%2BXIw1%2FTIeG37skpks2EjnMeizzA0fWGhBYGCYSVqyfT6GmmzPw4CWEFSTSQJi0J8HAvnXYnTznNFtwknl2REMTX2VaCKrnW8Dmk21EWZ0wVwGolw2idWWZ13QinixY0jRc8Ke6iRAd7Hb%2BgojQ%2FKHEyjiHYRn6s%2BMNOhlMEGOqUBAmDrh77Jp5mqQe3kjTuW5V%2BWfYCTIfMyXK7%2Bch7%2BJR24qdMKgL249bSDCTUQqvv4oCCdMULtqf1K8dciUtv26XXa3%2FrXVjI2luSJ4BOA5ne3eQWEmIWh%2B7w4mjd4D4lRU9bQmJcT1I94Y1kN8AOcehpbXAFl06sczZsDjAS3EcEU9wWE0nzJLLMtCmW9We30M%2FKO67vDEMIaB6qHeWRxyP5fB%2Fzi&X-Amz-Signature=052ed932375cf9c826aceea0ba8292cecae5b49562c790f54396553a28cf81b0&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
