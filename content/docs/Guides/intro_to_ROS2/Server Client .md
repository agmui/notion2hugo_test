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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFLEDJBO%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZCZYemMAIZwPAFQfBS1UY9TT7F2DBpIGEKqH%2BHAX3gAIhAKc6UADpASWhptE7fMBkfmnVZdxuyBF79xhdxeDSn0oxKv8DCEEQABoMNjM3NDIzMTgzODA1IgxO1Uca5ys6UkwW6B0q3AP2eCyv%2Fp73%2F0qNxd%2FjS%2BY8b6WAFJuazJXOdoumrEnyH%2FBFpqcFAMXj5DUgVsPDcicrQPEfLSbKoVR8KgL3%2BkP0PbKT0Fkk8govOyQYy%2FMIJxnt71fASSF2xAH9rRtX7zIHU2P9k3HEMXYHS7dmvDnW96KyHLTd893KTLuHx%2BMu6P7Ok9MH3mvDqVo2ocDEbKIDrJC36zx0KUzFlhK87Nxvncut4BC74HOXJ%2BZB8NzHDXV27HtonWI1i0PmngvV6EnjJXAWxph2HaN1K1LxR%2B8urgcsfLyrSypmrnkp9Rr0DVI40dloe8fQhkxV1d6UVXWXZcG485ay2SbZ4QFzayvBeF3%2FoOJFnYrQUGxk0xNP6xy%2BnaP0G4OE3Ep672FGS0CeGcCOuVla%2FaciSYif85NjUQRmk%2Bqm2yVGKGegl6adMi3jVwSx1v2X%2Fj9ZL4RKV8KqfOZgQUFuw%2FcgeacNsW23amzLeUN5paLKonDXvroREYKkXgD1xnkjUXZivOGp6PnDYrZ46%2FMq28ioZX4JeQwGy0VMEqZibtfVp8ok0t6DFpBT1ifCBaiXtc7pBfwj0qRSP2dCLqpDE22LcNu%2BThvciOR0vy6NmHPNQ3Rd8XLc12l6UnzSD9kxkcMC%2FDDQ7pvBBjqkAZbP983NXIYZwUoJnpMWuRVU0tVGLYI4r%2FavUH2ujIVLkyhjAvFWEP6eeem9lwpv%2F5UwGP6jl9cKy1fh15mK0w9mRUk0zFvrgCVn9UUHsJ9tDES3GrBd%2FoAb7TTpl0tC6kuBoAC6iX3zFfo5ymaccc0GU7414%2FJkF8V5EiGuSfLHWko%2FtDx%2Fs4l%2F%2BDxV%2F0Vk7xJ8WmbGZZ4j5QJLP3ZaPwGIHzsL&X-Amz-Signature=22047498734cd922aa26d80a118edc755b071117ed7e5912fbde43cbea5fc113&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFLEDJBO%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZCZYemMAIZwPAFQfBS1UY9TT7F2DBpIGEKqH%2BHAX3gAIhAKc6UADpASWhptE7fMBkfmnVZdxuyBF79xhdxeDSn0oxKv8DCEEQABoMNjM3NDIzMTgzODA1IgxO1Uca5ys6UkwW6B0q3AP2eCyv%2Fp73%2F0qNxd%2FjS%2BY8b6WAFJuazJXOdoumrEnyH%2FBFpqcFAMXj5DUgVsPDcicrQPEfLSbKoVR8KgL3%2BkP0PbKT0Fkk8govOyQYy%2FMIJxnt71fASSF2xAH9rRtX7zIHU2P9k3HEMXYHS7dmvDnW96KyHLTd893KTLuHx%2BMu6P7Ok9MH3mvDqVo2ocDEbKIDrJC36zx0KUzFlhK87Nxvncut4BC74HOXJ%2BZB8NzHDXV27HtonWI1i0PmngvV6EnjJXAWxph2HaN1K1LxR%2B8urgcsfLyrSypmrnkp9Rr0DVI40dloe8fQhkxV1d6UVXWXZcG485ay2SbZ4QFzayvBeF3%2FoOJFnYrQUGxk0xNP6xy%2BnaP0G4OE3Ep672FGS0CeGcCOuVla%2FaciSYif85NjUQRmk%2Bqm2yVGKGegl6adMi3jVwSx1v2X%2Fj9ZL4RKV8KqfOZgQUFuw%2FcgeacNsW23amzLeUN5paLKonDXvroREYKkXgD1xnkjUXZivOGp6PnDYrZ46%2FMq28ioZX4JeQwGy0VMEqZibtfVp8ok0t6DFpBT1ifCBaiXtc7pBfwj0qRSP2dCLqpDE22LcNu%2BThvciOR0vy6NmHPNQ3Rd8XLc12l6UnzSD9kxkcMC%2FDDQ7pvBBjqkAZbP983NXIYZwUoJnpMWuRVU0tVGLYI4r%2FavUH2ujIVLkyhjAvFWEP6eeem9lwpv%2F5UwGP6jl9cKy1fh15mK0w9mRUk0zFvrgCVn9UUHsJ9tDES3GrBd%2FoAb7TTpl0tC6kuBoAC6iX3zFfo5ymaccc0GU7414%2FJkF8V5EiGuSfLHWko%2FtDx%2Fs4l%2F%2BDxV%2F0Vk7xJ8WmbGZZ4j5QJLP3ZaPwGIHzsL&X-Amz-Signature=df5e7fb44f533e192f7c202f497b18b4fbb81f02463d747025dea691d7ffc86c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFLEDJBO%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZCZYemMAIZwPAFQfBS1UY9TT7F2DBpIGEKqH%2BHAX3gAIhAKc6UADpASWhptE7fMBkfmnVZdxuyBF79xhdxeDSn0oxKv8DCEEQABoMNjM3NDIzMTgzODA1IgxO1Uca5ys6UkwW6B0q3AP2eCyv%2Fp73%2F0qNxd%2FjS%2BY8b6WAFJuazJXOdoumrEnyH%2FBFpqcFAMXj5DUgVsPDcicrQPEfLSbKoVR8KgL3%2BkP0PbKT0Fkk8govOyQYy%2FMIJxnt71fASSF2xAH9rRtX7zIHU2P9k3HEMXYHS7dmvDnW96KyHLTd893KTLuHx%2BMu6P7Ok9MH3mvDqVo2ocDEbKIDrJC36zx0KUzFlhK87Nxvncut4BC74HOXJ%2BZB8NzHDXV27HtonWI1i0PmngvV6EnjJXAWxph2HaN1K1LxR%2B8urgcsfLyrSypmrnkp9Rr0DVI40dloe8fQhkxV1d6UVXWXZcG485ay2SbZ4QFzayvBeF3%2FoOJFnYrQUGxk0xNP6xy%2BnaP0G4OE3Ep672FGS0CeGcCOuVla%2FaciSYif85NjUQRmk%2Bqm2yVGKGegl6adMi3jVwSx1v2X%2Fj9ZL4RKV8KqfOZgQUFuw%2FcgeacNsW23amzLeUN5paLKonDXvroREYKkXgD1xnkjUXZivOGp6PnDYrZ46%2FMq28ioZX4JeQwGy0VMEqZibtfVp8ok0t6DFpBT1ifCBaiXtc7pBfwj0qRSP2dCLqpDE22LcNu%2BThvciOR0vy6NmHPNQ3Rd8XLc12l6UnzSD9kxkcMC%2FDDQ7pvBBjqkAZbP983NXIYZwUoJnpMWuRVU0tVGLYI4r%2FavUH2ujIVLkyhjAvFWEP6eeem9lwpv%2F5UwGP6jl9cKy1fh15mK0w9mRUk0zFvrgCVn9UUHsJ9tDES3GrBd%2FoAb7TTpl0tC6kuBoAC6iX3zFfo5ymaccc0GU7414%2FJkF8V5EiGuSfLHWko%2FtDx%2Fs4l%2F%2BDxV%2F0Vk7xJ8WmbGZZ4j5QJLP3ZaPwGIHzsL&X-Amz-Signature=8a6163ddfeaa5c7ef8de11c4b6760e9fcb324a2f9917a38d5eb6b05d35fea20a&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFLEDJBO%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZCZYemMAIZwPAFQfBS1UY9TT7F2DBpIGEKqH%2BHAX3gAIhAKc6UADpASWhptE7fMBkfmnVZdxuyBF79xhdxeDSn0oxKv8DCEEQABoMNjM3NDIzMTgzODA1IgxO1Uca5ys6UkwW6B0q3AP2eCyv%2Fp73%2F0qNxd%2FjS%2BY8b6WAFJuazJXOdoumrEnyH%2FBFpqcFAMXj5DUgVsPDcicrQPEfLSbKoVR8KgL3%2BkP0PbKT0Fkk8govOyQYy%2FMIJxnt71fASSF2xAH9rRtX7zIHU2P9k3HEMXYHS7dmvDnW96KyHLTd893KTLuHx%2BMu6P7Ok9MH3mvDqVo2ocDEbKIDrJC36zx0KUzFlhK87Nxvncut4BC74HOXJ%2BZB8NzHDXV27HtonWI1i0PmngvV6EnjJXAWxph2HaN1K1LxR%2B8urgcsfLyrSypmrnkp9Rr0DVI40dloe8fQhkxV1d6UVXWXZcG485ay2SbZ4QFzayvBeF3%2FoOJFnYrQUGxk0xNP6xy%2BnaP0G4OE3Ep672FGS0CeGcCOuVla%2FaciSYif85NjUQRmk%2Bqm2yVGKGegl6adMi3jVwSx1v2X%2Fj9ZL4RKV8KqfOZgQUFuw%2FcgeacNsW23amzLeUN5paLKonDXvroREYKkXgD1xnkjUXZivOGp6PnDYrZ46%2FMq28ioZX4JeQwGy0VMEqZibtfVp8ok0t6DFpBT1ifCBaiXtc7pBfwj0qRSP2dCLqpDE22LcNu%2BThvciOR0vy6NmHPNQ3Rd8XLc12l6UnzSD9kxkcMC%2FDDQ7pvBBjqkAZbP983NXIYZwUoJnpMWuRVU0tVGLYI4r%2FavUH2ujIVLkyhjAvFWEP6eeem9lwpv%2F5UwGP6jl9cKy1fh15mK0w9mRUk0zFvrgCVn9UUHsJ9tDES3GrBd%2FoAb7TTpl0tC6kuBoAC6iX3zFfo5ymaccc0GU7414%2FJkF8V5EiGuSfLHWko%2FtDx%2Fs4l%2F%2BDxV%2F0Vk7xJ8WmbGZZ4j5QJLP3ZaPwGIHzsL&X-Amz-Signature=27ea3f37226d9ef1bd773e21c6525a60e729cad443f4ec0c87781559997c72bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFLEDJBO%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZCZYemMAIZwPAFQfBS1UY9TT7F2DBpIGEKqH%2BHAX3gAIhAKc6UADpASWhptE7fMBkfmnVZdxuyBF79xhdxeDSn0oxKv8DCEEQABoMNjM3NDIzMTgzODA1IgxO1Uca5ys6UkwW6B0q3AP2eCyv%2Fp73%2F0qNxd%2FjS%2BY8b6WAFJuazJXOdoumrEnyH%2FBFpqcFAMXj5DUgVsPDcicrQPEfLSbKoVR8KgL3%2BkP0PbKT0Fkk8govOyQYy%2FMIJxnt71fASSF2xAH9rRtX7zIHU2P9k3HEMXYHS7dmvDnW96KyHLTd893KTLuHx%2BMu6P7Ok9MH3mvDqVo2ocDEbKIDrJC36zx0KUzFlhK87Nxvncut4BC74HOXJ%2BZB8NzHDXV27HtonWI1i0PmngvV6EnjJXAWxph2HaN1K1LxR%2B8urgcsfLyrSypmrnkp9Rr0DVI40dloe8fQhkxV1d6UVXWXZcG485ay2SbZ4QFzayvBeF3%2FoOJFnYrQUGxk0xNP6xy%2BnaP0G4OE3Ep672FGS0CeGcCOuVla%2FaciSYif85NjUQRmk%2Bqm2yVGKGegl6adMi3jVwSx1v2X%2Fj9ZL4RKV8KqfOZgQUFuw%2FcgeacNsW23amzLeUN5paLKonDXvroREYKkXgD1xnkjUXZivOGp6PnDYrZ46%2FMq28ioZX4JeQwGy0VMEqZibtfVp8ok0t6DFpBT1ifCBaiXtc7pBfwj0qRSP2dCLqpDE22LcNu%2BThvciOR0vy6NmHPNQ3Rd8XLc12l6UnzSD9kxkcMC%2FDDQ7pvBBjqkAZbP983NXIYZwUoJnpMWuRVU0tVGLYI4r%2FavUH2ujIVLkyhjAvFWEP6eeem9lwpv%2F5UwGP6jl9cKy1fh15mK0w9mRUk0zFvrgCVn9UUHsJ9tDES3GrBd%2FoAb7TTpl0tC6kuBoAC6iX3zFfo5ymaccc0GU7414%2FJkF8V5EiGuSfLHWko%2FtDx%2Fs4l%2F%2BDxV%2F0Vk7xJ8WmbGZZ4j5QJLP3ZaPwGIHzsL&X-Amz-Signature=24f3145c90877cef278a84f310dfbddb12d9ceb9cfea95f0aa74dae9d4991184&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
