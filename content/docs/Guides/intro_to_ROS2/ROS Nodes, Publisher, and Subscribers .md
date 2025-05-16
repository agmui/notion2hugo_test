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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZHH7GBC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIEI1DkgHGlhuV2xTrsFOU1nyiKwFCZoDhEWTW2kt5dAIhAIYV7nFMDIuhLDpziPFXLvkRx91oncneUzGSD6O2kqYmKv8DCEwQABoMNjM3NDIzMTgzODA1IgykGzp4mdch10kiXhkq3AOxnOeZBU5hM%2B5nIbmLyGNkfmOqy1b7hrx84Hi53KCg6eYh8OLiAsJYzKc%2FOuuSptTPE3fTb%2FBcq%2B9OcyMXfJatLjV7u73IFbDM020HkdkR0Z1aXM4kteqEqpiEfW05HGbOLLlA6F5aVTsctpuPvq18sGvGZPA8iBbdvWAS0NX1XLsmVjsMVYBhRtREfn3UPgnBTV2UR7jxmtW4lrOhSqeFoqmzQZJ%2B3ODkjS0wS%2Bda0GDRzO8hgjroqDKXeDACJ1juzhLvFS2si9S1sV1UtlVih2rtVv5f4pdypkeLESpbYc%2BfuQH2PbgJf%2FNxa%2B5GX%2BdUTzDfedhLXCXnGw4GpHujK6%2FP%2BEI%2FBuNNH96ToJ10FSClkrW%2BSxKxuDv%2B%2Bk8quFh6nIy6h%2BxnaMEKOo5Qcoi%2BO2yZBDzPfJ8ALQGNm59OlsRTqN2AVJ0qpAej%2BWqWOU7R2MPsS5mk%2FXDqQE8Rpbp8en%2FbX6FNKmid15n8LQgDZiyWn%2FcO3InwBl5Vvb9iw8e4VER%2BknPqm8hIi4ErTAu%2FR2AgtqRDBwPppeeUvyuzRmSLDRhjr9kuiQpx8P92jikMBpsefJuzIjvrF%2B3Y5t%2BqkkFlKhCpLt0zzACzu3ujq7NtfKUMf6WqGO55mjCOkJ7BBjqkAb%2FKSTuWJEwr1CvUImOZ82vlWMSIs8hAbqzvewo%2BqjLoIsbrfN9CWwz5bj3vfD8xo4JECnS40oXocHl0WGdUs9IyzxCpdi7QqlA1YmsRW%2Bf12V%2BzST8lY%2BBC7He6r4VJSo0oxMP8IgTDu6cBgWbsCw0XT4JJgFZ6fUIUm4lOchaoJTjiHDMNlvTVusuzxXZoHHg1udYZzSg72Ia4UKjEjXCVJlkj&X-Amz-Signature=728c2c98c8bdb36b988a62f530147a50a74b738f3c8adb38d568a8a671a77079&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZHH7GBC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIEI1DkgHGlhuV2xTrsFOU1nyiKwFCZoDhEWTW2kt5dAIhAIYV7nFMDIuhLDpziPFXLvkRx91oncneUzGSD6O2kqYmKv8DCEwQABoMNjM3NDIzMTgzODA1IgykGzp4mdch10kiXhkq3AOxnOeZBU5hM%2B5nIbmLyGNkfmOqy1b7hrx84Hi53KCg6eYh8OLiAsJYzKc%2FOuuSptTPE3fTb%2FBcq%2B9OcyMXfJatLjV7u73IFbDM020HkdkR0Z1aXM4kteqEqpiEfW05HGbOLLlA6F5aVTsctpuPvq18sGvGZPA8iBbdvWAS0NX1XLsmVjsMVYBhRtREfn3UPgnBTV2UR7jxmtW4lrOhSqeFoqmzQZJ%2B3ODkjS0wS%2Bda0GDRzO8hgjroqDKXeDACJ1juzhLvFS2si9S1sV1UtlVih2rtVv5f4pdypkeLESpbYc%2BfuQH2PbgJf%2FNxa%2B5GX%2BdUTzDfedhLXCXnGw4GpHujK6%2FP%2BEI%2FBuNNH96ToJ10FSClkrW%2BSxKxuDv%2B%2Bk8quFh6nIy6h%2BxnaMEKOo5Qcoi%2BO2yZBDzPfJ8ALQGNm59OlsRTqN2AVJ0qpAej%2BWqWOU7R2MPsS5mk%2FXDqQE8Rpbp8en%2FbX6FNKmid15n8LQgDZiyWn%2FcO3InwBl5Vvb9iw8e4VER%2BknPqm8hIi4ErTAu%2FR2AgtqRDBwPppeeUvyuzRmSLDRhjr9kuiQpx8P92jikMBpsefJuzIjvrF%2B3Y5t%2BqkkFlKhCpLt0zzACzu3ujq7NtfKUMf6WqGO55mjCOkJ7BBjqkAb%2FKSTuWJEwr1CvUImOZ82vlWMSIs8hAbqzvewo%2BqjLoIsbrfN9CWwz5bj3vfD8xo4JECnS40oXocHl0WGdUs9IyzxCpdi7QqlA1YmsRW%2Bf12V%2BzST8lY%2BBC7He6r4VJSo0oxMP8IgTDu6cBgWbsCw0XT4JJgFZ6fUIUm4lOchaoJTjiHDMNlvTVusuzxXZoHHg1udYZzSg72Ia4UKjEjXCVJlkj&X-Amz-Signature=35233ef7928ff4692f5679152e2db90d78bc2ead1071a7f1239ba21cfd630cb4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZHH7GBC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIEI1DkgHGlhuV2xTrsFOU1nyiKwFCZoDhEWTW2kt5dAIhAIYV7nFMDIuhLDpziPFXLvkRx91oncneUzGSD6O2kqYmKv8DCEwQABoMNjM3NDIzMTgzODA1IgykGzp4mdch10kiXhkq3AOxnOeZBU5hM%2B5nIbmLyGNkfmOqy1b7hrx84Hi53KCg6eYh8OLiAsJYzKc%2FOuuSptTPE3fTb%2FBcq%2B9OcyMXfJatLjV7u73IFbDM020HkdkR0Z1aXM4kteqEqpiEfW05HGbOLLlA6F5aVTsctpuPvq18sGvGZPA8iBbdvWAS0NX1XLsmVjsMVYBhRtREfn3UPgnBTV2UR7jxmtW4lrOhSqeFoqmzQZJ%2B3ODkjS0wS%2Bda0GDRzO8hgjroqDKXeDACJ1juzhLvFS2si9S1sV1UtlVih2rtVv5f4pdypkeLESpbYc%2BfuQH2PbgJf%2FNxa%2B5GX%2BdUTzDfedhLXCXnGw4GpHujK6%2FP%2BEI%2FBuNNH96ToJ10FSClkrW%2BSxKxuDv%2B%2Bk8quFh6nIy6h%2BxnaMEKOo5Qcoi%2BO2yZBDzPfJ8ALQGNm59OlsRTqN2AVJ0qpAej%2BWqWOU7R2MPsS5mk%2FXDqQE8Rpbp8en%2FbX6FNKmid15n8LQgDZiyWn%2FcO3InwBl5Vvb9iw8e4VER%2BknPqm8hIi4ErTAu%2FR2AgtqRDBwPppeeUvyuzRmSLDRhjr9kuiQpx8P92jikMBpsefJuzIjvrF%2B3Y5t%2BqkkFlKhCpLt0zzACzu3ujq7NtfKUMf6WqGO55mjCOkJ7BBjqkAb%2FKSTuWJEwr1CvUImOZ82vlWMSIs8hAbqzvewo%2BqjLoIsbrfN9CWwz5bj3vfD8xo4JECnS40oXocHl0WGdUs9IyzxCpdi7QqlA1YmsRW%2Bf12V%2BzST8lY%2BBC7He6r4VJSo0oxMP8IgTDu6cBgWbsCw0XT4JJgFZ6fUIUm4lOchaoJTjiHDMNlvTVusuzxXZoHHg1udYZzSg72Ia4UKjEjXCVJlkj&X-Amz-Signature=4f5166691d960733639125c254a79c722e3db75433e3d7877c5bdb17dbb79eab&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZHH7GBC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIEI1DkgHGlhuV2xTrsFOU1nyiKwFCZoDhEWTW2kt5dAIhAIYV7nFMDIuhLDpziPFXLvkRx91oncneUzGSD6O2kqYmKv8DCEwQABoMNjM3NDIzMTgzODA1IgykGzp4mdch10kiXhkq3AOxnOeZBU5hM%2B5nIbmLyGNkfmOqy1b7hrx84Hi53KCg6eYh8OLiAsJYzKc%2FOuuSptTPE3fTb%2FBcq%2B9OcyMXfJatLjV7u73IFbDM020HkdkR0Z1aXM4kteqEqpiEfW05HGbOLLlA6F5aVTsctpuPvq18sGvGZPA8iBbdvWAS0NX1XLsmVjsMVYBhRtREfn3UPgnBTV2UR7jxmtW4lrOhSqeFoqmzQZJ%2B3ODkjS0wS%2Bda0GDRzO8hgjroqDKXeDACJ1juzhLvFS2si9S1sV1UtlVih2rtVv5f4pdypkeLESpbYc%2BfuQH2PbgJf%2FNxa%2B5GX%2BdUTzDfedhLXCXnGw4GpHujK6%2FP%2BEI%2FBuNNH96ToJ10FSClkrW%2BSxKxuDv%2B%2Bk8quFh6nIy6h%2BxnaMEKOo5Qcoi%2BO2yZBDzPfJ8ALQGNm59OlsRTqN2AVJ0qpAej%2BWqWOU7R2MPsS5mk%2FXDqQE8Rpbp8en%2FbX6FNKmid15n8LQgDZiyWn%2FcO3InwBl5Vvb9iw8e4VER%2BknPqm8hIi4ErTAu%2FR2AgtqRDBwPppeeUvyuzRmSLDRhjr9kuiQpx8P92jikMBpsefJuzIjvrF%2B3Y5t%2BqkkFlKhCpLt0zzACzu3ujq7NtfKUMf6WqGO55mjCOkJ7BBjqkAb%2FKSTuWJEwr1CvUImOZ82vlWMSIs8hAbqzvewo%2BqjLoIsbrfN9CWwz5bj3vfD8xo4JECnS40oXocHl0WGdUs9IyzxCpdi7QqlA1YmsRW%2Bf12V%2BzST8lY%2BBC7He6r4VJSo0oxMP8IgTDu6cBgWbsCw0XT4JJgFZ6fUIUm4lOchaoJTjiHDMNlvTVusuzxXZoHHg1udYZzSg72Ia4UKjEjXCVJlkj&X-Amz-Signature=4c1f4d943bd926c6d5a7653595338524f87826c42e367b7db6d592fd94aa9790&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZHH7GBC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIEI1DkgHGlhuV2xTrsFOU1nyiKwFCZoDhEWTW2kt5dAIhAIYV7nFMDIuhLDpziPFXLvkRx91oncneUzGSD6O2kqYmKv8DCEwQABoMNjM3NDIzMTgzODA1IgykGzp4mdch10kiXhkq3AOxnOeZBU5hM%2B5nIbmLyGNkfmOqy1b7hrx84Hi53KCg6eYh8OLiAsJYzKc%2FOuuSptTPE3fTb%2FBcq%2B9OcyMXfJatLjV7u73IFbDM020HkdkR0Z1aXM4kteqEqpiEfW05HGbOLLlA6F5aVTsctpuPvq18sGvGZPA8iBbdvWAS0NX1XLsmVjsMVYBhRtREfn3UPgnBTV2UR7jxmtW4lrOhSqeFoqmzQZJ%2B3ODkjS0wS%2Bda0GDRzO8hgjroqDKXeDACJ1juzhLvFS2si9S1sV1UtlVih2rtVv5f4pdypkeLESpbYc%2BfuQH2PbgJf%2FNxa%2B5GX%2BdUTzDfedhLXCXnGw4GpHujK6%2FP%2BEI%2FBuNNH96ToJ10FSClkrW%2BSxKxuDv%2B%2Bk8quFh6nIy6h%2BxnaMEKOo5Qcoi%2BO2yZBDzPfJ8ALQGNm59OlsRTqN2AVJ0qpAej%2BWqWOU7R2MPsS5mk%2FXDqQE8Rpbp8en%2FbX6FNKmid15n8LQgDZiyWn%2FcO3InwBl5Vvb9iw8e4VER%2BknPqm8hIi4ErTAu%2FR2AgtqRDBwPppeeUvyuzRmSLDRhjr9kuiQpx8P92jikMBpsefJuzIjvrF%2B3Y5t%2BqkkFlKhCpLt0zzACzu3ujq7NtfKUMf6WqGO55mjCOkJ7BBjqkAb%2FKSTuWJEwr1CvUImOZ82vlWMSIs8hAbqzvewo%2BqjLoIsbrfN9CWwz5bj3vfD8xo4JECnS40oXocHl0WGdUs9IyzxCpdi7QqlA1YmsRW%2Bf12V%2BzST8lY%2BBC7He6r4VJSo0oxMP8IgTDu6cBgWbsCw0XT4JJgFZ6fUIUm4lOchaoJTjiHDMNlvTVusuzxXZoHHg1udYZzSg72Ia4UKjEjXCVJlkj&X-Amz-Signature=847d122b30675b47945ccbff495970e8ed70e929828e604aafa788fd5c828df5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZHH7GBC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIEI1DkgHGlhuV2xTrsFOU1nyiKwFCZoDhEWTW2kt5dAIhAIYV7nFMDIuhLDpziPFXLvkRx91oncneUzGSD6O2kqYmKv8DCEwQABoMNjM3NDIzMTgzODA1IgykGzp4mdch10kiXhkq3AOxnOeZBU5hM%2B5nIbmLyGNkfmOqy1b7hrx84Hi53KCg6eYh8OLiAsJYzKc%2FOuuSptTPE3fTb%2FBcq%2B9OcyMXfJatLjV7u73IFbDM020HkdkR0Z1aXM4kteqEqpiEfW05HGbOLLlA6F5aVTsctpuPvq18sGvGZPA8iBbdvWAS0NX1XLsmVjsMVYBhRtREfn3UPgnBTV2UR7jxmtW4lrOhSqeFoqmzQZJ%2B3ODkjS0wS%2Bda0GDRzO8hgjroqDKXeDACJ1juzhLvFS2si9S1sV1UtlVih2rtVv5f4pdypkeLESpbYc%2BfuQH2PbgJf%2FNxa%2B5GX%2BdUTzDfedhLXCXnGw4GpHujK6%2FP%2BEI%2FBuNNH96ToJ10FSClkrW%2BSxKxuDv%2B%2Bk8quFh6nIy6h%2BxnaMEKOo5Qcoi%2BO2yZBDzPfJ8ALQGNm59OlsRTqN2AVJ0qpAej%2BWqWOU7R2MPsS5mk%2FXDqQE8Rpbp8en%2FbX6FNKmid15n8LQgDZiyWn%2FcO3InwBl5Vvb9iw8e4VER%2BknPqm8hIi4ErTAu%2FR2AgtqRDBwPppeeUvyuzRmSLDRhjr9kuiQpx8P92jikMBpsefJuzIjvrF%2B3Y5t%2BqkkFlKhCpLt0zzACzu3ujq7NtfKUMf6WqGO55mjCOkJ7BBjqkAb%2FKSTuWJEwr1CvUImOZ82vlWMSIs8hAbqzvewo%2BqjLoIsbrfN9CWwz5bj3vfD8xo4JECnS40oXocHl0WGdUs9IyzxCpdi7QqlA1YmsRW%2Bf12V%2BzST8lY%2BBC7He6r4VJSo0oxMP8IgTDu6cBgWbsCw0XT4JJgFZ6fUIUm4lOchaoJTjiHDMNlvTVusuzxXZoHHg1udYZzSg72Ia4UKjEjXCVJlkj&X-Amz-Signature=738ec3b071572aa5cf0f9643f8c250570ceb4dc1a7581c97bc40c1b64a7a05ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZHH7GBC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIEI1DkgHGlhuV2xTrsFOU1nyiKwFCZoDhEWTW2kt5dAIhAIYV7nFMDIuhLDpziPFXLvkRx91oncneUzGSD6O2kqYmKv8DCEwQABoMNjM3NDIzMTgzODA1IgykGzp4mdch10kiXhkq3AOxnOeZBU5hM%2B5nIbmLyGNkfmOqy1b7hrx84Hi53KCg6eYh8OLiAsJYzKc%2FOuuSptTPE3fTb%2FBcq%2B9OcyMXfJatLjV7u73IFbDM020HkdkR0Z1aXM4kteqEqpiEfW05HGbOLLlA6F5aVTsctpuPvq18sGvGZPA8iBbdvWAS0NX1XLsmVjsMVYBhRtREfn3UPgnBTV2UR7jxmtW4lrOhSqeFoqmzQZJ%2B3ODkjS0wS%2Bda0GDRzO8hgjroqDKXeDACJ1juzhLvFS2si9S1sV1UtlVih2rtVv5f4pdypkeLESpbYc%2BfuQH2PbgJf%2FNxa%2B5GX%2BdUTzDfedhLXCXnGw4GpHujK6%2FP%2BEI%2FBuNNH96ToJ10FSClkrW%2BSxKxuDv%2B%2Bk8quFh6nIy6h%2BxnaMEKOo5Qcoi%2BO2yZBDzPfJ8ALQGNm59OlsRTqN2AVJ0qpAej%2BWqWOU7R2MPsS5mk%2FXDqQE8Rpbp8en%2FbX6FNKmid15n8LQgDZiyWn%2FcO3InwBl5Vvb9iw8e4VER%2BknPqm8hIi4ErTAu%2FR2AgtqRDBwPppeeUvyuzRmSLDRhjr9kuiQpx8P92jikMBpsefJuzIjvrF%2B3Y5t%2BqkkFlKhCpLt0zzACzu3ujq7NtfKUMf6WqGO55mjCOkJ7BBjqkAb%2FKSTuWJEwr1CvUImOZ82vlWMSIs8hAbqzvewo%2BqjLoIsbrfN9CWwz5bj3vfD8xo4JECnS40oXocHl0WGdUs9IyzxCpdi7QqlA1YmsRW%2Bf12V%2BzST8lY%2BBC7He6r4VJSo0oxMP8IgTDu6cBgWbsCw0XT4JJgFZ6fUIUm4lOchaoJTjiHDMNlvTVusuzxXZoHHg1udYZzSg72Ia4UKjEjXCVJlkj&X-Amz-Signature=261521e670fc6593f33c5d5f38396411668b0163c0b76254e9b3aea31890b25e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZHH7GBC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIEI1DkgHGlhuV2xTrsFOU1nyiKwFCZoDhEWTW2kt5dAIhAIYV7nFMDIuhLDpziPFXLvkRx91oncneUzGSD6O2kqYmKv8DCEwQABoMNjM3NDIzMTgzODA1IgykGzp4mdch10kiXhkq3AOxnOeZBU5hM%2B5nIbmLyGNkfmOqy1b7hrx84Hi53KCg6eYh8OLiAsJYzKc%2FOuuSptTPE3fTb%2FBcq%2B9OcyMXfJatLjV7u73IFbDM020HkdkR0Z1aXM4kteqEqpiEfW05HGbOLLlA6F5aVTsctpuPvq18sGvGZPA8iBbdvWAS0NX1XLsmVjsMVYBhRtREfn3UPgnBTV2UR7jxmtW4lrOhSqeFoqmzQZJ%2B3ODkjS0wS%2Bda0GDRzO8hgjroqDKXeDACJ1juzhLvFS2si9S1sV1UtlVih2rtVv5f4pdypkeLESpbYc%2BfuQH2PbgJf%2FNxa%2B5GX%2BdUTzDfedhLXCXnGw4GpHujK6%2FP%2BEI%2FBuNNH96ToJ10FSClkrW%2BSxKxuDv%2B%2Bk8quFh6nIy6h%2BxnaMEKOo5Qcoi%2BO2yZBDzPfJ8ALQGNm59OlsRTqN2AVJ0qpAej%2BWqWOU7R2MPsS5mk%2FXDqQE8Rpbp8en%2FbX6FNKmid15n8LQgDZiyWn%2FcO3InwBl5Vvb9iw8e4VER%2BknPqm8hIi4ErTAu%2FR2AgtqRDBwPppeeUvyuzRmSLDRhjr9kuiQpx8P92jikMBpsefJuzIjvrF%2B3Y5t%2BqkkFlKhCpLt0zzACzu3ujq7NtfKUMf6WqGO55mjCOkJ7BBjqkAb%2FKSTuWJEwr1CvUImOZ82vlWMSIs8hAbqzvewo%2BqjLoIsbrfN9CWwz5bj3vfD8xo4JECnS40oXocHl0WGdUs9IyzxCpdi7QqlA1YmsRW%2Bf12V%2BzST8lY%2BBC7He6r4VJSo0oxMP8IgTDu6cBgWbsCw0XT4JJgFZ6fUIUm4lOchaoJTjiHDMNlvTVusuzxXZoHHg1udYZzSg72Ia4UKjEjXCVJlkj&X-Amz-Signature=cb5e132bea0acc806076aae71e2e5bdcf2880e0ee49d8e9b046920601c8af881&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
