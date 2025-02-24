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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBL477J3%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T061209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOu3y4E8aUEdXLVRgW%2BzSihmOXl%2FjNSodU9y2RsAV32AIhAM%2BF5i8U%2B39Z%2FaOWUK35oQox9UPzsDmN6rZBwFxhuFzuKv8DCCcQABoMNjM3NDIzMTgzODA1IgyvbMKqO%2BDqFRkOb2Eq3AMA7cvs7jJvOfwxn4xpIyFs9%2BhJ4h%2BAeKDpSf5TQv0meINBqiayML7VCdMZjl2WAdobVo2%2B%2F28RUBy1vP735lS%2Bx6uxWuwD2akBU2kOT5RAU0sbLaqhct6%2BXRQUAf2avzK4EpGuW0LFP0VUDu6GGb3Iif4Gnt3GfDeonxCsUI2TtN2GeQUZWuZdETWxB5bEtSBQICFHH8zx35OAJrv80t3BwGvsd5ZkMpAiAxK3ECv5raUZQ6eOPQyAfilmhJeESCpAzjENoliZpHSF3kdeGJfGxl4mXLjMTPsF5HANviOr9D8AsSfxBVWnvrSLD2he6Px9aQnqkA7SqXjbO9hwoJqmIS%2BanDy1o2TGnKo7xtYnzoac1q4LaKE2U7A1WOfVvgnERHS4owYEOpfARUKrNgaH3XEuGmykrOMSipTX8Gx5KkGS%2Bm7XXaZnFK6u7iTSmwtAhabMA4PUf4qGan42oGN7sYucPGUiZHIHC1IylnepbHdtEzWSU2wr1dvbkcYyKKivZpLg%2FYSKiTjZ7iS0vMJ7a01dEGbLBtoptLpKmC3Ii02wr9K1GuBAsZnFmlgQusi1%2FHGzLmfSbbb4Zcbjyv2k%2F1aNj0I%2FAbUdsGmbM0w3UF%2Fu%2F37LiMEY%2FPoaSzDilPC9BjqkAWhHgWv%2FVxbT04nibNK3ans5muoQFgqbWhi3i4dSnHRRBQNng%2FiyYikvO%2FCsSXRvrl75DFugA5gb6hEFkn2tlgUDfXamDRUwSBkU8yv23ueB1EpzVFHvR40v5yCVX8i0GKfLpuJa9u8ZiAEoYDajtQ6Oustmi%2Fb7Ex%2FhTkok1B%2BNt6QUMJzhFCIBHAy1q5Kl4FL5p3aI2kGoUqaZT8c0FYe2M2LK&X-Amz-Signature=8dcf93ad205dcedafc170abb25553732bb2cc25b28317c60b5428bc7b3f78f99&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBL477J3%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T061209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOu3y4E8aUEdXLVRgW%2BzSihmOXl%2FjNSodU9y2RsAV32AIhAM%2BF5i8U%2B39Z%2FaOWUK35oQox9UPzsDmN6rZBwFxhuFzuKv8DCCcQABoMNjM3NDIzMTgzODA1IgyvbMKqO%2BDqFRkOb2Eq3AMA7cvs7jJvOfwxn4xpIyFs9%2BhJ4h%2BAeKDpSf5TQv0meINBqiayML7VCdMZjl2WAdobVo2%2B%2F28RUBy1vP735lS%2Bx6uxWuwD2akBU2kOT5RAU0sbLaqhct6%2BXRQUAf2avzK4EpGuW0LFP0VUDu6GGb3Iif4Gnt3GfDeonxCsUI2TtN2GeQUZWuZdETWxB5bEtSBQICFHH8zx35OAJrv80t3BwGvsd5ZkMpAiAxK3ECv5raUZQ6eOPQyAfilmhJeESCpAzjENoliZpHSF3kdeGJfGxl4mXLjMTPsF5HANviOr9D8AsSfxBVWnvrSLD2he6Px9aQnqkA7SqXjbO9hwoJqmIS%2BanDy1o2TGnKo7xtYnzoac1q4LaKE2U7A1WOfVvgnERHS4owYEOpfARUKrNgaH3XEuGmykrOMSipTX8Gx5KkGS%2Bm7XXaZnFK6u7iTSmwtAhabMA4PUf4qGan42oGN7sYucPGUiZHIHC1IylnepbHdtEzWSU2wr1dvbkcYyKKivZpLg%2FYSKiTjZ7iS0vMJ7a01dEGbLBtoptLpKmC3Ii02wr9K1GuBAsZnFmlgQusi1%2FHGzLmfSbbb4Zcbjyv2k%2F1aNj0I%2FAbUdsGmbM0w3UF%2Fu%2F37LiMEY%2FPoaSzDilPC9BjqkAWhHgWv%2FVxbT04nibNK3ans5muoQFgqbWhi3i4dSnHRRBQNng%2FiyYikvO%2FCsSXRvrl75DFugA5gb6hEFkn2tlgUDfXamDRUwSBkU8yv23ueB1EpzVFHvR40v5yCVX8i0GKfLpuJa9u8ZiAEoYDajtQ6Oustmi%2Fb7Ex%2FhTkok1B%2BNt6QUMJzhFCIBHAy1q5Kl4FL5p3aI2kGoUqaZT8c0FYe2M2LK&X-Amz-Signature=c474f23164a2017e4a81010acae33575516aa82b0dd1d6c0b3caa0a3a7a21ab7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBL477J3%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T061209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOu3y4E8aUEdXLVRgW%2BzSihmOXl%2FjNSodU9y2RsAV32AIhAM%2BF5i8U%2B39Z%2FaOWUK35oQox9UPzsDmN6rZBwFxhuFzuKv8DCCcQABoMNjM3NDIzMTgzODA1IgyvbMKqO%2BDqFRkOb2Eq3AMA7cvs7jJvOfwxn4xpIyFs9%2BhJ4h%2BAeKDpSf5TQv0meINBqiayML7VCdMZjl2WAdobVo2%2B%2F28RUBy1vP735lS%2Bx6uxWuwD2akBU2kOT5RAU0sbLaqhct6%2BXRQUAf2avzK4EpGuW0LFP0VUDu6GGb3Iif4Gnt3GfDeonxCsUI2TtN2GeQUZWuZdETWxB5bEtSBQICFHH8zx35OAJrv80t3BwGvsd5ZkMpAiAxK3ECv5raUZQ6eOPQyAfilmhJeESCpAzjENoliZpHSF3kdeGJfGxl4mXLjMTPsF5HANviOr9D8AsSfxBVWnvrSLD2he6Px9aQnqkA7SqXjbO9hwoJqmIS%2BanDy1o2TGnKo7xtYnzoac1q4LaKE2U7A1WOfVvgnERHS4owYEOpfARUKrNgaH3XEuGmykrOMSipTX8Gx5KkGS%2Bm7XXaZnFK6u7iTSmwtAhabMA4PUf4qGan42oGN7sYucPGUiZHIHC1IylnepbHdtEzWSU2wr1dvbkcYyKKivZpLg%2FYSKiTjZ7iS0vMJ7a01dEGbLBtoptLpKmC3Ii02wr9K1GuBAsZnFmlgQusi1%2FHGzLmfSbbb4Zcbjyv2k%2F1aNj0I%2FAbUdsGmbM0w3UF%2Fu%2F37LiMEY%2FPoaSzDilPC9BjqkAWhHgWv%2FVxbT04nibNK3ans5muoQFgqbWhi3i4dSnHRRBQNng%2FiyYikvO%2FCsSXRvrl75DFugA5gb6hEFkn2tlgUDfXamDRUwSBkU8yv23ueB1EpzVFHvR40v5yCVX8i0GKfLpuJa9u8ZiAEoYDajtQ6Oustmi%2Fb7Ex%2FhTkok1B%2BNt6QUMJzhFCIBHAy1q5Kl4FL5p3aI2kGoUqaZT8c0FYe2M2LK&X-Amz-Signature=45d0dcacac478d1913788d0e843905af483d90424cc9bb494b7bb74216d17a0a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBL477J3%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T061209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOu3y4E8aUEdXLVRgW%2BzSihmOXl%2FjNSodU9y2RsAV32AIhAM%2BF5i8U%2B39Z%2FaOWUK35oQox9UPzsDmN6rZBwFxhuFzuKv8DCCcQABoMNjM3NDIzMTgzODA1IgyvbMKqO%2BDqFRkOb2Eq3AMA7cvs7jJvOfwxn4xpIyFs9%2BhJ4h%2BAeKDpSf5TQv0meINBqiayML7VCdMZjl2WAdobVo2%2B%2F28RUBy1vP735lS%2Bx6uxWuwD2akBU2kOT5RAU0sbLaqhct6%2BXRQUAf2avzK4EpGuW0LFP0VUDu6GGb3Iif4Gnt3GfDeonxCsUI2TtN2GeQUZWuZdETWxB5bEtSBQICFHH8zx35OAJrv80t3BwGvsd5ZkMpAiAxK3ECv5raUZQ6eOPQyAfilmhJeESCpAzjENoliZpHSF3kdeGJfGxl4mXLjMTPsF5HANviOr9D8AsSfxBVWnvrSLD2he6Px9aQnqkA7SqXjbO9hwoJqmIS%2BanDy1o2TGnKo7xtYnzoac1q4LaKE2U7A1WOfVvgnERHS4owYEOpfARUKrNgaH3XEuGmykrOMSipTX8Gx5KkGS%2Bm7XXaZnFK6u7iTSmwtAhabMA4PUf4qGan42oGN7sYucPGUiZHIHC1IylnepbHdtEzWSU2wr1dvbkcYyKKivZpLg%2FYSKiTjZ7iS0vMJ7a01dEGbLBtoptLpKmC3Ii02wr9K1GuBAsZnFmlgQusi1%2FHGzLmfSbbb4Zcbjyv2k%2F1aNj0I%2FAbUdsGmbM0w3UF%2Fu%2F37LiMEY%2FPoaSzDilPC9BjqkAWhHgWv%2FVxbT04nibNK3ans5muoQFgqbWhi3i4dSnHRRBQNng%2FiyYikvO%2FCsSXRvrl75DFugA5gb6hEFkn2tlgUDfXamDRUwSBkU8yv23ueB1EpzVFHvR40v5yCVX8i0GKfLpuJa9u8ZiAEoYDajtQ6Oustmi%2Fb7Ex%2FhTkok1B%2BNt6QUMJzhFCIBHAy1q5Kl4FL5p3aI2kGoUqaZT8c0FYe2M2LK&X-Amz-Signature=ea724aecf43892c3a08fccb38114b48e3a214eda261b5604b3afb75917ed0a7b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBL477J3%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T061209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOu3y4E8aUEdXLVRgW%2BzSihmOXl%2FjNSodU9y2RsAV32AIhAM%2BF5i8U%2B39Z%2FaOWUK35oQox9UPzsDmN6rZBwFxhuFzuKv8DCCcQABoMNjM3NDIzMTgzODA1IgyvbMKqO%2BDqFRkOb2Eq3AMA7cvs7jJvOfwxn4xpIyFs9%2BhJ4h%2BAeKDpSf5TQv0meINBqiayML7VCdMZjl2WAdobVo2%2B%2F28RUBy1vP735lS%2Bx6uxWuwD2akBU2kOT5RAU0sbLaqhct6%2BXRQUAf2avzK4EpGuW0LFP0VUDu6GGb3Iif4Gnt3GfDeonxCsUI2TtN2GeQUZWuZdETWxB5bEtSBQICFHH8zx35OAJrv80t3BwGvsd5ZkMpAiAxK3ECv5raUZQ6eOPQyAfilmhJeESCpAzjENoliZpHSF3kdeGJfGxl4mXLjMTPsF5HANviOr9D8AsSfxBVWnvrSLD2he6Px9aQnqkA7SqXjbO9hwoJqmIS%2BanDy1o2TGnKo7xtYnzoac1q4LaKE2U7A1WOfVvgnERHS4owYEOpfARUKrNgaH3XEuGmykrOMSipTX8Gx5KkGS%2Bm7XXaZnFK6u7iTSmwtAhabMA4PUf4qGan42oGN7sYucPGUiZHIHC1IylnepbHdtEzWSU2wr1dvbkcYyKKivZpLg%2FYSKiTjZ7iS0vMJ7a01dEGbLBtoptLpKmC3Ii02wr9K1GuBAsZnFmlgQusi1%2FHGzLmfSbbb4Zcbjyv2k%2F1aNj0I%2FAbUdsGmbM0w3UF%2Fu%2F37LiMEY%2FPoaSzDilPC9BjqkAWhHgWv%2FVxbT04nibNK3ans5muoQFgqbWhi3i4dSnHRRBQNng%2FiyYikvO%2FCsSXRvrl75DFugA5gb6hEFkn2tlgUDfXamDRUwSBkU8yv23ueB1EpzVFHvR40v5yCVX8i0GKfLpuJa9u8ZiAEoYDajtQ6Oustmi%2Fb7Ex%2FhTkok1B%2BNt6QUMJzhFCIBHAy1q5Kl4FL5p3aI2kGoUqaZT8c0FYe2M2LK&X-Amz-Signature=8ca049c66213cb175e3cd41edf6d66f401bb200183834850a90decdb10937dfb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBL477J3%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T061209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOu3y4E8aUEdXLVRgW%2BzSihmOXl%2FjNSodU9y2RsAV32AIhAM%2BF5i8U%2B39Z%2FaOWUK35oQox9UPzsDmN6rZBwFxhuFzuKv8DCCcQABoMNjM3NDIzMTgzODA1IgyvbMKqO%2BDqFRkOb2Eq3AMA7cvs7jJvOfwxn4xpIyFs9%2BhJ4h%2BAeKDpSf5TQv0meINBqiayML7VCdMZjl2WAdobVo2%2B%2F28RUBy1vP735lS%2Bx6uxWuwD2akBU2kOT5RAU0sbLaqhct6%2BXRQUAf2avzK4EpGuW0LFP0VUDu6GGb3Iif4Gnt3GfDeonxCsUI2TtN2GeQUZWuZdETWxB5bEtSBQICFHH8zx35OAJrv80t3BwGvsd5ZkMpAiAxK3ECv5raUZQ6eOPQyAfilmhJeESCpAzjENoliZpHSF3kdeGJfGxl4mXLjMTPsF5HANviOr9D8AsSfxBVWnvrSLD2he6Px9aQnqkA7SqXjbO9hwoJqmIS%2BanDy1o2TGnKo7xtYnzoac1q4LaKE2U7A1WOfVvgnERHS4owYEOpfARUKrNgaH3XEuGmykrOMSipTX8Gx5KkGS%2Bm7XXaZnFK6u7iTSmwtAhabMA4PUf4qGan42oGN7sYucPGUiZHIHC1IylnepbHdtEzWSU2wr1dvbkcYyKKivZpLg%2FYSKiTjZ7iS0vMJ7a01dEGbLBtoptLpKmC3Ii02wr9K1GuBAsZnFmlgQusi1%2FHGzLmfSbbb4Zcbjyv2k%2F1aNj0I%2FAbUdsGmbM0w3UF%2Fu%2F37LiMEY%2FPoaSzDilPC9BjqkAWhHgWv%2FVxbT04nibNK3ans5muoQFgqbWhi3i4dSnHRRBQNng%2FiyYikvO%2FCsSXRvrl75DFugA5gb6hEFkn2tlgUDfXamDRUwSBkU8yv23ueB1EpzVFHvR40v5yCVX8i0GKfLpuJa9u8ZiAEoYDajtQ6Oustmi%2Fb7Ex%2FhTkok1B%2BNt6QUMJzhFCIBHAy1q5Kl4FL5p3aI2kGoUqaZT8c0FYe2M2LK&X-Amz-Signature=bc64bff0f68cfea4ebd769a3ef71d94d5089616e960cd0b3b8492cf08bb0ec81&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBL477J3%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T061209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOu3y4E8aUEdXLVRgW%2BzSihmOXl%2FjNSodU9y2RsAV32AIhAM%2BF5i8U%2B39Z%2FaOWUK35oQox9UPzsDmN6rZBwFxhuFzuKv8DCCcQABoMNjM3NDIzMTgzODA1IgyvbMKqO%2BDqFRkOb2Eq3AMA7cvs7jJvOfwxn4xpIyFs9%2BhJ4h%2BAeKDpSf5TQv0meINBqiayML7VCdMZjl2WAdobVo2%2B%2F28RUBy1vP735lS%2Bx6uxWuwD2akBU2kOT5RAU0sbLaqhct6%2BXRQUAf2avzK4EpGuW0LFP0VUDu6GGb3Iif4Gnt3GfDeonxCsUI2TtN2GeQUZWuZdETWxB5bEtSBQICFHH8zx35OAJrv80t3BwGvsd5ZkMpAiAxK3ECv5raUZQ6eOPQyAfilmhJeESCpAzjENoliZpHSF3kdeGJfGxl4mXLjMTPsF5HANviOr9D8AsSfxBVWnvrSLD2he6Px9aQnqkA7SqXjbO9hwoJqmIS%2BanDy1o2TGnKo7xtYnzoac1q4LaKE2U7A1WOfVvgnERHS4owYEOpfARUKrNgaH3XEuGmykrOMSipTX8Gx5KkGS%2Bm7XXaZnFK6u7iTSmwtAhabMA4PUf4qGan42oGN7sYucPGUiZHIHC1IylnepbHdtEzWSU2wr1dvbkcYyKKivZpLg%2FYSKiTjZ7iS0vMJ7a01dEGbLBtoptLpKmC3Ii02wr9K1GuBAsZnFmlgQusi1%2FHGzLmfSbbb4Zcbjyv2k%2F1aNj0I%2FAbUdsGmbM0w3UF%2Fu%2F37LiMEY%2FPoaSzDilPC9BjqkAWhHgWv%2FVxbT04nibNK3ans5muoQFgqbWhi3i4dSnHRRBQNng%2FiyYikvO%2FCsSXRvrl75DFugA5gb6hEFkn2tlgUDfXamDRUwSBkU8yv23ueB1EpzVFHvR40v5yCVX8i0GKfLpuJa9u8ZiAEoYDajtQ6Oustmi%2Fb7Ex%2FhTkok1B%2BNt6QUMJzhFCIBHAy1q5Kl4FL5p3aI2kGoUqaZT8c0FYe2M2LK&X-Amz-Signature=e24b3d006af90a2380474b2c3a48359d6ddd5af1d6b4d2696c1d36e20b5bccb1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBL477J3%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T061209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOu3y4E8aUEdXLVRgW%2BzSihmOXl%2FjNSodU9y2RsAV32AIhAM%2BF5i8U%2B39Z%2FaOWUK35oQox9UPzsDmN6rZBwFxhuFzuKv8DCCcQABoMNjM3NDIzMTgzODA1IgyvbMKqO%2BDqFRkOb2Eq3AMA7cvs7jJvOfwxn4xpIyFs9%2BhJ4h%2BAeKDpSf5TQv0meINBqiayML7VCdMZjl2WAdobVo2%2B%2F28RUBy1vP735lS%2Bx6uxWuwD2akBU2kOT5RAU0sbLaqhct6%2BXRQUAf2avzK4EpGuW0LFP0VUDu6GGb3Iif4Gnt3GfDeonxCsUI2TtN2GeQUZWuZdETWxB5bEtSBQICFHH8zx35OAJrv80t3BwGvsd5ZkMpAiAxK3ECv5raUZQ6eOPQyAfilmhJeESCpAzjENoliZpHSF3kdeGJfGxl4mXLjMTPsF5HANviOr9D8AsSfxBVWnvrSLD2he6Px9aQnqkA7SqXjbO9hwoJqmIS%2BanDy1o2TGnKo7xtYnzoac1q4LaKE2U7A1WOfVvgnERHS4owYEOpfARUKrNgaH3XEuGmykrOMSipTX8Gx5KkGS%2Bm7XXaZnFK6u7iTSmwtAhabMA4PUf4qGan42oGN7sYucPGUiZHIHC1IylnepbHdtEzWSU2wr1dvbkcYyKKivZpLg%2FYSKiTjZ7iS0vMJ7a01dEGbLBtoptLpKmC3Ii02wr9K1GuBAsZnFmlgQusi1%2FHGzLmfSbbb4Zcbjyv2k%2F1aNj0I%2FAbUdsGmbM0w3UF%2Fu%2F37LiMEY%2FPoaSzDilPC9BjqkAWhHgWv%2FVxbT04nibNK3ans5muoQFgqbWhi3i4dSnHRRBQNng%2FiyYikvO%2FCsSXRvrl75DFugA5gb6hEFkn2tlgUDfXamDRUwSBkU8yv23ueB1EpzVFHvR40v5yCVX8i0GKfLpuJa9u8ZiAEoYDajtQ6Oustmi%2Fb7Ex%2FhTkok1B%2BNt6QUMJzhFCIBHAy1q5Kl4FL5p3aI2kGoUqaZT8c0FYe2M2LK&X-Amz-Signature=c5735c6641e87a24dfc94d9125e348ecf8e3719cca2554d5a32b8284a6045151&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
