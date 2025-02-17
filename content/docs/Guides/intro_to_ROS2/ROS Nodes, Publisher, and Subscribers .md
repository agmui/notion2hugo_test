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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AQASMOA%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIEAXZ46H04XcZtLyw69Erzt4Jl1WpmLiBtvU13Ka2HhwAiB4noqIP9iJGtdidyTrYAIQ6E8gzL3%2B0ub46zYZh7n%2F7yr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMA52I871iq1yb1ugSKtwDjxa1HFwMoWjfdjwA41r0tK3wpIs9J30NvKrAvkA%2FfPYcabQDOjp6AWK9ZhLKj%2BHyquQwANkzxBw0Fz70TEjM89VLxk7y%2FF7aYnm9P491pVqqN1hTff%2FYmdI6w3OMPtvkfDWGo5k%2FuJHGDM4G67RTnFqXjBO51u15gniNutgp0Fq%2BoJdvFf%2FfGJDZH8caaxl3%2Bl7M9hxOsuspZelomXYwIPPXcnPAVfV%2B0M%2BLYEOjYSySYTthA5%2B2RbcxyYHGmlGX6LuXj30JyFjgsGUFRanAOdFcuSvbzzd8WiUDm6pugeidFV3lOO6JvhYZ%2Byn7IVjGwQEIN0RDgGV1zfet4HIR4hcfW%2FZ6XlCgMGp0LLTjs1chFBZCI9k94zob231qDpyA9NUSc%2BwJvYgUvCN07Xa8WE%2FLSbEOARN7rQqARa0QVfZXHTBJEel%2BBk%2BLYHg%2FAeH6tMNHJyfkFvq%2BveOCQkpl5Qn983J72SE2ZqzMVEsMtTEZ%2BGXpsGtKtsgMgWRtJ36hkwijsQwQf8AQ9qm5qQKKPlzhBf0JMiSszlzjW%2B8dojn8Wxe4WsAolQ9gsnmy2UrBkmsf%2B67zIFc7lUo7BvOMt1A%2BZGDg%2Bo5BKpVc%2FfOS%2BIKf4tuW4z%2BE%2FQkcLGMwisrKvQY6pgGFK3KHIWXboD9NrBQbNcfmcekSBGd2EjhrlDQmCgdFyQ484%2BQNgBvixDD45M7yKNnkA%2F9cetjvdIIvnYyYFmH56723%2BHa%2BjMg%2FMCfnxme107PssB1L3P2AS9iXoYrcFFVnJAx9KmxJZOihFGYvEIAKY%2BTZ5sKLtGKs%2FHVzxrAadKOEyeNspFxhLUP6jX7rEgk%2Bz9ljq6cm9ZT5gCk%2Bj6cxGjomyalM&X-Amz-Signature=e9592c9f24c8b7675a011edbb8bae1048cdde561b16f15407879b452cccf388d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AQASMOA%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIEAXZ46H04XcZtLyw69Erzt4Jl1WpmLiBtvU13Ka2HhwAiB4noqIP9iJGtdidyTrYAIQ6E8gzL3%2B0ub46zYZh7n%2F7yr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMA52I871iq1yb1ugSKtwDjxa1HFwMoWjfdjwA41r0tK3wpIs9J30NvKrAvkA%2FfPYcabQDOjp6AWK9ZhLKj%2BHyquQwANkzxBw0Fz70TEjM89VLxk7y%2FF7aYnm9P491pVqqN1hTff%2FYmdI6w3OMPtvkfDWGo5k%2FuJHGDM4G67RTnFqXjBO51u15gniNutgp0Fq%2BoJdvFf%2FfGJDZH8caaxl3%2Bl7M9hxOsuspZelomXYwIPPXcnPAVfV%2B0M%2BLYEOjYSySYTthA5%2B2RbcxyYHGmlGX6LuXj30JyFjgsGUFRanAOdFcuSvbzzd8WiUDm6pugeidFV3lOO6JvhYZ%2Byn7IVjGwQEIN0RDgGV1zfet4HIR4hcfW%2FZ6XlCgMGp0LLTjs1chFBZCI9k94zob231qDpyA9NUSc%2BwJvYgUvCN07Xa8WE%2FLSbEOARN7rQqARa0QVfZXHTBJEel%2BBk%2BLYHg%2FAeH6tMNHJyfkFvq%2BveOCQkpl5Qn983J72SE2ZqzMVEsMtTEZ%2BGXpsGtKtsgMgWRtJ36hkwijsQwQf8AQ9qm5qQKKPlzhBf0JMiSszlzjW%2B8dojn8Wxe4WsAolQ9gsnmy2UrBkmsf%2B67zIFc7lUo7BvOMt1A%2BZGDg%2Bo5BKpVc%2FfOS%2BIKf4tuW4z%2BE%2FQkcLGMwisrKvQY6pgGFK3KHIWXboD9NrBQbNcfmcekSBGd2EjhrlDQmCgdFyQ484%2BQNgBvixDD45M7yKNnkA%2F9cetjvdIIvnYyYFmH56723%2BHa%2BjMg%2FMCfnxme107PssB1L3P2AS9iXoYrcFFVnJAx9KmxJZOihFGYvEIAKY%2BTZ5sKLtGKs%2FHVzxrAadKOEyeNspFxhLUP6jX7rEgk%2Bz9ljq6cm9ZT5gCk%2Bj6cxGjomyalM&X-Amz-Signature=ba2cb871e386e7e8fd2f864e41670d970b064a20ef072b2cac011235bc66ae0a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AQASMOA%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIEAXZ46H04XcZtLyw69Erzt4Jl1WpmLiBtvU13Ka2HhwAiB4noqIP9iJGtdidyTrYAIQ6E8gzL3%2B0ub46zYZh7n%2F7yr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMA52I871iq1yb1ugSKtwDjxa1HFwMoWjfdjwA41r0tK3wpIs9J30NvKrAvkA%2FfPYcabQDOjp6AWK9ZhLKj%2BHyquQwANkzxBw0Fz70TEjM89VLxk7y%2FF7aYnm9P491pVqqN1hTff%2FYmdI6w3OMPtvkfDWGo5k%2FuJHGDM4G67RTnFqXjBO51u15gniNutgp0Fq%2BoJdvFf%2FfGJDZH8caaxl3%2Bl7M9hxOsuspZelomXYwIPPXcnPAVfV%2B0M%2BLYEOjYSySYTthA5%2B2RbcxyYHGmlGX6LuXj30JyFjgsGUFRanAOdFcuSvbzzd8WiUDm6pugeidFV3lOO6JvhYZ%2Byn7IVjGwQEIN0RDgGV1zfet4HIR4hcfW%2FZ6XlCgMGp0LLTjs1chFBZCI9k94zob231qDpyA9NUSc%2BwJvYgUvCN07Xa8WE%2FLSbEOARN7rQqARa0QVfZXHTBJEel%2BBk%2BLYHg%2FAeH6tMNHJyfkFvq%2BveOCQkpl5Qn983J72SE2ZqzMVEsMtTEZ%2BGXpsGtKtsgMgWRtJ36hkwijsQwQf8AQ9qm5qQKKPlzhBf0JMiSszlzjW%2B8dojn8Wxe4WsAolQ9gsnmy2UrBkmsf%2B67zIFc7lUo7BvOMt1A%2BZGDg%2Bo5BKpVc%2FfOS%2BIKf4tuW4z%2BE%2FQkcLGMwisrKvQY6pgGFK3KHIWXboD9NrBQbNcfmcekSBGd2EjhrlDQmCgdFyQ484%2BQNgBvixDD45M7yKNnkA%2F9cetjvdIIvnYyYFmH56723%2BHa%2BjMg%2FMCfnxme107PssB1L3P2AS9iXoYrcFFVnJAx9KmxJZOihFGYvEIAKY%2BTZ5sKLtGKs%2FHVzxrAadKOEyeNspFxhLUP6jX7rEgk%2Bz9ljq6cm9ZT5gCk%2Bj6cxGjomyalM&X-Amz-Signature=034f99dbe094c21151787a726b27047d78cbaa6a914b6bb1e78ff18f0ab84a4d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AQASMOA%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIEAXZ46H04XcZtLyw69Erzt4Jl1WpmLiBtvU13Ka2HhwAiB4noqIP9iJGtdidyTrYAIQ6E8gzL3%2B0ub46zYZh7n%2F7yr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMA52I871iq1yb1ugSKtwDjxa1HFwMoWjfdjwA41r0tK3wpIs9J30NvKrAvkA%2FfPYcabQDOjp6AWK9ZhLKj%2BHyquQwANkzxBw0Fz70TEjM89VLxk7y%2FF7aYnm9P491pVqqN1hTff%2FYmdI6w3OMPtvkfDWGo5k%2FuJHGDM4G67RTnFqXjBO51u15gniNutgp0Fq%2BoJdvFf%2FfGJDZH8caaxl3%2Bl7M9hxOsuspZelomXYwIPPXcnPAVfV%2B0M%2BLYEOjYSySYTthA5%2B2RbcxyYHGmlGX6LuXj30JyFjgsGUFRanAOdFcuSvbzzd8WiUDm6pugeidFV3lOO6JvhYZ%2Byn7IVjGwQEIN0RDgGV1zfet4HIR4hcfW%2FZ6XlCgMGp0LLTjs1chFBZCI9k94zob231qDpyA9NUSc%2BwJvYgUvCN07Xa8WE%2FLSbEOARN7rQqARa0QVfZXHTBJEel%2BBk%2BLYHg%2FAeH6tMNHJyfkFvq%2BveOCQkpl5Qn983J72SE2ZqzMVEsMtTEZ%2BGXpsGtKtsgMgWRtJ36hkwijsQwQf8AQ9qm5qQKKPlzhBf0JMiSszlzjW%2B8dojn8Wxe4WsAolQ9gsnmy2UrBkmsf%2B67zIFc7lUo7BvOMt1A%2BZGDg%2Bo5BKpVc%2FfOS%2BIKf4tuW4z%2BE%2FQkcLGMwisrKvQY6pgGFK3KHIWXboD9NrBQbNcfmcekSBGd2EjhrlDQmCgdFyQ484%2BQNgBvixDD45M7yKNnkA%2F9cetjvdIIvnYyYFmH56723%2BHa%2BjMg%2FMCfnxme107PssB1L3P2AS9iXoYrcFFVnJAx9KmxJZOihFGYvEIAKY%2BTZ5sKLtGKs%2FHVzxrAadKOEyeNspFxhLUP6jX7rEgk%2Bz9ljq6cm9ZT5gCk%2Bj6cxGjomyalM&X-Amz-Signature=bc0653f92e3cf032fd9afb2a7852ecf19d4c15af02bc2725e78f0f6a3c2e71f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AQASMOA%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIEAXZ46H04XcZtLyw69Erzt4Jl1WpmLiBtvU13Ka2HhwAiB4noqIP9iJGtdidyTrYAIQ6E8gzL3%2B0ub46zYZh7n%2F7yr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMA52I871iq1yb1ugSKtwDjxa1HFwMoWjfdjwA41r0tK3wpIs9J30NvKrAvkA%2FfPYcabQDOjp6AWK9ZhLKj%2BHyquQwANkzxBw0Fz70TEjM89VLxk7y%2FF7aYnm9P491pVqqN1hTff%2FYmdI6w3OMPtvkfDWGo5k%2FuJHGDM4G67RTnFqXjBO51u15gniNutgp0Fq%2BoJdvFf%2FfGJDZH8caaxl3%2Bl7M9hxOsuspZelomXYwIPPXcnPAVfV%2B0M%2BLYEOjYSySYTthA5%2B2RbcxyYHGmlGX6LuXj30JyFjgsGUFRanAOdFcuSvbzzd8WiUDm6pugeidFV3lOO6JvhYZ%2Byn7IVjGwQEIN0RDgGV1zfet4HIR4hcfW%2FZ6XlCgMGp0LLTjs1chFBZCI9k94zob231qDpyA9NUSc%2BwJvYgUvCN07Xa8WE%2FLSbEOARN7rQqARa0QVfZXHTBJEel%2BBk%2BLYHg%2FAeH6tMNHJyfkFvq%2BveOCQkpl5Qn983J72SE2ZqzMVEsMtTEZ%2BGXpsGtKtsgMgWRtJ36hkwijsQwQf8AQ9qm5qQKKPlzhBf0JMiSszlzjW%2B8dojn8Wxe4WsAolQ9gsnmy2UrBkmsf%2B67zIFc7lUo7BvOMt1A%2BZGDg%2Bo5BKpVc%2FfOS%2BIKf4tuW4z%2BE%2FQkcLGMwisrKvQY6pgGFK3KHIWXboD9NrBQbNcfmcekSBGd2EjhrlDQmCgdFyQ484%2BQNgBvixDD45M7yKNnkA%2F9cetjvdIIvnYyYFmH56723%2BHa%2BjMg%2FMCfnxme107PssB1L3P2AS9iXoYrcFFVnJAx9KmxJZOihFGYvEIAKY%2BTZ5sKLtGKs%2FHVzxrAadKOEyeNspFxhLUP6jX7rEgk%2Bz9ljq6cm9ZT5gCk%2Bj6cxGjomyalM&X-Amz-Signature=797a372eaaaaa1da3176941eb41a007ef0bad12f0179ce58082bbbeab8d429cc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AQASMOA%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIEAXZ46H04XcZtLyw69Erzt4Jl1WpmLiBtvU13Ka2HhwAiB4noqIP9iJGtdidyTrYAIQ6E8gzL3%2B0ub46zYZh7n%2F7yr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMA52I871iq1yb1ugSKtwDjxa1HFwMoWjfdjwA41r0tK3wpIs9J30NvKrAvkA%2FfPYcabQDOjp6AWK9ZhLKj%2BHyquQwANkzxBw0Fz70TEjM89VLxk7y%2FF7aYnm9P491pVqqN1hTff%2FYmdI6w3OMPtvkfDWGo5k%2FuJHGDM4G67RTnFqXjBO51u15gniNutgp0Fq%2BoJdvFf%2FfGJDZH8caaxl3%2Bl7M9hxOsuspZelomXYwIPPXcnPAVfV%2B0M%2BLYEOjYSySYTthA5%2B2RbcxyYHGmlGX6LuXj30JyFjgsGUFRanAOdFcuSvbzzd8WiUDm6pugeidFV3lOO6JvhYZ%2Byn7IVjGwQEIN0RDgGV1zfet4HIR4hcfW%2FZ6XlCgMGp0LLTjs1chFBZCI9k94zob231qDpyA9NUSc%2BwJvYgUvCN07Xa8WE%2FLSbEOARN7rQqARa0QVfZXHTBJEel%2BBk%2BLYHg%2FAeH6tMNHJyfkFvq%2BveOCQkpl5Qn983J72SE2ZqzMVEsMtTEZ%2BGXpsGtKtsgMgWRtJ36hkwijsQwQf8AQ9qm5qQKKPlzhBf0JMiSszlzjW%2B8dojn8Wxe4WsAolQ9gsnmy2UrBkmsf%2B67zIFc7lUo7BvOMt1A%2BZGDg%2Bo5BKpVc%2FfOS%2BIKf4tuW4z%2BE%2FQkcLGMwisrKvQY6pgGFK3KHIWXboD9NrBQbNcfmcekSBGd2EjhrlDQmCgdFyQ484%2BQNgBvixDD45M7yKNnkA%2F9cetjvdIIvnYyYFmH56723%2BHa%2BjMg%2FMCfnxme107PssB1L3P2AS9iXoYrcFFVnJAx9KmxJZOihFGYvEIAKY%2BTZ5sKLtGKs%2FHVzxrAadKOEyeNspFxhLUP6jX7rEgk%2Bz9ljq6cm9ZT5gCk%2Bj6cxGjomyalM&X-Amz-Signature=fb520d093c79611feaabda1d1d3e209257576085e9262207db03d520ce87f8bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AQASMOA%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIEAXZ46H04XcZtLyw69Erzt4Jl1WpmLiBtvU13Ka2HhwAiB4noqIP9iJGtdidyTrYAIQ6E8gzL3%2B0ub46zYZh7n%2F7yr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMA52I871iq1yb1ugSKtwDjxa1HFwMoWjfdjwA41r0tK3wpIs9J30NvKrAvkA%2FfPYcabQDOjp6AWK9ZhLKj%2BHyquQwANkzxBw0Fz70TEjM89VLxk7y%2FF7aYnm9P491pVqqN1hTff%2FYmdI6w3OMPtvkfDWGo5k%2FuJHGDM4G67RTnFqXjBO51u15gniNutgp0Fq%2BoJdvFf%2FfGJDZH8caaxl3%2Bl7M9hxOsuspZelomXYwIPPXcnPAVfV%2B0M%2BLYEOjYSySYTthA5%2B2RbcxyYHGmlGX6LuXj30JyFjgsGUFRanAOdFcuSvbzzd8WiUDm6pugeidFV3lOO6JvhYZ%2Byn7IVjGwQEIN0RDgGV1zfet4HIR4hcfW%2FZ6XlCgMGp0LLTjs1chFBZCI9k94zob231qDpyA9NUSc%2BwJvYgUvCN07Xa8WE%2FLSbEOARN7rQqARa0QVfZXHTBJEel%2BBk%2BLYHg%2FAeH6tMNHJyfkFvq%2BveOCQkpl5Qn983J72SE2ZqzMVEsMtTEZ%2BGXpsGtKtsgMgWRtJ36hkwijsQwQf8AQ9qm5qQKKPlzhBf0JMiSszlzjW%2B8dojn8Wxe4WsAolQ9gsnmy2UrBkmsf%2B67zIFc7lUo7BvOMt1A%2BZGDg%2Bo5BKpVc%2FfOS%2BIKf4tuW4z%2BE%2FQkcLGMwisrKvQY6pgGFK3KHIWXboD9NrBQbNcfmcekSBGd2EjhrlDQmCgdFyQ484%2BQNgBvixDD45M7yKNnkA%2F9cetjvdIIvnYyYFmH56723%2BHa%2BjMg%2FMCfnxme107PssB1L3P2AS9iXoYrcFFVnJAx9KmxJZOihFGYvEIAKY%2BTZ5sKLtGKs%2FHVzxrAadKOEyeNspFxhLUP6jX7rEgk%2Bz9ljq6cm9ZT5gCk%2Bj6cxGjomyalM&X-Amz-Signature=c44d4f754c827cc625c302a6ec157465032f5bba6d0325c3e4d5399fb44da96a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AQASMOA%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIEAXZ46H04XcZtLyw69Erzt4Jl1WpmLiBtvU13Ka2HhwAiB4noqIP9iJGtdidyTrYAIQ6E8gzL3%2B0ub46zYZh7n%2F7yr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMA52I871iq1yb1ugSKtwDjxa1HFwMoWjfdjwA41r0tK3wpIs9J30NvKrAvkA%2FfPYcabQDOjp6AWK9ZhLKj%2BHyquQwANkzxBw0Fz70TEjM89VLxk7y%2FF7aYnm9P491pVqqN1hTff%2FYmdI6w3OMPtvkfDWGo5k%2FuJHGDM4G67RTnFqXjBO51u15gniNutgp0Fq%2BoJdvFf%2FfGJDZH8caaxl3%2Bl7M9hxOsuspZelomXYwIPPXcnPAVfV%2B0M%2BLYEOjYSySYTthA5%2B2RbcxyYHGmlGX6LuXj30JyFjgsGUFRanAOdFcuSvbzzd8WiUDm6pugeidFV3lOO6JvhYZ%2Byn7IVjGwQEIN0RDgGV1zfet4HIR4hcfW%2FZ6XlCgMGp0LLTjs1chFBZCI9k94zob231qDpyA9NUSc%2BwJvYgUvCN07Xa8WE%2FLSbEOARN7rQqARa0QVfZXHTBJEel%2BBk%2BLYHg%2FAeH6tMNHJyfkFvq%2BveOCQkpl5Qn983J72SE2ZqzMVEsMtTEZ%2BGXpsGtKtsgMgWRtJ36hkwijsQwQf8AQ9qm5qQKKPlzhBf0JMiSszlzjW%2B8dojn8Wxe4WsAolQ9gsnmy2UrBkmsf%2B67zIFc7lUo7BvOMt1A%2BZGDg%2Bo5BKpVc%2FfOS%2BIKf4tuW4z%2BE%2FQkcLGMwisrKvQY6pgGFK3KHIWXboD9NrBQbNcfmcekSBGd2EjhrlDQmCgdFyQ484%2BQNgBvixDD45M7yKNnkA%2F9cetjvdIIvnYyYFmH56723%2BHa%2BjMg%2FMCfnxme107PssB1L3P2AS9iXoYrcFFVnJAx9KmxJZOihFGYvEIAKY%2BTZ5sKLtGKs%2FHVzxrAadKOEyeNspFxhLUP6jX7rEgk%2Bz9ljq6cm9ZT5gCk%2Bj6cxGjomyalM&X-Amz-Signature=8a36fc544cb7e3e351fad6c7496dbade9d9003755cf89ccc81d9ea553b14e726&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
