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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ5XIGTH%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKjxfg8nBdmsxlBsd6iOfEBSQqCqxlYYfo46du9h%2FWRAIgPHC5Ve6qQvOwrudmIy2u%2BPAoZ6k4fIu4p5dyt0lU5W0qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKZeiHscju7p6seVircAzbj%2B5TDCQJ7NRgkDnPFhx1yw2UaE5MkCepLvBZM2DXXoGCPPJje0OBD%2BnymE2cLLQQ0QZFZ6SomCHodj5UYG9RkQKZUOfdkW9MGcqMpARr9%2FVKo6%2F8stxSuQhoFBeeQi%2B%2FQ%2BRAL9Rdm2syPZdU7pJ31sp%2F70XOQuBHSNNp3xR19UzZC6%2FCupXyAQ%2BFqXW9WwGiTQLo3Q1stLf2Tvw3XJPNfF6rDKmaotMX4M8M3v0oqHszD3TxI4oiavVl%2B5yXHEnLOvXtnrSkXk0DQVUTYSQ6dyefZ1ocrAuH9pAGALRXcWPNrpbq77U8aq3jYjWMzjrxhUWYQz7%2FLWiSpiKlOewDplcf0FbispV1XgsV6mcIaDlHnd%2FHauPAfCXWOTIVu%2FiVi3hYfGq2%2F%2BpNWEXQ23LcF9Tj3cpVShGrONB3Iwv7fo6DohrYw9sD2clf2DYXLflHnA0lvPwt2aNAsiwEdKawCUPD7wH82JRIumTo8iKr95s%2FLkqXL62FWgCWba1apppoJajxoYBnkH8%2FNlTFU%2FZ8TL%2FehPeaURpp84tdfIiu0v4pwo24kI014jfRkq4VGnyzpNjBeTDmrKVomJpOMDdMhkjoapBgKf3Ly1BLLuftv7%2FirGdWVAtgvgSkPMP%2BU%2BrwGOqUBSuc6h8o0g4FvBwIAWcE6y5IuB%2FXESTmB8bNHs3yt8T2KKuyudKMgCBT97ud50ywIxrNlr1aE%2B4E6NCWpO5qXN03I49lw9GAOOvmv%2Fc11BbYgxxgpRyI0TmawbVhL8IuekAa5DV8knyysPryTnxtOCrLDWubkqamnGolra7EG7uZ5jM%2BHpu0l6hEFZqBorszrVyhmtpxA6WNZ0twzfgpGisuu81nt&X-Amz-Signature=7a1a7ae94d066b1f94303b3f57b060eda972fb533c8248712582ef829dbf5542&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ5XIGTH%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKjxfg8nBdmsxlBsd6iOfEBSQqCqxlYYfo46du9h%2FWRAIgPHC5Ve6qQvOwrudmIy2u%2BPAoZ6k4fIu4p5dyt0lU5W0qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKZeiHscju7p6seVircAzbj%2B5TDCQJ7NRgkDnPFhx1yw2UaE5MkCepLvBZM2DXXoGCPPJje0OBD%2BnymE2cLLQQ0QZFZ6SomCHodj5UYG9RkQKZUOfdkW9MGcqMpARr9%2FVKo6%2F8stxSuQhoFBeeQi%2B%2FQ%2BRAL9Rdm2syPZdU7pJ31sp%2F70XOQuBHSNNp3xR19UzZC6%2FCupXyAQ%2BFqXW9WwGiTQLo3Q1stLf2Tvw3XJPNfF6rDKmaotMX4M8M3v0oqHszD3TxI4oiavVl%2B5yXHEnLOvXtnrSkXk0DQVUTYSQ6dyefZ1ocrAuH9pAGALRXcWPNrpbq77U8aq3jYjWMzjrxhUWYQz7%2FLWiSpiKlOewDplcf0FbispV1XgsV6mcIaDlHnd%2FHauPAfCXWOTIVu%2FiVi3hYfGq2%2F%2BpNWEXQ23LcF9Tj3cpVShGrONB3Iwv7fo6DohrYw9sD2clf2DYXLflHnA0lvPwt2aNAsiwEdKawCUPD7wH82JRIumTo8iKr95s%2FLkqXL62FWgCWba1apppoJajxoYBnkH8%2FNlTFU%2FZ8TL%2FehPeaURpp84tdfIiu0v4pwo24kI014jfRkq4VGnyzpNjBeTDmrKVomJpOMDdMhkjoapBgKf3Ly1BLLuftv7%2FirGdWVAtgvgSkPMP%2BU%2BrwGOqUBSuc6h8o0g4FvBwIAWcE6y5IuB%2FXESTmB8bNHs3yt8T2KKuyudKMgCBT97ud50ywIxrNlr1aE%2B4E6NCWpO5qXN03I49lw9GAOOvmv%2Fc11BbYgxxgpRyI0TmawbVhL8IuekAa5DV8knyysPryTnxtOCrLDWubkqamnGolra7EG7uZ5jM%2BHpu0l6hEFZqBorszrVyhmtpxA6WNZ0twzfgpGisuu81nt&X-Amz-Signature=71bd629e01f5e8923b9a6035ee13e305d4c1e80ea1aafeb6783e9756f6ab65e6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ5XIGTH%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKjxfg8nBdmsxlBsd6iOfEBSQqCqxlYYfo46du9h%2FWRAIgPHC5Ve6qQvOwrudmIy2u%2BPAoZ6k4fIu4p5dyt0lU5W0qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKZeiHscju7p6seVircAzbj%2B5TDCQJ7NRgkDnPFhx1yw2UaE5MkCepLvBZM2DXXoGCPPJje0OBD%2BnymE2cLLQQ0QZFZ6SomCHodj5UYG9RkQKZUOfdkW9MGcqMpARr9%2FVKo6%2F8stxSuQhoFBeeQi%2B%2FQ%2BRAL9Rdm2syPZdU7pJ31sp%2F70XOQuBHSNNp3xR19UzZC6%2FCupXyAQ%2BFqXW9WwGiTQLo3Q1stLf2Tvw3XJPNfF6rDKmaotMX4M8M3v0oqHszD3TxI4oiavVl%2B5yXHEnLOvXtnrSkXk0DQVUTYSQ6dyefZ1ocrAuH9pAGALRXcWPNrpbq77U8aq3jYjWMzjrxhUWYQz7%2FLWiSpiKlOewDplcf0FbispV1XgsV6mcIaDlHnd%2FHauPAfCXWOTIVu%2FiVi3hYfGq2%2F%2BpNWEXQ23LcF9Tj3cpVShGrONB3Iwv7fo6DohrYw9sD2clf2DYXLflHnA0lvPwt2aNAsiwEdKawCUPD7wH82JRIumTo8iKr95s%2FLkqXL62FWgCWba1apppoJajxoYBnkH8%2FNlTFU%2FZ8TL%2FehPeaURpp84tdfIiu0v4pwo24kI014jfRkq4VGnyzpNjBeTDmrKVomJpOMDdMhkjoapBgKf3Ly1BLLuftv7%2FirGdWVAtgvgSkPMP%2BU%2BrwGOqUBSuc6h8o0g4FvBwIAWcE6y5IuB%2FXESTmB8bNHs3yt8T2KKuyudKMgCBT97ud50ywIxrNlr1aE%2B4E6NCWpO5qXN03I49lw9GAOOvmv%2Fc11BbYgxxgpRyI0TmawbVhL8IuekAa5DV8knyysPryTnxtOCrLDWubkqamnGolra7EG7uZ5jM%2BHpu0l6hEFZqBorszrVyhmtpxA6WNZ0twzfgpGisuu81nt&X-Amz-Signature=76789ff54de99a0b0187765d34bbd21429d1ea226f90bfd3ad6cc7fc1797873b&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ5XIGTH%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKjxfg8nBdmsxlBsd6iOfEBSQqCqxlYYfo46du9h%2FWRAIgPHC5Ve6qQvOwrudmIy2u%2BPAoZ6k4fIu4p5dyt0lU5W0qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKZeiHscju7p6seVircAzbj%2B5TDCQJ7NRgkDnPFhx1yw2UaE5MkCepLvBZM2DXXoGCPPJje0OBD%2BnymE2cLLQQ0QZFZ6SomCHodj5UYG9RkQKZUOfdkW9MGcqMpARr9%2FVKo6%2F8stxSuQhoFBeeQi%2B%2FQ%2BRAL9Rdm2syPZdU7pJ31sp%2F70XOQuBHSNNp3xR19UzZC6%2FCupXyAQ%2BFqXW9WwGiTQLo3Q1stLf2Tvw3XJPNfF6rDKmaotMX4M8M3v0oqHszD3TxI4oiavVl%2B5yXHEnLOvXtnrSkXk0DQVUTYSQ6dyefZ1ocrAuH9pAGALRXcWPNrpbq77U8aq3jYjWMzjrxhUWYQz7%2FLWiSpiKlOewDplcf0FbispV1XgsV6mcIaDlHnd%2FHauPAfCXWOTIVu%2FiVi3hYfGq2%2F%2BpNWEXQ23LcF9Tj3cpVShGrONB3Iwv7fo6DohrYw9sD2clf2DYXLflHnA0lvPwt2aNAsiwEdKawCUPD7wH82JRIumTo8iKr95s%2FLkqXL62FWgCWba1apppoJajxoYBnkH8%2FNlTFU%2FZ8TL%2FehPeaURpp84tdfIiu0v4pwo24kI014jfRkq4VGnyzpNjBeTDmrKVomJpOMDdMhkjoapBgKf3Ly1BLLuftv7%2FirGdWVAtgvgSkPMP%2BU%2BrwGOqUBSuc6h8o0g4FvBwIAWcE6y5IuB%2FXESTmB8bNHs3yt8T2KKuyudKMgCBT97ud50ywIxrNlr1aE%2B4E6NCWpO5qXN03I49lw9GAOOvmv%2Fc11BbYgxxgpRyI0TmawbVhL8IuekAa5DV8knyysPryTnxtOCrLDWubkqamnGolra7EG7uZ5jM%2BHpu0l6hEFZqBorszrVyhmtpxA6WNZ0twzfgpGisuu81nt&X-Amz-Signature=51323aaa3eb828ac82fa576e11c640bb8f7de846d39a161cdcc4aed780fdac13&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ5XIGTH%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKjxfg8nBdmsxlBsd6iOfEBSQqCqxlYYfo46du9h%2FWRAIgPHC5Ve6qQvOwrudmIy2u%2BPAoZ6k4fIu4p5dyt0lU5W0qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKZeiHscju7p6seVircAzbj%2B5TDCQJ7NRgkDnPFhx1yw2UaE5MkCepLvBZM2DXXoGCPPJje0OBD%2BnymE2cLLQQ0QZFZ6SomCHodj5UYG9RkQKZUOfdkW9MGcqMpARr9%2FVKo6%2F8stxSuQhoFBeeQi%2B%2FQ%2BRAL9Rdm2syPZdU7pJ31sp%2F70XOQuBHSNNp3xR19UzZC6%2FCupXyAQ%2BFqXW9WwGiTQLo3Q1stLf2Tvw3XJPNfF6rDKmaotMX4M8M3v0oqHszD3TxI4oiavVl%2B5yXHEnLOvXtnrSkXk0DQVUTYSQ6dyefZ1ocrAuH9pAGALRXcWPNrpbq77U8aq3jYjWMzjrxhUWYQz7%2FLWiSpiKlOewDplcf0FbispV1XgsV6mcIaDlHnd%2FHauPAfCXWOTIVu%2FiVi3hYfGq2%2F%2BpNWEXQ23LcF9Tj3cpVShGrONB3Iwv7fo6DohrYw9sD2clf2DYXLflHnA0lvPwt2aNAsiwEdKawCUPD7wH82JRIumTo8iKr95s%2FLkqXL62FWgCWba1apppoJajxoYBnkH8%2FNlTFU%2FZ8TL%2FehPeaURpp84tdfIiu0v4pwo24kI014jfRkq4VGnyzpNjBeTDmrKVomJpOMDdMhkjoapBgKf3Ly1BLLuftv7%2FirGdWVAtgvgSkPMP%2BU%2BrwGOqUBSuc6h8o0g4FvBwIAWcE6y5IuB%2FXESTmB8bNHs3yt8T2KKuyudKMgCBT97ud50ywIxrNlr1aE%2B4E6NCWpO5qXN03I49lw9GAOOvmv%2Fc11BbYgxxgpRyI0TmawbVhL8IuekAa5DV8knyysPryTnxtOCrLDWubkqamnGolra7EG7uZ5jM%2BHpu0l6hEFZqBorszrVyhmtpxA6WNZ0twzfgpGisuu81nt&X-Amz-Signature=b95456ab1be4162f307c5e68f70c9440d88de058a2aa6209a43a6c7a64607710&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
