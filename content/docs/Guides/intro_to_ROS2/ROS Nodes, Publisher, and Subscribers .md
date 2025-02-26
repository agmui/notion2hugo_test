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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MVY2DLP%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIFluD3sq1XFKz3AuhzohqnRYcSYVO5XP7RkjoLWOOs7IAiEA%2FIi853gFL5PWhqevBPtkI9LSHLq7rVgR9JsKXGCkJ3Iq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNNyFBwfMLk7AMTQHyrcA9vlm8JuNw293XxEHhq1bg%2FLewPhflZ0H7kDTpA2mdj5nVmA4dhY4mDbElLQXVsDLZHelv7V%2Bz4lkliGG5hijN30R2bC9lY%2B%2BvCKYjem1SVVRqUV3mEESFVF1%2FS%2BTqw3SBY%2B%2BoKXAJgPS2C61%2FSFvQiduXcqWSwI9DnKswLVRLlEP%2BuuRBhl6%2B4O09psHYpikjAHDuq3RynSUNIda6IvNxGZiUH3TElgJm%2B7PKCVM1kUrXUamrXJh51AkfcOcVwL2M1UAwZvOusQVBwZ9t2a2iW9sHNO0UOrgnJrol6XnRC5U7Uf9CbEF30XUJ2uUlmducxzlOEA6sJojH5qXTvg5vUbLUgpTq3Wt79MUgehbnxg1a0aOmk%2BVe9xx9T6PW0zKrfblK%2Bh9opEMMiPtXyOSttYqhKjk%2FDBIO%2FMaRJ10XSO3c7pJnWAxPziZSUL8MEW%2BjYqOnkLjFLEad2%2B8Cgk1tcokkxt1vpJDLorjiiJ4ikV77Nw1daITpCgA8Dejrb%2Bugb44iYvwSompN5oZTG8CIbDLhNa64ygbj1AKpsRUuG7OOZUJEjSNY8OdEbrb3Qe3BodeGw3Tr5tcARK85M8FMEgjVvbCS%2Bv5ojQpZXvtXaW49WV0toleCw6L0DTMNu%2F%2B70GOqUBl%2Be%2FJGoWxS068npZId643gNfFy1hJJmZEJAbttMhToELOr05vqncueNAP0MHtRYn9kz4CK1jrp8tTwFpr2pt%2FJFNWD%2BOMcty%2F3YhoYkPG8DeGmU0rwMI%2Fk%2FCbBtbjyPGu6PQHuLLRqDBOoWZ4Q5dTJw5U24WQ1l2U%2FAFuGDxrHo9r%2Bug3i5hrNEKWjrbBanqnsTnYPYUCjhBbTgVI2nuGOngNblw&X-Amz-Signature=7a153139a066afd5fdfde7738d2673c0685fc2447e7b26a9c76d3639d54359d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MVY2DLP%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIFluD3sq1XFKz3AuhzohqnRYcSYVO5XP7RkjoLWOOs7IAiEA%2FIi853gFL5PWhqevBPtkI9LSHLq7rVgR9JsKXGCkJ3Iq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNNyFBwfMLk7AMTQHyrcA9vlm8JuNw293XxEHhq1bg%2FLewPhflZ0H7kDTpA2mdj5nVmA4dhY4mDbElLQXVsDLZHelv7V%2Bz4lkliGG5hijN30R2bC9lY%2B%2BvCKYjem1SVVRqUV3mEESFVF1%2FS%2BTqw3SBY%2B%2BoKXAJgPS2C61%2FSFvQiduXcqWSwI9DnKswLVRLlEP%2BuuRBhl6%2B4O09psHYpikjAHDuq3RynSUNIda6IvNxGZiUH3TElgJm%2B7PKCVM1kUrXUamrXJh51AkfcOcVwL2M1UAwZvOusQVBwZ9t2a2iW9sHNO0UOrgnJrol6XnRC5U7Uf9CbEF30XUJ2uUlmducxzlOEA6sJojH5qXTvg5vUbLUgpTq3Wt79MUgehbnxg1a0aOmk%2BVe9xx9T6PW0zKrfblK%2Bh9opEMMiPtXyOSttYqhKjk%2FDBIO%2FMaRJ10XSO3c7pJnWAxPziZSUL8MEW%2BjYqOnkLjFLEad2%2B8Cgk1tcokkxt1vpJDLorjiiJ4ikV77Nw1daITpCgA8Dejrb%2Bugb44iYvwSompN5oZTG8CIbDLhNa64ygbj1AKpsRUuG7OOZUJEjSNY8OdEbrb3Qe3BodeGw3Tr5tcARK85M8FMEgjVvbCS%2Bv5ojQpZXvtXaW49WV0toleCw6L0DTMNu%2F%2B70GOqUBl%2Be%2FJGoWxS068npZId643gNfFy1hJJmZEJAbttMhToELOr05vqncueNAP0MHtRYn9kz4CK1jrp8tTwFpr2pt%2FJFNWD%2BOMcty%2F3YhoYkPG8DeGmU0rwMI%2Fk%2FCbBtbjyPGu6PQHuLLRqDBOoWZ4Q5dTJw5U24WQ1l2U%2FAFuGDxrHo9r%2Bug3i5hrNEKWjrbBanqnsTnYPYUCjhBbTgVI2nuGOngNblw&X-Amz-Signature=9b4b4e517ef91dfc4b2f5e273b039cfaee749e24c6acaaedaa5a0630a21f91ec&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MVY2DLP%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIFluD3sq1XFKz3AuhzohqnRYcSYVO5XP7RkjoLWOOs7IAiEA%2FIi853gFL5PWhqevBPtkI9LSHLq7rVgR9JsKXGCkJ3Iq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNNyFBwfMLk7AMTQHyrcA9vlm8JuNw293XxEHhq1bg%2FLewPhflZ0H7kDTpA2mdj5nVmA4dhY4mDbElLQXVsDLZHelv7V%2Bz4lkliGG5hijN30R2bC9lY%2B%2BvCKYjem1SVVRqUV3mEESFVF1%2FS%2BTqw3SBY%2B%2BoKXAJgPS2C61%2FSFvQiduXcqWSwI9DnKswLVRLlEP%2BuuRBhl6%2B4O09psHYpikjAHDuq3RynSUNIda6IvNxGZiUH3TElgJm%2B7PKCVM1kUrXUamrXJh51AkfcOcVwL2M1UAwZvOusQVBwZ9t2a2iW9sHNO0UOrgnJrol6XnRC5U7Uf9CbEF30XUJ2uUlmducxzlOEA6sJojH5qXTvg5vUbLUgpTq3Wt79MUgehbnxg1a0aOmk%2BVe9xx9T6PW0zKrfblK%2Bh9opEMMiPtXyOSttYqhKjk%2FDBIO%2FMaRJ10XSO3c7pJnWAxPziZSUL8MEW%2BjYqOnkLjFLEad2%2B8Cgk1tcokkxt1vpJDLorjiiJ4ikV77Nw1daITpCgA8Dejrb%2Bugb44iYvwSompN5oZTG8CIbDLhNa64ygbj1AKpsRUuG7OOZUJEjSNY8OdEbrb3Qe3BodeGw3Tr5tcARK85M8FMEgjVvbCS%2Bv5ojQpZXvtXaW49WV0toleCw6L0DTMNu%2F%2B70GOqUBl%2Be%2FJGoWxS068npZId643gNfFy1hJJmZEJAbttMhToELOr05vqncueNAP0MHtRYn9kz4CK1jrp8tTwFpr2pt%2FJFNWD%2BOMcty%2F3YhoYkPG8DeGmU0rwMI%2Fk%2FCbBtbjyPGu6PQHuLLRqDBOoWZ4Q5dTJw5U24WQ1l2U%2FAFuGDxrHo9r%2Bug3i5hrNEKWjrbBanqnsTnYPYUCjhBbTgVI2nuGOngNblw&X-Amz-Signature=2d5c6d368226b34f7639e3ea13a8fa27b51ce07b13cd59faaecbf7999b347d0e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MVY2DLP%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIFluD3sq1XFKz3AuhzohqnRYcSYVO5XP7RkjoLWOOs7IAiEA%2FIi853gFL5PWhqevBPtkI9LSHLq7rVgR9JsKXGCkJ3Iq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNNyFBwfMLk7AMTQHyrcA9vlm8JuNw293XxEHhq1bg%2FLewPhflZ0H7kDTpA2mdj5nVmA4dhY4mDbElLQXVsDLZHelv7V%2Bz4lkliGG5hijN30R2bC9lY%2B%2BvCKYjem1SVVRqUV3mEESFVF1%2FS%2BTqw3SBY%2B%2BoKXAJgPS2C61%2FSFvQiduXcqWSwI9DnKswLVRLlEP%2BuuRBhl6%2B4O09psHYpikjAHDuq3RynSUNIda6IvNxGZiUH3TElgJm%2B7PKCVM1kUrXUamrXJh51AkfcOcVwL2M1UAwZvOusQVBwZ9t2a2iW9sHNO0UOrgnJrol6XnRC5U7Uf9CbEF30XUJ2uUlmducxzlOEA6sJojH5qXTvg5vUbLUgpTq3Wt79MUgehbnxg1a0aOmk%2BVe9xx9T6PW0zKrfblK%2Bh9opEMMiPtXyOSttYqhKjk%2FDBIO%2FMaRJ10XSO3c7pJnWAxPziZSUL8MEW%2BjYqOnkLjFLEad2%2B8Cgk1tcokkxt1vpJDLorjiiJ4ikV77Nw1daITpCgA8Dejrb%2Bugb44iYvwSompN5oZTG8CIbDLhNa64ygbj1AKpsRUuG7OOZUJEjSNY8OdEbrb3Qe3BodeGw3Tr5tcARK85M8FMEgjVvbCS%2Bv5ojQpZXvtXaW49WV0toleCw6L0DTMNu%2F%2B70GOqUBl%2Be%2FJGoWxS068npZId643gNfFy1hJJmZEJAbttMhToELOr05vqncueNAP0MHtRYn9kz4CK1jrp8tTwFpr2pt%2FJFNWD%2BOMcty%2F3YhoYkPG8DeGmU0rwMI%2Fk%2FCbBtbjyPGu6PQHuLLRqDBOoWZ4Q5dTJw5U24WQ1l2U%2FAFuGDxrHo9r%2Bug3i5hrNEKWjrbBanqnsTnYPYUCjhBbTgVI2nuGOngNblw&X-Amz-Signature=50abd91aa7d2be78ef55ff79f7f57a820654fc97807bf7b7d145bf5b487e4e07&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MVY2DLP%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIFluD3sq1XFKz3AuhzohqnRYcSYVO5XP7RkjoLWOOs7IAiEA%2FIi853gFL5PWhqevBPtkI9LSHLq7rVgR9JsKXGCkJ3Iq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNNyFBwfMLk7AMTQHyrcA9vlm8JuNw293XxEHhq1bg%2FLewPhflZ0H7kDTpA2mdj5nVmA4dhY4mDbElLQXVsDLZHelv7V%2Bz4lkliGG5hijN30R2bC9lY%2B%2BvCKYjem1SVVRqUV3mEESFVF1%2FS%2BTqw3SBY%2B%2BoKXAJgPS2C61%2FSFvQiduXcqWSwI9DnKswLVRLlEP%2BuuRBhl6%2B4O09psHYpikjAHDuq3RynSUNIda6IvNxGZiUH3TElgJm%2B7PKCVM1kUrXUamrXJh51AkfcOcVwL2M1UAwZvOusQVBwZ9t2a2iW9sHNO0UOrgnJrol6XnRC5U7Uf9CbEF30XUJ2uUlmducxzlOEA6sJojH5qXTvg5vUbLUgpTq3Wt79MUgehbnxg1a0aOmk%2BVe9xx9T6PW0zKrfblK%2Bh9opEMMiPtXyOSttYqhKjk%2FDBIO%2FMaRJ10XSO3c7pJnWAxPziZSUL8MEW%2BjYqOnkLjFLEad2%2B8Cgk1tcokkxt1vpJDLorjiiJ4ikV77Nw1daITpCgA8Dejrb%2Bugb44iYvwSompN5oZTG8CIbDLhNa64ygbj1AKpsRUuG7OOZUJEjSNY8OdEbrb3Qe3BodeGw3Tr5tcARK85M8FMEgjVvbCS%2Bv5ojQpZXvtXaW49WV0toleCw6L0DTMNu%2F%2B70GOqUBl%2Be%2FJGoWxS068npZId643gNfFy1hJJmZEJAbttMhToELOr05vqncueNAP0MHtRYn9kz4CK1jrp8tTwFpr2pt%2FJFNWD%2BOMcty%2F3YhoYkPG8DeGmU0rwMI%2Fk%2FCbBtbjyPGu6PQHuLLRqDBOoWZ4Q5dTJw5U24WQ1l2U%2FAFuGDxrHo9r%2Bug3i5hrNEKWjrbBanqnsTnYPYUCjhBbTgVI2nuGOngNblw&X-Amz-Signature=ee2941021e3f52e99fc79573d1c1eb7db1244ba7a709f4d0485f0edd7d961c8e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MVY2DLP%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIFluD3sq1XFKz3AuhzohqnRYcSYVO5XP7RkjoLWOOs7IAiEA%2FIi853gFL5PWhqevBPtkI9LSHLq7rVgR9JsKXGCkJ3Iq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNNyFBwfMLk7AMTQHyrcA9vlm8JuNw293XxEHhq1bg%2FLewPhflZ0H7kDTpA2mdj5nVmA4dhY4mDbElLQXVsDLZHelv7V%2Bz4lkliGG5hijN30R2bC9lY%2B%2BvCKYjem1SVVRqUV3mEESFVF1%2FS%2BTqw3SBY%2B%2BoKXAJgPS2C61%2FSFvQiduXcqWSwI9DnKswLVRLlEP%2BuuRBhl6%2B4O09psHYpikjAHDuq3RynSUNIda6IvNxGZiUH3TElgJm%2B7PKCVM1kUrXUamrXJh51AkfcOcVwL2M1UAwZvOusQVBwZ9t2a2iW9sHNO0UOrgnJrol6XnRC5U7Uf9CbEF30XUJ2uUlmducxzlOEA6sJojH5qXTvg5vUbLUgpTq3Wt79MUgehbnxg1a0aOmk%2BVe9xx9T6PW0zKrfblK%2Bh9opEMMiPtXyOSttYqhKjk%2FDBIO%2FMaRJ10XSO3c7pJnWAxPziZSUL8MEW%2BjYqOnkLjFLEad2%2B8Cgk1tcokkxt1vpJDLorjiiJ4ikV77Nw1daITpCgA8Dejrb%2Bugb44iYvwSompN5oZTG8CIbDLhNa64ygbj1AKpsRUuG7OOZUJEjSNY8OdEbrb3Qe3BodeGw3Tr5tcARK85M8FMEgjVvbCS%2Bv5ojQpZXvtXaW49WV0toleCw6L0DTMNu%2F%2B70GOqUBl%2Be%2FJGoWxS068npZId643gNfFy1hJJmZEJAbttMhToELOr05vqncueNAP0MHtRYn9kz4CK1jrp8tTwFpr2pt%2FJFNWD%2BOMcty%2F3YhoYkPG8DeGmU0rwMI%2Fk%2FCbBtbjyPGu6PQHuLLRqDBOoWZ4Q5dTJw5U24WQ1l2U%2FAFuGDxrHo9r%2Bug3i5hrNEKWjrbBanqnsTnYPYUCjhBbTgVI2nuGOngNblw&X-Amz-Signature=987239fa4772e48fe4d6104128339da3fa7a4f9d196318f2c90d25b4cd6d4ad0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MVY2DLP%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIFluD3sq1XFKz3AuhzohqnRYcSYVO5XP7RkjoLWOOs7IAiEA%2FIi853gFL5PWhqevBPtkI9LSHLq7rVgR9JsKXGCkJ3Iq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNNyFBwfMLk7AMTQHyrcA9vlm8JuNw293XxEHhq1bg%2FLewPhflZ0H7kDTpA2mdj5nVmA4dhY4mDbElLQXVsDLZHelv7V%2Bz4lkliGG5hijN30R2bC9lY%2B%2BvCKYjem1SVVRqUV3mEESFVF1%2FS%2BTqw3SBY%2B%2BoKXAJgPS2C61%2FSFvQiduXcqWSwI9DnKswLVRLlEP%2BuuRBhl6%2B4O09psHYpikjAHDuq3RynSUNIda6IvNxGZiUH3TElgJm%2B7PKCVM1kUrXUamrXJh51AkfcOcVwL2M1UAwZvOusQVBwZ9t2a2iW9sHNO0UOrgnJrol6XnRC5U7Uf9CbEF30XUJ2uUlmducxzlOEA6sJojH5qXTvg5vUbLUgpTq3Wt79MUgehbnxg1a0aOmk%2BVe9xx9T6PW0zKrfblK%2Bh9opEMMiPtXyOSttYqhKjk%2FDBIO%2FMaRJ10XSO3c7pJnWAxPziZSUL8MEW%2BjYqOnkLjFLEad2%2B8Cgk1tcokkxt1vpJDLorjiiJ4ikV77Nw1daITpCgA8Dejrb%2Bugb44iYvwSompN5oZTG8CIbDLhNa64ygbj1AKpsRUuG7OOZUJEjSNY8OdEbrb3Qe3BodeGw3Tr5tcARK85M8FMEgjVvbCS%2Bv5ojQpZXvtXaW49WV0toleCw6L0DTMNu%2F%2B70GOqUBl%2Be%2FJGoWxS068npZId643gNfFy1hJJmZEJAbttMhToELOr05vqncueNAP0MHtRYn9kz4CK1jrp8tTwFpr2pt%2FJFNWD%2BOMcty%2F3YhoYkPG8DeGmU0rwMI%2Fk%2FCbBtbjyPGu6PQHuLLRqDBOoWZ4Q5dTJw5U24WQ1l2U%2FAFuGDxrHo9r%2Bug3i5hrNEKWjrbBanqnsTnYPYUCjhBbTgVI2nuGOngNblw&X-Amz-Signature=7ac42ccf9b4548c47b7bd68004b5d70f26de12f3c310e1d701b74210e9ad0ed9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MVY2DLP%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIFluD3sq1XFKz3AuhzohqnRYcSYVO5XP7RkjoLWOOs7IAiEA%2FIi853gFL5PWhqevBPtkI9LSHLq7rVgR9JsKXGCkJ3Iq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNNyFBwfMLk7AMTQHyrcA9vlm8JuNw293XxEHhq1bg%2FLewPhflZ0H7kDTpA2mdj5nVmA4dhY4mDbElLQXVsDLZHelv7V%2Bz4lkliGG5hijN30R2bC9lY%2B%2BvCKYjem1SVVRqUV3mEESFVF1%2FS%2BTqw3SBY%2B%2BoKXAJgPS2C61%2FSFvQiduXcqWSwI9DnKswLVRLlEP%2BuuRBhl6%2B4O09psHYpikjAHDuq3RynSUNIda6IvNxGZiUH3TElgJm%2B7PKCVM1kUrXUamrXJh51AkfcOcVwL2M1UAwZvOusQVBwZ9t2a2iW9sHNO0UOrgnJrol6XnRC5U7Uf9CbEF30XUJ2uUlmducxzlOEA6sJojH5qXTvg5vUbLUgpTq3Wt79MUgehbnxg1a0aOmk%2BVe9xx9T6PW0zKrfblK%2Bh9opEMMiPtXyOSttYqhKjk%2FDBIO%2FMaRJ10XSO3c7pJnWAxPziZSUL8MEW%2BjYqOnkLjFLEad2%2B8Cgk1tcokkxt1vpJDLorjiiJ4ikV77Nw1daITpCgA8Dejrb%2Bugb44iYvwSompN5oZTG8CIbDLhNa64ygbj1AKpsRUuG7OOZUJEjSNY8OdEbrb3Qe3BodeGw3Tr5tcARK85M8FMEgjVvbCS%2Bv5ojQpZXvtXaW49WV0toleCw6L0DTMNu%2F%2B70GOqUBl%2Be%2FJGoWxS068npZId643gNfFy1hJJmZEJAbttMhToELOr05vqncueNAP0MHtRYn9kz4CK1jrp8tTwFpr2pt%2FJFNWD%2BOMcty%2F3YhoYkPG8DeGmU0rwMI%2Fk%2FCbBtbjyPGu6PQHuLLRqDBOoWZ4Q5dTJw5U24WQ1l2U%2FAFuGDxrHo9r%2Bug3i5hrNEKWjrbBanqnsTnYPYUCjhBbTgVI2nuGOngNblw&X-Amz-Signature=2e925d4ba5ef304d315e343a10180dda120614a05f90c28ec4dd6ddc2df24079&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
