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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXNYENS4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCYOVRgVHxKbMhQyZzbwN62AIXsKCJ7%2FIH0MG%2B5ldZ0mQIgRRoBhiltqe50PpYGNRb8kO4j1CL4lVgmHP7hvMuTD9Mq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDJmHCzJ%2Fk6LRLZJNMCrcAy24O6bFPid%2B60sElCeTPbx0U%2FPESdV0iijaci5%2FwfxTxTHYEE4oa0Z%2F6JrXymtXFXa7x%2BMBBtY6WaoMYxqEDduFi8554r7%2FBxonIHvhb7ZDz1HN%2FNMDnruXVpAFC3ceu9gm0hVfMQR9Xdc%2Fb8FOdxxKoRFMypFviAVKXtgREGMbtHq7xIuvSuSoD6CwdrDe5wfpbF1ubONlI4VCpBlnLoDTAGST6l1Jw3I8j86ezmNmOKABgskz%2FWeLiUzULu2M0UD%2BFs8Lp0HcyFM9%2FiSkTd6eO%2FzjdeJSLmefNmrgKFug194R7UPzqza9wuVqITcIOMZQ0PD2p%2Bcv3yndf%2B2RxK%2FKieJauNMOgVXWb%2FKN6%2BMttgmlluvEgzcCdapT1rTajg2IDR1ZDFY6cu4nKY4ygt%2Fe%2BzBMm7m3w1fM1GaflcT5FmfpRRmZPmv8T%2FDESz6THl13THXJokALrUQCqlNH8pfu89X4dFkEE%2BQK9Pl2jOuQ5S%2B4VarW1L%2F5pCAiF7vduq9XolZpic8oaWGYEqpmdAq2UsC0fxJzfp7LU40Zdprm%2BMDTeca9IkGQ%2FLaj0SBm0D6B5PW%2F4ivrqQx7fJkpZ0H9pgeNABLls2uPeXRIQi8FXiXd%2BVACkPmdqfhlMOLps74GOqUBNkpCQ7uZS6a9TFYbH3rO%2FxG6vhkbKzQ7uv65aR93Q0VKG8bEnM8y2CaEOmQ4e1mSmIXpaWFmlqqL2gLcy9T70odT%2FvxUV78Rlz0yydjWhBnxu%2BOaCRp5dFUSA6GzHkddvey2mwvkoDFTr1MYGG9GkdPVT%2B78OW1qU%2B3HV%2By6mzREV0umWgDkovZh1pP4O0oSJ85Vl26xCttLnvHEO1pcOMK7GklU&X-Amz-Signature=3112f0ea320c29148b9461900f60fbc194a26aaf02a815f38537dc681c974706&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXNYENS4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCYOVRgVHxKbMhQyZzbwN62AIXsKCJ7%2FIH0MG%2B5ldZ0mQIgRRoBhiltqe50PpYGNRb8kO4j1CL4lVgmHP7hvMuTD9Mq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDJmHCzJ%2Fk6LRLZJNMCrcAy24O6bFPid%2B60sElCeTPbx0U%2FPESdV0iijaci5%2FwfxTxTHYEE4oa0Z%2F6JrXymtXFXa7x%2BMBBtY6WaoMYxqEDduFi8554r7%2FBxonIHvhb7ZDz1HN%2FNMDnruXVpAFC3ceu9gm0hVfMQR9Xdc%2Fb8FOdxxKoRFMypFviAVKXtgREGMbtHq7xIuvSuSoD6CwdrDe5wfpbF1ubONlI4VCpBlnLoDTAGST6l1Jw3I8j86ezmNmOKABgskz%2FWeLiUzULu2M0UD%2BFs8Lp0HcyFM9%2FiSkTd6eO%2FzjdeJSLmefNmrgKFug194R7UPzqza9wuVqITcIOMZQ0PD2p%2Bcv3yndf%2B2RxK%2FKieJauNMOgVXWb%2FKN6%2BMttgmlluvEgzcCdapT1rTajg2IDR1ZDFY6cu4nKY4ygt%2Fe%2BzBMm7m3w1fM1GaflcT5FmfpRRmZPmv8T%2FDESz6THl13THXJokALrUQCqlNH8pfu89X4dFkEE%2BQK9Pl2jOuQ5S%2B4VarW1L%2F5pCAiF7vduq9XolZpic8oaWGYEqpmdAq2UsC0fxJzfp7LU40Zdprm%2BMDTeca9IkGQ%2FLaj0SBm0D6B5PW%2F4ivrqQx7fJkpZ0H9pgeNABLls2uPeXRIQi8FXiXd%2BVACkPmdqfhlMOLps74GOqUBNkpCQ7uZS6a9TFYbH3rO%2FxG6vhkbKzQ7uv65aR93Q0VKG8bEnM8y2CaEOmQ4e1mSmIXpaWFmlqqL2gLcy9T70odT%2FvxUV78Rlz0yydjWhBnxu%2BOaCRp5dFUSA6GzHkddvey2mwvkoDFTr1MYGG9GkdPVT%2B78OW1qU%2B3HV%2By6mzREV0umWgDkovZh1pP4O0oSJ85Vl26xCttLnvHEO1pcOMK7GklU&X-Amz-Signature=4bd95b1ae3f0a1664ab1a06c188a3346b73afe5af70ab35aa971bc336cff7e1e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXNYENS4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCYOVRgVHxKbMhQyZzbwN62AIXsKCJ7%2FIH0MG%2B5ldZ0mQIgRRoBhiltqe50PpYGNRb8kO4j1CL4lVgmHP7hvMuTD9Mq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDJmHCzJ%2Fk6LRLZJNMCrcAy24O6bFPid%2B60sElCeTPbx0U%2FPESdV0iijaci5%2FwfxTxTHYEE4oa0Z%2F6JrXymtXFXa7x%2BMBBtY6WaoMYxqEDduFi8554r7%2FBxonIHvhb7ZDz1HN%2FNMDnruXVpAFC3ceu9gm0hVfMQR9Xdc%2Fb8FOdxxKoRFMypFviAVKXtgREGMbtHq7xIuvSuSoD6CwdrDe5wfpbF1ubONlI4VCpBlnLoDTAGST6l1Jw3I8j86ezmNmOKABgskz%2FWeLiUzULu2M0UD%2BFs8Lp0HcyFM9%2FiSkTd6eO%2FzjdeJSLmefNmrgKFug194R7UPzqza9wuVqITcIOMZQ0PD2p%2Bcv3yndf%2B2RxK%2FKieJauNMOgVXWb%2FKN6%2BMttgmlluvEgzcCdapT1rTajg2IDR1ZDFY6cu4nKY4ygt%2Fe%2BzBMm7m3w1fM1GaflcT5FmfpRRmZPmv8T%2FDESz6THl13THXJokALrUQCqlNH8pfu89X4dFkEE%2BQK9Pl2jOuQ5S%2B4VarW1L%2F5pCAiF7vduq9XolZpic8oaWGYEqpmdAq2UsC0fxJzfp7LU40Zdprm%2BMDTeca9IkGQ%2FLaj0SBm0D6B5PW%2F4ivrqQx7fJkpZ0H9pgeNABLls2uPeXRIQi8FXiXd%2BVACkPmdqfhlMOLps74GOqUBNkpCQ7uZS6a9TFYbH3rO%2FxG6vhkbKzQ7uv65aR93Q0VKG8bEnM8y2CaEOmQ4e1mSmIXpaWFmlqqL2gLcy9T70odT%2FvxUV78Rlz0yydjWhBnxu%2BOaCRp5dFUSA6GzHkddvey2mwvkoDFTr1MYGG9GkdPVT%2B78OW1qU%2B3HV%2By6mzREV0umWgDkovZh1pP4O0oSJ85Vl26xCttLnvHEO1pcOMK7GklU&X-Amz-Signature=cb0254c46fd8a20c85336b681b0cc3646363a094379a43b0b90ffcc1595d7816&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXNYENS4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCYOVRgVHxKbMhQyZzbwN62AIXsKCJ7%2FIH0MG%2B5ldZ0mQIgRRoBhiltqe50PpYGNRb8kO4j1CL4lVgmHP7hvMuTD9Mq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDJmHCzJ%2Fk6LRLZJNMCrcAy24O6bFPid%2B60sElCeTPbx0U%2FPESdV0iijaci5%2FwfxTxTHYEE4oa0Z%2F6JrXymtXFXa7x%2BMBBtY6WaoMYxqEDduFi8554r7%2FBxonIHvhb7ZDz1HN%2FNMDnruXVpAFC3ceu9gm0hVfMQR9Xdc%2Fb8FOdxxKoRFMypFviAVKXtgREGMbtHq7xIuvSuSoD6CwdrDe5wfpbF1ubONlI4VCpBlnLoDTAGST6l1Jw3I8j86ezmNmOKABgskz%2FWeLiUzULu2M0UD%2BFs8Lp0HcyFM9%2FiSkTd6eO%2FzjdeJSLmefNmrgKFug194R7UPzqza9wuVqITcIOMZQ0PD2p%2Bcv3yndf%2B2RxK%2FKieJauNMOgVXWb%2FKN6%2BMttgmlluvEgzcCdapT1rTajg2IDR1ZDFY6cu4nKY4ygt%2Fe%2BzBMm7m3w1fM1GaflcT5FmfpRRmZPmv8T%2FDESz6THl13THXJokALrUQCqlNH8pfu89X4dFkEE%2BQK9Pl2jOuQ5S%2B4VarW1L%2F5pCAiF7vduq9XolZpic8oaWGYEqpmdAq2UsC0fxJzfp7LU40Zdprm%2BMDTeca9IkGQ%2FLaj0SBm0D6B5PW%2F4ivrqQx7fJkpZ0H9pgeNABLls2uPeXRIQi8FXiXd%2BVACkPmdqfhlMOLps74GOqUBNkpCQ7uZS6a9TFYbH3rO%2FxG6vhkbKzQ7uv65aR93Q0VKG8bEnM8y2CaEOmQ4e1mSmIXpaWFmlqqL2gLcy9T70odT%2FvxUV78Rlz0yydjWhBnxu%2BOaCRp5dFUSA6GzHkddvey2mwvkoDFTr1MYGG9GkdPVT%2B78OW1qU%2B3HV%2By6mzREV0umWgDkovZh1pP4O0oSJ85Vl26xCttLnvHEO1pcOMK7GklU&X-Amz-Signature=9677190b5b653a4a13edd51ed1418ae0e5847d5af13c1103e6cd4bc354d0828a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXNYENS4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCYOVRgVHxKbMhQyZzbwN62AIXsKCJ7%2FIH0MG%2B5ldZ0mQIgRRoBhiltqe50PpYGNRb8kO4j1CL4lVgmHP7hvMuTD9Mq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDJmHCzJ%2Fk6LRLZJNMCrcAy24O6bFPid%2B60sElCeTPbx0U%2FPESdV0iijaci5%2FwfxTxTHYEE4oa0Z%2F6JrXymtXFXa7x%2BMBBtY6WaoMYxqEDduFi8554r7%2FBxonIHvhb7ZDz1HN%2FNMDnruXVpAFC3ceu9gm0hVfMQR9Xdc%2Fb8FOdxxKoRFMypFviAVKXtgREGMbtHq7xIuvSuSoD6CwdrDe5wfpbF1ubONlI4VCpBlnLoDTAGST6l1Jw3I8j86ezmNmOKABgskz%2FWeLiUzULu2M0UD%2BFs8Lp0HcyFM9%2FiSkTd6eO%2FzjdeJSLmefNmrgKFug194R7UPzqza9wuVqITcIOMZQ0PD2p%2Bcv3yndf%2B2RxK%2FKieJauNMOgVXWb%2FKN6%2BMttgmlluvEgzcCdapT1rTajg2IDR1ZDFY6cu4nKY4ygt%2Fe%2BzBMm7m3w1fM1GaflcT5FmfpRRmZPmv8T%2FDESz6THl13THXJokALrUQCqlNH8pfu89X4dFkEE%2BQK9Pl2jOuQ5S%2B4VarW1L%2F5pCAiF7vduq9XolZpic8oaWGYEqpmdAq2UsC0fxJzfp7LU40Zdprm%2BMDTeca9IkGQ%2FLaj0SBm0D6B5PW%2F4ivrqQx7fJkpZ0H9pgeNABLls2uPeXRIQi8FXiXd%2BVACkPmdqfhlMOLps74GOqUBNkpCQ7uZS6a9TFYbH3rO%2FxG6vhkbKzQ7uv65aR93Q0VKG8bEnM8y2CaEOmQ4e1mSmIXpaWFmlqqL2gLcy9T70odT%2FvxUV78Rlz0yydjWhBnxu%2BOaCRp5dFUSA6GzHkddvey2mwvkoDFTr1MYGG9GkdPVT%2B78OW1qU%2B3HV%2By6mzREV0umWgDkovZh1pP4O0oSJ85Vl26xCttLnvHEO1pcOMK7GklU&X-Amz-Signature=f7dd03700a0d089ee98ddb33db86a962ddf1e07a2560db0afd389ad42ab6d6be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXNYENS4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCYOVRgVHxKbMhQyZzbwN62AIXsKCJ7%2FIH0MG%2B5ldZ0mQIgRRoBhiltqe50PpYGNRb8kO4j1CL4lVgmHP7hvMuTD9Mq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDJmHCzJ%2Fk6LRLZJNMCrcAy24O6bFPid%2B60sElCeTPbx0U%2FPESdV0iijaci5%2FwfxTxTHYEE4oa0Z%2F6JrXymtXFXa7x%2BMBBtY6WaoMYxqEDduFi8554r7%2FBxonIHvhb7ZDz1HN%2FNMDnruXVpAFC3ceu9gm0hVfMQR9Xdc%2Fb8FOdxxKoRFMypFviAVKXtgREGMbtHq7xIuvSuSoD6CwdrDe5wfpbF1ubONlI4VCpBlnLoDTAGST6l1Jw3I8j86ezmNmOKABgskz%2FWeLiUzULu2M0UD%2BFs8Lp0HcyFM9%2FiSkTd6eO%2FzjdeJSLmefNmrgKFug194R7UPzqza9wuVqITcIOMZQ0PD2p%2Bcv3yndf%2B2RxK%2FKieJauNMOgVXWb%2FKN6%2BMttgmlluvEgzcCdapT1rTajg2IDR1ZDFY6cu4nKY4ygt%2Fe%2BzBMm7m3w1fM1GaflcT5FmfpRRmZPmv8T%2FDESz6THl13THXJokALrUQCqlNH8pfu89X4dFkEE%2BQK9Pl2jOuQ5S%2B4VarW1L%2F5pCAiF7vduq9XolZpic8oaWGYEqpmdAq2UsC0fxJzfp7LU40Zdprm%2BMDTeca9IkGQ%2FLaj0SBm0D6B5PW%2F4ivrqQx7fJkpZ0H9pgeNABLls2uPeXRIQi8FXiXd%2BVACkPmdqfhlMOLps74GOqUBNkpCQ7uZS6a9TFYbH3rO%2FxG6vhkbKzQ7uv65aR93Q0VKG8bEnM8y2CaEOmQ4e1mSmIXpaWFmlqqL2gLcy9T70odT%2FvxUV78Rlz0yydjWhBnxu%2BOaCRp5dFUSA6GzHkddvey2mwvkoDFTr1MYGG9GkdPVT%2B78OW1qU%2B3HV%2By6mzREV0umWgDkovZh1pP4O0oSJ85Vl26xCttLnvHEO1pcOMK7GklU&X-Amz-Signature=dd3f2f5f894e3be38351381f6ebd73f0a62e114c20e6a5eab73be9504f026245&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXNYENS4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCYOVRgVHxKbMhQyZzbwN62AIXsKCJ7%2FIH0MG%2B5ldZ0mQIgRRoBhiltqe50PpYGNRb8kO4j1CL4lVgmHP7hvMuTD9Mq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDJmHCzJ%2Fk6LRLZJNMCrcAy24O6bFPid%2B60sElCeTPbx0U%2FPESdV0iijaci5%2FwfxTxTHYEE4oa0Z%2F6JrXymtXFXa7x%2BMBBtY6WaoMYxqEDduFi8554r7%2FBxonIHvhb7ZDz1HN%2FNMDnruXVpAFC3ceu9gm0hVfMQR9Xdc%2Fb8FOdxxKoRFMypFviAVKXtgREGMbtHq7xIuvSuSoD6CwdrDe5wfpbF1ubONlI4VCpBlnLoDTAGST6l1Jw3I8j86ezmNmOKABgskz%2FWeLiUzULu2M0UD%2BFs8Lp0HcyFM9%2FiSkTd6eO%2FzjdeJSLmefNmrgKFug194R7UPzqza9wuVqITcIOMZQ0PD2p%2Bcv3yndf%2B2RxK%2FKieJauNMOgVXWb%2FKN6%2BMttgmlluvEgzcCdapT1rTajg2IDR1ZDFY6cu4nKY4ygt%2Fe%2BzBMm7m3w1fM1GaflcT5FmfpRRmZPmv8T%2FDESz6THl13THXJokALrUQCqlNH8pfu89X4dFkEE%2BQK9Pl2jOuQ5S%2B4VarW1L%2F5pCAiF7vduq9XolZpic8oaWGYEqpmdAq2UsC0fxJzfp7LU40Zdprm%2BMDTeca9IkGQ%2FLaj0SBm0D6B5PW%2F4ivrqQx7fJkpZ0H9pgeNABLls2uPeXRIQi8FXiXd%2BVACkPmdqfhlMOLps74GOqUBNkpCQ7uZS6a9TFYbH3rO%2FxG6vhkbKzQ7uv65aR93Q0VKG8bEnM8y2CaEOmQ4e1mSmIXpaWFmlqqL2gLcy9T70odT%2FvxUV78Rlz0yydjWhBnxu%2BOaCRp5dFUSA6GzHkddvey2mwvkoDFTr1MYGG9GkdPVT%2B78OW1qU%2B3HV%2By6mzREV0umWgDkovZh1pP4O0oSJ85Vl26xCttLnvHEO1pcOMK7GklU&X-Amz-Signature=7022dcc48a3d1f7d9df36d33422a630b2c4c59e9c3a3dedfea5868a899d34b7b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXNYENS4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCYOVRgVHxKbMhQyZzbwN62AIXsKCJ7%2FIH0MG%2B5ldZ0mQIgRRoBhiltqe50PpYGNRb8kO4j1CL4lVgmHP7hvMuTD9Mq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDJmHCzJ%2Fk6LRLZJNMCrcAy24O6bFPid%2B60sElCeTPbx0U%2FPESdV0iijaci5%2FwfxTxTHYEE4oa0Z%2F6JrXymtXFXa7x%2BMBBtY6WaoMYxqEDduFi8554r7%2FBxonIHvhb7ZDz1HN%2FNMDnruXVpAFC3ceu9gm0hVfMQR9Xdc%2Fb8FOdxxKoRFMypFviAVKXtgREGMbtHq7xIuvSuSoD6CwdrDe5wfpbF1ubONlI4VCpBlnLoDTAGST6l1Jw3I8j86ezmNmOKABgskz%2FWeLiUzULu2M0UD%2BFs8Lp0HcyFM9%2FiSkTd6eO%2FzjdeJSLmefNmrgKFug194R7UPzqza9wuVqITcIOMZQ0PD2p%2Bcv3yndf%2B2RxK%2FKieJauNMOgVXWb%2FKN6%2BMttgmlluvEgzcCdapT1rTajg2IDR1ZDFY6cu4nKY4ygt%2Fe%2BzBMm7m3w1fM1GaflcT5FmfpRRmZPmv8T%2FDESz6THl13THXJokALrUQCqlNH8pfu89X4dFkEE%2BQK9Pl2jOuQ5S%2B4VarW1L%2F5pCAiF7vduq9XolZpic8oaWGYEqpmdAq2UsC0fxJzfp7LU40Zdprm%2BMDTeca9IkGQ%2FLaj0SBm0D6B5PW%2F4ivrqQx7fJkpZ0H9pgeNABLls2uPeXRIQi8FXiXd%2BVACkPmdqfhlMOLps74GOqUBNkpCQ7uZS6a9TFYbH3rO%2FxG6vhkbKzQ7uv65aR93Q0VKG8bEnM8y2CaEOmQ4e1mSmIXpaWFmlqqL2gLcy9T70odT%2FvxUV78Rlz0yydjWhBnxu%2BOaCRp5dFUSA6GzHkddvey2mwvkoDFTr1MYGG9GkdPVT%2B78OW1qU%2B3HV%2By6mzREV0umWgDkovZh1pP4O0oSJ85Vl26xCttLnvHEO1pcOMK7GklU&X-Amz-Signature=2369b2d01f0a24c5c63f1cabfe4bd90d8d6f5d261e81c77868cb21d0e6a18d52&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
