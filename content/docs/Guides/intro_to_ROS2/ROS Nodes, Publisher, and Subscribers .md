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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTSBCKLX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ5GODY4FmIgwpyoanhWTlqlPZhOvV%2Bcm4IvM4qviPuQIgRJ%2F7QuQio80AvoM30wuCkn%2BXBW0tATlI903sTBv89gwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0wXZhPDI72X19G7CrcA7YdlbNnQwpu3rBMiA8fadiH0xOEUyJixYhtSE%2FmOgeEz5QWcT02DjQavlHU1xSRRVByBPBP2tIjXnh7dy9rYZhSkIu5ahg1jrH3FYZc88%2FC89juXi0jBaJVJidDgNgnyLXji2R3tg8a43Kjm9LYCTRKo1WEESimetfP%2B1%2Bv%2FPD437I3Q8%2F4aYM%2B3vlPQQhM4IPdYIA29WYJw0Nn3CpCKKymOm3SsvqKq89iTXhm3O75PoRG5PBcEBKSZsZ5E2jiz7n39glyjh22UmFulTaBk5TyAEukkNcB7f5Pf0aiuMXp4tlQrxL05OFChibf1xGTE%2BuWixGJZyO7o1BZeIvH3tFW%2FpxfUzLUjCstWS8OfBkM6Y8hiCapXYXSRs9z9TsKAL%2FzacOHT79%2BSRRtN3ZORTGS3XNSCEDGulZtHDf8aPu12aIDhc%2FOEkVngfsOvHp8Z4ihUrDa7k1%2FEg28rXLGgxMX5kw4RvKQT%2F426Nvj2Jb7KYd9KMvyMJPHymbQ6LF7U8Ns6EQLzjRn2MYPANDleDvL4kSQazP%2FrjawGfJdiGo2ANX5rZYBDb%2B%2F9vKqAOpoch%2FKd3EdNK9UpBHN4SIYspLmLP70F5Z5xkFdswN%2FpXRDCSFfp952xha%2F4TAYMO%2FS2cIGOqUBgRchI8Tx9Y%2BabV7zf1qNmQe70quCZAWQTp0wCL8cyqYSXbpVzKsgVK3yxZVYNIR8tRAc4TcFQ%2BqOmfSCwtUN1E7WfA49BEfYhqiPMJDlwBPuEpgQMMn7lrkyIOlwJNkuq2MWKVUsax%2FkIRF7yQ13cErvwKmPSfQiU7H5giB61URCDVZtuiW4RmHMnw6Xbi9YnqU1n2%2B%2FIifCSJgXPHj%2FZgBueCwD&X-Amz-Signature=fa76028347cea79318c24ebb74f00b577df6bf9d47334a9a07059404634d7bf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTSBCKLX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ5GODY4FmIgwpyoanhWTlqlPZhOvV%2Bcm4IvM4qviPuQIgRJ%2F7QuQio80AvoM30wuCkn%2BXBW0tATlI903sTBv89gwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0wXZhPDI72X19G7CrcA7YdlbNnQwpu3rBMiA8fadiH0xOEUyJixYhtSE%2FmOgeEz5QWcT02DjQavlHU1xSRRVByBPBP2tIjXnh7dy9rYZhSkIu5ahg1jrH3FYZc88%2FC89juXi0jBaJVJidDgNgnyLXji2R3tg8a43Kjm9LYCTRKo1WEESimetfP%2B1%2Bv%2FPD437I3Q8%2F4aYM%2B3vlPQQhM4IPdYIA29WYJw0Nn3CpCKKymOm3SsvqKq89iTXhm3O75PoRG5PBcEBKSZsZ5E2jiz7n39glyjh22UmFulTaBk5TyAEukkNcB7f5Pf0aiuMXp4tlQrxL05OFChibf1xGTE%2BuWixGJZyO7o1BZeIvH3tFW%2FpxfUzLUjCstWS8OfBkM6Y8hiCapXYXSRs9z9TsKAL%2FzacOHT79%2BSRRtN3ZORTGS3XNSCEDGulZtHDf8aPu12aIDhc%2FOEkVngfsOvHp8Z4ihUrDa7k1%2FEg28rXLGgxMX5kw4RvKQT%2F426Nvj2Jb7KYd9KMvyMJPHymbQ6LF7U8Ns6EQLzjRn2MYPANDleDvL4kSQazP%2FrjawGfJdiGo2ANX5rZYBDb%2B%2F9vKqAOpoch%2FKd3EdNK9UpBHN4SIYspLmLP70F5Z5xkFdswN%2FpXRDCSFfp952xha%2F4TAYMO%2FS2cIGOqUBgRchI8Tx9Y%2BabV7zf1qNmQe70quCZAWQTp0wCL8cyqYSXbpVzKsgVK3yxZVYNIR8tRAc4TcFQ%2BqOmfSCwtUN1E7WfA49BEfYhqiPMJDlwBPuEpgQMMn7lrkyIOlwJNkuq2MWKVUsax%2FkIRF7yQ13cErvwKmPSfQiU7H5giB61URCDVZtuiW4RmHMnw6Xbi9YnqU1n2%2B%2FIifCSJgXPHj%2FZgBueCwD&X-Amz-Signature=6c7687e519ad675b32eae20e450738d1be66cf8da33cce491b8eef9d8b615abb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTSBCKLX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ5GODY4FmIgwpyoanhWTlqlPZhOvV%2Bcm4IvM4qviPuQIgRJ%2F7QuQio80AvoM30wuCkn%2BXBW0tATlI903sTBv89gwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0wXZhPDI72X19G7CrcA7YdlbNnQwpu3rBMiA8fadiH0xOEUyJixYhtSE%2FmOgeEz5QWcT02DjQavlHU1xSRRVByBPBP2tIjXnh7dy9rYZhSkIu5ahg1jrH3FYZc88%2FC89juXi0jBaJVJidDgNgnyLXji2R3tg8a43Kjm9LYCTRKo1WEESimetfP%2B1%2Bv%2FPD437I3Q8%2F4aYM%2B3vlPQQhM4IPdYIA29WYJw0Nn3CpCKKymOm3SsvqKq89iTXhm3O75PoRG5PBcEBKSZsZ5E2jiz7n39glyjh22UmFulTaBk5TyAEukkNcB7f5Pf0aiuMXp4tlQrxL05OFChibf1xGTE%2BuWixGJZyO7o1BZeIvH3tFW%2FpxfUzLUjCstWS8OfBkM6Y8hiCapXYXSRs9z9TsKAL%2FzacOHT79%2BSRRtN3ZORTGS3XNSCEDGulZtHDf8aPu12aIDhc%2FOEkVngfsOvHp8Z4ihUrDa7k1%2FEg28rXLGgxMX5kw4RvKQT%2F426Nvj2Jb7KYd9KMvyMJPHymbQ6LF7U8Ns6EQLzjRn2MYPANDleDvL4kSQazP%2FrjawGfJdiGo2ANX5rZYBDb%2B%2F9vKqAOpoch%2FKd3EdNK9UpBHN4SIYspLmLP70F5Z5xkFdswN%2FpXRDCSFfp952xha%2F4TAYMO%2FS2cIGOqUBgRchI8Tx9Y%2BabV7zf1qNmQe70quCZAWQTp0wCL8cyqYSXbpVzKsgVK3yxZVYNIR8tRAc4TcFQ%2BqOmfSCwtUN1E7WfA49BEfYhqiPMJDlwBPuEpgQMMn7lrkyIOlwJNkuq2MWKVUsax%2FkIRF7yQ13cErvwKmPSfQiU7H5giB61URCDVZtuiW4RmHMnw6Xbi9YnqU1n2%2B%2FIifCSJgXPHj%2FZgBueCwD&X-Amz-Signature=a3ffa45350eff378d05c6ddfd35c0daeccd308882d0cc3b0a6e60342d1a4189f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTSBCKLX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ5GODY4FmIgwpyoanhWTlqlPZhOvV%2Bcm4IvM4qviPuQIgRJ%2F7QuQio80AvoM30wuCkn%2BXBW0tATlI903sTBv89gwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0wXZhPDI72X19G7CrcA7YdlbNnQwpu3rBMiA8fadiH0xOEUyJixYhtSE%2FmOgeEz5QWcT02DjQavlHU1xSRRVByBPBP2tIjXnh7dy9rYZhSkIu5ahg1jrH3FYZc88%2FC89juXi0jBaJVJidDgNgnyLXji2R3tg8a43Kjm9LYCTRKo1WEESimetfP%2B1%2Bv%2FPD437I3Q8%2F4aYM%2B3vlPQQhM4IPdYIA29WYJw0Nn3CpCKKymOm3SsvqKq89iTXhm3O75PoRG5PBcEBKSZsZ5E2jiz7n39glyjh22UmFulTaBk5TyAEukkNcB7f5Pf0aiuMXp4tlQrxL05OFChibf1xGTE%2BuWixGJZyO7o1BZeIvH3tFW%2FpxfUzLUjCstWS8OfBkM6Y8hiCapXYXSRs9z9TsKAL%2FzacOHT79%2BSRRtN3ZORTGS3XNSCEDGulZtHDf8aPu12aIDhc%2FOEkVngfsOvHp8Z4ihUrDa7k1%2FEg28rXLGgxMX5kw4RvKQT%2F426Nvj2Jb7KYd9KMvyMJPHymbQ6LF7U8Ns6EQLzjRn2MYPANDleDvL4kSQazP%2FrjawGfJdiGo2ANX5rZYBDb%2B%2F9vKqAOpoch%2FKd3EdNK9UpBHN4SIYspLmLP70F5Z5xkFdswN%2FpXRDCSFfp952xha%2F4TAYMO%2FS2cIGOqUBgRchI8Tx9Y%2BabV7zf1qNmQe70quCZAWQTp0wCL8cyqYSXbpVzKsgVK3yxZVYNIR8tRAc4TcFQ%2BqOmfSCwtUN1E7WfA49BEfYhqiPMJDlwBPuEpgQMMn7lrkyIOlwJNkuq2MWKVUsax%2FkIRF7yQ13cErvwKmPSfQiU7H5giB61URCDVZtuiW4RmHMnw6Xbi9YnqU1n2%2B%2FIifCSJgXPHj%2FZgBueCwD&X-Amz-Signature=d96cbf19ccc984bc4d97c4fbd6ea9a7cef3d15dc1d0f76f3885ddadeb6b828c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTSBCKLX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ5GODY4FmIgwpyoanhWTlqlPZhOvV%2Bcm4IvM4qviPuQIgRJ%2F7QuQio80AvoM30wuCkn%2BXBW0tATlI903sTBv89gwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0wXZhPDI72X19G7CrcA7YdlbNnQwpu3rBMiA8fadiH0xOEUyJixYhtSE%2FmOgeEz5QWcT02DjQavlHU1xSRRVByBPBP2tIjXnh7dy9rYZhSkIu5ahg1jrH3FYZc88%2FC89juXi0jBaJVJidDgNgnyLXji2R3tg8a43Kjm9LYCTRKo1WEESimetfP%2B1%2Bv%2FPD437I3Q8%2F4aYM%2B3vlPQQhM4IPdYIA29WYJw0Nn3CpCKKymOm3SsvqKq89iTXhm3O75PoRG5PBcEBKSZsZ5E2jiz7n39glyjh22UmFulTaBk5TyAEukkNcB7f5Pf0aiuMXp4tlQrxL05OFChibf1xGTE%2BuWixGJZyO7o1BZeIvH3tFW%2FpxfUzLUjCstWS8OfBkM6Y8hiCapXYXSRs9z9TsKAL%2FzacOHT79%2BSRRtN3ZORTGS3XNSCEDGulZtHDf8aPu12aIDhc%2FOEkVngfsOvHp8Z4ihUrDa7k1%2FEg28rXLGgxMX5kw4RvKQT%2F426Nvj2Jb7KYd9KMvyMJPHymbQ6LF7U8Ns6EQLzjRn2MYPANDleDvL4kSQazP%2FrjawGfJdiGo2ANX5rZYBDb%2B%2F9vKqAOpoch%2FKd3EdNK9UpBHN4SIYspLmLP70F5Z5xkFdswN%2FpXRDCSFfp952xha%2F4TAYMO%2FS2cIGOqUBgRchI8Tx9Y%2BabV7zf1qNmQe70quCZAWQTp0wCL8cyqYSXbpVzKsgVK3yxZVYNIR8tRAc4TcFQ%2BqOmfSCwtUN1E7WfA49BEfYhqiPMJDlwBPuEpgQMMn7lrkyIOlwJNkuq2MWKVUsax%2FkIRF7yQ13cErvwKmPSfQiU7H5giB61URCDVZtuiW4RmHMnw6Xbi9YnqU1n2%2B%2FIifCSJgXPHj%2FZgBueCwD&X-Amz-Signature=f4a9935c4e44c9bd59df26455c48cc935ffbab4639334959b9e235759ed45f6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTSBCKLX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ5GODY4FmIgwpyoanhWTlqlPZhOvV%2Bcm4IvM4qviPuQIgRJ%2F7QuQio80AvoM30wuCkn%2BXBW0tATlI903sTBv89gwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0wXZhPDI72X19G7CrcA7YdlbNnQwpu3rBMiA8fadiH0xOEUyJixYhtSE%2FmOgeEz5QWcT02DjQavlHU1xSRRVByBPBP2tIjXnh7dy9rYZhSkIu5ahg1jrH3FYZc88%2FC89juXi0jBaJVJidDgNgnyLXji2R3tg8a43Kjm9LYCTRKo1WEESimetfP%2B1%2Bv%2FPD437I3Q8%2F4aYM%2B3vlPQQhM4IPdYIA29WYJw0Nn3CpCKKymOm3SsvqKq89iTXhm3O75PoRG5PBcEBKSZsZ5E2jiz7n39glyjh22UmFulTaBk5TyAEukkNcB7f5Pf0aiuMXp4tlQrxL05OFChibf1xGTE%2BuWixGJZyO7o1BZeIvH3tFW%2FpxfUzLUjCstWS8OfBkM6Y8hiCapXYXSRs9z9TsKAL%2FzacOHT79%2BSRRtN3ZORTGS3XNSCEDGulZtHDf8aPu12aIDhc%2FOEkVngfsOvHp8Z4ihUrDa7k1%2FEg28rXLGgxMX5kw4RvKQT%2F426Nvj2Jb7KYd9KMvyMJPHymbQ6LF7U8Ns6EQLzjRn2MYPANDleDvL4kSQazP%2FrjawGfJdiGo2ANX5rZYBDb%2B%2F9vKqAOpoch%2FKd3EdNK9UpBHN4SIYspLmLP70F5Z5xkFdswN%2FpXRDCSFfp952xha%2F4TAYMO%2FS2cIGOqUBgRchI8Tx9Y%2BabV7zf1qNmQe70quCZAWQTp0wCL8cyqYSXbpVzKsgVK3yxZVYNIR8tRAc4TcFQ%2BqOmfSCwtUN1E7WfA49BEfYhqiPMJDlwBPuEpgQMMn7lrkyIOlwJNkuq2MWKVUsax%2FkIRF7yQ13cErvwKmPSfQiU7H5giB61URCDVZtuiW4RmHMnw6Xbi9YnqU1n2%2B%2FIifCSJgXPHj%2FZgBueCwD&X-Amz-Signature=c566342c08e48877769702f41f853ad200499a6d19c7260d25fc2201b0f5a47d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTSBCKLX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ5GODY4FmIgwpyoanhWTlqlPZhOvV%2Bcm4IvM4qviPuQIgRJ%2F7QuQio80AvoM30wuCkn%2BXBW0tATlI903sTBv89gwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0wXZhPDI72X19G7CrcA7YdlbNnQwpu3rBMiA8fadiH0xOEUyJixYhtSE%2FmOgeEz5QWcT02DjQavlHU1xSRRVByBPBP2tIjXnh7dy9rYZhSkIu5ahg1jrH3FYZc88%2FC89juXi0jBaJVJidDgNgnyLXji2R3tg8a43Kjm9LYCTRKo1WEESimetfP%2B1%2Bv%2FPD437I3Q8%2F4aYM%2B3vlPQQhM4IPdYIA29WYJw0Nn3CpCKKymOm3SsvqKq89iTXhm3O75PoRG5PBcEBKSZsZ5E2jiz7n39glyjh22UmFulTaBk5TyAEukkNcB7f5Pf0aiuMXp4tlQrxL05OFChibf1xGTE%2BuWixGJZyO7o1BZeIvH3tFW%2FpxfUzLUjCstWS8OfBkM6Y8hiCapXYXSRs9z9TsKAL%2FzacOHT79%2BSRRtN3ZORTGS3XNSCEDGulZtHDf8aPu12aIDhc%2FOEkVngfsOvHp8Z4ihUrDa7k1%2FEg28rXLGgxMX5kw4RvKQT%2F426Nvj2Jb7KYd9KMvyMJPHymbQ6LF7U8Ns6EQLzjRn2MYPANDleDvL4kSQazP%2FrjawGfJdiGo2ANX5rZYBDb%2B%2F9vKqAOpoch%2FKd3EdNK9UpBHN4SIYspLmLP70F5Z5xkFdswN%2FpXRDCSFfp952xha%2F4TAYMO%2FS2cIGOqUBgRchI8Tx9Y%2BabV7zf1qNmQe70quCZAWQTp0wCL8cyqYSXbpVzKsgVK3yxZVYNIR8tRAc4TcFQ%2BqOmfSCwtUN1E7WfA49BEfYhqiPMJDlwBPuEpgQMMn7lrkyIOlwJNkuq2MWKVUsax%2FkIRF7yQ13cErvwKmPSfQiU7H5giB61URCDVZtuiW4RmHMnw6Xbi9YnqU1n2%2B%2FIifCSJgXPHj%2FZgBueCwD&X-Amz-Signature=2ff4be367a9f3ebc29338b54f150a95a62f9d6af6ebd99768ae802a46c2fc32c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTSBCKLX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ5GODY4FmIgwpyoanhWTlqlPZhOvV%2Bcm4IvM4qviPuQIgRJ%2F7QuQio80AvoM30wuCkn%2BXBW0tATlI903sTBv89gwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0wXZhPDI72X19G7CrcA7YdlbNnQwpu3rBMiA8fadiH0xOEUyJixYhtSE%2FmOgeEz5QWcT02DjQavlHU1xSRRVByBPBP2tIjXnh7dy9rYZhSkIu5ahg1jrH3FYZc88%2FC89juXi0jBaJVJidDgNgnyLXji2R3tg8a43Kjm9LYCTRKo1WEESimetfP%2B1%2Bv%2FPD437I3Q8%2F4aYM%2B3vlPQQhM4IPdYIA29WYJw0Nn3CpCKKymOm3SsvqKq89iTXhm3O75PoRG5PBcEBKSZsZ5E2jiz7n39glyjh22UmFulTaBk5TyAEukkNcB7f5Pf0aiuMXp4tlQrxL05OFChibf1xGTE%2BuWixGJZyO7o1BZeIvH3tFW%2FpxfUzLUjCstWS8OfBkM6Y8hiCapXYXSRs9z9TsKAL%2FzacOHT79%2BSRRtN3ZORTGS3XNSCEDGulZtHDf8aPu12aIDhc%2FOEkVngfsOvHp8Z4ihUrDa7k1%2FEg28rXLGgxMX5kw4RvKQT%2F426Nvj2Jb7KYd9KMvyMJPHymbQ6LF7U8Ns6EQLzjRn2MYPANDleDvL4kSQazP%2FrjawGfJdiGo2ANX5rZYBDb%2B%2F9vKqAOpoch%2FKd3EdNK9UpBHN4SIYspLmLP70F5Z5xkFdswN%2FpXRDCSFfp952xha%2F4TAYMO%2FS2cIGOqUBgRchI8Tx9Y%2BabV7zf1qNmQe70quCZAWQTp0wCL8cyqYSXbpVzKsgVK3yxZVYNIR8tRAc4TcFQ%2BqOmfSCwtUN1E7WfA49BEfYhqiPMJDlwBPuEpgQMMn7lrkyIOlwJNkuq2MWKVUsax%2FkIRF7yQ13cErvwKmPSfQiU7H5giB61URCDVZtuiW4RmHMnw6Xbi9YnqU1n2%2B%2FIifCSJgXPHj%2FZgBueCwD&X-Amz-Signature=87d1545c52fd57e1052927b57fc9a1a9c160417c5a30d82a6b416761de523bce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
