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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WINGW2TV%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZpdRLxJTKCw65ELZxTpfw5teh%2B3lPkZyyPpzMawS4fgIgPkAIjtF0L7Q6ruZncI7uyZ3h40D10QwS2FZOGIDfY%2F0qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWeLJuLJgjSOniIkircA9mdg1CpZl1nFE8ahi3ZbhUHCMk3AC4VeTJBGi9%2Bx14%2Fwqtp8zbFMC9bz9b5ruC4MtwpnDsr4NL2et1Qae9NjVS9avlmEvBbUFeNA1sEWOkiXVtxu5%2BXf%2F0hjxz2Jbc2P7NFQ88tbjPp3OwCOEOhuDNYs8b9EgcbPqnfkk3kL6EKxPirgYgtn5PArpQYxjlOGIXdtP58gUCkoYX3t36bnHtbw9jB62npw1KuV%2BfdsR%2BJ3uahYdOA9Jt210WDfLzoLSw9HvbqHY8n4BLw7O2vx%2BBH%2FOtkLQmrm1PeNm%2B2gLu8rmNjLlbrWZ5Ma1UjFvwHKYqn%2BxHY%2BL79we4j3G%2FQ5Q9tSzx0fkIh9OHMlzvCW%2FiX9LGnKxsiRBKXOFZroKJ%2FCu0od0xOBJelxQvj0N9m%2BdfnflKUNLmk7lNci9ZZRM8EQaG5z6KX7xSjYPyiZNxtophOKr5djty%2FHupjyheTd33uxf2Pf6SuxBgJFOcQbrMWHXrVINgaOebl2D3vI%2FCCZD7t8RyLnyzYd8tH5hAxiL1QzGHfSoiZHD1n9dxzPBtyI9k26tHQrrbuGAYzOx1pq1aXG2OHCcUone6X4cPkxnKBlKzt7u%2F4Ao7sFBreZeZ4v9DA0F6LR%2BfV7BIoMOqy48EGOqUBiFGCp2m7NBHG2U6Bqd7c0rTPR13ag1R%2BXeCOjzfN7iT%2FMIEg4YKklm8mC9jx4MfBIjttW9suiHseDic%2Bgobs%2F1C8t5InIsRCAW0yR7ZpBsrwkrRuK8e%2B6gyUS96hOyj2%2FuTHyqJc6ANRDbiSU7vwZViuoo4U6IvvmdLjEqkpfgF63SgEReKwTcFhD9Iv%2BYtSei5f8XQT8nl9C4TCuB7nKhzTNHop&X-Amz-Signature=fd6b001154b9b6732115e2b12b94282b55b8fbbdb47e65406d8a1af4fe20166a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WINGW2TV%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZpdRLxJTKCw65ELZxTpfw5teh%2B3lPkZyyPpzMawS4fgIgPkAIjtF0L7Q6ruZncI7uyZ3h40D10QwS2FZOGIDfY%2F0qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWeLJuLJgjSOniIkircA9mdg1CpZl1nFE8ahi3ZbhUHCMk3AC4VeTJBGi9%2Bx14%2Fwqtp8zbFMC9bz9b5ruC4MtwpnDsr4NL2et1Qae9NjVS9avlmEvBbUFeNA1sEWOkiXVtxu5%2BXf%2F0hjxz2Jbc2P7NFQ88tbjPp3OwCOEOhuDNYs8b9EgcbPqnfkk3kL6EKxPirgYgtn5PArpQYxjlOGIXdtP58gUCkoYX3t36bnHtbw9jB62npw1KuV%2BfdsR%2BJ3uahYdOA9Jt210WDfLzoLSw9HvbqHY8n4BLw7O2vx%2BBH%2FOtkLQmrm1PeNm%2B2gLu8rmNjLlbrWZ5Ma1UjFvwHKYqn%2BxHY%2BL79we4j3G%2FQ5Q9tSzx0fkIh9OHMlzvCW%2FiX9LGnKxsiRBKXOFZroKJ%2FCu0od0xOBJelxQvj0N9m%2BdfnflKUNLmk7lNci9ZZRM8EQaG5z6KX7xSjYPyiZNxtophOKr5djty%2FHupjyheTd33uxf2Pf6SuxBgJFOcQbrMWHXrVINgaOebl2D3vI%2FCCZD7t8RyLnyzYd8tH5hAxiL1QzGHfSoiZHD1n9dxzPBtyI9k26tHQrrbuGAYzOx1pq1aXG2OHCcUone6X4cPkxnKBlKzt7u%2F4Ao7sFBreZeZ4v9DA0F6LR%2BfV7BIoMOqy48EGOqUBiFGCp2m7NBHG2U6Bqd7c0rTPR13ag1R%2BXeCOjzfN7iT%2FMIEg4YKklm8mC9jx4MfBIjttW9suiHseDic%2Bgobs%2F1C8t5InIsRCAW0yR7ZpBsrwkrRuK8e%2B6gyUS96hOyj2%2FuTHyqJc6ANRDbiSU7vwZViuoo4U6IvvmdLjEqkpfgF63SgEReKwTcFhD9Iv%2BYtSei5f8XQT8nl9C4TCuB7nKhzTNHop&X-Amz-Signature=d9ff77ea6eac2a32206cb0431f6ff946a72660544ad61b68e68f403e9a7d53fa&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WINGW2TV%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZpdRLxJTKCw65ELZxTpfw5teh%2B3lPkZyyPpzMawS4fgIgPkAIjtF0L7Q6ruZncI7uyZ3h40D10QwS2FZOGIDfY%2F0qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWeLJuLJgjSOniIkircA9mdg1CpZl1nFE8ahi3ZbhUHCMk3AC4VeTJBGi9%2Bx14%2Fwqtp8zbFMC9bz9b5ruC4MtwpnDsr4NL2et1Qae9NjVS9avlmEvBbUFeNA1sEWOkiXVtxu5%2BXf%2F0hjxz2Jbc2P7NFQ88tbjPp3OwCOEOhuDNYs8b9EgcbPqnfkk3kL6EKxPirgYgtn5PArpQYxjlOGIXdtP58gUCkoYX3t36bnHtbw9jB62npw1KuV%2BfdsR%2BJ3uahYdOA9Jt210WDfLzoLSw9HvbqHY8n4BLw7O2vx%2BBH%2FOtkLQmrm1PeNm%2B2gLu8rmNjLlbrWZ5Ma1UjFvwHKYqn%2BxHY%2BL79we4j3G%2FQ5Q9tSzx0fkIh9OHMlzvCW%2FiX9LGnKxsiRBKXOFZroKJ%2FCu0od0xOBJelxQvj0N9m%2BdfnflKUNLmk7lNci9ZZRM8EQaG5z6KX7xSjYPyiZNxtophOKr5djty%2FHupjyheTd33uxf2Pf6SuxBgJFOcQbrMWHXrVINgaOebl2D3vI%2FCCZD7t8RyLnyzYd8tH5hAxiL1QzGHfSoiZHD1n9dxzPBtyI9k26tHQrrbuGAYzOx1pq1aXG2OHCcUone6X4cPkxnKBlKzt7u%2F4Ao7sFBreZeZ4v9DA0F6LR%2BfV7BIoMOqy48EGOqUBiFGCp2m7NBHG2U6Bqd7c0rTPR13ag1R%2BXeCOjzfN7iT%2FMIEg4YKklm8mC9jx4MfBIjttW9suiHseDic%2Bgobs%2F1C8t5InIsRCAW0yR7ZpBsrwkrRuK8e%2B6gyUS96hOyj2%2FuTHyqJc6ANRDbiSU7vwZViuoo4U6IvvmdLjEqkpfgF63SgEReKwTcFhD9Iv%2BYtSei5f8XQT8nl9C4TCuB7nKhzTNHop&X-Amz-Signature=dbe58c3f7d7e84fa05e8e8274bcb09482e7243222b43d39885053434333b7e6e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WINGW2TV%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZpdRLxJTKCw65ELZxTpfw5teh%2B3lPkZyyPpzMawS4fgIgPkAIjtF0L7Q6ruZncI7uyZ3h40D10QwS2FZOGIDfY%2F0qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWeLJuLJgjSOniIkircA9mdg1CpZl1nFE8ahi3ZbhUHCMk3AC4VeTJBGi9%2Bx14%2Fwqtp8zbFMC9bz9b5ruC4MtwpnDsr4NL2et1Qae9NjVS9avlmEvBbUFeNA1sEWOkiXVtxu5%2BXf%2F0hjxz2Jbc2P7NFQ88tbjPp3OwCOEOhuDNYs8b9EgcbPqnfkk3kL6EKxPirgYgtn5PArpQYxjlOGIXdtP58gUCkoYX3t36bnHtbw9jB62npw1KuV%2BfdsR%2BJ3uahYdOA9Jt210WDfLzoLSw9HvbqHY8n4BLw7O2vx%2BBH%2FOtkLQmrm1PeNm%2B2gLu8rmNjLlbrWZ5Ma1UjFvwHKYqn%2BxHY%2BL79we4j3G%2FQ5Q9tSzx0fkIh9OHMlzvCW%2FiX9LGnKxsiRBKXOFZroKJ%2FCu0od0xOBJelxQvj0N9m%2BdfnflKUNLmk7lNci9ZZRM8EQaG5z6KX7xSjYPyiZNxtophOKr5djty%2FHupjyheTd33uxf2Pf6SuxBgJFOcQbrMWHXrVINgaOebl2D3vI%2FCCZD7t8RyLnyzYd8tH5hAxiL1QzGHfSoiZHD1n9dxzPBtyI9k26tHQrrbuGAYzOx1pq1aXG2OHCcUone6X4cPkxnKBlKzt7u%2F4Ao7sFBreZeZ4v9DA0F6LR%2BfV7BIoMOqy48EGOqUBiFGCp2m7NBHG2U6Bqd7c0rTPR13ag1R%2BXeCOjzfN7iT%2FMIEg4YKklm8mC9jx4MfBIjttW9suiHseDic%2Bgobs%2F1C8t5InIsRCAW0yR7ZpBsrwkrRuK8e%2B6gyUS96hOyj2%2FuTHyqJc6ANRDbiSU7vwZViuoo4U6IvvmdLjEqkpfgF63SgEReKwTcFhD9Iv%2BYtSei5f8XQT8nl9C4TCuB7nKhzTNHop&X-Amz-Signature=968c5c7634beec6ef762577885dd9aecf85e6efe8f61d45761a8b2e00601fe98&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WINGW2TV%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZpdRLxJTKCw65ELZxTpfw5teh%2B3lPkZyyPpzMawS4fgIgPkAIjtF0L7Q6ruZncI7uyZ3h40D10QwS2FZOGIDfY%2F0qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWeLJuLJgjSOniIkircA9mdg1CpZl1nFE8ahi3ZbhUHCMk3AC4VeTJBGi9%2Bx14%2Fwqtp8zbFMC9bz9b5ruC4MtwpnDsr4NL2et1Qae9NjVS9avlmEvBbUFeNA1sEWOkiXVtxu5%2BXf%2F0hjxz2Jbc2P7NFQ88tbjPp3OwCOEOhuDNYs8b9EgcbPqnfkk3kL6EKxPirgYgtn5PArpQYxjlOGIXdtP58gUCkoYX3t36bnHtbw9jB62npw1KuV%2BfdsR%2BJ3uahYdOA9Jt210WDfLzoLSw9HvbqHY8n4BLw7O2vx%2BBH%2FOtkLQmrm1PeNm%2B2gLu8rmNjLlbrWZ5Ma1UjFvwHKYqn%2BxHY%2BL79we4j3G%2FQ5Q9tSzx0fkIh9OHMlzvCW%2FiX9LGnKxsiRBKXOFZroKJ%2FCu0od0xOBJelxQvj0N9m%2BdfnflKUNLmk7lNci9ZZRM8EQaG5z6KX7xSjYPyiZNxtophOKr5djty%2FHupjyheTd33uxf2Pf6SuxBgJFOcQbrMWHXrVINgaOebl2D3vI%2FCCZD7t8RyLnyzYd8tH5hAxiL1QzGHfSoiZHD1n9dxzPBtyI9k26tHQrrbuGAYzOx1pq1aXG2OHCcUone6X4cPkxnKBlKzt7u%2F4Ao7sFBreZeZ4v9DA0F6LR%2BfV7BIoMOqy48EGOqUBiFGCp2m7NBHG2U6Bqd7c0rTPR13ag1R%2BXeCOjzfN7iT%2FMIEg4YKklm8mC9jx4MfBIjttW9suiHseDic%2Bgobs%2F1C8t5InIsRCAW0yR7ZpBsrwkrRuK8e%2B6gyUS96hOyj2%2FuTHyqJc6ANRDbiSU7vwZViuoo4U6IvvmdLjEqkpfgF63SgEReKwTcFhD9Iv%2BYtSei5f8XQT8nl9C4TCuB7nKhzTNHop&X-Amz-Signature=eff6f31d8f234f296016f03e34b7db77213718f78ab9c593fed85b2b22a1bed9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WINGW2TV%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZpdRLxJTKCw65ELZxTpfw5teh%2B3lPkZyyPpzMawS4fgIgPkAIjtF0L7Q6ruZncI7uyZ3h40D10QwS2FZOGIDfY%2F0qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWeLJuLJgjSOniIkircA9mdg1CpZl1nFE8ahi3ZbhUHCMk3AC4VeTJBGi9%2Bx14%2Fwqtp8zbFMC9bz9b5ruC4MtwpnDsr4NL2et1Qae9NjVS9avlmEvBbUFeNA1sEWOkiXVtxu5%2BXf%2F0hjxz2Jbc2P7NFQ88tbjPp3OwCOEOhuDNYs8b9EgcbPqnfkk3kL6EKxPirgYgtn5PArpQYxjlOGIXdtP58gUCkoYX3t36bnHtbw9jB62npw1KuV%2BfdsR%2BJ3uahYdOA9Jt210WDfLzoLSw9HvbqHY8n4BLw7O2vx%2BBH%2FOtkLQmrm1PeNm%2B2gLu8rmNjLlbrWZ5Ma1UjFvwHKYqn%2BxHY%2BL79we4j3G%2FQ5Q9tSzx0fkIh9OHMlzvCW%2FiX9LGnKxsiRBKXOFZroKJ%2FCu0od0xOBJelxQvj0N9m%2BdfnflKUNLmk7lNci9ZZRM8EQaG5z6KX7xSjYPyiZNxtophOKr5djty%2FHupjyheTd33uxf2Pf6SuxBgJFOcQbrMWHXrVINgaOebl2D3vI%2FCCZD7t8RyLnyzYd8tH5hAxiL1QzGHfSoiZHD1n9dxzPBtyI9k26tHQrrbuGAYzOx1pq1aXG2OHCcUone6X4cPkxnKBlKzt7u%2F4Ao7sFBreZeZ4v9DA0F6LR%2BfV7BIoMOqy48EGOqUBiFGCp2m7NBHG2U6Bqd7c0rTPR13ag1R%2BXeCOjzfN7iT%2FMIEg4YKklm8mC9jx4MfBIjttW9suiHseDic%2Bgobs%2F1C8t5InIsRCAW0yR7ZpBsrwkrRuK8e%2B6gyUS96hOyj2%2FuTHyqJc6ANRDbiSU7vwZViuoo4U6IvvmdLjEqkpfgF63SgEReKwTcFhD9Iv%2BYtSei5f8XQT8nl9C4TCuB7nKhzTNHop&X-Amz-Signature=03a2a73b7ee572e42a677fa23028a1ef21e33ffdc178f596605b2b62b17edd11&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WINGW2TV%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZpdRLxJTKCw65ELZxTpfw5teh%2B3lPkZyyPpzMawS4fgIgPkAIjtF0L7Q6ruZncI7uyZ3h40D10QwS2FZOGIDfY%2F0qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWeLJuLJgjSOniIkircA9mdg1CpZl1nFE8ahi3ZbhUHCMk3AC4VeTJBGi9%2Bx14%2Fwqtp8zbFMC9bz9b5ruC4MtwpnDsr4NL2et1Qae9NjVS9avlmEvBbUFeNA1sEWOkiXVtxu5%2BXf%2F0hjxz2Jbc2P7NFQ88tbjPp3OwCOEOhuDNYs8b9EgcbPqnfkk3kL6EKxPirgYgtn5PArpQYxjlOGIXdtP58gUCkoYX3t36bnHtbw9jB62npw1KuV%2BfdsR%2BJ3uahYdOA9Jt210WDfLzoLSw9HvbqHY8n4BLw7O2vx%2BBH%2FOtkLQmrm1PeNm%2B2gLu8rmNjLlbrWZ5Ma1UjFvwHKYqn%2BxHY%2BL79we4j3G%2FQ5Q9tSzx0fkIh9OHMlzvCW%2FiX9LGnKxsiRBKXOFZroKJ%2FCu0od0xOBJelxQvj0N9m%2BdfnflKUNLmk7lNci9ZZRM8EQaG5z6KX7xSjYPyiZNxtophOKr5djty%2FHupjyheTd33uxf2Pf6SuxBgJFOcQbrMWHXrVINgaOebl2D3vI%2FCCZD7t8RyLnyzYd8tH5hAxiL1QzGHfSoiZHD1n9dxzPBtyI9k26tHQrrbuGAYzOx1pq1aXG2OHCcUone6X4cPkxnKBlKzt7u%2F4Ao7sFBreZeZ4v9DA0F6LR%2BfV7BIoMOqy48EGOqUBiFGCp2m7NBHG2U6Bqd7c0rTPR13ag1R%2BXeCOjzfN7iT%2FMIEg4YKklm8mC9jx4MfBIjttW9suiHseDic%2Bgobs%2F1C8t5InIsRCAW0yR7ZpBsrwkrRuK8e%2B6gyUS96hOyj2%2FuTHyqJc6ANRDbiSU7vwZViuoo4U6IvvmdLjEqkpfgF63SgEReKwTcFhD9Iv%2BYtSei5f8XQT8nl9C4TCuB7nKhzTNHop&X-Amz-Signature=a96a5d3d9a94014e768d0df77d4f1950b00283e4ac4b9df80d0c2e0033796f98&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WINGW2TV%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZpdRLxJTKCw65ELZxTpfw5teh%2B3lPkZyyPpzMawS4fgIgPkAIjtF0L7Q6ruZncI7uyZ3h40D10QwS2FZOGIDfY%2F0qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWeLJuLJgjSOniIkircA9mdg1CpZl1nFE8ahi3ZbhUHCMk3AC4VeTJBGi9%2Bx14%2Fwqtp8zbFMC9bz9b5ruC4MtwpnDsr4NL2et1Qae9NjVS9avlmEvBbUFeNA1sEWOkiXVtxu5%2BXf%2F0hjxz2Jbc2P7NFQ88tbjPp3OwCOEOhuDNYs8b9EgcbPqnfkk3kL6EKxPirgYgtn5PArpQYxjlOGIXdtP58gUCkoYX3t36bnHtbw9jB62npw1KuV%2BfdsR%2BJ3uahYdOA9Jt210WDfLzoLSw9HvbqHY8n4BLw7O2vx%2BBH%2FOtkLQmrm1PeNm%2B2gLu8rmNjLlbrWZ5Ma1UjFvwHKYqn%2BxHY%2BL79we4j3G%2FQ5Q9tSzx0fkIh9OHMlzvCW%2FiX9LGnKxsiRBKXOFZroKJ%2FCu0od0xOBJelxQvj0N9m%2BdfnflKUNLmk7lNci9ZZRM8EQaG5z6KX7xSjYPyiZNxtophOKr5djty%2FHupjyheTd33uxf2Pf6SuxBgJFOcQbrMWHXrVINgaOebl2D3vI%2FCCZD7t8RyLnyzYd8tH5hAxiL1QzGHfSoiZHD1n9dxzPBtyI9k26tHQrrbuGAYzOx1pq1aXG2OHCcUone6X4cPkxnKBlKzt7u%2F4Ao7sFBreZeZ4v9DA0F6LR%2BfV7BIoMOqy48EGOqUBiFGCp2m7NBHG2U6Bqd7c0rTPR13ag1R%2BXeCOjzfN7iT%2FMIEg4YKklm8mC9jx4MfBIjttW9suiHseDic%2Bgobs%2F1C8t5InIsRCAW0yR7ZpBsrwkrRuK8e%2B6gyUS96hOyj2%2FuTHyqJc6ANRDbiSU7vwZViuoo4U6IvvmdLjEqkpfgF63SgEReKwTcFhD9Iv%2BYtSei5f8XQT8nl9C4TCuB7nKhzTNHop&X-Amz-Signature=a4100f9808dbe44aafd53e748fa2f35c59fe334c7ed9d46c51efddf187b60d96&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
