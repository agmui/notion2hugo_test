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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYU6MN4G%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIAGg%2BK2GwYctD5sVqwgjEYZtUkzd6SEAoWmAcKdW2i7vAiEAwWBfAnjF9sanAx%2FSHjfY58Vv5LFw79%2BjHOKkPB5Nu%2Bkq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDOMggcX8ojH8HdhJXCrcA534U9muQsCfRTHDNv04ti20UyZJW5jzXbUqzlNbY1kOZHJjaLPu%2F0zkACqRaS5xyM2Bc820OaEc1LEGeADEe%2BOVB69zwO3aEc6I46hKPg5uX4%2BEaz0BDHQQmTToBYzy6hyC8cu%2BASsNRk%2Bv1jS%2F3r%2FzPh7jTZ3%2Blnj0qD3zKZ8gwtXqHe1YpfYPW866%2Fz2%2FALavTX%2FJGIswyOhXvbtQgBxuNIXLQ2pvtsXU1sI3dZoMLrDAlJVg17tjsM9K40Dgin0egcM10s3dKKZCm651A8iSBYm4WXMvcpbP3C6HSWDK9WdTTWQVPH4HynvP0dQBk5iRgbLLKW7VmGNECyRU7HjHHnsm1n5H3GuldO6s5dc%2FsIxz2Awlad4%2FeM1iWGq86ep8alsbeyi2fW%2BTTnKDaRKPDr%2Bkp1%2FcXR%2FAGJMg%2FlLA23f4y3Ht5AGv%2BZqfPReOJkww13uuJhxChyAZQvqXiSdKbdb%2FHYGx0257OeDlVgJpnoEjElWTpwU%2BX00%2FexsscDU%2BMFlA3HUDID5ZIraiV3A%2Bm0sOYcLyJqVv7ca3QtOOl04L5cHcnIRnB21Ncy12KKJBz27wt%2FqYkfZgmnErgJbJYEgnoH8ILjs5MvHmGcnyvOMI0KV5lcr2U31wMJXimcMGOqUBnsh7qUqR4yqJ9mf8oJEgVQ07tdB9xXkAcqA9eEPFXG0srgOaMCIFXAMk%2FIYxGBOfFmNWxElwTCW4ZGGw9AdLt9zMgBWChYpbJOya6ee3fLO%2Fe7hX1L9GgFC9CPGZ5CMNGGgGezdQ9tk4Br%2FsiyePx2EYaMla2ABtlHDmhJ6vsn6qp3aoT95Tdm4bvtKxqQkQzAM2Qj6w0r13phy0px1Mmi4b0N8K&X-Amz-Signature=cd22b0b5641ca95651eeef72b10b232661ee7a07af2953b9af760cdf45fa6e09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYU6MN4G%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIAGg%2BK2GwYctD5sVqwgjEYZtUkzd6SEAoWmAcKdW2i7vAiEAwWBfAnjF9sanAx%2FSHjfY58Vv5LFw79%2BjHOKkPB5Nu%2Bkq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDOMggcX8ojH8HdhJXCrcA534U9muQsCfRTHDNv04ti20UyZJW5jzXbUqzlNbY1kOZHJjaLPu%2F0zkACqRaS5xyM2Bc820OaEc1LEGeADEe%2BOVB69zwO3aEc6I46hKPg5uX4%2BEaz0BDHQQmTToBYzy6hyC8cu%2BASsNRk%2Bv1jS%2F3r%2FzPh7jTZ3%2Blnj0qD3zKZ8gwtXqHe1YpfYPW866%2Fz2%2FALavTX%2FJGIswyOhXvbtQgBxuNIXLQ2pvtsXU1sI3dZoMLrDAlJVg17tjsM9K40Dgin0egcM10s3dKKZCm651A8iSBYm4WXMvcpbP3C6HSWDK9WdTTWQVPH4HynvP0dQBk5iRgbLLKW7VmGNECyRU7HjHHnsm1n5H3GuldO6s5dc%2FsIxz2Awlad4%2FeM1iWGq86ep8alsbeyi2fW%2BTTnKDaRKPDr%2Bkp1%2FcXR%2FAGJMg%2FlLA23f4y3Ht5AGv%2BZqfPReOJkww13uuJhxChyAZQvqXiSdKbdb%2FHYGx0257OeDlVgJpnoEjElWTpwU%2BX00%2FexsscDU%2BMFlA3HUDID5ZIraiV3A%2Bm0sOYcLyJqVv7ca3QtOOl04L5cHcnIRnB21Ncy12KKJBz27wt%2FqYkfZgmnErgJbJYEgnoH8ILjs5MvHmGcnyvOMI0KV5lcr2U31wMJXimcMGOqUBnsh7qUqR4yqJ9mf8oJEgVQ07tdB9xXkAcqA9eEPFXG0srgOaMCIFXAMk%2FIYxGBOfFmNWxElwTCW4ZGGw9AdLt9zMgBWChYpbJOya6ee3fLO%2Fe7hX1L9GgFC9CPGZ5CMNGGgGezdQ9tk4Br%2FsiyePx2EYaMla2ABtlHDmhJ6vsn6qp3aoT95Tdm4bvtKxqQkQzAM2Qj6w0r13phy0px1Mmi4b0N8K&X-Amz-Signature=c9d4b39f32021637b59b36fa922a1a5a4898057f9e4d0f968312e4b479ade5d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYU6MN4G%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIAGg%2BK2GwYctD5sVqwgjEYZtUkzd6SEAoWmAcKdW2i7vAiEAwWBfAnjF9sanAx%2FSHjfY58Vv5LFw79%2BjHOKkPB5Nu%2Bkq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDOMggcX8ojH8HdhJXCrcA534U9muQsCfRTHDNv04ti20UyZJW5jzXbUqzlNbY1kOZHJjaLPu%2F0zkACqRaS5xyM2Bc820OaEc1LEGeADEe%2BOVB69zwO3aEc6I46hKPg5uX4%2BEaz0BDHQQmTToBYzy6hyC8cu%2BASsNRk%2Bv1jS%2F3r%2FzPh7jTZ3%2Blnj0qD3zKZ8gwtXqHe1YpfYPW866%2Fz2%2FALavTX%2FJGIswyOhXvbtQgBxuNIXLQ2pvtsXU1sI3dZoMLrDAlJVg17tjsM9K40Dgin0egcM10s3dKKZCm651A8iSBYm4WXMvcpbP3C6HSWDK9WdTTWQVPH4HynvP0dQBk5iRgbLLKW7VmGNECyRU7HjHHnsm1n5H3GuldO6s5dc%2FsIxz2Awlad4%2FeM1iWGq86ep8alsbeyi2fW%2BTTnKDaRKPDr%2Bkp1%2FcXR%2FAGJMg%2FlLA23f4y3Ht5AGv%2BZqfPReOJkww13uuJhxChyAZQvqXiSdKbdb%2FHYGx0257OeDlVgJpnoEjElWTpwU%2BX00%2FexsscDU%2BMFlA3HUDID5ZIraiV3A%2Bm0sOYcLyJqVv7ca3QtOOl04L5cHcnIRnB21Ncy12KKJBz27wt%2FqYkfZgmnErgJbJYEgnoH8ILjs5MvHmGcnyvOMI0KV5lcr2U31wMJXimcMGOqUBnsh7qUqR4yqJ9mf8oJEgVQ07tdB9xXkAcqA9eEPFXG0srgOaMCIFXAMk%2FIYxGBOfFmNWxElwTCW4ZGGw9AdLt9zMgBWChYpbJOya6ee3fLO%2Fe7hX1L9GgFC9CPGZ5CMNGGgGezdQ9tk4Br%2FsiyePx2EYaMla2ABtlHDmhJ6vsn6qp3aoT95Tdm4bvtKxqQkQzAM2Qj6w0r13phy0px1Mmi4b0N8K&X-Amz-Signature=bd045e9a1ae3d0750d7fd6dc93199e4160ed0f08c7f69cb4c1858ea2a1320c8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYU6MN4G%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIAGg%2BK2GwYctD5sVqwgjEYZtUkzd6SEAoWmAcKdW2i7vAiEAwWBfAnjF9sanAx%2FSHjfY58Vv5LFw79%2BjHOKkPB5Nu%2Bkq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDOMggcX8ojH8HdhJXCrcA534U9muQsCfRTHDNv04ti20UyZJW5jzXbUqzlNbY1kOZHJjaLPu%2F0zkACqRaS5xyM2Bc820OaEc1LEGeADEe%2BOVB69zwO3aEc6I46hKPg5uX4%2BEaz0BDHQQmTToBYzy6hyC8cu%2BASsNRk%2Bv1jS%2F3r%2FzPh7jTZ3%2Blnj0qD3zKZ8gwtXqHe1YpfYPW866%2Fz2%2FALavTX%2FJGIswyOhXvbtQgBxuNIXLQ2pvtsXU1sI3dZoMLrDAlJVg17tjsM9K40Dgin0egcM10s3dKKZCm651A8iSBYm4WXMvcpbP3C6HSWDK9WdTTWQVPH4HynvP0dQBk5iRgbLLKW7VmGNECyRU7HjHHnsm1n5H3GuldO6s5dc%2FsIxz2Awlad4%2FeM1iWGq86ep8alsbeyi2fW%2BTTnKDaRKPDr%2Bkp1%2FcXR%2FAGJMg%2FlLA23f4y3Ht5AGv%2BZqfPReOJkww13uuJhxChyAZQvqXiSdKbdb%2FHYGx0257OeDlVgJpnoEjElWTpwU%2BX00%2FexsscDU%2BMFlA3HUDID5ZIraiV3A%2Bm0sOYcLyJqVv7ca3QtOOl04L5cHcnIRnB21Ncy12KKJBz27wt%2FqYkfZgmnErgJbJYEgnoH8ILjs5MvHmGcnyvOMI0KV5lcr2U31wMJXimcMGOqUBnsh7qUqR4yqJ9mf8oJEgVQ07tdB9xXkAcqA9eEPFXG0srgOaMCIFXAMk%2FIYxGBOfFmNWxElwTCW4ZGGw9AdLt9zMgBWChYpbJOya6ee3fLO%2Fe7hX1L9GgFC9CPGZ5CMNGGgGezdQ9tk4Br%2FsiyePx2EYaMla2ABtlHDmhJ6vsn6qp3aoT95Tdm4bvtKxqQkQzAM2Qj6w0r13phy0px1Mmi4b0N8K&X-Amz-Signature=7754d23d9597588157e2725925024f620173bd4431a62793a2831e0effdcb248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYU6MN4G%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIAGg%2BK2GwYctD5sVqwgjEYZtUkzd6SEAoWmAcKdW2i7vAiEAwWBfAnjF9sanAx%2FSHjfY58Vv5LFw79%2BjHOKkPB5Nu%2Bkq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDOMggcX8ojH8HdhJXCrcA534U9muQsCfRTHDNv04ti20UyZJW5jzXbUqzlNbY1kOZHJjaLPu%2F0zkACqRaS5xyM2Bc820OaEc1LEGeADEe%2BOVB69zwO3aEc6I46hKPg5uX4%2BEaz0BDHQQmTToBYzy6hyC8cu%2BASsNRk%2Bv1jS%2F3r%2FzPh7jTZ3%2Blnj0qD3zKZ8gwtXqHe1YpfYPW866%2Fz2%2FALavTX%2FJGIswyOhXvbtQgBxuNIXLQ2pvtsXU1sI3dZoMLrDAlJVg17tjsM9K40Dgin0egcM10s3dKKZCm651A8iSBYm4WXMvcpbP3C6HSWDK9WdTTWQVPH4HynvP0dQBk5iRgbLLKW7VmGNECyRU7HjHHnsm1n5H3GuldO6s5dc%2FsIxz2Awlad4%2FeM1iWGq86ep8alsbeyi2fW%2BTTnKDaRKPDr%2Bkp1%2FcXR%2FAGJMg%2FlLA23f4y3Ht5AGv%2BZqfPReOJkww13uuJhxChyAZQvqXiSdKbdb%2FHYGx0257OeDlVgJpnoEjElWTpwU%2BX00%2FexsscDU%2BMFlA3HUDID5ZIraiV3A%2Bm0sOYcLyJqVv7ca3QtOOl04L5cHcnIRnB21Ncy12KKJBz27wt%2FqYkfZgmnErgJbJYEgnoH8ILjs5MvHmGcnyvOMI0KV5lcr2U31wMJXimcMGOqUBnsh7qUqR4yqJ9mf8oJEgVQ07tdB9xXkAcqA9eEPFXG0srgOaMCIFXAMk%2FIYxGBOfFmNWxElwTCW4ZGGw9AdLt9zMgBWChYpbJOya6ee3fLO%2Fe7hX1L9GgFC9CPGZ5CMNGGgGezdQ9tk4Br%2FsiyePx2EYaMla2ABtlHDmhJ6vsn6qp3aoT95Tdm4bvtKxqQkQzAM2Qj6w0r13phy0px1Mmi4b0N8K&X-Amz-Signature=4d61380610827d8122a936e2fed430f499f6432c016ae189cd488160b824abf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYU6MN4G%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIAGg%2BK2GwYctD5sVqwgjEYZtUkzd6SEAoWmAcKdW2i7vAiEAwWBfAnjF9sanAx%2FSHjfY58Vv5LFw79%2BjHOKkPB5Nu%2Bkq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDOMggcX8ojH8HdhJXCrcA534U9muQsCfRTHDNv04ti20UyZJW5jzXbUqzlNbY1kOZHJjaLPu%2F0zkACqRaS5xyM2Bc820OaEc1LEGeADEe%2BOVB69zwO3aEc6I46hKPg5uX4%2BEaz0BDHQQmTToBYzy6hyC8cu%2BASsNRk%2Bv1jS%2F3r%2FzPh7jTZ3%2Blnj0qD3zKZ8gwtXqHe1YpfYPW866%2Fz2%2FALavTX%2FJGIswyOhXvbtQgBxuNIXLQ2pvtsXU1sI3dZoMLrDAlJVg17tjsM9K40Dgin0egcM10s3dKKZCm651A8iSBYm4WXMvcpbP3C6HSWDK9WdTTWQVPH4HynvP0dQBk5iRgbLLKW7VmGNECyRU7HjHHnsm1n5H3GuldO6s5dc%2FsIxz2Awlad4%2FeM1iWGq86ep8alsbeyi2fW%2BTTnKDaRKPDr%2Bkp1%2FcXR%2FAGJMg%2FlLA23f4y3Ht5AGv%2BZqfPReOJkww13uuJhxChyAZQvqXiSdKbdb%2FHYGx0257OeDlVgJpnoEjElWTpwU%2BX00%2FexsscDU%2BMFlA3HUDID5ZIraiV3A%2Bm0sOYcLyJqVv7ca3QtOOl04L5cHcnIRnB21Ncy12KKJBz27wt%2FqYkfZgmnErgJbJYEgnoH8ILjs5MvHmGcnyvOMI0KV5lcr2U31wMJXimcMGOqUBnsh7qUqR4yqJ9mf8oJEgVQ07tdB9xXkAcqA9eEPFXG0srgOaMCIFXAMk%2FIYxGBOfFmNWxElwTCW4ZGGw9AdLt9zMgBWChYpbJOya6ee3fLO%2Fe7hX1L9GgFC9CPGZ5CMNGGgGezdQ9tk4Br%2FsiyePx2EYaMla2ABtlHDmhJ6vsn6qp3aoT95Tdm4bvtKxqQkQzAM2Qj6w0r13phy0px1Mmi4b0N8K&X-Amz-Signature=94658902eee4b39b429854fe0c218dfe751309dedc85ba982c410bdb35894b4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYU6MN4G%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIAGg%2BK2GwYctD5sVqwgjEYZtUkzd6SEAoWmAcKdW2i7vAiEAwWBfAnjF9sanAx%2FSHjfY58Vv5LFw79%2BjHOKkPB5Nu%2Bkq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDOMggcX8ojH8HdhJXCrcA534U9muQsCfRTHDNv04ti20UyZJW5jzXbUqzlNbY1kOZHJjaLPu%2F0zkACqRaS5xyM2Bc820OaEc1LEGeADEe%2BOVB69zwO3aEc6I46hKPg5uX4%2BEaz0BDHQQmTToBYzy6hyC8cu%2BASsNRk%2Bv1jS%2F3r%2FzPh7jTZ3%2Blnj0qD3zKZ8gwtXqHe1YpfYPW866%2Fz2%2FALavTX%2FJGIswyOhXvbtQgBxuNIXLQ2pvtsXU1sI3dZoMLrDAlJVg17tjsM9K40Dgin0egcM10s3dKKZCm651A8iSBYm4WXMvcpbP3C6HSWDK9WdTTWQVPH4HynvP0dQBk5iRgbLLKW7VmGNECyRU7HjHHnsm1n5H3GuldO6s5dc%2FsIxz2Awlad4%2FeM1iWGq86ep8alsbeyi2fW%2BTTnKDaRKPDr%2Bkp1%2FcXR%2FAGJMg%2FlLA23f4y3Ht5AGv%2BZqfPReOJkww13uuJhxChyAZQvqXiSdKbdb%2FHYGx0257OeDlVgJpnoEjElWTpwU%2BX00%2FexsscDU%2BMFlA3HUDID5ZIraiV3A%2Bm0sOYcLyJqVv7ca3QtOOl04L5cHcnIRnB21Ncy12KKJBz27wt%2FqYkfZgmnErgJbJYEgnoH8ILjs5MvHmGcnyvOMI0KV5lcr2U31wMJXimcMGOqUBnsh7qUqR4yqJ9mf8oJEgVQ07tdB9xXkAcqA9eEPFXG0srgOaMCIFXAMk%2FIYxGBOfFmNWxElwTCW4ZGGw9AdLt9zMgBWChYpbJOya6ee3fLO%2Fe7hX1L9GgFC9CPGZ5CMNGGgGezdQ9tk4Br%2FsiyePx2EYaMla2ABtlHDmhJ6vsn6qp3aoT95Tdm4bvtKxqQkQzAM2Qj6w0r13phy0px1Mmi4b0N8K&X-Amz-Signature=7f78981b32b01d16cf22b361adb085d049389de6252b7a47bbdd90ca41931711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYU6MN4G%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIAGg%2BK2GwYctD5sVqwgjEYZtUkzd6SEAoWmAcKdW2i7vAiEAwWBfAnjF9sanAx%2FSHjfY58Vv5LFw79%2BjHOKkPB5Nu%2Bkq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDOMggcX8ojH8HdhJXCrcA534U9muQsCfRTHDNv04ti20UyZJW5jzXbUqzlNbY1kOZHJjaLPu%2F0zkACqRaS5xyM2Bc820OaEc1LEGeADEe%2BOVB69zwO3aEc6I46hKPg5uX4%2BEaz0BDHQQmTToBYzy6hyC8cu%2BASsNRk%2Bv1jS%2F3r%2FzPh7jTZ3%2Blnj0qD3zKZ8gwtXqHe1YpfYPW866%2Fz2%2FALavTX%2FJGIswyOhXvbtQgBxuNIXLQ2pvtsXU1sI3dZoMLrDAlJVg17tjsM9K40Dgin0egcM10s3dKKZCm651A8iSBYm4WXMvcpbP3C6HSWDK9WdTTWQVPH4HynvP0dQBk5iRgbLLKW7VmGNECyRU7HjHHnsm1n5H3GuldO6s5dc%2FsIxz2Awlad4%2FeM1iWGq86ep8alsbeyi2fW%2BTTnKDaRKPDr%2Bkp1%2FcXR%2FAGJMg%2FlLA23f4y3Ht5AGv%2BZqfPReOJkww13uuJhxChyAZQvqXiSdKbdb%2FHYGx0257OeDlVgJpnoEjElWTpwU%2BX00%2FexsscDU%2BMFlA3HUDID5ZIraiV3A%2Bm0sOYcLyJqVv7ca3QtOOl04L5cHcnIRnB21Ncy12KKJBz27wt%2FqYkfZgmnErgJbJYEgnoH8ILjs5MvHmGcnyvOMI0KV5lcr2U31wMJXimcMGOqUBnsh7qUqR4yqJ9mf8oJEgVQ07tdB9xXkAcqA9eEPFXG0srgOaMCIFXAMk%2FIYxGBOfFmNWxElwTCW4ZGGw9AdLt9zMgBWChYpbJOya6ee3fLO%2Fe7hX1L9GgFC9CPGZ5CMNGGgGezdQ9tk4Br%2FsiyePx2EYaMla2ABtlHDmhJ6vsn6qp3aoT95Tdm4bvtKxqQkQzAM2Qj6w0r13phy0px1Mmi4b0N8K&X-Amz-Signature=ec9d5181e0e86212f59e85b9ade5b8dda529aac6ce59a0bd59b02c70810cec58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
