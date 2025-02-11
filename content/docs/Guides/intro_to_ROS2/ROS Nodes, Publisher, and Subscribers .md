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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U2RMGGG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsQ51UxkhwEo9aCHAxUOSRnZULFGCf5zB%2FA22tX6AjgAiAY7OpxRpSXLrci5N1UygqRCT358MA0ygw%2B%2BEpPY4WTnyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyDYFQ3LEvyLI8mUnKtwDULBjx00henKmREDi1KWnTEjnn1Z7bAYFBYz7v5PJB6KP0qiWfCLGRyvzQ2l5ic%2BlEtHqYcEm9m1FEpljHlEgyLGE3EjXBGI1d2A4WNWog%2FxN2y%2FS6jIQpa9QsMSkzMJY%2BWBxAAXdHGAPql%2BlFGhUjQG9a%2Bp8NXrtHeGtCNkOPs6oVjxw%2BpmU6gKcUorKuGR6dueFj6CzEoH2IPYYPVoY%2Bo1yTdCwPFLfTkm%2FCgwKR8NRABs%2FRO7SZmAh6OW%2BhZQA9hRnEZ7xaPLdQH7WgC1AjEUdrVSTEkUji9gs63D5wg%2FHnV91vqvenPyRrsOw2dTm4g24EiWUzvbTEh7c%2B63TXoj8AD7vh%2B1a7fT2kUvi5dc2j6qSl2P5f9%2FWY0Gtg3JFXE9rRpMVdSJwO596U6b1N%2Bz%2Bj%2BoPobgxdCjm4mlwoBwgQBWCQXNtsuwxV3tgcT72bzgD0kWI4MSxQJfifaJyd8MJRMWn644WcOoKRsdJNXtb2P4zKbwQxxt%2Ffp1TAsKunTcbSglLdCWTQVXkVLEm5VtTc75tRw0zj6G1rjMf5UcK3WuOp1J5Q0%2FqJbEVSVhNBmIi2KEd%2FtEdKD94hyN%2B6tFN%2F4vGquHCpk4MT6MdU3cMIdXbKHhK%2Bwn4tvgwp%2FetvQY6pgEmMlJ%2F3LcnEpfRuxo7xmaDrgdv%2F5%2BNnAVXjSOA9CrhVHdVLp4g25kJIJKyqpx87HFUXZoJqfZFhpDwMkTdkFIQYXuxcXDjWWGfspgm8mQYsmPrAXb90dhwLBS75ljLsG8T6vE%2BmhinxR1i3LwY6qjTqBnH2TeF%2B1HZMOcNLEf2I3LBRV4XGaDVXHk4%2FR%2BydQprAaqvCct8btY444jQGMHhDmNkoxJH&X-Amz-Signature=e31f82dfbd9fda8284615f1eec1d38f06892e3ffe7600f8a10e9d32b662d628a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U2RMGGG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsQ51UxkhwEo9aCHAxUOSRnZULFGCf5zB%2FA22tX6AjgAiAY7OpxRpSXLrci5N1UygqRCT358MA0ygw%2B%2BEpPY4WTnyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyDYFQ3LEvyLI8mUnKtwDULBjx00henKmREDi1KWnTEjnn1Z7bAYFBYz7v5PJB6KP0qiWfCLGRyvzQ2l5ic%2BlEtHqYcEm9m1FEpljHlEgyLGE3EjXBGI1d2A4WNWog%2FxN2y%2FS6jIQpa9QsMSkzMJY%2BWBxAAXdHGAPql%2BlFGhUjQG9a%2Bp8NXrtHeGtCNkOPs6oVjxw%2BpmU6gKcUorKuGR6dueFj6CzEoH2IPYYPVoY%2Bo1yTdCwPFLfTkm%2FCgwKR8NRABs%2FRO7SZmAh6OW%2BhZQA9hRnEZ7xaPLdQH7WgC1AjEUdrVSTEkUji9gs63D5wg%2FHnV91vqvenPyRrsOw2dTm4g24EiWUzvbTEh7c%2B63TXoj8AD7vh%2B1a7fT2kUvi5dc2j6qSl2P5f9%2FWY0Gtg3JFXE9rRpMVdSJwO596U6b1N%2Bz%2Bj%2BoPobgxdCjm4mlwoBwgQBWCQXNtsuwxV3tgcT72bzgD0kWI4MSxQJfifaJyd8MJRMWn644WcOoKRsdJNXtb2P4zKbwQxxt%2Ffp1TAsKunTcbSglLdCWTQVXkVLEm5VtTc75tRw0zj6G1rjMf5UcK3WuOp1J5Q0%2FqJbEVSVhNBmIi2KEd%2FtEdKD94hyN%2B6tFN%2F4vGquHCpk4MT6MdU3cMIdXbKHhK%2Bwn4tvgwp%2FetvQY6pgEmMlJ%2F3LcnEpfRuxo7xmaDrgdv%2F5%2BNnAVXjSOA9CrhVHdVLp4g25kJIJKyqpx87HFUXZoJqfZFhpDwMkTdkFIQYXuxcXDjWWGfspgm8mQYsmPrAXb90dhwLBS75ljLsG8T6vE%2BmhinxR1i3LwY6qjTqBnH2TeF%2B1HZMOcNLEf2I3LBRV4XGaDVXHk4%2FR%2BydQprAaqvCct8btY444jQGMHhDmNkoxJH&X-Amz-Signature=c6a88a30e5051aaec95d579d6070b0e2fb3b3acb414aeb1da6a724d36b1af963&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U2RMGGG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsQ51UxkhwEo9aCHAxUOSRnZULFGCf5zB%2FA22tX6AjgAiAY7OpxRpSXLrci5N1UygqRCT358MA0ygw%2B%2BEpPY4WTnyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyDYFQ3LEvyLI8mUnKtwDULBjx00henKmREDi1KWnTEjnn1Z7bAYFBYz7v5PJB6KP0qiWfCLGRyvzQ2l5ic%2BlEtHqYcEm9m1FEpljHlEgyLGE3EjXBGI1d2A4WNWog%2FxN2y%2FS6jIQpa9QsMSkzMJY%2BWBxAAXdHGAPql%2BlFGhUjQG9a%2Bp8NXrtHeGtCNkOPs6oVjxw%2BpmU6gKcUorKuGR6dueFj6CzEoH2IPYYPVoY%2Bo1yTdCwPFLfTkm%2FCgwKR8NRABs%2FRO7SZmAh6OW%2BhZQA9hRnEZ7xaPLdQH7WgC1AjEUdrVSTEkUji9gs63D5wg%2FHnV91vqvenPyRrsOw2dTm4g24EiWUzvbTEh7c%2B63TXoj8AD7vh%2B1a7fT2kUvi5dc2j6qSl2P5f9%2FWY0Gtg3JFXE9rRpMVdSJwO596U6b1N%2Bz%2Bj%2BoPobgxdCjm4mlwoBwgQBWCQXNtsuwxV3tgcT72bzgD0kWI4MSxQJfifaJyd8MJRMWn644WcOoKRsdJNXtb2P4zKbwQxxt%2Ffp1TAsKunTcbSglLdCWTQVXkVLEm5VtTc75tRw0zj6G1rjMf5UcK3WuOp1J5Q0%2FqJbEVSVhNBmIi2KEd%2FtEdKD94hyN%2B6tFN%2F4vGquHCpk4MT6MdU3cMIdXbKHhK%2Bwn4tvgwp%2FetvQY6pgEmMlJ%2F3LcnEpfRuxo7xmaDrgdv%2F5%2BNnAVXjSOA9CrhVHdVLp4g25kJIJKyqpx87HFUXZoJqfZFhpDwMkTdkFIQYXuxcXDjWWGfspgm8mQYsmPrAXb90dhwLBS75ljLsG8T6vE%2BmhinxR1i3LwY6qjTqBnH2TeF%2B1HZMOcNLEf2I3LBRV4XGaDVXHk4%2FR%2BydQprAaqvCct8btY444jQGMHhDmNkoxJH&X-Amz-Signature=9e5a575f47c565e041448d9ab1116bebf9da76341f72504add5bb2299acf412d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U2RMGGG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsQ51UxkhwEo9aCHAxUOSRnZULFGCf5zB%2FA22tX6AjgAiAY7OpxRpSXLrci5N1UygqRCT358MA0ygw%2B%2BEpPY4WTnyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyDYFQ3LEvyLI8mUnKtwDULBjx00henKmREDi1KWnTEjnn1Z7bAYFBYz7v5PJB6KP0qiWfCLGRyvzQ2l5ic%2BlEtHqYcEm9m1FEpljHlEgyLGE3EjXBGI1d2A4WNWog%2FxN2y%2FS6jIQpa9QsMSkzMJY%2BWBxAAXdHGAPql%2BlFGhUjQG9a%2Bp8NXrtHeGtCNkOPs6oVjxw%2BpmU6gKcUorKuGR6dueFj6CzEoH2IPYYPVoY%2Bo1yTdCwPFLfTkm%2FCgwKR8NRABs%2FRO7SZmAh6OW%2BhZQA9hRnEZ7xaPLdQH7WgC1AjEUdrVSTEkUji9gs63D5wg%2FHnV91vqvenPyRrsOw2dTm4g24EiWUzvbTEh7c%2B63TXoj8AD7vh%2B1a7fT2kUvi5dc2j6qSl2P5f9%2FWY0Gtg3JFXE9rRpMVdSJwO596U6b1N%2Bz%2Bj%2BoPobgxdCjm4mlwoBwgQBWCQXNtsuwxV3tgcT72bzgD0kWI4MSxQJfifaJyd8MJRMWn644WcOoKRsdJNXtb2P4zKbwQxxt%2Ffp1TAsKunTcbSglLdCWTQVXkVLEm5VtTc75tRw0zj6G1rjMf5UcK3WuOp1J5Q0%2FqJbEVSVhNBmIi2KEd%2FtEdKD94hyN%2B6tFN%2F4vGquHCpk4MT6MdU3cMIdXbKHhK%2Bwn4tvgwp%2FetvQY6pgEmMlJ%2F3LcnEpfRuxo7xmaDrgdv%2F5%2BNnAVXjSOA9CrhVHdVLp4g25kJIJKyqpx87HFUXZoJqfZFhpDwMkTdkFIQYXuxcXDjWWGfspgm8mQYsmPrAXb90dhwLBS75ljLsG8T6vE%2BmhinxR1i3LwY6qjTqBnH2TeF%2B1HZMOcNLEf2I3LBRV4XGaDVXHk4%2FR%2BydQprAaqvCct8btY444jQGMHhDmNkoxJH&X-Amz-Signature=2e816ab392ee837b0097d5ed1ed2a74664cd13046495841783ee8ae57e35451d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U2RMGGG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsQ51UxkhwEo9aCHAxUOSRnZULFGCf5zB%2FA22tX6AjgAiAY7OpxRpSXLrci5N1UygqRCT358MA0ygw%2B%2BEpPY4WTnyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyDYFQ3LEvyLI8mUnKtwDULBjx00henKmREDi1KWnTEjnn1Z7bAYFBYz7v5PJB6KP0qiWfCLGRyvzQ2l5ic%2BlEtHqYcEm9m1FEpljHlEgyLGE3EjXBGI1d2A4WNWog%2FxN2y%2FS6jIQpa9QsMSkzMJY%2BWBxAAXdHGAPql%2BlFGhUjQG9a%2Bp8NXrtHeGtCNkOPs6oVjxw%2BpmU6gKcUorKuGR6dueFj6CzEoH2IPYYPVoY%2Bo1yTdCwPFLfTkm%2FCgwKR8NRABs%2FRO7SZmAh6OW%2BhZQA9hRnEZ7xaPLdQH7WgC1AjEUdrVSTEkUji9gs63D5wg%2FHnV91vqvenPyRrsOw2dTm4g24EiWUzvbTEh7c%2B63TXoj8AD7vh%2B1a7fT2kUvi5dc2j6qSl2P5f9%2FWY0Gtg3JFXE9rRpMVdSJwO596U6b1N%2Bz%2Bj%2BoPobgxdCjm4mlwoBwgQBWCQXNtsuwxV3tgcT72bzgD0kWI4MSxQJfifaJyd8MJRMWn644WcOoKRsdJNXtb2P4zKbwQxxt%2Ffp1TAsKunTcbSglLdCWTQVXkVLEm5VtTc75tRw0zj6G1rjMf5UcK3WuOp1J5Q0%2FqJbEVSVhNBmIi2KEd%2FtEdKD94hyN%2B6tFN%2F4vGquHCpk4MT6MdU3cMIdXbKHhK%2Bwn4tvgwp%2FetvQY6pgEmMlJ%2F3LcnEpfRuxo7xmaDrgdv%2F5%2BNnAVXjSOA9CrhVHdVLp4g25kJIJKyqpx87HFUXZoJqfZFhpDwMkTdkFIQYXuxcXDjWWGfspgm8mQYsmPrAXb90dhwLBS75ljLsG8T6vE%2BmhinxR1i3LwY6qjTqBnH2TeF%2B1HZMOcNLEf2I3LBRV4XGaDVXHk4%2FR%2BydQprAaqvCct8btY444jQGMHhDmNkoxJH&X-Amz-Signature=c8a6c966b28a4c69342fb2076ff32860b842e4e22c29f6b4dfd6530567b53cf2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U2RMGGG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsQ51UxkhwEo9aCHAxUOSRnZULFGCf5zB%2FA22tX6AjgAiAY7OpxRpSXLrci5N1UygqRCT358MA0ygw%2B%2BEpPY4WTnyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyDYFQ3LEvyLI8mUnKtwDULBjx00henKmREDi1KWnTEjnn1Z7bAYFBYz7v5PJB6KP0qiWfCLGRyvzQ2l5ic%2BlEtHqYcEm9m1FEpljHlEgyLGE3EjXBGI1d2A4WNWog%2FxN2y%2FS6jIQpa9QsMSkzMJY%2BWBxAAXdHGAPql%2BlFGhUjQG9a%2Bp8NXrtHeGtCNkOPs6oVjxw%2BpmU6gKcUorKuGR6dueFj6CzEoH2IPYYPVoY%2Bo1yTdCwPFLfTkm%2FCgwKR8NRABs%2FRO7SZmAh6OW%2BhZQA9hRnEZ7xaPLdQH7WgC1AjEUdrVSTEkUji9gs63D5wg%2FHnV91vqvenPyRrsOw2dTm4g24EiWUzvbTEh7c%2B63TXoj8AD7vh%2B1a7fT2kUvi5dc2j6qSl2P5f9%2FWY0Gtg3JFXE9rRpMVdSJwO596U6b1N%2Bz%2Bj%2BoPobgxdCjm4mlwoBwgQBWCQXNtsuwxV3tgcT72bzgD0kWI4MSxQJfifaJyd8MJRMWn644WcOoKRsdJNXtb2P4zKbwQxxt%2Ffp1TAsKunTcbSglLdCWTQVXkVLEm5VtTc75tRw0zj6G1rjMf5UcK3WuOp1J5Q0%2FqJbEVSVhNBmIi2KEd%2FtEdKD94hyN%2B6tFN%2F4vGquHCpk4MT6MdU3cMIdXbKHhK%2Bwn4tvgwp%2FetvQY6pgEmMlJ%2F3LcnEpfRuxo7xmaDrgdv%2F5%2BNnAVXjSOA9CrhVHdVLp4g25kJIJKyqpx87HFUXZoJqfZFhpDwMkTdkFIQYXuxcXDjWWGfspgm8mQYsmPrAXb90dhwLBS75ljLsG8T6vE%2BmhinxR1i3LwY6qjTqBnH2TeF%2B1HZMOcNLEf2I3LBRV4XGaDVXHk4%2FR%2BydQprAaqvCct8btY444jQGMHhDmNkoxJH&X-Amz-Signature=936ca6b492f55df6e8cbdf6332c7fab2a657d4d28831818911a26957f032514f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U2RMGGG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsQ51UxkhwEo9aCHAxUOSRnZULFGCf5zB%2FA22tX6AjgAiAY7OpxRpSXLrci5N1UygqRCT358MA0ygw%2B%2BEpPY4WTnyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyDYFQ3LEvyLI8mUnKtwDULBjx00henKmREDi1KWnTEjnn1Z7bAYFBYz7v5PJB6KP0qiWfCLGRyvzQ2l5ic%2BlEtHqYcEm9m1FEpljHlEgyLGE3EjXBGI1d2A4WNWog%2FxN2y%2FS6jIQpa9QsMSkzMJY%2BWBxAAXdHGAPql%2BlFGhUjQG9a%2Bp8NXrtHeGtCNkOPs6oVjxw%2BpmU6gKcUorKuGR6dueFj6CzEoH2IPYYPVoY%2Bo1yTdCwPFLfTkm%2FCgwKR8NRABs%2FRO7SZmAh6OW%2BhZQA9hRnEZ7xaPLdQH7WgC1AjEUdrVSTEkUji9gs63D5wg%2FHnV91vqvenPyRrsOw2dTm4g24EiWUzvbTEh7c%2B63TXoj8AD7vh%2B1a7fT2kUvi5dc2j6qSl2P5f9%2FWY0Gtg3JFXE9rRpMVdSJwO596U6b1N%2Bz%2Bj%2BoPobgxdCjm4mlwoBwgQBWCQXNtsuwxV3tgcT72bzgD0kWI4MSxQJfifaJyd8MJRMWn644WcOoKRsdJNXtb2P4zKbwQxxt%2Ffp1TAsKunTcbSglLdCWTQVXkVLEm5VtTc75tRw0zj6G1rjMf5UcK3WuOp1J5Q0%2FqJbEVSVhNBmIi2KEd%2FtEdKD94hyN%2B6tFN%2F4vGquHCpk4MT6MdU3cMIdXbKHhK%2Bwn4tvgwp%2FetvQY6pgEmMlJ%2F3LcnEpfRuxo7xmaDrgdv%2F5%2BNnAVXjSOA9CrhVHdVLp4g25kJIJKyqpx87HFUXZoJqfZFhpDwMkTdkFIQYXuxcXDjWWGfspgm8mQYsmPrAXb90dhwLBS75ljLsG8T6vE%2BmhinxR1i3LwY6qjTqBnH2TeF%2B1HZMOcNLEf2I3LBRV4XGaDVXHk4%2FR%2BydQprAaqvCct8btY444jQGMHhDmNkoxJH&X-Amz-Signature=8e760b177f575a8a310c0b6b37454a4240d8a698e9e30931fdb3e6b3d4f38b09&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U2RMGGG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsQ51UxkhwEo9aCHAxUOSRnZULFGCf5zB%2FA22tX6AjgAiAY7OpxRpSXLrci5N1UygqRCT358MA0ygw%2B%2BEpPY4WTnyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyDYFQ3LEvyLI8mUnKtwDULBjx00henKmREDi1KWnTEjnn1Z7bAYFBYz7v5PJB6KP0qiWfCLGRyvzQ2l5ic%2BlEtHqYcEm9m1FEpljHlEgyLGE3EjXBGI1d2A4WNWog%2FxN2y%2FS6jIQpa9QsMSkzMJY%2BWBxAAXdHGAPql%2BlFGhUjQG9a%2Bp8NXrtHeGtCNkOPs6oVjxw%2BpmU6gKcUorKuGR6dueFj6CzEoH2IPYYPVoY%2Bo1yTdCwPFLfTkm%2FCgwKR8NRABs%2FRO7SZmAh6OW%2BhZQA9hRnEZ7xaPLdQH7WgC1AjEUdrVSTEkUji9gs63D5wg%2FHnV91vqvenPyRrsOw2dTm4g24EiWUzvbTEh7c%2B63TXoj8AD7vh%2B1a7fT2kUvi5dc2j6qSl2P5f9%2FWY0Gtg3JFXE9rRpMVdSJwO596U6b1N%2Bz%2Bj%2BoPobgxdCjm4mlwoBwgQBWCQXNtsuwxV3tgcT72bzgD0kWI4MSxQJfifaJyd8MJRMWn644WcOoKRsdJNXtb2P4zKbwQxxt%2Ffp1TAsKunTcbSglLdCWTQVXkVLEm5VtTc75tRw0zj6G1rjMf5UcK3WuOp1J5Q0%2FqJbEVSVhNBmIi2KEd%2FtEdKD94hyN%2B6tFN%2F4vGquHCpk4MT6MdU3cMIdXbKHhK%2Bwn4tvgwp%2FetvQY6pgEmMlJ%2F3LcnEpfRuxo7xmaDrgdv%2F5%2BNnAVXjSOA9CrhVHdVLp4g25kJIJKyqpx87HFUXZoJqfZFhpDwMkTdkFIQYXuxcXDjWWGfspgm8mQYsmPrAXb90dhwLBS75ljLsG8T6vE%2BmhinxR1i3LwY6qjTqBnH2TeF%2B1HZMOcNLEf2I3LBRV4XGaDVXHk4%2FR%2BydQprAaqvCct8btY444jQGMHhDmNkoxJH&X-Amz-Signature=41be013968d956af9a8f4ebe495e63319c5bc59ad1293824e12c75ef7e32d8dd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
