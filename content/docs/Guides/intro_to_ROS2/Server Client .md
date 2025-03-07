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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY4U6C37%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC3jcCp0kqhwE6LAbud1K08JCapFKiF4UPNTSbMse6twQIgKp%2Btw%2Fb1YtgpIpZGivD3F8k1hDbLWmHQY1g%2B8vSWA8Eq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDFq462bHlfiDI%2Flc3SrcA%2FqdEAGJlH07BqUtVkfMvfWEHeRXsQ5Dx3ZvpnB31b3bKxER3qcoE3XhP0m1KaKYRHmMiTyWOUMHRVNoBI7hQYND3XaGgCjt2FPvsuzk%2BH1XK7QlR6L21TYJD3HO4%2F%2FAP%2Fs0PsmTmzp3qKeKay2uSEef0U2LirF%2BUX7bVnv1Vqr2EN8kt7ts698hi7q%2BKnEPVlBDgEP%2FA7%2BIAEocPBKsKGI5%2FFKZ130eQu3NFgSwy7zvJAeX7haZ5VMuTqqEvPGsUVZzQrG8CFWyX1O7ycFPkN2sQhSnpTnAj%2Fpr50BJ%2BLRa9PaIOF04lHdDJJC2lFYGoEo4ButRHY7yqTicWj370pdQKRAsxoLdakLfv6rt%2BgWuG4YMB7MNE0YmSS%2FDhile1h5FY2SsaDeQei5C9i6i95q%2F1ARaz3VJO8n6j31HdeZSmqvngZpPfepowexOqEdrXCNOJKuWAdP9c42EJp3djVrnIlCa79ojxqTsLJA0YwmjQZny6Yk5vU8ywQeDOuPLBTxbFpevsTgFDwbrsWWC42KEOg49c1gpxBA0Ri2xK1iSOmuUf1viUrOw%2Bjob8kTSq414NRhZOEOR8tYBfgWFD3MiGAP99rRKRmtpZX4TF%2FdxstoTrjWWrKRWu6T%2FMKO%2Frb4GOqUBktPPOiFzZkFJnugGxmF6rTeL%2FgLqpa9MAXvPlYq6vhLnoreN5ExPj%2BuiEVLPtNfSSxQdVfn%2BqUvlAj%2BE%2ByGEy0F5vqIDVbL9JB1sz3VU9yV3rZrUDrZypQwcJEMvlpr6pyu7vSG1sKxLo32Mb%2Bojz0szITe6kcvNK7n0GqsLh1BWHeR5FAVPjEkEv4QBw3ovDsK%2BuaFod6fP31J8k05m2%2BsE6nwl&X-Amz-Signature=a6270c81adae6f709e0e7b59440c5bd8bde586742cfa1b749dc40d571da9608e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY4U6C37%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC3jcCp0kqhwE6LAbud1K08JCapFKiF4UPNTSbMse6twQIgKp%2Btw%2Fb1YtgpIpZGivD3F8k1hDbLWmHQY1g%2B8vSWA8Eq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDFq462bHlfiDI%2Flc3SrcA%2FqdEAGJlH07BqUtVkfMvfWEHeRXsQ5Dx3ZvpnB31b3bKxER3qcoE3XhP0m1KaKYRHmMiTyWOUMHRVNoBI7hQYND3XaGgCjt2FPvsuzk%2BH1XK7QlR6L21TYJD3HO4%2F%2FAP%2Fs0PsmTmzp3qKeKay2uSEef0U2LirF%2BUX7bVnv1Vqr2EN8kt7ts698hi7q%2BKnEPVlBDgEP%2FA7%2BIAEocPBKsKGI5%2FFKZ130eQu3NFgSwy7zvJAeX7haZ5VMuTqqEvPGsUVZzQrG8CFWyX1O7ycFPkN2sQhSnpTnAj%2Fpr50BJ%2BLRa9PaIOF04lHdDJJC2lFYGoEo4ButRHY7yqTicWj370pdQKRAsxoLdakLfv6rt%2BgWuG4YMB7MNE0YmSS%2FDhile1h5FY2SsaDeQei5C9i6i95q%2F1ARaz3VJO8n6j31HdeZSmqvngZpPfepowexOqEdrXCNOJKuWAdP9c42EJp3djVrnIlCa79ojxqTsLJA0YwmjQZny6Yk5vU8ywQeDOuPLBTxbFpevsTgFDwbrsWWC42KEOg49c1gpxBA0Ri2xK1iSOmuUf1viUrOw%2Bjob8kTSq414NRhZOEOR8tYBfgWFD3MiGAP99rRKRmtpZX4TF%2FdxstoTrjWWrKRWu6T%2FMKO%2Frb4GOqUBktPPOiFzZkFJnugGxmF6rTeL%2FgLqpa9MAXvPlYq6vhLnoreN5ExPj%2BuiEVLPtNfSSxQdVfn%2BqUvlAj%2BE%2ByGEy0F5vqIDVbL9JB1sz3VU9yV3rZrUDrZypQwcJEMvlpr6pyu7vSG1sKxLo32Mb%2Bojz0szITe6kcvNK7n0GqsLh1BWHeR5FAVPjEkEv4QBw3ovDsK%2BuaFod6fP31J8k05m2%2BsE6nwl&X-Amz-Signature=af452a5f3211dd455e303f1b3abbd2b1a3758f26f639aceef0d5836d0c346443&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY4U6C37%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC3jcCp0kqhwE6LAbud1K08JCapFKiF4UPNTSbMse6twQIgKp%2Btw%2Fb1YtgpIpZGivD3F8k1hDbLWmHQY1g%2B8vSWA8Eq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDFq462bHlfiDI%2Flc3SrcA%2FqdEAGJlH07BqUtVkfMvfWEHeRXsQ5Dx3ZvpnB31b3bKxER3qcoE3XhP0m1KaKYRHmMiTyWOUMHRVNoBI7hQYND3XaGgCjt2FPvsuzk%2BH1XK7QlR6L21TYJD3HO4%2F%2FAP%2Fs0PsmTmzp3qKeKay2uSEef0U2LirF%2BUX7bVnv1Vqr2EN8kt7ts698hi7q%2BKnEPVlBDgEP%2FA7%2BIAEocPBKsKGI5%2FFKZ130eQu3NFgSwy7zvJAeX7haZ5VMuTqqEvPGsUVZzQrG8CFWyX1O7ycFPkN2sQhSnpTnAj%2Fpr50BJ%2BLRa9PaIOF04lHdDJJC2lFYGoEo4ButRHY7yqTicWj370pdQKRAsxoLdakLfv6rt%2BgWuG4YMB7MNE0YmSS%2FDhile1h5FY2SsaDeQei5C9i6i95q%2F1ARaz3VJO8n6j31HdeZSmqvngZpPfepowexOqEdrXCNOJKuWAdP9c42EJp3djVrnIlCa79ojxqTsLJA0YwmjQZny6Yk5vU8ywQeDOuPLBTxbFpevsTgFDwbrsWWC42KEOg49c1gpxBA0Ri2xK1iSOmuUf1viUrOw%2Bjob8kTSq414NRhZOEOR8tYBfgWFD3MiGAP99rRKRmtpZX4TF%2FdxstoTrjWWrKRWu6T%2FMKO%2Frb4GOqUBktPPOiFzZkFJnugGxmF6rTeL%2FgLqpa9MAXvPlYq6vhLnoreN5ExPj%2BuiEVLPtNfSSxQdVfn%2BqUvlAj%2BE%2ByGEy0F5vqIDVbL9JB1sz3VU9yV3rZrUDrZypQwcJEMvlpr6pyu7vSG1sKxLo32Mb%2Bojz0szITe6kcvNK7n0GqsLh1BWHeR5FAVPjEkEv4QBw3ovDsK%2BuaFod6fP31J8k05m2%2BsE6nwl&X-Amz-Signature=e7c4447689fe720e2e06b5c5eaff0662ada7e8338efb12bc16eac1da5ede708c&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY4U6C37%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC3jcCp0kqhwE6LAbud1K08JCapFKiF4UPNTSbMse6twQIgKp%2Btw%2Fb1YtgpIpZGivD3F8k1hDbLWmHQY1g%2B8vSWA8Eq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDFq462bHlfiDI%2Flc3SrcA%2FqdEAGJlH07BqUtVkfMvfWEHeRXsQ5Dx3ZvpnB31b3bKxER3qcoE3XhP0m1KaKYRHmMiTyWOUMHRVNoBI7hQYND3XaGgCjt2FPvsuzk%2BH1XK7QlR6L21TYJD3HO4%2F%2FAP%2Fs0PsmTmzp3qKeKay2uSEef0U2LirF%2BUX7bVnv1Vqr2EN8kt7ts698hi7q%2BKnEPVlBDgEP%2FA7%2BIAEocPBKsKGI5%2FFKZ130eQu3NFgSwy7zvJAeX7haZ5VMuTqqEvPGsUVZzQrG8CFWyX1O7ycFPkN2sQhSnpTnAj%2Fpr50BJ%2BLRa9PaIOF04lHdDJJC2lFYGoEo4ButRHY7yqTicWj370pdQKRAsxoLdakLfv6rt%2BgWuG4YMB7MNE0YmSS%2FDhile1h5FY2SsaDeQei5C9i6i95q%2F1ARaz3VJO8n6j31HdeZSmqvngZpPfepowexOqEdrXCNOJKuWAdP9c42EJp3djVrnIlCa79ojxqTsLJA0YwmjQZny6Yk5vU8ywQeDOuPLBTxbFpevsTgFDwbrsWWC42KEOg49c1gpxBA0Ri2xK1iSOmuUf1viUrOw%2Bjob8kTSq414NRhZOEOR8tYBfgWFD3MiGAP99rRKRmtpZX4TF%2FdxstoTrjWWrKRWu6T%2FMKO%2Frb4GOqUBktPPOiFzZkFJnugGxmF6rTeL%2FgLqpa9MAXvPlYq6vhLnoreN5ExPj%2BuiEVLPtNfSSxQdVfn%2BqUvlAj%2BE%2ByGEy0F5vqIDVbL9JB1sz3VU9yV3rZrUDrZypQwcJEMvlpr6pyu7vSG1sKxLo32Mb%2Bojz0szITe6kcvNK7n0GqsLh1BWHeR5FAVPjEkEv4QBw3ovDsK%2BuaFod6fP31J8k05m2%2BsE6nwl&X-Amz-Signature=256faca35833ff52e8fd954b0ed886e1c22697bc859deb1e2c991f1e4d76bb19&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY4U6C37%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC3jcCp0kqhwE6LAbud1K08JCapFKiF4UPNTSbMse6twQIgKp%2Btw%2Fb1YtgpIpZGivD3F8k1hDbLWmHQY1g%2B8vSWA8Eq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDFq462bHlfiDI%2Flc3SrcA%2FqdEAGJlH07BqUtVkfMvfWEHeRXsQ5Dx3ZvpnB31b3bKxER3qcoE3XhP0m1KaKYRHmMiTyWOUMHRVNoBI7hQYND3XaGgCjt2FPvsuzk%2BH1XK7QlR6L21TYJD3HO4%2F%2FAP%2Fs0PsmTmzp3qKeKay2uSEef0U2LirF%2BUX7bVnv1Vqr2EN8kt7ts698hi7q%2BKnEPVlBDgEP%2FA7%2BIAEocPBKsKGI5%2FFKZ130eQu3NFgSwy7zvJAeX7haZ5VMuTqqEvPGsUVZzQrG8CFWyX1O7ycFPkN2sQhSnpTnAj%2Fpr50BJ%2BLRa9PaIOF04lHdDJJC2lFYGoEo4ButRHY7yqTicWj370pdQKRAsxoLdakLfv6rt%2BgWuG4YMB7MNE0YmSS%2FDhile1h5FY2SsaDeQei5C9i6i95q%2F1ARaz3VJO8n6j31HdeZSmqvngZpPfepowexOqEdrXCNOJKuWAdP9c42EJp3djVrnIlCa79ojxqTsLJA0YwmjQZny6Yk5vU8ywQeDOuPLBTxbFpevsTgFDwbrsWWC42KEOg49c1gpxBA0Ri2xK1iSOmuUf1viUrOw%2Bjob8kTSq414NRhZOEOR8tYBfgWFD3MiGAP99rRKRmtpZX4TF%2FdxstoTrjWWrKRWu6T%2FMKO%2Frb4GOqUBktPPOiFzZkFJnugGxmF6rTeL%2FgLqpa9MAXvPlYq6vhLnoreN5ExPj%2BuiEVLPtNfSSxQdVfn%2BqUvlAj%2BE%2ByGEy0F5vqIDVbL9JB1sz3VU9yV3rZrUDrZypQwcJEMvlpr6pyu7vSG1sKxLo32Mb%2Bojz0szITe6kcvNK7n0GqsLh1BWHeR5FAVPjEkEv4QBw3ovDsK%2BuaFod6fP31J8k05m2%2BsE6nwl&X-Amz-Signature=254ad4b76c69bad448b3216f5451ca69dd7b1075e746336991713affd58f8242&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
