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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6RME6OS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHCZEZ7I1G2YoFdW7i13SYKmAhY1b47jTFwd21dPjshfAiBYOI3kzWtMnmpg1R1SU3sv7Fon4p7Ds50OpBmYULrzlCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMF81ZS51qAHX6pk0JKtwDs3UAeB%2BorziINmKKvb1FCwVCB8MVMC9eQwXtwHsBcHiYCRQy0UOotdRIrymd5s3T1YhuYLX4N9G2PhNgxC5TX0yjketUiEhwSowmxdrYNd17W2NDAAnOMZWZZn3pxdx2Ogf693BrG0UqAJPhzsekM5qCuHCszr4%2BjEeB3W0J5vowo9FMt9bP21rEyHFMCfpcpuVFuQSw1peDRAr5Bu%2BqKX5O7HRx5s6VTQDeWSkThw9OqVhgVBizqKZBS7Kv90w2iuM%2Bl97JnVQFe%2Fk1pz0G3r4pDufAda%2FV%2FtII7oQ0LDOVBre%2BJuk6bQD3rTfEkLDdB2b5D2k7b7MVgJsxxaV7vW642ljee7CModa0Fibhao%2BOA1e66JRHnj7dggkq1aR2FiStUiaCuKq93bHwHnpYOwPb%2BHfKzYPVjEc2WDKBfKzAvwV%2BfX7zGkKt2G%2FJ39tRxGml%2B%2FOtA3tvnlD%2FqtYdwFLS1IJHXBK5%2FSOO%2F%2Bg1S6Y4Z53Ieby0%2FNBBhnjPKTgPE7aTVauGDWdl%2Fowt%2FMhtglWpWvs84EAa4wYPEZcK811zlsYgcryE2VyV8jGRBvHv7HrMc3GandKJyIDcArDZjGryucWR2Z9MQeT1Z%2FnYkGtEQJorHwrmRgRQ8AswocH0wgY6pgFqMNmTzhw9Uaw3%2FkkeooEm5cYlbEdSpfQfo4xPFFJer8nJp9ygJ7AWvwQaa1jjH3SGIAII9IQPCCFXOYl9FqFlAbHHvaRvt2REX72KGDGl9cP5A54PR%2BCXgYxSFJT9kx9k6g4vs51orBDJ18G3UAopYv5JSXCGn9RonFxs0EhNJGnQMFdnMOhgXw5PXUBObyQ1LvCwyHf2Tu9GN3MXwM7yleHDau%2Fd&X-Amz-Signature=3b7ecba1de3b7a21071ee9eaa1458e0260f1588cf26eba06625144b0e0a1cfaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6RME6OS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHCZEZ7I1G2YoFdW7i13SYKmAhY1b47jTFwd21dPjshfAiBYOI3kzWtMnmpg1R1SU3sv7Fon4p7Ds50OpBmYULrzlCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMF81ZS51qAHX6pk0JKtwDs3UAeB%2BorziINmKKvb1FCwVCB8MVMC9eQwXtwHsBcHiYCRQy0UOotdRIrymd5s3T1YhuYLX4N9G2PhNgxC5TX0yjketUiEhwSowmxdrYNd17W2NDAAnOMZWZZn3pxdx2Ogf693BrG0UqAJPhzsekM5qCuHCszr4%2BjEeB3W0J5vowo9FMt9bP21rEyHFMCfpcpuVFuQSw1peDRAr5Bu%2BqKX5O7HRx5s6VTQDeWSkThw9OqVhgVBizqKZBS7Kv90w2iuM%2Bl97JnVQFe%2Fk1pz0G3r4pDufAda%2FV%2FtII7oQ0LDOVBre%2BJuk6bQD3rTfEkLDdB2b5D2k7b7MVgJsxxaV7vW642ljee7CModa0Fibhao%2BOA1e66JRHnj7dggkq1aR2FiStUiaCuKq93bHwHnpYOwPb%2BHfKzYPVjEc2WDKBfKzAvwV%2BfX7zGkKt2G%2FJ39tRxGml%2B%2FOtA3tvnlD%2FqtYdwFLS1IJHXBK5%2FSOO%2F%2Bg1S6Y4Z53Ieby0%2FNBBhnjPKTgPE7aTVauGDWdl%2Fowt%2FMhtglWpWvs84EAa4wYPEZcK811zlsYgcryE2VyV8jGRBvHv7HrMc3GandKJyIDcArDZjGryucWR2Z9MQeT1Z%2FnYkGtEQJorHwrmRgRQ8AswocH0wgY6pgFqMNmTzhw9Uaw3%2FkkeooEm5cYlbEdSpfQfo4xPFFJer8nJp9ygJ7AWvwQaa1jjH3SGIAII9IQPCCFXOYl9FqFlAbHHvaRvt2REX72KGDGl9cP5A54PR%2BCXgYxSFJT9kx9k6g4vs51orBDJ18G3UAopYv5JSXCGn9RonFxs0EhNJGnQMFdnMOhgXw5PXUBObyQ1LvCwyHf2Tu9GN3MXwM7yleHDau%2Fd&X-Amz-Signature=6c7106137408d2f66b148997c5fdadf20c90d27b57ef609fbfb14355686b43da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6RME6OS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHCZEZ7I1G2YoFdW7i13SYKmAhY1b47jTFwd21dPjshfAiBYOI3kzWtMnmpg1R1SU3sv7Fon4p7Ds50OpBmYULrzlCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMF81ZS51qAHX6pk0JKtwDs3UAeB%2BorziINmKKvb1FCwVCB8MVMC9eQwXtwHsBcHiYCRQy0UOotdRIrymd5s3T1YhuYLX4N9G2PhNgxC5TX0yjketUiEhwSowmxdrYNd17W2NDAAnOMZWZZn3pxdx2Ogf693BrG0UqAJPhzsekM5qCuHCszr4%2BjEeB3W0J5vowo9FMt9bP21rEyHFMCfpcpuVFuQSw1peDRAr5Bu%2BqKX5O7HRx5s6VTQDeWSkThw9OqVhgVBizqKZBS7Kv90w2iuM%2Bl97JnVQFe%2Fk1pz0G3r4pDufAda%2FV%2FtII7oQ0LDOVBre%2BJuk6bQD3rTfEkLDdB2b5D2k7b7MVgJsxxaV7vW642ljee7CModa0Fibhao%2BOA1e66JRHnj7dggkq1aR2FiStUiaCuKq93bHwHnpYOwPb%2BHfKzYPVjEc2WDKBfKzAvwV%2BfX7zGkKt2G%2FJ39tRxGml%2B%2FOtA3tvnlD%2FqtYdwFLS1IJHXBK5%2FSOO%2F%2Bg1S6Y4Z53Ieby0%2FNBBhnjPKTgPE7aTVauGDWdl%2Fowt%2FMhtglWpWvs84EAa4wYPEZcK811zlsYgcryE2VyV8jGRBvHv7HrMc3GandKJyIDcArDZjGryucWR2Z9MQeT1Z%2FnYkGtEQJorHwrmRgRQ8AswocH0wgY6pgFqMNmTzhw9Uaw3%2FkkeooEm5cYlbEdSpfQfo4xPFFJer8nJp9ygJ7AWvwQaa1jjH3SGIAII9IQPCCFXOYl9FqFlAbHHvaRvt2REX72KGDGl9cP5A54PR%2BCXgYxSFJT9kx9k6g4vs51orBDJ18G3UAopYv5JSXCGn9RonFxs0EhNJGnQMFdnMOhgXw5PXUBObyQ1LvCwyHf2Tu9GN3MXwM7yleHDau%2Fd&X-Amz-Signature=813396a3d330da60fe0cea74812c42c72c32c1e85bebc8d865d989e45af405f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6RME6OS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHCZEZ7I1G2YoFdW7i13SYKmAhY1b47jTFwd21dPjshfAiBYOI3kzWtMnmpg1R1SU3sv7Fon4p7Ds50OpBmYULrzlCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMF81ZS51qAHX6pk0JKtwDs3UAeB%2BorziINmKKvb1FCwVCB8MVMC9eQwXtwHsBcHiYCRQy0UOotdRIrymd5s3T1YhuYLX4N9G2PhNgxC5TX0yjketUiEhwSowmxdrYNd17W2NDAAnOMZWZZn3pxdx2Ogf693BrG0UqAJPhzsekM5qCuHCszr4%2BjEeB3W0J5vowo9FMt9bP21rEyHFMCfpcpuVFuQSw1peDRAr5Bu%2BqKX5O7HRx5s6VTQDeWSkThw9OqVhgVBizqKZBS7Kv90w2iuM%2Bl97JnVQFe%2Fk1pz0G3r4pDufAda%2FV%2FtII7oQ0LDOVBre%2BJuk6bQD3rTfEkLDdB2b5D2k7b7MVgJsxxaV7vW642ljee7CModa0Fibhao%2BOA1e66JRHnj7dggkq1aR2FiStUiaCuKq93bHwHnpYOwPb%2BHfKzYPVjEc2WDKBfKzAvwV%2BfX7zGkKt2G%2FJ39tRxGml%2B%2FOtA3tvnlD%2FqtYdwFLS1IJHXBK5%2FSOO%2F%2Bg1S6Y4Z53Ieby0%2FNBBhnjPKTgPE7aTVauGDWdl%2Fowt%2FMhtglWpWvs84EAa4wYPEZcK811zlsYgcryE2VyV8jGRBvHv7HrMc3GandKJyIDcArDZjGryucWR2Z9MQeT1Z%2FnYkGtEQJorHwrmRgRQ8AswocH0wgY6pgFqMNmTzhw9Uaw3%2FkkeooEm5cYlbEdSpfQfo4xPFFJer8nJp9ygJ7AWvwQaa1jjH3SGIAII9IQPCCFXOYl9FqFlAbHHvaRvt2REX72KGDGl9cP5A54PR%2BCXgYxSFJT9kx9k6g4vs51orBDJ18G3UAopYv5JSXCGn9RonFxs0EhNJGnQMFdnMOhgXw5PXUBObyQ1LvCwyHf2Tu9GN3MXwM7yleHDau%2Fd&X-Amz-Signature=e4aae8bc3a496cf277d89f9341298af5b50e711bea04a0899c23f23d701abd89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6RME6OS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHCZEZ7I1G2YoFdW7i13SYKmAhY1b47jTFwd21dPjshfAiBYOI3kzWtMnmpg1R1SU3sv7Fon4p7Ds50OpBmYULrzlCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMF81ZS51qAHX6pk0JKtwDs3UAeB%2BorziINmKKvb1FCwVCB8MVMC9eQwXtwHsBcHiYCRQy0UOotdRIrymd5s3T1YhuYLX4N9G2PhNgxC5TX0yjketUiEhwSowmxdrYNd17W2NDAAnOMZWZZn3pxdx2Ogf693BrG0UqAJPhzsekM5qCuHCszr4%2BjEeB3W0J5vowo9FMt9bP21rEyHFMCfpcpuVFuQSw1peDRAr5Bu%2BqKX5O7HRx5s6VTQDeWSkThw9OqVhgVBizqKZBS7Kv90w2iuM%2Bl97JnVQFe%2Fk1pz0G3r4pDufAda%2FV%2FtII7oQ0LDOVBre%2BJuk6bQD3rTfEkLDdB2b5D2k7b7MVgJsxxaV7vW642ljee7CModa0Fibhao%2BOA1e66JRHnj7dggkq1aR2FiStUiaCuKq93bHwHnpYOwPb%2BHfKzYPVjEc2WDKBfKzAvwV%2BfX7zGkKt2G%2FJ39tRxGml%2B%2FOtA3tvnlD%2FqtYdwFLS1IJHXBK5%2FSOO%2F%2Bg1S6Y4Z53Ieby0%2FNBBhnjPKTgPE7aTVauGDWdl%2Fowt%2FMhtglWpWvs84EAa4wYPEZcK811zlsYgcryE2VyV8jGRBvHv7HrMc3GandKJyIDcArDZjGryucWR2Z9MQeT1Z%2FnYkGtEQJorHwrmRgRQ8AswocH0wgY6pgFqMNmTzhw9Uaw3%2FkkeooEm5cYlbEdSpfQfo4xPFFJer8nJp9ygJ7AWvwQaa1jjH3SGIAII9IQPCCFXOYl9FqFlAbHHvaRvt2REX72KGDGl9cP5A54PR%2BCXgYxSFJT9kx9k6g4vs51orBDJ18G3UAopYv5JSXCGn9RonFxs0EhNJGnQMFdnMOhgXw5PXUBObyQ1LvCwyHf2Tu9GN3MXwM7yleHDau%2Fd&X-Amz-Signature=b9b2da3e8c5c8bc8fd4da284fc97fc72d643830d5345f786b19fd3d11618c128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6RME6OS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHCZEZ7I1G2YoFdW7i13SYKmAhY1b47jTFwd21dPjshfAiBYOI3kzWtMnmpg1R1SU3sv7Fon4p7Ds50OpBmYULrzlCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMF81ZS51qAHX6pk0JKtwDs3UAeB%2BorziINmKKvb1FCwVCB8MVMC9eQwXtwHsBcHiYCRQy0UOotdRIrymd5s3T1YhuYLX4N9G2PhNgxC5TX0yjketUiEhwSowmxdrYNd17W2NDAAnOMZWZZn3pxdx2Ogf693BrG0UqAJPhzsekM5qCuHCszr4%2BjEeB3W0J5vowo9FMt9bP21rEyHFMCfpcpuVFuQSw1peDRAr5Bu%2BqKX5O7HRx5s6VTQDeWSkThw9OqVhgVBizqKZBS7Kv90w2iuM%2Bl97JnVQFe%2Fk1pz0G3r4pDufAda%2FV%2FtII7oQ0LDOVBre%2BJuk6bQD3rTfEkLDdB2b5D2k7b7MVgJsxxaV7vW642ljee7CModa0Fibhao%2BOA1e66JRHnj7dggkq1aR2FiStUiaCuKq93bHwHnpYOwPb%2BHfKzYPVjEc2WDKBfKzAvwV%2BfX7zGkKt2G%2FJ39tRxGml%2B%2FOtA3tvnlD%2FqtYdwFLS1IJHXBK5%2FSOO%2F%2Bg1S6Y4Z53Ieby0%2FNBBhnjPKTgPE7aTVauGDWdl%2Fowt%2FMhtglWpWvs84EAa4wYPEZcK811zlsYgcryE2VyV8jGRBvHv7HrMc3GandKJyIDcArDZjGryucWR2Z9MQeT1Z%2FnYkGtEQJorHwrmRgRQ8AswocH0wgY6pgFqMNmTzhw9Uaw3%2FkkeooEm5cYlbEdSpfQfo4xPFFJer8nJp9ygJ7AWvwQaa1jjH3SGIAII9IQPCCFXOYl9FqFlAbHHvaRvt2REX72KGDGl9cP5A54PR%2BCXgYxSFJT9kx9k6g4vs51orBDJ18G3UAopYv5JSXCGn9RonFxs0EhNJGnQMFdnMOhgXw5PXUBObyQ1LvCwyHf2Tu9GN3MXwM7yleHDau%2Fd&X-Amz-Signature=85f42437ed9b717ae388252b9f757cf1984e90ba79b87f95b4c3f827653de71c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6RME6OS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHCZEZ7I1G2YoFdW7i13SYKmAhY1b47jTFwd21dPjshfAiBYOI3kzWtMnmpg1R1SU3sv7Fon4p7Ds50OpBmYULrzlCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMF81ZS51qAHX6pk0JKtwDs3UAeB%2BorziINmKKvb1FCwVCB8MVMC9eQwXtwHsBcHiYCRQy0UOotdRIrymd5s3T1YhuYLX4N9G2PhNgxC5TX0yjketUiEhwSowmxdrYNd17W2NDAAnOMZWZZn3pxdx2Ogf693BrG0UqAJPhzsekM5qCuHCszr4%2BjEeB3W0J5vowo9FMt9bP21rEyHFMCfpcpuVFuQSw1peDRAr5Bu%2BqKX5O7HRx5s6VTQDeWSkThw9OqVhgVBizqKZBS7Kv90w2iuM%2Bl97JnVQFe%2Fk1pz0G3r4pDufAda%2FV%2FtII7oQ0LDOVBre%2BJuk6bQD3rTfEkLDdB2b5D2k7b7MVgJsxxaV7vW642ljee7CModa0Fibhao%2BOA1e66JRHnj7dggkq1aR2FiStUiaCuKq93bHwHnpYOwPb%2BHfKzYPVjEc2WDKBfKzAvwV%2BfX7zGkKt2G%2FJ39tRxGml%2B%2FOtA3tvnlD%2FqtYdwFLS1IJHXBK5%2FSOO%2F%2Bg1S6Y4Z53Ieby0%2FNBBhnjPKTgPE7aTVauGDWdl%2Fowt%2FMhtglWpWvs84EAa4wYPEZcK811zlsYgcryE2VyV8jGRBvHv7HrMc3GandKJyIDcArDZjGryucWR2Z9MQeT1Z%2FnYkGtEQJorHwrmRgRQ8AswocH0wgY6pgFqMNmTzhw9Uaw3%2FkkeooEm5cYlbEdSpfQfo4xPFFJer8nJp9ygJ7AWvwQaa1jjH3SGIAII9IQPCCFXOYl9FqFlAbHHvaRvt2REX72KGDGl9cP5A54PR%2BCXgYxSFJT9kx9k6g4vs51orBDJ18G3UAopYv5JSXCGn9RonFxs0EhNJGnQMFdnMOhgXw5PXUBObyQ1LvCwyHf2Tu9GN3MXwM7yleHDau%2Fd&X-Amz-Signature=079cd7da02429a1888aa45db63f233a79bdda8e23d39cfcdbc5d8b31de7d8427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6RME6OS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHCZEZ7I1G2YoFdW7i13SYKmAhY1b47jTFwd21dPjshfAiBYOI3kzWtMnmpg1R1SU3sv7Fon4p7Ds50OpBmYULrzlCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMF81ZS51qAHX6pk0JKtwDs3UAeB%2BorziINmKKvb1FCwVCB8MVMC9eQwXtwHsBcHiYCRQy0UOotdRIrymd5s3T1YhuYLX4N9G2PhNgxC5TX0yjketUiEhwSowmxdrYNd17W2NDAAnOMZWZZn3pxdx2Ogf693BrG0UqAJPhzsekM5qCuHCszr4%2BjEeB3W0J5vowo9FMt9bP21rEyHFMCfpcpuVFuQSw1peDRAr5Bu%2BqKX5O7HRx5s6VTQDeWSkThw9OqVhgVBizqKZBS7Kv90w2iuM%2Bl97JnVQFe%2Fk1pz0G3r4pDufAda%2FV%2FtII7oQ0LDOVBre%2BJuk6bQD3rTfEkLDdB2b5D2k7b7MVgJsxxaV7vW642ljee7CModa0Fibhao%2BOA1e66JRHnj7dggkq1aR2FiStUiaCuKq93bHwHnpYOwPb%2BHfKzYPVjEc2WDKBfKzAvwV%2BfX7zGkKt2G%2FJ39tRxGml%2B%2FOtA3tvnlD%2FqtYdwFLS1IJHXBK5%2FSOO%2F%2Bg1S6Y4Z53Ieby0%2FNBBhnjPKTgPE7aTVauGDWdl%2Fowt%2FMhtglWpWvs84EAa4wYPEZcK811zlsYgcryE2VyV8jGRBvHv7HrMc3GandKJyIDcArDZjGryucWR2Z9MQeT1Z%2FnYkGtEQJorHwrmRgRQ8AswocH0wgY6pgFqMNmTzhw9Uaw3%2FkkeooEm5cYlbEdSpfQfo4xPFFJer8nJp9ygJ7AWvwQaa1jjH3SGIAII9IQPCCFXOYl9FqFlAbHHvaRvt2REX72KGDGl9cP5A54PR%2BCXgYxSFJT9kx9k6g4vs51orBDJ18G3UAopYv5JSXCGn9RonFxs0EhNJGnQMFdnMOhgXw5PXUBObyQ1LvCwyHf2Tu9GN3MXwM7yleHDau%2Fd&X-Amz-Signature=320befee26a8247de2b95dadebe5be6ea00faa7963801fb83c3851cc15df3a52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
