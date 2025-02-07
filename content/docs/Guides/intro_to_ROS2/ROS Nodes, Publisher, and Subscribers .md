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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7YEYFCE%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIBWdbVL4WWHpRigG7Iqj1ASZvs7eIWPAioWdERLvggDvAiB3v2OBNRrIsUCYfADuCR4dH7xOZHNxnJRP1zkQdAO%2FjSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMT5SpcJUp2jmexh4gKtwDJCAgU9jBpYIUoyxhEAQLSwsgdmZ2Nq3GggukKO2mcqyjYWchbuHsw3Q%2Bai7zlXhOJ7vf35%2BTumxmvvXoyIuufyNevH2Hcj4zRmWa6p%2BDsgeWP4xNncteW3X0h5H0emjS9tgnvCPics5XDMGdnT%2BhayY242ar8PU4SmGnWzraWOv8M1snUBpeGOtUA44arRQiYPQsdh%2B9lJNZk8zuCpX53EOAGSx96%2B%2BBMR4KAJXmeP4ZsGiKl5oDWWe%2B%2FNN1kNEMlCXLp7P1zERiubyafiut9LZuElmYv1jf2OZEMOjPHPtS7H0TnVMZhSE%2Fsr0hHspOhBdpPfcJtenVWM4YDq6YuoQO3F7i98rSnayjwlhOM05seJz9v88vAmYog9etUbvKCm%2FoMifdPtzCoke5tJNt6ckq8pCa%2FjXbtqfG9SKKcTDapr9cqphfh0z%2Bv6mFj%2Fz0ZEdk5sjpwxNbt6TD6vVeBnavuDo728Orwevlj%2Fu4ZeWlrDK1DMzHntm4hkthN2FTh202OL5oDcb1rxX7hxEr9TSEBhMbcQezxB8waivwZqqYkTIMt4OuwBIyJxhd0NDp9hkkYZKhw3S7vuENsdMMg2Nw0PKRlz0K5Q370mErfKPUavP99QhbD9XOgpswkseYvQY6pgFsnk8vSc7MIGcDXz57HD%2FfyAUe%2Bv0NBvb8qcBq3ra809YruSELUhl7rgfH6VWzKJlQ9N8%2B8AaI%2BGE4xXYCMx96SyLHOUx%2Bt2CIUl%2FIwCcBbQNu%2FgwBL4Jz9Rm5ODICeNviaDJOIEC06nxU0z%2Bv0tHMx8TfvIIlQ31U2c90JkmYUwrUhu%2BQIVmfXvlYMa48Cc2oOC3fy7B8T%2Bo%2BdUi7dRvuuYlSalDq&X-Amz-Signature=cb1978a141bf917b7ebbf3b1cfa709e3aa74787edb2cf978c0db2b3cc9f189d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7YEYFCE%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIBWdbVL4WWHpRigG7Iqj1ASZvs7eIWPAioWdERLvggDvAiB3v2OBNRrIsUCYfADuCR4dH7xOZHNxnJRP1zkQdAO%2FjSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMT5SpcJUp2jmexh4gKtwDJCAgU9jBpYIUoyxhEAQLSwsgdmZ2Nq3GggukKO2mcqyjYWchbuHsw3Q%2Bai7zlXhOJ7vf35%2BTumxmvvXoyIuufyNevH2Hcj4zRmWa6p%2BDsgeWP4xNncteW3X0h5H0emjS9tgnvCPics5XDMGdnT%2BhayY242ar8PU4SmGnWzraWOv8M1snUBpeGOtUA44arRQiYPQsdh%2B9lJNZk8zuCpX53EOAGSx96%2B%2BBMR4KAJXmeP4ZsGiKl5oDWWe%2B%2FNN1kNEMlCXLp7P1zERiubyafiut9LZuElmYv1jf2OZEMOjPHPtS7H0TnVMZhSE%2Fsr0hHspOhBdpPfcJtenVWM4YDq6YuoQO3F7i98rSnayjwlhOM05seJz9v88vAmYog9etUbvKCm%2FoMifdPtzCoke5tJNt6ckq8pCa%2FjXbtqfG9SKKcTDapr9cqphfh0z%2Bv6mFj%2Fz0ZEdk5sjpwxNbt6TD6vVeBnavuDo728Orwevlj%2Fu4ZeWlrDK1DMzHntm4hkthN2FTh202OL5oDcb1rxX7hxEr9TSEBhMbcQezxB8waivwZqqYkTIMt4OuwBIyJxhd0NDp9hkkYZKhw3S7vuENsdMMg2Nw0PKRlz0K5Q370mErfKPUavP99QhbD9XOgpswkseYvQY6pgFsnk8vSc7MIGcDXz57HD%2FfyAUe%2Bv0NBvb8qcBq3ra809YruSELUhl7rgfH6VWzKJlQ9N8%2B8AaI%2BGE4xXYCMx96SyLHOUx%2Bt2CIUl%2FIwCcBbQNu%2FgwBL4Jz9Rm5ODICeNviaDJOIEC06nxU0z%2Bv0tHMx8TfvIIlQ31U2c90JkmYUwrUhu%2BQIVmfXvlYMa48Cc2oOC3fy7B8T%2Bo%2BdUi7dRvuuYlSalDq&X-Amz-Signature=8b58ee883421e0a420fa1900ff0451d4e86d98852531e4b70980dd37ba5cbe22&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7YEYFCE%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIBWdbVL4WWHpRigG7Iqj1ASZvs7eIWPAioWdERLvggDvAiB3v2OBNRrIsUCYfADuCR4dH7xOZHNxnJRP1zkQdAO%2FjSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMT5SpcJUp2jmexh4gKtwDJCAgU9jBpYIUoyxhEAQLSwsgdmZ2Nq3GggukKO2mcqyjYWchbuHsw3Q%2Bai7zlXhOJ7vf35%2BTumxmvvXoyIuufyNevH2Hcj4zRmWa6p%2BDsgeWP4xNncteW3X0h5H0emjS9tgnvCPics5XDMGdnT%2BhayY242ar8PU4SmGnWzraWOv8M1snUBpeGOtUA44arRQiYPQsdh%2B9lJNZk8zuCpX53EOAGSx96%2B%2BBMR4KAJXmeP4ZsGiKl5oDWWe%2B%2FNN1kNEMlCXLp7P1zERiubyafiut9LZuElmYv1jf2OZEMOjPHPtS7H0TnVMZhSE%2Fsr0hHspOhBdpPfcJtenVWM4YDq6YuoQO3F7i98rSnayjwlhOM05seJz9v88vAmYog9etUbvKCm%2FoMifdPtzCoke5tJNt6ckq8pCa%2FjXbtqfG9SKKcTDapr9cqphfh0z%2Bv6mFj%2Fz0ZEdk5sjpwxNbt6TD6vVeBnavuDo728Orwevlj%2Fu4ZeWlrDK1DMzHntm4hkthN2FTh202OL5oDcb1rxX7hxEr9TSEBhMbcQezxB8waivwZqqYkTIMt4OuwBIyJxhd0NDp9hkkYZKhw3S7vuENsdMMg2Nw0PKRlz0K5Q370mErfKPUavP99QhbD9XOgpswkseYvQY6pgFsnk8vSc7MIGcDXz57HD%2FfyAUe%2Bv0NBvb8qcBq3ra809YruSELUhl7rgfH6VWzKJlQ9N8%2B8AaI%2BGE4xXYCMx96SyLHOUx%2Bt2CIUl%2FIwCcBbQNu%2FgwBL4Jz9Rm5ODICeNviaDJOIEC06nxU0z%2Bv0tHMx8TfvIIlQ31U2c90JkmYUwrUhu%2BQIVmfXvlYMa48Cc2oOC3fy7B8T%2Bo%2BdUi7dRvuuYlSalDq&X-Amz-Signature=9815fbcddc59338f7a737a67e6cac5e6481c4465a5d9a84601a93bc347545c1c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7YEYFCE%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIBWdbVL4WWHpRigG7Iqj1ASZvs7eIWPAioWdERLvggDvAiB3v2OBNRrIsUCYfADuCR4dH7xOZHNxnJRP1zkQdAO%2FjSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMT5SpcJUp2jmexh4gKtwDJCAgU9jBpYIUoyxhEAQLSwsgdmZ2Nq3GggukKO2mcqyjYWchbuHsw3Q%2Bai7zlXhOJ7vf35%2BTumxmvvXoyIuufyNevH2Hcj4zRmWa6p%2BDsgeWP4xNncteW3X0h5H0emjS9tgnvCPics5XDMGdnT%2BhayY242ar8PU4SmGnWzraWOv8M1snUBpeGOtUA44arRQiYPQsdh%2B9lJNZk8zuCpX53EOAGSx96%2B%2BBMR4KAJXmeP4ZsGiKl5oDWWe%2B%2FNN1kNEMlCXLp7P1zERiubyafiut9LZuElmYv1jf2OZEMOjPHPtS7H0TnVMZhSE%2Fsr0hHspOhBdpPfcJtenVWM4YDq6YuoQO3F7i98rSnayjwlhOM05seJz9v88vAmYog9etUbvKCm%2FoMifdPtzCoke5tJNt6ckq8pCa%2FjXbtqfG9SKKcTDapr9cqphfh0z%2Bv6mFj%2Fz0ZEdk5sjpwxNbt6TD6vVeBnavuDo728Orwevlj%2Fu4ZeWlrDK1DMzHntm4hkthN2FTh202OL5oDcb1rxX7hxEr9TSEBhMbcQezxB8waivwZqqYkTIMt4OuwBIyJxhd0NDp9hkkYZKhw3S7vuENsdMMg2Nw0PKRlz0K5Q370mErfKPUavP99QhbD9XOgpswkseYvQY6pgFsnk8vSc7MIGcDXz57HD%2FfyAUe%2Bv0NBvb8qcBq3ra809YruSELUhl7rgfH6VWzKJlQ9N8%2B8AaI%2BGE4xXYCMx96SyLHOUx%2Bt2CIUl%2FIwCcBbQNu%2FgwBL4Jz9Rm5ODICeNviaDJOIEC06nxU0z%2Bv0tHMx8TfvIIlQ31U2c90JkmYUwrUhu%2BQIVmfXvlYMa48Cc2oOC3fy7B8T%2Bo%2BdUi7dRvuuYlSalDq&X-Amz-Signature=c7740eb6970bd55fdbee9d759d6f3d07f83293a70ffbd45b9c7944bbef24fb52&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7YEYFCE%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIBWdbVL4WWHpRigG7Iqj1ASZvs7eIWPAioWdERLvggDvAiB3v2OBNRrIsUCYfADuCR4dH7xOZHNxnJRP1zkQdAO%2FjSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMT5SpcJUp2jmexh4gKtwDJCAgU9jBpYIUoyxhEAQLSwsgdmZ2Nq3GggukKO2mcqyjYWchbuHsw3Q%2Bai7zlXhOJ7vf35%2BTumxmvvXoyIuufyNevH2Hcj4zRmWa6p%2BDsgeWP4xNncteW3X0h5H0emjS9tgnvCPics5XDMGdnT%2BhayY242ar8PU4SmGnWzraWOv8M1snUBpeGOtUA44arRQiYPQsdh%2B9lJNZk8zuCpX53EOAGSx96%2B%2BBMR4KAJXmeP4ZsGiKl5oDWWe%2B%2FNN1kNEMlCXLp7P1zERiubyafiut9LZuElmYv1jf2OZEMOjPHPtS7H0TnVMZhSE%2Fsr0hHspOhBdpPfcJtenVWM4YDq6YuoQO3F7i98rSnayjwlhOM05seJz9v88vAmYog9etUbvKCm%2FoMifdPtzCoke5tJNt6ckq8pCa%2FjXbtqfG9SKKcTDapr9cqphfh0z%2Bv6mFj%2Fz0ZEdk5sjpwxNbt6TD6vVeBnavuDo728Orwevlj%2Fu4ZeWlrDK1DMzHntm4hkthN2FTh202OL5oDcb1rxX7hxEr9TSEBhMbcQezxB8waivwZqqYkTIMt4OuwBIyJxhd0NDp9hkkYZKhw3S7vuENsdMMg2Nw0PKRlz0K5Q370mErfKPUavP99QhbD9XOgpswkseYvQY6pgFsnk8vSc7MIGcDXz57HD%2FfyAUe%2Bv0NBvb8qcBq3ra809YruSELUhl7rgfH6VWzKJlQ9N8%2B8AaI%2BGE4xXYCMx96SyLHOUx%2Bt2CIUl%2FIwCcBbQNu%2FgwBL4Jz9Rm5ODICeNviaDJOIEC06nxU0z%2Bv0tHMx8TfvIIlQ31U2c90JkmYUwrUhu%2BQIVmfXvlYMa48Cc2oOC3fy7B8T%2Bo%2BdUi7dRvuuYlSalDq&X-Amz-Signature=d8dec20261bb07803aa382b519d72ad3b235b2b4375ca9ba91b72c4621c44e16&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7YEYFCE%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIBWdbVL4WWHpRigG7Iqj1ASZvs7eIWPAioWdERLvggDvAiB3v2OBNRrIsUCYfADuCR4dH7xOZHNxnJRP1zkQdAO%2FjSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMT5SpcJUp2jmexh4gKtwDJCAgU9jBpYIUoyxhEAQLSwsgdmZ2Nq3GggukKO2mcqyjYWchbuHsw3Q%2Bai7zlXhOJ7vf35%2BTumxmvvXoyIuufyNevH2Hcj4zRmWa6p%2BDsgeWP4xNncteW3X0h5H0emjS9tgnvCPics5XDMGdnT%2BhayY242ar8PU4SmGnWzraWOv8M1snUBpeGOtUA44arRQiYPQsdh%2B9lJNZk8zuCpX53EOAGSx96%2B%2BBMR4KAJXmeP4ZsGiKl5oDWWe%2B%2FNN1kNEMlCXLp7P1zERiubyafiut9LZuElmYv1jf2OZEMOjPHPtS7H0TnVMZhSE%2Fsr0hHspOhBdpPfcJtenVWM4YDq6YuoQO3F7i98rSnayjwlhOM05seJz9v88vAmYog9etUbvKCm%2FoMifdPtzCoke5tJNt6ckq8pCa%2FjXbtqfG9SKKcTDapr9cqphfh0z%2Bv6mFj%2Fz0ZEdk5sjpwxNbt6TD6vVeBnavuDo728Orwevlj%2Fu4ZeWlrDK1DMzHntm4hkthN2FTh202OL5oDcb1rxX7hxEr9TSEBhMbcQezxB8waivwZqqYkTIMt4OuwBIyJxhd0NDp9hkkYZKhw3S7vuENsdMMg2Nw0PKRlz0K5Q370mErfKPUavP99QhbD9XOgpswkseYvQY6pgFsnk8vSc7MIGcDXz57HD%2FfyAUe%2Bv0NBvb8qcBq3ra809YruSELUhl7rgfH6VWzKJlQ9N8%2B8AaI%2BGE4xXYCMx96SyLHOUx%2Bt2CIUl%2FIwCcBbQNu%2FgwBL4Jz9Rm5ODICeNviaDJOIEC06nxU0z%2Bv0tHMx8TfvIIlQ31U2c90JkmYUwrUhu%2BQIVmfXvlYMa48Cc2oOC3fy7B8T%2Bo%2BdUi7dRvuuYlSalDq&X-Amz-Signature=8f569a48edf51ff1bb900e7363908b37e831e9536a0c5a5dff18daab96bfa1ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7YEYFCE%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIBWdbVL4WWHpRigG7Iqj1ASZvs7eIWPAioWdERLvggDvAiB3v2OBNRrIsUCYfADuCR4dH7xOZHNxnJRP1zkQdAO%2FjSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMT5SpcJUp2jmexh4gKtwDJCAgU9jBpYIUoyxhEAQLSwsgdmZ2Nq3GggukKO2mcqyjYWchbuHsw3Q%2Bai7zlXhOJ7vf35%2BTumxmvvXoyIuufyNevH2Hcj4zRmWa6p%2BDsgeWP4xNncteW3X0h5H0emjS9tgnvCPics5XDMGdnT%2BhayY242ar8PU4SmGnWzraWOv8M1snUBpeGOtUA44arRQiYPQsdh%2B9lJNZk8zuCpX53EOAGSx96%2B%2BBMR4KAJXmeP4ZsGiKl5oDWWe%2B%2FNN1kNEMlCXLp7P1zERiubyafiut9LZuElmYv1jf2OZEMOjPHPtS7H0TnVMZhSE%2Fsr0hHspOhBdpPfcJtenVWM4YDq6YuoQO3F7i98rSnayjwlhOM05seJz9v88vAmYog9etUbvKCm%2FoMifdPtzCoke5tJNt6ckq8pCa%2FjXbtqfG9SKKcTDapr9cqphfh0z%2Bv6mFj%2Fz0ZEdk5sjpwxNbt6TD6vVeBnavuDo728Orwevlj%2Fu4ZeWlrDK1DMzHntm4hkthN2FTh202OL5oDcb1rxX7hxEr9TSEBhMbcQezxB8waivwZqqYkTIMt4OuwBIyJxhd0NDp9hkkYZKhw3S7vuENsdMMg2Nw0PKRlz0K5Q370mErfKPUavP99QhbD9XOgpswkseYvQY6pgFsnk8vSc7MIGcDXz57HD%2FfyAUe%2Bv0NBvb8qcBq3ra809YruSELUhl7rgfH6VWzKJlQ9N8%2B8AaI%2BGE4xXYCMx96SyLHOUx%2Bt2CIUl%2FIwCcBbQNu%2FgwBL4Jz9Rm5ODICeNviaDJOIEC06nxU0z%2Bv0tHMx8TfvIIlQ31U2c90JkmYUwrUhu%2BQIVmfXvlYMa48Cc2oOC3fy7B8T%2Bo%2BdUi7dRvuuYlSalDq&X-Amz-Signature=53c57ffe317f30303dfcb243d9231e556feb19a54c21d578b63c63a2b3a65b6b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7YEYFCE%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIBWdbVL4WWHpRigG7Iqj1ASZvs7eIWPAioWdERLvggDvAiB3v2OBNRrIsUCYfADuCR4dH7xOZHNxnJRP1zkQdAO%2FjSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMT5SpcJUp2jmexh4gKtwDJCAgU9jBpYIUoyxhEAQLSwsgdmZ2Nq3GggukKO2mcqyjYWchbuHsw3Q%2Bai7zlXhOJ7vf35%2BTumxmvvXoyIuufyNevH2Hcj4zRmWa6p%2BDsgeWP4xNncteW3X0h5H0emjS9tgnvCPics5XDMGdnT%2BhayY242ar8PU4SmGnWzraWOv8M1snUBpeGOtUA44arRQiYPQsdh%2B9lJNZk8zuCpX53EOAGSx96%2B%2BBMR4KAJXmeP4ZsGiKl5oDWWe%2B%2FNN1kNEMlCXLp7P1zERiubyafiut9LZuElmYv1jf2OZEMOjPHPtS7H0TnVMZhSE%2Fsr0hHspOhBdpPfcJtenVWM4YDq6YuoQO3F7i98rSnayjwlhOM05seJz9v88vAmYog9etUbvKCm%2FoMifdPtzCoke5tJNt6ckq8pCa%2FjXbtqfG9SKKcTDapr9cqphfh0z%2Bv6mFj%2Fz0ZEdk5sjpwxNbt6TD6vVeBnavuDo728Orwevlj%2Fu4ZeWlrDK1DMzHntm4hkthN2FTh202OL5oDcb1rxX7hxEr9TSEBhMbcQezxB8waivwZqqYkTIMt4OuwBIyJxhd0NDp9hkkYZKhw3S7vuENsdMMg2Nw0PKRlz0K5Q370mErfKPUavP99QhbD9XOgpswkseYvQY6pgFsnk8vSc7MIGcDXz57HD%2FfyAUe%2Bv0NBvb8qcBq3ra809YruSELUhl7rgfH6VWzKJlQ9N8%2B8AaI%2BGE4xXYCMx96SyLHOUx%2Bt2CIUl%2FIwCcBbQNu%2FgwBL4Jz9Rm5ODICeNviaDJOIEC06nxU0z%2Bv0tHMx8TfvIIlQ31U2c90JkmYUwrUhu%2BQIVmfXvlYMa48Cc2oOC3fy7B8T%2Bo%2BdUi7dRvuuYlSalDq&X-Amz-Signature=4aec0ece010b5b7b5c551f80c54efd5b919dfc0dd7dd5cbb1a0aa17e54433eb8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
