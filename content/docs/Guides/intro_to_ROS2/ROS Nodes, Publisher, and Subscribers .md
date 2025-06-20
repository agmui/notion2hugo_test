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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTH2LR2H%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDs8D5pHYlZBjyJyk8qeju6YEQ54Ac4m7ERnoo2gkzzHgIgCNm0uwSyIEuQVe%2Fc2%2FmjzPlwA7Kth3oVQeylsfWrtksqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8E6lmGPb7gThB%2FjircA6%2FkubT99ag77Zq4JwcLrpe%2FNIejUtUgHMowugDeSqKLaSt9hguoqGxIP5KjAZZ75%2F8Lnn8cChIAZM3ZLlpP%2BEjeZJF0yN%2Fz1%2BTLGICk%2BkQ1dL%2F0pGUEGJJ4OQ1yfp7u0%2FNv%2FqFWVfxmDn4J%2BVFxJZANlwpFe15Bc0Y9kIK1QMzJ4QuC5mDrolm4%2FK8IS%2F%2BQRWO5cA0dJgbQwsUVbRsPlfVZSvph3%2B2KUxPOCQZ%2BdfwwfWpVLapc28y1XLbzrZQDAIY5FeN4OEInN6G2jcCT29NAQ5T0e4lNzmFgMVG1pgXuJLLp0VWkRsCftICImbn8NAqupGjAPHFBaol%2FC6ajYY%2FyEIhPlGPAa6x9Gx1zsQTCrU%2Fg6773ZjzP7n52TgPzfAbVESrtzkfW0vkUFwxJHZzcG5FXe1JxWHOecaIIdY2xtGoTYKd9rSs2ytaxUbefCI7SeFru8fhhE6xajMVetn9vGdKEkVJAXFKuqTMxyX0cxkhS9bWgkDTAUI42vbJuhNUaWOwqEMHDFVyCTXGNMrdcZdLiunfQhldB59uWgn%2BomdmoRoDy%2F9i7FG%2BD5BbNM%2FERsztpbvY9%2BH7aJJiLwsdTIV%2FLctYlW1K28TpsdYlSezgYShan2CIyVq5VMKbV1cIGOqUB0f0Z1jFJzhQwyrtY54wTPf5%2BYDV6ftgtSTBA3PEgmP6yJRNwDKjcWGbwzDSS%2FCJB0F18RAVTBtDN%2F4VQQ9VfX3DF1GoUoO5nPVsEdnWsjM2CMcOLIgIXXRZ2J117Fm4eSg4THWxv6IGKhVBcsi9ZDgvgpXu2piWf4r8Oh62cNtlN5S4uEAnQJwT1G8D%2BKl0IZr8nyYBRS0XPqSjIKlBmv4pbNCof&X-Amz-Signature=59ad3a31fc4e6aa48254a6149220dc12009361e3b0928de99e7e36723c2ee149&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTH2LR2H%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDs8D5pHYlZBjyJyk8qeju6YEQ54Ac4m7ERnoo2gkzzHgIgCNm0uwSyIEuQVe%2Fc2%2FmjzPlwA7Kth3oVQeylsfWrtksqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8E6lmGPb7gThB%2FjircA6%2FkubT99ag77Zq4JwcLrpe%2FNIejUtUgHMowugDeSqKLaSt9hguoqGxIP5KjAZZ75%2F8Lnn8cChIAZM3ZLlpP%2BEjeZJF0yN%2Fz1%2BTLGICk%2BkQ1dL%2F0pGUEGJJ4OQ1yfp7u0%2FNv%2FqFWVfxmDn4J%2BVFxJZANlwpFe15Bc0Y9kIK1QMzJ4QuC5mDrolm4%2FK8IS%2F%2BQRWO5cA0dJgbQwsUVbRsPlfVZSvph3%2B2KUxPOCQZ%2BdfwwfWpVLapc28y1XLbzrZQDAIY5FeN4OEInN6G2jcCT29NAQ5T0e4lNzmFgMVG1pgXuJLLp0VWkRsCftICImbn8NAqupGjAPHFBaol%2FC6ajYY%2FyEIhPlGPAa6x9Gx1zsQTCrU%2Fg6773ZjzP7n52TgPzfAbVESrtzkfW0vkUFwxJHZzcG5FXe1JxWHOecaIIdY2xtGoTYKd9rSs2ytaxUbefCI7SeFru8fhhE6xajMVetn9vGdKEkVJAXFKuqTMxyX0cxkhS9bWgkDTAUI42vbJuhNUaWOwqEMHDFVyCTXGNMrdcZdLiunfQhldB59uWgn%2BomdmoRoDy%2F9i7FG%2BD5BbNM%2FERsztpbvY9%2BH7aJJiLwsdTIV%2FLctYlW1K28TpsdYlSezgYShan2CIyVq5VMKbV1cIGOqUB0f0Z1jFJzhQwyrtY54wTPf5%2BYDV6ftgtSTBA3PEgmP6yJRNwDKjcWGbwzDSS%2FCJB0F18RAVTBtDN%2F4VQQ9VfX3DF1GoUoO5nPVsEdnWsjM2CMcOLIgIXXRZ2J117Fm4eSg4THWxv6IGKhVBcsi9ZDgvgpXu2piWf4r8Oh62cNtlN5S4uEAnQJwT1G8D%2BKl0IZr8nyYBRS0XPqSjIKlBmv4pbNCof&X-Amz-Signature=0c5fbd616234b680d020bcbfa9b6ef5c5c4dfccd7dc5d505e3c8e54d6989411b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTH2LR2H%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDs8D5pHYlZBjyJyk8qeju6YEQ54Ac4m7ERnoo2gkzzHgIgCNm0uwSyIEuQVe%2Fc2%2FmjzPlwA7Kth3oVQeylsfWrtksqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8E6lmGPb7gThB%2FjircA6%2FkubT99ag77Zq4JwcLrpe%2FNIejUtUgHMowugDeSqKLaSt9hguoqGxIP5KjAZZ75%2F8Lnn8cChIAZM3ZLlpP%2BEjeZJF0yN%2Fz1%2BTLGICk%2BkQ1dL%2F0pGUEGJJ4OQ1yfp7u0%2FNv%2FqFWVfxmDn4J%2BVFxJZANlwpFe15Bc0Y9kIK1QMzJ4QuC5mDrolm4%2FK8IS%2F%2BQRWO5cA0dJgbQwsUVbRsPlfVZSvph3%2B2KUxPOCQZ%2BdfwwfWpVLapc28y1XLbzrZQDAIY5FeN4OEInN6G2jcCT29NAQ5T0e4lNzmFgMVG1pgXuJLLp0VWkRsCftICImbn8NAqupGjAPHFBaol%2FC6ajYY%2FyEIhPlGPAa6x9Gx1zsQTCrU%2Fg6773ZjzP7n52TgPzfAbVESrtzkfW0vkUFwxJHZzcG5FXe1JxWHOecaIIdY2xtGoTYKd9rSs2ytaxUbefCI7SeFru8fhhE6xajMVetn9vGdKEkVJAXFKuqTMxyX0cxkhS9bWgkDTAUI42vbJuhNUaWOwqEMHDFVyCTXGNMrdcZdLiunfQhldB59uWgn%2BomdmoRoDy%2F9i7FG%2BD5BbNM%2FERsztpbvY9%2BH7aJJiLwsdTIV%2FLctYlW1K28TpsdYlSezgYShan2CIyVq5VMKbV1cIGOqUB0f0Z1jFJzhQwyrtY54wTPf5%2BYDV6ftgtSTBA3PEgmP6yJRNwDKjcWGbwzDSS%2FCJB0F18RAVTBtDN%2F4VQQ9VfX3DF1GoUoO5nPVsEdnWsjM2CMcOLIgIXXRZ2J117Fm4eSg4THWxv6IGKhVBcsi9ZDgvgpXu2piWf4r8Oh62cNtlN5S4uEAnQJwT1G8D%2BKl0IZr8nyYBRS0XPqSjIKlBmv4pbNCof&X-Amz-Signature=1a138bedf58eea3d904c70d1aabd70c2c851358cab0d02a0b8f51f1cf88b82c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTH2LR2H%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDs8D5pHYlZBjyJyk8qeju6YEQ54Ac4m7ERnoo2gkzzHgIgCNm0uwSyIEuQVe%2Fc2%2FmjzPlwA7Kth3oVQeylsfWrtksqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8E6lmGPb7gThB%2FjircA6%2FkubT99ag77Zq4JwcLrpe%2FNIejUtUgHMowugDeSqKLaSt9hguoqGxIP5KjAZZ75%2F8Lnn8cChIAZM3ZLlpP%2BEjeZJF0yN%2Fz1%2BTLGICk%2BkQ1dL%2F0pGUEGJJ4OQ1yfp7u0%2FNv%2FqFWVfxmDn4J%2BVFxJZANlwpFe15Bc0Y9kIK1QMzJ4QuC5mDrolm4%2FK8IS%2F%2BQRWO5cA0dJgbQwsUVbRsPlfVZSvph3%2B2KUxPOCQZ%2BdfwwfWpVLapc28y1XLbzrZQDAIY5FeN4OEInN6G2jcCT29NAQ5T0e4lNzmFgMVG1pgXuJLLp0VWkRsCftICImbn8NAqupGjAPHFBaol%2FC6ajYY%2FyEIhPlGPAa6x9Gx1zsQTCrU%2Fg6773ZjzP7n52TgPzfAbVESrtzkfW0vkUFwxJHZzcG5FXe1JxWHOecaIIdY2xtGoTYKd9rSs2ytaxUbefCI7SeFru8fhhE6xajMVetn9vGdKEkVJAXFKuqTMxyX0cxkhS9bWgkDTAUI42vbJuhNUaWOwqEMHDFVyCTXGNMrdcZdLiunfQhldB59uWgn%2BomdmoRoDy%2F9i7FG%2BD5BbNM%2FERsztpbvY9%2BH7aJJiLwsdTIV%2FLctYlW1K28TpsdYlSezgYShan2CIyVq5VMKbV1cIGOqUB0f0Z1jFJzhQwyrtY54wTPf5%2BYDV6ftgtSTBA3PEgmP6yJRNwDKjcWGbwzDSS%2FCJB0F18RAVTBtDN%2F4VQQ9VfX3DF1GoUoO5nPVsEdnWsjM2CMcOLIgIXXRZ2J117Fm4eSg4THWxv6IGKhVBcsi9ZDgvgpXu2piWf4r8Oh62cNtlN5S4uEAnQJwT1G8D%2BKl0IZr8nyYBRS0XPqSjIKlBmv4pbNCof&X-Amz-Signature=274dc5defbb17db411bcf2efdda3f61ca25d0b3a11c6390e568e6c1e2ed7c30d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTH2LR2H%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDs8D5pHYlZBjyJyk8qeju6YEQ54Ac4m7ERnoo2gkzzHgIgCNm0uwSyIEuQVe%2Fc2%2FmjzPlwA7Kth3oVQeylsfWrtksqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8E6lmGPb7gThB%2FjircA6%2FkubT99ag77Zq4JwcLrpe%2FNIejUtUgHMowugDeSqKLaSt9hguoqGxIP5KjAZZ75%2F8Lnn8cChIAZM3ZLlpP%2BEjeZJF0yN%2Fz1%2BTLGICk%2BkQ1dL%2F0pGUEGJJ4OQ1yfp7u0%2FNv%2FqFWVfxmDn4J%2BVFxJZANlwpFe15Bc0Y9kIK1QMzJ4QuC5mDrolm4%2FK8IS%2F%2BQRWO5cA0dJgbQwsUVbRsPlfVZSvph3%2B2KUxPOCQZ%2BdfwwfWpVLapc28y1XLbzrZQDAIY5FeN4OEInN6G2jcCT29NAQ5T0e4lNzmFgMVG1pgXuJLLp0VWkRsCftICImbn8NAqupGjAPHFBaol%2FC6ajYY%2FyEIhPlGPAa6x9Gx1zsQTCrU%2Fg6773ZjzP7n52TgPzfAbVESrtzkfW0vkUFwxJHZzcG5FXe1JxWHOecaIIdY2xtGoTYKd9rSs2ytaxUbefCI7SeFru8fhhE6xajMVetn9vGdKEkVJAXFKuqTMxyX0cxkhS9bWgkDTAUI42vbJuhNUaWOwqEMHDFVyCTXGNMrdcZdLiunfQhldB59uWgn%2BomdmoRoDy%2F9i7FG%2BD5BbNM%2FERsztpbvY9%2BH7aJJiLwsdTIV%2FLctYlW1K28TpsdYlSezgYShan2CIyVq5VMKbV1cIGOqUB0f0Z1jFJzhQwyrtY54wTPf5%2BYDV6ftgtSTBA3PEgmP6yJRNwDKjcWGbwzDSS%2FCJB0F18RAVTBtDN%2F4VQQ9VfX3DF1GoUoO5nPVsEdnWsjM2CMcOLIgIXXRZ2J117Fm4eSg4THWxv6IGKhVBcsi9ZDgvgpXu2piWf4r8Oh62cNtlN5S4uEAnQJwT1G8D%2BKl0IZr8nyYBRS0XPqSjIKlBmv4pbNCof&X-Amz-Signature=56fb9d579cfbbbcbdc84f05d2ff59b0da5ef5aa3216125a8719b5d5cabd4cf3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTH2LR2H%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDs8D5pHYlZBjyJyk8qeju6YEQ54Ac4m7ERnoo2gkzzHgIgCNm0uwSyIEuQVe%2Fc2%2FmjzPlwA7Kth3oVQeylsfWrtksqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8E6lmGPb7gThB%2FjircA6%2FkubT99ag77Zq4JwcLrpe%2FNIejUtUgHMowugDeSqKLaSt9hguoqGxIP5KjAZZ75%2F8Lnn8cChIAZM3ZLlpP%2BEjeZJF0yN%2Fz1%2BTLGICk%2BkQ1dL%2F0pGUEGJJ4OQ1yfp7u0%2FNv%2FqFWVfxmDn4J%2BVFxJZANlwpFe15Bc0Y9kIK1QMzJ4QuC5mDrolm4%2FK8IS%2F%2BQRWO5cA0dJgbQwsUVbRsPlfVZSvph3%2B2KUxPOCQZ%2BdfwwfWpVLapc28y1XLbzrZQDAIY5FeN4OEInN6G2jcCT29NAQ5T0e4lNzmFgMVG1pgXuJLLp0VWkRsCftICImbn8NAqupGjAPHFBaol%2FC6ajYY%2FyEIhPlGPAa6x9Gx1zsQTCrU%2Fg6773ZjzP7n52TgPzfAbVESrtzkfW0vkUFwxJHZzcG5FXe1JxWHOecaIIdY2xtGoTYKd9rSs2ytaxUbefCI7SeFru8fhhE6xajMVetn9vGdKEkVJAXFKuqTMxyX0cxkhS9bWgkDTAUI42vbJuhNUaWOwqEMHDFVyCTXGNMrdcZdLiunfQhldB59uWgn%2BomdmoRoDy%2F9i7FG%2BD5BbNM%2FERsztpbvY9%2BH7aJJiLwsdTIV%2FLctYlW1K28TpsdYlSezgYShan2CIyVq5VMKbV1cIGOqUB0f0Z1jFJzhQwyrtY54wTPf5%2BYDV6ftgtSTBA3PEgmP6yJRNwDKjcWGbwzDSS%2FCJB0F18RAVTBtDN%2F4VQQ9VfX3DF1GoUoO5nPVsEdnWsjM2CMcOLIgIXXRZ2J117Fm4eSg4THWxv6IGKhVBcsi9ZDgvgpXu2piWf4r8Oh62cNtlN5S4uEAnQJwT1G8D%2BKl0IZr8nyYBRS0XPqSjIKlBmv4pbNCof&X-Amz-Signature=7507344895a7ea551d0a2075631afe70cb6f9894100af468a11e4aa6441ae7fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTH2LR2H%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDs8D5pHYlZBjyJyk8qeju6YEQ54Ac4m7ERnoo2gkzzHgIgCNm0uwSyIEuQVe%2Fc2%2FmjzPlwA7Kth3oVQeylsfWrtksqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8E6lmGPb7gThB%2FjircA6%2FkubT99ag77Zq4JwcLrpe%2FNIejUtUgHMowugDeSqKLaSt9hguoqGxIP5KjAZZ75%2F8Lnn8cChIAZM3ZLlpP%2BEjeZJF0yN%2Fz1%2BTLGICk%2BkQ1dL%2F0pGUEGJJ4OQ1yfp7u0%2FNv%2FqFWVfxmDn4J%2BVFxJZANlwpFe15Bc0Y9kIK1QMzJ4QuC5mDrolm4%2FK8IS%2F%2BQRWO5cA0dJgbQwsUVbRsPlfVZSvph3%2B2KUxPOCQZ%2BdfwwfWpVLapc28y1XLbzrZQDAIY5FeN4OEInN6G2jcCT29NAQ5T0e4lNzmFgMVG1pgXuJLLp0VWkRsCftICImbn8NAqupGjAPHFBaol%2FC6ajYY%2FyEIhPlGPAa6x9Gx1zsQTCrU%2Fg6773ZjzP7n52TgPzfAbVESrtzkfW0vkUFwxJHZzcG5FXe1JxWHOecaIIdY2xtGoTYKd9rSs2ytaxUbefCI7SeFru8fhhE6xajMVetn9vGdKEkVJAXFKuqTMxyX0cxkhS9bWgkDTAUI42vbJuhNUaWOwqEMHDFVyCTXGNMrdcZdLiunfQhldB59uWgn%2BomdmoRoDy%2F9i7FG%2BD5BbNM%2FERsztpbvY9%2BH7aJJiLwsdTIV%2FLctYlW1K28TpsdYlSezgYShan2CIyVq5VMKbV1cIGOqUB0f0Z1jFJzhQwyrtY54wTPf5%2BYDV6ftgtSTBA3PEgmP6yJRNwDKjcWGbwzDSS%2FCJB0F18RAVTBtDN%2F4VQQ9VfX3DF1GoUoO5nPVsEdnWsjM2CMcOLIgIXXRZ2J117Fm4eSg4THWxv6IGKhVBcsi9ZDgvgpXu2piWf4r8Oh62cNtlN5S4uEAnQJwT1G8D%2BKl0IZr8nyYBRS0XPqSjIKlBmv4pbNCof&X-Amz-Signature=48cdd72e2ead65aca4640429a6ed76411cd46cea663f99cc3151123dffc146d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTH2LR2H%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDs8D5pHYlZBjyJyk8qeju6YEQ54Ac4m7ERnoo2gkzzHgIgCNm0uwSyIEuQVe%2Fc2%2FmjzPlwA7Kth3oVQeylsfWrtksqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8E6lmGPb7gThB%2FjircA6%2FkubT99ag77Zq4JwcLrpe%2FNIejUtUgHMowugDeSqKLaSt9hguoqGxIP5KjAZZ75%2F8Lnn8cChIAZM3ZLlpP%2BEjeZJF0yN%2Fz1%2BTLGICk%2BkQ1dL%2F0pGUEGJJ4OQ1yfp7u0%2FNv%2FqFWVfxmDn4J%2BVFxJZANlwpFe15Bc0Y9kIK1QMzJ4QuC5mDrolm4%2FK8IS%2F%2BQRWO5cA0dJgbQwsUVbRsPlfVZSvph3%2B2KUxPOCQZ%2BdfwwfWpVLapc28y1XLbzrZQDAIY5FeN4OEInN6G2jcCT29NAQ5T0e4lNzmFgMVG1pgXuJLLp0VWkRsCftICImbn8NAqupGjAPHFBaol%2FC6ajYY%2FyEIhPlGPAa6x9Gx1zsQTCrU%2Fg6773ZjzP7n52TgPzfAbVESrtzkfW0vkUFwxJHZzcG5FXe1JxWHOecaIIdY2xtGoTYKd9rSs2ytaxUbefCI7SeFru8fhhE6xajMVetn9vGdKEkVJAXFKuqTMxyX0cxkhS9bWgkDTAUI42vbJuhNUaWOwqEMHDFVyCTXGNMrdcZdLiunfQhldB59uWgn%2BomdmoRoDy%2F9i7FG%2BD5BbNM%2FERsztpbvY9%2BH7aJJiLwsdTIV%2FLctYlW1K28TpsdYlSezgYShan2CIyVq5VMKbV1cIGOqUB0f0Z1jFJzhQwyrtY54wTPf5%2BYDV6ftgtSTBA3PEgmP6yJRNwDKjcWGbwzDSS%2FCJB0F18RAVTBtDN%2F4VQQ9VfX3DF1GoUoO5nPVsEdnWsjM2CMcOLIgIXXRZ2J117Fm4eSg4THWxv6IGKhVBcsi9ZDgvgpXu2piWf4r8Oh62cNtlN5S4uEAnQJwT1G8D%2BKl0IZr8nyYBRS0XPqSjIKlBmv4pbNCof&X-Amz-Signature=92bfdab355470a0706f43ee190ed4ecff8bb964e25c4e17434f94fbfd5d77846&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
