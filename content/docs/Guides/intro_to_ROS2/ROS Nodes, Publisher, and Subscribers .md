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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622PCRDEB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIAgwe3h06h%2FLeLvrlCJsP1YB9ftIQhiqk5SiJc%2Fmmn0jAiEA8wAYs7N%2FN6TRr941Iutu0QMBDEB%2F%2Fkr%2FdsIekFa8aGsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJzkVco6cyUZJj2PDSrcAz3Rsy%2BtP5QFwwmk3bWA%2F7nxexv%2Bwh3KFmnRd8HnnFvuaOEYQTA8ZJKjlVNy7R%2B%2FcwUQxBKsyD8DJVzKQWIy8Bu3POdR81jsi5JLgQLfJ5oB%2Fo0uKZnKe388FC05j13NWx%2Bxkz15jccORMW6EMWHWrrSscWLb9oUNc45F9J%2Bs6YI2SwyD1EKDRGXgw%2F5DxpPxnDnYL6qAPIwxREHWvxGxye1i19KeOtHPif6I9YfOtAFnExCrUo0kWkq0jrdU9HDErMKi%2FdUngiocvM%2Bka3RESGLyfQLSrE858fVpGQxd6WYYcLmGatnjrkqS8CgCJCU630eamJwbYXw2iBNV4WUzMHFuCOI1LQBhNkM2iil%2Fx6R2C4sCtkMIl46D6%2BN4DKpN8%2F3yitWQx4UPDQ%2BtJy1Sh35BGCyiWlKUKGKBZaxpVtWWj7C3BFDu4E1r7qdE1QcJGQmb9gVnArCR%2BC%2Bb59AckAPK3jpJ2zFCpFrq0Af8YjOTzJmeMCKo3282Y9hAtTWm1TfH%2FnOFEpodZM55G1mFadrZ4jHRdTL3aBy0U5xmQtoAXV9B65jYV9y6loDQBzE9ZZ2SUoePTSh9zIl4EpIieudzXOgd59nnJ35GZVrVjxI8o5abhOlqGTSzbaHMOmCsr4GOqUBYjhvvB%2FKhNr9P5%2BUQw8tx3esrkDCEDgYAzNPS1MkWHLY0VOdDtB9H0AanrGj8mcFlvY58VZIjpOY6tIFzWrii3fpgi7r4p1anRRl%2B58t3L99a8swCLiS9U%2BNBQzFYuv79sQ6G9v6l3eiH9%2BadDiwEHQKd9H2089tkiMBnFatKnhtSlStuYh153b2GdfPyjKvduqVTX0CsQfwCWmFZ16FxrbxZ1yz&X-Amz-Signature=6545e5fdde974a5677bea5eb0f16c3b67eee8cb726af017b4226b20ce1d19b2a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622PCRDEB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIAgwe3h06h%2FLeLvrlCJsP1YB9ftIQhiqk5SiJc%2Fmmn0jAiEA8wAYs7N%2FN6TRr941Iutu0QMBDEB%2F%2Fkr%2FdsIekFa8aGsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJzkVco6cyUZJj2PDSrcAz3Rsy%2BtP5QFwwmk3bWA%2F7nxexv%2Bwh3KFmnRd8HnnFvuaOEYQTA8ZJKjlVNy7R%2B%2FcwUQxBKsyD8DJVzKQWIy8Bu3POdR81jsi5JLgQLfJ5oB%2Fo0uKZnKe388FC05j13NWx%2Bxkz15jccORMW6EMWHWrrSscWLb9oUNc45F9J%2Bs6YI2SwyD1EKDRGXgw%2F5DxpPxnDnYL6qAPIwxREHWvxGxye1i19KeOtHPif6I9YfOtAFnExCrUo0kWkq0jrdU9HDErMKi%2FdUngiocvM%2Bka3RESGLyfQLSrE858fVpGQxd6WYYcLmGatnjrkqS8CgCJCU630eamJwbYXw2iBNV4WUzMHFuCOI1LQBhNkM2iil%2Fx6R2C4sCtkMIl46D6%2BN4DKpN8%2F3yitWQx4UPDQ%2BtJy1Sh35BGCyiWlKUKGKBZaxpVtWWj7C3BFDu4E1r7qdE1QcJGQmb9gVnArCR%2BC%2Bb59AckAPK3jpJ2zFCpFrq0Af8YjOTzJmeMCKo3282Y9hAtTWm1TfH%2FnOFEpodZM55G1mFadrZ4jHRdTL3aBy0U5xmQtoAXV9B65jYV9y6loDQBzE9ZZ2SUoePTSh9zIl4EpIieudzXOgd59nnJ35GZVrVjxI8o5abhOlqGTSzbaHMOmCsr4GOqUBYjhvvB%2FKhNr9P5%2BUQw8tx3esrkDCEDgYAzNPS1MkWHLY0VOdDtB9H0AanrGj8mcFlvY58VZIjpOY6tIFzWrii3fpgi7r4p1anRRl%2B58t3L99a8swCLiS9U%2BNBQzFYuv79sQ6G9v6l3eiH9%2BadDiwEHQKd9H2089tkiMBnFatKnhtSlStuYh153b2GdfPyjKvduqVTX0CsQfwCWmFZ16FxrbxZ1yz&X-Amz-Signature=f1f569887357d998a376f523066904f4742430078d8d42eb7da008570b3504f5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622PCRDEB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIAgwe3h06h%2FLeLvrlCJsP1YB9ftIQhiqk5SiJc%2Fmmn0jAiEA8wAYs7N%2FN6TRr941Iutu0QMBDEB%2F%2Fkr%2FdsIekFa8aGsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJzkVco6cyUZJj2PDSrcAz3Rsy%2BtP5QFwwmk3bWA%2F7nxexv%2Bwh3KFmnRd8HnnFvuaOEYQTA8ZJKjlVNy7R%2B%2FcwUQxBKsyD8DJVzKQWIy8Bu3POdR81jsi5JLgQLfJ5oB%2Fo0uKZnKe388FC05j13NWx%2Bxkz15jccORMW6EMWHWrrSscWLb9oUNc45F9J%2Bs6YI2SwyD1EKDRGXgw%2F5DxpPxnDnYL6qAPIwxREHWvxGxye1i19KeOtHPif6I9YfOtAFnExCrUo0kWkq0jrdU9HDErMKi%2FdUngiocvM%2Bka3RESGLyfQLSrE858fVpGQxd6WYYcLmGatnjrkqS8CgCJCU630eamJwbYXw2iBNV4WUzMHFuCOI1LQBhNkM2iil%2Fx6R2C4sCtkMIl46D6%2BN4DKpN8%2F3yitWQx4UPDQ%2BtJy1Sh35BGCyiWlKUKGKBZaxpVtWWj7C3BFDu4E1r7qdE1QcJGQmb9gVnArCR%2BC%2Bb59AckAPK3jpJ2zFCpFrq0Af8YjOTzJmeMCKo3282Y9hAtTWm1TfH%2FnOFEpodZM55G1mFadrZ4jHRdTL3aBy0U5xmQtoAXV9B65jYV9y6loDQBzE9ZZ2SUoePTSh9zIl4EpIieudzXOgd59nnJ35GZVrVjxI8o5abhOlqGTSzbaHMOmCsr4GOqUBYjhvvB%2FKhNr9P5%2BUQw8tx3esrkDCEDgYAzNPS1MkWHLY0VOdDtB9H0AanrGj8mcFlvY58VZIjpOY6tIFzWrii3fpgi7r4p1anRRl%2B58t3L99a8swCLiS9U%2BNBQzFYuv79sQ6G9v6l3eiH9%2BadDiwEHQKd9H2089tkiMBnFatKnhtSlStuYh153b2GdfPyjKvduqVTX0CsQfwCWmFZ16FxrbxZ1yz&X-Amz-Signature=291710fe76055746f05619612aa0cc4911c05fcbded338e22092bf34f8ee8c71&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622PCRDEB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIAgwe3h06h%2FLeLvrlCJsP1YB9ftIQhiqk5SiJc%2Fmmn0jAiEA8wAYs7N%2FN6TRr941Iutu0QMBDEB%2F%2Fkr%2FdsIekFa8aGsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJzkVco6cyUZJj2PDSrcAz3Rsy%2BtP5QFwwmk3bWA%2F7nxexv%2Bwh3KFmnRd8HnnFvuaOEYQTA8ZJKjlVNy7R%2B%2FcwUQxBKsyD8DJVzKQWIy8Bu3POdR81jsi5JLgQLfJ5oB%2Fo0uKZnKe388FC05j13NWx%2Bxkz15jccORMW6EMWHWrrSscWLb9oUNc45F9J%2Bs6YI2SwyD1EKDRGXgw%2F5DxpPxnDnYL6qAPIwxREHWvxGxye1i19KeOtHPif6I9YfOtAFnExCrUo0kWkq0jrdU9HDErMKi%2FdUngiocvM%2Bka3RESGLyfQLSrE858fVpGQxd6WYYcLmGatnjrkqS8CgCJCU630eamJwbYXw2iBNV4WUzMHFuCOI1LQBhNkM2iil%2Fx6R2C4sCtkMIl46D6%2BN4DKpN8%2F3yitWQx4UPDQ%2BtJy1Sh35BGCyiWlKUKGKBZaxpVtWWj7C3BFDu4E1r7qdE1QcJGQmb9gVnArCR%2BC%2Bb59AckAPK3jpJ2zFCpFrq0Af8YjOTzJmeMCKo3282Y9hAtTWm1TfH%2FnOFEpodZM55G1mFadrZ4jHRdTL3aBy0U5xmQtoAXV9B65jYV9y6loDQBzE9ZZ2SUoePTSh9zIl4EpIieudzXOgd59nnJ35GZVrVjxI8o5abhOlqGTSzbaHMOmCsr4GOqUBYjhvvB%2FKhNr9P5%2BUQw8tx3esrkDCEDgYAzNPS1MkWHLY0VOdDtB9H0AanrGj8mcFlvY58VZIjpOY6tIFzWrii3fpgi7r4p1anRRl%2B58t3L99a8swCLiS9U%2BNBQzFYuv79sQ6G9v6l3eiH9%2BadDiwEHQKd9H2089tkiMBnFatKnhtSlStuYh153b2GdfPyjKvduqVTX0CsQfwCWmFZ16FxrbxZ1yz&X-Amz-Signature=f5f59c6bdcf2b68387c2198b62bea63937c0f376310356718991f23cadff7f5a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622PCRDEB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIAgwe3h06h%2FLeLvrlCJsP1YB9ftIQhiqk5SiJc%2Fmmn0jAiEA8wAYs7N%2FN6TRr941Iutu0QMBDEB%2F%2Fkr%2FdsIekFa8aGsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJzkVco6cyUZJj2PDSrcAz3Rsy%2BtP5QFwwmk3bWA%2F7nxexv%2Bwh3KFmnRd8HnnFvuaOEYQTA8ZJKjlVNy7R%2B%2FcwUQxBKsyD8DJVzKQWIy8Bu3POdR81jsi5JLgQLfJ5oB%2Fo0uKZnKe388FC05j13NWx%2Bxkz15jccORMW6EMWHWrrSscWLb9oUNc45F9J%2Bs6YI2SwyD1EKDRGXgw%2F5DxpPxnDnYL6qAPIwxREHWvxGxye1i19KeOtHPif6I9YfOtAFnExCrUo0kWkq0jrdU9HDErMKi%2FdUngiocvM%2Bka3RESGLyfQLSrE858fVpGQxd6WYYcLmGatnjrkqS8CgCJCU630eamJwbYXw2iBNV4WUzMHFuCOI1LQBhNkM2iil%2Fx6R2C4sCtkMIl46D6%2BN4DKpN8%2F3yitWQx4UPDQ%2BtJy1Sh35BGCyiWlKUKGKBZaxpVtWWj7C3BFDu4E1r7qdE1QcJGQmb9gVnArCR%2BC%2Bb59AckAPK3jpJ2zFCpFrq0Af8YjOTzJmeMCKo3282Y9hAtTWm1TfH%2FnOFEpodZM55G1mFadrZ4jHRdTL3aBy0U5xmQtoAXV9B65jYV9y6loDQBzE9ZZ2SUoePTSh9zIl4EpIieudzXOgd59nnJ35GZVrVjxI8o5abhOlqGTSzbaHMOmCsr4GOqUBYjhvvB%2FKhNr9P5%2BUQw8tx3esrkDCEDgYAzNPS1MkWHLY0VOdDtB9H0AanrGj8mcFlvY58VZIjpOY6tIFzWrii3fpgi7r4p1anRRl%2B58t3L99a8swCLiS9U%2BNBQzFYuv79sQ6G9v6l3eiH9%2BadDiwEHQKd9H2089tkiMBnFatKnhtSlStuYh153b2GdfPyjKvduqVTX0CsQfwCWmFZ16FxrbxZ1yz&X-Amz-Signature=8ebdbf91856685efe2f639805008114688575fc20deee75c47ec6a481f027fd7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622PCRDEB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIAgwe3h06h%2FLeLvrlCJsP1YB9ftIQhiqk5SiJc%2Fmmn0jAiEA8wAYs7N%2FN6TRr941Iutu0QMBDEB%2F%2Fkr%2FdsIekFa8aGsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJzkVco6cyUZJj2PDSrcAz3Rsy%2BtP5QFwwmk3bWA%2F7nxexv%2Bwh3KFmnRd8HnnFvuaOEYQTA8ZJKjlVNy7R%2B%2FcwUQxBKsyD8DJVzKQWIy8Bu3POdR81jsi5JLgQLfJ5oB%2Fo0uKZnKe388FC05j13NWx%2Bxkz15jccORMW6EMWHWrrSscWLb9oUNc45F9J%2Bs6YI2SwyD1EKDRGXgw%2F5DxpPxnDnYL6qAPIwxREHWvxGxye1i19KeOtHPif6I9YfOtAFnExCrUo0kWkq0jrdU9HDErMKi%2FdUngiocvM%2Bka3RESGLyfQLSrE858fVpGQxd6WYYcLmGatnjrkqS8CgCJCU630eamJwbYXw2iBNV4WUzMHFuCOI1LQBhNkM2iil%2Fx6R2C4sCtkMIl46D6%2BN4DKpN8%2F3yitWQx4UPDQ%2BtJy1Sh35BGCyiWlKUKGKBZaxpVtWWj7C3BFDu4E1r7qdE1QcJGQmb9gVnArCR%2BC%2Bb59AckAPK3jpJ2zFCpFrq0Af8YjOTzJmeMCKo3282Y9hAtTWm1TfH%2FnOFEpodZM55G1mFadrZ4jHRdTL3aBy0U5xmQtoAXV9B65jYV9y6loDQBzE9ZZ2SUoePTSh9zIl4EpIieudzXOgd59nnJ35GZVrVjxI8o5abhOlqGTSzbaHMOmCsr4GOqUBYjhvvB%2FKhNr9P5%2BUQw8tx3esrkDCEDgYAzNPS1MkWHLY0VOdDtB9H0AanrGj8mcFlvY58VZIjpOY6tIFzWrii3fpgi7r4p1anRRl%2B58t3L99a8swCLiS9U%2BNBQzFYuv79sQ6G9v6l3eiH9%2BadDiwEHQKd9H2089tkiMBnFatKnhtSlStuYh153b2GdfPyjKvduqVTX0CsQfwCWmFZ16FxrbxZ1yz&X-Amz-Signature=53ee086d4b5932de6b899214da34e2f1044095ef4cd112292f7bb0b718d38420&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622PCRDEB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIAgwe3h06h%2FLeLvrlCJsP1YB9ftIQhiqk5SiJc%2Fmmn0jAiEA8wAYs7N%2FN6TRr941Iutu0QMBDEB%2F%2Fkr%2FdsIekFa8aGsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJzkVco6cyUZJj2PDSrcAz3Rsy%2BtP5QFwwmk3bWA%2F7nxexv%2Bwh3KFmnRd8HnnFvuaOEYQTA8ZJKjlVNy7R%2B%2FcwUQxBKsyD8DJVzKQWIy8Bu3POdR81jsi5JLgQLfJ5oB%2Fo0uKZnKe388FC05j13NWx%2Bxkz15jccORMW6EMWHWrrSscWLb9oUNc45F9J%2Bs6YI2SwyD1EKDRGXgw%2F5DxpPxnDnYL6qAPIwxREHWvxGxye1i19KeOtHPif6I9YfOtAFnExCrUo0kWkq0jrdU9HDErMKi%2FdUngiocvM%2Bka3RESGLyfQLSrE858fVpGQxd6WYYcLmGatnjrkqS8CgCJCU630eamJwbYXw2iBNV4WUzMHFuCOI1LQBhNkM2iil%2Fx6R2C4sCtkMIl46D6%2BN4DKpN8%2F3yitWQx4UPDQ%2BtJy1Sh35BGCyiWlKUKGKBZaxpVtWWj7C3BFDu4E1r7qdE1QcJGQmb9gVnArCR%2BC%2Bb59AckAPK3jpJ2zFCpFrq0Af8YjOTzJmeMCKo3282Y9hAtTWm1TfH%2FnOFEpodZM55G1mFadrZ4jHRdTL3aBy0U5xmQtoAXV9B65jYV9y6loDQBzE9ZZ2SUoePTSh9zIl4EpIieudzXOgd59nnJ35GZVrVjxI8o5abhOlqGTSzbaHMOmCsr4GOqUBYjhvvB%2FKhNr9P5%2BUQw8tx3esrkDCEDgYAzNPS1MkWHLY0VOdDtB9H0AanrGj8mcFlvY58VZIjpOY6tIFzWrii3fpgi7r4p1anRRl%2B58t3L99a8swCLiS9U%2BNBQzFYuv79sQ6G9v6l3eiH9%2BadDiwEHQKd9H2089tkiMBnFatKnhtSlStuYh153b2GdfPyjKvduqVTX0CsQfwCWmFZ16FxrbxZ1yz&X-Amz-Signature=44d5386653f5db17b1a9db50ebf55d955ae5414f1061331f95cc5ccfa3042433&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622PCRDEB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIAgwe3h06h%2FLeLvrlCJsP1YB9ftIQhiqk5SiJc%2Fmmn0jAiEA8wAYs7N%2FN6TRr941Iutu0QMBDEB%2F%2Fkr%2FdsIekFa8aGsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJzkVco6cyUZJj2PDSrcAz3Rsy%2BtP5QFwwmk3bWA%2F7nxexv%2Bwh3KFmnRd8HnnFvuaOEYQTA8ZJKjlVNy7R%2B%2FcwUQxBKsyD8DJVzKQWIy8Bu3POdR81jsi5JLgQLfJ5oB%2Fo0uKZnKe388FC05j13NWx%2Bxkz15jccORMW6EMWHWrrSscWLb9oUNc45F9J%2Bs6YI2SwyD1EKDRGXgw%2F5DxpPxnDnYL6qAPIwxREHWvxGxye1i19KeOtHPif6I9YfOtAFnExCrUo0kWkq0jrdU9HDErMKi%2FdUngiocvM%2Bka3RESGLyfQLSrE858fVpGQxd6WYYcLmGatnjrkqS8CgCJCU630eamJwbYXw2iBNV4WUzMHFuCOI1LQBhNkM2iil%2Fx6R2C4sCtkMIl46D6%2BN4DKpN8%2F3yitWQx4UPDQ%2BtJy1Sh35BGCyiWlKUKGKBZaxpVtWWj7C3BFDu4E1r7qdE1QcJGQmb9gVnArCR%2BC%2Bb59AckAPK3jpJ2zFCpFrq0Af8YjOTzJmeMCKo3282Y9hAtTWm1TfH%2FnOFEpodZM55G1mFadrZ4jHRdTL3aBy0U5xmQtoAXV9B65jYV9y6loDQBzE9ZZ2SUoePTSh9zIl4EpIieudzXOgd59nnJ35GZVrVjxI8o5abhOlqGTSzbaHMOmCsr4GOqUBYjhvvB%2FKhNr9P5%2BUQw8tx3esrkDCEDgYAzNPS1MkWHLY0VOdDtB9H0AanrGj8mcFlvY58VZIjpOY6tIFzWrii3fpgi7r4p1anRRl%2B58t3L99a8swCLiS9U%2BNBQzFYuv79sQ6G9v6l3eiH9%2BadDiwEHQKd9H2089tkiMBnFatKnhtSlStuYh153b2GdfPyjKvduqVTX0CsQfwCWmFZ16FxrbxZ1yz&X-Amz-Signature=01402c1136aa7e700c92882cf4ce44f8cf2f34a9f45f349c13bf859e4c876720&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
