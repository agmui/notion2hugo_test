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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626UQ4QOF%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIAcgYhZUqISPmN02Hi8FB%2BbqWlrGFEXT6dye9dckS9p5AiEA0gXlIiO8QBex0oVMWYqk6fYuPfaoBulXjstHuM3PtzsqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnjtOr81LOHU7TgwSrcAx%2F2bihjJf3HkZGyqxCydBgdJxoVjVfwGcGGBOYYhmZ58VQHEKoEG3e7sI1jLoDd87DZn65afLrThCxoBOa3j9OpnkFU0HWpLM0icEWgCIrDvro9SOdTi4eFsf1Vg70BqnfgOi58Nj8AY7LyeM2eVSsBGot6Kdz9rqt7mghggf44tnMC0jDyKLhhCi%2FmRM3YCqOVmz4Nfsf5w%2BJIyqMrt8qqvgtg%2BwCd8z2XklacbolODLGJ9RnKA8Kf0TDEg%2BU7PcjYvwUfoEH1ErDsqCmEVisJgwJbw3MIrl6pxgbC7k0lvAXB6%2FrzDuT37eMKSR6A4tOfQfeWGGVdVqLWlX6xYyu7Q6b72NWOgZx2K2MeHzAzhmOVNLuxUnWyEa2xP1jLvRQh4g1sdaqbwg9hNIyfgEK2DAAUy7iudAMNcbTB2LbdtaggnoXo%2Bbjz0xffmfZsuBP5hx2uqiIJxPXDT%2BJ7Y8Zq3EkfgF8Q990qXLEoc2f0nPTaV22whBoNangvrLnXEKa1AqdFL3gLRTPVDdrj7F7Tziu7q48DyuwdxcG36ep4eT%2BcLads6oEJ7kfP3mGQtU2R7cHpNgftKM2vCTzaa2it%2F9%2Bzkk0sMQAIerQiR4yZjlXcok1brelMAPHPMNm6i74GOqUBsYeDst991BtFHN%2BT7eIqGyKKgQWYTDSWkBDFbw7eCcYKfjEsO2B7u%2FNQT8N0Cedc%2BdPd9yOA7X2k5JaVpgcSiF65QyeLF0d1%2B1X2leVzGS36Wh%2F2BxL63AJ1lXasrGLLA45rSG24sg2Ot%2B5mQys108Si99uXk5GwfjufJ%2Brqh8SXO%2B44H57NpTmhL1roH0w4tHFoOS%2FQZxrWUJ5GjONdfdn7kzB0&X-Amz-Signature=29b87cce197270b38aa645206c46b0463b425f9790a83d692c0aafc44dd9316f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626UQ4QOF%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIAcgYhZUqISPmN02Hi8FB%2BbqWlrGFEXT6dye9dckS9p5AiEA0gXlIiO8QBex0oVMWYqk6fYuPfaoBulXjstHuM3PtzsqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnjtOr81LOHU7TgwSrcAx%2F2bihjJf3HkZGyqxCydBgdJxoVjVfwGcGGBOYYhmZ58VQHEKoEG3e7sI1jLoDd87DZn65afLrThCxoBOa3j9OpnkFU0HWpLM0icEWgCIrDvro9SOdTi4eFsf1Vg70BqnfgOi58Nj8AY7LyeM2eVSsBGot6Kdz9rqt7mghggf44tnMC0jDyKLhhCi%2FmRM3YCqOVmz4Nfsf5w%2BJIyqMrt8qqvgtg%2BwCd8z2XklacbolODLGJ9RnKA8Kf0TDEg%2BU7PcjYvwUfoEH1ErDsqCmEVisJgwJbw3MIrl6pxgbC7k0lvAXB6%2FrzDuT37eMKSR6A4tOfQfeWGGVdVqLWlX6xYyu7Q6b72NWOgZx2K2MeHzAzhmOVNLuxUnWyEa2xP1jLvRQh4g1sdaqbwg9hNIyfgEK2DAAUy7iudAMNcbTB2LbdtaggnoXo%2Bbjz0xffmfZsuBP5hx2uqiIJxPXDT%2BJ7Y8Zq3EkfgF8Q990qXLEoc2f0nPTaV22whBoNangvrLnXEKa1AqdFL3gLRTPVDdrj7F7Tziu7q48DyuwdxcG36ep4eT%2BcLads6oEJ7kfP3mGQtU2R7cHpNgftKM2vCTzaa2it%2F9%2Bzkk0sMQAIerQiR4yZjlXcok1brelMAPHPMNm6i74GOqUBsYeDst991BtFHN%2BT7eIqGyKKgQWYTDSWkBDFbw7eCcYKfjEsO2B7u%2FNQT8N0Cedc%2BdPd9yOA7X2k5JaVpgcSiF65QyeLF0d1%2B1X2leVzGS36Wh%2F2BxL63AJ1lXasrGLLA45rSG24sg2Ot%2B5mQys108Si99uXk5GwfjufJ%2Brqh8SXO%2B44H57NpTmhL1roH0w4tHFoOS%2FQZxrWUJ5GjONdfdn7kzB0&X-Amz-Signature=0606a2aca3f165905f2cf02e07a7cfe1f57def2a0af8e5e8dc7628bbe0fec5a4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626UQ4QOF%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIAcgYhZUqISPmN02Hi8FB%2BbqWlrGFEXT6dye9dckS9p5AiEA0gXlIiO8QBex0oVMWYqk6fYuPfaoBulXjstHuM3PtzsqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnjtOr81LOHU7TgwSrcAx%2F2bihjJf3HkZGyqxCydBgdJxoVjVfwGcGGBOYYhmZ58VQHEKoEG3e7sI1jLoDd87DZn65afLrThCxoBOa3j9OpnkFU0HWpLM0icEWgCIrDvro9SOdTi4eFsf1Vg70BqnfgOi58Nj8AY7LyeM2eVSsBGot6Kdz9rqt7mghggf44tnMC0jDyKLhhCi%2FmRM3YCqOVmz4Nfsf5w%2BJIyqMrt8qqvgtg%2BwCd8z2XklacbolODLGJ9RnKA8Kf0TDEg%2BU7PcjYvwUfoEH1ErDsqCmEVisJgwJbw3MIrl6pxgbC7k0lvAXB6%2FrzDuT37eMKSR6A4tOfQfeWGGVdVqLWlX6xYyu7Q6b72NWOgZx2K2MeHzAzhmOVNLuxUnWyEa2xP1jLvRQh4g1sdaqbwg9hNIyfgEK2DAAUy7iudAMNcbTB2LbdtaggnoXo%2Bbjz0xffmfZsuBP5hx2uqiIJxPXDT%2BJ7Y8Zq3EkfgF8Q990qXLEoc2f0nPTaV22whBoNangvrLnXEKa1AqdFL3gLRTPVDdrj7F7Tziu7q48DyuwdxcG36ep4eT%2BcLads6oEJ7kfP3mGQtU2R7cHpNgftKM2vCTzaa2it%2F9%2Bzkk0sMQAIerQiR4yZjlXcok1brelMAPHPMNm6i74GOqUBsYeDst991BtFHN%2BT7eIqGyKKgQWYTDSWkBDFbw7eCcYKfjEsO2B7u%2FNQT8N0Cedc%2BdPd9yOA7X2k5JaVpgcSiF65QyeLF0d1%2B1X2leVzGS36Wh%2F2BxL63AJ1lXasrGLLA45rSG24sg2Ot%2B5mQys108Si99uXk5GwfjufJ%2Brqh8SXO%2B44H57NpTmhL1roH0w4tHFoOS%2FQZxrWUJ5GjONdfdn7kzB0&X-Amz-Signature=c4f76669a113df438657da0b7a7978cb07f2ba8fec9a81df8267990726e53ed9&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626UQ4QOF%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIAcgYhZUqISPmN02Hi8FB%2BbqWlrGFEXT6dye9dckS9p5AiEA0gXlIiO8QBex0oVMWYqk6fYuPfaoBulXjstHuM3PtzsqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnjtOr81LOHU7TgwSrcAx%2F2bihjJf3HkZGyqxCydBgdJxoVjVfwGcGGBOYYhmZ58VQHEKoEG3e7sI1jLoDd87DZn65afLrThCxoBOa3j9OpnkFU0HWpLM0icEWgCIrDvro9SOdTi4eFsf1Vg70BqnfgOi58Nj8AY7LyeM2eVSsBGot6Kdz9rqt7mghggf44tnMC0jDyKLhhCi%2FmRM3YCqOVmz4Nfsf5w%2BJIyqMrt8qqvgtg%2BwCd8z2XklacbolODLGJ9RnKA8Kf0TDEg%2BU7PcjYvwUfoEH1ErDsqCmEVisJgwJbw3MIrl6pxgbC7k0lvAXB6%2FrzDuT37eMKSR6A4tOfQfeWGGVdVqLWlX6xYyu7Q6b72NWOgZx2K2MeHzAzhmOVNLuxUnWyEa2xP1jLvRQh4g1sdaqbwg9hNIyfgEK2DAAUy7iudAMNcbTB2LbdtaggnoXo%2Bbjz0xffmfZsuBP5hx2uqiIJxPXDT%2BJ7Y8Zq3EkfgF8Q990qXLEoc2f0nPTaV22whBoNangvrLnXEKa1AqdFL3gLRTPVDdrj7F7Tziu7q48DyuwdxcG36ep4eT%2BcLads6oEJ7kfP3mGQtU2R7cHpNgftKM2vCTzaa2it%2F9%2Bzkk0sMQAIerQiR4yZjlXcok1brelMAPHPMNm6i74GOqUBsYeDst991BtFHN%2BT7eIqGyKKgQWYTDSWkBDFbw7eCcYKfjEsO2B7u%2FNQT8N0Cedc%2BdPd9yOA7X2k5JaVpgcSiF65QyeLF0d1%2B1X2leVzGS36Wh%2F2BxL63AJ1lXasrGLLA45rSG24sg2Ot%2B5mQys108Si99uXk5GwfjufJ%2Brqh8SXO%2B44H57NpTmhL1roH0w4tHFoOS%2FQZxrWUJ5GjONdfdn7kzB0&X-Amz-Signature=fbf737bae1c957deee67c4c00c0fed42ca08f18257a226cc8e4d691e65a396cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626UQ4QOF%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIAcgYhZUqISPmN02Hi8FB%2BbqWlrGFEXT6dye9dckS9p5AiEA0gXlIiO8QBex0oVMWYqk6fYuPfaoBulXjstHuM3PtzsqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnjtOr81LOHU7TgwSrcAx%2F2bihjJf3HkZGyqxCydBgdJxoVjVfwGcGGBOYYhmZ58VQHEKoEG3e7sI1jLoDd87DZn65afLrThCxoBOa3j9OpnkFU0HWpLM0icEWgCIrDvro9SOdTi4eFsf1Vg70BqnfgOi58Nj8AY7LyeM2eVSsBGot6Kdz9rqt7mghggf44tnMC0jDyKLhhCi%2FmRM3YCqOVmz4Nfsf5w%2BJIyqMrt8qqvgtg%2BwCd8z2XklacbolODLGJ9RnKA8Kf0TDEg%2BU7PcjYvwUfoEH1ErDsqCmEVisJgwJbw3MIrl6pxgbC7k0lvAXB6%2FrzDuT37eMKSR6A4tOfQfeWGGVdVqLWlX6xYyu7Q6b72NWOgZx2K2MeHzAzhmOVNLuxUnWyEa2xP1jLvRQh4g1sdaqbwg9hNIyfgEK2DAAUy7iudAMNcbTB2LbdtaggnoXo%2Bbjz0xffmfZsuBP5hx2uqiIJxPXDT%2BJ7Y8Zq3EkfgF8Q990qXLEoc2f0nPTaV22whBoNangvrLnXEKa1AqdFL3gLRTPVDdrj7F7Tziu7q48DyuwdxcG36ep4eT%2BcLads6oEJ7kfP3mGQtU2R7cHpNgftKM2vCTzaa2it%2F9%2Bzkk0sMQAIerQiR4yZjlXcok1brelMAPHPMNm6i74GOqUBsYeDst991BtFHN%2BT7eIqGyKKgQWYTDSWkBDFbw7eCcYKfjEsO2B7u%2FNQT8N0Cedc%2BdPd9yOA7X2k5JaVpgcSiF65QyeLF0d1%2B1X2leVzGS36Wh%2F2BxL63AJ1lXasrGLLA45rSG24sg2Ot%2B5mQys108Si99uXk5GwfjufJ%2Brqh8SXO%2B44H57NpTmhL1roH0w4tHFoOS%2FQZxrWUJ5GjONdfdn7kzB0&X-Amz-Signature=600d8432b19156b4ecabb5c1132d531db2f10ae6be4e18f0981c8921f523e01c&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
