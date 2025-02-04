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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD4SJ4SI%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDFtQzENpgifkWaCkg4HHLVsIS%2FzteD0kNmGePnQ8l2uAiEA1bohR1pWO0aSodg8ik4P7lPLO%2BRsHZ7Dg0507z5Pa6wq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDLVj5qDKKxxokFiM%2BircAx3QaQFqtOvf%2FmN4SIU6o9tfPjON7UtmCfjZ%2Bb7Eojnbmm1do6VZ0y7a4xtRbvsE22fs7aQ2nBrlJQt%2BvOjNFuHlp5kIyP9sajEyJHmLti7IVBtGy6ZUaS%2BViyLWHFt72nLalFKXddecmVAunCnvu7eieY0d4typiTqaFqAcz%2BEcCZ%2BHZ8CE85rSJ%2FBzUXVWFv2sLbKFMWZNi%2Bp7%2F5J8WyokgiLFi9IGlxl1DozQYdgLiV4xZsToBnj1USbreM9fED37HYXTqpuo7tbbdliMVgGIwgDP3AjBCUDayIA5A66GVIaDo%2FlBpPlukSpQORM%2B5AnL35u%2BOtXpTOlPGvYVKRGzD3XMsWhXne5Q07jDtPIP64Rn0r6mvCFY53sQqNUAMMVLjxWv%2FJtOXemesqlF5714HrnYyOKvNnzKFYomZUGzSnBW%2F1ez6oH18Ux9ocD3RO%2FaJWj7wQ0dcxE5KzhBvTUkmk%2FvQAttqZ9NYyifu9T3SbwwRpgNzU4IXZtB%2B5q47zmTjpmLrnt35R8hwAqaqy30c9H1JhIr36iTJxfhYtvmcydoCRpE32BtBh2304WP6A0FS%2FDvNeqsa%2BbloxbfhurY3GSlb%2BvaWAJu8pWwg2XkxlaHPhr%2B19LHo7NOMILrhb0GOqUBKD0zfr8ToCNpU8KITSxrelYpoBlfndsmjLiRJ27B1RmFcDCS2RqQXeb7XmZ%2F0IGdYnYT0GPG9HOd2mCaThol1mJsK%2F19LbLnZTgpp%2FgNGmD%2F7eF05E8jyQIMoCmsVdrLTm8ETLFPtQ3SABG6ebiGnSFbQxh6kAsCbunZu3rV9pwheT3pzSeF0tsTgmnH4Moiskq4o1k9uXsOWK5FGcKPgKf31DV0&X-Amz-Signature=ddfcb88117b6897a6a9aeea6e70edec82b4f3aa80f8e7d116330e8044527936f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD4SJ4SI%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDFtQzENpgifkWaCkg4HHLVsIS%2FzteD0kNmGePnQ8l2uAiEA1bohR1pWO0aSodg8ik4P7lPLO%2BRsHZ7Dg0507z5Pa6wq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDLVj5qDKKxxokFiM%2BircAx3QaQFqtOvf%2FmN4SIU6o9tfPjON7UtmCfjZ%2Bb7Eojnbmm1do6VZ0y7a4xtRbvsE22fs7aQ2nBrlJQt%2BvOjNFuHlp5kIyP9sajEyJHmLti7IVBtGy6ZUaS%2BViyLWHFt72nLalFKXddecmVAunCnvu7eieY0d4typiTqaFqAcz%2BEcCZ%2BHZ8CE85rSJ%2FBzUXVWFv2sLbKFMWZNi%2Bp7%2F5J8WyokgiLFi9IGlxl1DozQYdgLiV4xZsToBnj1USbreM9fED37HYXTqpuo7tbbdliMVgGIwgDP3AjBCUDayIA5A66GVIaDo%2FlBpPlukSpQORM%2B5AnL35u%2BOtXpTOlPGvYVKRGzD3XMsWhXne5Q07jDtPIP64Rn0r6mvCFY53sQqNUAMMVLjxWv%2FJtOXemesqlF5714HrnYyOKvNnzKFYomZUGzSnBW%2F1ez6oH18Ux9ocD3RO%2FaJWj7wQ0dcxE5KzhBvTUkmk%2FvQAttqZ9NYyifu9T3SbwwRpgNzU4IXZtB%2B5q47zmTjpmLrnt35R8hwAqaqy30c9H1JhIr36iTJxfhYtvmcydoCRpE32BtBh2304WP6A0FS%2FDvNeqsa%2BbloxbfhurY3GSlb%2BvaWAJu8pWwg2XkxlaHPhr%2B19LHo7NOMILrhb0GOqUBKD0zfr8ToCNpU8KITSxrelYpoBlfndsmjLiRJ27B1RmFcDCS2RqQXeb7XmZ%2F0IGdYnYT0GPG9HOd2mCaThol1mJsK%2F19LbLnZTgpp%2FgNGmD%2F7eF05E8jyQIMoCmsVdrLTm8ETLFPtQ3SABG6ebiGnSFbQxh6kAsCbunZu3rV9pwheT3pzSeF0tsTgmnH4Moiskq4o1k9uXsOWK5FGcKPgKf31DV0&X-Amz-Signature=a572e44fe2e23f0f4f112fa7100b4b7e805f203ba74b207d562950847ffda941&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD4SJ4SI%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDFtQzENpgifkWaCkg4HHLVsIS%2FzteD0kNmGePnQ8l2uAiEA1bohR1pWO0aSodg8ik4P7lPLO%2BRsHZ7Dg0507z5Pa6wq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDLVj5qDKKxxokFiM%2BircAx3QaQFqtOvf%2FmN4SIU6o9tfPjON7UtmCfjZ%2Bb7Eojnbmm1do6VZ0y7a4xtRbvsE22fs7aQ2nBrlJQt%2BvOjNFuHlp5kIyP9sajEyJHmLti7IVBtGy6ZUaS%2BViyLWHFt72nLalFKXddecmVAunCnvu7eieY0d4typiTqaFqAcz%2BEcCZ%2BHZ8CE85rSJ%2FBzUXVWFv2sLbKFMWZNi%2Bp7%2F5J8WyokgiLFi9IGlxl1DozQYdgLiV4xZsToBnj1USbreM9fED37HYXTqpuo7tbbdliMVgGIwgDP3AjBCUDayIA5A66GVIaDo%2FlBpPlukSpQORM%2B5AnL35u%2BOtXpTOlPGvYVKRGzD3XMsWhXne5Q07jDtPIP64Rn0r6mvCFY53sQqNUAMMVLjxWv%2FJtOXemesqlF5714HrnYyOKvNnzKFYomZUGzSnBW%2F1ez6oH18Ux9ocD3RO%2FaJWj7wQ0dcxE5KzhBvTUkmk%2FvQAttqZ9NYyifu9T3SbwwRpgNzU4IXZtB%2B5q47zmTjpmLrnt35R8hwAqaqy30c9H1JhIr36iTJxfhYtvmcydoCRpE32BtBh2304WP6A0FS%2FDvNeqsa%2BbloxbfhurY3GSlb%2BvaWAJu8pWwg2XkxlaHPhr%2B19LHo7NOMILrhb0GOqUBKD0zfr8ToCNpU8KITSxrelYpoBlfndsmjLiRJ27B1RmFcDCS2RqQXeb7XmZ%2F0IGdYnYT0GPG9HOd2mCaThol1mJsK%2F19LbLnZTgpp%2FgNGmD%2F7eF05E8jyQIMoCmsVdrLTm8ETLFPtQ3SABG6ebiGnSFbQxh6kAsCbunZu3rV9pwheT3pzSeF0tsTgmnH4Moiskq4o1k9uXsOWK5FGcKPgKf31DV0&X-Amz-Signature=2240ef98001c668b4b1a42c9152bcdd54b011232c08ffda000fd0c31fc0fdc61&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD4SJ4SI%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDFtQzENpgifkWaCkg4HHLVsIS%2FzteD0kNmGePnQ8l2uAiEA1bohR1pWO0aSodg8ik4P7lPLO%2BRsHZ7Dg0507z5Pa6wq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDLVj5qDKKxxokFiM%2BircAx3QaQFqtOvf%2FmN4SIU6o9tfPjON7UtmCfjZ%2Bb7Eojnbmm1do6VZ0y7a4xtRbvsE22fs7aQ2nBrlJQt%2BvOjNFuHlp5kIyP9sajEyJHmLti7IVBtGy6ZUaS%2BViyLWHFt72nLalFKXddecmVAunCnvu7eieY0d4typiTqaFqAcz%2BEcCZ%2BHZ8CE85rSJ%2FBzUXVWFv2sLbKFMWZNi%2Bp7%2F5J8WyokgiLFi9IGlxl1DozQYdgLiV4xZsToBnj1USbreM9fED37HYXTqpuo7tbbdliMVgGIwgDP3AjBCUDayIA5A66GVIaDo%2FlBpPlukSpQORM%2B5AnL35u%2BOtXpTOlPGvYVKRGzD3XMsWhXne5Q07jDtPIP64Rn0r6mvCFY53sQqNUAMMVLjxWv%2FJtOXemesqlF5714HrnYyOKvNnzKFYomZUGzSnBW%2F1ez6oH18Ux9ocD3RO%2FaJWj7wQ0dcxE5KzhBvTUkmk%2FvQAttqZ9NYyifu9T3SbwwRpgNzU4IXZtB%2B5q47zmTjpmLrnt35R8hwAqaqy30c9H1JhIr36iTJxfhYtvmcydoCRpE32BtBh2304WP6A0FS%2FDvNeqsa%2BbloxbfhurY3GSlb%2BvaWAJu8pWwg2XkxlaHPhr%2B19LHo7NOMILrhb0GOqUBKD0zfr8ToCNpU8KITSxrelYpoBlfndsmjLiRJ27B1RmFcDCS2RqQXeb7XmZ%2F0IGdYnYT0GPG9HOd2mCaThol1mJsK%2F19LbLnZTgpp%2FgNGmD%2F7eF05E8jyQIMoCmsVdrLTm8ETLFPtQ3SABG6ebiGnSFbQxh6kAsCbunZu3rV9pwheT3pzSeF0tsTgmnH4Moiskq4o1k9uXsOWK5FGcKPgKf31DV0&X-Amz-Signature=80030cd2c78e2d0881483bca6258ec144fa730549ee217ac4ed1125f07409b20&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD4SJ4SI%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDFtQzENpgifkWaCkg4HHLVsIS%2FzteD0kNmGePnQ8l2uAiEA1bohR1pWO0aSodg8ik4P7lPLO%2BRsHZ7Dg0507z5Pa6wq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDLVj5qDKKxxokFiM%2BircAx3QaQFqtOvf%2FmN4SIU6o9tfPjON7UtmCfjZ%2Bb7Eojnbmm1do6VZ0y7a4xtRbvsE22fs7aQ2nBrlJQt%2BvOjNFuHlp5kIyP9sajEyJHmLti7IVBtGy6ZUaS%2BViyLWHFt72nLalFKXddecmVAunCnvu7eieY0d4typiTqaFqAcz%2BEcCZ%2BHZ8CE85rSJ%2FBzUXVWFv2sLbKFMWZNi%2Bp7%2F5J8WyokgiLFi9IGlxl1DozQYdgLiV4xZsToBnj1USbreM9fED37HYXTqpuo7tbbdliMVgGIwgDP3AjBCUDayIA5A66GVIaDo%2FlBpPlukSpQORM%2B5AnL35u%2BOtXpTOlPGvYVKRGzD3XMsWhXne5Q07jDtPIP64Rn0r6mvCFY53sQqNUAMMVLjxWv%2FJtOXemesqlF5714HrnYyOKvNnzKFYomZUGzSnBW%2F1ez6oH18Ux9ocD3RO%2FaJWj7wQ0dcxE5KzhBvTUkmk%2FvQAttqZ9NYyifu9T3SbwwRpgNzU4IXZtB%2B5q47zmTjpmLrnt35R8hwAqaqy30c9H1JhIr36iTJxfhYtvmcydoCRpE32BtBh2304WP6A0FS%2FDvNeqsa%2BbloxbfhurY3GSlb%2BvaWAJu8pWwg2XkxlaHPhr%2B19LHo7NOMILrhb0GOqUBKD0zfr8ToCNpU8KITSxrelYpoBlfndsmjLiRJ27B1RmFcDCS2RqQXeb7XmZ%2F0IGdYnYT0GPG9HOd2mCaThol1mJsK%2F19LbLnZTgpp%2FgNGmD%2F7eF05E8jyQIMoCmsVdrLTm8ETLFPtQ3SABG6ebiGnSFbQxh6kAsCbunZu3rV9pwheT3pzSeF0tsTgmnH4Moiskq4o1k9uXsOWK5FGcKPgKf31DV0&X-Amz-Signature=9fbf9ffdefed1cdd6addff1058c091c112bcbfd149a7b76a00350d41ad1e7db7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD4SJ4SI%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDFtQzENpgifkWaCkg4HHLVsIS%2FzteD0kNmGePnQ8l2uAiEA1bohR1pWO0aSodg8ik4P7lPLO%2BRsHZ7Dg0507z5Pa6wq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDLVj5qDKKxxokFiM%2BircAx3QaQFqtOvf%2FmN4SIU6o9tfPjON7UtmCfjZ%2Bb7Eojnbmm1do6VZ0y7a4xtRbvsE22fs7aQ2nBrlJQt%2BvOjNFuHlp5kIyP9sajEyJHmLti7IVBtGy6ZUaS%2BViyLWHFt72nLalFKXddecmVAunCnvu7eieY0d4typiTqaFqAcz%2BEcCZ%2BHZ8CE85rSJ%2FBzUXVWFv2sLbKFMWZNi%2Bp7%2F5J8WyokgiLFi9IGlxl1DozQYdgLiV4xZsToBnj1USbreM9fED37HYXTqpuo7tbbdliMVgGIwgDP3AjBCUDayIA5A66GVIaDo%2FlBpPlukSpQORM%2B5AnL35u%2BOtXpTOlPGvYVKRGzD3XMsWhXne5Q07jDtPIP64Rn0r6mvCFY53sQqNUAMMVLjxWv%2FJtOXemesqlF5714HrnYyOKvNnzKFYomZUGzSnBW%2F1ez6oH18Ux9ocD3RO%2FaJWj7wQ0dcxE5KzhBvTUkmk%2FvQAttqZ9NYyifu9T3SbwwRpgNzU4IXZtB%2B5q47zmTjpmLrnt35R8hwAqaqy30c9H1JhIr36iTJxfhYtvmcydoCRpE32BtBh2304WP6A0FS%2FDvNeqsa%2BbloxbfhurY3GSlb%2BvaWAJu8pWwg2XkxlaHPhr%2B19LHo7NOMILrhb0GOqUBKD0zfr8ToCNpU8KITSxrelYpoBlfndsmjLiRJ27B1RmFcDCS2RqQXeb7XmZ%2F0IGdYnYT0GPG9HOd2mCaThol1mJsK%2F19LbLnZTgpp%2FgNGmD%2F7eF05E8jyQIMoCmsVdrLTm8ETLFPtQ3SABG6ebiGnSFbQxh6kAsCbunZu3rV9pwheT3pzSeF0tsTgmnH4Moiskq4o1k9uXsOWK5FGcKPgKf31DV0&X-Amz-Signature=8344988c19518ead40087910e98459240522efd1e49b717be5de22b957956c9c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD4SJ4SI%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDFtQzENpgifkWaCkg4HHLVsIS%2FzteD0kNmGePnQ8l2uAiEA1bohR1pWO0aSodg8ik4P7lPLO%2BRsHZ7Dg0507z5Pa6wq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDLVj5qDKKxxokFiM%2BircAx3QaQFqtOvf%2FmN4SIU6o9tfPjON7UtmCfjZ%2Bb7Eojnbmm1do6VZ0y7a4xtRbvsE22fs7aQ2nBrlJQt%2BvOjNFuHlp5kIyP9sajEyJHmLti7IVBtGy6ZUaS%2BViyLWHFt72nLalFKXddecmVAunCnvu7eieY0d4typiTqaFqAcz%2BEcCZ%2BHZ8CE85rSJ%2FBzUXVWFv2sLbKFMWZNi%2Bp7%2F5J8WyokgiLFi9IGlxl1DozQYdgLiV4xZsToBnj1USbreM9fED37HYXTqpuo7tbbdliMVgGIwgDP3AjBCUDayIA5A66GVIaDo%2FlBpPlukSpQORM%2B5AnL35u%2BOtXpTOlPGvYVKRGzD3XMsWhXne5Q07jDtPIP64Rn0r6mvCFY53sQqNUAMMVLjxWv%2FJtOXemesqlF5714HrnYyOKvNnzKFYomZUGzSnBW%2F1ez6oH18Ux9ocD3RO%2FaJWj7wQ0dcxE5KzhBvTUkmk%2FvQAttqZ9NYyifu9T3SbwwRpgNzU4IXZtB%2B5q47zmTjpmLrnt35R8hwAqaqy30c9H1JhIr36iTJxfhYtvmcydoCRpE32BtBh2304WP6A0FS%2FDvNeqsa%2BbloxbfhurY3GSlb%2BvaWAJu8pWwg2XkxlaHPhr%2B19LHo7NOMILrhb0GOqUBKD0zfr8ToCNpU8KITSxrelYpoBlfndsmjLiRJ27B1RmFcDCS2RqQXeb7XmZ%2F0IGdYnYT0GPG9HOd2mCaThol1mJsK%2F19LbLnZTgpp%2FgNGmD%2F7eF05E8jyQIMoCmsVdrLTm8ETLFPtQ3SABG6ebiGnSFbQxh6kAsCbunZu3rV9pwheT3pzSeF0tsTgmnH4Moiskq4o1k9uXsOWK5FGcKPgKf31DV0&X-Amz-Signature=4dfcd46aec3a9593bb27a2e60fb28491b929c6f2d9b860740e9af285934e27ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD4SJ4SI%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDFtQzENpgifkWaCkg4HHLVsIS%2FzteD0kNmGePnQ8l2uAiEA1bohR1pWO0aSodg8ik4P7lPLO%2BRsHZ7Dg0507z5Pa6wq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDLVj5qDKKxxokFiM%2BircAx3QaQFqtOvf%2FmN4SIU6o9tfPjON7UtmCfjZ%2Bb7Eojnbmm1do6VZ0y7a4xtRbvsE22fs7aQ2nBrlJQt%2BvOjNFuHlp5kIyP9sajEyJHmLti7IVBtGy6ZUaS%2BViyLWHFt72nLalFKXddecmVAunCnvu7eieY0d4typiTqaFqAcz%2BEcCZ%2BHZ8CE85rSJ%2FBzUXVWFv2sLbKFMWZNi%2Bp7%2F5J8WyokgiLFi9IGlxl1DozQYdgLiV4xZsToBnj1USbreM9fED37HYXTqpuo7tbbdliMVgGIwgDP3AjBCUDayIA5A66GVIaDo%2FlBpPlukSpQORM%2B5AnL35u%2BOtXpTOlPGvYVKRGzD3XMsWhXne5Q07jDtPIP64Rn0r6mvCFY53sQqNUAMMVLjxWv%2FJtOXemesqlF5714HrnYyOKvNnzKFYomZUGzSnBW%2F1ez6oH18Ux9ocD3RO%2FaJWj7wQ0dcxE5KzhBvTUkmk%2FvQAttqZ9NYyifu9T3SbwwRpgNzU4IXZtB%2B5q47zmTjpmLrnt35R8hwAqaqy30c9H1JhIr36iTJxfhYtvmcydoCRpE32BtBh2304WP6A0FS%2FDvNeqsa%2BbloxbfhurY3GSlb%2BvaWAJu8pWwg2XkxlaHPhr%2B19LHo7NOMILrhb0GOqUBKD0zfr8ToCNpU8KITSxrelYpoBlfndsmjLiRJ27B1RmFcDCS2RqQXeb7XmZ%2F0IGdYnYT0GPG9HOd2mCaThol1mJsK%2F19LbLnZTgpp%2FgNGmD%2F7eF05E8jyQIMoCmsVdrLTm8ETLFPtQ3SABG6ebiGnSFbQxh6kAsCbunZu3rV9pwheT3pzSeF0tsTgmnH4Moiskq4o1k9uXsOWK5FGcKPgKf31DV0&X-Amz-Signature=fa7736c868ca325019c39b0387d0b0c847807a464930dfbc9419d31ab51d21fc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
