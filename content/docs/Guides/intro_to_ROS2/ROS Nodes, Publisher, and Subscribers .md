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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHTHHJNV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIE8Bgsj%2BACj3zVGU8pjMMa36n8Zmwnzhy0hXonxnpoYkAiEAoeHake%2FR9SDXn6oGk9xgOMfVkFdrTktkQ0Cv8bfihlMqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKO2VnEsTMF9PlfbdircA%2F%2Fe5qQpUsPBENgTecC58wevYnT24vGtcgYFyEjCu7kR3ii6JSe10vAXEZ%2F1fw0uCA8wJQEy2anZSpqvTmxD1bCKfQF9R5H295ghI1ZNyE46LiLOUjSH1TOcTqeF7Ycl18iPQTGUS4o7pAnkDvfkCTha%2FFvit0nSzm%2FeAkK3XSCbBG9VLYeNSFcfmkGFNDwdEBe%2B96CarwTujzOYL%2F9xnuM8tVZb03KDWHChYCxem7mQ54MINIwLiAjJnzP2fKKIZGPIYeetcMD%2B3F7yavF%2FrpZjx0mCRwkrc2SO7XDn13bkzHIX%2BsiCAvqcB8OEigU2CpMo9qBvNHjREkVsvwWwFNEKjHkEiWAwMTqFFGQnKpE2jWuL1t94fl7TzoYl2oQx7Hca5Ni%2FgJIAS4%2BD6E7OGP5n84XmntkyvzKyGmu8mj7F2KCRgVr9a7K3t%2FZB7iHaNm%2FlizAZoPPWT%2BHqOiPgAwJzwb1XTak4IEp16PsDdvilT%2FBsKofNwbFiu5EnzYh2rz7iaXTMNZcyDcKCW5ZJTVSlHHFJbUt13qbMVMpFMFlH7sx%2FhBkc27tV5ROLzxFt9Y4FXcbHFknNA2KkzN8FUc0ZhDIeoiqZ0Z3K1rlDSMPuG5qRFCrHkZCQ2U5nMMeTm8QGOqUB15MDejEYnl7Xv6F0Ihy3Xvaa1W%2BeQUFvpM%2BesPP5sp%2FQ0940%2Fek3DxKVUHAuZk%2FCbWyIjmbOTtsrq4uizAAn7yxMDMnOpbbN%2BZUI3FpW%2BR%2BIMLjrVrk%2F48iPqNjelBGdRV5XscMiQZKcg6NkNCRcO77j067BcRJUD32poZ1qBLClzYXvN%2FuvPtD2dqoSirGi9P5L8j8FJOkq1aYkm71ffKxfl2C8&X-Amz-Signature=205154341b37cc14d6b02c83c985dc7a2a63514c58ee6b644edf1eb48b006c54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHTHHJNV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIE8Bgsj%2BACj3zVGU8pjMMa36n8Zmwnzhy0hXonxnpoYkAiEAoeHake%2FR9SDXn6oGk9xgOMfVkFdrTktkQ0Cv8bfihlMqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKO2VnEsTMF9PlfbdircA%2F%2Fe5qQpUsPBENgTecC58wevYnT24vGtcgYFyEjCu7kR3ii6JSe10vAXEZ%2F1fw0uCA8wJQEy2anZSpqvTmxD1bCKfQF9R5H295ghI1ZNyE46LiLOUjSH1TOcTqeF7Ycl18iPQTGUS4o7pAnkDvfkCTha%2FFvit0nSzm%2FeAkK3XSCbBG9VLYeNSFcfmkGFNDwdEBe%2B96CarwTujzOYL%2F9xnuM8tVZb03KDWHChYCxem7mQ54MINIwLiAjJnzP2fKKIZGPIYeetcMD%2B3F7yavF%2FrpZjx0mCRwkrc2SO7XDn13bkzHIX%2BsiCAvqcB8OEigU2CpMo9qBvNHjREkVsvwWwFNEKjHkEiWAwMTqFFGQnKpE2jWuL1t94fl7TzoYl2oQx7Hca5Ni%2FgJIAS4%2BD6E7OGP5n84XmntkyvzKyGmu8mj7F2KCRgVr9a7K3t%2FZB7iHaNm%2FlizAZoPPWT%2BHqOiPgAwJzwb1XTak4IEp16PsDdvilT%2FBsKofNwbFiu5EnzYh2rz7iaXTMNZcyDcKCW5ZJTVSlHHFJbUt13qbMVMpFMFlH7sx%2FhBkc27tV5ROLzxFt9Y4FXcbHFknNA2KkzN8FUc0ZhDIeoiqZ0Z3K1rlDSMPuG5qRFCrHkZCQ2U5nMMeTm8QGOqUB15MDejEYnl7Xv6F0Ihy3Xvaa1W%2BeQUFvpM%2BesPP5sp%2FQ0940%2Fek3DxKVUHAuZk%2FCbWyIjmbOTtsrq4uizAAn7yxMDMnOpbbN%2BZUI3FpW%2BR%2BIMLjrVrk%2F48iPqNjelBGdRV5XscMiQZKcg6NkNCRcO77j067BcRJUD32poZ1qBLClzYXvN%2FuvPtD2dqoSirGi9P5L8j8FJOkq1aYkm71ffKxfl2C8&X-Amz-Signature=28ab61ffb4fc725c6d994c0df0d0151c3a0af4ee148c106f36eec4526bc76db8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHTHHJNV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIE8Bgsj%2BACj3zVGU8pjMMa36n8Zmwnzhy0hXonxnpoYkAiEAoeHake%2FR9SDXn6oGk9xgOMfVkFdrTktkQ0Cv8bfihlMqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKO2VnEsTMF9PlfbdircA%2F%2Fe5qQpUsPBENgTecC58wevYnT24vGtcgYFyEjCu7kR3ii6JSe10vAXEZ%2F1fw0uCA8wJQEy2anZSpqvTmxD1bCKfQF9R5H295ghI1ZNyE46LiLOUjSH1TOcTqeF7Ycl18iPQTGUS4o7pAnkDvfkCTha%2FFvit0nSzm%2FeAkK3XSCbBG9VLYeNSFcfmkGFNDwdEBe%2B96CarwTujzOYL%2F9xnuM8tVZb03KDWHChYCxem7mQ54MINIwLiAjJnzP2fKKIZGPIYeetcMD%2B3F7yavF%2FrpZjx0mCRwkrc2SO7XDn13bkzHIX%2BsiCAvqcB8OEigU2CpMo9qBvNHjREkVsvwWwFNEKjHkEiWAwMTqFFGQnKpE2jWuL1t94fl7TzoYl2oQx7Hca5Ni%2FgJIAS4%2BD6E7OGP5n84XmntkyvzKyGmu8mj7F2KCRgVr9a7K3t%2FZB7iHaNm%2FlizAZoPPWT%2BHqOiPgAwJzwb1XTak4IEp16PsDdvilT%2FBsKofNwbFiu5EnzYh2rz7iaXTMNZcyDcKCW5ZJTVSlHHFJbUt13qbMVMpFMFlH7sx%2FhBkc27tV5ROLzxFt9Y4FXcbHFknNA2KkzN8FUc0ZhDIeoiqZ0Z3K1rlDSMPuG5qRFCrHkZCQ2U5nMMeTm8QGOqUB15MDejEYnl7Xv6F0Ihy3Xvaa1W%2BeQUFvpM%2BesPP5sp%2FQ0940%2Fek3DxKVUHAuZk%2FCbWyIjmbOTtsrq4uizAAn7yxMDMnOpbbN%2BZUI3FpW%2BR%2BIMLjrVrk%2F48iPqNjelBGdRV5XscMiQZKcg6NkNCRcO77j067BcRJUD32poZ1qBLClzYXvN%2FuvPtD2dqoSirGi9P5L8j8FJOkq1aYkm71ffKxfl2C8&X-Amz-Signature=0e4c9976c6bc09657374a4331055d77a40d9a8777a5311bbe990c4ad28647c16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHTHHJNV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIE8Bgsj%2BACj3zVGU8pjMMa36n8Zmwnzhy0hXonxnpoYkAiEAoeHake%2FR9SDXn6oGk9xgOMfVkFdrTktkQ0Cv8bfihlMqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKO2VnEsTMF9PlfbdircA%2F%2Fe5qQpUsPBENgTecC58wevYnT24vGtcgYFyEjCu7kR3ii6JSe10vAXEZ%2F1fw0uCA8wJQEy2anZSpqvTmxD1bCKfQF9R5H295ghI1ZNyE46LiLOUjSH1TOcTqeF7Ycl18iPQTGUS4o7pAnkDvfkCTha%2FFvit0nSzm%2FeAkK3XSCbBG9VLYeNSFcfmkGFNDwdEBe%2B96CarwTujzOYL%2F9xnuM8tVZb03KDWHChYCxem7mQ54MINIwLiAjJnzP2fKKIZGPIYeetcMD%2B3F7yavF%2FrpZjx0mCRwkrc2SO7XDn13bkzHIX%2BsiCAvqcB8OEigU2CpMo9qBvNHjREkVsvwWwFNEKjHkEiWAwMTqFFGQnKpE2jWuL1t94fl7TzoYl2oQx7Hca5Ni%2FgJIAS4%2BD6E7OGP5n84XmntkyvzKyGmu8mj7F2KCRgVr9a7K3t%2FZB7iHaNm%2FlizAZoPPWT%2BHqOiPgAwJzwb1XTak4IEp16PsDdvilT%2FBsKofNwbFiu5EnzYh2rz7iaXTMNZcyDcKCW5ZJTVSlHHFJbUt13qbMVMpFMFlH7sx%2FhBkc27tV5ROLzxFt9Y4FXcbHFknNA2KkzN8FUc0ZhDIeoiqZ0Z3K1rlDSMPuG5qRFCrHkZCQ2U5nMMeTm8QGOqUB15MDejEYnl7Xv6F0Ihy3Xvaa1W%2BeQUFvpM%2BesPP5sp%2FQ0940%2Fek3DxKVUHAuZk%2FCbWyIjmbOTtsrq4uizAAn7yxMDMnOpbbN%2BZUI3FpW%2BR%2BIMLjrVrk%2F48iPqNjelBGdRV5XscMiQZKcg6NkNCRcO77j067BcRJUD32poZ1qBLClzYXvN%2FuvPtD2dqoSirGi9P5L8j8FJOkq1aYkm71ffKxfl2C8&X-Amz-Signature=0280a72aa312e5d0161397bfdde0eed88b6b63d8022f978e5c760a2517a2be70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHTHHJNV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIE8Bgsj%2BACj3zVGU8pjMMa36n8Zmwnzhy0hXonxnpoYkAiEAoeHake%2FR9SDXn6oGk9xgOMfVkFdrTktkQ0Cv8bfihlMqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKO2VnEsTMF9PlfbdircA%2F%2Fe5qQpUsPBENgTecC58wevYnT24vGtcgYFyEjCu7kR3ii6JSe10vAXEZ%2F1fw0uCA8wJQEy2anZSpqvTmxD1bCKfQF9R5H295ghI1ZNyE46LiLOUjSH1TOcTqeF7Ycl18iPQTGUS4o7pAnkDvfkCTha%2FFvit0nSzm%2FeAkK3XSCbBG9VLYeNSFcfmkGFNDwdEBe%2B96CarwTujzOYL%2F9xnuM8tVZb03KDWHChYCxem7mQ54MINIwLiAjJnzP2fKKIZGPIYeetcMD%2B3F7yavF%2FrpZjx0mCRwkrc2SO7XDn13bkzHIX%2BsiCAvqcB8OEigU2CpMo9qBvNHjREkVsvwWwFNEKjHkEiWAwMTqFFGQnKpE2jWuL1t94fl7TzoYl2oQx7Hca5Ni%2FgJIAS4%2BD6E7OGP5n84XmntkyvzKyGmu8mj7F2KCRgVr9a7K3t%2FZB7iHaNm%2FlizAZoPPWT%2BHqOiPgAwJzwb1XTak4IEp16PsDdvilT%2FBsKofNwbFiu5EnzYh2rz7iaXTMNZcyDcKCW5ZJTVSlHHFJbUt13qbMVMpFMFlH7sx%2FhBkc27tV5ROLzxFt9Y4FXcbHFknNA2KkzN8FUc0ZhDIeoiqZ0Z3K1rlDSMPuG5qRFCrHkZCQ2U5nMMeTm8QGOqUB15MDejEYnl7Xv6F0Ihy3Xvaa1W%2BeQUFvpM%2BesPP5sp%2FQ0940%2Fek3DxKVUHAuZk%2FCbWyIjmbOTtsrq4uizAAn7yxMDMnOpbbN%2BZUI3FpW%2BR%2BIMLjrVrk%2F48iPqNjelBGdRV5XscMiQZKcg6NkNCRcO77j067BcRJUD32poZ1qBLClzYXvN%2FuvPtD2dqoSirGi9P5L8j8FJOkq1aYkm71ffKxfl2C8&X-Amz-Signature=e0b1ae8f68b81f7184e17e3b323965d7954f0085d02c85cc1534904092cf200e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHTHHJNV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIE8Bgsj%2BACj3zVGU8pjMMa36n8Zmwnzhy0hXonxnpoYkAiEAoeHake%2FR9SDXn6oGk9xgOMfVkFdrTktkQ0Cv8bfihlMqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKO2VnEsTMF9PlfbdircA%2F%2Fe5qQpUsPBENgTecC58wevYnT24vGtcgYFyEjCu7kR3ii6JSe10vAXEZ%2F1fw0uCA8wJQEy2anZSpqvTmxD1bCKfQF9R5H295ghI1ZNyE46LiLOUjSH1TOcTqeF7Ycl18iPQTGUS4o7pAnkDvfkCTha%2FFvit0nSzm%2FeAkK3XSCbBG9VLYeNSFcfmkGFNDwdEBe%2B96CarwTujzOYL%2F9xnuM8tVZb03KDWHChYCxem7mQ54MINIwLiAjJnzP2fKKIZGPIYeetcMD%2B3F7yavF%2FrpZjx0mCRwkrc2SO7XDn13bkzHIX%2BsiCAvqcB8OEigU2CpMo9qBvNHjREkVsvwWwFNEKjHkEiWAwMTqFFGQnKpE2jWuL1t94fl7TzoYl2oQx7Hca5Ni%2FgJIAS4%2BD6E7OGP5n84XmntkyvzKyGmu8mj7F2KCRgVr9a7K3t%2FZB7iHaNm%2FlizAZoPPWT%2BHqOiPgAwJzwb1XTak4IEp16PsDdvilT%2FBsKofNwbFiu5EnzYh2rz7iaXTMNZcyDcKCW5ZJTVSlHHFJbUt13qbMVMpFMFlH7sx%2FhBkc27tV5ROLzxFt9Y4FXcbHFknNA2KkzN8FUc0ZhDIeoiqZ0Z3K1rlDSMPuG5qRFCrHkZCQ2U5nMMeTm8QGOqUB15MDejEYnl7Xv6F0Ihy3Xvaa1W%2BeQUFvpM%2BesPP5sp%2FQ0940%2Fek3DxKVUHAuZk%2FCbWyIjmbOTtsrq4uizAAn7yxMDMnOpbbN%2BZUI3FpW%2BR%2BIMLjrVrk%2F48iPqNjelBGdRV5XscMiQZKcg6NkNCRcO77j067BcRJUD32poZ1qBLClzYXvN%2FuvPtD2dqoSirGi9P5L8j8FJOkq1aYkm71ffKxfl2C8&X-Amz-Signature=1844530af70f522693cb769c9f16479b13ec48b82b0e831d37a7f0f318dfbe3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHTHHJNV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIE8Bgsj%2BACj3zVGU8pjMMa36n8Zmwnzhy0hXonxnpoYkAiEAoeHake%2FR9SDXn6oGk9xgOMfVkFdrTktkQ0Cv8bfihlMqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKO2VnEsTMF9PlfbdircA%2F%2Fe5qQpUsPBENgTecC58wevYnT24vGtcgYFyEjCu7kR3ii6JSe10vAXEZ%2F1fw0uCA8wJQEy2anZSpqvTmxD1bCKfQF9R5H295ghI1ZNyE46LiLOUjSH1TOcTqeF7Ycl18iPQTGUS4o7pAnkDvfkCTha%2FFvit0nSzm%2FeAkK3XSCbBG9VLYeNSFcfmkGFNDwdEBe%2B96CarwTujzOYL%2F9xnuM8tVZb03KDWHChYCxem7mQ54MINIwLiAjJnzP2fKKIZGPIYeetcMD%2B3F7yavF%2FrpZjx0mCRwkrc2SO7XDn13bkzHIX%2BsiCAvqcB8OEigU2CpMo9qBvNHjREkVsvwWwFNEKjHkEiWAwMTqFFGQnKpE2jWuL1t94fl7TzoYl2oQx7Hca5Ni%2FgJIAS4%2BD6E7OGP5n84XmntkyvzKyGmu8mj7F2KCRgVr9a7K3t%2FZB7iHaNm%2FlizAZoPPWT%2BHqOiPgAwJzwb1XTak4IEp16PsDdvilT%2FBsKofNwbFiu5EnzYh2rz7iaXTMNZcyDcKCW5ZJTVSlHHFJbUt13qbMVMpFMFlH7sx%2FhBkc27tV5ROLzxFt9Y4FXcbHFknNA2KkzN8FUc0ZhDIeoiqZ0Z3K1rlDSMPuG5qRFCrHkZCQ2U5nMMeTm8QGOqUB15MDejEYnl7Xv6F0Ihy3Xvaa1W%2BeQUFvpM%2BesPP5sp%2FQ0940%2Fek3DxKVUHAuZk%2FCbWyIjmbOTtsrq4uizAAn7yxMDMnOpbbN%2BZUI3FpW%2BR%2BIMLjrVrk%2F48iPqNjelBGdRV5XscMiQZKcg6NkNCRcO77j067BcRJUD32poZ1qBLClzYXvN%2FuvPtD2dqoSirGi9P5L8j8FJOkq1aYkm71ffKxfl2C8&X-Amz-Signature=a3b26b3049d88cae67e29f2f5a04e926cdafba18166896bfedf9a402a0f5ad22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHTHHJNV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIE8Bgsj%2BACj3zVGU8pjMMa36n8Zmwnzhy0hXonxnpoYkAiEAoeHake%2FR9SDXn6oGk9xgOMfVkFdrTktkQ0Cv8bfihlMqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKO2VnEsTMF9PlfbdircA%2F%2Fe5qQpUsPBENgTecC58wevYnT24vGtcgYFyEjCu7kR3ii6JSe10vAXEZ%2F1fw0uCA8wJQEy2anZSpqvTmxD1bCKfQF9R5H295ghI1ZNyE46LiLOUjSH1TOcTqeF7Ycl18iPQTGUS4o7pAnkDvfkCTha%2FFvit0nSzm%2FeAkK3XSCbBG9VLYeNSFcfmkGFNDwdEBe%2B96CarwTujzOYL%2F9xnuM8tVZb03KDWHChYCxem7mQ54MINIwLiAjJnzP2fKKIZGPIYeetcMD%2B3F7yavF%2FrpZjx0mCRwkrc2SO7XDn13bkzHIX%2BsiCAvqcB8OEigU2CpMo9qBvNHjREkVsvwWwFNEKjHkEiWAwMTqFFGQnKpE2jWuL1t94fl7TzoYl2oQx7Hca5Ni%2FgJIAS4%2BD6E7OGP5n84XmntkyvzKyGmu8mj7F2KCRgVr9a7K3t%2FZB7iHaNm%2FlizAZoPPWT%2BHqOiPgAwJzwb1XTak4IEp16PsDdvilT%2FBsKofNwbFiu5EnzYh2rz7iaXTMNZcyDcKCW5ZJTVSlHHFJbUt13qbMVMpFMFlH7sx%2FhBkc27tV5ROLzxFt9Y4FXcbHFknNA2KkzN8FUc0ZhDIeoiqZ0Z3K1rlDSMPuG5qRFCrHkZCQ2U5nMMeTm8QGOqUB15MDejEYnl7Xv6F0Ihy3Xvaa1W%2BeQUFvpM%2BesPP5sp%2FQ0940%2Fek3DxKVUHAuZk%2FCbWyIjmbOTtsrq4uizAAn7yxMDMnOpbbN%2BZUI3FpW%2BR%2BIMLjrVrk%2F48iPqNjelBGdRV5XscMiQZKcg6NkNCRcO77j067BcRJUD32poZ1qBLClzYXvN%2FuvPtD2dqoSirGi9P5L8j8FJOkq1aYkm71ffKxfl2C8&X-Amz-Signature=664b97c7205500a97eaa25be419443cf50b1f73c9a5a71071f9c293e75233f1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
