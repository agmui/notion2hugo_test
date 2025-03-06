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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUZQMUQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7YOQ0Xb4aoDWWAVvgIZwDNr630RFz9j0wmrfrH9p0YwIga8BDUC1%2FHR36EgFCTEcC9T3S5TEizOVClxoWiWZYvlkq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPi7mAefFmy1TQMQ3yrcA0jV8nVq71Tp8VmHn6yAXklma0ZaPRcvDS20i6dOcnk9lVIK46Uu3wa7kszwJVat6Bozq1FmOA%2Bcg0IPtfAsvqkj%2F2LD%2BVoKdRA650BRuAYa5w%2F7i2kTGKUpZXeVSN1daDM%2Bzs0YBAa3ll9RLmFYn6n76HlQ%2FIxidNL%2BNpYMwiow2I%2FKENtXs5N9xOZ7TfR%2Bqoy%2BVXT1UvzXaL7324y%2BPtwSj%2BBHCmaa0DIjHdM7LTrGwN0uIo7Q1enktIW7zEKlQqICSJZxiHPE6LCgrzwrQ%2F6xV0JP%2BvIrlu1985llxbCAKPqW97GkndYNf3m%2FC%2BytZSCWedW%2FVYQemOFt8xqI1IpGCOX03BFiCcuVYM3kE1fb9sUzXp0jMzqtTQWuIOgaUCIjFRMgjJFnEVffYARpAjaI6a8ujd8NLSsUng%2FW2j5%2FVjHMb2yG3co1VGrDVq77OOoT5U%2FJNRyeeGOm1cx3pn9ZQ7KAnveCAlbEJGH0rDrzslwSVCOFm4222Y9IRaJjy2FN4WbJnew5S%2FVNThYj9zJE6OUEMJw4fry9YPtYX2qbLyqwCK5NVwrvkDbC8N6T4Lnxn%2FGF%2F%2FKyft1NYuc%2BtrHPSOiBI6XCSJg5UliNyAJH%2BPWGebM9ge8BRpeOMO%2FIqL4GOqUBD2etBy%2Fa0ibLdGTcdtPgBPBDZfD1P%2BlIEy3jQr8DGRv2hGIPinxW80LhJymLXItWTz9JUI80IFM3GXBu9ViP2F7q5PLHT4NwrCyTHb4aBI%2FydyMQoqEJ0ZTAbUQEvODlYj4PuBSH0UO4zHEA2doCI%2FPtzqCj%2BcdgVAP723iNqfOpU6qiVNjU1uiDzSWEVrGBHqmKjJHh58%2BHo5tXDQwmJpA8REgr&X-Amz-Signature=82dc17d524edb191dab996cc3a3765d0e9f047c2fa017d47939de023eed420e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUZQMUQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7YOQ0Xb4aoDWWAVvgIZwDNr630RFz9j0wmrfrH9p0YwIga8BDUC1%2FHR36EgFCTEcC9T3S5TEizOVClxoWiWZYvlkq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPi7mAefFmy1TQMQ3yrcA0jV8nVq71Tp8VmHn6yAXklma0ZaPRcvDS20i6dOcnk9lVIK46Uu3wa7kszwJVat6Bozq1FmOA%2Bcg0IPtfAsvqkj%2F2LD%2BVoKdRA650BRuAYa5w%2F7i2kTGKUpZXeVSN1daDM%2Bzs0YBAa3ll9RLmFYn6n76HlQ%2FIxidNL%2BNpYMwiow2I%2FKENtXs5N9xOZ7TfR%2Bqoy%2BVXT1UvzXaL7324y%2BPtwSj%2BBHCmaa0DIjHdM7LTrGwN0uIo7Q1enktIW7zEKlQqICSJZxiHPE6LCgrzwrQ%2F6xV0JP%2BvIrlu1985llxbCAKPqW97GkndYNf3m%2FC%2BytZSCWedW%2FVYQemOFt8xqI1IpGCOX03BFiCcuVYM3kE1fb9sUzXp0jMzqtTQWuIOgaUCIjFRMgjJFnEVffYARpAjaI6a8ujd8NLSsUng%2FW2j5%2FVjHMb2yG3co1VGrDVq77OOoT5U%2FJNRyeeGOm1cx3pn9ZQ7KAnveCAlbEJGH0rDrzslwSVCOFm4222Y9IRaJjy2FN4WbJnew5S%2FVNThYj9zJE6OUEMJw4fry9YPtYX2qbLyqwCK5NVwrvkDbC8N6T4Lnxn%2FGF%2F%2FKyft1NYuc%2BtrHPSOiBI6XCSJg5UliNyAJH%2BPWGebM9ge8BRpeOMO%2FIqL4GOqUBD2etBy%2Fa0ibLdGTcdtPgBPBDZfD1P%2BlIEy3jQr8DGRv2hGIPinxW80LhJymLXItWTz9JUI80IFM3GXBu9ViP2F7q5PLHT4NwrCyTHb4aBI%2FydyMQoqEJ0ZTAbUQEvODlYj4PuBSH0UO4zHEA2doCI%2FPtzqCj%2BcdgVAP723iNqfOpU6qiVNjU1uiDzSWEVrGBHqmKjJHh58%2BHo5tXDQwmJpA8REgr&X-Amz-Signature=f17c61f5ddfdcac91f66765248ab06dae77ad4f775ea8b34ce51e2db09cd8093&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUZQMUQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7YOQ0Xb4aoDWWAVvgIZwDNr630RFz9j0wmrfrH9p0YwIga8BDUC1%2FHR36EgFCTEcC9T3S5TEizOVClxoWiWZYvlkq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPi7mAefFmy1TQMQ3yrcA0jV8nVq71Tp8VmHn6yAXklma0ZaPRcvDS20i6dOcnk9lVIK46Uu3wa7kszwJVat6Bozq1FmOA%2Bcg0IPtfAsvqkj%2F2LD%2BVoKdRA650BRuAYa5w%2F7i2kTGKUpZXeVSN1daDM%2Bzs0YBAa3ll9RLmFYn6n76HlQ%2FIxidNL%2BNpYMwiow2I%2FKENtXs5N9xOZ7TfR%2Bqoy%2BVXT1UvzXaL7324y%2BPtwSj%2BBHCmaa0DIjHdM7LTrGwN0uIo7Q1enktIW7zEKlQqICSJZxiHPE6LCgrzwrQ%2F6xV0JP%2BvIrlu1985llxbCAKPqW97GkndYNf3m%2FC%2BytZSCWedW%2FVYQemOFt8xqI1IpGCOX03BFiCcuVYM3kE1fb9sUzXp0jMzqtTQWuIOgaUCIjFRMgjJFnEVffYARpAjaI6a8ujd8NLSsUng%2FW2j5%2FVjHMb2yG3co1VGrDVq77OOoT5U%2FJNRyeeGOm1cx3pn9ZQ7KAnveCAlbEJGH0rDrzslwSVCOFm4222Y9IRaJjy2FN4WbJnew5S%2FVNThYj9zJE6OUEMJw4fry9YPtYX2qbLyqwCK5NVwrvkDbC8N6T4Lnxn%2FGF%2F%2FKyft1NYuc%2BtrHPSOiBI6XCSJg5UliNyAJH%2BPWGebM9ge8BRpeOMO%2FIqL4GOqUBD2etBy%2Fa0ibLdGTcdtPgBPBDZfD1P%2BlIEy3jQr8DGRv2hGIPinxW80LhJymLXItWTz9JUI80IFM3GXBu9ViP2F7q5PLHT4NwrCyTHb4aBI%2FydyMQoqEJ0ZTAbUQEvODlYj4PuBSH0UO4zHEA2doCI%2FPtzqCj%2BcdgVAP723iNqfOpU6qiVNjU1uiDzSWEVrGBHqmKjJHh58%2BHo5tXDQwmJpA8REgr&X-Amz-Signature=2ec6a63e48245df31e019ae55d4dc135092dd5537629f13df0ff730e93612648&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUZQMUQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7YOQ0Xb4aoDWWAVvgIZwDNr630RFz9j0wmrfrH9p0YwIga8BDUC1%2FHR36EgFCTEcC9T3S5TEizOVClxoWiWZYvlkq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPi7mAefFmy1TQMQ3yrcA0jV8nVq71Tp8VmHn6yAXklma0ZaPRcvDS20i6dOcnk9lVIK46Uu3wa7kszwJVat6Bozq1FmOA%2Bcg0IPtfAsvqkj%2F2LD%2BVoKdRA650BRuAYa5w%2F7i2kTGKUpZXeVSN1daDM%2Bzs0YBAa3ll9RLmFYn6n76HlQ%2FIxidNL%2BNpYMwiow2I%2FKENtXs5N9xOZ7TfR%2Bqoy%2BVXT1UvzXaL7324y%2BPtwSj%2BBHCmaa0DIjHdM7LTrGwN0uIo7Q1enktIW7zEKlQqICSJZxiHPE6LCgrzwrQ%2F6xV0JP%2BvIrlu1985llxbCAKPqW97GkndYNf3m%2FC%2BytZSCWedW%2FVYQemOFt8xqI1IpGCOX03BFiCcuVYM3kE1fb9sUzXp0jMzqtTQWuIOgaUCIjFRMgjJFnEVffYARpAjaI6a8ujd8NLSsUng%2FW2j5%2FVjHMb2yG3co1VGrDVq77OOoT5U%2FJNRyeeGOm1cx3pn9ZQ7KAnveCAlbEJGH0rDrzslwSVCOFm4222Y9IRaJjy2FN4WbJnew5S%2FVNThYj9zJE6OUEMJw4fry9YPtYX2qbLyqwCK5NVwrvkDbC8N6T4Lnxn%2FGF%2F%2FKyft1NYuc%2BtrHPSOiBI6XCSJg5UliNyAJH%2BPWGebM9ge8BRpeOMO%2FIqL4GOqUBD2etBy%2Fa0ibLdGTcdtPgBPBDZfD1P%2BlIEy3jQr8DGRv2hGIPinxW80LhJymLXItWTz9JUI80IFM3GXBu9ViP2F7q5PLHT4NwrCyTHb4aBI%2FydyMQoqEJ0ZTAbUQEvODlYj4PuBSH0UO4zHEA2doCI%2FPtzqCj%2BcdgVAP723iNqfOpU6qiVNjU1uiDzSWEVrGBHqmKjJHh58%2BHo5tXDQwmJpA8REgr&X-Amz-Signature=e301b63851ac1d8575b67fd241380be156d34dd16fd1a1efdd3664cca0d40b55&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUZQMUQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7YOQ0Xb4aoDWWAVvgIZwDNr630RFz9j0wmrfrH9p0YwIga8BDUC1%2FHR36EgFCTEcC9T3S5TEizOVClxoWiWZYvlkq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPi7mAefFmy1TQMQ3yrcA0jV8nVq71Tp8VmHn6yAXklma0ZaPRcvDS20i6dOcnk9lVIK46Uu3wa7kszwJVat6Bozq1FmOA%2Bcg0IPtfAsvqkj%2F2LD%2BVoKdRA650BRuAYa5w%2F7i2kTGKUpZXeVSN1daDM%2Bzs0YBAa3ll9RLmFYn6n76HlQ%2FIxidNL%2BNpYMwiow2I%2FKENtXs5N9xOZ7TfR%2Bqoy%2BVXT1UvzXaL7324y%2BPtwSj%2BBHCmaa0DIjHdM7LTrGwN0uIo7Q1enktIW7zEKlQqICSJZxiHPE6LCgrzwrQ%2F6xV0JP%2BvIrlu1985llxbCAKPqW97GkndYNf3m%2FC%2BytZSCWedW%2FVYQemOFt8xqI1IpGCOX03BFiCcuVYM3kE1fb9sUzXp0jMzqtTQWuIOgaUCIjFRMgjJFnEVffYARpAjaI6a8ujd8NLSsUng%2FW2j5%2FVjHMb2yG3co1VGrDVq77OOoT5U%2FJNRyeeGOm1cx3pn9ZQ7KAnveCAlbEJGH0rDrzslwSVCOFm4222Y9IRaJjy2FN4WbJnew5S%2FVNThYj9zJE6OUEMJw4fry9YPtYX2qbLyqwCK5NVwrvkDbC8N6T4Lnxn%2FGF%2F%2FKyft1NYuc%2BtrHPSOiBI6XCSJg5UliNyAJH%2BPWGebM9ge8BRpeOMO%2FIqL4GOqUBD2etBy%2Fa0ibLdGTcdtPgBPBDZfD1P%2BlIEy3jQr8DGRv2hGIPinxW80LhJymLXItWTz9JUI80IFM3GXBu9ViP2F7q5PLHT4NwrCyTHb4aBI%2FydyMQoqEJ0ZTAbUQEvODlYj4PuBSH0UO4zHEA2doCI%2FPtzqCj%2BcdgVAP723iNqfOpU6qiVNjU1uiDzSWEVrGBHqmKjJHh58%2BHo5tXDQwmJpA8REgr&X-Amz-Signature=988f3fa75a05c721767248b8305463ea0ab5ff2b442bbff9644945e306564897&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUZQMUQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7YOQ0Xb4aoDWWAVvgIZwDNr630RFz9j0wmrfrH9p0YwIga8BDUC1%2FHR36EgFCTEcC9T3S5TEizOVClxoWiWZYvlkq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPi7mAefFmy1TQMQ3yrcA0jV8nVq71Tp8VmHn6yAXklma0ZaPRcvDS20i6dOcnk9lVIK46Uu3wa7kszwJVat6Bozq1FmOA%2Bcg0IPtfAsvqkj%2F2LD%2BVoKdRA650BRuAYa5w%2F7i2kTGKUpZXeVSN1daDM%2Bzs0YBAa3ll9RLmFYn6n76HlQ%2FIxidNL%2BNpYMwiow2I%2FKENtXs5N9xOZ7TfR%2Bqoy%2BVXT1UvzXaL7324y%2BPtwSj%2BBHCmaa0DIjHdM7LTrGwN0uIo7Q1enktIW7zEKlQqICSJZxiHPE6LCgrzwrQ%2F6xV0JP%2BvIrlu1985llxbCAKPqW97GkndYNf3m%2FC%2BytZSCWedW%2FVYQemOFt8xqI1IpGCOX03BFiCcuVYM3kE1fb9sUzXp0jMzqtTQWuIOgaUCIjFRMgjJFnEVffYARpAjaI6a8ujd8NLSsUng%2FW2j5%2FVjHMb2yG3co1VGrDVq77OOoT5U%2FJNRyeeGOm1cx3pn9ZQ7KAnveCAlbEJGH0rDrzslwSVCOFm4222Y9IRaJjy2FN4WbJnew5S%2FVNThYj9zJE6OUEMJw4fry9YPtYX2qbLyqwCK5NVwrvkDbC8N6T4Lnxn%2FGF%2F%2FKyft1NYuc%2BtrHPSOiBI6XCSJg5UliNyAJH%2BPWGebM9ge8BRpeOMO%2FIqL4GOqUBD2etBy%2Fa0ibLdGTcdtPgBPBDZfD1P%2BlIEy3jQr8DGRv2hGIPinxW80LhJymLXItWTz9JUI80IFM3GXBu9ViP2F7q5PLHT4NwrCyTHb4aBI%2FydyMQoqEJ0ZTAbUQEvODlYj4PuBSH0UO4zHEA2doCI%2FPtzqCj%2BcdgVAP723iNqfOpU6qiVNjU1uiDzSWEVrGBHqmKjJHh58%2BHo5tXDQwmJpA8REgr&X-Amz-Signature=07158d15b2d5c0c29d2a391f5bedf12172779a194984e141ea078380220bab60&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUZQMUQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7YOQ0Xb4aoDWWAVvgIZwDNr630RFz9j0wmrfrH9p0YwIga8BDUC1%2FHR36EgFCTEcC9T3S5TEizOVClxoWiWZYvlkq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPi7mAefFmy1TQMQ3yrcA0jV8nVq71Tp8VmHn6yAXklma0ZaPRcvDS20i6dOcnk9lVIK46Uu3wa7kszwJVat6Bozq1FmOA%2Bcg0IPtfAsvqkj%2F2LD%2BVoKdRA650BRuAYa5w%2F7i2kTGKUpZXeVSN1daDM%2Bzs0YBAa3ll9RLmFYn6n76HlQ%2FIxidNL%2BNpYMwiow2I%2FKENtXs5N9xOZ7TfR%2Bqoy%2BVXT1UvzXaL7324y%2BPtwSj%2BBHCmaa0DIjHdM7LTrGwN0uIo7Q1enktIW7zEKlQqICSJZxiHPE6LCgrzwrQ%2F6xV0JP%2BvIrlu1985llxbCAKPqW97GkndYNf3m%2FC%2BytZSCWedW%2FVYQemOFt8xqI1IpGCOX03BFiCcuVYM3kE1fb9sUzXp0jMzqtTQWuIOgaUCIjFRMgjJFnEVffYARpAjaI6a8ujd8NLSsUng%2FW2j5%2FVjHMb2yG3co1VGrDVq77OOoT5U%2FJNRyeeGOm1cx3pn9ZQ7KAnveCAlbEJGH0rDrzslwSVCOFm4222Y9IRaJjy2FN4WbJnew5S%2FVNThYj9zJE6OUEMJw4fry9YPtYX2qbLyqwCK5NVwrvkDbC8N6T4Lnxn%2FGF%2F%2FKyft1NYuc%2BtrHPSOiBI6XCSJg5UliNyAJH%2BPWGebM9ge8BRpeOMO%2FIqL4GOqUBD2etBy%2Fa0ibLdGTcdtPgBPBDZfD1P%2BlIEy3jQr8DGRv2hGIPinxW80LhJymLXItWTz9JUI80IFM3GXBu9ViP2F7q5PLHT4NwrCyTHb4aBI%2FydyMQoqEJ0ZTAbUQEvODlYj4PuBSH0UO4zHEA2doCI%2FPtzqCj%2BcdgVAP723iNqfOpU6qiVNjU1uiDzSWEVrGBHqmKjJHh58%2BHo5tXDQwmJpA8REgr&X-Amz-Signature=678dfcee1091b9eb09c5e3671cecf2f03142cf98929ca81ca315efd483fe3412&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUZQMUQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7YOQ0Xb4aoDWWAVvgIZwDNr630RFz9j0wmrfrH9p0YwIga8BDUC1%2FHR36EgFCTEcC9T3S5TEizOVClxoWiWZYvlkq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPi7mAefFmy1TQMQ3yrcA0jV8nVq71Tp8VmHn6yAXklma0ZaPRcvDS20i6dOcnk9lVIK46Uu3wa7kszwJVat6Bozq1FmOA%2Bcg0IPtfAsvqkj%2F2LD%2BVoKdRA650BRuAYa5w%2F7i2kTGKUpZXeVSN1daDM%2Bzs0YBAa3ll9RLmFYn6n76HlQ%2FIxidNL%2BNpYMwiow2I%2FKENtXs5N9xOZ7TfR%2Bqoy%2BVXT1UvzXaL7324y%2BPtwSj%2BBHCmaa0DIjHdM7LTrGwN0uIo7Q1enktIW7zEKlQqICSJZxiHPE6LCgrzwrQ%2F6xV0JP%2BvIrlu1985llxbCAKPqW97GkndYNf3m%2FC%2BytZSCWedW%2FVYQemOFt8xqI1IpGCOX03BFiCcuVYM3kE1fb9sUzXp0jMzqtTQWuIOgaUCIjFRMgjJFnEVffYARpAjaI6a8ujd8NLSsUng%2FW2j5%2FVjHMb2yG3co1VGrDVq77OOoT5U%2FJNRyeeGOm1cx3pn9ZQ7KAnveCAlbEJGH0rDrzslwSVCOFm4222Y9IRaJjy2FN4WbJnew5S%2FVNThYj9zJE6OUEMJw4fry9YPtYX2qbLyqwCK5NVwrvkDbC8N6T4Lnxn%2FGF%2F%2FKyft1NYuc%2BtrHPSOiBI6XCSJg5UliNyAJH%2BPWGebM9ge8BRpeOMO%2FIqL4GOqUBD2etBy%2Fa0ibLdGTcdtPgBPBDZfD1P%2BlIEy3jQr8DGRv2hGIPinxW80LhJymLXItWTz9JUI80IFM3GXBu9ViP2F7q5PLHT4NwrCyTHb4aBI%2FydyMQoqEJ0ZTAbUQEvODlYj4PuBSH0UO4zHEA2doCI%2FPtzqCj%2BcdgVAP723iNqfOpU6qiVNjU1uiDzSWEVrGBHqmKjJHh58%2BHo5tXDQwmJpA8REgr&X-Amz-Signature=ea4610f94eaf19538232b53c8aa270328abac714214a9c0c893f88466e1a7981&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
