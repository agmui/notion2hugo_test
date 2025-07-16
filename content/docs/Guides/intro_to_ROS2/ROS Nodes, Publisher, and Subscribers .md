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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MJRMSC6%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T151002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCrtcAheb6g2jZBzppMJcyL1DkXhPZ38%2BcqLaLv%2Fsit%2FwIgc9ZkGmXMMupv4gVUqINr8uSspWyMU0pmDNT3FOF6khMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDv%2FnT%2BZHVKZmeSfiSrcAxK0ZmpRxsKZXhg5zD1i1nu3IM7ic2r2EpVDgyimCrqCeKzKsxRzyiGM85otKnI4cTfdylinhZhBpUX2HR9MKtc7%2F9FZlZblreG2ep1i5n0weoy71d7%2Bk909u3qJDId04Kr%2F24Sg8Y5Ze6MdReI%2BIH3z%2F77Gk8fBA%2FYU3t%2F%2FEjS1K4pBeBGvTIdMne8JCd%2Fp9aibVEfrn5H4%2FiQHpEGTqqF4%2FfKJmfK1%2BBqCtNQpbNb5xU1WTb8T%2FS9vUkZG1qpPQMxc88QwbZuq7A9Ygo41Gc7kJzc3YUjs3g9sVxDCgzsXbHMFlIJnK4FamOPBOWZx3Uuf0bPjk5MY%2FVmd4DclFauRYONaA0MvrGPskfyPIerCiNiG4dz%2BwFpLlEiJDFoervH2O53DiL%2BCRnUuAEvt7mrg%2Bn8j4MAPcMiaWdhHFhD%2FmKGMIqoqs9JaeyzJm6NAuH9fXMM29eLpJIihCxzZiGi8jSgMkaVBtu2u7S6q8D70xHOkpu47qCa7ZNp37Ma1a5Fc3G8Mh6bla5D0pxofSy0OChkv2p7u7bLCatvJ520CyG6bwo3DpnLYes%2BtevLMDJvGRGKcUaS3qIVfDa19Y%2Bmhnb9%2BLLeK4vgKol07i2CeH%2BlVar8dhUad6ClTMN2h3sMGOqUBwhhNP6X4VNrN9RxNClmV65YXA7OeSduhSAPQHDHKk2Pu7iXwHOYfs1Ev%2FiUE9mA%2BTGZt7jnT%2Fmt33xiKLkh2GCIC1YplSwLeK47KMGacRDm44SXzLRPFwWhwQRRuZGxHdDekcOizVhBN1AHKY9ui4pFiTUtE9IjcauJdDnQ9geo5D5wSvI2h47mtPQXQS921O%2BhIJsyTWMtghaxXJ4xhtejd2tvk&X-Amz-Signature=d9e5ce573e88eaf803812d59a775ac0e15893530531e2cd18b1d4920a37e86c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MJRMSC6%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T151002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCrtcAheb6g2jZBzppMJcyL1DkXhPZ38%2BcqLaLv%2Fsit%2FwIgc9ZkGmXMMupv4gVUqINr8uSspWyMU0pmDNT3FOF6khMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDv%2FnT%2BZHVKZmeSfiSrcAxK0ZmpRxsKZXhg5zD1i1nu3IM7ic2r2EpVDgyimCrqCeKzKsxRzyiGM85otKnI4cTfdylinhZhBpUX2HR9MKtc7%2F9FZlZblreG2ep1i5n0weoy71d7%2Bk909u3qJDId04Kr%2F24Sg8Y5Ze6MdReI%2BIH3z%2F77Gk8fBA%2FYU3t%2F%2FEjS1K4pBeBGvTIdMne8JCd%2Fp9aibVEfrn5H4%2FiQHpEGTqqF4%2FfKJmfK1%2BBqCtNQpbNb5xU1WTb8T%2FS9vUkZG1qpPQMxc88QwbZuq7A9Ygo41Gc7kJzc3YUjs3g9sVxDCgzsXbHMFlIJnK4FamOPBOWZx3Uuf0bPjk5MY%2FVmd4DclFauRYONaA0MvrGPskfyPIerCiNiG4dz%2BwFpLlEiJDFoervH2O53DiL%2BCRnUuAEvt7mrg%2Bn8j4MAPcMiaWdhHFhD%2FmKGMIqoqs9JaeyzJm6NAuH9fXMM29eLpJIihCxzZiGi8jSgMkaVBtu2u7S6q8D70xHOkpu47qCa7ZNp37Ma1a5Fc3G8Mh6bla5D0pxofSy0OChkv2p7u7bLCatvJ520CyG6bwo3DpnLYes%2BtevLMDJvGRGKcUaS3qIVfDa19Y%2Bmhnb9%2BLLeK4vgKol07i2CeH%2BlVar8dhUad6ClTMN2h3sMGOqUBwhhNP6X4VNrN9RxNClmV65YXA7OeSduhSAPQHDHKk2Pu7iXwHOYfs1Ev%2FiUE9mA%2BTGZt7jnT%2Fmt33xiKLkh2GCIC1YplSwLeK47KMGacRDm44SXzLRPFwWhwQRRuZGxHdDekcOizVhBN1AHKY9ui4pFiTUtE9IjcauJdDnQ9geo5D5wSvI2h47mtPQXQS921O%2BhIJsyTWMtghaxXJ4xhtejd2tvk&X-Amz-Signature=5ef12bc601c825e10c5999b21773ba2d9603dbe83a818308e1da87fc677ac886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MJRMSC6%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T151002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCrtcAheb6g2jZBzppMJcyL1DkXhPZ38%2BcqLaLv%2Fsit%2FwIgc9ZkGmXMMupv4gVUqINr8uSspWyMU0pmDNT3FOF6khMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDv%2FnT%2BZHVKZmeSfiSrcAxK0ZmpRxsKZXhg5zD1i1nu3IM7ic2r2EpVDgyimCrqCeKzKsxRzyiGM85otKnI4cTfdylinhZhBpUX2HR9MKtc7%2F9FZlZblreG2ep1i5n0weoy71d7%2Bk909u3qJDId04Kr%2F24Sg8Y5Ze6MdReI%2BIH3z%2F77Gk8fBA%2FYU3t%2F%2FEjS1K4pBeBGvTIdMne8JCd%2Fp9aibVEfrn5H4%2FiQHpEGTqqF4%2FfKJmfK1%2BBqCtNQpbNb5xU1WTb8T%2FS9vUkZG1qpPQMxc88QwbZuq7A9Ygo41Gc7kJzc3YUjs3g9sVxDCgzsXbHMFlIJnK4FamOPBOWZx3Uuf0bPjk5MY%2FVmd4DclFauRYONaA0MvrGPskfyPIerCiNiG4dz%2BwFpLlEiJDFoervH2O53DiL%2BCRnUuAEvt7mrg%2Bn8j4MAPcMiaWdhHFhD%2FmKGMIqoqs9JaeyzJm6NAuH9fXMM29eLpJIihCxzZiGi8jSgMkaVBtu2u7S6q8D70xHOkpu47qCa7ZNp37Ma1a5Fc3G8Mh6bla5D0pxofSy0OChkv2p7u7bLCatvJ520CyG6bwo3DpnLYes%2BtevLMDJvGRGKcUaS3qIVfDa19Y%2Bmhnb9%2BLLeK4vgKol07i2CeH%2BlVar8dhUad6ClTMN2h3sMGOqUBwhhNP6X4VNrN9RxNClmV65YXA7OeSduhSAPQHDHKk2Pu7iXwHOYfs1Ev%2FiUE9mA%2BTGZt7jnT%2Fmt33xiKLkh2GCIC1YplSwLeK47KMGacRDm44SXzLRPFwWhwQRRuZGxHdDekcOizVhBN1AHKY9ui4pFiTUtE9IjcauJdDnQ9geo5D5wSvI2h47mtPQXQS921O%2BhIJsyTWMtghaxXJ4xhtejd2tvk&X-Amz-Signature=1e0bf95ea329220e5adc013cf68ea272b1c4ceaf9cbf9dffe70083e1db15f878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MJRMSC6%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T151002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCrtcAheb6g2jZBzppMJcyL1DkXhPZ38%2BcqLaLv%2Fsit%2FwIgc9ZkGmXMMupv4gVUqINr8uSspWyMU0pmDNT3FOF6khMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDv%2FnT%2BZHVKZmeSfiSrcAxK0ZmpRxsKZXhg5zD1i1nu3IM7ic2r2EpVDgyimCrqCeKzKsxRzyiGM85otKnI4cTfdylinhZhBpUX2HR9MKtc7%2F9FZlZblreG2ep1i5n0weoy71d7%2Bk909u3qJDId04Kr%2F24Sg8Y5Ze6MdReI%2BIH3z%2F77Gk8fBA%2FYU3t%2F%2FEjS1K4pBeBGvTIdMne8JCd%2Fp9aibVEfrn5H4%2FiQHpEGTqqF4%2FfKJmfK1%2BBqCtNQpbNb5xU1WTb8T%2FS9vUkZG1qpPQMxc88QwbZuq7A9Ygo41Gc7kJzc3YUjs3g9sVxDCgzsXbHMFlIJnK4FamOPBOWZx3Uuf0bPjk5MY%2FVmd4DclFauRYONaA0MvrGPskfyPIerCiNiG4dz%2BwFpLlEiJDFoervH2O53DiL%2BCRnUuAEvt7mrg%2Bn8j4MAPcMiaWdhHFhD%2FmKGMIqoqs9JaeyzJm6NAuH9fXMM29eLpJIihCxzZiGi8jSgMkaVBtu2u7S6q8D70xHOkpu47qCa7ZNp37Ma1a5Fc3G8Mh6bla5D0pxofSy0OChkv2p7u7bLCatvJ520CyG6bwo3DpnLYes%2BtevLMDJvGRGKcUaS3qIVfDa19Y%2Bmhnb9%2BLLeK4vgKol07i2CeH%2BlVar8dhUad6ClTMN2h3sMGOqUBwhhNP6X4VNrN9RxNClmV65YXA7OeSduhSAPQHDHKk2Pu7iXwHOYfs1Ev%2FiUE9mA%2BTGZt7jnT%2Fmt33xiKLkh2GCIC1YplSwLeK47KMGacRDm44SXzLRPFwWhwQRRuZGxHdDekcOizVhBN1AHKY9ui4pFiTUtE9IjcauJdDnQ9geo5D5wSvI2h47mtPQXQS921O%2BhIJsyTWMtghaxXJ4xhtejd2tvk&X-Amz-Signature=7391efe15a851276f2f32a434037e3277c575093f2b56b9bcba7d1485430124e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MJRMSC6%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T151002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCrtcAheb6g2jZBzppMJcyL1DkXhPZ38%2BcqLaLv%2Fsit%2FwIgc9ZkGmXMMupv4gVUqINr8uSspWyMU0pmDNT3FOF6khMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDv%2FnT%2BZHVKZmeSfiSrcAxK0ZmpRxsKZXhg5zD1i1nu3IM7ic2r2EpVDgyimCrqCeKzKsxRzyiGM85otKnI4cTfdylinhZhBpUX2HR9MKtc7%2F9FZlZblreG2ep1i5n0weoy71d7%2Bk909u3qJDId04Kr%2F24Sg8Y5Ze6MdReI%2BIH3z%2F77Gk8fBA%2FYU3t%2F%2FEjS1K4pBeBGvTIdMne8JCd%2Fp9aibVEfrn5H4%2FiQHpEGTqqF4%2FfKJmfK1%2BBqCtNQpbNb5xU1WTb8T%2FS9vUkZG1qpPQMxc88QwbZuq7A9Ygo41Gc7kJzc3YUjs3g9sVxDCgzsXbHMFlIJnK4FamOPBOWZx3Uuf0bPjk5MY%2FVmd4DclFauRYONaA0MvrGPskfyPIerCiNiG4dz%2BwFpLlEiJDFoervH2O53DiL%2BCRnUuAEvt7mrg%2Bn8j4MAPcMiaWdhHFhD%2FmKGMIqoqs9JaeyzJm6NAuH9fXMM29eLpJIihCxzZiGi8jSgMkaVBtu2u7S6q8D70xHOkpu47qCa7ZNp37Ma1a5Fc3G8Mh6bla5D0pxofSy0OChkv2p7u7bLCatvJ520CyG6bwo3DpnLYes%2BtevLMDJvGRGKcUaS3qIVfDa19Y%2Bmhnb9%2BLLeK4vgKol07i2CeH%2BlVar8dhUad6ClTMN2h3sMGOqUBwhhNP6X4VNrN9RxNClmV65YXA7OeSduhSAPQHDHKk2Pu7iXwHOYfs1Ev%2FiUE9mA%2BTGZt7jnT%2Fmt33xiKLkh2GCIC1YplSwLeK47KMGacRDm44SXzLRPFwWhwQRRuZGxHdDekcOizVhBN1AHKY9ui4pFiTUtE9IjcauJdDnQ9geo5D5wSvI2h47mtPQXQS921O%2BhIJsyTWMtghaxXJ4xhtejd2tvk&X-Amz-Signature=10efef2ff37079a09421ae837bbb521b1f61cdfebc97c674c49a8a9380ff287b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MJRMSC6%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T151002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCrtcAheb6g2jZBzppMJcyL1DkXhPZ38%2BcqLaLv%2Fsit%2FwIgc9ZkGmXMMupv4gVUqINr8uSspWyMU0pmDNT3FOF6khMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDv%2FnT%2BZHVKZmeSfiSrcAxK0ZmpRxsKZXhg5zD1i1nu3IM7ic2r2EpVDgyimCrqCeKzKsxRzyiGM85otKnI4cTfdylinhZhBpUX2HR9MKtc7%2F9FZlZblreG2ep1i5n0weoy71d7%2Bk909u3qJDId04Kr%2F24Sg8Y5Ze6MdReI%2BIH3z%2F77Gk8fBA%2FYU3t%2F%2FEjS1K4pBeBGvTIdMne8JCd%2Fp9aibVEfrn5H4%2FiQHpEGTqqF4%2FfKJmfK1%2BBqCtNQpbNb5xU1WTb8T%2FS9vUkZG1qpPQMxc88QwbZuq7A9Ygo41Gc7kJzc3YUjs3g9sVxDCgzsXbHMFlIJnK4FamOPBOWZx3Uuf0bPjk5MY%2FVmd4DclFauRYONaA0MvrGPskfyPIerCiNiG4dz%2BwFpLlEiJDFoervH2O53DiL%2BCRnUuAEvt7mrg%2Bn8j4MAPcMiaWdhHFhD%2FmKGMIqoqs9JaeyzJm6NAuH9fXMM29eLpJIihCxzZiGi8jSgMkaVBtu2u7S6q8D70xHOkpu47qCa7ZNp37Ma1a5Fc3G8Mh6bla5D0pxofSy0OChkv2p7u7bLCatvJ520CyG6bwo3DpnLYes%2BtevLMDJvGRGKcUaS3qIVfDa19Y%2Bmhnb9%2BLLeK4vgKol07i2CeH%2BlVar8dhUad6ClTMN2h3sMGOqUBwhhNP6X4VNrN9RxNClmV65YXA7OeSduhSAPQHDHKk2Pu7iXwHOYfs1Ev%2FiUE9mA%2BTGZt7jnT%2Fmt33xiKLkh2GCIC1YplSwLeK47KMGacRDm44SXzLRPFwWhwQRRuZGxHdDekcOizVhBN1AHKY9ui4pFiTUtE9IjcauJdDnQ9geo5D5wSvI2h47mtPQXQS921O%2BhIJsyTWMtghaxXJ4xhtejd2tvk&X-Amz-Signature=cb268307bb03778b60636d966c6a9c282daf2c6b672b41e6da28e86ddf082586&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MJRMSC6%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T151002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCrtcAheb6g2jZBzppMJcyL1DkXhPZ38%2BcqLaLv%2Fsit%2FwIgc9ZkGmXMMupv4gVUqINr8uSspWyMU0pmDNT3FOF6khMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDv%2FnT%2BZHVKZmeSfiSrcAxK0ZmpRxsKZXhg5zD1i1nu3IM7ic2r2EpVDgyimCrqCeKzKsxRzyiGM85otKnI4cTfdylinhZhBpUX2HR9MKtc7%2F9FZlZblreG2ep1i5n0weoy71d7%2Bk909u3qJDId04Kr%2F24Sg8Y5Ze6MdReI%2BIH3z%2F77Gk8fBA%2FYU3t%2F%2FEjS1K4pBeBGvTIdMne8JCd%2Fp9aibVEfrn5H4%2FiQHpEGTqqF4%2FfKJmfK1%2BBqCtNQpbNb5xU1WTb8T%2FS9vUkZG1qpPQMxc88QwbZuq7A9Ygo41Gc7kJzc3YUjs3g9sVxDCgzsXbHMFlIJnK4FamOPBOWZx3Uuf0bPjk5MY%2FVmd4DclFauRYONaA0MvrGPskfyPIerCiNiG4dz%2BwFpLlEiJDFoervH2O53DiL%2BCRnUuAEvt7mrg%2Bn8j4MAPcMiaWdhHFhD%2FmKGMIqoqs9JaeyzJm6NAuH9fXMM29eLpJIihCxzZiGi8jSgMkaVBtu2u7S6q8D70xHOkpu47qCa7ZNp37Ma1a5Fc3G8Mh6bla5D0pxofSy0OChkv2p7u7bLCatvJ520CyG6bwo3DpnLYes%2BtevLMDJvGRGKcUaS3qIVfDa19Y%2Bmhnb9%2BLLeK4vgKol07i2CeH%2BlVar8dhUad6ClTMN2h3sMGOqUBwhhNP6X4VNrN9RxNClmV65YXA7OeSduhSAPQHDHKk2Pu7iXwHOYfs1Ev%2FiUE9mA%2BTGZt7jnT%2Fmt33xiKLkh2GCIC1YplSwLeK47KMGacRDm44SXzLRPFwWhwQRRuZGxHdDekcOizVhBN1AHKY9ui4pFiTUtE9IjcauJdDnQ9geo5D5wSvI2h47mtPQXQS921O%2BhIJsyTWMtghaxXJ4xhtejd2tvk&X-Amz-Signature=c912228305a32ed0c25f97485c239748c56db165a4199b155d8bb21dbd2c0734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MJRMSC6%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T151002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCrtcAheb6g2jZBzppMJcyL1DkXhPZ38%2BcqLaLv%2Fsit%2FwIgc9ZkGmXMMupv4gVUqINr8uSspWyMU0pmDNT3FOF6khMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDv%2FnT%2BZHVKZmeSfiSrcAxK0ZmpRxsKZXhg5zD1i1nu3IM7ic2r2EpVDgyimCrqCeKzKsxRzyiGM85otKnI4cTfdylinhZhBpUX2HR9MKtc7%2F9FZlZblreG2ep1i5n0weoy71d7%2Bk909u3qJDId04Kr%2F24Sg8Y5Ze6MdReI%2BIH3z%2F77Gk8fBA%2FYU3t%2F%2FEjS1K4pBeBGvTIdMne8JCd%2Fp9aibVEfrn5H4%2FiQHpEGTqqF4%2FfKJmfK1%2BBqCtNQpbNb5xU1WTb8T%2FS9vUkZG1qpPQMxc88QwbZuq7A9Ygo41Gc7kJzc3YUjs3g9sVxDCgzsXbHMFlIJnK4FamOPBOWZx3Uuf0bPjk5MY%2FVmd4DclFauRYONaA0MvrGPskfyPIerCiNiG4dz%2BwFpLlEiJDFoervH2O53DiL%2BCRnUuAEvt7mrg%2Bn8j4MAPcMiaWdhHFhD%2FmKGMIqoqs9JaeyzJm6NAuH9fXMM29eLpJIihCxzZiGi8jSgMkaVBtu2u7S6q8D70xHOkpu47qCa7ZNp37Ma1a5Fc3G8Mh6bla5D0pxofSy0OChkv2p7u7bLCatvJ520CyG6bwo3DpnLYes%2BtevLMDJvGRGKcUaS3qIVfDa19Y%2Bmhnb9%2BLLeK4vgKol07i2CeH%2BlVar8dhUad6ClTMN2h3sMGOqUBwhhNP6X4VNrN9RxNClmV65YXA7OeSduhSAPQHDHKk2Pu7iXwHOYfs1Ev%2FiUE9mA%2BTGZt7jnT%2Fmt33xiKLkh2GCIC1YplSwLeK47KMGacRDm44SXzLRPFwWhwQRRuZGxHdDekcOizVhBN1AHKY9ui4pFiTUtE9IjcauJdDnQ9geo5D5wSvI2h47mtPQXQS921O%2BhIJsyTWMtghaxXJ4xhtejd2tvk&X-Amz-Signature=d063b66d0ca443f95473d281457fe36e475638a0d6db410db3c200ab5ea07cc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
