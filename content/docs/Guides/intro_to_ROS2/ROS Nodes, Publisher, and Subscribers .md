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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7FR3FYS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDghtFEYRg%2FjJc0Y95RCaQs1Tnf5vUe2yHnLE144hdjFAIgZY2dXe0jx5ltgBA0QnPE4qSqbkR36BUw%2F6YAi2s2SWMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELIX8hoJ9Pr5QNh3CrcA9hPFsgOWb%2FLWfXZCCQAR2bxicK3iPvPixc3F2%2Fxufpot%2BK6CFy0r3imyj9HS5jD8rv7xsGK8MzzxpCh7MXi4N1l9m4Tz690o9DfgykDARJYznIh6JOid%2Fe%2Ff98Fpk4eAJg9QTx8O2DGlvXyU0xeaGqvirLy5BCZZii9Dh9GPemx1pKFSD411oXr%2FmaexBrpRW4aKVs456kE%2Fso%2Bu2LlgSNOyTiTPjd5G9y323h1zQF03TgJCCrH01Ec9rDvQLGGOvFGbRD7zm8yCyyHjGzVH9sP%2F8NBvYxQpgc6ZKtn%2FxIj5ouRrZefEzTZfbS5Gf7hM2eczCU6dKqbqU8TT1Aeq1SpUedZ4bGJvxkGdIYnakABh5IdVICxaMQQZ60XAu%2Fnjb0yWGFvBN%2BgnHpw%2FOE6PjRnhJb41%2FNMjpUHcgorP8SHUQ%2BJLiACQaLC8byie%2Bv1uD0c9Cnm6kgnQ6po0ywJVv%2BnW1DP3Ug8%2FG9HBqFmLbgtHt%2FmTHIRtHk0f0dudUyGqqZ7j4Sms%2BhnrQnOKdrMQ0D66mpSyO%2FTCe4MEDZja%2BdCVrtbjAbe0ZglOH36ufo4tu4mwOXRBkzIL2vOt7P6BzG2vgpApKu8HcfXqjtZRmldgXpk09Gf5hUjueg8MInM%2F74GOqUBNHYU08zlL4LvNLVfV%2BZDhb4s%2F3CljyubVJFTbbKZ5d6pNeSXVKE8M9TlC%2BVeJfYJf95oC5IJejZ%2F%2FYaJtyCvX4fdntMU3X5OWsH5GqaM3EvUcRcAX48mScWcwVrrMuw3tahsL3%2FJsoH9ETa%2Bdciy4VjpB43GGngEyl2H1bsZJleSHrZYMpB4KErgRcFhiXLAQGIbm0wJqmqRgkpEDrdtZ1YSrjA2&X-Amz-Signature=a6a876160e1f79935f3999c149c4a0531d3e28cdcda73694dbf9d1a00da1766c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7FR3FYS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDghtFEYRg%2FjJc0Y95RCaQs1Tnf5vUe2yHnLE144hdjFAIgZY2dXe0jx5ltgBA0QnPE4qSqbkR36BUw%2F6YAi2s2SWMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELIX8hoJ9Pr5QNh3CrcA9hPFsgOWb%2FLWfXZCCQAR2bxicK3iPvPixc3F2%2Fxufpot%2BK6CFy0r3imyj9HS5jD8rv7xsGK8MzzxpCh7MXi4N1l9m4Tz690o9DfgykDARJYznIh6JOid%2Fe%2Ff98Fpk4eAJg9QTx8O2DGlvXyU0xeaGqvirLy5BCZZii9Dh9GPemx1pKFSD411oXr%2FmaexBrpRW4aKVs456kE%2Fso%2Bu2LlgSNOyTiTPjd5G9y323h1zQF03TgJCCrH01Ec9rDvQLGGOvFGbRD7zm8yCyyHjGzVH9sP%2F8NBvYxQpgc6ZKtn%2FxIj5ouRrZefEzTZfbS5Gf7hM2eczCU6dKqbqU8TT1Aeq1SpUedZ4bGJvxkGdIYnakABh5IdVICxaMQQZ60XAu%2Fnjb0yWGFvBN%2BgnHpw%2FOE6PjRnhJb41%2FNMjpUHcgorP8SHUQ%2BJLiACQaLC8byie%2Bv1uD0c9Cnm6kgnQ6po0ywJVv%2BnW1DP3Ug8%2FG9HBqFmLbgtHt%2FmTHIRtHk0f0dudUyGqqZ7j4Sms%2BhnrQnOKdrMQ0D66mpSyO%2FTCe4MEDZja%2BdCVrtbjAbe0ZglOH36ufo4tu4mwOXRBkzIL2vOt7P6BzG2vgpApKu8HcfXqjtZRmldgXpk09Gf5hUjueg8MInM%2F74GOqUBNHYU08zlL4LvNLVfV%2BZDhb4s%2F3CljyubVJFTbbKZ5d6pNeSXVKE8M9TlC%2BVeJfYJf95oC5IJejZ%2F%2FYaJtyCvX4fdntMU3X5OWsH5GqaM3EvUcRcAX48mScWcwVrrMuw3tahsL3%2FJsoH9ETa%2Bdciy4VjpB43GGngEyl2H1bsZJleSHrZYMpB4KErgRcFhiXLAQGIbm0wJqmqRgkpEDrdtZ1YSrjA2&X-Amz-Signature=24c09eb6583ee8ea42a79fe7143f39637d61820c983c99e0d3cda41b984a3740&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7FR3FYS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDghtFEYRg%2FjJc0Y95RCaQs1Tnf5vUe2yHnLE144hdjFAIgZY2dXe0jx5ltgBA0QnPE4qSqbkR36BUw%2F6YAi2s2SWMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELIX8hoJ9Pr5QNh3CrcA9hPFsgOWb%2FLWfXZCCQAR2bxicK3iPvPixc3F2%2Fxufpot%2BK6CFy0r3imyj9HS5jD8rv7xsGK8MzzxpCh7MXi4N1l9m4Tz690o9DfgykDARJYznIh6JOid%2Fe%2Ff98Fpk4eAJg9QTx8O2DGlvXyU0xeaGqvirLy5BCZZii9Dh9GPemx1pKFSD411oXr%2FmaexBrpRW4aKVs456kE%2Fso%2Bu2LlgSNOyTiTPjd5G9y323h1zQF03TgJCCrH01Ec9rDvQLGGOvFGbRD7zm8yCyyHjGzVH9sP%2F8NBvYxQpgc6ZKtn%2FxIj5ouRrZefEzTZfbS5Gf7hM2eczCU6dKqbqU8TT1Aeq1SpUedZ4bGJvxkGdIYnakABh5IdVICxaMQQZ60XAu%2Fnjb0yWGFvBN%2BgnHpw%2FOE6PjRnhJb41%2FNMjpUHcgorP8SHUQ%2BJLiACQaLC8byie%2Bv1uD0c9Cnm6kgnQ6po0ywJVv%2BnW1DP3Ug8%2FG9HBqFmLbgtHt%2FmTHIRtHk0f0dudUyGqqZ7j4Sms%2BhnrQnOKdrMQ0D66mpSyO%2FTCe4MEDZja%2BdCVrtbjAbe0ZglOH36ufo4tu4mwOXRBkzIL2vOt7P6BzG2vgpApKu8HcfXqjtZRmldgXpk09Gf5hUjueg8MInM%2F74GOqUBNHYU08zlL4LvNLVfV%2BZDhb4s%2F3CljyubVJFTbbKZ5d6pNeSXVKE8M9TlC%2BVeJfYJf95oC5IJejZ%2F%2FYaJtyCvX4fdntMU3X5OWsH5GqaM3EvUcRcAX48mScWcwVrrMuw3tahsL3%2FJsoH9ETa%2Bdciy4VjpB43GGngEyl2H1bsZJleSHrZYMpB4KErgRcFhiXLAQGIbm0wJqmqRgkpEDrdtZ1YSrjA2&X-Amz-Signature=b598fbc35fd0ca867cf80b15254dac8676bd89377f505b3dd36d108a629d2852&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7FR3FYS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDghtFEYRg%2FjJc0Y95RCaQs1Tnf5vUe2yHnLE144hdjFAIgZY2dXe0jx5ltgBA0QnPE4qSqbkR36BUw%2F6YAi2s2SWMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELIX8hoJ9Pr5QNh3CrcA9hPFsgOWb%2FLWfXZCCQAR2bxicK3iPvPixc3F2%2Fxufpot%2BK6CFy0r3imyj9HS5jD8rv7xsGK8MzzxpCh7MXi4N1l9m4Tz690o9DfgykDARJYznIh6JOid%2Fe%2Ff98Fpk4eAJg9QTx8O2DGlvXyU0xeaGqvirLy5BCZZii9Dh9GPemx1pKFSD411oXr%2FmaexBrpRW4aKVs456kE%2Fso%2Bu2LlgSNOyTiTPjd5G9y323h1zQF03TgJCCrH01Ec9rDvQLGGOvFGbRD7zm8yCyyHjGzVH9sP%2F8NBvYxQpgc6ZKtn%2FxIj5ouRrZefEzTZfbS5Gf7hM2eczCU6dKqbqU8TT1Aeq1SpUedZ4bGJvxkGdIYnakABh5IdVICxaMQQZ60XAu%2Fnjb0yWGFvBN%2BgnHpw%2FOE6PjRnhJb41%2FNMjpUHcgorP8SHUQ%2BJLiACQaLC8byie%2Bv1uD0c9Cnm6kgnQ6po0ywJVv%2BnW1DP3Ug8%2FG9HBqFmLbgtHt%2FmTHIRtHk0f0dudUyGqqZ7j4Sms%2BhnrQnOKdrMQ0D66mpSyO%2FTCe4MEDZja%2BdCVrtbjAbe0ZglOH36ufo4tu4mwOXRBkzIL2vOt7P6BzG2vgpApKu8HcfXqjtZRmldgXpk09Gf5hUjueg8MInM%2F74GOqUBNHYU08zlL4LvNLVfV%2BZDhb4s%2F3CljyubVJFTbbKZ5d6pNeSXVKE8M9TlC%2BVeJfYJf95oC5IJejZ%2F%2FYaJtyCvX4fdntMU3X5OWsH5GqaM3EvUcRcAX48mScWcwVrrMuw3tahsL3%2FJsoH9ETa%2Bdciy4VjpB43GGngEyl2H1bsZJleSHrZYMpB4KErgRcFhiXLAQGIbm0wJqmqRgkpEDrdtZ1YSrjA2&X-Amz-Signature=2156727825811fca51c82698668d082b22dd00c9cab3e21b5ddab60b8297ff79&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7FR3FYS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDghtFEYRg%2FjJc0Y95RCaQs1Tnf5vUe2yHnLE144hdjFAIgZY2dXe0jx5ltgBA0QnPE4qSqbkR36BUw%2F6YAi2s2SWMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELIX8hoJ9Pr5QNh3CrcA9hPFsgOWb%2FLWfXZCCQAR2bxicK3iPvPixc3F2%2Fxufpot%2BK6CFy0r3imyj9HS5jD8rv7xsGK8MzzxpCh7MXi4N1l9m4Tz690o9DfgykDARJYznIh6JOid%2Fe%2Ff98Fpk4eAJg9QTx8O2DGlvXyU0xeaGqvirLy5BCZZii9Dh9GPemx1pKFSD411oXr%2FmaexBrpRW4aKVs456kE%2Fso%2Bu2LlgSNOyTiTPjd5G9y323h1zQF03TgJCCrH01Ec9rDvQLGGOvFGbRD7zm8yCyyHjGzVH9sP%2F8NBvYxQpgc6ZKtn%2FxIj5ouRrZefEzTZfbS5Gf7hM2eczCU6dKqbqU8TT1Aeq1SpUedZ4bGJvxkGdIYnakABh5IdVICxaMQQZ60XAu%2Fnjb0yWGFvBN%2BgnHpw%2FOE6PjRnhJb41%2FNMjpUHcgorP8SHUQ%2BJLiACQaLC8byie%2Bv1uD0c9Cnm6kgnQ6po0ywJVv%2BnW1DP3Ug8%2FG9HBqFmLbgtHt%2FmTHIRtHk0f0dudUyGqqZ7j4Sms%2BhnrQnOKdrMQ0D66mpSyO%2FTCe4MEDZja%2BdCVrtbjAbe0ZglOH36ufo4tu4mwOXRBkzIL2vOt7P6BzG2vgpApKu8HcfXqjtZRmldgXpk09Gf5hUjueg8MInM%2F74GOqUBNHYU08zlL4LvNLVfV%2BZDhb4s%2F3CljyubVJFTbbKZ5d6pNeSXVKE8M9TlC%2BVeJfYJf95oC5IJejZ%2F%2FYaJtyCvX4fdntMU3X5OWsH5GqaM3EvUcRcAX48mScWcwVrrMuw3tahsL3%2FJsoH9ETa%2Bdciy4VjpB43GGngEyl2H1bsZJleSHrZYMpB4KErgRcFhiXLAQGIbm0wJqmqRgkpEDrdtZ1YSrjA2&X-Amz-Signature=50d8f9d9155af1eeca4c7695f08e05e6f6269d2c92f2fd1ca930aa83b4ea013a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7FR3FYS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDghtFEYRg%2FjJc0Y95RCaQs1Tnf5vUe2yHnLE144hdjFAIgZY2dXe0jx5ltgBA0QnPE4qSqbkR36BUw%2F6YAi2s2SWMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELIX8hoJ9Pr5QNh3CrcA9hPFsgOWb%2FLWfXZCCQAR2bxicK3iPvPixc3F2%2Fxufpot%2BK6CFy0r3imyj9HS5jD8rv7xsGK8MzzxpCh7MXi4N1l9m4Tz690o9DfgykDARJYznIh6JOid%2Fe%2Ff98Fpk4eAJg9QTx8O2DGlvXyU0xeaGqvirLy5BCZZii9Dh9GPemx1pKFSD411oXr%2FmaexBrpRW4aKVs456kE%2Fso%2Bu2LlgSNOyTiTPjd5G9y323h1zQF03TgJCCrH01Ec9rDvQLGGOvFGbRD7zm8yCyyHjGzVH9sP%2F8NBvYxQpgc6ZKtn%2FxIj5ouRrZefEzTZfbS5Gf7hM2eczCU6dKqbqU8TT1Aeq1SpUedZ4bGJvxkGdIYnakABh5IdVICxaMQQZ60XAu%2Fnjb0yWGFvBN%2BgnHpw%2FOE6PjRnhJb41%2FNMjpUHcgorP8SHUQ%2BJLiACQaLC8byie%2Bv1uD0c9Cnm6kgnQ6po0ywJVv%2BnW1DP3Ug8%2FG9HBqFmLbgtHt%2FmTHIRtHk0f0dudUyGqqZ7j4Sms%2BhnrQnOKdrMQ0D66mpSyO%2FTCe4MEDZja%2BdCVrtbjAbe0ZglOH36ufo4tu4mwOXRBkzIL2vOt7P6BzG2vgpApKu8HcfXqjtZRmldgXpk09Gf5hUjueg8MInM%2F74GOqUBNHYU08zlL4LvNLVfV%2BZDhb4s%2F3CljyubVJFTbbKZ5d6pNeSXVKE8M9TlC%2BVeJfYJf95oC5IJejZ%2F%2FYaJtyCvX4fdntMU3X5OWsH5GqaM3EvUcRcAX48mScWcwVrrMuw3tahsL3%2FJsoH9ETa%2Bdciy4VjpB43GGngEyl2H1bsZJleSHrZYMpB4KErgRcFhiXLAQGIbm0wJqmqRgkpEDrdtZ1YSrjA2&X-Amz-Signature=2db1cabf6855ebedb09da3f8cb1b9b19823598df56f8e9d569dfa3b9ba3a99ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7FR3FYS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDghtFEYRg%2FjJc0Y95RCaQs1Tnf5vUe2yHnLE144hdjFAIgZY2dXe0jx5ltgBA0QnPE4qSqbkR36BUw%2F6YAi2s2SWMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELIX8hoJ9Pr5QNh3CrcA9hPFsgOWb%2FLWfXZCCQAR2bxicK3iPvPixc3F2%2Fxufpot%2BK6CFy0r3imyj9HS5jD8rv7xsGK8MzzxpCh7MXi4N1l9m4Tz690o9DfgykDARJYznIh6JOid%2Fe%2Ff98Fpk4eAJg9QTx8O2DGlvXyU0xeaGqvirLy5BCZZii9Dh9GPemx1pKFSD411oXr%2FmaexBrpRW4aKVs456kE%2Fso%2Bu2LlgSNOyTiTPjd5G9y323h1zQF03TgJCCrH01Ec9rDvQLGGOvFGbRD7zm8yCyyHjGzVH9sP%2F8NBvYxQpgc6ZKtn%2FxIj5ouRrZefEzTZfbS5Gf7hM2eczCU6dKqbqU8TT1Aeq1SpUedZ4bGJvxkGdIYnakABh5IdVICxaMQQZ60XAu%2Fnjb0yWGFvBN%2BgnHpw%2FOE6PjRnhJb41%2FNMjpUHcgorP8SHUQ%2BJLiACQaLC8byie%2Bv1uD0c9Cnm6kgnQ6po0ywJVv%2BnW1DP3Ug8%2FG9HBqFmLbgtHt%2FmTHIRtHk0f0dudUyGqqZ7j4Sms%2BhnrQnOKdrMQ0D66mpSyO%2FTCe4MEDZja%2BdCVrtbjAbe0ZglOH36ufo4tu4mwOXRBkzIL2vOt7P6BzG2vgpApKu8HcfXqjtZRmldgXpk09Gf5hUjueg8MInM%2F74GOqUBNHYU08zlL4LvNLVfV%2BZDhb4s%2F3CljyubVJFTbbKZ5d6pNeSXVKE8M9TlC%2BVeJfYJf95oC5IJejZ%2F%2FYaJtyCvX4fdntMU3X5OWsH5GqaM3EvUcRcAX48mScWcwVrrMuw3tahsL3%2FJsoH9ETa%2Bdciy4VjpB43GGngEyl2H1bsZJleSHrZYMpB4KErgRcFhiXLAQGIbm0wJqmqRgkpEDrdtZ1YSrjA2&X-Amz-Signature=bb1b45403c0a8eff1409cc22b7fe1581414e98fd131063dda6e0d94d890149ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7FR3FYS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDghtFEYRg%2FjJc0Y95RCaQs1Tnf5vUe2yHnLE144hdjFAIgZY2dXe0jx5ltgBA0QnPE4qSqbkR36BUw%2F6YAi2s2SWMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELIX8hoJ9Pr5QNh3CrcA9hPFsgOWb%2FLWfXZCCQAR2bxicK3iPvPixc3F2%2Fxufpot%2BK6CFy0r3imyj9HS5jD8rv7xsGK8MzzxpCh7MXi4N1l9m4Tz690o9DfgykDARJYznIh6JOid%2Fe%2Ff98Fpk4eAJg9QTx8O2DGlvXyU0xeaGqvirLy5BCZZii9Dh9GPemx1pKFSD411oXr%2FmaexBrpRW4aKVs456kE%2Fso%2Bu2LlgSNOyTiTPjd5G9y323h1zQF03TgJCCrH01Ec9rDvQLGGOvFGbRD7zm8yCyyHjGzVH9sP%2F8NBvYxQpgc6ZKtn%2FxIj5ouRrZefEzTZfbS5Gf7hM2eczCU6dKqbqU8TT1Aeq1SpUedZ4bGJvxkGdIYnakABh5IdVICxaMQQZ60XAu%2Fnjb0yWGFvBN%2BgnHpw%2FOE6PjRnhJb41%2FNMjpUHcgorP8SHUQ%2BJLiACQaLC8byie%2Bv1uD0c9Cnm6kgnQ6po0ywJVv%2BnW1DP3Ug8%2FG9HBqFmLbgtHt%2FmTHIRtHk0f0dudUyGqqZ7j4Sms%2BhnrQnOKdrMQ0D66mpSyO%2FTCe4MEDZja%2BdCVrtbjAbe0ZglOH36ufo4tu4mwOXRBkzIL2vOt7P6BzG2vgpApKu8HcfXqjtZRmldgXpk09Gf5hUjueg8MInM%2F74GOqUBNHYU08zlL4LvNLVfV%2BZDhb4s%2F3CljyubVJFTbbKZ5d6pNeSXVKE8M9TlC%2BVeJfYJf95oC5IJejZ%2F%2FYaJtyCvX4fdntMU3X5OWsH5GqaM3EvUcRcAX48mScWcwVrrMuw3tahsL3%2FJsoH9ETa%2Bdciy4VjpB43GGngEyl2H1bsZJleSHrZYMpB4KErgRcFhiXLAQGIbm0wJqmqRgkpEDrdtZ1YSrjA2&X-Amz-Signature=e7ef24f1a86f31d558103cfc44c797fe92a6c5b480257cdc756795daab7a7285&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
