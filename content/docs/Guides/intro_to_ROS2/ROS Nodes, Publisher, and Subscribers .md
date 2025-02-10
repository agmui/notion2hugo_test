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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6WLJLBG%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2IyHb82e53bi2dJBNz7Ep94WF%2FoSuqPu7557aQwdxcgIhAKpgb5vVULVTv78e183n6nDWCGYdPk%2BT%2Fv8omedi6srWKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSmNOoNVlAnx%2BjBk4q3AMvuqL0nA1sL9qOSAymxVeQfUDT8fJo0Jmu6Lph4cEZAd4BZugXnrQ3I%2FeoINaGtVMzGPecRDTBu6snfhdcsPxZU6Cc2VnH67GxqugrV0p96uF1m4Z59WUPgb%2FQeI4U7sVVpmhAuCg%2F%2FY3S5B5spQL04Gf9BBwZTDpCQTX3MIaFDBQnupcjxPuRBWmXsNpNSavO9OHl7EhVcJZEseZD2LSnLJ%2FIIrpHKsOtsJ15VPhgTWK7gj9WoYUpmiExigicQZzgfnML4818vxgLqRRIT5TD9xSLdgA6JYa9qK%2BWSGtkBbqfS2xH%2FY17k4YNO6MJ1yneDoc2mOEiIDyOFSifZco7s72VSSR242J%2F7uaFRqfgdYV7UkBUoPKElQIKhnlJliLSOxH4k6o1ghSnSUkJWQ9lKsJpXWiCvUMJarm13jzAcrr0RyFXHAYDLgkmZtg3yz%2Fmb%2BSWZiXO97k8l99uMs9hJjj5jvqQpVEejPYwJvUntlRPQMzoo4OBZCTYZQLuLpWqz4bWc1znxOpJkeX3Zowb4KiOcEcfPAuCndVfmtathJkEZjZu23tIYIcjz%2B0KYaqiMpxfyXrD%2BRCiZoKo4esn3QpqBA1ioG2UxooL9ZUMc227xb3OpPxci4PYvTDAnKW9BjqkAe83yM7ZxSTBvBPFG92%2F6MxmleD%2FFWLE4mVbGm%2F92%2Fvyk6IadezH%2FEBIBsB%2FotcvWtau0QL2saNk7bLJjF29yLcCend6xjjJsZawWvlwpf8w%2BOdNIWOH0rxMHNtrHyPa%2Bni45M2iKD%2FikrPC6sKDV89BG%2Fy6uvWdyho4j7xEhDnooBEso5vBftFK%2FsgatsN7JqDyA1Z1yOiOi8vpnzfXTmmPLph2&X-Amz-Signature=470460eebf05cecd322e2a63be432d473e92c28bf84d2aa7b9a688e589d8b58c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6WLJLBG%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2IyHb82e53bi2dJBNz7Ep94WF%2FoSuqPu7557aQwdxcgIhAKpgb5vVULVTv78e183n6nDWCGYdPk%2BT%2Fv8omedi6srWKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSmNOoNVlAnx%2BjBk4q3AMvuqL0nA1sL9qOSAymxVeQfUDT8fJo0Jmu6Lph4cEZAd4BZugXnrQ3I%2FeoINaGtVMzGPecRDTBu6snfhdcsPxZU6Cc2VnH67GxqugrV0p96uF1m4Z59WUPgb%2FQeI4U7sVVpmhAuCg%2F%2FY3S5B5spQL04Gf9BBwZTDpCQTX3MIaFDBQnupcjxPuRBWmXsNpNSavO9OHl7EhVcJZEseZD2LSnLJ%2FIIrpHKsOtsJ15VPhgTWK7gj9WoYUpmiExigicQZzgfnML4818vxgLqRRIT5TD9xSLdgA6JYa9qK%2BWSGtkBbqfS2xH%2FY17k4YNO6MJ1yneDoc2mOEiIDyOFSifZco7s72VSSR242J%2F7uaFRqfgdYV7UkBUoPKElQIKhnlJliLSOxH4k6o1ghSnSUkJWQ9lKsJpXWiCvUMJarm13jzAcrr0RyFXHAYDLgkmZtg3yz%2Fmb%2BSWZiXO97k8l99uMs9hJjj5jvqQpVEejPYwJvUntlRPQMzoo4OBZCTYZQLuLpWqz4bWc1znxOpJkeX3Zowb4KiOcEcfPAuCndVfmtathJkEZjZu23tIYIcjz%2B0KYaqiMpxfyXrD%2BRCiZoKo4esn3QpqBA1ioG2UxooL9ZUMc227xb3OpPxci4PYvTDAnKW9BjqkAe83yM7ZxSTBvBPFG92%2F6MxmleD%2FFWLE4mVbGm%2F92%2Fvyk6IadezH%2FEBIBsB%2FotcvWtau0QL2saNk7bLJjF29yLcCend6xjjJsZawWvlwpf8w%2BOdNIWOH0rxMHNtrHyPa%2Bni45M2iKD%2FikrPC6sKDV89BG%2Fy6uvWdyho4j7xEhDnooBEso5vBftFK%2FsgatsN7JqDyA1Z1yOiOi8vpnzfXTmmPLph2&X-Amz-Signature=8bbd3604cc689000eb0ec94fdbe56e45f232661c0fc1a012938b2d757b13d1a1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6WLJLBG%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2IyHb82e53bi2dJBNz7Ep94WF%2FoSuqPu7557aQwdxcgIhAKpgb5vVULVTv78e183n6nDWCGYdPk%2BT%2Fv8omedi6srWKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSmNOoNVlAnx%2BjBk4q3AMvuqL0nA1sL9qOSAymxVeQfUDT8fJo0Jmu6Lph4cEZAd4BZugXnrQ3I%2FeoINaGtVMzGPecRDTBu6snfhdcsPxZU6Cc2VnH67GxqugrV0p96uF1m4Z59WUPgb%2FQeI4U7sVVpmhAuCg%2F%2FY3S5B5spQL04Gf9BBwZTDpCQTX3MIaFDBQnupcjxPuRBWmXsNpNSavO9OHl7EhVcJZEseZD2LSnLJ%2FIIrpHKsOtsJ15VPhgTWK7gj9WoYUpmiExigicQZzgfnML4818vxgLqRRIT5TD9xSLdgA6JYa9qK%2BWSGtkBbqfS2xH%2FY17k4YNO6MJ1yneDoc2mOEiIDyOFSifZco7s72VSSR242J%2F7uaFRqfgdYV7UkBUoPKElQIKhnlJliLSOxH4k6o1ghSnSUkJWQ9lKsJpXWiCvUMJarm13jzAcrr0RyFXHAYDLgkmZtg3yz%2Fmb%2BSWZiXO97k8l99uMs9hJjj5jvqQpVEejPYwJvUntlRPQMzoo4OBZCTYZQLuLpWqz4bWc1znxOpJkeX3Zowb4KiOcEcfPAuCndVfmtathJkEZjZu23tIYIcjz%2B0KYaqiMpxfyXrD%2BRCiZoKo4esn3QpqBA1ioG2UxooL9ZUMc227xb3OpPxci4PYvTDAnKW9BjqkAe83yM7ZxSTBvBPFG92%2F6MxmleD%2FFWLE4mVbGm%2F92%2Fvyk6IadezH%2FEBIBsB%2FotcvWtau0QL2saNk7bLJjF29yLcCend6xjjJsZawWvlwpf8w%2BOdNIWOH0rxMHNtrHyPa%2Bni45M2iKD%2FikrPC6sKDV89BG%2Fy6uvWdyho4j7xEhDnooBEso5vBftFK%2FsgatsN7JqDyA1Z1yOiOi8vpnzfXTmmPLph2&X-Amz-Signature=a77c0cd42f96a3ca3b7870fa51210368009b1c3ae1322dff782e89f0d9d58575&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6WLJLBG%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2IyHb82e53bi2dJBNz7Ep94WF%2FoSuqPu7557aQwdxcgIhAKpgb5vVULVTv78e183n6nDWCGYdPk%2BT%2Fv8omedi6srWKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSmNOoNVlAnx%2BjBk4q3AMvuqL0nA1sL9qOSAymxVeQfUDT8fJo0Jmu6Lph4cEZAd4BZugXnrQ3I%2FeoINaGtVMzGPecRDTBu6snfhdcsPxZU6Cc2VnH67GxqugrV0p96uF1m4Z59WUPgb%2FQeI4U7sVVpmhAuCg%2F%2FY3S5B5spQL04Gf9BBwZTDpCQTX3MIaFDBQnupcjxPuRBWmXsNpNSavO9OHl7EhVcJZEseZD2LSnLJ%2FIIrpHKsOtsJ15VPhgTWK7gj9WoYUpmiExigicQZzgfnML4818vxgLqRRIT5TD9xSLdgA6JYa9qK%2BWSGtkBbqfS2xH%2FY17k4YNO6MJ1yneDoc2mOEiIDyOFSifZco7s72VSSR242J%2F7uaFRqfgdYV7UkBUoPKElQIKhnlJliLSOxH4k6o1ghSnSUkJWQ9lKsJpXWiCvUMJarm13jzAcrr0RyFXHAYDLgkmZtg3yz%2Fmb%2BSWZiXO97k8l99uMs9hJjj5jvqQpVEejPYwJvUntlRPQMzoo4OBZCTYZQLuLpWqz4bWc1znxOpJkeX3Zowb4KiOcEcfPAuCndVfmtathJkEZjZu23tIYIcjz%2B0KYaqiMpxfyXrD%2BRCiZoKo4esn3QpqBA1ioG2UxooL9ZUMc227xb3OpPxci4PYvTDAnKW9BjqkAe83yM7ZxSTBvBPFG92%2F6MxmleD%2FFWLE4mVbGm%2F92%2Fvyk6IadezH%2FEBIBsB%2FotcvWtau0QL2saNk7bLJjF29yLcCend6xjjJsZawWvlwpf8w%2BOdNIWOH0rxMHNtrHyPa%2Bni45M2iKD%2FikrPC6sKDV89BG%2Fy6uvWdyho4j7xEhDnooBEso5vBftFK%2FsgatsN7JqDyA1Z1yOiOi8vpnzfXTmmPLph2&X-Amz-Signature=1e46a0b9cd511f5045bf172b25876a2b9bb9518ae5102a8a36d42979c94c2ed8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6WLJLBG%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2IyHb82e53bi2dJBNz7Ep94WF%2FoSuqPu7557aQwdxcgIhAKpgb5vVULVTv78e183n6nDWCGYdPk%2BT%2Fv8omedi6srWKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSmNOoNVlAnx%2BjBk4q3AMvuqL0nA1sL9qOSAymxVeQfUDT8fJo0Jmu6Lph4cEZAd4BZugXnrQ3I%2FeoINaGtVMzGPecRDTBu6snfhdcsPxZU6Cc2VnH67GxqugrV0p96uF1m4Z59WUPgb%2FQeI4U7sVVpmhAuCg%2F%2FY3S5B5spQL04Gf9BBwZTDpCQTX3MIaFDBQnupcjxPuRBWmXsNpNSavO9OHl7EhVcJZEseZD2LSnLJ%2FIIrpHKsOtsJ15VPhgTWK7gj9WoYUpmiExigicQZzgfnML4818vxgLqRRIT5TD9xSLdgA6JYa9qK%2BWSGtkBbqfS2xH%2FY17k4YNO6MJ1yneDoc2mOEiIDyOFSifZco7s72VSSR242J%2F7uaFRqfgdYV7UkBUoPKElQIKhnlJliLSOxH4k6o1ghSnSUkJWQ9lKsJpXWiCvUMJarm13jzAcrr0RyFXHAYDLgkmZtg3yz%2Fmb%2BSWZiXO97k8l99uMs9hJjj5jvqQpVEejPYwJvUntlRPQMzoo4OBZCTYZQLuLpWqz4bWc1znxOpJkeX3Zowb4KiOcEcfPAuCndVfmtathJkEZjZu23tIYIcjz%2B0KYaqiMpxfyXrD%2BRCiZoKo4esn3QpqBA1ioG2UxooL9ZUMc227xb3OpPxci4PYvTDAnKW9BjqkAe83yM7ZxSTBvBPFG92%2F6MxmleD%2FFWLE4mVbGm%2F92%2Fvyk6IadezH%2FEBIBsB%2FotcvWtau0QL2saNk7bLJjF29yLcCend6xjjJsZawWvlwpf8w%2BOdNIWOH0rxMHNtrHyPa%2Bni45M2iKD%2FikrPC6sKDV89BG%2Fy6uvWdyho4j7xEhDnooBEso5vBftFK%2FsgatsN7JqDyA1Z1yOiOi8vpnzfXTmmPLph2&X-Amz-Signature=71893aded2193633b2d7561520699126bbd865c934a9db4d56fe585ecc6d3621&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6WLJLBG%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2IyHb82e53bi2dJBNz7Ep94WF%2FoSuqPu7557aQwdxcgIhAKpgb5vVULVTv78e183n6nDWCGYdPk%2BT%2Fv8omedi6srWKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSmNOoNVlAnx%2BjBk4q3AMvuqL0nA1sL9qOSAymxVeQfUDT8fJo0Jmu6Lph4cEZAd4BZugXnrQ3I%2FeoINaGtVMzGPecRDTBu6snfhdcsPxZU6Cc2VnH67GxqugrV0p96uF1m4Z59WUPgb%2FQeI4U7sVVpmhAuCg%2F%2FY3S5B5spQL04Gf9BBwZTDpCQTX3MIaFDBQnupcjxPuRBWmXsNpNSavO9OHl7EhVcJZEseZD2LSnLJ%2FIIrpHKsOtsJ15VPhgTWK7gj9WoYUpmiExigicQZzgfnML4818vxgLqRRIT5TD9xSLdgA6JYa9qK%2BWSGtkBbqfS2xH%2FY17k4YNO6MJ1yneDoc2mOEiIDyOFSifZco7s72VSSR242J%2F7uaFRqfgdYV7UkBUoPKElQIKhnlJliLSOxH4k6o1ghSnSUkJWQ9lKsJpXWiCvUMJarm13jzAcrr0RyFXHAYDLgkmZtg3yz%2Fmb%2BSWZiXO97k8l99uMs9hJjj5jvqQpVEejPYwJvUntlRPQMzoo4OBZCTYZQLuLpWqz4bWc1znxOpJkeX3Zowb4KiOcEcfPAuCndVfmtathJkEZjZu23tIYIcjz%2B0KYaqiMpxfyXrD%2BRCiZoKo4esn3QpqBA1ioG2UxooL9ZUMc227xb3OpPxci4PYvTDAnKW9BjqkAe83yM7ZxSTBvBPFG92%2F6MxmleD%2FFWLE4mVbGm%2F92%2Fvyk6IadezH%2FEBIBsB%2FotcvWtau0QL2saNk7bLJjF29yLcCend6xjjJsZawWvlwpf8w%2BOdNIWOH0rxMHNtrHyPa%2Bni45M2iKD%2FikrPC6sKDV89BG%2Fy6uvWdyho4j7xEhDnooBEso5vBftFK%2FsgatsN7JqDyA1Z1yOiOi8vpnzfXTmmPLph2&X-Amz-Signature=90a08848f461e86d5faae52ff067ef8f1dceac761e67bac7b4ecfce71df5ac40&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6WLJLBG%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2IyHb82e53bi2dJBNz7Ep94WF%2FoSuqPu7557aQwdxcgIhAKpgb5vVULVTv78e183n6nDWCGYdPk%2BT%2Fv8omedi6srWKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSmNOoNVlAnx%2BjBk4q3AMvuqL0nA1sL9qOSAymxVeQfUDT8fJo0Jmu6Lph4cEZAd4BZugXnrQ3I%2FeoINaGtVMzGPecRDTBu6snfhdcsPxZU6Cc2VnH67GxqugrV0p96uF1m4Z59WUPgb%2FQeI4U7sVVpmhAuCg%2F%2FY3S5B5spQL04Gf9BBwZTDpCQTX3MIaFDBQnupcjxPuRBWmXsNpNSavO9OHl7EhVcJZEseZD2LSnLJ%2FIIrpHKsOtsJ15VPhgTWK7gj9WoYUpmiExigicQZzgfnML4818vxgLqRRIT5TD9xSLdgA6JYa9qK%2BWSGtkBbqfS2xH%2FY17k4YNO6MJ1yneDoc2mOEiIDyOFSifZco7s72VSSR242J%2F7uaFRqfgdYV7UkBUoPKElQIKhnlJliLSOxH4k6o1ghSnSUkJWQ9lKsJpXWiCvUMJarm13jzAcrr0RyFXHAYDLgkmZtg3yz%2Fmb%2BSWZiXO97k8l99uMs9hJjj5jvqQpVEejPYwJvUntlRPQMzoo4OBZCTYZQLuLpWqz4bWc1znxOpJkeX3Zowb4KiOcEcfPAuCndVfmtathJkEZjZu23tIYIcjz%2B0KYaqiMpxfyXrD%2BRCiZoKo4esn3QpqBA1ioG2UxooL9ZUMc227xb3OpPxci4PYvTDAnKW9BjqkAe83yM7ZxSTBvBPFG92%2F6MxmleD%2FFWLE4mVbGm%2F92%2Fvyk6IadezH%2FEBIBsB%2FotcvWtau0QL2saNk7bLJjF29yLcCend6xjjJsZawWvlwpf8w%2BOdNIWOH0rxMHNtrHyPa%2Bni45M2iKD%2FikrPC6sKDV89BG%2Fy6uvWdyho4j7xEhDnooBEso5vBftFK%2FsgatsN7JqDyA1Z1yOiOi8vpnzfXTmmPLph2&X-Amz-Signature=d64ed55cacf1e1de4a9b81a80b8b76db94cac674979781db2e1ab64642655091&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6WLJLBG%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2IyHb82e53bi2dJBNz7Ep94WF%2FoSuqPu7557aQwdxcgIhAKpgb5vVULVTv78e183n6nDWCGYdPk%2BT%2Fv8omedi6srWKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSmNOoNVlAnx%2BjBk4q3AMvuqL0nA1sL9qOSAymxVeQfUDT8fJo0Jmu6Lph4cEZAd4BZugXnrQ3I%2FeoINaGtVMzGPecRDTBu6snfhdcsPxZU6Cc2VnH67GxqugrV0p96uF1m4Z59WUPgb%2FQeI4U7sVVpmhAuCg%2F%2FY3S5B5spQL04Gf9BBwZTDpCQTX3MIaFDBQnupcjxPuRBWmXsNpNSavO9OHl7EhVcJZEseZD2LSnLJ%2FIIrpHKsOtsJ15VPhgTWK7gj9WoYUpmiExigicQZzgfnML4818vxgLqRRIT5TD9xSLdgA6JYa9qK%2BWSGtkBbqfS2xH%2FY17k4YNO6MJ1yneDoc2mOEiIDyOFSifZco7s72VSSR242J%2F7uaFRqfgdYV7UkBUoPKElQIKhnlJliLSOxH4k6o1ghSnSUkJWQ9lKsJpXWiCvUMJarm13jzAcrr0RyFXHAYDLgkmZtg3yz%2Fmb%2BSWZiXO97k8l99uMs9hJjj5jvqQpVEejPYwJvUntlRPQMzoo4OBZCTYZQLuLpWqz4bWc1znxOpJkeX3Zowb4KiOcEcfPAuCndVfmtathJkEZjZu23tIYIcjz%2B0KYaqiMpxfyXrD%2BRCiZoKo4esn3QpqBA1ioG2UxooL9ZUMc227xb3OpPxci4PYvTDAnKW9BjqkAe83yM7ZxSTBvBPFG92%2F6MxmleD%2FFWLE4mVbGm%2F92%2Fvyk6IadezH%2FEBIBsB%2FotcvWtau0QL2saNk7bLJjF29yLcCend6xjjJsZawWvlwpf8w%2BOdNIWOH0rxMHNtrHyPa%2Bni45M2iKD%2FikrPC6sKDV89BG%2Fy6uvWdyho4j7xEhDnooBEso5vBftFK%2FsgatsN7JqDyA1Z1yOiOi8vpnzfXTmmPLph2&X-Amz-Signature=2ca3ae5bea8782ceec07aaf649bce8dfba57d575574f4004a38c03ffc5f02d69&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
