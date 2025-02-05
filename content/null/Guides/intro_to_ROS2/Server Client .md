---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2024-09-12T01:48:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/Server Client .md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI5NJARY%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEwP%2Fz4lEXY89LV3oMi8r5fRwGgXTwoWiFTxeaqiCO6AAiEAmCKDYeObbblAVqieyAyKggbE6NRSRw3UsjRI6XoDhicq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDIbxkvRM9FT7ccFdRyrcAxA72X1X5Ovtv89tWiD%2FxNnYNMwv63i7jmIOOmWnENJL5Ivpt%2FQ0fAsX%2BPAPS86A%2Fbm%2BO%2F51MNinb%2FsegvG009JoZOyggnFTOstDt7D%2BFZ%2BiH3ovG4nusBkR%2FmnAgU%2FbhVUacT0ggGxiacQopdi%2BfdBPLClw9o4JPY9kAj0MeIew3t0AVGuYZw04HMKwwnJlvGRhWa2T8Ny%2F1OToO%2B6EDRta4sFMMxbt%2FprEVSlfyBZNlL8yR6dPFho2MIbriHxDQSKrDcHg7Sei3%2F2xOLuK%2Bw7s42Z3MHC03C3IftuNw%2B%2BFJmfVgao%2FuefTfEU50Qa9Gps%2Bclhfdioyv4MmHtwTLJ1WXPDk2rB0V04HDL1VggIvsjxuYMvX2%2BrTCSau%2FLX2dWuVKFbPJPPlqhnv0f8tNF%2FT6M7odWmznHFM8QhZHr0lJu9W740x7GcDQkAjD%2BHuFFyYZMEsAu4QshFVuTFFxuIYe6br2z1CDzOW3QHePEQJ3YzHdP6g9YOYY4hUI5Kq0kGPoC0VIdlpmVFUt6f4xnui05CtPA2m3lsXUEmF52kYOgN715suNWxvHLMeGb62qMhIPxuNcE21w6b2o9SsIG5oPoyWccx%2F9aRkqypMPELSHalCiu2b8OPDrs8vMNfei70GOqUBMyDSl8UvNwTTbjRKcqA7%2FSr8V%2FxRMxkIb1%2FznEpG9NbPUYW71WaVSv6WsMTQgPT2OeKumNtj7kAaUx2yXDbPGhyhJZjxhTLZA2Q7YBIhk8%2F3%2F0MJQL08k6fr0RqSjdjxg3OF43Q8KkOnt91YEWJCR8lQHDDquOmlZAGch33CkM6DjKMsf0jHNP36lmegfdfzl7%2FwtvD7mMfOioLAs0LJBBxZDL%2FM&X-Amz-Signature=5c9b164a900e387d642e1190e1f18eb916e7db9074403f0746697908149000cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI5NJARY%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEwP%2Fz4lEXY89LV3oMi8r5fRwGgXTwoWiFTxeaqiCO6AAiEAmCKDYeObbblAVqieyAyKggbE6NRSRw3UsjRI6XoDhicq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDIbxkvRM9FT7ccFdRyrcAxA72X1X5Ovtv89tWiD%2FxNnYNMwv63i7jmIOOmWnENJL5Ivpt%2FQ0fAsX%2BPAPS86A%2Fbm%2BO%2F51MNinb%2FsegvG009JoZOyggnFTOstDt7D%2BFZ%2BiH3ovG4nusBkR%2FmnAgU%2FbhVUacT0ggGxiacQopdi%2BfdBPLClw9o4JPY9kAj0MeIew3t0AVGuYZw04HMKwwnJlvGRhWa2T8Ny%2F1OToO%2B6EDRta4sFMMxbt%2FprEVSlfyBZNlL8yR6dPFho2MIbriHxDQSKrDcHg7Sei3%2F2xOLuK%2Bw7s42Z3MHC03C3IftuNw%2B%2BFJmfVgao%2FuefTfEU50Qa9Gps%2Bclhfdioyv4MmHtwTLJ1WXPDk2rB0V04HDL1VggIvsjxuYMvX2%2BrTCSau%2FLX2dWuVKFbPJPPlqhnv0f8tNF%2FT6M7odWmznHFM8QhZHr0lJu9W740x7GcDQkAjD%2BHuFFyYZMEsAu4QshFVuTFFxuIYe6br2z1CDzOW3QHePEQJ3YzHdP6g9YOYY4hUI5Kq0kGPoC0VIdlpmVFUt6f4xnui05CtPA2m3lsXUEmF52kYOgN715suNWxvHLMeGb62qMhIPxuNcE21w6b2o9SsIG5oPoyWccx%2F9aRkqypMPELSHalCiu2b8OPDrs8vMNfei70GOqUBMyDSl8UvNwTTbjRKcqA7%2FSr8V%2FxRMxkIb1%2FznEpG9NbPUYW71WaVSv6WsMTQgPT2OeKumNtj7kAaUx2yXDbPGhyhJZjxhTLZA2Q7YBIhk8%2F3%2F0MJQL08k6fr0RqSjdjxg3OF43Q8KkOnt91YEWJCR8lQHDDquOmlZAGch33CkM6DjKMsf0jHNP36lmegfdfzl7%2FwtvD7mMfOioLAs0LJBBxZDL%2FM&X-Amz-Signature=c433f6ab103bb2770717138724caafcd46065accf8fc2deaf610023a59fa40de&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI5NJARY%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEwP%2Fz4lEXY89LV3oMi8r5fRwGgXTwoWiFTxeaqiCO6AAiEAmCKDYeObbblAVqieyAyKggbE6NRSRw3UsjRI6XoDhicq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDIbxkvRM9FT7ccFdRyrcAxA72X1X5Ovtv89tWiD%2FxNnYNMwv63i7jmIOOmWnENJL5Ivpt%2FQ0fAsX%2BPAPS86A%2Fbm%2BO%2F51MNinb%2FsegvG009JoZOyggnFTOstDt7D%2BFZ%2BiH3ovG4nusBkR%2FmnAgU%2FbhVUacT0ggGxiacQopdi%2BfdBPLClw9o4JPY9kAj0MeIew3t0AVGuYZw04HMKwwnJlvGRhWa2T8Ny%2F1OToO%2B6EDRta4sFMMxbt%2FprEVSlfyBZNlL8yR6dPFho2MIbriHxDQSKrDcHg7Sei3%2F2xOLuK%2Bw7s42Z3MHC03C3IftuNw%2B%2BFJmfVgao%2FuefTfEU50Qa9Gps%2Bclhfdioyv4MmHtwTLJ1WXPDk2rB0V04HDL1VggIvsjxuYMvX2%2BrTCSau%2FLX2dWuVKFbPJPPlqhnv0f8tNF%2FT6M7odWmznHFM8QhZHr0lJu9W740x7GcDQkAjD%2BHuFFyYZMEsAu4QshFVuTFFxuIYe6br2z1CDzOW3QHePEQJ3YzHdP6g9YOYY4hUI5Kq0kGPoC0VIdlpmVFUt6f4xnui05CtPA2m3lsXUEmF52kYOgN715suNWxvHLMeGb62qMhIPxuNcE21w6b2o9SsIG5oPoyWccx%2F9aRkqypMPELSHalCiu2b8OPDrs8vMNfei70GOqUBMyDSl8UvNwTTbjRKcqA7%2FSr8V%2FxRMxkIb1%2FznEpG9NbPUYW71WaVSv6WsMTQgPT2OeKumNtj7kAaUx2yXDbPGhyhJZjxhTLZA2Q7YBIhk8%2F3%2F0MJQL08k6fr0RqSjdjxg3OF43Q8KkOnt91YEWJCR8lQHDDquOmlZAGch33CkM6DjKMsf0jHNP36lmegfdfzl7%2FwtvD7mMfOioLAs0LJBBxZDL%2FM&X-Amz-Signature=ab5c5f9fcd7eca24f8c0d5428b896ab0434df742fb01f232280b7878d668daf0&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI5NJARY%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEwP%2Fz4lEXY89LV3oMi8r5fRwGgXTwoWiFTxeaqiCO6AAiEAmCKDYeObbblAVqieyAyKggbE6NRSRw3UsjRI6XoDhicq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDIbxkvRM9FT7ccFdRyrcAxA72X1X5Ovtv89tWiD%2FxNnYNMwv63i7jmIOOmWnENJL5Ivpt%2FQ0fAsX%2BPAPS86A%2Fbm%2BO%2F51MNinb%2FsegvG009JoZOyggnFTOstDt7D%2BFZ%2BiH3ovG4nusBkR%2FmnAgU%2FbhVUacT0ggGxiacQopdi%2BfdBPLClw9o4JPY9kAj0MeIew3t0AVGuYZw04HMKwwnJlvGRhWa2T8Ny%2F1OToO%2B6EDRta4sFMMxbt%2FprEVSlfyBZNlL8yR6dPFho2MIbriHxDQSKrDcHg7Sei3%2F2xOLuK%2Bw7s42Z3MHC03C3IftuNw%2B%2BFJmfVgao%2FuefTfEU50Qa9Gps%2Bclhfdioyv4MmHtwTLJ1WXPDk2rB0V04HDL1VggIvsjxuYMvX2%2BrTCSau%2FLX2dWuVKFbPJPPlqhnv0f8tNF%2FT6M7odWmznHFM8QhZHr0lJu9W740x7GcDQkAjD%2BHuFFyYZMEsAu4QshFVuTFFxuIYe6br2z1CDzOW3QHePEQJ3YzHdP6g9YOYY4hUI5Kq0kGPoC0VIdlpmVFUt6f4xnui05CtPA2m3lsXUEmF52kYOgN715suNWxvHLMeGb62qMhIPxuNcE21w6b2o9SsIG5oPoyWccx%2F9aRkqypMPELSHalCiu2b8OPDrs8vMNfei70GOqUBMyDSl8UvNwTTbjRKcqA7%2FSr8V%2FxRMxkIb1%2FznEpG9NbPUYW71WaVSv6WsMTQgPT2OeKumNtj7kAaUx2yXDbPGhyhJZjxhTLZA2Q7YBIhk8%2F3%2F0MJQL08k6fr0RqSjdjxg3OF43Q8KkOnt91YEWJCR8lQHDDquOmlZAGch33CkM6DjKMsf0jHNP36lmegfdfzl7%2FwtvD7mMfOioLAs0LJBBxZDL%2FM&X-Amz-Signature=201fab28aa06d60ae7df70c6f7e37e158b1f2694f838c17f74c5515887745463&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI5NJARY%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEwP%2Fz4lEXY89LV3oMi8r5fRwGgXTwoWiFTxeaqiCO6AAiEAmCKDYeObbblAVqieyAyKggbE6NRSRw3UsjRI6XoDhicq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDIbxkvRM9FT7ccFdRyrcAxA72X1X5Ovtv89tWiD%2FxNnYNMwv63i7jmIOOmWnENJL5Ivpt%2FQ0fAsX%2BPAPS86A%2Fbm%2BO%2F51MNinb%2FsegvG009JoZOyggnFTOstDt7D%2BFZ%2BiH3ovG4nusBkR%2FmnAgU%2FbhVUacT0ggGxiacQopdi%2BfdBPLClw9o4JPY9kAj0MeIew3t0AVGuYZw04HMKwwnJlvGRhWa2T8Ny%2F1OToO%2B6EDRta4sFMMxbt%2FprEVSlfyBZNlL8yR6dPFho2MIbriHxDQSKrDcHg7Sei3%2F2xOLuK%2Bw7s42Z3MHC03C3IftuNw%2B%2BFJmfVgao%2FuefTfEU50Qa9Gps%2Bclhfdioyv4MmHtwTLJ1WXPDk2rB0V04HDL1VggIvsjxuYMvX2%2BrTCSau%2FLX2dWuVKFbPJPPlqhnv0f8tNF%2FT6M7odWmznHFM8QhZHr0lJu9W740x7GcDQkAjD%2BHuFFyYZMEsAu4QshFVuTFFxuIYe6br2z1CDzOW3QHePEQJ3YzHdP6g9YOYY4hUI5Kq0kGPoC0VIdlpmVFUt6f4xnui05CtPA2m3lsXUEmF52kYOgN715suNWxvHLMeGb62qMhIPxuNcE21w6b2o9SsIG5oPoyWccx%2F9aRkqypMPELSHalCiu2b8OPDrs8vMNfei70GOqUBMyDSl8UvNwTTbjRKcqA7%2FSr8V%2FxRMxkIb1%2FznEpG9NbPUYW71WaVSv6WsMTQgPT2OeKumNtj7kAaUx2yXDbPGhyhJZjxhTLZA2Q7YBIhk8%2F3%2F0MJQL08k6fr0RqSjdjxg3OF43Q8KkOnt91YEWJCR8lQHDDquOmlZAGch33CkM6DjKMsf0jHNP36lmegfdfzl7%2FwtvD7mMfOioLAs0LJBBxZDL%2FM&X-Amz-Signature=50f373e8a8bb3556c09d8898fa44d358fe98b074b0c62d9b5807568869a1e520&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
