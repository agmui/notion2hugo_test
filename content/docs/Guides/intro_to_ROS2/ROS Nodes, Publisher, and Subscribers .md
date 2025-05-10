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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMJYKTQN%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T032932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAQgsLIh1I%2FPqpzmRBe3BkumBg%2FM62L4%2BvVNcWmFrZjyAiEAyTti2juYGVxwkHG8c4W2CRbhDK%2B02r%2BF6M9JX68T6LAqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDv2nsShJ%2B575pb1mircA4wl%2BkN1q3T9rni5QPO497C%2Bj9Siz1IMma%2F814CsMT3GDdbiS5d6%2B7Gz8Kb5PDp76Olnq4%2FEWVsBw%2FsjufUVT0sMLQ947ffipg5jXisgpJa8cZ7py8fPcDu6VlR%2F%2BCRPMeCHi3D87YgUbnw%2B%2FvOhg1JoxriQGQlpZrbalya2w20KkIYdVtzKs%2BxgzAmL6kGfYHXYuz%2FLTrc6i2jrRaAjo1lnSohu9M7rPotXyMfmxogyU1tLBAcs8On8dnuZ9Y0tQlL7HxnZTqLfeMCcqahisJ7IBCrCNMerAvqDYEkSMP8Tt1xqY37pw1ZUGJOxczKtj2SGc0cFJ3mztI3aRBqVz4QcrjM8wYibUpiA%2BfOYQfCVtLCNMbhiaHdYv2GjFiPcKqHf5s%2BZ%2Bck2LIbU%2FJk0PNY26bFsInTJcEPmg24Lk2QmaWG11IkovROnM2dWpsJvxZ48LRtIUDZyCMLdJShntSVacmkvOJcQk0BUdFJg8YhbsiuPjHI2MPFhG3hGbmXWbeyE7ZLCiZgYaxzH2X97NCyn3Zd3hhDeibP05kq%2Bj0KEtZiWcwrItgY7qA8IOPsCUobiCIeCDLJiJGVV%2BYFk4q69MXEDIzdvnEnoQOcUEO5rHyVAX%2FshPTBSEo4PMJSG%2B8AGOqUBLK2sovwbj6fFXxupNV7WYFUhp%2FD1LqFhs4blKFbWhejdQhufFKvtpFs9k1zy5PvoHau%2Fuk2FwAdNNRH%2Br3hxv3XrnzOrmWpGVHLHmo9qqrXbQho7UCXio355DYuHlnv%2BR%2FAO51vau8jfFllFX%2F9xdKHKrZjKarTD0DnKmfTYEHkqrs0odHEFWYZUYKW%2BKO9R3T1%2FGppd%2BairB5GrX7ZyvBkRLehz&X-Amz-Signature=eca60e1a2266836777e16d0ffefac3b38e0bdc959936471d0ca71ed24d041152&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMJYKTQN%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T032932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAQgsLIh1I%2FPqpzmRBe3BkumBg%2FM62L4%2BvVNcWmFrZjyAiEAyTti2juYGVxwkHG8c4W2CRbhDK%2B02r%2BF6M9JX68T6LAqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDv2nsShJ%2B575pb1mircA4wl%2BkN1q3T9rni5QPO497C%2Bj9Siz1IMma%2F814CsMT3GDdbiS5d6%2B7Gz8Kb5PDp76Olnq4%2FEWVsBw%2FsjufUVT0sMLQ947ffipg5jXisgpJa8cZ7py8fPcDu6VlR%2F%2BCRPMeCHi3D87YgUbnw%2B%2FvOhg1JoxriQGQlpZrbalya2w20KkIYdVtzKs%2BxgzAmL6kGfYHXYuz%2FLTrc6i2jrRaAjo1lnSohu9M7rPotXyMfmxogyU1tLBAcs8On8dnuZ9Y0tQlL7HxnZTqLfeMCcqahisJ7IBCrCNMerAvqDYEkSMP8Tt1xqY37pw1ZUGJOxczKtj2SGc0cFJ3mztI3aRBqVz4QcrjM8wYibUpiA%2BfOYQfCVtLCNMbhiaHdYv2GjFiPcKqHf5s%2BZ%2Bck2LIbU%2FJk0PNY26bFsInTJcEPmg24Lk2QmaWG11IkovROnM2dWpsJvxZ48LRtIUDZyCMLdJShntSVacmkvOJcQk0BUdFJg8YhbsiuPjHI2MPFhG3hGbmXWbeyE7ZLCiZgYaxzH2X97NCyn3Zd3hhDeibP05kq%2Bj0KEtZiWcwrItgY7qA8IOPsCUobiCIeCDLJiJGVV%2BYFk4q69MXEDIzdvnEnoQOcUEO5rHyVAX%2FshPTBSEo4PMJSG%2B8AGOqUBLK2sovwbj6fFXxupNV7WYFUhp%2FD1LqFhs4blKFbWhejdQhufFKvtpFs9k1zy5PvoHau%2Fuk2FwAdNNRH%2Br3hxv3XrnzOrmWpGVHLHmo9qqrXbQho7UCXio355DYuHlnv%2BR%2FAO51vau8jfFllFX%2F9xdKHKrZjKarTD0DnKmfTYEHkqrs0odHEFWYZUYKW%2BKO9R3T1%2FGppd%2BairB5GrX7ZyvBkRLehz&X-Amz-Signature=c108df577f6155c4b81c38b1614716e4079a4669d85b0b6fc452c6028bc8554b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMJYKTQN%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T032932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAQgsLIh1I%2FPqpzmRBe3BkumBg%2FM62L4%2BvVNcWmFrZjyAiEAyTti2juYGVxwkHG8c4W2CRbhDK%2B02r%2BF6M9JX68T6LAqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDv2nsShJ%2B575pb1mircA4wl%2BkN1q3T9rni5QPO497C%2Bj9Siz1IMma%2F814CsMT3GDdbiS5d6%2B7Gz8Kb5PDp76Olnq4%2FEWVsBw%2FsjufUVT0sMLQ947ffipg5jXisgpJa8cZ7py8fPcDu6VlR%2F%2BCRPMeCHi3D87YgUbnw%2B%2FvOhg1JoxriQGQlpZrbalya2w20KkIYdVtzKs%2BxgzAmL6kGfYHXYuz%2FLTrc6i2jrRaAjo1lnSohu9M7rPotXyMfmxogyU1tLBAcs8On8dnuZ9Y0tQlL7HxnZTqLfeMCcqahisJ7IBCrCNMerAvqDYEkSMP8Tt1xqY37pw1ZUGJOxczKtj2SGc0cFJ3mztI3aRBqVz4QcrjM8wYibUpiA%2BfOYQfCVtLCNMbhiaHdYv2GjFiPcKqHf5s%2BZ%2Bck2LIbU%2FJk0PNY26bFsInTJcEPmg24Lk2QmaWG11IkovROnM2dWpsJvxZ48LRtIUDZyCMLdJShntSVacmkvOJcQk0BUdFJg8YhbsiuPjHI2MPFhG3hGbmXWbeyE7ZLCiZgYaxzH2X97NCyn3Zd3hhDeibP05kq%2Bj0KEtZiWcwrItgY7qA8IOPsCUobiCIeCDLJiJGVV%2BYFk4q69MXEDIzdvnEnoQOcUEO5rHyVAX%2FshPTBSEo4PMJSG%2B8AGOqUBLK2sovwbj6fFXxupNV7WYFUhp%2FD1LqFhs4blKFbWhejdQhufFKvtpFs9k1zy5PvoHau%2Fuk2FwAdNNRH%2Br3hxv3XrnzOrmWpGVHLHmo9qqrXbQho7UCXio355DYuHlnv%2BR%2FAO51vau8jfFllFX%2F9xdKHKrZjKarTD0DnKmfTYEHkqrs0odHEFWYZUYKW%2BKO9R3T1%2FGppd%2BairB5GrX7ZyvBkRLehz&X-Amz-Signature=ee2e80194323435ae6c2d099bcaa7606f71b4daf663e0f8b618f5a61354bf6ee&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMJYKTQN%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T032932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAQgsLIh1I%2FPqpzmRBe3BkumBg%2FM62L4%2BvVNcWmFrZjyAiEAyTti2juYGVxwkHG8c4W2CRbhDK%2B02r%2BF6M9JX68T6LAqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDv2nsShJ%2B575pb1mircA4wl%2BkN1q3T9rni5QPO497C%2Bj9Siz1IMma%2F814CsMT3GDdbiS5d6%2B7Gz8Kb5PDp76Olnq4%2FEWVsBw%2FsjufUVT0sMLQ947ffipg5jXisgpJa8cZ7py8fPcDu6VlR%2F%2BCRPMeCHi3D87YgUbnw%2B%2FvOhg1JoxriQGQlpZrbalya2w20KkIYdVtzKs%2BxgzAmL6kGfYHXYuz%2FLTrc6i2jrRaAjo1lnSohu9M7rPotXyMfmxogyU1tLBAcs8On8dnuZ9Y0tQlL7HxnZTqLfeMCcqahisJ7IBCrCNMerAvqDYEkSMP8Tt1xqY37pw1ZUGJOxczKtj2SGc0cFJ3mztI3aRBqVz4QcrjM8wYibUpiA%2BfOYQfCVtLCNMbhiaHdYv2GjFiPcKqHf5s%2BZ%2Bck2LIbU%2FJk0PNY26bFsInTJcEPmg24Lk2QmaWG11IkovROnM2dWpsJvxZ48LRtIUDZyCMLdJShntSVacmkvOJcQk0BUdFJg8YhbsiuPjHI2MPFhG3hGbmXWbeyE7ZLCiZgYaxzH2X97NCyn3Zd3hhDeibP05kq%2Bj0KEtZiWcwrItgY7qA8IOPsCUobiCIeCDLJiJGVV%2BYFk4q69MXEDIzdvnEnoQOcUEO5rHyVAX%2FshPTBSEo4PMJSG%2B8AGOqUBLK2sovwbj6fFXxupNV7WYFUhp%2FD1LqFhs4blKFbWhejdQhufFKvtpFs9k1zy5PvoHau%2Fuk2FwAdNNRH%2Br3hxv3XrnzOrmWpGVHLHmo9qqrXbQho7UCXio355DYuHlnv%2BR%2FAO51vau8jfFllFX%2F9xdKHKrZjKarTD0DnKmfTYEHkqrs0odHEFWYZUYKW%2BKO9R3T1%2FGppd%2BairB5GrX7ZyvBkRLehz&X-Amz-Signature=38272f8decadb1c449945506cbd0c7a4e0db58f154c10fc7a65162c169c92696&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMJYKTQN%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T032932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAQgsLIh1I%2FPqpzmRBe3BkumBg%2FM62L4%2BvVNcWmFrZjyAiEAyTti2juYGVxwkHG8c4W2CRbhDK%2B02r%2BF6M9JX68T6LAqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDv2nsShJ%2B575pb1mircA4wl%2BkN1q3T9rni5QPO497C%2Bj9Siz1IMma%2F814CsMT3GDdbiS5d6%2B7Gz8Kb5PDp76Olnq4%2FEWVsBw%2FsjufUVT0sMLQ947ffipg5jXisgpJa8cZ7py8fPcDu6VlR%2F%2BCRPMeCHi3D87YgUbnw%2B%2FvOhg1JoxriQGQlpZrbalya2w20KkIYdVtzKs%2BxgzAmL6kGfYHXYuz%2FLTrc6i2jrRaAjo1lnSohu9M7rPotXyMfmxogyU1tLBAcs8On8dnuZ9Y0tQlL7HxnZTqLfeMCcqahisJ7IBCrCNMerAvqDYEkSMP8Tt1xqY37pw1ZUGJOxczKtj2SGc0cFJ3mztI3aRBqVz4QcrjM8wYibUpiA%2BfOYQfCVtLCNMbhiaHdYv2GjFiPcKqHf5s%2BZ%2Bck2LIbU%2FJk0PNY26bFsInTJcEPmg24Lk2QmaWG11IkovROnM2dWpsJvxZ48LRtIUDZyCMLdJShntSVacmkvOJcQk0BUdFJg8YhbsiuPjHI2MPFhG3hGbmXWbeyE7ZLCiZgYaxzH2X97NCyn3Zd3hhDeibP05kq%2Bj0KEtZiWcwrItgY7qA8IOPsCUobiCIeCDLJiJGVV%2BYFk4q69MXEDIzdvnEnoQOcUEO5rHyVAX%2FshPTBSEo4PMJSG%2B8AGOqUBLK2sovwbj6fFXxupNV7WYFUhp%2FD1LqFhs4blKFbWhejdQhufFKvtpFs9k1zy5PvoHau%2Fuk2FwAdNNRH%2Br3hxv3XrnzOrmWpGVHLHmo9qqrXbQho7UCXio355DYuHlnv%2BR%2FAO51vau8jfFllFX%2F9xdKHKrZjKarTD0DnKmfTYEHkqrs0odHEFWYZUYKW%2BKO9R3T1%2FGppd%2BairB5GrX7ZyvBkRLehz&X-Amz-Signature=3a8324c39e5e029b67e896ccd8feefa8c2844a4177706dd24c0c52714e9827e9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMJYKTQN%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T032932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAQgsLIh1I%2FPqpzmRBe3BkumBg%2FM62L4%2BvVNcWmFrZjyAiEAyTti2juYGVxwkHG8c4W2CRbhDK%2B02r%2BF6M9JX68T6LAqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDv2nsShJ%2B575pb1mircA4wl%2BkN1q3T9rni5QPO497C%2Bj9Siz1IMma%2F814CsMT3GDdbiS5d6%2B7Gz8Kb5PDp76Olnq4%2FEWVsBw%2FsjufUVT0sMLQ947ffipg5jXisgpJa8cZ7py8fPcDu6VlR%2F%2BCRPMeCHi3D87YgUbnw%2B%2FvOhg1JoxriQGQlpZrbalya2w20KkIYdVtzKs%2BxgzAmL6kGfYHXYuz%2FLTrc6i2jrRaAjo1lnSohu9M7rPotXyMfmxogyU1tLBAcs8On8dnuZ9Y0tQlL7HxnZTqLfeMCcqahisJ7IBCrCNMerAvqDYEkSMP8Tt1xqY37pw1ZUGJOxczKtj2SGc0cFJ3mztI3aRBqVz4QcrjM8wYibUpiA%2BfOYQfCVtLCNMbhiaHdYv2GjFiPcKqHf5s%2BZ%2Bck2LIbU%2FJk0PNY26bFsInTJcEPmg24Lk2QmaWG11IkovROnM2dWpsJvxZ48LRtIUDZyCMLdJShntSVacmkvOJcQk0BUdFJg8YhbsiuPjHI2MPFhG3hGbmXWbeyE7ZLCiZgYaxzH2X97NCyn3Zd3hhDeibP05kq%2Bj0KEtZiWcwrItgY7qA8IOPsCUobiCIeCDLJiJGVV%2BYFk4q69MXEDIzdvnEnoQOcUEO5rHyVAX%2FshPTBSEo4PMJSG%2B8AGOqUBLK2sovwbj6fFXxupNV7WYFUhp%2FD1LqFhs4blKFbWhejdQhufFKvtpFs9k1zy5PvoHau%2Fuk2FwAdNNRH%2Br3hxv3XrnzOrmWpGVHLHmo9qqrXbQho7UCXio355DYuHlnv%2BR%2FAO51vau8jfFllFX%2F9xdKHKrZjKarTD0DnKmfTYEHkqrs0odHEFWYZUYKW%2BKO9R3T1%2FGppd%2BairB5GrX7ZyvBkRLehz&X-Amz-Signature=3e08fe47094621de486ce01deafb8405ca6db4c200d59d7bc990ad26a96ddc42&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMJYKTQN%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T032932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAQgsLIh1I%2FPqpzmRBe3BkumBg%2FM62L4%2BvVNcWmFrZjyAiEAyTti2juYGVxwkHG8c4W2CRbhDK%2B02r%2BF6M9JX68T6LAqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDv2nsShJ%2B575pb1mircA4wl%2BkN1q3T9rni5QPO497C%2Bj9Siz1IMma%2F814CsMT3GDdbiS5d6%2B7Gz8Kb5PDp76Olnq4%2FEWVsBw%2FsjufUVT0sMLQ947ffipg5jXisgpJa8cZ7py8fPcDu6VlR%2F%2BCRPMeCHi3D87YgUbnw%2B%2FvOhg1JoxriQGQlpZrbalya2w20KkIYdVtzKs%2BxgzAmL6kGfYHXYuz%2FLTrc6i2jrRaAjo1lnSohu9M7rPotXyMfmxogyU1tLBAcs8On8dnuZ9Y0tQlL7HxnZTqLfeMCcqahisJ7IBCrCNMerAvqDYEkSMP8Tt1xqY37pw1ZUGJOxczKtj2SGc0cFJ3mztI3aRBqVz4QcrjM8wYibUpiA%2BfOYQfCVtLCNMbhiaHdYv2GjFiPcKqHf5s%2BZ%2Bck2LIbU%2FJk0PNY26bFsInTJcEPmg24Lk2QmaWG11IkovROnM2dWpsJvxZ48LRtIUDZyCMLdJShntSVacmkvOJcQk0BUdFJg8YhbsiuPjHI2MPFhG3hGbmXWbeyE7ZLCiZgYaxzH2X97NCyn3Zd3hhDeibP05kq%2Bj0KEtZiWcwrItgY7qA8IOPsCUobiCIeCDLJiJGVV%2BYFk4q69MXEDIzdvnEnoQOcUEO5rHyVAX%2FshPTBSEo4PMJSG%2B8AGOqUBLK2sovwbj6fFXxupNV7WYFUhp%2FD1LqFhs4blKFbWhejdQhufFKvtpFs9k1zy5PvoHau%2Fuk2FwAdNNRH%2Br3hxv3XrnzOrmWpGVHLHmo9qqrXbQho7UCXio355DYuHlnv%2BR%2FAO51vau8jfFllFX%2F9xdKHKrZjKarTD0DnKmfTYEHkqrs0odHEFWYZUYKW%2BKO9R3T1%2FGppd%2BairB5GrX7ZyvBkRLehz&X-Amz-Signature=01d8e7b82fe53327c9dd642a18ec5dc2116f195b24c7e2a5262c51eca8119e87&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMJYKTQN%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T032932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAQgsLIh1I%2FPqpzmRBe3BkumBg%2FM62L4%2BvVNcWmFrZjyAiEAyTti2juYGVxwkHG8c4W2CRbhDK%2B02r%2BF6M9JX68T6LAqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDv2nsShJ%2B575pb1mircA4wl%2BkN1q3T9rni5QPO497C%2Bj9Siz1IMma%2F814CsMT3GDdbiS5d6%2B7Gz8Kb5PDp76Olnq4%2FEWVsBw%2FsjufUVT0sMLQ947ffipg5jXisgpJa8cZ7py8fPcDu6VlR%2F%2BCRPMeCHi3D87YgUbnw%2B%2FvOhg1JoxriQGQlpZrbalya2w20KkIYdVtzKs%2BxgzAmL6kGfYHXYuz%2FLTrc6i2jrRaAjo1lnSohu9M7rPotXyMfmxogyU1tLBAcs8On8dnuZ9Y0tQlL7HxnZTqLfeMCcqahisJ7IBCrCNMerAvqDYEkSMP8Tt1xqY37pw1ZUGJOxczKtj2SGc0cFJ3mztI3aRBqVz4QcrjM8wYibUpiA%2BfOYQfCVtLCNMbhiaHdYv2GjFiPcKqHf5s%2BZ%2Bck2LIbU%2FJk0PNY26bFsInTJcEPmg24Lk2QmaWG11IkovROnM2dWpsJvxZ48LRtIUDZyCMLdJShntSVacmkvOJcQk0BUdFJg8YhbsiuPjHI2MPFhG3hGbmXWbeyE7ZLCiZgYaxzH2X97NCyn3Zd3hhDeibP05kq%2Bj0KEtZiWcwrItgY7qA8IOPsCUobiCIeCDLJiJGVV%2BYFk4q69MXEDIzdvnEnoQOcUEO5rHyVAX%2FshPTBSEo4PMJSG%2B8AGOqUBLK2sovwbj6fFXxupNV7WYFUhp%2FD1LqFhs4blKFbWhejdQhufFKvtpFs9k1zy5PvoHau%2Fuk2FwAdNNRH%2Br3hxv3XrnzOrmWpGVHLHmo9qqrXbQho7UCXio355DYuHlnv%2BR%2FAO51vau8jfFllFX%2F9xdKHKrZjKarTD0DnKmfTYEHkqrs0odHEFWYZUYKW%2BKO9R3T1%2FGppd%2BairB5GrX7ZyvBkRLehz&X-Amz-Signature=6356328789919ac633a48f59243192db5508c1bac33d0b1d52b9684f26e47f27&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
