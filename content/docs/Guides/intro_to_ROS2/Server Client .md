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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFDGJCQS%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1eEOrJWIqlSzvSusvYkEIigvbenW0rsGuslVsqK8YvQIhAOPsQ5LqnzY9W4Sw6i4R%2B6xCzyFMaSBPDyIVuvNXwT3VKv8DCHsQABoMNjM3NDIzMTgzODA1IgzPHFMSnLQHGy%2FyrBUq3AOTHDkeDkXnoQ6DQrLdwY6dLcRvHmsMhu42BQtFJHkvvaSfSFvNC2Jftiulj1s8dbbYAZ3Z4OOn2kKJRd6XnhatPEGO67AYp3Gginxyj1e2VBm%2FsNEIi%2FDnersz15d3vxL6ZKQoYQczW%2BWfqihgVu3TFIsmDeKLBjCYaJdO3t2FGOVrWXiEt5lgI1O%2BvkRkcLzAw2PUPFM4ymLdbfw11kpl5sP5mPeEsFFqwo%2Bpm7mGcLyobw0XVZSVR5bnk5hJWIZS6mNUNLVgHQAvXefhW3khEP6FKxiRnyQcP0Z7NP%2Bt9jytRhGyTsRTWjQH0WzINuWkhEXQyuRtGO%2FSco62nZw6UrKn6apqkEFUZcw76i9MDP7WCGeFSvnSpJnEW3XOe7dbqNJnfD9N4A%2BCHloyR7WKmPlRDu9shBu2nDCv7A3gGMwYCOf9n4h5UspW0BysK7Wf14OIb%2FGFV47FsCvek1mnzKrGltCh5N2gu9uRiHQltcgL%2F%2FleTV5bEBrJjxYGSDZQuHoPtfGf0UFtgH7LhMh%2Bu7mmqRrrTUtTdgOq%2B82Yy4PnBs%2FTjQNnN5fY1vTSlToVSXMIdcGbua0eWke3mpB%2FSdSrl54NtoyA3AbSXI7zWbNHK3c1LZVyWY%2F%2FcDCwsIrABjqkAQ6PB4xBnIE6ezA9FyXeuSYAQf5tqRAI4m6yiMGTqBKZrad54fMZkCDUWsKRhKISvxCc31L9lwixeV2OMhLAp4XDQ09obv08o6%2B%2BYUYKyQpxnRlE3KMorTKMK62jluS21P6zSxr32bmrie67uKSS7uYFGy9M21Suz0HjOaPpnXxznkpxSxYb6Bo5KBd%2FIGEQS4zAlI5JfgUkxnVGPZB2LQt5mI4H&X-Amz-Signature=ff1a57181e28fbf5aff856a87d5331a33bde4cd9f38dedb9f40c72954bb09dae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFDGJCQS%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1eEOrJWIqlSzvSusvYkEIigvbenW0rsGuslVsqK8YvQIhAOPsQ5LqnzY9W4Sw6i4R%2B6xCzyFMaSBPDyIVuvNXwT3VKv8DCHsQABoMNjM3NDIzMTgzODA1IgzPHFMSnLQHGy%2FyrBUq3AOTHDkeDkXnoQ6DQrLdwY6dLcRvHmsMhu42BQtFJHkvvaSfSFvNC2Jftiulj1s8dbbYAZ3Z4OOn2kKJRd6XnhatPEGO67AYp3Gginxyj1e2VBm%2FsNEIi%2FDnersz15d3vxL6ZKQoYQczW%2BWfqihgVu3TFIsmDeKLBjCYaJdO3t2FGOVrWXiEt5lgI1O%2BvkRkcLzAw2PUPFM4ymLdbfw11kpl5sP5mPeEsFFqwo%2Bpm7mGcLyobw0XVZSVR5bnk5hJWIZS6mNUNLVgHQAvXefhW3khEP6FKxiRnyQcP0Z7NP%2Bt9jytRhGyTsRTWjQH0WzINuWkhEXQyuRtGO%2FSco62nZw6UrKn6apqkEFUZcw76i9MDP7WCGeFSvnSpJnEW3XOe7dbqNJnfD9N4A%2BCHloyR7WKmPlRDu9shBu2nDCv7A3gGMwYCOf9n4h5UspW0BysK7Wf14OIb%2FGFV47FsCvek1mnzKrGltCh5N2gu9uRiHQltcgL%2F%2FleTV5bEBrJjxYGSDZQuHoPtfGf0UFtgH7LhMh%2Bu7mmqRrrTUtTdgOq%2B82Yy4PnBs%2FTjQNnN5fY1vTSlToVSXMIdcGbua0eWke3mpB%2FSdSrl54NtoyA3AbSXI7zWbNHK3c1LZVyWY%2F%2FcDCwsIrABjqkAQ6PB4xBnIE6ezA9FyXeuSYAQf5tqRAI4m6yiMGTqBKZrad54fMZkCDUWsKRhKISvxCc31L9lwixeV2OMhLAp4XDQ09obv08o6%2B%2BYUYKyQpxnRlE3KMorTKMK62jluS21P6zSxr32bmrie67uKSS7uYFGy9M21Suz0HjOaPpnXxznkpxSxYb6Bo5KBd%2FIGEQS4zAlI5JfgUkxnVGPZB2LQt5mI4H&X-Amz-Signature=5a146d061c0c8ac92be490870ea666658061dee6a994a8262e35da1fc13f3b4e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFDGJCQS%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1eEOrJWIqlSzvSusvYkEIigvbenW0rsGuslVsqK8YvQIhAOPsQ5LqnzY9W4Sw6i4R%2B6xCzyFMaSBPDyIVuvNXwT3VKv8DCHsQABoMNjM3NDIzMTgzODA1IgzPHFMSnLQHGy%2FyrBUq3AOTHDkeDkXnoQ6DQrLdwY6dLcRvHmsMhu42BQtFJHkvvaSfSFvNC2Jftiulj1s8dbbYAZ3Z4OOn2kKJRd6XnhatPEGO67AYp3Gginxyj1e2VBm%2FsNEIi%2FDnersz15d3vxL6ZKQoYQczW%2BWfqihgVu3TFIsmDeKLBjCYaJdO3t2FGOVrWXiEt5lgI1O%2BvkRkcLzAw2PUPFM4ymLdbfw11kpl5sP5mPeEsFFqwo%2Bpm7mGcLyobw0XVZSVR5bnk5hJWIZS6mNUNLVgHQAvXefhW3khEP6FKxiRnyQcP0Z7NP%2Bt9jytRhGyTsRTWjQH0WzINuWkhEXQyuRtGO%2FSco62nZw6UrKn6apqkEFUZcw76i9MDP7WCGeFSvnSpJnEW3XOe7dbqNJnfD9N4A%2BCHloyR7WKmPlRDu9shBu2nDCv7A3gGMwYCOf9n4h5UspW0BysK7Wf14OIb%2FGFV47FsCvek1mnzKrGltCh5N2gu9uRiHQltcgL%2F%2FleTV5bEBrJjxYGSDZQuHoPtfGf0UFtgH7LhMh%2Bu7mmqRrrTUtTdgOq%2B82Yy4PnBs%2FTjQNnN5fY1vTSlToVSXMIdcGbua0eWke3mpB%2FSdSrl54NtoyA3AbSXI7zWbNHK3c1LZVyWY%2F%2FcDCwsIrABjqkAQ6PB4xBnIE6ezA9FyXeuSYAQf5tqRAI4m6yiMGTqBKZrad54fMZkCDUWsKRhKISvxCc31L9lwixeV2OMhLAp4XDQ09obv08o6%2B%2BYUYKyQpxnRlE3KMorTKMK62jluS21P6zSxr32bmrie67uKSS7uYFGy9M21Suz0HjOaPpnXxznkpxSxYb6Bo5KBd%2FIGEQS4zAlI5JfgUkxnVGPZB2LQt5mI4H&X-Amz-Signature=9a6f820f180287be246c3b8844cd775ce66f9b011ab6c55915944b868b8574d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFDGJCQS%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1eEOrJWIqlSzvSusvYkEIigvbenW0rsGuslVsqK8YvQIhAOPsQ5LqnzY9W4Sw6i4R%2B6xCzyFMaSBPDyIVuvNXwT3VKv8DCHsQABoMNjM3NDIzMTgzODA1IgzPHFMSnLQHGy%2FyrBUq3AOTHDkeDkXnoQ6DQrLdwY6dLcRvHmsMhu42BQtFJHkvvaSfSFvNC2Jftiulj1s8dbbYAZ3Z4OOn2kKJRd6XnhatPEGO67AYp3Gginxyj1e2VBm%2FsNEIi%2FDnersz15d3vxL6ZKQoYQczW%2BWfqihgVu3TFIsmDeKLBjCYaJdO3t2FGOVrWXiEt5lgI1O%2BvkRkcLzAw2PUPFM4ymLdbfw11kpl5sP5mPeEsFFqwo%2Bpm7mGcLyobw0XVZSVR5bnk5hJWIZS6mNUNLVgHQAvXefhW3khEP6FKxiRnyQcP0Z7NP%2Bt9jytRhGyTsRTWjQH0WzINuWkhEXQyuRtGO%2FSco62nZw6UrKn6apqkEFUZcw76i9MDP7WCGeFSvnSpJnEW3XOe7dbqNJnfD9N4A%2BCHloyR7WKmPlRDu9shBu2nDCv7A3gGMwYCOf9n4h5UspW0BysK7Wf14OIb%2FGFV47FsCvek1mnzKrGltCh5N2gu9uRiHQltcgL%2F%2FleTV5bEBrJjxYGSDZQuHoPtfGf0UFtgH7LhMh%2Bu7mmqRrrTUtTdgOq%2B82Yy4PnBs%2FTjQNnN5fY1vTSlToVSXMIdcGbua0eWke3mpB%2FSdSrl54NtoyA3AbSXI7zWbNHK3c1LZVyWY%2F%2FcDCwsIrABjqkAQ6PB4xBnIE6ezA9FyXeuSYAQf5tqRAI4m6yiMGTqBKZrad54fMZkCDUWsKRhKISvxCc31L9lwixeV2OMhLAp4XDQ09obv08o6%2B%2BYUYKyQpxnRlE3KMorTKMK62jluS21P6zSxr32bmrie67uKSS7uYFGy9M21Suz0HjOaPpnXxznkpxSxYb6Bo5KBd%2FIGEQS4zAlI5JfgUkxnVGPZB2LQt5mI4H&X-Amz-Signature=d5422e18923a91b914a54795a19f5e05b48393a9e98be7e9c48e7d24c0354265&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFDGJCQS%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1eEOrJWIqlSzvSusvYkEIigvbenW0rsGuslVsqK8YvQIhAOPsQ5LqnzY9W4Sw6i4R%2B6xCzyFMaSBPDyIVuvNXwT3VKv8DCHsQABoMNjM3NDIzMTgzODA1IgzPHFMSnLQHGy%2FyrBUq3AOTHDkeDkXnoQ6DQrLdwY6dLcRvHmsMhu42BQtFJHkvvaSfSFvNC2Jftiulj1s8dbbYAZ3Z4OOn2kKJRd6XnhatPEGO67AYp3Gginxyj1e2VBm%2FsNEIi%2FDnersz15d3vxL6ZKQoYQczW%2BWfqihgVu3TFIsmDeKLBjCYaJdO3t2FGOVrWXiEt5lgI1O%2BvkRkcLzAw2PUPFM4ymLdbfw11kpl5sP5mPeEsFFqwo%2Bpm7mGcLyobw0XVZSVR5bnk5hJWIZS6mNUNLVgHQAvXefhW3khEP6FKxiRnyQcP0Z7NP%2Bt9jytRhGyTsRTWjQH0WzINuWkhEXQyuRtGO%2FSco62nZw6UrKn6apqkEFUZcw76i9MDP7WCGeFSvnSpJnEW3XOe7dbqNJnfD9N4A%2BCHloyR7WKmPlRDu9shBu2nDCv7A3gGMwYCOf9n4h5UspW0BysK7Wf14OIb%2FGFV47FsCvek1mnzKrGltCh5N2gu9uRiHQltcgL%2F%2FleTV5bEBrJjxYGSDZQuHoPtfGf0UFtgH7LhMh%2Bu7mmqRrrTUtTdgOq%2B82Yy4PnBs%2FTjQNnN5fY1vTSlToVSXMIdcGbua0eWke3mpB%2FSdSrl54NtoyA3AbSXI7zWbNHK3c1LZVyWY%2F%2FcDCwsIrABjqkAQ6PB4xBnIE6ezA9FyXeuSYAQf5tqRAI4m6yiMGTqBKZrad54fMZkCDUWsKRhKISvxCc31L9lwixeV2OMhLAp4XDQ09obv08o6%2B%2BYUYKyQpxnRlE3KMorTKMK62jluS21P6zSxr32bmrie67uKSS7uYFGy9M21Suz0HjOaPpnXxznkpxSxYb6Bo5KBd%2FIGEQS4zAlI5JfgUkxnVGPZB2LQt5mI4H&X-Amz-Signature=98cdf376c7a58bc04196cff14a0e8dde3ec03a27c0e7a95daf2fd3c35cc025d1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
