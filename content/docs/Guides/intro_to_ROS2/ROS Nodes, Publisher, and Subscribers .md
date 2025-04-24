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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYJDU3J4%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyFl3HpfgAP32EYOEB4uEjMOkcMz%2FNpgeKLJcjYPol7AiEAsnn3qs5TKNUIZxiuY7N49boz0bgLpyLQnTug%2FayotmIq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDLDIU1RcyPPmpcV7NircA3O3R%2BbOIizYdMDS5VbAZnsjWf5mVRzKf8zbxNM%2BDmr%2BU86zRfcl%2Fklox1Tiv6wX2oFnGRtIQ%2BVA5GF%2Fz5bFOCY0MAiscgH4IRnTSyYrO6vIPG1GJRKkKHf6TWfBSpnllTbC6YGOErsMpd5p54ZdRqcPqX3re8DXzdVjK8bo2OaO8h0hPJjBz3X8qMOjtN8cpGu0Ps7XWufvZPDBj%2FPGQecdQYp14L44vDgXKaOtkzg6kUJ%2Fe7%2FlQYMihbV6AE2znTmZqiQF%2FF4%2BQ4ajFjfVPqKcCl4RaILBvKM0j86%2Bomv5RkSz41rDFa99yN9jrjRGyWmkosJX8u47BjADIGKSXzKIoukTeVF4E7htMhbdfvDPmSuHEVLnCe8d6VfcYonS65aWLxncQ6TX0gATZiDA%2B6gxVmBgOdgHtBeFnsERgt2YxZPmLilfXTIX8ixgw3JJum%2FuIQZDyU8nlM4GJ5lG01ELbFLHnUDuI%2BVglpWPrkXB7VN5L3ICC3JGvFpC14pghXvS7hc0QGI3Kijl9vGs9PaK%2F%2FBlbERoZAlNaDlX5RXCJLbZ3CSWlsXYa56zkPihks1yOGtT9%2BwL9m1xVFYavXxkIyJsrHV6Zad15H5s56dIcWgJ8lu0YZY%2BSJnqMN%2B6qcAGOqUBiI44c5fNPse5jlDUbCgeFKZwlIZzqTruDnjtkzqMyNIeQyp4CH72LEapNxl3NvIifLwb8CDjIf%2BolQnv3P3uF5%2Foq4Hm9lRZeCalrCnD%2Fh2na5wU%2F8e%2FIeQpDKL4QFtb4OPHAmAUIEVcprcC92EKKsNv9sKvdGq25Tyd07o9NPPdsCqlr1%2F%2F%2FkNne0K0tf2oem3efmy1FSPZVqrh008DOoq6nlMR&X-Amz-Signature=067051b978c77b0c8b7a2da69da4f49e6375971a88cf58a7e0b9dc6f17efe85d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYJDU3J4%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyFl3HpfgAP32EYOEB4uEjMOkcMz%2FNpgeKLJcjYPol7AiEAsnn3qs5TKNUIZxiuY7N49boz0bgLpyLQnTug%2FayotmIq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDLDIU1RcyPPmpcV7NircA3O3R%2BbOIizYdMDS5VbAZnsjWf5mVRzKf8zbxNM%2BDmr%2BU86zRfcl%2Fklox1Tiv6wX2oFnGRtIQ%2BVA5GF%2Fz5bFOCY0MAiscgH4IRnTSyYrO6vIPG1GJRKkKHf6TWfBSpnllTbC6YGOErsMpd5p54ZdRqcPqX3re8DXzdVjK8bo2OaO8h0hPJjBz3X8qMOjtN8cpGu0Ps7XWufvZPDBj%2FPGQecdQYp14L44vDgXKaOtkzg6kUJ%2Fe7%2FlQYMihbV6AE2znTmZqiQF%2FF4%2BQ4ajFjfVPqKcCl4RaILBvKM0j86%2Bomv5RkSz41rDFa99yN9jrjRGyWmkosJX8u47BjADIGKSXzKIoukTeVF4E7htMhbdfvDPmSuHEVLnCe8d6VfcYonS65aWLxncQ6TX0gATZiDA%2B6gxVmBgOdgHtBeFnsERgt2YxZPmLilfXTIX8ixgw3JJum%2FuIQZDyU8nlM4GJ5lG01ELbFLHnUDuI%2BVglpWPrkXB7VN5L3ICC3JGvFpC14pghXvS7hc0QGI3Kijl9vGs9PaK%2F%2FBlbERoZAlNaDlX5RXCJLbZ3CSWlsXYa56zkPihks1yOGtT9%2BwL9m1xVFYavXxkIyJsrHV6Zad15H5s56dIcWgJ8lu0YZY%2BSJnqMN%2B6qcAGOqUBiI44c5fNPse5jlDUbCgeFKZwlIZzqTruDnjtkzqMyNIeQyp4CH72LEapNxl3NvIifLwb8CDjIf%2BolQnv3P3uF5%2Foq4Hm9lRZeCalrCnD%2Fh2na5wU%2F8e%2FIeQpDKL4QFtb4OPHAmAUIEVcprcC92EKKsNv9sKvdGq25Tyd07o9NPPdsCqlr1%2F%2F%2FkNne0K0tf2oem3efmy1FSPZVqrh008DOoq6nlMR&X-Amz-Signature=49f5add8662e5e2fc99eac2ca51c45131490b3889c33db15ab8c9e60bf96814c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYJDU3J4%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyFl3HpfgAP32EYOEB4uEjMOkcMz%2FNpgeKLJcjYPol7AiEAsnn3qs5TKNUIZxiuY7N49boz0bgLpyLQnTug%2FayotmIq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDLDIU1RcyPPmpcV7NircA3O3R%2BbOIizYdMDS5VbAZnsjWf5mVRzKf8zbxNM%2BDmr%2BU86zRfcl%2Fklox1Tiv6wX2oFnGRtIQ%2BVA5GF%2Fz5bFOCY0MAiscgH4IRnTSyYrO6vIPG1GJRKkKHf6TWfBSpnllTbC6YGOErsMpd5p54ZdRqcPqX3re8DXzdVjK8bo2OaO8h0hPJjBz3X8qMOjtN8cpGu0Ps7XWufvZPDBj%2FPGQecdQYp14L44vDgXKaOtkzg6kUJ%2Fe7%2FlQYMihbV6AE2znTmZqiQF%2FF4%2BQ4ajFjfVPqKcCl4RaILBvKM0j86%2Bomv5RkSz41rDFa99yN9jrjRGyWmkosJX8u47BjADIGKSXzKIoukTeVF4E7htMhbdfvDPmSuHEVLnCe8d6VfcYonS65aWLxncQ6TX0gATZiDA%2B6gxVmBgOdgHtBeFnsERgt2YxZPmLilfXTIX8ixgw3JJum%2FuIQZDyU8nlM4GJ5lG01ELbFLHnUDuI%2BVglpWPrkXB7VN5L3ICC3JGvFpC14pghXvS7hc0QGI3Kijl9vGs9PaK%2F%2FBlbERoZAlNaDlX5RXCJLbZ3CSWlsXYa56zkPihks1yOGtT9%2BwL9m1xVFYavXxkIyJsrHV6Zad15H5s56dIcWgJ8lu0YZY%2BSJnqMN%2B6qcAGOqUBiI44c5fNPse5jlDUbCgeFKZwlIZzqTruDnjtkzqMyNIeQyp4CH72LEapNxl3NvIifLwb8CDjIf%2BolQnv3P3uF5%2Foq4Hm9lRZeCalrCnD%2Fh2na5wU%2F8e%2FIeQpDKL4QFtb4OPHAmAUIEVcprcC92EKKsNv9sKvdGq25Tyd07o9NPPdsCqlr1%2F%2F%2FkNne0K0tf2oem3efmy1FSPZVqrh008DOoq6nlMR&X-Amz-Signature=8998d14e320537f247a11b654fb80d6837e9a1896a5ac54a929812d2e81b4d11&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYJDU3J4%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyFl3HpfgAP32EYOEB4uEjMOkcMz%2FNpgeKLJcjYPol7AiEAsnn3qs5TKNUIZxiuY7N49boz0bgLpyLQnTug%2FayotmIq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDLDIU1RcyPPmpcV7NircA3O3R%2BbOIizYdMDS5VbAZnsjWf5mVRzKf8zbxNM%2BDmr%2BU86zRfcl%2Fklox1Tiv6wX2oFnGRtIQ%2BVA5GF%2Fz5bFOCY0MAiscgH4IRnTSyYrO6vIPG1GJRKkKHf6TWfBSpnllTbC6YGOErsMpd5p54ZdRqcPqX3re8DXzdVjK8bo2OaO8h0hPJjBz3X8qMOjtN8cpGu0Ps7XWufvZPDBj%2FPGQecdQYp14L44vDgXKaOtkzg6kUJ%2Fe7%2FlQYMihbV6AE2znTmZqiQF%2FF4%2BQ4ajFjfVPqKcCl4RaILBvKM0j86%2Bomv5RkSz41rDFa99yN9jrjRGyWmkosJX8u47BjADIGKSXzKIoukTeVF4E7htMhbdfvDPmSuHEVLnCe8d6VfcYonS65aWLxncQ6TX0gATZiDA%2B6gxVmBgOdgHtBeFnsERgt2YxZPmLilfXTIX8ixgw3JJum%2FuIQZDyU8nlM4GJ5lG01ELbFLHnUDuI%2BVglpWPrkXB7VN5L3ICC3JGvFpC14pghXvS7hc0QGI3Kijl9vGs9PaK%2F%2FBlbERoZAlNaDlX5RXCJLbZ3CSWlsXYa56zkPihks1yOGtT9%2BwL9m1xVFYavXxkIyJsrHV6Zad15H5s56dIcWgJ8lu0YZY%2BSJnqMN%2B6qcAGOqUBiI44c5fNPse5jlDUbCgeFKZwlIZzqTruDnjtkzqMyNIeQyp4CH72LEapNxl3NvIifLwb8CDjIf%2BolQnv3P3uF5%2Foq4Hm9lRZeCalrCnD%2Fh2na5wU%2F8e%2FIeQpDKL4QFtb4OPHAmAUIEVcprcC92EKKsNv9sKvdGq25Tyd07o9NPPdsCqlr1%2F%2F%2FkNne0K0tf2oem3efmy1FSPZVqrh008DOoq6nlMR&X-Amz-Signature=dcb78ea4d58b122f99c3685fb2750e953677f20dc96eb9b9cf73062366b56833&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYJDU3J4%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyFl3HpfgAP32EYOEB4uEjMOkcMz%2FNpgeKLJcjYPol7AiEAsnn3qs5TKNUIZxiuY7N49boz0bgLpyLQnTug%2FayotmIq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDLDIU1RcyPPmpcV7NircA3O3R%2BbOIizYdMDS5VbAZnsjWf5mVRzKf8zbxNM%2BDmr%2BU86zRfcl%2Fklox1Tiv6wX2oFnGRtIQ%2BVA5GF%2Fz5bFOCY0MAiscgH4IRnTSyYrO6vIPG1GJRKkKHf6TWfBSpnllTbC6YGOErsMpd5p54ZdRqcPqX3re8DXzdVjK8bo2OaO8h0hPJjBz3X8qMOjtN8cpGu0Ps7XWufvZPDBj%2FPGQecdQYp14L44vDgXKaOtkzg6kUJ%2Fe7%2FlQYMihbV6AE2znTmZqiQF%2FF4%2BQ4ajFjfVPqKcCl4RaILBvKM0j86%2Bomv5RkSz41rDFa99yN9jrjRGyWmkosJX8u47BjADIGKSXzKIoukTeVF4E7htMhbdfvDPmSuHEVLnCe8d6VfcYonS65aWLxncQ6TX0gATZiDA%2B6gxVmBgOdgHtBeFnsERgt2YxZPmLilfXTIX8ixgw3JJum%2FuIQZDyU8nlM4GJ5lG01ELbFLHnUDuI%2BVglpWPrkXB7VN5L3ICC3JGvFpC14pghXvS7hc0QGI3Kijl9vGs9PaK%2F%2FBlbERoZAlNaDlX5RXCJLbZ3CSWlsXYa56zkPihks1yOGtT9%2BwL9m1xVFYavXxkIyJsrHV6Zad15H5s56dIcWgJ8lu0YZY%2BSJnqMN%2B6qcAGOqUBiI44c5fNPse5jlDUbCgeFKZwlIZzqTruDnjtkzqMyNIeQyp4CH72LEapNxl3NvIifLwb8CDjIf%2BolQnv3P3uF5%2Foq4Hm9lRZeCalrCnD%2Fh2na5wU%2F8e%2FIeQpDKL4QFtb4OPHAmAUIEVcprcC92EKKsNv9sKvdGq25Tyd07o9NPPdsCqlr1%2F%2F%2FkNne0K0tf2oem3efmy1FSPZVqrh008DOoq6nlMR&X-Amz-Signature=6f19fd63f221e0d49be7c492930a20b63e56e23c147881fef5989f468320ae84&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYJDU3J4%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyFl3HpfgAP32EYOEB4uEjMOkcMz%2FNpgeKLJcjYPol7AiEAsnn3qs5TKNUIZxiuY7N49boz0bgLpyLQnTug%2FayotmIq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDLDIU1RcyPPmpcV7NircA3O3R%2BbOIizYdMDS5VbAZnsjWf5mVRzKf8zbxNM%2BDmr%2BU86zRfcl%2Fklox1Tiv6wX2oFnGRtIQ%2BVA5GF%2Fz5bFOCY0MAiscgH4IRnTSyYrO6vIPG1GJRKkKHf6TWfBSpnllTbC6YGOErsMpd5p54ZdRqcPqX3re8DXzdVjK8bo2OaO8h0hPJjBz3X8qMOjtN8cpGu0Ps7XWufvZPDBj%2FPGQecdQYp14L44vDgXKaOtkzg6kUJ%2Fe7%2FlQYMihbV6AE2znTmZqiQF%2FF4%2BQ4ajFjfVPqKcCl4RaILBvKM0j86%2Bomv5RkSz41rDFa99yN9jrjRGyWmkosJX8u47BjADIGKSXzKIoukTeVF4E7htMhbdfvDPmSuHEVLnCe8d6VfcYonS65aWLxncQ6TX0gATZiDA%2B6gxVmBgOdgHtBeFnsERgt2YxZPmLilfXTIX8ixgw3JJum%2FuIQZDyU8nlM4GJ5lG01ELbFLHnUDuI%2BVglpWPrkXB7VN5L3ICC3JGvFpC14pghXvS7hc0QGI3Kijl9vGs9PaK%2F%2FBlbERoZAlNaDlX5RXCJLbZ3CSWlsXYa56zkPihks1yOGtT9%2BwL9m1xVFYavXxkIyJsrHV6Zad15H5s56dIcWgJ8lu0YZY%2BSJnqMN%2B6qcAGOqUBiI44c5fNPse5jlDUbCgeFKZwlIZzqTruDnjtkzqMyNIeQyp4CH72LEapNxl3NvIifLwb8CDjIf%2BolQnv3P3uF5%2Foq4Hm9lRZeCalrCnD%2Fh2na5wU%2F8e%2FIeQpDKL4QFtb4OPHAmAUIEVcprcC92EKKsNv9sKvdGq25Tyd07o9NPPdsCqlr1%2F%2F%2FkNne0K0tf2oem3efmy1FSPZVqrh008DOoq6nlMR&X-Amz-Signature=7fa6d84085290c979883b77a0485f997b2c4a79303419b981a65d399734471a9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYJDU3J4%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyFl3HpfgAP32EYOEB4uEjMOkcMz%2FNpgeKLJcjYPol7AiEAsnn3qs5TKNUIZxiuY7N49boz0bgLpyLQnTug%2FayotmIq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDLDIU1RcyPPmpcV7NircA3O3R%2BbOIizYdMDS5VbAZnsjWf5mVRzKf8zbxNM%2BDmr%2BU86zRfcl%2Fklox1Tiv6wX2oFnGRtIQ%2BVA5GF%2Fz5bFOCY0MAiscgH4IRnTSyYrO6vIPG1GJRKkKHf6TWfBSpnllTbC6YGOErsMpd5p54ZdRqcPqX3re8DXzdVjK8bo2OaO8h0hPJjBz3X8qMOjtN8cpGu0Ps7XWufvZPDBj%2FPGQecdQYp14L44vDgXKaOtkzg6kUJ%2Fe7%2FlQYMihbV6AE2znTmZqiQF%2FF4%2BQ4ajFjfVPqKcCl4RaILBvKM0j86%2Bomv5RkSz41rDFa99yN9jrjRGyWmkosJX8u47BjADIGKSXzKIoukTeVF4E7htMhbdfvDPmSuHEVLnCe8d6VfcYonS65aWLxncQ6TX0gATZiDA%2B6gxVmBgOdgHtBeFnsERgt2YxZPmLilfXTIX8ixgw3JJum%2FuIQZDyU8nlM4GJ5lG01ELbFLHnUDuI%2BVglpWPrkXB7VN5L3ICC3JGvFpC14pghXvS7hc0QGI3Kijl9vGs9PaK%2F%2FBlbERoZAlNaDlX5RXCJLbZ3CSWlsXYa56zkPihks1yOGtT9%2BwL9m1xVFYavXxkIyJsrHV6Zad15H5s56dIcWgJ8lu0YZY%2BSJnqMN%2B6qcAGOqUBiI44c5fNPse5jlDUbCgeFKZwlIZzqTruDnjtkzqMyNIeQyp4CH72LEapNxl3NvIifLwb8CDjIf%2BolQnv3P3uF5%2Foq4Hm9lRZeCalrCnD%2Fh2na5wU%2F8e%2FIeQpDKL4QFtb4OPHAmAUIEVcprcC92EKKsNv9sKvdGq25Tyd07o9NPPdsCqlr1%2F%2F%2FkNne0K0tf2oem3efmy1FSPZVqrh008DOoq6nlMR&X-Amz-Signature=2f4ced4da9b1dc2ac2e92a7953b2b04bc3895f001b099228ded331435896ff06&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYJDU3J4%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyFl3HpfgAP32EYOEB4uEjMOkcMz%2FNpgeKLJcjYPol7AiEAsnn3qs5TKNUIZxiuY7N49boz0bgLpyLQnTug%2FayotmIq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDLDIU1RcyPPmpcV7NircA3O3R%2BbOIizYdMDS5VbAZnsjWf5mVRzKf8zbxNM%2BDmr%2BU86zRfcl%2Fklox1Tiv6wX2oFnGRtIQ%2BVA5GF%2Fz5bFOCY0MAiscgH4IRnTSyYrO6vIPG1GJRKkKHf6TWfBSpnllTbC6YGOErsMpd5p54ZdRqcPqX3re8DXzdVjK8bo2OaO8h0hPJjBz3X8qMOjtN8cpGu0Ps7XWufvZPDBj%2FPGQecdQYp14L44vDgXKaOtkzg6kUJ%2Fe7%2FlQYMihbV6AE2znTmZqiQF%2FF4%2BQ4ajFjfVPqKcCl4RaILBvKM0j86%2Bomv5RkSz41rDFa99yN9jrjRGyWmkosJX8u47BjADIGKSXzKIoukTeVF4E7htMhbdfvDPmSuHEVLnCe8d6VfcYonS65aWLxncQ6TX0gATZiDA%2B6gxVmBgOdgHtBeFnsERgt2YxZPmLilfXTIX8ixgw3JJum%2FuIQZDyU8nlM4GJ5lG01ELbFLHnUDuI%2BVglpWPrkXB7VN5L3ICC3JGvFpC14pghXvS7hc0QGI3Kijl9vGs9PaK%2F%2FBlbERoZAlNaDlX5RXCJLbZ3CSWlsXYa56zkPihks1yOGtT9%2BwL9m1xVFYavXxkIyJsrHV6Zad15H5s56dIcWgJ8lu0YZY%2BSJnqMN%2B6qcAGOqUBiI44c5fNPse5jlDUbCgeFKZwlIZzqTruDnjtkzqMyNIeQyp4CH72LEapNxl3NvIifLwb8CDjIf%2BolQnv3P3uF5%2Foq4Hm9lRZeCalrCnD%2Fh2na5wU%2F8e%2FIeQpDKL4QFtb4OPHAmAUIEVcprcC92EKKsNv9sKvdGq25Tyd07o9NPPdsCqlr1%2F%2F%2FkNne0K0tf2oem3efmy1FSPZVqrh008DOoq6nlMR&X-Amz-Signature=dc527f1a59e7a4568098ec85d009fb4296f4269c2f7564031c9b326afaf821d2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
