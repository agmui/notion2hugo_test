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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLIOKCU2%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD16ODmwPBFchsdzVuiPTk35Pv2k%2FzmeILpROtQnAd%2F%2FwIgUG6Bv%2FHn2Nj9591U9SgRtMBlJw3BLqN8jm1EMpnkpRgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBRCgu1pXb9YbY06PSrcA8moKl56N%2BXbO2O%2BawUhcCsUhxzRgbNDKFPxDZdtU9N2h3YPZ%2BECFuYWRN19Qrz3TxUMG%2F5AkrpRBv1I9TI7ViNx8eBXIICjNxnH4VLpW58WcuzHzVnkgYDDLuQ%2FJnxbYk4rNYXypuX3WpXI91Ue1sdkY146t19pdIl1GNgqK5AMvTpGzjh2k0hLYF6Uxu9xEcCqJetkwrEmvdt2aTE6N3JPpRGJpuZSaSEtomc03Ix%2BRTVkmTYyIznMRNfe8n1fxgHDxEk7cuMEjFRSgbrBC%2FkjeJbRWaRGukDEUhkbffanM%2B79sF1h8ZPWm8rNJVB9ra3JCgQvNAsaKTs36%2BMQkJ2I5eJIhQBfkYAa6X418iVA61RAShdREFUb3%2BmgtyIMNXHCT2lydgp1AB28ynsSHBOQmCWj5cV2lDpCmeyK%2FhCHCmVmys2LPgeZ7VKVdiEMNuXe4rIojsUgFyXqNI%2BN8jhmJGQRx1tK7bhMe8z10yzpR6pmT6rHMsUN8agpVl%2FSXwG8PlpeAuRixqB6gMSmm1uhv%2FoJeXlrAyGMyFWP0O6ZFuXkBrm1yCzrhzVf7oHMs9zKvxCzW7VrZ1rrko6j6pi76kIBXIu1z6ycwoesKI0Y497JEymy0lrVcuZ%2FMMitgsAGOqUBcyTjv0XkSkYTFpCFKBsgrSSNYZIv7YtyfGnmDY1b5tRVD57zbLvWacwwGF%2F1gxIlxuvgr0%2FzHeygd5TAwq1yywcL67vzei6J6o6%2FAB0sOrff0L7Xvtsus4O1blYLsh8Zw2TbKXW9yG9%2Fz9EcFOzpdGCn6SUM0085Cj5hQ06iKZxr5oUnpmNw2kRiitx483AyUb9STg4HB3mFIGveEReSyuhVEAHQ&X-Amz-Signature=1e98bf575634958575b448ea7c9d0e6f73a95971768590f5db6a8579bd538018&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLIOKCU2%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD16ODmwPBFchsdzVuiPTk35Pv2k%2FzmeILpROtQnAd%2F%2FwIgUG6Bv%2FHn2Nj9591U9SgRtMBlJw3BLqN8jm1EMpnkpRgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBRCgu1pXb9YbY06PSrcA8moKl56N%2BXbO2O%2BawUhcCsUhxzRgbNDKFPxDZdtU9N2h3YPZ%2BECFuYWRN19Qrz3TxUMG%2F5AkrpRBv1I9TI7ViNx8eBXIICjNxnH4VLpW58WcuzHzVnkgYDDLuQ%2FJnxbYk4rNYXypuX3WpXI91Ue1sdkY146t19pdIl1GNgqK5AMvTpGzjh2k0hLYF6Uxu9xEcCqJetkwrEmvdt2aTE6N3JPpRGJpuZSaSEtomc03Ix%2BRTVkmTYyIznMRNfe8n1fxgHDxEk7cuMEjFRSgbrBC%2FkjeJbRWaRGukDEUhkbffanM%2B79sF1h8ZPWm8rNJVB9ra3JCgQvNAsaKTs36%2BMQkJ2I5eJIhQBfkYAa6X418iVA61RAShdREFUb3%2BmgtyIMNXHCT2lydgp1AB28ynsSHBOQmCWj5cV2lDpCmeyK%2FhCHCmVmys2LPgeZ7VKVdiEMNuXe4rIojsUgFyXqNI%2BN8jhmJGQRx1tK7bhMe8z10yzpR6pmT6rHMsUN8agpVl%2FSXwG8PlpeAuRixqB6gMSmm1uhv%2FoJeXlrAyGMyFWP0O6ZFuXkBrm1yCzrhzVf7oHMs9zKvxCzW7VrZ1rrko6j6pi76kIBXIu1z6ycwoesKI0Y497JEymy0lrVcuZ%2FMMitgsAGOqUBcyTjv0XkSkYTFpCFKBsgrSSNYZIv7YtyfGnmDY1b5tRVD57zbLvWacwwGF%2F1gxIlxuvgr0%2FzHeygd5TAwq1yywcL67vzei6J6o6%2FAB0sOrff0L7Xvtsus4O1blYLsh8Zw2TbKXW9yG9%2Fz9EcFOzpdGCn6SUM0085Cj5hQ06iKZxr5oUnpmNw2kRiitx483AyUb9STg4HB3mFIGveEReSyuhVEAHQ&X-Amz-Signature=529418b044ec26e29b39bb789d585b260bc2261594d4953e53d0e39a1e468e9a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLIOKCU2%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD16ODmwPBFchsdzVuiPTk35Pv2k%2FzmeILpROtQnAd%2F%2FwIgUG6Bv%2FHn2Nj9591U9SgRtMBlJw3BLqN8jm1EMpnkpRgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBRCgu1pXb9YbY06PSrcA8moKl56N%2BXbO2O%2BawUhcCsUhxzRgbNDKFPxDZdtU9N2h3YPZ%2BECFuYWRN19Qrz3TxUMG%2F5AkrpRBv1I9TI7ViNx8eBXIICjNxnH4VLpW58WcuzHzVnkgYDDLuQ%2FJnxbYk4rNYXypuX3WpXI91Ue1sdkY146t19pdIl1GNgqK5AMvTpGzjh2k0hLYF6Uxu9xEcCqJetkwrEmvdt2aTE6N3JPpRGJpuZSaSEtomc03Ix%2BRTVkmTYyIznMRNfe8n1fxgHDxEk7cuMEjFRSgbrBC%2FkjeJbRWaRGukDEUhkbffanM%2B79sF1h8ZPWm8rNJVB9ra3JCgQvNAsaKTs36%2BMQkJ2I5eJIhQBfkYAa6X418iVA61RAShdREFUb3%2BmgtyIMNXHCT2lydgp1AB28ynsSHBOQmCWj5cV2lDpCmeyK%2FhCHCmVmys2LPgeZ7VKVdiEMNuXe4rIojsUgFyXqNI%2BN8jhmJGQRx1tK7bhMe8z10yzpR6pmT6rHMsUN8agpVl%2FSXwG8PlpeAuRixqB6gMSmm1uhv%2FoJeXlrAyGMyFWP0O6ZFuXkBrm1yCzrhzVf7oHMs9zKvxCzW7VrZ1rrko6j6pi76kIBXIu1z6ycwoesKI0Y497JEymy0lrVcuZ%2FMMitgsAGOqUBcyTjv0XkSkYTFpCFKBsgrSSNYZIv7YtyfGnmDY1b5tRVD57zbLvWacwwGF%2F1gxIlxuvgr0%2FzHeygd5TAwq1yywcL67vzei6J6o6%2FAB0sOrff0L7Xvtsus4O1blYLsh8Zw2TbKXW9yG9%2Fz9EcFOzpdGCn6SUM0085Cj5hQ06iKZxr5oUnpmNw2kRiitx483AyUb9STg4HB3mFIGveEReSyuhVEAHQ&X-Amz-Signature=243b17316aa1407ef80a79de19acf935b19c9f22a3c840ce925b1ac2c4d5c3f2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLIOKCU2%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD16ODmwPBFchsdzVuiPTk35Pv2k%2FzmeILpROtQnAd%2F%2FwIgUG6Bv%2FHn2Nj9591U9SgRtMBlJw3BLqN8jm1EMpnkpRgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBRCgu1pXb9YbY06PSrcA8moKl56N%2BXbO2O%2BawUhcCsUhxzRgbNDKFPxDZdtU9N2h3YPZ%2BECFuYWRN19Qrz3TxUMG%2F5AkrpRBv1I9TI7ViNx8eBXIICjNxnH4VLpW58WcuzHzVnkgYDDLuQ%2FJnxbYk4rNYXypuX3WpXI91Ue1sdkY146t19pdIl1GNgqK5AMvTpGzjh2k0hLYF6Uxu9xEcCqJetkwrEmvdt2aTE6N3JPpRGJpuZSaSEtomc03Ix%2BRTVkmTYyIznMRNfe8n1fxgHDxEk7cuMEjFRSgbrBC%2FkjeJbRWaRGukDEUhkbffanM%2B79sF1h8ZPWm8rNJVB9ra3JCgQvNAsaKTs36%2BMQkJ2I5eJIhQBfkYAa6X418iVA61RAShdREFUb3%2BmgtyIMNXHCT2lydgp1AB28ynsSHBOQmCWj5cV2lDpCmeyK%2FhCHCmVmys2LPgeZ7VKVdiEMNuXe4rIojsUgFyXqNI%2BN8jhmJGQRx1tK7bhMe8z10yzpR6pmT6rHMsUN8agpVl%2FSXwG8PlpeAuRixqB6gMSmm1uhv%2FoJeXlrAyGMyFWP0O6ZFuXkBrm1yCzrhzVf7oHMs9zKvxCzW7VrZ1rrko6j6pi76kIBXIu1z6ycwoesKI0Y497JEymy0lrVcuZ%2FMMitgsAGOqUBcyTjv0XkSkYTFpCFKBsgrSSNYZIv7YtyfGnmDY1b5tRVD57zbLvWacwwGF%2F1gxIlxuvgr0%2FzHeygd5TAwq1yywcL67vzei6J6o6%2FAB0sOrff0L7Xvtsus4O1blYLsh8Zw2TbKXW9yG9%2Fz9EcFOzpdGCn6SUM0085Cj5hQ06iKZxr5oUnpmNw2kRiitx483AyUb9STg4HB3mFIGveEReSyuhVEAHQ&X-Amz-Signature=08fff0e20c96df0b22ddc2571a5c032d5e5b35f25cdc405f37519bb556de4e3f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLIOKCU2%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD16ODmwPBFchsdzVuiPTk35Pv2k%2FzmeILpROtQnAd%2F%2FwIgUG6Bv%2FHn2Nj9591U9SgRtMBlJw3BLqN8jm1EMpnkpRgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBRCgu1pXb9YbY06PSrcA8moKl56N%2BXbO2O%2BawUhcCsUhxzRgbNDKFPxDZdtU9N2h3YPZ%2BECFuYWRN19Qrz3TxUMG%2F5AkrpRBv1I9TI7ViNx8eBXIICjNxnH4VLpW58WcuzHzVnkgYDDLuQ%2FJnxbYk4rNYXypuX3WpXI91Ue1sdkY146t19pdIl1GNgqK5AMvTpGzjh2k0hLYF6Uxu9xEcCqJetkwrEmvdt2aTE6N3JPpRGJpuZSaSEtomc03Ix%2BRTVkmTYyIznMRNfe8n1fxgHDxEk7cuMEjFRSgbrBC%2FkjeJbRWaRGukDEUhkbffanM%2B79sF1h8ZPWm8rNJVB9ra3JCgQvNAsaKTs36%2BMQkJ2I5eJIhQBfkYAa6X418iVA61RAShdREFUb3%2BmgtyIMNXHCT2lydgp1AB28ynsSHBOQmCWj5cV2lDpCmeyK%2FhCHCmVmys2LPgeZ7VKVdiEMNuXe4rIojsUgFyXqNI%2BN8jhmJGQRx1tK7bhMe8z10yzpR6pmT6rHMsUN8agpVl%2FSXwG8PlpeAuRixqB6gMSmm1uhv%2FoJeXlrAyGMyFWP0O6ZFuXkBrm1yCzrhzVf7oHMs9zKvxCzW7VrZ1rrko6j6pi76kIBXIu1z6ycwoesKI0Y497JEymy0lrVcuZ%2FMMitgsAGOqUBcyTjv0XkSkYTFpCFKBsgrSSNYZIv7YtyfGnmDY1b5tRVD57zbLvWacwwGF%2F1gxIlxuvgr0%2FzHeygd5TAwq1yywcL67vzei6J6o6%2FAB0sOrff0L7Xvtsus4O1blYLsh8Zw2TbKXW9yG9%2Fz9EcFOzpdGCn6SUM0085Cj5hQ06iKZxr5oUnpmNw2kRiitx483AyUb9STg4HB3mFIGveEReSyuhVEAHQ&X-Amz-Signature=8d06f85031373ad7f31b067ed74bbab5a59a13a5bb0631faf364594bf68ca72f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLIOKCU2%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD16ODmwPBFchsdzVuiPTk35Pv2k%2FzmeILpROtQnAd%2F%2FwIgUG6Bv%2FHn2Nj9591U9SgRtMBlJw3BLqN8jm1EMpnkpRgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBRCgu1pXb9YbY06PSrcA8moKl56N%2BXbO2O%2BawUhcCsUhxzRgbNDKFPxDZdtU9N2h3YPZ%2BECFuYWRN19Qrz3TxUMG%2F5AkrpRBv1I9TI7ViNx8eBXIICjNxnH4VLpW58WcuzHzVnkgYDDLuQ%2FJnxbYk4rNYXypuX3WpXI91Ue1sdkY146t19pdIl1GNgqK5AMvTpGzjh2k0hLYF6Uxu9xEcCqJetkwrEmvdt2aTE6N3JPpRGJpuZSaSEtomc03Ix%2BRTVkmTYyIznMRNfe8n1fxgHDxEk7cuMEjFRSgbrBC%2FkjeJbRWaRGukDEUhkbffanM%2B79sF1h8ZPWm8rNJVB9ra3JCgQvNAsaKTs36%2BMQkJ2I5eJIhQBfkYAa6X418iVA61RAShdREFUb3%2BmgtyIMNXHCT2lydgp1AB28ynsSHBOQmCWj5cV2lDpCmeyK%2FhCHCmVmys2LPgeZ7VKVdiEMNuXe4rIojsUgFyXqNI%2BN8jhmJGQRx1tK7bhMe8z10yzpR6pmT6rHMsUN8agpVl%2FSXwG8PlpeAuRixqB6gMSmm1uhv%2FoJeXlrAyGMyFWP0O6ZFuXkBrm1yCzrhzVf7oHMs9zKvxCzW7VrZ1rrko6j6pi76kIBXIu1z6ycwoesKI0Y497JEymy0lrVcuZ%2FMMitgsAGOqUBcyTjv0XkSkYTFpCFKBsgrSSNYZIv7YtyfGnmDY1b5tRVD57zbLvWacwwGF%2F1gxIlxuvgr0%2FzHeygd5TAwq1yywcL67vzei6J6o6%2FAB0sOrff0L7Xvtsus4O1blYLsh8Zw2TbKXW9yG9%2Fz9EcFOzpdGCn6SUM0085Cj5hQ06iKZxr5oUnpmNw2kRiitx483AyUb9STg4HB3mFIGveEReSyuhVEAHQ&X-Amz-Signature=c703a1535a4b9b09d2d5907823da44549197abb8038158d0826b7c59b17e5cde&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLIOKCU2%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD16ODmwPBFchsdzVuiPTk35Pv2k%2FzmeILpROtQnAd%2F%2FwIgUG6Bv%2FHn2Nj9591U9SgRtMBlJw3BLqN8jm1EMpnkpRgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBRCgu1pXb9YbY06PSrcA8moKl56N%2BXbO2O%2BawUhcCsUhxzRgbNDKFPxDZdtU9N2h3YPZ%2BECFuYWRN19Qrz3TxUMG%2F5AkrpRBv1I9TI7ViNx8eBXIICjNxnH4VLpW58WcuzHzVnkgYDDLuQ%2FJnxbYk4rNYXypuX3WpXI91Ue1sdkY146t19pdIl1GNgqK5AMvTpGzjh2k0hLYF6Uxu9xEcCqJetkwrEmvdt2aTE6N3JPpRGJpuZSaSEtomc03Ix%2BRTVkmTYyIznMRNfe8n1fxgHDxEk7cuMEjFRSgbrBC%2FkjeJbRWaRGukDEUhkbffanM%2B79sF1h8ZPWm8rNJVB9ra3JCgQvNAsaKTs36%2BMQkJ2I5eJIhQBfkYAa6X418iVA61RAShdREFUb3%2BmgtyIMNXHCT2lydgp1AB28ynsSHBOQmCWj5cV2lDpCmeyK%2FhCHCmVmys2LPgeZ7VKVdiEMNuXe4rIojsUgFyXqNI%2BN8jhmJGQRx1tK7bhMe8z10yzpR6pmT6rHMsUN8agpVl%2FSXwG8PlpeAuRixqB6gMSmm1uhv%2FoJeXlrAyGMyFWP0O6ZFuXkBrm1yCzrhzVf7oHMs9zKvxCzW7VrZ1rrko6j6pi76kIBXIu1z6ycwoesKI0Y497JEymy0lrVcuZ%2FMMitgsAGOqUBcyTjv0XkSkYTFpCFKBsgrSSNYZIv7YtyfGnmDY1b5tRVD57zbLvWacwwGF%2F1gxIlxuvgr0%2FzHeygd5TAwq1yywcL67vzei6J6o6%2FAB0sOrff0L7Xvtsus4O1blYLsh8Zw2TbKXW9yG9%2Fz9EcFOzpdGCn6SUM0085Cj5hQ06iKZxr5oUnpmNw2kRiitx483AyUb9STg4HB3mFIGveEReSyuhVEAHQ&X-Amz-Signature=2a7978c8d5e0bc5a235a86ee816377c5313df6ce4f4a86715c348616c56f3ce0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLIOKCU2%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD16ODmwPBFchsdzVuiPTk35Pv2k%2FzmeILpROtQnAd%2F%2FwIgUG6Bv%2FHn2Nj9591U9SgRtMBlJw3BLqN8jm1EMpnkpRgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBRCgu1pXb9YbY06PSrcA8moKl56N%2BXbO2O%2BawUhcCsUhxzRgbNDKFPxDZdtU9N2h3YPZ%2BECFuYWRN19Qrz3TxUMG%2F5AkrpRBv1I9TI7ViNx8eBXIICjNxnH4VLpW58WcuzHzVnkgYDDLuQ%2FJnxbYk4rNYXypuX3WpXI91Ue1sdkY146t19pdIl1GNgqK5AMvTpGzjh2k0hLYF6Uxu9xEcCqJetkwrEmvdt2aTE6N3JPpRGJpuZSaSEtomc03Ix%2BRTVkmTYyIznMRNfe8n1fxgHDxEk7cuMEjFRSgbrBC%2FkjeJbRWaRGukDEUhkbffanM%2B79sF1h8ZPWm8rNJVB9ra3JCgQvNAsaKTs36%2BMQkJ2I5eJIhQBfkYAa6X418iVA61RAShdREFUb3%2BmgtyIMNXHCT2lydgp1AB28ynsSHBOQmCWj5cV2lDpCmeyK%2FhCHCmVmys2LPgeZ7VKVdiEMNuXe4rIojsUgFyXqNI%2BN8jhmJGQRx1tK7bhMe8z10yzpR6pmT6rHMsUN8agpVl%2FSXwG8PlpeAuRixqB6gMSmm1uhv%2FoJeXlrAyGMyFWP0O6ZFuXkBrm1yCzrhzVf7oHMs9zKvxCzW7VrZ1rrko6j6pi76kIBXIu1z6ycwoesKI0Y497JEymy0lrVcuZ%2FMMitgsAGOqUBcyTjv0XkSkYTFpCFKBsgrSSNYZIv7YtyfGnmDY1b5tRVD57zbLvWacwwGF%2F1gxIlxuvgr0%2FzHeygd5TAwq1yywcL67vzei6J6o6%2FAB0sOrff0L7Xvtsus4O1blYLsh8Zw2TbKXW9yG9%2Fz9EcFOzpdGCn6SUM0085Cj5hQ06iKZxr5oUnpmNw2kRiitx483AyUb9STg4HB3mFIGveEReSyuhVEAHQ&X-Amz-Signature=3812bb077f416db6d12eaba4520d8d73a15307f43c05307b04d945cdfb156808&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
