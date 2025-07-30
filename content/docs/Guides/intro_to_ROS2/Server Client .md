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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGK2TRUP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiVhkM%2BMxGsNZxI4Yud%2Bvg3qH86iUwyKwDmVjYS7svnQIhANIZegJZxUcILBEPtmkyobrji5oggtVNlLHDPmvUXaQMKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2LdfEu44asVJxTAoq3AMks8cHdm41h4Z3NyLov7KVirWCuYibRrN3MUmY%2F0x6fSV65WYY1X2HyPhGRTtRbvGjPsA0AHy9kCVuVdBVF%2Bsis3xIQne8bobtm%2BZ0MAk88R5UvH%2FY4o%2BBK873L2JpdrQ%2B4nqSgTJNngdTCsBSG7ZRN%2BH0jHvvZKbKAyaTfKWLEk%2FxTbFtNH4Xlfyvuw%2F3zNXlRIh9%2F%2FIU%2BmvBhe9h8Qa2hdxVRmWulcJNLXV0CijwAtoZvOI%2BR0FzvT9hWIikdRvKjDRsu66ZFyxwn4hn1%2Bp24seX0ValxEiTHCHMVlLMChRfcC%2Fi4cKW603YO5bPrI2%2FalKUuJLxxMECVV64XbwV3faqaSrPkTzOxgYFTpH8bsTH1V9oKtYv9JZQ%2Bff2LIViz4omq7ybVEESyHpRXXVW02%2F66blADxzieYitaJSCkPSIER5svAMDsV8guCLv2tgcS45l7BTvlj3%2FHvz7IebO%2BidJ%2BUyyONAgMj1ajhRyQo19IQ0fyBpeJrxZab7M4L9mvl6ujqwHR0RC%2FWZZY%2FmdCc%2FrVje%2BGUdhCt3iCQjA4ZpGJmJcOQ22LfcQkSQD1m4IlB0qtvr5MUsf4Xg1Jsal92m50vUwsVKX0cxQlNRHlqS3CtZE7ol3L6DyqzDe8KfEBjqkAdqir1P5UeK187VJ%2B0tuZLYjVGqRaq1liBgljPjKvk9%2Fvcglyu5i%2FRjUxQUSvRtHlKFDFT1CmiXXwjiK2sOFkoxpkGpUMi651tNB%2F%2B11ouEZNcFy1%2BqzLf9SXEHjRAzs7kyX8X18fsJxTjJUwoRs03YtVUgzSwgpb%2BV2QKcF1cSSodtzzLy%2Fk%2Bknh5TI4tjlUBZQ0rzK2bum5b3%2FvgMSVWu0ZCZI&X-Amz-Signature=a5e4ecb8d824f0e4f4a98233896b738f750328e25e34f5f237407caf3a5f74f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGK2TRUP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiVhkM%2BMxGsNZxI4Yud%2Bvg3qH86iUwyKwDmVjYS7svnQIhANIZegJZxUcILBEPtmkyobrji5oggtVNlLHDPmvUXaQMKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2LdfEu44asVJxTAoq3AMks8cHdm41h4Z3NyLov7KVirWCuYibRrN3MUmY%2F0x6fSV65WYY1X2HyPhGRTtRbvGjPsA0AHy9kCVuVdBVF%2Bsis3xIQne8bobtm%2BZ0MAk88R5UvH%2FY4o%2BBK873L2JpdrQ%2B4nqSgTJNngdTCsBSG7ZRN%2BH0jHvvZKbKAyaTfKWLEk%2FxTbFtNH4Xlfyvuw%2F3zNXlRIh9%2F%2FIU%2BmvBhe9h8Qa2hdxVRmWulcJNLXV0CijwAtoZvOI%2BR0FzvT9hWIikdRvKjDRsu66ZFyxwn4hn1%2Bp24seX0ValxEiTHCHMVlLMChRfcC%2Fi4cKW603YO5bPrI2%2FalKUuJLxxMECVV64XbwV3faqaSrPkTzOxgYFTpH8bsTH1V9oKtYv9JZQ%2Bff2LIViz4omq7ybVEESyHpRXXVW02%2F66blADxzieYitaJSCkPSIER5svAMDsV8guCLv2tgcS45l7BTvlj3%2FHvz7IebO%2BidJ%2BUyyONAgMj1ajhRyQo19IQ0fyBpeJrxZab7M4L9mvl6ujqwHR0RC%2FWZZY%2FmdCc%2FrVje%2BGUdhCt3iCQjA4ZpGJmJcOQ22LfcQkSQD1m4IlB0qtvr5MUsf4Xg1Jsal92m50vUwsVKX0cxQlNRHlqS3CtZE7ol3L6DyqzDe8KfEBjqkAdqir1P5UeK187VJ%2B0tuZLYjVGqRaq1liBgljPjKvk9%2Fvcglyu5i%2FRjUxQUSvRtHlKFDFT1CmiXXwjiK2sOFkoxpkGpUMi651tNB%2F%2B11ouEZNcFy1%2BqzLf9SXEHjRAzs7kyX8X18fsJxTjJUwoRs03YtVUgzSwgpb%2BV2QKcF1cSSodtzzLy%2Fk%2Bknh5TI4tjlUBZQ0rzK2bum5b3%2FvgMSVWu0ZCZI&X-Amz-Signature=9ae1a8350a1c89f42e29274e753dc794ab8beb50ee3e66d533ca26ae148606e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGK2TRUP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiVhkM%2BMxGsNZxI4Yud%2Bvg3qH86iUwyKwDmVjYS7svnQIhANIZegJZxUcILBEPtmkyobrji5oggtVNlLHDPmvUXaQMKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2LdfEu44asVJxTAoq3AMks8cHdm41h4Z3NyLov7KVirWCuYibRrN3MUmY%2F0x6fSV65WYY1X2HyPhGRTtRbvGjPsA0AHy9kCVuVdBVF%2Bsis3xIQne8bobtm%2BZ0MAk88R5UvH%2FY4o%2BBK873L2JpdrQ%2B4nqSgTJNngdTCsBSG7ZRN%2BH0jHvvZKbKAyaTfKWLEk%2FxTbFtNH4Xlfyvuw%2F3zNXlRIh9%2F%2FIU%2BmvBhe9h8Qa2hdxVRmWulcJNLXV0CijwAtoZvOI%2BR0FzvT9hWIikdRvKjDRsu66ZFyxwn4hn1%2Bp24seX0ValxEiTHCHMVlLMChRfcC%2Fi4cKW603YO5bPrI2%2FalKUuJLxxMECVV64XbwV3faqaSrPkTzOxgYFTpH8bsTH1V9oKtYv9JZQ%2Bff2LIViz4omq7ybVEESyHpRXXVW02%2F66blADxzieYitaJSCkPSIER5svAMDsV8guCLv2tgcS45l7BTvlj3%2FHvz7IebO%2BidJ%2BUyyONAgMj1ajhRyQo19IQ0fyBpeJrxZab7M4L9mvl6ujqwHR0RC%2FWZZY%2FmdCc%2FrVje%2BGUdhCt3iCQjA4ZpGJmJcOQ22LfcQkSQD1m4IlB0qtvr5MUsf4Xg1Jsal92m50vUwsVKX0cxQlNRHlqS3CtZE7ol3L6DyqzDe8KfEBjqkAdqir1P5UeK187VJ%2B0tuZLYjVGqRaq1liBgljPjKvk9%2Fvcglyu5i%2FRjUxQUSvRtHlKFDFT1CmiXXwjiK2sOFkoxpkGpUMi651tNB%2F%2B11ouEZNcFy1%2BqzLf9SXEHjRAzs7kyX8X18fsJxTjJUwoRs03YtVUgzSwgpb%2BV2QKcF1cSSodtzzLy%2Fk%2Bknh5TI4tjlUBZQ0rzK2bum5b3%2FvgMSVWu0ZCZI&X-Amz-Signature=0dad6a26e39706159e48e77b9af7eafb32598faee68e58538359a4d54a9ba193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGK2TRUP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiVhkM%2BMxGsNZxI4Yud%2Bvg3qH86iUwyKwDmVjYS7svnQIhANIZegJZxUcILBEPtmkyobrji5oggtVNlLHDPmvUXaQMKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2LdfEu44asVJxTAoq3AMks8cHdm41h4Z3NyLov7KVirWCuYibRrN3MUmY%2F0x6fSV65WYY1X2HyPhGRTtRbvGjPsA0AHy9kCVuVdBVF%2Bsis3xIQne8bobtm%2BZ0MAk88R5UvH%2FY4o%2BBK873L2JpdrQ%2B4nqSgTJNngdTCsBSG7ZRN%2BH0jHvvZKbKAyaTfKWLEk%2FxTbFtNH4Xlfyvuw%2F3zNXlRIh9%2F%2FIU%2BmvBhe9h8Qa2hdxVRmWulcJNLXV0CijwAtoZvOI%2BR0FzvT9hWIikdRvKjDRsu66ZFyxwn4hn1%2Bp24seX0ValxEiTHCHMVlLMChRfcC%2Fi4cKW603YO5bPrI2%2FalKUuJLxxMECVV64XbwV3faqaSrPkTzOxgYFTpH8bsTH1V9oKtYv9JZQ%2Bff2LIViz4omq7ybVEESyHpRXXVW02%2F66blADxzieYitaJSCkPSIER5svAMDsV8guCLv2tgcS45l7BTvlj3%2FHvz7IebO%2BidJ%2BUyyONAgMj1ajhRyQo19IQ0fyBpeJrxZab7M4L9mvl6ujqwHR0RC%2FWZZY%2FmdCc%2FrVje%2BGUdhCt3iCQjA4ZpGJmJcOQ22LfcQkSQD1m4IlB0qtvr5MUsf4Xg1Jsal92m50vUwsVKX0cxQlNRHlqS3CtZE7ol3L6DyqzDe8KfEBjqkAdqir1P5UeK187VJ%2B0tuZLYjVGqRaq1liBgljPjKvk9%2Fvcglyu5i%2FRjUxQUSvRtHlKFDFT1CmiXXwjiK2sOFkoxpkGpUMi651tNB%2F%2B11ouEZNcFy1%2BqzLf9SXEHjRAzs7kyX8X18fsJxTjJUwoRs03YtVUgzSwgpb%2BV2QKcF1cSSodtzzLy%2Fk%2Bknh5TI4tjlUBZQ0rzK2bum5b3%2FvgMSVWu0ZCZI&X-Amz-Signature=8dbac133ba68dc92e0eea16c76aa59c75c39766266bee8a01583e9d9a90d476a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGK2TRUP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiVhkM%2BMxGsNZxI4Yud%2Bvg3qH86iUwyKwDmVjYS7svnQIhANIZegJZxUcILBEPtmkyobrji5oggtVNlLHDPmvUXaQMKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2LdfEu44asVJxTAoq3AMks8cHdm41h4Z3NyLov7KVirWCuYibRrN3MUmY%2F0x6fSV65WYY1X2HyPhGRTtRbvGjPsA0AHy9kCVuVdBVF%2Bsis3xIQne8bobtm%2BZ0MAk88R5UvH%2FY4o%2BBK873L2JpdrQ%2B4nqSgTJNngdTCsBSG7ZRN%2BH0jHvvZKbKAyaTfKWLEk%2FxTbFtNH4Xlfyvuw%2F3zNXlRIh9%2F%2FIU%2BmvBhe9h8Qa2hdxVRmWulcJNLXV0CijwAtoZvOI%2BR0FzvT9hWIikdRvKjDRsu66ZFyxwn4hn1%2Bp24seX0ValxEiTHCHMVlLMChRfcC%2Fi4cKW603YO5bPrI2%2FalKUuJLxxMECVV64XbwV3faqaSrPkTzOxgYFTpH8bsTH1V9oKtYv9JZQ%2Bff2LIViz4omq7ybVEESyHpRXXVW02%2F66blADxzieYitaJSCkPSIER5svAMDsV8guCLv2tgcS45l7BTvlj3%2FHvz7IebO%2BidJ%2BUyyONAgMj1ajhRyQo19IQ0fyBpeJrxZab7M4L9mvl6ujqwHR0RC%2FWZZY%2FmdCc%2FrVje%2BGUdhCt3iCQjA4ZpGJmJcOQ22LfcQkSQD1m4IlB0qtvr5MUsf4Xg1Jsal92m50vUwsVKX0cxQlNRHlqS3CtZE7ol3L6DyqzDe8KfEBjqkAdqir1P5UeK187VJ%2B0tuZLYjVGqRaq1liBgljPjKvk9%2Fvcglyu5i%2FRjUxQUSvRtHlKFDFT1CmiXXwjiK2sOFkoxpkGpUMi651tNB%2F%2B11ouEZNcFy1%2BqzLf9SXEHjRAzs7kyX8X18fsJxTjJUwoRs03YtVUgzSwgpb%2BV2QKcF1cSSodtzzLy%2Fk%2Bknh5TI4tjlUBZQ0rzK2bum5b3%2FvgMSVWu0ZCZI&X-Amz-Signature=228df5b1b839f7fcf217dd76ea7e35d90e5f591e6bae86173bdf4e1864934312&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
