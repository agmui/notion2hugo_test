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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SE6TIW2%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCmE213pIsaxdKkJ5CQaUk2y8x49dR0NclornkQVJLqgwIgKknaVaA7aVxiosRktCeM8Wh6GHmbnHlIGWHsNLxcyZUq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCZv%2BlG2LuusJwn2zCrcA5DixgdXShO66kJKOfOCGx1KjfbK40cOAivXj1UAj2MEFBhPfhHoXJQVu8pplQfMH7sJqd%2BriIYZEnI%2BVXGyWKg1hzUSc63IBIxn787ILTW8aE%2BWVYhMHBIHP4H0oRkwK1168LT0jQRW4R6SO1awYjHKalNQNMh6cuKp%2BKJkbcFxElF0s9ccrBLk34EMHG36N4wvhHA5dM94EqP8wXL%2FYX3epOcjkC45jzqefyRkb2HMWLrwm4w78CLDgBYOmWf18OlyjWj6KCjhxvqcid65JcanU2tVMpRColWhJkW%2BiOCEmZQyQ01mAIGWKBk5QGS9nWesKw1vW97HojiX1gr5TNgIsT4ir%2BBPOhYJgj2%2F9yOo3RoyMMhiBuz8jfc5r5cpjY0%2BPoiA%2Ba5JZydwcRKgRsuOh9J%2FbnDEDfBEQrESKn9fHA2tEnYg4aIAiKou%2F7a983%2F%2Fn%2FhgR%2FNue3kQRX6mZ196T3e%2FuJIoKtzVDcFU8YAyUpuHvgWmaIvu3cZt7CzEpfAGMfT2LEnAgCNlVsjHCqpAN2%2FoyNrISZHcM3ofV0C6iX2sJCwPn%2FT3RSFTUUN%2Fdm0boKMHUby1Lf4mN%2BMPeL5pa7HP8UDNgK6sOZEsddM4MqYOLiZbvvZidfoPMLCMr8MGOqUBCatuUXTBNtufDd1p%2F7RRtyJ5e6aE8k8j06dIYEEWb2JUsHZJ5HcR0shgGndGf3hkmWJpfM%2BGUTvY7wwcOd0lIbuw7YPS0n4sjyMBk2x4jvvhCu3Qi9y0LabReSrV%2B1FrGMlkd1U3LePkz5eT99n9rGDeVEJ33h6H0giBmnxVsfPEoABNacqRGjMmNnbZzj%2F3K%2FMiRb11BpL6tiYkEHYQ7BoB6urb&X-Amz-Signature=7c3a6b05a3183b2b83f9ca5e541b67f98f411f5fa3305950a2a5ed9441c16c97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SE6TIW2%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCmE213pIsaxdKkJ5CQaUk2y8x49dR0NclornkQVJLqgwIgKknaVaA7aVxiosRktCeM8Wh6GHmbnHlIGWHsNLxcyZUq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCZv%2BlG2LuusJwn2zCrcA5DixgdXShO66kJKOfOCGx1KjfbK40cOAivXj1UAj2MEFBhPfhHoXJQVu8pplQfMH7sJqd%2BriIYZEnI%2BVXGyWKg1hzUSc63IBIxn787ILTW8aE%2BWVYhMHBIHP4H0oRkwK1168LT0jQRW4R6SO1awYjHKalNQNMh6cuKp%2BKJkbcFxElF0s9ccrBLk34EMHG36N4wvhHA5dM94EqP8wXL%2FYX3epOcjkC45jzqefyRkb2HMWLrwm4w78CLDgBYOmWf18OlyjWj6KCjhxvqcid65JcanU2tVMpRColWhJkW%2BiOCEmZQyQ01mAIGWKBk5QGS9nWesKw1vW97HojiX1gr5TNgIsT4ir%2BBPOhYJgj2%2F9yOo3RoyMMhiBuz8jfc5r5cpjY0%2BPoiA%2Ba5JZydwcRKgRsuOh9J%2FbnDEDfBEQrESKn9fHA2tEnYg4aIAiKou%2F7a983%2F%2Fn%2FhgR%2FNue3kQRX6mZ196T3e%2FuJIoKtzVDcFU8YAyUpuHvgWmaIvu3cZt7CzEpfAGMfT2LEnAgCNlVsjHCqpAN2%2FoyNrISZHcM3ofV0C6iX2sJCwPn%2FT3RSFTUUN%2Fdm0boKMHUby1Lf4mN%2BMPeL5pa7HP8UDNgK6sOZEsddM4MqYOLiZbvvZidfoPMLCMr8MGOqUBCatuUXTBNtufDd1p%2F7RRtyJ5e6aE8k8j06dIYEEWb2JUsHZJ5HcR0shgGndGf3hkmWJpfM%2BGUTvY7wwcOd0lIbuw7YPS0n4sjyMBk2x4jvvhCu3Qi9y0LabReSrV%2B1FrGMlkd1U3LePkz5eT99n9rGDeVEJ33h6H0giBmnxVsfPEoABNacqRGjMmNnbZzj%2F3K%2FMiRb11BpL6tiYkEHYQ7BoB6urb&X-Amz-Signature=eee6ece93fa1439bbb98407a2cb3fd6bf4e4da9e75e546a336d79e6c90d48f74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SE6TIW2%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCmE213pIsaxdKkJ5CQaUk2y8x49dR0NclornkQVJLqgwIgKknaVaA7aVxiosRktCeM8Wh6GHmbnHlIGWHsNLxcyZUq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCZv%2BlG2LuusJwn2zCrcA5DixgdXShO66kJKOfOCGx1KjfbK40cOAivXj1UAj2MEFBhPfhHoXJQVu8pplQfMH7sJqd%2BriIYZEnI%2BVXGyWKg1hzUSc63IBIxn787ILTW8aE%2BWVYhMHBIHP4H0oRkwK1168LT0jQRW4R6SO1awYjHKalNQNMh6cuKp%2BKJkbcFxElF0s9ccrBLk34EMHG36N4wvhHA5dM94EqP8wXL%2FYX3epOcjkC45jzqefyRkb2HMWLrwm4w78CLDgBYOmWf18OlyjWj6KCjhxvqcid65JcanU2tVMpRColWhJkW%2BiOCEmZQyQ01mAIGWKBk5QGS9nWesKw1vW97HojiX1gr5TNgIsT4ir%2BBPOhYJgj2%2F9yOo3RoyMMhiBuz8jfc5r5cpjY0%2BPoiA%2Ba5JZydwcRKgRsuOh9J%2FbnDEDfBEQrESKn9fHA2tEnYg4aIAiKou%2F7a983%2F%2Fn%2FhgR%2FNue3kQRX6mZ196T3e%2FuJIoKtzVDcFU8YAyUpuHvgWmaIvu3cZt7CzEpfAGMfT2LEnAgCNlVsjHCqpAN2%2FoyNrISZHcM3ofV0C6iX2sJCwPn%2FT3RSFTUUN%2Fdm0boKMHUby1Lf4mN%2BMPeL5pa7HP8UDNgK6sOZEsddM4MqYOLiZbvvZidfoPMLCMr8MGOqUBCatuUXTBNtufDd1p%2F7RRtyJ5e6aE8k8j06dIYEEWb2JUsHZJ5HcR0shgGndGf3hkmWJpfM%2BGUTvY7wwcOd0lIbuw7YPS0n4sjyMBk2x4jvvhCu3Qi9y0LabReSrV%2B1FrGMlkd1U3LePkz5eT99n9rGDeVEJ33h6H0giBmnxVsfPEoABNacqRGjMmNnbZzj%2F3K%2FMiRb11BpL6tiYkEHYQ7BoB6urb&X-Amz-Signature=75007a190de6fb253c796f673ed0643779df35918d146250a0bce8b87b594471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SE6TIW2%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCmE213pIsaxdKkJ5CQaUk2y8x49dR0NclornkQVJLqgwIgKknaVaA7aVxiosRktCeM8Wh6GHmbnHlIGWHsNLxcyZUq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCZv%2BlG2LuusJwn2zCrcA5DixgdXShO66kJKOfOCGx1KjfbK40cOAivXj1UAj2MEFBhPfhHoXJQVu8pplQfMH7sJqd%2BriIYZEnI%2BVXGyWKg1hzUSc63IBIxn787ILTW8aE%2BWVYhMHBIHP4H0oRkwK1168LT0jQRW4R6SO1awYjHKalNQNMh6cuKp%2BKJkbcFxElF0s9ccrBLk34EMHG36N4wvhHA5dM94EqP8wXL%2FYX3epOcjkC45jzqefyRkb2HMWLrwm4w78CLDgBYOmWf18OlyjWj6KCjhxvqcid65JcanU2tVMpRColWhJkW%2BiOCEmZQyQ01mAIGWKBk5QGS9nWesKw1vW97HojiX1gr5TNgIsT4ir%2BBPOhYJgj2%2F9yOo3RoyMMhiBuz8jfc5r5cpjY0%2BPoiA%2Ba5JZydwcRKgRsuOh9J%2FbnDEDfBEQrESKn9fHA2tEnYg4aIAiKou%2F7a983%2F%2Fn%2FhgR%2FNue3kQRX6mZ196T3e%2FuJIoKtzVDcFU8YAyUpuHvgWmaIvu3cZt7CzEpfAGMfT2LEnAgCNlVsjHCqpAN2%2FoyNrISZHcM3ofV0C6iX2sJCwPn%2FT3RSFTUUN%2Fdm0boKMHUby1Lf4mN%2BMPeL5pa7HP8UDNgK6sOZEsddM4MqYOLiZbvvZidfoPMLCMr8MGOqUBCatuUXTBNtufDd1p%2F7RRtyJ5e6aE8k8j06dIYEEWb2JUsHZJ5HcR0shgGndGf3hkmWJpfM%2BGUTvY7wwcOd0lIbuw7YPS0n4sjyMBk2x4jvvhCu3Qi9y0LabReSrV%2B1FrGMlkd1U3LePkz5eT99n9rGDeVEJ33h6H0giBmnxVsfPEoABNacqRGjMmNnbZzj%2F3K%2FMiRb11BpL6tiYkEHYQ7BoB6urb&X-Amz-Signature=c3a2f644f8e03035e0bd9a189a05cb361debd12349e4ee246ee167dbfb10502e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SE6TIW2%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCmE213pIsaxdKkJ5CQaUk2y8x49dR0NclornkQVJLqgwIgKknaVaA7aVxiosRktCeM8Wh6GHmbnHlIGWHsNLxcyZUq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCZv%2BlG2LuusJwn2zCrcA5DixgdXShO66kJKOfOCGx1KjfbK40cOAivXj1UAj2MEFBhPfhHoXJQVu8pplQfMH7sJqd%2BriIYZEnI%2BVXGyWKg1hzUSc63IBIxn787ILTW8aE%2BWVYhMHBIHP4H0oRkwK1168LT0jQRW4R6SO1awYjHKalNQNMh6cuKp%2BKJkbcFxElF0s9ccrBLk34EMHG36N4wvhHA5dM94EqP8wXL%2FYX3epOcjkC45jzqefyRkb2HMWLrwm4w78CLDgBYOmWf18OlyjWj6KCjhxvqcid65JcanU2tVMpRColWhJkW%2BiOCEmZQyQ01mAIGWKBk5QGS9nWesKw1vW97HojiX1gr5TNgIsT4ir%2BBPOhYJgj2%2F9yOo3RoyMMhiBuz8jfc5r5cpjY0%2BPoiA%2Ba5JZydwcRKgRsuOh9J%2FbnDEDfBEQrESKn9fHA2tEnYg4aIAiKou%2F7a983%2F%2Fn%2FhgR%2FNue3kQRX6mZ196T3e%2FuJIoKtzVDcFU8YAyUpuHvgWmaIvu3cZt7CzEpfAGMfT2LEnAgCNlVsjHCqpAN2%2FoyNrISZHcM3ofV0C6iX2sJCwPn%2FT3RSFTUUN%2Fdm0boKMHUby1Lf4mN%2BMPeL5pa7HP8UDNgK6sOZEsddM4MqYOLiZbvvZidfoPMLCMr8MGOqUBCatuUXTBNtufDd1p%2F7RRtyJ5e6aE8k8j06dIYEEWb2JUsHZJ5HcR0shgGndGf3hkmWJpfM%2BGUTvY7wwcOd0lIbuw7YPS0n4sjyMBk2x4jvvhCu3Qi9y0LabReSrV%2B1FrGMlkd1U3LePkz5eT99n9rGDeVEJ33h6H0giBmnxVsfPEoABNacqRGjMmNnbZzj%2F3K%2FMiRb11BpL6tiYkEHYQ7BoB6urb&X-Amz-Signature=717b2997ae799a07dfd1e109fac53bbb0d8468be9b68602a3629b8eba2561134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SE6TIW2%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCmE213pIsaxdKkJ5CQaUk2y8x49dR0NclornkQVJLqgwIgKknaVaA7aVxiosRktCeM8Wh6GHmbnHlIGWHsNLxcyZUq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCZv%2BlG2LuusJwn2zCrcA5DixgdXShO66kJKOfOCGx1KjfbK40cOAivXj1UAj2MEFBhPfhHoXJQVu8pplQfMH7sJqd%2BriIYZEnI%2BVXGyWKg1hzUSc63IBIxn787ILTW8aE%2BWVYhMHBIHP4H0oRkwK1168LT0jQRW4R6SO1awYjHKalNQNMh6cuKp%2BKJkbcFxElF0s9ccrBLk34EMHG36N4wvhHA5dM94EqP8wXL%2FYX3epOcjkC45jzqefyRkb2HMWLrwm4w78CLDgBYOmWf18OlyjWj6KCjhxvqcid65JcanU2tVMpRColWhJkW%2BiOCEmZQyQ01mAIGWKBk5QGS9nWesKw1vW97HojiX1gr5TNgIsT4ir%2BBPOhYJgj2%2F9yOo3RoyMMhiBuz8jfc5r5cpjY0%2BPoiA%2Ba5JZydwcRKgRsuOh9J%2FbnDEDfBEQrESKn9fHA2tEnYg4aIAiKou%2F7a983%2F%2Fn%2FhgR%2FNue3kQRX6mZ196T3e%2FuJIoKtzVDcFU8YAyUpuHvgWmaIvu3cZt7CzEpfAGMfT2LEnAgCNlVsjHCqpAN2%2FoyNrISZHcM3ofV0C6iX2sJCwPn%2FT3RSFTUUN%2Fdm0boKMHUby1Lf4mN%2BMPeL5pa7HP8UDNgK6sOZEsddM4MqYOLiZbvvZidfoPMLCMr8MGOqUBCatuUXTBNtufDd1p%2F7RRtyJ5e6aE8k8j06dIYEEWb2JUsHZJ5HcR0shgGndGf3hkmWJpfM%2BGUTvY7wwcOd0lIbuw7YPS0n4sjyMBk2x4jvvhCu3Qi9y0LabReSrV%2B1FrGMlkd1U3LePkz5eT99n9rGDeVEJ33h6H0giBmnxVsfPEoABNacqRGjMmNnbZzj%2F3K%2FMiRb11BpL6tiYkEHYQ7BoB6urb&X-Amz-Signature=52457cb2f21fa4c48b7ccacb99657a2a8ecc0c7fa625454d39c1c6689ea41a74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SE6TIW2%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCmE213pIsaxdKkJ5CQaUk2y8x49dR0NclornkQVJLqgwIgKknaVaA7aVxiosRktCeM8Wh6GHmbnHlIGWHsNLxcyZUq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCZv%2BlG2LuusJwn2zCrcA5DixgdXShO66kJKOfOCGx1KjfbK40cOAivXj1UAj2MEFBhPfhHoXJQVu8pplQfMH7sJqd%2BriIYZEnI%2BVXGyWKg1hzUSc63IBIxn787ILTW8aE%2BWVYhMHBIHP4H0oRkwK1168LT0jQRW4R6SO1awYjHKalNQNMh6cuKp%2BKJkbcFxElF0s9ccrBLk34EMHG36N4wvhHA5dM94EqP8wXL%2FYX3epOcjkC45jzqefyRkb2HMWLrwm4w78CLDgBYOmWf18OlyjWj6KCjhxvqcid65JcanU2tVMpRColWhJkW%2BiOCEmZQyQ01mAIGWKBk5QGS9nWesKw1vW97HojiX1gr5TNgIsT4ir%2BBPOhYJgj2%2F9yOo3RoyMMhiBuz8jfc5r5cpjY0%2BPoiA%2Ba5JZydwcRKgRsuOh9J%2FbnDEDfBEQrESKn9fHA2tEnYg4aIAiKou%2F7a983%2F%2Fn%2FhgR%2FNue3kQRX6mZ196T3e%2FuJIoKtzVDcFU8YAyUpuHvgWmaIvu3cZt7CzEpfAGMfT2LEnAgCNlVsjHCqpAN2%2FoyNrISZHcM3ofV0C6iX2sJCwPn%2FT3RSFTUUN%2Fdm0boKMHUby1Lf4mN%2BMPeL5pa7HP8UDNgK6sOZEsddM4MqYOLiZbvvZidfoPMLCMr8MGOqUBCatuUXTBNtufDd1p%2F7RRtyJ5e6aE8k8j06dIYEEWb2JUsHZJ5HcR0shgGndGf3hkmWJpfM%2BGUTvY7wwcOd0lIbuw7YPS0n4sjyMBk2x4jvvhCu3Qi9y0LabReSrV%2B1FrGMlkd1U3LePkz5eT99n9rGDeVEJ33h6H0giBmnxVsfPEoABNacqRGjMmNnbZzj%2F3K%2FMiRb11BpL6tiYkEHYQ7BoB6urb&X-Amz-Signature=7c6409103df67fae4c3dadde5aa03273505f90a45807160fe27a59926e950c3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SE6TIW2%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCmE213pIsaxdKkJ5CQaUk2y8x49dR0NclornkQVJLqgwIgKknaVaA7aVxiosRktCeM8Wh6GHmbnHlIGWHsNLxcyZUq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCZv%2BlG2LuusJwn2zCrcA5DixgdXShO66kJKOfOCGx1KjfbK40cOAivXj1UAj2MEFBhPfhHoXJQVu8pplQfMH7sJqd%2BriIYZEnI%2BVXGyWKg1hzUSc63IBIxn787ILTW8aE%2BWVYhMHBIHP4H0oRkwK1168LT0jQRW4R6SO1awYjHKalNQNMh6cuKp%2BKJkbcFxElF0s9ccrBLk34EMHG36N4wvhHA5dM94EqP8wXL%2FYX3epOcjkC45jzqefyRkb2HMWLrwm4w78CLDgBYOmWf18OlyjWj6KCjhxvqcid65JcanU2tVMpRColWhJkW%2BiOCEmZQyQ01mAIGWKBk5QGS9nWesKw1vW97HojiX1gr5TNgIsT4ir%2BBPOhYJgj2%2F9yOo3RoyMMhiBuz8jfc5r5cpjY0%2BPoiA%2Ba5JZydwcRKgRsuOh9J%2FbnDEDfBEQrESKn9fHA2tEnYg4aIAiKou%2F7a983%2F%2Fn%2FhgR%2FNue3kQRX6mZ196T3e%2FuJIoKtzVDcFU8YAyUpuHvgWmaIvu3cZt7CzEpfAGMfT2LEnAgCNlVsjHCqpAN2%2FoyNrISZHcM3ofV0C6iX2sJCwPn%2FT3RSFTUUN%2Fdm0boKMHUby1Lf4mN%2BMPeL5pa7HP8UDNgK6sOZEsddM4MqYOLiZbvvZidfoPMLCMr8MGOqUBCatuUXTBNtufDd1p%2F7RRtyJ5e6aE8k8j06dIYEEWb2JUsHZJ5HcR0shgGndGf3hkmWJpfM%2BGUTvY7wwcOd0lIbuw7YPS0n4sjyMBk2x4jvvhCu3Qi9y0LabReSrV%2B1FrGMlkd1U3LePkz5eT99n9rGDeVEJ33h6H0giBmnxVsfPEoABNacqRGjMmNnbZzj%2F3K%2FMiRb11BpL6tiYkEHYQ7BoB6urb&X-Amz-Signature=bd9966197b4590e1af8ef27bcaab3ae9ae661b39d516ebeee48ace43de751549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
