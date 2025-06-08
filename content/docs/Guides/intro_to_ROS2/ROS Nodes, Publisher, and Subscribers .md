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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE3U6OXC%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNQPRFnCmRvTfx1mktAqfqdVDmtM0%2Fndk45rDqTm3OdAIhAPAi4vKArUMmYZ8SWDP0Jw3BkIzYYsxg%2FGlRZDnXmF8tKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiiFigvR21kd8IjjMq3AO2Ra7vi38F4c8CI2kTdaMJGpuPpdxwwvXiJWm1nAaHfuHciZdXsIQ%2BRUqvrUwCuqtzKpX2LOobFawFQ5QS8HjED9A62nieNhMMyMqcxN5dqUNTgUpr0bf5etxzZfaWuumUuMU2b3ogjwfuOHNrIFyaSG3BEoEJ2lWHi437Ms5WWRIqrz6Ojs%2B2VVE1lVTn%2BQDTYFuXHAOTKcDY7DSuE7xhkwZZ4maR70yOI2sZ2eTnkJtKvIJYhyD67FIlXR5488vWMRwA6%2Bx8VxJ%2FoiYIMEEsfdxiB47oBNAgSRROxJ2ghBpvRyNY1HksNYOq8ehEuFcr5FXl34RqjlBuiglnMaMLGEiMazBOfvayUTKROfPgmgb2m0O04ezznwUboBqHdGOwo8ts0QH0gSxw1ENuHJj%2BKOMJz2uWxui7v6yGGHkxoYaYAVOa2pRHGychWJJ9ATotIxWqt2pZb8fVvz9GmXcCsr0UpUo5xSUHiA9maHrCoQELJM0uwDMo%2FxuiJuqQklklE4ZLWpJx%2BVk2GIB7eIz9fDzFKBCEYYn0ao9YLFVywHS6U6eiJ6r8xxhuM8%2Bnv6psYGmXoM3Q3%2B5%2BPXjV67yaQ7xKWrYAFv2lqJz2Y1DkOauND7LpNSOgto2LFDDanpbCBjqkAagCgsx8%2By0SiuGZBZnrHs5vqGmkPhN5%2F1zmEUZ84WsW3dXUleUNlkYr9dNRbUwXHcdSlrtkTJjDmHru4i6zs1PsJ4Vg54v96O%2F4LX%2FZ9HzQr2Mxi%2FIQUABVFLvrhWQ33iXCZbR9%2Ble7b1dcU%2Fsm2VSWHporceQBrdd9pgyw211XwUiBjLrFGOLtNHE1vw8utsAWcm%2FVYh9XCrCFofC2xHskuELe&X-Amz-Signature=25dd5a54f7623f46186d1d247952b6c136e674ea33afc6c1f34eda87edcfd11b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE3U6OXC%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNQPRFnCmRvTfx1mktAqfqdVDmtM0%2Fndk45rDqTm3OdAIhAPAi4vKArUMmYZ8SWDP0Jw3BkIzYYsxg%2FGlRZDnXmF8tKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiiFigvR21kd8IjjMq3AO2Ra7vi38F4c8CI2kTdaMJGpuPpdxwwvXiJWm1nAaHfuHciZdXsIQ%2BRUqvrUwCuqtzKpX2LOobFawFQ5QS8HjED9A62nieNhMMyMqcxN5dqUNTgUpr0bf5etxzZfaWuumUuMU2b3ogjwfuOHNrIFyaSG3BEoEJ2lWHi437Ms5WWRIqrz6Ojs%2B2VVE1lVTn%2BQDTYFuXHAOTKcDY7DSuE7xhkwZZ4maR70yOI2sZ2eTnkJtKvIJYhyD67FIlXR5488vWMRwA6%2Bx8VxJ%2FoiYIMEEsfdxiB47oBNAgSRROxJ2ghBpvRyNY1HksNYOq8ehEuFcr5FXl34RqjlBuiglnMaMLGEiMazBOfvayUTKROfPgmgb2m0O04ezznwUboBqHdGOwo8ts0QH0gSxw1ENuHJj%2BKOMJz2uWxui7v6yGGHkxoYaYAVOa2pRHGychWJJ9ATotIxWqt2pZb8fVvz9GmXcCsr0UpUo5xSUHiA9maHrCoQELJM0uwDMo%2FxuiJuqQklklE4ZLWpJx%2BVk2GIB7eIz9fDzFKBCEYYn0ao9YLFVywHS6U6eiJ6r8xxhuM8%2Bnv6psYGmXoM3Q3%2B5%2BPXjV67yaQ7xKWrYAFv2lqJz2Y1DkOauND7LpNSOgto2LFDDanpbCBjqkAagCgsx8%2By0SiuGZBZnrHs5vqGmkPhN5%2F1zmEUZ84WsW3dXUleUNlkYr9dNRbUwXHcdSlrtkTJjDmHru4i6zs1PsJ4Vg54v96O%2F4LX%2FZ9HzQr2Mxi%2FIQUABVFLvrhWQ33iXCZbR9%2Ble7b1dcU%2Fsm2VSWHporceQBrdd9pgyw211XwUiBjLrFGOLtNHE1vw8utsAWcm%2FVYh9XCrCFofC2xHskuELe&X-Amz-Signature=e2cceae8ad9bbffbdb12df67d0b4b1170eee290ac3f0d6eddacba4c317343bf0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE3U6OXC%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNQPRFnCmRvTfx1mktAqfqdVDmtM0%2Fndk45rDqTm3OdAIhAPAi4vKArUMmYZ8SWDP0Jw3BkIzYYsxg%2FGlRZDnXmF8tKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiiFigvR21kd8IjjMq3AO2Ra7vi38F4c8CI2kTdaMJGpuPpdxwwvXiJWm1nAaHfuHciZdXsIQ%2BRUqvrUwCuqtzKpX2LOobFawFQ5QS8HjED9A62nieNhMMyMqcxN5dqUNTgUpr0bf5etxzZfaWuumUuMU2b3ogjwfuOHNrIFyaSG3BEoEJ2lWHi437Ms5WWRIqrz6Ojs%2B2VVE1lVTn%2BQDTYFuXHAOTKcDY7DSuE7xhkwZZ4maR70yOI2sZ2eTnkJtKvIJYhyD67FIlXR5488vWMRwA6%2Bx8VxJ%2FoiYIMEEsfdxiB47oBNAgSRROxJ2ghBpvRyNY1HksNYOq8ehEuFcr5FXl34RqjlBuiglnMaMLGEiMazBOfvayUTKROfPgmgb2m0O04ezznwUboBqHdGOwo8ts0QH0gSxw1ENuHJj%2BKOMJz2uWxui7v6yGGHkxoYaYAVOa2pRHGychWJJ9ATotIxWqt2pZb8fVvz9GmXcCsr0UpUo5xSUHiA9maHrCoQELJM0uwDMo%2FxuiJuqQklklE4ZLWpJx%2BVk2GIB7eIz9fDzFKBCEYYn0ao9YLFVywHS6U6eiJ6r8xxhuM8%2Bnv6psYGmXoM3Q3%2B5%2BPXjV67yaQ7xKWrYAFv2lqJz2Y1DkOauND7LpNSOgto2LFDDanpbCBjqkAagCgsx8%2By0SiuGZBZnrHs5vqGmkPhN5%2F1zmEUZ84WsW3dXUleUNlkYr9dNRbUwXHcdSlrtkTJjDmHru4i6zs1PsJ4Vg54v96O%2F4LX%2FZ9HzQr2Mxi%2FIQUABVFLvrhWQ33iXCZbR9%2Ble7b1dcU%2Fsm2VSWHporceQBrdd9pgyw211XwUiBjLrFGOLtNHE1vw8utsAWcm%2FVYh9XCrCFofC2xHskuELe&X-Amz-Signature=b213036bbe0b3d794e5e967b4487b1d22e338c2f6e2c5f229ba99fe99bfce362&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE3U6OXC%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNQPRFnCmRvTfx1mktAqfqdVDmtM0%2Fndk45rDqTm3OdAIhAPAi4vKArUMmYZ8SWDP0Jw3BkIzYYsxg%2FGlRZDnXmF8tKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiiFigvR21kd8IjjMq3AO2Ra7vi38F4c8CI2kTdaMJGpuPpdxwwvXiJWm1nAaHfuHciZdXsIQ%2BRUqvrUwCuqtzKpX2LOobFawFQ5QS8HjED9A62nieNhMMyMqcxN5dqUNTgUpr0bf5etxzZfaWuumUuMU2b3ogjwfuOHNrIFyaSG3BEoEJ2lWHi437Ms5WWRIqrz6Ojs%2B2VVE1lVTn%2BQDTYFuXHAOTKcDY7DSuE7xhkwZZ4maR70yOI2sZ2eTnkJtKvIJYhyD67FIlXR5488vWMRwA6%2Bx8VxJ%2FoiYIMEEsfdxiB47oBNAgSRROxJ2ghBpvRyNY1HksNYOq8ehEuFcr5FXl34RqjlBuiglnMaMLGEiMazBOfvayUTKROfPgmgb2m0O04ezznwUboBqHdGOwo8ts0QH0gSxw1ENuHJj%2BKOMJz2uWxui7v6yGGHkxoYaYAVOa2pRHGychWJJ9ATotIxWqt2pZb8fVvz9GmXcCsr0UpUo5xSUHiA9maHrCoQELJM0uwDMo%2FxuiJuqQklklE4ZLWpJx%2BVk2GIB7eIz9fDzFKBCEYYn0ao9YLFVywHS6U6eiJ6r8xxhuM8%2Bnv6psYGmXoM3Q3%2B5%2BPXjV67yaQ7xKWrYAFv2lqJz2Y1DkOauND7LpNSOgto2LFDDanpbCBjqkAagCgsx8%2By0SiuGZBZnrHs5vqGmkPhN5%2F1zmEUZ84WsW3dXUleUNlkYr9dNRbUwXHcdSlrtkTJjDmHru4i6zs1PsJ4Vg54v96O%2F4LX%2FZ9HzQr2Mxi%2FIQUABVFLvrhWQ33iXCZbR9%2Ble7b1dcU%2Fsm2VSWHporceQBrdd9pgyw211XwUiBjLrFGOLtNHE1vw8utsAWcm%2FVYh9XCrCFofC2xHskuELe&X-Amz-Signature=7e5a93c5646a020f20f5a286c86ca5ad4e76ef0d369e587b0b1fe728afcc41c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE3U6OXC%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNQPRFnCmRvTfx1mktAqfqdVDmtM0%2Fndk45rDqTm3OdAIhAPAi4vKArUMmYZ8SWDP0Jw3BkIzYYsxg%2FGlRZDnXmF8tKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiiFigvR21kd8IjjMq3AO2Ra7vi38F4c8CI2kTdaMJGpuPpdxwwvXiJWm1nAaHfuHciZdXsIQ%2BRUqvrUwCuqtzKpX2LOobFawFQ5QS8HjED9A62nieNhMMyMqcxN5dqUNTgUpr0bf5etxzZfaWuumUuMU2b3ogjwfuOHNrIFyaSG3BEoEJ2lWHi437Ms5WWRIqrz6Ojs%2B2VVE1lVTn%2BQDTYFuXHAOTKcDY7DSuE7xhkwZZ4maR70yOI2sZ2eTnkJtKvIJYhyD67FIlXR5488vWMRwA6%2Bx8VxJ%2FoiYIMEEsfdxiB47oBNAgSRROxJ2ghBpvRyNY1HksNYOq8ehEuFcr5FXl34RqjlBuiglnMaMLGEiMazBOfvayUTKROfPgmgb2m0O04ezznwUboBqHdGOwo8ts0QH0gSxw1ENuHJj%2BKOMJz2uWxui7v6yGGHkxoYaYAVOa2pRHGychWJJ9ATotIxWqt2pZb8fVvz9GmXcCsr0UpUo5xSUHiA9maHrCoQELJM0uwDMo%2FxuiJuqQklklE4ZLWpJx%2BVk2GIB7eIz9fDzFKBCEYYn0ao9YLFVywHS6U6eiJ6r8xxhuM8%2Bnv6psYGmXoM3Q3%2B5%2BPXjV67yaQ7xKWrYAFv2lqJz2Y1DkOauND7LpNSOgto2LFDDanpbCBjqkAagCgsx8%2By0SiuGZBZnrHs5vqGmkPhN5%2F1zmEUZ84WsW3dXUleUNlkYr9dNRbUwXHcdSlrtkTJjDmHru4i6zs1PsJ4Vg54v96O%2F4LX%2FZ9HzQr2Mxi%2FIQUABVFLvrhWQ33iXCZbR9%2Ble7b1dcU%2Fsm2VSWHporceQBrdd9pgyw211XwUiBjLrFGOLtNHE1vw8utsAWcm%2FVYh9XCrCFofC2xHskuELe&X-Amz-Signature=34f5664cdf2b94da209413a7e108209528d93f5ebcff430cf078279cf292126d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE3U6OXC%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNQPRFnCmRvTfx1mktAqfqdVDmtM0%2Fndk45rDqTm3OdAIhAPAi4vKArUMmYZ8SWDP0Jw3BkIzYYsxg%2FGlRZDnXmF8tKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiiFigvR21kd8IjjMq3AO2Ra7vi38F4c8CI2kTdaMJGpuPpdxwwvXiJWm1nAaHfuHciZdXsIQ%2BRUqvrUwCuqtzKpX2LOobFawFQ5QS8HjED9A62nieNhMMyMqcxN5dqUNTgUpr0bf5etxzZfaWuumUuMU2b3ogjwfuOHNrIFyaSG3BEoEJ2lWHi437Ms5WWRIqrz6Ojs%2B2VVE1lVTn%2BQDTYFuXHAOTKcDY7DSuE7xhkwZZ4maR70yOI2sZ2eTnkJtKvIJYhyD67FIlXR5488vWMRwA6%2Bx8VxJ%2FoiYIMEEsfdxiB47oBNAgSRROxJ2ghBpvRyNY1HksNYOq8ehEuFcr5FXl34RqjlBuiglnMaMLGEiMazBOfvayUTKROfPgmgb2m0O04ezznwUboBqHdGOwo8ts0QH0gSxw1ENuHJj%2BKOMJz2uWxui7v6yGGHkxoYaYAVOa2pRHGychWJJ9ATotIxWqt2pZb8fVvz9GmXcCsr0UpUo5xSUHiA9maHrCoQELJM0uwDMo%2FxuiJuqQklklE4ZLWpJx%2BVk2GIB7eIz9fDzFKBCEYYn0ao9YLFVywHS6U6eiJ6r8xxhuM8%2Bnv6psYGmXoM3Q3%2B5%2BPXjV67yaQ7xKWrYAFv2lqJz2Y1DkOauND7LpNSOgto2LFDDanpbCBjqkAagCgsx8%2By0SiuGZBZnrHs5vqGmkPhN5%2F1zmEUZ84WsW3dXUleUNlkYr9dNRbUwXHcdSlrtkTJjDmHru4i6zs1PsJ4Vg54v96O%2F4LX%2FZ9HzQr2Mxi%2FIQUABVFLvrhWQ33iXCZbR9%2Ble7b1dcU%2Fsm2VSWHporceQBrdd9pgyw211XwUiBjLrFGOLtNHE1vw8utsAWcm%2FVYh9XCrCFofC2xHskuELe&X-Amz-Signature=bf4f2720f572e889e39cfa17af2bd4314767f5aca5f5a0798267e01739844f4c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE3U6OXC%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNQPRFnCmRvTfx1mktAqfqdVDmtM0%2Fndk45rDqTm3OdAIhAPAi4vKArUMmYZ8SWDP0Jw3BkIzYYsxg%2FGlRZDnXmF8tKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiiFigvR21kd8IjjMq3AO2Ra7vi38F4c8CI2kTdaMJGpuPpdxwwvXiJWm1nAaHfuHciZdXsIQ%2BRUqvrUwCuqtzKpX2LOobFawFQ5QS8HjED9A62nieNhMMyMqcxN5dqUNTgUpr0bf5etxzZfaWuumUuMU2b3ogjwfuOHNrIFyaSG3BEoEJ2lWHi437Ms5WWRIqrz6Ojs%2B2VVE1lVTn%2BQDTYFuXHAOTKcDY7DSuE7xhkwZZ4maR70yOI2sZ2eTnkJtKvIJYhyD67FIlXR5488vWMRwA6%2Bx8VxJ%2FoiYIMEEsfdxiB47oBNAgSRROxJ2ghBpvRyNY1HksNYOq8ehEuFcr5FXl34RqjlBuiglnMaMLGEiMazBOfvayUTKROfPgmgb2m0O04ezznwUboBqHdGOwo8ts0QH0gSxw1ENuHJj%2BKOMJz2uWxui7v6yGGHkxoYaYAVOa2pRHGychWJJ9ATotIxWqt2pZb8fVvz9GmXcCsr0UpUo5xSUHiA9maHrCoQELJM0uwDMo%2FxuiJuqQklklE4ZLWpJx%2BVk2GIB7eIz9fDzFKBCEYYn0ao9YLFVywHS6U6eiJ6r8xxhuM8%2Bnv6psYGmXoM3Q3%2B5%2BPXjV67yaQ7xKWrYAFv2lqJz2Y1DkOauND7LpNSOgto2LFDDanpbCBjqkAagCgsx8%2By0SiuGZBZnrHs5vqGmkPhN5%2F1zmEUZ84WsW3dXUleUNlkYr9dNRbUwXHcdSlrtkTJjDmHru4i6zs1PsJ4Vg54v96O%2F4LX%2FZ9HzQr2Mxi%2FIQUABVFLvrhWQ33iXCZbR9%2Ble7b1dcU%2Fsm2VSWHporceQBrdd9pgyw211XwUiBjLrFGOLtNHE1vw8utsAWcm%2FVYh9XCrCFofC2xHskuELe&X-Amz-Signature=a29af44eb2e227945b2e9ea5e720d05e9e4d5ba9e91bd42743f8e001a22c9e64&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE3U6OXC%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNQPRFnCmRvTfx1mktAqfqdVDmtM0%2Fndk45rDqTm3OdAIhAPAi4vKArUMmYZ8SWDP0Jw3BkIzYYsxg%2FGlRZDnXmF8tKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiiFigvR21kd8IjjMq3AO2Ra7vi38F4c8CI2kTdaMJGpuPpdxwwvXiJWm1nAaHfuHciZdXsIQ%2BRUqvrUwCuqtzKpX2LOobFawFQ5QS8HjED9A62nieNhMMyMqcxN5dqUNTgUpr0bf5etxzZfaWuumUuMU2b3ogjwfuOHNrIFyaSG3BEoEJ2lWHi437Ms5WWRIqrz6Ojs%2B2VVE1lVTn%2BQDTYFuXHAOTKcDY7DSuE7xhkwZZ4maR70yOI2sZ2eTnkJtKvIJYhyD67FIlXR5488vWMRwA6%2Bx8VxJ%2FoiYIMEEsfdxiB47oBNAgSRROxJ2ghBpvRyNY1HksNYOq8ehEuFcr5FXl34RqjlBuiglnMaMLGEiMazBOfvayUTKROfPgmgb2m0O04ezznwUboBqHdGOwo8ts0QH0gSxw1ENuHJj%2BKOMJz2uWxui7v6yGGHkxoYaYAVOa2pRHGychWJJ9ATotIxWqt2pZb8fVvz9GmXcCsr0UpUo5xSUHiA9maHrCoQELJM0uwDMo%2FxuiJuqQklklE4ZLWpJx%2BVk2GIB7eIz9fDzFKBCEYYn0ao9YLFVywHS6U6eiJ6r8xxhuM8%2Bnv6psYGmXoM3Q3%2B5%2BPXjV67yaQ7xKWrYAFv2lqJz2Y1DkOauND7LpNSOgto2LFDDanpbCBjqkAagCgsx8%2By0SiuGZBZnrHs5vqGmkPhN5%2F1zmEUZ84WsW3dXUleUNlkYr9dNRbUwXHcdSlrtkTJjDmHru4i6zs1PsJ4Vg54v96O%2F4LX%2FZ9HzQr2Mxi%2FIQUABVFLvrhWQ33iXCZbR9%2Ble7b1dcU%2Fsm2VSWHporceQBrdd9pgyw211XwUiBjLrFGOLtNHE1vw8utsAWcm%2FVYh9XCrCFofC2xHskuELe&X-Amz-Signature=5b6dcc836545cca727643a9731db6d724e0ef5fece1e496f188bc74023c2de5e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
