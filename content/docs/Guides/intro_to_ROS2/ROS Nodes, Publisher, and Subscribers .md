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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N6KOEOR%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZskBk%2BXpGq2xG1vREvUFklkEOy%2BrB7Qv8rxqYEfJ%2BEAIhAIbAZF3xaDx83yUZIGvr4L0bQtyUkbyxx5R4HElwJXMYKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTlMH2qxbk1uCxklAq3AOv%2BVqL6MV%2B9Xc%2FmAQtg7b8BiEJw480j%2FYieP2jzUqaiNEMNl41GTVJ9HUXePF3tbRrYDuhFtglWQH2jeBJaF1pxMJvAs4PnJyOWQ6l3f4sHzwAeGV9onKcM8QFSC6bFo55RZaRzqt2Muv2uoRPbIeQPpjbtLuw79dveDoxQFUaXvhRhkzToBhpHKuYwdWo14faxnbMxq39roQ9sfTIrOUi96Fpqa7rxvj%2B8qoK%2FfEoYjYIjMpPwmALuvKeO%2Fq7h%2BqrL3WKOM%2BguxmWYHmiZFDBniq6oWxA1TIxk9Bi91bWk2r4os8J83TNP71fHbvBMcRABQ69UIXJOYFztO7k0cAIz255SRBM7X3fNpwA9jetxkJdEb1yZRX4UJELC%2BpJR9jGisQBYUzcgnRNQ64AfGiowSfv86awHRlrl%2BeiekGTfFRT43FYnHDGnRiT8ymw5K5XpYJf7VqnlNcT%2FFfdTxfuN4%2FsVl3LPKsJvgfvKQ2E5jF5JRdtSAdynGcGleC8vwFz2T7FH4K370P0JInWBrrPpCcv1RGSrgkCuWNfheabXifo2RcUW%2F2%2Bc3%2Bm%2BDiXGn0ZWv0LuCk57uSEQbqsa3KbHdPkhRkbpImK4moVS3zxgiTJVvvpxoXPKxONgjCV1tLCBjqkAV2b5NFzhueSwrkjzk00Qn%2B%2FC%2BcwyqhKaTNCm21Gz7wqrrJIKhOyUY05Rbbkn08OL0rNygw5kr624jrXDPXoQuL3cc5U6B76YWbnvSSk1Rlk%2BFF1mLDUIBtfq7fxBmP1zBCzw3D6hkBK8A8VIagRffaeTVvJYodcTazwzWQm0ma6rHgGaTnOiQxCDv9KIwUfdnv1z%2BS1bw%2BSX6upDAFsI0DQhdE4&X-Amz-Signature=17a9d9ef9ebca9d10e89c6e73a255f118946f41f04b17693a877baa7c1fe6e6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N6KOEOR%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZskBk%2BXpGq2xG1vREvUFklkEOy%2BrB7Qv8rxqYEfJ%2BEAIhAIbAZF3xaDx83yUZIGvr4L0bQtyUkbyxx5R4HElwJXMYKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTlMH2qxbk1uCxklAq3AOv%2BVqL6MV%2B9Xc%2FmAQtg7b8BiEJw480j%2FYieP2jzUqaiNEMNl41GTVJ9HUXePF3tbRrYDuhFtglWQH2jeBJaF1pxMJvAs4PnJyOWQ6l3f4sHzwAeGV9onKcM8QFSC6bFo55RZaRzqt2Muv2uoRPbIeQPpjbtLuw79dveDoxQFUaXvhRhkzToBhpHKuYwdWo14faxnbMxq39roQ9sfTIrOUi96Fpqa7rxvj%2B8qoK%2FfEoYjYIjMpPwmALuvKeO%2Fq7h%2BqrL3WKOM%2BguxmWYHmiZFDBniq6oWxA1TIxk9Bi91bWk2r4os8J83TNP71fHbvBMcRABQ69UIXJOYFztO7k0cAIz255SRBM7X3fNpwA9jetxkJdEb1yZRX4UJELC%2BpJR9jGisQBYUzcgnRNQ64AfGiowSfv86awHRlrl%2BeiekGTfFRT43FYnHDGnRiT8ymw5K5XpYJf7VqnlNcT%2FFfdTxfuN4%2FsVl3LPKsJvgfvKQ2E5jF5JRdtSAdynGcGleC8vwFz2T7FH4K370P0JInWBrrPpCcv1RGSrgkCuWNfheabXifo2RcUW%2F2%2Bc3%2Bm%2BDiXGn0ZWv0LuCk57uSEQbqsa3KbHdPkhRkbpImK4moVS3zxgiTJVvvpxoXPKxONgjCV1tLCBjqkAV2b5NFzhueSwrkjzk00Qn%2B%2FC%2BcwyqhKaTNCm21Gz7wqrrJIKhOyUY05Rbbkn08OL0rNygw5kr624jrXDPXoQuL3cc5U6B76YWbnvSSk1Rlk%2BFF1mLDUIBtfq7fxBmP1zBCzw3D6hkBK8A8VIagRffaeTVvJYodcTazwzWQm0ma6rHgGaTnOiQxCDv9KIwUfdnv1z%2BS1bw%2BSX6upDAFsI0DQhdE4&X-Amz-Signature=9f9f9eb27ecb3d3c658799d63a372f23229dd07410544180f554a12945b49080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N6KOEOR%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZskBk%2BXpGq2xG1vREvUFklkEOy%2BrB7Qv8rxqYEfJ%2BEAIhAIbAZF3xaDx83yUZIGvr4L0bQtyUkbyxx5R4HElwJXMYKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTlMH2qxbk1uCxklAq3AOv%2BVqL6MV%2B9Xc%2FmAQtg7b8BiEJw480j%2FYieP2jzUqaiNEMNl41GTVJ9HUXePF3tbRrYDuhFtglWQH2jeBJaF1pxMJvAs4PnJyOWQ6l3f4sHzwAeGV9onKcM8QFSC6bFo55RZaRzqt2Muv2uoRPbIeQPpjbtLuw79dveDoxQFUaXvhRhkzToBhpHKuYwdWo14faxnbMxq39roQ9sfTIrOUi96Fpqa7rxvj%2B8qoK%2FfEoYjYIjMpPwmALuvKeO%2Fq7h%2BqrL3WKOM%2BguxmWYHmiZFDBniq6oWxA1TIxk9Bi91bWk2r4os8J83TNP71fHbvBMcRABQ69UIXJOYFztO7k0cAIz255SRBM7X3fNpwA9jetxkJdEb1yZRX4UJELC%2BpJR9jGisQBYUzcgnRNQ64AfGiowSfv86awHRlrl%2BeiekGTfFRT43FYnHDGnRiT8ymw5K5XpYJf7VqnlNcT%2FFfdTxfuN4%2FsVl3LPKsJvgfvKQ2E5jF5JRdtSAdynGcGleC8vwFz2T7FH4K370P0JInWBrrPpCcv1RGSrgkCuWNfheabXifo2RcUW%2F2%2Bc3%2Bm%2BDiXGn0ZWv0LuCk57uSEQbqsa3KbHdPkhRkbpImK4moVS3zxgiTJVvvpxoXPKxONgjCV1tLCBjqkAV2b5NFzhueSwrkjzk00Qn%2B%2FC%2BcwyqhKaTNCm21Gz7wqrrJIKhOyUY05Rbbkn08OL0rNygw5kr624jrXDPXoQuL3cc5U6B76YWbnvSSk1Rlk%2BFF1mLDUIBtfq7fxBmP1zBCzw3D6hkBK8A8VIagRffaeTVvJYodcTazwzWQm0ma6rHgGaTnOiQxCDv9KIwUfdnv1z%2BS1bw%2BSX6upDAFsI0DQhdE4&X-Amz-Signature=87eea3ff33c58c04cf39a7cc3f4ab91365f51842e3925f1bbf34c146d2c75914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N6KOEOR%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZskBk%2BXpGq2xG1vREvUFklkEOy%2BrB7Qv8rxqYEfJ%2BEAIhAIbAZF3xaDx83yUZIGvr4L0bQtyUkbyxx5R4HElwJXMYKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTlMH2qxbk1uCxklAq3AOv%2BVqL6MV%2B9Xc%2FmAQtg7b8BiEJw480j%2FYieP2jzUqaiNEMNl41GTVJ9HUXePF3tbRrYDuhFtglWQH2jeBJaF1pxMJvAs4PnJyOWQ6l3f4sHzwAeGV9onKcM8QFSC6bFo55RZaRzqt2Muv2uoRPbIeQPpjbtLuw79dveDoxQFUaXvhRhkzToBhpHKuYwdWo14faxnbMxq39roQ9sfTIrOUi96Fpqa7rxvj%2B8qoK%2FfEoYjYIjMpPwmALuvKeO%2Fq7h%2BqrL3WKOM%2BguxmWYHmiZFDBniq6oWxA1TIxk9Bi91bWk2r4os8J83TNP71fHbvBMcRABQ69UIXJOYFztO7k0cAIz255SRBM7X3fNpwA9jetxkJdEb1yZRX4UJELC%2BpJR9jGisQBYUzcgnRNQ64AfGiowSfv86awHRlrl%2BeiekGTfFRT43FYnHDGnRiT8ymw5K5XpYJf7VqnlNcT%2FFfdTxfuN4%2FsVl3LPKsJvgfvKQ2E5jF5JRdtSAdynGcGleC8vwFz2T7FH4K370P0JInWBrrPpCcv1RGSrgkCuWNfheabXifo2RcUW%2F2%2Bc3%2Bm%2BDiXGn0ZWv0LuCk57uSEQbqsa3KbHdPkhRkbpImK4moVS3zxgiTJVvvpxoXPKxONgjCV1tLCBjqkAV2b5NFzhueSwrkjzk00Qn%2B%2FC%2BcwyqhKaTNCm21Gz7wqrrJIKhOyUY05Rbbkn08OL0rNygw5kr624jrXDPXoQuL3cc5U6B76YWbnvSSk1Rlk%2BFF1mLDUIBtfq7fxBmP1zBCzw3D6hkBK8A8VIagRffaeTVvJYodcTazwzWQm0ma6rHgGaTnOiQxCDv9KIwUfdnv1z%2BS1bw%2BSX6upDAFsI0DQhdE4&X-Amz-Signature=5e8db75be0af63e756961975ef767ad30b0be6924afc00aa43462425ef0e006c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N6KOEOR%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZskBk%2BXpGq2xG1vREvUFklkEOy%2BrB7Qv8rxqYEfJ%2BEAIhAIbAZF3xaDx83yUZIGvr4L0bQtyUkbyxx5R4HElwJXMYKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTlMH2qxbk1uCxklAq3AOv%2BVqL6MV%2B9Xc%2FmAQtg7b8BiEJw480j%2FYieP2jzUqaiNEMNl41GTVJ9HUXePF3tbRrYDuhFtglWQH2jeBJaF1pxMJvAs4PnJyOWQ6l3f4sHzwAeGV9onKcM8QFSC6bFo55RZaRzqt2Muv2uoRPbIeQPpjbtLuw79dveDoxQFUaXvhRhkzToBhpHKuYwdWo14faxnbMxq39roQ9sfTIrOUi96Fpqa7rxvj%2B8qoK%2FfEoYjYIjMpPwmALuvKeO%2Fq7h%2BqrL3WKOM%2BguxmWYHmiZFDBniq6oWxA1TIxk9Bi91bWk2r4os8J83TNP71fHbvBMcRABQ69UIXJOYFztO7k0cAIz255SRBM7X3fNpwA9jetxkJdEb1yZRX4UJELC%2BpJR9jGisQBYUzcgnRNQ64AfGiowSfv86awHRlrl%2BeiekGTfFRT43FYnHDGnRiT8ymw5K5XpYJf7VqnlNcT%2FFfdTxfuN4%2FsVl3LPKsJvgfvKQ2E5jF5JRdtSAdynGcGleC8vwFz2T7FH4K370P0JInWBrrPpCcv1RGSrgkCuWNfheabXifo2RcUW%2F2%2Bc3%2Bm%2BDiXGn0ZWv0LuCk57uSEQbqsa3KbHdPkhRkbpImK4moVS3zxgiTJVvvpxoXPKxONgjCV1tLCBjqkAV2b5NFzhueSwrkjzk00Qn%2B%2FC%2BcwyqhKaTNCm21Gz7wqrrJIKhOyUY05Rbbkn08OL0rNygw5kr624jrXDPXoQuL3cc5U6B76YWbnvSSk1Rlk%2BFF1mLDUIBtfq7fxBmP1zBCzw3D6hkBK8A8VIagRffaeTVvJYodcTazwzWQm0ma6rHgGaTnOiQxCDv9KIwUfdnv1z%2BS1bw%2BSX6upDAFsI0DQhdE4&X-Amz-Signature=4a70cb8a76215a8c2813b7cc1bc8a72ceb9c93519d059ab24a739442c1abdf3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N6KOEOR%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZskBk%2BXpGq2xG1vREvUFklkEOy%2BrB7Qv8rxqYEfJ%2BEAIhAIbAZF3xaDx83yUZIGvr4L0bQtyUkbyxx5R4HElwJXMYKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTlMH2qxbk1uCxklAq3AOv%2BVqL6MV%2B9Xc%2FmAQtg7b8BiEJw480j%2FYieP2jzUqaiNEMNl41GTVJ9HUXePF3tbRrYDuhFtglWQH2jeBJaF1pxMJvAs4PnJyOWQ6l3f4sHzwAeGV9onKcM8QFSC6bFo55RZaRzqt2Muv2uoRPbIeQPpjbtLuw79dveDoxQFUaXvhRhkzToBhpHKuYwdWo14faxnbMxq39roQ9sfTIrOUi96Fpqa7rxvj%2B8qoK%2FfEoYjYIjMpPwmALuvKeO%2Fq7h%2BqrL3WKOM%2BguxmWYHmiZFDBniq6oWxA1TIxk9Bi91bWk2r4os8J83TNP71fHbvBMcRABQ69UIXJOYFztO7k0cAIz255SRBM7X3fNpwA9jetxkJdEb1yZRX4UJELC%2BpJR9jGisQBYUzcgnRNQ64AfGiowSfv86awHRlrl%2BeiekGTfFRT43FYnHDGnRiT8ymw5K5XpYJf7VqnlNcT%2FFfdTxfuN4%2FsVl3LPKsJvgfvKQ2E5jF5JRdtSAdynGcGleC8vwFz2T7FH4K370P0JInWBrrPpCcv1RGSrgkCuWNfheabXifo2RcUW%2F2%2Bc3%2Bm%2BDiXGn0ZWv0LuCk57uSEQbqsa3KbHdPkhRkbpImK4moVS3zxgiTJVvvpxoXPKxONgjCV1tLCBjqkAV2b5NFzhueSwrkjzk00Qn%2B%2FC%2BcwyqhKaTNCm21Gz7wqrrJIKhOyUY05Rbbkn08OL0rNygw5kr624jrXDPXoQuL3cc5U6B76YWbnvSSk1Rlk%2BFF1mLDUIBtfq7fxBmP1zBCzw3D6hkBK8A8VIagRffaeTVvJYodcTazwzWQm0ma6rHgGaTnOiQxCDv9KIwUfdnv1z%2BS1bw%2BSX6upDAFsI0DQhdE4&X-Amz-Signature=a85fac9ef9694546826c8bf20a3cfb6ba37ffe632aad2bbb025f660269e8132d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N6KOEOR%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZskBk%2BXpGq2xG1vREvUFklkEOy%2BrB7Qv8rxqYEfJ%2BEAIhAIbAZF3xaDx83yUZIGvr4L0bQtyUkbyxx5R4HElwJXMYKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTlMH2qxbk1uCxklAq3AOv%2BVqL6MV%2B9Xc%2FmAQtg7b8BiEJw480j%2FYieP2jzUqaiNEMNl41GTVJ9HUXePF3tbRrYDuhFtglWQH2jeBJaF1pxMJvAs4PnJyOWQ6l3f4sHzwAeGV9onKcM8QFSC6bFo55RZaRzqt2Muv2uoRPbIeQPpjbtLuw79dveDoxQFUaXvhRhkzToBhpHKuYwdWo14faxnbMxq39roQ9sfTIrOUi96Fpqa7rxvj%2B8qoK%2FfEoYjYIjMpPwmALuvKeO%2Fq7h%2BqrL3WKOM%2BguxmWYHmiZFDBniq6oWxA1TIxk9Bi91bWk2r4os8J83TNP71fHbvBMcRABQ69UIXJOYFztO7k0cAIz255SRBM7X3fNpwA9jetxkJdEb1yZRX4UJELC%2BpJR9jGisQBYUzcgnRNQ64AfGiowSfv86awHRlrl%2BeiekGTfFRT43FYnHDGnRiT8ymw5K5XpYJf7VqnlNcT%2FFfdTxfuN4%2FsVl3LPKsJvgfvKQ2E5jF5JRdtSAdynGcGleC8vwFz2T7FH4K370P0JInWBrrPpCcv1RGSrgkCuWNfheabXifo2RcUW%2F2%2Bc3%2Bm%2BDiXGn0ZWv0LuCk57uSEQbqsa3KbHdPkhRkbpImK4moVS3zxgiTJVvvpxoXPKxONgjCV1tLCBjqkAV2b5NFzhueSwrkjzk00Qn%2B%2FC%2BcwyqhKaTNCm21Gz7wqrrJIKhOyUY05Rbbkn08OL0rNygw5kr624jrXDPXoQuL3cc5U6B76YWbnvSSk1Rlk%2BFF1mLDUIBtfq7fxBmP1zBCzw3D6hkBK8A8VIagRffaeTVvJYodcTazwzWQm0ma6rHgGaTnOiQxCDv9KIwUfdnv1z%2BS1bw%2BSX6upDAFsI0DQhdE4&X-Amz-Signature=da54774c811069872cc17297b124af66da0cdb7ab3a75543006712d4331aeed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N6KOEOR%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZskBk%2BXpGq2xG1vREvUFklkEOy%2BrB7Qv8rxqYEfJ%2BEAIhAIbAZF3xaDx83yUZIGvr4L0bQtyUkbyxx5R4HElwJXMYKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTlMH2qxbk1uCxklAq3AOv%2BVqL6MV%2B9Xc%2FmAQtg7b8BiEJw480j%2FYieP2jzUqaiNEMNl41GTVJ9HUXePF3tbRrYDuhFtglWQH2jeBJaF1pxMJvAs4PnJyOWQ6l3f4sHzwAeGV9onKcM8QFSC6bFo55RZaRzqt2Muv2uoRPbIeQPpjbtLuw79dveDoxQFUaXvhRhkzToBhpHKuYwdWo14faxnbMxq39roQ9sfTIrOUi96Fpqa7rxvj%2B8qoK%2FfEoYjYIjMpPwmALuvKeO%2Fq7h%2BqrL3WKOM%2BguxmWYHmiZFDBniq6oWxA1TIxk9Bi91bWk2r4os8J83TNP71fHbvBMcRABQ69UIXJOYFztO7k0cAIz255SRBM7X3fNpwA9jetxkJdEb1yZRX4UJELC%2BpJR9jGisQBYUzcgnRNQ64AfGiowSfv86awHRlrl%2BeiekGTfFRT43FYnHDGnRiT8ymw5K5XpYJf7VqnlNcT%2FFfdTxfuN4%2FsVl3LPKsJvgfvKQ2E5jF5JRdtSAdynGcGleC8vwFz2T7FH4K370P0JInWBrrPpCcv1RGSrgkCuWNfheabXifo2RcUW%2F2%2Bc3%2Bm%2BDiXGn0ZWv0LuCk57uSEQbqsa3KbHdPkhRkbpImK4moVS3zxgiTJVvvpxoXPKxONgjCV1tLCBjqkAV2b5NFzhueSwrkjzk00Qn%2B%2FC%2BcwyqhKaTNCm21Gz7wqrrJIKhOyUY05Rbbkn08OL0rNygw5kr624jrXDPXoQuL3cc5U6B76YWbnvSSk1Rlk%2BFF1mLDUIBtfq7fxBmP1zBCzw3D6hkBK8A8VIagRffaeTVvJYodcTazwzWQm0ma6rHgGaTnOiQxCDv9KIwUfdnv1z%2BS1bw%2BSX6upDAFsI0DQhdE4&X-Amz-Signature=26faf648706bf2ae485ee820ac00d6b7523484e104a4cee083016411c218903d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
