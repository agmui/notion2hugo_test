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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGQ6RT4B%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCBywvNEOFbw1w7ibIemF74Zg8OOXZQ0jy8Z8AMr%2FPFtAIhAL21jSsetCPOl10JGr7AJydmuDfSPXDqh1TgFbEa6GzRKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNnOX2evzDrglz79Iq3AMl%2FvGj4y56cXIp2pJYeHq1%2BoUxxVLy2xLm6%2F2DelfaAM1q0lrYFVlJ9%2B0LEc0LBrlg3fLxFU6wOoj5LsK42fpL5D7ucRLGSQ15kT1VyJpfGEudq9C9m0Yqs7znasSNxq8Tidv4M4w6t3%2FywtGEZWCUd%2FW3ZE6iJqa8y2LD%2Fqy5nsI9JPLn7q7z6%2Fzr8yogSlR6RQVETh0EEAmysgqTFYmms4XVqBu9J426a%2FYBtF%2Fg6F1TSzxrWhLiyX0NkAs5O8nrVr6iI2RQQdXKJgMVVsHhCwu9xS%2Fe0drjUk6A4%2BJIjZIqCKGRw1LIhI%2FgM%2BMhXSPQEGXOTQrtHNeMGepkt1d6tymlR0toydoAfP3DNC6zcHxkZqC0GmyJ0S5S7pSADym1p941iYvOOIs8qVVPuWd1OGIuysdduzX%2BPD8f9%2B9etnlRjGvh8xpYSABKtZ37wHw055AjWSTvZU%2BaOUEfaG1yauT6wy6veQw3Y5O8oLsxbLcaJlhuNypj1lGgmoV%2BrsPtAMlqCaFAqDVXmorip99cEIoiA9Oh3QAIybh2cBW5P%2FLkGxFbIJGp6BGQHEMQOLv5SswABzcy4WJsjbzOOUtjq5Fu1layV0yA22LLOaJRdrTNa%2BO64aEA8PTNozCTooPBBjqkAYNGgRcRnSYryOLcqpTPJ7CmSAzldJreAfvJ6bOeku8TkdQlEQViRuBXChmXF0SFARRo4KPLpjSg2ddYScxEIfMlz6HXj1bUIQxTHOJ013LefbqcLQoqBXNT8lgph7akEoLBq3J2rQAmo70ifYYQa2aqIT22g%2F6m50qBXQc%2F4D31EjN7lVe9mxSIpmS0a3%2FLPaHmnus2rPTY3HGlgs%2BtG2rSQOOK&X-Amz-Signature=70d947b1b047cc6a2a81a5d6e78f3649cf9ef5599801a2d61a6f894ccf7a6a27&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGQ6RT4B%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCBywvNEOFbw1w7ibIemF74Zg8OOXZQ0jy8Z8AMr%2FPFtAIhAL21jSsetCPOl10JGr7AJydmuDfSPXDqh1TgFbEa6GzRKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNnOX2evzDrglz79Iq3AMl%2FvGj4y56cXIp2pJYeHq1%2BoUxxVLy2xLm6%2F2DelfaAM1q0lrYFVlJ9%2B0LEc0LBrlg3fLxFU6wOoj5LsK42fpL5D7ucRLGSQ15kT1VyJpfGEudq9C9m0Yqs7znasSNxq8Tidv4M4w6t3%2FywtGEZWCUd%2FW3ZE6iJqa8y2LD%2Fqy5nsI9JPLn7q7z6%2Fzr8yogSlR6RQVETh0EEAmysgqTFYmms4XVqBu9J426a%2FYBtF%2Fg6F1TSzxrWhLiyX0NkAs5O8nrVr6iI2RQQdXKJgMVVsHhCwu9xS%2Fe0drjUk6A4%2BJIjZIqCKGRw1LIhI%2FgM%2BMhXSPQEGXOTQrtHNeMGepkt1d6tymlR0toydoAfP3DNC6zcHxkZqC0GmyJ0S5S7pSADym1p941iYvOOIs8qVVPuWd1OGIuysdduzX%2BPD8f9%2B9etnlRjGvh8xpYSABKtZ37wHw055AjWSTvZU%2BaOUEfaG1yauT6wy6veQw3Y5O8oLsxbLcaJlhuNypj1lGgmoV%2BrsPtAMlqCaFAqDVXmorip99cEIoiA9Oh3QAIybh2cBW5P%2FLkGxFbIJGp6BGQHEMQOLv5SswABzcy4WJsjbzOOUtjq5Fu1layV0yA22LLOaJRdrTNa%2BO64aEA8PTNozCTooPBBjqkAYNGgRcRnSYryOLcqpTPJ7CmSAzldJreAfvJ6bOeku8TkdQlEQViRuBXChmXF0SFARRo4KPLpjSg2ddYScxEIfMlz6HXj1bUIQxTHOJ013LefbqcLQoqBXNT8lgph7akEoLBq3J2rQAmo70ifYYQa2aqIT22g%2F6m50qBXQc%2F4D31EjN7lVe9mxSIpmS0a3%2FLPaHmnus2rPTY3HGlgs%2BtG2rSQOOK&X-Amz-Signature=1df47b579662f9f1325c56a73d093b2206a13bb78fe234878997d0368e19e508&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGQ6RT4B%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCBywvNEOFbw1w7ibIemF74Zg8OOXZQ0jy8Z8AMr%2FPFtAIhAL21jSsetCPOl10JGr7AJydmuDfSPXDqh1TgFbEa6GzRKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNnOX2evzDrglz79Iq3AMl%2FvGj4y56cXIp2pJYeHq1%2BoUxxVLy2xLm6%2F2DelfaAM1q0lrYFVlJ9%2B0LEc0LBrlg3fLxFU6wOoj5LsK42fpL5D7ucRLGSQ15kT1VyJpfGEudq9C9m0Yqs7znasSNxq8Tidv4M4w6t3%2FywtGEZWCUd%2FW3ZE6iJqa8y2LD%2Fqy5nsI9JPLn7q7z6%2Fzr8yogSlR6RQVETh0EEAmysgqTFYmms4XVqBu9J426a%2FYBtF%2Fg6F1TSzxrWhLiyX0NkAs5O8nrVr6iI2RQQdXKJgMVVsHhCwu9xS%2Fe0drjUk6A4%2BJIjZIqCKGRw1LIhI%2FgM%2BMhXSPQEGXOTQrtHNeMGepkt1d6tymlR0toydoAfP3DNC6zcHxkZqC0GmyJ0S5S7pSADym1p941iYvOOIs8qVVPuWd1OGIuysdduzX%2BPD8f9%2B9etnlRjGvh8xpYSABKtZ37wHw055AjWSTvZU%2BaOUEfaG1yauT6wy6veQw3Y5O8oLsxbLcaJlhuNypj1lGgmoV%2BrsPtAMlqCaFAqDVXmorip99cEIoiA9Oh3QAIybh2cBW5P%2FLkGxFbIJGp6BGQHEMQOLv5SswABzcy4WJsjbzOOUtjq5Fu1layV0yA22LLOaJRdrTNa%2BO64aEA8PTNozCTooPBBjqkAYNGgRcRnSYryOLcqpTPJ7CmSAzldJreAfvJ6bOeku8TkdQlEQViRuBXChmXF0SFARRo4KPLpjSg2ddYScxEIfMlz6HXj1bUIQxTHOJ013LefbqcLQoqBXNT8lgph7akEoLBq3J2rQAmo70ifYYQa2aqIT22g%2F6m50qBXQc%2F4D31EjN7lVe9mxSIpmS0a3%2FLPaHmnus2rPTY3HGlgs%2BtG2rSQOOK&X-Amz-Signature=a0f3bcdccf9e3e770ce6a5ed630562bdbb5a861739619bbf41756f0b4d2eb774&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGQ6RT4B%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCBywvNEOFbw1w7ibIemF74Zg8OOXZQ0jy8Z8AMr%2FPFtAIhAL21jSsetCPOl10JGr7AJydmuDfSPXDqh1TgFbEa6GzRKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNnOX2evzDrglz79Iq3AMl%2FvGj4y56cXIp2pJYeHq1%2BoUxxVLy2xLm6%2F2DelfaAM1q0lrYFVlJ9%2B0LEc0LBrlg3fLxFU6wOoj5LsK42fpL5D7ucRLGSQ15kT1VyJpfGEudq9C9m0Yqs7znasSNxq8Tidv4M4w6t3%2FywtGEZWCUd%2FW3ZE6iJqa8y2LD%2Fqy5nsI9JPLn7q7z6%2Fzr8yogSlR6RQVETh0EEAmysgqTFYmms4XVqBu9J426a%2FYBtF%2Fg6F1TSzxrWhLiyX0NkAs5O8nrVr6iI2RQQdXKJgMVVsHhCwu9xS%2Fe0drjUk6A4%2BJIjZIqCKGRw1LIhI%2FgM%2BMhXSPQEGXOTQrtHNeMGepkt1d6tymlR0toydoAfP3DNC6zcHxkZqC0GmyJ0S5S7pSADym1p941iYvOOIs8qVVPuWd1OGIuysdduzX%2BPD8f9%2B9etnlRjGvh8xpYSABKtZ37wHw055AjWSTvZU%2BaOUEfaG1yauT6wy6veQw3Y5O8oLsxbLcaJlhuNypj1lGgmoV%2BrsPtAMlqCaFAqDVXmorip99cEIoiA9Oh3QAIybh2cBW5P%2FLkGxFbIJGp6BGQHEMQOLv5SswABzcy4WJsjbzOOUtjq5Fu1layV0yA22LLOaJRdrTNa%2BO64aEA8PTNozCTooPBBjqkAYNGgRcRnSYryOLcqpTPJ7CmSAzldJreAfvJ6bOeku8TkdQlEQViRuBXChmXF0SFARRo4KPLpjSg2ddYScxEIfMlz6HXj1bUIQxTHOJ013LefbqcLQoqBXNT8lgph7akEoLBq3J2rQAmo70ifYYQa2aqIT22g%2F6m50qBXQc%2F4D31EjN7lVe9mxSIpmS0a3%2FLPaHmnus2rPTY3HGlgs%2BtG2rSQOOK&X-Amz-Signature=2d3fd56b921202c133d88318d13532c11114e011f9d29a497bba54ca45e69e5e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGQ6RT4B%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCBywvNEOFbw1w7ibIemF74Zg8OOXZQ0jy8Z8AMr%2FPFtAIhAL21jSsetCPOl10JGr7AJydmuDfSPXDqh1TgFbEa6GzRKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNnOX2evzDrglz79Iq3AMl%2FvGj4y56cXIp2pJYeHq1%2BoUxxVLy2xLm6%2F2DelfaAM1q0lrYFVlJ9%2B0LEc0LBrlg3fLxFU6wOoj5LsK42fpL5D7ucRLGSQ15kT1VyJpfGEudq9C9m0Yqs7znasSNxq8Tidv4M4w6t3%2FywtGEZWCUd%2FW3ZE6iJqa8y2LD%2Fqy5nsI9JPLn7q7z6%2Fzr8yogSlR6RQVETh0EEAmysgqTFYmms4XVqBu9J426a%2FYBtF%2Fg6F1TSzxrWhLiyX0NkAs5O8nrVr6iI2RQQdXKJgMVVsHhCwu9xS%2Fe0drjUk6A4%2BJIjZIqCKGRw1LIhI%2FgM%2BMhXSPQEGXOTQrtHNeMGepkt1d6tymlR0toydoAfP3DNC6zcHxkZqC0GmyJ0S5S7pSADym1p941iYvOOIs8qVVPuWd1OGIuysdduzX%2BPD8f9%2B9etnlRjGvh8xpYSABKtZ37wHw055AjWSTvZU%2BaOUEfaG1yauT6wy6veQw3Y5O8oLsxbLcaJlhuNypj1lGgmoV%2BrsPtAMlqCaFAqDVXmorip99cEIoiA9Oh3QAIybh2cBW5P%2FLkGxFbIJGp6BGQHEMQOLv5SswABzcy4WJsjbzOOUtjq5Fu1layV0yA22LLOaJRdrTNa%2BO64aEA8PTNozCTooPBBjqkAYNGgRcRnSYryOLcqpTPJ7CmSAzldJreAfvJ6bOeku8TkdQlEQViRuBXChmXF0SFARRo4KPLpjSg2ddYScxEIfMlz6HXj1bUIQxTHOJ013LefbqcLQoqBXNT8lgph7akEoLBq3J2rQAmo70ifYYQa2aqIT22g%2F6m50qBXQc%2F4D31EjN7lVe9mxSIpmS0a3%2FLPaHmnus2rPTY3HGlgs%2BtG2rSQOOK&X-Amz-Signature=b963b68dfa0d1c1d4d097fd62cd9d3f2ee3079c4ac518c3fc1cd2d977fb8a721&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGQ6RT4B%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCBywvNEOFbw1w7ibIemF74Zg8OOXZQ0jy8Z8AMr%2FPFtAIhAL21jSsetCPOl10JGr7AJydmuDfSPXDqh1TgFbEa6GzRKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNnOX2evzDrglz79Iq3AMl%2FvGj4y56cXIp2pJYeHq1%2BoUxxVLy2xLm6%2F2DelfaAM1q0lrYFVlJ9%2B0LEc0LBrlg3fLxFU6wOoj5LsK42fpL5D7ucRLGSQ15kT1VyJpfGEudq9C9m0Yqs7znasSNxq8Tidv4M4w6t3%2FywtGEZWCUd%2FW3ZE6iJqa8y2LD%2Fqy5nsI9JPLn7q7z6%2Fzr8yogSlR6RQVETh0EEAmysgqTFYmms4XVqBu9J426a%2FYBtF%2Fg6F1TSzxrWhLiyX0NkAs5O8nrVr6iI2RQQdXKJgMVVsHhCwu9xS%2Fe0drjUk6A4%2BJIjZIqCKGRw1LIhI%2FgM%2BMhXSPQEGXOTQrtHNeMGepkt1d6tymlR0toydoAfP3DNC6zcHxkZqC0GmyJ0S5S7pSADym1p941iYvOOIs8qVVPuWd1OGIuysdduzX%2BPD8f9%2B9etnlRjGvh8xpYSABKtZ37wHw055AjWSTvZU%2BaOUEfaG1yauT6wy6veQw3Y5O8oLsxbLcaJlhuNypj1lGgmoV%2BrsPtAMlqCaFAqDVXmorip99cEIoiA9Oh3QAIybh2cBW5P%2FLkGxFbIJGp6BGQHEMQOLv5SswABzcy4WJsjbzOOUtjq5Fu1layV0yA22LLOaJRdrTNa%2BO64aEA8PTNozCTooPBBjqkAYNGgRcRnSYryOLcqpTPJ7CmSAzldJreAfvJ6bOeku8TkdQlEQViRuBXChmXF0SFARRo4KPLpjSg2ddYScxEIfMlz6HXj1bUIQxTHOJ013LefbqcLQoqBXNT8lgph7akEoLBq3J2rQAmo70ifYYQa2aqIT22g%2F6m50qBXQc%2F4D31EjN7lVe9mxSIpmS0a3%2FLPaHmnus2rPTY3HGlgs%2BtG2rSQOOK&X-Amz-Signature=4d4054c431fe555ecdcec8585f20db4274fc0fa5750e350e03ea744c4d2215f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGQ6RT4B%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCBywvNEOFbw1w7ibIemF74Zg8OOXZQ0jy8Z8AMr%2FPFtAIhAL21jSsetCPOl10JGr7AJydmuDfSPXDqh1TgFbEa6GzRKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNnOX2evzDrglz79Iq3AMl%2FvGj4y56cXIp2pJYeHq1%2BoUxxVLy2xLm6%2F2DelfaAM1q0lrYFVlJ9%2B0LEc0LBrlg3fLxFU6wOoj5LsK42fpL5D7ucRLGSQ15kT1VyJpfGEudq9C9m0Yqs7znasSNxq8Tidv4M4w6t3%2FywtGEZWCUd%2FW3ZE6iJqa8y2LD%2Fqy5nsI9JPLn7q7z6%2Fzr8yogSlR6RQVETh0EEAmysgqTFYmms4XVqBu9J426a%2FYBtF%2Fg6F1TSzxrWhLiyX0NkAs5O8nrVr6iI2RQQdXKJgMVVsHhCwu9xS%2Fe0drjUk6A4%2BJIjZIqCKGRw1LIhI%2FgM%2BMhXSPQEGXOTQrtHNeMGepkt1d6tymlR0toydoAfP3DNC6zcHxkZqC0GmyJ0S5S7pSADym1p941iYvOOIs8qVVPuWd1OGIuysdduzX%2BPD8f9%2B9etnlRjGvh8xpYSABKtZ37wHw055AjWSTvZU%2BaOUEfaG1yauT6wy6veQw3Y5O8oLsxbLcaJlhuNypj1lGgmoV%2BrsPtAMlqCaFAqDVXmorip99cEIoiA9Oh3QAIybh2cBW5P%2FLkGxFbIJGp6BGQHEMQOLv5SswABzcy4WJsjbzOOUtjq5Fu1layV0yA22LLOaJRdrTNa%2BO64aEA8PTNozCTooPBBjqkAYNGgRcRnSYryOLcqpTPJ7CmSAzldJreAfvJ6bOeku8TkdQlEQViRuBXChmXF0SFARRo4KPLpjSg2ddYScxEIfMlz6HXj1bUIQxTHOJ013LefbqcLQoqBXNT8lgph7akEoLBq3J2rQAmo70ifYYQa2aqIT22g%2F6m50qBXQc%2F4D31EjN7lVe9mxSIpmS0a3%2FLPaHmnus2rPTY3HGlgs%2BtG2rSQOOK&X-Amz-Signature=bb47830459b3cc91db62c118f985b80d885e0a03989d0496bd242c70b897113b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGQ6RT4B%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCBywvNEOFbw1w7ibIemF74Zg8OOXZQ0jy8Z8AMr%2FPFtAIhAL21jSsetCPOl10JGr7AJydmuDfSPXDqh1TgFbEa6GzRKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNnOX2evzDrglz79Iq3AMl%2FvGj4y56cXIp2pJYeHq1%2BoUxxVLy2xLm6%2F2DelfaAM1q0lrYFVlJ9%2B0LEc0LBrlg3fLxFU6wOoj5LsK42fpL5D7ucRLGSQ15kT1VyJpfGEudq9C9m0Yqs7znasSNxq8Tidv4M4w6t3%2FywtGEZWCUd%2FW3ZE6iJqa8y2LD%2Fqy5nsI9JPLn7q7z6%2Fzr8yogSlR6RQVETh0EEAmysgqTFYmms4XVqBu9J426a%2FYBtF%2Fg6F1TSzxrWhLiyX0NkAs5O8nrVr6iI2RQQdXKJgMVVsHhCwu9xS%2Fe0drjUk6A4%2BJIjZIqCKGRw1LIhI%2FgM%2BMhXSPQEGXOTQrtHNeMGepkt1d6tymlR0toydoAfP3DNC6zcHxkZqC0GmyJ0S5S7pSADym1p941iYvOOIs8qVVPuWd1OGIuysdduzX%2BPD8f9%2B9etnlRjGvh8xpYSABKtZ37wHw055AjWSTvZU%2BaOUEfaG1yauT6wy6veQw3Y5O8oLsxbLcaJlhuNypj1lGgmoV%2BrsPtAMlqCaFAqDVXmorip99cEIoiA9Oh3QAIybh2cBW5P%2FLkGxFbIJGp6BGQHEMQOLv5SswABzcy4WJsjbzOOUtjq5Fu1layV0yA22LLOaJRdrTNa%2BO64aEA8PTNozCTooPBBjqkAYNGgRcRnSYryOLcqpTPJ7CmSAzldJreAfvJ6bOeku8TkdQlEQViRuBXChmXF0SFARRo4KPLpjSg2ddYScxEIfMlz6HXj1bUIQxTHOJ013LefbqcLQoqBXNT8lgph7akEoLBq3J2rQAmo70ifYYQa2aqIT22g%2F6m50qBXQc%2F4D31EjN7lVe9mxSIpmS0a3%2FLPaHmnus2rPTY3HGlgs%2BtG2rSQOOK&X-Amz-Signature=d139a187b96cbf4fa2520879f83be8017fe2d1b87cfd953a28260079a70969ab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
