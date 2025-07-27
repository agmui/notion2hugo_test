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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d328db1-6392-4c5f-9cd6-b1323b662127/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLTM65GI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIEmrpztoq9Nbs1PBsxS%2FsWGz%2FO2Bn5cZPAtjn3VuMTFuAiAq7WoXNkjC%2B2CSK9iH1zytIH%2Fd2GVX2H1gWDOky4lcqCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMa8Iyr96nseMR14bfKtwD44TKBJBD7Pl3WUn7%2BiLph5YM2r7kHVxQezNiVVI2VsLXqRbOMck7UmJ%2FnAvBIgstUU6NVztlr8x9iidY3uGBI8OIJN03Lf%2F35qaGL0AwR2ouRBY81UOBzDw%2FhiWdKl7iqJtETJ3osjIDYo0sjBQ0jy3vLLaFuBFHbzfNm7k6tuav6AMjLFj19VUp5W%2BCRzpuUDzCOxedwFls%2FNHmaJVvG6xYK5Iw6ASRfUbvQmnwG%2F3K8cYPmZsODdEAICr%2FBgsES98eeuammu3oVBnWalL7kQulooqtg5gz1z2ZUsstIYJjTyaFnADJkdjZDIxqtD%2F%2BAd7qIy4ggl5v64cp3dlmHQGu6Cj64Ou4qmxnkEZzlFM2aS5iOUz7pEuGscfeamGCA6qmr0U94%2FR4XyXQECLTVxWImS0rMF%2B6C6qWjszEe7Va5NKgqpUv%2BWAK2arsovQVs%2FDIGFjNnRE5EtbgayN%2BoocrpINmHlP0LSvaFJRtA5FmZKSHafe57tLLsKz8CYLsvMHLnGXCM%2BXcVnj8V0mTHQ5KCSPSTJ8hqQ99NAvfSlxWmSC152wXsnUpk%2Bn251Plka2Q8jrnwszMRDO4w5MVbQL2eTH7QHUKNe37TcyB3F8d4vn%2FwK5BFzGVSjMwkNuXxAY6pgHpdd5VXR1Z%2BCgKT4EbrhdCsn3crhtbtMELMStrRFUHUkvR%2FjPvqjZ7hV9XXRG7goyvdoMqbDH2qkoi%2FHPZmmD5wnaQLMkV57nh82preWlbo3jdjA9kmpFv3kfDaa9ittci%2F95McSRnMWVjs%2BGjKg2k3pPCpizdMqvVR9ifDX%2Blv%2Bgz85dcx4UXYb0WFRO8KgGnbVWMmWP2RQ7HeAYOINb7m8BcThXa&X-Amz-Signature=72d811561d20d7d6205f014f8cf44072eb9ceac343655943c558679dc6eed570&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6189b192-d86b-4219-a62b-5534bcdca7bf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLTM65GI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIEmrpztoq9Nbs1PBsxS%2FsWGz%2FO2Bn5cZPAtjn3VuMTFuAiAq7WoXNkjC%2B2CSK9iH1zytIH%2Fd2GVX2H1gWDOky4lcqCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMa8Iyr96nseMR14bfKtwD44TKBJBD7Pl3WUn7%2BiLph5YM2r7kHVxQezNiVVI2VsLXqRbOMck7UmJ%2FnAvBIgstUU6NVztlr8x9iidY3uGBI8OIJN03Lf%2F35qaGL0AwR2ouRBY81UOBzDw%2FhiWdKl7iqJtETJ3osjIDYo0sjBQ0jy3vLLaFuBFHbzfNm7k6tuav6AMjLFj19VUp5W%2BCRzpuUDzCOxedwFls%2FNHmaJVvG6xYK5Iw6ASRfUbvQmnwG%2F3K8cYPmZsODdEAICr%2FBgsES98eeuammu3oVBnWalL7kQulooqtg5gz1z2ZUsstIYJjTyaFnADJkdjZDIxqtD%2F%2BAd7qIy4ggl5v64cp3dlmHQGu6Cj64Ou4qmxnkEZzlFM2aS5iOUz7pEuGscfeamGCA6qmr0U94%2FR4XyXQECLTVxWImS0rMF%2B6C6qWjszEe7Va5NKgqpUv%2BWAK2arsovQVs%2FDIGFjNnRE5EtbgayN%2BoocrpINmHlP0LSvaFJRtA5FmZKSHafe57tLLsKz8CYLsvMHLnGXCM%2BXcVnj8V0mTHQ5KCSPSTJ8hqQ99NAvfSlxWmSC152wXsnUpk%2Bn251Plka2Q8jrnwszMRDO4w5MVbQL2eTH7QHUKNe37TcyB3F8d4vn%2FwK5BFzGVSjMwkNuXxAY6pgHpdd5VXR1Z%2BCgKT4EbrhdCsn3crhtbtMELMStrRFUHUkvR%2FjPvqjZ7hV9XXRG7goyvdoMqbDH2qkoi%2FHPZmmD5wnaQLMkV57nh82preWlbo3jdjA9kmpFv3kfDaa9ittci%2F95McSRnMWVjs%2BGjKg2k3pPCpizdMqvVR9ifDX%2Blv%2Bgz85dcx4UXYb0WFRO8KgGnbVWMmWP2RQ7HeAYOINb7m8BcThXa&X-Amz-Signature=01c4df382689fb6c868dce7acf47bb2b310545699d21feeaf59df46d9c7d10b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fa9516bb-acf5-4433-8387-74e413ced6fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLTM65GI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIEmrpztoq9Nbs1PBsxS%2FsWGz%2FO2Bn5cZPAtjn3VuMTFuAiAq7WoXNkjC%2B2CSK9iH1zytIH%2Fd2GVX2H1gWDOky4lcqCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMa8Iyr96nseMR14bfKtwD44TKBJBD7Pl3WUn7%2BiLph5YM2r7kHVxQezNiVVI2VsLXqRbOMck7UmJ%2FnAvBIgstUU6NVztlr8x9iidY3uGBI8OIJN03Lf%2F35qaGL0AwR2ouRBY81UOBzDw%2FhiWdKl7iqJtETJ3osjIDYo0sjBQ0jy3vLLaFuBFHbzfNm7k6tuav6AMjLFj19VUp5W%2BCRzpuUDzCOxedwFls%2FNHmaJVvG6xYK5Iw6ASRfUbvQmnwG%2F3K8cYPmZsODdEAICr%2FBgsES98eeuammu3oVBnWalL7kQulooqtg5gz1z2ZUsstIYJjTyaFnADJkdjZDIxqtD%2F%2BAd7qIy4ggl5v64cp3dlmHQGu6Cj64Ou4qmxnkEZzlFM2aS5iOUz7pEuGscfeamGCA6qmr0U94%2FR4XyXQECLTVxWImS0rMF%2B6C6qWjszEe7Va5NKgqpUv%2BWAK2arsovQVs%2FDIGFjNnRE5EtbgayN%2BoocrpINmHlP0LSvaFJRtA5FmZKSHafe57tLLsKz8CYLsvMHLnGXCM%2BXcVnj8V0mTHQ5KCSPSTJ8hqQ99NAvfSlxWmSC152wXsnUpk%2Bn251Plka2Q8jrnwszMRDO4w5MVbQL2eTH7QHUKNe37TcyB3F8d4vn%2FwK5BFzGVSjMwkNuXxAY6pgHpdd5VXR1Z%2BCgKT4EbrhdCsn3crhtbtMELMStrRFUHUkvR%2FjPvqjZ7hV9XXRG7goyvdoMqbDH2qkoi%2FHPZmmD5wnaQLMkV57nh82preWlbo3jdjA9kmpFv3kfDaa9ittci%2F95McSRnMWVjs%2BGjKg2k3pPCpizdMqvVR9ifDX%2Blv%2Bgz85dcx4UXYb0WFRO8KgGnbVWMmWP2RQ7HeAYOINb7m8BcThXa&X-Amz-Signature=7cde0dcbdd8c98e94a1af152c0094cc829635cd2589441d70e459019dcdb49b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`rqt_graph`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d81c820a-4071-4b15-87b0-5f19204a6d04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLTM65GI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIEmrpztoq9Nbs1PBsxS%2FsWGz%2FO2Bn5cZPAtjn3VuMTFuAiAq7WoXNkjC%2B2CSK9iH1zytIH%2Fd2GVX2H1gWDOky4lcqCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMa8Iyr96nseMR14bfKtwD44TKBJBD7Pl3WUn7%2BiLph5YM2r7kHVxQezNiVVI2VsLXqRbOMck7UmJ%2FnAvBIgstUU6NVztlr8x9iidY3uGBI8OIJN03Lf%2F35qaGL0AwR2ouRBY81UOBzDw%2FhiWdKl7iqJtETJ3osjIDYo0sjBQ0jy3vLLaFuBFHbzfNm7k6tuav6AMjLFj19VUp5W%2BCRzpuUDzCOxedwFls%2FNHmaJVvG6xYK5Iw6ASRfUbvQmnwG%2F3K8cYPmZsODdEAICr%2FBgsES98eeuammu3oVBnWalL7kQulooqtg5gz1z2ZUsstIYJjTyaFnADJkdjZDIxqtD%2F%2BAd7qIy4ggl5v64cp3dlmHQGu6Cj64Ou4qmxnkEZzlFM2aS5iOUz7pEuGscfeamGCA6qmr0U94%2FR4XyXQECLTVxWImS0rMF%2B6C6qWjszEe7Va5NKgqpUv%2BWAK2arsovQVs%2FDIGFjNnRE5EtbgayN%2BoocrpINmHlP0LSvaFJRtA5FmZKSHafe57tLLsKz8CYLsvMHLnGXCM%2BXcVnj8V0mTHQ5KCSPSTJ8hqQ99NAvfSlxWmSC152wXsnUpk%2Bn251Plka2Q8jrnwszMRDO4w5MVbQL2eTH7QHUKNe37TcyB3F8d4vn%2FwK5BFzGVSjMwkNuXxAY6pgHpdd5VXR1Z%2BCgKT4EbrhdCsn3crhtbtMELMStrRFUHUkvR%2FjPvqjZ7hV9XXRG7goyvdoMqbDH2qkoi%2FHPZmmD5wnaQLMkV57nh82preWlbo3jdjA9kmpFv3kfDaa9ittci%2F95McSRnMWVjs%2BGjKg2k3pPCpizdMqvVR9ifDX%2Blv%2Bgz85dcx4UXYb0WFRO8KgGnbVWMmWP2RQ7HeAYOINb7m8BcThXa&X-Amz-Signature=7c454f673a1852f9bd16af195b5096d5d98deae10b3e0230ca1f6f7141409958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 service list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e3cccdf5-7b48-47b3-a691-d6d3ffcc58f4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLTM65GI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIEmrpztoq9Nbs1PBsxS%2FsWGz%2FO2Bn5cZPAtjn3VuMTFuAiAq7WoXNkjC%2B2CSK9iH1zytIH%2Fd2GVX2H1gWDOky4lcqCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMa8Iyr96nseMR14bfKtwD44TKBJBD7Pl3WUn7%2BiLph5YM2r7kHVxQezNiVVI2VsLXqRbOMck7UmJ%2FnAvBIgstUU6NVztlr8x9iidY3uGBI8OIJN03Lf%2F35qaGL0AwR2ouRBY81UOBzDw%2FhiWdKl7iqJtETJ3osjIDYo0sjBQ0jy3vLLaFuBFHbzfNm7k6tuav6AMjLFj19VUp5W%2BCRzpuUDzCOxedwFls%2FNHmaJVvG6xYK5Iw6ASRfUbvQmnwG%2F3K8cYPmZsODdEAICr%2FBgsES98eeuammu3oVBnWalL7kQulooqtg5gz1z2ZUsstIYJjTyaFnADJkdjZDIxqtD%2F%2BAd7qIy4ggl5v64cp3dlmHQGu6Cj64Ou4qmxnkEZzlFM2aS5iOUz7pEuGscfeamGCA6qmr0U94%2FR4XyXQECLTVxWImS0rMF%2B6C6qWjszEe7Va5NKgqpUv%2BWAK2arsovQVs%2FDIGFjNnRE5EtbgayN%2BoocrpINmHlP0LSvaFJRtA5FmZKSHafe57tLLsKz8CYLsvMHLnGXCM%2BXcVnj8V0mTHQ5KCSPSTJ8hqQ99NAvfSlxWmSC152wXsnUpk%2Bn251Plka2Q8jrnwszMRDO4w5MVbQL2eTH7QHUKNe37TcyB3F8d4vn%2FwK5BFzGVSjMwkNuXxAY6pgHpdd5VXR1Z%2BCgKT4EbrhdCsn3crhtbtMELMStrRFUHUkvR%2FjPvqjZ7hV9XXRG7goyvdoMqbDH2qkoi%2FHPZmmD5wnaQLMkV57nh82preWlbo3jdjA9kmpFv3kfDaa9ittci%2F95McSRnMWVjs%2BGjKg2k3pPCpizdMqvVR9ifDX%2Blv%2Bgz85dcx4UXYb0WFRO8KgGnbVWMmWP2RQ7HeAYOINb7m8BcThXa&X-Amz-Signature=17bb0fe2780976ca0077ac7ea0077c72ff553433f4d3f2d8ad9eb6057e922b95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# More Exercises!!!! ( YAYYYY :D )

- simple Rock Paper Scissors
- simple Hangman
