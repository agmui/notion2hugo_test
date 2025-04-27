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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3UH64R4%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH%2Bodu6bbDvIFY0kc0WckcJtwYNPy0nSsxPMR4dGJ%2FDgIgUKQNBTlbMSwU5cYiEBYKfb%2FOUEhb%2BlMrQ7gGINShgU0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDSe03ObNucf%2BqXl8ircA%2BJSRih2edh2VbkkFDmLG0uwNyBtbiSRX%2FQ1DElkQTqWqYKFWRTLVOeJF7x6IekBhIAmcKU4mHvSWTinEHaGLf%2Fn0PHAGJ%2FjCKUyapnARPi%2BccdY9u4ZQKXelNxIKxsrCsWpDWMDtT4fMVw4pmZAZ0lyGyamNR%2F%2FmGahJS0L8K7lDXTO0dSIoMOLkrSX1Og%2BV8H55HcyYWqNsn9azFqgr30LrzPLjVPJUXQUrPx6fyZMfU%2BKLPugB97BJBDk7%2BC6l2T9nRbxJnjNjoNuWnfFwgMEEjcUyC6jWGdZ1eDMuTY%2Bfof8Fxt5k74JWgeGPXT%2BYku6PWEKQvMnWvYneSzZLPKf%2BMSzctqpdO6xLUjgmGdh9PeEwbAgofPO5B04dJCsas1fh3X7%2BNMb7GBEwFYjAi0zGqWir6ShF5pvDf7o%2FfsnwIOioobd5Qz3ape%2BfhG3NNsMZS%2BR5qu7vVHV5qG2J9%2FloHjYqD1XXn%2BTDdM5i7lhiqjESK2C28XnZeKPpc9rVJqE93njfu1hi8P214y0tJgfzbdwFxRhhBfCdWAkBz55UJRpg8bmi1ev5LAcwMlj1TP%2FbQ5XgdimGy36pH7ADM99vI2Yupfv%2BJp0rDCHu4vUHPCjGhSVQvX0UaR%2BMK7TtsAGOqUB0yPGFpKTiPfc5YGm4JmzgiR%2BTpVifdOmriysL8ovs7duAkUjrswbVrgqwZIJUfSk5gFZ9xjCmy79mLow7ii2ITlz8Cva%2FdRO1qbWKOVS0t8YyvFFjBIwWlTVsx%2FYzpILW327yMIzepvQARX9NVWl1GrMmXdZ3JAZD4Mrzuyj%2F8%2FIuMIqnMcGspDZQs6DDM%2BjhYcAgPXrOklVRg6a%2FToj0aMIgSX7&X-Amz-Signature=0d7a88077d829cd1b28c61820e0075465635e4c08155e8a290bcf0b5823fb446&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3UH64R4%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH%2Bodu6bbDvIFY0kc0WckcJtwYNPy0nSsxPMR4dGJ%2FDgIgUKQNBTlbMSwU5cYiEBYKfb%2FOUEhb%2BlMrQ7gGINShgU0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDSe03ObNucf%2BqXl8ircA%2BJSRih2edh2VbkkFDmLG0uwNyBtbiSRX%2FQ1DElkQTqWqYKFWRTLVOeJF7x6IekBhIAmcKU4mHvSWTinEHaGLf%2Fn0PHAGJ%2FjCKUyapnARPi%2BccdY9u4ZQKXelNxIKxsrCsWpDWMDtT4fMVw4pmZAZ0lyGyamNR%2F%2FmGahJS0L8K7lDXTO0dSIoMOLkrSX1Og%2BV8H55HcyYWqNsn9azFqgr30LrzPLjVPJUXQUrPx6fyZMfU%2BKLPugB97BJBDk7%2BC6l2T9nRbxJnjNjoNuWnfFwgMEEjcUyC6jWGdZ1eDMuTY%2Bfof8Fxt5k74JWgeGPXT%2BYku6PWEKQvMnWvYneSzZLPKf%2BMSzctqpdO6xLUjgmGdh9PeEwbAgofPO5B04dJCsas1fh3X7%2BNMb7GBEwFYjAi0zGqWir6ShF5pvDf7o%2FfsnwIOioobd5Qz3ape%2BfhG3NNsMZS%2BR5qu7vVHV5qG2J9%2FloHjYqD1XXn%2BTDdM5i7lhiqjESK2C28XnZeKPpc9rVJqE93njfu1hi8P214y0tJgfzbdwFxRhhBfCdWAkBz55UJRpg8bmi1ev5LAcwMlj1TP%2FbQ5XgdimGy36pH7ADM99vI2Yupfv%2BJp0rDCHu4vUHPCjGhSVQvX0UaR%2BMK7TtsAGOqUB0yPGFpKTiPfc5YGm4JmzgiR%2BTpVifdOmriysL8ovs7duAkUjrswbVrgqwZIJUfSk5gFZ9xjCmy79mLow7ii2ITlz8Cva%2FdRO1qbWKOVS0t8YyvFFjBIwWlTVsx%2FYzpILW327yMIzepvQARX9NVWl1GrMmXdZ3JAZD4Mrzuyj%2F8%2FIuMIqnMcGspDZQs6DDM%2BjhYcAgPXrOklVRg6a%2FToj0aMIgSX7&X-Amz-Signature=7c1a97dca5c3df095734174746b3907fd1e40180c6bc0ab40d7a64d324fa84c7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3UH64R4%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH%2Bodu6bbDvIFY0kc0WckcJtwYNPy0nSsxPMR4dGJ%2FDgIgUKQNBTlbMSwU5cYiEBYKfb%2FOUEhb%2BlMrQ7gGINShgU0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDSe03ObNucf%2BqXl8ircA%2BJSRih2edh2VbkkFDmLG0uwNyBtbiSRX%2FQ1DElkQTqWqYKFWRTLVOeJF7x6IekBhIAmcKU4mHvSWTinEHaGLf%2Fn0PHAGJ%2FjCKUyapnARPi%2BccdY9u4ZQKXelNxIKxsrCsWpDWMDtT4fMVw4pmZAZ0lyGyamNR%2F%2FmGahJS0L8K7lDXTO0dSIoMOLkrSX1Og%2BV8H55HcyYWqNsn9azFqgr30LrzPLjVPJUXQUrPx6fyZMfU%2BKLPugB97BJBDk7%2BC6l2T9nRbxJnjNjoNuWnfFwgMEEjcUyC6jWGdZ1eDMuTY%2Bfof8Fxt5k74JWgeGPXT%2BYku6PWEKQvMnWvYneSzZLPKf%2BMSzctqpdO6xLUjgmGdh9PeEwbAgofPO5B04dJCsas1fh3X7%2BNMb7GBEwFYjAi0zGqWir6ShF5pvDf7o%2FfsnwIOioobd5Qz3ape%2BfhG3NNsMZS%2BR5qu7vVHV5qG2J9%2FloHjYqD1XXn%2BTDdM5i7lhiqjESK2C28XnZeKPpc9rVJqE93njfu1hi8P214y0tJgfzbdwFxRhhBfCdWAkBz55UJRpg8bmi1ev5LAcwMlj1TP%2FbQ5XgdimGy36pH7ADM99vI2Yupfv%2BJp0rDCHu4vUHPCjGhSVQvX0UaR%2BMK7TtsAGOqUB0yPGFpKTiPfc5YGm4JmzgiR%2BTpVifdOmriysL8ovs7duAkUjrswbVrgqwZIJUfSk5gFZ9xjCmy79mLow7ii2ITlz8Cva%2FdRO1qbWKOVS0t8YyvFFjBIwWlTVsx%2FYzpILW327yMIzepvQARX9NVWl1GrMmXdZ3JAZD4Mrzuyj%2F8%2FIuMIqnMcGspDZQs6DDM%2BjhYcAgPXrOklVRg6a%2FToj0aMIgSX7&X-Amz-Signature=bc4391b335506277ea0a411e0d3ce51c654502eb7be651f896bbcdd943977ee0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3UH64R4%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH%2Bodu6bbDvIFY0kc0WckcJtwYNPy0nSsxPMR4dGJ%2FDgIgUKQNBTlbMSwU5cYiEBYKfb%2FOUEhb%2BlMrQ7gGINShgU0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDSe03ObNucf%2BqXl8ircA%2BJSRih2edh2VbkkFDmLG0uwNyBtbiSRX%2FQ1DElkQTqWqYKFWRTLVOeJF7x6IekBhIAmcKU4mHvSWTinEHaGLf%2Fn0PHAGJ%2FjCKUyapnARPi%2BccdY9u4ZQKXelNxIKxsrCsWpDWMDtT4fMVw4pmZAZ0lyGyamNR%2F%2FmGahJS0L8K7lDXTO0dSIoMOLkrSX1Og%2BV8H55HcyYWqNsn9azFqgr30LrzPLjVPJUXQUrPx6fyZMfU%2BKLPugB97BJBDk7%2BC6l2T9nRbxJnjNjoNuWnfFwgMEEjcUyC6jWGdZ1eDMuTY%2Bfof8Fxt5k74JWgeGPXT%2BYku6PWEKQvMnWvYneSzZLPKf%2BMSzctqpdO6xLUjgmGdh9PeEwbAgofPO5B04dJCsas1fh3X7%2BNMb7GBEwFYjAi0zGqWir6ShF5pvDf7o%2FfsnwIOioobd5Qz3ape%2BfhG3NNsMZS%2BR5qu7vVHV5qG2J9%2FloHjYqD1XXn%2BTDdM5i7lhiqjESK2C28XnZeKPpc9rVJqE93njfu1hi8P214y0tJgfzbdwFxRhhBfCdWAkBz55UJRpg8bmi1ev5LAcwMlj1TP%2FbQ5XgdimGy36pH7ADM99vI2Yupfv%2BJp0rDCHu4vUHPCjGhSVQvX0UaR%2BMK7TtsAGOqUB0yPGFpKTiPfc5YGm4JmzgiR%2BTpVifdOmriysL8ovs7duAkUjrswbVrgqwZIJUfSk5gFZ9xjCmy79mLow7ii2ITlz8Cva%2FdRO1qbWKOVS0t8YyvFFjBIwWlTVsx%2FYzpILW327yMIzepvQARX9NVWl1GrMmXdZ3JAZD4Mrzuyj%2F8%2FIuMIqnMcGspDZQs6DDM%2BjhYcAgPXrOklVRg6a%2FToj0aMIgSX7&X-Amz-Signature=c5322cc9117d35a509147b35dc40faaf80f6c699b86f31d118d0d23e9f04f30b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3UH64R4%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH%2Bodu6bbDvIFY0kc0WckcJtwYNPy0nSsxPMR4dGJ%2FDgIgUKQNBTlbMSwU5cYiEBYKfb%2FOUEhb%2BlMrQ7gGINShgU0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDSe03ObNucf%2BqXl8ircA%2BJSRih2edh2VbkkFDmLG0uwNyBtbiSRX%2FQ1DElkQTqWqYKFWRTLVOeJF7x6IekBhIAmcKU4mHvSWTinEHaGLf%2Fn0PHAGJ%2FjCKUyapnARPi%2BccdY9u4ZQKXelNxIKxsrCsWpDWMDtT4fMVw4pmZAZ0lyGyamNR%2F%2FmGahJS0L8K7lDXTO0dSIoMOLkrSX1Og%2BV8H55HcyYWqNsn9azFqgr30LrzPLjVPJUXQUrPx6fyZMfU%2BKLPugB97BJBDk7%2BC6l2T9nRbxJnjNjoNuWnfFwgMEEjcUyC6jWGdZ1eDMuTY%2Bfof8Fxt5k74JWgeGPXT%2BYku6PWEKQvMnWvYneSzZLPKf%2BMSzctqpdO6xLUjgmGdh9PeEwbAgofPO5B04dJCsas1fh3X7%2BNMb7GBEwFYjAi0zGqWir6ShF5pvDf7o%2FfsnwIOioobd5Qz3ape%2BfhG3NNsMZS%2BR5qu7vVHV5qG2J9%2FloHjYqD1XXn%2BTDdM5i7lhiqjESK2C28XnZeKPpc9rVJqE93njfu1hi8P214y0tJgfzbdwFxRhhBfCdWAkBz55UJRpg8bmi1ev5LAcwMlj1TP%2FbQ5XgdimGy36pH7ADM99vI2Yupfv%2BJp0rDCHu4vUHPCjGhSVQvX0UaR%2BMK7TtsAGOqUB0yPGFpKTiPfc5YGm4JmzgiR%2BTpVifdOmriysL8ovs7duAkUjrswbVrgqwZIJUfSk5gFZ9xjCmy79mLow7ii2ITlz8Cva%2FdRO1qbWKOVS0t8YyvFFjBIwWlTVsx%2FYzpILW327yMIzepvQARX9NVWl1GrMmXdZ3JAZD4Mrzuyj%2F8%2FIuMIqnMcGspDZQs6DDM%2BjhYcAgPXrOklVRg6a%2FToj0aMIgSX7&X-Amz-Signature=eaf7085d9339133f07849d8861f61cc7ae54ed8ae006a4e4be4f5c4fa05fce58&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3UH64R4%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH%2Bodu6bbDvIFY0kc0WckcJtwYNPy0nSsxPMR4dGJ%2FDgIgUKQNBTlbMSwU5cYiEBYKfb%2FOUEhb%2BlMrQ7gGINShgU0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDSe03ObNucf%2BqXl8ircA%2BJSRih2edh2VbkkFDmLG0uwNyBtbiSRX%2FQ1DElkQTqWqYKFWRTLVOeJF7x6IekBhIAmcKU4mHvSWTinEHaGLf%2Fn0PHAGJ%2FjCKUyapnARPi%2BccdY9u4ZQKXelNxIKxsrCsWpDWMDtT4fMVw4pmZAZ0lyGyamNR%2F%2FmGahJS0L8K7lDXTO0dSIoMOLkrSX1Og%2BV8H55HcyYWqNsn9azFqgr30LrzPLjVPJUXQUrPx6fyZMfU%2BKLPugB97BJBDk7%2BC6l2T9nRbxJnjNjoNuWnfFwgMEEjcUyC6jWGdZ1eDMuTY%2Bfof8Fxt5k74JWgeGPXT%2BYku6PWEKQvMnWvYneSzZLPKf%2BMSzctqpdO6xLUjgmGdh9PeEwbAgofPO5B04dJCsas1fh3X7%2BNMb7GBEwFYjAi0zGqWir6ShF5pvDf7o%2FfsnwIOioobd5Qz3ape%2BfhG3NNsMZS%2BR5qu7vVHV5qG2J9%2FloHjYqD1XXn%2BTDdM5i7lhiqjESK2C28XnZeKPpc9rVJqE93njfu1hi8P214y0tJgfzbdwFxRhhBfCdWAkBz55UJRpg8bmi1ev5LAcwMlj1TP%2FbQ5XgdimGy36pH7ADM99vI2Yupfv%2BJp0rDCHu4vUHPCjGhSVQvX0UaR%2BMK7TtsAGOqUB0yPGFpKTiPfc5YGm4JmzgiR%2BTpVifdOmriysL8ovs7duAkUjrswbVrgqwZIJUfSk5gFZ9xjCmy79mLow7ii2ITlz8Cva%2FdRO1qbWKOVS0t8YyvFFjBIwWlTVsx%2FYzpILW327yMIzepvQARX9NVWl1GrMmXdZ3JAZD4Mrzuyj%2F8%2FIuMIqnMcGspDZQs6DDM%2BjhYcAgPXrOklVRg6a%2FToj0aMIgSX7&X-Amz-Signature=eba1e68b43658c6560eeb13b379f263fe02fbb64c20ac7cdebc79eb418fe1664&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3UH64R4%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH%2Bodu6bbDvIFY0kc0WckcJtwYNPy0nSsxPMR4dGJ%2FDgIgUKQNBTlbMSwU5cYiEBYKfb%2FOUEhb%2BlMrQ7gGINShgU0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDSe03ObNucf%2BqXl8ircA%2BJSRih2edh2VbkkFDmLG0uwNyBtbiSRX%2FQ1DElkQTqWqYKFWRTLVOeJF7x6IekBhIAmcKU4mHvSWTinEHaGLf%2Fn0PHAGJ%2FjCKUyapnARPi%2BccdY9u4ZQKXelNxIKxsrCsWpDWMDtT4fMVw4pmZAZ0lyGyamNR%2F%2FmGahJS0L8K7lDXTO0dSIoMOLkrSX1Og%2BV8H55HcyYWqNsn9azFqgr30LrzPLjVPJUXQUrPx6fyZMfU%2BKLPugB97BJBDk7%2BC6l2T9nRbxJnjNjoNuWnfFwgMEEjcUyC6jWGdZ1eDMuTY%2Bfof8Fxt5k74JWgeGPXT%2BYku6PWEKQvMnWvYneSzZLPKf%2BMSzctqpdO6xLUjgmGdh9PeEwbAgofPO5B04dJCsas1fh3X7%2BNMb7GBEwFYjAi0zGqWir6ShF5pvDf7o%2FfsnwIOioobd5Qz3ape%2BfhG3NNsMZS%2BR5qu7vVHV5qG2J9%2FloHjYqD1XXn%2BTDdM5i7lhiqjESK2C28XnZeKPpc9rVJqE93njfu1hi8P214y0tJgfzbdwFxRhhBfCdWAkBz55UJRpg8bmi1ev5LAcwMlj1TP%2FbQ5XgdimGy36pH7ADM99vI2Yupfv%2BJp0rDCHu4vUHPCjGhSVQvX0UaR%2BMK7TtsAGOqUB0yPGFpKTiPfc5YGm4JmzgiR%2BTpVifdOmriysL8ovs7duAkUjrswbVrgqwZIJUfSk5gFZ9xjCmy79mLow7ii2ITlz8Cva%2FdRO1qbWKOVS0t8YyvFFjBIwWlTVsx%2FYzpILW327yMIzepvQARX9NVWl1GrMmXdZ3JAZD4Mrzuyj%2F8%2FIuMIqnMcGspDZQs6DDM%2BjhYcAgPXrOklVRg6a%2FToj0aMIgSX7&X-Amz-Signature=29882b46c7f7d22fb078cf5a39aac27a6a2d28d8c33cf0c06808c6df0c28f578&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3UH64R4%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH%2Bodu6bbDvIFY0kc0WckcJtwYNPy0nSsxPMR4dGJ%2FDgIgUKQNBTlbMSwU5cYiEBYKfb%2FOUEhb%2BlMrQ7gGINShgU0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDSe03ObNucf%2BqXl8ircA%2BJSRih2edh2VbkkFDmLG0uwNyBtbiSRX%2FQ1DElkQTqWqYKFWRTLVOeJF7x6IekBhIAmcKU4mHvSWTinEHaGLf%2Fn0PHAGJ%2FjCKUyapnARPi%2BccdY9u4ZQKXelNxIKxsrCsWpDWMDtT4fMVw4pmZAZ0lyGyamNR%2F%2FmGahJS0L8K7lDXTO0dSIoMOLkrSX1Og%2BV8H55HcyYWqNsn9azFqgr30LrzPLjVPJUXQUrPx6fyZMfU%2BKLPugB97BJBDk7%2BC6l2T9nRbxJnjNjoNuWnfFwgMEEjcUyC6jWGdZ1eDMuTY%2Bfof8Fxt5k74JWgeGPXT%2BYku6PWEKQvMnWvYneSzZLPKf%2BMSzctqpdO6xLUjgmGdh9PeEwbAgofPO5B04dJCsas1fh3X7%2BNMb7GBEwFYjAi0zGqWir6ShF5pvDf7o%2FfsnwIOioobd5Qz3ape%2BfhG3NNsMZS%2BR5qu7vVHV5qG2J9%2FloHjYqD1XXn%2BTDdM5i7lhiqjESK2C28XnZeKPpc9rVJqE93njfu1hi8P214y0tJgfzbdwFxRhhBfCdWAkBz55UJRpg8bmi1ev5LAcwMlj1TP%2FbQ5XgdimGy36pH7ADM99vI2Yupfv%2BJp0rDCHu4vUHPCjGhSVQvX0UaR%2BMK7TtsAGOqUB0yPGFpKTiPfc5YGm4JmzgiR%2BTpVifdOmriysL8ovs7duAkUjrswbVrgqwZIJUfSk5gFZ9xjCmy79mLow7ii2ITlz8Cva%2FdRO1qbWKOVS0t8YyvFFjBIwWlTVsx%2FYzpILW327yMIzepvQARX9NVWl1GrMmXdZ3JAZD4Mrzuyj%2F8%2FIuMIqnMcGspDZQs6DDM%2BjhYcAgPXrOklVRg6a%2FToj0aMIgSX7&X-Amz-Signature=b7bda2ada9d0f8ebce4755b328418c81d119d5f3d26c311aa7540d108152f669&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
