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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653GI2QTL%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuFwlGK06fbEdHIn9xCLe2uoPaRtrkpelR1GERWKkc9AiEAwyCBHdWE3NFVvfaPHMrTk1oRzDmdCa5%2Fu2a6JOqAt5Yq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDDsOP4iEmCkVVQc9mSrcA89Wuj1sImhBYH1H3wSaetexdb5AbPMUke6RUJMb2f23jRnuM9BJXhTVZTrhBW69Z3jWuXkMtKHo89xZ8Phj%2BGITMRsXhP8sbivWAuQQdoqmFHn7J%2FP%2FsWhbYvCswWfMVqGG8j2%2BCl82hXIzTqfAw7ye9GgYif0LS%2B3mkcPuLsN%2BuM7kZyjPnAEM%2BSFyuu8l3XegC8Y3ULIbL%2FPn22psa8txIBriiO7ODWfOmMYbhNcobfYCAUTnVk3GSMLqhB6QMt6nVwqfaOlRkswJI27NnA4c5uAiev2MldReROkw83egYDSbNhQa0Xvr27HZkPL4xVEVopzojcPOasQkO0%2B4vl3PbDz%2FmeNxGR1TJudwq0K%2B7rgjkS3zbk88A%2F8muXSnnh8oNpNbDK2Er%2BXbvL4phM4ScVlkMM6EmPiMzO88EbCvMqFgHoZnV1d2%2FUI5hRwB30B6dQsO3BLpwa5suTjgeOuP5Zx2vV5Ap%2BCSAmMTSkmwQiXl9qCRdDjGnmFz9vpPcXdC%2FrHhN1V8NXxW1s9nnyG8n8xlJgZNpBX%2BDNEu9L74sCu2ZYffXSqs5norLE0y9FbjrcwGlnAZfgmoSxbo4XDbCsnI6BkTKAFwdbIs%2F8Ob41XyFnp20GSlCDiSMOOisMAGOqUB%2F5%2BlsWdXxtNomv8zlKPyFhoCuvk%2B3nlc5nTjH6BfwKfZey8IOOlixTVhRdRkiOoyppgNrbtlL7Rwxl6qs3Xym%2BjhIwXiFuzbou0kp1r0HtQhsuE6r8ksrQ0pPtcii%2Bh%2BXzEKbI9ky5dpEdfNDdI9BrX4ee4w%2FMdnck3BoUjZOOucAz4KrDUBCOlgyAC%2FLFkQbAm2YhSclIJ3nA8QDezjpUT2QAUZ&X-Amz-Signature=972ee50dfe1ee568b0d2fded3a52992f168a80f28f84a9a1582179f20fc49411&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653GI2QTL%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuFwlGK06fbEdHIn9xCLe2uoPaRtrkpelR1GERWKkc9AiEAwyCBHdWE3NFVvfaPHMrTk1oRzDmdCa5%2Fu2a6JOqAt5Yq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDDsOP4iEmCkVVQc9mSrcA89Wuj1sImhBYH1H3wSaetexdb5AbPMUke6RUJMb2f23jRnuM9BJXhTVZTrhBW69Z3jWuXkMtKHo89xZ8Phj%2BGITMRsXhP8sbivWAuQQdoqmFHn7J%2FP%2FsWhbYvCswWfMVqGG8j2%2BCl82hXIzTqfAw7ye9GgYif0LS%2B3mkcPuLsN%2BuM7kZyjPnAEM%2BSFyuu8l3XegC8Y3ULIbL%2FPn22psa8txIBriiO7ODWfOmMYbhNcobfYCAUTnVk3GSMLqhB6QMt6nVwqfaOlRkswJI27NnA4c5uAiev2MldReROkw83egYDSbNhQa0Xvr27HZkPL4xVEVopzojcPOasQkO0%2B4vl3PbDz%2FmeNxGR1TJudwq0K%2B7rgjkS3zbk88A%2F8muXSnnh8oNpNbDK2Er%2BXbvL4phM4ScVlkMM6EmPiMzO88EbCvMqFgHoZnV1d2%2FUI5hRwB30B6dQsO3BLpwa5suTjgeOuP5Zx2vV5Ap%2BCSAmMTSkmwQiXl9qCRdDjGnmFz9vpPcXdC%2FrHhN1V8NXxW1s9nnyG8n8xlJgZNpBX%2BDNEu9L74sCu2ZYffXSqs5norLE0y9FbjrcwGlnAZfgmoSxbo4XDbCsnI6BkTKAFwdbIs%2F8Ob41XyFnp20GSlCDiSMOOisMAGOqUB%2F5%2BlsWdXxtNomv8zlKPyFhoCuvk%2B3nlc5nTjH6BfwKfZey8IOOlixTVhRdRkiOoyppgNrbtlL7Rwxl6qs3Xym%2BjhIwXiFuzbou0kp1r0HtQhsuE6r8ksrQ0pPtcii%2Bh%2BXzEKbI9ky5dpEdfNDdI9BrX4ee4w%2FMdnck3BoUjZOOucAz4KrDUBCOlgyAC%2FLFkQbAm2YhSclIJ3nA8QDezjpUT2QAUZ&X-Amz-Signature=80a9173f6d153ac643652ae0b81891b6f7464557a2807d5460079ed1e43af7b6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653GI2QTL%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuFwlGK06fbEdHIn9xCLe2uoPaRtrkpelR1GERWKkc9AiEAwyCBHdWE3NFVvfaPHMrTk1oRzDmdCa5%2Fu2a6JOqAt5Yq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDDsOP4iEmCkVVQc9mSrcA89Wuj1sImhBYH1H3wSaetexdb5AbPMUke6RUJMb2f23jRnuM9BJXhTVZTrhBW69Z3jWuXkMtKHo89xZ8Phj%2BGITMRsXhP8sbivWAuQQdoqmFHn7J%2FP%2FsWhbYvCswWfMVqGG8j2%2BCl82hXIzTqfAw7ye9GgYif0LS%2B3mkcPuLsN%2BuM7kZyjPnAEM%2BSFyuu8l3XegC8Y3ULIbL%2FPn22psa8txIBriiO7ODWfOmMYbhNcobfYCAUTnVk3GSMLqhB6QMt6nVwqfaOlRkswJI27NnA4c5uAiev2MldReROkw83egYDSbNhQa0Xvr27HZkPL4xVEVopzojcPOasQkO0%2B4vl3PbDz%2FmeNxGR1TJudwq0K%2B7rgjkS3zbk88A%2F8muXSnnh8oNpNbDK2Er%2BXbvL4phM4ScVlkMM6EmPiMzO88EbCvMqFgHoZnV1d2%2FUI5hRwB30B6dQsO3BLpwa5suTjgeOuP5Zx2vV5Ap%2BCSAmMTSkmwQiXl9qCRdDjGnmFz9vpPcXdC%2FrHhN1V8NXxW1s9nnyG8n8xlJgZNpBX%2BDNEu9L74sCu2ZYffXSqs5norLE0y9FbjrcwGlnAZfgmoSxbo4XDbCsnI6BkTKAFwdbIs%2F8Ob41XyFnp20GSlCDiSMOOisMAGOqUB%2F5%2BlsWdXxtNomv8zlKPyFhoCuvk%2B3nlc5nTjH6BfwKfZey8IOOlixTVhRdRkiOoyppgNrbtlL7Rwxl6qs3Xym%2BjhIwXiFuzbou0kp1r0HtQhsuE6r8ksrQ0pPtcii%2Bh%2BXzEKbI9ky5dpEdfNDdI9BrX4ee4w%2FMdnck3BoUjZOOucAz4KrDUBCOlgyAC%2FLFkQbAm2YhSclIJ3nA8QDezjpUT2QAUZ&X-Amz-Signature=cb38d1f4cacea093d4f63091457b395dc3b5c56d3acc3da0131788b6dc31b3fb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653GI2QTL%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuFwlGK06fbEdHIn9xCLe2uoPaRtrkpelR1GERWKkc9AiEAwyCBHdWE3NFVvfaPHMrTk1oRzDmdCa5%2Fu2a6JOqAt5Yq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDDsOP4iEmCkVVQc9mSrcA89Wuj1sImhBYH1H3wSaetexdb5AbPMUke6RUJMb2f23jRnuM9BJXhTVZTrhBW69Z3jWuXkMtKHo89xZ8Phj%2BGITMRsXhP8sbivWAuQQdoqmFHn7J%2FP%2FsWhbYvCswWfMVqGG8j2%2BCl82hXIzTqfAw7ye9GgYif0LS%2B3mkcPuLsN%2BuM7kZyjPnAEM%2BSFyuu8l3XegC8Y3ULIbL%2FPn22psa8txIBriiO7ODWfOmMYbhNcobfYCAUTnVk3GSMLqhB6QMt6nVwqfaOlRkswJI27NnA4c5uAiev2MldReROkw83egYDSbNhQa0Xvr27HZkPL4xVEVopzojcPOasQkO0%2B4vl3PbDz%2FmeNxGR1TJudwq0K%2B7rgjkS3zbk88A%2F8muXSnnh8oNpNbDK2Er%2BXbvL4phM4ScVlkMM6EmPiMzO88EbCvMqFgHoZnV1d2%2FUI5hRwB30B6dQsO3BLpwa5suTjgeOuP5Zx2vV5Ap%2BCSAmMTSkmwQiXl9qCRdDjGnmFz9vpPcXdC%2FrHhN1V8NXxW1s9nnyG8n8xlJgZNpBX%2BDNEu9L74sCu2ZYffXSqs5norLE0y9FbjrcwGlnAZfgmoSxbo4XDbCsnI6BkTKAFwdbIs%2F8Ob41XyFnp20GSlCDiSMOOisMAGOqUB%2F5%2BlsWdXxtNomv8zlKPyFhoCuvk%2B3nlc5nTjH6BfwKfZey8IOOlixTVhRdRkiOoyppgNrbtlL7Rwxl6qs3Xym%2BjhIwXiFuzbou0kp1r0HtQhsuE6r8ksrQ0pPtcii%2Bh%2BXzEKbI9ky5dpEdfNDdI9BrX4ee4w%2FMdnck3BoUjZOOucAz4KrDUBCOlgyAC%2FLFkQbAm2YhSclIJ3nA8QDezjpUT2QAUZ&X-Amz-Signature=c3ce3a59f82e3b5c8a230e5d0ce8d400216be2be95662a8704061a873231e60a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653GI2QTL%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuFwlGK06fbEdHIn9xCLe2uoPaRtrkpelR1GERWKkc9AiEAwyCBHdWE3NFVvfaPHMrTk1oRzDmdCa5%2Fu2a6JOqAt5Yq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDDsOP4iEmCkVVQc9mSrcA89Wuj1sImhBYH1H3wSaetexdb5AbPMUke6RUJMb2f23jRnuM9BJXhTVZTrhBW69Z3jWuXkMtKHo89xZ8Phj%2BGITMRsXhP8sbivWAuQQdoqmFHn7J%2FP%2FsWhbYvCswWfMVqGG8j2%2BCl82hXIzTqfAw7ye9GgYif0LS%2B3mkcPuLsN%2BuM7kZyjPnAEM%2BSFyuu8l3XegC8Y3ULIbL%2FPn22psa8txIBriiO7ODWfOmMYbhNcobfYCAUTnVk3GSMLqhB6QMt6nVwqfaOlRkswJI27NnA4c5uAiev2MldReROkw83egYDSbNhQa0Xvr27HZkPL4xVEVopzojcPOasQkO0%2B4vl3PbDz%2FmeNxGR1TJudwq0K%2B7rgjkS3zbk88A%2F8muXSnnh8oNpNbDK2Er%2BXbvL4phM4ScVlkMM6EmPiMzO88EbCvMqFgHoZnV1d2%2FUI5hRwB30B6dQsO3BLpwa5suTjgeOuP5Zx2vV5Ap%2BCSAmMTSkmwQiXl9qCRdDjGnmFz9vpPcXdC%2FrHhN1V8NXxW1s9nnyG8n8xlJgZNpBX%2BDNEu9L74sCu2ZYffXSqs5norLE0y9FbjrcwGlnAZfgmoSxbo4XDbCsnI6BkTKAFwdbIs%2F8Ob41XyFnp20GSlCDiSMOOisMAGOqUB%2F5%2BlsWdXxtNomv8zlKPyFhoCuvk%2B3nlc5nTjH6BfwKfZey8IOOlixTVhRdRkiOoyppgNrbtlL7Rwxl6qs3Xym%2BjhIwXiFuzbou0kp1r0HtQhsuE6r8ksrQ0pPtcii%2Bh%2BXzEKbI9ky5dpEdfNDdI9BrX4ee4w%2FMdnck3BoUjZOOucAz4KrDUBCOlgyAC%2FLFkQbAm2YhSclIJ3nA8QDezjpUT2QAUZ&X-Amz-Signature=13ddfb3261490983a9eb6edda9949e471cb7bd9035715477022a3fd2b4991313&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653GI2QTL%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuFwlGK06fbEdHIn9xCLe2uoPaRtrkpelR1GERWKkc9AiEAwyCBHdWE3NFVvfaPHMrTk1oRzDmdCa5%2Fu2a6JOqAt5Yq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDDsOP4iEmCkVVQc9mSrcA89Wuj1sImhBYH1H3wSaetexdb5AbPMUke6RUJMb2f23jRnuM9BJXhTVZTrhBW69Z3jWuXkMtKHo89xZ8Phj%2BGITMRsXhP8sbivWAuQQdoqmFHn7J%2FP%2FsWhbYvCswWfMVqGG8j2%2BCl82hXIzTqfAw7ye9GgYif0LS%2B3mkcPuLsN%2BuM7kZyjPnAEM%2BSFyuu8l3XegC8Y3ULIbL%2FPn22psa8txIBriiO7ODWfOmMYbhNcobfYCAUTnVk3GSMLqhB6QMt6nVwqfaOlRkswJI27NnA4c5uAiev2MldReROkw83egYDSbNhQa0Xvr27HZkPL4xVEVopzojcPOasQkO0%2B4vl3PbDz%2FmeNxGR1TJudwq0K%2B7rgjkS3zbk88A%2F8muXSnnh8oNpNbDK2Er%2BXbvL4phM4ScVlkMM6EmPiMzO88EbCvMqFgHoZnV1d2%2FUI5hRwB30B6dQsO3BLpwa5suTjgeOuP5Zx2vV5Ap%2BCSAmMTSkmwQiXl9qCRdDjGnmFz9vpPcXdC%2FrHhN1V8NXxW1s9nnyG8n8xlJgZNpBX%2BDNEu9L74sCu2ZYffXSqs5norLE0y9FbjrcwGlnAZfgmoSxbo4XDbCsnI6BkTKAFwdbIs%2F8Ob41XyFnp20GSlCDiSMOOisMAGOqUB%2F5%2BlsWdXxtNomv8zlKPyFhoCuvk%2B3nlc5nTjH6BfwKfZey8IOOlixTVhRdRkiOoyppgNrbtlL7Rwxl6qs3Xym%2BjhIwXiFuzbou0kp1r0HtQhsuE6r8ksrQ0pPtcii%2Bh%2BXzEKbI9ky5dpEdfNDdI9BrX4ee4w%2FMdnck3BoUjZOOucAz4KrDUBCOlgyAC%2FLFkQbAm2YhSclIJ3nA8QDezjpUT2QAUZ&X-Amz-Signature=42c0c47fa6537b031646483dc04d4768c1b01c880ec4473563aeeaa0339aa6a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653GI2QTL%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuFwlGK06fbEdHIn9xCLe2uoPaRtrkpelR1GERWKkc9AiEAwyCBHdWE3NFVvfaPHMrTk1oRzDmdCa5%2Fu2a6JOqAt5Yq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDDsOP4iEmCkVVQc9mSrcA89Wuj1sImhBYH1H3wSaetexdb5AbPMUke6RUJMb2f23jRnuM9BJXhTVZTrhBW69Z3jWuXkMtKHo89xZ8Phj%2BGITMRsXhP8sbivWAuQQdoqmFHn7J%2FP%2FsWhbYvCswWfMVqGG8j2%2BCl82hXIzTqfAw7ye9GgYif0LS%2B3mkcPuLsN%2BuM7kZyjPnAEM%2BSFyuu8l3XegC8Y3ULIbL%2FPn22psa8txIBriiO7ODWfOmMYbhNcobfYCAUTnVk3GSMLqhB6QMt6nVwqfaOlRkswJI27NnA4c5uAiev2MldReROkw83egYDSbNhQa0Xvr27HZkPL4xVEVopzojcPOasQkO0%2B4vl3PbDz%2FmeNxGR1TJudwq0K%2B7rgjkS3zbk88A%2F8muXSnnh8oNpNbDK2Er%2BXbvL4phM4ScVlkMM6EmPiMzO88EbCvMqFgHoZnV1d2%2FUI5hRwB30B6dQsO3BLpwa5suTjgeOuP5Zx2vV5Ap%2BCSAmMTSkmwQiXl9qCRdDjGnmFz9vpPcXdC%2FrHhN1V8NXxW1s9nnyG8n8xlJgZNpBX%2BDNEu9L74sCu2ZYffXSqs5norLE0y9FbjrcwGlnAZfgmoSxbo4XDbCsnI6BkTKAFwdbIs%2F8Ob41XyFnp20GSlCDiSMOOisMAGOqUB%2F5%2BlsWdXxtNomv8zlKPyFhoCuvk%2B3nlc5nTjH6BfwKfZey8IOOlixTVhRdRkiOoyppgNrbtlL7Rwxl6qs3Xym%2BjhIwXiFuzbou0kp1r0HtQhsuE6r8ksrQ0pPtcii%2Bh%2BXzEKbI9ky5dpEdfNDdI9BrX4ee4w%2FMdnck3BoUjZOOucAz4KrDUBCOlgyAC%2FLFkQbAm2YhSclIJ3nA8QDezjpUT2QAUZ&X-Amz-Signature=dcb9ecc8095101cf7f2e565eb7dbd828b3d17d990a7e14b113fba7db759a2e7e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653GI2QTL%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuFwlGK06fbEdHIn9xCLe2uoPaRtrkpelR1GERWKkc9AiEAwyCBHdWE3NFVvfaPHMrTk1oRzDmdCa5%2Fu2a6JOqAt5Yq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDDsOP4iEmCkVVQc9mSrcA89Wuj1sImhBYH1H3wSaetexdb5AbPMUke6RUJMb2f23jRnuM9BJXhTVZTrhBW69Z3jWuXkMtKHo89xZ8Phj%2BGITMRsXhP8sbivWAuQQdoqmFHn7J%2FP%2FsWhbYvCswWfMVqGG8j2%2BCl82hXIzTqfAw7ye9GgYif0LS%2B3mkcPuLsN%2BuM7kZyjPnAEM%2BSFyuu8l3XegC8Y3ULIbL%2FPn22psa8txIBriiO7ODWfOmMYbhNcobfYCAUTnVk3GSMLqhB6QMt6nVwqfaOlRkswJI27NnA4c5uAiev2MldReROkw83egYDSbNhQa0Xvr27HZkPL4xVEVopzojcPOasQkO0%2B4vl3PbDz%2FmeNxGR1TJudwq0K%2B7rgjkS3zbk88A%2F8muXSnnh8oNpNbDK2Er%2BXbvL4phM4ScVlkMM6EmPiMzO88EbCvMqFgHoZnV1d2%2FUI5hRwB30B6dQsO3BLpwa5suTjgeOuP5Zx2vV5Ap%2BCSAmMTSkmwQiXl9qCRdDjGnmFz9vpPcXdC%2FrHhN1V8NXxW1s9nnyG8n8xlJgZNpBX%2BDNEu9L74sCu2ZYffXSqs5norLE0y9FbjrcwGlnAZfgmoSxbo4XDbCsnI6BkTKAFwdbIs%2F8Ob41XyFnp20GSlCDiSMOOisMAGOqUB%2F5%2BlsWdXxtNomv8zlKPyFhoCuvk%2B3nlc5nTjH6BfwKfZey8IOOlixTVhRdRkiOoyppgNrbtlL7Rwxl6qs3Xym%2BjhIwXiFuzbou0kp1r0HtQhsuE6r8ksrQ0pPtcii%2Bh%2BXzEKbI9ky5dpEdfNDdI9BrX4ee4w%2FMdnck3BoUjZOOucAz4KrDUBCOlgyAC%2FLFkQbAm2YhSclIJ3nA8QDezjpUT2QAUZ&X-Amz-Signature=f7f068439d21bf59b333b7ffbb693d5478cad3ddca0878eb39036b9d04e19eec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
