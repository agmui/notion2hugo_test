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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BD4ZZVS%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCaZQ23QgeP9EZRCtFcwB5KDlTKPo6JZBiYd2DUbqWGwgIgVrve99wvy7WFlXOnvBM8gmqKm3pj2KcM3eSkMLDzcBQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDM1IvjyPm3bp1ysTkyrcA47PFcigcNjlZ9Wx7%2F5GkPIlh37%2BwdPKMXuDmeens5kFdx7ddXCy%2BGim4ACPftd8elP2fbOC03fBTfTb39kKKrFm8Bb0k5NQQ9%2FisaHKqiQ9RQJ50SOxhQcEoNJMwO6hk%2BBmcrXAnEjNf3RBRpJgaMu3vbVxqCF9pHPCd2YTT5gZ0b24rjiSPHS2%2FDlR233b5t4NVa7DCo8jtntSxPkxpt3BrV2M24hYB7SVaSSk9zoz199jDoy5diyDj%2BA5PSjRietymWBJWZ%2F0qhS8MtHJHZCOiZSzx%2F6tW6Dzz5ElSTrr%2BrJxB9SJPelGiuXPgE9D%2BF2DCV659hbIVosJyt%2Bc%2FLS3pgXjVJioKvpF2Y09jiIdGhuGdL5Z%2BaBSZ5JpCeed8stZjF9ufi2h%2BrGI8gFK%2Bo12ihLsz0OiajmV0Vmld5eP67mDusSGRW%2Fk3gA20vQdj8bSZLXVluDU9HKpS0BVCjzUzXCiWFKC4soOHREyM3ejKaeSQCaHTMRgVoIKi%2FnMOJ0iqcKNbTfgH0sJo6ZmYtKSCVYYls6nRWDZ6ctm0GeLQ%2BMi0zyrinAwrccRPn9A16IphDyPqaT7AOKw5f4ejd6A9ao6q0rvN3t3j%2F2KqA6aXUL7OQvgTE2WvOPCMMPe6L4GOqUB6YN1CjgP1iqVzPtbPyTKkDBnujqisoTk2wfjjwlA5mNR0tkc7sF8KNuZSzO%2BstbVyAiIgUP1XPa%2B70l9xxhbmnDtKeYRbEVlLI3qkDULwfMXes4vwnyhWEYLdVX1MjTw%2B5Qmig%2FVBEZ%2FTTPP2ZyPSO1MU9gFb4rmqG3JoQzGJI9g9aZaBVMnscodFz0BfHDDLbYYqAIAqYgnBQDJ1wPdqW83oeYw&X-Amz-Signature=665992e5f5383dab2799e489abbecd1eb3dc961c8f928502686e5ae5349cde65&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BD4ZZVS%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCaZQ23QgeP9EZRCtFcwB5KDlTKPo6JZBiYd2DUbqWGwgIgVrve99wvy7WFlXOnvBM8gmqKm3pj2KcM3eSkMLDzcBQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDM1IvjyPm3bp1ysTkyrcA47PFcigcNjlZ9Wx7%2F5GkPIlh37%2BwdPKMXuDmeens5kFdx7ddXCy%2BGim4ACPftd8elP2fbOC03fBTfTb39kKKrFm8Bb0k5NQQ9%2FisaHKqiQ9RQJ50SOxhQcEoNJMwO6hk%2BBmcrXAnEjNf3RBRpJgaMu3vbVxqCF9pHPCd2YTT5gZ0b24rjiSPHS2%2FDlR233b5t4NVa7DCo8jtntSxPkxpt3BrV2M24hYB7SVaSSk9zoz199jDoy5diyDj%2BA5PSjRietymWBJWZ%2F0qhS8MtHJHZCOiZSzx%2F6tW6Dzz5ElSTrr%2BrJxB9SJPelGiuXPgE9D%2BF2DCV659hbIVosJyt%2Bc%2FLS3pgXjVJioKvpF2Y09jiIdGhuGdL5Z%2BaBSZ5JpCeed8stZjF9ufi2h%2BrGI8gFK%2Bo12ihLsz0OiajmV0Vmld5eP67mDusSGRW%2Fk3gA20vQdj8bSZLXVluDU9HKpS0BVCjzUzXCiWFKC4soOHREyM3ejKaeSQCaHTMRgVoIKi%2FnMOJ0iqcKNbTfgH0sJo6ZmYtKSCVYYls6nRWDZ6ctm0GeLQ%2BMi0zyrinAwrccRPn9A16IphDyPqaT7AOKw5f4ejd6A9ao6q0rvN3t3j%2F2KqA6aXUL7OQvgTE2WvOPCMMPe6L4GOqUB6YN1CjgP1iqVzPtbPyTKkDBnujqisoTk2wfjjwlA5mNR0tkc7sF8KNuZSzO%2BstbVyAiIgUP1XPa%2B70l9xxhbmnDtKeYRbEVlLI3qkDULwfMXes4vwnyhWEYLdVX1MjTw%2B5Qmig%2FVBEZ%2FTTPP2ZyPSO1MU9gFb4rmqG3JoQzGJI9g9aZaBVMnscodFz0BfHDDLbYYqAIAqYgnBQDJ1wPdqW83oeYw&X-Amz-Signature=178f4c317f9484adc71cd50f4c860c6b410f603968cf6f1e09857da9c860f833&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BD4ZZVS%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCaZQ23QgeP9EZRCtFcwB5KDlTKPo6JZBiYd2DUbqWGwgIgVrve99wvy7WFlXOnvBM8gmqKm3pj2KcM3eSkMLDzcBQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDM1IvjyPm3bp1ysTkyrcA47PFcigcNjlZ9Wx7%2F5GkPIlh37%2BwdPKMXuDmeens5kFdx7ddXCy%2BGim4ACPftd8elP2fbOC03fBTfTb39kKKrFm8Bb0k5NQQ9%2FisaHKqiQ9RQJ50SOxhQcEoNJMwO6hk%2BBmcrXAnEjNf3RBRpJgaMu3vbVxqCF9pHPCd2YTT5gZ0b24rjiSPHS2%2FDlR233b5t4NVa7DCo8jtntSxPkxpt3BrV2M24hYB7SVaSSk9zoz199jDoy5diyDj%2BA5PSjRietymWBJWZ%2F0qhS8MtHJHZCOiZSzx%2F6tW6Dzz5ElSTrr%2BrJxB9SJPelGiuXPgE9D%2BF2DCV659hbIVosJyt%2Bc%2FLS3pgXjVJioKvpF2Y09jiIdGhuGdL5Z%2BaBSZ5JpCeed8stZjF9ufi2h%2BrGI8gFK%2Bo12ihLsz0OiajmV0Vmld5eP67mDusSGRW%2Fk3gA20vQdj8bSZLXVluDU9HKpS0BVCjzUzXCiWFKC4soOHREyM3ejKaeSQCaHTMRgVoIKi%2FnMOJ0iqcKNbTfgH0sJo6ZmYtKSCVYYls6nRWDZ6ctm0GeLQ%2BMi0zyrinAwrccRPn9A16IphDyPqaT7AOKw5f4ejd6A9ao6q0rvN3t3j%2F2KqA6aXUL7OQvgTE2WvOPCMMPe6L4GOqUB6YN1CjgP1iqVzPtbPyTKkDBnujqisoTk2wfjjwlA5mNR0tkc7sF8KNuZSzO%2BstbVyAiIgUP1XPa%2B70l9xxhbmnDtKeYRbEVlLI3qkDULwfMXes4vwnyhWEYLdVX1MjTw%2B5Qmig%2FVBEZ%2FTTPP2ZyPSO1MU9gFb4rmqG3JoQzGJI9g9aZaBVMnscodFz0BfHDDLbYYqAIAqYgnBQDJ1wPdqW83oeYw&X-Amz-Signature=39cb574f8de1708e1e53ce9b0df087085964cb629ab6e6a3873789edc4952dbb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BD4ZZVS%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCaZQ23QgeP9EZRCtFcwB5KDlTKPo6JZBiYd2DUbqWGwgIgVrve99wvy7WFlXOnvBM8gmqKm3pj2KcM3eSkMLDzcBQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDM1IvjyPm3bp1ysTkyrcA47PFcigcNjlZ9Wx7%2F5GkPIlh37%2BwdPKMXuDmeens5kFdx7ddXCy%2BGim4ACPftd8elP2fbOC03fBTfTb39kKKrFm8Bb0k5NQQ9%2FisaHKqiQ9RQJ50SOxhQcEoNJMwO6hk%2BBmcrXAnEjNf3RBRpJgaMu3vbVxqCF9pHPCd2YTT5gZ0b24rjiSPHS2%2FDlR233b5t4NVa7DCo8jtntSxPkxpt3BrV2M24hYB7SVaSSk9zoz199jDoy5diyDj%2BA5PSjRietymWBJWZ%2F0qhS8MtHJHZCOiZSzx%2F6tW6Dzz5ElSTrr%2BrJxB9SJPelGiuXPgE9D%2BF2DCV659hbIVosJyt%2Bc%2FLS3pgXjVJioKvpF2Y09jiIdGhuGdL5Z%2BaBSZ5JpCeed8stZjF9ufi2h%2BrGI8gFK%2Bo12ihLsz0OiajmV0Vmld5eP67mDusSGRW%2Fk3gA20vQdj8bSZLXVluDU9HKpS0BVCjzUzXCiWFKC4soOHREyM3ejKaeSQCaHTMRgVoIKi%2FnMOJ0iqcKNbTfgH0sJo6ZmYtKSCVYYls6nRWDZ6ctm0GeLQ%2BMi0zyrinAwrccRPn9A16IphDyPqaT7AOKw5f4ejd6A9ao6q0rvN3t3j%2F2KqA6aXUL7OQvgTE2WvOPCMMPe6L4GOqUB6YN1CjgP1iqVzPtbPyTKkDBnujqisoTk2wfjjwlA5mNR0tkc7sF8KNuZSzO%2BstbVyAiIgUP1XPa%2B70l9xxhbmnDtKeYRbEVlLI3qkDULwfMXes4vwnyhWEYLdVX1MjTw%2B5Qmig%2FVBEZ%2FTTPP2ZyPSO1MU9gFb4rmqG3JoQzGJI9g9aZaBVMnscodFz0BfHDDLbYYqAIAqYgnBQDJ1wPdqW83oeYw&X-Amz-Signature=fefa58e3b9c783aa42f79ee61a761fd98db70536bbbfdcdba9c852a12e0f4450&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BD4ZZVS%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCaZQ23QgeP9EZRCtFcwB5KDlTKPo6JZBiYd2DUbqWGwgIgVrve99wvy7WFlXOnvBM8gmqKm3pj2KcM3eSkMLDzcBQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDM1IvjyPm3bp1ysTkyrcA47PFcigcNjlZ9Wx7%2F5GkPIlh37%2BwdPKMXuDmeens5kFdx7ddXCy%2BGim4ACPftd8elP2fbOC03fBTfTb39kKKrFm8Bb0k5NQQ9%2FisaHKqiQ9RQJ50SOxhQcEoNJMwO6hk%2BBmcrXAnEjNf3RBRpJgaMu3vbVxqCF9pHPCd2YTT5gZ0b24rjiSPHS2%2FDlR233b5t4NVa7DCo8jtntSxPkxpt3BrV2M24hYB7SVaSSk9zoz199jDoy5diyDj%2BA5PSjRietymWBJWZ%2F0qhS8MtHJHZCOiZSzx%2F6tW6Dzz5ElSTrr%2BrJxB9SJPelGiuXPgE9D%2BF2DCV659hbIVosJyt%2Bc%2FLS3pgXjVJioKvpF2Y09jiIdGhuGdL5Z%2BaBSZ5JpCeed8stZjF9ufi2h%2BrGI8gFK%2Bo12ihLsz0OiajmV0Vmld5eP67mDusSGRW%2Fk3gA20vQdj8bSZLXVluDU9HKpS0BVCjzUzXCiWFKC4soOHREyM3ejKaeSQCaHTMRgVoIKi%2FnMOJ0iqcKNbTfgH0sJo6ZmYtKSCVYYls6nRWDZ6ctm0GeLQ%2BMi0zyrinAwrccRPn9A16IphDyPqaT7AOKw5f4ejd6A9ao6q0rvN3t3j%2F2KqA6aXUL7OQvgTE2WvOPCMMPe6L4GOqUB6YN1CjgP1iqVzPtbPyTKkDBnujqisoTk2wfjjwlA5mNR0tkc7sF8KNuZSzO%2BstbVyAiIgUP1XPa%2B70l9xxhbmnDtKeYRbEVlLI3qkDULwfMXes4vwnyhWEYLdVX1MjTw%2B5Qmig%2FVBEZ%2FTTPP2ZyPSO1MU9gFb4rmqG3JoQzGJI9g9aZaBVMnscodFz0BfHDDLbYYqAIAqYgnBQDJ1wPdqW83oeYw&X-Amz-Signature=aa11cfc23f2dc8225712584c61d6b92216f3ea3e3e0dda185250b814868cb054&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BD4ZZVS%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCaZQ23QgeP9EZRCtFcwB5KDlTKPo6JZBiYd2DUbqWGwgIgVrve99wvy7WFlXOnvBM8gmqKm3pj2KcM3eSkMLDzcBQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDM1IvjyPm3bp1ysTkyrcA47PFcigcNjlZ9Wx7%2F5GkPIlh37%2BwdPKMXuDmeens5kFdx7ddXCy%2BGim4ACPftd8elP2fbOC03fBTfTb39kKKrFm8Bb0k5NQQ9%2FisaHKqiQ9RQJ50SOxhQcEoNJMwO6hk%2BBmcrXAnEjNf3RBRpJgaMu3vbVxqCF9pHPCd2YTT5gZ0b24rjiSPHS2%2FDlR233b5t4NVa7DCo8jtntSxPkxpt3BrV2M24hYB7SVaSSk9zoz199jDoy5diyDj%2BA5PSjRietymWBJWZ%2F0qhS8MtHJHZCOiZSzx%2F6tW6Dzz5ElSTrr%2BrJxB9SJPelGiuXPgE9D%2BF2DCV659hbIVosJyt%2Bc%2FLS3pgXjVJioKvpF2Y09jiIdGhuGdL5Z%2BaBSZ5JpCeed8stZjF9ufi2h%2BrGI8gFK%2Bo12ihLsz0OiajmV0Vmld5eP67mDusSGRW%2Fk3gA20vQdj8bSZLXVluDU9HKpS0BVCjzUzXCiWFKC4soOHREyM3ejKaeSQCaHTMRgVoIKi%2FnMOJ0iqcKNbTfgH0sJo6ZmYtKSCVYYls6nRWDZ6ctm0GeLQ%2BMi0zyrinAwrccRPn9A16IphDyPqaT7AOKw5f4ejd6A9ao6q0rvN3t3j%2F2KqA6aXUL7OQvgTE2WvOPCMMPe6L4GOqUB6YN1CjgP1iqVzPtbPyTKkDBnujqisoTk2wfjjwlA5mNR0tkc7sF8KNuZSzO%2BstbVyAiIgUP1XPa%2B70l9xxhbmnDtKeYRbEVlLI3qkDULwfMXes4vwnyhWEYLdVX1MjTw%2B5Qmig%2FVBEZ%2FTTPP2ZyPSO1MU9gFb4rmqG3JoQzGJI9g9aZaBVMnscodFz0BfHDDLbYYqAIAqYgnBQDJ1wPdqW83oeYw&X-Amz-Signature=9fe0f36346a77f3f9960e6ab8d27bc004808b3184d49c1826bdff29f6d036e0e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BD4ZZVS%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCaZQ23QgeP9EZRCtFcwB5KDlTKPo6JZBiYd2DUbqWGwgIgVrve99wvy7WFlXOnvBM8gmqKm3pj2KcM3eSkMLDzcBQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDM1IvjyPm3bp1ysTkyrcA47PFcigcNjlZ9Wx7%2F5GkPIlh37%2BwdPKMXuDmeens5kFdx7ddXCy%2BGim4ACPftd8elP2fbOC03fBTfTb39kKKrFm8Bb0k5NQQ9%2FisaHKqiQ9RQJ50SOxhQcEoNJMwO6hk%2BBmcrXAnEjNf3RBRpJgaMu3vbVxqCF9pHPCd2YTT5gZ0b24rjiSPHS2%2FDlR233b5t4NVa7DCo8jtntSxPkxpt3BrV2M24hYB7SVaSSk9zoz199jDoy5diyDj%2BA5PSjRietymWBJWZ%2F0qhS8MtHJHZCOiZSzx%2F6tW6Dzz5ElSTrr%2BrJxB9SJPelGiuXPgE9D%2BF2DCV659hbIVosJyt%2Bc%2FLS3pgXjVJioKvpF2Y09jiIdGhuGdL5Z%2BaBSZ5JpCeed8stZjF9ufi2h%2BrGI8gFK%2Bo12ihLsz0OiajmV0Vmld5eP67mDusSGRW%2Fk3gA20vQdj8bSZLXVluDU9HKpS0BVCjzUzXCiWFKC4soOHREyM3ejKaeSQCaHTMRgVoIKi%2FnMOJ0iqcKNbTfgH0sJo6ZmYtKSCVYYls6nRWDZ6ctm0GeLQ%2BMi0zyrinAwrccRPn9A16IphDyPqaT7AOKw5f4ejd6A9ao6q0rvN3t3j%2F2KqA6aXUL7OQvgTE2WvOPCMMPe6L4GOqUB6YN1CjgP1iqVzPtbPyTKkDBnujqisoTk2wfjjwlA5mNR0tkc7sF8KNuZSzO%2BstbVyAiIgUP1XPa%2B70l9xxhbmnDtKeYRbEVlLI3qkDULwfMXes4vwnyhWEYLdVX1MjTw%2B5Qmig%2FVBEZ%2FTTPP2ZyPSO1MU9gFb4rmqG3JoQzGJI9g9aZaBVMnscodFz0BfHDDLbYYqAIAqYgnBQDJ1wPdqW83oeYw&X-Amz-Signature=f50bd6aac92886ddb2bd5ce6d49f92b66a4f1f840c0a28a896bc49058a65f073&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BD4ZZVS%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCaZQ23QgeP9EZRCtFcwB5KDlTKPo6JZBiYd2DUbqWGwgIgVrve99wvy7WFlXOnvBM8gmqKm3pj2KcM3eSkMLDzcBQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDM1IvjyPm3bp1ysTkyrcA47PFcigcNjlZ9Wx7%2F5GkPIlh37%2BwdPKMXuDmeens5kFdx7ddXCy%2BGim4ACPftd8elP2fbOC03fBTfTb39kKKrFm8Bb0k5NQQ9%2FisaHKqiQ9RQJ50SOxhQcEoNJMwO6hk%2BBmcrXAnEjNf3RBRpJgaMu3vbVxqCF9pHPCd2YTT5gZ0b24rjiSPHS2%2FDlR233b5t4NVa7DCo8jtntSxPkxpt3BrV2M24hYB7SVaSSk9zoz199jDoy5diyDj%2BA5PSjRietymWBJWZ%2F0qhS8MtHJHZCOiZSzx%2F6tW6Dzz5ElSTrr%2BrJxB9SJPelGiuXPgE9D%2BF2DCV659hbIVosJyt%2Bc%2FLS3pgXjVJioKvpF2Y09jiIdGhuGdL5Z%2BaBSZ5JpCeed8stZjF9ufi2h%2BrGI8gFK%2Bo12ihLsz0OiajmV0Vmld5eP67mDusSGRW%2Fk3gA20vQdj8bSZLXVluDU9HKpS0BVCjzUzXCiWFKC4soOHREyM3ejKaeSQCaHTMRgVoIKi%2FnMOJ0iqcKNbTfgH0sJo6ZmYtKSCVYYls6nRWDZ6ctm0GeLQ%2BMi0zyrinAwrccRPn9A16IphDyPqaT7AOKw5f4ejd6A9ao6q0rvN3t3j%2F2KqA6aXUL7OQvgTE2WvOPCMMPe6L4GOqUB6YN1CjgP1iqVzPtbPyTKkDBnujqisoTk2wfjjwlA5mNR0tkc7sF8KNuZSzO%2BstbVyAiIgUP1XPa%2B70l9xxhbmnDtKeYRbEVlLI3qkDULwfMXes4vwnyhWEYLdVX1MjTw%2B5Qmig%2FVBEZ%2FTTPP2ZyPSO1MU9gFb4rmqG3JoQzGJI9g9aZaBVMnscodFz0BfHDDLbYYqAIAqYgnBQDJ1wPdqW83oeYw&X-Amz-Signature=9f9d98704944ff529822ba8a11492625e90c4296a8309d18ce2f6e1b871aab55&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
