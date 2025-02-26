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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF23D2F7%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDt6uQ8Wk5yDfVJEEPF3l9r%2B%2BD7MDp2fLXpg7Nxnvj%2F7gIhAP0q2VAEqPJum7jX0f2jBrRSzP2EUhgLBy%2FVo5L1jCDwKv8DCGMQABoMNjM3NDIzMTgzODA1Igy6EFvrtDqAKyW0sQIq3AOk86LmXOAo%2FlV2xr%2BHQfh%2Bw4a%2F1UeKPrvKqQas5E7AGUALiKFC2qv4tjZlyrB1RVTXVCMlFEitn6DRfz%2FVU%2FDgLvI6T4quslTJFtR9WxdyVVndy9H6m3VMul5aOd3mTnHrOkkA3vHFKLc2PIee3yewztpifOQmbBzdstYICrzES3YIoyJSUGxP2rkpCWYbe9FjVI5HGEt%2FopKeM%2FZwSDUP0lIid4ZIuprvTYq7kxJhjgZW5HQHydjfYfwoweJKq0eW7NdNFyyfEq8qFgSAtazKKhcVLnjGiAEVcWkryVVX6qtkzBagQCoS9HRbXlDVfvczqu2TVoPv4rQFu3Jv7hHhSuK%2Fz1TnuD54Hm3bNP4y2f4BJ8m1f9FmRiGa6VV6x2Ed6%2F%2BAzW0QCg%2FQk%2FAry%2FHsEP%2F3mEvjwoxYCPNl%2BkDaDJp9VTrSQiafmVjEdyEI%2Bk6z11jhNHTVDNvSY40bTpb9BEI9pe%2F2F%2FHmHCrHn2o1BR3NCLtuAydhmCgY1W72btTjY5YhCburDYGCTuXocwHo%2FOR%2FTNrT%2B60Z4eAoMHjbFjoWQLq%2Fn4LNsRrQ1cPrjEOUDXtJCh6dZa78aDhN6YALSCZ%2ByYnGtAsiF8ebq3RPBIslog22Epi6seyQ4zCep%2F29BjqkAb9S9kBiWODcwSvDViAqQ8hmuvQKfjZbpVqRGnn8yppji87Rp%2F1Iha5%2BvZThMhBET1ZeCmSbBDRtOBYRha7aUm3Uo126uMnChVvykLm5U1%2F8Y%2BW%2FjDVSK722s8sEs5993P7FAKYYzXBGBw48PChi%2FAPSYSUjiOCliZr5NpBwgLLjwfQ9NLPgSFjKilXmX6Pd59uId6sFmkHsS8HIK16vldp9mMrn&X-Amz-Signature=87a033c350e11a00fe688019879a485d3153de8fc84335445ed0baffbf5d48cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF23D2F7%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDt6uQ8Wk5yDfVJEEPF3l9r%2B%2BD7MDp2fLXpg7Nxnvj%2F7gIhAP0q2VAEqPJum7jX0f2jBrRSzP2EUhgLBy%2FVo5L1jCDwKv8DCGMQABoMNjM3NDIzMTgzODA1Igy6EFvrtDqAKyW0sQIq3AOk86LmXOAo%2FlV2xr%2BHQfh%2Bw4a%2F1UeKPrvKqQas5E7AGUALiKFC2qv4tjZlyrB1RVTXVCMlFEitn6DRfz%2FVU%2FDgLvI6T4quslTJFtR9WxdyVVndy9H6m3VMul5aOd3mTnHrOkkA3vHFKLc2PIee3yewztpifOQmbBzdstYICrzES3YIoyJSUGxP2rkpCWYbe9FjVI5HGEt%2FopKeM%2FZwSDUP0lIid4ZIuprvTYq7kxJhjgZW5HQHydjfYfwoweJKq0eW7NdNFyyfEq8qFgSAtazKKhcVLnjGiAEVcWkryVVX6qtkzBagQCoS9HRbXlDVfvczqu2TVoPv4rQFu3Jv7hHhSuK%2Fz1TnuD54Hm3bNP4y2f4BJ8m1f9FmRiGa6VV6x2Ed6%2F%2BAzW0QCg%2FQk%2FAry%2FHsEP%2F3mEvjwoxYCPNl%2BkDaDJp9VTrSQiafmVjEdyEI%2Bk6z11jhNHTVDNvSY40bTpb9BEI9pe%2F2F%2FHmHCrHn2o1BR3NCLtuAydhmCgY1W72btTjY5YhCburDYGCTuXocwHo%2FOR%2FTNrT%2B60Z4eAoMHjbFjoWQLq%2Fn4LNsRrQ1cPrjEOUDXtJCh6dZa78aDhN6YALSCZ%2ByYnGtAsiF8ebq3RPBIslog22Epi6seyQ4zCep%2F29BjqkAb9S9kBiWODcwSvDViAqQ8hmuvQKfjZbpVqRGnn8yppji87Rp%2F1Iha5%2BvZThMhBET1ZeCmSbBDRtOBYRha7aUm3Uo126uMnChVvykLm5U1%2F8Y%2BW%2FjDVSK722s8sEs5993P7FAKYYzXBGBw48PChi%2FAPSYSUjiOCliZr5NpBwgLLjwfQ9NLPgSFjKilXmX6Pd59uId6sFmkHsS8HIK16vldp9mMrn&X-Amz-Signature=721f9dabc8790b331e4ab397c2866c27eb834d2ad9b7a9a410d778d87391c793&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF23D2F7%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDt6uQ8Wk5yDfVJEEPF3l9r%2B%2BD7MDp2fLXpg7Nxnvj%2F7gIhAP0q2VAEqPJum7jX0f2jBrRSzP2EUhgLBy%2FVo5L1jCDwKv8DCGMQABoMNjM3NDIzMTgzODA1Igy6EFvrtDqAKyW0sQIq3AOk86LmXOAo%2FlV2xr%2BHQfh%2Bw4a%2F1UeKPrvKqQas5E7AGUALiKFC2qv4tjZlyrB1RVTXVCMlFEitn6DRfz%2FVU%2FDgLvI6T4quslTJFtR9WxdyVVndy9H6m3VMul5aOd3mTnHrOkkA3vHFKLc2PIee3yewztpifOQmbBzdstYICrzES3YIoyJSUGxP2rkpCWYbe9FjVI5HGEt%2FopKeM%2FZwSDUP0lIid4ZIuprvTYq7kxJhjgZW5HQHydjfYfwoweJKq0eW7NdNFyyfEq8qFgSAtazKKhcVLnjGiAEVcWkryVVX6qtkzBagQCoS9HRbXlDVfvczqu2TVoPv4rQFu3Jv7hHhSuK%2Fz1TnuD54Hm3bNP4y2f4BJ8m1f9FmRiGa6VV6x2Ed6%2F%2BAzW0QCg%2FQk%2FAry%2FHsEP%2F3mEvjwoxYCPNl%2BkDaDJp9VTrSQiafmVjEdyEI%2Bk6z11jhNHTVDNvSY40bTpb9BEI9pe%2F2F%2FHmHCrHn2o1BR3NCLtuAydhmCgY1W72btTjY5YhCburDYGCTuXocwHo%2FOR%2FTNrT%2B60Z4eAoMHjbFjoWQLq%2Fn4LNsRrQ1cPrjEOUDXtJCh6dZa78aDhN6YALSCZ%2ByYnGtAsiF8ebq3RPBIslog22Epi6seyQ4zCep%2F29BjqkAb9S9kBiWODcwSvDViAqQ8hmuvQKfjZbpVqRGnn8yppji87Rp%2F1Iha5%2BvZThMhBET1ZeCmSbBDRtOBYRha7aUm3Uo126uMnChVvykLm5U1%2F8Y%2BW%2FjDVSK722s8sEs5993P7FAKYYzXBGBw48PChi%2FAPSYSUjiOCliZr5NpBwgLLjwfQ9NLPgSFjKilXmX6Pd59uId6sFmkHsS8HIK16vldp9mMrn&X-Amz-Signature=301fd4f6a634ef1477a6631d76d5758cf5e22bd5a84469d4c5a0719fc8db6737&X-Amz-SignedHeaders=host&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF23D2F7%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDt6uQ8Wk5yDfVJEEPF3l9r%2B%2BD7MDp2fLXpg7Nxnvj%2F7gIhAP0q2VAEqPJum7jX0f2jBrRSzP2EUhgLBy%2FVo5L1jCDwKv8DCGMQABoMNjM3NDIzMTgzODA1Igy6EFvrtDqAKyW0sQIq3AOk86LmXOAo%2FlV2xr%2BHQfh%2Bw4a%2F1UeKPrvKqQas5E7AGUALiKFC2qv4tjZlyrB1RVTXVCMlFEitn6DRfz%2FVU%2FDgLvI6T4quslTJFtR9WxdyVVndy9H6m3VMul5aOd3mTnHrOkkA3vHFKLc2PIee3yewztpifOQmbBzdstYICrzES3YIoyJSUGxP2rkpCWYbe9FjVI5HGEt%2FopKeM%2FZwSDUP0lIid4ZIuprvTYq7kxJhjgZW5HQHydjfYfwoweJKq0eW7NdNFyyfEq8qFgSAtazKKhcVLnjGiAEVcWkryVVX6qtkzBagQCoS9HRbXlDVfvczqu2TVoPv4rQFu3Jv7hHhSuK%2Fz1TnuD54Hm3bNP4y2f4BJ8m1f9FmRiGa6VV6x2Ed6%2F%2BAzW0QCg%2FQk%2FAry%2FHsEP%2F3mEvjwoxYCPNl%2BkDaDJp9VTrSQiafmVjEdyEI%2Bk6z11jhNHTVDNvSY40bTpb9BEI9pe%2F2F%2FHmHCrHn2o1BR3NCLtuAydhmCgY1W72btTjY5YhCburDYGCTuXocwHo%2FOR%2FTNrT%2B60Z4eAoMHjbFjoWQLq%2Fn4LNsRrQ1cPrjEOUDXtJCh6dZa78aDhN6YALSCZ%2ByYnGtAsiF8ebq3RPBIslog22Epi6seyQ4zCep%2F29BjqkAb9S9kBiWODcwSvDViAqQ8hmuvQKfjZbpVqRGnn8yppji87Rp%2F1Iha5%2BvZThMhBET1ZeCmSbBDRtOBYRha7aUm3Uo126uMnChVvykLm5U1%2F8Y%2BW%2FjDVSK722s8sEs5993P7FAKYYzXBGBw48PChi%2FAPSYSUjiOCliZr5NpBwgLLjwfQ9NLPgSFjKilXmX6Pd59uId6sFmkHsS8HIK16vldp9mMrn&X-Amz-Signature=ee117f7d08888c0190ef8947e73a194071c2e9cd2ba5b7be4058b4189e5067b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF23D2F7%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDt6uQ8Wk5yDfVJEEPF3l9r%2B%2BD7MDp2fLXpg7Nxnvj%2F7gIhAP0q2VAEqPJum7jX0f2jBrRSzP2EUhgLBy%2FVo5L1jCDwKv8DCGMQABoMNjM3NDIzMTgzODA1Igy6EFvrtDqAKyW0sQIq3AOk86LmXOAo%2FlV2xr%2BHQfh%2Bw4a%2F1UeKPrvKqQas5E7AGUALiKFC2qv4tjZlyrB1RVTXVCMlFEitn6DRfz%2FVU%2FDgLvI6T4quslTJFtR9WxdyVVndy9H6m3VMul5aOd3mTnHrOkkA3vHFKLc2PIee3yewztpifOQmbBzdstYICrzES3YIoyJSUGxP2rkpCWYbe9FjVI5HGEt%2FopKeM%2FZwSDUP0lIid4ZIuprvTYq7kxJhjgZW5HQHydjfYfwoweJKq0eW7NdNFyyfEq8qFgSAtazKKhcVLnjGiAEVcWkryVVX6qtkzBagQCoS9HRbXlDVfvczqu2TVoPv4rQFu3Jv7hHhSuK%2Fz1TnuD54Hm3bNP4y2f4BJ8m1f9FmRiGa6VV6x2Ed6%2F%2BAzW0QCg%2FQk%2FAry%2FHsEP%2F3mEvjwoxYCPNl%2BkDaDJp9VTrSQiafmVjEdyEI%2Bk6z11jhNHTVDNvSY40bTpb9BEI9pe%2F2F%2FHmHCrHn2o1BR3NCLtuAydhmCgY1W72btTjY5YhCburDYGCTuXocwHo%2FOR%2FTNrT%2B60Z4eAoMHjbFjoWQLq%2Fn4LNsRrQ1cPrjEOUDXtJCh6dZa78aDhN6YALSCZ%2ByYnGtAsiF8ebq3RPBIslog22Epi6seyQ4zCep%2F29BjqkAb9S9kBiWODcwSvDViAqQ8hmuvQKfjZbpVqRGnn8yppji87Rp%2F1Iha5%2BvZThMhBET1ZeCmSbBDRtOBYRha7aUm3Uo126uMnChVvykLm5U1%2F8Y%2BW%2FjDVSK722s8sEs5993P7FAKYYzXBGBw48PChi%2FAPSYSUjiOCliZr5NpBwgLLjwfQ9NLPgSFjKilXmX6Pd59uId6sFmkHsS8HIK16vldp9mMrn&X-Amz-Signature=717c0edfbb5f32e7746b296c11f395f5617263d1874c25de97b11413fbda77c9&X-Amz-SignedHeaders=host&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
