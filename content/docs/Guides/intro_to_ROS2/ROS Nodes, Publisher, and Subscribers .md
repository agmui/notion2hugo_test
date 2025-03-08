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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIXQ4LYM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIEWT2UPr40aZZgkyhkN3fSocI4mIoNk11N7IiGuFIXgEAiEArmNcPHWKK2NHzXELiLzmVTgGO%2FSpH3IGHATfQC7qhG8q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDHSgR%2FDi%2FHBIv3DC6yrcAyjZcbvpquTUBg7XeVRz9tEH9x2Lq%2FqjrvDiEacy9V87nkDB13TTf59a4kaOiEuMrQJTPO7KR8nnWr4Y1vVZzdpbmVx4KDAhv8fsKDjF9AOL11nA2n8fT8PbIWLnokZsfLRiDe8LyUXX%2FDgFZ495YoQy%2B%2FjomDHteJcrx%2B183zEB8o2QNXwHjLVwElaNENOINbYtDb7ZPtbzn4Xh3%2FiOiB9NTE5wkiQAFMHHjhP1SP6Chh%2FsaVIbAanSx3w61DC7xBdYrmkmVpXZq8FT9mlzDaxJmTq1jYg3QZUIPLLc1%2FiawgFdIDv6xNKRI0kKk9uV31m1yPflM3fan1lJLK17Uw98YegZXmjqM1gEoPiJlkZg9BfQ8wwuG5SnUBFcDb4KDuNbV9KhcXkTACpMW%2BjBsd2U1AM5POXjCfKUA%2FaSN%2B6kvFWln%2F7iDx5%2FmoKOL4I5J4VH5Sa1HY4PmiFouZW8Tup8bylygZ%2FshcluhrtHPNcsiA51aOzSVFiYBeQb3zwn%2Fz9us6rDnJwLu2Bv5hbFjeRooxAlIDM5mqMo6Ld0F50Chk1HCT%2Fy9gLQv0sx%2BmHA8h4KiO0i8MGFiAz5qLQc1%2FA2nL1A0E3CQmqRfkKbqzMgTuHxNOSmGJVFR8yeMIWer74GOqUB7EzqKNRuyOFLAr1hbO0ZWLZ0lA3S8UYFrXg%2FvtNHpwmLeTpK8XjI52te7m%2FpvwWHPydl8KyXiTFYBHhdizJG2OeH9Bszk7OYd4Ocy3JLwihhSkzst%2FyUJFvSUPydzUPCqqLdKJexjZqAxTX7rQ%2BZSBcvI1QU1sP%2F5xKVC%2BPYZvnra94dAdygLpeOK9JICZ25fWcNQJ%2FHzcMcbHCWweGWv5OmIN8Q&X-Amz-Signature=54cb154a9a2a0e19aec8593b3c63a0f743e9018cc95e4212b322eff15e67bb9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIXQ4LYM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIEWT2UPr40aZZgkyhkN3fSocI4mIoNk11N7IiGuFIXgEAiEArmNcPHWKK2NHzXELiLzmVTgGO%2FSpH3IGHATfQC7qhG8q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDHSgR%2FDi%2FHBIv3DC6yrcAyjZcbvpquTUBg7XeVRz9tEH9x2Lq%2FqjrvDiEacy9V87nkDB13TTf59a4kaOiEuMrQJTPO7KR8nnWr4Y1vVZzdpbmVx4KDAhv8fsKDjF9AOL11nA2n8fT8PbIWLnokZsfLRiDe8LyUXX%2FDgFZ495YoQy%2B%2FjomDHteJcrx%2B183zEB8o2QNXwHjLVwElaNENOINbYtDb7ZPtbzn4Xh3%2FiOiB9NTE5wkiQAFMHHjhP1SP6Chh%2FsaVIbAanSx3w61DC7xBdYrmkmVpXZq8FT9mlzDaxJmTq1jYg3QZUIPLLc1%2FiawgFdIDv6xNKRI0kKk9uV31m1yPflM3fan1lJLK17Uw98YegZXmjqM1gEoPiJlkZg9BfQ8wwuG5SnUBFcDb4KDuNbV9KhcXkTACpMW%2BjBsd2U1AM5POXjCfKUA%2FaSN%2B6kvFWln%2F7iDx5%2FmoKOL4I5J4VH5Sa1HY4PmiFouZW8Tup8bylygZ%2FshcluhrtHPNcsiA51aOzSVFiYBeQb3zwn%2Fz9us6rDnJwLu2Bv5hbFjeRooxAlIDM5mqMo6Ld0F50Chk1HCT%2Fy9gLQv0sx%2BmHA8h4KiO0i8MGFiAz5qLQc1%2FA2nL1A0E3CQmqRfkKbqzMgTuHxNOSmGJVFR8yeMIWer74GOqUB7EzqKNRuyOFLAr1hbO0ZWLZ0lA3S8UYFrXg%2FvtNHpwmLeTpK8XjI52te7m%2FpvwWHPydl8KyXiTFYBHhdizJG2OeH9Bszk7OYd4Ocy3JLwihhSkzst%2FyUJFvSUPydzUPCqqLdKJexjZqAxTX7rQ%2BZSBcvI1QU1sP%2F5xKVC%2BPYZvnra94dAdygLpeOK9JICZ25fWcNQJ%2FHzcMcbHCWweGWv5OmIN8Q&X-Amz-Signature=549ff450c3df402d100af82659a9dcb77ac980415a8f8de281da628715626ec0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIXQ4LYM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIEWT2UPr40aZZgkyhkN3fSocI4mIoNk11N7IiGuFIXgEAiEArmNcPHWKK2NHzXELiLzmVTgGO%2FSpH3IGHATfQC7qhG8q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDHSgR%2FDi%2FHBIv3DC6yrcAyjZcbvpquTUBg7XeVRz9tEH9x2Lq%2FqjrvDiEacy9V87nkDB13TTf59a4kaOiEuMrQJTPO7KR8nnWr4Y1vVZzdpbmVx4KDAhv8fsKDjF9AOL11nA2n8fT8PbIWLnokZsfLRiDe8LyUXX%2FDgFZ495YoQy%2B%2FjomDHteJcrx%2B183zEB8o2QNXwHjLVwElaNENOINbYtDb7ZPtbzn4Xh3%2FiOiB9NTE5wkiQAFMHHjhP1SP6Chh%2FsaVIbAanSx3w61DC7xBdYrmkmVpXZq8FT9mlzDaxJmTq1jYg3QZUIPLLc1%2FiawgFdIDv6xNKRI0kKk9uV31m1yPflM3fan1lJLK17Uw98YegZXmjqM1gEoPiJlkZg9BfQ8wwuG5SnUBFcDb4KDuNbV9KhcXkTACpMW%2BjBsd2U1AM5POXjCfKUA%2FaSN%2B6kvFWln%2F7iDx5%2FmoKOL4I5J4VH5Sa1HY4PmiFouZW8Tup8bylygZ%2FshcluhrtHPNcsiA51aOzSVFiYBeQb3zwn%2Fz9us6rDnJwLu2Bv5hbFjeRooxAlIDM5mqMo6Ld0F50Chk1HCT%2Fy9gLQv0sx%2BmHA8h4KiO0i8MGFiAz5qLQc1%2FA2nL1A0E3CQmqRfkKbqzMgTuHxNOSmGJVFR8yeMIWer74GOqUB7EzqKNRuyOFLAr1hbO0ZWLZ0lA3S8UYFrXg%2FvtNHpwmLeTpK8XjI52te7m%2FpvwWHPydl8KyXiTFYBHhdizJG2OeH9Bszk7OYd4Ocy3JLwihhSkzst%2FyUJFvSUPydzUPCqqLdKJexjZqAxTX7rQ%2BZSBcvI1QU1sP%2F5xKVC%2BPYZvnra94dAdygLpeOK9JICZ25fWcNQJ%2FHzcMcbHCWweGWv5OmIN8Q&X-Amz-Signature=0d905e52a978b9ba8374f01a4606131066b0155e13ffd6d373205aed8c2190e7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIXQ4LYM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIEWT2UPr40aZZgkyhkN3fSocI4mIoNk11N7IiGuFIXgEAiEArmNcPHWKK2NHzXELiLzmVTgGO%2FSpH3IGHATfQC7qhG8q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDHSgR%2FDi%2FHBIv3DC6yrcAyjZcbvpquTUBg7XeVRz9tEH9x2Lq%2FqjrvDiEacy9V87nkDB13TTf59a4kaOiEuMrQJTPO7KR8nnWr4Y1vVZzdpbmVx4KDAhv8fsKDjF9AOL11nA2n8fT8PbIWLnokZsfLRiDe8LyUXX%2FDgFZ495YoQy%2B%2FjomDHteJcrx%2B183zEB8o2QNXwHjLVwElaNENOINbYtDb7ZPtbzn4Xh3%2FiOiB9NTE5wkiQAFMHHjhP1SP6Chh%2FsaVIbAanSx3w61DC7xBdYrmkmVpXZq8FT9mlzDaxJmTq1jYg3QZUIPLLc1%2FiawgFdIDv6xNKRI0kKk9uV31m1yPflM3fan1lJLK17Uw98YegZXmjqM1gEoPiJlkZg9BfQ8wwuG5SnUBFcDb4KDuNbV9KhcXkTACpMW%2BjBsd2U1AM5POXjCfKUA%2FaSN%2B6kvFWln%2F7iDx5%2FmoKOL4I5J4VH5Sa1HY4PmiFouZW8Tup8bylygZ%2FshcluhrtHPNcsiA51aOzSVFiYBeQb3zwn%2Fz9us6rDnJwLu2Bv5hbFjeRooxAlIDM5mqMo6Ld0F50Chk1HCT%2Fy9gLQv0sx%2BmHA8h4KiO0i8MGFiAz5qLQc1%2FA2nL1A0E3CQmqRfkKbqzMgTuHxNOSmGJVFR8yeMIWer74GOqUB7EzqKNRuyOFLAr1hbO0ZWLZ0lA3S8UYFrXg%2FvtNHpwmLeTpK8XjI52te7m%2FpvwWHPydl8KyXiTFYBHhdizJG2OeH9Bszk7OYd4Ocy3JLwihhSkzst%2FyUJFvSUPydzUPCqqLdKJexjZqAxTX7rQ%2BZSBcvI1QU1sP%2F5xKVC%2BPYZvnra94dAdygLpeOK9JICZ25fWcNQJ%2FHzcMcbHCWweGWv5OmIN8Q&X-Amz-Signature=548d103c10e0ae4a1cf4b3def6638cb1edfd5f674b56456ff82b38f7fa862b5c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIXQ4LYM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIEWT2UPr40aZZgkyhkN3fSocI4mIoNk11N7IiGuFIXgEAiEArmNcPHWKK2NHzXELiLzmVTgGO%2FSpH3IGHATfQC7qhG8q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDHSgR%2FDi%2FHBIv3DC6yrcAyjZcbvpquTUBg7XeVRz9tEH9x2Lq%2FqjrvDiEacy9V87nkDB13TTf59a4kaOiEuMrQJTPO7KR8nnWr4Y1vVZzdpbmVx4KDAhv8fsKDjF9AOL11nA2n8fT8PbIWLnokZsfLRiDe8LyUXX%2FDgFZ495YoQy%2B%2FjomDHteJcrx%2B183zEB8o2QNXwHjLVwElaNENOINbYtDb7ZPtbzn4Xh3%2FiOiB9NTE5wkiQAFMHHjhP1SP6Chh%2FsaVIbAanSx3w61DC7xBdYrmkmVpXZq8FT9mlzDaxJmTq1jYg3QZUIPLLc1%2FiawgFdIDv6xNKRI0kKk9uV31m1yPflM3fan1lJLK17Uw98YegZXmjqM1gEoPiJlkZg9BfQ8wwuG5SnUBFcDb4KDuNbV9KhcXkTACpMW%2BjBsd2U1AM5POXjCfKUA%2FaSN%2B6kvFWln%2F7iDx5%2FmoKOL4I5J4VH5Sa1HY4PmiFouZW8Tup8bylygZ%2FshcluhrtHPNcsiA51aOzSVFiYBeQb3zwn%2Fz9us6rDnJwLu2Bv5hbFjeRooxAlIDM5mqMo6Ld0F50Chk1HCT%2Fy9gLQv0sx%2BmHA8h4KiO0i8MGFiAz5qLQc1%2FA2nL1A0E3CQmqRfkKbqzMgTuHxNOSmGJVFR8yeMIWer74GOqUB7EzqKNRuyOFLAr1hbO0ZWLZ0lA3S8UYFrXg%2FvtNHpwmLeTpK8XjI52te7m%2FpvwWHPydl8KyXiTFYBHhdizJG2OeH9Bszk7OYd4Ocy3JLwihhSkzst%2FyUJFvSUPydzUPCqqLdKJexjZqAxTX7rQ%2BZSBcvI1QU1sP%2F5xKVC%2BPYZvnra94dAdygLpeOK9JICZ25fWcNQJ%2FHzcMcbHCWweGWv5OmIN8Q&X-Amz-Signature=64fbcc0890330b8978bee8d7516803f514666ebcc203554d891e5cbb90ec6a58&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIXQ4LYM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIEWT2UPr40aZZgkyhkN3fSocI4mIoNk11N7IiGuFIXgEAiEArmNcPHWKK2NHzXELiLzmVTgGO%2FSpH3IGHATfQC7qhG8q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDHSgR%2FDi%2FHBIv3DC6yrcAyjZcbvpquTUBg7XeVRz9tEH9x2Lq%2FqjrvDiEacy9V87nkDB13TTf59a4kaOiEuMrQJTPO7KR8nnWr4Y1vVZzdpbmVx4KDAhv8fsKDjF9AOL11nA2n8fT8PbIWLnokZsfLRiDe8LyUXX%2FDgFZ495YoQy%2B%2FjomDHteJcrx%2B183zEB8o2QNXwHjLVwElaNENOINbYtDb7ZPtbzn4Xh3%2FiOiB9NTE5wkiQAFMHHjhP1SP6Chh%2FsaVIbAanSx3w61DC7xBdYrmkmVpXZq8FT9mlzDaxJmTq1jYg3QZUIPLLc1%2FiawgFdIDv6xNKRI0kKk9uV31m1yPflM3fan1lJLK17Uw98YegZXmjqM1gEoPiJlkZg9BfQ8wwuG5SnUBFcDb4KDuNbV9KhcXkTACpMW%2BjBsd2U1AM5POXjCfKUA%2FaSN%2B6kvFWln%2F7iDx5%2FmoKOL4I5J4VH5Sa1HY4PmiFouZW8Tup8bylygZ%2FshcluhrtHPNcsiA51aOzSVFiYBeQb3zwn%2Fz9us6rDnJwLu2Bv5hbFjeRooxAlIDM5mqMo6Ld0F50Chk1HCT%2Fy9gLQv0sx%2BmHA8h4KiO0i8MGFiAz5qLQc1%2FA2nL1A0E3CQmqRfkKbqzMgTuHxNOSmGJVFR8yeMIWer74GOqUB7EzqKNRuyOFLAr1hbO0ZWLZ0lA3S8UYFrXg%2FvtNHpwmLeTpK8XjI52te7m%2FpvwWHPydl8KyXiTFYBHhdizJG2OeH9Bszk7OYd4Ocy3JLwihhSkzst%2FyUJFvSUPydzUPCqqLdKJexjZqAxTX7rQ%2BZSBcvI1QU1sP%2F5xKVC%2BPYZvnra94dAdygLpeOK9JICZ25fWcNQJ%2FHzcMcbHCWweGWv5OmIN8Q&X-Amz-Signature=3ae0a3cadf67570c259d1b634d87961f6b8efbe9505b8e767caf7eacb08b17eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIXQ4LYM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIEWT2UPr40aZZgkyhkN3fSocI4mIoNk11N7IiGuFIXgEAiEArmNcPHWKK2NHzXELiLzmVTgGO%2FSpH3IGHATfQC7qhG8q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDHSgR%2FDi%2FHBIv3DC6yrcAyjZcbvpquTUBg7XeVRz9tEH9x2Lq%2FqjrvDiEacy9V87nkDB13TTf59a4kaOiEuMrQJTPO7KR8nnWr4Y1vVZzdpbmVx4KDAhv8fsKDjF9AOL11nA2n8fT8PbIWLnokZsfLRiDe8LyUXX%2FDgFZ495YoQy%2B%2FjomDHteJcrx%2B183zEB8o2QNXwHjLVwElaNENOINbYtDb7ZPtbzn4Xh3%2FiOiB9NTE5wkiQAFMHHjhP1SP6Chh%2FsaVIbAanSx3w61DC7xBdYrmkmVpXZq8FT9mlzDaxJmTq1jYg3QZUIPLLc1%2FiawgFdIDv6xNKRI0kKk9uV31m1yPflM3fan1lJLK17Uw98YegZXmjqM1gEoPiJlkZg9BfQ8wwuG5SnUBFcDb4KDuNbV9KhcXkTACpMW%2BjBsd2U1AM5POXjCfKUA%2FaSN%2B6kvFWln%2F7iDx5%2FmoKOL4I5J4VH5Sa1HY4PmiFouZW8Tup8bylygZ%2FshcluhrtHPNcsiA51aOzSVFiYBeQb3zwn%2Fz9us6rDnJwLu2Bv5hbFjeRooxAlIDM5mqMo6Ld0F50Chk1HCT%2Fy9gLQv0sx%2BmHA8h4KiO0i8MGFiAz5qLQc1%2FA2nL1A0E3CQmqRfkKbqzMgTuHxNOSmGJVFR8yeMIWer74GOqUB7EzqKNRuyOFLAr1hbO0ZWLZ0lA3S8UYFrXg%2FvtNHpwmLeTpK8XjI52te7m%2FpvwWHPydl8KyXiTFYBHhdizJG2OeH9Bszk7OYd4Ocy3JLwihhSkzst%2FyUJFvSUPydzUPCqqLdKJexjZqAxTX7rQ%2BZSBcvI1QU1sP%2F5xKVC%2BPYZvnra94dAdygLpeOK9JICZ25fWcNQJ%2FHzcMcbHCWweGWv5OmIN8Q&X-Amz-Signature=bdbf350cfcad145719a4a4b732b4d055410e4b7948dd321c8c05422a1d5517a3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIXQ4LYM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIEWT2UPr40aZZgkyhkN3fSocI4mIoNk11N7IiGuFIXgEAiEArmNcPHWKK2NHzXELiLzmVTgGO%2FSpH3IGHATfQC7qhG8q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDHSgR%2FDi%2FHBIv3DC6yrcAyjZcbvpquTUBg7XeVRz9tEH9x2Lq%2FqjrvDiEacy9V87nkDB13TTf59a4kaOiEuMrQJTPO7KR8nnWr4Y1vVZzdpbmVx4KDAhv8fsKDjF9AOL11nA2n8fT8PbIWLnokZsfLRiDe8LyUXX%2FDgFZ495YoQy%2B%2FjomDHteJcrx%2B183zEB8o2QNXwHjLVwElaNENOINbYtDb7ZPtbzn4Xh3%2FiOiB9NTE5wkiQAFMHHjhP1SP6Chh%2FsaVIbAanSx3w61DC7xBdYrmkmVpXZq8FT9mlzDaxJmTq1jYg3QZUIPLLc1%2FiawgFdIDv6xNKRI0kKk9uV31m1yPflM3fan1lJLK17Uw98YegZXmjqM1gEoPiJlkZg9BfQ8wwuG5SnUBFcDb4KDuNbV9KhcXkTACpMW%2BjBsd2U1AM5POXjCfKUA%2FaSN%2B6kvFWln%2F7iDx5%2FmoKOL4I5J4VH5Sa1HY4PmiFouZW8Tup8bylygZ%2FshcluhrtHPNcsiA51aOzSVFiYBeQb3zwn%2Fz9us6rDnJwLu2Bv5hbFjeRooxAlIDM5mqMo6Ld0F50Chk1HCT%2Fy9gLQv0sx%2BmHA8h4KiO0i8MGFiAz5qLQc1%2FA2nL1A0E3CQmqRfkKbqzMgTuHxNOSmGJVFR8yeMIWer74GOqUB7EzqKNRuyOFLAr1hbO0ZWLZ0lA3S8UYFrXg%2FvtNHpwmLeTpK8XjI52te7m%2FpvwWHPydl8KyXiTFYBHhdizJG2OeH9Bszk7OYd4Ocy3JLwihhSkzst%2FyUJFvSUPydzUPCqqLdKJexjZqAxTX7rQ%2BZSBcvI1QU1sP%2F5xKVC%2BPYZvnra94dAdygLpeOK9JICZ25fWcNQJ%2FHzcMcbHCWweGWv5OmIN8Q&X-Amz-Signature=630aba87310c111b6e5b8027e6ec9fa06531799d0f7864c9b373718b711f4b12&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
