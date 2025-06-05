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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ4LCTZ4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGkrax7ombbec6XS3d82Ysl%2BQqexUUznkESbCqmrZFDxAiB%2BkS%2B5IqP%2FxFrBFKCVsHwJuNRFjvNiLdULtibQ1p2Ycir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM2l9JWT%2B5FSGFHbuXKtwDLG%2Fp%2F7FI4gkxR2R3cDzZzo8W2JOXNWsu9yu0dBodbwGnUIAFHOmEWJYtCGHqTBTfOxAlhMqXI8eYnDkT3uiE2Q3OO7dJnhdJXidry3%2F99J9yLfelYFnREeLw58tGbaOpLouxuH42hRDJ%2FHZwfQq%2FzG%2FoHKwKgB1PETckAl%2FXL0uVr1jVFUP9V07pge%2BZLHKwk32wcXMg6rJjvf4o2l6Djbm%2F6HoupPK%2BtCqwPv9Mmkbd3QjSNogzKPVJTpDU8TBWpPkv7UGhR7wtHfli601HUYINwWSmd6PXAO350ywunLVmO4K8F2cbExfvqclrWbixupibitcUlvZKQXxweGfGhOVpnOVolD%2F%2Fvu71bQyu9FhQpdpvrHidvHtc5SSoX22Niq9aGCBBxQWDFwui0xOAtQ16gQB3qJyPvbMEhI4MhWuFiLdKO6kFm38ZuGySG8QG0Z%2FwMZSBvXM%2BQjvCgmOzAquPVUi%2BEe2pSQxLlsqGQH9%2B%2B4Re8vAXgfTts4NElxv7vz3UF0yrerdvnq7oaNKUobG3%2FgPFShXkeOhMEbc4gMSZlSirh2f0rVZHNAjKJAtGESP4iOm0L7k84uXcvMlphKYT90a0AYeDuYSNwo4tScElBupaPxvKnOcPLckwwNiHwgY6pgECXJmhxcB%2BOFE%2FSGIkyRkGM2toaVIpLFiXS6XYxupCvSWRJTyl0Z1p9xL1Q9Xp63ncOeCD7hKrfxDH844Wn15nwy6xLBnItEz0nFMJP%2FKxM7xjlEtHuFMyXNmV6oUe16z3ozZb%2BEJeNXVnIb8%2FvUSZPjXNoX27lv2%2FdF3Oy%2F%2FZ11RooPH0IEJzPvHDCdljPROZI5HmTyttqbtTjcY%2BfpVqpFchvemk&X-Amz-Signature=1c6eca9ad1a1b4acc16ef7c096c4e2e29197b3cd36aa7ecbc3135bfb09cd082c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ4LCTZ4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGkrax7ombbec6XS3d82Ysl%2BQqexUUznkESbCqmrZFDxAiB%2BkS%2B5IqP%2FxFrBFKCVsHwJuNRFjvNiLdULtibQ1p2Ycir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM2l9JWT%2B5FSGFHbuXKtwDLG%2Fp%2F7FI4gkxR2R3cDzZzo8W2JOXNWsu9yu0dBodbwGnUIAFHOmEWJYtCGHqTBTfOxAlhMqXI8eYnDkT3uiE2Q3OO7dJnhdJXidry3%2F99J9yLfelYFnREeLw58tGbaOpLouxuH42hRDJ%2FHZwfQq%2FzG%2FoHKwKgB1PETckAl%2FXL0uVr1jVFUP9V07pge%2BZLHKwk32wcXMg6rJjvf4o2l6Djbm%2F6HoupPK%2BtCqwPv9Mmkbd3QjSNogzKPVJTpDU8TBWpPkv7UGhR7wtHfli601HUYINwWSmd6PXAO350ywunLVmO4K8F2cbExfvqclrWbixupibitcUlvZKQXxweGfGhOVpnOVolD%2F%2Fvu71bQyu9FhQpdpvrHidvHtc5SSoX22Niq9aGCBBxQWDFwui0xOAtQ16gQB3qJyPvbMEhI4MhWuFiLdKO6kFm38ZuGySG8QG0Z%2FwMZSBvXM%2BQjvCgmOzAquPVUi%2BEe2pSQxLlsqGQH9%2B%2B4Re8vAXgfTts4NElxv7vz3UF0yrerdvnq7oaNKUobG3%2FgPFShXkeOhMEbc4gMSZlSirh2f0rVZHNAjKJAtGESP4iOm0L7k84uXcvMlphKYT90a0AYeDuYSNwo4tScElBupaPxvKnOcPLckwwNiHwgY6pgECXJmhxcB%2BOFE%2FSGIkyRkGM2toaVIpLFiXS6XYxupCvSWRJTyl0Z1p9xL1Q9Xp63ncOeCD7hKrfxDH844Wn15nwy6xLBnItEz0nFMJP%2FKxM7xjlEtHuFMyXNmV6oUe16z3ozZb%2BEJeNXVnIb8%2FvUSZPjXNoX27lv2%2FdF3Oy%2F%2FZ11RooPH0IEJzPvHDCdljPROZI5HmTyttqbtTjcY%2BfpVqpFchvemk&X-Amz-Signature=0201f95af1b618dc3269317708e33f9d68f944ac466ca89f24e08f1c3d666e84&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ4LCTZ4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGkrax7ombbec6XS3d82Ysl%2BQqexUUznkESbCqmrZFDxAiB%2BkS%2B5IqP%2FxFrBFKCVsHwJuNRFjvNiLdULtibQ1p2Ycir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM2l9JWT%2B5FSGFHbuXKtwDLG%2Fp%2F7FI4gkxR2R3cDzZzo8W2JOXNWsu9yu0dBodbwGnUIAFHOmEWJYtCGHqTBTfOxAlhMqXI8eYnDkT3uiE2Q3OO7dJnhdJXidry3%2F99J9yLfelYFnREeLw58tGbaOpLouxuH42hRDJ%2FHZwfQq%2FzG%2FoHKwKgB1PETckAl%2FXL0uVr1jVFUP9V07pge%2BZLHKwk32wcXMg6rJjvf4o2l6Djbm%2F6HoupPK%2BtCqwPv9Mmkbd3QjSNogzKPVJTpDU8TBWpPkv7UGhR7wtHfli601HUYINwWSmd6PXAO350ywunLVmO4K8F2cbExfvqclrWbixupibitcUlvZKQXxweGfGhOVpnOVolD%2F%2Fvu71bQyu9FhQpdpvrHidvHtc5SSoX22Niq9aGCBBxQWDFwui0xOAtQ16gQB3qJyPvbMEhI4MhWuFiLdKO6kFm38ZuGySG8QG0Z%2FwMZSBvXM%2BQjvCgmOzAquPVUi%2BEe2pSQxLlsqGQH9%2B%2B4Re8vAXgfTts4NElxv7vz3UF0yrerdvnq7oaNKUobG3%2FgPFShXkeOhMEbc4gMSZlSirh2f0rVZHNAjKJAtGESP4iOm0L7k84uXcvMlphKYT90a0AYeDuYSNwo4tScElBupaPxvKnOcPLckwwNiHwgY6pgECXJmhxcB%2BOFE%2FSGIkyRkGM2toaVIpLFiXS6XYxupCvSWRJTyl0Z1p9xL1Q9Xp63ncOeCD7hKrfxDH844Wn15nwy6xLBnItEz0nFMJP%2FKxM7xjlEtHuFMyXNmV6oUe16z3ozZb%2BEJeNXVnIb8%2FvUSZPjXNoX27lv2%2FdF3Oy%2F%2FZ11RooPH0IEJzPvHDCdljPROZI5HmTyttqbtTjcY%2BfpVqpFchvemk&X-Amz-Signature=3f6b0ff899710b355d08f7a9a460366c66093a67cedfa3b37845e36d79436c9d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ4LCTZ4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGkrax7ombbec6XS3d82Ysl%2BQqexUUznkESbCqmrZFDxAiB%2BkS%2B5IqP%2FxFrBFKCVsHwJuNRFjvNiLdULtibQ1p2Ycir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM2l9JWT%2B5FSGFHbuXKtwDLG%2Fp%2F7FI4gkxR2R3cDzZzo8W2JOXNWsu9yu0dBodbwGnUIAFHOmEWJYtCGHqTBTfOxAlhMqXI8eYnDkT3uiE2Q3OO7dJnhdJXidry3%2F99J9yLfelYFnREeLw58tGbaOpLouxuH42hRDJ%2FHZwfQq%2FzG%2FoHKwKgB1PETckAl%2FXL0uVr1jVFUP9V07pge%2BZLHKwk32wcXMg6rJjvf4o2l6Djbm%2F6HoupPK%2BtCqwPv9Mmkbd3QjSNogzKPVJTpDU8TBWpPkv7UGhR7wtHfli601HUYINwWSmd6PXAO350ywunLVmO4K8F2cbExfvqclrWbixupibitcUlvZKQXxweGfGhOVpnOVolD%2F%2Fvu71bQyu9FhQpdpvrHidvHtc5SSoX22Niq9aGCBBxQWDFwui0xOAtQ16gQB3qJyPvbMEhI4MhWuFiLdKO6kFm38ZuGySG8QG0Z%2FwMZSBvXM%2BQjvCgmOzAquPVUi%2BEe2pSQxLlsqGQH9%2B%2B4Re8vAXgfTts4NElxv7vz3UF0yrerdvnq7oaNKUobG3%2FgPFShXkeOhMEbc4gMSZlSirh2f0rVZHNAjKJAtGESP4iOm0L7k84uXcvMlphKYT90a0AYeDuYSNwo4tScElBupaPxvKnOcPLckwwNiHwgY6pgECXJmhxcB%2BOFE%2FSGIkyRkGM2toaVIpLFiXS6XYxupCvSWRJTyl0Z1p9xL1Q9Xp63ncOeCD7hKrfxDH844Wn15nwy6xLBnItEz0nFMJP%2FKxM7xjlEtHuFMyXNmV6oUe16z3ozZb%2BEJeNXVnIb8%2FvUSZPjXNoX27lv2%2FdF3Oy%2F%2FZ11RooPH0IEJzPvHDCdljPROZI5HmTyttqbtTjcY%2BfpVqpFchvemk&X-Amz-Signature=0c6b028b9b90985fdc6e0ac01e6204ab2f29dc4551efdddc7e6190d7dc359826&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ4LCTZ4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGkrax7ombbec6XS3d82Ysl%2BQqexUUznkESbCqmrZFDxAiB%2BkS%2B5IqP%2FxFrBFKCVsHwJuNRFjvNiLdULtibQ1p2Ycir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM2l9JWT%2B5FSGFHbuXKtwDLG%2Fp%2F7FI4gkxR2R3cDzZzo8W2JOXNWsu9yu0dBodbwGnUIAFHOmEWJYtCGHqTBTfOxAlhMqXI8eYnDkT3uiE2Q3OO7dJnhdJXidry3%2F99J9yLfelYFnREeLw58tGbaOpLouxuH42hRDJ%2FHZwfQq%2FzG%2FoHKwKgB1PETckAl%2FXL0uVr1jVFUP9V07pge%2BZLHKwk32wcXMg6rJjvf4o2l6Djbm%2F6HoupPK%2BtCqwPv9Mmkbd3QjSNogzKPVJTpDU8TBWpPkv7UGhR7wtHfli601HUYINwWSmd6PXAO350ywunLVmO4K8F2cbExfvqclrWbixupibitcUlvZKQXxweGfGhOVpnOVolD%2F%2Fvu71bQyu9FhQpdpvrHidvHtc5SSoX22Niq9aGCBBxQWDFwui0xOAtQ16gQB3qJyPvbMEhI4MhWuFiLdKO6kFm38ZuGySG8QG0Z%2FwMZSBvXM%2BQjvCgmOzAquPVUi%2BEe2pSQxLlsqGQH9%2B%2B4Re8vAXgfTts4NElxv7vz3UF0yrerdvnq7oaNKUobG3%2FgPFShXkeOhMEbc4gMSZlSirh2f0rVZHNAjKJAtGESP4iOm0L7k84uXcvMlphKYT90a0AYeDuYSNwo4tScElBupaPxvKnOcPLckwwNiHwgY6pgECXJmhxcB%2BOFE%2FSGIkyRkGM2toaVIpLFiXS6XYxupCvSWRJTyl0Z1p9xL1Q9Xp63ncOeCD7hKrfxDH844Wn15nwy6xLBnItEz0nFMJP%2FKxM7xjlEtHuFMyXNmV6oUe16z3ozZb%2BEJeNXVnIb8%2FvUSZPjXNoX27lv2%2FdF3Oy%2F%2FZ11RooPH0IEJzPvHDCdljPROZI5HmTyttqbtTjcY%2BfpVqpFchvemk&X-Amz-Signature=d77727c9a248394d7c91dd779e9a1a349448d04241ebace6794f8069dd3b494d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ4LCTZ4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGkrax7ombbec6XS3d82Ysl%2BQqexUUznkESbCqmrZFDxAiB%2BkS%2B5IqP%2FxFrBFKCVsHwJuNRFjvNiLdULtibQ1p2Ycir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM2l9JWT%2B5FSGFHbuXKtwDLG%2Fp%2F7FI4gkxR2R3cDzZzo8W2JOXNWsu9yu0dBodbwGnUIAFHOmEWJYtCGHqTBTfOxAlhMqXI8eYnDkT3uiE2Q3OO7dJnhdJXidry3%2F99J9yLfelYFnREeLw58tGbaOpLouxuH42hRDJ%2FHZwfQq%2FzG%2FoHKwKgB1PETckAl%2FXL0uVr1jVFUP9V07pge%2BZLHKwk32wcXMg6rJjvf4o2l6Djbm%2F6HoupPK%2BtCqwPv9Mmkbd3QjSNogzKPVJTpDU8TBWpPkv7UGhR7wtHfli601HUYINwWSmd6PXAO350ywunLVmO4K8F2cbExfvqclrWbixupibitcUlvZKQXxweGfGhOVpnOVolD%2F%2Fvu71bQyu9FhQpdpvrHidvHtc5SSoX22Niq9aGCBBxQWDFwui0xOAtQ16gQB3qJyPvbMEhI4MhWuFiLdKO6kFm38ZuGySG8QG0Z%2FwMZSBvXM%2BQjvCgmOzAquPVUi%2BEe2pSQxLlsqGQH9%2B%2B4Re8vAXgfTts4NElxv7vz3UF0yrerdvnq7oaNKUobG3%2FgPFShXkeOhMEbc4gMSZlSirh2f0rVZHNAjKJAtGESP4iOm0L7k84uXcvMlphKYT90a0AYeDuYSNwo4tScElBupaPxvKnOcPLckwwNiHwgY6pgECXJmhxcB%2BOFE%2FSGIkyRkGM2toaVIpLFiXS6XYxupCvSWRJTyl0Z1p9xL1Q9Xp63ncOeCD7hKrfxDH844Wn15nwy6xLBnItEz0nFMJP%2FKxM7xjlEtHuFMyXNmV6oUe16z3ozZb%2BEJeNXVnIb8%2FvUSZPjXNoX27lv2%2FdF3Oy%2F%2FZ11RooPH0IEJzPvHDCdljPROZI5HmTyttqbtTjcY%2BfpVqpFchvemk&X-Amz-Signature=e20e15c69ca8aec81ed46aea37e3108a79d4520cc8dd372e7ab91946ab40ab1e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ4LCTZ4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGkrax7ombbec6XS3d82Ysl%2BQqexUUznkESbCqmrZFDxAiB%2BkS%2B5IqP%2FxFrBFKCVsHwJuNRFjvNiLdULtibQ1p2Ycir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM2l9JWT%2B5FSGFHbuXKtwDLG%2Fp%2F7FI4gkxR2R3cDzZzo8W2JOXNWsu9yu0dBodbwGnUIAFHOmEWJYtCGHqTBTfOxAlhMqXI8eYnDkT3uiE2Q3OO7dJnhdJXidry3%2F99J9yLfelYFnREeLw58tGbaOpLouxuH42hRDJ%2FHZwfQq%2FzG%2FoHKwKgB1PETckAl%2FXL0uVr1jVFUP9V07pge%2BZLHKwk32wcXMg6rJjvf4o2l6Djbm%2F6HoupPK%2BtCqwPv9Mmkbd3QjSNogzKPVJTpDU8TBWpPkv7UGhR7wtHfli601HUYINwWSmd6PXAO350ywunLVmO4K8F2cbExfvqclrWbixupibitcUlvZKQXxweGfGhOVpnOVolD%2F%2Fvu71bQyu9FhQpdpvrHidvHtc5SSoX22Niq9aGCBBxQWDFwui0xOAtQ16gQB3qJyPvbMEhI4MhWuFiLdKO6kFm38ZuGySG8QG0Z%2FwMZSBvXM%2BQjvCgmOzAquPVUi%2BEe2pSQxLlsqGQH9%2B%2B4Re8vAXgfTts4NElxv7vz3UF0yrerdvnq7oaNKUobG3%2FgPFShXkeOhMEbc4gMSZlSirh2f0rVZHNAjKJAtGESP4iOm0L7k84uXcvMlphKYT90a0AYeDuYSNwo4tScElBupaPxvKnOcPLckwwNiHwgY6pgECXJmhxcB%2BOFE%2FSGIkyRkGM2toaVIpLFiXS6XYxupCvSWRJTyl0Z1p9xL1Q9Xp63ncOeCD7hKrfxDH844Wn15nwy6xLBnItEz0nFMJP%2FKxM7xjlEtHuFMyXNmV6oUe16z3ozZb%2BEJeNXVnIb8%2FvUSZPjXNoX27lv2%2FdF3Oy%2F%2FZ11RooPH0IEJzPvHDCdljPROZI5HmTyttqbtTjcY%2BfpVqpFchvemk&X-Amz-Signature=458bb71eb918c4c503275f9a447a785bc13c1be7074512ace545107a55c66307&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ4LCTZ4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGkrax7ombbec6XS3d82Ysl%2BQqexUUznkESbCqmrZFDxAiB%2BkS%2B5IqP%2FxFrBFKCVsHwJuNRFjvNiLdULtibQ1p2Ycir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM2l9JWT%2B5FSGFHbuXKtwDLG%2Fp%2F7FI4gkxR2R3cDzZzo8W2JOXNWsu9yu0dBodbwGnUIAFHOmEWJYtCGHqTBTfOxAlhMqXI8eYnDkT3uiE2Q3OO7dJnhdJXidry3%2F99J9yLfelYFnREeLw58tGbaOpLouxuH42hRDJ%2FHZwfQq%2FzG%2FoHKwKgB1PETckAl%2FXL0uVr1jVFUP9V07pge%2BZLHKwk32wcXMg6rJjvf4o2l6Djbm%2F6HoupPK%2BtCqwPv9Mmkbd3QjSNogzKPVJTpDU8TBWpPkv7UGhR7wtHfli601HUYINwWSmd6PXAO350ywunLVmO4K8F2cbExfvqclrWbixupibitcUlvZKQXxweGfGhOVpnOVolD%2F%2Fvu71bQyu9FhQpdpvrHidvHtc5SSoX22Niq9aGCBBxQWDFwui0xOAtQ16gQB3qJyPvbMEhI4MhWuFiLdKO6kFm38ZuGySG8QG0Z%2FwMZSBvXM%2BQjvCgmOzAquPVUi%2BEe2pSQxLlsqGQH9%2B%2B4Re8vAXgfTts4NElxv7vz3UF0yrerdvnq7oaNKUobG3%2FgPFShXkeOhMEbc4gMSZlSirh2f0rVZHNAjKJAtGESP4iOm0L7k84uXcvMlphKYT90a0AYeDuYSNwo4tScElBupaPxvKnOcPLckwwNiHwgY6pgECXJmhxcB%2BOFE%2FSGIkyRkGM2toaVIpLFiXS6XYxupCvSWRJTyl0Z1p9xL1Q9Xp63ncOeCD7hKrfxDH844Wn15nwy6xLBnItEz0nFMJP%2FKxM7xjlEtHuFMyXNmV6oUe16z3ozZb%2BEJeNXVnIb8%2FvUSZPjXNoX27lv2%2FdF3Oy%2F%2FZ11RooPH0IEJzPvHDCdljPROZI5HmTyttqbtTjcY%2BfpVqpFchvemk&X-Amz-Signature=64d4b3f0d9c4ad105bc89990038d05302d046becdb854bcfe3ed3d5d1f9ecea7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
