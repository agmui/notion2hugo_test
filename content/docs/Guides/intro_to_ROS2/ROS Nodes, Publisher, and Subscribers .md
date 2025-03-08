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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5XFM47N%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T230140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEA0PWdbENWef01t%2FXVo4LvvVZ%2Bx%2B%2Btae28r1n4avcAAAiEA75JBC1y0GZ2%2FnXr6g2j5VjQuDQr8JQisf3EHQEfcUQ0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDJI3HNAEI7jqFPhcCCrcA0IQzP%2BBiiGb5R9CEPYbBy7XnHmQ0%2FmTKZgaMqOlvQQ7HKQOI9lHUw2qzmS0hbdXYIKzgPrKe2zfX1dS3VqENdeHhnnT%2BG7b90UvxttSvBPhWmsM9b8BsARErJXKb132VZ%2FdhqbeHXwSyj71%2BF6BtFlvvEZTCpZ1afJms%2FFKl56noUnxSJKN%2B2ByGQtFKrnV0P1YjtMcQhAivh%2FZq0fsEvknRWV6wutFDy6xExd3mmRw37xDccuwEAdryKzlGhinMteMiJWy7KFWUDHhsUbRXovLz9EkVlfEahtQIDW3ok49ylnObAWbS0HNJhLc53RtUtLLdoIAHQRR3pB%2FvJnJSM8Y51t0sLgl%2Fdui7n3KiMqdtFvRNjPRBRqlcrmLV4a02qqnNrBAfSQzgmLSoScqy4K3umsrVli1QVIIx6yxSygCaE5dsuR40bYDOYMLm1MwNAUcMUvEkzyj0w7mMKzK2y1Cd%2FlmryLCc8aFCgaIOTMfwK70HrFEc1UiE5v3bHSyXc9t5RbG%2Bue4C6oQYRZ42bXYrMptl29lp4d%2BGZJa8f3J%2F6%2BX81GtblsNLPE5Olwgl2mZFeVnHBucwtbbtrV5EABU%2B5ChwEPagceKJY1a2XgiGSMHlDLVcEYw12x5MKbzsr4GOqUBrdqeR3ZklOniOM%2BI%2BSrdxpuVWgJN8ONpk5qpHQA35z92H4IGoetHatdRPt2%2F1IhS6fEpSfoeqRqzJhR%2FqAiUx6wLj%2FshZOUzH%2F9ghEIWA2R2wfk0yRGsLTJS%2BAO4L1zdIx5BQ%2FtwUNAeA7sk2lirZz4JchUmJxF4YwJIrjy9148UAM%2BYt8RuyFuXEPOrBiKNi9ld1us8gCOHkmLRMqSEZAtR7ibV&X-Amz-Signature=6b32363c262a0e2b5605cea5f8906d90617ab45a1e4a6a693f086d7258c47521&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5XFM47N%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T230140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEA0PWdbENWef01t%2FXVo4LvvVZ%2Bx%2B%2Btae28r1n4avcAAAiEA75JBC1y0GZ2%2FnXr6g2j5VjQuDQr8JQisf3EHQEfcUQ0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDJI3HNAEI7jqFPhcCCrcA0IQzP%2BBiiGb5R9CEPYbBy7XnHmQ0%2FmTKZgaMqOlvQQ7HKQOI9lHUw2qzmS0hbdXYIKzgPrKe2zfX1dS3VqENdeHhnnT%2BG7b90UvxttSvBPhWmsM9b8BsARErJXKb132VZ%2FdhqbeHXwSyj71%2BF6BtFlvvEZTCpZ1afJms%2FFKl56noUnxSJKN%2B2ByGQtFKrnV0P1YjtMcQhAivh%2FZq0fsEvknRWV6wutFDy6xExd3mmRw37xDccuwEAdryKzlGhinMteMiJWy7KFWUDHhsUbRXovLz9EkVlfEahtQIDW3ok49ylnObAWbS0HNJhLc53RtUtLLdoIAHQRR3pB%2FvJnJSM8Y51t0sLgl%2Fdui7n3KiMqdtFvRNjPRBRqlcrmLV4a02qqnNrBAfSQzgmLSoScqy4K3umsrVli1QVIIx6yxSygCaE5dsuR40bYDOYMLm1MwNAUcMUvEkzyj0w7mMKzK2y1Cd%2FlmryLCc8aFCgaIOTMfwK70HrFEc1UiE5v3bHSyXc9t5RbG%2Bue4C6oQYRZ42bXYrMptl29lp4d%2BGZJa8f3J%2F6%2BX81GtblsNLPE5Olwgl2mZFeVnHBucwtbbtrV5EABU%2B5ChwEPagceKJY1a2XgiGSMHlDLVcEYw12x5MKbzsr4GOqUBrdqeR3ZklOniOM%2BI%2BSrdxpuVWgJN8ONpk5qpHQA35z92H4IGoetHatdRPt2%2F1IhS6fEpSfoeqRqzJhR%2FqAiUx6wLj%2FshZOUzH%2F9ghEIWA2R2wfk0yRGsLTJS%2BAO4L1zdIx5BQ%2FtwUNAeA7sk2lirZz4JchUmJxF4YwJIrjy9148UAM%2BYt8RuyFuXEPOrBiKNi9ld1us8gCOHkmLRMqSEZAtR7ibV&X-Amz-Signature=e14acf640c399811b9c1f1fa35f9a91ca92a96cf2d0d80ce73e2f49f2cb2dae2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5XFM47N%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T230140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEA0PWdbENWef01t%2FXVo4LvvVZ%2Bx%2B%2Btae28r1n4avcAAAiEA75JBC1y0GZ2%2FnXr6g2j5VjQuDQr8JQisf3EHQEfcUQ0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDJI3HNAEI7jqFPhcCCrcA0IQzP%2BBiiGb5R9CEPYbBy7XnHmQ0%2FmTKZgaMqOlvQQ7HKQOI9lHUw2qzmS0hbdXYIKzgPrKe2zfX1dS3VqENdeHhnnT%2BG7b90UvxttSvBPhWmsM9b8BsARErJXKb132VZ%2FdhqbeHXwSyj71%2BF6BtFlvvEZTCpZ1afJms%2FFKl56noUnxSJKN%2B2ByGQtFKrnV0P1YjtMcQhAivh%2FZq0fsEvknRWV6wutFDy6xExd3mmRw37xDccuwEAdryKzlGhinMteMiJWy7KFWUDHhsUbRXovLz9EkVlfEahtQIDW3ok49ylnObAWbS0HNJhLc53RtUtLLdoIAHQRR3pB%2FvJnJSM8Y51t0sLgl%2Fdui7n3KiMqdtFvRNjPRBRqlcrmLV4a02qqnNrBAfSQzgmLSoScqy4K3umsrVli1QVIIx6yxSygCaE5dsuR40bYDOYMLm1MwNAUcMUvEkzyj0w7mMKzK2y1Cd%2FlmryLCc8aFCgaIOTMfwK70HrFEc1UiE5v3bHSyXc9t5RbG%2Bue4C6oQYRZ42bXYrMptl29lp4d%2BGZJa8f3J%2F6%2BX81GtblsNLPE5Olwgl2mZFeVnHBucwtbbtrV5EABU%2B5ChwEPagceKJY1a2XgiGSMHlDLVcEYw12x5MKbzsr4GOqUBrdqeR3ZklOniOM%2BI%2BSrdxpuVWgJN8ONpk5qpHQA35z92H4IGoetHatdRPt2%2F1IhS6fEpSfoeqRqzJhR%2FqAiUx6wLj%2FshZOUzH%2F9ghEIWA2R2wfk0yRGsLTJS%2BAO4L1zdIx5BQ%2FtwUNAeA7sk2lirZz4JchUmJxF4YwJIrjy9148UAM%2BYt8RuyFuXEPOrBiKNi9ld1us8gCOHkmLRMqSEZAtR7ibV&X-Amz-Signature=4529a4292fad87ae91ef679bcc2f89ce778cbf95705c5dcb5dce9ef1dd309060&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5XFM47N%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T230140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEA0PWdbENWef01t%2FXVo4LvvVZ%2Bx%2B%2Btae28r1n4avcAAAiEA75JBC1y0GZ2%2FnXr6g2j5VjQuDQr8JQisf3EHQEfcUQ0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDJI3HNAEI7jqFPhcCCrcA0IQzP%2BBiiGb5R9CEPYbBy7XnHmQ0%2FmTKZgaMqOlvQQ7HKQOI9lHUw2qzmS0hbdXYIKzgPrKe2zfX1dS3VqENdeHhnnT%2BG7b90UvxttSvBPhWmsM9b8BsARErJXKb132VZ%2FdhqbeHXwSyj71%2BF6BtFlvvEZTCpZ1afJms%2FFKl56noUnxSJKN%2B2ByGQtFKrnV0P1YjtMcQhAivh%2FZq0fsEvknRWV6wutFDy6xExd3mmRw37xDccuwEAdryKzlGhinMteMiJWy7KFWUDHhsUbRXovLz9EkVlfEahtQIDW3ok49ylnObAWbS0HNJhLc53RtUtLLdoIAHQRR3pB%2FvJnJSM8Y51t0sLgl%2Fdui7n3KiMqdtFvRNjPRBRqlcrmLV4a02qqnNrBAfSQzgmLSoScqy4K3umsrVli1QVIIx6yxSygCaE5dsuR40bYDOYMLm1MwNAUcMUvEkzyj0w7mMKzK2y1Cd%2FlmryLCc8aFCgaIOTMfwK70HrFEc1UiE5v3bHSyXc9t5RbG%2Bue4C6oQYRZ42bXYrMptl29lp4d%2BGZJa8f3J%2F6%2BX81GtblsNLPE5Olwgl2mZFeVnHBucwtbbtrV5EABU%2B5ChwEPagceKJY1a2XgiGSMHlDLVcEYw12x5MKbzsr4GOqUBrdqeR3ZklOniOM%2BI%2BSrdxpuVWgJN8ONpk5qpHQA35z92H4IGoetHatdRPt2%2F1IhS6fEpSfoeqRqzJhR%2FqAiUx6wLj%2FshZOUzH%2F9ghEIWA2R2wfk0yRGsLTJS%2BAO4L1zdIx5BQ%2FtwUNAeA7sk2lirZz4JchUmJxF4YwJIrjy9148UAM%2BYt8RuyFuXEPOrBiKNi9ld1us8gCOHkmLRMqSEZAtR7ibV&X-Amz-Signature=044bbe3e0f2c2004bbf995583b1039ecc61c254494202a90f0267a35e5a1c94d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5XFM47N%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T230140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEA0PWdbENWef01t%2FXVo4LvvVZ%2Bx%2B%2Btae28r1n4avcAAAiEA75JBC1y0GZ2%2FnXr6g2j5VjQuDQr8JQisf3EHQEfcUQ0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDJI3HNAEI7jqFPhcCCrcA0IQzP%2BBiiGb5R9CEPYbBy7XnHmQ0%2FmTKZgaMqOlvQQ7HKQOI9lHUw2qzmS0hbdXYIKzgPrKe2zfX1dS3VqENdeHhnnT%2BG7b90UvxttSvBPhWmsM9b8BsARErJXKb132VZ%2FdhqbeHXwSyj71%2BF6BtFlvvEZTCpZ1afJms%2FFKl56noUnxSJKN%2B2ByGQtFKrnV0P1YjtMcQhAivh%2FZq0fsEvknRWV6wutFDy6xExd3mmRw37xDccuwEAdryKzlGhinMteMiJWy7KFWUDHhsUbRXovLz9EkVlfEahtQIDW3ok49ylnObAWbS0HNJhLc53RtUtLLdoIAHQRR3pB%2FvJnJSM8Y51t0sLgl%2Fdui7n3KiMqdtFvRNjPRBRqlcrmLV4a02qqnNrBAfSQzgmLSoScqy4K3umsrVli1QVIIx6yxSygCaE5dsuR40bYDOYMLm1MwNAUcMUvEkzyj0w7mMKzK2y1Cd%2FlmryLCc8aFCgaIOTMfwK70HrFEc1UiE5v3bHSyXc9t5RbG%2Bue4C6oQYRZ42bXYrMptl29lp4d%2BGZJa8f3J%2F6%2BX81GtblsNLPE5Olwgl2mZFeVnHBucwtbbtrV5EABU%2B5ChwEPagceKJY1a2XgiGSMHlDLVcEYw12x5MKbzsr4GOqUBrdqeR3ZklOniOM%2BI%2BSrdxpuVWgJN8ONpk5qpHQA35z92H4IGoetHatdRPt2%2F1IhS6fEpSfoeqRqzJhR%2FqAiUx6wLj%2FshZOUzH%2F9ghEIWA2R2wfk0yRGsLTJS%2BAO4L1zdIx5BQ%2FtwUNAeA7sk2lirZz4JchUmJxF4YwJIrjy9148UAM%2BYt8RuyFuXEPOrBiKNi9ld1us8gCOHkmLRMqSEZAtR7ibV&X-Amz-Signature=33012b923e60e4d716e39dae34f2925399a811c4250a599dab49cbb08e16d5a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5XFM47N%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T230140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEA0PWdbENWef01t%2FXVo4LvvVZ%2Bx%2B%2Btae28r1n4avcAAAiEA75JBC1y0GZ2%2FnXr6g2j5VjQuDQr8JQisf3EHQEfcUQ0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDJI3HNAEI7jqFPhcCCrcA0IQzP%2BBiiGb5R9CEPYbBy7XnHmQ0%2FmTKZgaMqOlvQQ7HKQOI9lHUw2qzmS0hbdXYIKzgPrKe2zfX1dS3VqENdeHhnnT%2BG7b90UvxttSvBPhWmsM9b8BsARErJXKb132VZ%2FdhqbeHXwSyj71%2BF6BtFlvvEZTCpZ1afJms%2FFKl56noUnxSJKN%2B2ByGQtFKrnV0P1YjtMcQhAivh%2FZq0fsEvknRWV6wutFDy6xExd3mmRw37xDccuwEAdryKzlGhinMteMiJWy7KFWUDHhsUbRXovLz9EkVlfEahtQIDW3ok49ylnObAWbS0HNJhLc53RtUtLLdoIAHQRR3pB%2FvJnJSM8Y51t0sLgl%2Fdui7n3KiMqdtFvRNjPRBRqlcrmLV4a02qqnNrBAfSQzgmLSoScqy4K3umsrVli1QVIIx6yxSygCaE5dsuR40bYDOYMLm1MwNAUcMUvEkzyj0w7mMKzK2y1Cd%2FlmryLCc8aFCgaIOTMfwK70HrFEc1UiE5v3bHSyXc9t5RbG%2Bue4C6oQYRZ42bXYrMptl29lp4d%2BGZJa8f3J%2F6%2BX81GtblsNLPE5Olwgl2mZFeVnHBucwtbbtrV5EABU%2B5ChwEPagceKJY1a2XgiGSMHlDLVcEYw12x5MKbzsr4GOqUBrdqeR3ZklOniOM%2BI%2BSrdxpuVWgJN8ONpk5qpHQA35z92H4IGoetHatdRPt2%2F1IhS6fEpSfoeqRqzJhR%2FqAiUx6wLj%2FshZOUzH%2F9ghEIWA2R2wfk0yRGsLTJS%2BAO4L1zdIx5BQ%2FtwUNAeA7sk2lirZz4JchUmJxF4YwJIrjy9148UAM%2BYt8RuyFuXEPOrBiKNi9ld1us8gCOHkmLRMqSEZAtR7ibV&X-Amz-Signature=2c21ec5318a1f6ab204267fa003ce2eef2b1be5ae34b1921dd1851515036c96b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5XFM47N%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T230140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEA0PWdbENWef01t%2FXVo4LvvVZ%2Bx%2B%2Btae28r1n4avcAAAiEA75JBC1y0GZ2%2FnXr6g2j5VjQuDQr8JQisf3EHQEfcUQ0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDJI3HNAEI7jqFPhcCCrcA0IQzP%2BBiiGb5R9CEPYbBy7XnHmQ0%2FmTKZgaMqOlvQQ7HKQOI9lHUw2qzmS0hbdXYIKzgPrKe2zfX1dS3VqENdeHhnnT%2BG7b90UvxttSvBPhWmsM9b8BsARErJXKb132VZ%2FdhqbeHXwSyj71%2BF6BtFlvvEZTCpZ1afJms%2FFKl56noUnxSJKN%2B2ByGQtFKrnV0P1YjtMcQhAivh%2FZq0fsEvknRWV6wutFDy6xExd3mmRw37xDccuwEAdryKzlGhinMteMiJWy7KFWUDHhsUbRXovLz9EkVlfEahtQIDW3ok49ylnObAWbS0HNJhLc53RtUtLLdoIAHQRR3pB%2FvJnJSM8Y51t0sLgl%2Fdui7n3KiMqdtFvRNjPRBRqlcrmLV4a02qqnNrBAfSQzgmLSoScqy4K3umsrVli1QVIIx6yxSygCaE5dsuR40bYDOYMLm1MwNAUcMUvEkzyj0w7mMKzK2y1Cd%2FlmryLCc8aFCgaIOTMfwK70HrFEc1UiE5v3bHSyXc9t5RbG%2Bue4C6oQYRZ42bXYrMptl29lp4d%2BGZJa8f3J%2F6%2BX81GtblsNLPE5Olwgl2mZFeVnHBucwtbbtrV5EABU%2B5ChwEPagceKJY1a2XgiGSMHlDLVcEYw12x5MKbzsr4GOqUBrdqeR3ZklOniOM%2BI%2BSrdxpuVWgJN8ONpk5qpHQA35z92H4IGoetHatdRPt2%2F1IhS6fEpSfoeqRqzJhR%2FqAiUx6wLj%2FshZOUzH%2F9ghEIWA2R2wfk0yRGsLTJS%2BAO4L1zdIx5BQ%2FtwUNAeA7sk2lirZz4JchUmJxF4YwJIrjy9148UAM%2BYt8RuyFuXEPOrBiKNi9ld1us8gCOHkmLRMqSEZAtR7ibV&X-Amz-Signature=6f139dbe863020fb81f02caeda265639d066a33b8af81ef6d068ad68badd118f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5XFM47N%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T230140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEA0PWdbENWef01t%2FXVo4LvvVZ%2Bx%2B%2Btae28r1n4avcAAAiEA75JBC1y0GZ2%2FnXr6g2j5VjQuDQr8JQisf3EHQEfcUQ0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDJI3HNAEI7jqFPhcCCrcA0IQzP%2BBiiGb5R9CEPYbBy7XnHmQ0%2FmTKZgaMqOlvQQ7HKQOI9lHUw2qzmS0hbdXYIKzgPrKe2zfX1dS3VqENdeHhnnT%2BG7b90UvxttSvBPhWmsM9b8BsARErJXKb132VZ%2FdhqbeHXwSyj71%2BF6BtFlvvEZTCpZ1afJms%2FFKl56noUnxSJKN%2B2ByGQtFKrnV0P1YjtMcQhAivh%2FZq0fsEvknRWV6wutFDy6xExd3mmRw37xDccuwEAdryKzlGhinMteMiJWy7KFWUDHhsUbRXovLz9EkVlfEahtQIDW3ok49ylnObAWbS0HNJhLc53RtUtLLdoIAHQRR3pB%2FvJnJSM8Y51t0sLgl%2Fdui7n3KiMqdtFvRNjPRBRqlcrmLV4a02qqnNrBAfSQzgmLSoScqy4K3umsrVli1QVIIx6yxSygCaE5dsuR40bYDOYMLm1MwNAUcMUvEkzyj0w7mMKzK2y1Cd%2FlmryLCc8aFCgaIOTMfwK70HrFEc1UiE5v3bHSyXc9t5RbG%2Bue4C6oQYRZ42bXYrMptl29lp4d%2BGZJa8f3J%2F6%2BX81GtblsNLPE5Olwgl2mZFeVnHBucwtbbtrV5EABU%2B5ChwEPagceKJY1a2XgiGSMHlDLVcEYw12x5MKbzsr4GOqUBrdqeR3ZklOniOM%2BI%2BSrdxpuVWgJN8ONpk5qpHQA35z92H4IGoetHatdRPt2%2F1IhS6fEpSfoeqRqzJhR%2FqAiUx6wLj%2FshZOUzH%2F9ghEIWA2R2wfk0yRGsLTJS%2BAO4L1zdIx5BQ%2FtwUNAeA7sk2lirZz4JchUmJxF4YwJIrjy9148UAM%2BYt8RuyFuXEPOrBiKNi9ld1us8gCOHkmLRMqSEZAtR7ibV&X-Amz-Signature=8ec033f52d1615bc4a52b0702f7e1a1ec8b44dad26c23f305c189f67923f9f68&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
