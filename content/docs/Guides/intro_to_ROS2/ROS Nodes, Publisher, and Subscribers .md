---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VJQQBW3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIB9UNE6hKX16F9YRJ5gVl4RPsXAvguYb%2FDRfFCSbhXvCAiEAkpUSkNamaBCMsYgwILf%2BUoRN8q0fuddc9jTKQ1tfNTQq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJRSYrM35yf44HMWICrcA79xRQlg5OJ5a3%2BbqGuHkHfte0rS2vVsrxJ2Ho%2FmF0%2BxHCIIQ%2FlhIoDUCYpoHKquAFudN4VPdNhh1RSPfxFRsAHhFGHLdnAOArSDgjisuA6hHwoVFtjwyUJUkeEJC3h1O4ncJE1QidjCIHHLtEoTINV5XoaYnjgsYFXdd%2B92q79fTpgC3%2BXhAiISFdQMF5bdmw2uAluhmKz1hpfzmyUPfh6VfprTrj0uqmP6cL7ogJ%2FI2PQrF1pD%2BGB9s934qEUUY2B3x1bGM0bG4vJh2m6xLNfXP%2BlUzxgMKj%2FTb9oVWqSSPSXMSn77YRhAr%2Fb57bVTYMsuzERJJ%2FHJAHamatFIQoEIorOuG8HcicTawpF%2FJIqz9eeNa5oBH%2Fuvw7aeN2XQJB47N9MrGpPeSJ527kDf3VL36WrL07gmYd%2FHMgg7opEwZMkZSm8PSGMKOLq%2Fox9ZCIT51HEoshLPaHYM3uEOS%2BtvwjHBkqekwSK4LMmQpyTZexpM6Pxvi7oy%2Fhk9%2BnNMpF1fpnJZ3ofPeww0LKUlvGOmUVwFDRJsptCHZzZ5H%2FqodtS5hUS2JwT8UUYWeqX%2Bz9nMNnNqu%2BRIhueBMBifXVGYrSpWDGRTtz1iLfydL5RUlV1TAqf0jVk6AQnnMMne9s0GOqUBRv8fy%2BzGE4%2BrR5B8INqQ7Wj2qlj3nJZilZg9UXeDbew6iQuQuF9Oy7eDff92BeXAl0KndjVpy7NJvt5XBQefwWlTm85c%2FI6UfUVEiOWyjtc9dfgYJ8ZTC%2FsWWYAESFQ9F%2Fk23bTeWrWs0J9of7ZqUduWyrr7%2FUaCj1VO5lbQILgMmiiGKj%2BkLbpVfzbxnNdMEFc1V5AFa%2BvQLlzVuY8hA94NMEtj&X-Amz-Signature=bf7a97e936d759339ac4ff32f7f0f9f38e1274e7d34d67375293e9fa7765bca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VJQQBW3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIB9UNE6hKX16F9YRJ5gVl4RPsXAvguYb%2FDRfFCSbhXvCAiEAkpUSkNamaBCMsYgwILf%2BUoRN8q0fuddc9jTKQ1tfNTQq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJRSYrM35yf44HMWICrcA79xRQlg5OJ5a3%2BbqGuHkHfte0rS2vVsrxJ2Ho%2FmF0%2BxHCIIQ%2FlhIoDUCYpoHKquAFudN4VPdNhh1RSPfxFRsAHhFGHLdnAOArSDgjisuA6hHwoVFtjwyUJUkeEJC3h1O4ncJE1QidjCIHHLtEoTINV5XoaYnjgsYFXdd%2B92q79fTpgC3%2BXhAiISFdQMF5bdmw2uAluhmKz1hpfzmyUPfh6VfprTrj0uqmP6cL7ogJ%2FI2PQrF1pD%2BGB9s934qEUUY2B3x1bGM0bG4vJh2m6xLNfXP%2BlUzxgMKj%2FTb9oVWqSSPSXMSn77YRhAr%2Fb57bVTYMsuzERJJ%2FHJAHamatFIQoEIorOuG8HcicTawpF%2FJIqz9eeNa5oBH%2Fuvw7aeN2XQJB47N9MrGpPeSJ527kDf3VL36WrL07gmYd%2FHMgg7opEwZMkZSm8PSGMKOLq%2Fox9ZCIT51HEoshLPaHYM3uEOS%2BtvwjHBkqekwSK4LMmQpyTZexpM6Pxvi7oy%2Fhk9%2BnNMpF1fpnJZ3ofPeww0LKUlvGOmUVwFDRJsptCHZzZ5H%2FqodtS5hUS2JwT8UUYWeqX%2Bz9nMNnNqu%2BRIhueBMBifXVGYrSpWDGRTtz1iLfydL5RUlV1TAqf0jVk6AQnnMMne9s0GOqUBRv8fy%2BzGE4%2BrR5B8INqQ7Wj2qlj3nJZilZg9UXeDbew6iQuQuF9Oy7eDff92BeXAl0KndjVpy7NJvt5XBQefwWlTm85c%2FI6UfUVEiOWyjtc9dfgYJ8ZTC%2FsWWYAESFQ9F%2Fk23bTeWrWs0J9of7ZqUduWyrr7%2FUaCj1VO5lbQILgMmiiGKj%2BkLbpVfzbxnNdMEFc1V5AFa%2BvQLlzVuY8hA94NMEtj&X-Amz-Signature=4b4c7286470fa17dee9919e62afa932747941351142fd1879ad233164aba19c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VJQQBW3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIB9UNE6hKX16F9YRJ5gVl4RPsXAvguYb%2FDRfFCSbhXvCAiEAkpUSkNamaBCMsYgwILf%2BUoRN8q0fuddc9jTKQ1tfNTQq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJRSYrM35yf44HMWICrcA79xRQlg5OJ5a3%2BbqGuHkHfte0rS2vVsrxJ2Ho%2FmF0%2BxHCIIQ%2FlhIoDUCYpoHKquAFudN4VPdNhh1RSPfxFRsAHhFGHLdnAOArSDgjisuA6hHwoVFtjwyUJUkeEJC3h1O4ncJE1QidjCIHHLtEoTINV5XoaYnjgsYFXdd%2B92q79fTpgC3%2BXhAiISFdQMF5bdmw2uAluhmKz1hpfzmyUPfh6VfprTrj0uqmP6cL7ogJ%2FI2PQrF1pD%2BGB9s934qEUUY2B3x1bGM0bG4vJh2m6xLNfXP%2BlUzxgMKj%2FTb9oVWqSSPSXMSn77YRhAr%2Fb57bVTYMsuzERJJ%2FHJAHamatFIQoEIorOuG8HcicTawpF%2FJIqz9eeNa5oBH%2Fuvw7aeN2XQJB47N9MrGpPeSJ527kDf3VL36WrL07gmYd%2FHMgg7opEwZMkZSm8PSGMKOLq%2Fox9ZCIT51HEoshLPaHYM3uEOS%2BtvwjHBkqekwSK4LMmQpyTZexpM6Pxvi7oy%2Fhk9%2BnNMpF1fpnJZ3ofPeww0LKUlvGOmUVwFDRJsptCHZzZ5H%2FqodtS5hUS2JwT8UUYWeqX%2Bz9nMNnNqu%2BRIhueBMBifXVGYrSpWDGRTtz1iLfydL5RUlV1TAqf0jVk6AQnnMMne9s0GOqUBRv8fy%2BzGE4%2BrR5B8INqQ7Wj2qlj3nJZilZg9UXeDbew6iQuQuF9Oy7eDff92BeXAl0KndjVpy7NJvt5XBQefwWlTm85c%2FI6UfUVEiOWyjtc9dfgYJ8ZTC%2FsWWYAESFQ9F%2Fk23bTeWrWs0J9of7ZqUduWyrr7%2FUaCj1VO5lbQILgMmiiGKj%2BkLbpVfzbxnNdMEFc1V5AFa%2BvQLlzVuY8hA94NMEtj&X-Amz-Signature=310ca12e21c42026795b8a4b64fa2a1fcdce6deb10ddc882173a84e53b5eb8ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VJQQBW3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIB9UNE6hKX16F9YRJ5gVl4RPsXAvguYb%2FDRfFCSbhXvCAiEAkpUSkNamaBCMsYgwILf%2BUoRN8q0fuddc9jTKQ1tfNTQq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJRSYrM35yf44HMWICrcA79xRQlg5OJ5a3%2BbqGuHkHfte0rS2vVsrxJ2Ho%2FmF0%2BxHCIIQ%2FlhIoDUCYpoHKquAFudN4VPdNhh1RSPfxFRsAHhFGHLdnAOArSDgjisuA6hHwoVFtjwyUJUkeEJC3h1O4ncJE1QidjCIHHLtEoTINV5XoaYnjgsYFXdd%2B92q79fTpgC3%2BXhAiISFdQMF5bdmw2uAluhmKz1hpfzmyUPfh6VfprTrj0uqmP6cL7ogJ%2FI2PQrF1pD%2BGB9s934qEUUY2B3x1bGM0bG4vJh2m6xLNfXP%2BlUzxgMKj%2FTb9oVWqSSPSXMSn77YRhAr%2Fb57bVTYMsuzERJJ%2FHJAHamatFIQoEIorOuG8HcicTawpF%2FJIqz9eeNa5oBH%2Fuvw7aeN2XQJB47N9MrGpPeSJ527kDf3VL36WrL07gmYd%2FHMgg7opEwZMkZSm8PSGMKOLq%2Fox9ZCIT51HEoshLPaHYM3uEOS%2BtvwjHBkqekwSK4LMmQpyTZexpM6Pxvi7oy%2Fhk9%2BnNMpF1fpnJZ3ofPeww0LKUlvGOmUVwFDRJsptCHZzZ5H%2FqodtS5hUS2JwT8UUYWeqX%2Bz9nMNnNqu%2BRIhueBMBifXVGYrSpWDGRTtz1iLfydL5RUlV1TAqf0jVk6AQnnMMne9s0GOqUBRv8fy%2BzGE4%2BrR5B8INqQ7Wj2qlj3nJZilZg9UXeDbew6iQuQuF9Oy7eDff92BeXAl0KndjVpy7NJvt5XBQefwWlTm85c%2FI6UfUVEiOWyjtc9dfgYJ8ZTC%2FsWWYAESFQ9F%2Fk23bTeWrWs0J9of7ZqUduWyrr7%2FUaCj1VO5lbQILgMmiiGKj%2BkLbpVfzbxnNdMEFc1V5AFa%2BvQLlzVuY8hA94NMEtj&X-Amz-Signature=7ef5b36f45fc027a9cd3ecd5daa7f8f0f32a03e9a14ca86025f35a3978f6720c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VJQQBW3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIB9UNE6hKX16F9YRJ5gVl4RPsXAvguYb%2FDRfFCSbhXvCAiEAkpUSkNamaBCMsYgwILf%2BUoRN8q0fuddc9jTKQ1tfNTQq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJRSYrM35yf44HMWICrcA79xRQlg5OJ5a3%2BbqGuHkHfte0rS2vVsrxJ2Ho%2FmF0%2BxHCIIQ%2FlhIoDUCYpoHKquAFudN4VPdNhh1RSPfxFRsAHhFGHLdnAOArSDgjisuA6hHwoVFtjwyUJUkeEJC3h1O4ncJE1QidjCIHHLtEoTINV5XoaYnjgsYFXdd%2B92q79fTpgC3%2BXhAiISFdQMF5bdmw2uAluhmKz1hpfzmyUPfh6VfprTrj0uqmP6cL7ogJ%2FI2PQrF1pD%2BGB9s934qEUUY2B3x1bGM0bG4vJh2m6xLNfXP%2BlUzxgMKj%2FTb9oVWqSSPSXMSn77YRhAr%2Fb57bVTYMsuzERJJ%2FHJAHamatFIQoEIorOuG8HcicTawpF%2FJIqz9eeNa5oBH%2Fuvw7aeN2XQJB47N9MrGpPeSJ527kDf3VL36WrL07gmYd%2FHMgg7opEwZMkZSm8PSGMKOLq%2Fox9ZCIT51HEoshLPaHYM3uEOS%2BtvwjHBkqekwSK4LMmQpyTZexpM6Pxvi7oy%2Fhk9%2BnNMpF1fpnJZ3ofPeww0LKUlvGOmUVwFDRJsptCHZzZ5H%2FqodtS5hUS2JwT8UUYWeqX%2Bz9nMNnNqu%2BRIhueBMBifXVGYrSpWDGRTtz1iLfydL5RUlV1TAqf0jVk6AQnnMMne9s0GOqUBRv8fy%2BzGE4%2BrR5B8INqQ7Wj2qlj3nJZilZg9UXeDbew6iQuQuF9Oy7eDff92BeXAl0KndjVpy7NJvt5XBQefwWlTm85c%2FI6UfUVEiOWyjtc9dfgYJ8ZTC%2FsWWYAESFQ9F%2Fk23bTeWrWs0J9of7ZqUduWyrr7%2FUaCj1VO5lbQILgMmiiGKj%2BkLbpVfzbxnNdMEFc1V5AFa%2BvQLlzVuY8hA94NMEtj&X-Amz-Signature=e42efede73abba664d5527c005aa2b24f7eb7b52ee1f0f29b13d1da1e4a2f7ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VJQQBW3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIB9UNE6hKX16F9YRJ5gVl4RPsXAvguYb%2FDRfFCSbhXvCAiEAkpUSkNamaBCMsYgwILf%2BUoRN8q0fuddc9jTKQ1tfNTQq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJRSYrM35yf44HMWICrcA79xRQlg5OJ5a3%2BbqGuHkHfte0rS2vVsrxJ2Ho%2FmF0%2BxHCIIQ%2FlhIoDUCYpoHKquAFudN4VPdNhh1RSPfxFRsAHhFGHLdnAOArSDgjisuA6hHwoVFtjwyUJUkeEJC3h1O4ncJE1QidjCIHHLtEoTINV5XoaYnjgsYFXdd%2B92q79fTpgC3%2BXhAiISFdQMF5bdmw2uAluhmKz1hpfzmyUPfh6VfprTrj0uqmP6cL7ogJ%2FI2PQrF1pD%2BGB9s934qEUUY2B3x1bGM0bG4vJh2m6xLNfXP%2BlUzxgMKj%2FTb9oVWqSSPSXMSn77YRhAr%2Fb57bVTYMsuzERJJ%2FHJAHamatFIQoEIorOuG8HcicTawpF%2FJIqz9eeNa5oBH%2Fuvw7aeN2XQJB47N9MrGpPeSJ527kDf3VL36WrL07gmYd%2FHMgg7opEwZMkZSm8PSGMKOLq%2Fox9ZCIT51HEoshLPaHYM3uEOS%2BtvwjHBkqekwSK4LMmQpyTZexpM6Pxvi7oy%2Fhk9%2BnNMpF1fpnJZ3ofPeww0LKUlvGOmUVwFDRJsptCHZzZ5H%2FqodtS5hUS2JwT8UUYWeqX%2Bz9nMNnNqu%2BRIhueBMBifXVGYrSpWDGRTtz1iLfydL5RUlV1TAqf0jVk6AQnnMMne9s0GOqUBRv8fy%2BzGE4%2BrR5B8INqQ7Wj2qlj3nJZilZg9UXeDbew6iQuQuF9Oy7eDff92BeXAl0KndjVpy7NJvt5XBQefwWlTm85c%2FI6UfUVEiOWyjtc9dfgYJ8ZTC%2FsWWYAESFQ9F%2Fk23bTeWrWs0J9of7ZqUduWyrr7%2FUaCj1VO5lbQILgMmiiGKj%2BkLbpVfzbxnNdMEFc1V5AFa%2BvQLlzVuY8hA94NMEtj&X-Amz-Signature=cb4cf9d9a393917ce4618e43e6139e9107371d937338a4986212325f0cd31dbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VJQQBW3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIB9UNE6hKX16F9YRJ5gVl4RPsXAvguYb%2FDRfFCSbhXvCAiEAkpUSkNamaBCMsYgwILf%2BUoRN8q0fuddc9jTKQ1tfNTQq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJRSYrM35yf44HMWICrcA79xRQlg5OJ5a3%2BbqGuHkHfte0rS2vVsrxJ2Ho%2FmF0%2BxHCIIQ%2FlhIoDUCYpoHKquAFudN4VPdNhh1RSPfxFRsAHhFGHLdnAOArSDgjisuA6hHwoVFtjwyUJUkeEJC3h1O4ncJE1QidjCIHHLtEoTINV5XoaYnjgsYFXdd%2B92q79fTpgC3%2BXhAiISFdQMF5bdmw2uAluhmKz1hpfzmyUPfh6VfprTrj0uqmP6cL7ogJ%2FI2PQrF1pD%2BGB9s934qEUUY2B3x1bGM0bG4vJh2m6xLNfXP%2BlUzxgMKj%2FTb9oVWqSSPSXMSn77YRhAr%2Fb57bVTYMsuzERJJ%2FHJAHamatFIQoEIorOuG8HcicTawpF%2FJIqz9eeNa5oBH%2Fuvw7aeN2XQJB47N9MrGpPeSJ527kDf3VL36WrL07gmYd%2FHMgg7opEwZMkZSm8PSGMKOLq%2Fox9ZCIT51HEoshLPaHYM3uEOS%2BtvwjHBkqekwSK4LMmQpyTZexpM6Pxvi7oy%2Fhk9%2BnNMpF1fpnJZ3ofPeww0LKUlvGOmUVwFDRJsptCHZzZ5H%2FqodtS5hUS2JwT8UUYWeqX%2Bz9nMNnNqu%2BRIhueBMBifXVGYrSpWDGRTtz1iLfydL5RUlV1TAqf0jVk6AQnnMMne9s0GOqUBRv8fy%2BzGE4%2BrR5B8INqQ7Wj2qlj3nJZilZg9UXeDbew6iQuQuF9Oy7eDff92BeXAl0KndjVpy7NJvt5XBQefwWlTm85c%2FI6UfUVEiOWyjtc9dfgYJ8ZTC%2FsWWYAESFQ9F%2Fk23bTeWrWs0J9of7ZqUduWyrr7%2FUaCj1VO5lbQILgMmiiGKj%2BkLbpVfzbxnNdMEFc1V5AFa%2BvQLlzVuY8hA94NMEtj&X-Amz-Signature=030135f9c6406fefce0fc0b6d0aabfbacf88db715e0c2ae60e17aea2f791c246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VJQQBW3%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIB9UNE6hKX16F9YRJ5gVl4RPsXAvguYb%2FDRfFCSbhXvCAiEAkpUSkNamaBCMsYgwILf%2BUoRN8q0fuddc9jTKQ1tfNTQq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJRSYrM35yf44HMWICrcA79xRQlg5OJ5a3%2BbqGuHkHfte0rS2vVsrxJ2Ho%2FmF0%2BxHCIIQ%2FlhIoDUCYpoHKquAFudN4VPdNhh1RSPfxFRsAHhFGHLdnAOArSDgjisuA6hHwoVFtjwyUJUkeEJC3h1O4ncJE1QidjCIHHLtEoTINV5XoaYnjgsYFXdd%2B92q79fTpgC3%2BXhAiISFdQMF5bdmw2uAluhmKz1hpfzmyUPfh6VfprTrj0uqmP6cL7ogJ%2FI2PQrF1pD%2BGB9s934qEUUY2B3x1bGM0bG4vJh2m6xLNfXP%2BlUzxgMKj%2FTb9oVWqSSPSXMSn77YRhAr%2Fb57bVTYMsuzERJJ%2FHJAHamatFIQoEIorOuG8HcicTawpF%2FJIqz9eeNa5oBH%2Fuvw7aeN2XQJB47N9MrGpPeSJ527kDf3VL36WrL07gmYd%2FHMgg7opEwZMkZSm8PSGMKOLq%2Fox9ZCIT51HEoshLPaHYM3uEOS%2BtvwjHBkqekwSK4LMmQpyTZexpM6Pxvi7oy%2Fhk9%2BnNMpF1fpnJZ3ofPeww0LKUlvGOmUVwFDRJsptCHZzZ5H%2FqodtS5hUS2JwT8UUYWeqX%2Bz9nMNnNqu%2BRIhueBMBifXVGYrSpWDGRTtz1iLfydL5RUlV1TAqf0jVk6AQnnMMne9s0GOqUBRv8fy%2BzGE4%2BrR5B8INqQ7Wj2qlj3nJZilZg9UXeDbew6iQuQuF9Oy7eDff92BeXAl0KndjVpy7NJvt5XBQefwWlTm85c%2FI6UfUVEiOWyjtc9dfgYJ8ZTC%2FsWWYAESFQ9F%2Fk23bTeWrWs0J9of7ZqUduWyrr7%2FUaCj1VO5lbQILgMmiiGKj%2BkLbpVfzbxnNdMEFc1V5AFa%2BvQLlzVuY8hA94NMEtj&X-Amz-Signature=985e89e51522b86c4b050de6c5452d372d36fde6ec22ddbb859fba99c2305f43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
