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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSAVRRMJ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAY%2Fl0qn5jBX3t0zj4faiPM7C6rszAVaay3H7C68Js3jAiEA4StZvV2LMCrjmQhISSgBTSLhikNobLP4mzC2DIDlTfcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDHXIzQ5WilszUe9aSCrcA1naLvTmZ7YxLcS1AC19MXLQFV8Zw%2FzQ28qoiGmEE5Q7BlbRgqsrrFBnvrPYCBlkdxZwL8dhtKVv70XW9AWNiXi%2BvWUJDc7BWOdQYzCZ%2F2dfUOIJFog93RJA709cIvmnR%2FZCnXTtB4L75FNd5jKLSVYk7PEklQXsLM6MWNa3DY%2FkwzTOufP0XJ9z7XOKM6CqTjZulQqBlCU0vGbcKhVGaypFqk94pBzEsURBpdRz%2BeK9PR%2BspfuLRd6f6%2FVMUzkZEEsC7UQiDFmS3R6vJzit7g4%2B%2FlhjN7l6RGO2PM0nITchSAy1%2Balge65tDcD0we81pYz2fGQQQqPNHBcmte1txxi6uDQZCZaUd9TyWLrCikTy6KcURvpxG6tCKZ66HccNxbT0r6kVAProChOCzdYhH9U8Vf62IyoNOG9VqkerRmJihQ0%2BcI1nO2oq85%2B6SrFTlt%2FwZGZmT4ZkQDvILiyiXOzmW1DrfSwCr86SlZp7M8YifNFLEdOyG1t8Q%2BHbj%2FLpehgfnOsl2HLCcXqzOQMXJFX1Sl%2FjVxcWhDiD5vVdow9dknCoFYu6G8PAH%2BNcl9DT5oqG%2BeBdCWNNiaS8yn%2BwJkfxWkM6IWEz%2F3%2BMZmGcMKL8%2FVgTrzNfIOZcE4r8MOXN8L0GOqUBmENenBwUCfeobe1Pa7mj8naAvgLTe%2BgPBiNMcTflEWpcRnPJhOzt3ZCxn%2BXnQNy3K4MQVDlFW2e7a2JeyvwnHGEeURHoeaXwGZbW7wJNv1t8Dpa%2BUs6ZqOEF8Z8BD10uIUHsBVhJw2bUbG1DuiAUIdvEtZuLszYu%2BYyGd7YulNyXW%2BF%2FSZCOlZFeoyKwQjLMoYp77RByQwGAtAxxHfs3ap1IlSnv&X-Amz-Signature=e6b26f909bc49f308cf2e0e35c44f6ba31b31e6249789c5294c96c3e560b97f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSAVRRMJ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAY%2Fl0qn5jBX3t0zj4faiPM7C6rszAVaay3H7C68Js3jAiEA4StZvV2LMCrjmQhISSgBTSLhikNobLP4mzC2DIDlTfcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDHXIzQ5WilszUe9aSCrcA1naLvTmZ7YxLcS1AC19MXLQFV8Zw%2FzQ28qoiGmEE5Q7BlbRgqsrrFBnvrPYCBlkdxZwL8dhtKVv70XW9AWNiXi%2BvWUJDc7BWOdQYzCZ%2F2dfUOIJFog93RJA709cIvmnR%2FZCnXTtB4L75FNd5jKLSVYk7PEklQXsLM6MWNa3DY%2FkwzTOufP0XJ9z7XOKM6CqTjZulQqBlCU0vGbcKhVGaypFqk94pBzEsURBpdRz%2BeK9PR%2BspfuLRd6f6%2FVMUzkZEEsC7UQiDFmS3R6vJzit7g4%2B%2FlhjN7l6RGO2PM0nITchSAy1%2Balge65tDcD0we81pYz2fGQQQqPNHBcmte1txxi6uDQZCZaUd9TyWLrCikTy6KcURvpxG6tCKZ66HccNxbT0r6kVAProChOCzdYhH9U8Vf62IyoNOG9VqkerRmJihQ0%2BcI1nO2oq85%2B6SrFTlt%2FwZGZmT4ZkQDvILiyiXOzmW1DrfSwCr86SlZp7M8YifNFLEdOyG1t8Q%2BHbj%2FLpehgfnOsl2HLCcXqzOQMXJFX1Sl%2FjVxcWhDiD5vVdow9dknCoFYu6G8PAH%2BNcl9DT5oqG%2BeBdCWNNiaS8yn%2BwJkfxWkM6IWEz%2F3%2BMZmGcMKL8%2FVgTrzNfIOZcE4r8MOXN8L0GOqUBmENenBwUCfeobe1Pa7mj8naAvgLTe%2BgPBiNMcTflEWpcRnPJhOzt3ZCxn%2BXnQNy3K4MQVDlFW2e7a2JeyvwnHGEeURHoeaXwGZbW7wJNv1t8Dpa%2BUs6ZqOEF8Z8BD10uIUHsBVhJw2bUbG1DuiAUIdvEtZuLszYu%2BYyGd7YulNyXW%2BF%2FSZCOlZFeoyKwQjLMoYp77RByQwGAtAxxHfs3ap1IlSnv&X-Amz-Signature=9d8e046e5970965fd4cac4c4be9453915ba448dad2b76997e279e9ae57329991&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSAVRRMJ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAY%2Fl0qn5jBX3t0zj4faiPM7C6rszAVaay3H7C68Js3jAiEA4StZvV2LMCrjmQhISSgBTSLhikNobLP4mzC2DIDlTfcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDHXIzQ5WilszUe9aSCrcA1naLvTmZ7YxLcS1AC19MXLQFV8Zw%2FzQ28qoiGmEE5Q7BlbRgqsrrFBnvrPYCBlkdxZwL8dhtKVv70XW9AWNiXi%2BvWUJDc7BWOdQYzCZ%2F2dfUOIJFog93RJA709cIvmnR%2FZCnXTtB4L75FNd5jKLSVYk7PEklQXsLM6MWNa3DY%2FkwzTOufP0XJ9z7XOKM6CqTjZulQqBlCU0vGbcKhVGaypFqk94pBzEsURBpdRz%2BeK9PR%2BspfuLRd6f6%2FVMUzkZEEsC7UQiDFmS3R6vJzit7g4%2B%2FlhjN7l6RGO2PM0nITchSAy1%2Balge65tDcD0we81pYz2fGQQQqPNHBcmte1txxi6uDQZCZaUd9TyWLrCikTy6KcURvpxG6tCKZ66HccNxbT0r6kVAProChOCzdYhH9U8Vf62IyoNOG9VqkerRmJihQ0%2BcI1nO2oq85%2B6SrFTlt%2FwZGZmT4ZkQDvILiyiXOzmW1DrfSwCr86SlZp7M8YifNFLEdOyG1t8Q%2BHbj%2FLpehgfnOsl2HLCcXqzOQMXJFX1Sl%2FjVxcWhDiD5vVdow9dknCoFYu6G8PAH%2BNcl9DT5oqG%2BeBdCWNNiaS8yn%2BwJkfxWkM6IWEz%2F3%2BMZmGcMKL8%2FVgTrzNfIOZcE4r8MOXN8L0GOqUBmENenBwUCfeobe1Pa7mj8naAvgLTe%2BgPBiNMcTflEWpcRnPJhOzt3ZCxn%2BXnQNy3K4MQVDlFW2e7a2JeyvwnHGEeURHoeaXwGZbW7wJNv1t8Dpa%2BUs6ZqOEF8Z8BD10uIUHsBVhJw2bUbG1DuiAUIdvEtZuLszYu%2BYyGd7YulNyXW%2BF%2FSZCOlZFeoyKwQjLMoYp77RByQwGAtAxxHfs3ap1IlSnv&X-Amz-Signature=6e437e3c51ff0117d037d1e059863aceefe361666ad0af9228522e98043564a4&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSAVRRMJ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAY%2Fl0qn5jBX3t0zj4faiPM7C6rszAVaay3H7C68Js3jAiEA4StZvV2LMCrjmQhISSgBTSLhikNobLP4mzC2DIDlTfcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDHXIzQ5WilszUe9aSCrcA1naLvTmZ7YxLcS1AC19MXLQFV8Zw%2FzQ28qoiGmEE5Q7BlbRgqsrrFBnvrPYCBlkdxZwL8dhtKVv70XW9AWNiXi%2BvWUJDc7BWOdQYzCZ%2F2dfUOIJFog93RJA709cIvmnR%2FZCnXTtB4L75FNd5jKLSVYk7PEklQXsLM6MWNa3DY%2FkwzTOufP0XJ9z7XOKM6CqTjZulQqBlCU0vGbcKhVGaypFqk94pBzEsURBpdRz%2BeK9PR%2BspfuLRd6f6%2FVMUzkZEEsC7UQiDFmS3R6vJzit7g4%2B%2FlhjN7l6RGO2PM0nITchSAy1%2Balge65tDcD0we81pYz2fGQQQqPNHBcmte1txxi6uDQZCZaUd9TyWLrCikTy6KcURvpxG6tCKZ66HccNxbT0r6kVAProChOCzdYhH9U8Vf62IyoNOG9VqkerRmJihQ0%2BcI1nO2oq85%2B6SrFTlt%2FwZGZmT4ZkQDvILiyiXOzmW1DrfSwCr86SlZp7M8YifNFLEdOyG1t8Q%2BHbj%2FLpehgfnOsl2HLCcXqzOQMXJFX1Sl%2FjVxcWhDiD5vVdow9dknCoFYu6G8PAH%2BNcl9DT5oqG%2BeBdCWNNiaS8yn%2BwJkfxWkM6IWEz%2F3%2BMZmGcMKL8%2FVgTrzNfIOZcE4r8MOXN8L0GOqUBmENenBwUCfeobe1Pa7mj8naAvgLTe%2BgPBiNMcTflEWpcRnPJhOzt3ZCxn%2BXnQNy3K4MQVDlFW2e7a2JeyvwnHGEeURHoeaXwGZbW7wJNv1t8Dpa%2BUs6ZqOEF8Z8BD10uIUHsBVhJw2bUbG1DuiAUIdvEtZuLszYu%2BYyGd7YulNyXW%2BF%2FSZCOlZFeoyKwQjLMoYp77RByQwGAtAxxHfs3ap1IlSnv&X-Amz-Signature=b289caa92387ef692fb158364bc3dcdaab10383ae52ff7501795313a6643eee8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSAVRRMJ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAY%2Fl0qn5jBX3t0zj4faiPM7C6rszAVaay3H7C68Js3jAiEA4StZvV2LMCrjmQhISSgBTSLhikNobLP4mzC2DIDlTfcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDHXIzQ5WilszUe9aSCrcA1naLvTmZ7YxLcS1AC19MXLQFV8Zw%2FzQ28qoiGmEE5Q7BlbRgqsrrFBnvrPYCBlkdxZwL8dhtKVv70XW9AWNiXi%2BvWUJDc7BWOdQYzCZ%2F2dfUOIJFog93RJA709cIvmnR%2FZCnXTtB4L75FNd5jKLSVYk7PEklQXsLM6MWNa3DY%2FkwzTOufP0XJ9z7XOKM6CqTjZulQqBlCU0vGbcKhVGaypFqk94pBzEsURBpdRz%2BeK9PR%2BspfuLRd6f6%2FVMUzkZEEsC7UQiDFmS3R6vJzit7g4%2B%2FlhjN7l6RGO2PM0nITchSAy1%2Balge65tDcD0we81pYz2fGQQQqPNHBcmte1txxi6uDQZCZaUd9TyWLrCikTy6KcURvpxG6tCKZ66HccNxbT0r6kVAProChOCzdYhH9U8Vf62IyoNOG9VqkerRmJihQ0%2BcI1nO2oq85%2B6SrFTlt%2FwZGZmT4ZkQDvILiyiXOzmW1DrfSwCr86SlZp7M8YifNFLEdOyG1t8Q%2BHbj%2FLpehgfnOsl2HLCcXqzOQMXJFX1Sl%2FjVxcWhDiD5vVdow9dknCoFYu6G8PAH%2BNcl9DT5oqG%2BeBdCWNNiaS8yn%2BwJkfxWkM6IWEz%2F3%2BMZmGcMKL8%2FVgTrzNfIOZcE4r8MOXN8L0GOqUBmENenBwUCfeobe1Pa7mj8naAvgLTe%2BgPBiNMcTflEWpcRnPJhOzt3ZCxn%2BXnQNy3K4MQVDlFW2e7a2JeyvwnHGEeURHoeaXwGZbW7wJNv1t8Dpa%2BUs6ZqOEF8Z8BD10uIUHsBVhJw2bUbG1DuiAUIdvEtZuLszYu%2BYyGd7YulNyXW%2BF%2FSZCOlZFeoyKwQjLMoYp77RByQwGAtAxxHfs3ap1IlSnv&X-Amz-Signature=79c83d43a9b8d8665c4981fcc056235eaa7a29f7f364ae26c96b407e0319e9ca&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
