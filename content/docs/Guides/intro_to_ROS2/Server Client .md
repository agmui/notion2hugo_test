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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RUJHQ7X%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq5zsGJAd9XCJC3B0hEx9x7yQQeyik%2BGK78Doq4GwslgIgdo5eKtWonE4wN4wSob3eYeiese%2BKTFRuve%2F11RGfDZkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyxh%2BoNjX5RsqPe8ircA1U%2FKTVZPrEdMRWNPx45mF8ce%2F5Pevs6vz0mes30zwM%2Fkm2BiQgsLT8PVMnPbXpx%2BPSQVR9pXAjfQUuUOVl1bgpHYg4Sh69UdC9OOuVuuoWuJTwtvpKPSUwGnxhnUjKK7oVTuOyxk40Rx3puru8rdDl37XAg%2FzgSi7JW%2Fc37UBnMVH7T9aukIliV%2FOXNy8HUI6lNY7f1%2BB8AsydYWt2vX42PQRiZqsau7DJKizGLoFAeIf9Zsm1GGinxXB86bhVW06y1QHq1i5x3NEY7rcTyvD6D7wkax0G5iy0%2B6ls%2ByTBg6iS6hZnPCpbRPec01lfDkTwLhaJNfv0RvSIhqqOQuvdCL6pTQEcB1VQkFRS0qUA3hI30lwER43VHEuGSoo6DvL%2FabsF4Drvj9XGgOQom04ZTSOG2vqWfJPjryAnpluqa2EQ1RerV2xBL%2Fgl2%2BfgnaF3rsgunOMpHiUbLC6x%2Bka7xiMM6dVcqMequ0QjIf8sIo2WV8oKIU9%2FLFl7hTjSWYLv9Yzrt2aD2WXpYl1OBwsW0kbN783S9DYlGQyTNpP08kcwHvdC683IShZrqQR0Psv9I9sVzLBgM6hUDLXx%2FjSbOk783TsLClLfoTrbbiBdTnKLhKJ%2F7i%2Bbo58mLMM69lsMGOqUBQ8lMuOkRn3emjYbHVHGuRdBqbfMmf0BTUA2zobmgbsS5g591gEdSKM%2F2H8qKWqF66QfdwKmFfyktlvzFfPuzl8k2qKdz4facUBx4zF%2BmbZUQrOfvD7eU9xlmeRV0BpG3jZL5xgiC3%2Fxh4DgyhqGFaSeFocDwcwWLANQRuy0ICfSPHMvaABW2%2Fzs9ECGI9GOO%2BRRvTVMG6Td7dbGGdIMv3uyLm8Dn&X-Amz-Signature=73fee53e44b9ec8d797405a6d0aa279e9e5b033e72d96209f8a9231c82f57a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RUJHQ7X%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq5zsGJAd9XCJC3B0hEx9x7yQQeyik%2BGK78Doq4GwslgIgdo5eKtWonE4wN4wSob3eYeiese%2BKTFRuve%2F11RGfDZkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyxh%2BoNjX5RsqPe8ircA1U%2FKTVZPrEdMRWNPx45mF8ce%2F5Pevs6vz0mes30zwM%2Fkm2BiQgsLT8PVMnPbXpx%2BPSQVR9pXAjfQUuUOVl1bgpHYg4Sh69UdC9OOuVuuoWuJTwtvpKPSUwGnxhnUjKK7oVTuOyxk40Rx3puru8rdDl37XAg%2FzgSi7JW%2Fc37UBnMVH7T9aukIliV%2FOXNy8HUI6lNY7f1%2BB8AsydYWt2vX42PQRiZqsau7DJKizGLoFAeIf9Zsm1GGinxXB86bhVW06y1QHq1i5x3NEY7rcTyvD6D7wkax0G5iy0%2B6ls%2ByTBg6iS6hZnPCpbRPec01lfDkTwLhaJNfv0RvSIhqqOQuvdCL6pTQEcB1VQkFRS0qUA3hI30lwER43VHEuGSoo6DvL%2FabsF4Drvj9XGgOQom04ZTSOG2vqWfJPjryAnpluqa2EQ1RerV2xBL%2Fgl2%2BfgnaF3rsgunOMpHiUbLC6x%2Bka7xiMM6dVcqMequ0QjIf8sIo2WV8oKIU9%2FLFl7hTjSWYLv9Yzrt2aD2WXpYl1OBwsW0kbN783S9DYlGQyTNpP08kcwHvdC683IShZrqQR0Psv9I9sVzLBgM6hUDLXx%2FjSbOk783TsLClLfoTrbbiBdTnKLhKJ%2F7i%2Bbo58mLMM69lsMGOqUBQ8lMuOkRn3emjYbHVHGuRdBqbfMmf0BTUA2zobmgbsS5g591gEdSKM%2F2H8qKWqF66QfdwKmFfyktlvzFfPuzl8k2qKdz4facUBx4zF%2BmbZUQrOfvD7eU9xlmeRV0BpG3jZL5xgiC3%2Fxh4DgyhqGFaSeFocDwcwWLANQRuy0ICfSPHMvaABW2%2Fzs9ECGI9GOO%2BRRvTVMG6Td7dbGGdIMv3uyLm8Dn&X-Amz-Signature=14ce711b6624ab5ab8e7acdaa99dc81601c118c226a30657e9b0e454e643f7ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RUJHQ7X%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq5zsGJAd9XCJC3B0hEx9x7yQQeyik%2BGK78Doq4GwslgIgdo5eKtWonE4wN4wSob3eYeiese%2BKTFRuve%2F11RGfDZkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyxh%2BoNjX5RsqPe8ircA1U%2FKTVZPrEdMRWNPx45mF8ce%2F5Pevs6vz0mes30zwM%2Fkm2BiQgsLT8PVMnPbXpx%2BPSQVR9pXAjfQUuUOVl1bgpHYg4Sh69UdC9OOuVuuoWuJTwtvpKPSUwGnxhnUjKK7oVTuOyxk40Rx3puru8rdDl37XAg%2FzgSi7JW%2Fc37UBnMVH7T9aukIliV%2FOXNy8HUI6lNY7f1%2BB8AsydYWt2vX42PQRiZqsau7DJKizGLoFAeIf9Zsm1GGinxXB86bhVW06y1QHq1i5x3NEY7rcTyvD6D7wkax0G5iy0%2B6ls%2ByTBg6iS6hZnPCpbRPec01lfDkTwLhaJNfv0RvSIhqqOQuvdCL6pTQEcB1VQkFRS0qUA3hI30lwER43VHEuGSoo6DvL%2FabsF4Drvj9XGgOQom04ZTSOG2vqWfJPjryAnpluqa2EQ1RerV2xBL%2Fgl2%2BfgnaF3rsgunOMpHiUbLC6x%2Bka7xiMM6dVcqMequ0QjIf8sIo2WV8oKIU9%2FLFl7hTjSWYLv9Yzrt2aD2WXpYl1OBwsW0kbN783S9DYlGQyTNpP08kcwHvdC683IShZrqQR0Psv9I9sVzLBgM6hUDLXx%2FjSbOk783TsLClLfoTrbbiBdTnKLhKJ%2F7i%2Bbo58mLMM69lsMGOqUBQ8lMuOkRn3emjYbHVHGuRdBqbfMmf0BTUA2zobmgbsS5g591gEdSKM%2F2H8qKWqF66QfdwKmFfyktlvzFfPuzl8k2qKdz4facUBx4zF%2BmbZUQrOfvD7eU9xlmeRV0BpG3jZL5xgiC3%2Fxh4DgyhqGFaSeFocDwcwWLANQRuy0ICfSPHMvaABW2%2Fzs9ECGI9GOO%2BRRvTVMG6Td7dbGGdIMv3uyLm8Dn&X-Amz-Signature=42399a7bff80d87b29da46bb24878e374f7d0a443266398e82028179ec7894ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RUJHQ7X%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq5zsGJAd9XCJC3B0hEx9x7yQQeyik%2BGK78Doq4GwslgIgdo5eKtWonE4wN4wSob3eYeiese%2BKTFRuve%2F11RGfDZkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyxh%2BoNjX5RsqPe8ircA1U%2FKTVZPrEdMRWNPx45mF8ce%2F5Pevs6vz0mes30zwM%2Fkm2BiQgsLT8PVMnPbXpx%2BPSQVR9pXAjfQUuUOVl1bgpHYg4Sh69UdC9OOuVuuoWuJTwtvpKPSUwGnxhnUjKK7oVTuOyxk40Rx3puru8rdDl37XAg%2FzgSi7JW%2Fc37UBnMVH7T9aukIliV%2FOXNy8HUI6lNY7f1%2BB8AsydYWt2vX42PQRiZqsau7DJKizGLoFAeIf9Zsm1GGinxXB86bhVW06y1QHq1i5x3NEY7rcTyvD6D7wkax0G5iy0%2B6ls%2ByTBg6iS6hZnPCpbRPec01lfDkTwLhaJNfv0RvSIhqqOQuvdCL6pTQEcB1VQkFRS0qUA3hI30lwER43VHEuGSoo6DvL%2FabsF4Drvj9XGgOQom04ZTSOG2vqWfJPjryAnpluqa2EQ1RerV2xBL%2Fgl2%2BfgnaF3rsgunOMpHiUbLC6x%2Bka7xiMM6dVcqMequ0QjIf8sIo2WV8oKIU9%2FLFl7hTjSWYLv9Yzrt2aD2WXpYl1OBwsW0kbN783S9DYlGQyTNpP08kcwHvdC683IShZrqQR0Psv9I9sVzLBgM6hUDLXx%2FjSbOk783TsLClLfoTrbbiBdTnKLhKJ%2F7i%2Bbo58mLMM69lsMGOqUBQ8lMuOkRn3emjYbHVHGuRdBqbfMmf0BTUA2zobmgbsS5g591gEdSKM%2F2H8qKWqF66QfdwKmFfyktlvzFfPuzl8k2qKdz4facUBx4zF%2BmbZUQrOfvD7eU9xlmeRV0BpG3jZL5xgiC3%2Fxh4DgyhqGFaSeFocDwcwWLANQRuy0ICfSPHMvaABW2%2Fzs9ECGI9GOO%2BRRvTVMG6Td7dbGGdIMv3uyLm8Dn&X-Amz-Signature=03060043d65aa6432afe9e940565a6812a5396904d57114d063fa228042769b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RUJHQ7X%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq5zsGJAd9XCJC3B0hEx9x7yQQeyik%2BGK78Doq4GwslgIgdo5eKtWonE4wN4wSob3eYeiese%2BKTFRuve%2F11RGfDZkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyxh%2BoNjX5RsqPe8ircA1U%2FKTVZPrEdMRWNPx45mF8ce%2F5Pevs6vz0mes30zwM%2Fkm2BiQgsLT8PVMnPbXpx%2BPSQVR9pXAjfQUuUOVl1bgpHYg4Sh69UdC9OOuVuuoWuJTwtvpKPSUwGnxhnUjKK7oVTuOyxk40Rx3puru8rdDl37XAg%2FzgSi7JW%2Fc37UBnMVH7T9aukIliV%2FOXNy8HUI6lNY7f1%2BB8AsydYWt2vX42PQRiZqsau7DJKizGLoFAeIf9Zsm1GGinxXB86bhVW06y1QHq1i5x3NEY7rcTyvD6D7wkax0G5iy0%2B6ls%2ByTBg6iS6hZnPCpbRPec01lfDkTwLhaJNfv0RvSIhqqOQuvdCL6pTQEcB1VQkFRS0qUA3hI30lwER43VHEuGSoo6DvL%2FabsF4Drvj9XGgOQom04ZTSOG2vqWfJPjryAnpluqa2EQ1RerV2xBL%2Fgl2%2BfgnaF3rsgunOMpHiUbLC6x%2Bka7xiMM6dVcqMequ0QjIf8sIo2WV8oKIU9%2FLFl7hTjSWYLv9Yzrt2aD2WXpYl1OBwsW0kbN783S9DYlGQyTNpP08kcwHvdC683IShZrqQR0Psv9I9sVzLBgM6hUDLXx%2FjSbOk783TsLClLfoTrbbiBdTnKLhKJ%2F7i%2Bbo58mLMM69lsMGOqUBQ8lMuOkRn3emjYbHVHGuRdBqbfMmf0BTUA2zobmgbsS5g591gEdSKM%2F2H8qKWqF66QfdwKmFfyktlvzFfPuzl8k2qKdz4facUBx4zF%2BmbZUQrOfvD7eU9xlmeRV0BpG3jZL5xgiC3%2Fxh4DgyhqGFaSeFocDwcwWLANQRuy0ICfSPHMvaABW2%2Fzs9ECGI9GOO%2BRRvTVMG6Td7dbGGdIMv3uyLm8Dn&X-Amz-Signature=d75e21cfe4fb283d846403ca5eeed818dc84f91acd335b8cc73a3d6f8327b21f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
