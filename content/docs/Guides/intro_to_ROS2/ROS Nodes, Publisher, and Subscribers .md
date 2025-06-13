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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOOSFRPV%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDErC1vFLNJgRXrZxjGKyKd%2BcR7P7OeVdVTOfi6BBdsQwIgd%2BPCw7eW3iDKQHI38F%2Fo54efFE%2FoocjaQW6BYbf4xRMqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlumvIkO3TSAsq7xircA6Xgowh2coJwIC91NJZcD1xiq3vobmExitkisEu9y2%2BNa2Gz2A4b9Fg17uP0I8p6BLx6WjIRqnicT1Cuv4gQILS9XTzBZmNEjQWfbbv1ZQBQZDvvcRrEwxmNuxoEjWPB7uY%2Bzs4Wplnh6t%2BadrubG4RhzHA1VJos4ciUsT%2FC9BgRATEBSex5yBIF1XWADWnXm18NmAqLswSS5cXemn0nPYXSRvmk3Hgc9k7mmDkklZ4heOKESYSWQfKwXkmL6lGkwFto3QfDcR%2BNpdUlX2CuuihWupT5zUvtPwyDxUxsMkDv25N2fdjAEkI2jURFw1%2FD%2FhJ6w0xwzCe7tVgVvllch9h5YFEu%2FvxCEWvdT5DkiIkugs8n8%2FljdGWB2a91UAdkmaiOJLUk5qkY9T2CWCM8Mbj3YlhoYYOqGx3b0xetOvKyH1mXXpLqBsugJRcWZ7vweYsBVRknyB4kmTNA0J7dxL%2Bbyiybh1eHj%2Fy9SP63wVzxTtp5P4hLSk4XWCZu%2FmkG0zE%2FG2mphtp%2FUtBo%2FmFRclR7FkBA1rDs%2B6cO33g%2FrtS2bpeuz6or1X6fXYcJlbVrtMnoP79yl%2F31m7DWaZ3paDK9fSfAa2KV0vvGKz9uSwzMExjGkW8RGFfGdFQVMM2vrsIGOqUBUJI3KcBxjJrO8ffSTpn5g5zIKh%2Bg3%2B5iypN%2Bzauuu44ZEZmkp1tK08YhDBlNpjSE63jtZ3Cv%2FlKSMwlXNWiv6mT8YSesn9snV%2FqtYuUGsWYdEsMuMe3erVGwLp344xxH%2F4Mt2L32VOSPk1BXfllmhq3mttxrL0S4F76GIKN26c84AsRFTbXskSinxuLu1%2B9HhDhG15IeMWxyxi9yL040tZ97ZN%2BJ&X-Amz-Signature=1192a8bcc807263652e3a9f49b3c4f5df90558a497fe05759657248acdb41919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOOSFRPV%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDErC1vFLNJgRXrZxjGKyKd%2BcR7P7OeVdVTOfi6BBdsQwIgd%2BPCw7eW3iDKQHI38F%2Fo54efFE%2FoocjaQW6BYbf4xRMqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlumvIkO3TSAsq7xircA6Xgowh2coJwIC91NJZcD1xiq3vobmExitkisEu9y2%2BNa2Gz2A4b9Fg17uP0I8p6BLx6WjIRqnicT1Cuv4gQILS9XTzBZmNEjQWfbbv1ZQBQZDvvcRrEwxmNuxoEjWPB7uY%2Bzs4Wplnh6t%2BadrubG4RhzHA1VJos4ciUsT%2FC9BgRATEBSex5yBIF1XWADWnXm18NmAqLswSS5cXemn0nPYXSRvmk3Hgc9k7mmDkklZ4heOKESYSWQfKwXkmL6lGkwFto3QfDcR%2BNpdUlX2CuuihWupT5zUvtPwyDxUxsMkDv25N2fdjAEkI2jURFw1%2FD%2FhJ6w0xwzCe7tVgVvllch9h5YFEu%2FvxCEWvdT5DkiIkugs8n8%2FljdGWB2a91UAdkmaiOJLUk5qkY9T2CWCM8Mbj3YlhoYYOqGx3b0xetOvKyH1mXXpLqBsugJRcWZ7vweYsBVRknyB4kmTNA0J7dxL%2Bbyiybh1eHj%2Fy9SP63wVzxTtp5P4hLSk4XWCZu%2FmkG0zE%2FG2mphtp%2FUtBo%2FmFRclR7FkBA1rDs%2B6cO33g%2FrtS2bpeuz6or1X6fXYcJlbVrtMnoP79yl%2F31m7DWaZ3paDK9fSfAa2KV0vvGKz9uSwzMExjGkW8RGFfGdFQVMM2vrsIGOqUBUJI3KcBxjJrO8ffSTpn5g5zIKh%2Bg3%2B5iypN%2Bzauuu44ZEZmkp1tK08YhDBlNpjSE63jtZ3Cv%2FlKSMwlXNWiv6mT8YSesn9snV%2FqtYuUGsWYdEsMuMe3erVGwLp344xxH%2F4Mt2L32VOSPk1BXfllmhq3mttxrL0S4F76GIKN26c84AsRFTbXskSinxuLu1%2B9HhDhG15IeMWxyxi9yL040tZ97ZN%2BJ&X-Amz-Signature=050c8e050755f21458999f224ceb67ad9973011719527cde9e8657d8db37c963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOOSFRPV%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDErC1vFLNJgRXrZxjGKyKd%2BcR7P7OeVdVTOfi6BBdsQwIgd%2BPCw7eW3iDKQHI38F%2Fo54efFE%2FoocjaQW6BYbf4xRMqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlumvIkO3TSAsq7xircA6Xgowh2coJwIC91NJZcD1xiq3vobmExitkisEu9y2%2BNa2Gz2A4b9Fg17uP0I8p6BLx6WjIRqnicT1Cuv4gQILS9XTzBZmNEjQWfbbv1ZQBQZDvvcRrEwxmNuxoEjWPB7uY%2Bzs4Wplnh6t%2BadrubG4RhzHA1VJos4ciUsT%2FC9BgRATEBSex5yBIF1XWADWnXm18NmAqLswSS5cXemn0nPYXSRvmk3Hgc9k7mmDkklZ4heOKESYSWQfKwXkmL6lGkwFto3QfDcR%2BNpdUlX2CuuihWupT5zUvtPwyDxUxsMkDv25N2fdjAEkI2jURFw1%2FD%2FhJ6w0xwzCe7tVgVvllch9h5YFEu%2FvxCEWvdT5DkiIkugs8n8%2FljdGWB2a91UAdkmaiOJLUk5qkY9T2CWCM8Mbj3YlhoYYOqGx3b0xetOvKyH1mXXpLqBsugJRcWZ7vweYsBVRknyB4kmTNA0J7dxL%2Bbyiybh1eHj%2Fy9SP63wVzxTtp5P4hLSk4XWCZu%2FmkG0zE%2FG2mphtp%2FUtBo%2FmFRclR7FkBA1rDs%2B6cO33g%2FrtS2bpeuz6or1X6fXYcJlbVrtMnoP79yl%2F31m7DWaZ3paDK9fSfAa2KV0vvGKz9uSwzMExjGkW8RGFfGdFQVMM2vrsIGOqUBUJI3KcBxjJrO8ffSTpn5g5zIKh%2Bg3%2B5iypN%2Bzauuu44ZEZmkp1tK08YhDBlNpjSE63jtZ3Cv%2FlKSMwlXNWiv6mT8YSesn9snV%2FqtYuUGsWYdEsMuMe3erVGwLp344xxH%2F4Mt2L32VOSPk1BXfllmhq3mttxrL0S4F76GIKN26c84AsRFTbXskSinxuLu1%2B9HhDhG15IeMWxyxi9yL040tZ97ZN%2BJ&X-Amz-Signature=aff97708c8347eaea2b7a493f07170d2aa526711b528c78e425a9f5609145667&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOOSFRPV%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDErC1vFLNJgRXrZxjGKyKd%2BcR7P7OeVdVTOfi6BBdsQwIgd%2BPCw7eW3iDKQHI38F%2Fo54efFE%2FoocjaQW6BYbf4xRMqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlumvIkO3TSAsq7xircA6Xgowh2coJwIC91NJZcD1xiq3vobmExitkisEu9y2%2BNa2Gz2A4b9Fg17uP0I8p6BLx6WjIRqnicT1Cuv4gQILS9XTzBZmNEjQWfbbv1ZQBQZDvvcRrEwxmNuxoEjWPB7uY%2Bzs4Wplnh6t%2BadrubG4RhzHA1VJos4ciUsT%2FC9BgRATEBSex5yBIF1XWADWnXm18NmAqLswSS5cXemn0nPYXSRvmk3Hgc9k7mmDkklZ4heOKESYSWQfKwXkmL6lGkwFto3QfDcR%2BNpdUlX2CuuihWupT5zUvtPwyDxUxsMkDv25N2fdjAEkI2jURFw1%2FD%2FhJ6w0xwzCe7tVgVvllch9h5YFEu%2FvxCEWvdT5DkiIkugs8n8%2FljdGWB2a91UAdkmaiOJLUk5qkY9T2CWCM8Mbj3YlhoYYOqGx3b0xetOvKyH1mXXpLqBsugJRcWZ7vweYsBVRknyB4kmTNA0J7dxL%2Bbyiybh1eHj%2Fy9SP63wVzxTtp5P4hLSk4XWCZu%2FmkG0zE%2FG2mphtp%2FUtBo%2FmFRclR7FkBA1rDs%2B6cO33g%2FrtS2bpeuz6or1X6fXYcJlbVrtMnoP79yl%2F31m7DWaZ3paDK9fSfAa2KV0vvGKz9uSwzMExjGkW8RGFfGdFQVMM2vrsIGOqUBUJI3KcBxjJrO8ffSTpn5g5zIKh%2Bg3%2B5iypN%2Bzauuu44ZEZmkp1tK08YhDBlNpjSE63jtZ3Cv%2FlKSMwlXNWiv6mT8YSesn9snV%2FqtYuUGsWYdEsMuMe3erVGwLp344xxH%2F4Mt2L32VOSPk1BXfllmhq3mttxrL0S4F76GIKN26c84AsRFTbXskSinxuLu1%2B9HhDhG15IeMWxyxi9yL040tZ97ZN%2BJ&X-Amz-Signature=d1de82c95e132de1c791e032059eaf51f54403219d91a4ee35e925bcb7f2478e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOOSFRPV%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDErC1vFLNJgRXrZxjGKyKd%2BcR7P7OeVdVTOfi6BBdsQwIgd%2BPCw7eW3iDKQHI38F%2Fo54efFE%2FoocjaQW6BYbf4xRMqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlumvIkO3TSAsq7xircA6Xgowh2coJwIC91NJZcD1xiq3vobmExitkisEu9y2%2BNa2Gz2A4b9Fg17uP0I8p6BLx6WjIRqnicT1Cuv4gQILS9XTzBZmNEjQWfbbv1ZQBQZDvvcRrEwxmNuxoEjWPB7uY%2Bzs4Wplnh6t%2BadrubG4RhzHA1VJos4ciUsT%2FC9BgRATEBSex5yBIF1XWADWnXm18NmAqLswSS5cXemn0nPYXSRvmk3Hgc9k7mmDkklZ4heOKESYSWQfKwXkmL6lGkwFto3QfDcR%2BNpdUlX2CuuihWupT5zUvtPwyDxUxsMkDv25N2fdjAEkI2jURFw1%2FD%2FhJ6w0xwzCe7tVgVvllch9h5YFEu%2FvxCEWvdT5DkiIkugs8n8%2FljdGWB2a91UAdkmaiOJLUk5qkY9T2CWCM8Mbj3YlhoYYOqGx3b0xetOvKyH1mXXpLqBsugJRcWZ7vweYsBVRknyB4kmTNA0J7dxL%2Bbyiybh1eHj%2Fy9SP63wVzxTtp5P4hLSk4XWCZu%2FmkG0zE%2FG2mphtp%2FUtBo%2FmFRclR7FkBA1rDs%2B6cO33g%2FrtS2bpeuz6or1X6fXYcJlbVrtMnoP79yl%2F31m7DWaZ3paDK9fSfAa2KV0vvGKz9uSwzMExjGkW8RGFfGdFQVMM2vrsIGOqUBUJI3KcBxjJrO8ffSTpn5g5zIKh%2Bg3%2B5iypN%2Bzauuu44ZEZmkp1tK08YhDBlNpjSE63jtZ3Cv%2FlKSMwlXNWiv6mT8YSesn9snV%2FqtYuUGsWYdEsMuMe3erVGwLp344xxH%2F4Mt2L32VOSPk1BXfllmhq3mttxrL0S4F76GIKN26c84AsRFTbXskSinxuLu1%2B9HhDhG15IeMWxyxi9yL040tZ97ZN%2BJ&X-Amz-Signature=dbf165fce6834e6f66c971a646c0dcaf3dd5e2e3b32ecd83d7046ec55f3f10e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOOSFRPV%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDErC1vFLNJgRXrZxjGKyKd%2BcR7P7OeVdVTOfi6BBdsQwIgd%2BPCw7eW3iDKQHI38F%2Fo54efFE%2FoocjaQW6BYbf4xRMqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlumvIkO3TSAsq7xircA6Xgowh2coJwIC91NJZcD1xiq3vobmExitkisEu9y2%2BNa2Gz2A4b9Fg17uP0I8p6BLx6WjIRqnicT1Cuv4gQILS9XTzBZmNEjQWfbbv1ZQBQZDvvcRrEwxmNuxoEjWPB7uY%2Bzs4Wplnh6t%2BadrubG4RhzHA1VJos4ciUsT%2FC9BgRATEBSex5yBIF1XWADWnXm18NmAqLswSS5cXemn0nPYXSRvmk3Hgc9k7mmDkklZ4heOKESYSWQfKwXkmL6lGkwFto3QfDcR%2BNpdUlX2CuuihWupT5zUvtPwyDxUxsMkDv25N2fdjAEkI2jURFw1%2FD%2FhJ6w0xwzCe7tVgVvllch9h5YFEu%2FvxCEWvdT5DkiIkugs8n8%2FljdGWB2a91UAdkmaiOJLUk5qkY9T2CWCM8Mbj3YlhoYYOqGx3b0xetOvKyH1mXXpLqBsugJRcWZ7vweYsBVRknyB4kmTNA0J7dxL%2Bbyiybh1eHj%2Fy9SP63wVzxTtp5P4hLSk4XWCZu%2FmkG0zE%2FG2mphtp%2FUtBo%2FmFRclR7FkBA1rDs%2B6cO33g%2FrtS2bpeuz6or1X6fXYcJlbVrtMnoP79yl%2F31m7DWaZ3paDK9fSfAa2KV0vvGKz9uSwzMExjGkW8RGFfGdFQVMM2vrsIGOqUBUJI3KcBxjJrO8ffSTpn5g5zIKh%2Bg3%2B5iypN%2Bzauuu44ZEZmkp1tK08YhDBlNpjSE63jtZ3Cv%2FlKSMwlXNWiv6mT8YSesn9snV%2FqtYuUGsWYdEsMuMe3erVGwLp344xxH%2F4Mt2L32VOSPk1BXfllmhq3mttxrL0S4F76GIKN26c84AsRFTbXskSinxuLu1%2B9HhDhG15IeMWxyxi9yL040tZ97ZN%2BJ&X-Amz-Signature=817feb05639ebc23c5c7748ef9ff52d92116be94fe82af55072bcbdeeb4b507f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOOSFRPV%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDErC1vFLNJgRXrZxjGKyKd%2BcR7P7OeVdVTOfi6BBdsQwIgd%2BPCw7eW3iDKQHI38F%2Fo54efFE%2FoocjaQW6BYbf4xRMqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlumvIkO3TSAsq7xircA6Xgowh2coJwIC91NJZcD1xiq3vobmExitkisEu9y2%2BNa2Gz2A4b9Fg17uP0I8p6BLx6WjIRqnicT1Cuv4gQILS9XTzBZmNEjQWfbbv1ZQBQZDvvcRrEwxmNuxoEjWPB7uY%2Bzs4Wplnh6t%2BadrubG4RhzHA1VJos4ciUsT%2FC9BgRATEBSex5yBIF1XWADWnXm18NmAqLswSS5cXemn0nPYXSRvmk3Hgc9k7mmDkklZ4heOKESYSWQfKwXkmL6lGkwFto3QfDcR%2BNpdUlX2CuuihWupT5zUvtPwyDxUxsMkDv25N2fdjAEkI2jURFw1%2FD%2FhJ6w0xwzCe7tVgVvllch9h5YFEu%2FvxCEWvdT5DkiIkugs8n8%2FljdGWB2a91UAdkmaiOJLUk5qkY9T2CWCM8Mbj3YlhoYYOqGx3b0xetOvKyH1mXXpLqBsugJRcWZ7vweYsBVRknyB4kmTNA0J7dxL%2Bbyiybh1eHj%2Fy9SP63wVzxTtp5P4hLSk4XWCZu%2FmkG0zE%2FG2mphtp%2FUtBo%2FmFRclR7FkBA1rDs%2B6cO33g%2FrtS2bpeuz6or1X6fXYcJlbVrtMnoP79yl%2F31m7DWaZ3paDK9fSfAa2KV0vvGKz9uSwzMExjGkW8RGFfGdFQVMM2vrsIGOqUBUJI3KcBxjJrO8ffSTpn5g5zIKh%2Bg3%2B5iypN%2Bzauuu44ZEZmkp1tK08YhDBlNpjSE63jtZ3Cv%2FlKSMwlXNWiv6mT8YSesn9snV%2FqtYuUGsWYdEsMuMe3erVGwLp344xxH%2F4Mt2L32VOSPk1BXfllmhq3mttxrL0S4F76GIKN26c84AsRFTbXskSinxuLu1%2B9HhDhG15IeMWxyxi9yL040tZ97ZN%2BJ&X-Amz-Signature=3383236088e4863c91d705be01bfc34a82c3a38e3a894d1025606d4f5c1fc654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOOSFRPV%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDErC1vFLNJgRXrZxjGKyKd%2BcR7P7OeVdVTOfi6BBdsQwIgd%2BPCw7eW3iDKQHI38F%2Fo54efFE%2FoocjaQW6BYbf4xRMqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlumvIkO3TSAsq7xircA6Xgowh2coJwIC91NJZcD1xiq3vobmExitkisEu9y2%2BNa2Gz2A4b9Fg17uP0I8p6BLx6WjIRqnicT1Cuv4gQILS9XTzBZmNEjQWfbbv1ZQBQZDvvcRrEwxmNuxoEjWPB7uY%2Bzs4Wplnh6t%2BadrubG4RhzHA1VJos4ciUsT%2FC9BgRATEBSex5yBIF1XWADWnXm18NmAqLswSS5cXemn0nPYXSRvmk3Hgc9k7mmDkklZ4heOKESYSWQfKwXkmL6lGkwFto3QfDcR%2BNpdUlX2CuuihWupT5zUvtPwyDxUxsMkDv25N2fdjAEkI2jURFw1%2FD%2FhJ6w0xwzCe7tVgVvllch9h5YFEu%2FvxCEWvdT5DkiIkugs8n8%2FljdGWB2a91UAdkmaiOJLUk5qkY9T2CWCM8Mbj3YlhoYYOqGx3b0xetOvKyH1mXXpLqBsugJRcWZ7vweYsBVRknyB4kmTNA0J7dxL%2Bbyiybh1eHj%2Fy9SP63wVzxTtp5P4hLSk4XWCZu%2FmkG0zE%2FG2mphtp%2FUtBo%2FmFRclR7FkBA1rDs%2B6cO33g%2FrtS2bpeuz6or1X6fXYcJlbVrtMnoP79yl%2F31m7DWaZ3paDK9fSfAa2KV0vvGKz9uSwzMExjGkW8RGFfGdFQVMM2vrsIGOqUBUJI3KcBxjJrO8ffSTpn5g5zIKh%2Bg3%2B5iypN%2Bzauuu44ZEZmkp1tK08YhDBlNpjSE63jtZ3Cv%2FlKSMwlXNWiv6mT8YSesn9snV%2FqtYuUGsWYdEsMuMe3erVGwLp344xxH%2F4Mt2L32VOSPk1BXfllmhq3mttxrL0S4F76GIKN26c84AsRFTbXskSinxuLu1%2B9HhDhG15IeMWxyxi9yL040tZ97ZN%2BJ&X-Amz-Signature=d8c5deaf44fd5039f50c9baa924a9f7d7e64f50abf510d579ca981df37a81eaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
