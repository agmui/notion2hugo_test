---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GKRILOG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdWHSPFuVCq3akhV10Zemi8SUORfTfIB8cCrnNejfA%2FAIgfip%2B%2FmpigsLXS5hk6b%2FkDy8dy7bDolb3Uli8hUSIbxoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIsvB4MF0bvbDvVPoircA6VlqSpoX%2FIIvh8g6t31eR%2FHtBTeUY3mwE3p%2FZbARr6AwSQfMIc6zUIcdjQ29qIuXG9Syz9X9Pwlz3vC0WR62K65aBpsgsPJ6uaABcdjBDdPE5Ct328uuSjRc%2F9EBrjeIA%2B%2Bj1hrVrT09LxXOlDxmSGJQep4S4Pg0Dm8U8gT1HjlzlLk4yNnRvpwbuQc8XqWnGCMrXhIRAl6jXibfPHlSe64bzfgjt4U77u%2BjViIwh%2BylXfm%2FXr%2FDsjBgBclFgmbXSE39ySHMfzbUNYOb7hiiFiLncPZye3EbJfo6r%2BFgqr%2FEYKjz%2FMURC8wwNxXBUNvVuqfv6pV4a%2BZlBg0RhZu8LmF9VlwPwRdeSLC9WWYgXlKyZ1a6%2BkHCmKvKyuBKfzjWzrAXhDYWfBT7ME%2Fz2Z2egU2mPKWb9BUfLcmC4v8xI6Wr0eJ%2Bi2h3rmBIYclZWjWBcnt84JpB5GK5A7zNWvMXK6BGjEv3bZTDj473tvLg84BhozwwNseT6i9ZAGURR0684ZHnZORbW078aW98NeMKVfN2gti39wu1NdYvWc675TuvRCJ%2FErAmq20KahNkDi5Hoao2A7Nbvz7Cgp603cuzijltoZYg%2FJekCpXFv84sKHwdASM180wdQfLb5VIMJ2M9cQGOqUBDQfQAC01XvpyMDfc%2F69Ah3RpMe1xGDw4U1f4G7HmQdyBd1Lxyi8Ejpv2%2FsYuQpHDWKpOvRSiOEfZSmDWHidPVcCIpMXw7in8eq3%2BuZFM6sQvXKXsR44RZV6MerNqbq67jT7LnNxE7C2eSFz5%2BhK2VPuZqgUsdfQKUBybRFR%2BUyVS3ye4mrqLS91KxxQy%2B1FwIAI72y%2FkE6dUwmceclxUPmxAJ%2F4%2B&X-Amz-Signature=e709a220d3ad5675e0bfeebb56c586ba613bdc0b2bebbb3da3c61e78f4b305e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GKRILOG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdWHSPFuVCq3akhV10Zemi8SUORfTfIB8cCrnNejfA%2FAIgfip%2B%2FmpigsLXS5hk6b%2FkDy8dy7bDolb3Uli8hUSIbxoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIsvB4MF0bvbDvVPoircA6VlqSpoX%2FIIvh8g6t31eR%2FHtBTeUY3mwE3p%2FZbARr6AwSQfMIc6zUIcdjQ29qIuXG9Syz9X9Pwlz3vC0WR62K65aBpsgsPJ6uaABcdjBDdPE5Ct328uuSjRc%2F9EBrjeIA%2B%2Bj1hrVrT09LxXOlDxmSGJQep4S4Pg0Dm8U8gT1HjlzlLk4yNnRvpwbuQc8XqWnGCMrXhIRAl6jXibfPHlSe64bzfgjt4U77u%2BjViIwh%2BylXfm%2FXr%2FDsjBgBclFgmbXSE39ySHMfzbUNYOb7hiiFiLncPZye3EbJfo6r%2BFgqr%2FEYKjz%2FMURC8wwNxXBUNvVuqfv6pV4a%2BZlBg0RhZu8LmF9VlwPwRdeSLC9WWYgXlKyZ1a6%2BkHCmKvKyuBKfzjWzrAXhDYWfBT7ME%2Fz2Z2egU2mPKWb9BUfLcmC4v8xI6Wr0eJ%2Bi2h3rmBIYclZWjWBcnt84JpB5GK5A7zNWvMXK6BGjEv3bZTDj473tvLg84BhozwwNseT6i9ZAGURR0684ZHnZORbW078aW98NeMKVfN2gti39wu1NdYvWc675TuvRCJ%2FErAmq20KahNkDi5Hoao2A7Nbvz7Cgp603cuzijltoZYg%2FJekCpXFv84sKHwdASM180wdQfLb5VIMJ2M9cQGOqUBDQfQAC01XvpyMDfc%2F69Ah3RpMe1xGDw4U1f4G7HmQdyBd1Lxyi8Ejpv2%2FsYuQpHDWKpOvRSiOEfZSmDWHidPVcCIpMXw7in8eq3%2BuZFM6sQvXKXsR44RZV6MerNqbq67jT7LnNxE7C2eSFz5%2BhK2VPuZqgUsdfQKUBybRFR%2BUyVS3ye4mrqLS91KxxQy%2B1FwIAI72y%2FkE6dUwmceclxUPmxAJ%2F4%2B&X-Amz-Signature=cc448f03dec76b2b38937f89cebd5e07a14ce136042d0935193a0fff384937b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GKRILOG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdWHSPFuVCq3akhV10Zemi8SUORfTfIB8cCrnNejfA%2FAIgfip%2B%2FmpigsLXS5hk6b%2FkDy8dy7bDolb3Uli8hUSIbxoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIsvB4MF0bvbDvVPoircA6VlqSpoX%2FIIvh8g6t31eR%2FHtBTeUY3mwE3p%2FZbARr6AwSQfMIc6zUIcdjQ29qIuXG9Syz9X9Pwlz3vC0WR62K65aBpsgsPJ6uaABcdjBDdPE5Ct328uuSjRc%2F9EBrjeIA%2B%2Bj1hrVrT09LxXOlDxmSGJQep4S4Pg0Dm8U8gT1HjlzlLk4yNnRvpwbuQc8XqWnGCMrXhIRAl6jXibfPHlSe64bzfgjt4U77u%2BjViIwh%2BylXfm%2FXr%2FDsjBgBclFgmbXSE39ySHMfzbUNYOb7hiiFiLncPZye3EbJfo6r%2BFgqr%2FEYKjz%2FMURC8wwNxXBUNvVuqfv6pV4a%2BZlBg0RhZu8LmF9VlwPwRdeSLC9WWYgXlKyZ1a6%2BkHCmKvKyuBKfzjWzrAXhDYWfBT7ME%2Fz2Z2egU2mPKWb9BUfLcmC4v8xI6Wr0eJ%2Bi2h3rmBIYclZWjWBcnt84JpB5GK5A7zNWvMXK6BGjEv3bZTDj473tvLg84BhozwwNseT6i9ZAGURR0684ZHnZORbW078aW98NeMKVfN2gti39wu1NdYvWc675TuvRCJ%2FErAmq20KahNkDi5Hoao2A7Nbvz7Cgp603cuzijltoZYg%2FJekCpXFv84sKHwdASM180wdQfLb5VIMJ2M9cQGOqUBDQfQAC01XvpyMDfc%2F69Ah3RpMe1xGDw4U1f4G7HmQdyBd1Lxyi8Ejpv2%2FsYuQpHDWKpOvRSiOEfZSmDWHidPVcCIpMXw7in8eq3%2BuZFM6sQvXKXsR44RZV6MerNqbq67jT7LnNxE7C2eSFz5%2BhK2VPuZqgUsdfQKUBybRFR%2BUyVS3ye4mrqLS91KxxQy%2B1FwIAI72y%2FkE6dUwmceclxUPmxAJ%2F4%2B&X-Amz-Signature=0bb978661a8423945c37e1d81953bd4d8e2dd25920bd16ffc16f0fb2c9ec45e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GKRILOG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdWHSPFuVCq3akhV10Zemi8SUORfTfIB8cCrnNejfA%2FAIgfip%2B%2FmpigsLXS5hk6b%2FkDy8dy7bDolb3Uli8hUSIbxoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIsvB4MF0bvbDvVPoircA6VlqSpoX%2FIIvh8g6t31eR%2FHtBTeUY3mwE3p%2FZbARr6AwSQfMIc6zUIcdjQ29qIuXG9Syz9X9Pwlz3vC0WR62K65aBpsgsPJ6uaABcdjBDdPE5Ct328uuSjRc%2F9EBrjeIA%2B%2Bj1hrVrT09LxXOlDxmSGJQep4S4Pg0Dm8U8gT1HjlzlLk4yNnRvpwbuQc8XqWnGCMrXhIRAl6jXibfPHlSe64bzfgjt4U77u%2BjViIwh%2BylXfm%2FXr%2FDsjBgBclFgmbXSE39ySHMfzbUNYOb7hiiFiLncPZye3EbJfo6r%2BFgqr%2FEYKjz%2FMURC8wwNxXBUNvVuqfv6pV4a%2BZlBg0RhZu8LmF9VlwPwRdeSLC9WWYgXlKyZ1a6%2BkHCmKvKyuBKfzjWzrAXhDYWfBT7ME%2Fz2Z2egU2mPKWb9BUfLcmC4v8xI6Wr0eJ%2Bi2h3rmBIYclZWjWBcnt84JpB5GK5A7zNWvMXK6BGjEv3bZTDj473tvLg84BhozwwNseT6i9ZAGURR0684ZHnZORbW078aW98NeMKVfN2gti39wu1NdYvWc675TuvRCJ%2FErAmq20KahNkDi5Hoao2A7Nbvz7Cgp603cuzijltoZYg%2FJekCpXFv84sKHwdASM180wdQfLb5VIMJ2M9cQGOqUBDQfQAC01XvpyMDfc%2F69Ah3RpMe1xGDw4U1f4G7HmQdyBd1Lxyi8Ejpv2%2FsYuQpHDWKpOvRSiOEfZSmDWHidPVcCIpMXw7in8eq3%2BuZFM6sQvXKXsR44RZV6MerNqbq67jT7LnNxE7C2eSFz5%2BhK2VPuZqgUsdfQKUBybRFR%2BUyVS3ye4mrqLS91KxxQy%2B1FwIAI72y%2FkE6dUwmceclxUPmxAJ%2F4%2B&X-Amz-Signature=837e862dc71388473a52c93b48e807b7a1fe14a302a416d71a1e441a39468fae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GKRILOG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdWHSPFuVCq3akhV10Zemi8SUORfTfIB8cCrnNejfA%2FAIgfip%2B%2FmpigsLXS5hk6b%2FkDy8dy7bDolb3Uli8hUSIbxoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIsvB4MF0bvbDvVPoircA6VlqSpoX%2FIIvh8g6t31eR%2FHtBTeUY3mwE3p%2FZbARr6AwSQfMIc6zUIcdjQ29qIuXG9Syz9X9Pwlz3vC0WR62K65aBpsgsPJ6uaABcdjBDdPE5Ct328uuSjRc%2F9EBrjeIA%2B%2Bj1hrVrT09LxXOlDxmSGJQep4S4Pg0Dm8U8gT1HjlzlLk4yNnRvpwbuQc8XqWnGCMrXhIRAl6jXibfPHlSe64bzfgjt4U77u%2BjViIwh%2BylXfm%2FXr%2FDsjBgBclFgmbXSE39ySHMfzbUNYOb7hiiFiLncPZye3EbJfo6r%2BFgqr%2FEYKjz%2FMURC8wwNxXBUNvVuqfv6pV4a%2BZlBg0RhZu8LmF9VlwPwRdeSLC9WWYgXlKyZ1a6%2BkHCmKvKyuBKfzjWzrAXhDYWfBT7ME%2Fz2Z2egU2mPKWb9BUfLcmC4v8xI6Wr0eJ%2Bi2h3rmBIYclZWjWBcnt84JpB5GK5A7zNWvMXK6BGjEv3bZTDj473tvLg84BhozwwNseT6i9ZAGURR0684ZHnZORbW078aW98NeMKVfN2gti39wu1NdYvWc675TuvRCJ%2FErAmq20KahNkDi5Hoao2A7Nbvz7Cgp603cuzijltoZYg%2FJekCpXFv84sKHwdASM180wdQfLb5VIMJ2M9cQGOqUBDQfQAC01XvpyMDfc%2F69Ah3RpMe1xGDw4U1f4G7HmQdyBd1Lxyi8Ejpv2%2FsYuQpHDWKpOvRSiOEfZSmDWHidPVcCIpMXw7in8eq3%2BuZFM6sQvXKXsR44RZV6MerNqbq67jT7LnNxE7C2eSFz5%2BhK2VPuZqgUsdfQKUBybRFR%2BUyVS3ye4mrqLS91KxxQy%2B1FwIAI72y%2FkE6dUwmceclxUPmxAJ%2F4%2B&X-Amz-Signature=a0122f56c703bf5c9e340c48ff52de78f9456a762a8aac5aedc71639a33c9c97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GKRILOG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdWHSPFuVCq3akhV10Zemi8SUORfTfIB8cCrnNejfA%2FAIgfip%2B%2FmpigsLXS5hk6b%2FkDy8dy7bDolb3Uli8hUSIbxoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIsvB4MF0bvbDvVPoircA6VlqSpoX%2FIIvh8g6t31eR%2FHtBTeUY3mwE3p%2FZbARr6AwSQfMIc6zUIcdjQ29qIuXG9Syz9X9Pwlz3vC0WR62K65aBpsgsPJ6uaABcdjBDdPE5Ct328uuSjRc%2F9EBrjeIA%2B%2Bj1hrVrT09LxXOlDxmSGJQep4S4Pg0Dm8U8gT1HjlzlLk4yNnRvpwbuQc8XqWnGCMrXhIRAl6jXibfPHlSe64bzfgjt4U77u%2BjViIwh%2BylXfm%2FXr%2FDsjBgBclFgmbXSE39ySHMfzbUNYOb7hiiFiLncPZye3EbJfo6r%2BFgqr%2FEYKjz%2FMURC8wwNxXBUNvVuqfv6pV4a%2BZlBg0RhZu8LmF9VlwPwRdeSLC9WWYgXlKyZ1a6%2BkHCmKvKyuBKfzjWzrAXhDYWfBT7ME%2Fz2Z2egU2mPKWb9BUfLcmC4v8xI6Wr0eJ%2Bi2h3rmBIYclZWjWBcnt84JpB5GK5A7zNWvMXK6BGjEv3bZTDj473tvLg84BhozwwNseT6i9ZAGURR0684ZHnZORbW078aW98NeMKVfN2gti39wu1NdYvWc675TuvRCJ%2FErAmq20KahNkDi5Hoao2A7Nbvz7Cgp603cuzijltoZYg%2FJekCpXFv84sKHwdASM180wdQfLb5VIMJ2M9cQGOqUBDQfQAC01XvpyMDfc%2F69Ah3RpMe1xGDw4U1f4G7HmQdyBd1Lxyi8Ejpv2%2FsYuQpHDWKpOvRSiOEfZSmDWHidPVcCIpMXw7in8eq3%2BuZFM6sQvXKXsR44RZV6MerNqbq67jT7LnNxE7C2eSFz5%2BhK2VPuZqgUsdfQKUBybRFR%2BUyVS3ye4mrqLS91KxxQy%2B1FwIAI72y%2FkE6dUwmceclxUPmxAJ%2F4%2B&X-Amz-Signature=415fde0b1f02127d994775b787885f2b0522f36399c40036ea4b48dfd1170661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GKRILOG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdWHSPFuVCq3akhV10Zemi8SUORfTfIB8cCrnNejfA%2FAIgfip%2B%2FmpigsLXS5hk6b%2FkDy8dy7bDolb3Uli8hUSIbxoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIsvB4MF0bvbDvVPoircA6VlqSpoX%2FIIvh8g6t31eR%2FHtBTeUY3mwE3p%2FZbARr6AwSQfMIc6zUIcdjQ29qIuXG9Syz9X9Pwlz3vC0WR62K65aBpsgsPJ6uaABcdjBDdPE5Ct328uuSjRc%2F9EBrjeIA%2B%2Bj1hrVrT09LxXOlDxmSGJQep4S4Pg0Dm8U8gT1HjlzlLk4yNnRvpwbuQc8XqWnGCMrXhIRAl6jXibfPHlSe64bzfgjt4U77u%2BjViIwh%2BylXfm%2FXr%2FDsjBgBclFgmbXSE39ySHMfzbUNYOb7hiiFiLncPZye3EbJfo6r%2BFgqr%2FEYKjz%2FMURC8wwNxXBUNvVuqfv6pV4a%2BZlBg0RhZu8LmF9VlwPwRdeSLC9WWYgXlKyZ1a6%2BkHCmKvKyuBKfzjWzrAXhDYWfBT7ME%2Fz2Z2egU2mPKWb9BUfLcmC4v8xI6Wr0eJ%2Bi2h3rmBIYclZWjWBcnt84JpB5GK5A7zNWvMXK6BGjEv3bZTDj473tvLg84BhozwwNseT6i9ZAGURR0684ZHnZORbW078aW98NeMKVfN2gti39wu1NdYvWc675TuvRCJ%2FErAmq20KahNkDi5Hoao2A7Nbvz7Cgp603cuzijltoZYg%2FJekCpXFv84sKHwdASM180wdQfLb5VIMJ2M9cQGOqUBDQfQAC01XvpyMDfc%2F69Ah3RpMe1xGDw4U1f4G7HmQdyBd1Lxyi8Ejpv2%2FsYuQpHDWKpOvRSiOEfZSmDWHidPVcCIpMXw7in8eq3%2BuZFM6sQvXKXsR44RZV6MerNqbq67jT7LnNxE7C2eSFz5%2BhK2VPuZqgUsdfQKUBybRFR%2BUyVS3ye4mrqLS91KxxQy%2B1FwIAI72y%2FkE6dUwmceclxUPmxAJ%2F4%2B&X-Amz-Signature=c1f8cc16eef616e2a211dd6f81f8e474842c122d1fca8fb12e588aee91720d5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GKRILOG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdWHSPFuVCq3akhV10Zemi8SUORfTfIB8cCrnNejfA%2FAIgfip%2B%2FmpigsLXS5hk6b%2FkDy8dy7bDolb3Uli8hUSIbxoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIsvB4MF0bvbDvVPoircA6VlqSpoX%2FIIvh8g6t31eR%2FHtBTeUY3mwE3p%2FZbARr6AwSQfMIc6zUIcdjQ29qIuXG9Syz9X9Pwlz3vC0WR62K65aBpsgsPJ6uaABcdjBDdPE5Ct328uuSjRc%2F9EBrjeIA%2B%2Bj1hrVrT09LxXOlDxmSGJQep4S4Pg0Dm8U8gT1HjlzlLk4yNnRvpwbuQc8XqWnGCMrXhIRAl6jXibfPHlSe64bzfgjt4U77u%2BjViIwh%2BylXfm%2FXr%2FDsjBgBclFgmbXSE39ySHMfzbUNYOb7hiiFiLncPZye3EbJfo6r%2BFgqr%2FEYKjz%2FMURC8wwNxXBUNvVuqfv6pV4a%2BZlBg0RhZu8LmF9VlwPwRdeSLC9WWYgXlKyZ1a6%2BkHCmKvKyuBKfzjWzrAXhDYWfBT7ME%2Fz2Z2egU2mPKWb9BUfLcmC4v8xI6Wr0eJ%2Bi2h3rmBIYclZWjWBcnt84JpB5GK5A7zNWvMXK6BGjEv3bZTDj473tvLg84BhozwwNseT6i9ZAGURR0684ZHnZORbW078aW98NeMKVfN2gti39wu1NdYvWc675TuvRCJ%2FErAmq20KahNkDi5Hoao2A7Nbvz7Cgp603cuzijltoZYg%2FJekCpXFv84sKHwdASM180wdQfLb5VIMJ2M9cQGOqUBDQfQAC01XvpyMDfc%2F69Ah3RpMe1xGDw4U1f4G7HmQdyBd1Lxyi8Ejpv2%2FsYuQpHDWKpOvRSiOEfZSmDWHidPVcCIpMXw7in8eq3%2BuZFM6sQvXKXsR44RZV6MerNqbq67jT7LnNxE7C2eSFz5%2BhK2VPuZqgUsdfQKUBybRFR%2BUyVS3ye4mrqLS91KxxQy%2B1FwIAI72y%2FkE6dUwmceclxUPmxAJ%2F4%2B&X-Amz-Signature=3cee1c0b2fac1f2f08ed1b9f877fac7c030b609df1b7c3701d2024e87c4002f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
