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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KQAII6O%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGi9GIUqzShNnZ2bdO720Mm0qADdVZzLm4jtrsRAndxAiAJKCA8tW4QidgffuLCF43qAD108xrR3K6x5qC1S0NHLCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8UFtImfDlN0MPWLGKtwDmmuKEZbWIBaz%2BAgjVH1%2FOofaqHa5zn8KNvxYtJe%2FPTOt7WL0ZB62ajZKMK4r27slIxVVqJjYgZWs9MuGyJ0zZjtHqSbFtcGzDEUHHUF6R7%2Fca5423%2FCepy3Joil3QcNghrelqs%2B%2FsNzmOL1ZLDuCxiMMofWFMh0u81KL4Sc0twNLm5h4BJGRuAaopvE2XnfxgMKMYblg%2FhdQWvpX2Tzn45kqpHCEwPLQH7f9J%2FQlMiOhuhRCCPR5dH%2BHnbZye2ynHq5Bh8UWfB%2Boby9Y8ZrTjjbaBgh%2FuaqanYyGbwlkB7qWW7XDdMmouuk3L%2FKLMq84DGhv%2Fo1erG3Hm8k5NpuDIQGP1DmqPe3rWZp2stj5sgRlLhfaV2w5LEzH0AcX1VYlvrGCFlZgHKCKKWqy6ponxr7AUP7I8jmEqWiOitqNg%2BazZC0hVVMwyFZclEwCvmKQSqqRdPP3tL03o5prYQcmv0OPqh83TWj%2Fm%2BDGm%2FtKAEoWKk6H1rvWScO%2B%2Fh7dLfQsJeugzph15Iw%2BQOe1y36qKet4%2F41E%2FIrgei6JIJpa2%2FmE%2Fzqp4x5azJwG864vWW8wIu0uxfqzDQAhni0eFxKLvRFsUEu2LK68L5JIlwQwLEL%2BxsjWxqNrMbiSvK0wmvnrwwY6pgE0X42D9gXXmVD0sOdFxRr6jn%2FbVzgt0JSgUCoNbxH63CEJrYnWtPAV3OrOJHAgWeh9QOCmK2oMd57Uf4ghQOzAa7jjyT3PFHZejxMYgm4wRdhuNCrfKjpofijt0f77a%2BSUf1L2J8hkcPiVKDEoxdpBgE1bbZC%2BgCdt2cUxs%2FSLgrOeEKkpg4kknWLl%2FfU5iYXqbZRvCwWSUP4cLV4CCEf5IbUeKf40&X-Amz-Signature=fa7b8477c5abc14a3b0a67b0d0f616a212fba3d42fa70caa56f46a02400c4c90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KQAII6O%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGi9GIUqzShNnZ2bdO720Mm0qADdVZzLm4jtrsRAndxAiAJKCA8tW4QidgffuLCF43qAD108xrR3K6x5qC1S0NHLCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8UFtImfDlN0MPWLGKtwDmmuKEZbWIBaz%2BAgjVH1%2FOofaqHa5zn8KNvxYtJe%2FPTOt7WL0ZB62ajZKMK4r27slIxVVqJjYgZWs9MuGyJ0zZjtHqSbFtcGzDEUHHUF6R7%2Fca5423%2FCepy3Joil3QcNghrelqs%2B%2FsNzmOL1ZLDuCxiMMofWFMh0u81KL4Sc0twNLm5h4BJGRuAaopvE2XnfxgMKMYblg%2FhdQWvpX2Tzn45kqpHCEwPLQH7f9J%2FQlMiOhuhRCCPR5dH%2BHnbZye2ynHq5Bh8UWfB%2Boby9Y8ZrTjjbaBgh%2FuaqanYyGbwlkB7qWW7XDdMmouuk3L%2FKLMq84DGhv%2Fo1erG3Hm8k5NpuDIQGP1DmqPe3rWZp2stj5sgRlLhfaV2w5LEzH0AcX1VYlvrGCFlZgHKCKKWqy6ponxr7AUP7I8jmEqWiOitqNg%2BazZC0hVVMwyFZclEwCvmKQSqqRdPP3tL03o5prYQcmv0OPqh83TWj%2Fm%2BDGm%2FtKAEoWKk6H1rvWScO%2B%2Fh7dLfQsJeugzph15Iw%2BQOe1y36qKet4%2F41E%2FIrgei6JIJpa2%2FmE%2Fzqp4x5azJwG864vWW8wIu0uxfqzDQAhni0eFxKLvRFsUEu2LK68L5JIlwQwLEL%2BxsjWxqNrMbiSvK0wmvnrwwY6pgE0X42D9gXXmVD0sOdFxRr6jn%2FbVzgt0JSgUCoNbxH63CEJrYnWtPAV3OrOJHAgWeh9QOCmK2oMd57Uf4ghQOzAa7jjyT3PFHZejxMYgm4wRdhuNCrfKjpofijt0f77a%2BSUf1L2J8hkcPiVKDEoxdpBgE1bbZC%2BgCdt2cUxs%2FSLgrOeEKkpg4kknWLl%2FfU5iYXqbZRvCwWSUP4cLV4CCEf5IbUeKf40&X-Amz-Signature=54d41945415473208bb4a3f423ad5a2d0496eb9096eff80ade23a3b9719f247f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KQAII6O%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGi9GIUqzShNnZ2bdO720Mm0qADdVZzLm4jtrsRAndxAiAJKCA8tW4QidgffuLCF43qAD108xrR3K6x5qC1S0NHLCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8UFtImfDlN0MPWLGKtwDmmuKEZbWIBaz%2BAgjVH1%2FOofaqHa5zn8KNvxYtJe%2FPTOt7WL0ZB62ajZKMK4r27slIxVVqJjYgZWs9MuGyJ0zZjtHqSbFtcGzDEUHHUF6R7%2Fca5423%2FCepy3Joil3QcNghrelqs%2B%2FsNzmOL1ZLDuCxiMMofWFMh0u81KL4Sc0twNLm5h4BJGRuAaopvE2XnfxgMKMYblg%2FhdQWvpX2Tzn45kqpHCEwPLQH7f9J%2FQlMiOhuhRCCPR5dH%2BHnbZye2ynHq5Bh8UWfB%2Boby9Y8ZrTjjbaBgh%2FuaqanYyGbwlkB7qWW7XDdMmouuk3L%2FKLMq84DGhv%2Fo1erG3Hm8k5NpuDIQGP1DmqPe3rWZp2stj5sgRlLhfaV2w5LEzH0AcX1VYlvrGCFlZgHKCKKWqy6ponxr7AUP7I8jmEqWiOitqNg%2BazZC0hVVMwyFZclEwCvmKQSqqRdPP3tL03o5prYQcmv0OPqh83TWj%2Fm%2BDGm%2FtKAEoWKk6H1rvWScO%2B%2Fh7dLfQsJeugzph15Iw%2BQOe1y36qKet4%2F41E%2FIrgei6JIJpa2%2FmE%2Fzqp4x5azJwG864vWW8wIu0uxfqzDQAhni0eFxKLvRFsUEu2LK68L5JIlwQwLEL%2BxsjWxqNrMbiSvK0wmvnrwwY6pgE0X42D9gXXmVD0sOdFxRr6jn%2FbVzgt0JSgUCoNbxH63CEJrYnWtPAV3OrOJHAgWeh9QOCmK2oMd57Uf4ghQOzAa7jjyT3PFHZejxMYgm4wRdhuNCrfKjpofijt0f77a%2BSUf1L2J8hkcPiVKDEoxdpBgE1bbZC%2BgCdt2cUxs%2FSLgrOeEKkpg4kknWLl%2FfU5iYXqbZRvCwWSUP4cLV4CCEf5IbUeKf40&X-Amz-Signature=4fd560615ecfc831b36681135a46a13fd5524b29cb1d563375154b8019563bd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KQAII6O%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGi9GIUqzShNnZ2bdO720Mm0qADdVZzLm4jtrsRAndxAiAJKCA8tW4QidgffuLCF43qAD108xrR3K6x5qC1S0NHLCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8UFtImfDlN0MPWLGKtwDmmuKEZbWIBaz%2BAgjVH1%2FOofaqHa5zn8KNvxYtJe%2FPTOt7WL0ZB62ajZKMK4r27slIxVVqJjYgZWs9MuGyJ0zZjtHqSbFtcGzDEUHHUF6R7%2Fca5423%2FCepy3Joil3QcNghrelqs%2B%2FsNzmOL1ZLDuCxiMMofWFMh0u81KL4Sc0twNLm5h4BJGRuAaopvE2XnfxgMKMYblg%2FhdQWvpX2Tzn45kqpHCEwPLQH7f9J%2FQlMiOhuhRCCPR5dH%2BHnbZye2ynHq5Bh8UWfB%2Boby9Y8ZrTjjbaBgh%2FuaqanYyGbwlkB7qWW7XDdMmouuk3L%2FKLMq84DGhv%2Fo1erG3Hm8k5NpuDIQGP1DmqPe3rWZp2stj5sgRlLhfaV2w5LEzH0AcX1VYlvrGCFlZgHKCKKWqy6ponxr7AUP7I8jmEqWiOitqNg%2BazZC0hVVMwyFZclEwCvmKQSqqRdPP3tL03o5prYQcmv0OPqh83TWj%2Fm%2BDGm%2FtKAEoWKk6H1rvWScO%2B%2Fh7dLfQsJeugzph15Iw%2BQOe1y36qKet4%2F41E%2FIrgei6JIJpa2%2FmE%2Fzqp4x5azJwG864vWW8wIu0uxfqzDQAhni0eFxKLvRFsUEu2LK68L5JIlwQwLEL%2BxsjWxqNrMbiSvK0wmvnrwwY6pgE0X42D9gXXmVD0sOdFxRr6jn%2FbVzgt0JSgUCoNbxH63CEJrYnWtPAV3OrOJHAgWeh9QOCmK2oMd57Uf4ghQOzAa7jjyT3PFHZejxMYgm4wRdhuNCrfKjpofijt0f77a%2BSUf1L2J8hkcPiVKDEoxdpBgE1bbZC%2BgCdt2cUxs%2FSLgrOeEKkpg4kknWLl%2FfU5iYXqbZRvCwWSUP4cLV4CCEf5IbUeKf40&X-Amz-Signature=a7a6bd93d77e4b579118c20d98e1c1d41d6ce601ec7c4b5eef16a940b4a211e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KQAII6O%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGi9GIUqzShNnZ2bdO720Mm0qADdVZzLm4jtrsRAndxAiAJKCA8tW4QidgffuLCF43qAD108xrR3K6x5qC1S0NHLCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8UFtImfDlN0MPWLGKtwDmmuKEZbWIBaz%2BAgjVH1%2FOofaqHa5zn8KNvxYtJe%2FPTOt7WL0ZB62ajZKMK4r27slIxVVqJjYgZWs9MuGyJ0zZjtHqSbFtcGzDEUHHUF6R7%2Fca5423%2FCepy3Joil3QcNghrelqs%2B%2FsNzmOL1ZLDuCxiMMofWFMh0u81KL4Sc0twNLm5h4BJGRuAaopvE2XnfxgMKMYblg%2FhdQWvpX2Tzn45kqpHCEwPLQH7f9J%2FQlMiOhuhRCCPR5dH%2BHnbZye2ynHq5Bh8UWfB%2Boby9Y8ZrTjjbaBgh%2FuaqanYyGbwlkB7qWW7XDdMmouuk3L%2FKLMq84DGhv%2Fo1erG3Hm8k5NpuDIQGP1DmqPe3rWZp2stj5sgRlLhfaV2w5LEzH0AcX1VYlvrGCFlZgHKCKKWqy6ponxr7AUP7I8jmEqWiOitqNg%2BazZC0hVVMwyFZclEwCvmKQSqqRdPP3tL03o5prYQcmv0OPqh83TWj%2Fm%2BDGm%2FtKAEoWKk6H1rvWScO%2B%2Fh7dLfQsJeugzph15Iw%2BQOe1y36qKet4%2F41E%2FIrgei6JIJpa2%2FmE%2Fzqp4x5azJwG864vWW8wIu0uxfqzDQAhni0eFxKLvRFsUEu2LK68L5JIlwQwLEL%2BxsjWxqNrMbiSvK0wmvnrwwY6pgE0X42D9gXXmVD0sOdFxRr6jn%2FbVzgt0JSgUCoNbxH63CEJrYnWtPAV3OrOJHAgWeh9QOCmK2oMd57Uf4ghQOzAa7jjyT3PFHZejxMYgm4wRdhuNCrfKjpofijt0f77a%2BSUf1L2J8hkcPiVKDEoxdpBgE1bbZC%2BgCdt2cUxs%2FSLgrOeEKkpg4kknWLl%2FfU5iYXqbZRvCwWSUP4cLV4CCEf5IbUeKf40&X-Amz-Signature=ccc796d9ca2aaf28193bedc8ef58ac1d5582e32ba1cb81022c0981ec7cd3257b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KQAII6O%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGi9GIUqzShNnZ2bdO720Mm0qADdVZzLm4jtrsRAndxAiAJKCA8tW4QidgffuLCF43qAD108xrR3K6x5qC1S0NHLCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8UFtImfDlN0MPWLGKtwDmmuKEZbWIBaz%2BAgjVH1%2FOofaqHa5zn8KNvxYtJe%2FPTOt7WL0ZB62ajZKMK4r27slIxVVqJjYgZWs9MuGyJ0zZjtHqSbFtcGzDEUHHUF6R7%2Fca5423%2FCepy3Joil3QcNghrelqs%2B%2FsNzmOL1ZLDuCxiMMofWFMh0u81KL4Sc0twNLm5h4BJGRuAaopvE2XnfxgMKMYblg%2FhdQWvpX2Tzn45kqpHCEwPLQH7f9J%2FQlMiOhuhRCCPR5dH%2BHnbZye2ynHq5Bh8UWfB%2Boby9Y8ZrTjjbaBgh%2FuaqanYyGbwlkB7qWW7XDdMmouuk3L%2FKLMq84DGhv%2Fo1erG3Hm8k5NpuDIQGP1DmqPe3rWZp2stj5sgRlLhfaV2w5LEzH0AcX1VYlvrGCFlZgHKCKKWqy6ponxr7AUP7I8jmEqWiOitqNg%2BazZC0hVVMwyFZclEwCvmKQSqqRdPP3tL03o5prYQcmv0OPqh83TWj%2Fm%2BDGm%2FtKAEoWKk6H1rvWScO%2B%2Fh7dLfQsJeugzph15Iw%2BQOe1y36qKet4%2F41E%2FIrgei6JIJpa2%2FmE%2Fzqp4x5azJwG864vWW8wIu0uxfqzDQAhni0eFxKLvRFsUEu2LK68L5JIlwQwLEL%2BxsjWxqNrMbiSvK0wmvnrwwY6pgE0X42D9gXXmVD0sOdFxRr6jn%2FbVzgt0JSgUCoNbxH63CEJrYnWtPAV3OrOJHAgWeh9QOCmK2oMd57Uf4ghQOzAa7jjyT3PFHZejxMYgm4wRdhuNCrfKjpofijt0f77a%2BSUf1L2J8hkcPiVKDEoxdpBgE1bbZC%2BgCdt2cUxs%2FSLgrOeEKkpg4kknWLl%2FfU5iYXqbZRvCwWSUP4cLV4CCEf5IbUeKf40&X-Amz-Signature=4c7335dd8d7fa3e7942e56beeba964790439bd3a1c777e1f260692c0cb9120c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KQAII6O%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGi9GIUqzShNnZ2bdO720Mm0qADdVZzLm4jtrsRAndxAiAJKCA8tW4QidgffuLCF43qAD108xrR3K6x5qC1S0NHLCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8UFtImfDlN0MPWLGKtwDmmuKEZbWIBaz%2BAgjVH1%2FOofaqHa5zn8KNvxYtJe%2FPTOt7WL0ZB62ajZKMK4r27slIxVVqJjYgZWs9MuGyJ0zZjtHqSbFtcGzDEUHHUF6R7%2Fca5423%2FCepy3Joil3QcNghrelqs%2B%2FsNzmOL1ZLDuCxiMMofWFMh0u81KL4Sc0twNLm5h4BJGRuAaopvE2XnfxgMKMYblg%2FhdQWvpX2Tzn45kqpHCEwPLQH7f9J%2FQlMiOhuhRCCPR5dH%2BHnbZye2ynHq5Bh8UWfB%2Boby9Y8ZrTjjbaBgh%2FuaqanYyGbwlkB7qWW7XDdMmouuk3L%2FKLMq84DGhv%2Fo1erG3Hm8k5NpuDIQGP1DmqPe3rWZp2stj5sgRlLhfaV2w5LEzH0AcX1VYlvrGCFlZgHKCKKWqy6ponxr7AUP7I8jmEqWiOitqNg%2BazZC0hVVMwyFZclEwCvmKQSqqRdPP3tL03o5prYQcmv0OPqh83TWj%2Fm%2BDGm%2FtKAEoWKk6H1rvWScO%2B%2Fh7dLfQsJeugzph15Iw%2BQOe1y36qKet4%2F41E%2FIrgei6JIJpa2%2FmE%2Fzqp4x5azJwG864vWW8wIu0uxfqzDQAhni0eFxKLvRFsUEu2LK68L5JIlwQwLEL%2BxsjWxqNrMbiSvK0wmvnrwwY6pgE0X42D9gXXmVD0sOdFxRr6jn%2FbVzgt0JSgUCoNbxH63CEJrYnWtPAV3OrOJHAgWeh9QOCmK2oMd57Uf4ghQOzAa7jjyT3PFHZejxMYgm4wRdhuNCrfKjpofijt0f77a%2BSUf1L2J8hkcPiVKDEoxdpBgE1bbZC%2BgCdt2cUxs%2FSLgrOeEKkpg4kknWLl%2FfU5iYXqbZRvCwWSUP4cLV4CCEf5IbUeKf40&X-Amz-Signature=9f062b3e242c7f2c4c06e12c0274308f491a42b30238695866f2d124dfda2245&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KQAII6O%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGi9GIUqzShNnZ2bdO720Mm0qADdVZzLm4jtrsRAndxAiAJKCA8tW4QidgffuLCF43qAD108xrR3K6x5qC1S0NHLCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8UFtImfDlN0MPWLGKtwDmmuKEZbWIBaz%2BAgjVH1%2FOofaqHa5zn8KNvxYtJe%2FPTOt7WL0ZB62ajZKMK4r27slIxVVqJjYgZWs9MuGyJ0zZjtHqSbFtcGzDEUHHUF6R7%2Fca5423%2FCepy3Joil3QcNghrelqs%2B%2FsNzmOL1ZLDuCxiMMofWFMh0u81KL4Sc0twNLm5h4BJGRuAaopvE2XnfxgMKMYblg%2FhdQWvpX2Tzn45kqpHCEwPLQH7f9J%2FQlMiOhuhRCCPR5dH%2BHnbZye2ynHq5Bh8UWfB%2Boby9Y8ZrTjjbaBgh%2FuaqanYyGbwlkB7qWW7XDdMmouuk3L%2FKLMq84DGhv%2Fo1erG3Hm8k5NpuDIQGP1DmqPe3rWZp2stj5sgRlLhfaV2w5LEzH0AcX1VYlvrGCFlZgHKCKKWqy6ponxr7AUP7I8jmEqWiOitqNg%2BazZC0hVVMwyFZclEwCvmKQSqqRdPP3tL03o5prYQcmv0OPqh83TWj%2Fm%2BDGm%2FtKAEoWKk6H1rvWScO%2B%2Fh7dLfQsJeugzph15Iw%2BQOe1y36qKet4%2F41E%2FIrgei6JIJpa2%2FmE%2Fzqp4x5azJwG864vWW8wIu0uxfqzDQAhni0eFxKLvRFsUEu2LK68L5JIlwQwLEL%2BxsjWxqNrMbiSvK0wmvnrwwY6pgE0X42D9gXXmVD0sOdFxRr6jn%2FbVzgt0JSgUCoNbxH63CEJrYnWtPAV3OrOJHAgWeh9QOCmK2oMd57Uf4ghQOzAa7jjyT3PFHZejxMYgm4wRdhuNCrfKjpofijt0f77a%2BSUf1L2J8hkcPiVKDEoxdpBgE1bbZC%2BgCdt2cUxs%2FSLgrOeEKkpg4kknWLl%2FfU5iYXqbZRvCwWSUP4cLV4CCEf5IbUeKf40&X-Amz-Signature=a2b667a185d21c9bdd0202e4d13fdffb864511ea5a51722e9d1a3f37bd2a5e38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
