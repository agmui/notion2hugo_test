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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJTANZHB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T131959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQD%2FIaV7XRjKZA50r%2FnfdnzItbB1w%2BmrbyUBSF9rFJ9nsgIgYr69rSq0N6M1%2FL1rts7cwJN2Fo6j%2F5tBE0ASjq%2F45MQq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGCrTB0ITOZmYEhZ%2FCrcA09F6aui4Py7pyjn8xl1I3ZxOeN92qn%2BPt%2Fz87Ym5HsTQlTDj1nifu5fZa%2Bf7mpCerDTiMYSBS2PGVM5xhofsU6qxq8qYB%2BhRrcjxDqLPHURSSNq9dn%2FsjTleWiYuIBdC2NyHLiAYPOxg9HbxuNE0ZP3dvx4BtiOZkmTg%2BK29UWJ9ngQSJDkcIlcynM0PnWYC4wYCCuUhxHYBTp3JRT%2BdROXNgN5bmLtR86eSC962k1vM5NDAjNPxptZiomOEJdTmiXb5Qh0X5DmJ945%2BB4kVJ5k%2Fb5p0eIB9Fbxlwqt5De7dI21AYgOl44vZxhhNr6hSwFF3ylMb8WfFPeAp3TJHwkrYEs3vvT5fdnODOxliGILJubqWTh%2FXoQccY1cpiWXD%2FkbSWR39g%2FvgOUk8nqChHXt4%2BgAnbt3tiZHX4mxvvAwJQVQ9oDvddf8tcwXcjLpMS8itrjTp9uZaOl5RTsJIETsAfc%2BgghPf5Q%2F%2FbF28PTrS2uRwmLoRT7mmv2CVymQLG5OY%2Fzp1X0x6q74o6y9uQ%2BvaKH4UFfKvYWkNPRX9AVNkPvxpf2y8gyrF9NLLAvAt%2B%2F%2Fbw%2FXOlNyaJ9DoPeefZXAZT1oU5E1w9GW3WcfEJcU%2Bl%2F%2BuUZtozH8plvDMKbLqcMGOqUBw2KI5AzAbavsJJV6bjGgIV61euktI%2FLyi5Lzdmm48OZIOZFsA3qhI5sldNVIYRgkKo51jCFQh0Q4aSYNEBDhl0nBZtuSmKMk6u3t8J9sGLH1l0EguzPO%2F7iIifI7BMwnqXjoWI%2B16mBRZsyxPW%2Bq%2FZqL1mTx%2FLBE08SCTRuwef6vI4QkX4rxpLtOo7qxrqEBC1pOP2S%2BI%2BdsKVm%2FTtX%2FwWvrmbSf&X-Amz-Signature=bff521f07c2a682a59e4b6256adf5973edba4b0261354ce3915f051c2d3383d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJTANZHB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T131959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQD%2FIaV7XRjKZA50r%2FnfdnzItbB1w%2BmrbyUBSF9rFJ9nsgIgYr69rSq0N6M1%2FL1rts7cwJN2Fo6j%2F5tBE0ASjq%2F45MQq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGCrTB0ITOZmYEhZ%2FCrcA09F6aui4Py7pyjn8xl1I3ZxOeN92qn%2BPt%2Fz87Ym5HsTQlTDj1nifu5fZa%2Bf7mpCerDTiMYSBS2PGVM5xhofsU6qxq8qYB%2BhRrcjxDqLPHURSSNq9dn%2FsjTleWiYuIBdC2NyHLiAYPOxg9HbxuNE0ZP3dvx4BtiOZkmTg%2BK29UWJ9ngQSJDkcIlcynM0PnWYC4wYCCuUhxHYBTp3JRT%2BdROXNgN5bmLtR86eSC962k1vM5NDAjNPxptZiomOEJdTmiXb5Qh0X5DmJ945%2BB4kVJ5k%2Fb5p0eIB9Fbxlwqt5De7dI21AYgOl44vZxhhNr6hSwFF3ylMb8WfFPeAp3TJHwkrYEs3vvT5fdnODOxliGILJubqWTh%2FXoQccY1cpiWXD%2FkbSWR39g%2FvgOUk8nqChHXt4%2BgAnbt3tiZHX4mxvvAwJQVQ9oDvddf8tcwXcjLpMS8itrjTp9uZaOl5RTsJIETsAfc%2BgghPf5Q%2F%2FbF28PTrS2uRwmLoRT7mmv2CVymQLG5OY%2Fzp1X0x6q74o6y9uQ%2BvaKH4UFfKvYWkNPRX9AVNkPvxpf2y8gyrF9NLLAvAt%2B%2F%2Fbw%2FXOlNyaJ9DoPeefZXAZT1oU5E1w9GW3WcfEJcU%2Bl%2F%2BuUZtozH8plvDMKbLqcMGOqUBw2KI5AzAbavsJJV6bjGgIV61euktI%2FLyi5Lzdmm48OZIOZFsA3qhI5sldNVIYRgkKo51jCFQh0Q4aSYNEBDhl0nBZtuSmKMk6u3t8J9sGLH1l0EguzPO%2F7iIifI7BMwnqXjoWI%2B16mBRZsyxPW%2Bq%2FZqL1mTx%2FLBE08SCTRuwef6vI4QkX4rxpLtOo7qxrqEBC1pOP2S%2BI%2BdsKVm%2FTtX%2FwWvrmbSf&X-Amz-Signature=604ed84fe2aab13c421261a1fca17df05ae852b5b4993a4fc628900549f33ba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJTANZHB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T131959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQD%2FIaV7XRjKZA50r%2FnfdnzItbB1w%2BmrbyUBSF9rFJ9nsgIgYr69rSq0N6M1%2FL1rts7cwJN2Fo6j%2F5tBE0ASjq%2F45MQq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGCrTB0ITOZmYEhZ%2FCrcA09F6aui4Py7pyjn8xl1I3ZxOeN92qn%2BPt%2Fz87Ym5HsTQlTDj1nifu5fZa%2Bf7mpCerDTiMYSBS2PGVM5xhofsU6qxq8qYB%2BhRrcjxDqLPHURSSNq9dn%2FsjTleWiYuIBdC2NyHLiAYPOxg9HbxuNE0ZP3dvx4BtiOZkmTg%2BK29UWJ9ngQSJDkcIlcynM0PnWYC4wYCCuUhxHYBTp3JRT%2BdROXNgN5bmLtR86eSC962k1vM5NDAjNPxptZiomOEJdTmiXb5Qh0X5DmJ945%2BB4kVJ5k%2Fb5p0eIB9Fbxlwqt5De7dI21AYgOl44vZxhhNr6hSwFF3ylMb8WfFPeAp3TJHwkrYEs3vvT5fdnODOxliGILJubqWTh%2FXoQccY1cpiWXD%2FkbSWR39g%2FvgOUk8nqChHXt4%2BgAnbt3tiZHX4mxvvAwJQVQ9oDvddf8tcwXcjLpMS8itrjTp9uZaOl5RTsJIETsAfc%2BgghPf5Q%2F%2FbF28PTrS2uRwmLoRT7mmv2CVymQLG5OY%2Fzp1X0x6q74o6y9uQ%2BvaKH4UFfKvYWkNPRX9AVNkPvxpf2y8gyrF9NLLAvAt%2B%2F%2Fbw%2FXOlNyaJ9DoPeefZXAZT1oU5E1w9GW3WcfEJcU%2Bl%2F%2BuUZtozH8plvDMKbLqcMGOqUBw2KI5AzAbavsJJV6bjGgIV61euktI%2FLyi5Lzdmm48OZIOZFsA3qhI5sldNVIYRgkKo51jCFQh0Q4aSYNEBDhl0nBZtuSmKMk6u3t8J9sGLH1l0EguzPO%2F7iIifI7BMwnqXjoWI%2B16mBRZsyxPW%2Bq%2FZqL1mTx%2FLBE08SCTRuwef6vI4QkX4rxpLtOo7qxrqEBC1pOP2S%2BI%2BdsKVm%2FTtX%2FwWvrmbSf&X-Amz-Signature=adb2e9a4dd109b337ddc3e38aa14310866bede02efc10df4720d950f8f20de1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJTANZHB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T131959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQD%2FIaV7XRjKZA50r%2FnfdnzItbB1w%2BmrbyUBSF9rFJ9nsgIgYr69rSq0N6M1%2FL1rts7cwJN2Fo6j%2F5tBE0ASjq%2F45MQq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGCrTB0ITOZmYEhZ%2FCrcA09F6aui4Py7pyjn8xl1I3ZxOeN92qn%2BPt%2Fz87Ym5HsTQlTDj1nifu5fZa%2Bf7mpCerDTiMYSBS2PGVM5xhofsU6qxq8qYB%2BhRrcjxDqLPHURSSNq9dn%2FsjTleWiYuIBdC2NyHLiAYPOxg9HbxuNE0ZP3dvx4BtiOZkmTg%2BK29UWJ9ngQSJDkcIlcynM0PnWYC4wYCCuUhxHYBTp3JRT%2BdROXNgN5bmLtR86eSC962k1vM5NDAjNPxptZiomOEJdTmiXb5Qh0X5DmJ945%2BB4kVJ5k%2Fb5p0eIB9Fbxlwqt5De7dI21AYgOl44vZxhhNr6hSwFF3ylMb8WfFPeAp3TJHwkrYEs3vvT5fdnODOxliGILJubqWTh%2FXoQccY1cpiWXD%2FkbSWR39g%2FvgOUk8nqChHXt4%2BgAnbt3tiZHX4mxvvAwJQVQ9oDvddf8tcwXcjLpMS8itrjTp9uZaOl5RTsJIETsAfc%2BgghPf5Q%2F%2FbF28PTrS2uRwmLoRT7mmv2CVymQLG5OY%2Fzp1X0x6q74o6y9uQ%2BvaKH4UFfKvYWkNPRX9AVNkPvxpf2y8gyrF9NLLAvAt%2B%2F%2Fbw%2FXOlNyaJ9DoPeefZXAZT1oU5E1w9GW3WcfEJcU%2Bl%2F%2BuUZtozH8plvDMKbLqcMGOqUBw2KI5AzAbavsJJV6bjGgIV61euktI%2FLyi5Lzdmm48OZIOZFsA3qhI5sldNVIYRgkKo51jCFQh0Q4aSYNEBDhl0nBZtuSmKMk6u3t8J9sGLH1l0EguzPO%2F7iIifI7BMwnqXjoWI%2B16mBRZsyxPW%2Bq%2FZqL1mTx%2FLBE08SCTRuwef6vI4QkX4rxpLtOo7qxrqEBC1pOP2S%2BI%2BdsKVm%2FTtX%2FwWvrmbSf&X-Amz-Signature=914b9ef19b11ca2d919de896f9f6cd75df07f2d27f39c7346b234e2f477780dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJTANZHB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T131959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQD%2FIaV7XRjKZA50r%2FnfdnzItbB1w%2BmrbyUBSF9rFJ9nsgIgYr69rSq0N6M1%2FL1rts7cwJN2Fo6j%2F5tBE0ASjq%2F45MQq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGCrTB0ITOZmYEhZ%2FCrcA09F6aui4Py7pyjn8xl1I3ZxOeN92qn%2BPt%2Fz87Ym5HsTQlTDj1nifu5fZa%2Bf7mpCerDTiMYSBS2PGVM5xhofsU6qxq8qYB%2BhRrcjxDqLPHURSSNq9dn%2FsjTleWiYuIBdC2NyHLiAYPOxg9HbxuNE0ZP3dvx4BtiOZkmTg%2BK29UWJ9ngQSJDkcIlcynM0PnWYC4wYCCuUhxHYBTp3JRT%2BdROXNgN5bmLtR86eSC962k1vM5NDAjNPxptZiomOEJdTmiXb5Qh0X5DmJ945%2BB4kVJ5k%2Fb5p0eIB9Fbxlwqt5De7dI21AYgOl44vZxhhNr6hSwFF3ylMb8WfFPeAp3TJHwkrYEs3vvT5fdnODOxliGILJubqWTh%2FXoQccY1cpiWXD%2FkbSWR39g%2FvgOUk8nqChHXt4%2BgAnbt3tiZHX4mxvvAwJQVQ9oDvddf8tcwXcjLpMS8itrjTp9uZaOl5RTsJIETsAfc%2BgghPf5Q%2F%2FbF28PTrS2uRwmLoRT7mmv2CVymQLG5OY%2Fzp1X0x6q74o6y9uQ%2BvaKH4UFfKvYWkNPRX9AVNkPvxpf2y8gyrF9NLLAvAt%2B%2F%2Fbw%2FXOlNyaJ9DoPeefZXAZT1oU5E1w9GW3WcfEJcU%2Bl%2F%2BuUZtozH8plvDMKbLqcMGOqUBw2KI5AzAbavsJJV6bjGgIV61euktI%2FLyi5Lzdmm48OZIOZFsA3qhI5sldNVIYRgkKo51jCFQh0Q4aSYNEBDhl0nBZtuSmKMk6u3t8J9sGLH1l0EguzPO%2F7iIifI7BMwnqXjoWI%2B16mBRZsyxPW%2Bq%2FZqL1mTx%2FLBE08SCTRuwef6vI4QkX4rxpLtOo7qxrqEBC1pOP2S%2BI%2BdsKVm%2FTtX%2FwWvrmbSf&X-Amz-Signature=47f57389d73591544ed67ecd047463bbf7f4a87ee4c29462d503abba56530d41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJTANZHB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T131959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQD%2FIaV7XRjKZA50r%2FnfdnzItbB1w%2BmrbyUBSF9rFJ9nsgIgYr69rSq0N6M1%2FL1rts7cwJN2Fo6j%2F5tBE0ASjq%2F45MQq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGCrTB0ITOZmYEhZ%2FCrcA09F6aui4Py7pyjn8xl1I3ZxOeN92qn%2BPt%2Fz87Ym5HsTQlTDj1nifu5fZa%2Bf7mpCerDTiMYSBS2PGVM5xhofsU6qxq8qYB%2BhRrcjxDqLPHURSSNq9dn%2FsjTleWiYuIBdC2NyHLiAYPOxg9HbxuNE0ZP3dvx4BtiOZkmTg%2BK29UWJ9ngQSJDkcIlcynM0PnWYC4wYCCuUhxHYBTp3JRT%2BdROXNgN5bmLtR86eSC962k1vM5NDAjNPxptZiomOEJdTmiXb5Qh0X5DmJ945%2BB4kVJ5k%2Fb5p0eIB9Fbxlwqt5De7dI21AYgOl44vZxhhNr6hSwFF3ylMb8WfFPeAp3TJHwkrYEs3vvT5fdnODOxliGILJubqWTh%2FXoQccY1cpiWXD%2FkbSWR39g%2FvgOUk8nqChHXt4%2BgAnbt3tiZHX4mxvvAwJQVQ9oDvddf8tcwXcjLpMS8itrjTp9uZaOl5RTsJIETsAfc%2BgghPf5Q%2F%2FbF28PTrS2uRwmLoRT7mmv2CVymQLG5OY%2Fzp1X0x6q74o6y9uQ%2BvaKH4UFfKvYWkNPRX9AVNkPvxpf2y8gyrF9NLLAvAt%2B%2F%2Fbw%2FXOlNyaJ9DoPeefZXAZT1oU5E1w9GW3WcfEJcU%2Bl%2F%2BuUZtozH8plvDMKbLqcMGOqUBw2KI5AzAbavsJJV6bjGgIV61euktI%2FLyi5Lzdmm48OZIOZFsA3qhI5sldNVIYRgkKo51jCFQh0Q4aSYNEBDhl0nBZtuSmKMk6u3t8J9sGLH1l0EguzPO%2F7iIifI7BMwnqXjoWI%2B16mBRZsyxPW%2Bq%2FZqL1mTx%2FLBE08SCTRuwef6vI4QkX4rxpLtOo7qxrqEBC1pOP2S%2BI%2BdsKVm%2FTtX%2FwWvrmbSf&X-Amz-Signature=38a5c12994c7061da2aab86f96bce6e1e13e92e622f33af045ff97344814d08f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJTANZHB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T131959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQD%2FIaV7XRjKZA50r%2FnfdnzItbB1w%2BmrbyUBSF9rFJ9nsgIgYr69rSq0N6M1%2FL1rts7cwJN2Fo6j%2F5tBE0ASjq%2F45MQq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGCrTB0ITOZmYEhZ%2FCrcA09F6aui4Py7pyjn8xl1I3ZxOeN92qn%2BPt%2Fz87Ym5HsTQlTDj1nifu5fZa%2Bf7mpCerDTiMYSBS2PGVM5xhofsU6qxq8qYB%2BhRrcjxDqLPHURSSNq9dn%2FsjTleWiYuIBdC2NyHLiAYPOxg9HbxuNE0ZP3dvx4BtiOZkmTg%2BK29UWJ9ngQSJDkcIlcynM0PnWYC4wYCCuUhxHYBTp3JRT%2BdROXNgN5bmLtR86eSC962k1vM5NDAjNPxptZiomOEJdTmiXb5Qh0X5DmJ945%2BB4kVJ5k%2Fb5p0eIB9Fbxlwqt5De7dI21AYgOl44vZxhhNr6hSwFF3ylMb8WfFPeAp3TJHwkrYEs3vvT5fdnODOxliGILJubqWTh%2FXoQccY1cpiWXD%2FkbSWR39g%2FvgOUk8nqChHXt4%2BgAnbt3tiZHX4mxvvAwJQVQ9oDvddf8tcwXcjLpMS8itrjTp9uZaOl5RTsJIETsAfc%2BgghPf5Q%2F%2FbF28PTrS2uRwmLoRT7mmv2CVymQLG5OY%2Fzp1X0x6q74o6y9uQ%2BvaKH4UFfKvYWkNPRX9AVNkPvxpf2y8gyrF9NLLAvAt%2B%2F%2Fbw%2FXOlNyaJ9DoPeefZXAZT1oU5E1w9GW3WcfEJcU%2Bl%2F%2BuUZtozH8plvDMKbLqcMGOqUBw2KI5AzAbavsJJV6bjGgIV61euktI%2FLyi5Lzdmm48OZIOZFsA3qhI5sldNVIYRgkKo51jCFQh0Q4aSYNEBDhl0nBZtuSmKMk6u3t8J9sGLH1l0EguzPO%2F7iIifI7BMwnqXjoWI%2B16mBRZsyxPW%2Bq%2FZqL1mTx%2FLBE08SCTRuwef6vI4QkX4rxpLtOo7qxrqEBC1pOP2S%2BI%2BdsKVm%2FTtX%2FwWvrmbSf&X-Amz-Signature=bdf25d43fca86273bac0bd5afee1eed058e78a2adca04ca4ed71e6d421593d60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJTANZHB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T131959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQD%2FIaV7XRjKZA50r%2FnfdnzItbB1w%2BmrbyUBSF9rFJ9nsgIgYr69rSq0N6M1%2FL1rts7cwJN2Fo6j%2F5tBE0ASjq%2F45MQq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGCrTB0ITOZmYEhZ%2FCrcA09F6aui4Py7pyjn8xl1I3ZxOeN92qn%2BPt%2Fz87Ym5HsTQlTDj1nifu5fZa%2Bf7mpCerDTiMYSBS2PGVM5xhofsU6qxq8qYB%2BhRrcjxDqLPHURSSNq9dn%2FsjTleWiYuIBdC2NyHLiAYPOxg9HbxuNE0ZP3dvx4BtiOZkmTg%2BK29UWJ9ngQSJDkcIlcynM0PnWYC4wYCCuUhxHYBTp3JRT%2BdROXNgN5bmLtR86eSC962k1vM5NDAjNPxptZiomOEJdTmiXb5Qh0X5DmJ945%2BB4kVJ5k%2Fb5p0eIB9Fbxlwqt5De7dI21AYgOl44vZxhhNr6hSwFF3ylMb8WfFPeAp3TJHwkrYEs3vvT5fdnODOxliGILJubqWTh%2FXoQccY1cpiWXD%2FkbSWR39g%2FvgOUk8nqChHXt4%2BgAnbt3tiZHX4mxvvAwJQVQ9oDvddf8tcwXcjLpMS8itrjTp9uZaOl5RTsJIETsAfc%2BgghPf5Q%2F%2FbF28PTrS2uRwmLoRT7mmv2CVymQLG5OY%2Fzp1X0x6q74o6y9uQ%2BvaKH4UFfKvYWkNPRX9AVNkPvxpf2y8gyrF9NLLAvAt%2B%2F%2Fbw%2FXOlNyaJ9DoPeefZXAZT1oU5E1w9GW3WcfEJcU%2Bl%2F%2BuUZtozH8plvDMKbLqcMGOqUBw2KI5AzAbavsJJV6bjGgIV61euktI%2FLyi5Lzdmm48OZIOZFsA3qhI5sldNVIYRgkKo51jCFQh0Q4aSYNEBDhl0nBZtuSmKMk6u3t8J9sGLH1l0EguzPO%2F7iIifI7BMwnqXjoWI%2B16mBRZsyxPW%2Bq%2FZqL1mTx%2FLBE08SCTRuwef6vI4QkX4rxpLtOo7qxrqEBC1pOP2S%2BI%2BdsKVm%2FTtX%2FwWvrmbSf&X-Amz-Signature=362754417e54367f7766fab769a663a67d51bedd288faf2cc3bb20e3ffc36cc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
