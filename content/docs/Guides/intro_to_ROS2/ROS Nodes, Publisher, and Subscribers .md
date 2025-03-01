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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVIBRMYS%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIDnPwOc0EPsFS2BsjvCMe2EfjBXU6NnuKFeu%2BLx68pOxAiEAwxY%2FjQSHDdDbsOhz2NzwMwWdoWu9YiU8BKmUQB3cYkYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGq0ok4Ktx7pckHHRircA9qWEYmU6FcMv%2FQ6fGgl1VWsmjXflLaoZtwB%2BIczpJD6Vu4o7SZ%2BPYNB01HeOwLrTVetVAZUr5Gg4tZJeW%2BXZiIVELrdYiAB7XpkZm3uzDGziMNXMubi2eKl0oZQ2VdKqNf37wflHcUWlAuBsta54Ft4WXUGrOMPp88cUNWD9SRfZ7WuDH4xkcqpowzEgQyfvhXkzLNCu%2B5jtkc1DdA0tQ3K3n%2Bcoz8EEhgosG%2F4hlfFJp6qdWVT29FaZ7TcbRjMeKjiXZA0xc3VJHI40HUs77S341qx917dGOoOXrY6bdMy0Gsauz3XEpFABn1IATADBJ5mD6YPFNwIy7OtP2QPVHJippOMM2oIzv39PJWogIsOl%2B1BC5%2FZnvKHcCl8x48iGIuGALn4xnAexiL4x22HQjHBw9nEZwKdg0v6vTrBwh4nzhDwqnwJfyk2WAck8ChEREonpoKq3kAtFGNfL%2B7rH0VBwf7Yu3pXcEXrzZ1j4VOYdtW1xswE1XrN1XXRQn34DZj4Cm2Oy%2FuoXnhwXp8sexbAIXNoGD96adKWD6dGOzjNQSVwSseUFfEnWZkYjqTox8iOmxgDyGHiSbOS4MiOXxaimS12O9suZNwbXL8PYXyeMSFo4obJDb0TL63TMIzHjb4GOqUB5D9e%2FeAoM7LmuqWjfihxb2XmyItATKRCW1HFKy7Ka4ZtfFFw5KCIz4XJe%2B3fMYPRqNAEeiB32BiElp4z9bus0s1Pr8vDSBGI4YNye%2FrfTSqbd4ZBAO24VuJurwNhuRn4aVkcT4eIl7biF6TsMg9Bg2fPq%2Bha46wloNrIeqyv%2F1peTOhQkx%2BeSIPlj2uv57VulhrQ1pdWqa8EdTPBwxzXRKJpaUeE&X-Amz-Signature=deece8c5eb6f93ed27940d642af06cf532a01d6b6938934f78ed95af79bc35e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVIBRMYS%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIDnPwOc0EPsFS2BsjvCMe2EfjBXU6NnuKFeu%2BLx68pOxAiEAwxY%2FjQSHDdDbsOhz2NzwMwWdoWu9YiU8BKmUQB3cYkYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGq0ok4Ktx7pckHHRircA9qWEYmU6FcMv%2FQ6fGgl1VWsmjXflLaoZtwB%2BIczpJD6Vu4o7SZ%2BPYNB01HeOwLrTVetVAZUr5Gg4tZJeW%2BXZiIVELrdYiAB7XpkZm3uzDGziMNXMubi2eKl0oZQ2VdKqNf37wflHcUWlAuBsta54Ft4WXUGrOMPp88cUNWD9SRfZ7WuDH4xkcqpowzEgQyfvhXkzLNCu%2B5jtkc1DdA0tQ3K3n%2Bcoz8EEhgosG%2F4hlfFJp6qdWVT29FaZ7TcbRjMeKjiXZA0xc3VJHI40HUs77S341qx917dGOoOXrY6bdMy0Gsauz3XEpFABn1IATADBJ5mD6YPFNwIy7OtP2QPVHJippOMM2oIzv39PJWogIsOl%2B1BC5%2FZnvKHcCl8x48iGIuGALn4xnAexiL4x22HQjHBw9nEZwKdg0v6vTrBwh4nzhDwqnwJfyk2WAck8ChEREonpoKq3kAtFGNfL%2B7rH0VBwf7Yu3pXcEXrzZ1j4VOYdtW1xswE1XrN1XXRQn34DZj4Cm2Oy%2FuoXnhwXp8sexbAIXNoGD96adKWD6dGOzjNQSVwSseUFfEnWZkYjqTox8iOmxgDyGHiSbOS4MiOXxaimS12O9suZNwbXL8PYXyeMSFo4obJDb0TL63TMIzHjb4GOqUB5D9e%2FeAoM7LmuqWjfihxb2XmyItATKRCW1HFKy7Ka4ZtfFFw5KCIz4XJe%2B3fMYPRqNAEeiB32BiElp4z9bus0s1Pr8vDSBGI4YNye%2FrfTSqbd4ZBAO24VuJurwNhuRn4aVkcT4eIl7biF6TsMg9Bg2fPq%2Bha46wloNrIeqyv%2F1peTOhQkx%2BeSIPlj2uv57VulhrQ1pdWqa8EdTPBwxzXRKJpaUeE&X-Amz-Signature=d128b59719f112ad1ebdc2bab0d084126e309b63862467650318d7450dcf92ef&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVIBRMYS%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIDnPwOc0EPsFS2BsjvCMe2EfjBXU6NnuKFeu%2BLx68pOxAiEAwxY%2FjQSHDdDbsOhz2NzwMwWdoWu9YiU8BKmUQB3cYkYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGq0ok4Ktx7pckHHRircA9qWEYmU6FcMv%2FQ6fGgl1VWsmjXflLaoZtwB%2BIczpJD6Vu4o7SZ%2BPYNB01HeOwLrTVetVAZUr5Gg4tZJeW%2BXZiIVELrdYiAB7XpkZm3uzDGziMNXMubi2eKl0oZQ2VdKqNf37wflHcUWlAuBsta54Ft4WXUGrOMPp88cUNWD9SRfZ7WuDH4xkcqpowzEgQyfvhXkzLNCu%2B5jtkc1DdA0tQ3K3n%2Bcoz8EEhgosG%2F4hlfFJp6qdWVT29FaZ7TcbRjMeKjiXZA0xc3VJHI40HUs77S341qx917dGOoOXrY6bdMy0Gsauz3XEpFABn1IATADBJ5mD6YPFNwIy7OtP2QPVHJippOMM2oIzv39PJWogIsOl%2B1BC5%2FZnvKHcCl8x48iGIuGALn4xnAexiL4x22HQjHBw9nEZwKdg0v6vTrBwh4nzhDwqnwJfyk2WAck8ChEREonpoKq3kAtFGNfL%2B7rH0VBwf7Yu3pXcEXrzZ1j4VOYdtW1xswE1XrN1XXRQn34DZj4Cm2Oy%2FuoXnhwXp8sexbAIXNoGD96adKWD6dGOzjNQSVwSseUFfEnWZkYjqTox8iOmxgDyGHiSbOS4MiOXxaimS12O9suZNwbXL8PYXyeMSFo4obJDb0TL63TMIzHjb4GOqUB5D9e%2FeAoM7LmuqWjfihxb2XmyItATKRCW1HFKy7Ka4ZtfFFw5KCIz4XJe%2B3fMYPRqNAEeiB32BiElp4z9bus0s1Pr8vDSBGI4YNye%2FrfTSqbd4ZBAO24VuJurwNhuRn4aVkcT4eIl7biF6TsMg9Bg2fPq%2Bha46wloNrIeqyv%2F1peTOhQkx%2BeSIPlj2uv57VulhrQ1pdWqa8EdTPBwxzXRKJpaUeE&X-Amz-Signature=ff045f3daa5883420cc66984fe31b7c940d02e82f7cfd12d13254656ee6f1652&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVIBRMYS%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIDnPwOc0EPsFS2BsjvCMe2EfjBXU6NnuKFeu%2BLx68pOxAiEAwxY%2FjQSHDdDbsOhz2NzwMwWdoWu9YiU8BKmUQB3cYkYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGq0ok4Ktx7pckHHRircA9qWEYmU6FcMv%2FQ6fGgl1VWsmjXflLaoZtwB%2BIczpJD6Vu4o7SZ%2BPYNB01HeOwLrTVetVAZUr5Gg4tZJeW%2BXZiIVELrdYiAB7XpkZm3uzDGziMNXMubi2eKl0oZQ2VdKqNf37wflHcUWlAuBsta54Ft4WXUGrOMPp88cUNWD9SRfZ7WuDH4xkcqpowzEgQyfvhXkzLNCu%2B5jtkc1DdA0tQ3K3n%2Bcoz8EEhgosG%2F4hlfFJp6qdWVT29FaZ7TcbRjMeKjiXZA0xc3VJHI40HUs77S341qx917dGOoOXrY6bdMy0Gsauz3XEpFABn1IATADBJ5mD6YPFNwIy7OtP2QPVHJippOMM2oIzv39PJWogIsOl%2B1BC5%2FZnvKHcCl8x48iGIuGALn4xnAexiL4x22HQjHBw9nEZwKdg0v6vTrBwh4nzhDwqnwJfyk2WAck8ChEREonpoKq3kAtFGNfL%2B7rH0VBwf7Yu3pXcEXrzZ1j4VOYdtW1xswE1XrN1XXRQn34DZj4Cm2Oy%2FuoXnhwXp8sexbAIXNoGD96adKWD6dGOzjNQSVwSseUFfEnWZkYjqTox8iOmxgDyGHiSbOS4MiOXxaimS12O9suZNwbXL8PYXyeMSFo4obJDb0TL63TMIzHjb4GOqUB5D9e%2FeAoM7LmuqWjfihxb2XmyItATKRCW1HFKy7Ka4ZtfFFw5KCIz4XJe%2B3fMYPRqNAEeiB32BiElp4z9bus0s1Pr8vDSBGI4YNye%2FrfTSqbd4ZBAO24VuJurwNhuRn4aVkcT4eIl7biF6TsMg9Bg2fPq%2Bha46wloNrIeqyv%2F1peTOhQkx%2BeSIPlj2uv57VulhrQ1pdWqa8EdTPBwxzXRKJpaUeE&X-Amz-Signature=954b8f3a4047f99a9a2cc75c1a394d35065132c44bcc64ac6aa58f3f0a75023a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVIBRMYS%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIDnPwOc0EPsFS2BsjvCMe2EfjBXU6NnuKFeu%2BLx68pOxAiEAwxY%2FjQSHDdDbsOhz2NzwMwWdoWu9YiU8BKmUQB3cYkYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGq0ok4Ktx7pckHHRircA9qWEYmU6FcMv%2FQ6fGgl1VWsmjXflLaoZtwB%2BIczpJD6Vu4o7SZ%2BPYNB01HeOwLrTVetVAZUr5Gg4tZJeW%2BXZiIVELrdYiAB7XpkZm3uzDGziMNXMubi2eKl0oZQ2VdKqNf37wflHcUWlAuBsta54Ft4WXUGrOMPp88cUNWD9SRfZ7WuDH4xkcqpowzEgQyfvhXkzLNCu%2B5jtkc1DdA0tQ3K3n%2Bcoz8EEhgosG%2F4hlfFJp6qdWVT29FaZ7TcbRjMeKjiXZA0xc3VJHI40HUs77S341qx917dGOoOXrY6bdMy0Gsauz3XEpFABn1IATADBJ5mD6YPFNwIy7OtP2QPVHJippOMM2oIzv39PJWogIsOl%2B1BC5%2FZnvKHcCl8x48iGIuGALn4xnAexiL4x22HQjHBw9nEZwKdg0v6vTrBwh4nzhDwqnwJfyk2WAck8ChEREonpoKq3kAtFGNfL%2B7rH0VBwf7Yu3pXcEXrzZ1j4VOYdtW1xswE1XrN1XXRQn34DZj4Cm2Oy%2FuoXnhwXp8sexbAIXNoGD96adKWD6dGOzjNQSVwSseUFfEnWZkYjqTox8iOmxgDyGHiSbOS4MiOXxaimS12O9suZNwbXL8PYXyeMSFo4obJDb0TL63TMIzHjb4GOqUB5D9e%2FeAoM7LmuqWjfihxb2XmyItATKRCW1HFKy7Ka4ZtfFFw5KCIz4XJe%2B3fMYPRqNAEeiB32BiElp4z9bus0s1Pr8vDSBGI4YNye%2FrfTSqbd4ZBAO24VuJurwNhuRn4aVkcT4eIl7biF6TsMg9Bg2fPq%2Bha46wloNrIeqyv%2F1peTOhQkx%2BeSIPlj2uv57VulhrQ1pdWqa8EdTPBwxzXRKJpaUeE&X-Amz-Signature=6d48e6ed2b45f00b262f134cacba620a83aaccb02f89b365611cba718a07745e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVIBRMYS%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIDnPwOc0EPsFS2BsjvCMe2EfjBXU6NnuKFeu%2BLx68pOxAiEAwxY%2FjQSHDdDbsOhz2NzwMwWdoWu9YiU8BKmUQB3cYkYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGq0ok4Ktx7pckHHRircA9qWEYmU6FcMv%2FQ6fGgl1VWsmjXflLaoZtwB%2BIczpJD6Vu4o7SZ%2BPYNB01HeOwLrTVetVAZUr5Gg4tZJeW%2BXZiIVELrdYiAB7XpkZm3uzDGziMNXMubi2eKl0oZQ2VdKqNf37wflHcUWlAuBsta54Ft4WXUGrOMPp88cUNWD9SRfZ7WuDH4xkcqpowzEgQyfvhXkzLNCu%2B5jtkc1DdA0tQ3K3n%2Bcoz8EEhgosG%2F4hlfFJp6qdWVT29FaZ7TcbRjMeKjiXZA0xc3VJHI40HUs77S341qx917dGOoOXrY6bdMy0Gsauz3XEpFABn1IATADBJ5mD6YPFNwIy7OtP2QPVHJippOMM2oIzv39PJWogIsOl%2B1BC5%2FZnvKHcCl8x48iGIuGALn4xnAexiL4x22HQjHBw9nEZwKdg0v6vTrBwh4nzhDwqnwJfyk2WAck8ChEREonpoKq3kAtFGNfL%2B7rH0VBwf7Yu3pXcEXrzZ1j4VOYdtW1xswE1XrN1XXRQn34DZj4Cm2Oy%2FuoXnhwXp8sexbAIXNoGD96adKWD6dGOzjNQSVwSseUFfEnWZkYjqTox8iOmxgDyGHiSbOS4MiOXxaimS12O9suZNwbXL8PYXyeMSFo4obJDb0TL63TMIzHjb4GOqUB5D9e%2FeAoM7LmuqWjfihxb2XmyItATKRCW1HFKy7Ka4ZtfFFw5KCIz4XJe%2B3fMYPRqNAEeiB32BiElp4z9bus0s1Pr8vDSBGI4YNye%2FrfTSqbd4ZBAO24VuJurwNhuRn4aVkcT4eIl7biF6TsMg9Bg2fPq%2Bha46wloNrIeqyv%2F1peTOhQkx%2BeSIPlj2uv57VulhrQ1pdWqa8EdTPBwxzXRKJpaUeE&X-Amz-Signature=9f595c0c933db720f660b1882e663a2b2da15284b8c9baf9c688a22df4ade26b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVIBRMYS%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIDnPwOc0EPsFS2BsjvCMe2EfjBXU6NnuKFeu%2BLx68pOxAiEAwxY%2FjQSHDdDbsOhz2NzwMwWdoWu9YiU8BKmUQB3cYkYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGq0ok4Ktx7pckHHRircA9qWEYmU6FcMv%2FQ6fGgl1VWsmjXflLaoZtwB%2BIczpJD6Vu4o7SZ%2BPYNB01HeOwLrTVetVAZUr5Gg4tZJeW%2BXZiIVELrdYiAB7XpkZm3uzDGziMNXMubi2eKl0oZQ2VdKqNf37wflHcUWlAuBsta54Ft4WXUGrOMPp88cUNWD9SRfZ7WuDH4xkcqpowzEgQyfvhXkzLNCu%2B5jtkc1DdA0tQ3K3n%2Bcoz8EEhgosG%2F4hlfFJp6qdWVT29FaZ7TcbRjMeKjiXZA0xc3VJHI40HUs77S341qx917dGOoOXrY6bdMy0Gsauz3XEpFABn1IATADBJ5mD6YPFNwIy7OtP2QPVHJippOMM2oIzv39PJWogIsOl%2B1BC5%2FZnvKHcCl8x48iGIuGALn4xnAexiL4x22HQjHBw9nEZwKdg0v6vTrBwh4nzhDwqnwJfyk2WAck8ChEREonpoKq3kAtFGNfL%2B7rH0VBwf7Yu3pXcEXrzZ1j4VOYdtW1xswE1XrN1XXRQn34DZj4Cm2Oy%2FuoXnhwXp8sexbAIXNoGD96adKWD6dGOzjNQSVwSseUFfEnWZkYjqTox8iOmxgDyGHiSbOS4MiOXxaimS12O9suZNwbXL8PYXyeMSFo4obJDb0TL63TMIzHjb4GOqUB5D9e%2FeAoM7LmuqWjfihxb2XmyItATKRCW1HFKy7Ka4ZtfFFw5KCIz4XJe%2B3fMYPRqNAEeiB32BiElp4z9bus0s1Pr8vDSBGI4YNye%2FrfTSqbd4ZBAO24VuJurwNhuRn4aVkcT4eIl7biF6TsMg9Bg2fPq%2Bha46wloNrIeqyv%2F1peTOhQkx%2BeSIPlj2uv57VulhrQ1pdWqa8EdTPBwxzXRKJpaUeE&X-Amz-Signature=0bdc873ae11f4512fa6279a41d246668bea1ade7c0e0f298d525c189524fae42&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVIBRMYS%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIDnPwOc0EPsFS2BsjvCMe2EfjBXU6NnuKFeu%2BLx68pOxAiEAwxY%2FjQSHDdDbsOhz2NzwMwWdoWu9YiU8BKmUQB3cYkYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGq0ok4Ktx7pckHHRircA9qWEYmU6FcMv%2FQ6fGgl1VWsmjXflLaoZtwB%2BIczpJD6Vu4o7SZ%2BPYNB01HeOwLrTVetVAZUr5Gg4tZJeW%2BXZiIVELrdYiAB7XpkZm3uzDGziMNXMubi2eKl0oZQ2VdKqNf37wflHcUWlAuBsta54Ft4WXUGrOMPp88cUNWD9SRfZ7WuDH4xkcqpowzEgQyfvhXkzLNCu%2B5jtkc1DdA0tQ3K3n%2Bcoz8EEhgosG%2F4hlfFJp6qdWVT29FaZ7TcbRjMeKjiXZA0xc3VJHI40HUs77S341qx917dGOoOXrY6bdMy0Gsauz3XEpFABn1IATADBJ5mD6YPFNwIy7OtP2QPVHJippOMM2oIzv39PJWogIsOl%2B1BC5%2FZnvKHcCl8x48iGIuGALn4xnAexiL4x22HQjHBw9nEZwKdg0v6vTrBwh4nzhDwqnwJfyk2WAck8ChEREonpoKq3kAtFGNfL%2B7rH0VBwf7Yu3pXcEXrzZ1j4VOYdtW1xswE1XrN1XXRQn34DZj4Cm2Oy%2FuoXnhwXp8sexbAIXNoGD96adKWD6dGOzjNQSVwSseUFfEnWZkYjqTox8iOmxgDyGHiSbOS4MiOXxaimS12O9suZNwbXL8PYXyeMSFo4obJDb0TL63TMIzHjb4GOqUB5D9e%2FeAoM7LmuqWjfihxb2XmyItATKRCW1HFKy7Ka4ZtfFFw5KCIz4XJe%2B3fMYPRqNAEeiB32BiElp4z9bus0s1Pr8vDSBGI4YNye%2FrfTSqbd4ZBAO24VuJurwNhuRn4aVkcT4eIl7biF6TsMg9Bg2fPq%2Bha46wloNrIeqyv%2F1peTOhQkx%2BeSIPlj2uv57VulhrQ1pdWqa8EdTPBwxzXRKJpaUeE&X-Amz-Signature=9b14d3c8f6577372ff603a8e56be196620e7d362342e681a95f4d915f1730950&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
