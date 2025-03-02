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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOIEGWZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGhjm016vynhMnBpQWfyzF6%2BMGbm%2FCNZo1x92y9m4qxUAiEAzVdZTGdkWOFGo8wI0hNTDBHvAh%2Fa6CmubDmTWLVWiMQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGR4ir6MpZc95aXywSrcA7QBDCofzZM07eA%2F7mKfv4EsBGd55CsUDM9eGD%2BJie2fIRUhlQwotL38%2Bbl%2BDH0%2FJtBSkKhQyaekJnANb8SsVovW5%2FIenCXL7qJfbkOOZHZDRU8mB1zABi6lIFl8yIc1lNWLW%2FVM8B8l9%2BGOoE1rUiocoU0uyceG99M2qMdSlitEAgKj%2Fw4QInzGwEbK9xFdpJ1s0AICmoLFMVsNRddcc7FnevGU58wWY3kDApLGuucPbULm4PtMNhSq7uveCvCF1bE%2FLApG7UReKAJ0ZaW%2F%2BsK56AmmnyA9ljF3ZdlSRWmdO1NzksdUyF%2BlvkeP4Hxv0UnJmUrI9n5oaowXlZTM%2Bu0EZNAeX4MJk93xHFX6n8d4tvM9RFcfYGmnkEzKnmkeLXLoi%2B0d3DaZqlGtfU3aUTlFsdlRBVk9L0QFcfdVffGfOFt5O%2FxlBB6ctcwI4E7AoNIM2HQcften6%2FSV8%2BpfOMiPw3g8y%2Bm82kTccFADjQayWn3C3tXksFipR5qHGz9JQ0b2Vbyb5z7IllCZohaAA3nwwA0ulmSxJWdEXToUS7jhdYOykvCgrrOmnfzOHnXPVoaVa4LExuQIjqDcaZaJ2ROi4ntPM6jHXHqpyuqhFhZlylttdD7vQRtlMqISMN7Xj74GOqUB%2BoZaGTI%2BTGy%2FIREnpfGwRTSazAdnMkN6s0Q5Pmzt8wcqh9a4yRCQsCrrmBiO3k%2BBxhxp36qGFDP2C4qjZOiQcMaZqRR4uEDc51p0N6%2BDl8C6VZ5y%2BfC2mb9eZCTmI7%2BNHBmAW6KWcwVrb4XMWuI8fVaAoxSpW2fCv8aiJgUJB7aWQnyAqE%2F%2F7EBTAZbkHgKzOmpLb1S6drB0AXFdpAXUxttOT2YQ&X-Amz-Signature=26108ba6412032f04c2973ee34ca2130b6c05a5f1160079210c45de7d9f53c19&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOIEGWZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGhjm016vynhMnBpQWfyzF6%2BMGbm%2FCNZo1x92y9m4qxUAiEAzVdZTGdkWOFGo8wI0hNTDBHvAh%2Fa6CmubDmTWLVWiMQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGR4ir6MpZc95aXywSrcA7QBDCofzZM07eA%2F7mKfv4EsBGd55CsUDM9eGD%2BJie2fIRUhlQwotL38%2Bbl%2BDH0%2FJtBSkKhQyaekJnANb8SsVovW5%2FIenCXL7qJfbkOOZHZDRU8mB1zABi6lIFl8yIc1lNWLW%2FVM8B8l9%2BGOoE1rUiocoU0uyceG99M2qMdSlitEAgKj%2Fw4QInzGwEbK9xFdpJ1s0AICmoLFMVsNRddcc7FnevGU58wWY3kDApLGuucPbULm4PtMNhSq7uveCvCF1bE%2FLApG7UReKAJ0ZaW%2F%2BsK56AmmnyA9ljF3ZdlSRWmdO1NzksdUyF%2BlvkeP4Hxv0UnJmUrI9n5oaowXlZTM%2Bu0EZNAeX4MJk93xHFX6n8d4tvM9RFcfYGmnkEzKnmkeLXLoi%2B0d3DaZqlGtfU3aUTlFsdlRBVk9L0QFcfdVffGfOFt5O%2FxlBB6ctcwI4E7AoNIM2HQcften6%2FSV8%2BpfOMiPw3g8y%2Bm82kTccFADjQayWn3C3tXksFipR5qHGz9JQ0b2Vbyb5z7IllCZohaAA3nwwA0ulmSxJWdEXToUS7jhdYOykvCgrrOmnfzOHnXPVoaVa4LExuQIjqDcaZaJ2ROi4ntPM6jHXHqpyuqhFhZlylttdD7vQRtlMqISMN7Xj74GOqUB%2BoZaGTI%2BTGy%2FIREnpfGwRTSazAdnMkN6s0Q5Pmzt8wcqh9a4yRCQsCrrmBiO3k%2BBxhxp36qGFDP2C4qjZOiQcMaZqRR4uEDc51p0N6%2BDl8C6VZ5y%2BfC2mb9eZCTmI7%2BNHBmAW6KWcwVrb4XMWuI8fVaAoxSpW2fCv8aiJgUJB7aWQnyAqE%2F%2F7EBTAZbkHgKzOmpLb1S6drB0AXFdpAXUxttOT2YQ&X-Amz-Signature=be5078766042209cd6b5bf3deab9691edda3fc1285c5b2e5d7ddc1afdb32f13c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOIEGWZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGhjm016vynhMnBpQWfyzF6%2BMGbm%2FCNZo1x92y9m4qxUAiEAzVdZTGdkWOFGo8wI0hNTDBHvAh%2Fa6CmubDmTWLVWiMQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGR4ir6MpZc95aXywSrcA7QBDCofzZM07eA%2F7mKfv4EsBGd55CsUDM9eGD%2BJie2fIRUhlQwotL38%2Bbl%2BDH0%2FJtBSkKhQyaekJnANb8SsVovW5%2FIenCXL7qJfbkOOZHZDRU8mB1zABi6lIFl8yIc1lNWLW%2FVM8B8l9%2BGOoE1rUiocoU0uyceG99M2qMdSlitEAgKj%2Fw4QInzGwEbK9xFdpJ1s0AICmoLFMVsNRddcc7FnevGU58wWY3kDApLGuucPbULm4PtMNhSq7uveCvCF1bE%2FLApG7UReKAJ0ZaW%2F%2BsK56AmmnyA9ljF3ZdlSRWmdO1NzksdUyF%2BlvkeP4Hxv0UnJmUrI9n5oaowXlZTM%2Bu0EZNAeX4MJk93xHFX6n8d4tvM9RFcfYGmnkEzKnmkeLXLoi%2B0d3DaZqlGtfU3aUTlFsdlRBVk9L0QFcfdVffGfOFt5O%2FxlBB6ctcwI4E7AoNIM2HQcften6%2FSV8%2BpfOMiPw3g8y%2Bm82kTccFADjQayWn3C3tXksFipR5qHGz9JQ0b2Vbyb5z7IllCZohaAA3nwwA0ulmSxJWdEXToUS7jhdYOykvCgrrOmnfzOHnXPVoaVa4LExuQIjqDcaZaJ2ROi4ntPM6jHXHqpyuqhFhZlylttdD7vQRtlMqISMN7Xj74GOqUB%2BoZaGTI%2BTGy%2FIREnpfGwRTSazAdnMkN6s0Q5Pmzt8wcqh9a4yRCQsCrrmBiO3k%2BBxhxp36qGFDP2C4qjZOiQcMaZqRR4uEDc51p0N6%2BDl8C6VZ5y%2BfC2mb9eZCTmI7%2BNHBmAW6KWcwVrb4XMWuI8fVaAoxSpW2fCv8aiJgUJB7aWQnyAqE%2F%2F7EBTAZbkHgKzOmpLb1S6drB0AXFdpAXUxttOT2YQ&X-Amz-Signature=1f432f140a8273e1550313d8d593c87aeaecba0935ea9e0aa5154ecd98847164&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOIEGWZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGhjm016vynhMnBpQWfyzF6%2BMGbm%2FCNZo1x92y9m4qxUAiEAzVdZTGdkWOFGo8wI0hNTDBHvAh%2Fa6CmubDmTWLVWiMQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGR4ir6MpZc95aXywSrcA7QBDCofzZM07eA%2F7mKfv4EsBGd55CsUDM9eGD%2BJie2fIRUhlQwotL38%2Bbl%2BDH0%2FJtBSkKhQyaekJnANb8SsVovW5%2FIenCXL7qJfbkOOZHZDRU8mB1zABi6lIFl8yIc1lNWLW%2FVM8B8l9%2BGOoE1rUiocoU0uyceG99M2qMdSlitEAgKj%2Fw4QInzGwEbK9xFdpJ1s0AICmoLFMVsNRddcc7FnevGU58wWY3kDApLGuucPbULm4PtMNhSq7uveCvCF1bE%2FLApG7UReKAJ0ZaW%2F%2BsK56AmmnyA9ljF3ZdlSRWmdO1NzksdUyF%2BlvkeP4Hxv0UnJmUrI9n5oaowXlZTM%2Bu0EZNAeX4MJk93xHFX6n8d4tvM9RFcfYGmnkEzKnmkeLXLoi%2B0d3DaZqlGtfU3aUTlFsdlRBVk9L0QFcfdVffGfOFt5O%2FxlBB6ctcwI4E7AoNIM2HQcften6%2FSV8%2BpfOMiPw3g8y%2Bm82kTccFADjQayWn3C3tXksFipR5qHGz9JQ0b2Vbyb5z7IllCZohaAA3nwwA0ulmSxJWdEXToUS7jhdYOykvCgrrOmnfzOHnXPVoaVa4LExuQIjqDcaZaJ2ROi4ntPM6jHXHqpyuqhFhZlylttdD7vQRtlMqISMN7Xj74GOqUB%2BoZaGTI%2BTGy%2FIREnpfGwRTSazAdnMkN6s0Q5Pmzt8wcqh9a4yRCQsCrrmBiO3k%2BBxhxp36qGFDP2C4qjZOiQcMaZqRR4uEDc51p0N6%2BDl8C6VZ5y%2BfC2mb9eZCTmI7%2BNHBmAW6KWcwVrb4XMWuI8fVaAoxSpW2fCv8aiJgUJB7aWQnyAqE%2F%2F7EBTAZbkHgKzOmpLb1S6drB0AXFdpAXUxttOT2YQ&X-Amz-Signature=010b79ff1fa41050ee798d6f84766179f70022a41cd438266441653bca8fd306&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOIEGWZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGhjm016vynhMnBpQWfyzF6%2BMGbm%2FCNZo1x92y9m4qxUAiEAzVdZTGdkWOFGo8wI0hNTDBHvAh%2Fa6CmubDmTWLVWiMQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGR4ir6MpZc95aXywSrcA7QBDCofzZM07eA%2F7mKfv4EsBGd55CsUDM9eGD%2BJie2fIRUhlQwotL38%2Bbl%2BDH0%2FJtBSkKhQyaekJnANb8SsVovW5%2FIenCXL7qJfbkOOZHZDRU8mB1zABi6lIFl8yIc1lNWLW%2FVM8B8l9%2BGOoE1rUiocoU0uyceG99M2qMdSlitEAgKj%2Fw4QInzGwEbK9xFdpJ1s0AICmoLFMVsNRddcc7FnevGU58wWY3kDApLGuucPbULm4PtMNhSq7uveCvCF1bE%2FLApG7UReKAJ0ZaW%2F%2BsK56AmmnyA9ljF3ZdlSRWmdO1NzksdUyF%2BlvkeP4Hxv0UnJmUrI9n5oaowXlZTM%2Bu0EZNAeX4MJk93xHFX6n8d4tvM9RFcfYGmnkEzKnmkeLXLoi%2B0d3DaZqlGtfU3aUTlFsdlRBVk9L0QFcfdVffGfOFt5O%2FxlBB6ctcwI4E7AoNIM2HQcften6%2FSV8%2BpfOMiPw3g8y%2Bm82kTccFADjQayWn3C3tXksFipR5qHGz9JQ0b2Vbyb5z7IllCZohaAA3nwwA0ulmSxJWdEXToUS7jhdYOykvCgrrOmnfzOHnXPVoaVa4LExuQIjqDcaZaJ2ROi4ntPM6jHXHqpyuqhFhZlylttdD7vQRtlMqISMN7Xj74GOqUB%2BoZaGTI%2BTGy%2FIREnpfGwRTSazAdnMkN6s0Q5Pmzt8wcqh9a4yRCQsCrrmBiO3k%2BBxhxp36qGFDP2C4qjZOiQcMaZqRR4uEDc51p0N6%2BDl8C6VZ5y%2BfC2mb9eZCTmI7%2BNHBmAW6KWcwVrb4XMWuI8fVaAoxSpW2fCv8aiJgUJB7aWQnyAqE%2F%2F7EBTAZbkHgKzOmpLb1S6drB0AXFdpAXUxttOT2YQ&X-Amz-Signature=a605dc43a49db89f6471743cc466a22f6da10ec4dffd8f7da01c8e3a8cc252a3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOIEGWZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGhjm016vynhMnBpQWfyzF6%2BMGbm%2FCNZo1x92y9m4qxUAiEAzVdZTGdkWOFGo8wI0hNTDBHvAh%2Fa6CmubDmTWLVWiMQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGR4ir6MpZc95aXywSrcA7QBDCofzZM07eA%2F7mKfv4EsBGd55CsUDM9eGD%2BJie2fIRUhlQwotL38%2Bbl%2BDH0%2FJtBSkKhQyaekJnANb8SsVovW5%2FIenCXL7qJfbkOOZHZDRU8mB1zABi6lIFl8yIc1lNWLW%2FVM8B8l9%2BGOoE1rUiocoU0uyceG99M2qMdSlitEAgKj%2Fw4QInzGwEbK9xFdpJ1s0AICmoLFMVsNRddcc7FnevGU58wWY3kDApLGuucPbULm4PtMNhSq7uveCvCF1bE%2FLApG7UReKAJ0ZaW%2F%2BsK56AmmnyA9ljF3ZdlSRWmdO1NzksdUyF%2BlvkeP4Hxv0UnJmUrI9n5oaowXlZTM%2Bu0EZNAeX4MJk93xHFX6n8d4tvM9RFcfYGmnkEzKnmkeLXLoi%2B0d3DaZqlGtfU3aUTlFsdlRBVk9L0QFcfdVffGfOFt5O%2FxlBB6ctcwI4E7AoNIM2HQcften6%2FSV8%2BpfOMiPw3g8y%2Bm82kTccFADjQayWn3C3tXksFipR5qHGz9JQ0b2Vbyb5z7IllCZohaAA3nwwA0ulmSxJWdEXToUS7jhdYOykvCgrrOmnfzOHnXPVoaVa4LExuQIjqDcaZaJ2ROi4ntPM6jHXHqpyuqhFhZlylttdD7vQRtlMqISMN7Xj74GOqUB%2BoZaGTI%2BTGy%2FIREnpfGwRTSazAdnMkN6s0Q5Pmzt8wcqh9a4yRCQsCrrmBiO3k%2BBxhxp36qGFDP2C4qjZOiQcMaZqRR4uEDc51p0N6%2BDl8C6VZ5y%2BfC2mb9eZCTmI7%2BNHBmAW6KWcwVrb4XMWuI8fVaAoxSpW2fCv8aiJgUJB7aWQnyAqE%2F%2F7EBTAZbkHgKzOmpLb1S6drB0AXFdpAXUxttOT2YQ&X-Amz-Signature=22e75fc9c47a5d3c6213a11f78eb86a3694d0e1058259acfdfc22ef36d30f0c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOIEGWZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGhjm016vynhMnBpQWfyzF6%2BMGbm%2FCNZo1x92y9m4qxUAiEAzVdZTGdkWOFGo8wI0hNTDBHvAh%2Fa6CmubDmTWLVWiMQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGR4ir6MpZc95aXywSrcA7QBDCofzZM07eA%2F7mKfv4EsBGd55CsUDM9eGD%2BJie2fIRUhlQwotL38%2Bbl%2BDH0%2FJtBSkKhQyaekJnANb8SsVovW5%2FIenCXL7qJfbkOOZHZDRU8mB1zABi6lIFl8yIc1lNWLW%2FVM8B8l9%2BGOoE1rUiocoU0uyceG99M2qMdSlitEAgKj%2Fw4QInzGwEbK9xFdpJ1s0AICmoLFMVsNRddcc7FnevGU58wWY3kDApLGuucPbULm4PtMNhSq7uveCvCF1bE%2FLApG7UReKAJ0ZaW%2F%2BsK56AmmnyA9ljF3ZdlSRWmdO1NzksdUyF%2BlvkeP4Hxv0UnJmUrI9n5oaowXlZTM%2Bu0EZNAeX4MJk93xHFX6n8d4tvM9RFcfYGmnkEzKnmkeLXLoi%2B0d3DaZqlGtfU3aUTlFsdlRBVk9L0QFcfdVffGfOFt5O%2FxlBB6ctcwI4E7AoNIM2HQcften6%2FSV8%2BpfOMiPw3g8y%2Bm82kTccFADjQayWn3C3tXksFipR5qHGz9JQ0b2Vbyb5z7IllCZohaAA3nwwA0ulmSxJWdEXToUS7jhdYOykvCgrrOmnfzOHnXPVoaVa4LExuQIjqDcaZaJ2ROi4ntPM6jHXHqpyuqhFhZlylttdD7vQRtlMqISMN7Xj74GOqUB%2BoZaGTI%2BTGy%2FIREnpfGwRTSazAdnMkN6s0Q5Pmzt8wcqh9a4yRCQsCrrmBiO3k%2BBxhxp36qGFDP2C4qjZOiQcMaZqRR4uEDc51p0N6%2BDl8C6VZ5y%2BfC2mb9eZCTmI7%2BNHBmAW6KWcwVrb4XMWuI8fVaAoxSpW2fCv8aiJgUJB7aWQnyAqE%2F%2F7EBTAZbkHgKzOmpLb1S6drB0AXFdpAXUxttOT2YQ&X-Amz-Signature=ff4f0d06a72fc03eb7c5fc66a7988b7871b50d00fb55abe71a910fd657315d89&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOIEGWZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGhjm016vynhMnBpQWfyzF6%2BMGbm%2FCNZo1x92y9m4qxUAiEAzVdZTGdkWOFGo8wI0hNTDBHvAh%2Fa6CmubDmTWLVWiMQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGR4ir6MpZc95aXywSrcA7QBDCofzZM07eA%2F7mKfv4EsBGd55CsUDM9eGD%2BJie2fIRUhlQwotL38%2Bbl%2BDH0%2FJtBSkKhQyaekJnANb8SsVovW5%2FIenCXL7qJfbkOOZHZDRU8mB1zABi6lIFl8yIc1lNWLW%2FVM8B8l9%2BGOoE1rUiocoU0uyceG99M2qMdSlitEAgKj%2Fw4QInzGwEbK9xFdpJ1s0AICmoLFMVsNRddcc7FnevGU58wWY3kDApLGuucPbULm4PtMNhSq7uveCvCF1bE%2FLApG7UReKAJ0ZaW%2F%2BsK56AmmnyA9ljF3ZdlSRWmdO1NzksdUyF%2BlvkeP4Hxv0UnJmUrI9n5oaowXlZTM%2Bu0EZNAeX4MJk93xHFX6n8d4tvM9RFcfYGmnkEzKnmkeLXLoi%2B0d3DaZqlGtfU3aUTlFsdlRBVk9L0QFcfdVffGfOFt5O%2FxlBB6ctcwI4E7AoNIM2HQcften6%2FSV8%2BpfOMiPw3g8y%2Bm82kTccFADjQayWn3C3tXksFipR5qHGz9JQ0b2Vbyb5z7IllCZohaAA3nwwA0ulmSxJWdEXToUS7jhdYOykvCgrrOmnfzOHnXPVoaVa4LExuQIjqDcaZaJ2ROi4ntPM6jHXHqpyuqhFhZlylttdD7vQRtlMqISMN7Xj74GOqUB%2BoZaGTI%2BTGy%2FIREnpfGwRTSazAdnMkN6s0Q5Pmzt8wcqh9a4yRCQsCrrmBiO3k%2BBxhxp36qGFDP2C4qjZOiQcMaZqRR4uEDc51p0N6%2BDl8C6VZ5y%2BfC2mb9eZCTmI7%2BNHBmAW6KWcwVrb4XMWuI8fVaAoxSpW2fCv8aiJgUJB7aWQnyAqE%2F%2F7EBTAZbkHgKzOmpLb1S6drB0AXFdpAXUxttOT2YQ&X-Amz-Signature=9e3df616d51c87e6f5c7cefa425ad9343b9e8f536ced3bceb2738f895c36717d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
