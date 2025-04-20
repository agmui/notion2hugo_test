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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC7TZNT2%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDYqau8Etw2AqFA%2Fao0PLo5jARIfKqvuys9FeOTh7XRJwIgAWxWmkpJzfWBhOSIqyLkjgwEeWnUJm8PEvW%2BghR3MGEqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNviPJtW7swYqUJBWyrcA8Ol9IcDlL0DEgCx7dN5wk%2Frr9Hb9j2YspxovPmZLPfBj8Pbk%2BxZo9h5R%2FUfTxO2H5u6lOfZHoI41kKmKKMa0YMMm%2B0h93Xu8UcPZ96cvIoi%2BeoOMASa8mdTn54ceYCfwvZO46TFSV1MIMLW%2BRz97Lznqucrr21LqIrWc7EPfFjTgRT%2Ft3p%2BC1pXDlTRm6ww8vU1rG5X1Jy3rltAW5YmJagjxIolKfNIPG4U7UhderX6RcHH8gd%2B7xbWn5%2FRyBK7CaCywIKIQ8UP3bMUTFTPfJxj0rntOmwGwfkbHbHh7m3ni7zjbRcRf5gugouUeLO68eL1C%2BcxpRZw70Z9ivCivE9zFIWKE9VuK%2F3090tQaTFEXtJkn2eRcFLQ%2BVmir18MMIFoSwitT%2BIqNTjVVFJHXFBy4olPcONqU4SMHPhIdFkZTVySCWmnoWbUDpmoWtv2ELlgbh5qUOkt7%2BHvDZXu6X8F3eb4a15egZLG%2F%2BKjK2eL3KG9iq4Ilx4TuPym0G33fmygMkd5q%2BZl%2FvO9dcZHFDgxjJ0usf%2F1mlKGFwQ4g%2Bzbv7cBbR5LaBAj6CkpcwEiX86F7SdBqSaFZHrQ%2BXOBgmcbWmzkcMAd%2BVOHuOPOCva%2B3flo0cRHYFD2kqUxMK%2FCk8AGOqUB%2Bd5KQYYHAGOoAmxOTU%2BIBuFah3ywTSwCXCJVV04rOULtjSKX43ntxV0an37VdW4rwCyyKKQCW9DBccF4FXpBv%2Fr%2FbShs7eLBHuPCSe76Gxqa2g1Z%2FtpkRXCw4g1L0WMn%2FqKVns4285l5CTsceI3xqf%2BhCtpXtpn7UHgwQghmpacMY16XavEscoCfbiC8tj31WvEsK2gUIf5bTMzoqtCjWMcVh51U&X-Amz-Signature=0faf0656ff59e443f617ac49b48a1c89469415f442f5261a014d2662fc701b4d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC7TZNT2%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDYqau8Etw2AqFA%2Fao0PLo5jARIfKqvuys9FeOTh7XRJwIgAWxWmkpJzfWBhOSIqyLkjgwEeWnUJm8PEvW%2BghR3MGEqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNviPJtW7swYqUJBWyrcA8Ol9IcDlL0DEgCx7dN5wk%2Frr9Hb9j2YspxovPmZLPfBj8Pbk%2BxZo9h5R%2FUfTxO2H5u6lOfZHoI41kKmKKMa0YMMm%2B0h93Xu8UcPZ96cvIoi%2BeoOMASa8mdTn54ceYCfwvZO46TFSV1MIMLW%2BRz97Lznqucrr21LqIrWc7EPfFjTgRT%2Ft3p%2BC1pXDlTRm6ww8vU1rG5X1Jy3rltAW5YmJagjxIolKfNIPG4U7UhderX6RcHH8gd%2B7xbWn5%2FRyBK7CaCywIKIQ8UP3bMUTFTPfJxj0rntOmwGwfkbHbHh7m3ni7zjbRcRf5gugouUeLO68eL1C%2BcxpRZw70Z9ivCivE9zFIWKE9VuK%2F3090tQaTFEXtJkn2eRcFLQ%2BVmir18MMIFoSwitT%2BIqNTjVVFJHXFBy4olPcONqU4SMHPhIdFkZTVySCWmnoWbUDpmoWtv2ELlgbh5qUOkt7%2BHvDZXu6X8F3eb4a15egZLG%2F%2BKjK2eL3KG9iq4Ilx4TuPym0G33fmygMkd5q%2BZl%2FvO9dcZHFDgxjJ0usf%2F1mlKGFwQ4g%2Bzbv7cBbR5LaBAj6CkpcwEiX86F7SdBqSaFZHrQ%2BXOBgmcbWmzkcMAd%2BVOHuOPOCva%2B3flo0cRHYFD2kqUxMK%2FCk8AGOqUB%2Bd5KQYYHAGOoAmxOTU%2BIBuFah3ywTSwCXCJVV04rOULtjSKX43ntxV0an37VdW4rwCyyKKQCW9DBccF4FXpBv%2Fr%2FbShs7eLBHuPCSe76Gxqa2g1Z%2FtpkRXCw4g1L0WMn%2FqKVns4285l5CTsceI3xqf%2BhCtpXtpn7UHgwQghmpacMY16XavEscoCfbiC8tj31WvEsK2gUIf5bTMzoqtCjWMcVh51U&X-Amz-Signature=da6c45709a5b7dfe8580bac6c696e0ef116b151d02d593b74e6c39586748f3b8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC7TZNT2%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDYqau8Etw2AqFA%2Fao0PLo5jARIfKqvuys9FeOTh7XRJwIgAWxWmkpJzfWBhOSIqyLkjgwEeWnUJm8PEvW%2BghR3MGEqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNviPJtW7swYqUJBWyrcA8Ol9IcDlL0DEgCx7dN5wk%2Frr9Hb9j2YspxovPmZLPfBj8Pbk%2BxZo9h5R%2FUfTxO2H5u6lOfZHoI41kKmKKMa0YMMm%2B0h93Xu8UcPZ96cvIoi%2BeoOMASa8mdTn54ceYCfwvZO46TFSV1MIMLW%2BRz97Lznqucrr21LqIrWc7EPfFjTgRT%2Ft3p%2BC1pXDlTRm6ww8vU1rG5X1Jy3rltAW5YmJagjxIolKfNIPG4U7UhderX6RcHH8gd%2B7xbWn5%2FRyBK7CaCywIKIQ8UP3bMUTFTPfJxj0rntOmwGwfkbHbHh7m3ni7zjbRcRf5gugouUeLO68eL1C%2BcxpRZw70Z9ivCivE9zFIWKE9VuK%2F3090tQaTFEXtJkn2eRcFLQ%2BVmir18MMIFoSwitT%2BIqNTjVVFJHXFBy4olPcONqU4SMHPhIdFkZTVySCWmnoWbUDpmoWtv2ELlgbh5qUOkt7%2BHvDZXu6X8F3eb4a15egZLG%2F%2BKjK2eL3KG9iq4Ilx4TuPym0G33fmygMkd5q%2BZl%2FvO9dcZHFDgxjJ0usf%2F1mlKGFwQ4g%2Bzbv7cBbR5LaBAj6CkpcwEiX86F7SdBqSaFZHrQ%2BXOBgmcbWmzkcMAd%2BVOHuOPOCva%2B3flo0cRHYFD2kqUxMK%2FCk8AGOqUB%2Bd5KQYYHAGOoAmxOTU%2BIBuFah3ywTSwCXCJVV04rOULtjSKX43ntxV0an37VdW4rwCyyKKQCW9DBccF4FXpBv%2Fr%2FbShs7eLBHuPCSe76Gxqa2g1Z%2FtpkRXCw4g1L0WMn%2FqKVns4285l5CTsceI3xqf%2BhCtpXtpn7UHgwQghmpacMY16XavEscoCfbiC8tj31WvEsK2gUIf5bTMzoqtCjWMcVh51U&X-Amz-Signature=2a0cdd3edb822771f4a3512b12c92ba6ac6d3c3bdb0a072c20fd0eb4bfa1aab0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC7TZNT2%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDYqau8Etw2AqFA%2Fao0PLo5jARIfKqvuys9FeOTh7XRJwIgAWxWmkpJzfWBhOSIqyLkjgwEeWnUJm8PEvW%2BghR3MGEqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNviPJtW7swYqUJBWyrcA8Ol9IcDlL0DEgCx7dN5wk%2Frr9Hb9j2YspxovPmZLPfBj8Pbk%2BxZo9h5R%2FUfTxO2H5u6lOfZHoI41kKmKKMa0YMMm%2B0h93Xu8UcPZ96cvIoi%2BeoOMASa8mdTn54ceYCfwvZO46TFSV1MIMLW%2BRz97Lznqucrr21LqIrWc7EPfFjTgRT%2Ft3p%2BC1pXDlTRm6ww8vU1rG5X1Jy3rltAW5YmJagjxIolKfNIPG4U7UhderX6RcHH8gd%2B7xbWn5%2FRyBK7CaCywIKIQ8UP3bMUTFTPfJxj0rntOmwGwfkbHbHh7m3ni7zjbRcRf5gugouUeLO68eL1C%2BcxpRZw70Z9ivCivE9zFIWKE9VuK%2F3090tQaTFEXtJkn2eRcFLQ%2BVmir18MMIFoSwitT%2BIqNTjVVFJHXFBy4olPcONqU4SMHPhIdFkZTVySCWmnoWbUDpmoWtv2ELlgbh5qUOkt7%2BHvDZXu6X8F3eb4a15egZLG%2F%2BKjK2eL3KG9iq4Ilx4TuPym0G33fmygMkd5q%2BZl%2FvO9dcZHFDgxjJ0usf%2F1mlKGFwQ4g%2Bzbv7cBbR5LaBAj6CkpcwEiX86F7SdBqSaFZHrQ%2BXOBgmcbWmzkcMAd%2BVOHuOPOCva%2B3flo0cRHYFD2kqUxMK%2FCk8AGOqUB%2Bd5KQYYHAGOoAmxOTU%2BIBuFah3ywTSwCXCJVV04rOULtjSKX43ntxV0an37VdW4rwCyyKKQCW9DBccF4FXpBv%2Fr%2FbShs7eLBHuPCSe76Gxqa2g1Z%2FtpkRXCw4g1L0WMn%2FqKVns4285l5CTsceI3xqf%2BhCtpXtpn7UHgwQghmpacMY16XavEscoCfbiC8tj31WvEsK2gUIf5bTMzoqtCjWMcVh51U&X-Amz-Signature=4f6e52780d3b16cc58462dd11c6e4ab45ec1f554bb3a8722a59cabb1fc1056a4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC7TZNT2%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDYqau8Etw2AqFA%2Fao0PLo5jARIfKqvuys9FeOTh7XRJwIgAWxWmkpJzfWBhOSIqyLkjgwEeWnUJm8PEvW%2BghR3MGEqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNviPJtW7swYqUJBWyrcA8Ol9IcDlL0DEgCx7dN5wk%2Frr9Hb9j2YspxovPmZLPfBj8Pbk%2BxZo9h5R%2FUfTxO2H5u6lOfZHoI41kKmKKMa0YMMm%2B0h93Xu8UcPZ96cvIoi%2BeoOMASa8mdTn54ceYCfwvZO46TFSV1MIMLW%2BRz97Lznqucrr21LqIrWc7EPfFjTgRT%2Ft3p%2BC1pXDlTRm6ww8vU1rG5X1Jy3rltAW5YmJagjxIolKfNIPG4U7UhderX6RcHH8gd%2B7xbWn5%2FRyBK7CaCywIKIQ8UP3bMUTFTPfJxj0rntOmwGwfkbHbHh7m3ni7zjbRcRf5gugouUeLO68eL1C%2BcxpRZw70Z9ivCivE9zFIWKE9VuK%2F3090tQaTFEXtJkn2eRcFLQ%2BVmir18MMIFoSwitT%2BIqNTjVVFJHXFBy4olPcONqU4SMHPhIdFkZTVySCWmnoWbUDpmoWtv2ELlgbh5qUOkt7%2BHvDZXu6X8F3eb4a15egZLG%2F%2BKjK2eL3KG9iq4Ilx4TuPym0G33fmygMkd5q%2BZl%2FvO9dcZHFDgxjJ0usf%2F1mlKGFwQ4g%2Bzbv7cBbR5LaBAj6CkpcwEiX86F7SdBqSaFZHrQ%2BXOBgmcbWmzkcMAd%2BVOHuOPOCva%2B3flo0cRHYFD2kqUxMK%2FCk8AGOqUB%2Bd5KQYYHAGOoAmxOTU%2BIBuFah3ywTSwCXCJVV04rOULtjSKX43ntxV0an37VdW4rwCyyKKQCW9DBccF4FXpBv%2Fr%2FbShs7eLBHuPCSe76Gxqa2g1Z%2FtpkRXCw4g1L0WMn%2FqKVns4285l5CTsceI3xqf%2BhCtpXtpn7UHgwQghmpacMY16XavEscoCfbiC8tj31WvEsK2gUIf5bTMzoqtCjWMcVh51U&X-Amz-Signature=5aef1901550eb8fd6970fda826592a430851e0ce2c8ce9121671dd02bbb27968&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC7TZNT2%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDYqau8Etw2AqFA%2Fao0PLo5jARIfKqvuys9FeOTh7XRJwIgAWxWmkpJzfWBhOSIqyLkjgwEeWnUJm8PEvW%2BghR3MGEqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNviPJtW7swYqUJBWyrcA8Ol9IcDlL0DEgCx7dN5wk%2Frr9Hb9j2YspxovPmZLPfBj8Pbk%2BxZo9h5R%2FUfTxO2H5u6lOfZHoI41kKmKKMa0YMMm%2B0h93Xu8UcPZ96cvIoi%2BeoOMASa8mdTn54ceYCfwvZO46TFSV1MIMLW%2BRz97Lznqucrr21LqIrWc7EPfFjTgRT%2Ft3p%2BC1pXDlTRm6ww8vU1rG5X1Jy3rltAW5YmJagjxIolKfNIPG4U7UhderX6RcHH8gd%2B7xbWn5%2FRyBK7CaCywIKIQ8UP3bMUTFTPfJxj0rntOmwGwfkbHbHh7m3ni7zjbRcRf5gugouUeLO68eL1C%2BcxpRZw70Z9ivCivE9zFIWKE9VuK%2F3090tQaTFEXtJkn2eRcFLQ%2BVmir18MMIFoSwitT%2BIqNTjVVFJHXFBy4olPcONqU4SMHPhIdFkZTVySCWmnoWbUDpmoWtv2ELlgbh5qUOkt7%2BHvDZXu6X8F3eb4a15egZLG%2F%2BKjK2eL3KG9iq4Ilx4TuPym0G33fmygMkd5q%2BZl%2FvO9dcZHFDgxjJ0usf%2F1mlKGFwQ4g%2Bzbv7cBbR5LaBAj6CkpcwEiX86F7SdBqSaFZHrQ%2BXOBgmcbWmzkcMAd%2BVOHuOPOCva%2B3flo0cRHYFD2kqUxMK%2FCk8AGOqUB%2Bd5KQYYHAGOoAmxOTU%2BIBuFah3ywTSwCXCJVV04rOULtjSKX43ntxV0an37VdW4rwCyyKKQCW9DBccF4FXpBv%2Fr%2FbShs7eLBHuPCSe76Gxqa2g1Z%2FtpkRXCw4g1L0WMn%2FqKVns4285l5CTsceI3xqf%2BhCtpXtpn7UHgwQghmpacMY16XavEscoCfbiC8tj31WvEsK2gUIf5bTMzoqtCjWMcVh51U&X-Amz-Signature=6ff333ccf79c40286c256b8a8b6f0685e96a6745e3f7bf4f3b987e74c43dfd85&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC7TZNT2%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDYqau8Etw2AqFA%2Fao0PLo5jARIfKqvuys9FeOTh7XRJwIgAWxWmkpJzfWBhOSIqyLkjgwEeWnUJm8PEvW%2BghR3MGEqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNviPJtW7swYqUJBWyrcA8Ol9IcDlL0DEgCx7dN5wk%2Frr9Hb9j2YspxovPmZLPfBj8Pbk%2BxZo9h5R%2FUfTxO2H5u6lOfZHoI41kKmKKMa0YMMm%2B0h93Xu8UcPZ96cvIoi%2BeoOMASa8mdTn54ceYCfwvZO46TFSV1MIMLW%2BRz97Lznqucrr21LqIrWc7EPfFjTgRT%2Ft3p%2BC1pXDlTRm6ww8vU1rG5X1Jy3rltAW5YmJagjxIolKfNIPG4U7UhderX6RcHH8gd%2B7xbWn5%2FRyBK7CaCywIKIQ8UP3bMUTFTPfJxj0rntOmwGwfkbHbHh7m3ni7zjbRcRf5gugouUeLO68eL1C%2BcxpRZw70Z9ivCivE9zFIWKE9VuK%2F3090tQaTFEXtJkn2eRcFLQ%2BVmir18MMIFoSwitT%2BIqNTjVVFJHXFBy4olPcONqU4SMHPhIdFkZTVySCWmnoWbUDpmoWtv2ELlgbh5qUOkt7%2BHvDZXu6X8F3eb4a15egZLG%2F%2BKjK2eL3KG9iq4Ilx4TuPym0G33fmygMkd5q%2BZl%2FvO9dcZHFDgxjJ0usf%2F1mlKGFwQ4g%2Bzbv7cBbR5LaBAj6CkpcwEiX86F7SdBqSaFZHrQ%2BXOBgmcbWmzkcMAd%2BVOHuOPOCva%2B3flo0cRHYFD2kqUxMK%2FCk8AGOqUB%2Bd5KQYYHAGOoAmxOTU%2BIBuFah3ywTSwCXCJVV04rOULtjSKX43ntxV0an37VdW4rwCyyKKQCW9DBccF4FXpBv%2Fr%2FbShs7eLBHuPCSe76Gxqa2g1Z%2FtpkRXCw4g1L0WMn%2FqKVns4285l5CTsceI3xqf%2BhCtpXtpn7UHgwQghmpacMY16XavEscoCfbiC8tj31WvEsK2gUIf5bTMzoqtCjWMcVh51U&X-Amz-Signature=5cfb6d37dac8259398ad1cdbbfee24585d5aa0548ed62b88151b9f5d2111da52&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC7TZNT2%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDYqau8Etw2AqFA%2Fao0PLo5jARIfKqvuys9FeOTh7XRJwIgAWxWmkpJzfWBhOSIqyLkjgwEeWnUJm8PEvW%2BghR3MGEqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNviPJtW7swYqUJBWyrcA8Ol9IcDlL0DEgCx7dN5wk%2Frr9Hb9j2YspxovPmZLPfBj8Pbk%2BxZo9h5R%2FUfTxO2H5u6lOfZHoI41kKmKKMa0YMMm%2B0h93Xu8UcPZ96cvIoi%2BeoOMASa8mdTn54ceYCfwvZO46TFSV1MIMLW%2BRz97Lznqucrr21LqIrWc7EPfFjTgRT%2Ft3p%2BC1pXDlTRm6ww8vU1rG5X1Jy3rltAW5YmJagjxIolKfNIPG4U7UhderX6RcHH8gd%2B7xbWn5%2FRyBK7CaCywIKIQ8UP3bMUTFTPfJxj0rntOmwGwfkbHbHh7m3ni7zjbRcRf5gugouUeLO68eL1C%2BcxpRZw70Z9ivCivE9zFIWKE9VuK%2F3090tQaTFEXtJkn2eRcFLQ%2BVmir18MMIFoSwitT%2BIqNTjVVFJHXFBy4olPcONqU4SMHPhIdFkZTVySCWmnoWbUDpmoWtv2ELlgbh5qUOkt7%2BHvDZXu6X8F3eb4a15egZLG%2F%2BKjK2eL3KG9iq4Ilx4TuPym0G33fmygMkd5q%2BZl%2FvO9dcZHFDgxjJ0usf%2F1mlKGFwQ4g%2Bzbv7cBbR5LaBAj6CkpcwEiX86F7SdBqSaFZHrQ%2BXOBgmcbWmzkcMAd%2BVOHuOPOCva%2B3flo0cRHYFD2kqUxMK%2FCk8AGOqUB%2Bd5KQYYHAGOoAmxOTU%2BIBuFah3ywTSwCXCJVV04rOULtjSKX43ntxV0an37VdW4rwCyyKKQCW9DBccF4FXpBv%2Fr%2FbShs7eLBHuPCSe76Gxqa2g1Z%2FtpkRXCw4g1L0WMn%2FqKVns4285l5CTsceI3xqf%2BhCtpXtpn7UHgwQghmpacMY16XavEscoCfbiC8tj31WvEsK2gUIf5bTMzoqtCjWMcVh51U&X-Amz-Signature=5890e3e4f827507d02e54a7610db2ff9d6a6cf5c675f970e210819d723ce6d57&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
