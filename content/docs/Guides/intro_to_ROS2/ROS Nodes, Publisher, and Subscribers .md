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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSZ7HMUB%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCflDNWhPiDcXPc7GlTPmlv3eC%2Fzuuk3%2FgLTbLtGZtemwIgMbaxz%2B4DqI7u%2Fy7z1PnaJgMAHL%2BZntLTo5XmldY1UrIqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITutPYZyrxP9NjDqCrcA0e5PIUx25OWk9%2FbVGralaVfU5J9u0AcaWgWEf3qozzn%2BGkFXqK4jOJNfUB1eDBQtfgW4lHO2mDeziKigtksw2%2BlwdJTFiTUGV%2FVsyXe%2BI0kooxygvibnkBmszg69qMaTocVPe%2FEedj3CB9RNH3mmdZ4HVe1a%2BktC3fGMQarWQ1T4krHDBKpfcTghiyqDrIfnskUA1VxCNJvjHHyvrBBG3TXbXEvjoqweFb3WKoJuYgj3BVXj9Fd%2FuE3ymnZQ2ys8I%2BBPC%2Fouf9urt1QJ7yNjorUKtBLqBop2qvZZNgX1NMTXNcXtToUlw8UJwKS9NiP72o39RFU7xeGsPZOLaTc2aAqWIrlJUTUgXS3qTuHmDgSURMygWId3AzUaZU0rvZCmqYbDQXY52FFO2XqtBeiAxYSZ2EDornZBhiE7hUHsj6ns0oAknZ4jCXhOjEEogLmiYHCqZv4amGgHWup7wfXmj5MQKS5fnN44h1%2FAjaowrmkEHwg0BtQU19Os8mgsBhszxIKZ6KHLpsSnnOrT1do4abP6EzgGi%2FMXL2RQbpu8NOaqvrue1fWWlQLK2Kak4Z8xeWR9sBFAMW0az8Pju4aZ5VRVSXYNy%2BjLEv5wmPriuV36G34rqr4iapaRC%2FQMMf9wsMGOqUB3tgt3Yy%2FgIVri3ruHrPi%2BtmcPXwPhEEunF3Kpfbdb8z2w8kMdx6Sbl6j4HS6c2YkMDtj2%2FKm5EGRqzG26nlUj3FXHY6Xab2y9di6RbLeu05EM%2BOznBtMWv2%2BwVvg9%2Fd6Rlkz8xAZBpZgE4%2BsT1eRl6aZef6YmSbT0ZGElPDRhTCGJ4sGpk1pmUYH0fv9YwrD2NVdyZ74woBRlbsTYKzpBpIQJIov&X-Amz-Signature=514c35d252113a433c9cf55624903b66508f5cf85cb250148d79b54beebbf74f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSZ7HMUB%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCflDNWhPiDcXPc7GlTPmlv3eC%2Fzuuk3%2FgLTbLtGZtemwIgMbaxz%2B4DqI7u%2Fy7z1PnaJgMAHL%2BZntLTo5XmldY1UrIqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITutPYZyrxP9NjDqCrcA0e5PIUx25OWk9%2FbVGralaVfU5J9u0AcaWgWEf3qozzn%2BGkFXqK4jOJNfUB1eDBQtfgW4lHO2mDeziKigtksw2%2BlwdJTFiTUGV%2FVsyXe%2BI0kooxygvibnkBmszg69qMaTocVPe%2FEedj3CB9RNH3mmdZ4HVe1a%2BktC3fGMQarWQ1T4krHDBKpfcTghiyqDrIfnskUA1VxCNJvjHHyvrBBG3TXbXEvjoqweFb3WKoJuYgj3BVXj9Fd%2FuE3ymnZQ2ys8I%2BBPC%2Fouf9urt1QJ7yNjorUKtBLqBop2qvZZNgX1NMTXNcXtToUlw8UJwKS9NiP72o39RFU7xeGsPZOLaTc2aAqWIrlJUTUgXS3qTuHmDgSURMygWId3AzUaZU0rvZCmqYbDQXY52FFO2XqtBeiAxYSZ2EDornZBhiE7hUHsj6ns0oAknZ4jCXhOjEEogLmiYHCqZv4amGgHWup7wfXmj5MQKS5fnN44h1%2FAjaowrmkEHwg0BtQU19Os8mgsBhszxIKZ6KHLpsSnnOrT1do4abP6EzgGi%2FMXL2RQbpu8NOaqvrue1fWWlQLK2Kak4Z8xeWR9sBFAMW0az8Pju4aZ5VRVSXYNy%2BjLEv5wmPriuV36G34rqr4iapaRC%2FQMMf9wsMGOqUB3tgt3Yy%2FgIVri3ruHrPi%2BtmcPXwPhEEunF3Kpfbdb8z2w8kMdx6Sbl6j4HS6c2YkMDtj2%2FKm5EGRqzG26nlUj3FXHY6Xab2y9di6RbLeu05EM%2BOznBtMWv2%2BwVvg9%2Fd6Rlkz8xAZBpZgE4%2BsT1eRl6aZef6YmSbT0ZGElPDRhTCGJ4sGpk1pmUYH0fv9YwrD2NVdyZ74woBRlbsTYKzpBpIQJIov&X-Amz-Signature=354d176af65818bc8c2ccb33cda144b2eaad3a90f66d89cb0d32a30cfb8704bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSZ7HMUB%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCflDNWhPiDcXPc7GlTPmlv3eC%2Fzuuk3%2FgLTbLtGZtemwIgMbaxz%2B4DqI7u%2Fy7z1PnaJgMAHL%2BZntLTo5XmldY1UrIqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITutPYZyrxP9NjDqCrcA0e5PIUx25OWk9%2FbVGralaVfU5J9u0AcaWgWEf3qozzn%2BGkFXqK4jOJNfUB1eDBQtfgW4lHO2mDeziKigtksw2%2BlwdJTFiTUGV%2FVsyXe%2BI0kooxygvibnkBmszg69qMaTocVPe%2FEedj3CB9RNH3mmdZ4HVe1a%2BktC3fGMQarWQ1T4krHDBKpfcTghiyqDrIfnskUA1VxCNJvjHHyvrBBG3TXbXEvjoqweFb3WKoJuYgj3BVXj9Fd%2FuE3ymnZQ2ys8I%2BBPC%2Fouf9urt1QJ7yNjorUKtBLqBop2qvZZNgX1NMTXNcXtToUlw8UJwKS9NiP72o39RFU7xeGsPZOLaTc2aAqWIrlJUTUgXS3qTuHmDgSURMygWId3AzUaZU0rvZCmqYbDQXY52FFO2XqtBeiAxYSZ2EDornZBhiE7hUHsj6ns0oAknZ4jCXhOjEEogLmiYHCqZv4amGgHWup7wfXmj5MQKS5fnN44h1%2FAjaowrmkEHwg0BtQU19Os8mgsBhszxIKZ6KHLpsSnnOrT1do4abP6EzgGi%2FMXL2RQbpu8NOaqvrue1fWWlQLK2Kak4Z8xeWR9sBFAMW0az8Pju4aZ5VRVSXYNy%2BjLEv5wmPriuV36G34rqr4iapaRC%2FQMMf9wsMGOqUB3tgt3Yy%2FgIVri3ruHrPi%2BtmcPXwPhEEunF3Kpfbdb8z2w8kMdx6Sbl6j4HS6c2YkMDtj2%2FKm5EGRqzG26nlUj3FXHY6Xab2y9di6RbLeu05EM%2BOznBtMWv2%2BwVvg9%2Fd6Rlkz8xAZBpZgE4%2BsT1eRl6aZef6YmSbT0ZGElPDRhTCGJ4sGpk1pmUYH0fv9YwrD2NVdyZ74woBRlbsTYKzpBpIQJIov&X-Amz-Signature=2f7c598b5aff56afe9865dda36045f82de5ac46431013551a9c9a9a697d647cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSZ7HMUB%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCflDNWhPiDcXPc7GlTPmlv3eC%2Fzuuk3%2FgLTbLtGZtemwIgMbaxz%2B4DqI7u%2Fy7z1PnaJgMAHL%2BZntLTo5XmldY1UrIqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITutPYZyrxP9NjDqCrcA0e5PIUx25OWk9%2FbVGralaVfU5J9u0AcaWgWEf3qozzn%2BGkFXqK4jOJNfUB1eDBQtfgW4lHO2mDeziKigtksw2%2BlwdJTFiTUGV%2FVsyXe%2BI0kooxygvibnkBmszg69qMaTocVPe%2FEedj3CB9RNH3mmdZ4HVe1a%2BktC3fGMQarWQ1T4krHDBKpfcTghiyqDrIfnskUA1VxCNJvjHHyvrBBG3TXbXEvjoqweFb3WKoJuYgj3BVXj9Fd%2FuE3ymnZQ2ys8I%2BBPC%2Fouf9urt1QJ7yNjorUKtBLqBop2qvZZNgX1NMTXNcXtToUlw8UJwKS9NiP72o39RFU7xeGsPZOLaTc2aAqWIrlJUTUgXS3qTuHmDgSURMygWId3AzUaZU0rvZCmqYbDQXY52FFO2XqtBeiAxYSZ2EDornZBhiE7hUHsj6ns0oAknZ4jCXhOjEEogLmiYHCqZv4amGgHWup7wfXmj5MQKS5fnN44h1%2FAjaowrmkEHwg0BtQU19Os8mgsBhszxIKZ6KHLpsSnnOrT1do4abP6EzgGi%2FMXL2RQbpu8NOaqvrue1fWWlQLK2Kak4Z8xeWR9sBFAMW0az8Pju4aZ5VRVSXYNy%2BjLEv5wmPriuV36G34rqr4iapaRC%2FQMMf9wsMGOqUB3tgt3Yy%2FgIVri3ruHrPi%2BtmcPXwPhEEunF3Kpfbdb8z2w8kMdx6Sbl6j4HS6c2YkMDtj2%2FKm5EGRqzG26nlUj3FXHY6Xab2y9di6RbLeu05EM%2BOznBtMWv2%2BwVvg9%2Fd6Rlkz8xAZBpZgE4%2BsT1eRl6aZef6YmSbT0ZGElPDRhTCGJ4sGpk1pmUYH0fv9YwrD2NVdyZ74woBRlbsTYKzpBpIQJIov&X-Amz-Signature=89016fad6716256a84a0334730899cd2bc8149676cc4ddc99a7b0f73248fbe09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSZ7HMUB%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCflDNWhPiDcXPc7GlTPmlv3eC%2Fzuuk3%2FgLTbLtGZtemwIgMbaxz%2B4DqI7u%2Fy7z1PnaJgMAHL%2BZntLTo5XmldY1UrIqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITutPYZyrxP9NjDqCrcA0e5PIUx25OWk9%2FbVGralaVfU5J9u0AcaWgWEf3qozzn%2BGkFXqK4jOJNfUB1eDBQtfgW4lHO2mDeziKigtksw2%2BlwdJTFiTUGV%2FVsyXe%2BI0kooxygvibnkBmszg69qMaTocVPe%2FEedj3CB9RNH3mmdZ4HVe1a%2BktC3fGMQarWQ1T4krHDBKpfcTghiyqDrIfnskUA1VxCNJvjHHyvrBBG3TXbXEvjoqweFb3WKoJuYgj3BVXj9Fd%2FuE3ymnZQ2ys8I%2BBPC%2Fouf9urt1QJ7yNjorUKtBLqBop2qvZZNgX1NMTXNcXtToUlw8UJwKS9NiP72o39RFU7xeGsPZOLaTc2aAqWIrlJUTUgXS3qTuHmDgSURMygWId3AzUaZU0rvZCmqYbDQXY52FFO2XqtBeiAxYSZ2EDornZBhiE7hUHsj6ns0oAknZ4jCXhOjEEogLmiYHCqZv4amGgHWup7wfXmj5MQKS5fnN44h1%2FAjaowrmkEHwg0BtQU19Os8mgsBhszxIKZ6KHLpsSnnOrT1do4abP6EzgGi%2FMXL2RQbpu8NOaqvrue1fWWlQLK2Kak4Z8xeWR9sBFAMW0az8Pju4aZ5VRVSXYNy%2BjLEv5wmPriuV36G34rqr4iapaRC%2FQMMf9wsMGOqUB3tgt3Yy%2FgIVri3ruHrPi%2BtmcPXwPhEEunF3Kpfbdb8z2w8kMdx6Sbl6j4HS6c2YkMDtj2%2FKm5EGRqzG26nlUj3FXHY6Xab2y9di6RbLeu05EM%2BOznBtMWv2%2BwVvg9%2Fd6Rlkz8xAZBpZgE4%2BsT1eRl6aZef6YmSbT0ZGElPDRhTCGJ4sGpk1pmUYH0fv9YwrD2NVdyZ74woBRlbsTYKzpBpIQJIov&X-Amz-Signature=fbbaf3ea965116ccd8e82fe471a98b31c254d574048e6dcbfaf2b21da0b25b67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSZ7HMUB%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCflDNWhPiDcXPc7GlTPmlv3eC%2Fzuuk3%2FgLTbLtGZtemwIgMbaxz%2B4DqI7u%2Fy7z1PnaJgMAHL%2BZntLTo5XmldY1UrIqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITutPYZyrxP9NjDqCrcA0e5PIUx25OWk9%2FbVGralaVfU5J9u0AcaWgWEf3qozzn%2BGkFXqK4jOJNfUB1eDBQtfgW4lHO2mDeziKigtksw2%2BlwdJTFiTUGV%2FVsyXe%2BI0kooxygvibnkBmszg69qMaTocVPe%2FEedj3CB9RNH3mmdZ4HVe1a%2BktC3fGMQarWQ1T4krHDBKpfcTghiyqDrIfnskUA1VxCNJvjHHyvrBBG3TXbXEvjoqweFb3WKoJuYgj3BVXj9Fd%2FuE3ymnZQ2ys8I%2BBPC%2Fouf9urt1QJ7yNjorUKtBLqBop2qvZZNgX1NMTXNcXtToUlw8UJwKS9NiP72o39RFU7xeGsPZOLaTc2aAqWIrlJUTUgXS3qTuHmDgSURMygWId3AzUaZU0rvZCmqYbDQXY52FFO2XqtBeiAxYSZ2EDornZBhiE7hUHsj6ns0oAknZ4jCXhOjEEogLmiYHCqZv4amGgHWup7wfXmj5MQKS5fnN44h1%2FAjaowrmkEHwg0BtQU19Os8mgsBhszxIKZ6KHLpsSnnOrT1do4abP6EzgGi%2FMXL2RQbpu8NOaqvrue1fWWlQLK2Kak4Z8xeWR9sBFAMW0az8Pju4aZ5VRVSXYNy%2BjLEv5wmPriuV36G34rqr4iapaRC%2FQMMf9wsMGOqUB3tgt3Yy%2FgIVri3ruHrPi%2BtmcPXwPhEEunF3Kpfbdb8z2w8kMdx6Sbl6j4HS6c2YkMDtj2%2FKm5EGRqzG26nlUj3FXHY6Xab2y9di6RbLeu05EM%2BOznBtMWv2%2BwVvg9%2Fd6Rlkz8xAZBpZgE4%2BsT1eRl6aZef6YmSbT0ZGElPDRhTCGJ4sGpk1pmUYH0fv9YwrD2NVdyZ74woBRlbsTYKzpBpIQJIov&X-Amz-Signature=fb0f00570943654e5e85387c8098c370e37ed9cd9dc892cd56c713b0ec891c04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSZ7HMUB%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCflDNWhPiDcXPc7GlTPmlv3eC%2Fzuuk3%2FgLTbLtGZtemwIgMbaxz%2B4DqI7u%2Fy7z1PnaJgMAHL%2BZntLTo5XmldY1UrIqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITutPYZyrxP9NjDqCrcA0e5PIUx25OWk9%2FbVGralaVfU5J9u0AcaWgWEf3qozzn%2BGkFXqK4jOJNfUB1eDBQtfgW4lHO2mDeziKigtksw2%2BlwdJTFiTUGV%2FVsyXe%2BI0kooxygvibnkBmszg69qMaTocVPe%2FEedj3CB9RNH3mmdZ4HVe1a%2BktC3fGMQarWQ1T4krHDBKpfcTghiyqDrIfnskUA1VxCNJvjHHyvrBBG3TXbXEvjoqweFb3WKoJuYgj3BVXj9Fd%2FuE3ymnZQ2ys8I%2BBPC%2Fouf9urt1QJ7yNjorUKtBLqBop2qvZZNgX1NMTXNcXtToUlw8UJwKS9NiP72o39RFU7xeGsPZOLaTc2aAqWIrlJUTUgXS3qTuHmDgSURMygWId3AzUaZU0rvZCmqYbDQXY52FFO2XqtBeiAxYSZ2EDornZBhiE7hUHsj6ns0oAknZ4jCXhOjEEogLmiYHCqZv4amGgHWup7wfXmj5MQKS5fnN44h1%2FAjaowrmkEHwg0BtQU19Os8mgsBhszxIKZ6KHLpsSnnOrT1do4abP6EzgGi%2FMXL2RQbpu8NOaqvrue1fWWlQLK2Kak4Z8xeWR9sBFAMW0az8Pju4aZ5VRVSXYNy%2BjLEv5wmPriuV36G34rqr4iapaRC%2FQMMf9wsMGOqUB3tgt3Yy%2FgIVri3ruHrPi%2BtmcPXwPhEEunF3Kpfbdb8z2w8kMdx6Sbl6j4HS6c2YkMDtj2%2FKm5EGRqzG26nlUj3FXHY6Xab2y9di6RbLeu05EM%2BOznBtMWv2%2BwVvg9%2Fd6Rlkz8xAZBpZgE4%2BsT1eRl6aZef6YmSbT0ZGElPDRhTCGJ4sGpk1pmUYH0fv9YwrD2NVdyZ74woBRlbsTYKzpBpIQJIov&X-Amz-Signature=23dff3dd82761e96328cdbab54f6d8559a664bdfa18f7f52aa8abbd118829e12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSZ7HMUB%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCflDNWhPiDcXPc7GlTPmlv3eC%2Fzuuk3%2FgLTbLtGZtemwIgMbaxz%2B4DqI7u%2Fy7z1PnaJgMAHL%2BZntLTo5XmldY1UrIqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITutPYZyrxP9NjDqCrcA0e5PIUx25OWk9%2FbVGralaVfU5J9u0AcaWgWEf3qozzn%2BGkFXqK4jOJNfUB1eDBQtfgW4lHO2mDeziKigtksw2%2BlwdJTFiTUGV%2FVsyXe%2BI0kooxygvibnkBmszg69qMaTocVPe%2FEedj3CB9RNH3mmdZ4HVe1a%2BktC3fGMQarWQ1T4krHDBKpfcTghiyqDrIfnskUA1VxCNJvjHHyvrBBG3TXbXEvjoqweFb3WKoJuYgj3BVXj9Fd%2FuE3ymnZQ2ys8I%2BBPC%2Fouf9urt1QJ7yNjorUKtBLqBop2qvZZNgX1NMTXNcXtToUlw8UJwKS9NiP72o39RFU7xeGsPZOLaTc2aAqWIrlJUTUgXS3qTuHmDgSURMygWId3AzUaZU0rvZCmqYbDQXY52FFO2XqtBeiAxYSZ2EDornZBhiE7hUHsj6ns0oAknZ4jCXhOjEEogLmiYHCqZv4amGgHWup7wfXmj5MQKS5fnN44h1%2FAjaowrmkEHwg0BtQU19Os8mgsBhszxIKZ6KHLpsSnnOrT1do4abP6EzgGi%2FMXL2RQbpu8NOaqvrue1fWWlQLK2Kak4Z8xeWR9sBFAMW0az8Pju4aZ5VRVSXYNy%2BjLEv5wmPriuV36G34rqr4iapaRC%2FQMMf9wsMGOqUB3tgt3Yy%2FgIVri3ruHrPi%2BtmcPXwPhEEunF3Kpfbdb8z2w8kMdx6Sbl6j4HS6c2YkMDtj2%2FKm5EGRqzG26nlUj3FXHY6Xab2y9di6RbLeu05EM%2BOznBtMWv2%2BwVvg9%2Fd6Rlkz8xAZBpZgE4%2BsT1eRl6aZef6YmSbT0ZGElPDRhTCGJ4sGpk1pmUYH0fv9YwrD2NVdyZ74woBRlbsTYKzpBpIQJIov&X-Amz-Signature=9e16c1c040261a718724d6650e7f7608eb9e7c98010d799611a9e2679f2041f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
