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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXYDWAY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdAld%2F6VNeYPt7ejIXefWtWzKpd72St9IFk6mkjDtbZAiEAtqdRyYtB%2FF1Dlw7P0z0lrf7FWhEtH4fxgX2lWqUzcRwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaoYsIKCNYJuqkckCrcA92O3wFoj4qVl%2FsH9613H%2Bi2pQYPDvxZ3W86yJ8RcvTnzqfOCNsK4zSPSNchICtcrGVnbIoT%2FgFM3bhh%2FXZyVImwlBTz9tjjRAvaXxf7oQLsyeAL0c%2FSPfrGb%2Bd%2FVy1NMbXcdf2RsugUbLiZma%2BzCtihmI1Npxfr8hS2mzyka8X%2FlKFspceOcIHninIcdrYuh3MGyFkFkEO8Ar%2FHXLdRtqjgNGHlHJZ6CEo3GMyyIn%2BjhUI2LwfmWshxfRWD6SaWRgo2fUShOD2uQAF%2BpWDQnmAV9R66i0SqKjqRojg3BhJX9u08MISG7bhuZjvPBr%2F6Mh%2Fk8YtSuz%2B12OEIEKPxKnBcLztvXCWKD4ZqZc8kP83K7nE2TieAiWQgyHO0QS4tEOOfwHiDu2KhGgpwd2Vt%2FcKUyzFexImdX4j1%2FuHqP27MuetmuuP0f5KM1dCc%2BoClcttYvbtlYckUVDDuvNVZ9O1qU5jKIA3Ii4wKEeqJKYIdOEWjM6UgWutBMMz8F9RZdh7qV4ETlnmxx5%2FxVrEQKt9V3G9oR8LO5idvMzKem0MKqgOgdDpaOeolNm%2BaxJ%2FN0ZAhcoCngZMtmTScst%2FiOd4goGewhS4Dn2TdS3tnQV%2BPF4bnARl3q90r7SvxMPfC3sQGOqUB2sj2tZoTbEoDGzPJXF2viFPq0GHCDdYog6xtY6O9D45wSsC%2FywkQzviVwGq%2FFlJfRU9IT6qiQAzWWI1CjF86hMvrtOLTNBoYa1VvBpc6QlRZPmZflmPZ53lR5TnwPB1%2FafBSHtp5Pu6MLtAyhPaL5iJT5Ub9obJek4wLYP0l3QO9kBtkNn%2BkpzWizIcwvSVeIgCvefjv7DgT39Sk9suhvsAQHKI%2B&X-Amz-Signature=e9027ad4d8d04b4919cae5e78563eba8dfaf9697fa294fb784456c25f1cfd995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXYDWAY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdAld%2F6VNeYPt7ejIXefWtWzKpd72St9IFk6mkjDtbZAiEAtqdRyYtB%2FF1Dlw7P0z0lrf7FWhEtH4fxgX2lWqUzcRwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaoYsIKCNYJuqkckCrcA92O3wFoj4qVl%2FsH9613H%2Bi2pQYPDvxZ3W86yJ8RcvTnzqfOCNsK4zSPSNchICtcrGVnbIoT%2FgFM3bhh%2FXZyVImwlBTz9tjjRAvaXxf7oQLsyeAL0c%2FSPfrGb%2Bd%2FVy1NMbXcdf2RsugUbLiZma%2BzCtihmI1Npxfr8hS2mzyka8X%2FlKFspceOcIHninIcdrYuh3MGyFkFkEO8Ar%2FHXLdRtqjgNGHlHJZ6CEo3GMyyIn%2BjhUI2LwfmWshxfRWD6SaWRgo2fUShOD2uQAF%2BpWDQnmAV9R66i0SqKjqRojg3BhJX9u08MISG7bhuZjvPBr%2F6Mh%2Fk8YtSuz%2B12OEIEKPxKnBcLztvXCWKD4ZqZc8kP83K7nE2TieAiWQgyHO0QS4tEOOfwHiDu2KhGgpwd2Vt%2FcKUyzFexImdX4j1%2FuHqP27MuetmuuP0f5KM1dCc%2BoClcttYvbtlYckUVDDuvNVZ9O1qU5jKIA3Ii4wKEeqJKYIdOEWjM6UgWutBMMz8F9RZdh7qV4ETlnmxx5%2FxVrEQKt9V3G9oR8LO5idvMzKem0MKqgOgdDpaOeolNm%2BaxJ%2FN0ZAhcoCngZMtmTScst%2FiOd4goGewhS4Dn2TdS3tnQV%2BPF4bnARl3q90r7SvxMPfC3sQGOqUB2sj2tZoTbEoDGzPJXF2viFPq0GHCDdYog6xtY6O9D45wSsC%2FywkQzviVwGq%2FFlJfRU9IT6qiQAzWWI1CjF86hMvrtOLTNBoYa1VvBpc6QlRZPmZflmPZ53lR5TnwPB1%2FafBSHtp5Pu6MLtAyhPaL5iJT5Ub9obJek4wLYP0l3QO9kBtkNn%2BkpzWizIcwvSVeIgCvefjv7DgT39Sk9suhvsAQHKI%2B&X-Amz-Signature=1b71c8f1bbfca7750bb3fb58786925e7dfddc99fed67bb7e645e7591b8a60f75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXYDWAY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdAld%2F6VNeYPt7ejIXefWtWzKpd72St9IFk6mkjDtbZAiEAtqdRyYtB%2FF1Dlw7P0z0lrf7FWhEtH4fxgX2lWqUzcRwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaoYsIKCNYJuqkckCrcA92O3wFoj4qVl%2FsH9613H%2Bi2pQYPDvxZ3W86yJ8RcvTnzqfOCNsK4zSPSNchICtcrGVnbIoT%2FgFM3bhh%2FXZyVImwlBTz9tjjRAvaXxf7oQLsyeAL0c%2FSPfrGb%2Bd%2FVy1NMbXcdf2RsugUbLiZma%2BzCtihmI1Npxfr8hS2mzyka8X%2FlKFspceOcIHninIcdrYuh3MGyFkFkEO8Ar%2FHXLdRtqjgNGHlHJZ6CEo3GMyyIn%2BjhUI2LwfmWshxfRWD6SaWRgo2fUShOD2uQAF%2BpWDQnmAV9R66i0SqKjqRojg3BhJX9u08MISG7bhuZjvPBr%2F6Mh%2Fk8YtSuz%2B12OEIEKPxKnBcLztvXCWKD4ZqZc8kP83K7nE2TieAiWQgyHO0QS4tEOOfwHiDu2KhGgpwd2Vt%2FcKUyzFexImdX4j1%2FuHqP27MuetmuuP0f5KM1dCc%2BoClcttYvbtlYckUVDDuvNVZ9O1qU5jKIA3Ii4wKEeqJKYIdOEWjM6UgWutBMMz8F9RZdh7qV4ETlnmxx5%2FxVrEQKt9V3G9oR8LO5idvMzKem0MKqgOgdDpaOeolNm%2BaxJ%2FN0ZAhcoCngZMtmTScst%2FiOd4goGewhS4Dn2TdS3tnQV%2BPF4bnARl3q90r7SvxMPfC3sQGOqUB2sj2tZoTbEoDGzPJXF2viFPq0GHCDdYog6xtY6O9D45wSsC%2FywkQzviVwGq%2FFlJfRU9IT6qiQAzWWI1CjF86hMvrtOLTNBoYa1VvBpc6QlRZPmZflmPZ53lR5TnwPB1%2FafBSHtp5Pu6MLtAyhPaL5iJT5Ub9obJek4wLYP0l3QO9kBtkNn%2BkpzWizIcwvSVeIgCvefjv7DgT39Sk9suhvsAQHKI%2B&X-Amz-Signature=9916fc7319ede1087ce809e835658f4186c039043db8771673079dd4bde8a619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXYDWAY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdAld%2F6VNeYPt7ejIXefWtWzKpd72St9IFk6mkjDtbZAiEAtqdRyYtB%2FF1Dlw7P0z0lrf7FWhEtH4fxgX2lWqUzcRwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaoYsIKCNYJuqkckCrcA92O3wFoj4qVl%2FsH9613H%2Bi2pQYPDvxZ3W86yJ8RcvTnzqfOCNsK4zSPSNchICtcrGVnbIoT%2FgFM3bhh%2FXZyVImwlBTz9tjjRAvaXxf7oQLsyeAL0c%2FSPfrGb%2Bd%2FVy1NMbXcdf2RsugUbLiZma%2BzCtihmI1Npxfr8hS2mzyka8X%2FlKFspceOcIHninIcdrYuh3MGyFkFkEO8Ar%2FHXLdRtqjgNGHlHJZ6CEo3GMyyIn%2BjhUI2LwfmWshxfRWD6SaWRgo2fUShOD2uQAF%2BpWDQnmAV9R66i0SqKjqRojg3BhJX9u08MISG7bhuZjvPBr%2F6Mh%2Fk8YtSuz%2B12OEIEKPxKnBcLztvXCWKD4ZqZc8kP83K7nE2TieAiWQgyHO0QS4tEOOfwHiDu2KhGgpwd2Vt%2FcKUyzFexImdX4j1%2FuHqP27MuetmuuP0f5KM1dCc%2BoClcttYvbtlYckUVDDuvNVZ9O1qU5jKIA3Ii4wKEeqJKYIdOEWjM6UgWutBMMz8F9RZdh7qV4ETlnmxx5%2FxVrEQKt9V3G9oR8LO5idvMzKem0MKqgOgdDpaOeolNm%2BaxJ%2FN0ZAhcoCngZMtmTScst%2FiOd4goGewhS4Dn2TdS3tnQV%2BPF4bnARl3q90r7SvxMPfC3sQGOqUB2sj2tZoTbEoDGzPJXF2viFPq0GHCDdYog6xtY6O9D45wSsC%2FywkQzviVwGq%2FFlJfRU9IT6qiQAzWWI1CjF86hMvrtOLTNBoYa1VvBpc6QlRZPmZflmPZ53lR5TnwPB1%2FafBSHtp5Pu6MLtAyhPaL5iJT5Ub9obJek4wLYP0l3QO9kBtkNn%2BkpzWizIcwvSVeIgCvefjv7DgT39Sk9suhvsAQHKI%2B&X-Amz-Signature=e41e32455321ad2f948aaa7f32f0f251ff7fa27245fda90ddcaa64fe015132b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXYDWAY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdAld%2F6VNeYPt7ejIXefWtWzKpd72St9IFk6mkjDtbZAiEAtqdRyYtB%2FF1Dlw7P0z0lrf7FWhEtH4fxgX2lWqUzcRwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaoYsIKCNYJuqkckCrcA92O3wFoj4qVl%2FsH9613H%2Bi2pQYPDvxZ3W86yJ8RcvTnzqfOCNsK4zSPSNchICtcrGVnbIoT%2FgFM3bhh%2FXZyVImwlBTz9tjjRAvaXxf7oQLsyeAL0c%2FSPfrGb%2Bd%2FVy1NMbXcdf2RsugUbLiZma%2BzCtihmI1Npxfr8hS2mzyka8X%2FlKFspceOcIHninIcdrYuh3MGyFkFkEO8Ar%2FHXLdRtqjgNGHlHJZ6CEo3GMyyIn%2BjhUI2LwfmWshxfRWD6SaWRgo2fUShOD2uQAF%2BpWDQnmAV9R66i0SqKjqRojg3BhJX9u08MISG7bhuZjvPBr%2F6Mh%2Fk8YtSuz%2B12OEIEKPxKnBcLztvXCWKD4ZqZc8kP83K7nE2TieAiWQgyHO0QS4tEOOfwHiDu2KhGgpwd2Vt%2FcKUyzFexImdX4j1%2FuHqP27MuetmuuP0f5KM1dCc%2BoClcttYvbtlYckUVDDuvNVZ9O1qU5jKIA3Ii4wKEeqJKYIdOEWjM6UgWutBMMz8F9RZdh7qV4ETlnmxx5%2FxVrEQKt9V3G9oR8LO5idvMzKem0MKqgOgdDpaOeolNm%2BaxJ%2FN0ZAhcoCngZMtmTScst%2FiOd4goGewhS4Dn2TdS3tnQV%2BPF4bnARl3q90r7SvxMPfC3sQGOqUB2sj2tZoTbEoDGzPJXF2viFPq0GHCDdYog6xtY6O9D45wSsC%2FywkQzviVwGq%2FFlJfRU9IT6qiQAzWWI1CjF86hMvrtOLTNBoYa1VvBpc6QlRZPmZflmPZ53lR5TnwPB1%2FafBSHtp5Pu6MLtAyhPaL5iJT5Ub9obJek4wLYP0l3QO9kBtkNn%2BkpzWizIcwvSVeIgCvefjv7DgT39Sk9suhvsAQHKI%2B&X-Amz-Signature=8c248c87721fc590261998aba473f4bdbec524714c5e1a8e5c2f6af4c750eed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXYDWAY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdAld%2F6VNeYPt7ejIXefWtWzKpd72St9IFk6mkjDtbZAiEAtqdRyYtB%2FF1Dlw7P0z0lrf7FWhEtH4fxgX2lWqUzcRwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaoYsIKCNYJuqkckCrcA92O3wFoj4qVl%2FsH9613H%2Bi2pQYPDvxZ3W86yJ8RcvTnzqfOCNsK4zSPSNchICtcrGVnbIoT%2FgFM3bhh%2FXZyVImwlBTz9tjjRAvaXxf7oQLsyeAL0c%2FSPfrGb%2Bd%2FVy1NMbXcdf2RsugUbLiZma%2BzCtihmI1Npxfr8hS2mzyka8X%2FlKFspceOcIHninIcdrYuh3MGyFkFkEO8Ar%2FHXLdRtqjgNGHlHJZ6CEo3GMyyIn%2BjhUI2LwfmWshxfRWD6SaWRgo2fUShOD2uQAF%2BpWDQnmAV9R66i0SqKjqRojg3BhJX9u08MISG7bhuZjvPBr%2F6Mh%2Fk8YtSuz%2B12OEIEKPxKnBcLztvXCWKD4ZqZc8kP83K7nE2TieAiWQgyHO0QS4tEOOfwHiDu2KhGgpwd2Vt%2FcKUyzFexImdX4j1%2FuHqP27MuetmuuP0f5KM1dCc%2BoClcttYvbtlYckUVDDuvNVZ9O1qU5jKIA3Ii4wKEeqJKYIdOEWjM6UgWutBMMz8F9RZdh7qV4ETlnmxx5%2FxVrEQKt9V3G9oR8LO5idvMzKem0MKqgOgdDpaOeolNm%2BaxJ%2FN0ZAhcoCngZMtmTScst%2FiOd4goGewhS4Dn2TdS3tnQV%2BPF4bnARl3q90r7SvxMPfC3sQGOqUB2sj2tZoTbEoDGzPJXF2viFPq0GHCDdYog6xtY6O9D45wSsC%2FywkQzviVwGq%2FFlJfRU9IT6qiQAzWWI1CjF86hMvrtOLTNBoYa1VvBpc6QlRZPmZflmPZ53lR5TnwPB1%2FafBSHtp5Pu6MLtAyhPaL5iJT5Ub9obJek4wLYP0l3QO9kBtkNn%2BkpzWizIcwvSVeIgCvefjv7DgT39Sk9suhvsAQHKI%2B&X-Amz-Signature=51f3df8a67364c4acf3dd989905a7c04a09808a1eee1a36dfa4957d11f9c6d02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXYDWAY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdAld%2F6VNeYPt7ejIXefWtWzKpd72St9IFk6mkjDtbZAiEAtqdRyYtB%2FF1Dlw7P0z0lrf7FWhEtH4fxgX2lWqUzcRwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaoYsIKCNYJuqkckCrcA92O3wFoj4qVl%2FsH9613H%2Bi2pQYPDvxZ3W86yJ8RcvTnzqfOCNsK4zSPSNchICtcrGVnbIoT%2FgFM3bhh%2FXZyVImwlBTz9tjjRAvaXxf7oQLsyeAL0c%2FSPfrGb%2Bd%2FVy1NMbXcdf2RsugUbLiZma%2BzCtihmI1Npxfr8hS2mzyka8X%2FlKFspceOcIHninIcdrYuh3MGyFkFkEO8Ar%2FHXLdRtqjgNGHlHJZ6CEo3GMyyIn%2BjhUI2LwfmWshxfRWD6SaWRgo2fUShOD2uQAF%2BpWDQnmAV9R66i0SqKjqRojg3BhJX9u08MISG7bhuZjvPBr%2F6Mh%2Fk8YtSuz%2B12OEIEKPxKnBcLztvXCWKD4ZqZc8kP83K7nE2TieAiWQgyHO0QS4tEOOfwHiDu2KhGgpwd2Vt%2FcKUyzFexImdX4j1%2FuHqP27MuetmuuP0f5KM1dCc%2BoClcttYvbtlYckUVDDuvNVZ9O1qU5jKIA3Ii4wKEeqJKYIdOEWjM6UgWutBMMz8F9RZdh7qV4ETlnmxx5%2FxVrEQKt9V3G9oR8LO5idvMzKem0MKqgOgdDpaOeolNm%2BaxJ%2FN0ZAhcoCngZMtmTScst%2FiOd4goGewhS4Dn2TdS3tnQV%2BPF4bnARl3q90r7SvxMPfC3sQGOqUB2sj2tZoTbEoDGzPJXF2viFPq0GHCDdYog6xtY6O9D45wSsC%2FywkQzviVwGq%2FFlJfRU9IT6qiQAzWWI1CjF86hMvrtOLTNBoYa1VvBpc6QlRZPmZflmPZ53lR5TnwPB1%2FafBSHtp5Pu6MLtAyhPaL5iJT5Ub9obJek4wLYP0l3QO9kBtkNn%2BkpzWizIcwvSVeIgCvefjv7DgT39Sk9suhvsAQHKI%2B&X-Amz-Signature=d4cb68ada067be1ceab0fd471b548db670750c74ca514a6dd3ffcec86f4e4a31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXYDWAY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdAld%2F6VNeYPt7ejIXefWtWzKpd72St9IFk6mkjDtbZAiEAtqdRyYtB%2FF1Dlw7P0z0lrf7FWhEtH4fxgX2lWqUzcRwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaoYsIKCNYJuqkckCrcA92O3wFoj4qVl%2FsH9613H%2Bi2pQYPDvxZ3W86yJ8RcvTnzqfOCNsK4zSPSNchICtcrGVnbIoT%2FgFM3bhh%2FXZyVImwlBTz9tjjRAvaXxf7oQLsyeAL0c%2FSPfrGb%2Bd%2FVy1NMbXcdf2RsugUbLiZma%2BzCtihmI1Npxfr8hS2mzyka8X%2FlKFspceOcIHninIcdrYuh3MGyFkFkEO8Ar%2FHXLdRtqjgNGHlHJZ6CEo3GMyyIn%2BjhUI2LwfmWshxfRWD6SaWRgo2fUShOD2uQAF%2BpWDQnmAV9R66i0SqKjqRojg3BhJX9u08MISG7bhuZjvPBr%2F6Mh%2Fk8YtSuz%2B12OEIEKPxKnBcLztvXCWKD4ZqZc8kP83K7nE2TieAiWQgyHO0QS4tEOOfwHiDu2KhGgpwd2Vt%2FcKUyzFexImdX4j1%2FuHqP27MuetmuuP0f5KM1dCc%2BoClcttYvbtlYckUVDDuvNVZ9O1qU5jKIA3Ii4wKEeqJKYIdOEWjM6UgWutBMMz8F9RZdh7qV4ETlnmxx5%2FxVrEQKt9V3G9oR8LO5idvMzKem0MKqgOgdDpaOeolNm%2BaxJ%2FN0ZAhcoCngZMtmTScst%2FiOd4goGewhS4Dn2TdS3tnQV%2BPF4bnARl3q90r7SvxMPfC3sQGOqUB2sj2tZoTbEoDGzPJXF2viFPq0GHCDdYog6xtY6O9D45wSsC%2FywkQzviVwGq%2FFlJfRU9IT6qiQAzWWI1CjF86hMvrtOLTNBoYa1VvBpc6QlRZPmZflmPZ53lR5TnwPB1%2FafBSHtp5Pu6MLtAyhPaL5iJT5Ub9obJek4wLYP0l3QO9kBtkNn%2BkpzWizIcwvSVeIgCvefjv7DgT39Sk9suhvsAQHKI%2B&X-Amz-Signature=d648fc4fb77dd1abf77c152fc960f3f622d25d359aedac8a8cd630b09e186519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
