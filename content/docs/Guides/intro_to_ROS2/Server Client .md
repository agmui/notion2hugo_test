---
sys:
  pageId: "6e88b038-535f-4c9b-8f34-4923546761bf"
  createdTime: "2024-08-21T00:26:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Server Client .md"
title: "Server Client "
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLQWJ2IO%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoP1FVLCxA71tFZJkY%2F5gNgkyGJ%2BNA%2Fkelf854HSD8pgIgMHYMKNpsDdn0mPP0kkAaN4t3GWsCUpF1IngTwMc7sEMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDAZc1wlss3Kjp1RnCrcAxX6EdR%2F30tb5nSkmUvIH7Rv7f8vTcNuDHJLTDaU8Cj0IUryB2u7%2FcBJevTKolVWZkRFDRtqVu7sqMjGbmzBguuRJG9eRTXoI1586gRMRSa1vVpNmLIK5%2FW8d8buZFfVddMEVkh5HHT%2FMM4VImrr6Jzb43jJGISG697JlfVS%2FZ1yYlTkHMp8o5U18HOJ4QegI63bc52RR6svDBaWGkcGTPoW1zDfIaVljDf3uXBXyJ0888arHz%2FwRH2vnK9GdcTRP0dgnf3VGQnnV8MVtyLKkHvMRF%2FuuYwLZVtUcP8EYIiNuUnsvtZosf5bnPSx1D4nUvwqW7v%2BNghu3%2FgBN8P%2Fg9cn5%2FZzTVX1xS2L1EMgigZn8%2BVQYufY4gCUyKj1sH4ozRv5FRUtOWtb%2Bpt9SOH3MZWcxTtygVhsuX%2F72PLmUeaulJp6F%2FvghO0m%2FV1kt%2FPzakERgS3GIFImDdDuuwtjbF106K%2BzQ7qYEWbVXSuDy1Q6WfkBZsOrfNrMWF3DZrQ9CEzIN6HNZdy1PzoskXJxGkOWhCJ7HpTObbVz%2F7quMggm4Fu8zGsrYFEMBsviit6zSYrCntahhZi4ys7erTKRGSdXGtTRKTie%2BykFHgaJclyV2aWbUCc2XLrCh9IyMMixmckGOqUBVLLI1IBJStok4Pbj0YdHFIdiVkGHpHz96DQA6xWvjsfhUU0aMlVafKansbGMLELIeEudeUymp38oajpXDFSiWK98nHPrmRL365dZXxp58D4%2Bfr2yoi9OnfDPFFMpwnvJDU0fjwpx%2FEXYAwelmEueDggaySETmaNW9nKfqwWie6%2FmAw3NUqUitQr%2FRdevkONigh14uihradMjKaU1ZqtUcs0OLEUQ&X-Amz-Signature=f0720bbff972241b0ca3c388ffe770426254a0b00233ec34d63b81fe1b6c75dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLQWJ2IO%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoP1FVLCxA71tFZJkY%2F5gNgkyGJ%2BNA%2Fkelf854HSD8pgIgMHYMKNpsDdn0mPP0kkAaN4t3GWsCUpF1IngTwMc7sEMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDAZc1wlss3Kjp1RnCrcAxX6EdR%2F30tb5nSkmUvIH7Rv7f8vTcNuDHJLTDaU8Cj0IUryB2u7%2FcBJevTKolVWZkRFDRtqVu7sqMjGbmzBguuRJG9eRTXoI1586gRMRSa1vVpNmLIK5%2FW8d8buZFfVddMEVkh5HHT%2FMM4VImrr6Jzb43jJGISG697JlfVS%2FZ1yYlTkHMp8o5U18HOJ4QegI63bc52RR6svDBaWGkcGTPoW1zDfIaVljDf3uXBXyJ0888arHz%2FwRH2vnK9GdcTRP0dgnf3VGQnnV8MVtyLKkHvMRF%2FuuYwLZVtUcP8EYIiNuUnsvtZosf5bnPSx1D4nUvwqW7v%2BNghu3%2FgBN8P%2Fg9cn5%2FZzTVX1xS2L1EMgigZn8%2BVQYufY4gCUyKj1sH4ozRv5FRUtOWtb%2Bpt9SOH3MZWcxTtygVhsuX%2F72PLmUeaulJp6F%2FvghO0m%2FV1kt%2FPzakERgS3GIFImDdDuuwtjbF106K%2BzQ7qYEWbVXSuDy1Q6WfkBZsOrfNrMWF3DZrQ9CEzIN6HNZdy1PzoskXJxGkOWhCJ7HpTObbVz%2F7quMggm4Fu8zGsrYFEMBsviit6zSYrCntahhZi4ys7erTKRGSdXGtTRKTie%2BykFHgaJclyV2aWbUCc2XLrCh9IyMMixmckGOqUBVLLI1IBJStok4Pbj0YdHFIdiVkGHpHz96DQA6xWvjsfhUU0aMlVafKansbGMLELIeEudeUymp38oajpXDFSiWK98nHPrmRL365dZXxp58D4%2Bfr2yoi9OnfDPFFMpwnvJDU0fjwpx%2FEXYAwelmEueDggaySETmaNW9nKfqwWie6%2FmAw3NUqUitQr%2FRdevkONigh14uihradMjKaU1ZqtUcs0OLEUQ&X-Amz-Signature=58a1825244e09f75fb90907f62fe61cf60e5df04e70d8d5271902a4955eac068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLQWJ2IO%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoP1FVLCxA71tFZJkY%2F5gNgkyGJ%2BNA%2Fkelf854HSD8pgIgMHYMKNpsDdn0mPP0kkAaN4t3GWsCUpF1IngTwMc7sEMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDAZc1wlss3Kjp1RnCrcAxX6EdR%2F30tb5nSkmUvIH7Rv7f8vTcNuDHJLTDaU8Cj0IUryB2u7%2FcBJevTKolVWZkRFDRtqVu7sqMjGbmzBguuRJG9eRTXoI1586gRMRSa1vVpNmLIK5%2FW8d8buZFfVddMEVkh5HHT%2FMM4VImrr6Jzb43jJGISG697JlfVS%2FZ1yYlTkHMp8o5U18HOJ4QegI63bc52RR6svDBaWGkcGTPoW1zDfIaVljDf3uXBXyJ0888arHz%2FwRH2vnK9GdcTRP0dgnf3VGQnnV8MVtyLKkHvMRF%2FuuYwLZVtUcP8EYIiNuUnsvtZosf5bnPSx1D4nUvwqW7v%2BNghu3%2FgBN8P%2Fg9cn5%2FZzTVX1xS2L1EMgigZn8%2BVQYufY4gCUyKj1sH4ozRv5FRUtOWtb%2Bpt9SOH3MZWcxTtygVhsuX%2F72PLmUeaulJp6F%2FvghO0m%2FV1kt%2FPzakERgS3GIFImDdDuuwtjbF106K%2BzQ7qYEWbVXSuDy1Q6WfkBZsOrfNrMWF3DZrQ9CEzIN6HNZdy1PzoskXJxGkOWhCJ7HpTObbVz%2F7quMggm4Fu8zGsrYFEMBsviit6zSYrCntahhZi4ys7erTKRGSdXGtTRKTie%2BykFHgaJclyV2aWbUCc2XLrCh9IyMMixmckGOqUBVLLI1IBJStok4Pbj0YdHFIdiVkGHpHz96DQA6xWvjsfhUU0aMlVafKansbGMLELIeEudeUymp38oajpXDFSiWK98nHPrmRL365dZXxp58D4%2Bfr2yoi9OnfDPFFMpwnvJDU0fjwpx%2FEXYAwelmEueDggaySETmaNW9nKfqwWie6%2FmAw3NUqUitQr%2FRdevkONigh14uihradMjKaU1ZqtUcs0OLEUQ&X-Amz-Signature=02f9a7f1ca24ccd52b36ba5f328dc427f2c21d505d831c1b977abe53fc841eb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLQWJ2IO%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoP1FVLCxA71tFZJkY%2F5gNgkyGJ%2BNA%2Fkelf854HSD8pgIgMHYMKNpsDdn0mPP0kkAaN4t3GWsCUpF1IngTwMc7sEMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDAZc1wlss3Kjp1RnCrcAxX6EdR%2F30tb5nSkmUvIH7Rv7f8vTcNuDHJLTDaU8Cj0IUryB2u7%2FcBJevTKolVWZkRFDRtqVu7sqMjGbmzBguuRJG9eRTXoI1586gRMRSa1vVpNmLIK5%2FW8d8buZFfVddMEVkh5HHT%2FMM4VImrr6Jzb43jJGISG697JlfVS%2FZ1yYlTkHMp8o5U18HOJ4QegI63bc52RR6svDBaWGkcGTPoW1zDfIaVljDf3uXBXyJ0888arHz%2FwRH2vnK9GdcTRP0dgnf3VGQnnV8MVtyLKkHvMRF%2FuuYwLZVtUcP8EYIiNuUnsvtZosf5bnPSx1D4nUvwqW7v%2BNghu3%2FgBN8P%2Fg9cn5%2FZzTVX1xS2L1EMgigZn8%2BVQYufY4gCUyKj1sH4ozRv5FRUtOWtb%2Bpt9SOH3MZWcxTtygVhsuX%2F72PLmUeaulJp6F%2FvghO0m%2FV1kt%2FPzakERgS3GIFImDdDuuwtjbF106K%2BzQ7qYEWbVXSuDy1Q6WfkBZsOrfNrMWF3DZrQ9CEzIN6HNZdy1PzoskXJxGkOWhCJ7HpTObbVz%2F7quMggm4Fu8zGsrYFEMBsviit6zSYrCntahhZi4ys7erTKRGSdXGtTRKTie%2BykFHgaJclyV2aWbUCc2XLrCh9IyMMixmckGOqUBVLLI1IBJStok4Pbj0YdHFIdiVkGHpHz96DQA6xWvjsfhUU0aMlVafKansbGMLELIeEudeUymp38oajpXDFSiWK98nHPrmRL365dZXxp58D4%2Bfr2yoi9OnfDPFFMpwnvJDU0fjwpx%2FEXYAwelmEueDggaySETmaNW9nKfqwWie6%2FmAw3NUqUitQr%2FRdevkONigh14uihradMjKaU1ZqtUcs0OLEUQ&X-Amz-Signature=d28422ae548752b43ab87bd5f207af96eca11552a5ae1be7a3c325a2d0ccdf01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLQWJ2IO%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoP1FVLCxA71tFZJkY%2F5gNgkyGJ%2BNA%2Fkelf854HSD8pgIgMHYMKNpsDdn0mPP0kkAaN4t3GWsCUpF1IngTwMc7sEMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDAZc1wlss3Kjp1RnCrcAxX6EdR%2F30tb5nSkmUvIH7Rv7f8vTcNuDHJLTDaU8Cj0IUryB2u7%2FcBJevTKolVWZkRFDRtqVu7sqMjGbmzBguuRJG9eRTXoI1586gRMRSa1vVpNmLIK5%2FW8d8buZFfVddMEVkh5HHT%2FMM4VImrr6Jzb43jJGISG697JlfVS%2FZ1yYlTkHMp8o5U18HOJ4QegI63bc52RR6svDBaWGkcGTPoW1zDfIaVljDf3uXBXyJ0888arHz%2FwRH2vnK9GdcTRP0dgnf3VGQnnV8MVtyLKkHvMRF%2FuuYwLZVtUcP8EYIiNuUnsvtZosf5bnPSx1D4nUvwqW7v%2BNghu3%2FgBN8P%2Fg9cn5%2FZzTVX1xS2L1EMgigZn8%2BVQYufY4gCUyKj1sH4ozRv5FRUtOWtb%2Bpt9SOH3MZWcxTtygVhsuX%2F72PLmUeaulJp6F%2FvghO0m%2FV1kt%2FPzakERgS3GIFImDdDuuwtjbF106K%2BzQ7qYEWbVXSuDy1Q6WfkBZsOrfNrMWF3DZrQ9CEzIN6HNZdy1PzoskXJxGkOWhCJ7HpTObbVz%2F7quMggm4Fu8zGsrYFEMBsviit6zSYrCntahhZi4ys7erTKRGSdXGtTRKTie%2BykFHgaJclyV2aWbUCc2XLrCh9IyMMixmckGOqUBVLLI1IBJStok4Pbj0YdHFIdiVkGHpHz96DQA6xWvjsfhUU0aMlVafKansbGMLELIeEudeUymp38oajpXDFSiWK98nHPrmRL365dZXxp58D4%2Bfr2yoi9OnfDPFFMpwnvJDU0fjwpx%2FEXYAwelmEueDggaySETmaNW9nKfqwWie6%2FmAw3NUqUitQr%2FRdevkONigh14uihradMjKaU1ZqtUcs0OLEUQ&X-Amz-Signature=74c55a354742cebc0c2927297f2d052be85867b8401679ee8df4019bb8623614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
