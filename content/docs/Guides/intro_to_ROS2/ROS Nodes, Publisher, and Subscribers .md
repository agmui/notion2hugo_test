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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6QOMFJT%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo8hQXZ6AG2tMyXdLH5qVwy4hrn4WpVKakivVMYtj7JAIgEQdQJIxkciSbREHM3f7jzJGjGzmk1vSwD9s%2FXqzp%2BlkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMXx4OMo%2FXQJaTSeLircAxQx89Y%2F0JInqmQR3HLoYsfIWd%2FT2ebt9ka21DTtSc4STWCu6eG5lWrXEdFrI7ux7KpWWGqseI%2FSkRAlkKzzYrmmK9AxqeHuaLkYvVVbbJrXAw4rpSFotObPPoAaTFcn49uXI2415nQVkYt2uG5UiVhjlP0HCMGJBCwcH%2BvYq1V4mfiAyLh96qlCnGiKwP%2FS8BBTq26Nqd70uzH0RSPqW8q%2BF10ih67oNIbmabRIKgVDLvBqk9yWSWnRlsmEUz2Y58Y8Rm07EbUwGLoKvag2N1IWLh9dc8vx32XFx7xxT5kjeceaF9x%2Fi3eCTiajQWmtEPXL8eLmQ9uaUuvO%2BnxQS1noZ5sBuyxYyqfms%2BwOZiNDRmRTVL%2FE0x0%2FDYr1VghhWAX%2Bmm3HqpiG0wCRfFvAIaH6cMnksyd2h%2F1y%2FAndfR2rlK1QzRMPJwQSHf%2B4eFPZgc3Z%2FB2zMsykDB3mkchiFqbrPapWEt8Dd1pRurjZilzsYVdrv0Uk3QKXQjggvChiksTH8yR4LjNMEB4CFRQ7f%2FxOM4iPRY8sb7Xm9WK3DjVFs6ap6q5IdvqE8g9GQY41QIUPCsZkDgHS%2BYOZybbQqcNo9Kg9ygq08T7sDe0xC%2BG8bG6wYdeGq8igywNFMJGm97wGOqUBpd3WWXw0o5%2BiBoxfpnd%2FoxFYsQnORBksKrqEuEx9SNf%2ByazpUpzV2ecYRXZUK9Fbyd2jSTLFbuSt8tKVRxRmHfMCaSYOQH4%2Fml4GVLKycAt08PYNe4ifkf%2FYeDyMbR6H4ewDOZz9VCAjJ2rpWNDELTRpd4PlqRXvnaT1NjRwscAKwLB70LFLwQAWDCbyhxpCZGwIuovaQh4zFGclPf5JGrPsD%2FKt&X-Amz-Signature=a22a58c2442dd1ea3c37dc39002ec5e572b402179c9af0562d35648da03b6ab5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6QOMFJT%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo8hQXZ6AG2tMyXdLH5qVwy4hrn4WpVKakivVMYtj7JAIgEQdQJIxkciSbREHM3f7jzJGjGzmk1vSwD9s%2FXqzp%2BlkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMXx4OMo%2FXQJaTSeLircAxQx89Y%2F0JInqmQR3HLoYsfIWd%2FT2ebt9ka21DTtSc4STWCu6eG5lWrXEdFrI7ux7KpWWGqseI%2FSkRAlkKzzYrmmK9AxqeHuaLkYvVVbbJrXAw4rpSFotObPPoAaTFcn49uXI2415nQVkYt2uG5UiVhjlP0HCMGJBCwcH%2BvYq1V4mfiAyLh96qlCnGiKwP%2FS8BBTq26Nqd70uzH0RSPqW8q%2BF10ih67oNIbmabRIKgVDLvBqk9yWSWnRlsmEUz2Y58Y8Rm07EbUwGLoKvag2N1IWLh9dc8vx32XFx7xxT5kjeceaF9x%2Fi3eCTiajQWmtEPXL8eLmQ9uaUuvO%2BnxQS1noZ5sBuyxYyqfms%2BwOZiNDRmRTVL%2FE0x0%2FDYr1VghhWAX%2Bmm3HqpiG0wCRfFvAIaH6cMnksyd2h%2F1y%2FAndfR2rlK1QzRMPJwQSHf%2B4eFPZgc3Z%2FB2zMsykDB3mkchiFqbrPapWEt8Dd1pRurjZilzsYVdrv0Uk3QKXQjggvChiksTH8yR4LjNMEB4CFRQ7f%2FxOM4iPRY8sb7Xm9WK3DjVFs6ap6q5IdvqE8g9GQY41QIUPCsZkDgHS%2BYOZybbQqcNo9Kg9ygq08T7sDe0xC%2BG8bG6wYdeGq8igywNFMJGm97wGOqUBpd3WWXw0o5%2BiBoxfpnd%2FoxFYsQnORBksKrqEuEx9SNf%2ByazpUpzV2ecYRXZUK9Fbyd2jSTLFbuSt8tKVRxRmHfMCaSYOQH4%2Fml4GVLKycAt08PYNe4ifkf%2FYeDyMbR6H4ewDOZz9VCAjJ2rpWNDELTRpd4PlqRXvnaT1NjRwscAKwLB70LFLwQAWDCbyhxpCZGwIuovaQh4zFGclPf5JGrPsD%2FKt&X-Amz-Signature=781fe2decaed06a404636c796cd790a12d7f969b2f9a875da62f183dc59d50f7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6QOMFJT%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo8hQXZ6AG2tMyXdLH5qVwy4hrn4WpVKakivVMYtj7JAIgEQdQJIxkciSbREHM3f7jzJGjGzmk1vSwD9s%2FXqzp%2BlkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMXx4OMo%2FXQJaTSeLircAxQx89Y%2F0JInqmQR3HLoYsfIWd%2FT2ebt9ka21DTtSc4STWCu6eG5lWrXEdFrI7ux7KpWWGqseI%2FSkRAlkKzzYrmmK9AxqeHuaLkYvVVbbJrXAw4rpSFotObPPoAaTFcn49uXI2415nQVkYt2uG5UiVhjlP0HCMGJBCwcH%2BvYq1V4mfiAyLh96qlCnGiKwP%2FS8BBTq26Nqd70uzH0RSPqW8q%2BF10ih67oNIbmabRIKgVDLvBqk9yWSWnRlsmEUz2Y58Y8Rm07EbUwGLoKvag2N1IWLh9dc8vx32XFx7xxT5kjeceaF9x%2Fi3eCTiajQWmtEPXL8eLmQ9uaUuvO%2BnxQS1noZ5sBuyxYyqfms%2BwOZiNDRmRTVL%2FE0x0%2FDYr1VghhWAX%2Bmm3HqpiG0wCRfFvAIaH6cMnksyd2h%2F1y%2FAndfR2rlK1QzRMPJwQSHf%2B4eFPZgc3Z%2FB2zMsykDB3mkchiFqbrPapWEt8Dd1pRurjZilzsYVdrv0Uk3QKXQjggvChiksTH8yR4LjNMEB4CFRQ7f%2FxOM4iPRY8sb7Xm9WK3DjVFs6ap6q5IdvqE8g9GQY41QIUPCsZkDgHS%2BYOZybbQqcNo9Kg9ygq08T7sDe0xC%2BG8bG6wYdeGq8igywNFMJGm97wGOqUBpd3WWXw0o5%2BiBoxfpnd%2FoxFYsQnORBksKrqEuEx9SNf%2ByazpUpzV2ecYRXZUK9Fbyd2jSTLFbuSt8tKVRxRmHfMCaSYOQH4%2Fml4GVLKycAt08PYNe4ifkf%2FYeDyMbR6H4ewDOZz9VCAjJ2rpWNDELTRpd4PlqRXvnaT1NjRwscAKwLB70LFLwQAWDCbyhxpCZGwIuovaQh4zFGclPf5JGrPsD%2FKt&X-Amz-Signature=c90e3fb91740600ab13827a914cd4c5a4f9bc287148b830fee63b07304afb956&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6QOMFJT%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo8hQXZ6AG2tMyXdLH5qVwy4hrn4WpVKakivVMYtj7JAIgEQdQJIxkciSbREHM3f7jzJGjGzmk1vSwD9s%2FXqzp%2BlkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMXx4OMo%2FXQJaTSeLircAxQx89Y%2F0JInqmQR3HLoYsfIWd%2FT2ebt9ka21DTtSc4STWCu6eG5lWrXEdFrI7ux7KpWWGqseI%2FSkRAlkKzzYrmmK9AxqeHuaLkYvVVbbJrXAw4rpSFotObPPoAaTFcn49uXI2415nQVkYt2uG5UiVhjlP0HCMGJBCwcH%2BvYq1V4mfiAyLh96qlCnGiKwP%2FS8BBTq26Nqd70uzH0RSPqW8q%2BF10ih67oNIbmabRIKgVDLvBqk9yWSWnRlsmEUz2Y58Y8Rm07EbUwGLoKvag2N1IWLh9dc8vx32XFx7xxT5kjeceaF9x%2Fi3eCTiajQWmtEPXL8eLmQ9uaUuvO%2BnxQS1noZ5sBuyxYyqfms%2BwOZiNDRmRTVL%2FE0x0%2FDYr1VghhWAX%2Bmm3HqpiG0wCRfFvAIaH6cMnksyd2h%2F1y%2FAndfR2rlK1QzRMPJwQSHf%2B4eFPZgc3Z%2FB2zMsykDB3mkchiFqbrPapWEt8Dd1pRurjZilzsYVdrv0Uk3QKXQjggvChiksTH8yR4LjNMEB4CFRQ7f%2FxOM4iPRY8sb7Xm9WK3DjVFs6ap6q5IdvqE8g9GQY41QIUPCsZkDgHS%2BYOZybbQqcNo9Kg9ygq08T7sDe0xC%2BG8bG6wYdeGq8igywNFMJGm97wGOqUBpd3WWXw0o5%2BiBoxfpnd%2FoxFYsQnORBksKrqEuEx9SNf%2ByazpUpzV2ecYRXZUK9Fbyd2jSTLFbuSt8tKVRxRmHfMCaSYOQH4%2Fml4GVLKycAt08PYNe4ifkf%2FYeDyMbR6H4ewDOZz9VCAjJ2rpWNDELTRpd4PlqRXvnaT1NjRwscAKwLB70LFLwQAWDCbyhxpCZGwIuovaQh4zFGclPf5JGrPsD%2FKt&X-Amz-Signature=dd6a994a31ce62ea1716cdb6b756e4a8dd10d37152c2dcd8d25e09c0cbad8b6f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6QOMFJT%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo8hQXZ6AG2tMyXdLH5qVwy4hrn4WpVKakivVMYtj7JAIgEQdQJIxkciSbREHM3f7jzJGjGzmk1vSwD9s%2FXqzp%2BlkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMXx4OMo%2FXQJaTSeLircAxQx89Y%2F0JInqmQR3HLoYsfIWd%2FT2ebt9ka21DTtSc4STWCu6eG5lWrXEdFrI7ux7KpWWGqseI%2FSkRAlkKzzYrmmK9AxqeHuaLkYvVVbbJrXAw4rpSFotObPPoAaTFcn49uXI2415nQVkYt2uG5UiVhjlP0HCMGJBCwcH%2BvYq1V4mfiAyLh96qlCnGiKwP%2FS8BBTq26Nqd70uzH0RSPqW8q%2BF10ih67oNIbmabRIKgVDLvBqk9yWSWnRlsmEUz2Y58Y8Rm07EbUwGLoKvag2N1IWLh9dc8vx32XFx7xxT5kjeceaF9x%2Fi3eCTiajQWmtEPXL8eLmQ9uaUuvO%2BnxQS1noZ5sBuyxYyqfms%2BwOZiNDRmRTVL%2FE0x0%2FDYr1VghhWAX%2Bmm3HqpiG0wCRfFvAIaH6cMnksyd2h%2F1y%2FAndfR2rlK1QzRMPJwQSHf%2B4eFPZgc3Z%2FB2zMsykDB3mkchiFqbrPapWEt8Dd1pRurjZilzsYVdrv0Uk3QKXQjggvChiksTH8yR4LjNMEB4CFRQ7f%2FxOM4iPRY8sb7Xm9WK3DjVFs6ap6q5IdvqE8g9GQY41QIUPCsZkDgHS%2BYOZybbQqcNo9Kg9ygq08T7sDe0xC%2BG8bG6wYdeGq8igywNFMJGm97wGOqUBpd3WWXw0o5%2BiBoxfpnd%2FoxFYsQnORBksKrqEuEx9SNf%2ByazpUpzV2ecYRXZUK9Fbyd2jSTLFbuSt8tKVRxRmHfMCaSYOQH4%2Fml4GVLKycAt08PYNe4ifkf%2FYeDyMbR6H4ewDOZz9VCAjJ2rpWNDELTRpd4PlqRXvnaT1NjRwscAKwLB70LFLwQAWDCbyhxpCZGwIuovaQh4zFGclPf5JGrPsD%2FKt&X-Amz-Signature=d5ab51fb73fb7782a4be79e371ddfe70fbe4a7fc4ee8474c309c7066927d7e34&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6QOMFJT%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo8hQXZ6AG2tMyXdLH5qVwy4hrn4WpVKakivVMYtj7JAIgEQdQJIxkciSbREHM3f7jzJGjGzmk1vSwD9s%2FXqzp%2BlkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMXx4OMo%2FXQJaTSeLircAxQx89Y%2F0JInqmQR3HLoYsfIWd%2FT2ebt9ka21DTtSc4STWCu6eG5lWrXEdFrI7ux7KpWWGqseI%2FSkRAlkKzzYrmmK9AxqeHuaLkYvVVbbJrXAw4rpSFotObPPoAaTFcn49uXI2415nQVkYt2uG5UiVhjlP0HCMGJBCwcH%2BvYq1V4mfiAyLh96qlCnGiKwP%2FS8BBTq26Nqd70uzH0RSPqW8q%2BF10ih67oNIbmabRIKgVDLvBqk9yWSWnRlsmEUz2Y58Y8Rm07EbUwGLoKvag2N1IWLh9dc8vx32XFx7xxT5kjeceaF9x%2Fi3eCTiajQWmtEPXL8eLmQ9uaUuvO%2BnxQS1noZ5sBuyxYyqfms%2BwOZiNDRmRTVL%2FE0x0%2FDYr1VghhWAX%2Bmm3HqpiG0wCRfFvAIaH6cMnksyd2h%2F1y%2FAndfR2rlK1QzRMPJwQSHf%2B4eFPZgc3Z%2FB2zMsykDB3mkchiFqbrPapWEt8Dd1pRurjZilzsYVdrv0Uk3QKXQjggvChiksTH8yR4LjNMEB4CFRQ7f%2FxOM4iPRY8sb7Xm9WK3DjVFs6ap6q5IdvqE8g9GQY41QIUPCsZkDgHS%2BYOZybbQqcNo9Kg9ygq08T7sDe0xC%2BG8bG6wYdeGq8igywNFMJGm97wGOqUBpd3WWXw0o5%2BiBoxfpnd%2FoxFYsQnORBksKrqEuEx9SNf%2ByazpUpzV2ecYRXZUK9Fbyd2jSTLFbuSt8tKVRxRmHfMCaSYOQH4%2Fml4GVLKycAt08PYNe4ifkf%2FYeDyMbR6H4ewDOZz9VCAjJ2rpWNDELTRpd4PlqRXvnaT1NjRwscAKwLB70LFLwQAWDCbyhxpCZGwIuovaQh4zFGclPf5JGrPsD%2FKt&X-Amz-Signature=8a146f690b01d351f076aecdfe44365e91a8f5a56983846369172f080763f95c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6QOMFJT%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo8hQXZ6AG2tMyXdLH5qVwy4hrn4WpVKakivVMYtj7JAIgEQdQJIxkciSbREHM3f7jzJGjGzmk1vSwD9s%2FXqzp%2BlkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMXx4OMo%2FXQJaTSeLircAxQx89Y%2F0JInqmQR3HLoYsfIWd%2FT2ebt9ka21DTtSc4STWCu6eG5lWrXEdFrI7ux7KpWWGqseI%2FSkRAlkKzzYrmmK9AxqeHuaLkYvVVbbJrXAw4rpSFotObPPoAaTFcn49uXI2415nQVkYt2uG5UiVhjlP0HCMGJBCwcH%2BvYq1V4mfiAyLh96qlCnGiKwP%2FS8BBTq26Nqd70uzH0RSPqW8q%2BF10ih67oNIbmabRIKgVDLvBqk9yWSWnRlsmEUz2Y58Y8Rm07EbUwGLoKvag2N1IWLh9dc8vx32XFx7xxT5kjeceaF9x%2Fi3eCTiajQWmtEPXL8eLmQ9uaUuvO%2BnxQS1noZ5sBuyxYyqfms%2BwOZiNDRmRTVL%2FE0x0%2FDYr1VghhWAX%2Bmm3HqpiG0wCRfFvAIaH6cMnksyd2h%2F1y%2FAndfR2rlK1QzRMPJwQSHf%2B4eFPZgc3Z%2FB2zMsykDB3mkchiFqbrPapWEt8Dd1pRurjZilzsYVdrv0Uk3QKXQjggvChiksTH8yR4LjNMEB4CFRQ7f%2FxOM4iPRY8sb7Xm9WK3DjVFs6ap6q5IdvqE8g9GQY41QIUPCsZkDgHS%2BYOZybbQqcNo9Kg9ygq08T7sDe0xC%2BG8bG6wYdeGq8igywNFMJGm97wGOqUBpd3WWXw0o5%2BiBoxfpnd%2FoxFYsQnORBksKrqEuEx9SNf%2ByazpUpzV2ecYRXZUK9Fbyd2jSTLFbuSt8tKVRxRmHfMCaSYOQH4%2Fml4GVLKycAt08PYNe4ifkf%2FYeDyMbR6H4ewDOZz9VCAjJ2rpWNDELTRpd4PlqRXvnaT1NjRwscAKwLB70LFLwQAWDCbyhxpCZGwIuovaQh4zFGclPf5JGrPsD%2FKt&X-Amz-Signature=9a550dcc985d7366f54df311a37e65142dc4e93ad9716dd552d4a22cbf1a35db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6QOMFJT%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo8hQXZ6AG2tMyXdLH5qVwy4hrn4WpVKakivVMYtj7JAIgEQdQJIxkciSbREHM3f7jzJGjGzmk1vSwD9s%2FXqzp%2BlkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMXx4OMo%2FXQJaTSeLircAxQx89Y%2F0JInqmQR3HLoYsfIWd%2FT2ebt9ka21DTtSc4STWCu6eG5lWrXEdFrI7ux7KpWWGqseI%2FSkRAlkKzzYrmmK9AxqeHuaLkYvVVbbJrXAw4rpSFotObPPoAaTFcn49uXI2415nQVkYt2uG5UiVhjlP0HCMGJBCwcH%2BvYq1V4mfiAyLh96qlCnGiKwP%2FS8BBTq26Nqd70uzH0RSPqW8q%2BF10ih67oNIbmabRIKgVDLvBqk9yWSWnRlsmEUz2Y58Y8Rm07EbUwGLoKvag2N1IWLh9dc8vx32XFx7xxT5kjeceaF9x%2Fi3eCTiajQWmtEPXL8eLmQ9uaUuvO%2BnxQS1noZ5sBuyxYyqfms%2BwOZiNDRmRTVL%2FE0x0%2FDYr1VghhWAX%2Bmm3HqpiG0wCRfFvAIaH6cMnksyd2h%2F1y%2FAndfR2rlK1QzRMPJwQSHf%2B4eFPZgc3Z%2FB2zMsykDB3mkchiFqbrPapWEt8Dd1pRurjZilzsYVdrv0Uk3QKXQjggvChiksTH8yR4LjNMEB4CFRQ7f%2FxOM4iPRY8sb7Xm9WK3DjVFs6ap6q5IdvqE8g9GQY41QIUPCsZkDgHS%2BYOZybbQqcNo9Kg9ygq08T7sDe0xC%2BG8bG6wYdeGq8igywNFMJGm97wGOqUBpd3WWXw0o5%2BiBoxfpnd%2FoxFYsQnORBksKrqEuEx9SNf%2ByazpUpzV2ecYRXZUK9Fbyd2jSTLFbuSt8tKVRxRmHfMCaSYOQH4%2Fml4GVLKycAt08PYNe4ifkf%2FYeDyMbR6H4ewDOZz9VCAjJ2rpWNDELTRpd4PlqRXvnaT1NjRwscAKwLB70LFLwQAWDCbyhxpCZGwIuovaQh4zFGclPf5JGrPsD%2FKt&X-Amz-Signature=0793267e366a8d903b294b42feef4186203f4befccedde588137d69cc2280b57&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
