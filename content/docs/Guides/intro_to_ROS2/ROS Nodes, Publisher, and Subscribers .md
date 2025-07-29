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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JCZY3KG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFsEarl5xNAzcKOZLrnN0lqEY8LmWa7AkD2QZWPLj4NwAiEA9VTvqM%2BJpb4e1VzkGZnG%2FNP9UqWzO38mY8quB2JA%2FhMqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3Vj07uQDGkY0xDByrcAzLKrEY3%2F02E7mehOkjYQO%2BSKM7uf%2BXVbLZXA0chAqbiPj5lTCYe%2BKQEwAPaji0dnsDr6sSSnCAFCxhjn70JNWRg0ZKbZOZL1gQDhuaYY%2BLvbEbu%2BlQPN7OB0B4JVu40cXdYiPSxUgGniRWrBlpXoVc7vKymeYT1oXi2O3Yern6i5tLxLYYEbsRBQBOO09ITr%2BD03JJ8y5u3W1cG2g9uTJZD5C8ricNF904imo7RGfRvLPURS8T6DbFynJu%2FBau%2F8nhYetj83to72XtqMaoOBcjluTMtt60rFWkvGF5BKdKIphBhlZJ%2BYYwZ0q5KL4%2BmvAN0nWCGel3usSpRvxXLMiKaCOsAoImsVFidVDm4UxNfGrV%2BqeM7DizpSLy%2Fj%2BL3SxniWoQvrMVoikV1GpXTYqT8JUylH0v2s2WWEQBJlcNxq0Ue5IobAIYyjx6swG6l1c%2F9aaF1MrtNXcDE9f4hMc6QTK%2B%2Fvz6NrzS%2FlJNSdcxFx%2Bgyj2lgeI3GIyCvyvVs%2FI56EbLss6zFlyLNOQz71PBd%2BJZolEmu1qKSMCM4ZGy7lQ8bmvq4JR7cowRtaX4ozp8Rbw3lXK6jt3rojwXFSn4b%2BL9QK4E9H5CZfObfZQ2mAdhNaYZV37tde7q5MLuZo8QGOqUB79qT6mVUH3mmpE0nBbD1%2FDjYaA4%2BY58x7kDXx%2BZgAaMewKG7x5FjjCQL9SyQPAgzAP3kgJ7uVdUwQ2ndg1t8zrs%2FWQQtXpu3ThkOd9cGFxBMJGtL0LQMXnpL8puWJR1zq4aDjFcgT5WoQg7McNFRinI572H%2FCyPEZxYZT%2BO%2BDAdIjF7LtfS1zqH1E9F%2FIBnQIm6FmKD1u6VhMQIqWZW%2FFK1ESuok&X-Amz-Signature=decdd118fbbc80c631f6c316784b401580977127747df468cc7e1ca5211ab936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JCZY3KG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFsEarl5xNAzcKOZLrnN0lqEY8LmWa7AkD2QZWPLj4NwAiEA9VTvqM%2BJpb4e1VzkGZnG%2FNP9UqWzO38mY8quB2JA%2FhMqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3Vj07uQDGkY0xDByrcAzLKrEY3%2F02E7mehOkjYQO%2BSKM7uf%2BXVbLZXA0chAqbiPj5lTCYe%2BKQEwAPaji0dnsDr6sSSnCAFCxhjn70JNWRg0ZKbZOZL1gQDhuaYY%2BLvbEbu%2BlQPN7OB0B4JVu40cXdYiPSxUgGniRWrBlpXoVc7vKymeYT1oXi2O3Yern6i5tLxLYYEbsRBQBOO09ITr%2BD03JJ8y5u3W1cG2g9uTJZD5C8ricNF904imo7RGfRvLPURS8T6DbFynJu%2FBau%2F8nhYetj83to72XtqMaoOBcjluTMtt60rFWkvGF5BKdKIphBhlZJ%2BYYwZ0q5KL4%2BmvAN0nWCGel3usSpRvxXLMiKaCOsAoImsVFidVDm4UxNfGrV%2BqeM7DizpSLy%2Fj%2BL3SxniWoQvrMVoikV1GpXTYqT8JUylH0v2s2WWEQBJlcNxq0Ue5IobAIYyjx6swG6l1c%2F9aaF1MrtNXcDE9f4hMc6QTK%2B%2Fvz6NrzS%2FlJNSdcxFx%2Bgyj2lgeI3GIyCvyvVs%2FI56EbLss6zFlyLNOQz71PBd%2BJZolEmu1qKSMCM4ZGy7lQ8bmvq4JR7cowRtaX4ozp8Rbw3lXK6jt3rojwXFSn4b%2BL9QK4E9H5CZfObfZQ2mAdhNaYZV37tde7q5MLuZo8QGOqUB79qT6mVUH3mmpE0nBbD1%2FDjYaA4%2BY58x7kDXx%2BZgAaMewKG7x5FjjCQL9SyQPAgzAP3kgJ7uVdUwQ2ndg1t8zrs%2FWQQtXpu3ThkOd9cGFxBMJGtL0LQMXnpL8puWJR1zq4aDjFcgT5WoQg7McNFRinI572H%2FCyPEZxYZT%2BO%2BDAdIjF7LtfS1zqH1E9F%2FIBnQIm6FmKD1u6VhMQIqWZW%2FFK1ESuok&X-Amz-Signature=d5faf5a0d5dcdba9f68e3ef28ecf108b48d65da0442768851a293960f8754c85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JCZY3KG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFsEarl5xNAzcKOZLrnN0lqEY8LmWa7AkD2QZWPLj4NwAiEA9VTvqM%2BJpb4e1VzkGZnG%2FNP9UqWzO38mY8quB2JA%2FhMqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3Vj07uQDGkY0xDByrcAzLKrEY3%2F02E7mehOkjYQO%2BSKM7uf%2BXVbLZXA0chAqbiPj5lTCYe%2BKQEwAPaji0dnsDr6sSSnCAFCxhjn70JNWRg0ZKbZOZL1gQDhuaYY%2BLvbEbu%2BlQPN7OB0B4JVu40cXdYiPSxUgGniRWrBlpXoVc7vKymeYT1oXi2O3Yern6i5tLxLYYEbsRBQBOO09ITr%2BD03JJ8y5u3W1cG2g9uTJZD5C8ricNF904imo7RGfRvLPURS8T6DbFynJu%2FBau%2F8nhYetj83to72XtqMaoOBcjluTMtt60rFWkvGF5BKdKIphBhlZJ%2BYYwZ0q5KL4%2BmvAN0nWCGel3usSpRvxXLMiKaCOsAoImsVFidVDm4UxNfGrV%2BqeM7DizpSLy%2Fj%2BL3SxniWoQvrMVoikV1GpXTYqT8JUylH0v2s2WWEQBJlcNxq0Ue5IobAIYyjx6swG6l1c%2F9aaF1MrtNXcDE9f4hMc6QTK%2B%2Fvz6NrzS%2FlJNSdcxFx%2Bgyj2lgeI3GIyCvyvVs%2FI56EbLss6zFlyLNOQz71PBd%2BJZolEmu1qKSMCM4ZGy7lQ8bmvq4JR7cowRtaX4ozp8Rbw3lXK6jt3rojwXFSn4b%2BL9QK4E9H5CZfObfZQ2mAdhNaYZV37tde7q5MLuZo8QGOqUB79qT6mVUH3mmpE0nBbD1%2FDjYaA4%2BY58x7kDXx%2BZgAaMewKG7x5FjjCQL9SyQPAgzAP3kgJ7uVdUwQ2ndg1t8zrs%2FWQQtXpu3ThkOd9cGFxBMJGtL0LQMXnpL8puWJR1zq4aDjFcgT5WoQg7McNFRinI572H%2FCyPEZxYZT%2BO%2BDAdIjF7LtfS1zqH1E9F%2FIBnQIm6FmKD1u6VhMQIqWZW%2FFK1ESuok&X-Amz-Signature=37c88ddabf30e77424b33ba56be93ad55721e2159a4a2cd35444a5f7c118125a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JCZY3KG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFsEarl5xNAzcKOZLrnN0lqEY8LmWa7AkD2QZWPLj4NwAiEA9VTvqM%2BJpb4e1VzkGZnG%2FNP9UqWzO38mY8quB2JA%2FhMqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3Vj07uQDGkY0xDByrcAzLKrEY3%2F02E7mehOkjYQO%2BSKM7uf%2BXVbLZXA0chAqbiPj5lTCYe%2BKQEwAPaji0dnsDr6sSSnCAFCxhjn70JNWRg0ZKbZOZL1gQDhuaYY%2BLvbEbu%2BlQPN7OB0B4JVu40cXdYiPSxUgGniRWrBlpXoVc7vKymeYT1oXi2O3Yern6i5tLxLYYEbsRBQBOO09ITr%2BD03JJ8y5u3W1cG2g9uTJZD5C8ricNF904imo7RGfRvLPURS8T6DbFynJu%2FBau%2F8nhYetj83to72XtqMaoOBcjluTMtt60rFWkvGF5BKdKIphBhlZJ%2BYYwZ0q5KL4%2BmvAN0nWCGel3usSpRvxXLMiKaCOsAoImsVFidVDm4UxNfGrV%2BqeM7DizpSLy%2Fj%2BL3SxniWoQvrMVoikV1GpXTYqT8JUylH0v2s2WWEQBJlcNxq0Ue5IobAIYyjx6swG6l1c%2F9aaF1MrtNXcDE9f4hMc6QTK%2B%2Fvz6NrzS%2FlJNSdcxFx%2Bgyj2lgeI3GIyCvyvVs%2FI56EbLss6zFlyLNOQz71PBd%2BJZolEmu1qKSMCM4ZGy7lQ8bmvq4JR7cowRtaX4ozp8Rbw3lXK6jt3rojwXFSn4b%2BL9QK4E9H5CZfObfZQ2mAdhNaYZV37tde7q5MLuZo8QGOqUB79qT6mVUH3mmpE0nBbD1%2FDjYaA4%2BY58x7kDXx%2BZgAaMewKG7x5FjjCQL9SyQPAgzAP3kgJ7uVdUwQ2ndg1t8zrs%2FWQQtXpu3ThkOd9cGFxBMJGtL0LQMXnpL8puWJR1zq4aDjFcgT5WoQg7McNFRinI572H%2FCyPEZxYZT%2BO%2BDAdIjF7LtfS1zqH1E9F%2FIBnQIm6FmKD1u6VhMQIqWZW%2FFK1ESuok&X-Amz-Signature=31001d13d017f3218e550033daed4a384d05d562b2347df8b6ddda55ad3c4b76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JCZY3KG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFsEarl5xNAzcKOZLrnN0lqEY8LmWa7AkD2QZWPLj4NwAiEA9VTvqM%2BJpb4e1VzkGZnG%2FNP9UqWzO38mY8quB2JA%2FhMqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3Vj07uQDGkY0xDByrcAzLKrEY3%2F02E7mehOkjYQO%2BSKM7uf%2BXVbLZXA0chAqbiPj5lTCYe%2BKQEwAPaji0dnsDr6sSSnCAFCxhjn70JNWRg0ZKbZOZL1gQDhuaYY%2BLvbEbu%2BlQPN7OB0B4JVu40cXdYiPSxUgGniRWrBlpXoVc7vKymeYT1oXi2O3Yern6i5tLxLYYEbsRBQBOO09ITr%2BD03JJ8y5u3W1cG2g9uTJZD5C8ricNF904imo7RGfRvLPURS8T6DbFynJu%2FBau%2F8nhYetj83to72XtqMaoOBcjluTMtt60rFWkvGF5BKdKIphBhlZJ%2BYYwZ0q5KL4%2BmvAN0nWCGel3usSpRvxXLMiKaCOsAoImsVFidVDm4UxNfGrV%2BqeM7DizpSLy%2Fj%2BL3SxniWoQvrMVoikV1GpXTYqT8JUylH0v2s2WWEQBJlcNxq0Ue5IobAIYyjx6swG6l1c%2F9aaF1MrtNXcDE9f4hMc6QTK%2B%2Fvz6NrzS%2FlJNSdcxFx%2Bgyj2lgeI3GIyCvyvVs%2FI56EbLss6zFlyLNOQz71PBd%2BJZolEmu1qKSMCM4ZGy7lQ8bmvq4JR7cowRtaX4ozp8Rbw3lXK6jt3rojwXFSn4b%2BL9QK4E9H5CZfObfZQ2mAdhNaYZV37tde7q5MLuZo8QGOqUB79qT6mVUH3mmpE0nBbD1%2FDjYaA4%2BY58x7kDXx%2BZgAaMewKG7x5FjjCQL9SyQPAgzAP3kgJ7uVdUwQ2ndg1t8zrs%2FWQQtXpu3ThkOd9cGFxBMJGtL0LQMXnpL8puWJR1zq4aDjFcgT5WoQg7McNFRinI572H%2FCyPEZxYZT%2BO%2BDAdIjF7LtfS1zqH1E9F%2FIBnQIm6FmKD1u6VhMQIqWZW%2FFK1ESuok&X-Amz-Signature=6fddc1b8c15c7b616e0f91ebf3fe7955aa58eb285cac4f0f7b7bf2f2a614e9f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JCZY3KG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFsEarl5xNAzcKOZLrnN0lqEY8LmWa7AkD2QZWPLj4NwAiEA9VTvqM%2BJpb4e1VzkGZnG%2FNP9UqWzO38mY8quB2JA%2FhMqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3Vj07uQDGkY0xDByrcAzLKrEY3%2F02E7mehOkjYQO%2BSKM7uf%2BXVbLZXA0chAqbiPj5lTCYe%2BKQEwAPaji0dnsDr6sSSnCAFCxhjn70JNWRg0ZKbZOZL1gQDhuaYY%2BLvbEbu%2BlQPN7OB0B4JVu40cXdYiPSxUgGniRWrBlpXoVc7vKymeYT1oXi2O3Yern6i5tLxLYYEbsRBQBOO09ITr%2BD03JJ8y5u3W1cG2g9uTJZD5C8ricNF904imo7RGfRvLPURS8T6DbFynJu%2FBau%2F8nhYetj83to72XtqMaoOBcjluTMtt60rFWkvGF5BKdKIphBhlZJ%2BYYwZ0q5KL4%2BmvAN0nWCGel3usSpRvxXLMiKaCOsAoImsVFidVDm4UxNfGrV%2BqeM7DizpSLy%2Fj%2BL3SxniWoQvrMVoikV1GpXTYqT8JUylH0v2s2WWEQBJlcNxq0Ue5IobAIYyjx6swG6l1c%2F9aaF1MrtNXcDE9f4hMc6QTK%2B%2Fvz6NrzS%2FlJNSdcxFx%2Bgyj2lgeI3GIyCvyvVs%2FI56EbLss6zFlyLNOQz71PBd%2BJZolEmu1qKSMCM4ZGy7lQ8bmvq4JR7cowRtaX4ozp8Rbw3lXK6jt3rojwXFSn4b%2BL9QK4E9H5CZfObfZQ2mAdhNaYZV37tde7q5MLuZo8QGOqUB79qT6mVUH3mmpE0nBbD1%2FDjYaA4%2BY58x7kDXx%2BZgAaMewKG7x5FjjCQL9SyQPAgzAP3kgJ7uVdUwQ2ndg1t8zrs%2FWQQtXpu3ThkOd9cGFxBMJGtL0LQMXnpL8puWJR1zq4aDjFcgT5WoQg7McNFRinI572H%2FCyPEZxYZT%2BO%2BDAdIjF7LtfS1zqH1E9F%2FIBnQIm6FmKD1u6VhMQIqWZW%2FFK1ESuok&X-Amz-Signature=3c5e36ce91b48ab73402eb3f32f7d9690b9afefe11f33f01b667dc9cb8da84e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JCZY3KG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFsEarl5xNAzcKOZLrnN0lqEY8LmWa7AkD2QZWPLj4NwAiEA9VTvqM%2BJpb4e1VzkGZnG%2FNP9UqWzO38mY8quB2JA%2FhMqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3Vj07uQDGkY0xDByrcAzLKrEY3%2F02E7mehOkjYQO%2BSKM7uf%2BXVbLZXA0chAqbiPj5lTCYe%2BKQEwAPaji0dnsDr6sSSnCAFCxhjn70JNWRg0ZKbZOZL1gQDhuaYY%2BLvbEbu%2BlQPN7OB0B4JVu40cXdYiPSxUgGniRWrBlpXoVc7vKymeYT1oXi2O3Yern6i5tLxLYYEbsRBQBOO09ITr%2BD03JJ8y5u3W1cG2g9uTJZD5C8ricNF904imo7RGfRvLPURS8T6DbFynJu%2FBau%2F8nhYetj83to72XtqMaoOBcjluTMtt60rFWkvGF5BKdKIphBhlZJ%2BYYwZ0q5KL4%2BmvAN0nWCGel3usSpRvxXLMiKaCOsAoImsVFidVDm4UxNfGrV%2BqeM7DizpSLy%2Fj%2BL3SxniWoQvrMVoikV1GpXTYqT8JUylH0v2s2WWEQBJlcNxq0Ue5IobAIYyjx6swG6l1c%2F9aaF1MrtNXcDE9f4hMc6QTK%2B%2Fvz6NrzS%2FlJNSdcxFx%2Bgyj2lgeI3GIyCvyvVs%2FI56EbLss6zFlyLNOQz71PBd%2BJZolEmu1qKSMCM4ZGy7lQ8bmvq4JR7cowRtaX4ozp8Rbw3lXK6jt3rojwXFSn4b%2BL9QK4E9H5CZfObfZQ2mAdhNaYZV37tde7q5MLuZo8QGOqUB79qT6mVUH3mmpE0nBbD1%2FDjYaA4%2BY58x7kDXx%2BZgAaMewKG7x5FjjCQL9SyQPAgzAP3kgJ7uVdUwQ2ndg1t8zrs%2FWQQtXpu3ThkOd9cGFxBMJGtL0LQMXnpL8puWJR1zq4aDjFcgT5WoQg7McNFRinI572H%2FCyPEZxYZT%2BO%2BDAdIjF7LtfS1zqH1E9F%2FIBnQIm6FmKD1u6VhMQIqWZW%2FFK1ESuok&X-Amz-Signature=4bf8d8bdbccff92af6e1e3a182ed003ca0fee0e89c7e83fe77b53796758eddcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JCZY3KG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFsEarl5xNAzcKOZLrnN0lqEY8LmWa7AkD2QZWPLj4NwAiEA9VTvqM%2BJpb4e1VzkGZnG%2FNP9UqWzO38mY8quB2JA%2FhMqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3Vj07uQDGkY0xDByrcAzLKrEY3%2F02E7mehOkjYQO%2BSKM7uf%2BXVbLZXA0chAqbiPj5lTCYe%2BKQEwAPaji0dnsDr6sSSnCAFCxhjn70JNWRg0ZKbZOZL1gQDhuaYY%2BLvbEbu%2BlQPN7OB0B4JVu40cXdYiPSxUgGniRWrBlpXoVc7vKymeYT1oXi2O3Yern6i5tLxLYYEbsRBQBOO09ITr%2BD03JJ8y5u3W1cG2g9uTJZD5C8ricNF904imo7RGfRvLPURS8T6DbFynJu%2FBau%2F8nhYetj83to72XtqMaoOBcjluTMtt60rFWkvGF5BKdKIphBhlZJ%2BYYwZ0q5KL4%2BmvAN0nWCGel3usSpRvxXLMiKaCOsAoImsVFidVDm4UxNfGrV%2BqeM7DizpSLy%2Fj%2BL3SxniWoQvrMVoikV1GpXTYqT8JUylH0v2s2WWEQBJlcNxq0Ue5IobAIYyjx6swG6l1c%2F9aaF1MrtNXcDE9f4hMc6QTK%2B%2Fvz6NrzS%2FlJNSdcxFx%2Bgyj2lgeI3GIyCvyvVs%2FI56EbLss6zFlyLNOQz71PBd%2BJZolEmu1qKSMCM4ZGy7lQ8bmvq4JR7cowRtaX4ozp8Rbw3lXK6jt3rojwXFSn4b%2BL9QK4E9H5CZfObfZQ2mAdhNaYZV37tde7q5MLuZo8QGOqUB79qT6mVUH3mmpE0nBbD1%2FDjYaA4%2BY58x7kDXx%2BZgAaMewKG7x5FjjCQL9SyQPAgzAP3kgJ7uVdUwQ2ndg1t8zrs%2FWQQtXpu3ThkOd9cGFxBMJGtL0LQMXnpL8puWJR1zq4aDjFcgT5WoQg7McNFRinI572H%2FCyPEZxYZT%2BO%2BDAdIjF7LtfS1zqH1E9F%2FIBnQIm6FmKD1u6VhMQIqWZW%2FFK1ESuok&X-Amz-Signature=ed7ddfb57f7436e0caf15c353bb4211bd3b46359e8daa82ced293d933ce5cc6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
