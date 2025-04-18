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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VGDG7DB%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T160940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnZOb%2FsqvUCp599CnYNwPLA3fJ5pRuL%2Fyu87DmUW14wwIgbdgmfxCw22S0ZeZuocgm3P8wnKr7%2Boo7YKG48b2SZFEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAD9aJYR5Si%2B2O%2BRyircAz2YGulEJvZOzfep6mAJJ%2BUOcxAftrDXKviF%2FEiXWWBKQz2051YUPDz6TSFqTL7S%2BWKNHJ6aWsqa%2B9vkScrr17Co4UAM1Q7NkUjje1SQ3fcz4U035Nb72Ase3UGRC1ackRDu81tGQ5c4fehPtoLH1UxB4AP%2BhtUOIy8VWcjXelyBwb2Wv4S4YoMpDGYZtQqdWA7qEIcN6IQsdKuEPxpb5XlChEMa3%2BIU1d52MgEtMKkkY1AsDS7w850DJFIAN1c9gpWJyMjozuUeo1BmXaSV3o2NmtfWgGMNtRvi9UQA4%2BU%2BNVBAfjVvOk1eHpvw0wcxIyp%2FY8mq6E08iNIx85vCz0Oxggsxbzj%2FPwfcvtvw9DwsHyeeSLiqyJ8N883ykRziRnd5RUifdQdBtICrDRxInjKnKHyhzHhRYPDMyXFedmICLMkvBNq7PlOHcmpqhGa8b5L7tgwvSvM%2FYzwzic6wIjAUJ5tzOon%2BHeeO%2BXGwiiNLjjFXicmHwIAniSCE8vsOaAj8%2FJZ%2B%2FbxyGyuo6wmUrCfHgrxyvUiIqZNR2LioaMBOiNJ7bHwTlXcuQFRpYw3IndumzMGNK86jf35eUtg9xm%2FeK%2FqlLFRT61a3hU0xlhy81LR0f621FZZxH4kAMOTeicAGOqUBlagybtgpfKvROLA0G2uwg2cwzQYYGtt6HKEO1FABSJzY%2B9tBRPSlkd5Auy0Mw%2F4sSg%2BGrVYE6t4V2WUXXqiMUTjoKZ1Bd7LyUkQN8wUNFpCT8uoQud2lQbDmwqU7DF5%2BWjXSNx8z4mYBa4GEe%2F7h9arb%2B2bZE%2FVnwqLlKRsIav%2F2%2F4%2F0OBZEkMSpmno%2F0HQd6c8rWfcqpycNvkcpyiNaMbgC2a7P&X-Amz-Signature=a4fbfaa500de8205c65f44796ee90c2aee3be7089f24d651b69b7b0185823004&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VGDG7DB%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T160940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnZOb%2FsqvUCp599CnYNwPLA3fJ5pRuL%2Fyu87DmUW14wwIgbdgmfxCw22S0ZeZuocgm3P8wnKr7%2Boo7YKG48b2SZFEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAD9aJYR5Si%2B2O%2BRyircAz2YGulEJvZOzfep6mAJJ%2BUOcxAftrDXKviF%2FEiXWWBKQz2051YUPDz6TSFqTL7S%2BWKNHJ6aWsqa%2B9vkScrr17Co4UAM1Q7NkUjje1SQ3fcz4U035Nb72Ase3UGRC1ackRDu81tGQ5c4fehPtoLH1UxB4AP%2BhtUOIy8VWcjXelyBwb2Wv4S4YoMpDGYZtQqdWA7qEIcN6IQsdKuEPxpb5XlChEMa3%2BIU1d52MgEtMKkkY1AsDS7w850DJFIAN1c9gpWJyMjozuUeo1BmXaSV3o2NmtfWgGMNtRvi9UQA4%2BU%2BNVBAfjVvOk1eHpvw0wcxIyp%2FY8mq6E08iNIx85vCz0Oxggsxbzj%2FPwfcvtvw9DwsHyeeSLiqyJ8N883ykRziRnd5RUifdQdBtICrDRxInjKnKHyhzHhRYPDMyXFedmICLMkvBNq7PlOHcmpqhGa8b5L7tgwvSvM%2FYzwzic6wIjAUJ5tzOon%2BHeeO%2BXGwiiNLjjFXicmHwIAniSCE8vsOaAj8%2FJZ%2B%2FbxyGyuo6wmUrCfHgrxyvUiIqZNR2LioaMBOiNJ7bHwTlXcuQFRpYw3IndumzMGNK86jf35eUtg9xm%2FeK%2FqlLFRT61a3hU0xlhy81LR0f621FZZxH4kAMOTeicAGOqUBlagybtgpfKvROLA0G2uwg2cwzQYYGtt6HKEO1FABSJzY%2B9tBRPSlkd5Auy0Mw%2F4sSg%2BGrVYE6t4V2WUXXqiMUTjoKZ1Bd7LyUkQN8wUNFpCT8uoQud2lQbDmwqU7DF5%2BWjXSNx8z4mYBa4GEe%2F7h9arb%2B2bZE%2FVnwqLlKRsIav%2F2%2F4%2F0OBZEkMSpmno%2F0HQd6c8rWfcqpycNvkcpyiNaMbgC2a7P&X-Amz-Signature=ebfc7308943ec8bf8dbd5cb63e3d6e92a246d51c63e57cc7b09d085db9ff78ae&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VGDG7DB%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T160940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnZOb%2FsqvUCp599CnYNwPLA3fJ5pRuL%2Fyu87DmUW14wwIgbdgmfxCw22S0ZeZuocgm3P8wnKr7%2Boo7YKG48b2SZFEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAD9aJYR5Si%2B2O%2BRyircAz2YGulEJvZOzfep6mAJJ%2BUOcxAftrDXKviF%2FEiXWWBKQz2051YUPDz6TSFqTL7S%2BWKNHJ6aWsqa%2B9vkScrr17Co4UAM1Q7NkUjje1SQ3fcz4U035Nb72Ase3UGRC1ackRDu81tGQ5c4fehPtoLH1UxB4AP%2BhtUOIy8VWcjXelyBwb2Wv4S4YoMpDGYZtQqdWA7qEIcN6IQsdKuEPxpb5XlChEMa3%2BIU1d52MgEtMKkkY1AsDS7w850DJFIAN1c9gpWJyMjozuUeo1BmXaSV3o2NmtfWgGMNtRvi9UQA4%2BU%2BNVBAfjVvOk1eHpvw0wcxIyp%2FY8mq6E08iNIx85vCz0Oxggsxbzj%2FPwfcvtvw9DwsHyeeSLiqyJ8N883ykRziRnd5RUifdQdBtICrDRxInjKnKHyhzHhRYPDMyXFedmICLMkvBNq7PlOHcmpqhGa8b5L7tgwvSvM%2FYzwzic6wIjAUJ5tzOon%2BHeeO%2BXGwiiNLjjFXicmHwIAniSCE8vsOaAj8%2FJZ%2B%2FbxyGyuo6wmUrCfHgrxyvUiIqZNR2LioaMBOiNJ7bHwTlXcuQFRpYw3IndumzMGNK86jf35eUtg9xm%2FeK%2FqlLFRT61a3hU0xlhy81LR0f621FZZxH4kAMOTeicAGOqUBlagybtgpfKvROLA0G2uwg2cwzQYYGtt6HKEO1FABSJzY%2B9tBRPSlkd5Auy0Mw%2F4sSg%2BGrVYE6t4V2WUXXqiMUTjoKZ1Bd7LyUkQN8wUNFpCT8uoQud2lQbDmwqU7DF5%2BWjXSNx8z4mYBa4GEe%2F7h9arb%2B2bZE%2FVnwqLlKRsIav%2F2%2F4%2F0OBZEkMSpmno%2F0HQd6c8rWfcqpycNvkcpyiNaMbgC2a7P&X-Amz-Signature=c832ee7575e11496f9169d46d9e4705e0f66efeb39059fa862eb429da39c035f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VGDG7DB%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T160940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnZOb%2FsqvUCp599CnYNwPLA3fJ5pRuL%2Fyu87DmUW14wwIgbdgmfxCw22S0ZeZuocgm3P8wnKr7%2Boo7YKG48b2SZFEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAD9aJYR5Si%2B2O%2BRyircAz2YGulEJvZOzfep6mAJJ%2BUOcxAftrDXKviF%2FEiXWWBKQz2051YUPDz6TSFqTL7S%2BWKNHJ6aWsqa%2B9vkScrr17Co4UAM1Q7NkUjje1SQ3fcz4U035Nb72Ase3UGRC1ackRDu81tGQ5c4fehPtoLH1UxB4AP%2BhtUOIy8VWcjXelyBwb2Wv4S4YoMpDGYZtQqdWA7qEIcN6IQsdKuEPxpb5XlChEMa3%2BIU1d52MgEtMKkkY1AsDS7w850DJFIAN1c9gpWJyMjozuUeo1BmXaSV3o2NmtfWgGMNtRvi9UQA4%2BU%2BNVBAfjVvOk1eHpvw0wcxIyp%2FY8mq6E08iNIx85vCz0Oxggsxbzj%2FPwfcvtvw9DwsHyeeSLiqyJ8N883ykRziRnd5RUifdQdBtICrDRxInjKnKHyhzHhRYPDMyXFedmICLMkvBNq7PlOHcmpqhGa8b5L7tgwvSvM%2FYzwzic6wIjAUJ5tzOon%2BHeeO%2BXGwiiNLjjFXicmHwIAniSCE8vsOaAj8%2FJZ%2B%2FbxyGyuo6wmUrCfHgrxyvUiIqZNR2LioaMBOiNJ7bHwTlXcuQFRpYw3IndumzMGNK86jf35eUtg9xm%2FeK%2FqlLFRT61a3hU0xlhy81LR0f621FZZxH4kAMOTeicAGOqUBlagybtgpfKvROLA0G2uwg2cwzQYYGtt6HKEO1FABSJzY%2B9tBRPSlkd5Auy0Mw%2F4sSg%2BGrVYE6t4V2WUXXqiMUTjoKZ1Bd7LyUkQN8wUNFpCT8uoQud2lQbDmwqU7DF5%2BWjXSNx8z4mYBa4GEe%2F7h9arb%2B2bZE%2FVnwqLlKRsIav%2F2%2F4%2F0OBZEkMSpmno%2F0HQd6c8rWfcqpycNvkcpyiNaMbgC2a7P&X-Amz-Signature=12d0c322758d6b7fa6cea5eb728c207d4c7b22d08089d141eed19df69107d704&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VGDG7DB%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T160940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnZOb%2FsqvUCp599CnYNwPLA3fJ5pRuL%2Fyu87DmUW14wwIgbdgmfxCw22S0ZeZuocgm3P8wnKr7%2Boo7YKG48b2SZFEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAD9aJYR5Si%2B2O%2BRyircAz2YGulEJvZOzfep6mAJJ%2BUOcxAftrDXKviF%2FEiXWWBKQz2051YUPDz6TSFqTL7S%2BWKNHJ6aWsqa%2B9vkScrr17Co4UAM1Q7NkUjje1SQ3fcz4U035Nb72Ase3UGRC1ackRDu81tGQ5c4fehPtoLH1UxB4AP%2BhtUOIy8VWcjXelyBwb2Wv4S4YoMpDGYZtQqdWA7qEIcN6IQsdKuEPxpb5XlChEMa3%2BIU1d52MgEtMKkkY1AsDS7w850DJFIAN1c9gpWJyMjozuUeo1BmXaSV3o2NmtfWgGMNtRvi9UQA4%2BU%2BNVBAfjVvOk1eHpvw0wcxIyp%2FY8mq6E08iNIx85vCz0Oxggsxbzj%2FPwfcvtvw9DwsHyeeSLiqyJ8N883ykRziRnd5RUifdQdBtICrDRxInjKnKHyhzHhRYPDMyXFedmICLMkvBNq7PlOHcmpqhGa8b5L7tgwvSvM%2FYzwzic6wIjAUJ5tzOon%2BHeeO%2BXGwiiNLjjFXicmHwIAniSCE8vsOaAj8%2FJZ%2B%2FbxyGyuo6wmUrCfHgrxyvUiIqZNR2LioaMBOiNJ7bHwTlXcuQFRpYw3IndumzMGNK86jf35eUtg9xm%2FeK%2FqlLFRT61a3hU0xlhy81LR0f621FZZxH4kAMOTeicAGOqUBlagybtgpfKvROLA0G2uwg2cwzQYYGtt6HKEO1FABSJzY%2B9tBRPSlkd5Auy0Mw%2F4sSg%2BGrVYE6t4V2WUXXqiMUTjoKZ1Bd7LyUkQN8wUNFpCT8uoQud2lQbDmwqU7DF5%2BWjXSNx8z4mYBa4GEe%2F7h9arb%2B2bZE%2FVnwqLlKRsIav%2F2%2F4%2F0OBZEkMSpmno%2F0HQd6c8rWfcqpycNvkcpyiNaMbgC2a7P&X-Amz-Signature=99a3ebaebcdd469db493dd7b54c33e747644a0b415da8246e193ec8601a81162&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VGDG7DB%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T160940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnZOb%2FsqvUCp599CnYNwPLA3fJ5pRuL%2Fyu87DmUW14wwIgbdgmfxCw22S0ZeZuocgm3P8wnKr7%2Boo7YKG48b2SZFEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAD9aJYR5Si%2B2O%2BRyircAz2YGulEJvZOzfep6mAJJ%2BUOcxAftrDXKviF%2FEiXWWBKQz2051YUPDz6TSFqTL7S%2BWKNHJ6aWsqa%2B9vkScrr17Co4UAM1Q7NkUjje1SQ3fcz4U035Nb72Ase3UGRC1ackRDu81tGQ5c4fehPtoLH1UxB4AP%2BhtUOIy8VWcjXelyBwb2Wv4S4YoMpDGYZtQqdWA7qEIcN6IQsdKuEPxpb5XlChEMa3%2BIU1d52MgEtMKkkY1AsDS7w850DJFIAN1c9gpWJyMjozuUeo1BmXaSV3o2NmtfWgGMNtRvi9UQA4%2BU%2BNVBAfjVvOk1eHpvw0wcxIyp%2FY8mq6E08iNIx85vCz0Oxggsxbzj%2FPwfcvtvw9DwsHyeeSLiqyJ8N883ykRziRnd5RUifdQdBtICrDRxInjKnKHyhzHhRYPDMyXFedmICLMkvBNq7PlOHcmpqhGa8b5L7tgwvSvM%2FYzwzic6wIjAUJ5tzOon%2BHeeO%2BXGwiiNLjjFXicmHwIAniSCE8vsOaAj8%2FJZ%2B%2FbxyGyuo6wmUrCfHgrxyvUiIqZNR2LioaMBOiNJ7bHwTlXcuQFRpYw3IndumzMGNK86jf35eUtg9xm%2FeK%2FqlLFRT61a3hU0xlhy81LR0f621FZZxH4kAMOTeicAGOqUBlagybtgpfKvROLA0G2uwg2cwzQYYGtt6HKEO1FABSJzY%2B9tBRPSlkd5Auy0Mw%2F4sSg%2BGrVYE6t4V2WUXXqiMUTjoKZ1Bd7LyUkQN8wUNFpCT8uoQud2lQbDmwqU7DF5%2BWjXSNx8z4mYBa4GEe%2F7h9arb%2B2bZE%2FVnwqLlKRsIav%2F2%2F4%2F0OBZEkMSpmno%2F0HQd6c8rWfcqpycNvkcpyiNaMbgC2a7P&X-Amz-Signature=7dfc8d61e46ef9ca56229b51ba4479bcb0794b80d42e8e4dbecaa29d15fcb1b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VGDG7DB%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T160940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnZOb%2FsqvUCp599CnYNwPLA3fJ5pRuL%2Fyu87DmUW14wwIgbdgmfxCw22S0ZeZuocgm3P8wnKr7%2Boo7YKG48b2SZFEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAD9aJYR5Si%2B2O%2BRyircAz2YGulEJvZOzfep6mAJJ%2BUOcxAftrDXKviF%2FEiXWWBKQz2051YUPDz6TSFqTL7S%2BWKNHJ6aWsqa%2B9vkScrr17Co4UAM1Q7NkUjje1SQ3fcz4U035Nb72Ase3UGRC1ackRDu81tGQ5c4fehPtoLH1UxB4AP%2BhtUOIy8VWcjXelyBwb2Wv4S4YoMpDGYZtQqdWA7qEIcN6IQsdKuEPxpb5XlChEMa3%2BIU1d52MgEtMKkkY1AsDS7w850DJFIAN1c9gpWJyMjozuUeo1BmXaSV3o2NmtfWgGMNtRvi9UQA4%2BU%2BNVBAfjVvOk1eHpvw0wcxIyp%2FY8mq6E08iNIx85vCz0Oxggsxbzj%2FPwfcvtvw9DwsHyeeSLiqyJ8N883ykRziRnd5RUifdQdBtICrDRxInjKnKHyhzHhRYPDMyXFedmICLMkvBNq7PlOHcmpqhGa8b5L7tgwvSvM%2FYzwzic6wIjAUJ5tzOon%2BHeeO%2BXGwiiNLjjFXicmHwIAniSCE8vsOaAj8%2FJZ%2B%2FbxyGyuo6wmUrCfHgrxyvUiIqZNR2LioaMBOiNJ7bHwTlXcuQFRpYw3IndumzMGNK86jf35eUtg9xm%2FeK%2FqlLFRT61a3hU0xlhy81LR0f621FZZxH4kAMOTeicAGOqUBlagybtgpfKvROLA0G2uwg2cwzQYYGtt6HKEO1FABSJzY%2B9tBRPSlkd5Auy0Mw%2F4sSg%2BGrVYE6t4V2WUXXqiMUTjoKZ1Bd7LyUkQN8wUNFpCT8uoQud2lQbDmwqU7DF5%2BWjXSNx8z4mYBa4GEe%2F7h9arb%2B2bZE%2FVnwqLlKRsIav%2F2%2F4%2F0OBZEkMSpmno%2F0HQd6c8rWfcqpycNvkcpyiNaMbgC2a7P&X-Amz-Signature=8bf2e898698d02c4984f5163255cb4c1144d8e31bbbc43c9daf5739a469f1990&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VGDG7DB%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T160940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnZOb%2FsqvUCp599CnYNwPLA3fJ5pRuL%2Fyu87DmUW14wwIgbdgmfxCw22S0ZeZuocgm3P8wnKr7%2Boo7YKG48b2SZFEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAD9aJYR5Si%2B2O%2BRyircAz2YGulEJvZOzfep6mAJJ%2BUOcxAftrDXKviF%2FEiXWWBKQz2051YUPDz6TSFqTL7S%2BWKNHJ6aWsqa%2B9vkScrr17Co4UAM1Q7NkUjje1SQ3fcz4U035Nb72Ase3UGRC1ackRDu81tGQ5c4fehPtoLH1UxB4AP%2BhtUOIy8VWcjXelyBwb2Wv4S4YoMpDGYZtQqdWA7qEIcN6IQsdKuEPxpb5XlChEMa3%2BIU1d52MgEtMKkkY1AsDS7w850DJFIAN1c9gpWJyMjozuUeo1BmXaSV3o2NmtfWgGMNtRvi9UQA4%2BU%2BNVBAfjVvOk1eHpvw0wcxIyp%2FY8mq6E08iNIx85vCz0Oxggsxbzj%2FPwfcvtvw9DwsHyeeSLiqyJ8N883ykRziRnd5RUifdQdBtICrDRxInjKnKHyhzHhRYPDMyXFedmICLMkvBNq7PlOHcmpqhGa8b5L7tgwvSvM%2FYzwzic6wIjAUJ5tzOon%2BHeeO%2BXGwiiNLjjFXicmHwIAniSCE8vsOaAj8%2FJZ%2B%2FbxyGyuo6wmUrCfHgrxyvUiIqZNR2LioaMBOiNJ7bHwTlXcuQFRpYw3IndumzMGNK86jf35eUtg9xm%2FeK%2FqlLFRT61a3hU0xlhy81LR0f621FZZxH4kAMOTeicAGOqUBlagybtgpfKvROLA0G2uwg2cwzQYYGtt6HKEO1FABSJzY%2B9tBRPSlkd5Auy0Mw%2F4sSg%2BGrVYE6t4V2WUXXqiMUTjoKZ1Bd7LyUkQN8wUNFpCT8uoQud2lQbDmwqU7DF5%2BWjXSNx8z4mYBa4GEe%2F7h9arb%2B2bZE%2FVnwqLlKRsIav%2F2%2F4%2F0OBZEkMSpmno%2F0HQd6c8rWfcqpycNvkcpyiNaMbgC2a7P&X-Amz-Signature=e0cadadea8cdce59bb18e564c20d6a6aeea5aeb4ceb30eedfc225cd034b5d0c6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
