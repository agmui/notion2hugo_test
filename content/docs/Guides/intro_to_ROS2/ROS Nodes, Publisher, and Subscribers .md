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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMYLH4L6%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfnwIL8h0eCITmHD3VDeur%2F0aWwExB7i33XtqlD7JnhQIgZzSEGvBy53e2tMb9tWnGLTD8czi9PhVwnX82a%2FLVF%2BAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDL8kKOVMbEnew4e5pCrcAx92mcAAzGxYFByDdYQotP08Jf0R93x7LP1lRymMApOiIREsxng1OXK%2BdIe%2BOJyoFk7CTtW35MZpvPhtJYIz9xjVtY%2B%2FHadTXIxjza7rqdHz8SUsl7gF%2FvCAm40ueXxKNpOC4o%2FH0lSr983IgtBijm%2BdL291m4BBb4BtWJ2rbttGx%2FMLeGAeCIL25SvucscPo0QC7DJGyEeFdnftiT4UkOoISfbSKbt2tDHvwND%2BDKqi3PTXe%2B4kbaOYv5F%2FcIpcJgYw%2FNCXA%2BPVt0kj31qIQ2%2Fg9ljQCXgeHhf6ZMNLkh04qpDZs0SPwXbvtVUvbkzw86flJYigUu%2F2nILdzudwpBRv231YWq5Adap%2BdMtAH62io3acrwnmpPnC7Jw%2Fky6bqHr6CK2sAMFOQtFqUB0bweX8c5AnNNNk3siN%2FKRYTxKzDJ8uholBE%2BSO2CnOCFJt7f5ZN90ur%2B5Ce980InnyTKef2O6K%2Fz44Nm7Ky7YaXkRDVpbNKsEyd5cZtxai722Qq%2F%2FV0nE%2FKPgDtaKqvUHJHmeUIiBnsQAxTr2J1XnOyPCMBT4CgrYn%2BWYUKMy6TlFGqDwlCf%2FqXh3kM%2F7yZAaGE2EsLoc0wi7bCKG00sUT85ZNuUePzZSteOI2kMVgMNm8ocEGOqUBEwTzF0Kmf8cev%2FBfNA7T1lL2FG1gIG6yzMeLu4I%2FCoyU5VfvByy1eR2xO6lNWpaMJln%2B4QN2dU79WMrzhLCO3FWPy8VMUftHLUYEpVvdQMF3dU6t4B4aRJZNrtgcI6Ry0LfV3voUjpV1cl3VxJsFY8%2FoUIU%2FPl5j6gnjjA3bePO2D7KGt57vPbCB7SJxIiYtVqvACyGCf4S7v2WDY79gqklhn9%2BH&X-Amz-Signature=8803c0e9bbc64d13966065598f06c9a52a41d17c3c1d1546b603464064e9c697&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMYLH4L6%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfnwIL8h0eCITmHD3VDeur%2F0aWwExB7i33XtqlD7JnhQIgZzSEGvBy53e2tMb9tWnGLTD8czi9PhVwnX82a%2FLVF%2BAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDL8kKOVMbEnew4e5pCrcAx92mcAAzGxYFByDdYQotP08Jf0R93x7LP1lRymMApOiIREsxng1OXK%2BdIe%2BOJyoFk7CTtW35MZpvPhtJYIz9xjVtY%2B%2FHadTXIxjza7rqdHz8SUsl7gF%2FvCAm40ueXxKNpOC4o%2FH0lSr983IgtBijm%2BdL291m4BBb4BtWJ2rbttGx%2FMLeGAeCIL25SvucscPo0QC7DJGyEeFdnftiT4UkOoISfbSKbt2tDHvwND%2BDKqi3PTXe%2B4kbaOYv5F%2FcIpcJgYw%2FNCXA%2BPVt0kj31qIQ2%2Fg9ljQCXgeHhf6ZMNLkh04qpDZs0SPwXbvtVUvbkzw86flJYigUu%2F2nILdzudwpBRv231YWq5Adap%2BdMtAH62io3acrwnmpPnC7Jw%2Fky6bqHr6CK2sAMFOQtFqUB0bweX8c5AnNNNk3siN%2FKRYTxKzDJ8uholBE%2BSO2CnOCFJt7f5ZN90ur%2B5Ce980InnyTKef2O6K%2Fz44Nm7Ky7YaXkRDVpbNKsEyd5cZtxai722Qq%2F%2FV0nE%2FKPgDtaKqvUHJHmeUIiBnsQAxTr2J1XnOyPCMBT4CgrYn%2BWYUKMy6TlFGqDwlCf%2FqXh3kM%2F7yZAaGE2EsLoc0wi7bCKG00sUT85ZNuUePzZSteOI2kMVgMNm8ocEGOqUBEwTzF0Kmf8cev%2FBfNA7T1lL2FG1gIG6yzMeLu4I%2FCoyU5VfvByy1eR2xO6lNWpaMJln%2B4QN2dU79WMrzhLCO3FWPy8VMUftHLUYEpVvdQMF3dU6t4B4aRJZNrtgcI6Ry0LfV3voUjpV1cl3VxJsFY8%2FoUIU%2FPl5j6gnjjA3bePO2D7KGt57vPbCB7SJxIiYtVqvACyGCf4S7v2WDY79gqklhn9%2BH&X-Amz-Signature=7590067d2b347c8c085a7923a98dda15f3dc9f747a825c7c2f51e7acf37fb89b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMYLH4L6%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfnwIL8h0eCITmHD3VDeur%2F0aWwExB7i33XtqlD7JnhQIgZzSEGvBy53e2tMb9tWnGLTD8czi9PhVwnX82a%2FLVF%2BAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDL8kKOVMbEnew4e5pCrcAx92mcAAzGxYFByDdYQotP08Jf0R93x7LP1lRymMApOiIREsxng1OXK%2BdIe%2BOJyoFk7CTtW35MZpvPhtJYIz9xjVtY%2B%2FHadTXIxjza7rqdHz8SUsl7gF%2FvCAm40ueXxKNpOC4o%2FH0lSr983IgtBijm%2BdL291m4BBb4BtWJ2rbttGx%2FMLeGAeCIL25SvucscPo0QC7DJGyEeFdnftiT4UkOoISfbSKbt2tDHvwND%2BDKqi3PTXe%2B4kbaOYv5F%2FcIpcJgYw%2FNCXA%2BPVt0kj31qIQ2%2Fg9ljQCXgeHhf6ZMNLkh04qpDZs0SPwXbvtVUvbkzw86flJYigUu%2F2nILdzudwpBRv231YWq5Adap%2BdMtAH62io3acrwnmpPnC7Jw%2Fky6bqHr6CK2sAMFOQtFqUB0bweX8c5AnNNNk3siN%2FKRYTxKzDJ8uholBE%2BSO2CnOCFJt7f5ZN90ur%2B5Ce980InnyTKef2O6K%2Fz44Nm7Ky7YaXkRDVpbNKsEyd5cZtxai722Qq%2F%2FV0nE%2FKPgDtaKqvUHJHmeUIiBnsQAxTr2J1XnOyPCMBT4CgrYn%2BWYUKMy6TlFGqDwlCf%2FqXh3kM%2F7yZAaGE2EsLoc0wi7bCKG00sUT85ZNuUePzZSteOI2kMVgMNm8ocEGOqUBEwTzF0Kmf8cev%2FBfNA7T1lL2FG1gIG6yzMeLu4I%2FCoyU5VfvByy1eR2xO6lNWpaMJln%2B4QN2dU79WMrzhLCO3FWPy8VMUftHLUYEpVvdQMF3dU6t4B4aRJZNrtgcI6Ry0LfV3voUjpV1cl3VxJsFY8%2FoUIU%2FPl5j6gnjjA3bePO2D7KGt57vPbCB7SJxIiYtVqvACyGCf4S7v2WDY79gqklhn9%2BH&X-Amz-Signature=5e27c56197e26083a6d5f62eec1cc91ce3f088a5e9133016c452a1c23742fb95&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMYLH4L6%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfnwIL8h0eCITmHD3VDeur%2F0aWwExB7i33XtqlD7JnhQIgZzSEGvBy53e2tMb9tWnGLTD8czi9PhVwnX82a%2FLVF%2BAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDL8kKOVMbEnew4e5pCrcAx92mcAAzGxYFByDdYQotP08Jf0R93x7LP1lRymMApOiIREsxng1OXK%2BdIe%2BOJyoFk7CTtW35MZpvPhtJYIz9xjVtY%2B%2FHadTXIxjza7rqdHz8SUsl7gF%2FvCAm40ueXxKNpOC4o%2FH0lSr983IgtBijm%2BdL291m4BBb4BtWJ2rbttGx%2FMLeGAeCIL25SvucscPo0QC7DJGyEeFdnftiT4UkOoISfbSKbt2tDHvwND%2BDKqi3PTXe%2B4kbaOYv5F%2FcIpcJgYw%2FNCXA%2BPVt0kj31qIQ2%2Fg9ljQCXgeHhf6ZMNLkh04qpDZs0SPwXbvtVUvbkzw86flJYigUu%2F2nILdzudwpBRv231YWq5Adap%2BdMtAH62io3acrwnmpPnC7Jw%2Fky6bqHr6CK2sAMFOQtFqUB0bweX8c5AnNNNk3siN%2FKRYTxKzDJ8uholBE%2BSO2CnOCFJt7f5ZN90ur%2B5Ce980InnyTKef2O6K%2Fz44Nm7Ky7YaXkRDVpbNKsEyd5cZtxai722Qq%2F%2FV0nE%2FKPgDtaKqvUHJHmeUIiBnsQAxTr2J1XnOyPCMBT4CgrYn%2BWYUKMy6TlFGqDwlCf%2FqXh3kM%2F7yZAaGE2EsLoc0wi7bCKG00sUT85ZNuUePzZSteOI2kMVgMNm8ocEGOqUBEwTzF0Kmf8cev%2FBfNA7T1lL2FG1gIG6yzMeLu4I%2FCoyU5VfvByy1eR2xO6lNWpaMJln%2B4QN2dU79WMrzhLCO3FWPy8VMUftHLUYEpVvdQMF3dU6t4B4aRJZNrtgcI6Ry0LfV3voUjpV1cl3VxJsFY8%2FoUIU%2FPl5j6gnjjA3bePO2D7KGt57vPbCB7SJxIiYtVqvACyGCf4S7v2WDY79gqklhn9%2BH&X-Amz-Signature=c6c2fe418d7e8b7627389f6e8532feb67aaaab579374e0db44869a9ad51f37da&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMYLH4L6%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfnwIL8h0eCITmHD3VDeur%2F0aWwExB7i33XtqlD7JnhQIgZzSEGvBy53e2tMb9tWnGLTD8czi9PhVwnX82a%2FLVF%2BAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDL8kKOVMbEnew4e5pCrcAx92mcAAzGxYFByDdYQotP08Jf0R93x7LP1lRymMApOiIREsxng1OXK%2BdIe%2BOJyoFk7CTtW35MZpvPhtJYIz9xjVtY%2B%2FHadTXIxjza7rqdHz8SUsl7gF%2FvCAm40ueXxKNpOC4o%2FH0lSr983IgtBijm%2BdL291m4BBb4BtWJ2rbttGx%2FMLeGAeCIL25SvucscPo0QC7DJGyEeFdnftiT4UkOoISfbSKbt2tDHvwND%2BDKqi3PTXe%2B4kbaOYv5F%2FcIpcJgYw%2FNCXA%2BPVt0kj31qIQ2%2Fg9ljQCXgeHhf6ZMNLkh04qpDZs0SPwXbvtVUvbkzw86flJYigUu%2F2nILdzudwpBRv231YWq5Adap%2BdMtAH62io3acrwnmpPnC7Jw%2Fky6bqHr6CK2sAMFOQtFqUB0bweX8c5AnNNNk3siN%2FKRYTxKzDJ8uholBE%2BSO2CnOCFJt7f5ZN90ur%2B5Ce980InnyTKef2O6K%2Fz44Nm7Ky7YaXkRDVpbNKsEyd5cZtxai722Qq%2F%2FV0nE%2FKPgDtaKqvUHJHmeUIiBnsQAxTr2J1XnOyPCMBT4CgrYn%2BWYUKMy6TlFGqDwlCf%2FqXh3kM%2F7yZAaGE2EsLoc0wi7bCKG00sUT85ZNuUePzZSteOI2kMVgMNm8ocEGOqUBEwTzF0Kmf8cev%2FBfNA7T1lL2FG1gIG6yzMeLu4I%2FCoyU5VfvByy1eR2xO6lNWpaMJln%2B4QN2dU79WMrzhLCO3FWPy8VMUftHLUYEpVvdQMF3dU6t4B4aRJZNrtgcI6Ry0LfV3voUjpV1cl3VxJsFY8%2FoUIU%2FPl5j6gnjjA3bePO2D7KGt57vPbCB7SJxIiYtVqvACyGCf4S7v2WDY79gqklhn9%2BH&X-Amz-Signature=ac49c74dd25a0c3e5add9f57068e03226314b985ee2191b4ab1c39f586d20e41&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMYLH4L6%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfnwIL8h0eCITmHD3VDeur%2F0aWwExB7i33XtqlD7JnhQIgZzSEGvBy53e2tMb9tWnGLTD8czi9PhVwnX82a%2FLVF%2BAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDL8kKOVMbEnew4e5pCrcAx92mcAAzGxYFByDdYQotP08Jf0R93x7LP1lRymMApOiIREsxng1OXK%2BdIe%2BOJyoFk7CTtW35MZpvPhtJYIz9xjVtY%2B%2FHadTXIxjza7rqdHz8SUsl7gF%2FvCAm40ueXxKNpOC4o%2FH0lSr983IgtBijm%2BdL291m4BBb4BtWJ2rbttGx%2FMLeGAeCIL25SvucscPo0QC7DJGyEeFdnftiT4UkOoISfbSKbt2tDHvwND%2BDKqi3PTXe%2B4kbaOYv5F%2FcIpcJgYw%2FNCXA%2BPVt0kj31qIQ2%2Fg9ljQCXgeHhf6ZMNLkh04qpDZs0SPwXbvtVUvbkzw86flJYigUu%2F2nILdzudwpBRv231YWq5Adap%2BdMtAH62io3acrwnmpPnC7Jw%2Fky6bqHr6CK2sAMFOQtFqUB0bweX8c5AnNNNk3siN%2FKRYTxKzDJ8uholBE%2BSO2CnOCFJt7f5ZN90ur%2B5Ce980InnyTKef2O6K%2Fz44Nm7Ky7YaXkRDVpbNKsEyd5cZtxai722Qq%2F%2FV0nE%2FKPgDtaKqvUHJHmeUIiBnsQAxTr2J1XnOyPCMBT4CgrYn%2BWYUKMy6TlFGqDwlCf%2FqXh3kM%2F7yZAaGE2EsLoc0wi7bCKG00sUT85ZNuUePzZSteOI2kMVgMNm8ocEGOqUBEwTzF0Kmf8cev%2FBfNA7T1lL2FG1gIG6yzMeLu4I%2FCoyU5VfvByy1eR2xO6lNWpaMJln%2B4QN2dU79WMrzhLCO3FWPy8VMUftHLUYEpVvdQMF3dU6t4B4aRJZNrtgcI6Ry0LfV3voUjpV1cl3VxJsFY8%2FoUIU%2FPl5j6gnjjA3bePO2D7KGt57vPbCB7SJxIiYtVqvACyGCf4S7v2WDY79gqklhn9%2BH&X-Amz-Signature=49fed259e3ce1c068cb4226dbbc6d53198aa03df9c2230ba6fb0891857376051&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMYLH4L6%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfnwIL8h0eCITmHD3VDeur%2F0aWwExB7i33XtqlD7JnhQIgZzSEGvBy53e2tMb9tWnGLTD8czi9PhVwnX82a%2FLVF%2BAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDL8kKOVMbEnew4e5pCrcAx92mcAAzGxYFByDdYQotP08Jf0R93x7LP1lRymMApOiIREsxng1OXK%2BdIe%2BOJyoFk7CTtW35MZpvPhtJYIz9xjVtY%2B%2FHadTXIxjza7rqdHz8SUsl7gF%2FvCAm40ueXxKNpOC4o%2FH0lSr983IgtBijm%2BdL291m4BBb4BtWJ2rbttGx%2FMLeGAeCIL25SvucscPo0QC7DJGyEeFdnftiT4UkOoISfbSKbt2tDHvwND%2BDKqi3PTXe%2B4kbaOYv5F%2FcIpcJgYw%2FNCXA%2BPVt0kj31qIQ2%2Fg9ljQCXgeHhf6ZMNLkh04qpDZs0SPwXbvtVUvbkzw86flJYigUu%2F2nILdzudwpBRv231YWq5Adap%2BdMtAH62io3acrwnmpPnC7Jw%2Fky6bqHr6CK2sAMFOQtFqUB0bweX8c5AnNNNk3siN%2FKRYTxKzDJ8uholBE%2BSO2CnOCFJt7f5ZN90ur%2B5Ce980InnyTKef2O6K%2Fz44Nm7Ky7YaXkRDVpbNKsEyd5cZtxai722Qq%2F%2FV0nE%2FKPgDtaKqvUHJHmeUIiBnsQAxTr2J1XnOyPCMBT4CgrYn%2BWYUKMy6TlFGqDwlCf%2FqXh3kM%2F7yZAaGE2EsLoc0wi7bCKG00sUT85ZNuUePzZSteOI2kMVgMNm8ocEGOqUBEwTzF0Kmf8cev%2FBfNA7T1lL2FG1gIG6yzMeLu4I%2FCoyU5VfvByy1eR2xO6lNWpaMJln%2B4QN2dU79WMrzhLCO3FWPy8VMUftHLUYEpVvdQMF3dU6t4B4aRJZNrtgcI6Ry0LfV3voUjpV1cl3VxJsFY8%2FoUIU%2FPl5j6gnjjA3bePO2D7KGt57vPbCB7SJxIiYtVqvACyGCf4S7v2WDY79gqklhn9%2BH&X-Amz-Signature=919e7e59428b97831d57882b505b8b92e4a90ed5236df6bb456aea262910b6d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMYLH4L6%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfnwIL8h0eCITmHD3VDeur%2F0aWwExB7i33XtqlD7JnhQIgZzSEGvBy53e2tMb9tWnGLTD8czi9PhVwnX82a%2FLVF%2BAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDL8kKOVMbEnew4e5pCrcAx92mcAAzGxYFByDdYQotP08Jf0R93x7LP1lRymMApOiIREsxng1OXK%2BdIe%2BOJyoFk7CTtW35MZpvPhtJYIz9xjVtY%2B%2FHadTXIxjza7rqdHz8SUsl7gF%2FvCAm40ueXxKNpOC4o%2FH0lSr983IgtBijm%2BdL291m4BBb4BtWJ2rbttGx%2FMLeGAeCIL25SvucscPo0QC7DJGyEeFdnftiT4UkOoISfbSKbt2tDHvwND%2BDKqi3PTXe%2B4kbaOYv5F%2FcIpcJgYw%2FNCXA%2BPVt0kj31qIQ2%2Fg9ljQCXgeHhf6ZMNLkh04qpDZs0SPwXbvtVUvbkzw86flJYigUu%2F2nILdzudwpBRv231YWq5Adap%2BdMtAH62io3acrwnmpPnC7Jw%2Fky6bqHr6CK2sAMFOQtFqUB0bweX8c5AnNNNk3siN%2FKRYTxKzDJ8uholBE%2BSO2CnOCFJt7f5ZN90ur%2B5Ce980InnyTKef2O6K%2Fz44Nm7Ky7YaXkRDVpbNKsEyd5cZtxai722Qq%2F%2FV0nE%2FKPgDtaKqvUHJHmeUIiBnsQAxTr2J1XnOyPCMBT4CgrYn%2BWYUKMy6TlFGqDwlCf%2FqXh3kM%2F7yZAaGE2EsLoc0wi7bCKG00sUT85ZNuUePzZSteOI2kMVgMNm8ocEGOqUBEwTzF0Kmf8cev%2FBfNA7T1lL2FG1gIG6yzMeLu4I%2FCoyU5VfvByy1eR2xO6lNWpaMJln%2B4QN2dU79WMrzhLCO3FWPy8VMUftHLUYEpVvdQMF3dU6t4B4aRJZNrtgcI6Ry0LfV3voUjpV1cl3VxJsFY8%2FoUIU%2FPl5j6gnjjA3bePO2D7KGt57vPbCB7SJxIiYtVqvACyGCf4S7v2WDY79gqklhn9%2BH&X-Amz-Signature=e1e11f0ee40b844cfc43f357f576e7f80c7cff5ff871aa78b0226170b46c5483&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
