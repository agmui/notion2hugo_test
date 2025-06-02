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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGQTEPN3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIEr76i40V4%2FsZYrIv%2FWLrpR5u7NvANu%2BtYjpHiVG11iRAiEAhE5QnedSwyDiN41xe%2FZJbADcOZbQJWJqbCWQ%2B8wH4bcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9B7rP7T5wVKuCn0yrcA1W9L2jJB7dKGcxbqIzIswYstBll4iV3B5Ia9xE%2B4PDWoeGycZ0HU1pPBvuzMTDrQdA8ytO7KzIn2XnBkSQBnVXDWY06mzhYS4TFpsrLNSbeyQbmAZLcm5766ARgkTJSf49AnphSrWGPOWz5BfjZgMxgY8wAULI4NrkFosjByO45axEm5Doct0VqiQ5hpmoBJJUZLXTHXOkyFTU2vXpudrThQM2hsWVOEOLVPT13UJ2zef9%2BDSPqCjKZ6gdzic5wS%2BAQr4c%2BXJePOlN7o%2BU58o1VeHRfFDOMphp1wIOYurqeNie6%2FHabZTh4gra89mtU3WxdROJ9oi3zFxf8KTy2RrG6U0Zja1z74JNU0i5nF5qgcRvdO2IQr1Hdj3X7uI8u7vFFNxE3zPOBClfzO7JP4NiSBSvVrbGRNzoLlSUduMmSqxT2jm4xMz5ysJEHrs2EV7ZGZgr5YfKZFRUiisfN8gYcB5mFpJdccF099P%2FfhelCVyhKLn1bb1Xlgy1efITot4%2BiaUkCZ%2FVL4V7tWIRUvkqLk2SZrM2JVgJdJ1dye1clRbzhgzEoRDE7U5T%2BMf8yq04S%2FZ%2BkxNj0AYxbfdRWkCUbqsVoMaCBlGbdad5Mqqr0DgQn7FhmDKSlwH9qMMuy98EGOqUBq%2F2mIdbz5jFf6Dtx1Ar8jqi2xJzZ0tA6i4ylUCxD%2BlLHzqdEFAwa5a9uDln3FJvhir4ZCMsXW7XKSna48%2B1pqlQI43vCOluffKZolXcAfjvTCPZ15YmM6MlhY0SQRhZpZfT81pIB%2FjNMZIqxFuxH87tz0cRgJMmlOQP1U1hzsVpo20NhrhLvHrEZP34h%2BnQGurZ9rdPfyXyKMq%2Bx2nR%2FCc9VUay4&X-Amz-Signature=9c952c45921422c167ccacd15b5a8be233106da90fdb2b9e0495e88e038665cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGQTEPN3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIEr76i40V4%2FsZYrIv%2FWLrpR5u7NvANu%2BtYjpHiVG11iRAiEAhE5QnedSwyDiN41xe%2FZJbADcOZbQJWJqbCWQ%2B8wH4bcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9B7rP7T5wVKuCn0yrcA1W9L2jJB7dKGcxbqIzIswYstBll4iV3B5Ia9xE%2B4PDWoeGycZ0HU1pPBvuzMTDrQdA8ytO7KzIn2XnBkSQBnVXDWY06mzhYS4TFpsrLNSbeyQbmAZLcm5766ARgkTJSf49AnphSrWGPOWz5BfjZgMxgY8wAULI4NrkFosjByO45axEm5Doct0VqiQ5hpmoBJJUZLXTHXOkyFTU2vXpudrThQM2hsWVOEOLVPT13UJ2zef9%2BDSPqCjKZ6gdzic5wS%2BAQr4c%2BXJePOlN7o%2BU58o1VeHRfFDOMphp1wIOYurqeNie6%2FHabZTh4gra89mtU3WxdROJ9oi3zFxf8KTy2RrG6U0Zja1z74JNU0i5nF5qgcRvdO2IQr1Hdj3X7uI8u7vFFNxE3zPOBClfzO7JP4NiSBSvVrbGRNzoLlSUduMmSqxT2jm4xMz5ysJEHrs2EV7ZGZgr5YfKZFRUiisfN8gYcB5mFpJdccF099P%2FfhelCVyhKLn1bb1Xlgy1efITot4%2BiaUkCZ%2FVL4V7tWIRUvkqLk2SZrM2JVgJdJ1dye1clRbzhgzEoRDE7U5T%2BMf8yq04S%2FZ%2BkxNj0AYxbfdRWkCUbqsVoMaCBlGbdad5Mqqr0DgQn7FhmDKSlwH9qMMuy98EGOqUBq%2F2mIdbz5jFf6Dtx1Ar8jqi2xJzZ0tA6i4ylUCxD%2BlLHzqdEFAwa5a9uDln3FJvhir4ZCMsXW7XKSna48%2B1pqlQI43vCOluffKZolXcAfjvTCPZ15YmM6MlhY0SQRhZpZfT81pIB%2FjNMZIqxFuxH87tz0cRgJMmlOQP1U1hzsVpo20NhrhLvHrEZP34h%2BnQGurZ9rdPfyXyKMq%2Bx2nR%2FCc9VUay4&X-Amz-Signature=b5996d701ef34b90417a320961e5090d61efed6f78441c981c15626add076c5a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGQTEPN3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIEr76i40V4%2FsZYrIv%2FWLrpR5u7NvANu%2BtYjpHiVG11iRAiEAhE5QnedSwyDiN41xe%2FZJbADcOZbQJWJqbCWQ%2B8wH4bcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9B7rP7T5wVKuCn0yrcA1W9L2jJB7dKGcxbqIzIswYstBll4iV3B5Ia9xE%2B4PDWoeGycZ0HU1pPBvuzMTDrQdA8ytO7KzIn2XnBkSQBnVXDWY06mzhYS4TFpsrLNSbeyQbmAZLcm5766ARgkTJSf49AnphSrWGPOWz5BfjZgMxgY8wAULI4NrkFosjByO45axEm5Doct0VqiQ5hpmoBJJUZLXTHXOkyFTU2vXpudrThQM2hsWVOEOLVPT13UJ2zef9%2BDSPqCjKZ6gdzic5wS%2BAQr4c%2BXJePOlN7o%2BU58o1VeHRfFDOMphp1wIOYurqeNie6%2FHabZTh4gra89mtU3WxdROJ9oi3zFxf8KTy2RrG6U0Zja1z74JNU0i5nF5qgcRvdO2IQr1Hdj3X7uI8u7vFFNxE3zPOBClfzO7JP4NiSBSvVrbGRNzoLlSUduMmSqxT2jm4xMz5ysJEHrs2EV7ZGZgr5YfKZFRUiisfN8gYcB5mFpJdccF099P%2FfhelCVyhKLn1bb1Xlgy1efITot4%2BiaUkCZ%2FVL4V7tWIRUvkqLk2SZrM2JVgJdJ1dye1clRbzhgzEoRDE7U5T%2BMf8yq04S%2FZ%2BkxNj0AYxbfdRWkCUbqsVoMaCBlGbdad5Mqqr0DgQn7FhmDKSlwH9qMMuy98EGOqUBq%2F2mIdbz5jFf6Dtx1Ar8jqi2xJzZ0tA6i4ylUCxD%2BlLHzqdEFAwa5a9uDln3FJvhir4ZCMsXW7XKSna48%2B1pqlQI43vCOluffKZolXcAfjvTCPZ15YmM6MlhY0SQRhZpZfT81pIB%2FjNMZIqxFuxH87tz0cRgJMmlOQP1U1hzsVpo20NhrhLvHrEZP34h%2BnQGurZ9rdPfyXyKMq%2Bx2nR%2FCc9VUay4&X-Amz-Signature=771e5c40ec5629e61bfd5f2745e9365630af28513fcb56a1f51aa976a1ee8abc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGQTEPN3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIEr76i40V4%2FsZYrIv%2FWLrpR5u7NvANu%2BtYjpHiVG11iRAiEAhE5QnedSwyDiN41xe%2FZJbADcOZbQJWJqbCWQ%2B8wH4bcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9B7rP7T5wVKuCn0yrcA1W9L2jJB7dKGcxbqIzIswYstBll4iV3B5Ia9xE%2B4PDWoeGycZ0HU1pPBvuzMTDrQdA8ytO7KzIn2XnBkSQBnVXDWY06mzhYS4TFpsrLNSbeyQbmAZLcm5766ARgkTJSf49AnphSrWGPOWz5BfjZgMxgY8wAULI4NrkFosjByO45axEm5Doct0VqiQ5hpmoBJJUZLXTHXOkyFTU2vXpudrThQM2hsWVOEOLVPT13UJ2zef9%2BDSPqCjKZ6gdzic5wS%2BAQr4c%2BXJePOlN7o%2BU58o1VeHRfFDOMphp1wIOYurqeNie6%2FHabZTh4gra89mtU3WxdROJ9oi3zFxf8KTy2RrG6U0Zja1z74JNU0i5nF5qgcRvdO2IQr1Hdj3X7uI8u7vFFNxE3zPOBClfzO7JP4NiSBSvVrbGRNzoLlSUduMmSqxT2jm4xMz5ysJEHrs2EV7ZGZgr5YfKZFRUiisfN8gYcB5mFpJdccF099P%2FfhelCVyhKLn1bb1Xlgy1efITot4%2BiaUkCZ%2FVL4V7tWIRUvkqLk2SZrM2JVgJdJ1dye1clRbzhgzEoRDE7U5T%2BMf8yq04S%2FZ%2BkxNj0AYxbfdRWkCUbqsVoMaCBlGbdad5Mqqr0DgQn7FhmDKSlwH9qMMuy98EGOqUBq%2F2mIdbz5jFf6Dtx1Ar8jqi2xJzZ0tA6i4ylUCxD%2BlLHzqdEFAwa5a9uDln3FJvhir4ZCMsXW7XKSna48%2B1pqlQI43vCOluffKZolXcAfjvTCPZ15YmM6MlhY0SQRhZpZfT81pIB%2FjNMZIqxFuxH87tz0cRgJMmlOQP1U1hzsVpo20NhrhLvHrEZP34h%2BnQGurZ9rdPfyXyKMq%2Bx2nR%2FCc9VUay4&X-Amz-Signature=b78d4e91cdbc9d9c4a298ec8b0a9871b314ca59abbdc73d1d10b3ed5257f392b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGQTEPN3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIEr76i40V4%2FsZYrIv%2FWLrpR5u7NvANu%2BtYjpHiVG11iRAiEAhE5QnedSwyDiN41xe%2FZJbADcOZbQJWJqbCWQ%2B8wH4bcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9B7rP7T5wVKuCn0yrcA1W9L2jJB7dKGcxbqIzIswYstBll4iV3B5Ia9xE%2B4PDWoeGycZ0HU1pPBvuzMTDrQdA8ytO7KzIn2XnBkSQBnVXDWY06mzhYS4TFpsrLNSbeyQbmAZLcm5766ARgkTJSf49AnphSrWGPOWz5BfjZgMxgY8wAULI4NrkFosjByO45axEm5Doct0VqiQ5hpmoBJJUZLXTHXOkyFTU2vXpudrThQM2hsWVOEOLVPT13UJ2zef9%2BDSPqCjKZ6gdzic5wS%2BAQr4c%2BXJePOlN7o%2BU58o1VeHRfFDOMphp1wIOYurqeNie6%2FHabZTh4gra89mtU3WxdROJ9oi3zFxf8KTy2RrG6U0Zja1z74JNU0i5nF5qgcRvdO2IQr1Hdj3X7uI8u7vFFNxE3zPOBClfzO7JP4NiSBSvVrbGRNzoLlSUduMmSqxT2jm4xMz5ysJEHrs2EV7ZGZgr5YfKZFRUiisfN8gYcB5mFpJdccF099P%2FfhelCVyhKLn1bb1Xlgy1efITot4%2BiaUkCZ%2FVL4V7tWIRUvkqLk2SZrM2JVgJdJ1dye1clRbzhgzEoRDE7U5T%2BMf8yq04S%2FZ%2BkxNj0AYxbfdRWkCUbqsVoMaCBlGbdad5Mqqr0DgQn7FhmDKSlwH9qMMuy98EGOqUBq%2F2mIdbz5jFf6Dtx1Ar8jqi2xJzZ0tA6i4ylUCxD%2BlLHzqdEFAwa5a9uDln3FJvhir4ZCMsXW7XKSna48%2B1pqlQI43vCOluffKZolXcAfjvTCPZ15YmM6MlhY0SQRhZpZfT81pIB%2FjNMZIqxFuxH87tz0cRgJMmlOQP1U1hzsVpo20NhrhLvHrEZP34h%2BnQGurZ9rdPfyXyKMq%2Bx2nR%2FCc9VUay4&X-Amz-Signature=c00fbad25a875828a15ff3b86b4f71ed2fead7d2275f759735ba4976c69469f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGQTEPN3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIEr76i40V4%2FsZYrIv%2FWLrpR5u7NvANu%2BtYjpHiVG11iRAiEAhE5QnedSwyDiN41xe%2FZJbADcOZbQJWJqbCWQ%2B8wH4bcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9B7rP7T5wVKuCn0yrcA1W9L2jJB7dKGcxbqIzIswYstBll4iV3B5Ia9xE%2B4PDWoeGycZ0HU1pPBvuzMTDrQdA8ytO7KzIn2XnBkSQBnVXDWY06mzhYS4TFpsrLNSbeyQbmAZLcm5766ARgkTJSf49AnphSrWGPOWz5BfjZgMxgY8wAULI4NrkFosjByO45axEm5Doct0VqiQ5hpmoBJJUZLXTHXOkyFTU2vXpudrThQM2hsWVOEOLVPT13UJ2zef9%2BDSPqCjKZ6gdzic5wS%2BAQr4c%2BXJePOlN7o%2BU58o1VeHRfFDOMphp1wIOYurqeNie6%2FHabZTh4gra89mtU3WxdROJ9oi3zFxf8KTy2RrG6U0Zja1z74JNU0i5nF5qgcRvdO2IQr1Hdj3X7uI8u7vFFNxE3zPOBClfzO7JP4NiSBSvVrbGRNzoLlSUduMmSqxT2jm4xMz5ysJEHrs2EV7ZGZgr5YfKZFRUiisfN8gYcB5mFpJdccF099P%2FfhelCVyhKLn1bb1Xlgy1efITot4%2BiaUkCZ%2FVL4V7tWIRUvkqLk2SZrM2JVgJdJ1dye1clRbzhgzEoRDE7U5T%2BMf8yq04S%2FZ%2BkxNj0AYxbfdRWkCUbqsVoMaCBlGbdad5Mqqr0DgQn7FhmDKSlwH9qMMuy98EGOqUBq%2F2mIdbz5jFf6Dtx1Ar8jqi2xJzZ0tA6i4ylUCxD%2BlLHzqdEFAwa5a9uDln3FJvhir4ZCMsXW7XKSna48%2B1pqlQI43vCOluffKZolXcAfjvTCPZ15YmM6MlhY0SQRhZpZfT81pIB%2FjNMZIqxFuxH87tz0cRgJMmlOQP1U1hzsVpo20NhrhLvHrEZP34h%2BnQGurZ9rdPfyXyKMq%2Bx2nR%2FCc9VUay4&X-Amz-Signature=712ce6ba422cfd56900124967153cd9bd3cec887fccfe3ddaa45ba122b39788b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGQTEPN3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIEr76i40V4%2FsZYrIv%2FWLrpR5u7NvANu%2BtYjpHiVG11iRAiEAhE5QnedSwyDiN41xe%2FZJbADcOZbQJWJqbCWQ%2B8wH4bcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9B7rP7T5wVKuCn0yrcA1W9L2jJB7dKGcxbqIzIswYstBll4iV3B5Ia9xE%2B4PDWoeGycZ0HU1pPBvuzMTDrQdA8ytO7KzIn2XnBkSQBnVXDWY06mzhYS4TFpsrLNSbeyQbmAZLcm5766ARgkTJSf49AnphSrWGPOWz5BfjZgMxgY8wAULI4NrkFosjByO45axEm5Doct0VqiQ5hpmoBJJUZLXTHXOkyFTU2vXpudrThQM2hsWVOEOLVPT13UJ2zef9%2BDSPqCjKZ6gdzic5wS%2BAQr4c%2BXJePOlN7o%2BU58o1VeHRfFDOMphp1wIOYurqeNie6%2FHabZTh4gra89mtU3WxdROJ9oi3zFxf8KTy2RrG6U0Zja1z74JNU0i5nF5qgcRvdO2IQr1Hdj3X7uI8u7vFFNxE3zPOBClfzO7JP4NiSBSvVrbGRNzoLlSUduMmSqxT2jm4xMz5ysJEHrs2EV7ZGZgr5YfKZFRUiisfN8gYcB5mFpJdccF099P%2FfhelCVyhKLn1bb1Xlgy1efITot4%2BiaUkCZ%2FVL4V7tWIRUvkqLk2SZrM2JVgJdJ1dye1clRbzhgzEoRDE7U5T%2BMf8yq04S%2FZ%2BkxNj0AYxbfdRWkCUbqsVoMaCBlGbdad5Mqqr0DgQn7FhmDKSlwH9qMMuy98EGOqUBq%2F2mIdbz5jFf6Dtx1Ar8jqi2xJzZ0tA6i4ylUCxD%2BlLHzqdEFAwa5a9uDln3FJvhir4ZCMsXW7XKSna48%2B1pqlQI43vCOluffKZolXcAfjvTCPZ15YmM6MlhY0SQRhZpZfT81pIB%2FjNMZIqxFuxH87tz0cRgJMmlOQP1U1hzsVpo20NhrhLvHrEZP34h%2BnQGurZ9rdPfyXyKMq%2Bx2nR%2FCc9VUay4&X-Amz-Signature=3a5ec2874af52366de752b93b7f28c09987af4946652cf9c69760cf1707e8a7f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGQTEPN3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIEr76i40V4%2FsZYrIv%2FWLrpR5u7NvANu%2BtYjpHiVG11iRAiEAhE5QnedSwyDiN41xe%2FZJbADcOZbQJWJqbCWQ%2B8wH4bcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9B7rP7T5wVKuCn0yrcA1W9L2jJB7dKGcxbqIzIswYstBll4iV3B5Ia9xE%2B4PDWoeGycZ0HU1pPBvuzMTDrQdA8ytO7KzIn2XnBkSQBnVXDWY06mzhYS4TFpsrLNSbeyQbmAZLcm5766ARgkTJSf49AnphSrWGPOWz5BfjZgMxgY8wAULI4NrkFosjByO45axEm5Doct0VqiQ5hpmoBJJUZLXTHXOkyFTU2vXpudrThQM2hsWVOEOLVPT13UJ2zef9%2BDSPqCjKZ6gdzic5wS%2BAQr4c%2BXJePOlN7o%2BU58o1VeHRfFDOMphp1wIOYurqeNie6%2FHabZTh4gra89mtU3WxdROJ9oi3zFxf8KTy2RrG6U0Zja1z74JNU0i5nF5qgcRvdO2IQr1Hdj3X7uI8u7vFFNxE3zPOBClfzO7JP4NiSBSvVrbGRNzoLlSUduMmSqxT2jm4xMz5ysJEHrs2EV7ZGZgr5YfKZFRUiisfN8gYcB5mFpJdccF099P%2FfhelCVyhKLn1bb1Xlgy1efITot4%2BiaUkCZ%2FVL4V7tWIRUvkqLk2SZrM2JVgJdJ1dye1clRbzhgzEoRDE7U5T%2BMf8yq04S%2FZ%2BkxNj0AYxbfdRWkCUbqsVoMaCBlGbdad5Mqqr0DgQn7FhmDKSlwH9qMMuy98EGOqUBq%2F2mIdbz5jFf6Dtx1Ar8jqi2xJzZ0tA6i4ylUCxD%2BlLHzqdEFAwa5a9uDln3FJvhir4ZCMsXW7XKSna48%2B1pqlQI43vCOluffKZolXcAfjvTCPZ15YmM6MlhY0SQRhZpZfT81pIB%2FjNMZIqxFuxH87tz0cRgJMmlOQP1U1hzsVpo20NhrhLvHrEZP34h%2BnQGurZ9rdPfyXyKMq%2Bx2nR%2FCc9VUay4&X-Amz-Signature=06d8438f96606a0f38041ade3635d1d12f43bab25a418436e133289dc5e8e312&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
