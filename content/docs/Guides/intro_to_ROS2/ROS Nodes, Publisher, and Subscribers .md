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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LCDKAPD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKIH%2FqT5Al3IQHg9KJQhaW4f6gFFli8cK6AB4eu9H1mAiEAowchPMMK9mK4TRBii1VNbDCMO5drO6BVB8L16s2xvsIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCY%2F3Yk7ss2cUi3kEyrcA4O6FxhW32rYcEuvYGzuN%2B9XscZkE9vbm1jUSfPnNlWDj8WC3D74ZQ9YwaQp1VRtglEpmxkg%2B88mE7syurwJHIdxB9PnlwjtVcAYPoa4CYqsgoBskbdF%2B2nsfNDrrkO0fAnS2VoJy2po9JtCsqj%2BDzHAmvwkc%2Bqscr3i1CtplNIBbI6ei8wztBqEKMuvEwetF9xz4JXMeWLZJMcY5cEoOba16JAsDP%2Fq9ZKZyOXT7%2By4U3PPO5USvymhZZkaeiYUBqwSwG5KpBqcfGn%2FQfwwCaHk%2Bwx0O3KG%2F97qepk4uO8Ij7Ie2wMBO1OfuLjS4ZkGXQRwjyMdFRdkd8aSDWpfPXYb8iwR%2FxWD5EXSnZCjwGbIky8KDFJdXu%2F53x8IkwXIELbZqVszs2aMcUSIKU%2BZe39BdYTs6MtOWXLhqfIN%2Fhjj0%2Fm04txu2fY5Kjn0kmtE5oL6xoWjr%2FF32c%2FVfvjF7RRGy%2BqkIzwYh9lVICHdZsED6DGvwyGFxdz%2BgvGO%2F7PjEFGNqOYmHx0Y%2FoSmkpvRInKWv5SZgmxN7RMIRGY1b9LKxPDX3LzTUC7LcOF7CPLtPU06tAgTOigRUCpQhm%2FqPU45vP0NcLfw%2F8RUUlqbAKRAXbtiBMXjjWN3tK%2FQMN6z0MIGOqUBqzYBH1%2BkZJZ9PKi4wIcBDpC2AcThf8srjZU0GimyFAkWrVeSc2nd5W4ygaJLvM7%2FoqDbaxLC6rj4xSf8ClkuwSe5Ti0aKG7QPpCUT2iQ3aWZsGptvvRSGqrd010ECZm5GZHQz1s8YWJb55XHZSUaOHyGxMIl2Xdufsu%2Bctu0ec1YskTuMRrPwHe%2FpO6jjOLb7MUxlssvx8xpHlOZUqCsW1oTcovT&X-Amz-Signature=c9fbeac2546c7d07413c44952013c63ffe6495b1e4ecf3bed121fad98abeb50d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LCDKAPD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKIH%2FqT5Al3IQHg9KJQhaW4f6gFFli8cK6AB4eu9H1mAiEAowchPMMK9mK4TRBii1VNbDCMO5drO6BVB8L16s2xvsIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCY%2F3Yk7ss2cUi3kEyrcA4O6FxhW32rYcEuvYGzuN%2B9XscZkE9vbm1jUSfPnNlWDj8WC3D74ZQ9YwaQp1VRtglEpmxkg%2B88mE7syurwJHIdxB9PnlwjtVcAYPoa4CYqsgoBskbdF%2B2nsfNDrrkO0fAnS2VoJy2po9JtCsqj%2BDzHAmvwkc%2Bqscr3i1CtplNIBbI6ei8wztBqEKMuvEwetF9xz4JXMeWLZJMcY5cEoOba16JAsDP%2Fq9ZKZyOXT7%2By4U3PPO5USvymhZZkaeiYUBqwSwG5KpBqcfGn%2FQfwwCaHk%2Bwx0O3KG%2F97qepk4uO8Ij7Ie2wMBO1OfuLjS4ZkGXQRwjyMdFRdkd8aSDWpfPXYb8iwR%2FxWD5EXSnZCjwGbIky8KDFJdXu%2F53x8IkwXIELbZqVszs2aMcUSIKU%2BZe39BdYTs6MtOWXLhqfIN%2Fhjj0%2Fm04txu2fY5Kjn0kmtE5oL6xoWjr%2FF32c%2FVfvjF7RRGy%2BqkIzwYh9lVICHdZsED6DGvwyGFxdz%2BgvGO%2F7PjEFGNqOYmHx0Y%2FoSmkpvRInKWv5SZgmxN7RMIRGY1b9LKxPDX3LzTUC7LcOF7CPLtPU06tAgTOigRUCpQhm%2FqPU45vP0NcLfw%2F8RUUlqbAKRAXbtiBMXjjWN3tK%2FQMN6z0MIGOqUBqzYBH1%2BkZJZ9PKi4wIcBDpC2AcThf8srjZU0GimyFAkWrVeSc2nd5W4ygaJLvM7%2FoqDbaxLC6rj4xSf8ClkuwSe5Ti0aKG7QPpCUT2iQ3aWZsGptvvRSGqrd010ECZm5GZHQz1s8YWJb55XHZSUaOHyGxMIl2Xdufsu%2Bctu0ec1YskTuMRrPwHe%2FpO6jjOLb7MUxlssvx8xpHlOZUqCsW1oTcovT&X-Amz-Signature=b275678abd062f028e759da96101157abe914c5bab6bbe642d6e02ce2907d555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LCDKAPD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKIH%2FqT5Al3IQHg9KJQhaW4f6gFFli8cK6AB4eu9H1mAiEAowchPMMK9mK4TRBii1VNbDCMO5drO6BVB8L16s2xvsIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCY%2F3Yk7ss2cUi3kEyrcA4O6FxhW32rYcEuvYGzuN%2B9XscZkE9vbm1jUSfPnNlWDj8WC3D74ZQ9YwaQp1VRtglEpmxkg%2B88mE7syurwJHIdxB9PnlwjtVcAYPoa4CYqsgoBskbdF%2B2nsfNDrrkO0fAnS2VoJy2po9JtCsqj%2BDzHAmvwkc%2Bqscr3i1CtplNIBbI6ei8wztBqEKMuvEwetF9xz4JXMeWLZJMcY5cEoOba16JAsDP%2Fq9ZKZyOXT7%2By4U3PPO5USvymhZZkaeiYUBqwSwG5KpBqcfGn%2FQfwwCaHk%2Bwx0O3KG%2F97qepk4uO8Ij7Ie2wMBO1OfuLjS4ZkGXQRwjyMdFRdkd8aSDWpfPXYb8iwR%2FxWD5EXSnZCjwGbIky8KDFJdXu%2F53x8IkwXIELbZqVszs2aMcUSIKU%2BZe39BdYTs6MtOWXLhqfIN%2Fhjj0%2Fm04txu2fY5Kjn0kmtE5oL6xoWjr%2FF32c%2FVfvjF7RRGy%2BqkIzwYh9lVICHdZsED6DGvwyGFxdz%2BgvGO%2F7PjEFGNqOYmHx0Y%2FoSmkpvRInKWv5SZgmxN7RMIRGY1b9LKxPDX3LzTUC7LcOF7CPLtPU06tAgTOigRUCpQhm%2FqPU45vP0NcLfw%2F8RUUlqbAKRAXbtiBMXjjWN3tK%2FQMN6z0MIGOqUBqzYBH1%2BkZJZ9PKi4wIcBDpC2AcThf8srjZU0GimyFAkWrVeSc2nd5W4ygaJLvM7%2FoqDbaxLC6rj4xSf8ClkuwSe5Ti0aKG7QPpCUT2iQ3aWZsGptvvRSGqrd010ECZm5GZHQz1s8YWJb55XHZSUaOHyGxMIl2Xdufsu%2Bctu0ec1YskTuMRrPwHe%2FpO6jjOLb7MUxlssvx8xpHlOZUqCsW1oTcovT&X-Amz-Signature=3b8a5d9dcd4f0ec58a5174cfb90c9ba31a6e96b4a61f8056b541e15ed82335fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LCDKAPD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKIH%2FqT5Al3IQHg9KJQhaW4f6gFFli8cK6AB4eu9H1mAiEAowchPMMK9mK4TRBii1VNbDCMO5drO6BVB8L16s2xvsIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCY%2F3Yk7ss2cUi3kEyrcA4O6FxhW32rYcEuvYGzuN%2B9XscZkE9vbm1jUSfPnNlWDj8WC3D74ZQ9YwaQp1VRtglEpmxkg%2B88mE7syurwJHIdxB9PnlwjtVcAYPoa4CYqsgoBskbdF%2B2nsfNDrrkO0fAnS2VoJy2po9JtCsqj%2BDzHAmvwkc%2Bqscr3i1CtplNIBbI6ei8wztBqEKMuvEwetF9xz4JXMeWLZJMcY5cEoOba16JAsDP%2Fq9ZKZyOXT7%2By4U3PPO5USvymhZZkaeiYUBqwSwG5KpBqcfGn%2FQfwwCaHk%2Bwx0O3KG%2F97qepk4uO8Ij7Ie2wMBO1OfuLjS4ZkGXQRwjyMdFRdkd8aSDWpfPXYb8iwR%2FxWD5EXSnZCjwGbIky8KDFJdXu%2F53x8IkwXIELbZqVszs2aMcUSIKU%2BZe39BdYTs6MtOWXLhqfIN%2Fhjj0%2Fm04txu2fY5Kjn0kmtE5oL6xoWjr%2FF32c%2FVfvjF7RRGy%2BqkIzwYh9lVICHdZsED6DGvwyGFxdz%2BgvGO%2F7PjEFGNqOYmHx0Y%2FoSmkpvRInKWv5SZgmxN7RMIRGY1b9LKxPDX3LzTUC7LcOF7CPLtPU06tAgTOigRUCpQhm%2FqPU45vP0NcLfw%2F8RUUlqbAKRAXbtiBMXjjWN3tK%2FQMN6z0MIGOqUBqzYBH1%2BkZJZ9PKi4wIcBDpC2AcThf8srjZU0GimyFAkWrVeSc2nd5W4ygaJLvM7%2FoqDbaxLC6rj4xSf8ClkuwSe5Ti0aKG7QPpCUT2iQ3aWZsGptvvRSGqrd010ECZm5GZHQz1s8YWJb55XHZSUaOHyGxMIl2Xdufsu%2Bctu0ec1YskTuMRrPwHe%2FpO6jjOLb7MUxlssvx8xpHlOZUqCsW1oTcovT&X-Amz-Signature=46142d30a22e0194f78950ba4f75f41b2593e16797131f456615f5aa7d0951de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LCDKAPD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKIH%2FqT5Al3IQHg9KJQhaW4f6gFFli8cK6AB4eu9H1mAiEAowchPMMK9mK4TRBii1VNbDCMO5drO6BVB8L16s2xvsIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCY%2F3Yk7ss2cUi3kEyrcA4O6FxhW32rYcEuvYGzuN%2B9XscZkE9vbm1jUSfPnNlWDj8WC3D74ZQ9YwaQp1VRtglEpmxkg%2B88mE7syurwJHIdxB9PnlwjtVcAYPoa4CYqsgoBskbdF%2B2nsfNDrrkO0fAnS2VoJy2po9JtCsqj%2BDzHAmvwkc%2Bqscr3i1CtplNIBbI6ei8wztBqEKMuvEwetF9xz4JXMeWLZJMcY5cEoOba16JAsDP%2Fq9ZKZyOXT7%2By4U3PPO5USvymhZZkaeiYUBqwSwG5KpBqcfGn%2FQfwwCaHk%2Bwx0O3KG%2F97qepk4uO8Ij7Ie2wMBO1OfuLjS4ZkGXQRwjyMdFRdkd8aSDWpfPXYb8iwR%2FxWD5EXSnZCjwGbIky8KDFJdXu%2F53x8IkwXIELbZqVszs2aMcUSIKU%2BZe39BdYTs6MtOWXLhqfIN%2Fhjj0%2Fm04txu2fY5Kjn0kmtE5oL6xoWjr%2FF32c%2FVfvjF7RRGy%2BqkIzwYh9lVICHdZsED6DGvwyGFxdz%2BgvGO%2F7PjEFGNqOYmHx0Y%2FoSmkpvRInKWv5SZgmxN7RMIRGY1b9LKxPDX3LzTUC7LcOF7CPLtPU06tAgTOigRUCpQhm%2FqPU45vP0NcLfw%2F8RUUlqbAKRAXbtiBMXjjWN3tK%2FQMN6z0MIGOqUBqzYBH1%2BkZJZ9PKi4wIcBDpC2AcThf8srjZU0GimyFAkWrVeSc2nd5W4ygaJLvM7%2FoqDbaxLC6rj4xSf8ClkuwSe5Ti0aKG7QPpCUT2iQ3aWZsGptvvRSGqrd010ECZm5GZHQz1s8YWJb55XHZSUaOHyGxMIl2Xdufsu%2Bctu0ec1YskTuMRrPwHe%2FpO6jjOLb7MUxlssvx8xpHlOZUqCsW1oTcovT&X-Amz-Signature=2b02701612341a002587ab17a88a209942b2378ece2e9e017c3bd41773725558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LCDKAPD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKIH%2FqT5Al3IQHg9KJQhaW4f6gFFli8cK6AB4eu9H1mAiEAowchPMMK9mK4TRBii1VNbDCMO5drO6BVB8L16s2xvsIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCY%2F3Yk7ss2cUi3kEyrcA4O6FxhW32rYcEuvYGzuN%2B9XscZkE9vbm1jUSfPnNlWDj8WC3D74ZQ9YwaQp1VRtglEpmxkg%2B88mE7syurwJHIdxB9PnlwjtVcAYPoa4CYqsgoBskbdF%2B2nsfNDrrkO0fAnS2VoJy2po9JtCsqj%2BDzHAmvwkc%2Bqscr3i1CtplNIBbI6ei8wztBqEKMuvEwetF9xz4JXMeWLZJMcY5cEoOba16JAsDP%2Fq9ZKZyOXT7%2By4U3PPO5USvymhZZkaeiYUBqwSwG5KpBqcfGn%2FQfwwCaHk%2Bwx0O3KG%2F97qepk4uO8Ij7Ie2wMBO1OfuLjS4ZkGXQRwjyMdFRdkd8aSDWpfPXYb8iwR%2FxWD5EXSnZCjwGbIky8KDFJdXu%2F53x8IkwXIELbZqVszs2aMcUSIKU%2BZe39BdYTs6MtOWXLhqfIN%2Fhjj0%2Fm04txu2fY5Kjn0kmtE5oL6xoWjr%2FF32c%2FVfvjF7RRGy%2BqkIzwYh9lVICHdZsED6DGvwyGFxdz%2BgvGO%2F7PjEFGNqOYmHx0Y%2FoSmkpvRInKWv5SZgmxN7RMIRGY1b9LKxPDX3LzTUC7LcOF7CPLtPU06tAgTOigRUCpQhm%2FqPU45vP0NcLfw%2F8RUUlqbAKRAXbtiBMXjjWN3tK%2FQMN6z0MIGOqUBqzYBH1%2BkZJZ9PKi4wIcBDpC2AcThf8srjZU0GimyFAkWrVeSc2nd5W4ygaJLvM7%2FoqDbaxLC6rj4xSf8ClkuwSe5Ti0aKG7QPpCUT2iQ3aWZsGptvvRSGqrd010ECZm5GZHQz1s8YWJb55XHZSUaOHyGxMIl2Xdufsu%2Bctu0ec1YskTuMRrPwHe%2FpO6jjOLb7MUxlssvx8xpHlOZUqCsW1oTcovT&X-Amz-Signature=329bca3766dc1e7a0c5335b436a291ca3c8908266f61330cdf45a16f50f18d5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LCDKAPD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKIH%2FqT5Al3IQHg9KJQhaW4f6gFFli8cK6AB4eu9H1mAiEAowchPMMK9mK4TRBii1VNbDCMO5drO6BVB8L16s2xvsIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCY%2F3Yk7ss2cUi3kEyrcA4O6FxhW32rYcEuvYGzuN%2B9XscZkE9vbm1jUSfPnNlWDj8WC3D74ZQ9YwaQp1VRtglEpmxkg%2B88mE7syurwJHIdxB9PnlwjtVcAYPoa4CYqsgoBskbdF%2B2nsfNDrrkO0fAnS2VoJy2po9JtCsqj%2BDzHAmvwkc%2Bqscr3i1CtplNIBbI6ei8wztBqEKMuvEwetF9xz4JXMeWLZJMcY5cEoOba16JAsDP%2Fq9ZKZyOXT7%2By4U3PPO5USvymhZZkaeiYUBqwSwG5KpBqcfGn%2FQfwwCaHk%2Bwx0O3KG%2F97qepk4uO8Ij7Ie2wMBO1OfuLjS4ZkGXQRwjyMdFRdkd8aSDWpfPXYb8iwR%2FxWD5EXSnZCjwGbIky8KDFJdXu%2F53x8IkwXIELbZqVszs2aMcUSIKU%2BZe39BdYTs6MtOWXLhqfIN%2Fhjj0%2Fm04txu2fY5Kjn0kmtE5oL6xoWjr%2FF32c%2FVfvjF7RRGy%2BqkIzwYh9lVICHdZsED6DGvwyGFxdz%2BgvGO%2F7PjEFGNqOYmHx0Y%2FoSmkpvRInKWv5SZgmxN7RMIRGY1b9LKxPDX3LzTUC7LcOF7CPLtPU06tAgTOigRUCpQhm%2FqPU45vP0NcLfw%2F8RUUlqbAKRAXbtiBMXjjWN3tK%2FQMN6z0MIGOqUBqzYBH1%2BkZJZ9PKi4wIcBDpC2AcThf8srjZU0GimyFAkWrVeSc2nd5W4ygaJLvM7%2FoqDbaxLC6rj4xSf8ClkuwSe5Ti0aKG7QPpCUT2iQ3aWZsGptvvRSGqrd010ECZm5GZHQz1s8YWJb55XHZSUaOHyGxMIl2Xdufsu%2Bctu0ec1YskTuMRrPwHe%2FpO6jjOLb7MUxlssvx8xpHlOZUqCsW1oTcovT&X-Amz-Signature=6c2ebcf0d5dc0e11b994d9f5f081ac1c3bc5b1bc3886f0853f4031ed33c18879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LCDKAPD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKIH%2FqT5Al3IQHg9KJQhaW4f6gFFli8cK6AB4eu9H1mAiEAowchPMMK9mK4TRBii1VNbDCMO5drO6BVB8L16s2xvsIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCY%2F3Yk7ss2cUi3kEyrcA4O6FxhW32rYcEuvYGzuN%2B9XscZkE9vbm1jUSfPnNlWDj8WC3D74ZQ9YwaQp1VRtglEpmxkg%2B88mE7syurwJHIdxB9PnlwjtVcAYPoa4CYqsgoBskbdF%2B2nsfNDrrkO0fAnS2VoJy2po9JtCsqj%2BDzHAmvwkc%2Bqscr3i1CtplNIBbI6ei8wztBqEKMuvEwetF9xz4JXMeWLZJMcY5cEoOba16JAsDP%2Fq9ZKZyOXT7%2By4U3PPO5USvymhZZkaeiYUBqwSwG5KpBqcfGn%2FQfwwCaHk%2Bwx0O3KG%2F97qepk4uO8Ij7Ie2wMBO1OfuLjS4ZkGXQRwjyMdFRdkd8aSDWpfPXYb8iwR%2FxWD5EXSnZCjwGbIky8KDFJdXu%2F53x8IkwXIELbZqVszs2aMcUSIKU%2BZe39BdYTs6MtOWXLhqfIN%2Fhjj0%2Fm04txu2fY5Kjn0kmtE5oL6xoWjr%2FF32c%2FVfvjF7RRGy%2BqkIzwYh9lVICHdZsED6DGvwyGFxdz%2BgvGO%2F7PjEFGNqOYmHx0Y%2FoSmkpvRInKWv5SZgmxN7RMIRGY1b9LKxPDX3LzTUC7LcOF7CPLtPU06tAgTOigRUCpQhm%2FqPU45vP0NcLfw%2F8RUUlqbAKRAXbtiBMXjjWN3tK%2FQMN6z0MIGOqUBqzYBH1%2BkZJZ9PKi4wIcBDpC2AcThf8srjZU0GimyFAkWrVeSc2nd5W4ygaJLvM7%2FoqDbaxLC6rj4xSf8ClkuwSe5Ti0aKG7QPpCUT2iQ3aWZsGptvvRSGqrd010ECZm5GZHQz1s8YWJb55XHZSUaOHyGxMIl2Xdufsu%2Bctu0ec1YskTuMRrPwHe%2FpO6jjOLb7MUxlssvx8xpHlOZUqCsW1oTcovT&X-Amz-Signature=fbc42b200e71df5232025c4de290ce069401de948fd50b154b42643328b68e63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
