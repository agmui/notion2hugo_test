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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665DESESH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQC4VDuOgzXSzGDZdxSj%2BxpGx3%2FinGNKOcnFKVvZQP%2BXiwIgEBv18vFIjAnoIi2jd9hxQhSCjAV5QkvowCS5vwg83lgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkIJQxT3eNNqfOJkyrcAy0kfaBtgVD7jnENaacl09aaCG%2FrHC8X%2F%2BYRsxSpCILcLkg9B%2FitGjC8MAonaUXCr5ygjStwqVi6j6GL2hPBGFCiCwt5VnwabK65RnfsjA01U5jpfPTaX9Faf39MTwSOKqtG8t6yUDXxGBAaGUE0GFN4lwVbxzpCnDnFKk2n1yxFvcmUMkHyLe8VMJg8IlYxM1uzteet35b%2FS2W117UR5h4MMDh9cZqYqwByBXpqVrFZthHLE8jiSHXD1%2BGylMm6NiAuxuBq%2F9pbRglrKHdGt9nNCzX1gf2MVpcbM2f%2BGgAWjXcdKiYzA2%2F3clGxIvuTSGCFpESzVXORDGLlFLBMBuX3IY0Jgy1OBnN2CFsjWJQQnWImclH1VL6l1KIXd1q57z1zoNKjkVbSoaLn7TqH3KRjt%2FNelghwfNAiMD8kL4C%2F6yhuYbj%2Fsp6b5GO%2B%2FSk59lSDBrEeKkhJV7nZeunvjWdPGF7E9sqN1gCpIPot4kTZDbGaTRMQEV4A4CtBYV%2BFi64Kw9fSVDCh2L57dJTe4Bqz4K60alVJSSGaxuNzI7FpkeHQpaNK1sZfGF9h34COfeZBfF7zvREkWczmene0M98JP8%2B%2BTCmMxpxiaKvC6%2BcvaLdgfNtw%2BfQk76oNMNKxosQGOqUBg%2BAEfx8m7Axcggg2B7RBBWs%2BFzWthq3V3Lw1a8m2Q1yC5ZPIEtoUqKLrzGBBioOkiSs7q9uOWj2hhyrdWkjh1QwEtjtXQn%2BVWX8edMj5giNgE53thTYcHVAd8sLef%2F%2Fx59w%2BcwPscLezGn%2FnSFLh4VDbc%2FZaTM7j%2FloxFqn87JnWVaMvM5XgtSiusWAxBn2rmJDYDS%2FnDEOPKrjFDb%2F3DZKfbVKk&X-Amz-Signature=e826b1759029fc4bf4d7626d9e8197ca27736c0333eebdbd112cd10e298f70c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665DESESH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQC4VDuOgzXSzGDZdxSj%2BxpGx3%2FinGNKOcnFKVvZQP%2BXiwIgEBv18vFIjAnoIi2jd9hxQhSCjAV5QkvowCS5vwg83lgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkIJQxT3eNNqfOJkyrcAy0kfaBtgVD7jnENaacl09aaCG%2FrHC8X%2F%2BYRsxSpCILcLkg9B%2FitGjC8MAonaUXCr5ygjStwqVi6j6GL2hPBGFCiCwt5VnwabK65RnfsjA01U5jpfPTaX9Faf39MTwSOKqtG8t6yUDXxGBAaGUE0GFN4lwVbxzpCnDnFKk2n1yxFvcmUMkHyLe8VMJg8IlYxM1uzteet35b%2FS2W117UR5h4MMDh9cZqYqwByBXpqVrFZthHLE8jiSHXD1%2BGylMm6NiAuxuBq%2F9pbRglrKHdGt9nNCzX1gf2MVpcbM2f%2BGgAWjXcdKiYzA2%2F3clGxIvuTSGCFpESzVXORDGLlFLBMBuX3IY0Jgy1OBnN2CFsjWJQQnWImclH1VL6l1KIXd1q57z1zoNKjkVbSoaLn7TqH3KRjt%2FNelghwfNAiMD8kL4C%2F6yhuYbj%2Fsp6b5GO%2B%2FSk59lSDBrEeKkhJV7nZeunvjWdPGF7E9sqN1gCpIPot4kTZDbGaTRMQEV4A4CtBYV%2BFi64Kw9fSVDCh2L57dJTe4Bqz4K60alVJSSGaxuNzI7FpkeHQpaNK1sZfGF9h34COfeZBfF7zvREkWczmene0M98JP8%2B%2BTCmMxpxiaKvC6%2BcvaLdgfNtw%2BfQk76oNMNKxosQGOqUBg%2BAEfx8m7Axcggg2B7RBBWs%2BFzWthq3V3Lw1a8m2Q1yC5ZPIEtoUqKLrzGBBioOkiSs7q9uOWj2hhyrdWkjh1QwEtjtXQn%2BVWX8edMj5giNgE53thTYcHVAd8sLef%2F%2Fx59w%2BcwPscLezGn%2FnSFLh4VDbc%2FZaTM7j%2FloxFqn87JnWVaMvM5XgtSiusWAxBn2rmJDYDS%2FnDEOPKrjFDb%2F3DZKfbVKk&X-Amz-Signature=baae33f44af458548b0a61e3fbc5bfb49fc433fa836fd5617a6a8a0429e8934c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665DESESH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQC4VDuOgzXSzGDZdxSj%2BxpGx3%2FinGNKOcnFKVvZQP%2BXiwIgEBv18vFIjAnoIi2jd9hxQhSCjAV5QkvowCS5vwg83lgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkIJQxT3eNNqfOJkyrcAy0kfaBtgVD7jnENaacl09aaCG%2FrHC8X%2F%2BYRsxSpCILcLkg9B%2FitGjC8MAonaUXCr5ygjStwqVi6j6GL2hPBGFCiCwt5VnwabK65RnfsjA01U5jpfPTaX9Faf39MTwSOKqtG8t6yUDXxGBAaGUE0GFN4lwVbxzpCnDnFKk2n1yxFvcmUMkHyLe8VMJg8IlYxM1uzteet35b%2FS2W117UR5h4MMDh9cZqYqwByBXpqVrFZthHLE8jiSHXD1%2BGylMm6NiAuxuBq%2F9pbRglrKHdGt9nNCzX1gf2MVpcbM2f%2BGgAWjXcdKiYzA2%2F3clGxIvuTSGCFpESzVXORDGLlFLBMBuX3IY0Jgy1OBnN2CFsjWJQQnWImclH1VL6l1KIXd1q57z1zoNKjkVbSoaLn7TqH3KRjt%2FNelghwfNAiMD8kL4C%2F6yhuYbj%2Fsp6b5GO%2B%2FSk59lSDBrEeKkhJV7nZeunvjWdPGF7E9sqN1gCpIPot4kTZDbGaTRMQEV4A4CtBYV%2BFi64Kw9fSVDCh2L57dJTe4Bqz4K60alVJSSGaxuNzI7FpkeHQpaNK1sZfGF9h34COfeZBfF7zvREkWczmene0M98JP8%2B%2BTCmMxpxiaKvC6%2BcvaLdgfNtw%2BfQk76oNMNKxosQGOqUBg%2BAEfx8m7Axcggg2B7RBBWs%2BFzWthq3V3Lw1a8m2Q1yC5ZPIEtoUqKLrzGBBioOkiSs7q9uOWj2hhyrdWkjh1QwEtjtXQn%2BVWX8edMj5giNgE53thTYcHVAd8sLef%2F%2Fx59w%2BcwPscLezGn%2FnSFLh4VDbc%2FZaTM7j%2FloxFqn87JnWVaMvM5XgtSiusWAxBn2rmJDYDS%2FnDEOPKrjFDb%2F3DZKfbVKk&X-Amz-Signature=a6b2864c55cb391f150be2a55cd7b4cebf7814e0e682d4192bb8f3afe19a4c0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665DESESH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQC4VDuOgzXSzGDZdxSj%2BxpGx3%2FinGNKOcnFKVvZQP%2BXiwIgEBv18vFIjAnoIi2jd9hxQhSCjAV5QkvowCS5vwg83lgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkIJQxT3eNNqfOJkyrcAy0kfaBtgVD7jnENaacl09aaCG%2FrHC8X%2F%2BYRsxSpCILcLkg9B%2FitGjC8MAonaUXCr5ygjStwqVi6j6GL2hPBGFCiCwt5VnwabK65RnfsjA01U5jpfPTaX9Faf39MTwSOKqtG8t6yUDXxGBAaGUE0GFN4lwVbxzpCnDnFKk2n1yxFvcmUMkHyLe8VMJg8IlYxM1uzteet35b%2FS2W117UR5h4MMDh9cZqYqwByBXpqVrFZthHLE8jiSHXD1%2BGylMm6NiAuxuBq%2F9pbRglrKHdGt9nNCzX1gf2MVpcbM2f%2BGgAWjXcdKiYzA2%2F3clGxIvuTSGCFpESzVXORDGLlFLBMBuX3IY0Jgy1OBnN2CFsjWJQQnWImclH1VL6l1KIXd1q57z1zoNKjkVbSoaLn7TqH3KRjt%2FNelghwfNAiMD8kL4C%2F6yhuYbj%2Fsp6b5GO%2B%2FSk59lSDBrEeKkhJV7nZeunvjWdPGF7E9sqN1gCpIPot4kTZDbGaTRMQEV4A4CtBYV%2BFi64Kw9fSVDCh2L57dJTe4Bqz4K60alVJSSGaxuNzI7FpkeHQpaNK1sZfGF9h34COfeZBfF7zvREkWczmene0M98JP8%2B%2BTCmMxpxiaKvC6%2BcvaLdgfNtw%2BfQk76oNMNKxosQGOqUBg%2BAEfx8m7Axcggg2B7RBBWs%2BFzWthq3V3Lw1a8m2Q1yC5ZPIEtoUqKLrzGBBioOkiSs7q9uOWj2hhyrdWkjh1QwEtjtXQn%2BVWX8edMj5giNgE53thTYcHVAd8sLef%2F%2Fx59w%2BcwPscLezGn%2FnSFLh4VDbc%2FZaTM7j%2FloxFqn87JnWVaMvM5XgtSiusWAxBn2rmJDYDS%2FnDEOPKrjFDb%2F3DZKfbVKk&X-Amz-Signature=2a0208e7a1dddb22e0a0a39720a25c356e2e07afddcf35340bd197e39fbfe987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665DESESH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQC4VDuOgzXSzGDZdxSj%2BxpGx3%2FinGNKOcnFKVvZQP%2BXiwIgEBv18vFIjAnoIi2jd9hxQhSCjAV5QkvowCS5vwg83lgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkIJQxT3eNNqfOJkyrcAy0kfaBtgVD7jnENaacl09aaCG%2FrHC8X%2F%2BYRsxSpCILcLkg9B%2FitGjC8MAonaUXCr5ygjStwqVi6j6GL2hPBGFCiCwt5VnwabK65RnfsjA01U5jpfPTaX9Faf39MTwSOKqtG8t6yUDXxGBAaGUE0GFN4lwVbxzpCnDnFKk2n1yxFvcmUMkHyLe8VMJg8IlYxM1uzteet35b%2FS2W117UR5h4MMDh9cZqYqwByBXpqVrFZthHLE8jiSHXD1%2BGylMm6NiAuxuBq%2F9pbRglrKHdGt9nNCzX1gf2MVpcbM2f%2BGgAWjXcdKiYzA2%2F3clGxIvuTSGCFpESzVXORDGLlFLBMBuX3IY0Jgy1OBnN2CFsjWJQQnWImclH1VL6l1KIXd1q57z1zoNKjkVbSoaLn7TqH3KRjt%2FNelghwfNAiMD8kL4C%2F6yhuYbj%2Fsp6b5GO%2B%2FSk59lSDBrEeKkhJV7nZeunvjWdPGF7E9sqN1gCpIPot4kTZDbGaTRMQEV4A4CtBYV%2BFi64Kw9fSVDCh2L57dJTe4Bqz4K60alVJSSGaxuNzI7FpkeHQpaNK1sZfGF9h34COfeZBfF7zvREkWczmene0M98JP8%2B%2BTCmMxpxiaKvC6%2BcvaLdgfNtw%2BfQk76oNMNKxosQGOqUBg%2BAEfx8m7Axcggg2B7RBBWs%2BFzWthq3V3Lw1a8m2Q1yC5ZPIEtoUqKLrzGBBioOkiSs7q9uOWj2hhyrdWkjh1QwEtjtXQn%2BVWX8edMj5giNgE53thTYcHVAd8sLef%2F%2Fx59w%2BcwPscLezGn%2FnSFLh4VDbc%2FZaTM7j%2FloxFqn87JnWVaMvM5XgtSiusWAxBn2rmJDYDS%2FnDEOPKrjFDb%2F3DZKfbVKk&X-Amz-Signature=953b9ce900211cc965aef500d163aeb722e027dd4d9afd5d64d5687d3e292005&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665DESESH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQC4VDuOgzXSzGDZdxSj%2BxpGx3%2FinGNKOcnFKVvZQP%2BXiwIgEBv18vFIjAnoIi2jd9hxQhSCjAV5QkvowCS5vwg83lgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkIJQxT3eNNqfOJkyrcAy0kfaBtgVD7jnENaacl09aaCG%2FrHC8X%2F%2BYRsxSpCILcLkg9B%2FitGjC8MAonaUXCr5ygjStwqVi6j6GL2hPBGFCiCwt5VnwabK65RnfsjA01U5jpfPTaX9Faf39MTwSOKqtG8t6yUDXxGBAaGUE0GFN4lwVbxzpCnDnFKk2n1yxFvcmUMkHyLe8VMJg8IlYxM1uzteet35b%2FS2W117UR5h4MMDh9cZqYqwByBXpqVrFZthHLE8jiSHXD1%2BGylMm6NiAuxuBq%2F9pbRglrKHdGt9nNCzX1gf2MVpcbM2f%2BGgAWjXcdKiYzA2%2F3clGxIvuTSGCFpESzVXORDGLlFLBMBuX3IY0Jgy1OBnN2CFsjWJQQnWImclH1VL6l1KIXd1q57z1zoNKjkVbSoaLn7TqH3KRjt%2FNelghwfNAiMD8kL4C%2F6yhuYbj%2Fsp6b5GO%2B%2FSk59lSDBrEeKkhJV7nZeunvjWdPGF7E9sqN1gCpIPot4kTZDbGaTRMQEV4A4CtBYV%2BFi64Kw9fSVDCh2L57dJTe4Bqz4K60alVJSSGaxuNzI7FpkeHQpaNK1sZfGF9h34COfeZBfF7zvREkWczmene0M98JP8%2B%2BTCmMxpxiaKvC6%2BcvaLdgfNtw%2BfQk76oNMNKxosQGOqUBg%2BAEfx8m7Axcggg2B7RBBWs%2BFzWthq3V3Lw1a8m2Q1yC5ZPIEtoUqKLrzGBBioOkiSs7q9uOWj2hhyrdWkjh1QwEtjtXQn%2BVWX8edMj5giNgE53thTYcHVAd8sLef%2F%2Fx59w%2BcwPscLezGn%2FnSFLh4VDbc%2FZaTM7j%2FloxFqn87JnWVaMvM5XgtSiusWAxBn2rmJDYDS%2FnDEOPKrjFDb%2F3DZKfbVKk&X-Amz-Signature=1060e23530c6c55bb0ab4a7e5283737854134c0b28848a00db2f946102efcb8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665DESESH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQC4VDuOgzXSzGDZdxSj%2BxpGx3%2FinGNKOcnFKVvZQP%2BXiwIgEBv18vFIjAnoIi2jd9hxQhSCjAV5QkvowCS5vwg83lgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkIJQxT3eNNqfOJkyrcAy0kfaBtgVD7jnENaacl09aaCG%2FrHC8X%2F%2BYRsxSpCILcLkg9B%2FitGjC8MAonaUXCr5ygjStwqVi6j6GL2hPBGFCiCwt5VnwabK65RnfsjA01U5jpfPTaX9Faf39MTwSOKqtG8t6yUDXxGBAaGUE0GFN4lwVbxzpCnDnFKk2n1yxFvcmUMkHyLe8VMJg8IlYxM1uzteet35b%2FS2W117UR5h4MMDh9cZqYqwByBXpqVrFZthHLE8jiSHXD1%2BGylMm6NiAuxuBq%2F9pbRglrKHdGt9nNCzX1gf2MVpcbM2f%2BGgAWjXcdKiYzA2%2F3clGxIvuTSGCFpESzVXORDGLlFLBMBuX3IY0Jgy1OBnN2CFsjWJQQnWImclH1VL6l1KIXd1q57z1zoNKjkVbSoaLn7TqH3KRjt%2FNelghwfNAiMD8kL4C%2F6yhuYbj%2Fsp6b5GO%2B%2FSk59lSDBrEeKkhJV7nZeunvjWdPGF7E9sqN1gCpIPot4kTZDbGaTRMQEV4A4CtBYV%2BFi64Kw9fSVDCh2L57dJTe4Bqz4K60alVJSSGaxuNzI7FpkeHQpaNK1sZfGF9h34COfeZBfF7zvREkWczmene0M98JP8%2B%2BTCmMxpxiaKvC6%2BcvaLdgfNtw%2BfQk76oNMNKxosQGOqUBg%2BAEfx8m7Axcggg2B7RBBWs%2BFzWthq3V3Lw1a8m2Q1yC5ZPIEtoUqKLrzGBBioOkiSs7q9uOWj2hhyrdWkjh1QwEtjtXQn%2BVWX8edMj5giNgE53thTYcHVAd8sLef%2F%2Fx59w%2BcwPscLezGn%2FnSFLh4VDbc%2FZaTM7j%2FloxFqn87JnWVaMvM5XgtSiusWAxBn2rmJDYDS%2FnDEOPKrjFDb%2F3DZKfbVKk&X-Amz-Signature=c0cc343f6eef4d8367e51873d942c2d26e5354e98169b35fad1f62d5c8af10bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665DESESH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQC4VDuOgzXSzGDZdxSj%2BxpGx3%2FinGNKOcnFKVvZQP%2BXiwIgEBv18vFIjAnoIi2jd9hxQhSCjAV5QkvowCS5vwg83lgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkIJQxT3eNNqfOJkyrcAy0kfaBtgVD7jnENaacl09aaCG%2FrHC8X%2F%2BYRsxSpCILcLkg9B%2FitGjC8MAonaUXCr5ygjStwqVi6j6GL2hPBGFCiCwt5VnwabK65RnfsjA01U5jpfPTaX9Faf39MTwSOKqtG8t6yUDXxGBAaGUE0GFN4lwVbxzpCnDnFKk2n1yxFvcmUMkHyLe8VMJg8IlYxM1uzteet35b%2FS2W117UR5h4MMDh9cZqYqwByBXpqVrFZthHLE8jiSHXD1%2BGylMm6NiAuxuBq%2F9pbRglrKHdGt9nNCzX1gf2MVpcbM2f%2BGgAWjXcdKiYzA2%2F3clGxIvuTSGCFpESzVXORDGLlFLBMBuX3IY0Jgy1OBnN2CFsjWJQQnWImclH1VL6l1KIXd1q57z1zoNKjkVbSoaLn7TqH3KRjt%2FNelghwfNAiMD8kL4C%2F6yhuYbj%2Fsp6b5GO%2B%2FSk59lSDBrEeKkhJV7nZeunvjWdPGF7E9sqN1gCpIPot4kTZDbGaTRMQEV4A4CtBYV%2BFi64Kw9fSVDCh2L57dJTe4Bqz4K60alVJSSGaxuNzI7FpkeHQpaNK1sZfGF9h34COfeZBfF7zvREkWczmene0M98JP8%2B%2BTCmMxpxiaKvC6%2BcvaLdgfNtw%2BfQk76oNMNKxosQGOqUBg%2BAEfx8m7Axcggg2B7RBBWs%2BFzWthq3V3Lw1a8m2Q1yC5ZPIEtoUqKLrzGBBioOkiSs7q9uOWj2hhyrdWkjh1QwEtjtXQn%2BVWX8edMj5giNgE53thTYcHVAd8sLef%2F%2Fx59w%2BcwPscLezGn%2FnSFLh4VDbc%2FZaTM7j%2FloxFqn87JnWVaMvM5XgtSiusWAxBn2rmJDYDS%2FnDEOPKrjFDb%2F3DZKfbVKk&X-Amz-Signature=df064edac214a63e5ccc0fd557fa927a7b8b00e6c744873848f945053320122c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
