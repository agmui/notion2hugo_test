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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NZAIASI%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg6nNGpr5yqcGD50nIwp9J9FCZKHDMkdxoP2zGcqN0AQIgVTXKG6rd7jNdhGjCqn3%2FxxefrcNPrc8vkaup3MpvxiYq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDFhRXqWP%2FSg2Ok3iICrcAx9fE6HIEg8tMGZ%2BmDGsIur2rkAmfNvi1YHLnw57o%2BO45T%2Fol83fnJ944QVNDv7j3uoH0lxyBM4vBDmX0kBEyTm8%2FFGOjdQkisYj5qmoYI%2BR8%2BImjNGg1Kcv%2BGJSnOYh8jPixsFqjJjm3MI%2FCMvfL4rkFmzyCVGwJWJlNsXvjOy0HP5jpxDsegB8U%2FgQazDfKmxpI793uCHMXk5xEByHjvWz1g8V%2BaRIHc410z2mUg%2FuuhD7IQqH5n7JMGEMNRCQPKmd8Uzn2ZGN77G1z0cDCxnOXxAqI0qcv12y66zTXYZFZQjVdTjo5CcN%2FyOb%2FKfx0hCrMNnv%2BNZ7MXkqCf%2BNWvoyDsp930%2BNrC8I6enmtyIb8u0dN5kNQqNUsPYenTqJ84ikF3A4U5H078dY%2FDS9H5f8qLSg7BTEKMFAASBl%2F1VbEvsihsaQEmUmTbSX36vzzvwYQfs8zukB97WrsrIzR0%2BUuX%2FsZhGibR%2B67xrzv2rubA3%2FIjy%2FZPjc6I2nTiCGQU%2B0f3yoL4okJtWbkWnC38%2FS3RqwMKFHeuTbJhbfF9%2BSfwSn5BUrPFW2HJCZhZUIWIrNZ1G4ZJ8zdba2HvYZHCfhoxC9%2BObYm1tyTlQNmxyilhruvHRXgqqTiBf%2FMMrXpMEGOqUBwi%2BUwM2r8otXv7d%2BkJlDsNF1jFl9FddzwJbYhnt0y18JUGA2PZw1su7XAed1oGlevj4wV%2FeRocjGWEcABgVd2bgPkqac3FJtRM8ED18fBccc%2FSo%2FHAWttha4VHD42%2BZsvecNsu%2FsVrDgbE0D2bc4H62pbINVYPocV7CbPsRH%2BTDbpIfdkN4MVSA3yTjRoyiWAyXQafkQiFgU0jh%2Fdi6fuwdjT5Zg&X-Amz-Signature=2e7171c462db5135f16e2e4eee7a9e5eef6d76b639bef4cff838e33866550bc9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NZAIASI%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg6nNGpr5yqcGD50nIwp9J9FCZKHDMkdxoP2zGcqN0AQIgVTXKG6rd7jNdhGjCqn3%2FxxefrcNPrc8vkaup3MpvxiYq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDFhRXqWP%2FSg2Ok3iICrcAx9fE6HIEg8tMGZ%2BmDGsIur2rkAmfNvi1YHLnw57o%2BO45T%2Fol83fnJ944QVNDv7j3uoH0lxyBM4vBDmX0kBEyTm8%2FFGOjdQkisYj5qmoYI%2BR8%2BImjNGg1Kcv%2BGJSnOYh8jPixsFqjJjm3MI%2FCMvfL4rkFmzyCVGwJWJlNsXvjOy0HP5jpxDsegB8U%2FgQazDfKmxpI793uCHMXk5xEByHjvWz1g8V%2BaRIHc410z2mUg%2FuuhD7IQqH5n7JMGEMNRCQPKmd8Uzn2ZGN77G1z0cDCxnOXxAqI0qcv12y66zTXYZFZQjVdTjo5CcN%2FyOb%2FKfx0hCrMNnv%2BNZ7MXkqCf%2BNWvoyDsp930%2BNrC8I6enmtyIb8u0dN5kNQqNUsPYenTqJ84ikF3A4U5H078dY%2FDS9H5f8qLSg7BTEKMFAASBl%2F1VbEvsihsaQEmUmTbSX36vzzvwYQfs8zukB97WrsrIzR0%2BUuX%2FsZhGibR%2B67xrzv2rubA3%2FIjy%2FZPjc6I2nTiCGQU%2B0f3yoL4okJtWbkWnC38%2FS3RqwMKFHeuTbJhbfF9%2BSfwSn5BUrPFW2HJCZhZUIWIrNZ1G4ZJ8zdba2HvYZHCfhoxC9%2BObYm1tyTlQNmxyilhruvHRXgqqTiBf%2FMMrXpMEGOqUBwi%2BUwM2r8otXv7d%2BkJlDsNF1jFl9FddzwJbYhnt0y18JUGA2PZw1su7XAed1oGlevj4wV%2FeRocjGWEcABgVd2bgPkqac3FJtRM8ED18fBccc%2FSo%2FHAWttha4VHD42%2BZsvecNsu%2FsVrDgbE0D2bc4H62pbINVYPocV7CbPsRH%2BTDbpIfdkN4MVSA3yTjRoyiWAyXQafkQiFgU0jh%2Fdi6fuwdjT5Zg&X-Amz-Signature=d618aa5c44749318b05c1455e1d2b62776852eb4e63f0b805116bc557b5adaf8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NZAIASI%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg6nNGpr5yqcGD50nIwp9J9FCZKHDMkdxoP2zGcqN0AQIgVTXKG6rd7jNdhGjCqn3%2FxxefrcNPrc8vkaup3MpvxiYq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDFhRXqWP%2FSg2Ok3iICrcAx9fE6HIEg8tMGZ%2BmDGsIur2rkAmfNvi1YHLnw57o%2BO45T%2Fol83fnJ944QVNDv7j3uoH0lxyBM4vBDmX0kBEyTm8%2FFGOjdQkisYj5qmoYI%2BR8%2BImjNGg1Kcv%2BGJSnOYh8jPixsFqjJjm3MI%2FCMvfL4rkFmzyCVGwJWJlNsXvjOy0HP5jpxDsegB8U%2FgQazDfKmxpI793uCHMXk5xEByHjvWz1g8V%2BaRIHc410z2mUg%2FuuhD7IQqH5n7JMGEMNRCQPKmd8Uzn2ZGN77G1z0cDCxnOXxAqI0qcv12y66zTXYZFZQjVdTjo5CcN%2FyOb%2FKfx0hCrMNnv%2BNZ7MXkqCf%2BNWvoyDsp930%2BNrC8I6enmtyIb8u0dN5kNQqNUsPYenTqJ84ikF3A4U5H078dY%2FDS9H5f8qLSg7BTEKMFAASBl%2F1VbEvsihsaQEmUmTbSX36vzzvwYQfs8zukB97WrsrIzR0%2BUuX%2FsZhGibR%2B67xrzv2rubA3%2FIjy%2FZPjc6I2nTiCGQU%2B0f3yoL4okJtWbkWnC38%2FS3RqwMKFHeuTbJhbfF9%2BSfwSn5BUrPFW2HJCZhZUIWIrNZ1G4ZJ8zdba2HvYZHCfhoxC9%2BObYm1tyTlQNmxyilhruvHRXgqqTiBf%2FMMrXpMEGOqUBwi%2BUwM2r8otXv7d%2BkJlDsNF1jFl9FddzwJbYhnt0y18JUGA2PZw1su7XAed1oGlevj4wV%2FeRocjGWEcABgVd2bgPkqac3FJtRM8ED18fBccc%2FSo%2FHAWttha4VHD42%2BZsvecNsu%2FsVrDgbE0D2bc4H62pbINVYPocV7CbPsRH%2BTDbpIfdkN4MVSA3yTjRoyiWAyXQafkQiFgU0jh%2Fdi6fuwdjT5Zg&X-Amz-Signature=3b5374fdee9cf22f1bc4cbfdbf277f79ca9cbdbd250f97fd014974f40ad216df&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NZAIASI%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg6nNGpr5yqcGD50nIwp9J9FCZKHDMkdxoP2zGcqN0AQIgVTXKG6rd7jNdhGjCqn3%2FxxefrcNPrc8vkaup3MpvxiYq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDFhRXqWP%2FSg2Ok3iICrcAx9fE6HIEg8tMGZ%2BmDGsIur2rkAmfNvi1YHLnw57o%2BO45T%2Fol83fnJ944QVNDv7j3uoH0lxyBM4vBDmX0kBEyTm8%2FFGOjdQkisYj5qmoYI%2BR8%2BImjNGg1Kcv%2BGJSnOYh8jPixsFqjJjm3MI%2FCMvfL4rkFmzyCVGwJWJlNsXvjOy0HP5jpxDsegB8U%2FgQazDfKmxpI793uCHMXk5xEByHjvWz1g8V%2BaRIHc410z2mUg%2FuuhD7IQqH5n7JMGEMNRCQPKmd8Uzn2ZGN77G1z0cDCxnOXxAqI0qcv12y66zTXYZFZQjVdTjo5CcN%2FyOb%2FKfx0hCrMNnv%2BNZ7MXkqCf%2BNWvoyDsp930%2BNrC8I6enmtyIb8u0dN5kNQqNUsPYenTqJ84ikF3A4U5H078dY%2FDS9H5f8qLSg7BTEKMFAASBl%2F1VbEvsihsaQEmUmTbSX36vzzvwYQfs8zukB97WrsrIzR0%2BUuX%2FsZhGibR%2B67xrzv2rubA3%2FIjy%2FZPjc6I2nTiCGQU%2B0f3yoL4okJtWbkWnC38%2FS3RqwMKFHeuTbJhbfF9%2BSfwSn5BUrPFW2HJCZhZUIWIrNZ1G4ZJ8zdba2HvYZHCfhoxC9%2BObYm1tyTlQNmxyilhruvHRXgqqTiBf%2FMMrXpMEGOqUBwi%2BUwM2r8otXv7d%2BkJlDsNF1jFl9FddzwJbYhnt0y18JUGA2PZw1su7XAed1oGlevj4wV%2FeRocjGWEcABgVd2bgPkqac3FJtRM8ED18fBccc%2FSo%2FHAWttha4VHD42%2BZsvecNsu%2FsVrDgbE0D2bc4H62pbINVYPocV7CbPsRH%2BTDbpIfdkN4MVSA3yTjRoyiWAyXQafkQiFgU0jh%2Fdi6fuwdjT5Zg&X-Amz-Signature=ac33343a4d97aec532e5b4de8a30213e48d53ff0ddc85a0b00ee185a3f5f2976&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NZAIASI%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg6nNGpr5yqcGD50nIwp9J9FCZKHDMkdxoP2zGcqN0AQIgVTXKG6rd7jNdhGjCqn3%2FxxefrcNPrc8vkaup3MpvxiYq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDFhRXqWP%2FSg2Ok3iICrcAx9fE6HIEg8tMGZ%2BmDGsIur2rkAmfNvi1YHLnw57o%2BO45T%2Fol83fnJ944QVNDv7j3uoH0lxyBM4vBDmX0kBEyTm8%2FFGOjdQkisYj5qmoYI%2BR8%2BImjNGg1Kcv%2BGJSnOYh8jPixsFqjJjm3MI%2FCMvfL4rkFmzyCVGwJWJlNsXvjOy0HP5jpxDsegB8U%2FgQazDfKmxpI793uCHMXk5xEByHjvWz1g8V%2BaRIHc410z2mUg%2FuuhD7IQqH5n7JMGEMNRCQPKmd8Uzn2ZGN77G1z0cDCxnOXxAqI0qcv12y66zTXYZFZQjVdTjo5CcN%2FyOb%2FKfx0hCrMNnv%2BNZ7MXkqCf%2BNWvoyDsp930%2BNrC8I6enmtyIb8u0dN5kNQqNUsPYenTqJ84ikF3A4U5H078dY%2FDS9H5f8qLSg7BTEKMFAASBl%2F1VbEvsihsaQEmUmTbSX36vzzvwYQfs8zukB97WrsrIzR0%2BUuX%2FsZhGibR%2B67xrzv2rubA3%2FIjy%2FZPjc6I2nTiCGQU%2B0f3yoL4okJtWbkWnC38%2FS3RqwMKFHeuTbJhbfF9%2BSfwSn5BUrPFW2HJCZhZUIWIrNZ1G4ZJ8zdba2HvYZHCfhoxC9%2BObYm1tyTlQNmxyilhruvHRXgqqTiBf%2FMMrXpMEGOqUBwi%2BUwM2r8otXv7d%2BkJlDsNF1jFl9FddzwJbYhnt0y18JUGA2PZw1su7XAed1oGlevj4wV%2FeRocjGWEcABgVd2bgPkqac3FJtRM8ED18fBccc%2FSo%2FHAWttha4VHD42%2BZsvecNsu%2FsVrDgbE0D2bc4H62pbINVYPocV7CbPsRH%2BTDbpIfdkN4MVSA3yTjRoyiWAyXQafkQiFgU0jh%2Fdi6fuwdjT5Zg&X-Amz-Signature=7da60f61d868e205bd8861eedc84467504c92a51406d51896ad58b5f84da2bff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NZAIASI%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg6nNGpr5yqcGD50nIwp9J9FCZKHDMkdxoP2zGcqN0AQIgVTXKG6rd7jNdhGjCqn3%2FxxefrcNPrc8vkaup3MpvxiYq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDFhRXqWP%2FSg2Ok3iICrcAx9fE6HIEg8tMGZ%2BmDGsIur2rkAmfNvi1YHLnw57o%2BO45T%2Fol83fnJ944QVNDv7j3uoH0lxyBM4vBDmX0kBEyTm8%2FFGOjdQkisYj5qmoYI%2BR8%2BImjNGg1Kcv%2BGJSnOYh8jPixsFqjJjm3MI%2FCMvfL4rkFmzyCVGwJWJlNsXvjOy0HP5jpxDsegB8U%2FgQazDfKmxpI793uCHMXk5xEByHjvWz1g8V%2BaRIHc410z2mUg%2FuuhD7IQqH5n7JMGEMNRCQPKmd8Uzn2ZGN77G1z0cDCxnOXxAqI0qcv12y66zTXYZFZQjVdTjo5CcN%2FyOb%2FKfx0hCrMNnv%2BNZ7MXkqCf%2BNWvoyDsp930%2BNrC8I6enmtyIb8u0dN5kNQqNUsPYenTqJ84ikF3A4U5H078dY%2FDS9H5f8qLSg7BTEKMFAASBl%2F1VbEvsihsaQEmUmTbSX36vzzvwYQfs8zukB97WrsrIzR0%2BUuX%2FsZhGibR%2B67xrzv2rubA3%2FIjy%2FZPjc6I2nTiCGQU%2B0f3yoL4okJtWbkWnC38%2FS3RqwMKFHeuTbJhbfF9%2BSfwSn5BUrPFW2HJCZhZUIWIrNZ1G4ZJ8zdba2HvYZHCfhoxC9%2BObYm1tyTlQNmxyilhruvHRXgqqTiBf%2FMMrXpMEGOqUBwi%2BUwM2r8otXv7d%2BkJlDsNF1jFl9FddzwJbYhnt0y18JUGA2PZw1su7XAed1oGlevj4wV%2FeRocjGWEcABgVd2bgPkqac3FJtRM8ED18fBccc%2FSo%2FHAWttha4VHD42%2BZsvecNsu%2FsVrDgbE0D2bc4H62pbINVYPocV7CbPsRH%2BTDbpIfdkN4MVSA3yTjRoyiWAyXQafkQiFgU0jh%2Fdi6fuwdjT5Zg&X-Amz-Signature=760593187bb42368cce821eac9df8ee799a5712193a287efd01098fd5e291f53&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NZAIASI%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg6nNGpr5yqcGD50nIwp9J9FCZKHDMkdxoP2zGcqN0AQIgVTXKG6rd7jNdhGjCqn3%2FxxefrcNPrc8vkaup3MpvxiYq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDFhRXqWP%2FSg2Ok3iICrcAx9fE6HIEg8tMGZ%2BmDGsIur2rkAmfNvi1YHLnw57o%2BO45T%2Fol83fnJ944QVNDv7j3uoH0lxyBM4vBDmX0kBEyTm8%2FFGOjdQkisYj5qmoYI%2BR8%2BImjNGg1Kcv%2BGJSnOYh8jPixsFqjJjm3MI%2FCMvfL4rkFmzyCVGwJWJlNsXvjOy0HP5jpxDsegB8U%2FgQazDfKmxpI793uCHMXk5xEByHjvWz1g8V%2BaRIHc410z2mUg%2FuuhD7IQqH5n7JMGEMNRCQPKmd8Uzn2ZGN77G1z0cDCxnOXxAqI0qcv12y66zTXYZFZQjVdTjo5CcN%2FyOb%2FKfx0hCrMNnv%2BNZ7MXkqCf%2BNWvoyDsp930%2BNrC8I6enmtyIb8u0dN5kNQqNUsPYenTqJ84ikF3A4U5H078dY%2FDS9H5f8qLSg7BTEKMFAASBl%2F1VbEvsihsaQEmUmTbSX36vzzvwYQfs8zukB97WrsrIzR0%2BUuX%2FsZhGibR%2B67xrzv2rubA3%2FIjy%2FZPjc6I2nTiCGQU%2B0f3yoL4okJtWbkWnC38%2FS3RqwMKFHeuTbJhbfF9%2BSfwSn5BUrPFW2HJCZhZUIWIrNZ1G4ZJ8zdba2HvYZHCfhoxC9%2BObYm1tyTlQNmxyilhruvHRXgqqTiBf%2FMMrXpMEGOqUBwi%2BUwM2r8otXv7d%2BkJlDsNF1jFl9FddzwJbYhnt0y18JUGA2PZw1su7XAed1oGlevj4wV%2FeRocjGWEcABgVd2bgPkqac3FJtRM8ED18fBccc%2FSo%2FHAWttha4VHD42%2BZsvecNsu%2FsVrDgbE0D2bc4H62pbINVYPocV7CbPsRH%2BTDbpIfdkN4MVSA3yTjRoyiWAyXQafkQiFgU0jh%2Fdi6fuwdjT5Zg&X-Amz-Signature=c4ddeb5912a1ee9bda589c8f818a0a76d37d972e52823944633496da7d2b4430&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NZAIASI%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg6nNGpr5yqcGD50nIwp9J9FCZKHDMkdxoP2zGcqN0AQIgVTXKG6rd7jNdhGjCqn3%2FxxefrcNPrc8vkaup3MpvxiYq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDFhRXqWP%2FSg2Ok3iICrcAx9fE6HIEg8tMGZ%2BmDGsIur2rkAmfNvi1YHLnw57o%2BO45T%2Fol83fnJ944QVNDv7j3uoH0lxyBM4vBDmX0kBEyTm8%2FFGOjdQkisYj5qmoYI%2BR8%2BImjNGg1Kcv%2BGJSnOYh8jPixsFqjJjm3MI%2FCMvfL4rkFmzyCVGwJWJlNsXvjOy0HP5jpxDsegB8U%2FgQazDfKmxpI793uCHMXk5xEByHjvWz1g8V%2BaRIHc410z2mUg%2FuuhD7IQqH5n7JMGEMNRCQPKmd8Uzn2ZGN77G1z0cDCxnOXxAqI0qcv12y66zTXYZFZQjVdTjo5CcN%2FyOb%2FKfx0hCrMNnv%2BNZ7MXkqCf%2BNWvoyDsp930%2BNrC8I6enmtyIb8u0dN5kNQqNUsPYenTqJ84ikF3A4U5H078dY%2FDS9H5f8qLSg7BTEKMFAASBl%2F1VbEvsihsaQEmUmTbSX36vzzvwYQfs8zukB97WrsrIzR0%2BUuX%2FsZhGibR%2B67xrzv2rubA3%2FIjy%2FZPjc6I2nTiCGQU%2B0f3yoL4okJtWbkWnC38%2FS3RqwMKFHeuTbJhbfF9%2BSfwSn5BUrPFW2HJCZhZUIWIrNZ1G4ZJ8zdba2HvYZHCfhoxC9%2BObYm1tyTlQNmxyilhruvHRXgqqTiBf%2FMMrXpMEGOqUBwi%2BUwM2r8otXv7d%2BkJlDsNF1jFl9FddzwJbYhnt0y18JUGA2PZw1su7XAed1oGlevj4wV%2FeRocjGWEcABgVd2bgPkqac3FJtRM8ED18fBccc%2FSo%2FHAWttha4VHD42%2BZsvecNsu%2FsVrDgbE0D2bc4H62pbINVYPocV7CbPsRH%2BTDbpIfdkN4MVSA3yTjRoyiWAyXQafkQiFgU0jh%2Fdi6fuwdjT5Zg&X-Amz-Signature=95b1d55d7f0784b02fc15d4c2dc242361e0f46b60000ac65ccb294b1f9f73765&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
