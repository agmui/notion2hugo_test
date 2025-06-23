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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAIJVFZT%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDI7B%2Bf7XpQ4SLFVGYyab8cdjG7JwrCaVvOLGZ4lhY6AAiEAje0FSiHbyNbg%2FxEbxMjvKs5y4Szkh%2B33oOT33Ch1s5wq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDFkcwKgDkN%2BKHoeu%2FSrcAwzWwaJqS1KEJc9i0bA0G%2Fx%2BucP9MSJvleJRjWEl%2FSz%2B6c4anaW79ZUj%2B%2Bed8oKRiWhPkqIdgpV5NAtfpLp1Lk9VZpr69dtGub%2BGnLJovN8RnBJTWkRVtHwnjGfgMXNIUpzIa3WNMwLkLlhg1J8x32QPaQsuDRfuOzpJCwlSFES2HjfG%2BY6WwG7tuFQomQWaoEZVXvFMJq1%2BV50w5ixRR0t9CsHbX0pHdbnww0lmhUyB3fN%2BigvQI1OZEZSW1fUIBEokW6SiLwVtKF5jBgOjniTpJ3jsLCBe1cF%2BlwzS6QtMIehAPhnlsWhnJkhx4PqhbYS0AEdUwe5BJ6p4TuIZObzO2JTQW38t9KJYcb6Ae0CwyUour7afeFTpHSi5XlQt5W4FOnKwqiKz1OS9%2BXucfI2sRF9AGU92qHNVBx0b%2FRT6gJMGiBdruvh8Hg4%2FnWEF9YR7FSMpCCM2Pj%2FXrGp%2F81gDd2AzAWs6bdQWQxk%2B3uEVdt7bKqgy%2BxYmoSOIsD6y5wD6xuKA4govnstWrwZjanwD9HE3Kz19G4vZWiZqIRpnrKqsPL3lHgVgOXEB6pur9t7y9ByKkxFG%2FgqFXkQdum7gxTnJ9p5MgMxNR5E2S58yG2kwxlBBiT%2F6BwDMMLSc5MIGOqUBmmLgA3Re3d78160lbwTvFyW1RcLRTjKoEOsbN3o9flILoVEAMgV2BxH6Nb8lfMe4VoefeyyxLSzCvQyLNGAu7kkLqvYNWQ13xb0rSQ7Drl9SmzHDGcxVlwjCvDqmqbYmmFEkUO8e8v%2Bpt6qks0iJxUyAFMpz%2B0Aqune40PUzC1qcFBOr3CBthyHzV3fBxPbvcctH%2B6lXpRCUEMVFkg8MbezT2QAc&X-Amz-Signature=5702565ce712f35859048ee1614ad6c76cefad11cdc1f91a3501af1e317e3138&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAIJVFZT%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDI7B%2Bf7XpQ4SLFVGYyab8cdjG7JwrCaVvOLGZ4lhY6AAiEAje0FSiHbyNbg%2FxEbxMjvKs5y4Szkh%2B33oOT33Ch1s5wq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDFkcwKgDkN%2BKHoeu%2FSrcAwzWwaJqS1KEJc9i0bA0G%2Fx%2BucP9MSJvleJRjWEl%2FSz%2B6c4anaW79ZUj%2B%2Bed8oKRiWhPkqIdgpV5NAtfpLp1Lk9VZpr69dtGub%2BGnLJovN8RnBJTWkRVtHwnjGfgMXNIUpzIa3WNMwLkLlhg1J8x32QPaQsuDRfuOzpJCwlSFES2HjfG%2BY6WwG7tuFQomQWaoEZVXvFMJq1%2BV50w5ixRR0t9CsHbX0pHdbnww0lmhUyB3fN%2BigvQI1OZEZSW1fUIBEokW6SiLwVtKF5jBgOjniTpJ3jsLCBe1cF%2BlwzS6QtMIehAPhnlsWhnJkhx4PqhbYS0AEdUwe5BJ6p4TuIZObzO2JTQW38t9KJYcb6Ae0CwyUour7afeFTpHSi5XlQt5W4FOnKwqiKz1OS9%2BXucfI2sRF9AGU92qHNVBx0b%2FRT6gJMGiBdruvh8Hg4%2FnWEF9YR7FSMpCCM2Pj%2FXrGp%2F81gDd2AzAWs6bdQWQxk%2B3uEVdt7bKqgy%2BxYmoSOIsD6y5wD6xuKA4govnstWrwZjanwD9HE3Kz19G4vZWiZqIRpnrKqsPL3lHgVgOXEB6pur9t7y9ByKkxFG%2FgqFXkQdum7gxTnJ9p5MgMxNR5E2S58yG2kwxlBBiT%2F6BwDMMLSc5MIGOqUBmmLgA3Re3d78160lbwTvFyW1RcLRTjKoEOsbN3o9flILoVEAMgV2BxH6Nb8lfMe4VoefeyyxLSzCvQyLNGAu7kkLqvYNWQ13xb0rSQ7Drl9SmzHDGcxVlwjCvDqmqbYmmFEkUO8e8v%2Bpt6qks0iJxUyAFMpz%2B0Aqune40PUzC1qcFBOr3CBthyHzV3fBxPbvcctH%2B6lXpRCUEMVFkg8MbezT2QAc&X-Amz-Signature=292cc5751e91f8c10f38233cebf4dc738165d7b8d11864af109d7c528ab469ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAIJVFZT%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDI7B%2Bf7XpQ4SLFVGYyab8cdjG7JwrCaVvOLGZ4lhY6AAiEAje0FSiHbyNbg%2FxEbxMjvKs5y4Szkh%2B33oOT33Ch1s5wq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDFkcwKgDkN%2BKHoeu%2FSrcAwzWwaJqS1KEJc9i0bA0G%2Fx%2BucP9MSJvleJRjWEl%2FSz%2B6c4anaW79ZUj%2B%2Bed8oKRiWhPkqIdgpV5NAtfpLp1Lk9VZpr69dtGub%2BGnLJovN8RnBJTWkRVtHwnjGfgMXNIUpzIa3WNMwLkLlhg1J8x32QPaQsuDRfuOzpJCwlSFES2HjfG%2BY6WwG7tuFQomQWaoEZVXvFMJq1%2BV50w5ixRR0t9CsHbX0pHdbnww0lmhUyB3fN%2BigvQI1OZEZSW1fUIBEokW6SiLwVtKF5jBgOjniTpJ3jsLCBe1cF%2BlwzS6QtMIehAPhnlsWhnJkhx4PqhbYS0AEdUwe5BJ6p4TuIZObzO2JTQW38t9KJYcb6Ae0CwyUour7afeFTpHSi5XlQt5W4FOnKwqiKz1OS9%2BXucfI2sRF9AGU92qHNVBx0b%2FRT6gJMGiBdruvh8Hg4%2FnWEF9YR7FSMpCCM2Pj%2FXrGp%2F81gDd2AzAWs6bdQWQxk%2B3uEVdt7bKqgy%2BxYmoSOIsD6y5wD6xuKA4govnstWrwZjanwD9HE3Kz19G4vZWiZqIRpnrKqsPL3lHgVgOXEB6pur9t7y9ByKkxFG%2FgqFXkQdum7gxTnJ9p5MgMxNR5E2S58yG2kwxlBBiT%2F6BwDMMLSc5MIGOqUBmmLgA3Re3d78160lbwTvFyW1RcLRTjKoEOsbN3o9flILoVEAMgV2BxH6Nb8lfMe4VoefeyyxLSzCvQyLNGAu7kkLqvYNWQ13xb0rSQ7Drl9SmzHDGcxVlwjCvDqmqbYmmFEkUO8e8v%2Bpt6qks0iJxUyAFMpz%2B0Aqune40PUzC1qcFBOr3CBthyHzV3fBxPbvcctH%2B6lXpRCUEMVFkg8MbezT2QAc&X-Amz-Signature=969b03d0377711283cfcf287958fe5c6326b0d1f438bf316d6f07f3c4b4f197e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAIJVFZT%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDI7B%2Bf7XpQ4SLFVGYyab8cdjG7JwrCaVvOLGZ4lhY6AAiEAje0FSiHbyNbg%2FxEbxMjvKs5y4Szkh%2B33oOT33Ch1s5wq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDFkcwKgDkN%2BKHoeu%2FSrcAwzWwaJqS1KEJc9i0bA0G%2Fx%2BucP9MSJvleJRjWEl%2FSz%2B6c4anaW79ZUj%2B%2Bed8oKRiWhPkqIdgpV5NAtfpLp1Lk9VZpr69dtGub%2BGnLJovN8RnBJTWkRVtHwnjGfgMXNIUpzIa3WNMwLkLlhg1J8x32QPaQsuDRfuOzpJCwlSFES2HjfG%2BY6WwG7tuFQomQWaoEZVXvFMJq1%2BV50w5ixRR0t9CsHbX0pHdbnww0lmhUyB3fN%2BigvQI1OZEZSW1fUIBEokW6SiLwVtKF5jBgOjniTpJ3jsLCBe1cF%2BlwzS6QtMIehAPhnlsWhnJkhx4PqhbYS0AEdUwe5BJ6p4TuIZObzO2JTQW38t9KJYcb6Ae0CwyUour7afeFTpHSi5XlQt5W4FOnKwqiKz1OS9%2BXucfI2sRF9AGU92qHNVBx0b%2FRT6gJMGiBdruvh8Hg4%2FnWEF9YR7FSMpCCM2Pj%2FXrGp%2F81gDd2AzAWs6bdQWQxk%2B3uEVdt7bKqgy%2BxYmoSOIsD6y5wD6xuKA4govnstWrwZjanwD9HE3Kz19G4vZWiZqIRpnrKqsPL3lHgVgOXEB6pur9t7y9ByKkxFG%2FgqFXkQdum7gxTnJ9p5MgMxNR5E2S58yG2kwxlBBiT%2F6BwDMMLSc5MIGOqUBmmLgA3Re3d78160lbwTvFyW1RcLRTjKoEOsbN3o9flILoVEAMgV2BxH6Nb8lfMe4VoefeyyxLSzCvQyLNGAu7kkLqvYNWQ13xb0rSQ7Drl9SmzHDGcxVlwjCvDqmqbYmmFEkUO8e8v%2Bpt6qks0iJxUyAFMpz%2B0Aqune40PUzC1qcFBOr3CBthyHzV3fBxPbvcctH%2B6lXpRCUEMVFkg8MbezT2QAc&X-Amz-Signature=a492acaf29baacb6f5fd88a87cc9527ea3f5799f7f480b8b89116117dd87e0f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAIJVFZT%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDI7B%2Bf7XpQ4SLFVGYyab8cdjG7JwrCaVvOLGZ4lhY6AAiEAje0FSiHbyNbg%2FxEbxMjvKs5y4Szkh%2B33oOT33Ch1s5wq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDFkcwKgDkN%2BKHoeu%2FSrcAwzWwaJqS1KEJc9i0bA0G%2Fx%2BucP9MSJvleJRjWEl%2FSz%2B6c4anaW79ZUj%2B%2Bed8oKRiWhPkqIdgpV5NAtfpLp1Lk9VZpr69dtGub%2BGnLJovN8RnBJTWkRVtHwnjGfgMXNIUpzIa3WNMwLkLlhg1J8x32QPaQsuDRfuOzpJCwlSFES2HjfG%2BY6WwG7tuFQomQWaoEZVXvFMJq1%2BV50w5ixRR0t9CsHbX0pHdbnww0lmhUyB3fN%2BigvQI1OZEZSW1fUIBEokW6SiLwVtKF5jBgOjniTpJ3jsLCBe1cF%2BlwzS6QtMIehAPhnlsWhnJkhx4PqhbYS0AEdUwe5BJ6p4TuIZObzO2JTQW38t9KJYcb6Ae0CwyUour7afeFTpHSi5XlQt5W4FOnKwqiKz1OS9%2BXucfI2sRF9AGU92qHNVBx0b%2FRT6gJMGiBdruvh8Hg4%2FnWEF9YR7FSMpCCM2Pj%2FXrGp%2F81gDd2AzAWs6bdQWQxk%2B3uEVdt7bKqgy%2BxYmoSOIsD6y5wD6xuKA4govnstWrwZjanwD9HE3Kz19G4vZWiZqIRpnrKqsPL3lHgVgOXEB6pur9t7y9ByKkxFG%2FgqFXkQdum7gxTnJ9p5MgMxNR5E2S58yG2kwxlBBiT%2F6BwDMMLSc5MIGOqUBmmLgA3Re3d78160lbwTvFyW1RcLRTjKoEOsbN3o9flILoVEAMgV2BxH6Nb8lfMe4VoefeyyxLSzCvQyLNGAu7kkLqvYNWQ13xb0rSQ7Drl9SmzHDGcxVlwjCvDqmqbYmmFEkUO8e8v%2Bpt6qks0iJxUyAFMpz%2B0Aqune40PUzC1qcFBOr3CBthyHzV3fBxPbvcctH%2B6lXpRCUEMVFkg8MbezT2QAc&X-Amz-Signature=a008247ca7e26d6c87a706f7040f6807d5ceed9e5c2b62e41cc7cad87d7706fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
