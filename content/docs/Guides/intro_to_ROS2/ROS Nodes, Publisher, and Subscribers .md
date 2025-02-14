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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBAXE6X7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIA3VDquoFB585jUnCFMCVYQuKrq6mLwBcA%2FH5T%2B0Pz%2FHAiAisJRrzyfi73fBhyzGUmrBaG%2F9raSOJottzhXBjBt0mSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMvo4QrKgrZjzHlWbeKtwDAlZtS5hjvfh0xB3BHOSMlWmpJ43dRnMuzREfpexSMuSCh0TwMjEpHjGhbOaTsy3NVTt98S%2B8UXDFcvyJUHVTISPZTmndn4KobzCFOyu14B7jIwKydFlK%2Bz6jM1Pc1WW6u83PWH6IqixjpXtPjkj8b0OrDgALIJ67cnR2%2BVc%2ForeCj03pgQ9ptpsDXstHTMkUntetVrfa8uJm1Z6xA4FPL4%2F6Iy9WtBHEL1p9L68KZimbBdGBeH0RtDdWW4y2cnqnLpJuMnWFc1no73e6%2FTmbQJrDsfg1WCEQGkASCNX3De%2B4kQF2yt0vrfacxPkhQmo%2BTk%2FYLX4OKK54TQ%2BfwnQX73YY7QMxd45KQMrdcKdifgpADfVeAiDv%2BYWOqu9z8zxr1rKM1nQOR2qUK6DSrfY9YlpfXMCdwzak3sWAFx5LEmhRl4OLDpl0lU8%2BXZKMyG4i%2FV3DMJgBtlR18Lk89mSbHnExAb8IK%2B5k5os2rZO0pKowq4rMP2EjqbfCICE8TI81n%2FuP0Hl9rjYtezJIKRmWs9BlCfJHnYDIvLt4eyMdKCTfu3Mp9NP5%2FqFRTVMY6fBk1Uv1DPRXfR8B4zsikoICB83ZK9TFTmKjgzjL1IHYBFLbf7eud1u9RUG9lCkwk%2Bq8vQY6pgEXgiJ%2FL7NaMVZ1dEpDzq4QN2ONZnx6mEt%2F4vx5d8sw36e9zoXhw8qWQDTqk0ZJTyUh1p4O9RMbCf%2FVk4sXtboP0515tA4psRTpZ3xg3dnwe2NNzidgau7Cgu1VeZxbPW%2B5xCXouYeLTjJiO5%2FXGF8xlMqR49lm0QgLQqgwkd3KKzuPMW8G1kg0leQhUL8ZFrZzxpZlYhuCeonWD0K2LMfkdQmCL0cG&X-Amz-Signature=baa4e785043105cdde7f1354ca5fb7733ae9861ff3a6fd14a24c4b8b79e45a37&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBAXE6X7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIA3VDquoFB585jUnCFMCVYQuKrq6mLwBcA%2FH5T%2B0Pz%2FHAiAisJRrzyfi73fBhyzGUmrBaG%2F9raSOJottzhXBjBt0mSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMvo4QrKgrZjzHlWbeKtwDAlZtS5hjvfh0xB3BHOSMlWmpJ43dRnMuzREfpexSMuSCh0TwMjEpHjGhbOaTsy3NVTt98S%2B8UXDFcvyJUHVTISPZTmndn4KobzCFOyu14B7jIwKydFlK%2Bz6jM1Pc1WW6u83PWH6IqixjpXtPjkj8b0OrDgALIJ67cnR2%2BVc%2ForeCj03pgQ9ptpsDXstHTMkUntetVrfa8uJm1Z6xA4FPL4%2F6Iy9WtBHEL1p9L68KZimbBdGBeH0RtDdWW4y2cnqnLpJuMnWFc1no73e6%2FTmbQJrDsfg1WCEQGkASCNX3De%2B4kQF2yt0vrfacxPkhQmo%2BTk%2FYLX4OKK54TQ%2BfwnQX73YY7QMxd45KQMrdcKdifgpADfVeAiDv%2BYWOqu9z8zxr1rKM1nQOR2qUK6DSrfY9YlpfXMCdwzak3sWAFx5LEmhRl4OLDpl0lU8%2BXZKMyG4i%2FV3DMJgBtlR18Lk89mSbHnExAb8IK%2B5k5os2rZO0pKowq4rMP2EjqbfCICE8TI81n%2FuP0Hl9rjYtezJIKRmWs9BlCfJHnYDIvLt4eyMdKCTfu3Mp9NP5%2FqFRTVMY6fBk1Uv1DPRXfR8B4zsikoICB83ZK9TFTmKjgzjL1IHYBFLbf7eud1u9RUG9lCkwk%2Bq8vQY6pgEXgiJ%2FL7NaMVZ1dEpDzq4QN2ONZnx6mEt%2F4vx5d8sw36e9zoXhw8qWQDTqk0ZJTyUh1p4O9RMbCf%2FVk4sXtboP0515tA4psRTpZ3xg3dnwe2NNzidgau7Cgu1VeZxbPW%2B5xCXouYeLTjJiO5%2FXGF8xlMqR49lm0QgLQqgwkd3KKzuPMW8G1kg0leQhUL8ZFrZzxpZlYhuCeonWD0K2LMfkdQmCL0cG&X-Amz-Signature=a602519d80bb9c174691944d36d49e0b62b13fcc4d0229c22ee5acf516dd4a5f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBAXE6X7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIA3VDquoFB585jUnCFMCVYQuKrq6mLwBcA%2FH5T%2B0Pz%2FHAiAisJRrzyfi73fBhyzGUmrBaG%2F9raSOJottzhXBjBt0mSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMvo4QrKgrZjzHlWbeKtwDAlZtS5hjvfh0xB3BHOSMlWmpJ43dRnMuzREfpexSMuSCh0TwMjEpHjGhbOaTsy3NVTt98S%2B8UXDFcvyJUHVTISPZTmndn4KobzCFOyu14B7jIwKydFlK%2Bz6jM1Pc1WW6u83PWH6IqixjpXtPjkj8b0OrDgALIJ67cnR2%2BVc%2ForeCj03pgQ9ptpsDXstHTMkUntetVrfa8uJm1Z6xA4FPL4%2F6Iy9WtBHEL1p9L68KZimbBdGBeH0RtDdWW4y2cnqnLpJuMnWFc1no73e6%2FTmbQJrDsfg1WCEQGkASCNX3De%2B4kQF2yt0vrfacxPkhQmo%2BTk%2FYLX4OKK54TQ%2BfwnQX73YY7QMxd45KQMrdcKdifgpADfVeAiDv%2BYWOqu9z8zxr1rKM1nQOR2qUK6DSrfY9YlpfXMCdwzak3sWAFx5LEmhRl4OLDpl0lU8%2BXZKMyG4i%2FV3DMJgBtlR18Lk89mSbHnExAb8IK%2B5k5os2rZO0pKowq4rMP2EjqbfCICE8TI81n%2FuP0Hl9rjYtezJIKRmWs9BlCfJHnYDIvLt4eyMdKCTfu3Mp9NP5%2FqFRTVMY6fBk1Uv1DPRXfR8B4zsikoICB83ZK9TFTmKjgzjL1IHYBFLbf7eud1u9RUG9lCkwk%2Bq8vQY6pgEXgiJ%2FL7NaMVZ1dEpDzq4QN2ONZnx6mEt%2F4vx5d8sw36e9zoXhw8qWQDTqk0ZJTyUh1p4O9RMbCf%2FVk4sXtboP0515tA4psRTpZ3xg3dnwe2NNzidgau7Cgu1VeZxbPW%2B5xCXouYeLTjJiO5%2FXGF8xlMqR49lm0QgLQqgwkd3KKzuPMW8G1kg0leQhUL8ZFrZzxpZlYhuCeonWD0K2LMfkdQmCL0cG&X-Amz-Signature=b6d268de511d89320d066a17d2a5d74893b1f0a2311401eeb73984516668dea8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBAXE6X7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIA3VDquoFB585jUnCFMCVYQuKrq6mLwBcA%2FH5T%2B0Pz%2FHAiAisJRrzyfi73fBhyzGUmrBaG%2F9raSOJottzhXBjBt0mSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMvo4QrKgrZjzHlWbeKtwDAlZtS5hjvfh0xB3BHOSMlWmpJ43dRnMuzREfpexSMuSCh0TwMjEpHjGhbOaTsy3NVTt98S%2B8UXDFcvyJUHVTISPZTmndn4KobzCFOyu14B7jIwKydFlK%2Bz6jM1Pc1WW6u83PWH6IqixjpXtPjkj8b0OrDgALIJ67cnR2%2BVc%2ForeCj03pgQ9ptpsDXstHTMkUntetVrfa8uJm1Z6xA4FPL4%2F6Iy9WtBHEL1p9L68KZimbBdGBeH0RtDdWW4y2cnqnLpJuMnWFc1no73e6%2FTmbQJrDsfg1WCEQGkASCNX3De%2B4kQF2yt0vrfacxPkhQmo%2BTk%2FYLX4OKK54TQ%2BfwnQX73YY7QMxd45KQMrdcKdifgpADfVeAiDv%2BYWOqu9z8zxr1rKM1nQOR2qUK6DSrfY9YlpfXMCdwzak3sWAFx5LEmhRl4OLDpl0lU8%2BXZKMyG4i%2FV3DMJgBtlR18Lk89mSbHnExAb8IK%2B5k5os2rZO0pKowq4rMP2EjqbfCICE8TI81n%2FuP0Hl9rjYtezJIKRmWs9BlCfJHnYDIvLt4eyMdKCTfu3Mp9NP5%2FqFRTVMY6fBk1Uv1DPRXfR8B4zsikoICB83ZK9TFTmKjgzjL1IHYBFLbf7eud1u9RUG9lCkwk%2Bq8vQY6pgEXgiJ%2FL7NaMVZ1dEpDzq4QN2ONZnx6mEt%2F4vx5d8sw36e9zoXhw8qWQDTqk0ZJTyUh1p4O9RMbCf%2FVk4sXtboP0515tA4psRTpZ3xg3dnwe2NNzidgau7Cgu1VeZxbPW%2B5xCXouYeLTjJiO5%2FXGF8xlMqR49lm0QgLQqgwkd3KKzuPMW8G1kg0leQhUL8ZFrZzxpZlYhuCeonWD0K2LMfkdQmCL0cG&X-Amz-Signature=4c11572dc4cf41deb21c105c855fcba19647100d7a2bd13e66fb5934f344a140&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBAXE6X7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIA3VDquoFB585jUnCFMCVYQuKrq6mLwBcA%2FH5T%2B0Pz%2FHAiAisJRrzyfi73fBhyzGUmrBaG%2F9raSOJottzhXBjBt0mSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMvo4QrKgrZjzHlWbeKtwDAlZtS5hjvfh0xB3BHOSMlWmpJ43dRnMuzREfpexSMuSCh0TwMjEpHjGhbOaTsy3NVTt98S%2B8UXDFcvyJUHVTISPZTmndn4KobzCFOyu14B7jIwKydFlK%2Bz6jM1Pc1WW6u83PWH6IqixjpXtPjkj8b0OrDgALIJ67cnR2%2BVc%2ForeCj03pgQ9ptpsDXstHTMkUntetVrfa8uJm1Z6xA4FPL4%2F6Iy9WtBHEL1p9L68KZimbBdGBeH0RtDdWW4y2cnqnLpJuMnWFc1no73e6%2FTmbQJrDsfg1WCEQGkASCNX3De%2B4kQF2yt0vrfacxPkhQmo%2BTk%2FYLX4OKK54TQ%2BfwnQX73YY7QMxd45KQMrdcKdifgpADfVeAiDv%2BYWOqu9z8zxr1rKM1nQOR2qUK6DSrfY9YlpfXMCdwzak3sWAFx5LEmhRl4OLDpl0lU8%2BXZKMyG4i%2FV3DMJgBtlR18Lk89mSbHnExAb8IK%2B5k5os2rZO0pKowq4rMP2EjqbfCICE8TI81n%2FuP0Hl9rjYtezJIKRmWs9BlCfJHnYDIvLt4eyMdKCTfu3Mp9NP5%2FqFRTVMY6fBk1Uv1DPRXfR8B4zsikoICB83ZK9TFTmKjgzjL1IHYBFLbf7eud1u9RUG9lCkwk%2Bq8vQY6pgEXgiJ%2FL7NaMVZ1dEpDzq4QN2ONZnx6mEt%2F4vx5d8sw36e9zoXhw8qWQDTqk0ZJTyUh1p4O9RMbCf%2FVk4sXtboP0515tA4psRTpZ3xg3dnwe2NNzidgau7Cgu1VeZxbPW%2B5xCXouYeLTjJiO5%2FXGF8xlMqR49lm0QgLQqgwkd3KKzuPMW8G1kg0leQhUL8ZFrZzxpZlYhuCeonWD0K2LMfkdQmCL0cG&X-Amz-Signature=0ba4ad65285f681daff07891e0a61889ba8a966f1bc66ff14146402c80b10e7a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBAXE6X7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIA3VDquoFB585jUnCFMCVYQuKrq6mLwBcA%2FH5T%2B0Pz%2FHAiAisJRrzyfi73fBhyzGUmrBaG%2F9raSOJottzhXBjBt0mSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMvo4QrKgrZjzHlWbeKtwDAlZtS5hjvfh0xB3BHOSMlWmpJ43dRnMuzREfpexSMuSCh0TwMjEpHjGhbOaTsy3NVTt98S%2B8UXDFcvyJUHVTISPZTmndn4KobzCFOyu14B7jIwKydFlK%2Bz6jM1Pc1WW6u83PWH6IqixjpXtPjkj8b0OrDgALIJ67cnR2%2BVc%2ForeCj03pgQ9ptpsDXstHTMkUntetVrfa8uJm1Z6xA4FPL4%2F6Iy9WtBHEL1p9L68KZimbBdGBeH0RtDdWW4y2cnqnLpJuMnWFc1no73e6%2FTmbQJrDsfg1WCEQGkASCNX3De%2B4kQF2yt0vrfacxPkhQmo%2BTk%2FYLX4OKK54TQ%2BfwnQX73YY7QMxd45KQMrdcKdifgpADfVeAiDv%2BYWOqu9z8zxr1rKM1nQOR2qUK6DSrfY9YlpfXMCdwzak3sWAFx5LEmhRl4OLDpl0lU8%2BXZKMyG4i%2FV3DMJgBtlR18Lk89mSbHnExAb8IK%2B5k5os2rZO0pKowq4rMP2EjqbfCICE8TI81n%2FuP0Hl9rjYtezJIKRmWs9BlCfJHnYDIvLt4eyMdKCTfu3Mp9NP5%2FqFRTVMY6fBk1Uv1DPRXfR8B4zsikoICB83ZK9TFTmKjgzjL1IHYBFLbf7eud1u9RUG9lCkwk%2Bq8vQY6pgEXgiJ%2FL7NaMVZ1dEpDzq4QN2ONZnx6mEt%2F4vx5d8sw36e9zoXhw8qWQDTqk0ZJTyUh1p4O9RMbCf%2FVk4sXtboP0515tA4psRTpZ3xg3dnwe2NNzidgau7Cgu1VeZxbPW%2B5xCXouYeLTjJiO5%2FXGF8xlMqR49lm0QgLQqgwkd3KKzuPMW8G1kg0leQhUL8ZFrZzxpZlYhuCeonWD0K2LMfkdQmCL0cG&X-Amz-Signature=41d812466d73b0bc903c1c68267a9986f0c6828482eb8d43f5e6c5bdc361abeb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBAXE6X7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIA3VDquoFB585jUnCFMCVYQuKrq6mLwBcA%2FH5T%2B0Pz%2FHAiAisJRrzyfi73fBhyzGUmrBaG%2F9raSOJottzhXBjBt0mSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMvo4QrKgrZjzHlWbeKtwDAlZtS5hjvfh0xB3BHOSMlWmpJ43dRnMuzREfpexSMuSCh0TwMjEpHjGhbOaTsy3NVTt98S%2B8UXDFcvyJUHVTISPZTmndn4KobzCFOyu14B7jIwKydFlK%2Bz6jM1Pc1WW6u83PWH6IqixjpXtPjkj8b0OrDgALIJ67cnR2%2BVc%2ForeCj03pgQ9ptpsDXstHTMkUntetVrfa8uJm1Z6xA4FPL4%2F6Iy9WtBHEL1p9L68KZimbBdGBeH0RtDdWW4y2cnqnLpJuMnWFc1no73e6%2FTmbQJrDsfg1WCEQGkASCNX3De%2B4kQF2yt0vrfacxPkhQmo%2BTk%2FYLX4OKK54TQ%2BfwnQX73YY7QMxd45KQMrdcKdifgpADfVeAiDv%2BYWOqu9z8zxr1rKM1nQOR2qUK6DSrfY9YlpfXMCdwzak3sWAFx5LEmhRl4OLDpl0lU8%2BXZKMyG4i%2FV3DMJgBtlR18Lk89mSbHnExAb8IK%2B5k5os2rZO0pKowq4rMP2EjqbfCICE8TI81n%2FuP0Hl9rjYtezJIKRmWs9BlCfJHnYDIvLt4eyMdKCTfu3Mp9NP5%2FqFRTVMY6fBk1Uv1DPRXfR8B4zsikoICB83ZK9TFTmKjgzjL1IHYBFLbf7eud1u9RUG9lCkwk%2Bq8vQY6pgEXgiJ%2FL7NaMVZ1dEpDzq4QN2ONZnx6mEt%2F4vx5d8sw36e9zoXhw8qWQDTqk0ZJTyUh1p4O9RMbCf%2FVk4sXtboP0515tA4psRTpZ3xg3dnwe2NNzidgau7Cgu1VeZxbPW%2B5xCXouYeLTjJiO5%2FXGF8xlMqR49lm0QgLQqgwkd3KKzuPMW8G1kg0leQhUL8ZFrZzxpZlYhuCeonWD0K2LMfkdQmCL0cG&X-Amz-Signature=c9cf314b8dd75def6dbdcdf840c11ebdec41d7ec3bfcdcf60bb4b3fc35665808&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBAXE6X7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIA3VDquoFB585jUnCFMCVYQuKrq6mLwBcA%2FH5T%2B0Pz%2FHAiAisJRrzyfi73fBhyzGUmrBaG%2F9raSOJottzhXBjBt0mSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMvo4QrKgrZjzHlWbeKtwDAlZtS5hjvfh0xB3BHOSMlWmpJ43dRnMuzREfpexSMuSCh0TwMjEpHjGhbOaTsy3NVTt98S%2B8UXDFcvyJUHVTISPZTmndn4KobzCFOyu14B7jIwKydFlK%2Bz6jM1Pc1WW6u83PWH6IqixjpXtPjkj8b0OrDgALIJ67cnR2%2BVc%2ForeCj03pgQ9ptpsDXstHTMkUntetVrfa8uJm1Z6xA4FPL4%2F6Iy9WtBHEL1p9L68KZimbBdGBeH0RtDdWW4y2cnqnLpJuMnWFc1no73e6%2FTmbQJrDsfg1WCEQGkASCNX3De%2B4kQF2yt0vrfacxPkhQmo%2BTk%2FYLX4OKK54TQ%2BfwnQX73YY7QMxd45KQMrdcKdifgpADfVeAiDv%2BYWOqu9z8zxr1rKM1nQOR2qUK6DSrfY9YlpfXMCdwzak3sWAFx5LEmhRl4OLDpl0lU8%2BXZKMyG4i%2FV3DMJgBtlR18Lk89mSbHnExAb8IK%2B5k5os2rZO0pKowq4rMP2EjqbfCICE8TI81n%2FuP0Hl9rjYtezJIKRmWs9BlCfJHnYDIvLt4eyMdKCTfu3Mp9NP5%2FqFRTVMY6fBk1Uv1DPRXfR8B4zsikoICB83ZK9TFTmKjgzjL1IHYBFLbf7eud1u9RUG9lCkwk%2Bq8vQY6pgEXgiJ%2FL7NaMVZ1dEpDzq4QN2ONZnx6mEt%2F4vx5d8sw36e9zoXhw8qWQDTqk0ZJTyUh1p4O9RMbCf%2FVk4sXtboP0515tA4psRTpZ3xg3dnwe2NNzidgau7Cgu1VeZxbPW%2B5xCXouYeLTjJiO5%2FXGF8xlMqR49lm0QgLQqgwkd3KKzuPMW8G1kg0leQhUL8ZFrZzxpZlYhuCeonWD0K2LMfkdQmCL0cG&X-Amz-Signature=3e7f828211616af1aa11dec630d709f662a2e6c9d3ad3673ba4ca99156f8c841&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
