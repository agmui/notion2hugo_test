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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A2TR7UT%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTaDd3jVYDfH8lkRASbDZqKwraBFwBdcFaP3SVYvR2HwIgRS7zpyGiFvBRx0HGWAJOnT290sFwDXb8KtPcug9FkF8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDM20zYR%2BKJnB10hVyCrcAzJ70aRNzLhPJQIBjzk5p4L540jBc2XZnQnF3oTweb07StuUbfGWhxTSWFzWtKZt8%2F7iN%2BTeXKvKwiFoz64gUI7m0Eh%2B5xZU6dM%2BwN%2FpzpHh%2BK2ZpYhPqiCfoIPSaxNesV12B%2FdaHSqhbcb4EgKP4%2BTf6qV693a6%2FhwA9xxdAwnt5aJR3puyEsHZpin69UntAe4vHESgi1DPALYy0KXv8kXOc05vTP4DmXuqvOYdcO9LNapZou5lMK1XV73ANRCg6VejcM%2BvVxHueGgKrjyy%2FiqGRbytV7PbE1n57HvZJDpJ5PRVjTnaHdokfTenGPfu1dcSy%2F8tuxxXk%2B22M0E61mXozga6qSyiH0dHtXNNaEyqrcQCF2RRtIr31i1pEvnii7PGjluSufAhS7kMqPnYmkVYOMyPaZ9WW79YxYl%2FRge0byj5xjaVU94l%2FMRd2xS3frBPBgQaZlBEWEakq6ohPyzSU%2B06jPQD%2Fll1D6obavTiCL3hvfjaP%2FEq8AH6A6A3abvMSQ4eh6WBznpuE1gH66vFxftKU45aRc4BpHlPyZa8FMXvswpkArM6MhVBTfPPI7a7E3FMyUm1zb%2FJxgeZCx8cSjJUcgr4%2FhzT7bedlVkLqRLQKMAy4Xy2FVN%2BMNr3%2F78GOqUBpS3CiRacigHR3ErJ9Y8%2FeiuKiKZ5diSy7pwXYwO4it39RcaK7JAvj5%2B83Iz8Nxh0K9WIQ3Ed2uVQfigNJeq6MhJCf2DMkj0Vkbw2NlR79SaP9L%2B1SUMwB7RSqooo9UqfMnVMC6k79luGYg7uRXQVm%2FyyKqVbNyESzVnkXDFRPH22as3EKSYdgmJkZnK944fm2NdFzkiB4eWt5e3hyVliNn0p%2FI2H&X-Amz-Signature=13542d18344bcec8e47528e4a8c9633d9b26579989a530b46cc6424f32df91bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A2TR7UT%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTaDd3jVYDfH8lkRASbDZqKwraBFwBdcFaP3SVYvR2HwIgRS7zpyGiFvBRx0HGWAJOnT290sFwDXb8KtPcug9FkF8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDM20zYR%2BKJnB10hVyCrcAzJ70aRNzLhPJQIBjzk5p4L540jBc2XZnQnF3oTweb07StuUbfGWhxTSWFzWtKZt8%2F7iN%2BTeXKvKwiFoz64gUI7m0Eh%2B5xZU6dM%2BwN%2FpzpHh%2BK2ZpYhPqiCfoIPSaxNesV12B%2FdaHSqhbcb4EgKP4%2BTf6qV693a6%2FhwA9xxdAwnt5aJR3puyEsHZpin69UntAe4vHESgi1DPALYy0KXv8kXOc05vTP4DmXuqvOYdcO9LNapZou5lMK1XV73ANRCg6VejcM%2BvVxHueGgKrjyy%2FiqGRbytV7PbE1n57HvZJDpJ5PRVjTnaHdokfTenGPfu1dcSy%2F8tuxxXk%2B22M0E61mXozga6qSyiH0dHtXNNaEyqrcQCF2RRtIr31i1pEvnii7PGjluSufAhS7kMqPnYmkVYOMyPaZ9WW79YxYl%2FRge0byj5xjaVU94l%2FMRd2xS3frBPBgQaZlBEWEakq6ohPyzSU%2B06jPQD%2Fll1D6obavTiCL3hvfjaP%2FEq8AH6A6A3abvMSQ4eh6WBznpuE1gH66vFxftKU45aRc4BpHlPyZa8FMXvswpkArM6MhVBTfPPI7a7E3FMyUm1zb%2FJxgeZCx8cSjJUcgr4%2FhzT7bedlVkLqRLQKMAy4Xy2FVN%2BMNr3%2F78GOqUBpS3CiRacigHR3ErJ9Y8%2FeiuKiKZ5diSy7pwXYwO4it39RcaK7JAvj5%2B83Iz8Nxh0K9WIQ3Ed2uVQfigNJeq6MhJCf2DMkj0Vkbw2NlR79SaP9L%2B1SUMwB7RSqooo9UqfMnVMC6k79luGYg7uRXQVm%2FyyKqVbNyESzVnkXDFRPH22as3EKSYdgmJkZnK944fm2NdFzkiB4eWt5e3hyVliNn0p%2FI2H&X-Amz-Signature=86aee7e5d16aac0f422e7aff743471af7f840f51a7865ebbb1f21f0398715e09&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A2TR7UT%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTaDd3jVYDfH8lkRASbDZqKwraBFwBdcFaP3SVYvR2HwIgRS7zpyGiFvBRx0HGWAJOnT290sFwDXb8KtPcug9FkF8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDM20zYR%2BKJnB10hVyCrcAzJ70aRNzLhPJQIBjzk5p4L540jBc2XZnQnF3oTweb07StuUbfGWhxTSWFzWtKZt8%2F7iN%2BTeXKvKwiFoz64gUI7m0Eh%2B5xZU6dM%2BwN%2FpzpHh%2BK2ZpYhPqiCfoIPSaxNesV12B%2FdaHSqhbcb4EgKP4%2BTf6qV693a6%2FhwA9xxdAwnt5aJR3puyEsHZpin69UntAe4vHESgi1DPALYy0KXv8kXOc05vTP4DmXuqvOYdcO9LNapZou5lMK1XV73ANRCg6VejcM%2BvVxHueGgKrjyy%2FiqGRbytV7PbE1n57HvZJDpJ5PRVjTnaHdokfTenGPfu1dcSy%2F8tuxxXk%2B22M0E61mXozga6qSyiH0dHtXNNaEyqrcQCF2RRtIr31i1pEvnii7PGjluSufAhS7kMqPnYmkVYOMyPaZ9WW79YxYl%2FRge0byj5xjaVU94l%2FMRd2xS3frBPBgQaZlBEWEakq6ohPyzSU%2B06jPQD%2Fll1D6obavTiCL3hvfjaP%2FEq8AH6A6A3abvMSQ4eh6WBznpuE1gH66vFxftKU45aRc4BpHlPyZa8FMXvswpkArM6MhVBTfPPI7a7E3FMyUm1zb%2FJxgeZCx8cSjJUcgr4%2FhzT7bedlVkLqRLQKMAy4Xy2FVN%2BMNr3%2F78GOqUBpS3CiRacigHR3ErJ9Y8%2FeiuKiKZ5diSy7pwXYwO4it39RcaK7JAvj5%2B83Iz8Nxh0K9WIQ3Ed2uVQfigNJeq6MhJCf2DMkj0Vkbw2NlR79SaP9L%2B1SUMwB7RSqooo9UqfMnVMC6k79luGYg7uRXQVm%2FyyKqVbNyESzVnkXDFRPH22as3EKSYdgmJkZnK944fm2NdFzkiB4eWt5e3hyVliNn0p%2FI2H&X-Amz-Signature=3ed411d9a5b4db715419bdecc6595677e43868abd7026e00d82ae213808c83a6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A2TR7UT%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTaDd3jVYDfH8lkRASbDZqKwraBFwBdcFaP3SVYvR2HwIgRS7zpyGiFvBRx0HGWAJOnT290sFwDXb8KtPcug9FkF8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDM20zYR%2BKJnB10hVyCrcAzJ70aRNzLhPJQIBjzk5p4L540jBc2XZnQnF3oTweb07StuUbfGWhxTSWFzWtKZt8%2F7iN%2BTeXKvKwiFoz64gUI7m0Eh%2B5xZU6dM%2BwN%2FpzpHh%2BK2ZpYhPqiCfoIPSaxNesV12B%2FdaHSqhbcb4EgKP4%2BTf6qV693a6%2FhwA9xxdAwnt5aJR3puyEsHZpin69UntAe4vHESgi1DPALYy0KXv8kXOc05vTP4DmXuqvOYdcO9LNapZou5lMK1XV73ANRCg6VejcM%2BvVxHueGgKrjyy%2FiqGRbytV7PbE1n57HvZJDpJ5PRVjTnaHdokfTenGPfu1dcSy%2F8tuxxXk%2B22M0E61mXozga6qSyiH0dHtXNNaEyqrcQCF2RRtIr31i1pEvnii7PGjluSufAhS7kMqPnYmkVYOMyPaZ9WW79YxYl%2FRge0byj5xjaVU94l%2FMRd2xS3frBPBgQaZlBEWEakq6ohPyzSU%2B06jPQD%2Fll1D6obavTiCL3hvfjaP%2FEq8AH6A6A3abvMSQ4eh6WBznpuE1gH66vFxftKU45aRc4BpHlPyZa8FMXvswpkArM6MhVBTfPPI7a7E3FMyUm1zb%2FJxgeZCx8cSjJUcgr4%2FhzT7bedlVkLqRLQKMAy4Xy2FVN%2BMNr3%2F78GOqUBpS3CiRacigHR3ErJ9Y8%2FeiuKiKZ5diSy7pwXYwO4it39RcaK7JAvj5%2B83Iz8Nxh0K9WIQ3Ed2uVQfigNJeq6MhJCf2DMkj0Vkbw2NlR79SaP9L%2B1SUMwB7RSqooo9UqfMnVMC6k79luGYg7uRXQVm%2FyyKqVbNyESzVnkXDFRPH22as3EKSYdgmJkZnK944fm2NdFzkiB4eWt5e3hyVliNn0p%2FI2H&X-Amz-Signature=fef3583b68cae5c556b33b772d267eb26a51bfdace660d90b190b3303bc8733a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A2TR7UT%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTaDd3jVYDfH8lkRASbDZqKwraBFwBdcFaP3SVYvR2HwIgRS7zpyGiFvBRx0HGWAJOnT290sFwDXb8KtPcug9FkF8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDM20zYR%2BKJnB10hVyCrcAzJ70aRNzLhPJQIBjzk5p4L540jBc2XZnQnF3oTweb07StuUbfGWhxTSWFzWtKZt8%2F7iN%2BTeXKvKwiFoz64gUI7m0Eh%2B5xZU6dM%2BwN%2FpzpHh%2BK2ZpYhPqiCfoIPSaxNesV12B%2FdaHSqhbcb4EgKP4%2BTf6qV693a6%2FhwA9xxdAwnt5aJR3puyEsHZpin69UntAe4vHESgi1DPALYy0KXv8kXOc05vTP4DmXuqvOYdcO9LNapZou5lMK1XV73ANRCg6VejcM%2BvVxHueGgKrjyy%2FiqGRbytV7PbE1n57HvZJDpJ5PRVjTnaHdokfTenGPfu1dcSy%2F8tuxxXk%2B22M0E61mXozga6qSyiH0dHtXNNaEyqrcQCF2RRtIr31i1pEvnii7PGjluSufAhS7kMqPnYmkVYOMyPaZ9WW79YxYl%2FRge0byj5xjaVU94l%2FMRd2xS3frBPBgQaZlBEWEakq6ohPyzSU%2B06jPQD%2Fll1D6obavTiCL3hvfjaP%2FEq8AH6A6A3abvMSQ4eh6WBznpuE1gH66vFxftKU45aRc4BpHlPyZa8FMXvswpkArM6MhVBTfPPI7a7E3FMyUm1zb%2FJxgeZCx8cSjJUcgr4%2FhzT7bedlVkLqRLQKMAy4Xy2FVN%2BMNr3%2F78GOqUBpS3CiRacigHR3ErJ9Y8%2FeiuKiKZ5diSy7pwXYwO4it39RcaK7JAvj5%2B83Iz8Nxh0K9WIQ3Ed2uVQfigNJeq6MhJCf2DMkj0Vkbw2NlR79SaP9L%2B1SUMwB7RSqooo9UqfMnVMC6k79luGYg7uRXQVm%2FyyKqVbNyESzVnkXDFRPH22as3EKSYdgmJkZnK944fm2NdFzkiB4eWt5e3hyVliNn0p%2FI2H&X-Amz-Signature=0a5eecfda78c4f6dc378219d23382a74214ee451910dc6da1722f499300378e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A2TR7UT%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTaDd3jVYDfH8lkRASbDZqKwraBFwBdcFaP3SVYvR2HwIgRS7zpyGiFvBRx0HGWAJOnT290sFwDXb8KtPcug9FkF8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDM20zYR%2BKJnB10hVyCrcAzJ70aRNzLhPJQIBjzk5p4L540jBc2XZnQnF3oTweb07StuUbfGWhxTSWFzWtKZt8%2F7iN%2BTeXKvKwiFoz64gUI7m0Eh%2B5xZU6dM%2BwN%2FpzpHh%2BK2ZpYhPqiCfoIPSaxNesV12B%2FdaHSqhbcb4EgKP4%2BTf6qV693a6%2FhwA9xxdAwnt5aJR3puyEsHZpin69UntAe4vHESgi1DPALYy0KXv8kXOc05vTP4DmXuqvOYdcO9LNapZou5lMK1XV73ANRCg6VejcM%2BvVxHueGgKrjyy%2FiqGRbytV7PbE1n57HvZJDpJ5PRVjTnaHdokfTenGPfu1dcSy%2F8tuxxXk%2B22M0E61mXozga6qSyiH0dHtXNNaEyqrcQCF2RRtIr31i1pEvnii7PGjluSufAhS7kMqPnYmkVYOMyPaZ9WW79YxYl%2FRge0byj5xjaVU94l%2FMRd2xS3frBPBgQaZlBEWEakq6ohPyzSU%2B06jPQD%2Fll1D6obavTiCL3hvfjaP%2FEq8AH6A6A3abvMSQ4eh6WBznpuE1gH66vFxftKU45aRc4BpHlPyZa8FMXvswpkArM6MhVBTfPPI7a7E3FMyUm1zb%2FJxgeZCx8cSjJUcgr4%2FhzT7bedlVkLqRLQKMAy4Xy2FVN%2BMNr3%2F78GOqUBpS3CiRacigHR3ErJ9Y8%2FeiuKiKZ5diSy7pwXYwO4it39RcaK7JAvj5%2B83Iz8Nxh0K9WIQ3Ed2uVQfigNJeq6MhJCf2DMkj0Vkbw2NlR79SaP9L%2B1SUMwB7RSqooo9UqfMnVMC6k79luGYg7uRXQVm%2FyyKqVbNyESzVnkXDFRPH22as3EKSYdgmJkZnK944fm2NdFzkiB4eWt5e3hyVliNn0p%2FI2H&X-Amz-Signature=e19800ebd191b3dd1afb41bff69adcd17470c07fa3e11cee630a1d185a3fc7f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A2TR7UT%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTaDd3jVYDfH8lkRASbDZqKwraBFwBdcFaP3SVYvR2HwIgRS7zpyGiFvBRx0HGWAJOnT290sFwDXb8KtPcug9FkF8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDM20zYR%2BKJnB10hVyCrcAzJ70aRNzLhPJQIBjzk5p4L540jBc2XZnQnF3oTweb07StuUbfGWhxTSWFzWtKZt8%2F7iN%2BTeXKvKwiFoz64gUI7m0Eh%2B5xZU6dM%2BwN%2FpzpHh%2BK2ZpYhPqiCfoIPSaxNesV12B%2FdaHSqhbcb4EgKP4%2BTf6qV693a6%2FhwA9xxdAwnt5aJR3puyEsHZpin69UntAe4vHESgi1DPALYy0KXv8kXOc05vTP4DmXuqvOYdcO9LNapZou5lMK1XV73ANRCg6VejcM%2BvVxHueGgKrjyy%2FiqGRbytV7PbE1n57HvZJDpJ5PRVjTnaHdokfTenGPfu1dcSy%2F8tuxxXk%2B22M0E61mXozga6qSyiH0dHtXNNaEyqrcQCF2RRtIr31i1pEvnii7PGjluSufAhS7kMqPnYmkVYOMyPaZ9WW79YxYl%2FRge0byj5xjaVU94l%2FMRd2xS3frBPBgQaZlBEWEakq6ohPyzSU%2B06jPQD%2Fll1D6obavTiCL3hvfjaP%2FEq8AH6A6A3abvMSQ4eh6WBznpuE1gH66vFxftKU45aRc4BpHlPyZa8FMXvswpkArM6MhVBTfPPI7a7E3FMyUm1zb%2FJxgeZCx8cSjJUcgr4%2FhzT7bedlVkLqRLQKMAy4Xy2FVN%2BMNr3%2F78GOqUBpS3CiRacigHR3ErJ9Y8%2FeiuKiKZ5diSy7pwXYwO4it39RcaK7JAvj5%2B83Iz8Nxh0K9WIQ3Ed2uVQfigNJeq6MhJCf2DMkj0Vkbw2NlR79SaP9L%2B1SUMwB7RSqooo9UqfMnVMC6k79luGYg7uRXQVm%2FyyKqVbNyESzVnkXDFRPH22as3EKSYdgmJkZnK944fm2NdFzkiB4eWt5e3hyVliNn0p%2FI2H&X-Amz-Signature=9d7d5352b77b25605ea7ce21e11da395b1a0b59f1604db3cc3ca4acfbbb7e6ca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A2TR7UT%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTaDd3jVYDfH8lkRASbDZqKwraBFwBdcFaP3SVYvR2HwIgRS7zpyGiFvBRx0HGWAJOnT290sFwDXb8KtPcug9FkF8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDM20zYR%2BKJnB10hVyCrcAzJ70aRNzLhPJQIBjzk5p4L540jBc2XZnQnF3oTweb07StuUbfGWhxTSWFzWtKZt8%2F7iN%2BTeXKvKwiFoz64gUI7m0Eh%2B5xZU6dM%2BwN%2FpzpHh%2BK2ZpYhPqiCfoIPSaxNesV12B%2FdaHSqhbcb4EgKP4%2BTf6qV693a6%2FhwA9xxdAwnt5aJR3puyEsHZpin69UntAe4vHESgi1DPALYy0KXv8kXOc05vTP4DmXuqvOYdcO9LNapZou5lMK1XV73ANRCg6VejcM%2BvVxHueGgKrjyy%2FiqGRbytV7PbE1n57HvZJDpJ5PRVjTnaHdokfTenGPfu1dcSy%2F8tuxxXk%2B22M0E61mXozga6qSyiH0dHtXNNaEyqrcQCF2RRtIr31i1pEvnii7PGjluSufAhS7kMqPnYmkVYOMyPaZ9WW79YxYl%2FRge0byj5xjaVU94l%2FMRd2xS3frBPBgQaZlBEWEakq6ohPyzSU%2B06jPQD%2Fll1D6obavTiCL3hvfjaP%2FEq8AH6A6A3abvMSQ4eh6WBznpuE1gH66vFxftKU45aRc4BpHlPyZa8FMXvswpkArM6MhVBTfPPI7a7E3FMyUm1zb%2FJxgeZCx8cSjJUcgr4%2FhzT7bedlVkLqRLQKMAy4Xy2FVN%2BMNr3%2F78GOqUBpS3CiRacigHR3ErJ9Y8%2FeiuKiKZ5diSy7pwXYwO4it39RcaK7JAvj5%2B83Iz8Nxh0K9WIQ3Ed2uVQfigNJeq6MhJCf2DMkj0Vkbw2NlR79SaP9L%2B1SUMwB7RSqooo9UqfMnVMC6k79luGYg7uRXQVm%2FyyKqVbNyESzVnkXDFRPH22as3EKSYdgmJkZnK944fm2NdFzkiB4eWt5e3hyVliNn0p%2FI2H&X-Amz-Signature=48f3e10313c05ce7ac746699edd5505f52dae41b684d1ae82d32440320f88704&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
