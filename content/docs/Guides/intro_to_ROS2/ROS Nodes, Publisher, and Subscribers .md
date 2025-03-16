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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ALC2E3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ92HPLDPhFeSphVtndS0oMD9w4Zs0QieUCXI%2FNDRyBgIhAISAgdexW5Y7z9%2FSuzvSyRhQPKZr%2Bpu9Opg9G%2FYiCPzCKv8DCDEQABoMNjM3NDIzMTgzODA1Igx4vJl7nUBT2lXXRJAq3APjdFZLHMTeTgrMuUkSIy0uHMMUVF63g%2B4q%2FPq6a7hSsUHLG9yHtXtR5Cr7AVK1OerADVadkG6zS8Ieke6JNXsnDPwhOwlEh5%2FJmC%2BNDe6GUYrSh1FlsRjcyRAwFVHs2VbGOUZvfNucmyByin3gHh9XAqnnbz27eu1DjYmv7xEQq99bbXtFCEA8hKD0HqshLzkwZkJ3fCOEhQwylaKO5TY9hCS5Ac2hi8rWDYCQLqSaYNt5HHasmB4BuuV6n3aSkexNGOq7ovN87Kau5UFq6XM9mmA83wtky4n%2B%2B%2F1ejxk5Q9D2ESzt6j3rQUJ0A9QHgZD9SwutefGnitkYF8%2Fz306hPv%2BcJE7rsO4fEq8hKXcPMYHQemWqbSuyWxjWg8ZGcg12PqdtPiezlYPT65aMqwiDp%2FLIyBeCd00yVDH2kXjDzxw7wSYvloJGtzEDz7zov8n16mUz8ZE5P5M5htZVtg06EncID0R6NEE1dlvcrggFy9F7W%2BrAwZoyQcD%2Bc%2F9RqAQZuozdn4gNUN6eQZ7tvx%2F8hDOpdKT7B4PMK4G9VqyZcPYGGdbBP2gi1xutDvjGSAgSWjv1NAe1Fq%2F1e0x%2BHz03sBtaBd3NeWf4UbwRlyXICy%2Fo8ojaDehn7QmPNjC43tu%2BBjqkAZuMwZTH31WbWpB9u61xCANbogxaRYQxYQP8PEobWH38rT0PP76Sx8up6pM%2FfDScRicShUXOWXV3Iq8zabdo9AqiFJCn%2Fp7cNih%2BA6ykGnQXLo3mB0FjT2zagl0kUfWxn2U62rxbowuYcJ2QDCrgvlq0ikLNDbIncKi6%2Bo2Nf8VEzin1VA0os21Wl%2F3i2gB9OoKgoBHCEKu%2Bdm0kGvcDMIlb0319&X-Amz-Signature=58737162daf4d8c5e33c0670decc7fa102506389be4a09c70af0f9e5d904a414&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ALC2E3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ92HPLDPhFeSphVtndS0oMD9w4Zs0QieUCXI%2FNDRyBgIhAISAgdexW5Y7z9%2FSuzvSyRhQPKZr%2Bpu9Opg9G%2FYiCPzCKv8DCDEQABoMNjM3NDIzMTgzODA1Igx4vJl7nUBT2lXXRJAq3APjdFZLHMTeTgrMuUkSIy0uHMMUVF63g%2B4q%2FPq6a7hSsUHLG9yHtXtR5Cr7AVK1OerADVadkG6zS8Ieke6JNXsnDPwhOwlEh5%2FJmC%2BNDe6GUYrSh1FlsRjcyRAwFVHs2VbGOUZvfNucmyByin3gHh9XAqnnbz27eu1DjYmv7xEQq99bbXtFCEA8hKD0HqshLzkwZkJ3fCOEhQwylaKO5TY9hCS5Ac2hi8rWDYCQLqSaYNt5HHasmB4BuuV6n3aSkexNGOq7ovN87Kau5UFq6XM9mmA83wtky4n%2B%2B%2F1ejxk5Q9D2ESzt6j3rQUJ0A9QHgZD9SwutefGnitkYF8%2Fz306hPv%2BcJE7rsO4fEq8hKXcPMYHQemWqbSuyWxjWg8ZGcg12PqdtPiezlYPT65aMqwiDp%2FLIyBeCd00yVDH2kXjDzxw7wSYvloJGtzEDz7zov8n16mUz8ZE5P5M5htZVtg06EncID0R6NEE1dlvcrggFy9F7W%2BrAwZoyQcD%2Bc%2F9RqAQZuozdn4gNUN6eQZ7tvx%2F8hDOpdKT7B4PMK4G9VqyZcPYGGdbBP2gi1xutDvjGSAgSWjv1NAe1Fq%2F1e0x%2BHz03sBtaBd3NeWf4UbwRlyXICy%2Fo8ojaDehn7QmPNjC43tu%2BBjqkAZuMwZTH31WbWpB9u61xCANbogxaRYQxYQP8PEobWH38rT0PP76Sx8up6pM%2FfDScRicShUXOWXV3Iq8zabdo9AqiFJCn%2Fp7cNih%2BA6ykGnQXLo3mB0FjT2zagl0kUfWxn2U62rxbowuYcJ2QDCrgvlq0ikLNDbIncKi6%2Bo2Nf8VEzin1VA0os21Wl%2F3i2gB9OoKgoBHCEKu%2Bdm0kGvcDMIlb0319&X-Amz-Signature=24e7fb8667f2216770ed4add55149009c222dab95050d26e7e24048144c90ad1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ALC2E3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ92HPLDPhFeSphVtndS0oMD9w4Zs0QieUCXI%2FNDRyBgIhAISAgdexW5Y7z9%2FSuzvSyRhQPKZr%2Bpu9Opg9G%2FYiCPzCKv8DCDEQABoMNjM3NDIzMTgzODA1Igx4vJl7nUBT2lXXRJAq3APjdFZLHMTeTgrMuUkSIy0uHMMUVF63g%2B4q%2FPq6a7hSsUHLG9yHtXtR5Cr7AVK1OerADVadkG6zS8Ieke6JNXsnDPwhOwlEh5%2FJmC%2BNDe6GUYrSh1FlsRjcyRAwFVHs2VbGOUZvfNucmyByin3gHh9XAqnnbz27eu1DjYmv7xEQq99bbXtFCEA8hKD0HqshLzkwZkJ3fCOEhQwylaKO5TY9hCS5Ac2hi8rWDYCQLqSaYNt5HHasmB4BuuV6n3aSkexNGOq7ovN87Kau5UFq6XM9mmA83wtky4n%2B%2B%2F1ejxk5Q9D2ESzt6j3rQUJ0A9QHgZD9SwutefGnitkYF8%2Fz306hPv%2BcJE7rsO4fEq8hKXcPMYHQemWqbSuyWxjWg8ZGcg12PqdtPiezlYPT65aMqwiDp%2FLIyBeCd00yVDH2kXjDzxw7wSYvloJGtzEDz7zov8n16mUz8ZE5P5M5htZVtg06EncID0R6NEE1dlvcrggFy9F7W%2BrAwZoyQcD%2Bc%2F9RqAQZuozdn4gNUN6eQZ7tvx%2F8hDOpdKT7B4PMK4G9VqyZcPYGGdbBP2gi1xutDvjGSAgSWjv1NAe1Fq%2F1e0x%2BHz03sBtaBd3NeWf4UbwRlyXICy%2Fo8ojaDehn7QmPNjC43tu%2BBjqkAZuMwZTH31WbWpB9u61xCANbogxaRYQxYQP8PEobWH38rT0PP76Sx8up6pM%2FfDScRicShUXOWXV3Iq8zabdo9AqiFJCn%2Fp7cNih%2BA6ykGnQXLo3mB0FjT2zagl0kUfWxn2U62rxbowuYcJ2QDCrgvlq0ikLNDbIncKi6%2Bo2Nf8VEzin1VA0os21Wl%2F3i2gB9OoKgoBHCEKu%2Bdm0kGvcDMIlb0319&X-Amz-Signature=e4295c265fd9091e09576f87d5ba3d71d0e6423e2a38185fe3414904710b1824&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ALC2E3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ92HPLDPhFeSphVtndS0oMD9w4Zs0QieUCXI%2FNDRyBgIhAISAgdexW5Y7z9%2FSuzvSyRhQPKZr%2Bpu9Opg9G%2FYiCPzCKv8DCDEQABoMNjM3NDIzMTgzODA1Igx4vJl7nUBT2lXXRJAq3APjdFZLHMTeTgrMuUkSIy0uHMMUVF63g%2B4q%2FPq6a7hSsUHLG9yHtXtR5Cr7AVK1OerADVadkG6zS8Ieke6JNXsnDPwhOwlEh5%2FJmC%2BNDe6GUYrSh1FlsRjcyRAwFVHs2VbGOUZvfNucmyByin3gHh9XAqnnbz27eu1DjYmv7xEQq99bbXtFCEA8hKD0HqshLzkwZkJ3fCOEhQwylaKO5TY9hCS5Ac2hi8rWDYCQLqSaYNt5HHasmB4BuuV6n3aSkexNGOq7ovN87Kau5UFq6XM9mmA83wtky4n%2B%2B%2F1ejxk5Q9D2ESzt6j3rQUJ0A9QHgZD9SwutefGnitkYF8%2Fz306hPv%2BcJE7rsO4fEq8hKXcPMYHQemWqbSuyWxjWg8ZGcg12PqdtPiezlYPT65aMqwiDp%2FLIyBeCd00yVDH2kXjDzxw7wSYvloJGtzEDz7zov8n16mUz8ZE5P5M5htZVtg06EncID0R6NEE1dlvcrggFy9F7W%2BrAwZoyQcD%2Bc%2F9RqAQZuozdn4gNUN6eQZ7tvx%2F8hDOpdKT7B4PMK4G9VqyZcPYGGdbBP2gi1xutDvjGSAgSWjv1NAe1Fq%2F1e0x%2BHz03sBtaBd3NeWf4UbwRlyXICy%2Fo8ojaDehn7QmPNjC43tu%2BBjqkAZuMwZTH31WbWpB9u61xCANbogxaRYQxYQP8PEobWH38rT0PP76Sx8up6pM%2FfDScRicShUXOWXV3Iq8zabdo9AqiFJCn%2Fp7cNih%2BA6ykGnQXLo3mB0FjT2zagl0kUfWxn2U62rxbowuYcJ2QDCrgvlq0ikLNDbIncKi6%2Bo2Nf8VEzin1VA0os21Wl%2F3i2gB9OoKgoBHCEKu%2Bdm0kGvcDMIlb0319&X-Amz-Signature=5d920912bc43bab3a9918ba3f37ce63c09dee5a58f54b07b2aa8c2f3ed2205c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ALC2E3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ92HPLDPhFeSphVtndS0oMD9w4Zs0QieUCXI%2FNDRyBgIhAISAgdexW5Y7z9%2FSuzvSyRhQPKZr%2Bpu9Opg9G%2FYiCPzCKv8DCDEQABoMNjM3NDIzMTgzODA1Igx4vJl7nUBT2lXXRJAq3APjdFZLHMTeTgrMuUkSIy0uHMMUVF63g%2B4q%2FPq6a7hSsUHLG9yHtXtR5Cr7AVK1OerADVadkG6zS8Ieke6JNXsnDPwhOwlEh5%2FJmC%2BNDe6GUYrSh1FlsRjcyRAwFVHs2VbGOUZvfNucmyByin3gHh9XAqnnbz27eu1DjYmv7xEQq99bbXtFCEA8hKD0HqshLzkwZkJ3fCOEhQwylaKO5TY9hCS5Ac2hi8rWDYCQLqSaYNt5HHasmB4BuuV6n3aSkexNGOq7ovN87Kau5UFq6XM9mmA83wtky4n%2B%2B%2F1ejxk5Q9D2ESzt6j3rQUJ0A9QHgZD9SwutefGnitkYF8%2Fz306hPv%2BcJE7rsO4fEq8hKXcPMYHQemWqbSuyWxjWg8ZGcg12PqdtPiezlYPT65aMqwiDp%2FLIyBeCd00yVDH2kXjDzxw7wSYvloJGtzEDz7zov8n16mUz8ZE5P5M5htZVtg06EncID0R6NEE1dlvcrggFy9F7W%2BrAwZoyQcD%2Bc%2F9RqAQZuozdn4gNUN6eQZ7tvx%2F8hDOpdKT7B4PMK4G9VqyZcPYGGdbBP2gi1xutDvjGSAgSWjv1NAe1Fq%2F1e0x%2BHz03sBtaBd3NeWf4UbwRlyXICy%2Fo8ojaDehn7QmPNjC43tu%2BBjqkAZuMwZTH31WbWpB9u61xCANbogxaRYQxYQP8PEobWH38rT0PP76Sx8up6pM%2FfDScRicShUXOWXV3Iq8zabdo9AqiFJCn%2Fp7cNih%2BA6ykGnQXLo3mB0FjT2zagl0kUfWxn2U62rxbowuYcJ2QDCrgvlq0ikLNDbIncKi6%2Bo2Nf8VEzin1VA0os21Wl%2F3i2gB9OoKgoBHCEKu%2Bdm0kGvcDMIlb0319&X-Amz-Signature=a4be42038c483c4b652a9016e6612b25aaeacd6b9cb897649e74866de646a8a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ALC2E3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ92HPLDPhFeSphVtndS0oMD9w4Zs0QieUCXI%2FNDRyBgIhAISAgdexW5Y7z9%2FSuzvSyRhQPKZr%2Bpu9Opg9G%2FYiCPzCKv8DCDEQABoMNjM3NDIzMTgzODA1Igx4vJl7nUBT2lXXRJAq3APjdFZLHMTeTgrMuUkSIy0uHMMUVF63g%2B4q%2FPq6a7hSsUHLG9yHtXtR5Cr7AVK1OerADVadkG6zS8Ieke6JNXsnDPwhOwlEh5%2FJmC%2BNDe6GUYrSh1FlsRjcyRAwFVHs2VbGOUZvfNucmyByin3gHh9XAqnnbz27eu1DjYmv7xEQq99bbXtFCEA8hKD0HqshLzkwZkJ3fCOEhQwylaKO5TY9hCS5Ac2hi8rWDYCQLqSaYNt5HHasmB4BuuV6n3aSkexNGOq7ovN87Kau5UFq6XM9mmA83wtky4n%2B%2B%2F1ejxk5Q9D2ESzt6j3rQUJ0A9QHgZD9SwutefGnitkYF8%2Fz306hPv%2BcJE7rsO4fEq8hKXcPMYHQemWqbSuyWxjWg8ZGcg12PqdtPiezlYPT65aMqwiDp%2FLIyBeCd00yVDH2kXjDzxw7wSYvloJGtzEDz7zov8n16mUz8ZE5P5M5htZVtg06EncID0R6NEE1dlvcrggFy9F7W%2BrAwZoyQcD%2Bc%2F9RqAQZuozdn4gNUN6eQZ7tvx%2F8hDOpdKT7B4PMK4G9VqyZcPYGGdbBP2gi1xutDvjGSAgSWjv1NAe1Fq%2F1e0x%2BHz03sBtaBd3NeWf4UbwRlyXICy%2Fo8ojaDehn7QmPNjC43tu%2BBjqkAZuMwZTH31WbWpB9u61xCANbogxaRYQxYQP8PEobWH38rT0PP76Sx8up6pM%2FfDScRicShUXOWXV3Iq8zabdo9AqiFJCn%2Fp7cNih%2BA6ykGnQXLo3mB0FjT2zagl0kUfWxn2U62rxbowuYcJ2QDCrgvlq0ikLNDbIncKi6%2Bo2Nf8VEzin1VA0os21Wl%2F3i2gB9OoKgoBHCEKu%2Bdm0kGvcDMIlb0319&X-Amz-Signature=1cec3692005a0959703f490f5eace733c982311dccc7eba17567fc8df5c9288f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ALC2E3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ92HPLDPhFeSphVtndS0oMD9w4Zs0QieUCXI%2FNDRyBgIhAISAgdexW5Y7z9%2FSuzvSyRhQPKZr%2Bpu9Opg9G%2FYiCPzCKv8DCDEQABoMNjM3NDIzMTgzODA1Igx4vJl7nUBT2lXXRJAq3APjdFZLHMTeTgrMuUkSIy0uHMMUVF63g%2B4q%2FPq6a7hSsUHLG9yHtXtR5Cr7AVK1OerADVadkG6zS8Ieke6JNXsnDPwhOwlEh5%2FJmC%2BNDe6GUYrSh1FlsRjcyRAwFVHs2VbGOUZvfNucmyByin3gHh9XAqnnbz27eu1DjYmv7xEQq99bbXtFCEA8hKD0HqshLzkwZkJ3fCOEhQwylaKO5TY9hCS5Ac2hi8rWDYCQLqSaYNt5HHasmB4BuuV6n3aSkexNGOq7ovN87Kau5UFq6XM9mmA83wtky4n%2B%2B%2F1ejxk5Q9D2ESzt6j3rQUJ0A9QHgZD9SwutefGnitkYF8%2Fz306hPv%2BcJE7rsO4fEq8hKXcPMYHQemWqbSuyWxjWg8ZGcg12PqdtPiezlYPT65aMqwiDp%2FLIyBeCd00yVDH2kXjDzxw7wSYvloJGtzEDz7zov8n16mUz8ZE5P5M5htZVtg06EncID0R6NEE1dlvcrggFy9F7W%2BrAwZoyQcD%2Bc%2F9RqAQZuozdn4gNUN6eQZ7tvx%2F8hDOpdKT7B4PMK4G9VqyZcPYGGdbBP2gi1xutDvjGSAgSWjv1NAe1Fq%2F1e0x%2BHz03sBtaBd3NeWf4UbwRlyXICy%2Fo8ojaDehn7QmPNjC43tu%2BBjqkAZuMwZTH31WbWpB9u61xCANbogxaRYQxYQP8PEobWH38rT0PP76Sx8up6pM%2FfDScRicShUXOWXV3Iq8zabdo9AqiFJCn%2Fp7cNih%2BA6ykGnQXLo3mB0FjT2zagl0kUfWxn2U62rxbowuYcJ2QDCrgvlq0ikLNDbIncKi6%2Bo2Nf8VEzin1VA0os21Wl%2F3i2gB9OoKgoBHCEKu%2Bdm0kGvcDMIlb0319&X-Amz-Signature=2318d436f167be7e3dd1bc7cbaf0d1120955453e375ce91be5f62514bed286e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ALC2E3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ92HPLDPhFeSphVtndS0oMD9w4Zs0QieUCXI%2FNDRyBgIhAISAgdexW5Y7z9%2FSuzvSyRhQPKZr%2Bpu9Opg9G%2FYiCPzCKv8DCDEQABoMNjM3NDIzMTgzODA1Igx4vJl7nUBT2lXXRJAq3APjdFZLHMTeTgrMuUkSIy0uHMMUVF63g%2B4q%2FPq6a7hSsUHLG9yHtXtR5Cr7AVK1OerADVadkG6zS8Ieke6JNXsnDPwhOwlEh5%2FJmC%2BNDe6GUYrSh1FlsRjcyRAwFVHs2VbGOUZvfNucmyByin3gHh9XAqnnbz27eu1DjYmv7xEQq99bbXtFCEA8hKD0HqshLzkwZkJ3fCOEhQwylaKO5TY9hCS5Ac2hi8rWDYCQLqSaYNt5HHasmB4BuuV6n3aSkexNGOq7ovN87Kau5UFq6XM9mmA83wtky4n%2B%2B%2F1ejxk5Q9D2ESzt6j3rQUJ0A9QHgZD9SwutefGnitkYF8%2Fz306hPv%2BcJE7rsO4fEq8hKXcPMYHQemWqbSuyWxjWg8ZGcg12PqdtPiezlYPT65aMqwiDp%2FLIyBeCd00yVDH2kXjDzxw7wSYvloJGtzEDz7zov8n16mUz8ZE5P5M5htZVtg06EncID0R6NEE1dlvcrggFy9F7W%2BrAwZoyQcD%2Bc%2F9RqAQZuozdn4gNUN6eQZ7tvx%2F8hDOpdKT7B4PMK4G9VqyZcPYGGdbBP2gi1xutDvjGSAgSWjv1NAe1Fq%2F1e0x%2BHz03sBtaBd3NeWf4UbwRlyXICy%2Fo8ojaDehn7QmPNjC43tu%2BBjqkAZuMwZTH31WbWpB9u61xCANbogxaRYQxYQP8PEobWH38rT0PP76Sx8up6pM%2FfDScRicShUXOWXV3Iq8zabdo9AqiFJCn%2Fp7cNih%2BA6ykGnQXLo3mB0FjT2zagl0kUfWxn2U62rxbowuYcJ2QDCrgvlq0ikLNDbIncKi6%2Bo2Nf8VEzin1VA0os21Wl%2F3i2gB9OoKgoBHCEKu%2Bdm0kGvcDMIlb0319&X-Amz-Signature=a174782934f25a3cb1a2a25d56357de4551ee8c87f35a638e910ab42385541dc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
