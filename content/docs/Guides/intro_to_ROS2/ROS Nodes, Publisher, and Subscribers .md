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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646CCPWN5%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T091036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoZtfeBWa0GLUCBhtEJIg81il0bg8xj8fSLIwrQsf5ZAIhAJmqoqWxtxt2qpHLWx6QVhMA8RB3v7tUTYkUV25nVUxqKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwN5Wmpk6cD472JRrMq3AN75m7%2Ft0mMiPV1AmzvfWOTPYPqq%2BfTmSCekp8KXH2fqvW2HjtOkQKA0vbBg%2ByxrnQxIR4BHKxhTkxfJ9Ri2lbsxZ1HnJYmn%2B5v8Aw1MtHbtQv%2BkAXJu7yukPtiwMe6VGW6Vv%2FARxCxnFB%2FUB4v4sH%2FIrLMnvtTCxv5g077A2%2FgEZpkowHfvD1Ht3Kt6%2B23UyVMj7UeMaJ1j%2BbcLrt8EV%2B6eiDu0WHPXFsSAm2znFE9JopqqEXUhITiZnEZeGY6wyPlUNIXFhY813BrDa8oYe0ro5tmykO%2FiJXxOE4s4KQIoNCqfC%2FIfX2Bb3EWSWkO7rOqUjl9KlgPdc%2BBsZDED4n%2BfpquLuEXLdn48tGqQS30DZAHVMhPaCAa53HfL1hDXtliIYyoT3csz2vDMZTQbs14T3YZ0%2FIWWL6RcTGWbxemsZecZLPXazfKtTNotoZuOVcs9pxiBbVruFkrMpdEMhvqW40U4dr6x%2FWtsoMFgDIrynrm5PwVMC%2FBDUAO%2F40f0TF9eZlkhYncIDvkUfEmByX%2FD8tAdO9p2AemCZEChszMJlQ%2FBWzezqyIm5CPQtz4ASuW%2FWVd%2FQkJrrHANxcw%2BJmkVa%2Fw7HWU81a1NN%2BdkO%2B0ErrIUbeXbI%2FqKJCQPjDD7snCBjqkAaevhuu%2B8sIgRitto0teQvtVaalyawyBpRCgKNdkKEoMsGZqUD3T7%2BmJJuWOaRLDxpM%2F37DmKyx41tpmiS5iPLfy6%2FZRRMB4xsLO7vsHVf%2BA6kFJBAOa9wKL5HAHVuK%2BbTCn6mWcafiatlCNYEpx3c1IRtudECk1xLFPSszZ1tlkag9u15kuGWfLxP6oSO1m98bzd1%2FIEz1Mho4f%2Beb6fJTj8mWp&X-Amz-Signature=ed2df5c6401556d5668f6b08a5f820430ac28404e19f433a0fad70a50dfd82f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646CCPWN5%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T091036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoZtfeBWa0GLUCBhtEJIg81il0bg8xj8fSLIwrQsf5ZAIhAJmqoqWxtxt2qpHLWx6QVhMA8RB3v7tUTYkUV25nVUxqKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwN5Wmpk6cD472JRrMq3AN75m7%2Ft0mMiPV1AmzvfWOTPYPqq%2BfTmSCekp8KXH2fqvW2HjtOkQKA0vbBg%2ByxrnQxIR4BHKxhTkxfJ9Ri2lbsxZ1HnJYmn%2B5v8Aw1MtHbtQv%2BkAXJu7yukPtiwMe6VGW6Vv%2FARxCxnFB%2FUB4v4sH%2FIrLMnvtTCxv5g077A2%2FgEZpkowHfvD1Ht3Kt6%2B23UyVMj7UeMaJ1j%2BbcLrt8EV%2B6eiDu0WHPXFsSAm2znFE9JopqqEXUhITiZnEZeGY6wyPlUNIXFhY813BrDa8oYe0ro5tmykO%2FiJXxOE4s4KQIoNCqfC%2FIfX2Bb3EWSWkO7rOqUjl9KlgPdc%2BBsZDED4n%2BfpquLuEXLdn48tGqQS30DZAHVMhPaCAa53HfL1hDXtliIYyoT3csz2vDMZTQbs14T3YZ0%2FIWWL6RcTGWbxemsZecZLPXazfKtTNotoZuOVcs9pxiBbVruFkrMpdEMhvqW40U4dr6x%2FWtsoMFgDIrynrm5PwVMC%2FBDUAO%2F40f0TF9eZlkhYncIDvkUfEmByX%2FD8tAdO9p2AemCZEChszMJlQ%2FBWzezqyIm5CPQtz4ASuW%2FWVd%2FQkJrrHANxcw%2BJmkVa%2Fw7HWU81a1NN%2BdkO%2B0ErrIUbeXbI%2FqKJCQPjDD7snCBjqkAaevhuu%2B8sIgRitto0teQvtVaalyawyBpRCgKNdkKEoMsGZqUD3T7%2BmJJuWOaRLDxpM%2F37DmKyx41tpmiS5iPLfy6%2FZRRMB4xsLO7vsHVf%2BA6kFJBAOa9wKL5HAHVuK%2BbTCn6mWcafiatlCNYEpx3c1IRtudECk1xLFPSszZ1tlkag9u15kuGWfLxP6oSO1m98bzd1%2FIEz1Mho4f%2Beb6fJTj8mWp&X-Amz-Signature=8e0417f73df3789aae1f750897d4c332b263493bc554bf0a5a6d120a2cd0c743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646CCPWN5%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T091036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoZtfeBWa0GLUCBhtEJIg81il0bg8xj8fSLIwrQsf5ZAIhAJmqoqWxtxt2qpHLWx6QVhMA8RB3v7tUTYkUV25nVUxqKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwN5Wmpk6cD472JRrMq3AN75m7%2Ft0mMiPV1AmzvfWOTPYPqq%2BfTmSCekp8KXH2fqvW2HjtOkQKA0vbBg%2ByxrnQxIR4BHKxhTkxfJ9Ri2lbsxZ1HnJYmn%2B5v8Aw1MtHbtQv%2BkAXJu7yukPtiwMe6VGW6Vv%2FARxCxnFB%2FUB4v4sH%2FIrLMnvtTCxv5g077A2%2FgEZpkowHfvD1Ht3Kt6%2B23UyVMj7UeMaJ1j%2BbcLrt8EV%2B6eiDu0WHPXFsSAm2znFE9JopqqEXUhITiZnEZeGY6wyPlUNIXFhY813BrDa8oYe0ro5tmykO%2FiJXxOE4s4KQIoNCqfC%2FIfX2Bb3EWSWkO7rOqUjl9KlgPdc%2BBsZDED4n%2BfpquLuEXLdn48tGqQS30DZAHVMhPaCAa53HfL1hDXtliIYyoT3csz2vDMZTQbs14T3YZ0%2FIWWL6RcTGWbxemsZecZLPXazfKtTNotoZuOVcs9pxiBbVruFkrMpdEMhvqW40U4dr6x%2FWtsoMFgDIrynrm5PwVMC%2FBDUAO%2F40f0TF9eZlkhYncIDvkUfEmByX%2FD8tAdO9p2AemCZEChszMJlQ%2FBWzezqyIm5CPQtz4ASuW%2FWVd%2FQkJrrHANxcw%2BJmkVa%2Fw7HWU81a1NN%2BdkO%2B0ErrIUbeXbI%2FqKJCQPjDD7snCBjqkAaevhuu%2B8sIgRitto0teQvtVaalyawyBpRCgKNdkKEoMsGZqUD3T7%2BmJJuWOaRLDxpM%2F37DmKyx41tpmiS5iPLfy6%2FZRRMB4xsLO7vsHVf%2BA6kFJBAOa9wKL5HAHVuK%2BbTCn6mWcafiatlCNYEpx3c1IRtudECk1xLFPSszZ1tlkag9u15kuGWfLxP6oSO1m98bzd1%2FIEz1Mho4f%2Beb6fJTj8mWp&X-Amz-Signature=91203ec4ada38a5a5a7d2a5bbcfb9e0294b23bfcafb158c610cb0aea7f46f34a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646CCPWN5%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T091036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoZtfeBWa0GLUCBhtEJIg81il0bg8xj8fSLIwrQsf5ZAIhAJmqoqWxtxt2qpHLWx6QVhMA8RB3v7tUTYkUV25nVUxqKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwN5Wmpk6cD472JRrMq3AN75m7%2Ft0mMiPV1AmzvfWOTPYPqq%2BfTmSCekp8KXH2fqvW2HjtOkQKA0vbBg%2ByxrnQxIR4BHKxhTkxfJ9Ri2lbsxZ1HnJYmn%2B5v8Aw1MtHbtQv%2BkAXJu7yukPtiwMe6VGW6Vv%2FARxCxnFB%2FUB4v4sH%2FIrLMnvtTCxv5g077A2%2FgEZpkowHfvD1Ht3Kt6%2B23UyVMj7UeMaJ1j%2BbcLrt8EV%2B6eiDu0WHPXFsSAm2znFE9JopqqEXUhITiZnEZeGY6wyPlUNIXFhY813BrDa8oYe0ro5tmykO%2FiJXxOE4s4KQIoNCqfC%2FIfX2Bb3EWSWkO7rOqUjl9KlgPdc%2BBsZDED4n%2BfpquLuEXLdn48tGqQS30DZAHVMhPaCAa53HfL1hDXtliIYyoT3csz2vDMZTQbs14T3YZ0%2FIWWL6RcTGWbxemsZecZLPXazfKtTNotoZuOVcs9pxiBbVruFkrMpdEMhvqW40U4dr6x%2FWtsoMFgDIrynrm5PwVMC%2FBDUAO%2F40f0TF9eZlkhYncIDvkUfEmByX%2FD8tAdO9p2AemCZEChszMJlQ%2FBWzezqyIm5CPQtz4ASuW%2FWVd%2FQkJrrHANxcw%2BJmkVa%2Fw7HWU81a1NN%2BdkO%2B0ErrIUbeXbI%2FqKJCQPjDD7snCBjqkAaevhuu%2B8sIgRitto0teQvtVaalyawyBpRCgKNdkKEoMsGZqUD3T7%2BmJJuWOaRLDxpM%2F37DmKyx41tpmiS5iPLfy6%2FZRRMB4xsLO7vsHVf%2BA6kFJBAOa9wKL5HAHVuK%2BbTCn6mWcafiatlCNYEpx3c1IRtudECk1xLFPSszZ1tlkag9u15kuGWfLxP6oSO1m98bzd1%2FIEz1Mho4f%2Beb6fJTj8mWp&X-Amz-Signature=1cbc0bc9a658db1c3d474058ec94326f77c5172a73f6dc13507c32fb6f71b5a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646CCPWN5%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T091036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoZtfeBWa0GLUCBhtEJIg81il0bg8xj8fSLIwrQsf5ZAIhAJmqoqWxtxt2qpHLWx6QVhMA8RB3v7tUTYkUV25nVUxqKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwN5Wmpk6cD472JRrMq3AN75m7%2Ft0mMiPV1AmzvfWOTPYPqq%2BfTmSCekp8KXH2fqvW2HjtOkQKA0vbBg%2ByxrnQxIR4BHKxhTkxfJ9Ri2lbsxZ1HnJYmn%2B5v8Aw1MtHbtQv%2BkAXJu7yukPtiwMe6VGW6Vv%2FARxCxnFB%2FUB4v4sH%2FIrLMnvtTCxv5g077A2%2FgEZpkowHfvD1Ht3Kt6%2B23UyVMj7UeMaJ1j%2BbcLrt8EV%2B6eiDu0WHPXFsSAm2znFE9JopqqEXUhITiZnEZeGY6wyPlUNIXFhY813BrDa8oYe0ro5tmykO%2FiJXxOE4s4KQIoNCqfC%2FIfX2Bb3EWSWkO7rOqUjl9KlgPdc%2BBsZDED4n%2BfpquLuEXLdn48tGqQS30DZAHVMhPaCAa53HfL1hDXtliIYyoT3csz2vDMZTQbs14T3YZ0%2FIWWL6RcTGWbxemsZecZLPXazfKtTNotoZuOVcs9pxiBbVruFkrMpdEMhvqW40U4dr6x%2FWtsoMFgDIrynrm5PwVMC%2FBDUAO%2F40f0TF9eZlkhYncIDvkUfEmByX%2FD8tAdO9p2AemCZEChszMJlQ%2FBWzezqyIm5CPQtz4ASuW%2FWVd%2FQkJrrHANxcw%2BJmkVa%2Fw7HWU81a1NN%2BdkO%2B0ErrIUbeXbI%2FqKJCQPjDD7snCBjqkAaevhuu%2B8sIgRitto0teQvtVaalyawyBpRCgKNdkKEoMsGZqUD3T7%2BmJJuWOaRLDxpM%2F37DmKyx41tpmiS5iPLfy6%2FZRRMB4xsLO7vsHVf%2BA6kFJBAOa9wKL5HAHVuK%2BbTCn6mWcafiatlCNYEpx3c1IRtudECk1xLFPSszZ1tlkag9u15kuGWfLxP6oSO1m98bzd1%2FIEz1Mho4f%2Beb6fJTj8mWp&X-Amz-Signature=d293ff70cc95355572105775b2a14cd19af5db9307a9fd203e04ea8533b0b486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646CCPWN5%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T091036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoZtfeBWa0GLUCBhtEJIg81il0bg8xj8fSLIwrQsf5ZAIhAJmqoqWxtxt2qpHLWx6QVhMA8RB3v7tUTYkUV25nVUxqKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwN5Wmpk6cD472JRrMq3AN75m7%2Ft0mMiPV1AmzvfWOTPYPqq%2BfTmSCekp8KXH2fqvW2HjtOkQKA0vbBg%2ByxrnQxIR4BHKxhTkxfJ9Ri2lbsxZ1HnJYmn%2B5v8Aw1MtHbtQv%2BkAXJu7yukPtiwMe6VGW6Vv%2FARxCxnFB%2FUB4v4sH%2FIrLMnvtTCxv5g077A2%2FgEZpkowHfvD1Ht3Kt6%2B23UyVMj7UeMaJ1j%2BbcLrt8EV%2B6eiDu0WHPXFsSAm2znFE9JopqqEXUhITiZnEZeGY6wyPlUNIXFhY813BrDa8oYe0ro5tmykO%2FiJXxOE4s4KQIoNCqfC%2FIfX2Bb3EWSWkO7rOqUjl9KlgPdc%2BBsZDED4n%2BfpquLuEXLdn48tGqQS30DZAHVMhPaCAa53HfL1hDXtliIYyoT3csz2vDMZTQbs14T3YZ0%2FIWWL6RcTGWbxemsZecZLPXazfKtTNotoZuOVcs9pxiBbVruFkrMpdEMhvqW40U4dr6x%2FWtsoMFgDIrynrm5PwVMC%2FBDUAO%2F40f0TF9eZlkhYncIDvkUfEmByX%2FD8tAdO9p2AemCZEChszMJlQ%2FBWzezqyIm5CPQtz4ASuW%2FWVd%2FQkJrrHANxcw%2BJmkVa%2Fw7HWU81a1NN%2BdkO%2B0ErrIUbeXbI%2FqKJCQPjDD7snCBjqkAaevhuu%2B8sIgRitto0teQvtVaalyawyBpRCgKNdkKEoMsGZqUD3T7%2BmJJuWOaRLDxpM%2F37DmKyx41tpmiS5iPLfy6%2FZRRMB4xsLO7vsHVf%2BA6kFJBAOa9wKL5HAHVuK%2BbTCn6mWcafiatlCNYEpx3c1IRtudECk1xLFPSszZ1tlkag9u15kuGWfLxP6oSO1m98bzd1%2FIEz1Mho4f%2Beb6fJTj8mWp&X-Amz-Signature=94821cdf08c793a95353f1b2b8fb91a4f84e3932d102f2c4dc00ef5f58ee7330&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646CCPWN5%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T091036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoZtfeBWa0GLUCBhtEJIg81il0bg8xj8fSLIwrQsf5ZAIhAJmqoqWxtxt2qpHLWx6QVhMA8RB3v7tUTYkUV25nVUxqKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwN5Wmpk6cD472JRrMq3AN75m7%2Ft0mMiPV1AmzvfWOTPYPqq%2BfTmSCekp8KXH2fqvW2HjtOkQKA0vbBg%2ByxrnQxIR4BHKxhTkxfJ9Ri2lbsxZ1HnJYmn%2B5v8Aw1MtHbtQv%2BkAXJu7yukPtiwMe6VGW6Vv%2FARxCxnFB%2FUB4v4sH%2FIrLMnvtTCxv5g077A2%2FgEZpkowHfvD1Ht3Kt6%2B23UyVMj7UeMaJ1j%2BbcLrt8EV%2B6eiDu0WHPXFsSAm2znFE9JopqqEXUhITiZnEZeGY6wyPlUNIXFhY813BrDa8oYe0ro5tmykO%2FiJXxOE4s4KQIoNCqfC%2FIfX2Bb3EWSWkO7rOqUjl9KlgPdc%2BBsZDED4n%2BfpquLuEXLdn48tGqQS30DZAHVMhPaCAa53HfL1hDXtliIYyoT3csz2vDMZTQbs14T3YZ0%2FIWWL6RcTGWbxemsZecZLPXazfKtTNotoZuOVcs9pxiBbVruFkrMpdEMhvqW40U4dr6x%2FWtsoMFgDIrynrm5PwVMC%2FBDUAO%2F40f0TF9eZlkhYncIDvkUfEmByX%2FD8tAdO9p2AemCZEChszMJlQ%2FBWzezqyIm5CPQtz4ASuW%2FWVd%2FQkJrrHANxcw%2BJmkVa%2Fw7HWU81a1NN%2BdkO%2B0ErrIUbeXbI%2FqKJCQPjDD7snCBjqkAaevhuu%2B8sIgRitto0teQvtVaalyawyBpRCgKNdkKEoMsGZqUD3T7%2BmJJuWOaRLDxpM%2F37DmKyx41tpmiS5iPLfy6%2FZRRMB4xsLO7vsHVf%2BA6kFJBAOa9wKL5HAHVuK%2BbTCn6mWcafiatlCNYEpx3c1IRtudECk1xLFPSszZ1tlkag9u15kuGWfLxP6oSO1m98bzd1%2FIEz1Mho4f%2Beb6fJTj8mWp&X-Amz-Signature=12012fc2d60a198d01d6a1b0c696f3d4855630b9137a15fbc6e6e2ad0d7c9fab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646CCPWN5%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T091036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoZtfeBWa0GLUCBhtEJIg81il0bg8xj8fSLIwrQsf5ZAIhAJmqoqWxtxt2qpHLWx6QVhMA8RB3v7tUTYkUV25nVUxqKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwN5Wmpk6cD472JRrMq3AN75m7%2Ft0mMiPV1AmzvfWOTPYPqq%2BfTmSCekp8KXH2fqvW2HjtOkQKA0vbBg%2ByxrnQxIR4BHKxhTkxfJ9Ri2lbsxZ1HnJYmn%2B5v8Aw1MtHbtQv%2BkAXJu7yukPtiwMe6VGW6Vv%2FARxCxnFB%2FUB4v4sH%2FIrLMnvtTCxv5g077A2%2FgEZpkowHfvD1Ht3Kt6%2B23UyVMj7UeMaJ1j%2BbcLrt8EV%2B6eiDu0WHPXFsSAm2znFE9JopqqEXUhITiZnEZeGY6wyPlUNIXFhY813BrDa8oYe0ro5tmykO%2FiJXxOE4s4KQIoNCqfC%2FIfX2Bb3EWSWkO7rOqUjl9KlgPdc%2BBsZDED4n%2BfpquLuEXLdn48tGqQS30DZAHVMhPaCAa53HfL1hDXtliIYyoT3csz2vDMZTQbs14T3YZ0%2FIWWL6RcTGWbxemsZecZLPXazfKtTNotoZuOVcs9pxiBbVruFkrMpdEMhvqW40U4dr6x%2FWtsoMFgDIrynrm5PwVMC%2FBDUAO%2F40f0TF9eZlkhYncIDvkUfEmByX%2FD8tAdO9p2AemCZEChszMJlQ%2FBWzezqyIm5CPQtz4ASuW%2FWVd%2FQkJrrHANxcw%2BJmkVa%2Fw7HWU81a1NN%2BdkO%2B0ErrIUbeXbI%2FqKJCQPjDD7snCBjqkAaevhuu%2B8sIgRitto0teQvtVaalyawyBpRCgKNdkKEoMsGZqUD3T7%2BmJJuWOaRLDxpM%2F37DmKyx41tpmiS5iPLfy6%2FZRRMB4xsLO7vsHVf%2BA6kFJBAOa9wKL5HAHVuK%2BbTCn6mWcafiatlCNYEpx3c1IRtudECk1xLFPSszZ1tlkag9u15kuGWfLxP6oSO1m98bzd1%2FIEz1Mho4f%2Beb6fJTj8mWp&X-Amz-Signature=1af449f774d4356dcf4bdbd96afd4696950810cfe7d378d5fb1df5ef4e9b6d2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
