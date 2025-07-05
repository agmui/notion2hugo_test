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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLP245XJ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIAYng7P4v9sLVYU%2F1paCuue%2Fyq9nW0U1fJSzdHCGr54jAiAV%2BVXrTDL9OoPH93UbQmtOZRf5M9LAkOGL%2BHzIsVGZwyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMHHrHnnw7FjGWpOToKtwDDLElQ9nGsJAcKreFdHBhrudHgL%2FRX3qgnZ4R7F13em4eKncG6XWBJ6bDkkd8ct7Boa214xPnNHXrXxzZ8hwPUkQ8bnX8a8EeCC6yqVW52mvgK2BZX5nsn5kAY3Ic1WLabLO6mPW%2BoD9edLUwF3dFwIIAjC5hHoG8%2FZG1QOVPFNbK8YKnIU%2Bo6yTb5PYg4TqAvW0ewsMe6PS8dqe2xSDZe5tXkvOyTDEkSr1b1Y%2Bf%2BhLOkub16EP16opQP2w8TTQbE%2Fz7op6Ec%2Bk4VLUsuEwuwPJz3o2NbIJGfAPmvMjeogyqp%2BjvjVbE%2BLz9HPZSWRO%2B9D4Wz61R2OghO5hGFX%2BcWcCphiocVsCrS8MHSG0N%2BuN1eX6q6nEU6wd7Da%2FZqTMs05DIWBUBz4ZXjs2tEcINkx3WRtxa9CPq%2B7nLE23MCNRLS6h2uZU8yPGejlRy6B24H2%2BjU5tPSFmKlySlEeyuU1QSwh0Co3LOV53cvTRgh%2BxfOwlAm5W8%2BdzBHPMUb5NN7V5X5ETut9g75acpThPVlZxgFpUXdfoXUhrdz4a%2FWdpAMhyAGUn6%2FSBJhtVgyDSi6W4BNt1nFx7tMiGrNxzvrxpY3%2FBtpWm9X%2FDnfp%2F6fRjQacMBjfL8QlG1URowm4WiwwY6pgGKiuOpsy6NPPcZfjJbfHJ%2FBEcKKEnYFu5Z%2BkiVuVLC%2B6aEwBQStJXgqHNG0r0ym9U6LNJ%2FyBVjPkWxmTkdQcwNGZAVWmQKSQOX2zH6nAxfNJBpVOSI9eMXkIravTBRq21HkXEe4YFIsBMMEXJoaKOsmgjbOpIj4mdChmvxKvW04P2eHSqMAAIv%2B2xfXsqKxvRbao6DTdO9qhTdxur08q6Ud0G9I2j2&X-Amz-Signature=bd82c183671d92b1487f9e1aeb575f6f032d9dc088d4b1c3c04ff0f73850768e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLP245XJ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIAYng7P4v9sLVYU%2F1paCuue%2Fyq9nW0U1fJSzdHCGr54jAiAV%2BVXrTDL9OoPH93UbQmtOZRf5M9LAkOGL%2BHzIsVGZwyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMHHrHnnw7FjGWpOToKtwDDLElQ9nGsJAcKreFdHBhrudHgL%2FRX3qgnZ4R7F13em4eKncG6XWBJ6bDkkd8ct7Boa214xPnNHXrXxzZ8hwPUkQ8bnX8a8EeCC6yqVW52mvgK2BZX5nsn5kAY3Ic1WLabLO6mPW%2BoD9edLUwF3dFwIIAjC5hHoG8%2FZG1QOVPFNbK8YKnIU%2Bo6yTb5PYg4TqAvW0ewsMe6PS8dqe2xSDZe5tXkvOyTDEkSr1b1Y%2Bf%2BhLOkub16EP16opQP2w8TTQbE%2Fz7op6Ec%2Bk4VLUsuEwuwPJz3o2NbIJGfAPmvMjeogyqp%2BjvjVbE%2BLz9HPZSWRO%2B9D4Wz61R2OghO5hGFX%2BcWcCphiocVsCrS8MHSG0N%2BuN1eX6q6nEU6wd7Da%2FZqTMs05DIWBUBz4ZXjs2tEcINkx3WRtxa9CPq%2B7nLE23MCNRLS6h2uZU8yPGejlRy6B24H2%2BjU5tPSFmKlySlEeyuU1QSwh0Co3LOV53cvTRgh%2BxfOwlAm5W8%2BdzBHPMUb5NN7V5X5ETut9g75acpThPVlZxgFpUXdfoXUhrdz4a%2FWdpAMhyAGUn6%2FSBJhtVgyDSi6W4BNt1nFx7tMiGrNxzvrxpY3%2FBtpWm9X%2FDnfp%2F6fRjQacMBjfL8QlG1URowm4WiwwY6pgGKiuOpsy6NPPcZfjJbfHJ%2FBEcKKEnYFu5Z%2BkiVuVLC%2B6aEwBQStJXgqHNG0r0ym9U6LNJ%2FyBVjPkWxmTkdQcwNGZAVWmQKSQOX2zH6nAxfNJBpVOSI9eMXkIravTBRq21HkXEe4YFIsBMMEXJoaKOsmgjbOpIj4mdChmvxKvW04P2eHSqMAAIv%2B2xfXsqKxvRbao6DTdO9qhTdxur08q6Ud0G9I2j2&X-Amz-Signature=3c136f905be4b9bd97b678c23692d6f02f02659e589e12535830d699d61383fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLP245XJ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIAYng7P4v9sLVYU%2F1paCuue%2Fyq9nW0U1fJSzdHCGr54jAiAV%2BVXrTDL9OoPH93UbQmtOZRf5M9LAkOGL%2BHzIsVGZwyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMHHrHnnw7FjGWpOToKtwDDLElQ9nGsJAcKreFdHBhrudHgL%2FRX3qgnZ4R7F13em4eKncG6XWBJ6bDkkd8ct7Boa214xPnNHXrXxzZ8hwPUkQ8bnX8a8EeCC6yqVW52mvgK2BZX5nsn5kAY3Ic1WLabLO6mPW%2BoD9edLUwF3dFwIIAjC5hHoG8%2FZG1QOVPFNbK8YKnIU%2Bo6yTb5PYg4TqAvW0ewsMe6PS8dqe2xSDZe5tXkvOyTDEkSr1b1Y%2Bf%2BhLOkub16EP16opQP2w8TTQbE%2Fz7op6Ec%2Bk4VLUsuEwuwPJz3o2NbIJGfAPmvMjeogyqp%2BjvjVbE%2BLz9HPZSWRO%2B9D4Wz61R2OghO5hGFX%2BcWcCphiocVsCrS8MHSG0N%2BuN1eX6q6nEU6wd7Da%2FZqTMs05DIWBUBz4ZXjs2tEcINkx3WRtxa9CPq%2B7nLE23MCNRLS6h2uZU8yPGejlRy6B24H2%2BjU5tPSFmKlySlEeyuU1QSwh0Co3LOV53cvTRgh%2BxfOwlAm5W8%2BdzBHPMUb5NN7V5X5ETut9g75acpThPVlZxgFpUXdfoXUhrdz4a%2FWdpAMhyAGUn6%2FSBJhtVgyDSi6W4BNt1nFx7tMiGrNxzvrxpY3%2FBtpWm9X%2FDnfp%2F6fRjQacMBjfL8QlG1URowm4WiwwY6pgGKiuOpsy6NPPcZfjJbfHJ%2FBEcKKEnYFu5Z%2BkiVuVLC%2B6aEwBQStJXgqHNG0r0ym9U6LNJ%2FyBVjPkWxmTkdQcwNGZAVWmQKSQOX2zH6nAxfNJBpVOSI9eMXkIravTBRq21HkXEe4YFIsBMMEXJoaKOsmgjbOpIj4mdChmvxKvW04P2eHSqMAAIv%2B2xfXsqKxvRbao6DTdO9qhTdxur08q6Ud0G9I2j2&X-Amz-Signature=cdff1e023f26e8467b23f1eb61b403009f9b5d07c3762a76d2409c3ac94fc1d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLP245XJ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIAYng7P4v9sLVYU%2F1paCuue%2Fyq9nW0U1fJSzdHCGr54jAiAV%2BVXrTDL9OoPH93UbQmtOZRf5M9LAkOGL%2BHzIsVGZwyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMHHrHnnw7FjGWpOToKtwDDLElQ9nGsJAcKreFdHBhrudHgL%2FRX3qgnZ4R7F13em4eKncG6XWBJ6bDkkd8ct7Boa214xPnNHXrXxzZ8hwPUkQ8bnX8a8EeCC6yqVW52mvgK2BZX5nsn5kAY3Ic1WLabLO6mPW%2BoD9edLUwF3dFwIIAjC5hHoG8%2FZG1QOVPFNbK8YKnIU%2Bo6yTb5PYg4TqAvW0ewsMe6PS8dqe2xSDZe5tXkvOyTDEkSr1b1Y%2Bf%2BhLOkub16EP16opQP2w8TTQbE%2Fz7op6Ec%2Bk4VLUsuEwuwPJz3o2NbIJGfAPmvMjeogyqp%2BjvjVbE%2BLz9HPZSWRO%2B9D4Wz61R2OghO5hGFX%2BcWcCphiocVsCrS8MHSG0N%2BuN1eX6q6nEU6wd7Da%2FZqTMs05DIWBUBz4ZXjs2tEcINkx3WRtxa9CPq%2B7nLE23MCNRLS6h2uZU8yPGejlRy6B24H2%2BjU5tPSFmKlySlEeyuU1QSwh0Co3LOV53cvTRgh%2BxfOwlAm5W8%2BdzBHPMUb5NN7V5X5ETut9g75acpThPVlZxgFpUXdfoXUhrdz4a%2FWdpAMhyAGUn6%2FSBJhtVgyDSi6W4BNt1nFx7tMiGrNxzvrxpY3%2FBtpWm9X%2FDnfp%2F6fRjQacMBjfL8QlG1URowm4WiwwY6pgGKiuOpsy6NPPcZfjJbfHJ%2FBEcKKEnYFu5Z%2BkiVuVLC%2B6aEwBQStJXgqHNG0r0ym9U6LNJ%2FyBVjPkWxmTkdQcwNGZAVWmQKSQOX2zH6nAxfNJBpVOSI9eMXkIravTBRq21HkXEe4YFIsBMMEXJoaKOsmgjbOpIj4mdChmvxKvW04P2eHSqMAAIv%2B2xfXsqKxvRbao6DTdO9qhTdxur08q6Ud0G9I2j2&X-Amz-Signature=4e5664c6060f11215e42dfcf0b2f4193ada6addd44fb5a207a06a9f273c310e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLP245XJ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIAYng7P4v9sLVYU%2F1paCuue%2Fyq9nW0U1fJSzdHCGr54jAiAV%2BVXrTDL9OoPH93UbQmtOZRf5M9LAkOGL%2BHzIsVGZwyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMHHrHnnw7FjGWpOToKtwDDLElQ9nGsJAcKreFdHBhrudHgL%2FRX3qgnZ4R7F13em4eKncG6XWBJ6bDkkd8ct7Boa214xPnNHXrXxzZ8hwPUkQ8bnX8a8EeCC6yqVW52mvgK2BZX5nsn5kAY3Ic1WLabLO6mPW%2BoD9edLUwF3dFwIIAjC5hHoG8%2FZG1QOVPFNbK8YKnIU%2Bo6yTb5PYg4TqAvW0ewsMe6PS8dqe2xSDZe5tXkvOyTDEkSr1b1Y%2Bf%2BhLOkub16EP16opQP2w8TTQbE%2Fz7op6Ec%2Bk4VLUsuEwuwPJz3o2NbIJGfAPmvMjeogyqp%2BjvjVbE%2BLz9HPZSWRO%2B9D4Wz61R2OghO5hGFX%2BcWcCphiocVsCrS8MHSG0N%2BuN1eX6q6nEU6wd7Da%2FZqTMs05DIWBUBz4ZXjs2tEcINkx3WRtxa9CPq%2B7nLE23MCNRLS6h2uZU8yPGejlRy6B24H2%2BjU5tPSFmKlySlEeyuU1QSwh0Co3LOV53cvTRgh%2BxfOwlAm5W8%2BdzBHPMUb5NN7V5X5ETut9g75acpThPVlZxgFpUXdfoXUhrdz4a%2FWdpAMhyAGUn6%2FSBJhtVgyDSi6W4BNt1nFx7tMiGrNxzvrxpY3%2FBtpWm9X%2FDnfp%2F6fRjQacMBjfL8QlG1URowm4WiwwY6pgGKiuOpsy6NPPcZfjJbfHJ%2FBEcKKEnYFu5Z%2BkiVuVLC%2B6aEwBQStJXgqHNG0r0ym9U6LNJ%2FyBVjPkWxmTkdQcwNGZAVWmQKSQOX2zH6nAxfNJBpVOSI9eMXkIravTBRq21HkXEe4YFIsBMMEXJoaKOsmgjbOpIj4mdChmvxKvW04P2eHSqMAAIv%2B2xfXsqKxvRbao6DTdO9qhTdxur08q6Ud0G9I2j2&X-Amz-Signature=86bfb17572e632e5db756f5c2d98d8488205cd3d2fc9e72740c0b97525c878a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLP245XJ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIAYng7P4v9sLVYU%2F1paCuue%2Fyq9nW0U1fJSzdHCGr54jAiAV%2BVXrTDL9OoPH93UbQmtOZRf5M9LAkOGL%2BHzIsVGZwyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMHHrHnnw7FjGWpOToKtwDDLElQ9nGsJAcKreFdHBhrudHgL%2FRX3qgnZ4R7F13em4eKncG6XWBJ6bDkkd8ct7Boa214xPnNHXrXxzZ8hwPUkQ8bnX8a8EeCC6yqVW52mvgK2BZX5nsn5kAY3Ic1WLabLO6mPW%2BoD9edLUwF3dFwIIAjC5hHoG8%2FZG1QOVPFNbK8YKnIU%2Bo6yTb5PYg4TqAvW0ewsMe6PS8dqe2xSDZe5tXkvOyTDEkSr1b1Y%2Bf%2BhLOkub16EP16opQP2w8TTQbE%2Fz7op6Ec%2Bk4VLUsuEwuwPJz3o2NbIJGfAPmvMjeogyqp%2BjvjVbE%2BLz9HPZSWRO%2B9D4Wz61R2OghO5hGFX%2BcWcCphiocVsCrS8MHSG0N%2BuN1eX6q6nEU6wd7Da%2FZqTMs05DIWBUBz4ZXjs2tEcINkx3WRtxa9CPq%2B7nLE23MCNRLS6h2uZU8yPGejlRy6B24H2%2BjU5tPSFmKlySlEeyuU1QSwh0Co3LOV53cvTRgh%2BxfOwlAm5W8%2BdzBHPMUb5NN7V5X5ETut9g75acpThPVlZxgFpUXdfoXUhrdz4a%2FWdpAMhyAGUn6%2FSBJhtVgyDSi6W4BNt1nFx7tMiGrNxzvrxpY3%2FBtpWm9X%2FDnfp%2F6fRjQacMBjfL8QlG1URowm4WiwwY6pgGKiuOpsy6NPPcZfjJbfHJ%2FBEcKKEnYFu5Z%2BkiVuVLC%2B6aEwBQStJXgqHNG0r0ym9U6LNJ%2FyBVjPkWxmTkdQcwNGZAVWmQKSQOX2zH6nAxfNJBpVOSI9eMXkIravTBRq21HkXEe4YFIsBMMEXJoaKOsmgjbOpIj4mdChmvxKvW04P2eHSqMAAIv%2B2xfXsqKxvRbao6DTdO9qhTdxur08q6Ud0G9I2j2&X-Amz-Signature=d487c67f2203e88e1aa10886a08bc1e6e539b6f39e2e480e477e7bef6ee91fdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLP245XJ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIAYng7P4v9sLVYU%2F1paCuue%2Fyq9nW0U1fJSzdHCGr54jAiAV%2BVXrTDL9OoPH93UbQmtOZRf5M9LAkOGL%2BHzIsVGZwyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMHHrHnnw7FjGWpOToKtwDDLElQ9nGsJAcKreFdHBhrudHgL%2FRX3qgnZ4R7F13em4eKncG6XWBJ6bDkkd8ct7Boa214xPnNHXrXxzZ8hwPUkQ8bnX8a8EeCC6yqVW52mvgK2BZX5nsn5kAY3Ic1WLabLO6mPW%2BoD9edLUwF3dFwIIAjC5hHoG8%2FZG1QOVPFNbK8YKnIU%2Bo6yTb5PYg4TqAvW0ewsMe6PS8dqe2xSDZe5tXkvOyTDEkSr1b1Y%2Bf%2BhLOkub16EP16opQP2w8TTQbE%2Fz7op6Ec%2Bk4VLUsuEwuwPJz3o2NbIJGfAPmvMjeogyqp%2BjvjVbE%2BLz9HPZSWRO%2B9D4Wz61R2OghO5hGFX%2BcWcCphiocVsCrS8MHSG0N%2BuN1eX6q6nEU6wd7Da%2FZqTMs05DIWBUBz4ZXjs2tEcINkx3WRtxa9CPq%2B7nLE23MCNRLS6h2uZU8yPGejlRy6B24H2%2BjU5tPSFmKlySlEeyuU1QSwh0Co3LOV53cvTRgh%2BxfOwlAm5W8%2BdzBHPMUb5NN7V5X5ETut9g75acpThPVlZxgFpUXdfoXUhrdz4a%2FWdpAMhyAGUn6%2FSBJhtVgyDSi6W4BNt1nFx7tMiGrNxzvrxpY3%2FBtpWm9X%2FDnfp%2F6fRjQacMBjfL8QlG1URowm4WiwwY6pgGKiuOpsy6NPPcZfjJbfHJ%2FBEcKKEnYFu5Z%2BkiVuVLC%2B6aEwBQStJXgqHNG0r0ym9U6LNJ%2FyBVjPkWxmTkdQcwNGZAVWmQKSQOX2zH6nAxfNJBpVOSI9eMXkIravTBRq21HkXEe4YFIsBMMEXJoaKOsmgjbOpIj4mdChmvxKvW04P2eHSqMAAIv%2B2xfXsqKxvRbao6DTdO9qhTdxur08q6Ud0G9I2j2&X-Amz-Signature=4d786a863962b8e1ce8a217288d3125334d185766575fa75b2ce2e82133ae16f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLP245XJ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIAYng7P4v9sLVYU%2F1paCuue%2Fyq9nW0U1fJSzdHCGr54jAiAV%2BVXrTDL9OoPH93UbQmtOZRf5M9LAkOGL%2BHzIsVGZwyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMHHrHnnw7FjGWpOToKtwDDLElQ9nGsJAcKreFdHBhrudHgL%2FRX3qgnZ4R7F13em4eKncG6XWBJ6bDkkd8ct7Boa214xPnNHXrXxzZ8hwPUkQ8bnX8a8EeCC6yqVW52mvgK2BZX5nsn5kAY3Ic1WLabLO6mPW%2BoD9edLUwF3dFwIIAjC5hHoG8%2FZG1QOVPFNbK8YKnIU%2Bo6yTb5PYg4TqAvW0ewsMe6PS8dqe2xSDZe5tXkvOyTDEkSr1b1Y%2Bf%2BhLOkub16EP16opQP2w8TTQbE%2Fz7op6Ec%2Bk4VLUsuEwuwPJz3o2NbIJGfAPmvMjeogyqp%2BjvjVbE%2BLz9HPZSWRO%2B9D4Wz61R2OghO5hGFX%2BcWcCphiocVsCrS8MHSG0N%2BuN1eX6q6nEU6wd7Da%2FZqTMs05DIWBUBz4ZXjs2tEcINkx3WRtxa9CPq%2B7nLE23MCNRLS6h2uZU8yPGejlRy6B24H2%2BjU5tPSFmKlySlEeyuU1QSwh0Co3LOV53cvTRgh%2BxfOwlAm5W8%2BdzBHPMUb5NN7V5X5ETut9g75acpThPVlZxgFpUXdfoXUhrdz4a%2FWdpAMhyAGUn6%2FSBJhtVgyDSi6W4BNt1nFx7tMiGrNxzvrxpY3%2FBtpWm9X%2FDnfp%2F6fRjQacMBjfL8QlG1URowm4WiwwY6pgGKiuOpsy6NPPcZfjJbfHJ%2FBEcKKEnYFu5Z%2BkiVuVLC%2B6aEwBQStJXgqHNG0r0ym9U6LNJ%2FyBVjPkWxmTkdQcwNGZAVWmQKSQOX2zH6nAxfNJBpVOSI9eMXkIravTBRq21HkXEe4YFIsBMMEXJoaKOsmgjbOpIj4mdChmvxKvW04P2eHSqMAAIv%2B2xfXsqKxvRbao6DTdO9qhTdxur08q6Ud0G9I2j2&X-Amz-Signature=535ca0767c4aea593307f1306cd1bd2a9ec2daee3cb7ab027e4d98359b4fb2cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
