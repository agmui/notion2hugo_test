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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637GTMU6C%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4QzBhZ8sAGt%2FmdsnbPD9xneKCBUItm9De73n%2BH%2FwxmAiAbIN4gmUIGxx3EY3cbDk%2F6e%2FXf%2Bz2XT7PpOp582rKVICqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW30euXY5T079svP2KtwDh%2BAP%2BRDyFxULH%2FH7AMWeC86%2FSt%2BTTwo0GDfPUiBiY1pleU5WDiGR5xssL9QdM6YWt5Tx60csBpXkuHQMAlkSc1PTgkhzCTqlUiImiaKdKoEH8X%2FFwk6%2FhaJfiJOBpGKPeDQgnCC7YUu681jjbKVPOiz6xmnYiWSu%2B3bA2wcRSGx8UAxMci7J1W3VTRs3z4gz7qTJ%2Bu15PfDpGxw0gA0E%2Brv0K2aaXD%2BmW5%2FrSOsbcDCzla665SU%2FWORjPPeRvM9w1swCEHj8hFWgwB%2F0ByV%2FWPiibO0Hrl63lcAVabfXfoPwNQ2mUBsonoHjq%2BXV0%2BB0h%2F3Wn%2BaYdZIH4cyZQR%2BJORe4sItDLkXrmoUji2gvwSMEqOExtybquaj6D5wFwuFPPm6TytnyDFcumuK%2Bhh7Wua140LIa6mcSIR4liTrgGfjC8%2BVCfYSN4WZVuQEUUZPAkKrh%2Bcvlv08MQruqhK%2Fra%2BjFOB2jewBUkBjz5Q2YXprsShih2K2Q4WQmJ7h4dSAZYS0Vib39PYinADIwQqlpKrbuJyxLkyZoefPA0YZBfQoOe6RAdlGQ3AJ5muO6QUaWFjIM9nujuqLooihrhzNoUfJcQRjfw4camMboHML9Vb8A%2F7x2Yluzp5XmkxAw7vGvyAY6pgF2JCwbHEy28QOXFf24vlBDYB41pDixbtWOCDryGRaP%2FRGU6h3gQfWridK4tktefYbl%2FrlUZzzUnkQ5xY9COXeqr8%2FEveKCLhnlHJ78S0MYO%2FXxbEKAIOokrEbfgUk8M0gCp4Px4JpVo%2Bb%2FKhBJom8j02r4ffl57anGgSSb%2F3mJI3vnzhrlvHFrUGAipBARVcjxUtdyCMnQrHELnBQZS2S7h9K1imKJ&X-Amz-Signature=59bfe2047ddd9cf960737b12441835e531496d605fc164f1764b5090950dd32d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637GTMU6C%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4QzBhZ8sAGt%2FmdsnbPD9xneKCBUItm9De73n%2BH%2FwxmAiAbIN4gmUIGxx3EY3cbDk%2F6e%2FXf%2Bz2XT7PpOp582rKVICqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW30euXY5T079svP2KtwDh%2BAP%2BRDyFxULH%2FH7AMWeC86%2FSt%2BTTwo0GDfPUiBiY1pleU5WDiGR5xssL9QdM6YWt5Tx60csBpXkuHQMAlkSc1PTgkhzCTqlUiImiaKdKoEH8X%2FFwk6%2FhaJfiJOBpGKPeDQgnCC7YUu681jjbKVPOiz6xmnYiWSu%2B3bA2wcRSGx8UAxMci7J1W3VTRs3z4gz7qTJ%2Bu15PfDpGxw0gA0E%2Brv0K2aaXD%2BmW5%2FrSOsbcDCzla665SU%2FWORjPPeRvM9w1swCEHj8hFWgwB%2F0ByV%2FWPiibO0Hrl63lcAVabfXfoPwNQ2mUBsonoHjq%2BXV0%2BB0h%2F3Wn%2BaYdZIH4cyZQR%2BJORe4sItDLkXrmoUji2gvwSMEqOExtybquaj6D5wFwuFPPm6TytnyDFcumuK%2Bhh7Wua140LIa6mcSIR4liTrgGfjC8%2BVCfYSN4WZVuQEUUZPAkKrh%2Bcvlv08MQruqhK%2Fra%2BjFOB2jewBUkBjz5Q2YXprsShih2K2Q4WQmJ7h4dSAZYS0Vib39PYinADIwQqlpKrbuJyxLkyZoefPA0YZBfQoOe6RAdlGQ3AJ5muO6QUaWFjIM9nujuqLooihrhzNoUfJcQRjfw4camMboHML9Vb8A%2F7x2Yluzp5XmkxAw7vGvyAY6pgF2JCwbHEy28QOXFf24vlBDYB41pDixbtWOCDryGRaP%2FRGU6h3gQfWridK4tktefYbl%2FrlUZzzUnkQ5xY9COXeqr8%2FEveKCLhnlHJ78S0MYO%2FXxbEKAIOokrEbfgUk8M0gCp4Px4JpVo%2Bb%2FKhBJom8j02r4ffl57anGgSSb%2F3mJI3vnzhrlvHFrUGAipBARVcjxUtdyCMnQrHELnBQZS2S7h9K1imKJ&X-Amz-Signature=1df9fdd41c9aea629fdd61d2679d76e7b79412cc4c786a0fb76111d3630d8397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637GTMU6C%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4QzBhZ8sAGt%2FmdsnbPD9xneKCBUItm9De73n%2BH%2FwxmAiAbIN4gmUIGxx3EY3cbDk%2F6e%2FXf%2Bz2XT7PpOp582rKVICqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW30euXY5T079svP2KtwDh%2BAP%2BRDyFxULH%2FH7AMWeC86%2FSt%2BTTwo0GDfPUiBiY1pleU5WDiGR5xssL9QdM6YWt5Tx60csBpXkuHQMAlkSc1PTgkhzCTqlUiImiaKdKoEH8X%2FFwk6%2FhaJfiJOBpGKPeDQgnCC7YUu681jjbKVPOiz6xmnYiWSu%2B3bA2wcRSGx8UAxMci7J1W3VTRs3z4gz7qTJ%2Bu15PfDpGxw0gA0E%2Brv0K2aaXD%2BmW5%2FrSOsbcDCzla665SU%2FWORjPPeRvM9w1swCEHj8hFWgwB%2F0ByV%2FWPiibO0Hrl63lcAVabfXfoPwNQ2mUBsonoHjq%2BXV0%2BB0h%2F3Wn%2BaYdZIH4cyZQR%2BJORe4sItDLkXrmoUji2gvwSMEqOExtybquaj6D5wFwuFPPm6TytnyDFcumuK%2Bhh7Wua140LIa6mcSIR4liTrgGfjC8%2BVCfYSN4WZVuQEUUZPAkKrh%2Bcvlv08MQruqhK%2Fra%2BjFOB2jewBUkBjz5Q2YXprsShih2K2Q4WQmJ7h4dSAZYS0Vib39PYinADIwQqlpKrbuJyxLkyZoefPA0YZBfQoOe6RAdlGQ3AJ5muO6QUaWFjIM9nujuqLooihrhzNoUfJcQRjfw4camMboHML9Vb8A%2F7x2Yluzp5XmkxAw7vGvyAY6pgF2JCwbHEy28QOXFf24vlBDYB41pDixbtWOCDryGRaP%2FRGU6h3gQfWridK4tktefYbl%2FrlUZzzUnkQ5xY9COXeqr8%2FEveKCLhnlHJ78S0MYO%2FXxbEKAIOokrEbfgUk8M0gCp4Px4JpVo%2Bb%2FKhBJom8j02r4ffl57anGgSSb%2F3mJI3vnzhrlvHFrUGAipBARVcjxUtdyCMnQrHELnBQZS2S7h9K1imKJ&X-Amz-Signature=6246183055456e17126e9309d5e33608c12ad2fcd18a153bb95a46dd4f658f23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637GTMU6C%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4QzBhZ8sAGt%2FmdsnbPD9xneKCBUItm9De73n%2BH%2FwxmAiAbIN4gmUIGxx3EY3cbDk%2F6e%2FXf%2Bz2XT7PpOp582rKVICqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW30euXY5T079svP2KtwDh%2BAP%2BRDyFxULH%2FH7AMWeC86%2FSt%2BTTwo0GDfPUiBiY1pleU5WDiGR5xssL9QdM6YWt5Tx60csBpXkuHQMAlkSc1PTgkhzCTqlUiImiaKdKoEH8X%2FFwk6%2FhaJfiJOBpGKPeDQgnCC7YUu681jjbKVPOiz6xmnYiWSu%2B3bA2wcRSGx8UAxMci7J1W3VTRs3z4gz7qTJ%2Bu15PfDpGxw0gA0E%2Brv0K2aaXD%2BmW5%2FrSOsbcDCzla665SU%2FWORjPPeRvM9w1swCEHj8hFWgwB%2F0ByV%2FWPiibO0Hrl63lcAVabfXfoPwNQ2mUBsonoHjq%2BXV0%2BB0h%2F3Wn%2BaYdZIH4cyZQR%2BJORe4sItDLkXrmoUji2gvwSMEqOExtybquaj6D5wFwuFPPm6TytnyDFcumuK%2Bhh7Wua140LIa6mcSIR4liTrgGfjC8%2BVCfYSN4WZVuQEUUZPAkKrh%2Bcvlv08MQruqhK%2Fra%2BjFOB2jewBUkBjz5Q2YXprsShih2K2Q4WQmJ7h4dSAZYS0Vib39PYinADIwQqlpKrbuJyxLkyZoefPA0YZBfQoOe6RAdlGQ3AJ5muO6QUaWFjIM9nujuqLooihrhzNoUfJcQRjfw4camMboHML9Vb8A%2F7x2Yluzp5XmkxAw7vGvyAY6pgF2JCwbHEy28QOXFf24vlBDYB41pDixbtWOCDryGRaP%2FRGU6h3gQfWridK4tktefYbl%2FrlUZzzUnkQ5xY9COXeqr8%2FEveKCLhnlHJ78S0MYO%2FXxbEKAIOokrEbfgUk8M0gCp4Px4JpVo%2Bb%2FKhBJom8j02r4ffl57anGgSSb%2F3mJI3vnzhrlvHFrUGAipBARVcjxUtdyCMnQrHELnBQZS2S7h9K1imKJ&X-Amz-Signature=89a614bc43014ce30cb6e5e0150d423192ffca2711d90581f8e50775e23868ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637GTMU6C%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4QzBhZ8sAGt%2FmdsnbPD9xneKCBUItm9De73n%2BH%2FwxmAiAbIN4gmUIGxx3EY3cbDk%2F6e%2FXf%2Bz2XT7PpOp582rKVICqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW30euXY5T079svP2KtwDh%2BAP%2BRDyFxULH%2FH7AMWeC86%2FSt%2BTTwo0GDfPUiBiY1pleU5WDiGR5xssL9QdM6YWt5Tx60csBpXkuHQMAlkSc1PTgkhzCTqlUiImiaKdKoEH8X%2FFwk6%2FhaJfiJOBpGKPeDQgnCC7YUu681jjbKVPOiz6xmnYiWSu%2B3bA2wcRSGx8UAxMci7J1W3VTRs3z4gz7qTJ%2Bu15PfDpGxw0gA0E%2Brv0K2aaXD%2BmW5%2FrSOsbcDCzla665SU%2FWORjPPeRvM9w1swCEHj8hFWgwB%2F0ByV%2FWPiibO0Hrl63lcAVabfXfoPwNQ2mUBsonoHjq%2BXV0%2BB0h%2F3Wn%2BaYdZIH4cyZQR%2BJORe4sItDLkXrmoUji2gvwSMEqOExtybquaj6D5wFwuFPPm6TytnyDFcumuK%2Bhh7Wua140LIa6mcSIR4liTrgGfjC8%2BVCfYSN4WZVuQEUUZPAkKrh%2Bcvlv08MQruqhK%2Fra%2BjFOB2jewBUkBjz5Q2YXprsShih2K2Q4WQmJ7h4dSAZYS0Vib39PYinADIwQqlpKrbuJyxLkyZoefPA0YZBfQoOe6RAdlGQ3AJ5muO6QUaWFjIM9nujuqLooihrhzNoUfJcQRjfw4camMboHML9Vb8A%2F7x2Yluzp5XmkxAw7vGvyAY6pgF2JCwbHEy28QOXFf24vlBDYB41pDixbtWOCDryGRaP%2FRGU6h3gQfWridK4tktefYbl%2FrlUZzzUnkQ5xY9COXeqr8%2FEveKCLhnlHJ78S0MYO%2FXxbEKAIOokrEbfgUk8M0gCp4Px4JpVo%2Bb%2FKhBJom8j02r4ffl57anGgSSb%2F3mJI3vnzhrlvHFrUGAipBARVcjxUtdyCMnQrHELnBQZS2S7h9K1imKJ&X-Amz-Signature=a2a4f4e10488ec6918ed21d20c6b876efc3b35b49c6f7d0f87e866cc733941ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637GTMU6C%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4QzBhZ8sAGt%2FmdsnbPD9xneKCBUItm9De73n%2BH%2FwxmAiAbIN4gmUIGxx3EY3cbDk%2F6e%2FXf%2Bz2XT7PpOp582rKVICqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW30euXY5T079svP2KtwDh%2BAP%2BRDyFxULH%2FH7AMWeC86%2FSt%2BTTwo0GDfPUiBiY1pleU5WDiGR5xssL9QdM6YWt5Tx60csBpXkuHQMAlkSc1PTgkhzCTqlUiImiaKdKoEH8X%2FFwk6%2FhaJfiJOBpGKPeDQgnCC7YUu681jjbKVPOiz6xmnYiWSu%2B3bA2wcRSGx8UAxMci7J1W3VTRs3z4gz7qTJ%2Bu15PfDpGxw0gA0E%2Brv0K2aaXD%2BmW5%2FrSOsbcDCzla665SU%2FWORjPPeRvM9w1swCEHj8hFWgwB%2F0ByV%2FWPiibO0Hrl63lcAVabfXfoPwNQ2mUBsonoHjq%2BXV0%2BB0h%2F3Wn%2BaYdZIH4cyZQR%2BJORe4sItDLkXrmoUji2gvwSMEqOExtybquaj6D5wFwuFPPm6TytnyDFcumuK%2Bhh7Wua140LIa6mcSIR4liTrgGfjC8%2BVCfYSN4WZVuQEUUZPAkKrh%2Bcvlv08MQruqhK%2Fra%2BjFOB2jewBUkBjz5Q2YXprsShih2K2Q4WQmJ7h4dSAZYS0Vib39PYinADIwQqlpKrbuJyxLkyZoefPA0YZBfQoOe6RAdlGQ3AJ5muO6QUaWFjIM9nujuqLooihrhzNoUfJcQRjfw4camMboHML9Vb8A%2F7x2Yluzp5XmkxAw7vGvyAY6pgF2JCwbHEy28QOXFf24vlBDYB41pDixbtWOCDryGRaP%2FRGU6h3gQfWridK4tktefYbl%2FrlUZzzUnkQ5xY9COXeqr8%2FEveKCLhnlHJ78S0MYO%2FXxbEKAIOokrEbfgUk8M0gCp4Px4JpVo%2Bb%2FKhBJom8j02r4ffl57anGgSSb%2F3mJI3vnzhrlvHFrUGAipBARVcjxUtdyCMnQrHELnBQZS2S7h9K1imKJ&X-Amz-Signature=366eff6815b36f515eccbb0c6fe02bb2d87773a03325907d4895cd6355237418&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637GTMU6C%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4QzBhZ8sAGt%2FmdsnbPD9xneKCBUItm9De73n%2BH%2FwxmAiAbIN4gmUIGxx3EY3cbDk%2F6e%2FXf%2Bz2XT7PpOp582rKVICqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW30euXY5T079svP2KtwDh%2BAP%2BRDyFxULH%2FH7AMWeC86%2FSt%2BTTwo0GDfPUiBiY1pleU5WDiGR5xssL9QdM6YWt5Tx60csBpXkuHQMAlkSc1PTgkhzCTqlUiImiaKdKoEH8X%2FFwk6%2FhaJfiJOBpGKPeDQgnCC7YUu681jjbKVPOiz6xmnYiWSu%2B3bA2wcRSGx8UAxMci7J1W3VTRs3z4gz7qTJ%2Bu15PfDpGxw0gA0E%2Brv0K2aaXD%2BmW5%2FrSOsbcDCzla665SU%2FWORjPPeRvM9w1swCEHj8hFWgwB%2F0ByV%2FWPiibO0Hrl63lcAVabfXfoPwNQ2mUBsonoHjq%2BXV0%2BB0h%2F3Wn%2BaYdZIH4cyZQR%2BJORe4sItDLkXrmoUji2gvwSMEqOExtybquaj6D5wFwuFPPm6TytnyDFcumuK%2Bhh7Wua140LIa6mcSIR4liTrgGfjC8%2BVCfYSN4WZVuQEUUZPAkKrh%2Bcvlv08MQruqhK%2Fra%2BjFOB2jewBUkBjz5Q2YXprsShih2K2Q4WQmJ7h4dSAZYS0Vib39PYinADIwQqlpKrbuJyxLkyZoefPA0YZBfQoOe6RAdlGQ3AJ5muO6QUaWFjIM9nujuqLooihrhzNoUfJcQRjfw4camMboHML9Vb8A%2F7x2Yluzp5XmkxAw7vGvyAY6pgF2JCwbHEy28QOXFf24vlBDYB41pDixbtWOCDryGRaP%2FRGU6h3gQfWridK4tktefYbl%2FrlUZzzUnkQ5xY9COXeqr8%2FEveKCLhnlHJ78S0MYO%2FXxbEKAIOokrEbfgUk8M0gCp4Px4JpVo%2Bb%2FKhBJom8j02r4ffl57anGgSSb%2F3mJI3vnzhrlvHFrUGAipBARVcjxUtdyCMnQrHELnBQZS2S7h9K1imKJ&X-Amz-Signature=0045a683f2e056af3456ddace7f0e34bf8ca3a4a459d7968dc44556dcc1c6d27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637GTMU6C%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4QzBhZ8sAGt%2FmdsnbPD9xneKCBUItm9De73n%2BH%2FwxmAiAbIN4gmUIGxx3EY3cbDk%2F6e%2FXf%2Bz2XT7PpOp582rKVICqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW30euXY5T079svP2KtwDh%2BAP%2BRDyFxULH%2FH7AMWeC86%2FSt%2BTTwo0GDfPUiBiY1pleU5WDiGR5xssL9QdM6YWt5Tx60csBpXkuHQMAlkSc1PTgkhzCTqlUiImiaKdKoEH8X%2FFwk6%2FhaJfiJOBpGKPeDQgnCC7YUu681jjbKVPOiz6xmnYiWSu%2B3bA2wcRSGx8UAxMci7J1W3VTRs3z4gz7qTJ%2Bu15PfDpGxw0gA0E%2Brv0K2aaXD%2BmW5%2FrSOsbcDCzla665SU%2FWORjPPeRvM9w1swCEHj8hFWgwB%2F0ByV%2FWPiibO0Hrl63lcAVabfXfoPwNQ2mUBsonoHjq%2BXV0%2BB0h%2F3Wn%2BaYdZIH4cyZQR%2BJORe4sItDLkXrmoUji2gvwSMEqOExtybquaj6D5wFwuFPPm6TytnyDFcumuK%2Bhh7Wua140LIa6mcSIR4liTrgGfjC8%2BVCfYSN4WZVuQEUUZPAkKrh%2Bcvlv08MQruqhK%2Fra%2BjFOB2jewBUkBjz5Q2YXprsShih2K2Q4WQmJ7h4dSAZYS0Vib39PYinADIwQqlpKrbuJyxLkyZoefPA0YZBfQoOe6RAdlGQ3AJ5muO6QUaWFjIM9nujuqLooihrhzNoUfJcQRjfw4camMboHML9Vb8A%2F7x2Yluzp5XmkxAw7vGvyAY6pgF2JCwbHEy28QOXFf24vlBDYB41pDixbtWOCDryGRaP%2FRGU6h3gQfWridK4tktefYbl%2FrlUZzzUnkQ5xY9COXeqr8%2FEveKCLhnlHJ78S0MYO%2FXxbEKAIOokrEbfgUk8M0gCp4Px4JpVo%2Bb%2FKhBJom8j02r4ffl57anGgSSb%2F3mJI3vnzhrlvHFrUGAipBARVcjxUtdyCMnQrHELnBQZS2S7h9K1imKJ&X-Amz-Signature=1dda32df3d23e5298aa9b898dcbcc1bf8840ab4b1e80f5b9e22e9d0c9986056c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
