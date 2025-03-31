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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXPKA4CG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIEsd7uvS8hESHdQVEv0FEntjfv9GzokSKhjd4qPvZl6uAiEA4kxNU9Z0ZgbdAc37o2Qs%2B6CdEvLXzD9Y5%2B49QbjZKjoqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6jTD%2BVWWZyndLNyCrcAz7IvAd32A2GsImII0U8cnAJMXOTZiL23HFIcT9NAeS5hsj7CUgBqSs9UqBr5gmLns3bJoDPVUUeBSb1WKsQXnXx9qTvGmITwBXY%2F8lf9vmbHDY1%2FBHCDuoKr4pGgWvkFbrTti0vhXYhLaJj1Q%2F4CON52i7oB6i2qJDTir2TPYmh4BllotcHBjA1me%2FiYnDBx1NSsOztHS6lL0rWtxPcPMHgs03V6FMvApmY0nk9Uh3rPtGbResNoh6UDx0UwBXWU60sc7QlMEWvQ89g5Sxw32kd0mlKEQd3NtgDYC6ylgj3unNsN14lO2scTp43kzRyIrMIKjL352E%2FNE9MWMzTp3o7KzmNh%2FEBN8Ha2e%2BnXKJnTiwJK%2BRuXyFdqtZcUP99mYU%2FfTumCz1xgSi98Lm6%2FnTzqNxtEAlyYlGfvSndote3Hk4C6taFBFCUOBlaVo%2Fpe8zJWNQGoJy7a17n9JLsq0psnQVRdWhGFSjKIHEhekpHVYhhxT0V2GgqOUCyrtlBsknr43GXmhRu%2BRA2IXCrcxQh4%2Bw0k%2FNy%2BqxTnaW%2BPnkVIT3hkXsRrwnih%2BDhVBgXRpONCjBkWFqaqzWcI9zLe103pkrC%2FbKnAhqZRwBNDRjWPfdL0vYZqWEW8bx8MJOKqr8GOqUB%2BF%2BmITot5WuwKfsBb5W7FZiXOdA8DEzwHVG6CKS5jSRJlFjcWXx%2BTt7qw0ci86hsEkC79boZXoyN9M0cNmk5n3OZGdE%2FGGNq%2Fzklu0ViE6khrTIVuhM4037Y0fAscsvSbriyD1jtjsGVxavj%2FHl1KptbslEWIJfbMJahZ9QhRU4FfAzhkG2fUmUdkXIs4iEDaENkneWN3nS1oTnlDYZtzvTCK0U1&X-Amz-Signature=557b66a778d9e7369f80393eaba17bfa0c6c484abcb4dcb336b447ec560c7417&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXPKA4CG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIEsd7uvS8hESHdQVEv0FEntjfv9GzokSKhjd4qPvZl6uAiEA4kxNU9Z0ZgbdAc37o2Qs%2B6CdEvLXzD9Y5%2B49QbjZKjoqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6jTD%2BVWWZyndLNyCrcAz7IvAd32A2GsImII0U8cnAJMXOTZiL23HFIcT9NAeS5hsj7CUgBqSs9UqBr5gmLns3bJoDPVUUeBSb1WKsQXnXx9qTvGmITwBXY%2F8lf9vmbHDY1%2FBHCDuoKr4pGgWvkFbrTti0vhXYhLaJj1Q%2F4CON52i7oB6i2qJDTir2TPYmh4BllotcHBjA1me%2FiYnDBx1NSsOztHS6lL0rWtxPcPMHgs03V6FMvApmY0nk9Uh3rPtGbResNoh6UDx0UwBXWU60sc7QlMEWvQ89g5Sxw32kd0mlKEQd3NtgDYC6ylgj3unNsN14lO2scTp43kzRyIrMIKjL352E%2FNE9MWMzTp3o7KzmNh%2FEBN8Ha2e%2BnXKJnTiwJK%2BRuXyFdqtZcUP99mYU%2FfTumCz1xgSi98Lm6%2FnTzqNxtEAlyYlGfvSndote3Hk4C6taFBFCUOBlaVo%2Fpe8zJWNQGoJy7a17n9JLsq0psnQVRdWhGFSjKIHEhekpHVYhhxT0V2GgqOUCyrtlBsknr43GXmhRu%2BRA2IXCrcxQh4%2Bw0k%2FNy%2BqxTnaW%2BPnkVIT3hkXsRrwnih%2BDhVBgXRpONCjBkWFqaqzWcI9zLe103pkrC%2FbKnAhqZRwBNDRjWPfdL0vYZqWEW8bx8MJOKqr8GOqUB%2BF%2BmITot5WuwKfsBb5W7FZiXOdA8DEzwHVG6CKS5jSRJlFjcWXx%2BTt7qw0ci86hsEkC79boZXoyN9M0cNmk5n3OZGdE%2FGGNq%2Fzklu0ViE6khrTIVuhM4037Y0fAscsvSbriyD1jtjsGVxavj%2FHl1KptbslEWIJfbMJahZ9QhRU4FfAzhkG2fUmUdkXIs4iEDaENkneWN3nS1oTnlDYZtzvTCK0U1&X-Amz-Signature=6344d19593ed91430be0ab006df8bcfac3f52eded4371d2103f6d75137f4db68&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXPKA4CG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIEsd7uvS8hESHdQVEv0FEntjfv9GzokSKhjd4qPvZl6uAiEA4kxNU9Z0ZgbdAc37o2Qs%2B6CdEvLXzD9Y5%2B49QbjZKjoqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6jTD%2BVWWZyndLNyCrcAz7IvAd32A2GsImII0U8cnAJMXOTZiL23HFIcT9NAeS5hsj7CUgBqSs9UqBr5gmLns3bJoDPVUUeBSb1WKsQXnXx9qTvGmITwBXY%2F8lf9vmbHDY1%2FBHCDuoKr4pGgWvkFbrTti0vhXYhLaJj1Q%2F4CON52i7oB6i2qJDTir2TPYmh4BllotcHBjA1me%2FiYnDBx1NSsOztHS6lL0rWtxPcPMHgs03V6FMvApmY0nk9Uh3rPtGbResNoh6UDx0UwBXWU60sc7QlMEWvQ89g5Sxw32kd0mlKEQd3NtgDYC6ylgj3unNsN14lO2scTp43kzRyIrMIKjL352E%2FNE9MWMzTp3o7KzmNh%2FEBN8Ha2e%2BnXKJnTiwJK%2BRuXyFdqtZcUP99mYU%2FfTumCz1xgSi98Lm6%2FnTzqNxtEAlyYlGfvSndote3Hk4C6taFBFCUOBlaVo%2Fpe8zJWNQGoJy7a17n9JLsq0psnQVRdWhGFSjKIHEhekpHVYhhxT0V2GgqOUCyrtlBsknr43GXmhRu%2BRA2IXCrcxQh4%2Bw0k%2FNy%2BqxTnaW%2BPnkVIT3hkXsRrwnih%2BDhVBgXRpONCjBkWFqaqzWcI9zLe103pkrC%2FbKnAhqZRwBNDRjWPfdL0vYZqWEW8bx8MJOKqr8GOqUB%2BF%2BmITot5WuwKfsBb5W7FZiXOdA8DEzwHVG6CKS5jSRJlFjcWXx%2BTt7qw0ci86hsEkC79boZXoyN9M0cNmk5n3OZGdE%2FGGNq%2Fzklu0ViE6khrTIVuhM4037Y0fAscsvSbriyD1jtjsGVxavj%2FHl1KptbslEWIJfbMJahZ9QhRU4FfAzhkG2fUmUdkXIs4iEDaENkneWN3nS1oTnlDYZtzvTCK0U1&X-Amz-Signature=de53567e5a62058557cb11bd497b678aa57f3faf7c699926db9cecbeb2539429&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXPKA4CG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIEsd7uvS8hESHdQVEv0FEntjfv9GzokSKhjd4qPvZl6uAiEA4kxNU9Z0ZgbdAc37o2Qs%2B6CdEvLXzD9Y5%2B49QbjZKjoqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6jTD%2BVWWZyndLNyCrcAz7IvAd32A2GsImII0U8cnAJMXOTZiL23HFIcT9NAeS5hsj7CUgBqSs9UqBr5gmLns3bJoDPVUUeBSb1WKsQXnXx9qTvGmITwBXY%2F8lf9vmbHDY1%2FBHCDuoKr4pGgWvkFbrTti0vhXYhLaJj1Q%2F4CON52i7oB6i2qJDTir2TPYmh4BllotcHBjA1me%2FiYnDBx1NSsOztHS6lL0rWtxPcPMHgs03V6FMvApmY0nk9Uh3rPtGbResNoh6UDx0UwBXWU60sc7QlMEWvQ89g5Sxw32kd0mlKEQd3NtgDYC6ylgj3unNsN14lO2scTp43kzRyIrMIKjL352E%2FNE9MWMzTp3o7KzmNh%2FEBN8Ha2e%2BnXKJnTiwJK%2BRuXyFdqtZcUP99mYU%2FfTumCz1xgSi98Lm6%2FnTzqNxtEAlyYlGfvSndote3Hk4C6taFBFCUOBlaVo%2Fpe8zJWNQGoJy7a17n9JLsq0psnQVRdWhGFSjKIHEhekpHVYhhxT0V2GgqOUCyrtlBsknr43GXmhRu%2BRA2IXCrcxQh4%2Bw0k%2FNy%2BqxTnaW%2BPnkVIT3hkXsRrwnih%2BDhVBgXRpONCjBkWFqaqzWcI9zLe103pkrC%2FbKnAhqZRwBNDRjWPfdL0vYZqWEW8bx8MJOKqr8GOqUB%2BF%2BmITot5WuwKfsBb5W7FZiXOdA8DEzwHVG6CKS5jSRJlFjcWXx%2BTt7qw0ci86hsEkC79boZXoyN9M0cNmk5n3OZGdE%2FGGNq%2Fzklu0ViE6khrTIVuhM4037Y0fAscsvSbriyD1jtjsGVxavj%2FHl1KptbslEWIJfbMJahZ9QhRU4FfAzhkG2fUmUdkXIs4iEDaENkneWN3nS1oTnlDYZtzvTCK0U1&X-Amz-Signature=2207542f5ebb917c9b71e227bc98a25087e4c021ced429746a782643c7f75752&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXPKA4CG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIEsd7uvS8hESHdQVEv0FEntjfv9GzokSKhjd4qPvZl6uAiEA4kxNU9Z0ZgbdAc37o2Qs%2B6CdEvLXzD9Y5%2B49QbjZKjoqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6jTD%2BVWWZyndLNyCrcAz7IvAd32A2GsImII0U8cnAJMXOTZiL23HFIcT9NAeS5hsj7CUgBqSs9UqBr5gmLns3bJoDPVUUeBSb1WKsQXnXx9qTvGmITwBXY%2F8lf9vmbHDY1%2FBHCDuoKr4pGgWvkFbrTti0vhXYhLaJj1Q%2F4CON52i7oB6i2qJDTir2TPYmh4BllotcHBjA1me%2FiYnDBx1NSsOztHS6lL0rWtxPcPMHgs03V6FMvApmY0nk9Uh3rPtGbResNoh6UDx0UwBXWU60sc7QlMEWvQ89g5Sxw32kd0mlKEQd3NtgDYC6ylgj3unNsN14lO2scTp43kzRyIrMIKjL352E%2FNE9MWMzTp3o7KzmNh%2FEBN8Ha2e%2BnXKJnTiwJK%2BRuXyFdqtZcUP99mYU%2FfTumCz1xgSi98Lm6%2FnTzqNxtEAlyYlGfvSndote3Hk4C6taFBFCUOBlaVo%2Fpe8zJWNQGoJy7a17n9JLsq0psnQVRdWhGFSjKIHEhekpHVYhhxT0V2GgqOUCyrtlBsknr43GXmhRu%2BRA2IXCrcxQh4%2Bw0k%2FNy%2BqxTnaW%2BPnkVIT3hkXsRrwnih%2BDhVBgXRpONCjBkWFqaqzWcI9zLe103pkrC%2FbKnAhqZRwBNDRjWPfdL0vYZqWEW8bx8MJOKqr8GOqUB%2BF%2BmITot5WuwKfsBb5W7FZiXOdA8DEzwHVG6CKS5jSRJlFjcWXx%2BTt7qw0ci86hsEkC79boZXoyN9M0cNmk5n3OZGdE%2FGGNq%2Fzklu0ViE6khrTIVuhM4037Y0fAscsvSbriyD1jtjsGVxavj%2FHl1KptbslEWIJfbMJahZ9QhRU4FfAzhkG2fUmUdkXIs4iEDaENkneWN3nS1oTnlDYZtzvTCK0U1&X-Amz-Signature=336c866670610b3ff937ed5d0f532ca7b096537bf5ec0f826653202f82c414f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXPKA4CG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIEsd7uvS8hESHdQVEv0FEntjfv9GzokSKhjd4qPvZl6uAiEA4kxNU9Z0ZgbdAc37o2Qs%2B6CdEvLXzD9Y5%2B49QbjZKjoqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6jTD%2BVWWZyndLNyCrcAz7IvAd32A2GsImII0U8cnAJMXOTZiL23HFIcT9NAeS5hsj7CUgBqSs9UqBr5gmLns3bJoDPVUUeBSb1WKsQXnXx9qTvGmITwBXY%2F8lf9vmbHDY1%2FBHCDuoKr4pGgWvkFbrTti0vhXYhLaJj1Q%2F4CON52i7oB6i2qJDTir2TPYmh4BllotcHBjA1me%2FiYnDBx1NSsOztHS6lL0rWtxPcPMHgs03V6FMvApmY0nk9Uh3rPtGbResNoh6UDx0UwBXWU60sc7QlMEWvQ89g5Sxw32kd0mlKEQd3NtgDYC6ylgj3unNsN14lO2scTp43kzRyIrMIKjL352E%2FNE9MWMzTp3o7KzmNh%2FEBN8Ha2e%2BnXKJnTiwJK%2BRuXyFdqtZcUP99mYU%2FfTumCz1xgSi98Lm6%2FnTzqNxtEAlyYlGfvSndote3Hk4C6taFBFCUOBlaVo%2Fpe8zJWNQGoJy7a17n9JLsq0psnQVRdWhGFSjKIHEhekpHVYhhxT0V2GgqOUCyrtlBsknr43GXmhRu%2BRA2IXCrcxQh4%2Bw0k%2FNy%2BqxTnaW%2BPnkVIT3hkXsRrwnih%2BDhVBgXRpONCjBkWFqaqzWcI9zLe103pkrC%2FbKnAhqZRwBNDRjWPfdL0vYZqWEW8bx8MJOKqr8GOqUB%2BF%2BmITot5WuwKfsBb5W7FZiXOdA8DEzwHVG6CKS5jSRJlFjcWXx%2BTt7qw0ci86hsEkC79boZXoyN9M0cNmk5n3OZGdE%2FGGNq%2Fzklu0ViE6khrTIVuhM4037Y0fAscsvSbriyD1jtjsGVxavj%2FHl1KptbslEWIJfbMJahZ9QhRU4FfAzhkG2fUmUdkXIs4iEDaENkneWN3nS1oTnlDYZtzvTCK0U1&X-Amz-Signature=82d37fe5f64025c6b4df4a922f657bc1c366a4340b8956d94f839d33c4ac811e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXPKA4CG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIEsd7uvS8hESHdQVEv0FEntjfv9GzokSKhjd4qPvZl6uAiEA4kxNU9Z0ZgbdAc37o2Qs%2B6CdEvLXzD9Y5%2B49QbjZKjoqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6jTD%2BVWWZyndLNyCrcAz7IvAd32A2GsImII0U8cnAJMXOTZiL23HFIcT9NAeS5hsj7CUgBqSs9UqBr5gmLns3bJoDPVUUeBSb1WKsQXnXx9qTvGmITwBXY%2F8lf9vmbHDY1%2FBHCDuoKr4pGgWvkFbrTti0vhXYhLaJj1Q%2F4CON52i7oB6i2qJDTir2TPYmh4BllotcHBjA1me%2FiYnDBx1NSsOztHS6lL0rWtxPcPMHgs03V6FMvApmY0nk9Uh3rPtGbResNoh6UDx0UwBXWU60sc7QlMEWvQ89g5Sxw32kd0mlKEQd3NtgDYC6ylgj3unNsN14lO2scTp43kzRyIrMIKjL352E%2FNE9MWMzTp3o7KzmNh%2FEBN8Ha2e%2BnXKJnTiwJK%2BRuXyFdqtZcUP99mYU%2FfTumCz1xgSi98Lm6%2FnTzqNxtEAlyYlGfvSndote3Hk4C6taFBFCUOBlaVo%2Fpe8zJWNQGoJy7a17n9JLsq0psnQVRdWhGFSjKIHEhekpHVYhhxT0V2GgqOUCyrtlBsknr43GXmhRu%2BRA2IXCrcxQh4%2Bw0k%2FNy%2BqxTnaW%2BPnkVIT3hkXsRrwnih%2BDhVBgXRpONCjBkWFqaqzWcI9zLe103pkrC%2FbKnAhqZRwBNDRjWPfdL0vYZqWEW8bx8MJOKqr8GOqUB%2BF%2BmITot5WuwKfsBb5W7FZiXOdA8DEzwHVG6CKS5jSRJlFjcWXx%2BTt7qw0ci86hsEkC79boZXoyN9M0cNmk5n3OZGdE%2FGGNq%2Fzklu0ViE6khrTIVuhM4037Y0fAscsvSbriyD1jtjsGVxavj%2FHl1KptbslEWIJfbMJahZ9QhRU4FfAzhkG2fUmUdkXIs4iEDaENkneWN3nS1oTnlDYZtzvTCK0U1&X-Amz-Signature=017971da3dbb4c61008efe6de6be0e98a84f3968ec3341756ae00f6dfb27b268&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXPKA4CG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIEsd7uvS8hESHdQVEv0FEntjfv9GzokSKhjd4qPvZl6uAiEA4kxNU9Z0ZgbdAc37o2Qs%2B6CdEvLXzD9Y5%2B49QbjZKjoqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6jTD%2BVWWZyndLNyCrcAz7IvAd32A2GsImII0U8cnAJMXOTZiL23HFIcT9NAeS5hsj7CUgBqSs9UqBr5gmLns3bJoDPVUUeBSb1WKsQXnXx9qTvGmITwBXY%2F8lf9vmbHDY1%2FBHCDuoKr4pGgWvkFbrTti0vhXYhLaJj1Q%2F4CON52i7oB6i2qJDTir2TPYmh4BllotcHBjA1me%2FiYnDBx1NSsOztHS6lL0rWtxPcPMHgs03V6FMvApmY0nk9Uh3rPtGbResNoh6UDx0UwBXWU60sc7QlMEWvQ89g5Sxw32kd0mlKEQd3NtgDYC6ylgj3unNsN14lO2scTp43kzRyIrMIKjL352E%2FNE9MWMzTp3o7KzmNh%2FEBN8Ha2e%2BnXKJnTiwJK%2BRuXyFdqtZcUP99mYU%2FfTumCz1xgSi98Lm6%2FnTzqNxtEAlyYlGfvSndote3Hk4C6taFBFCUOBlaVo%2Fpe8zJWNQGoJy7a17n9JLsq0psnQVRdWhGFSjKIHEhekpHVYhhxT0V2GgqOUCyrtlBsknr43GXmhRu%2BRA2IXCrcxQh4%2Bw0k%2FNy%2BqxTnaW%2BPnkVIT3hkXsRrwnih%2BDhVBgXRpONCjBkWFqaqzWcI9zLe103pkrC%2FbKnAhqZRwBNDRjWPfdL0vYZqWEW8bx8MJOKqr8GOqUB%2BF%2BmITot5WuwKfsBb5W7FZiXOdA8DEzwHVG6CKS5jSRJlFjcWXx%2BTt7qw0ci86hsEkC79boZXoyN9M0cNmk5n3OZGdE%2FGGNq%2Fzklu0ViE6khrTIVuhM4037Y0fAscsvSbriyD1jtjsGVxavj%2FHl1KptbslEWIJfbMJahZ9QhRU4FfAzhkG2fUmUdkXIs4iEDaENkneWN3nS1oTnlDYZtzvTCK0U1&X-Amz-Signature=5162f9cadca3fbff259795ae71f8efb8cbe49189f7d9aec76fe3accfee7f5bc4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
