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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BWYQOS4%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDymhCjXLE6bU24g2Mi1123mhpuGh%2ByX7eicwtlDkcuAiBB5RldjYTkRJbYiCEnvz%2BvN1rE8sPUHjB3z9Zw7vilJCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTkOrlDSC%2FPrj17AeKtwDZimOezizy6dTrBT07bW1bjU1c1IlpskR8hVB0e9I5zo4GdDcIdLK2NemKm70BlXubiYsdaw%2F0hm5MElh%2BicKj212K%2FQjOwvRbdDDHtU3c7lrzI%2B94z1%2FTCpEZSu7yOGaLxNyUN%2Fxtf%2FHQ35HL97CDbAbAwQJCOWy6SMub3p4GDHhXGZN3D1toue21iRH5CtiZTskiyl5jrYtrly0O8iFLKlOc28r13Dg8pGbMZL2JCYudSFBV3v%2B092FtZMYdK4oKJuqilZEBf3YxlH9L1svYUJ3%2Bt0e0PMqS52lR3s9QoKItBp3%2F8yZtuV58dAGRxgTfL62y40vMW%2B7IlVR5areFzmpmTFOYoGvGC9frBQhHU24VorKbWT5i1fFH5hLDTLq5spOMaQzexwIDGfDg5JhpGd%2FU3JquBjM0%2FldyPuuk%2Fp9VsNbVVQ8B6N1f3O5zhk2sDCkR323F0jIcwaUQtF6SuSBFGiovzQalafffm%2FhEr%2B2z1qHLZPkCpLQ9%2FCQT523L4SdaJaZ1p5ya9tj7hDrLouqS6qGYrqUDnNMc59CnFHiKWCl1cmpLo%2FZtlepltCHIFvE5NLLGZvipe416tN85892eMlhqBVUIGmma%2BTlu0aQ8%2FfP5PkuwbL4G%2BYwstX3wAY6pgHERnkkgM53Bm7AaKnWjTFD6FmPCjv2II4kfy5yK6i9xmj2zD0gvDCkKb52d%2BzIRGJcqP6jpRrv%2F1kyL9NfimDyZFc2H6maf4sOWSpLj1sG%2FQ9ji1sVhjIbKjzpSqvTvx8OX2d2ecILa5vOZMN2whz7EsBdMqcbatFyd%2FI1IC6DleyCrX6Jhbxwc8IsjynLK2KZmADwxBGcsSR4iLv1ZyaYDzC3tGH%2B&X-Amz-Signature=87a6ec81e46b9583891ec7540e82c9d76866df76cbb741b9d36c82dddd79075d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BWYQOS4%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDymhCjXLE6bU24g2Mi1123mhpuGh%2ByX7eicwtlDkcuAiBB5RldjYTkRJbYiCEnvz%2BvN1rE8sPUHjB3z9Zw7vilJCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTkOrlDSC%2FPrj17AeKtwDZimOezizy6dTrBT07bW1bjU1c1IlpskR8hVB0e9I5zo4GdDcIdLK2NemKm70BlXubiYsdaw%2F0hm5MElh%2BicKj212K%2FQjOwvRbdDDHtU3c7lrzI%2B94z1%2FTCpEZSu7yOGaLxNyUN%2Fxtf%2FHQ35HL97CDbAbAwQJCOWy6SMub3p4GDHhXGZN3D1toue21iRH5CtiZTskiyl5jrYtrly0O8iFLKlOc28r13Dg8pGbMZL2JCYudSFBV3v%2B092FtZMYdK4oKJuqilZEBf3YxlH9L1svYUJ3%2Bt0e0PMqS52lR3s9QoKItBp3%2F8yZtuV58dAGRxgTfL62y40vMW%2B7IlVR5areFzmpmTFOYoGvGC9frBQhHU24VorKbWT5i1fFH5hLDTLq5spOMaQzexwIDGfDg5JhpGd%2FU3JquBjM0%2FldyPuuk%2Fp9VsNbVVQ8B6N1f3O5zhk2sDCkR323F0jIcwaUQtF6SuSBFGiovzQalafffm%2FhEr%2B2z1qHLZPkCpLQ9%2FCQT523L4SdaJaZ1p5ya9tj7hDrLouqS6qGYrqUDnNMc59CnFHiKWCl1cmpLo%2FZtlepltCHIFvE5NLLGZvipe416tN85892eMlhqBVUIGmma%2BTlu0aQ8%2FfP5PkuwbL4G%2BYwstX3wAY6pgHERnkkgM53Bm7AaKnWjTFD6FmPCjv2II4kfy5yK6i9xmj2zD0gvDCkKb52d%2BzIRGJcqP6jpRrv%2F1kyL9NfimDyZFc2H6maf4sOWSpLj1sG%2FQ9ji1sVhjIbKjzpSqvTvx8OX2d2ecILa5vOZMN2whz7EsBdMqcbatFyd%2FI1IC6DleyCrX6Jhbxwc8IsjynLK2KZmADwxBGcsSR4iLv1ZyaYDzC3tGH%2B&X-Amz-Signature=b7870a944c87af42a085394a49ec69faff5935dea31efce3b9bbb4b7718906db&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BWYQOS4%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDymhCjXLE6bU24g2Mi1123mhpuGh%2ByX7eicwtlDkcuAiBB5RldjYTkRJbYiCEnvz%2BvN1rE8sPUHjB3z9Zw7vilJCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTkOrlDSC%2FPrj17AeKtwDZimOezizy6dTrBT07bW1bjU1c1IlpskR8hVB0e9I5zo4GdDcIdLK2NemKm70BlXubiYsdaw%2F0hm5MElh%2BicKj212K%2FQjOwvRbdDDHtU3c7lrzI%2B94z1%2FTCpEZSu7yOGaLxNyUN%2Fxtf%2FHQ35HL97CDbAbAwQJCOWy6SMub3p4GDHhXGZN3D1toue21iRH5CtiZTskiyl5jrYtrly0O8iFLKlOc28r13Dg8pGbMZL2JCYudSFBV3v%2B092FtZMYdK4oKJuqilZEBf3YxlH9L1svYUJ3%2Bt0e0PMqS52lR3s9QoKItBp3%2F8yZtuV58dAGRxgTfL62y40vMW%2B7IlVR5areFzmpmTFOYoGvGC9frBQhHU24VorKbWT5i1fFH5hLDTLq5spOMaQzexwIDGfDg5JhpGd%2FU3JquBjM0%2FldyPuuk%2Fp9VsNbVVQ8B6N1f3O5zhk2sDCkR323F0jIcwaUQtF6SuSBFGiovzQalafffm%2FhEr%2B2z1qHLZPkCpLQ9%2FCQT523L4SdaJaZ1p5ya9tj7hDrLouqS6qGYrqUDnNMc59CnFHiKWCl1cmpLo%2FZtlepltCHIFvE5NLLGZvipe416tN85892eMlhqBVUIGmma%2BTlu0aQ8%2FfP5PkuwbL4G%2BYwstX3wAY6pgHERnkkgM53Bm7AaKnWjTFD6FmPCjv2II4kfy5yK6i9xmj2zD0gvDCkKb52d%2BzIRGJcqP6jpRrv%2F1kyL9NfimDyZFc2H6maf4sOWSpLj1sG%2FQ9ji1sVhjIbKjzpSqvTvx8OX2d2ecILa5vOZMN2whz7EsBdMqcbatFyd%2FI1IC6DleyCrX6Jhbxwc8IsjynLK2KZmADwxBGcsSR4iLv1ZyaYDzC3tGH%2B&X-Amz-Signature=5027fcce46c2d46561cfabdb001adcf80f5f3e000368183ec8a432d26c19e08d&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BWYQOS4%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDymhCjXLE6bU24g2Mi1123mhpuGh%2ByX7eicwtlDkcuAiBB5RldjYTkRJbYiCEnvz%2BvN1rE8sPUHjB3z9Zw7vilJCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTkOrlDSC%2FPrj17AeKtwDZimOezizy6dTrBT07bW1bjU1c1IlpskR8hVB0e9I5zo4GdDcIdLK2NemKm70BlXubiYsdaw%2F0hm5MElh%2BicKj212K%2FQjOwvRbdDDHtU3c7lrzI%2B94z1%2FTCpEZSu7yOGaLxNyUN%2Fxtf%2FHQ35HL97CDbAbAwQJCOWy6SMub3p4GDHhXGZN3D1toue21iRH5CtiZTskiyl5jrYtrly0O8iFLKlOc28r13Dg8pGbMZL2JCYudSFBV3v%2B092FtZMYdK4oKJuqilZEBf3YxlH9L1svYUJ3%2Bt0e0PMqS52lR3s9QoKItBp3%2F8yZtuV58dAGRxgTfL62y40vMW%2B7IlVR5areFzmpmTFOYoGvGC9frBQhHU24VorKbWT5i1fFH5hLDTLq5spOMaQzexwIDGfDg5JhpGd%2FU3JquBjM0%2FldyPuuk%2Fp9VsNbVVQ8B6N1f3O5zhk2sDCkR323F0jIcwaUQtF6SuSBFGiovzQalafffm%2FhEr%2B2z1qHLZPkCpLQ9%2FCQT523L4SdaJaZ1p5ya9tj7hDrLouqS6qGYrqUDnNMc59CnFHiKWCl1cmpLo%2FZtlepltCHIFvE5NLLGZvipe416tN85892eMlhqBVUIGmma%2BTlu0aQ8%2FfP5PkuwbL4G%2BYwstX3wAY6pgHERnkkgM53Bm7AaKnWjTFD6FmPCjv2II4kfy5yK6i9xmj2zD0gvDCkKb52d%2BzIRGJcqP6jpRrv%2F1kyL9NfimDyZFc2H6maf4sOWSpLj1sG%2FQ9ji1sVhjIbKjzpSqvTvx8OX2d2ecILa5vOZMN2whz7EsBdMqcbatFyd%2FI1IC6DleyCrX6Jhbxwc8IsjynLK2KZmADwxBGcsSR4iLv1ZyaYDzC3tGH%2B&X-Amz-Signature=c8b41cbffc7faa641e7dfac5ca4913f389e5648469764172a249251b503c3275&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BWYQOS4%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDymhCjXLE6bU24g2Mi1123mhpuGh%2ByX7eicwtlDkcuAiBB5RldjYTkRJbYiCEnvz%2BvN1rE8sPUHjB3z9Zw7vilJCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTkOrlDSC%2FPrj17AeKtwDZimOezizy6dTrBT07bW1bjU1c1IlpskR8hVB0e9I5zo4GdDcIdLK2NemKm70BlXubiYsdaw%2F0hm5MElh%2BicKj212K%2FQjOwvRbdDDHtU3c7lrzI%2B94z1%2FTCpEZSu7yOGaLxNyUN%2Fxtf%2FHQ35HL97CDbAbAwQJCOWy6SMub3p4GDHhXGZN3D1toue21iRH5CtiZTskiyl5jrYtrly0O8iFLKlOc28r13Dg8pGbMZL2JCYudSFBV3v%2B092FtZMYdK4oKJuqilZEBf3YxlH9L1svYUJ3%2Bt0e0PMqS52lR3s9QoKItBp3%2F8yZtuV58dAGRxgTfL62y40vMW%2B7IlVR5areFzmpmTFOYoGvGC9frBQhHU24VorKbWT5i1fFH5hLDTLq5spOMaQzexwIDGfDg5JhpGd%2FU3JquBjM0%2FldyPuuk%2Fp9VsNbVVQ8B6N1f3O5zhk2sDCkR323F0jIcwaUQtF6SuSBFGiovzQalafffm%2FhEr%2B2z1qHLZPkCpLQ9%2FCQT523L4SdaJaZ1p5ya9tj7hDrLouqS6qGYrqUDnNMc59CnFHiKWCl1cmpLo%2FZtlepltCHIFvE5NLLGZvipe416tN85892eMlhqBVUIGmma%2BTlu0aQ8%2FfP5PkuwbL4G%2BYwstX3wAY6pgHERnkkgM53Bm7AaKnWjTFD6FmPCjv2II4kfy5yK6i9xmj2zD0gvDCkKb52d%2BzIRGJcqP6jpRrv%2F1kyL9NfimDyZFc2H6maf4sOWSpLj1sG%2FQ9ji1sVhjIbKjzpSqvTvx8OX2d2ecILa5vOZMN2whz7EsBdMqcbatFyd%2FI1IC6DleyCrX6Jhbxwc8IsjynLK2KZmADwxBGcsSR4iLv1ZyaYDzC3tGH%2B&X-Amz-Signature=0a55680b8f07dc89aea584405dea9ef8fc8c8f71d26731fe46b73760fd1e6084&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
