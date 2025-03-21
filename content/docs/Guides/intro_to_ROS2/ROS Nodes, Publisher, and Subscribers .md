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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5FD6LGW%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIAVszVA6SyUe5tqf82gsaruHp94EjaYWXQUIujDXaAZaAiEA8xwt%2Bd8lyyIEyBalAIaSaAgzOK1TUrUHxMLtheOX0SgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxKyVUegNwjM1pVfircAzigDC5%2BDb2hp%2FwwOJtc%2F%2BpC9pKttWH7XgDZnFmf7hbJKGonxIu69gltCI7QpZhCEoNeYPpXWoZzw8Rik9Vi1CIgbxTp8E4%2FIifzaA%2BgmlLxZ2Ak81JF9RBZUtpPTPKHtZPJ8h33sraZTKr0rRj%2FfPvnzkxtPCs8epdCQgCSgBJtXtr2FPDl64gu4%2B7iZQ31cmakoFisZ5LbQV6PRQ1g7NaQOXmMBlcBvwdLuofpZ523ZwxOQtk4INwQ%2BCNnuBpPMd3jo5RTv1zT2sJ6QgJZY2GBO%2FnVYSiWlJS7LdAnL6F47YcsI2%2FitAfubnZG%2FUpaB1JmUtfwCaVvbRfAYaSvUSBeZv%2BafDx4Mcp3fkslCeGIGiJ2IfpuEPdVJ7wf5FHqj%2BgfiGNtD73HGNrfEW3BMiIFlpSFRcsMSa9t6F3QiJf3QWZaN3%2BOhP9UlzcpzqZwBZ7jYTh1KkI9zeGxKsGmYWdf9MYzl4omhTG2aI19y2d9dOiXC8jCnkNtu47Gos6zUD6nsqGwGXbLBtxLR2j%2FAhVPZj0WkdqCe08iDSlLmUWDMU7brV0byTiXVb5RRGZsnmcOIBw6rWLYa%2B%2B0lWQ%2FxI1MXn2q%2Fw9gI7KS8b678utZsrkqf8mcEcYtlOIwMPj59L4GOqUBbWW1OWsCYvekeaxeqhv0cvV2kCPoD9Af4saRuwwq3ET7wNH59WtyHP%2BNjX6JXfi1g4DBrFmcCGIesE7aXdmQyyQIlEjQ0SPTUrEfksZeULQl0IRWJtJtxy%2B9t1cu8gh9fYWs%2BoZECIfQRvKlDKTMdnylC1Moefmo%2BzjpTcm3mbETPSLV2azB0wyY85EpmA2rAwSbqOsaFlE81h29AgBg5C9UFvCR&X-Amz-Signature=7bc9f5dc3f59c429bc86c1c7922b8fdc136b0f2b76809a130159ee384ec141cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5FD6LGW%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIAVszVA6SyUe5tqf82gsaruHp94EjaYWXQUIujDXaAZaAiEA8xwt%2Bd8lyyIEyBalAIaSaAgzOK1TUrUHxMLtheOX0SgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxKyVUegNwjM1pVfircAzigDC5%2BDb2hp%2FwwOJtc%2F%2BpC9pKttWH7XgDZnFmf7hbJKGonxIu69gltCI7QpZhCEoNeYPpXWoZzw8Rik9Vi1CIgbxTp8E4%2FIifzaA%2BgmlLxZ2Ak81JF9RBZUtpPTPKHtZPJ8h33sraZTKr0rRj%2FfPvnzkxtPCs8epdCQgCSgBJtXtr2FPDl64gu4%2B7iZQ31cmakoFisZ5LbQV6PRQ1g7NaQOXmMBlcBvwdLuofpZ523ZwxOQtk4INwQ%2BCNnuBpPMd3jo5RTv1zT2sJ6QgJZY2GBO%2FnVYSiWlJS7LdAnL6F47YcsI2%2FitAfubnZG%2FUpaB1JmUtfwCaVvbRfAYaSvUSBeZv%2BafDx4Mcp3fkslCeGIGiJ2IfpuEPdVJ7wf5FHqj%2BgfiGNtD73HGNrfEW3BMiIFlpSFRcsMSa9t6F3QiJf3QWZaN3%2BOhP9UlzcpzqZwBZ7jYTh1KkI9zeGxKsGmYWdf9MYzl4omhTG2aI19y2d9dOiXC8jCnkNtu47Gos6zUD6nsqGwGXbLBtxLR2j%2FAhVPZj0WkdqCe08iDSlLmUWDMU7brV0byTiXVb5RRGZsnmcOIBw6rWLYa%2B%2B0lWQ%2FxI1MXn2q%2Fw9gI7KS8b678utZsrkqf8mcEcYtlOIwMPj59L4GOqUBbWW1OWsCYvekeaxeqhv0cvV2kCPoD9Af4saRuwwq3ET7wNH59WtyHP%2BNjX6JXfi1g4DBrFmcCGIesE7aXdmQyyQIlEjQ0SPTUrEfksZeULQl0IRWJtJtxy%2B9t1cu8gh9fYWs%2BoZECIfQRvKlDKTMdnylC1Moefmo%2BzjpTcm3mbETPSLV2azB0wyY85EpmA2rAwSbqOsaFlE81h29AgBg5C9UFvCR&X-Amz-Signature=80cc05eebbf11f8a36db4f6b55de6eb7559759240cb0173ae6ac1110cc6e0cba&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5FD6LGW%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIAVszVA6SyUe5tqf82gsaruHp94EjaYWXQUIujDXaAZaAiEA8xwt%2Bd8lyyIEyBalAIaSaAgzOK1TUrUHxMLtheOX0SgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxKyVUegNwjM1pVfircAzigDC5%2BDb2hp%2FwwOJtc%2F%2BpC9pKttWH7XgDZnFmf7hbJKGonxIu69gltCI7QpZhCEoNeYPpXWoZzw8Rik9Vi1CIgbxTp8E4%2FIifzaA%2BgmlLxZ2Ak81JF9RBZUtpPTPKHtZPJ8h33sraZTKr0rRj%2FfPvnzkxtPCs8epdCQgCSgBJtXtr2FPDl64gu4%2B7iZQ31cmakoFisZ5LbQV6PRQ1g7NaQOXmMBlcBvwdLuofpZ523ZwxOQtk4INwQ%2BCNnuBpPMd3jo5RTv1zT2sJ6QgJZY2GBO%2FnVYSiWlJS7LdAnL6F47YcsI2%2FitAfubnZG%2FUpaB1JmUtfwCaVvbRfAYaSvUSBeZv%2BafDx4Mcp3fkslCeGIGiJ2IfpuEPdVJ7wf5FHqj%2BgfiGNtD73HGNrfEW3BMiIFlpSFRcsMSa9t6F3QiJf3QWZaN3%2BOhP9UlzcpzqZwBZ7jYTh1KkI9zeGxKsGmYWdf9MYzl4omhTG2aI19y2d9dOiXC8jCnkNtu47Gos6zUD6nsqGwGXbLBtxLR2j%2FAhVPZj0WkdqCe08iDSlLmUWDMU7brV0byTiXVb5RRGZsnmcOIBw6rWLYa%2B%2B0lWQ%2FxI1MXn2q%2Fw9gI7KS8b678utZsrkqf8mcEcYtlOIwMPj59L4GOqUBbWW1OWsCYvekeaxeqhv0cvV2kCPoD9Af4saRuwwq3ET7wNH59WtyHP%2BNjX6JXfi1g4DBrFmcCGIesE7aXdmQyyQIlEjQ0SPTUrEfksZeULQl0IRWJtJtxy%2B9t1cu8gh9fYWs%2BoZECIfQRvKlDKTMdnylC1Moefmo%2BzjpTcm3mbETPSLV2azB0wyY85EpmA2rAwSbqOsaFlE81h29AgBg5C9UFvCR&X-Amz-Signature=ba83206a91206e6324aab691018e345bc882ad16e2b59cedc3415743ca10a0bc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5FD6LGW%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIAVszVA6SyUe5tqf82gsaruHp94EjaYWXQUIujDXaAZaAiEA8xwt%2Bd8lyyIEyBalAIaSaAgzOK1TUrUHxMLtheOX0SgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxKyVUegNwjM1pVfircAzigDC5%2BDb2hp%2FwwOJtc%2F%2BpC9pKttWH7XgDZnFmf7hbJKGonxIu69gltCI7QpZhCEoNeYPpXWoZzw8Rik9Vi1CIgbxTp8E4%2FIifzaA%2BgmlLxZ2Ak81JF9RBZUtpPTPKHtZPJ8h33sraZTKr0rRj%2FfPvnzkxtPCs8epdCQgCSgBJtXtr2FPDl64gu4%2B7iZQ31cmakoFisZ5LbQV6PRQ1g7NaQOXmMBlcBvwdLuofpZ523ZwxOQtk4INwQ%2BCNnuBpPMd3jo5RTv1zT2sJ6QgJZY2GBO%2FnVYSiWlJS7LdAnL6F47YcsI2%2FitAfubnZG%2FUpaB1JmUtfwCaVvbRfAYaSvUSBeZv%2BafDx4Mcp3fkslCeGIGiJ2IfpuEPdVJ7wf5FHqj%2BgfiGNtD73HGNrfEW3BMiIFlpSFRcsMSa9t6F3QiJf3QWZaN3%2BOhP9UlzcpzqZwBZ7jYTh1KkI9zeGxKsGmYWdf9MYzl4omhTG2aI19y2d9dOiXC8jCnkNtu47Gos6zUD6nsqGwGXbLBtxLR2j%2FAhVPZj0WkdqCe08iDSlLmUWDMU7brV0byTiXVb5RRGZsnmcOIBw6rWLYa%2B%2B0lWQ%2FxI1MXn2q%2Fw9gI7KS8b678utZsrkqf8mcEcYtlOIwMPj59L4GOqUBbWW1OWsCYvekeaxeqhv0cvV2kCPoD9Af4saRuwwq3ET7wNH59WtyHP%2BNjX6JXfi1g4DBrFmcCGIesE7aXdmQyyQIlEjQ0SPTUrEfksZeULQl0IRWJtJtxy%2B9t1cu8gh9fYWs%2BoZECIfQRvKlDKTMdnylC1Moefmo%2BzjpTcm3mbETPSLV2azB0wyY85EpmA2rAwSbqOsaFlE81h29AgBg5C9UFvCR&X-Amz-Signature=a41a33e1be665301c234d2f13868383889b16a6ec14b855988e5164c70eff724&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5FD6LGW%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIAVszVA6SyUe5tqf82gsaruHp94EjaYWXQUIujDXaAZaAiEA8xwt%2Bd8lyyIEyBalAIaSaAgzOK1TUrUHxMLtheOX0SgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxKyVUegNwjM1pVfircAzigDC5%2BDb2hp%2FwwOJtc%2F%2BpC9pKttWH7XgDZnFmf7hbJKGonxIu69gltCI7QpZhCEoNeYPpXWoZzw8Rik9Vi1CIgbxTp8E4%2FIifzaA%2BgmlLxZ2Ak81JF9RBZUtpPTPKHtZPJ8h33sraZTKr0rRj%2FfPvnzkxtPCs8epdCQgCSgBJtXtr2FPDl64gu4%2B7iZQ31cmakoFisZ5LbQV6PRQ1g7NaQOXmMBlcBvwdLuofpZ523ZwxOQtk4INwQ%2BCNnuBpPMd3jo5RTv1zT2sJ6QgJZY2GBO%2FnVYSiWlJS7LdAnL6F47YcsI2%2FitAfubnZG%2FUpaB1JmUtfwCaVvbRfAYaSvUSBeZv%2BafDx4Mcp3fkslCeGIGiJ2IfpuEPdVJ7wf5FHqj%2BgfiGNtD73HGNrfEW3BMiIFlpSFRcsMSa9t6F3QiJf3QWZaN3%2BOhP9UlzcpzqZwBZ7jYTh1KkI9zeGxKsGmYWdf9MYzl4omhTG2aI19y2d9dOiXC8jCnkNtu47Gos6zUD6nsqGwGXbLBtxLR2j%2FAhVPZj0WkdqCe08iDSlLmUWDMU7brV0byTiXVb5RRGZsnmcOIBw6rWLYa%2B%2B0lWQ%2FxI1MXn2q%2Fw9gI7KS8b678utZsrkqf8mcEcYtlOIwMPj59L4GOqUBbWW1OWsCYvekeaxeqhv0cvV2kCPoD9Af4saRuwwq3ET7wNH59WtyHP%2BNjX6JXfi1g4DBrFmcCGIesE7aXdmQyyQIlEjQ0SPTUrEfksZeULQl0IRWJtJtxy%2B9t1cu8gh9fYWs%2BoZECIfQRvKlDKTMdnylC1Moefmo%2BzjpTcm3mbETPSLV2azB0wyY85EpmA2rAwSbqOsaFlE81h29AgBg5C9UFvCR&X-Amz-Signature=1988024b6d90a26937a11c1790b088d1077f4d6667b668592ff580b54a71900a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5FD6LGW%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIAVszVA6SyUe5tqf82gsaruHp94EjaYWXQUIujDXaAZaAiEA8xwt%2Bd8lyyIEyBalAIaSaAgzOK1TUrUHxMLtheOX0SgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxKyVUegNwjM1pVfircAzigDC5%2BDb2hp%2FwwOJtc%2F%2BpC9pKttWH7XgDZnFmf7hbJKGonxIu69gltCI7QpZhCEoNeYPpXWoZzw8Rik9Vi1CIgbxTp8E4%2FIifzaA%2BgmlLxZ2Ak81JF9RBZUtpPTPKHtZPJ8h33sraZTKr0rRj%2FfPvnzkxtPCs8epdCQgCSgBJtXtr2FPDl64gu4%2B7iZQ31cmakoFisZ5LbQV6PRQ1g7NaQOXmMBlcBvwdLuofpZ523ZwxOQtk4INwQ%2BCNnuBpPMd3jo5RTv1zT2sJ6QgJZY2GBO%2FnVYSiWlJS7LdAnL6F47YcsI2%2FitAfubnZG%2FUpaB1JmUtfwCaVvbRfAYaSvUSBeZv%2BafDx4Mcp3fkslCeGIGiJ2IfpuEPdVJ7wf5FHqj%2BgfiGNtD73HGNrfEW3BMiIFlpSFRcsMSa9t6F3QiJf3QWZaN3%2BOhP9UlzcpzqZwBZ7jYTh1KkI9zeGxKsGmYWdf9MYzl4omhTG2aI19y2d9dOiXC8jCnkNtu47Gos6zUD6nsqGwGXbLBtxLR2j%2FAhVPZj0WkdqCe08iDSlLmUWDMU7brV0byTiXVb5RRGZsnmcOIBw6rWLYa%2B%2B0lWQ%2FxI1MXn2q%2Fw9gI7KS8b678utZsrkqf8mcEcYtlOIwMPj59L4GOqUBbWW1OWsCYvekeaxeqhv0cvV2kCPoD9Af4saRuwwq3ET7wNH59WtyHP%2BNjX6JXfi1g4DBrFmcCGIesE7aXdmQyyQIlEjQ0SPTUrEfksZeULQl0IRWJtJtxy%2B9t1cu8gh9fYWs%2BoZECIfQRvKlDKTMdnylC1Moefmo%2BzjpTcm3mbETPSLV2azB0wyY85EpmA2rAwSbqOsaFlE81h29AgBg5C9UFvCR&X-Amz-Signature=1093e4ca7245aefaf2167f9b9b6b6e47ee498140ec0f20c1bf63f85529bd2ee2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5FD6LGW%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIAVszVA6SyUe5tqf82gsaruHp94EjaYWXQUIujDXaAZaAiEA8xwt%2Bd8lyyIEyBalAIaSaAgzOK1TUrUHxMLtheOX0SgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxKyVUegNwjM1pVfircAzigDC5%2BDb2hp%2FwwOJtc%2F%2BpC9pKttWH7XgDZnFmf7hbJKGonxIu69gltCI7QpZhCEoNeYPpXWoZzw8Rik9Vi1CIgbxTp8E4%2FIifzaA%2BgmlLxZ2Ak81JF9RBZUtpPTPKHtZPJ8h33sraZTKr0rRj%2FfPvnzkxtPCs8epdCQgCSgBJtXtr2FPDl64gu4%2B7iZQ31cmakoFisZ5LbQV6PRQ1g7NaQOXmMBlcBvwdLuofpZ523ZwxOQtk4INwQ%2BCNnuBpPMd3jo5RTv1zT2sJ6QgJZY2GBO%2FnVYSiWlJS7LdAnL6F47YcsI2%2FitAfubnZG%2FUpaB1JmUtfwCaVvbRfAYaSvUSBeZv%2BafDx4Mcp3fkslCeGIGiJ2IfpuEPdVJ7wf5FHqj%2BgfiGNtD73HGNrfEW3BMiIFlpSFRcsMSa9t6F3QiJf3QWZaN3%2BOhP9UlzcpzqZwBZ7jYTh1KkI9zeGxKsGmYWdf9MYzl4omhTG2aI19y2d9dOiXC8jCnkNtu47Gos6zUD6nsqGwGXbLBtxLR2j%2FAhVPZj0WkdqCe08iDSlLmUWDMU7brV0byTiXVb5RRGZsnmcOIBw6rWLYa%2B%2B0lWQ%2FxI1MXn2q%2Fw9gI7KS8b678utZsrkqf8mcEcYtlOIwMPj59L4GOqUBbWW1OWsCYvekeaxeqhv0cvV2kCPoD9Af4saRuwwq3ET7wNH59WtyHP%2BNjX6JXfi1g4DBrFmcCGIesE7aXdmQyyQIlEjQ0SPTUrEfksZeULQl0IRWJtJtxy%2B9t1cu8gh9fYWs%2BoZECIfQRvKlDKTMdnylC1Moefmo%2BzjpTcm3mbETPSLV2azB0wyY85EpmA2rAwSbqOsaFlE81h29AgBg5C9UFvCR&X-Amz-Signature=3734348088b1ffce78226804f4e3ccd90c5f6a236773823f12b2a0cc3b62d722&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5FD6LGW%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIAVszVA6SyUe5tqf82gsaruHp94EjaYWXQUIujDXaAZaAiEA8xwt%2Bd8lyyIEyBalAIaSaAgzOK1TUrUHxMLtheOX0SgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxKyVUegNwjM1pVfircAzigDC5%2BDb2hp%2FwwOJtc%2F%2BpC9pKttWH7XgDZnFmf7hbJKGonxIu69gltCI7QpZhCEoNeYPpXWoZzw8Rik9Vi1CIgbxTp8E4%2FIifzaA%2BgmlLxZ2Ak81JF9RBZUtpPTPKHtZPJ8h33sraZTKr0rRj%2FfPvnzkxtPCs8epdCQgCSgBJtXtr2FPDl64gu4%2B7iZQ31cmakoFisZ5LbQV6PRQ1g7NaQOXmMBlcBvwdLuofpZ523ZwxOQtk4INwQ%2BCNnuBpPMd3jo5RTv1zT2sJ6QgJZY2GBO%2FnVYSiWlJS7LdAnL6F47YcsI2%2FitAfubnZG%2FUpaB1JmUtfwCaVvbRfAYaSvUSBeZv%2BafDx4Mcp3fkslCeGIGiJ2IfpuEPdVJ7wf5FHqj%2BgfiGNtD73HGNrfEW3BMiIFlpSFRcsMSa9t6F3QiJf3QWZaN3%2BOhP9UlzcpzqZwBZ7jYTh1KkI9zeGxKsGmYWdf9MYzl4omhTG2aI19y2d9dOiXC8jCnkNtu47Gos6zUD6nsqGwGXbLBtxLR2j%2FAhVPZj0WkdqCe08iDSlLmUWDMU7brV0byTiXVb5RRGZsnmcOIBw6rWLYa%2B%2B0lWQ%2FxI1MXn2q%2Fw9gI7KS8b678utZsrkqf8mcEcYtlOIwMPj59L4GOqUBbWW1OWsCYvekeaxeqhv0cvV2kCPoD9Af4saRuwwq3ET7wNH59WtyHP%2BNjX6JXfi1g4DBrFmcCGIesE7aXdmQyyQIlEjQ0SPTUrEfksZeULQl0IRWJtJtxy%2B9t1cu8gh9fYWs%2BoZECIfQRvKlDKTMdnylC1Moefmo%2BzjpTcm3mbETPSLV2azB0wyY85EpmA2rAwSbqOsaFlE81h29AgBg5C9UFvCR&X-Amz-Signature=005c61bd460659e5fab21d16c8763f0f1f6288d9d8bb4bbab637da7dd03567d4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
