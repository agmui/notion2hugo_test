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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJ5MVPG%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCGgO7PvJlu4BCd5gemiPk57XxLA3j%2FF6QFyCiccpB7DwIhAJF1z%2BZ0%2FymUKY0w42wdBCr4iMF2ySaWxSsRY9NwcZ3qKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwItRfYMskRyDpukcgq3ANjMXAs2rA3n8Yo5nLKna%2FWwEYkyvU7H1bDTeLonDsixOv02YStMqHst5rziPImycGOrHNGYr6Fin6L%2Bq3tt7Kx7DEd6t%2F%2BulIQ3h41yu4sXVaZlG73HorDKjntDOpC%2B%2B2tkmCovYkCX9qSvqHYvtN1JdLvUrMOjknbDb%2Bx2t4e0z%2BfezsjkRs6Yhg3KyDSUz2hBg8hk7dnXQfBVR5v3XLwt5mBpouPfpnJWhz9qR7nuzceeAOXSPCsHAHcxXOszdKEbzkUBzvUgFU5wni%2BLkbaHO7LefPaX2rVm21vDLL72eWGtdtcDMNQOe64jddAu3ZxeuWZUIoyJOT%2BH9W74LH8chg%2F8uu6cbaHaYGQR5T0GTXsQoJhr1Lt%2BDO3IGSi5YeZz2R15SXNuoGppW7szTEzW9qiDVaoQmYY0WqgUmky6gxCXeltTFo%2FSqw2ul%2FnUPG7OCb3XCvABUF1v5EjHHQksyevI9OGzngdK7PnqvLIb1igrNMLQTIqm1nTtXbleIwmPBaEamKULeRtlbMlFiePlfEzDRwm2oQ%2FdCJIdW5%2FhixPgCtDbTOseMVDPx%2BWROgAfZF65qZmIXXoEM%2Fs4a6DW%2BU5N0rlFz7wleMOAv8lRLyY4Ays4P2D7yegNjCD%2Bri%2BBjqkAa9qHI8x9lCJDmuDYEpkfcyN6x3nDKmf3M2Z1d%2BBxxdSKyARHIgyu91h0IZDMTrwQ0Gx94wv7R89KSL%2Bm7hBhKOomZ1niYlo6d%2FaPbc0Uw81TPsDwTfnLBe9FJ1ww%2FDI5aSeh3czGKOP1q1XSe5ZYA1l7kgyTpJZgyioD8pXP9P%2FQG2nXbzimG1864zjI%2FRiv78xn8h26Sc1JfI65W0zV681gc6X&X-Amz-Signature=9847b645e32a0391946d749de45d27c44f20cd18e1a20456f97f32d527d30e9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJ5MVPG%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCGgO7PvJlu4BCd5gemiPk57XxLA3j%2FF6QFyCiccpB7DwIhAJF1z%2BZ0%2FymUKY0w42wdBCr4iMF2ySaWxSsRY9NwcZ3qKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwItRfYMskRyDpukcgq3ANjMXAs2rA3n8Yo5nLKna%2FWwEYkyvU7H1bDTeLonDsixOv02YStMqHst5rziPImycGOrHNGYr6Fin6L%2Bq3tt7Kx7DEd6t%2F%2BulIQ3h41yu4sXVaZlG73HorDKjntDOpC%2B%2B2tkmCovYkCX9qSvqHYvtN1JdLvUrMOjknbDb%2Bx2t4e0z%2BfezsjkRs6Yhg3KyDSUz2hBg8hk7dnXQfBVR5v3XLwt5mBpouPfpnJWhz9qR7nuzceeAOXSPCsHAHcxXOszdKEbzkUBzvUgFU5wni%2BLkbaHO7LefPaX2rVm21vDLL72eWGtdtcDMNQOe64jddAu3ZxeuWZUIoyJOT%2BH9W74LH8chg%2F8uu6cbaHaYGQR5T0GTXsQoJhr1Lt%2BDO3IGSi5YeZz2R15SXNuoGppW7szTEzW9qiDVaoQmYY0WqgUmky6gxCXeltTFo%2FSqw2ul%2FnUPG7OCb3XCvABUF1v5EjHHQksyevI9OGzngdK7PnqvLIb1igrNMLQTIqm1nTtXbleIwmPBaEamKULeRtlbMlFiePlfEzDRwm2oQ%2FdCJIdW5%2FhixPgCtDbTOseMVDPx%2BWROgAfZF65qZmIXXoEM%2Fs4a6DW%2BU5N0rlFz7wleMOAv8lRLyY4Ays4P2D7yegNjCD%2Bri%2BBjqkAa9qHI8x9lCJDmuDYEpkfcyN6x3nDKmf3M2Z1d%2BBxxdSKyARHIgyu91h0IZDMTrwQ0Gx94wv7R89KSL%2Bm7hBhKOomZ1niYlo6d%2FaPbc0Uw81TPsDwTfnLBe9FJ1ww%2FDI5aSeh3czGKOP1q1XSe5ZYA1l7kgyTpJZgyioD8pXP9P%2FQG2nXbzimG1864zjI%2FRiv78xn8h26Sc1JfI65W0zV681gc6X&X-Amz-Signature=b0741c92f16fb84567eb9824d4163898739e11b6ddac620a55d010b8eaab9f74&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJ5MVPG%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCGgO7PvJlu4BCd5gemiPk57XxLA3j%2FF6QFyCiccpB7DwIhAJF1z%2BZ0%2FymUKY0w42wdBCr4iMF2ySaWxSsRY9NwcZ3qKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwItRfYMskRyDpukcgq3ANjMXAs2rA3n8Yo5nLKna%2FWwEYkyvU7H1bDTeLonDsixOv02YStMqHst5rziPImycGOrHNGYr6Fin6L%2Bq3tt7Kx7DEd6t%2F%2BulIQ3h41yu4sXVaZlG73HorDKjntDOpC%2B%2B2tkmCovYkCX9qSvqHYvtN1JdLvUrMOjknbDb%2Bx2t4e0z%2BfezsjkRs6Yhg3KyDSUz2hBg8hk7dnXQfBVR5v3XLwt5mBpouPfpnJWhz9qR7nuzceeAOXSPCsHAHcxXOszdKEbzkUBzvUgFU5wni%2BLkbaHO7LefPaX2rVm21vDLL72eWGtdtcDMNQOe64jddAu3ZxeuWZUIoyJOT%2BH9W74LH8chg%2F8uu6cbaHaYGQR5T0GTXsQoJhr1Lt%2BDO3IGSi5YeZz2R15SXNuoGppW7szTEzW9qiDVaoQmYY0WqgUmky6gxCXeltTFo%2FSqw2ul%2FnUPG7OCb3XCvABUF1v5EjHHQksyevI9OGzngdK7PnqvLIb1igrNMLQTIqm1nTtXbleIwmPBaEamKULeRtlbMlFiePlfEzDRwm2oQ%2FdCJIdW5%2FhixPgCtDbTOseMVDPx%2BWROgAfZF65qZmIXXoEM%2Fs4a6DW%2BU5N0rlFz7wleMOAv8lRLyY4Ays4P2D7yegNjCD%2Bri%2BBjqkAa9qHI8x9lCJDmuDYEpkfcyN6x3nDKmf3M2Z1d%2BBxxdSKyARHIgyu91h0IZDMTrwQ0Gx94wv7R89KSL%2Bm7hBhKOomZ1niYlo6d%2FaPbc0Uw81TPsDwTfnLBe9FJ1ww%2FDI5aSeh3czGKOP1q1XSe5ZYA1l7kgyTpJZgyioD8pXP9P%2FQG2nXbzimG1864zjI%2FRiv78xn8h26Sc1JfI65W0zV681gc6X&X-Amz-Signature=67efca332f5d94fb2947b50720831a62b3d3fda2daecdda5801a023d0f72b509&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJ5MVPG%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCGgO7PvJlu4BCd5gemiPk57XxLA3j%2FF6QFyCiccpB7DwIhAJF1z%2BZ0%2FymUKY0w42wdBCr4iMF2ySaWxSsRY9NwcZ3qKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwItRfYMskRyDpukcgq3ANjMXAs2rA3n8Yo5nLKna%2FWwEYkyvU7H1bDTeLonDsixOv02YStMqHst5rziPImycGOrHNGYr6Fin6L%2Bq3tt7Kx7DEd6t%2F%2BulIQ3h41yu4sXVaZlG73HorDKjntDOpC%2B%2B2tkmCovYkCX9qSvqHYvtN1JdLvUrMOjknbDb%2Bx2t4e0z%2BfezsjkRs6Yhg3KyDSUz2hBg8hk7dnXQfBVR5v3XLwt5mBpouPfpnJWhz9qR7nuzceeAOXSPCsHAHcxXOszdKEbzkUBzvUgFU5wni%2BLkbaHO7LefPaX2rVm21vDLL72eWGtdtcDMNQOe64jddAu3ZxeuWZUIoyJOT%2BH9W74LH8chg%2F8uu6cbaHaYGQR5T0GTXsQoJhr1Lt%2BDO3IGSi5YeZz2R15SXNuoGppW7szTEzW9qiDVaoQmYY0WqgUmky6gxCXeltTFo%2FSqw2ul%2FnUPG7OCb3XCvABUF1v5EjHHQksyevI9OGzngdK7PnqvLIb1igrNMLQTIqm1nTtXbleIwmPBaEamKULeRtlbMlFiePlfEzDRwm2oQ%2FdCJIdW5%2FhixPgCtDbTOseMVDPx%2BWROgAfZF65qZmIXXoEM%2Fs4a6DW%2BU5N0rlFz7wleMOAv8lRLyY4Ays4P2D7yegNjCD%2Bri%2BBjqkAa9qHI8x9lCJDmuDYEpkfcyN6x3nDKmf3M2Z1d%2BBxxdSKyARHIgyu91h0IZDMTrwQ0Gx94wv7R89KSL%2Bm7hBhKOomZ1niYlo6d%2FaPbc0Uw81TPsDwTfnLBe9FJ1ww%2FDI5aSeh3czGKOP1q1XSe5ZYA1l7kgyTpJZgyioD8pXP9P%2FQG2nXbzimG1864zjI%2FRiv78xn8h26Sc1JfI65W0zV681gc6X&X-Amz-Signature=a268e7d474278214471dae2cc0b0e263c698da4007942dba405e47797cc66f19&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJ5MVPG%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCGgO7PvJlu4BCd5gemiPk57XxLA3j%2FF6QFyCiccpB7DwIhAJF1z%2BZ0%2FymUKY0w42wdBCr4iMF2ySaWxSsRY9NwcZ3qKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwItRfYMskRyDpukcgq3ANjMXAs2rA3n8Yo5nLKna%2FWwEYkyvU7H1bDTeLonDsixOv02YStMqHst5rziPImycGOrHNGYr6Fin6L%2Bq3tt7Kx7DEd6t%2F%2BulIQ3h41yu4sXVaZlG73HorDKjntDOpC%2B%2B2tkmCovYkCX9qSvqHYvtN1JdLvUrMOjknbDb%2Bx2t4e0z%2BfezsjkRs6Yhg3KyDSUz2hBg8hk7dnXQfBVR5v3XLwt5mBpouPfpnJWhz9qR7nuzceeAOXSPCsHAHcxXOszdKEbzkUBzvUgFU5wni%2BLkbaHO7LefPaX2rVm21vDLL72eWGtdtcDMNQOe64jddAu3ZxeuWZUIoyJOT%2BH9W74LH8chg%2F8uu6cbaHaYGQR5T0GTXsQoJhr1Lt%2BDO3IGSi5YeZz2R15SXNuoGppW7szTEzW9qiDVaoQmYY0WqgUmky6gxCXeltTFo%2FSqw2ul%2FnUPG7OCb3XCvABUF1v5EjHHQksyevI9OGzngdK7PnqvLIb1igrNMLQTIqm1nTtXbleIwmPBaEamKULeRtlbMlFiePlfEzDRwm2oQ%2FdCJIdW5%2FhixPgCtDbTOseMVDPx%2BWROgAfZF65qZmIXXoEM%2Fs4a6DW%2BU5N0rlFz7wleMOAv8lRLyY4Ays4P2D7yegNjCD%2Bri%2BBjqkAa9qHI8x9lCJDmuDYEpkfcyN6x3nDKmf3M2Z1d%2BBxxdSKyARHIgyu91h0IZDMTrwQ0Gx94wv7R89KSL%2Bm7hBhKOomZ1niYlo6d%2FaPbc0Uw81TPsDwTfnLBe9FJ1ww%2FDI5aSeh3czGKOP1q1XSe5ZYA1l7kgyTpJZgyioD8pXP9P%2FQG2nXbzimG1864zjI%2FRiv78xn8h26Sc1JfI65W0zV681gc6X&X-Amz-Signature=bf31c43f41a0b6e0a91dd589362610e2676e76425261a72c875819686706862e&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
