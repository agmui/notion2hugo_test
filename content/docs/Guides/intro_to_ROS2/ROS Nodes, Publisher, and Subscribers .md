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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ3PQO7Y%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApod1bnlQXE9MPlPt5ev8fXfTVi70VY%2F%2Bx67lp%2Bh3WaAiEA1VE0sXzTPb%2BEBA%2FX6tyVLj8nTT1LgT81GzD9XSJXVpcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeTk%2F1RoBUiur0sYCrcA0aAD8ABZUQhHrPIY%2BI%2BwDFa0DOgMTcwEEmNnDJPJgMjHiaS1dUivVithTHiRm%2Bkkfvp5jBIu%2FhxFdIujpj3laQjRFC9gY3t9st90Vck7BJk6sfWwML%2Fg7P9PfaQPSozVuvbd6E9a2yK21Uk2HgwkoJSiZ%2FyzC3dRfGC9yNHwYQI5GzhnhJFSnv6o%2F5Fo%2B0eisX%2FufAkyqEmAfLy9XFdbYEbJh7wq%2FiBqWNHMBcBIxumeOhRUddgGlszzVyKaJHWI2MEz1iHLQgBvDTORSZYazhyAoAUXqgQABwn8DngaOpDhlddm%2FCqvS%2Fqu25p9FsVLLwZeP6rkdaFWpuAbWKzytCkyuaerlHr%2Fo9yChKkH13y3Qp4Qr%2BlxidhaWgzMSIA%2FlP7FUZWgMLvb4KCqIph4O9G4EuXAaJcxFYlcTMqMidIYs2C8c5uTo45cq8XjlPQmQUM%2Fx88MuTtzf9%2B3L21B6OrzeQiKInPxm%2F5Y3o4IJtl9o6zhZLSm0%2FvUtffT%2FwmhUhrRuMeCjscNhgTw6KACKmIZsjJ78Xz2kMCZ6UYVpmtWL1kpEQTT%2FwOKgBJvGtRu%2BgRd3A60ltCX5217VKKMck9Y9%2F2mSz6w2W0b4Unz%2FBMFh%2BjFid7ThfqDqWuMPmBrMEGOqUBcrB4RvCAyICAhfVECXaVzX%2FkN%2FeOV7FjLwD0bNbVjbv2qmySJzRqRaf5k%2Fq7A2f6wJeRyAYLXiV4UMY81s7%2BUWg4Rg3o9xFeStLqGfgL6km5wJvNgNxrgLkwo6QVJCipUruW91tZ%2F%2BfJquitAEeGmhggAHmLUjX4MLLs3abBqafXPCvauBVsF1VQKrcKJvJ%2FnfLMkdLQ7oQFenRfgY8V4g4L39st&X-Amz-Signature=42b12e2ebc0c6589a7ff521214410ca85b4e7a37e62d161c469f7a4b3a05a628&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ3PQO7Y%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApod1bnlQXE9MPlPt5ev8fXfTVi70VY%2F%2Bx67lp%2Bh3WaAiEA1VE0sXzTPb%2BEBA%2FX6tyVLj8nTT1LgT81GzD9XSJXVpcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeTk%2F1RoBUiur0sYCrcA0aAD8ABZUQhHrPIY%2BI%2BwDFa0DOgMTcwEEmNnDJPJgMjHiaS1dUivVithTHiRm%2Bkkfvp5jBIu%2FhxFdIujpj3laQjRFC9gY3t9st90Vck7BJk6sfWwML%2Fg7P9PfaQPSozVuvbd6E9a2yK21Uk2HgwkoJSiZ%2FyzC3dRfGC9yNHwYQI5GzhnhJFSnv6o%2F5Fo%2B0eisX%2FufAkyqEmAfLy9XFdbYEbJh7wq%2FiBqWNHMBcBIxumeOhRUddgGlszzVyKaJHWI2MEz1iHLQgBvDTORSZYazhyAoAUXqgQABwn8DngaOpDhlddm%2FCqvS%2Fqu25p9FsVLLwZeP6rkdaFWpuAbWKzytCkyuaerlHr%2Fo9yChKkH13y3Qp4Qr%2BlxidhaWgzMSIA%2FlP7FUZWgMLvb4KCqIph4O9G4EuXAaJcxFYlcTMqMidIYs2C8c5uTo45cq8XjlPQmQUM%2Fx88MuTtzf9%2B3L21B6OrzeQiKInPxm%2F5Y3o4IJtl9o6zhZLSm0%2FvUtffT%2FwmhUhrRuMeCjscNhgTw6KACKmIZsjJ78Xz2kMCZ6UYVpmtWL1kpEQTT%2FwOKgBJvGtRu%2BgRd3A60ltCX5217VKKMck9Y9%2F2mSz6w2W0b4Unz%2FBMFh%2BjFid7ThfqDqWuMPmBrMEGOqUBcrB4RvCAyICAhfVECXaVzX%2FkN%2FeOV7FjLwD0bNbVjbv2qmySJzRqRaf5k%2Fq7A2f6wJeRyAYLXiV4UMY81s7%2BUWg4Rg3o9xFeStLqGfgL6km5wJvNgNxrgLkwo6QVJCipUruW91tZ%2F%2BfJquitAEeGmhggAHmLUjX4MLLs3abBqafXPCvauBVsF1VQKrcKJvJ%2FnfLMkdLQ7oQFenRfgY8V4g4L39st&X-Amz-Signature=6528f12c96225b3fa82b55cf18c2e286b41485a7241b5b163d4cf3eeea25bc4e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ3PQO7Y%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApod1bnlQXE9MPlPt5ev8fXfTVi70VY%2F%2Bx67lp%2Bh3WaAiEA1VE0sXzTPb%2BEBA%2FX6tyVLj8nTT1LgT81GzD9XSJXVpcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeTk%2F1RoBUiur0sYCrcA0aAD8ABZUQhHrPIY%2BI%2BwDFa0DOgMTcwEEmNnDJPJgMjHiaS1dUivVithTHiRm%2Bkkfvp5jBIu%2FhxFdIujpj3laQjRFC9gY3t9st90Vck7BJk6sfWwML%2Fg7P9PfaQPSozVuvbd6E9a2yK21Uk2HgwkoJSiZ%2FyzC3dRfGC9yNHwYQI5GzhnhJFSnv6o%2F5Fo%2B0eisX%2FufAkyqEmAfLy9XFdbYEbJh7wq%2FiBqWNHMBcBIxumeOhRUddgGlszzVyKaJHWI2MEz1iHLQgBvDTORSZYazhyAoAUXqgQABwn8DngaOpDhlddm%2FCqvS%2Fqu25p9FsVLLwZeP6rkdaFWpuAbWKzytCkyuaerlHr%2Fo9yChKkH13y3Qp4Qr%2BlxidhaWgzMSIA%2FlP7FUZWgMLvb4KCqIph4O9G4EuXAaJcxFYlcTMqMidIYs2C8c5uTo45cq8XjlPQmQUM%2Fx88MuTtzf9%2B3L21B6OrzeQiKInPxm%2F5Y3o4IJtl9o6zhZLSm0%2FvUtffT%2FwmhUhrRuMeCjscNhgTw6KACKmIZsjJ78Xz2kMCZ6UYVpmtWL1kpEQTT%2FwOKgBJvGtRu%2BgRd3A60ltCX5217VKKMck9Y9%2F2mSz6w2W0b4Unz%2FBMFh%2BjFid7ThfqDqWuMPmBrMEGOqUBcrB4RvCAyICAhfVECXaVzX%2FkN%2FeOV7FjLwD0bNbVjbv2qmySJzRqRaf5k%2Fq7A2f6wJeRyAYLXiV4UMY81s7%2BUWg4Rg3o9xFeStLqGfgL6km5wJvNgNxrgLkwo6QVJCipUruW91tZ%2F%2BfJquitAEeGmhggAHmLUjX4MLLs3abBqafXPCvauBVsF1VQKrcKJvJ%2FnfLMkdLQ7oQFenRfgY8V4g4L39st&X-Amz-Signature=33ebc49f49e2c013a72f6fdb03c70a656b75845ed3684fde87d583f42f405f4b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ3PQO7Y%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApod1bnlQXE9MPlPt5ev8fXfTVi70VY%2F%2Bx67lp%2Bh3WaAiEA1VE0sXzTPb%2BEBA%2FX6tyVLj8nTT1LgT81GzD9XSJXVpcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeTk%2F1RoBUiur0sYCrcA0aAD8ABZUQhHrPIY%2BI%2BwDFa0DOgMTcwEEmNnDJPJgMjHiaS1dUivVithTHiRm%2Bkkfvp5jBIu%2FhxFdIujpj3laQjRFC9gY3t9st90Vck7BJk6sfWwML%2Fg7P9PfaQPSozVuvbd6E9a2yK21Uk2HgwkoJSiZ%2FyzC3dRfGC9yNHwYQI5GzhnhJFSnv6o%2F5Fo%2B0eisX%2FufAkyqEmAfLy9XFdbYEbJh7wq%2FiBqWNHMBcBIxumeOhRUddgGlszzVyKaJHWI2MEz1iHLQgBvDTORSZYazhyAoAUXqgQABwn8DngaOpDhlddm%2FCqvS%2Fqu25p9FsVLLwZeP6rkdaFWpuAbWKzytCkyuaerlHr%2Fo9yChKkH13y3Qp4Qr%2BlxidhaWgzMSIA%2FlP7FUZWgMLvb4KCqIph4O9G4EuXAaJcxFYlcTMqMidIYs2C8c5uTo45cq8XjlPQmQUM%2Fx88MuTtzf9%2B3L21B6OrzeQiKInPxm%2F5Y3o4IJtl9o6zhZLSm0%2FvUtffT%2FwmhUhrRuMeCjscNhgTw6KACKmIZsjJ78Xz2kMCZ6UYVpmtWL1kpEQTT%2FwOKgBJvGtRu%2BgRd3A60ltCX5217VKKMck9Y9%2F2mSz6w2W0b4Unz%2FBMFh%2BjFid7ThfqDqWuMPmBrMEGOqUBcrB4RvCAyICAhfVECXaVzX%2FkN%2FeOV7FjLwD0bNbVjbv2qmySJzRqRaf5k%2Fq7A2f6wJeRyAYLXiV4UMY81s7%2BUWg4Rg3o9xFeStLqGfgL6km5wJvNgNxrgLkwo6QVJCipUruW91tZ%2F%2BfJquitAEeGmhggAHmLUjX4MLLs3abBqafXPCvauBVsF1VQKrcKJvJ%2FnfLMkdLQ7oQFenRfgY8V4g4L39st&X-Amz-Signature=adb463b0fd4d3a177d38d10d1e3ee3085bf431f686624b6f4cd2eb49f96ea211&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ3PQO7Y%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApod1bnlQXE9MPlPt5ev8fXfTVi70VY%2F%2Bx67lp%2Bh3WaAiEA1VE0sXzTPb%2BEBA%2FX6tyVLj8nTT1LgT81GzD9XSJXVpcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeTk%2F1RoBUiur0sYCrcA0aAD8ABZUQhHrPIY%2BI%2BwDFa0DOgMTcwEEmNnDJPJgMjHiaS1dUivVithTHiRm%2Bkkfvp5jBIu%2FhxFdIujpj3laQjRFC9gY3t9st90Vck7BJk6sfWwML%2Fg7P9PfaQPSozVuvbd6E9a2yK21Uk2HgwkoJSiZ%2FyzC3dRfGC9yNHwYQI5GzhnhJFSnv6o%2F5Fo%2B0eisX%2FufAkyqEmAfLy9XFdbYEbJh7wq%2FiBqWNHMBcBIxumeOhRUddgGlszzVyKaJHWI2MEz1iHLQgBvDTORSZYazhyAoAUXqgQABwn8DngaOpDhlddm%2FCqvS%2Fqu25p9FsVLLwZeP6rkdaFWpuAbWKzytCkyuaerlHr%2Fo9yChKkH13y3Qp4Qr%2BlxidhaWgzMSIA%2FlP7FUZWgMLvb4KCqIph4O9G4EuXAaJcxFYlcTMqMidIYs2C8c5uTo45cq8XjlPQmQUM%2Fx88MuTtzf9%2B3L21B6OrzeQiKInPxm%2F5Y3o4IJtl9o6zhZLSm0%2FvUtffT%2FwmhUhrRuMeCjscNhgTw6KACKmIZsjJ78Xz2kMCZ6UYVpmtWL1kpEQTT%2FwOKgBJvGtRu%2BgRd3A60ltCX5217VKKMck9Y9%2F2mSz6w2W0b4Unz%2FBMFh%2BjFid7ThfqDqWuMPmBrMEGOqUBcrB4RvCAyICAhfVECXaVzX%2FkN%2FeOV7FjLwD0bNbVjbv2qmySJzRqRaf5k%2Fq7A2f6wJeRyAYLXiV4UMY81s7%2BUWg4Rg3o9xFeStLqGfgL6km5wJvNgNxrgLkwo6QVJCipUruW91tZ%2F%2BfJquitAEeGmhggAHmLUjX4MLLs3abBqafXPCvauBVsF1VQKrcKJvJ%2FnfLMkdLQ7oQFenRfgY8V4g4L39st&X-Amz-Signature=a4d8f9f01c6c69b95e7fa5e1d560f63e6d0534c8bc3e2e72fde72f830ea8b3b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ3PQO7Y%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApod1bnlQXE9MPlPt5ev8fXfTVi70VY%2F%2Bx67lp%2Bh3WaAiEA1VE0sXzTPb%2BEBA%2FX6tyVLj8nTT1LgT81GzD9XSJXVpcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeTk%2F1RoBUiur0sYCrcA0aAD8ABZUQhHrPIY%2BI%2BwDFa0DOgMTcwEEmNnDJPJgMjHiaS1dUivVithTHiRm%2Bkkfvp5jBIu%2FhxFdIujpj3laQjRFC9gY3t9st90Vck7BJk6sfWwML%2Fg7P9PfaQPSozVuvbd6E9a2yK21Uk2HgwkoJSiZ%2FyzC3dRfGC9yNHwYQI5GzhnhJFSnv6o%2F5Fo%2B0eisX%2FufAkyqEmAfLy9XFdbYEbJh7wq%2FiBqWNHMBcBIxumeOhRUddgGlszzVyKaJHWI2MEz1iHLQgBvDTORSZYazhyAoAUXqgQABwn8DngaOpDhlddm%2FCqvS%2Fqu25p9FsVLLwZeP6rkdaFWpuAbWKzytCkyuaerlHr%2Fo9yChKkH13y3Qp4Qr%2BlxidhaWgzMSIA%2FlP7FUZWgMLvb4KCqIph4O9G4EuXAaJcxFYlcTMqMidIYs2C8c5uTo45cq8XjlPQmQUM%2Fx88MuTtzf9%2B3L21B6OrzeQiKInPxm%2F5Y3o4IJtl9o6zhZLSm0%2FvUtffT%2FwmhUhrRuMeCjscNhgTw6KACKmIZsjJ78Xz2kMCZ6UYVpmtWL1kpEQTT%2FwOKgBJvGtRu%2BgRd3A60ltCX5217VKKMck9Y9%2F2mSz6w2W0b4Unz%2FBMFh%2BjFid7ThfqDqWuMPmBrMEGOqUBcrB4RvCAyICAhfVECXaVzX%2FkN%2FeOV7FjLwD0bNbVjbv2qmySJzRqRaf5k%2Fq7A2f6wJeRyAYLXiV4UMY81s7%2BUWg4Rg3o9xFeStLqGfgL6km5wJvNgNxrgLkwo6QVJCipUruW91tZ%2F%2BfJquitAEeGmhggAHmLUjX4MLLs3abBqafXPCvauBVsF1VQKrcKJvJ%2FnfLMkdLQ7oQFenRfgY8V4g4L39st&X-Amz-Signature=7c5828ac6549aed43f9db2385d3a1d8cc32b705f627fc65406e5cf6f9dd5bf1f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ3PQO7Y%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApod1bnlQXE9MPlPt5ev8fXfTVi70VY%2F%2Bx67lp%2Bh3WaAiEA1VE0sXzTPb%2BEBA%2FX6tyVLj8nTT1LgT81GzD9XSJXVpcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeTk%2F1RoBUiur0sYCrcA0aAD8ABZUQhHrPIY%2BI%2BwDFa0DOgMTcwEEmNnDJPJgMjHiaS1dUivVithTHiRm%2Bkkfvp5jBIu%2FhxFdIujpj3laQjRFC9gY3t9st90Vck7BJk6sfWwML%2Fg7P9PfaQPSozVuvbd6E9a2yK21Uk2HgwkoJSiZ%2FyzC3dRfGC9yNHwYQI5GzhnhJFSnv6o%2F5Fo%2B0eisX%2FufAkyqEmAfLy9XFdbYEbJh7wq%2FiBqWNHMBcBIxumeOhRUddgGlszzVyKaJHWI2MEz1iHLQgBvDTORSZYazhyAoAUXqgQABwn8DngaOpDhlddm%2FCqvS%2Fqu25p9FsVLLwZeP6rkdaFWpuAbWKzytCkyuaerlHr%2Fo9yChKkH13y3Qp4Qr%2BlxidhaWgzMSIA%2FlP7FUZWgMLvb4KCqIph4O9G4EuXAaJcxFYlcTMqMidIYs2C8c5uTo45cq8XjlPQmQUM%2Fx88MuTtzf9%2B3L21B6OrzeQiKInPxm%2F5Y3o4IJtl9o6zhZLSm0%2FvUtffT%2FwmhUhrRuMeCjscNhgTw6KACKmIZsjJ78Xz2kMCZ6UYVpmtWL1kpEQTT%2FwOKgBJvGtRu%2BgRd3A60ltCX5217VKKMck9Y9%2F2mSz6w2W0b4Unz%2FBMFh%2BjFid7ThfqDqWuMPmBrMEGOqUBcrB4RvCAyICAhfVECXaVzX%2FkN%2FeOV7FjLwD0bNbVjbv2qmySJzRqRaf5k%2Fq7A2f6wJeRyAYLXiV4UMY81s7%2BUWg4Rg3o9xFeStLqGfgL6km5wJvNgNxrgLkwo6QVJCipUruW91tZ%2F%2BfJquitAEeGmhggAHmLUjX4MLLs3abBqafXPCvauBVsF1VQKrcKJvJ%2FnfLMkdLQ7oQFenRfgY8V4g4L39st&X-Amz-Signature=3138da6a55b98890a24074bd51cbccf2909608dc12f6f6e07dad71e9fddc1706&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ3PQO7Y%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApod1bnlQXE9MPlPt5ev8fXfTVi70VY%2F%2Bx67lp%2Bh3WaAiEA1VE0sXzTPb%2BEBA%2FX6tyVLj8nTT1LgT81GzD9XSJXVpcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeTk%2F1RoBUiur0sYCrcA0aAD8ABZUQhHrPIY%2BI%2BwDFa0DOgMTcwEEmNnDJPJgMjHiaS1dUivVithTHiRm%2Bkkfvp5jBIu%2FhxFdIujpj3laQjRFC9gY3t9st90Vck7BJk6sfWwML%2Fg7P9PfaQPSozVuvbd6E9a2yK21Uk2HgwkoJSiZ%2FyzC3dRfGC9yNHwYQI5GzhnhJFSnv6o%2F5Fo%2B0eisX%2FufAkyqEmAfLy9XFdbYEbJh7wq%2FiBqWNHMBcBIxumeOhRUddgGlszzVyKaJHWI2MEz1iHLQgBvDTORSZYazhyAoAUXqgQABwn8DngaOpDhlddm%2FCqvS%2Fqu25p9FsVLLwZeP6rkdaFWpuAbWKzytCkyuaerlHr%2Fo9yChKkH13y3Qp4Qr%2BlxidhaWgzMSIA%2FlP7FUZWgMLvb4KCqIph4O9G4EuXAaJcxFYlcTMqMidIYs2C8c5uTo45cq8XjlPQmQUM%2Fx88MuTtzf9%2B3L21B6OrzeQiKInPxm%2F5Y3o4IJtl9o6zhZLSm0%2FvUtffT%2FwmhUhrRuMeCjscNhgTw6KACKmIZsjJ78Xz2kMCZ6UYVpmtWL1kpEQTT%2FwOKgBJvGtRu%2BgRd3A60ltCX5217VKKMck9Y9%2F2mSz6w2W0b4Unz%2FBMFh%2BjFid7ThfqDqWuMPmBrMEGOqUBcrB4RvCAyICAhfVECXaVzX%2FkN%2FeOV7FjLwD0bNbVjbv2qmySJzRqRaf5k%2Fq7A2f6wJeRyAYLXiV4UMY81s7%2BUWg4Rg3o9xFeStLqGfgL6km5wJvNgNxrgLkwo6QVJCipUruW91tZ%2F%2BfJquitAEeGmhggAHmLUjX4MLLs3abBqafXPCvauBVsF1VQKrcKJvJ%2FnfLMkdLQ7oQFenRfgY8V4g4L39st&X-Amz-Signature=f52a5b0c968c60bcaa356e348cbcc8424f5a3a58ce9de0c08023a5e31f46ce09&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
