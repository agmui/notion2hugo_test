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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2IYWTGC%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQC8aXBEjQ%2Fls%2FpmNB%2FfoUO4Ow9S7Bujue1p5KVlPMq08wIgdipZLvM6W5yK0I7kv2LVbp%2Bg6wTDZ3b%2FZQmqE8r3AnAqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqKw7PQePzScaBp8yrcA5ffqSg5pNsNvnhyVmAXbdV6dS%2BNElyTmfETvvep6bSaGM1OpN3dbuRPLjxlPdqpizbNPHwC0odht1ynEdUDPVE8iwQ%2F5iiYhKUt2Mng9XJ892%2F96rXdyvNk93A%2FPd3iA1PuErFai1DGEfZWBTMOGWzQJgN87clIgn7TL6uOqGYBSszRS6k1U7hdD3SAlcs6gqVMVTY27kvP%2BHDhFZo5u4sCynt77dkyQTTbRY0dZOZv3CTWH0lAVBy24bTRXR5ZCGqPaioL2SWYy0icnGH%2FLBh%2Fo2NEU%2FAnFucjeVcpyE2ZxtmWNVCkyyC2fGG0IoL5AwpIPhYh%2BowZIcFf2F%2FbARm54IHubsftZB8tQJ%2BHSRNvxMOSC7%2FVtkwD1OqJa2HmQe%2F0AUQmyQLxP4tlOqx5nSnPHK1XNUmImXvty4NERZrhjQCgWnFe7xWCyPZxXunH2kH4moneLWLxLoCBvts5v5ztAyoioqQEqBPM%2FQ0t2pw5r3940OsR%2FBq%2FJw6mgnYphnyhFimAoWZFAPxbUum%2BLcmCKfoE2PouS635ANmymC1eK9Kw7l0zO%2FaDAzAkdsTfFSeCBLDawNgv5mwK2dC%2Fv92JlrRMLBxOOkDRyk6zL2g9WLqSAPq%2FAzxfmspHMMPL478GOqUBL%2FQJQMceg0KcSNe7AI%2BU2tmZpV7ga9eJ3VQXKe26SI3G0GF0mEDhPtyYxa3YJVM1cwcI2E%2FJg4N4HTOTFopdTASXfD%2FvjGBDGDwx%2B0ule2m%2BSNcEQMDukx7GL7wjBYY7Fo2EBkKE3mvugM9uLy4pzl%2BOmMuRSg%2FHDqBzW4aj2KQZarIy4o7CsI957vUdxT4g5OgajZuRpYlTwpnOGqVtTAxQbYGt&X-Amz-Signature=d290df84045ceae6a3ba7518d195debb77a23fa6863846a29d0a7da76b8cb40f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2IYWTGC%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQC8aXBEjQ%2Fls%2FpmNB%2FfoUO4Ow9S7Bujue1p5KVlPMq08wIgdipZLvM6W5yK0I7kv2LVbp%2Bg6wTDZ3b%2FZQmqE8r3AnAqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqKw7PQePzScaBp8yrcA5ffqSg5pNsNvnhyVmAXbdV6dS%2BNElyTmfETvvep6bSaGM1OpN3dbuRPLjxlPdqpizbNPHwC0odht1ynEdUDPVE8iwQ%2F5iiYhKUt2Mng9XJ892%2F96rXdyvNk93A%2FPd3iA1PuErFai1DGEfZWBTMOGWzQJgN87clIgn7TL6uOqGYBSszRS6k1U7hdD3SAlcs6gqVMVTY27kvP%2BHDhFZo5u4sCynt77dkyQTTbRY0dZOZv3CTWH0lAVBy24bTRXR5ZCGqPaioL2SWYy0icnGH%2FLBh%2Fo2NEU%2FAnFucjeVcpyE2ZxtmWNVCkyyC2fGG0IoL5AwpIPhYh%2BowZIcFf2F%2FbARm54IHubsftZB8tQJ%2BHSRNvxMOSC7%2FVtkwD1OqJa2HmQe%2F0AUQmyQLxP4tlOqx5nSnPHK1XNUmImXvty4NERZrhjQCgWnFe7xWCyPZxXunH2kH4moneLWLxLoCBvts5v5ztAyoioqQEqBPM%2FQ0t2pw5r3940OsR%2FBq%2FJw6mgnYphnyhFimAoWZFAPxbUum%2BLcmCKfoE2PouS635ANmymC1eK9Kw7l0zO%2FaDAzAkdsTfFSeCBLDawNgv5mwK2dC%2Fv92JlrRMLBxOOkDRyk6zL2g9WLqSAPq%2FAzxfmspHMMPL478GOqUBL%2FQJQMceg0KcSNe7AI%2BU2tmZpV7ga9eJ3VQXKe26SI3G0GF0mEDhPtyYxa3YJVM1cwcI2E%2FJg4N4HTOTFopdTASXfD%2FvjGBDGDwx%2B0ule2m%2BSNcEQMDukx7GL7wjBYY7Fo2EBkKE3mvugM9uLy4pzl%2BOmMuRSg%2FHDqBzW4aj2KQZarIy4o7CsI957vUdxT4g5OgajZuRpYlTwpnOGqVtTAxQbYGt&X-Amz-Signature=e72016d778d4091eab9e33a327cfbe34edbb83a9e49728e896095c8c758b8e7b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2IYWTGC%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQC8aXBEjQ%2Fls%2FpmNB%2FfoUO4Ow9S7Bujue1p5KVlPMq08wIgdipZLvM6W5yK0I7kv2LVbp%2Bg6wTDZ3b%2FZQmqE8r3AnAqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqKw7PQePzScaBp8yrcA5ffqSg5pNsNvnhyVmAXbdV6dS%2BNElyTmfETvvep6bSaGM1OpN3dbuRPLjxlPdqpizbNPHwC0odht1ynEdUDPVE8iwQ%2F5iiYhKUt2Mng9XJ892%2F96rXdyvNk93A%2FPd3iA1PuErFai1DGEfZWBTMOGWzQJgN87clIgn7TL6uOqGYBSszRS6k1U7hdD3SAlcs6gqVMVTY27kvP%2BHDhFZo5u4sCynt77dkyQTTbRY0dZOZv3CTWH0lAVBy24bTRXR5ZCGqPaioL2SWYy0icnGH%2FLBh%2Fo2NEU%2FAnFucjeVcpyE2ZxtmWNVCkyyC2fGG0IoL5AwpIPhYh%2BowZIcFf2F%2FbARm54IHubsftZB8tQJ%2BHSRNvxMOSC7%2FVtkwD1OqJa2HmQe%2F0AUQmyQLxP4tlOqx5nSnPHK1XNUmImXvty4NERZrhjQCgWnFe7xWCyPZxXunH2kH4moneLWLxLoCBvts5v5ztAyoioqQEqBPM%2FQ0t2pw5r3940OsR%2FBq%2FJw6mgnYphnyhFimAoWZFAPxbUum%2BLcmCKfoE2PouS635ANmymC1eK9Kw7l0zO%2FaDAzAkdsTfFSeCBLDawNgv5mwK2dC%2Fv92JlrRMLBxOOkDRyk6zL2g9WLqSAPq%2FAzxfmspHMMPL478GOqUBL%2FQJQMceg0KcSNe7AI%2BU2tmZpV7ga9eJ3VQXKe26SI3G0GF0mEDhPtyYxa3YJVM1cwcI2E%2FJg4N4HTOTFopdTASXfD%2FvjGBDGDwx%2B0ule2m%2BSNcEQMDukx7GL7wjBYY7Fo2EBkKE3mvugM9uLy4pzl%2BOmMuRSg%2FHDqBzW4aj2KQZarIy4o7CsI957vUdxT4g5OgajZuRpYlTwpnOGqVtTAxQbYGt&X-Amz-Signature=decc75a86c033d1f7b1e2bda77a535eaa2afaaef0ce1380816a077b710cd7da9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2IYWTGC%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQC8aXBEjQ%2Fls%2FpmNB%2FfoUO4Ow9S7Bujue1p5KVlPMq08wIgdipZLvM6W5yK0I7kv2LVbp%2Bg6wTDZ3b%2FZQmqE8r3AnAqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqKw7PQePzScaBp8yrcA5ffqSg5pNsNvnhyVmAXbdV6dS%2BNElyTmfETvvep6bSaGM1OpN3dbuRPLjxlPdqpizbNPHwC0odht1ynEdUDPVE8iwQ%2F5iiYhKUt2Mng9XJ892%2F96rXdyvNk93A%2FPd3iA1PuErFai1DGEfZWBTMOGWzQJgN87clIgn7TL6uOqGYBSszRS6k1U7hdD3SAlcs6gqVMVTY27kvP%2BHDhFZo5u4sCynt77dkyQTTbRY0dZOZv3CTWH0lAVBy24bTRXR5ZCGqPaioL2SWYy0icnGH%2FLBh%2Fo2NEU%2FAnFucjeVcpyE2ZxtmWNVCkyyC2fGG0IoL5AwpIPhYh%2BowZIcFf2F%2FbARm54IHubsftZB8tQJ%2BHSRNvxMOSC7%2FVtkwD1OqJa2HmQe%2F0AUQmyQLxP4tlOqx5nSnPHK1XNUmImXvty4NERZrhjQCgWnFe7xWCyPZxXunH2kH4moneLWLxLoCBvts5v5ztAyoioqQEqBPM%2FQ0t2pw5r3940OsR%2FBq%2FJw6mgnYphnyhFimAoWZFAPxbUum%2BLcmCKfoE2PouS635ANmymC1eK9Kw7l0zO%2FaDAzAkdsTfFSeCBLDawNgv5mwK2dC%2Fv92JlrRMLBxOOkDRyk6zL2g9WLqSAPq%2FAzxfmspHMMPL478GOqUBL%2FQJQMceg0KcSNe7AI%2BU2tmZpV7ga9eJ3VQXKe26SI3G0GF0mEDhPtyYxa3YJVM1cwcI2E%2FJg4N4HTOTFopdTASXfD%2FvjGBDGDwx%2B0ule2m%2BSNcEQMDukx7GL7wjBYY7Fo2EBkKE3mvugM9uLy4pzl%2BOmMuRSg%2FHDqBzW4aj2KQZarIy4o7CsI957vUdxT4g5OgajZuRpYlTwpnOGqVtTAxQbYGt&X-Amz-Signature=d76cddc77e1e12fa118da66a780656d06708d6740530cb021bb9ded557c795f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2IYWTGC%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQC8aXBEjQ%2Fls%2FpmNB%2FfoUO4Ow9S7Bujue1p5KVlPMq08wIgdipZLvM6W5yK0I7kv2LVbp%2Bg6wTDZ3b%2FZQmqE8r3AnAqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqKw7PQePzScaBp8yrcA5ffqSg5pNsNvnhyVmAXbdV6dS%2BNElyTmfETvvep6bSaGM1OpN3dbuRPLjxlPdqpizbNPHwC0odht1ynEdUDPVE8iwQ%2F5iiYhKUt2Mng9XJ892%2F96rXdyvNk93A%2FPd3iA1PuErFai1DGEfZWBTMOGWzQJgN87clIgn7TL6uOqGYBSszRS6k1U7hdD3SAlcs6gqVMVTY27kvP%2BHDhFZo5u4sCynt77dkyQTTbRY0dZOZv3CTWH0lAVBy24bTRXR5ZCGqPaioL2SWYy0icnGH%2FLBh%2Fo2NEU%2FAnFucjeVcpyE2ZxtmWNVCkyyC2fGG0IoL5AwpIPhYh%2BowZIcFf2F%2FbARm54IHubsftZB8tQJ%2BHSRNvxMOSC7%2FVtkwD1OqJa2HmQe%2F0AUQmyQLxP4tlOqx5nSnPHK1XNUmImXvty4NERZrhjQCgWnFe7xWCyPZxXunH2kH4moneLWLxLoCBvts5v5ztAyoioqQEqBPM%2FQ0t2pw5r3940OsR%2FBq%2FJw6mgnYphnyhFimAoWZFAPxbUum%2BLcmCKfoE2PouS635ANmymC1eK9Kw7l0zO%2FaDAzAkdsTfFSeCBLDawNgv5mwK2dC%2Fv92JlrRMLBxOOkDRyk6zL2g9WLqSAPq%2FAzxfmspHMMPL478GOqUBL%2FQJQMceg0KcSNe7AI%2BU2tmZpV7ga9eJ3VQXKe26SI3G0GF0mEDhPtyYxa3YJVM1cwcI2E%2FJg4N4HTOTFopdTASXfD%2FvjGBDGDwx%2B0ule2m%2BSNcEQMDukx7GL7wjBYY7Fo2EBkKE3mvugM9uLy4pzl%2BOmMuRSg%2FHDqBzW4aj2KQZarIy4o7CsI957vUdxT4g5OgajZuRpYlTwpnOGqVtTAxQbYGt&X-Amz-Signature=d56a2b3e035c80f797171491f958ae27151c6cb3100d58b2c91466211cfd37b5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2IYWTGC%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQC8aXBEjQ%2Fls%2FpmNB%2FfoUO4Ow9S7Bujue1p5KVlPMq08wIgdipZLvM6W5yK0I7kv2LVbp%2Bg6wTDZ3b%2FZQmqE8r3AnAqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqKw7PQePzScaBp8yrcA5ffqSg5pNsNvnhyVmAXbdV6dS%2BNElyTmfETvvep6bSaGM1OpN3dbuRPLjxlPdqpizbNPHwC0odht1ynEdUDPVE8iwQ%2F5iiYhKUt2Mng9XJ892%2F96rXdyvNk93A%2FPd3iA1PuErFai1DGEfZWBTMOGWzQJgN87clIgn7TL6uOqGYBSszRS6k1U7hdD3SAlcs6gqVMVTY27kvP%2BHDhFZo5u4sCynt77dkyQTTbRY0dZOZv3CTWH0lAVBy24bTRXR5ZCGqPaioL2SWYy0icnGH%2FLBh%2Fo2NEU%2FAnFucjeVcpyE2ZxtmWNVCkyyC2fGG0IoL5AwpIPhYh%2BowZIcFf2F%2FbARm54IHubsftZB8tQJ%2BHSRNvxMOSC7%2FVtkwD1OqJa2HmQe%2F0AUQmyQLxP4tlOqx5nSnPHK1XNUmImXvty4NERZrhjQCgWnFe7xWCyPZxXunH2kH4moneLWLxLoCBvts5v5ztAyoioqQEqBPM%2FQ0t2pw5r3940OsR%2FBq%2FJw6mgnYphnyhFimAoWZFAPxbUum%2BLcmCKfoE2PouS635ANmymC1eK9Kw7l0zO%2FaDAzAkdsTfFSeCBLDawNgv5mwK2dC%2Fv92JlrRMLBxOOkDRyk6zL2g9WLqSAPq%2FAzxfmspHMMPL478GOqUBL%2FQJQMceg0KcSNe7AI%2BU2tmZpV7ga9eJ3VQXKe26SI3G0GF0mEDhPtyYxa3YJVM1cwcI2E%2FJg4N4HTOTFopdTASXfD%2FvjGBDGDwx%2B0ule2m%2BSNcEQMDukx7GL7wjBYY7Fo2EBkKE3mvugM9uLy4pzl%2BOmMuRSg%2FHDqBzW4aj2KQZarIy4o7CsI957vUdxT4g5OgajZuRpYlTwpnOGqVtTAxQbYGt&X-Amz-Signature=8cf43078f5d39a92c0095268f3ef23442ac3936bc947548c52b154be92a3db93&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2IYWTGC%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQC8aXBEjQ%2Fls%2FpmNB%2FfoUO4Ow9S7Bujue1p5KVlPMq08wIgdipZLvM6W5yK0I7kv2LVbp%2Bg6wTDZ3b%2FZQmqE8r3AnAqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqKw7PQePzScaBp8yrcA5ffqSg5pNsNvnhyVmAXbdV6dS%2BNElyTmfETvvep6bSaGM1OpN3dbuRPLjxlPdqpizbNPHwC0odht1ynEdUDPVE8iwQ%2F5iiYhKUt2Mng9XJ892%2F96rXdyvNk93A%2FPd3iA1PuErFai1DGEfZWBTMOGWzQJgN87clIgn7TL6uOqGYBSszRS6k1U7hdD3SAlcs6gqVMVTY27kvP%2BHDhFZo5u4sCynt77dkyQTTbRY0dZOZv3CTWH0lAVBy24bTRXR5ZCGqPaioL2SWYy0icnGH%2FLBh%2Fo2NEU%2FAnFucjeVcpyE2ZxtmWNVCkyyC2fGG0IoL5AwpIPhYh%2BowZIcFf2F%2FbARm54IHubsftZB8tQJ%2BHSRNvxMOSC7%2FVtkwD1OqJa2HmQe%2F0AUQmyQLxP4tlOqx5nSnPHK1XNUmImXvty4NERZrhjQCgWnFe7xWCyPZxXunH2kH4moneLWLxLoCBvts5v5ztAyoioqQEqBPM%2FQ0t2pw5r3940OsR%2FBq%2FJw6mgnYphnyhFimAoWZFAPxbUum%2BLcmCKfoE2PouS635ANmymC1eK9Kw7l0zO%2FaDAzAkdsTfFSeCBLDawNgv5mwK2dC%2Fv92JlrRMLBxOOkDRyk6zL2g9WLqSAPq%2FAzxfmspHMMPL478GOqUBL%2FQJQMceg0KcSNe7AI%2BU2tmZpV7ga9eJ3VQXKe26SI3G0GF0mEDhPtyYxa3YJVM1cwcI2E%2FJg4N4HTOTFopdTASXfD%2FvjGBDGDwx%2B0ule2m%2BSNcEQMDukx7GL7wjBYY7Fo2EBkKE3mvugM9uLy4pzl%2BOmMuRSg%2FHDqBzW4aj2KQZarIy4o7CsI957vUdxT4g5OgajZuRpYlTwpnOGqVtTAxQbYGt&X-Amz-Signature=9ace814490b00510222e884da314390b354f8139961f7c6834881bcf67fec137&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2IYWTGC%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQC8aXBEjQ%2Fls%2FpmNB%2FfoUO4Ow9S7Bujue1p5KVlPMq08wIgdipZLvM6W5yK0I7kv2LVbp%2Bg6wTDZ3b%2FZQmqE8r3AnAqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqKw7PQePzScaBp8yrcA5ffqSg5pNsNvnhyVmAXbdV6dS%2BNElyTmfETvvep6bSaGM1OpN3dbuRPLjxlPdqpizbNPHwC0odht1ynEdUDPVE8iwQ%2F5iiYhKUt2Mng9XJ892%2F96rXdyvNk93A%2FPd3iA1PuErFai1DGEfZWBTMOGWzQJgN87clIgn7TL6uOqGYBSszRS6k1U7hdD3SAlcs6gqVMVTY27kvP%2BHDhFZo5u4sCynt77dkyQTTbRY0dZOZv3CTWH0lAVBy24bTRXR5ZCGqPaioL2SWYy0icnGH%2FLBh%2Fo2NEU%2FAnFucjeVcpyE2ZxtmWNVCkyyC2fGG0IoL5AwpIPhYh%2BowZIcFf2F%2FbARm54IHubsftZB8tQJ%2BHSRNvxMOSC7%2FVtkwD1OqJa2HmQe%2F0AUQmyQLxP4tlOqx5nSnPHK1XNUmImXvty4NERZrhjQCgWnFe7xWCyPZxXunH2kH4moneLWLxLoCBvts5v5ztAyoioqQEqBPM%2FQ0t2pw5r3940OsR%2FBq%2FJw6mgnYphnyhFimAoWZFAPxbUum%2BLcmCKfoE2PouS635ANmymC1eK9Kw7l0zO%2FaDAzAkdsTfFSeCBLDawNgv5mwK2dC%2Fv92JlrRMLBxOOkDRyk6zL2g9WLqSAPq%2FAzxfmspHMMPL478GOqUBL%2FQJQMceg0KcSNe7AI%2BU2tmZpV7ga9eJ3VQXKe26SI3G0GF0mEDhPtyYxa3YJVM1cwcI2E%2FJg4N4HTOTFopdTASXfD%2FvjGBDGDwx%2B0ule2m%2BSNcEQMDukx7GL7wjBYY7Fo2EBkKE3mvugM9uLy4pzl%2BOmMuRSg%2FHDqBzW4aj2KQZarIy4o7CsI957vUdxT4g5OgajZuRpYlTwpnOGqVtTAxQbYGt&X-Amz-Signature=96f1a73645ec00d2be98de070cf42ca12b962267c960f1b7b033c28eecae0ff1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
