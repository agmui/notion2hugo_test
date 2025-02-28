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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQEOQKAB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIEa4w1RhdQd%2BJ5CKeUww9peGVL3jv%2BV3QogSnMSw5LXJAiEAiW8uhwN9uxTF2wfiV%2B2MMkmMzZZ4f5zmQwEBO0qus%2BsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQslXsuheDEeVtRcyrcA7e0Vno7H69t%2Bw8Vs4NVQT7cs3OauWVE8ficGUdaxa2VlBhjjbRbqwbWasX3EALsWKUMVwEkYq7RZop25lB00mVk%2BUHE9RwGRhePllq0%2F%2BQ59uMUtTY98tDinH2BOCk0UMPcKKiszF20oCJJoYEt%2FKgjb2VkGLpMU6SCyRqRZpOizO%2FYyxdsO0CjBvuzjmQkTh0CuUlcf2QwgHyFOIlq1ozrR1jwb1McsFmi5lJLe%2BLiIolQGz3sUJMQswy2p3Q0MoMqwZW2FPBemfGKcuBLQKaDjdiHrx4cvte1fqg871xkqZhY0nemycqPzE44YAkmVPKHyPg7xTGee%2BX%2BVaZczqVgK9HINU4smGwKwYIMeblolgH6W9T5pgKPcVJmqcV16t9POXhY8Jv29W1Y0njZP9bxJjtaGYF7p7M98H%2F%2BDoBXb1VWEzYuwBfFohzXuVyxv%2BNuVxZwNOFHVvdCS2YS74QM8MNWVbsCLZNUlOA6fgZDl65Xfk19rATyJ4BvGLHuu7YvffrEbbx9IsrVC%2FjL5KhT0lSjdaHzpZ0LjM7UW%2FuqKpIwcUngUubq7F6aft4hTAhHiIaOAUCwKdgo%2BpVAIgDmL%2FEPbDMCS9Azgsiea1sTbI%2F%2BbigyFTDjgfv8MPeLiL4GOqUBcm9cOAhylmeKH3CMSOSdxcs4MrKv2VfYNYzk4PXhtbvOBjJJli76NfWlm%2Bx%2FeBKrS2r638CkzcMb7VXVpGxeybvpegHm3PkxavthL0PKZsu3g%2Fj5SRhjx%2Fc29%2BYnzrMvuCdAJ1p%2BN3EgMQvS91aJo5GohxFoFABgrnqnicvPtazcEI%2BuXapYKChJYgKqNthdzBkrmo%2FvZiRJvFUy43dB8JHw5NdR&X-Amz-Signature=9e970951b872cff4e375d65d4ab571967e1741e024e4ab3e023d4df7e8b01bbb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQEOQKAB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIEa4w1RhdQd%2BJ5CKeUww9peGVL3jv%2BV3QogSnMSw5LXJAiEAiW8uhwN9uxTF2wfiV%2B2MMkmMzZZ4f5zmQwEBO0qus%2BsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQslXsuheDEeVtRcyrcA7e0Vno7H69t%2Bw8Vs4NVQT7cs3OauWVE8ficGUdaxa2VlBhjjbRbqwbWasX3EALsWKUMVwEkYq7RZop25lB00mVk%2BUHE9RwGRhePllq0%2F%2BQ59uMUtTY98tDinH2BOCk0UMPcKKiszF20oCJJoYEt%2FKgjb2VkGLpMU6SCyRqRZpOizO%2FYyxdsO0CjBvuzjmQkTh0CuUlcf2QwgHyFOIlq1ozrR1jwb1McsFmi5lJLe%2BLiIolQGz3sUJMQswy2p3Q0MoMqwZW2FPBemfGKcuBLQKaDjdiHrx4cvte1fqg871xkqZhY0nemycqPzE44YAkmVPKHyPg7xTGee%2BX%2BVaZczqVgK9HINU4smGwKwYIMeblolgH6W9T5pgKPcVJmqcV16t9POXhY8Jv29W1Y0njZP9bxJjtaGYF7p7M98H%2F%2BDoBXb1VWEzYuwBfFohzXuVyxv%2BNuVxZwNOFHVvdCS2YS74QM8MNWVbsCLZNUlOA6fgZDl65Xfk19rATyJ4BvGLHuu7YvffrEbbx9IsrVC%2FjL5KhT0lSjdaHzpZ0LjM7UW%2FuqKpIwcUngUubq7F6aft4hTAhHiIaOAUCwKdgo%2BpVAIgDmL%2FEPbDMCS9Azgsiea1sTbI%2F%2BbigyFTDjgfv8MPeLiL4GOqUBcm9cOAhylmeKH3CMSOSdxcs4MrKv2VfYNYzk4PXhtbvOBjJJli76NfWlm%2Bx%2FeBKrS2r638CkzcMb7VXVpGxeybvpegHm3PkxavthL0PKZsu3g%2Fj5SRhjx%2Fc29%2BYnzrMvuCdAJ1p%2BN3EgMQvS91aJo5GohxFoFABgrnqnicvPtazcEI%2BuXapYKChJYgKqNthdzBkrmo%2FvZiRJvFUy43dB8JHw5NdR&X-Amz-Signature=59e5c8350f4a257db3fec2bfdd328a23538e12d018415830da1394ea28b9657f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQEOQKAB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIEa4w1RhdQd%2BJ5CKeUww9peGVL3jv%2BV3QogSnMSw5LXJAiEAiW8uhwN9uxTF2wfiV%2B2MMkmMzZZ4f5zmQwEBO0qus%2BsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQslXsuheDEeVtRcyrcA7e0Vno7H69t%2Bw8Vs4NVQT7cs3OauWVE8ficGUdaxa2VlBhjjbRbqwbWasX3EALsWKUMVwEkYq7RZop25lB00mVk%2BUHE9RwGRhePllq0%2F%2BQ59uMUtTY98tDinH2BOCk0UMPcKKiszF20oCJJoYEt%2FKgjb2VkGLpMU6SCyRqRZpOizO%2FYyxdsO0CjBvuzjmQkTh0CuUlcf2QwgHyFOIlq1ozrR1jwb1McsFmi5lJLe%2BLiIolQGz3sUJMQswy2p3Q0MoMqwZW2FPBemfGKcuBLQKaDjdiHrx4cvte1fqg871xkqZhY0nemycqPzE44YAkmVPKHyPg7xTGee%2BX%2BVaZczqVgK9HINU4smGwKwYIMeblolgH6W9T5pgKPcVJmqcV16t9POXhY8Jv29W1Y0njZP9bxJjtaGYF7p7M98H%2F%2BDoBXb1VWEzYuwBfFohzXuVyxv%2BNuVxZwNOFHVvdCS2YS74QM8MNWVbsCLZNUlOA6fgZDl65Xfk19rATyJ4BvGLHuu7YvffrEbbx9IsrVC%2FjL5KhT0lSjdaHzpZ0LjM7UW%2FuqKpIwcUngUubq7F6aft4hTAhHiIaOAUCwKdgo%2BpVAIgDmL%2FEPbDMCS9Azgsiea1sTbI%2F%2BbigyFTDjgfv8MPeLiL4GOqUBcm9cOAhylmeKH3CMSOSdxcs4MrKv2VfYNYzk4PXhtbvOBjJJli76NfWlm%2Bx%2FeBKrS2r638CkzcMb7VXVpGxeybvpegHm3PkxavthL0PKZsu3g%2Fj5SRhjx%2Fc29%2BYnzrMvuCdAJ1p%2BN3EgMQvS91aJo5GohxFoFABgrnqnicvPtazcEI%2BuXapYKChJYgKqNthdzBkrmo%2FvZiRJvFUy43dB8JHw5NdR&X-Amz-Signature=fea90b87f8db4958e0180971bc4ecb015cb400bde605ec154db3d8c52a577456&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQEOQKAB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIEa4w1RhdQd%2BJ5CKeUww9peGVL3jv%2BV3QogSnMSw5LXJAiEAiW8uhwN9uxTF2wfiV%2B2MMkmMzZZ4f5zmQwEBO0qus%2BsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQslXsuheDEeVtRcyrcA7e0Vno7H69t%2Bw8Vs4NVQT7cs3OauWVE8ficGUdaxa2VlBhjjbRbqwbWasX3EALsWKUMVwEkYq7RZop25lB00mVk%2BUHE9RwGRhePllq0%2F%2BQ59uMUtTY98tDinH2BOCk0UMPcKKiszF20oCJJoYEt%2FKgjb2VkGLpMU6SCyRqRZpOizO%2FYyxdsO0CjBvuzjmQkTh0CuUlcf2QwgHyFOIlq1ozrR1jwb1McsFmi5lJLe%2BLiIolQGz3sUJMQswy2p3Q0MoMqwZW2FPBemfGKcuBLQKaDjdiHrx4cvte1fqg871xkqZhY0nemycqPzE44YAkmVPKHyPg7xTGee%2BX%2BVaZczqVgK9HINU4smGwKwYIMeblolgH6W9T5pgKPcVJmqcV16t9POXhY8Jv29W1Y0njZP9bxJjtaGYF7p7M98H%2F%2BDoBXb1VWEzYuwBfFohzXuVyxv%2BNuVxZwNOFHVvdCS2YS74QM8MNWVbsCLZNUlOA6fgZDl65Xfk19rATyJ4BvGLHuu7YvffrEbbx9IsrVC%2FjL5KhT0lSjdaHzpZ0LjM7UW%2FuqKpIwcUngUubq7F6aft4hTAhHiIaOAUCwKdgo%2BpVAIgDmL%2FEPbDMCS9Azgsiea1sTbI%2F%2BbigyFTDjgfv8MPeLiL4GOqUBcm9cOAhylmeKH3CMSOSdxcs4MrKv2VfYNYzk4PXhtbvOBjJJli76NfWlm%2Bx%2FeBKrS2r638CkzcMb7VXVpGxeybvpegHm3PkxavthL0PKZsu3g%2Fj5SRhjx%2Fc29%2BYnzrMvuCdAJ1p%2BN3EgMQvS91aJo5GohxFoFABgrnqnicvPtazcEI%2BuXapYKChJYgKqNthdzBkrmo%2FvZiRJvFUy43dB8JHw5NdR&X-Amz-Signature=992ce0b6500c10fd4e01e9181e80b5fbb2bbea2a3e80154c4ce0302607535d44&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQEOQKAB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIEa4w1RhdQd%2BJ5CKeUww9peGVL3jv%2BV3QogSnMSw5LXJAiEAiW8uhwN9uxTF2wfiV%2B2MMkmMzZZ4f5zmQwEBO0qus%2BsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQslXsuheDEeVtRcyrcA7e0Vno7H69t%2Bw8Vs4NVQT7cs3OauWVE8ficGUdaxa2VlBhjjbRbqwbWasX3EALsWKUMVwEkYq7RZop25lB00mVk%2BUHE9RwGRhePllq0%2F%2BQ59uMUtTY98tDinH2BOCk0UMPcKKiszF20oCJJoYEt%2FKgjb2VkGLpMU6SCyRqRZpOizO%2FYyxdsO0CjBvuzjmQkTh0CuUlcf2QwgHyFOIlq1ozrR1jwb1McsFmi5lJLe%2BLiIolQGz3sUJMQswy2p3Q0MoMqwZW2FPBemfGKcuBLQKaDjdiHrx4cvte1fqg871xkqZhY0nemycqPzE44YAkmVPKHyPg7xTGee%2BX%2BVaZczqVgK9HINU4smGwKwYIMeblolgH6W9T5pgKPcVJmqcV16t9POXhY8Jv29W1Y0njZP9bxJjtaGYF7p7M98H%2F%2BDoBXb1VWEzYuwBfFohzXuVyxv%2BNuVxZwNOFHVvdCS2YS74QM8MNWVbsCLZNUlOA6fgZDl65Xfk19rATyJ4BvGLHuu7YvffrEbbx9IsrVC%2FjL5KhT0lSjdaHzpZ0LjM7UW%2FuqKpIwcUngUubq7F6aft4hTAhHiIaOAUCwKdgo%2BpVAIgDmL%2FEPbDMCS9Azgsiea1sTbI%2F%2BbigyFTDjgfv8MPeLiL4GOqUBcm9cOAhylmeKH3CMSOSdxcs4MrKv2VfYNYzk4PXhtbvOBjJJli76NfWlm%2Bx%2FeBKrS2r638CkzcMb7VXVpGxeybvpegHm3PkxavthL0PKZsu3g%2Fj5SRhjx%2Fc29%2BYnzrMvuCdAJ1p%2BN3EgMQvS91aJo5GohxFoFABgrnqnicvPtazcEI%2BuXapYKChJYgKqNthdzBkrmo%2FvZiRJvFUy43dB8JHw5NdR&X-Amz-Signature=dec309a976ae8f148e27415a1c61c3ad7efded578be28c8ba7593e024a651a78&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQEOQKAB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIEa4w1RhdQd%2BJ5CKeUww9peGVL3jv%2BV3QogSnMSw5LXJAiEAiW8uhwN9uxTF2wfiV%2B2MMkmMzZZ4f5zmQwEBO0qus%2BsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQslXsuheDEeVtRcyrcA7e0Vno7H69t%2Bw8Vs4NVQT7cs3OauWVE8ficGUdaxa2VlBhjjbRbqwbWasX3EALsWKUMVwEkYq7RZop25lB00mVk%2BUHE9RwGRhePllq0%2F%2BQ59uMUtTY98tDinH2BOCk0UMPcKKiszF20oCJJoYEt%2FKgjb2VkGLpMU6SCyRqRZpOizO%2FYyxdsO0CjBvuzjmQkTh0CuUlcf2QwgHyFOIlq1ozrR1jwb1McsFmi5lJLe%2BLiIolQGz3sUJMQswy2p3Q0MoMqwZW2FPBemfGKcuBLQKaDjdiHrx4cvte1fqg871xkqZhY0nemycqPzE44YAkmVPKHyPg7xTGee%2BX%2BVaZczqVgK9HINU4smGwKwYIMeblolgH6W9T5pgKPcVJmqcV16t9POXhY8Jv29W1Y0njZP9bxJjtaGYF7p7M98H%2F%2BDoBXb1VWEzYuwBfFohzXuVyxv%2BNuVxZwNOFHVvdCS2YS74QM8MNWVbsCLZNUlOA6fgZDl65Xfk19rATyJ4BvGLHuu7YvffrEbbx9IsrVC%2FjL5KhT0lSjdaHzpZ0LjM7UW%2FuqKpIwcUngUubq7F6aft4hTAhHiIaOAUCwKdgo%2BpVAIgDmL%2FEPbDMCS9Azgsiea1sTbI%2F%2BbigyFTDjgfv8MPeLiL4GOqUBcm9cOAhylmeKH3CMSOSdxcs4MrKv2VfYNYzk4PXhtbvOBjJJli76NfWlm%2Bx%2FeBKrS2r638CkzcMb7VXVpGxeybvpegHm3PkxavthL0PKZsu3g%2Fj5SRhjx%2Fc29%2BYnzrMvuCdAJ1p%2BN3EgMQvS91aJo5GohxFoFABgrnqnicvPtazcEI%2BuXapYKChJYgKqNthdzBkrmo%2FvZiRJvFUy43dB8JHw5NdR&X-Amz-Signature=4a2e06dbd366e8f60333119cc73815376efc99acedc62ddfba37ad7fa6440f00&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQEOQKAB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIEa4w1RhdQd%2BJ5CKeUww9peGVL3jv%2BV3QogSnMSw5LXJAiEAiW8uhwN9uxTF2wfiV%2B2MMkmMzZZ4f5zmQwEBO0qus%2BsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQslXsuheDEeVtRcyrcA7e0Vno7H69t%2Bw8Vs4NVQT7cs3OauWVE8ficGUdaxa2VlBhjjbRbqwbWasX3EALsWKUMVwEkYq7RZop25lB00mVk%2BUHE9RwGRhePllq0%2F%2BQ59uMUtTY98tDinH2BOCk0UMPcKKiszF20oCJJoYEt%2FKgjb2VkGLpMU6SCyRqRZpOizO%2FYyxdsO0CjBvuzjmQkTh0CuUlcf2QwgHyFOIlq1ozrR1jwb1McsFmi5lJLe%2BLiIolQGz3sUJMQswy2p3Q0MoMqwZW2FPBemfGKcuBLQKaDjdiHrx4cvte1fqg871xkqZhY0nemycqPzE44YAkmVPKHyPg7xTGee%2BX%2BVaZczqVgK9HINU4smGwKwYIMeblolgH6W9T5pgKPcVJmqcV16t9POXhY8Jv29W1Y0njZP9bxJjtaGYF7p7M98H%2F%2BDoBXb1VWEzYuwBfFohzXuVyxv%2BNuVxZwNOFHVvdCS2YS74QM8MNWVbsCLZNUlOA6fgZDl65Xfk19rATyJ4BvGLHuu7YvffrEbbx9IsrVC%2FjL5KhT0lSjdaHzpZ0LjM7UW%2FuqKpIwcUngUubq7F6aft4hTAhHiIaOAUCwKdgo%2BpVAIgDmL%2FEPbDMCS9Azgsiea1sTbI%2F%2BbigyFTDjgfv8MPeLiL4GOqUBcm9cOAhylmeKH3CMSOSdxcs4MrKv2VfYNYzk4PXhtbvOBjJJli76NfWlm%2Bx%2FeBKrS2r638CkzcMb7VXVpGxeybvpegHm3PkxavthL0PKZsu3g%2Fj5SRhjx%2Fc29%2BYnzrMvuCdAJ1p%2BN3EgMQvS91aJo5GohxFoFABgrnqnicvPtazcEI%2BuXapYKChJYgKqNthdzBkrmo%2FvZiRJvFUy43dB8JHw5NdR&X-Amz-Signature=6e3dfd270656b2af16243146442a1b91ca849db949829dd6e396eb0d5c5b2ec7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQEOQKAB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIEa4w1RhdQd%2BJ5CKeUww9peGVL3jv%2BV3QogSnMSw5LXJAiEAiW8uhwN9uxTF2wfiV%2B2MMkmMzZZ4f5zmQwEBO0qus%2BsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQslXsuheDEeVtRcyrcA7e0Vno7H69t%2Bw8Vs4NVQT7cs3OauWVE8ficGUdaxa2VlBhjjbRbqwbWasX3EALsWKUMVwEkYq7RZop25lB00mVk%2BUHE9RwGRhePllq0%2F%2BQ59uMUtTY98tDinH2BOCk0UMPcKKiszF20oCJJoYEt%2FKgjb2VkGLpMU6SCyRqRZpOizO%2FYyxdsO0CjBvuzjmQkTh0CuUlcf2QwgHyFOIlq1ozrR1jwb1McsFmi5lJLe%2BLiIolQGz3sUJMQswy2p3Q0MoMqwZW2FPBemfGKcuBLQKaDjdiHrx4cvte1fqg871xkqZhY0nemycqPzE44YAkmVPKHyPg7xTGee%2BX%2BVaZczqVgK9HINU4smGwKwYIMeblolgH6W9T5pgKPcVJmqcV16t9POXhY8Jv29W1Y0njZP9bxJjtaGYF7p7M98H%2F%2BDoBXb1VWEzYuwBfFohzXuVyxv%2BNuVxZwNOFHVvdCS2YS74QM8MNWVbsCLZNUlOA6fgZDl65Xfk19rATyJ4BvGLHuu7YvffrEbbx9IsrVC%2FjL5KhT0lSjdaHzpZ0LjM7UW%2FuqKpIwcUngUubq7F6aft4hTAhHiIaOAUCwKdgo%2BpVAIgDmL%2FEPbDMCS9Azgsiea1sTbI%2F%2BbigyFTDjgfv8MPeLiL4GOqUBcm9cOAhylmeKH3CMSOSdxcs4MrKv2VfYNYzk4PXhtbvOBjJJli76NfWlm%2Bx%2FeBKrS2r638CkzcMb7VXVpGxeybvpegHm3PkxavthL0PKZsu3g%2Fj5SRhjx%2Fc29%2BYnzrMvuCdAJ1p%2BN3EgMQvS91aJo5GohxFoFABgrnqnicvPtazcEI%2BuXapYKChJYgKqNthdzBkrmo%2FvZiRJvFUy43dB8JHw5NdR&X-Amz-Signature=aa08b37bcab7c5ecf483e72bbe395410c65a0a79ad44e9db54575c99adeac7f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
