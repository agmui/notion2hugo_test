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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y5RP446%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDMHbZ878rHTeyE%2ByK9mfd4Dsf57L%2Fkj76%2Fc%2FKIzqi18gIgadzlYRJZlBjKXxPbqV%2Ft97jqrmA%2F6x39kmKS9kCLDOgqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeol9pvafN2RpFCmyrcA1ACeUC8zzHk6r2VAuRfSCEz6gqgUbeWXfCJ60clUmY6IHI9hkNi%2FRlpVpHnL3zfKosTA1j3hrWgggFJH0z%2F4tdWWDXdMQI2C%2Bo7V8dRoLIYh8l%2FMwKLG6%2BKE9q6QN59fcAUMPg9pdtPZMO2b2ZG8h%2Fgk09rTXk8BDjY5Sq8rqQn%2FtOBVa0Krsj8dseVG%2Fck9dZYxAihVIvNZ0xWm1VTkaGtrdSiLO3u8NjNeuOCm0MruYHfcXvz%2F%2BfMO6dpIjSlqStYZ5%2BO2M8CJiIIGgI00gDtLNe5r86q4RwdbnqQdI%2BfPdXjy7gQxnxjlR21Plp8l7PLKGho9wCXmnvgPPw8XBnVzYa%2FZzGb4eEYWU5gh1kTtOre6qTe8yy9MZ9oW0FBVXhnBNZzWMhjULTbMxrTsTajLP64xx83jhU%2F2TCJkoszz%2BIqUVPJgiplKTET4iBEiFm9KPvcx9XZ5dUldM8i%2BVdvweviB7nZ%2BLvGTkLYGtPHnvrfTIyJaDUn0dnlWySxjgcTcxTVWdX0GKMAIn6qsC3SrULaWAHRNVltLuCw18UerAftDd0q3ThSBDg78oV4p1Jg%2BJwl%2B2apOLUElxGEkLoSw6RvISxgiRgdI1KIfLf1CgcOj6xALCbZOA4PMNS71r0GOqUBDmje%2FVITsnhi7hypo0GqCbfroLQtyFDM%2BEBcoOHoHxrOzhBDwGqognyAYwM4MHUCCbMS6xeAAXMI6jImstqyJp7R12izVQaipxSN92Y7vlPAUWAL2dgZ%2BvAQMfqGAQSgwjJ9pnaXeqyp6GXf1Ajv9%2BnZd4sb8sqHnk8lUK6f4jg2nuA3FiRtG8ocdmFFRxhplrJDFs9uY%2BLuPDh2sKQ85N0hPjDK&X-Amz-Signature=09c8183c846931a363be0c873f53f038d849ecd3f82f520ed159aaf65b5f44d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y5RP446%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDMHbZ878rHTeyE%2ByK9mfd4Dsf57L%2Fkj76%2Fc%2FKIzqi18gIgadzlYRJZlBjKXxPbqV%2Ft97jqrmA%2F6x39kmKS9kCLDOgqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeol9pvafN2RpFCmyrcA1ACeUC8zzHk6r2VAuRfSCEz6gqgUbeWXfCJ60clUmY6IHI9hkNi%2FRlpVpHnL3zfKosTA1j3hrWgggFJH0z%2F4tdWWDXdMQI2C%2Bo7V8dRoLIYh8l%2FMwKLG6%2BKE9q6QN59fcAUMPg9pdtPZMO2b2ZG8h%2Fgk09rTXk8BDjY5Sq8rqQn%2FtOBVa0Krsj8dseVG%2Fck9dZYxAihVIvNZ0xWm1VTkaGtrdSiLO3u8NjNeuOCm0MruYHfcXvz%2F%2BfMO6dpIjSlqStYZ5%2BO2M8CJiIIGgI00gDtLNe5r86q4RwdbnqQdI%2BfPdXjy7gQxnxjlR21Plp8l7PLKGho9wCXmnvgPPw8XBnVzYa%2FZzGb4eEYWU5gh1kTtOre6qTe8yy9MZ9oW0FBVXhnBNZzWMhjULTbMxrTsTajLP64xx83jhU%2F2TCJkoszz%2BIqUVPJgiplKTET4iBEiFm9KPvcx9XZ5dUldM8i%2BVdvweviB7nZ%2BLvGTkLYGtPHnvrfTIyJaDUn0dnlWySxjgcTcxTVWdX0GKMAIn6qsC3SrULaWAHRNVltLuCw18UerAftDd0q3ThSBDg78oV4p1Jg%2BJwl%2B2apOLUElxGEkLoSw6RvISxgiRgdI1KIfLf1CgcOj6xALCbZOA4PMNS71r0GOqUBDmje%2FVITsnhi7hypo0GqCbfroLQtyFDM%2BEBcoOHoHxrOzhBDwGqognyAYwM4MHUCCbMS6xeAAXMI6jImstqyJp7R12izVQaipxSN92Y7vlPAUWAL2dgZ%2BvAQMfqGAQSgwjJ9pnaXeqyp6GXf1Ajv9%2BnZd4sb8sqHnk8lUK6f4jg2nuA3FiRtG8ocdmFFRxhplrJDFs9uY%2BLuPDh2sKQ85N0hPjDK&X-Amz-Signature=e248f7866b5d5cfd6f566347490cce4385b235b99eb76ee0ca898bf4845c1bc3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y5RP446%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDMHbZ878rHTeyE%2ByK9mfd4Dsf57L%2Fkj76%2Fc%2FKIzqi18gIgadzlYRJZlBjKXxPbqV%2Ft97jqrmA%2F6x39kmKS9kCLDOgqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeol9pvafN2RpFCmyrcA1ACeUC8zzHk6r2VAuRfSCEz6gqgUbeWXfCJ60clUmY6IHI9hkNi%2FRlpVpHnL3zfKosTA1j3hrWgggFJH0z%2F4tdWWDXdMQI2C%2Bo7V8dRoLIYh8l%2FMwKLG6%2BKE9q6QN59fcAUMPg9pdtPZMO2b2ZG8h%2Fgk09rTXk8BDjY5Sq8rqQn%2FtOBVa0Krsj8dseVG%2Fck9dZYxAihVIvNZ0xWm1VTkaGtrdSiLO3u8NjNeuOCm0MruYHfcXvz%2F%2BfMO6dpIjSlqStYZ5%2BO2M8CJiIIGgI00gDtLNe5r86q4RwdbnqQdI%2BfPdXjy7gQxnxjlR21Plp8l7PLKGho9wCXmnvgPPw8XBnVzYa%2FZzGb4eEYWU5gh1kTtOre6qTe8yy9MZ9oW0FBVXhnBNZzWMhjULTbMxrTsTajLP64xx83jhU%2F2TCJkoszz%2BIqUVPJgiplKTET4iBEiFm9KPvcx9XZ5dUldM8i%2BVdvweviB7nZ%2BLvGTkLYGtPHnvrfTIyJaDUn0dnlWySxjgcTcxTVWdX0GKMAIn6qsC3SrULaWAHRNVltLuCw18UerAftDd0q3ThSBDg78oV4p1Jg%2BJwl%2B2apOLUElxGEkLoSw6RvISxgiRgdI1KIfLf1CgcOj6xALCbZOA4PMNS71r0GOqUBDmje%2FVITsnhi7hypo0GqCbfroLQtyFDM%2BEBcoOHoHxrOzhBDwGqognyAYwM4MHUCCbMS6xeAAXMI6jImstqyJp7R12izVQaipxSN92Y7vlPAUWAL2dgZ%2BvAQMfqGAQSgwjJ9pnaXeqyp6GXf1Ajv9%2BnZd4sb8sqHnk8lUK6f4jg2nuA3FiRtG8ocdmFFRxhplrJDFs9uY%2BLuPDh2sKQ85N0hPjDK&X-Amz-Signature=d6dfc1b5a9437ffcc9e06f4d6146a490b97c8c04ad1fd5f9b3962c6038d5682c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y5RP446%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDMHbZ878rHTeyE%2ByK9mfd4Dsf57L%2Fkj76%2Fc%2FKIzqi18gIgadzlYRJZlBjKXxPbqV%2Ft97jqrmA%2F6x39kmKS9kCLDOgqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeol9pvafN2RpFCmyrcA1ACeUC8zzHk6r2VAuRfSCEz6gqgUbeWXfCJ60clUmY6IHI9hkNi%2FRlpVpHnL3zfKosTA1j3hrWgggFJH0z%2F4tdWWDXdMQI2C%2Bo7V8dRoLIYh8l%2FMwKLG6%2BKE9q6QN59fcAUMPg9pdtPZMO2b2ZG8h%2Fgk09rTXk8BDjY5Sq8rqQn%2FtOBVa0Krsj8dseVG%2Fck9dZYxAihVIvNZ0xWm1VTkaGtrdSiLO3u8NjNeuOCm0MruYHfcXvz%2F%2BfMO6dpIjSlqStYZ5%2BO2M8CJiIIGgI00gDtLNe5r86q4RwdbnqQdI%2BfPdXjy7gQxnxjlR21Plp8l7PLKGho9wCXmnvgPPw8XBnVzYa%2FZzGb4eEYWU5gh1kTtOre6qTe8yy9MZ9oW0FBVXhnBNZzWMhjULTbMxrTsTajLP64xx83jhU%2F2TCJkoszz%2BIqUVPJgiplKTET4iBEiFm9KPvcx9XZ5dUldM8i%2BVdvweviB7nZ%2BLvGTkLYGtPHnvrfTIyJaDUn0dnlWySxjgcTcxTVWdX0GKMAIn6qsC3SrULaWAHRNVltLuCw18UerAftDd0q3ThSBDg78oV4p1Jg%2BJwl%2B2apOLUElxGEkLoSw6RvISxgiRgdI1KIfLf1CgcOj6xALCbZOA4PMNS71r0GOqUBDmje%2FVITsnhi7hypo0GqCbfroLQtyFDM%2BEBcoOHoHxrOzhBDwGqognyAYwM4MHUCCbMS6xeAAXMI6jImstqyJp7R12izVQaipxSN92Y7vlPAUWAL2dgZ%2BvAQMfqGAQSgwjJ9pnaXeqyp6GXf1Ajv9%2BnZd4sb8sqHnk8lUK6f4jg2nuA3FiRtG8ocdmFFRxhplrJDFs9uY%2BLuPDh2sKQ85N0hPjDK&X-Amz-Signature=ff9be56f696724fa0d271eda1246cb04735dd42f43fa20a09fba248a5e8e4868&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y5RP446%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDMHbZ878rHTeyE%2ByK9mfd4Dsf57L%2Fkj76%2Fc%2FKIzqi18gIgadzlYRJZlBjKXxPbqV%2Ft97jqrmA%2F6x39kmKS9kCLDOgqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeol9pvafN2RpFCmyrcA1ACeUC8zzHk6r2VAuRfSCEz6gqgUbeWXfCJ60clUmY6IHI9hkNi%2FRlpVpHnL3zfKosTA1j3hrWgggFJH0z%2F4tdWWDXdMQI2C%2Bo7V8dRoLIYh8l%2FMwKLG6%2BKE9q6QN59fcAUMPg9pdtPZMO2b2ZG8h%2Fgk09rTXk8BDjY5Sq8rqQn%2FtOBVa0Krsj8dseVG%2Fck9dZYxAihVIvNZ0xWm1VTkaGtrdSiLO3u8NjNeuOCm0MruYHfcXvz%2F%2BfMO6dpIjSlqStYZ5%2BO2M8CJiIIGgI00gDtLNe5r86q4RwdbnqQdI%2BfPdXjy7gQxnxjlR21Plp8l7PLKGho9wCXmnvgPPw8XBnVzYa%2FZzGb4eEYWU5gh1kTtOre6qTe8yy9MZ9oW0FBVXhnBNZzWMhjULTbMxrTsTajLP64xx83jhU%2F2TCJkoszz%2BIqUVPJgiplKTET4iBEiFm9KPvcx9XZ5dUldM8i%2BVdvweviB7nZ%2BLvGTkLYGtPHnvrfTIyJaDUn0dnlWySxjgcTcxTVWdX0GKMAIn6qsC3SrULaWAHRNVltLuCw18UerAftDd0q3ThSBDg78oV4p1Jg%2BJwl%2B2apOLUElxGEkLoSw6RvISxgiRgdI1KIfLf1CgcOj6xALCbZOA4PMNS71r0GOqUBDmje%2FVITsnhi7hypo0GqCbfroLQtyFDM%2BEBcoOHoHxrOzhBDwGqognyAYwM4MHUCCbMS6xeAAXMI6jImstqyJp7R12izVQaipxSN92Y7vlPAUWAL2dgZ%2BvAQMfqGAQSgwjJ9pnaXeqyp6GXf1Ajv9%2BnZd4sb8sqHnk8lUK6f4jg2nuA3FiRtG8ocdmFFRxhplrJDFs9uY%2BLuPDh2sKQ85N0hPjDK&X-Amz-Signature=37e6efed1c79e9ef9f06e36ee7f790d1bc8e28de02bc3731827909497336e745&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y5RP446%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDMHbZ878rHTeyE%2ByK9mfd4Dsf57L%2Fkj76%2Fc%2FKIzqi18gIgadzlYRJZlBjKXxPbqV%2Ft97jqrmA%2F6x39kmKS9kCLDOgqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeol9pvafN2RpFCmyrcA1ACeUC8zzHk6r2VAuRfSCEz6gqgUbeWXfCJ60clUmY6IHI9hkNi%2FRlpVpHnL3zfKosTA1j3hrWgggFJH0z%2F4tdWWDXdMQI2C%2Bo7V8dRoLIYh8l%2FMwKLG6%2BKE9q6QN59fcAUMPg9pdtPZMO2b2ZG8h%2Fgk09rTXk8BDjY5Sq8rqQn%2FtOBVa0Krsj8dseVG%2Fck9dZYxAihVIvNZ0xWm1VTkaGtrdSiLO3u8NjNeuOCm0MruYHfcXvz%2F%2BfMO6dpIjSlqStYZ5%2BO2M8CJiIIGgI00gDtLNe5r86q4RwdbnqQdI%2BfPdXjy7gQxnxjlR21Plp8l7PLKGho9wCXmnvgPPw8XBnVzYa%2FZzGb4eEYWU5gh1kTtOre6qTe8yy9MZ9oW0FBVXhnBNZzWMhjULTbMxrTsTajLP64xx83jhU%2F2TCJkoszz%2BIqUVPJgiplKTET4iBEiFm9KPvcx9XZ5dUldM8i%2BVdvweviB7nZ%2BLvGTkLYGtPHnvrfTIyJaDUn0dnlWySxjgcTcxTVWdX0GKMAIn6qsC3SrULaWAHRNVltLuCw18UerAftDd0q3ThSBDg78oV4p1Jg%2BJwl%2B2apOLUElxGEkLoSw6RvISxgiRgdI1KIfLf1CgcOj6xALCbZOA4PMNS71r0GOqUBDmje%2FVITsnhi7hypo0GqCbfroLQtyFDM%2BEBcoOHoHxrOzhBDwGqognyAYwM4MHUCCbMS6xeAAXMI6jImstqyJp7R12izVQaipxSN92Y7vlPAUWAL2dgZ%2BvAQMfqGAQSgwjJ9pnaXeqyp6GXf1Ajv9%2BnZd4sb8sqHnk8lUK6f4jg2nuA3FiRtG8ocdmFFRxhplrJDFs9uY%2BLuPDh2sKQ85N0hPjDK&X-Amz-Signature=12c9718c3b0d6a1206e92b4b3d9d3836152db294fdf82ff315625b70e2ba97cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y5RP446%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDMHbZ878rHTeyE%2ByK9mfd4Dsf57L%2Fkj76%2Fc%2FKIzqi18gIgadzlYRJZlBjKXxPbqV%2Ft97jqrmA%2F6x39kmKS9kCLDOgqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeol9pvafN2RpFCmyrcA1ACeUC8zzHk6r2VAuRfSCEz6gqgUbeWXfCJ60clUmY6IHI9hkNi%2FRlpVpHnL3zfKosTA1j3hrWgggFJH0z%2F4tdWWDXdMQI2C%2Bo7V8dRoLIYh8l%2FMwKLG6%2BKE9q6QN59fcAUMPg9pdtPZMO2b2ZG8h%2Fgk09rTXk8BDjY5Sq8rqQn%2FtOBVa0Krsj8dseVG%2Fck9dZYxAihVIvNZ0xWm1VTkaGtrdSiLO3u8NjNeuOCm0MruYHfcXvz%2F%2BfMO6dpIjSlqStYZ5%2BO2M8CJiIIGgI00gDtLNe5r86q4RwdbnqQdI%2BfPdXjy7gQxnxjlR21Plp8l7PLKGho9wCXmnvgPPw8XBnVzYa%2FZzGb4eEYWU5gh1kTtOre6qTe8yy9MZ9oW0FBVXhnBNZzWMhjULTbMxrTsTajLP64xx83jhU%2F2TCJkoszz%2BIqUVPJgiplKTET4iBEiFm9KPvcx9XZ5dUldM8i%2BVdvweviB7nZ%2BLvGTkLYGtPHnvrfTIyJaDUn0dnlWySxjgcTcxTVWdX0GKMAIn6qsC3SrULaWAHRNVltLuCw18UerAftDd0q3ThSBDg78oV4p1Jg%2BJwl%2B2apOLUElxGEkLoSw6RvISxgiRgdI1KIfLf1CgcOj6xALCbZOA4PMNS71r0GOqUBDmje%2FVITsnhi7hypo0GqCbfroLQtyFDM%2BEBcoOHoHxrOzhBDwGqognyAYwM4MHUCCbMS6xeAAXMI6jImstqyJp7R12izVQaipxSN92Y7vlPAUWAL2dgZ%2BvAQMfqGAQSgwjJ9pnaXeqyp6GXf1Ajv9%2BnZd4sb8sqHnk8lUK6f4jg2nuA3FiRtG8ocdmFFRxhplrJDFs9uY%2BLuPDh2sKQ85N0hPjDK&X-Amz-Signature=47f707b2f6f54e23c49f1dff4e65342f8fcb25cdc2bb6fa774d838f9657e03a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y5RP446%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDMHbZ878rHTeyE%2ByK9mfd4Dsf57L%2Fkj76%2Fc%2FKIzqi18gIgadzlYRJZlBjKXxPbqV%2Ft97jqrmA%2F6x39kmKS9kCLDOgqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeol9pvafN2RpFCmyrcA1ACeUC8zzHk6r2VAuRfSCEz6gqgUbeWXfCJ60clUmY6IHI9hkNi%2FRlpVpHnL3zfKosTA1j3hrWgggFJH0z%2F4tdWWDXdMQI2C%2Bo7V8dRoLIYh8l%2FMwKLG6%2BKE9q6QN59fcAUMPg9pdtPZMO2b2ZG8h%2Fgk09rTXk8BDjY5Sq8rqQn%2FtOBVa0Krsj8dseVG%2Fck9dZYxAihVIvNZ0xWm1VTkaGtrdSiLO3u8NjNeuOCm0MruYHfcXvz%2F%2BfMO6dpIjSlqStYZ5%2BO2M8CJiIIGgI00gDtLNe5r86q4RwdbnqQdI%2BfPdXjy7gQxnxjlR21Plp8l7PLKGho9wCXmnvgPPw8XBnVzYa%2FZzGb4eEYWU5gh1kTtOre6qTe8yy9MZ9oW0FBVXhnBNZzWMhjULTbMxrTsTajLP64xx83jhU%2F2TCJkoszz%2BIqUVPJgiplKTET4iBEiFm9KPvcx9XZ5dUldM8i%2BVdvweviB7nZ%2BLvGTkLYGtPHnvrfTIyJaDUn0dnlWySxjgcTcxTVWdX0GKMAIn6qsC3SrULaWAHRNVltLuCw18UerAftDd0q3ThSBDg78oV4p1Jg%2BJwl%2B2apOLUElxGEkLoSw6RvISxgiRgdI1KIfLf1CgcOj6xALCbZOA4PMNS71r0GOqUBDmje%2FVITsnhi7hypo0GqCbfroLQtyFDM%2BEBcoOHoHxrOzhBDwGqognyAYwM4MHUCCbMS6xeAAXMI6jImstqyJp7R12izVQaipxSN92Y7vlPAUWAL2dgZ%2BvAQMfqGAQSgwjJ9pnaXeqyp6GXf1Ajv9%2BnZd4sb8sqHnk8lUK6f4jg2nuA3FiRtG8ocdmFFRxhplrJDFs9uY%2BLuPDh2sKQ85N0hPjDK&X-Amz-Signature=ad88e5fbd04e1657ccf648f205c94a8e7734d3a74cccf5a68ce2b27fc9829169&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
