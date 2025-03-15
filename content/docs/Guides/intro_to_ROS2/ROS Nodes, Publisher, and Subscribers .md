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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS4R32AR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPWNu9N57U2CT14p3GhV%2B4fM%2F0UhLHzAuLzuARJAuAxwIgG4rR1gknNR3wpSF56KWFszOoEaP3KE1aexEGtit7MGkqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA55bLh29KCceKXIhCrcA1W3v%2F5hP8RLVMa5eSnzhTWa4xRmgmhPHpXiV4bga45aVPfIHCY8A7YxqkahTbpYFCUhSg7D%2BUikNkqbxtHIRgw5ofSO8xg%2BUoU8PjupghxT0o9sADd7ch3uBLwQVg5J2%2BOacsN1jOCOCZ3HmVNa5I45NRhGXIJ02I31PbOMHROQIXvHHWxrfaldfw1bdxxp3CDi3kddKdoF2EYgFJX1CQLI0bxK%2Bkpgg85dgAsvba%2F89bV9IJRWEuL76ZKS%2B9GhoZRD80ZFdXo0pJWXG%2FbSfPhjLUM%2Fq2Uk2jZfy2nsFG4ZH6iRCdn5CWdjEzTgQh2RLmAoHSCxw5HMTSVDMhOSoPwEq7FfJV%2FDDcwSXgbzhCW6PiJNqEiXVNKkhpM5HnmZxCj9z9lCqH9uBTwtOb4jkqWzjPX8d4%2BBMlxOLBQ7Fe1cMHMLVtDJsAxfQOkLRVc64qHJv13%2FkToVeW0RygDHwQov0Ayxi6h4C4yMaKmXjINDOOdg8%2FgByhlYFCKPSOfdwPJSKTGs1%2BdYvHWnxmBUca7fVRbNyWS%2FZtGyZOnKiQ0Ws%2FmxysXgjrzzWPjet9Nv4pUTNT8tqj20kZitTF7ID80v8INQ9%2BGfhwDDiwXpHRJ8fNLg7DG3bxOuqi%2B3MNPo074GOqUBJBsyFQR8silRWDXGuTTZhxdVrgZslBwadFTxIecY%2BVk%2BwSXstL4bfVEOrQ5l7t0m5bDy5wbrwgvVRcoJmiBpEf2s0GI9CoPk2yux%2BtuzPo1%2Fck3nhgYRtvL%2FWagYCaH1j9IZbBdMibULdgb%2B6qv1hmX7NYIzHidMSO13eGz747fQuyQk%2FB1juODbKSirwGQgcSzCNGqIlzQsc5U%2BT90wM8kkYqjP&X-Amz-Signature=27855d4dac806a4a3873b82b9cad9da194b0f7aa7d6235808bed7325943a3fff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS4R32AR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPWNu9N57U2CT14p3GhV%2B4fM%2F0UhLHzAuLzuARJAuAxwIgG4rR1gknNR3wpSF56KWFszOoEaP3KE1aexEGtit7MGkqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA55bLh29KCceKXIhCrcA1W3v%2F5hP8RLVMa5eSnzhTWa4xRmgmhPHpXiV4bga45aVPfIHCY8A7YxqkahTbpYFCUhSg7D%2BUikNkqbxtHIRgw5ofSO8xg%2BUoU8PjupghxT0o9sADd7ch3uBLwQVg5J2%2BOacsN1jOCOCZ3HmVNa5I45NRhGXIJ02I31PbOMHROQIXvHHWxrfaldfw1bdxxp3CDi3kddKdoF2EYgFJX1CQLI0bxK%2Bkpgg85dgAsvba%2F89bV9IJRWEuL76ZKS%2B9GhoZRD80ZFdXo0pJWXG%2FbSfPhjLUM%2Fq2Uk2jZfy2nsFG4ZH6iRCdn5CWdjEzTgQh2RLmAoHSCxw5HMTSVDMhOSoPwEq7FfJV%2FDDcwSXgbzhCW6PiJNqEiXVNKkhpM5HnmZxCj9z9lCqH9uBTwtOb4jkqWzjPX8d4%2BBMlxOLBQ7Fe1cMHMLVtDJsAxfQOkLRVc64qHJv13%2FkToVeW0RygDHwQov0Ayxi6h4C4yMaKmXjINDOOdg8%2FgByhlYFCKPSOfdwPJSKTGs1%2BdYvHWnxmBUca7fVRbNyWS%2FZtGyZOnKiQ0Ws%2FmxysXgjrzzWPjet9Nv4pUTNT8tqj20kZitTF7ID80v8INQ9%2BGfhwDDiwXpHRJ8fNLg7DG3bxOuqi%2B3MNPo074GOqUBJBsyFQR8silRWDXGuTTZhxdVrgZslBwadFTxIecY%2BVk%2BwSXstL4bfVEOrQ5l7t0m5bDy5wbrwgvVRcoJmiBpEf2s0GI9CoPk2yux%2BtuzPo1%2Fck3nhgYRtvL%2FWagYCaH1j9IZbBdMibULdgb%2B6qv1hmX7NYIzHidMSO13eGz747fQuyQk%2FB1juODbKSirwGQgcSzCNGqIlzQsc5U%2BT90wM8kkYqjP&X-Amz-Signature=264b07b3594a07b15965a89794add76d8da6b7719fc7f2c03a9e7c713de13b3e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS4R32AR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPWNu9N57U2CT14p3GhV%2B4fM%2F0UhLHzAuLzuARJAuAxwIgG4rR1gknNR3wpSF56KWFszOoEaP3KE1aexEGtit7MGkqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA55bLh29KCceKXIhCrcA1W3v%2F5hP8RLVMa5eSnzhTWa4xRmgmhPHpXiV4bga45aVPfIHCY8A7YxqkahTbpYFCUhSg7D%2BUikNkqbxtHIRgw5ofSO8xg%2BUoU8PjupghxT0o9sADd7ch3uBLwQVg5J2%2BOacsN1jOCOCZ3HmVNa5I45NRhGXIJ02I31PbOMHROQIXvHHWxrfaldfw1bdxxp3CDi3kddKdoF2EYgFJX1CQLI0bxK%2Bkpgg85dgAsvba%2F89bV9IJRWEuL76ZKS%2B9GhoZRD80ZFdXo0pJWXG%2FbSfPhjLUM%2Fq2Uk2jZfy2nsFG4ZH6iRCdn5CWdjEzTgQh2RLmAoHSCxw5HMTSVDMhOSoPwEq7FfJV%2FDDcwSXgbzhCW6PiJNqEiXVNKkhpM5HnmZxCj9z9lCqH9uBTwtOb4jkqWzjPX8d4%2BBMlxOLBQ7Fe1cMHMLVtDJsAxfQOkLRVc64qHJv13%2FkToVeW0RygDHwQov0Ayxi6h4C4yMaKmXjINDOOdg8%2FgByhlYFCKPSOfdwPJSKTGs1%2BdYvHWnxmBUca7fVRbNyWS%2FZtGyZOnKiQ0Ws%2FmxysXgjrzzWPjet9Nv4pUTNT8tqj20kZitTF7ID80v8INQ9%2BGfhwDDiwXpHRJ8fNLg7DG3bxOuqi%2B3MNPo074GOqUBJBsyFQR8silRWDXGuTTZhxdVrgZslBwadFTxIecY%2BVk%2BwSXstL4bfVEOrQ5l7t0m5bDy5wbrwgvVRcoJmiBpEf2s0GI9CoPk2yux%2BtuzPo1%2Fck3nhgYRtvL%2FWagYCaH1j9IZbBdMibULdgb%2B6qv1hmX7NYIzHidMSO13eGz747fQuyQk%2FB1juODbKSirwGQgcSzCNGqIlzQsc5U%2BT90wM8kkYqjP&X-Amz-Signature=fa91cb796d1514204e52dbad6323fbd218deae5e42c683a2e5d86ad6f92987ef&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS4R32AR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPWNu9N57U2CT14p3GhV%2B4fM%2F0UhLHzAuLzuARJAuAxwIgG4rR1gknNR3wpSF56KWFszOoEaP3KE1aexEGtit7MGkqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA55bLh29KCceKXIhCrcA1W3v%2F5hP8RLVMa5eSnzhTWa4xRmgmhPHpXiV4bga45aVPfIHCY8A7YxqkahTbpYFCUhSg7D%2BUikNkqbxtHIRgw5ofSO8xg%2BUoU8PjupghxT0o9sADd7ch3uBLwQVg5J2%2BOacsN1jOCOCZ3HmVNa5I45NRhGXIJ02I31PbOMHROQIXvHHWxrfaldfw1bdxxp3CDi3kddKdoF2EYgFJX1CQLI0bxK%2Bkpgg85dgAsvba%2F89bV9IJRWEuL76ZKS%2B9GhoZRD80ZFdXo0pJWXG%2FbSfPhjLUM%2Fq2Uk2jZfy2nsFG4ZH6iRCdn5CWdjEzTgQh2RLmAoHSCxw5HMTSVDMhOSoPwEq7FfJV%2FDDcwSXgbzhCW6PiJNqEiXVNKkhpM5HnmZxCj9z9lCqH9uBTwtOb4jkqWzjPX8d4%2BBMlxOLBQ7Fe1cMHMLVtDJsAxfQOkLRVc64qHJv13%2FkToVeW0RygDHwQov0Ayxi6h4C4yMaKmXjINDOOdg8%2FgByhlYFCKPSOfdwPJSKTGs1%2BdYvHWnxmBUca7fVRbNyWS%2FZtGyZOnKiQ0Ws%2FmxysXgjrzzWPjet9Nv4pUTNT8tqj20kZitTF7ID80v8INQ9%2BGfhwDDiwXpHRJ8fNLg7DG3bxOuqi%2B3MNPo074GOqUBJBsyFQR8silRWDXGuTTZhxdVrgZslBwadFTxIecY%2BVk%2BwSXstL4bfVEOrQ5l7t0m5bDy5wbrwgvVRcoJmiBpEf2s0GI9CoPk2yux%2BtuzPo1%2Fck3nhgYRtvL%2FWagYCaH1j9IZbBdMibULdgb%2B6qv1hmX7NYIzHidMSO13eGz747fQuyQk%2FB1juODbKSirwGQgcSzCNGqIlzQsc5U%2BT90wM8kkYqjP&X-Amz-Signature=3e2f165d37a86d53b7609695e1b15d9228d7752540dfddb6919a42a6de7500b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS4R32AR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPWNu9N57U2CT14p3GhV%2B4fM%2F0UhLHzAuLzuARJAuAxwIgG4rR1gknNR3wpSF56KWFszOoEaP3KE1aexEGtit7MGkqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA55bLh29KCceKXIhCrcA1W3v%2F5hP8RLVMa5eSnzhTWa4xRmgmhPHpXiV4bga45aVPfIHCY8A7YxqkahTbpYFCUhSg7D%2BUikNkqbxtHIRgw5ofSO8xg%2BUoU8PjupghxT0o9sADd7ch3uBLwQVg5J2%2BOacsN1jOCOCZ3HmVNa5I45NRhGXIJ02I31PbOMHROQIXvHHWxrfaldfw1bdxxp3CDi3kddKdoF2EYgFJX1CQLI0bxK%2Bkpgg85dgAsvba%2F89bV9IJRWEuL76ZKS%2B9GhoZRD80ZFdXo0pJWXG%2FbSfPhjLUM%2Fq2Uk2jZfy2nsFG4ZH6iRCdn5CWdjEzTgQh2RLmAoHSCxw5HMTSVDMhOSoPwEq7FfJV%2FDDcwSXgbzhCW6PiJNqEiXVNKkhpM5HnmZxCj9z9lCqH9uBTwtOb4jkqWzjPX8d4%2BBMlxOLBQ7Fe1cMHMLVtDJsAxfQOkLRVc64qHJv13%2FkToVeW0RygDHwQov0Ayxi6h4C4yMaKmXjINDOOdg8%2FgByhlYFCKPSOfdwPJSKTGs1%2BdYvHWnxmBUca7fVRbNyWS%2FZtGyZOnKiQ0Ws%2FmxysXgjrzzWPjet9Nv4pUTNT8tqj20kZitTF7ID80v8INQ9%2BGfhwDDiwXpHRJ8fNLg7DG3bxOuqi%2B3MNPo074GOqUBJBsyFQR8silRWDXGuTTZhxdVrgZslBwadFTxIecY%2BVk%2BwSXstL4bfVEOrQ5l7t0m5bDy5wbrwgvVRcoJmiBpEf2s0GI9CoPk2yux%2BtuzPo1%2Fck3nhgYRtvL%2FWagYCaH1j9IZbBdMibULdgb%2B6qv1hmX7NYIzHidMSO13eGz747fQuyQk%2FB1juODbKSirwGQgcSzCNGqIlzQsc5U%2BT90wM8kkYqjP&X-Amz-Signature=f3577c84de49d478d6dd630c5493ccef2d6d95670b8bb1139501a3967b16ebd9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS4R32AR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPWNu9N57U2CT14p3GhV%2B4fM%2F0UhLHzAuLzuARJAuAxwIgG4rR1gknNR3wpSF56KWFszOoEaP3KE1aexEGtit7MGkqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA55bLh29KCceKXIhCrcA1W3v%2F5hP8RLVMa5eSnzhTWa4xRmgmhPHpXiV4bga45aVPfIHCY8A7YxqkahTbpYFCUhSg7D%2BUikNkqbxtHIRgw5ofSO8xg%2BUoU8PjupghxT0o9sADd7ch3uBLwQVg5J2%2BOacsN1jOCOCZ3HmVNa5I45NRhGXIJ02I31PbOMHROQIXvHHWxrfaldfw1bdxxp3CDi3kddKdoF2EYgFJX1CQLI0bxK%2Bkpgg85dgAsvba%2F89bV9IJRWEuL76ZKS%2B9GhoZRD80ZFdXo0pJWXG%2FbSfPhjLUM%2Fq2Uk2jZfy2nsFG4ZH6iRCdn5CWdjEzTgQh2RLmAoHSCxw5HMTSVDMhOSoPwEq7FfJV%2FDDcwSXgbzhCW6PiJNqEiXVNKkhpM5HnmZxCj9z9lCqH9uBTwtOb4jkqWzjPX8d4%2BBMlxOLBQ7Fe1cMHMLVtDJsAxfQOkLRVc64qHJv13%2FkToVeW0RygDHwQov0Ayxi6h4C4yMaKmXjINDOOdg8%2FgByhlYFCKPSOfdwPJSKTGs1%2BdYvHWnxmBUca7fVRbNyWS%2FZtGyZOnKiQ0Ws%2FmxysXgjrzzWPjet9Nv4pUTNT8tqj20kZitTF7ID80v8INQ9%2BGfhwDDiwXpHRJ8fNLg7DG3bxOuqi%2B3MNPo074GOqUBJBsyFQR8silRWDXGuTTZhxdVrgZslBwadFTxIecY%2BVk%2BwSXstL4bfVEOrQ5l7t0m5bDy5wbrwgvVRcoJmiBpEf2s0GI9CoPk2yux%2BtuzPo1%2Fck3nhgYRtvL%2FWagYCaH1j9IZbBdMibULdgb%2B6qv1hmX7NYIzHidMSO13eGz747fQuyQk%2FB1juODbKSirwGQgcSzCNGqIlzQsc5U%2BT90wM8kkYqjP&X-Amz-Signature=01fc61698b4115935b19b6d0f8615e7c858204c84dc6071ada99bb0351d73d36&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS4R32AR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPWNu9N57U2CT14p3GhV%2B4fM%2F0UhLHzAuLzuARJAuAxwIgG4rR1gknNR3wpSF56KWFszOoEaP3KE1aexEGtit7MGkqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA55bLh29KCceKXIhCrcA1W3v%2F5hP8RLVMa5eSnzhTWa4xRmgmhPHpXiV4bga45aVPfIHCY8A7YxqkahTbpYFCUhSg7D%2BUikNkqbxtHIRgw5ofSO8xg%2BUoU8PjupghxT0o9sADd7ch3uBLwQVg5J2%2BOacsN1jOCOCZ3HmVNa5I45NRhGXIJ02I31PbOMHROQIXvHHWxrfaldfw1bdxxp3CDi3kddKdoF2EYgFJX1CQLI0bxK%2Bkpgg85dgAsvba%2F89bV9IJRWEuL76ZKS%2B9GhoZRD80ZFdXo0pJWXG%2FbSfPhjLUM%2Fq2Uk2jZfy2nsFG4ZH6iRCdn5CWdjEzTgQh2RLmAoHSCxw5HMTSVDMhOSoPwEq7FfJV%2FDDcwSXgbzhCW6PiJNqEiXVNKkhpM5HnmZxCj9z9lCqH9uBTwtOb4jkqWzjPX8d4%2BBMlxOLBQ7Fe1cMHMLVtDJsAxfQOkLRVc64qHJv13%2FkToVeW0RygDHwQov0Ayxi6h4C4yMaKmXjINDOOdg8%2FgByhlYFCKPSOfdwPJSKTGs1%2BdYvHWnxmBUca7fVRbNyWS%2FZtGyZOnKiQ0Ws%2FmxysXgjrzzWPjet9Nv4pUTNT8tqj20kZitTF7ID80v8INQ9%2BGfhwDDiwXpHRJ8fNLg7DG3bxOuqi%2B3MNPo074GOqUBJBsyFQR8silRWDXGuTTZhxdVrgZslBwadFTxIecY%2BVk%2BwSXstL4bfVEOrQ5l7t0m5bDy5wbrwgvVRcoJmiBpEf2s0GI9CoPk2yux%2BtuzPo1%2Fck3nhgYRtvL%2FWagYCaH1j9IZbBdMibULdgb%2B6qv1hmX7NYIzHidMSO13eGz747fQuyQk%2FB1juODbKSirwGQgcSzCNGqIlzQsc5U%2BT90wM8kkYqjP&X-Amz-Signature=b9ba667af3149eed70ad75f540ba5bf9719886e80d239c160643a020d8d25ca3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS4R32AR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPWNu9N57U2CT14p3GhV%2B4fM%2F0UhLHzAuLzuARJAuAxwIgG4rR1gknNR3wpSF56KWFszOoEaP3KE1aexEGtit7MGkqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA55bLh29KCceKXIhCrcA1W3v%2F5hP8RLVMa5eSnzhTWa4xRmgmhPHpXiV4bga45aVPfIHCY8A7YxqkahTbpYFCUhSg7D%2BUikNkqbxtHIRgw5ofSO8xg%2BUoU8PjupghxT0o9sADd7ch3uBLwQVg5J2%2BOacsN1jOCOCZ3HmVNa5I45NRhGXIJ02I31PbOMHROQIXvHHWxrfaldfw1bdxxp3CDi3kddKdoF2EYgFJX1CQLI0bxK%2Bkpgg85dgAsvba%2F89bV9IJRWEuL76ZKS%2B9GhoZRD80ZFdXo0pJWXG%2FbSfPhjLUM%2Fq2Uk2jZfy2nsFG4ZH6iRCdn5CWdjEzTgQh2RLmAoHSCxw5HMTSVDMhOSoPwEq7FfJV%2FDDcwSXgbzhCW6PiJNqEiXVNKkhpM5HnmZxCj9z9lCqH9uBTwtOb4jkqWzjPX8d4%2BBMlxOLBQ7Fe1cMHMLVtDJsAxfQOkLRVc64qHJv13%2FkToVeW0RygDHwQov0Ayxi6h4C4yMaKmXjINDOOdg8%2FgByhlYFCKPSOfdwPJSKTGs1%2BdYvHWnxmBUca7fVRbNyWS%2FZtGyZOnKiQ0Ws%2FmxysXgjrzzWPjet9Nv4pUTNT8tqj20kZitTF7ID80v8INQ9%2BGfhwDDiwXpHRJ8fNLg7DG3bxOuqi%2B3MNPo074GOqUBJBsyFQR8silRWDXGuTTZhxdVrgZslBwadFTxIecY%2BVk%2BwSXstL4bfVEOrQ5l7t0m5bDy5wbrwgvVRcoJmiBpEf2s0GI9CoPk2yux%2BtuzPo1%2Fck3nhgYRtvL%2FWagYCaH1j9IZbBdMibULdgb%2B6qv1hmX7NYIzHidMSO13eGz747fQuyQk%2FB1juODbKSirwGQgcSzCNGqIlzQsc5U%2BT90wM8kkYqjP&X-Amz-Signature=60df9527df23bc3ae6c7668805bc2d417ff91ab688fb8a607182865c452c251c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
