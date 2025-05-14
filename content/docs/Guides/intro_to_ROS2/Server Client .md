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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKDHTZU5%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIA2B5cvMOE91wq%2B81gaS2o%2B7bKFqayqY7p5%2BJ6nwsprwAiA%2FbdYYJWjx85GyLPhU4%2BXXUlZCawNBHidebno8eD0Xeir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMHRZPsDwVOCRkX%2BODKtwDLB4ixHUogAjvDnuymtW9%2Fe6JXv%2FfrLeTWjEguGb%2BFcrVyCHs86cmJk9A%2F3TisZ2BZbjhHnrEYmaJ3PD9Ya41MFasAdyndyVtaelQNqtYE0GCzJgrNKzAQPEl%2F4ISZktO5gGtFjuEKuasoMASrEd1IpizXa2tO26g7LxlaCs6jI9MLY%2Bp82YkVW%2BCs2LsZOA8AM%2BNR5Gxf%2FF2GLTGhOMY5dZTRSsO2bW%2BK4pRJHtGlMUoVhoryk%2BaUNY%2BKSHdisLMpnu5efs8cv6doKxFWgDX%2FQO%2F%2BEb1nM3LDkwufFmANcr%2B2CbVHMVK2YK5J7Vd0lZeG9cyuNDIPwx3fADts1oO0AQd8stw6K0od1dPTeFwS9gmvS4%2FrozDnNaom5%2BDsLaarMawexZz5703qJ2W2KWFdBx8Su%2BmxBVGouyUVTXL7CrTOnxLyDhqlEBN3XNqJ32TpWUXuFrDE8QPfpemgVWaDt1FT5QdhPrREtnWbPLLgoNlpraSSTnUx2sQG0GiBc8yTbzPC0%2B%2FFSmlki0W8n9YbKCcev%2Bgz5BcPaI9JQO39It7Ruj4WNTb2bLhV4m2%2B69qBrKXxjz1pbzxAuc2fDe8ml7yF9sDpw13mNSfYYfxkx4qu%2BbWMF%2FDP8uQfGgw%2F52RwQY6pgEYb6oobGNimEMLQH%2FqBugeT%2FTg43oNF2iPuTvORNMWM7HBEJyRav7PQfvW77%2BJn4qLyhVT%2FJIiW68lULNakp17Yihn2xn1Dhk9DeqDD6FfXDh2Ei%2F0YGdXYpHZVNQLJsmJsyN8bLaQ%2FF281zEA97bUTsZ4FX3sR5AeZGZlzOc6qWWFGoX63vYedJB%2BdVO2SgKeda7cIHQlV2EZaBps7JDbEegeSPOR&X-Amz-Signature=99c239f2c06be4e19c95f0b5889ecbb55de295cde2f2924368507cedb797d669&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKDHTZU5%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIA2B5cvMOE91wq%2B81gaS2o%2B7bKFqayqY7p5%2BJ6nwsprwAiA%2FbdYYJWjx85GyLPhU4%2BXXUlZCawNBHidebno8eD0Xeir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMHRZPsDwVOCRkX%2BODKtwDLB4ixHUogAjvDnuymtW9%2Fe6JXv%2FfrLeTWjEguGb%2BFcrVyCHs86cmJk9A%2F3TisZ2BZbjhHnrEYmaJ3PD9Ya41MFasAdyndyVtaelQNqtYE0GCzJgrNKzAQPEl%2F4ISZktO5gGtFjuEKuasoMASrEd1IpizXa2tO26g7LxlaCs6jI9MLY%2Bp82YkVW%2BCs2LsZOA8AM%2BNR5Gxf%2FF2GLTGhOMY5dZTRSsO2bW%2BK4pRJHtGlMUoVhoryk%2BaUNY%2BKSHdisLMpnu5efs8cv6doKxFWgDX%2FQO%2F%2BEb1nM3LDkwufFmANcr%2B2CbVHMVK2YK5J7Vd0lZeG9cyuNDIPwx3fADts1oO0AQd8stw6K0od1dPTeFwS9gmvS4%2FrozDnNaom5%2BDsLaarMawexZz5703qJ2W2KWFdBx8Su%2BmxBVGouyUVTXL7CrTOnxLyDhqlEBN3XNqJ32TpWUXuFrDE8QPfpemgVWaDt1FT5QdhPrREtnWbPLLgoNlpraSSTnUx2sQG0GiBc8yTbzPC0%2B%2FFSmlki0W8n9YbKCcev%2Bgz5BcPaI9JQO39It7Ruj4WNTb2bLhV4m2%2B69qBrKXxjz1pbzxAuc2fDe8ml7yF9sDpw13mNSfYYfxkx4qu%2BbWMF%2FDP8uQfGgw%2F52RwQY6pgEYb6oobGNimEMLQH%2FqBugeT%2FTg43oNF2iPuTvORNMWM7HBEJyRav7PQfvW77%2BJn4qLyhVT%2FJIiW68lULNakp17Yihn2xn1Dhk9DeqDD6FfXDh2Ei%2F0YGdXYpHZVNQLJsmJsyN8bLaQ%2FF281zEA97bUTsZ4FX3sR5AeZGZlzOc6qWWFGoX63vYedJB%2BdVO2SgKeda7cIHQlV2EZaBps7JDbEegeSPOR&X-Amz-Signature=039d64de94bfa0dd6249ddf1784c9c43bc3d3d7dcad66a363b9786edcf9c1282&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKDHTZU5%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIA2B5cvMOE91wq%2B81gaS2o%2B7bKFqayqY7p5%2BJ6nwsprwAiA%2FbdYYJWjx85GyLPhU4%2BXXUlZCawNBHidebno8eD0Xeir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMHRZPsDwVOCRkX%2BODKtwDLB4ixHUogAjvDnuymtW9%2Fe6JXv%2FfrLeTWjEguGb%2BFcrVyCHs86cmJk9A%2F3TisZ2BZbjhHnrEYmaJ3PD9Ya41MFasAdyndyVtaelQNqtYE0GCzJgrNKzAQPEl%2F4ISZktO5gGtFjuEKuasoMASrEd1IpizXa2tO26g7LxlaCs6jI9MLY%2Bp82YkVW%2BCs2LsZOA8AM%2BNR5Gxf%2FF2GLTGhOMY5dZTRSsO2bW%2BK4pRJHtGlMUoVhoryk%2BaUNY%2BKSHdisLMpnu5efs8cv6doKxFWgDX%2FQO%2F%2BEb1nM3LDkwufFmANcr%2B2CbVHMVK2YK5J7Vd0lZeG9cyuNDIPwx3fADts1oO0AQd8stw6K0od1dPTeFwS9gmvS4%2FrozDnNaom5%2BDsLaarMawexZz5703qJ2W2KWFdBx8Su%2BmxBVGouyUVTXL7CrTOnxLyDhqlEBN3XNqJ32TpWUXuFrDE8QPfpemgVWaDt1FT5QdhPrREtnWbPLLgoNlpraSSTnUx2sQG0GiBc8yTbzPC0%2B%2FFSmlki0W8n9YbKCcev%2Bgz5BcPaI9JQO39It7Ruj4WNTb2bLhV4m2%2B69qBrKXxjz1pbzxAuc2fDe8ml7yF9sDpw13mNSfYYfxkx4qu%2BbWMF%2FDP8uQfGgw%2F52RwQY6pgEYb6oobGNimEMLQH%2FqBugeT%2FTg43oNF2iPuTvORNMWM7HBEJyRav7PQfvW77%2BJn4qLyhVT%2FJIiW68lULNakp17Yihn2xn1Dhk9DeqDD6FfXDh2Ei%2F0YGdXYpHZVNQLJsmJsyN8bLaQ%2FF281zEA97bUTsZ4FX3sR5AeZGZlzOc6qWWFGoX63vYedJB%2BdVO2SgKeda7cIHQlV2EZaBps7JDbEegeSPOR&X-Amz-Signature=2ebc871e0c8bed568eb1677fbe50d0b8115b1641c5afa21c271ce452d10a34ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKDHTZU5%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIA2B5cvMOE91wq%2B81gaS2o%2B7bKFqayqY7p5%2BJ6nwsprwAiA%2FbdYYJWjx85GyLPhU4%2BXXUlZCawNBHidebno8eD0Xeir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMHRZPsDwVOCRkX%2BODKtwDLB4ixHUogAjvDnuymtW9%2Fe6JXv%2FfrLeTWjEguGb%2BFcrVyCHs86cmJk9A%2F3TisZ2BZbjhHnrEYmaJ3PD9Ya41MFasAdyndyVtaelQNqtYE0GCzJgrNKzAQPEl%2F4ISZktO5gGtFjuEKuasoMASrEd1IpizXa2tO26g7LxlaCs6jI9MLY%2Bp82YkVW%2BCs2LsZOA8AM%2BNR5Gxf%2FF2GLTGhOMY5dZTRSsO2bW%2BK4pRJHtGlMUoVhoryk%2BaUNY%2BKSHdisLMpnu5efs8cv6doKxFWgDX%2FQO%2F%2BEb1nM3LDkwufFmANcr%2B2CbVHMVK2YK5J7Vd0lZeG9cyuNDIPwx3fADts1oO0AQd8stw6K0od1dPTeFwS9gmvS4%2FrozDnNaom5%2BDsLaarMawexZz5703qJ2W2KWFdBx8Su%2BmxBVGouyUVTXL7CrTOnxLyDhqlEBN3XNqJ32TpWUXuFrDE8QPfpemgVWaDt1FT5QdhPrREtnWbPLLgoNlpraSSTnUx2sQG0GiBc8yTbzPC0%2B%2FFSmlki0W8n9YbKCcev%2Bgz5BcPaI9JQO39It7Ruj4WNTb2bLhV4m2%2B69qBrKXxjz1pbzxAuc2fDe8ml7yF9sDpw13mNSfYYfxkx4qu%2BbWMF%2FDP8uQfGgw%2F52RwQY6pgEYb6oobGNimEMLQH%2FqBugeT%2FTg43oNF2iPuTvORNMWM7HBEJyRav7PQfvW77%2BJn4qLyhVT%2FJIiW68lULNakp17Yihn2xn1Dhk9DeqDD6FfXDh2Ei%2F0YGdXYpHZVNQLJsmJsyN8bLaQ%2FF281zEA97bUTsZ4FX3sR5AeZGZlzOc6qWWFGoX63vYedJB%2BdVO2SgKeda7cIHQlV2EZaBps7JDbEegeSPOR&X-Amz-Signature=db2ecdefcc208f97a7c77e676ac8e006e113ad74c98a66d7302c11f0855030b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKDHTZU5%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIA2B5cvMOE91wq%2B81gaS2o%2B7bKFqayqY7p5%2BJ6nwsprwAiA%2FbdYYJWjx85GyLPhU4%2BXXUlZCawNBHidebno8eD0Xeir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMHRZPsDwVOCRkX%2BODKtwDLB4ixHUogAjvDnuymtW9%2Fe6JXv%2FfrLeTWjEguGb%2BFcrVyCHs86cmJk9A%2F3TisZ2BZbjhHnrEYmaJ3PD9Ya41MFasAdyndyVtaelQNqtYE0GCzJgrNKzAQPEl%2F4ISZktO5gGtFjuEKuasoMASrEd1IpizXa2tO26g7LxlaCs6jI9MLY%2Bp82YkVW%2BCs2LsZOA8AM%2BNR5Gxf%2FF2GLTGhOMY5dZTRSsO2bW%2BK4pRJHtGlMUoVhoryk%2BaUNY%2BKSHdisLMpnu5efs8cv6doKxFWgDX%2FQO%2F%2BEb1nM3LDkwufFmANcr%2B2CbVHMVK2YK5J7Vd0lZeG9cyuNDIPwx3fADts1oO0AQd8stw6K0od1dPTeFwS9gmvS4%2FrozDnNaom5%2BDsLaarMawexZz5703qJ2W2KWFdBx8Su%2BmxBVGouyUVTXL7CrTOnxLyDhqlEBN3XNqJ32TpWUXuFrDE8QPfpemgVWaDt1FT5QdhPrREtnWbPLLgoNlpraSSTnUx2sQG0GiBc8yTbzPC0%2B%2FFSmlki0W8n9YbKCcev%2Bgz5BcPaI9JQO39It7Ruj4WNTb2bLhV4m2%2B69qBrKXxjz1pbzxAuc2fDe8ml7yF9sDpw13mNSfYYfxkx4qu%2BbWMF%2FDP8uQfGgw%2F52RwQY6pgEYb6oobGNimEMLQH%2FqBugeT%2FTg43oNF2iPuTvORNMWM7HBEJyRav7PQfvW77%2BJn4qLyhVT%2FJIiW68lULNakp17Yihn2xn1Dhk9DeqDD6FfXDh2Ei%2F0YGdXYpHZVNQLJsmJsyN8bLaQ%2FF281zEA97bUTsZ4FX3sR5AeZGZlzOc6qWWFGoX63vYedJB%2BdVO2SgKeda7cIHQlV2EZaBps7JDbEegeSPOR&X-Amz-Signature=7a7b672a2816bc39dd4050028dcb7877f387463a1e28d4bf3735743d2b44f382&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
