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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AA45SBZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDpcn0Z%2Bc%2FbQRGDn67NnHQDhwre%2BneweaeBozvXB3u1tgIhAMBAzY5I%2BMhFoBDQXecUhnWOcfA61wa9blikhB3s1aF%2BKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGtCX%2F83KCPEtgwR4q3AOOzkAeqKCgVKr3139jTcG0kf%2BWvc6oFGVgBaSnPUnJ1LLXO82ukVflA6IRbGTVxaormFurNvPV4t6Hro1T8W4l4jFuR%2F2BrJo1RfJXkLfFArs8ZVLmwtHQUl27ZLAEssV0taq68vN33qz1x7NvH00dtAP6e7bSzzmdrMUNmY2meyXXwxnxn1n7UMPsKI8%2Ffcb6iIuhTGcH3yX8hiKJJi8z%2BB3sRMm4pSBFCQi0tkztMqE2ngMIFYk2BAoPaQSs4foZvkSkbuNzD9j4oiKoNUNe%2F%2ByWo5zaaLhKNwIDO0tc1gmoaIFHVBOAJgMKNbfwhQ0PmdYnFtqkWzBkGtROqTopVLdKPTkk1JHS1wRJksCtxR%2BbncwpkeiJWc8maWsbxz4GJn5C8CtSuA3Xf4R0UIHXfzNMbSP9dXmlPMQgFHO4sZxp73cqSa509j2cJUzAGLGj50iDqFcu4ET03cStMU%2FoARXDWucPI73WXhQElw%2BmJ%2FxwxR05RQGJOeXqyshV5tHgOb%2FBMijUCaO6aoytIZigpDrvpnBlTluvpuHakkQZymYaLpIPouENBEiDpq8Tjj%2BjcHAUcuxPgBGr3J5mdhE6NOiy%2BxIadw4ONdL4QxlX1k9AP2xv0Z%2F%2FwRp%2B5TDFpK2%2FBjqkAaoUT8U2v0SuCOzMk5nAh7lnHQcbisK%2Fn7SGI3hTM1yvP4aToomsUm%2BxT1JM9eE4%2BG2YPYDU8vwXu7jdaxjVCCeiqEV1cRJeD%2FrhDehmIN0Qo60xyQKb0ppunQ4mgR7EWbThp6rwY7uwn2Wjx1%2Bu4k5foxI3P4d1U%2BCMhN4biy2HxrnYioHE6%2BiWFGncQZclX%2BXH%2BWKZAX4Aor7liGDxa0FWhPMv&X-Amz-Signature=efa61a3e2227489f745f7605c93c7ad1a20bcfdcb7e2189431554d39417fdce5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AA45SBZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDpcn0Z%2Bc%2FbQRGDn67NnHQDhwre%2BneweaeBozvXB3u1tgIhAMBAzY5I%2BMhFoBDQXecUhnWOcfA61wa9blikhB3s1aF%2BKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGtCX%2F83KCPEtgwR4q3AOOzkAeqKCgVKr3139jTcG0kf%2BWvc6oFGVgBaSnPUnJ1LLXO82ukVflA6IRbGTVxaormFurNvPV4t6Hro1T8W4l4jFuR%2F2BrJo1RfJXkLfFArs8ZVLmwtHQUl27ZLAEssV0taq68vN33qz1x7NvH00dtAP6e7bSzzmdrMUNmY2meyXXwxnxn1n7UMPsKI8%2Ffcb6iIuhTGcH3yX8hiKJJi8z%2BB3sRMm4pSBFCQi0tkztMqE2ngMIFYk2BAoPaQSs4foZvkSkbuNzD9j4oiKoNUNe%2F%2ByWo5zaaLhKNwIDO0tc1gmoaIFHVBOAJgMKNbfwhQ0PmdYnFtqkWzBkGtROqTopVLdKPTkk1JHS1wRJksCtxR%2BbncwpkeiJWc8maWsbxz4GJn5C8CtSuA3Xf4R0UIHXfzNMbSP9dXmlPMQgFHO4sZxp73cqSa509j2cJUzAGLGj50iDqFcu4ET03cStMU%2FoARXDWucPI73WXhQElw%2BmJ%2FxwxR05RQGJOeXqyshV5tHgOb%2FBMijUCaO6aoytIZigpDrvpnBlTluvpuHakkQZymYaLpIPouENBEiDpq8Tjj%2BjcHAUcuxPgBGr3J5mdhE6NOiy%2BxIadw4ONdL4QxlX1k9AP2xv0Z%2F%2FwRp%2B5TDFpK2%2FBjqkAaoUT8U2v0SuCOzMk5nAh7lnHQcbisK%2Fn7SGI3hTM1yvP4aToomsUm%2BxT1JM9eE4%2BG2YPYDU8vwXu7jdaxjVCCeiqEV1cRJeD%2FrhDehmIN0Qo60xyQKb0ppunQ4mgR7EWbThp6rwY7uwn2Wjx1%2Bu4k5foxI3P4d1U%2BCMhN4biy2HxrnYioHE6%2BiWFGncQZclX%2BXH%2BWKZAX4Aor7liGDxa0FWhPMv&X-Amz-Signature=f1956365471705527a5b697389f7ae77c162cd8836af6e38f9154e854fa6b25a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AA45SBZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDpcn0Z%2Bc%2FbQRGDn67NnHQDhwre%2BneweaeBozvXB3u1tgIhAMBAzY5I%2BMhFoBDQXecUhnWOcfA61wa9blikhB3s1aF%2BKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGtCX%2F83KCPEtgwR4q3AOOzkAeqKCgVKr3139jTcG0kf%2BWvc6oFGVgBaSnPUnJ1LLXO82ukVflA6IRbGTVxaormFurNvPV4t6Hro1T8W4l4jFuR%2F2BrJo1RfJXkLfFArs8ZVLmwtHQUl27ZLAEssV0taq68vN33qz1x7NvH00dtAP6e7bSzzmdrMUNmY2meyXXwxnxn1n7UMPsKI8%2Ffcb6iIuhTGcH3yX8hiKJJi8z%2BB3sRMm4pSBFCQi0tkztMqE2ngMIFYk2BAoPaQSs4foZvkSkbuNzD9j4oiKoNUNe%2F%2ByWo5zaaLhKNwIDO0tc1gmoaIFHVBOAJgMKNbfwhQ0PmdYnFtqkWzBkGtROqTopVLdKPTkk1JHS1wRJksCtxR%2BbncwpkeiJWc8maWsbxz4GJn5C8CtSuA3Xf4R0UIHXfzNMbSP9dXmlPMQgFHO4sZxp73cqSa509j2cJUzAGLGj50iDqFcu4ET03cStMU%2FoARXDWucPI73WXhQElw%2BmJ%2FxwxR05RQGJOeXqyshV5tHgOb%2FBMijUCaO6aoytIZigpDrvpnBlTluvpuHakkQZymYaLpIPouENBEiDpq8Tjj%2BjcHAUcuxPgBGr3J5mdhE6NOiy%2BxIadw4ONdL4QxlX1k9AP2xv0Z%2F%2FwRp%2B5TDFpK2%2FBjqkAaoUT8U2v0SuCOzMk5nAh7lnHQcbisK%2Fn7SGI3hTM1yvP4aToomsUm%2BxT1JM9eE4%2BG2YPYDU8vwXu7jdaxjVCCeiqEV1cRJeD%2FrhDehmIN0Qo60xyQKb0ppunQ4mgR7EWbThp6rwY7uwn2Wjx1%2Bu4k5foxI3P4d1U%2BCMhN4biy2HxrnYioHE6%2BiWFGncQZclX%2BXH%2BWKZAX4Aor7liGDxa0FWhPMv&X-Amz-Signature=5514457c7d7b2bf3fb2b37409063c371506e406bbbb5f97046fc6be5b39568c0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AA45SBZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDpcn0Z%2Bc%2FbQRGDn67NnHQDhwre%2BneweaeBozvXB3u1tgIhAMBAzY5I%2BMhFoBDQXecUhnWOcfA61wa9blikhB3s1aF%2BKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGtCX%2F83KCPEtgwR4q3AOOzkAeqKCgVKr3139jTcG0kf%2BWvc6oFGVgBaSnPUnJ1LLXO82ukVflA6IRbGTVxaormFurNvPV4t6Hro1T8W4l4jFuR%2F2BrJo1RfJXkLfFArs8ZVLmwtHQUl27ZLAEssV0taq68vN33qz1x7NvH00dtAP6e7bSzzmdrMUNmY2meyXXwxnxn1n7UMPsKI8%2Ffcb6iIuhTGcH3yX8hiKJJi8z%2BB3sRMm4pSBFCQi0tkztMqE2ngMIFYk2BAoPaQSs4foZvkSkbuNzD9j4oiKoNUNe%2F%2ByWo5zaaLhKNwIDO0tc1gmoaIFHVBOAJgMKNbfwhQ0PmdYnFtqkWzBkGtROqTopVLdKPTkk1JHS1wRJksCtxR%2BbncwpkeiJWc8maWsbxz4GJn5C8CtSuA3Xf4R0UIHXfzNMbSP9dXmlPMQgFHO4sZxp73cqSa509j2cJUzAGLGj50iDqFcu4ET03cStMU%2FoARXDWucPI73WXhQElw%2BmJ%2FxwxR05RQGJOeXqyshV5tHgOb%2FBMijUCaO6aoytIZigpDrvpnBlTluvpuHakkQZymYaLpIPouENBEiDpq8Tjj%2BjcHAUcuxPgBGr3J5mdhE6NOiy%2BxIadw4ONdL4QxlX1k9AP2xv0Z%2F%2FwRp%2B5TDFpK2%2FBjqkAaoUT8U2v0SuCOzMk5nAh7lnHQcbisK%2Fn7SGI3hTM1yvP4aToomsUm%2BxT1JM9eE4%2BG2YPYDU8vwXu7jdaxjVCCeiqEV1cRJeD%2FrhDehmIN0Qo60xyQKb0ppunQ4mgR7EWbThp6rwY7uwn2Wjx1%2Bu4k5foxI3P4d1U%2BCMhN4biy2HxrnYioHE6%2BiWFGncQZclX%2BXH%2BWKZAX4Aor7liGDxa0FWhPMv&X-Amz-Signature=a1c25d4136c52774f38ec33c15172c9db23bf7a3ee36f9e234723ab8ac9f1011&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AA45SBZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDpcn0Z%2Bc%2FbQRGDn67NnHQDhwre%2BneweaeBozvXB3u1tgIhAMBAzY5I%2BMhFoBDQXecUhnWOcfA61wa9blikhB3s1aF%2BKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGtCX%2F83KCPEtgwR4q3AOOzkAeqKCgVKr3139jTcG0kf%2BWvc6oFGVgBaSnPUnJ1LLXO82ukVflA6IRbGTVxaormFurNvPV4t6Hro1T8W4l4jFuR%2F2BrJo1RfJXkLfFArs8ZVLmwtHQUl27ZLAEssV0taq68vN33qz1x7NvH00dtAP6e7bSzzmdrMUNmY2meyXXwxnxn1n7UMPsKI8%2Ffcb6iIuhTGcH3yX8hiKJJi8z%2BB3sRMm4pSBFCQi0tkztMqE2ngMIFYk2BAoPaQSs4foZvkSkbuNzD9j4oiKoNUNe%2F%2ByWo5zaaLhKNwIDO0tc1gmoaIFHVBOAJgMKNbfwhQ0PmdYnFtqkWzBkGtROqTopVLdKPTkk1JHS1wRJksCtxR%2BbncwpkeiJWc8maWsbxz4GJn5C8CtSuA3Xf4R0UIHXfzNMbSP9dXmlPMQgFHO4sZxp73cqSa509j2cJUzAGLGj50iDqFcu4ET03cStMU%2FoARXDWucPI73WXhQElw%2BmJ%2FxwxR05RQGJOeXqyshV5tHgOb%2FBMijUCaO6aoytIZigpDrvpnBlTluvpuHakkQZymYaLpIPouENBEiDpq8Tjj%2BjcHAUcuxPgBGr3J5mdhE6NOiy%2BxIadw4ONdL4QxlX1k9AP2xv0Z%2F%2FwRp%2B5TDFpK2%2FBjqkAaoUT8U2v0SuCOzMk5nAh7lnHQcbisK%2Fn7SGI3hTM1yvP4aToomsUm%2BxT1JM9eE4%2BG2YPYDU8vwXu7jdaxjVCCeiqEV1cRJeD%2FrhDehmIN0Qo60xyQKb0ppunQ4mgR7EWbThp6rwY7uwn2Wjx1%2Bu4k5foxI3P4d1U%2BCMhN4biy2HxrnYioHE6%2BiWFGncQZclX%2BXH%2BWKZAX4Aor7liGDxa0FWhPMv&X-Amz-Signature=3ea29f9470e011cfccc3875bba7d19ca284f9a6cb993814b80abae06f2f03e28&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AA45SBZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDpcn0Z%2Bc%2FbQRGDn67NnHQDhwre%2BneweaeBozvXB3u1tgIhAMBAzY5I%2BMhFoBDQXecUhnWOcfA61wa9blikhB3s1aF%2BKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGtCX%2F83KCPEtgwR4q3AOOzkAeqKCgVKr3139jTcG0kf%2BWvc6oFGVgBaSnPUnJ1LLXO82ukVflA6IRbGTVxaormFurNvPV4t6Hro1T8W4l4jFuR%2F2BrJo1RfJXkLfFArs8ZVLmwtHQUl27ZLAEssV0taq68vN33qz1x7NvH00dtAP6e7bSzzmdrMUNmY2meyXXwxnxn1n7UMPsKI8%2Ffcb6iIuhTGcH3yX8hiKJJi8z%2BB3sRMm4pSBFCQi0tkztMqE2ngMIFYk2BAoPaQSs4foZvkSkbuNzD9j4oiKoNUNe%2F%2ByWo5zaaLhKNwIDO0tc1gmoaIFHVBOAJgMKNbfwhQ0PmdYnFtqkWzBkGtROqTopVLdKPTkk1JHS1wRJksCtxR%2BbncwpkeiJWc8maWsbxz4GJn5C8CtSuA3Xf4R0UIHXfzNMbSP9dXmlPMQgFHO4sZxp73cqSa509j2cJUzAGLGj50iDqFcu4ET03cStMU%2FoARXDWucPI73WXhQElw%2BmJ%2FxwxR05RQGJOeXqyshV5tHgOb%2FBMijUCaO6aoytIZigpDrvpnBlTluvpuHakkQZymYaLpIPouENBEiDpq8Tjj%2BjcHAUcuxPgBGr3J5mdhE6NOiy%2BxIadw4ONdL4QxlX1k9AP2xv0Z%2F%2FwRp%2B5TDFpK2%2FBjqkAaoUT8U2v0SuCOzMk5nAh7lnHQcbisK%2Fn7SGI3hTM1yvP4aToomsUm%2BxT1JM9eE4%2BG2YPYDU8vwXu7jdaxjVCCeiqEV1cRJeD%2FrhDehmIN0Qo60xyQKb0ppunQ4mgR7EWbThp6rwY7uwn2Wjx1%2Bu4k5foxI3P4d1U%2BCMhN4biy2HxrnYioHE6%2BiWFGncQZclX%2BXH%2BWKZAX4Aor7liGDxa0FWhPMv&X-Amz-Signature=0abdf586671cfef38947c1a9b6bbf9db629d6badaf04e58aaa355c7e3f9857cd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AA45SBZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDpcn0Z%2Bc%2FbQRGDn67NnHQDhwre%2BneweaeBozvXB3u1tgIhAMBAzY5I%2BMhFoBDQXecUhnWOcfA61wa9blikhB3s1aF%2BKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGtCX%2F83KCPEtgwR4q3AOOzkAeqKCgVKr3139jTcG0kf%2BWvc6oFGVgBaSnPUnJ1LLXO82ukVflA6IRbGTVxaormFurNvPV4t6Hro1T8W4l4jFuR%2F2BrJo1RfJXkLfFArs8ZVLmwtHQUl27ZLAEssV0taq68vN33qz1x7NvH00dtAP6e7bSzzmdrMUNmY2meyXXwxnxn1n7UMPsKI8%2Ffcb6iIuhTGcH3yX8hiKJJi8z%2BB3sRMm4pSBFCQi0tkztMqE2ngMIFYk2BAoPaQSs4foZvkSkbuNzD9j4oiKoNUNe%2F%2ByWo5zaaLhKNwIDO0tc1gmoaIFHVBOAJgMKNbfwhQ0PmdYnFtqkWzBkGtROqTopVLdKPTkk1JHS1wRJksCtxR%2BbncwpkeiJWc8maWsbxz4GJn5C8CtSuA3Xf4R0UIHXfzNMbSP9dXmlPMQgFHO4sZxp73cqSa509j2cJUzAGLGj50iDqFcu4ET03cStMU%2FoARXDWucPI73WXhQElw%2BmJ%2FxwxR05RQGJOeXqyshV5tHgOb%2FBMijUCaO6aoytIZigpDrvpnBlTluvpuHakkQZymYaLpIPouENBEiDpq8Tjj%2BjcHAUcuxPgBGr3J5mdhE6NOiy%2BxIadw4ONdL4QxlX1k9AP2xv0Z%2F%2FwRp%2B5TDFpK2%2FBjqkAaoUT8U2v0SuCOzMk5nAh7lnHQcbisK%2Fn7SGI3hTM1yvP4aToomsUm%2BxT1JM9eE4%2BG2YPYDU8vwXu7jdaxjVCCeiqEV1cRJeD%2FrhDehmIN0Qo60xyQKb0ppunQ4mgR7EWbThp6rwY7uwn2Wjx1%2Bu4k5foxI3P4d1U%2BCMhN4biy2HxrnYioHE6%2BiWFGncQZclX%2BXH%2BWKZAX4Aor7liGDxa0FWhPMv&X-Amz-Signature=dc4a330222da2efd57d1575c416e38d97004d5c22d106a3df6bbef2d9017dde1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AA45SBZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDpcn0Z%2Bc%2FbQRGDn67NnHQDhwre%2BneweaeBozvXB3u1tgIhAMBAzY5I%2BMhFoBDQXecUhnWOcfA61wa9blikhB3s1aF%2BKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGtCX%2F83KCPEtgwR4q3AOOzkAeqKCgVKr3139jTcG0kf%2BWvc6oFGVgBaSnPUnJ1LLXO82ukVflA6IRbGTVxaormFurNvPV4t6Hro1T8W4l4jFuR%2F2BrJo1RfJXkLfFArs8ZVLmwtHQUl27ZLAEssV0taq68vN33qz1x7NvH00dtAP6e7bSzzmdrMUNmY2meyXXwxnxn1n7UMPsKI8%2Ffcb6iIuhTGcH3yX8hiKJJi8z%2BB3sRMm4pSBFCQi0tkztMqE2ngMIFYk2BAoPaQSs4foZvkSkbuNzD9j4oiKoNUNe%2F%2ByWo5zaaLhKNwIDO0tc1gmoaIFHVBOAJgMKNbfwhQ0PmdYnFtqkWzBkGtROqTopVLdKPTkk1JHS1wRJksCtxR%2BbncwpkeiJWc8maWsbxz4GJn5C8CtSuA3Xf4R0UIHXfzNMbSP9dXmlPMQgFHO4sZxp73cqSa509j2cJUzAGLGj50iDqFcu4ET03cStMU%2FoARXDWucPI73WXhQElw%2BmJ%2FxwxR05RQGJOeXqyshV5tHgOb%2FBMijUCaO6aoytIZigpDrvpnBlTluvpuHakkQZymYaLpIPouENBEiDpq8Tjj%2BjcHAUcuxPgBGr3J5mdhE6NOiy%2BxIadw4ONdL4QxlX1k9AP2xv0Z%2F%2FwRp%2B5TDFpK2%2FBjqkAaoUT8U2v0SuCOzMk5nAh7lnHQcbisK%2Fn7SGI3hTM1yvP4aToomsUm%2BxT1JM9eE4%2BG2YPYDU8vwXu7jdaxjVCCeiqEV1cRJeD%2FrhDehmIN0Qo60xyQKb0ppunQ4mgR7EWbThp6rwY7uwn2Wjx1%2Bu4k5foxI3P4d1U%2BCMhN4biy2HxrnYioHE6%2BiWFGncQZclX%2BXH%2BWKZAX4Aor7liGDxa0FWhPMv&X-Amz-Signature=54e283dfa226defe9616bafb12f210fbf77ca3f363fe24b741440832159e1927&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
