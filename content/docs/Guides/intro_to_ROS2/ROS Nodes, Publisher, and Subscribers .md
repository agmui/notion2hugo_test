---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-01-28T20:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-01-28T20:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 142
toc: false
icon: ""
---

The basic building blocks of ROS are nodes. (referred to as ROS Nodes)

Here is a more in-depth description if interested: [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/ready-for-ros/ros-overview#2-nodes)

Think of them as online accounts where any node can publish posts to some topic and any account can subscribe to any topic to receive updates on new posts.

![Topic-SinglePublisherandSingleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-SinglePublisherandSingleSubscriber.gif)

![Topic-MultiplePublisherandMultipleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-MultiplePublisherandMultipleSubscriber.gif)

Let's create a basic example of one publisher node and one subscriber node.

All the publisher will do is send the message `Hello World` over and over again to a topic and the subscriber node will listen to the topic and print out the result.

# Publisher

create a file called `publisher.py` 

inside import the `ROS` libraries:

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String
```

Then create a class called `MinimalPublisher` and have it extend the `Node` class we imported.

Then in the constructor, we first run the parent class’s constructor, `Node`, with:

The string we pass in is the name of the node

```python
        super().__init__("minimal_publisher")
```

Then we create a publisher object and a timer object:

```python
        self.publisher_ = self.create_publisher(String, "my_topic", 10)
        self.timer = self.create_timer(0.5, self.timer_callback)
```

The publisher object is what actually sends the message `"Hello World"` to the topic `my_topic` it takes in the message type, the topic to publish to, and its QoS profile (don't worry about this).

The timer object is to call the function `timer_callback` every 0.5 seconds.

Now let us create the function `timer_callback` and have it send `"Hello World"`

```python
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = "Hello World"                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info("Publishing: " + msg.data)   # print msg
```

We first create a `msg` object and fill it with the string `"Hello World"`

Then we actually publish the `msg` with `self.publisher_.publish(msg)`

finally we printout `self.get_logger().info("Publishing: " + msg.data)`

To run the node go outside of the class and add the following

```python
def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()

# makes it so that it only runs the main function
# when the file is being called directly
if __name__ == '__main__': 
    main()
```

## Solution

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10)
        self.timer = self.create_timer(0.5, self.timer_callback)

    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = 'Hello World'                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info('Publishing: ' + msg.data)   # print msg


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

run with: `python3 publisher.py` in the terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH7BWAWQ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIHlzIlH7UzW%2F5gSF3E5CU5Xl7YlzJBQ71LKd8iaH3QfaAiAjNwfCwsp0fsWIxkr6g9f9N%2B%2F8MwT1nNpdJuOZFRgklCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcXUK9nL3nxcWsYEyKtwDVyrzRkhjCRR%2FWHbK0EjlIQG5q%2BbLKKdg5JwImiujQGQX6X7ScLoQ13z0nF7aNYvDOYhZbgYdZ0VWkyyWxtR8WZp8mGPms5ACZh%2BAhXoYuc8%2Bm955iQLdBKrMLmqCh%2Fy%2FASFNnnlXar1hHbzs%2BVkLNCROOndrJOxUrBefGhpFs0r4AGHS0a7mQJVVRBQrCWUqimwTExJfNyJuQaIzdAURCfwXNXVkLVxhhEvdNAJgpBVq504EINcTrFh14Y0ZUYK3uyKT5ZPUUE0dcnUvndg9YiCrcfqyFqKIzOEslPdWXWzMwcxBuJRfxI6GiZmyckk6hfpDxN27hSM%2BUrc3nzS2FeDYdBH6QcU%2BkWlsYemP5%2FoR6lueliqAeJUlQylzm2HFh0jBj43zmOjmabUx8fdSOjBdSbsdAXIRd%2BpEeUkBd42EyDfCs68k3UnphHDIFUKtjAAHqIC9jTViCbk%2FpRn4DNWsDPpUemtWl8LZsy%2FCN2OfOypvhri5%2F9uQOWg0gncUlKPaUahVTo0VsK5ej1FwRlAn6Kjs7Qw6EfVJFi0YYteK3PeNICVfQ5rx%2BLCe3BJQIsypOUc2dyHBotoLR0St9vm8UqAfwmdv6C9HxgnsdT4oN6h6bZTtft2P2aow1NesvwY6pgGpRp%2BXZT%2Fn4csxDMjlMpQfUL2cs0hFqaj%2BOhi02DhBinQVpAXtCeHQaH5gASUZhrBoxEh%2FLc9%2FrymMm3OKSeSX0hv0MpZ6ORDflC7Baozdq5ZvdsbT%2FqyQ6Hqp77kah5FXxRwAzgJxHjQejlBX3erX0cVZPeX5WC1qRPFvlhNFDbD1j2vF3rOAo%2FXDwqS6jEoIBgZ5u0UieYgasWjJeFppocCtb%2BuJ&X-Amz-Signature=e768597c0bea3f01bf48f919b2071db325ddfc73eaa6f834e3752f61ce49a542&X-Amz-SignedHeaders=host&x-id=GetObject)

To stop the programs do `ctrl+c`

# Subscribers

create a file called `subscriber.py` and paste the following

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalSubscriber(Node):

    def __init__(self):
        super().__init__('minimal_subscriber')
        self.subscription = self.create_subscription(String, 'my_topic', self.listener_callback, 10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info('I heard: "%s"' % msg.data)


def main():
    rclpy.init()                                # initializes the rclpy library

    minimal_subscriber = MinimalSubscriber()

    rclpy.spin(minimal_subscriber)

    # Destroy the node explicitly
    minimal_subscriber.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Then while running `python3` [`publisher.py`](http://publisher.py/)open a new terminal and run: `python3 subscriber.py` 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH7BWAWQ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIHlzIlH7UzW%2F5gSF3E5CU5Xl7YlzJBQ71LKd8iaH3QfaAiAjNwfCwsp0fsWIxkr6g9f9N%2B%2F8MwT1nNpdJuOZFRgklCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcXUK9nL3nxcWsYEyKtwDVyrzRkhjCRR%2FWHbK0EjlIQG5q%2BbLKKdg5JwImiujQGQX6X7ScLoQ13z0nF7aNYvDOYhZbgYdZ0VWkyyWxtR8WZp8mGPms5ACZh%2BAhXoYuc8%2Bm955iQLdBKrMLmqCh%2Fy%2FASFNnnlXar1hHbzs%2BVkLNCROOndrJOxUrBefGhpFs0r4AGHS0a7mQJVVRBQrCWUqimwTExJfNyJuQaIzdAURCfwXNXVkLVxhhEvdNAJgpBVq504EINcTrFh14Y0ZUYK3uyKT5ZPUUE0dcnUvndg9YiCrcfqyFqKIzOEslPdWXWzMwcxBuJRfxI6GiZmyckk6hfpDxN27hSM%2BUrc3nzS2FeDYdBH6QcU%2BkWlsYemP5%2FoR6lueliqAeJUlQylzm2HFh0jBj43zmOjmabUx8fdSOjBdSbsdAXIRd%2BpEeUkBd42EyDfCs68k3UnphHDIFUKtjAAHqIC9jTViCbk%2FpRn4DNWsDPpUemtWl8LZsy%2FCN2OfOypvhri5%2F9uQOWg0gncUlKPaUahVTo0VsK5ej1FwRlAn6Kjs7Qw6EfVJFi0YYteK3PeNICVfQ5rx%2BLCe3BJQIsypOUc2dyHBotoLR0St9vm8UqAfwmdv6C9HxgnsdT4oN6h6bZTtft2P2aow1NesvwY6pgGpRp%2BXZT%2Fn4csxDMjlMpQfUL2cs0hFqaj%2BOhi02DhBinQVpAXtCeHQaH5gASUZhrBoxEh%2FLc9%2FrymMm3OKSeSX0hv0MpZ6ORDflC7Baozdq5ZvdsbT%2FqyQ6Hqp77kah5FXxRwAzgJxHjQejlBX3erX0cVZPeX5WC1qRPFvlhNFDbD1j2vF3rOAo%2FXDwqS6jEoIBgZ5u0UieYgasWjJeFppocCtb%2BuJ&X-Amz-Signature=1299bfb14ab0d869892f995191d2bbc97e215c4d8f0fccb66b6d2d14ce527d75&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH7BWAWQ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIHlzIlH7UzW%2F5gSF3E5CU5Xl7YlzJBQ71LKd8iaH3QfaAiAjNwfCwsp0fsWIxkr6g9f9N%2B%2F8MwT1nNpdJuOZFRgklCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcXUK9nL3nxcWsYEyKtwDVyrzRkhjCRR%2FWHbK0EjlIQG5q%2BbLKKdg5JwImiujQGQX6X7ScLoQ13z0nF7aNYvDOYhZbgYdZ0VWkyyWxtR8WZp8mGPms5ACZh%2BAhXoYuc8%2Bm955iQLdBKrMLmqCh%2Fy%2FASFNnnlXar1hHbzs%2BVkLNCROOndrJOxUrBefGhpFs0r4AGHS0a7mQJVVRBQrCWUqimwTExJfNyJuQaIzdAURCfwXNXVkLVxhhEvdNAJgpBVq504EINcTrFh14Y0ZUYK3uyKT5ZPUUE0dcnUvndg9YiCrcfqyFqKIzOEslPdWXWzMwcxBuJRfxI6GiZmyckk6hfpDxN27hSM%2BUrc3nzS2FeDYdBH6QcU%2BkWlsYemP5%2FoR6lueliqAeJUlQylzm2HFh0jBj43zmOjmabUx8fdSOjBdSbsdAXIRd%2BpEeUkBd42EyDfCs68k3UnphHDIFUKtjAAHqIC9jTViCbk%2FpRn4DNWsDPpUemtWl8LZsy%2FCN2OfOypvhri5%2F9uQOWg0gncUlKPaUahVTo0VsK5ej1FwRlAn6Kjs7Qw6EfVJFi0YYteK3PeNICVfQ5rx%2BLCe3BJQIsypOUc2dyHBotoLR0St9vm8UqAfwmdv6C9HxgnsdT4oN6h6bZTtft2P2aow1NesvwY6pgGpRp%2BXZT%2Fn4csxDMjlMpQfUL2cs0hFqaj%2BOhi02DhBinQVpAXtCeHQaH5gASUZhrBoxEh%2FLc9%2FrymMm3OKSeSX0hv0MpZ6ORDflC7Baozdq5ZvdsbT%2FqyQ6Hqp77kah5FXxRwAzgJxHjQejlBX3erX0cVZPeX5WC1qRPFvlhNFDbD1j2vF3rOAo%2FXDwqS6jEoIBgZ5u0UieYgasWjJeFppocCtb%2BuJ&X-Amz-Signature=8dc4b3e13a9903993e88d72470ff67a4d0604cf6253b5d67f8856c10cbf771ec&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH7BWAWQ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIHlzIlH7UzW%2F5gSF3E5CU5Xl7YlzJBQ71LKd8iaH3QfaAiAjNwfCwsp0fsWIxkr6g9f9N%2B%2F8MwT1nNpdJuOZFRgklCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcXUK9nL3nxcWsYEyKtwDVyrzRkhjCRR%2FWHbK0EjlIQG5q%2BbLKKdg5JwImiujQGQX6X7ScLoQ13z0nF7aNYvDOYhZbgYdZ0VWkyyWxtR8WZp8mGPms5ACZh%2BAhXoYuc8%2Bm955iQLdBKrMLmqCh%2Fy%2FASFNnnlXar1hHbzs%2BVkLNCROOndrJOxUrBefGhpFs0r4AGHS0a7mQJVVRBQrCWUqimwTExJfNyJuQaIzdAURCfwXNXVkLVxhhEvdNAJgpBVq504EINcTrFh14Y0ZUYK3uyKT5ZPUUE0dcnUvndg9YiCrcfqyFqKIzOEslPdWXWzMwcxBuJRfxI6GiZmyckk6hfpDxN27hSM%2BUrc3nzS2FeDYdBH6QcU%2BkWlsYemP5%2FoR6lueliqAeJUlQylzm2HFh0jBj43zmOjmabUx8fdSOjBdSbsdAXIRd%2BpEeUkBd42EyDfCs68k3UnphHDIFUKtjAAHqIC9jTViCbk%2FpRn4DNWsDPpUemtWl8LZsy%2FCN2OfOypvhri5%2F9uQOWg0gncUlKPaUahVTo0VsK5ej1FwRlAn6Kjs7Qw6EfVJFi0YYteK3PeNICVfQ5rx%2BLCe3BJQIsypOUc2dyHBotoLR0St9vm8UqAfwmdv6C9HxgnsdT4oN6h6bZTtft2P2aow1NesvwY6pgGpRp%2BXZT%2Fn4csxDMjlMpQfUL2cs0hFqaj%2BOhi02DhBinQVpAXtCeHQaH5gASUZhrBoxEh%2FLc9%2FrymMm3OKSeSX0hv0MpZ6ORDflC7Baozdq5ZvdsbT%2FqyQ6Hqp77kah5FXxRwAzgJxHjQejlBX3erX0cVZPeX5WC1qRPFvlhNFDbD1j2vF3rOAo%2FXDwqS6jEoIBgZ5u0UieYgasWjJeFppocCtb%2BuJ&X-Amz-Signature=2ae55728732efa41791438d3981a38ad423102dbd60d24d3bb52471ecd0db24d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH7BWAWQ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIHlzIlH7UzW%2F5gSF3E5CU5Xl7YlzJBQ71LKd8iaH3QfaAiAjNwfCwsp0fsWIxkr6g9f9N%2B%2F8MwT1nNpdJuOZFRgklCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcXUK9nL3nxcWsYEyKtwDVyrzRkhjCRR%2FWHbK0EjlIQG5q%2BbLKKdg5JwImiujQGQX6X7ScLoQ13z0nF7aNYvDOYhZbgYdZ0VWkyyWxtR8WZp8mGPms5ACZh%2BAhXoYuc8%2Bm955iQLdBKrMLmqCh%2Fy%2FASFNnnlXar1hHbzs%2BVkLNCROOndrJOxUrBefGhpFs0r4AGHS0a7mQJVVRBQrCWUqimwTExJfNyJuQaIzdAURCfwXNXVkLVxhhEvdNAJgpBVq504EINcTrFh14Y0ZUYK3uyKT5ZPUUE0dcnUvndg9YiCrcfqyFqKIzOEslPdWXWzMwcxBuJRfxI6GiZmyckk6hfpDxN27hSM%2BUrc3nzS2FeDYdBH6QcU%2BkWlsYemP5%2FoR6lueliqAeJUlQylzm2HFh0jBj43zmOjmabUx8fdSOjBdSbsdAXIRd%2BpEeUkBd42EyDfCs68k3UnphHDIFUKtjAAHqIC9jTViCbk%2FpRn4DNWsDPpUemtWl8LZsy%2FCN2OfOypvhri5%2F9uQOWg0gncUlKPaUahVTo0VsK5ej1FwRlAn6Kjs7Qw6EfVJFi0YYteK3PeNICVfQ5rx%2BLCe3BJQIsypOUc2dyHBotoLR0St9vm8UqAfwmdv6C9HxgnsdT4oN6h6bZTtft2P2aow1NesvwY6pgGpRp%2BXZT%2Fn4csxDMjlMpQfUL2cs0hFqaj%2BOhi02DhBinQVpAXtCeHQaH5gASUZhrBoxEh%2FLc9%2FrymMm3OKSeSX0hv0MpZ6ORDflC7Baozdq5ZvdsbT%2FqyQ6Hqp77kah5FXxRwAzgJxHjQejlBX3erX0cVZPeX5WC1qRPFvlhNFDbD1j2vF3rOAo%2FXDwqS6jEoIBgZ5u0UieYgasWjJeFppocCtb%2BuJ&X-Amz-Signature=500f6e2a79606b32b31d728e675474658aaf8dd9ad7f3cad98f5b4d260f24525&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH7BWAWQ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIHlzIlH7UzW%2F5gSF3E5CU5Xl7YlzJBQ71LKd8iaH3QfaAiAjNwfCwsp0fsWIxkr6g9f9N%2B%2F8MwT1nNpdJuOZFRgklCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcXUK9nL3nxcWsYEyKtwDVyrzRkhjCRR%2FWHbK0EjlIQG5q%2BbLKKdg5JwImiujQGQX6X7ScLoQ13z0nF7aNYvDOYhZbgYdZ0VWkyyWxtR8WZp8mGPms5ACZh%2BAhXoYuc8%2Bm955iQLdBKrMLmqCh%2Fy%2FASFNnnlXar1hHbzs%2BVkLNCROOndrJOxUrBefGhpFs0r4AGHS0a7mQJVVRBQrCWUqimwTExJfNyJuQaIzdAURCfwXNXVkLVxhhEvdNAJgpBVq504EINcTrFh14Y0ZUYK3uyKT5ZPUUE0dcnUvndg9YiCrcfqyFqKIzOEslPdWXWzMwcxBuJRfxI6GiZmyckk6hfpDxN27hSM%2BUrc3nzS2FeDYdBH6QcU%2BkWlsYemP5%2FoR6lueliqAeJUlQylzm2HFh0jBj43zmOjmabUx8fdSOjBdSbsdAXIRd%2BpEeUkBd42EyDfCs68k3UnphHDIFUKtjAAHqIC9jTViCbk%2FpRn4DNWsDPpUemtWl8LZsy%2FCN2OfOypvhri5%2F9uQOWg0gncUlKPaUahVTo0VsK5ej1FwRlAn6Kjs7Qw6EfVJFi0YYteK3PeNICVfQ5rx%2BLCe3BJQIsypOUc2dyHBotoLR0St9vm8UqAfwmdv6C9HxgnsdT4oN6h6bZTtft2P2aow1NesvwY6pgGpRp%2BXZT%2Fn4csxDMjlMpQfUL2cs0hFqaj%2BOhi02DhBinQVpAXtCeHQaH5gASUZhrBoxEh%2FLc9%2FrymMm3OKSeSX0hv0MpZ6ORDflC7Baozdq5ZvdsbT%2FqyQ6Hqp77kah5FXxRwAzgJxHjQejlBX3erX0cVZPeX5WC1qRPFvlhNFDbD1j2vF3rOAo%2FXDwqS6jEoIBgZ5u0UieYgasWjJeFppocCtb%2BuJ&X-Amz-Signature=fad7f6a669004596d2d1f6e035b028396aac6f23b5aa42f84083619cb9e405c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH7BWAWQ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIHlzIlH7UzW%2F5gSF3E5CU5Xl7YlzJBQ71LKd8iaH3QfaAiAjNwfCwsp0fsWIxkr6g9f9N%2B%2F8MwT1nNpdJuOZFRgklCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcXUK9nL3nxcWsYEyKtwDVyrzRkhjCRR%2FWHbK0EjlIQG5q%2BbLKKdg5JwImiujQGQX6X7ScLoQ13z0nF7aNYvDOYhZbgYdZ0VWkyyWxtR8WZp8mGPms5ACZh%2BAhXoYuc8%2Bm955iQLdBKrMLmqCh%2Fy%2FASFNnnlXar1hHbzs%2BVkLNCROOndrJOxUrBefGhpFs0r4AGHS0a7mQJVVRBQrCWUqimwTExJfNyJuQaIzdAURCfwXNXVkLVxhhEvdNAJgpBVq504EINcTrFh14Y0ZUYK3uyKT5ZPUUE0dcnUvndg9YiCrcfqyFqKIzOEslPdWXWzMwcxBuJRfxI6GiZmyckk6hfpDxN27hSM%2BUrc3nzS2FeDYdBH6QcU%2BkWlsYemP5%2FoR6lueliqAeJUlQylzm2HFh0jBj43zmOjmabUx8fdSOjBdSbsdAXIRd%2BpEeUkBd42EyDfCs68k3UnphHDIFUKtjAAHqIC9jTViCbk%2FpRn4DNWsDPpUemtWl8LZsy%2FCN2OfOypvhri5%2F9uQOWg0gncUlKPaUahVTo0VsK5ej1FwRlAn6Kjs7Qw6EfVJFi0YYteK3PeNICVfQ5rx%2BLCe3BJQIsypOUc2dyHBotoLR0St9vm8UqAfwmdv6C9HxgnsdT4oN6h6bZTtft2P2aow1NesvwY6pgGpRp%2BXZT%2Fn4csxDMjlMpQfUL2cs0hFqaj%2BOhi02DhBinQVpAXtCeHQaH5gASUZhrBoxEh%2FLc9%2FrymMm3OKSeSX0hv0MpZ6ORDflC7Baozdq5ZvdsbT%2FqyQ6Hqp77kah5FXxRwAzgJxHjQejlBX3erX0cVZPeX5WC1qRPFvlhNFDbD1j2vF3rOAo%2FXDwqS6jEoIBgZ5u0UieYgasWjJeFppocCtb%2BuJ&X-Amz-Signature=83d47fb1c6a55567e7ab2e49708421a4180b38953fca0c1760ba7adc02ae1177&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH7BWAWQ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIHlzIlH7UzW%2F5gSF3E5CU5Xl7YlzJBQ71LKd8iaH3QfaAiAjNwfCwsp0fsWIxkr6g9f9N%2B%2F8MwT1nNpdJuOZFRgklCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcXUK9nL3nxcWsYEyKtwDVyrzRkhjCRR%2FWHbK0EjlIQG5q%2BbLKKdg5JwImiujQGQX6X7ScLoQ13z0nF7aNYvDOYhZbgYdZ0VWkyyWxtR8WZp8mGPms5ACZh%2BAhXoYuc8%2Bm955iQLdBKrMLmqCh%2Fy%2FASFNnnlXar1hHbzs%2BVkLNCROOndrJOxUrBefGhpFs0r4AGHS0a7mQJVVRBQrCWUqimwTExJfNyJuQaIzdAURCfwXNXVkLVxhhEvdNAJgpBVq504EINcTrFh14Y0ZUYK3uyKT5ZPUUE0dcnUvndg9YiCrcfqyFqKIzOEslPdWXWzMwcxBuJRfxI6GiZmyckk6hfpDxN27hSM%2BUrc3nzS2FeDYdBH6QcU%2BkWlsYemP5%2FoR6lueliqAeJUlQylzm2HFh0jBj43zmOjmabUx8fdSOjBdSbsdAXIRd%2BpEeUkBd42EyDfCs68k3UnphHDIFUKtjAAHqIC9jTViCbk%2FpRn4DNWsDPpUemtWl8LZsy%2FCN2OfOypvhri5%2F9uQOWg0gncUlKPaUahVTo0VsK5ej1FwRlAn6Kjs7Qw6EfVJFi0YYteK3PeNICVfQ5rx%2BLCe3BJQIsypOUc2dyHBotoLR0St9vm8UqAfwmdv6C9HxgnsdT4oN6h6bZTtft2P2aow1NesvwY6pgGpRp%2BXZT%2Fn4csxDMjlMpQfUL2cs0hFqaj%2BOhi02DhBinQVpAXtCeHQaH5gASUZhrBoxEh%2FLc9%2FrymMm3OKSeSX0hv0MpZ6ORDflC7Baozdq5ZvdsbT%2FqyQ6Hqp77kah5FXxRwAzgJxHjQejlBX3erX0cVZPeX5WC1qRPFvlhNFDbD1j2vF3rOAo%2FXDwqS6jEoIBgZ5u0UieYgasWjJeFppocCtb%2BuJ&X-Amz-Signature=c9750b0aa8bea4f9893237b8956e5b2fc05342640e22d43d8e3a7a330be7573c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
