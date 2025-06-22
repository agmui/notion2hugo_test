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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOUUG7VB%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BS5l8GUBuG32ltq2I91ZP%2FnfezXAm12%2FD6hqtUlPB5AIgKvS%2Fakuuuadc%2BZ38dImh0mFNRjXd2UjFdwRTm6wf2RkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2B5YTTeuCZNFU4ghircA7f90sQAWd4wS6eS7Wf0lKF9Xbt3rktpdsQ%2FI7xu2PZXrvIOt22XExwTzJAOCC0488HjoBD68tswC7IklJOy9yL0EQkesvE3BRGA4MBOPb6tMHzIsCNtwxGs%2BlNn7Rp6cRVpdJ0o26k1URUByHh18gRDKxoX2WUimTYvNMyBbmy%2BcvGuyLEC2eYaSh8oqSa9NZyIZU7cdaO89rxouEqTfjQzZt%2BEs7w3v%2FpT59kxS%2BzfyAtZLyrRnWGrM0S2vfQD9tJz4CJqAxCcw%2BAy82FXNQ4oAGRmLyvZFjt36StqJ2slAMMpzsHuE%2BimamvVPraU%2B87d2d2goqWYHHPBfZTLgEB0pWRSdAeEIKvo1wcPCoScYIqA6c0%2Bn1AVtkfQxoQFWqBIiE0c%2BD5uHvDLI4w5aKCiPTMIfOSoAiMjgidyoBWeqq8WskJwhZuouOILdST1Zp%2BiEeLl8YbUpLzcQMnwTrGNig012544U9JARJye6%2Fwh%2ByQurfE5F9KAQOjQRskxPsMFl3LLKSC2KeOm5rYEGKBT94ZFDTRMBYBJVf8B4ylKzoTIny0eSHctr3jZJdk3sB%2Bb%2F90oazjC41GTIPdVcheWy1QlK8e8%2BH82V5ZR4wSNkmG%2BDan8e3Xln0wCMJLC3sIGOqUBACp8pHnZoMZm5SW%2FCAiDCiiU%2FKj8MdbvC%2FbdJqhx6Xra4YuN6WcEqFIDLUAgQ1opSe4iYAy%2F5tIW3P6poUBbD%2F3RrpnPkq%2Boq01ooxAquH0IC1iOkrxYrB5rAdKzFavMTVFGxdPq8h5fLBpp2S%2BbA6Pve1VgVJKbART47xtuaunhgVPO%2Brwy%2F4uCLsI88pQLU9TQQLFuyLJMKOXhN3ZHVS9C5NEn&X-Amz-Signature=043d1485cebd7ab1d060fd3134e1105b5d1e9c1e2935ec1e1b2ebf568931da2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOUUG7VB%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BS5l8GUBuG32ltq2I91ZP%2FnfezXAm12%2FD6hqtUlPB5AIgKvS%2Fakuuuadc%2BZ38dImh0mFNRjXd2UjFdwRTm6wf2RkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2B5YTTeuCZNFU4ghircA7f90sQAWd4wS6eS7Wf0lKF9Xbt3rktpdsQ%2FI7xu2PZXrvIOt22XExwTzJAOCC0488HjoBD68tswC7IklJOy9yL0EQkesvE3BRGA4MBOPb6tMHzIsCNtwxGs%2BlNn7Rp6cRVpdJ0o26k1URUByHh18gRDKxoX2WUimTYvNMyBbmy%2BcvGuyLEC2eYaSh8oqSa9NZyIZU7cdaO89rxouEqTfjQzZt%2BEs7w3v%2FpT59kxS%2BzfyAtZLyrRnWGrM0S2vfQD9tJz4CJqAxCcw%2BAy82FXNQ4oAGRmLyvZFjt36StqJ2slAMMpzsHuE%2BimamvVPraU%2B87d2d2goqWYHHPBfZTLgEB0pWRSdAeEIKvo1wcPCoScYIqA6c0%2Bn1AVtkfQxoQFWqBIiE0c%2BD5uHvDLI4w5aKCiPTMIfOSoAiMjgidyoBWeqq8WskJwhZuouOILdST1Zp%2BiEeLl8YbUpLzcQMnwTrGNig012544U9JARJye6%2Fwh%2ByQurfE5F9KAQOjQRskxPsMFl3LLKSC2KeOm5rYEGKBT94ZFDTRMBYBJVf8B4ylKzoTIny0eSHctr3jZJdk3sB%2Bb%2F90oazjC41GTIPdVcheWy1QlK8e8%2BH82V5ZR4wSNkmG%2BDan8e3Xln0wCMJLC3sIGOqUBACp8pHnZoMZm5SW%2FCAiDCiiU%2FKj8MdbvC%2FbdJqhx6Xra4YuN6WcEqFIDLUAgQ1opSe4iYAy%2F5tIW3P6poUBbD%2F3RrpnPkq%2Boq01ooxAquH0IC1iOkrxYrB5rAdKzFavMTVFGxdPq8h5fLBpp2S%2BbA6Pve1VgVJKbART47xtuaunhgVPO%2Brwy%2F4uCLsI88pQLU9TQQLFuyLJMKOXhN3ZHVS9C5NEn&X-Amz-Signature=8ee76551c53e9b3142209e7881d4ed8676db9b725dd8b7f87d915efb6aca64d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOUUG7VB%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BS5l8GUBuG32ltq2I91ZP%2FnfezXAm12%2FD6hqtUlPB5AIgKvS%2Fakuuuadc%2BZ38dImh0mFNRjXd2UjFdwRTm6wf2RkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2B5YTTeuCZNFU4ghircA7f90sQAWd4wS6eS7Wf0lKF9Xbt3rktpdsQ%2FI7xu2PZXrvIOt22XExwTzJAOCC0488HjoBD68tswC7IklJOy9yL0EQkesvE3BRGA4MBOPb6tMHzIsCNtwxGs%2BlNn7Rp6cRVpdJ0o26k1URUByHh18gRDKxoX2WUimTYvNMyBbmy%2BcvGuyLEC2eYaSh8oqSa9NZyIZU7cdaO89rxouEqTfjQzZt%2BEs7w3v%2FpT59kxS%2BzfyAtZLyrRnWGrM0S2vfQD9tJz4CJqAxCcw%2BAy82FXNQ4oAGRmLyvZFjt36StqJ2slAMMpzsHuE%2BimamvVPraU%2B87d2d2goqWYHHPBfZTLgEB0pWRSdAeEIKvo1wcPCoScYIqA6c0%2Bn1AVtkfQxoQFWqBIiE0c%2BD5uHvDLI4w5aKCiPTMIfOSoAiMjgidyoBWeqq8WskJwhZuouOILdST1Zp%2BiEeLl8YbUpLzcQMnwTrGNig012544U9JARJye6%2Fwh%2ByQurfE5F9KAQOjQRskxPsMFl3LLKSC2KeOm5rYEGKBT94ZFDTRMBYBJVf8B4ylKzoTIny0eSHctr3jZJdk3sB%2Bb%2F90oazjC41GTIPdVcheWy1QlK8e8%2BH82V5ZR4wSNkmG%2BDan8e3Xln0wCMJLC3sIGOqUBACp8pHnZoMZm5SW%2FCAiDCiiU%2FKj8MdbvC%2FbdJqhx6Xra4YuN6WcEqFIDLUAgQ1opSe4iYAy%2F5tIW3P6poUBbD%2F3RrpnPkq%2Boq01ooxAquH0IC1iOkrxYrB5rAdKzFavMTVFGxdPq8h5fLBpp2S%2BbA6Pve1VgVJKbART47xtuaunhgVPO%2Brwy%2F4uCLsI88pQLU9TQQLFuyLJMKOXhN3ZHVS9C5NEn&X-Amz-Signature=6379e5374679c1488f6abe5a7fc07afc24348f545d59b2f038366b55f7e92094&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOUUG7VB%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BS5l8GUBuG32ltq2I91ZP%2FnfezXAm12%2FD6hqtUlPB5AIgKvS%2Fakuuuadc%2BZ38dImh0mFNRjXd2UjFdwRTm6wf2RkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2B5YTTeuCZNFU4ghircA7f90sQAWd4wS6eS7Wf0lKF9Xbt3rktpdsQ%2FI7xu2PZXrvIOt22XExwTzJAOCC0488HjoBD68tswC7IklJOy9yL0EQkesvE3BRGA4MBOPb6tMHzIsCNtwxGs%2BlNn7Rp6cRVpdJ0o26k1URUByHh18gRDKxoX2WUimTYvNMyBbmy%2BcvGuyLEC2eYaSh8oqSa9NZyIZU7cdaO89rxouEqTfjQzZt%2BEs7w3v%2FpT59kxS%2BzfyAtZLyrRnWGrM0S2vfQD9tJz4CJqAxCcw%2BAy82FXNQ4oAGRmLyvZFjt36StqJ2slAMMpzsHuE%2BimamvVPraU%2B87d2d2goqWYHHPBfZTLgEB0pWRSdAeEIKvo1wcPCoScYIqA6c0%2Bn1AVtkfQxoQFWqBIiE0c%2BD5uHvDLI4w5aKCiPTMIfOSoAiMjgidyoBWeqq8WskJwhZuouOILdST1Zp%2BiEeLl8YbUpLzcQMnwTrGNig012544U9JARJye6%2Fwh%2ByQurfE5F9KAQOjQRskxPsMFl3LLKSC2KeOm5rYEGKBT94ZFDTRMBYBJVf8B4ylKzoTIny0eSHctr3jZJdk3sB%2Bb%2F90oazjC41GTIPdVcheWy1QlK8e8%2BH82V5ZR4wSNkmG%2BDan8e3Xln0wCMJLC3sIGOqUBACp8pHnZoMZm5SW%2FCAiDCiiU%2FKj8MdbvC%2FbdJqhx6Xra4YuN6WcEqFIDLUAgQ1opSe4iYAy%2F5tIW3P6poUBbD%2F3RrpnPkq%2Boq01ooxAquH0IC1iOkrxYrB5rAdKzFavMTVFGxdPq8h5fLBpp2S%2BbA6Pve1VgVJKbART47xtuaunhgVPO%2Brwy%2F4uCLsI88pQLU9TQQLFuyLJMKOXhN3ZHVS9C5NEn&X-Amz-Signature=e728795f35e157f2bed6d2600ed60945e6cbf782c49077355262f8b2898079eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOUUG7VB%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BS5l8GUBuG32ltq2I91ZP%2FnfezXAm12%2FD6hqtUlPB5AIgKvS%2Fakuuuadc%2BZ38dImh0mFNRjXd2UjFdwRTm6wf2RkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2B5YTTeuCZNFU4ghircA7f90sQAWd4wS6eS7Wf0lKF9Xbt3rktpdsQ%2FI7xu2PZXrvIOt22XExwTzJAOCC0488HjoBD68tswC7IklJOy9yL0EQkesvE3BRGA4MBOPb6tMHzIsCNtwxGs%2BlNn7Rp6cRVpdJ0o26k1URUByHh18gRDKxoX2WUimTYvNMyBbmy%2BcvGuyLEC2eYaSh8oqSa9NZyIZU7cdaO89rxouEqTfjQzZt%2BEs7w3v%2FpT59kxS%2BzfyAtZLyrRnWGrM0S2vfQD9tJz4CJqAxCcw%2BAy82FXNQ4oAGRmLyvZFjt36StqJ2slAMMpzsHuE%2BimamvVPraU%2B87d2d2goqWYHHPBfZTLgEB0pWRSdAeEIKvo1wcPCoScYIqA6c0%2Bn1AVtkfQxoQFWqBIiE0c%2BD5uHvDLI4w5aKCiPTMIfOSoAiMjgidyoBWeqq8WskJwhZuouOILdST1Zp%2BiEeLl8YbUpLzcQMnwTrGNig012544U9JARJye6%2Fwh%2ByQurfE5F9KAQOjQRskxPsMFl3LLKSC2KeOm5rYEGKBT94ZFDTRMBYBJVf8B4ylKzoTIny0eSHctr3jZJdk3sB%2Bb%2F90oazjC41GTIPdVcheWy1QlK8e8%2BH82V5ZR4wSNkmG%2BDan8e3Xln0wCMJLC3sIGOqUBACp8pHnZoMZm5SW%2FCAiDCiiU%2FKj8MdbvC%2FbdJqhx6Xra4YuN6WcEqFIDLUAgQ1opSe4iYAy%2F5tIW3P6poUBbD%2F3RrpnPkq%2Boq01ooxAquH0IC1iOkrxYrB5rAdKzFavMTVFGxdPq8h5fLBpp2S%2BbA6Pve1VgVJKbART47xtuaunhgVPO%2Brwy%2F4uCLsI88pQLU9TQQLFuyLJMKOXhN3ZHVS9C5NEn&X-Amz-Signature=086cad3621d2d831832a1a0c96c33ddf87db69befe21a0d83660f16e52098f0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOUUG7VB%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BS5l8GUBuG32ltq2I91ZP%2FnfezXAm12%2FD6hqtUlPB5AIgKvS%2Fakuuuadc%2BZ38dImh0mFNRjXd2UjFdwRTm6wf2RkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2B5YTTeuCZNFU4ghircA7f90sQAWd4wS6eS7Wf0lKF9Xbt3rktpdsQ%2FI7xu2PZXrvIOt22XExwTzJAOCC0488HjoBD68tswC7IklJOy9yL0EQkesvE3BRGA4MBOPb6tMHzIsCNtwxGs%2BlNn7Rp6cRVpdJ0o26k1URUByHh18gRDKxoX2WUimTYvNMyBbmy%2BcvGuyLEC2eYaSh8oqSa9NZyIZU7cdaO89rxouEqTfjQzZt%2BEs7w3v%2FpT59kxS%2BzfyAtZLyrRnWGrM0S2vfQD9tJz4CJqAxCcw%2BAy82FXNQ4oAGRmLyvZFjt36StqJ2slAMMpzsHuE%2BimamvVPraU%2B87d2d2goqWYHHPBfZTLgEB0pWRSdAeEIKvo1wcPCoScYIqA6c0%2Bn1AVtkfQxoQFWqBIiE0c%2BD5uHvDLI4w5aKCiPTMIfOSoAiMjgidyoBWeqq8WskJwhZuouOILdST1Zp%2BiEeLl8YbUpLzcQMnwTrGNig012544U9JARJye6%2Fwh%2ByQurfE5F9KAQOjQRskxPsMFl3LLKSC2KeOm5rYEGKBT94ZFDTRMBYBJVf8B4ylKzoTIny0eSHctr3jZJdk3sB%2Bb%2F90oazjC41GTIPdVcheWy1QlK8e8%2BH82V5ZR4wSNkmG%2BDan8e3Xln0wCMJLC3sIGOqUBACp8pHnZoMZm5SW%2FCAiDCiiU%2FKj8MdbvC%2FbdJqhx6Xra4YuN6WcEqFIDLUAgQ1opSe4iYAy%2F5tIW3P6poUBbD%2F3RrpnPkq%2Boq01ooxAquH0IC1iOkrxYrB5rAdKzFavMTVFGxdPq8h5fLBpp2S%2BbA6Pve1VgVJKbART47xtuaunhgVPO%2Brwy%2F4uCLsI88pQLU9TQQLFuyLJMKOXhN3ZHVS9C5NEn&X-Amz-Signature=cf3d4432cc709a3c30b8185522ff841ac62d99be1767d330126122e8ea1096b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOUUG7VB%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BS5l8GUBuG32ltq2I91ZP%2FnfezXAm12%2FD6hqtUlPB5AIgKvS%2Fakuuuadc%2BZ38dImh0mFNRjXd2UjFdwRTm6wf2RkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2B5YTTeuCZNFU4ghircA7f90sQAWd4wS6eS7Wf0lKF9Xbt3rktpdsQ%2FI7xu2PZXrvIOt22XExwTzJAOCC0488HjoBD68tswC7IklJOy9yL0EQkesvE3BRGA4MBOPb6tMHzIsCNtwxGs%2BlNn7Rp6cRVpdJ0o26k1URUByHh18gRDKxoX2WUimTYvNMyBbmy%2BcvGuyLEC2eYaSh8oqSa9NZyIZU7cdaO89rxouEqTfjQzZt%2BEs7w3v%2FpT59kxS%2BzfyAtZLyrRnWGrM0S2vfQD9tJz4CJqAxCcw%2BAy82FXNQ4oAGRmLyvZFjt36StqJ2slAMMpzsHuE%2BimamvVPraU%2B87d2d2goqWYHHPBfZTLgEB0pWRSdAeEIKvo1wcPCoScYIqA6c0%2Bn1AVtkfQxoQFWqBIiE0c%2BD5uHvDLI4w5aKCiPTMIfOSoAiMjgidyoBWeqq8WskJwhZuouOILdST1Zp%2BiEeLl8YbUpLzcQMnwTrGNig012544U9JARJye6%2Fwh%2ByQurfE5F9KAQOjQRskxPsMFl3LLKSC2KeOm5rYEGKBT94ZFDTRMBYBJVf8B4ylKzoTIny0eSHctr3jZJdk3sB%2Bb%2F90oazjC41GTIPdVcheWy1QlK8e8%2BH82V5ZR4wSNkmG%2BDan8e3Xln0wCMJLC3sIGOqUBACp8pHnZoMZm5SW%2FCAiDCiiU%2FKj8MdbvC%2FbdJqhx6Xra4YuN6WcEqFIDLUAgQ1opSe4iYAy%2F5tIW3P6poUBbD%2F3RrpnPkq%2Boq01ooxAquH0IC1iOkrxYrB5rAdKzFavMTVFGxdPq8h5fLBpp2S%2BbA6Pve1VgVJKbART47xtuaunhgVPO%2Brwy%2F4uCLsI88pQLU9TQQLFuyLJMKOXhN3ZHVS9C5NEn&X-Amz-Signature=4a19ecfd130d0dabe3bd63d24ee873aa5601a093ba821c039481627efbe66c51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOUUG7VB%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BS5l8GUBuG32ltq2I91ZP%2FnfezXAm12%2FD6hqtUlPB5AIgKvS%2Fakuuuadc%2BZ38dImh0mFNRjXd2UjFdwRTm6wf2RkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2B5YTTeuCZNFU4ghircA7f90sQAWd4wS6eS7Wf0lKF9Xbt3rktpdsQ%2FI7xu2PZXrvIOt22XExwTzJAOCC0488HjoBD68tswC7IklJOy9yL0EQkesvE3BRGA4MBOPb6tMHzIsCNtwxGs%2BlNn7Rp6cRVpdJ0o26k1URUByHh18gRDKxoX2WUimTYvNMyBbmy%2BcvGuyLEC2eYaSh8oqSa9NZyIZU7cdaO89rxouEqTfjQzZt%2BEs7w3v%2FpT59kxS%2BzfyAtZLyrRnWGrM0S2vfQD9tJz4CJqAxCcw%2BAy82FXNQ4oAGRmLyvZFjt36StqJ2slAMMpzsHuE%2BimamvVPraU%2B87d2d2goqWYHHPBfZTLgEB0pWRSdAeEIKvo1wcPCoScYIqA6c0%2Bn1AVtkfQxoQFWqBIiE0c%2BD5uHvDLI4w5aKCiPTMIfOSoAiMjgidyoBWeqq8WskJwhZuouOILdST1Zp%2BiEeLl8YbUpLzcQMnwTrGNig012544U9JARJye6%2Fwh%2ByQurfE5F9KAQOjQRskxPsMFl3LLKSC2KeOm5rYEGKBT94ZFDTRMBYBJVf8B4ylKzoTIny0eSHctr3jZJdk3sB%2Bb%2F90oazjC41GTIPdVcheWy1QlK8e8%2BH82V5ZR4wSNkmG%2BDan8e3Xln0wCMJLC3sIGOqUBACp8pHnZoMZm5SW%2FCAiDCiiU%2FKj8MdbvC%2FbdJqhx6Xra4YuN6WcEqFIDLUAgQ1opSe4iYAy%2F5tIW3P6poUBbD%2F3RrpnPkq%2Boq01ooxAquH0IC1iOkrxYrB5rAdKzFavMTVFGxdPq8h5fLBpp2S%2BbA6Pve1VgVJKbART47xtuaunhgVPO%2Brwy%2F4uCLsI88pQLU9TQQLFuyLJMKOXhN3ZHVS9C5NEn&X-Amz-Signature=275edba5428770c8891645a8de1c7df6ea1f70dc77106a0bf61058fac15ba298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
