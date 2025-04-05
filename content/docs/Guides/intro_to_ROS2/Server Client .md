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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVG3V7AB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDetU1W6meFHvMOlzBBJWatXGwT13JCRtAa1BEgSZEH3gIhAIRNIfjBuxc5Tx%2FBiAApwN7EiyZWkyNxUoJ3X7PwrUSAKv8DCCoQABoMNjM3NDIzMTgzODA1IgzkEFIeNrsCYQgiQeUq3APZeJxWdkwy0UDaQQu%2FvA5cdHf9%2BDlAMjhOmncPAZtZlNXkCePxfbWHkrxRg11Liw%2BXPt3vbWdEjgQhF0F4UOhKF2RMXLpOr51Xst3xJQqftGAD3TQaKnKNpCb4MrW947rNw0EtbUWCT%2BeJ8hQyW3P1%2FuPLcFCZEn2cWsXkSUqIm9jDT7zn7HqTtf92raP40alh%2BEvmtYD%2FIYpugoXl5o5O10Xlv9NNzz5z66zruzjKXXbS%2FHZHEPxBh3pHV965N6SbZ2gFTaKuKSjnkHqr%2F%2FzhSpQrjJxQ2WVzc4EiSv%2FKiAsWl%2BpmWTixV161dykjIVt5zDVq7H4VAr0oE6fMMWJUormrZkWH3QCkPDvepuWVTDDWx3Efx5A89GJ5v103egQBlZe6NfyDYAEhef%2BnKCrTAu3%2BxngGVG8a%2BGMbMk4argC%2BTjVuOEwVftZPhd5vDQbnv6Qt1beYiMmxOZ41ZftivYUleeOtxatmzevfYbCF6f1vsVCL%2Bj2t9%2Fu9P3XOM649bwXpnNKEwHgvloLVlr2l21LLfoVxGeAm81%2BXGgslnRuTN44vHHMlsnBvNwBJsxWEGD2vgeC%2BNsX1uIkMFasYl%2FWC15sqLKMAb39egK06hdIhcedW0OmQ57n%2FrjDG5MO%2FBjqkAcSw8GFuD7r%2BH4tkhkvvlsHlqykp%2BwPO2qjCAy%2Bi5JSpBvmWN1r05L0wb2Kvn6%2FueCvbOKHPICOu3a%2FTbvEQxAmnCf%2Btb3%2FkCcNQOVW1dknOgKmo1Ta%2B8I44UcPqmTBW%2FJg2IbhYDFKiipt2nHJMoYLIowh14QdB5BSneg2nUJpyAjKlVrLOVuAR8EuOvx%2FiGq%2BFCzaIQwHY19AQS2F6%2BjjRXAiG&X-Amz-Signature=f3c14bc754ab30c906eb528f8e6a58c0c5546f92762e1062849f0a8ca5678d09&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVG3V7AB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDetU1W6meFHvMOlzBBJWatXGwT13JCRtAa1BEgSZEH3gIhAIRNIfjBuxc5Tx%2FBiAApwN7EiyZWkyNxUoJ3X7PwrUSAKv8DCCoQABoMNjM3NDIzMTgzODA1IgzkEFIeNrsCYQgiQeUq3APZeJxWdkwy0UDaQQu%2FvA5cdHf9%2BDlAMjhOmncPAZtZlNXkCePxfbWHkrxRg11Liw%2BXPt3vbWdEjgQhF0F4UOhKF2RMXLpOr51Xst3xJQqftGAD3TQaKnKNpCb4MrW947rNw0EtbUWCT%2BeJ8hQyW3P1%2FuPLcFCZEn2cWsXkSUqIm9jDT7zn7HqTtf92raP40alh%2BEvmtYD%2FIYpugoXl5o5O10Xlv9NNzz5z66zruzjKXXbS%2FHZHEPxBh3pHV965N6SbZ2gFTaKuKSjnkHqr%2F%2FzhSpQrjJxQ2WVzc4EiSv%2FKiAsWl%2BpmWTixV161dykjIVt5zDVq7H4VAr0oE6fMMWJUormrZkWH3QCkPDvepuWVTDDWx3Efx5A89GJ5v103egQBlZe6NfyDYAEhef%2BnKCrTAu3%2BxngGVG8a%2BGMbMk4argC%2BTjVuOEwVftZPhd5vDQbnv6Qt1beYiMmxOZ41ZftivYUleeOtxatmzevfYbCF6f1vsVCL%2Bj2t9%2Fu9P3XOM649bwXpnNKEwHgvloLVlr2l21LLfoVxGeAm81%2BXGgslnRuTN44vHHMlsnBvNwBJsxWEGD2vgeC%2BNsX1uIkMFasYl%2FWC15sqLKMAb39egK06hdIhcedW0OmQ57n%2FrjDG5MO%2FBjqkAcSw8GFuD7r%2BH4tkhkvvlsHlqykp%2BwPO2qjCAy%2Bi5JSpBvmWN1r05L0wb2Kvn6%2FueCvbOKHPICOu3a%2FTbvEQxAmnCf%2Btb3%2FkCcNQOVW1dknOgKmo1Ta%2B8I44UcPqmTBW%2FJg2IbhYDFKiipt2nHJMoYLIowh14QdB5BSneg2nUJpyAjKlVrLOVuAR8EuOvx%2FiGq%2BFCzaIQwHY19AQS2F6%2BjjRXAiG&X-Amz-Signature=17c69bf715871d186d875e93905a8a70fe1ed491e41de22f4094942fef5fab8b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVG3V7AB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDetU1W6meFHvMOlzBBJWatXGwT13JCRtAa1BEgSZEH3gIhAIRNIfjBuxc5Tx%2FBiAApwN7EiyZWkyNxUoJ3X7PwrUSAKv8DCCoQABoMNjM3NDIzMTgzODA1IgzkEFIeNrsCYQgiQeUq3APZeJxWdkwy0UDaQQu%2FvA5cdHf9%2BDlAMjhOmncPAZtZlNXkCePxfbWHkrxRg11Liw%2BXPt3vbWdEjgQhF0F4UOhKF2RMXLpOr51Xst3xJQqftGAD3TQaKnKNpCb4MrW947rNw0EtbUWCT%2BeJ8hQyW3P1%2FuPLcFCZEn2cWsXkSUqIm9jDT7zn7HqTtf92raP40alh%2BEvmtYD%2FIYpugoXl5o5O10Xlv9NNzz5z66zruzjKXXbS%2FHZHEPxBh3pHV965N6SbZ2gFTaKuKSjnkHqr%2F%2FzhSpQrjJxQ2WVzc4EiSv%2FKiAsWl%2BpmWTixV161dykjIVt5zDVq7H4VAr0oE6fMMWJUormrZkWH3QCkPDvepuWVTDDWx3Efx5A89GJ5v103egQBlZe6NfyDYAEhef%2BnKCrTAu3%2BxngGVG8a%2BGMbMk4argC%2BTjVuOEwVftZPhd5vDQbnv6Qt1beYiMmxOZ41ZftivYUleeOtxatmzevfYbCF6f1vsVCL%2Bj2t9%2Fu9P3XOM649bwXpnNKEwHgvloLVlr2l21LLfoVxGeAm81%2BXGgslnRuTN44vHHMlsnBvNwBJsxWEGD2vgeC%2BNsX1uIkMFasYl%2FWC15sqLKMAb39egK06hdIhcedW0OmQ57n%2FrjDG5MO%2FBjqkAcSw8GFuD7r%2BH4tkhkvvlsHlqykp%2BwPO2qjCAy%2Bi5JSpBvmWN1r05L0wb2Kvn6%2FueCvbOKHPICOu3a%2FTbvEQxAmnCf%2Btb3%2FkCcNQOVW1dknOgKmo1Ta%2B8I44UcPqmTBW%2FJg2IbhYDFKiipt2nHJMoYLIowh14QdB5BSneg2nUJpyAjKlVrLOVuAR8EuOvx%2FiGq%2BFCzaIQwHY19AQS2F6%2BjjRXAiG&X-Amz-Signature=f08aad85d85fbe08118fc0dbb73a7be6e715d4da4911fd456106c1f86963aefd&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVG3V7AB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDetU1W6meFHvMOlzBBJWatXGwT13JCRtAa1BEgSZEH3gIhAIRNIfjBuxc5Tx%2FBiAApwN7EiyZWkyNxUoJ3X7PwrUSAKv8DCCoQABoMNjM3NDIzMTgzODA1IgzkEFIeNrsCYQgiQeUq3APZeJxWdkwy0UDaQQu%2FvA5cdHf9%2BDlAMjhOmncPAZtZlNXkCePxfbWHkrxRg11Liw%2BXPt3vbWdEjgQhF0F4UOhKF2RMXLpOr51Xst3xJQqftGAD3TQaKnKNpCb4MrW947rNw0EtbUWCT%2BeJ8hQyW3P1%2FuPLcFCZEn2cWsXkSUqIm9jDT7zn7HqTtf92raP40alh%2BEvmtYD%2FIYpugoXl5o5O10Xlv9NNzz5z66zruzjKXXbS%2FHZHEPxBh3pHV965N6SbZ2gFTaKuKSjnkHqr%2F%2FzhSpQrjJxQ2WVzc4EiSv%2FKiAsWl%2BpmWTixV161dykjIVt5zDVq7H4VAr0oE6fMMWJUormrZkWH3QCkPDvepuWVTDDWx3Efx5A89GJ5v103egQBlZe6NfyDYAEhef%2BnKCrTAu3%2BxngGVG8a%2BGMbMk4argC%2BTjVuOEwVftZPhd5vDQbnv6Qt1beYiMmxOZ41ZftivYUleeOtxatmzevfYbCF6f1vsVCL%2Bj2t9%2Fu9P3XOM649bwXpnNKEwHgvloLVlr2l21LLfoVxGeAm81%2BXGgslnRuTN44vHHMlsnBvNwBJsxWEGD2vgeC%2BNsX1uIkMFasYl%2FWC15sqLKMAb39egK06hdIhcedW0OmQ57n%2FrjDG5MO%2FBjqkAcSw8GFuD7r%2BH4tkhkvvlsHlqykp%2BwPO2qjCAy%2Bi5JSpBvmWN1r05L0wb2Kvn6%2FueCvbOKHPICOu3a%2FTbvEQxAmnCf%2Btb3%2FkCcNQOVW1dknOgKmo1Ta%2B8I44UcPqmTBW%2FJg2IbhYDFKiipt2nHJMoYLIowh14QdB5BSneg2nUJpyAjKlVrLOVuAR8EuOvx%2FiGq%2BFCzaIQwHY19AQS2F6%2BjjRXAiG&X-Amz-Signature=23020c71cc4ea8aa51645fc9c958fc161c7166a53b8d1f0e9dd9a44bffa406be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVG3V7AB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDetU1W6meFHvMOlzBBJWatXGwT13JCRtAa1BEgSZEH3gIhAIRNIfjBuxc5Tx%2FBiAApwN7EiyZWkyNxUoJ3X7PwrUSAKv8DCCoQABoMNjM3NDIzMTgzODA1IgzkEFIeNrsCYQgiQeUq3APZeJxWdkwy0UDaQQu%2FvA5cdHf9%2BDlAMjhOmncPAZtZlNXkCePxfbWHkrxRg11Liw%2BXPt3vbWdEjgQhF0F4UOhKF2RMXLpOr51Xst3xJQqftGAD3TQaKnKNpCb4MrW947rNw0EtbUWCT%2BeJ8hQyW3P1%2FuPLcFCZEn2cWsXkSUqIm9jDT7zn7HqTtf92raP40alh%2BEvmtYD%2FIYpugoXl5o5O10Xlv9NNzz5z66zruzjKXXbS%2FHZHEPxBh3pHV965N6SbZ2gFTaKuKSjnkHqr%2F%2FzhSpQrjJxQ2WVzc4EiSv%2FKiAsWl%2BpmWTixV161dykjIVt5zDVq7H4VAr0oE6fMMWJUormrZkWH3QCkPDvepuWVTDDWx3Efx5A89GJ5v103egQBlZe6NfyDYAEhef%2BnKCrTAu3%2BxngGVG8a%2BGMbMk4argC%2BTjVuOEwVftZPhd5vDQbnv6Qt1beYiMmxOZ41ZftivYUleeOtxatmzevfYbCF6f1vsVCL%2Bj2t9%2Fu9P3XOM649bwXpnNKEwHgvloLVlr2l21LLfoVxGeAm81%2BXGgslnRuTN44vHHMlsnBvNwBJsxWEGD2vgeC%2BNsX1uIkMFasYl%2FWC15sqLKMAb39egK06hdIhcedW0OmQ57n%2FrjDG5MO%2FBjqkAcSw8GFuD7r%2BH4tkhkvvlsHlqykp%2BwPO2qjCAy%2Bi5JSpBvmWN1r05L0wb2Kvn6%2FueCvbOKHPICOu3a%2FTbvEQxAmnCf%2Btb3%2FkCcNQOVW1dknOgKmo1Ta%2B8I44UcPqmTBW%2FJg2IbhYDFKiipt2nHJMoYLIowh14QdB5BSneg2nUJpyAjKlVrLOVuAR8EuOvx%2FiGq%2BFCzaIQwHY19AQS2F6%2BjjRXAiG&X-Amz-Signature=a05e5b781af5c0bc710dcf714e29d123ab8122f4c68a7b32021b77eda494e00c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
