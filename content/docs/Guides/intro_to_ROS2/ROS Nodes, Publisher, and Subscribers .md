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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG4A5G6N%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFlqM%2FIVY8hKakrnRksjNGLdfbWk7ixYGvxcnfY8%2BqIAiBvExhTTSPs%2BCteZCZJoIW3hMDPiIBsPcPXGEdYXoa2uCqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaHlc2V8sBM6FFAgnKtwDCrCGH48Se0u0a3Voa9iEdKsRkVabi3Ik9xYQXU0HM7RinyowXeYTTXQXbO%2FQLODIvMLZC6pOL%2B4LCgx9emklzH%2Fo7CWkgOrmODp%2BP8zWMn3P2wgoCFm7uwX8u%2FA64p3ruw1w5BeqiAT7dk6M4cLAYGUOyglFsdoAavHvEm7DIYit0WwHuKjwLDLzYkkTAl9ybY8ykBSld5sGLOOQluCc0GkO3AMDCPnHR5e7xxUvHiNCiyMtw2C7VwEzmJ4lFF%2Bo1nUcQqK5KDlH4V7g65IqwVLD7lVkfEVrJyf944Zd1OQQ0pjYNBtS%2F52K%2Ff4ym7Bw%2Bfr52cBYviEF%2B%2FG0%2Bggx38Os2AlSTp6U0Lo7vcp0UkgtkIYBB7l%2FsD76Ht4R5vAhRQGrgx215wXkZyqaySFM8TQtR%2F%2Bpk56v3VFEcia63swOx%2BC3Z%2Bx2O2MdAkwqgqqPF1UaEcQ5lNDtfIIW2DQkEDcW2EZoN90fkT5OwDBlyflYHWOk0BAVhLDeQMw1dWqoIaeNCpfp15Zt1%2BFXXUMXeqFx9rvo9W2xT0QXENY5p4%2BAgpf8E7sq0i51QjGfPX6nC1Kg%2FdCh2Cr5TIYFmfDqPvxjMXFNIrP8bTayX4JMbBV%2F6Gg5oEE0IJkkkhcwyLLewQY6pgE5sesE9DP5AgnDpva2RozomQzVq5puOC4rYmS%2FHiYmMFepY18E1SvW7Uf0g06XdNR7z0k5QPGbPdxvJluKOq3iugnvvBaaAxD3ThRUzLDaH6kgASTH3%2F93B58Z%2FlAopNk%2Bi1oIxyhP%2B2C1vWRpIEp%2B4vnayXxVYR54yzHRqasfkD%2FmxDo5gIRE%2B88wY%2FpY0viM4o5RBn0gMdTX2qXs5Ckt4qKQBeKN&X-Amz-Signature=10f139ae60a827a93f549875446f9dc08c07b75cd07a5dcc9e26276aabb0a545&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG4A5G6N%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFlqM%2FIVY8hKakrnRksjNGLdfbWk7ixYGvxcnfY8%2BqIAiBvExhTTSPs%2BCteZCZJoIW3hMDPiIBsPcPXGEdYXoa2uCqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaHlc2V8sBM6FFAgnKtwDCrCGH48Se0u0a3Voa9iEdKsRkVabi3Ik9xYQXU0HM7RinyowXeYTTXQXbO%2FQLODIvMLZC6pOL%2B4LCgx9emklzH%2Fo7CWkgOrmODp%2BP8zWMn3P2wgoCFm7uwX8u%2FA64p3ruw1w5BeqiAT7dk6M4cLAYGUOyglFsdoAavHvEm7DIYit0WwHuKjwLDLzYkkTAl9ybY8ykBSld5sGLOOQluCc0GkO3AMDCPnHR5e7xxUvHiNCiyMtw2C7VwEzmJ4lFF%2Bo1nUcQqK5KDlH4V7g65IqwVLD7lVkfEVrJyf944Zd1OQQ0pjYNBtS%2F52K%2Ff4ym7Bw%2Bfr52cBYviEF%2B%2FG0%2Bggx38Os2AlSTp6U0Lo7vcp0UkgtkIYBB7l%2FsD76Ht4R5vAhRQGrgx215wXkZyqaySFM8TQtR%2F%2Bpk56v3VFEcia63swOx%2BC3Z%2Bx2O2MdAkwqgqqPF1UaEcQ5lNDtfIIW2DQkEDcW2EZoN90fkT5OwDBlyflYHWOk0BAVhLDeQMw1dWqoIaeNCpfp15Zt1%2BFXXUMXeqFx9rvo9W2xT0QXENY5p4%2BAgpf8E7sq0i51QjGfPX6nC1Kg%2FdCh2Cr5TIYFmfDqPvxjMXFNIrP8bTayX4JMbBV%2F6Gg5oEE0IJkkkhcwyLLewQY6pgE5sesE9DP5AgnDpva2RozomQzVq5puOC4rYmS%2FHiYmMFepY18E1SvW7Uf0g06XdNR7z0k5QPGbPdxvJluKOq3iugnvvBaaAxD3ThRUzLDaH6kgASTH3%2F93B58Z%2FlAopNk%2Bi1oIxyhP%2B2C1vWRpIEp%2B4vnayXxVYR54yzHRqasfkD%2FmxDo5gIRE%2B88wY%2FpY0viM4o5RBn0gMdTX2qXs5Ckt4qKQBeKN&X-Amz-Signature=f746584e2a6424d7090ffe6e2fbd27b08594dd192cc23ee982b34afcbeb3e966&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG4A5G6N%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFlqM%2FIVY8hKakrnRksjNGLdfbWk7ixYGvxcnfY8%2BqIAiBvExhTTSPs%2BCteZCZJoIW3hMDPiIBsPcPXGEdYXoa2uCqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaHlc2V8sBM6FFAgnKtwDCrCGH48Se0u0a3Voa9iEdKsRkVabi3Ik9xYQXU0HM7RinyowXeYTTXQXbO%2FQLODIvMLZC6pOL%2B4LCgx9emklzH%2Fo7CWkgOrmODp%2BP8zWMn3P2wgoCFm7uwX8u%2FA64p3ruw1w5BeqiAT7dk6M4cLAYGUOyglFsdoAavHvEm7DIYit0WwHuKjwLDLzYkkTAl9ybY8ykBSld5sGLOOQluCc0GkO3AMDCPnHR5e7xxUvHiNCiyMtw2C7VwEzmJ4lFF%2Bo1nUcQqK5KDlH4V7g65IqwVLD7lVkfEVrJyf944Zd1OQQ0pjYNBtS%2F52K%2Ff4ym7Bw%2Bfr52cBYviEF%2B%2FG0%2Bggx38Os2AlSTp6U0Lo7vcp0UkgtkIYBB7l%2FsD76Ht4R5vAhRQGrgx215wXkZyqaySFM8TQtR%2F%2Bpk56v3VFEcia63swOx%2BC3Z%2Bx2O2MdAkwqgqqPF1UaEcQ5lNDtfIIW2DQkEDcW2EZoN90fkT5OwDBlyflYHWOk0BAVhLDeQMw1dWqoIaeNCpfp15Zt1%2BFXXUMXeqFx9rvo9W2xT0QXENY5p4%2BAgpf8E7sq0i51QjGfPX6nC1Kg%2FdCh2Cr5TIYFmfDqPvxjMXFNIrP8bTayX4JMbBV%2F6Gg5oEE0IJkkkhcwyLLewQY6pgE5sesE9DP5AgnDpva2RozomQzVq5puOC4rYmS%2FHiYmMFepY18E1SvW7Uf0g06XdNR7z0k5QPGbPdxvJluKOq3iugnvvBaaAxD3ThRUzLDaH6kgASTH3%2F93B58Z%2FlAopNk%2Bi1oIxyhP%2B2C1vWRpIEp%2B4vnayXxVYR54yzHRqasfkD%2FmxDo5gIRE%2B88wY%2FpY0viM4o5RBn0gMdTX2qXs5Ckt4qKQBeKN&X-Amz-Signature=fecb4b2e7ec5228b82373bb5b2f1b4b7da69a5bcb14762b826504ad01575b7e2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG4A5G6N%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFlqM%2FIVY8hKakrnRksjNGLdfbWk7ixYGvxcnfY8%2BqIAiBvExhTTSPs%2BCteZCZJoIW3hMDPiIBsPcPXGEdYXoa2uCqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaHlc2V8sBM6FFAgnKtwDCrCGH48Se0u0a3Voa9iEdKsRkVabi3Ik9xYQXU0HM7RinyowXeYTTXQXbO%2FQLODIvMLZC6pOL%2B4LCgx9emklzH%2Fo7CWkgOrmODp%2BP8zWMn3P2wgoCFm7uwX8u%2FA64p3ruw1w5BeqiAT7dk6M4cLAYGUOyglFsdoAavHvEm7DIYit0WwHuKjwLDLzYkkTAl9ybY8ykBSld5sGLOOQluCc0GkO3AMDCPnHR5e7xxUvHiNCiyMtw2C7VwEzmJ4lFF%2Bo1nUcQqK5KDlH4V7g65IqwVLD7lVkfEVrJyf944Zd1OQQ0pjYNBtS%2F52K%2Ff4ym7Bw%2Bfr52cBYviEF%2B%2FG0%2Bggx38Os2AlSTp6U0Lo7vcp0UkgtkIYBB7l%2FsD76Ht4R5vAhRQGrgx215wXkZyqaySFM8TQtR%2F%2Bpk56v3VFEcia63swOx%2BC3Z%2Bx2O2MdAkwqgqqPF1UaEcQ5lNDtfIIW2DQkEDcW2EZoN90fkT5OwDBlyflYHWOk0BAVhLDeQMw1dWqoIaeNCpfp15Zt1%2BFXXUMXeqFx9rvo9W2xT0QXENY5p4%2BAgpf8E7sq0i51QjGfPX6nC1Kg%2FdCh2Cr5TIYFmfDqPvxjMXFNIrP8bTayX4JMbBV%2F6Gg5oEE0IJkkkhcwyLLewQY6pgE5sesE9DP5AgnDpva2RozomQzVq5puOC4rYmS%2FHiYmMFepY18E1SvW7Uf0g06XdNR7z0k5QPGbPdxvJluKOq3iugnvvBaaAxD3ThRUzLDaH6kgASTH3%2F93B58Z%2FlAopNk%2Bi1oIxyhP%2B2C1vWRpIEp%2B4vnayXxVYR54yzHRqasfkD%2FmxDo5gIRE%2B88wY%2FpY0viM4o5RBn0gMdTX2qXs5Ckt4qKQBeKN&X-Amz-Signature=1e6d9f3a5c6f1604a893ead5e28b47b0da3f3a1c68615f34bcf8a8d2510ccb1a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG4A5G6N%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFlqM%2FIVY8hKakrnRksjNGLdfbWk7ixYGvxcnfY8%2BqIAiBvExhTTSPs%2BCteZCZJoIW3hMDPiIBsPcPXGEdYXoa2uCqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaHlc2V8sBM6FFAgnKtwDCrCGH48Se0u0a3Voa9iEdKsRkVabi3Ik9xYQXU0HM7RinyowXeYTTXQXbO%2FQLODIvMLZC6pOL%2B4LCgx9emklzH%2Fo7CWkgOrmODp%2BP8zWMn3P2wgoCFm7uwX8u%2FA64p3ruw1w5BeqiAT7dk6M4cLAYGUOyglFsdoAavHvEm7DIYit0WwHuKjwLDLzYkkTAl9ybY8ykBSld5sGLOOQluCc0GkO3AMDCPnHR5e7xxUvHiNCiyMtw2C7VwEzmJ4lFF%2Bo1nUcQqK5KDlH4V7g65IqwVLD7lVkfEVrJyf944Zd1OQQ0pjYNBtS%2F52K%2Ff4ym7Bw%2Bfr52cBYviEF%2B%2FG0%2Bggx38Os2AlSTp6U0Lo7vcp0UkgtkIYBB7l%2FsD76Ht4R5vAhRQGrgx215wXkZyqaySFM8TQtR%2F%2Bpk56v3VFEcia63swOx%2BC3Z%2Bx2O2MdAkwqgqqPF1UaEcQ5lNDtfIIW2DQkEDcW2EZoN90fkT5OwDBlyflYHWOk0BAVhLDeQMw1dWqoIaeNCpfp15Zt1%2BFXXUMXeqFx9rvo9W2xT0QXENY5p4%2BAgpf8E7sq0i51QjGfPX6nC1Kg%2FdCh2Cr5TIYFmfDqPvxjMXFNIrP8bTayX4JMbBV%2F6Gg5oEE0IJkkkhcwyLLewQY6pgE5sesE9DP5AgnDpva2RozomQzVq5puOC4rYmS%2FHiYmMFepY18E1SvW7Uf0g06XdNR7z0k5QPGbPdxvJluKOq3iugnvvBaaAxD3ThRUzLDaH6kgASTH3%2F93B58Z%2FlAopNk%2Bi1oIxyhP%2B2C1vWRpIEp%2B4vnayXxVYR54yzHRqasfkD%2FmxDo5gIRE%2B88wY%2FpY0viM4o5RBn0gMdTX2qXs5Ckt4qKQBeKN&X-Amz-Signature=44ee86b2700113e969c7845a85a1f6714ccb1cd715c0f63d2be0a3e081212699&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG4A5G6N%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFlqM%2FIVY8hKakrnRksjNGLdfbWk7ixYGvxcnfY8%2BqIAiBvExhTTSPs%2BCteZCZJoIW3hMDPiIBsPcPXGEdYXoa2uCqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaHlc2V8sBM6FFAgnKtwDCrCGH48Se0u0a3Voa9iEdKsRkVabi3Ik9xYQXU0HM7RinyowXeYTTXQXbO%2FQLODIvMLZC6pOL%2B4LCgx9emklzH%2Fo7CWkgOrmODp%2BP8zWMn3P2wgoCFm7uwX8u%2FA64p3ruw1w5BeqiAT7dk6M4cLAYGUOyglFsdoAavHvEm7DIYit0WwHuKjwLDLzYkkTAl9ybY8ykBSld5sGLOOQluCc0GkO3AMDCPnHR5e7xxUvHiNCiyMtw2C7VwEzmJ4lFF%2Bo1nUcQqK5KDlH4V7g65IqwVLD7lVkfEVrJyf944Zd1OQQ0pjYNBtS%2F52K%2Ff4ym7Bw%2Bfr52cBYviEF%2B%2FG0%2Bggx38Os2AlSTp6U0Lo7vcp0UkgtkIYBB7l%2FsD76Ht4R5vAhRQGrgx215wXkZyqaySFM8TQtR%2F%2Bpk56v3VFEcia63swOx%2BC3Z%2Bx2O2MdAkwqgqqPF1UaEcQ5lNDtfIIW2DQkEDcW2EZoN90fkT5OwDBlyflYHWOk0BAVhLDeQMw1dWqoIaeNCpfp15Zt1%2BFXXUMXeqFx9rvo9W2xT0QXENY5p4%2BAgpf8E7sq0i51QjGfPX6nC1Kg%2FdCh2Cr5TIYFmfDqPvxjMXFNIrP8bTayX4JMbBV%2F6Gg5oEE0IJkkkhcwyLLewQY6pgE5sesE9DP5AgnDpva2RozomQzVq5puOC4rYmS%2FHiYmMFepY18E1SvW7Uf0g06XdNR7z0k5QPGbPdxvJluKOq3iugnvvBaaAxD3ThRUzLDaH6kgASTH3%2F93B58Z%2FlAopNk%2Bi1oIxyhP%2B2C1vWRpIEp%2B4vnayXxVYR54yzHRqasfkD%2FmxDo5gIRE%2B88wY%2FpY0viM4o5RBn0gMdTX2qXs5Ckt4qKQBeKN&X-Amz-Signature=f4edc71162cd95d1c78b4201d654b17f4d312ba380d856e389390892e0342264&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG4A5G6N%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFlqM%2FIVY8hKakrnRksjNGLdfbWk7ixYGvxcnfY8%2BqIAiBvExhTTSPs%2BCteZCZJoIW3hMDPiIBsPcPXGEdYXoa2uCqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaHlc2V8sBM6FFAgnKtwDCrCGH48Se0u0a3Voa9iEdKsRkVabi3Ik9xYQXU0HM7RinyowXeYTTXQXbO%2FQLODIvMLZC6pOL%2B4LCgx9emklzH%2Fo7CWkgOrmODp%2BP8zWMn3P2wgoCFm7uwX8u%2FA64p3ruw1w5BeqiAT7dk6M4cLAYGUOyglFsdoAavHvEm7DIYit0WwHuKjwLDLzYkkTAl9ybY8ykBSld5sGLOOQluCc0GkO3AMDCPnHR5e7xxUvHiNCiyMtw2C7VwEzmJ4lFF%2Bo1nUcQqK5KDlH4V7g65IqwVLD7lVkfEVrJyf944Zd1OQQ0pjYNBtS%2F52K%2Ff4ym7Bw%2Bfr52cBYviEF%2B%2FG0%2Bggx38Os2AlSTp6U0Lo7vcp0UkgtkIYBB7l%2FsD76Ht4R5vAhRQGrgx215wXkZyqaySFM8TQtR%2F%2Bpk56v3VFEcia63swOx%2BC3Z%2Bx2O2MdAkwqgqqPF1UaEcQ5lNDtfIIW2DQkEDcW2EZoN90fkT5OwDBlyflYHWOk0BAVhLDeQMw1dWqoIaeNCpfp15Zt1%2BFXXUMXeqFx9rvo9W2xT0QXENY5p4%2BAgpf8E7sq0i51QjGfPX6nC1Kg%2FdCh2Cr5TIYFmfDqPvxjMXFNIrP8bTayX4JMbBV%2F6Gg5oEE0IJkkkhcwyLLewQY6pgE5sesE9DP5AgnDpva2RozomQzVq5puOC4rYmS%2FHiYmMFepY18E1SvW7Uf0g06XdNR7z0k5QPGbPdxvJluKOq3iugnvvBaaAxD3ThRUzLDaH6kgASTH3%2F93B58Z%2FlAopNk%2Bi1oIxyhP%2B2C1vWRpIEp%2B4vnayXxVYR54yzHRqasfkD%2FmxDo5gIRE%2B88wY%2FpY0viM4o5RBn0gMdTX2qXs5Ckt4qKQBeKN&X-Amz-Signature=52b9d05319cbe7454d7e4d66299540724906422ff16c76117de22bd520bdf956&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG4A5G6N%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFlqM%2FIVY8hKakrnRksjNGLdfbWk7ixYGvxcnfY8%2BqIAiBvExhTTSPs%2BCteZCZJoIW3hMDPiIBsPcPXGEdYXoa2uCqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaHlc2V8sBM6FFAgnKtwDCrCGH48Se0u0a3Voa9iEdKsRkVabi3Ik9xYQXU0HM7RinyowXeYTTXQXbO%2FQLODIvMLZC6pOL%2B4LCgx9emklzH%2Fo7CWkgOrmODp%2BP8zWMn3P2wgoCFm7uwX8u%2FA64p3ruw1w5BeqiAT7dk6M4cLAYGUOyglFsdoAavHvEm7DIYit0WwHuKjwLDLzYkkTAl9ybY8ykBSld5sGLOOQluCc0GkO3AMDCPnHR5e7xxUvHiNCiyMtw2C7VwEzmJ4lFF%2Bo1nUcQqK5KDlH4V7g65IqwVLD7lVkfEVrJyf944Zd1OQQ0pjYNBtS%2F52K%2Ff4ym7Bw%2Bfr52cBYviEF%2B%2FG0%2Bggx38Os2AlSTp6U0Lo7vcp0UkgtkIYBB7l%2FsD76Ht4R5vAhRQGrgx215wXkZyqaySFM8TQtR%2F%2Bpk56v3VFEcia63swOx%2BC3Z%2Bx2O2MdAkwqgqqPF1UaEcQ5lNDtfIIW2DQkEDcW2EZoN90fkT5OwDBlyflYHWOk0BAVhLDeQMw1dWqoIaeNCpfp15Zt1%2BFXXUMXeqFx9rvo9W2xT0QXENY5p4%2BAgpf8E7sq0i51QjGfPX6nC1Kg%2FdCh2Cr5TIYFmfDqPvxjMXFNIrP8bTayX4JMbBV%2F6Gg5oEE0IJkkkhcwyLLewQY6pgE5sesE9DP5AgnDpva2RozomQzVq5puOC4rYmS%2FHiYmMFepY18E1SvW7Uf0g06XdNR7z0k5QPGbPdxvJluKOq3iugnvvBaaAxD3ThRUzLDaH6kgASTH3%2F93B58Z%2FlAopNk%2Bi1oIxyhP%2B2C1vWRpIEp%2B4vnayXxVYR54yzHRqasfkD%2FmxDo5gIRE%2B88wY%2FpY0viM4o5RBn0gMdTX2qXs5Ckt4qKQBeKN&X-Amz-Signature=73d63156377b4439bb4e496845717c95c286e619b052af263ac13813bd4d7491&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
