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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664CLUSP4%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T132103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaSLTkMNesHQnsLgiCZsA3O%2BNzSlIJjMdza6jnFUTPYgIgQpyod0sp%2B%2Bf1RTBt5O19O3M1gDs79JDM65RqwYNFSpoq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNj0Mz1sFwpo3T4SfSrcAxyWj9sY06yUwkdJAEKrOaBfTow2Cp5X8GiKwYJTRrVZ6n9%2Bd%2B1Wi2FlV8f%2FM%2FFGf%2B%2Fdt9soxi8hkDpsf7oRxVE0Jv9O8Bmd9h1PYKKV%2BkjxryNvEZxQgWXYGQauPEY%2BuJL%2F8TumVp08a28z1URpyjq%2Fje%2FOKLuuxGn4amjGxDdWgiIQNgaRqimsMPZ4fc9WUJTnMuW7WPSerxHXZ6QKsyZh777wxhDwMCXzORao5Xykn3EY3HP%2F6liF%2FKHIyaIpTO5rjPc7KYnxkG9OMgwXAh6DQtwKY8fc%2FTJ%2F6NNtT7vq%2FFhQFW8qA16uyyjVfJRih%2BPjFRfVXjFVYPmFuwRoA5l%2BT96l57dvIq44ZZp3B%2BEi8e1o1yoDBzdMWfP2%2Fi7fWavc04Z5VDloS0SqEAQb92tbijKaidcI1Rz7%2Fqx%2BF8QETUNpWEIbiTctyomXtAbN%2B8lwVmog7Cxr6tca%2FmsyAmTGmxTr%2Byz73IBtjDQ0yjZXBpwIT7mz5RHoGMqnkFt51U3HsXQZHi1ZoqN65OF5%2FNtbuTLdX%2F84muipko4EUoak%2FImpsAgq5qb23LFXNfonshuXYM06iODC22oNby6xbBn9foyGO%2FIljBasP0mlAICwj9bOHzj%2BKRvSSJ9SMJPG%2Fr8GOqUBt0ZaEOOxkmwXN%2FACcvpi3DjfyQyHHOzW7kXsOfi5DyWakDKb3YEnRPIE%2Fnn9aPuEwO7vqM%2Ba%2FmtRqZuTiM4mN06dC7AWW8DqxW%2B%2F%2F7TR6Wgk8AhLsLYhAG6Ku7Ie%2F7WFx0JK5reKihhGtgqghk4%2BseURdBCn3bCLuPkxMrD%2BWVBNZUYj%2FPdn81DTZVK2gFlZFoAd7M%2FJmXK5FU2n%2F0s0bbi7yL4U&X-Amz-Signature=d9e65aca1a05aa2d3adb30723735adf14a3907b56ae893a98d5bca4b846921f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664CLUSP4%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T132103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaSLTkMNesHQnsLgiCZsA3O%2BNzSlIJjMdza6jnFUTPYgIgQpyod0sp%2B%2Bf1RTBt5O19O3M1gDs79JDM65RqwYNFSpoq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNj0Mz1sFwpo3T4SfSrcAxyWj9sY06yUwkdJAEKrOaBfTow2Cp5X8GiKwYJTRrVZ6n9%2Bd%2B1Wi2FlV8f%2FM%2FFGf%2B%2Fdt9soxi8hkDpsf7oRxVE0Jv9O8Bmd9h1PYKKV%2BkjxryNvEZxQgWXYGQauPEY%2BuJL%2F8TumVp08a28z1URpyjq%2Fje%2FOKLuuxGn4amjGxDdWgiIQNgaRqimsMPZ4fc9WUJTnMuW7WPSerxHXZ6QKsyZh777wxhDwMCXzORao5Xykn3EY3HP%2F6liF%2FKHIyaIpTO5rjPc7KYnxkG9OMgwXAh6DQtwKY8fc%2FTJ%2F6NNtT7vq%2FFhQFW8qA16uyyjVfJRih%2BPjFRfVXjFVYPmFuwRoA5l%2BT96l57dvIq44ZZp3B%2BEi8e1o1yoDBzdMWfP2%2Fi7fWavc04Z5VDloS0SqEAQb92tbijKaidcI1Rz7%2Fqx%2BF8QETUNpWEIbiTctyomXtAbN%2B8lwVmog7Cxr6tca%2FmsyAmTGmxTr%2Byz73IBtjDQ0yjZXBpwIT7mz5RHoGMqnkFt51U3HsXQZHi1ZoqN65OF5%2FNtbuTLdX%2F84muipko4EUoak%2FImpsAgq5qb23LFXNfonshuXYM06iODC22oNby6xbBn9foyGO%2FIljBasP0mlAICwj9bOHzj%2BKRvSSJ9SMJPG%2Fr8GOqUBt0ZaEOOxkmwXN%2FACcvpi3DjfyQyHHOzW7kXsOfi5DyWakDKb3YEnRPIE%2Fnn9aPuEwO7vqM%2Ba%2FmtRqZuTiM4mN06dC7AWW8DqxW%2B%2F%2F7TR6Wgk8AhLsLYhAG6Ku7Ie%2F7WFx0JK5reKihhGtgqghk4%2BseURdBCn3bCLuPkxMrD%2BWVBNZUYj%2FPdn81DTZVK2gFlZFoAd7M%2FJmXK5FU2n%2F0s0bbi7yL4U&X-Amz-Signature=6b4f7038430e954093b59f3c1705d86b153974688a079ba2db4ab66cdbe5f80c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664CLUSP4%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T132103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaSLTkMNesHQnsLgiCZsA3O%2BNzSlIJjMdza6jnFUTPYgIgQpyod0sp%2B%2Bf1RTBt5O19O3M1gDs79JDM65RqwYNFSpoq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNj0Mz1sFwpo3T4SfSrcAxyWj9sY06yUwkdJAEKrOaBfTow2Cp5X8GiKwYJTRrVZ6n9%2Bd%2B1Wi2FlV8f%2FM%2FFGf%2B%2Fdt9soxi8hkDpsf7oRxVE0Jv9O8Bmd9h1PYKKV%2BkjxryNvEZxQgWXYGQauPEY%2BuJL%2F8TumVp08a28z1URpyjq%2Fje%2FOKLuuxGn4amjGxDdWgiIQNgaRqimsMPZ4fc9WUJTnMuW7WPSerxHXZ6QKsyZh777wxhDwMCXzORao5Xykn3EY3HP%2F6liF%2FKHIyaIpTO5rjPc7KYnxkG9OMgwXAh6DQtwKY8fc%2FTJ%2F6NNtT7vq%2FFhQFW8qA16uyyjVfJRih%2BPjFRfVXjFVYPmFuwRoA5l%2BT96l57dvIq44ZZp3B%2BEi8e1o1yoDBzdMWfP2%2Fi7fWavc04Z5VDloS0SqEAQb92tbijKaidcI1Rz7%2Fqx%2BF8QETUNpWEIbiTctyomXtAbN%2B8lwVmog7Cxr6tca%2FmsyAmTGmxTr%2Byz73IBtjDQ0yjZXBpwIT7mz5RHoGMqnkFt51U3HsXQZHi1ZoqN65OF5%2FNtbuTLdX%2F84muipko4EUoak%2FImpsAgq5qb23LFXNfonshuXYM06iODC22oNby6xbBn9foyGO%2FIljBasP0mlAICwj9bOHzj%2BKRvSSJ9SMJPG%2Fr8GOqUBt0ZaEOOxkmwXN%2FACcvpi3DjfyQyHHOzW7kXsOfi5DyWakDKb3YEnRPIE%2Fnn9aPuEwO7vqM%2Ba%2FmtRqZuTiM4mN06dC7AWW8DqxW%2B%2F%2F7TR6Wgk8AhLsLYhAG6Ku7Ie%2F7WFx0JK5reKihhGtgqghk4%2BseURdBCn3bCLuPkxMrD%2BWVBNZUYj%2FPdn81DTZVK2gFlZFoAd7M%2FJmXK5FU2n%2F0s0bbi7yL4U&X-Amz-Signature=c59361e7c0bd58c3e5b2b0f0354bb8f992f1e3e416e9cf9f0f89d13d8e4a0503&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664CLUSP4%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T132103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaSLTkMNesHQnsLgiCZsA3O%2BNzSlIJjMdza6jnFUTPYgIgQpyod0sp%2B%2Bf1RTBt5O19O3M1gDs79JDM65RqwYNFSpoq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNj0Mz1sFwpo3T4SfSrcAxyWj9sY06yUwkdJAEKrOaBfTow2Cp5X8GiKwYJTRrVZ6n9%2Bd%2B1Wi2FlV8f%2FM%2FFGf%2B%2Fdt9soxi8hkDpsf7oRxVE0Jv9O8Bmd9h1PYKKV%2BkjxryNvEZxQgWXYGQauPEY%2BuJL%2F8TumVp08a28z1URpyjq%2Fje%2FOKLuuxGn4amjGxDdWgiIQNgaRqimsMPZ4fc9WUJTnMuW7WPSerxHXZ6QKsyZh777wxhDwMCXzORao5Xykn3EY3HP%2F6liF%2FKHIyaIpTO5rjPc7KYnxkG9OMgwXAh6DQtwKY8fc%2FTJ%2F6NNtT7vq%2FFhQFW8qA16uyyjVfJRih%2BPjFRfVXjFVYPmFuwRoA5l%2BT96l57dvIq44ZZp3B%2BEi8e1o1yoDBzdMWfP2%2Fi7fWavc04Z5VDloS0SqEAQb92tbijKaidcI1Rz7%2Fqx%2BF8QETUNpWEIbiTctyomXtAbN%2B8lwVmog7Cxr6tca%2FmsyAmTGmxTr%2Byz73IBtjDQ0yjZXBpwIT7mz5RHoGMqnkFt51U3HsXQZHi1ZoqN65OF5%2FNtbuTLdX%2F84muipko4EUoak%2FImpsAgq5qb23LFXNfonshuXYM06iODC22oNby6xbBn9foyGO%2FIljBasP0mlAICwj9bOHzj%2BKRvSSJ9SMJPG%2Fr8GOqUBt0ZaEOOxkmwXN%2FACcvpi3DjfyQyHHOzW7kXsOfi5DyWakDKb3YEnRPIE%2Fnn9aPuEwO7vqM%2Ba%2FmtRqZuTiM4mN06dC7AWW8DqxW%2B%2F%2F7TR6Wgk8AhLsLYhAG6Ku7Ie%2F7WFx0JK5reKihhGtgqghk4%2BseURdBCn3bCLuPkxMrD%2BWVBNZUYj%2FPdn81DTZVK2gFlZFoAd7M%2FJmXK5FU2n%2F0s0bbi7yL4U&X-Amz-Signature=605115d4129ae69c77a48979940aa5ea7a7b07bbd8b7fd61c9476dbaf81e0bd5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664CLUSP4%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T132103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaSLTkMNesHQnsLgiCZsA3O%2BNzSlIJjMdza6jnFUTPYgIgQpyod0sp%2B%2Bf1RTBt5O19O3M1gDs79JDM65RqwYNFSpoq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNj0Mz1sFwpo3T4SfSrcAxyWj9sY06yUwkdJAEKrOaBfTow2Cp5X8GiKwYJTRrVZ6n9%2Bd%2B1Wi2FlV8f%2FM%2FFGf%2B%2Fdt9soxi8hkDpsf7oRxVE0Jv9O8Bmd9h1PYKKV%2BkjxryNvEZxQgWXYGQauPEY%2BuJL%2F8TumVp08a28z1URpyjq%2Fje%2FOKLuuxGn4amjGxDdWgiIQNgaRqimsMPZ4fc9WUJTnMuW7WPSerxHXZ6QKsyZh777wxhDwMCXzORao5Xykn3EY3HP%2F6liF%2FKHIyaIpTO5rjPc7KYnxkG9OMgwXAh6DQtwKY8fc%2FTJ%2F6NNtT7vq%2FFhQFW8qA16uyyjVfJRih%2BPjFRfVXjFVYPmFuwRoA5l%2BT96l57dvIq44ZZp3B%2BEi8e1o1yoDBzdMWfP2%2Fi7fWavc04Z5VDloS0SqEAQb92tbijKaidcI1Rz7%2Fqx%2BF8QETUNpWEIbiTctyomXtAbN%2B8lwVmog7Cxr6tca%2FmsyAmTGmxTr%2Byz73IBtjDQ0yjZXBpwIT7mz5RHoGMqnkFt51U3HsXQZHi1ZoqN65OF5%2FNtbuTLdX%2F84muipko4EUoak%2FImpsAgq5qb23LFXNfonshuXYM06iODC22oNby6xbBn9foyGO%2FIljBasP0mlAICwj9bOHzj%2BKRvSSJ9SMJPG%2Fr8GOqUBt0ZaEOOxkmwXN%2FACcvpi3DjfyQyHHOzW7kXsOfi5DyWakDKb3YEnRPIE%2Fnn9aPuEwO7vqM%2Ba%2FmtRqZuTiM4mN06dC7AWW8DqxW%2B%2F%2F7TR6Wgk8AhLsLYhAG6Ku7Ie%2F7WFx0JK5reKihhGtgqghk4%2BseURdBCn3bCLuPkxMrD%2BWVBNZUYj%2FPdn81DTZVK2gFlZFoAd7M%2FJmXK5FU2n%2F0s0bbi7yL4U&X-Amz-Signature=25431d8ce69138b8356a1d897a6e4afbfba92e73a41fde2453395174185c3835&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664CLUSP4%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T132103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaSLTkMNesHQnsLgiCZsA3O%2BNzSlIJjMdza6jnFUTPYgIgQpyod0sp%2B%2Bf1RTBt5O19O3M1gDs79JDM65RqwYNFSpoq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNj0Mz1sFwpo3T4SfSrcAxyWj9sY06yUwkdJAEKrOaBfTow2Cp5X8GiKwYJTRrVZ6n9%2Bd%2B1Wi2FlV8f%2FM%2FFGf%2B%2Fdt9soxi8hkDpsf7oRxVE0Jv9O8Bmd9h1PYKKV%2BkjxryNvEZxQgWXYGQauPEY%2BuJL%2F8TumVp08a28z1URpyjq%2Fje%2FOKLuuxGn4amjGxDdWgiIQNgaRqimsMPZ4fc9WUJTnMuW7WPSerxHXZ6QKsyZh777wxhDwMCXzORao5Xykn3EY3HP%2F6liF%2FKHIyaIpTO5rjPc7KYnxkG9OMgwXAh6DQtwKY8fc%2FTJ%2F6NNtT7vq%2FFhQFW8qA16uyyjVfJRih%2BPjFRfVXjFVYPmFuwRoA5l%2BT96l57dvIq44ZZp3B%2BEi8e1o1yoDBzdMWfP2%2Fi7fWavc04Z5VDloS0SqEAQb92tbijKaidcI1Rz7%2Fqx%2BF8QETUNpWEIbiTctyomXtAbN%2B8lwVmog7Cxr6tca%2FmsyAmTGmxTr%2Byz73IBtjDQ0yjZXBpwIT7mz5RHoGMqnkFt51U3HsXQZHi1ZoqN65OF5%2FNtbuTLdX%2F84muipko4EUoak%2FImpsAgq5qb23LFXNfonshuXYM06iODC22oNby6xbBn9foyGO%2FIljBasP0mlAICwj9bOHzj%2BKRvSSJ9SMJPG%2Fr8GOqUBt0ZaEOOxkmwXN%2FACcvpi3DjfyQyHHOzW7kXsOfi5DyWakDKb3YEnRPIE%2Fnn9aPuEwO7vqM%2Ba%2FmtRqZuTiM4mN06dC7AWW8DqxW%2B%2F%2F7TR6Wgk8AhLsLYhAG6Ku7Ie%2F7WFx0JK5reKihhGtgqghk4%2BseURdBCn3bCLuPkxMrD%2BWVBNZUYj%2FPdn81DTZVK2gFlZFoAd7M%2FJmXK5FU2n%2F0s0bbi7yL4U&X-Amz-Signature=f1d29813e4daf0158b60a577999fe44781dc34b7c226286e09785be2f9fe19ab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664CLUSP4%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T132103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaSLTkMNesHQnsLgiCZsA3O%2BNzSlIJjMdza6jnFUTPYgIgQpyod0sp%2B%2Bf1RTBt5O19O3M1gDs79JDM65RqwYNFSpoq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNj0Mz1sFwpo3T4SfSrcAxyWj9sY06yUwkdJAEKrOaBfTow2Cp5X8GiKwYJTRrVZ6n9%2Bd%2B1Wi2FlV8f%2FM%2FFGf%2B%2Fdt9soxi8hkDpsf7oRxVE0Jv9O8Bmd9h1PYKKV%2BkjxryNvEZxQgWXYGQauPEY%2BuJL%2F8TumVp08a28z1URpyjq%2Fje%2FOKLuuxGn4amjGxDdWgiIQNgaRqimsMPZ4fc9WUJTnMuW7WPSerxHXZ6QKsyZh777wxhDwMCXzORao5Xykn3EY3HP%2F6liF%2FKHIyaIpTO5rjPc7KYnxkG9OMgwXAh6DQtwKY8fc%2FTJ%2F6NNtT7vq%2FFhQFW8qA16uyyjVfJRih%2BPjFRfVXjFVYPmFuwRoA5l%2BT96l57dvIq44ZZp3B%2BEi8e1o1yoDBzdMWfP2%2Fi7fWavc04Z5VDloS0SqEAQb92tbijKaidcI1Rz7%2Fqx%2BF8QETUNpWEIbiTctyomXtAbN%2B8lwVmog7Cxr6tca%2FmsyAmTGmxTr%2Byz73IBtjDQ0yjZXBpwIT7mz5RHoGMqnkFt51U3HsXQZHi1ZoqN65OF5%2FNtbuTLdX%2F84muipko4EUoak%2FImpsAgq5qb23LFXNfonshuXYM06iODC22oNby6xbBn9foyGO%2FIljBasP0mlAICwj9bOHzj%2BKRvSSJ9SMJPG%2Fr8GOqUBt0ZaEOOxkmwXN%2FACcvpi3DjfyQyHHOzW7kXsOfi5DyWakDKb3YEnRPIE%2Fnn9aPuEwO7vqM%2Ba%2FmtRqZuTiM4mN06dC7AWW8DqxW%2B%2F%2F7TR6Wgk8AhLsLYhAG6Ku7Ie%2F7WFx0JK5reKihhGtgqghk4%2BseURdBCn3bCLuPkxMrD%2BWVBNZUYj%2FPdn81DTZVK2gFlZFoAd7M%2FJmXK5FU2n%2F0s0bbi7yL4U&X-Amz-Signature=5c06df59726c8cb0a8dc145d185b4562d0485a9579518dde778ad6b00a0e8fe6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664CLUSP4%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T132103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaSLTkMNesHQnsLgiCZsA3O%2BNzSlIJjMdza6jnFUTPYgIgQpyod0sp%2B%2Bf1RTBt5O19O3M1gDs79JDM65RqwYNFSpoq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNj0Mz1sFwpo3T4SfSrcAxyWj9sY06yUwkdJAEKrOaBfTow2Cp5X8GiKwYJTRrVZ6n9%2Bd%2B1Wi2FlV8f%2FM%2FFGf%2B%2Fdt9soxi8hkDpsf7oRxVE0Jv9O8Bmd9h1PYKKV%2BkjxryNvEZxQgWXYGQauPEY%2BuJL%2F8TumVp08a28z1URpyjq%2Fje%2FOKLuuxGn4amjGxDdWgiIQNgaRqimsMPZ4fc9WUJTnMuW7WPSerxHXZ6QKsyZh777wxhDwMCXzORao5Xykn3EY3HP%2F6liF%2FKHIyaIpTO5rjPc7KYnxkG9OMgwXAh6DQtwKY8fc%2FTJ%2F6NNtT7vq%2FFhQFW8qA16uyyjVfJRih%2BPjFRfVXjFVYPmFuwRoA5l%2BT96l57dvIq44ZZp3B%2BEi8e1o1yoDBzdMWfP2%2Fi7fWavc04Z5VDloS0SqEAQb92tbijKaidcI1Rz7%2Fqx%2BF8QETUNpWEIbiTctyomXtAbN%2B8lwVmog7Cxr6tca%2FmsyAmTGmxTr%2Byz73IBtjDQ0yjZXBpwIT7mz5RHoGMqnkFt51U3HsXQZHi1ZoqN65OF5%2FNtbuTLdX%2F84muipko4EUoak%2FImpsAgq5qb23LFXNfonshuXYM06iODC22oNby6xbBn9foyGO%2FIljBasP0mlAICwj9bOHzj%2BKRvSSJ9SMJPG%2Fr8GOqUBt0ZaEOOxkmwXN%2FACcvpi3DjfyQyHHOzW7kXsOfi5DyWakDKb3YEnRPIE%2Fnn9aPuEwO7vqM%2Ba%2FmtRqZuTiM4mN06dC7AWW8DqxW%2B%2F%2F7TR6Wgk8AhLsLYhAG6Ku7Ie%2F7WFx0JK5reKihhGtgqghk4%2BseURdBCn3bCLuPkxMrD%2BWVBNZUYj%2FPdn81DTZVK2gFlZFoAd7M%2FJmXK5FU2n%2F0s0bbi7yL4U&X-Amz-Signature=30a5c104d18df933220ed62b896d1b6b80913f8e9541694f09e7a171a0648b64&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
