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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MY4S3G2%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcNvcHu9K4PmSrP0jQssjijUBDHXM1vPpy4FGX9l1SFwIhAKDjoAvpMoYRLOp1poYBE6Nz6aRMKa5jda7ykgdqkEbgKv8DCCYQABoMNjM3NDIzMTgzODA1Igye%2FK951nHnmmM%2FnOgq3AOgiRpMNWzzoIsc93ZxEq18vJYVPX2VDWH6hFDsMzPRyMHUtikh4flYI7x8Bz9BM3z6Thow%2F8g9EjrMenHJPY1yrMhRLgN9ajLfdhMy4EpxDiDQS0MXlwC2JDSYQGK1%2Fy97yj%2Ftf%2Bhkf%2FwLjTcxAGZ4ihSCcqN2iMlrktHu0QkmGOFhARMJuy0nwFMWQw7%2BY6Kp8cCh6yTVBcpCHzxHuRN2%2Bm1tYP03hGOOlDCqCqbqp%2BEfVShbe0nw4Vr1UwKiyyTtZLQtKBq8d72InmuvThePnL85mAKJLEE2o7qDbCch5zN670ApzCxTGJYBiTL0ZwpCnfUInNumhtiepOODC4uYhelMrzTGAL%2BK1tHUsCDo0zop21PrNrix6jGot0tQoqYR4bBRCkcQfG2VGGrhxJQcK2%2BZx1gmabaHZpVomNVYUWn7iJo7iEEda%2BF9UA4fmwJPvd3ZsXtYIVnN4YiHW0NjYmCM4icvRgGmbYdYHdtFTQtptNm2LKFsKaNzTrAkPm5ZZ4C07dIY9LgH2Fs4HOJ97FC6h63JFiAz9TXRpTkI%2FRkEOMoWBKcOfWDD%2FbGV9e%2FkdIRTmDrsFQKEluLwf%2FX1EWH%2BNCu5iaj%2BCSivQaqIUPiwCfP7svm4y8fcFzCG2KS%2BBjqkAbA075JoWq0E4zK9sqDgnBA0SGHavbsD2qOOTqjlAqF9TanorlRdg7t7eNXkoBbP2noCB1rRs3o43PMjBaOvVBnONryDdnPK4qbnWyRjW9N82rHQWHO2pmZpCb7gB9yFJpymLK%2FhIozUkk4vilTKGtEYsPX%2FckPNdqk9ijJo%2Fiwza3pJEl54sOwXhnNfN8ECNUi9DiPAiiCUgjKZah584894Wtik&X-Amz-Signature=0344709d4e943212cc76b9328736d833b0ae31af7377c0b709bcb463b38755a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MY4S3G2%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcNvcHu9K4PmSrP0jQssjijUBDHXM1vPpy4FGX9l1SFwIhAKDjoAvpMoYRLOp1poYBE6Nz6aRMKa5jda7ykgdqkEbgKv8DCCYQABoMNjM3NDIzMTgzODA1Igye%2FK951nHnmmM%2FnOgq3AOgiRpMNWzzoIsc93ZxEq18vJYVPX2VDWH6hFDsMzPRyMHUtikh4flYI7x8Bz9BM3z6Thow%2F8g9EjrMenHJPY1yrMhRLgN9ajLfdhMy4EpxDiDQS0MXlwC2JDSYQGK1%2Fy97yj%2Ftf%2Bhkf%2FwLjTcxAGZ4ihSCcqN2iMlrktHu0QkmGOFhARMJuy0nwFMWQw7%2BY6Kp8cCh6yTVBcpCHzxHuRN2%2Bm1tYP03hGOOlDCqCqbqp%2BEfVShbe0nw4Vr1UwKiyyTtZLQtKBq8d72InmuvThePnL85mAKJLEE2o7qDbCch5zN670ApzCxTGJYBiTL0ZwpCnfUInNumhtiepOODC4uYhelMrzTGAL%2BK1tHUsCDo0zop21PrNrix6jGot0tQoqYR4bBRCkcQfG2VGGrhxJQcK2%2BZx1gmabaHZpVomNVYUWn7iJo7iEEda%2BF9UA4fmwJPvd3ZsXtYIVnN4YiHW0NjYmCM4icvRgGmbYdYHdtFTQtptNm2LKFsKaNzTrAkPm5ZZ4C07dIY9LgH2Fs4HOJ97FC6h63JFiAz9TXRpTkI%2FRkEOMoWBKcOfWDD%2FbGV9e%2FkdIRTmDrsFQKEluLwf%2FX1EWH%2BNCu5iaj%2BCSivQaqIUPiwCfP7svm4y8fcFzCG2KS%2BBjqkAbA075JoWq0E4zK9sqDgnBA0SGHavbsD2qOOTqjlAqF9TanorlRdg7t7eNXkoBbP2noCB1rRs3o43PMjBaOvVBnONryDdnPK4qbnWyRjW9N82rHQWHO2pmZpCb7gB9yFJpymLK%2FhIozUkk4vilTKGtEYsPX%2FckPNdqk9ijJo%2Fiwza3pJEl54sOwXhnNfN8ECNUi9DiPAiiCUgjKZah584894Wtik&X-Amz-Signature=5586da697d403b94c8f3b0e1855c993ef519492d769712d885653624a157cac1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MY4S3G2%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcNvcHu9K4PmSrP0jQssjijUBDHXM1vPpy4FGX9l1SFwIhAKDjoAvpMoYRLOp1poYBE6Nz6aRMKa5jda7ykgdqkEbgKv8DCCYQABoMNjM3NDIzMTgzODA1Igye%2FK951nHnmmM%2FnOgq3AOgiRpMNWzzoIsc93ZxEq18vJYVPX2VDWH6hFDsMzPRyMHUtikh4flYI7x8Bz9BM3z6Thow%2F8g9EjrMenHJPY1yrMhRLgN9ajLfdhMy4EpxDiDQS0MXlwC2JDSYQGK1%2Fy97yj%2Ftf%2Bhkf%2FwLjTcxAGZ4ihSCcqN2iMlrktHu0QkmGOFhARMJuy0nwFMWQw7%2BY6Kp8cCh6yTVBcpCHzxHuRN2%2Bm1tYP03hGOOlDCqCqbqp%2BEfVShbe0nw4Vr1UwKiyyTtZLQtKBq8d72InmuvThePnL85mAKJLEE2o7qDbCch5zN670ApzCxTGJYBiTL0ZwpCnfUInNumhtiepOODC4uYhelMrzTGAL%2BK1tHUsCDo0zop21PrNrix6jGot0tQoqYR4bBRCkcQfG2VGGrhxJQcK2%2BZx1gmabaHZpVomNVYUWn7iJo7iEEda%2BF9UA4fmwJPvd3ZsXtYIVnN4YiHW0NjYmCM4icvRgGmbYdYHdtFTQtptNm2LKFsKaNzTrAkPm5ZZ4C07dIY9LgH2Fs4HOJ97FC6h63JFiAz9TXRpTkI%2FRkEOMoWBKcOfWDD%2FbGV9e%2FkdIRTmDrsFQKEluLwf%2FX1EWH%2BNCu5iaj%2BCSivQaqIUPiwCfP7svm4y8fcFzCG2KS%2BBjqkAbA075JoWq0E4zK9sqDgnBA0SGHavbsD2qOOTqjlAqF9TanorlRdg7t7eNXkoBbP2noCB1rRs3o43PMjBaOvVBnONryDdnPK4qbnWyRjW9N82rHQWHO2pmZpCb7gB9yFJpymLK%2FhIozUkk4vilTKGtEYsPX%2FckPNdqk9ijJo%2Fiwza3pJEl54sOwXhnNfN8ECNUi9DiPAiiCUgjKZah584894Wtik&X-Amz-Signature=e2ab59ed78f1ed9cac3240bdc5f08ba6d31d10c0909f5c42661df14bfd46f026&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MY4S3G2%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcNvcHu9K4PmSrP0jQssjijUBDHXM1vPpy4FGX9l1SFwIhAKDjoAvpMoYRLOp1poYBE6Nz6aRMKa5jda7ykgdqkEbgKv8DCCYQABoMNjM3NDIzMTgzODA1Igye%2FK951nHnmmM%2FnOgq3AOgiRpMNWzzoIsc93ZxEq18vJYVPX2VDWH6hFDsMzPRyMHUtikh4flYI7x8Bz9BM3z6Thow%2F8g9EjrMenHJPY1yrMhRLgN9ajLfdhMy4EpxDiDQS0MXlwC2JDSYQGK1%2Fy97yj%2Ftf%2Bhkf%2FwLjTcxAGZ4ihSCcqN2iMlrktHu0QkmGOFhARMJuy0nwFMWQw7%2BY6Kp8cCh6yTVBcpCHzxHuRN2%2Bm1tYP03hGOOlDCqCqbqp%2BEfVShbe0nw4Vr1UwKiyyTtZLQtKBq8d72InmuvThePnL85mAKJLEE2o7qDbCch5zN670ApzCxTGJYBiTL0ZwpCnfUInNumhtiepOODC4uYhelMrzTGAL%2BK1tHUsCDo0zop21PrNrix6jGot0tQoqYR4bBRCkcQfG2VGGrhxJQcK2%2BZx1gmabaHZpVomNVYUWn7iJo7iEEda%2BF9UA4fmwJPvd3ZsXtYIVnN4YiHW0NjYmCM4icvRgGmbYdYHdtFTQtptNm2LKFsKaNzTrAkPm5ZZ4C07dIY9LgH2Fs4HOJ97FC6h63JFiAz9TXRpTkI%2FRkEOMoWBKcOfWDD%2FbGV9e%2FkdIRTmDrsFQKEluLwf%2FX1EWH%2BNCu5iaj%2BCSivQaqIUPiwCfP7svm4y8fcFzCG2KS%2BBjqkAbA075JoWq0E4zK9sqDgnBA0SGHavbsD2qOOTqjlAqF9TanorlRdg7t7eNXkoBbP2noCB1rRs3o43PMjBaOvVBnONryDdnPK4qbnWyRjW9N82rHQWHO2pmZpCb7gB9yFJpymLK%2FhIozUkk4vilTKGtEYsPX%2FckPNdqk9ijJo%2Fiwza3pJEl54sOwXhnNfN8ECNUi9DiPAiiCUgjKZah584894Wtik&X-Amz-Signature=4b450811edd45af1e7421ba98c0eb4595583d63c07d1cc726624ea83fb09f51c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MY4S3G2%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcNvcHu9K4PmSrP0jQssjijUBDHXM1vPpy4FGX9l1SFwIhAKDjoAvpMoYRLOp1poYBE6Nz6aRMKa5jda7ykgdqkEbgKv8DCCYQABoMNjM3NDIzMTgzODA1Igye%2FK951nHnmmM%2FnOgq3AOgiRpMNWzzoIsc93ZxEq18vJYVPX2VDWH6hFDsMzPRyMHUtikh4flYI7x8Bz9BM3z6Thow%2F8g9EjrMenHJPY1yrMhRLgN9ajLfdhMy4EpxDiDQS0MXlwC2JDSYQGK1%2Fy97yj%2Ftf%2Bhkf%2FwLjTcxAGZ4ihSCcqN2iMlrktHu0QkmGOFhARMJuy0nwFMWQw7%2BY6Kp8cCh6yTVBcpCHzxHuRN2%2Bm1tYP03hGOOlDCqCqbqp%2BEfVShbe0nw4Vr1UwKiyyTtZLQtKBq8d72InmuvThePnL85mAKJLEE2o7qDbCch5zN670ApzCxTGJYBiTL0ZwpCnfUInNumhtiepOODC4uYhelMrzTGAL%2BK1tHUsCDo0zop21PrNrix6jGot0tQoqYR4bBRCkcQfG2VGGrhxJQcK2%2BZx1gmabaHZpVomNVYUWn7iJo7iEEda%2BF9UA4fmwJPvd3ZsXtYIVnN4YiHW0NjYmCM4icvRgGmbYdYHdtFTQtptNm2LKFsKaNzTrAkPm5ZZ4C07dIY9LgH2Fs4HOJ97FC6h63JFiAz9TXRpTkI%2FRkEOMoWBKcOfWDD%2FbGV9e%2FkdIRTmDrsFQKEluLwf%2FX1EWH%2BNCu5iaj%2BCSivQaqIUPiwCfP7svm4y8fcFzCG2KS%2BBjqkAbA075JoWq0E4zK9sqDgnBA0SGHavbsD2qOOTqjlAqF9TanorlRdg7t7eNXkoBbP2noCB1rRs3o43PMjBaOvVBnONryDdnPK4qbnWyRjW9N82rHQWHO2pmZpCb7gB9yFJpymLK%2FhIozUkk4vilTKGtEYsPX%2FckPNdqk9ijJo%2Fiwza3pJEl54sOwXhnNfN8ECNUi9DiPAiiCUgjKZah584894Wtik&X-Amz-Signature=10074d0d901e2d5e6d42aa04e1c20718b5a14a5bf106bc8cb237f39636ece514&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
