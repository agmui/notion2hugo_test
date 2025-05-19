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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675XHPWZO%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcUUthf%2Fq86teNFnzhYJNAlmMwq8O1DvYPHyYEDn1uiAiEAu0DRfSccJizTK6%2B0bz9PGbQo84BJEn%2F%2FtAzY6e2OiRkqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJ9c5LSYbOIa3o8TyrcA0ELELBTX8i52fv7u4D49bipnvpfQ4TaZOmSdRGmGaPrSk4Ikt6d1o70Ef2xhQNJ2HkAJV7Ud2KWK99RNnjPAZ4gWHu9OYqdb5Dih1TrCEgIUr9mqLBG4PFRu9jExfOmH1lMHiY5yEAg80%2FKZv3uTtbPMsW9AzdWtIxaZEMrpondW3Z3B113cKUxKosprMweaIrBoVaQD0Or1tQ%2FtPe2SGtEkqUEvW5ln8g4xe1CYIzBHCc3YiUrUaB%2FlBqlm7Kqf5jljHFQTqxpnUfM1TSCHxmhueoQmlUqME8gMBW4J%2BZ7Ju4LePpPViVswJrodzoFGMw7j2YxmN%2BDsuByQMXFkUoGHfmevMF36FirfemlfK2cAZYBXBkKYs5lmq5PaCXqQxOCFO2yR058VKITlV60C6%2BKnR20Wt2hVKXXGbWUs3jHu%2FV0BxwavHbcS5u8BSZsbZAiwLNih%2FzTXYVMYT8eqsfF346ICupWAnTPkLRASWMaTFgGHhYBgbKtHwbmUoQDcZzVqKQX%2B8sbU2BLSlSQElb067ItYaUmi%2FuSUUWuBtOZrRdrZa%2Bvq23ps9MyT4kBecwtBTxDLi2O5%2BhmyrXQuEGXiK%2FBY87JhUP3kewX3EEqyN%2F2mSHOG%2BnmII1ZMKDBrMEGOqUB4g7bCbZJTQ72zj2CIOY9NX2fL6RihAbrb4a1xdDwuGVcIloWYM5LP8bzEZaxzN%2BdSXdTljb1hDvEkoEULT5bzyBDRMYFwuQ3exe0az6S5DVSxAy5h1Zx27KU61tLiahJplrHdTSFdsZIXPR3yYm0DXzx8VciDF2KbvKeS75Me14dz5NK39QpD0Jr6HT0dWs20c3JCIpz%2F%2F9JkhguJ2MQ9YcjUgK6&X-Amz-Signature=5f6b67d2cbbbee558e73eedbd824918ef194d2dbec38fbb3d319a3fa6fce892f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675XHPWZO%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcUUthf%2Fq86teNFnzhYJNAlmMwq8O1DvYPHyYEDn1uiAiEAu0DRfSccJizTK6%2B0bz9PGbQo84BJEn%2F%2FtAzY6e2OiRkqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJ9c5LSYbOIa3o8TyrcA0ELELBTX8i52fv7u4D49bipnvpfQ4TaZOmSdRGmGaPrSk4Ikt6d1o70Ef2xhQNJ2HkAJV7Ud2KWK99RNnjPAZ4gWHu9OYqdb5Dih1TrCEgIUr9mqLBG4PFRu9jExfOmH1lMHiY5yEAg80%2FKZv3uTtbPMsW9AzdWtIxaZEMrpondW3Z3B113cKUxKosprMweaIrBoVaQD0Or1tQ%2FtPe2SGtEkqUEvW5ln8g4xe1CYIzBHCc3YiUrUaB%2FlBqlm7Kqf5jljHFQTqxpnUfM1TSCHxmhueoQmlUqME8gMBW4J%2BZ7Ju4LePpPViVswJrodzoFGMw7j2YxmN%2BDsuByQMXFkUoGHfmevMF36FirfemlfK2cAZYBXBkKYs5lmq5PaCXqQxOCFO2yR058VKITlV60C6%2BKnR20Wt2hVKXXGbWUs3jHu%2FV0BxwavHbcS5u8BSZsbZAiwLNih%2FzTXYVMYT8eqsfF346ICupWAnTPkLRASWMaTFgGHhYBgbKtHwbmUoQDcZzVqKQX%2B8sbU2BLSlSQElb067ItYaUmi%2FuSUUWuBtOZrRdrZa%2Bvq23ps9MyT4kBecwtBTxDLi2O5%2BhmyrXQuEGXiK%2FBY87JhUP3kewX3EEqyN%2F2mSHOG%2BnmII1ZMKDBrMEGOqUB4g7bCbZJTQ72zj2CIOY9NX2fL6RihAbrb4a1xdDwuGVcIloWYM5LP8bzEZaxzN%2BdSXdTljb1hDvEkoEULT5bzyBDRMYFwuQ3exe0az6S5DVSxAy5h1Zx27KU61tLiahJplrHdTSFdsZIXPR3yYm0DXzx8VciDF2KbvKeS75Me14dz5NK39QpD0Jr6HT0dWs20c3JCIpz%2F%2F9JkhguJ2MQ9YcjUgK6&X-Amz-Signature=3867a7f1c16c2588cb1ef32a52abcda3715748b78e1d62a2880fc8595889e686&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675XHPWZO%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcUUthf%2Fq86teNFnzhYJNAlmMwq8O1DvYPHyYEDn1uiAiEAu0DRfSccJizTK6%2B0bz9PGbQo84BJEn%2F%2FtAzY6e2OiRkqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJ9c5LSYbOIa3o8TyrcA0ELELBTX8i52fv7u4D49bipnvpfQ4TaZOmSdRGmGaPrSk4Ikt6d1o70Ef2xhQNJ2HkAJV7Ud2KWK99RNnjPAZ4gWHu9OYqdb5Dih1TrCEgIUr9mqLBG4PFRu9jExfOmH1lMHiY5yEAg80%2FKZv3uTtbPMsW9AzdWtIxaZEMrpondW3Z3B113cKUxKosprMweaIrBoVaQD0Or1tQ%2FtPe2SGtEkqUEvW5ln8g4xe1CYIzBHCc3YiUrUaB%2FlBqlm7Kqf5jljHFQTqxpnUfM1TSCHxmhueoQmlUqME8gMBW4J%2BZ7Ju4LePpPViVswJrodzoFGMw7j2YxmN%2BDsuByQMXFkUoGHfmevMF36FirfemlfK2cAZYBXBkKYs5lmq5PaCXqQxOCFO2yR058VKITlV60C6%2BKnR20Wt2hVKXXGbWUs3jHu%2FV0BxwavHbcS5u8BSZsbZAiwLNih%2FzTXYVMYT8eqsfF346ICupWAnTPkLRASWMaTFgGHhYBgbKtHwbmUoQDcZzVqKQX%2B8sbU2BLSlSQElb067ItYaUmi%2FuSUUWuBtOZrRdrZa%2Bvq23ps9MyT4kBecwtBTxDLi2O5%2BhmyrXQuEGXiK%2FBY87JhUP3kewX3EEqyN%2F2mSHOG%2BnmII1ZMKDBrMEGOqUB4g7bCbZJTQ72zj2CIOY9NX2fL6RihAbrb4a1xdDwuGVcIloWYM5LP8bzEZaxzN%2BdSXdTljb1hDvEkoEULT5bzyBDRMYFwuQ3exe0az6S5DVSxAy5h1Zx27KU61tLiahJplrHdTSFdsZIXPR3yYm0DXzx8VciDF2KbvKeS75Me14dz5NK39QpD0Jr6HT0dWs20c3JCIpz%2F%2F9JkhguJ2MQ9YcjUgK6&X-Amz-Signature=e5d353ede7576510126f237b0a9c1768f433a216640f19f7ca203b941161fe0f&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675XHPWZO%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcUUthf%2Fq86teNFnzhYJNAlmMwq8O1DvYPHyYEDn1uiAiEAu0DRfSccJizTK6%2B0bz9PGbQo84BJEn%2F%2FtAzY6e2OiRkqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJ9c5LSYbOIa3o8TyrcA0ELELBTX8i52fv7u4D49bipnvpfQ4TaZOmSdRGmGaPrSk4Ikt6d1o70Ef2xhQNJ2HkAJV7Ud2KWK99RNnjPAZ4gWHu9OYqdb5Dih1TrCEgIUr9mqLBG4PFRu9jExfOmH1lMHiY5yEAg80%2FKZv3uTtbPMsW9AzdWtIxaZEMrpondW3Z3B113cKUxKosprMweaIrBoVaQD0Or1tQ%2FtPe2SGtEkqUEvW5ln8g4xe1CYIzBHCc3YiUrUaB%2FlBqlm7Kqf5jljHFQTqxpnUfM1TSCHxmhueoQmlUqME8gMBW4J%2BZ7Ju4LePpPViVswJrodzoFGMw7j2YxmN%2BDsuByQMXFkUoGHfmevMF36FirfemlfK2cAZYBXBkKYs5lmq5PaCXqQxOCFO2yR058VKITlV60C6%2BKnR20Wt2hVKXXGbWUs3jHu%2FV0BxwavHbcS5u8BSZsbZAiwLNih%2FzTXYVMYT8eqsfF346ICupWAnTPkLRASWMaTFgGHhYBgbKtHwbmUoQDcZzVqKQX%2B8sbU2BLSlSQElb067ItYaUmi%2FuSUUWuBtOZrRdrZa%2Bvq23ps9MyT4kBecwtBTxDLi2O5%2BhmyrXQuEGXiK%2FBY87JhUP3kewX3EEqyN%2F2mSHOG%2BnmII1ZMKDBrMEGOqUB4g7bCbZJTQ72zj2CIOY9NX2fL6RihAbrb4a1xdDwuGVcIloWYM5LP8bzEZaxzN%2BdSXdTljb1hDvEkoEULT5bzyBDRMYFwuQ3exe0az6S5DVSxAy5h1Zx27KU61tLiahJplrHdTSFdsZIXPR3yYm0DXzx8VciDF2KbvKeS75Me14dz5NK39QpD0Jr6HT0dWs20c3JCIpz%2F%2F9JkhguJ2MQ9YcjUgK6&X-Amz-Signature=323a32e0a1d67b0aa8474c4118390463cb901ff979e307fafc497752ec17fb34&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675XHPWZO%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcUUthf%2Fq86teNFnzhYJNAlmMwq8O1DvYPHyYEDn1uiAiEAu0DRfSccJizTK6%2B0bz9PGbQo84BJEn%2F%2FtAzY6e2OiRkqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJ9c5LSYbOIa3o8TyrcA0ELELBTX8i52fv7u4D49bipnvpfQ4TaZOmSdRGmGaPrSk4Ikt6d1o70Ef2xhQNJ2HkAJV7Ud2KWK99RNnjPAZ4gWHu9OYqdb5Dih1TrCEgIUr9mqLBG4PFRu9jExfOmH1lMHiY5yEAg80%2FKZv3uTtbPMsW9AzdWtIxaZEMrpondW3Z3B113cKUxKosprMweaIrBoVaQD0Or1tQ%2FtPe2SGtEkqUEvW5ln8g4xe1CYIzBHCc3YiUrUaB%2FlBqlm7Kqf5jljHFQTqxpnUfM1TSCHxmhueoQmlUqME8gMBW4J%2BZ7Ju4LePpPViVswJrodzoFGMw7j2YxmN%2BDsuByQMXFkUoGHfmevMF36FirfemlfK2cAZYBXBkKYs5lmq5PaCXqQxOCFO2yR058VKITlV60C6%2BKnR20Wt2hVKXXGbWUs3jHu%2FV0BxwavHbcS5u8BSZsbZAiwLNih%2FzTXYVMYT8eqsfF346ICupWAnTPkLRASWMaTFgGHhYBgbKtHwbmUoQDcZzVqKQX%2B8sbU2BLSlSQElb067ItYaUmi%2FuSUUWuBtOZrRdrZa%2Bvq23ps9MyT4kBecwtBTxDLi2O5%2BhmyrXQuEGXiK%2FBY87JhUP3kewX3EEqyN%2F2mSHOG%2BnmII1ZMKDBrMEGOqUB4g7bCbZJTQ72zj2CIOY9NX2fL6RihAbrb4a1xdDwuGVcIloWYM5LP8bzEZaxzN%2BdSXdTljb1hDvEkoEULT5bzyBDRMYFwuQ3exe0az6S5DVSxAy5h1Zx27KU61tLiahJplrHdTSFdsZIXPR3yYm0DXzx8VciDF2KbvKeS75Me14dz5NK39QpD0Jr6HT0dWs20c3JCIpz%2F%2F9JkhguJ2MQ9YcjUgK6&X-Amz-Signature=71d4fd7bbf65f1ef8939960d284e80118fb739099e6f2eb43c4af87c24240d15&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
