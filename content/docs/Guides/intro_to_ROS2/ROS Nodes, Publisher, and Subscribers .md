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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI6JQDXZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfnOBG7%2FegSnL%2BF27yhYUl1ukEMmi%2BN5iovGVN7BcibAiEA2U%2FWiHYuRCOMu0aIwbp2rieEmPe769yUfJIKzbuY1OIqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNhpEmRwfLx8DXBt4CrcAxvPGcTzPhzjIy8tYrll12QMYJZtSbPKkozd0JDw5gLI4kWSUUDkZbzcvBuK4SmGu4AyaedxbWzy7e384jcCgftFNyFYVdUn6rm2LFNow2k0Vy0ibsU4MbAbM4NXaSCh7H8s%2Bl43fyjF7IGN5mv6Qk32QTEnJbHgW%2Fp1755ZxdKqQTpMRvGTtVcRXFQK5tyOXYT85Vvwk6GPLioYuF6eaCsUlJbXp6sOXXYXDlYNoPS6vZjxVsdEreRnnH3DH23DAcPgLxkR%2FagPvfUil%2FgO7fT4A%2Bbp%2FBmaQFdpwZxyvV2WnT2znhpioKtXXes%2Ff8KPir5BVcEaO08muAnRqQ45P5yWtE%2Fym0LOf4MuK%2F9bxi63YGX22gSnDRxyDuBeGJjhTviK3t03u4YRZJDPmY4mIDWRqUysu0snC%2FBd9GNPPgZUzcma%2FYVcDVxgFt%2BHVvW4CJmk9T1V7ejz%2BMeS8zquie3KwH2dC7q2ixBgxUhY1tzrXEP6Z7iHjU1IUp2kWd55QwXmopDAK1ulZBM%2BpVtry6havjfv88rG93G%2FiDPFG%2BB7SnT2sBAGr4tAAREB%2FcCt%2BORNv6TOlEsJyfmvA3VSQzbZy5Da6ThogOriQBtcWGM93j%2FMkqFdFQcEwWVeMNf35cQGOqUB5pbf6XvoiZLCJGXVmQqOcVwxhgyzqKpw4kz5JkVlM1peF%2FSNtMeL6TygkQRFzoOr2DGBUzYMyQQzgW48PCdD6Nz4%2Bu4wXPOzwQ2eR0aJPtiYUluCSj4vBlZVBrfjqqKa81A4ChqL23a8rPa84fx9T%2BP0HfaOwebxlfGZVnMJe84jBot46x%2FsTdA%2BD58ccZ3pB%2BdWA85ipZ3wCpGlJEsURqcjgtda&X-Amz-Signature=6c5a7bd835593fc2dafd300fa9329b9f476d2517b83eadd52684db1c0253bae9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI6JQDXZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfnOBG7%2FegSnL%2BF27yhYUl1ukEMmi%2BN5iovGVN7BcibAiEA2U%2FWiHYuRCOMu0aIwbp2rieEmPe769yUfJIKzbuY1OIqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNhpEmRwfLx8DXBt4CrcAxvPGcTzPhzjIy8tYrll12QMYJZtSbPKkozd0JDw5gLI4kWSUUDkZbzcvBuK4SmGu4AyaedxbWzy7e384jcCgftFNyFYVdUn6rm2LFNow2k0Vy0ibsU4MbAbM4NXaSCh7H8s%2Bl43fyjF7IGN5mv6Qk32QTEnJbHgW%2Fp1755ZxdKqQTpMRvGTtVcRXFQK5tyOXYT85Vvwk6GPLioYuF6eaCsUlJbXp6sOXXYXDlYNoPS6vZjxVsdEreRnnH3DH23DAcPgLxkR%2FagPvfUil%2FgO7fT4A%2Bbp%2FBmaQFdpwZxyvV2WnT2znhpioKtXXes%2Ff8KPir5BVcEaO08muAnRqQ45P5yWtE%2Fym0LOf4MuK%2F9bxi63YGX22gSnDRxyDuBeGJjhTviK3t03u4YRZJDPmY4mIDWRqUysu0snC%2FBd9GNPPgZUzcma%2FYVcDVxgFt%2BHVvW4CJmk9T1V7ejz%2BMeS8zquie3KwH2dC7q2ixBgxUhY1tzrXEP6Z7iHjU1IUp2kWd55QwXmopDAK1ulZBM%2BpVtry6havjfv88rG93G%2FiDPFG%2BB7SnT2sBAGr4tAAREB%2FcCt%2BORNv6TOlEsJyfmvA3VSQzbZy5Da6ThogOriQBtcWGM93j%2FMkqFdFQcEwWVeMNf35cQGOqUB5pbf6XvoiZLCJGXVmQqOcVwxhgyzqKpw4kz5JkVlM1peF%2FSNtMeL6TygkQRFzoOr2DGBUzYMyQQzgW48PCdD6Nz4%2Bu4wXPOzwQ2eR0aJPtiYUluCSj4vBlZVBrfjqqKa81A4ChqL23a8rPa84fx9T%2BP0HfaOwebxlfGZVnMJe84jBot46x%2FsTdA%2BD58ccZ3pB%2BdWA85ipZ3wCpGlJEsURqcjgtda&X-Amz-Signature=795a7557b8b6aba6c9fcf20e0a0868feb996ec2a9ca6a74ed9563dfc1a6bac0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI6JQDXZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfnOBG7%2FegSnL%2BF27yhYUl1ukEMmi%2BN5iovGVN7BcibAiEA2U%2FWiHYuRCOMu0aIwbp2rieEmPe769yUfJIKzbuY1OIqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNhpEmRwfLx8DXBt4CrcAxvPGcTzPhzjIy8tYrll12QMYJZtSbPKkozd0JDw5gLI4kWSUUDkZbzcvBuK4SmGu4AyaedxbWzy7e384jcCgftFNyFYVdUn6rm2LFNow2k0Vy0ibsU4MbAbM4NXaSCh7H8s%2Bl43fyjF7IGN5mv6Qk32QTEnJbHgW%2Fp1755ZxdKqQTpMRvGTtVcRXFQK5tyOXYT85Vvwk6GPLioYuF6eaCsUlJbXp6sOXXYXDlYNoPS6vZjxVsdEreRnnH3DH23DAcPgLxkR%2FagPvfUil%2FgO7fT4A%2Bbp%2FBmaQFdpwZxyvV2WnT2znhpioKtXXes%2Ff8KPir5BVcEaO08muAnRqQ45P5yWtE%2Fym0LOf4MuK%2F9bxi63YGX22gSnDRxyDuBeGJjhTviK3t03u4YRZJDPmY4mIDWRqUysu0snC%2FBd9GNPPgZUzcma%2FYVcDVxgFt%2BHVvW4CJmk9T1V7ejz%2BMeS8zquie3KwH2dC7q2ixBgxUhY1tzrXEP6Z7iHjU1IUp2kWd55QwXmopDAK1ulZBM%2BpVtry6havjfv88rG93G%2FiDPFG%2BB7SnT2sBAGr4tAAREB%2FcCt%2BORNv6TOlEsJyfmvA3VSQzbZy5Da6ThogOriQBtcWGM93j%2FMkqFdFQcEwWVeMNf35cQGOqUB5pbf6XvoiZLCJGXVmQqOcVwxhgyzqKpw4kz5JkVlM1peF%2FSNtMeL6TygkQRFzoOr2DGBUzYMyQQzgW48PCdD6Nz4%2Bu4wXPOzwQ2eR0aJPtiYUluCSj4vBlZVBrfjqqKa81A4ChqL23a8rPa84fx9T%2BP0HfaOwebxlfGZVnMJe84jBot46x%2FsTdA%2BD58ccZ3pB%2BdWA85ipZ3wCpGlJEsURqcjgtda&X-Amz-Signature=8dbb24e20ef0ad6091e9cd53c188233e098a3b655d8ad8a7c6340f2dc4e79007&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI6JQDXZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfnOBG7%2FegSnL%2BF27yhYUl1ukEMmi%2BN5iovGVN7BcibAiEA2U%2FWiHYuRCOMu0aIwbp2rieEmPe769yUfJIKzbuY1OIqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNhpEmRwfLx8DXBt4CrcAxvPGcTzPhzjIy8tYrll12QMYJZtSbPKkozd0JDw5gLI4kWSUUDkZbzcvBuK4SmGu4AyaedxbWzy7e384jcCgftFNyFYVdUn6rm2LFNow2k0Vy0ibsU4MbAbM4NXaSCh7H8s%2Bl43fyjF7IGN5mv6Qk32QTEnJbHgW%2Fp1755ZxdKqQTpMRvGTtVcRXFQK5tyOXYT85Vvwk6GPLioYuF6eaCsUlJbXp6sOXXYXDlYNoPS6vZjxVsdEreRnnH3DH23DAcPgLxkR%2FagPvfUil%2FgO7fT4A%2Bbp%2FBmaQFdpwZxyvV2WnT2znhpioKtXXes%2Ff8KPir5BVcEaO08muAnRqQ45P5yWtE%2Fym0LOf4MuK%2F9bxi63YGX22gSnDRxyDuBeGJjhTviK3t03u4YRZJDPmY4mIDWRqUysu0snC%2FBd9GNPPgZUzcma%2FYVcDVxgFt%2BHVvW4CJmk9T1V7ejz%2BMeS8zquie3KwH2dC7q2ixBgxUhY1tzrXEP6Z7iHjU1IUp2kWd55QwXmopDAK1ulZBM%2BpVtry6havjfv88rG93G%2FiDPFG%2BB7SnT2sBAGr4tAAREB%2FcCt%2BORNv6TOlEsJyfmvA3VSQzbZy5Da6ThogOriQBtcWGM93j%2FMkqFdFQcEwWVeMNf35cQGOqUB5pbf6XvoiZLCJGXVmQqOcVwxhgyzqKpw4kz5JkVlM1peF%2FSNtMeL6TygkQRFzoOr2DGBUzYMyQQzgW48PCdD6Nz4%2Bu4wXPOzwQ2eR0aJPtiYUluCSj4vBlZVBrfjqqKa81A4ChqL23a8rPa84fx9T%2BP0HfaOwebxlfGZVnMJe84jBot46x%2FsTdA%2BD58ccZ3pB%2BdWA85ipZ3wCpGlJEsURqcjgtda&X-Amz-Signature=d0ac7bd878955ef841c92f0b4c273ad61417d5a43ddb3aeae765ed7edce690ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI6JQDXZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfnOBG7%2FegSnL%2BF27yhYUl1ukEMmi%2BN5iovGVN7BcibAiEA2U%2FWiHYuRCOMu0aIwbp2rieEmPe769yUfJIKzbuY1OIqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNhpEmRwfLx8DXBt4CrcAxvPGcTzPhzjIy8tYrll12QMYJZtSbPKkozd0JDw5gLI4kWSUUDkZbzcvBuK4SmGu4AyaedxbWzy7e384jcCgftFNyFYVdUn6rm2LFNow2k0Vy0ibsU4MbAbM4NXaSCh7H8s%2Bl43fyjF7IGN5mv6Qk32QTEnJbHgW%2Fp1755ZxdKqQTpMRvGTtVcRXFQK5tyOXYT85Vvwk6GPLioYuF6eaCsUlJbXp6sOXXYXDlYNoPS6vZjxVsdEreRnnH3DH23DAcPgLxkR%2FagPvfUil%2FgO7fT4A%2Bbp%2FBmaQFdpwZxyvV2WnT2znhpioKtXXes%2Ff8KPir5BVcEaO08muAnRqQ45P5yWtE%2Fym0LOf4MuK%2F9bxi63YGX22gSnDRxyDuBeGJjhTviK3t03u4YRZJDPmY4mIDWRqUysu0snC%2FBd9GNPPgZUzcma%2FYVcDVxgFt%2BHVvW4CJmk9T1V7ejz%2BMeS8zquie3KwH2dC7q2ixBgxUhY1tzrXEP6Z7iHjU1IUp2kWd55QwXmopDAK1ulZBM%2BpVtry6havjfv88rG93G%2FiDPFG%2BB7SnT2sBAGr4tAAREB%2FcCt%2BORNv6TOlEsJyfmvA3VSQzbZy5Da6ThogOriQBtcWGM93j%2FMkqFdFQcEwWVeMNf35cQGOqUB5pbf6XvoiZLCJGXVmQqOcVwxhgyzqKpw4kz5JkVlM1peF%2FSNtMeL6TygkQRFzoOr2DGBUzYMyQQzgW48PCdD6Nz4%2Bu4wXPOzwQ2eR0aJPtiYUluCSj4vBlZVBrfjqqKa81A4ChqL23a8rPa84fx9T%2BP0HfaOwebxlfGZVnMJe84jBot46x%2FsTdA%2BD58ccZ3pB%2BdWA85ipZ3wCpGlJEsURqcjgtda&X-Amz-Signature=ef24a70b69f63a80161382a00c23b1c7b3c621fbafd27132a363782d6ace732b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI6JQDXZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfnOBG7%2FegSnL%2BF27yhYUl1ukEMmi%2BN5iovGVN7BcibAiEA2U%2FWiHYuRCOMu0aIwbp2rieEmPe769yUfJIKzbuY1OIqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNhpEmRwfLx8DXBt4CrcAxvPGcTzPhzjIy8tYrll12QMYJZtSbPKkozd0JDw5gLI4kWSUUDkZbzcvBuK4SmGu4AyaedxbWzy7e384jcCgftFNyFYVdUn6rm2LFNow2k0Vy0ibsU4MbAbM4NXaSCh7H8s%2Bl43fyjF7IGN5mv6Qk32QTEnJbHgW%2Fp1755ZxdKqQTpMRvGTtVcRXFQK5tyOXYT85Vvwk6GPLioYuF6eaCsUlJbXp6sOXXYXDlYNoPS6vZjxVsdEreRnnH3DH23DAcPgLxkR%2FagPvfUil%2FgO7fT4A%2Bbp%2FBmaQFdpwZxyvV2WnT2znhpioKtXXes%2Ff8KPir5BVcEaO08muAnRqQ45P5yWtE%2Fym0LOf4MuK%2F9bxi63YGX22gSnDRxyDuBeGJjhTviK3t03u4YRZJDPmY4mIDWRqUysu0snC%2FBd9GNPPgZUzcma%2FYVcDVxgFt%2BHVvW4CJmk9T1V7ejz%2BMeS8zquie3KwH2dC7q2ixBgxUhY1tzrXEP6Z7iHjU1IUp2kWd55QwXmopDAK1ulZBM%2BpVtry6havjfv88rG93G%2FiDPFG%2BB7SnT2sBAGr4tAAREB%2FcCt%2BORNv6TOlEsJyfmvA3VSQzbZy5Da6ThogOriQBtcWGM93j%2FMkqFdFQcEwWVeMNf35cQGOqUB5pbf6XvoiZLCJGXVmQqOcVwxhgyzqKpw4kz5JkVlM1peF%2FSNtMeL6TygkQRFzoOr2DGBUzYMyQQzgW48PCdD6Nz4%2Bu4wXPOzwQ2eR0aJPtiYUluCSj4vBlZVBrfjqqKa81A4ChqL23a8rPa84fx9T%2BP0HfaOwebxlfGZVnMJe84jBot46x%2FsTdA%2BD58ccZ3pB%2BdWA85ipZ3wCpGlJEsURqcjgtda&X-Amz-Signature=e2f787b97923dbb469c7e8ecf0472b18bc9d7a6a18104d46bc6391fc663e1f28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI6JQDXZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfnOBG7%2FegSnL%2BF27yhYUl1ukEMmi%2BN5iovGVN7BcibAiEA2U%2FWiHYuRCOMu0aIwbp2rieEmPe769yUfJIKzbuY1OIqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNhpEmRwfLx8DXBt4CrcAxvPGcTzPhzjIy8tYrll12QMYJZtSbPKkozd0JDw5gLI4kWSUUDkZbzcvBuK4SmGu4AyaedxbWzy7e384jcCgftFNyFYVdUn6rm2LFNow2k0Vy0ibsU4MbAbM4NXaSCh7H8s%2Bl43fyjF7IGN5mv6Qk32QTEnJbHgW%2Fp1755ZxdKqQTpMRvGTtVcRXFQK5tyOXYT85Vvwk6GPLioYuF6eaCsUlJbXp6sOXXYXDlYNoPS6vZjxVsdEreRnnH3DH23DAcPgLxkR%2FagPvfUil%2FgO7fT4A%2Bbp%2FBmaQFdpwZxyvV2WnT2znhpioKtXXes%2Ff8KPir5BVcEaO08muAnRqQ45P5yWtE%2Fym0LOf4MuK%2F9bxi63YGX22gSnDRxyDuBeGJjhTviK3t03u4YRZJDPmY4mIDWRqUysu0snC%2FBd9GNPPgZUzcma%2FYVcDVxgFt%2BHVvW4CJmk9T1V7ejz%2BMeS8zquie3KwH2dC7q2ixBgxUhY1tzrXEP6Z7iHjU1IUp2kWd55QwXmopDAK1ulZBM%2BpVtry6havjfv88rG93G%2FiDPFG%2BB7SnT2sBAGr4tAAREB%2FcCt%2BORNv6TOlEsJyfmvA3VSQzbZy5Da6ThogOriQBtcWGM93j%2FMkqFdFQcEwWVeMNf35cQGOqUB5pbf6XvoiZLCJGXVmQqOcVwxhgyzqKpw4kz5JkVlM1peF%2FSNtMeL6TygkQRFzoOr2DGBUzYMyQQzgW48PCdD6Nz4%2Bu4wXPOzwQ2eR0aJPtiYUluCSj4vBlZVBrfjqqKa81A4ChqL23a8rPa84fx9T%2BP0HfaOwebxlfGZVnMJe84jBot46x%2FsTdA%2BD58ccZ3pB%2BdWA85ipZ3wCpGlJEsURqcjgtda&X-Amz-Signature=b99172ff3db1d65dd4ef3a19f45c5a02ecbeca5288fc510f2169a523aa74c224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI6JQDXZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfnOBG7%2FegSnL%2BF27yhYUl1ukEMmi%2BN5iovGVN7BcibAiEA2U%2FWiHYuRCOMu0aIwbp2rieEmPe769yUfJIKzbuY1OIqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNhpEmRwfLx8DXBt4CrcAxvPGcTzPhzjIy8tYrll12QMYJZtSbPKkozd0JDw5gLI4kWSUUDkZbzcvBuK4SmGu4AyaedxbWzy7e384jcCgftFNyFYVdUn6rm2LFNow2k0Vy0ibsU4MbAbM4NXaSCh7H8s%2Bl43fyjF7IGN5mv6Qk32QTEnJbHgW%2Fp1755ZxdKqQTpMRvGTtVcRXFQK5tyOXYT85Vvwk6GPLioYuF6eaCsUlJbXp6sOXXYXDlYNoPS6vZjxVsdEreRnnH3DH23DAcPgLxkR%2FagPvfUil%2FgO7fT4A%2Bbp%2FBmaQFdpwZxyvV2WnT2znhpioKtXXes%2Ff8KPir5BVcEaO08muAnRqQ45P5yWtE%2Fym0LOf4MuK%2F9bxi63YGX22gSnDRxyDuBeGJjhTviK3t03u4YRZJDPmY4mIDWRqUysu0snC%2FBd9GNPPgZUzcma%2FYVcDVxgFt%2BHVvW4CJmk9T1V7ejz%2BMeS8zquie3KwH2dC7q2ixBgxUhY1tzrXEP6Z7iHjU1IUp2kWd55QwXmopDAK1ulZBM%2BpVtry6havjfv88rG93G%2FiDPFG%2BB7SnT2sBAGr4tAAREB%2FcCt%2BORNv6TOlEsJyfmvA3VSQzbZy5Da6ThogOriQBtcWGM93j%2FMkqFdFQcEwWVeMNf35cQGOqUB5pbf6XvoiZLCJGXVmQqOcVwxhgyzqKpw4kz5JkVlM1peF%2FSNtMeL6TygkQRFzoOr2DGBUzYMyQQzgW48PCdD6Nz4%2Bu4wXPOzwQ2eR0aJPtiYUluCSj4vBlZVBrfjqqKa81A4ChqL23a8rPa84fx9T%2BP0HfaOwebxlfGZVnMJe84jBot46x%2FsTdA%2BD58ccZ3pB%2BdWA85ipZ3wCpGlJEsURqcjgtda&X-Amz-Signature=ef597ca22b0cc6d542df3f9a21f1bf6cbb277b5472655f620c792c2c87a3e073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
