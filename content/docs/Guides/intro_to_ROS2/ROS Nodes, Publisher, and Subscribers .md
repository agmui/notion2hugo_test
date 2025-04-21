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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TT2WZ34%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCICWwvpUbgrfeo8fQyVFo%2FyfoQzmiRPJ89EiiSyqG7ajBAiEAgPCNlYEb6R5pi9aFDy5f6lord7Pv4ueXTDxEDiE02fgqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpizd%2FMysugjMFDAircA9xIbksVgZ2y%2Bp28e%2F7demfzJ4MdBcykQHg126JddJJCQeYd6K%2BU6E6Gzk5fRNqF9yL0amPmYVoWY8vpayYgFL5W8CIea9%2FLnjm3C7oKJjW3MpCkQGJzjmv3zQumQDOhCeAwayGiyoGkHX6lPBJilUf%2FCbRVbakR0g1SEZdy6DGGeAzvPFnTkNdS8vcgufw6stGsclD5ms9lrjQDtY8PsWpcZJ1n%2FsoA3PaIIhL%2Bt5968Fz%2Fai7oFuUd%2FGKuEqXXJgYoShDHWNZBLqstRFD9HsV1SNacPOBXUCDDaJv%2BUY%2BW7EQ5OvastSMG3bQl%2Bbv%2BSYsU00tNchTpe2QiIuMRazv10Mz9VXVt7RiYHpo%2FYcDA%2Fr%2FGz7eVc5rABHE4AL2gL8lgVQMTDlnLvSCEEENcLHJOdLIT7g0VTLiAsXDOGFrrTfJdesPPpeaOVab9NR%2BtTGK5gGS4dSkYYQ1eRNVuy6iq%2BIxvME2inNchUmFPJzRpAtIJnb7W%2FLayfj82PsZdiWGVAZXYk2J7yycI8z%2BI0WIL5ItwX3GAxxVTPtIk8nFT5o88JCG8GaK2CpiOW2axG4an5dYWRMCVPTO5xAE1I4ZZfl8Mzyk2b58znhJhLzWIyniFWFKfJOscYX4SMIbumsAGOqUB9wfQnhzfr%2BZ5NYl4hHOhCDvJsWv6dlnA%2BR4ASQEfAtbYZUZkFMaf3ost3kobk8Z7w%2BxOZey5CcgYu5cXBUwQelhg0%2FheCNjjg%2F5Ws9Kig5WL7BhUJ6juOU%2FAayZFXuh8T22JJP2elRD3rRMg7ROkjvGbZU74qebPqdQNB%2FQZMGEpbd6tzw2Qrwjh4TS9%2ByQXa%2F3gIeHh8F2%2BFgG%2BKuzf388qpGU9&X-Amz-Signature=a7d276ac0d767d2ed59875050f551653dd3fa6dc6af797e0a8f04d0f5024f263&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TT2WZ34%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCICWwvpUbgrfeo8fQyVFo%2FyfoQzmiRPJ89EiiSyqG7ajBAiEAgPCNlYEb6R5pi9aFDy5f6lord7Pv4ueXTDxEDiE02fgqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpizd%2FMysugjMFDAircA9xIbksVgZ2y%2Bp28e%2F7demfzJ4MdBcykQHg126JddJJCQeYd6K%2BU6E6Gzk5fRNqF9yL0amPmYVoWY8vpayYgFL5W8CIea9%2FLnjm3C7oKJjW3MpCkQGJzjmv3zQumQDOhCeAwayGiyoGkHX6lPBJilUf%2FCbRVbakR0g1SEZdy6DGGeAzvPFnTkNdS8vcgufw6stGsclD5ms9lrjQDtY8PsWpcZJ1n%2FsoA3PaIIhL%2Bt5968Fz%2Fai7oFuUd%2FGKuEqXXJgYoShDHWNZBLqstRFD9HsV1SNacPOBXUCDDaJv%2BUY%2BW7EQ5OvastSMG3bQl%2Bbv%2BSYsU00tNchTpe2QiIuMRazv10Mz9VXVt7RiYHpo%2FYcDA%2Fr%2FGz7eVc5rABHE4AL2gL8lgVQMTDlnLvSCEEENcLHJOdLIT7g0VTLiAsXDOGFrrTfJdesPPpeaOVab9NR%2BtTGK5gGS4dSkYYQ1eRNVuy6iq%2BIxvME2inNchUmFPJzRpAtIJnb7W%2FLayfj82PsZdiWGVAZXYk2J7yycI8z%2BI0WIL5ItwX3GAxxVTPtIk8nFT5o88JCG8GaK2CpiOW2axG4an5dYWRMCVPTO5xAE1I4ZZfl8Mzyk2b58znhJhLzWIyniFWFKfJOscYX4SMIbumsAGOqUB9wfQnhzfr%2BZ5NYl4hHOhCDvJsWv6dlnA%2BR4ASQEfAtbYZUZkFMaf3ost3kobk8Z7w%2BxOZey5CcgYu5cXBUwQelhg0%2FheCNjjg%2F5Ws9Kig5WL7BhUJ6juOU%2FAayZFXuh8T22JJP2elRD3rRMg7ROkjvGbZU74qebPqdQNB%2FQZMGEpbd6tzw2Qrwjh4TS9%2ByQXa%2F3gIeHh8F2%2BFgG%2BKuzf388qpGU9&X-Amz-Signature=98962f13ba5599af55f459e7d4b3ff35e06b1fd8e78215fd1a631c260ecfa7d4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TT2WZ34%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCICWwvpUbgrfeo8fQyVFo%2FyfoQzmiRPJ89EiiSyqG7ajBAiEAgPCNlYEb6R5pi9aFDy5f6lord7Pv4ueXTDxEDiE02fgqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpizd%2FMysugjMFDAircA9xIbksVgZ2y%2Bp28e%2F7demfzJ4MdBcykQHg126JddJJCQeYd6K%2BU6E6Gzk5fRNqF9yL0amPmYVoWY8vpayYgFL5W8CIea9%2FLnjm3C7oKJjW3MpCkQGJzjmv3zQumQDOhCeAwayGiyoGkHX6lPBJilUf%2FCbRVbakR0g1SEZdy6DGGeAzvPFnTkNdS8vcgufw6stGsclD5ms9lrjQDtY8PsWpcZJ1n%2FsoA3PaIIhL%2Bt5968Fz%2Fai7oFuUd%2FGKuEqXXJgYoShDHWNZBLqstRFD9HsV1SNacPOBXUCDDaJv%2BUY%2BW7EQ5OvastSMG3bQl%2Bbv%2BSYsU00tNchTpe2QiIuMRazv10Mz9VXVt7RiYHpo%2FYcDA%2Fr%2FGz7eVc5rABHE4AL2gL8lgVQMTDlnLvSCEEENcLHJOdLIT7g0VTLiAsXDOGFrrTfJdesPPpeaOVab9NR%2BtTGK5gGS4dSkYYQ1eRNVuy6iq%2BIxvME2inNchUmFPJzRpAtIJnb7W%2FLayfj82PsZdiWGVAZXYk2J7yycI8z%2BI0WIL5ItwX3GAxxVTPtIk8nFT5o88JCG8GaK2CpiOW2axG4an5dYWRMCVPTO5xAE1I4ZZfl8Mzyk2b58znhJhLzWIyniFWFKfJOscYX4SMIbumsAGOqUB9wfQnhzfr%2BZ5NYl4hHOhCDvJsWv6dlnA%2BR4ASQEfAtbYZUZkFMaf3ost3kobk8Z7w%2BxOZey5CcgYu5cXBUwQelhg0%2FheCNjjg%2F5Ws9Kig5WL7BhUJ6juOU%2FAayZFXuh8T22JJP2elRD3rRMg7ROkjvGbZU74qebPqdQNB%2FQZMGEpbd6tzw2Qrwjh4TS9%2ByQXa%2F3gIeHh8F2%2BFgG%2BKuzf388qpGU9&X-Amz-Signature=7a8d252fd76b9d7690c2e444ccba5db4a8c280ee5261c08c1672c5170cf64ac6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TT2WZ34%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCICWwvpUbgrfeo8fQyVFo%2FyfoQzmiRPJ89EiiSyqG7ajBAiEAgPCNlYEb6R5pi9aFDy5f6lord7Pv4ueXTDxEDiE02fgqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpizd%2FMysugjMFDAircA9xIbksVgZ2y%2Bp28e%2F7demfzJ4MdBcykQHg126JddJJCQeYd6K%2BU6E6Gzk5fRNqF9yL0amPmYVoWY8vpayYgFL5W8CIea9%2FLnjm3C7oKJjW3MpCkQGJzjmv3zQumQDOhCeAwayGiyoGkHX6lPBJilUf%2FCbRVbakR0g1SEZdy6DGGeAzvPFnTkNdS8vcgufw6stGsclD5ms9lrjQDtY8PsWpcZJ1n%2FsoA3PaIIhL%2Bt5968Fz%2Fai7oFuUd%2FGKuEqXXJgYoShDHWNZBLqstRFD9HsV1SNacPOBXUCDDaJv%2BUY%2BW7EQ5OvastSMG3bQl%2Bbv%2BSYsU00tNchTpe2QiIuMRazv10Mz9VXVt7RiYHpo%2FYcDA%2Fr%2FGz7eVc5rABHE4AL2gL8lgVQMTDlnLvSCEEENcLHJOdLIT7g0VTLiAsXDOGFrrTfJdesPPpeaOVab9NR%2BtTGK5gGS4dSkYYQ1eRNVuy6iq%2BIxvME2inNchUmFPJzRpAtIJnb7W%2FLayfj82PsZdiWGVAZXYk2J7yycI8z%2BI0WIL5ItwX3GAxxVTPtIk8nFT5o88JCG8GaK2CpiOW2axG4an5dYWRMCVPTO5xAE1I4ZZfl8Mzyk2b58znhJhLzWIyniFWFKfJOscYX4SMIbumsAGOqUB9wfQnhzfr%2BZ5NYl4hHOhCDvJsWv6dlnA%2BR4ASQEfAtbYZUZkFMaf3ost3kobk8Z7w%2BxOZey5CcgYu5cXBUwQelhg0%2FheCNjjg%2F5Ws9Kig5WL7BhUJ6juOU%2FAayZFXuh8T22JJP2elRD3rRMg7ROkjvGbZU74qebPqdQNB%2FQZMGEpbd6tzw2Qrwjh4TS9%2ByQXa%2F3gIeHh8F2%2BFgG%2BKuzf388qpGU9&X-Amz-Signature=6533463508d066fed6be60dd00d419bee786ce9d053fa451557d4c6276389186&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TT2WZ34%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCICWwvpUbgrfeo8fQyVFo%2FyfoQzmiRPJ89EiiSyqG7ajBAiEAgPCNlYEb6R5pi9aFDy5f6lord7Pv4ueXTDxEDiE02fgqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpizd%2FMysugjMFDAircA9xIbksVgZ2y%2Bp28e%2F7demfzJ4MdBcykQHg126JddJJCQeYd6K%2BU6E6Gzk5fRNqF9yL0amPmYVoWY8vpayYgFL5W8CIea9%2FLnjm3C7oKJjW3MpCkQGJzjmv3zQumQDOhCeAwayGiyoGkHX6lPBJilUf%2FCbRVbakR0g1SEZdy6DGGeAzvPFnTkNdS8vcgufw6stGsclD5ms9lrjQDtY8PsWpcZJ1n%2FsoA3PaIIhL%2Bt5968Fz%2Fai7oFuUd%2FGKuEqXXJgYoShDHWNZBLqstRFD9HsV1SNacPOBXUCDDaJv%2BUY%2BW7EQ5OvastSMG3bQl%2Bbv%2BSYsU00tNchTpe2QiIuMRazv10Mz9VXVt7RiYHpo%2FYcDA%2Fr%2FGz7eVc5rABHE4AL2gL8lgVQMTDlnLvSCEEENcLHJOdLIT7g0VTLiAsXDOGFrrTfJdesPPpeaOVab9NR%2BtTGK5gGS4dSkYYQ1eRNVuy6iq%2BIxvME2inNchUmFPJzRpAtIJnb7W%2FLayfj82PsZdiWGVAZXYk2J7yycI8z%2BI0WIL5ItwX3GAxxVTPtIk8nFT5o88JCG8GaK2CpiOW2axG4an5dYWRMCVPTO5xAE1I4ZZfl8Mzyk2b58znhJhLzWIyniFWFKfJOscYX4SMIbumsAGOqUB9wfQnhzfr%2BZ5NYl4hHOhCDvJsWv6dlnA%2BR4ASQEfAtbYZUZkFMaf3ost3kobk8Z7w%2BxOZey5CcgYu5cXBUwQelhg0%2FheCNjjg%2F5Ws9Kig5WL7BhUJ6juOU%2FAayZFXuh8T22JJP2elRD3rRMg7ROkjvGbZU74qebPqdQNB%2FQZMGEpbd6tzw2Qrwjh4TS9%2ByQXa%2F3gIeHh8F2%2BFgG%2BKuzf388qpGU9&X-Amz-Signature=b9fd114116347d56d93ac5ddac5f9e12d83105cb9e1639a67b87e3f71d6b1983&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TT2WZ34%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCICWwvpUbgrfeo8fQyVFo%2FyfoQzmiRPJ89EiiSyqG7ajBAiEAgPCNlYEb6R5pi9aFDy5f6lord7Pv4ueXTDxEDiE02fgqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpizd%2FMysugjMFDAircA9xIbksVgZ2y%2Bp28e%2F7demfzJ4MdBcykQHg126JddJJCQeYd6K%2BU6E6Gzk5fRNqF9yL0amPmYVoWY8vpayYgFL5W8CIea9%2FLnjm3C7oKJjW3MpCkQGJzjmv3zQumQDOhCeAwayGiyoGkHX6lPBJilUf%2FCbRVbakR0g1SEZdy6DGGeAzvPFnTkNdS8vcgufw6stGsclD5ms9lrjQDtY8PsWpcZJ1n%2FsoA3PaIIhL%2Bt5968Fz%2Fai7oFuUd%2FGKuEqXXJgYoShDHWNZBLqstRFD9HsV1SNacPOBXUCDDaJv%2BUY%2BW7EQ5OvastSMG3bQl%2Bbv%2BSYsU00tNchTpe2QiIuMRazv10Mz9VXVt7RiYHpo%2FYcDA%2Fr%2FGz7eVc5rABHE4AL2gL8lgVQMTDlnLvSCEEENcLHJOdLIT7g0VTLiAsXDOGFrrTfJdesPPpeaOVab9NR%2BtTGK5gGS4dSkYYQ1eRNVuy6iq%2BIxvME2inNchUmFPJzRpAtIJnb7W%2FLayfj82PsZdiWGVAZXYk2J7yycI8z%2BI0WIL5ItwX3GAxxVTPtIk8nFT5o88JCG8GaK2CpiOW2axG4an5dYWRMCVPTO5xAE1I4ZZfl8Mzyk2b58znhJhLzWIyniFWFKfJOscYX4SMIbumsAGOqUB9wfQnhzfr%2BZ5NYl4hHOhCDvJsWv6dlnA%2BR4ASQEfAtbYZUZkFMaf3ost3kobk8Z7w%2BxOZey5CcgYu5cXBUwQelhg0%2FheCNjjg%2F5Ws9Kig5WL7BhUJ6juOU%2FAayZFXuh8T22JJP2elRD3rRMg7ROkjvGbZU74qebPqdQNB%2FQZMGEpbd6tzw2Qrwjh4TS9%2ByQXa%2F3gIeHh8F2%2BFgG%2BKuzf388qpGU9&X-Amz-Signature=77529d084096069c6d633d96a6b96c622eee51230e06d02bf0f1d0e4754363e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TT2WZ34%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCICWwvpUbgrfeo8fQyVFo%2FyfoQzmiRPJ89EiiSyqG7ajBAiEAgPCNlYEb6R5pi9aFDy5f6lord7Pv4ueXTDxEDiE02fgqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpizd%2FMysugjMFDAircA9xIbksVgZ2y%2Bp28e%2F7demfzJ4MdBcykQHg126JddJJCQeYd6K%2BU6E6Gzk5fRNqF9yL0amPmYVoWY8vpayYgFL5W8CIea9%2FLnjm3C7oKJjW3MpCkQGJzjmv3zQumQDOhCeAwayGiyoGkHX6lPBJilUf%2FCbRVbakR0g1SEZdy6DGGeAzvPFnTkNdS8vcgufw6stGsclD5ms9lrjQDtY8PsWpcZJ1n%2FsoA3PaIIhL%2Bt5968Fz%2Fai7oFuUd%2FGKuEqXXJgYoShDHWNZBLqstRFD9HsV1SNacPOBXUCDDaJv%2BUY%2BW7EQ5OvastSMG3bQl%2Bbv%2BSYsU00tNchTpe2QiIuMRazv10Mz9VXVt7RiYHpo%2FYcDA%2Fr%2FGz7eVc5rABHE4AL2gL8lgVQMTDlnLvSCEEENcLHJOdLIT7g0VTLiAsXDOGFrrTfJdesPPpeaOVab9NR%2BtTGK5gGS4dSkYYQ1eRNVuy6iq%2BIxvME2inNchUmFPJzRpAtIJnb7W%2FLayfj82PsZdiWGVAZXYk2J7yycI8z%2BI0WIL5ItwX3GAxxVTPtIk8nFT5o88JCG8GaK2CpiOW2axG4an5dYWRMCVPTO5xAE1I4ZZfl8Mzyk2b58znhJhLzWIyniFWFKfJOscYX4SMIbumsAGOqUB9wfQnhzfr%2BZ5NYl4hHOhCDvJsWv6dlnA%2BR4ASQEfAtbYZUZkFMaf3ost3kobk8Z7w%2BxOZey5CcgYu5cXBUwQelhg0%2FheCNjjg%2F5Ws9Kig5WL7BhUJ6juOU%2FAayZFXuh8T22JJP2elRD3rRMg7ROkjvGbZU74qebPqdQNB%2FQZMGEpbd6tzw2Qrwjh4TS9%2ByQXa%2F3gIeHh8F2%2BFgG%2BKuzf388qpGU9&X-Amz-Signature=e47c89592480764c7dcb4f8990a707975e26149af587b989777d7599636b3a31&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TT2WZ34%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCICWwvpUbgrfeo8fQyVFo%2FyfoQzmiRPJ89EiiSyqG7ajBAiEAgPCNlYEb6R5pi9aFDy5f6lord7Pv4ueXTDxEDiE02fgqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpizd%2FMysugjMFDAircA9xIbksVgZ2y%2Bp28e%2F7demfzJ4MdBcykQHg126JddJJCQeYd6K%2BU6E6Gzk5fRNqF9yL0amPmYVoWY8vpayYgFL5W8CIea9%2FLnjm3C7oKJjW3MpCkQGJzjmv3zQumQDOhCeAwayGiyoGkHX6lPBJilUf%2FCbRVbakR0g1SEZdy6DGGeAzvPFnTkNdS8vcgufw6stGsclD5ms9lrjQDtY8PsWpcZJ1n%2FsoA3PaIIhL%2Bt5968Fz%2Fai7oFuUd%2FGKuEqXXJgYoShDHWNZBLqstRFD9HsV1SNacPOBXUCDDaJv%2BUY%2BW7EQ5OvastSMG3bQl%2Bbv%2BSYsU00tNchTpe2QiIuMRazv10Mz9VXVt7RiYHpo%2FYcDA%2Fr%2FGz7eVc5rABHE4AL2gL8lgVQMTDlnLvSCEEENcLHJOdLIT7g0VTLiAsXDOGFrrTfJdesPPpeaOVab9NR%2BtTGK5gGS4dSkYYQ1eRNVuy6iq%2BIxvME2inNchUmFPJzRpAtIJnb7W%2FLayfj82PsZdiWGVAZXYk2J7yycI8z%2BI0WIL5ItwX3GAxxVTPtIk8nFT5o88JCG8GaK2CpiOW2axG4an5dYWRMCVPTO5xAE1I4ZZfl8Mzyk2b58znhJhLzWIyniFWFKfJOscYX4SMIbumsAGOqUB9wfQnhzfr%2BZ5NYl4hHOhCDvJsWv6dlnA%2BR4ASQEfAtbYZUZkFMaf3ost3kobk8Z7w%2BxOZey5CcgYu5cXBUwQelhg0%2FheCNjjg%2F5Ws9Kig5WL7BhUJ6juOU%2FAayZFXuh8T22JJP2elRD3rRMg7ROkjvGbZU74qebPqdQNB%2FQZMGEpbd6tzw2Qrwjh4TS9%2ByQXa%2F3gIeHh8F2%2BFgG%2BKuzf388qpGU9&X-Amz-Signature=805588cb7f15ac973f854981b5709a413d99c6bc8d4717ced00dcafb59ac810a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
