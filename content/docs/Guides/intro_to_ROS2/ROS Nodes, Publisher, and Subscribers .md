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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCPXI4ET%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIHVvGRBBh1Sgfo4g2kkBJGYYEOJ0rs%2FqZGLy4CwtEChmAiEAibfcZVdwmsXrRernxoJM0SSDtqx8GCaM9o0T%2FKR0Dh8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMFcsrYBwHUqzhudQyrcA95mAsOgi0lLp6EfAxP4mUvnuhE%2BqurEL3rGrVqSe1hRhV%2FTn%2F%2Fp62MukyZKAlh1izX00cId4n887R2gts841KmsBKviObtxj64Q5EbbJyflkojMyb8dQxofqeQsf63XNGrOiInoxw7Jr3wqg9Ordi8yty4hLcdMPA0RIV6JMs%2B1JGvLiRlZ2qYOPovYBrOEarO%2FMFF0W0c2yPmNyR3g%2FiLSMfrZYFweQzqiFu60IRaPZ1L8OiaZhgBZijaIoD4Itj12qwOSmyzZ4AtLEY4aDPfibQtYY5onVxGfpIHUmGyRZDuwG7LTQ1e8%2FbZpUvgyKeFQ5fhqIX%2FF%2FSk%2FI2%2Bbse2%2F9p0d4umw1BlyjjGVWpGO3UE1pYCmvgkYlu2GswQH4khIsDpSk26JtFhpOi5Ls4H7eoSajIMY4naoKBR3qZWrPY3JRjl1Ck24NKD%2BtKr9gQrOD6iTlSicLB4iupnJhppnbfAph3GN2vCM1GdJS3Eq9pmRJp2rRhdvAo9BYhXhcIp2DJj5kJRuPhd68mTXmXD3c%2BGh3LcRP%2FzdcJfCIvB%2FE%2Fc2hKE6NgiuN0fV7Qb0d0LAgJF3PczGrG%2FW0QoNOQoq5GJa20XMXwnkU6uFC2ONOAI9%2BrqoCDNY5APDMM385LwGOqUBYaPRnR2BIDa3TILMNhJES%2BZRsZy4Lsf%2FEqglSjjPILtjhVK21npPss9DmK4xP7mDnAEh%2BbV4zo5q8Ca1NGvXrWAbXHOihoS2qojhQWNGrhBJ1vlzoyxS4qUg52Aw5y5IPNUbPYh1rbLF97PK475zGldTsg8b6QmUe8eLWrWb2KgvXYibCI9CdO9dlrjVz5RjIu7PXuD8ZzkfjWjEywM74jZoUC2W&X-Amz-Signature=7b3158fc2f108d17b00b4813400f3d83e3517ada99224d6cf6e7dbfbab7caec0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCPXI4ET%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIHVvGRBBh1Sgfo4g2kkBJGYYEOJ0rs%2FqZGLy4CwtEChmAiEAibfcZVdwmsXrRernxoJM0SSDtqx8GCaM9o0T%2FKR0Dh8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMFcsrYBwHUqzhudQyrcA95mAsOgi0lLp6EfAxP4mUvnuhE%2BqurEL3rGrVqSe1hRhV%2FTn%2F%2Fp62MukyZKAlh1izX00cId4n887R2gts841KmsBKviObtxj64Q5EbbJyflkojMyb8dQxofqeQsf63XNGrOiInoxw7Jr3wqg9Ordi8yty4hLcdMPA0RIV6JMs%2B1JGvLiRlZ2qYOPovYBrOEarO%2FMFF0W0c2yPmNyR3g%2FiLSMfrZYFweQzqiFu60IRaPZ1L8OiaZhgBZijaIoD4Itj12qwOSmyzZ4AtLEY4aDPfibQtYY5onVxGfpIHUmGyRZDuwG7LTQ1e8%2FbZpUvgyKeFQ5fhqIX%2FF%2FSk%2FI2%2Bbse2%2F9p0d4umw1BlyjjGVWpGO3UE1pYCmvgkYlu2GswQH4khIsDpSk26JtFhpOi5Ls4H7eoSajIMY4naoKBR3qZWrPY3JRjl1Ck24NKD%2BtKr9gQrOD6iTlSicLB4iupnJhppnbfAph3GN2vCM1GdJS3Eq9pmRJp2rRhdvAo9BYhXhcIp2DJj5kJRuPhd68mTXmXD3c%2BGh3LcRP%2FzdcJfCIvB%2FE%2Fc2hKE6NgiuN0fV7Qb0d0LAgJF3PczGrG%2FW0QoNOQoq5GJa20XMXwnkU6uFC2ONOAI9%2BrqoCDNY5APDMM385LwGOqUBYaPRnR2BIDa3TILMNhJES%2BZRsZy4Lsf%2FEqglSjjPILtjhVK21npPss9DmK4xP7mDnAEh%2BbV4zo5q8Ca1NGvXrWAbXHOihoS2qojhQWNGrhBJ1vlzoyxS4qUg52Aw5y5IPNUbPYh1rbLF97PK475zGldTsg8b6QmUe8eLWrWb2KgvXYibCI9CdO9dlrjVz5RjIu7PXuD8ZzkfjWjEywM74jZoUC2W&X-Amz-Signature=a6c0f425e707dc1f25f58c09c0c2774b71b98f1d52ec48395f38fee240b23ce4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCPXI4ET%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIHVvGRBBh1Sgfo4g2kkBJGYYEOJ0rs%2FqZGLy4CwtEChmAiEAibfcZVdwmsXrRernxoJM0SSDtqx8GCaM9o0T%2FKR0Dh8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMFcsrYBwHUqzhudQyrcA95mAsOgi0lLp6EfAxP4mUvnuhE%2BqurEL3rGrVqSe1hRhV%2FTn%2F%2Fp62MukyZKAlh1izX00cId4n887R2gts841KmsBKviObtxj64Q5EbbJyflkojMyb8dQxofqeQsf63XNGrOiInoxw7Jr3wqg9Ordi8yty4hLcdMPA0RIV6JMs%2B1JGvLiRlZ2qYOPovYBrOEarO%2FMFF0W0c2yPmNyR3g%2FiLSMfrZYFweQzqiFu60IRaPZ1L8OiaZhgBZijaIoD4Itj12qwOSmyzZ4AtLEY4aDPfibQtYY5onVxGfpIHUmGyRZDuwG7LTQ1e8%2FbZpUvgyKeFQ5fhqIX%2FF%2FSk%2FI2%2Bbse2%2F9p0d4umw1BlyjjGVWpGO3UE1pYCmvgkYlu2GswQH4khIsDpSk26JtFhpOi5Ls4H7eoSajIMY4naoKBR3qZWrPY3JRjl1Ck24NKD%2BtKr9gQrOD6iTlSicLB4iupnJhppnbfAph3GN2vCM1GdJS3Eq9pmRJp2rRhdvAo9BYhXhcIp2DJj5kJRuPhd68mTXmXD3c%2BGh3LcRP%2FzdcJfCIvB%2FE%2Fc2hKE6NgiuN0fV7Qb0d0LAgJF3PczGrG%2FW0QoNOQoq5GJa20XMXwnkU6uFC2ONOAI9%2BrqoCDNY5APDMM385LwGOqUBYaPRnR2BIDa3TILMNhJES%2BZRsZy4Lsf%2FEqglSjjPILtjhVK21npPss9DmK4xP7mDnAEh%2BbV4zo5q8Ca1NGvXrWAbXHOihoS2qojhQWNGrhBJ1vlzoyxS4qUg52Aw5y5IPNUbPYh1rbLF97PK475zGldTsg8b6QmUe8eLWrWb2KgvXYibCI9CdO9dlrjVz5RjIu7PXuD8ZzkfjWjEywM74jZoUC2W&X-Amz-Signature=083b1c6947ad2eb381e18b5c1ccd4d443ed24190df4d8e1918625ed9a999b2ce&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCPXI4ET%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIHVvGRBBh1Sgfo4g2kkBJGYYEOJ0rs%2FqZGLy4CwtEChmAiEAibfcZVdwmsXrRernxoJM0SSDtqx8GCaM9o0T%2FKR0Dh8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMFcsrYBwHUqzhudQyrcA95mAsOgi0lLp6EfAxP4mUvnuhE%2BqurEL3rGrVqSe1hRhV%2FTn%2F%2Fp62MukyZKAlh1izX00cId4n887R2gts841KmsBKviObtxj64Q5EbbJyflkojMyb8dQxofqeQsf63XNGrOiInoxw7Jr3wqg9Ordi8yty4hLcdMPA0RIV6JMs%2B1JGvLiRlZ2qYOPovYBrOEarO%2FMFF0W0c2yPmNyR3g%2FiLSMfrZYFweQzqiFu60IRaPZ1L8OiaZhgBZijaIoD4Itj12qwOSmyzZ4AtLEY4aDPfibQtYY5onVxGfpIHUmGyRZDuwG7LTQ1e8%2FbZpUvgyKeFQ5fhqIX%2FF%2FSk%2FI2%2Bbse2%2F9p0d4umw1BlyjjGVWpGO3UE1pYCmvgkYlu2GswQH4khIsDpSk26JtFhpOi5Ls4H7eoSajIMY4naoKBR3qZWrPY3JRjl1Ck24NKD%2BtKr9gQrOD6iTlSicLB4iupnJhppnbfAph3GN2vCM1GdJS3Eq9pmRJp2rRhdvAo9BYhXhcIp2DJj5kJRuPhd68mTXmXD3c%2BGh3LcRP%2FzdcJfCIvB%2FE%2Fc2hKE6NgiuN0fV7Qb0d0LAgJF3PczGrG%2FW0QoNOQoq5GJa20XMXwnkU6uFC2ONOAI9%2BrqoCDNY5APDMM385LwGOqUBYaPRnR2BIDa3TILMNhJES%2BZRsZy4Lsf%2FEqglSjjPILtjhVK21npPss9DmK4xP7mDnAEh%2BbV4zo5q8Ca1NGvXrWAbXHOihoS2qojhQWNGrhBJ1vlzoyxS4qUg52Aw5y5IPNUbPYh1rbLF97PK475zGldTsg8b6QmUe8eLWrWb2KgvXYibCI9CdO9dlrjVz5RjIu7PXuD8ZzkfjWjEywM74jZoUC2W&X-Amz-Signature=2cd19fb8e926bc85359378605df9111218b95f77213aab8eb897ea18c49b9fc8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCPXI4ET%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIHVvGRBBh1Sgfo4g2kkBJGYYEOJ0rs%2FqZGLy4CwtEChmAiEAibfcZVdwmsXrRernxoJM0SSDtqx8GCaM9o0T%2FKR0Dh8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMFcsrYBwHUqzhudQyrcA95mAsOgi0lLp6EfAxP4mUvnuhE%2BqurEL3rGrVqSe1hRhV%2FTn%2F%2Fp62MukyZKAlh1izX00cId4n887R2gts841KmsBKviObtxj64Q5EbbJyflkojMyb8dQxofqeQsf63XNGrOiInoxw7Jr3wqg9Ordi8yty4hLcdMPA0RIV6JMs%2B1JGvLiRlZ2qYOPovYBrOEarO%2FMFF0W0c2yPmNyR3g%2FiLSMfrZYFweQzqiFu60IRaPZ1L8OiaZhgBZijaIoD4Itj12qwOSmyzZ4AtLEY4aDPfibQtYY5onVxGfpIHUmGyRZDuwG7LTQ1e8%2FbZpUvgyKeFQ5fhqIX%2FF%2FSk%2FI2%2Bbse2%2F9p0d4umw1BlyjjGVWpGO3UE1pYCmvgkYlu2GswQH4khIsDpSk26JtFhpOi5Ls4H7eoSajIMY4naoKBR3qZWrPY3JRjl1Ck24NKD%2BtKr9gQrOD6iTlSicLB4iupnJhppnbfAph3GN2vCM1GdJS3Eq9pmRJp2rRhdvAo9BYhXhcIp2DJj5kJRuPhd68mTXmXD3c%2BGh3LcRP%2FzdcJfCIvB%2FE%2Fc2hKE6NgiuN0fV7Qb0d0LAgJF3PczGrG%2FW0QoNOQoq5GJa20XMXwnkU6uFC2ONOAI9%2BrqoCDNY5APDMM385LwGOqUBYaPRnR2BIDa3TILMNhJES%2BZRsZy4Lsf%2FEqglSjjPILtjhVK21npPss9DmK4xP7mDnAEh%2BbV4zo5q8Ca1NGvXrWAbXHOihoS2qojhQWNGrhBJ1vlzoyxS4qUg52Aw5y5IPNUbPYh1rbLF97PK475zGldTsg8b6QmUe8eLWrWb2KgvXYibCI9CdO9dlrjVz5RjIu7PXuD8ZzkfjWjEywM74jZoUC2W&X-Amz-Signature=f3ea8355fc5493e64f6f21039d4d4cd245e3d21cff6b3a49eef7b089a6b20a8f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCPXI4ET%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIHVvGRBBh1Sgfo4g2kkBJGYYEOJ0rs%2FqZGLy4CwtEChmAiEAibfcZVdwmsXrRernxoJM0SSDtqx8GCaM9o0T%2FKR0Dh8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMFcsrYBwHUqzhudQyrcA95mAsOgi0lLp6EfAxP4mUvnuhE%2BqurEL3rGrVqSe1hRhV%2FTn%2F%2Fp62MukyZKAlh1izX00cId4n887R2gts841KmsBKviObtxj64Q5EbbJyflkojMyb8dQxofqeQsf63XNGrOiInoxw7Jr3wqg9Ordi8yty4hLcdMPA0RIV6JMs%2B1JGvLiRlZ2qYOPovYBrOEarO%2FMFF0W0c2yPmNyR3g%2FiLSMfrZYFweQzqiFu60IRaPZ1L8OiaZhgBZijaIoD4Itj12qwOSmyzZ4AtLEY4aDPfibQtYY5onVxGfpIHUmGyRZDuwG7LTQ1e8%2FbZpUvgyKeFQ5fhqIX%2FF%2FSk%2FI2%2Bbse2%2F9p0d4umw1BlyjjGVWpGO3UE1pYCmvgkYlu2GswQH4khIsDpSk26JtFhpOi5Ls4H7eoSajIMY4naoKBR3qZWrPY3JRjl1Ck24NKD%2BtKr9gQrOD6iTlSicLB4iupnJhppnbfAph3GN2vCM1GdJS3Eq9pmRJp2rRhdvAo9BYhXhcIp2DJj5kJRuPhd68mTXmXD3c%2BGh3LcRP%2FzdcJfCIvB%2FE%2Fc2hKE6NgiuN0fV7Qb0d0LAgJF3PczGrG%2FW0QoNOQoq5GJa20XMXwnkU6uFC2ONOAI9%2BrqoCDNY5APDMM385LwGOqUBYaPRnR2BIDa3TILMNhJES%2BZRsZy4Lsf%2FEqglSjjPILtjhVK21npPss9DmK4xP7mDnAEh%2BbV4zo5q8Ca1NGvXrWAbXHOihoS2qojhQWNGrhBJ1vlzoyxS4qUg52Aw5y5IPNUbPYh1rbLF97PK475zGldTsg8b6QmUe8eLWrWb2KgvXYibCI9CdO9dlrjVz5RjIu7PXuD8ZzkfjWjEywM74jZoUC2W&X-Amz-Signature=6c169bedd59880c866bd8193aee33354b673cbbb6af121a5158ad17f877c7b2c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCPXI4ET%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIHVvGRBBh1Sgfo4g2kkBJGYYEOJ0rs%2FqZGLy4CwtEChmAiEAibfcZVdwmsXrRernxoJM0SSDtqx8GCaM9o0T%2FKR0Dh8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMFcsrYBwHUqzhudQyrcA95mAsOgi0lLp6EfAxP4mUvnuhE%2BqurEL3rGrVqSe1hRhV%2FTn%2F%2Fp62MukyZKAlh1izX00cId4n887R2gts841KmsBKviObtxj64Q5EbbJyflkojMyb8dQxofqeQsf63XNGrOiInoxw7Jr3wqg9Ordi8yty4hLcdMPA0RIV6JMs%2B1JGvLiRlZ2qYOPovYBrOEarO%2FMFF0W0c2yPmNyR3g%2FiLSMfrZYFweQzqiFu60IRaPZ1L8OiaZhgBZijaIoD4Itj12qwOSmyzZ4AtLEY4aDPfibQtYY5onVxGfpIHUmGyRZDuwG7LTQ1e8%2FbZpUvgyKeFQ5fhqIX%2FF%2FSk%2FI2%2Bbse2%2F9p0d4umw1BlyjjGVWpGO3UE1pYCmvgkYlu2GswQH4khIsDpSk26JtFhpOi5Ls4H7eoSajIMY4naoKBR3qZWrPY3JRjl1Ck24NKD%2BtKr9gQrOD6iTlSicLB4iupnJhppnbfAph3GN2vCM1GdJS3Eq9pmRJp2rRhdvAo9BYhXhcIp2DJj5kJRuPhd68mTXmXD3c%2BGh3LcRP%2FzdcJfCIvB%2FE%2Fc2hKE6NgiuN0fV7Qb0d0LAgJF3PczGrG%2FW0QoNOQoq5GJa20XMXwnkU6uFC2ONOAI9%2BrqoCDNY5APDMM385LwGOqUBYaPRnR2BIDa3TILMNhJES%2BZRsZy4Lsf%2FEqglSjjPILtjhVK21npPss9DmK4xP7mDnAEh%2BbV4zo5q8Ca1NGvXrWAbXHOihoS2qojhQWNGrhBJ1vlzoyxS4qUg52Aw5y5IPNUbPYh1rbLF97PK475zGldTsg8b6QmUe8eLWrWb2KgvXYibCI9CdO9dlrjVz5RjIu7PXuD8ZzkfjWjEywM74jZoUC2W&X-Amz-Signature=2216176dddf305c8afd2fa76498ceeccb296e4a387ef1ee39b98d3a3bef5d692&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCPXI4ET%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIHVvGRBBh1Sgfo4g2kkBJGYYEOJ0rs%2FqZGLy4CwtEChmAiEAibfcZVdwmsXrRernxoJM0SSDtqx8GCaM9o0T%2FKR0Dh8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMFcsrYBwHUqzhudQyrcA95mAsOgi0lLp6EfAxP4mUvnuhE%2BqurEL3rGrVqSe1hRhV%2FTn%2F%2Fp62MukyZKAlh1izX00cId4n887R2gts841KmsBKviObtxj64Q5EbbJyflkojMyb8dQxofqeQsf63XNGrOiInoxw7Jr3wqg9Ordi8yty4hLcdMPA0RIV6JMs%2B1JGvLiRlZ2qYOPovYBrOEarO%2FMFF0W0c2yPmNyR3g%2FiLSMfrZYFweQzqiFu60IRaPZ1L8OiaZhgBZijaIoD4Itj12qwOSmyzZ4AtLEY4aDPfibQtYY5onVxGfpIHUmGyRZDuwG7LTQ1e8%2FbZpUvgyKeFQ5fhqIX%2FF%2FSk%2FI2%2Bbse2%2F9p0d4umw1BlyjjGVWpGO3UE1pYCmvgkYlu2GswQH4khIsDpSk26JtFhpOi5Ls4H7eoSajIMY4naoKBR3qZWrPY3JRjl1Ck24NKD%2BtKr9gQrOD6iTlSicLB4iupnJhppnbfAph3GN2vCM1GdJS3Eq9pmRJp2rRhdvAo9BYhXhcIp2DJj5kJRuPhd68mTXmXD3c%2BGh3LcRP%2FzdcJfCIvB%2FE%2Fc2hKE6NgiuN0fV7Qb0d0LAgJF3PczGrG%2FW0QoNOQoq5GJa20XMXwnkU6uFC2ONOAI9%2BrqoCDNY5APDMM385LwGOqUBYaPRnR2BIDa3TILMNhJES%2BZRsZy4Lsf%2FEqglSjjPILtjhVK21npPss9DmK4xP7mDnAEh%2BbV4zo5q8Ca1NGvXrWAbXHOihoS2qojhQWNGrhBJ1vlzoyxS4qUg52Aw5y5IPNUbPYh1rbLF97PK475zGldTsg8b6QmUe8eLWrWb2KgvXYibCI9CdO9dlrjVz5RjIu7PXuD8ZzkfjWjEywM74jZoUC2W&X-Amz-Signature=3d63b5768c8a40128ec9bfa21dd778a282b18953f6140deed09b114d886f250f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
