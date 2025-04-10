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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK2BECDB%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDI7VJLNlYkOKj7%2Fw0oSbYKDIV8uPen%2FH6wRU1ZFdfJMgIgRuLIzg82KKmY0C0e5a70JDd1eZNnH8NmP7hXoqIs6ikqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHab4zdQo0aPFYbjsCrcA4W0la5G0Qu24IwUyXpsK3NcjxerfiPSbk%2FDvLkk5%2Bhdv3MlhhP%2BFixWEQUpj2KfgqowOw4LtNdf7p%2FAUnLjgoCqUGiIbc%2FLbbmFu2dLSZvck8KLh0utE9VE8eepB4mSr9HcIcLftcJBp4sk3Oye9vxu8vaqMz7O7XuH8nOASSludVk3BVF2xNGgz4A5dewBkn%2FPjLHa2NdMrfUZG9r7N%2FAEZIPtuaEOT5LIm53NyFAH3wXRR9yhADv7PegUX9amTBYJe7FBVxDiaqS%2BW8GotJhbknCb5Pf0C%2BDRuF4L3i%2BI4mrNrqUTkQvZnGlpGvW7cZ%2BuSyQEfgukGlM5N23WoEdcU9fwwGHz6CdMkhIeSDrvcV0xaKOsnbWjQRlkAGI3BxFVwL7zXqllSrWAbwjjNt9GWoagaxnRb0cundxQcS4trz0zFjly8Ju2qWGQTPz0xA3fz0gxVJLVTncFsW1428OC7W6w9fZEggiSvv79sGasNdKJBxndmf8caEhVMeVp062RgtZKZ3CZT6%2BDMs5M%2FdLaCMrxG0%2BUXQ4WzF4a9XCHsFquIP1zcGr7pcexXQAY7VDwl6BuVHGvDda3C4BVUMZ6%2Bql4wwdWDWZDAuhTkp8%2BZdKPaB5t%2BZCl2MUkMIK%2B3r8GOqUBgFhQN9viCRu5TG9lt0176nVRnqy%2FccnyGx7xtLmZosUXJf8NaGrSgXCZBJmYLbXAK%2Bs9m%2BAw2EiCiuURFOO8uZhieu1EnNwBlVTVTgwRXa9QpdamsxvUYDS%2BNumyyrBhKIbwRAEn%2BSd7ARLa0HY5CY2T79pFKUCOEnQRZJn42kqkxpCvq711sBNa3%2BAd%2Fsqyvy8bqPjSQcl%2Bbn8B34HYBB6HvMPK&X-Amz-Signature=49d76685521ead7d1eda28bcc3206c9f12c903d6bb066b2dbe9383b2c0386be7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK2BECDB%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDI7VJLNlYkOKj7%2Fw0oSbYKDIV8uPen%2FH6wRU1ZFdfJMgIgRuLIzg82KKmY0C0e5a70JDd1eZNnH8NmP7hXoqIs6ikqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHab4zdQo0aPFYbjsCrcA4W0la5G0Qu24IwUyXpsK3NcjxerfiPSbk%2FDvLkk5%2Bhdv3MlhhP%2BFixWEQUpj2KfgqowOw4LtNdf7p%2FAUnLjgoCqUGiIbc%2FLbbmFu2dLSZvck8KLh0utE9VE8eepB4mSr9HcIcLftcJBp4sk3Oye9vxu8vaqMz7O7XuH8nOASSludVk3BVF2xNGgz4A5dewBkn%2FPjLHa2NdMrfUZG9r7N%2FAEZIPtuaEOT5LIm53NyFAH3wXRR9yhADv7PegUX9amTBYJe7FBVxDiaqS%2BW8GotJhbknCb5Pf0C%2BDRuF4L3i%2BI4mrNrqUTkQvZnGlpGvW7cZ%2BuSyQEfgukGlM5N23WoEdcU9fwwGHz6CdMkhIeSDrvcV0xaKOsnbWjQRlkAGI3BxFVwL7zXqllSrWAbwjjNt9GWoagaxnRb0cundxQcS4trz0zFjly8Ju2qWGQTPz0xA3fz0gxVJLVTncFsW1428OC7W6w9fZEggiSvv79sGasNdKJBxndmf8caEhVMeVp062RgtZKZ3CZT6%2BDMs5M%2FdLaCMrxG0%2BUXQ4WzF4a9XCHsFquIP1zcGr7pcexXQAY7VDwl6BuVHGvDda3C4BVUMZ6%2Bql4wwdWDWZDAuhTkp8%2BZdKPaB5t%2BZCl2MUkMIK%2B3r8GOqUBgFhQN9viCRu5TG9lt0176nVRnqy%2FccnyGx7xtLmZosUXJf8NaGrSgXCZBJmYLbXAK%2Bs9m%2BAw2EiCiuURFOO8uZhieu1EnNwBlVTVTgwRXa9QpdamsxvUYDS%2BNumyyrBhKIbwRAEn%2BSd7ARLa0HY5CY2T79pFKUCOEnQRZJn42kqkxpCvq711sBNa3%2BAd%2Fsqyvy8bqPjSQcl%2Bbn8B34HYBB6HvMPK&X-Amz-Signature=5a73475fd4164d7a5a207cb1f40e585d2d9e01649c80185241dcd779c109f582&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK2BECDB%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDI7VJLNlYkOKj7%2Fw0oSbYKDIV8uPen%2FH6wRU1ZFdfJMgIgRuLIzg82KKmY0C0e5a70JDd1eZNnH8NmP7hXoqIs6ikqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHab4zdQo0aPFYbjsCrcA4W0la5G0Qu24IwUyXpsK3NcjxerfiPSbk%2FDvLkk5%2Bhdv3MlhhP%2BFixWEQUpj2KfgqowOw4LtNdf7p%2FAUnLjgoCqUGiIbc%2FLbbmFu2dLSZvck8KLh0utE9VE8eepB4mSr9HcIcLftcJBp4sk3Oye9vxu8vaqMz7O7XuH8nOASSludVk3BVF2xNGgz4A5dewBkn%2FPjLHa2NdMrfUZG9r7N%2FAEZIPtuaEOT5LIm53NyFAH3wXRR9yhADv7PegUX9amTBYJe7FBVxDiaqS%2BW8GotJhbknCb5Pf0C%2BDRuF4L3i%2BI4mrNrqUTkQvZnGlpGvW7cZ%2BuSyQEfgukGlM5N23WoEdcU9fwwGHz6CdMkhIeSDrvcV0xaKOsnbWjQRlkAGI3BxFVwL7zXqllSrWAbwjjNt9GWoagaxnRb0cundxQcS4trz0zFjly8Ju2qWGQTPz0xA3fz0gxVJLVTncFsW1428OC7W6w9fZEggiSvv79sGasNdKJBxndmf8caEhVMeVp062RgtZKZ3CZT6%2BDMs5M%2FdLaCMrxG0%2BUXQ4WzF4a9XCHsFquIP1zcGr7pcexXQAY7VDwl6BuVHGvDda3C4BVUMZ6%2Bql4wwdWDWZDAuhTkp8%2BZdKPaB5t%2BZCl2MUkMIK%2B3r8GOqUBgFhQN9viCRu5TG9lt0176nVRnqy%2FccnyGx7xtLmZosUXJf8NaGrSgXCZBJmYLbXAK%2Bs9m%2BAw2EiCiuURFOO8uZhieu1EnNwBlVTVTgwRXa9QpdamsxvUYDS%2BNumyyrBhKIbwRAEn%2BSd7ARLa0HY5CY2T79pFKUCOEnQRZJn42kqkxpCvq711sBNa3%2BAd%2Fsqyvy8bqPjSQcl%2Bbn8B34HYBB6HvMPK&X-Amz-Signature=4e358ec214a486844f58aa28a506c4af93c1f241f932519061d7c672388d6c5e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK2BECDB%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDI7VJLNlYkOKj7%2Fw0oSbYKDIV8uPen%2FH6wRU1ZFdfJMgIgRuLIzg82KKmY0C0e5a70JDd1eZNnH8NmP7hXoqIs6ikqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHab4zdQo0aPFYbjsCrcA4W0la5G0Qu24IwUyXpsK3NcjxerfiPSbk%2FDvLkk5%2Bhdv3MlhhP%2BFixWEQUpj2KfgqowOw4LtNdf7p%2FAUnLjgoCqUGiIbc%2FLbbmFu2dLSZvck8KLh0utE9VE8eepB4mSr9HcIcLftcJBp4sk3Oye9vxu8vaqMz7O7XuH8nOASSludVk3BVF2xNGgz4A5dewBkn%2FPjLHa2NdMrfUZG9r7N%2FAEZIPtuaEOT5LIm53NyFAH3wXRR9yhADv7PegUX9amTBYJe7FBVxDiaqS%2BW8GotJhbknCb5Pf0C%2BDRuF4L3i%2BI4mrNrqUTkQvZnGlpGvW7cZ%2BuSyQEfgukGlM5N23WoEdcU9fwwGHz6CdMkhIeSDrvcV0xaKOsnbWjQRlkAGI3BxFVwL7zXqllSrWAbwjjNt9GWoagaxnRb0cundxQcS4trz0zFjly8Ju2qWGQTPz0xA3fz0gxVJLVTncFsW1428OC7W6w9fZEggiSvv79sGasNdKJBxndmf8caEhVMeVp062RgtZKZ3CZT6%2BDMs5M%2FdLaCMrxG0%2BUXQ4WzF4a9XCHsFquIP1zcGr7pcexXQAY7VDwl6BuVHGvDda3C4BVUMZ6%2Bql4wwdWDWZDAuhTkp8%2BZdKPaB5t%2BZCl2MUkMIK%2B3r8GOqUBgFhQN9viCRu5TG9lt0176nVRnqy%2FccnyGx7xtLmZosUXJf8NaGrSgXCZBJmYLbXAK%2Bs9m%2BAw2EiCiuURFOO8uZhieu1EnNwBlVTVTgwRXa9QpdamsxvUYDS%2BNumyyrBhKIbwRAEn%2BSd7ARLa0HY5CY2T79pFKUCOEnQRZJn42kqkxpCvq711sBNa3%2BAd%2Fsqyvy8bqPjSQcl%2Bbn8B34HYBB6HvMPK&X-Amz-Signature=cee87dd978aee060c2ff54a000d9aaafc766a806f626e7bac73c736088635c64&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK2BECDB%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDI7VJLNlYkOKj7%2Fw0oSbYKDIV8uPen%2FH6wRU1ZFdfJMgIgRuLIzg82KKmY0C0e5a70JDd1eZNnH8NmP7hXoqIs6ikqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHab4zdQo0aPFYbjsCrcA4W0la5G0Qu24IwUyXpsK3NcjxerfiPSbk%2FDvLkk5%2Bhdv3MlhhP%2BFixWEQUpj2KfgqowOw4LtNdf7p%2FAUnLjgoCqUGiIbc%2FLbbmFu2dLSZvck8KLh0utE9VE8eepB4mSr9HcIcLftcJBp4sk3Oye9vxu8vaqMz7O7XuH8nOASSludVk3BVF2xNGgz4A5dewBkn%2FPjLHa2NdMrfUZG9r7N%2FAEZIPtuaEOT5LIm53NyFAH3wXRR9yhADv7PegUX9amTBYJe7FBVxDiaqS%2BW8GotJhbknCb5Pf0C%2BDRuF4L3i%2BI4mrNrqUTkQvZnGlpGvW7cZ%2BuSyQEfgukGlM5N23WoEdcU9fwwGHz6CdMkhIeSDrvcV0xaKOsnbWjQRlkAGI3BxFVwL7zXqllSrWAbwjjNt9GWoagaxnRb0cundxQcS4trz0zFjly8Ju2qWGQTPz0xA3fz0gxVJLVTncFsW1428OC7W6w9fZEggiSvv79sGasNdKJBxndmf8caEhVMeVp062RgtZKZ3CZT6%2BDMs5M%2FdLaCMrxG0%2BUXQ4WzF4a9XCHsFquIP1zcGr7pcexXQAY7VDwl6BuVHGvDda3C4BVUMZ6%2Bql4wwdWDWZDAuhTkp8%2BZdKPaB5t%2BZCl2MUkMIK%2B3r8GOqUBgFhQN9viCRu5TG9lt0176nVRnqy%2FccnyGx7xtLmZosUXJf8NaGrSgXCZBJmYLbXAK%2Bs9m%2BAw2EiCiuURFOO8uZhieu1EnNwBlVTVTgwRXa9QpdamsxvUYDS%2BNumyyrBhKIbwRAEn%2BSd7ARLa0HY5CY2T79pFKUCOEnQRZJn42kqkxpCvq711sBNa3%2BAd%2Fsqyvy8bqPjSQcl%2Bbn8B34HYBB6HvMPK&X-Amz-Signature=a5fee9167563d303eba84390eab51997cd8f81d5d0a7dd7e4df6c01f5aa3a781&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK2BECDB%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDI7VJLNlYkOKj7%2Fw0oSbYKDIV8uPen%2FH6wRU1ZFdfJMgIgRuLIzg82KKmY0C0e5a70JDd1eZNnH8NmP7hXoqIs6ikqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHab4zdQo0aPFYbjsCrcA4W0la5G0Qu24IwUyXpsK3NcjxerfiPSbk%2FDvLkk5%2Bhdv3MlhhP%2BFixWEQUpj2KfgqowOw4LtNdf7p%2FAUnLjgoCqUGiIbc%2FLbbmFu2dLSZvck8KLh0utE9VE8eepB4mSr9HcIcLftcJBp4sk3Oye9vxu8vaqMz7O7XuH8nOASSludVk3BVF2xNGgz4A5dewBkn%2FPjLHa2NdMrfUZG9r7N%2FAEZIPtuaEOT5LIm53NyFAH3wXRR9yhADv7PegUX9amTBYJe7FBVxDiaqS%2BW8GotJhbknCb5Pf0C%2BDRuF4L3i%2BI4mrNrqUTkQvZnGlpGvW7cZ%2BuSyQEfgukGlM5N23WoEdcU9fwwGHz6CdMkhIeSDrvcV0xaKOsnbWjQRlkAGI3BxFVwL7zXqllSrWAbwjjNt9GWoagaxnRb0cundxQcS4trz0zFjly8Ju2qWGQTPz0xA3fz0gxVJLVTncFsW1428OC7W6w9fZEggiSvv79sGasNdKJBxndmf8caEhVMeVp062RgtZKZ3CZT6%2BDMs5M%2FdLaCMrxG0%2BUXQ4WzF4a9XCHsFquIP1zcGr7pcexXQAY7VDwl6BuVHGvDda3C4BVUMZ6%2Bql4wwdWDWZDAuhTkp8%2BZdKPaB5t%2BZCl2MUkMIK%2B3r8GOqUBgFhQN9viCRu5TG9lt0176nVRnqy%2FccnyGx7xtLmZosUXJf8NaGrSgXCZBJmYLbXAK%2Bs9m%2BAw2EiCiuURFOO8uZhieu1EnNwBlVTVTgwRXa9QpdamsxvUYDS%2BNumyyrBhKIbwRAEn%2BSd7ARLa0HY5CY2T79pFKUCOEnQRZJn42kqkxpCvq711sBNa3%2BAd%2Fsqyvy8bqPjSQcl%2Bbn8B34HYBB6HvMPK&X-Amz-Signature=ae62ce94883f704f964b92029fc2ed9463f0000857f5a42b073a97e686c09ff3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK2BECDB%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDI7VJLNlYkOKj7%2Fw0oSbYKDIV8uPen%2FH6wRU1ZFdfJMgIgRuLIzg82KKmY0C0e5a70JDd1eZNnH8NmP7hXoqIs6ikqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHab4zdQo0aPFYbjsCrcA4W0la5G0Qu24IwUyXpsK3NcjxerfiPSbk%2FDvLkk5%2Bhdv3MlhhP%2BFixWEQUpj2KfgqowOw4LtNdf7p%2FAUnLjgoCqUGiIbc%2FLbbmFu2dLSZvck8KLh0utE9VE8eepB4mSr9HcIcLftcJBp4sk3Oye9vxu8vaqMz7O7XuH8nOASSludVk3BVF2xNGgz4A5dewBkn%2FPjLHa2NdMrfUZG9r7N%2FAEZIPtuaEOT5LIm53NyFAH3wXRR9yhADv7PegUX9amTBYJe7FBVxDiaqS%2BW8GotJhbknCb5Pf0C%2BDRuF4L3i%2BI4mrNrqUTkQvZnGlpGvW7cZ%2BuSyQEfgukGlM5N23WoEdcU9fwwGHz6CdMkhIeSDrvcV0xaKOsnbWjQRlkAGI3BxFVwL7zXqllSrWAbwjjNt9GWoagaxnRb0cundxQcS4trz0zFjly8Ju2qWGQTPz0xA3fz0gxVJLVTncFsW1428OC7W6w9fZEggiSvv79sGasNdKJBxndmf8caEhVMeVp062RgtZKZ3CZT6%2BDMs5M%2FdLaCMrxG0%2BUXQ4WzF4a9XCHsFquIP1zcGr7pcexXQAY7VDwl6BuVHGvDda3C4BVUMZ6%2Bql4wwdWDWZDAuhTkp8%2BZdKPaB5t%2BZCl2MUkMIK%2B3r8GOqUBgFhQN9viCRu5TG9lt0176nVRnqy%2FccnyGx7xtLmZosUXJf8NaGrSgXCZBJmYLbXAK%2Bs9m%2BAw2EiCiuURFOO8uZhieu1EnNwBlVTVTgwRXa9QpdamsxvUYDS%2BNumyyrBhKIbwRAEn%2BSd7ARLa0HY5CY2T79pFKUCOEnQRZJn42kqkxpCvq711sBNa3%2BAd%2Fsqyvy8bqPjSQcl%2Bbn8B34HYBB6HvMPK&X-Amz-Signature=0acc35c81ae4adc0dff2ae271fd46b48d4b0c33cee310a0902543c8970ad2c63&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK2BECDB%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDI7VJLNlYkOKj7%2Fw0oSbYKDIV8uPen%2FH6wRU1ZFdfJMgIgRuLIzg82KKmY0C0e5a70JDd1eZNnH8NmP7hXoqIs6ikqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHab4zdQo0aPFYbjsCrcA4W0la5G0Qu24IwUyXpsK3NcjxerfiPSbk%2FDvLkk5%2Bhdv3MlhhP%2BFixWEQUpj2KfgqowOw4LtNdf7p%2FAUnLjgoCqUGiIbc%2FLbbmFu2dLSZvck8KLh0utE9VE8eepB4mSr9HcIcLftcJBp4sk3Oye9vxu8vaqMz7O7XuH8nOASSludVk3BVF2xNGgz4A5dewBkn%2FPjLHa2NdMrfUZG9r7N%2FAEZIPtuaEOT5LIm53NyFAH3wXRR9yhADv7PegUX9amTBYJe7FBVxDiaqS%2BW8GotJhbknCb5Pf0C%2BDRuF4L3i%2BI4mrNrqUTkQvZnGlpGvW7cZ%2BuSyQEfgukGlM5N23WoEdcU9fwwGHz6CdMkhIeSDrvcV0xaKOsnbWjQRlkAGI3BxFVwL7zXqllSrWAbwjjNt9GWoagaxnRb0cundxQcS4trz0zFjly8Ju2qWGQTPz0xA3fz0gxVJLVTncFsW1428OC7W6w9fZEggiSvv79sGasNdKJBxndmf8caEhVMeVp062RgtZKZ3CZT6%2BDMs5M%2FdLaCMrxG0%2BUXQ4WzF4a9XCHsFquIP1zcGr7pcexXQAY7VDwl6BuVHGvDda3C4BVUMZ6%2Bql4wwdWDWZDAuhTkp8%2BZdKPaB5t%2BZCl2MUkMIK%2B3r8GOqUBgFhQN9viCRu5TG9lt0176nVRnqy%2FccnyGx7xtLmZosUXJf8NaGrSgXCZBJmYLbXAK%2Bs9m%2BAw2EiCiuURFOO8uZhieu1EnNwBlVTVTgwRXa9QpdamsxvUYDS%2BNumyyrBhKIbwRAEn%2BSd7ARLa0HY5CY2T79pFKUCOEnQRZJn42kqkxpCvq711sBNa3%2BAd%2Fsqyvy8bqPjSQcl%2Bbn8B34HYBB6HvMPK&X-Amz-Signature=2ddf69e8d32d8a288c5da3350a194c42376e79972418a29dce0c0bdbc0149b06&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
