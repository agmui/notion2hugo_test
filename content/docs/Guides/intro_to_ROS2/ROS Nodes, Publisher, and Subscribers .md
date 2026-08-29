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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z42SSN7P%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRZN7AeGWhf%2BKsipHoRneUNiki9inFLGn3%2FP4ATIAqLAIgM%2FVfGjm578aJaySBDF6AQiSgpsA5MP9hQ1W3T2nAPq4q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDCr2A%2Bh%2FxpatW3A55CrcA7qIu7QHHOXa31NqugBBvr%2B4%2FXEwR88rOK2JKBx%2Fx1gYWi4ySXqRLUzPFbI2ZKe7sJX9auMJuXgYEhFB84TLv%2BL0MRnzgkkPQHVuI7Jfw%2Bge%2BcKUe1BEBGh5X25wx7M4ArGf%2BsQckHfCprUUKgt11TrQNTseBBxKp%2F6J5HXu%2FmtU0MPcQGvmm4ZUSo4BZhcGyH9oeDPWHkqufW%2FOcFqg7LAz0ivk8Tl86dt71Qlc8tQPoYIL7pmgBQxHlw1mxdE6cFZE6YrGV3JioejLAScZld3D226gSoJ2WUo7AoLY%2F%2F1c%2B7t1aVHdIKOOJUQuSezw8yqJ3r3cfHk%2FEXK%2FNTgdER0rvQZBrnlBKFRRJsSt%2BkGBnoIPw9qGlv0nrijkEgmYaiVYIxrrjSK9Ih9njfINaa951o6jjYMvWc20SasJOzkpKW5BIOQYwk8fadgD%2B2%2FdOibrxlPX38Wstu9nq3h3SCgnujP3ZCrqooA17rbum%2Fl19HmuD6hNd%2BMbAz6eLoWZIjSmZCbTFqLiZn17Z8KgZeZfsnd9qFqG7I%2F1%2FW%2BvTw39uoPsR7YDOJZF91Msze%2FL9EpcI7ezfwjILSlATnEAk2jE06orX2qklZh5Yw9u5lTNy1XjI5qrUL1HRNV9MO%2FRydQGOqUBiJ0k5aRjwD0DNC4%2FRkR7QV2477IFYOmTz9%2BkDF8MfTNCHWZceoVVGGoCDVAP%2BF4lCk%2FmhFEiJjwEk2lnir0unRJr%2BmMiTNsAs3bSzpj3PGvfOp%2B9SJl9y151Gd8QZF%2BPCbwP3u7LQKrP48y19bQscuhRJk47FpsmSqp9WL5Kw%2BSzDQHF6eYKHF2B7uZdMpBlFFU2n%2BwQliZ3XWnNTQTw9euEEC%2BU&X-Amz-Signature=88af0ae0b45bb3463acf36807ea355892599e57a095923debd57e42070234a82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z42SSN7P%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRZN7AeGWhf%2BKsipHoRneUNiki9inFLGn3%2FP4ATIAqLAIgM%2FVfGjm578aJaySBDF6AQiSgpsA5MP9hQ1W3T2nAPq4q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDCr2A%2Bh%2FxpatW3A55CrcA7qIu7QHHOXa31NqugBBvr%2B4%2FXEwR88rOK2JKBx%2Fx1gYWi4ySXqRLUzPFbI2ZKe7sJX9auMJuXgYEhFB84TLv%2BL0MRnzgkkPQHVuI7Jfw%2Bge%2BcKUe1BEBGh5X25wx7M4ArGf%2BsQckHfCprUUKgt11TrQNTseBBxKp%2F6J5HXu%2FmtU0MPcQGvmm4ZUSo4BZhcGyH9oeDPWHkqufW%2FOcFqg7LAz0ivk8Tl86dt71Qlc8tQPoYIL7pmgBQxHlw1mxdE6cFZE6YrGV3JioejLAScZld3D226gSoJ2WUo7AoLY%2F%2F1c%2B7t1aVHdIKOOJUQuSezw8yqJ3r3cfHk%2FEXK%2FNTgdER0rvQZBrnlBKFRRJsSt%2BkGBnoIPw9qGlv0nrijkEgmYaiVYIxrrjSK9Ih9njfINaa951o6jjYMvWc20SasJOzkpKW5BIOQYwk8fadgD%2B2%2FdOibrxlPX38Wstu9nq3h3SCgnujP3ZCrqooA17rbum%2Fl19HmuD6hNd%2BMbAz6eLoWZIjSmZCbTFqLiZn17Z8KgZeZfsnd9qFqG7I%2F1%2FW%2BvTw39uoPsR7YDOJZF91Msze%2FL9EpcI7ezfwjILSlATnEAk2jE06orX2qklZh5Yw9u5lTNy1XjI5qrUL1HRNV9MO%2FRydQGOqUBiJ0k5aRjwD0DNC4%2FRkR7QV2477IFYOmTz9%2BkDF8MfTNCHWZceoVVGGoCDVAP%2BF4lCk%2FmhFEiJjwEk2lnir0unRJr%2BmMiTNsAs3bSzpj3PGvfOp%2B9SJl9y151Gd8QZF%2BPCbwP3u7LQKrP48y19bQscuhRJk47FpsmSqp9WL5Kw%2BSzDQHF6eYKHF2B7uZdMpBlFFU2n%2BwQliZ3XWnNTQTw9euEEC%2BU&X-Amz-Signature=397406fe5098cbe6d0c8c3970d96631b9f7c596de4cd41e10b67dc295c292c56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z42SSN7P%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRZN7AeGWhf%2BKsipHoRneUNiki9inFLGn3%2FP4ATIAqLAIgM%2FVfGjm578aJaySBDF6AQiSgpsA5MP9hQ1W3T2nAPq4q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDCr2A%2Bh%2FxpatW3A55CrcA7qIu7QHHOXa31NqugBBvr%2B4%2FXEwR88rOK2JKBx%2Fx1gYWi4ySXqRLUzPFbI2ZKe7sJX9auMJuXgYEhFB84TLv%2BL0MRnzgkkPQHVuI7Jfw%2Bge%2BcKUe1BEBGh5X25wx7M4ArGf%2BsQckHfCprUUKgt11TrQNTseBBxKp%2F6J5HXu%2FmtU0MPcQGvmm4ZUSo4BZhcGyH9oeDPWHkqufW%2FOcFqg7LAz0ivk8Tl86dt71Qlc8tQPoYIL7pmgBQxHlw1mxdE6cFZE6YrGV3JioejLAScZld3D226gSoJ2WUo7AoLY%2F%2F1c%2B7t1aVHdIKOOJUQuSezw8yqJ3r3cfHk%2FEXK%2FNTgdER0rvQZBrnlBKFRRJsSt%2BkGBnoIPw9qGlv0nrijkEgmYaiVYIxrrjSK9Ih9njfINaa951o6jjYMvWc20SasJOzkpKW5BIOQYwk8fadgD%2B2%2FdOibrxlPX38Wstu9nq3h3SCgnujP3ZCrqooA17rbum%2Fl19HmuD6hNd%2BMbAz6eLoWZIjSmZCbTFqLiZn17Z8KgZeZfsnd9qFqG7I%2F1%2FW%2BvTw39uoPsR7YDOJZF91Msze%2FL9EpcI7ezfwjILSlATnEAk2jE06orX2qklZh5Yw9u5lTNy1XjI5qrUL1HRNV9MO%2FRydQGOqUBiJ0k5aRjwD0DNC4%2FRkR7QV2477IFYOmTz9%2BkDF8MfTNCHWZceoVVGGoCDVAP%2BF4lCk%2FmhFEiJjwEk2lnir0unRJr%2BmMiTNsAs3bSzpj3PGvfOp%2B9SJl9y151Gd8QZF%2BPCbwP3u7LQKrP48y19bQscuhRJk47FpsmSqp9WL5Kw%2BSzDQHF6eYKHF2B7uZdMpBlFFU2n%2BwQliZ3XWnNTQTw9euEEC%2BU&X-Amz-Signature=9e6971ebe56cc6b1864c4f2f8f655214553d543f3462047b878d769ad68467a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z42SSN7P%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRZN7AeGWhf%2BKsipHoRneUNiki9inFLGn3%2FP4ATIAqLAIgM%2FVfGjm578aJaySBDF6AQiSgpsA5MP9hQ1W3T2nAPq4q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDCr2A%2Bh%2FxpatW3A55CrcA7qIu7QHHOXa31NqugBBvr%2B4%2FXEwR88rOK2JKBx%2Fx1gYWi4ySXqRLUzPFbI2ZKe7sJX9auMJuXgYEhFB84TLv%2BL0MRnzgkkPQHVuI7Jfw%2Bge%2BcKUe1BEBGh5X25wx7M4ArGf%2BsQckHfCprUUKgt11TrQNTseBBxKp%2F6J5HXu%2FmtU0MPcQGvmm4ZUSo4BZhcGyH9oeDPWHkqufW%2FOcFqg7LAz0ivk8Tl86dt71Qlc8tQPoYIL7pmgBQxHlw1mxdE6cFZE6YrGV3JioejLAScZld3D226gSoJ2WUo7AoLY%2F%2F1c%2B7t1aVHdIKOOJUQuSezw8yqJ3r3cfHk%2FEXK%2FNTgdER0rvQZBrnlBKFRRJsSt%2BkGBnoIPw9qGlv0nrijkEgmYaiVYIxrrjSK9Ih9njfINaa951o6jjYMvWc20SasJOzkpKW5BIOQYwk8fadgD%2B2%2FdOibrxlPX38Wstu9nq3h3SCgnujP3ZCrqooA17rbum%2Fl19HmuD6hNd%2BMbAz6eLoWZIjSmZCbTFqLiZn17Z8KgZeZfsnd9qFqG7I%2F1%2FW%2BvTw39uoPsR7YDOJZF91Msze%2FL9EpcI7ezfwjILSlATnEAk2jE06orX2qklZh5Yw9u5lTNy1XjI5qrUL1HRNV9MO%2FRydQGOqUBiJ0k5aRjwD0DNC4%2FRkR7QV2477IFYOmTz9%2BkDF8MfTNCHWZceoVVGGoCDVAP%2BF4lCk%2FmhFEiJjwEk2lnir0unRJr%2BmMiTNsAs3bSzpj3PGvfOp%2B9SJl9y151Gd8QZF%2BPCbwP3u7LQKrP48y19bQscuhRJk47FpsmSqp9WL5Kw%2BSzDQHF6eYKHF2B7uZdMpBlFFU2n%2BwQliZ3XWnNTQTw9euEEC%2BU&X-Amz-Signature=19cae0982937e573bb237ad40797ab80d8c9ca163dad96e1170b49e7e60f6209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z42SSN7P%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRZN7AeGWhf%2BKsipHoRneUNiki9inFLGn3%2FP4ATIAqLAIgM%2FVfGjm578aJaySBDF6AQiSgpsA5MP9hQ1W3T2nAPq4q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDCr2A%2Bh%2FxpatW3A55CrcA7qIu7QHHOXa31NqugBBvr%2B4%2FXEwR88rOK2JKBx%2Fx1gYWi4ySXqRLUzPFbI2ZKe7sJX9auMJuXgYEhFB84TLv%2BL0MRnzgkkPQHVuI7Jfw%2Bge%2BcKUe1BEBGh5X25wx7M4ArGf%2BsQckHfCprUUKgt11TrQNTseBBxKp%2F6J5HXu%2FmtU0MPcQGvmm4ZUSo4BZhcGyH9oeDPWHkqufW%2FOcFqg7LAz0ivk8Tl86dt71Qlc8tQPoYIL7pmgBQxHlw1mxdE6cFZE6YrGV3JioejLAScZld3D226gSoJ2WUo7AoLY%2F%2F1c%2B7t1aVHdIKOOJUQuSezw8yqJ3r3cfHk%2FEXK%2FNTgdER0rvQZBrnlBKFRRJsSt%2BkGBnoIPw9qGlv0nrijkEgmYaiVYIxrrjSK9Ih9njfINaa951o6jjYMvWc20SasJOzkpKW5BIOQYwk8fadgD%2B2%2FdOibrxlPX38Wstu9nq3h3SCgnujP3ZCrqooA17rbum%2Fl19HmuD6hNd%2BMbAz6eLoWZIjSmZCbTFqLiZn17Z8KgZeZfsnd9qFqG7I%2F1%2FW%2BvTw39uoPsR7YDOJZF91Msze%2FL9EpcI7ezfwjILSlATnEAk2jE06orX2qklZh5Yw9u5lTNy1XjI5qrUL1HRNV9MO%2FRydQGOqUBiJ0k5aRjwD0DNC4%2FRkR7QV2477IFYOmTz9%2BkDF8MfTNCHWZceoVVGGoCDVAP%2BF4lCk%2FmhFEiJjwEk2lnir0unRJr%2BmMiTNsAs3bSzpj3PGvfOp%2B9SJl9y151Gd8QZF%2BPCbwP3u7LQKrP48y19bQscuhRJk47FpsmSqp9WL5Kw%2BSzDQHF6eYKHF2B7uZdMpBlFFU2n%2BwQliZ3XWnNTQTw9euEEC%2BU&X-Amz-Signature=252931806ef242260d61d1a60fe0702a024b1a70a438f102ee3d7aa68539b01a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z42SSN7P%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRZN7AeGWhf%2BKsipHoRneUNiki9inFLGn3%2FP4ATIAqLAIgM%2FVfGjm578aJaySBDF6AQiSgpsA5MP9hQ1W3T2nAPq4q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDCr2A%2Bh%2FxpatW3A55CrcA7qIu7QHHOXa31NqugBBvr%2B4%2FXEwR88rOK2JKBx%2Fx1gYWi4ySXqRLUzPFbI2ZKe7sJX9auMJuXgYEhFB84TLv%2BL0MRnzgkkPQHVuI7Jfw%2Bge%2BcKUe1BEBGh5X25wx7M4ArGf%2BsQckHfCprUUKgt11TrQNTseBBxKp%2F6J5HXu%2FmtU0MPcQGvmm4ZUSo4BZhcGyH9oeDPWHkqufW%2FOcFqg7LAz0ivk8Tl86dt71Qlc8tQPoYIL7pmgBQxHlw1mxdE6cFZE6YrGV3JioejLAScZld3D226gSoJ2WUo7AoLY%2F%2F1c%2B7t1aVHdIKOOJUQuSezw8yqJ3r3cfHk%2FEXK%2FNTgdER0rvQZBrnlBKFRRJsSt%2BkGBnoIPw9qGlv0nrijkEgmYaiVYIxrrjSK9Ih9njfINaa951o6jjYMvWc20SasJOzkpKW5BIOQYwk8fadgD%2B2%2FdOibrxlPX38Wstu9nq3h3SCgnujP3ZCrqooA17rbum%2Fl19HmuD6hNd%2BMbAz6eLoWZIjSmZCbTFqLiZn17Z8KgZeZfsnd9qFqG7I%2F1%2FW%2BvTw39uoPsR7YDOJZF91Msze%2FL9EpcI7ezfwjILSlATnEAk2jE06orX2qklZh5Yw9u5lTNy1XjI5qrUL1HRNV9MO%2FRydQGOqUBiJ0k5aRjwD0DNC4%2FRkR7QV2477IFYOmTz9%2BkDF8MfTNCHWZceoVVGGoCDVAP%2BF4lCk%2FmhFEiJjwEk2lnir0unRJr%2BmMiTNsAs3bSzpj3PGvfOp%2B9SJl9y151Gd8QZF%2BPCbwP3u7LQKrP48y19bQscuhRJk47FpsmSqp9WL5Kw%2BSzDQHF6eYKHF2B7uZdMpBlFFU2n%2BwQliZ3XWnNTQTw9euEEC%2BU&X-Amz-Signature=87c2b858d69882b609c396aed1cc3ac2da659de353f30004edba3f8f34793f28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z42SSN7P%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRZN7AeGWhf%2BKsipHoRneUNiki9inFLGn3%2FP4ATIAqLAIgM%2FVfGjm578aJaySBDF6AQiSgpsA5MP9hQ1W3T2nAPq4q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDCr2A%2Bh%2FxpatW3A55CrcA7qIu7QHHOXa31NqugBBvr%2B4%2FXEwR88rOK2JKBx%2Fx1gYWi4ySXqRLUzPFbI2ZKe7sJX9auMJuXgYEhFB84TLv%2BL0MRnzgkkPQHVuI7Jfw%2Bge%2BcKUe1BEBGh5X25wx7M4ArGf%2BsQckHfCprUUKgt11TrQNTseBBxKp%2F6J5HXu%2FmtU0MPcQGvmm4ZUSo4BZhcGyH9oeDPWHkqufW%2FOcFqg7LAz0ivk8Tl86dt71Qlc8tQPoYIL7pmgBQxHlw1mxdE6cFZE6YrGV3JioejLAScZld3D226gSoJ2WUo7AoLY%2F%2F1c%2B7t1aVHdIKOOJUQuSezw8yqJ3r3cfHk%2FEXK%2FNTgdER0rvQZBrnlBKFRRJsSt%2BkGBnoIPw9qGlv0nrijkEgmYaiVYIxrrjSK9Ih9njfINaa951o6jjYMvWc20SasJOzkpKW5BIOQYwk8fadgD%2B2%2FdOibrxlPX38Wstu9nq3h3SCgnujP3ZCrqooA17rbum%2Fl19HmuD6hNd%2BMbAz6eLoWZIjSmZCbTFqLiZn17Z8KgZeZfsnd9qFqG7I%2F1%2FW%2BvTw39uoPsR7YDOJZF91Msze%2FL9EpcI7ezfwjILSlATnEAk2jE06orX2qklZh5Yw9u5lTNy1XjI5qrUL1HRNV9MO%2FRydQGOqUBiJ0k5aRjwD0DNC4%2FRkR7QV2477IFYOmTz9%2BkDF8MfTNCHWZceoVVGGoCDVAP%2BF4lCk%2FmhFEiJjwEk2lnir0unRJr%2BmMiTNsAs3bSzpj3PGvfOp%2B9SJl9y151Gd8QZF%2BPCbwP3u7LQKrP48y19bQscuhRJk47FpsmSqp9WL5Kw%2BSzDQHF6eYKHF2B7uZdMpBlFFU2n%2BwQliZ3XWnNTQTw9euEEC%2BU&X-Amz-Signature=67de691473e9f06b09367de2a820e58bb05df64e1fc4b385b8048ae14066924b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z42SSN7P%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRZN7AeGWhf%2BKsipHoRneUNiki9inFLGn3%2FP4ATIAqLAIgM%2FVfGjm578aJaySBDF6AQiSgpsA5MP9hQ1W3T2nAPq4q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDCr2A%2Bh%2FxpatW3A55CrcA7qIu7QHHOXa31NqugBBvr%2B4%2FXEwR88rOK2JKBx%2Fx1gYWi4ySXqRLUzPFbI2ZKe7sJX9auMJuXgYEhFB84TLv%2BL0MRnzgkkPQHVuI7Jfw%2Bge%2BcKUe1BEBGh5X25wx7M4ArGf%2BsQckHfCprUUKgt11TrQNTseBBxKp%2F6J5HXu%2FmtU0MPcQGvmm4ZUSo4BZhcGyH9oeDPWHkqufW%2FOcFqg7LAz0ivk8Tl86dt71Qlc8tQPoYIL7pmgBQxHlw1mxdE6cFZE6YrGV3JioejLAScZld3D226gSoJ2WUo7AoLY%2F%2F1c%2B7t1aVHdIKOOJUQuSezw8yqJ3r3cfHk%2FEXK%2FNTgdER0rvQZBrnlBKFRRJsSt%2BkGBnoIPw9qGlv0nrijkEgmYaiVYIxrrjSK9Ih9njfINaa951o6jjYMvWc20SasJOzkpKW5BIOQYwk8fadgD%2B2%2FdOibrxlPX38Wstu9nq3h3SCgnujP3ZCrqooA17rbum%2Fl19HmuD6hNd%2BMbAz6eLoWZIjSmZCbTFqLiZn17Z8KgZeZfsnd9qFqG7I%2F1%2FW%2BvTw39uoPsR7YDOJZF91Msze%2FL9EpcI7ezfwjILSlATnEAk2jE06orX2qklZh5Yw9u5lTNy1XjI5qrUL1HRNV9MO%2FRydQGOqUBiJ0k5aRjwD0DNC4%2FRkR7QV2477IFYOmTz9%2BkDF8MfTNCHWZceoVVGGoCDVAP%2BF4lCk%2FmhFEiJjwEk2lnir0unRJr%2BmMiTNsAs3bSzpj3PGvfOp%2B9SJl9y151Gd8QZF%2BPCbwP3u7LQKrP48y19bQscuhRJk47FpsmSqp9WL5Kw%2BSzDQHF6eYKHF2B7uZdMpBlFFU2n%2BwQliZ3XWnNTQTw9euEEC%2BU&X-Amz-Signature=f63350d34b9bfb01307a846b9b0e319202488e4b1c25bf41668024ee9bd425f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
