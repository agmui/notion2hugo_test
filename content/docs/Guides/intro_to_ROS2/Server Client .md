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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZB3NWMF%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGN204uiDn39oR1z5iy9aztuoV91lmiqDxVZXT62QQQxAiEAkpkhBPc6%2BXb8mwUwUsBka3WAl%2B%2FVIsSKPDV1dNaXNmUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIJ0RBeAYDqh%2Bq67LircA9s%2BJwndwp%2BUQ1UfVMMon9pfW4D3GAtOo%2BnNrneHKAmVMAB7LlOsAVE%2Bmnqak9CLEtxhC7Wk5QacRszlMVQH%2BQXKAMqW%2B4AOc6BM7Oefts6jzVhN3UMEPjCdBmS0kO5WufhACr2CZxsoXZlbwgp0JMlfW%2FHovSizFHLK677Nt5Df6UJOdzZN71tsxVHTqqYsRciTAcDCBepYWeU%2F0gN3Iq%2FNH%2BmHRJqlHSHB7zi%2F5Xhuv01HFV4y6XnWEGueowRStV%2FaxMHV%2FtygqhhaIr2Jm0BDJXFG2TKRKTJD2v1lQKep5LsGecg3akr9phUAKW2vuWos5OiEHMeFskWwRcBaqQD8yKMeMrVK7wt8ZMY3ya29HkGqXcuzetu1yl6%2B0%2FJz0GawgFqpzIms2ud5EyvNPIgU5OV6LOfaQi0%2F0jjxnnPzOsAH31XuATWkuOUToMbUd0iD6XDbso3GyjDcRbRzYxDIUydTIjpVDUnb0FOojCkilS1c8vwlxCenR6g644KOC8vp1uE7dV2HEsWKBI2uOuL62%2FeWX5uQ%2FDC7Yc5Z2RIow%2F9Bw9vLLEqxQe9WnSepcW%2BWSNEATUSwjd7KVhKNUDl0Ylv9%2Fe5%2BXmGJXYiqc89xlrvcVYeZbaS50ZieMP%2BMn78GOqUB2WpLrha4WYZka0PJgTeMHkyz7iQHi23W8%2FfrYONU36KR2faUokVNPAflbr8KgK%2F62%2B%2FHWgDoDcQ%2FIxkUXc9fzzaU35VohLnSCrT6gQDMIgVFMb4zWrc0zWOkHWVGXGgskoOggEnGRS6Tx0qB9w%2FKN2k%2F3cWtZwwfJBITBu0eJH5q3ySOEPyonQholdKo37DIVce%2BeMh7H6luPvg83LJ7m7yfESMa&X-Amz-Signature=7805b1b0ea7ce482f7b1bbd7564ef6a55f9b410d6927f2977ffccbaa8a120f2f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZB3NWMF%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGN204uiDn39oR1z5iy9aztuoV91lmiqDxVZXT62QQQxAiEAkpkhBPc6%2BXb8mwUwUsBka3WAl%2B%2FVIsSKPDV1dNaXNmUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIJ0RBeAYDqh%2Bq67LircA9s%2BJwndwp%2BUQ1UfVMMon9pfW4D3GAtOo%2BnNrneHKAmVMAB7LlOsAVE%2Bmnqak9CLEtxhC7Wk5QacRszlMVQH%2BQXKAMqW%2B4AOc6BM7Oefts6jzVhN3UMEPjCdBmS0kO5WufhACr2CZxsoXZlbwgp0JMlfW%2FHovSizFHLK677Nt5Df6UJOdzZN71tsxVHTqqYsRciTAcDCBepYWeU%2F0gN3Iq%2FNH%2BmHRJqlHSHB7zi%2F5Xhuv01HFV4y6XnWEGueowRStV%2FaxMHV%2FtygqhhaIr2Jm0BDJXFG2TKRKTJD2v1lQKep5LsGecg3akr9phUAKW2vuWos5OiEHMeFskWwRcBaqQD8yKMeMrVK7wt8ZMY3ya29HkGqXcuzetu1yl6%2B0%2FJz0GawgFqpzIms2ud5EyvNPIgU5OV6LOfaQi0%2F0jjxnnPzOsAH31XuATWkuOUToMbUd0iD6XDbso3GyjDcRbRzYxDIUydTIjpVDUnb0FOojCkilS1c8vwlxCenR6g644KOC8vp1uE7dV2HEsWKBI2uOuL62%2FeWX5uQ%2FDC7Yc5Z2RIow%2F9Bw9vLLEqxQe9WnSepcW%2BWSNEATUSwjd7KVhKNUDl0Ylv9%2Fe5%2BXmGJXYiqc89xlrvcVYeZbaS50ZieMP%2BMn78GOqUB2WpLrha4WYZka0PJgTeMHkyz7iQHi23W8%2FfrYONU36KR2faUokVNPAflbr8KgK%2F62%2B%2FHWgDoDcQ%2FIxkUXc9fzzaU35VohLnSCrT6gQDMIgVFMb4zWrc0zWOkHWVGXGgskoOggEnGRS6Tx0qB9w%2FKN2k%2F3cWtZwwfJBITBu0eJH5q3ySOEPyonQholdKo37DIVce%2BeMh7H6luPvg83LJ7m7yfESMa&X-Amz-Signature=5325a9b9e79b4f350260ef80fc918266ef1f0dc1686ba765f72fb767c237548b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZB3NWMF%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGN204uiDn39oR1z5iy9aztuoV91lmiqDxVZXT62QQQxAiEAkpkhBPc6%2BXb8mwUwUsBka3WAl%2B%2FVIsSKPDV1dNaXNmUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIJ0RBeAYDqh%2Bq67LircA9s%2BJwndwp%2BUQ1UfVMMon9pfW4D3GAtOo%2BnNrneHKAmVMAB7LlOsAVE%2Bmnqak9CLEtxhC7Wk5QacRszlMVQH%2BQXKAMqW%2B4AOc6BM7Oefts6jzVhN3UMEPjCdBmS0kO5WufhACr2CZxsoXZlbwgp0JMlfW%2FHovSizFHLK677Nt5Df6UJOdzZN71tsxVHTqqYsRciTAcDCBepYWeU%2F0gN3Iq%2FNH%2BmHRJqlHSHB7zi%2F5Xhuv01HFV4y6XnWEGueowRStV%2FaxMHV%2FtygqhhaIr2Jm0BDJXFG2TKRKTJD2v1lQKep5LsGecg3akr9phUAKW2vuWos5OiEHMeFskWwRcBaqQD8yKMeMrVK7wt8ZMY3ya29HkGqXcuzetu1yl6%2B0%2FJz0GawgFqpzIms2ud5EyvNPIgU5OV6LOfaQi0%2F0jjxnnPzOsAH31XuATWkuOUToMbUd0iD6XDbso3GyjDcRbRzYxDIUydTIjpVDUnb0FOojCkilS1c8vwlxCenR6g644KOC8vp1uE7dV2HEsWKBI2uOuL62%2FeWX5uQ%2FDC7Yc5Z2RIow%2F9Bw9vLLEqxQe9WnSepcW%2BWSNEATUSwjd7KVhKNUDl0Ylv9%2Fe5%2BXmGJXYiqc89xlrvcVYeZbaS50ZieMP%2BMn78GOqUB2WpLrha4WYZka0PJgTeMHkyz7iQHi23W8%2FfrYONU36KR2faUokVNPAflbr8KgK%2F62%2B%2FHWgDoDcQ%2FIxkUXc9fzzaU35VohLnSCrT6gQDMIgVFMb4zWrc0zWOkHWVGXGgskoOggEnGRS6Tx0qB9w%2FKN2k%2F3cWtZwwfJBITBu0eJH5q3ySOEPyonQholdKo37DIVce%2BeMh7H6luPvg83LJ7m7yfESMa&X-Amz-Signature=feaf7a39fb97b524fce4eeb88dd8e215b0eb7a0cb4a0baf6adc09b84873ba804&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZB3NWMF%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGN204uiDn39oR1z5iy9aztuoV91lmiqDxVZXT62QQQxAiEAkpkhBPc6%2BXb8mwUwUsBka3WAl%2B%2FVIsSKPDV1dNaXNmUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIJ0RBeAYDqh%2Bq67LircA9s%2BJwndwp%2BUQ1UfVMMon9pfW4D3GAtOo%2BnNrneHKAmVMAB7LlOsAVE%2Bmnqak9CLEtxhC7Wk5QacRszlMVQH%2BQXKAMqW%2B4AOc6BM7Oefts6jzVhN3UMEPjCdBmS0kO5WufhACr2CZxsoXZlbwgp0JMlfW%2FHovSizFHLK677Nt5Df6UJOdzZN71tsxVHTqqYsRciTAcDCBepYWeU%2F0gN3Iq%2FNH%2BmHRJqlHSHB7zi%2F5Xhuv01HFV4y6XnWEGueowRStV%2FaxMHV%2FtygqhhaIr2Jm0BDJXFG2TKRKTJD2v1lQKep5LsGecg3akr9phUAKW2vuWos5OiEHMeFskWwRcBaqQD8yKMeMrVK7wt8ZMY3ya29HkGqXcuzetu1yl6%2B0%2FJz0GawgFqpzIms2ud5EyvNPIgU5OV6LOfaQi0%2F0jjxnnPzOsAH31XuATWkuOUToMbUd0iD6XDbso3GyjDcRbRzYxDIUydTIjpVDUnb0FOojCkilS1c8vwlxCenR6g644KOC8vp1uE7dV2HEsWKBI2uOuL62%2FeWX5uQ%2FDC7Yc5Z2RIow%2F9Bw9vLLEqxQe9WnSepcW%2BWSNEATUSwjd7KVhKNUDl0Ylv9%2Fe5%2BXmGJXYiqc89xlrvcVYeZbaS50ZieMP%2BMn78GOqUB2WpLrha4WYZka0PJgTeMHkyz7iQHi23W8%2FfrYONU36KR2faUokVNPAflbr8KgK%2F62%2B%2FHWgDoDcQ%2FIxkUXc9fzzaU35VohLnSCrT6gQDMIgVFMb4zWrc0zWOkHWVGXGgskoOggEnGRS6Tx0qB9w%2FKN2k%2F3cWtZwwfJBITBu0eJH5q3ySOEPyonQholdKo37DIVce%2BeMh7H6luPvg83LJ7m7yfESMa&X-Amz-Signature=d60bfaaac3963f4644b1b0d39f225f51954bdac97b9da471c4f46a71c2dd821c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZB3NWMF%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGN204uiDn39oR1z5iy9aztuoV91lmiqDxVZXT62QQQxAiEAkpkhBPc6%2BXb8mwUwUsBka3WAl%2B%2FVIsSKPDV1dNaXNmUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIJ0RBeAYDqh%2Bq67LircA9s%2BJwndwp%2BUQ1UfVMMon9pfW4D3GAtOo%2BnNrneHKAmVMAB7LlOsAVE%2Bmnqak9CLEtxhC7Wk5QacRszlMVQH%2BQXKAMqW%2B4AOc6BM7Oefts6jzVhN3UMEPjCdBmS0kO5WufhACr2CZxsoXZlbwgp0JMlfW%2FHovSizFHLK677Nt5Df6UJOdzZN71tsxVHTqqYsRciTAcDCBepYWeU%2F0gN3Iq%2FNH%2BmHRJqlHSHB7zi%2F5Xhuv01HFV4y6XnWEGueowRStV%2FaxMHV%2FtygqhhaIr2Jm0BDJXFG2TKRKTJD2v1lQKep5LsGecg3akr9phUAKW2vuWos5OiEHMeFskWwRcBaqQD8yKMeMrVK7wt8ZMY3ya29HkGqXcuzetu1yl6%2B0%2FJz0GawgFqpzIms2ud5EyvNPIgU5OV6LOfaQi0%2F0jjxnnPzOsAH31XuATWkuOUToMbUd0iD6XDbso3GyjDcRbRzYxDIUydTIjpVDUnb0FOojCkilS1c8vwlxCenR6g644KOC8vp1uE7dV2HEsWKBI2uOuL62%2FeWX5uQ%2FDC7Yc5Z2RIow%2F9Bw9vLLEqxQe9WnSepcW%2BWSNEATUSwjd7KVhKNUDl0Ylv9%2Fe5%2BXmGJXYiqc89xlrvcVYeZbaS50ZieMP%2BMn78GOqUB2WpLrha4WYZka0PJgTeMHkyz7iQHi23W8%2FfrYONU36KR2faUokVNPAflbr8KgK%2F62%2B%2FHWgDoDcQ%2FIxkUXc9fzzaU35VohLnSCrT6gQDMIgVFMb4zWrc0zWOkHWVGXGgskoOggEnGRS6Tx0qB9w%2FKN2k%2F3cWtZwwfJBITBu0eJH5q3ySOEPyonQholdKo37DIVce%2BeMh7H6luPvg83LJ7m7yfESMa&X-Amz-Signature=5856804c0950ccdb756eea71b5749562857b63476c7de275785dac75328a638a&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
