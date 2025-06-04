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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUVWQOL%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T061336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIF4IyCry%2Bl16JDEErcmuyG%2FaW%2FQ7sKIXTekQ3rzmsUiDAiEA6wZSYMwaitokztoda2P0curlvjrUGQ0yT02glxhp%2BVAq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDJtYCM2zxpNAj5iOOCrcA5hp9obn%2FxN%2BQVZ6KFzO2Y%2FBB18PDvfIutUiROeCBwR8hqvnhfe28%2FX%2F%2BkgQSL9yaOd1mvQZDa27FsQyJJFxEHdRGAit8ar56oI0roRb2WwtWK355uTyxXH7xGwG%2F85I6sUekr9g15EKeLgimUcS6F9Jk5xBBXyXEttUfRR%2BuXOIhGSt2Qw8XvDcMu6Jb3fkehUExk5Lx2uYsD5XsLmUIMDRinEGiQPDyU2F5g3ifgIAAv%2FBHkDbq2itGJ6CwCNP9kbuFOWrtpCsmHTo7pF1iVer9jz4Sxx00dddgjAobmn60rY2iahbMaO4OWBkPb%2FvzM%2FcFsMwXpkH2yGMmHryYuwci3qDUwbUE3MxNMOeCdb1gL6F9dianP0uAvWDvVflKy0e%2FuqqyzEsbyPl1CjA%2BHoBWUK6I8%2BHh1Dnwz9%2FTELHAPNy%2BvgmQoTBH9vt2775KRFaIIsHHKcQKzUqxaCBTS6gMR87llYhBMV%2FHEQhx4%2B%2BKit4phRHqeGfuKAQyzN9yS5rNApPMlg1M%2BGEGfv%2FbwrVR5j1DiMOor9OK%2Bi%2FlfWetrZrzLlpM0dmvL2Kw7ZUc9aJJbmvFvSr10wk9x%2BrZQiYgp0JHW0%2FhtsSjafEcy8ZbyKkhrZ7Y7SSjGEHMMWI%2F8EGOqUB8239cMu1G%2BqC00j4fuGczL3m8SqhXU9A3Nz%2BgvslAMEb9z5UyXrhL3O0VduHWPMFr1Tj3wAjXM2do6Pu2iLkf%2B5iCNRnax38VVAQpENdLV7PSs6rZ4Aq0CvSniLFrSCl9pnEKFOqMoYVPkAB1l4Y%2BFabbe%2F3tbbxvc43qrHL3QnBF5M4jfe4lPgdqvQ%2B1f%2FLB3CDlYKoxV873lahrbBrhNfMrbOu&X-Amz-Signature=48c8020cae303951172e755860b54d1b6014d1ae76af36c4b98109925ffae0ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUVWQOL%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T061336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIF4IyCry%2Bl16JDEErcmuyG%2FaW%2FQ7sKIXTekQ3rzmsUiDAiEA6wZSYMwaitokztoda2P0curlvjrUGQ0yT02glxhp%2BVAq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDJtYCM2zxpNAj5iOOCrcA5hp9obn%2FxN%2BQVZ6KFzO2Y%2FBB18PDvfIutUiROeCBwR8hqvnhfe28%2FX%2F%2BkgQSL9yaOd1mvQZDa27FsQyJJFxEHdRGAit8ar56oI0roRb2WwtWK355uTyxXH7xGwG%2F85I6sUekr9g15EKeLgimUcS6F9Jk5xBBXyXEttUfRR%2BuXOIhGSt2Qw8XvDcMu6Jb3fkehUExk5Lx2uYsD5XsLmUIMDRinEGiQPDyU2F5g3ifgIAAv%2FBHkDbq2itGJ6CwCNP9kbuFOWrtpCsmHTo7pF1iVer9jz4Sxx00dddgjAobmn60rY2iahbMaO4OWBkPb%2FvzM%2FcFsMwXpkH2yGMmHryYuwci3qDUwbUE3MxNMOeCdb1gL6F9dianP0uAvWDvVflKy0e%2FuqqyzEsbyPl1CjA%2BHoBWUK6I8%2BHh1Dnwz9%2FTELHAPNy%2BvgmQoTBH9vt2775KRFaIIsHHKcQKzUqxaCBTS6gMR87llYhBMV%2FHEQhx4%2B%2BKit4phRHqeGfuKAQyzN9yS5rNApPMlg1M%2BGEGfv%2FbwrVR5j1DiMOor9OK%2Bi%2FlfWetrZrzLlpM0dmvL2Kw7ZUc9aJJbmvFvSr10wk9x%2BrZQiYgp0JHW0%2FhtsSjafEcy8ZbyKkhrZ7Y7SSjGEHMMWI%2F8EGOqUB8239cMu1G%2BqC00j4fuGczL3m8SqhXU9A3Nz%2BgvslAMEb9z5UyXrhL3O0VduHWPMFr1Tj3wAjXM2do6Pu2iLkf%2B5iCNRnax38VVAQpENdLV7PSs6rZ4Aq0CvSniLFrSCl9pnEKFOqMoYVPkAB1l4Y%2BFabbe%2F3tbbxvc43qrHL3QnBF5M4jfe4lPgdqvQ%2B1f%2FLB3CDlYKoxV873lahrbBrhNfMrbOu&X-Amz-Signature=4acd3afd7d3ada5daf10d92a81fed7bf82b2f2a396e84804bb4be866e1a98dd8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUVWQOL%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T061336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIF4IyCry%2Bl16JDEErcmuyG%2FaW%2FQ7sKIXTekQ3rzmsUiDAiEA6wZSYMwaitokztoda2P0curlvjrUGQ0yT02glxhp%2BVAq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDJtYCM2zxpNAj5iOOCrcA5hp9obn%2FxN%2BQVZ6KFzO2Y%2FBB18PDvfIutUiROeCBwR8hqvnhfe28%2FX%2F%2BkgQSL9yaOd1mvQZDa27FsQyJJFxEHdRGAit8ar56oI0roRb2WwtWK355uTyxXH7xGwG%2F85I6sUekr9g15EKeLgimUcS6F9Jk5xBBXyXEttUfRR%2BuXOIhGSt2Qw8XvDcMu6Jb3fkehUExk5Lx2uYsD5XsLmUIMDRinEGiQPDyU2F5g3ifgIAAv%2FBHkDbq2itGJ6CwCNP9kbuFOWrtpCsmHTo7pF1iVer9jz4Sxx00dddgjAobmn60rY2iahbMaO4OWBkPb%2FvzM%2FcFsMwXpkH2yGMmHryYuwci3qDUwbUE3MxNMOeCdb1gL6F9dianP0uAvWDvVflKy0e%2FuqqyzEsbyPl1CjA%2BHoBWUK6I8%2BHh1Dnwz9%2FTELHAPNy%2BvgmQoTBH9vt2775KRFaIIsHHKcQKzUqxaCBTS6gMR87llYhBMV%2FHEQhx4%2B%2BKit4phRHqeGfuKAQyzN9yS5rNApPMlg1M%2BGEGfv%2FbwrVR5j1DiMOor9OK%2Bi%2FlfWetrZrzLlpM0dmvL2Kw7ZUc9aJJbmvFvSr10wk9x%2BrZQiYgp0JHW0%2FhtsSjafEcy8ZbyKkhrZ7Y7SSjGEHMMWI%2F8EGOqUB8239cMu1G%2BqC00j4fuGczL3m8SqhXU9A3Nz%2BgvslAMEb9z5UyXrhL3O0VduHWPMFr1Tj3wAjXM2do6Pu2iLkf%2B5iCNRnax38VVAQpENdLV7PSs6rZ4Aq0CvSniLFrSCl9pnEKFOqMoYVPkAB1l4Y%2BFabbe%2F3tbbxvc43qrHL3QnBF5M4jfe4lPgdqvQ%2B1f%2FLB3CDlYKoxV873lahrbBrhNfMrbOu&X-Amz-Signature=f43fe459d248039342ccbc3bb51defc8a0e8cf2070a79d51fbc86ec717c9e288&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUVWQOL%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T061336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIF4IyCry%2Bl16JDEErcmuyG%2FaW%2FQ7sKIXTekQ3rzmsUiDAiEA6wZSYMwaitokztoda2P0curlvjrUGQ0yT02glxhp%2BVAq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDJtYCM2zxpNAj5iOOCrcA5hp9obn%2FxN%2BQVZ6KFzO2Y%2FBB18PDvfIutUiROeCBwR8hqvnhfe28%2FX%2F%2BkgQSL9yaOd1mvQZDa27FsQyJJFxEHdRGAit8ar56oI0roRb2WwtWK355uTyxXH7xGwG%2F85I6sUekr9g15EKeLgimUcS6F9Jk5xBBXyXEttUfRR%2BuXOIhGSt2Qw8XvDcMu6Jb3fkehUExk5Lx2uYsD5XsLmUIMDRinEGiQPDyU2F5g3ifgIAAv%2FBHkDbq2itGJ6CwCNP9kbuFOWrtpCsmHTo7pF1iVer9jz4Sxx00dddgjAobmn60rY2iahbMaO4OWBkPb%2FvzM%2FcFsMwXpkH2yGMmHryYuwci3qDUwbUE3MxNMOeCdb1gL6F9dianP0uAvWDvVflKy0e%2FuqqyzEsbyPl1CjA%2BHoBWUK6I8%2BHh1Dnwz9%2FTELHAPNy%2BvgmQoTBH9vt2775KRFaIIsHHKcQKzUqxaCBTS6gMR87llYhBMV%2FHEQhx4%2B%2BKit4phRHqeGfuKAQyzN9yS5rNApPMlg1M%2BGEGfv%2FbwrVR5j1DiMOor9OK%2Bi%2FlfWetrZrzLlpM0dmvL2Kw7ZUc9aJJbmvFvSr10wk9x%2BrZQiYgp0JHW0%2FhtsSjafEcy8ZbyKkhrZ7Y7SSjGEHMMWI%2F8EGOqUB8239cMu1G%2BqC00j4fuGczL3m8SqhXU9A3Nz%2BgvslAMEb9z5UyXrhL3O0VduHWPMFr1Tj3wAjXM2do6Pu2iLkf%2B5iCNRnax38VVAQpENdLV7PSs6rZ4Aq0CvSniLFrSCl9pnEKFOqMoYVPkAB1l4Y%2BFabbe%2F3tbbxvc43qrHL3QnBF5M4jfe4lPgdqvQ%2B1f%2FLB3CDlYKoxV873lahrbBrhNfMrbOu&X-Amz-Signature=039c1838c8a7e49dd131c26500d945b6f3414ee2e24bfcf73944e037c32966b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUVWQOL%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T061337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIF4IyCry%2Bl16JDEErcmuyG%2FaW%2FQ7sKIXTekQ3rzmsUiDAiEA6wZSYMwaitokztoda2P0curlvjrUGQ0yT02glxhp%2BVAq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDJtYCM2zxpNAj5iOOCrcA5hp9obn%2FxN%2BQVZ6KFzO2Y%2FBB18PDvfIutUiROeCBwR8hqvnhfe28%2FX%2F%2BkgQSL9yaOd1mvQZDa27FsQyJJFxEHdRGAit8ar56oI0roRb2WwtWK355uTyxXH7xGwG%2F85I6sUekr9g15EKeLgimUcS6F9Jk5xBBXyXEttUfRR%2BuXOIhGSt2Qw8XvDcMu6Jb3fkehUExk5Lx2uYsD5XsLmUIMDRinEGiQPDyU2F5g3ifgIAAv%2FBHkDbq2itGJ6CwCNP9kbuFOWrtpCsmHTo7pF1iVer9jz4Sxx00dddgjAobmn60rY2iahbMaO4OWBkPb%2FvzM%2FcFsMwXpkH2yGMmHryYuwci3qDUwbUE3MxNMOeCdb1gL6F9dianP0uAvWDvVflKy0e%2FuqqyzEsbyPl1CjA%2BHoBWUK6I8%2BHh1Dnwz9%2FTELHAPNy%2BvgmQoTBH9vt2775KRFaIIsHHKcQKzUqxaCBTS6gMR87llYhBMV%2FHEQhx4%2B%2BKit4phRHqeGfuKAQyzN9yS5rNApPMlg1M%2BGEGfv%2FbwrVR5j1DiMOor9OK%2Bi%2FlfWetrZrzLlpM0dmvL2Kw7ZUc9aJJbmvFvSr10wk9x%2BrZQiYgp0JHW0%2FhtsSjafEcy8ZbyKkhrZ7Y7SSjGEHMMWI%2F8EGOqUB8239cMu1G%2BqC00j4fuGczL3m8SqhXU9A3Nz%2BgvslAMEb9z5UyXrhL3O0VduHWPMFr1Tj3wAjXM2do6Pu2iLkf%2B5iCNRnax38VVAQpENdLV7PSs6rZ4Aq0CvSniLFrSCl9pnEKFOqMoYVPkAB1l4Y%2BFabbe%2F3tbbxvc43qrHL3QnBF5M4jfe4lPgdqvQ%2B1f%2FLB3CDlYKoxV873lahrbBrhNfMrbOu&X-Amz-Signature=202a5fc4a421eb360fac594d69c2f1fafee05134d7eb33a53a5584a90599f5f1&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
