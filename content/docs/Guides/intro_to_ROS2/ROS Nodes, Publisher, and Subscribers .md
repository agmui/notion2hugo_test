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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFMD3Y2C%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDAzOkVP%2B6aWy5rtNHPYARezmUmpuuAjcA4AzSLpxvfeAiEAnloMme9vMCkJ63uyrAiGYjFKEomzTI9LNhugiWe4EVUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDAXr%2FI6Yyr9Gz1GnmCrcAyae27WfLP1KlYTyeeJ3xtzH4RdW69TqUkW%2B3K5o9JuKS4JhHSogOti2MUYgLjeLA%2FjP60dGssL5RndQuc5ew9Cu8PRYIrMCb35yNJmrjYWbqO7aV3NpDbGf4MXNwG6ASeEVWKpC5SK37jFfBzBQ4HsB%2BiSoxYlZ6MwHBKwnWoLB7JFSrBTaC9cCMnT4YXNoMTElowx8CqQX5ag8UugsWfY7AYOZwJ0htr825Pp8kofTlOpb2BkJzswqPz3NPaKEykMKgbG5ajo6Eu%2FzUZG28CydRmoUMgvDtRwlKXxzgQr4PpquieGdIysjmnI4luTMCvj2SRjxThBkI5bPKqRNtbWPvqDryH8MM2Q%2FvmAn96ZkMOr39r4FjFjtZhl%2BPw9cEVrlZucLzYRcaU5p7eHz0geaMwkMxQbGtgbfyxmRmt%2FVlE9ucu21DyKo1ZeLYecYswrG4jx8X5L4C3pehtELkv9RZ7V%2F2Qiiyw%2FgSPOog9reAWeAQsx%2F9mAtrI0IOctNF03IxFLGKWaYfzNm0oKyiJpz%2BmM%2B4N%2FitTRoZKolECUoFItTSQ722B9bCKiYH3ZZRF9ilGdoPK%2BH%2BIi%2F9agR%2BLhnGEsUpnrQMl29kFBS8sqs4KGY%2BrypWq1i4NLPMMT%2Bxb0GOqUBlClQYG%2BVR%2Bx2osnytirlDZdYBSz2o3ZZKM5dRL1jSu8%2BV1FkQ1saX96U2N8cHmbyNYz9Pig%2FooFupOBpK8J8rrIVo3Hfva201LjyOF8fBo0hsP8gNo7HVcQTEMLQflrPTeQ8Hz3eQcRBVDv%2FabUzoDzSQ3o6ZVIGutPRqAqQL1avB%2BP3bP%2FMMfP7UhUt81fFtLhM7im0JLRxzsOgqsnZGj7f8NSn&X-Amz-Signature=7b2cf0051613b858fcf571eb33f08ad117dc88a868349579e4adafbcc4bd5957&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFMD3Y2C%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDAzOkVP%2B6aWy5rtNHPYARezmUmpuuAjcA4AzSLpxvfeAiEAnloMme9vMCkJ63uyrAiGYjFKEomzTI9LNhugiWe4EVUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDAXr%2FI6Yyr9Gz1GnmCrcAyae27WfLP1KlYTyeeJ3xtzH4RdW69TqUkW%2B3K5o9JuKS4JhHSogOti2MUYgLjeLA%2FjP60dGssL5RndQuc5ew9Cu8PRYIrMCb35yNJmrjYWbqO7aV3NpDbGf4MXNwG6ASeEVWKpC5SK37jFfBzBQ4HsB%2BiSoxYlZ6MwHBKwnWoLB7JFSrBTaC9cCMnT4YXNoMTElowx8CqQX5ag8UugsWfY7AYOZwJ0htr825Pp8kofTlOpb2BkJzswqPz3NPaKEykMKgbG5ajo6Eu%2FzUZG28CydRmoUMgvDtRwlKXxzgQr4PpquieGdIysjmnI4luTMCvj2SRjxThBkI5bPKqRNtbWPvqDryH8MM2Q%2FvmAn96ZkMOr39r4FjFjtZhl%2BPw9cEVrlZucLzYRcaU5p7eHz0geaMwkMxQbGtgbfyxmRmt%2FVlE9ucu21DyKo1ZeLYecYswrG4jx8X5L4C3pehtELkv9RZ7V%2F2Qiiyw%2FgSPOog9reAWeAQsx%2F9mAtrI0IOctNF03IxFLGKWaYfzNm0oKyiJpz%2BmM%2B4N%2FitTRoZKolECUoFItTSQ722B9bCKiYH3ZZRF9ilGdoPK%2BH%2BIi%2F9agR%2BLhnGEsUpnrQMl29kFBS8sqs4KGY%2BrypWq1i4NLPMMT%2Bxb0GOqUBlClQYG%2BVR%2Bx2osnytirlDZdYBSz2o3ZZKM5dRL1jSu8%2BV1FkQ1saX96U2N8cHmbyNYz9Pig%2FooFupOBpK8J8rrIVo3Hfva201LjyOF8fBo0hsP8gNo7HVcQTEMLQflrPTeQ8Hz3eQcRBVDv%2FabUzoDzSQ3o6ZVIGutPRqAqQL1avB%2BP3bP%2FMMfP7UhUt81fFtLhM7im0JLRxzsOgqsnZGj7f8NSn&X-Amz-Signature=1397bbc930711012d3a51d2b48c1af683f5b05f603f84a88f26d92037a3dfc5e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFMD3Y2C%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDAzOkVP%2B6aWy5rtNHPYARezmUmpuuAjcA4AzSLpxvfeAiEAnloMme9vMCkJ63uyrAiGYjFKEomzTI9LNhugiWe4EVUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDAXr%2FI6Yyr9Gz1GnmCrcAyae27WfLP1KlYTyeeJ3xtzH4RdW69TqUkW%2B3K5o9JuKS4JhHSogOti2MUYgLjeLA%2FjP60dGssL5RndQuc5ew9Cu8PRYIrMCb35yNJmrjYWbqO7aV3NpDbGf4MXNwG6ASeEVWKpC5SK37jFfBzBQ4HsB%2BiSoxYlZ6MwHBKwnWoLB7JFSrBTaC9cCMnT4YXNoMTElowx8CqQX5ag8UugsWfY7AYOZwJ0htr825Pp8kofTlOpb2BkJzswqPz3NPaKEykMKgbG5ajo6Eu%2FzUZG28CydRmoUMgvDtRwlKXxzgQr4PpquieGdIysjmnI4luTMCvj2SRjxThBkI5bPKqRNtbWPvqDryH8MM2Q%2FvmAn96ZkMOr39r4FjFjtZhl%2BPw9cEVrlZucLzYRcaU5p7eHz0geaMwkMxQbGtgbfyxmRmt%2FVlE9ucu21DyKo1ZeLYecYswrG4jx8X5L4C3pehtELkv9RZ7V%2F2Qiiyw%2FgSPOog9reAWeAQsx%2F9mAtrI0IOctNF03IxFLGKWaYfzNm0oKyiJpz%2BmM%2B4N%2FitTRoZKolECUoFItTSQ722B9bCKiYH3ZZRF9ilGdoPK%2BH%2BIi%2F9agR%2BLhnGEsUpnrQMl29kFBS8sqs4KGY%2BrypWq1i4NLPMMT%2Bxb0GOqUBlClQYG%2BVR%2Bx2osnytirlDZdYBSz2o3ZZKM5dRL1jSu8%2BV1FkQ1saX96U2N8cHmbyNYz9Pig%2FooFupOBpK8J8rrIVo3Hfva201LjyOF8fBo0hsP8gNo7HVcQTEMLQflrPTeQ8Hz3eQcRBVDv%2FabUzoDzSQ3o6ZVIGutPRqAqQL1avB%2BP3bP%2FMMfP7UhUt81fFtLhM7im0JLRxzsOgqsnZGj7f8NSn&X-Amz-Signature=c17f147d3e1feb6cedbdc4ec3618c9b8e3afc0777f2ea5eafb1b92b5a0ed72fa&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFMD3Y2C%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDAzOkVP%2B6aWy5rtNHPYARezmUmpuuAjcA4AzSLpxvfeAiEAnloMme9vMCkJ63uyrAiGYjFKEomzTI9LNhugiWe4EVUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDAXr%2FI6Yyr9Gz1GnmCrcAyae27WfLP1KlYTyeeJ3xtzH4RdW69TqUkW%2B3K5o9JuKS4JhHSogOti2MUYgLjeLA%2FjP60dGssL5RndQuc5ew9Cu8PRYIrMCb35yNJmrjYWbqO7aV3NpDbGf4MXNwG6ASeEVWKpC5SK37jFfBzBQ4HsB%2BiSoxYlZ6MwHBKwnWoLB7JFSrBTaC9cCMnT4YXNoMTElowx8CqQX5ag8UugsWfY7AYOZwJ0htr825Pp8kofTlOpb2BkJzswqPz3NPaKEykMKgbG5ajo6Eu%2FzUZG28CydRmoUMgvDtRwlKXxzgQr4PpquieGdIysjmnI4luTMCvj2SRjxThBkI5bPKqRNtbWPvqDryH8MM2Q%2FvmAn96ZkMOr39r4FjFjtZhl%2BPw9cEVrlZucLzYRcaU5p7eHz0geaMwkMxQbGtgbfyxmRmt%2FVlE9ucu21DyKo1ZeLYecYswrG4jx8X5L4C3pehtELkv9RZ7V%2F2Qiiyw%2FgSPOog9reAWeAQsx%2F9mAtrI0IOctNF03IxFLGKWaYfzNm0oKyiJpz%2BmM%2B4N%2FitTRoZKolECUoFItTSQ722B9bCKiYH3ZZRF9ilGdoPK%2BH%2BIi%2F9agR%2BLhnGEsUpnrQMl29kFBS8sqs4KGY%2BrypWq1i4NLPMMT%2Bxb0GOqUBlClQYG%2BVR%2Bx2osnytirlDZdYBSz2o3ZZKM5dRL1jSu8%2BV1FkQ1saX96U2N8cHmbyNYz9Pig%2FooFupOBpK8J8rrIVo3Hfva201LjyOF8fBo0hsP8gNo7HVcQTEMLQflrPTeQ8Hz3eQcRBVDv%2FabUzoDzSQ3o6ZVIGutPRqAqQL1avB%2BP3bP%2FMMfP7UhUt81fFtLhM7im0JLRxzsOgqsnZGj7f8NSn&X-Amz-Signature=cf75e1101b9d41b99ed577c46d84c4e583d0ace7d8164e9e81ed0b803d13f09f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFMD3Y2C%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDAzOkVP%2B6aWy5rtNHPYARezmUmpuuAjcA4AzSLpxvfeAiEAnloMme9vMCkJ63uyrAiGYjFKEomzTI9LNhugiWe4EVUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDAXr%2FI6Yyr9Gz1GnmCrcAyae27WfLP1KlYTyeeJ3xtzH4RdW69TqUkW%2B3K5o9JuKS4JhHSogOti2MUYgLjeLA%2FjP60dGssL5RndQuc5ew9Cu8PRYIrMCb35yNJmrjYWbqO7aV3NpDbGf4MXNwG6ASeEVWKpC5SK37jFfBzBQ4HsB%2BiSoxYlZ6MwHBKwnWoLB7JFSrBTaC9cCMnT4YXNoMTElowx8CqQX5ag8UugsWfY7AYOZwJ0htr825Pp8kofTlOpb2BkJzswqPz3NPaKEykMKgbG5ajo6Eu%2FzUZG28CydRmoUMgvDtRwlKXxzgQr4PpquieGdIysjmnI4luTMCvj2SRjxThBkI5bPKqRNtbWPvqDryH8MM2Q%2FvmAn96ZkMOr39r4FjFjtZhl%2BPw9cEVrlZucLzYRcaU5p7eHz0geaMwkMxQbGtgbfyxmRmt%2FVlE9ucu21DyKo1ZeLYecYswrG4jx8X5L4C3pehtELkv9RZ7V%2F2Qiiyw%2FgSPOog9reAWeAQsx%2F9mAtrI0IOctNF03IxFLGKWaYfzNm0oKyiJpz%2BmM%2B4N%2FitTRoZKolECUoFItTSQ722B9bCKiYH3ZZRF9ilGdoPK%2BH%2BIi%2F9agR%2BLhnGEsUpnrQMl29kFBS8sqs4KGY%2BrypWq1i4NLPMMT%2Bxb0GOqUBlClQYG%2BVR%2Bx2osnytirlDZdYBSz2o3ZZKM5dRL1jSu8%2BV1FkQ1saX96U2N8cHmbyNYz9Pig%2FooFupOBpK8J8rrIVo3Hfva201LjyOF8fBo0hsP8gNo7HVcQTEMLQflrPTeQ8Hz3eQcRBVDv%2FabUzoDzSQ3o6ZVIGutPRqAqQL1avB%2BP3bP%2FMMfP7UhUt81fFtLhM7im0JLRxzsOgqsnZGj7f8NSn&X-Amz-Signature=b6ec09d08480961cddcd51b0534dd76dc2642b83a7c850067f9cdab4b3258016&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFMD3Y2C%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDAzOkVP%2B6aWy5rtNHPYARezmUmpuuAjcA4AzSLpxvfeAiEAnloMme9vMCkJ63uyrAiGYjFKEomzTI9LNhugiWe4EVUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDAXr%2FI6Yyr9Gz1GnmCrcAyae27WfLP1KlYTyeeJ3xtzH4RdW69TqUkW%2B3K5o9JuKS4JhHSogOti2MUYgLjeLA%2FjP60dGssL5RndQuc5ew9Cu8PRYIrMCb35yNJmrjYWbqO7aV3NpDbGf4MXNwG6ASeEVWKpC5SK37jFfBzBQ4HsB%2BiSoxYlZ6MwHBKwnWoLB7JFSrBTaC9cCMnT4YXNoMTElowx8CqQX5ag8UugsWfY7AYOZwJ0htr825Pp8kofTlOpb2BkJzswqPz3NPaKEykMKgbG5ajo6Eu%2FzUZG28CydRmoUMgvDtRwlKXxzgQr4PpquieGdIysjmnI4luTMCvj2SRjxThBkI5bPKqRNtbWPvqDryH8MM2Q%2FvmAn96ZkMOr39r4FjFjtZhl%2BPw9cEVrlZucLzYRcaU5p7eHz0geaMwkMxQbGtgbfyxmRmt%2FVlE9ucu21DyKo1ZeLYecYswrG4jx8X5L4C3pehtELkv9RZ7V%2F2Qiiyw%2FgSPOog9reAWeAQsx%2F9mAtrI0IOctNF03IxFLGKWaYfzNm0oKyiJpz%2BmM%2B4N%2FitTRoZKolECUoFItTSQ722B9bCKiYH3ZZRF9ilGdoPK%2BH%2BIi%2F9agR%2BLhnGEsUpnrQMl29kFBS8sqs4KGY%2BrypWq1i4NLPMMT%2Bxb0GOqUBlClQYG%2BVR%2Bx2osnytirlDZdYBSz2o3ZZKM5dRL1jSu8%2BV1FkQ1saX96U2N8cHmbyNYz9Pig%2FooFupOBpK8J8rrIVo3Hfva201LjyOF8fBo0hsP8gNo7HVcQTEMLQflrPTeQ8Hz3eQcRBVDv%2FabUzoDzSQ3o6ZVIGutPRqAqQL1avB%2BP3bP%2FMMfP7UhUt81fFtLhM7im0JLRxzsOgqsnZGj7f8NSn&X-Amz-Signature=63f17a7a54de6fedef4bc341ff5386957e94d44af0b25e5a3e36aa806e9fb57b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFMD3Y2C%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDAzOkVP%2B6aWy5rtNHPYARezmUmpuuAjcA4AzSLpxvfeAiEAnloMme9vMCkJ63uyrAiGYjFKEomzTI9LNhugiWe4EVUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDAXr%2FI6Yyr9Gz1GnmCrcAyae27WfLP1KlYTyeeJ3xtzH4RdW69TqUkW%2B3K5o9JuKS4JhHSogOti2MUYgLjeLA%2FjP60dGssL5RndQuc5ew9Cu8PRYIrMCb35yNJmrjYWbqO7aV3NpDbGf4MXNwG6ASeEVWKpC5SK37jFfBzBQ4HsB%2BiSoxYlZ6MwHBKwnWoLB7JFSrBTaC9cCMnT4YXNoMTElowx8CqQX5ag8UugsWfY7AYOZwJ0htr825Pp8kofTlOpb2BkJzswqPz3NPaKEykMKgbG5ajo6Eu%2FzUZG28CydRmoUMgvDtRwlKXxzgQr4PpquieGdIysjmnI4luTMCvj2SRjxThBkI5bPKqRNtbWPvqDryH8MM2Q%2FvmAn96ZkMOr39r4FjFjtZhl%2BPw9cEVrlZucLzYRcaU5p7eHz0geaMwkMxQbGtgbfyxmRmt%2FVlE9ucu21DyKo1ZeLYecYswrG4jx8X5L4C3pehtELkv9RZ7V%2F2Qiiyw%2FgSPOog9reAWeAQsx%2F9mAtrI0IOctNF03IxFLGKWaYfzNm0oKyiJpz%2BmM%2B4N%2FitTRoZKolECUoFItTSQ722B9bCKiYH3ZZRF9ilGdoPK%2BH%2BIi%2F9agR%2BLhnGEsUpnrQMl29kFBS8sqs4KGY%2BrypWq1i4NLPMMT%2Bxb0GOqUBlClQYG%2BVR%2Bx2osnytirlDZdYBSz2o3ZZKM5dRL1jSu8%2BV1FkQ1saX96U2N8cHmbyNYz9Pig%2FooFupOBpK8J8rrIVo3Hfva201LjyOF8fBo0hsP8gNo7HVcQTEMLQflrPTeQ8Hz3eQcRBVDv%2FabUzoDzSQ3o6ZVIGutPRqAqQL1avB%2BP3bP%2FMMfP7UhUt81fFtLhM7im0JLRxzsOgqsnZGj7f8NSn&X-Amz-Signature=e07096d776e61aace1114c214fa5421c5e9ae2309d149bf6db120981682c33b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFMD3Y2C%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDAzOkVP%2B6aWy5rtNHPYARezmUmpuuAjcA4AzSLpxvfeAiEAnloMme9vMCkJ63uyrAiGYjFKEomzTI9LNhugiWe4EVUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDAXr%2FI6Yyr9Gz1GnmCrcAyae27WfLP1KlYTyeeJ3xtzH4RdW69TqUkW%2B3K5o9JuKS4JhHSogOti2MUYgLjeLA%2FjP60dGssL5RndQuc5ew9Cu8PRYIrMCb35yNJmrjYWbqO7aV3NpDbGf4MXNwG6ASeEVWKpC5SK37jFfBzBQ4HsB%2BiSoxYlZ6MwHBKwnWoLB7JFSrBTaC9cCMnT4YXNoMTElowx8CqQX5ag8UugsWfY7AYOZwJ0htr825Pp8kofTlOpb2BkJzswqPz3NPaKEykMKgbG5ajo6Eu%2FzUZG28CydRmoUMgvDtRwlKXxzgQr4PpquieGdIysjmnI4luTMCvj2SRjxThBkI5bPKqRNtbWPvqDryH8MM2Q%2FvmAn96ZkMOr39r4FjFjtZhl%2BPw9cEVrlZucLzYRcaU5p7eHz0geaMwkMxQbGtgbfyxmRmt%2FVlE9ucu21DyKo1ZeLYecYswrG4jx8X5L4C3pehtELkv9RZ7V%2F2Qiiyw%2FgSPOog9reAWeAQsx%2F9mAtrI0IOctNF03IxFLGKWaYfzNm0oKyiJpz%2BmM%2B4N%2FitTRoZKolECUoFItTSQ722B9bCKiYH3ZZRF9ilGdoPK%2BH%2BIi%2F9agR%2BLhnGEsUpnrQMl29kFBS8sqs4KGY%2BrypWq1i4NLPMMT%2Bxb0GOqUBlClQYG%2BVR%2Bx2osnytirlDZdYBSz2o3ZZKM5dRL1jSu8%2BV1FkQ1saX96U2N8cHmbyNYz9Pig%2FooFupOBpK8J8rrIVo3Hfva201LjyOF8fBo0hsP8gNo7HVcQTEMLQflrPTeQ8Hz3eQcRBVDv%2FabUzoDzSQ3o6ZVIGutPRqAqQL1avB%2BP3bP%2FMMfP7UhUt81fFtLhM7im0JLRxzsOgqsnZGj7f8NSn&X-Amz-Signature=0e772ce2f3051a11514b2fc21086740800a959e3c5da50da9a60697083103fab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
