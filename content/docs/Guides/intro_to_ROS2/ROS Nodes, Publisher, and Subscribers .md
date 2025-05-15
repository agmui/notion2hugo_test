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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSLNZTKE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIAU5jdM3lxa56XXmEVysTfxpxZ6ocX0kpxpuj9JUYOU8AiBfc5S%2FuDcZcFhosmRyF8NVgRw3iDIeXjqy6l%2B%2BA%2Bn%2F%2Bir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMAZR3vqFsaXxEn0J0KtwD48omFXd02lijH2eUMvg55%2B5sgHYnS1O2C40Gtxt5LVJY5sy1qr3U0QruzdjCiszoa5Z1eybJbNYrcqXbrWvdpU83AbEbNaQkP61NE%2Fh8sCnFORxJ7HZp8c5L9j0%2FRJvEk84bFRMR0MSpyktTG2W6i2AblO02b1vxiyIdA8%2FkugZYCavOmdYOBH1pUpbJsrVDlva%2BpKSzoJGazTvKpAodWU4FOLZhrONBgkQWtDScVsQ%2BPTNTXfbF0rhIH9S1vK4acSZGLnC6bgDGj8XJNTa6%2Bo1fO3zNSTcOmLPI777U6IiTkdRJSuTnc0OvdikYKgpkRky%2FKKyGK8%2BvbL%2FWOujjfb%2F9T78D9JyuBg3SaOi5fU%2FHJG6qhwWxwMzLPHr4gZz9iUr7V%2Bb9aYgZN8Eihv8abyILQbJ1rf%2BYp61TelSppvf6wuN%2BOZXCBiugpyZPjNVaRR%2BXcaTXn%2F5ZYDf9aXW6Ac3PIqhbddmg0c9K%2BHv7Og2c48h%2BUsR%2BIx%2Bd5VurZ39TXksjr%2BZOdhlXdAbSpLmR7lW6F%2BtFZ6KROPe5ipeTT6gZJTdKalE9JVqNIDT96oR65TAWZte1fUKZA3LDlmdXOBl4zBglxaCq28u5cHrQOoL62Y7LMQKvh8Knelkwi9WXwQY6pgHhwWEOPbSqsvKb6d%2F60if15THWAyRCkjYgETKJCmH8Q%2BCi8GXoBCmXE15S6Noe47RqtPG9R%2FlDy9gvxdnjqfY2GigqhpPOCZC5DTpvqIMjmec2cpuraQIFOyfQJIWudjzcNJ9UcFRLxvYiKLRFb0wYmWZvPVnNc2S9X%2B3RS8hogak%2FoFO%2BDLtdNH8jp1CD9hxVGSkMAYGrX0Zj6ST10hj7pva43hzp&X-Amz-Signature=b9d76eb9fb9f015fe452a25f675435dfc811d6eec253609e05e09dab6c530d81&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSLNZTKE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIAU5jdM3lxa56XXmEVysTfxpxZ6ocX0kpxpuj9JUYOU8AiBfc5S%2FuDcZcFhosmRyF8NVgRw3iDIeXjqy6l%2B%2BA%2Bn%2F%2Bir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMAZR3vqFsaXxEn0J0KtwD48omFXd02lijH2eUMvg55%2B5sgHYnS1O2C40Gtxt5LVJY5sy1qr3U0QruzdjCiszoa5Z1eybJbNYrcqXbrWvdpU83AbEbNaQkP61NE%2Fh8sCnFORxJ7HZp8c5L9j0%2FRJvEk84bFRMR0MSpyktTG2W6i2AblO02b1vxiyIdA8%2FkugZYCavOmdYOBH1pUpbJsrVDlva%2BpKSzoJGazTvKpAodWU4FOLZhrONBgkQWtDScVsQ%2BPTNTXfbF0rhIH9S1vK4acSZGLnC6bgDGj8XJNTa6%2Bo1fO3zNSTcOmLPI777U6IiTkdRJSuTnc0OvdikYKgpkRky%2FKKyGK8%2BvbL%2FWOujjfb%2F9T78D9JyuBg3SaOi5fU%2FHJG6qhwWxwMzLPHr4gZz9iUr7V%2Bb9aYgZN8Eihv8abyILQbJ1rf%2BYp61TelSppvf6wuN%2BOZXCBiugpyZPjNVaRR%2BXcaTXn%2F5ZYDf9aXW6Ac3PIqhbddmg0c9K%2BHv7Og2c48h%2BUsR%2BIx%2Bd5VurZ39TXksjr%2BZOdhlXdAbSpLmR7lW6F%2BtFZ6KROPe5ipeTT6gZJTdKalE9JVqNIDT96oR65TAWZte1fUKZA3LDlmdXOBl4zBglxaCq28u5cHrQOoL62Y7LMQKvh8Knelkwi9WXwQY6pgHhwWEOPbSqsvKb6d%2F60if15THWAyRCkjYgETKJCmH8Q%2BCi8GXoBCmXE15S6Noe47RqtPG9R%2FlDy9gvxdnjqfY2GigqhpPOCZC5DTpvqIMjmec2cpuraQIFOyfQJIWudjzcNJ9UcFRLxvYiKLRFb0wYmWZvPVnNc2S9X%2B3RS8hogak%2FoFO%2BDLtdNH8jp1CD9hxVGSkMAYGrX0Zj6ST10hj7pva43hzp&X-Amz-Signature=00e4d41f8dd99be5c3f319120002aa6e26f2828d50d69b4e3eff423cdb4fd632&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSLNZTKE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIAU5jdM3lxa56XXmEVysTfxpxZ6ocX0kpxpuj9JUYOU8AiBfc5S%2FuDcZcFhosmRyF8NVgRw3iDIeXjqy6l%2B%2BA%2Bn%2F%2Bir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMAZR3vqFsaXxEn0J0KtwD48omFXd02lijH2eUMvg55%2B5sgHYnS1O2C40Gtxt5LVJY5sy1qr3U0QruzdjCiszoa5Z1eybJbNYrcqXbrWvdpU83AbEbNaQkP61NE%2Fh8sCnFORxJ7HZp8c5L9j0%2FRJvEk84bFRMR0MSpyktTG2W6i2AblO02b1vxiyIdA8%2FkugZYCavOmdYOBH1pUpbJsrVDlva%2BpKSzoJGazTvKpAodWU4FOLZhrONBgkQWtDScVsQ%2BPTNTXfbF0rhIH9S1vK4acSZGLnC6bgDGj8XJNTa6%2Bo1fO3zNSTcOmLPI777U6IiTkdRJSuTnc0OvdikYKgpkRky%2FKKyGK8%2BvbL%2FWOujjfb%2F9T78D9JyuBg3SaOi5fU%2FHJG6qhwWxwMzLPHr4gZz9iUr7V%2Bb9aYgZN8Eihv8abyILQbJ1rf%2BYp61TelSppvf6wuN%2BOZXCBiugpyZPjNVaRR%2BXcaTXn%2F5ZYDf9aXW6Ac3PIqhbddmg0c9K%2BHv7Og2c48h%2BUsR%2BIx%2Bd5VurZ39TXksjr%2BZOdhlXdAbSpLmR7lW6F%2BtFZ6KROPe5ipeTT6gZJTdKalE9JVqNIDT96oR65TAWZte1fUKZA3LDlmdXOBl4zBglxaCq28u5cHrQOoL62Y7LMQKvh8Knelkwi9WXwQY6pgHhwWEOPbSqsvKb6d%2F60if15THWAyRCkjYgETKJCmH8Q%2BCi8GXoBCmXE15S6Noe47RqtPG9R%2FlDy9gvxdnjqfY2GigqhpPOCZC5DTpvqIMjmec2cpuraQIFOyfQJIWudjzcNJ9UcFRLxvYiKLRFb0wYmWZvPVnNc2S9X%2B3RS8hogak%2FoFO%2BDLtdNH8jp1CD9hxVGSkMAYGrX0Zj6ST10hj7pva43hzp&X-Amz-Signature=71f7735ef0fba81c47aef34f861194ac9a7aeb87e633469afd38f1927abb8490&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSLNZTKE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIAU5jdM3lxa56XXmEVysTfxpxZ6ocX0kpxpuj9JUYOU8AiBfc5S%2FuDcZcFhosmRyF8NVgRw3iDIeXjqy6l%2B%2BA%2Bn%2F%2Bir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMAZR3vqFsaXxEn0J0KtwD48omFXd02lijH2eUMvg55%2B5sgHYnS1O2C40Gtxt5LVJY5sy1qr3U0QruzdjCiszoa5Z1eybJbNYrcqXbrWvdpU83AbEbNaQkP61NE%2Fh8sCnFORxJ7HZp8c5L9j0%2FRJvEk84bFRMR0MSpyktTG2W6i2AblO02b1vxiyIdA8%2FkugZYCavOmdYOBH1pUpbJsrVDlva%2BpKSzoJGazTvKpAodWU4FOLZhrONBgkQWtDScVsQ%2BPTNTXfbF0rhIH9S1vK4acSZGLnC6bgDGj8XJNTa6%2Bo1fO3zNSTcOmLPI777U6IiTkdRJSuTnc0OvdikYKgpkRky%2FKKyGK8%2BvbL%2FWOujjfb%2F9T78D9JyuBg3SaOi5fU%2FHJG6qhwWxwMzLPHr4gZz9iUr7V%2Bb9aYgZN8Eihv8abyILQbJ1rf%2BYp61TelSppvf6wuN%2BOZXCBiugpyZPjNVaRR%2BXcaTXn%2F5ZYDf9aXW6Ac3PIqhbddmg0c9K%2BHv7Og2c48h%2BUsR%2BIx%2Bd5VurZ39TXksjr%2BZOdhlXdAbSpLmR7lW6F%2BtFZ6KROPe5ipeTT6gZJTdKalE9JVqNIDT96oR65TAWZte1fUKZA3LDlmdXOBl4zBglxaCq28u5cHrQOoL62Y7LMQKvh8Knelkwi9WXwQY6pgHhwWEOPbSqsvKb6d%2F60if15THWAyRCkjYgETKJCmH8Q%2BCi8GXoBCmXE15S6Noe47RqtPG9R%2FlDy9gvxdnjqfY2GigqhpPOCZC5DTpvqIMjmec2cpuraQIFOyfQJIWudjzcNJ9UcFRLxvYiKLRFb0wYmWZvPVnNc2S9X%2B3RS8hogak%2FoFO%2BDLtdNH8jp1CD9hxVGSkMAYGrX0Zj6ST10hj7pva43hzp&X-Amz-Signature=650b893874d2050c1ff2f4c6d70728352beb2274256ad0d9433f259b8f473adf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSLNZTKE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIAU5jdM3lxa56XXmEVysTfxpxZ6ocX0kpxpuj9JUYOU8AiBfc5S%2FuDcZcFhosmRyF8NVgRw3iDIeXjqy6l%2B%2BA%2Bn%2F%2Bir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMAZR3vqFsaXxEn0J0KtwD48omFXd02lijH2eUMvg55%2B5sgHYnS1O2C40Gtxt5LVJY5sy1qr3U0QruzdjCiszoa5Z1eybJbNYrcqXbrWvdpU83AbEbNaQkP61NE%2Fh8sCnFORxJ7HZp8c5L9j0%2FRJvEk84bFRMR0MSpyktTG2W6i2AblO02b1vxiyIdA8%2FkugZYCavOmdYOBH1pUpbJsrVDlva%2BpKSzoJGazTvKpAodWU4FOLZhrONBgkQWtDScVsQ%2BPTNTXfbF0rhIH9S1vK4acSZGLnC6bgDGj8XJNTa6%2Bo1fO3zNSTcOmLPI777U6IiTkdRJSuTnc0OvdikYKgpkRky%2FKKyGK8%2BvbL%2FWOujjfb%2F9T78D9JyuBg3SaOi5fU%2FHJG6qhwWxwMzLPHr4gZz9iUr7V%2Bb9aYgZN8Eihv8abyILQbJ1rf%2BYp61TelSppvf6wuN%2BOZXCBiugpyZPjNVaRR%2BXcaTXn%2F5ZYDf9aXW6Ac3PIqhbddmg0c9K%2BHv7Og2c48h%2BUsR%2BIx%2Bd5VurZ39TXksjr%2BZOdhlXdAbSpLmR7lW6F%2BtFZ6KROPe5ipeTT6gZJTdKalE9JVqNIDT96oR65TAWZte1fUKZA3LDlmdXOBl4zBglxaCq28u5cHrQOoL62Y7LMQKvh8Knelkwi9WXwQY6pgHhwWEOPbSqsvKb6d%2F60if15THWAyRCkjYgETKJCmH8Q%2BCi8GXoBCmXE15S6Noe47RqtPG9R%2FlDy9gvxdnjqfY2GigqhpPOCZC5DTpvqIMjmec2cpuraQIFOyfQJIWudjzcNJ9UcFRLxvYiKLRFb0wYmWZvPVnNc2S9X%2B3RS8hogak%2FoFO%2BDLtdNH8jp1CD9hxVGSkMAYGrX0Zj6ST10hj7pva43hzp&X-Amz-Signature=0600dcfcfa23afd48757addb0b5eb05a9d27d85a0f16d670c0fb8fd9c3652a8a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSLNZTKE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIAU5jdM3lxa56XXmEVysTfxpxZ6ocX0kpxpuj9JUYOU8AiBfc5S%2FuDcZcFhosmRyF8NVgRw3iDIeXjqy6l%2B%2BA%2Bn%2F%2Bir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMAZR3vqFsaXxEn0J0KtwD48omFXd02lijH2eUMvg55%2B5sgHYnS1O2C40Gtxt5LVJY5sy1qr3U0QruzdjCiszoa5Z1eybJbNYrcqXbrWvdpU83AbEbNaQkP61NE%2Fh8sCnFORxJ7HZp8c5L9j0%2FRJvEk84bFRMR0MSpyktTG2W6i2AblO02b1vxiyIdA8%2FkugZYCavOmdYOBH1pUpbJsrVDlva%2BpKSzoJGazTvKpAodWU4FOLZhrONBgkQWtDScVsQ%2BPTNTXfbF0rhIH9S1vK4acSZGLnC6bgDGj8XJNTa6%2Bo1fO3zNSTcOmLPI777U6IiTkdRJSuTnc0OvdikYKgpkRky%2FKKyGK8%2BvbL%2FWOujjfb%2F9T78D9JyuBg3SaOi5fU%2FHJG6qhwWxwMzLPHr4gZz9iUr7V%2Bb9aYgZN8Eihv8abyILQbJ1rf%2BYp61TelSppvf6wuN%2BOZXCBiugpyZPjNVaRR%2BXcaTXn%2F5ZYDf9aXW6Ac3PIqhbddmg0c9K%2BHv7Og2c48h%2BUsR%2BIx%2Bd5VurZ39TXksjr%2BZOdhlXdAbSpLmR7lW6F%2BtFZ6KROPe5ipeTT6gZJTdKalE9JVqNIDT96oR65TAWZte1fUKZA3LDlmdXOBl4zBglxaCq28u5cHrQOoL62Y7LMQKvh8Knelkwi9WXwQY6pgHhwWEOPbSqsvKb6d%2F60if15THWAyRCkjYgETKJCmH8Q%2BCi8GXoBCmXE15S6Noe47RqtPG9R%2FlDy9gvxdnjqfY2GigqhpPOCZC5DTpvqIMjmec2cpuraQIFOyfQJIWudjzcNJ9UcFRLxvYiKLRFb0wYmWZvPVnNc2S9X%2B3RS8hogak%2FoFO%2BDLtdNH8jp1CD9hxVGSkMAYGrX0Zj6ST10hj7pva43hzp&X-Amz-Signature=83689fd823f3f63fd23c3caf3d11d217c997df6749ce58ca63895a536136bbe4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSLNZTKE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIAU5jdM3lxa56XXmEVysTfxpxZ6ocX0kpxpuj9JUYOU8AiBfc5S%2FuDcZcFhosmRyF8NVgRw3iDIeXjqy6l%2B%2BA%2Bn%2F%2Bir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMAZR3vqFsaXxEn0J0KtwD48omFXd02lijH2eUMvg55%2B5sgHYnS1O2C40Gtxt5LVJY5sy1qr3U0QruzdjCiszoa5Z1eybJbNYrcqXbrWvdpU83AbEbNaQkP61NE%2Fh8sCnFORxJ7HZp8c5L9j0%2FRJvEk84bFRMR0MSpyktTG2W6i2AblO02b1vxiyIdA8%2FkugZYCavOmdYOBH1pUpbJsrVDlva%2BpKSzoJGazTvKpAodWU4FOLZhrONBgkQWtDScVsQ%2BPTNTXfbF0rhIH9S1vK4acSZGLnC6bgDGj8XJNTa6%2Bo1fO3zNSTcOmLPI777U6IiTkdRJSuTnc0OvdikYKgpkRky%2FKKyGK8%2BvbL%2FWOujjfb%2F9T78D9JyuBg3SaOi5fU%2FHJG6qhwWxwMzLPHr4gZz9iUr7V%2Bb9aYgZN8Eihv8abyILQbJ1rf%2BYp61TelSppvf6wuN%2BOZXCBiugpyZPjNVaRR%2BXcaTXn%2F5ZYDf9aXW6Ac3PIqhbddmg0c9K%2BHv7Og2c48h%2BUsR%2BIx%2Bd5VurZ39TXksjr%2BZOdhlXdAbSpLmR7lW6F%2BtFZ6KROPe5ipeTT6gZJTdKalE9JVqNIDT96oR65TAWZte1fUKZA3LDlmdXOBl4zBglxaCq28u5cHrQOoL62Y7LMQKvh8Knelkwi9WXwQY6pgHhwWEOPbSqsvKb6d%2F60if15THWAyRCkjYgETKJCmH8Q%2BCi8GXoBCmXE15S6Noe47RqtPG9R%2FlDy9gvxdnjqfY2GigqhpPOCZC5DTpvqIMjmec2cpuraQIFOyfQJIWudjzcNJ9UcFRLxvYiKLRFb0wYmWZvPVnNc2S9X%2B3RS8hogak%2FoFO%2BDLtdNH8jp1CD9hxVGSkMAYGrX0Zj6ST10hj7pva43hzp&X-Amz-Signature=ddf66ff41e64250fc116f08f15d97b18f3453cb96b772ccccc2cf217a1e11b96&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSLNZTKE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIAU5jdM3lxa56XXmEVysTfxpxZ6ocX0kpxpuj9JUYOU8AiBfc5S%2FuDcZcFhosmRyF8NVgRw3iDIeXjqy6l%2B%2BA%2Bn%2F%2Bir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMAZR3vqFsaXxEn0J0KtwD48omFXd02lijH2eUMvg55%2B5sgHYnS1O2C40Gtxt5LVJY5sy1qr3U0QruzdjCiszoa5Z1eybJbNYrcqXbrWvdpU83AbEbNaQkP61NE%2Fh8sCnFORxJ7HZp8c5L9j0%2FRJvEk84bFRMR0MSpyktTG2W6i2AblO02b1vxiyIdA8%2FkugZYCavOmdYOBH1pUpbJsrVDlva%2BpKSzoJGazTvKpAodWU4FOLZhrONBgkQWtDScVsQ%2BPTNTXfbF0rhIH9S1vK4acSZGLnC6bgDGj8XJNTa6%2Bo1fO3zNSTcOmLPI777U6IiTkdRJSuTnc0OvdikYKgpkRky%2FKKyGK8%2BvbL%2FWOujjfb%2F9T78D9JyuBg3SaOi5fU%2FHJG6qhwWxwMzLPHr4gZz9iUr7V%2Bb9aYgZN8Eihv8abyILQbJ1rf%2BYp61TelSppvf6wuN%2BOZXCBiugpyZPjNVaRR%2BXcaTXn%2F5ZYDf9aXW6Ac3PIqhbddmg0c9K%2BHv7Og2c48h%2BUsR%2BIx%2Bd5VurZ39TXksjr%2BZOdhlXdAbSpLmR7lW6F%2BtFZ6KROPe5ipeTT6gZJTdKalE9JVqNIDT96oR65TAWZte1fUKZA3LDlmdXOBl4zBglxaCq28u5cHrQOoL62Y7LMQKvh8Knelkwi9WXwQY6pgHhwWEOPbSqsvKb6d%2F60if15THWAyRCkjYgETKJCmH8Q%2BCi8GXoBCmXE15S6Noe47RqtPG9R%2FlDy9gvxdnjqfY2GigqhpPOCZC5DTpvqIMjmec2cpuraQIFOyfQJIWudjzcNJ9UcFRLxvYiKLRFb0wYmWZvPVnNc2S9X%2B3RS8hogak%2FoFO%2BDLtdNH8jp1CD9hxVGSkMAYGrX0Zj6ST10hj7pva43hzp&X-Amz-Signature=2cd4cf14d0e5feed9f6ac2b51ed0791c338c82e4dc57e06f16881b3568e8f5b6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
