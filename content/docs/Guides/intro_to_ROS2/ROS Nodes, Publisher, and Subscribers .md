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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4L3MMNA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfHdVZvR8RPZqCArFMxrzuhHqxd8ffEu29I8pVXnP2KAIhAIOxwZmORaCS7%2BlXM%2BA9JHKAkszVG%2BBOzpUB7d0oVhJ8KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3a4ccDMp4K26obnsq3AMzMzr2hQqUYOIZqDwDr1KAWVLg6BU%2BUP7B6nDDivD3C%2FFi6nqVzvLTEqk3vQdoLRRifd4S6VDrQMVJ4U5lOOEEzFqbP7zyk1j%2FRP%2BJ%2FcFSN8619RTBc2zoxDBy9nngQ0nQeCmXFQqLb1ExnwQwyP5t%2B%2BON8bnHyZFnU%2BWSdT5LnX23pXmAsYOp%2BfTH8AmKNwP7VYS2%2BfnEvPauUYiSwDQQwikcPaTwxqlv%2Btu2aaFZWItVbnk06%2B2e66ccDs14ikneF5psCTiJVveLILVMEUI9Y0d3JYT14Tstc9MTV5Wo35GUIMsUOpQGmGodPJBFj55tJt%2FHOobHO%2Bgo4BISqTEcA22AIIjzS4nIjlUhMM3ISbCzdRvmhUbo7BBhm%2BVWLm6WIhHySWp6WVhV53%2BHNL4eOMhtqIHpD03g7r1hnregMkFxS34G%2FThLk7nMcWss%2F41zAl9Di1ZxjAmsAyVk4XJ1J69Ft7v5FMuFuehfuuLiG6beqlyD1KUB4W73P5Ibd0qdeOP6%2FUjyOVA4Ci15Quu21VLfp1rIJBFq6K%2FarFxJYHMLibMFsaBDoFY%2F0K7I5LF8uzojhT%2F%2BN%2BxTcZoE%2BgK%2FHHzmpxD7Sm5UPZokyCdfgT15Kol2AWjw5GR1sTDc0djJBjqkAatvJ95dtR9faTj%2BK0BuMm58i3yjIJ2mKKleeAHitmgmLt85xQWdQCOpcwJ6Rc%2Fm6dw0LNVcHy6UHf3VcjWuHWfTPCT8HoGiXad0AEXzjUuqrLtSBple98Y90G4CgQDHcAh8Bzt1nz8mcK%2BUIauYyLQ0QCZij53OSaxqKbFX1L8RnP2CjBntD9iXEvToGaHdHQC7yR%2BLtGnEOJkUEtinWkErw2yT&X-Amz-Signature=abab498da8c0483897f250aaf7c33cb8bf622f67a1d1a37bb5efd8c14481ff10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4L3MMNA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfHdVZvR8RPZqCArFMxrzuhHqxd8ffEu29I8pVXnP2KAIhAIOxwZmORaCS7%2BlXM%2BA9JHKAkszVG%2BBOzpUB7d0oVhJ8KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3a4ccDMp4K26obnsq3AMzMzr2hQqUYOIZqDwDr1KAWVLg6BU%2BUP7B6nDDivD3C%2FFi6nqVzvLTEqk3vQdoLRRifd4S6VDrQMVJ4U5lOOEEzFqbP7zyk1j%2FRP%2BJ%2FcFSN8619RTBc2zoxDBy9nngQ0nQeCmXFQqLb1ExnwQwyP5t%2B%2BON8bnHyZFnU%2BWSdT5LnX23pXmAsYOp%2BfTH8AmKNwP7VYS2%2BfnEvPauUYiSwDQQwikcPaTwxqlv%2Btu2aaFZWItVbnk06%2B2e66ccDs14ikneF5psCTiJVveLILVMEUI9Y0d3JYT14Tstc9MTV5Wo35GUIMsUOpQGmGodPJBFj55tJt%2FHOobHO%2Bgo4BISqTEcA22AIIjzS4nIjlUhMM3ISbCzdRvmhUbo7BBhm%2BVWLm6WIhHySWp6WVhV53%2BHNL4eOMhtqIHpD03g7r1hnregMkFxS34G%2FThLk7nMcWss%2F41zAl9Di1ZxjAmsAyVk4XJ1J69Ft7v5FMuFuehfuuLiG6beqlyD1KUB4W73P5Ibd0qdeOP6%2FUjyOVA4Ci15Quu21VLfp1rIJBFq6K%2FarFxJYHMLibMFsaBDoFY%2F0K7I5LF8uzojhT%2F%2BN%2BxTcZoE%2BgK%2FHHzmpxD7Sm5UPZokyCdfgT15Kol2AWjw5GR1sTDc0djJBjqkAatvJ95dtR9faTj%2BK0BuMm58i3yjIJ2mKKleeAHitmgmLt85xQWdQCOpcwJ6Rc%2Fm6dw0LNVcHy6UHf3VcjWuHWfTPCT8HoGiXad0AEXzjUuqrLtSBple98Y90G4CgQDHcAh8Bzt1nz8mcK%2BUIauYyLQ0QCZij53OSaxqKbFX1L8RnP2CjBntD9iXEvToGaHdHQC7yR%2BLtGnEOJkUEtinWkErw2yT&X-Amz-Signature=844cf8eba156ffef54cca13dabfae0a527f1a33b7c3128f3f63e7a17b0d072f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4L3MMNA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfHdVZvR8RPZqCArFMxrzuhHqxd8ffEu29I8pVXnP2KAIhAIOxwZmORaCS7%2BlXM%2BA9JHKAkszVG%2BBOzpUB7d0oVhJ8KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3a4ccDMp4K26obnsq3AMzMzr2hQqUYOIZqDwDr1KAWVLg6BU%2BUP7B6nDDivD3C%2FFi6nqVzvLTEqk3vQdoLRRifd4S6VDrQMVJ4U5lOOEEzFqbP7zyk1j%2FRP%2BJ%2FcFSN8619RTBc2zoxDBy9nngQ0nQeCmXFQqLb1ExnwQwyP5t%2B%2BON8bnHyZFnU%2BWSdT5LnX23pXmAsYOp%2BfTH8AmKNwP7VYS2%2BfnEvPauUYiSwDQQwikcPaTwxqlv%2Btu2aaFZWItVbnk06%2B2e66ccDs14ikneF5psCTiJVveLILVMEUI9Y0d3JYT14Tstc9MTV5Wo35GUIMsUOpQGmGodPJBFj55tJt%2FHOobHO%2Bgo4BISqTEcA22AIIjzS4nIjlUhMM3ISbCzdRvmhUbo7BBhm%2BVWLm6WIhHySWp6WVhV53%2BHNL4eOMhtqIHpD03g7r1hnregMkFxS34G%2FThLk7nMcWss%2F41zAl9Di1ZxjAmsAyVk4XJ1J69Ft7v5FMuFuehfuuLiG6beqlyD1KUB4W73P5Ibd0qdeOP6%2FUjyOVA4Ci15Quu21VLfp1rIJBFq6K%2FarFxJYHMLibMFsaBDoFY%2F0K7I5LF8uzojhT%2F%2BN%2BxTcZoE%2BgK%2FHHzmpxD7Sm5UPZokyCdfgT15Kol2AWjw5GR1sTDc0djJBjqkAatvJ95dtR9faTj%2BK0BuMm58i3yjIJ2mKKleeAHitmgmLt85xQWdQCOpcwJ6Rc%2Fm6dw0LNVcHy6UHf3VcjWuHWfTPCT8HoGiXad0AEXzjUuqrLtSBple98Y90G4CgQDHcAh8Bzt1nz8mcK%2BUIauYyLQ0QCZij53OSaxqKbFX1L8RnP2CjBntD9iXEvToGaHdHQC7yR%2BLtGnEOJkUEtinWkErw2yT&X-Amz-Signature=fcd1e892303ae59c687ec737458ada26cc2d78f4625605dab6c2c587f8959e52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4L3MMNA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfHdVZvR8RPZqCArFMxrzuhHqxd8ffEu29I8pVXnP2KAIhAIOxwZmORaCS7%2BlXM%2BA9JHKAkszVG%2BBOzpUB7d0oVhJ8KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3a4ccDMp4K26obnsq3AMzMzr2hQqUYOIZqDwDr1KAWVLg6BU%2BUP7B6nDDivD3C%2FFi6nqVzvLTEqk3vQdoLRRifd4S6VDrQMVJ4U5lOOEEzFqbP7zyk1j%2FRP%2BJ%2FcFSN8619RTBc2zoxDBy9nngQ0nQeCmXFQqLb1ExnwQwyP5t%2B%2BON8bnHyZFnU%2BWSdT5LnX23pXmAsYOp%2BfTH8AmKNwP7VYS2%2BfnEvPauUYiSwDQQwikcPaTwxqlv%2Btu2aaFZWItVbnk06%2B2e66ccDs14ikneF5psCTiJVveLILVMEUI9Y0d3JYT14Tstc9MTV5Wo35GUIMsUOpQGmGodPJBFj55tJt%2FHOobHO%2Bgo4BISqTEcA22AIIjzS4nIjlUhMM3ISbCzdRvmhUbo7BBhm%2BVWLm6WIhHySWp6WVhV53%2BHNL4eOMhtqIHpD03g7r1hnregMkFxS34G%2FThLk7nMcWss%2F41zAl9Di1ZxjAmsAyVk4XJ1J69Ft7v5FMuFuehfuuLiG6beqlyD1KUB4W73P5Ibd0qdeOP6%2FUjyOVA4Ci15Quu21VLfp1rIJBFq6K%2FarFxJYHMLibMFsaBDoFY%2F0K7I5LF8uzojhT%2F%2BN%2BxTcZoE%2BgK%2FHHzmpxD7Sm5UPZokyCdfgT15Kol2AWjw5GR1sTDc0djJBjqkAatvJ95dtR9faTj%2BK0BuMm58i3yjIJ2mKKleeAHitmgmLt85xQWdQCOpcwJ6Rc%2Fm6dw0LNVcHy6UHf3VcjWuHWfTPCT8HoGiXad0AEXzjUuqrLtSBple98Y90G4CgQDHcAh8Bzt1nz8mcK%2BUIauYyLQ0QCZij53OSaxqKbFX1L8RnP2CjBntD9iXEvToGaHdHQC7yR%2BLtGnEOJkUEtinWkErw2yT&X-Amz-Signature=ac4bf223feab89dcca0e842b1b37bec287ec179ff564efdefeb47a7bc653dca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4L3MMNA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfHdVZvR8RPZqCArFMxrzuhHqxd8ffEu29I8pVXnP2KAIhAIOxwZmORaCS7%2BlXM%2BA9JHKAkszVG%2BBOzpUB7d0oVhJ8KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3a4ccDMp4K26obnsq3AMzMzr2hQqUYOIZqDwDr1KAWVLg6BU%2BUP7B6nDDivD3C%2FFi6nqVzvLTEqk3vQdoLRRifd4S6VDrQMVJ4U5lOOEEzFqbP7zyk1j%2FRP%2BJ%2FcFSN8619RTBc2zoxDBy9nngQ0nQeCmXFQqLb1ExnwQwyP5t%2B%2BON8bnHyZFnU%2BWSdT5LnX23pXmAsYOp%2BfTH8AmKNwP7VYS2%2BfnEvPauUYiSwDQQwikcPaTwxqlv%2Btu2aaFZWItVbnk06%2B2e66ccDs14ikneF5psCTiJVveLILVMEUI9Y0d3JYT14Tstc9MTV5Wo35GUIMsUOpQGmGodPJBFj55tJt%2FHOobHO%2Bgo4BISqTEcA22AIIjzS4nIjlUhMM3ISbCzdRvmhUbo7BBhm%2BVWLm6WIhHySWp6WVhV53%2BHNL4eOMhtqIHpD03g7r1hnregMkFxS34G%2FThLk7nMcWss%2F41zAl9Di1ZxjAmsAyVk4XJ1J69Ft7v5FMuFuehfuuLiG6beqlyD1KUB4W73P5Ibd0qdeOP6%2FUjyOVA4Ci15Quu21VLfp1rIJBFq6K%2FarFxJYHMLibMFsaBDoFY%2F0K7I5LF8uzojhT%2F%2BN%2BxTcZoE%2BgK%2FHHzmpxD7Sm5UPZokyCdfgT15Kol2AWjw5GR1sTDc0djJBjqkAatvJ95dtR9faTj%2BK0BuMm58i3yjIJ2mKKleeAHitmgmLt85xQWdQCOpcwJ6Rc%2Fm6dw0LNVcHy6UHf3VcjWuHWfTPCT8HoGiXad0AEXzjUuqrLtSBple98Y90G4CgQDHcAh8Bzt1nz8mcK%2BUIauYyLQ0QCZij53OSaxqKbFX1L8RnP2CjBntD9iXEvToGaHdHQC7yR%2BLtGnEOJkUEtinWkErw2yT&X-Amz-Signature=aa2f7b6232ed515e1cb189214eb5b82ba12cd2d71f9000d6d619127340a4cac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4L3MMNA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfHdVZvR8RPZqCArFMxrzuhHqxd8ffEu29I8pVXnP2KAIhAIOxwZmORaCS7%2BlXM%2BA9JHKAkszVG%2BBOzpUB7d0oVhJ8KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3a4ccDMp4K26obnsq3AMzMzr2hQqUYOIZqDwDr1KAWVLg6BU%2BUP7B6nDDivD3C%2FFi6nqVzvLTEqk3vQdoLRRifd4S6VDrQMVJ4U5lOOEEzFqbP7zyk1j%2FRP%2BJ%2FcFSN8619RTBc2zoxDBy9nngQ0nQeCmXFQqLb1ExnwQwyP5t%2B%2BON8bnHyZFnU%2BWSdT5LnX23pXmAsYOp%2BfTH8AmKNwP7VYS2%2BfnEvPauUYiSwDQQwikcPaTwxqlv%2Btu2aaFZWItVbnk06%2B2e66ccDs14ikneF5psCTiJVveLILVMEUI9Y0d3JYT14Tstc9MTV5Wo35GUIMsUOpQGmGodPJBFj55tJt%2FHOobHO%2Bgo4BISqTEcA22AIIjzS4nIjlUhMM3ISbCzdRvmhUbo7BBhm%2BVWLm6WIhHySWp6WVhV53%2BHNL4eOMhtqIHpD03g7r1hnregMkFxS34G%2FThLk7nMcWss%2F41zAl9Di1ZxjAmsAyVk4XJ1J69Ft7v5FMuFuehfuuLiG6beqlyD1KUB4W73P5Ibd0qdeOP6%2FUjyOVA4Ci15Quu21VLfp1rIJBFq6K%2FarFxJYHMLibMFsaBDoFY%2F0K7I5LF8uzojhT%2F%2BN%2BxTcZoE%2BgK%2FHHzmpxD7Sm5UPZokyCdfgT15Kol2AWjw5GR1sTDc0djJBjqkAatvJ95dtR9faTj%2BK0BuMm58i3yjIJ2mKKleeAHitmgmLt85xQWdQCOpcwJ6Rc%2Fm6dw0LNVcHy6UHf3VcjWuHWfTPCT8HoGiXad0AEXzjUuqrLtSBple98Y90G4CgQDHcAh8Bzt1nz8mcK%2BUIauYyLQ0QCZij53OSaxqKbFX1L8RnP2CjBntD9iXEvToGaHdHQC7yR%2BLtGnEOJkUEtinWkErw2yT&X-Amz-Signature=614c54031a0a171df8e8e546165e8c46614d299aebfdc7e894d7b68e410b0678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4L3MMNA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfHdVZvR8RPZqCArFMxrzuhHqxd8ffEu29I8pVXnP2KAIhAIOxwZmORaCS7%2BlXM%2BA9JHKAkszVG%2BBOzpUB7d0oVhJ8KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3a4ccDMp4K26obnsq3AMzMzr2hQqUYOIZqDwDr1KAWVLg6BU%2BUP7B6nDDivD3C%2FFi6nqVzvLTEqk3vQdoLRRifd4S6VDrQMVJ4U5lOOEEzFqbP7zyk1j%2FRP%2BJ%2FcFSN8619RTBc2zoxDBy9nngQ0nQeCmXFQqLb1ExnwQwyP5t%2B%2BON8bnHyZFnU%2BWSdT5LnX23pXmAsYOp%2BfTH8AmKNwP7VYS2%2BfnEvPauUYiSwDQQwikcPaTwxqlv%2Btu2aaFZWItVbnk06%2B2e66ccDs14ikneF5psCTiJVveLILVMEUI9Y0d3JYT14Tstc9MTV5Wo35GUIMsUOpQGmGodPJBFj55tJt%2FHOobHO%2Bgo4BISqTEcA22AIIjzS4nIjlUhMM3ISbCzdRvmhUbo7BBhm%2BVWLm6WIhHySWp6WVhV53%2BHNL4eOMhtqIHpD03g7r1hnregMkFxS34G%2FThLk7nMcWss%2F41zAl9Di1ZxjAmsAyVk4XJ1J69Ft7v5FMuFuehfuuLiG6beqlyD1KUB4W73P5Ibd0qdeOP6%2FUjyOVA4Ci15Quu21VLfp1rIJBFq6K%2FarFxJYHMLibMFsaBDoFY%2F0K7I5LF8uzojhT%2F%2BN%2BxTcZoE%2BgK%2FHHzmpxD7Sm5UPZokyCdfgT15Kol2AWjw5GR1sTDc0djJBjqkAatvJ95dtR9faTj%2BK0BuMm58i3yjIJ2mKKleeAHitmgmLt85xQWdQCOpcwJ6Rc%2Fm6dw0LNVcHy6UHf3VcjWuHWfTPCT8HoGiXad0AEXzjUuqrLtSBple98Y90G4CgQDHcAh8Bzt1nz8mcK%2BUIauYyLQ0QCZij53OSaxqKbFX1L8RnP2CjBntD9iXEvToGaHdHQC7yR%2BLtGnEOJkUEtinWkErw2yT&X-Amz-Signature=5c3d20ffb1e8de8a35ac248f7c5dd2b4b33865ff804178abf5ac4c469b0d6d3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4L3MMNA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfHdVZvR8RPZqCArFMxrzuhHqxd8ffEu29I8pVXnP2KAIhAIOxwZmORaCS7%2BlXM%2BA9JHKAkszVG%2BBOzpUB7d0oVhJ8KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3a4ccDMp4K26obnsq3AMzMzr2hQqUYOIZqDwDr1KAWVLg6BU%2BUP7B6nDDivD3C%2FFi6nqVzvLTEqk3vQdoLRRifd4S6VDrQMVJ4U5lOOEEzFqbP7zyk1j%2FRP%2BJ%2FcFSN8619RTBc2zoxDBy9nngQ0nQeCmXFQqLb1ExnwQwyP5t%2B%2BON8bnHyZFnU%2BWSdT5LnX23pXmAsYOp%2BfTH8AmKNwP7VYS2%2BfnEvPauUYiSwDQQwikcPaTwxqlv%2Btu2aaFZWItVbnk06%2B2e66ccDs14ikneF5psCTiJVveLILVMEUI9Y0d3JYT14Tstc9MTV5Wo35GUIMsUOpQGmGodPJBFj55tJt%2FHOobHO%2Bgo4BISqTEcA22AIIjzS4nIjlUhMM3ISbCzdRvmhUbo7BBhm%2BVWLm6WIhHySWp6WVhV53%2BHNL4eOMhtqIHpD03g7r1hnregMkFxS34G%2FThLk7nMcWss%2F41zAl9Di1ZxjAmsAyVk4XJ1J69Ft7v5FMuFuehfuuLiG6beqlyD1KUB4W73P5Ibd0qdeOP6%2FUjyOVA4Ci15Quu21VLfp1rIJBFq6K%2FarFxJYHMLibMFsaBDoFY%2F0K7I5LF8uzojhT%2F%2BN%2BxTcZoE%2BgK%2FHHzmpxD7Sm5UPZokyCdfgT15Kol2AWjw5GR1sTDc0djJBjqkAatvJ95dtR9faTj%2BK0BuMm58i3yjIJ2mKKleeAHitmgmLt85xQWdQCOpcwJ6Rc%2Fm6dw0LNVcHy6UHf3VcjWuHWfTPCT8HoGiXad0AEXzjUuqrLtSBple98Y90G4CgQDHcAh8Bzt1nz8mcK%2BUIauYyLQ0QCZij53OSaxqKbFX1L8RnP2CjBntD9iXEvToGaHdHQC7yR%2BLtGnEOJkUEtinWkErw2yT&X-Amz-Signature=10501cc704cf2d84cc93cac7bf28bdf8ef05d562e9ade733829744e005e09312&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
