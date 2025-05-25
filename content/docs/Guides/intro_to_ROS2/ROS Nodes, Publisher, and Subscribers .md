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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CEAGI2N%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIAnta%2BZDfyGWFamuAfJ2kxL2%2F%2BNnHIon2fQ2DXL3olFHAiEA2%2B5JhtbinZsgJaDtEaauaVKXQ82Tyot0N%2FJlDszeRSgq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDKsAUpfQ203RnJW9gircA%2BBtX7GC%2FRL4is0twbCM03QnqFH%2BWNV5cdO0sQlqvvOzj04mjXY0XGlnmx7ZNsCKRaYiV84vngZFeKGveWthTpl8tilcWwAIxEyd3jsgfUx3Vyslep8Pg3Ub%2BaAkBUMcpQnHYPqiJ%2Bkf6BY3FqokmWolKsR0HJXx7lUuoRdVvG5U%2BPQNBmM626VNDyj8QG%2FNPDSh8dlx0tG%2F8dTy8p2nr8L5fmB%2FCMjfprfi3Kvfb1nacWuTnGZrmHG7C9T14oIYj%2FxgLW%2BwukWS%2BWnMyI4l6qmAeY6uYaeCph7kDQtbdNzfB7nqC%2FRMtvr8iPFE%2FvWwzL8ogwSMCt%2FeJfP1yFAg0MOrgASwZyqn3TVxIZG%2FKtVbCz7pvELZpv%2F0ELnrkepNpeBsO5tFZ3EweuwIbe1UjMip%2BlO9xjfhZ%2BtQ41uaW9J7iZWl5xQ4PgJCbz1qBFS2Hun7Ld16K79K%2BALV50JAXLmqSJ6MNAODsvfz1DvFPJrLr2jCpphclFZeVve4Jns2H5tk%2FqkIlAEixjShtCcHgO0k6CI4rA5PfbUitxBTbbRFTlnQebPwuegy6he83ZQ0gksHhryPQ489DsYPg%2FYjsQs%2FpJD242tiHcdKl%2BKFveOmEhTqUyKm7NFcyNsQMMqmysEGOqUBSNQO0DGNBaiH0YkwOAOH2RjPCyIb2Spav4dYARhgsMYIeFcv%2BadM%2FWb7liwerfQZpYQH24Mg%2FbdvgSUa96HNfYwuidI573J9TXazqrH%2B4DmjxGPv8M3RWpPX67iSb7XxFZLuFJiB%2FECPeH1C0C9P7p%2FQzo%2BmezMWY5XqZBk%2Fa%2BXbwFWwsQfS3Nd83jKP%2FpcVxB6680Ct%2BCPs8YeiQD2ZW8EmR4U9&X-Amz-Signature=3faf05bb4aba4ac14fa89a7f15ae9e8908b40a2be169715da4de74886c80d82b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CEAGI2N%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIAnta%2BZDfyGWFamuAfJ2kxL2%2F%2BNnHIon2fQ2DXL3olFHAiEA2%2B5JhtbinZsgJaDtEaauaVKXQ82Tyot0N%2FJlDszeRSgq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDKsAUpfQ203RnJW9gircA%2BBtX7GC%2FRL4is0twbCM03QnqFH%2BWNV5cdO0sQlqvvOzj04mjXY0XGlnmx7ZNsCKRaYiV84vngZFeKGveWthTpl8tilcWwAIxEyd3jsgfUx3Vyslep8Pg3Ub%2BaAkBUMcpQnHYPqiJ%2Bkf6BY3FqokmWolKsR0HJXx7lUuoRdVvG5U%2BPQNBmM626VNDyj8QG%2FNPDSh8dlx0tG%2F8dTy8p2nr8L5fmB%2FCMjfprfi3Kvfb1nacWuTnGZrmHG7C9T14oIYj%2FxgLW%2BwukWS%2BWnMyI4l6qmAeY6uYaeCph7kDQtbdNzfB7nqC%2FRMtvr8iPFE%2FvWwzL8ogwSMCt%2FeJfP1yFAg0MOrgASwZyqn3TVxIZG%2FKtVbCz7pvELZpv%2F0ELnrkepNpeBsO5tFZ3EweuwIbe1UjMip%2BlO9xjfhZ%2BtQ41uaW9J7iZWl5xQ4PgJCbz1qBFS2Hun7Ld16K79K%2BALV50JAXLmqSJ6MNAODsvfz1DvFPJrLr2jCpphclFZeVve4Jns2H5tk%2FqkIlAEixjShtCcHgO0k6CI4rA5PfbUitxBTbbRFTlnQebPwuegy6he83ZQ0gksHhryPQ489DsYPg%2FYjsQs%2FpJD242tiHcdKl%2BKFveOmEhTqUyKm7NFcyNsQMMqmysEGOqUBSNQO0DGNBaiH0YkwOAOH2RjPCyIb2Spav4dYARhgsMYIeFcv%2BadM%2FWb7liwerfQZpYQH24Mg%2FbdvgSUa96HNfYwuidI573J9TXazqrH%2B4DmjxGPv8M3RWpPX67iSb7XxFZLuFJiB%2FECPeH1C0C9P7p%2FQzo%2BmezMWY5XqZBk%2Fa%2BXbwFWwsQfS3Nd83jKP%2FpcVxB6680Ct%2BCPs8YeiQD2ZW8EmR4U9&X-Amz-Signature=32d209f981d84ce09674bbc37949978772aaecbdb5fead93d575fe1ca8cc7d31&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CEAGI2N%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIAnta%2BZDfyGWFamuAfJ2kxL2%2F%2BNnHIon2fQ2DXL3olFHAiEA2%2B5JhtbinZsgJaDtEaauaVKXQ82Tyot0N%2FJlDszeRSgq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDKsAUpfQ203RnJW9gircA%2BBtX7GC%2FRL4is0twbCM03QnqFH%2BWNV5cdO0sQlqvvOzj04mjXY0XGlnmx7ZNsCKRaYiV84vngZFeKGveWthTpl8tilcWwAIxEyd3jsgfUx3Vyslep8Pg3Ub%2BaAkBUMcpQnHYPqiJ%2Bkf6BY3FqokmWolKsR0HJXx7lUuoRdVvG5U%2BPQNBmM626VNDyj8QG%2FNPDSh8dlx0tG%2F8dTy8p2nr8L5fmB%2FCMjfprfi3Kvfb1nacWuTnGZrmHG7C9T14oIYj%2FxgLW%2BwukWS%2BWnMyI4l6qmAeY6uYaeCph7kDQtbdNzfB7nqC%2FRMtvr8iPFE%2FvWwzL8ogwSMCt%2FeJfP1yFAg0MOrgASwZyqn3TVxIZG%2FKtVbCz7pvELZpv%2F0ELnrkepNpeBsO5tFZ3EweuwIbe1UjMip%2BlO9xjfhZ%2BtQ41uaW9J7iZWl5xQ4PgJCbz1qBFS2Hun7Ld16K79K%2BALV50JAXLmqSJ6MNAODsvfz1DvFPJrLr2jCpphclFZeVve4Jns2H5tk%2FqkIlAEixjShtCcHgO0k6CI4rA5PfbUitxBTbbRFTlnQebPwuegy6he83ZQ0gksHhryPQ489DsYPg%2FYjsQs%2FpJD242tiHcdKl%2BKFveOmEhTqUyKm7NFcyNsQMMqmysEGOqUBSNQO0DGNBaiH0YkwOAOH2RjPCyIb2Spav4dYARhgsMYIeFcv%2BadM%2FWb7liwerfQZpYQH24Mg%2FbdvgSUa96HNfYwuidI573J9TXazqrH%2B4DmjxGPv8M3RWpPX67iSb7XxFZLuFJiB%2FECPeH1C0C9P7p%2FQzo%2BmezMWY5XqZBk%2Fa%2BXbwFWwsQfS3Nd83jKP%2FpcVxB6680Ct%2BCPs8YeiQD2ZW8EmR4U9&X-Amz-Signature=1fa18284ddd921282e0b2b7d490131e406d0ca372c8b6c714910524307b1dea9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CEAGI2N%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIAnta%2BZDfyGWFamuAfJ2kxL2%2F%2BNnHIon2fQ2DXL3olFHAiEA2%2B5JhtbinZsgJaDtEaauaVKXQ82Tyot0N%2FJlDszeRSgq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDKsAUpfQ203RnJW9gircA%2BBtX7GC%2FRL4is0twbCM03QnqFH%2BWNV5cdO0sQlqvvOzj04mjXY0XGlnmx7ZNsCKRaYiV84vngZFeKGveWthTpl8tilcWwAIxEyd3jsgfUx3Vyslep8Pg3Ub%2BaAkBUMcpQnHYPqiJ%2Bkf6BY3FqokmWolKsR0HJXx7lUuoRdVvG5U%2BPQNBmM626VNDyj8QG%2FNPDSh8dlx0tG%2F8dTy8p2nr8L5fmB%2FCMjfprfi3Kvfb1nacWuTnGZrmHG7C9T14oIYj%2FxgLW%2BwukWS%2BWnMyI4l6qmAeY6uYaeCph7kDQtbdNzfB7nqC%2FRMtvr8iPFE%2FvWwzL8ogwSMCt%2FeJfP1yFAg0MOrgASwZyqn3TVxIZG%2FKtVbCz7pvELZpv%2F0ELnrkepNpeBsO5tFZ3EweuwIbe1UjMip%2BlO9xjfhZ%2BtQ41uaW9J7iZWl5xQ4PgJCbz1qBFS2Hun7Ld16K79K%2BALV50JAXLmqSJ6MNAODsvfz1DvFPJrLr2jCpphclFZeVve4Jns2H5tk%2FqkIlAEixjShtCcHgO0k6CI4rA5PfbUitxBTbbRFTlnQebPwuegy6he83ZQ0gksHhryPQ489DsYPg%2FYjsQs%2FpJD242tiHcdKl%2BKFveOmEhTqUyKm7NFcyNsQMMqmysEGOqUBSNQO0DGNBaiH0YkwOAOH2RjPCyIb2Spav4dYARhgsMYIeFcv%2BadM%2FWb7liwerfQZpYQH24Mg%2FbdvgSUa96HNfYwuidI573J9TXazqrH%2B4DmjxGPv8M3RWpPX67iSb7XxFZLuFJiB%2FECPeH1C0C9P7p%2FQzo%2BmezMWY5XqZBk%2Fa%2BXbwFWwsQfS3Nd83jKP%2FpcVxB6680Ct%2BCPs8YeiQD2ZW8EmR4U9&X-Amz-Signature=eb346e0a7c336d5e338f52115490682f9d5838689a4995cfaaa27a29faa37df3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CEAGI2N%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIAnta%2BZDfyGWFamuAfJ2kxL2%2F%2BNnHIon2fQ2DXL3olFHAiEA2%2B5JhtbinZsgJaDtEaauaVKXQ82Tyot0N%2FJlDszeRSgq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDKsAUpfQ203RnJW9gircA%2BBtX7GC%2FRL4is0twbCM03QnqFH%2BWNV5cdO0sQlqvvOzj04mjXY0XGlnmx7ZNsCKRaYiV84vngZFeKGveWthTpl8tilcWwAIxEyd3jsgfUx3Vyslep8Pg3Ub%2BaAkBUMcpQnHYPqiJ%2Bkf6BY3FqokmWolKsR0HJXx7lUuoRdVvG5U%2BPQNBmM626VNDyj8QG%2FNPDSh8dlx0tG%2F8dTy8p2nr8L5fmB%2FCMjfprfi3Kvfb1nacWuTnGZrmHG7C9T14oIYj%2FxgLW%2BwukWS%2BWnMyI4l6qmAeY6uYaeCph7kDQtbdNzfB7nqC%2FRMtvr8iPFE%2FvWwzL8ogwSMCt%2FeJfP1yFAg0MOrgASwZyqn3TVxIZG%2FKtVbCz7pvELZpv%2F0ELnrkepNpeBsO5tFZ3EweuwIbe1UjMip%2BlO9xjfhZ%2BtQ41uaW9J7iZWl5xQ4PgJCbz1qBFS2Hun7Ld16K79K%2BALV50JAXLmqSJ6MNAODsvfz1DvFPJrLr2jCpphclFZeVve4Jns2H5tk%2FqkIlAEixjShtCcHgO0k6CI4rA5PfbUitxBTbbRFTlnQebPwuegy6he83ZQ0gksHhryPQ489DsYPg%2FYjsQs%2FpJD242tiHcdKl%2BKFveOmEhTqUyKm7NFcyNsQMMqmysEGOqUBSNQO0DGNBaiH0YkwOAOH2RjPCyIb2Spav4dYARhgsMYIeFcv%2BadM%2FWb7liwerfQZpYQH24Mg%2FbdvgSUa96HNfYwuidI573J9TXazqrH%2B4DmjxGPv8M3RWpPX67iSb7XxFZLuFJiB%2FECPeH1C0C9P7p%2FQzo%2BmezMWY5XqZBk%2Fa%2BXbwFWwsQfS3Nd83jKP%2FpcVxB6680Ct%2BCPs8YeiQD2ZW8EmR4U9&X-Amz-Signature=d9a4ae8f8fb2f499f3269f16577a32b8620c79db4eb8d59577ec43980842d5e9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CEAGI2N%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIAnta%2BZDfyGWFamuAfJ2kxL2%2F%2BNnHIon2fQ2DXL3olFHAiEA2%2B5JhtbinZsgJaDtEaauaVKXQ82Tyot0N%2FJlDszeRSgq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDKsAUpfQ203RnJW9gircA%2BBtX7GC%2FRL4is0twbCM03QnqFH%2BWNV5cdO0sQlqvvOzj04mjXY0XGlnmx7ZNsCKRaYiV84vngZFeKGveWthTpl8tilcWwAIxEyd3jsgfUx3Vyslep8Pg3Ub%2BaAkBUMcpQnHYPqiJ%2Bkf6BY3FqokmWolKsR0HJXx7lUuoRdVvG5U%2BPQNBmM626VNDyj8QG%2FNPDSh8dlx0tG%2F8dTy8p2nr8L5fmB%2FCMjfprfi3Kvfb1nacWuTnGZrmHG7C9T14oIYj%2FxgLW%2BwukWS%2BWnMyI4l6qmAeY6uYaeCph7kDQtbdNzfB7nqC%2FRMtvr8iPFE%2FvWwzL8ogwSMCt%2FeJfP1yFAg0MOrgASwZyqn3TVxIZG%2FKtVbCz7pvELZpv%2F0ELnrkepNpeBsO5tFZ3EweuwIbe1UjMip%2BlO9xjfhZ%2BtQ41uaW9J7iZWl5xQ4PgJCbz1qBFS2Hun7Ld16K79K%2BALV50JAXLmqSJ6MNAODsvfz1DvFPJrLr2jCpphclFZeVve4Jns2H5tk%2FqkIlAEixjShtCcHgO0k6CI4rA5PfbUitxBTbbRFTlnQebPwuegy6he83ZQ0gksHhryPQ489DsYPg%2FYjsQs%2FpJD242tiHcdKl%2BKFveOmEhTqUyKm7NFcyNsQMMqmysEGOqUBSNQO0DGNBaiH0YkwOAOH2RjPCyIb2Spav4dYARhgsMYIeFcv%2BadM%2FWb7liwerfQZpYQH24Mg%2FbdvgSUa96HNfYwuidI573J9TXazqrH%2B4DmjxGPv8M3RWpPX67iSb7XxFZLuFJiB%2FECPeH1C0C9P7p%2FQzo%2BmezMWY5XqZBk%2Fa%2BXbwFWwsQfS3Nd83jKP%2FpcVxB6680Ct%2BCPs8YeiQD2ZW8EmR4U9&X-Amz-Signature=54b47a46ecb288e2b77763c43d085f4bd06e4a121f69b2b54f9ff0ed9016dc8b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CEAGI2N%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIAnta%2BZDfyGWFamuAfJ2kxL2%2F%2BNnHIon2fQ2DXL3olFHAiEA2%2B5JhtbinZsgJaDtEaauaVKXQ82Tyot0N%2FJlDszeRSgq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDKsAUpfQ203RnJW9gircA%2BBtX7GC%2FRL4is0twbCM03QnqFH%2BWNV5cdO0sQlqvvOzj04mjXY0XGlnmx7ZNsCKRaYiV84vngZFeKGveWthTpl8tilcWwAIxEyd3jsgfUx3Vyslep8Pg3Ub%2BaAkBUMcpQnHYPqiJ%2Bkf6BY3FqokmWolKsR0HJXx7lUuoRdVvG5U%2BPQNBmM626VNDyj8QG%2FNPDSh8dlx0tG%2F8dTy8p2nr8L5fmB%2FCMjfprfi3Kvfb1nacWuTnGZrmHG7C9T14oIYj%2FxgLW%2BwukWS%2BWnMyI4l6qmAeY6uYaeCph7kDQtbdNzfB7nqC%2FRMtvr8iPFE%2FvWwzL8ogwSMCt%2FeJfP1yFAg0MOrgASwZyqn3TVxIZG%2FKtVbCz7pvELZpv%2F0ELnrkepNpeBsO5tFZ3EweuwIbe1UjMip%2BlO9xjfhZ%2BtQ41uaW9J7iZWl5xQ4PgJCbz1qBFS2Hun7Ld16K79K%2BALV50JAXLmqSJ6MNAODsvfz1DvFPJrLr2jCpphclFZeVve4Jns2H5tk%2FqkIlAEixjShtCcHgO0k6CI4rA5PfbUitxBTbbRFTlnQebPwuegy6he83ZQ0gksHhryPQ489DsYPg%2FYjsQs%2FpJD242tiHcdKl%2BKFveOmEhTqUyKm7NFcyNsQMMqmysEGOqUBSNQO0DGNBaiH0YkwOAOH2RjPCyIb2Spav4dYARhgsMYIeFcv%2BadM%2FWb7liwerfQZpYQH24Mg%2FbdvgSUa96HNfYwuidI573J9TXazqrH%2B4DmjxGPv8M3RWpPX67iSb7XxFZLuFJiB%2FECPeH1C0C9P7p%2FQzo%2BmezMWY5XqZBk%2Fa%2BXbwFWwsQfS3Nd83jKP%2FpcVxB6680Ct%2BCPs8YeiQD2ZW8EmR4U9&X-Amz-Signature=2e70e17360efbd1628b3215c41cfc84bc161ba8a62eea320b7982f4849437211&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CEAGI2N%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIAnta%2BZDfyGWFamuAfJ2kxL2%2F%2BNnHIon2fQ2DXL3olFHAiEA2%2B5JhtbinZsgJaDtEaauaVKXQ82Tyot0N%2FJlDszeRSgq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDKsAUpfQ203RnJW9gircA%2BBtX7GC%2FRL4is0twbCM03QnqFH%2BWNV5cdO0sQlqvvOzj04mjXY0XGlnmx7ZNsCKRaYiV84vngZFeKGveWthTpl8tilcWwAIxEyd3jsgfUx3Vyslep8Pg3Ub%2BaAkBUMcpQnHYPqiJ%2Bkf6BY3FqokmWolKsR0HJXx7lUuoRdVvG5U%2BPQNBmM626VNDyj8QG%2FNPDSh8dlx0tG%2F8dTy8p2nr8L5fmB%2FCMjfprfi3Kvfb1nacWuTnGZrmHG7C9T14oIYj%2FxgLW%2BwukWS%2BWnMyI4l6qmAeY6uYaeCph7kDQtbdNzfB7nqC%2FRMtvr8iPFE%2FvWwzL8ogwSMCt%2FeJfP1yFAg0MOrgASwZyqn3TVxIZG%2FKtVbCz7pvELZpv%2F0ELnrkepNpeBsO5tFZ3EweuwIbe1UjMip%2BlO9xjfhZ%2BtQ41uaW9J7iZWl5xQ4PgJCbz1qBFS2Hun7Ld16K79K%2BALV50JAXLmqSJ6MNAODsvfz1DvFPJrLr2jCpphclFZeVve4Jns2H5tk%2FqkIlAEixjShtCcHgO0k6CI4rA5PfbUitxBTbbRFTlnQebPwuegy6he83ZQ0gksHhryPQ489DsYPg%2FYjsQs%2FpJD242tiHcdKl%2BKFveOmEhTqUyKm7NFcyNsQMMqmysEGOqUBSNQO0DGNBaiH0YkwOAOH2RjPCyIb2Spav4dYARhgsMYIeFcv%2BadM%2FWb7liwerfQZpYQH24Mg%2FbdvgSUa96HNfYwuidI573J9TXazqrH%2B4DmjxGPv8M3RWpPX67iSb7XxFZLuFJiB%2FECPeH1C0C9P7p%2FQzo%2BmezMWY5XqZBk%2Fa%2BXbwFWwsQfS3Nd83jKP%2FpcVxB6680Ct%2BCPs8YeiQD2ZW8EmR4U9&X-Amz-Signature=895e94d3c98220bea8f9e78f531cc254210cfc9a911af186e0c463ac3206f321&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
