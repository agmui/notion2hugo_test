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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYVOGDN4%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHL0FfscS%2FaWr1s2K31arFfAAcX0%2B4RqH1KXo26QdGl5AiEA6M2bzXRgyLtQjhp%2B83K%2Faq0woNe%2BAy2lBC138vmBlMEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBSqGdrKGXycLx5RircA%2BbcMtafLPJnoNmtVHq%2FCGmCyOIRMGQm1xQLj2mhfFRUjJfK5k9Vz29YYmiRht4SGlx9uU26ba7%2FG0HHdjJ9kogp4dEStI%2BZ%2BWmR2CiADPYkqyDQ19VKFbTfqXVbDGzwKMr%2FslA%2F66M9xRTZJokW1eWjWWeU6H%2FLHjA5KBt21E61T9IemL81hEuKQWVhu0J9gdB6l9cznuhX5vPqKEw3ZtSZh6xEv4RNTNozjkkqvo7149S9BOjbRJcsSi1YsFwRm1iQL7VTi75c4TrYIHq6XoCrGC5U3s1d%2B8ifXqHbNNuMNLnZxMu4k6MHam0heCjGBAHj2Pxyx0W%2BnE6ePOqRhS31%2BbBWYZJjYEsyKMqDoJAsZpplsuLt%2Fg1wVtsEv71WjLXxQPlI%2Bq%2BavyjTYGiYC%2Fq24YeDESR7lmpJ%2FdZsGFCgij4BKrOVfvCycV2mXpdkTfIbSLgOgx6C5vQIN8JR8PU52RKRD2OyExQnt9vkEpVPqtsoYGjqd4c1IHgl46xbJZFn0YY8roeDCpxznr0M41bRD75CqvA9CikCAnunJ8k4%2B7Tcyramz%2FR5qcpebWsYV7uYMqv4XuPVRkvUpvl2vEAPThaFNyMreHqXQikZKKOt3wczsi6UEc2JzkXJMJyWpMIGOqUB1em5aKJCD2FE7se%2F6GaDCS8iTpUOabvQ%2F2QU61ykA2CfEzMptZu%2FNH6Xnu7TAgPidkc3W2n%2Fb9lDzE3Ycw6vHezZg%2Bl5V83bV3s9o5QFd%2B1nnmFU5iH5fXMFwIGutSgMTuXpUeSP%2B2ILT%2FamZdpgPRh3ULLGioJMQaV3lRxN0gZFKv99%2BwKE%2Btft6iB3EcfYYKh%2B3ETMp3RP%2BOkOyswNNmA7FXqu&X-Amz-Signature=62ef08912585fcc09a439a6bbb2759633ba37d7eb7c145450f1ce6269781adf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYVOGDN4%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHL0FfscS%2FaWr1s2K31arFfAAcX0%2B4RqH1KXo26QdGl5AiEA6M2bzXRgyLtQjhp%2B83K%2Faq0woNe%2BAy2lBC138vmBlMEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBSqGdrKGXycLx5RircA%2BbcMtafLPJnoNmtVHq%2FCGmCyOIRMGQm1xQLj2mhfFRUjJfK5k9Vz29YYmiRht4SGlx9uU26ba7%2FG0HHdjJ9kogp4dEStI%2BZ%2BWmR2CiADPYkqyDQ19VKFbTfqXVbDGzwKMr%2FslA%2F66M9xRTZJokW1eWjWWeU6H%2FLHjA5KBt21E61T9IemL81hEuKQWVhu0J9gdB6l9cznuhX5vPqKEw3ZtSZh6xEv4RNTNozjkkqvo7149S9BOjbRJcsSi1YsFwRm1iQL7VTi75c4TrYIHq6XoCrGC5U3s1d%2B8ifXqHbNNuMNLnZxMu4k6MHam0heCjGBAHj2Pxyx0W%2BnE6ePOqRhS31%2BbBWYZJjYEsyKMqDoJAsZpplsuLt%2Fg1wVtsEv71WjLXxQPlI%2Bq%2BavyjTYGiYC%2Fq24YeDESR7lmpJ%2FdZsGFCgij4BKrOVfvCycV2mXpdkTfIbSLgOgx6C5vQIN8JR8PU52RKRD2OyExQnt9vkEpVPqtsoYGjqd4c1IHgl46xbJZFn0YY8roeDCpxznr0M41bRD75CqvA9CikCAnunJ8k4%2B7Tcyramz%2FR5qcpebWsYV7uYMqv4XuPVRkvUpvl2vEAPThaFNyMreHqXQikZKKOt3wczsi6UEc2JzkXJMJyWpMIGOqUB1em5aKJCD2FE7se%2F6GaDCS8iTpUOabvQ%2F2QU61ykA2CfEzMptZu%2FNH6Xnu7TAgPidkc3W2n%2Fb9lDzE3Ycw6vHezZg%2Bl5V83bV3s9o5QFd%2B1nnmFU5iH5fXMFwIGutSgMTuXpUeSP%2B2ILT%2FamZdpgPRh3ULLGioJMQaV3lRxN0gZFKv99%2BwKE%2Btft6iB3EcfYYKh%2B3ETMp3RP%2BOkOyswNNmA7FXqu&X-Amz-Signature=5ca9c5a96dbb0f933aa6fd240489866a959a822aa7278f0523d8c1bc6c610c1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYVOGDN4%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHL0FfscS%2FaWr1s2K31arFfAAcX0%2B4RqH1KXo26QdGl5AiEA6M2bzXRgyLtQjhp%2B83K%2Faq0woNe%2BAy2lBC138vmBlMEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBSqGdrKGXycLx5RircA%2BbcMtafLPJnoNmtVHq%2FCGmCyOIRMGQm1xQLj2mhfFRUjJfK5k9Vz29YYmiRht4SGlx9uU26ba7%2FG0HHdjJ9kogp4dEStI%2BZ%2BWmR2CiADPYkqyDQ19VKFbTfqXVbDGzwKMr%2FslA%2F66M9xRTZJokW1eWjWWeU6H%2FLHjA5KBt21E61T9IemL81hEuKQWVhu0J9gdB6l9cznuhX5vPqKEw3ZtSZh6xEv4RNTNozjkkqvo7149S9BOjbRJcsSi1YsFwRm1iQL7VTi75c4TrYIHq6XoCrGC5U3s1d%2B8ifXqHbNNuMNLnZxMu4k6MHam0heCjGBAHj2Pxyx0W%2BnE6ePOqRhS31%2BbBWYZJjYEsyKMqDoJAsZpplsuLt%2Fg1wVtsEv71WjLXxQPlI%2Bq%2BavyjTYGiYC%2Fq24YeDESR7lmpJ%2FdZsGFCgij4BKrOVfvCycV2mXpdkTfIbSLgOgx6C5vQIN8JR8PU52RKRD2OyExQnt9vkEpVPqtsoYGjqd4c1IHgl46xbJZFn0YY8roeDCpxznr0M41bRD75CqvA9CikCAnunJ8k4%2B7Tcyramz%2FR5qcpebWsYV7uYMqv4XuPVRkvUpvl2vEAPThaFNyMreHqXQikZKKOt3wczsi6UEc2JzkXJMJyWpMIGOqUB1em5aKJCD2FE7se%2F6GaDCS8iTpUOabvQ%2F2QU61ykA2CfEzMptZu%2FNH6Xnu7TAgPidkc3W2n%2Fb9lDzE3Ycw6vHezZg%2Bl5V83bV3s9o5QFd%2B1nnmFU5iH5fXMFwIGutSgMTuXpUeSP%2B2ILT%2FamZdpgPRh3ULLGioJMQaV3lRxN0gZFKv99%2BwKE%2Btft6iB3EcfYYKh%2B3ETMp3RP%2BOkOyswNNmA7FXqu&X-Amz-Signature=197f5d72d7fc53dc6e95d28fc374d27b55a52bdf45fbe99d89efb376b8c7fa82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYVOGDN4%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHL0FfscS%2FaWr1s2K31arFfAAcX0%2B4RqH1KXo26QdGl5AiEA6M2bzXRgyLtQjhp%2B83K%2Faq0woNe%2BAy2lBC138vmBlMEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBSqGdrKGXycLx5RircA%2BbcMtafLPJnoNmtVHq%2FCGmCyOIRMGQm1xQLj2mhfFRUjJfK5k9Vz29YYmiRht4SGlx9uU26ba7%2FG0HHdjJ9kogp4dEStI%2BZ%2BWmR2CiADPYkqyDQ19VKFbTfqXVbDGzwKMr%2FslA%2F66M9xRTZJokW1eWjWWeU6H%2FLHjA5KBt21E61T9IemL81hEuKQWVhu0J9gdB6l9cznuhX5vPqKEw3ZtSZh6xEv4RNTNozjkkqvo7149S9BOjbRJcsSi1YsFwRm1iQL7VTi75c4TrYIHq6XoCrGC5U3s1d%2B8ifXqHbNNuMNLnZxMu4k6MHam0heCjGBAHj2Pxyx0W%2BnE6ePOqRhS31%2BbBWYZJjYEsyKMqDoJAsZpplsuLt%2Fg1wVtsEv71WjLXxQPlI%2Bq%2BavyjTYGiYC%2Fq24YeDESR7lmpJ%2FdZsGFCgij4BKrOVfvCycV2mXpdkTfIbSLgOgx6C5vQIN8JR8PU52RKRD2OyExQnt9vkEpVPqtsoYGjqd4c1IHgl46xbJZFn0YY8roeDCpxznr0M41bRD75CqvA9CikCAnunJ8k4%2B7Tcyramz%2FR5qcpebWsYV7uYMqv4XuPVRkvUpvl2vEAPThaFNyMreHqXQikZKKOt3wczsi6UEc2JzkXJMJyWpMIGOqUB1em5aKJCD2FE7se%2F6GaDCS8iTpUOabvQ%2F2QU61ykA2CfEzMptZu%2FNH6Xnu7TAgPidkc3W2n%2Fb9lDzE3Ycw6vHezZg%2Bl5V83bV3s9o5QFd%2B1nnmFU5iH5fXMFwIGutSgMTuXpUeSP%2B2ILT%2FamZdpgPRh3ULLGioJMQaV3lRxN0gZFKv99%2BwKE%2Btft6iB3EcfYYKh%2B3ETMp3RP%2BOkOyswNNmA7FXqu&X-Amz-Signature=c3ef2a4df421ca5ebf449dfcc1612d9edef6acf7e378377bd923f6c0396728f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYVOGDN4%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHL0FfscS%2FaWr1s2K31arFfAAcX0%2B4RqH1KXo26QdGl5AiEA6M2bzXRgyLtQjhp%2B83K%2Faq0woNe%2BAy2lBC138vmBlMEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBSqGdrKGXycLx5RircA%2BbcMtafLPJnoNmtVHq%2FCGmCyOIRMGQm1xQLj2mhfFRUjJfK5k9Vz29YYmiRht4SGlx9uU26ba7%2FG0HHdjJ9kogp4dEStI%2BZ%2BWmR2CiADPYkqyDQ19VKFbTfqXVbDGzwKMr%2FslA%2F66M9xRTZJokW1eWjWWeU6H%2FLHjA5KBt21E61T9IemL81hEuKQWVhu0J9gdB6l9cznuhX5vPqKEw3ZtSZh6xEv4RNTNozjkkqvo7149S9BOjbRJcsSi1YsFwRm1iQL7VTi75c4TrYIHq6XoCrGC5U3s1d%2B8ifXqHbNNuMNLnZxMu4k6MHam0heCjGBAHj2Pxyx0W%2BnE6ePOqRhS31%2BbBWYZJjYEsyKMqDoJAsZpplsuLt%2Fg1wVtsEv71WjLXxQPlI%2Bq%2BavyjTYGiYC%2Fq24YeDESR7lmpJ%2FdZsGFCgij4BKrOVfvCycV2mXpdkTfIbSLgOgx6C5vQIN8JR8PU52RKRD2OyExQnt9vkEpVPqtsoYGjqd4c1IHgl46xbJZFn0YY8roeDCpxznr0M41bRD75CqvA9CikCAnunJ8k4%2B7Tcyramz%2FR5qcpebWsYV7uYMqv4XuPVRkvUpvl2vEAPThaFNyMreHqXQikZKKOt3wczsi6UEc2JzkXJMJyWpMIGOqUB1em5aKJCD2FE7se%2F6GaDCS8iTpUOabvQ%2F2QU61ykA2CfEzMptZu%2FNH6Xnu7TAgPidkc3W2n%2Fb9lDzE3Ycw6vHezZg%2Bl5V83bV3s9o5QFd%2B1nnmFU5iH5fXMFwIGutSgMTuXpUeSP%2B2ILT%2FamZdpgPRh3ULLGioJMQaV3lRxN0gZFKv99%2BwKE%2Btft6iB3EcfYYKh%2B3ETMp3RP%2BOkOyswNNmA7FXqu&X-Amz-Signature=f36d9b4fca6850dd61ce97698c84439f3f983c4c52218a3c9a70e39fc0a1b01b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYVOGDN4%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHL0FfscS%2FaWr1s2K31arFfAAcX0%2B4RqH1KXo26QdGl5AiEA6M2bzXRgyLtQjhp%2B83K%2Faq0woNe%2BAy2lBC138vmBlMEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBSqGdrKGXycLx5RircA%2BbcMtafLPJnoNmtVHq%2FCGmCyOIRMGQm1xQLj2mhfFRUjJfK5k9Vz29YYmiRht4SGlx9uU26ba7%2FG0HHdjJ9kogp4dEStI%2BZ%2BWmR2CiADPYkqyDQ19VKFbTfqXVbDGzwKMr%2FslA%2F66M9xRTZJokW1eWjWWeU6H%2FLHjA5KBt21E61T9IemL81hEuKQWVhu0J9gdB6l9cznuhX5vPqKEw3ZtSZh6xEv4RNTNozjkkqvo7149S9BOjbRJcsSi1YsFwRm1iQL7VTi75c4TrYIHq6XoCrGC5U3s1d%2B8ifXqHbNNuMNLnZxMu4k6MHam0heCjGBAHj2Pxyx0W%2BnE6ePOqRhS31%2BbBWYZJjYEsyKMqDoJAsZpplsuLt%2Fg1wVtsEv71WjLXxQPlI%2Bq%2BavyjTYGiYC%2Fq24YeDESR7lmpJ%2FdZsGFCgij4BKrOVfvCycV2mXpdkTfIbSLgOgx6C5vQIN8JR8PU52RKRD2OyExQnt9vkEpVPqtsoYGjqd4c1IHgl46xbJZFn0YY8roeDCpxznr0M41bRD75CqvA9CikCAnunJ8k4%2B7Tcyramz%2FR5qcpebWsYV7uYMqv4XuPVRkvUpvl2vEAPThaFNyMreHqXQikZKKOt3wczsi6UEc2JzkXJMJyWpMIGOqUB1em5aKJCD2FE7se%2F6GaDCS8iTpUOabvQ%2F2QU61ykA2CfEzMptZu%2FNH6Xnu7TAgPidkc3W2n%2Fb9lDzE3Ycw6vHezZg%2Bl5V83bV3s9o5QFd%2B1nnmFU5iH5fXMFwIGutSgMTuXpUeSP%2B2ILT%2FamZdpgPRh3ULLGioJMQaV3lRxN0gZFKv99%2BwKE%2Btft6iB3EcfYYKh%2B3ETMp3RP%2BOkOyswNNmA7FXqu&X-Amz-Signature=1ace56ada02841369d349bb47582254d3dc08e316b0eccf28e0ad3dc634cba3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYVOGDN4%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHL0FfscS%2FaWr1s2K31arFfAAcX0%2B4RqH1KXo26QdGl5AiEA6M2bzXRgyLtQjhp%2B83K%2Faq0woNe%2BAy2lBC138vmBlMEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBSqGdrKGXycLx5RircA%2BbcMtafLPJnoNmtVHq%2FCGmCyOIRMGQm1xQLj2mhfFRUjJfK5k9Vz29YYmiRht4SGlx9uU26ba7%2FG0HHdjJ9kogp4dEStI%2BZ%2BWmR2CiADPYkqyDQ19VKFbTfqXVbDGzwKMr%2FslA%2F66M9xRTZJokW1eWjWWeU6H%2FLHjA5KBt21E61T9IemL81hEuKQWVhu0J9gdB6l9cznuhX5vPqKEw3ZtSZh6xEv4RNTNozjkkqvo7149S9BOjbRJcsSi1YsFwRm1iQL7VTi75c4TrYIHq6XoCrGC5U3s1d%2B8ifXqHbNNuMNLnZxMu4k6MHam0heCjGBAHj2Pxyx0W%2BnE6ePOqRhS31%2BbBWYZJjYEsyKMqDoJAsZpplsuLt%2Fg1wVtsEv71WjLXxQPlI%2Bq%2BavyjTYGiYC%2Fq24YeDESR7lmpJ%2FdZsGFCgij4BKrOVfvCycV2mXpdkTfIbSLgOgx6C5vQIN8JR8PU52RKRD2OyExQnt9vkEpVPqtsoYGjqd4c1IHgl46xbJZFn0YY8roeDCpxznr0M41bRD75CqvA9CikCAnunJ8k4%2B7Tcyramz%2FR5qcpebWsYV7uYMqv4XuPVRkvUpvl2vEAPThaFNyMreHqXQikZKKOt3wczsi6UEc2JzkXJMJyWpMIGOqUB1em5aKJCD2FE7se%2F6GaDCS8iTpUOabvQ%2F2QU61ykA2CfEzMptZu%2FNH6Xnu7TAgPidkc3W2n%2Fb9lDzE3Ycw6vHezZg%2Bl5V83bV3s9o5QFd%2B1nnmFU5iH5fXMFwIGutSgMTuXpUeSP%2B2ILT%2FamZdpgPRh3ULLGioJMQaV3lRxN0gZFKv99%2BwKE%2Btft6iB3EcfYYKh%2B3ETMp3RP%2BOkOyswNNmA7FXqu&X-Amz-Signature=92a860c226682f47b5922c3ed1fcf501bf1d157a384a8e85f5081c631fe40db3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYVOGDN4%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHL0FfscS%2FaWr1s2K31arFfAAcX0%2B4RqH1KXo26QdGl5AiEA6M2bzXRgyLtQjhp%2B83K%2Faq0woNe%2BAy2lBC138vmBlMEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBSqGdrKGXycLx5RircA%2BbcMtafLPJnoNmtVHq%2FCGmCyOIRMGQm1xQLj2mhfFRUjJfK5k9Vz29YYmiRht4SGlx9uU26ba7%2FG0HHdjJ9kogp4dEStI%2BZ%2BWmR2CiADPYkqyDQ19VKFbTfqXVbDGzwKMr%2FslA%2F66M9xRTZJokW1eWjWWeU6H%2FLHjA5KBt21E61T9IemL81hEuKQWVhu0J9gdB6l9cznuhX5vPqKEw3ZtSZh6xEv4RNTNozjkkqvo7149S9BOjbRJcsSi1YsFwRm1iQL7VTi75c4TrYIHq6XoCrGC5U3s1d%2B8ifXqHbNNuMNLnZxMu4k6MHam0heCjGBAHj2Pxyx0W%2BnE6ePOqRhS31%2BbBWYZJjYEsyKMqDoJAsZpplsuLt%2Fg1wVtsEv71WjLXxQPlI%2Bq%2BavyjTYGiYC%2Fq24YeDESR7lmpJ%2FdZsGFCgij4BKrOVfvCycV2mXpdkTfIbSLgOgx6C5vQIN8JR8PU52RKRD2OyExQnt9vkEpVPqtsoYGjqd4c1IHgl46xbJZFn0YY8roeDCpxznr0M41bRD75CqvA9CikCAnunJ8k4%2B7Tcyramz%2FR5qcpebWsYV7uYMqv4XuPVRkvUpvl2vEAPThaFNyMreHqXQikZKKOt3wczsi6UEc2JzkXJMJyWpMIGOqUB1em5aKJCD2FE7se%2F6GaDCS8iTpUOabvQ%2F2QU61ykA2CfEzMptZu%2FNH6Xnu7TAgPidkc3W2n%2Fb9lDzE3Ycw6vHezZg%2Bl5V83bV3s9o5QFd%2B1nnmFU5iH5fXMFwIGutSgMTuXpUeSP%2B2ILT%2FamZdpgPRh3ULLGioJMQaV3lRxN0gZFKv99%2BwKE%2Btft6iB3EcfYYKh%2B3ETMp3RP%2BOkOyswNNmA7FXqu&X-Amz-Signature=fd16e6780d93d9c35e9f93aeb02f8a19e5023f59339a30e4c764e9745b14896b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
