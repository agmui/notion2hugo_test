---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYPF556Q%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5rtNG0UCnzXbf3pLxWVEQc0l8Fhi0lskDLZ8GYbbTVAiBtHJiNLnzcPLPDuBYbQdq%2BR2OqipHwR7blxDP15ui%2BPyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMfbBwCpOm8ELihzq5KtwDS7gRzK6%2BmK7cZFOowchXXZ%2FguJbWVgsh%2FUuVIAHldDMR5BF5UH41h8Hl%2FAQMuVoeUaoM3fGRPmMxqaCrPSfvqZRJ6wG4WvsU3zUDMzMdwTGV3aquHtQlDxTGAeMGoxEr5uCgxzTCZeoVd7O0Yp54p9uyjxSwtNBUNPtSbRSky8iEr7WGEcujeeVDVVm7SniuseiuRK5Ud%2BRjsL2BWpVxpTuvc5om9dFv9BfODeOdmMQzWq2%2FvkDI79v9jgIWCKbC8Y6x0ocRxaepteUOyPOxDTvPtt8JptbNOub2xrgGKfJ%2B5jsjxvZZs%2BxZnaM2%2F7ofTqsQBmiLss8KiGJcwwyYZTWPZWsPyndOy%2FcP%2B9VJu0j0B8lTngEHNDYC4EUdVqkAyLbLUIWGs%2BLZ6a8PhL%2B6dTa6D30vND3kOxWfbANwQVdI3L3y1e2d%2BjnhPRI4n06MFdE6i2t7uZwrQBrrunPLZMTTS5bLeqKKUy66SGKDY1E5ZeqBGTu%2BxtoJMGcKrPkIuQ7R9Stuzlswbef3ROz9sKdj5LW9nHrwUip4mbqCiqbyn%2BpJ1kXdZSZjMj47wI5n%2FiRTGQe9hDkCCJryszRz%2FS%2F6ok0edHtx4AiWZE0xWkwpY%2BjgsOqzfUwxO6wwxNDwxAY6pgGc14K5ihuRBx9EiHmnKqvf9LHJC%2Fyu3nVDN1z2ELbPTHTU%2F5wqFx%2BIIkTTbLSbxAAyojxxU4Nt8JDmRijJC%2B5U27z7h578iF2RYwwL76ARzS9a3ydvXCyGHKzBNfWHF1iOkNAhbKaQzBSAHzaAdimjhxK2sV7A65OFRnApZboBGC2zEz3TLvd%2FKqYl4dKBNLLt1ONlDL%2B7OaffM1qc95g9AMgInFtN&X-Amz-Signature=d0ca72ba5f595722e7651eebd6190c6d4a5457f8627d6bce5ef3d51a75d4faad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYPF556Q%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5rtNG0UCnzXbf3pLxWVEQc0l8Fhi0lskDLZ8GYbbTVAiBtHJiNLnzcPLPDuBYbQdq%2BR2OqipHwR7blxDP15ui%2BPyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMfbBwCpOm8ELihzq5KtwDS7gRzK6%2BmK7cZFOowchXXZ%2FguJbWVgsh%2FUuVIAHldDMR5BF5UH41h8Hl%2FAQMuVoeUaoM3fGRPmMxqaCrPSfvqZRJ6wG4WvsU3zUDMzMdwTGV3aquHtQlDxTGAeMGoxEr5uCgxzTCZeoVd7O0Yp54p9uyjxSwtNBUNPtSbRSky8iEr7WGEcujeeVDVVm7SniuseiuRK5Ud%2BRjsL2BWpVxpTuvc5om9dFv9BfODeOdmMQzWq2%2FvkDI79v9jgIWCKbC8Y6x0ocRxaepteUOyPOxDTvPtt8JptbNOub2xrgGKfJ%2B5jsjxvZZs%2BxZnaM2%2F7ofTqsQBmiLss8KiGJcwwyYZTWPZWsPyndOy%2FcP%2B9VJu0j0B8lTngEHNDYC4EUdVqkAyLbLUIWGs%2BLZ6a8PhL%2B6dTa6D30vND3kOxWfbANwQVdI3L3y1e2d%2BjnhPRI4n06MFdE6i2t7uZwrQBrrunPLZMTTS5bLeqKKUy66SGKDY1E5ZeqBGTu%2BxtoJMGcKrPkIuQ7R9Stuzlswbef3ROz9sKdj5LW9nHrwUip4mbqCiqbyn%2BpJ1kXdZSZjMj47wI5n%2FiRTGQe9hDkCCJryszRz%2FS%2F6ok0edHtx4AiWZE0xWkwpY%2BjgsOqzfUwxO6wwxNDwxAY6pgGc14K5ihuRBx9EiHmnKqvf9LHJC%2Fyu3nVDN1z2ELbPTHTU%2F5wqFx%2BIIkTTbLSbxAAyojxxU4Nt8JDmRijJC%2B5U27z7h578iF2RYwwL76ARzS9a3ydvXCyGHKzBNfWHF1iOkNAhbKaQzBSAHzaAdimjhxK2sV7A65OFRnApZboBGC2zEz3TLvd%2FKqYl4dKBNLLt1ONlDL%2B7OaffM1qc95g9AMgInFtN&X-Amz-Signature=d6f3c968072e5742c5aadc2a09d861064a229aec25bc320794f476b972550efe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYPF556Q%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5rtNG0UCnzXbf3pLxWVEQc0l8Fhi0lskDLZ8GYbbTVAiBtHJiNLnzcPLPDuBYbQdq%2BR2OqipHwR7blxDP15ui%2BPyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMfbBwCpOm8ELihzq5KtwDS7gRzK6%2BmK7cZFOowchXXZ%2FguJbWVgsh%2FUuVIAHldDMR5BF5UH41h8Hl%2FAQMuVoeUaoM3fGRPmMxqaCrPSfvqZRJ6wG4WvsU3zUDMzMdwTGV3aquHtQlDxTGAeMGoxEr5uCgxzTCZeoVd7O0Yp54p9uyjxSwtNBUNPtSbRSky8iEr7WGEcujeeVDVVm7SniuseiuRK5Ud%2BRjsL2BWpVxpTuvc5om9dFv9BfODeOdmMQzWq2%2FvkDI79v9jgIWCKbC8Y6x0ocRxaepteUOyPOxDTvPtt8JptbNOub2xrgGKfJ%2B5jsjxvZZs%2BxZnaM2%2F7ofTqsQBmiLss8KiGJcwwyYZTWPZWsPyndOy%2FcP%2B9VJu0j0B8lTngEHNDYC4EUdVqkAyLbLUIWGs%2BLZ6a8PhL%2B6dTa6D30vND3kOxWfbANwQVdI3L3y1e2d%2BjnhPRI4n06MFdE6i2t7uZwrQBrrunPLZMTTS5bLeqKKUy66SGKDY1E5ZeqBGTu%2BxtoJMGcKrPkIuQ7R9Stuzlswbef3ROz9sKdj5LW9nHrwUip4mbqCiqbyn%2BpJ1kXdZSZjMj47wI5n%2FiRTGQe9hDkCCJryszRz%2FS%2F6ok0edHtx4AiWZE0xWkwpY%2BjgsOqzfUwxO6wwxNDwxAY6pgGc14K5ihuRBx9EiHmnKqvf9LHJC%2Fyu3nVDN1z2ELbPTHTU%2F5wqFx%2BIIkTTbLSbxAAyojxxU4Nt8JDmRijJC%2B5U27z7h578iF2RYwwL76ARzS9a3ydvXCyGHKzBNfWHF1iOkNAhbKaQzBSAHzaAdimjhxK2sV7A65OFRnApZboBGC2zEz3TLvd%2FKqYl4dKBNLLt1ONlDL%2B7OaffM1qc95g9AMgInFtN&X-Amz-Signature=9925d3c5ab310ee93d8f0e32ce18991feec3db8d3a8cf5c9404dae06aac037f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYPF556Q%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5rtNG0UCnzXbf3pLxWVEQc0l8Fhi0lskDLZ8GYbbTVAiBtHJiNLnzcPLPDuBYbQdq%2BR2OqipHwR7blxDP15ui%2BPyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMfbBwCpOm8ELihzq5KtwDS7gRzK6%2BmK7cZFOowchXXZ%2FguJbWVgsh%2FUuVIAHldDMR5BF5UH41h8Hl%2FAQMuVoeUaoM3fGRPmMxqaCrPSfvqZRJ6wG4WvsU3zUDMzMdwTGV3aquHtQlDxTGAeMGoxEr5uCgxzTCZeoVd7O0Yp54p9uyjxSwtNBUNPtSbRSky8iEr7WGEcujeeVDVVm7SniuseiuRK5Ud%2BRjsL2BWpVxpTuvc5om9dFv9BfODeOdmMQzWq2%2FvkDI79v9jgIWCKbC8Y6x0ocRxaepteUOyPOxDTvPtt8JptbNOub2xrgGKfJ%2B5jsjxvZZs%2BxZnaM2%2F7ofTqsQBmiLss8KiGJcwwyYZTWPZWsPyndOy%2FcP%2B9VJu0j0B8lTngEHNDYC4EUdVqkAyLbLUIWGs%2BLZ6a8PhL%2B6dTa6D30vND3kOxWfbANwQVdI3L3y1e2d%2BjnhPRI4n06MFdE6i2t7uZwrQBrrunPLZMTTS5bLeqKKUy66SGKDY1E5ZeqBGTu%2BxtoJMGcKrPkIuQ7R9Stuzlswbef3ROz9sKdj5LW9nHrwUip4mbqCiqbyn%2BpJ1kXdZSZjMj47wI5n%2FiRTGQe9hDkCCJryszRz%2FS%2F6ok0edHtx4AiWZE0xWkwpY%2BjgsOqzfUwxO6wwxNDwxAY6pgGc14K5ihuRBx9EiHmnKqvf9LHJC%2Fyu3nVDN1z2ELbPTHTU%2F5wqFx%2BIIkTTbLSbxAAyojxxU4Nt8JDmRijJC%2B5U27z7h578iF2RYwwL76ARzS9a3ydvXCyGHKzBNfWHF1iOkNAhbKaQzBSAHzaAdimjhxK2sV7A65OFRnApZboBGC2zEz3TLvd%2FKqYl4dKBNLLt1ONlDL%2B7OaffM1qc95g9AMgInFtN&X-Amz-Signature=c80e28f0931bff2a2f0ca8c24858a566f50ea4f6d7af77536bb4b54e5af0bd58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYPF556Q%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5rtNG0UCnzXbf3pLxWVEQc0l8Fhi0lskDLZ8GYbbTVAiBtHJiNLnzcPLPDuBYbQdq%2BR2OqipHwR7blxDP15ui%2BPyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMfbBwCpOm8ELihzq5KtwDS7gRzK6%2BmK7cZFOowchXXZ%2FguJbWVgsh%2FUuVIAHldDMR5BF5UH41h8Hl%2FAQMuVoeUaoM3fGRPmMxqaCrPSfvqZRJ6wG4WvsU3zUDMzMdwTGV3aquHtQlDxTGAeMGoxEr5uCgxzTCZeoVd7O0Yp54p9uyjxSwtNBUNPtSbRSky8iEr7WGEcujeeVDVVm7SniuseiuRK5Ud%2BRjsL2BWpVxpTuvc5om9dFv9BfODeOdmMQzWq2%2FvkDI79v9jgIWCKbC8Y6x0ocRxaepteUOyPOxDTvPtt8JptbNOub2xrgGKfJ%2B5jsjxvZZs%2BxZnaM2%2F7ofTqsQBmiLss8KiGJcwwyYZTWPZWsPyndOy%2FcP%2B9VJu0j0B8lTngEHNDYC4EUdVqkAyLbLUIWGs%2BLZ6a8PhL%2B6dTa6D30vND3kOxWfbANwQVdI3L3y1e2d%2BjnhPRI4n06MFdE6i2t7uZwrQBrrunPLZMTTS5bLeqKKUy66SGKDY1E5ZeqBGTu%2BxtoJMGcKrPkIuQ7R9Stuzlswbef3ROz9sKdj5LW9nHrwUip4mbqCiqbyn%2BpJ1kXdZSZjMj47wI5n%2FiRTGQe9hDkCCJryszRz%2FS%2F6ok0edHtx4AiWZE0xWkwpY%2BjgsOqzfUwxO6wwxNDwxAY6pgGc14K5ihuRBx9EiHmnKqvf9LHJC%2Fyu3nVDN1z2ELbPTHTU%2F5wqFx%2BIIkTTbLSbxAAyojxxU4Nt8JDmRijJC%2B5U27z7h578iF2RYwwL76ARzS9a3ydvXCyGHKzBNfWHF1iOkNAhbKaQzBSAHzaAdimjhxK2sV7A65OFRnApZboBGC2zEz3TLvd%2FKqYl4dKBNLLt1ONlDL%2B7OaffM1qc95g9AMgInFtN&X-Amz-Signature=7529ee0eca92d64f6327063cba1587259487c674dd75c963e65f9900914c1e30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYPF556Q%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5rtNG0UCnzXbf3pLxWVEQc0l8Fhi0lskDLZ8GYbbTVAiBtHJiNLnzcPLPDuBYbQdq%2BR2OqipHwR7blxDP15ui%2BPyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMfbBwCpOm8ELihzq5KtwDS7gRzK6%2BmK7cZFOowchXXZ%2FguJbWVgsh%2FUuVIAHldDMR5BF5UH41h8Hl%2FAQMuVoeUaoM3fGRPmMxqaCrPSfvqZRJ6wG4WvsU3zUDMzMdwTGV3aquHtQlDxTGAeMGoxEr5uCgxzTCZeoVd7O0Yp54p9uyjxSwtNBUNPtSbRSky8iEr7WGEcujeeVDVVm7SniuseiuRK5Ud%2BRjsL2BWpVxpTuvc5om9dFv9BfODeOdmMQzWq2%2FvkDI79v9jgIWCKbC8Y6x0ocRxaepteUOyPOxDTvPtt8JptbNOub2xrgGKfJ%2B5jsjxvZZs%2BxZnaM2%2F7ofTqsQBmiLss8KiGJcwwyYZTWPZWsPyndOy%2FcP%2B9VJu0j0B8lTngEHNDYC4EUdVqkAyLbLUIWGs%2BLZ6a8PhL%2B6dTa6D30vND3kOxWfbANwQVdI3L3y1e2d%2BjnhPRI4n06MFdE6i2t7uZwrQBrrunPLZMTTS5bLeqKKUy66SGKDY1E5ZeqBGTu%2BxtoJMGcKrPkIuQ7R9Stuzlswbef3ROz9sKdj5LW9nHrwUip4mbqCiqbyn%2BpJ1kXdZSZjMj47wI5n%2FiRTGQe9hDkCCJryszRz%2FS%2F6ok0edHtx4AiWZE0xWkwpY%2BjgsOqzfUwxO6wwxNDwxAY6pgGc14K5ihuRBx9EiHmnKqvf9LHJC%2Fyu3nVDN1z2ELbPTHTU%2F5wqFx%2BIIkTTbLSbxAAyojxxU4Nt8JDmRijJC%2B5U27z7h578iF2RYwwL76ARzS9a3ydvXCyGHKzBNfWHF1iOkNAhbKaQzBSAHzaAdimjhxK2sV7A65OFRnApZboBGC2zEz3TLvd%2FKqYl4dKBNLLt1ONlDL%2B7OaffM1qc95g9AMgInFtN&X-Amz-Signature=7e4288d1852bc2c9a70bef7b503fbe79fb2ae2292629ed834516d0d443e7ab5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYPF556Q%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5rtNG0UCnzXbf3pLxWVEQc0l8Fhi0lskDLZ8GYbbTVAiBtHJiNLnzcPLPDuBYbQdq%2BR2OqipHwR7blxDP15ui%2BPyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMfbBwCpOm8ELihzq5KtwDS7gRzK6%2BmK7cZFOowchXXZ%2FguJbWVgsh%2FUuVIAHldDMR5BF5UH41h8Hl%2FAQMuVoeUaoM3fGRPmMxqaCrPSfvqZRJ6wG4WvsU3zUDMzMdwTGV3aquHtQlDxTGAeMGoxEr5uCgxzTCZeoVd7O0Yp54p9uyjxSwtNBUNPtSbRSky8iEr7WGEcujeeVDVVm7SniuseiuRK5Ud%2BRjsL2BWpVxpTuvc5om9dFv9BfODeOdmMQzWq2%2FvkDI79v9jgIWCKbC8Y6x0ocRxaepteUOyPOxDTvPtt8JptbNOub2xrgGKfJ%2B5jsjxvZZs%2BxZnaM2%2F7ofTqsQBmiLss8KiGJcwwyYZTWPZWsPyndOy%2FcP%2B9VJu0j0B8lTngEHNDYC4EUdVqkAyLbLUIWGs%2BLZ6a8PhL%2B6dTa6D30vND3kOxWfbANwQVdI3L3y1e2d%2BjnhPRI4n06MFdE6i2t7uZwrQBrrunPLZMTTS5bLeqKKUy66SGKDY1E5ZeqBGTu%2BxtoJMGcKrPkIuQ7R9Stuzlswbef3ROz9sKdj5LW9nHrwUip4mbqCiqbyn%2BpJ1kXdZSZjMj47wI5n%2FiRTGQe9hDkCCJryszRz%2FS%2F6ok0edHtx4AiWZE0xWkwpY%2BjgsOqzfUwxO6wwxNDwxAY6pgGc14K5ihuRBx9EiHmnKqvf9LHJC%2Fyu3nVDN1z2ELbPTHTU%2F5wqFx%2BIIkTTbLSbxAAyojxxU4Nt8JDmRijJC%2B5U27z7h578iF2RYwwL76ARzS9a3ydvXCyGHKzBNfWHF1iOkNAhbKaQzBSAHzaAdimjhxK2sV7A65OFRnApZboBGC2zEz3TLvd%2FKqYl4dKBNLLt1ONlDL%2B7OaffM1qc95g9AMgInFtN&X-Amz-Signature=4aca457863a00cbe70a5a0e20c025b794c706aa7ebf8f4427c13018714ca768e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYPF556Q%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5rtNG0UCnzXbf3pLxWVEQc0l8Fhi0lskDLZ8GYbbTVAiBtHJiNLnzcPLPDuBYbQdq%2BR2OqipHwR7blxDP15ui%2BPyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMfbBwCpOm8ELihzq5KtwDS7gRzK6%2BmK7cZFOowchXXZ%2FguJbWVgsh%2FUuVIAHldDMR5BF5UH41h8Hl%2FAQMuVoeUaoM3fGRPmMxqaCrPSfvqZRJ6wG4WvsU3zUDMzMdwTGV3aquHtQlDxTGAeMGoxEr5uCgxzTCZeoVd7O0Yp54p9uyjxSwtNBUNPtSbRSky8iEr7WGEcujeeVDVVm7SniuseiuRK5Ud%2BRjsL2BWpVxpTuvc5om9dFv9BfODeOdmMQzWq2%2FvkDI79v9jgIWCKbC8Y6x0ocRxaepteUOyPOxDTvPtt8JptbNOub2xrgGKfJ%2B5jsjxvZZs%2BxZnaM2%2F7ofTqsQBmiLss8KiGJcwwyYZTWPZWsPyndOy%2FcP%2B9VJu0j0B8lTngEHNDYC4EUdVqkAyLbLUIWGs%2BLZ6a8PhL%2B6dTa6D30vND3kOxWfbANwQVdI3L3y1e2d%2BjnhPRI4n06MFdE6i2t7uZwrQBrrunPLZMTTS5bLeqKKUy66SGKDY1E5ZeqBGTu%2BxtoJMGcKrPkIuQ7R9Stuzlswbef3ROz9sKdj5LW9nHrwUip4mbqCiqbyn%2BpJ1kXdZSZjMj47wI5n%2FiRTGQe9hDkCCJryszRz%2FS%2F6ok0edHtx4AiWZE0xWkwpY%2BjgsOqzfUwxO6wwxNDwxAY6pgGc14K5ihuRBx9EiHmnKqvf9LHJC%2Fyu3nVDN1z2ELbPTHTU%2F5wqFx%2BIIkTTbLSbxAAyojxxU4Nt8JDmRijJC%2B5U27z7h578iF2RYwwL76ARzS9a3ydvXCyGHKzBNfWHF1iOkNAhbKaQzBSAHzaAdimjhxK2sV7A65OFRnApZboBGC2zEz3TLvd%2FKqYl4dKBNLLt1ONlDL%2B7OaffM1qc95g9AMgInFtN&X-Amz-Signature=f6c63b68784047c35ee6deb27e97d89cc8550e43307b50dec1665e8fd1854ce8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
