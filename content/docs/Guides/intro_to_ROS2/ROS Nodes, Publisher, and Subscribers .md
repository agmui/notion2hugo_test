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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5R6ILKP%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCkUinSO9sRd6JQXkzNMPCh0%2F9u2AFb0hVHvsI3Z6MIJQIgXtbaSi20Wc81XXS%2BXYj9tJ1oBG0SpcGtJ6z7UkBiyUEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVM1WgW2Te4zlHH2CrcA0COqO%2FUVlTaRXZ%2BGbbdmA%2FgK2YD3Gplr%2BbNhHzyWtEPgTAjkAsHzlt3GcrmiX8KwMawgSGk432nyRcjnTbTHxi3SCG1msFnzlKnPROGm5dmHdr%2F7SxDB2aH7qWAjUb%2BuEefCLnBr8foTYcBmSSGkfEYxMTkiK8ClYUAbIJuLFUMOw6pkKanuWC3HMM8CwwR1YhDazcymdoaofAunegQBz0uS2ZHVHz9RCHO5fsKkH8sIM1n698DQyzs6ilRKnLr9AzjM%2BxLRo9xhnAELQfVwAtZsY2uk%2B3lVmFI%2FQKS5a4n4kPHAgAqiPrMIoQITg7FG7zYlfnGfqPZ9qu31ZzyLvRp1x3hBSwdXLMgbt3n5AYnCo5eYoiZbZ6K2KXXO4WYRmhTLkaIMwA9mjaAHFuUQ%2FM6d%2BkAUgSUHDuoTKqHL%2B2OjRqbe1L9ZmnTqULHkkPeLMBFrky9aKiJMf5aAswaLo99z0fsz8OG6lk7h78iiHDHpcE1ysVlQVYgqIxJH%2FWtStUo2lWx9uBnbWEdLlqvHH0Y7vl3%2Fc3PBxPPDmhRZkTEWDQcutyMaJtdBdcbHFL2V2AwmtC6qnbs%2BwZdMqueoXt7RdTf2k%2B%2Fgmx6VL%2FVhu2yGhqMXnJQDlRVwm0pMPPwz70GOqUBPk3xZI61p5gtRni8ItpxODWw6g3XTcU27uHo6yg6El0gjhksHjU5el0ndLKMc%2BB8m%2FAmsou%2B%2BzpNk3D5cVZKCcoDm%2F77LWiaooYddFT1AVawag3yY0vPtyMmRcZUzRuQ9hqeaykUOBM2GKqgcQKJkJceHWzXzveGt4lHY7jrJK41WPP%2FFUnQOdIAStjXS2jiqmfrwoYII8xNJTVRVuuaw1xPQsf9&X-Amz-Signature=47c8f30368fc9b2c200ab58b18527caf71bac2b730522f7e9840b1df2e9a8cc3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5R6ILKP%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCkUinSO9sRd6JQXkzNMPCh0%2F9u2AFb0hVHvsI3Z6MIJQIgXtbaSi20Wc81XXS%2BXYj9tJ1oBG0SpcGtJ6z7UkBiyUEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVM1WgW2Te4zlHH2CrcA0COqO%2FUVlTaRXZ%2BGbbdmA%2FgK2YD3Gplr%2BbNhHzyWtEPgTAjkAsHzlt3GcrmiX8KwMawgSGk432nyRcjnTbTHxi3SCG1msFnzlKnPROGm5dmHdr%2F7SxDB2aH7qWAjUb%2BuEefCLnBr8foTYcBmSSGkfEYxMTkiK8ClYUAbIJuLFUMOw6pkKanuWC3HMM8CwwR1YhDazcymdoaofAunegQBz0uS2ZHVHz9RCHO5fsKkH8sIM1n698DQyzs6ilRKnLr9AzjM%2BxLRo9xhnAELQfVwAtZsY2uk%2B3lVmFI%2FQKS5a4n4kPHAgAqiPrMIoQITg7FG7zYlfnGfqPZ9qu31ZzyLvRp1x3hBSwdXLMgbt3n5AYnCo5eYoiZbZ6K2KXXO4WYRmhTLkaIMwA9mjaAHFuUQ%2FM6d%2BkAUgSUHDuoTKqHL%2B2OjRqbe1L9ZmnTqULHkkPeLMBFrky9aKiJMf5aAswaLo99z0fsz8OG6lk7h78iiHDHpcE1ysVlQVYgqIxJH%2FWtStUo2lWx9uBnbWEdLlqvHH0Y7vl3%2Fc3PBxPPDmhRZkTEWDQcutyMaJtdBdcbHFL2V2AwmtC6qnbs%2BwZdMqueoXt7RdTf2k%2B%2Fgmx6VL%2FVhu2yGhqMXnJQDlRVwm0pMPPwz70GOqUBPk3xZI61p5gtRni8ItpxODWw6g3XTcU27uHo6yg6El0gjhksHjU5el0ndLKMc%2BB8m%2FAmsou%2B%2BzpNk3D5cVZKCcoDm%2F77LWiaooYddFT1AVawag3yY0vPtyMmRcZUzRuQ9hqeaykUOBM2GKqgcQKJkJceHWzXzveGt4lHY7jrJK41WPP%2FFUnQOdIAStjXS2jiqmfrwoYII8xNJTVRVuuaw1xPQsf9&X-Amz-Signature=6e6a815079c3b12b96fb8dd226cd3a7d8b8824907191e7879d362d8f9584eb98&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5R6ILKP%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCkUinSO9sRd6JQXkzNMPCh0%2F9u2AFb0hVHvsI3Z6MIJQIgXtbaSi20Wc81XXS%2BXYj9tJ1oBG0SpcGtJ6z7UkBiyUEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVM1WgW2Te4zlHH2CrcA0COqO%2FUVlTaRXZ%2BGbbdmA%2FgK2YD3Gplr%2BbNhHzyWtEPgTAjkAsHzlt3GcrmiX8KwMawgSGk432nyRcjnTbTHxi3SCG1msFnzlKnPROGm5dmHdr%2F7SxDB2aH7qWAjUb%2BuEefCLnBr8foTYcBmSSGkfEYxMTkiK8ClYUAbIJuLFUMOw6pkKanuWC3HMM8CwwR1YhDazcymdoaofAunegQBz0uS2ZHVHz9RCHO5fsKkH8sIM1n698DQyzs6ilRKnLr9AzjM%2BxLRo9xhnAELQfVwAtZsY2uk%2B3lVmFI%2FQKS5a4n4kPHAgAqiPrMIoQITg7FG7zYlfnGfqPZ9qu31ZzyLvRp1x3hBSwdXLMgbt3n5AYnCo5eYoiZbZ6K2KXXO4WYRmhTLkaIMwA9mjaAHFuUQ%2FM6d%2BkAUgSUHDuoTKqHL%2B2OjRqbe1L9ZmnTqULHkkPeLMBFrky9aKiJMf5aAswaLo99z0fsz8OG6lk7h78iiHDHpcE1ysVlQVYgqIxJH%2FWtStUo2lWx9uBnbWEdLlqvHH0Y7vl3%2Fc3PBxPPDmhRZkTEWDQcutyMaJtdBdcbHFL2V2AwmtC6qnbs%2BwZdMqueoXt7RdTf2k%2B%2Fgmx6VL%2FVhu2yGhqMXnJQDlRVwm0pMPPwz70GOqUBPk3xZI61p5gtRni8ItpxODWw6g3XTcU27uHo6yg6El0gjhksHjU5el0ndLKMc%2BB8m%2FAmsou%2B%2BzpNk3D5cVZKCcoDm%2F77LWiaooYddFT1AVawag3yY0vPtyMmRcZUzRuQ9hqeaykUOBM2GKqgcQKJkJceHWzXzveGt4lHY7jrJK41WPP%2FFUnQOdIAStjXS2jiqmfrwoYII8xNJTVRVuuaw1xPQsf9&X-Amz-Signature=be7a83f5f49f1117ddce6cc7feda9c6c3b914324407537142d351d5be0e92835&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5R6ILKP%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCkUinSO9sRd6JQXkzNMPCh0%2F9u2AFb0hVHvsI3Z6MIJQIgXtbaSi20Wc81XXS%2BXYj9tJ1oBG0SpcGtJ6z7UkBiyUEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVM1WgW2Te4zlHH2CrcA0COqO%2FUVlTaRXZ%2BGbbdmA%2FgK2YD3Gplr%2BbNhHzyWtEPgTAjkAsHzlt3GcrmiX8KwMawgSGk432nyRcjnTbTHxi3SCG1msFnzlKnPROGm5dmHdr%2F7SxDB2aH7qWAjUb%2BuEefCLnBr8foTYcBmSSGkfEYxMTkiK8ClYUAbIJuLFUMOw6pkKanuWC3HMM8CwwR1YhDazcymdoaofAunegQBz0uS2ZHVHz9RCHO5fsKkH8sIM1n698DQyzs6ilRKnLr9AzjM%2BxLRo9xhnAELQfVwAtZsY2uk%2B3lVmFI%2FQKS5a4n4kPHAgAqiPrMIoQITg7FG7zYlfnGfqPZ9qu31ZzyLvRp1x3hBSwdXLMgbt3n5AYnCo5eYoiZbZ6K2KXXO4WYRmhTLkaIMwA9mjaAHFuUQ%2FM6d%2BkAUgSUHDuoTKqHL%2B2OjRqbe1L9ZmnTqULHkkPeLMBFrky9aKiJMf5aAswaLo99z0fsz8OG6lk7h78iiHDHpcE1ysVlQVYgqIxJH%2FWtStUo2lWx9uBnbWEdLlqvHH0Y7vl3%2Fc3PBxPPDmhRZkTEWDQcutyMaJtdBdcbHFL2V2AwmtC6qnbs%2BwZdMqueoXt7RdTf2k%2B%2Fgmx6VL%2FVhu2yGhqMXnJQDlRVwm0pMPPwz70GOqUBPk3xZI61p5gtRni8ItpxODWw6g3XTcU27uHo6yg6El0gjhksHjU5el0ndLKMc%2BB8m%2FAmsou%2B%2BzpNk3D5cVZKCcoDm%2F77LWiaooYddFT1AVawag3yY0vPtyMmRcZUzRuQ9hqeaykUOBM2GKqgcQKJkJceHWzXzveGt4lHY7jrJK41WPP%2FFUnQOdIAStjXS2jiqmfrwoYII8xNJTVRVuuaw1xPQsf9&X-Amz-Signature=f69d346519c0d94b454ac37388b663b930574386da38b4e9a30e312c17464325&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5R6ILKP%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCkUinSO9sRd6JQXkzNMPCh0%2F9u2AFb0hVHvsI3Z6MIJQIgXtbaSi20Wc81XXS%2BXYj9tJ1oBG0SpcGtJ6z7UkBiyUEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVM1WgW2Te4zlHH2CrcA0COqO%2FUVlTaRXZ%2BGbbdmA%2FgK2YD3Gplr%2BbNhHzyWtEPgTAjkAsHzlt3GcrmiX8KwMawgSGk432nyRcjnTbTHxi3SCG1msFnzlKnPROGm5dmHdr%2F7SxDB2aH7qWAjUb%2BuEefCLnBr8foTYcBmSSGkfEYxMTkiK8ClYUAbIJuLFUMOw6pkKanuWC3HMM8CwwR1YhDazcymdoaofAunegQBz0uS2ZHVHz9RCHO5fsKkH8sIM1n698DQyzs6ilRKnLr9AzjM%2BxLRo9xhnAELQfVwAtZsY2uk%2B3lVmFI%2FQKS5a4n4kPHAgAqiPrMIoQITg7FG7zYlfnGfqPZ9qu31ZzyLvRp1x3hBSwdXLMgbt3n5AYnCo5eYoiZbZ6K2KXXO4WYRmhTLkaIMwA9mjaAHFuUQ%2FM6d%2BkAUgSUHDuoTKqHL%2B2OjRqbe1L9ZmnTqULHkkPeLMBFrky9aKiJMf5aAswaLo99z0fsz8OG6lk7h78iiHDHpcE1ysVlQVYgqIxJH%2FWtStUo2lWx9uBnbWEdLlqvHH0Y7vl3%2Fc3PBxPPDmhRZkTEWDQcutyMaJtdBdcbHFL2V2AwmtC6qnbs%2BwZdMqueoXt7RdTf2k%2B%2Fgmx6VL%2FVhu2yGhqMXnJQDlRVwm0pMPPwz70GOqUBPk3xZI61p5gtRni8ItpxODWw6g3XTcU27uHo6yg6El0gjhksHjU5el0ndLKMc%2BB8m%2FAmsou%2B%2BzpNk3D5cVZKCcoDm%2F77LWiaooYddFT1AVawag3yY0vPtyMmRcZUzRuQ9hqeaykUOBM2GKqgcQKJkJceHWzXzveGt4lHY7jrJK41WPP%2FFUnQOdIAStjXS2jiqmfrwoYII8xNJTVRVuuaw1xPQsf9&X-Amz-Signature=55fd59de3698e7a0964d114adff5b33d224b8a6b093cc0f03a1ce63a374631b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5R6ILKP%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCkUinSO9sRd6JQXkzNMPCh0%2F9u2AFb0hVHvsI3Z6MIJQIgXtbaSi20Wc81XXS%2BXYj9tJ1oBG0SpcGtJ6z7UkBiyUEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVM1WgW2Te4zlHH2CrcA0COqO%2FUVlTaRXZ%2BGbbdmA%2FgK2YD3Gplr%2BbNhHzyWtEPgTAjkAsHzlt3GcrmiX8KwMawgSGk432nyRcjnTbTHxi3SCG1msFnzlKnPROGm5dmHdr%2F7SxDB2aH7qWAjUb%2BuEefCLnBr8foTYcBmSSGkfEYxMTkiK8ClYUAbIJuLFUMOw6pkKanuWC3HMM8CwwR1YhDazcymdoaofAunegQBz0uS2ZHVHz9RCHO5fsKkH8sIM1n698DQyzs6ilRKnLr9AzjM%2BxLRo9xhnAELQfVwAtZsY2uk%2B3lVmFI%2FQKS5a4n4kPHAgAqiPrMIoQITg7FG7zYlfnGfqPZ9qu31ZzyLvRp1x3hBSwdXLMgbt3n5AYnCo5eYoiZbZ6K2KXXO4WYRmhTLkaIMwA9mjaAHFuUQ%2FM6d%2BkAUgSUHDuoTKqHL%2B2OjRqbe1L9ZmnTqULHkkPeLMBFrky9aKiJMf5aAswaLo99z0fsz8OG6lk7h78iiHDHpcE1ysVlQVYgqIxJH%2FWtStUo2lWx9uBnbWEdLlqvHH0Y7vl3%2Fc3PBxPPDmhRZkTEWDQcutyMaJtdBdcbHFL2V2AwmtC6qnbs%2BwZdMqueoXt7RdTf2k%2B%2Fgmx6VL%2FVhu2yGhqMXnJQDlRVwm0pMPPwz70GOqUBPk3xZI61p5gtRni8ItpxODWw6g3XTcU27uHo6yg6El0gjhksHjU5el0ndLKMc%2BB8m%2FAmsou%2B%2BzpNk3D5cVZKCcoDm%2F77LWiaooYddFT1AVawag3yY0vPtyMmRcZUzRuQ9hqeaykUOBM2GKqgcQKJkJceHWzXzveGt4lHY7jrJK41WPP%2FFUnQOdIAStjXS2jiqmfrwoYII8xNJTVRVuuaw1xPQsf9&X-Amz-Signature=3c76dcfb9f5d355611a1d1d2fa3f9a27981ce8bffed0c419663b2e93193b8313&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5R6ILKP%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCkUinSO9sRd6JQXkzNMPCh0%2F9u2AFb0hVHvsI3Z6MIJQIgXtbaSi20Wc81XXS%2BXYj9tJ1oBG0SpcGtJ6z7UkBiyUEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVM1WgW2Te4zlHH2CrcA0COqO%2FUVlTaRXZ%2BGbbdmA%2FgK2YD3Gplr%2BbNhHzyWtEPgTAjkAsHzlt3GcrmiX8KwMawgSGk432nyRcjnTbTHxi3SCG1msFnzlKnPROGm5dmHdr%2F7SxDB2aH7qWAjUb%2BuEefCLnBr8foTYcBmSSGkfEYxMTkiK8ClYUAbIJuLFUMOw6pkKanuWC3HMM8CwwR1YhDazcymdoaofAunegQBz0uS2ZHVHz9RCHO5fsKkH8sIM1n698DQyzs6ilRKnLr9AzjM%2BxLRo9xhnAELQfVwAtZsY2uk%2B3lVmFI%2FQKS5a4n4kPHAgAqiPrMIoQITg7FG7zYlfnGfqPZ9qu31ZzyLvRp1x3hBSwdXLMgbt3n5AYnCo5eYoiZbZ6K2KXXO4WYRmhTLkaIMwA9mjaAHFuUQ%2FM6d%2BkAUgSUHDuoTKqHL%2B2OjRqbe1L9ZmnTqULHkkPeLMBFrky9aKiJMf5aAswaLo99z0fsz8OG6lk7h78iiHDHpcE1ysVlQVYgqIxJH%2FWtStUo2lWx9uBnbWEdLlqvHH0Y7vl3%2Fc3PBxPPDmhRZkTEWDQcutyMaJtdBdcbHFL2V2AwmtC6qnbs%2BwZdMqueoXt7RdTf2k%2B%2Fgmx6VL%2FVhu2yGhqMXnJQDlRVwm0pMPPwz70GOqUBPk3xZI61p5gtRni8ItpxODWw6g3XTcU27uHo6yg6El0gjhksHjU5el0ndLKMc%2BB8m%2FAmsou%2B%2BzpNk3D5cVZKCcoDm%2F77LWiaooYddFT1AVawag3yY0vPtyMmRcZUzRuQ9hqeaykUOBM2GKqgcQKJkJceHWzXzveGt4lHY7jrJK41WPP%2FFUnQOdIAStjXS2jiqmfrwoYII8xNJTVRVuuaw1xPQsf9&X-Amz-Signature=0584f0e2a0df9d85d42a4c751737da43da19d044bdc101653e19138d4c7dfdce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5R6ILKP%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCkUinSO9sRd6JQXkzNMPCh0%2F9u2AFb0hVHvsI3Z6MIJQIgXtbaSi20Wc81XXS%2BXYj9tJ1oBG0SpcGtJ6z7UkBiyUEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVM1WgW2Te4zlHH2CrcA0COqO%2FUVlTaRXZ%2BGbbdmA%2FgK2YD3Gplr%2BbNhHzyWtEPgTAjkAsHzlt3GcrmiX8KwMawgSGk432nyRcjnTbTHxi3SCG1msFnzlKnPROGm5dmHdr%2F7SxDB2aH7qWAjUb%2BuEefCLnBr8foTYcBmSSGkfEYxMTkiK8ClYUAbIJuLFUMOw6pkKanuWC3HMM8CwwR1YhDazcymdoaofAunegQBz0uS2ZHVHz9RCHO5fsKkH8sIM1n698DQyzs6ilRKnLr9AzjM%2BxLRo9xhnAELQfVwAtZsY2uk%2B3lVmFI%2FQKS5a4n4kPHAgAqiPrMIoQITg7FG7zYlfnGfqPZ9qu31ZzyLvRp1x3hBSwdXLMgbt3n5AYnCo5eYoiZbZ6K2KXXO4WYRmhTLkaIMwA9mjaAHFuUQ%2FM6d%2BkAUgSUHDuoTKqHL%2B2OjRqbe1L9ZmnTqULHkkPeLMBFrky9aKiJMf5aAswaLo99z0fsz8OG6lk7h78iiHDHpcE1ysVlQVYgqIxJH%2FWtStUo2lWx9uBnbWEdLlqvHH0Y7vl3%2Fc3PBxPPDmhRZkTEWDQcutyMaJtdBdcbHFL2V2AwmtC6qnbs%2BwZdMqueoXt7RdTf2k%2B%2Fgmx6VL%2FVhu2yGhqMXnJQDlRVwm0pMPPwz70GOqUBPk3xZI61p5gtRni8ItpxODWw6g3XTcU27uHo6yg6El0gjhksHjU5el0ndLKMc%2BB8m%2FAmsou%2B%2BzpNk3D5cVZKCcoDm%2F77LWiaooYddFT1AVawag3yY0vPtyMmRcZUzRuQ9hqeaykUOBM2GKqgcQKJkJceHWzXzveGt4lHY7jrJK41WPP%2FFUnQOdIAStjXS2jiqmfrwoYII8xNJTVRVuuaw1xPQsf9&X-Amz-Signature=96c993501deb416e7837e5dff0377dbfa767ed051170d3f0346ffde71c2ce1f4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
