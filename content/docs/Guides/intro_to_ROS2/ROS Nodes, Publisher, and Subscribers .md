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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDH24VMT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpB3ZbfrwbdwINbdMiWgsQxrmjrQRkhWjk5XMbWcdIkwIgP9GoaQRqWWDqHNyQ0a7DjY6wFNxc8ldn7Z3N15ym%2BpMqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJG82NKiH7zv%2FrvDpCrcA4wRJ97luxxuBMyFZxkPtI6AkgNb3fJKqzHDBs%2BAyoOdEvWIWcmF1VygWpvEYdSQap5Ba2vxd%2BQUVuS8WtDE3KbmgVXaaguaqPU55SENTQ24qqBuGsImrDoDdu2DhkSZy4903oGfPOn3M7pP%2BT11k6EqpZ1zV%2BVYNCZuQDwJ4HyCSebK4HiE3sQI7fPIfMcm0gblDuJ%2BHjcgrV%2BRlKHofsVhO9T1pjwkE25qrI0RwRXURFgoLaFoQBv6WI2%2Fy2QxyJZU1vtNJZiXzRSa3DqR%2Fw9Yp53tTK7HRzZITNJa%2BhbAD%2Fz8if3Mb8ttRQqtulk7N21%2BCcDUymbfPPrJL2kvq9Cjqjce3S9%2Ftb3gX2y6lppx4a4pJpzWiwQEkCh48mFonEb0lkgzKMgEj%2BSAnmdRohfMt8FcTL1HRNZkvWSBXZ%2BnDesX1qA3lomdQ6K9dwaEDUvm58RERvAAVZ1k2ERrgPDt9BvPOV2Pf%2FVv8RD7Fb9WUWBoRZ1RXaAUNq4LS7itgX6R%2FNSg28stGiN1prnJeNdi4zQyPe6ZZyffXlNvBG9aqbLIeNyW7ljwKut2fS6PcUyPo4tqu9G9XXEpj3btcrQhtipHo2r6zIY8NozAgspg4kKG3rE%2BCzoEiuP%2FMNLQ0r4GOqUB83nE5JkDob0pdU2%2BBcdSXItSyv6JUSSegDIeHofvAaa1AqS8jlyxYjYr4D3cj61V%2BbdFvy5HpY%2FsKOrpE6hsoS4xWjc3kEbHlFDZs8giWnOWT6%2BAU5kic2nNEDfxRg79X1TCetX0o2efY2gnwwNhYDfTvDI6%2BISAVvr7ItSsm3udrHFg2LFFyu6lkXnxIRFiH%2B%2BqlzMewTFjOappCBZuThFk%2Biqw&X-Amz-Signature=d943df784310bdb1e5a786bc8090d4631246be023086aaec653a7f2c5f2a760c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDH24VMT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpB3ZbfrwbdwINbdMiWgsQxrmjrQRkhWjk5XMbWcdIkwIgP9GoaQRqWWDqHNyQ0a7DjY6wFNxc8ldn7Z3N15ym%2BpMqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJG82NKiH7zv%2FrvDpCrcA4wRJ97luxxuBMyFZxkPtI6AkgNb3fJKqzHDBs%2BAyoOdEvWIWcmF1VygWpvEYdSQap5Ba2vxd%2BQUVuS8WtDE3KbmgVXaaguaqPU55SENTQ24qqBuGsImrDoDdu2DhkSZy4903oGfPOn3M7pP%2BT11k6EqpZ1zV%2BVYNCZuQDwJ4HyCSebK4HiE3sQI7fPIfMcm0gblDuJ%2BHjcgrV%2BRlKHofsVhO9T1pjwkE25qrI0RwRXURFgoLaFoQBv6WI2%2Fy2QxyJZU1vtNJZiXzRSa3DqR%2Fw9Yp53tTK7HRzZITNJa%2BhbAD%2Fz8if3Mb8ttRQqtulk7N21%2BCcDUymbfPPrJL2kvq9Cjqjce3S9%2Ftb3gX2y6lppx4a4pJpzWiwQEkCh48mFonEb0lkgzKMgEj%2BSAnmdRohfMt8FcTL1HRNZkvWSBXZ%2BnDesX1qA3lomdQ6K9dwaEDUvm58RERvAAVZ1k2ERrgPDt9BvPOV2Pf%2FVv8RD7Fb9WUWBoRZ1RXaAUNq4LS7itgX6R%2FNSg28stGiN1prnJeNdi4zQyPe6ZZyffXlNvBG9aqbLIeNyW7ljwKut2fS6PcUyPo4tqu9G9XXEpj3btcrQhtipHo2r6zIY8NozAgspg4kKG3rE%2BCzoEiuP%2FMNLQ0r4GOqUB83nE5JkDob0pdU2%2BBcdSXItSyv6JUSSegDIeHofvAaa1AqS8jlyxYjYr4D3cj61V%2BbdFvy5HpY%2FsKOrpE6hsoS4xWjc3kEbHlFDZs8giWnOWT6%2BAU5kic2nNEDfxRg79X1TCetX0o2efY2gnwwNhYDfTvDI6%2BISAVvr7ItSsm3udrHFg2LFFyu6lkXnxIRFiH%2B%2BqlzMewTFjOappCBZuThFk%2Biqw&X-Amz-Signature=9f8af1e2a2d83b27e1a4a9f1aa70d18812a9185362598f8ae1a6dc0365ef5c4c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDH24VMT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpB3ZbfrwbdwINbdMiWgsQxrmjrQRkhWjk5XMbWcdIkwIgP9GoaQRqWWDqHNyQ0a7DjY6wFNxc8ldn7Z3N15ym%2BpMqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJG82NKiH7zv%2FrvDpCrcA4wRJ97luxxuBMyFZxkPtI6AkgNb3fJKqzHDBs%2BAyoOdEvWIWcmF1VygWpvEYdSQap5Ba2vxd%2BQUVuS8WtDE3KbmgVXaaguaqPU55SENTQ24qqBuGsImrDoDdu2DhkSZy4903oGfPOn3M7pP%2BT11k6EqpZ1zV%2BVYNCZuQDwJ4HyCSebK4HiE3sQI7fPIfMcm0gblDuJ%2BHjcgrV%2BRlKHofsVhO9T1pjwkE25qrI0RwRXURFgoLaFoQBv6WI2%2Fy2QxyJZU1vtNJZiXzRSa3DqR%2Fw9Yp53tTK7HRzZITNJa%2BhbAD%2Fz8if3Mb8ttRQqtulk7N21%2BCcDUymbfPPrJL2kvq9Cjqjce3S9%2Ftb3gX2y6lppx4a4pJpzWiwQEkCh48mFonEb0lkgzKMgEj%2BSAnmdRohfMt8FcTL1HRNZkvWSBXZ%2BnDesX1qA3lomdQ6K9dwaEDUvm58RERvAAVZ1k2ERrgPDt9BvPOV2Pf%2FVv8RD7Fb9WUWBoRZ1RXaAUNq4LS7itgX6R%2FNSg28stGiN1prnJeNdi4zQyPe6ZZyffXlNvBG9aqbLIeNyW7ljwKut2fS6PcUyPo4tqu9G9XXEpj3btcrQhtipHo2r6zIY8NozAgspg4kKG3rE%2BCzoEiuP%2FMNLQ0r4GOqUB83nE5JkDob0pdU2%2BBcdSXItSyv6JUSSegDIeHofvAaa1AqS8jlyxYjYr4D3cj61V%2BbdFvy5HpY%2FsKOrpE6hsoS4xWjc3kEbHlFDZs8giWnOWT6%2BAU5kic2nNEDfxRg79X1TCetX0o2efY2gnwwNhYDfTvDI6%2BISAVvr7ItSsm3udrHFg2LFFyu6lkXnxIRFiH%2B%2BqlzMewTFjOappCBZuThFk%2Biqw&X-Amz-Signature=c78f4aa4d98327488f87616fe20f66e57010d8c1479c4cee83db8a731420ff94&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDH24VMT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpB3ZbfrwbdwINbdMiWgsQxrmjrQRkhWjk5XMbWcdIkwIgP9GoaQRqWWDqHNyQ0a7DjY6wFNxc8ldn7Z3N15ym%2BpMqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJG82NKiH7zv%2FrvDpCrcA4wRJ97luxxuBMyFZxkPtI6AkgNb3fJKqzHDBs%2BAyoOdEvWIWcmF1VygWpvEYdSQap5Ba2vxd%2BQUVuS8WtDE3KbmgVXaaguaqPU55SENTQ24qqBuGsImrDoDdu2DhkSZy4903oGfPOn3M7pP%2BT11k6EqpZ1zV%2BVYNCZuQDwJ4HyCSebK4HiE3sQI7fPIfMcm0gblDuJ%2BHjcgrV%2BRlKHofsVhO9T1pjwkE25qrI0RwRXURFgoLaFoQBv6WI2%2Fy2QxyJZU1vtNJZiXzRSa3DqR%2Fw9Yp53tTK7HRzZITNJa%2BhbAD%2Fz8if3Mb8ttRQqtulk7N21%2BCcDUymbfPPrJL2kvq9Cjqjce3S9%2Ftb3gX2y6lppx4a4pJpzWiwQEkCh48mFonEb0lkgzKMgEj%2BSAnmdRohfMt8FcTL1HRNZkvWSBXZ%2BnDesX1qA3lomdQ6K9dwaEDUvm58RERvAAVZ1k2ERrgPDt9BvPOV2Pf%2FVv8RD7Fb9WUWBoRZ1RXaAUNq4LS7itgX6R%2FNSg28stGiN1prnJeNdi4zQyPe6ZZyffXlNvBG9aqbLIeNyW7ljwKut2fS6PcUyPo4tqu9G9XXEpj3btcrQhtipHo2r6zIY8NozAgspg4kKG3rE%2BCzoEiuP%2FMNLQ0r4GOqUB83nE5JkDob0pdU2%2BBcdSXItSyv6JUSSegDIeHofvAaa1AqS8jlyxYjYr4D3cj61V%2BbdFvy5HpY%2FsKOrpE6hsoS4xWjc3kEbHlFDZs8giWnOWT6%2BAU5kic2nNEDfxRg79X1TCetX0o2efY2gnwwNhYDfTvDI6%2BISAVvr7ItSsm3udrHFg2LFFyu6lkXnxIRFiH%2B%2BqlzMewTFjOappCBZuThFk%2Biqw&X-Amz-Signature=1c8e720654d260632269facf4a3adde10f96654496bd91f7eedca2577007b00e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDH24VMT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpB3ZbfrwbdwINbdMiWgsQxrmjrQRkhWjk5XMbWcdIkwIgP9GoaQRqWWDqHNyQ0a7DjY6wFNxc8ldn7Z3N15ym%2BpMqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJG82NKiH7zv%2FrvDpCrcA4wRJ97luxxuBMyFZxkPtI6AkgNb3fJKqzHDBs%2BAyoOdEvWIWcmF1VygWpvEYdSQap5Ba2vxd%2BQUVuS8WtDE3KbmgVXaaguaqPU55SENTQ24qqBuGsImrDoDdu2DhkSZy4903oGfPOn3M7pP%2BT11k6EqpZ1zV%2BVYNCZuQDwJ4HyCSebK4HiE3sQI7fPIfMcm0gblDuJ%2BHjcgrV%2BRlKHofsVhO9T1pjwkE25qrI0RwRXURFgoLaFoQBv6WI2%2Fy2QxyJZU1vtNJZiXzRSa3DqR%2Fw9Yp53tTK7HRzZITNJa%2BhbAD%2Fz8if3Mb8ttRQqtulk7N21%2BCcDUymbfPPrJL2kvq9Cjqjce3S9%2Ftb3gX2y6lppx4a4pJpzWiwQEkCh48mFonEb0lkgzKMgEj%2BSAnmdRohfMt8FcTL1HRNZkvWSBXZ%2BnDesX1qA3lomdQ6K9dwaEDUvm58RERvAAVZ1k2ERrgPDt9BvPOV2Pf%2FVv8RD7Fb9WUWBoRZ1RXaAUNq4LS7itgX6R%2FNSg28stGiN1prnJeNdi4zQyPe6ZZyffXlNvBG9aqbLIeNyW7ljwKut2fS6PcUyPo4tqu9G9XXEpj3btcrQhtipHo2r6zIY8NozAgspg4kKG3rE%2BCzoEiuP%2FMNLQ0r4GOqUB83nE5JkDob0pdU2%2BBcdSXItSyv6JUSSegDIeHofvAaa1AqS8jlyxYjYr4D3cj61V%2BbdFvy5HpY%2FsKOrpE6hsoS4xWjc3kEbHlFDZs8giWnOWT6%2BAU5kic2nNEDfxRg79X1TCetX0o2efY2gnwwNhYDfTvDI6%2BISAVvr7ItSsm3udrHFg2LFFyu6lkXnxIRFiH%2B%2BqlzMewTFjOappCBZuThFk%2Biqw&X-Amz-Signature=0b972768754701b6354a499fea815f4ea4afb8dd8ce10fa775df75b1c16c82b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDH24VMT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpB3ZbfrwbdwINbdMiWgsQxrmjrQRkhWjk5XMbWcdIkwIgP9GoaQRqWWDqHNyQ0a7DjY6wFNxc8ldn7Z3N15ym%2BpMqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJG82NKiH7zv%2FrvDpCrcA4wRJ97luxxuBMyFZxkPtI6AkgNb3fJKqzHDBs%2BAyoOdEvWIWcmF1VygWpvEYdSQap5Ba2vxd%2BQUVuS8WtDE3KbmgVXaaguaqPU55SENTQ24qqBuGsImrDoDdu2DhkSZy4903oGfPOn3M7pP%2BT11k6EqpZ1zV%2BVYNCZuQDwJ4HyCSebK4HiE3sQI7fPIfMcm0gblDuJ%2BHjcgrV%2BRlKHofsVhO9T1pjwkE25qrI0RwRXURFgoLaFoQBv6WI2%2Fy2QxyJZU1vtNJZiXzRSa3DqR%2Fw9Yp53tTK7HRzZITNJa%2BhbAD%2Fz8if3Mb8ttRQqtulk7N21%2BCcDUymbfPPrJL2kvq9Cjqjce3S9%2Ftb3gX2y6lppx4a4pJpzWiwQEkCh48mFonEb0lkgzKMgEj%2BSAnmdRohfMt8FcTL1HRNZkvWSBXZ%2BnDesX1qA3lomdQ6K9dwaEDUvm58RERvAAVZ1k2ERrgPDt9BvPOV2Pf%2FVv8RD7Fb9WUWBoRZ1RXaAUNq4LS7itgX6R%2FNSg28stGiN1prnJeNdi4zQyPe6ZZyffXlNvBG9aqbLIeNyW7ljwKut2fS6PcUyPo4tqu9G9XXEpj3btcrQhtipHo2r6zIY8NozAgspg4kKG3rE%2BCzoEiuP%2FMNLQ0r4GOqUB83nE5JkDob0pdU2%2BBcdSXItSyv6JUSSegDIeHofvAaa1AqS8jlyxYjYr4D3cj61V%2BbdFvy5HpY%2FsKOrpE6hsoS4xWjc3kEbHlFDZs8giWnOWT6%2BAU5kic2nNEDfxRg79X1TCetX0o2efY2gnwwNhYDfTvDI6%2BISAVvr7ItSsm3udrHFg2LFFyu6lkXnxIRFiH%2B%2BqlzMewTFjOappCBZuThFk%2Biqw&X-Amz-Signature=a31fa951eeee401936585b18b9bd58218eae3aa8ada222a15eacb3e974f0fc60&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDH24VMT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpB3ZbfrwbdwINbdMiWgsQxrmjrQRkhWjk5XMbWcdIkwIgP9GoaQRqWWDqHNyQ0a7DjY6wFNxc8ldn7Z3N15ym%2BpMqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJG82NKiH7zv%2FrvDpCrcA4wRJ97luxxuBMyFZxkPtI6AkgNb3fJKqzHDBs%2BAyoOdEvWIWcmF1VygWpvEYdSQap5Ba2vxd%2BQUVuS8WtDE3KbmgVXaaguaqPU55SENTQ24qqBuGsImrDoDdu2DhkSZy4903oGfPOn3M7pP%2BT11k6EqpZ1zV%2BVYNCZuQDwJ4HyCSebK4HiE3sQI7fPIfMcm0gblDuJ%2BHjcgrV%2BRlKHofsVhO9T1pjwkE25qrI0RwRXURFgoLaFoQBv6WI2%2Fy2QxyJZU1vtNJZiXzRSa3DqR%2Fw9Yp53tTK7HRzZITNJa%2BhbAD%2Fz8if3Mb8ttRQqtulk7N21%2BCcDUymbfPPrJL2kvq9Cjqjce3S9%2Ftb3gX2y6lppx4a4pJpzWiwQEkCh48mFonEb0lkgzKMgEj%2BSAnmdRohfMt8FcTL1HRNZkvWSBXZ%2BnDesX1qA3lomdQ6K9dwaEDUvm58RERvAAVZ1k2ERrgPDt9BvPOV2Pf%2FVv8RD7Fb9WUWBoRZ1RXaAUNq4LS7itgX6R%2FNSg28stGiN1prnJeNdi4zQyPe6ZZyffXlNvBG9aqbLIeNyW7ljwKut2fS6PcUyPo4tqu9G9XXEpj3btcrQhtipHo2r6zIY8NozAgspg4kKG3rE%2BCzoEiuP%2FMNLQ0r4GOqUB83nE5JkDob0pdU2%2BBcdSXItSyv6JUSSegDIeHofvAaa1AqS8jlyxYjYr4D3cj61V%2BbdFvy5HpY%2FsKOrpE6hsoS4xWjc3kEbHlFDZs8giWnOWT6%2BAU5kic2nNEDfxRg79X1TCetX0o2efY2gnwwNhYDfTvDI6%2BISAVvr7ItSsm3udrHFg2LFFyu6lkXnxIRFiH%2B%2BqlzMewTFjOappCBZuThFk%2Biqw&X-Amz-Signature=84b56699760da5577a07211bd3ec5efb8dfc67a13b5f728145a71a4ceedda78f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDH24VMT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpB3ZbfrwbdwINbdMiWgsQxrmjrQRkhWjk5XMbWcdIkwIgP9GoaQRqWWDqHNyQ0a7DjY6wFNxc8ldn7Z3N15ym%2BpMqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJG82NKiH7zv%2FrvDpCrcA4wRJ97luxxuBMyFZxkPtI6AkgNb3fJKqzHDBs%2BAyoOdEvWIWcmF1VygWpvEYdSQap5Ba2vxd%2BQUVuS8WtDE3KbmgVXaaguaqPU55SENTQ24qqBuGsImrDoDdu2DhkSZy4903oGfPOn3M7pP%2BT11k6EqpZ1zV%2BVYNCZuQDwJ4HyCSebK4HiE3sQI7fPIfMcm0gblDuJ%2BHjcgrV%2BRlKHofsVhO9T1pjwkE25qrI0RwRXURFgoLaFoQBv6WI2%2Fy2QxyJZU1vtNJZiXzRSa3DqR%2Fw9Yp53tTK7HRzZITNJa%2BhbAD%2Fz8if3Mb8ttRQqtulk7N21%2BCcDUymbfPPrJL2kvq9Cjqjce3S9%2Ftb3gX2y6lppx4a4pJpzWiwQEkCh48mFonEb0lkgzKMgEj%2BSAnmdRohfMt8FcTL1HRNZkvWSBXZ%2BnDesX1qA3lomdQ6K9dwaEDUvm58RERvAAVZ1k2ERrgPDt9BvPOV2Pf%2FVv8RD7Fb9WUWBoRZ1RXaAUNq4LS7itgX6R%2FNSg28stGiN1prnJeNdi4zQyPe6ZZyffXlNvBG9aqbLIeNyW7ljwKut2fS6PcUyPo4tqu9G9XXEpj3btcrQhtipHo2r6zIY8NozAgspg4kKG3rE%2BCzoEiuP%2FMNLQ0r4GOqUB83nE5JkDob0pdU2%2BBcdSXItSyv6JUSSegDIeHofvAaa1AqS8jlyxYjYr4D3cj61V%2BbdFvy5HpY%2FsKOrpE6hsoS4xWjc3kEbHlFDZs8giWnOWT6%2BAU5kic2nNEDfxRg79X1TCetX0o2efY2gnwwNhYDfTvDI6%2BISAVvr7ItSsm3udrHFg2LFFyu6lkXnxIRFiH%2B%2BqlzMewTFjOappCBZuThFk%2Biqw&X-Amz-Signature=7e7795147263f20630f4d7f028844971f1d694bffe748b510a4965076475316a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
