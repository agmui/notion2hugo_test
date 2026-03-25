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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L6NFGWX%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEI4O6oAR8nyGnZQzb9y1rQA22wt8%2BS3NM8OpchENdiAIgDcslH%2F%2BTJHcUoeOvS%2FjaveB3tzMBvwoB0YAA%2FodP%2BqQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0ERy2k9Ift2rKL5ircA7ImzvVuKbmxBUek8abJYMGcB59iRLP8hBUpfyGrn14Tj9hTY9jTAQ00Xgrx0KOM2r%2BqC%2F67YvW8eLFBOx1cFa5uRfYOcOm0UewpO5%2FmKLTvxNeL%2BGAVW12EoZqfPjTg4ApbXsWrobDJf9RuX2qCJI%2Ffbpb%2FQwcThxks5e8VCUyuNq1xJ7aJj%2BTyII6kqygb1fFcLnA7F4nVwBHGoRSnTf%2FpMIDUM3teOvdN3HwCZm38Nn%2BXsO2IRHRcRqfISk3uT3vtrAtuOfkgVUZi6%2FSDe7els0rNuPFcD4PXbEzoY2LnzphF%2BxjKLccMiK4%2BLjIVlNCOHtG%2FK4CDDBzi4%2BvDkL09m%2BFNDQELKXzw6g3ePLoUjmo9oI898%2BESPp%2FoL6i4EzN421hp4ZbhXbs4lmC95nCMD%2FdOCaVnqe1hjsT5Ap6GuGP7MwkRRGbn0GRdcmvZr7tHv2cwNRtC%2Bws%2FDnhfTQE72qeV5mAAmLlFkTWD5HQVvS4oY8w66pCGFtRBixyWDLsri%2FOIxnJIg7bB4eHxCBWyaUBWgGWkyk8Vq4Q%2Fm2WuRBSrldZ4FGFz93rvkFghsG2SrB7g%2FHIGfSQkluYKFoDVUPqKASTin9%2Fnkr4890nOwfvcj4VBv9l0A6TJMKf1jM4GOqUBHt4Kh5QLMwm6WTN51rmPmxpNXSSYVs%2Bxx5ekaQr295fwNi91A4nUzsReX%2Bm5fCSLnNw7O%2BKCTABvdtyTutEObu8sRJX0KzJ%2BQDGLxiX32c9mOrzaXs28D1tLX5X17HkNradw5TBwmjUVC1%2B8jfhwQEithtlPBxdttocPrvJu2ITZwyilf3OHRp7VCmwIuB4nCBo4kETKgEOGjyMJXFO6NOvVeU0X&X-Amz-Signature=0ebcc974a19da4aff60de62bdb4e9eab796bc3b4c8b4db7d55a280ae73fe9158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L6NFGWX%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEI4O6oAR8nyGnZQzb9y1rQA22wt8%2BS3NM8OpchENdiAIgDcslH%2F%2BTJHcUoeOvS%2FjaveB3tzMBvwoB0YAA%2FodP%2BqQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0ERy2k9Ift2rKL5ircA7ImzvVuKbmxBUek8abJYMGcB59iRLP8hBUpfyGrn14Tj9hTY9jTAQ00Xgrx0KOM2r%2BqC%2F67YvW8eLFBOx1cFa5uRfYOcOm0UewpO5%2FmKLTvxNeL%2BGAVW12EoZqfPjTg4ApbXsWrobDJf9RuX2qCJI%2Ffbpb%2FQwcThxks5e8VCUyuNq1xJ7aJj%2BTyII6kqygb1fFcLnA7F4nVwBHGoRSnTf%2FpMIDUM3teOvdN3HwCZm38Nn%2BXsO2IRHRcRqfISk3uT3vtrAtuOfkgVUZi6%2FSDe7els0rNuPFcD4PXbEzoY2LnzphF%2BxjKLccMiK4%2BLjIVlNCOHtG%2FK4CDDBzi4%2BvDkL09m%2BFNDQELKXzw6g3ePLoUjmo9oI898%2BESPp%2FoL6i4EzN421hp4ZbhXbs4lmC95nCMD%2FdOCaVnqe1hjsT5Ap6GuGP7MwkRRGbn0GRdcmvZr7tHv2cwNRtC%2Bws%2FDnhfTQE72qeV5mAAmLlFkTWD5HQVvS4oY8w66pCGFtRBixyWDLsri%2FOIxnJIg7bB4eHxCBWyaUBWgGWkyk8Vq4Q%2Fm2WuRBSrldZ4FGFz93rvkFghsG2SrB7g%2FHIGfSQkluYKFoDVUPqKASTin9%2Fnkr4890nOwfvcj4VBv9l0A6TJMKf1jM4GOqUBHt4Kh5QLMwm6WTN51rmPmxpNXSSYVs%2Bxx5ekaQr295fwNi91A4nUzsReX%2Bm5fCSLnNw7O%2BKCTABvdtyTutEObu8sRJX0KzJ%2BQDGLxiX32c9mOrzaXs28D1tLX5X17HkNradw5TBwmjUVC1%2B8jfhwQEithtlPBxdttocPrvJu2ITZwyilf3OHRp7VCmwIuB4nCBo4kETKgEOGjyMJXFO6NOvVeU0X&X-Amz-Signature=ddf954a0cc0d50697f8c424843b48eee8ad5cc949c901fb2b5e0335e4be87d52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L6NFGWX%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEI4O6oAR8nyGnZQzb9y1rQA22wt8%2BS3NM8OpchENdiAIgDcslH%2F%2BTJHcUoeOvS%2FjaveB3tzMBvwoB0YAA%2FodP%2BqQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0ERy2k9Ift2rKL5ircA7ImzvVuKbmxBUek8abJYMGcB59iRLP8hBUpfyGrn14Tj9hTY9jTAQ00Xgrx0KOM2r%2BqC%2F67YvW8eLFBOx1cFa5uRfYOcOm0UewpO5%2FmKLTvxNeL%2BGAVW12EoZqfPjTg4ApbXsWrobDJf9RuX2qCJI%2Ffbpb%2FQwcThxks5e8VCUyuNq1xJ7aJj%2BTyII6kqygb1fFcLnA7F4nVwBHGoRSnTf%2FpMIDUM3teOvdN3HwCZm38Nn%2BXsO2IRHRcRqfISk3uT3vtrAtuOfkgVUZi6%2FSDe7els0rNuPFcD4PXbEzoY2LnzphF%2BxjKLccMiK4%2BLjIVlNCOHtG%2FK4CDDBzi4%2BvDkL09m%2BFNDQELKXzw6g3ePLoUjmo9oI898%2BESPp%2FoL6i4EzN421hp4ZbhXbs4lmC95nCMD%2FdOCaVnqe1hjsT5Ap6GuGP7MwkRRGbn0GRdcmvZr7tHv2cwNRtC%2Bws%2FDnhfTQE72qeV5mAAmLlFkTWD5HQVvS4oY8w66pCGFtRBixyWDLsri%2FOIxnJIg7bB4eHxCBWyaUBWgGWkyk8Vq4Q%2Fm2WuRBSrldZ4FGFz93rvkFghsG2SrB7g%2FHIGfSQkluYKFoDVUPqKASTin9%2Fnkr4890nOwfvcj4VBv9l0A6TJMKf1jM4GOqUBHt4Kh5QLMwm6WTN51rmPmxpNXSSYVs%2Bxx5ekaQr295fwNi91A4nUzsReX%2Bm5fCSLnNw7O%2BKCTABvdtyTutEObu8sRJX0KzJ%2BQDGLxiX32c9mOrzaXs28D1tLX5X17HkNradw5TBwmjUVC1%2B8jfhwQEithtlPBxdttocPrvJu2ITZwyilf3OHRp7VCmwIuB4nCBo4kETKgEOGjyMJXFO6NOvVeU0X&X-Amz-Signature=ec302af61582818407dcb45d4ff470cfc58c64e61459350e4c52816378de9062&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L6NFGWX%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEI4O6oAR8nyGnZQzb9y1rQA22wt8%2BS3NM8OpchENdiAIgDcslH%2F%2BTJHcUoeOvS%2FjaveB3tzMBvwoB0YAA%2FodP%2BqQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0ERy2k9Ift2rKL5ircA7ImzvVuKbmxBUek8abJYMGcB59iRLP8hBUpfyGrn14Tj9hTY9jTAQ00Xgrx0KOM2r%2BqC%2F67YvW8eLFBOx1cFa5uRfYOcOm0UewpO5%2FmKLTvxNeL%2BGAVW12EoZqfPjTg4ApbXsWrobDJf9RuX2qCJI%2Ffbpb%2FQwcThxks5e8VCUyuNq1xJ7aJj%2BTyII6kqygb1fFcLnA7F4nVwBHGoRSnTf%2FpMIDUM3teOvdN3HwCZm38Nn%2BXsO2IRHRcRqfISk3uT3vtrAtuOfkgVUZi6%2FSDe7els0rNuPFcD4PXbEzoY2LnzphF%2BxjKLccMiK4%2BLjIVlNCOHtG%2FK4CDDBzi4%2BvDkL09m%2BFNDQELKXzw6g3ePLoUjmo9oI898%2BESPp%2FoL6i4EzN421hp4ZbhXbs4lmC95nCMD%2FdOCaVnqe1hjsT5Ap6GuGP7MwkRRGbn0GRdcmvZr7tHv2cwNRtC%2Bws%2FDnhfTQE72qeV5mAAmLlFkTWD5HQVvS4oY8w66pCGFtRBixyWDLsri%2FOIxnJIg7bB4eHxCBWyaUBWgGWkyk8Vq4Q%2Fm2WuRBSrldZ4FGFz93rvkFghsG2SrB7g%2FHIGfSQkluYKFoDVUPqKASTin9%2Fnkr4890nOwfvcj4VBv9l0A6TJMKf1jM4GOqUBHt4Kh5QLMwm6WTN51rmPmxpNXSSYVs%2Bxx5ekaQr295fwNi91A4nUzsReX%2Bm5fCSLnNw7O%2BKCTABvdtyTutEObu8sRJX0KzJ%2BQDGLxiX32c9mOrzaXs28D1tLX5X17HkNradw5TBwmjUVC1%2B8jfhwQEithtlPBxdttocPrvJu2ITZwyilf3OHRp7VCmwIuB4nCBo4kETKgEOGjyMJXFO6NOvVeU0X&X-Amz-Signature=6bffa0db75dd7116734ce62ce91e043c74b88d7a1d662b389b9b975acf44d6ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L6NFGWX%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEI4O6oAR8nyGnZQzb9y1rQA22wt8%2BS3NM8OpchENdiAIgDcslH%2F%2BTJHcUoeOvS%2FjaveB3tzMBvwoB0YAA%2FodP%2BqQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0ERy2k9Ift2rKL5ircA7ImzvVuKbmxBUek8abJYMGcB59iRLP8hBUpfyGrn14Tj9hTY9jTAQ00Xgrx0KOM2r%2BqC%2F67YvW8eLFBOx1cFa5uRfYOcOm0UewpO5%2FmKLTvxNeL%2BGAVW12EoZqfPjTg4ApbXsWrobDJf9RuX2qCJI%2Ffbpb%2FQwcThxks5e8VCUyuNq1xJ7aJj%2BTyII6kqygb1fFcLnA7F4nVwBHGoRSnTf%2FpMIDUM3teOvdN3HwCZm38Nn%2BXsO2IRHRcRqfISk3uT3vtrAtuOfkgVUZi6%2FSDe7els0rNuPFcD4PXbEzoY2LnzphF%2BxjKLccMiK4%2BLjIVlNCOHtG%2FK4CDDBzi4%2BvDkL09m%2BFNDQELKXzw6g3ePLoUjmo9oI898%2BESPp%2FoL6i4EzN421hp4ZbhXbs4lmC95nCMD%2FdOCaVnqe1hjsT5Ap6GuGP7MwkRRGbn0GRdcmvZr7tHv2cwNRtC%2Bws%2FDnhfTQE72qeV5mAAmLlFkTWD5HQVvS4oY8w66pCGFtRBixyWDLsri%2FOIxnJIg7bB4eHxCBWyaUBWgGWkyk8Vq4Q%2Fm2WuRBSrldZ4FGFz93rvkFghsG2SrB7g%2FHIGfSQkluYKFoDVUPqKASTin9%2Fnkr4890nOwfvcj4VBv9l0A6TJMKf1jM4GOqUBHt4Kh5QLMwm6WTN51rmPmxpNXSSYVs%2Bxx5ekaQr295fwNi91A4nUzsReX%2Bm5fCSLnNw7O%2BKCTABvdtyTutEObu8sRJX0KzJ%2BQDGLxiX32c9mOrzaXs28D1tLX5X17HkNradw5TBwmjUVC1%2B8jfhwQEithtlPBxdttocPrvJu2ITZwyilf3OHRp7VCmwIuB4nCBo4kETKgEOGjyMJXFO6NOvVeU0X&X-Amz-Signature=a8e24e3a3f78c5b93c92f56b0fee0cda00bdb90a7e7043efb1cb04c40b251769&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
