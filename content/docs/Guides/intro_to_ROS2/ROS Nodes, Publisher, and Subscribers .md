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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RWADNE%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUIaSrxyQCSGNUENgXUr0O4MbCxm0ONx%2BveA9HSrMGPwIgPRzC4jyd7IdxKnafp4g%2FKhb8nOm5Xx37zRjHTxrox7oq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOl5cAeTdK5AD%2FnPlircA5v0gJ2DRX5QPrzHpj2NfJKYGYevN3iZh5iQUvmP9oWKX7g34AFYhv8AXVgrzrQ%2FkHrWKBGCefzo%2B4rPLEAc0lQykj5KrwFa3YsMo%2BXVxusPGkqm7kfQ8QX4YM0WtdSTDFCcGX7m2CqnT4%2B6QypcVOgTvegjSarSe8r5ZX0oaB%2Fj2OMticDdnDg6nMDsI2f2gN10SqDWi9ha%2BN1VJXDhFEiPx4c4xkAlBHYJ98u%2BZ3XCxF40nIcS0mHtpGkiNv3NlNNQcHP5MFIrNr95I6WNAQo%2FEjFaF4XD%2BzqdMyeeZ%2FW%2Brv84gOBGyp07GZEY2C%2FxjbHRjq96yKu5GVX9A%2BgpsnvFK8fG83%2Bs3pvEzkbxkgZtzqEvOw%2BCibFR1TSF4mt1ZQX53fbA9teXv9wb0%2BHCz%2BcQKIkOgAMdOu00PFxsGQjyYajZkRESd%2FYHj3tpvTE3Snp%2B9PXIVIM2JMOpY5Y0l4e0VIwkquqdtATZdQ2JXrFtSfkrhoFg8%2FGQ1lhM3LvmAMsOlO5U3MxcVPLd%2Bfqz7kuVcPmoAR1EcFwomOwrxx07JDiz9Mv%2FA8o4KvWDeFkelUfct%2F0vCskKSoNY1oEF9J0nLPfZMNx5Zm8stSRZh6gjmkBYEWHwcdkSnlUtMMWk%2B8IGOqUB2ZXTyGEQrsYXc9RwKICK%2B0LB6IgIoX5b5S5C7%2FPGOBL3KAOTcA6xlrk2qNPr03CpczCTIc89DFGL0ZzasinBnLf4HhHDaSQOiOyowk6CZFN0gzBc2kMwyw9fd%2Bx0jNuf2kScWkhzdogWkfXFZ8a0mMehyf99OtT5RP3K%2BPlUSuG4K%2FTL1zNMa4rVycdpzxXdUMIHTzZHI%2Bccutc8PKGAbQzfht4c&X-Amz-Signature=0e6895395530c67c6157c810fe7731d5afe063558ac86bd69d6d695ce64f4550&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RWADNE%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUIaSrxyQCSGNUENgXUr0O4MbCxm0ONx%2BveA9HSrMGPwIgPRzC4jyd7IdxKnafp4g%2FKhb8nOm5Xx37zRjHTxrox7oq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOl5cAeTdK5AD%2FnPlircA5v0gJ2DRX5QPrzHpj2NfJKYGYevN3iZh5iQUvmP9oWKX7g34AFYhv8AXVgrzrQ%2FkHrWKBGCefzo%2B4rPLEAc0lQykj5KrwFa3YsMo%2BXVxusPGkqm7kfQ8QX4YM0WtdSTDFCcGX7m2CqnT4%2B6QypcVOgTvegjSarSe8r5ZX0oaB%2Fj2OMticDdnDg6nMDsI2f2gN10SqDWi9ha%2BN1VJXDhFEiPx4c4xkAlBHYJ98u%2BZ3XCxF40nIcS0mHtpGkiNv3NlNNQcHP5MFIrNr95I6WNAQo%2FEjFaF4XD%2BzqdMyeeZ%2FW%2Brv84gOBGyp07GZEY2C%2FxjbHRjq96yKu5GVX9A%2BgpsnvFK8fG83%2Bs3pvEzkbxkgZtzqEvOw%2BCibFR1TSF4mt1ZQX53fbA9teXv9wb0%2BHCz%2BcQKIkOgAMdOu00PFxsGQjyYajZkRESd%2FYHj3tpvTE3Snp%2B9PXIVIM2JMOpY5Y0l4e0VIwkquqdtATZdQ2JXrFtSfkrhoFg8%2FGQ1lhM3LvmAMsOlO5U3MxcVPLd%2Bfqz7kuVcPmoAR1EcFwomOwrxx07JDiz9Mv%2FA8o4KvWDeFkelUfct%2F0vCskKSoNY1oEF9J0nLPfZMNx5Zm8stSRZh6gjmkBYEWHwcdkSnlUtMMWk%2B8IGOqUB2ZXTyGEQrsYXc9RwKICK%2B0LB6IgIoX5b5S5C7%2FPGOBL3KAOTcA6xlrk2qNPr03CpczCTIc89DFGL0ZzasinBnLf4HhHDaSQOiOyowk6CZFN0gzBc2kMwyw9fd%2Bx0jNuf2kScWkhzdogWkfXFZ8a0mMehyf99OtT5RP3K%2BPlUSuG4K%2FTL1zNMa4rVycdpzxXdUMIHTzZHI%2Bccutc8PKGAbQzfht4c&X-Amz-Signature=08a7f99b25b838b8ad3be78e8f9f1f087822bc9d2c51fc7742c1ebc5c3e6e222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RWADNE%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUIaSrxyQCSGNUENgXUr0O4MbCxm0ONx%2BveA9HSrMGPwIgPRzC4jyd7IdxKnafp4g%2FKhb8nOm5Xx37zRjHTxrox7oq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOl5cAeTdK5AD%2FnPlircA5v0gJ2DRX5QPrzHpj2NfJKYGYevN3iZh5iQUvmP9oWKX7g34AFYhv8AXVgrzrQ%2FkHrWKBGCefzo%2B4rPLEAc0lQykj5KrwFa3YsMo%2BXVxusPGkqm7kfQ8QX4YM0WtdSTDFCcGX7m2CqnT4%2B6QypcVOgTvegjSarSe8r5ZX0oaB%2Fj2OMticDdnDg6nMDsI2f2gN10SqDWi9ha%2BN1VJXDhFEiPx4c4xkAlBHYJ98u%2BZ3XCxF40nIcS0mHtpGkiNv3NlNNQcHP5MFIrNr95I6WNAQo%2FEjFaF4XD%2BzqdMyeeZ%2FW%2Brv84gOBGyp07GZEY2C%2FxjbHRjq96yKu5GVX9A%2BgpsnvFK8fG83%2Bs3pvEzkbxkgZtzqEvOw%2BCibFR1TSF4mt1ZQX53fbA9teXv9wb0%2BHCz%2BcQKIkOgAMdOu00PFxsGQjyYajZkRESd%2FYHj3tpvTE3Snp%2B9PXIVIM2JMOpY5Y0l4e0VIwkquqdtATZdQ2JXrFtSfkrhoFg8%2FGQ1lhM3LvmAMsOlO5U3MxcVPLd%2Bfqz7kuVcPmoAR1EcFwomOwrxx07JDiz9Mv%2FA8o4KvWDeFkelUfct%2F0vCskKSoNY1oEF9J0nLPfZMNx5Zm8stSRZh6gjmkBYEWHwcdkSnlUtMMWk%2B8IGOqUB2ZXTyGEQrsYXc9RwKICK%2B0LB6IgIoX5b5S5C7%2FPGOBL3KAOTcA6xlrk2qNPr03CpczCTIc89DFGL0ZzasinBnLf4HhHDaSQOiOyowk6CZFN0gzBc2kMwyw9fd%2Bx0jNuf2kScWkhzdogWkfXFZ8a0mMehyf99OtT5RP3K%2BPlUSuG4K%2FTL1zNMa4rVycdpzxXdUMIHTzZHI%2Bccutc8PKGAbQzfht4c&X-Amz-Signature=03c8de069bda7da3549d0e9d28f736529012bf80212d9e566e70cb8da4a1830c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RWADNE%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUIaSrxyQCSGNUENgXUr0O4MbCxm0ONx%2BveA9HSrMGPwIgPRzC4jyd7IdxKnafp4g%2FKhb8nOm5Xx37zRjHTxrox7oq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOl5cAeTdK5AD%2FnPlircA5v0gJ2DRX5QPrzHpj2NfJKYGYevN3iZh5iQUvmP9oWKX7g34AFYhv8AXVgrzrQ%2FkHrWKBGCefzo%2B4rPLEAc0lQykj5KrwFa3YsMo%2BXVxusPGkqm7kfQ8QX4YM0WtdSTDFCcGX7m2CqnT4%2B6QypcVOgTvegjSarSe8r5ZX0oaB%2Fj2OMticDdnDg6nMDsI2f2gN10SqDWi9ha%2BN1VJXDhFEiPx4c4xkAlBHYJ98u%2BZ3XCxF40nIcS0mHtpGkiNv3NlNNQcHP5MFIrNr95I6WNAQo%2FEjFaF4XD%2BzqdMyeeZ%2FW%2Brv84gOBGyp07GZEY2C%2FxjbHRjq96yKu5GVX9A%2BgpsnvFK8fG83%2Bs3pvEzkbxkgZtzqEvOw%2BCibFR1TSF4mt1ZQX53fbA9teXv9wb0%2BHCz%2BcQKIkOgAMdOu00PFxsGQjyYajZkRESd%2FYHj3tpvTE3Snp%2B9PXIVIM2JMOpY5Y0l4e0VIwkquqdtATZdQ2JXrFtSfkrhoFg8%2FGQ1lhM3LvmAMsOlO5U3MxcVPLd%2Bfqz7kuVcPmoAR1EcFwomOwrxx07JDiz9Mv%2FA8o4KvWDeFkelUfct%2F0vCskKSoNY1oEF9J0nLPfZMNx5Zm8stSRZh6gjmkBYEWHwcdkSnlUtMMWk%2B8IGOqUB2ZXTyGEQrsYXc9RwKICK%2B0LB6IgIoX5b5S5C7%2FPGOBL3KAOTcA6xlrk2qNPr03CpczCTIc89DFGL0ZzasinBnLf4HhHDaSQOiOyowk6CZFN0gzBc2kMwyw9fd%2Bx0jNuf2kScWkhzdogWkfXFZ8a0mMehyf99OtT5RP3K%2BPlUSuG4K%2FTL1zNMa4rVycdpzxXdUMIHTzZHI%2Bccutc8PKGAbQzfht4c&X-Amz-Signature=26aec116f7ba965b8f9170a4aa471ca3bd405469fcbb4e7fe56a3c89041fd943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RWADNE%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUIaSrxyQCSGNUENgXUr0O4MbCxm0ONx%2BveA9HSrMGPwIgPRzC4jyd7IdxKnafp4g%2FKhb8nOm5Xx37zRjHTxrox7oq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOl5cAeTdK5AD%2FnPlircA5v0gJ2DRX5QPrzHpj2NfJKYGYevN3iZh5iQUvmP9oWKX7g34AFYhv8AXVgrzrQ%2FkHrWKBGCefzo%2B4rPLEAc0lQykj5KrwFa3YsMo%2BXVxusPGkqm7kfQ8QX4YM0WtdSTDFCcGX7m2CqnT4%2B6QypcVOgTvegjSarSe8r5ZX0oaB%2Fj2OMticDdnDg6nMDsI2f2gN10SqDWi9ha%2BN1VJXDhFEiPx4c4xkAlBHYJ98u%2BZ3XCxF40nIcS0mHtpGkiNv3NlNNQcHP5MFIrNr95I6WNAQo%2FEjFaF4XD%2BzqdMyeeZ%2FW%2Brv84gOBGyp07GZEY2C%2FxjbHRjq96yKu5GVX9A%2BgpsnvFK8fG83%2Bs3pvEzkbxkgZtzqEvOw%2BCibFR1TSF4mt1ZQX53fbA9teXv9wb0%2BHCz%2BcQKIkOgAMdOu00PFxsGQjyYajZkRESd%2FYHj3tpvTE3Snp%2B9PXIVIM2JMOpY5Y0l4e0VIwkquqdtATZdQ2JXrFtSfkrhoFg8%2FGQ1lhM3LvmAMsOlO5U3MxcVPLd%2Bfqz7kuVcPmoAR1EcFwomOwrxx07JDiz9Mv%2FA8o4KvWDeFkelUfct%2F0vCskKSoNY1oEF9J0nLPfZMNx5Zm8stSRZh6gjmkBYEWHwcdkSnlUtMMWk%2B8IGOqUB2ZXTyGEQrsYXc9RwKICK%2B0LB6IgIoX5b5S5C7%2FPGOBL3KAOTcA6xlrk2qNPr03CpczCTIc89DFGL0ZzasinBnLf4HhHDaSQOiOyowk6CZFN0gzBc2kMwyw9fd%2Bx0jNuf2kScWkhzdogWkfXFZ8a0mMehyf99OtT5RP3K%2BPlUSuG4K%2FTL1zNMa4rVycdpzxXdUMIHTzZHI%2Bccutc8PKGAbQzfht4c&X-Amz-Signature=9b2253cdb1dbcb8ec6b66764daaa339794ca9688ef8c7087259d5177798aa1d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RWADNE%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUIaSrxyQCSGNUENgXUr0O4MbCxm0ONx%2BveA9HSrMGPwIgPRzC4jyd7IdxKnafp4g%2FKhb8nOm5Xx37zRjHTxrox7oq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOl5cAeTdK5AD%2FnPlircA5v0gJ2DRX5QPrzHpj2NfJKYGYevN3iZh5iQUvmP9oWKX7g34AFYhv8AXVgrzrQ%2FkHrWKBGCefzo%2B4rPLEAc0lQykj5KrwFa3YsMo%2BXVxusPGkqm7kfQ8QX4YM0WtdSTDFCcGX7m2CqnT4%2B6QypcVOgTvegjSarSe8r5ZX0oaB%2Fj2OMticDdnDg6nMDsI2f2gN10SqDWi9ha%2BN1VJXDhFEiPx4c4xkAlBHYJ98u%2BZ3XCxF40nIcS0mHtpGkiNv3NlNNQcHP5MFIrNr95I6WNAQo%2FEjFaF4XD%2BzqdMyeeZ%2FW%2Brv84gOBGyp07GZEY2C%2FxjbHRjq96yKu5GVX9A%2BgpsnvFK8fG83%2Bs3pvEzkbxkgZtzqEvOw%2BCibFR1TSF4mt1ZQX53fbA9teXv9wb0%2BHCz%2BcQKIkOgAMdOu00PFxsGQjyYajZkRESd%2FYHj3tpvTE3Snp%2B9PXIVIM2JMOpY5Y0l4e0VIwkquqdtATZdQ2JXrFtSfkrhoFg8%2FGQ1lhM3LvmAMsOlO5U3MxcVPLd%2Bfqz7kuVcPmoAR1EcFwomOwrxx07JDiz9Mv%2FA8o4KvWDeFkelUfct%2F0vCskKSoNY1oEF9J0nLPfZMNx5Zm8stSRZh6gjmkBYEWHwcdkSnlUtMMWk%2B8IGOqUB2ZXTyGEQrsYXc9RwKICK%2B0LB6IgIoX5b5S5C7%2FPGOBL3KAOTcA6xlrk2qNPr03CpczCTIc89DFGL0ZzasinBnLf4HhHDaSQOiOyowk6CZFN0gzBc2kMwyw9fd%2Bx0jNuf2kScWkhzdogWkfXFZ8a0mMehyf99OtT5RP3K%2BPlUSuG4K%2FTL1zNMa4rVycdpzxXdUMIHTzZHI%2Bccutc8PKGAbQzfht4c&X-Amz-Signature=8bd4803b3c66e8ee3949d0759b8f5ee4c977ed1cef0c2d7c6ece3e59523d1d19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RWADNE%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUIaSrxyQCSGNUENgXUr0O4MbCxm0ONx%2BveA9HSrMGPwIgPRzC4jyd7IdxKnafp4g%2FKhb8nOm5Xx37zRjHTxrox7oq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOl5cAeTdK5AD%2FnPlircA5v0gJ2DRX5QPrzHpj2NfJKYGYevN3iZh5iQUvmP9oWKX7g34AFYhv8AXVgrzrQ%2FkHrWKBGCefzo%2B4rPLEAc0lQykj5KrwFa3YsMo%2BXVxusPGkqm7kfQ8QX4YM0WtdSTDFCcGX7m2CqnT4%2B6QypcVOgTvegjSarSe8r5ZX0oaB%2Fj2OMticDdnDg6nMDsI2f2gN10SqDWi9ha%2BN1VJXDhFEiPx4c4xkAlBHYJ98u%2BZ3XCxF40nIcS0mHtpGkiNv3NlNNQcHP5MFIrNr95I6WNAQo%2FEjFaF4XD%2BzqdMyeeZ%2FW%2Brv84gOBGyp07GZEY2C%2FxjbHRjq96yKu5GVX9A%2BgpsnvFK8fG83%2Bs3pvEzkbxkgZtzqEvOw%2BCibFR1TSF4mt1ZQX53fbA9teXv9wb0%2BHCz%2BcQKIkOgAMdOu00PFxsGQjyYajZkRESd%2FYHj3tpvTE3Snp%2B9PXIVIM2JMOpY5Y0l4e0VIwkquqdtATZdQ2JXrFtSfkrhoFg8%2FGQ1lhM3LvmAMsOlO5U3MxcVPLd%2Bfqz7kuVcPmoAR1EcFwomOwrxx07JDiz9Mv%2FA8o4KvWDeFkelUfct%2F0vCskKSoNY1oEF9J0nLPfZMNx5Zm8stSRZh6gjmkBYEWHwcdkSnlUtMMWk%2B8IGOqUB2ZXTyGEQrsYXc9RwKICK%2B0LB6IgIoX5b5S5C7%2FPGOBL3KAOTcA6xlrk2qNPr03CpczCTIc89DFGL0ZzasinBnLf4HhHDaSQOiOyowk6CZFN0gzBc2kMwyw9fd%2Bx0jNuf2kScWkhzdogWkfXFZ8a0mMehyf99OtT5RP3K%2BPlUSuG4K%2FTL1zNMa4rVycdpzxXdUMIHTzZHI%2Bccutc8PKGAbQzfht4c&X-Amz-Signature=da98559af7ad2128616f6c918a86449fadae979a3c2468720da6a50ec3a23bde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RWADNE%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUIaSrxyQCSGNUENgXUr0O4MbCxm0ONx%2BveA9HSrMGPwIgPRzC4jyd7IdxKnafp4g%2FKhb8nOm5Xx37zRjHTxrox7oq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOl5cAeTdK5AD%2FnPlircA5v0gJ2DRX5QPrzHpj2NfJKYGYevN3iZh5iQUvmP9oWKX7g34AFYhv8AXVgrzrQ%2FkHrWKBGCefzo%2B4rPLEAc0lQykj5KrwFa3YsMo%2BXVxusPGkqm7kfQ8QX4YM0WtdSTDFCcGX7m2CqnT4%2B6QypcVOgTvegjSarSe8r5ZX0oaB%2Fj2OMticDdnDg6nMDsI2f2gN10SqDWi9ha%2BN1VJXDhFEiPx4c4xkAlBHYJ98u%2BZ3XCxF40nIcS0mHtpGkiNv3NlNNQcHP5MFIrNr95I6WNAQo%2FEjFaF4XD%2BzqdMyeeZ%2FW%2Brv84gOBGyp07GZEY2C%2FxjbHRjq96yKu5GVX9A%2BgpsnvFK8fG83%2Bs3pvEzkbxkgZtzqEvOw%2BCibFR1TSF4mt1ZQX53fbA9teXv9wb0%2BHCz%2BcQKIkOgAMdOu00PFxsGQjyYajZkRESd%2FYHj3tpvTE3Snp%2B9PXIVIM2JMOpY5Y0l4e0VIwkquqdtATZdQ2JXrFtSfkrhoFg8%2FGQ1lhM3LvmAMsOlO5U3MxcVPLd%2Bfqz7kuVcPmoAR1EcFwomOwrxx07JDiz9Mv%2FA8o4KvWDeFkelUfct%2F0vCskKSoNY1oEF9J0nLPfZMNx5Zm8stSRZh6gjmkBYEWHwcdkSnlUtMMWk%2B8IGOqUB2ZXTyGEQrsYXc9RwKICK%2B0LB6IgIoX5b5S5C7%2FPGOBL3KAOTcA6xlrk2qNPr03CpczCTIc89DFGL0ZzasinBnLf4HhHDaSQOiOyowk6CZFN0gzBc2kMwyw9fd%2Bx0jNuf2kScWkhzdogWkfXFZ8a0mMehyf99OtT5RP3K%2BPlUSuG4K%2FTL1zNMa4rVycdpzxXdUMIHTzZHI%2Bccutc8PKGAbQzfht4c&X-Amz-Signature=2a9bc22c4ab9714833ed1c75e1bc657bef4198c9f59de3b6452efe83bd55db9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
