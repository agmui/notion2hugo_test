---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHB65XF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCW4M42ZDvLqNxHqKbVamngbvzA6enOF8NMTNYb1%2BaydQIhAKhueCnxCNnfSR7gCeqczDwQnn9IWHtd21PGyvHXD8XeKv8DCHEQABoMNjM3NDIzMTgzODA1Igy8hANmyLnzb8%2BPUpoq3APtLUp7NVMGRCkG9bTd0aqU66EEnIuF2sPSDp4tIsZgN0e8qb0nMBqoBQENheBICwIpu1LJdwvTpvhyOb1z7PuMpX8hVjCzoT3Ktf%2FzHWGSWYVyluUchpbXN3c7GnYKwViuRA%2F2S5Kn1AcbwP83meR2vHT1LZMV7P5xZ6m9grWU%2F%2B77GTNNhJTH4zhsj8frbhDvt1ckRimFRodKlL9Buynozn2Qd7diIk5%2BOBwTOi%2FZeW7W4TByyXzkBvrwlURYHjdz431baJO%2FZA6uFk3%2BZTxL%2Fzms5LMmrw4WC9nV6xWc40GZrd3Jc0SrDcgIvGzhvlmkc71WX6JG9CkN9KQYxm73ngTScvIWuzewnuDf1gc72wRwZsBPXfZQ4mvLwSFOozY589UpVHoZkQZXC3HF6QsnvfLiiQDOlKACJVuiRe%2BcZ3uQ89qcT4%2BusCJmzge9dlo%2Flw3dOqf3zQ9XSLpPuyHQuDfXAts104wqnVOfKmcaM1qjcrF9YOrSdJi109CyIN4QYvkGPOmB4w1LHgEfJadnuNmq%2Bvf2DDHePuGGftwDbnDzbLglf7vlYlNEVttOYcql4kf7765pasAh0R07XrX4BA6WP5uYBsXdj2XjVUqNl8nDoOwgW%2F2Nj7uSYDDC94DFBjqkAWEa0npkvzm%2Fzt9DxArZe0QycaIfD2PBAew7nOFhz%2Fl37DUsZBRqle0odWYyY2sk4cuSW74Tzei2wm8xFwZxZiHuYujY55F0NkpZTC7CaR%2FT3G7zc0nXMrRt3s2y%2BCOOQYdRV4Xn0WFPt1Cppz8MHoVNnmtK9sBF%2BiiBKNHfp5aIB25WCEdeiH4qoiXk3oWrTpBLbsmHhLLd5twUuWMlMimZnAJr&X-Amz-Signature=d7e852a1337665dbd6d41d3d7e4f85f9e0942f9b2aa62abc081b9431a1f2698f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHB65XF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCW4M42ZDvLqNxHqKbVamngbvzA6enOF8NMTNYb1%2BaydQIhAKhueCnxCNnfSR7gCeqczDwQnn9IWHtd21PGyvHXD8XeKv8DCHEQABoMNjM3NDIzMTgzODA1Igy8hANmyLnzb8%2BPUpoq3APtLUp7NVMGRCkG9bTd0aqU66EEnIuF2sPSDp4tIsZgN0e8qb0nMBqoBQENheBICwIpu1LJdwvTpvhyOb1z7PuMpX8hVjCzoT3Ktf%2FzHWGSWYVyluUchpbXN3c7GnYKwViuRA%2F2S5Kn1AcbwP83meR2vHT1LZMV7P5xZ6m9grWU%2F%2B77GTNNhJTH4zhsj8frbhDvt1ckRimFRodKlL9Buynozn2Qd7diIk5%2BOBwTOi%2FZeW7W4TByyXzkBvrwlURYHjdz431baJO%2FZA6uFk3%2BZTxL%2Fzms5LMmrw4WC9nV6xWc40GZrd3Jc0SrDcgIvGzhvlmkc71WX6JG9CkN9KQYxm73ngTScvIWuzewnuDf1gc72wRwZsBPXfZQ4mvLwSFOozY589UpVHoZkQZXC3HF6QsnvfLiiQDOlKACJVuiRe%2BcZ3uQ89qcT4%2BusCJmzge9dlo%2Flw3dOqf3zQ9XSLpPuyHQuDfXAts104wqnVOfKmcaM1qjcrF9YOrSdJi109CyIN4QYvkGPOmB4w1LHgEfJadnuNmq%2Bvf2DDHePuGGftwDbnDzbLglf7vlYlNEVttOYcql4kf7765pasAh0R07XrX4BA6WP5uYBsXdj2XjVUqNl8nDoOwgW%2F2Nj7uSYDDC94DFBjqkAWEa0npkvzm%2Fzt9DxArZe0QycaIfD2PBAew7nOFhz%2Fl37DUsZBRqle0odWYyY2sk4cuSW74Tzei2wm8xFwZxZiHuYujY55F0NkpZTC7CaR%2FT3G7zc0nXMrRt3s2y%2BCOOQYdRV4Xn0WFPt1Cppz8MHoVNnmtK9sBF%2BiiBKNHfp5aIB25WCEdeiH4qoiXk3oWrTpBLbsmHhLLd5twUuWMlMimZnAJr&X-Amz-Signature=b3ae29c13846dc36af30d957aef72238d9c305bef825045b888c7cc871cd2e69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHB65XF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCW4M42ZDvLqNxHqKbVamngbvzA6enOF8NMTNYb1%2BaydQIhAKhueCnxCNnfSR7gCeqczDwQnn9IWHtd21PGyvHXD8XeKv8DCHEQABoMNjM3NDIzMTgzODA1Igy8hANmyLnzb8%2BPUpoq3APtLUp7NVMGRCkG9bTd0aqU66EEnIuF2sPSDp4tIsZgN0e8qb0nMBqoBQENheBICwIpu1LJdwvTpvhyOb1z7PuMpX8hVjCzoT3Ktf%2FzHWGSWYVyluUchpbXN3c7GnYKwViuRA%2F2S5Kn1AcbwP83meR2vHT1LZMV7P5xZ6m9grWU%2F%2B77GTNNhJTH4zhsj8frbhDvt1ckRimFRodKlL9Buynozn2Qd7diIk5%2BOBwTOi%2FZeW7W4TByyXzkBvrwlURYHjdz431baJO%2FZA6uFk3%2BZTxL%2Fzms5LMmrw4WC9nV6xWc40GZrd3Jc0SrDcgIvGzhvlmkc71WX6JG9CkN9KQYxm73ngTScvIWuzewnuDf1gc72wRwZsBPXfZQ4mvLwSFOozY589UpVHoZkQZXC3HF6QsnvfLiiQDOlKACJVuiRe%2BcZ3uQ89qcT4%2BusCJmzge9dlo%2Flw3dOqf3zQ9XSLpPuyHQuDfXAts104wqnVOfKmcaM1qjcrF9YOrSdJi109CyIN4QYvkGPOmB4w1LHgEfJadnuNmq%2Bvf2DDHePuGGftwDbnDzbLglf7vlYlNEVttOYcql4kf7765pasAh0R07XrX4BA6WP5uYBsXdj2XjVUqNl8nDoOwgW%2F2Nj7uSYDDC94DFBjqkAWEa0npkvzm%2Fzt9DxArZe0QycaIfD2PBAew7nOFhz%2Fl37DUsZBRqle0odWYyY2sk4cuSW74Tzei2wm8xFwZxZiHuYujY55F0NkpZTC7CaR%2FT3G7zc0nXMrRt3s2y%2BCOOQYdRV4Xn0WFPt1Cppz8MHoVNnmtK9sBF%2BiiBKNHfp5aIB25WCEdeiH4qoiXk3oWrTpBLbsmHhLLd5twUuWMlMimZnAJr&X-Amz-Signature=96efcf36a20f270f27817cd771383d6dfcae1c51ba0ce389f25d1b41ebcdf36e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHB65XF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCW4M42ZDvLqNxHqKbVamngbvzA6enOF8NMTNYb1%2BaydQIhAKhueCnxCNnfSR7gCeqczDwQnn9IWHtd21PGyvHXD8XeKv8DCHEQABoMNjM3NDIzMTgzODA1Igy8hANmyLnzb8%2BPUpoq3APtLUp7NVMGRCkG9bTd0aqU66EEnIuF2sPSDp4tIsZgN0e8qb0nMBqoBQENheBICwIpu1LJdwvTpvhyOb1z7PuMpX8hVjCzoT3Ktf%2FzHWGSWYVyluUchpbXN3c7GnYKwViuRA%2F2S5Kn1AcbwP83meR2vHT1LZMV7P5xZ6m9grWU%2F%2B77GTNNhJTH4zhsj8frbhDvt1ckRimFRodKlL9Buynozn2Qd7diIk5%2BOBwTOi%2FZeW7W4TByyXzkBvrwlURYHjdz431baJO%2FZA6uFk3%2BZTxL%2Fzms5LMmrw4WC9nV6xWc40GZrd3Jc0SrDcgIvGzhvlmkc71WX6JG9CkN9KQYxm73ngTScvIWuzewnuDf1gc72wRwZsBPXfZQ4mvLwSFOozY589UpVHoZkQZXC3HF6QsnvfLiiQDOlKACJVuiRe%2BcZ3uQ89qcT4%2BusCJmzge9dlo%2Flw3dOqf3zQ9XSLpPuyHQuDfXAts104wqnVOfKmcaM1qjcrF9YOrSdJi109CyIN4QYvkGPOmB4w1LHgEfJadnuNmq%2Bvf2DDHePuGGftwDbnDzbLglf7vlYlNEVttOYcql4kf7765pasAh0R07XrX4BA6WP5uYBsXdj2XjVUqNl8nDoOwgW%2F2Nj7uSYDDC94DFBjqkAWEa0npkvzm%2Fzt9DxArZe0QycaIfD2PBAew7nOFhz%2Fl37DUsZBRqle0odWYyY2sk4cuSW74Tzei2wm8xFwZxZiHuYujY55F0NkpZTC7CaR%2FT3G7zc0nXMrRt3s2y%2BCOOQYdRV4Xn0WFPt1Cppz8MHoVNnmtK9sBF%2BiiBKNHfp5aIB25WCEdeiH4qoiXk3oWrTpBLbsmHhLLd5twUuWMlMimZnAJr&X-Amz-Signature=a7f0a1eaf5e0bd4f993c625111ae94c56a15c4a98836cd7b5df56eec40d077d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHB65XF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCW4M42ZDvLqNxHqKbVamngbvzA6enOF8NMTNYb1%2BaydQIhAKhueCnxCNnfSR7gCeqczDwQnn9IWHtd21PGyvHXD8XeKv8DCHEQABoMNjM3NDIzMTgzODA1Igy8hANmyLnzb8%2BPUpoq3APtLUp7NVMGRCkG9bTd0aqU66EEnIuF2sPSDp4tIsZgN0e8qb0nMBqoBQENheBICwIpu1LJdwvTpvhyOb1z7PuMpX8hVjCzoT3Ktf%2FzHWGSWYVyluUchpbXN3c7GnYKwViuRA%2F2S5Kn1AcbwP83meR2vHT1LZMV7P5xZ6m9grWU%2F%2B77GTNNhJTH4zhsj8frbhDvt1ckRimFRodKlL9Buynozn2Qd7diIk5%2BOBwTOi%2FZeW7W4TByyXzkBvrwlURYHjdz431baJO%2FZA6uFk3%2BZTxL%2Fzms5LMmrw4WC9nV6xWc40GZrd3Jc0SrDcgIvGzhvlmkc71WX6JG9CkN9KQYxm73ngTScvIWuzewnuDf1gc72wRwZsBPXfZQ4mvLwSFOozY589UpVHoZkQZXC3HF6QsnvfLiiQDOlKACJVuiRe%2BcZ3uQ89qcT4%2BusCJmzge9dlo%2Flw3dOqf3zQ9XSLpPuyHQuDfXAts104wqnVOfKmcaM1qjcrF9YOrSdJi109CyIN4QYvkGPOmB4w1LHgEfJadnuNmq%2Bvf2DDHePuGGftwDbnDzbLglf7vlYlNEVttOYcql4kf7765pasAh0R07XrX4BA6WP5uYBsXdj2XjVUqNl8nDoOwgW%2F2Nj7uSYDDC94DFBjqkAWEa0npkvzm%2Fzt9DxArZe0QycaIfD2PBAew7nOFhz%2Fl37DUsZBRqle0odWYyY2sk4cuSW74Tzei2wm8xFwZxZiHuYujY55F0NkpZTC7CaR%2FT3G7zc0nXMrRt3s2y%2BCOOQYdRV4Xn0WFPt1Cppz8MHoVNnmtK9sBF%2BiiBKNHfp5aIB25WCEdeiH4qoiXk3oWrTpBLbsmHhLLd5twUuWMlMimZnAJr&X-Amz-Signature=93d66458890709406c44d6cc5cd20fa674e00f8886a6b8fc91597343de2cf294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHB65XF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCW4M42ZDvLqNxHqKbVamngbvzA6enOF8NMTNYb1%2BaydQIhAKhueCnxCNnfSR7gCeqczDwQnn9IWHtd21PGyvHXD8XeKv8DCHEQABoMNjM3NDIzMTgzODA1Igy8hANmyLnzb8%2BPUpoq3APtLUp7NVMGRCkG9bTd0aqU66EEnIuF2sPSDp4tIsZgN0e8qb0nMBqoBQENheBICwIpu1LJdwvTpvhyOb1z7PuMpX8hVjCzoT3Ktf%2FzHWGSWYVyluUchpbXN3c7GnYKwViuRA%2F2S5Kn1AcbwP83meR2vHT1LZMV7P5xZ6m9grWU%2F%2B77GTNNhJTH4zhsj8frbhDvt1ckRimFRodKlL9Buynozn2Qd7diIk5%2BOBwTOi%2FZeW7W4TByyXzkBvrwlURYHjdz431baJO%2FZA6uFk3%2BZTxL%2Fzms5LMmrw4WC9nV6xWc40GZrd3Jc0SrDcgIvGzhvlmkc71WX6JG9CkN9KQYxm73ngTScvIWuzewnuDf1gc72wRwZsBPXfZQ4mvLwSFOozY589UpVHoZkQZXC3HF6QsnvfLiiQDOlKACJVuiRe%2BcZ3uQ89qcT4%2BusCJmzge9dlo%2Flw3dOqf3zQ9XSLpPuyHQuDfXAts104wqnVOfKmcaM1qjcrF9YOrSdJi109CyIN4QYvkGPOmB4w1LHgEfJadnuNmq%2Bvf2DDHePuGGftwDbnDzbLglf7vlYlNEVttOYcql4kf7765pasAh0R07XrX4BA6WP5uYBsXdj2XjVUqNl8nDoOwgW%2F2Nj7uSYDDC94DFBjqkAWEa0npkvzm%2Fzt9DxArZe0QycaIfD2PBAew7nOFhz%2Fl37DUsZBRqle0odWYyY2sk4cuSW74Tzei2wm8xFwZxZiHuYujY55F0NkpZTC7CaR%2FT3G7zc0nXMrRt3s2y%2BCOOQYdRV4Xn0WFPt1Cppz8MHoVNnmtK9sBF%2BiiBKNHfp5aIB25WCEdeiH4qoiXk3oWrTpBLbsmHhLLd5twUuWMlMimZnAJr&X-Amz-Signature=617ced7720c6603c97d24fa53cd31f16a3b71125e724e61410298f99b725e3d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHB65XF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCW4M42ZDvLqNxHqKbVamngbvzA6enOF8NMTNYb1%2BaydQIhAKhueCnxCNnfSR7gCeqczDwQnn9IWHtd21PGyvHXD8XeKv8DCHEQABoMNjM3NDIzMTgzODA1Igy8hANmyLnzb8%2BPUpoq3APtLUp7NVMGRCkG9bTd0aqU66EEnIuF2sPSDp4tIsZgN0e8qb0nMBqoBQENheBICwIpu1LJdwvTpvhyOb1z7PuMpX8hVjCzoT3Ktf%2FzHWGSWYVyluUchpbXN3c7GnYKwViuRA%2F2S5Kn1AcbwP83meR2vHT1LZMV7P5xZ6m9grWU%2F%2B77GTNNhJTH4zhsj8frbhDvt1ckRimFRodKlL9Buynozn2Qd7diIk5%2BOBwTOi%2FZeW7W4TByyXzkBvrwlURYHjdz431baJO%2FZA6uFk3%2BZTxL%2Fzms5LMmrw4WC9nV6xWc40GZrd3Jc0SrDcgIvGzhvlmkc71WX6JG9CkN9KQYxm73ngTScvIWuzewnuDf1gc72wRwZsBPXfZQ4mvLwSFOozY589UpVHoZkQZXC3HF6QsnvfLiiQDOlKACJVuiRe%2BcZ3uQ89qcT4%2BusCJmzge9dlo%2Flw3dOqf3zQ9XSLpPuyHQuDfXAts104wqnVOfKmcaM1qjcrF9YOrSdJi109CyIN4QYvkGPOmB4w1LHgEfJadnuNmq%2Bvf2DDHePuGGftwDbnDzbLglf7vlYlNEVttOYcql4kf7765pasAh0R07XrX4BA6WP5uYBsXdj2XjVUqNl8nDoOwgW%2F2Nj7uSYDDC94DFBjqkAWEa0npkvzm%2Fzt9DxArZe0QycaIfD2PBAew7nOFhz%2Fl37DUsZBRqle0odWYyY2sk4cuSW74Tzei2wm8xFwZxZiHuYujY55F0NkpZTC7CaR%2FT3G7zc0nXMrRt3s2y%2BCOOQYdRV4Xn0WFPt1Cppz8MHoVNnmtK9sBF%2BiiBKNHfp5aIB25WCEdeiH4qoiXk3oWrTpBLbsmHhLLd5twUuWMlMimZnAJr&X-Amz-Signature=ffe517f73c250a1f2f437f5cbd245b27ae4d4a0d9afa4c77a40cc8fee9488c62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHB65XF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCW4M42ZDvLqNxHqKbVamngbvzA6enOF8NMTNYb1%2BaydQIhAKhueCnxCNnfSR7gCeqczDwQnn9IWHtd21PGyvHXD8XeKv8DCHEQABoMNjM3NDIzMTgzODA1Igy8hANmyLnzb8%2BPUpoq3APtLUp7NVMGRCkG9bTd0aqU66EEnIuF2sPSDp4tIsZgN0e8qb0nMBqoBQENheBICwIpu1LJdwvTpvhyOb1z7PuMpX8hVjCzoT3Ktf%2FzHWGSWYVyluUchpbXN3c7GnYKwViuRA%2F2S5Kn1AcbwP83meR2vHT1LZMV7P5xZ6m9grWU%2F%2B77GTNNhJTH4zhsj8frbhDvt1ckRimFRodKlL9Buynozn2Qd7diIk5%2BOBwTOi%2FZeW7W4TByyXzkBvrwlURYHjdz431baJO%2FZA6uFk3%2BZTxL%2Fzms5LMmrw4WC9nV6xWc40GZrd3Jc0SrDcgIvGzhvlmkc71WX6JG9CkN9KQYxm73ngTScvIWuzewnuDf1gc72wRwZsBPXfZQ4mvLwSFOozY589UpVHoZkQZXC3HF6QsnvfLiiQDOlKACJVuiRe%2BcZ3uQ89qcT4%2BusCJmzge9dlo%2Flw3dOqf3zQ9XSLpPuyHQuDfXAts104wqnVOfKmcaM1qjcrF9YOrSdJi109CyIN4QYvkGPOmB4w1LHgEfJadnuNmq%2Bvf2DDHePuGGftwDbnDzbLglf7vlYlNEVttOYcql4kf7765pasAh0R07XrX4BA6WP5uYBsXdj2XjVUqNl8nDoOwgW%2F2Nj7uSYDDC94DFBjqkAWEa0npkvzm%2Fzt9DxArZe0QycaIfD2PBAew7nOFhz%2Fl37DUsZBRqle0odWYyY2sk4cuSW74Tzei2wm8xFwZxZiHuYujY55F0NkpZTC7CaR%2FT3G7zc0nXMrRt3s2y%2BCOOQYdRV4Xn0WFPt1Cppz8MHoVNnmtK9sBF%2BiiBKNHfp5aIB25WCEdeiH4qoiXk3oWrTpBLbsmHhLLd5twUuWMlMimZnAJr&X-Amz-Signature=e22e9a925909deada965d292b12f659239eebad7ddbf02c17a7e2f3112e8e481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
