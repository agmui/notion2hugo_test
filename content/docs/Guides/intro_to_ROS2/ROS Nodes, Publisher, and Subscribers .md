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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHWUCCIG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdcIiOPipVMjyuUvPuWJBFuCLR0%2FhDKjnAwHylxAXvyQIgK0tZZuslfVg3eFU1MRLmw852%2Bcr%2FQ8ZcVeMEzr7HnWoqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAA4RTFEIbDRZMAOlircA1xp%2BOorT%2BMoGSbbDv8ILfVCh03T890lkNa33FC64Gu4MSroMVLi0Dzv5YrDIqESA75JRVVdIkcjaWRmir4I%2B%2F9RK1FHcY6nl%2ByJh7bQ612cw8IWOp3Y%2FPY9AYWCa4DM6WT7fXEoWWWqZtORINmywxOqT4xeTTxuFJV0Y4BDUsWCHaV%2BNVp34A9%2BukHPwDhmUX%2Bmq5jmhu7vw3jFpZYDhxQf%2FU7a6UUTtLnzYLJ0WvAdQWpoA9BjPJUiF10Z3y1OssZgt7hCZx%2BzEZFdlipZW3FjOkfPUhhArTtgKFNxXmvQe6XBWwhGYasdJueB7%2FserhI3giYJvRZ1OA%2BDNDimYBkPP3LISTMeRlWvaCUjBghNdscf8QUwBleiLwklr0TRA1N8XgmTKjapZj2OrHFTEMTa%2F02DviN08XwD%2BqsitkX%2FD1eYb07CSi1bd59H%2FlzR2TMu2TI1xDrW130XwVHxPs3LlhvCXJ%2B%2FkEhoWt%2FTwyfdFf19TjNICnsUfqnnW%2B74F%2Fu09wj0ou0FB8HkXkFc%2BBcbtuy0d9a2yLmetgMhx6jaaoxdskLE%2B%2BL2BB%2BftNwEekpGDMuyZCV%2BnQdXdTVZ%2Bo9hDDb83EtyjBhA1u1%2F6pjtmNrWJsJotoQc%2F%2FadMPP79MMGOqUBFxoqIwHKhMJmQ25kq6j16PjBWWnkH7lXcsrspaM0tp8cALb%2BrzL%2BWWSvu2emFa5jlCvCCTLgH%2BL62dERJuGa4ChpLUGz82Qf1IOZ8V1Z6NP3hz%2BCE4NmtipOFcepmgJcJNy%2B1NUmB%2FFjZKdd1pjTSeenqrye5r%2Fj5himmMbj1F3BcoiP3kbIGNwqUSkPyRRZnnS7VoxwzTYzLlmWPQkV0YydkmcZ&X-Amz-Signature=1adfdcc472c003a2fd8f86f0761e066412d7e0cd353883e7618e475580b284a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHWUCCIG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdcIiOPipVMjyuUvPuWJBFuCLR0%2FhDKjnAwHylxAXvyQIgK0tZZuslfVg3eFU1MRLmw852%2Bcr%2FQ8ZcVeMEzr7HnWoqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAA4RTFEIbDRZMAOlircA1xp%2BOorT%2BMoGSbbDv8ILfVCh03T890lkNa33FC64Gu4MSroMVLi0Dzv5YrDIqESA75JRVVdIkcjaWRmir4I%2B%2F9RK1FHcY6nl%2ByJh7bQ612cw8IWOp3Y%2FPY9AYWCa4DM6WT7fXEoWWWqZtORINmywxOqT4xeTTxuFJV0Y4BDUsWCHaV%2BNVp34A9%2BukHPwDhmUX%2Bmq5jmhu7vw3jFpZYDhxQf%2FU7a6UUTtLnzYLJ0WvAdQWpoA9BjPJUiF10Z3y1OssZgt7hCZx%2BzEZFdlipZW3FjOkfPUhhArTtgKFNxXmvQe6XBWwhGYasdJueB7%2FserhI3giYJvRZ1OA%2BDNDimYBkPP3LISTMeRlWvaCUjBghNdscf8QUwBleiLwklr0TRA1N8XgmTKjapZj2OrHFTEMTa%2F02DviN08XwD%2BqsitkX%2FD1eYb07CSi1bd59H%2FlzR2TMu2TI1xDrW130XwVHxPs3LlhvCXJ%2B%2FkEhoWt%2FTwyfdFf19TjNICnsUfqnnW%2B74F%2Fu09wj0ou0FB8HkXkFc%2BBcbtuy0d9a2yLmetgMhx6jaaoxdskLE%2B%2BL2BB%2BftNwEekpGDMuyZCV%2BnQdXdTVZ%2Bo9hDDb83EtyjBhA1u1%2F6pjtmNrWJsJotoQc%2F%2FadMPP79MMGOqUBFxoqIwHKhMJmQ25kq6j16PjBWWnkH7lXcsrspaM0tp8cALb%2BrzL%2BWWSvu2emFa5jlCvCCTLgH%2BL62dERJuGa4ChpLUGz82Qf1IOZ8V1Z6NP3hz%2BCE4NmtipOFcepmgJcJNy%2B1NUmB%2FFjZKdd1pjTSeenqrye5r%2Fj5himmMbj1F3BcoiP3kbIGNwqUSkPyRRZnnS7VoxwzTYzLlmWPQkV0YydkmcZ&X-Amz-Signature=e99d9a1b95c5e3c2faead594e9b69b3428424b7afb993b34009bf92d1a30fb0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHWUCCIG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdcIiOPipVMjyuUvPuWJBFuCLR0%2FhDKjnAwHylxAXvyQIgK0tZZuslfVg3eFU1MRLmw852%2Bcr%2FQ8ZcVeMEzr7HnWoqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAA4RTFEIbDRZMAOlircA1xp%2BOorT%2BMoGSbbDv8ILfVCh03T890lkNa33FC64Gu4MSroMVLi0Dzv5YrDIqESA75JRVVdIkcjaWRmir4I%2B%2F9RK1FHcY6nl%2ByJh7bQ612cw8IWOp3Y%2FPY9AYWCa4DM6WT7fXEoWWWqZtORINmywxOqT4xeTTxuFJV0Y4BDUsWCHaV%2BNVp34A9%2BukHPwDhmUX%2Bmq5jmhu7vw3jFpZYDhxQf%2FU7a6UUTtLnzYLJ0WvAdQWpoA9BjPJUiF10Z3y1OssZgt7hCZx%2BzEZFdlipZW3FjOkfPUhhArTtgKFNxXmvQe6XBWwhGYasdJueB7%2FserhI3giYJvRZ1OA%2BDNDimYBkPP3LISTMeRlWvaCUjBghNdscf8QUwBleiLwklr0TRA1N8XgmTKjapZj2OrHFTEMTa%2F02DviN08XwD%2BqsitkX%2FD1eYb07CSi1bd59H%2FlzR2TMu2TI1xDrW130XwVHxPs3LlhvCXJ%2B%2FkEhoWt%2FTwyfdFf19TjNICnsUfqnnW%2B74F%2Fu09wj0ou0FB8HkXkFc%2BBcbtuy0d9a2yLmetgMhx6jaaoxdskLE%2B%2BL2BB%2BftNwEekpGDMuyZCV%2BnQdXdTVZ%2Bo9hDDb83EtyjBhA1u1%2F6pjtmNrWJsJotoQc%2F%2FadMPP79MMGOqUBFxoqIwHKhMJmQ25kq6j16PjBWWnkH7lXcsrspaM0tp8cALb%2BrzL%2BWWSvu2emFa5jlCvCCTLgH%2BL62dERJuGa4ChpLUGz82Qf1IOZ8V1Z6NP3hz%2BCE4NmtipOFcepmgJcJNy%2B1NUmB%2FFjZKdd1pjTSeenqrye5r%2Fj5himmMbj1F3BcoiP3kbIGNwqUSkPyRRZnnS7VoxwzTYzLlmWPQkV0YydkmcZ&X-Amz-Signature=1dd2759a732501c048d0193666914f7803e394ebf2999e928f0118aeeaad903b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHWUCCIG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdcIiOPipVMjyuUvPuWJBFuCLR0%2FhDKjnAwHylxAXvyQIgK0tZZuslfVg3eFU1MRLmw852%2Bcr%2FQ8ZcVeMEzr7HnWoqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAA4RTFEIbDRZMAOlircA1xp%2BOorT%2BMoGSbbDv8ILfVCh03T890lkNa33FC64Gu4MSroMVLi0Dzv5YrDIqESA75JRVVdIkcjaWRmir4I%2B%2F9RK1FHcY6nl%2ByJh7bQ612cw8IWOp3Y%2FPY9AYWCa4DM6WT7fXEoWWWqZtORINmywxOqT4xeTTxuFJV0Y4BDUsWCHaV%2BNVp34A9%2BukHPwDhmUX%2Bmq5jmhu7vw3jFpZYDhxQf%2FU7a6UUTtLnzYLJ0WvAdQWpoA9BjPJUiF10Z3y1OssZgt7hCZx%2BzEZFdlipZW3FjOkfPUhhArTtgKFNxXmvQe6XBWwhGYasdJueB7%2FserhI3giYJvRZ1OA%2BDNDimYBkPP3LISTMeRlWvaCUjBghNdscf8QUwBleiLwklr0TRA1N8XgmTKjapZj2OrHFTEMTa%2F02DviN08XwD%2BqsitkX%2FD1eYb07CSi1bd59H%2FlzR2TMu2TI1xDrW130XwVHxPs3LlhvCXJ%2B%2FkEhoWt%2FTwyfdFf19TjNICnsUfqnnW%2B74F%2Fu09wj0ou0FB8HkXkFc%2BBcbtuy0d9a2yLmetgMhx6jaaoxdskLE%2B%2BL2BB%2BftNwEekpGDMuyZCV%2BnQdXdTVZ%2Bo9hDDb83EtyjBhA1u1%2F6pjtmNrWJsJotoQc%2F%2FadMPP79MMGOqUBFxoqIwHKhMJmQ25kq6j16PjBWWnkH7lXcsrspaM0tp8cALb%2BrzL%2BWWSvu2emFa5jlCvCCTLgH%2BL62dERJuGa4ChpLUGz82Qf1IOZ8V1Z6NP3hz%2BCE4NmtipOFcepmgJcJNy%2B1NUmB%2FFjZKdd1pjTSeenqrye5r%2Fj5himmMbj1F3BcoiP3kbIGNwqUSkPyRRZnnS7VoxwzTYzLlmWPQkV0YydkmcZ&X-Amz-Signature=c05e5b8d7196df3ba6de29bad96ae74b84a130fe98d52efdd60a34430dadc7eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHWUCCIG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdcIiOPipVMjyuUvPuWJBFuCLR0%2FhDKjnAwHylxAXvyQIgK0tZZuslfVg3eFU1MRLmw852%2Bcr%2FQ8ZcVeMEzr7HnWoqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAA4RTFEIbDRZMAOlircA1xp%2BOorT%2BMoGSbbDv8ILfVCh03T890lkNa33FC64Gu4MSroMVLi0Dzv5YrDIqESA75JRVVdIkcjaWRmir4I%2B%2F9RK1FHcY6nl%2ByJh7bQ612cw8IWOp3Y%2FPY9AYWCa4DM6WT7fXEoWWWqZtORINmywxOqT4xeTTxuFJV0Y4BDUsWCHaV%2BNVp34A9%2BukHPwDhmUX%2Bmq5jmhu7vw3jFpZYDhxQf%2FU7a6UUTtLnzYLJ0WvAdQWpoA9BjPJUiF10Z3y1OssZgt7hCZx%2BzEZFdlipZW3FjOkfPUhhArTtgKFNxXmvQe6XBWwhGYasdJueB7%2FserhI3giYJvRZ1OA%2BDNDimYBkPP3LISTMeRlWvaCUjBghNdscf8QUwBleiLwklr0TRA1N8XgmTKjapZj2OrHFTEMTa%2F02DviN08XwD%2BqsitkX%2FD1eYb07CSi1bd59H%2FlzR2TMu2TI1xDrW130XwVHxPs3LlhvCXJ%2B%2FkEhoWt%2FTwyfdFf19TjNICnsUfqnnW%2B74F%2Fu09wj0ou0FB8HkXkFc%2BBcbtuy0d9a2yLmetgMhx6jaaoxdskLE%2B%2BL2BB%2BftNwEekpGDMuyZCV%2BnQdXdTVZ%2Bo9hDDb83EtyjBhA1u1%2F6pjtmNrWJsJotoQc%2F%2FadMPP79MMGOqUBFxoqIwHKhMJmQ25kq6j16PjBWWnkH7lXcsrspaM0tp8cALb%2BrzL%2BWWSvu2emFa5jlCvCCTLgH%2BL62dERJuGa4ChpLUGz82Qf1IOZ8V1Z6NP3hz%2BCE4NmtipOFcepmgJcJNy%2B1NUmB%2FFjZKdd1pjTSeenqrye5r%2Fj5himmMbj1F3BcoiP3kbIGNwqUSkPyRRZnnS7VoxwzTYzLlmWPQkV0YydkmcZ&X-Amz-Signature=1d19d1db82228627c559169efa9e095f481e0bfd1eef167a35085de799a5b6a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHWUCCIG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdcIiOPipVMjyuUvPuWJBFuCLR0%2FhDKjnAwHylxAXvyQIgK0tZZuslfVg3eFU1MRLmw852%2Bcr%2FQ8ZcVeMEzr7HnWoqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAA4RTFEIbDRZMAOlircA1xp%2BOorT%2BMoGSbbDv8ILfVCh03T890lkNa33FC64Gu4MSroMVLi0Dzv5YrDIqESA75JRVVdIkcjaWRmir4I%2B%2F9RK1FHcY6nl%2ByJh7bQ612cw8IWOp3Y%2FPY9AYWCa4DM6WT7fXEoWWWqZtORINmywxOqT4xeTTxuFJV0Y4BDUsWCHaV%2BNVp34A9%2BukHPwDhmUX%2Bmq5jmhu7vw3jFpZYDhxQf%2FU7a6UUTtLnzYLJ0WvAdQWpoA9BjPJUiF10Z3y1OssZgt7hCZx%2BzEZFdlipZW3FjOkfPUhhArTtgKFNxXmvQe6XBWwhGYasdJueB7%2FserhI3giYJvRZ1OA%2BDNDimYBkPP3LISTMeRlWvaCUjBghNdscf8QUwBleiLwklr0TRA1N8XgmTKjapZj2OrHFTEMTa%2F02DviN08XwD%2BqsitkX%2FD1eYb07CSi1bd59H%2FlzR2TMu2TI1xDrW130XwVHxPs3LlhvCXJ%2B%2FkEhoWt%2FTwyfdFf19TjNICnsUfqnnW%2B74F%2Fu09wj0ou0FB8HkXkFc%2BBcbtuy0d9a2yLmetgMhx6jaaoxdskLE%2B%2BL2BB%2BftNwEekpGDMuyZCV%2BnQdXdTVZ%2Bo9hDDb83EtyjBhA1u1%2F6pjtmNrWJsJotoQc%2F%2FadMPP79MMGOqUBFxoqIwHKhMJmQ25kq6j16PjBWWnkH7lXcsrspaM0tp8cALb%2BrzL%2BWWSvu2emFa5jlCvCCTLgH%2BL62dERJuGa4ChpLUGz82Qf1IOZ8V1Z6NP3hz%2BCE4NmtipOFcepmgJcJNy%2B1NUmB%2FFjZKdd1pjTSeenqrye5r%2Fj5himmMbj1F3BcoiP3kbIGNwqUSkPyRRZnnS7VoxwzTYzLlmWPQkV0YydkmcZ&X-Amz-Signature=66f8f0671477aeb8158a61b07ae0ddfacf07301d32698587a0ea06a21d0d8027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHWUCCIG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdcIiOPipVMjyuUvPuWJBFuCLR0%2FhDKjnAwHylxAXvyQIgK0tZZuslfVg3eFU1MRLmw852%2Bcr%2FQ8ZcVeMEzr7HnWoqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAA4RTFEIbDRZMAOlircA1xp%2BOorT%2BMoGSbbDv8ILfVCh03T890lkNa33FC64Gu4MSroMVLi0Dzv5YrDIqESA75JRVVdIkcjaWRmir4I%2B%2F9RK1FHcY6nl%2ByJh7bQ612cw8IWOp3Y%2FPY9AYWCa4DM6WT7fXEoWWWqZtORINmywxOqT4xeTTxuFJV0Y4BDUsWCHaV%2BNVp34A9%2BukHPwDhmUX%2Bmq5jmhu7vw3jFpZYDhxQf%2FU7a6UUTtLnzYLJ0WvAdQWpoA9BjPJUiF10Z3y1OssZgt7hCZx%2BzEZFdlipZW3FjOkfPUhhArTtgKFNxXmvQe6XBWwhGYasdJueB7%2FserhI3giYJvRZ1OA%2BDNDimYBkPP3LISTMeRlWvaCUjBghNdscf8QUwBleiLwklr0TRA1N8XgmTKjapZj2OrHFTEMTa%2F02DviN08XwD%2BqsitkX%2FD1eYb07CSi1bd59H%2FlzR2TMu2TI1xDrW130XwVHxPs3LlhvCXJ%2B%2FkEhoWt%2FTwyfdFf19TjNICnsUfqnnW%2B74F%2Fu09wj0ou0FB8HkXkFc%2BBcbtuy0d9a2yLmetgMhx6jaaoxdskLE%2B%2BL2BB%2BftNwEekpGDMuyZCV%2BnQdXdTVZ%2Bo9hDDb83EtyjBhA1u1%2F6pjtmNrWJsJotoQc%2F%2FadMPP79MMGOqUBFxoqIwHKhMJmQ25kq6j16PjBWWnkH7lXcsrspaM0tp8cALb%2BrzL%2BWWSvu2emFa5jlCvCCTLgH%2BL62dERJuGa4ChpLUGz82Qf1IOZ8V1Z6NP3hz%2BCE4NmtipOFcepmgJcJNy%2B1NUmB%2FFjZKdd1pjTSeenqrye5r%2Fj5himmMbj1F3BcoiP3kbIGNwqUSkPyRRZnnS7VoxwzTYzLlmWPQkV0YydkmcZ&X-Amz-Signature=09b88359e6ddecb550f7871b582ccf0a70b91e84cfdf7090a6dcfae9b9318351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHWUCCIG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdcIiOPipVMjyuUvPuWJBFuCLR0%2FhDKjnAwHylxAXvyQIgK0tZZuslfVg3eFU1MRLmw852%2Bcr%2FQ8ZcVeMEzr7HnWoqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAA4RTFEIbDRZMAOlircA1xp%2BOorT%2BMoGSbbDv8ILfVCh03T890lkNa33FC64Gu4MSroMVLi0Dzv5YrDIqESA75JRVVdIkcjaWRmir4I%2B%2F9RK1FHcY6nl%2ByJh7bQ612cw8IWOp3Y%2FPY9AYWCa4DM6WT7fXEoWWWqZtORINmywxOqT4xeTTxuFJV0Y4BDUsWCHaV%2BNVp34A9%2BukHPwDhmUX%2Bmq5jmhu7vw3jFpZYDhxQf%2FU7a6UUTtLnzYLJ0WvAdQWpoA9BjPJUiF10Z3y1OssZgt7hCZx%2BzEZFdlipZW3FjOkfPUhhArTtgKFNxXmvQe6XBWwhGYasdJueB7%2FserhI3giYJvRZ1OA%2BDNDimYBkPP3LISTMeRlWvaCUjBghNdscf8QUwBleiLwklr0TRA1N8XgmTKjapZj2OrHFTEMTa%2F02DviN08XwD%2BqsitkX%2FD1eYb07CSi1bd59H%2FlzR2TMu2TI1xDrW130XwVHxPs3LlhvCXJ%2B%2FkEhoWt%2FTwyfdFf19TjNICnsUfqnnW%2B74F%2Fu09wj0ou0FB8HkXkFc%2BBcbtuy0d9a2yLmetgMhx6jaaoxdskLE%2B%2BL2BB%2BftNwEekpGDMuyZCV%2BnQdXdTVZ%2Bo9hDDb83EtyjBhA1u1%2F6pjtmNrWJsJotoQc%2F%2FadMPP79MMGOqUBFxoqIwHKhMJmQ25kq6j16PjBWWnkH7lXcsrspaM0tp8cALb%2BrzL%2BWWSvu2emFa5jlCvCCTLgH%2BL62dERJuGa4ChpLUGz82Qf1IOZ8V1Z6NP3hz%2BCE4NmtipOFcepmgJcJNy%2B1NUmB%2FFjZKdd1pjTSeenqrye5r%2Fj5himmMbj1F3BcoiP3kbIGNwqUSkPyRRZnnS7VoxwzTYzLlmWPQkV0YydkmcZ&X-Amz-Signature=0c75ea378b7249c81166ad1e7024238d4a3d2fc68dabf1901eed51b3611ee02c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
