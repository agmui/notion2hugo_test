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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGXEMZBF%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGikBeTtIO0ClBQslxRyBgA7Xw%2BmxbmcC0stCb6AMXCqAiBn%2BoeAg%2FWtLHQyK%2Fo1XWR1ob2lNZ%2FSeacdtG7lR0pjiCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIOgKIAskyfAHwwKdKtwD%2BcSP%2BZh8BrbfEEiBrIIXyHwoXnkhFfHyBAP%2FOjzSmSTHmMPsDuLV6DkNL0gduIg6JFPCm%2FvvnhH0ka0Yt2HV6z8fTUeurmIaEctmWLGX7zPbQKj4WqG03l5SK5wjhQ6wrTPrG1H42Y1jDA8sEhOSSSj10X6A%2B2tXlJR%2FqpeQ4zDt1qLLipKYlYaWfRgKHrBiYy9O0XVtvxBIINPnbSlihSrlnBD3TGqbf1rdF3814VXRliuYjYB%2BZkFLy8DLeXfWCSFz97hhoeQF84dGHbhlMysiZBsFdsZYumvm9%2BGUG4iLWPLopIdYm8UcT6PwoDD9qoZYHXSNUAJEdPCCIM6%2F%2BaNzfDeI9SWfs8Vcf%2FOfTTxCFzlp%2B4erqmRFO2kBIL6ogV2MKttDQvrtSvmyaYu9Qyj%2BrzmiWuvPL5Cb%2FkehPdWgQLNWFjZ9EjukvhuT3vYOdvzmqt5JzIhTAX3CFdcyhBghF0accMvR%2B3HbKbEbMCbFpACgpBh8q5Sg8ec9loaNOCeSAGv6KNE%2BPrXypDbCMLoBQf%2FWRlrNBd1T7%2FlT3O%2Fvs31MRm4nXC5opZt8Y0GBHTnyQ3XmzMxh9ZCfDY4MRXxhEEI3nsVXtmYkZn77mAdKU5BleZYm9KK2bfEwwPSnyQY6pgHLYMvNWBUFudviFxb2UM4u8NoyqU%2BhV1HFeL%2FssvN4ysI513azF9%2FlDQP3HDWG%2FbeqkjbQeoGAcgvAcd04OTsg13N09wmKGvxvOU3mRj7E6ytVZb3S2XifPMvvPB9pxvFvg%2FuJsG2ARRVX51zcwmDrzVdGVbaLYYYA1%2BG9TYqn%2Fc7I9Ud1TcgYcm1OVSWNysaBlvdOzAWI805p53hyjJw0Y%2Fj0Kt77&X-Amz-Signature=33ff32ebc6d9f7c503301afda2fd47a587420a182fb9a2fc5c7794da69f6fcbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGXEMZBF%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGikBeTtIO0ClBQslxRyBgA7Xw%2BmxbmcC0stCb6AMXCqAiBn%2BoeAg%2FWtLHQyK%2Fo1XWR1ob2lNZ%2FSeacdtG7lR0pjiCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIOgKIAskyfAHwwKdKtwD%2BcSP%2BZh8BrbfEEiBrIIXyHwoXnkhFfHyBAP%2FOjzSmSTHmMPsDuLV6DkNL0gduIg6JFPCm%2FvvnhH0ka0Yt2HV6z8fTUeurmIaEctmWLGX7zPbQKj4WqG03l5SK5wjhQ6wrTPrG1H42Y1jDA8sEhOSSSj10X6A%2B2tXlJR%2FqpeQ4zDt1qLLipKYlYaWfRgKHrBiYy9O0XVtvxBIINPnbSlihSrlnBD3TGqbf1rdF3814VXRliuYjYB%2BZkFLy8DLeXfWCSFz97hhoeQF84dGHbhlMysiZBsFdsZYumvm9%2BGUG4iLWPLopIdYm8UcT6PwoDD9qoZYHXSNUAJEdPCCIM6%2F%2BaNzfDeI9SWfs8Vcf%2FOfTTxCFzlp%2B4erqmRFO2kBIL6ogV2MKttDQvrtSvmyaYu9Qyj%2BrzmiWuvPL5Cb%2FkehPdWgQLNWFjZ9EjukvhuT3vYOdvzmqt5JzIhTAX3CFdcyhBghF0accMvR%2B3HbKbEbMCbFpACgpBh8q5Sg8ec9loaNOCeSAGv6KNE%2BPrXypDbCMLoBQf%2FWRlrNBd1T7%2FlT3O%2Fvs31MRm4nXC5opZt8Y0GBHTnyQ3XmzMxh9ZCfDY4MRXxhEEI3nsVXtmYkZn77mAdKU5BleZYm9KK2bfEwwPSnyQY6pgHLYMvNWBUFudviFxb2UM4u8NoyqU%2BhV1HFeL%2FssvN4ysI513azF9%2FlDQP3HDWG%2FbeqkjbQeoGAcgvAcd04OTsg13N09wmKGvxvOU3mRj7E6ytVZb3S2XifPMvvPB9pxvFvg%2FuJsG2ARRVX51zcwmDrzVdGVbaLYYYA1%2BG9TYqn%2Fc7I9Ud1TcgYcm1OVSWNysaBlvdOzAWI805p53hyjJw0Y%2Fj0Kt77&X-Amz-Signature=bf916bf6e415a74b0106d9e7b0d9f17cf08e32d59ceadfe7828029c9b3ab2ba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGXEMZBF%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGikBeTtIO0ClBQslxRyBgA7Xw%2BmxbmcC0stCb6AMXCqAiBn%2BoeAg%2FWtLHQyK%2Fo1XWR1ob2lNZ%2FSeacdtG7lR0pjiCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIOgKIAskyfAHwwKdKtwD%2BcSP%2BZh8BrbfEEiBrIIXyHwoXnkhFfHyBAP%2FOjzSmSTHmMPsDuLV6DkNL0gduIg6JFPCm%2FvvnhH0ka0Yt2HV6z8fTUeurmIaEctmWLGX7zPbQKj4WqG03l5SK5wjhQ6wrTPrG1H42Y1jDA8sEhOSSSj10X6A%2B2tXlJR%2FqpeQ4zDt1qLLipKYlYaWfRgKHrBiYy9O0XVtvxBIINPnbSlihSrlnBD3TGqbf1rdF3814VXRliuYjYB%2BZkFLy8DLeXfWCSFz97hhoeQF84dGHbhlMysiZBsFdsZYumvm9%2BGUG4iLWPLopIdYm8UcT6PwoDD9qoZYHXSNUAJEdPCCIM6%2F%2BaNzfDeI9SWfs8Vcf%2FOfTTxCFzlp%2B4erqmRFO2kBIL6ogV2MKttDQvrtSvmyaYu9Qyj%2BrzmiWuvPL5Cb%2FkehPdWgQLNWFjZ9EjukvhuT3vYOdvzmqt5JzIhTAX3CFdcyhBghF0accMvR%2B3HbKbEbMCbFpACgpBh8q5Sg8ec9loaNOCeSAGv6KNE%2BPrXypDbCMLoBQf%2FWRlrNBd1T7%2FlT3O%2Fvs31MRm4nXC5opZt8Y0GBHTnyQ3XmzMxh9ZCfDY4MRXxhEEI3nsVXtmYkZn77mAdKU5BleZYm9KK2bfEwwPSnyQY6pgHLYMvNWBUFudviFxb2UM4u8NoyqU%2BhV1HFeL%2FssvN4ysI513azF9%2FlDQP3HDWG%2FbeqkjbQeoGAcgvAcd04OTsg13N09wmKGvxvOU3mRj7E6ytVZb3S2XifPMvvPB9pxvFvg%2FuJsG2ARRVX51zcwmDrzVdGVbaLYYYA1%2BG9TYqn%2Fc7I9Ud1TcgYcm1OVSWNysaBlvdOzAWI805p53hyjJw0Y%2Fj0Kt77&X-Amz-Signature=ef6a52e634fa1e1e3a66da6c861d253ed5af26e17c6bdd9a9ae284e3bf4261c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGXEMZBF%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGikBeTtIO0ClBQslxRyBgA7Xw%2BmxbmcC0stCb6AMXCqAiBn%2BoeAg%2FWtLHQyK%2Fo1XWR1ob2lNZ%2FSeacdtG7lR0pjiCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIOgKIAskyfAHwwKdKtwD%2BcSP%2BZh8BrbfEEiBrIIXyHwoXnkhFfHyBAP%2FOjzSmSTHmMPsDuLV6DkNL0gduIg6JFPCm%2FvvnhH0ka0Yt2HV6z8fTUeurmIaEctmWLGX7zPbQKj4WqG03l5SK5wjhQ6wrTPrG1H42Y1jDA8sEhOSSSj10X6A%2B2tXlJR%2FqpeQ4zDt1qLLipKYlYaWfRgKHrBiYy9O0XVtvxBIINPnbSlihSrlnBD3TGqbf1rdF3814VXRliuYjYB%2BZkFLy8DLeXfWCSFz97hhoeQF84dGHbhlMysiZBsFdsZYumvm9%2BGUG4iLWPLopIdYm8UcT6PwoDD9qoZYHXSNUAJEdPCCIM6%2F%2BaNzfDeI9SWfs8Vcf%2FOfTTxCFzlp%2B4erqmRFO2kBIL6ogV2MKttDQvrtSvmyaYu9Qyj%2BrzmiWuvPL5Cb%2FkehPdWgQLNWFjZ9EjukvhuT3vYOdvzmqt5JzIhTAX3CFdcyhBghF0accMvR%2B3HbKbEbMCbFpACgpBh8q5Sg8ec9loaNOCeSAGv6KNE%2BPrXypDbCMLoBQf%2FWRlrNBd1T7%2FlT3O%2Fvs31MRm4nXC5opZt8Y0GBHTnyQ3XmzMxh9ZCfDY4MRXxhEEI3nsVXtmYkZn77mAdKU5BleZYm9KK2bfEwwPSnyQY6pgHLYMvNWBUFudviFxb2UM4u8NoyqU%2BhV1HFeL%2FssvN4ysI513azF9%2FlDQP3HDWG%2FbeqkjbQeoGAcgvAcd04OTsg13N09wmKGvxvOU3mRj7E6ytVZb3S2XifPMvvPB9pxvFvg%2FuJsG2ARRVX51zcwmDrzVdGVbaLYYYA1%2BG9TYqn%2Fc7I9Ud1TcgYcm1OVSWNysaBlvdOzAWI805p53hyjJw0Y%2Fj0Kt77&X-Amz-Signature=152f8fb4ffd023e28b05e1d5f5614993f7b6cd764159d7c953d73972b32fea58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGXEMZBF%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGikBeTtIO0ClBQslxRyBgA7Xw%2BmxbmcC0stCb6AMXCqAiBn%2BoeAg%2FWtLHQyK%2Fo1XWR1ob2lNZ%2FSeacdtG7lR0pjiCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIOgKIAskyfAHwwKdKtwD%2BcSP%2BZh8BrbfEEiBrIIXyHwoXnkhFfHyBAP%2FOjzSmSTHmMPsDuLV6DkNL0gduIg6JFPCm%2FvvnhH0ka0Yt2HV6z8fTUeurmIaEctmWLGX7zPbQKj4WqG03l5SK5wjhQ6wrTPrG1H42Y1jDA8sEhOSSSj10X6A%2B2tXlJR%2FqpeQ4zDt1qLLipKYlYaWfRgKHrBiYy9O0XVtvxBIINPnbSlihSrlnBD3TGqbf1rdF3814VXRliuYjYB%2BZkFLy8DLeXfWCSFz97hhoeQF84dGHbhlMysiZBsFdsZYumvm9%2BGUG4iLWPLopIdYm8UcT6PwoDD9qoZYHXSNUAJEdPCCIM6%2F%2BaNzfDeI9SWfs8Vcf%2FOfTTxCFzlp%2B4erqmRFO2kBIL6ogV2MKttDQvrtSvmyaYu9Qyj%2BrzmiWuvPL5Cb%2FkehPdWgQLNWFjZ9EjukvhuT3vYOdvzmqt5JzIhTAX3CFdcyhBghF0accMvR%2B3HbKbEbMCbFpACgpBh8q5Sg8ec9loaNOCeSAGv6KNE%2BPrXypDbCMLoBQf%2FWRlrNBd1T7%2FlT3O%2Fvs31MRm4nXC5opZt8Y0GBHTnyQ3XmzMxh9ZCfDY4MRXxhEEI3nsVXtmYkZn77mAdKU5BleZYm9KK2bfEwwPSnyQY6pgHLYMvNWBUFudviFxb2UM4u8NoyqU%2BhV1HFeL%2FssvN4ysI513azF9%2FlDQP3HDWG%2FbeqkjbQeoGAcgvAcd04OTsg13N09wmKGvxvOU3mRj7E6ytVZb3S2XifPMvvPB9pxvFvg%2FuJsG2ARRVX51zcwmDrzVdGVbaLYYYA1%2BG9TYqn%2Fc7I9Ud1TcgYcm1OVSWNysaBlvdOzAWI805p53hyjJw0Y%2Fj0Kt77&X-Amz-Signature=d8fae37b0e0fc0f430eb32bba2b05877bc49b7be2c824e8857d60cf8b6754b35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
