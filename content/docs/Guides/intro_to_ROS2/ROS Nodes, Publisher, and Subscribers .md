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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR5HX2KN%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCID%2FCtDMY2VcCG1%2B%2F5c0y43O%2BNpf0li9iWGH%2FaMWdYavLAiEA1B5JF%2Fkj6Crgw4dvtAhT%2FPjANOQ%2BkimpsNy9kn6GqyMq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDBXgBfYK%2FZYk9bz8MircAwu%2BSZh4uINzgV8S3UacLhv1f2stoKBzh4UhD38IbH1P%2FsQCfbeWFmvmkDoSONGvlxLIuNtNRkfB2Hp1%2F8gL7d0R47XQJQodWN99g6iHSQf43vxYpTxc1S9Paa8wGE1RO5%2BO2Fp0qAakaUV1BVSs9VdXGJy%2BKqmkIuog2S1nw3%2B22WWJc%2BwWqpLJNAtmZjJR7ujorSZtOKXNZaf6kdaDILn%2FPGsZYGLBW4zvPvvfj1j93avhg9gGv6AXHpcBMcoPrIFlw4%2Btdc37FKS0sUjAfvYpthC1b2ajiJPEi%2BHi0q9nxSVTZcE8%2BB%2BfIF2ZZsSP%2B8G9n15FIlMruHq2Pf43qqqGGlbnSrosMipbAvpc%2Fg9YcBmJovQ5wSTh%2Bvh0BajwkGHGDBX%2BijmRaNTWQN4aPRGVBZcmxxvOcZq1E7WOjKN7hutI32mV9QHrCZXSVVliBU5d0NEkJ9P2bsLe3zrhpwP8fxl7tGUEM5vljLhLU8WQpm8jh%2BMMx9HF3qmSPRgvgdY2VNJPkWU8A2PTqbCeM5KS629rSG7rM1YuMPqTNE4CCMmqWY5xkYfxEG8uQPgSg7ypr%2FfSzLu5Tpw3pIFdiqSzIVpKwdmOTS0FxwIsks8c0zqegcOJCq0lMpWZMM2F%2FcEGOqUBZlT0wDF5uDXyumSmJUgJrnp2nf6t%2BsI%2FMDIAstXNX7wfLXJOcdmGFBPU81aZJyEVUwV5BFHPelguoKipjqmyqwzmb%2FHnFu5YW80T1XLPTDNlSF6q6qZlvy4NFtvHfkna7WLFnyhy8u0iwMjLiB3iMIYSvwR2pkiSK%2Bs5e9sItQQbugr6DvPy66TgFkMAAkoN9f5hYD6xis7e0bdhkjDtfc711Wwi&X-Amz-Signature=37aae23fcf5887583e150adc015de50c4cf2822c824c9c59c0b9a7759cc1e751&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR5HX2KN%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCID%2FCtDMY2VcCG1%2B%2F5c0y43O%2BNpf0li9iWGH%2FaMWdYavLAiEA1B5JF%2Fkj6Crgw4dvtAhT%2FPjANOQ%2BkimpsNy9kn6GqyMq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDBXgBfYK%2FZYk9bz8MircAwu%2BSZh4uINzgV8S3UacLhv1f2stoKBzh4UhD38IbH1P%2FsQCfbeWFmvmkDoSONGvlxLIuNtNRkfB2Hp1%2F8gL7d0R47XQJQodWN99g6iHSQf43vxYpTxc1S9Paa8wGE1RO5%2BO2Fp0qAakaUV1BVSs9VdXGJy%2BKqmkIuog2S1nw3%2B22WWJc%2BwWqpLJNAtmZjJR7ujorSZtOKXNZaf6kdaDILn%2FPGsZYGLBW4zvPvvfj1j93avhg9gGv6AXHpcBMcoPrIFlw4%2Btdc37FKS0sUjAfvYpthC1b2ajiJPEi%2BHi0q9nxSVTZcE8%2BB%2BfIF2ZZsSP%2B8G9n15FIlMruHq2Pf43qqqGGlbnSrosMipbAvpc%2Fg9YcBmJovQ5wSTh%2Bvh0BajwkGHGDBX%2BijmRaNTWQN4aPRGVBZcmxxvOcZq1E7WOjKN7hutI32mV9QHrCZXSVVliBU5d0NEkJ9P2bsLe3zrhpwP8fxl7tGUEM5vljLhLU8WQpm8jh%2BMMx9HF3qmSPRgvgdY2VNJPkWU8A2PTqbCeM5KS629rSG7rM1YuMPqTNE4CCMmqWY5xkYfxEG8uQPgSg7ypr%2FfSzLu5Tpw3pIFdiqSzIVpKwdmOTS0FxwIsks8c0zqegcOJCq0lMpWZMM2F%2FcEGOqUBZlT0wDF5uDXyumSmJUgJrnp2nf6t%2BsI%2FMDIAstXNX7wfLXJOcdmGFBPU81aZJyEVUwV5BFHPelguoKipjqmyqwzmb%2FHnFu5YW80T1XLPTDNlSF6q6qZlvy4NFtvHfkna7WLFnyhy8u0iwMjLiB3iMIYSvwR2pkiSK%2Bs5e9sItQQbugr6DvPy66TgFkMAAkoN9f5hYD6xis7e0bdhkjDtfc711Wwi&X-Amz-Signature=27b89631c2328b49ba41f8f040c7464866e4cb2e24f6f88d65700709fd211c72&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR5HX2KN%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCID%2FCtDMY2VcCG1%2B%2F5c0y43O%2BNpf0li9iWGH%2FaMWdYavLAiEA1B5JF%2Fkj6Crgw4dvtAhT%2FPjANOQ%2BkimpsNy9kn6GqyMq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDBXgBfYK%2FZYk9bz8MircAwu%2BSZh4uINzgV8S3UacLhv1f2stoKBzh4UhD38IbH1P%2FsQCfbeWFmvmkDoSONGvlxLIuNtNRkfB2Hp1%2F8gL7d0R47XQJQodWN99g6iHSQf43vxYpTxc1S9Paa8wGE1RO5%2BO2Fp0qAakaUV1BVSs9VdXGJy%2BKqmkIuog2S1nw3%2B22WWJc%2BwWqpLJNAtmZjJR7ujorSZtOKXNZaf6kdaDILn%2FPGsZYGLBW4zvPvvfj1j93avhg9gGv6AXHpcBMcoPrIFlw4%2Btdc37FKS0sUjAfvYpthC1b2ajiJPEi%2BHi0q9nxSVTZcE8%2BB%2BfIF2ZZsSP%2B8G9n15FIlMruHq2Pf43qqqGGlbnSrosMipbAvpc%2Fg9YcBmJovQ5wSTh%2Bvh0BajwkGHGDBX%2BijmRaNTWQN4aPRGVBZcmxxvOcZq1E7WOjKN7hutI32mV9QHrCZXSVVliBU5d0NEkJ9P2bsLe3zrhpwP8fxl7tGUEM5vljLhLU8WQpm8jh%2BMMx9HF3qmSPRgvgdY2VNJPkWU8A2PTqbCeM5KS629rSG7rM1YuMPqTNE4CCMmqWY5xkYfxEG8uQPgSg7ypr%2FfSzLu5Tpw3pIFdiqSzIVpKwdmOTS0FxwIsks8c0zqegcOJCq0lMpWZMM2F%2FcEGOqUBZlT0wDF5uDXyumSmJUgJrnp2nf6t%2BsI%2FMDIAstXNX7wfLXJOcdmGFBPU81aZJyEVUwV5BFHPelguoKipjqmyqwzmb%2FHnFu5YW80T1XLPTDNlSF6q6qZlvy4NFtvHfkna7WLFnyhy8u0iwMjLiB3iMIYSvwR2pkiSK%2Bs5e9sItQQbugr6DvPy66TgFkMAAkoN9f5hYD6xis7e0bdhkjDtfc711Wwi&X-Amz-Signature=fd9a002ee00a619d5264c32c2ffe8d6083c086bd17642fed73a58a62678863ca&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR5HX2KN%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCID%2FCtDMY2VcCG1%2B%2F5c0y43O%2BNpf0li9iWGH%2FaMWdYavLAiEA1B5JF%2Fkj6Crgw4dvtAhT%2FPjANOQ%2BkimpsNy9kn6GqyMq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDBXgBfYK%2FZYk9bz8MircAwu%2BSZh4uINzgV8S3UacLhv1f2stoKBzh4UhD38IbH1P%2FsQCfbeWFmvmkDoSONGvlxLIuNtNRkfB2Hp1%2F8gL7d0R47XQJQodWN99g6iHSQf43vxYpTxc1S9Paa8wGE1RO5%2BO2Fp0qAakaUV1BVSs9VdXGJy%2BKqmkIuog2S1nw3%2B22WWJc%2BwWqpLJNAtmZjJR7ujorSZtOKXNZaf6kdaDILn%2FPGsZYGLBW4zvPvvfj1j93avhg9gGv6AXHpcBMcoPrIFlw4%2Btdc37FKS0sUjAfvYpthC1b2ajiJPEi%2BHi0q9nxSVTZcE8%2BB%2BfIF2ZZsSP%2B8G9n15FIlMruHq2Pf43qqqGGlbnSrosMipbAvpc%2Fg9YcBmJovQ5wSTh%2Bvh0BajwkGHGDBX%2BijmRaNTWQN4aPRGVBZcmxxvOcZq1E7WOjKN7hutI32mV9QHrCZXSVVliBU5d0NEkJ9P2bsLe3zrhpwP8fxl7tGUEM5vljLhLU8WQpm8jh%2BMMx9HF3qmSPRgvgdY2VNJPkWU8A2PTqbCeM5KS629rSG7rM1YuMPqTNE4CCMmqWY5xkYfxEG8uQPgSg7ypr%2FfSzLu5Tpw3pIFdiqSzIVpKwdmOTS0FxwIsks8c0zqegcOJCq0lMpWZMM2F%2FcEGOqUBZlT0wDF5uDXyumSmJUgJrnp2nf6t%2BsI%2FMDIAstXNX7wfLXJOcdmGFBPU81aZJyEVUwV5BFHPelguoKipjqmyqwzmb%2FHnFu5YW80T1XLPTDNlSF6q6qZlvy4NFtvHfkna7WLFnyhy8u0iwMjLiB3iMIYSvwR2pkiSK%2Bs5e9sItQQbugr6DvPy66TgFkMAAkoN9f5hYD6xis7e0bdhkjDtfc711Wwi&X-Amz-Signature=aa1fc543d5f05f79453fbc2e3aaf1076361c590c1569453024244eb32e0f33e8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR5HX2KN%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCID%2FCtDMY2VcCG1%2B%2F5c0y43O%2BNpf0li9iWGH%2FaMWdYavLAiEA1B5JF%2Fkj6Crgw4dvtAhT%2FPjANOQ%2BkimpsNy9kn6GqyMq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDBXgBfYK%2FZYk9bz8MircAwu%2BSZh4uINzgV8S3UacLhv1f2stoKBzh4UhD38IbH1P%2FsQCfbeWFmvmkDoSONGvlxLIuNtNRkfB2Hp1%2F8gL7d0R47XQJQodWN99g6iHSQf43vxYpTxc1S9Paa8wGE1RO5%2BO2Fp0qAakaUV1BVSs9VdXGJy%2BKqmkIuog2S1nw3%2B22WWJc%2BwWqpLJNAtmZjJR7ujorSZtOKXNZaf6kdaDILn%2FPGsZYGLBW4zvPvvfj1j93avhg9gGv6AXHpcBMcoPrIFlw4%2Btdc37FKS0sUjAfvYpthC1b2ajiJPEi%2BHi0q9nxSVTZcE8%2BB%2BfIF2ZZsSP%2B8G9n15FIlMruHq2Pf43qqqGGlbnSrosMipbAvpc%2Fg9YcBmJovQ5wSTh%2Bvh0BajwkGHGDBX%2BijmRaNTWQN4aPRGVBZcmxxvOcZq1E7WOjKN7hutI32mV9QHrCZXSVVliBU5d0NEkJ9P2bsLe3zrhpwP8fxl7tGUEM5vljLhLU8WQpm8jh%2BMMx9HF3qmSPRgvgdY2VNJPkWU8A2PTqbCeM5KS629rSG7rM1YuMPqTNE4CCMmqWY5xkYfxEG8uQPgSg7ypr%2FfSzLu5Tpw3pIFdiqSzIVpKwdmOTS0FxwIsks8c0zqegcOJCq0lMpWZMM2F%2FcEGOqUBZlT0wDF5uDXyumSmJUgJrnp2nf6t%2BsI%2FMDIAstXNX7wfLXJOcdmGFBPU81aZJyEVUwV5BFHPelguoKipjqmyqwzmb%2FHnFu5YW80T1XLPTDNlSF6q6qZlvy4NFtvHfkna7WLFnyhy8u0iwMjLiB3iMIYSvwR2pkiSK%2Bs5e9sItQQbugr6DvPy66TgFkMAAkoN9f5hYD6xis7e0bdhkjDtfc711Wwi&X-Amz-Signature=a364737c9baa34a9f8e0b9ba2187f0a87772e0f87b3ae0c2cbf8839d6fe4a2e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR5HX2KN%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCID%2FCtDMY2VcCG1%2B%2F5c0y43O%2BNpf0li9iWGH%2FaMWdYavLAiEA1B5JF%2Fkj6Crgw4dvtAhT%2FPjANOQ%2BkimpsNy9kn6GqyMq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDBXgBfYK%2FZYk9bz8MircAwu%2BSZh4uINzgV8S3UacLhv1f2stoKBzh4UhD38IbH1P%2FsQCfbeWFmvmkDoSONGvlxLIuNtNRkfB2Hp1%2F8gL7d0R47XQJQodWN99g6iHSQf43vxYpTxc1S9Paa8wGE1RO5%2BO2Fp0qAakaUV1BVSs9VdXGJy%2BKqmkIuog2S1nw3%2B22WWJc%2BwWqpLJNAtmZjJR7ujorSZtOKXNZaf6kdaDILn%2FPGsZYGLBW4zvPvvfj1j93avhg9gGv6AXHpcBMcoPrIFlw4%2Btdc37FKS0sUjAfvYpthC1b2ajiJPEi%2BHi0q9nxSVTZcE8%2BB%2BfIF2ZZsSP%2B8G9n15FIlMruHq2Pf43qqqGGlbnSrosMipbAvpc%2Fg9YcBmJovQ5wSTh%2Bvh0BajwkGHGDBX%2BijmRaNTWQN4aPRGVBZcmxxvOcZq1E7WOjKN7hutI32mV9QHrCZXSVVliBU5d0NEkJ9P2bsLe3zrhpwP8fxl7tGUEM5vljLhLU8WQpm8jh%2BMMx9HF3qmSPRgvgdY2VNJPkWU8A2PTqbCeM5KS629rSG7rM1YuMPqTNE4CCMmqWY5xkYfxEG8uQPgSg7ypr%2FfSzLu5Tpw3pIFdiqSzIVpKwdmOTS0FxwIsks8c0zqegcOJCq0lMpWZMM2F%2FcEGOqUBZlT0wDF5uDXyumSmJUgJrnp2nf6t%2BsI%2FMDIAstXNX7wfLXJOcdmGFBPU81aZJyEVUwV5BFHPelguoKipjqmyqwzmb%2FHnFu5YW80T1XLPTDNlSF6q6qZlvy4NFtvHfkna7WLFnyhy8u0iwMjLiB3iMIYSvwR2pkiSK%2Bs5e9sItQQbugr6DvPy66TgFkMAAkoN9f5hYD6xis7e0bdhkjDtfc711Wwi&X-Amz-Signature=c97e73b097dde1e21895367472f8865b315b9ec6343ac5e0ea5d309fe2c9e2d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR5HX2KN%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCID%2FCtDMY2VcCG1%2B%2F5c0y43O%2BNpf0li9iWGH%2FaMWdYavLAiEA1B5JF%2Fkj6Crgw4dvtAhT%2FPjANOQ%2BkimpsNy9kn6GqyMq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDBXgBfYK%2FZYk9bz8MircAwu%2BSZh4uINzgV8S3UacLhv1f2stoKBzh4UhD38IbH1P%2FsQCfbeWFmvmkDoSONGvlxLIuNtNRkfB2Hp1%2F8gL7d0R47XQJQodWN99g6iHSQf43vxYpTxc1S9Paa8wGE1RO5%2BO2Fp0qAakaUV1BVSs9VdXGJy%2BKqmkIuog2S1nw3%2B22WWJc%2BwWqpLJNAtmZjJR7ujorSZtOKXNZaf6kdaDILn%2FPGsZYGLBW4zvPvvfj1j93avhg9gGv6AXHpcBMcoPrIFlw4%2Btdc37FKS0sUjAfvYpthC1b2ajiJPEi%2BHi0q9nxSVTZcE8%2BB%2BfIF2ZZsSP%2B8G9n15FIlMruHq2Pf43qqqGGlbnSrosMipbAvpc%2Fg9YcBmJovQ5wSTh%2Bvh0BajwkGHGDBX%2BijmRaNTWQN4aPRGVBZcmxxvOcZq1E7WOjKN7hutI32mV9QHrCZXSVVliBU5d0NEkJ9P2bsLe3zrhpwP8fxl7tGUEM5vljLhLU8WQpm8jh%2BMMx9HF3qmSPRgvgdY2VNJPkWU8A2PTqbCeM5KS629rSG7rM1YuMPqTNE4CCMmqWY5xkYfxEG8uQPgSg7ypr%2FfSzLu5Tpw3pIFdiqSzIVpKwdmOTS0FxwIsks8c0zqegcOJCq0lMpWZMM2F%2FcEGOqUBZlT0wDF5uDXyumSmJUgJrnp2nf6t%2BsI%2FMDIAstXNX7wfLXJOcdmGFBPU81aZJyEVUwV5BFHPelguoKipjqmyqwzmb%2FHnFu5YW80T1XLPTDNlSF6q6qZlvy4NFtvHfkna7WLFnyhy8u0iwMjLiB3iMIYSvwR2pkiSK%2Bs5e9sItQQbugr6DvPy66TgFkMAAkoN9f5hYD6xis7e0bdhkjDtfc711Wwi&X-Amz-Signature=02be4fa412223eb722dd6c0effdcb285ac5efb651a974beed0936cae20156c77&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR5HX2KN%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCID%2FCtDMY2VcCG1%2B%2F5c0y43O%2BNpf0li9iWGH%2FaMWdYavLAiEA1B5JF%2Fkj6Crgw4dvtAhT%2FPjANOQ%2BkimpsNy9kn6GqyMq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDBXgBfYK%2FZYk9bz8MircAwu%2BSZh4uINzgV8S3UacLhv1f2stoKBzh4UhD38IbH1P%2FsQCfbeWFmvmkDoSONGvlxLIuNtNRkfB2Hp1%2F8gL7d0R47XQJQodWN99g6iHSQf43vxYpTxc1S9Paa8wGE1RO5%2BO2Fp0qAakaUV1BVSs9VdXGJy%2BKqmkIuog2S1nw3%2B22WWJc%2BwWqpLJNAtmZjJR7ujorSZtOKXNZaf6kdaDILn%2FPGsZYGLBW4zvPvvfj1j93avhg9gGv6AXHpcBMcoPrIFlw4%2Btdc37FKS0sUjAfvYpthC1b2ajiJPEi%2BHi0q9nxSVTZcE8%2BB%2BfIF2ZZsSP%2B8G9n15FIlMruHq2Pf43qqqGGlbnSrosMipbAvpc%2Fg9YcBmJovQ5wSTh%2Bvh0BajwkGHGDBX%2BijmRaNTWQN4aPRGVBZcmxxvOcZq1E7WOjKN7hutI32mV9QHrCZXSVVliBU5d0NEkJ9P2bsLe3zrhpwP8fxl7tGUEM5vljLhLU8WQpm8jh%2BMMx9HF3qmSPRgvgdY2VNJPkWU8A2PTqbCeM5KS629rSG7rM1YuMPqTNE4CCMmqWY5xkYfxEG8uQPgSg7ypr%2FfSzLu5Tpw3pIFdiqSzIVpKwdmOTS0FxwIsks8c0zqegcOJCq0lMpWZMM2F%2FcEGOqUBZlT0wDF5uDXyumSmJUgJrnp2nf6t%2BsI%2FMDIAstXNX7wfLXJOcdmGFBPU81aZJyEVUwV5BFHPelguoKipjqmyqwzmb%2FHnFu5YW80T1XLPTDNlSF6q6qZlvy4NFtvHfkna7WLFnyhy8u0iwMjLiB3iMIYSvwR2pkiSK%2Bs5e9sItQQbugr6DvPy66TgFkMAAkoN9f5hYD6xis7e0bdhkjDtfc711Wwi&X-Amz-Signature=4dca2a7eb30805e35a41e063b91f472da3de88b307d4291fc228107e435779b1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
