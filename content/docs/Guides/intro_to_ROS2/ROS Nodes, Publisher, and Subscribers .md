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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZNG2OTR%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDXyw5niADJslGbECl38oXqrmfYnu7eoPe8F86%2FFLgrbAiEA2TD8j6L9rVr9bAvNVubuC8uA8r4APb0UZio7AK0C2Kcq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDA30FgaIS4Q8XkY%2BJCrcA3HdcfS52iJ8STQ32VMBseRJmplsDpFdpC0iG1n8llfkWVaGOR%2FOa6r2a68If0oSEh5EXCKGwheDR1q0aoVCtwcY0ns%2FG4RMtGz3DDhZLA%2FjFyeHeFQhS73tWMODq6%2FQLtvofpuKe7edaYbBDAWUCQPojpFZ8x3QcMnLU0Cz%2FTA0f6NWanbwWDE%2BoOr2bBnVGqsywTTdg8YCEPtVu9dqt24VPtUK17thYQXTyrJeILTHwOaoNnWgZJHTzziT0TVM8gRgFSHYs4z6EIaNcK%2BpcYVBJXMjxD798VQ5Js9ytE8tPFI3W3sYCx7MO8yCslduIfb4POChHCMO57ESzNn1npM4ZBZxK7R6w%2FE5PXZ6mvOC90CJbKFYTlJDCgIHWPryZfhA9rMBkp7Bx9o73NgfxlPKOYpamA30%2BQXKAeLLeWBzxnru6zQX%2B7Ze%2BaiByOQZq%2Fmb0CDOMWcJpF6MItALzeWjjyUlDcIsfcXX8tOKHhu7TG9LNtTY8jFLXXk6oMB0VcMDRuDjOQ6k454ho1Ut87jie5SdeoBo1RcpSJsVtavmbKfCKm4TXR%2FtRlR3KbuwCzSUF%2BL8GsrIAcNC3qsqUZcz6DFo7ox%2FhtXoZrx4ohLv31gRpBLICDxYBH2eMOLC7cIGOqUBRJq%2B8riaRHu4mEWbnWV8%2BGQ8dFaYyHJXiprJxaNiKBDpzKGLjyNGYofC95qzvUNrPW%2FeWwy0%2F%2BOI3ASs8PmubduOwbrrC4bcwmVV0P2tvywG%2B5cbVGtZdkAPN405kS9%2FETGZWvBviBvtoWlEZD7MbzC1GKyWVdwC6ssixSzIKB%2Bd%2FEPOBAZFmflbcbO%2B2gTxdsXLqX0AZK7QE%2BXYLpi807AJGINH&X-Amz-Signature=a4f959425930c406c5b23fe411caa00c428420c1c1dfc35721e06984dee4e649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZNG2OTR%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDXyw5niADJslGbECl38oXqrmfYnu7eoPe8F86%2FFLgrbAiEA2TD8j6L9rVr9bAvNVubuC8uA8r4APb0UZio7AK0C2Kcq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDA30FgaIS4Q8XkY%2BJCrcA3HdcfS52iJ8STQ32VMBseRJmplsDpFdpC0iG1n8llfkWVaGOR%2FOa6r2a68If0oSEh5EXCKGwheDR1q0aoVCtwcY0ns%2FG4RMtGz3DDhZLA%2FjFyeHeFQhS73tWMODq6%2FQLtvofpuKe7edaYbBDAWUCQPojpFZ8x3QcMnLU0Cz%2FTA0f6NWanbwWDE%2BoOr2bBnVGqsywTTdg8YCEPtVu9dqt24VPtUK17thYQXTyrJeILTHwOaoNnWgZJHTzziT0TVM8gRgFSHYs4z6EIaNcK%2BpcYVBJXMjxD798VQ5Js9ytE8tPFI3W3sYCx7MO8yCslduIfb4POChHCMO57ESzNn1npM4ZBZxK7R6w%2FE5PXZ6mvOC90CJbKFYTlJDCgIHWPryZfhA9rMBkp7Bx9o73NgfxlPKOYpamA30%2BQXKAeLLeWBzxnru6zQX%2B7Ze%2BaiByOQZq%2Fmb0CDOMWcJpF6MItALzeWjjyUlDcIsfcXX8tOKHhu7TG9LNtTY8jFLXXk6oMB0VcMDRuDjOQ6k454ho1Ut87jie5SdeoBo1RcpSJsVtavmbKfCKm4TXR%2FtRlR3KbuwCzSUF%2BL8GsrIAcNC3qsqUZcz6DFo7ox%2FhtXoZrx4ohLv31gRpBLICDxYBH2eMOLC7cIGOqUBRJq%2B8riaRHu4mEWbnWV8%2BGQ8dFaYyHJXiprJxaNiKBDpzKGLjyNGYofC95qzvUNrPW%2FeWwy0%2F%2BOI3ASs8PmubduOwbrrC4bcwmVV0P2tvywG%2B5cbVGtZdkAPN405kS9%2FETGZWvBviBvtoWlEZD7MbzC1GKyWVdwC6ssixSzIKB%2Bd%2FEPOBAZFmflbcbO%2B2gTxdsXLqX0AZK7QE%2BXYLpi807AJGINH&X-Amz-Signature=ce860274696681316f774a66da334e17da7e415240a92e68dfd500ecae7fe8ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZNG2OTR%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDXyw5niADJslGbECl38oXqrmfYnu7eoPe8F86%2FFLgrbAiEA2TD8j6L9rVr9bAvNVubuC8uA8r4APb0UZio7AK0C2Kcq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDA30FgaIS4Q8XkY%2BJCrcA3HdcfS52iJ8STQ32VMBseRJmplsDpFdpC0iG1n8llfkWVaGOR%2FOa6r2a68If0oSEh5EXCKGwheDR1q0aoVCtwcY0ns%2FG4RMtGz3DDhZLA%2FjFyeHeFQhS73tWMODq6%2FQLtvofpuKe7edaYbBDAWUCQPojpFZ8x3QcMnLU0Cz%2FTA0f6NWanbwWDE%2BoOr2bBnVGqsywTTdg8YCEPtVu9dqt24VPtUK17thYQXTyrJeILTHwOaoNnWgZJHTzziT0TVM8gRgFSHYs4z6EIaNcK%2BpcYVBJXMjxD798VQ5Js9ytE8tPFI3W3sYCx7MO8yCslduIfb4POChHCMO57ESzNn1npM4ZBZxK7R6w%2FE5PXZ6mvOC90CJbKFYTlJDCgIHWPryZfhA9rMBkp7Bx9o73NgfxlPKOYpamA30%2BQXKAeLLeWBzxnru6zQX%2B7Ze%2BaiByOQZq%2Fmb0CDOMWcJpF6MItALzeWjjyUlDcIsfcXX8tOKHhu7TG9LNtTY8jFLXXk6oMB0VcMDRuDjOQ6k454ho1Ut87jie5SdeoBo1RcpSJsVtavmbKfCKm4TXR%2FtRlR3KbuwCzSUF%2BL8GsrIAcNC3qsqUZcz6DFo7ox%2FhtXoZrx4ohLv31gRpBLICDxYBH2eMOLC7cIGOqUBRJq%2B8riaRHu4mEWbnWV8%2BGQ8dFaYyHJXiprJxaNiKBDpzKGLjyNGYofC95qzvUNrPW%2FeWwy0%2F%2BOI3ASs8PmubduOwbrrC4bcwmVV0P2tvywG%2B5cbVGtZdkAPN405kS9%2FETGZWvBviBvtoWlEZD7MbzC1GKyWVdwC6ssixSzIKB%2Bd%2FEPOBAZFmflbcbO%2B2gTxdsXLqX0AZK7QE%2BXYLpi807AJGINH&X-Amz-Signature=96c4545d579f7a65bfa25a744e0334f6bd12ac2a3fa82be00d0f3db15b954fd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZNG2OTR%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDXyw5niADJslGbECl38oXqrmfYnu7eoPe8F86%2FFLgrbAiEA2TD8j6L9rVr9bAvNVubuC8uA8r4APb0UZio7AK0C2Kcq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDA30FgaIS4Q8XkY%2BJCrcA3HdcfS52iJ8STQ32VMBseRJmplsDpFdpC0iG1n8llfkWVaGOR%2FOa6r2a68If0oSEh5EXCKGwheDR1q0aoVCtwcY0ns%2FG4RMtGz3DDhZLA%2FjFyeHeFQhS73tWMODq6%2FQLtvofpuKe7edaYbBDAWUCQPojpFZ8x3QcMnLU0Cz%2FTA0f6NWanbwWDE%2BoOr2bBnVGqsywTTdg8YCEPtVu9dqt24VPtUK17thYQXTyrJeILTHwOaoNnWgZJHTzziT0TVM8gRgFSHYs4z6EIaNcK%2BpcYVBJXMjxD798VQ5Js9ytE8tPFI3W3sYCx7MO8yCslduIfb4POChHCMO57ESzNn1npM4ZBZxK7R6w%2FE5PXZ6mvOC90CJbKFYTlJDCgIHWPryZfhA9rMBkp7Bx9o73NgfxlPKOYpamA30%2BQXKAeLLeWBzxnru6zQX%2B7Ze%2BaiByOQZq%2Fmb0CDOMWcJpF6MItALzeWjjyUlDcIsfcXX8tOKHhu7TG9LNtTY8jFLXXk6oMB0VcMDRuDjOQ6k454ho1Ut87jie5SdeoBo1RcpSJsVtavmbKfCKm4TXR%2FtRlR3KbuwCzSUF%2BL8GsrIAcNC3qsqUZcz6DFo7ox%2FhtXoZrx4ohLv31gRpBLICDxYBH2eMOLC7cIGOqUBRJq%2B8riaRHu4mEWbnWV8%2BGQ8dFaYyHJXiprJxaNiKBDpzKGLjyNGYofC95qzvUNrPW%2FeWwy0%2F%2BOI3ASs8PmubduOwbrrC4bcwmVV0P2tvywG%2B5cbVGtZdkAPN405kS9%2FETGZWvBviBvtoWlEZD7MbzC1GKyWVdwC6ssixSzIKB%2Bd%2FEPOBAZFmflbcbO%2B2gTxdsXLqX0AZK7QE%2BXYLpi807AJGINH&X-Amz-Signature=f98b3bbf60857fddfaea7329ed1c28df60b783987ba45de7d608b20b97f7614b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZNG2OTR%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDXyw5niADJslGbECl38oXqrmfYnu7eoPe8F86%2FFLgrbAiEA2TD8j6L9rVr9bAvNVubuC8uA8r4APb0UZio7AK0C2Kcq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDA30FgaIS4Q8XkY%2BJCrcA3HdcfS52iJ8STQ32VMBseRJmplsDpFdpC0iG1n8llfkWVaGOR%2FOa6r2a68If0oSEh5EXCKGwheDR1q0aoVCtwcY0ns%2FG4RMtGz3DDhZLA%2FjFyeHeFQhS73tWMODq6%2FQLtvofpuKe7edaYbBDAWUCQPojpFZ8x3QcMnLU0Cz%2FTA0f6NWanbwWDE%2BoOr2bBnVGqsywTTdg8YCEPtVu9dqt24VPtUK17thYQXTyrJeILTHwOaoNnWgZJHTzziT0TVM8gRgFSHYs4z6EIaNcK%2BpcYVBJXMjxD798VQ5Js9ytE8tPFI3W3sYCx7MO8yCslduIfb4POChHCMO57ESzNn1npM4ZBZxK7R6w%2FE5PXZ6mvOC90CJbKFYTlJDCgIHWPryZfhA9rMBkp7Bx9o73NgfxlPKOYpamA30%2BQXKAeLLeWBzxnru6zQX%2B7Ze%2BaiByOQZq%2Fmb0CDOMWcJpF6MItALzeWjjyUlDcIsfcXX8tOKHhu7TG9LNtTY8jFLXXk6oMB0VcMDRuDjOQ6k454ho1Ut87jie5SdeoBo1RcpSJsVtavmbKfCKm4TXR%2FtRlR3KbuwCzSUF%2BL8GsrIAcNC3qsqUZcz6DFo7ox%2FhtXoZrx4ohLv31gRpBLICDxYBH2eMOLC7cIGOqUBRJq%2B8riaRHu4mEWbnWV8%2BGQ8dFaYyHJXiprJxaNiKBDpzKGLjyNGYofC95qzvUNrPW%2FeWwy0%2F%2BOI3ASs8PmubduOwbrrC4bcwmVV0P2tvywG%2B5cbVGtZdkAPN405kS9%2FETGZWvBviBvtoWlEZD7MbzC1GKyWVdwC6ssixSzIKB%2Bd%2FEPOBAZFmflbcbO%2B2gTxdsXLqX0AZK7QE%2BXYLpi807AJGINH&X-Amz-Signature=acb3ad2733fae89ce28b4c525b3e9e145fd280a5f98eaf41efc1e985b5402926&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZNG2OTR%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDXyw5niADJslGbECl38oXqrmfYnu7eoPe8F86%2FFLgrbAiEA2TD8j6L9rVr9bAvNVubuC8uA8r4APb0UZio7AK0C2Kcq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDA30FgaIS4Q8XkY%2BJCrcA3HdcfS52iJ8STQ32VMBseRJmplsDpFdpC0iG1n8llfkWVaGOR%2FOa6r2a68If0oSEh5EXCKGwheDR1q0aoVCtwcY0ns%2FG4RMtGz3DDhZLA%2FjFyeHeFQhS73tWMODq6%2FQLtvofpuKe7edaYbBDAWUCQPojpFZ8x3QcMnLU0Cz%2FTA0f6NWanbwWDE%2BoOr2bBnVGqsywTTdg8YCEPtVu9dqt24VPtUK17thYQXTyrJeILTHwOaoNnWgZJHTzziT0TVM8gRgFSHYs4z6EIaNcK%2BpcYVBJXMjxD798VQ5Js9ytE8tPFI3W3sYCx7MO8yCslduIfb4POChHCMO57ESzNn1npM4ZBZxK7R6w%2FE5PXZ6mvOC90CJbKFYTlJDCgIHWPryZfhA9rMBkp7Bx9o73NgfxlPKOYpamA30%2BQXKAeLLeWBzxnru6zQX%2B7Ze%2BaiByOQZq%2Fmb0CDOMWcJpF6MItALzeWjjyUlDcIsfcXX8tOKHhu7TG9LNtTY8jFLXXk6oMB0VcMDRuDjOQ6k454ho1Ut87jie5SdeoBo1RcpSJsVtavmbKfCKm4TXR%2FtRlR3KbuwCzSUF%2BL8GsrIAcNC3qsqUZcz6DFo7ox%2FhtXoZrx4ohLv31gRpBLICDxYBH2eMOLC7cIGOqUBRJq%2B8riaRHu4mEWbnWV8%2BGQ8dFaYyHJXiprJxaNiKBDpzKGLjyNGYofC95qzvUNrPW%2FeWwy0%2F%2BOI3ASs8PmubduOwbrrC4bcwmVV0P2tvywG%2B5cbVGtZdkAPN405kS9%2FETGZWvBviBvtoWlEZD7MbzC1GKyWVdwC6ssixSzIKB%2Bd%2FEPOBAZFmflbcbO%2B2gTxdsXLqX0AZK7QE%2BXYLpi807AJGINH&X-Amz-Signature=2dced3ddd8a297f0ac8226b13c576eea9b607f3a3340f26a5c7744ead69b856d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZNG2OTR%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDXyw5niADJslGbECl38oXqrmfYnu7eoPe8F86%2FFLgrbAiEA2TD8j6L9rVr9bAvNVubuC8uA8r4APb0UZio7AK0C2Kcq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDA30FgaIS4Q8XkY%2BJCrcA3HdcfS52iJ8STQ32VMBseRJmplsDpFdpC0iG1n8llfkWVaGOR%2FOa6r2a68If0oSEh5EXCKGwheDR1q0aoVCtwcY0ns%2FG4RMtGz3DDhZLA%2FjFyeHeFQhS73tWMODq6%2FQLtvofpuKe7edaYbBDAWUCQPojpFZ8x3QcMnLU0Cz%2FTA0f6NWanbwWDE%2BoOr2bBnVGqsywTTdg8YCEPtVu9dqt24VPtUK17thYQXTyrJeILTHwOaoNnWgZJHTzziT0TVM8gRgFSHYs4z6EIaNcK%2BpcYVBJXMjxD798VQ5Js9ytE8tPFI3W3sYCx7MO8yCslduIfb4POChHCMO57ESzNn1npM4ZBZxK7R6w%2FE5PXZ6mvOC90CJbKFYTlJDCgIHWPryZfhA9rMBkp7Bx9o73NgfxlPKOYpamA30%2BQXKAeLLeWBzxnru6zQX%2B7Ze%2BaiByOQZq%2Fmb0CDOMWcJpF6MItALzeWjjyUlDcIsfcXX8tOKHhu7TG9LNtTY8jFLXXk6oMB0VcMDRuDjOQ6k454ho1Ut87jie5SdeoBo1RcpSJsVtavmbKfCKm4TXR%2FtRlR3KbuwCzSUF%2BL8GsrIAcNC3qsqUZcz6DFo7ox%2FhtXoZrx4ohLv31gRpBLICDxYBH2eMOLC7cIGOqUBRJq%2B8riaRHu4mEWbnWV8%2BGQ8dFaYyHJXiprJxaNiKBDpzKGLjyNGYofC95qzvUNrPW%2FeWwy0%2F%2BOI3ASs8PmubduOwbrrC4bcwmVV0P2tvywG%2B5cbVGtZdkAPN405kS9%2FETGZWvBviBvtoWlEZD7MbzC1GKyWVdwC6ssixSzIKB%2Bd%2FEPOBAZFmflbcbO%2B2gTxdsXLqX0AZK7QE%2BXYLpi807AJGINH&X-Amz-Signature=9daec5668835b409ecc7c1eddb70748f24484f808b533bb23a89d8b7c8ef681e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZNG2OTR%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDXyw5niADJslGbECl38oXqrmfYnu7eoPe8F86%2FFLgrbAiEA2TD8j6L9rVr9bAvNVubuC8uA8r4APb0UZio7AK0C2Kcq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDA30FgaIS4Q8XkY%2BJCrcA3HdcfS52iJ8STQ32VMBseRJmplsDpFdpC0iG1n8llfkWVaGOR%2FOa6r2a68If0oSEh5EXCKGwheDR1q0aoVCtwcY0ns%2FG4RMtGz3DDhZLA%2FjFyeHeFQhS73tWMODq6%2FQLtvofpuKe7edaYbBDAWUCQPojpFZ8x3QcMnLU0Cz%2FTA0f6NWanbwWDE%2BoOr2bBnVGqsywTTdg8YCEPtVu9dqt24VPtUK17thYQXTyrJeILTHwOaoNnWgZJHTzziT0TVM8gRgFSHYs4z6EIaNcK%2BpcYVBJXMjxD798VQ5Js9ytE8tPFI3W3sYCx7MO8yCslduIfb4POChHCMO57ESzNn1npM4ZBZxK7R6w%2FE5PXZ6mvOC90CJbKFYTlJDCgIHWPryZfhA9rMBkp7Bx9o73NgfxlPKOYpamA30%2BQXKAeLLeWBzxnru6zQX%2B7Ze%2BaiByOQZq%2Fmb0CDOMWcJpF6MItALzeWjjyUlDcIsfcXX8tOKHhu7TG9LNtTY8jFLXXk6oMB0VcMDRuDjOQ6k454ho1Ut87jie5SdeoBo1RcpSJsVtavmbKfCKm4TXR%2FtRlR3KbuwCzSUF%2BL8GsrIAcNC3qsqUZcz6DFo7ox%2FhtXoZrx4ohLv31gRpBLICDxYBH2eMOLC7cIGOqUBRJq%2B8riaRHu4mEWbnWV8%2BGQ8dFaYyHJXiprJxaNiKBDpzKGLjyNGYofC95qzvUNrPW%2FeWwy0%2F%2BOI3ASs8PmubduOwbrrC4bcwmVV0P2tvywG%2B5cbVGtZdkAPN405kS9%2FETGZWvBviBvtoWlEZD7MbzC1GKyWVdwC6ssixSzIKB%2Bd%2FEPOBAZFmflbcbO%2B2gTxdsXLqX0AZK7QE%2BXYLpi807AJGINH&X-Amz-Signature=0837fa2f2c59c60f8b2b33da2be97bff956bf5000e572737ecd77166ec48595b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
