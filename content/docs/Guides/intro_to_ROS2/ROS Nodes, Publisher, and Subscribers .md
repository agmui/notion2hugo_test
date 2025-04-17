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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DA2OEAZ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FZH3G%2FdX5zK1QhgmJY20imM81%2Ff0Z8neS8JyxZexJxgIhAPcZkRgLnmrOf9geEs0GxOHdpHgYizpvpqbb7wIk7AD9Kv8DCFkQABoMNjM3NDIzMTgzODA1IgzgnIR0vBHMyMkPkX4q3AOpUgNnq1rzSNhJv3NVCm%2BfRzt191p0m3BRy8WPYaXGdoKuK3eI%2BDDsfWPew3XBJ%2FmyEfrkRsedbEMoUEwGKjjCFNOeilW8miFF9DX1WyeA%2Bs61%2B7BBscIh1bZn0ESPdK3ywzWaiw%2Fc2rGKZRRPpMG1EDQjiSFbLC%2F14ypaSsqBU3PQiMIsM%2BiMlf5bfRyrT57AIl7DwDY9MlLqLZMgf90DY2bILTbdSf8QN3BX4Iri3JptrTAueMm9CgUb4f16bWk93GakByN%2BIzCW%2Bd2CEkOu6SDl4ATxIWLtsFTGbalQQFtN5iaXYh8yeJPNMM%2BZs8UOBBcz%2FYf84Ed23WUYiBYoOntodfey9rJ5hhICnYFlaprA3YeN00mzKFavemZ9WB0nrvqoOSU2AXPxc1j9DrVBEvb0BzbZWFYGPiZCZp8JBplOeREY2M7TKt%2BpstvZFtuRswzPkJ5dlDUKRZwo1n0DmfHbXWBEBJqkwe6sbvAUS2RjFj3YaJJ1ElG6kbHbMlP%2F87jej%2BJUG4dJR0YrZfjLqp5bQCblfEbUzh0keBC8kXiwfvEXl00Uw57kKwZiaVNdJmQDO2ffcRmot6Sk4NdStnrMsutQMy0AJW8sU95HHSoIdnAOFgGda02hNDCC4YLABjqkATD267uS%2FcOd3bA2t1ODAm%2FnzGF%2BjaOZBlrgpAPL1iDK281sXV4cYqPnhmHBiTB81%2Bd4dz6WAK9gK3ukhtKTlYQLfJ9X9ScKCt4uiCXhmqw%2B9zk6FlCHsdnEqYaM5uZMZrcl5M7Xhyb%2B5aSl7yMgXhc%2FBYHxLa5AqG7U81dsOl7haCW4wXgDuf%2BvC54K463Xo9JuJS95JeU8a0Mr55E2mHPHRC1J&X-Amz-Signature=d3b59e18dc79f06ad460ddf576b944150428d8d02e58afe7790fd19bf461b898&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DA2OEAZ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FZH3G%2FdX5zK1QhgmJY20imM81%2Ff0Z8neS8JyxZexJxgIhAPcZkRgLnmrOf9geEs0GxOHdpHgYizpvpqbb7wIk7AD9Kv8DCFkQABoMNjM3NDIzMTgzODA1IgzgnIR0vBHMyMkPkX4q3AOpUgNnq1rzSNhJv3NVCm%2BfRzt191p0m3BRy8WPYaXGdoKuK3eI%2BDDsfWPew3XBJ%2FmyEfrkRsedbEMoUEwGKjjCFNOeilW8miFF9DX1WyeA%2Bs61%2B7BBscIh1bZn0ESPdK3ywzWaiw%2Fc2rGKZRRPpMG1EDQjiSFbLC%2F14ypaSsqBU3PQiMIsM%2BiMlf5bfRyrT57AIl7DwDY9MlLqLZMgf90DY2bILTbdSf8QN3BX4Iri3JptrTAueMm9CgUb4f16bWk93GakByN%2BIzCW%2Bd2CEkOu6SDl4ATxIWLtsFTGbalQQFtN5iaXYh8yeJPNMM%2BZs8UOBBcz%2FYf84Ed23WUYiBYoOntodfey9rJ5hhICnYFlaprA3YeN00mzKFavemZ9WB0nrvqoOSU2AXPxc1j9DrVBEvb0BzbZWFYGPiZCZp8JBplOeREY2M7TKt%2BpstvZFtuRswzPkJ5dlDUKRZwo1n0DmfHbXWBEBJqkwe6sbvAUS2RjFj3YaJJ1ElG6kbHbMlP%2F87jej%2BJUG4dJR0YrZfjLqp5bQCblfEbUzh0keBC8kXiwfvEXl00Uw57kKwZiaVNdJmQDO2ffcRmot6Sk4NdStnrMsutQMy0AJW8sU95HHSoIdnAOFgGda02hNDCC4YLABjqkATD267uS%2FcOd3bA2t1ODAm%2FnzGF%2BjaOZBlrgpAPL1iDK281sXV4cYqPnhmHBiTB81%2Bd4dz6WAK9gK3ukhtKTlYQLfJ9X9ScKCt4uiCXhmqw%2B9zk6FlCHsdnEqYaM5uZMZrcl5M7Xhyb%2B5aSl7yMgXhc%2FBYHxLa5AqG7U81dsOl7haCW4wXgDuf%2BvC54K463Xo9JuJS95JeU8a0Mr55E2mHPHRC1J&X-Amz-Signature=014e0af332441ea3191fec063179c499a00bbf7c431938902ec1d595fb1451a5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DA2OEAZ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FZH3G%2FdX5zK1QhgmJY20imM81%2Ff0Z8neS8JyxZexJxgIhAPcZkRgLnmrOf9geEs0GxOHdpHgYizpvpqbb7wIk7AD9Kv8DCFkQABoMNjM3NDIzMTgzODA1IgzgnIR0vBHMyMkPkX4q3AOpUgNnq1rzSNhJv3NVCm%2BfRzt191p0m3BRy8WPYaXGdoKuK3eI%2BDDsfWPew3XBJ%2FmyEfrkRsedbEMoUEwGKjjCFNOeilW8miFF9DX1WyeA%2Bs61%2B7BBscIh1bZn0ESPdK3ywzWaiw%2Fc2rGKZRRPpMG1EDQjiSFbLC%2F14ypaSsqBU3PQiMIsM%2BiMlf5bfRyrT57AIl7DwDY9MlLqLZMgf90DY2bILTbdSf8QN3BX4Iri3JptrTAueMm9CgUb4f16bWk93GakByN%2BIzCW%2Bd2CEkOu6SDl4ATxIWLtsFTGbalQQFtN5iaXYh8yeJPNMM%2BZs8UOBBcz%2FYf84Ed23WUYiBYoOntodfey9rJ5hhICnYFlaprA3YeN00mzKFavemZ9WB0nrvqoOSU2AXPxc1j9DrVBEvb0BzbZWFYGPiZCZp8JBplOeREY2M7TKt%2BpstvZFtuRswzPkJ5dlDUKRZwo1n0DmfHbXWBEBJqkwe6sbvAUS2RjFj3YaJJ1ElG6kbHbMlP%2F87jej%2BJUG4dJR0YrZfjLqp5bQCblfEbUzh0keBC8kXiwfvEXl00Uw57kKwZiaVNdJmQDO2ffcRmot6Sk4NdStnrMsutQMy0AJW8sU95HHSoIdnAOFgGda02hNDCC4YLABjqkATD267uS%2FcOd3bA2t1ODAm%2FnzGF%2BjaOZBlrgpAPL1iDK281sXV4cYqPnhmHBiTB81%2Bd4dz6WAK9gK3ukhtKTlYQLfJ9X9ScKCt4uiCXhmqw%2B9zk6FlCHsdnEqYaM5uZMZrcl5M7Xhyb%2B5aSl7yMgXhc%2FBYHxLa5AqG7U81dsOl7haCW4wXgDuf%2BvC54K463Xo9JuJS95JeU8a0Mr55E2mHPHRC1J&X-Amz-Signature=2611e29925031aeb507cb1dee0be95e091a6a36b7a03271f80ce3028dc611b49&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DA2OEAZ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FZH3G%2FdX5zK1QhgmJY20imM81%2Ff0Z8neS8JyxZexJxgIhAPcZkRgLnmrOf9geEs0GxOHdpHgYizpvpqbb7wIk7AD9Kv8DCFkQABoMNjM3NDIzMTgzODA1IgzgnIR0vBHMyMkPkX4q3AOpUgNnq1rzSNhJv3NVCm%2BfRzt191p0m3BRy8WPYaXGdoKuK3eI%2BDDsfWPew3XBJ%2FmyEfrkRsedbEMoUEwGKjjCFNOeilW8miFF9DX1WyeA%2Bs61%2B7BBscIh1bZn0ESPdK3ywzWaiw%2Fc2rGKZRRPpMG1EDQjiSFbLC%2F14ypaSsqBU3PQiMIsM%2BiMlf5bfRyrT57AIl7DwDY9MlLqLZMgf90DY2bILTbdSf8QN3BX4Iri3JptrTAueMm9CgUb4f16bWk93GakByN%2BIzCW%2Bd2CEkOu6SDl4ATxIWLtsFTGbalQQFtN5iaXYh8yeJPNMM%2BZs8UOBBcz%2FYf84Ed23WUYiBYoOntodfey9rJ5hhICnYFlaprA3YeN00mzKFavemZ9WB0nrvqoOSU2AXPxc1j9DrVBEvb0BzbZWFYGPiZCZp8JBplOeREY2M7TKt%2BpstvZFtuRswzPkJ5dlDUKRZwo1n0DmfHbXWBEBJqkwe6sbvAUS2RjFj3YaJJ1ElG6kbHbMlP%2F87jej%2BJUG4dJR0YrZfjLqp5bQCblfEbUzh0keBC8kXiwfvEXl00Uw57kKwZiaVNdJmQDO2ffcRmot6Sk4NdStnrMsutQMy0AJW8sU95HHSoIdnAOFgGda02hNDCC4YLABjqkATD267uS%2FcOd3bA2t1ODAm%2FnzGF%2BjaOZBlrgpAPL1iDK281sXV4cYqPnhmHBiTB81%2Bd4dz6WAK9gK3ukhtKTlYQLfJ9X9ScKCt4uiCXhmqw%2B9zk6FlCHsdnEqYaM5uZMZrcl5M7Xhyb%2B5aSl7yMgXhc%2FBYHxLa5AqG7U81dsOl7haCW4wXgDuf%2BvC54K463Xo9JuJS95JeU8a0Mr55E2mHPHRC1J&X-Amz-Signature=eddae5ab3e89dd724bb6275a7d0858561fb9a4250eaeb66446a4276d7196ece8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DA2OEAZ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FZH3G%2FdX5zK1QhgmJY20imM81%2Ff0Z8neS8JyxZexJxgIhAPcZkRgLnmrOf9geEs0GxOHdpHgYizpvpqbb7wIk7AD9Kv8DCFkQABoMNjM3NDIzMTgzODA1IgzgnIR0vBHMyMkPkX4q3AOpUgNnq1rzSNhJv3NVCm%2BfRzt191p0m3BRy8WPYaXGdoKuK3eI%2BDDsfWPew3XBJ%2FmyEfrkRsedbEMoUEwGKjjCFNOeilW8miFF9DX1WyeA%2Bs61%2B7BBscIh1bZn0ESPdK3ywzWaiw%2Fc2rGKZRRPpMG1EDQjiSFbLC%2F14ypaSsqBU3PQiMIsM%2BiMlf5bfRyrT57AIl7DwDY9MlLqLZMgf90DY2bILTbdSf8QN3BX4Iri3JptrTAueMm9CgUb4f16bWk93GakByN%2BIzCW%2Bd2CEkOu6SDl4ATxIWLtsFTGbalQQFtN5iaXYh8yeJPNMM%2BZs8UOBBcz%2FYf84Ed23WUYiBYoOntodfey9rJ5hhICnYFlaprA3YeN00mzKFavemZ9WB0nrvqoOSU2AXPxc1j9DrVBEvb0BzbZWFYGPiZCZp8JBplOeREY2M7TKt%2BpstvZFtuRswzPkJ5dlDUKRZwo1n0DmfHbXWBEBJqkwe6sbvAUS2RjFj3YaJJ1ElG6kbHbMlP%2F87jej%2BJUG4dJR0YrZfjLqp5bQCblfEbUzh0keBC8kXiwfvEXl00Uw57kKwZiaVNdJmQDO2ffcRmot6Sk4NdStnrMsutQMy0AJW8sU95HHSoIdnAOFgGda02hNDCC4YLABjqkATD267uS%2FcOd3bA2t1ODAm%2FnzGF%2BjaOZBlrgpAPL1iDK281sXV4cYqPnhmHBiTB81%2Bd4dz6WAK9gK3ukhtKTlYQLfJ9X9ScKCt4uiCXhmqw%2B9zk6FlCHsdnEqYaM5uZMZrcl5M7Xhyb%2B5aSl7yMgXhc%2FBYHxLa5AqG7U81dsOl7haCW4wXgDuf%2BvC54K463Xo9JuJS95JeU8a0Mr55E2mHPHRC1J&X-Amz-Signature=743be30556d0407500d45f0c7697d11d805f6c4f40962fd01b1701b547853257&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DA2OEAZ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FZH3G%2FdX5zK1QhgmJY20imM81%2Ff0Z8neS8JyxZexJxgIhAPcZkRgLnmrOf9geEs0GxOHdpHgYizpvpqbb7wIk7AD9Kv8DCFkQABoMNjM3NDIzMTgzODA1IgzgnIR0vBHMyMkPkX4q3AOpUgNnq1rzSNhJv3NVCm%2BfRzt191p0m3BRy8WPYaXGdoKuK3eI%2BDDsfWPew3XBJ%2FmyEfrkRsedbEMoUEwGKjjCFNOeilW8miFF9DX1WyeA%2Bs61%2B7BBscIh1bZn0ESPdK3ywzWaiw%2Fc2rGKZRRPpMG1EDQjiSFbLC%2F14ypaSsqBU3PQiMIsM%2BiMlf5bfRyrT57AIl7DwDY9MlLqLZMgf90DY2bILTbdSf8QN3BX4Iri3JptrTAueMm9CgUb4f16bWk93GakByN%2BIzCW%2Bd2CEkOu6SDl4ATxIWLtsFTGbalQQFtN5iaXYh8yeJPNMM%2BZs8UOBBcz%2FYf84Ed23WUYiBYoOntodfey9rJ5hhICnYFlaprA3YeN00mzKFavemZ9WB0nrvqoOSU2AXPxc1j9DrVBEvb0BzbZWFYGPiZCZp8JBplOeREY2M7TKt%2BpstvZFtuRswzPkJ5dlDUKRZwo1n0DmfHbXWBEBJqkwe6sbvAUS2RjFj3YaJJ1ElG6kbHbMlP%2F87jej%2BJUG4dJR0YrZfjLqp5bQCblfEbUzh0keBC8kXiwfvEXl00Uw57kKwZiaVNdJmQDO2ffcRmot6Sk4NdStnrMsutQMy0AJW8sU95HHSoIdnAOFgGda02hNDCC4YLABjqkATD267uS%2FcOd3bA2t1ODAm%2FnzGF%2BjaOZBlrgpAPL1iDK281sXV4cYqPnhmHBiTB81%2Bd4dz6WAK9gK3ukhtKTlYQLfJ9X9ScKCt4uiCXhmqw%2B9zk6FlCHsdnEqYaM5uZMZrcl5M7Xhyb%2B5aSl7yMgXhc%2FBYHxLa5AqG7U81dsOl7haCW4wXgDuf%2BvC54K463Xo9JuJS95JeU8a0Mr55E2mHPHRC1J&X-Amz-Signature=790d19a984233da84eb3be9a4464a2da7ebcf2738ce0c638fecbd02d4105a8df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DA2OEAZ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FZH3G%2FdX5zK1QhgmJY20imM81%2Ff0Z8neS8JyxZexJxgIhAPcZkRgLnmrOf9geEs0GxOHdpHgYizpvpqbb7wIk7AD9Kv8DCFkQABoMNjM3NDIzMTgzODA1IgzgnIR0vBHMyMkPkX4q3AOpUgNnq1rzSNhJv3NVCm%2BfRzt191p0m3BRy8WPYaXGdoKuK3eI%2BDDsfWPew3XBJ%2FmyEfrkRsedbEMoUEwGKjjCFNOeilW8miFF9DX1WyeA%2Bs61%2B7BBscIh1bZn0ESPdK3ywzWaiw%2Fc2rGKZRRPpMG1EDQjiSFbLC%2F14ypaSsqBU3PQiMIsM%2BiMlf5bfRyrT57AIl7DwDY9MlLqLZMgf90DY2bILTbdSf8QN3BX4Iri3JptrTAueMm9CgUb4f16bWk93GakByN%2BIzCW%2Bd2CEkOu6SDl4ATxIWLtsFTGbalQQFtN5iaXYh8yeJPNMM%2BZs8UOBBcz%2FYf84Ed23WUYiBYoOntodfey9rJ5hhICnYFlaprA3YeN00mzKFavemZ9WB0nrvqoOSU2AXPxc1j9DrVBEvb0BzbZWFYGPiZCZp8JBplOeREY2M7TKt%2BpstvZFtuRswzPkJ5dlDUKRZwo1n0DmfHbXWBEBJqkwe6sbvAUS2RjFj3YaJJ1ElG6kbHbMlP%2F87jej%2BJUG4dJR0YrZfjLqp5bQCblfEbUzh0keBC8kXiwfvEXl00Uw57kKwZiaVNdJmQDO2ffcRmot6Sk4NdStnrMsutQMy0AJW8sU95HHSoIdnAOFgGda02hNDCC4YLABjqkATD267uS%2FcOd3bA2t1ODAm%2FnzGF%2BjaOZBlrgpAPL1iDK281sXV4cYqPnhmHBiTB81%2Bd4dz6WAK9gK3ukhtKTlYQLfJ9X9ScKCt4uiCXhmqw%2B9zk6FlCHsdnEqYaM5uZMZrcl5M7Xhyb%2B5aSl7yMgXhc%2FBYHxLa5AqG7U81dsOl7haCW4wXgDuf%2BvC54K463Xo9JuJS95JeU8a0Mr55E2mHPHRC1J&X-Amz-Signature=215c6ef33491013df8214a7ff0c73860acc1bfe7867535ac5be46d3aa4393250&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DA2OEAZ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FZH3G%2FdX5zK1QhgmJY20imM81%2Ff0Z8neS8JyxZexJxgIhAPcZkRgLnmrOf9geEs0GxOHdpHgYizpvpqbb7wIk7AD9Kv8DCFkQABoMNjM3NDIzMTgzODA1IgzgnIR0vBHMyMkPkX4q3AOpUgNnq1rzSNhJv3NVCm%2BfRzt191p0m3BRy8WPYaXGdoKuK3eI%2BDDsfWPew3XBJ%2FmyEfrkRsedbEMoUEwGKjjCFNOeilW8miFF9DX1WyeA%2Bs61%2B7BBscIh1bZn0ESPdK3ywzWaiw%2Fc2rGKZRRPpMG1EDQjiSFbLC%2F14ypaSsqBU3PQiMIsM%2BiMlf5bfRyrT57AIl7DwDY9MlLqLZMgf90DY2bILTbdSf8QN3BX4Iri3JptrTAueMm9CgUb4f16bWk93GakByN%2BIzCW%2Bd2CEkOu6SDl4ATxIWLtsFTGbalQQFtN5iaXYh8yeJPNMM%2BZs8UOBBcz%2FYf84Ed23WUYiBYoOntodfey9rJ5hhICnYFlaprA3YeN00mzKFavemZ9WB0nrvqoOSU2AXPxc1j9DrVBEvb0BzbZWFYGPiZCZp8JBplOeREY2M7TKt%2BpstvZFtuRswzPkJ5dlDUKRZwo1n0DmfHbXWBEBJqkwe6sbvAUS2RjFj3YaJJ1ElG6kbHbMlP%2F87jej%2BJUG4dJR0YrZfjLqp5bQCblfEbUzh0keBC8kXiwfvEXl00Uw57kKwZiaVNdJmQDO2ffcRmot6Sk4NdStnrMsutQMy0AJW8sU95HHSoIdnAOFgGda02hNDCC4YLABjqkATD267uS%2FcOd3bA2t1ODAm%2FnzGF%2BjaOZBlrgpAPL1iDK281sXV4cYqPnhmHBiTB81%2Bd4dz6WAK9gK3ukhtKTlYQLfJ9X9ScKCt4uiCXhmqw%2B9zk6FlCHsdnEqYaM5uZMZrcl5M7Xhyb%2B5aSl7yMgXhc%2FBYHxLa5AqG7U81dsOl7haCW4wXgDuf%2BvC54K463Xo9JuJS95JeU8a0Mr55E2mHPHRC1J&X-Amz-Signature=a43fddd8a92809bb9c0dd3c9c6e3e1175813f297b5758638f91b38019db296d4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
