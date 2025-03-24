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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4Z37IS3%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyDNP2yW3EQ8m0VL9HBqsucR0b19D47UaRmh9sN8JoLAiEA4oq%2BfXrei1f5Q06eSyzmNb2QBC6DWqKZe1pVEUf%2FtOkqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGreFOUq0yMWiIa3WyrcA7mVSfeZPk7Qvx21yh7UYcox5l55%2FTbieeMyODQoo1qpTLi03MAGyYbAifF0rEtNkRZlNN9hiz5eOoJLmQ1ZgVCXo23WUaktyaZZLKpKs%2BnSqKRcqjOmNEi0ShGSOThHFgcNi1NIy6z1wEmnFJi3Ayh%2FfOZcDSm2H15DVK%2BmQT2lx2igK%2FAo9zFcmRrUvGe2%2FAeSWGEDWS%2B07lmj9bN%2FncTszyhhlOOfh2ydoAn5LHS5O%2BCOyUKqPj2lXPr7udtyqCFDODxCU53MLAUb7tcTTgLbE0LoaCng03wN64jrYqCKrMwR3tM8i0xXydpajnkxzV3a9kvQVxYV2%2F7ky%2B16%2FVpViINMTab961JA7Jqc5XRY1kpH%2BnA0yeeZNM8DOtT9JquhpRE%2FKbLPDsTKUWJA6wjM4nfoFp0mq3n2nFOxOwCz2aREO13nXwNZpGUTEOszv4yQJhl4geycp2Kr9ziK1Hd3CL%2FWj20hOXxvQ%2FEIqUsBiTHdojsh5XksEAeypR7py3%2FSJRXmJk3%2FZux0beAd%2Bc%2BtJsFCl3jO8mMUA1JJT9lQgUE4l1oqFQVnVzhtqmilKUTEbhwY6p4%2BHkXwhBmVNoBqm1yq5vjIYPcAhntzSmxKxWTOL9lAzAjwRLX1MMixgr8GOqUBMkdpm61CKyzAGYX6VKNQwx4JSt%2BCLodMJ0ZX9i2vU%2BHefK8yvkoPVMI0TLcCIzpudAGYOldP5DxPAU9V1Y1XqUM2zkoIoNWOldt5n%2BxsMEhljQYtkLwa7QYJEosGGd%2BJx5qa2RCm5c8zQ5hx2ivKwEl3DFBaNyOpC9eoSNBV9P311RCaJdZ6YwNbaxzMsQfqI80amFL44Ni2Kwo9FA4m3e7l6u9C&X-Amz-Signature=2725112982718f82f954a377c6fd280dcee27ff9ca768dd8231d70d217013ef8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4Z37IS3%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyDNP2yW3EQ8m0VL9HBqsucR0b19D47UaRmh9sN8JoLAiEA4oq%2BfXrei1f5Q06eSyzmNb2QBC6DWqKZe1pVEUf%2FtOkqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGreFOUq0yMWiIa3WyrcA7mVSfeZPk7Qvx21yh7UYcox5l55%2FTbieeMyODQoo1qpTLi03MAGyYbAifF0rEtNkRZlNN9hiz5eOoJLmQ1ZgVCXo23WUaktyaZZLKpKs%2BnSqKRcqjOmNEi0ShGSOThHFgcNi1NIy6z1wEmnFJi3Ayh%2FfOZcDSm2H15DVK%2BmQT2lx2igK%2FAo9zFcmRrUvGe2%2FAeSWGEDWS%2B07lmj9bN%2FncTszyhhlOOfh2ydoAn5LHS5O%2BCOyUKqPj2lXPr7udtyqCFDODxCU53MLAUb7tcTTgLbE0LoaCng03wN64jrYqCKrMwR3tM8i0xXydpajnkxzV3a9kvQVxYV2%2F7ky%2B16%2FVpViINMTab961JA7Jqc5XRY1kpH%2BnA0yeeZNM8DOtT9JquhpRE%2FKbLPDsTKUWJA6wjM4nfoFp0mq3n2nFOxOwCz2aREO13nXwNZpGUTEOszv4yQJhl4geycp2Kr9ziK1Hd3CL%2FWj20hOXxvQ%2FEIqUsBiTHdojsh5XksEAeypR7py3%2FSJRXmJk3%2FZux0beAd%2Bc%2BtJsFCl3jO8mMUA1JJT9lQgUE4l1oqFQVnVzhtqmilKUTEbhwY6p4%2BHkXwhBmVNoBqm1yq5vjIYPcAhntzSmxKxWTOL9lAzAjwRLX1MMixgr8GOqUBMkdpm61CKyzAGYX6VKNQwx4JSt%2BCLodMJ0ZX9i2vU%2BHefK8yvkoPVMI0TLcCIzpudAGYOldP5DxPAU9V1Y1XqUM2zkoIoNWOldt5n%2BxsMEhljQYtkLwa7QYJEosGGd%2BJx5qa2RCm5c8zQ5hx2ivKwEl3DFBaNyOpC9eoSNBV9P311RCaJdZ6YwNbaxzMsQfqI80amFL44Ni2Kwo9FA4m3e7l6u9C&X-Amz-Signature=697cfd3d8c6e051edb3ff894fcb70cf608abe900842908436f2c3851ff2d79a8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4Z37IS3%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyDNP2yW3EQ8m0VL9HBqsucR0b19D47UaRmh9sN8JoLAiEA4oq%2BfXrei1f5Q06eSyzmNb2QBC6DWqKZe1pVEUf%2FtOkqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGreFOUq0yMWiIa3WyrcA7mVSfeZPk7Qvx21yh7UYcox5l55%2FTbieeMyODQoo1qpTLi03MAGyYbAifF0rEtNkRZlNN9hiz5eOoJLmQ1ZgVCXo23WUaktyaZZLKpKs%2BnSqKRcqjOmNEi0ShGSOThHFgcNi1NIy6z1wEmnFJi3Ayh%2FfOZcDSm2H15DVK%2BmQT2lx2igK%2FAo9zFcmRrUvGe2%2FAeSWGEDWS%2B07lmj9bN%2FncTszyhhlOOfh2ydoAn5LHS5O%2BCOyUKqPj2lXPr7udtyqCFDODxCU53MLAUb7tcTTgLbE0LoaCng03wN64jrYqCKrMwR3tM8i0xXydpajnkxzV3a9kvQVxYV2%2F7ky%2B16%2FVpViINMTab961JA7Jqc5XRY1kpH%2BnA0yeeZNM8DOtT9JquhpRE%2FKbLPDsTKUWJA6wjM4nfoFp0mq3n2nFOxOwCz2aREO13nXwNZpGUTEOszv4yQJhl4geycp2Kr9ziK1Hd3CL%2FWj20hOXxvQ%2FEIqUsBiTHdojsh5XksEAeypR7py3%2FSJRXmJk3%2FZux0beAd%2Bc%2BtJsFCl3jO8mMUA1JJT9lQgUE4l1oqFQVnVzhtqmilKUTEbhwY6p4%2BHkXwhBmVNoBqm1yq5vjIYPcAhntzSmxKxWTOL9lAzAjwRLX1MMixgr8GOqUBMkdpm61CKyzAGYX6VKNQwx4JSt%2BCLodMJ0ZX9i2vU%2BHefK8yvkoPVMI0TLcCIzpudAGYOldP5DxPAU9V1Y1XqUM2zkoIoNWOldt5n%2BxsMEhljQYtkLwa7QYJEosGGd%2BJx5qa2RCm5c8zQ5hx2ivKwEl3DFBaNyOpC9eoSNBV9P311RCaJdZ6YwNbaxzMsQfqI80amFL44Ni2Kwo9FA4m3e7l6u9C&X-Amz-Signature=553f23ec0b27bc2eed8428ce385614516022b0f401cb5bdc26ca6e71f096d212&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4Z37IS3%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyDNP2yW3EQ8m0VL9HBqsucR0b19D47UaRmh9sN8JoLAiEA4oq%2BfXrei1f5Q06eSyzmNb2QBC6DWqKZe1pVEUf%2FtOkqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGreFOUq0yMWiIa3WyrcA7mVSfeZPk7Qvx21yh7UYcox5l55%2FTbieeMyODQoo1qpTLi03MAGyYbAifF0rEtNkRZlNN9hiz5eOoJLmQ1ZgVCXo23WUaktyaZZLKpKs%2BnSqKRcqjOmNEi0ShGSOThHFgcNi1NIy6z1wEmnFJi3Ayh%2FfOZcDSm2H15DVK%2BmQT2lx2igK%2FAo9zFcmRrUvGe2%2FAeSWGEDWS%2B07lmj9bN%2FncTszyhhlOOfh2ydoAn5LHS5O%2BCOyUKqPj2lXPr7udtyqCFDODxCU53MLAUb7tcTTgLbE0LoaCng03wN64jrYqCKrMwR3tM8i0xXydpajnkxzV3a9kvQVxYV2%2F7ky%2B16%2FVpViINMTab961JA7Jqc5XRY1kpH%2BnA0yeeZNM8DOtT9JquhpRE%2FKbLPDsTKUWJA6wjM4nfoFp0mq3n2nFOxOwCz2aREO13nXwNZpGUTEOszv4yQJhl4geycp2Kr9ziK1Hd3CL%2FWj20hOXxvQ%2FEIqUsBiTHdojsh5XksEAeypR7py3%2FSJRXmJk3%2FZux0beAd%2Bc%2BtJsFCl3jO8mMUA1JJT9lQgUE4l1oqFQVnVzhtqmilKUTEbhwY6p4%2BHkXwhBmVNoBqm1yq5vjIYPcAhntzSmxKxWTOL9lAzAjwRLX1MMixgr8GOqUBMkdpm61CKyzAGYX6VKNQwx4JSt%2BCLodMJ0ZX9i2vU%2BHefK8yvkoPVMI0TLcCIzpudAGYOldP5DxPAU9V1Y1XqUM2zkoIoNWOldt5n%2BxsMEhljQYtkLwa7QYJEosGGd%2BJx5qa2RCm5c8zQ5hx2ivKwEl3DFBaNyOpC9eoSNBV9P311RCaJdZ6YwNbaxzMsQfqI80amFL44Ni2Kwo9FA4m3e7l6u9C&X-Amz-Signature=3b96e242a1c3cf1a65ee32295d59755ee860a4303ee890d3106fa026eab17bd9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4Z37IS3%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyDNP2yW3EQ8m0VL9HBqsucR0b19D47UaRmh9sN8JoLAiEA4oq%2BfXrei1f5Q06eSyzmNb2QBC6DWqKZe1pVEUf%2FtOkqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGreFOUq0yMWiIa3WyrcA7mVSfeZPk7Qvx21yh7UYcox5l55%2FTbieeMyODQoo1qpTLi03MAGyYbAifF0rEtNkRZlNN9hiz5eOoJLmQ1ZgVCXo23WUaktyaZZLKpKs%2BnSqKRcqjOmNEi0ShGSOThHFgcNi1NIy6z1wEmnFJi3Ayh%2FfOZcDSm2H15DVK%2BmQT2lx2igK%2FAo9zFcmRrUvGe2%2FAeSWGEDWS%2B07lmj9bN%2FncTszyhhlOOfh2ydoAn5LHS5O%2BCOyUKqPj2lXPr7udtyqCFDODxCU53MLAUb7tcTTgLbE0LoaCng03wN64jrYqCKrMwR3tM8i0xXydpajnkxzV3a9kvQVxYV2%2F7ky%2B16%2FVpViINMTab961JA7Jqc5XRY1kpH%2BnA0yeeZNM8DOtT9JquhpRE%2FKbLPDsTKUWJA6wjM4nfoFp0mq3n2nFOxOwCz2aREO13nXwNZpGUTEOszv4yQJhl4geycp2Kr9ziK1Hd3CL%2FWj20hOXxvQ%2FEIqUsBiTHdojsh5XksEAeypR7py3%2FSJRXmJk3%2FZux0beAd%2Bc%2BtJsFCl3jO8mMUA1JJT9lQgUE4l1oqFQVnVzhtqmilKUTEbhwY6p4%2BHkXwhBmVNoBqm1yq5vjIYPcAhntzSmxKxWTOL9lAzAjwRLX1MMixgr8GOqUBMkdpm61CKyzAGYX6VKNQwx4JSt%2BCLodMJ0ZX9i2vU%2BHefK8yvkoPVMI0TLcCIzpudAGYOldP5DxPAU9V1Y1XqUM2zkoIoNWOldt5n%2BxsMEhljQYtkLwa7QYJEosGGd%2BJx5qa2RCm5c8zQ5hx2ivKwEl3DFBaNyOpC9eoSNBV9P311RCaJdZ6YwNbaxzMsQfqI80amFL44Ni2Kwo9FA4m3e7l6u9C&X-Amz-Signature=c3253b29a9f2039540eca1f950af129996f00c52b449bf9123a3b0a796555736&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4Z37IS3%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyDNP2yW3EQ8m0VL9HBqsucR0b19D47UaRmh9sN8JoLAiEA4oq%2BfXrei1f5Q06eSyzmNb2QBC6DWqKZe1pVEUf%2FtOkqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGreFOUq0yMWiIa3WyrcA7mVSfeZPk7Qvx21yh7UYcox5l55%2FTbieeMyODQoo1qpTLi03MAGyYbAifF0rEtNkRZlNN9hiz5eOoJLmQ1ZgVCXo23WUaktyaZZLKpKs%2BnSqKRcqjOmNEi0ShGSOThHFgcNi1NIy6z1wEmnFJi3Ayh%2FfOZcDSm2H15DVK%2BmQT2lx2igK%2FAo9zFcmRrUvGe2%2FAeSWGEDWS%2B07lmj9bN%2FncTszyhhlOOfh2ydoAn5LHS5O%2BCOyUKqPj2lXPr7udtyqCFDODxCU53MLAUb7tcTTgLbE0LoaCng03wN64jrYqCKrMwR3tM8i0xXydpajnkxzV3a9kvQVxYV2%2F7ky%2B16%2FVpViINMTab961JA7Jqc5XRY1kpH%2BnA0yeeZNM8DOtT9JquhpRE%2FKbLPDsTKUWJA6wjM4nfoFp0mq3n2nFOxOwCz2aREO13nXwNZpGUTEOszv4yQJhl4geycp2Kr9ziK1Hd3CL%2FWj20hOXxvQ%2FEIqUsBiTHdojsh5XksEAeypR7py3%2FSJRXmJk3%2FZux0beAd%2Bc%2BtJsFCl3jO8mMUA1JJT9lQgUE4l1oqFQVnVzhtqmilKUTEbhwY6p4%2BHkXwhBmVNoBqm1yq5vjIYPcAhntzSmxKxWTOL9lAzAjwRLX1MMixgr8GOqUBMkdpm61CKyzAGYX6VKNQwx4JSt%2BCLodMJ0ZX9i2vU%2BHefK8yvkoPVMI0TLcCIzpudAGYOldP5DxPAU9V1Y1XqUM2zkoIoNWOldt5n%2BxsMEhljQYtkLwa7QYJEosGGd%2BJx5qa2RCm5c8zQ5hx2ivKwEl3DFBaNyOpC9eoSNBV9P311RCaJdZ6YwNbaxzMsQfqI80amFL44Ni2Kwo9FA4m3e7l6u9C&X-Amz-Signature=501254fc9d47de42d303dcb7d42fbeed471f1c55a21e9e2536c80b060bd14482&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4Z37IS3%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyDNP2yW3EQ8m0VL9HBqsucR0b19D47UaRmh9sN8JoLAiEA4oq%2BfXrei1f5Q06eSyzmNb2QBC6DWqKZe1pVEUf%2FtOkqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGreFOUq0yMWiIa3WyrcA7mVSfeZPk7Qvx21yh7UYcox5l55%2FTbieeMyODQoo1qpTLi03MAGyYbAifF0rEtNkRZlNN9hiz5eOoJLmQ1ZgVCXo23WUaktyaZZLKpKs%2BnSqKRcqjOmNEi0ShGSOThHFgcNi1NIy6z1wEmnFJi3Ayh%2FfOZcDSm2H15DVK%2BmQT2lx2igK%2FAo9zFcmRrUvGe2%2FAeSWGEDWS%2B07lmj9bN%2FncTszyhhlOOfh2ydoAn5LHS5O%2BCOyUKqPj2lXPr7udtyqCFDODxCU53MLAUb7tcTTgLbE0LoaCng03wN64jrYqCKrMwR3tM8i0xXydpajnkxzV3a9kvQVxYV2%2F7ky%2B16%2FVpViINMTab961JA7Jqc5XRY1kpH%2BnA0yeeZNM8DOtT9JquhpRE%2FKbLPDsTKUWJA6wjM4nfoFp0mq3n2nFOxOwCz2aREO13nXwNZpGUTEOszv4yQJhl4geycp2Kr9ziK1Hd3CL%2FWj20hOXxvQ%2FEIqUsBiTHdojsh5XksEAeypR7py3%2FSJRXmJk3%2FZux0beAd%2Bc%2BtJsFCl3jO8mMUA1JJT9lQgUE4l1oqFQVnVzhtqmilKUTEbhwY6p4%2BHkXwhBmVNoBqm1yq5vjIYPcAhntzSmxKxWTOL9lAzAjwRLX1MMixgr8GOqUBMkdpm61CKyzAGYX6VKNQwx4JSt%2BCLodMJ0ZX9i2vU%2BHefK8yvkoPVMI0TLcCIzpudAGYOldP5DxPAU9V1Y1XqUM2zkoIoNWOldt5n%2BxsMEhljQYtkLwa7QYJEosGGd%2BJx5qa2RCm5c8zQ5hx2ivKwEl3DFBaNyOpC9eoSNBV9P311RCaJdZ6YwNbaxzMsQfqI80amFL44Ni2Kwo9FA4m3e7l6u9C&X-Amz-Signature=3abf8856c181935af4ab2426b78ac7cb159f0ca97e27b86b4a6366cc080f5a7c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4Z37IS3%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyDNP2yW3EQ8m0VL9HBqsucR0b19D47UaRmh9sN8JoLAiEA4oq%2BfXrei1f5Q06eSyzmNb2QBC6DWqKZe1pVEUf%2FtOkqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGreFOUq0yMWiIa3WyrcA7mVSfeZPk7Qvx21yh7UYcox5l55%2FTbieeMyODQoo1qpTLi03MAGyYbAifF0rEtNkRZlNN9hiz5eOoJLmQ1ZgVCXo23WUaktyaZZLKpKs%2BnSqKRcqjOmNEi0ShGSOThHFgcNi1NIy6z1wEmnFJi3Ayh%2FfOZcDSm2H15DVK%2BmQT2lx2igK%2FAo9zFcmRrUvGe2%2FAeSWGEDWS%2B07lmj9bN%2FncTszyhhlOOfh2ydoAn5LHS5O%2BCOyUKqPj2lXPr7udtyqCFDODxCU53MLAUb7tcTTgLbE0LoaCng03wN64jrYqCKrMwR3tM8i0xXydpajnkxzV3a9kvQVxYV2%2F7ky%2B16%2FVpViINMTab961JA7Jqc5XRY1kpH%2BnA0yeeZNM8DOtT9JquhpRE%2FKbLPDsTKUWJA6wjM4nfoFp0mq3n2nFOxOwCz2aREO13nXwNZpGUTEOszv4yQJhl4geycp2Kr9ziK1Hd3CL%2FWj20hOXxvQ%2FEIqUsBiTHdojsh5XksEAeypR7py3%2FSJRXmJk3%2FZux0beAd%2Bc%2BtJsFCl3jO8mMUA1JJT9lQgUE4l1oqFQVnVzhtqmilKUTEbhwY6p4%2BHkXwhBmVNoBqm1yq5vjIYPcAhntzSmxKxWTOL9lAzAjwRLX1MMixgr8GOqUBMkdpm61CKyzAGYX6VKNQwx4JSt%2BCLodMJ0ZX9i2vU%2BHefK8yvkoPVMI0TLcCIzpudAGYOldP5DxPAU9V1Y1XqUM2zkoIoNWOldt5n%2BxsMEhljQYtkLwa7QYJEosGGd%2BJx5qa2RCm5c8zQ5hx2ivKwEl3DFBaNyOpC9eoSNBV9P311RCaJdZ6YwNbaxzMsQfqI80amFL44Ni2Kwo9FA4m3e7l6u9C&X-Amz-Signature=d07b8c687863c0f5f65a2e196be12cbe104395b3e5041d615b25e29e496e7f1a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
