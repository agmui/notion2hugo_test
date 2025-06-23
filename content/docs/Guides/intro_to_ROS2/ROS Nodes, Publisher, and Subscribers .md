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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6HSCHAJ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIAPP8xdxH8LoeVs1LRLaNtzYWJyMLqXJpyOZ5ZxJnDv6AiEA8ktwMH7NAy4udFBTSQEa3xZHnjG%2BgaSGlQURYbdyoBMqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4C43Unoy5ykYnSjSrcA4M2mwMnF8pBJyCKa6QLsofodcww1XC47E50Lw%2FpWPcZetiStpq9hEB5u4ncIpSz%2FzqiHMr6CkvozIYvtqLHZ3YLvE%2BVeBPbOBXYFPFb2HXgXDAzrPWn23qrQW4QrpPUC%2FgkSQRqLwahTXo4%2F%2B1ak6eOo%2Fwl3kUFMrqiCVnSU%2FdAzYucaxINGkcZ%2BR7y4NJIn6Cadp5GC6fYTq0tgsM2E5O1Cuzza%2Be7EruTzwiFubsbuogCNxE%2BAxSBGanCe1AqeGUwI%2B7BsoogCfimpfy1I1z4o1KnjheOnLRh7mtqTaWt6sHc9CAHT%2Fq1xWevUW7xD0qGoNS23DVNmnT3xhapOxhXQAVtbQBR0wdLRo%2BNyuqm%2BVmnxDatJ88NZU1t4G8pSPofcsENChzvIpZnQhN%2FkaU%2BN3MujErMGUP9FZIQblSbMGV1groTlEKz7zIba%2FMEQnTHDrNAVbCbK%2Bsf1eICv9ojUo2KX%2FM5%2Fvuy4eZ4uVDyYYQcE0PHqRHXE%2FlzoZ3w4zTFOGW9Yxgyoh3OTDVwVA2cR8pfwr%2Bsx2gUXwpAZeOIDrCg5Rh6yxn5MDLMc6R8wZHHgI6c7o9pQDygOwq9gv8SH309KFgThP4qWWQomXmEc1lJ1XF0PXTNVgJPMMev48IGOqUBs8r8ZStXD4VGxloeVW4e9ASuEGcMzpzKkWzXX%2FKJBfQv69ln4FQ2YcC2dE5cbaCSTK0MYJx1PGDiM8s9dO3vrjoEgEt%2BpMW0FrI7IDsG0syHvfFiOasGpsIHVABfV%2B5JRowAORlb0EizzSDQXjhQORYylRewebHp3QQo6uW306KLaNeZhIv%2BsJBlBA%2BWIxJ5qbDtlN2qRJbs7cxrTUY3ug5Eqrwn&X-Amz-Signature=e58dafa14f6cf99d0049d03adb78288f77bd66803250479d2b5743a0abaf0df0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6HSCHAJ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIAPP8xdxH8LoeVs1LRLaNtzYWJyMLqXJpyOZ5ZxJnDv6AiEA8ktwMH7NAy4udFBTSQEa3xZHnjG%2BgaSGlQURYbdyoBMqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4C43Unoy5ykYnSjSrcA4M2mwMnF8pBJyCKa6QLsofodcww1XC47E50Lw%2FpWPcZetiStpq9hEB5u4ncIpSz%2FzqiHMr6CkvozIYvtqLHZ3YLvE%2BVeBPbOBXYFPFb2HXgXDAzrPWn23qrQW4QrpPUC%2FgkSQRqLwahTXo4%2F%2B1ak6eOo%2Fwl3kUFMrqiCVnSU%2FdAzYucaxINGkcZ%2BR7y4NJIn6Cadp5GC6fYTq0tgsM2E5O1Cuzza%2Be7EruTzwiFubsbuogCNxE%2BAxSBGanCe1AqeGUwI%2B7BsoogCfimpfy1I1z4o1KnjheOnLRh7mtqTaWt6sHc9CAHT%2Fq1xWevUW7xD0qGoNS23DVNmnT3xhapOxhXQAVtbQBR0wdLRo%2BNyuqm%2BVmnxDatJ88NZU1t4G8pSPofcsENChzvIpZnQhN%2FkaU%2BN3MujErMGUP9FZIQblSbMGV1groTlEKz7zIba%2FMEQnTHDrNAVbCbK%2Bsf1eICv9ojUo2KX%2FM5%2Fvuy4eZ4uVDyYYQcE0PHqRHXE%2FlzoZ3w4zTFOGW9Yxgyoh3OTDVwVA2cR8pfwr%2Bsx2gUXwpAZeOIDrCg5Rh6yxn5MDLMc6R8wZHHgI6c7o9pQDygOwq9gv8SH309KFgThP4qWWQomXmEc1lJ1XF0PXTNVgJPMMev48IGOqUBs8r8ZStXD4VGxloeVW4e9ASuEGcMzpzKkWzXX%2FKJBfQv69ln4FQ2YcC2dE5cbaCSTK0MYJx1PGDiM8s9dO3vrjoEgEt%2BpMW0FrI7IDsG0syHvfFiOasGpsIHVABfV%2B5JRowAORlb0EizzSDQXjhQORYylRewebHp3QQo6uW306KLaNeZhIv%2BsJBlBA%2BWIxJ5qbDtlN2qRJbs7cxrTUY3ug5Eqrwn&X-Amz-Signature=743a6b8293ed0edcbceb1f9aff4d20d6529ee468aa83008c4b626e00e0c2308a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6HSCHAJ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIAPP8xdxH8LoeVs1LRLaNtzYWJyMLqXJpyOZ5ZxJnDv6AiEA8ktwMH7NAy4udFBTSQEa3xZHnjG%2BgaSGlQURYbdyoBMqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4C43Unoy5ykYnSjSrcA4M2mwMnF8pBJyCKa6QLsofodcww1XC47E50Lw%2FpWPcZetiStpq9hEB5u4ncIpSz%2FzqiHMr6CkvozIYvtqLHZ3YLvE%2BVeBPbOBXYFPFb2HXgXDAzrPWn23qrQW4QrpPUC%2FgkSQRqLwahTXo4%2F%2B1ak6eOo%2Fwl3kUFMrqiCVnSU%2FdAzYucaxINGkcZ%2BR7y4NJIn6Cadp5GC6fYTq0tgsM2E5O1Cuzza%2Be7EruTzwiFubsbuogCNxE%2BAxSBGanCe1AqeGUwI%2B7BsoogCfimpfy1I1z4o1KnjheOnLRh7mtqTaWt6sHc9CAHT%2Fq1xWevUW7xD0qGoNS23DVNmnT3xhapOxhXQAVtbQBR0wdLRo%2BNyuqm%2BVmnxDatJ88NZU1t4G8pSPofcsENChzvIpZnQhN%2FkaU%2BN3MujErMGUP9FZIQblSbMGV1groTlEKz7zIba%2FMEQnTHDrNAVbCbK%2Bsf1eICv9ojUo2KX%2FM5%2Fvuy4eZ4uVDyYYQcE0PHqRHXE%2FlzoZ3w4zTFOGW9Yxgyoh3OTDVwVA2cR8pfwr%2Bsx2gUXwpAZeOIDrCg5Rh6yxn5MDLMc6R8wZHHgI6c7o9pQDygOwq9gv8SH309KFgThP4qWWQomXmEc1lJ1XF0PXTNVgJPMMev48IGOqUBs8r8ZStXD4VGxloeVW4e9ASuEGcMzpzKkWzXX%2FKJBfQv69ln4FQ2YcC2dE5cbaCSTK0MYJx1PGDiM8s9dO3vrjoEgEt%2BpMW0FrI7IDsG0syHvfFiOasGpsIHVABfV%2B5JRowAORlb0EizzSDQXjhQORYylRewebHp3QQo6uW306KLaNeZhIv%2BsJBlBA%2BWIxJ5qbDtlN2qRJbs7cxrTUY3ug5Eqrwn&X-Amz-Signature=7f851a841ba0e86f53c6947bc4867d7763fa8d4af578b9de9535c671641cdf42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6HSCHAJ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIAPP8xdxH8LoeVs1LRLaNtzYWJyMLqXJpyOZ5ZxJnDv6AiEA8ktwMH7NAy4udFBTSQEa3xZHnjG%2BgaSGlQURYbdyoBMqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4C43Unoy5ykYnSjSrcA4M2mwMnF8pBJyCKa6QLsofodcww1XC47E50Lw%2FpWPcZetiStpq9hEB5u4ncIpSz%2FzqiHMr6CkvozIYvtqLHZ3YLvE%2BVeBPbOBXYFPFb2HXgXDAzrPWn23qrQW4QrpPUC%2FgkSQRqLwahTXo4%2F%2B1ak6eOo%2Fwl3kUFMrqiCVnSU%2FdAzYucaxINGkcZ%2BR7y4NJIn6Cadp5GC6fYTq0tgsM2E5O1Cuzza%2Be7EruTzwiFubsbuogCNxE%2BAxSBGanCe1AqeGUwI%2B7BsoogCfimpfy1I1z4o1KnjheOnLRh7mtqTaWt6sHc9CAHT%2Fq1xWevUW7xD0qGoNS23DVNmnT3xhapOxhXQAVtbQBR0wdLRo%2BNyuqm%2BVmnxDatJ88NZU1t4G8pSPofcsENChzvIpZnQhN%2FkaU%2BN3MujErMGUP9FZIQblSbMGV1groTlEKz7zIba%2FMEQnTHDrNAVbCbK%2Bsf1eICv9ojUo2KX%2FM5%2Fvuy4eZ4uVDyYYQcE0PHqRHXE%2FlzoZ3w4zTFOGW9Yxgyoh3OTDVwVA2cR8pfwr%2Bsx2gUXwpAZeOIDrCg5Rh6yxn5MDLMc6R8wZHHgI6c7o9pQDygOwq9gv8SH309KFgThP4qWWQomXmEc1lJ1XF0PXTNVgJPMMev48IGOqUBs8r8ZStXD4VGxloeVW4e9ASuEGcMzpzKkWzXX%2FKJBfQv69ln4FQ2YcC2dE5cbaCSTK0MYJx1PGDiM8s9dO3vrjoEgEt%2BpMW0FrI7IDsG0syHvfFiOasGpsIHVABfV%2B5JRowAORlb0EizzSDQXjhQORYylRewebHp3QQo6uW306KLaNeZhIv%2BsJBlBA%2BWIxJ5qbDtlN2qRJbs7cxrTUY3ug5Eqrwn&X-Amz-Signature=9808e9ee111ef54d1ef268a90a77e73d1a3361c8f568a0b931c9d00a55dd028b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6HSCHAJ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIAPP8xdxH8LoeVs1LRLaNtzYWJyMLqXJpyOZ5ZxJnDv6AiEA8ktwMH7NAy4udFBTSQEa3xZHnjG%2BgaSGlQURYbdyoBMqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4C43Unoy5ykYnSjSrcA4M2mwMnF8pBJyCKa6QLsofodcww1XC47E50Lw%2FpWPcZetiStpq9hEB5u4ncIpSz%2FzqiHMr6CkvozIYvtqLHZ3YLvE%2BVeBPbOBXYFPFb2HXgXDAzrPWn23qrQW4QrpPUC%2FgkSQRqLwahTXo4%2F%2B1ak6eOo%2Fwl3kUFMrqiCVnSU%2FdAzYucaxINGkcZ%2BR7y4NJIn6Cadp5GC6fYTq0tgsM2E5O1Cuzza%2Be7EruTzwiFubsbuogCNxE%2BAxSBGanCe1AqeGUwI%2B7BsoogCfimpfy1I1z4o1KnjheOnLRh7mtqTaWt6sHc9CAHT%2Fq1xWevUW7xD0qGoNS23DVNmnT3xhapOxhXQAVtbQBR0wdLRo%2BNyuqm%2BVmnxDatJ88NZU1t4G8pSPofcsENChzvIpZnQhN%2FkaU%2BN3MujErMGUP9FZIQblSbMGV1groTlEKz7zIba%2FMEQnTHDrNAVbCbK%2Bsf1eICv9ojUo2KX%2FM5%2Fvuy4eZ4uVDyYYQcE0PHqRHXE%2FlzoZ3w4zTFOGW9Yxgyoh3OTDVwVA2cR8pfwr%2Bsx2gUXwpAZeOIDrCg5Rh6yxn5MDLMc6R8wZHHgI6c7o9pQDygOwq9gv8SH309KFgThP4qWWQomXmEc1lJ1XF0PXTNVgJPMMev48IGOqUBs8r8ZStXD4VGxloeVW4e9ASuEGcMzpzKkWzXX%2FKJBfQv69ln4FQ2YcC2dE5cbaCSTK0MYJx1PGDiM8s9dO3vrjoEgEt%2BpMW0FrI7IDsG0syHvfFiOasGpsIHVABfV%2B5JRowAORlb0EizzSDQXjhQORYylRewebHp3QQo6uW306KLaNeZhIv%2BsJBlBA%2BWIxJ5qbDtlN2qRJbs7cxrTUY3ug5Eqrwn&X-Amz-Signature=837a868deb16d8d408e54d0598d7ccf87a45f59387d451f6146887cc99631913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6HSCHAJ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIAPP8xdxH8LoeVs1LRLaNtzYWJyMLqXJpyOZ5ZxJnDv6AiEA8ktwMH7NAy4udFBTSQEa3xZHnjG%2BgaSGlQURYbdyoBMqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4C43Unoy5ykYnSjSrcA4M2mwMnF8pBJyCKa6QLsofodcww1XC47E50Lw%2FpWPcZetiStpq9hEB5u4ncIpSz%2FzqiHMr6CkvozIYvtqLHZ3YLvE%2BVeBPbOBXYFPFb2HXgXDAzrPWn23qrQW4QrpPUC%2FgkSQRqLwahTXo4%2F%2B1ak6eOo%2Fwl3kUFMrqiCVnSU%2FdAzYucaxINGkcZ%2BR7y4NJIn6Cadp5GC6fYTq0tgsM2E5O1Cuzza%2Be7EruTzwiFubsbuogCNxE%2BAxSBGanCe1AqeGUwI%2B7BsoogCfimpfy1I1z4o1KnjheOnLRh7mtqTaWt6sHc9CAHT%2Fq1xWevUW7xD0qGoNS23DVNmnT3xhapOxhXQAVtbQBR0wdLRo%2BNyuqm%2BVmnxDatJ88NZU1t4G8pSPofcsENChzvIpZnQhN%2FkaU%2BN3MujErMGUP9FZIQblSbMGV1groTlEKz7zIba%2FMEQnTHDrNAVbCbK%2Bsf1eICv9ojUo2KX%2FM5%2Fvuy4eZ4uVDyYYQcE0PHqRHXE%2FlzoZ3w4zTFOGW9Yxgyoh3OTDVwVA2cR8pfwr%2Bsx2gUXwpAZeOIDrCg5Rh6yxn5MDLMc6R8wZHHgI6c7o9pQDygOwq9gv8SH309KFgThP4qWWQomXmEc1lJ1XF0PXTNVgJPMMev48IGOqUBs8r8ZStXD4VGxloeVW4e9ASuEGcMzpzKkWzXX%2FKJBfQv69ln4FQ2YcC2dE5cbaCSTK0MYJx1PGDiM8s9dO3vrjoEgEt%2BpMW0FrI7IDsG0syHvfFiOasGpsIHVABfV%2B5JRowAORlb0EizzSDQXjhQORYylRewebHp3QQo6uW306KLaNeZhIv%2BsJBlBA%2BWIxJ5qbDtlN2qRJbs7cxrTUY3ug5Eqrwn&X-Amz-Signature=e515201342714fb2b26ce342e4d50f19712035347fa13827707c739dd1566a78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6HSCHAJ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIAPP8xdxH8LoeVs1LRLaNtzYWJyMLqXJpyOZ5ZxJnDv6AiEA8ktwMH7NAy4udFBTSQEa3xZHnjG%2BgaSGlQURYbdyoBMqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4C43Unoy5ykYnSjSrcA4M2mwMnF8pBJyCKa6QLsofodcww1XC47E50Lw%2FpWPcZetiStpq9hEB5u4ncIpSz%2FzqiHMr6CkvozIYvtqLHZ3YLvE%2BVeBPbOBXYFPFb2HXgXDAzrPWn23qrQW4QrpPUC%2FgkSQRqLwahTXo4%2F%2B1ak6eOo%2Fwl3kUFMrqiCVnSU%2FdAzYucaxINGkcZ%2BR7y4NJIn6Cadp5GC6fYTq0tgsM2E5O1Cuzza%2Be7EruTzwiFubsbuogCNxE%2BAxSBGanCe1AqeGUwI%2B7BsoogCfimpfy1I1z4o1KnjheOnLRh7mtqTaWt6sHc9CAHT%2Fq1xWevUW7xD0qGoNS23DVNmnT3xhapOxhXQAVtbQBR0wdLRo%2BNyuqm%2BVmnxDatJ88NZU1t4G8pSPofcsENChzvIpZnQhN%2FkaU%2BN3MujErMGUP9FZIQblSbMGV1groTlEKz7zIba%2FMEQnTHDrNAVbCbK%2Bsf1eICv9ojUo2KX%2FM5%2Fvuy4eZ4uVDyYYQcE0PHqRHXE%2FlzoZ3w4zTFOGW9Yxgyoh3OTDVwVA2cR8pfwr%2Bsx2gUXwpAZeOIDrCg5Rh6yxn5MDLMc6R8wZHHgI6c7o9pQDygOwq9gv8SH309KFgThP4qWWQomXmEc1lJ1XF0PXTNVgJPMMev48IGOqUBs8r8ZStXD4VGxloeVW4e9ASuEGcMzpzKkWzXX%2FKJBfQv69ln4FQ2YcC2dE5cbaCSTK0MYJx1PGDiM8s9dO3vrjoEgEt%2BpMW0FrI7IDsG0syHvfFiOasGpsIHVABfV%2B5JRowAORlb0EizzSDQXjhQORYylRewebHp3QQo6uW306KLaNeZhIv%2BsJBlBA%2BWIxJ5qbDtlN2qRJbs7cxrTUY3ug5Eqrwn&X-Amz-Signature=29d648fe243d0416f7e92b877e9304beef5b8209bf09b4335ab642c1aa73ad14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6HSCHAJ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIAPP8xdxH8LoeVs1LRLaNtzYWJyMLqXJpyOZ5ZxJnDv6AiEA8ktwMH7NAy4udFBTSQEa3xZHnjG%2BgaSGlQURYbdyoBMqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4C43Unoy5ykYnSjSrcA4M2mwMnF8pBJyCKa6QLsofodcww1XC47E50Lw%2FpWPcZetiStpq9hEB5u4ncIpSz%2FzqiHMr6CkvozIYvtqLHZ3YLvE%2BVeBPbOBXYFPFb2HXgXDAzrPWn23qrQW4QrpPUC%2FgkSQRqLwahTXo4%2F%2B1ak6eOo%2Fwl3kUFMrqiCVnSU%2FdAzYucaxINGkcZ%2BR7y4NJIn6Cadp5GC6fYTq0tgsM2E5O1Cuzza%2Be7EruTzwiFubsbuogCNxE%2BAxSBGanCe1AqeGUwI%2B7BsoogCfimpfy1I1z4o1KnjheOnLRh7mtqTaWt6sHc9CAHT%2Fq1xWevUW7xD0qGoNS23DVNmnT3xhapOxhXQAVtbQBR0wdLRo%2BNyuqm%2BVmnxDatJ88NZU1t4G8pSPofcsENChzvIpZnQhN%2FkaU%2BN3MujErMGUP9FZIQblSbMGV1groTlEKz7zIba%2FMEQnTHDrNAVbCbK%2Bsf1eICv9ojUo2KX%2FM5%2Fvuy4eZ4uVDyYYQcE0PHqRHXE%2FlzoZ3w4zTFOGW9Yxgyoh3OTDVwVA2cR8pfwr%2Bsx2gUXwpAZeOIDrCg5Rh6yxn5MDLMc6R8wZHHgI6c7o9pQDygOwq9gv8SH309KFgThP4qWWQomXmEc1lJ1XF0PXTNVgJPMMev48IGOqUBs8r8ZStXD4VGxloeVW4e9ASuEGcMzpzKkWzXX%2FKJBfQv69ln4FQ2YcC2dE5cbaCSTK0MYJx1PGDiM8s9dO3vrjoEgEt%2BpMW0FrI7IDsG0syHvfFiOasGpsIHVABfV%2B5JRowAORlb0EizzSDQXjhQORYylRewebHp3QQo6uW306KLaNeZhIv%2BsJBlBA%2BWIxJ5qbDtlN2qRJbs7cxrTUY3ug5Eqrwn&X-Amz-Signature=07b5b4ec0bc4b24621a6a3089ee8b50ff0d6e0d53951b6a933725ff5aa78bc52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
