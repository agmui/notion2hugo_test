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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR63AJHZ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkClybl2UbmSE8ykI%2BQcPjIp7fAP2x773zeMP7cKycVAiBwkL5qPLK2ouxbLrZ1t4lOLDs5%2Fn6oaQ4WMFmMkoB7FSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjKo6DRs3gPbIksB%2BKtwD064mY94P4Ez6Q8zXKd0WYYMmPkE8MzYbn6wJI4WLUKBLWa7a55DcLlqZ%2BGuP69AKX%2BTsFqDqLccYSBrIQzg8TOovSBBmAohSjuWvJGgNtfXJPmp5z%2BLubkHC6ujKjuCtTJQe5lIgxwhqpLJsGSBZyQxzIlZP5UivPGwvuOCVpVVOKEkXVZGAHAy2eRWXJ7H1FigmNY1T8LdiutzjbqtuXpbwj6hTOFnR%2BJjnH0liRMUmJ7h%2BlJl9hxMaBffbZmZ97jtWbALOGs%2FrK6SJBmmQvNcihDYAYydZ2KQoYBMu%2BrF%2BvQPcuZkWcmZvQmitEaJBA4HgESESouEidqzsom00EnHo%2BeKQPM6F8vRZ14JOXqD3wZVg4FEIpUGjzVcq%2BvXK61zIUjFJbOZlptrZSydNjbhnnV3lTO6SJeqk3ACa8wgMX8eBAZj6JscFJO6xdgV%2F10zzqWr3Qkd7PPtjlP2HZ59zJPJcXuyY1OUpCBG30nj5PMMmiOsnVax%2FNYFea3B%2B6bPW6nKEvvjKRNKzPH%2FdDmHklTqh%2FkLI9cqiup2GVVsGFJvcyINXE9aLG1Zgudi0POQq3P%2FmA9Kk1%2FoZEGcVmsZ1%2BT1LGdmcxz%2FZb9dPsL3n6fIaXQB1x6%2FtpQww3%2BTpwQY6pgHYv4VlS6N9lauJIsg%2FSMZI%2FfUs0rQD%2BzEFtLxgGdRXK5y%2BvneZ2ptwDibVpyVl6pldQOI7ABK%2F9J6Lg1DLVVeeaexNctFXAriqz9mEFgSeVCbNKtx5bTHUsXldsm1JJIm5yB1aKTT0otH9x2d9tLlIhX25%2FZr0HSnWJ0SMAaF9z7zp39njCOaxMoSxsW%2FAhI7BjgWX1WxprbSS%2Bmw6tp3rib%2F2lrBT&X-Amz-Signature=34955db1afe34cd59811ef4cd57c42be60e4e38c7ba1eabe6c981a338887b127&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR63AJHZ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkClybl2UbmSE8ykI%2BQcPjIp7fAP2x773zeMP7cKycVAiBwkL5qPLK2ouxbLrZ1t4lOLDs5%2Fn6oaQ4WMFmMkoB7FSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjKo6DRs3gPbIksB%2BKtwD064mY94P4Ez6Q8zXKd0WYYMmPkE8MzYbn6wJI4WLUKBLWa7a55DcLlqZ%2BGuP69AKX%2BTsFqDqLccYSBrIQzg8TOovSBBmAohSjuWvJGgNtfXJPmp5z%2BLubkHC6ujKjuCtTJQe5lIgxwhqpLJsGSBZyQxzIlZP5UivPGwvuOCVpVVOKEkXVZGAHAy2eRWXJ7H1FigmNY1T8LdiutzjbqtuXpbwj6hTOFnR%2BJjnH0liRMUmJ7h%2BlJl9hxMaBffbZmZ97jtWbALOGs%2FrK6SJBmmQvNcihDYAYydZ2KQoYBMu%2BrF%2BvQPcuZkWcmZvQmitEaJBA4HgESESouEidqzsom00EnHo%2BeKQPM6F8vRZ14JOXqD3wZVg4FEIpUGjzVcq%2BvXK61zIUjFJbOZlptrZSydNjbhnnV3lTO6SJeqk3ACa8wgMX8eBAZj6JscFJO6xdgV%2F10zzqWr3Qkd7PPtjlP2HZ59zJPJcXuyY1OUpCBG30nj5PMMmiOsnVax%2FNYFea3B%2B6bPW6nKEvvjKRNKzPH%2FdDmHklTqh%2FkLI9cqiup2GVVsGFJvcyINXE9aLG1Zgudi0POQq3P%2FmA9Kk1%2FoZEGcVmsZ1%2BT1LGdmcxz%2FZb9dPsL3n6fIaXQB1x6%2FtpQww3%2BTpwQY6pgHYv4VlS6N9lauJIsg%2FSMZI%2FfUs0rQD%2BzEFtLxgGdRXK5y%2BvneZ2ptwDibVpyVl6pldQOI7ABK%2F9J6Lg1DLVVeeaexNctFXAriqz9mEFgSeVCbNKtx5bTHUsXldsm1JJIm5yB1aKTT0otH9x2d9tLlIhX25%2FZr0HSnWJ0SMAaF9z7zp39njCOaxMoSxsW%2FAhI7BjgWX1WxprbSS%2Bmw6tp3rib%2F2lrBT&X-Amz-Signature=00b6ff719cd722ef875079f0efbb27698532d1f00699d3254fec69959e973f93&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR63AJHZ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkClybl2UbmSE8ykI%2BQcPjIp7fAP2x773zeMP7cKycVAiBwkL5qPLK2ouxbLrZ1t4lOLDs5%2Fn6oaQ4WMFmMkoB7FSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjKo6DRs3gPbIksB%2BKtwD064mY94P4Ez6Q8zXKd0WYYMmPkE8MzYbn6wJI4WLUKBLWa7a55DcLlqZ%2BGuP69AKX%2BTsFqDqLccYSBrIQzg8TOovSBBmAohSjuWvJGgNtfXJPmp5z%2BLubkHC6ujKjuCtTJQe5lIgxwhqpLJsGSBZyQxzIlZP5UivPGwvuOCVpVVOKEkXVZGAHAy2eRWXJ7H1FigmNY1T8LdiutzjbqtuXpbwj6hTOFnR%2BJjnH0liRMUmJ7h%2BlJl9hxMaBffbZmZ97jtWbALOGs%2FrK6SJBmmQvNcihDYAYydZ2KQoYBMu%2BrF%2BvQPcuZkWcmZvQmitEaJBA4HgESESouEidqzsom00EnHo%2BeKQPM6F8vRZ14JOXqD3wZVg4FEIpUGjzVcq%2BvXK61zIUjFJbOZlptrZSydNjbhnnV3lTO6SJeqk3ACa8wgMX8eBAZj6JscFJO6xdgV%2F10zzqWr3Qkd7PPtjlP2HZ59zJPJcXuyY1OUpCBG30nj5PMMmiOsnVax%2FNYFea3B%2B6bPW6nKEvvjKRNKzPH%2FdDmHklTqh%2FkLI9cqiup2GVVsGFJvcyINXE9aLG1Zgudi0POQq3P%2FmA9Kk1%2FoZEGcVmsZ1%2BT1LGdmcxz%2FZb9dPsL3n6fIaXQB1x6%2FtpQww3%2BTpwQY6pgHYv4VlS6N9lauJIsg%2FSMZI%2FfUs0rQD%2BzEFtLxgGdRXK5y%2BvneZ2ptwDibVpyVl6pldQOI7ABK%2F9J6Lg1DLVVeeaexNctFXAriqz9mEFgSeVCbNKtx5bTHUsXldsm1JJIm5yB1aKTT0otH9x2d9tLlIhX25%2FZr0HSnWJ0SMAaF9z7zp39njCOaxMoSxsW%2FAhI7BjgWX1WxprbSS%2Bmw6tp3rib%2F2lrBT&X-Amz-Signature=278603aa6067a98b906095edc85718440e4b8d69522fb1eecf8c1a812c21ec06&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR63AJHZ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkClybl2UbmSE8ykI%2BQcPjIp7fAP2x773zeMP7cKycVAiBwkL5qPLK2ouxbLrZ1t4lOLDs5%2Fn6oaQ4WMFmMkoB7FSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjKo6DRs3gPbIksB%2BKtwD064mY94P4Ez6Q8zXKd0WYYMmPkE8MzYbn6wJI4WLUKBLWa7a55DcLlqZ%2BGuP69AKX%2BTsFqDqLccYSBrIQzg8TOovSBBmAohSjuWvJGgNtfXJPmp5z%2BLubkHC6ujKjuCtTJQe5lIgxwhqpLJsGSBZyQxzIlZP5UivPGwvuOCVpVVOKEkXVZGAHAy2eRWXJ7H1FigmNY1T8LdiutzjbqtuXpbwj6hTOFnR%2BJjnH0liRMUmJ7h%2BlJl9hxMaBffbZmZ97jtWbALOGs%2FrK6SJBmmQvNcihDYAYydZ2KQoYBMu%2BrF%2BvQPcuZkWcmZvQmitEaJBA4HgESESouEidqzsom00EnHo%2BeKQPM6F8vRZ14JOXqD3wZVg4FEIpUGjzVcq%2BvXK61zIUjFJbOZlptrZSydNjbhnnV3lTO6SJeqk3ACa8wgMX8eBAZj6JscFJO6xdgV%2F10zzqWr3Qkd7PPtjlP2HZ59zJPJcXuyY1OUpCBG30nj5PMMmiOsnVax%2FNYFea3B%2B6bPW6nKEvvjKRNKzPH%2FdDmHklTqh%2FkLI9cqiup2GVVsGFJvcyINXE9aLG1Zgudi0POQq3P%2FmA9Kk1%2FoZEGcVmsZ1%2BT1LGdmcxz%2FZb9dPsL3n6fIaXQB1x6%2FtpQww3%2BTpwQY6pgHYv4VlS6N9lauJIsg%2FSMZI%2FfUs0rQD%2BzEFtLxgGdRXK5y%2BvneZ2ptwDibVpyVl6pldQOI7ABK%2F9J6Lg1DLVVeeaexNctFXAriqz9mEFgSeVCbNKtx5bTHUsXldsm1JJIm5yB1aKTT0otH9x2d9tLlIhX25%2FZr0HSnWJ0SMAaF9z7zp39njCOaxMoSxsW%2FAhI7BjgWX1WxprbSS%2Bmw6tp3rib%2F2lrBT&X-Amz-Signature=3538ac8c476bbd9fffa8d66d78b14a051edbd8d4afa05b63bd1ff0a826ac97bf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR63AJHZ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkClybl2UbmSE8ykI%2BQcPjIp7fAP2x773zeMP7cKycVAiBwkL5qPLK2ouxbLrZ1t4lOLDs5%2Fn6oaQ4WMFmMkoB7FSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjKo6DRs3gPbIksB%2BKtwD064mY94P4Ez6Q8zXKd0WYYMmPkE8MzYbn6wJI4WLUKBLWa7a55DcLlqZ%2BGuP69AKX%2BTsFqDqLccYSBrIQzg8TOovSBBmAohSjuWvJGgNtfXJPmp5z%2BLubkHC6ujKjuCtTJQe5lIgxwhqpLJsGSBZyQxzIlZP5UivPGwvuOCVpVVOKEkXVZGAHAy2eRWXJ7H1FigmNY1T8LdiutzjbqtuXpbwj6hTOFnR%2BJjnH0liRMUmJ7h%2BlJl9hxMaBffbZmZ97jtWbALOGs%2FrK6SJBmmQvNcihDYAYydZ2KQoYBMu%2BrF%2BvQPcuZkWcmZvQmitEaJBA4HgESESouEidqzsom00EnHo%2BeKQPM6F8vRZ14JOXqD3wZVg4FEIpUGjzVcq%2BvXK61zIUjFJbOZlptrZSydNjbhnnV3lTO6SJeqk3ACa8wgMX8eBAZj6JscFJO6xdgV%2F10zzqWr3Qkd7PPtjlP2HZ59zJPJcXuyY1OUpCBG30nj5PMMmiOsnVax%2FNYFea3B%2B6bPW6nKEvvjKRNKzPH%2FdDmHklTqh%2FkLI9cqiup2GVVsGFJvcyINXE9aLG1Zgudi0POQq3P%2FmA9Kk1%2FoZEGcVmsZ1%2BT1LGdmcxz%2FZb9dPsL3n6fIaXQB1x6%2FtpQww3%2BTpwQY6pgHYv4VlS6N9lauJIsg%2FSMZI%2FfUs0rQD%2BzEFtLxgGdRXK5y%2BvneZ2ptwDibVpyVl6pldQOI7ABK%2F9J6Lg1DLVVeeaexNctFXAriqz9mEFgSeVCbNKtx5bTHUsXldsm1JJIm5yB1aKTT0otH9x2d9tLlIhX25%2FZr0HSnWJ0SMAaF9z7zp39njCOaxMoSxsW%2FAhI7BjgWX1WxprbSS%2Bmw6tp3rib%2F2lrBT&X-Amz-Signature=ed77c8b92959fcc151bb8e1b4b5a3ba1d228ea06be95a2d4969f2cce0acae9b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR63AJHZ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkClybl2UbmSE8ykI%2BQcPjIp7fAP2x773zeMP7cKycVAiBwkL5qPLK2ouxbLrZ1t4lOLDs5%2Fn6oaQ4WMFmMkoB7FSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjKo6DRs3gPbIksB%2BKtwD064mY94P4Ez6Q8zXKd0WYYMmPkE8MzYbn6wJI4WLUKBLWa7a55DcLlqZ%2BGuP69AKX%2BTsFqDqLccYSBrIQzg8TOovSBBmAohSjuWvJGgNtfXJPmp5z%2BLubkHC6ujKjuCtTJQe5lIgxwhqpLJsGSBZyQxzIlZP5UivPGwvuOCVpVVOKEkXVZGAHAy2eRWXJ7H1FigmNY1T8LdiutzjbqtuXpbwj6hTOFnR%2BJjnH0liRMUmJ7h%2BlJl9hxMaBffbZmZ97jtWbALOGs%2FrK6SJBmmQvNcihDYAYydZ2KQoYBMu%2BrF%2BvQPcuZkWcmZvQmitEaJBA4HgESESouEidqzsom00EnHo%2BeKQPM6F8vRZ14JOXqD3wZVg4FEIpUGjzVcq%2BvXK61zIUjFJbOZlptrZSydNjbhnnV3lTO6SJeqk3ACa8wgMX8eBAZj6JscFJO6xdgV%2F10zzqWr3Qkd7PPtjlP2HZ59zJPJcXuyY1OUpCBG30nj5PMMmiOsnVax%2FNYFea3B%2B6bPW6nKEvvjKRNKzPH%2FdDmHklTqh%2FkLI9cqiup2GVVsGFJvcyINXE9aLG1Zgudi0POQq3P%2FmA9Kk1%2FoZEGcVmsZ1%2BT1LGdmcxz%2FZb9dPsL3n6fIaXQB1x6%2FtpQww3%2BTpwQY6pgHYv4VlS6N9lauJIsg%2FSMZI%2FfUs0rQD%2BzEFtLxgGdRXK5y%2BvneZ2ptwDibVpyVl6pldQOI7ABK%2F9J6Lg1DLVVeeaexNctFXAriqz9mEFgSeVCbNKtx5bTHUsXldsm1JJIm5yB1aKTT0otH9x2d9tLlIhX25%2FZr0HSnWJ0SMAaF9z7zp39njCOaxMoSxsW%2FAhI7BjgWX1WxprbSS%2Bmw6tp3rib%2F2lrBT&X-Amz-Signature=6e139115b2b4d7d5c92530372e31de71632a41afbc4fadb29690b2d93be15c2d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR63AJHZ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkClybl2UbmSE8ykI%2BQcPjIp7fAP2x773zeMP7cKycVAiBwkL5qPLK2ouxbLrZ1t4lOLDs5%2Fn6oaQ4WMFmMkoB7FSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjKo6DRs3gPbIksB%2BKtwD064mY94P4Ez6Q8zXKd0WYYMmPkE8MzYbn6wJI4WLUKBLWa7a55DcLlqZ%2BGuP69AKX%2BTsFqDqLccYSBrIQzg8TOovSBBmAohSjuWvJGgNtfXJPmp5z%2BLubkHC6ujKjuCtTJQe5lIgxwhqpLJsGSBZyQxzIlZP5UivPGwvuOCVpVVOKEkXVZGAHAy2eRWXJ7H1FigmNY1T8LdiutzjbqtuXpbwj6hTOFnR%2BJjnH0liRMUmJ7h%2BlJl9hxMaBffbZmZ97jtWbALOGs%2FrK6SJBmmQvNcihDYAYydZ2KQoYBMu%2BrF%2BvQPcuZkWcmZvQmitEaJBA4HgESESouEidqzsom00EnHo%2BeKQPM6F8vRZ14JOXqD3wZVg4FEIpUGjzVcq%2BvXK61zIUjFJbOZlptrZSydNjbhnnV3lTO6SJeqk3ACa8wgMX8eBAZj6JscFJO6xdgV%2F10zzqWr3Qkd7PPtjlP2HZ59zJPJcXuyY1OUpCBG30nj5PMMmiOsnVax%2FNYFea3B%2B6bPW6nKEvvjKRNKzPH%2FdDmHklTqh%2FkLI9cqiup2GVVsGFJvcyINXE9aLG1Zgudi0POQq3P%2FmA9Kk1%2FoZEGcVmsZ1%2BT1LGdmcxz%2FZb9dPsL3n6fIaXQB1x6%2FtpQww3%2BTpwQY6pgHYv4VlS6N9lauJIsg%2FSMZI%2FfUs0rQD%2BzEFtLxgGdRXK5y%2BvneZ2ptwDibVpyVl6pldQOI7ABK%2F9J6Lg1DLVVeeaexNctFXAriqz9mEFgSeVCbNKtx5bTHUsXldsm1JJIm5yB1aKTT0otH9x2d9tLlIhX25%2FZr0HSnWJ0SMAaF9z7zp39njCOaxMoSxsW%2FAhI7BjgWX1WxprbSS%2Bmw6tp3rib%2F2lrBT&X-Amz-Signature=5d41529d752927a0035644709c3e3de39045e5b6f9d2f22e4f7f3ccff337edef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR63AJHZ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkClybl2UbmSE8ykI%2BQcPjIp7fAP2x773zeMP7cKycVAiBwkL5qPLK2ouxbLrZ1t4lOLDs5%2Fn6oaQ4WMFmMkoB7FSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjKo6DRs3gPbIksB%2BKtwD064mY94P4Ez6Q8zXKd0WYYMmPkE8MzYbn6wJI4WLUKBLWa7a55DcLlqZ%2BGuP69AKX%2BTsFqDqLccYSBrIQzg8TOovSBBmAohSjuWvJGgNtfXJPmp5z%2BLubkHC6ujKjuCtTJQe5lIgxwhqpLJsGSBZyQxzIlZP5UivPGwvuOCVpVVOKEkXVZGAHAy2eRWXJ7H1FigmNY1T8LdiutzjbqtuXpbwj6hTOFnR%2BJjnH0liRMUmJ7h%2BlJl9hxMaBffbZmZ97jtWbALOGs%2FrK6SJBmmQvNcihDYAYydZ2KQoYBMu%2BrF%2BvQPcuZkWcmZvQmitEaJBA4HgESESouEidqzsom00EnHo%2BeKQPM6F8vRZ14JOXqD3wZVg4FEIpUGjzVcq%2BvXK61zIUjFJbOZlptrZSydNjbhnnV3lTO6SJeqk3ACa8wgMX8eBAZj6JscFJO6xdgV%2F10zzqWr3Qkd7PPtjlP2HZ59zJPJcXuyY1OUpCBG30nj5PMMmiOsnVax%2FNYFea3B%2B6bPW6nKEvvjKRNKzPH%2FdDmHklTqh%2FkLI9cqiup2GVVsGFJvcyINXE9aLG1Zgudi0POQq3P%2FmA9Kk1%2FoZEGcVmsZ1%2BT1LGdmcxz%2FZb9dPsL3n6fIaXQB1x6%2FtpQww3%2BTpwQY6pgHYv4VlS6N9lauJIsg%2FSMZI%2FfUs0rQD%2BzEFtLxgGdRXK5y%2BvneZ2ptwDibVpyVl6pldQOI7ABK%2F9J6Lg1DLVVeeaexNctFXAriqz9mEFgSeVCbNKtx5bTHUsXldsm1JJIm5yB1aKTT0otH9x2d9tLlIhX25%2FZr0HSnWJ0SMAaF9z7zp39njCOaxMoSxsW%2FAhI7BjgWX1WxprbSS%2Bmw6tp3rib%2F2lrBT&X-Amz-Signature=d8d613ea0743230fb287f1cc5432c145873bf442df53f1eb73dd5966a714075a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
