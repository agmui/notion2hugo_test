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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOGX6HHQ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T090747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDXY8AEjykgcrHuXBVe06OIR1vzFmIttstpUuN%2BtV%2BaNgIhAMWrpmEWwwNiET%2FvgMgpqO0JN3DzO%2BXTaJNDGRrrkE4jKv8DCCYQABoMNjM3NDIzMTgzODA1Igy%2F179CSBozFD08cnkq3ANTrGx5eVLa9nvGbYhz9qWdP11yKnWZYxslkXH5xePhJu3PpysXOCg9Cy38ih6gwm0ulM0vSNws0tkLSx9v9vfzyoaQsi4yE1Y2LPkH4kACk%2FHrUN%2BAz0Zf0xOv9ZV3ViwdSfnKTFhzGwTzRX75gF8Qm4RjcUvWBDNhI214jvCqM01YpkUePFGWBrf9Prt6N%2FcfuJQRpR3KztwjQXpdgxAFsbBrl4xIYDsLsTifAnJt4M3S8zeibXI%2BzYlbYRJBHhfPY%2BeWSib6uWOA54olEIN%2FS%2FhW9oMY9nMSWTvbOx3Cbr0%2BCt%2FJ2nFAZhRn9nv1o9iCwa6dm26W5iP8c2Ik1awneEZPO1IxnsgWn8HmqwO0OdzFwE5ppBno3N42uLCWY9pdE14sEvGknpQ%2B5eWz2wyjSN8QmhysF0oP8KfnP4apQoUxsE0q7UAbM%2Bx7WHZ6McTSxL60ex1CFmO85fh1s%2BMlyKnFrRP2FAqEMKdTr5uiIVG0tZ%2FPygCxSEo7UP40vG11C7pfWSiD%2BBahtaPTVUaTBto7uALfYKnxnxWy9gWFIQhW8EKIEJa7HOJzI%2BiDoyS%2B6scSdpRQYJzzSLNZKG4ojHNvrf4H2ZT3Te3BDJZNoJ2F8DdD1ohhO8KEsTCDy8rBBjqkAZKMtwiK29ntbyLzGWystqqWfRvlL%2FisMNTxhsE0%2Ftr8NrbYH3S6s4OqrRToPsXWxKoP2g6QuEaWJX4A20zOfA8B%2BI7UGPuCbYeWvfflmFJcp54NYwPwxuJEU3v8%2BMBHV7U%2FDPt%2FW2oq3aQN7G59Vpmkj3GqxRRYVEMSIhrbOnqpAtdt8b22tGGVXsP9xhmoX%2B3zon7gCl3qCn%2BwUlv3X0hbtMVG&X-Amz-Signature=9e5905740aba20beb60d6708bcac7abdce8b5c8813b8513fc77109c6735a1cd6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOGX6HHQ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T090747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDXY8AEjykgcrHuXBVe06OIR1vzFmIttstpUuN%2BtV%2BaNgIhAMWrpmEWwwNiET%2FvgMgpqO0JN3DzO%2BXTaJNDGRrrkE4jKv8DCCYQABoMNjM3NDIzMTgzODA1Igy%2F179CSBozFD08cnkq3ANTrGx5eVLa9nvGbYhz9qWdP11yKnWZYxslkXH5xePhJu3PpysXOCg9Cy38ih6gwm0ulM0vSNws0tkLSx9v9vfzyoaQsi4yE1Y2LPkH4kACk%2FHrUN%2BAz0Zf0xOv9ZV3ViwdSfnKTFhzGwTzRX75gF8Qm4RjcUvWBDNhI214jvCqM01YpkUePFGWBrf9Prt6N%2FcfuJQRpR3KztwjQXpdgxAFsbBrl4xIYDsLsTifAnJt4M3S8zeibXI%2BzYlbYRJBHhfPY%2BeWSib6uWOA54olEIN%2FS%2FhW9oMY9nMSWTvbOx3Cbr0%2BCt%2FJ2nFAZhRn9nv1o9iCwa6dm26W5iP8c2Ik1awneEZPO1IxnsgWn8HmqwO0OdzFwE5ppBno3N42uLCWY9pdE14sEvGknpQ%2B5eWz2wyjSN8QmhysF0oP8KfnP4apQoUxsE0q7UAbM%2Bx7WHZ6McTSxL60ex1CFmO85fh1s%2BMlyKnFrRP2FAqEMKdTr5uiIVG0tZ%2FPygCxSEo7UP40vG11C7pfWSiD%2BBahtaPTVUaTBto7uALfYKnxnxWy9gWFIQhW8EKIEJa7HOJzI%2BiDoyS%2B6scSdpRQYJzzSLNZKG4ojHNvrf4H2ZT3Te3BDJZNoJ2F8DdD1ohhO8KEsTCDy8rBBjqkAZKMtwiK29ntbyLzGWystqqWfRvlL%2FisMNTxhsE0%2Ftr8NrbYH3S6s4OqrRToPsXWxKoP2g6QuEaWJX4A20zOfA8B%2BI7UGPuCbYeWvfflmFJcp54NYwPwxuJEU3v8%2BMBHV7U%2FDPt%2FW2oq3aQN7G59Vpmkj3GqxRRYVEMSIhrbOnqpAtdt8b22tGGVXsP9xhmoX%2B3zon7gCl3qCn%2BwUlv3X0hbtMVG&X-Amz-Signature=2231843fa00ce962f106bdb22bb35730e4b848887e3d795b7b51c86ef1b7dc5f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOGX6HHQ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T090747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDXY8AEjykgcrHuXBVe06OIR1vzFmIttstpUuN%2BtV%2BaNgIhAMWrpmEWwwNiET%2FvgMgpqO0JN3DzO%2BXTaJNDGRrrkE4jKv8DCCYQABoMNjM3NDIzMTgzODA1Igy%2F179CSBozFD08cnkq3ANTrGx5eVLa9nvGbYhz9qWdP11yKnWZYxslkXH5xePhJu3PpysXOCg9Cy38ih6gwm0ulM0vSNws0tkLSx9v9vfzyoaQsi4yE1Y2LPkH4kACk%2FHrUN%2BAz0Zf0xOv9ZV3ViwdSfnKTFhzGwTzRX75gF8Qm4RjcUvWBDNhI214jvCqM01YpkUePFGWBrf9Prt6N%2FcfuJQRpR3KztwjQXpdgxAFsbBrl4xIYDsLsTifAnJt4M3S8zeibXI%2BzYlbYRJBHhfPY%2BeWSib6uWOA54olEIN%2FS%2FhW9oMY9nMSWTvbOx3Cbr0%2BCt%2FJ2nFAZhRn9nv1o9iCwa6dm26W5iP8c2Ik1awneEZPO1IxnsgWn8HmqwO0OdzFwE5ppBno3N42uLCWY9pdE14sEvGknpQ%2B5eWz2wyjSN8QmhysF0oP8KfnP4apQoUxsE0q7UAbM%2Bx7WHZ6McTSxL60ex1CFmO85fh1s%2BMlyKnFrRP2FAqEMKdTr5uiIVG0tZ%2FPygCxSEo7UP40vG11C7pfWSiD%2BBahtaPTVUaTBto7uALfYKnxnxWy9gWFIQhW8EKIEJa7HOJzI%2BiDoyS%2B6scSdpRQYJzzSLNZKG4ojHNvrf4H2ZT3Te3BDJZNoJ2F8DdD1ohhO8KEsTCDy8rBBjqkAZKMtwiK29ntbyLzGWystqqWfRvlL%2FisMNTxhsE0%2Ftr8NrbYH3S6s4OqrRToPsXWxKoP2g6QuEaWJX4A20zOfA8B%2BI7UGPuCbYeWvfflmFJcp54NYwPwxuJEU3v8%2BMBHV7U%2FDPt%2FW2oq3aQN7G59Vpmkj3GqxRRYVEMSIhrbOnqpAtdt8b22tGGVXsP9xhmoX%2B3zon7gCl3qCn%2BwUlv3X0hbtMVG&X-Amz-Signature=aab7c8cb23aef19bca8348971ff22d445e3abc2c9364c7bc02414f0a4b46e8dc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOGX6HHQ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T090747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDXY8AEjykgcrHuXBVe06OIR1vzFmIttstpUuN%2BtV%2BaNgIhAMWrpmEWwwNiET%2FvgMgpqO0JN3DzO%2BXTaJNDGRrrkE4jKv8DCCYQABoMNjM3NDIzMTgzODA1Igy%2F179CSBozFD08cnkq3ANTrGx5eVLa9nvGbYhz9qWdP11yKnWZYxslkXH5xePhJu3PpysXOCg9Cy38ih6gwm0ulM0vSNws0tkLSx9v9vfzyoaQsi4yE1Y2LPkH4kACk%2FHrUN%2BAz0Zf0xOv9ZV3ViwdSfnKTFhzGwTzRX75gF8Qm4RjcUvWBDNhI214jvCqM01YpkUePFGWBrf9Prt6N%2FcfuJQRpR3KztwjQXpdgxAFsbBrl4xIYDsLsTifAnJt4M3S8zeibXI%2BzYlbYRJBHhfPY%2BeWSib6uWOA54olEIN%2FS%2FhW9oMY9nMSWTvbOx3Cbr0%2BCt%2FJ2nFAZhRn9nv1o9iCwa6dm26W5iP8c2Ik1awneEZPO1IxnsgWn8HmqwO0OdzFwE5ppBno3N42uLCWY9pdE14sEvGknpQ%2B5eWz2wyjSN8QmhysF0oP8KfnP4apQoUxsE0q7UAbM%2Bx7WHZ6McTSxL60ex1CFmO85fh1s%2BMlyKnFrRP2FAqEMKdTr5uiIVG0tZ%2FPygCxSEo7UP40vG11C7pfWSiD%2BBahtaPTVUaTBto7uALfYKnxnxWy9gWFIQhW8EKIEJa7HOJzI%2BiDoyS%2B6scSdpRQYJzzSLNZKG4ojHNvrf4H2ZT3Te3BDJZNoJ2F8DdD1ohhO8KEsTCDy8rBBjqkAZKMtwiK29ntbyLzGWystqqWfRvlL%2FisMNTxhsE0%2Ftr8NrbYH3S6s4OqrRToPsXWxKoP2g6QuEaWJX4A20zOfA8B%2BI7UGPuCbYeWvfflmFJcp54NYwPwxuJEU3v8%2BMBHV7U%2FDPt%2FW2oq3aQN7G59Vpmkj3GqxRRYVEMSIhrbOnqpAtdt8b22tGGVXsP9xhmoX%2B3zon7gCl3qCn%2BwUlv3X0hbtMVG&X-Amz-Signature=63a6e74e826d13f8423526ac34b261d4e533ffbaa7d32bb721dd3e4f9c59c3ab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOGX6HHQ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T090747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDXY8AEjykgcrHuXBVe06OIR1vzFmIttstpUuN%2BtV%2BaNgIhAMWrpmEWwwNiET%2FvgMgpqO0JN3DzO%2BXTaJNDGRrrkE4jKv8DCCYQABoMNjM3NDIzMTgzODA1Igy%2F179CSBozFD08cnkq3ANTrGx5eVLa9nvGbYhz9qWdP11yKnWZYxslkXH5xePhJu3PpysXOCg9Cy38ih6gwm0ulM0vSNws0tkLSx9v9vfzyoaQsi4yE1Y2LPkH4kACk%2FHrUN%2BAz0Zf0xOv9ZV3ViwdSfnKTFhzGwTzRX75gF8Qm4RjcUvWBDNhI214jvCqM01YpkUePFGWBrf9Prt6N%2FcfuJQRpR3KztwjQXpdgxAFsbBrl4xIYDsLsTifAnJt4M3S8zeibXI%2BzYlbYRJBHhfPY%2BeWSib6uWOA54olEIN%2FS%2FhW9oMY9nMSWTvbOx3Cbr0%2BCt%2FJ2nFAZhRn9nv1o9iCwa6dm26W5iP8c2Ik1awneEZPO1IxnsgWn8HmqwO0OdzFwE5ppBno3N42uLCWY9pdE14sEvGknpQ%2B5eWz2wyjSN8QmhysF0oP8KfnP4apQoUxsE0q7UAbM%2Bx7WHZ6McTSxL60ex1CFmO85fh1s%2BMlyKnFrRP2FAqEMKdTr5uiIVG0tZ%2FPygCxSEo7UP40vG11C7pfWSiD%2BBahtaPTVUaTBto7uALfYKnxnxWy9gWFIQhW8EKIEJa7HOJzI%2BiDoyS%2B6scSdpRQYJzzSLNZKG4ojHNvrf4H2ZT3Te3BDJZNoJ2F8DdD1ohhO8KEsTCDy8rBBjqkAZKMtwiK29ntbyLzGWystqqWfRvlL%2FisMNTxhsE0%2Ftr8NrbYH3S6s4OqrRToPsXWxKoP2g6QuEaWJX4A20zOfA8B%2BI7UGPuCbYeWvfflmFJcp54NYwPwxuJEU3v8%2BMBHV7U%2FDPt%2FW2oq3aQN7G59Vpmkj3GqxRRYVEMSIhrbOnqpAtdt8b22tGGVXsP9xhmoX%2B3zon7gCl3qCn%2BwUlv3X0hbtMVG&X-Amz-Signature=78b6110a649f88f56c916905bd818b84562477113b165860a8c022c4675513c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOGX6HHQ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T090747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDXY8AEjykgcrHuXBVe06OIR1vzFmIttstpUuN%2BtV%2BaNgIhAMWrpmEWwwNiET%2FvgMgpqO0JN3DzO%2BXTaJNDGRrrkE4jKv8DCCYQABoMNjM3NDIzMTgzODA1Igy%2F179CSBozFD08cnkq3ANTrGx5eVLa9nvGbYhz9qWdP11yKnWZYxslkXH5xePhJu3PpysXOCg9Cy38ih6gwm0ulM0vSNws0tkLSx9v9vfzyoaQsi4yE1Y2LPkH4kACk%2FHrUN%2BAz0Zf0xOv9ZV3ViwdSfnKTFhzGwTzRX75gF8Qm4RjcUvWBDNhI214jvCqM01YpkUePFGWBrf9Prt6N%2FcfuJQRpR3KztwjQXpdgxAFsbBrl4xIYDsLsTifAnJt4M3S8zeibXI%2BzYlbYRJBHhfPY%2BeWSib6uWOA54olEIN%2FS%2FhW9oMY9nMSWTvbOx3Cbr0%2BCt%2FJ2nFAZhRn9nv1o9iCwa6dm26W5iP8c2Ik1awneEZPO1IxnsgWn8HmqwO0OdzFwE5ppBno3N42uLCWY9pdE14sEvGknpQ%2B5eWz2wyjSN8QmhysF0oP8KfnP4apQoUxsE0q7UAbM%2Bx7WHZ6McTSxL60ex1CFmO85fh1s%2BMlyKnFrRP2FAqEMKdTr5uiIVG0tZ%2FPygCxSEo7UP40vG11C7pfWSiD%2BBahtaPTVUaTBto7uALfYKnxnxWy9gWFIQhW8EKIEJa7HOJzI%2BiDoyS%2B6scSdpRQYJzzSLNZKG4ojHNvrf4H2ZT3Te3BDJZNoJ2F8DdD1ohhO8KEsTCDy8rBBjqkAZKMtwiK29ntbyLzGWystqqWfRvlL%2FisMNTxhsE0%2Ftr8NrbYH3S6s4OqrRToPsXWxKoP2g6QuEaWJX4A20zOfA8B%2BI7UGPuCbYeWvfflmFJcp54NYwPwxuJEU3v8%2BMBHV7U%2FDPt%2FW2oq3aQN7G59Vpmkj3GqxRRYVEMSIhrbOnqpAtdt8b22tGGVXsP9xhmoX%2B3zon7gCl3qCn%2BwUlv3X0hbtMVG&X-Amz-Signature=e0d2fe621f55a12ec55a97f1e4e0196761214c36a83ea5e149311f0dddd9e96c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOGX6HHQ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T090747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDXY8AEjykgcrHuXBVe06OIR1vzFmIttstpUuN%2BtV%2BaNgIhAMWrpmEWwwNiET%2FvgMgpqO0JN3DzO%2BXTaJNDGRrrkE4jKv8DCCYQABoMNjM3NDIzMTgzODA1Igy%2F179CSBozFD08cnkq3ANTrGx5eVLa9nvGbYhz9qWdP11yKnWZYxslkXH5xePhJu3PpysXOCg9Cy38ih6gwm0ulM0vSNws0tkLSx9v9vfzyoaQsi4yE1Y2LPkH4kACk%2FHrUN%2BAz0Zf0xOv9ZV3ViwdSfnKTFhzGwTzRX75gF8Qm4RjcUvWBDNhI214jvCqM01YpkUePFGWBrf9Prt6N%2FcfuJQRpR3KztwjQXpdgxAFsbBrl4xIYDsLsTifAnJt4M3S8zeibXI%2BzYlbYRJBHhfPY%2BeWSib6uWOA54olEIN%2FS%2FhW9oMY9nMSWTvbOx3Cbr0%2BCt%2FJ2nFAZhRn9nv1o9iCwa6dm26W5iP8c2Ik1awneEZPO1IxnsgWn8HmqwO0OdzFwE5ppBno3N42uLCWY9pdE14sEvGknpQ%2B5eWz2wyjSN8QmhysF0oP8KfnP4apQoUxsE0q7UAbM%2Bx7WHZ6McTSxL60ex1CFmO85fh1s%2BMlyKnFrRP2FAqEMKdTr5uiIVG0tZ%2FPygCxSEo7UP40vG11C7pfWSiD%2BBahtaPTVUaTBto7uALfYKnxnxWy9gWFIQhW8EKIEJa7HOJzI%2BiDoyS%2B6scSdpRQYJzzSLNZKG4ojHNvrf4H2ZT3Te3BDJZNoJ2F8DdD1ohhO8KEsTCDy8rBBjqkAZKMtwiK29ntbyLzGWystqqWfRvlL%2FisMNTxhsE0%2Ftr8NrbYH3S6s4OqrRToPsXWxKoP2g6QuEaWJX4A20zOfA8B%2BI7UGPuCbYeWvfflmFJcp54NYwPwxuJEU3v8%2BMBHV7U%2FDPt%2FW2oq3aQN7G59Vpmkj3GqxRRYVEMSIhrbOnqpAtdt8b22tGGVXsP9xhmoX%2B3zon7gCl3qCn%2BwUlv3X0hbtMVG&X-Amz-Signature=8ed1ec570823a5bc54d02b3b07d92b5f3ff7af6c4565f9fbc9ea2b510a06eb32&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOGX6HHQ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T090747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDXY8AEjykgcrHuXBVe06OIR1vzFmIttstpUuN%2BtV%2BaNgIhAMWrpmEWwwNiET%2FvgMgpqO0JN3DzO%2BXTaJNDGRrrkE4jKv8DCCYQABoMNjM3NDIzMTgzODA1Igy%2F179CSBozFD08cnkq3ANTrGx5eVLa9nvGbYhz9qWdP11yKnWZYxslkXH5xePhJu3PpysXOCg9Cy38ih6gwm0ulM0vSNws0tkLSx9v9vfzyoaQsi4yE1Y2LPkH4kACk%2FHrUN%2BAz0Zf0xOv9ZV3ViwdSfnKTFhzGwTzRX75gF8Qm4RjcUvWBDNhI214jvCqM01YpkUePFGWBrf9Prt6N%2FcfuJQRpR3KztwjQXpdgxAFsbBrl4xIYDsLsTifAnJt4M3S8zeibXI%2BzYlbYRJBHhfPY%2BeWSib6uWOA54olEIN%2FS%2FhW9oMY9nMSWTvbOx3Cbr0%2BCt%2FJ2nFAZhRn9nv1o9iCwa6dm26W5iP8c2Ik1awneEZPO1IxnsgWn8HmqwO0OdzFwE5ppBno3N42uLCWY9pdE14sEvGknpQ%2B5eWz2wyjSN8QmhysF0oP8KfnP4apQoUxsE0q7UAbM%2Bx7WHZ6McTSxL60ex1CFmO85fh1s%2BMlyKnFrRP2FAqEMKdTr5uiIVG0tZ%2FPygCxSEo7UP40vG11C7pfWSiD%2BBahtaPTVUaTBto7uALfYKnxnxWy9gWFIQhW8EKIEJa7HOJzI%2BiDoyS%2B6scSdpRQYJzzSLNZKG4ojHNvrf4H2ZT3Te3BDJZNoJ2F8DdD1ohhO8KEsTCDy8rBBjqkAZKMtwiK29ntbyLzGWystqqWfRvlL%2FisMNTxhsE0%2Ftr8NrbYH3S6s4OqrRToPsXWxKoP2g6QuEaWJX4A20zOfA8B%2BI7UGPuCbYeWvfflmFJcp54NYwPwxuJEU3v8%2BMBHV7U%2FDPt%2FW2oq3aQN7G59Vpmkj3GqxRRYVEMSIhrbOnqpAtdt8b22tGGVXsP9xhmoX%2B3zon7gCl3qCn%2BwUlv3X0hbtMVG&X-Amz-Signature=522672acf2ac3082fb4beadcd179c0e83950e1c74e95f37958ef9e6402f43e46&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
