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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOQ45S2T%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoTlZ0bcUpOCW6bzHnlwkEtAuKsjLymNQY2ukSRTIPnAIgNKAFI5%2FEP1gdY6kxPknF7Mswfcdu%2BFaTx0%2B29z9QoJwqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApn6XGJabxbZ7WHKircA5ZZDuyx6QhNEWYS0I49BVegF0a6eqIRZoX2LZat7wwQw8AW7heaAN0SWAZQpJNa2mY8qb15o52zgvcJROZ81HlyebB3rrsqY%2F%2BMB5YXI4lADubBO5m3sP2lVjkiz39BQkWUinPs1QOzf42Vt4SmJNUgTVrcaKLxU4hTHlEhFqtOHYiUd1G%2BZe8owcG6oqidu9EGHZxPHBROTJhOPrId8YvzfN%2F%2BTme6sw6aptNuoHbYx8RocCjZI5WsbFE6rDB3RCY3CEDXKiTG3G%2BOmMh6IqfnvARcwkU7jAsA6BAYQm4AfnGKgunzk2ItCStt02y8R3Wg6PbPgegw0H9NoNPgyHk%2BKVeKLI%2B6rDV92kbklmQoJmfldaZaq%2FO8rtE9egMPAue9Kkces%2FR1A%2BGobFEmdUhcwAP85INRXbf4A3hlf2VrTZ%2Fj6APg8uD9rGztsGRjK%2FAEIaXitM%2FvQHZcQsp9UyJYYWE2SSLfBLpyh%2Fh6Nrh36iJ6PaaXlwSVvI2tnaURsKNVAstwTitMaQ41311Fd43JmWAOkVw6zEjJqtCc1x7oMAnpV5Sof4uYpufsYFI52UhdRznhcMuYe8ZltfODpcDzniSkXsiCHFG0gDLypocA%2BDKw8Zd%2B54qshQmZMP2sjcoGOqUBqG55zJxWCOAUNXhrKCsF5EQq8PArcayrmgdeTmQYGtMbFuiDhwfa2l48Zi%2B6oKE8E7EK8GPOwDPB%2BIQmW1RoA%2FocoikZ16QywBDVbfDGV9tnTNH8YU4dEfdrrpWklGXD9xGx5jLBEsElrQyc%2BzUygJH7lrfY1g01Xfj%2FPU9OCXkh5TPGSYjaUKN1eZa9B8JA5MZ1mtzDtsq5m7IAnJ7pWBbG2j6z&X-Amz-Signature=95ddd548d51e08b4dee64045a57adf194a7216bd7517b55a084f38bba7802426&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOQ45S2T%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoTlZ0bcUpOCW6bzHnlwkEtAuKsjLymNQY2ukSRTIPnAIgNKAFI5%2FEP1gdY6kxPknF7Mswfcdu%2BFaTx0%2B29z9QoJwqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApn6XGJabxbZ7WHKircA5ZZDuyx6QhNEWYS0I49BVegF0a6eqIRZoX2LZat7wwQw8AW7heaAN0SWAZQpJNa2mY8qb15o52zgvcJROZ81HlyebB3rrsqY%2F%2BMB5YXI4lADubBO5m3sP2lVjkiz39BQkWUinPs1QOzf42Vt4SmJNUgTVrcaKLxU4hTHlEhFqtOHYiUd1G%2BZe8owcG6oqidu9EGHZxPHBROTJhOPrId8YvzfN%2F%2BTme6sw6aptNuoHbYx8RocCjZI5WsbFE6rDB3RCY3CEDXKiTG3G%2BOmMh6IqfnvARcwkU7jAsA6BAYQm4AfnGKgunzk2ItCStt02y8R3Wg6PbPgegw0H9NoNPgyHk%2BKVeKLI%2B6rDV92kbklmQoJmfldaZaq%2FO8rtE9egMPAue9Kkces%2FR1A%2BGobFEmdUhcwAP85INRXbf4A3hlf2VrTZ%2Fj6APg8uD9rGztsGRjK%2FAEIaXitM%2FvQHZcQsp9UyJYYWE2SSLfBLpyh%2Fh6Nrh36iJ6PaaXlwSVvI2tnaURsKNVAstwTitMaQ41311Fd43JmWAOkVw6zEjJqtCc1x7oMAnpV5Sof4uYpufsYFI52UhdRznhcMuYe8ZltfODpcDzniSkXsiCHFG0gDLypocA%2BDKw8Zd%2B54qshQmZMP2sjcoGOqUBqG55zJxWCOAUNXhrKCsF5EQq8PArcayrmgdeTmQYGtMbFuiDhwfa2l48Zi%2B6oKE8E7EK8GPOwDPB%2BIQmW1RoA%2FocoikZ16QywBDVbfDGV9tnTNH8YU4dEfdrrpWklGXD9xGx5jLBEsElrQyc%2BzUygJH7lrfY1g01Xfj%2FPU9OCXkh5TPGSYjaUKN1eZa9B8JA5MZ1mtzDtsq5m7IAnJ7pWBbG2j6z&X-Amz-Signature=d2b413868da159a9952ada4952a3fac63d894613e6635ea69f61e4e495864be0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOQ45S2T%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoTlZ0bcUpOCW6bzHnlwkEtAuKsjLymNQY2ukSRTIPnAIgNKAFI5%2FEP1gdY6kxPknF7Mswfcdu%2BFaTx0%2B29z9QoJwqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApn6XGJabxbZ7WHKircA5ZZDuyx6QhNEWYS0I49BVegF0a6eqIRZoX2LZat7wwQw8AW7heaAN0SWAZQpJNa2mY8qb15o52zgvcJROZ81HlyebB3rrsqY%2F%2BMB5YXI4lADubBO5m3sP2lVjkiz39BQkWUinPs1QOzf42Vt4SmJNUgTVrcaKLxU4hTHlEhFqtOHYiUd1G%2BZe8owcG6oqidu9EGHZxPHBROTJhOPrId8YvzfN%2F%2BTme6sw6aptNuoHbYx8RocCjZI5WsbFE6rDB3RCY3CEDXKiTG3G%2BOmMh6IqfnvARcwkU7jAsA6BAYQm4AfnGKgunzk2ItCStt02y8R3Wg6PbPgegw0H9NoNPgyHk%2BKVeKLI%2B6rDV92kbklmQoJmfldaZaq%2FO8rtE9egMPAue9Kkces%2FR1A%2BGobFEmdUhcwAP85INRXbf4A3hlf2VrTZ%2Fj6APg8uD9rGztsGRjK%2FAEIaXitM%2FvQHZcQsp9UyJYYWE2SSLfBLpyh%2Fh6Nrh36iJ6PaaXlwSVvI2tnaURsKNVAstwTitMaQ41311Fd43JmWAOkVw6zEjJqtCc1x7oMAnpV5Sof4uYpufsYFI52UhdRznhcMuYe8ZltfODpcDzniSkXsiCHFG0gDLypocA%2BDKw8Zd%2B54qshQmZMP2sjcoGOqUBqG55zJxWCOAUNXhrKCsF5EQq8PArcayrmgdeTmQYGtMbFuiDhwfa2l48Zi%2B6oKE8E7EK8GPOwDPB%2BIQmW1RoA%2FocoikZ16QywBDVbfDGV9tnTNH8YU4dEfdrrpWklGXD9xGx5jLBEsElrQyc%2BzUygJH7lrfY1g01Xfj%2FPU9OCXkh5TPGSYjaUKN1eZa9B8JA5MZ1mtzDtsq5m7IAnJ7pWBbG2j6z&X-Amz-Signature=560ba34ae88a1a00eb32611a5bdafdd81ae68078533e28aebd8dbd2ead355b25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOQ45S2T%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoTlZ0bcUpOCW6bzHnlwkEtAuKsjLymNQY2ukSRTIPnAIgNKAFI5%2FEP1gdY6kxPknF7Mswfcdu%2BFaTx0%2B29z9QoJwqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApn6XGJabxbZ7WHKircA5ZZDuyx6QhNEWYS0I49BVegF0a6eqIRZoX2LZat7wwQw8AW7heaAN0SWAZQpJNa2mY8qb15o52zgvcJROZ81HlyebB3rrsqY%2F%2BMB5YXI4lADubBO5m3sP2lVjkiz39BQkWUinPs1QOzf42Vt4SmJNUgTVrcaKLxU4hTHlEhFqtOHYiUd1G%2BZe8owcG6oqidu9EGHZxPHBROTJhOPrId8YvzfN%2F%2BTme6sw6aptNuoHbYx8RocCjZI5WsbFE6rDB3RCY3CEDXKiTG3G%2BOmMh6IqfnvARcwkU7jAsA6BAYQm4AfnGKgunzk2ItCStt02y8R3Wg6PbPgegw0H9NoNPgyHk%2BKVeKLI%2B6rDV92kbklmQoJmfldaZaq%2FO8rtE9egMPAue9Kkces%2FR1A%2BGobFEmdUhcwAP85INRXbf4A3hlf2VrTZ%2Fj6APg8uD9rGztsGRjK%2FAEIaXitM%2FvQHZcQsp9UyJYYWE2SSLfBLpyh%2Fh6Nrh36iJ6PaaXlwSVvI2tnaURsKNVAstwTitMaQ41311Fd43JmWAOkVw6zEjJqtCc1x7oMAnpV5Sof4uYpufsYFI52UhdRznhcMuYe8ZltfODpcDzniSkXsiCHFG0gDLypocA%2BDKw8Zd%2B54qshQmZMP2sjcoGOqUBqG55zJxWCOAUNXhrKCsF5EQq8PArcayrmgdeTmQYGtMbFuiDhwfa2l48Zi%2B6oKE8E7EK8GPOwDPB%2BIQmW1RoA%2FocoikZ16QywBDVbfDGV9tnTNH8YU4dEfdrrpWklGXD9xGx5jLBEsElrQyc%2BzUygJH7lrfY1g01Xfj%2FPU9OCXkh5TPGSYjaUKN1eZa9B8JA5MZ1mtzDtsq5m7IAnJ7pWBbG2j6z&X-Amz-Signature=9fed390f63303f5dc3d0bb97d2960d896a642af84aa3389bd565ec009a3a8a7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOQ45S2T%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoTlZ0bcUpOCW6bzHnlwkEtAuKsjLymNQY2ukSRTIPnAIgNKAFI5%2FEP1gdY6kxPknF7Mswfcdu%2BFaTx0%2B29z9QoJwqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApn6XGJabxbZ7WHKircA5ZZDuyx6QhNEWYS0I49BVegF0a6eqIRZoX2LZat7wwQw8AW7heaAN0SWAZQpJNa2mY8qb15o52zgvcJROZ81HlyebB3rrsqY%2F%2BMB5YXI4lADubBO5m3sP2lVjkiz39BQkWUinPs1QOzf42Vt4SmJNUgTVrcaKLxU4hTHlEhFqtOHYiUd1G%2BZe8owcG6oqidu9EGHZxPHBROTJhOPrId8YvzfN%2F%2BTme6sw6aptNuoHbYx8RocCjZI5WsbFE6rDB3RCY3CEDXKiTG3G%2BOmMh6IqfnvARcwkU7jAsA6BAYQm4AfnGKgunzk2ItCStt02y8R3Wg6PbPgegw0H9NoNPgyHk%2BKVeKLI%2B6rDV92kbklmQoJmfldaZaq%2FO8rtE9egMPAue9Kkces%2FR1A%2BGobFEmdUhcwAP85INRXbf4A3hlf2VrTZ%2Fj6APg8uD9rGztsGRjK%2FAEIaXitM%2FvQHZcQsp9UyJYYWE2SSLfBLpyh%2Fh6Nrh36iJ6PaaXlwSVvI2tnaURsKNVAstwTitMaQ41311Fd43JmWAOkVw6zEjJqtCc1x7oMAnpV5Sof4uYpufsYFI52UhdRznhcMuYe8ZltfODpcDzniSkXsiCHFG0gDLypocA%2BDKw8Zd%2B54qshQmZMP2sjcoGOqUBqG55zJxWCOAUNXhrKCsF5EQq8PArcayrmgdeTmQYGtMbFuiDhwfa2l48Zi%2B6oKE8E7EK8GPOwDPB%2BIQmW1RoA%2FocoikZ16QywBDVbfDGV9tnTNH8YU4dEfdrrpWklGXD9xGx5jLBEsElrQyc%2BzUygJH7lrfY1g01Xfj%2FPU9OCXkh5TPGSYjaUKN1eZa9B8JA5MZ1mtzDtsq5m7IAnJ7pWBbG2j6z&X-Amz-Signature=9dce855ef840f056ad9329659ee6cef4e573e33e8c14eb920de74ca4e1b11359&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOQ45S2T%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoTlZ0bcUpOCW6bzHnlwkEtAuKsjLymNQY2ukSRTIPnAIgNKAFI5%2FEP1gdY6kxPknF7Mswfcdu%2BFaTx0%2B29z9QoJwqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApn6XGJabxbZ7WHKircA5ZZDuyx6QhNEWYS0I49BVegF0a6eqIRZoX2LZat7wwQw8AW7heaAN0SWAZQpJNa2mY8qb15o52zgvcJROZ81HlyebB3rrsqY%2F%2BMB5YXI4lADubBO5m3sP2lVjkiz39BQkWUinPs1QOzf42Vt4SmJNUgTVrcaKLxU4hTHlEhFqtOHYiUd1G%2BZe8owcG6oqidu9EGHZxPHBROTJhOPrId8YvzfN%2F%2BTme6sw6aptNuoHbYx8RocCjZI5WsbFE6rDB3RCY3CEDXKiTG3G%2BOmMh6IqfnvARcwkU7jAsA6BAYQm4AfnGKgunzk2ItCStt02y8R3Wg6PbPgegw0H9NoNPgyHk%2BKVeKLI%2B6rDV92kbklmQoJmfldaZaq%2FO8rtE9egMPAue9Kkces%2FR1A%2BGobFEmdUhcwAP85INRXbf4A3hlf2VrTZ%2Fj6APg8uD9rGztsGRjK%2FAEIaXitM%2FvQHZcQsp9UyJYYWE2SSLfBLpyh%2Fh6Nrh36iJ6PaaXlwSVvI2tnaURsKNVAstwTitMaQ41311Fd43JmWAOkVw6zEjJqtCc1x7oMAnpV5Sof4uYpufsYFI52UhdRznhcMuYe8ZltfODpcDzniSkXsiCHFG0gDLypocA%2BDKw8Zd%2B54qshQmZMP2sjcoGOqUBqG55zJxWCOAUNXhrKCsF5EQq8PArcayrmgdeTmQYGtMbFuiDhwfa2l48Zi%2B6oKE8E7EK8GPOwDPB%2BIQmW1RoA%2FocoikZ16QywBDVbfDGV9tnTNH8YU4dEfdrrpWklGXD9xGx5jLBEsElrQyc%2BzUygJH7lrfY1g01Xfj%2FPU9OCXkh5TPGSYjaUKN1eZa9B8JA5MZ1mtzDtsq5m7IAnJ7pWBbG2j6z&X-Amz-Signature=5e825688f6db09104cf89d990868a4e3180a29b61570ff3a9e6f79c51fece85d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOQ45S2T%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoTlZ0bcUpOCW6bzHnlwkEtAuKsjLymNQY2ukSRTIPnAIgNKAFI5%2FEP1gdY6kxPknF7Mswfcdu%2BFaTx0%2B29z9QoJwqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApn6XGJabxbZ7WHKircA5ZZDuyx6QhNEWYS0I49BVegF0a6eqIRZoX2LZat7wwQw8AW7heaAN0SWAZQpJNa2mY8qb15o52zgvcJROZ81HlyebB3rrsqY%2F%2BMB5YXI4lADubBO5m3sP2lVjkiz39BQkWUinPs1QOzf42Vt4SmJNUgTVrcaKLxU4hTHlEhFqtOHYiUd1G%2BZe8owcG6oqidu9EGHZxPHBROTJhOPrId8YvzfN%2F%2BTme6sw6aptNuoHbYx8RocCjZI5WsbFE6rDB3RCY3CEDXKiTG3G%2BOmMh6IqfnvARcwkU7jAsA6BAYQm4AfnGKgunzk2ItCStt02y8R3Wg6PbPgegw0H9NoNPgyHk%2BKVeKLI%2B6rDV92kbklmQoJmfldaZaq%2FO8rtE9egMPAue9Kkces%2FR1A%2BGobFEmdUhcwAP85INRXbf4A3hlf2VrTZ%2Fj6APg8uD9rGztsGRjK%2FAEIaXitM%2FvQHZcQsp9UyJYYWE2SSLfBLpyh%2Fh6Nrh36iJ6PaaXlwSVvI2tnaURsKNVAstwTitMaQ41311Fd43JmWAOkVw6zEjJqtCc1x7oMAnpV5Sof4uYpufsYFI52UhdRznhcMuYe8ZltfODpcDzniSkXsiCHFG0gDLypocA%2BDKw8Zd%2B54qshQmZMP2sjcoGOqUBqG55zJxWCOAUNXhrKCsF5EQq8PArcayrmgdeTmQYGtMbFuiDhwfa2l48Zi%2B6oKE8E7EK8GPOwDPB%2BIQmW1RoA%2FocoikZ16QywBDVbfDGV9tnTNH8YU4dEfdrrpWklGXD9xGx5jLBEsElrQyc%2BzUygJH7lrfY1g01Xfj%2FPU9OCXkh5TPGSYjaUKN1eZa9B8JA5MZ1mtzDtsq5m7IAnJ7pWBbG2j6z&X-Amz-Signature=f4756022aa179b94a12cca7fe0f4c45753bcc11963708357bc2e7b6227aa41fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOQ45S2T%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoTlZ0bcUpOCW6bzHnlwkEtAuKsjLymNQY2ukSRTIPnAIgNKAFI5%2FEP1gdY6kxPknF7Mswfcdu%2BFaTx0%2B29z9QoJwqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApn6XGJabxbZ7WHKircA5ZZDuyx6QhNEWYS0I49BVegF0a6eqIRZoX2LZat7wwQw8AW7heaAN0SWAZQpJNa2mY8qb15o52zgvcJROZ81HlyebB3rrsqY%2F%2BMB5YXI4lADubBO5m3sP2lVjkiz39BQkWUinPs1QOzf42Vt4SmJNUgTVrcaKLxU4hTHlEhFqtOHYiUd1G%2BZe8owcG6oqidu9EGHZxPHBROTJhOPrId8YvzfN%2F%2BTme6sw6aptNuoHbYx8RocCjZI5WsbFE6rDB3RCY3CEDXKiTG3G%2BOmMh6IqfnvARcwkU7jAsA6BAYQm4AfnGKgunzk2ItCStt02y8R3Wg6PbPgegw0H9NoNPgyHk%2BKVeKLI%2B6rDV92kbklmQoJmfldaZaq%2FO8rtE9egMPAue9Kkces%2FR1A%2BGobFEmdUhcwAP85INRXbf4A3hlf2VrTZ%2Fj6APg8uD9rGztsGRjK%2FAEIaXitM%2FvQHZcQsp9UyJYYWE2SSLfBLpyh%2Fh6Nrh36iJ6PaaXlwSVvI2tnaURsKNVAstwTitMaQ41311Fd43JmWAOkVw6zEjJqtCc1x7oMAnpV5Sof4uYpufsYFI52UhdRznhcMuYe8ZltfODpcDzniSkXsiCHFG0gDLypocA%2BDKw8Zd%2B54qshQmZMP2sjcoGOqUBqG55zJxWCOAUNXhrKCsF5EQq8PArcayrmgdeTmQYGtMbFuiDhwfa2l48Zi%2B6oKE8E7EK8GPOwDPB%2BIQmW1RoA%2FocoikZ16QywBDVbfDGV9tnTNH8YU4dEfdrrpWklGXD9xGx5jLBEsElrQyc%2BzUygJH7lrfY1g01Xfj%2FPU9OCXkh5TPGSYjaUKN1eZa9B8JA5MZ1mtzDtsq5m7IAnJ7pWBbG2j6z&X-Amz-Signature=7c1cb666e730ad4a9493b6e6cf4240f8798b5304d70e1f156cf8e1ee34b22462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
