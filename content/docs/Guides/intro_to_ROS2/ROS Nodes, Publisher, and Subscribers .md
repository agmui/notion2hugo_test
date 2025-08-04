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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLXTVIZD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDxLaEpo%2B%2Bm7HjW2fA8pz19KPx2PvBQH%2FzmiTBKS9Sx4wIhAOP4Gi80TSXKYeMH7JagxjHt9rMlP9ZZAKZFlPf599ehKv8DCEoQABoMNjM3NDIzMTgzODA1IgxvGdcYUODcmsM32aQq3ANEi7Gx5DDhPdUe0YDLO8VcPPvORa%2FEZYN5S%2FbX91CWYjUP%2BKnKzzFcJ0cQJwSP8uNI0qdF%2BAVcHsYG%2F717OVtcU5rB3TB%2BNynP%2BxuOCs1Hv1vpix4zphMIdwRLUUtBntKhcutsdiDcsx%2B%2BV2rdnnbSuJGdkcNo%2FQOxNzWuFxtdP9TYbX21r%2FYb8KaBVg3WijG611xZhNYloAYqkbJ%2BPVA6%2BRbS0CrbpY90vq%2F1b4rjTuaHJKN5Dv3SNxx%2FWuNzOWd5%2B4Gd979K8ctZ84VDBz5E8G6Oz1E%2BfXmQ6EEZYdi4k1yr1Vx6iR4w%2FfTjlfhSFGfyKIpEVwH9LI72yZhiLogxuqAMbQj3O62W0BjXCn3j%2Bh5WmQlmSpAypkTEyJbH3AwFA%2FJXICoXoT%2BE27%2FWJgYaZ0GxVsZl%2FGSMuy3KqDm3A3C6JA5U2r5txwK5BLe2WANwl7%2BDGJrFbWOhYYxan7QJi3eq%2BPadNCzZb0TyUmGwoI%2B2oSngbJOj02Eg1KCZI8ko0r%2BRBtLV40aEhBJdzjzVPwzNacBWsVg37gYomG6DQP1jy6kAwByIqGYgMIYx%2BE7KqOqzrPEqjAOuHgkoUr3ylpjCLmRtHMtogAiqEctXecfkrZ3bdI0PKJ%2BcOzDUzsPEBjqkAS7ObIAE20RH3DV34j1K2kq0OnQzOsFPyM%2B6eepx4dRiGXr%2F4Nn5VuovYoX8U6C7HmFNRgt7qlUsAPW%2BS0mzIQoelCF4miYhwd4Sew%2FeT99RT28JTCY3cMmCYbtHsSpUNeEyIpu4rAku4vUkpb0hhl4gCI87OwMzPNHt2v709OQ3SSQ8MVBmL0RyIwvgzXhXKBB96zM4UzcLS2atH8X1EF%2BdZ1Bv&X-Amz-Signature=dbd346ae161603f4aac8afe4782a647b19d0d18d9a839355d75cd18ac0a172c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLXTVIZD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDxLaEpo%2B%2Bm7HjW2fA8pz19KPx2PvBQH%2FzmiTBKS9Sx4wIhAOP4Gi80TSXKYeMH7JagxjHt9rMlP9ZZAKZFlPf599ehKv8DCEoQABoMNjM3NDIzMTgzODA1IgxvGdcYUODcmsM32aQq3ANEi7Gx5DDhPdUe0YDLO8VcPPvORa%2FEZYN5S%2FbX91CWYjUP%2BKnKzzFcJ0cQJwSP8uNI0qdF%2BAVcHsYG%2F717OVtcU5rB3TB%2BNynP%2BxuOCs1Hv1vpix4zphMIdwRLUUtBntKhcutsdiDcsx%2B%2BV2rdnnbSuJGdkcNo%2FQOxNzWuFxtdP9TYbX21r%2FYb8KaBVg3WijG611xZhNYloAYqkbJ%2BPVA6%2BRbS0CrbpY90vq%2F1b4rjTuaHJKN5Dv3SNxx%2FWuNzOWd5%2B4Gd979K8ctZ84VDBz5E8G6Oz1E%2BfXmQ6EEZYdi4k1yr1Vx6iR4w%2FfTjlfhSFGfyKIpEVwH9LI72yZhiLogxuqAMbQj3O62W0BjXCn3j%2Bh5WmQlmSpAypkTEyJbH3AwFA%2FJXICoXoT%2BE27%2FWJgYaZ0GxVsZl%2FGSMuy3KqDm3A3C6JA5U2r5txwK5BLe2WANwl7%2BDGJrFbWOhYYxan7QJi3eq%2BPadNCzZb0TyUmGwoI%2B2oSngbJOj02Eg1KCZI8ko0r%2BRBtLV40aEhBJdzjzVPwzNacBWsVg37gYomG6DQP1jy6kAwByIqGYgMIYx%2BE7KqOqzrPEqjAOuHgkoUr3ylpjCLmRtHMtogAiqEctXecfkrZ3bdI0PKJ%2BcOzDUzsPEBjqkAS7ObIAE20RH3DV34j1K2kq0OnQzOsFPyM%2B6eepx4dRiGXr%2F4Nn5VuovYoX8U6C7HmFNRgt7qlUsAPW%2BS0mzIQoelCF4miYhwd4Sew%2FeT99RT28JTCY3cMmCYbtHsSpUNeEyIpu4rAku4vUkpb0hhl4gCI87OwMzPNHt2v709OQ3SSQ8MVBmL0RyIwvgzXhXKBB96zM4UzcLS2atH8X1EF%2BdZ1Bv&X-Amz-Signature=e4da2fe7c755560063d52726315e8e9ecc8271c0d87adabfdf947c0d5ed566cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLXTVIZD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDxLaEpo%2B%2Bm7HjW2fA8pz19KPx2PvBQH%2FzmiTBKS9Sx4wIhAOP4Gi80TSXKYeMH7JagxjHt9rMlP9ZZAKZFlPf599ehKv8DCEoQABoMNjM3NDIzMTgzODA1IgxvGdcYUODcmsM32aQq3ANEi7Gx5DDhPdUe0YDLO8VcPPvORa%2FEZYN5S%2FbX91CWYjUP%2BKnKzzFcJ0cQJwSP8uNI0qdF%2BAVcHsYG%2F717OVtcU5rB3TB%2BNynP%2BxuOCs1Hv1vpix4zphMIdwRLUUtBntKhcutsdiDcsx%2B%2BV2rdnnbSuJGdkcNo%2FQOxNzWuFxtdP9TYbX21r%2FYb8KaBVg3WijG611xZhNYloAYqkbJ%2BPVA6%2BRbS0CrbpY90vq%2F1b4rjTuaHJKN5Dv3SNxx%2FWuNzOWd5%2B4Gd979K8ctZ84VDBz5E8G6Oz1E%2BfXmQ6EEZYdi4k1yr1Vx6iR4w%2FfTjlfhSFGfyKIpEVwH9LI72yZhiLogxuqAMbQj3O62W0BjXCn3j%2Bh5WmQlmSpAypkTEyJbH3AwFA%2FJXICoXoT%2BE27%2FWJgYaZ0GxVsZl%2FGSMuy3KqDm3A3C6JA5U2r5txwK5BLe2WANwl7%2BDGJrFbWOhYYxan7QJi3eq%2BPadNCzZb0TyUmGwoI%2B2oSngbJOj02Eg1KCZI8ko0r%2BRBtLV40aEhBJdzjzVPwzNacBWsVg37gYomG6DQP1jy6kAwByIqGYgMIYx%2BE7KqOqzrPEqjAOuHgkoUr3ylpjCLmRtHMtogAiqEctXecfkrZ3bdI0PKJ%2BcOzDUzsPEBjqkAS7ObIAE20RH3DV34j1K2kq0OnQzOsFPyM%2B6eepx4dRiGXr%2F4Nn5VuovYoX8U6C7HmFNRgt7qlUsAPW%2BS0mzIQoelCF4miYhwd4Sew%2FeT99RT28JTCY3cMmCYbtHsSpUNeEyIpu4rAku4vUkpb0hhl4gCI87OwMzPNHt2v709OQ3SSQ8MVBmL0RyIwvgzXhXKBB96zM4UzcLS2atH8X1EF%2BdZ1Bv&X-Amz-Signature=9f7d53b8bb78611ee23809c6949a6870f7ed8171b80c7c41f8a85acbacd6c892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLXTVIZD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDxLaEpo%2B%2Bm7HjW2fA8pz19KPx2PvBQH%2FzmiTBKS9Sx4wIhAOP4Gi80TSXKYeMH7JagxjHt9rMlP9ZZAKZFlPf599ehKv8DCEoQABoMNjM3NDIzMTgzODA1IgxvGdcYUODcmsM32aQq3ANEi7Gx5DDhPdUe0YDLO8VcPPvORa%2FEZYN5S%2FbX91CWYjUP%2BKnKzzFcJ0cQJwSP8uNI0qdF%2BAVcHsYG%2F717OVtcU5rB3TB%2BNynP%2BxuOCs1Hv1vpix4zphMIdwRLUUtBntKhcutsdiDcsx%2B%2BV2rdnnbSuJGdkcNo%2FQOxNzWuFxtdP9TYbX21r%2FYb8KaBVg3WijG611xZhNYloAYqkbJ%2BPVA6%2BRbS0CrbpY90vq%2F1b4rjTuaHJKN5Dv3SNxx%2FWuNzOWd5%2B4Gd979K8ctZ84VDBz5E8G6Oz1E%2BfXmQ6EEZYdi4k1yr1Vx6iR4w%2FfTjlfhSFGfyKIpEVwH9LI72yZhiLogxuqAMbQj3O62W0BjXCn3j%2Bh5WmQlmSpAypkTEyJbH3AwFA%2FJXICoXoT%2BE27%2FWJgYaZ0GxVsZl%2FGSMuy3KqDm3A3C6JA5U2r5txwK5BLe2WANwl7%2BDGJrFbWOhYYxan7QJi3eq%2BPadNCzZb0TyUmGwoI%2B2oSngbJOj02Eg1KCZI8ko0r%2BRBtLV40aEhBJdzjzVPwzNacBWsVg37gYomG6DQP1jy6kAwByIqGYgMIYx%2BE7KqOqzrPEqjAOuHgkoUr3ylpjCLmRtHMtogAiqEctXecfkrZ3bdI0PKJ%2BcOzDUzsPEBjqkAS7ObIAE20RH3DV34j1K2kq0OnQzOsFPyM%2B6eepx4dRiGXr%2F4Nn5VuovYoX8U6C7HmFNRgt7qlUsAPW%2BS0mzIQoelCF4miYhwd4Sew%2FeT99RT28JTCY3cMmCYbtHsSpUNeEyIpu4rAku4vUkpb0hhl4gCI87OwMzPNHt2v709OQ3SSQ8MVBmL0RyIwvgzXhXKBB96zM4UzcLS2atH8X1EF%2BdZ1Bv&X-Amz-Signature=11dd42d05246d2811977121c8e39dea01d33bbea0ede5ae90dc9c9e0dae048cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLXTVIZD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDxLaEpo%2B%2Bm7HjW2fA8pz19KPx2PvBQH%2FzmiTBKS9Sx4wIhAOP4Gi80TSXKYeMH7JagxjHt9rMlP9ZZAKZFlPf599ehKv8DCEoQABoMNjM3NDIzMTgzODA1IgxvGdcYUODcmsM32aQq3ANEi7Gx5DDhPdUe0YDLO8VcPPvORa%2FEZYN5S%2FbX91CWYjUP%2BKnKzzFcJ0cQJwSP8uNI0qdF%2BAVcHsYG%2F717OVtcU5rB3TB%2BNynP%2BxuOCs1Hv1vpix4zphMIdwRLUUtBntKhcutsdiDcsx%2B%2BV2rdnnbSuJGdkcNo%2FQOxNzWuFxtdP9TYbX21r%2FYb8KaBVg3WijG611xZhNYloAYqkbJ%2BPVA6%2BRbS0CrbpY90vq%2F1b4rjTuaHJKN5Dv3SNxx%2FWuNzOWd5%2B4Gd979K8ctZ84VDBz5E8G6Oz1E%2BfXmQ6EEZYdi4k1yr1Vx6iR4w%2FfTjlfhSFGfyKIpEVwH9LI72yZhiLogxuqAMbQj3O62W0BjXCn3j%2Bh5WmQlmSpAypkTEyJbH3AwFA%2FJXICoXoT%2BE27%2FWJgYaZ0GxVsZl%2FGSMuy3KqDm3A3C6JA5U2r5txwK5BLe2WANwl7%2BDGJrFbWOhYYxan7QJi3eq%2BPadNCzZb0TyUmGwoI%2B2oSngbJOj02Eg1KCZI8ko0r%2BRBtLV40aEhBJdzjzVPwzNacBWsVg37gYomG6DQP1jy6kAwByIqGYgMIYx%2BE7KqOqzrPEqjAOuHgkoUr3ylpjCLmRtHMtogAiqEctXecfkrZ3bdI0PKJ%2BcOzDUzsPEBjqkAS7ObIAE20RH3DV34j1K2kq0OnQzOsFPyM%2B6eepx4dRiGXr%2F4Nn5VuovYoX8U6C7HmFNRgt7qlUsAPW%2BS0mzIQoelCF4miYhwd4Sew%2FeT99RT28JTCY3cMmCYbtHsSpUNeEyIpu4rAku4vUkpb0hhl4gCI87OwMzPNHt2v709OQ3SSQ8MVBmL0RyIwvgzXhXKBB96zM4UzcLS2atH8X1EF%2BdZ1Bv&X-Amz-Signature=f93e3dea79c982803b2cd770da458ce4325e15f9a7ca4696a9dd709a351408b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLXTVIZD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDxLaEpo%2B%2Bm7HjW2fA8pz19KPx2PvBQH%2FzmiTBKS9Sx4wIhAOP4Gi80TSXKYeMH7JagxjHt9rMlP9ZZAKZFlPf599ehKv8DCEoQABoMNjM3NDIzMTgzODA1IgxvGdcYUODcmsM32aQq3ANEi7Gx5DDhPdUe0YDLO8VcPPvORa%2FEZYN5S%2FbX91CWYjUP%2BKnKzzFcJ0cQJwSP8uNI0qdF%2BAVcHsYG%2F717OVtcU5rB3TB%2BNynP%2BxuOCs1Hv1vpix4zphMIdwRLUUtBntKhcutsdiDcsx%2B%2BV2rdnnbSuJGdkcNo%2FQOxNzWuFxtdP9TYbX21r%2FYb8KaBVg3WijG611xZhNYloAYqkbJ%2BPVA6%2BRbS0CrbpY90vq%2F1b4rjTuaHJKN5Dv3SNxx%2FWuNzOWd5%2B4Gd979K8ctZ84VDBz5E8G6Oz1E%2BfXmQ6EEZYdi4k1yr1Vx6iR4w%2FfTjlfhSFGfyKIpEVwH9LI72yZhiLogxuqAMbQj3O62W0BjXCn3j%2Bh5WmQlmSpAypkTEyJbH3AwFA%2FJXICoXoT%2BE27%2FWJgYaZ0GxVsZl%2FGSMuy3KqDm3A3C6JA5U2r5txwK5BLe2WANwl7%2BDGJrFbWOhYYxan7QJi3eq%2BPadNCzZb0TyUmGwoI%2B2oSngbJOj02Eg1KCZI8ko0r%2BRBtLV40aEhBJdzjzVPwzNacBWsVg37gYomG6DQP1jy6kAwByIqGYgMIYx%2BE7KqOqzrPEqjAOuHgkoUr3ylpjCLmRtHMtogAiqEctXecfkrZ3bdI0PKJ%2BcOzDUzsPEBjqkAS7ObIAE20RH3DV34j1K2kq0OnQzOsFPyM%2B6eepx4dRiGXr%2F4Nn5VuovYoX8U6C7HmFNRgt7qlUsAPW%2BS0mzIQoelCF4miYhwd4Sew%2FeT99RT28JTCY3cMmCYbtHsSpUNeEyIpu4rAku4vUkpb0hhl4gCI87OwMzPNHt2v709OQ3SSQ8MVBmL0RyIwvgzXhXKBB96zM4UzcLS2atH8X1EF%2BdZ1Bv&X-Amz-Signature=ac817daf8a085efb8646f9ef77d9acfa7cc0c8e25b95c486b0dd3c181e1fc246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLXTVIZD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDxLaEpo%2B%2Bm7HjW2fA8pz19KPx2PvBQH%2FzmiTBKS9Sx4wIhAOP4Gi80TSXKYeMH7JagxjHt9rMlP9ZZAKZFlPf599ehKv8DCEoQABoMNjM3NDIzMTgzODA1IgxvGdcYUODcmsM32aQq3ANEi7Gx5DDhPdUe0YDLO8VcPPvORa%2FEZYN5S%2FbX91CWYjUP%2BKnKzzFcJ0cQJwSP8uNI0qdF%2BAVcHsYG%2F717OVtcU5rB3TB%2BNynP%2BxuOCs1Hv1vpix4zphMIdwRLUUtBntKhcutsdiDcsx%2B%2BV2rdnnbSuJGdkcNo%2FQOxNzWuFxtdP9TYbX21r%2FYb8KaBVg3WijG611xZhNYloAYqkbJ%2BPVA6%2BRbS0CrbpY90vq%2F1b4rjTuaHJKN5Dv3SNxx%2FWuNzOWd5%2B4Gd979K8ctZ84VDBz5E8G6Oz1E%2BfXmQ6EEZYdi4k1yr1Vx6iR4w%2FfTjlfhSFGfyKIpEVwH9LI72yZhiLogxuqAMbQj3O62W0BjXCn3j%2Bh5WmQlmSpAypkTEyJbH3AwFA%2FJXICoXoT%2BE27%2FWJgYaZ0GxVsZl%2FGSMuy3KqDm3A3C6JA5U2r5txwK5BLe2WANwl7%2BDGJrFbWOhYYxan7QJi3eq%2BPadNCzZb0TyUmGwoI%2B2oSngbJOj02Eg1KCZI8ko0r%2BRBtLV40aEhBJdzjzVPwzNacBWsVg37gYomG6DQP1jy6kAwByIqGYgMIYx%2BE7KqOqzrPEqjAOuHgkoUr3ylpjCLmRtHMtogAiqEctXecfkrZ3bdI0PKJ%2BcOzDUzsPEBjqkAS7ObIAE20RH3DV34j1K2kq0OnQzOsFPyM%2B6eepx4dRiGXr%2F4Nn5VuovYoX8U6C7HmFNRgt7qlUsAPW%2BS0mzIQoelCF4miYhwd4Sew%2FeT99RT28JTCY3cMmCYbtHsSpUNeEyIpu4rAku4vUkpb0hhl4gCI87OwMzPNHt2v709OQ3SSQ8MVBmL0RyIwvgzXhXKBB96zM4UzcLS2atH8X1EF%2BdZ1Bv&X-Amz-Signature=ae20f6b080abf2218b24c2dd8ca4d03dee0eac71b8e4b5259fcba86997520f49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLXTVIZD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDxLaEpo%2B%2Bm7HjW2fA8pz19KPx2PvBQH%2FzmiTBKS9Sx4wIhAOP4Gi80TSXKYeMH7JagxjHt9rMlP9ZZAKZFlPf599ehKv8DCEoQABoMNjM3NDIzMTgzODA1IgxvGdcYUODcmsM32aQq3ANEi7Gx5DDhPdUe0YDLO8VcPPvORa%2FEZYN5S%2FbX91CWYjUP%2BKnKzzFcJ0cQJwSP8uNI0qdF%2BAVcHsYG%2F717OVtcU5rB3TB%2BNynP%2BxuOCs1Hv1vpix4zphMIdwRLUUtBntKhcutsdiDcsx%2B%2BV2rdnnbSuJGdkcNo%2FQOxNzWuFxtdP9TYbX21r%2FYb8KaBVg3WijG611xZhNYloAYqkbJ%2BPVA6%2BRbS0CrbpY90vq%2F1b4rjTuaHJKN5Dv3SNxx%2FWuNzOWd5%2B4Gd979K8ctZ84VDBz5E8G6Oz1E%2BfXmQ6EEZYdi4k1yr1Vx6iR4w%2FfTjlfhSFGfyKIpEVwH9LI72yZhiLogxuqAMbQj3O62W0BjXCn3j%2Bh5WmQlmSpAypkTEyJbH3AwFA%2FJXICoXoT%2BE27%2FWJgYaZ0GxVsZl%2FGSMuy3KqDm3A3C6JA5U2r5txwK5BLe2WANwl7%2BDGJrFbWOhYYxan7QJi3eq%2BPadNCzZb0TyUmGwoI%2B2oSngbJOj02Eg1KCZI8ko0r%2BRBtLV40aEhBJdzjzVPwzNacBWsVg37gYomG6DQP1jy6kAwByIqGYgMIYx%2BE7KqOqzrPEqjAOuHgkoUr3ylpjCLmRtHMtogAiqEctXecfkrZ3bdI0PKJ%2BcOzDUzsPEBjqkAS7ObIAE20RH3DV34j1K2kq0OnQzOsFPyM%2B6eepx4dRiGXr%2F4Nn5VuovYoX8U6C7HmFNRgt7qlUsAPW%2BS0mzIQoelCF4miYhwd4Sew%2FeT99RT28JTCY3cMmCYbtHsSpUNeEyIpu4rAku4vUkpb0hhl4gCI87OwMzPNHt2v709OQ3SSQ8MVBmL0RyIwvgzXhXKBB96zM4UzcLS2atH8X1EF%2BdZ1Bv&X-Amz-Signature=96241e96969510cb608971b56dcdccb8df8b9ea5d562f521f5774a5c49d15e4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
