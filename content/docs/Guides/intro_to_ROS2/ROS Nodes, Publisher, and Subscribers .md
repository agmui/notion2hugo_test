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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLYQI2M%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIAENxuV56sKfHXB%2BqxxY2%2FoAS%2FwWmwL%2FvN2EvnHXGxgEAiEAv6eTrXecEWZoDKCIQxftdIGZWGgM9godFDsc0za7xksq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIWBP3IuhsZ26ZDWaCrcA1n2%2Bd5QMLzEF7V6TBPCJqRrq6isfFP6CnrvArE%2BC3spVVZj4i2GY32%2FT7OoFDx2CiIelYsPTyfvDq8%2BJOWuHwPPpuOnSG9jXhahWx3RDadt59c4grjGVGv8HG9YMmRM%2BTVmZdcur2HWSgVDttCFDshNF336MLFFYy5XleXAb94C3mVLXw97V%2BMZH3cIYpkSckxqLdJLrLziHP%2BBOShJMi3F0d4fTkAL1Uky345WVf40HytC%2FWgZCTbh0rvma5FYjXVPCMBmB6qyXZTRDE3XcJEZmzYTqUQymCnt3HB6g3m3tD4uTNcGWC10hwL%2FDI9M3%2FUXAFey%2FRgNxGZM32CmCOzt5ktaGaN%2FhV6w163%2FXrbLHo%2BY7kbRkVCm%2Bo%2B%2FJhD7na8Ihr52xILoWd86dOuJlM5pulcHDovT%2B%2Blt41ejTOBFG11hNiWqMBjG90Niqg8IR3Rap2EUosZ4WLlVYnJlHYur1%2BajR0PXcOIMLbfneOe01A205oSfgop5xGVogLI5bzRG9IBSc3bLw3fqRV7YocR4ipE8ujtMmDd8E8SDI5r%2BKryITr6Dzw18ukIHB4VgumnVlSHVik8MLv9tcUc2iuZHQGA3fVK5AjG48rcdDXPey3iI22dXqLEK1WX6MNXsn8MGOqUBMkIJQAjZnkcbTxdbHyv3XQrzepxzOeYQoT1Fz9%2FETgdOYhBlJA5WalIaVhHl3z%2FioJPYncJVNnT0US6suFFjyI43mpIcjoTediFspiR6EUhhV%2BVzZJYU8bNCSenVV36fDriyTDo2TNiAr9G9Tl7k48w3lODb4FVBxLJkm2FoEVJrGkI6mUBVinGhcIw1E%2FOwhbysXPls9%2FDxxmZG1wygtI6%2FEY%2Bi&X-Amz-Signature=b1e63760938e83b50ad16666c8da0b9ee52c2e78f651acac068454174ba7195a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLYQI2M%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIAENxuV56sKfHXB%2BqxxY2%2FoAS%2FwWmwL%2FvN2EvnHXGxgEAiEAv6eTrXecEWZoDKCIQxftdIGZWGgM9godFDsc0za7xksq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIWBP3IuhsZ26ZDWaCrcA1n2%2Bd5QMLzEF7V6TBPCJqRrq6isfFP6CnrvArE%2BC3spVVZj4i2GY32%2FT7OoFDx2CiIelYsPTyfvDq8%2BJOWuHwPPpuOnSG9jXhahWx3RDadt59c4grjGVGv8HG9YMmRM%2BTVmZdcur2HWSgVDttCFDshNF336MLFFYy5XleXAb94C3mVLXw97V%2BMZH3cIYpkSckxqLdJLrLziHP%2BBOShJMi3F0d4fTkAL1Uky345WVf40HytC%2FWgZCTbh0rvma5FYjXVPCMBmB6qyXZTRDE3XcJEZmzYTqUQymCnt3HB6g3m3tD4uTNcGWC10hwL%2FDI9M3%2FUXAFey%2FRgNxGZM32CmCOzt5ktaGaN%2FhV6w163%2FXrbLHo%2BY7kbRkVCm%2Bo%2B%2FJhD7na8Ihr52xILoWd86dOuJlM5pulcHDovT%2B%2Blt41ejTOBFG11hNiWqMBjG90Niqg8IR3Rap2EUosZ4WLlVYnJlHYur1%2BajR0PXcOIMLbfneOe01A205oSfgop5xGVogLI5bzRG9IBSc3bLw3fqRV7YocR4ipE8ujtMmDd8E8SDI5r%2BKryITr6Dzw18ukIHB4VgumnVlSHVik8MLv9tcUc2iuZHQGA3fVK5AjG48rcdDXPey3iI22dXqLEK1WX6MNXsn8MGOqUBMkIJQAjZnkcbTxdbHyv3XQrzepxzOeYQoT1Fz9%2FETgdOYhBlJA5WalIaVhHl3z%2FioJPYncJVNnT0US6suFFjyI43mpIcjoTediFspiR6EUhhV%2BVzZJYU8bNCSenVV36fDriyTDo2TNiAr9G9Tl7k48w3lODb4FVBxLJkm2FoEVJrGkI6mUBVinGhcIw1E%2FOwhbysXPls9%2FDxxmZG1wygtI6%2FEY%2Bi&X-Amz-Signature=c89f45b82c72583d709529dc8fc8900328108ad0185b4bbb866e2955e3357528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLYQI2M%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIAENxuV56sKfHXB%2BqxxY2%2FoAS%2FwWmwL%2FvN2EvnHXGxgEAiEAv6eTrXecEWZoDKCIQxftdIGZWGgM9godFDsc0za7xksq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIWBP3IuhsZ26ZDWaCrcA1n2%2Bd5QMLzEF7V6TBPCJqRrq6isfFP6CnrvArE%2BC3spVVZj4i2GY32%2FT7OoFDx2CiIelYsPTyfvDq8%2BJOWuHwPPpuOnSG9jXhahWx3RDadt59c4grjGVGv8HG9YMmRM%2BTVmZdcur2HWSgVDttCFDshNF336MLFFYy5XleXAb94C3mVLXw97V%2BMZH3cIYpkSckxqLdJLrLziHP%2BBOShJMi3F0d4fTkAL1Uky345WVf40HytC%2FWgZCTbh0rvma5FYjXVPCMBmB6qyXZTRDE3XcJEZmzYTqUQymCnt3HB6g3m3tD4uTNcGWC10hwL%2FDI9M3%2FUXAFey%2FRgNxGZM32CmCOzt5ktaGaN%2FhV6w163%2FXrbLHo%2BY7kbRkVCm%2Bo%2B%2FJhD7na8Ihr52xILoWd86dOuJlM5pulcHDovT%2B%2Blt41ejTOBFG11hNiWqMBjG90Niqg8IR3Rap2EUosZ4WLlVYnJlHYur1%2BajR0PXcOIMLbfneOe01A205oSfgop5xGVogLI5bzRG9IBSc3bLw3fqRV7YocR4ipE8ujtMmDd8E8SDI5r%2BKryITr6Dzw18ukIHB4VgumnVlSHVik8MLv9tcUc2iuZHQGA3fVK5AjG48rcdDXPey3iI22dXqLEK1WX6MNXsn8MGOqUBMkIJQAjZnkcbTxdbHyv3XQrzepxzOeYQoT1Fz9%2FETgdOYhBlJA5WalIaVhHl3z%2FioJPYncJVNnT0US6suFFjyI43mpIcjoTediFspiR6EUhhV%2BVzZJYU8bNCSenVV36fDriyTDo2TNiAr9G9Tl7k48w3lODb4FVBxLJkm2FoEVJrGkI6mUBVinGhcIw1E%2FOwhbysXPls9%2FDxxmZG1wygtI6%2FEY%2Bi&X-Amz-Signature=afea7c0a40fbce9674e07500d0ed7d0eadc08c11e0b6da59833d36557d95ede1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLYQI2M%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIAENxuV56sKfHXB%2BqxxY2%2FoAS%2FwWmwL%2FvN2EvnHXGxgEAiEAv6eTrXecEWZoDKCIQxftdIGZWGgM9godFDsc0za7xksq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIWBP3IuhsZ26ZDWaCrcA1n2%2Bd5QMLzEF7V6TBPCJqRrq6isfFP6CnrvArE%2BC3spVVZj4i2GY32%2FT7OoFDx2CiIelYsPTyfvDq8%2BJOWuHwPPpuOnSG9jXhahWx3RDadt59c4grjGVGv8HG9YMmRM%2BTVmZdcur2HWSgVDttCFDshNF336MLFFYy5XleXAb94C3mVLXw97V%2BMZH3cIYpkSckxqLdJLrLziHP%2BBOShJMi3F0d4fTkAL1Uky345WVf40HytC%2FWgZCTbh0rvma5FYjXVPCMBmB6qyXZTRDE3XcJEZmzYTqUQymCnt3HB6g3m3tD4uTNcGWC10hwL%2FDI9M3%2FUXAFey%2FRgNxGZM32CmCOzt5ktaGaN%2FhV6w163%2FXrbLHo%2BY7kbRkVCm%2Bo%2B%2FJhD7na8Ihr52xILoWd86dOuJlM5pulcHDovT%2B%2Blt41ejTOBFG11hNiWqMBjG90Niqg8IR3Rap2EUosZ4WLlVYnJlHYur1%2BajR0PXcOIMLbfneOe01A205oSfgop5xGVogLI5bzRG9IBSc3bLw3fqRV7YocR4ipE8ujtMmDd8E8SDI5r%2BKryITr6Dzw18ukIHB4VgumnVlSHVik8MLv9tcUc2iuZHQGA3fVK5AjG48rcdDXPey3iI22dXqLEK1WX6MNXsn8MGOqUBMkIJQAjZnkcbTxdbHyv3XQrzepxzOeYQoT1Fz9%2FETgdOYhBlJA5WalIaVhHl3z%2FioJPYncJVNnT0US6suFFjyI43mpIcjoTediFspiR6EUhhV%2BVzZJYU8bNCSenVV36fDriyTDo2TNiAr9G9Tl7k48w3lODb4FVBxLJkm2FoEVJrGkI6mUBVinGhcIw1E%2FOwhbysXPls9%2FDxxmZG1wygtI6%2FEY%2Bi&X-Amz-Signature=876085f32ca9523879769c00970afd32d540eca986ec2809da8d31cc8fb485ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLYQI2M%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIAENxuV56sKfHXB%2BqxxY2%2FoAS%2FwWmwL%2FvN2EvnHXGxgEAiEAv6eTrXecEWZoDKCIQxftdIGZWGgM9godFDsc0za7xksq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIWBP3IuhsZ26ZDWaCrcA1n2%2Bd5QMLzEF7V6TBPCJqRrq6isfFP6CnrvArE%2BC3spVVZj4i2GY32%2FT7OoFDx2CiIelYsPTyfvDq8%2BJOWuHwPPpuOnSG9jXhahWx3RDadt59c4grjGVGv8HG9YMmRM%2BTVmZdcur2HWSgVDttCFDshNF336MLFFYy5XleXAb94C3mVLXw97V%2BMZH3cIYpkSckxqLdJLrLziHP%2BBOShJMi3F0d4fTkAL1Uky345WVf40HytC%2FWgZCTbh0rvma5FYjXVPCMBmB6qyXZTRDE3XcJEZmzYTqUQymCnt3HB6g3m3tD4uTNcGWC10hwL%2FDI9M3%2FUXAFey%2FRgNxGZM32CmCOzt5ktaGaN%2FhV6w163%2FXrbLHo%2BY7kbRkVCm%2Bo%2B%2FJhD7na8Ihr52xILoWd86dOuJlM5pulcHDovT%2B%2Blt41ejTOBFG11hNiWqMBjG90Niqg8IR3Rap2EUosZ4WLlVYnJlHYur1%2BajR0PXcOIMLbfneOe01A205oSfgop5xGVogLI5bzRG9IBSc3bLw3fqRV7YocR4ipE8ujtMmDd8E8SDI5r%2BKryITr6Dzw18ukIHB4VgumnVlSHVik8MLv9tcUc2iuZHQGA3fVK5AjG48rcdDXPey3iI22dXqLEK1WX6MNXsn8MGOqUBMkIJQAjZnkcbTxdbHyv3XQrzepxzOeYQoT1Fz9%2FETgdOYhBlJA5WalIaVhHl3z%2FioJPYncJVNnT0US6suFFjyI43mpIcjoTediFspiR6EUhhV%2BVzZJYU8bNCSenVV36fDriyTDo2TNiAr9G9Tl7k48w3lODb4FVBxLJkm2FoEVJrGkI6mUBVinGhcIw1E%2FOwhbysXPls9%2FDxxmZG1wygtI6%2FEY%2Bi&X-Amz-Signature=830afe60c0ba0fcd37ad5de4a635c0fbb754cf64a4a97383b053e6a369fba220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLYQI2M%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIAENxuV56sKfHXB%2BqxxY2%2FoAS%2FwWmwL%2FvN2EvnHXGxgEAiEAv6eTrXecEWZoDKCIQxftdIGZWGgM9godFDsc0za7xksq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIWBP3IuhsZ26ZDWaCrcA1n2%2Bd5QMLzEF7V6TBPCJqRrq6isfFP6CnrvArE%2BC3spVVZj4i2GY32%2FT7OoFDx2CiIelYsPTyfvDq8%2BJOWuHwPPpuOnSG9jXhahWx3RDadt59c4grjGVGv8HG9YMmRM%2BTVmZdcur2HWSgVDttCFDshNF336MLFFYy5XleXAb94C3mVLXw97V%2BMZH3cIYpkSckxqLdJLrLziHP%2BBOShJMi3F0d4fTkAL1Uky345WVf40HytC%2FWgZCTbh0rvma5FYjXVPCMBmB6qyXZTRDE3XcJEZmzYTqUQymCnt3HB6g3m3tD4uTNcGWC10hwL%2FDI9M3%2FUXAFey%2FRgNxGZM32CmCOzt5ktaGaN%2FhV6w163%2FXrbLHo%2BY7kbRkVCm%2Bo%2B%2FJhD7na8Ihr52xILoWd86dOuJlM5pulcHDovT%2B%2Blt41ejTOBFG11hNiWqMBjG90Niqg8IR3Rap2EUosZ4WLlVYnJlHYur1%2BajR0PXcOIMLbfneOe01A205oSfgop5xGVogLI5bzRG9IBSc3bLw3fqRV7YocR4ipE8ujtMmDd8E8SDI5r%2BKryITr6Dzw18ukIHB4VgumnVlSHVik8MLv9tcUc2iuZHQGA3fVK5AjG48rcdDXPey3iI22dXqLEK1WX6MNXsn8MGOqUBMkIJQAjZnkcbTxdbHyv3XQrzepxzOeYQoT1Fz9%2FETgdOYhBlJA5WalIaVhHl3z%2FioJPYncJVNnT0US6suFFjyI43mpIcjoTediFspiR6EUhhV%2BVzZJYU8bNCSenVV36fDriyTDo2TNiAr9G9Tl7k48w3lODb4FVBxLJkm2FoEVJrGkI6mUBVinGhcIw1E%2FOwhbysXPls9%2FDxxmZG1wygtI6%2FEY%2Bi&X-Amz-Signature=50718a99433a40e38eed9b0c2a616dcd536a3b3b4ebfb203c887a3f272fdf28a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLYQI2M%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIAENxuV56sKfHXB%2BqxxY2%2FoAS%2FwWmwL%2FvN2EvnHXGxgEAiEAv6eTrXecEWZoDKCIQxftdIGZWGgM9godFDsc0za7xksq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIWBP3IuhsZ26ZDWaCrcA1n2%2Bd5QMLzEF7V6TBPCJqRrq6isfFP6CnrvArE%2BC3spVVZj4i2GY32%2FT7OoFDx2CiIelYsPTyfvDq8%2BJOWuHwPPpuOnSG9jXhahWx3RDadt59c4grjGVGv8HG9YMmRM%2BTVmZdcur2HWSgVDttCFDshNF336MLFFYy5XleXAb94C3mVLXw97V%2BMZH3cIYpkSckxqLdJLrLziHP%2BBOShJMi3F0d4fTkAL1Uky345WVf40HytC%2FWgZCTbh0rvma5FYjXVPCMBmB6qyXZTRDE3XcJEZmzYTqUQymCnt3HB6g3m3tD4uTNcGWC10hwL%2FDI9M3%2FUXAFey%2FRgNxGZM32CmCOzt5ktaGaN%2FhV6w163%2FXrbLHo%2BY7kbRkVCm%2Bo%2B%2FJhD7na8Ihr52xILoWd86dOuJlM5pulcHDovT%2B%2Blt41ejTOBFG11hNiWqMBjG90Niqg8IR3Rap2EUosZ4WLlVYnJlHYur1%2BajR0PXcOIMLbfneOe01A205oSfgop5xGVogLI5bzRG9IBSc3bLw3fqRV7YocR4ipE8ujtMmDd8E8SDI5r%2BKryITr6Dzw18ukIHB4VgumnVlSHVik8MLv9tcUc2iuZHQGA3fVK5AjG48rcdDXPey3iI22dXqLEK1WX6MNXsn8MGOqUBMkIJQAjZnkcbTxdbHyv3XQrzepxzOeYQoT1Fz9%2FETgdOYhBlJA5WalIaVhHl3z%2FioJPYncJVNnT0US6suFFjyI43mpIcjoTediFspiR6EUhhV%2BVzZJYU8bNCSenVV36fDriyTDo2TNiAr9G9Tl7k48w3lODb4FVBxLJkm2FoEVJrGkI6mUBVinGhcIw1E%2FOwhbysXPls9%2FDxxmZG1wygtI6%2FEY%2Bi&X-Amz-Signature=d4166c07b6a8bc30fef7c54144c177b13d97a577ed7e255e0b4a1a244419efb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLYQI2M%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIAENxuV56sKfHXB%2BqxxY2%2FoAS%2FwWmwL%2FvN2EvnHXGxgEAiEAv6eTrXecEWZoDKCIQxftdIGZWGgM9godFDsc0za7xksq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIWBP3IuhsZ26ZDWaCrcA1n2%2Bd5QMLzEF7V6TBPCJqRrq6isfFP6CnrvArE%2BC3spVVZj4i2GY32%2FT7OoFDx2CiIelYsPTyfvDq8%2BJOWuHwPPpuOnSG9jXhahWx3RDadt59c4grjGVGv8HG9YMmRM%2BTVmZdcur2HWSgVDttCFDshNF336MLFFYy5XleXAb94C3mVLXw97V%2BMZH3cIYpkSckxqLdJLrLziHP%2BBOShJMi3F0d4fTkAL1Uky345WVf40HytC%2FWgZCTbh0rvma5FYjXVPCMBmB6qyXZTRDE3XcJEZmzYTqUQymCnt3HB6g3m3tD4uTNcGWC10hwL%2FDI9M3%2FUXAFey%2FRgNxGZM32CmCOzt5ktaGaN%2FhV6w163%2FXrbLHo%2BY7kbRkVCm%2Bo%2B%2FJhD7na8Ihr52xILoWd86dOuJlM5pulcHDovT%2B%2Blt41ejTOBFG11hNiWqMBjG90Niqg8IR3Rap2EUosZ4WLlVYnJlHYur1%2BajR0PXcOIMLbfneOe01A205oSfgop5xGVogLI5bzRG9IBSc3bLw3fqRV7YocR4ipE8ujtMmDd8E8SDI5r%2BKryITr6Dzw18ukIHB4VgumnVlSHVik8MLv9tcUc2iuZHQGA3fVK5AjG48rcdDXPey3iI22dXqLEK1WX6MNXsn8MGOqUBMkIJQAjZnkcbTxdbHyv3XQrzepxzOeYQoT1Fz9%2FETgdOYhBlJA5WalIaVhHl3z%2FioJPYncJVNnT0US6suFFjyI43mpIcjoTediFspiR6EUhhV%2BVzZJYU8bNCSenVV36fDriyTDo2TNiAr9G9Tl7k48w3lODb4FVBxLJkm2FoEVJrGkI6mUBVinGhcIw1E%2FOwhbysXPls9%2FDxxmZG1wygtI6%2FEY%2Bi&X-Amz-Signature=297cd3a39eec855e72c5923772e5e7c19f0421a4c02e55bba4c24455e5875aca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
