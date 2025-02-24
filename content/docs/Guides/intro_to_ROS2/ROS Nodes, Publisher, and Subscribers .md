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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647RZI55F%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T161002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfgczHGW1g%2Fyk7W%2BgbJkQbMe0dQlQWYdfWvGzqI%2BSelAiBAhAvvzdPBAmFiVpInzCg6UrRSUo2Cz3CwDY2eNHsR0ir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMO0S%2Fn3F4oTysFk78KtwDo%2B9PH2uY9fK1Rr3NVRljrp2DXbBp0sPfsf2eJrhscxkbuzcTV2w2XRgJknG1aCnsN9vXr%2BNs%2BMMkbRb5tXWwYY3dpmBvP3lX20YmWHhF9eQt29FBQgL1dOGJpM9h%2BNDyUtuLLpIblvqY1cIU%2FX95ZkoLJQitMBjoh28jiurXCN5z%2FfBfSPd1TU%2B7%2Fd32yN32f0XHRw80IBujeuiWX9k0UzFMoePPPXibWkVLxSVq2hkFwT8rSmPLC8UEqgMlTg6kg64nvZ1GZy4boiDeNjbHVynIUXFbcHfUd%2FLgZ%2BixXOeqMGTfx9bhuROIsTLcXW3blbBJPzS5avEF%2FqJT4vVwXIx3XblADRb9xDP73x59Oci24yofDAV6YYjuIAIAyApFwRzxSheXCvFkUny85s6HL8gj%2Fu8MPPDo9PXSHrKB7U8AjhPhICUrexfB69lSWwbUZT6lHpyPtUvx6HVg8XeE8CbNlBq3p4GKiU4KztDGxc%2B2g0%2Bz4VEwhzc1nAZiboGGHn8pH75M2vVxUlDG980PA4sIIm4siqJBT%2FQC7X0YNig0AOjCIsJWzXdeMMzcvFQzwEOTwwxyJQTJA3cUWcWdriUTlBWMtWL90a29dzGk4gCXFN17ZMUCrnVDouQwppzyvQY6pgGpoaVBirl6HnVfG8Srh1WGab3qypTtRUQ55g6BUf0EzjWwCuQQIrE4vov%2FKpfKp3llqvdGUEq5hubYsFwlGY4DPwQgxR2OXpevxDCLqSr%2BCyDvUTn51dYnTzcaaCVuxLJ7yP4arqhBCktq4%2F1D3%2BZOYdfg2qFbc2v945h6tHYRgmGzZU2Tf4Wxj2GLY8bCfeOA2zlZYWSgd3esF3cpUgs7x2QUhN13&X-Amz-Signature=c9a51b0f9a0bd96a97e63ae24308040d57e8263784090aafe0621736f9776acd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647RZI55F%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfgczHGW1g%2Fyk7W%2BgbJkQbMe0dQlQWYdfWvGzqI%2BSelAiBAhAvvzdPBAmFiVpInzCg6UrRSUo2Cz3CwDY2eNHsR0ir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMO0S%2Fn3F4oTysFk78KtwDo%2B9PH2uY9fK1Rr3NVRljrp2DXbBp0sPfsf2eJrhscxkbuzcTV2w2XRgJknG1aCnsN9vXr%2BNs%2BMMkbRb5tXWwYY3dpmBvP3lX20YmWHhF9eQt29FBQgL1dOGJpM9h%2BNDyUtuLLpIblvqY1cIU%2FX95ZkoLJQitMBjoh28jiurXCN5z%2FfBfSPd1TU%2B7%2Fd32yN32f0XHRw80IBujeuiWX9k0UzFMoePPPXibWkVLxSVq2hkFwT8rSmPLC8UEqgMlTg6kg64nvZ1GZy4boiDeNjbHVynIUXFbcHfUd%2FLgZ%2BixXOeqMGTfx9bhuROIsTLcXW3blbBJPzS5avEF%2FqJT4vVwXIx3XblADRb9xDP73x59Oci24yofDAV6YYjuIAIAyApFwRzxSheXCvFkUny85s6HL8gj%2Fu8MPPDo9PXSHrKB7U8AjhPhICUrexfB69lSWwbUZT6lHpyPtUvx6HVg8XeE8CbNlBq3p4GKiU4KztDGxc%2B2g0%2Bz4VEwhzc1nAZiboGGHn8pH75M2vVxUlDG980PA4sIIm4siqJBT%2FQC7X0YNig0AOjCIsJWzXdeMMzcvFQzwEOTwwxyJQTJA3cUWcWdriUTlBWMtWL90a29dzGk4gCXFN17ZMUCrnVDouQwppzyvQY6pgGpoaVBirl6HnVfG8Srh1WGab3qypTtRUQ55g6BUf0EzjWwCuQQIrE4vov%2FKpfKp3llqvdGUEq5hubYsFwlGY4DPwQgxR2OXpevxDCLqSr%2BCyDvUTn51dYnTzcaaCVuxLJ7yP4arqhBCktq4%2F1D3%2BZOYdfg2qFbc2v945h6tHYRgmGzZU2Tf4Wxj2GLY8bCfeOA2zlZYWSgd3esF3cpUgs7x2QUhN13&X-Amz-Signature=1527878484e100a821754edd29a90eb187dc1578bbe30547c96ac835b0ac25ff&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647RZI55F%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T161002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfgczHGW1g%2Fyk7W%2BgbJkQbMe0dQlQWYdfWvGzqI%2BSelAiBAhAvvzdPBAmFiVpInzCg6UrRSUo2Cz3CwDY2eNHsR0ir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMO0S%2Fn3F4oTysFk78KtwDo%2B9PH2uY9fK1Rr3NVRljrp2DXbBp0sPfsf2eJrhscxkbuzcTV2w2XRgJknG1aCnsN9vXr%2BNs%2BMMkbRb5tXWwYY3dpmBvP3lX20YmWHhF9eQt29FBQgL1dOGJpM9h%2BNDyUtuLLpIblvqY1cIU%2FX95ZkoLJQitMBjoh28jiurXCN5z%2FfBfSPd1TU%2B7%2Fd32yN32f0XHRw80IBujeuiWX9k0UzFMoePPPXibWkVLxSVq2hkFwT8rSmPLC8UEqgMlTg6kg64nvZ1GZy4boiDeNjbHVynIUXFbcHfUd%2FLgZ%2BixXOeqMGTfx9bhuROIsTLcXW3blbBJPzS5avEF%2FqJT4vVwXIx3XblADRb9xDP73x59Oci24yofDAV6YYjuIAIAyApFwRzxSheXCvFkUny85s6HL8gj%2Fu8MPPDo9PXSHrKB7U8AjhPhICUrexfB69lSWwbUZT6lHpyPtUvx6HVg8XeE8CbNlBq3p4GKiU4KztDGxc%2B2g0%2Bz4VEwhzc1nAZiboGGHn8pH75M2vVxUlDG980PA4sIIm4siqJBT%2FQC7X0YNig0AOjCIsJWzXdeMMzcvFQzwEOTwwxyJQTJA3cUWcWdriUTlBWMtWL90a29dzGk4gCXFN17ZMUCrnVDouQwppzyvQY6pgGpoaVBirl6HnVfG8Srh1WGab3qypTtRUQ55g6BUf0EzjWwCuQQIrE4vov%2FKpfKp3llqvdGUEq5hubYsFwlGY4DPwQgxR2OXpevxDCLqSr%2BCyDvUTn51dYnTzcaaCVuxLJ7yP4arqhBCktq4%2F1D3%2BZOYdfg2qFbc2v945h6tHYRgmGzZU2Tf4Wxj2GLY8bCfeOA2zlZYWSgd3esF3cpUgs7x2QUhN13&X-Amz-Signature=b64d38c56e9d0f2e58befaac8eec95d3ef0a0375a39f3be9a131e846c0537fb9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647RZI55F%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T161002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfgczHGW1g%2Fyk7W%2BgbJkQbMe0dQlQWYdfWvGzqI%2BSelAiBAhAvvzdPBAmFiVpInzCg6UrRSUo2Cz3CwDY2eNHsR0ir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMO0S%2Fn3F4oTysFk78KtwDo%2B9PH2uY9fK1Rr3NVRljrp2DXbBp0sPfsf2eJrhscxkbuzcTV2w2XRgJknG1aCnsN9vXr%2BNs%2BMMkbRb5tXWwYY3dpmBvP3lX20YmWHhF9eQt29FBQgL1dOGJpM9h%2BNDyUtuLLpIblvqY1cIU%2FX95ZkoLJQitMBjoh28jiurXCN5z%2FfBfSPd1TU%2B7%2Fd32yN32f0XHRw80IBujeuiWX9k0UzFMoePPPXibWkVLxSVq2hkFwT8rSmPLC8UEqgMlTg6kg64nvZ1GZy4boiDeNjbHVynIUXFbcHfUd%2FLgZ%2BixXOeqMGTfx9bhuROIsTLcXW3blbBJPzS5avEF%2FqJT4vVwXIx3XblADRb9xDP73x59Oci24yofDAV6YYjuIAIAyApFwRzxSheXCvFkUny85s6HL8gj%2Fu8MPPDo9PXSHrKB7U8AjhPhICUrexfB69lSWwbUZT6lHpyPtUvx6HVg8XeE8CbNlBq3p4GKiU4KztDGxc%2B2g0%2Bz4VEwhzc1nAZiboGGHn8pH75M2vVxUlDG980PA4sIIm4siqJBT%2FQC7X0YNig0AOjCIsJWzXdeMMzcvFQzwEOTwwxyJQTJA3cUWcWdriUTlBWMtWL90a29dzGk4gCXFN17ZMUCrnVDouQwppzyvQY6pgGpoaVBirl6HnVfG8Srh1WGab3qypTtRUQ55g6BUf0EzjWwCuQQIrE4vov%2FKpfKp3llqvdGUEq5hubYsFwlGY4DPwQgxR2OXpevxDCLqSr%2BCyDvUTn51dYnTzcaaCVuxLJ7yP4arqhBCktq4%2F1D3%2BZOYdfg2qFbc2v945h6tHYRgmGzZU2Tf4Wxj2GLY8bCfeOA2zlZYWSgd3esF3cpUgs7x2QUhN13&X-Amz-Signature=619de33a10c11551ab23d245dfbd7258a0ccdd3e2fac15c9976acf538c8705ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647RZI55F%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T161002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfgczHGW1g%2Fyk7W%2BgbJkQbMe0dQlQWYdfWvGzqI%2BSelAiBAhAvvzdPBAmFiVpInzCg6UrRSUo2Cz3CwDY2eNHsR0ir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMO0S%2Fn3F4oTysFk78KtwDo%2B9PH2uY9fK1Rr3NVRljrp2DXbBp0sPfsf2eJrhscxkbuzcTV2w2XRgJknG1aCnsN9vXr%2BNs%2BMMkbRb5tXWwYY3dpmBvP3lX20YmWHhF9eQt29FBQgL1dOGJpM9h%2BNDyUtuLLpIblvqY1cIU%2FX95ZkoLJQitMBjoh28jiurXCN5z%2FfBfSPd1TU%2B7%2Fd32yN32f0XHRw80IBujeuiWX9k0UzFMoePPPXibWkVLxSVq2hkFwT8rSmPLC8UEqgMlTg6kg64nvZ1GZy4boiDeNjbHVynIUXFbcHfUd%2FLgZ%2BixXOeqMGTfx9bhuROIsTLcXW3blbBJPzS5avEF%2FqJT4vVwXIx3XblADRb9xDP73x59Oci24yofDAV6YYjuIAIAyApFwRzxSheXCvFkUny85s6HL8gj%2Fu8MPPDo9PXSHrKB7U8AjhPhICUrexfB69lSWwbUZT6lHpyPtUvx6HVg8XeE8CbNlBq3p4GKiU4KztDGxc%2B2g0%2Bz4VEwhzc1nAZiboGGHn8pH75M2vVxUlDG980PA4sIIm4siqJBT%2FQC7X0YNig0AOjCIsJWzXdeMMzcvFQzwEOTwwxyJQTJA3cUWcWdriUTlBWMtWL90a29dzGk4gCXFN17ZMUCrnVDouQwppzyvQY6pgGpoaVBirl6HnVfG8Srh1WGab3qypTtRUQ55g6BUf0EzjWwCuQQIrE4vov%2FKpfKp3llqvdGUEq5hubYsFwlGY4DPwQgxR2OXpevxDCLqSr%2BCyDvUTn51dYnTzcaaCVuxLJ7yP4arqhBCktq4%2F1D3%2BZOYdfg2qFbc2v945h6tHYRgmGzZU2Tf4Wxj2GLY8bCfeOA2zlZYWSgd3esF3cpUgs7x2QUhN13&X-Amz-Signature=84262e7f89dfe2fe83d08e92c663bdaa3f3ab637b43a94ac062dfc32510dffcb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647RZI55F%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T161002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfgczHGW1g%2Fyk7W%2BgbJkQbMe0dQlQWYdfWvGzqI%2BSelAiBAhAvvzdPBAmFiVpInzCg6UrRSUo2Cz3CwDY2eNHsR0ir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMO0S%2Fn3F4oTysFk78KtwDo%2B9PH2uY9fK1Rr3NVRljrp2DXbBp0sPfsf2eJrhscxkbuzcTV2w2XRgJknG1aCnsN9vXr%2BNs%2BMMkbRb5tXWwYY3dpmBvP3lX20YmWHhF9eQt29FBQgL1dOGJpM9h%2BNDyUtuLLpIblvqY1cIU%2FX95ZkoLJQitMBjoh28jiurXCN5z%2FfBfSPd1TU%2B7%2Fd32yN32f0XHRw80IBujeuiWX9k0UzFMoePPPXibWkVLxSVq2hkFwT8rSmPLC8UEqgMlTg6kg64nvZ1GZy4boiDeNjbHVynIUXFbcHfUd%2FLgZ%2BixXOeqMGTfx9bhuROIsTLcXW3blbBJPzS5avEF%2FqJT4vVwXIx3XblADRb9xDP73x59Oci24yofDAV6YYjuIAIAyApFwRzxSheXCvFkUny85s6HL8gj%2Fu8MPPDo9PXSHrKB7U8AjhPhICUrexfB69lSWwbUZT6lHpyPtUvx6HVg8XeE8CbNlBq3p4GKiU4KztDGxc%2B2g0%2Bz4VEwhzc1nAZiboGGHn8pH75M2vVxUlDG980PA4sIIm4siqJBT%2FQC7X0YNig0AOjCIsJWzXdeMMzcvFQzwEOTwwxyJQTJA3cUWcWdriUTlBWMtWL90a29dzGk4gCXFN17ZMUCrnVDouQwppzyvQY6pgGpoaVBirl6HnVfG8Srh1WGab3qypTtRUQ55g6BUf0EzjWwCuQQIrE4vov%2FKpfKp3llqvdGUEq5hubYsFwlGY4DPwQgxR2OXpevxDCLqSr%2BCyDvUTn51dYnTzcaaCVuxLJ7yP4arqhBCktq4%2F1D3%2BZOYdfg2qFbc2v945h6tHYRgmGzZU2Tf4Wxj2GLY8bCfeOA2zlZYWSgd3esF3cpUgs7x2QUhN13&X-Amz-Signature=1d8e1da12aaf9e07c49c3820e4b06e35e21921b62b9f4250e22fd32c604050ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647RZI55F%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T161002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfgczHGW1g%2Fyk7W%2BgbJkQbMe0dQlQWYdfWvGzqI%2BSelAiBAhAvvzdPBAmFiVpInzCg6UrRSUo2Cz3CwDY2eNHsR0ir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMO0S%2Fn3F4oTysFk78KtwDo%2B9PH2uY9fK1Rr3NVRljrp2DXbBp0sPfsf2eJrhscxkbuzcTV2w2XRgJknG1aCnsN9vXr%2BNs%2BMMkbRb5tXWwYY3dpmBvP3lX20YmWHhF9eQt29FBQgL1dOGJpM9h%2BNDyUtuLLpIblvqY1cIU%2FX95ZkoLJQitMBjoh28jiurXCN5z%2FfBfSPd1TU%2B7%2Fd32yN32f0XHRw80IBujeuiWX9k0UzFMoePPPXibWkVLxSVq2hkFwT8rSmPLC8UEqgMlTg6kg64nvZ1GZy4boiDeNjbHVynIUXFbcHfUd%2FLgZ%2BixXOeqMGTfx9bhuROIsTLcXW3blbBJPzS5avEF%2FqJT4vVwXIx3XblADRb9xDP73x59Oci24yofDAV6YYjuIAIAyApFwRzxSheXCvFkUny85s6HL8gj%2Fu8MPPDo9PXSHrKB7U8AjhPhICUrexfB69lSWwbUZT6lHpyPtUvx6HVg8XeE8CbNlBq3p4GKiU4KztDGxc%2B2g0%2Bz4VEwhzc1nAZiboGGHn8pH75M2vVxUlDG980PA4sIIm4siqJBT%2FQC7X0YNig0AOjCIsJWzXdeMMzcvFQzwEOTwwxyJQTJA3cUWcWdriUTlBWMtWL90a29dzGk4gCXFN17ZMUCrnVDouQwppzyvQY6pgGpoaVBirl6HnVfG8Srh1WGab3qypTtRUQ55g6BUf0EzjWwCuQQIrE4vov%2FKpfKp3llqvdGUEq5hubYsFwlGY4DPwQgxR2OXpevxDCLqSr%2BCyDvUTn51dYnTzcaaCVuxLJ7yP4arqhBCktq4%2F1D3%2BZOYdfg2qFbc2v945h6tHYRgmGzZU2Tf4Wxj2GLY8bCfeOA2zlZYWSgd3esF3cpUgs7x2QUhN13&X-Amz-Signature=39771c97ce4e0c64679dc422b4195a87859b65e3fb24cd58e49d0725721ceafd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647RZI55F%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T161002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfgczHGW1g%2Fyk7W%2BgbJkQbMe0dQlQWYdfWvGzqI%2BSelAiBAhAvvzdPBAmFiVpInzCg6UrRSUo2Cz3CwDY2eNHsR0ir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMO0S%2Fn3F4oTysFk78KtwDo%2B9PH2uY9fK1Rr3NVRljrp2DXbBp0sPfsf2eJrhscxkbuzcTV2w2XRgJknG1aCnsN9vXr%2BNs%2BMMkbRb5tXWwYY3dpmBvP3lX20YmWHhF9eQt29FBQgL1dOGJpM9h%2BNDyUtuLLpIblvqY1cIU%2FX95ZkoLJQitMBjoh28jiurXCN5z%2FfBfSPd1TU%2B7%2Fd32yN32f0XHRw80IBujeuiWX9k0UzFMoePPPXibWkVLxSVq2hkFwT8rSmPLC8UEqgMlTg6kg64nvZ1GZy4boiDeNjbHVynIUXFbcHfUd%2FLgZ%2BixXOeqMGTfx9bhuROIsTLcXW3blbBJPzS5avEF%2FqJT4vVwXIx3XblADRb9xDP73x59Oci24yofDAV6YYjuIAIAyApFwRzxSheXCvFkUny85s6HL8gj%2Fu8MPPDo9PXSHrKB7U8AjhPhICUrexfB69lSWwbUZT6lHpyPtUvx6HVg8XeE8CbNlBq3p4GKiU4KztDGxc%2B2g0%2Bz4VEwhzc1nAZiboGGHn8pH75M2vVxUlDG980PA4sIIm4siqJBT%2FQC7X0YNig0AOjCIsJWzXdeMMzcvFQzwEOTwwxyJQTJA3cUWcWdriUTlBWMtWL90a29dzGk4gCXFN17ZMUCrnVDouQwppzyvQY6pgGpoaVBirl6HnVfG8Srh1WGab3qypTtRUQ55g6BUf0EzjWwCuQQIrE4vov%2FKpfKp3llqvdGUEq5hubYsFwlGY4DPwQgxR2OXpevxDCLqSr%2BCyDvUTn51dYnTzcaaCVuxLJ7yP4arqhBCktq4%2F1D3%2BZOYdfg2qFbc2v945h6tHYRgmGzZU2Tf4Wxj2GLY8bCfeOA2zlZYWSgd3esF3cpUgs7x2QUhN13&X-Amz-Signature=d123d9e9302431a590d2677440ceb2bb10468fa43ef02e05a2f3768c1fd3e28d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
