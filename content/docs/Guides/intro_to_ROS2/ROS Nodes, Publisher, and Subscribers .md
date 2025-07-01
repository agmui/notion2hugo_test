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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ONN5CCS%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCqkSo79Nn2tVQ9x9QBPtPhARDjYvAXADuWIZ6Z8wEJAiEA%2BZv3IRymFC2LfmB7%2Fr0QHx8nJvpC75H8hW%2F3WFDPzOEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdi1avVAed%2BE207dircA1yty2XeOx7COXEKuPlCv8czsS9E1mzwlh4BjrZ1tRTR6PJ8Pv2OjevzDxAgT0jELOzYiQTA4K%2Buxn9jSNL0DjxtmrnnqyyQ3b12P08y4jr1CmBv8iJ3TYFZuQqiTyUhmlc%2BLZmlY0KCqnvZHs6gRKWZvzBqqTU5orVhs9UX%2B1cU%2Bo1h6ODJshDJ21ej4pUCFdI36%2FOgqU%2FDdEqELFdCdLP5MppnK0PUolsTYpNCUUWiVGULrRSJQwb1gh4lBws6bMkUx%2BiB%2BLtd4t7YsREkCepTW7LDq6p43xQxTPo%2F6ukLwA60JGUsKUpH5eYy0luorn0SvV8z%2B3bLyIjK5Id47X4c0ZTFHyKFAJ6aRhC5uTQK27jm8ZbZSLiSA2shBszMisqgCRdjCL66mgGiYgK0UxQ1pT2xs4ebdsw%2FRhfJCu%2FtEQwMAYEHI8Dn49QzGJDF%2F5CtEE7R6Dic0PKcn4LKPcJyPVjlmaRvvc7kxXt0OoG%2Bwe2vKuEzIELW8NIwBeldJczhNbiicb%2FI4ExoqyuAUmsHCrK4aRZJexockkIJElW%2B6mjQvYgki1ncm8f5eI2c%2BTNnF2wct%2FBFyJW6pfsNvfGwhTxX1qISWmaPghX1KPolg4GbUXgaBdyAXI6EML7MjMMGOqUBQmK2V9M9nTbplgnbElI%2B0K%2F%2F5TYl6qEh%2BeJHmZFgs5emVDozukMyenzHbhnPuwsNdfPcEA%2FvD3a7OEr1GN6jxBKaZUPwMg%2B3zYtmfIGEMxbShMgFktmTPpM46BYwTWAiKMNwl%2FJnMU3GRnlfi7lHSXkfCGZ0IDz4ilBh5TBY5xuHN2jQ1aafr0SKK%2B3A3uWHWVYWWb1AkukXaXql%2FrIuHzMQdvS0&X-Amz-Signature=910528a4a33241672838c20a3bcf6d2e044746a53283808fd558c41e42e34879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ONN5CCS%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCqkSo79Nn2tVQ9x9QBPtPhARDjYvAXADuWIZ6Z8wEJAiEA%2BZv3IRymFC2LfmB7%2Fr0QHx8nJvpC75H8hW%2F3WFDPzOEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdi1avVAed%2BE207dircA1yty2XeOx7COXEKuPlCv8czsS9E1mzwlh4BjrZ1tRTR6PJ8Pv2OjevzDxAgT0jELOzYiQTA4K%2Buxn9jSNL0DjxtmrnnqyyQ3b12P08y4jr1CmBv8iJ3TYFZuQqiTyUhmlc%2BLZmlY0KCqnvZHs6gRKWZvzBqqTU5orVhs9UX%2B1cU%2Bo1h6ODJshDJ21ej4pUCFdI36%2FOgqU%2FDdEqELFdCdLP5MppnK0PUolsTYpNCUUWiVGULrRSJQwb1gh4lBws6bMkUx%2BiB%2BLtd4t7YsREkCepTW7LDq6p43xQxTPo%2F6ukLwA60JGUsKUpH5eYy0luorn0SvV8z%2B3bLyIjK5Id47X4c0ZTFHyKFAJ6aRhC5uTQK27jm8ZbZSLiSA2shBszMisqgCRdjCL66mgGiYgK0UxQ1pT2xs4ebdsw%2FRhfJCu%2FtEQwMAYEHI8Dn49QzGJDF%2F5CtEE7R6Dic0PKcn4LKPcJyPVjlmaRvvc7kxXt0OoG%2Bwe2vKuEzIELW8NIwBeldJczhNbiicb%2FI4ExoqyuAUmsHCrK4aRZJexockkIJElW%2B6mjQvYgki1ncm8f5eI2c%2BTNnF2wct%2FBFyJW6pfsNvfGwhTxX1qISWmaPghX1KPolg4GbUXgaBdyAXI6EML7MjMMGOqUBQmK2V9M9nTbplgnbElI%2B0K%2F%2F5TYl6qEh%2BeJHmZFgs5emVDozukMyenzHbhnPuwsNdfPcEA%2FvD3a7OEr1GN6jxBKaZUPwMg%2B3zYtmfIGEMxbShMgFktmTPpM46BYwTWAiKMNwl%2FJnMU3GRnlfi7lHSXkfCGZ0IDz4ilBh5TBY5xuHN2jQ1aafr0SKK%2B3A3uWHWVYWWb1AkukXaXql%2FrIuHzMQdvS0&X-Amz-Signature=10417cffeba5cbac7778502ce28214c8be432f1c4e4ccab38e7d0aa8e78c91e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ONN5CCS%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCqkSo79Nn2tVQ9x9QBPtPhARDjYvAXADuWIZ6Z8wEJAiEA%2BZv3IRymFC2LfmB7%2Fr0QHx8nJvpC75H8hW%2F3WFDPzOEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdi1avVAed%2BE207dircA1yty2XeOx7COXEKuPlCv8czsS9E1mzwlh4BjrZ1tRTR6PJ8Pv2OjevzDxAgT0jELOzYiQTA4K%2Buxn9jSNL0DjxtmrnnqyyQ3b12P08y4jr1CmBv8iJ3TYFZuQqiTyUhmlc%2BLZmlY0KCqnvZHs6gRKWZvzBqqTU5orVhs9UX%2B1cU%2Bo1h6ODJshDJ21ej4pUCFdI36%2FOgqU%2FDdEqELFdCdLP5MppnK0PUolsTYpNCUUWiVGULrRSJQwb1gh4lBws6bMkUx%2BiB%2BLtd4t7YsREkCepTW7LDq6p43xQxTPo%2F6ukLwA60JGUsKUpH5eYy0luorn0SvV8z%2B3bLyIjK5Id47X4c0ZTFHyKFAJ6aRhC5uTQK27jm8ZbZSLiSA2shBszMisqgCRdjCL66mgGiYgK0UxQ1pT2xs4ebdsw%2FRhfJCu%2FtEQwMAYEHI8Dn49QzGJDF%2F5CtEE7R6Dic0PKcn4LKPcJyPVjlmaRvvc7kxXt0OoG%2Bwe2vKuEzIELW8NIwBeldJczhNbiicb%2FI4ExoqyuAUmsHCrK4aRZJexockkIJElW%2B6mjQvYgki1ncm8f5eI2c%2BTNnF2wct%2FBFyJW6pfsNvfGwhTxX1qISWmaPghX1KPolg4GbUXgaBdyAXI6EML7MjMMGOqUBQmK2V9M9nTbplgnbElI%2B0K%2F%2F5TYl6qEh%2BeJHmZFgs5emVDozukMyenzHbhnPuwsNdfPcEA%2FvD3a7OEr1GN6jxBKaZUPwMg%2B3zYtmfIGEMxbShMgFktmTPpM46BYwTWAiKMNwl%2FJnMU3GRnlfi7lHSXkfCGZ0IDz4ilBh5TBY5xuHN2jQ1aafr0SKK%2B3A3uWHWVYWWb1AkukXaXql%2FrIuHzMQdvS0&X-Amz-Signature=163f0250a7249234be8b9363d8550dd6c6046ff5fb857b97a709f3c15c541531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ONN5CCS%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCqkSo79Nn2tVQ9x9QBPtPhARDjYvAXADuWIZ6Z8wEJAiEA%2BZv3IRymFC2LfmB7%2Fr0QHx8nJvpC75H8hW%2F3WFDPzOEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdi1avVAed%2BE207dircA1yty2XeOx7COXEKuPlCv8czsS9E1mzwlh4BjrZ1tRTR6PJ8Pv2OjevzDxAgT0jELOzYiQTA4K%2Buxn9jSNL0DjxtmrnnqyyQ3b12P08y4jr1CmBv8iJ3TYFZuQqiTyUhmlc%2BLZmlY0KCqnvZHs6gRKWZvzBqqTU5orVhs9UX%2B1cU%2Bo1h6ODJshDJ21ej4pUCFdI36%2FOgqU%2FDdEqELFdCdLP5MppnK0PUolsTYpNCUUWiVGULrRSJQwb1gh4lBws6bMkUx%2BiB%2BLtd4t7YsREkCepTW7LDq6p43xQxTPo%2F6ukLwA60JGUsKUpH5eYy0luorn0SvV8z%2B3bLyIjK5Id47X4c0ZTFHyKFAJ6aRhC5uTQK27jm8ZbZSLiSA2shBszMisqgCRdjCL66mgGiYgK0UxQ1pT2xs4ebdsw%2FRhfJCu%2FtEQwMAYEHI8Dn49QzGJDF%2F5CtEE7R6Dic0PKcn4LKPcJyPVjlmaRvvc7kxXt0OoG%2Bwe2vKuEzIELW8NIwBeldJczhNbiicb%2FI4ExoqyuAUmsHCrK4aRZJexockkIJElW%2B6mjQvYgki1ncm8f5eI2c%2BTNnF2wct%2FBFyJW6pfsNvfGwhTxX1qISWmaPghX1KPolg4GbUXgaBdyAXI6EML7MjMMGOqUBQmK2V9M9nTbplgnbElI%2B0K%2F%2F5TYl6qEh%2BeJHmZFgs5emVDozukMyenzHbhnPuwsNdfPcEA%2FvD3a7OEr1GN6jxBKaZUPwMg%2B3zYtmfIGEMxbShMgFktmTPpM46BYwTWAiKMNwl%2FJnMU3GRnlfi7lHSXkfCGZ0IDz4ilBh5TBY5xuHN2jQ1aafr0SKK%2B3A3uWHWVYWWb1AkukXaXql%2FrIuHzMQdvS0&X-Amz-Signature=6be609ba6717c61953d2b95cc0bf0cdc42162bb0021a41c08ea5999557602e27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ONN5CCS%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCqkSo79Nn2tVQ9x9QBPtPhARDjYvAXADuWIZ6Z8wEJAiEA%2BZv3IRymFC2LfmB7%2Fr0QHx8nJvpC75H8hW%2F3WFDPzOEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdi1avVAed%2BE207dircA1yty2XeOx7COXEKuPlCv8czsS9E1mzwlh4BjrZ1tRTR6PJ8Pv2OjevzDxAgT0jELOzYiQTA4K%2Buxn9jSNL0DjxtmrnnqyyQ3b12P08y4jr1CmBv8iJ3TYFZuQqiTyUhmlc%2BLZmlY0KCqnvZHs6gRKWZvzBqqTU5orVhs9UX%2B1cU%2Bo1h6ODJshDJ21ej4pUCFdI36%2FOgqU%2FDdEqELFdCdLP5MppnK0PUolsTYpNCUUWiVGULrRSJQwb1gh4lBws6bMkUx%2BiB%2BLtd4t7YsREkCepTW7LDq6p43xQxTPo%2F6ukLwA60JGUsKUpH5eYy0luorn0SvV8z%2B3bLyIjK5Id47X4c0ZTFHyKFAJ6aRhC5uTQK27jm8ZbZSLiSA2shBszMisqgCRdjCL66mgGiYgK0UxQ1pT2xs4ebdsw%2FRhfJCu%2FtEQwMAYEHI8Dn49QzGJDF%2F5CtEE7R6Dic0PKcn4LKPcJyPVjlmaRvvc7kxXt0OoG%2Bwe2vKuEzIELW8NIwBeldJczhNbiicb%2FI4ExoqyuAUmsHCrK4aRZJexockkIJElW%2B6mjQvYgki1ncm8f5eI2c%2BTNnF2wct%2FBFyJW6pfsNvfGwhTxX1qISWmaPghX1KPolg4GbUXgaBdyAXI6EML7MjMMGOqUBQmK2V9M9nTbplgnbElI%2B0K%2F%2F5TYl6qEh%2BeJHmZFgs5emVDozukMyenzHbhnPuwsNdfPcEA%2FvD3a7OEr1GN6jxBKaZUPwMg%2B3zYtmfIGEMxbShMgFktmTPpM46BYwTWAiKMNwl%2FJnMU3GRnlfi7lHSXkfCGZ0IDz4ilBh5TBY5xuHN2jQ1aafr0SKK%2B3A3uWHWVYWWb1AkukXaXql%2FrIuHzMQdvS0&X-Amz-Signature=fb84c72482bde8cdcb0a07af28d4f588df1fb6d6911f47f56b71db49836e6463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ONN5CCS%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCqkSo79Nn2tVQ9x9QBPtPhARDjYvAXADuWIZ6Z8wEJAiEA%2BZv3IRymFC2LfmB7%2Fr0QHx8nJvpC75H8hW%2F3WFDPzOEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdi1avVAed%2BE207dircA1yty2XeOx7COXEKuPlCv8czsS9E1mzwlh4BjrZ1tRTR6PJ8Pv2OjevzDxAgT0jELOzYiQTA4K%2Buxn9jSNL0DjxtmrnnqyyQ3b12P08y4jr1CmBv8iJ3TYFZuQqiTyUhmlc%2BLZmlY0KCqnvZHs6gRKWZvzBqqTU5orVhs9UX%2B1cU%2Bo1h6ODJshDJ21ej4pUCFdI36%2FOgqU%2FDdEqELFdCdLP5MppnK0PUolsTYpNCUUWiVGULrRSJQwb1gh4lBws6bMkUx%2BiB%2BLtd4t7YsREkCepTW7LDq6p43xQxTPo%2F6ukLwA60JGUsKUpH5eYy0luorn0SvV8z%2B3bLyIjK5Id47X4c0ZTFHyKFAJ6aRhC5uTQK27jm8ZbZSLiSA2shBszMisqgCRdjCL66mgGiYgK0UxQ1pT2xs4ebdsw%2FRhfJCu%2FtEQwMAYEHI8Dn49QzGJDF%2F5CtEE7R6Dic0PKcn4LKPcJyPVjlmaRvvc7kxXt0OoG%2Bwe2vKuEzIELW8NIwBeldJczhNbiicb%2FI4ExoqyuAUmsHCrK4aRZJexockkIJElW%2B6mjQvYgki1ncm8f5eI2c%2BTNnF2wct%2FBFyJW6pfsNvfGwhTxX1qISWmaPghX1KPolg4GbUXgaBdyAXI6EML7MjMMGOqUBQmK2V9M9nTbplgnbElI%2B0K%2F%2F5TYl6qEh%2BeJHmZFgs5emVDozukMyenzHbhnPuwsNdfPcEA%2FvD3a7OEr1GN6jxBKaZUPwMg%2B3zYtmfIGEMxbShMgFktmTPpM46BYwTWAiKMNwl%2FJnMU3GRnlfi7lHSXkfCGZ0IDz4ilBh5TBY5xuHN2jQ1aafr0SKK%2B3A3uWHWVYWWb1AkukXaXql%2FrIuHzMQdvS0&X-Amz-Signature=1a4e0ddb47277ead0133ab71b7957afb4746e5817b687b18f12eec69f076f7ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ONN5CCS%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCqkSo79Nn2tVQ9x9QBPtPhARDjYvAXADuWIZ6Z8wEJAiEA%2BZv3IRymFC2LfmB7%2Fr0QHx8nJvpC75H8hW%2F3WFDPzOEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdi1avVAed%2BE207dircA1yty2XeOx7COXEKuPlCv8czsS9E1mzwlh4BjrZ1tRTR6PJ8Pv2OjevzDxAgT0jELOzYiQTA4K%2Buxn9jSNL0DjxtmrnnqyyQ3b12P08y4jr1CmBv8iJ3TYFZuQqiTyUhmlc%2BLZmlY0KCqnvZHs6gRKWZvzBqqTU5orVhs9UX%2B1cU%2Bo1h6ODJshDJ21ej4pUCFdI36%2FOgqU%2FDdEqELFdCdLP5MppnK0PUolsTYpNCUUWiVGULrRSJQwb1gh4lBws6bMkUx%2BiB%2BLtd4t7YsREkCepTW7LDq6p43xQxTPo%2F6ukLwA60JGUsKUpH5eYy0luorn0SvV8z%2B3bLyIjK5Id47X4c0ZTFHyKFAJ6aRhC5uTQK27jm8ZbZSLiSA2shBszMisqgCRdjCL66mgGiYgK0UxQ1pT2xs4ebdsw%2FRhfJCu%2FtEQwMAYEHI8Dn49QzGJDF%2F5CtEE7R6Dic0PKcn4LKPcJyPVjlmaRvvc7kxXt0OoG%2Bwe2vKuEzIELW8NIwBeldJczhNbiicb%2FI4ExoqyuAUmsHCrK4aRZJexockkIJElW%2B6mjQvYgki1ncm8f5eI2c%2BTNnF2wct%2FBFyJW6pfsNvfGwhTxX1qISWmaPghX1KPolg4GbUXgaBdyAXI6EML7MjMMGOqUBQmK2V9M9nTbplgnbElI%2B0K%2F%2F5TYl6qEh%2BeJHmZFgs5emVDozukMyenzHbhnPuwsNdfPcEA%2FvD3a7OEr1GN6jxBKaZUPwMg%2B3zYtmfIGEMxbShMgFktmTPpM46BYwTWAiKMNwl%2FJnMU3GRnlfi7lHSXkfCGZ0IDz4ilBh5TBY5xuHN2jQ1aafr0SKK%2B3A3uWHWVYWWb1AkukXaXql%2FrIuHzMQdvS0&X-Amz-Signature=22819f2eae0a7a51c6b0672b0bde04e42d6dde925cc9a539fadf5f8839b9de7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ONN5CCS%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCqkSo79Nn2tVQ9x9QBPtPhARDjYvAXADuWIZ6Z8wEJAiEA%2BZv3IRymFC2LfmB7%2Fr0QHx8nJvpC75H8hW%2F3WFDPzOEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdi1avVAed%2BE207dircA1yty2XeOx7COXEKuPlCv8czsS9E1mzwlh4BjrZ1tRTR6PJ8Pv2OjevzDxAgT0jELOzYiQTA4K%2Buxn9jSNL0DjxtmrnnqyyQ3b12P08y4jr1CmBv8iJ3TYFZuQqiTyUhmlc%2BLZmlY0KCqnvZHs6gRKWZvzBqqTU5orVhs9UX%2B1cU%2Bo1h6ODJshDJ21ej4pUCFdI36%2FOgqU%2FDdEqELFdCdLP5MppnK0PUolsTYpNCUUWiVGULrRSJQwb1gh4lBws6bMkUx%2BiB%2BLtd4t7YsREkCepTW7LDq6p43xQxTPo%2F6ukLwA60JGUsKUpH5eYy0luorn0SvV8z%2B3bLyIjK5Id47X4c0ZTFHyKFAJ6aRhC5uTQK27jm8ZbZSLiSA2shBszMisqgCRdjCL66mgGiYgK0UxQ1pT2xs4ebdsw%2FRhfJCu%2FtEQwMAYEHI8Dn49QzGJDF%2F5CtEE7R6Dic0PKcn4LKPcJyPVjlmaRvvc7kxXt0OoG%2Bwe2vKuEzIELW8NIwBeldJczhNbiicb%2FI4ExoqyuAUmsHCrK4aRZJexockkIJElW%2B6mjQvYgki1ncm8f5eI2c%2BTNnF2wct%2FBFyJW6pfsNvfGwhTxX1qISWmaPghX1KPolg4GbUXgaBdyAXI6EML7MjMMGOqUBQmK2V9M9nTbplgnbElI%2B0K%2F%2F5TYl6qEh%2BeJHmZFgs5emVDozukMyenzHbhnPuwsNdfPcEA%2FvD3a7OEr1GN6jxBKaZUPwMg%2B3zYtmfIGEMxbShMgFktmTPpM46BYwTWAiKMNwl%2FJnMU3GRnlfi7lHSXkfCGZ0IDz4ilBh5TBY5xuHN2jQ1aafr0SKK%2B3A3uWHWVYWWb1AkukXaXql%2FrIuHzMQdvS0&X-Amz-Signature=fa38d285250995e2a0059754fef0186c22d6167ab9896e92052c196610e62f63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
