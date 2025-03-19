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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y7OY3E3%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIBt8Rpq2kO7vfxUQmZ5ErftwdiBX3KgdwzYoyGl1faiSAiAaGj%2FragxmgbmlRWOVGRz95KQ9BUJ5sUjg9gQu1yJQMyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMybEXdDEdNy%2FwiKthKtwDUik4sFtC0d2HOVvRwIDU4ZDdeLrFj%2BpUjAF7kGKcY5tRYzTHNHV64S1x7Le9nxoQauUqVK6E7BPHOQei%2FsiT5q5N9oBtFSbd77xiqy6uiLesaXI963P%2BY%2FBRVaj3YL43r1b5KszEj79UwWhv3rR5U%2F2dor9G5%2BlJIJUcs2%2BPAAucl5iOSdXOeGHx%2FVDHlJzZQfyGgjCbTdWt9j4l0GsKEucbzSMEIC0znuXB5PmL%2FHmOEiYFmegKmdNL%2FyOghlkD6XjqggbL4VJEiQxSuTva6yEnnwzgklw%2BmIoK%2FWN5lh0mNH3P1dBQjiaNqixsxRSP4dZWjHRaQoRJe4JlCAix4oGzoKFiEBwPMxVafwqQzhsNhcpkS6HDPLmI0iQOTB64H50TFagoyiH0Sub1oDj0sA6gDLiLhD7J1s6QGdvFQN7saldGxGjfRTfjdQyDEbNyhj6B4BeXmC1bE%2FrYyYdZcKueuWRmdod3T2osHhxPUKlpUwtIJUdioOtqq%2BJDsbAuMLtwzUtpRTl4%2BkgQv67n4McwzTzyzJPh1bf69OwsydVOefUypOjUcBQhVMNFCNnAVoWkBlRofAP%2FuqGaeqeUYwdZ4YKocR1IqzJkfvm55GqhljnOU7Wi7PX06HUw5MTpvgY6pgE2QrqYtHj3rry9%2FOlYMtBVxRUVLE1smZbqYnIXTnK1yoSphzbJ3qOKyWtihcysvRz3TyKXg8F3lPIbdiU2uY1sFQS3Wy1tQNLOu0C6fc2Gf4kZhyfAqjIos0U4B%2B0hAbn8TuKnhXfMTDi4Hg5i%2F75xWpo0hL4PBCc6iTHjlhPLeeqaxAwpFGhiPUHJYykZoo2iStcv7qhWueOzgF0%2B3vkPlZozRolQ&X-Amz-Signature=eb1901ebc4b3ad04d12ea36593cb20c0412d7327d3980b85f24556f4836729b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y7OY3E3%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIBt8Rpq2kO7vfxUQmZ5ErftwdiBX3KgdwzYoyGl1faiSAiAaGj%2FragxmgbmlRWOVGRz95KQ9BUJ5sUjg9gQu1yJQMyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMybEXdDEdNy%2FwiKthKtwDUik4sFtC0d2HOVvRwIDU4ZDdeLrFj%2BpUjAF7kGKcY5tRYzTHNHV64S1x7Le9nxoQauUqVK6E7BPHOQei%2FsiT5q5N9oBtFSbd77xiqy6uiLesaXI963P%2BY%2FBRVaj3YL43r1b5KszEj79UwWhv3rR5U%2F2dor9G5%2BlJIJUcs2%2BPAAucl5iOSdXOeGHx%2FVDHlJzZQfyGgjCbTdWt9j4l0GsKEucbzSMEIC0znuXB5PmL%2FHmOEiYFmegKmdNL%2FyOghlkD6XjqggbL4VJEiQxSuTva6yEnnwzgklw%2BmIoK%2FWN5lh0mNH3P1dBQjiaNqixsxRSP4dZWjHRaQoRJe4JlCAix4oGzoKFiEBwPMxVafwqQzhsNhcpkS6HDPLmI0iQOTB64H50TFagoyiH0Sub1oDj0sA6gDLiLhD7J1s6QGdvFQN7saldGxGjfRTfjdQyDEbNyhj6B4BeXmC1bE%2FrYyYdZcKueuWRmdod3T2osHhxPUKlpUwtIJUdioOtqq%2BJDsbAuMLtwzUtpRTl4%2BkgQv67n4McwzTzyzJPh1bf69OwsydVOefUypOjUcBQhVMNFCNnAVoWkBlRofAP%2FuqGaeqeUYwdZ4YKocR1IqzJkfvm55GqhljnOU7Wi7PX06HUw5MTpvgY6pgE2QrqYtHj3rry9%2FOlYMtBVxRUVLE1smZbqYnIXTnK1yoSphzbJ3qOKyWtihcysvRz3TyKXg8F3lPIbdiU2uY1sFQS3Wy1tQNLOu0C6fc2Gf4kZhyfAqjIos0U4B%2B0hAbn8TuKnhXfMTDi4Hg5i%2F75xWpo0hL4PBCc6iTHjlhPLeeqaxAwpFGhiPUHJYykZoo2iStcv7qhWueOzgF0%2B3vkPlZozRolQ&X-Amz-Signature=856b059d058cd5ad4c8ea65c1a731b87268292b9882eb60a521a285a71eab3c8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y7OY3E3%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIBt8Rpq2kO7vfxUQmZ5ErftwdiBX3KgdwzYoyGl1faiSAiAaGj%2FragxmgbmlRWOVGRz95KQ9BUJ5sUjg9gQu1yJQMyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMybEXdDEdNy%2FwiKthKtwDUik4sFtC0d2HOVvRwIDU4ZDdeLrFj%2BpUjAF7kGKcY5tRYzTHNHV64S1x7Le9nxoQauUqVK6E7BPHOQei%2FsiT5q5N9oBtFSbd77xiqy6uiLesaXI963P%2BY%2FBRVaj3YL43r1b5KszEj79UwWhv3rR5U%2F2dor9G5%2BlJIJUcs2%2BPAAucl5iOSdXOeGHx%2FVDHlJzZQfyGgjCbTdWt9j4l0GsKEucbzSMEIC0znuXB5PmL%2FHmOEiYFmegKmdNL%2FyOghlkD6XjqggbL4VJEiQxSuTva6yEnnwzgklw%2BmIoK%2FWN5lh0mNH3P1dBQjiaNqixsxRSP4dZWjHRaQoRJe4JlCAix4oGzoKFiEBwPMxVafwqQzhsNhcpkS6HDPLmI0iQOTB64H50TFagoyiH0Sub1oDj0sA6gDLiLhD7J1s6QGdvFQN7saldGxGjfRTfjdQyDEbNyhj6B4BeXmC1bE%2FrYyYdZcKueuWRmdod3T2osHhxPUKlpUwtIJUdioOtqq%2BJDsbAuMLtwzUtpRTl4%2BkgQv67n4McwzTzyzJPh1bf69OwsydVOefUypOjUcBQhVMNFCNnAVoWkBlRofAP%2FuqGaeqeUYwdZ4YKocR1IqzJkfvm55GqhljnOU7Wi7PX06HUw5MTpvgY6pgE2QrqYtHj3rry9%2FOlYMtBVxRUVLE1smZbqYnIXTnK1yoSphzbJ3qOKyWtihcysvRz3TyKXg8F3lPIbdiU2uY1sFQS3Wy1tQNLOu0C6fc2Gf4kZhyfAqjIos0U4B%2B0hAbn8TuKnhXfMTDi4Hg5i%2F75xWpo0hL4PBCc6iTHjlhPLeeqaxAwpFGhiPUHJYykZoo2iStcv7qhWueOzgF0%2B3vkPlZozRolQ&X-Amz-Signature=b81ea30a687367975fbb7ee379c9859c3806ef55620c0ec502cd8a363d68c4ab&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y7OY3E3%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIBt8Rpq2kO7vfxUQmZ5ErftwdiBX3KgdwzYoyGl1faiSAiAaGj%2FragxmgbmlRWOVGRz95KQ9BUJ5sUjg9gQu1yJQMyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMybEXdDEdNy%2FwiKthKtwDUik4sFtC0d2HOVvRwIDU4ZDdeLrFj%2BpUjAF7kGKcY5tRYzTHNHV64S1x7Le9nxoQauUqVK6E7BPHOQei%2FsiT5q5N9oBtFSbd77xiqy6uiLesaXI963P%2BY%2FBRVaj3YL43r1b5KszEj79UwWhv3rR5U%2F2dor9G5%2BlJIJUcs2%2BPAAucl5iOSdXOeGHx%2FVDHlJzZQfyGgjCbTdWt9j4l0GsKEucbzSMEIC0znuXB5PmL%2FHmOEiYFmegKmdNL%2FyOghlkD6XjqggbL4VJEiQxSuTva6yEnnwzgklw%2BmIoK%2FWN5lh0mNH3P1dBQjiaNqixsxRSP4dZWjHRaQoRJe4JlCAix4oGzoKFiEBwPMxVafwqQzhsNhcpkS6HDPLmI0iQOTB64H50TFagoyiH0Sub1oDj0sA6gDLiLhD7J1s6QGdvFQN7saldGxGjfRTfjdQyDEbNyhj6B4BeXmC1bE%2FrYyYdZcKueuWRmdod3T2osHhxPUKlpUwtIJUdioOtqq%2BJDsbAuMLtwzUtpRTl4%2BkgQv67n4McwzTzyzJPh1bf69OwsydVOefUypOjUcBQhVMNFCNnAVoWkBlRofAP%2FuqGaeqeUYwdZ4YKocR1IqzJkfvm55GqhljnOU7Wi7PX06HUw5MTpvgY6pgE2QrqYtHj3rry9%2FOlYMtBVxRUVLE1smZbqYnIXTnK1yoSphzbJ3qOKyWtihcysvRz3TyKXg8F3lPIbdiU2uY1sFQS3Wy1tQNLOu0C6fc2Gf4kZhyfAqjIos0U4B%2B0hAbn8TuKnhXfMTDi4Hg5i%2F75xWpo0hL4PBCc6iTHjlhPLeeqaxAwpFGhiPUHJYykZoo2iStcv7qhWueOzgF0%2B3vkPlZozRolQ&X-Amz-Signature=2c7194a3c22fd4f8547315f63485b2139cb805fded61b667068a49a0d0fb0ac4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y7OY3E3%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIBt8Rpq2kO7vfxUQmZ5ErftwdiBX3KgdwzYoyGl1faiSAiAaGj%2FragxmgbmlRWOVGRz95KQ9BUJ5sUjg9gQu1yJQMyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMybEXdDEdNy%2FwiKthKtwDUik4sFtC0d2HOVvRwIDU4ZDdeLrFj%2BpUjAF7kGKcY5tRYzTHNHV64S1x7Le9nxoQauUqVK6E7BPHOQei%2FsiT5q5N9oBtFSbd77xiqy6uiLesaXI963P%2BY%2FBRVaj3YL43r1b5KszEj79UwWhv3rR5U%2F2dor9G5%2BlJIJUcs2%2BPAAucl5iOSdXOeGHx%2FVDHlJzZQfyGgjCbTdWt9j4l0GsKEucbzSMEIC0znuXB5PmL%2FHmOEiYFmegKmdNL%2FyOghlkD6XjqggbL4VJEiQxSuTva6yEnnwzgklw%2BmIoK%2FWN5lh0mNH3P1dBQjiaNqixsxRSP4dZWjHRaQoRJe4JlCAix4oGzoKFiEBwPMxVafwqQzhsNhcpkS6HDPLmI0iQOTB64H50TFagoyiH0Sub1oDj0sA6gDLiLhD7J1s6QGdvFQN7saldGxGjfRTfjdQyDEbNyhj6B4BeXmC1bE%2FrYyYdZcKueuWRmdod3T2osHhxPUKlpUwtIJUdioOtqq%2BJDsbAuMLtwzUtpRTl4%2BkgQv67n4McwzTzyzJPh1bf69OwsydVOefUypOjUcBQhVMNFCNnAVoWkBlRofAP%2FuqGaeqeUYwdZ4YKocR1IqzJkfvm55GqhljnOU7Wi7PX06HUw5MTpvgY6pgE2QrqYtHj3rry9%2FOlYMtBVxRUVLE1smZbqYnIXTnK1yoSphzbJ3qOKyWtihcysvRz3TyKXg8F3lPIbdiU2uY1sFQS3Wy1tQNLOu0C6fc2Gf4kZhyfAqjIos0U4B%2B0hAbn8TuKnhXfMTDi4Hg5i%2F75xWpo0hL4PBCc6iTHjlhPLeeqaxAwpFGhiPUHJYykZoo2iStcv7qhWueOzgF0%2B3vkPlZozRolQ&X-Amz-Signature=c40aae381968e360943fa102e473373ea2a68499d8404cacefe230fe10629c19&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y7OY3E3%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIBt8Rpq2kO7vfxUQmZ5ErftwdiBX3KgdwzYoyGl1faiSAiAaGj%2FragxmgbmlRWOVGRz95KQ9BUJ5sUjg9gQu1yJQMyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMybEXdDEdNy%2FwiKthKtwDUik4sFtC0d2HOVvRwIDU4ZDdeLrFj%2BpUjAF7kGKcY5tRYzTHNHV64S1x7Le9nxoQauUqVK6E7BPHOQei%2FsiT5q5N9oBtFSbd77xiqy6uiLesaXI963P%2BY%2FBRVaj3YL43r1b5KszEj79UwWhv3rR5U%2F2dor9G5%2BlJIJUcs2%2BPAAucl5iOSdXOeGHx%2FVDHlJzZQfyGgjCbTdWt9j4l0GsKEucbzSMEIC0znuXB5PmL%2FHmOEiYFmegKmdNL%2FyOghlkD6XjqggbL4VJEiQxSuTva6yEnnwzgklw%2BmIoK%2FWN5lh0mNH3P1dBQjiaNqixsxRSP4dZWjHRaQoRJe4JlCAix4oGzoKFiEBwPMxVafwqQzhsNhcpkS6HDPLmI0iQOTB64H50TFagoyiH0Sub1oDj0sA6gDLiLhD7J1s6QGdvFQN7saldGxGjfRTfjdQyDEbNyhj6B4BeXmC1bE%2FrYyYdZcKueuWRmdod3T2osHhxPUKlpUwtIJUdioOtqq%2BJDsbAuMLtwzUtpRTl4%2BkgQv67n4McwzTzyzJPh1bf69OwsydVOefUypOjUcBQhVMNFCNnAVoWkBlRofAP%2FuqGaeqeUYwdZ4YKocR1IqzJkfvm55GqhljnOU7Wi7PX06HUw5MTpvgY6pgE2QrqYtHj3rry9%2FOlYMtBVxRUVLE1smZbqYnIXTnK1yoSphzbJ3qOKyWtihcysvRz3TyKXg8F3lPIbdiU2uY1sFQS3Wy1tQNLOu0C6fc2Gf4kZhyfAqjIos0U4B%2B0hAbn8TuKnhXfMTDi4Hg5i%2F75xWpo0hL4PBCc6iTHjlhPLeeqaxAwpFGhiPUHJYykZoo2iStcv7qhWueOzgF0%2B3vkPlZozRolQ&X-Amz-Signature=6f601531a673dc5b34cf067781393bc6436ba992a59c48b145791a79bb4efeae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y7OY3E3%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIBt8Rpq2kO7vfxUQmZ5ErftwdiBX3KgdwzYoyGl1faiSAiAaGj%2FragxmgbmlRWOVGRz95KQ9BUJ5sUjg9gQu1yJQMyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMybEXdDEdNy%2FwiKthKtwDUik4sFtC0d2HOVvRwIDU4ZDdeLrFj%2BpUjAF7kGKcY5tRYzTHNHV64S1x7Le9nxoQauUqVK6E7BPHOQei%2FsiT5q5N9oBtFSbd77xiqy6uiLesaXI963P%2BY%2FBRVaj3YL43r1b5KszEj79UwWhv3rR5U%2F2dor9G5%2BlJIJUcs2%2BPAAucl5iOSdXOeGHx%2FVDHlJzZQfyGgjCbTdWt9j4l0GsKEucbzSMEIC0znuXB5PmL%2FHmOEiYFmegKmdNL%2FyOghlkD6XjqggbL4VJEiQxSuTva6yEnnwzgklw%2BmIoK%2FWN5lh0mNH3P1dBQjiaNqixsxRSP4dZWjHRaQoRJe4JlCAix4oGzoKFiEBwPMxVafwqQzhsNhcpkS6HDPLmI0iQOTB64H50TFagoyiH0Sub1oDj0sA6gDLiLhD7J1s6QGdvFQN7saldGxGjfRTfjdQyDEbNyhj6B4BeXmC1bE%2FrYyYdZcKueuWRmdod3T2osHhxPUKlpUwtIJUdioOtqq%2BJDsbAuMLtwzUtpRTl4%2BkgQv67n4McwzTzyzJPh1bf69OwsydVOefUypOjUcBQhVMNFCNnAVoWkBlRofAP%2FuqGaeqeUYwdZ4YKocR1IqzJkfvm55GqhljnOU7Wi7PX06HUw5MTpvgY6pgE2QrqYtHj3rry9%2FOlYMtBVxRUVLE1smZbqYnIXTnK1yoSphzbJ3qOKyWtihcysvRz3TyKXg8F3lPIbdiU2uY1sFQS3Wy1tQNLOu0C6fc2Gf4kZhyfAqjIos0U4B%2B0hAbn8TuKnhXfMTDi4Hg5i%2F75xWpo0hL4PBCc6iTHjlhPLeeqaxAwpFGhiPUHJYykZoo2iStcv7qhWueOzgF0%2B3vkPlZozRolQ&X-Amz-Signature=bf0cdb926b4e6d2aa86aa6a5ad0e5a3af919a512ca453a29cc15e0e812251450&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y7OY3E3%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIBt8Rpq2kO7vfxUQmZ5ErftwdiBX3KgdwzYoyGl1faiSAiAaGj%2FragxmgbmlRWOVGRz95KQ9BUJ5sUjg9gQu1yJQMyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMybEXdDEdNy%2FwiKthKtwDUik4sFtC0d2HOVvRwIDU4ZDdeLrFj%2BpUjAF7kGKcY5tRYzTHNHV64S1x7Le9nxoQauUqVK6E7BPHOQei%2FsiT5q5N9oBtFSbd77xiqy6uiLesaXI963P%2BY%2FBRVaj3YL43r1b5KszEj79UwWhv3rR5U%2F2dor9G5%2BlJIJUcs2%2BPAAucl5iOSdXOeGHx%2FVDHlJzZQfyGgjCbTdWt9j4l0GsKEucbzSMEIC0znuXB5PmL%2FHmOEiYFmegKmdNL%2FyOghlkD6XjqggbL4VJEiQxSuTva6yEnnwzgklw%2BmIoK%2FWN5lh0mNH3P1dBQjiaNqixsxRSP4dZWjHRaQoRJe4JlCAix4oGzoKFiEBwPMxVafwqQzhsNhcpkS6HDPLmI0iQOTB64H50TFagoyiH0Sub1oDj0sA6gDLiLhD7J1s6QGdvFQN7saldGxGjfRTfjdQyDEbNyhj6B4BeXmC1bE%2FrYyYdZcKueuWRmdod3T2osHhxPUKlpUwtIJUdioOtqq%2BJDsbAuMLtwzUtpRTl4%2BkgQv67n4McwzTzyzJPh1bf69OwsydVOefUypOjUcBQhVMNFCNnAVoWkBlRofAP%2FuqGaeqeUYwdZ4YKocR1IqzJkfvm55GqhljnOU7Wi7PX06HUw5MTpvgY6pgE2QrqYtHj3rry9%2FOlYMtBVxRUVLE1smZbqYnIXTnK1yoSphzbJ3qOKyWtihcysvRz3TyKXg8F3lPIbdiU2uY1sFQS3Wy1tQNLOu0C6fc2Gf4kZhyfAqjIos0U4B%2B0hAbn8TuKnhXfMTDi4Hg5i%2F75xWpo0hL4PBCc6iTHjlhPLeeqaxAwpFGhiPUHJYykZoo2iStcv7qhWueOzgF0%2B3vkPlZozRolQ&X-Amz-Signature=cda8da26dbd7e75b33e38e579a1fe21672ebafc656a69cc12ff5d10e5570d731&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
