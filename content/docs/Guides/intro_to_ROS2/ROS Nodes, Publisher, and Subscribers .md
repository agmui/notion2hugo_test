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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOLGQB2C%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvI%2BQobJiClR5HT%2BCosp8GW08sp%2B8F1sK7yTe1vqrfAAiBBQsoKHxFmILDNGTJmem8qtnD0hCHGMdnUSQlPEzjtFCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN5JAR%2FJ0gPJYsE6tKtwD9BLvkKVp0T5VIckMuqBVnnsKE5CSwSJYkye8d0dVjzGHtGHHpWMfuIfUby0h%2BNSUUtrouJlO16gEvO8wayRJ1t%2BAAwH20VIrSp2kgeQQdhtrdqvGNuJ5eLven6IzfyNvfBmZ6w%2FMoTzEitQJpUDWUPTqqedXunQNZP4tgPtXBDB4yJtQLEvks2AM57dBVR62Sl0EI4bt6qs1vq0dYwpC1W013PiGuO4bKjZXHjruPkm5rMFACALfaAwSn6qOQw%2BOQqdPMix9r0q%2FPyHuKabiCpaT%2FZCyjKEAB3aDL5mkBmtXRHFTs6x1c8gqaTkdxjPQk0%2BMC9%2BC0NE%2FeiULWfmX1LDeliAZia%2B0MWhRyxWk%2Bc%2BmMDfloJWJiMh8biwlSSCO%2BZfdQ1k5eAy9Cllasph0iqX4q7sXVMrY0PR5Otga%2BxEvrh%2BlVURtsyXcIDSAEtXoi2s8zy0xONAToBdiiD%2FDqERKsr8C2nJ9XTWEjkgspFzxaMIY8f9ndNIi9uhBEv%2Bt8dM58pGpaSekLTS8ymrxJmtnoeWSKxeA%2BTQAhUcE3qMqm5NrPuTKj1IClFBpq4jVEA9kIJHeu3xLhDEMgtQaTQQxG9rrKDAyER%2BcPbkNCZDVPTeWZfXClMDsa28wjcjhvQY6pgEw93H0%2FyIF692L7BSdrUvgK%2FLFDwvKHnAbWyT5PMbEJK00K5uRaLAm0PCReDi9vro15og9sUOqngVTChKVX%2BBSA6SpaLANj4xH70e73P5GSYKIJrV%2B%2BUfehT%2Bm5h%2Bk3dfsNie27UMuSIRV0wjpvbqA%2F17%2BH4N22%2FqJSv%2FQV2smoLsrgn1KCoWmPHb5vFJwt9XD6ow8Ltch6CyD3KQtReSvkFBmI8qO&X-Amz-Signature=19d1007f939ca3c375da20eb4805ef279921c4d1438999ae86182fdeb471b615&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOLGQB2C%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvI%2BQobJiClR5HT%2BCosp8GW08sp%2B8F1sK7yTe1vqrfAAiBBQsoKHxFmILDNGTJmem8qtnD0hCHGMdnUSQlPEzjtFCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN5JAR%2FJ0gPJYsE6tKtwD9BLvkKVp0T5VIckMuqBVnnsKE5CSwSJYkye8d0dVjzGHtGHHpWMfuIfUby0h%2BNSUUtrouJlO16gEvO8wayRJ1t%2BAAwH20VIrSp2kgeQQdhtrdqvGNuJ5eLven6IzfyNvfBmZ6w%2FMoTzEitQJpUDWUPTqqedXunQNZP4tgPtXBDB4yJtQLEvks2AM57dBVR62Sl0EI4bt6qs1vq0dYwpC1W013PiGuO4bKjZXHjruPkm5rMFACALfaAwSn6qOQw%2BOQqdPMix9r0q%2FPyHuKabiCpaT%2FZCyjKEAB3aDL5mkBmtXRHFTs6x1c8gqaTkdxjPQk0%2BMC9%2BC0NE%2FeiULWfmX1LDeliAZia%2B0MWhRyxWk%2Bc%2BmMDfloJWJiMh8biwlSSCO%2BZfdQ1k5eAy9Cllasph0iqX4q7sXVMrY0PR5Otga%2BxEvrh%2BlVURtsyXcIDSAEtXoi2s8zy0xONAToBdiiD%2FDqERKsr8C2nJ9XTWEjkgspFzxaMIY8f9ndNIi9uhBEv%2Bt8dM58pGpaSekLTS8ymrxJmtnoeWSKxeA%2BTQAhUcE3qMqm5NrPuTKj1IClFBpq4jVEA9kIJHeu3xLhDEMgtQaTQQxG9rrKDAyER%2BcPbkNCZDVPTeWZfXClMDsa28wjcjhvQY6pgEw93H0%2FyIF692L7BSdrUvgK%2FLFDwvKHnAbWyT5PMbEJK00K5uRaLAm0PCReDi9vro15og9sUOqngVTChKVX%2BBSA6SpaLANj4xH70e73P5GSYKIJrV%2B%2BUfehT%2Bm5h%2Bk3dfsNie27UMuSIRV0wjpvbqA%2F17%2BH4N22%2FqJSv%2FQV2smoLsrgn1KCoWmPHb5vFJwt9XD6ow8Ltch6CyD3KQtReSvkFBmI8qO&X-Amz-Signature=0149340dfec18427fb55258139dde0b90e9b7ed5a80b774912ec7586745c9c25&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOLGQB2C%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvI%2BQobJiClR5HT%2BCosp8GW08sp%2B8F1sK7yTe1vqrfAAiBBQsoKHxFmILDNGTJmem8qtnD0hCHGMdnUSQlPEzjtFCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN5JAR%2FJ0gPJYsE6tKtwD9BLvkKVp0T5VIckMuqBVnnsKE5CSwSJYkye8d0dVjzGHtGHHpWMfuIfUby0h%2BNSUUtrouJlO16gEvO8wayRJ1t%2BAAwH20VIrSp2kgeQQdhtrdqvGNuJ5eLven6IzfyNvfBmZ6w%2FMoTzEitQJpUDWUPTqqedXunQNZP4tgPtXBDB4yJtQLEvks2AM57dBVR62Sl0EI4bt6qs1vq0dYwpC1W013PiGuO4bKjZXHjruPkm5rMFACALfaAwSn6qOQw%2BOQqdPMix9r0q%2FPyHuKabiCpaT%2FZCyjKEAB3aDL5mkBmtXRHFTs6x1c8gqaTkdxjPQk0%2BMC9%2BC0NE%2FeiULWfmX1LDeliAZia%2B0MWhRyxWk%2Bc%2BmMDfloJWJiMh8biwlSSCO%2BZfdQ1k5eAy9Cllasph0iqX4q7sXVMrY0PR5Otga%2BxEvrh%2BlVURtsyXcIDSAEtXoi2s8zy0xONAToBdiiD%2FDqERKsr8C2nJ9XTWEjkgspFzxaMIY8f9ndNIi9uhBEv%2Bt8dM58pGpaSekLTS8ymrxJmtnoeWSKxeA%2BTQAhUcE3qMqm5NrPuTKj1IClFBpq4jVEA9kIJHeu3xLhDEMgtQaTQQxG9rrKDAyER%2BcPbkNCZDVPTeWZfXClMDsa28wjcjhvQY6pgEw93H0%2FyIF692L7BSdrUvgK%2FLFDwvKHnAbWyT5PMbEJK00K5uRaLAm0PCReDi9vro15og9sUOqngVTChKVX%2BBSA6SpaLANj4xH70e73P5GSYKIJrV%2B%2BUfehT%2Bm5h%2Bk3dfsNie27UMuSIRV0wjpvbqA%2F17%2BH4N22%2FqJSv%2FQV2smoLsrgn1KCoWmPHb5vFJwt9XD6ow8Ltch6CyD3KQtReSvkFBmI8qO&X-Amz-Signature=b5d0112c8df9ea2032d6bcc79d56c77837e1d87c671cb9f2de1c8ac1742d8096&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOLGQB2C%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvI%2BQobJiClR5HT%2BCosp8GW08sp%2B8F1sK7yTe1vqrfAAiBBQsoKHxFmILDNGTJmem8qtnD0hCHGMdnUSQlPEzjtFCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN5JAR%2FJ0gPJYsE6tKtwD9BLvkKVp0T5VIckMuqBVnnsKE5CSwSJYkye8d0dVjzGHtGHHpWMfuIfUby0h%2BNSUUtrouJlO16gEvO8wayRJ1t%2BAAwH20VIrSp2kgeQQdhtrdqvGNuJ5eLven6IzfyNvfBmZ6w%2FMoTzEitQJpUDWUPTqqedXunQNZP4tgPtXBDB4yJtQLEvks2AM57dBVR62Sl0EI4bt6qs1vq0dYwpC1W013PiGuO4bKjZXHjruPkm5rMFACALfaAwSn6qOQw%2BOQqdPMix9r0q%2FPyHuKabiCpaT%2FZCyjKEAB3aDL5mkBmtXRHFTs6x1c8gqaTkdxjPQk0%2BMC9%2BC0NE%2FeiULWfmX1LDeliAZia%2B0MWhRyxWk%2Bc%2BmMDfloJWJiMh8biwlSSCO%2BZfdQ1k5eAy9Cllasph0iqX4q7sXVMrY0PR5Otga%2BxEvrh%2BlVURtsyXcIDSAEtXoi2s8zy0xONAToBdiiD%2FDqERKsr8C2nJ9XTWEjkgspFzxaMIY8f9ndNIi9uhBEv%2Bt8dM58pGpaSekLTS8ymrxJmtnoeWSKxeA%2BTQAhUcE3qMqm5NrPuTKj1IClFBpq4jVEA9kIJHeu3xLhDEMgtQaTQQxG9rrKDAyER%2BcPbkNCZDVPTeWZfXClMDsa28wjcjhvQY6pgEw93H0%2FyIF692L7BSdrUvgK%2FLFDwvKHnAbWyT5PMbEJK00K5uRaLAm0PCReDi9vro15og9sUOqngVTChKVX%2BBSA6SpaLANj4xH70e73P5GSYKIJrV%2B%2BUfehT%2Bm5h%2Bk3dfsNie27UMuSIRV0wjpvbqA%2F17%2BH4N22%2FqJSv%2FQV2smoLsrgn1KCoWmPHb5vFJwt9XD6ow8Ltch6CyD3KQtReSvkFBmI8qO&X-Amz-Signature=60178a3d131ddad1754b83b0847c6a71628799728aec6ddeeb8d4663b185605b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOLGQB2C%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvI%2BQobJiClR5HT%2BCosp8GW08sp%2B8F1sK7yTe1vqrfAAiBBQsoKHxFmILDNGTJmem8qtnD0hCHGMdnUSQlPEzjtFCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN5JAR%2FJ0gPJYsE6tKtwD9BLvkKVp0T5VIckMuqBVnnsKE5CSwSJYkye8d0dVjzGHtGHHpWMfuIfUby0h%2BNSUUtrouJlO16gEvO8wayRJ1t%2BAAwH20VIrSp2kgeQQdhtrdqvGNuJ5eLven6IzfyNvfBmZ6w%2FMoTzEitQJpUDWUPTqqedXunQNZP4tgPtXBDB4yJtQLEvks2AM57dBVR62Sl0EI4bt6qs1vq0dYwpC1W013PiGuO4bKjZXHjruPkm5rMFACALfaAwSn6qOQw%2BOQqdPMix9r0q%2FPyHuKabiCpaT%2FZCyjKEAB3aDL5mkBmtXRHFTs6x1c8gqaTkdxjPQk0%2BMC9%2BC0NE%2FeiULWfmX1LDeliAZia%2B0MWhRyxWk%2Bc%2BmMDfloJWJiMh8biwlSSCO%2BZfdQ1k5eAy9Cllasph0iqX4q7sXVMrY0PR5Otga%2BxEvrh%2BlVURtsyXcIDSAEtXoi2s8zy0xONAToBdiiD%2FDqERKsr8C2nJ9XTWEjkgspFzxaMIY8f9ndNIi9uhBEv%2Bt8dM58pGpaSekLTS8ymrxJmtnoeWSKxeA%2BTQAhUcE3qMqm5NrPuTKj1IClFBpq4jVEA9kIJHeu3xLhDEMgtQaTQQxG9rrKDAyER%2BcPbkNCZDVPTeWZfXClMDsa28wjcjhvQY6pgEw93H0%2FyIF692L7BSdrUvgK%2FLFDwvKHnAbWyT5PMbEJK00K5uRaLAm0PCReDi9vro15og9sUOqngVTChKVX%2BBSA6SpaLANj4xH70e73P5GSYKIJrV%2B%2BUfehT%2Bm5h%2Bk3dfsNie27UMuSIRV0wjpvbqA%2F17%2BH4N22%2FqJSv%2FQV2smoLsrgn1KCoWmPHb5vFJwt9XD6ow8Ltch6CyD3KQtReSvkFBmI8qO&X-Amz-Signature=71844c5bd51bae09d6b426b5305ee66f9a7d7e162b6a1bd684c1c871bec51bda&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOLGQB2C%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvI%2BQobJiClR5HT%2BCosp8GW08sp%2B8F1sK7yTe1vqrfAAiBBQsoKHxFmILDNGTJmem8qtnD0hCHGMdnUSQlPEzjtFCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN5JAR%2FJ0gPJYsE6tKtwD9BLvkKVp0T5VIckMuqBVnnsKE5CSwSJYkye8d0dVjzGHtGHHpWMfuIfUby0h%2BNSUUtrouJlO16gEvO8wayRJ1t%2BAAwH20VIrSp2kgeQQdhtrdqvGNuJ5eLven6IzfyNvfBmZ6w%2FMoTzEitQJpUDWUPTqqedXunQNZP4tgPtXBDB4yJtQLEvks2AM57dBVR62Sl0EI4bt6qs1vq0dYwpC1W013PiGuO4bKjZXHjruPkm5rMFACALfaAwSn6qOQw%2BOQqdPMix9r0q%2FPyHuKabiCpaT%2FZCyjKEAB3aDL5mkBmtXRHFTs6x1c8gqaTkdxjPQk0%2BMC9%2BC0NE%2FeiULWfmX1LDeliAZia%2B0MWhRyxWk%2Bc%2BmMDfloJWJiMh8biwlSSCO%2BZfdQ1k5eAy9Cllasph0iqX4q7sXVMrY0PR5Otga%2BxEvrh%2BlVURtsyXcIDSAEtXoi2s8zy0xONAToBdiiD%2FDqERKsr8C2nJ9XTWEjkgspFzxaMIY8f9ndNIi9uhBEv%2Bt8dM58pGpaSekLTS8ymrxJmtnoeWSKxeA%2BTQAhUcE3qMqm5NrPuTKj1IClFBpq4jVEA9kIJHeu3xLhDEMgtQaTQQxG9rrKDAyER%2BcPbkNCZDVPTeWZfXClMDsa28wjcjhvQY6pgEw93H0%2FyIF692L7BSdrUvgK%2FLFDwvKHnAbWyT5PMbEJK00K5uRaLAm0PCReDi9vro15og9sUOqngVTChKVX%2BBSA6SpaLANj4xH70e73P5GSYKIJrV%2B%2BUfehT%2Bm5h%2Bk3dfsNie27UMuSIRV0wjpvbqA%2F17%2BH4N22%2FqJSv%2FQV2smoLsrgn1KCoWmPHb5vFJwt9XD6ow8Ltch6CyD3KQtReSvkFBmI8qO&X-Amz-Signature=c8c6acf2b946db67bbabae0195015398d6f12b5173139c45b8f4f2dce52cba84&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOLGQB2C%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvI%2BQobJiClR5HT%2BCosp8GW08sp%2B8F1sK7yTe1vqrfAAiBBQsoKHxFmILDNGTJmem8qtnD0hCHGMdnUSQlPEzjtFCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN5JAR%2FJ0gPJYsE6tKtwD9BLvkKVp0T5VIckMuqBVnnsKE5CSwSJYkye8d0dVjzGHtGHHpWMfuIfUby0h%2BNSUUtrouJlO16gEvO8wayRJ1t%2BAAwH20VIrSp2kgeQQdhtrdqvGNuJ5eLven6IzfyNvfBmZ6w%2FMoTzEitQJpUDWUPTqqedXunQNZP4tgPtXBDB4yJtQLEvks2AM57dBVR62Sl0EI4bt6qs1vq0dYwpC1W013PiGuO4bKjZXHjruPkm5rMFACALfaAwSn6qOQw%2BOQqdPMix9r0q%2FPyHuKabiCpaT%2FZCyjKEAB3aDL5mkBmtXRHFTs6x1c8gqaTkdxjPQk0%2BMC9%2BC0NE%2FeiULWfmX1LDeliAZia%2B0MWhRyxWk%2Bc%2BmMDfloJWJiMh8biwlSSCO%2BZfdQ1k5eAy9Cllasph0iqX4q7sXVMrY0PR5Otga%2BxEvrh%2BlVURtsyXcIDSAEtXoi2s8zy0xONAToBdiiD%2FDqERKsr8C2nJ9XTWEjkgspFzxaMIY8f9ndNIi9uhBEv%2Bt8dM58pGpaSekLTS8ymrxJmtnoeWSKxeA%2BTQAhUcE3qMqm5NrPuTKj1IClFBpq4jVEA9kIJHeu3xLhDEMgtQaTQQxG9rrKDAyER%2BcPbkNCZDVPTeWZfXClMDsa28wjcjhvQY6pgEw93H0%2FyIF692L7BSdrUvgK%2FLFDwvKHnAbWyT5PMbEJK00K5uRaLAm0PCReDi9vro15og9sUOqngVTChKVX%2BBSA6SpaLANj4xH70e73P5GSYKIJrV%2B%2BUfehT%2Bm5h%2Bk3dfsNie27UMuSIRV0wjpvbqA%2F17%2BH4N22%2FqJSv%2FQV2smoLsrgn1KCoWmPHb5vFJwt9XD6ow8Ltch6CyD3KQtReSvkFBmI8qO&X-Amz-Signature=cf202649f528427370a8e0318a1699e2df1436b9e45709d78194ba595b73b355&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOLGQB2C%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvI%2BQobJiClR5HT%2BCosp8GW08sp%2B8F1sK7yTe1vqrfAAiBBQsoKHxFmILDNGTJmem8qtnD0hCHGMdnUSQlPEzjtFCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN5JAR%2FJ0gPJYsE6tKtwD9BLvkKVp0T5VIckMuqBVnnsKE5CSwSJYkye8d0dVjzGHtGHHpWMfuIfUby0h%2BNSUUtrouJlO16gEvO8wayRJ1t%2BAAwH20VIrSp2kgeQQdhtrdqvGNuJ5eLven6IzfyNvfBmZ6w%2FMoTzEitQJpUDWUPTqqedXunQNZP4tgPtXBDB4yJtQLEvks2AM57dBVR62Sl0EI4bt6qs1vq0dYwpC1W013PiGuO4bKjZXHjruPkm5rMFACALfaAwSn6qOQw%2BOQqdPMix9r0q%2FPyHuKabiCpaT%2FZCyjKEAB3aDL5mkBmtXRHFTs6x1c8gqaTkdxjPQk0%2BMC9%2BC0NE%2FeiULWfmX1LDeliAZia%2B0MWhRyxWk%2Bc%2BmMDfloJWJiMh8biwlSSCO%2BZfdQ1k5eAy9Cllasph0iqX4q7sXVMrY0PR5Otga%2BxEvrh%2BlVURtsyXcIDSAEtXoi2s8zy0xONAToBdiiD%2FDqERKsr8C2nJ9XTWEjkgspFzxaMIY8f9ndNIi9uhBEv%2Bt8dM58pGpaSekLTS8ymrxJmtnoeWSKxeA%2BTQAhUcE3qMqm5NrPuTKj1IClFBpq4jVEA9kIJHeu3xLhDEMgtQaTQQxG9rrKDAyER%2BcPbkNCZDVPTeWZfXClMDsa28wjcjhvQY6pgEw93H0%2FyIF692L7BSdrUvgK%2FLFDwvKHnAbWyT5PMbEJK00K5uRaLAm0PCReDi9vro15og9sUOqngVTChKVX%2BBSA6SpaLANj4xH70e73P5GSYKIJrV%2B%2BUfehT%2Bm5h%2Bk3dfsNie27UMuSIRV0wjpvbqA%2F17%2BH4N22%2FqJSv%2FQV2smoLsrgn1KCoWmPHb5vFJwt9XD6ow8Ltch6CyD3KQtReSvkFBmI8qO&X-Amz-Signature=32e9d09f67a356f0d9b543a9de8aca9007e43df7c9687eb601d59dfc0db1c006&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
