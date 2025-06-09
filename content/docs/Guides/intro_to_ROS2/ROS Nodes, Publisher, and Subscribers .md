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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHCKTH2S%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBE37jDb9%2F9oBI8mfh3MdGbciZnGlkCUAgiojUwn8CukAiEA%2FCsNpGlgz%2FPLzh%2F6ByNNVkSKTdVOUWFB8yMlY3s0BwIqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKV2Ls%2FGGq90xQrQkCrcA6iU5VKmC6JfBIdIb3ce42Uv5pLu78MjUA1LlILl0fLYKEKhmo7rtBERVKLGARpvV%2FABxjwuDdC42ktG9Ot8i4mMfbUKfadvyNdGYvSIQP27eijzm29OcLpu%2FnT3x0yJk9uHvHpocYlKGgHRt8VymTYc1Tv706yjh8CDLLTVODIJQqGLhj4nAHKJx3xhKH3u0rAJR6YF3vBMBSb1vwZrPvCX4lNSm9nmWUxnrpvZ%2FAlWHfgML6hSIxg8yHUd%2BtMIVcJnZZyyXbOvi3oCla24LYAxJdcJRaQQCwqGZKEiiE%2BAzty0tiO%2BhJIqk2yabvIBVnk7HYdeMWaML9GlYZjNFDqmkgAjaQNXEKNVc%2FbfpODIv5BIKrXpgddWgdMeUfMueiHNQbvgG3J%2FCXBqt6yKXUX9ssRlYi0NbnlZAl2ABMvzSMy2Ft1gxuq%2B7f17d36ttrkOwyI%2Fr4tyRYBbZmzRiaJzAkaDwXJl9ZiSk5UHC53QhckLZKSMlaX85WoJekhCD9t%2BTj4bw5RuLZSHus27BS2AD1901DaP9GjoA7PONWq2VRYlk3Hw%2BTD23dvfXMKjm7zNImsVz0CBJbzkyAuLc%2F1Q2pijIVLAnfTXUwLqZkcb3rhYV3RaOcbz12IyMJSemsIGOqUBQZgVKpbYv4vM2%2Bq08PxQCusBcCZTjOGJENeNWtq2d7qmcZPJ%2BZ%2FB1zA5ti%2Fblwm2ko%2BW1FnG%2Bi5oz81fgeEuIq1NVqrAwlwrYknCndPLsKaGQnSDG5jaObmIJZU6amc2%2FKQWv%2Bv12z2baO2Ht%2FtP0iHO067pRCgLlP%2F0WFnoY7j9x4dRVvfPPMhrIM7jvMyiYOXUj%2Bj13vuIAArQATPAPq22SU72&X-Amz-Signature=26dd7a4169401b542fb06c6daee25de827bf1cdfbb0be87125c2515943465422&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHCKTH2S%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBE37jDb9%2F9oBI8mfh3MdGbciZnGlkCUAgiojUwn8CukAiEA%2FCsNpGlgz%2FPLzh%2F6ByNNVkSKTdVOUWFB8yMlY3s0BwIqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKV2Ls%2FGGq90xQrQkCrcA6iU5VKmC6JfBIdIb3ce42Uv5pLu78MjUA1LlILl0fLYKEKhmo7rtBERVKLGARpvV%2FABxjwuDdC42ktG9Ot8i4mMfbUKfadvyNdGYvSIQP27eijzm29OcLpu%2FnT3x0yJk9uHvHpocYlKGgHRt8VymTYc1Tv706yjh8CDLLTVODIJQqGLhj4nAHKJx3xhKH3u0rAJR6YF3vBMBSb1vwZrPvCX4lNSm9nmWUxnrpvZ%2FAlWHfgML6hSIxg8yHUd%2BtMIVcJnZZyyXbOvi3oCla24LYAxJdcJRaQQCwqGZKEiiE%2BAzty0tiO%2BhJIqk2yabvIBVnk7HYdeMWaML9GlYZjNFDqmkgAjaQNXEKNVc%2FbfpODIv5BIKrXpgddWgdMeUfMueiHNQbvgG3J%2FCXBqt6yKXUX9ssRlYi0NbnlZAl2ABMvzSMy2Ft1gxuq%2B7f17d36ttrkOwyI%2Fr4tyRYBbZmzRiaJzAkaDwXJl9ZiSk5UHC53QhckLZKSMlaX85WoJekhCD9t%2BTj4bw5RuLZSHus27BS2AD1901DaP9GjoA7PONWq2VRYlk3Hw%2BTD23dvfXMKjm7zNImsVz0CBJbzkyAuLc%2F1Q2pijIVLAnfTXUwLqZkcb3rhYV3RaOcbz12IyMJSemsIGOqUBQZgVKpbYv4vM2%2Bq08PxQCusBcCZTjOGJENeNWtq2d7qmcZPJ%2BZ%2FB1zA5ti%2Fblwm2ko%2BW1FnG%2Bi5oz81fgeEuIq1NVqrAwlwrYknCndPLsKaGQnSDG5jaObmIJZU6amc2%2FKQWv%2Bv12z2baO2Ht%2FtP0iHO067pRCgLlP%2F0WFnoY7j9x4dRVvfPPMhrIM7jvMyiYOXUj%2Bj13vuIAArQATPAPq22SU72&X-Amz-Signature=81a0b738cf9479b7ca67ba44daaf2fd6e0df869d309dbff7f9079f5b7dd39564&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHCKTH2S%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBE37jDb9%2F9oBI8mfh3MdGbciZnGlkCUAgiojUwn8CukAiEA%2FCsNpGlgz%2FPLzh%2F6ByNNVkSKTdVOUWFB8yMlY3s0BwIqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKV2Ls%2FGGq90xQrQkCrcA6iU5VKmC6JfBIdIb3ce42Uv5pLu78MjUA1LlILl0fLYKEKhmo7rtBERVKLGARpvV%2FABxjwuDdC42ktG9Ot8i4mMfbUKfadvyNdGYvSIQP27eijzm29OcLpu%2FnT3x0yJk9uHvHpocYlKGgHRt8VymTYc1Tv706yjh8CDLLTVODIJQqGLhj4nAHKJx3xhKH3u0rAJR6YF3vBMBSb1vwZrPvCX4lNSm9nmWUxnrpvZ%2FAlWHfgML6hSIxg8yHUd%2BtMIVcJnZZyyXbOvi3oCla24LYAxJdcJRaQQCwqGZKEiiE%2BAzty0tiO%2BhJIqk2yabvIBVnk7HYdeMWaML9GlYZjNFDqmkgAjaQNXEKNVc%2FbfpODIv5BIKrXpgddWgdMeUfMueiHNQbvgG3J%2FCXBqt6yKXUX9ssRlYi0NbnlZAl2ABMvzSMy2Ft1gxuq%2B7f17d36ttrkOwyI%2Fr4tyRYBbZmzRiaJzAkaDwXJl9ZiSk5UHC53QhckLZKSMlaX85WoJekhCD9t%2BTj4bw5RuLZSHus27BS2AD1901DaP9GjoA7PONWq2VRYlk3Hw%2BTD23dvfXMKjm7zNImsVz0CBJbzkyAuLc%2F1Q2pijIVLAnfTXUwLqZkcb3rhYV3RaOcbz12IyMJSemsIGOqUBQZgVKpbYv4vM2%2Bq08PxQCusBcCZTjOGJENeNWtq2d7qmcZPJ%2BZ%2FB1zA5ti%2Fblwm2ko%2BW1FnG%2Bi5oz81fgeEuIq1NVqrAwlwrYknCndPLsKaGQnSDG5jaObmIJZU6amc2%2FKQWv%2Bv12z2baO2Ht%2FtP0iHO067pRCgLlP%2F0WFnoY7j9x4dRVvfPPMhrIM7jvMyiYOXUj%2Bj13vuIAArQATPAPq22SU72&X-Amz-Signature=0d97b30dc614a3f7c97bd21979f7d217b98a2804afee41984a203a3585ae69da&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHCKTH2S%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBE37jDb9%2F9oBI8mfh3MdGbciZnGlkCUAgiojUwn8CukAiEA%2FCsNpGlgz%2FPLzh%2F6ByNNVkSKTdVOUWFB8yMlY3s0BwIqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKV2Ls%2FGGq90xQrQkCrcA6iU5VKmC6JfBIdIb3ce42Uv5pLu78MjUA1LlILl0fLYKEKhmo7rtBERVKLGARpvV%2FABxjwuDdC42ktG9Ot8i4mMfbUKfadvyNdGYvSIQP27eijzm29OcLpu%2FnT3x0yJk9uHvHpocYlKGgHRt8VymTYc1Tv706yjh8CDLLTVODIJQqGLhj4nAHKJx3xhKH3u0rAJR6YF3vBMBSb1vwZrPvCX4lNSm9nmWUxnrpvZ%2FAlWHfgML6hSIxg8yHUd%2BtMIVcJnZZyyXbOvi3oCla24LYAxJdcJRaQQCwqGZKEiiE%2BAzty0tiO%2BhJIqk2yabvIBVnk7HYdeMWaML9GlYZjNFDqmkgAjaQNXEKNVc%2FbfpODIv5BIKrXpgddWgdMeUfMueiHNQbvgG3J%2FCXBqt6yKXUX9ssRlYi0NbnlZAl2ABMvzSMy2Ft1gxuq%2B7f17d36ttrkOwyI%2Fr4tyRYBbZmzRiaJzAkaDwXJl9ZiSk5UHC53QhckLZKSMlaX85WoJekhCD9t%2BTj4bw5RuLZSHus27BS2AD1901DaP9GjoA7PONWq2VRYlk3Hw%2BTD23dvfXMKjm7zNImsVz0CBJbzkyAuLc%2F1Q2pijIVLAnfTXUwLqZkcb3rhYV3RaOcbz12IyMJSemsIGOqUBQZgVKpbYv4vM2%2Bq08PxQCusBcCZTjOGJENeNWtq2d7qmcZPJ%2BZ%2FB1zA5ti%2Fblwm2ko%2BW1FnG%2Bi5oz81fgeEuIq1NVqrAwlwrYknCndPLsKaGQnSDG5jaObmIJZU6amc2%2FKQWv%2Bv12z2baO2Ht%2FtP0iHO067pRCgLlP%2F0WFnoY7j9x4dRVvfPPMhrIM7jvMyiYOXUj%2Bj13vuIAArQATPAPq22SU72&X-Amz-Signature=9a682838092862657765c3d81a2cee49c7dbc9c8ff112d63f0d1de7454d2effd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHCKTH2S%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBE37jDb9%2F9oBI8mfh3MdGbciZnGlkCUAgiojUwn8CukAiEA%2FCsNpGlgz%2FPLzh%2F6ByNNVkSKTdVOUWFB8yMlY3s0BwIqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKV2Ls%2FGGq90xQrQkCrcA6iU5VKmC6JfBIdIb3ce42Uv5pLu78MjUA1LlILl0fLYKEKhmo7rtBERVKLGARpvV%2FABxjwuDdC42ktG9Ot8i4mMfbUKfadvyNdGYvSIQP27eijzm29OcLpu%2FnT3x0yJk9uHvHpocYlKGgHRt8VymTYc1Tv706yjh8CDLLTVODIJQqGLhj4nAHKJx3xhKH3u0rAJR6YF3vBMBSb1vwZrPvCX4lNSm9nmWUxnrpvZ%2FAlWHfgML6hSIxg8yHUd%2BtMIVcJnZZyyXbOvi3oCla24LYAxJdcJRaQQCwqGZKEiiE%2BAzty0tiO%2BhJIqk2yabvIBVnk7HYdeMWaML9GlYZjNFDqmkgAjaQNXEKNVc%2FbfpODIv5BIKrXpgddWgdMeUfMueiHNQbvgG3J%2FCXBqt6yKXUX9ssRlYi0NbnlZAl2ABMvzSMy2Ft1gxuq%2B7f17d36ttrkOwyI%2Fr4tyRYBbZmzRiaJzAkaDwXJl9ZiSk5UHC53QhckLZKSMlaX85WoJekhCD9t%2BTj4bw5RuLZSHus27BS2AD1901DaP9GjoA7PONWq2VRYlk3Hw%2BTD23dvfXMKjm7zNImsVz0CBJbzkyAuLc%2F1Q2pijIVLAnfTXUwLqZkcb3rhYV3RaOcbz12IyMJSemsIGOqUBQZgVKpbYv4vM2%2Bq08PxQCusBcCZTjOGJENeNWtq2d7qmcZPJ%2BZ%2FB1zA5ti%2Fblwm2ko%2BW1FnG%2Bi5oz81fgeEuIq1NVqrAwlwrYknCndPLsKaGQnSDG5jaObmIJZU6amc2%2FKQWv%2Bv12z2baO2Ht%2FtP0iHO067pRCgLlP%2F0WFnoY7j9x4dRVvfPPMhrIM7jvMyiYOXUj%2Bj13vuIAArQATPAPq22SU72&X-Amz-Signature=3158cab9c2e2905823e63532ccf7ace4edbc082e2aac8c93f7758b6846f7399f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHCKTH2S%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBE37jDb9%2F9oBI8mfh3MdGbciZnGlkCUAgiojUwn8CukAiEA%2FCsNpGlgz%2FPLzh%2F6ByNNVkSKTdVOUWFB8yMlY3s0BwIqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKV2Ls%2FGGq90xQrQkCrcA6iU5VKmC6JfBIdIb3ce42Uv5pLu78MjUA1LlILl0fLYKEKhmo7rtBERVKLGARpvV%2FABxjwuDdC42ktG9Ot8i4mMfbUKfadvyNdGYvSIQP27eijzm29OcLpu%2FnT3x0yJk9uHvHpocYlKGgHRt8VymTYc1Tv706yjh8CDLLTVODIJQqGLhj4nAHKJx3xhKH3u0rAJR6YF3vBMBSb1vwZrPvCX4lNSm9nmWUxnrpvZ%2FAlWHfgML6hSIxg8yHUd%2BtMIVcJnZZyyXbOvi3oCla24LYAxJdcJRaQQCwqGZKEiiE%2BAzty0tiO%2BhJIqk2yabvIBVnk7HYdeMWaML9GlYZjNFDqmkgAjaQNXEKNVc%2FbfpODIv5BIKrXpgddWgdMeUfMueiHNQbvgG3J%2FCXBqt6yKXUX9ssRlYi0NbnlZAl2ABMvzSMy2Ft1gxuq%2B7f17d36ttrkOwyI%2Fr4tyRYBbZmzRiaJzAkaDwXJl9ZiSk5UHC53QhckLZKSMlaX85WoJekhCD9t%2BTj4bw5RuLZSHus27BS2AD1901DaP9GjoA7PONWq2VRYlk3Hw%2BTD23dvfXMKjm7zNImsVz0CBJbzkyAuLc%2F1Q2pijIVLAnfTXUwLqZkcb3rhYV3RaOcbz12IyMJSemsIGOqUBQZgVKpbYv4vM2%2Bq08PxQCusBcCZTjOGJENeNWtq2d7qmcZPJ%2BZ%2FB1zA5ti%2Fblwm2ko%2BW1FnG%2Bi5oz81fgeEuIq1NVqrAwlwrYknCndPLsKaGQnSDG5jaObmIJZU6amc2%2FKQWv%2Bv12z2baO2Ht%2FtP0iHO067pRCgLlP%2F0WFnoY7j9x4dRVvfPPMhrIM7jvMyiYOXUj%2Bj13vuIAArQATPAPq22SU72&X-Amz-Signature=8af80b773a35ffe6a3a3726c819938c0f64fa356ab20023408df07c169a7ba4e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHCKTH2S%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBE37jDb9%2F9oBI8mfh3MdGbciZnGlkCUAgiojUwn8CukAiEA%2FCsNpGlgz%2FPLzh%2F6ByNNVkSKTdVOUWFB8yMlY3s0BwIqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKV2Ls%2FGGq90xQrQkCrcA6iU5VKmC6JfBIdIb3ce42Uv5pLu78MjUA1LlILl0fLYKEKhmo7rtBERVKLGARpvV%2FABxjwuDdC42ktG9Ot8i4mMfbUKfadvyNdGYvSIQP27eijzm29OcLpu%2FnT3x0yJk9uHvHpocYlKGgHRt8VymTYc1Tv706yjh8CDLLTVODIJQqGLhj4nAHKJx3xhKH3u0rAJR6YF3vBMBSb1vwZrPvCX4lNSm9nmWUxnrpvZ%2FAlWHfgML6hSIxg8yHUd%2BtMIVcJnZZyyXbOvi3oCla24LYAxJdcJRaQQCwqGZKEiiE%2BAzty0tiO%2BhJIqk2yabvIBVnk7HYdeMWaML9GlYZjNFDqmkgAjaQNXEKNVc%2FbfpODIv5BIKrXpgddWgdMeUfMueiHNQbvgG3J%2FCXBqt6yKXUX9ssRlYi0NbnlZAl2ABMvzSMy2Ft1gxuq%2B7f17d36ttrkOwyI%2Fr4tyRYBbZmzRiaJzAkaDwXJl9ZiSk5UHC53QhckLZKSMlaX85WoJekhCD9t%2BTj4bw5RuLZSHus27BS2AD1901DaP9GjoA7PONWq2VRYlk3Hw%2BTD23dvfXMKjm7zNImsVz0CBJbzkyAuLc%2F1Q2pijIVLAnfTXUwLqZkcb3rhYV3RaOcbz12IyMJSemsIGOqUBQZgVKpbYv4vM2%2Bq08PxQCusBcCZTjOGJENeNWtq2d7qmcZPJ%2BZ%2FB1zA5ti%2Fblwm2ko%2BW1FnG%2Bi5oz81fgeEuIq1NVqrAwlwrYknCndPLsKaGQnSDG5jaObmIJZU6amc2%2FKQWv%2Bv12z2baO2Ht%2FtP0iHO067pRCgLlP%2F0WFnoY7j9x4dRVvfPPMhrIM7jvMyiYOXUj%2Bj13vuIAArQATPAPq22SU72&X-Amz-Signature=52e6e876aa3bbc58ae49e25bb2334d3eb90b06a889fcdf5261b6fbe4824347da&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHCKTH2S%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBE37jDb9%2F9oBI8mfh3MdGbciZnGlkCUAgiojUwn8CukAiEA%2FCsNpGlgz%2FPLzh%2F6ByNNVkSKTdVOUWFB8yMlY3s0BwIqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKV2Ls%2FGGq90xQrQkCrcA6iU5VKmC6JfBIdIb3ce42Uv5pLu78MjUA1LlILl0fLYKEKhmo7rtBERVKLGARpvV%2FABxjwuDdC42ktG9Ot8i4mMfbUKfadvyNdGYvSIQP27eijzm29OcLpu%2FnT3x0yJk9uHvHpocYlKGgHRt8VymTYc1Tv706yjh8CDLLTVODIJQqGLhj4nAHKJx3xhKH3u0rAJR6YF3vBMBSb1vwZrPvCX4lNSm9nmWUxnrpvZ%2FAlWHfgML6hSIxg8yHUd%2BtMIVcJnZZyyXbOvi3oCla24LYAxJdcJRaQQCwqGZKEiiE%2BAzty0tiO%2BhJIqk2yabvIBVnk7HYdeMWaML9GlYZjNFDqmkgAjaQNXEKNVc%2FbfpODIv5BIKrXpgddWgdMeUfMueiHNQbvgG3J%2FCXBqt6yKXUX9ssRlYi0NbnlZAl2ABMvzSMy2Ft1gxuq%2B7f17d36ttrkOwyI%2Fr4tyRYBbZmzRiaJzAkaDwXJl9ZiSk5UHC53QhckLZKSMlaX85WoJekhCD9t%2BTj4bw5RuLZSHus27BS2AD1901DaP9GjoA7PONWq2VRYlk3Hw%2BTD23dvfXMKjm7zNImsVz0CBJbzkyAuLc%2F1Q2pijIVLAnfTXUwLqZkcb3rhYV3RaOcbz12IyMJSemsIGOqUBQZgVKpbYv4vM2%2Bq08PxQCusBcCZTjOGJENeNWtq2d7qmcZPJ%2BZ%2FB1zA5ti%2Fblwm2ko%2BW1FnG%2Bi5oz81fgeEuIq1NVqrAwlwrYknCndPLsKaGQnSDG5jaObmIJZU6amc2%2FKQWv%2Bv12z2baO2Ht%2FtP0iHO067pRCgLlP%2F0WFnoY7j9x4dRVvfPPMhrIM7jvMyiYOXUj%2Bj13vuIAArQATPAPq22SU72&X-Amz-Signature=97242b9904a5ebb49dde951fc03f7fb2c8eb8df5a779f5a2ec62b0918b6dbd81&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
