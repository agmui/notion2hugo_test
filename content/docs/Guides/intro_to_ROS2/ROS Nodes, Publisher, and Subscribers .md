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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SOUEXRB%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID65Ct8iIE61P5%2BRN4Ae%2FZonMI%2BiMtLr4zG1OlbKqujXAiEA399qLMv5ocJlE7WzgsI92suSOA5UzDOJX1PI3G9b2BUqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMe5pXvPV6%2B7PGmdyircA2xsF5GoezTaxD%2BYyrtWpmlwZqpYaPMfwuHU8EbMJ3ojeZs2uFsSJbKWWylNXiefWL86AHGkHuOI5urbXFQVq98wRYMLShhiMddfcvcRHR3aScmNZp0Vfm2MU6YQ8fnmeemz8NWtHoP0ZfWjkDjHOj%2BF4%2FweaUoYEHarglVOB0I8DLqko7bSXqJmIU7JLMFdYQj0aQJiH8HTXtEMrzufhDge49A3gczjY6AdotCxkK02ksOHz2w88QSGJOiIsUkyLT3I002H%2FKCNULTJ%2F8P4qF%2Fu7MoZRoYuJ4JKJpBGNv%2BJ%2FrlmrYUQMTp1a1JRMNX2whDfg655Mj30ash80xibgqvuNTyZlgy0RZ%2BZbrC0TK9Md1F6rStAk%2F3BTbQ%2BspYM%2BA3RFm008HKKi9rk4%2FfTARC6Di7cVTDn7iLkl2Z6UApfs3cR4ar2AR4KvSurWdh2TvTojWZF4ibYyEQ7mmmTDP9ODDLkrpnSHK8Ohi9aeql2RORw01gGPG6kGcwBCVt5DcqOE6LrDkIIKEpeiXkaJ8zwS9EWAXqvAuzJfzSdxigddn2o2Ph41vn5n%2FS%2BqkzgfeIlJe8VgXQi1YA%2FTM88BapfNXk3PQkaFvpZrlYw9QmZPqMLyiWAFjj7rJa2MImSh78GOqUBNezDU0c9X4kgzIeDIXKB272FZY0xyq9YDllxb179jEx%2By32qYLU2zhPRsnHRc5OGC3d3%2Bf8yeRgRM8D6%2BPlskps2fuxog6%2F0Nu1SicotkKrVjTgwqvaxyt5ZZosF%2BaIrYe6c3oUEgky5MPvhu032Dq4fJQcomE2RH%2Fph4C%2BshX9qaaKwZo1DozcfbnVsHaQ4zrze55%2BJV5Wtoa%2FTzvT7zrEP%2FqFq&X-Amz-Signature=8ec36e5e21957c91eaf4b5c6ab03f6c73ee865723bea47e033e2619d7b75b2ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SOUEXRB%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID65Ct8iIE61P5%2BRN4Ae%2FZonMI%2BiMtLr4zG1OlbKqujXAiEA399qLMv5ocJlE7WzgsI92suSOA5UzDOJX1PI3G9b2BUqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMe5pXvPV6%2B7PGmdyircA2xsF5GoezTaxD%2BYyrtWpmlwZqpYaPMfwuHU8EbMJ3ojeZs2uFsSJbKWWylNXiefWL86AHGkHuOI5urbXFQVq98wRYMLShhiMddfcvcRHR3aScmNZp0Vfm2MU6YQ8fnmeemz8NWtHoP0ZfWjkDjHOj%2BF4%2FweaUoYEHarglVOB0I8DLqko7bSXqJmIU7JLMFdYQj0aQJiH8HTXtEMrzufhDge49A3gczjY6AdotCxkK02ksOHz2w88QSGJOiIsUkyLT3I002H%2FKCNULTJ%2F8P4qF%2Fu7MoZRoYuJ4JKJpBGNv%2BJ%2FrlmrYUQMTp1a1JRMNX2whDfg655Mj30ash80xibgqvuNTyZlgy0RZ%2BZbrC0TK9Md1F6rStAk%2F3BTbQ%2BspYM%2BA3RFm008HKKi9rk4%2FfTARC6Di7cVTDn7iLkl2Z6UApfs3cR4ar2AR4KvSurWdh2TvTojWZF4ibYyEQ7mmmTDP9ODDLkrpnSHK8Ohi9aeql2RORw01gGPG6kGcwBCVt5DcqOE6LrDkIIKEpeiXkaJ8zwS9EWAXqvAuzJfzSdxigddn2o2Ph41vn5n%2FS%2BqkzgfeIlJe8VgXQi1YA%2FTM88BapfNXk3PQkaFvpZrlYw9QmZPqMLyiWAFjj7rJa2MImSh78GOqUBNezDU0c9X4kgzIeDIXKB272FZY0xyq9YDllxb179jEx%2By32qYLU2zhPRsnHRc5OGC3d3%2Bf8yeRgRM8D6%2BPlskps2fuxog6%2F0Nu1SicotkKrVjTgwqvaxyt5ZZosF%2BaIrYe6c3oUEgky5MPvhu032Dq4fJQcomE2RH%2Fph4C%2BshX9qaaKwZo1DozcfbnVsHaQ4zrze55%2BJV5Wtoa%2FTzvT7zrEP%2FqFq&X-Amz-Signature=32017291442090d24c3379c0487a1525300bc643e736f8dce0681182f19eddfe&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SOUEXRB%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID65Ct8iIE61P5%2BRN4Ae%2FZonMI%2BiMtLr4zG1OlbKqujXAiEA399qLMv5ocJlE7WzgsI92suSOA5UzDOJX1PI3G9b2BUqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMe5pXvPV6%2B7PGmdyircA2xsF5GoezTaxD%2BYyrtWpmlwZqpYaPMfwuHU8EbMJ3ojeZs2uFsSJbKWWylNXiefWL86AHGkHuOI5urbXFQVq98wRYMLShhiMddfcvcRHR3aScmNZp0Vfm2MU6YQ8fnmeemz8NWtHoP0ZfWjkDjHOj%2BF4%2FweaUoYEHarglVOB0I8DLqko7bSXqJmIU7JLMFdYQj0aQJiH8HTXtEMrzufhDge49A3gczjY6AdotCxkK02ksOHz2w88QSGJOiIsUkyLT3I002H%2FKCNULTJ%2F8P4qF%2Fu7MoZRoYuJ4JKJpBGNv%2BJ%2FrlmrYUQMTp1a1JRMNX2whDfg655Mj30ash80xibgqvuNTyZlgy0RZ%2BZbrC0TK9Md1F6rStAk%2F3BTbQ%2BspYM%2BA3RFm008HKKi9rk4%2FfTARC6Di7cVTDn7iLkl2Z6UApfs3cR4ar2AR4KvSurWdh2TvTojWZF4ibYyEQ7mmmTDP9ODDLkrpnSHK8Ohi9aeql2RORw01gGPG6kGcwBCVt5DcqOE6LrDkIIKEpeiXkaJ8zwS9EWAXqvAuzJfzSdxigddn2o2Ph41vn5n%2FS%2BqkzgfeIlJe8VgXQi1YA%2FTM88BapfNXk3PQkaFvpZrlYw9QmZPqMLyiWAFjj7rJa2MImSh78GOqUBNezDU0c9X4kgzIeDIXKB272FZY0xyq9YDllxb179jEx%2By32qYLU2zhPRsnHRc5OGC3d3%2Bf8yeRgRM8D6%2BPlskps2fuxog6%2F0Nu1SicotkKrVjTgwqvaxyt5ZZosF%2BaIrYe6c3oUEgky5MPvhu032Dq4fJQcomE2RH%2Fph4C%2BshX9qaaKwZo1DozcfbnVsHaQ4zrze55%2BJV5Wtoa%2FTzvT7zrEP%2FqFq&X-Amz-Signature=1e26689928ead524658f0769bff18e8b46537beb95c8c5640239d9ebffe5355d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SOUEXRB%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID65Ct8iIE61P5%2BRN4Ae%2FZonMI%2BiMtLr4zG1OlbKqujXAiEA399qLMv5ocJlE7WzgsI92suSOA5UzDOJX1PI3G9b2BUqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMe5pXvPV6%2B7PGmdyircA2xsF5GoezTaxD%2BYyrtWpmlwZqpYaPMfwuHU8EbMJ3ojeZs2uFsSJbKWWylNXiefWL86AHGkHuOI5urbXFQVq98wRYMLShhiMddfcvcRHR3aScmNZp0Vfm2MU6YQ8fnmeemz8NWtHoP0ZfWjkDjHOj%2BF4%2FweaUoYEHarglVOB0I8DLqko7bSXqJmIU7JLMFdYQj0aQJiH8HTXtEMrzufhDge49A3gczjY6AdotCxkK02ksOHz2w88QSGJOiIsUkyLT3I002H%2FKCNULTJ%2F8P4qF%2Fu7MoZRoYuJ4JKJpBGNv%2BJ%2FrlmrYUQMTp1a1JRMNX2whDfg655Mj30ash80xibgqvuNTyZlgy0RZ%2BZbrC0TK9Md1F6rStAk%2F3BTbQ%2BspYM%2BA3RFm008HKKi9rk4%2FfTARC6Di7cVTDn7iLkl2Z6UApfs3cR4ar2AR4KvSurWdh2TvTojWZF4ibYyEQ7mmmTDP9ODDLkrpnSHK8Ohi9aeql2RORw01gGPG6kGcwBCVt5DcqOE6LrDkIIKEpeiXkaJ8zwS9EWAXqvAuzJfzSdxigddn2o2Ph41vn5n%2FS%2BqkzgfeIlJe8VgXQi1YA%2FTM88BapfNXk3PQkaFvpZrlYw9QmZPqMLyiWAFjj7rJa2MImSh78GOqUBNezDU0c9X4kgzIeDIXKB272FZY0xyq9YDllxb179jEx%2By32qYLU2zhPRsnHRc5OGC3d3%2Bf8yeRgRM8D6%2BPlskps2fuxog6%2F0Nu1SicotkKrVjTgwqvaxyt5ZZosF%2BaIrYe6c3oUEgky5MPvhu032Dq4fJQcomE2RH%2Fph4C%2BshX9qaaKwZo1DozcfbnVsHaQ4zrze55%2BJV5Wtoa%2FTzvT7zrEP%2FqFq&X-Amz-Signature=b4aeeff984ef5dba0cbd89c330b6d13f9c0ad98a3eb4cefaf4da4e37e4eea5c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SOUEXRB%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID65Ct8iIE61P5%2BRN4Ae%2FZonMI%2BiMtLr4zG1OlbKqujXAiEA399qLMv5ocJlE7WzgsI92suSOA5UzDOJX1PI3G9b2BUqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMe5pXvPV6%2B7PGmdyircA2xsF5GoezTaxD%2BYyrtWpmlwZqpYaPMfwuHU8EbMJ3ojeZs2uFsSJbKWWylNXiefWL86AHGkHuOI5urbXFQVq98wRYMLShhiMddfcvcRHR3aScmNZp0Vfm2MU6YQ8fnmeemz8NWtHoP0ZfWjkDjHOj%2BF4%2FweaUoYEHarglVOB0I8DLqko7bSXqJmIU7JLMFdYQj0aQJiH8HTXtEMrzufhDge49A3gczjY6AdotCxkK02ksOHz2w88QSGJOiIsUkyLT3I002H%2FKCNULTJ%2F8P4qF%2Fu7MoZRoYuJ4JKJpBGNv%2BJ%2FrlmrYUQMTp1a1JRMNX2whDfg655Mj30ash80xibgqvuNTyZlgy0RZ%2BZbrC0TK9Md1F6rStAk%2F3BTbQ%2BspYM%2BA3RFm008HKKi9rk4%2FfTARC6Di7cVTDn7iLkl2Z6UApfs3cR4ar2AR4KvSurWdh2TvTojWZF4ibYyEQ7mmmTDP9ODDLkrpnSHK8Ohi9aeql2RORw01gGPG6kGcwBCVt5DcqOE6LrDkIIKEpeiXkaJ8zwS9EWAXqvAuzJfzSdxigddn2o2Ph41vn5n%2FS%2BqkzgfeIlJe8VgXQi1YA%2FTM88BapfNXk3PQkaFvpZrlYw9QmZPqMLyiWAFjj7rJa2MImSh78GOqUBNezDU0c9X4kgzIeDIXKB272FZY0xyq9YDllxb179jEx%2By32qYLU2zhPRsnHRc5OGC3d3%2Bf8yeRgRM8D6%2BPlskps2fuxog6%2F0Nu1SicotkKrVjTgwqvaxyt5ZZosF%2BaIrYe6c3oUEgky5MPvhu032Dq4fJQcomE2RH%2Fph4C%2BshX9qaaKwZo1DozcfbnVsHaQ4zrze55%2BJV5Wtoa%2FTzvT7zrEP%2FqFq&X-Amz-Signature=d555249d72056b6933ec94897d91619210b0283b6d107fbeeb7445ea204707d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SOUEXRB%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID65Ct8iIE61P5%2BRN4Ae%2FZonMI%2BiMtLr4zG1OlbKqujXAiEA399qLMv5ocJlE7WzgsI92suSOA5UzDOJX1PI3G9b2BUqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMe5pXvPV6%2B7PGmdyircA2xsF5GoezTaxD%2BYyrtWpmlwZqpYaPMfwuHU8EbMJ3ojeZs2uFsSJbKWWylNXiefWL86AHGkHuOI5urbXFQVq98wRYMLShhiMddfcvcRHR3aScmNZp0Vfm2MU6YQ8fnmeemz8NWtHoP0ZfWjkDjHOj%2BF4%2FweaUoYEHarglVOB0I8DLqko7bSXqJmIU7JLMFdYQj0aQJiH8HTXtEMrzufhDge49A3gczjY6AdotCxkK02ksOHz2w88QSGJOiIsUkyLT3I002H%2FKCNULTJ%2F8P4qF%2Fu7MoZRoYuJ4JKJpBGNv%2BJ%2FrlmrYUQMTp1a1JRMNX2whDfg655Mj30ash80xibgqvuNTyZlgy0RZ%2BZbrC0TK9Md1F6rStAk%2F3BTbQ%2BspYM%2BA3RFm008HKKi9rk4%2FfTARC6Di7cVTDn7iLkl2Z6UApfs3cR4ar2AR4KvSurWdh2TvTojWZF4ibYyEQ7mmmTDP9ODDLkrpnSHK8Ohi9aeql2RORw01gGPG6kGcwBCVt5DcqOE6LrDkIIKEpeiXkaJ8zwS9EWAXqvAuzJfzSdxigddn2o2Ph41vn5n%2FS%2BqkzgfeIlJe8VgXQi1YA%2FTM88BapfNXk3PQkaFvpZrlYw9QmZPqMLyiWAFjj7rJa2MImSh78GOqUBNezDU0c9X4kgzIeDIXKB272FZY0xyq9YDllxb179jEx%2By32qYLU2zhPRsnHRc5OGC3d3%2Bf8yeRgRM8D6%2BPlskps2fuxog6%2F0Nu1SicotkKrVjTgwqvaxyt5ZZosF%2BaIrYe6c3oUEgky5MPvhu032Dq4fJQcomE2RH%2Fph4C%2BshX9qaaKwZo1DozcfbnVsHaQ4zrze55%2BJV5Wtoa%2FTzvT7zrEP%2FqFq&X-Amz-Signature=309379c40ef5e79e497fee9e80ee1ea8ec7f1ed880e1021ec23945b7e0e0f2e2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SOUEXRB%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID65Ct8iIE61P5%2BRN4Ae%2FZonMI%2BiMtLr4zG1OlbKqujXAiEA399qLMv5ocJlE7WzgsI92suSOA5UzDOJX1PI3G9b2BUqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMe5pXvPV6%2B7PGmdyircA2xsF5GoezTaxD%2BYyrtWpmlwZqpYaPMfwuHU8EbMJ3ojeZs2uFsSJbKWWylNXiefWL86AHGkHuOI5urbXFQVq98wRYMLShhiMddfcvcRHR3aScmNZp0Vfm2MU6YQ8fnmeemz8NWtHoP0ZfWjkDjHOj%2BF4%2FweaUoYEHarglVOB0I8DLqko7bSXqJmIU7JLMFdYQj0aQJiH8HTXtEMrzufhDge49A3gczjY6AdotCxkK02ksOHz2w88QSGJOiIsUkyLT3I002H%2FKCNULTJ%2F8P4qF%2Fu7MoZRoYuJ4JKJpBGNv%2BJ%2FrlmrYUQMTp1a1JRMNX2whDfg655Mj30ash80xibgqvuNTyZlgy0RZ%2BZbrC0TK9Md1F6rStAk%2F3BTbQ%2BspYM%2BA3RFm008HKKi9rk4%2FfTARC6Di7cVTDn7iLkl2Z6UApfs3cR4ar2AR4KvSurWdh2TvTojWZF4ibYyEQ7mmmTDP9ODDLkrpnSHK8Ohi9aeql2RORw01gGPG6kGcwBCVt5DcqOE6LrDkIIKEpeiXkaJ8zwS9EWAXqvAuzJfzSdxigddn2o2Ph41vn5n%2FS%2BqkzgfeIlJe8VgXQi1YA%2FTM88BapfNXk3PQkaFvpZrlYw9QmZPqMLyiWAFjj7rJa2MImSh78GOqUBNezDU0c9X4kgzIeDIXKB272FZY0xyq9YDllxb179jEx%2By32qYLU2zhPRsnHRc5OGC3d3%2Bf8yeRgRM8D6%2BPlskps2fuxog6%2F0Nu1SicotkKrVjTgwqvaxyt5ZZosF%2BaIrYe6c3oUEgky5MPvhu032Dq4fJQcomE2RH%2Fph4C%2BshX9qaaKwZo1DozcfbnVsHaQ4zrze55%2BJV5Wtoa%2FTzvT7zrEP%2FqFq&X-Amz-Signature=c2480ddfb97b8af2a104c4ea2aa1ff369a132a9df089540229be581fcd67c803&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SOUEXRB%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID65Ct8iIE61P5%2BRN4Ae%2FZonMI%2BiMtLr4zG1OlbKqujXAiEA399qLMv5ocJlE7WzgsI92suSOA5UzDOJX1PI3G9b2BUqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMe5pXvPV6%2B7PGmdyircA2xsF5GoezTaxD%2BYyrtWpmlwZqpYaPMfwuHU8EbMJ3ojeZs2uFsSJbKWWylNXiefWL86AHGkHuOI5urbXFQVq98wRYMLShhiMddfcvcRHR3aScmNZp0Vfm2MU6YQ8fnmeemz8NWtHoP0ZfWjkDjHOj%2BF4%2FweaUoYEHarglVOB0I8DLqko7bSXqJmIU7JLMFdYQj0aQJiH8HTXtEMrzufhDge49A3gczjY6AdotCxkK02ksOHz2w88QSGJOiIsUkyLT3I002H%2FKCNULTJ%2F8P4qF%2Fu7MoZRoYuJ4JKJpBGNv%2BJ%2FrlmrYUQMTp1a1JRMNX2whDfg655Mj30ash80xibgqvuNTyZlgy0RZ%2BZbrC0TK9Md1F6rStAk%2F3BTbQ%2BspYM%2BA3RFm008HKKi9rk4%2FfTARC6Di7cVTDn7iLkl2Z6UApfs3cR4ar2AR4KvSurWdh2TvTojWZF4ibYyEQ7mmmTDP9ODDLkrpnSHK8Ohi9aeql2RORw01gGPG6kGcwBCVt5DcqOE6LrDkIIKEpeiXkaJ8zwS9EWAXqvAuzJfzSdxigddn2o2Ph41vn5n%2FS%2BqkzgfeIlJe8VgXQi1YA%2FTM88BapfNXk3PQkaFvpZrlYw9QmZPqMLyiWAFjj7rJa2MImSh78GOqUBNezDU0c9X4kgzIeDIXKB272FZY0xyq9YDllxb179jEx%2By32qYLU2zhPRsnHRc5OGC3d3%2Bf8yeRgRM8D6%2BPlskps2fuxog6%2F0Nu1SicotkKrVjTgwqvaxyt5ZZosF%2BaIrYe6c3oUEgky5MPvhu032Dq4fJQcomE2RH%2Fph4C%2BshX9qaaKwZo1DozcfbnVsHaQ4zrze55%2BJV5Wtoa%2FTzvT7zrEP%2FqFq&X-Amz-Signature=026ece089415a1229eaa8b2223a52204257fdee528091fafa47ba1a5d902d57c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
