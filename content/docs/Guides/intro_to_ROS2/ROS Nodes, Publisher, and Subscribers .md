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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFRKL4JN%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIFsUJr6sv%2Bhnu8GVAmoQrvoVXB4YQbCxbpo8e9cES3i5AiEAoO0o6vFcC8PB7pRISNA%2FVvdw6NLS5eL6Zld6HY%2FrVSMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIWgepMnuGSP%2B6UsnircAzVPUlJKfSJa1eBJhr5XT3hxlI%2BQv2hEvTI%2FQkBoDWaBYnc2gDeX2rXpoBDDmiVoln70dctIWt5AD0EC360WUlNBi5Ue3z2U5384vRo3X2JopnTecGfTCpDku3%2BYyqxR4khHkTlVuIvrckPEcZDDegw5mHWsPBxZLZw%2FCoy%2FBfSHAlTGzNxqca8UJwzlB8OfB2Rj0z2bjzWhifAvG6lcdhsKPriKXgaW2FR2csY5xXVLLJW8NpDbSw1JcQ4ARnIMPYnpG26IdfG4oPOzgt7jAzSFlmLxo%2B6fwDvs2GmlJiLtUhyYR5UtQdqZ9n3u8tunuZ9QoERGURKlK98CJoeysaClpgLQIJ36vewpB%2B0C7Jg9u3qERqabaa3ugpB%2FRuv0U3FXr1E0PQrYURHD3GoFv8hBHPDntS1vgllgJBb2if0luxZl1dWAl6N%2FYWtnjbLgIBGsx4AWcLnG3OaI2QiQqQWajzq40FzQ2MvURPj4Jjafj71fXzj8g3JrOCfVQWg5v7DjxXffYQRb0K%2BWlDFTtPlKv6PnD1jBqQ8PvwCdq51Y%2BEpdMGRoJNZyMXH9mrr3fnYxYNpNvvtwijWHZcWvwoJSkdW3RBEXL6uoFu8v%2FojuliLR2SRXy2qTd18VMPjXh8IGOqUBYbQxVUTjUe7B7VMl3rnSc%2BprHIB2xyKO1RkhcpUpMZO4zgoW7%2BbB21O8YpZort1vV1Qh9rAT6mgnqAnqsquec4%2B%2FAka37A%2B30VuiZJy%2B299%2B2tFRfSGUwZ%2F7l1XxiCbGL3Xmuw8dHuhcOSPvLRErU0yMHW%2FMiG%2Bc1WCWWBWuMqahXWrzyibuWJ7xYwXynHBav2TdUt211Ui%2F3%2BiX9HQCaLzTzeaF&X-Amz-Signature=253a8ac3e8483423432c6d85d171730862a82ebbb944cb59aba23276cd5490eb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFRKL4JN%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIFsUJr6sv%2Bhnu8GVAmoQrvoVXB4YQbCxbpo8e9cES3i5AiEAoO0o6vFcC8PB7pRISNA%2FVvdw6NLS5eL6Zld6HY%2FrVSMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIWgepMnuGSP%2B6UsnircAzVPUlJKfSJa1eBJhr5XT3hxlI%2BQv2hEvTI%2FQkBoDWaBYnc2gDeX2rXpoBDDmiVoln70dctIWt5AD0EC360WUlNBi5Ue3z2U5384vRo3X2JopnTecGfTCpDku3%2BYyqxR4khHkTlVuIvrckPEcZDDegw5mHWsPBxZLZw%2FCoy%2FBfSHAlTGzNxqca8UJwzlB8OfB2Rj0z2bjzWhifAvG6lcdhsKPriKXgaW2FR2csY5xXVLLJW8NpDbSw1JcQ4ARnIMPYnpG26IdfG4oPOzgt7jAzSFlmLxo%2B6fwDvs2GmlJiLtUhyYR5UtQdqZ9n3u8tunuZ9QoERGURKlK98CJoeysaClpgLQIJ36vewpB%2B0C7Jg9u3qERqabaa3ugpB%2FRuv0U3FXr1E0PQrYURHD3GoFv8hBHPDntS1vgllgJBb2if0luxZl1dWAl6N%2FYWtnjbLgIBGsx4AWcLnG3OaI2QiQqQWajzq40FzQ2MvURPj4Jjafj71fXzj8g3JrOCfVQWg5v7DjxXffYQRb0K%2BWlDFTtPlKv6PnD1jBqQ8PvwCdq51Y%2BEpdMGRoJNZyMXH9mrr3fnYxYNpNvvtwijWHZcWvwoJSkdW3RBEXL6uoFu8v%2FojuliLR2SRXy2qTd18VMPjXh8IGOqUBYbQxVUTjUe7B7VMl3rnSc%2BprHIB2xyKO1RkhcpUpMZO4zgoW7%2BbB21O8YpZort1vV1Qh9rAT6mgnqAnqsquec4%2B%2FAka37A%2B30VuiZJy%2B299%2B2tFRfSGUwZ%2F7l1XxiCbGL3Xmuw8dHuhcOSPvLRErU0yMHW%2FMiG%2Bc1WCWWBWuMqahXWrzyibuWJ7xYwXynHBav2TdUt211Ui%2F3%2BiX9HQCaLzTzeaF&X-Amz-Signature=9ea32b6dda1c9ae7b71ec815a959b5b5082799c2ee1888de07d0c2520af734c6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFRKL4JN%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIFsUJr6sv%2Bhnu8GVAmoQrvoVXB4YQbCxbpo8e9cES3i5AiEAoO0o6vFcC8PB7pRISNA%2FVvdw6NLS5eL6Zld6HY%2FrVSMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIWgepMnuGSP%2B6UsnircAzVPUlJKfSJa1eBJhr5XT3hxlI%2BQv2hEvTI%2FQkBoDWaBYnc2gDeX2rXpoBDDmiVoln70dctIWt5AD0EC360WUlNBi5Ue3z2U5384vRo3X2JopnTecGfTCpDku3%2BYyqxR4khHkTlVuIvrckPEcZDDegw5mHWsPBxZLZw%2FCoy%2FBfSHAlTGzNxqca8UJwzlB8OfB2Rj0z2bjzWhifAvG6lcdhsKPriKXgaW2FR2csY5xXVLLJW8NpDbSw1JcQ4ARnIMPYnpG26IdfG4oPOzgt7jAzSFlmLxo%2B6fwDvs2GmlJiLtUhyYR5UtQdqZ9n3u8tunuZ9QoERGURKlK98CJoeysaClpgLQIJ36vewpB%2B0C7Jg9u3qERqabaa3ugpB%2FRuv0U3FXr1E0PQrYURHD3GoFv8hBHPDntS1vgllgJBb2if0luxZl1dWAl6N%2FYWtnjbLgIBGsx4AWcLnG3OaI2QiQqQWajzq40FzQ2MvURPj4Jjafj71fXzj8g3JrOCfVQWg5v7DjxXffYQRb0K%2BWlDFTtPlKv6PnD1jBqQ8PvwCdq51Y%2BEpdMGRoJNZyMXH9mrr3fnYxYNpNvvtwijWHZcWvwoJSkdW3RBEXL6uoFu8v%2FojuliLR2SRXy2qTd18VMPjXh8IGOqUBYbQxVUTjUe7B7VMl3rnSc%2BprHIB2xyKO1RkhcpUpMZO4zgoW7%2BbB21O8YpZort1vV1Qh9rAT6mgnqAnqsquec4%2B%2FAka37A%2B30VuiZJy%2B299%2B2tFRfSGUwZ%2F7l1XxiCbGL3Xmuw8dHuhcOSPvLRErU0yMHW%2FMiG%2Bc1WCWWBWuMqahXWrzyibuWJ7xYwXynHBav2TdUt211Ui%2F3%2BiX9HQCaLzTzeaF&X-Amz-Signature=6670b13a96887ae1e6f3cd48feb82a22c19a5e341d8f7944eb8f8499ffcf1794&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFRKL4JN%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIFsUJr6sv%2Bhnu8GVAmoQrvoVXB4YQbCxbpo8e9cES3i5AiEAoO0o6vFcC8PB7pRISNA%2FVvdw6NLS5eL6Zld6HY%2FrVSMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIWgepMnuGSP%2B6UsnircAzVPUlJKfSJa1eBJhr5XT3hxlI%2BQv2hEvTI%2FQkBoDWaBYnc2gDeX2rXpoBDDmiVoln70dctIWt5AD0EC360WUlNBi5Ue3z2U5384vRo3X2JopnTecGfTCpDku3%2BYyqxR4khHkTlVuIvrckPEcZDDegw5mHWsPBxZLZw%2FCoy%2FBfSHAlTGzNxqca8UJwzlB8OfB2Rj0z2bjzWhifAvG6lcdhsKPriKXgaW2FR2csY5xXVLLJW8NpDbSw1JcQ4ARnIMPYnpG26IdfG4oPOzgt7jAzSFlmLxo%2B6fwDvs2GmlJiLtUhyYR5UtQdqZ9n3u8tunuZ9QoERGURKlK98CJoeysaClpgLQIJ36vewpB%2B0C7Jg9u3qERqabaa3ugpB%2FRuv0U3FXr1E0PQrYURHD3GoFv8hBHPDntS1vgllgJBb2if0luxZl1dWAl6N%2FYWtnjbLgIBGsx4AWcLnG3OaI2QiQqQWajzq40FzQ2MvURPj4Jjafj71fXzj8g3JrOCfVQWg5v7DjxXffYQRb0K%2BWlDFTtPlKv6PnD1jBqQ8PvwCdq51Y%2BEpdMGRoJNZyMXH9mrr3fnYxYNpNvvtwijWHZcWvwoJSkdW3RBEXL6uoFu8v%2FojuliLR2SRXy2qTd18VMPjXh8IGOqUBYbQxVUTjUe7B7VMl3rnSc%2BprHIB2xyKO1RkhcpUpMZO4zgoW7%2BbB21O8YpZort1vV1Qh9rAT6mgnqAnqsquec4%2B%2FAka37A%2B30VuiZJy%2B299%2B2tFRfSGUwZ%2F7l1XxiCbGL3Xmuw8dHuhcOSPvLRErU0yMHW%2FMiG%2Bc1WCWWBWuMqahXWrzyibuWJ7xYwXynHBav2TdUt211Ui%2F3%2BiX9HQCaLzTzeaF&X-Amz-Signature=a18c53d926e84eadfbe7e6809e0faf5c268c4710011b333c02ac267d69b23b99&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFRKL4JN%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIFsUJr6sv%2Bhnu8GVAmoQrvoVXB4YQbCxbpo8e9cES3i5AiEAoO0o6vFcC8PB7pRISNA%2FVvdw6NLS5eL6Zld6HY%2FrVSMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIWgepMnuGSP%2B6UsnircAzVPUlJKfSJa1eBJhr5XT3hxlI%2BQv2hEvTI%2FQkBoDWaBYnc2gDeX2rXpoBDDmiVoln70dctIWt5AD0EC360WUlNBi5Ue3z2U5384vRo3X2JopnTecGfTCpDku3%2BYyqxR4khHkTlVuIvrckPEcZDDegw5mHWsPBxZLZw%2FCoy%2FBfSHAlTGzNxqca8UJwzlB8OfB2Rj0z2bjzWhifAvG6lcdhsKPriKXgaW2FR2csY5xXVLLJW8NpDbSw1JcQ4ARnIMPYnpG26IdfG4oPOzgt7jAzSFlmLxo%2B6fwDvs2GmlJiLtUhyYR5UtQdqZ9n3u8tunuZ9QoERGURKlK98CJoeysaClpgLQIJ36vewpB%2B0C7Jg9u3qERqabaa3ugpB%2FRuv0U3FXr1E0PQrYURHD3GoFv8hBHPDntS1vgllgJBb2if0luxZl1dWAl6N%2FYWtnjbLgIBGsx4AWcLnG3OaI2QiQqQWajzq40FzQ2MvURPj4Jjafj71fXzj8g3JrOCfVQWg5v7DjxXffYQRb0K%2BWlDFTtPlKv6PnD1jBqQ8PvwCdq51Y%2BEpdMGRoJNZyMXH9mrr3fnYxYNpNvvtwijWHZcWvwoJSkdW3RBEXL6uoFu8v%2FojuliLR2SRXy2qTd18VMPjXh8IGOqUBYbQxVUTjUe7B7VMl3rnSc%2BprHIB2xyKO1RkhcpUpMZO4zgoW7%2BbB21O8YpZort1vV1Qh9rAT6mgnqAnqsquec4%2B%2FAka37A%2B30VuiZJy%2B299%2B2tFRfSGUwZ%2F7l1XxiCbGL3Xmuw8dHuhcOSPvLRErU0yMHW%2FMiG%2Bc1WCWWBWuMqahXWrzyibuWJ7xYwXynHBav2TdUt211Ui%2F3%2BiX9HQCaLzTzeaF&X-Amz-Signature=13587a8f8d7f7011e9698bad1742a6829920f571f58433e5ac3714387faba57c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFRKL4JN%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIFsUJr6sv%2Bhnu8GVAmoQrvoVXB4YQbCxbpo8e9cES3i5AiEAoO0o6vFcC8PB7pRISNA%2FVvdw6NLS5eL6Zld6HY%2FrVSMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIWgepMnuGSP%2B6UsnircAzVPUlJKfSJa1eBJhr5XT3hxlI%2BQv2hEvTI%2FQkBoDWaBYnc2gDeX2rXpoBDDmiVoln70dctIWt5AD0EC360WUlNBi5Ue3z2U5384vRo3X2JopnTecGfTCpDku3%2BYyqxR4khHkTlVuIvrckPEcZDDegw5mHWsPBxZLZw%2FCoy%2FBfSHAlTGzNxqca8UJwzlB8OfB2Rj0z2bjzWhifAvG6lcdhsKPriKXgaW2FR2csY5xXVLLJW8NpDbSw1JcQ4ARnIMPYnpG26IdfG4oPOzgt7jAzSFlmLxo%2B6fwDvs2GmlJiLtUhyYR5UtQdqZ9n3u8tunuZ9QoERGURKlK98CJoeysaClpgLQIJ36vewpB%2B0C7Jg9u3qERqabaa3ugpB%2FRuv0U3FXr1E0PQrYURHD3GoFv8hBHPDntS1vgllgJBb2if0luxZl1dWAl6N%2FYWtnjbLgIBGsx4AWcLnG3OaI2QiQqQWajzq40FzQ2MvURPj4Jjafj71fXzj8g3JrOCfVQWg5v7DjxXffYQRb0K%2BWlDFTtPlKv6PnD1jBqQ8PvwCdq51Y%2BEpdMGRoJNZyMXH9mrr3fnYxYNpNvvtwijWHZcWvwoJSkdW3RBEXL6uoFu8v%2FojuliLR2SRXy2qTd18VMPjXh8IGOqUBYbQxVUTjUe7B7VMl3rnSc%2BprHIB2xyKO1RkhcpUpMZO4zgoW7%2BbB21O8YpZort1vV1Qh9rAT6mgnqAnqsquec4%2B%2FAka37A%2B30VuiZJy%2B299%2B2tFRfSGUwZ%2F7l1XxiCbGL3Xmuw8dHuhcOSPvLRErU0yMHW%2FMiG%2Bc1WCWWBWuMqahXWrzyibuWJ7xYwXynHBav2TdUt211Ui%2F3%2BiX9HQCaLzTzeaF&X-Amz-Signature=b104a8b8810bb9c7125fc1f0e4fb3595014ac24eb890d882a71b45dd2c199eca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFRKL4JN%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIFsUJr6sv%2Bhnu8GVAmoQrvoVXB4YQbCxbpo8e9cES3i5AiEAoO0o6vFcC8PB7pRISNA%2FVvdw6NLS5eL6Zld6HY%2FrVSMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIWgepMnuGSP%2B6UsnircAzVPUlJKfSJa1eBJhr5XT3hxlI%2BQv2hEvTI%2FQkBoDWaBYnc2gDeX2rXpoBDDmiVoln70dctIWt5AD0EC360WUlNBi5Ue3z2U5384vRo3X2JopnTecGfTCpDku3%2BYyqxR4khHkTlVuIvrckPEcZDDegw5mHWsPBxZLZw%2FCoy%2FBfSHAlTGzNxqca8UJwzlB8OfB2Rj0z2bjzWhifAvG6lcdhsKPriKXgaW2FR2csY5xXVLLJW8NpDbSw1JcQ4ARnIMPYnpG26IdfG4oPOzgt7jAzSFlmLxo%2B6fwDvs2GmlJiLtUhyYR5UtQdqZ9n3u8tunuZ9QoERGURKlK98CJoeysaClpgLQIJ36vewpB%2B0C7Jg9u3qERqabaa3ugpB%2FRuv0U3FXr1E0PQrYURHD3GoFv8hBHPDntS1vgllgJBb2if0luxZl1dWAl6N%2FYWtnjbLgIBGsx4AWcLnG3OaI2QiQqQWajzq40FzQ2MvURPj4Jjafj71fXzj8g3JrOCfVQWg5v7DjxXffYQRb0K%2BWlDFTtPlKv6PnD1jBqQ8PvwCdq51Y%2BEpdMGRoJNZyMXH9mrr3fnYxYNpNvvtwijWHZcWvwoJSkdW3RBEXL6uoFu8v%2FojuliLR2SRXy2qTd18VMPjXh8IGOqUBYbQxVUTjUe7B7VMl3rnSc%2BprHIB2xyKO1RkhcpUpMZO4zgoW7%2BbB21O8YpZort1vV1Qh9rAT6mgnqAnqsquec4%2B%2FAka37A%2B30VuiZJy%2B299%2B2tFRfSGUwZ%2F7l1XxiCbGL3Xmuw8dHuhcOSPvLRErU0yMHW%2FMiG%2Bc1WCWWBWuMqahXWrzyibuWJ7xYwXynHBav2TdUt211Ui%2F3%2BiX9HQCaLzTzeaF&X-Amz-Signature=343db70b0c50078764f89de7622399a653bbb3aecce96d1c01bf27712ce2b938&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFRKL4JN%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIFsUJr6sv%2Bhnu8GVAmoQrvoVXB4YQbCxbpo8e9cES3i5AiEAoO0o6vFcC8PB7pRISNA%2FVvdw6NLS5eL6Zld6HY%2FrVSMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIWgepMnuGSP%2B6UsnircAzVPUlJKfSJa1eBJhr5XT3hxlI%2BQv2hEvTI%2FQkBoDWaBYnc2gDeX2rXpoBDDmiVoln70dctIWt5AD0EC360WUlNBi5Ue3z2U5384vRo3X2JopnTecGfTCpDku3%2BYyqxR4khHkTlVuIvrckPEcZDDegw5mHWsPBxZLZw%2FCoy%2FBfSHAlTGzNxqca8UJwzlB8OfB2Rj0z2bjzWhifAvG6lcdhsKPriKXgaW2FR2csY5xXVLLJW8NpDbSw1JcQ4ARnIMPYnpG26IdfG4oPOzgt7jAzSFlmLxo%2B6fwDvs2GmlJiLtUhyYR5UtQdqZ9n3u8tunuZ9QoERGURKlK98CJoeysaClpgLQIJ36vewpB%2B0C7Jg9u3qERqabaa3ugpB%2FRuv0U3FXr1E0PQrYURHD3GoFv8hBHPDntS1vgllgJBb2if0luxZl1dWAl6N%2FYWtnjbLgIBGsx4AWcLnG3OaI2QiQqQWajzq40FzQ2MvURPj4Jjafj71fXzj8g3JrOCfVQWg5v7DjxXffYQRb0K%2BWlDFTtPlKv6PnD1jBqQ8PvwCdq51Y%2BEpdMGRoJNZyMXH9mrr3fnYxYNpNvvtwijWHZcWvwoJSkdW3RBEXL6uoFu8v%2FojuliLR2SRXy2qTd18VMPjXh8IGOqUBYbQxVUTjUe7B7VMl3rnSc%2BprHIB2xyKO1RkhcpUpMZO4zgoW7%2BbB21O8YpZort1vV1Qh9rAT6mgnqAnqsquec4%2B%2FAka37A%2B30VuiZJy%2B299%2B2tFRfSGUwZ%2F7l1XxiCbGL3Xmuw8dHuhcOSPvLRErU0yMHW%2FMiG%2Bc1WCWWBWuMqahXWrzyibuWJ7xYwXynHBav2TdUt211Ui%2F3%2BiX9HQCaLzTzeaF&X-Amz-Signature=a54245af824fb45fb14c4dbfa456fb591eece248598c1bbe093e6da68435b7a4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
