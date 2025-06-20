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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466433HTSDL%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTetsHuhL7q2LzeqJtJrO%2BSBmpPXHlSg92Bk47mf1wLAiBkYxXQqND0GgjyCWsnJWuFc0zSR1TRZL4HAJTnJKbqlCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyp3tTfg%2FRh%2BZBhLnKtwDSARB3lq6IN6ZPZfMAppU7K8whEZLCIB51db8jTLXijOsyXcDY2MKmw49LXmHMplkkw3z7Anpuu1rNiN%2Brt9hPtkmcqNhmCIBy5shFjq66vsD5ZIverWYHM2O0f1IzLiZteqVvEvdzgCXZG6lvYgFXpPyVS9M7vufMYm7lS0wDbfwu2bWhI4HSLPS6VQO3l%2BqcldqF6OSxmYUW6Z4pDRv13fiWpDhT2Ij12hHp%2F23XkNhQZf9YZXISSSdtb8aO4LLlSV%2FaWM5QABmbDlYlbCzIPEGmr9OBk3DcQwhzPZKRGAeFztPY93LU8xf79khrjTg2MU8c06FTel9pGT1R%2Ffcn8gFRsbIYHk3fIx0VaNx8FmaeoEVpXZexklmia6flugNJzXiVw86ga%2FP9D2jWcKJMY4xL4TXmpr5uYwcRV9WK0sie0y%2FAmUGFCMcLH6UDw6%2BPSSSGfmuDL8XcHRu7XOxgf6Gheyzn4bB0TF3OaS1WCYb5cHzpsOv8bDv0UycKDQd9F7j8YHFFbTk2WpFeHdEVhtlSwlgm80oNHrP%2BZPMXzZFgBPgRRF%2B7%2FZgm%2FKbddSDP0SDQxebV03hWo8N%2FD2taRTfjWXrf0Nr0Beo3TjMleyV4LMs22sLB0W17RwwgbLWwgY6pgGlRpg4qB79H91UcjvBNCZV%2FXZGcHrmFgv6grwGLd4%2Ft4MiuwK1RDwC6%2BsQq3vxdsw9OPxCLfqEqw2lzdayqlipkLzvh%2BKrxeLFCYvOiJa%2BhI2pIxRgeQlxPSwI%2BU0r6auPiQCLjWdCCmw0YczukZ4TA%2Bx0rB6a9GHzQtF6nf7iiFWWko8i4XkjgUCZ0PbdGMtvvUeeNWboQdn8w%2BE8xU1ElbAiK%2FDT&X-Amz-Signature=b433901effc2f98d329b123e7ca6b0805a08fe0128ec3bdab46af3f329d45511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466433HTSDL%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTetsHuhL7q2LzeqJtJrO%2BSBmpPXHlSg92Bk47mf1wLAiBkYxXQqND0GgjyCWsnJWuFc0zSR1TRZL4HAJTnJKbqlCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyp3tTfg%2FRh%2BZBhLnKtwDSARB3lq6IN6ZPZfMAppU7K8whEZLCIB51db8jTLXijOsyXcDY2MKmw49LXmHMplkkw3z7Anpuu1rNiN%2Brt9hPtkmcqNhmCIBy5shFjq66vsD5ZIverWYHM2O0f1IzLiZteqVvEvdzgCXZG6lvYgFXpPyVS9M7vufMYm7lS0wDbfwu2bWhI4HSLPS6VQO3l%2BqcldqF6OSxmYUW6Z4pDRv13fiWpDhT2Ij12hHp%2F23XkNhQZf9YZXISSSdtb8aO4LLlSV%2FaWM5QABmbDlYlbCzIPEGmr9OBk3DcQwhzPZKRGAeFztPY93LU8xf79khrjTg2MU8c06FTel9pGT1R%2Ffcn8gFRsbIYHk3fIx0VaNx8FmaeoEVpXZexklmia6flugNJzXiVw86ga%2FP9D2jWcKJMY4xL4TXmpr5uYwcRV9WK0sie0y%2FAmUGFCMcLH6UDw6%2BPSSSGfmuDL8XcHRu7XOxgf6Gheyzn4bB0TF3OaS1WCYb5cHzpsOv8bDv0UycKDQd9F7j8YHFFbTk2WpFeHdEVhtlSwlgm80oNHrP%2BZPMXzZFgBPgRRF%2B7%2FZgm%2FKbddSDP0SDQxebV03hWo8N%2FD2taRTfjWXrf0Nr0Beo3TjMleyV4LMs22sLB0W17RwwgbLWwgY6pgGlRpg4qB79H91UcjvBNCZV%2FXZGcHrmFgv6grwGLd4%2Ft4MiuwK1RDwC6%2BsQq3vxdsw9OPxCLfqEqw2lzdayqlipkLzvh%2BKrxeLFCYvOiJa%2BhI2pIxRgeQlxPSwI%2BU0r6auPiQCLjWdCCmw0YczukZ4TA%2Bx0rB6a9GHzQtF6nf7iiFWWko8i4XkjgUCZ0PbdGMtvvUeeNWboQdn8w%2BE8xU1ElbAiK%2FDT&X-Amz-Signature=428cdeb5c8d5d5927ce2785bac61326d427040ef7d8ef501e99c7e7c8a41abf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466433HTSDL%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTetsHuhL7q2LzeqJtJrO%2BSBmpPXHlSg92Bk47mf1wLAiBkYxXQqND0GgjyCWsnJWuFc0zSR1TRZL4HAJTnJKbqlCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyp3tTfg%2FRh%2BZBhLnKtwDSARB3lq6IN6ZPZfMAppU7K8whEZLCIB51db8jTLXijOsyXcDY2MKmw49LXmHMplkkw3z7Anpuu1rNiN%2Brt9hPtkmcqNhmCIBy5shFjq66vsD5ZIverWYHM2O0f1IzLiZteqVvEvdzgCXZG6lvYgFXpPyVS9M7vufMYm7lS0wDbfwu2bWhI4HSLPS6VQO3l%2BqcldqF6OSxmYUW6Z4pDRv13fiWpDhT2Ij12hHp%2F23XkNhQZf9YZXISSSdtb8aO4LLlSV%2FaWM5QABmbDlYlbCzIPEGmr9OBk3DcQwhzPZKRGAeFztPY93LU8xf79khrjTg2MU8c06FTel9pGT1R%2Ffcn8gFRsbIYHk3fIx0VaNx8FmaeoEVpXZexklmia6flugNJzXiVw86ga%2FP9D2jWcKJMY4xL4TXmpr5uYwcRV9WK0sie0y%2FAmUGFCMcLH6UDw6%2BPSSSGfmuDL8XcHRu7XOxgf6Gheyzn4bB0TF3OaS1WCYb5cHzpsOv8bDv0UycKDQd9F7j8YHFFbTk2WpFeHdEVhtlSwlgm80oNHrP%2BZPMXzZFgBPgRRF%2B7%2FZgm%2FKbddSDP0SDQxebV03hWo8N%2FD2taRTfjWXrf0Nr0Beo3TjMleyV4LMs22sLB0W17RwwgbLWwgY6pgGlRpg4qB79H91UcjvBNCZV%2FXZGcHrmFgv6grwGLd4%2Ft4MiuwK1RDwC6%2BsQq3vxdsw9OPxCLfqEqw2lzdayqlipkLzvh%2BKrxeLFCYvOiJa%2BhI2pIxRgeQlxPSwI%2BU0r6auPiQCLjWdCCmw0YczukZ4TA%2Bx0rB6a9GHzQtF6nf7iiFWWko8i4XkjgUCZ0PbdGMtvvUeeNWboQdn8w%2BE8xU1ElbAiK%2FDT&X-Amz-Signature=4dcdc421ae22966a7f8fef36d1e9f8edb33674c7eacb925847bf798e0baba820&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466433HTSDL%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTetsHuhL7q2LzeqJtJrO%2BSBmpPXHlSg92Bk47mf1wLAiBkYxXQqND0GgjyCWsnJWuFc0zSR1TRZL4HAJTnJKbqlCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyp3tTfg%2FRh%2BZBhLnKtwDSARB3lq6IN6ZPZfMAppU7K8whEZLCIB51db8jTLXijOsyXcDY2MKmw49LXmHMplkkw3z7Anpuu1rNiN%2Brt9hPtkmcqNhmCIBy5shFjq66vsD5ZIverWYHM2O0f1IzLiZteqVvEvdzgCXZG6lvYgFXpPyVS9M7vufMYm7lS0wDbfwu2bWhI4HSLPS6VQO3l%2BqcldqF6OSxmYUW6Z4pDRv13fiWpDhT2Ij12hHp%2F23XkNhQZf9YZXISSSdtb8aO4LLlSV%2FaWM5QABmbDlYlbCzIPEGmr9OBk3DcQwhzPZKRGAeFztPY93LU8xf79khrjTg2MU8c06FTel9pGT1R%2Ffcn8gFRsbIYHk3fIx0VaNx8FmaeoEVpXZexklmia6flugNJzXiVw86ga%2FP9D2jWcKJMY4xL4TXmpr5uYwcRV9WK0sie0y%2FAmUGFCMcLH6UDw6%2BPSSSGfmuDL8XcHRu7XOxgf6Gheyzn4bB0TF3OaS1WCYb5cHzpsOv8bDv0UycKDQd9F7j8YHFFbTk2WpFeHdEVhtlSwlgm80oNHrP%2BZPMXzZFgBPgRRF%2B7%2FZgm%2FKbddSDP0SDQxebV03hWo8N%2FD2taRTfjWXrf0Nr0Beo3TjMleyV4LMs22sLB0W17RwwgbLWwgY6pgGlRpg4qB79H91UcjvBNCZV%2FXZGcHrmFgv6grwGLd4%2Ft4MiuwK1RDwC6%2BsQq3vxdsw9OPxCLfqEqw2lzdayqlipkLzvh%2BKrxeLFCYvOiJa%2BhI2pIxRgeQlxPSwI%2BU0r6auPiQCLjWdCCmw0YczukZ4TA%2Bx0rB6a9GHzQtF6nf7iiFWWko8i4XkjgUCZ0PbdGMtvvUeeNWboQdn8w%2BE8xU1ElbAiK%2FDT&X-Amz-Signature=44b3101f66c163ebb51b26f3ace9d7aa94fb6cd4f2067339d5f855a97cd28057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466433HTSDL%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTetsHuhL7q2LzeqJtJrO%2BSBmpPXHlSg92Bk47mf1wLAiBkYxXQqND0GgjyCWsnJWuFc0zSR1TRZL4HAJTnJKbqlCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyp3tTfg%2FRh%2BZBhLnKtwDSARB3lq6IN6ZPZfMAppU7K8whEZLCIB51db8jTLXijOsyXcDY2MKmw49LXmHMplkkw3z7Anpuu1rNiN%2Brt9hPtkmcqNhmCIBy5shFjq66vsD5ZIverWYHM2O0f1IzLiZteqVvEvdzgCXZG6lvYgFXpPyVS9M7vufMYm7lS0wDbfwu2bWhI4HSLPS6VQO3l%2BqcldqF6OSxmYUW6Z4pDRv13fiWpDhT2Ij12hHp%2F23XkNhQZf9YZXISSSdtb8aO4LLlSV%2FaWM5QABmbDlYlbCzIPEGmr9OBk3DcQwhzPZKRGAeFztPY93LU8xf79khrjTg2MU8c06FTel9pGT1R%2Ffcn8gFRsbIYHk3fIx0VaNx8FmaeoEVpXZexklmia6flugNJzXiVw86ga%2FP9D2jWcKJMY4xL4TXmpr5uYwcRV9WK0sie0y%2FAmUGFCMcLH6UDw6%2BPSSSGfmuDL8XcHRu7XOxgf6Gheyzn4bB0TF3OaS1WCYb5cHzpsOv8bDv0UycKDQd9F7j8YHFFbTk2WpFeHdEVhtlSwlgm80oNHrP%2BZPMXzZFgBPgRRF%2B7%2FZgm%2FKbddSDP0SDQxebV03hWo8N%2FD2taRTfjWXrf0Nr0Beo3TjMleyV4LMs22sLB0W17RwwgbLWwgY6pgGlRpg4qB79H91UcjvBNCZV%2FXZGcHrmFgv6grwGLd4%2Ft4MiuwK1RDwC6%2BsQq3vxdsw9OPxCLfqEqw2lzdayqlipkLzvh%2BKrxeLFCYvOiJa%2BhI2pIxRgeQlxPSwI%2BU0r6auPiQCLjWdCCmw0YczukZ4TA%2Bx0rB6a9GHzQtF6nf7iiFWWko8i4XkjgUCZ0PbdGMtvvUeeNWboQdn8w%2BE8xU1ElbAiK%2FDT&X-Amz-Signature=a32829ebda049a035ae8fda2334911bb24f3242fa0abb2b10af60427b3df5816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466433HTSDL%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTetsHuhL7q2LzeqJtJrO%2BSBmpPXHlSg92Bk47mf1wLAiBkYxXQqND0GgjyCWsnJWuFc0zSR1TRZL4HAJTnJKbqlCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyp3tTfg%2FRh%2BZBhLnKtwDSARB3lq6IN6ZPZfMAppU7K8whEZLCIB51db8jTLXijOsyXcDY2MKmw49LXmHMplkkw3z7Anpuu1rNiN%2Brt9hPtkmcqNhmCIBy5shFjq66vsD5ZIverWYHM2O0f1IzLiZteqVvEvdzgCXZG6lvYgFXpPyVS9M7vufMYm7lS0wDbfwu2bWhI4HSLPS6VQO3l%2BqcldqF6OSxmYUW6Z4pDRv13fiWpDhT2Ij12hHp%2F23XkNhQZf9YZXISSSdtb8aO4LLlSV%2FaWM5QABmbDlYlbCzIPEGmr9OBk3DcQwhzPZKRGAeFztPY93LU8xf79khrjTg2MU8c06FTel9pGT1R%2Ffcn8gFRsbIYHk3fIx0VaNx8FmaeoEVpXZexklmia6flugNJzXiVw86ga%2FP9D2jWcKJMY4xL4TXmpr5uYwcRV9WK0sie0y%2FAmUGFCMcLH6UDw6%2BPSSSGfmuDL8XcHRu7XOxgf6Gheyzn4bB0TF3OaS1WCYb5cHzpsOv8bDv0UycKDQd9F7j8YHFFbTk2WpFeHdEVhtlSwlgm80oNHrP%2BZPMXzZFgBPgRRF%2B7%2FZgm%2FKbddSDP0SDQxebV03hWo8N%2FD2taRTfjWXrf0Nr0Beo3TjMleyV4LMs22sLB0W17RwwgbLWwgY6pgGlRpg4qB79H91UcjvBNCZV%2FXZGcHrmFgv6grwGLd4%2Ft4MiuwK1RDwC6%2BsQq3vxdsw9OPxCLfqEqw2lzdayqlipkLzvh%2BKrxeLFCYvOiJa%2BhI2pIxRgeQlxPSwI%2BU0r6auPiQCLjWdCCmw0YczukZ4TA%2Bx0rB6a9GHzQtF6nf7iiFWWko8i4XkjgUCZ0PbdGMtvvUeeNWboQdn8w%2BE8xU1ElbAiK%2FDT&X-Amz-Signature=ab2d5414aaa476401e7d9b9ad8934d0ab740e188052adc6da68fa45fc7c7eef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466433HTSDL%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTetsHuhL7q2LzeqJtJrO%2BSBmpPXHlSg92Bk47mf1wLAiBkYxXQqND0GgjyCWsnJWuFc0zSR1TRZL4HAJTnJKbqlCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyp3tTfg%2FRh%2BZBhLnKtwDSARB3lq6IN6ZPZfMAppU7K8whEZLCIB51db8jTLXijOsyXcDY2MKmw49LXmHMplkkw3z7Anpuu1rNiN%2Brt9hPtkmcqNhmCIBy5shFjq66vsD5ZIverWYHM2O0f1IzLiZteqVvEvdzgCXZG6lvYgFXpPyVS9M7vufMYm7lS0wDbfwu2bWhI4HSLPS6VQO3l%2BqcldqF6OSxmYUW6Z4pDRv13fiWpDhT2Ij12hHp%2F23XkNhQZf9YZXISSSdtb8aO4LLlSV%2FaWM5QABmbDlYlbCzIPEGmr9OBk3DcQwhzPZKRGAeFztPY93LU8xf79khrjTg2MU8c06FTel9pGT1R%2Ffcn8gFRsbIYHk3fIx0VaNx8FmaeoEVpXZexklmia6flugNJzXiVw86ga%2FP9D2jWcKJMY4xL4TXmpr5uYwcRV9WK0sie0y%2FAmUGFCMcLH6UDw6%2BPSSSGfmuDL8XcHRu7XOxgf6Gheyzn4bB0TF3OaS1WCYb5cHzpsOv8bDv0UycKDQd9F7j8YHFFbTk2WpFeHdEVhtlSwlgm80oNHrP%2BZPMXzZFgBPgRRF%2B7%2FZgm%2FKbddSDP0SDQxebV03hWo8N%2FD2taRTfjWXrf0Nr0Beo3TjMleyV4LMs22sLB0W17RwwgbLWwgY6pgGlRpg4qB79H91UcjvBNCZV%2FXZGcHrmFgv6grwGLd4%2Ft4MiuwK1RDwC6%2BsQq3vxdsw9OPxCLfqEqw2lzdayqlipkLzvh%2BKrxeLFCYvOiJa%2BhI2pIxRgeQlxPSwI%2BU0r6auPiQCLjWdCCmw0YczukZ4TA%2Bx0rB6a9GHzQtF6nf7iiFWWko8i4XkjgUCZ0PbdGMtvvUeeNWboQdn8w%2BE8xU1ElbAiK%2FDT&X-Amz-Signature=78b7605f427a14c29420967006ac042f9d10c2930d159c145fb9c8e652b81d8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466433HTSDL%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTetsHuhL7q2LzeqJtJrO%2BSBmpPXHlSg92Bk47mf1wLAiBkYxXQqND0GgjyCWsnJWuFc0zSR1TRZL4HAJTnJKbqlCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyp3tTfg%2FRh%2BZBhLnKtwDSARB3lq6IN6ZPZfMAppU7K8whEZLCIB51db8jTLXijOsyXcDY2MKmw49LXmHMplkkw3z7Anpuu1rNiN%2Brt9hPtkmcqNhmCIBy5shFjq66vsD5ZIverWYHM2O0f1IzLiZteqVvEvdzgCXZG6lvYgFXpPyVS9M7vufMYm7lS0wDbfwu2bWhI4HSLPS6VQO3l%2BqcldqF6OSxmYUW6Z4pDRv13fiWpDhT2Ij12hHp%2F23XkNhQZf9YZXISSSdtb8aO4LLlSV%2FaWM5QABmbDlYlbCzIPEGmr9OBk3DcQwhzPZKRGAeFztPY93LU8xf79khrjTg2MU8c06FTel9pGT1R%2Ffcn8gFRsbIYHk3fIx0VaNx8FmaeoEVpXZexklmia6flugNJzXiVw86ga%2FP9D2jWcKJMY4xL4TXmpr5uYwcRV9WK0sie0y%2FAmUGFCMcLH6UDw6%2BPSSSGfmuDL8XcHRu7XOxgf6Gheyzn4bB0TF3OaS1WCYb5cHzpsOv8bDv0UycKDQd9F7j8YHFFbTk2WpFeHdEVhtlSwlgm80oNHrP%2BZPMXzZFgBPgRRF%2B7%2FZgm%2FKbddSDP0SDQxebV03hWo8N%2FD2taRTfjWXrf0Nr0Beo3TjMleyV4LMs22sLB0W17RwwgbLWwgY6pgGlRpg4qB79H91UcjvBNCZV%2FXZGcHrmFgv6grwGLd4%2Ft4MiuwK1RDwC6%2BsQq3vxdsw9OPxCLfqEqw2lzdayqlipkLzvh%2BKrxeLFCYvOiJa%2BhI2pIxRgeQlxPSwI%2BU0r6auPiQCLjWdCCmw0YczukZ4TA%2Bx0rB6a9GHzQtF6nf7iiFWWko8i4XkjgUCZ0PbdGMtvvUeeNWboQdn8w%2BE8xU1ElbAiK%2FDT&X-Amz-Signature=83056e1445e193bf02fc6cb598c1453618e6e443c6cdcf6470e04e74c5bf5994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
