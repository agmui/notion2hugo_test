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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NLWXV6Z%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHnR9V9mlG6iutXcAr3kGAa9zzyTGfqOLIHYxR4KigbDAiEArD58ILgNRADfg7dMYTMOKy5YWa%2BQAFxcRHGSNBaLecYqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5HJrKpzfwr8OQTUSrcAzaFToUH4AU5VuHe8oZcejRZA7viL56xSW%2FQpiYMokEtm%2FC7mMnfmSnCxANWUthXo2THdW8FPsq5FmnZ25E8nggvNMpL9kpOHGIgt6F1ni1v%2BxpaQdWuZYvJkDwUSNNome20GgIP9WQgFhuBcRSmepV1A2CPbB1HoYFLvGiAoHy6Xnlgor5w9b3ZFZc46L9OlfygBwkGA%2BgHs%2BdBKp%2F03DHtrVy9H5CQgCMCLC2dAxXj5sg9Uk285Edsw65ADS6spODD9f3%2F3Od%2FqxKt08x9Fg0MaHC473VRN8HnuXQvONSQlIoBacX49GQ9zykeKwNKZyloqGBeRl5w72tReEsYsPMs7DqNo8nzXgd3tSus1ywGvlMDsWaBsaP3K9dfAwuLOVk%2FHMCMJLYfzY3QlZ3chpzTEAfytLRtYhYZ2QywFhrtVyuqDLQGbyp5I6Nv13acsMIjjx%2BixmGPgmXQ3TL9pEgR3RFPq0%2By55Q8kaNKzVePg7Kib%2F3lKmSISgMSK6UIP%2FhDOjIMPOm7%2FUKTibEJeu0lMf1EdQZeU8Z1sCIJ8kxFgbNpRUUQ4thK%2FSGO3KyPaaS2dm4OXXKVWGT4qX5UQGOkDcXQDiJfhN2uQcwVqYp2S0cF8y4gy%2Bbk8EMiMImw8L8GOqUBmHjMUhn51Fv3CbeKI%2FpukbWDHCw3F8Tcmd66%2FyopnVO5jKL64EyBbXOOgm0NQoFtLBv6MRvKDJ6ctok4rqlmkY%2BJsx%2FfVUjjOgF1VKLbGJFLy6XSMuPg77cZoyzVn63%2F4GXph7OXJ1deGnkOb%2BwexDrB0uD1ZHmreSxOKVPGlWEJWCQqeZGToMAbe6%2F%2FiIkF91%2FEgabbTfNrIhZUMGu8cYRy0L4T&X-Amz-Signature=1f5c2f698b928ac0738300e29409d65cf2fe397c1772ba9a349496b36551da18&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NLWXV6Z%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHnR9V9mlG6iutXcAr3kGAa9zzyTGfqOLIHYxR4KigbDAiEArD58ILgNRADfg7dMYTMOKy5YWa%2BQAFxcRHGSNBaLecYqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5HJrKpzfwr8OQTUSrcAzaFToUH4AU5VuHe8oZcejRZA7viL56xSW%2FQpiYMokEtm%2FC7mMnfmSnCxANWUthXo2THdW8FPsq5FmnZ25E8nggvNMpL9kpOHGIgt6F1ni1v%2BxpaQdWuZYvJkDwUSNNome20GgIP9WQgFhuBcRSmepV1A2CPbB1HoYFLvGiAoHy6Xnlgor5w9b3ZFZc46L9OlfygBwkGA%2BgHs%2BdBKp%2F03DHtrVy9H5CQgCMCLC2dAxXj5sg9Uk285Edsw65ADS6spODD9f3%2F3Od%2FqxKt08x9Fg0MaHC473VRN8HnuXQvONSQlIoBacX49GQ9zykeKwNKZyloqGBeRl5w72tReEsYsPMs7DqNo8nzXgd3tSus1ywGvlMDsWaBsaP3K9dfAwuLOVk%2FHMCMJLYfzY3QlZ3chpzTEAfytLRtYhYZ2QywFhrtVyuqDLQGbyp5I6Nv13acsMIjjx%2BixmGPgmXQ3TL9pEgR3RFPq0%2By55Q8kaNKzVePg7Kib%2F3lKmSISgMSK6UIP%2FhDOjIMPOm7%2FUKTibEJeu0lMf1EdQZeU8Z1sCIJ8kxFgbNpRUUQ4thK%2FSGO3KyPaaS2dm4OXXKVWGT4qX5UQGOkDcXQDiJfhN2uQcwVqYp2S0cF8y4gy%2Bbk8EMiMImw8L8GOqUBmHjMUhn51Fv3CbeKI%2FpukbWDHCw3F8Tcmd66%2FyopnVO5jKL64EyBbXOOgm0NQoFtLBv6MRvKDJ6ctok4rqlmkY%2BJsx%2FfVUjjOgF1VKLbGJFLy6XSMuPg77cZoyzVn63%2F4GXph7OXJ1deGnkOb%2BwexDrB0uD1ZHmreSxOKVPGlWEJWCQqeZGToMAbe6%2F%2FiIkF91%2FEgabbTfNrIhZUMGu8cYRy0L4T&X-Amz-Signature=268cf6576a1db5309a502083c7c48e48cd4e7c578c897f497903ca9cd492c451&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NLWXV6Z%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHnR9V9mlG6iutXcAr3kGAa9zzyTGfqOLIHYxR4KigbDAiEArD58ILgNRADfg7dMYTMOKy5YWa%2BQAFxcRHGSNBaLecYqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5HJrKpzfwr8OQTUSrcAzaFToUH4AU5VuHe8oZcejRZA7viL56xSW%2FQpiYMokEtm%2FC7mMnfmSnCxANWUthXo2THdW8FPsq5FmnZ25E8nggvNMpL9kpOHGIgt6F1ni1v%2BxpaQdWuZYvJkDwUSNNome20GgIP9WQgFhuBcRSmepV1A2CPbB1HoYFLvGiAoHy6Xnlgor5w9b3ZFZc46L9OlfygBwkGA%2BgHs%2BdBKp%2F03DHtrVy9H5CQgCMCLC2dAxXj5sg9Uk285Edsw65ADS6spODD9f3%2F3Od%2FqxKt08x9Fg0MaHC473VRN8HnuXQvONSQlIoBacX49GQ9zykeKwNKZyloqGBeRl5w72tReEsYsPMs7DqNo8nzXgd3tSus1ywGvlMDsWaBsaP3K9dfAwuLOVk%2FHMCMJLYfzY3QlZ3chpzTEAfytLRtYhYZ2QywFhrtVyuqDLQGbyp5I6Nv13acsMIjjx%2BixmGPgmXQ3TL9pEgR3RFPq0%2By55Q8kaNKzVePg7Kib%2F3lKmSISgMSK6UIP%2FhDOjIMPOm7%2FUKTibEJeu0lMf1EdQZeU8Z1sCIJ8kxFgbNpRUUQ4thK%2FSGO3KyPaaS2dm4OXXKVWGT4qX5UQGOkDcXQDiJfhN2uQcwVqYp2S0cF8y4gy%2Bbk8EMiMImw8L8GOqUBmHjMUhn51Fv3CbeKI%2FpukbWDHCw3F8Tcmd66%2FyopnVO5jKL64EyBbXOOgm0NQoFtLBv6MRvKDJ6ctok4rqlmkY%2BJsx%2FfVUjjOgF1VKLbGJFLy6XSMuPg77cZoyzVn63%2F4GXph7OXJ1deGnkOb%2BwexDrB0uD1ZHmreSxOKVPGlWEJWCQqeZGToMAbe6%2F%2FiIkF91%2FEgabbTfNrIhZUMGu8cYRy0L4T&X-Amz-Signature=76dbf760b109ac77264c99b2f8c7fb6e4193050c071099c8ab8fd662c5e01c1f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NLWXV6Z%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHnR9V9mlG6iutXcAr3kGAa9zzyTGfqOLIHYxR4KigbDAiEArD58ILgNRADfg7dMYTMOKy5YWa%2BQAFxcRHGSNBaLecYqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5HJrKpzfwr8OQTUSrcAzaFToUH4AU5VuHe8oZcejRZA7viL56xSW%2FQpiYMokEtm%2FC7mMnfmSnCxANWUthXo2THdW8FPsq5FmnZ25E8nggvNMpL9kpOHGIgt6F1ni1v%2BxpaQdWuZYvJkDwUSNNome20GgIP9WQgFhuBcRSmepV1A2CPbB1HoYFLvGiAoHy6Xnlgor5w9b3ZFZc46L9OlfygBwkGA%2BgHs%2BdBKp%2F03DHtrVy9H5CQgCMCLC2dAxXj5sg9Uk285Edsw65ADS6spODD9f3%2F3Od%2FqxKt08x9Fg0MaHC473VRN8HnuXQvONSQlIoBacX49GQ9zykeKwNKZyloqGBeRl5w72tReEsYsPMs7DqNo8nzXgd3tSus1ywGvlMDsWaBsaP3K9dfAwuLOVk%2FHMCMJLYfzY3QlZ3chpzTEAfytLRtYhYZ2QywFhrtVyuqDLQGbyp5I6Nv13acsMIjjx%2BixmGPgmXQ3TL9pEgR3RFPq0%2By55Q8kaNKzVePg7Kib%2F3lKmSISgMSK6UIP%2FhDOjIMPOm7%2FUKTibEJeu0lMf1EdQZeU8Z1sCIJ8kxFgbNpRUUQ4thK%2FSGO3KyPaaS2dm4OXXKVWGT4qX5UQGOkDcXQDiJfhN2uQcwVqYp2S0cF8y4gy%2Bbk8EMiMImw8L8GOqUBmHjMUhn51Fv3CbeKI%2FpukbWDHCw3F8Tcmd66%2FyopnVO5jKL64EyBbXOOgm0NQoFtLBv6MRvKDJ6ctok4rqlmkY%2BJsx%2FfVUjjOgF1VKLbGJFLy6XSMuPg77cZoyzVn63%2F4GXph7OXJ1deGnkOb%2BwexDrB0uD1ZHmreSxOKVPGlWEJWCQqeZGToMAbe6%2F%2FiIkF91%2FEgabbTfNrIhZUMGu8cYRy0L4T&X-Amz-Signature=63a175ae090a5ac8ed24bbde1885f967d378e73f0493826e475535f5e3c7a962&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NLWXV6Z%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHnR9V9mlG6iutXcAr3kGAa9zzyTGfqOLIHYxR4KigbDAiEArD58ILgNRADfg7dMYTMOKy5YWa%2BQAFxcRHGSNBaLecYqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5HJrKpzfwr8OQTUSrcAzaFToUH4AU5VuHe8oZcejRZA7viL56xSW%2FQpiYMokEtm%2FC7mMnfmSnCxANWUthXo2THdW8FPsq5FmnZ25E8nggvNMpL9kpOHGIgt6F1ni1v%2BxpaQdWuZYvJkDwUSNNome20GgIP9WQgFhuBcRSmepV1A2CPbB1HoYFLvGiAoHy6Xnlgor5w9b3ZFZc46L9OlfygBwkGA%2BgHs%2BdBKp%2F03DHtrVy9H5CQgCMCLC2dAxXj5sg9Uk285Edsw65ADS6spODD9f3%2F3Od%2FqxKt08x9Fg0MaHC473VRN8HnuXQvONSQlIoBacX49GQ9zykeKwNKZyloqGBeRl5w72tReEsYsPMs7DqNo8nzXgd3tSus1ywGvlMDsWaBsaP3K9dfAwuLOVk%2FHMCMJLYfzY3QlZ3chpzTEAfytLRtYhYZ2QywFhrtVyuqDLQGbyp5I6Nv13acsMIjjx%2BixmGPgmXQ3TL9pEgR3RFPq0%2By55Q8kaNKzVePg7Kib%2F3lKmSISgMSK6UIP%2FhDOjIMPOm7%2FUKTibEJeu0lMf1EdQZeU8Z1sCIJ8kxFgbNpRUUQ4thK%2FSGO3KyPaaS2dm4OXXKVWGT4qX5UQGOkDcXQDiJfhN2uQcwVqYp2S0cF8y4gy%2Bbk8EMiMImw8L8GOqUBmHjMUhn51Fv3CbeKI%2FpukbWDHCw3F8Tcmd66%2FyopnVO5jKL64EyBbXOOgm0NQoFtLBv6MRvKDJ6ctok4rqlmkY%2BJsx%2FfVUjjOgF1VKLbGJFLy6XSMuPg77cZoyzVn63%2F4GXph7OXJ1deGnkOb%2BwexDrB0uD1ZHmreSxOKVPGlWEJWCQqeZGToMAbe6%2F%2FiIkF91%2FEgabbTfNrIhZUMGu8cYRy0L4T&X-Amz-Signature=b0ec1222d484105d0fc2c6b9a73bad58d20f65f007a8af69ac75201fbd0fea26&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NLWXV6Z%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHnR9V9mlG6iutXcAr3kGAa9zzyTGfqOLIHYxR4KigbDAiEArD58ILgNRADfg7dMYTMOKy5YWa%2BQAFxcRHGSNBaLecYqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5HJrKpzfwr8OQTUSrcAzaFToUH4AU5VuHe8oZcejRZA7viL56xSW%2FQpiYMokEtm%2FC7mMnfmSnCxANWUthXo2THdW8FPsq5FmnZ25E8nggvNMpL9kpOHGIgt6F1ni1v%2BxpaQdWuZYvJkDwUSNNome20GgIP9WQgFhuBcRSmepV1A2CPbB1HoYFLvGiAoHy6Xnlgor5w9b3ZFZc46L9OlfygBwkGA%2BgHs%2BdBKp%2F03DHtrVy9H5CQgCMCLC2dAxXj5sg9Uk285Edsw65ADS6spODD9f3%2F3Od%2FqxKt08x9Fg0MaHC473VRN8HnuXQvONSQlIoBacX49GQ9zykeKwNKZyloqGBeRl5w72tReEsYsPMs7DqNo8nzXgd3tSus1ywGvlMDsWaBsaP3K9dfAwuLOVk%2FHMCMJLYfzY3QlZ3chpzTEAfytLRtYhYZ2QywFhrtVyuqDLQGbyp5I6Nv13acsMIjjx%2BixmGPgmXQ3TL9pEgR3RFPq0%2By55Q8kaNKzVePg7Kib%2F3lKmSISgMSK6UIP%2FhDOjIMPOm7%2FUKTibEJeu0lMf1EdQZeU8Z1sCIJ8kxFgbNpRUUQ4thK%2FSGO3KyPaaS2dm4OXXKVWGT4qX5UQGOkDcXQDiJfhN2uQcwVqYp2S0cF8y4gy%2Bbk8EMiMImw8L8GOqUBmHjMUhn51Fv3CbeKI%2FpukbWDHCw3F8Tcmd66%2FyopnVO5jKL64EyBbXOOgm0NQoFtLBv6MRvKDJ6ctok4rqlmkY%2BJsx%2FfVUjjOgF1VKLbGJFLy6XSMuPg77cZoyzVn63%2F4GXph7OXJ1deGnkOb%2BwexDrB0uD1ZHmreSxOKVPGlWEJWCQqeZGToMAbe6%2F%2FiIkF91%2FEgabbTfNrIhZUMGu8cYRy0L4T&X-Amz-Signature=639bbeb7d9ea8d27f03cb0fba88c6ae9dc52cf2992cc0ee68ec94f851800c086&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NLWXV6Z%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHnR9V9mlG6iutXcAr3kGAa9zzyTGfqOLIHYxR4KigbDAiEArD58ILgNRADfg7dMYTMOKy5YWa%2BQAFxcRHGSNBaLecYqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5HJrKpzfwr8OQTUSrcAzaFToUH4AU5VuHe8oZcejRZA7viL56xSW%2FQpiYMokEtm%2FC7mMnfmSnCxANWUthXo2THdW8FPsq5FmnZ25E8nggvNMpL9kpOHGIgt6F1ni1v%2BxpaQdWuZYvJkDwUSNNome20GgIP9WQgFhuBcRSmepV1A2CPbB1HoYFLvGiAoHy6Xnlgor5w9b3ZFZc46L9OlfygBwkGA%2BgHs%2BdBKp%2F03DHtrVy9H5CQgCMCLC2dAxXj5sg9Uk285Edsw65ADS6spODD9f3%2F3Od%2FqxKt08x9Fg0MaHC473VRN8HnuXQvONSQlIoBacX49GQ9zykeKwNKZyloqGBeRl5w72tReEsYsPMs7DqNo8nzXgd3tSus1ywGvlMDsWaBsaP3K9dfAwuLOVk%2FHMCMJLYfzY3QlZ3chpzTEAfytLRtYhYZ2QywFhrtVyuqDLQGbyp5I6Nv13acsMIjjx%2BixmGPgmXQ3TL9pEgR3RFPq0%2By55Q8kaNKzVePg7Kib%2F3lKmSISgMSK6UIP%2FhDOjIMPOm7%2FUKTibEJeu0lMf1EdQZeU8Z1sCIJ8kxFgbNpRUUQ4thK%2FSGO3KyPaaS2dm4OXXKVWGT4qX5UQGOkDcXQDiJfhN2uQcwVqYp2S0cF8y4gy%2Bbk8EMiMImw8L8GOqUBmHjMUhn51Fv3CbeKI%2FpukbWDHCw3F8Tcmd66%2FyopnVO5jKL64EyBbXOOgm0NQoFtLBv6MRvKDJ6ctok4rqlmkY%2BJsx%2FfVUjjOgF1VKLbGJFLy6XSMuPg77cZoyzVn63%2F4GXph7OXJ1deGnkOb%2BwexDrB0uD1ZHmreSxOKVPGlWEJWCQqeZGToMAbe6%2F%2FiIkF91%2FEgabbTfNrIhZUMGu8cYRy0L4T&X-Amz-Signature=f022d76bd9b15115fd06093b279f50d093b0e67b8170cd732c4b67741eefa559&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NLWXV6Z%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHnR9V9mlG6iutXcAr3kGAa9zzyTGfqOLIHYxR4KigbDAiEArD58ILgNRADfg7dMYTMOKy5YWa%2BQAFxcRHGSNBaLecYqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5HJrKpzfwr8OQTUSrcAzaFToUH4AU5VuHe8oZcejRZA7viL56xSW%2FQpiYMokEtm%2FC7mMnfmSnCxANWUthXo2THdW8FPsq5FmnZ25E8nggvNMpL9kpOHGIgt6F1ni1v%2BxpaQdWuZYvJkDwUSNNome20GgIP9WQgFhuBcRSmepV1A2CPbB1HoYFLvGiAoHy6Xnlgor5w9b3ZFZc46L9OlfygBwkGA%2BgHs%2BdBKp%2F03DHtrVy9H5CQgCMCLC2dAxXj5sg9Uk285Edsw65ADS6spODD9f3%2F3Od%2FqxKt08x9Fg0MaHC473VRN8HnuXQvONSQlIoBacX49GQ9zykeKwNKZyloqGBeRl5w72tReEsYsPMs7DqNo8nzXgd3tSus1ywGvlMDsWaBsaP3K9dfAwuLOVk%2FHMCMJLYfzY3QlZ3chpzTEAfytLRtYhYZ2QywFhrtVyuqDLQGbyp5I6Nv13acsMIjjx%2BixmGPgmXQ3TL9pEgR3RFPq0%2By55Q8kaNKzVePg7Kib%2F3lKmSISgMSK6UIP%2FhDOjIMPOm7%2FUKTibEJeu0lMf1EdQZeU8Z1sCIJ8kxFgbNpRUUQ4thK%2FSGO3KyPaaS2dm4OXXKVWGT4qX5UQGOkDcXQDiJfhN2uQcwVqYp2S0cF8y4gy%2Bbk8EMiMImw8L8GOqUBmHjMUhn51Fv3CbeKI%2FpukbWDHCw3F8Tcmd66%2FyopnVO5jKL64EyBbXOOgm0NQoFtLBv6MRvKDJ6ctok4rqlmkY%2BJsx%2FfVUjjOgF1VKLbGJFLy6XSMuPg77cZoyzVn63%2F4GXph7OXJ1deGnkOb%2BwexDrB0uD1ZHmreSxOKVPGlWEJWCQqeZGToMAbe6%2F%2FiIkF91%2FEgabbTfNrIhZUMGu8cYRy0L4T&X-Amz-Signature=d80dd811983df0b0d1e1bf427180affbd6315b572db7ee447191d1e79a7c259d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
