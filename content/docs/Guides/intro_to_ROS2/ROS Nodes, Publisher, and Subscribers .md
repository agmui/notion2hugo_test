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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REVCY4KA%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDL3A%2FZnbmYOGrBAcd3DQgHZaAxu6AO9jRD91lP5FnL8wIhAIQg0FXA3xthrIYGkO4icUiaZW84eE09K6kfifeswNYsKv8DCD0QABoMNjM3NDIzMTgzODA1Igwd%2BOhsKDBcHQdwjOEq3APAf7j3MCuCQKs0rc9v1qs7CbVA7SnMIM7h5zq9dh0G6r326lXmBfA4UBZ9WePDk2BJkq2WjtiB8hFB%2Fj3Lose03p2UjLNJ9OFZJGJVTGADztenrrZiwRD%2F88FMK9yCJNo14VYbsH1j6u9pTIoRbptOBwM0JhO7nFt3Xy92luw9T%2Bk39zj9r8oz0PyWGxvwPVqGvLNVj2JcGfxcU%2FFzCbWTi2ne6%2F0qFAUhpC%2BcWrwnpGEhS6WrnADCfaeU%2FjkBehAOUVRP7LeknGscJ9ASAZ4gX26AI3tGcl%2BBf018EOTWS8FrDjaCLL%2FzPgAVuvZrKfQx3eKjl78vb9XGo5SDuNGTZ6Tw%2BwO7U64zXY9w2pd9JyWstl0AGJX1eR2p41OH2vGyKbe6D5TGR7sNAfPWiuBsLtOw12FFhbjHENrvvE790%2BiB9D2Mfo8H7mI8qgX%2B1K%2Bs612yfX2AmNUyyFO9OgOxgVaKjd0h7O99BGNPfBjyIt74cEE9TOd4yVedxET1PJRV7O%2BP5xjOu%2FHfrZFkSkyYwREsbF8g%2BTnVm7n%2F1wZ5PtqG42ze2%2B9%2Fb2rCVu0JVViYWQ5tKb5RnG1qm3U4edukhbUkorzITQjDf3As%2FfZAxtc07Cid7bM11GFbQDCX%2F7jCBjqkAdSrZLjPeqCuQj3gyLef14Ig%2BhWobO0TMC96i2OY8q2Z3GtS8HGIRJm70nxR177XG0x%2Br0oUdrkuZFWsCFclhMmJzesMjVdPqpBtHjmhdfXw4dQDEHvODcuRghlrpOwu0yYW6fXsqo%2BlQELX8e4V8bpvoav3%2BLm0oxY1Jz4LsKof9VYIpBYX3lpkz8hSaauFfmbV%2Bsq13kKmUXbq2Vhd8%2F6sc%2BQZ&X-Amz-Signature=5da0d14d8c2a80b8d0aada7591c7b82e5593cf3eac07ca212f13ad510a336b0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REVCY4KA%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDL3A%2FZnbmYOGrBAcd3DQgHZaAxu6AO9jRD91lP5FnL8wIhAIQg0FXA3xthrIYGkO4icUiaZW84eE09K6kfifeswNYsKv8DCD0QABoMNjM3NDIzMTgzODA1Igwd%2BOhsKDBcHQdwjOEq3APAf7j3MCuCQKs0rc9v1qs7CbVA7SnMIM7h5zq9dh0G6r326lXmBfA4UBZ9WePDk2BJkq2WjtiB8hFB%2Fj3Lose03p2UjLNJ9OFZJGJVTGADztenrrZiwRD%2F88FMK9yCJNo14VYbsH1j6u9pTIoRbptOBwM0JhO7nFt3Xy92luw9T%2Bk39zj9r8oz0PyWGxvwPVqGvLNVj2JcGfxcU%2FFzCbWTi2ne6%2F0qFAUhpC%2BcWrwnpGEhS6WrnADCfaeU%2FjkBehAOUVRP7LeknGscJ9ASAZ4gX26AI3tGcl%2BBf018EOTWS8FrDjaCLL%2FzPgAVuvZrKfQx3eKjl78vb9XGo5SDuNGTZ6Tw%2BwO7U64zXY9w2pd9JyWstl0AGJX1eR2p41OH2vGyKbe6D5TGR7sNAfPWiuBsLtOw12FFhbjHENrvvE790%2BiB9D2Mfo8H7mI8qgX%2B1K%2Bs612yfX2AmNUyyFO9OgOxgVaKjd0h7O99BGNPfBjyIt74cEE9TOd4yVedxET1PJRV7O%2BP5xjOu%2FHfrZFkSkyYwREsbF8g%2BTnVm7n%2F1wZ5PtqG42ze2%2B9%2Fb2rCVu0JVViYWQ5tKb5RnG1qm3U4edukhbUkorzITQjDf3As%2FfZAxtc07Cid7bM11GFbQDCX%2F7jCBjqkAdSrZLjPeqCuQj3gyLef14Ig%2BhWobO0TMC96i2OY8q2Z3GtS8HGIRJm70nxR177XG0x%2Br0oUdrkuZFWsCFclhMmJzesMjVdPqpBtHjmhdfXw4dQDEHvODcuRghlrpOwu0yYW6fXsqo%2BlQELX8e4V8bpvoav3%2BLm0oxY1Jz4LsKof9VYIpBYX3lpkz8hSaauFfmbV%2Bsq13kKmUXbq2Vhd8%2F6sc%2BQZ&X-Amz-Signature=e9e10b7a7fff71ee61286ca30ba703223773441317d1179d115c3279b0a59fc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REVCY4KA%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDL3A%2FZnbmYOGrBAcd3DQgHZaAxu6AO9jRD91lP5FnL8wIhAIQg0FXA3xthrIYGkO4icUiaZW84eE09K6kfifeswNYsKv8DCD0QABoMNjM3NDIzMTgzODA1Igwd%2BOhsKDBcHQdwjOEq3APAf7j3MCuCQKs0rc9v1qs7CbVA7SnMIM7h5zq9dh0G6r326lXmBfA4UBZ9WePDk2BJkq2WjtiB8hFB%2Fj3Lose03p2UjLNJ9OFZJGJVTGADztenrrZiwRD%2F88FMK9yCJNo14VYbsH1j6u9pTIoRbptOBwM0JhO7nFt3Xy92luw9T%2Bk39zj9r8oz0PyWGxvwPVqGvLNVj2JcGfxcU%2FFzCbWTi2ne6%2F0qFAUhpC%2BcWrwnpGEhS6WrnADCfaeU%2FjkBehAOUVRP7LeknGscJ9ASAZ4gX26AI3tGcl%2BBf018EOTWS8FrDjaCLL%2FzPgAVuvZrKfQx3eKjl78vb9XGo5SDuNGTZ6Tw%2BwO7U64zXY9w2pd9JyWstl0AGJX1eR2p41OH2vGyKbe6D5TGR7sNAfPWiuBsLtOw12FFhbjHENrvvE790%2BiB9D2Mfo8H7mI8qgX%2B1K%2Bs612yfX2AmNUyyFO9OgOxgVaKjd0h7O99BGNPfBjyIt74cEE9TOd4yVedxET1PJRV7O%2BP5xjOu%2FHfrZFkSkyYwREsbF8g%2BTnVm7n%2F1wZ5PtqG42ze2%2B9%2Fb2rCVu0JVViYWQ5tKb5RnG1qm3U4edukhbUkorzITQjDf3As%2FfZAxtc07Cid7bM11GFbQDCX%2F7jCBjqkAdSrZLjPeqCuQj3gyLef14Ig%2BhWobO0TMC96i2OY8q2Z3GtS8HGIRJm70nxR177XG0x%2Br0oUdrkuZFWsCFclhMmJzesMjVdPqpBtHjmhdfXw4dQDEHvODcuRghlrpOwu0yYW6fXsqo%2BlQELX8e4V8bpvoav3%2BLm0oxY1Jz4LsKof9VYIpBYX3lpkz8hSaauFfmbV%2Bsq13kKmUXbq2Vhd8%2F6sc%2BQZ&X-Amz-Signature=0d43844c8562ed2f5804324de9fd1192e56e7522f801950d1add7bac4ad08d27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REVCY4KA%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDL3A%2FZnbmYOGrBAcd3DQgHZaAxu6AO9jRD91lP5FnL8wIhAIQg0FXA3xthrIYGkO4icUiaZW84eE09K6kfifeswNYsKv8DCD0QABoMNjM3NDIzMTgzODA1Igwd%2BOhsKDBcHQdwjOEq3APAf7j3MCuCQKs0rc9v1qs7CbVA7SnMIM7h5zq9dh0G6r326lXmBfA4UBZ9WePDk2BJkq2WjtiB8hFB%2Fj3Lose03p2UjLNJ9OFZJGJVTGADztenrrZiwRD%2F88FMK9yCJNo14VYbsH1j6u9pTIoRbptOBwM0JhO7nFt3Xy92luw9T%2Bk39zj9r8oz0PyWGxvwPVqGvLNVj2JcGfxcU%2FFzCbWTi2ne6%2F0qFAUhpC%2BcWrwnpGEhS6WrnADCfaeU%2FjkBehAOUVRP7LeknGscJ9ASAZ4gX26AI3tGcl%2BBf018EOTWS8FrDjaCLL%2FzPgAVuvZrKfQx3eKjl78vb9XGo5SDuNGTZ6Tw%2BwO7U64zXY9w2pd9JyWstl0AGJX1eR2p41OH2vGyKbe6D5TGR7sNAfPWiuBsLtOw12FFhbjHENrvvE790%2BiB9D2Mfo8H7mI8qgX%2B1K%2Bs612yfX2AmNUyyFO9OgOxgVaKjd0h7O99BGNPfBjyIt74cEE9TOd4yVedxET1PJRV7O%2BP5xjOu%2FHfrZFkSkyYwREsbF8g%2BTnVm7n%2F1wZ5PtqG42ze2%2B9%2Fb2rCVu0JVViYWQ5tKb5RnG1qm3U4edukhbUkorzITQjDf3As%2FfZAxtc07Cid7bM11GFbQDCX%2F7jCBjqkAdSrZLjPeqCuQj3gyLef14Ig%2BhWobO0TMC96i2OY8q2Z3GtS8HGIRJm70nxR177XG0x%2Br0oUdrkuZFWsCFclhMmJzesMjVdPqpBtHjmhdfXw4dQDEHvODcuRghlrpOwu0yYW6fXsqo%2BlQELX8e4V8bpvoav3%2BLm0oxY1Jz4LsKof9VYIpBYX3lpkz8hSaauFfmbV%2Bsq13kKmUXbq2Vhd8%2F6sc%2BQZ&X-Amz-Signature=65906fec0fa9aee4789ceb110b73b1d312a75afb5ac63f0c390aade4b47f475f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REVCY4KA%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDL3A%2FZnbmYOGrBAcd3DQgHZaAxu6AO9jRD91lP5FnL8wIhAIQg0FXA3xthrIYGkO4icUiaZW84eE09K6kfifeswNYsKv8DCD0QABoMNjM3NDIzMTgzODA1Igwd%2BOhsKDBcHQdwjOEq3APAf7j3MCuCQKs0rc9v1qs7CbVA7SnMIM7h5zq9dh0G6r326lXmBfA4UBZ9WePDk2BJkq2WjtiB8hFB%2Fj3Lose03p2UjLNJ9OFZJGJVTGADztenrrZiwRD%2F88FMK9yCJNo14VYbsH1j6u9pTIoRbptOBwM0JhO7nFt3Xy92luw9T%2Bk39zj9r8oz0PyWGxvwPVqGvLNVj2JcGfxcU%2FFzCbWTi2ne6%2F0qFAUhpC%2BcWrwnpGEhS6WrnADCfaeU%2FjkBehAOUVRP7LeknGscJ9ASAZ4gX26AI3tGcl%2BBf018EOTWS8FrDjaCLL%2FzPgAVuvZrKfQx3eKjl78vb9XGo5SDuNGTZ6Tw%2BwO7U64zXY9w2pd9JyWstl0AGJX1eR2p41OH2vGyKbe6D5TGR7sNAfPWiuBsLtOw12FFhbjHENrvvE790%2BiB9D2Mfo8H7mI8qgX%2B1K%2Bs612yfX2AmNUyyFO9OgOxgVaKjd0h7O99BGNPfBjyIt74cEE9TOd4yVedxET1PJRV7O%2BP5xjOu%2FHfrZFkSkyYwREsbF8g%2BTnVm7n%2F1wZ5PtqG42ze2%2B9%2Fb2rCVu0JVViYWQ5tKb5RnG1qm3U4edukhbUkorzITQjDf3As%2FfZAxtc07Cid7bM11GFbQDCX%2F7jCBjqkAdSrZLjPeqCuQj3gyLef14Ig%2BhWobO0TMC96i2OY8q2Z3GtS8HGIRJm70nxR177XG0x%2Br0oUdrkuZFWsCFclhMmJzesMjVdPqpBtHjmhdfXw4dQDEHvODcuRghlrpOwu0yYW6fXsqo%2BlQELX8e4V8bpvoav3%2BLm0oxY1Jz4LsKof9VYIpBYX3lpkz8hSaauFfmbV%2Bsq13kKmUXbq2Vhd8%2F6sc%2BQZ&X-Amz-Signature=9441995f837a6a5e39a09497bcd42776d0b15084aecfaacfff29fe1b1e902e60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REVCY4KA%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDL3A%2FZnbmYOGrBAcd3DQgHZaAxu6AO9jRD91lP5FnL8wIhAIQg0FXA3xthrIYGkO4icUiaZW84eE09K6kfifeswNYsKv8DCD0QABoMNjM3NDIzMTgzODA1Igwd%2BOhsKDBcHQdwjOEq3APAf7j3MCuCQKs0rc9v1qs7CbVA7SnMIM7h5zq9dh0G6r326lXmBfA4UBZ9WePDk2BJkq2WjtiB8hFB%2Fj3Lose03p2UjLNJ9OFZJGJVTGADztenrrZiwRD%2F88FMK9yCJNo14VYbsH1j6u9pTIoRbptOBwM0JhO7nFt3Xy92luw9T%2Bk39zj9r8oz0PyWGxvwPVqGvLNVj2JcGfxcU%2FFzCbWTi2ne6%2F0qFAUhpC%2BcWrwnpGEhS6WrnADCfaeU%2FjkBehAOUVRP7LeknGscJ9ASAZ4gX26AI3tGcl%2BBf018EOTWS8FrDjaCLL%2FzPgAVuvZrKfQx3eKjl78vb9XGo5SDuNGTZ6Tw%2BwO7U64zXY9w2pd9JyWstl0AGJX1eR2p41OH2vGyKbe6D5TGR7sNAfPWiuBsLtOw12FFhbjHENrvvE790%2BiB9D2Mfo8H7mI8qgX%2B1K%2Bs612yfX2AmNUyyFO9OgOxgVaKjd0h7O99BGNPfBjyIt74cEE9TOd4yVedxET1PJRV7O%2BP5xjOu%2FHfrZFkSkyYwREsbF8g%2BTnVm7n%2F1wZ5PtqG42ze2%2B9%2Fb2rCVu0JVViYWQ5tKb5RnG1qm3U4edukhbUkorzITQjDf3As%2FfZAxtc07Cid7bM11GFbQDCX%2F7jCBjqkAdSrZLjPeqCuQj3gyLef14Ig%2BhWobO0TMC96i2OY8q2Z3GtS8HGIRJm70nxR177XG0x%2Br0oUdrkuZFWsCFclhMmJzesMjVdPqpBtHjmhdfXw4dQDEHvODcuRghlrpOwu0yYW6fXsqo%2BlQELX8e4V8bpvoav3%2BLm0oxY1Jz4LsKof9VYIpBYX3lpkz8hSaauFfmbV%2Bsq13kKmUXbq2Vhd8%2F6sc%2BQZ&X-Amz-Signature=bd7764f4cde76ad7ee9aa5f8a3a59f972b06fe65a9cc7ed6d7d27036a2080c7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REVCY4KA%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDL3A%2FZnbmYOGrBAcd3DQgHZaAxu6AO9jRD91lP5FnL8wIhAIQg0FXA3xthrIYGkO4icUiaZW84eE09K6kfifeswNYsKv8DCD0QABoMNjM3NDIzMTgzODA1Igwd%2BOhsKDBcHQdwjOEq3APAf7j3MCuCQKs0rc9v1qs7CbVA7SnMIM7h5zq9dh0G6r326lXmBfA4UBZ9WePDk2BJkq2WjtiB8hFB%2Fj3Lose03p2UjLNJ9OFZJGJVTGADztenrrZiwRD%2F88FMK9yCJNo14VYbsH1j6u9pTIoRbptOBwM0JhO7nFt3Xy92luw9T%2Bk39zj9r8oz0PyWGxvwPVqGvLNVj2JcGfxcU%2FFzCbWTi2ne6%2F0qFAUhpC%2BcWrwnpGEhS6WrnADCfaeU%2FjkBehAOUVRP7LeknGscJ9ASAZ4gX26AI3tGcl%2BBf018EOTWS8FrDjaCLL%2FzPgAVuvZrKfQx3eKjl78vb9XGo5SDuNGTZ6Tw%2BwO7U64zXY9w2pd9JyWstl0AGJX1eR2p41OH2vGyKbe6D5TGR7sNAfPWiuBsLtOw12FFhbjHENrvvE790%2BiB9D2Mfo8H7mI8qgX%2B1K%2Bs612yfX2AmNUyyFO9OgOxgVaKjd0h7O99BGNPfBjyIt74cEE9TOd4yVedxET1PJRV7O%2BP5xjOu%2FHfrZFkSkyYwREsbF8g%2BTnVm7n%2F1wZ5PtqG42ze2%2B9%2Fb2rCVu0JVViYWQ5tKb5RnG1qm3U4edukhbUkorzITQjDf3As%2FfZAxtc07Cid7bM11GFbQDCX%2F7jCBjqkAdSrZLjPeqCuQj3gyLef14Ig%2BhWobO0TMC96i2OY8q2Z3GtS8HGIRJm70nxR177XG0x%2Br0oUdrkuZFWsCFclhMmJzesMjVdPqpBtHjmhdfXw4dQDEHvODcuRghlrpOwu0yYW6fXsqo%2BlQELX8e4V8bpvoav3%2BLm0oxY1Jz4LsKof9VYIpBYX3lpkz8hSaauFfmbV%2Bsq13kKmUXbq2Vhd8%2F6sc%2BQZ&X-Amz-Signature=31217621120f8f486fa05f9df1a4f3c77bb1ea561cad954396eb9b33a7c18792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REVCY4KA%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDL3A%2FZnbmYOGrBAcd3DQgHZaAxu6AO9jRD91lP5FnL8wIhAIQg0FXA3xthrIYGkO4icUiaZW84eE09K6kfifeswNYsKv8DCD0QABoMNjM3NDIzMTgzODA1Igwd%2BOhsKDBcHQdwjOEq3APAf7j3MCuCQKs0rc9v1qs7CbVA7SnMIM7h5zq9dh0G6r326lXmBfA4UBZ9WePDk2BJkq2WjtiB8hFB%2Fj3Lose03p2UjLNJ9OFZJGJVTGADztenrrZiwRD%2F88FMK9yCJNo14VYbsH1j6u9pTIoRbptOBwM0JhO7nFt3Xy92luw9T%2Bk39zj9r8oz0PyWGxvwPVqGvLNVj2JcGfxcU%2FFzCbWTi2ne6%2F0qFAUhpC%2BcWrwnpGEhS6WrnADCfaeU%2FjkBehAOUVRP7LeknGscJ9ASAZ4gX26AI3tGcl%2BBf018EOTWS8FrDjaCLL%2FzPgAVuvZrKfQx3eKjl78vb9XGo5SDuNGTZ6Tw%2BwO7U64zXY9w2pd9JyWstl0AGJX1eR2p41OH2vGyKbe6D5TGR7sNAfPWiuBsLtOw12FFhbjHENrvvE790%2BiB9D2Mfo8H7mI8qgX%2B1K%2Bs612yfX2AmNUyyFO9OgOxgVaKjd0h7O99BGNPfBjyIt74cEE9TOd4yVedxET1PJRV7O%2BP5xjOu%2FHfrZFkSkyYwREsbF8g%2BTnVm7n%2F1wZ5PtqG42ze2%2B9%2Fb2rCVu0JVViYWQ5tKb5RnG1qm3U4edukhbUkorzITQjDf3As%2FfZAxtc07Cid7bM11GFbQDCX%2F7jCBjqkAdSrZLjPeqCuQj3gyLef14Ig%2BhWobO0TMC96i2OY8q2Z3GtS8HGIRJm70nxR177XG0x%2Br0oUdrkuZFWsCFclhMmJzesMjVdPqpBtHjmhdfXw4dQDEHvODcuRghlrpOwu0yYW6fXsqo%2BlQELX8e4V8bpvoav3%2BLm0oxY1Jz4LsKof9VYIpBYX3lpkz8hSaauFfmbV%2Bsq13kKmUXbq2Vhd8%2F6sc%2BQZ&X-Amz-Signature=93b96abdac1663e88679765e1fa3dc8d75434519dd3d449e7eafd87307051e32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
