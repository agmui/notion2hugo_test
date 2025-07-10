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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROAY4A7V%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVMfMs%2FxmOoJ5lQs1xqWFSBgCeLNztIncnDuZCzqIgtAiBCPl%2BCQI2h21%2FmLoA3R3l5hk7gLwo%2FD%2B051pBuddZG8yqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh0rVmWaIKLc%2FctUyKtwDApUJOv363ZNE8Thd1FfJ2uE%2BVOmDgWBcbDzm7TTixuVToFsR7QioebpqggiUQD0e2x%2FLhbfSFNFzT6UROX2%2FfyLPp8vaJrtb4rLOaGfnu7J2FIIaFjOJgV6%2FJu8C8uApJisIcWgpfVLpQwZhpTPmJud3RHGOYpTJFVWJtVUQZf2iDVt3Fz1Fa8X%2Fc4wR%2F%2FkpNv%2BrKk8IwWLtE8EgwQermzSiMdtFmf8X6LKheVNyf1Ae7pJpFxMHiy3qgUHSmZawcQC0NqahrT7k1g3jhsR%2BXWlJMHl0EeQjnUXO27f%2FCdE1IhDOYUGnHPTx0rgsEJ2QcZ9xmqskU23fqgP0s7OXN%2BobnMIikwCSywu0uEy3U5KwFZ31J%2BOz3w7csbWrzVbh69YbYmveCkUHqqGFW7p51xkB8vJrdXImgNve3NLuagh0J3jkFXjP%2BEasuIVUijjmXU3z0%2BEpF8KFdtTE29HP2XG0LNVH%2B3Nc5NsYqFY7skqcOSgKKOzUkiIYuRQH%2FrKRCpSFuVmSNDtQo%2Bui4tp4o7qEf%2B0J3xbbtlLNrgLvCV6o85gl1fJklPDVol%2B24YLz9zbyTA0CX4wymnwLYF%2BqXL%2F5ULlYk21G2wRgwmkn72pPQSoXEtYrKZwatVkwn%2F6%2BwwY6pgGS0F2eTJAcQCqC9qgyFN%2F1tLvW9v10fMecAOppPOnZsKEJRXTHVnUY0SFEApSMB%2FlZfNXAAYhOdDuGdo%2Bm%2B5AhTz4hUCrOyF8j7xfP%2Bicix6VFZocQh1IeSdibQwznqCBqBXFZ98vkWmQZRqKa1YfVy68bWvNg87JGbY0oGi1mtLpMVkqYfZYqbdgKhYG7rprQ2NuofQ3ungtmNeJyS%2BG9ystk1nwy&X-Amz-Signature=103c934e6f2d47b08bd9f9bf74346a97752f7c75defaa21ece4e63edd8aeaa43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROAY4A7V%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVMfMs%2FxmOoJ5lQs1xqWFSBgCeLNztIncnDuZCzqIgtAiBCPl%2BCQI2h21%2FmLoA3R3l5hk7gLwo%2FD%2B051pBuddZG8yqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh0rVmWaIKLc%2FctUyKtwDApUJOv363ZNE8Thd1FfJ2uE%2BVOmDgWBcbDzm7TTixuVToFsR7QioebpqggiUQD0e2x%2FLhbfSFNFzT6UROX2%2FfyLPp8vaJrtb4rLOaGfnu7J2FIIaFjOJgV6%2FJu8C8uApJisIcWgpfVLpQwZhpTPmJud3RHGOYpTJFVWJtVUQZf2iDVt3Fz1Fa8X%2Fc4wR%2F%2FkpNv%2BrKk8IwWLtE8EgwQermzSiMdtFmf8X6LKheVNyf1Ae7pJpFxMHiy3qgUHSmZawcQC0NqahrT7k1g3jhsR%2BXWlJMHl0EeQjnUXO27f%2FCdE1IhDOYUGnHPTx0rgsEJ2QcZ9xmqskU23fqgP0s7OXN%2BobnMIikwCSywu0uEy3U5KwFZ31J%2BOz3w7csbWrzVbh69YbYmveCkUHqqGFW7p51xkB8vJrdXImgNve3NLuagh0J3jkFXjP%2BEasuIVUijjmXU3z0%2BEpF8KFdtTE29HP2XG0LNVH%2B3Nc5NsYqFY7skqcOSgKKOzUkiIYuRQH%2FrKRCpSFuVmSNDtQo%2Bui4tp4o7qEf%2B0J3xbbtlLNrgLvCV6o85gl1fJklPDVol%2B24YLz9zbyTA0CX4wymnwLYF%2BqXL%2F5ULlYk21G2wRgwmkn72pPQSoXEtYrKZwatVkwn%2F6%2BwwY6pgGS0F2eTJAcQCqC9qgyFN%2F1tLvW9v10fMecAOppPOnZsKEJRXTHVnUY0SFEApSMB%2FlZfNXAAYhOdDuGdo%2Bm%2B5AhTz4hUCrOyF8j7xfP%2Bicix6VFZocQh1IeSdibQwznqCBqBXFZ98vkWmQZRqKa1YfVy68bWvNg87JGbY0oGi1mtLpMVkqYfZYqbdgKhYG7rprQ2NuofQ3ungtmNeJyS%2BG9ystk1nwy&X-Amz-Signature=70d81f504bb6e5dd2a61e8ab470509c68d0562ed0f459f90d3b32e3b01be6b35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROAY4A7V%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVMfMs%2FxmOoJ5lQs1xqWFSBgCeLNztIncnDuZCzqIgtAiBCPl%2BCQI2h21%2FmLoA3R3l5hk7gLwo%2FD%2B051pBuddZG8yqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh0rVmWaIKLc%2FctUyKtwDApUJOv363ZNE8Thd1FfJ2uE%2BVOmDgWBcbDzm7TTixuVToFsR7QioebpqggiUQD0e2x%2FLhbfSFNFzT6UROX2%2FfyLPp8vaJrtb4rLOaGfnu7J2FIIaFjOJgV6%2FJu8C8uApJisIcWgpfVLpQwZhpTPmJud3RHGOYpTJFVWJtVUQZf2iDVt3Fz1Fa8X%2Fc4wR%2F%2FkpNv%2BrKk8IwWLtE8EgwQermzSiMdtFmf8X6LKheVNyf1Ae7pJpFxMHiy3qgUHSmZawcQC0NqahrT7k1g3jhsR%2BXWlJMHl0EeQjnUXO27f%2FCdE1IhDOYUGnHPTx0rgsEJ2QcZ9xmqskU23fqgP0s7OXN%2BobnMIikwCSywu0uEy3U5KwFZ31J%2BOz3w7csbWrzVbh69YbYmveCkUHqqGFW7p51xkB8vJrdXImgNve3NLuagh0J3jkFXjP%2BEasuIVUijjmXU3z0%2BEpF8KFdtTE29HP2XG0LNVH%2B3Nc5NsYqFY7skqcOSgKKOzUkiIYuRQH%2FrKRCpSFuVmSNDtQo%2Bui4tp4o7qEf%2B0J3xbbtlLNrgLvCV6o85gl1fJklPDVol%2B24YLz9zbyTA0CX4wymnwLYF%2BqXL%2F5ULlYk21G2wRgwmkn72pPQSoXEtYrKZwatVkwn%2F6%2BwwY6pgGS0F2eTJAcQCqC9qgyFN%2F1tLvW9v10fMecAOppPOnZsKEJRXTHVnUY0SFEApSMB%2FlZfNXAAYhOdDuGdo%2Bm%2B5AhTz4hUCrOyF8j7xfP%2Bicix6VFZocQh1IeSdibQwznqCBqBXFZ98vkWmQZRqKa1YfVy68bWvNg87JGbY0oGi1mtLpMVkqYfZYqbdgKhYG7rprQ2NuofQ3ungtmNeJyS%2BG9ystk1nwy&X-Amz-Signature=e59ca2686a7d52301b189d0e1f606ff3795eda9081bdb263e412714d9f7b341e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROAY4A7V%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVMfMs%2FxmOoJ5lQs1xqWFSBgCeLNztIncnDuZCzqIgtAiBCPl%2BCQI2h21%2FmLoA3R3l5hk7gLwo%2FD%2B051pBuddZG8yqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh0rVmWaIKLc%2FctUyKtwDApUJOv363ZNE8Thd1FfJ2uE%2BVOmDgWBcbDzm7TTixuVToFsR7QioebpqggiUQD0e2x%2FLhbfSFNFzT6UROX2%2FfyLPp8vaJrtb4rLOaGfnu7J2FIIaFjOJgV6%2FJu8C8uApJisIcWgpfVLpQwZhpTPmJud3RHGOYpTJFVWJtVUQZf2iDVt3Fz1Fa8X%2Fc4wR%2F%2FkpNv%2BrKk8IwWLtE8EgwQermzSiMdtFmf8X6LKheVNyf1Ae7pJpFxMHiy3qgUHSmZawcQC0NqahrT7k1g3jhsR%2BXWlJMHl0EeQjnUXO27f%2FCdE1IhDOYUGnHPTx0rgsEJ2QcZ9xmqskU23fqgP0s7OXN%2BobnMIikwCSywu0uEy3U5KwFZ31J%2BOz3w7csbWrzVbh69YbYmveCkUHqqGFW7p51xkB8vJrdXImgNve3NLuagh0J3jkFXjP%2BEasuIVUijjmXU3z0%2BEpF8KFdtTE29HP2XG0LNVH%2B3Nc5NsYqFY7skqcOSgKKOzUkiIYuRQH%2FrKRCpSFuVmSNDtQo%2Bui4tp4o7qEf%2B0J3xbbtlLNrgLvCV6o85gl1fJklPDVol%2B24YLz9zbyTA0CX4wymnwLYF%2BqXL%2F5ULlYk21G2wRgwmkn72pPQSoXEtYrKZwatVkwn%2F6%2BwwY6pgGS0F2eTJAcQCqC9qgyFN%2F1tLvW9v10fMecAOppPOnZsKEJRXTHVnUY0SFEApSMB%2FlZfNXAAYhOdDuGdo%2Bm%2B5AhTz4hUCrOyF8j7xfP%2Bicix6VFZocQh1IeSdibQwznqCBqBXFZ98vkWmQZRqKa1YfVy68bWvNg87JGbY0oGi1mtLpMVkqYfZYqbdgKhYG7rprQ2NuofQ3ungtmNeJyS%2BG9ystk1nwy&X-Amz-Signature=dbf016f0b4594568b4294c3e499648ca6fe624ea6d06aa90bbe71ecb6c6c6962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROAY4A7V%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVMfMs%2FxmOoJ5lQs1xqWFSBgCeLNztIncnDuZCzqIgtAiBCPl%2BCQI2h21%2FmLoA3R3l5hk7gLwo%2FD%2B051pBuddZG8yqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh0rVmWaIKLc%2FctUyKtwDApUJOv363ZNE8Thd1FfJ2uE%2BVOmDgWBcbDzm7TTixuVToFsR7QioebpqggiUQD0e2x%2FLhbfSFNFzT6UROX2%2FfyLPp8vaJrtb4rLOaGfnu7J2FIIaFjOJgV6%2FJu8C8uApJisIcWgpfVLpQwZhpTPmJud3RHGOYpTJFVWJtVUQZf2iDVt3Fz1Fa8X%2Fc4wR%2F%2FkpNv%2BrKk8IwWLtE8EgwQermzSiMdtFmf8X6LKheVNyf1Ae7pJpFxMHiy3qgUHSmZawcQC0NqahrT7k1g3jhsR%2BXWlJMHl0EeQjnUXO27f%2FCdE1IhDOYUGnHPTx0rgsEJ2QcZ9xmqskU23fqgP0s7OXN%2BobnMIikwCSywu0uEy3U5KwFZ31J%2BOz3w7csbWrzVbh69YbYmveCkUHqqGFW7p51xkB8vJrdXImgNve3NLuagh0J3jkFXjP%2BEasuIVUijjmXU3z0%2BEpF8KFdtTE29HP2XG0LNVH%2B3Nc5NsYqFY7skqcOSgKKOzUkiIYuRQH%2FrKRCpSFuVmSNDtQo%2Bui4tp4o7qEf%2B0J3xbbtlLNrgLvCV6o85gl1fJklPDVol%2B24YLz9zbyTA0CX4wymnwLYF%2BqXL%2F5ULlYk21G2wRgwmkn72pPQSoXEtYrKZwatVkwn%2F6%2BwwY6pgGS0F2eTJAcQCqC9qgyFN%2F1tLvW9v10fMecAOppPOnZsKEJRXTHVnUY0SFEApSMB%2FlZfNXAAYhOdDuGdo%2Bm%2B5AhTz4hUCrOyF8j7xfP%2Bicix6VFZocQh1IeSdibQwznqCBqBXFZ98vkWmQZRqKa1YfVy68bWvNg87JGbY0oGi1mtLpMVkqYfZYqbdgKhYG7rprQ2NuofQ3ungtmNeJyS%2BG9ystk1nwy&X-Amz-Signature=32c0cd3ecb26b8df34bb8299d0421df62ed752acec20a5f79b7e8f53d6d34ea1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROAY4A7V%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVMfMs%2FxmOoJ5lQs1xqWFSBgCeLNztIncnDuZCzqIgtAiBCPl%2BCQI2h21%2FmLoA3R3l5hk7gLwo%2FD%2B051pBuddZG8yqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh0rVmWaIKLc%2FctUyKtwDApUJOv363ZNE8Thd1FfJ2uE%2BVOmDgWBcbDzm7TTixuVToFsR7QioebpqggiUQD0e2x%2FLhbfSFNFzT6UROX2%2FfyLPp8vaJrtb4rLOaGfnu7J2FIIaFjOJgV6%2FJu8C8uApJisIcWgpfVLpQwZhpTPmJud3RHGOYpTJFVWJtVUQZf2iDVt3Fz1Fa8X%2Fc4wR%2F%2FkpNv%2BrKk8IwWLtE8EgwQermzSiMdtFmf8X6LKheVNyf1Ae7pJpFxMHiy3qgUHSmZawcQC0NqahrT7k1g3jhsR%2BXWlJMHl0EeQjnUXO27f%2FCdE1IhDOYUGnHPTx0rgsEJ2QcZ9xmqskU23fqgP0s7OXN%2BobnMIikwCSywu0uEy3U5KwFZ31J%2BOz3w7csbWrzVbh69YbYmveCkUHqqGFW7p51xkB8vJrdXImgNve3NLuagh0J3jkFXjP%2BEasuIVUijjmXU3z0%2BEpF8KFdtTE29HP2XG0LNVH%2B3Nc5NsYqFY7skqcOSgKKOzUkiIYuRQH%2FrKRCpSFuVmSNDtQo%2Bui4tp4o7qEf%2B0J3xbbtlLNrgLvCV6o85gl1fJklPDVol%2B24YLz9zbyTA0CX4wymnwLYF%2BqXL%2F5ULlYk21G2wRgwmkn72pPQSoXEtYrKZwatVkwn%2F6%2BwwY6pgGS0F2eTJAcQCqC9qgyFN%2F1tLvW9v10fMecAOppPOnZsKEJRXTHVnUY0SFEApSMB%2FlZfNXAAYhOdDuGdo%2Bm%2B5AhTz4hUCrOyF8j7xfP%2Bicix6VFZocQh1IeSdibQwznqCBqBXFZ98vkWmQZRqKa1YfVy68bWvNg87JGbY0oGi1mtLpMVkqYfZYqbdgKhYG7rprQ2NuofQ3ungtmNeJyS%2BG9ystk1nwy&X-Amz-Signature=7bb5f766a77c4a881a6c7f6e78807ab19927882e24a81a83861c4782a76303af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROAY4A7V%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVMfMs%2FxmOoJ5lQs1xqWFSBgCeLNztIncnDuZCzqIgtAiBCPl%2BCQI2h21%2FmLoA3R3l5hk7gLwo%2FD%2B051pBuddZG8yqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh0rVmWaIKLc%2FctUyKtwDApUJOv363ZNE8Thd1FfJ2uE%2BVOmDgWBcbDzm7TTixuVToFsR7QioebpqggiUQD0e2x%2FLhbfSFNFzT6UROX2%2FfyLPp8vaJrtb4rLOaGfnu7J2FIIaFjOJgV6%2FJu8C8uApJisIcWgpfVLpQwZhpTPmJud3RHGOYpTJFVWJtVUQZf2iDVt3Fz1Fa8X%2Fc4wR%2F%2FkpNv%2BrKk8IwWLtE8EgwQermzSiMdtFmf8X6LKheVNyf1Ae7pJpFxMHiy3qgUHSmZawcQC0NqahrT7k1g3jhsR%2BXWlJMHl0EeQjnUXO27f%2FCdE1IhDOYUGnHPTx0rgsEJ2QcZ9xmqskU23fqgP0s7OXN%2BobnMIikwCSywu0uEy3U5KwFZ31J%2BOz3w7csbWrzVbh69YbYmveCkUHqqGFW7p51xkB8vJrdXImgNve3NLuagh0J3jkFXjP%2BEasuIVUijjmXU3z0%2BEpF8KFdtTE29HP2XG0LNVH%2B3Nc5NsYqFY7skqcOSgKKOzUkiIYuRQH%2FrKRCpSFuVmSNDtQo%2Bui4tp4o7qEf%2B0J3xbbtlLNrgLvCV6o85gl1fJklPDVol%2B24YLz9zbyTA0CX4wymnwLYF%2BqXL%2F5ULlYk21G2wRgwmkn72pPQSoXEtYrKZwatVkwn%2F6%2BwwY6pgGS0F2eTJAcQCqC9qgyFN%2F1tLvW9v10fMecAOppPOnZsKEJRXTHVnUY0SFEApSMB%2FlZfNXAAYhOdDuGdo%2Bm%2B5AhTz4hUCrOyF8j7xfP%2Bicix6VFZocQh1IeSdibQwznqCBqBXFZ98vkWmQZRqKa1YfVy68bWvNg87JGbY0oGi1mtLpMVkqYfZYqbdgKhYG7rprQ2NuofQ3ungtmNeJyS%2BG9ystk1nwy&X-Amz-Signature=47f97f6936b0b5058f89229fbd28216116381f9b3de0f9610c1f8706f6c960fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROAY4A7V%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVMfMs%2FxmOoJ5lQs1xqWFSBgCeLNztIncnDuZCzqIgtAiBCPl%2BCQI2h21%2FmLoA3R3l5hk7gLwo%2FD%2B051pBuddZG8yqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh0rVmWaIKLc%2FctUyKtwDApUJOv363ZNE8Thd1FfJ2uE%2BVOmDgWBcbDzm7TTixuVToFsR7QioebpqggiUQD0e2x%2FLhbfSFNFzT6UROX2%2FfyLPp8vaJrtb4rLOaGfnu7J2FIIaFjOJgV6%2FJu8C8uApJisIcWgpfVLpQwZhpTPmJud3RHGOYpTJFVWJtVUQZf2iDVt3Fz1Fa8X%2Fc4wR%2F%2FkpNv%2BrKk8IwWLtE8EgwQermzSiMdtFmf8X6LKheVNyf1Ae7pJpFxMHiy3qgUHSmZawcQC0NqahrT7k1g3jhsR%2BXWlJMHl0EeQjnUXO27f%2FCdE1IhDOYUGnHPTx0rgsEJ2QcZ9xmqskU23fqgP0s7OXN%2BobnMIikwCSywu0uEy3U5KwFZ31J%2BOz3w7csbWrzVbh69YbYmveCkUHqqGFW7p51xkB8vJrdXImgNve3NLuagh0J3jkFXjP%2BEasuIVUijjmXU3z0%2BEpF8KFdtTE29HP2XG0LNVH%2B3Nc5NsYqFY7skqcOSgKKOzUkiIYuRQH%2FrKRCpSFuVmSNDtQo%2Bui4tp4o7qEf%2B0J3xbbtlLNrgLvCV6o85gl1fJklPDVol%2B24YLz9zbyTA0CX4wymnwLYF%2BqXL%2F5ULlYk21G2wRgwmkn72pPQSoXEtYrKZwatVkwn%2F6%2BwwY6pgGS0F2eTJAcQCqC9qgyFN%2F1tLvW9v10fMecAOppPOnZsKEJRXTHVnUY0SFEApSMB%2FlZfNXAAYhOdDuGdo%2Bm%2B5AhTz4hUCrOyF8j7xfP%2Bicix6VFZocQh1IeSdibQwznqCBqBXFZ98vkWmQZRqKa1YfVy68bWvNg87JGbY0oGi1mtLpMVkqYfZYqbdgKhYG7rprQ2NuofQ3ungtmNeJyS%2BG9ystk1nwy&X-Amz-Signature=e7359783c8c2b08480a9595123a08cfb896ca6db59e313ba4986ee0a9a4b3b28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
