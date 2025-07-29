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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RILWCD7P%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIAvi43FQ1%2BapBpHTOmUcArBs8vhCY%2FUYa5zjfz9HaWGwAiAa1HYuN4HnGBen3UrzeeGF0P55NEcWjoKd6SgNjVRihiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn5k2vsqypg%2BEngWWKtwDk953scbtIkpRJGDgrJCAcAv09Kl9P5nDdIujeDhCP0hCz5RLIOQhWifMkOHpKt79QV6lzsscxW6MWRfZOReDQSo4TFptkmY31UTYafXyQ%2B5EbdrW%2BmJhogFu1a2Q98PTK4OjA%2F3Oct6yX%2FoX5Konsr%2BjJgvrDMl0FEPJ299W42iOzeMZZXMoPZBAp73UOwxOdy5PhxggPONKKdbHWDq%2FL%2FROkjGk%2Bb%2BiJqAfER1tV9Zy9z%2BfaFJARFv5kVZ3qfRPwahfsCfKqqXGOajEPiOItfmTwLs%2FxsjQgkMNrqeZR8z7jzwWneuNMdtpuZIssPlngImPJRhMaiGhUPEki1GPh%2FUBrj1Ui4FQrARljrdI4C%2BDDUnGMCAddsYBko%2BtBrow2o7EwjJAgILXRpT0MOuEucxar6LNgWXJm94gnrErQWrGzSfJOyucJ6kvolsaQc539QyAkZ%2FOthqhEQE2BUEa1hw1X6i%2Fw0QgQQ%2BCS8Zyqy4%2FvWSdhSJIckr52pIWQyfEwlMQa8XlNu%2FAY1rAer27T35CkxoYaQSitrO9phA89QQcX3Bsmets4m9BKDR18pTcxRa%2BTtTSiz4Cww0TmsYL1F5Dn5Yj4sdlBEQOTP7IMBl3fkTxg04HUwWCzNUwkLWhxAY6pgG1qrCEzzGrlv3GrCArvNgUFA1FiiAcPPZ6MWogEVJbGGZivuWl%2FrcVBR2NVptqaV%2BzfkfvyOJiBbBJc17mL9D0ikISoBAcc2ql4ZCvt9dSOaseRUPQrXQ7ymvi2LaC%2FYxT944nn35kpcbqXtdcctzYZC2IEDLcheiEulReYVT14GzrdLHW4dQHUr8%2FJNlVNl%2F30e374uzjQoD60MvY85fOvPxlT04Z&X-Amz-Signature=74c59f23fccada208474d6313264343d1e168afdb708782d8a446d615c57554f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RILWCD7P%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIAvi43FQ1%2BapBpHTOmUcArBs8vhCY%2FUYa5zjfz9HaWGwAiAa1HYuN4HnGBen3UrzeeGF0P55NEcWjoKd6SgNjVRihiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn5k2vsqypg%2BEngWWKtwDk953scbtIkpRJGDgrJCAcAv09Kl9P5nDdIujeDhCP0hCz5RLIOQhWifMkOHpKt79QV6lzsscxW6MWRfZOReDQSo4TFptkmY31UTYafXyQ%2B5EbdrW%2BmJhogFu1a2Q98PTK4OjA%2F3Oct6yX%2FoX5Konsr%2BjJgvrDMl0FEPJ299W42iOzeMZZXMoPZBAp73UOwxOdy5PhxggPONKKdbHWDq%2FL%2FROkjGk%2Bb%2BiJqAfER1tV9Zy9z%2BfaFJARFv5kVZ3qfRPwahfsCfKqqXGOajEPiOItfmTwLs%2FxsjQgkMNrqeZR8z7jzwWneuNMdtpuZIssPlngImPJRhMaiGhUPEki1GPh%2FUBrj1Ui4FQrARljrdI4C%2BDDUnGMCAddsYBko%2BtBrow2o7EwjJAgILXRpT0MOuEucxar6LNgWXJm94gnrErQWrGzSfJOyucJ6kvolsaQc539QyAkZ%2FOthqhEQE2BUEa1hw1X6i%2Fw0QgQQ%2BCS8Zyqy4%2FvWSdhSJIckr52pIWQyfEwlMQa8XlNu%2FAY1rAer27T35CkxoYaQSitrO9phA89QQcX3Bsmets4m9BKDR18pTcxRa%2BTtTSiz4Cww0TmsYL1F5Dn5Yj4sdlBEQOTP7IMBl3fkTxg04HUwWCzNUwkLWhxAY6pgG1qrCEzzGrlv3GrCArvNgUFA1FiiAcPPZ6MWogEVJbGGZivuWl%2FrcVBR2NVptqaV%2BzfkfvyOJiBbBJc17mL9D0ikISoBAcc2ql4ZCvt9dSOaseRUPQrXQ7ymvi2LaC%2FYxT944nn35kpcbqXtdcctzYZC2IEDLcheiEulReYVT14GzrdLHW4dQHUr8%2FJNlVNl%2F30e374uzjQoD60MvY85fOvPxlT04Z&X-Amz-Signature=bc491fa7a0180cb742ea82ea539b82d16588ca331942fe7e256b9042a06e2525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RILWCD7P%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIAvi43FQ1%2BapBpHTOmUcArBs8vhCY%2FUYa5zjfz9HaWGwAiAa1HYuN4HnGBen3UrzeeGF0P55NEcWjoKd6SgNjVRihiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn5k2vsqypg%2BEngWWKtwDk953scbtIkpRJGDgrJCAcAv09Kl9P5nDdIujeDhCP0hCz5RLIOQhWifMkOHpKt79QV6lzsscxW6MWRfZOReDQSo4TFptkmY31UTYafXyQ%2B5EbdrW%2BmJhogFu1a2Q98PTK4OjA%2F3Oct6yX%2FoX5Konsr%2BjJgvrDMl0FEPJ299W42iOzeMZZXMoPZBAp73UOwxOdy5PhxggPONKKdbHWDq%2FL%2FROkjGk%2Bb%2BiJqAfER1tV9Zy9z%2BfaFJARFv5kVZ3qfRPwahfsCfKqqXGOajEPiOItfmTwLs%2FxsjQgkMNrqeZR8z7jzwWneuNMdtpuZIssPlngImPJRhMaiGhUPEki1GPh%2FUBrj1Ui4FQrARljrdI4C%2BDDUnGMCAddsYBko%2BtBrow2o7EwjJAgILXRpT0MOuEucxar6LNgWXJm94gnrErQWrGzSfJOyucJ6kvolsaQc539QyAkZ%2FOthqhEQE2BUEa1hw1X6i%2Fw0QgQQ%2BCS8Zyqy4%2FvWSdhSJIckr52pIWQyfEwlMQa8XlNu%2FAY1rAer27T35CkxoYaQSitrO9phA89QQcX3Bsmets4m9BKDR18pTcxRa%2BTtTSiz4Cww0TmsYL1F5Dn5Yj4sdlBEQOTP7IMBl3fkTxg04HUwWCzNUwkLWhxAY6pgG1qrCEzzGrlv3GrCArvNgUFA1FiiAcPPZ6MWogEVJbGGZivuWl%2FrcVBR2NVptqaV%2BzfkfvyOJiBbBJc17mL9D0ikISoBAcc2ql4ZCvt9dSOaseRUPQrXQ7ymvi2LaC%2FYxT944nn35kpcbqXtdcctzYZC2IEDLcheiEulReYVT14GzrdLHW4dQHUr8%2FJNlVNl%2F30e374uzjQoD60MvY85fOvPxlT04Z&X-Amz-Signature=550cf17a2c158739349d44a8f75bcd318173661ef1577b9a6d1d7c7199540dd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RILWCD7P%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIAvi43FQ1%2BapBpHTOmUcArBs8vhCY%2FUYa5zjfz9HaWGwAiAa1HYuN4HnGBen3UrzeeGF0P55NEcWjoKd6SgNjVRihiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn5k2vsqypg%2BEngWWKtwDk953scbtIkpRJGDgrJCAcAv09Kl9P5nDdIujeDhCP0hCz5RLIOQhWifMkOHpKt79QV6lzsscxW6MWRfZOReDQSo4TFptkmY31UTYafXyQ%2B5EbdrW%2BmJhogFu1a2Q98PTK4OjA%2F3Oct6yX%2FoX5Konsr%2BjJgvrDMl0FEPJ299W42iOzeMZZXMoPZBAp73UOwxOdy5PhxggPONKKdbHWDq%2FL%2FROkjGk%2Bb%2BiJqAfER1tV9Zy9z%2BfaFJARFv5kVZ3qfRPwahfsCfKqqXGOajEPiOItfmTwLs%2FxsjQgkMNrqeZR8z7jzwWneuNMdtpuZIssPlngImPJRhMaiGhUPEki1GPh%2FUBrj1Ui4FQrARljrdI4C%2BDDUnGMCAddsYBko%2BtBrow2o7EwjJAgILXRpT0MOuEucxar6LNgWXJm94gnrErQWrGzSfJOyucJ6kvolsaQc539QyAkZ%2FOthqhEQE2BUEa1hw1X6i%2Fw0QgQQ%2BCS8Zyqy4%2FvWSdhSJIckr52pIWQyfEwlMQa8XlNu%2FAY1rAer27T35CkxoYaQSitrO9phA89QQcX3Bsmets4m9BKDR18pTcxRa%2BTtTSiz4Cww0TmsYL1F5Dn5Yj4sdlBEQOTP7IMBl3fkTxg04HUwWCzNUwkLWhxAY6pgG1qrCEzzGrlv3GrCArvNgUFA1FiiAcPPZ6MWogEVJbGGZivuWl%2FrcVBR2NVptqaV%2BzfkfvyOJiBbBJc17mL9D0ikISoBAcc2ql4ZCvt9dSOaseRUPQrXQ7ymvi2LaC%2FYxT944nn35kpcbqXtdcctzYZC2IEDLcheiEulReYVT14GzrdLHW4dQHUr8%2FJNlVNl%2F30e374uzjQoD60MvY85fOvPxlT04Z&X-Amz-Signature=b1244496aa1729fcd95794b11838df2da0ca26baeb858edd1ba59b93ce5888d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RILWCD7P%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIAvi43FQ1%2BapBpHTOmUcArBs8vhCY%2FUYa5zjfz9HaWGwAiAa1HYuN4HnGBen3UrzeeGF0P55NEcWjoKd6SgNjVRihiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn5k2vsqypg%2BEngWWKtwDk953scbtIkpRJGDgrJCAcAv09Kl9P5nDdIujeDhCP0hCz5RLIOQhWifMkOHpKt79QV6lzsscxW6MWRfZOReDQSo4TFptkmY31UTYafXyQ%2B5EbdrW%2BmJhogFu1a2Q98PTK4OjA%2F3Oct6yX%2FoX5Konsr%2BjJgvrDMl0FEPJ299W42iOzeMZZXMoPZBAp73UOwxOdy5PhxggPONKKdbHWDq%2FL%2FROkjGk%2Bb%2BiJqAfER1tV9Zy9z%2BfaFJARFv5kVZ3qfRPwahfsCfKqqXGOajEPiOItfmTwLs%2FxsjQgkMNrqeZR8z7jzwWneuNMdtpuZIssPlngImPJRhMaiGhUPEki1GPh%2FUBrj1Ui4FQrARljrdI4C%2BDDUnGMCAddsYBko%2BtBrow2o7EwjJAgILXRpT0MOuEucxar6LNgWXJm94gnrErQWrGzSfJOyucJ6kvolsaQc539QyAkZ%2FOthqhEQE2BUEa1hw1X6i%2Fw0QgQQ%2BCS8Zyqy4%2FvWSdhSJIckr52pIWQyfEwlMQa8XlNu%2FAY1rAer27T35CkxoYaQSitrO9phA89QQcX3Bsmets4m9BKDR18pTcxRa%2BTtTSiz4Cww0TmsYL1F5Dn5Yj4sdlBEQOTP7IMBl3fkTxg04HUwWCzNUwkLWhxAY6pgG1qrCEzzGrlv3GrCArvNgUFA1FiiAcPPZ6MWogEVJbGGZivuWl%2FrcVBR2NVptqaV%2BzfkfvyOJiBbBJc17mL9D0ikISoBAcc2ql4ZCvt9dSOaseRUPQrXQ7ymvi2LaC%2FYxT944nn35kpcbqXtdcctzYZC2IEDLcheiEulReYVT14GzrdLHW4dQHUr8%2FJNlVNl%2F30e374uzjQoD60MvY85fOvPxlT04Z&X-Amz-Signature=e1a1c94079bd046c9e197b314389442d998e7fb0365bd06d0ed1a1d40a69d4c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RILWCD7P%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIAvi43FQ1%2BapBpHTOmUcArBs8vhCY%2FUYa5zjfz9HaWGwAiAa1HYuN4HnGBen3UrzeeGF0P55NEcWjoKd6SgNjVRihiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn5k2vsqypg%2BEngWWKtwDk953scbtIkpRJGDgrJCAcAv09Kl9P5nDdIujeDhCP0hCz5RLIOQhWifMkOHpKt79QV6lzsscxW6MWRfZOReDQSo4TFptkmY31UTYafXyQ%2B5EbdrW%2BmJhogFu1a2Q98PTK4OjA%2F3Oct6yX%2FoX5Konsr%2BjJgvrDMl0FEPJ299W42iOzeMZZXMoPZBAp73UOwxOdy5PhxggPONKKdbHWDq%2FL%2FROkjGk%2Bb%2BiJqAfER1tV9Zy9z%2BfaFJARFv5kVZ3qfRPwahfsCfKqqXGOajEPiOItfmTwLs%2FxsjQgkMNrqeZR8z7jzwWneuNMdtpuZIssPlngImPJRhMaiGhUPEki1GPh%2FUBrj1Ui4FQrARljrdI4C%2BDDUnGMCAddsYBko%2BtBrow2o7EwjJAgILXRpT0MOuEucxar6LNgWXJm94gnrErQWrGzSfJOyucJ6kvolsaQc539QyAkZ%2FOthqhEQE2BUEa1hw1X6i%2Fw0QgQQ%2BCS8Zyqy4%2FvWSdhSJIckr52pIWQyfEwlMQa8XlNu%2FAY1rAer27T35CkxoYaQSitrO9phA89QQcX3Bsmets4m9BKDR18pTcxRa%2BTtTSiz4Cww0TmsYL1F5Dn5Yj4sdlBEQOTP7IMBl3fkTxg04HUwWCzNUwkLWhxAY6pgG1qrCEzzGrlv3GrCArvNgUFA1FiiAcPPZ6MWogEVJbGGZivuWl%2FrcVBR2NVptqaV%2BzfkfvyOJiBbBJc17mL9D0ikISoBAcc2ql4ZCvt9dSOaseRUPQrXQ7ymvi2LaC%2FYxT944nn35kpcbqXtdcctzYZC2IEDLcheiEulReYVT14GzrdLHW4dQHUr8%2FJNlVNl%2F30e374uzjQoD60MvY85fOvPxlT04Z&X-Amz-Signature=bb22a85db84a1576111010b79f15c707ecf5f6840ff230de8901bd3bee3dfb72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RILWCD7P%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIAvi43FQ1%2BapBpHTOmUcArBs8vhCY%2FUYa5zjfz9HaWGwAiAa1HYuN4HnGBen3UrzeeGF0P55NEcWjoKd6SgNjVRihiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn5k2vsqypg%2BEngWWKtwDk953scbtIkpRJGDgrJCAcAv09Kl9P5nDdIujeDhCP0hCz5RLIOQhWifMkOHpKt79QV6lzsscxW6MWRfZOReDQSo4TFptkmY31UTYafXyQ%2B5EbdrW%2BmJhogFu1a2Q98PTK4OjA%2F3Oct6yX%2FoX5Konsr%2BjJgvrDMl0FEPJ299W42iOzeMZZXMoPZBAp73UOwxOdy5PhxggPONKKdbHWDq%2FL%2FROkjGk%2Bb%2BiJqAfER1tV9Zy9z%2BfaFJARFv5kVZ3qfRPwahfsCfKqqXGOajEPiOItfmTwLs%2FxsjQgkMNrqeZR8z7jzwWneuNMdtpuZIssPlngImPJRhMaiGhUPEki1GPh%2FUBrj1Ui4FQrARljrdI4C%2BDDUnGMCAddsYBko%2BtBrow2o7EwjJAgILXRpT0MOuEucxar6LNgWXJm94gnrErQWrGzSfJOyucJ6kvolsaQc539QyAkZ%2FOthqhEQE2BUEa1hw1X6i%2Fw0QgQQ%2BCS8Zyqy4%2FvWSdhSJIckr52pIWQyfEwlMQa8XlNu%2FAY1rAer27T35CkxoYaQSitrO9phA89QQcX3Bsmets4m9BKDR18pTcxRa%2BTtTSiz4Cww0TmsYL1F5Dn5Yj4sdlBEQOTP7IMBl3fkTxg04HUwWCzNUwkLWhxAY6pgG1qrCEzzGrlv3GrCArvNgUFA1FiiAcPPZ6MWogEVJbGGZivuWl%2FrcVBR2NVptqaV%2BzfkfvyOJiBbBJc17mL9D0ikISoBAcc2ql4ZCvt9dSOaseRUPQrXQ7ymvi2LaC%2FYxT944nn35kpcbqXtdcctzYZC2IEDLcheiEulReYVT14GzrdLHW4dQHUr8%2FJNlVNl%2F30e374uzjQoD60MvY85fOvPxlT04Z&X-Amz-Signature=ce7b1b3b38f22f795bd966d7906e419c94e7a124ce631de29254517f23e8ef20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RILWCD7P%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIAvi43FQ1%2BapBpHTOmUcArBs8vhCY%2FUYa5zjfz9HaWGwAiAa1HYuN4HnGBen3UrzeeGF0P55NEcWjoKd6SgNjVRihiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn5k2vsqypg%2BEngWWKtwDk953scbtIkpRJGDgrJCAcAv09Kl9P5nDdIujeDhCP0hCz5RLIOQhWifMkOHpKt79QV6lzsscxW6MWRfZOReDQSo4TFptkmY31UTYafXyQ%2B5EbdrW%2BmJhogFu1a2Q98PTK4OjA%2F3Oct6yX%2FoX5Konsr%2BjJgvrDMl0FEPJ299W42iOzeMZZXMoPZBAp73UOwxOdy5PhxggPONKKdbHWDq%2FL%2FROkjGk%2Bb%2BiJqAfER1tV9Zy9z%2BfaFJARFv5kVZ3qfRPwahfsCfKqqXGOajEPiOItfmTwLs%2FxsjQgkMNrqeZR8z7jzwWneuNMdtpuZIssPlngImPJRhMaiGhUPEki1GPh%2FUBrj1Ui4FQrARljrdI4C%2BDDUnGMCAddsYBko%2BtBrow2o7EwjJAgILXRpT0MOuEucxar6LNgWXJm94gnrErQWrGzSfJOyucJ6kvolsaQc539QyAkZ%2FOthqhEQE2BUEa1hw1X6i%2Fw0QgQQ%2BCS8Zyqy4%2FvWSdhSJIckr52pIWQyfEwlMQa8XlNu%2FAY1rAer27T35CkxoYaQSitrO9phA89QQcX3Bsmets4m9BKDR18pTcxRa%2BTtTSiz4Cww0TmsYL1F5Dn5Yj4sdlBEQOTP7IMBl3fkTxg04HUwWCzNUwkLWhxAY6pgG1qrCEzzGrlv3GrCArvNgUFA1FiiAcPPZ6MWogEVJbGGZivuWl%2FrcVBR2NVptqaV%2BzfkfvyOJiBbBJc17mL9D0ikISoBAcc2ql4ZCvt9dSOaseRUPQrXQ7ymvi2LaC%2FYxT944nn35kpcbqXtdcctzYZC2IEDLcheiEulReYVT14GzrdLHW4dQHUr8%2FJNlVNl%2F30e374uzjQoD60MvY85fOvPxlT04Z&X-Amz-Signature=fb409833f4f65c43aea50823e808d672d849afe993fd3d318e82b1a2bae23515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
