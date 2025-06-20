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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PWHYPQR%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmB%2BTKzeLa4JHAVmz1F5ZquJovBTZ%2F7arFZm1o0cJAnAiEAl6P3sCd1i7djDe7OM41HUje3sSJhpjJS0Uq686r73wgqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6M5r3HfpbgTT5fTSrcA4t4mfIewXry8RzhgzXmU2txmE5Q0qmcJ60%2BK6Pon5PlDEu9l25ZjZ4X7rq0JTDQKvc5G743POEj%2FNFE00LmgDuMbRzA%2BbHI0VxQVVtDOJRbrLjIYy1bk2oydIbD9rt0z4PykB6dRTtb8LvdaUT1NY5%2B7r9wvXpDBZmTQ7g7u7Tzp0zsKlGOOAJ8dJY037qy6O7%2BKHuR%2BbBFagrfTgwNPbxdJp0fwkATrRkE0GuM00hQSXYlaZ9hst%2BL5h%2FSegSxtUdRbhqkVbhLMJcrig4O%2Ba3nTUs1hZ9HWdtxfgnY7qajUxqjRrczKJ1mkCAzzT9yKuHph76Hs55KFN0ra53YtTcU99l1aKHgj0haZkXk7SpBTXM%2FG0tF0Td4Bt2pft3fO%2B%2BzlvnGal6NBArlGscjbUmyNQ7jocEXiREi1Z9tULkATZtmYG8R0j%2BGZD4RlB%2Fyw%2FEUzddyosTL9ncVdvQ%2F%2B5jqtI4PkA4WO0HD%2BTAhY4FQlNb17dXHj1fKvDamxRLcPi159UycGBgqumTXqMnm8I3Dw%2BAk2P%2B51Q%2FMKzmX4jzt5%2B8%2BTTLLh516%2FrjcUgu1rJo5I4AVSXk9YX0Ra%2FgzB%2F%2FwnI7rhTwtnN4osHr1ZoX2ATcyYQ9%2Fg2pzL2kQMOqj1cIGOqUB32Z6BN8HAOSADOnalMemEQDd3rKSqLpO%2B7LyZDPwyK7Kujux6bBJJBlJ579Qi5WnNCJi5awv8Bm3pjFXTFEkfIZLC%2B5AOeHrsrRO1EEFObgprxcGlbu2ujfmHOHUkNoIsZJLJoIGD8jlCpdUUS5AinHFwYJhuPhKrCOBrlU0S6IvBJqPdpGIVF3qN0oOnJHBgW3FwPs7dsD86%2FANo0u2ZNem9J8k&X-Amz-Signature=40ac2d63205445f762c303eceae1b7a9adda3e2c60d5ab94ff9ff5bd32c20a42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PWHYPQR%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmB%2BTKzeLa4JHAVmz1F5ZquJovBTZ%2F7arFZm1o0cJAnAiEAl6P3sCd1i7djDe7OM41HUje3sSJhpjJS0Uq686r73wgqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6M5r3HfpbgTT5fTSrcA4t4mfIewXry8RzhgzXmU2txmE5Q0qmcJ60%2BK6Pon5PlDEu9l25ZjZ4X7rq0JTDQKvc5G743POEj%2FNFE00LmgDuMbRzA%2BbHI0VxQVVtDOJRbrLjIYy1bk2oydIbD9rt0z4PykB6dRTtb8LvdaUT1NY5%2B7r9wvXpDBZmTQ7g7u7Tzp0zsKlGOOAJ8dJY037qy6O7%2BKHuR%2BbBFagrfTgwNPbxdJp0fwkATrRkE0GuM00hQSXYlaZ9hst%2BL5h%2FSegSxtUdRbhqkVbhLMJcrig4O%2Ba3nTUs1hZ9HWdtxfgnY7qajUxqjRrczKJ1mkCAzzT9yKuHph76Hs55KFN0ra53YtTcU99l1aKHgj0haZkXk7SpBTXM%2FG0tF0Td4Bt2pft3fO%2B%2BzlvnGal6NBArlGscjbUmyNQ7jocEXiREi1Z9tULkATZtmYG8R0j%2BGZD4RlB%2Fyw%2FEUzddyosTL9ncVdvQ%2F%2B5jqtI4PkA4WO0HD%2BTAhY4FQlNb17dXHj1fKvDamxRLcPi159UycGBgqumTXqMnm8I3Dw%2BAk2P%2B51Q%2FMKzmX4jzt5%2B8%2BTTLLh516%2FrjcUgu1rJo5I4AVSXk9YX0Ra%2FgzB%2F%2FwnI7rhTwtnN4osHr1ZoX2ATcyYQ9%2Fg2pzL2kQMOqj1cIGOqUB32Z6BN8HAOSADOnalMemEQDd3rKSqLpO%2B7LyZDPwyK7Kujux6bBJJBlJ579Qi5WnNCJi5awv8Bm3pjFXTFEkfIZLC%2B5AOeHrsrRO1EEFObgprxcGlbu2ujfmHOHUkNoIsZJLJoIGD8jlCpdUUS5AinHFwYJhuPhKrCOBrlU0S6IvBJqPdpGIVF3qN0oOnJHBgW3FwPs7dsD86%2FANo0u2ZNem9J8k&X-Amz-Signature=b0e8fba81b8cd374544f9bd51d99831802ce02336ba2a2e7077274ef3e7afe18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PWHYPQR%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmB%2BTKzeLa4JHAVmz1F5ZquJovBTZ%2F7arFZm1o0cJAnAiEAl6P3sCd1i7djDe7OM41HUje3sSJhpjJS0Uq686r73wgqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6M5r3HfpbgTT5fTSrcA4t4mfIewXry8RzhgzXmU2txmE5Q0qmcJ60%2BK6Pon5PlDEu9l25ZjZ4X7rq0JTDQKvc5G743POEj%2FNFE00LmgDuMbRzA%2BbHI0VxQVVtDOJRbrLjIYy1bk2oydIbD9rt0z4PykB6dRTtb8LvdaUT1NY5%2B7r9wvXpDBZmTQ7g7u7Tzp0zsKlGOOAJ8dJY037qy6O7%2BKHuR%2BbBFagrfTgwNPbxdJp0fwkATrRkE0GuM00hQSXYlaZ9hst%2BL5h%2FSegSxtUdRbhqkVbhLMJcrig4O%2Ba3nTUs1hZ9HWdtxfgnY7qajUxqjRrczKJ1mkCAzzT9yKuHph76Hs55KFN0ra53YtTcU99l1aKHgj0haZkXk7SpBTXM%2FG0tF0Td4Bt2pft3fO%2B%2BzlvnGal6NBArlGscjbUmyNQ7jocEXiREi1Z9tULkATZtmYG8R0j%2BGZD4RlB%2Fyw%2FEUzddyosTL9ncVdvQ%2F%2B5jqtI4PkA4WO0HD%2BTAhY4FQlNb17dXHj1fKvDamxRLcPi159UycGBgqumTXqMnm8I3Dw%2BAk2P%2B51Q%2FMKzmX4jzt5%2B8%2BTTLLh516%2FrjcUgu1rJo5I4AVSXk9YX0Ra%2FgzB%2F%2FwnI7rhTwtnN4osHr1ZoX2ATcyYQ9%2Fg2pzL2kQMOqj1cIGOqUB32Z6BN8HAOSADOnalMemEQDd3rKSqLpO%2B7LyZDPwyK7Kujux6bBJJBlJ579Qi5WnNCJi5awv8Bm3pjFXTFEkfIZLC%2B5AOeHrsrRO1EEFObgprxcGlbu2ujfmHOHUkNoIsZJLJoIGD8jlCpdUUS5AinHFwYJhuPhKrCOBrlU0S6IvBJqPdpGIVF3qN0oOnJHBgW3FwPs7dsD86%2FANo0u2ZNem9J8k&X-Amz-Signature=41d847e9fa71b30aff315941ccf3998d219c7553265b2347e5c559f81e3d5b69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PWHYPQR%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmB%2BTKzeLa4JHAVmz1F5ZquJovBTZ%2F7arFZm1o0cJAnAiEAl6P3sCd1i7djDe7OM41HUje3sSJhpjJS0Uq686r73wgqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6M5r3HfpbgTT5fTSrcA4t4mfIewXry8RzhgzXmU2txmE5Q0qmcJ60%2BK6Pon5PlDEu9l25ZjZ4X7rq0JTDQKvc5G743POEj%2FNFE00LmgDuMbRzA%2BbHI0VxQVVtDOJRbrLjIYy1bk2oydIbD9rt0z4PykB6dRTtb8LvdaUT1NY5%2B7r9wvXpDBZmTQ7g7u7Tzp0zsKlGOOAJ8dJY037qy6O7%2BKHuR%2BbBFagrfTgwNPbxdJp0fwkATrRkE0GuM00hQSXYlaZ9hst%2BL5h%2FSegSxtUdRbhqkVbhLMJcrig4O%2Ba3nTUs1hZ9HWdtxfgnY7qajUxqjRrczKJ1mkCAzzT9yKuHph76Hs55KFN0ra53YtTcU99l1aKHgj0haZkXk7SpBTXM%2FG0tF0Td4Bt2pft3fO%2B%2BzlvnGal6NBArlGscjbUmyNQ7jocEXiREi1Z9tULkATZtmYG8R0j%2BGZD4RlB%2Fyw%2FEUzddyosTL9ncVdvQ%2F%2B5jqtI4PkA4WO0HD%2BTAhY4FQlNb17dXHj1fKvDamxRLcPi159UycGBgqumTXqMnm8I3Dw%2BAk2P%2B51Q%2FMKzmX4jzt5%2B8%2BTTLLh516%2FrjcUgu1rJo5I4AVSXk9YX0Ra%2FgzB%2F%2FwnI7rhTwtnN4osHr1ZoX2ATcyYQ9%2Fg2pzL2kQMOqj1cIGOqUB32Z6BN8HAOSADOnalMemEQDd3rKSqLpO%2B7LyZDPwyK7Kujux6bBJJBlJ579Qi5WnNCJi5awv8Bm3pjFXTFEkfIZLC%2B5AOeHrsrRO1EEFObgprxcGlbu2ujfmHOHUkNoIsZJLJoIGD8jlCpdUUS5AinHFwYJhuPhKrCOBrlU0S6IvBJqPdpGIVF3qN0oOnJHBgW3FwPs7dsD86%2FANo0u2ZNem9J8k&X-Amz-Signature=b1c912be30f6c363427323b68078f86fb9edb597a411f20b542e673260b12028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PWHYPQR%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmB%2BTKzeLa4JHAVmz1F5ZquJovBTZ%2F7arFZm1o0cJAnAiEAl6P3sCd1i7djDe7OM41HUje3sSJhpjJS0Uq686r73wgqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6M5r3HfpbgTT5fTSrcA4t4mfIewXry8RzhgzXmU2txmE5Q0qmcJ60%2BK6Pon5PlDEu9l25ZjZ4X7rq0JTDQKvc5G743POEj%2FNFE00LmgDuMbRzA%2BbHI0VxQVVtDOJRbrLjIYy1bk2oydIbD9rt0z4PykB6dRTtb8LvdaUT1NY5%2B7r9wvXpDBZmTQ7g7u7Tzp0zsKlGOOAJ8dJY037qy6O7%2BKHuR%2BbBFagrfTgwNPbxdJp0fwkATrRkE0GuM00hQSXYlaZ9hst%2BL5h%2FSegSxtUdRbhqkVbhLMJcrig4O%2Ba3nTUs1hZ9HWdtxfgnY7qajUxqjRrczKJ1mkCAzzT9yKuHph76Hs55KFN0ra53YtTcU99l1aKHgj0haZkXk7SpBTXM%2FG0tF0Td4Bt2pft3fO%2B%2BzlvnGal6NBArlGscjbUmyNQ7jocEXiREi1Z9tULkATZtmYG8R0j%2BGZD4RlB%2Fyw%2FEUzddyosTL9ncVdvQ%2F%2B5jqtI4PkA4WO0HD%2BTAhY4FQlNb17dXHj1fKvDamxRLcPi159UycGBgqumTXqMnm8I3Dw%2BAk2P%2B51Q%2FMKzmX4jzt5%2B8%2BTTLLh516%2FrjcUgu1rJo5I4AVSXk9YX0Ra%2FgzB%2F%2FwnI7rhTwtnN4osHr1ZoX2ATcyYQ9%2Fg2pzL2kQMOqj1cIGOqUB32Z6BN8HAOSADOnalMemEQDd3rKSqLpO%2B7LyZDPwyK7Kujux6bBJJBlJ579Qi5WnNCJi5awv8Bm3pjFXTFEkfIZLC%2B5AOeHrsrRO1EEFObgprxcGlbu2ujfmHOHUkNoIsZJLJoIGD8jlCpdUUS5AinHFwYJhuPhKrCOBrlU0S6IvBJqPdpGIVF3qN0oOnJHBgW3FwPs7dsD86%2FANo0u2ZNem9J8k&X-Amz-Signature=920fb297adce7c639f2d6f2d3688570031ba19968f15b7be8d92431d50f51b7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PWHYPQR%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmB%2BTKzeLa4JHAVmz1F5ZquJovBTZ%2F7arFZm1o0cJAnAiEAl6P3sCd1i7djDe7OM41HUje3sSJhpjJS0Uq686r73wgqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6M5r3HfpbgTT5fTSrcA4t4mfIewXry8RzhgzXmU2txmE5Q0qmcJ60%2BK6Pon5PlDEu9l25ZjZ4X7rq0JTDQKvc5G743POEj%2FNFE00LmgDuMbRzA%2BbHI0VxQVVtDOJRbrLjIYy1bk2oydIbD9rt0z4PykB6dRTtb8LvdaUT1NY5%2B7r9wvXpDBZmTQ7g7u7Tzp0zsKlGOOAJ8dJY037qy6O7%2BKHuR%2BbBFagrfTgwNPbxdJp0fwkATrRkE0GuM00hQSXYlaZ9hst%2BL5h%2FSegSxtUdRbhqkVbhLMJcrig4O%2Ba3nTUs1hZ9HWdtxfgnY7qajUxqjRrczKJ1mkCAzzT9yKuHph76Hs55KFN0ra53YtTcU99l1aKHgj0haZkXk7SpBTXM%2FG0tF0Td4Bt2pft3fO%2B%2BzlvnGal6NBArlGscjbUmyNQ7jocEXiREi1Z9tULkATZtmYG8R0j%2BGZD4RlB%2Fyw%2FEUzddyosTL9ncVdvQ%2F%2B5jqtI4PkA4WO0HD%2BTAhY4FQlNb17dXHj1fKvDamxRLcPi159UycGBgqumTXqMnm8I3Dw%2BAk2P%2B51Q%2FMKzmX4jzt5%2B8%2BTTLLh516%2FrjcUgu1rJo5I4AVSXk9YX0Ra%2FgzB%2F%2FwnI7rhTwtnN4osHr1ZoX2ATcyYQ9%2Fg2pzL2kQMOqj1cIGOqUB32Z6BN8HAOSADOnalMemEQDd3rKSqLpO%2B7LyZDPwyK7Kujux6bBJJBlJ579Qi5WnNCJi5awv8Bm3pjFXTFEkfIZLC%2B5AOeHrsrRO1EEFObgprxcGlbu2ujfmHOHUkNoIsZJLJoIGD8jlCpdUUS5AinHFwYJhuPhKrCOBrlU0S6IvBJqPdpGIVF3qN0oOnJHBgW3FwPs7dsD86%2FANo0u2ZNem9J8k&X-Amz-Signature=0b2337a9606c8cde74ac541a9e96fd4433687ac3b07da01e97e06fb3b8cab272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PWHYPQR%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmB%2BTKzeLa4JHAVmz1F5ZquJovBTZ%2F7arFZm1o0cJAnAiEAl6P3sCd1i7djDe7OM41HUje3sSJhpjJS0Uq686r73wgqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6M5r3HfpbgTT5fTSrcA4t4mfIewXry8RzhgzXmU2txmE5Q0qmcJ60%2BK6Pon5PlDEu9l25ZjZ4X7rq0JTDQKvc5G743POEj%2FNFE00LmgDuMbRzA%2BbHI0VxQVVtDOJRbrLjIYy1bk2oydIbD9rt0z4PykB6dRTtb8LvdaUT1NY5%2B7r9wvXpDBZmTQ7g7u7Tzp0zsKlGOOAJ8dJY037qy6O7%2BKHuR%2BbBFagrfTgwNPbxdJp0fwkATrRkE0GuM00hQSXYlaZ9hst%2BL5h%2FSegSxtUdRbhqkVbhLMJcrig4O%2Ba3nTUs1hZ9HWdtxfgnY7qajUxqjRrczKJ1mkCAzzT9yKuHph76Hs55KFN0ra53YtTcU99l1aKHgj0haZkXk7SpBTXM%2FG0tF0Td4Bt2pft3fO%2B%2BzlvnGal6NBArlGscjbUmyNQ7jocEXiREi1Z9tULkATZtmYG8R0j%2BGZD4RlB%2Fyw%2FEUzddyosTL9ncVdvQ%2F%2B5jqtI4PkA4WO0HD%2BTAhY4FQlNb17dXHj1fKvDamxRLcPi159UycGBgqumTXqMnm8I3Dw%2BAk2P%2B51Q%2FMKzmX4jzt5%2B8%2BTTLLh516%2FrjcUgu1rJo5I4AVSXk9YX0Ra%2FgzB%2F%2FwnI7rhTwtnN4osHr1ZoX2ATcyYQ9%2Fg2pzL2kQMOqj1cIGOqUB32Z6BN8HAOSADOnalMemEQDd3rKSqLpO%2B7LyZDPwyK7Kujux6bBJJBlJ579Qi5WnNCJi5awv8Bm3pjFXTFEkfIZLC%2B5AOeHrsrRO1EEFObgprxcGlbu2ujfmHOHUkNoIsZJLJoIGD8jlCpdUUS5AinHFwYJhuPhKrCOBrlU0S6IvBJqPdpGIVF3qN0oOnJHBgW3FwPs7dsD86%2FANo0u2ZNem9J8k&X-Amz-Signature=9fe1e66be6a1e392bedec8bb610fbb33c7e2caa559890167213248274cdfe3e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PWHYPQR%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmB%2BTKzeLa4JHAVmz1F5ZquJovBTZ%2F7arFZm1o0cJAnAiEAl6P3sCd1i7djDe7OM41HUje3sSJhpjJS0Uq686r73wgqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6M5r3HfpbgTT5fTSrcA4t4mfIewXry8RzhgzXmU2txmE5Q0qmcJ60%2BK6Pon5PlDEu9l25ZjZ4X7rq0JTDQKvc5G743POEj%2FNFE00LmgDuMbRzA%2BbHI0VxQVVtDOJRbrLjIYy1bk2oydIbD9rt0z4PykB6dRTtb8LvdaUT1NY5%2B7r9wvXpDBZmTQ7g7u7Tzp0zsKlGOOAJ8dJY037qy6O7%2BKHuR%2BbBFagrfTgwNPbxdJp0fwkATrRkE0GuM00hQSXYlaZ9hst%2BL5h%2FSegSxtUdRbhqkVbhLMJcrig4O%2Ba3nTUs1hZ9HWdtxfgnY7qajUxqjRrczKJ1mkCAzzT9yKuHph76Hs55KFN0ra53YtTcU99l1aKHgj0haZkXk7SpBTXM%2FG0tF0Td4Bt2pft3fO%2B%2BzlvnGal6NBArlGscjbUmyNQ7jocEXiREi1Z9tULkATZtmYG8R0j%2BGZD4RlB%2Fyw%2FEUzddyosTL9ncVdvQ%2F%2B5jqtI4PkA4WO0HD%2BTAhY4FQlNb17dXHj1fKvDamxRLcPi159UycGBgqumTXqMnm8I3Dw%2BAk2P%2B51Q%2FMKzmX4jzt5%2B8%2BTTLLh516%2FrjcUgu1rJo5I4AVSXk9YX0Ra%2FgzB%2F%2FwnI7rhTwtnN4osHr1ZoX2ATcyYQ9%2Fg2pzL2kQMOqj1cIGOqUB32Z6BN8HAOSADOnalMemEQDd3rKSqLpO%2B7LyZDPwyK7Kujux6bBJJBlJ579Qi5WnNCJi5awv8Bm3pjFXTFEkfIZLC%2B5AOeHrsrRO1EEFObgprxcGlbu2ujfmHOHUkNoIsZJLJoIGD8jlCpdUUS5AinHFwYJhuPhKrCOBrlU0S6IvBJqPdpGIVF3qN0oOnJHBgW3FwPs7dsD86%2FANo0u2ZNem9J8k&X-Amz-Signature=545d4387614a4d49e0f9761b5518fcffc043e934c451fa7ed9f695d4b3042728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
