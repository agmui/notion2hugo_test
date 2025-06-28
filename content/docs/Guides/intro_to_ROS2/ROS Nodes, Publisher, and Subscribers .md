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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USO2XGQO%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2BquJBmMTg5qPXTuK1bLFj1VUYjrc2zjaTbF7Lv0ghJAiEAo3uhsDkl2M9gY7dnlB3WCnqQurxp0kFt89ihtY18UJIqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3%2B0DX4oCS26AXteSrcA3SRyzl9VRydiHO%2F25crGVsQ%2BYMM%2BHm%2BVfJkFUT8%2BGASJttFrX9ivPGiiZLajO%2B3yQYLSuQK%2BEw%2Fvg3AnyhSjGvYqyFw6umTw5aRxxgQtQOqun0R%2BmFZymaBoJhZTh%2BiPGO8N89YYJ%2B25fd1%2BSBZwXCJntOERdgouxd77Eo8i4rukTHmSwn0ZHhRaiEng%2F68SrS9bOJrzufVuZQh3sxvsZjTKq1zwIlivAPmpbqfU4mbDdYwGUjLKD%2BWLkHAs8SldqcSnto3XszI9QndpoPgOzvarF%2B0iFisXmLTeNTO%2Bg4gyKvTj%2BJL0iSGnzbTdlt3jP%2FgEfgB%2F6cdVhRpXnX4K2aMNVbdwrlY4mr%2FnZxVPXt3jrlfjjfxFkchhFW5j2ijgI9AWtrGT5sCElLutNsgFWp0lfonesjji29R5LGNk5vu4SOF31PV2LiD4IHp7VSWw9nlFC2Om6TSp04wX9VzmGI5fiw86VbaZ%2FO%2F4AUREaUcafQvaq0rTsLtKBLysYxmkGHmKxMeo1xAW6GAiHlvg0hoY6aMe8qrJwe4M6HnISbBHi34zuIYhH34GUhrA72N%2FCkimOuD3ts%2F4ibKhjm%2F2Yj518%2FHIi1pAVXEO6Wwmaqm5vlFzGm6rKQ%2F7sbuMLL0gMMGOqUBPiiy%2BuKCjDf4o%2Bhxi3he9jDzWLGQDQcg1wlcNuGUlkPEx8Nrj7USxjkUu%2BZmBFOTcHVdmJ5XJKlwdKNTg5WIQSwBw6lDNtpS4PVl%2BcLBCOTQg%2BUh4oR2aRCFVdpQtHKE%2BOtW7nolwy%2BKXH1ogNvaReEIiKFOVD2n658XXOlkbwGt%2BZ76Ny6MthfdyGRKszPbV0B3HwY4mdhO0SVCiCFAh%2FKhLgUo&X-Amz-Signature=963a4002d7e6528654983bab97ea6fd9a74f3b9bb4c69eaa5e7b47ea8f7d4bbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USO2XGQO%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2BquJBmMTg5qPXTuK1bLFj1VUYjrc2zjaTbF7Lv0ghJAiEAo3uhsDkl2M9gY7dnlB3WCnqQurxp0kFt89ihtY18UJIqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3%2B0DX4oCS26AXteSrcA3SRyzl9VRydiHO%2F25crGVsQ%2BYMM%2BHm%2BVfJkFUT8%2BGASJttFrX9ivPGiiZLajO%2B3yQYLSuQK%2BEw%2Fvg3AnyhSjGvYqyFw6umTw5aRxxgQtQOqun0R%2BmFZymaBoJhZTh%2BiPGO8N89YYJ%2B25fd1%2BSBZwXCJntOERdgouxd77Eo8i4rukTHmSwn0ZHhRaiEng%2F68SrS9bOJrzufVuZQh3sxvsZjTKq1zwIlivAPmpbqfU4mbDdYwGUjLKD%2BWLkHAs8SldqcSnto3XszI9QndpoPgOzvarF%2B0iFisXmLTeNTO%2Bg4gyKvTj%2BJL0iSGnzbTdlt3jP%2FgEfgB%2F6cdVhRpXnX4K2aMNVbdwrlY4mr%2FnZxVPXt3jrlfjjfxFkchhFW5j2ijgI9AWtrGT5sCElLutNsgFWp0lfonesjji29R5LGNk5vu4SOF31PV2LiD4IHp7VSWw9nlFC2Om6TSp04wX9VzmGI5fiw86VbaZ%2FO%2F4AUREaUcafQvaq0rTsLtKBLysYxmkGHmKxMeo1xAW6GAiHlvg0hoY6aMe8qrJwe4M6HnISbBHi34zuIYhH34GUhrA72N%2FCkimOuD3ts%2F4ibKhjm%2F2Yj518%2FHIi1pAVXEO6Wwmaqm5vlFzGm6rKQ%2F7sbuMLL0gMMGOqUBPiiy%2BuKCjDf4o%2Bhxi3he9jDzWLGQDQcg1wlcNuGUlkPEx8Nrj7USxjkUu%2BZmBFOTcHVdmJ5XJKlwdKNTg5WIQSwBw6lDNtpS4PVl%2BcLBCOTQg%2BUh4oR2aRCFVdpQtHKE%2BOtW7nolwy%2BKXH1ogNvaReEIiKFOVD2n658XXOlkbwGt%2BZ76Ny6MthfdyGRKszPbV0B3HwY4mdhO0SVCiCFAh%2FKhLgUo&X-Amz-Signature=0f800c4eebd1e491daa6a7d01c0c5da957e504c1d6eca1ec4065ff7b6b2f0445&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USO2XGQO%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2BquJBmMTg5qPXTuK1bLFj1VUYjrc2zjaTbF7Lv0ghJAiEAo3uhsDkl2M9gY7dnlB3WCnqQurxp0kFt89ihtY18UJIqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3%2B0DX4oCS26AXteSrcA3SRyzl9VRydiHO%2F25crGVsQ%2BYMM%2BHm%2BVfJkFUT8%2BGASJttFrX9ivPGiiZLajO%2B3yQYLSuQK%2BEw%2Fvg3AnyhSjGvYqyFw6umTw5aRxxgQtQOqun0R%2BmFZymaBoJhZTh%2BiPGO8N89YYJ%2B25fd1%2BSBZwXCJntOERdgouxd77Eo8i4rukTHmSwn0ZHhRaiEng%2F68SrS9bOJrzufVuZQh3sxvsZjTKq1zwIlivAPmpbqfU4mbDdYwGUjLKD%2BWLkHAs8SldqcSnto3XszI9QndpoPgOzvarF%2B0iFisXmLTeNTO%2Bg4gyKvTj%2BJL0iSGnzbTdlt3jP%2FgEfgB%2F6cdVhRpXnX4K2aMNVbdwrlY4mr%2FnZxVPXt3jrlfjjfxFkchhFW5j2ijgI9AWtrGT5sCElLutNsgFWp0lfonesjji29R5LGNk5vu4SOF31PV2LiD4IHp7VSWw9nlFC2Om6TSp04wX9VzmGI5fiw86VbaZ%2FO%2F4AUREaUcafQvaq0rTsLtKBLysYxmkGHmKxMeo1xAW6GAiHlvg0hoY6aMe8qrJwe4M6HnISbBHi34zuIYhH34GUhrA72N%2FCkimOuD3ts%2F4ibKhjm%2F2Yj518%2FHIi1pAVXEO6Wwmaqm5vlFzGm6rKQ%2F7sbuMLL0gMMGOqUBPiiy%2BuKCjDf4o%2Bhxi3he9jDzWLGQDQcg1wlcNuGUlkPEx8Nrj7USxjkUu%2BZmBFOTcHVdmJ5XJKlwdKNTg5WIQSwBw6lDNtpS4PVl%2BcLBCOTQg%2BUh4oR2aRCFVdpQtHKE%2BOtW7nolwy%2BKXH1ogNvaReEIiKFOVD2n658XXOlkbwGt%2BZ76Ny6MthfdyGRKszPbV0B3HwY4mdhO0SVCiCFAh%2FKhLgUo&X-Amz-Signature=0d990173fb550ba630eac7fb05c685f0d02b767f676be516394082b26496c22e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USO2XGQO%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2BquJBmMTg5qPXTuK1bLFj1VUYjrc2zjaTbF7Lv0ghJAiEAo3uhsDkl2M9gY7dnlB3WCnqQurxp0kFt89ihtY18UJIqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3%2B0DX4oCS26AXteSrcA3SRyzl9VRydiHO%2F25crGVsQ%2BYMM%2BHm%2BVfJkFUT8%2BGASJttFrX9ivPGiiZLajO%2B3yQYLSuQK%2BEw%2Fvg3AnyhSjGvYqyFw6umTw5aRxxgQtQOqun0R%2BmFZymaBoJhZTh%2BiPGO8N89YYJ%2B25fd1%2BSBZwXCJntOERdgouxd77Eo8i4rukTHmSwn0ZHhRaiEng%2F68SrS9bOJrzufVuZQh3sxvsZjTKq1zwIlivAPmpbqfU4mbDdYwGUjLKD%2BWLkHAs8SldqcSnto3XszI9QndpoPgOzvarF%2B0iFisXmLTeNTO%2Bg4gyKvTj%2BJL0iSGnzbTdlt3jP%2FgEfgB%2F6cdVhRpXnX4K2aMNVbdwrlY4mr%2FnZxVPXt3jrlfjjfxFkchhFW5j2ijgI9AWtrGT5sCElLutNsgFWp0lfonesjji29R5LGNk5vu4SOF31PV2LiD4IHp7VSWw9nlFC2Om6TSp04wX9VzmGI5fiw86VbaZ%2FO%2F4AUREaUcafQvaq0rTsLtKBLysYxmkGHmKxMeo1xAW6GAiHlvg0hoY6aMe8qrJwe4M6HnISbBHi34zuIYhH34GUhrA72N%2FCkimOuD3ts%2F4ibKhjm%2F2Yj518%2FHIi1pAVXEO6Wwmaqm5vlFzGm6rKQ%2F7sbuMLL0gMMGOqUBPiiy%2BuKCjDf4o%2Bhxi3he9jDzWLGQDQcg1wlcNuGUlkPEx8Nrj7USxjkUu%2BZmBFOTcHVdmJ5XJKlwdKNTg5WIQSwBw6lDNtpS4PVl%2BcLBCOTQg%2BUh4oR2aRCFVdpQtHKE%2BOtW7nolwy%2BKXH1ogNvaReEIiKFOVD2n658XXOlkbwGt%2BZ76Ny6MthfdyGRKszPbV0B3HwY4mdhO0SVCiCFAh%2FKhLgUo&X-Amz-Signature=afe51986a73f72664d23ec4f87cc01058227514298cb98de2e164312d0f0d783&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USO2XGQO%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2BquJBmMTg5qPXTuK1bLFj1VUYjrc2zjaTbF7Lv0ghJAiEAo3uhsDkl2M9gY7dnlB3WCnqQurxp0kFt89ihtY18UJIqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3%2B0DX4oCS26AXteSrcA3SRyzl9VRydiHO%2F25crGVsQ%2BYMM%2BHm%2BVfJkFUT8%2BGASJttFrX9ivPGiiZLajO%2B3yQYLSuQK%2BEw%2Fvg3AnyhSjGvYqyFw6umTw5aRxxgQtQOqun0R%2BmFZymaBoJhZTh%2BiPGO8N89YYJ%2B25fd1%2BSBZwXCJntOERdgouxd77Eo8i4rukTHmSwn0ZHhRaiEng%2F68SrS9bOJrzufVuZQh3sxvsZjTKq1zwIlivAPmpbqfU4mbDdYwGUjLKD%2BWLkHAs8SldqcSnto3XszI9QndpoPgOzvarF%2B0iFisXmLTeNTO%2Bg4gyKvTj%2BJL0iSGnzbTdlt3jP%2FgEfgB%2F6cdVhRpXnX4K2aMNVbdwrlY4mr%2FnZxVPXt3jrlfjjfxFkchhFW5j2ijgI9AWtrGT5sCElLutNsgFWp0lfonesjji29R5LGNk5vu4SOF31PV2LiD4IHp7VSWw9nlFC2Om6TSp04wX9VzmGI5fiw86VbaZ%2FO%2F4AUREaUcafQvaq0rTsLtKBLysYxmkGHmKxMeo1xAW6GAiHlvg0hoY6aMe8qrJwe4M6HnISbBHi34zuIYhH34GUhrA72N%2FCkimOuD3ts%2F4ibKhjm%2F2Yj518%2FHIi1pAVXEO6Wwmaqm5vlFzGm6rKQ%2F7sbuMLL0gMMGOqUBPiiy%2BuKCjDf4o%2Bhxi3he9jDzWLGQDQcg1wlcNuGUlkPEx8Nrj7USxjkUu%2BZmBFOTcHVdmJ5XJKlwdKNTg5WIQSwBw6lDNtpS4PVl%2BcLBCOTQg%2BUh4oR2aRCFVdpQtHKE%2BOtW7nolwy%2BKXH1ogNvaReEIiKFOVD2n658XXOlkbwGt%2BZ76Ny6MthfdyGRKszPbV0B3HwY4mdhO0SVCiCFAh%2FKhLgUo&X-Amz-Signature=ea51b4861b115a1779f3c7b47644c7648e427f615940163dc0c39c2465a4706d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USO2XGQO%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2BquJBmMTg5qPXTuK1bLFj1VUYjrc2zjaTbF7Lv0ghJAiEAo3uhsDkl2M9gY7dnlB3WCnqQurxp0kFt89ihtY18UJIqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3%2B0DX4oCS26AXteSrcA3SRyzl9VRydiHO%2F25crGVsQ%2BYMM%2BHm%2BVfJkFUT8%2BGASJttFrX9ivPGiiZLajO%2B3yQYLSuQK%2BEw%2Fvg3AnyhSjGvYqyFw6umTw5aRxxgQtQOqun0R%2BmFZymaBoJhZTh%2BiPGO8N89YYJ%2B25fd1%2BSBZwXCJntOERdgouxd77Eo8i4rukTHmSwn0ZHhRaiEng%2F68SrS9bOJrzufVuZQh3sxvsZjTKq1zwIlivAPmpbqfU4mbDdYwGUjLKD%2BWLkHAs8SldqcSnto3XszI9QndpoPgOzvarF%2B0iFisXmLTeNTO%2Bg4gyKvTj%2BJL0iSGnzbTdlt3jP%2FgEfgB%2F6cdVhRpXnX4K2aMNVbdwrlY4mr%2FnZxVPXt3jrlfjjfxFkchhFW5j2ijgI9AWtrGT5sCElLutNsgFWp0lfonesjji29R5LGNk5vu4SOF31PV2LiD4IHp7VSWw9nlFC2Om6TSp04wX9VzmGI5fiw86VbaZ%2FO%2F4AUREaUcafQvaq0rTsLtKBLysYxmkGHmKxMeo1xAW6GAiHlvg0hoY6aMe8qrJwe4M6HnISbBHi34zuIYhH34GUhrA72N%2FCkimOuD3ts%2F4ibKhjm%2F2Yj518%2FHIi1pAVXEO6Wwmaqm5vlFzGm6rKQ%2F7sbuMLL0gMMGOqUBPiiy%2BuKCjDf4o%2Bhxi3he9jDzWLGQDQcg1wlcNuGUlkPEx8Nrj7USxjkUu%2BZmBFOTcHVdmJ5XJKlwdKNTg5WIQSwBw6lDNtpS4PVl%2BcLBCOTQg%2BUh4oR2aRCFVdpQtHKE%2BOtW7nolwy%2BKXH1ogNvaReEIiKFOVD2n658XXOlkbwGt%2BZ76Ny6MthfdyGRKszPbV0B3HwY4mdhO0SVCiCFAh%2FKhLgUo&X-Amz-Signature=4155b5b4157b04acebbb2c1899d08858c4c97329a9880a07aa12826e1bf5bfa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USO2XGQO%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2BquJBmMTg5qPXTuK1bLFj1VUYjrc2zjaTbF7Lv0ghJAiEAo3uhsDkl2M9gY7dnlB3WCnqQurxp0kFt89ihtY18UJIqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3%2B0DX4oCS26AXteSrcA3SRyzl9VRydiHO%2F25crGVsQ%2BYMM%2BHm%2BVfJkFUT8%2BGASJttFrX9ivPGiiZLajO%2B3yQYLSuQK%2BEw%2Fvg3AnyhSjGvYqyFw6umTw5aRxxgQtQOqun0R%2BmFZymaBoJhZTh%2BiPGO8N89YYJ%2B25fd1%2BSBZwXCJntOERdgouxd77Eo8i4rukTHmSwn0ZHhRaiEng%2F68SrS9bOJrzufVuZQh3sxvsZjTKq1zwIlivAPmpbqfU4mbDdYwGUjLKD%2BWLkHAs8SldqcSnto3XszI9QndpoPgOzvarF%2B0iFisXmLTeNTO%2Bg4gyKvTj%2BJL0iSGnzbTdlt3jP%2FgEfgB%2F6cdVhRpXnX4K2aMNVbdwrlY4mr%2FnZxVPXt3jrlfjjfxFkchhFW5j2ijgI9AWtrGT5sCElLutNsgFWp0lfonesjji29R5LGNk5vu4SOF31PV2LiD4IHp7VSWw9nlFC2Om6TSp04wX9VzmGI5fiw86VbaZ%2FO%2F4AUREaUcafQvaq0rTsLtKBLysYxmkGHmKxMeo1xAW6GAiHlvg0hoY6aMe8qrJwe4M6HnISbBHi34zuIYhH34GUhrA72N%2FCkimOuD3ts%2F4ibKhjm%2F2Yj518%2FHIi1pAVXEO6Wwmaqm5vlFzGm6rKQ%2F7sbuMLL0gMMGOqUBPiiy%2BuKCjDf4o%2Bhxi3he9jDzWLGQDQcg1wlcNuGUlkPEx8Nrj7USxjkUu%2BZmBFOTcHVdmJ5XJKlwdKNTg5WIQSwBw6lDNtpS4PVl%2BcLBCOTQg%2BUh4oR2aRCFVdpQtHKE%2BOtW7nolwy%2BKXH1ogNvaReEIiKFOVD2n658XXOlkbwGt%2BZ76Ny6MthfdyGRKszPbV0B3HwY4mdhO0SVCiCFAh%2FKhLgUo&X-Amz-Signature=33d3fcda72656658a426c23734544183f9ef698e2f5ea87481ce4a1543e06480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USO2XGQO%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2BquJBmMTg5qPXTuK1bLFj1VUYjrc2zjaTbF7Lv0ghJAiEAo3uhsDkl2M9gY7dnlB3WCnqQurxp0kFt89ihtY18UJIqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3%2B0DX4oCS26AXteSrcA3SRyzl9VRydiHO%2F25crGVsQ%2BYMM%2BHm%2BVfJkFUT8%2BGASJttFrX9ivPGiiZLajO%2B3yQYLSuQK%2BEw%2Fvg3AnyhSjGvYqyFw6umTw5aRxxgQtQOqun0R%2BmFZymaBoJhZTh%2BiPGO8N89YYJ%2B25fd1%2BSBZwXCJntOERdgouxd77Eo8i4rukTHmSwn0ZHhRaiEng%2F68SrS9bOJrzufVuZQh3sxvsZjTKq1zwIlivAPmpbqfU4mbDdYwGUjLKD%2BWLkHAs8SldqcSnto3XszI9QndpoPgOzvarF%2B0iFisXmLTeNTO%2Bg4gyKvTj%2BJL0iSGnzbTdlt3jP%2FgEfgB%2F6cdVhRpXnX4K2aMNVbdwrlY4mr%2FnZxVPXt3jrlfjjfxFkchhFW5j2ijgI9AWtrGT5sCElLutNsgFWp0lfonesjji29R5LGNk5vu4SOF31PV2LiD4IHp7VSWw9nlFC2Om6TSp04wX9VzmGI5fiw86VbaZ%2FO%2F4AUREaUcafQvaq0rTsLtKBLysYxmkGHmKxMeo1xAW6GAiHlvg0hoY6aMe8qrJwe4M6HnISbBHi34zuIYhH34GUhrA72N%2FCkimOuD3ts%2F4ibKhjm%2F2Yj518%2FHIi1pAVXEO6Wwmaqm5vlFzGm6rKQ%2F7sbuMLL0gMMGOqUBPiiy%2BuKCjDf4o%2Bhxi3he9jDzWLGQDQcg1wlcNuGUlkPEx8Nrj7USxjkUu%2BZmBFOTcHVdmJ5XJKlwdKNTg5WIQSwBw6lDNtpS4PVl%2BcLBCOTQg%2BUh4oR2aRCFVdpQtHKE%2BOtW7nolwy%2BKXH1ogNvaReEIiKFOVD2n658XXOlkbwGt%2BZ76Ny6MthfdyGRKszPbV0B3HwY4mdhO0SVCiCFAh%2FKhLgUo&X-Amz-Signature=160fbf56a0571596301af48d6fdaeb9d1685ce59b0344d602682482491b9cb57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
