---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F6TZRJM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDMDIDyamoZClyv9Q%2F44Ufp5nOmcfxXhJ2Ecq6UMtAOdQIgKV1UMfxM0H7eG8GaW71N1FjsUIfUooFPIIGbhkwkm3Qq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBvOG2QOp4VV397NOircAzErb%2FqC62NCHz7PRvNJq5R3yDliXCj8pFsKYnJ5V2nBUA3lyIs%2FTfLoqwaIY8o%2BnosgPzul5%2FzE%2BfcZ7mKQw41H48E5LveDiwNo9FwT5euB%2FQ7JdsKkmXtTjQ22u%2BzPWAl%2BPcV%2FeAyguXhlV87vobhdoGB%2B%2FFHnuCSw9lHtXR4Qg5qNSW7fkRgsOTFPvw2Th4feZK0%2F7cXHBlFSRsLn0%2Fc2duvacFI4ZNGbXQvWGRgkzZuAz1ib1ujjeOqe9xyNm6C7p4ZyAaAeQaWP8sO6lcKiGMEVv8OU9LJhFHmC%2Fi6ro%2F15egexRZd6XdFj9r6Y3g%2B2jbTp5QVObzqjIvplbommH1e8aOLFgpFAIsKM4j1tdqj%2F048P2uRXZdcCJdudgh8hGXwh3uIYKJNTllBgEYB3mgwfOJ0%2BYebPOdI70ElM7MvorJUTr0BSdmeC%2FtnbbfjU%2BP4iCHql7JVRTF62KfxowvQggSZsgbLMrt1J8eqW5AlJRyIquiVKXs38nSBrivgN6k%2F%2FDiW0d3V6CjHiCTUSD35O9%2FDkm3BFzrf0Xp19JnbZYHk%2FwVSMz4jMXuG%2FhlQ%2Fx1l24bgGnEow%2BnmQXi0ntK5ZSg78nfAiwF%2FnVJPDlLLwfCsmr0%2BL%2B1%2FWMKTp%2BMQGOqUBVYcVBLJaxopS7RPUelgIZ%2FRyhpUtXKH2cQk9248Kw%2FYFdN5nuOaN2%2BV1%2BPt39O5obbvC78PrMgL%2FuVzkpe2%2FFeMdY3nI1uQEdNz9JCAbKEQnaD7EFhHhtCpqGA8vrT6MZANUtxMAkW5cek72Z8by42laTGicX9AT8FQ%2Fb2n6PyZ98twxaZtVTdxbS3pRwv8FJWzW2vZIR%2BqrsZofQ98jMYwproh6&X-Amz-Signature=ec2ea7b3e27c153be2253fea0dcce69774d6eaddff1cccab947a2adf1550e85b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F6TZRJM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDMDIDyamoZClyv9Q%2F44Ufp5nOmcfxXhJ2Ecq6UMtAOdQIgKV1UMfxM0H7eG8GaW71N1FjsUIfUooFPIIGbhkwkm3Qq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBvOG2QOp4VV397NOircAzErb%2FqC62NCHz7PRvNJq5R3yDliXCj8pFsKYnJ5V2nBUA3lyIs%2FTfLoqwaIY8o%2BnosgPzul5%2FzE%2BfcZ7mKQw41H48E5LveDiwNo9FwT5euB%2FQ7JdsKkmXtTjQ22u%2BzPWAl%2BPcV%2FeAyguXhlV87vobhdoGB%2B%2FFHnuCSw9lHtXR4Qg5qNSW7fkRgsOTFPvw2Th4feZK0%2F7cXHBlFSRsLn0%2Fc2duvacFI4ZNGbXQvWGRgkzZuAz1ib1ujjeOqe9xyNm6C7p4ZyAaAeQaWP8sO6lcKiGMEVv8OU9LJhFHmC%2Fi6ro%2F15egexRZd6XdFj9r6Y3g%2B2jbTp5QVObzqjIvplbommH1e8aOLFgpFAIsKM4j1tdqj%2F048P2uRXZdcCJdudgh8hGXwh3uIYKJNTllBgEYB3mgwfOJ0%2BYebPOdI70ElM7MvorJUTr0BSdmeC%2FtnbbfjU%2BP4iCHql7JVRTF62KfxowvQggSZsgbLMrt1J8eqW5AlJRyIquiVKXs38nSBrivgN6k%2F%2FDiW0d3V6CjHiCTUSD35O9%2FDkm3BFzrf0Xp19JnbZYHk%2FwVSMz4jMXuG%2FhlQ%2Fx1l24bgGnEow%2BnmQXi0ntK5ZSg78nfAiwF%2FnVJPDlLLwfCsmr0%2BL%2B1%2FWMKTp%2BMQGOqUBVYcVBLJaxopS7RPUelgIZ%2FRyhpUtXKH2cQk9248Kw%2FYFdN5nuOaN2%2BV1%2BPt39O5obbvC78PrMgL%2FuVzkpe2%2FFeMdY3nI1uQEdNz9JCAbKEQnaD7EFhHhtCpqGA8vrT6MZANUtxMAkW5cek72Z8by42laTGicX9AT8FQ%2Fb2n6PyZ98twxaZtVTdxbS3pRwv8FJWzW2vZIR%2BqrsZofQ98jMYwproh6&X-Amz-Signature=1b01e04db3ad00e36dbe8c93f49838b70ebbdbf4adae5b16ec3f56b92c4989b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F6TZRJM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDMDIDyamoZClyv9Q%2F44Ufp5nOmcfxXhJ2Ecq6UMtAOdQIgKV1UMfxM0H7eG8GaW71N1FjsUIfUooFPIIGbhkwkm3Qq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBvOG2QOp4VV397NOircAzErb%2FqC62NCHz7PRvNJq5R3yDliXCj8pFsKYnJ5V2nBUA3lyIs%2FTfLoqwaIY8o%2BnosgPzul5%2FzE%2BfcZ7mKQw41H48E5LveDiwNo9FwT5euB%2FQ7JdsKkmXtTjQ22u%2BzPWAl%2BPcV%2FeAyguXhlV87vobhdoGB%2B%2FFHnuCSw9lHtXR4Qg5qNSW7fkRgsOTFPvw2Th4feZK0%2F7cXHBlFSRsLn0%2Fc2duvacFI4ZNGbXQvWGRgkzZuAz1ib1ujjeOqe9xyNm6C7p4ZyAaAeQaWP8sO6lcKiGMEVv8OU9LJhFHmC%2Fi6ro%2F15egexRZd6XdFj9r6Y3g%2B2jbTp5QVObzqjIvplbommH1e8aOLFgpFAIsKM4j1tdqj%2F048P2uRXZdcCJdudgh8hGXwh3uIYKJNTllBgEYB3mgwfOJ0%2BYebPOdI70ElM7MvorJUTr0BSdmeC%2FtnbbfjU%2BP4iCHql7JVRTF62KfxowvQggSZsgbLMrt1J8eqW5AlJRyIquiVKXs38nSBrivgN6k%2F%2FDiW0d3V6CjHiCTUSD35O9%2FDkm3BFzrf0Xp19JnbZYHk%2FwVSMz4jMXuG%2FhlQ%2Fx1l24bgGnEow%2BnmQXi0ntK5ZSg78nfAiwF%2FnVJPDlLLwfCsmr0%2BL%2B1%2FWMKTp%2BMQGOqUBVYcVBLJaxopS7RPUelgIZ%2FRyhpUtXKH2cQk9248Kw%2FYFdN5nuOaN2%2BV1%2BPt39O5obbvC78PrMgL%2FuVzkpe2%2FFeMdY3nI1uQEdNz9JCAbKEQnaD7EFhHhtCpqGA8vrT6MZANUtxMAkW5cek72Z8by42laTGicX9AT8FQ%2Fb2n6PyZ98twxaZtVTdxbS3pRwv8FJWzW2vZIR%2BqrsZofQ98jMYwproh6&X-Amz-Signature=7093580bc18a7219acce134330112b1801489dabad74c895263a24d157c2f5cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F6TZRJM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDMDIDyamoZClyv9Q%2F44Ufp5nOmcfxXhJ2Ecq6UMtAOdQIgKV1UMfxM0H7eG8GaW71N1FjsUIfUooFPIIGbhkwkm3Qq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBvOG2QOp4VV397NOircAzErb%2FqC62NCHz7PRvNJq5R3yDliXCj8pFsKYnJ5V2nBUA3lyIs%2FTfLoqwaIY8o%2BnosgPzul5%2FzE%2BfcZ7mKQw41H48E5LveDiwNo9FwT5euB%2FQ7JdsKkmXtTjQ22u%2BzPWAl%2BPcV%2FeAyguXhlV87vobhdoGB%2B%2FFHnuCSw9lHtXR4Qg5qNSW7fkRgsOTFPvw2Th4feZK0%2F7cXHBlFSRsLn0%2Fc2duvacFI4ZNGbXQvWGRgkzZuAz1ib1ujjeOqe9xyNm6C7p4ZyAaAeQaWP8sO6lcKiGMEVv8OU9LJhFHmC%2Fi6ro%2F15egexRZd6XdFj9r6Y3g%2B2jbTp5QVObzqjIvplbommH1e8aOLFgpFAIsKM4j1tdqj%2F048P2uRXZdcCJdudgh8hGXwh3uIYKJNTllBgEYB3mgwfOJ0%2BYebPOdI70ElM7MvorJUTr0BSdmeC%2FtnbbfjU%2BP4iCHql7JVRTF62KfxowvQggSZsgbLMrt1J8eqW5AlJRyIquiVKXs38nSBrivgN6k%2F%2FDiW0d3V6CjHiCTUSD35O9%2FDkm3BFzrf0Xp19JnbZYHk%2FwVSMz4jMXuG%2FhlQ%2Fx1l24bgGnEow%2BnmQXi0ntK5ZSg78nfAiwF%2FnVJPDlLLwfCsmr0%2BL%2B1%2FWMKTp%2BMQGOqUBVYcVBLJaxopS7RPUelgIZ%2FRyhpUtXKH2cQk9248Kw%2FYFdN5nuOaN2%2BV1%2BPt39O5obbvC78PrMgL%2FuVzkpe2%2FFeMdY3nI1uQEdNz9JCAbKEQnaD7EFhHhtCpqGA8vrT6MZANUtxMAkW5cek72Z8by42laTGicX9AT8FQ%2Fb2n6PyZ98twxaZtVTdxbS3pRwv8FJWzW2vZIR%2BqrsZofQ98jMYwproh6&X-Amz-Signature=e76d17876152a357b73b0d5e46c5cd155016b32d8faf35e898d5f283416fb751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F6TZRJM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDMDIDyamoZClyv9Q%2F44Ufp5nOmcfxXhJ2Ecq6UMtAOdQIgKV1UMfxM0H7eG8GaW71N1FjsUIfUooFPIIGbhkwkm3Qq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBvOG2QOp4VV397NOircAzErb%2FqC62NCHz7PRvNJq5R3yDliXCj8pFsKYnJ5V2nBUA3lyIs%2FTfLoqwaIY8o%2BnosgPzul5%2FzE%2BfcZ7mKQw41H48E5LveDiwNo9FwT5euB%2FQ7JdsKkmXtTjQ22u%2BzPWAl%2BPcV%2FeAyguXhlV87vobhdoGB%2B%2FFHnuCSw9lHtXR4Qg5qNSW7fkRgsOTFPvw2Th4feZK0%2F7cXHBlFSRsLn0%2Fc2duvacFI4ZNGbXQvWGRgkzZuAz1ib1ujjeOqe9xyNm6C7p4ZyAaAeQaWP8sO6lcKiGMEVv8OU9LJhFHmC%2Fi6ro%2F15egexRZd6XdFj9r6Y3g%2B2jbTp5QVObzqjIvplbommH1e8aOLFgpFAIsKM4j1tdqj%2F048P2uRXZdcCJdudgh8hGXwh3uIYKJNTllBgEYB3mgwfOJ0%2BYebPOdI70ElM7MvorJUTr0BSdmeC%2FtnbbfjU%2BP4iCHql7JVRTF62KfxowvQggSZsgbLMrt1J8eqW5AlJRyIquiVKXs38nSBrivgN6k%2F%2FDiW0d3V6CjHiCTUSD35O9%2FDkm3BFzrf0Xp19JnbZYHk%2FwVSMz4jMXuG%2FhlQ%2Fx1l24bgGnEow%2BnmQXi0ntK5ZSg78nfAiwF%2FnVJPDlLLwfCsmr0%2BL%2B1%2FWMKTp%2BMQGOqUBVYcVBLJaxopS7RPUelgIZ%2FRyhpUtXKH2cQk9248Kw%2FYFdN5nuOaN2%2BV1%2BPt39O5obbvC78PrMgL%2FuVzkpe2%2FFeMdY3nI1uQEdNz9JCAbKEQnaD7EFhHhtCpqGA8vrT6MZANUtxMAkW5cek72Z8by42laTGicX9AT8FQ%2Fb2n6PyZ98twxaZtVTdxbS3pRwv8FJWzW2vZIR%2BqrsZofQ98jMYwproh6&X-Amz-Signature=bf194db09de8b9247e9f9ab699a288848f7d47397eec4e061b1616de9bd85432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F6TZRJM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDMDIDyamoZClyv9Q%2F44Ufp5nOmcfxXhJ2Ecq6UMtAOdQIgKV1UMfxM0H7eG8GaW71N1FjsUIfUooFPIIGbhkwkm3Qq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBvOG2QOp4VV397NOircAzErb%2FqC62NCHz7PRvNJq5R3yDliXCj8pFsKYnJ5V2nBUA3lyIs%2FTfLoqwaIY8o%2BnosgPzul5%2FzE%2BfcZ7mKQw41H48E5LveDiwNo9FwT5euB%2FQ7JdsKkmXtTjQ22u%2BzPWAl%2BPcV%2FeAyguXhlV87vobhdoGB%2B%2FFHnuCSw9lHtXR4Qg5qNSW7fkRgsOTFPvw2Th4feZK0%2F7cXHBlFSRsLn0%2Fc2duvacFI4ZNGbXQvWGRgkzZuAz1ib1ujjeOqe9xyNm6C7p4ZyAaAeQaWP8sO6lcKiGMEVv8OU9LJhFHmC%2Fi6ro%2F15egexRZd6XdFj9r6Y3g%2B2jbTp5QVObzqjIvplbommH1e8aOLFgpFAIsKM4j1tdqj%2F048P2uRXZdcCJdudgh8hGXwh3uIYKJNTllBgEYB3mgwfOJ0%2BYebPOdI70ElM7MvorJUTr0BSdmeC%2FtnbbfjU%2BP4iCHql7JVRTF62KfxowvQggSZsgbLMrt1J8eqW5AlJRyIquiVKXs38nSBrivgN6k%2F%2FDiW0d3V6CjHiCTUSD35O9%2FDkm3BFzrf0Xp19JnbZYHk%2FwVSMz4jMXuG%2FhlQ%2Fx1l24bgGnEow%2BnmQXi0ntK5ZSg78nfAiwF%2FnVJPDlLLwfCsmr0%2BL%2B1%2FWMKTp%2BMQGOqUBVYcVBLJaxopS7RPUelgIZ%2FRyhpUtXKH2cQk9248Kw%2FYFdN5nuOaN2%2BV1%2BPt39O5obbvC78PrMgL%2FuVzkpe2%2FFeMdY3nI1uQEdNz9JCAbKEQnaD7EFhHhtCpqGA8vrT6MZANUtxMAkW5cek72Z8by42laTGicX9AT8FQ%2Fb2n6PyZ98twxaZtVTdxbS3pRwv8FJWzW2vZIR%2BqrsZofQ98jMYwproh6&X-Amz-Signature=a718b292ce74f5ee73ed0cca13643aab69b2c8fad9eed3eec4704baae4513c5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F6TZRJM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDMDIDyamoZClyv9Q%2F44Ufp5nOmcfxXhJ2Ecq6UMtAOdQIgKV1UMfxM0H7eG8GaW71N1FjsUIfUooFPIIGbhkwkm3Qq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBvOG2QOp4VV397NOircAzErb%2FqC62NCHz7PRvNJq5R3yDliXCj8pFsKYnJ5V2nBUA3lyIs%2FTfLoqwaIY8o%2BnosgPzul5%2FzE%2BfcZ7mKQw41H48E5LveDiwNo9FwT5euB%2FQ7JdsKkmXtTjQ22u%2BzPWAl%2BPcV%2FeAyguXhlV87vobhdoGB%2B%2FFHnuCSw9lHtXR4Qg5qNSW7fkRgsOTFPvw2Th4feZK0%2F7cXHBlFSRsLn0%2Fc2duvacFI4ZNGbXQvWGRgkzZuAz1ib1ujjeOqe9xyNm6C7p4ZyAaAeQaWP8sO6lcKiGMEVv8OU9LJhFHmC%2Fi6ro%2F15egexRZd6XdFj9r6Y3g%2B2jbTp5QVObzqjIvplbommH1e8aOLFgpFAIsKM4j1tdqj%2F048P2uRXZdcCJdudgh8hGXwh3uIYKJNTllBgEYB3mgwfOJ0%2BYebPOdI70ElM7MvorJUTr0BSdmeC%2FtnbbfjU%2BP4iCHql7JVRTF62KfxowvQggSZsgbLMrt1J8eqW5AlJRyIquiVKXs38nSBrivgN6k%2F%2FDiW0d3V6CjHiCTUSD35O9%2FDkm3BFzrf0Xp19JnbZYHk%2FwVSMz4jMXuG%2FhlQ%2Fx1l24bgGnEow%2BnmQXi0ntK5ZSg78nfAiwF%2FnVJPDlLLwfCsmr0%2BL%2B1%2FWMKTp%2BMQGOqUBVYcVBLJaxopS7RPUelgIZ%2FRyhpUtXKH2cQk9248Kw%2FYFdN5nuOaN2%2BV1%2BPt39O5obbvC78PrMgL%2FuVzkpe2%2FFeMdY3nI1uQEdNz9JCAbKEQnaD7EFhHhtCpqGA8vrT6MZANUtxMAkW5cek72Z8by42laTGicX9AT8FQ%2Fb2n6PyZ98twxaZtVTdxbS3pRwv8FJWzW2vZIR%2BqrsZofQ98jMYwproh6&X-Amz-Signature=4d6fded64934d884e9f993b690a6b1c0f378a8a75b7798cc8d70a31c901e7f11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F6TZRJM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDMDIDyamoZClyv9Q%2F44Ufp5nOmcfxXhJ2Ecq6UMtAOdQIgKV1UMfxM0H7eG8GaW71N1FjsUIfUooFPIIGbhkwkm3Qq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBvOG2QOp4VV397NOircAzErb%2FqC62NCHz7PRvNJq5R3yDliXCj8pFsKYnJ5V2nBUA3lyIs%2FTfLoqwaIY8o%2BnosgPzul5%2FzE%2BfcZ7mKQw41H48E5LveDiwNo9FwT5euB%2FQ7JdsKkmXtTjQ22u%2BzPWAl%2BPcV%2FeAyguXhlV87vobhdoGB%2B%2FFHnuCSw9lHtXR4Qg5qNSW7fkRgsOTFPvw2Th4feZK0%2F7cXHBlFSRsLn0%2Fc2duvacFI4ZNGbXQvWGRgkzZuAz1ib1ujjeOqe9xyNm6C7p4ZyAaAeQaWP8sO6lcKiGMEVv8OU9LJhFHmC%2Fi6ro%2F15egexRZd6XdFj9r6Y3g%2B2jbTp5QVObzqjIvplbommH1e8aOLFgpFAIsKM4j1tdqj%2F048P2uRXZdcCJdudgh8hGXwh3uIYKJNTllBgEYB3mgwfOJ0%2BYebPOdI70ElM7MvorJUTr0BSdmeC%2FtnbbfjU%2BP4iCHql7JVRTF62KfxowvQggSZsgbLMrt1J8eqW5AlJRyIquiVKXs38nSBrivgN6k%2F%2FDiW0d3V6CjHiCTUSD35O9%2FDkm3BFzrf0Xp19JnbZYHk%2FwVSMz4jMXuG%2FhlQ%2Fx1l24bgGnEow%2BnmQXi0ntK5ZSg78nfAiwF%2FnVJPDlLLwfCsmr0%2BL%2B1%2FWMKTp%2BMQGOqUBVYcVBLJaxopS7RPUelgIZ%2FRyhpUtXKH2cQk9248Kw%2FYFdN5nuOaN2%2BV1%2BPt39O5obbvC78PrMgL%2FuVzkpe2%2FFeMdY3nI1uQEdNz9JCAbKEQnaD7EFhHhtCpqGA8vrT6MZANUtxMAkW5cek72Z8by42laTGicX9AT8FQ%2Fb2n6PyZ98twxaZtVTdxbS3pRwv8FJWzW2vZIR%2BqrsZofQ98jMYwproh6&X-Amz-Signature=f960489e94b34b26778cf0b4d0e2847acca6397276561dd25327e19a8d21ef19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
