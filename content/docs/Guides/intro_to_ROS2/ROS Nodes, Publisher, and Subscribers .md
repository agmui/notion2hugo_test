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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LIY66VE%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T004020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHz8Y8ubiQJy2aoUmGqO4hoTFFdG95npZgcAfKpqjEKSAiAoiSzpEVAn2hTit%2Ba0%2FtCqKMXPENT3oGvLxzuzr%2BteSyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMVOE1aD%2B%2Fbg2NJFurKtwD27GL8nvkloifcYfF5zihIu%2FlMSZf7h7aabp%2FJIWb4H7jNq1VCFuVJjU1BmN721XkF3IPkyLSASObUuP%2FDLysmyjYylUZf5WMONfqXGjImLtdUrB2LeTeXLXyGT8FmPwVpPGhXl8wgtDm9eSPpEbsCNCCByf05x7bCDoVHDAgE5BDMhdlK1Me%2B93JeGYA0wLhaWZkfpq7diGBdyF5uZklPfdvMuc5MtBjLu%2BLLUanMOz50CWRrXDEaIixCGF3LPBQ1h1FDHzYsEis%2Bmrq6%2FaJ0pwmSDOJX7WrVHWprSYoY%2F%2BrSM%2FIIxvtJONteSJwuRkC4cnsRjCDYqgkVhhJUess03QdZwzGLor5SpMNkIS8TLNC0JDpCrJQMlWmaPhgsnmTAKnShQd%2FPgN6zt9lLZpj%2FRMEF6xgVx9WCSuETXx9L1%2FY%2FlLKa7kTKF6O0PFuvIoxovCgrEPt5N74SHiAMOLDPaPac8WmpSwvfMCIyZ%2FNKx1kEh4RNYobVhwiNVODPnkcBzziigxZyTp341%2FKKee3BQXDDvYt9DRRT4ku8%2BdYdSG0WAi3mN03Q7HKDS5RtHjNsrUthQs0pkYxN6QKjLnJqlL%2FPV58pP4JpcyNByZcIihDiSrHLTPN%2BxGwNZEwn6qrwAY6pgEiy1qNBMCrY8HvPFrZFx7ZNSe2X7ozh9IBPj0lcgnDc9eCOcmm8lhgEduXeVwnnUJxb3W0ifxMV8aow4zPI7YH01R4Ub5Zf4GHu%2FduK%2BMZlJjVNdNp0Udw%2FEasRSuD2auo2SvcjE32YkoJOvMkePHZNhSm33Y7s3IOD6Qg0rHrwU3b6Db9UGigQKb8vHb4Rs6jeR25hfoFgMuX5ytJL%2BAExNaOwh%2Bt&X-Amz-Signature=ca80ba9e98addbc84bf10966ff2e22d908acfb7a10611fc880af18ca2a8d0dc4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LIY66VE%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T004020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHz8Y8ubiQJy2aoUmGqO4hoTFFdG95npZgcAfKpqjEKSAiAoiSzpEVAn2hTit%2Ba0%2FtCqKMXPENT3oGvLxzuzr%2BteSyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMVOE1aD%2B%2Fbg2NJFurKtwD27GL8nvkloifcYfF5zihIu%2FlMSZf7h7aabp%2FJIWb4H7jNq1VCFuVJjU1BmN721XkF3IPkyLSASObUuP%2FDLysmyjYylUZf5WMONfqXGjImLtdUrB2LeTeXLXyGT8FmPwVpPGhXl8wgtDm9eSPpEbsCNCCByf05x7bCDoVHDAgE5BDMhdlK1Me%2B93JeGYA0wLhaWZkfpq7diGBdyF5uZklPfdvMuc5MtBjLu%2BLLUanMOz50CWRrXDEaIixCGF3LPBQ1h1FDHzYsEis%2Bmrq6%2FaJ0pwmSDOJX7WrVHWprSYoY%2F%2BrSM%2FIIxvtJONteSJwuRkC4cnsRjCDYqgkVhhJUess03QdZwzGLor5SpMNkIS8TLNC0JDpCrJQMlWmaPhgsnmTAKnShQd%2FPgN6zt9lLZpj%2FRMEF6xgVx9WCSuETXx9L1%2FY%2FlLKa7kTKF6O0PFuvIoxovCgrEPt5N74SHiAMOLDPaPac8WmpSwvfMCIyZ%2FNKx1kEh4RNYobVhwiNVODPnkcBzziigxZyTp341%2FKKee3BQXDDvYt9DRRT4ku8%2BdYdSG0WAi3mN03Q7HKDS5RtHjNsrUthQs0pkYxN6QKjLnJqlL%2FPV58pP4JpcyNByZcIihDiSrHLTPN%2BxGwNZEwn6qrwAY6pgEiy1qNBMCrY8HvPFrZFx7ZNSe2X7ozh9IBPj0lcgnDc9eCOcmm8lhgEduXeVwnnUJxb3W0ifxMV8aow4zPI7YH01R4Ub5Zf4GHu%2FduK%2BMZlJjVNdNp0Udw%2FEasRSuD2auo2SvcjE32YkoJOvMkePHZNhSm33Y7s3IOD6Qg0rHrwU3b6Db9UGigQKb8vHb4Rs6jeR25hfoFgMuX5ytJL%2BAExNaOwh%2Bt&X-Amz-Signature=0c481183f21d909acd08dadbd145ea15f6fa2a4918e8d3f9e86243802542235d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LIY66VE%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T004020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHz8Y8ubiQJy2aoUmGqO4hoTFFdG95npZgcAfKpqjEKSAiAoiSzpEVAn2hTit%2Ba0%2FtCqKMXPENT3oGvLxzuzr%2BteSyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMVOE1aD%2B%2Fbg2NJFurKtwD27GL8nvkloifcYfF5zihIu%2FlMSZf7h7aabp%2FJIWb4H7jNq1VCFuVJjU1BmN721XkF3IPkyLSASObUuP%2FDLysmyjYylUZf5WMONfqXGjImLtdUrB2LeTeXLXyGT8FmPwVpPGhXl8wgtDm9eSPpEbsCNCCByf05x7bCDoVHDAgE5BDMhdlK1Me%2B93JeGYA0wLhaWZkfpq7diGBdyF5uZklPfdvMuc5MtBjLu%2BLLUanMOz50CWRrXDEaIixCGF3LPBQ1h1FDHzYsEis%2Bmrq6%2FaJ0pwmSDOJX7WrVHWprSYoY%2F%2BrSM%2FIIxvtJONteSJwuRkC4cnsRjCDYqgkVhhJUess03QdZwzGLor5SpMNkIS8TLNC0JDpCrJQMlWmaPhgsnmTAKnShQd%2FPgN6zt9lLZpj%2FRMEF6xgVx9WCSuETXx9L1%2FY%2FlLKa7kTKF6O0PFuvIoxovCgrEPt5N74SHiAMOLDPaPac8WmpSwvfMCIyZ%2FNKx1kEh4RNYobVhwiNVODPnkcBzziigxZyTp341%2FKKee3BQXDDvYt9DRRT4ku8%2BdYdSG0WAi3mN03Q7HKDS5RtHjNsrUthQs0pkYxN6QKjLnJqlL%2FPV58pP4JpcyNByZcIihDiSrHLTPN%2BxGwNZEwn6qrwAY6pgEiy1qNBMCrY8HvPFrZFx7ZNSe2X7ozh9IBPj0lcgnDc9eCOcmm8lhgEduXeVwnnUJxb3W0ifxMV8aow4zPI7YH01R4Ub5Zf4GHu%2FduK%2BMZlJjVNdNp0Udw%2FEasRSuD2auo2SvcjE32YkoJOvMkePHZNhSm33Y7s3IOD6Qg0rHrwU3b6Db9UGigQKb8vHb4Rs6jeR25hfoFgMuX5ytJL%2BAExNaOwh%2Bt&X-Amz-Signature=8b53f28ecb96ccdffe3279e88e12a32b7ecf1b30feaeac329d94215b58c93b20&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LIY66VE%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T004020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHz8Y8ubiQJy2aoUmGqO4hoTFFdG95npZgcAfKpqjEKSAiAoiSzpEVAn2hTit%2Ba0%2FtCqKMXPENT3oGvLxzuzr%2BteSyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMVOE1aD%2B%2Fbg2NJFurKtwD27GL8nvkloifcYfF5zihIu%2FlMSZf7h7aabp%2FJIWb4H7jNq1VCFuVJjU1BmN721XkF3IPkyLSASObUuP%2FDLysmyjYylUZf5WMONfqXGjImLtdUrB2LeTeXLXyGT8FmPwVpPGhXl8wgtDm9eSPpEbsCNCCByf05x7bCDoVHDAgE5BDMhdlK1Me%2B93JeGYA0wLhaWZkfpq7diGBdyF5uZklPfdvMuc5MtBjLu%2BLLUanMOz50CWRrXDEaIixCGF3LPBQ1h1FDHzYsEis%2Bmrq6%2FaJ0pwmSDOJX7WrVHWprSYoY%2F%2BrSM%2FIIxvtJONteSJwuRkC4cnsRjCDYqgkVhhJUess03QdZwzGLor5SpMNkIS8TLNC0JDpCrJQMlWmaPhgsnmTAKnShQd%2FPgN6zt9lLZpj%2FRMEF6xgVx9WCSuETXx9L1%2FY%2FlLKa7kTKF6O0PFuvIoxovCgrEPt5N74SHiAMOLDPaPac8WmpSwvfMCIyZ%2FNKx1kEh4RNYobVhwiNVODPnkcBzziigxZyTp341%2FKKee3BQXDDvYt9DRRT4ku8%2BdYdSG0WAi3mN03Q7HKDS5RtHjNsrUthQs0pkYxN6QKjLnJqlL%2FPV58pP4JpcyNByZcIihDiSrHLTPN%2BxGwNZEwn6qrwAY6pgEiy1qNBMCrY8HvPFrZFx7ZNSe2X7ozh9IBPj0lcgnDc9eCOcmm8lhgEduXeVwnnUJxb3W0ifxMV8aow4zPI7YH01R4Ub5Zf4GHu%2FduK%2BMZlJjVNdNp0Udw%2FEasRSuD2auo2SvcjE32YkoJOvMkePHZNhSm33Y7s3IOD6Qg0rHrwU3b6Db9UGigQKb8vHb4Rs6jeR25hfoFgMuX5ytJL%2BAExNaOwh%2Bt&X-Amz-Signature=d9fb995172717f7fe3e8d1f7a09056ef54d0a2bf9190cc94090209b105eb4a25&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LIY66VE%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T004020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHz8Y8ubiQJy2aoUmGqO4hoTFFdG95npZgcAfKpqjEKSAiAoiSzpEVAn2hTit%2Ba0%2FtCqKMXPENT3oGvLxzuzr%2BteSyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMVOE1aD%2B%2Fbg2NJFurKtwD27GL8nvkloifcYfF5zihIu%2FlMSZf7h7aabp%2FJIWb4H7jNq1VCFuVJjU1BmN721XkF3IPkyLSASObUuP%2FDLysmyjYylUZf5WMONfqXGjImLtdUrB2LeTeXLXyGT8FmPwVpPGhXl8wgtDm9eSPpEbsCNCCByf05x7bCDoVHDAgE5BDMhdlK1Me%2B93JeGYA0wLhaWZkfpq7diGBdyF5uZklPfdvMuc5MtBjLu%2BLLUanMOz50CWRrXDEaIixCGF3LPBQ1h1FDHzYsEis%2Bmrq6%2FaJ0pwmSDOJX7WrVHWprSYoY%2F%2BrSM%2FIIxvtJONteSJwuRkC4cnsRjCDYqgkVhhJUess03QdZwzGLor5SpMNkIS8TLNC0JDpCrJQMlWmaPhgsnmTAKnShQd%2FPgN6zt9lLZpj%2FRMEF6xgVx9WCSuETXx9L1%2FY%2FlLKa7kTKF6O0PFuvIoxovCgrEPt5N74SHiAMOLDPaPac8WmpSwvfMCIyZ%2FNKx1kEh4RNYobVhwiNVODPnkcBzziigxZyTp341%2FKKee3BQXDDvYt9DRRT4ku8%2BdYdSG0WAi3mN03Q7HKDS5RtHjNsrUthQs0pkYxN6QKjLnJqlL%2FPV58pP4JpcyNByZcIihDiSrHLTPN%2BxGwNZEwn6qrwAY6pgEiy1qNBMCrY8HvPFrZFx7ZNSe2X7ozh9IBPj0lcgnDc9eCOcmm8lhgEduXeVwnnUJxb3W0ifxMV8aow4zPI7YH01R4Ub5Zf4GHu%2FduK%2BMZlJjVNdNp0Udw%2FEasRSuD2auo2SvcjE32YkoJOvMkePHZNhSm33Y7s3IOD6Qg0rHrwU3b6Db9UGigQKb8vHb4Rs6jeR25hfoFgMuX5ytJL%2BAExNaOwh%2Bt&X-Amz-Signature=0ff3d2fd6045f18b6308b2687ff74ebc1b907fbb9a574efa240f863d739e66ab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LIY66VE%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T004020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHz8Y8ubiQJy2aoUmGqO4hoTFFdG95npZgcAfKpqjEKSAiAoiSzpEVAn2hTit%2Ba0%2FtCqKMXPENT3oGvLxzuzr%2BteSyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMVOE1aD%2B%2Fbg2NJFurKtwD27GL8nvkloifcYfF5zihIu%2FlMSZf7h7aabp%2FJIWb4H7jNq1VCFuVJjU1BmN721XkF3IPkyLSASObUuP%2FDLysmyjYylUZf5WMONfqXGjImLtdUrB2LeTeXLXyGT8FmPwVpPGhXl8wgtDm9eSPpEbsCNCCByf05x7bCDoVHDAgE5BDMhdlK1Me%2B93JeGYA0wLhaWZkfpq7diGBdyF5uZklPfdvMuc5MtBjLu%2BLLUanMOz50CWRrXDEaIixCGF3LPBQ1h1FDHzYsEis%2Bmrq6%2FaJ0pwmSDOJX7WrVHWprSYoY%2F%2BrSM%2FIIxvtJONteSJwuRkC4cnsRjCDYqgkVhhJUess03QdZwzGLor5SpMNkIS8TLNC0JDpCrJQMlWmaPhgsnmTAKnShQd%2FPgN6zt9lLZpj%2FRMEF6xgVx9WCSuETXx9L1%2FY%2FlLKa7kTKF6O0PFuvIoxovCgrEPt5N74SHiAMOLDPaPac8WmpSwvfMCIyZ%2FNKx1kEh4RNYobVhwiNVODPnkcBzziigxZyTp341%2FKKee3BQXDDvYt9DRRT4ku8%2BdYdSG0WAi3mN03Q7HKDS5RtHjNsrUthQs0pkYxN6QKjLnJqlL%2FPV58pP4JpcyNByZcIihDiSrHLTPN%2BxGwNZEwn6qrwAY6pgEiy1qNBMCrY8HvPFrZFx7ZNSe2X7ozh9IBPj0lcgnDc9eCOcmm8lhgEduXeVwnnUJxb3W0ifxMV8aow4zPI7YH01R4Ub5Zf4GHu%2FduK%2BMZlJjVNdNp0Udw%2FEasRSuD2auo2SvcjE32YkoJOvMkePHZNhSm33Y7s3IOD6Qg0rHrwU3b6Db9UGigQKb8vHb4Rs6jeR25hfoFgMuX5ytJL%2BAExNaOwh%2Bt&X-Amz-Signature=9d71308f8df55e020cfb6d86d818ed936f36489f9a25be892114c82db0a73006&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LIY66VE%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T004020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHz8Y8ubiQJy2aoUmGqO4hoTFFdG95npZgcAfKpqjEKSAiAoiSzpEVAn2hTit%2Ba0%2FtCqKMXPENT3oGvLxzuzr%2BteSyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMVOE1aD%2B%2Fbg2NJFurKtwD27GL8nvkloifcYfF5zihIu%2FlMSZf7h7aabp%2FJIWb4H7jNq1VCFuVJjU1BmN721XkF3IPkyLSASObUuP%2FDLysmyjYylUZf5WMONfqXGjImLtdUrB2LeTeXLXyGT8FmPwVpPGhXl8wgtDm9eSPpEbsCNCCByf05x7bCDoVHDAgE5BDMhdlK1Me%2B93JeGYA0wLhaWZkfpq7diGBdyF5uZklPfdvMuc5MtBjLu%2BLLUanMOz50CWRrXDEaIixCGF3LPBQ1h1FDHzYsEis%2Bmrq6%2FaJ0pwmSDOJX7WrVHWprSYoY%2F%2BrSM%2FIIxvtJONteSJwuRkC4cnsRjCDYqgkVhhJUess03QdZwzGLor5SpMNkIS8TLNC0JDpCrJQMlWmaPhgsnmTAKnShQd%2FPgN6zt9lLZpj%2FRMEF6xgVx9WCSuETXx9L1%2FY%2FlLKa7kTKF6O0PFuvIoxovCgrEPt5N74SHiAMOLDPaPac8WmpSwvfMCIyZ%2FNKx1kEh4RNYobVhwiNVODPnkcBzziigxZyTp341%2FKKee3BQXDDvYt9DRRT4ku8%2BdYdSG0WAi3mN03Q7HKDS5RtHjNsrUthQs0pkYxN6QKjLnJqlL%2FPV58pP4JpcyNByZcIihDiSrHLTPN%2BxGwNZEwn6qrwAY6pgEiy1qNBMCrY8HvPFrZFx7ZNSe2X7ozh9IBPj0lcgnDc9eCOcmm8lhgEduXeVwnnUJxb3W0ifxMV8aow4zPI7YH01R4Ub5Zf4GHu%2FduK%2BMZlJjVNdNp0Udw%2FEasRSuD2auo2SvcjE32YkoJOvMkePHZNhSm33Y7s3IOD6Qg0rHrwU3b6Db9UGigQKb8vHb4Rs6jeR25hfoFgMuX5ytJL%2BAExNaOwh%2Bt&X-Amz-Signature=873abc4dde1eea62d8441e391217422c61bc26cfacafbeb0158329b07fd166f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LIY66VE%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T004020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHz8Y8ubiQJy2aoUmGqO4hoTFFdG95npZgcAfKpqjEKSAiAoiSzpEVAn2hTit%2Ba0%2FtCqKMXPENT3oGvLxzuzr%2BteSyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMVOE1aD%2B%2Fbg2NJFurKtwD27GL8nvkloifcYfF5zihIu%2FlMSZf7h7aabp%2FJIWb4H7jNq1VCFuVJjU1BmN721XkF3IPkyLSASObUuP%2FDLysmyjYylUZf5WMONfqXGjImLtdUrB2LeTeXLXyGT8FmPwVpPGhXl8wgtDm9eSPpEbsCNCCByf05x7bCDoVHDAgE5BDMhdlK1Me%2B93JeGYA0wLhaWZkfpq7diGBdyF5uZklPfdvMuc5MtBjLu%2BLLUanMOz50CWRrXDEaIixCGF3LPBQ1h1FDHzYsEis%2Bmrq6%2FaJ0pwmSDOJX7WrVHWprSYoY%2F%2BrSM%2FIIxvtJONteSJwuRkC4cnsRjCDYqgkVhhJUess03QdZwzGLor5SpMNkIS8TLNC0JDpCrJQMlWmaPhgsnmTAKnShQd%2FPgN6zt9lLZpj%2FRMEF6xgVx9WCSuETXx9L1%2FY%2FlLKa7kTKF6O0PFuvIoxovCgrEPt5N74SHiAMOLDPaPac8WmpSwvfMCIyZ%2FNKx1kEh4RNYobVhwiNVODPnkcBzziigxZyTp341%2FKKee3BQXDDvYt9DRRT4ku8%2BdYdSG0WAi3mN03Q7HKDS5RtHjNsrUthQs0pkYxN6QKjLnJqlL%2FPV58pP4JpcyNByZcIihDiSrHLTPN%2BxGwNZEwn6qrwAY6pgEiy1qNBMCrY8HvPFrZFx7ZNSe2X7ozh9IBPj0lcgnDc9eCOcmm8lhgEduXeVwnnUJxb3W0ifxMV8aow4zPI7YH01R4Ub5Zf4GHu%2FduK%2BMZlJjVNdNp0Udw%2FEasRSuD2auo2SvcjE32YkoJOvMkePHZNhSm33Y7s3IOD6Qg0rHrwU3b6Db9UGigQKb8vHb4Rs6jeR25hfoFgMuX5ytJL%2BAExNaOwh%2Bt&X-Amz-Signature=9c50dac1a535bf36525c052049fc8c48ec1db461c1bf51f71af866a288f8011d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
