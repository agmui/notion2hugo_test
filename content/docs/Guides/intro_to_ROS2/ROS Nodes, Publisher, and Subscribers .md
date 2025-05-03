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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V35ZTNYP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCdmRpam4HmxU0dDM5BLRLHflflWbUTQ%2BktcgmkvKu%2BLQIhAKNfsAqll%2FAHnycisWy5ZmDehLPOhECpjpXTRgRrtjJuKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2B0X4fXqY1A%2FGV6sgq3AMjrk3GAr0HIcau8%2FH9CQJjh8pvXscmWbT3Tm8K0I7fiWzzgKnCNJJgym%2FZlU%2FtU7dDQYJoCnGplILVvFDvh7murHtifduOAsK8LpTKozmNOR5yuX87EayS4jolsSO3YlL19Qr%2F9P%2FU7Ht4%2Bv6FLKiMo6cumY8grrZPjXksvDERaw85c780RhDyGeZU%2BFIrEQRnSR%2FROhben3ppCpom2nFbc6sCbI1TLORpYHZviaGsvLILrU2TTQQwEuQil03bOAOCLCoRaOUlPoGcfJZYL9LrfUAB6%2BV1UXt0SZ85GE481NfL82HRGDmoQjCw2NylZ%2BHswj0Cg7u5aYIK87bJg07Jgb0619ZictR2mkpeNHBZBO9Fw%2F%2F%2FePX4GZjX6RDEGFM9eD6f9Cw7poSYkkQ7ETEML5VHvJ6NwQRWuyr%2FVIOkLqNt63jgef4wI6ZWaJW3%2B4%2F88oyGO%2FmOL%2BuiAKTW%2B2vV0RkfTXEE005Qs15pzZqxfvoeLfXmJQ2AnrF%2FkXuZYgWx1Xsh%2FRRPiL8GswonE%2FyIFTDtPatM54r27KNtpK6Oy9vrlCbf83Ksf3RYdzmofz%2B%2B2GxwVaphEn5tnHMElKXFVhVO53NjatLdnJOSRUQsr3wnzR%2BtK8U%2FCIXokzC13tfABjqkAYHZAqVs%2FH3tEfuNBIA%2BSqXLzd1C%2BwgeSpc3Gb8bKLO5JX3t4YX6jvIQPv1AnC9eRYw%2FTvGfGW3pO4MetnnpvyIpXTVvfOCCuohXEORhiaNpp473bP8gZYpPxsjZsM%2FEPCqZ9NsFZc6eQqBI0N1cNFhkIbuceeTXeC0hc75A4CNULr9tfXl5ZjgYAtz%2B07fMCgGllPhAyaR0LOJc0WjbAvQh2hAb&X-Amz-Signature=faef8f6f3ab8549bf159b7b70229de8c3b70e638d7b8a0cfccef631a60d7dd6b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V35ZTNYP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCdmRpam4HmxU0dDM5BLRLHflflWbUTQ%2BktcgmkvKu%2BLQIhAKNfsAqll%2FAHnycisWy5ZmDehLPOhECpjpXTRgRrtjJuKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2B0X4fXqY1A%2FGV6sgq3AMjrk3GAr0HIcau8%2FH9CQJjh8pvXscmWbT3Tm8K0I7fiWzzgKnCNJJgym%2FZlU%2FtU7dDQYJoCnGplILVvFDvh7murHtifduOAsK8LpTKozmNOR5yuX87EayS4jolsSO3YlL19Qr%2F9P%2FU7Ht4%2Bv6FLKiMo6cumY8grrZPjXksvDERaw85c780RhDyGeZU%2BFIrEQRnSR%2FROhben3ppCpom2nFbc6sCbI1TLORpYHZviaGsvLILrU2TTQQwEuQil03bOAOCLCoRaOUlPoGcfJZYL9LrfUAB6%2BV1UXt0SZ85GE481NfL82HRGDmoQjCw2NylZ%2BHswj0Cg7u5aYIK87bJg07Jgb0619ZictR2mkpeNHBZBO9Fw%2F%2F%2FePX4GZjX6RDEGFM9eD6f9Cw7poSYkkQ7ETEML5VHvJ6NwQRWuyr%2FVIOkLqNt63jgef4wI6ZWaJW3%2B4%2F88oyGO%2FmOL%2BuiAKTW%2B2vV0RkfTXEE005Qs15pzZqxfvoeLfXmJQ2AnrF%2FkXuZYgWx1Xsh%2FRRPiL8GswonE%2FyIFTDtPatM54r27KNtpK6Oy9vrlCbf83Ksf3RYdzmofz%2B%2B2GxwVaphEn5tnHMElKXFVhVO53NjatLdnJOSRUQsr3wnzR%2BtK8U%2FCIXokzC13tfABjqkAYHZAqVs%2FH3tEfuNBIA%2BSqXLzd1C%2BwgeSpc3Gb8bKLO5JX3t4YX6jvIQPv1AnC9eRYw%2FTvGfGW3pO4MetnnpvyIpXTVvfOCCuohXEORhiaNpp473bP8gZYpPxsjZsM%2FEPCqZ9NsFZc6eQqBI0N1cNFhkIbuceeTXeC0hc75A4CNULr9tfXl5ZjgYAtz%2B07fMCgGllPhAyaR0LOJc0WjbAvQh2hAb&X-Amz-Signature=d0913a18775216161cf447f8f54f48dfc35fcc6d0eccf4c629cea0e157b5914f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V35ZTNYP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCdmRpam4HmxU0dDM5BLRLHflflWbUTQ%2BktcgmkvKu%2BLQIhAKNfsAqll%2FAHnycisWy5ZmDehLPOhECpjpXTRgRrtjJuKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2B0X4fXqY1A%2FGV6sgq3AMjrk3GAr0HIcau8%2FH9CQJjh8pvXscmWbT3Tm8K0I7fiWzzgKnCNJJgym%2FZlU%2FtU7dDQYJoCnGplILVvFDvh7murHtifduOAsK8LpTKozmNOR5yuX87EayS4jolsSO3YlL19Qr%2F9P%2FU7Ht4%2Bv6FLKiMo6cumY8grrZPjXksvDERaw85c780RhDyGeZU%2BFIrEQRnSR%2FROhben3ppCpom2nFbc6sCbI1TLORpYHZviaGsvLILrU2TTQQwEuQil03bOAOCLCoRaOUlPoGcfJZYL9LrfUAB6%2BV1UXt0SZ85GE481NfL82HRGDmoQjCw2NylZ%2BHswj0Cg7u5aYIK87bJg07Jgb0619ZictR2mkpeNHBZBO9Fw%2F%2F%2FePX4GZjX6RDEGFM9eD6f9Cw7poSYkkQ7ETEML5VHvJ6NwQRWuyr%2FVIOkLqNt63jgef4wI6ZWaJW3%2B4%2F88oyGO%2FmOL%2BuiAKTW%2B2vV0RkfTXEE005Qs15pzZqxfvoeLfXmJQ2AnrF%2FkXuZYgWx1Xsh%2FRRPiL8GswonE%2FyIFTDtPatM54r27KNtpK6Oy9vrlCbf83Ksf3RYdzmofz%2B%2B2GxwVaphEn5tnHMElKXFVhVO53NjatLdnJOSRUQsr3wnzR%2BtK8U%2FCIXokzC13tfABjqkAYHZAqVs%2FH3tEfuNBIA%2BSqXLzd1C%2BwgeSpc3Gb8bKLO5JX3t4YX6jvIQPv1AnC9eRYw%2FTvGfGW3pO4MetnnpvyIpXTVvfOCCuohXEORhiaNpp473bP8gZYpPxsjZsM%2FEPCqZ9NsFZc6eQqBI0N1cNFhkIbuceeTXeC0hc75A4CNULr9tfXl5ZjgYAtz%2B07fMCgGllPhAyaR0LOJc0WjbAvQh2hAb&X-Amz-Signature=9ccbc09b3871955f58ac712b89f48cb39c4d2c39c51e49cc3124475addd98790&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V35ZTNYP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCdmRpam4HmxU0dDM5BLRLHflflWbUTQ%2BktcgmkvKu%2BLQIhAKNfsAqll%2FAHnycisWy5ZmDehLPOhECpjpXTRgRrtjJuKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2B0X4fXqY1A%2FGV6sgq3AMjrk3GAr0HIcau8%2FH9CQJjh8pvXscmWbT3Tm8K0I7fiWzzgKnCNJJgym%2FZlU%2FtU7dDQYJoCnGplILVvFDvh7murHtifduOAsK8LpTKozmNOR5yuX87EayS4jolsSO3YlL19Qr%2F9P%2FU7Ht4%2Bv6FLKiMo6cumY8grrZPjXksvDERaw85c780RhDyGeZU%2BFIrEQRnSR%2FROhben3ppCpom2nFbc6sCbI1TLORpYHZviaGsvLILrU2TTQQwEuQil03bOAOCLCoRaOUlPoGcfJZYL9LrfUAB6%2BV1UXt0SZ85GE481NfL82HRGDmoQjCw2NylZ%2BHswj0Cg7u5aYIK87bJg07Jgb0619ZictR2mkpeNHBZBO9Fw%2F%2F%2FePX4GZjX6RDEGFM9eD6f9Cw7poSYkkQ7ETEML5VHvJ6NwQRWuyr%2FVIOkLqNt63jgef4wI6ZWaJW3%2B4%2F88oyGO%2FmOL%2BuiAKTW%2B2vV0RkfTXEE005Qs15pzZqxfvoeLfXmJQ2AnrF%2FkXuZYgWx1Xsh%2FRRPiL8GswonE%2FyIFTDtPatM54r27KNtpK6Oy9vrlCbf83Ksf3RYdzmofz%2B%2B2GxwVaphEn5tnHMElKXFVhVO53NjatLdnJOSRUQsr3wnzR%2BtK8U%2FCIXokzC13tfABjqkAYHZAqVs%2FH3tEfuNBIA%2BSqXLzd1C%2BwgeSpc3Gb8bKLO5JX3t4YX6jvIQPv1AnC9eRYw%2FTvGfGW3pO4MetnnpvyIpXTVvfOCCuohXEORhiaNpp473bP8gZYpPxsjZsM%2FEPCqZ9NsFZc6eQqBI0N1cNFhkIbuceeTXeC0hc75A4CNULr9tfXl5ZjgYAtz%2B07fMCgGllPhAyaR0LOJc0WjbAvQh2hAb&X-Amz-Signature=d3a3fb4ebc3f09f8dc5f11b9deea7a296042fe070fcaddbb26df8266483110fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V35ZTNYP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCdmRpam4HmxU0dDM5BLRLHflflWbUTQ%2BktcgmkvKu%2BLQIhAKNfsAqll%2FAHnycisWy5ZmDehLPOhECpjpXTRgRrtjJuKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2B0X4fXqY1A%2FGV6sgq3AMjrk3GAr0HIcau8%2FH9CQJjh8pvXscmWbT3Tm8K0I7fiWzzgKnCNJJgym%2FZlU%2FtU7dDQYJoCnGplILVvFDvh7murHtifduOAsK8LpTKozmNOR5yuX87EayS4jolsSO3YlL19Qr%2F9P%2FU7Ht4%2Bv6FLKiMo6cumY8grrZPjXksvDERaw85c780RhDyGeZU%2BFIrEQRnSR%2FROhben3ppCpom2nFbc6sCbI1TLORpYHZviaGsvLILrU2TTQQwEuQil03bOAOCLCoRaOUlPoGcfJZYL9LrfUAB6%2BV1UXt0SZ85GE481NfL82HRGDmoQjCw2NylZ%2BHswj0Cg7u5aYIK87bJg07Jgb0619ZictR2mkpeNHBZBO9Fw%2F%2F%2FePX4GZjX6RDEGFM9eD6f9Cw7poSYkkQ7ETEML5VHvJ6NwQRWuyr%2FVIOkLqNt63jgef4wI6ZWaJW3%2B4%2F88oyGO%2FmOL%2BuiAKTW%2B2vV0RkfTXEE005Qs15pzZqxfvoeLfXmJQ2AnrF%2FkXuZYgWx1Xsh%2FRRPiL8GswonE%2FyIFTDtPatM54r27KNtpK6Oy9vrlCbf83Ksf3RYdzmofz%2B%2B2GxwVaphEn5tnHMElKXFVhVO53NjatLdnJOSRUQsr3wnzR%2BtK8U%2FCIXokzC13tfABjqkAYHZAqVs%2FH3tEfuNBIA%2BSqXLzd1C%2BwgeSpc3Gb8bKLO5JX3t4YX6jvIQPv1AnC9eRYw%2FTvGfGW3pO4MetnnpvyIpXTVvfOCCuohXEORhiaNpp473bP8gZYpPxsjZsM%2FEPCqZ9NsFZc6eQqBI0N1cNFhkIbuceeTXeC0hc75A4CNULr9tfXl5ZjgYAtz%2B07fMCgGllPhAyaR0LOJc0WjbAvQh2hAb&X-Amz-Signature=07be6a4b0bae1fa0e61ae029954c5e906b290f077b883ece053ba3f7bad5e785&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V35ZTNYP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCdmRpam4HmxU0dDM5BLRLHflflWbUTQ%2BktcgmkvKu%2BLQIhAKNfsAqll%2FAHnycisWy5ZmDehLPOhECpjpXTRgRrtjJuKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2B0X4fXqY1A%2FGV6sgq3AMjrk3GAr0HIcau8%2FH9CQJjh8pvXscmWbT3Tm8K0I7fiWzzgKnCNJJgym%2FZlU%2FtU7dDQYJoCnGplILVvFDvh7murHtifduOAsK8LpTKozmNOR5yuX87EayS4jolsSO3YlL19Qr%2F9P%2FU7Ht4%2Bv6FLKiMo6cumY8grrZPjXksvDERaw85c780RhDyGeZU%2BFIrEQRnSR%2FROhben3ppCpom2nFbc6sCbI1TLORpYHZviaGsvLILrU2TTQQwEuQil03bOAOCLCoRaOUlPoGcfJZYL9LrfUAB6%2BV1UXt0SZ85GE481NfL82HRGDmoQjCw2NylZ%2BHswj0Cg7u5aYIK87bJg07Jgb0619ZictR2mkpeNHBZBO9Fw%2F%2F%2FePX4GZjX6RDEGFM9eD6f9Cw7poSYkkQ7ETEML5VHvJ6NwQRWuyr%2FVIOkLqNt63jgef4wI6ZWaJW3%2B4%2F88oyGO%2FmOL%2BuiAKTW%2B2vV0RkfTXEE005Qs15pzZqxfvoeLfXmJQ2AnrF%2FkXuZYgWx1Xsh%2FRRPiL8GswonE%2FyIFTDtPatM54r27KNtpK6Oy9vrlCbf83Ksf3RYdzmofz%2B%2B2GxwVaphEn5tnHMElKXFVhVO53NjatLdnJOSRUQsr3wnzR%2BtK8U%2FCIXokzC13tfABjqkAYHZAqVs%2FH3tEfuNBIA%2BSqXLzd1C%2BwgeSpc3Gb8bKLO5JX3t4YX6jvIQPv1AnC9eRYw%2FTvGfGW3pO4MetnnpvyIpXTVvfOCCuohXEORhiaNpp473bP8gZYpPxsjZsM%2FEPCqZ9NsFZc6eQqBI0N1cNFhkIbuceeTXeC0hc75A4CNULr9tfXl5ZjgYAtz%2B07fMCgGllPhAyaR0LOJc0WjbAvQh2hAb&X-Amz-Signature=7e71d7f355c156006de64f9aa3f27124461fe4047b70c55d98974f178562b14a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V35ZTNYP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCdmRpam4HmxU0dDM5BLRLHflflWbUTQ%2BktcgmkvKu%2BLQIhAKNfsAqll%2FAHnycisWy5ZmDehLPOhECpjpXTRgRrtjJuKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2B0X4fXqY1A%2FGV6sgq3AMjrk3GAr0HIcau8%2FH9CQJjh8pvXscmWbT3Tm8K0I7fiWzzgKnCNJJgym%2FZlU%2FtU7dDQYJoCnGplILVvFDvh7murHtifduOAsK8LpTKozmNOR5yuX87EayS4jolsSO3YlL19Qr%2F9P%2FU7Ht4%2Bv6FLKiMo6cumY8grrZPjXksvDERaw85c780RhDyGeZU%2BFIrEQRnSR%2FROhben3ppCpom2nFbc6sCbI1TLORpYHZviaGsvLILrU2TTQQwEuQil03bOAOCLCoRaOUlPoGcfJZYL9LrfUAB6%2BV1UXt0SZ85GE481NfL82HRGDmoQjCw2NylZ%2BHswj0Cg7u5aYIK87bJg07Jgb0619ZictR2mkpeNHBZBO9Fw%2F%2F%2FePX4GZjX6RDEGFM9eD6f9Cw7poSYkkQ7ETEML5VHvJ6NwQRWuyr%2FVIOkLqNt63jgef4wI6ZWaJW3%2B4%2F88oyGO%2FmOL%2BuiAKTW%2B2vV0RkfTXEE005Qs15pzZqxfvoeLfXmJQ2AnrF%2FkXuZYgWx1Xsh%2FRRPiL8GswonE%2FyIFTDtPatM54r27KNtpK6Oy9vrlCbf83Ksf3RYdzmofz%2B%2B2GxwVaphEn5tnHMElKXFVhVO53NjatLdnJOSRUQsr3wnzR%2BtK8U%2FCIXokzC13tfABjqkAYHZAqVs%2FH3tEfuNBIA%2BSqXLzd1C%2BwgeSpc3Gb8bKLO5JX3t4YX6jvIQPv1AnC9eRYw%2FTvGfGW3pO4MetnnpvyIpXTVvfOCCuohXEORhiaNpp473bP8gZYpPxsjZsM%2FEPCqZ9NsFZc6eQqBI0N1cNFhkIbuceeTXeC0hc75A4CNULr9tfXl5ZjgYAtz%2B07fMCgGllPhAyaR0LOJc0WjbAvQh2hAb&X-Amz-Signature=c78073e1ba72e9dca38520ed6183338c801ec4c558363557c3a325ce3858cb27&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V35ZTNYP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCdmRpam4HmxU0dDM5BLRLHflflWbUTQ%2BktcgmkvKu%2BLQIhAKNfsAqll%2FAHnycisWy5ZmDehLPOhECpjpXTRgRrtjJuKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2B0X4fXqY1A%2FGV6sgq3AMjrk3GAr0HIcau8%2FH9CQJjh8pvXscmWbT3Tm8K0I7fiWzzgKnCNJJgym%2FZlU%2FtU7dDQYJoCnGplILVvFDvh7murHtifduOAsK8LpTKozmNOR5yuX87EayS4jolsSO3YlL19Qr%2F9P%2FU7Ht4%2Bv6FLKiMo6cumY8grrZPjXksvDERaw85c780RhDyGeZU%2BFIrEQRnSR%2FROhben3ppCpom2nFbc6sCbI1TLORpYHZviaGsvLILrU2TTQQwEuQil03bOAOCLCoRaOUlPoGcfJZYL9LrfUAB6%2BV1UXt0SZ85GE481NfL82HRGDmoQjCw2NylZ%2BHswj0Cg7u5aYIK87bJg07Jgb0619ZictR2mkpeNHBZBO9Fw%2F%2F%2FePX4GZjX6RDEGFM9eD6f9Cw7poSYkkQ7ETEML5VHvJ6NwQRWuyr%2FVIOkLqNt63jgef4wI6ZWaJW3%2B4%2F88oyGO%2FmOL%2BuiAKTW%2B2vV0RkfTXEE005Qs15pzZqxfvoeLfXmJQ2AnrF%2FkXuZYgWx1Xsh%2FRRPiL8GswonE%2FyIFTDtPatM54r27KNtpK6Oy9vrlCbf83Ksf3RYdzmofz%2B%2B2GxwVaphEn5tnHMElKXFVhVO53NjatLdnJOSRUQsr3wnzR%2BtK8U%2FCIXokzC13tfABjqkAYHZAqVs%2FH3tEfuNBIA%2BSqXLzd1C%2BwgeSpc3Gb8bKLO5JX3t4YX6jvIQPv1AnC9eRYw%2FTvGfGW3pO4MetnnpvyIpXTVvfOCCuohXEORhiaNpp473bP8gZYpPxsjZsM%2FEPCqZ9NsFZc6eQqBI0N1cNFhkIbuceeTXeC0hc75A4CNULr9tfXl5ZjgYAtz%2B07fMCgGllPhAyaR0LOJc0WjbAvQh2hAb&X-Amz-Signature=a9f272b8fcb9b545854f0d4826f88135c7dc864943f466b117fe7bb3f8595a03&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
