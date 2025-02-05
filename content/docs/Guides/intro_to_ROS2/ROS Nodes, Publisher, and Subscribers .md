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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPITHQOY%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFmujNx2QGYEclptMm6zlACGdDWYpnKbIRYUO0XR2dp8AiB4qprpuZ5tlouCawm5korPTCT2AXs1iSFZZYxfFB4jVSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMuGiBpPR2eHghFt%2BJKtwDggazYdLOut24jahY%2BP3u4XBn4riNVaJjyD7Gn%2BWbIjBWWF0%2B3zpu71iZoShXMMZDGoKM6xYmE97wJqu0yZnVhqQAj2Pgk%2FiVRAC%2BIuv3eed3rzz07lXoswYoFapZW4uf52HzK%2FzQ3Tn%2FWoJo1CX26JKg9PWAxnZDZu9UJ8fujmUW%2BlFlve20QzYNn2JNaQWUYRu6iZ176%2FV4l9%2F0ykxL0ijJM2%2BsXLPQ1EvZLk%2BjXZe5NyWHwMcLWAaFcPCsponI9pvBA0D%2FoJ0BBEc3m%2FcD5FefRcU0PkZ3bxZuVAO9g2%2B6InkGkqWqaFTJiTOQ1ruwTthovqBmCCY2dPruXy7OEkardRXJWSsl27ullnnCBAEQkr6bfd551ECnB18iefo95032VWos42BDeGfHpXvBDawfy2ejebKH76b6o2TK1R%2BAbz309%2FEnQgfDQodwoP40xWKM786yoM2WwuY2WeOCY2%2Bvltv%2BXqpGw7WAEPvApkMX5ZU2LEboTLM7NH6QRBRGQgtk4RmFcHQv%2BXdW0FaMRxSWWVms5%2BNS4eUvJbRT9wH%2Bd%2FuVEEJN7gNfP%2BedPmjFA0EJ4BpGGJphTuEZyv6%2FQrMnbwVhB2LdZ1Uq769m7RP%2F7082e%2FT6FkDKO%2BAw0oyNvQY6pgHpddbzDUYCgaOLBAPqYakyu6iiQZd9vp4vfN9%2FgzcBLlLXy5XlbkahC7ep4SBs0XvKQYTtx%2FjM1CJIu8pm362aS6iQiqIXUSyXwXWIS2L6PM9qFTDKJa2FGghnf%2FmncyR3jIfwxOXSHGl1gLKyxHJz7OmPKglYbcSXHC7kzkizqgVPHvgH5SY%2F4QhGyn2yTpvkfay6rzVk8n%2Fi1JRGAdqSl4k4mWd6&X-Amz-Signature=0c59c9916ae4e1c8f48496647c2317b139bce641755c7707043f649b1f9ece5e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPITHQOY%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFmujNx2QGYEclptMm6zlACGdDWYpnKbIRYUO0XR2dp8AiB4qprpuZ5tlouCawm5korPTCT2AXs1iSFZZYxfFB4jVSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMuGiBpPR2eHghFt%2BJKtwDggazYdLOut24jahY%2BP3u4XBn4riNVaJjyD7Gn%2BWbIjBWWF0%2B3zpu71iZoShXMMZDGoKM6xYmE97wJqu0yZnVhqQAj2Pgk%2FiVRAC%2BIuv3eed3rzz07lXoswYoFapZW4uf52HzK%2FzQ3Tn%2FWoJo1CX26JKg9PWAxnZDZu9UJ8fujmUW%2BlFlve20QzYNn2JNaQWUYRu6iZ176%2FV4l9%2F0ykxL0ijJM2%2BsXLPQ1EvZLk%2BjXZe5NyWHwMcLWAaFcPCsponI9pvBA0D%2FoJ0BBEc3m%2FcD5FefRcU0PkZ3bxZuVAO9g2%2B6InkGkqWqaFTJiTOQ1ruwTthovqBmCCY2dPruXy7OEkardRXJWSsl27ullnnCBAEQkr6bfd551ECnB18iefo95032VWos42BDeGfHpXvBDawfy2ejebKH76b6o2TK1R%2BAbz309%2FEnQgfDQodwoP40xWKM786yoM2WwuY2WeOCY2%2Bvltv%2BXqpGw7WAEPvApkMX5ZU2LEboTLM7NH6QRBRGQgtk4RmFcHQv%2BXdW0FaMRxSWWVms5%2BNS4eUvJbRT9wH%2Bd%2FuVEEJN7gNfP%2BedPmjFA0EJ4BpGGJphTuEZyv6%2FQrMnbwVhB2LdZ1Uq769m7RP%2F7082e%2FT6FkDKO%2BAw0oyNvQY6pgHpddbzDUYCgaOLBAPqYakyu6iiQZd9vp4vfN9%2FgzcBLlLXy5XlbkahC7ep4SBs0XvKQYTtx%2FjM1CJIu8pm362aS6iQiqIXUSyXwXWIS2L6PM9qFTDKJa2FGghnf%2FmncyR3jIfwxOXSHGl1gLKyxHJz7OmPKglYbcSXHC7kzkizqgVPHvgH5SY%2F4QhGyn2yTpvkfay6rzVk8n%2Fi1JRGAdqSl4k4mWd6&X-Amz-Signature=01ff1cec716cc4e4e126c8a7b05972980292b3ff0c482eac7427464dba8b69f2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPITHQOY%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFmujNx2QGYEclptMm6zlACGdDWYpnKbIRYUO0XR2dp8AiB4qprpuZ5tlouCawm5korPTCT2AXs1iSFZZYxfFB4jVSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMuGiBpPR2eHghFt%2BJKtwDggazYdLOut24jahY%2BP3u4XBn4riNVaJjyD7Gn%2BWbIjBWWF0%2B3zpu71iZoShXMMZDGoKM6xYmE97wJqu0yZnVhqQAj2Pgk%2FiVRAC%2BIuv3eed3rzz07lXoswYoFapZW4uf52HzK%2FzQ3Tn%2FWoJo1CX26JKg9PWAxnZDZu9UJ8fujmUW%2BlFlve20QzYNn2JNaQWUYRu6iZ176%2FV4l9%2F0ykxL0ijJM2%2BsXLPQ1EvZLk%2BjXZe5NyWHwMcLWAaFcPCsponI9pvBA0D%2FoJ0BBEc3m%2FcD5FefRcU0PkZ3bxZuVAO9g2%2B6InkGkqWqaFTJiTOQ1ruwTthovqBmCCY2dPruXy7OEkardRXJWSsl27ullnnCBAEQkr6bfd551ECnB18iefo95032VWos42BDeGfHpXvBDawfy2ejebKH76b6o2TK1R%2BAbz309%2FEnQgfDQodwoP40xWKM786yoM2WwuY2WeOCY2%2Bvltv%2BXqpGw7WAEPvApkMX5ZU2LEboTLM7NH6QRBRGQgtk4RmFcHQv%2BXdW0FaMRxSWWVms5%2BNS4eUvJbRT9wH%2Bd%2FuVEEJN7gNfP%2BedPmjFA0EJ4BpGGJphTuEZyv6%2FQrMnbwVhB2LdZ1Uq769m7RP%2F7082e%2FT6FkDKO%2BAw0oyNvQY6pgHpddbzDUYCgaOLBAPqYakyu6iiQZd9vp4vfN9%2FgzcBLlLXy5XlbkahC7ep4SBs0XvKQYTtx%2FjM1CJIu8pm362aS6iQiqIXUSyXwXWIS2L6PM9qFTDKJa2FGghnf%2FmncyR3jIfwxOXSHGl1gLKyxHJz7OmPKglYbcSXHC7kzkizqgVPHvgH5SY%2F4QhGyn2yTpvkfay6rzVk8n%2Fi1JRGAdqSl4k4mWd6&X-Amz-Signature=bbd9073e2eddb9ecc60277135767cdf456d5f1032eb09d081418612c69833439&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPITHQOY%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFmujNx2QGYEclptMm6zlACGdDWYpnKbIRYUO0XR2dp8AiB4qprpuZ5tlouCawm5korPTCT2AXs1iSFZZYxfFB4jVSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMuGiBpPR2eHghFt%2BJKtwDggazYdLOut24jahY%2BP3u4XBn4riNVaJjyD7Gn%2BWbIjBWWF0%2B3zpu71iZoShXMMZDGoKM6xYmE97wJqu0yZnVhqQAj2Pgk%2FiVRAC%2BIuv3eed3rzz07lXoswYoFapZW4uf52HzK%2FzQ3Tn%2FWoJo1CX26JKg9PWAxnZDZu9UJ8fujmUW%2BlFlve20QzYNn2JNaQWUYRu6iZ176%2FV4l9%2F0ykxL0ijJM2%2BsXLPQ1EvZLk%2BjXZe5NyWHwMcLWAaFcPCsponI9pvBA0D%2FoJ0BBEc3m%2FcD5FefRcU0PkZ3bxZuVAO9g2%2B6InkGkqWqaFTJiTOQ1ruwTthovqBmCCY2dPruXy7OEkardRXJWSsl27ullnnCBAEQkr6bfd551ECnB18iefo95032VWos42BDeGfHpXvBDawfy2ejebKH76b6o2TK1R%2BAbz309%2FEnQgfDQodwoP40xWKM786yoM2WwuY2WeOCY2%2Bvltv%2BXqpGw7WAEPvApkMX5ZU2LEboTLM7NH6QRBRGQgtk4RmFcHQv%2BXdW0FaMRxSWWVms5%2BNS4eUvJbRT9wH%2Bd%2FuVEEJN7gNfP%2BedPmjFA0EJ4BpGGJphTuEZyv6%2FQrMnbwVhB2LdZ1Uq769m7RP%2F7082e%2FT6FkDKO%2BAw0oyNvQY6pgHpddbzDUYCgaOLBAPqYakyu6iiQZd9vp4vfN9%2FgzcBLlLXy5XlbkahC7ep4SBs0XvKQYTtx%2FjM1CJIu8pm362aS6iQiqIXUSyXwXWIS2L6PM9qFTDKJa2FGghnf%2FmncyR3jIfwxOXSHGl1gLKyxHJz7OmPKglYbcSXHC7kzkizqgVPHvgH5SY%2F4QhGyn2yTpvkfay6rzVk8n%2Fi1JRGAdqSl4k4mWd6&X-Amz-Signature=59710a949c4a0cc1f55e22ecab477ee2fcf32f374faee74e1a311d1c39131ef5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPITHQOY%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFmujNx2QGYEclptMm6zlACGdDWYpnKbIRYUO0XR2dp8AiB4qprpuZ5tlouCawm5korPTCT2AXs1iSFZZYxfFB4jVSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMuGiBpPR2eHghFt%2BJKtwDggazYdLOut24jahY%2BP3u4XBn4riNVaJjyD7Gn%2BWbIjBWWF0%2B3zpu71iZoShXMMZDGoKM6xYmE97wJqu0yZnVhqQAj2Pgk%2FiVRAC%2BIuv3eed3rzz07lXoswYoFapZW4uf52HzK%2FzQ3Tn%2FWoJo1CX26JKg9PWAxnZDZu9UJ8fujmUW%2BlFlve20QzYNn2JNaQWUYRu6iZ176%2FV4l9%2F0ykxL0ijJM2%2BsXLPQ1EvZLk%2BjXZe5NyWHwMcLWAaFcPCsponI9pvBA0D%2FoJ0BBEc3m%2FcD5FefRcU0PkZ3bxZuVAO9g2%2B6InkGkqWqaFTJiTOQ1ruwTthovqBmCCY2dPruXy7OEkardRXJWSsl27ullnnCBAEQkr6bfd551ECnB18iefo95032VWos42BDeGfHpXvBDawfy2ejebKH76b6o2TK1R%2BAbz309%2FEnQgfDQodwoP40xWKM786yoM2WwuY2WeOCY2%2Bvltv%2BXqpGw7WAEPvApkMX5ZU2LEboTLM7NH6QRBRGQgtk4RmFcHQv%2BXdW0FaMRxSWWVms5%2BNS4eUvJbRT9wH%2Bd%2FuVEEJN7gNfP%2BedPmjFA0EJ4BpGGJphTuEZyv6%2FQrMnbwVhB2LdZ1Uq769m7RP%2F7082e%2FT6FkDKO%2BAw0oyNvQY6pgHpddbzDUYCgaOLBAPqYakyu6iiQZd9vp4vfN9%2FgzcBLlLXy5XlbkahC7ep4SBs0XvKQYTtx%2FjM1CJIu8pm362aS6iQiqIXUSyXwXWIS2L6PM9qFTDKJa2FGghnf%2FmncyR3jIfwxOXSHGl1gLKyxHJz7OmPKglYbcSXHC7kzkizqgVPHvgH5SY%2F4QhGyn2yTpvkfay6rzVk8n%2Fi1JRGAdqSl4k4mWd6&X-Amz-Signature=1d01b23b3dc08682e1c911fe55eeaafd0f1e2b7cd0ecd7caf4b0f004188d1446&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPITHQOY%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFmujNx2QGYEclptMm6zlACGdDWYpnKbIRYUO0XR2dp8AiB4qprpuZ5tlouCawm5korPTCT2AXs1iSFZZYxfFB4jVSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMuGiBpPR2eHghFt%2BJKtwDggazYdLOut24jahY%2BP3u4XBn4riNVaJjyD7Gn%2BWbIjBWWF0%2B3zpu71iZoShXMMZDGoKM6xYmE97wJqu0yZnVhqQAj2Pgk%2FiVRAC%2BIuv3eed3rzz07lXoswYoFapZW4uf52HzK%2FzQ3Tn%2FWoJo1CX26JKg9PWAxnZDZu9UJ8fujmUW%2BlFlve20QzYNn2JNaQWUYRu6iZ176%2FV4l9%2F0ykxL0ijJM2%2BsXLPQ1EvZLk%2BjXZe5NyWHwMcLWAaFcPCsponI9pvBA0D%2FoJ0BBEc3m%2FcD5FefRcU0PkZ3bxZuVAO9g2%2B6InkGkqWqaFTJiTOQ1ruwTthovqBmCCY2dPruXy7OEkardRXJWSsl27ullnnCBAEQkr6bfd551ECnB18iefo95032VWos42BDeGfHpXvBDawfy2ejebKH76b6o2TK1R%2BAbz309%2FEnQgfDQodwoP40xWKM786yoM2WwuY2WeOCY2%2Bvltv%2BXqpGw7WAEPvApkMX5ZU2LEboTLM7NH6QRBRGQgtk4RmFcHQv%2BXdW0FaMRxSWWVms5%2BNS4eUvJbRT9wH%2Bd%2FuVEEJN7gNfP%2BedPmjFA0EJ4BpGGJphTuEZyv6%2FQrMnbwVhB2LdZ1Uq769m7RP%2F7082e%2FT6FkDKO%2BAw0oyNvQY6pgHpddbzDUYCgaOLBAPqYakyu6iiQZd9vp4vfN9%2FgzcBLlLXy5XlbkahC7ep4SBs0XvKQYTtx%2FjM1CJIu8pm362aS6iQiqIXUSyXwXWIS2L6PM9qFTDKJa2FGghnf%2FmncyR3jIfwxOXSHGl1gLKyxHJz7OmPKglYbcSXHC7kzkizqgVPHvgH5SY%2F4QhGyn2yTpvkfay6rzVk8n%2Fi1JRGAdqSl4k4mWd6&X-Amz-Signature=46a0afef52079c0fff9b75062a4929be189b3d5bd3ffddfbfe78ed185e0f7cdd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPITHQOY%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFmujNx2QGYEclptMm6zlACGdDWYpnKbIRYUO0XR2dp8AiB4qprpuZ5tlouCawm5korPTCT2AXs1iSFZZYxfFB4jVSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMuGiBpPR2eHghFt%2BJKtwDggazYdLOut24jahY%2BP3u4XBn4riNVaJjyD7Gn%2BWbIjBWWF0%2B3zpu71iZoShXMMZDGoKM6xYmE97wJqu0yZnVhqQAj2Pgk%2FiVRAC%2BIuv3eed3rzz07lXoswYoFapZW4uf52HzK%2FzQ3Tn%2FWoJo1CX26JKg9PWAxnZDZu9UJ8fujmUW%2BlFlve20QzYNn2JNaQWUYRu6iZ176%2FV4l9%2F0ykxL0ijJM2%2BsXLPQ1EvZLk%2BjXZe5NyWHwMcLWAaFcPCsponI9pvBA0D%2FoJ0BBEc3m%2FcD5FefRcU0PkZ3bxZuVAO9g2%2B6InkGkqWqaFTJiTOQ1ruwTthovqBmCCY2dPruXy7OEkardRXJWSsl27ullnnCBAEQkr6bfd551ECnB18iefo95032VWos42BDeGfHpXvBDawfy2ejebKH76b6o2TK1R%2BAbz309%2FEnQgfDQodwoP40xWKM786yoM2WwuY2WeOCY2%2Bvltv%2BXqpGw7WAEPvApkMX5ZU2LEboTLM7NH6QRBRGQgtk4RmFcHQv%2BXdW0FaMRxSWWVms5%2BNS4eUvJbRT9wH%2Bd%2FuVEEJN7gNfP%2BedPmjFA0EJ4BpGGJphTuEZyv6%2FQrMnbwVhB2LdZ1Uq769m7RP%2F7082e%2FT6FkDKO%2BAw0oyNvQY6pgHpddbzDUYCgaOLBAPqYakyu6iiQZd9vp4vfN9%2FgzcBLlLXy5XlbkahC7ep4SBs0XvKQYTtx%2FjM1CJIu8pm362aS6iQiqIXUSyXwXWIS2L6PM9qFTDKJa2FGghnf%2FmncyR3jIfwxOXSHGl1gLKyxHJz7OmPKglYbcSXHC7kzkizqgVPHvgH5SY%2F4QhGyn2yTpvkfay6rzVk8n%2Fi1JRGAdqSl4k4mWd6&X-Amz-Signature=50974c121dfae5afacec8826210d2cab2b3c379b0f699c632a3b7104650f6111&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPITHQOY%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFmujNx2QGYEclptMm6zlACGdDWYpnKbIRYUO0XR2dp8AiB4qprpuZ5tlouCawm5korPTCT2AXs1iSFZZYxfFB4jVSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMuGiBpPR2eHghFt%2BJKtwDggazYdLOut24jahY%2BP3u4XBn4riNVaJjyD7Gn%2BWbIjBWWF0%2B3zpu71iZoShXMMZDGoKM6xYmE97wJqu0yZnVhqQAj2Pgk%2FiVRAC%2BIuv3eed3rzz07lXoswYoFapZW4uf52HzK%2FzQ3Tn%2FWoJo1CX26JKg9PWAxnZDZu9UJ8fujmUW%2BlFlve20QzYNn2JNaQWUYRu6iZ176%2FV4l9%2F0ykxL0ijJM2%2BsXLPQ1EvZLk%2BjXZe5NyWHwMcLWAaFcPCsponI9pvBA0D%2FoJ0BBEc3m%2FcD5FefRcU0PkZ3bxZuVAO9g2%2B6InkGkqWqaFTJiTOQ1ruwTthovqBmCCY2dPruXy7OEkardRXJWSsl27ullnnCBAEQkr6bfd551ECnB18iefo95032VWos42BDeGfHpXvBDawfy2ejebKH76b6o2TK1R%2BAbz309%2FEnQgfDQodwoP40xWKM786yoM2WwuY2WeOCY2%2Bvltv%2BXqpGw7WAEPvApkMX5ZU2LEboTLM7NH6QRBRGQgtk4RmFcHQv%2BXdW0FaMRxSWWVms5%2BNS4eUvJbRT9wH%2Bd%2FuVEEJN7gNfP%2BedPmjFA0EJ4BpGGJphTuEZyv6%2FQrMnbwVhB2LdZ1Uq769m7RP%2F7082e%2FT6FkDKO%2BAw0oyNvQY6pgHpddbzDUYCgaOLBAPqYakyu6iiQZd9vp4vfN9%2FgzcBLlLXy5XlbkahC7ep4SBs0XvKQYTtx%2FjM1CJIu8pm362aS6iQiqIXUSyXwXWIS2L6PM9qFTDKJa2FGghnf%2FmncyR3jIfwxOXSHGl1gLKyxHJz7OmPKglYbcSXHC7kzkizqgVPHvgH5SY%2F4QhGyn2yTpvkfay6rzVk8n%2Fi1JRGAdqSl4k4mWd6&X-Amz-Signature=bc9d044cbde6156b0833040089de1b130f036732dee8f23c5d6d00f9037d14d9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
