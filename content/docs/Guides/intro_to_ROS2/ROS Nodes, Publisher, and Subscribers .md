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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEX4VIFT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrm8GjauEBqFB%2FgXDRan7TdR2NX22624hxg3DkUmkkewIgAmd1J9T0ofgcCka7W1Wrwxj93BWA2qUtxUzTGNkwe7EqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOV2nqNoSz880NP6HCrcA1ob%2FRC3ijcUxkc7V5bS4khrthNnakksW8TS5008%2BerEKypibPq5tz9sZEBIpvlY7rH0UBmB7rxNj%2By%2F8ZaDVSpJIHWyIE%2F6ZpqZgWbUL72RHZZ1R6QFsA65LPlgCdgYTkqgfQFUYgvEvHWRSrNy%2F1FrxdlJ43k0b3emUdo%2BSyffrhcNNml4ten7jN4W8LJszLf6VC71cMnkDXBlxJu36tjdXhKV6wR%2F2oM8NMaQixOhgdYgU6%2FTJ1gCVJIeyP%2FMKw91YbmMVzE3iNwT%2FdwQ%2F94E6ltZ3QD7xg3OwMC2VZgh%2BKNofd6cyNItvCCY3muuPCoBtnokHQK884hb7O%2BLBgisJ3IMjjvtboWHAdKgp03YpLacKOVMt7U0yT4M%2B2vjWgkfYJsZ58y8EeBHvMXeiH%2FTjb7pW4Gkf4UDCWCOYIJuwBzJ1C%2FjFP8uQqG7pV3LEicmMd7kFFYE0F3ungJZiCLzctgiOBXPyS8VwXuUIfGASfOFpYc24LXEzwWrtaapPZOr%2FWksHNEoqr8UIBPG6tnYDC%2Bu%2FoFBObfe51CNEznpuXIpxWjZP7Dg7gmK4lyfYsk3tZiCpSS7Hr9wqEE9I1L14n%2BPlBV463Bm629t1fLfQaXoeoQd%2F4y96LeYMP3prcQGOqUB6afPX8z5frnseUNsQdX8NKzhuPIBV%2B1frjm54c2Fu3PS6yGW%2BC6IPBjmC89FPJnh0fftOtiP%2BZwDf9GS1aFWQXJQyKsS0EtPqZU3EkHRvLxEYKHr8swqUkDbe1NzpEIiAG9587EGOght2nuBYcsIA%2FDxCFJIZFzhKj8VGOxbmGfkJ1DM7hTEDY7F5OpWHhnKa8xZB9ULEYc8vCeeI97rhvf%2BpFla&X-Amz-Signature=343b98a5fd635848ace55b38427ec7233006b6a92364dc079372508b26ff322e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEX4VIFT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrm8GjauEBqFB%2FgXDRan7TdR2NX22624hxg3DkUmkkewIgAmd1J9T0ofgcCka7W1Wrwxj93BWA2qUtxUzTGNkwe7EqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOV2nqNoSz880NP6HCrcA1ob%2FRC3ijcUxkc7V5bS4khrthNnakksW8TS5008%2BerEKypibPq5tz9sZEBIpvlY7rH0UBmB7rxNj%2By%2F8ZaDVSpJIHWyIE%2F6ZpqZgWbUL72RHZZ1R6QFsA65LPlgCdgYTkqgfQFUYgvEvHWRSrNy%2F1FrxdlJ43k0b3emUdo%2BSyffrhcNNml4ten7jN4W8LJszLf6VC71cMnkDXBlxJu36tjdXhKV6wR%2F2oM8NMaQixOhgdYgU6%2FTJ1gCVJIeyP%2FMKw91YbmMVzE3iNwT%2FdwQ%2F94E6ltZ3QD7xg3OwMC2VZgh%2BKNofd6cyNItvCCY3muuPCoBtnokHQK884hb7O%2BLBgisJ3IMjjvtboWHAdKgp03YpLacKOVMt7U0yT4M%2B2vjWgkfYJsZ58y8EeBHvMXeiH%2FTjb7pW4Gkf4UDCWCOYIJuwBzJ1C%2FjFP8uQqG7pV3LEicmMd7kFFYE0F3ungJZiCLzctgiOBXPyS8VwXuUIfGASfOFpYc24LXEzwWrtaapPZOr%2FWksHNEoqr8UIBPG6tnYDC%2Bu%2FoFBObfe51CNEznpuXIpxWjZP7Dg7gmK4lyfYsk3tZiCpSS7Hr9wqEE9I1L14n%2BPlBV463Bm629t1fLfQaXoeoQd%2F4y96LeYMP3prcQGOqUB6afPX8z5frnseUNsQdX8NKzhuPIBV%2B1frjm54c2Fu3PS6yGW%2BC6IPBjmC89FPJnh0fftOtiP%2BZwDf9GS1aFWQXJQyKsS0EtPqZU3EkHRvLxEYKHr8swqUkDbe1NzpEIiAG9587EGOght2nuBYcsIA%2FDxCFJIZFzhKj8VGOxbmGfkJ1DM7hTEDY7F5OpWHhnKa8xZB9ULEYc8vCeeI97rhvf%2BpFla&X-Amz-Signature=601b196aa2f7b5368ebba6c285e46e8f0bd0c0a666112570fff776e14e616ffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEX4VIFT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrm8GjauEBqFB%2FgXDRan7TdR2NX22624hxg3DkUmkkewIgAmd1J9T0ofgcCka7W1Wrwxj93BWA2qUtxUzTGNkwe7EqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOV2nqNoSz880NP6HCrcA1ob%2FRC3ijcUxkc7V5bS4khrthNnakksW8TS5008%2BerEKypibPq5tz9sZEBIpvlY7rH0UBmB7rxNj%2By%2F8ZaDVSpJIHWyIE%2F6ZpqZgWbUL72RHZZ1R6QFsA65LPlgCdgYTkqgfQFUYgvEvHWRSrNy%2F1FrxdlJ43k0b3emUdo%2BSyffrhcNNml4ten7jN4W8LJszLf6VC71cMnkDXBlxJu36tjdXhKV6wR%2F2oM8NMaQixOhgdYgU6%2FTJ1gCVJIeyP%2FMKw91YbmMVzE3iNwT%2FdwQ%2F94E6ltZ3QD7xg3OwMC2VZgh%2BKNofd6cyNItvCCY3muuPCoBtnokHQK884hb7O%2BLBgisJ3IMjjvtboWHAdKgp03YpLacKOVMt7U0yT4M%2B2vjWgkfYJsZ58y8EeBHvMXeiH%2FTjb7pW4Gkf4UDCWCOYIJuwBzJ1C%2FjFP8uQqG7pV3LEicmMd7kFFYE0F3ungJZiCLzctgiOBXPyS8VwXuUIfGASfOFpYc24LXEzwWrtaapPZOr%2FWksHNEoqr8UIBPG6tnYDC%2Bu%2FoFBObfe51CNEznpuXIpxWjZP7Dg7gmK4lyfYsk3tZiCpSS7Hr9wqEE9I1L14n%2BPlBV463Bm629t1fLfQaXoeoQd%2F4y96LeYMP3prcQGOqUB6afPX8z5frnseUNsQdX8NKzhuPIBV%2B1frjm54c2Fu3PS6yGW%2BC6IPBjmC89FPJnh0fftOtiP%2BZwDf9GS1aFWQXJQyKsS0EtPqZU3EkHRvLxEYKHr8swqUkDbe1NzpEIiAG9587EGOght2nuBYcsIA%2FDxCFJIZFzhKj8VGOxbmGfkJ1DM7hTEDY7F5OpWHhnKa8xZB9ULEYc8vCeeI97rhvf%2BpFla&X-Amz-Signature=ce09bd105cabb3cd37999d4e311e601f79d1c7e2bbb6bc4c2f794e5b20213a91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEX4VIFT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrm8GjauEBqFB%2FgXDRan7TdR2NX22624hxg3DkUmkkewIgAmd1J9T0ofgcCka7W1Wrwxj93BWA2qUtxUzTGNkwe7EqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOV2nqNoSz880NP6HCrcA1ob%2FRC3ijcUxkc7V5bS4khrthNnakksW8TS5008%2BerEKypibPq5tz9sZEBIpvlY7rH0UBmB7rxNj%2By%2F8ZaDVSpJIHWyIE%2F6ZpqZgWbUL72RHZZ1R6QFsA65LPlgCdgYTkqgfQFUYgvEvHWRSrNy%2F1FrxdlJ43k0b3emUdo%2BSyffrhcNNml4ten7jN4W8LJszLf6VC71cMnkDXBlxJu36tjdXhKV6wR%2F2oM8NMaQixOhgdYgU6%2FTJ1gCVJIeyP%2FMKw91YbmMVzE3iNwT%2FdwQ%2F94E6ltZ3QD7xg3OwMC2VZgh%2BKNofd6cyNItvCCY3muuPCoBtnokHQK884hb7O%2BLBgisJ3IMjjvtboWHAdKgp03YpLacKOVMt7U0yT4M%2B2vjWgkfYJsZ58y8EeBHvMXeiH%2FTjb7pW4Gkf4UDCWCOYIJuwBzJ1C%2FjFP8uQqG7pV3LEicmMd7kFFYE0F3ungJZiCLzctgiOBXPyS8VwXuUIfGASfOFpYc24LXEzwWrtaapPZOr%2FWksHNEoqr8UIBPG6tnYDC%2Bu%2FoFBObfe51CNEznpuXIpxWjZP7Dg7gmK4lyfYsk3tZiCpSS7Hr9wqEE9I1L14n%2BPlBV463Bm629t1fLfQaXoeoQd%2F4y96LeYMP3prcQGOqUB6afPX8z5frnseUNsQdX8NKzhuPIBV%2B1frjm54c2Fu3PS6yGW%2BC6IPBjmC89FPJnh0fftOtiP%2BZwDf9GS1aFWQXJQyKsS0EtPqZU3EkHRvLxEYKHr8swqUkDbe1NzpEIiAG9587EGOght2nuBYcsIA%2FDxCFJIZFzhKj8VGOxbmGfkJ1DM7hTEDY7F5OpWHhnKa8xZB9ULEYc8vCeeI97rhvf%2BpFla&X-Amz-Signature=77e91191d6897c3548b37d756e1d1327b5d054f29388ce72e3065b72f995782e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEX4VIFT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrm8GjauEBqFB%2FgXDRan7TdR2NX22624hxg3DkUmkkewIgAmd1J9T0ofgcCka7W1Wrwxj93BWA2qUtxUzTGNkwe7EqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOV2nqNoSz880NP6HCrcA1ob%2FRC3ijcUxkc7V5bS4khrthNnakksW8TS5008%2BerEKypibPq5tz9sZEBIpvlY7rH0UBmB7rxNj%2By%2F8ZaDVSpJIHWyIE%2F6ZpqZgWbUL72RHZZ1R6QFsA65LPlgCdgYTkqgfQFUYgvEvHWRSrNy%2F1FrxdlJ43k0b3emUdo%2BSyffrhcNNml4ten7jN4W8LJszLf6VC71cMnkDXBlxJu36tjdXhKV6wR%2F2oM8NMaQixOhgdYgU6%2FTJ1gCVJIeyP%2FMKw91YbmMVzE3iNwT%2FdwQ%2F94E6ltZ3QD7xg3OwMC2VZgh%2BKNofd6cyNItvCCY3muuPCoBtnokHQK884hb7O%2BLBgisJ3IMjjvtboWHAdKgp03YpLacKOVMt7U0yT4M%2B2vjWgkfYJsZ58y8EeBHvMXeiH%2FTjb7pW4Gkf4UDCWCOYIJuwBzJ1C%2FjFP8uQqG7pV3LEicmMd7kFFYE0F3ungJZiCLzctgiOBXPyS8VwXuUIfGASfOFpYc24LXEzwWrtaapPZOr%2FWksHNEoqr8UIBPG6tnYDC%2Bu%2FoFBObfe51CNEznpuXIpxWjZP7Dg7gmK4lyfYsk3tZiCpSS7Hr9wqEE9I1L14n%2BPlBV463Bm629t1fLfQaXoeoQd%2F4y96LeYMP3prcQGOqUB6afPX8z5frnseUNsQdX8NKzhuPIBV%2B1frjm54c2Fu3PS6yGW%2BC6IPBjmC89FPJnh0fftOtiP%2BZwDf9GS1aFWQXJQyKsS0EtPqZU3EkHRvLxEYKHr8swqUkDbe1NzpEIiAG9587EGOght2nuBYcsIA%2FDxCFJIZFzhKj8VGOxbmGfkJ1DM7hTEDY7F5OpWHhnKa8xZB9ULEYc8vCeeI97rhvf%2BpFla&X-Amz-Signature=7eaf16ee29834b74b8f3444f1f586c5ccd30cc0e5cb833a50ca71c0c9a8b76bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEX4VIFT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrm8GjauEBqFB%2FgXDRan7TdR2NX22624hxg3DkUmkkewIgAmd1J9T0ofgcCka7W1Wrwxj93BWA2qUtxUzTGNkwe7EqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOV2nqNoSz880NP6HCrcA1ob%2FRC3ijcUxkc7V5bS4khrthNnakksW8TS5008%2BerEKypibPq5tz9sZEBIpvlY7rH0UBmB7rxNj%2By%2F8ZaDVSpJIHWyIE%2F6ZpqZgWbUL72RHZZ1R6QFsA65LPlgCdgYTkqgfQFUYgvEvHWRSrNy%2F1FrxdlJ43k0b3emUdo%2BSyffrhcNNml4ten7jN4W8LJszLf6VC71cMnkDXBlxJu36tjdXhKV6wR%2F2oM8NMaQixOhgdYgU6%2FTJ1gCVJIeyP%2FMKw91YbmMVzE3iNwT%2FdwQ%2F94E6ltZ3QD7xg3OwMC2VZgh%2BKNofd6cyNItvCCY3muuPCoBtnokHQK884hb7O%2BLBgisJ3IMjjvtboWHAdKgp03YpLacKOVMt7U0yT4M%2B2vjWgkfYJsZ58y8EeBHvMXeiH%2FTjb7pW4Gkf4UDCWCOYIJuwBzJ1C%2FjFP8uQqG7pV3LEicmMd7kFFYE0F3ungJZiCLzctgiOBXPyS8VwXuUIfGASfOFpYc24LXEzwWrtaapPZOr%2FWksHNEoqr8UIBPG6tnYDC%2Bu%2FoFBObfe51CNEznpuXIpxWjZP7Dg7gmK4lyfYsk3tZiCpSS7Hr9wqEE9I1L14n%2BPlBV463Bm629t1fLfQaXoeoQd%2F4y96LeYMP3prcQGOqUB6afPX8z5frnseUNsQdX8NKzhuPIBV%2B1frjm54c2Fu3PS6yGW%2BC6IPBjmC89FPJnh0fftOtiP%2BZwDf9GS1aFWQXJQyKsS0EtPqZU3EkHRvLxEYKHr8swqUkDbe1NzpEIiAG9587EGOght2nuBYcsIA%2FDxCFJIZFzhKj8VGOxbmGfkJ1DM7hTEDY7F5OpWHhnKa8xZB9ULEYc8vCeeI97rhvf%2BpFla&X-Amz-Signature=32c521fadd1da26c884ec9bb90aac414b6bbd7cddd2e3a55badc680a287fd30c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEX4VIFT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrm8GjauEBqFB%2FgXDRan7TdR2NX22624hxg3DkUmkkewIgAmd1J9T0ofgcCka7W1Wrwxj93BWA2qUtxUzTGNkwe7EqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOV2nqNoSz880NP6HCrcA1ob%2FRC3ijcUxkc7V5bS4khrthNnakksW8TS5008%2BerEKypibPq5tz9sZEBIpvlY7rH0UBmB7rxNj%2By%2F8ZaDVSpJIHWyIE%2F6ZpqZgWbUL72RHZZ1R6QFsA65LPlgCdgYTkqgfQFUYgvEvHWRSrNy%2F1FrxdlJ43k0b3emUdo%2BSyffrhcNNml4ten7jN4W8LJszLf6VC71cMnkDXBlxJu36tjdXhKV6wR%2F2oM8NMaQixOhgdYgU6%2FTJ1gCVJIeyP%2FMKw91YbmMVzE3iNwT%2FdwQ%2F94E6ltZ3QD7xg3OwMC2VZgh%2BKNofd6cyNItvCCY3muuPCoBtnokHQK884hb7O%2BLBgisJ3IMjjvtboWHAdKgp03YpLacKOVMt7U0yT4M%2B2vjWgkfYJsZ58y8EeBHvMXeiH%2FTjb7pW4Gkf4UDCWCOYIJuwBzJ1C%2FjFP8uQqG7pV3LEicmMd7kFFYE0F3ungJZiCLzctgiOBXPyS8VwXuUIfGASfOFpYc24LXEzwWrtaapPZOr%2FWksHNEoqr8UIBPG6tnYDC%2Bu%2FoFBObfe51CNEznpuXIpxWjZP7Dg7gmK4lyfYsk3tZiCpSS7Hr9wqEE9I1L14n%2BPlBV463Bm629t1fLfQaXoeoQd%2F4y96LeYMP3prcQGOqUB6afPX8z5frnseUNsQdX8NKzhuPIBV%2B1frjm54c2Fu3PS6yGW%2BC6IPBjmC89FPJnh0fftOtiP%2BZwDf9GS1aFWQXJQyKsS0EtPqZU3EkHRvLxEYKHr8swqUkDbe1NzpEIiAG9587EGOght2nuBYcsIA%2FDxCFJIZFzhKj8VGOxbmGfkJ1DM7hTEDY7F5OpWHhnKa8xZB9ULEYc8vCeeI97rhvf%2BpFla&X-Amz-Signature=d871c6b82ad04bb36b9918b0c9b77b6b6f0241929764010b10bede930bb4b6bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEX4VIFT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrm8GjauEBqFB%2FgXDRan7TdR2NX22624hxg3DkUmkkewIgAmd1J9T0ofgcCka7W1Wrwxj93BWA2qUtxUzTGNkwe7EqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOV2nqNoSz880NP6HCrcA1ob%2FRC3ijcUxkc7V5bS4khrthNnakksW8TS5008%2BerEKypibPq5tz9sZEBIpvlY7rH0UBmB7rxNj%2By%2F8ZaDVSpJIHWyIE%2F6ZpqZgWbUL72RHZZ1R6QFsA65LPlgCdgYTkqgfQFUYgvEvHWRSrNy%2F1FrxdlJ43k0b3emUdo%2BSyffrhcNNml4ten7jN4W8LJszLf6VC71cMnkDXBlxJu36tjdXhKV6wR%2F2oM8NMaQixOhgdYgU6%2FTJ1gCVJIeyP%2FMKw91YbmMVzE3iNwT%2FdwQ%2F94E6ltZ3QD7xg3OwMC2VZgh%2BKNofd6cyNItvCCY3muuPCoBtnokHQK884hb7O%2BLBgisJ3IMjjvtboWHAdKgp03YpLacKOVMt7U0yT4M%2B2vjWgkfYJsZ58y8EeBHvMXeiH%2FTjb7pW4Gkf4UDCWCOYIJuwBzJ1C%2FjFP8uQqG7pV3LEicmMd7kFFYE0F3ungJZiCLzctgiOBXPyS8VwXuUIfGASfOFpYc24LXEzwWrtaapPZOr%2FWksHNEoqr8UIBPG6tnYDC%2Bu%2FoFBObfe51CNEznpuXIpxWjZP7Dg7gmK4lyfYsk3tZiCpSS7Hr9wqEE9I1L14n%2BPlBV463Bm629t1fLfQaXoeoQd%2F4y96LeYMP3prcQGOqUB6afPX8z5frnseUNsQdX8NKzhuPIBV%2B1frjm54c2Fu3PS6yGW%2BC6IPBjmC89FPJnh0fftOtiP%2BZwDf9GS1aFWQXJQyKsS0EtPqZU3EkHRvLxEYKHr8swqUkDbe1NzpEIiAG9587EGOght2nuBYcsIA%2FDxCFJIZFzhKj8VGOxbmGfkJ1DM7hTEDY7F5OpWHhnKa8xZB9ULEYc8vCeeI97rhvf%2BpFla&X-Amz-Signature=dcdfe0534545a08f9df1de07dd605df240799a39893425934bc0da2e0caf68b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
