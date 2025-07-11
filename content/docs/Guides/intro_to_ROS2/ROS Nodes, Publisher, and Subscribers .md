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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZB3HK4H%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgge3%2B8M8ySmG1x4zefW93ClIvFkfb1hPkyQyx%2FGXNpAiAtylj6HqU0fYKePQ%2FnOqZ3MmqrEpJ15umW1LPx4eNsaiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKhxijA9nSPRUov8fKtwDxGGUjbUL8MRDV6Q9qOomlnLRzBkIZSiTxVswsEVpMd6PgT6ht9QhBCqvGIaGShmMN%2BW3Lp2TOWXf0FJAfh8iCKoGcJ7A4sEEIFhhIsHJljg5fRCuZGi83CTwGdtnOMc%2BnMx%2FKzuvGe3Gh%2Bx%2FbG32P%2B5RH%2BVpjh6yBMt3cN4esDwuXdtjdFYNEyJVXhqoOf5P0wYMJ9KHTqXxUxb%2FaAXDA5DBbwsBkiCJjTORWcpGQZscwB9BhRGDSQUBOScjwRcoPHVDqm0S%2FBukJ3G5jSKyPwAlYd0fcPPiwsxOUiJuwSxN0iI%2ByREfrxf1Q%2BOLAlES3TtDAw%2FEX4TTrTEaqr3s0JMtp5cDeytzr7YJ%2BlKjh2xWi7cKKsnkFKAHL%2FiY2ILph3FCNNV%2F68PhlLm5bYnncFWK8vboUv0%2B9BZBKcMn9%2BFnSkyW5fqg9RtaSve48Z9z7Jk7c%2FBGPTICjtn3YmZNTmaXn4aatnMvulEnTIX%2F%2BeqwiLkZ7PJs742Wcgje8%2B3DCAR3VsyPLuqudnWCdP7cN9H9tp98EhOzSOHkNKGDD%2B5E0CQliEOIk4vAgpIs%2BFKMpbIIiaT9m7Y6htpOhhztPsvuD6WdgcXwv2YKJ6qIJdhhDPpDtdUSEUjxtmQwlv7DwwY6pgFM6xCMVJc%2BrkGaEwO1D08RlBKiA0h8ufRcIq550vBane%2FcxVq0iN2jbV5sNH44l5480YOjM5n1HhHgSxupIjdwsuQbzn6b4DyXPc%2BRRRgvpVJhOKtxsMTP3Mj1xl3fJ3yLKPqVXw4sLf5oevmlX8h6LsKCWPmGYDzf0b6Jd9d%2FmJyzQOtr7rDj8s4UCmh46AqS3iEowVT6ZA4HtiJ%2FwzztNeM69zTE&X-Amz-Signature=cbfced5654a46cdf491e916785e527e2daf0d86dd1a406e60a76f8a9a6ceb022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZB3HK4H%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgge3%2B8M8ySmG1x4zefW93ClIvFkfb1hPkyQyx%2FGXNpAiAtylj6HqU0fYKePQ%2FnOqZ3MmqrEpJ15umW1LPx4eNsaiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKhxijA9nSPRUov8fKtwDxGGUjbUL8MRDV6Q9qOomlnLRzBkIZSiTxVswsEVpMd6PgT6ht9QhBCqvGIaGShmMN%2BW3Lp2TOWXf0FJAfh8iCKoGcJ7A4sEEIFhhIsHJljg5fRCuZGi83CTwGdtnOMc%2BnMx%2FKzuvGe3Gh%2Bx%2FbG32P%2B5RH%2BVpjh6yBMt3cN4esDwuXdtjdFYNEyJVXhqoOf5P0wYMJ9KHTqXxUxb%2FaAXDA5DBbwsBkiCJjTORWcpGQZscwB9BhRGDSQUBOScjwRcoPHVDqm0S%2FBukJ3G5jSKyPwAlYd0fcPPiwsxOUiJuwSxN0iI%2ByREfrxf1Q%2BOLAlES3TtDAw%2FEX4TTrTEaqr3s0JMtp5cDeytzr7YJ%2BlKjh2xWi7cKKsnkFKAHL%2FiY2ILph3FCNNV%2F68PhlLm5bYnncFWK8vboUv0%2B9BZBKcMn9%2BFnSkyW5fqg9RtaSve48Z9z7Jk7c%2FBGPTICjtn3YmZNTmaXn4aatnMvulEnTIX%2F%2BeqwiLkZ7PJs742Wcgje8%2B3DCAR3VsyPLuqudnWCdP7cN9H9tp98EhOzSOHkNKGDD%2B5E0CQliEOIk4vAgpIs%2BFKMpbIIiaT9m7Y6htpOhhztPsvuD6WdgcXwv2YKJ6qIJdhhDPpDtdUSEUjxtmQwlv7DwwY6pgFM6xCMVJc%2BrkGaEwO1D08RlBKiA0h8ufRcIq550vBane%2FcxVq0iN2jbV5sNH44l5480YOjM5n1HhHgSxupIjdwsuQbzn6b4DyXPc%2BRRRgvpVJhOKtxsMTP3Mj1xl3fJ3yLKPqVXw4sLf5oevmlX8h6LsKCWPmGYDzf0b6Jd9d%2FmJyzQOtr7rDj8s4UCmh46AqS3iEowVT6ZA4HtiJ%2FwzztNeM69zTE&X-Amz-Signature=2cc3872a183961559d098a6cbd108bb001af2ecd2ce08462df409d2b7ae223b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZB3HK4H%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgge3%2B8M8ySmG1x4zefW93ClIvFkfb1hPkyQyx%2FGXNpAiAtylj6HqU0fYKePQ%2FnOqZ3MmqrEpJ15umW1LPx4eNsaiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKhxijA9nSPRUov8fKtwDxGGUjbUL8MRDV6Q9qOomlnLRzBkIZSiTxVswsEVpMd6PgT6ht9QhBCqvGIaGShmMN%2BW3Lp2TOWXf0FJAfh8iCKoGcJ7A4sEEIFhhIsHJljg5fRCuZGi83CTwGdtnOMc%2BnMx%2FKzuvGe3Gh%2Bx%2FbG32P%2B5RH%2BVpjh6yBMt3cN4esDwuXdtjdFYNEyJVXhqoOf5P0wYMJ9KHTqXxUxb%2FaAXDA5DBbwsBkiCJjTORWcpGQZscwB9BhRGDSQUBOScjwRcoPHVDqm0S%2FBukJ3G5jSKyPwAlYd0fcPPiwsxOUiJuwSxN0iI%2ByREfrxf1Q%2BOLAlES3TtDAw%2FEX4TTrTEaqr3s0JMtp5cDeytzr7YJ%2BlKjh2xWi7cKKsnkFKAHL%2FiY2ILph3FCNNV%2F68PhlLm5bYnncFWK8vboUv0%2B9BZBKcMn9%2BFnSkyW5fqg9RtaSve48Z9z7Jk7c%2FBGPTICjtn3YmZNTmaXn4aatnMvulEnTIX%2F%2BeqwiLkZ7PJs742Wcgje8%2B3DCAR3VsyPLuqudnWCdP7cN9H9tp98EhOzSOHkNKGDD%2B5E0CQliEOIk4vAgpIs%2BFKMpbIIiaT9m7Y6htpOhhztPsvuD6WdgcXwv2YKJ6qIJdhhDPpDtdUSEUjxtmQwlv7DwwY6pgFM6xCMVJc%2BrkGaEwO1D08RlBKiA0h8ufRcIq550vBane%2FcxVq0iN2jbV5sNH44l5480YOjM5n1HhHgSxupIjdwsuQbzn6b4DyXPc%2BRRRgvpVJhOKtxsMTP3Mj1xl3fJ3yLKPqVXw4sLf5oevmlX8h6LsKCWPmGYDzf0b6Jd9d%2FmJyzQOtr7rDj8s4UCmh46AqS3iEowVT6ZA4HtiJ%2FwzztNeM69zTE&X-Amz-Signature=309604aecb08a2fe5d7d05b5b04333f3e939e8bb3fd56cfcf509ac827afbda7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZB3HK4H%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgge3%2B8M8ySmG1x4zefW93ClIvFkfb1hPkyQyx%2FGXNpAiAtylj6HqU0fYKePQ%2FnOqZ3MmqrEpJ15umW1LPx4eNsaiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKhxijA9nSPRUov8fKtwDxGGUjbUL8MRDV6Q9qOomlnLRzBkIZSiTxVswsEVpMd6PgT6ht9QhBCqvGIaGShmMN%2BW3Lp2TOWXf0FJAfh8iCKoGcJ7A4sEEIFhhIsHJljg5fRCuZGi83CTwGdtnOMc%2BnMx%2FKzuvGe3Gh%2Bx%2FbG32P%2B5RH%2BVpjh6yBMt3cN4esDwuXdtjdFYNEyJVXhqoOf5P0wYMJ9KHTqXxUxb%2FaAXDA5DBbwsBkiCJjTORWcpGQZscwB9BhRGDSQUBOScjwRcoPHVDqm0S%2FBukJ3G5jSKyPwAlYd0fcPPiwsxOUiJuwSxN0iI%2ByREfrxf1Q%2BOLAlES3TtDAw%2FEX4TTrTEaqr3s0JMtp5cDeytzr7YJ%2BlKjh2xWi7cKKsnkFKAHL%2FiY2ILph3FCNNV%2F68PhlLm5bYnncFWK8vboUv0%2B9BZBKcMn9%2BFnSkyW5fqg9RtaSve48Z9z7Jk7c%2FBGPTICjtn3YmZNTmaXn4aatnMvulEnTIX%2F%2BeqwiLkZ7PJs742Wcgje8%2B3DCAR3VsyPLuqudnWCdP7cN9H9tp98EhOzSOHkNKGDD%2B5E0CQliEOIk4vAgpIs%2BFKMpbIIiaT9m7Y6htpOhhztPsvuD6WdgcXwv2YKJ6qIJdhhDPpDtdUSEUjxtmQwlv7DwwY6pgFM6xCMVJc%2BrkGaEwO1D08RlBKiA0h8ufRcIq550vBane%2FcxVq0iN2jbV5sNH44l5480YOjM5n1HhHgSxupIjdwsuQbzn6b4DyXPc%2BRRRgvpVJhOKtxsMTP3Mj1xl3fJ3yLKPqVXw4sLf5oevmlX8h6LsKCWPmGYDzf0b6Jd9d%2FmJyzQOtr7rDj8s4UCmh46AqS3iEowVT6ZA4HtiJ%2FwzztNeM69zTE&X-Amz-Signature=7bf987f1db4bae2fb261bea66c9be872cf97903279b27cf809cb521d99263bb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZB3HK4H%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgge3%2B8M8ySmG1x4zefW93ClIvFkfb1hPkyQyx%2FGXNpAiAtylj6HqU0fYKePQ%2FnOqZ3MmqrEpJ15umW1LPx4eNsaiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKhxijA9nSPRUov8fKtwDxGGUjbUL8MRDV6Q9qOomlnLRzBkIZSiTxVswsEVpMd6PgT6ht9QhBCqvGIaGShmMN%2BW3Lp2TOWXf0FJAfh8iCKoGcJ7A4sEEIFhhIsHJljg5fRCuZGi83CTwGdtnOMc%2BnMx%2FKzuvGe3Gh%2Bx%2FbG32P%2B5RH%2BVpjh6yBMt3cN4esDwuXdtjdFYNEyJVXhqoOf5P0wYMJ9KHTqXxUxb%2FaAXDA5DBbwsBkiCJjTORWcpGQZscwB9BhRGDSQUBOScjwRcoPHVDqm0S%2FBukJ3G5jSKyPwAlYd0fcPPiwsxOUiJuwSxN0iI%2ByREfrxf1Q%2BOLAlES3TtDAw%2FEX4TTrTEaqr3s0JMtp5cDeytzr7YJ%2BlKjh2xWi7cKKsnkFKAHL%2FiY2ILph3FCNNV%2F68PhlLm5bYnncFWK8vboUv0%2B9BZBKcMn9%2BFnSkyW5fqg9RtaSve48Z9z7Jk7c%2FBGPTICjtn3YmZNTmaXn4aatnMvulEnTIX%2F%2BeqwiLkZ7PJs742Wcgje8%2B3DCAR3VsyPLuqudnWCdP7cN9H9tp98EhOzSOHkNKGDD%2B5E0CQliEOIk4vAgpIs%2BFKMpbIIiaT9m7Y6htpOhhztPsvuD6WdgcXwv2YKJ6qIJdhhDPpDtdUSEUjxtmQwlv7DwwY6pgFM6xCMVJc%2BrkGaEwO1D08RlBKiA0h8ufRcIq550vBane%2FcxVq0iN2jbV5sNH44l5480YOjM5n1HhHgSxupIjdwsuQbzn6b4DyXPc%2BRRRgvpVJhOKtxsMTP3Mj1xl3fJ3yLKPqVXw4sLf5oevmlX8h6LsKCWPmGYDzf0b6Jd9d%2FmJyzQOtr7rDj8s4UCmh46AqS3iEowVT6ZA4HtiJ%2FwzztNeM69zTE&X-Amz-Signature=a87cc0e47711cc9677e624f1afa0e414867928aea9d4844b8baba90929b84894&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZB3HK4H%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgge3%2B8M8ySmG1x4zefW93ClIvFkfb1hPkyQyx%2FGXNpAiAtylj6HqU0fYKePQ%2FnOqZ3MmqrEpJ15umW1LPx4eNsaiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKhxijA9nSPRUov8fKtwDxGGUjbUL8MRDV6Q9qOomlnLRzBkIZSiTxVswsEVpMd6PgT6ht9QhBCqvGIaGShmMN%2BW3Lp2TOWXf0FJAfh8iCKoGcJ7A4sEEIFhhIsHJljg5fRCuZGi83CTwGdtnOMc%2BnMx%2FKzuvGe3Gh%2Bx%2FbG32P%2B5RH%2BVpjh6yBMt3cN4esDwuXdtjdFYNEyJVXhqoOf5P0wYMJ9KHTqXxUxb%2FaAXDA5DBbwsBkiCJjTORWcpGQZscwB9BhRGDSQUBOScjwRcoPHVDqm0S%2FBukJ3G5jSKyPwAlYd0fcPPiwsxOUiJuwSxN0iI%2ByREfrxf1Q%2BOLAlES3TtDAw%2FEX4TTrTEaqr3s0JMtp5cDeytzr7YJ%2BlKjh2xWi7cKKsnkFKAHL%2FiY2ILph3FCNNV%2F68PhlLm5bYnncFWK8vboUv0%2B9BZBKcMn9%2BFnSkyW5fqg9RtaSve48Z9z7Jk7c%2FBGPTICjtn3YmZNTmaXn4aatnMvulEnTIX%2F%2BeqwiLkZ7PJs742Wcgje8%2B3DCAR3VsyPLuqudnWCdP7cN9H9tp98EhOzSOHkNKGDD%2B5E0CQliEOIk4vAgpIs%2BFKMpbIIiaT9m7Y6htpOhhztPsvuD6WdgcXwv2YKJ6qIJdhhDPpDtdUSEUjxtmQwlv7DwwY6pgFM6xCMVJc%2BrkGaEwO1D08RlBKiA0h8ufRcIq550vBane%2FcxVq0iN2jbV5sNH44l5480YOjM5n1HhHgSxupIjdwsuQbzn6b4DyXPc%2BRRRgvpVJhOKtxsMTP3Mj1xl3fJ3yLKPqVXw4sLf5oevmlX8h6LsKCWPmGYDzf0b6Jd9d%2FmJyzQOtr7rDj8s4UCmh46AqS3iEowVT6ZA4HtiJ%2FwzztNeM69zTE&X-Amz-Signature=38093040e6747ac7052427a90a19130da42508603cb26b8d66fc41377e1f33e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZB3HK4H%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgge3%2B8M8ySmG1x4zefW93ClIvFkfb1hPkyQyx%2FGXNpAiAtylj6HqU0fYKePQ%2FnOqZ3MmqrEpJ15umW1LPx4eNsaiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKhxijA9nSPRUov8fKtwDxGGUjbUL8MRDV6Q9qOomlnLRzBkIZSiTxVswsEVpMd6PgT6ht9QhBCqvGIaGShmMN%2BW3Lp2TOWXf0FJAfh8iCKoGcJ7A4sEEIFhhIsHJljg5fRCuZGi83CTwGdtnOMc%2BnMx%2FKzuvGe3Gh%2Bx%2FbG32P%2B5RH%2BVpjh6yBMt3cN4esDwuXdtjdFYNEyJVXhqoOf5P0wYMJ9KHTqXxUxb%2FaAXDA5DBbwsBkiCJjTORWcpGQZscwB9BhRGDSQUBOScjwRcoPHVDqm0S%2FBukJ3G5jSKyPwAlYd0fcPPiwsxOUiJuwSxN0iI%2ByREfrxf1Q%2BOLAlES3TtDAw%2FEX4TTrTEaqr3s0JMtp5cDeytzr7YJ%2BlKjh2xWi7cKKsnkFKAHL%2FiY2ILph3FCNNV%2F68PhlLm5bYnncFWK8vboUv0%2B9BZBKcMn9%2BFnSkyW5fqg9RtaSve48Z9z7Jk7c%2FBGPTICjtn3YmZNTmaXn4aatnMvulEnTIX%2F%2BeqwiLkZ7PJs742Wcgje8%2B3DCAR3VsyPLuqudnWCdP7cN9H9tp98EhOzSOHkNKGDD%2B5E0CQliEOIk4vAgpIs%2BFKMpbIIiaT9m7Y6htpOhhztPsvuD6WdgcXwv2YKJ6qIJdhhDPpDtdUSEUjxtmQwlv7DwwY6pgFM6xCMVJc%2BrkGaEwO1D08RlBKiA0h8ufRcIq550vBane%2FcxVq0iN2jbV5sNH44l5480YOjM5n1HhHgSxupIjdwsuQbzn6b4DyXPc%2BRRRgvpVJhOKtxsMTP3Mj1xl3fJ3yLKPqVXw4sLf5oevmlX8h6LsKCWPmGYDzf0b6Jd9d%2FmJyzQOtr7rDj8s4UCmh46AqS3iEowVT6ZA4HtiJ%2FwzztNeM69zTE&X-Amz-Signature=5eb8520485de6df1156a3c87450e349cddb568b4965cc93273abd010769b6996&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZB3HK4H%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgge3%2B8M8ySmG1x4zefW93ClIvFkfb1hPkyQyx%2FGXNpAiAtylj6HqU0fYKePQ%2FnOqZ3MmqrEpJ15umW1LPx4eNsaiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKhxijA9nSPRUov8fKtwDxGGUjbUL8MRDV6Q9qOomlnLRzBkIZSiTxVswsEVpMd6PgT6ht9QhBCqvGIaGShmMN%2BW3Lp2TOWXf0FJAfh8iCKoGcJ7A4sEEIFhhIsHJljg5fRCuZGi83CTwGdtnOMc%2BnMx%2FKzuvGe3Gh%2Bx%2FbG32P%2B5RH%2BVpjh6yBMt3cN4esDwuXdtjdFYNEyJVXhqoOf5P0wYMJ9KHTqXxUxb%2FaAXDA5DBbwsBkiCJjTORWcpGQZscwB9BhRGDSQUBOScjwRcoPHVDqm0S%2FBukJ3G5jSKyPwAlYd0fcPPiwsxOUiJuwSxN0iI%2ByREfrxf1Q%2BOLAlES3TtDAw%2FEX4TTrTEaqr3s0JMtp5cDeytzr7YJ%2BlKjh2xWi7cKKsnkFKAHL%2FiY2ILph3FCNNV%2F68PhlLm5bYnncFWK8vboUv0%2B9BZBKcMn9%2BFnSkyW5fqg9RtaSve48Z9z7Jk7c%2FBGPTICjtn3YmZNTmaXn4aatnMvulEnTIX%2F%2BeqwiLkZ7PJs742Wcgje8%2B3DCAR3VsyPLuqudnWCdP7cN9H9tp98EhOzSOHkNKGDD%2B5E0CQliEOIk4vAgpIs%2BFKMpbIIiaT9m7Y6htpOhhztPsvuD6WdgcXwv2YKJ6qIJdhhDPpDtdUSEUjxtmQwlv7DwwY6pgFM6xCMVJc%2BrkGaEwO1D08RlBKiA0h8ufRcIq550vBane%2FcxVq0iN2jbV5sNH44l5480YOjM5n1HhHgSxupIjdwsuQbzn6b4DyXPc%2BRRRgvpVJhOKtxsMTP3Mj1xl3fJ3yLKPqVXw4sLf5oevmlX8h6LsKCWPmGYDzf0b6Jd9d%2FmJyzQOtr7rDj8s4UCmh46AqS3iEowVT6ZA4HtiJ%2FwzztNeM69zTE&X-Amz-Signature=ae6432189ff7ab6776f3e7ff164b2e1b0b9ac023e20897f8350a0ba6b1663c93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
