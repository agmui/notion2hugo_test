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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6TOLJGH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIB5fsBgXYqRHrsGu9Ep69UCmXm%2BOfJ%2B6B7Q0t4%2F71mjMAiAlRhD%2F5ZqOEGhmYYk1GPJEUkVl5Z6cGVH0%2F5SvtbZENSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMbPXSmvGVMhY%2FOv7DKtwDzzTpi8hGob8045d4eWYIbOYnw1Tmt4V7jOcl%2BqYwzhZRMg5CBNp%2BnjFO%2BB8pzPS%2BgWdxxMcw4hfXpvxzV8jEk6LGf3HCa9ogpUD%2FPh5a%2FMQ96SYxDdWDwwcJHza7qO15sJqTZ3qaKOVGKp8bFY8csRSHjBzDquj33F467uhRLuLRyF4hP%2FbGphbo8xlHkIdsRO5QmoLSsD%2Bvokrfg6Lzq7WRmfXRiI0sQ0SV%2FvrPhdj9dDYunYNRz6xUxPMKpgw43YCeWgIV6stQzUkQzeeaznICeICtlBXAZ20SBW3FpTwFw6o3gEwx%2FKJh%2FA6j1fA9LugjTLz6Yk86dR5juv0zCNgIYCKQ4bstV%2BjeFDGIMFHdHv3sRoYHnxrlk6qsYvsvAqHfaZtOva7mHHNbf00huTbqPyTsytUN0hB0LoywVbAKu3vbGOg2NdunGLawSSj96Ucs%2BXsfbXWg6cf8nexMHLmeKumkYCo4wjsVhpY5jU5cCBFPYEhvZVqR4%2FsXvmpmBzEIHyiL13NAjIjkhpcWm%2BwSuOV34h3K%2BJ3kh4X3UC44mOB2%2B0P%2BgbpwXRGPDNRs3zhRkNE1jqvM9Z8zF%2Fi3VfqNobB2pTaGfUP%2Fu8Maz%2F7zf7hbD8AlniREP4Ew5Lf8xAY6pgG9jpv6%2Bgpes1OGEt0ToVqFoW1rb6smMVNRCn86Ik2Z5AmdiJopNjAiPjPNXfo6vc0ZV51cLPCGMD42OVaTuym%2BrKpxolNeXaoveqH62RDR60tEruGubokTtsVz0IXq4c9gVhFFhw1EA%2BefPsEZDyeWra7YaUSu5LWjl67mnG9ZNJPuhnzZ9iaLECbwQ2%2FAIWZfBOZLF12EM%2Bw%2BRKaz8DuXhp%2BnmMkQ&X-Amz-Signature=9877ca3f5f2ba9774272e044c05a743206121ef5ea31f1b84a019569598fed65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6TOLJGH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIB5fsBgXYqRHrsGu9Ep69UCmXm%2BOfJ%2B6B7Q0t4%2F71mjMAiAlRhD%2F5ZqOEGhmYYk1GPJEUkVl5Z6cGVH0%2F5SvtbZENSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMbPXSmvGVMhY%2FOv7DKtwDzzTpi8hGob8045d4eWYIbOYnw1Tmt4V7jOcl%2BqYwzhZRMg5CBNp%2BnjFO%2BB8pzPS%2BgWdxxMcw4hfXpvxzV8jEk6LGf3HCa9ogpUD%2FPh5a%2FMQ96SYxDdWDwwcJHza7qO15sJqTZ3qaKOVGKp8bFY8csRSHjBzDquj33F467uhRLuLRyF4hP%2FbGphbo8xlHkIdsRO5QmoLSsD%2Bvokrfg6Lzq7WRmfXRiI0sQ0SV%2FvrPhdj9dDYunYNRz6xUxPMKpgw43YCeWgIV6stQzUkQzeeaznICeICtlBXAZ20SBW3FpTwFw6o3gEwx%2FKJh%2FA6j1fA9LugjTLz6Yk86dR5juv0zCNgIYCKQ4bstV%2BjeFDGIMFHdHv3sRoYHnxrlk6qsYvsvAqHfaZtOva7mHHNbf00huTbqPyTsytUN0hB0LoywVbAKu3vbGOg2NdunGLawSSj96Ucs%2BXsfbXWg6cf8nexMHLmeKumkYCo4wjsVhpY5jU5cCBFPYEhvZVqR4%2FsXvmpmBzEIHyiL13NAjIjkhpcWm%2BwSuOV34h3K%2BJ3kh4X3UC44mOB2%2B0P%2BgbpwXRGPDNRs3zhRkNE1jqvM9Z8zF%2Fi3VfqNobB2pTaGfUP%2Fu8Maz%2F7zf7hbD8AlniREP4Ew5Lf8xAY6pgG9jpv6%2Bgpes1OGEt0ToVqFoW1rb6smMVNRCn86Ik2Z5AmdiJopNjAiPjPNXfo6vc0ZV51cLPCGMD42OVaTuym%2BrKpxolNeXaoveqH62RDR60tEruGubokTtsVz0IXq4c9gVhFFhw1EA%2BefPsEZDyeWra7YaUSu5LWjl67mnG9ZNJPuhnzZ9iaLECbwQ2%2FAIWZfBOZLF12EM%2Bw%2BRKaz8DuXhp%2BnmMkQ&X-Amz-Signature=f538e36797eed2825cd7fe50dfc5f065d0e34975406108dca258bba124cc1352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6TOLJGH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIB5fsBgXYqRHrsGu9Ep69UCmXm%2BOfJ%2B6B7Q0t4%2F71mjMAiAlRhD%2F5ZqOEGhmYYk1GPJEUkVl5Z6cGVH0%2F5SvtbZENSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMbPXSmvGVMhY%2FOv7DKtwDzzTpi8hGob8045d4eWYIbOYnw1Tmt4V7jOcl%2BqYwzhZRMg5CBNp%2BnjFO%2BB8pzPS%2BgWdxxMcw4hfXpvxzV8jEk6LGf3HCa9ogpUD%2FPh5a%2FMQ96SYxDdWDwwcJHza7qO15sJqTZ3qaKOVGKp8bFY8csRSHjBzDquj33F467uhRLuLRyF4hP%2FbGphbo8xlHkIdsRO5QmoLSsD%2Bvokrfg6Lzq7WRmfXRiI0sQ0SV%2FvrPhdj9dDYunYNRz6xUxPMKpgw43YCeWgIV6stQzUkQzeeaznICeICtlBXAZ20SBW3FpTwFw6o3gEwx%2FKJh%2FA6j1fA9LugjTLz6Yk86dR5juv0zCNgIYCKQ4bstV%2BjeFDGIMFHdHv3sRoYHnxrlk6qsYvsvAqHfaZtOva7mHHNbf00huTbqPyTsytUN0hB0LoywVbAKu3vbGOg2NdunGLawSSj96Ucs%2BXsfbXWg6cf8nexMHLmeKumkYCo4wjsVhpY5jU5cCBFPYEhvZVqR4%2FsXvmpmBzEIHyiL13NAjIjkhpcWm%2BwSuOV34h3K%2BJ3kh4X3UC44mOB2%2B0P%2BgbpwXRGPDNRs3zhRkNE1jqvM9Z8zF%2Fi3VfqNobB2pTaGfUP%2Fu8Maz%2F7zf7hbD8AlniREP4Ew5Lf8xAY6pgG9jpv6%2Bgpes1OGEt0ToVqFoW1rb6smMVNRCn86Ik2Z5AmdiJopNjAiPjPNXfo6vc0ZV51cLPCGMD42OVaTuym%2BrKpxolNeXaoveqH62RDR60tEruGubokTtsVz0IXq4c9gVhFFhw1EA%2BefPsEZDyeWra7YaUSu5LWjl67mnG9ZNJPuhnzZ9iaLECbwQ2%2FAIWZfBOZLF12EM%2Bw%2BRKaz8DuXhp%2BnmMkQ&X-Amz-Signature=e7421aa7ec949a9ffc0e01375547f1ebd4bc3c3086c71a0b496b338077a74650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6TOLJGH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIB5fsBgXYqRHrsGu9Ep69UCmXm%2BOfJ%2B6B7Q0t4%2F71mjMAiAlRhD%2F5ZqOEGhmYYk1GPJEUkVl5Z6cGVH0%2F5SvtbZENSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMbPXSmvGVMhY%2FOv7DKtwDzzTpi8hGob8045d4eWYIbOYnw1Tmt4V7jOcl%2BqYwzhZRMg5CBNp%2BnjFO%2BB8pzPS%2BgWdxxMcw4hfXpvxzV8jEk6LGf3HCa9ogpUD%2FPh5a%2FMQ96SYxDdWDwwcJHza7qO15sJqTZ3qaKOVGKp8bFY8csRSHjBzDquj33F467uhRLuLRyF4hP%2FbGphbo8xlHkIdsRO5QmoLSsD%2Bvokrfg6Lzq7WRmfXRiI0sQ0SV%2FvrPhdj9dDYunYNRz6xUxPMKpgw43YCeWgIV6stQzUkQzeeaznICeICtlBXAZ20SBW3FpTwFw6o3gEwx%2FKJh%2FA6j1fA9LugjTLz6Yk86dR5juv0zCNgIYCKQ4bstV%2BjeFDGIMFHdHv3sRoYHnxrlk6qsYvsvAqHfaZtOva7mHHNbf00huTbqPyTsytUN0hB0LoywVbAKu3vbGOg2NdunGLawSSj96Ucs%2BXsfbXWg6cf8nexMHLmeKumkYCo4wjsVhpY5jU5cCBFPYEhvZVqR4%2FsXvmpmBzEIHyiL13NAjIjkhpcWm%2BwSuOV34h3K%2BJ3kh4X3UC44mOB2%2B0P%2BgbpwXRGPDNRs3zhRkNE1jqvM9Z8zF%2Fi3VfqNobB2pTaGfUP%2Fu8Maz%2F7zf7hbD8AlniREP4Ew5Lf8xAY6pgG9jpv6%2Bgpes1OGEt0ToVqFoW1rb6smMVNRCn86Ik2Z5AmdiJopNjAiPjPNXfo6vc0ZV51cLPCGMD42OVaTuym%2BrKpxolNeXaoveqH62RDR60tEruGubokTtsVz0IXq4c9gVhFFhw1EA%2BefPsEZDyeWra7YaUSu5LWjl67mnG9ZNJPuhnzZ9iaLECbwQ2%2FAIWZfBOZLF12EM%2Bw%2BRKaz8DuXhp%2BnmMkQ&X-Amz-Signature=69f27755d4cc1df6d402ea334626041814e3650ec20a5a7c407c880eab1cb7a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6TOLJGH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIB5fsBgXYqRHrsGu9Ep69UCmXm%2BOfJ%2B6B7Q0t4%2F71mjMAiAlRhD%2F5ZqOEGhmYYk1GPJEUkVl5Z6cGVH0%2F5SvtbZENSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMbPXSmvGVMhY%2FOv7DKtwDzzTpi8hGob8045d4eWYIbOYnw1Tmt4V7jOcl%2BqYwzhZRMg5CBNp%2BnjFO%2BB8pzPS%2BgWdxxMcw4hfXpvxzV8jEk6LGf3HCa9ogpUD%2FPh5a%2FMQ96SYxDdWDwwcJHza7qO15sJqTZ3qaKOVGKp8bFY8csRSHjBzDquj33F467uhRLuLRyF4hP%2FbGphbo8xlHkIdsRO5QmoLSsD%2Bvokrfg6Lzq7WRmfXRiI0sQ0SV%2FvrPhdj9dDYunYNRz6xUxPMKpgw43YCeWgIV6stQzUkQzeeaznICeICtlBXAZ20SBW3FpTwFw6o3gEwx%2FKJh%2FA6j1fA9LugjTLz6Yk86dR5juv0zCNgIYCKQ4bstV%2BjeFDGIMFHdHv3sRoYHnxrlk6qsYvsvAqHfaZtOva7mHHNbf00huTbqPyTsytUN0hB0LoywVbAKu3vbGOg2NdunGLawSSj96Ucs%2BXsfbXWg6cf8nexMHLmeKumkYCo4wjsVhpY5jU5cCBFPYEhvZVqR4%2FsXvmpmBzEIHyiL13NAjIjkhpcWm%2BwSuOV34h3K%2BJ3kh4X3UC44mOB2%2B0P%2BgbpwXRGPDNRs3zhRkNE1jqvM9Z8zF%2Fi3VfqNobB2pTaGfUP%2Fu8Maz%2F7zf7hbD8AlniREP4Ew5Lf8xAY6pgG9jpv6%2Bgpes1OGEt0ToVqFoW1rb6smMVNRCn86Ik2Z5AmdiJopNjAiPjPNXfo6vc0ZV51cLPCGMD42OVaTuym%2BrKpxolNeXaoveqH62RDR60tEruGubokTtsVz0IXq4c9gVhFFhw1EA%2BefPsEZDyeWra7YaUSu5LWjl67mnG9ZNJPuhnzZ9iaLECbwQ2%2FAIWZfBOZLF12EM%2Bw%2BRKaz8DuXhp%2BnmMkQ&X-Amz-Signature=8e3f386f012f7b590e89ec7895ced05ea86d29a4b3dab9a04fe5d904f77e3605&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6TOLJGH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIB5fsBgXYqRHrsGu9Ep69UCmXm%2BOfJ%2B6B7Q0t4%2F71mjMAiAlRhD%2F5ZqOEGhmYYk1GPJEUkVl5Z6cGVH0%2F5SvtbZENSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMbPXSmvGVMhY%2FOv7DKtwDzzTpi8hGob8045d4eWYIbOYnw1Tmt4V7jOcl%2BqYwzhZRMg5CBNp%2BnjFO%2BB8pzPS%2BgWdxxMcw4hfXpvxzV8jEk6LGf3HCa9ogpUD%2FPh5a%2FMQ96SYxDdWDwwcJHza7qO15sJqTZ3qaKOVGKp8bFY8csRSHjBzDquj33F467uhRLuLRyF4hP%2FbGphbo8xlHkIdsRO5QmoLSsD%2Bvokrfg6Lzq7WRmfXRiI0sQ0SV%2FvrPhdj9dDYunYNRz6xUxPMKpgw43YCeWgIV6stQzUkQzeeaznICeICtlBXAZ20SBW3FpTwFw6o3gEwx%2FKJh%2FA6j1fA9LugjTLz6Yk86dR5juv0zCNgIYCKQ4bstV%2BjeFDGIMFHdHv3sRoYHnxrlk6qsYvsvAqHfaZtOva7mHHNbf00huTbqPyTsytUN0hB0LoywVbAKu3vbGOg2NdunGLawSSj96Ucs%2BXsfbXWg6cf8nexMHLmeKumkYCo4wjsVhpY5jU5cCBFPYEhvZVqR4%2FsXvmpmBzEIHyiL13NAjIjkhpcWm%2BwSuOV34h3K%2BJ3kh4X3UC44mOB2%2B0P%2BgbpwXRGPDNRs3zhRkNE1jqvM9Z8zF%2Fi3VfqNobB2pTaGfUP%2Fu8Maz%2F7zf7hbD8AlniREP4Ew5Lf8xAY6pgG9jpv6%2Bgpes1OGEt0ToVqFoW1rb6smMVNRCn86Ik2Z5AmdiJopNjAiPjPNXfo6vc0ZV51cLPCGMD42OVaTuym%2BrKpxolNeXaoveqH62RDR60tEruGubokTtsVz0IXq4c9gVhFFhw1EA%2BefPsEZDyeWra7YaUSu5LWjl67mnG9ZNJPuhnzZ9iaLECbwQ2%2FAIWZfBOZLF12EM%2Bw%2BRKaz8DuXhp%2BnmMkQ&X-Amz-Signature=972ca834af215f42ca3be0a31662f42d068b6869beae3a9f185c4a946ab99565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6TOLJGH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIB5fsBgXYqRHrsGu9Ep69UCmXm%2BOfJ%2B6B7Q0t4%2F71mjMAiAlRhD%2F5ZqOEGhmYYk1GPJEUkVl5Z6cGVH0%2F5SvtbZENSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMbPXSmvGVMhY%2FOv7DKtwDzzTpi8hGob8045d4eWYIbOYnw1Tmt4V7jOcl%2BqYwzhZRMg5CBNp%2BnjFO%2BB8pzPS%2BgWdxxMcw4hfXpvxzV8jEk6LGf3HCa9ogpUD%2FPh5a%2FMQ96SYxDdWDwwcJHza7qO15sJqTZ3qaKOVGKp8bFY8csRSHjBzDquj33F467uhRLuLRyF4hP%2FbGphbo8xlHkIdsRO5QmoLSsD%2Bvokrfg6Lzq7WRmfXRiI0sQ0SV%2FvrPhdj9dDYunYNRz6xUxPMKpgw43YCeWgIV6stQzUkQzeeaznICeICtlBXAZ20SBW3FpTwFw6o3gEwx%2FKJh%2FA6j1fA9LugjTLz6Yk86dR5juv0zCNgIYCKQ4bstV%2BjeFDGIMFHdHv3sRoYHnxrlk6qsYvsvAqHfaZtOva7mHHNbf00huTbqPyTsytUN0hB0LoywVbAKu3vbGOg2NdunGLawSSj96Ucs%2BXsfbXWg6cf8nexMHLmeKumkYCo4wjsVhpY5jU5cCBFPYEhvZVqR4%2FsXvmpmBzEIHyiL13NAjIjkhpcWm%2BwSuOV34h3K%2BJ3kh4X3UC44mOB2%2B0P%2BgbpwXRGPDNRs3zhRkNE1jqvM9Z8zF%2Fi3VfqNobB2pTaGfUP%2Fu8Maz%2F7zf7hbD8AlniREP4Ew5Lf8xAY6pgG9jpv6%2Bgpes1OGEt0ToVqFoW1rb6smMVNRCn86Ik2Z5AmdiJopNjAiPjPNXfo6vc0ZV51cLPCGMD42OVaTuym%2BrKpxolNeXaoveqH62RDR60tEruGubokTtsVz0IXq4c9gVhFFhw1EA%2BefPsEZDyeWra7YaUSu5LWjl67mnG9ZNJPuhnzZ9iaLECbwQ2%2FAIWZfBOZLF12EM%2Bw%2BRKaz8DuXhp%2BnmMkQ&X-Amz-Signature=4445861d3843f21d19e9e2d720a63af2706f62b36415baec341d5a189ccdab7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6TOLJGH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIB5fsBgXYqRHrsGu9Ep69UCmXm%2BOfJ%2B6B7Q0t4%2F71mjMAiAlRhD%2F5ZqOEGhmYYk1GPJEUkVl5Z6cGVH0%2F5SvtbZENSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMbPXSmvGVMhY%2FOv7DKtwDzzTpi8hGob8045d4eWYIbOYnw1Tmt4V7jOcl%2BqYwzhZRMg5CBNp%2BnjFO%2BB8pzPS%2BgWdxxMcw4hfXpvxzV8jEk6LGf3HCa9ogpUD%2FPh5a%2FMQ96SYxDdWDwwcJHza7qO15sJqTZ3qaKOVGKp8bFY8csRSHjBzDquj33F467uhRLuLRyF4hP%2FbGphbo8xlHkIdsRO5QmoLSsD%2Bvokrfg6Lzq7WRmfXRiI0sQ0SV%2FvrPhdj9dDYunYNRz6xUxPMKpgw43YCeWgIV6stQzUkQzeeaznICeICtlBXAZ20SBW3FpTwFw6o3gEwx%2FKJh%2FA6j1fA9LugjTLz6Yk86dR5juv0zCNgIYCKQ4bstV%2BjeFDGIMFHdHv3sRoYHnxrlk6qsYvsvAqHfaZtOva7mHHNbf00huTbqPyTsytUN0hB0LoywVbAKu3vbGOg2NdunGLawSSj96Ucs%2BXsfbXWg6cf8nexMHLmeKumkYCo4wjsVhpY5jU5cCBFPYEhvZVqR4%2FsXvmpmBzEIHyiL13NAjIjkhpcWm%2BwSuOV34h3K%2BJ3kh4X3UC44mOB2%2B0P%2BgbpwXRGPDNRs3zhRkNE1jqvM9Z8zF%2Fi3VfqNobB2pTaGfUP%2Fu8Maz%2F7zf7hbD8AlniREP4Ew5Lf8xAY6pgG9jpv6%2Bgpes1OGEt0ToVqFoW1rb6smMVNRCn86Ik2Z5AmdiJopNjAiPjPNXfo6vc0ZV51cLPCGMD42OVaTuym%2BrKpxolNeXaoveqH62RDR60tEruGubokTtsVz0IXq4c9gVhFFhw1EA%2BefPsEZDyeWra7YaUSu5LWjl67mnG9ZNJPuhnzZ9iaLECbwQ2%2FAIWZfBOZLF12EM%2Bw%2BRKaz8DuXhp%2BnmMkQ&X-Amz-Signature=b946738d1240ae33461941183b092a02a937b3d03ef4cb13ae2445eb71fcaa70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
