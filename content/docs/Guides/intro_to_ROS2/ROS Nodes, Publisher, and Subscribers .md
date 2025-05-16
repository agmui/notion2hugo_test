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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRPP4YH7%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD5msxrF6A3u%2FZddnxLUaQp%2B%2F%2BG%2BChKDX5nzkDf1LwHAiEAmYl0jyfV%2FJHka1JisQLnHljJP7EzK4nObk0pREODTPcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPfsUdtZnWXTI18cIircAwZi33Ja2CF%2F2nOCuehKuaykuPGlnalxyKf3juCryrGYDN%2FXWHQN7pm2n2K3queSNfLbkQtLq2yw6gXAP7fztXjZW87qkqURvhyLUzO6Ixqiu9AKW8hOlyA2M4yNpwf4VdM7VqIYH0VuGNI1R8Lf0dgzKGsOuy3wLXGUCFYFSmYQqrqSaLJ9pGPgVMlUdBLpfUEUtrt0ZvB3p%2FBhfP1e4kI0ori8n1Acsnga%2F%2F2YVdSkvbV%2FwpvTkbZRR3z4k3jsde88pB8nZ16u85Mylr%2FACeeEz5yqprtA%2FzpY9NpiYhK3fy5OaZWcZ2jJUCeLdpyONp5KXlxLIEcHX4PyverUplkRrSJ2eorGIyvRX0HNG4J6CzLOBerg6gqb3pGN3JZ6erjDVaDSBMpbT3PWyFav%2B3jgaVfDz5r2xI8Gyc5RiJqpmlsh2407QXhDEw0F8CZwhf062bd4YNZxOtmdb2M9cv71vHdAZYdNCTGvTbWmuy0jhLQ5hcWVKW4g%2F%2Bja1joK8ZiahKAGGcuQkvH9g%2BmOMYUjKy27LI7F9Vvt%2BgHk9bQXrvJKlAfptjtVj2PazHoMdie3INubvHLWUPQLXB%2BosIzQBCBWX%2BwNjEEEq3m529r23i8ykakOS3%2FjiMk%2FMLXtm8EGOqUBk4npHbyNgQw6pjkn2r8RiNpdN%2FXz1jjv2TE%2BCbvdY6y6ober%2FxHHkWGlheeKT08t%2BMTnZf4Pc3%2BO9N1bzDRRuQvdaBVYCC%2F%2BYlHRCM8d%2FeBZ0%2FaP6eU1F08gZCoQSOA0oPSvGpVhIcBwIGPVloKvNn8u4gzIm4sSKdehtiKm4N8H1WJbOzkQIl7R0TZZaqWZ1g4ZO2KgPPY7J%2FEBmvFlkp%2BnkGcP&X-Amz-Signature=1c68ed0a3241c95db667bedf954618fa185c127e684d0758d5e4074bb2440354&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRPP4YH7%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD5msxrF6A3u%2FZddnxLUaQp%2B%2F%2BG%2BChKDX5nzkDf1LwHAiEAmYl0jyfV%2FJHka1JisQLnHljJP7EzK4nObk0pREODTPcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPfsUdtZnWXTI18cIircAwZi33Ja2CF%2F2nOCuehKuaykuPGlnalxyKf3juCryrGYDN%2FXWHQN7pm2n2K3queSNfLbkQtLq2yw6gXAP7fztXjZW87qkqURvhyLUzO6Ixqiu9AKW8hOlyA2M4yNpwf4VdM7VqIYH0VuGNI1R8Lf0dgzKGsOuy3wLXGUCFYFSmYQqrqSaLJ9pGPgVMlUdBLpfUEUtrt0ZvB3p%2FBhfP1e4kI0ori8n1Acsnga%2F%2F2YVdSkvbV%2FwpvTkbZRR3z4k3jsde88pB8nZ16u85Mylr%2FACeeEz5yqprtA%2FzpY9NpiYhK3fy5OaZWcZ2jJUCeLdpyONp5KXlxLIEcHX4PyverUplkRrSJ2eorGIyvRX0HNG4J6CzLOBerg6gqb3pGN3JZ6erjDVaDSBMpbT3PWyFav%2B3jgaVfDz5r2xI8Gyc5RiJqpmlsh2407QXhDEw0F8CZwhf062bd4YNZxOtmdb2M9cv71vHdAZYdNCTGvTbWmuy0jhLQ5hcWVKW4g%2F%2Bja1joK8ZiahKAGGcuQkvH9g%2BmOMYUjKy27LI7F9Vvt%2BgHk9bQXrvJKlAfptjtVj2PazHoMdie3INubvHLWUPQLXB%2BosIzQBCBWX%2BwNjEEEq3m529r23i8ykakOS3%2FjiMk%2FMLXtm8EGOqUBk4npHbyNgQw6pjkn2r8RiNpdN%2FXz1jjv2TE%2BCbvdY6y6ober%2FxHHkWGlheeKT08t%2BMTnZf4Pc3%2BO9N1bzDRRuQvdaBVYCC%2F%2BYlHRCM8d%2FeBZ0%2FaP6eU1F08gZCoQSOA0oPSvGpVhIcBwIGPVloKvNn8u4gzIm4sSKdehtiKm4N8H1WJbOzkQIl7R0TZZaqWZ1g4ZO2KgPPY7J%2FEBmvFlkp%2BnkGcP&X-Amz-Signature=ad8fee64e76d3bd01289277522bd9a2e5b23dae94d5760918258161cd3de3381&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRPP4YH7%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD5msxrF6A3u%2FZddnxLUaQp%2B%2F%2BG%2BChKDX5nzkDf1LwHAiEAmYl0jyfV%2FJHka1JisQLnHljJP7EzK4nObk0pREODTPcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPfsUdtZnWXTI18cIircAwZi33Ja2CF%2F2nOCuehKuaykuPGlnalxyKf3juCryrGYDN%2FXWHQN7pm2n2K3queSNfLbkQtLq2yw6gXAP7fztXjZW87qkqURvhyLUzO6Ixqiu9AKW8hOlyA2M4yNpwf4VdM7VqIYH0VuGNI1R8Lf0dgzKGsOuy3wLXGUCFYFSmYQqrqSaLJ9pGPgVMlUdBLpfUEUtrt0ZvB3p%2FBhfP1e4kI0ori8n1Acsnga%2F%2F2YVdSkvbV%2FwpvTkbZRR3z4k3jsde88pB8nZ16u85Mylr%2FACeeEz5yqprtA%2FzpY9NpiYhK3fy5OaZWcZ2jJUCeLdpyONp5KXlxLIEcHX4PyverUplkRrSJ2eorGIyvRX0HNG4J6CzLOBerg6gqb3pGN3JZ6erjDVaDSBMpbT3PWyFav%2B3jgaVfDz5r2xI8Gyc5RiJqpmlsh2407QXhDEw0F8CZwhf062bd4YNZxOtmdb2M9cv71vHdAZYdNCTGvTbWmuy0jhLQ5hcWVKW4g%2F%2Bja1joK8ZiahKAGGcuQkvH9g%2BmOMYUjKy27LI7F9Vvt%2BgHk9bQXrvJKlAfptjtVj2PazHoMdie3INubvHLWUPQLXB%2BosIzQBCBWX%2BwNjEEEq3m529r23i8ykakOS3%2FjiMk%2FMLXtm8EGOqUBk4npHbyNgQw6pjkn2r8RiNpdN%2FXz1jjv2TE%2BCbvdY6y6ober%2FxHHkWGlheeKT08t%2BMTnZf4Pc3%2BO9N1bzDRRuQvdaBVYCC%2F%2BYlHRCM8d%2FeBZ0%2FaP6eU1F08gZCoQSOA0oPSvGpVhIcBwIGPVloKvNn8u4gzIm4sSKdehtiKm4N8H1WJbOzkQIl7R0TZZaqWZ1g4ZO2KgPPY7J%2FEBmvFlkp%2BnkGcP&X-Amz-Signature=245c083b5dc501434ac6c3bcc0a66385f927881b167f79de193ca0d63d87b157&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRPP4YH7%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD5msxrF6A3u%2FZddnxLUaQp%2B%2F%2BG%2BChKDX5nzkDf1LwHAiEAmYl0jyfV%2FJHka1JisQLnHljJP7EzK4nObk0pREODTPcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPfsUdtZnWXTI18cIircAwZi33Ja2CF%2F2nOCuehKuaykuPGlnalxyKf3juCryrGYDN%2FXWHQN7pm2n2K3queSNfLbkQtLq2yw6gXAP7fztXjZW87qkqURvhyLUzO6Ixqiu9AKW8hOlyA2M4yNpwf4VdM7VqIYH0VuGNI1R8Lf0dgzKGsOuy3wLXGUCFYFSmYQqrqSaLJ9pGPgVMlUdBLpfUEUtrt0ZvB3p%2FBhfP1e4kI0ori8n1Acsnga%2F%2F2YVdSkvbV%2FwpvTkbZRR3z4k3jsde88pB8nZ16u85Mylr%2FACeeEz5yqprtA%2FzpY9NpiYhK3fy5OaZWcZ2jJUCeLdpyONp5KXlxLIEcHX4PyverUplkRrSJ2eorGIyvRX0HNG4J6CzLOBerg6gqb3pGN3JZ6erjDVaDSBMpbT3PWyFav%2B3jgaVfDz5r2xI8Gyc5RiJqpmlsh2407QXhDEw0F8CZwhf062bd4YNZxOtmdb2M9cv71vHdAZYdNCTGvTbWmuy0jhLQ5hcWVKW4g%2F%2Bja1joK8ZiahKAGGcuQkvH9g%2BmOMYUjKy27LI7F9Vvt%2BgHk9bQXrvJKlAfptjtVj2PazHoMdie3INubvHLWUPQLXB%2BosIzQBCBWX%2BwNjEEEq3m529r23i8ykakOS3%2FjiMk%2FMLXtm8EGOqUBk4npHbyNgQw6pjkn2r8RiNpdN%2FXz1jjv2TE%2BCbvdY6y6ober%2FxHHkWGlheeKT08t%2BMTnZf4Pc3%2BO9N1bzDRRuQvdaBVYCC%2F%2BYlHRCM8d%2FeBZ0%2FaP6eU1F08gZCoQSOA0oPSvGpVhIcBwIGPVloKvNn8u4gzIm4sSKdehtiKm4N8H1WJbOzkQIl7R0TZZaqWZ1g4ZO2KgPPY7J%2FEBmvFlkp%2BnkGcP&X-Amz-Signature=15e5612a7d71f5299cc0af444f6e92321493ba18d821a808c1e943ad67ec8572&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRPP4YH7%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD5msxrF6A3u%2FZddnxLUaQp%2B%2F%2BG%2BChKDX5nzkDf1LwHAiEAmYl0jyfV%2FJHka1JisQLnHljJP7EzK4nObk0pREODTPcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPfsUdtZnWXTI18cIircAwZi33Ja2CF%2F2nOCuehKuaykuPGlnalxyKf3juCryrGYDN%2FXWHQN7pm2n2K3queSNfLbkQtLq2yw6gXAP7fztXjZW87qkqURvhyLUzO6Ixqiu9AKW8hOlyA2M4yNpwf4VdM7VqIYH0VuGNI1R8Lf0dgzKGsOuy3wLXGUCFYFSmYQqrqSaLJ9pGPgVMlUdBLpfUEUtrt0ZvB3p%2FBhfP1e4kI0ori8n1Acsnga%2F%2F2YVdSkvbV%2FwpvTkbZRR3z4k3jsde88pB8nZ16u85Mylr%2FACeeEz5yqprtA%2FzpY9NpiYhK3fy5OaZWcZ2jJUCeLdpyONp5KXlxLIEcHX4PyverUplkRrSJ2eorGIyvRX0HNG4J6CzLOBerg6gqb3pGN3JZ6erjDVaDSBMpbT3PWyFav%2B3jgaVfDz5r2xI8Gyc5RiJqpmlsh2407QXhDEw0F8CZwhf062bd4YNZxOtmdb2M9cv71vHdAZYdNCTGvTbWmuy0jhLQ5hcWVKW4g%2F%2Bja1joK8ZiahKAGGcuQkvH9g%2BmOMYUjKy27LI7F9Vvt%2BgHk9bQXrvJKlAfptjtVj2PazHoMdie3INubvHLWUPQLXB%2BosIzQBCBWX%2BwNjEEEq3m529r23i8ykakOS3%2FjiMk%2FMLXtm8EGOqUBk4npHbyNgQw6pjkn2r8RiNpdN%2FXz1jjv2TE%2BCbvdY6y6ober%2FxHHkWGlheeKT08t%2BMTnZf4Pc3%2BO9N1bzDRRuQvdaBVYCC%2F%2BYlHRCM8d%2FeBZ0%2FaP6eU1F08gZCoQSOA0oPSvGpVhIcBwIGPVloKvNn8u4gzIm4sSKdehtiKm4N8H1WJbOzkQIl7R0TZZaqWZ1g4ZO2KgPPY7J%2FEBmvFlkp%2BnkGcP&X-Amz-Signature=baa46e8a160230dc900735158e9cccc6f31596752496d8bb5b8d5beebeb0cccd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRPP4YH7%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD5msxrF6A3u%2FZddnxLUaQp%2B%2F%2BG%2BChKDX5nzkDf1LwHAiEAmYl0jyfV%2FJHka1JisQLnHljJP7EzK4nObk0pREODTPcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPfsUdtZnWXTI18cIircAwZi33Ja2CF%2F2nOCuehKuaykuPGlnalxyKf3juCryrGYDN%2FXWHQN7pm2n2K3queSNfLbkQtLq2yw6gXAP7fztXjZW87qkqURvhyLUzO6Ixqiu9AKW8hOlyA2M4yNpwf4VdM7VqIYH0VuGNI1R8Lf0dgzKGsOuy3wLXGUCFYFSmYQqrqSaLJ9pGPgVMlUdBLpfUEUtrt0ZvB3p%2FBhfP1e4kI0ori8n1Acsnga%2F%2F2YVdSkvbV%2FwpvTkbZRR3z4k3jsde88pB8nZ16u85Mylr%2FACeeEz5yqprtA%2FzpY9NpiYhK3fy5OaZWcZ2jJUCeLdpyONp5KXlxLIEcHX4PyverUplkRrSJ2eorGIyvRX0HNG4J6CzLOBerg6gqb3pGN3JZ6erjDVaDSBMpbT3PWyFav%2B3jgaVfDz5r2xI8Gyc5RiJqpmlsh2407QXhDEw0F8CZwhf062bd4YNZxOtmdb2M9cv71vHdAZYdNCTGvTbWmuy0jhLQ5hcWVKW4g%2F%2Bja1joK8ZiahKAGGcuQkvH9g%2BmOMYUjKy27LI7F9Vvt%2BgHk9bQXrvJKlAfptjtVj2PazHoMdie3INubvHLWUPQLXB%2BosIzQBCBWX%2BwNjEEEq3m529r23i8ykakOS3%2FjiMk%2FMLXtm8EGOqUBk4npHbyNgQw6pjkn2r8RiNpdN%2FXz1jjv2TE%2BCbvdY6y6ober%2FxHHkWGlheeKT08t%2BMTnZf4Pc3%2BO9N1bzDRRuQvdaBVYCC%2F%2BYlHRCM8d%2FeBZ0%2FaP6eU1F08gZCoQSOA0oPSvGpVhIcBwIGPVloKvNn8u4gzIm4sSKdehtiKm4N8H1WJbOzkQIl7R0TZZaqWZ1g4ZO2KgPPY7J%2FEBmvFlkp%2BnkGcP&X-Amz-Signature=bb6d6627cb1c1672c780480f974519a5b79e7eef0cfaa8691eb0f9d2fde1ebf2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRPP4YH7%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD5msxrF6A3u%2FZddnxLUaQp%2B%2F%2BG%2BChKDX5nzkDf1LwHAiEAmYl0jyfV%2FJHka1JisQLnHljJP7EzK4nObk0pREODTPcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPfsUdtZnWXTI18cIircAwZi33Ja2CF%2F2nOCuehKuaykuPGlnalxyKf3juCryrGYDN%2FXWHQN7pm2n2K3queSNfLbkQtLq2yw6gXAP7fztXjZW87qkqURvhyLUzO6Ixqiu9AKW8hOlyA2M4yNpwf4VdM7VqIYH0VuGNI1R8Lf0dgzKGsOuy3wLXGUCFYFSmYQqrqSaLJ9pGPgVMlUdBLpfUEUtrt0ZvB3p%2FBhfP1e4kI0ori8n1Acsnga%2F%2F2YVdSkvbV%2FwpvTkbZRR3z4k3jsde88pB8nZ16u85Mylr%2FACeeEz5yqprtA%2FzpY9NpiYhK3fy5OaZWcZ2jJUCeLdpyONp5KXlxLIEcHX4PyverUplkRrSJ2eorGIyvRX0HNG4J6CzLOBerg6gqb3pGN3JZ6erjDVaDSBMpbT3PWyFav%2B3jgaVfDz5r2xI8Gyc5RiJqpmlsh2407QXhDEw0F8CZwhf062bd4YNZxOtmdb2M9cv71vHdAZYdNCTGvTbWmuy0jhLQ5hcWVKW4g%2F%2Bja1joK8ZiahKAGGcuQkvH9g%2BmOMYUjKy27LI7F9Vvt%2BgHk9bQXrvJKlAfptjtVj2PazHoMdie3INubvHLWUPQLXB%2BosIzQBCBWX%2BwNjEEEq3m529r23i8ykakOS3%2FjiMk%2FMLXtm8EGOqUBk4npHbyNgQw6pjkn2r8RiNpdN%2FXz1jjv2TE%2BCbvdY6y6ober%2FxHHkWGlheeKT08t%2BMTnZf4Pc3%2BO9N1bzDRRuQvdaBVYCC%2F%2BYlHRCM8d%2FeBZ0%2FaP6eU1F08gZCoQSOA0oPSvGpVhIcBwIGPVloKvNn8u4gzIm4sSKdehtiKm4N8H1WJbOzkQIl7R0TZZaqWZ1g4ZO2KgPPY7J%2FEBmvFlkp%2BnkGcP&X-Amz-Signature=8feeca29545ac7e082fbb813626bb3cca3afdb03193af47448684c31f4f1b927&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRPP4YH7%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD5msxrF6A3u%2FZddnxLUaQp%2B%2F%2BG%2BChKDX5nzkDf1LwHAiEAmYl0jyfV%2FJHka1JisQLnHljJP7EzK4nObk0pREODTPcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPfsUdtZnWXTI18cIircAwZi33Ja2CF%2F2nOCuehKuaykuPGlnalxyKf3juCryrGYDN%2FXWHQN7pm2n2K3queSNfLbkQtLq2yw6gXAP7fztXjZW87qkqURvhyLUzO6Ixqiu9AKW8hOlyA2M4yNpwf4VdM7VqIYH0VuGNI1R8Lf0dgzKGsOuy3wLXGUCFYFSmYQqrqSaLJ9pGPgVMlUdBLpfUEUtrt0ZvB3p%2FBhfP1e4kI0ori8n1Acsnga%2F%2F2YVdSkvbV%2FwpvTkbZRR3z4k3jsde88pB8nZ16u85Mylr%2FACeeEz5yqprtA%2FzpY9NpiYhK3fy5OaZWcZ2jJUCeLdpyONp5KXlxLIEcHX4PyverUplkRrSJ2eorGIyvRX0HNG4J6CzLOBerg6gqb3pGN3JZ6erjDVaDSBMpbT3PWyFav%2B3jgaVfDz5r2xI8Gyc5RiJqpmlsh2407QXhDEw0F8CZwhf062bd4YNZxOtmdb2M9cv71vHdAZYdNCTGvTbWmuy0jhLQ5hcWVKW4g%2F%2Bja1joK8ZiahKAGGcuQkvH9g%2BmOMYUjKy27LI7F9Vvt%2BgHk9bQXrvJKlAfptjtVj2PazHoMdie3INubvHLWUPQLXB%2BosIzQBCBWX%2BwNjEEEq3m529r23i8ykakOS3%2FjiMk%2FMLXtm8EGOqUBk4npHbyNgQw6pjkn2r8RiNpdN%2FXz1jjv2TE%2BCbvdY6y6ober%2FxHHkWGlheeKT08t%2BMTnZf4Pc3%2BO9N1bzDRRuQvdaBVYCC%2F%2BYlHRCM8d%2FeBZ0%2FaP6eU1F08gZCoQSOA0oPSvGpVhIcBwIGPVloKvNn8u4gzIm4sSKdehtiKm4N8H1WJbOzkQIl7R0TZZaqWZ1g4ZO2KgPPY7J%2FEBmvFlkp%2BnkGcP&X-Amz-Signature=07308459254ec2c6ee476cafe1da43d69e91c9f0d44592649b458735b4c83177&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
