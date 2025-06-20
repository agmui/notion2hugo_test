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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDXMSYM4%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0ToEi2%2FiWQS4TJlNaWxfnroCzSEnhWjwqat8HP1qPvAiEAxU00g7bg9%2FZLIprsx5Vkc4TxWmF96SaJfv%2FU1OSUpqoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqH4s%2BxIyeJO5sNOircA3cxbeX1ELr88hO%2BMyJevTD4VXrGYMMzPWC2Z38EpLym9vzXKulI%2FJUGMEZUlwpnYF7qELWcIwbZoMv31JDg9%2BFxqJnT1hQ4mj1LSJrc%2BWXlSSpFdu2hNAkDhVXx4hmrlexjUK57n89QfhgiAfN8BbNe5Toax1Mkry0edaGMPNknjSaQEE35WVqgkUq%2F0bGONYZYeQOZFAviiTj%2Ff2VA467X1XWAt%2Fds7yLStJSdjsxqo%2FAN%2BmiqxepqbNKMHs1KJbLOTzfP5TM%2BDp2j1tztIv4lLlrEguvWTKe4iU8ertI1uiGgMxe4WLP0rg7Vnf%2BP9jp%2BKXaSqDxOonNe8KFb5lhSX82qeXrS0nVezW%2FvBHMnIZpDx%2BcGPu3CyawhKYtxi1InJRt2UiUYS1UjsaEzssZcRo%2BDGSmFCjGMajuIcmAVGDeIKkLspoLRdiA0cYfj7HveOqZfaQxsFV98%2BDvscQlypXsLw9s3nSa4Rpf%2BXQaThiRq70N3MEvMi1WlhRGuO7NMbZyFCr7KILeVq5yXiUyZp04PzVjWyvm3zf%2FAa7HHdgC39qSPswMLNbkz2X5NRMBfH%2B4NQ4f3wIGfkFbuLJoyDun7VwF5G2kuD1Mi3QKTjLZPlBMSegnVqbbsMKC908IGOqUBS2nSecEN%2BQUuaDo3en670YWJsFZE2gFBkNYJuAM8xyVCOXkGj0WmCm6TQMcyXf2bqTMPCT7wJ6zVAWHdc26ChG8QzUPaGIgULvB%2BbF%2FG%2FsiDQ%2BaCehXYqAmoH6v5aQCoGFYqMkaMxLVKSG2NY40SSCkbK4ftdFLtVAH6koiqzQbFAatK2qMB0sTmRS64sq1i6B9ufB0HhciNusYpnw2K49h1v0xv&X-Amz-Signature=178359e82a149d2bdf36d36383ab19aa0c145a6142f0167dfbb0e49762bb04f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDXMSYM4%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0ToEi2%2FiWQS4TJlNaWxfnroCzSEnhWjwqat8HP1qPvAiEAxU00g7bg9%2FZLIprsx5Vkc4TxWmF96SaJfv%2FU1OSUpqoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqH4s%2BxIyeJO5sNOircA3cxbeX1ELr88hO%2BMyJevTD4VXrGYMMzPWC2Z38EpLym9vzXKulI%2FJUGMEZUlwpnYF7qELWcIwbZoMv31JDg9%2BFxqJnT1hQ4mj1LSJrc%2BWXlSSpFdu2hNAkDhVXx4hmrlexjUK57n89QfhgiAfN8BbNe5Toax1Mkry0edaGMPNknjSaQEE35WVqgkUq%2F0bGONYZYeQOZFAviiTj%2Ff2VA467X1XWAt%2Fds7yLStJSdjsxqo%2FAN%2BmiqxepqbNKMHs1KJbLOTzfP5TM%2BDp2j1tztIv4lLlrEguvWTKe4iU8ertI1uiGgMxe4WLP0rg7Vnf%2BP9jp%2BKXaSqDxOonNe8KFb5lhSX82qeXrS0nVezW%2FvBHMnIZpDx%2BcGPu3CyawhKYtxi1InJRt2UiUYS1UjsaEzssZcRo%2BDGSmFCjGMajuIcmAVGDeIKkLspoLRdiA0cYfj7HveOqZfaQxsFV98%2BDvscQlypXsLw9s3nSa4Rpf%2BXQaThiRq70N3MEvMi1WlhRGuO7NMbZyFCr7KILeVq5yXiUyZp04PzVjWyvm3zf%2FAa7HHdgC39qSPswMLNbkz2X5NRMBfH%2B4NQ4f3wIGfkFbuLJoyDun7VwF5G2kuD1Mi3QKTjLZPlBMSegnVqbbsMKC908IGOqUBS2nSecEN%2BQUuaDo3en670YWJsFZE2gFBkNYJuAM8xyVCOXkGj0WmCm6TQMcyXf2bqTMPCT7wJ6zVAWHdc26ChG8QzUPaGIgULvB%2BbF%2FG%2FsiDQ%2BaCehXYqAmoH6v5aQCoGFYqMkaMxLVKSG2NY40SSCkbK4ftdFLtVAH6koiqzQbFAatK2qMB0sTmRS64sq1i6B9ufB0HhciNusYpnw2K49h1v0xv&X-Amz-Signature=3c49c3bff7ca850f351032c388567e29bd3b72c5da515c9890505908032095f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDXMSYM4%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0ToEi2%2FiWQS4TJlNaWxfnroCzSEnhWjwqat8HP1qPvAiEAxU00g7bg9%2FZLIprsx5Vkc4TxWmF96SaJfv%2FU1OSUpqoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqH4s%2BxIyeJO5sNOircA3cxbeX1ELr88hO%2BMyJevTD4VXrGYMMzPWC2Z38EpLym9vzXKulI%2FJUGMEZUlwpnYF7qELWcIwbZoMv31JDg9%2BFxqJnT1hQ4mj1LSJrc%2BWXlSSpFdu2hNAkDhVXx4hmrlexjUK57n89QfhgiAfN8BbNe5Toax1Mkry0edaGMPNknjSaQEE35WVqgkUq%2F0bGONYZYeQOZFAviiTj%2Ff2VA467X1XWAt%2Fds7yLStJSdjsxqo%2FAN%2BmiqxepqbNKMHs1KJbLOTzfP5TM%2BDp2j1tztIv4lLlrEguvWTKe4iU8ertI1uiGgMxe4WLP0rg7Vnf%2BP9jp%2BKXaSqDxOonNe8KFb5lhSX82qeXrS0nVezW%2FvBHMnIZpDx%2BcGPu3CyawhKYtxi1InJRt2UiUYS1UjsaEzssZcRo%2BDGSmFCjGMajuIcmAVGDeIKkLspoLRdiA0cYfj7HveOqZfaQxsFV98%2BDvscQlypXsLw9s3nSa4Rpf%2BXQaThiRq70N3MEvMi1WlhRGuO7NMbZyFCr7KILeVq5yXiUyZp04PzVjWyvm3zf%2FAa7HHdgC39qSPswMLNbkz2X5NRMBfH%2B4NQ4f3wIGfkFbuLJoyDun7VwF5G2kuD1Mi3QKTjLZPlBMSegnVqbbsMKC908IGOqUBS2nSecEN%2BQUuaDo3en670YWJsFZE2gFBkNYJuAM8xyVCOXkGj0WmCm6TQMcyXf2bqTMPCT7wJ6zVAWHdc26ChG8QzUPaGIgULvB%2BbF%2FG%2FsiDQ%2BaCehXYqAmoH6v5aQCoGFYqMkaMxLVKSG2NY40SSCkbK4ftdFLtVAH6koiqzQbFAatK2qMB0sTmRS64sq1i6B9ufB0HhciNusYpnw2K49h1v0xv&X-Amz-Signature=f93f344c1d9169cc8b56ffd8e69889039d5937219b9484498fafa8612ab39f8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDXMSYM4%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0ToEi2%2FiWQS4TJlNaWxfnroCzSEnhWjwqat8HP1qPvAiEAxU00g7bg9%2FZLIprsx5Vkc4TxWmF96SaJfv%2FU1OSUpqoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqH4s%2BxIyeJO5sNOircA3cxbeX1ELr88hO%2BMyJevTD4VXrGYMMzPWC2Z38EpLym9vzXKulI%2FJUGMEZUlwpnYF7qELWcIwbZoMv31JDg9%2BFxqJnT1hQ4mj1LSJrc%2BWXlSSpFdu2hNAkDhVXx4hmrlexjUK57n89QfhgiAfN8BbNe5Toax1Mkry0edaGMPNknjSaQEE35WVqgkUq%2F0bGONYZYeQOZFAviiTj%2Ff2VA467X1XWAt%2Fds7yLStJSdjsxqo%2FAN%2BmiqxepqbNKMHs1KJbLOTzfP5TM%2BDp2j1tztIv4lLlrEguvWTKe4iU8ertI1uiGgMxe4WLP0rg7Vnf%2BP9jp%2BKXaSqDxOonNe8KFb5lhSX82qeXrS0nVezW%2FvBHMnIZpDx%2BcGPu3CyawhKYtxi1InJRt2UiUYS1UjsaEzssZcRo%2BDGSmFCjGMajuIcmAVGDeIKkLspoLRdiA0cYfj7HveOqZfaQxsFV98%2BDvscQlypXsLw9s3nSa4Rpf%2BXQaThiRq70N3MEvMi1WlhRGuO7NMbZyFCr7KILeVq5yXiUyZp04PzVjWyvm3zf%2FAa7HHdgC39qSPswMLNbkz2X5NRMBfH%2B4NQ4f3wIGfkFbuLJoyDun7VwF5G2kuD1Mi3QKTjLZPlBMSegnVqbbsMKC908IGOqUBS2nSecEN%2BQUuaDo3en670YWJsFZE2gFBkNYJuAM8xyVCOXkGj0WmCm6TQMcyXf2bqTMPCT7wJ6zVAWHdc26ChG8QzUPaGIgULvB%2BbF%2FG%2FsiDQ%2BaCehXYqAmoH6v5aQCoGFYqMkaMxLVKSG2NY40SSCkbK4ftdFLtVAH6koiqzQbFAatK2qMB0sTmRS64sq1i6B9ufB0HhciNusYpnw2K49h1v0xv&X-Amz-Signature=ccb5bda967170d6adc21ca2f57f8a9efd42ab4967010c9f1713abb2f663c69c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDXMSYM4%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0ToEi2%2FiWQS4TJlNaWxfnroCzSEnhWjwqat8HP1qPvAiEAxU00g7bg9%2FZLIprsx5Vkc4TxWmF96SaJfv%2FU1OSUpqoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqH4s%2BxIyeJO5sNOircA3cxbeX1ELr88hO%2BMyJevTD4VXrGYMMzPWC2Z38EpLym9vzXKulI%2FJUGMEZUlwpnYF7qELWcIwbZoMv31JDg9%2BFxqJnT1hQ4mj1LSJrc%2BWXlSSpFdu2hNAkDhVXx4hmrlexjUK57n89QfhgiAfN8BbNe5Toax1Mkry0edaGMPNknjSaQEE35WVqgkUq%2F0bGONYZYeQOZFAviiTj%2Ff2VA467X1XWAt%2Fds7yLStJSdjsxqo%2FAN%2BmiqxepqbNKMHs1KJbLOTzfP5TM%2BDp2j1tztIv4lLlrEguvWTKe4iU8ertI1uiGgMxe4WLP0rg7Vnf%2BP9jp%2BKXaSqDxOonNe8KFb5lhSX82qeXrS0nVezW%2FvBHMnIZpDx%2BcGPu3CyawhKYtxi1InJRt2UiUYS1UjsaEzssZcRo%2BDGSmFCjGMajuIcmAVGDeIKkLspoLRdiA0cYfj7HveOqZfaQxsFV98%2BDvscQlypXsLw9s3nSa4Rpf%2BXQaThiRq70N3MEvMi1WlhRGuO7NMbZyFCr7KILeVq5yXiUyZp04PzVjWyvm3zf%2FAa7HHdgC39qSPswMLNbkz2X5NRMBfH%2B4NQ4f3wIGfkFbuLJoyDun7VwF5G2kuD1Mi3QKTjLZPlBMSegnVqbbsMKC908IGOqUBS2nSecEN%2BQUuaDo3en670YWJsFZE2gFBkNYJuAM8xyVCOXkGj0WmCm6TQMcyXf2bqTMPCT7wJ6zVAWHdc26ChG8QzUPaGIgULvB%2BbF%2FG%2FsiDQ%2BaCehXYqAmoH6v5aQCoGFYqMkaMxLVKSG2NY40SSCkbK4ftdFLtVAH6koiqzQbFAatK2qMB0sTmRS64sq1i6B9ufB0HhciNusYpnw2K49h1v0xv&X-Amz-Signature=a86e24c36136fb793e71eea7df75c4d05730f221d57b174070a2789ebd71e7c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDXMSYM4%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0ToEi2%2FiWQS4TJlNaWxfnroCzSEnhWjwqat8HP1qPvAiEAxU00g7bg9%2FZLIprsx5Vkc4TxWmF96SaJfv%2FU1OSUpqoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqH4s%2BxIyeJO5sNOircA3cxbeX1ELr88hO%2BMyJevTD4VXrGYMMzPWC2Z38EpLym9vzXKulI%2FJUGMEZUlwpnYF7qELWcIwbZoMv31JDg9%2BFxqJnT1hQ4mj1LSJrc%2BWXlSSpFdu2hNAkDhVXx4hmrlexjUK57n89QfhgiAfN8BbNe5Toax1Mkry0edaGMPNknjSaQEE35WVqgkUq%2F0bGONYZYeQOZFAviiTj%2Ff2VA467X1XWAt%2Fds7yLStJSdjsxqo%2FAN%2BmiqxepqbNKMHs1KJbLOTzfP5TM%2BDp2j1tztIv4lLlrEguvWTKe4iU8ertI1uiGgMxe4WLP0rg7Vnf%2BP9jp%2BKXaSqDxOonNe8KFb5lhSX82qeXrS0nVezW%2FvBHMnIZpDx%2BcGPu3CyawhKYtxi1InJRt2UiUYS1UjsaEzssZcRo%2BDGSmFCjGMajuIcmAVGDeIKkLspoLRdiA0cYfj7HveOqZfaQxsFV98%2BDvscQlypXsLw9s3nSa4Rpf%2BXQaThiRq70N3MEvMi1WlhRGuO7NMbZyFCr7KILeVq5yXiUyZp04PzVjWyvm3zf%2FAa7HHdgC39qSPswMLNbkz2X5NRMBfH%2B4NQ4f3wIGfkFbuLJoyDun7VwF5G2kuD1Mi3QKTjLZPlBMSegnVqbbsMKC908IGOqUBS2nSecEN%2BQUuaDo3en670YWJsFZE2gFBkNYJuAM8xyVCOXkGj0WmCm6TQMcyXf2bqTMPCT7wJ6zVAWHdc26ChG8QzUPaGIgULvB%2BbF%2FG%2FsiDQ%2BaCehXYqAmoH6v5aQCoGFYqMkaMxLVKSG2NY40SSCkbK4ftdFLtVAH6koiqzQbFAatK2qMB0sTmRS64sq1i6B9ufB0HhciNusYpnw2K49h1v0xv&X-Amz-Signature=ae1da57e428e4e38ac19a868df6a17339bcbe2313c9476f935b01312a353068f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDXMSYM4%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0ToEi2%2FiWQS4TJlNaWxfnroCzSEnhWjwqat8HP1qPvAiEAxU00g7bg9%2FZLIprsx5Vkc4TxWmF96SaJfv%2FU1OSUpqoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqH4s%2BxIyeJO5sNOircA3cxbeX1ELr88hO%2BMyJevTD4VXrGYMMzPWC2Z38EpLym9vzXKulI%2FJUGMEZUlwpnYF7qELWcIwbZoMv31JDg9%2BFxqJnT1hQ4mj1LSJrc%2BWXlSSpFdu2hNAkDhVXx4hmrlexjUK57n89QfhgiAfN8BbNe5Toax1Mkry0edaGMPNknjSaQEE35WVqgkUq%2F0bGONYZYeQOZFAviiTj%2Ff2VA467X1XWAt%2Fds7yLStJSdjsxqo%2FAN%2BmiqxepqbNKMHs1KJbLOTzfP5TM%2BDp2j1tztIv4lLlrEguvWTKe4iU8ertI1uiGgMxe4WLP0rg7Vnf%2BP9jp%2BKXaSqDxOonNe8KFb5lhSX82qeXrS0nVezW%2FvBHMnIZpDx%2BcGPu3CyawhKYtxi1InJRt2UiUYS1UjsaEzssZcRo%2BDGSmFCjGMajuIcmAVGDeIKkLspoLRdiA0cYfj7HveOqZfaQxsFV98%2BDvscQlypXsLw9s3nSa4Rpf%2BXQaThiRq70N3MEvMi1WlhRGuO7NMbZyFCr7KILeVq5yXiUyZp04PzVjWyvm3zf%2FAa7HHdgC39qSPswMLNbkz2X5NRMBfH%2B4NQ4f3wIGfkFbuLJoyDun7VwF5G2kuD1Mi3QKTjLZPlBMSegnVqbbsMKC908IGOqUBS2nSecEN%2BQUuaDo3en670YWJsFZE2gFBkNYJuAM8xyVCOXkGj0WmCm6TQMcyXf2bqTMPCT7wJ6zVAWHdc26ChG8QzUPaGIgULvB%2BbF%2FG%2FsiDQ%2BaCehXYqAmoH6v5aQCoGFYqMkaMxLVKSG2NY40SSCkbK4ftdFLtVAH6koiqzQbFAatK2qMB0sTmRS64sq1i6B9ufB0HhciNusYpnw2K49h1v0xv&X-Amz-Signature=456923cb7b3a1fcac69302dadd8c9093fa4f49447fdd77166b1e54ffcbe66e90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDXMSYM4%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0ToEi2%2FiWQS4TJlNaWxfnroCzSEnhWjwqat8HP1qPvAiEAxU00g7bg9%2FZLIprsx5Vkc4TxWmF96SaJfv%2FU1OSUpqoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqH4s%2BxIyeJO5sNOircA3cxbeX1ELr88hO%2BMyJevTD4VXrGYMMzPWC2Z38EpLym9vzXKulI%2FJUGMEZUlwpnYF7qELWcIwbZoMv31JDg9%2BFxqJnT1hQ4mj1LSJrc%2BWXlSSpFdu2hNAkDhVXx4hmrlexjUK57n89QfhgiAfN8BbNe5Toax1Mkry0edaGMPNknjSaQEE35WVqgkUq%2F0bGONYZYeQOZFAviiTj%2Ff2VA467X1XWAt%2Fds7yLStJSdjsxqo%2FAN%2BmiqxepqbNKMHs1KJbLOTzfP5TM%2BDp2j1tztIv4lLlrEguvWTKe4iU8ertI1uiGgMxe4WLP0rg7Vnf%2BP9jp%2BKXaSqDxOonNe8KFb5lhSX82qeXrS0nVezW%2FvBHMnIZpDx%2BcGPu3CyawhKYtxi1InJRt2UiUYS1UjsaEzssZcRo%2BDGSmFCjGMajuIcmAVGDeIKkLspoLRdiA0cYfj7HveOqZfaQxsFV98%2BDvscQlypXsLw9s3nSa4Rpf%2BXQaThiRq70N3MEvMi1WlhRGuO7NMbZyFCr7KILeVq5yXiUyZp04PzVjWyvm3zf%2FAa7HHdgC39qSPswMLNbkz2X5NRMBfH%2B4NQ4f3wIGfkFbuLJoyDun7VwF5G2kuD1Mi3QKTjLZPlBMSegnVqbbsMKC908IGOqUBS2nSecEN%2BQUuaDo3en670YWJsFZE2gFBkNYJuAM8xyVCOXkGj0WmCm6TQMcyXf2bqTMPCT7wJ6zVAWHdc26ChG8QzUPaGIgULvB%2BbF%2FG%2FsiDQ%2BaCehXYqAmoH6v5aQCoGFYqMkaMxLVKSG2NY40SSCkbK4ftdFLtVAH6koiqzQbFAatK2qMB0sTmRS64sq1i6B9ufB0HhciNusYpnw2K49h1v0xv&X-Amz-Signature=869538f25edf9f465a6c195c50f5bc8125c4be3739355f2452da5f10a28f2519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
