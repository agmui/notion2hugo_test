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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JPXD6U7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCmpDpIuyaZMpG44KMBSiYcfOsOuZoIkbB2%2B6KPYu7GPAIgXvRbmXmBM8mYEUoGC5j1MkSV3CmIrNYdZwn%2BtVivwFYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDR75fWljtrkn9lmSrcA5RVOjKnZU%2F9MJAjErpRi9mYg%2BX2loVjLRXsyinkCoR8fEi1eMkJe9zA074hAS52dM%2B%2F%2B1RGZGrelVi8vnL4%2B8VhHXx2o3SJswTG0aPdBlp97rW0WS4e3IeEBfhQjmohLRBFMYg8CW6puB%2B9kppuA6i%2B7UwniPF5eOzf1YzxeOoyJXLqtlQHjDTFRQ1ZgM%2F0Q7UPUiZ1JNhxHgK1zZnaPugdQMlAFbUZEJ%2B%2Foe4GUthg2xq718fCpeJsImJt88ODXhwALmRcYqiKiF7DV3L%2FC6ue%2B4phuHXIwPEvFnLitp%2F%2BT5bQdJAuTwjiNf2EqMeGPa96HCXpiXAnuBj4rGLLvY9NHVJnzE3Iq1Midb%2FZ7irp%2FCsfOcHVTI3sTMGxJKTgs%2FGfImfJINk7Di33JxTet0PPJLDP8i0n4Zz03ufL1qDaulhKVJdaV3EZprRjsGgNln8wVU6ppjzaPjNxbXLGPzXmJ9SlXNN%2BDLF0oaamI4YnmzBLNXY%2FffqtBwAlQOgkIIQlFSygLeLm1FgP0WQo9mHBbYfT23A32xJys3iEtjeIDk%2FW1X%2FLEVGKaUh0qHLpKbi78%2FUKzikJlmLQ7NdpPxgChnT7kwnLYeeVWH3zVwhLb3lBIbC0huSA0rQNMIju1cAGOqUBwK8jJ2FwDomUkrNjU0i2Gt%2BhwO72LCVSl13Eq71jNAFy1OQnOEG9VGtPSqKirnky1AgqYuRKAnVvvzOV6h1RLuO0fn9mXv4%2FMWofDbXP04CSxJM4P9hLpu0DFOxlC5%2Ba9c3QUwPY1K8%2FtoqiWGBVddtG%2BanEiEhVcqgjcpk8hgHN62s%2FPQNL4EdXev9eWwqLZZ1XxVsSV5d38mjaCi5Y2Gdn%2FaXC&X-Amz-Signature=e68a282a851a390a5e51d02d0a4e6a8a0168ef90b37c86972d7b001dce1c6b1a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JPXD6U7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCmpDpIuyaZMpG44KMBSiYcfOsOuZoIkbB2%2B6KPYu7GPAIgXvRbmXmBM8mYEUoGC5j1MkSV3CmIrNYdZwn%2BtVivwFYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDR75fWljtrkn9lmSrcA5RVOjKnZU%2F9MJAjErpRi9mYg%2BX2loVjLRXsyinkCoR8fEi1eMkJe9zA074hAS52dM%2B%2F%2B1RGZGrelVi8vnL4%2B8VhHXx2o3SJswTG0aPdBlp97rW0WS4e3IeEBfhQjmohLRBFMYg8CW6puB%2B9kppuA6i%2B7UwniPF5eOzf1YzxeOoyJXLqtlQHjDTFRQ1ZgM%2F0Q7UPUiZ1JNhxHgK1zZnaPugdQMlAFbUZEJ%2B%2Foe4GUthg2xq718fCpeJsImJt88ODXhwALmRcYqiKiF7DV3L%2FC6ue%2B4phuHXIwPEvFnLitp%2F%2BT5bQdJAuTwjiNf2EqMeGPa96HCXpiXAnuBj4rGLLvY9NHVJnzE3Iq1Midb%2FZ7irp%2FCsfOcHVTI3sTMGxJKTgs%2FGfImfJINk7Di33JxTet0PPJLDP8i0n4Zz03ufL1qDaulhKVJdaV3EZprRjsGgNln8wVU6ppjzaPjNxbXLGPzXmJ9SlXNN%2BDLF0oaamI4YnmzBLNXY%2FffqtBwAlQOgkIIQlFSygLeLm1FgP0WQo9mHBbYfT23A32xJys3iEtjeIDk%2FW1X%2FLEVGKaUh0qHLpKbi78%2FUKzikJlmLQ7NdpPxgChnT7kwnLYeeVWH3zVwhLb3lBIbC0huSA0rQNMIju1cAGOqUBwK8jJ2FwDomUkrNjU0i2Gt%2BhwO72LCVSl13Eq71jNAFy1OQnOEG9VGtPSqKirnky1AgqYuRKAnVvvzOV6h1RLuO0fn9mXv4%2FMWofDbXP04CSxJM4P9hLpu0DFOxlC5%2Ba9c3QUwPY1K8%2FtoqiWGBVddtG%2BanEiEhVcqgjcpk8hgHN62s%2FPQNL4EdXev9eWwqLZZ1XxVsSV5d38mjaCi5Y2Gdn%2FaXC&X-Amz-Signature=bcbd8d83b978ad2032af8bab1bc0d946785e7492e8b2cbccd86c97b1c606f38a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JPXD6U7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCmpDpIuyaZMpG44KMBSiYcfOsOuZoIkbB2%2B6KPYu7GPAIgXvRbmXmBM8mYEUoGC5j1MkSV3CmIrNYdZwn%2BtVivwFYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDR75fWljtrkn9lmSrcA5RVOjKnZU%2F9MJAjErpRi9mYg%2BX2loVjLRXsyinkCoR8fEi1eMkJe9zA074hAS52dM%2B%2F%2B1RGZGrelVi8vnL4%2B8VhHXx2o3SJswTG0aPdBlp97rW0WS4e3IeEBfhQjmohLRBFMYg8CW6puB%2B9kppuA6i%2B7UwniPF5eOzf1YzxeOoyJXLqtlQHjDTFRQ1ZgM%2F0Q7UPUiZ1JNhxHgK1zZnaPugdQMlAFbUZEJ%2B%2Foe4GUthg2xq718fCpeJsImJt88ODXhwALmRcYqiKiF7DV3L%2FC6ue%2B4phuHXIwPEvFnLitp%2F%2BT5bQdJAuTwjiNf2EqMeGPa96HCXpiXAnuBj4rGLLvY9NHVJnzE3Iq1Midb%2FZ7irp%2FCsfOcHVTI3sTMGxJKTgs%2FGfImfJINk7Di33JxTet0PPJLDP8i0n4Zz03ufL1qDaulhKVJdaV3EZprRjsGgNln8wVU6ppjzaPjNxbXLGPzXmJ9SlXNN%2BDLF0oaamI4YnmzBLNXY%2FffqtBwAlQOgkIIQlFSygLeLm1FgP0WQo9mHBbYfT23A32xJys3iEtjeIDk%2FW1X%2FLEVGKaUh0qHLpKbi78%2FUKzikJlmLQ7NdpPxgChnT7kwnLYeeVWH3zVwhLb3lBIbC0huSA0rQNMIju1cAGOqUBwK8jJ2FwDomUkrNjU0i2Gt%2BhwO72LCVSl13Eq71jNAFy1OQnOEG9VGtPSqKirnky1AgqYuRKAnVvvzOV6h1RLuO0fn9mXv4%2FMWofDbXP04CSxJM4P9hLpu0DFOxlC5%2Ba9c3QUwPY1K8%2FtoqiWGBVddtG%2BanEiEhVcqgjcpk8hgHN62s%2FPQNL4EdXev9eWwqLZZ1XxVsSV5d38mjaCi5Y2Gdn%2FaXC&X-Amz-Signature=fd9d52172f3975b8b478a7f9302687497c7cf075823b9fbd434b6f7e8ad9fa87&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JPXD6U7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCmpDpIuyaZMpG44KMBSiYcfOsOuZoIkbB2%2B6KPYu7GPAIgXvRbmXmBM8mYEUoGC5j1MkSV3CmIrNYdZwn%2BtVivwFYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDR75fWljtrkn9lmSrcA5RVOjKnZU%2F9MJAjErpRi9mYg%2BX2loVjLRXsyinkCoR8fEi1eMkJe9zA074hAS52dM%2B%2F%2B1RGZGrelVi8vnL4%2B8VhHXx2o3SJswTG0aPdBlp97rW0WS4e3IeEBfhQjmohLRBFMYg8CW6puB%2B9kppuA6i%2B7UwniPF5eOzf1YzxeOoyJXLqtlQHjDTFRQ1ZgM%2F0Q7UPUiZ1JNhxHgK1zZnaPugdQMlAFbUZEJ%2B%2Foe4GUthg2xq718fCpeJsImJt88ODXhwALmRcYqiKiF7DV3L%2FC6ue%2B4phuHXIwPEvFnLitp%2F%2BT5bQdJAuTwjiNf2EqMeGPa96HCXpiXAnuBj4rGLLvY9NHVJnzE3Iq1Midb%2FZ7irp%2FCsfOcHVTI3sTMGxJKTgs%2FGfImfJINk7Di33JxTet0PPJLDP8i0n4Zz03ufL1qDaulhKVJdaV3EZprRjsGgNln8wVU6ppjzaPjNxbXLGPzXmJ9SlXNN%2BDLF0oaamI4YnmzBLNXY%2FffqtBwAlQOgkIIQlFSygLeLm1FgP0WQo9mHBbYfT23A32xJys3iEtjeIDk%2FW1X%2FLEVGKaUh0qHLpKbi78%2FUKzikJlmLQ7NdpPxgChnT7kwnLYeeVWH3zVwhLb3lBIbC0huSA0rQNMIju1cAGOqUBwK8jJ2FwDomUkrNjU0i2Gt%2BhwO72LCVSl13Eq71jNAFy1OQnOEG9VGtPSqKirnky1AgqYuRKAnVvvzOV6h1RLuO0fn9mXv4%2FMWofDbXP04CSxJM4P9hLpu0DFOxlC5%2Ba9c3QUwPY1K8%2FtoqiWGBVddtG%2BanEiEhVcqgjcpk8hgHN62s%2FPQNL4EdXev9eWwqLZZ1XxVsSV5d38mjaCi5Y2Gdn%2FaXC&X-Amz-Signature=a548d9c7e342df0d66ace7086d5fbb6cb3408d02842bdb6d8b5f5de9dd904f95&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JPXD6U7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCmpDpIuyaZMpG44KMBSiYcfOsOuZoIkbB2%2B6KPYu7GPAIgXvRbmXmBM8mYEUoGC5j1MkSV3CmIrNYdZwn%2BtVivwFYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDR75fWljtrkn9lmSrcA5RVOjKnZU%2F9MJAjErpRi9mYg%2BX2loVjLRXsyinkCoR8fEi1eMkJe9zA074hAS52dM%2B%2F%2B1RGZGrelVi8vnL4%2B8VhHXx2o3SJswTG0aPdBlp97rW0WS4e3IeEBfhQjmohLRBFMYg8CW6puB%2B9kppuA6i%2B7UwniPF5eOzf1YzxeOoyJXLqtlQHjDTFRQ1ZgM%2F0Q7UPUiZ1JNhxHgK1zZnaPugdQMlAFbUZEJ%2B%2Foe4GUthg2xq718fCpeJsImJt88ODXhwALmRcYqiKiF7DV3L%2FC6ue%2B4phuHXIwPEvFnLitp%2F%2BT5bQdJAuTwjiNf2EqMeGPa96HCXpiXAnuBj4rGLLvY9NHVJnzE3Iq1Midb%2FZ7irp%2FCsfOcHVTI3sTMGxJKTgs%2FGfImfJINk7Di33JxTet0PPJLDP8i0n4Zz03ufL1qDaulhKVJdaV3EZprRjsGgNln8wVU6ppjzaPjNxbXLGPzXmJ9SlXNN%2BDLF0oaamI4YnmzBLNXY%2FffqtBwAlQOgkIIQlFSygLeLm1FgP0WQo9mHBbYfT23A32xJys3iEtjeIDk%2FW1X%2FLEVGKaUh0qHLpKbi78%2FUKzikJlmLQ7NdpPxgChnT7kwnLYeeVWH3zVwhLb3lBIbC0huSA0rQNMIju1cAGOqUBwK8jJ2FwDomUkrNjU0i2Gt%2BhwO72LCVSl13Eq71jNAFy1OQnOEG9VGtPSqKirnky1AgqYuRKAnVvvzOV6h1RLuO0fn9mXv4%2FMWofDbXP04CSxJM4P9hLpu0DFOxlC5%2Ba9c3QUwPY1K8%2FtoqiWGBVddtG%2BanEiEhVcqgjcpk8hgHN62s%2FPQNL4EdXev9eWwqLZZ1XxVsSV5d38mjaCi5Y2Gdn%2FaXC&X-Amz-Signature=1f66799999e05a925d3ad0f231a62f5d550e94a573ff8cfeefee091d3e44a68b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JPXD6U7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCmpDpIuyaZMpG44KMBSiYcfOsOuZoIkbB2%2B6KPYu7GPAIgXvRbmXmBM8mYEUoGC5j1MkSV3CmIrNYdZwn%2BtVivwFYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDR75fWljtrkn9lmSrcA5RVOjKnZU%2F9MJAjErpRi9mYg%2BX2loVjLRXsyinkCoR8fEi1eMkJe9zA074hAS52dM%2B%2F%2B1RGZGrelVi8vnL4%2B8VhHXx2o3SJswTG0aPdBlp97rW0WS4e3IeEBfhQjmohLRBFMYg8CW6puB%2B9kppuA6i%2B7UwniPF5eOzf1YzxeOoyJXLqtlQHjDTFRQ1ZgM%2F0Q7UPUiZ1JNhxHgK1zZnaPugdQMlAFbUZEJ%2B%2Foe4GUthg2xq718fCpeJsImJt88ODXhwALmRcYqiKiF7DV3L%2FC6ue%2B4phuHXIwPEvFnLitp%2F%2BT5bQdJAuTwjiNf2EqMeGPa96HCXpiXAnuBj4rGLLvY9NHVJnzE3Iq1Midb%2FZ7irp%2FCsfOcHVTI3sTMGxJKTgs%2FGfImfJINk7Di33JxTet0PPJLDP8i0n4Zz03ufL1qDaulhKVJdaV3EZprRjsGgNln8wVU6ppjzaPjNxbXLGPzXmJ9SlXNN%2BDLF0oaamI4YnmzBLNXY%2FffqtBwAlQOgkIIQlFSygLeLm1FgP0WQo9mHBbYfT23A32xJys3iEtjeIDk%2FW1X%2FLEVGKaUh0qHLpKbi78%2FUKzikJlmLQ7NdpPxgChnT7kwnLYeeVWH3zVwhLb3lBIbC0huSA0rQNMIju1cAGOqUBwK8jJ2FwDomUkrNjU0i2Gt%2BhwO72LCVSl13Eq71jNAFy1OQnOEG9VGtPSqKirnky1AgqYuRKAnVvvzOV6h1RLuO0fn9mXv4%2FMWofDbXP04CSxJM4P9hLpu0DFOxlC5%2Ba9c3QUwPY1K8%2FtoqiWGBVddtG%2BanEiEhVcqgjcpk8hgHN62s%2FPQNL4EdXev9eWwqLZZ1XxVsSV5d38mjaCi5Y2Gdn%2FaXC&X-Amz-Signature=684aedc6607226f5bcad14247b405ccf0737f00d608df4be4c1954834c0d1a1c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JPXD6U7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCmpDpIuyaZMpG44KMBSiYcfOsOuZoIkbB2%2B6KPYu7GPAIgXvRbmXmBM8mYEUoGC5j1MkSV3CmIrNYdZwn%2BtVivwFYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDR75fWljtrkn9lmSrcA5RVOjKnZU%2F9MJAjErpRi9mYg%2BX2loVjLRXsyinkCoR8fEi1eMkJe9zA074hAS52dM%2B%2F%2B1RGZGrelVi8vnL4%2B8VhHXx2o3SJswTG0aPdBlp97rW0WS4e3IeEBfhQjmohLRBFMYg8CW6puB%2B9kppuA6i%2B7UwniPF5eOzf1YzxeOoyJXLqtlQHjDTFRQ1ZgM%2F0Q7UPUiZ1JNhxHgK1zZnaPugdQMlAFbUZEJ%2B%2Foe4GUthg2xq718fCpeJsImJt88ODXhwALmRcYqiKiF7DV3L%2FC6ue%2B4phuHXIwPEvFnLitp%2F%2BT5bQdJAuTwjiNf2EqMeGPa96HCXpiXAnuBj4rGLLvY9NHVJnzE3Iq1Midb%2FZ7irp%2FCsfOcHVTI3sTMGxJKTgs%2FGfImfJINk7Di33JxTet0PPJLDP8i0n4Zz03ufL1qDaulhKVJdaV3EZprRjsGgNln8wVU6ppjzaPjNxbXLGPzXmJ9SlXNN%2BDLF0oaamI4YnmzBLNXY%2FffqtBwAlQOgkIIQlFSygLeLm1FgP0WQo9mHBbYfT23A32xJys3iEtjeIDk%2FW1X%2FLEVGKaUh0qHLpKbi78%2FUKzikJlmLQ7NdpPxgChnT7kwnLYeeVWH3zVwhLb3lBIbC0huSA0rQNMIju1cAGOqUBwK8jJ2FwDomUkrNjU0i2Gt%2BhwO72LCVSl13Eq71jNAFy1OQnOEG9VGtPSqKirnky1AgqYuRKAnVvvzOV6h1RLuO0fn9mXv4%2FMWofDbXP04CSxJM4P9hLpu0DFOxlC5%2Ba9c3QUwPY1K8%2FtoqiWGBVddtG%2BanEiEhVcqgjcpk8hgHN62s%2FPQNL4EdXev9eWwqLZZ1XxVsSV5d38mjaCi5Y2Gdn%2FaXC&X-Amz-Signature=386c5aaae70980dfeda34efd9c3247848fca12bd3076844faea35c23c53b620e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JPXD6U7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCmpDpIuyaZMpG44KMBSiYcfOsOuZoIkbB2%2B6KPYu7GPAIgXvRbmXmBM8mYEUoGC5j1MkSV3CmIrNYdZwn%2BtVivwFYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDR75fWljtrkn9lmSrcA5RVOjKnZU%2F9MJAjErpRi9mYg%2BX2loVjLRXsyinkCoR8fEi1eMkJe9zA074hAS52dM%2B%2F%2B1RGZGrelVi8vnL4%2B8VhHXx2o3SJswTG0aPdBlp97rW0WS4e3IeEBfhQjmohLRBFMYg8CW6puB%2B9kppuA6i%2B7UwniPF5eOzf1YzxeOoyJXLqtlQHjDTFRQ1ZgM%2F0Q7UPUiZ1JNhxHgK1zZnaPugdQMlAFbUZEJ%2B%2Foe4GUthg2xq718fCpeJsImJt88ODXhwALmRcYqiKiF7DV3L%2FC6ue%2B4phuHXIwPEvFnLitp%2F%2BT5bQdJAuTwjiNf2EqMeGPa96HCXpiXAnuBj4rGLLvY9NHVJnzE3Iq1Midb%2FZ7irp%2FCsfOcHVTI3sTMGxJKTgs%2FGfImfJINk7Di33JxTet0PPJLDP8i0n4Zz03ufL1qDaulhKVJdaV3EZprRjsGgNln8wVU6ppjzaPjNxbXLGPzXmJ9SlXNN%2BDLF0oaamI4YnmzBLNXY%2FffqtBwAlQOgkIIQlFSygLeLm1FgP0WQo9mHBbYfT23A32xJys3iEtjeIDk%2FW1X%2FLEVGKaUh0qHLpKbi78%2FUKzikJlmLQ7NdpPxgChnT7kwnLYeeVWH3zVwhLb3lBIbC0huSA0rQNMIju1cAGOqUBwK8jJ2FwDomUkrNjU0i2Gt%2BhwO72LCVSl13Eq71jNAFy1OQnOEG9VGtPSqKirnky1AgqYuRKAnVvvzOV6h1RLuO0fn9mXv4%2FMWofDbXP04CSxJM4P9hLpu0DFOxlC5%2Ba9c3QUwPY1K8%2FtoqiWGBVddtG%2BanEiEhVcqgjcpk8hgHN62s%2FPQNL4EdXev9eWwqLZZ1XxVsSV5d38mjaCi5Y2Gdn%2FaXC&X-Amz-Signature=1629902f6a24e1e635627265a3337c1bd910d2731352ee99272d44bc0d0e2663&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
