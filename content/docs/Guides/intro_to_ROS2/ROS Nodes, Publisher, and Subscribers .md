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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEE5APFC%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9p9aT%2BpIfSGBoiktBX53zbwoKx3MDoYpGnEB8ilo0BwIgRdVYxT5wMi7uRJFupNJjOubHNxxpaghvt8AOwtQysoQq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLQe2bvGcCOK6lCfcircAyeZw0QoDqYPwwXwAy3qYpPUkPcDjXnOAElRhisujZ%2F3chidHYHu9Ve3lHMDXzTvukHLPOR%2Ffpd9xKy2W%2FkhK%2FSZUUayjVFvnEYyo505b8LlU3na2t4iRKEwWw%2BgQER8EpxKenexHlSKQfs7ecyuqVVrXOSf%2FnBp2wr4UFdjm8Zdpn7AhNpfll14EXE2YkJXlREYBqL8Gw6As9ndPoQbDd8jDq4jFMFKI2LnPXjJ9rygIVZO7caYQWSHnZ%2FxG45IGZk%2FE9XJ2%2FeUinqn8MqCSJfwlwH54K6%2FOQqyGFsK7vAF%2BuVnQrIJBrnh8FU6O8Ab2qdlxcH68gDmbRHlj%2FDHohq1zGGVGjW0TQonaS8wbsiYt8AlapLXJEa5es1CZLWMJ3noZ6kQs%2FxLk%2F3WtT3O7aOnrBXIw8780lXblaJtTSj1CKfhRk3tYU8XOuxWbigSyym4eZPYXYoqOCR0ZUUTnRLA2r5M4%2FyJm%2Frd3%2B7SuQMKI%2BNmzOfgUO8kq47cY2uIQChe5338I%2BJ%2Bu5%2FSWi4QwADJKQgcG5Wy6qzUoPylvUdEy0uwXLUs0RgQ%2Fie2hQKhu3qRUxRjMmeZR8OD9tKU%2FT1wGMiDSf6hKhkQVqoizOOrIBPGWRLksSHickztMLzrjr8GOqUBLItsDcm5qc5SIWgU9NyJrG2FZHSfRerOQQzOsXRhO5mFT0iPvN8wtW9OwEWTS79gy7TDJQhIe8z5mMQLHnv2cq7Urazv35IxGsUAOhkDbmveDQxhy9%2FVngzAGVsI4rnrkEGR5VxtMAIaIQb%2BOMDoPGXYxLAPnW0M5mXeFqCRQLhfVpCpxPhiyAFpCY2ehRtKY1138KYNIBuVBUWwPH5lUEoxK8pN&X-Amz-Signature=faefa2b4596eb013b916000cd65ff301a121a37ff3298759cac33989587cd7e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEE5APFC%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9p9aT%2BpIfSGBoiktBX53zbwoKx3MDoYpGnEB8ilo0BwIgRdVYxT5wMi7uRJFupNJjOubHNxxpaghvt8AOwtQysoQq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLQe2bvGcCOK6lCfcircAyeZw0QoDqYPwwXwAy3qYpPUkPcDjXnOAElRhisujZ%2F3chidHYHu9Ve3lHMDXzTvukHLPOR%2Ffpd9xKy2W%2FkhK%2FSZUUayjVFvnEYyo505b8LlU3na2t4iRKEwWw%2BgQER8EpxKenexHlSKQfs7ecyuqVVrXOSf%2FnBp2wr4UFdjm8Zdpn7AhNpfll14EXE2YkJXlREYBqL8Gw6As9ndPoQbDd8jDq4jFMFKI2LnPXjJ9rygIVZO7caYQWSHnZ%2FxG45IGZk%2FE9XJ2%2FeUinqn8MqCSJfwlwH54K6%2FOQqyGFsK7vAF%2BuVnQrIJBrnh8FU6O8Ab2qdlxcH68gDmbRHlj%2FDHohq1zGGVGjW0TQonaS8wbsiYt8AlapLXJEa5es1CZLWMJ3noZ6kQs%2FxLk%2F3WtT3O7aOnrBXIw8780lXblaJtTSj1CKfhRk3tYU8XOuxWbigSyym4eZPYXYoqOCR0ZUUTnRLA2r5M4%2FyJm%2Frd3%2B7SuQMKI%2BNmzOfgUO8kq47cY2uIQChe5338I%2BJ%2Bu5%2FSWi4QwADJKQgcG5Wy6qzUoPylvUdEy0uwXLUs0RgQ%2Fie2hQKhu3qRUxRjMmeZR8OD9tKU%2FT1wGMiDSf6hKhkQVqoizOOrIBPGWRLksSHickztMLzrjr8GOqUBLItsDcm5qc5SIWgU9NyJrG2FZHSfRerOQQzOsXRhO5mFT0iPvN8wtW9OwEWTS79gy7TDJQhIe8z5mMQLHnv2cq7Urazv35IxGsUAOhkDbmveDQxhy9%2FVngzAGVsI4rnrkEGR5VxtMAIaIQb%2BOMDoPGXYxLAPnW0M5mXeFqCRQLhfVpCpxPhiyAFpCY2ehRtKY1138KYNIBuVBUWwPH5lUEoxK8pN&X-Amz-Signature=eb6338f2b7b5521b767281ae0d84faa6836e3d2070840a9a7632369d56e01acd&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEE5APFC%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9p9aT%2BpIfSGBoiktBX53zbwoKx3MDoYpGnEB8ilo0BwIgRdVYxT5wMi7uRJFupNJjOubHNxxpaghvt8AOwtQysoQq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLQe2bvGcCOK6lCfcircAyeZw0QoDqYPwwXwAy3qYpPUkPcDjXnOAElRhisujZ%2F3chidHYHu9Ve3lHMDXzTvukHLPOR%2Ffpd9xKy2W%2FkhK%2FSZUUayjVFvnEYyo505b8LlU3na2t4iRKEwWw%2BgQER8EpxKenexHlSKQfs7ecyuqVVrXOSf%2FnBp2wr4UFdjm8Zdpn7AhNpfll14EXE2YkJXlREYBqL8Gw6As9ndPoQbDd8jDq4jFMFKI2LnPXjJ9rygIVZO7caYQWSHnZ%2FxG45IGZk%2FE9XJ2%2FeUinqn8MqCSJfwlwH54K6%2FOQqyGFsK7vAF%2BuVnQrIJBrnh8FU6O8Ab2qdlxcH68gDmbRHlj%2FDHohq1zGGVGjW0TQonaS8wbsiYt8AlapLXJEa5es1CZLWMJ3noZ6kQs%2FxLk%2F3WtT3O7aOnrBXIw8780lXblaJtTSj1CKfhRk3tYU8XOuxWbigSyym4eZPYXYoqOCR0ZUUTnRLA2r5M4%2FyJm%2Frd3%2B7SuQMKI%2BNmzOfgUO8kq47cY2uIQChe5338I%2BJ%2Bu5%2FSWi4QwADJKQgcG5Wy6qzUoPylvUdEy0uwXLUs0RgQ%2Fie2hQKhu3qRUxRjMmeZR8OD9tKU%2FT1wGMiDSf6hKhkQVqoizOOrIBPGWRLksSHickztMLzrjr8GOqUBLItsDcm5qc5SIWgU9NyJrG2FZHSfRerOQQzOsXRhO5mFT0iPvN8wtW9OwEWTS79gy7TDJQhIe8z5mMQLHnv2cq7Urazv35IxGsUAOhkDbmveDQxhy9%2FVngzAGVsI4rnrkEGR5VxtMAIaIQb%2BOMDoPGXYxLAPnW0M5mXeFqCRQLhfVpCpxPhiyAFpCY2ehRtKY1138KYNIBuVBUWwPH5lUEoxK8pN&X-Amz-Signature=5db1a21aca277c00858a7e3a2a06b02cce15f627b475573251f9256a217a11e9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEE5APFC%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9p9aT%2BpIfSGBoiktBX53zbwoKx3MDoYpGnEB8ilo0BwIgRdVYxT5wMi7uRJFupNJjOubHNxxpaghvt8AOwtQysoQq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLQe2bvGcCOK6lCfcircAyeZw0QoDqYPwwXwAy3qYpPUkPcDjXnOAElRhisujZ%2F3chidHYHu9Ve3lHMDXzTvukHLPOR%2Ffpd9xKy2W%2FkhK%2FSZUUayjVFvnEYyo505b8LlU3na2t4iRKEwWw%2BgQER8EpxKenexHlSKQfs7ecyuqVVrXOSf%2FnBp2wr4UFdjm8Zdpn7AhNpfll14EXE2YkJXlREYBqL8Gw6As9ndPoQbDd8jDq4jFMFKI2LnPXjJ9rygIVZO7caYQWSHnZ%2FxG45IGZk%2FE9XJ2%2FeUinqn8MqCSJfwlwH54K6%2FOQqyGFsK7vAF%2BuVnQrIJBrnh8FU6O8Ab2qdlxcH68gDmbRHlj%2FDHohq1zGGVGjW0TQonaS8wbsiYt8AlapLXJEa5es1CZLWMJ3noZ6kQs%2FxLk%2F3WtT3O7aOnrBXIw8780lXblaJtTSj1CKfhRk3tYU8XOuxWbigSyym4eZPYXYoqOCR0ZUUTnRLA2r5M4%2FyJm%2Frd3%2B7SuQMKI%2BNmzOfgUO8kq47cY2uIQChe5338I%2BJ%2Bu5%2FSWi4QwADJKQgcG5Wy6qzUoPylvUdEy0uwXLUs0RgQ%2Fie2hQKhu3qRUxRjMmeZR8OD9tKU%2FT1wGMiDSf6hKhkQVqoizOOrIBPGWRLksSHickztMLzrjr8GOqUBLItsDcm5qc5SIWgU9NyJrG2FZHSfRerOQQzOsXRhO5mFT0iPvN8wtW9OwEWTS79gy7TDJQhIe8z5mMQLHnv2cq7Urazv35IxGsUAOhkDbmveDQxhy9%2FVngzAGVsI4rnrkEGR5VxtMAIaIQb%2BOMDoPGXYxLAPnW0M5mXeFqCRQLhfVpCpxPhiyAFpCY2ehRtKY1138KYNIBuVBUWwPH5lUEoxK8pN&X-Amz-Signature=ce6aaad39a768b949ace8ff6a60bdcb91f0bb0e51b9adba8a0ef650a1b9a7871&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEE5APFC%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9p9aT%2BpIfSGBoiktBX53zbwoKx3MDoYpGnEB8ilo0BwIgRdVYxT5wMi7uRJFupNJjOubHNxxpaghvt8AOwtQysoQq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLQe2bvGcCOK6lCfcircAyeZw0QoDqYPwwXwAy3qYpPUkPcDjXnOAElRhisujZ%2F3chidHYHu9Ve3lHMDXzTvukHLPOR%2Ffpd9xKy2W%2FkhK%2FSZUUayjVFvnEYyo505b8LlU3na2t4iRKEwWw%2BgQER8EpxKenexHlSKQfs7ecyuqVVrXOSf%2FnBp2wr4UFdjm8Zdpn7AhNpfll14EXE2YkJXlREYBqL8Gw6As9ndPoQbDd8jDq4jFMFKI2LnPXjJ9rygIVZO7caYQWSHnZ%2FxG45IGZk%2FE9XJ2%2FeUinqn8MqCSJfwlwH54K6%2FOQqyGFsK7vAF%2BuVnQrIJBrnh8FU6O8Ab2qdlxcH68gDmbRHlj%2FDHohq1zGGVGjW0TQonaS8wbsiYt8AlapLXJEa5es1CZLWMJ3noZ6kQs%2FxLk%2F3WtT3O7aOnrBXIw8780lXblaJtTSj1CKfhRk3tYU8XOuxWbigSyym4eZPYXYoqOCR0ZUUTnRLA2r5M4%2FyJm%2Frd3%2B7SuQMKI%2BNmzOfgUO8kq47cY2uIQChe5338I%2BJ%2Bu5%2FSWi4QwADJKQgcG5Wy6qzUoPylvUdEy0uwXLUs0RgQ%2Fie2hQKhu3qRUxRjMmeZR8OD9tKU%2FT1wGMiDSf6hKhkQVqoizOOrIBPGWRLksSHickztMLzrjr8GOqUBLItsDcm5qc5SIWgU9NyJrG2FZHSfRerOQQzOsXRhO5mFT0iPvN8wtW9OwEWTS79gy7TDJQhIe8z5mMQLHnv2cq7Urazv35IxGsUAOhkDbmveDQxhy9%2FVngzAGVsI4rnrkEGR5VxtMAIaIQb%2BOMDoPGXYxLAPnW0M5mXeFqCRQLhfVpCpxPhiyAFpCY2ehRtKY1138KYNIBuVBUWwPH5lUEoxK8pN&X-Amz-Signature=46a368ba84546be8f88c099d4ec09baa7b6426fd42964ab22b759db08bfa74db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEE5APFC%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9p9aT%2BpIfSGBoiktBX53zbwoKx3MDoYpGnEB8ilo0BwIgRdVYxT5wMi7uRJFupNJjOubHNxxpaghvt8AOwtQysoQq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLQe2bvGcCOK6lCfcircAyeZw0QoDqYPwwXwAy3qYpPUkPcDjXnOAElRhisujZ%2F3chidHYHu9Ve3lHMDXzTvukHLPOR%2Ffpd9xKy2W%2FkhK%2FSZUUayjVFvnEYyo505b8LlU3na2t4iRKEwWw%2BgQER8EpxKenexHlSKQfs7ecyuqVVrXOSf%2FnBp2wr4UFdjm8Zdpn7AhNpfll14EXE2YkJXlREYBqL8Gw6As9ndPoQbDd8jDq4jFMFKI2LnPXjJ9rygIVZO7caYQWSHnZ%2FxG45IGZk%2FE9XJ2%2FeUinqn8MqCSJfwlwH54K6%2FOQqyGFsK7vAF%2BuVnQrIJBrnh8FU6O8Ab2qdlxcH68gDmbRHlj%2FDHohq1zGGVGjW0TQonaS8wbsiYt8AlapLXJEa5es1CZLWMJ3noZ6kQs%2FxLk%2F3WtT3O7aOnrBXIw8780lXblaJtTSj1CKfhRk3tYU8XOuxWbigSyym4eZPYXYoqOCR0ZUUTnRLA2r5M4%2FyJm%2Frd3%2B7SuQMKI%2BNmzOfgUO8kq47cY2uIQChe5338I%2BJ%2Bu5%2FSWi4QwADJKQgcG5Wy6qzUoPylvUdEy0uwXLUs0RgQ%2Fie2hQKhu3qRUxRjMmeZR8OD9tKU%2FT1wGMiDSf6hKhkQVqoizOOrIBPGWRLksSHickztMLzrjr8GOqUBLItsDcm5qc5SIWgU9NyJrG2FZHSfRerOQQzOsXRhO5mFT0iPvN8wtW9OwEWTS79gy7TDJQhIe8z5mMQLHnv2cq7Urazv35IxGsUAOhkDbmveDQxhy9%2FVngzAGVsI4rnrkEGR5VxtMAIaIQb%2BOMDoPGXYxLAPnW0M5mXeFqCRQLhfVpCpxPhiyAFpCY2ehRtKY1138KYNIBuVBUWwPH5lUEoxK8pN&X-Amz-Signature=bcae68ba31be164dacafcf52775a8f66d176961202395a306ee6d4edb80858d0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEE5APFC%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9p9aT%2BpIfSGBoiktBX53zbwoKx3MDoYpGnEB8ilo0BwIgRdVYxT5wMi7uRJFupNJjOubHNxxpaghvt8AOwtQysoQq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLQe2bvGcCOK6lCfcircAyeZw0QoDqYPwwXwAy3qYpPUkPcDjXnOAElRhisujZ%2F3chidHYHu9Ve3lHMDXzTvukHLPOR%2Ffpd9xKy2W%2FkhK%2FSZUUayjVFvnEYyo505b8LlU3na2t4iRKEwWw%2BgQER8EpxKenexHlSKQfs7ecyuqVVrXOSf%2FnBp2wr4UFdjm8Zdpn7AhNpfll14EXE2YkJXlREYBqL8Gw6As9ndPoQbDd8jDq4jFMFKI2LnPXjJ9rygIVZO7caYQWSHnZ%2FxG45IGZk%2FE9XJ2%2FeUinqn8MqCSJfwlwH54K6%2FOQqyGFsK7vAF%2BuVnQrIJBrnh8FU6O8Ab2qdlxcH68gDmbRHlj%2FDHohq1zGGVGjW0TQonaS8wbsiYt8AlapLXJEa5es1CZLWMJ3noZ6kQs%2FxLk%2F3WtT3O7aOnrBXIw8780lXblaJtTSj1CKfhRk3tYU8XOuxWbigSyym4eZPYXYoqOCR0ZUUTnRLA2r5M4%2FyJm%2Frd3%2B7SuQMKI%2BNmzOfgUO8kq47cY2uIQChe5338I%2BJ%2Bu5%2FSWi4QwADJKQgcG5Wy6qzUoPylvUdEy0uwXLUs0RgQ%2Fie2hQKhu3qRUxRjMmeZR8OD9tKU%2FT1wGMiDSf6hKhkQVqoizOOrIBPGWRLksSHickztMLzrjr8GOqUBLItsDcm5qc5SIWgU9NyJrG2FZHSfRerOQQzOsXRhO5mFT0iPvN8wtW9OwEWTS79gy7TDJQhIe8z5mMQLHnv2cq7Urazv35IxGsUAOhkDbmveDQxhy9%2FVngzAGVsI4rnrkEGR5VxtMAIaIQb%2BOMDoPGXYxLAPnW0M5mXeFqCRQLhfVpCpxPhiyAFpCY2ehRtKY1138KYNIBuVBUWwPH5lUEoxK8pN&X-Amz-Signature=55b328c7c67fe2114f7b1acf425b1e881f00cd5e739cd96281be41e377b1d49d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEE5APFC%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9p9aT%2BpIfSGBoiktBX53zbwoKx3MDoYpGnEB8ilo0BwIgRdVYxT5wMi7uRJFupNJjOubHNxxpaghvt8AOwtQysoQq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLQe2bvGcCOK6lCfcircAyeZw0QoDqYPwwXwAy3qYpPUkPcDjXnOAElRhisujZ%2F3chidHYHu9Ve3lHMDXzTvukHLPOR%2Ffpd9xKy2W%2FkhK%2FSZUUayjVFvnEYyo505b8LlU3na2t4iRKEwWw%2BgQER8EpxKenexHlSKQfs7ecyuqVVrXOSf%2FnBp2wr4UFdjm8Zdpn7AhNpfll14EXE2YkJXlREYBqL8Gw6As9ndPoQbDd8jDq4jFMFKI2LnPXjJ9rygIVZO7caYQWSHnZ%2FxG45IGZk%2FE9XJ2%2FeUinqn8MqCSJfwlwH54K6%2FOQqyGFsK7vAF%2BuVnQrIJBrnh8FU6O8Ab2qdlxcH68gDmbRHlj%2FDHohq1zGGVGjW0TQonaS8wbsiYt8AlapLXJEa5es1CZLWMJ3noZ6kQs%2FxLk%2F3WtT3O7aOnrBXIw8780lXblaJtTSj1CKfhRk3tYU8XOuxWbigSyym4eZPYXYoqOCR0ZUUTnRLA2r5M4%2FyJm%2Frd3%2B7SuQMKI%2BNmzOfgUO8kq47cY2uIQChe5338I%2BJ%2Bu5%2FSWi4QwADJKQgcG5Wy6qzUoPylvUdEy0uwXLUs0RgQ%2Fie2hQKhu3qRUxRjMmeZR8OD9tKU%2FT1wGMiDSf6hKhkQVqoizOOrIBPGWRLksSHickztMLzrjr8GOqUBLItsDcm5qc5SIWgU9NyJrG2FZHSfRerOQQzOsXRhO5mFT0iPvN8wtW9OwEWTS79gy7TDJQhIe8z5mMQLHnv2cq7Urazv35IxGsUAOhkDbmveDQxhy9%2FVngzAGVsI4rnrkEGR5VxtMAIaIQb%2BOMDoPGXYxLAPnW0M5mXeFqCRQLhfVpCpxPhiyAFpCY2ehRtKY1138KYNIBuVBUWwPH5lUEoxK8pN&X-Amz-Signature=df090c11f69198d40be7ebcf976e67e253c4e7860f1b2dd854a67143784b8a94&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
