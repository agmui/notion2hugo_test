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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6Q5ZPVF%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMVNWzCHSvTj%2BDQ%2FCWYEHGkVqdoC1meC4AEdefR6dS1AiEAgeiymlYdZjNps%2FF7haUyMbmk09gWcCPx6aTljdzzQoQqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGognnomj9SP4zbSOircA47A7vrO0dpGGHfyhneMBeSxJx8wXLBFVoV6%2BIRvXkRgK8gd0oV6w6nLKjQvNsSQ2c36G3AZBlHyu50KV7zc8ujRCe6m6%2FbrOVb4fX5MOMV0Enmb1CInwg6ltP0nYFQK0tEIL0ua0yaj6g0bUT2c%2Bs8FYih3sQoVOF4oocAawqIpn3SvwuBPLnLh2Ml7tkuvv9bgq2o6RpMqSeYsKyJu2LAEIw5NLBXyMAoTHZIpBsGQat%2FMK6HgeA9YVTSVVP%2Fuqh8vVsY6oUBHyJLxAMDkI62%2FE61Wpg7rwFNfBwLegCkMvKm7SYRvFWFIIjN%2FwtSIlaWiPGeLO2NSCNMNgtGwX6rQQsROihiyWVSHL6NMUSNCthWuB0lq9jnYVEHJbFVkkCDblmckIf9Eq%2FR8uXhczGIyPEbgkoPcRbZzvhZ60e6rSYBwQP0A%2B0qPmiKKxs6LrGhkLplZ9lSSrT9oAQPIfd6zk3GgUB6gMV2%2FYGsb8LfacFLTzD9VrrMwVZPbXqrxfehFNphU8AT%2Fwdb9W58SHn1v5bW5t12EEN1r%2BCwE2RODalDtPlLuS5cUozfxn8G3iCP6Z2fWmuAsm2UIVTd0liS0ddq5IGM2t0QWL9%2BCscr%2FNy65FgLxAuIz3eQ%2FMKHu9bwGOqUBTD5yTF9%2BA3Rn3F3wkXkpYUbFFqEzA%2FzNFx2UjRegWprt6CpqwJzyY5frIPP8lkF%2BtCdwAtnsvpWBF%2F%2B99cD8S6PDdhhTNNQCS1jUT1NS9ziswORTP9%2Bsa2CJcKY64rWT4CPv4Nz1119T6FYleUHsIpx%2FlB3fB0DZN1pDoBuevKCCoDbOh96XD2mCoNVSDI3mmqRs2GqP6h%2BbpiwHPnHgSGL2NnJq&X-Amz-Signature=619f102914d0df60a41a9e30cec5465ea3cfa2a3b61fda2e2c7931e6c534fa3d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6Q5ZPVF%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMVNWzCHSvTj%2BDQ%2FCWYEHGkVqdoC1meC4AEdefR6dS1AiEAgeiymlYdZjNps%2FF7haUyMbmk09gWcCPx6aTljdzzQoQqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGognnomj9SP4zbSOircA47A7vrO0dpGGHfyhneMBeSxJx8wXLBFVoV6%2BIRvXkRgK8gd0oV6w6nLKjQvNsSQ2c36G3AZBlHyu50KV7zc8ujRCe6m6%2FbrOVb4fX5MOMV0Enmb1CInwg6ltP0nYFQK0tEIL0ua0yaj6g0bUT2c%2Bs8FYih3sQoVOF4oocAawqIpn3SvwuBPLnLh2Ml7tkuvv9bgq2o6RpMqSeYsKyJu2LAEIw5NLBXyMAoTHZIpBsGQat%2FMK6HgeA9YVTSVVP%2Fuqh8vVsY6oUBHyJLxAMDkI62%2FE61Wpg7rwFNfBwLegCkMvKm7SYRvFWFIIjN%2FwtSIlaWiPGeLO2NSCNMNgtGwX6rQQsROihiyWVSHL6NMUSNCthWuB0lq9jnYVEHJbFVkkCDblmckIf9Eq%2FR8uXhczGIyPEbgkoPcRbZzvhZ60e6rSYBwQP0A%2B0qPmiKKxs6LrGhkLplZ9lSSrT9oAQPIfd6zk3GgUB6gMV2%2FYGsb8LfacFLTzD9VrrMwVZPbXqrxfehFNphU8AT%2Fwdb9W58SHn1v5bW5t12EEN1r%2BCwE2RODalDtPlLuS5cUozfxn8G3iCP6Z2fWmuAsm2UIVTd0liS0ddq5IGM2t0QWL9%2BCscr%2FNy65FgLxAuIz3eQ%2FMKHu9bwGOqUBTD5yTF9%2BA3Rn3F3wkXkpYUbFFqEzA%2FzNFx2UjRegWprt6CpqwJzyY5frIPP8lkF%2BtCdwAtnsvpWBF%2F%2B99cD8S6PDdhhTNNQCS1jUT1NS9ziswORTP9%2Bsa2CJcKY64rWT4CPv4Nz1119T6FYleUHsIpx%2FlB3fB0DZN1pDoBuevKCCoDbOh96XD2mCoNVSDI3mmqRs2GqP6h%2BbpiwHPnHgSGL2NnJq&X-Amz-Signature=466dc3109d3ab75e5157a8f40be455f9807836af88fcb6dcfce545b8b09a2ddc&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6Q5ZPVF%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMVNWzCHSvTj%2BDQ%2FCWYEHGkVqdoC1meC4AEdefR6dS1AiEAgeiymlYdZjNps%2FF7haUyMbmk09gWcCPx6aTljdzzQoQqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGognnomj9SP4zbSOircA47A7vrO0dpGGHfyhneMBeSxJx8wXLBFVoV6%2BIRvXkRgK8gd0oV6w6nLKjQvNsSQ2c36G3AZBlHyu50KV7zc8ujRCe6m6%2FbrOVb4fX5MOMV0Enmb1CInwg6ltP0nYFQK0tEIL0ua0yaj6g0bUT2c%2Bs8FYih3sQoVOF4oocAawqIpn3SvwuBPLnLh2Ml7tkuvv9bgq2o6RpMqSeYsKyJu2LAEIw5NLBXyMAoTHZIpBsGQat%2FMK6HgeA9YVTSVVP%2Fuqh8vVsY6oUBHyJLxAMDkI62%2FE61Wpg7rwFNfBwLegCkMvKm7SYRvFWFIIjN%2FwtSIlaWiPGeLO2NSCNMNgtGwX6rQQsROihiyWVSHL6NMUSNCthWuB0lq9jnYVEHJbFVkkCDblmckIf9Eq%2FR8uXhczGIyPEbgkoPcRbZzvhZ60e6rSYBwQP0A%2B0qPmiKKxs6LrGhkLplZ9lSSrT9oAQPIfd6zk3GgUB6gMV2%2FYGsb8LfacFLTzD9VrrMwVZPbXqrxfehFNphU8AT%2Fwdb9W58SHn1v5bW5t12EEN1r%2BCwE2RODalDtPlLuS5cUozfxn8G3iCP6Z2fWmuAsm2UIVTd0liS0ddq5IGM2t0QWL9%2BCscr%2FNy65FgLxAuIz3eQ%2FMKHu9bwGOqUBTD5yTF9%2BA3Rn3F3wkXkpYUbFFqEzA%2FzNFx2UjRegWprt6CpqwJzyY5frIPP8lkF%2BtCdwAtnsvpWBF%2F%2B99cD8S6PDdhhTNNQCS1jUT1NS9ziswORTP9%2Bsa2CJcKY64rWT4CPv4Nz1119T6FYleUHsIpx%2FlB3fB0DZN1pDoBuevKCCoDbOh96XD2mCoNVSDI3mmqRs2GqP6h%2BbpiwHPnHgSGL2NnJq&X-Amz-Signature=28a14e8893470b4713809d6a1755a1f343e8e52e34eb43f7a4d913a45f028d8a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6Q5ZPVF%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMVNWzCHSvTj%2BDQ%2FCWYEHGkVqdoC1meC4AEdefR6dS1AiEAgeiymlYdZjNps%2FF7haUyMbmk09gWcCPx6aTljdzzQoQqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGognnomj9SP4zbSOircA47A7vrO0dpGGHfyhneMBeSxJx8wXLBFVoV6%2BIRvXkRgK8gd0oV6w6nLKjQvNsSQ2c36G3AZBlHyu50KV7zc8ujRCe6m6%2FbrOVb4fX5MOMV0Enmb1CInwg6ltP0nYFQK0tEIL0ua0yaj6g0bUT2c%2Bs8FYih3sQoVOF4oocAawqIpn3SvwuBPLnLh2Ml7tkuvv9bgq2o6RpMqSeYsKyJu2LAEIw5NLBXyMAoTHZIpBsGQat%2FMK6HgeA9YVTSVVP%2Fuqh8vVsY6oUBHyJLxAMDkI62%2FE61Wpg7rwFNfBwLegCkMvKm7SYRvFWFIIjN%2FwtSIlaWiPGeLO2NSCNMNgtGwX6rQQsROihiyWVSHL6NMUSNCthWuB0lq9jnYVEHJbFVkkCDblmckIf9Eq%2FR8uXhczGIyPEbgkoPcRbZzvhZ60e6rSYBwQP0A%2B0qPmiKKxs6LrGhkLplZ9lSSrT9oAQPIfd6zk3GgUB6gMV2%2FYGsb8LfacFLTzD9VrrMwVZPbXqrxfehFNphU8AT%2Fwdb9W58SHn1v5bW5t12EEN1r%2BCwE2RODalDtPlLuS5cUozfxn8G3iCP6Z2fWmuAsm2UIVTd0liS0ddq5IGM2t0QWL9%2BCscr%2FNy65FgLxAuIz3eQ%2FMKHu9bwGOqUBTD5yTF9%2BA3Rn3F3wkXkpYUbFFqEzA%2FzNFx2UjRegWprt6CpqwJzyY5frIPP8lkF%2BtCdwAtnsvpWBF%2F%2B99cD8S6PDdhhTNNQCS1jUT1NS9ziswORTP9%2Bsa2CJcKY64rWT4CPv4Nz1119T6FYleUHsIpx%2FlB3fB0DZN1pDoBuevKCCoDbOh96XD2mCoNVSDI3mmqRs2GqP6h%2BbpiwHPnHgSGL2NnJq&X-Amz-Signature=f8a08351d345a3e38584d91441da567de9c9d4bd8030e1fd0551f81a75a98daa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6Q5ZPVF%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMVNWzCHSvTj%2BDQ%2FCWYEHGkVqdoC1meC4AEdefR6dS1AiEAgeiymlYdZjNps%2FF7haUyMbmk09gWcCPx6aTljdzzQoQqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGognnomj9SP4zbSOircA47A7vrO0dpGGHfyhneMBeSxJx8wXLBFVoV6%2BIRvXkRgK8gd0oV6w6nLKjQvNsSQ2c36G3AZBlHyu50KV7zc8ujRCe6m6%2FbrOVb4fX5MOMV0Enmb1CInwg6ltP0nYFQK0tEIL0ua0yaj6g0bUT2c%2Bs8FYih3sQoVOF4oocAawqIpn3SvwuBPLnLh2Ml7tkuvv9bgq2o6RpMqSeYsKyJu2LAEIw5NLBXyMAoTHZIpBsGQat%2FMK6HgeA9YVTSVVP%2Fuqh8vVsY6oUBHyJLxAMDkI62%2FE61Wpg7rwFNfBwLegCkMvKm7SYRvFWFIIjN%2FwtSIlaWiPGeLO2NSCNMNgtGwX6rQQsROihiyWVSHL6NMUSNCthWuB0lq9jnYVEHJbFVkkCDblmckIf9Eq%2FR8uXhczGIyPEbgkoPcRbZzvhZ60e6rSYBwQP0A%2B0qPmiKKxs6LrGhkLplZ9lSSrT9oAQPIfd6zk3GgUB6gMV2%2FYGsb8LfacFLTzD9VrrMwVZPbXqrxfehFNphU8AT%2Fwdb9W58SHn1v5bW5t12EEN1r%2BCwE2RODalDtPlLuS5cUozfxn8G3iCP6Z2fWmuAsm2UIVTd0liS0ddq5IGM2t0QWL9%2BCscr%2FNy65FgLxAuIz3eQ%2FMKHu9bwGOqUBTD5yTF9%2BA3Rn3F3wkXkpYUbFFqEzA%2FzNFx2UjRegWprt6CpqwJzyY5frIPP8lkF%2BtCdwAtnsvpWBF%2F%2B99cD8S6PDdhhTNNQCS1jUT1NS9ziswORTP9%2Bsa2CJcKY64rWT4CPv4Nz1119T6FYleUHsIpx%2FlB3fB0DZN1pDoBuevKCCoDbOh96XD2mCoNVSDI3mmqRs2GqP6h%2BbpiwHPnHgSGL2NnJq&X-Amz-Signature=0ad7b3cb67fbd03a9a5fa7aad3dca0761d441c4dab2c04398675e5e93b33f7e9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6Q5ZPVF%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMVNWzCHSvTj%2BDQ%2FCWYEHGkVqdoC1meC4AEdefR6dS1AiEAgeiymlYdZjNps%2FF7haUyMbmk09gWcCPx6aTljdzzQoQqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGognnomj9SP4zbSOircA47A7vrO0dpGGHfyhneMBeSxJx8wXLBFVoV6%2BIRvXkRgK8gd0oV6w6nLKjQvNsSQ2c36G3AZBlHyu50KV7zc8ujRCe6m6%2FbrOVb4fX5MOMV0Enmb1CInwg6ltP0nYFQK0tEIL0ua0yaj6g0bUT2c%2Bs8FYih3sQoVOF4oocAawqIpn3SvwuBPLnLh2Ml7tkuvv9bgq2o6RpMqSeYsKyJu2LAEIw5NLBXyMAoTHZIpBsGQat%2FMK6HgeA9YVTSVVP%2Fuqh8vVsY6oUBHyJLxAMDkI62%2FE61Wpg7rwFNfBwLegCkMvKm7SYRvFWFIIjN%2FwtSIlaWiPGeLO2NSCNMNgtGwX6rQQsROihiyWVSHL6NMUSNCthWuB0lq9jnYVEHJbFVkkCDblmckIf9Eq%2FR8uXhczGIyPEbgkoPcRbZzvhZ60e6rSYBwQP0A%2B0qPmiKKxs6LrGhkLplZ9lSSrT9oAQPIfd6zk3GgUB6gMV2%2FYGsb8LfacFLTzD9VrrMwVZPbXqrxfehFNphU8AT%2Fwdb9W58SHn1v5bW5t12EEN1r%2BCwE2RODalDtPlLuS5cUozfxn8G3iCP6Z2fWmuAsm2UIVTd0liS0ddq5IGM2t0QWL9%2BCscr%2FNy65FgLxAuIz3eQ%2FMKHu9bwGOqUBTD5yTF9%2BA3Rn3F3wkXkpYUbFFqEzA%2FzNFx2UjRegWprt6CpqwJzyY5frIPP8lkF%2BtCdwAtnsvpWBF%2F%2B99cD8S6PDdhhTNNQCS1jUT1NS9ziswORTP9%2Bsa2CJcKY64rWT4CPv4Nz1119T6FYleUHsIpx%2FlB3fB0DZN1pDoBuevKCCoDbOh96XD2mCoNVSDI3mmqRs2GqP6h%2BbpiwHPnHgSGL2NnJq&X-Amz-Signature=febe61c3c216f186559991cdc716be4114ab5ed4c6d378ca519c5021232ec671&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6Q5ZPVF%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMVNWzCHSvTj%2BDQ%2FCWYEHGkVqdoC1meC4AEdefR6dS1AiEAgeiymlYdZjNps%2FF7haUyMbmk09gWcCPx6aTljdzzQoQqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGognnomj9SP4zbSOircA47A7vrO0dpGGHfyhneMBeSxJx8wXLBFVoV6%2BIRvXkRgK8gd0oV6w6nLKjQvNsSQ2c36G3AZBlHyu50KV7zc8ujRCe6m6%2FbrOVb4fX5MOMV0Enmb1CInwg6ltP0nYFQK0tEIL0ua0yaj6g0bUT2c%2Bs8FYih3sQoVOF4oocAawqIpn3SvwuBPLnLh2Ml7tkuvv9bgq2o6RpMqSeYsKyJu2LAEIw5NLBXyMAoTHZIpBsGQat%2FMK6HgeA9YVTSVVP%2Fuqh8vVsY6oUBHyJLxAMDkI62%2FE61Wpg7rwFNfBwLegCkMvKm7SYRvFWFIIjN%2FwtSIlaWiPGeLO2NSCNMNgtGwX6rQQsROihiyWVSHL6NMUSNCthWuB0lq9jnYVEHJbFVkkCDblmckIf9Eq%2FR8uXhczGIyPEbgkoPcRbZzvhZ60e6rSYBwQP0A%2B0qPmiKKxs6LrGhkLplZ9lSSrT9oAQPIfd6zk3GgUB6gMV2%2FYGsb8LfacFLTzD9VrrMwVZPbXqrxfehFNphU8AT%2Fwdb9W58SHn1v5bW5t12EEN1r%2BCwE2RODalDtPlLuS5cUozfxn8G3iCP6Z2fWmuAsm2UIVTd0liS0ddq5IGM2t0QWL9%2BCscr%2FNy65FgLxAuIz3eQ%2FMKHu9bwGOqUBTD5yTF9%2BA3Rn3F3wkXkpYUbFFqEzA%2FzNFx2UjRegWprt6CpqwJzyY5frIPP8lkF%2BtCdwAtnsvpWBF%2F%2B99cD8S6PDdhhTNNQCS1jUT1NS9ziswORTP9%2Bsa2CJcKY64rWT4CPv4Nz1119T6FYleUHsIpx%2FlB3fB0DZN1pDoBuevKCCoDbOh96XD2mCoNVSDI3mmqRs2GqP6h%2BbpiwHPnHgSGL2NnJq&X-Amz-Signature=8a0412857dc1c5bf42c7f48523e821f2086ea2d8b5417c54f6d48ab8d5e44d0a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6Q5ZPVF%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMVNWzCHSvTj%2BDQ%2FCWYEHGkVqdoC1meC4AEdefR6dS1AiEAgeiymlYdZjNps%2FF7haUyMbmk09gWcCPx6aTljdzzQoQqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGognnomj9SP4zbSOircA47A7vrO0dpGGHfyhneMBeSxJx8wXLBFVoV6%2BIRvXkRgK8gd0oV6w6nLKjQvNsSQ2c36G3AZBlHyu50KV7zc8ujRCe6m6%2FbrOVb4fX5MOMV0Enmb1CInwg6ltP0nYFQK0tEIL0ua0yaj6g0bUT2c%2Bs8FYih3sQoVOF4oocAawqIpn3SvwuBPLnLh2Ml7tkuvv9bgq2o6RpMqSeYsKyJu2LAEIw5NLBXyMAoTHZIpBsGQat%2FMK6HgeA9YVTSVVP%2Fuqh8vVsY6oUBHyJLxAMDkI62%2FE61Wpg7rwFNfBwLegCkMvKm7SYRvFWFIIjN%2FwtSIlaWiPGeLO2NSCNMNgtGwX6rQQsROihiyWVSHL6NMUSNCthWuB0lq9jnYVEHJbFVkkCDblmckIf9Eq%2FR8uXhczGIyPEbgkoPcRbZzvhZ60e6rSYBwQP0A%2B0qPmiKKxs6LrGhkLplZ9lSSrT9oAQPIfd6zk3GgUB6gMV2%2FYGsb8LfacFLTzD9VrrMwVZPbXqrxfehFNphU8AT%2Fwdb9W58SHn1v5bW5t12EEN1r%2BCwE2RODalDtPlLuS5cUozfxn8G3iCP6Z2fWmuAsm2UIVTd0liS0ddq5IGM2t0QWL9%2BCscr%2FNy65FgLxAuIz3eQ%2FMKHu9bwGOqUBTD5yTF9%2BA3Rn3F3wkXkpYUbFFqEzA%2FzNFx2UjRegWprt6CpqwJzyY5frIPP8lkF%2BtCdwAtnsvpWBF%2F%2B99cD8S6PDdhhTNNQCS1jUT1NS9ziswORTP9%2Bsa2CJcKY64rWT4CPv4Nz1119T6FYleUHsIpx%2FlB3fB0DZN1pDoBuevKCCoDbOh96XD2mCoNVSDI3mmqRs2GqP6h%2BbpiwHPnHgSGL2NnJq&X-Amz-Signature=c076ecdc68a60357e831602e51c10978939711de048406a555309b1002e24514&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
