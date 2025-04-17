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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663FSENKS%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqO4oX55VTg6urbmEXtMhWc3t9WshvJZNUat55ROFcOAIgA2cBj2j1I9cyTljV2gNr7K8d%2BWAfHghGxx1%2FF170dJUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDFJ2O1f8ajmINZAfoSrcA4yz3BbijH41dEJrsPdvOLYqdEzBStIkqvu0VERfYrf1EOawjsbuwjpFAUMb4%2B7QhGpEaz%2BVCkAvTAhwdm7qLJekRF8ebDR6s3pPnZrmpyNHo2N2NOLItZ6QAIk%2FFunNxsx4%2BQ5vy6lC%2Byi5l3d99OQJ1osqQ2NMvBwWBGiQA0jhWBYdZjXMQlq%2BmU1WX0IVr7BzmZNyy0xoJUQPWJVXBds5WfIke8whNvro9Pd04eFpRd4Gch%2FCObWjwg1uueTjlTNf2IXnKsjUZcFvdU7muS%2BAPDSGW3VPSM3xnMTFkYOS6ocKt5ggXT5irN4nTo39fULaTyX3ySzBPyum38JH16pQqAAsjibY%2BQi%2BuLrRHMf0eK37Zk5DRA6rsEiSuXrl5UeDMrq1zBHb09p6RDpr10KRTZjwRTXNno2LiqbTUQHXkSwLCDjfpN5M2zhGoG9LRB0UM9hZti1B60h7fGxdbD3qRV2akFMDCeQW3jLcG9Hjk0vNeZItTZlqYkk1qwqbQS9LxPP2u2fdspdUFEBu%2FLLjBkNnP7hHZpzO6aNwr4cdViv%2FDj85bvSbGgpNbtNNOp8IgK8If7%2B%2F17deaiXBPReFFHsT5Dkx4jIT6oj%2FzDee7O4Fjdfv1STLlE3zMLbHg8AGOqUBhAMa%2BbkGlXNJBQz0oxIjATpzCrCmkBpuCOyTKlGWtjLHtAEPNT8g6DY1wsJzTWFOMuYU4T1vxEmQPAX5PEtoFC1rBQWxBdeZ6iThY%2Bi0%2BFOY6%2FWhr9y5Fe1R%2BT5Pdb76Y%2FSlZ9KlpY6rD1KyD6%2FNSLnmnymJo3pCi2pu0JdWpGkQgsnoD9h5Vw860v8yovG1NjS0YT%2F4h8SvNdBOWSVS3GZFGc0e&X-Amz-Signature=41a3f837766968209351903b2aad903625b5c86e96dbd0d45f1a77898ad5e02b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663FSENKS%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqO4oX55VTg6urbmEXtMhWc3t9WshvJZNUat55ROFcOAIgA2cBj2j1I9cyTljV2gNr7K8d%2BWAfHghGxx1%2FF170dJUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDFJ2O1f8ajmINZAfoSrcA4yz3BbijH41dEJrsPdvOLYqdEzBStIkqvu0VERfYrf1EOawjsbuwjpFAUMb4%2B7QhGpEaz%2BVCkAvTAhwdm7qLJekRF8ebDR6s3pPnZrmpyNHo2N2NOLItZ6QAIk%2FFunNxsx4%2BQ5vy6lC%2Byi5l3d99OQJ1osqQ2NMvBwWBGiQA0jhWBYdZjXMQlq%2BmU1WX0IVr7BzmZNyy0xoJUQPWJVXBds5WfIke8whNvro9Pd04eFpRd4Gch%2FCObWjwg1uueTjlTNf2IXnKsjUZcFvdU7muS%2BAPDSGW3VPSM3xnMTFkYOS6ocKt5ggXT5irN4nTo39fULaTyX3ySzBPyum38JH16pQqAAsjibY%2BQi%2BuLrRHMf0eK37Zk5DRA6rsEiSuXrl5UeDMrq1zBHb09p6RDpr10KRTZjwRTXNno2LiqbTUQHXkSwLCDjfpN5M2zhGoG9LRB0UM9hZti1B60h7fGxdbD3qRV2akFMDCeQW3jLcG9Hjk0vNeZItTZlqYkk1qwqbQS9LxPP2u2fdspdUFEBu%2FLLjBkNnP7hHZpzO6aNwr4cdViv%2FDj85bvSbGgpNbtNNOp8IgK8If7%2B%2F17deaiXBPReFFHsT5Dkx4jIT6oj%2FzDee7O4Fjdfv1STLlE3zMLbHg8AGOqUBhAMa%2BbkGlXNJBQz0oxIjATpzCrCmkBpuCOyTKlGWtjLHtAEPNT8g6DY1wsJzTWFOMuYU4T1vxEmQPAX5PEtoFC1rBQWxBdeZ6iThY%2Bi0%2BFOY6%2FWhr9y5Fe1R%2BT5Pdb76Y%2FSlZ9KlpY6rD1KyD6%2FNSLnmnymJo3pCi2pu0JdWpGkQgsnoD9h5Vw860v8yovG1NjS0YT%2F4h8SvNdBOWSVS3GZFGc0e&X-Amz-Signature=c42308d9738d469c206fa6d85085637f168eb2d4c775a9958920fd64359a08a4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663FSENKS%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqO4oX55VTg6urbmEXtMhWc3t9WshvJZNUat55ROFcOAIgA2cBj2j1I9cyTljV2gNr7K8d%2BWAfHghGxx1%2FF170dJUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDFJ2O1f8ajmINZAfoSrcA4yz3BbijH41dEJrsPdvOLYqdEzBStIkqvu0VERfYrf1EOawjsbuwjpFAUMb4%2B7QhGpEaz%2BVCkAvTAhwdm7qLJekRF8ebDR6s3pPnZrmpyNHo2N2NOLItZ6QAIk%2FFunNxsx4%2BQ5vy6lC%2Byi5l3d99OQJ1osqQ2NMvBwWBGiQA0jhWBYdZjXMQlq%2BmU1WX0IVr7BzmZNyy0xoJUQPWJVXBds5WfIke8whNvro9Pd04eFpRd4Gch%2FCObWjwg1uueTjlTNf2IXnKsjUZcFvdU7muS%2BAPDSGW3VPSM3xnMTFkYOS6ocKt5ggXT5irN4nTo39fULaTyX3ySzBPyum38JH16pQqAAsjibY%2BQi%2BuLrRHMf0eK37Zk5DRA6rsEiSuXrl5UeDMrq1zBHb09p6RDpr10KRTZjwRTXNno2LiqbTUQHXkSwLCDjfpN5M2zhGoG9LRB0UM9hZti1B60h7fGxdbD3qRV2akFMDCeQW3jLcG9Hjk0vNeZItTZlqYkk1qwqbQS9LxPP2u2fdspdUFEBu%2FLLjBkNnP7hHZpzO6aNwr4cdViv%2FDj85bvSbGgpNbtNNOp8IgK8If7%2B%2F17deaiXBPReFFHsT5Dkx4jIT6oj%2FzDee7O4Fjdfv1STLlE3zMLbHg8AGOqUBhAMa%2BbkGlXNJBQz0oxIjATpzCrCmkBpuCOyTKlGWtjLHtAEPNT8g6DY1wsJzTWFOMuYU4T1vxEmQPAX5PEtoFC1rBQWxBdeZ6iThY%2Bi0%2BFOY6%2FWhr9y5Fe1R%2BT5Pdb76Y%2FSlZ9KlpY6rD1KyD6%2FNSLnmnymJo3pCi2pu0JdWpGkQgsnoD9h5Vw860v8yovG1NjS0YT%2F4h8SvNdBOWSVS3GZFGc0e&X-Amz-Signature=c9517771dc8abd811e791535e8d8a78e20241f81d9cb946674be52f372792411&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663FSENKS%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqO4oX55VTg6urbmEXtMhWc3t9WshvJZNUat55ROFcOAIgA2cBj2j1I9cyTljV2gNr7K8d%2BWAfHghGxx1%2FF170dJUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDFJ2O1f8ajmINZAfoSrcA4yz3BbijH41dEJrsPdvOLYqdEzBStIkqvu0VERfYrf1EOawjsbuwjpFAUMb4%2B7QhGpEaz%2BVCkAvTAhwdm7qLJekRF8ebDR6s3pPnZrmpyNHo2N2NOLItZ6QAIk%2FFunNxsx4%2BQ5vy6lC%2Byi5l3d99OQJ1osqQ2NMvBwWBGiQA0jhWBYdZjXMQlq%2BmU1WX0IVr7BzmZNyy0xoJUQPWJVXBds5WfIke8whNvro9Pd04eFpRd4Gch%2FCObWjwg1uueTjlTNf2IXnKsjUZcFvdU7muS%2BAPDSGW3VPSM3xnMTFkYOS6ocKt5ggXT5irN4nTo39fULaTyX3ySzBPyum38JH16pQqAAsjibY%2BQi%2BuLrRHMf0eK37Zk5DRA6rsEiSuXrl5UeDMrq1zBHb09p6RDpr10KRTZjwRTXNno2LiqbTUQHXkSwLCDjfpN5M2zhGoG9LRB0UM9hZti1B60h7fGxdbD3qRV2akFMDCeQW3jLcG9Hjk0vNeZItTZlqYkk1qwqbQS9LxPP2u2fdspdUFEBu%2FLLjBkNnP7hHZpzO6aNwr4cdViv%2FDj85bvSbGgpNbtNNOp8IgK8If7%2B%2F17deaiXBPReFFHsT5Dkx4jIT6oj%2FzDee7O4Fjdfv1STLlE3zMLbHg8AGOqUBhAMa%2BbkGlXNJBQz0oxIjATpzCrCmkBpuCOyTKlGWtjLHtAEPNT8g6DY1wsJzTWFOMuYU4T1vxEmQPAX5PEtoFC1rBQWxBdeZ6iThY%2Bi0%2BFOY6%2FWhr9y5Fe1R%2BT5Pdb76Y%2FSlZ9KlpY6rD1KyD6%2FNSLnmnymJo3pCi2pu0JdWpGkQgsnoD9h5Vw860v8yovG1NjS0YT%2F4h8SvNdBOWSVS3GZFGc0e&X-Amz-Signature=08b8e38d7687adc18f8d4de03b816266d0bd5b76dec09b5308f7ccd3b42ebd59&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663FSENKS%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqO4oX55VTg6urbmEXtMhWc3t9WshvJZNUat55ROFcOAIgA2cBj2j1I9cyTljV2gNr7K8d%2BWAfHghGxx1%2FF170dJUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDFJ2O1f8ajmINZAfoSrcA4yz3BbijH41dEJrsPdvOLYqdEzBStIkqvu0VERfYrf1EOawjsbuwjpFAUMb4%2B7QhGpEaz%2BVCkAvTAhwdm7qLJekRF8ebDR6s3pPnZrmpyNHo2N2NOLItZ6QAIk%2FFunNxsx4%2BQ5vy6lC%2Byi5l3d99OQJ1osqQ2NMvBwWBGiQA0jhWBYdZjXMQlq%2BmU1WX0IVr7BzmZNyy0xoJUQPWJVXBds5WfIke8whNvro9Pd04eFpRd4Gch%2FCObWjwg1uueTjlTNf2IXnKsjUZcFvdU7muS%2BAPDSGW3VPSM3xnMTFkYOS6ocKt5ggXT5irN4nTo39fULaTyX3ySzBPyum38JH16pQqAAsjibY%2BQi%2BuLrRHMf0eK37Zk5DRA6rsEiSuXrl5UeDMrq1zBHb09p6RDpr10KRTZjwRTXNno2LiqbTUQHXkSwLCDjfpN5M2zhGoG9LRB0UM9hZti1B60h7fGxdbD3qRV2akFMDCeQW3jLcG9Hjk0vNeZItTZlqYkk1qwqbQS9LxPP2u2fdspdUFEBu%2FLLjBkNnP7hHZpzO6aNwr4cdViv%2FDj85bvSbGgpNbtNNOp8IgK8If7%2B%2F17deaiXBPReFFHsT5Dkx4jIT6oj%2FzDee7O4Fjdfv1STLlE3zMLbHg8AGOqUBhAMa%2BbkGlXNJBQz0oxIjATpzCrCmkBpuCOyTKlGWtjLHtAEPNT8g6DY1wsJzTWFOMuYU4T1vxEmQPAX5PEtoFC1rBQWxBdeZ6iThY%2Bi0%2BFOY6%2FWhr9y5Fe1R%2BT5Pdb76Y%2FSlZ9KlpY6rD1KyD6%2FNSLnmnymJo3pCi2pu0JdWpGkQgsnoD9h5Vw860v8yovG1NjS0YT%2F4h8SvNdBOWSVS3GZFGc0e&X-Amz-Signature=ce0cd0739897c83cd9a05b3d0e909fc54a52aba10cd7d95a19d1da59e4aa0908&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663FSENKS%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqO4oX55VTg6urbmEXtMhWc3t9WshvJZNUat55ROFcOAIgA2cBj2j1I9cyTljV2gNr7K8d%2BWAfHghGxx1%2FF170dJUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDFJ2O1f8ajmINZAfoSrcA4yz3BbijH41dEJrsPdvOLYqdEzBStIkqvu0VERfYrf1EOawjsbuwjpFAUMb4%2B7QhGpEaz%2BVCkAvTAhwdm7qLJekRF8ebDR6s3pPnZrmpyNHo2N2NOLItZ6QAIk%2FFunNxsx4%2BQ5vy6lC%2Byi5l3d99OQJ1osqQ2NMvBwWBGiQA0jhWBYdZjXMQlq%2BmU1WX0IVr7BzmZNyy0xoJUQPWJVXBds5WfIke8whNvro9Pd04eFpRd4Gch%2FCObWjwg1uueTjlTNf2IXnKsjUZcFvdU7muS%2BAPDSGW3VPSM3xnMTFkYOS6ocKt5ggXT5irN4nTo39fULaTyX3ySzBPyum38JH16pQqAAsjibY%2BQi%2BuLrRHMf0eK37Zk5DRA6rsEiSuXrl5UeDMrq1zBHb09p6RDpr10KRTZjwRTXNno2LiqbTUQHXkSwLCDjfpN5M2zhGoG9LRB0UM9hZti1B60h7fGxdbD3qRV2akFMDCeQW3jLcG9Hjk0vNeZItTZlqYkk1qwqbQS9LxPP2u2fdspdUFEBu%2FLLjBkNnP7hHZpzO6aNwr4cdViv%2FDj85bvSbGgpNbtNNOp8IgK8If7%2B%2F17deaiXBPReFFHsT5Dkx4jIT6oj%2FzDee7O4Fjdfv1STLlE3zMLbHg8AGOqUBhAMa%2BbkGlXNJBQz0oxIjATpzCrCmkBpuCOyTKlGWtjLHtAEPNT8g6DY1wsJzTWFOMuYU4T1vxEmQPAX5PEtoFC1rBQWxBdeZ6iThY%2Bi0%2BFOY6%2FWhr9y5Fe1R%2BT5Pdb76Y%2FSlZ9KlpY6rD1KyD6%2FNSLnmnymJo3pCi2pu0JdWpGkQgsnoD9h5Vw860v8yovG1NjS0YT%2F4h8SvNdBOWSVS3GZFGc0e&X-Amz-Signature=ffb013b077e3aa025d4a4de82f97e0d09c2fbd94cb1c33c4dd5fe99bbb972c91&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663FSENKS%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqO4oX55VTg6urbmEXtMhWc3t9WshvJZNUat55ROFcOAIgA2cBj2j1I9cyTljV2gNr7K8d%2BWAfHghGxx1%2FF170dJUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDFJ2O1f8ajmINZAfoSrcA4yz3BbijH41dEJrsPdvOLYqdEzBStIkqvu0VERfYrf1EOawjsbuwjpFAUMb4%2B7QhGpEaz%2BVCkAvTAhwdm7qLJekRF8ebDR6s3pPnZrmpyNHo2N2NOLItZ6QAIk%2FFunNxsx4%2BQ5vy6lC%2Byi5l3d99OQJ1osqQ2NMvBwWBGiQA0jhWBYdZjXMQlq%2BmU1WX0IVr7BzmZNyy0xoJUQPWJVXBds5WfIke8whNvro9Pd04eFpRd4Gch%2FCObWjwg1uueTjlTNf2IXnKsjUZcFvdU7muS%2BAPDSGW3VPSM3xnMTFkYOS6ocKt5ggXT5irN4nTo39fULaTyX3ySzBPyum38JH16pQqAAsjibY%2BQi%2BuLrRHMf0eK37Zk5DRA6rsEiSuXrl5UeDMrq1zBHb09p6RDpr10KRTZjwRTXNno2LiqbTUQHXkSwLCDjfpN5M2zhGoG9LRB0UM9hZti1B60h7fGxdbD3qRV2akFMDCeQW3jLcG9Hjk0vNeZItTZlqYkk1qwqbQS9LxPP2u2fdspdUFEBu%2FLLjBkNnP7hHZpzO6aNwr4cdViv%2FDj85bvSbGgpNbtNNOp8IgK8If7%2B%2F17deaiXBPReFFHsT5Dkx4jIT6oj%2FzDee7O4Fjdfv1STLlE3zMLbHg8AGOqUBhAMa%2BbkGlXNJBQz0oxIjATpzCrCmkBpuCOyTKlGWtjLHtAEPNT8g6DY1wsJzTWFOMuYU4T1vxEmQPAX5PEtoFC1rBQWxBdeZ6iThY%2Bi0%2BFOY6%2FWhr9y5Fe1R%2BT5Pdb76Y%2FSlZ9KlpY6rD1KyD6%2FNSLnmnymJo3pCi2pu0JdWpGkQgsnoD9h5Vw860v8yovG1NjS0YT%2F4h8SvNdBOWSVS3GZFGc0e&X-Amz-Signature=ddf6da1d0474c80ad9f381894884c7bd6d16cd230b6a31d0be8cc022cfda3d6f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663FSENKS%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqO4oX55VTg6urbmEXtMhWc3t9WshvJZNUat55ROFcOAIgA2cBj2j1I9cyTljV2gNr7K8d%2BWAfHghGxx1%2FF170dJUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDFJ2O1f8ajmINZAfoSrcA4yz3BbijH41dEJrsPdvOLYqdEzBStIkqvu0VERfYrf1EOawjsbuwjpFAUMb4%2B7QhGpEaz%2BVCkAvTAhwdm7qLJekRF8ebDR6s3pPnZrmpyNHo2N2NOLItZ6QAIk%2FFunNxsx4%2BQ5vy6lC%2Byi5l3d99OQJ1osqQ2NMvBwWBGiQA0jhWBYdZjXMQlq%2BmU1WX0IVr7BzmZNyy0xoJUQPWJVXBds5WfIke8whNvro9Pd04eFpRd4Gch%2FCObWjwg1uueTjlTNf2IXnKsjUZcFvdU7muS%2BAPDSGW3VPSM3xnMTFkYOS6ocKt5ggXT5irN4nTo39fULaTyX3ySzBPyum38JH16pQqAAsjibY%2BQi%2BuLrRHMf0eK37Zk5DRA6rsEiSuXrl5UeDMrq1zBHb09p6RDpr10KRTZjwRTXNno2LiqbTUQHXkSwLCDjfpN5M2zhGoG9LRB0UM9hZti1B60h7fGxdbD3qRV2akFMDCeQW3jLcG9Hjk0vNeZItTZlqYkk1qwqbQS9LxPP2u2fdspdUFEBu%2FLLjBkNnP7hHZpzO6aNwr4cdViv%2FDj85bvSbGgpNbtNNOp8IgK8If7%2B%2F17deaiXBPReFFHsT5Dkx4jIT6oj%2FzDee7O4Fjdfv1STLlE3zMLbHg8AGOqUBhAMa%2BbkGlXNJBQz0oxIjATpzCrCmkBpuCOyTKlGWtjLHtAEPNT8g6DY1wsJzTWFOMuYU4T1vxEmQPAX5PEtoFC1rBQWxBdeZ6iThY%2Bi0%2BFOY6%2FWhr9y5Fe1R%2BT5Pdb76Y%2FSlZ9KlpY6rD1KyD6%2FNSLnmnymJo3pCi2pu0JdWpGkQgsnoD9h5Vw860v8yovG1NjS0YT%2F4h8SvNdBOWSVS3GZFGc0e&X-Amz-Signature=09531866a2a061d402ae85b53615969201cccd60aa2e60c035f4b9e1f293e4ed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
