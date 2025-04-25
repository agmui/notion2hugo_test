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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQSRHW3%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmZ9uTb1WTmdq2ajg562hxRTBnghsq4YjjqD8KLYU2ygIhAPioctNK2pmHntYbNRF1i6EpL8X6PkE%2F%2BZ2AWXBVK%2BvnKv8DCC4QABoMNjM3NDIzMTgzODA1IgyaYw%2FWRbZHwy42w5Uq3AOh5xyzTIE2K8Hel%2Fssfku3NsI6EElpiytAZBK4cBm1hm9jAtOB%2B1H98lurIdjhks3V55aXx06x0%2BF7ZhRDYXpHuDM7BoilPb6KtfH0x1NSiYch5gXUhARZO4pztd%2FpGZjtFNYA31VhJKH6U1RMwYCaHJmfEdfYxsF1ZJ4eysdxcu6be8P6vvSb6RHbDTCCtf1Ph1kDX3Ffz5e2BMUgMt4cuPYfPB%2B3qKnYTfMRTNj1shRl7wDrxms1GoR3qrB%2Br5G0KcrnkEhLOCHxSegC9OWF9x1r3NirzO1KyQghZt7kxVXJqS7zSiZtyef%2B%2FQ7jai%2BH%2Ft8EL2XNXeRlBvzNbh9N90wfw71nZSAAjyYZ%2FX9Ku3NUNfU7QbXyQlGWLmhVnT%2Fh61asp7A8g4ndCOHqCEe60%2FqTpdXJ0sfJrPYuJ%2FOHks62J2vQUzCVl7i49f9y7r6b2U%2FlkRdL7kC04nd3QQO871sE%2FWIiZqC9yvhtxIcG0wdmekD0SlKlpV%2BlIrxipvcpxy%2BzSueZ8QVzCqhUQNLB2JBItXxLBFZkZ7bRofAhMVAcQPjgXMVz5h8L8o0AxIbRhe9MYyH8q%2FikXWTADDvYN7GVl1vL9PD92nJcfstJk%2BuoQPas5xdal7fsGjCUma7ABjqkAcj3iIV3Qr3oJpiT5NiSs%2B4sUUy15F9KY6Sx1eI2TO5Zsi9kGYptASKxli79YzNTLNSa%2Fqfky8T8VP6cDV02K0XUr2jp9dPAQ%2F58IQm%2BEebsDQVBej3EcSM%2B%2BUkiAcBvpONwP2KPxnvUMoTmT7Pz32E%2BZlMAUiifNSmvL9TUrSBFQPwHyeLyG70wXH2ya39ZfTwor0K70JMIrEZXTCUklUCz9bsb&X-Amz-Signature=7074a9d7bc6bf9cd90913fe5e8133b99db3231c79256e43ad9063415eb334dba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQSRHW3%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmZ9uTb1WTmdq2ajg562hxRTBnghsq4YjjqD8KLYU2ygIhAPioctNK2pmHntYbNRF1i6EpL8X6PkE%2F%2BZ2AWXBVK%2BvnKv8DCC4QABoMNjM3NDIzMTgzODA1IgyaYw%2FWRbZHwy42w5Uq3AOh5xyzTIE2K8Hel%2Fssfku3NsI6EElpiytAZBK4cBm1hm9jAtOB%2B1H98lurIdjhks3V55aXx06x0%2BF7ZhRDYXpHuDM7BoilPb6KtfH0x1NSiYch5gXUhARZO4pztd%2FpGZjtFNYA31VhJKH6U1RMwYCaHJmfEdfYxsF1ZJ4eysdxcu6be8P6vvSb6RHbDTCCtf1Ph1kDX3Ffz5e2BMUgMt4cuPYfPB%2B3qKnYTfMRTNj1shRl7wDrxms1GoR3qrB%2Br5G0KcrnkEhLOCHxSegC9OWF9x1r3NirzO1KyQghZt7kxVXJqS7zSiZtyef%2B%2FQ7jai%2BH%2Ft8EL2XNXeRlBvzNbh9N90wfw71nZSAAjyYZ%2FX9Ku3NUNfU7QbXyQlGWLmhVnT%2Fh61asp7A8g4ndCOHqCEe60%2FqTpdXJ0sfJrPYuJ%2FOHks62J2vQUzCVl7i49f9y7r6b2U%2FlkRdL7kC04nd3QQO871sE%2FWIiZqC9yvhtxIcG0wdmekD0SlKlpV%2BlIrxipvcpxy%2BzSueZ8QVzCqhUQNLB2JBItXxLBFZkZ7bRofAhMVAcQPjgXMVz5h8L8o0AxIbRhe9MYyH8q%2FikXWTADDvYN7GVl1vL9PD92nJcfstJk%2BuoQPas5xdal7fsGjCUma7ABjqkAcj3iIV3Qr3oJpiT5NiSs%2B4sUUy15F9KY6Sx1eI2TO5Zsi9kGYptASKxli79YzNTLNSa%2Fqfky8T8VP6cDV02K0XUr2jp9dPAQ%2F58IQm%2BEebsDQVBej3EcSM%2B%2BUkiAcBvpONwP2KPxnvUMoTmT7Pz32E%2BZlMAUiifNSmvL9TUrSBFQPwHyeLyG70wXH2ya39ZfTwor0K70JMIrEZXTCUklUCz9bsb&X-Amz-Signature=dfbffc4d420b88d22fdbd11a0fe7e7d4900d47a9db0542e60962d879bfc7a92c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQSRHW3%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmZ9uTb1WTmdq2ajg562hxRTBnghsq4YjjqD8KLYU2ygIhAPioctNK2pmHntYbNRF1i6EpL8X6PkE%2F%2BZ2AWXBVK%2BvnKv8DCC4QABoMNjM3NDIzMTgzODA1IgyaYw%2FWRbZHwy42w5Uq3AOh5xyzTIE2K8Hel%2Fssfku3NsI6EElpiytAZBK4cBm1hm9jAtOB%2B1H98lurIdjhks3V55aXx06x0%2BF7ZhRDYXpHuDM7BoilPb6KtfH0x1NSiYch5gXUhARZO4pztd%2FpGZjtFNYA31VhJKH6U1RMwYCaHJmfEdfYxsF1ZJ4eysdxcu6be8P6vvSb6RHbDTCCtf1Ph1kDX3Ffz5e2BMUgMt4cuPYfPB%2B3qKnYTfMRTNj1shRl7wDrxms1GoR3qrB%2Br5G0KcrnkEhLOCHxSegC9OWF9x1r3NirzO1KyQghZt7kxVXJqS7zSiZtyef%2B%2FQ7jai%2BH%2Ft8EL2XNXeRlBvzNbh9N90wfw71nZSAAjyYZ%2FX9Ku3NUNfU7QbXyQlGWLmhVnT%2Fh61asp7A8g4ndCOHqCEe60%2FqTpdXJ0sfJrPYuJ%2FOHks62J2vQUzCVl7i49f9y7r6b2U%2FlkRdL7kC04nd3QQO871sE%2FWIiZqC9yvhtxIcG0wdmekD0SlKlpV%2BlIrxipvcpxy%2BzSueZ8QVzCqhUQNLB2JBItXxLBFZkZ7bRofAhMVAcQPjgXMVz5h8L8o0AxIbRhe9MYyH8q%2FikXWTADDvYN7GVl1vL9PD92nJcfstJk%2BuoQPas5xdal7fsGjCUma7ABjqkAcj3iIV3Qr3oJpiT5NiSs%2B4sUUy15F9KY6Sx1eI2TO5Zsi9kGYptASKxli79YzNTLNSa%2Fqfky8T8VP6cDV02K0XUr2jp9dPAQ%2F58IQm%2BEebsDQVBej3EcSM%2B%2BUkiAcBvpONwP2KPxnvUMoTmT7Pz32E%2BZlMAUiifNSmvL9TUrSBFQPwHyeLyG70wXH2ya39ZfTwor0K70JMIrEZXTCUklUCz9bsb&X-Amz-Signature=2876d370d8c05c7f0d84229e2e7f84dbe3ab658ddded7f3fcceb1ba0e2e1ec34&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQSRHW3%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmZ9uTb1WTmdq2ajg562hxRTBnghsq4YjjqD8KLYU2ygIhAPioctNK2pmHntYbNRF1i6EpL8X6PkE%2F%2BZ2AWXBVK%2BvnKv8DCC4QABoMNjM3NDIzMTgzODA1IgyaYw%2FWRbZHwy42w5Uq3AOh5xyzTIE2K8Hel%2Fssfku3NsI6EElpiytAZBK4cBm1hm9jAtOB%2B1H98lurIdjhks3V55aXx06x0%2BF7ZhRDYXpHuDM7BoilPb6KtfH0x1NSiYch5gXUhARZO4pztd%2FpGZjtFNYA31VhJKH6U1RMwYCaHJmfEdfYxsF1ZJ4eysdxcu6be8P6vvSb6RHbDTCCtf1Ph1kDX3Ffz5e2BMUgMt4cuPYfPB%2B3qKnYTfMRTNj1shRl7wDrxms1GoR3qrB%2Br5G0KcrnkEhLOCHxSegC9OWF9x1r3NirzO1KyQghZt7kxVXJqS7zSiZtyef%2B%2FQ7jai%2BH%2Ft8EL2XNXeRlBvzNbh9N90wfw71nZSAAjyYZ%2FX9Ku3NUNfU7QbXyQlGWLmhVnT%2Fh61asp7A8g4ndCOHqCEe60%2FqTpdXJ0sfJrPYuJ%2FOHks62J2vQUzCVl7i49f9y7r6b2U%2FlkRdL7kC04nd3QQO871sE%2FWIiZqC9yvhtxIcG0wdmekD0SlKlpV%2BlIrxipvcpxy%2BzSueZ8QVzCqhUQNLB2JBItXxLBFZkZ7bRofAhMVAcQPjgXMVz5h8L8o0AxIbRhe9MYyH8q%2FikXWTADDvYN7GVl1vL9PD92nJcfstJk%2BuoQPas5xdal7fsGjCUma7ABjqkAcj3iIV3Qr3oJpiT5NiSs%2B4sUUy15F9KY6Sx1eI2TO5Zsi9kGYptASKxli79YzNTLNSa%2Fqfky8T8VP6cDV02K0XUr2jp9dPAQ%2F58IQm%2BEebsDQVBej3EcSM%2B%2BUkiAcBvpONwP2KPxnvUMoTmT7Pz32E%2BZlMAUiifNSmvL9TUrSBFQPwHyeLyG70wXH2ya39ZfTwor0K70JMIrEZXTCUklUCz9bsb&X-Amz-Signature=88fa8b5ea434935b1f3b237fb42ad826eec0b959fb1596a87fb5044605b96eeb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQSRHW3%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmZ9uTb1WTmdq2ajg562hxRTBnghsq4YjjqD8KLYU2ygIhAPioctNK2pmHntYbNRF1i6EpL8X6PkE%2F%2BZ2AWXBVK%2BvnKv8DCC4QABoMNjM3NDIzMTgzODA1IgyaYw%2FWRbZHwy42w5Uq3AOh5xyzTIE2K8Hel%2Fssfku3NsI6EElpiytAZBK4cBm1hm9jAtOB%2B1H98lurIdjhks3V55aXx06x0%2BF7ZhRDYXpHuDM7BoilPb6KtfH0x1NSiYch5gXUhARZO4pztd%2FpGZjtFNYA31VhJKH6U1RMwYCaHJmfEdfYxsF1ZJ4eysdxcu6be8P6vvSb6RHbDTCCtf1Ph1kDX3Ffz5e2BMUgMt4cuPYfPB%2B3qKnYTfMRTNj1shRl7wDrxms1GoR3qrB%2Br5G0KcrnkEhLOCHxSegC9OWF9x1r3NirzO1KyQghZt7kxVXJqS7zSiZtyef%2B%2FQ7jai%2BH%2Ft8EL2XNXeRlBvzNbh9N90wfw71nZSAAjyYZ%2FX9Ku3NUNfU7QbXyQlGWLmhVnT%2Fh61asp7A8g4ndCOHqCEe60%2FqTpdXJ0sfJrPYuJ%2FOHks62J2vQUzCVl7i49f9y7r6b2U%2FlkRdL7kC04nd3QQO871sE%2FWIiZqC9yvhtxIcG0wdmekD0SlKlpV%2BlIrxipvcpxy%2BzSueZ8QVzCqhUQNLB2JBItXxLBFZkZ7bRofAhMVAcQPjgXMVz5h8L8o0AxIbRhe9MYyH8q%2FikXWTADDvYN7GVl1vL9PD92nJcfstJk%2BuoQPas5xdal7fsGjCUma7ABjqkAcj3iIV3Qr3oJpiT5NiSs%2B4sUUy15F9KY6Sx1eI2TO5Zsi9kGYptASKxli79YzNTLNSa%2Fqfky8T8VP6cDV02K0XUr2jp9dPAQ%2F58IQm%2BEebsDQVBej3EcSM%2B%2BUkiAcBvpONwP2KPxnvUMoTmT7Pz32E%2BZlMAUiifNSmvL9TUrSBFQPwHyeLyG70wXH2ya39ZfTwor0K70JMIrEZXTCUklUCz9bsb&X-Amz-Signature=f3ad0a9d6d56265f1a723a74ca2aa5df230d2522c9532ec9117c5dcb020fc55c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQSRHW3%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmZ9uTb1WTmdq2ajg562hxRTBnghsq4YjjqD8KLYU2ygIhAPioctNK2pmHntYbNRF1i6EpL8X6PkE%2F%2BZ2AWXBVK%2BvnKv8DCC4QABoMNjM3NDIzMTgzODA1IgyaYw%2FWRbZHwy42w5Uq3AOh5xyzTIE2K8Hel%2Fssfku3NsI6EElpiytAZBK4cBm1hm9jAtOB%2B1H98lurIdjhks3V55aXx06x0%2BF7ZhRDYXpHuDM7BoilPb6KtfH0x1NSiYch5gXUhARZO4pztd%2FpGZjtFNYA31VhJKH6U1RMwYCaHJmfEdfYxsF1ZJ4eysdxcu6be8P6vvSb6RHbDTCCtf1Ph1kDX3Ffz5e2BMUgMt4cuPYfPB%2B3qKnYTfMRTNj1shRl7wDrxms1GoR3qrB%2Br5G0KcrnkEhLOCHxSegC9OWF9x1r3NirzO1KyQghZt7kxVXJqS7zSiZtyef%2B%2FQ7jai%2BH%2Ft8EL2XNXeRlBvzNbh9N90wfw71nZSAAjyYZ%2FX9Ku3NUNfU7QbXyQlGWLmhVnT%2Fh61asp7A8g4ndCOHqCEe60%2FqTpdXJ0sfJrPYuJ%2FOHks62J2vQUzCVl7i49f9y7r6b2U%2FlkRdL7kC04nd3QQO871sE%2FWIiZqC9yvhtxIcG0wdmekD0SlKlpV%2BlIrxipvcpxy%2BzSueZ8QVzCqhUQNLB2JBItXxLBFZkZ7bRofAhMVAcQPjgXMVz5h8L8o0AxIbRhe9MYyH8q%2FikXWTADDvYN7GVl1vL9PD92nJcfstJk%2BuoQPas5xdal7fsGjCUma7ABjqkAcj3iIV3Qr3oJpiT5NiSs%2B4sUUy15F9KY6Sx1eI2TO5Zsi9kGYptASKxli79YzNTLNSa%2Fqfky8T8VP6cDV02K0XUr2jp9dPAQ%2F58IQm%2BEebsDQVBej3EcSM%2B%2BUkiAcBvpONwP2KPxnvUMoTmT7Pz32E%2BZlMAUiifNSmvL9TUrSBFQPwHyeLyG70wXH2ya39ZfTwor0K70JMIrEZXTCUklUCz9bsb&X-Amz-Signature=538b9ac715296e29a8b2edf695023b1e86cec87eb16a3beaf8f3a3034f9afc47&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQSRHW3%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmZ9uTb1WTmdq2ajg562hxRTBnghsq4YjjqD8KLYU2ygIhAPioctNK2pmHntYbNRF1i6EpL8X6PkE%2F%2BZ2AWXBVK%2BvnKv8DCC4QABoMNjM3NDIzMTgzODA1IgyaYw%2FWRbZHwy42w5Uq3AOh5xyzTIE2K8Hel%2Fssfku3NsI6EElpiytAZBK4cBm1hm9jAtOB%2B1H98lurIdjhks3V55aXx06x0%2BF7ZhRDYXpHuDM7BoilPb6KtfH0x1NSiYch5gXUhARZO4pztd%2FpGZjtFNYA31VhJKH6U1RMwYCaHJmfEdfYxsF1ZJ4eysdxcu6be8P6vvSb6RHbDTCCtf1Ph1kDX3Ffz5e2BMUgMt4cuPYfPB%2B3qKnYTfMRTNj1shRl7wDrxms1GoR3qrB%2Br5G0KcrnkEhLOCHxSegC9OWF9x1r3NirzO1KyQghZt7kxVXJqS7zSiZtyef%2B%2FQ7jai%2BH%2Ft8EL2XNXeRlBvzNbh9N90wfw71nZSAAjyYZ%2FX9Ku3NUNfU7QbXyQlGWLmhVnT%2Fh61asp7A8g4ndCOHqCEe60%2FqTpdXJ0sfJrPYuJ%2FOHks62J2vQUzCVl7i49f9y7r6b2U%2FlkRdL7kC04nd3QQO871sE%2FWIiZqC9yvhtxIcG0wdmekD0SlKlpV%2BlIrxipvcpxy%2BzSueZ8QVzCqhUQNLB2JBItXxLBFZkZ7bRofAhMVAcQPjgXMVz5h8L8o0AxIbRhe9MYyH8q%2FikXWTADDvYN7GVl1vL9PD92nJcfstJk%2BuoQPas5xdal7fsGjCUma7ABjqkAcj3iIV3Qr3oJpiT5NiSs%2B4sUUy15F9KY6Sx1eI2TO5Zsi9kGYptASKxli79YzNTLNSa%2Fqfky8T8VP6cDV02K0XUr2jp9dPAQ%2F58IQm%2BEebsDQVBej3EcSM%2B%2BUkiAcBvpONwP2KPxnvUMoTmT7Pz32E%2BZlMAUiifNSmvL9TUrSBFQPwHyeLyG70wXH2ya39ZfTwor0K70JMIrEZXTCUklUCz9bsb&X-Amz-Signature=195ced22e74e593acdcf7c65dff9d07cf6d6bbbbd3cab00ee04a1f4e7c8d1c53&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQSRHW3%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmZ9uTb1WTmdq2ajg562hxRTBnghsq4YjjqD8KLYU2ygIhAPioctNK2pmHntYbNRF1i6EpL8X6PkE%2F%2BZ2AWXBVK%2BvnKv8DCC4QABoMNjM3NDIzMTgzODA1IgyaYw%2FWRbZHwy42w5Uq3AOh5xyzTIE2K8Hel%2Fssfku3NsI6EElpiytAZBK4cBm1hm9jAtOB%2B1H98lurIdjhks3V55aXx06x0%2BF7ZhRDYXpHuDM7BoilPb6KtfH0x1NSiYch5gXUhARZO4pztd%2FpGZjtFNYA31VhJKH6U1RMwYCaHJmfEdfYxsF1ZJ4eysdxcu6be8P6vvSb6RHbDTCCtf1Ph1kDX3Ffz5e2BMUgMt4cuPYfPB%2B3qKnYTfMRTNj1shRl7wDrxms1GoR3qrB%2Br5G0KcrnkEhLOCHxSegC9OWF9x1r3NirzO1KyQghZt7kxVXJqS7zSiZtyef%2B%2FQ7jai%2BH%2Ft8EL2XNXeRlBvzNbh9N90wfw71nZSAAjyYZ%2FX9Ku3NUNfU7QbXyQlGWLmhVnT%2Fh61asp7A8g4ndCOHqCEe60%2FqTpdXJ0sfJrPYuJ%2FOHks62J2vQUzCVl7i49f9y7r6b2U%2FlkRdL7kC04nd3QQO871sE%2FWIiZqC9yvhtxIcG0wdmekD0SlKlpV%2BlIrxipvcpxy%2BzSueZ8QVzCqhUQNLB2JBItXxLBFZkZ7bRofAhMVAcQPjgXMVz5h8L8o0AxIbRhe9MYyH8q%2FikXWTADDvYN7GVl1vL9PD92nJcfstJk%2BuoQPas5xdal7fsGjCUma7ABjqkAcj3iIV3Qr3oJpiT5NiSs%2B4sUUy15F9KY6Sx1eI2TO5Zsi9kGYptASKxli79YzNTLNSa%2Fqfky8T8VP6cDV02K0XUr2jp9dPAQ%2F58IQm%2BEebsDQVBej3EcSM%2B%2BUkiAcBvpONwP2KPxnvUMoTmT7Pz32E%2BZlMAUiifNSmvL9TUrSBFQPwHyeLyG70wXH2ya39ZfTwor0K70JMIrEZXTCUklUCz9bsb&X-Amz-Signature=7e2c41dbc2dfb58bcc6f531dc1a41ae1dc83c7dbed4a66b0029e76abfac62181&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
