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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG5OOHOQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T071007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwTFWqpQCMx2k5790RwysbycLnNr5quD18SRrEqy5oyAiEAxSSaC9rqv%2FkubaBOle3Oht90KObgjcJMa8ETP4JsyGIqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGt79UB6JoXoL9aDLircA9bWmIbez4W0gqhi%2Fb4KcXEUaqUp74xYDegMBpmkrXTmB2ii4HdU5Knl0klAvAnl%2BQ60enXXS3u%2F7wqTQHgbdM8m8b%2Be8mJtw4B9VgcgpQpPxGTvNWocxeL0cH%2B2hn8eZtydTRjK6XD%2FY9ksalxVUTLRqHy36TxBtnpTlmQw0%2FVL5PzBzwN7%2F8%2BJpFpIumxHJYKUsjW5vcXulAeOmWvgGlWnkJNbR9KdTn8iXdY7liuQ5JSy3EpRGKRHaOCeiyoS%2BWZJ3ll7kVSMQf5Uvr%2Fx1dCPWFRz5yu8E3%2ByxTQGNBgQ5%2BIwbZ7TiteWQCu4OIN8PBYXWhnAr0y3asQeRE0QSzkqI95SC%2BPRJyr6DFddL%2FzU74SKBc0a52q6DGr1rbAHFk9E2KxA1nRZSrJSX5UlBTlcuBP%2BJZOcJWfWVTBVQfWeA6NfsHGuujnm2dVSDak1HeK1kBUqI5CVvXynBrQ71nTp57S52Sk4KLdP26Hb18xLfXsTdXploen%2FcvnYWVkiprcm0wyorAAm5UEeozhvKeaWgmALa2acPnUeMzqJ8cZkhSBIqFsehAhm05tv5Wny5xY51rnxvqGI9Hvf%2FDO1jvmK6TqMPlvv21cOE8xNlJz2125E2Ym5nzSn837mMOOeq8EGOqUBCOZCQdOq9quHZPt%2FqMSOcRBjYSzpatWdurCFYLbpE%2FB7W8bCAfasZfpnWDwu4bv0%2FVVQ9pDpIKxZq0kYCjQf3ny%2BFTzD%2FGPqZlwIHE8Wb4mZBOXfAx7EUw9AYHr%2BR8hx5oW%2FDtnSzY4Gjro6gWOrTLtgUNk2NVWEZH24Ymp5GqQ1cU%2FyqlnVILWkXnDLiSulaRSUc0daQK0MYMod1afMFvUHF7lu&X-Amz-Signature=bb607295d26d4de88abd5bcb7d95f558a6defdee667db17699cc2f9d5747d384&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG5OOHOQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T071007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwTFWqpQCMx2k5790RwysbycLnNr5quD18SRrEqy5oyAiEAxSSaC9rqv%2FkubaBOle3Oht90KObgjcJMa8ETP4JsyGIqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGt79UB6JoXoL9aDLircA9bWmIbez4W0gqhi%2Fb4KcXEUaqUp74xYDegMBpmkrXTmB2ii4HdU5Knl0klAvAnl%2BQ60enXXS3u%2F7wqTQHgbdM8m8b%2Be8mJtw4B9VgcgpQpPxGTvNWocxeL0cH%2B2hn8eZtydTRjK6XD%2FY9ksalxVUTLRqHy36TxBtnpTlmQw0%2FVL5PzBzwN7%2F8%2BJpFpIumxHJYKUsjW5vcXulAeOmWvgGlWnkJNbR9KdTn8iXdY7liuQ5JSy3EpRGKRHaOCeiyoS%2BWZJ3ll7kVSMQf5Uvr%2Fx1dCPWFRz5yu8E3%2ByxTQGNBgQ5%2BIwbZ7TiteWQCu4OIN8PBYXWhnAr0y3asQeRE0QSzkqI95SC%2BPRJyr6DFddL%2FzU74SKBc0a52q6DGr1rbAHFk9E2KxA1nRZSrJSX5UlBTlcuBP%2BJZOcJWfWVTBVQfWeA6NfsHGuujnm2dVSDak1HeK1kBUqI5CVvXynBrQ71nTp57S52Sk4KLdP26Hb18xLfXsTdXploen%2FcvnYWVkiprcm0wyorAAm5UEeozhvKeaWgmALa2acPnUeMzqJ8cZkhSBIqFsehAhm05tv5Wny5xY51rnxvqGI9Hvf%2FDO1jvmK6TqMPlvv21cOE8xNlJz2125E2Ym5nzSn837mMOOeq8EGOqUBCOZCQdOq9quHZPt%2FqMSOcRBjYSzpatWdurCFYLbpE%2FB7W8bCAfasZfpnWDwu4bv0%2FVVQ9pDpIKxZq0kYCjQf3ny%2BFTzD%2FGPqZlwIHE8Wb4mZBOXfAx7EUw9AYHr%2BR8hx5oW%2FDtnSzY4Gjro6gWOrTLtgUNk2NVWEZH24Ymp5GqQ1cU%2FyqlnVILWkXnDLiSulaRSUc0daQK0MYMod1afMFvUHF7lu&X-Amz-Signature=0b38bdccf576e91e4d1a79aef896a2407020c67b3b03860092a1db28d91c944e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG5OOHOQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T071007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwTFWqpQCMx2k5790RwysbycLnNr5quD18SRrEqy5oyAiEAxSSaC9rqv%2FkubaBOle3Oht90KObgjcJMa8ETP4JsyGIqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGt79UB6JoXoL9aDLircA9bWmIbez4W0gqhi%2Fb4KcXEUaqUp74xYDegMBpmkrXTmB2ii4HdU5Knl0klAvAnl%2BQ60enXXS3u%2F7wqTQHgbdM8m8b%2Be8mJtw4B9VgcgpQpPxGTvNWocxeL0cH%2B2hn8eZtydTRjK6XD%2FY9ksalxVUTLRqHy36TxBtnpTlmQw0%2FVL5PzBzwN7%2F8%2BJpFpIumxHJYKUsjW5vcXulAeOmWvgGlWnkJNbR9KdTn8iXdY7liuQ5JSy3EpRGKRHaOCeiyoS%2BWZJ3ll7kVSMQf5Uvr%2Fx1dCPWFRz5yu8E3%2ByxTQGNBgQ5%2BIwbZ7TiteWQCu4OIN8PBYXWhnAr0y3asQeRE0QSzkqI95SC%2BPRJyr6DFddL%2FzU74SKBc0a52q6DGr1rbAHFk9E2KxA1nRZSrJSX5UlBTlcuBP%2BJZOcJWfWVTBVQfWeA6NfsHGuujnm2dVSDak1HeK1kBUqI5CVvXynBrQ71nTp57S52Sk4KLdP26Hb18xLfXsTdXploen%2FcvnYWVkiprcm0wyorAAm5UEeozhvKeaWgmALa2acPnUeMzqJ8cZkhSBIqFsehAhm05tv5Wny5xY51rnxvqGI9Hvf%2FDO1jvmK6TqMPlvv21cOE8xNlJz2125E2Ym5nzSn837mMOOeq8EGOqUBCOZCQdOq9quHZPt%2FqMSOcRBjYSzpatWdurCFYLbpE%2FB7W8bCAfasZfpnWDwu4bv0%2FVVQ9pDpIKxZq0kYCjQf3ny%2BFTzD%2FGPqZlwIHE8Wb4mZBOXfAx7EUw9AYHr%2BR8hx5oW%2FDtnSzY4Gjro6gWOrTLtgUNk2NVWEZH24Ymp5GqQ1cU%2FyqlnVILWkXnDLiSulaRSUc0daQK0MYMod1afMFvUHF7lu&X-Amz-Signature=75503a3c6c4083931e62a7f707a2d8f6f116b90086ea0c6960b08d5668231b33&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG5OOHOQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T071007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwTFWqpQCMx2k5790RwysbycLnNr5quD18SRrEqy5oyAiEAxSSaC9rqv%2FkubaBOle3Oht90KObgjcJMa8ETP4JsyGIqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGt79UB6JoXoL9aDLircA9bWmIbez4W0gqhi%2Fb4KcXEUaqUp74xYDegMBpmkrXTmB2ii4HdU5Knl0klAvAnl%2BQ60enXXS3u%2F7wqTQHgbdM8m8b%2Be8mJtw4B9VgcgpQpPxGTvNWocxeL0cH%2B2hn8eZtydTRjK6XD%2FY9ksalxVUTLRqHy36TxBtnpTlmQw0%2FVL5PzBzwN7%2F8%2BJpFpIumxHJYKUsjW5vcXulAeOmWvgGlWnkJNbR9KdTn8iXdY7liuQ5JSy3EpRGKRHaOCeiyoS%2BWZJ3ll7kVSMQf5Uvr%2Fx1dCPWFRz5yu8E3%2ByxTQGNBgQ5%2BIwbZ7TiteWQCu4OIN8PBYXWhnAr0y3asQeRE0QSzkqI95SC%2BPRJyr6DFddL%2FzU74SKBc0a52q6DGr1rbAHFk9E2KxA1nRZSrJSX5UlBTlcuBP%2BJZOcJWfWVTBVQfWeA6NfsHGuujnm2dVSDak1HeK1kBUqI5CVvXynBrQ71nTp57S52Sk4KLdP26Hb18xLfXsTdXploen%2FcvnYWVkiprcm0wyorAAm5UEeozhvKeaWgmALa2acPnUeMzqJ8cZkhSBIqFsehAhm05tv5Wny5xY51rnxvqGI9Hvf%2FDO1jvmK6TqMPlvv21cOE8xNlJz2125E2Ym5nzSn837mMOOeq8EGOqUBCOZCQdOq9quHZPt%2FqMSOcRBjYSzpatWdurCFYLbpE%2FB7W8bCAfasZfpnWDwu4bv0%2FVVQ9pDpIKxZq0kYCjQf3ny%2BFTzD%2FGPqZlwIHE8Wb4mZBOXfAx7EUw9AYHr%2BR8hx5oW%2FDtnSzY4Gjro6gWOrTLtgUNk2NVWEZH24Ymp5GqQ1cU%2FyqlnVILWkXnDLiSulaRSUc0daQK0MYMod1afMFvUHF7lu&X-Amz-Signature=84689d54c973d81f358ca40df2cd72e829dff39917cc95f0289ad8fd76dc93a1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG5OOHOQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T071007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwTFWqpQCMx2k5790RwysbycLnNr5quD18SRrEqy5oyAiEAxSSaC9rqv%2FkubaBOle3Oht90KObgjcJMa8ETP4JsyGIqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGt79UB6JoXoL9aDLircA9bWmIbez4W0gqhi%2Fb4KcXEUaqUp74xYDegMBpmkrXTmB2ii4HdU5Knl0klAvAnl%2BQ60enXXS3u%2F7wqTQHgbdM8m8b%2Be8mJtw4B9VgcgpQpPxGTvNWocxeL0cH%2B2hn8eZtydTRjK6XD%2FY9ksalxVUTLRqHy36TxBtnpTlmQw0%2FVL5PzBzwN7%2F8%2BJpFpIumxHJYKUsjW5vcXulAeOmWvgGlWnkJNbR9KdTn8iXdY7liuQ5JSy3EpRGKRHaOCeiyoS%2BWZJ3ll7kVSMQf5Uvr%2Fx1dCPWFRz5yu8E3%2ByxTQGNBgQ5%2BIwbZ7TiteWQCu4OIN8PBYXWhnAr0y3asQeRE0QSzkqI95SC%2BPRJyr6DFddL%2FzU74SKBc0a52q6DGr1rbAHFk9E2KxA1nRZSrJSX5UlBTlcuBP%2BJZOcJWfWVTBVQfWeA6NfsHGuujnm2dVSDak1HeK1kBUqI5CVvXynBrQ71nTp57S52Sk4KLdP26Hb18xLfXsTdXploen%2FcvnYWVkiprcm0wyorAAm5UEeozhvKeaWgmALa2acPnUeMzqJ8cZkhSBIqFsehAhm05tv5Wny5xY51rnxvqGI9Hvf%2FDO1jvmK6TqMPlvv21cOE8xNlJz2125E2Ym5nzSn837mMOOeq8EGOqUBCOZCQdOq9quHZPt%2FqMSOcRBjYSzpatWdurCFYLbpE%2FB7W8bCAfasZfpnWDwu4bv0%2FVVQ9pDpIKxZq0kYCjQf3ny%2BFTzD%2FGPqZlwIHE8Wb4mZBOXfAx7EUw9AYHr%2BR8hx5oW%2FDtnSzY4Gjro6gWOrTLtgUNk2NVWEZH24Ymp5GqQ1cU%2FyqlnVILWkXnDLiSulaRSUc0daQK0MYMod1afMFvUHF7lu&X-Amz-Signature=c8b9f69cc038d203cb37122287c7c8d047151bb7c8bee18f8d1072ce191d40cc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG5OOHOQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T071007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwTFWqpQCMx2k5790RwysbycLnNr5quD18SRrEqy5oyAiEAxSSaC9rqv%2FkubaBOle3Oht90KObgjcJMa8ETP4JsyGIqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGt79UB6JoXoL9aDLircA9bWmIbez4W0gqhi%2Fb4KcXEUaqUp74xYDegMBpmkrXTmB2ii4HdU5Knl0klAvAnl%2BQ60enXXS3u%2F7wqTQHgbdM8m8b%2Be8mJtw4B9VgcgpQpPxGTvNWocxeL0cH%2B2hn8eZtydTRjK6XD%2FY9ksalxVUTLRqHy36TxBtnpTlmQw0%2FVL5PzBzwN7%2F8%2BJpFpIumxHJYKUsjW5vcXulAeOmWvgGlWnkJNbR9KdTn8iXdY7liuQ5JSy3EpRGKRHaOCeiyoS%2BWZJ3ll7kVSMQf5Uvr%2Fx1dCPWFRz5yu8E3%2ByxTQGNBgQ5%2BIwbZ7TiteWQCu4OIN8PBYXWhnAr0y3asQeRE0QSzkqI95SC%2BPRJyr6DFddL%2FzU74SKBc0a52q6DGr1rbAHFk9E2KxA1nRZSrJSX5UlBTlcuBP%2BJZOcJWfWVTBVQfWeA6NfsHGuujnm2dVSDak1HeK1kBUqI5CVvXynBrQ71nTp57S52Sk4KLdP26Hb18xLfXsTdXploen%2FcvnYWVkiprcm0wyorAAm5UEeozhvKeaWgmALa2acPnUeMzqJ8cZkhSBIqFsehAhm05tv5Wny5xY51rnxvqGI9Hvf%2FDO1jvmK6TqMPlvv21cOE8xNlJz2125E2Ym5nzSn837mMOOeq8EGOqUBCOZCQdOq9quHZPt%2FqMSOcRBjYSzpatWdurCFYLbpE%2FB7W8bCAfasZfpnWDwu4bv0%2FVVQ9pDpIKxZq0kYCjQf3ny%2BFTzD%2FGPqZlwIHE8Wb4mZBOXfAx7EUw9AYHr%2BR8hx5oW%2FDtnSzY4Gjro6gWOrTLtgUNk2NVWEZH24Ymp5GqQ1cU%2FyqlnVILWkXnDLiSulaRSUc0daQK0MYMod1afMFvUHF7lu&X-Amz-Signature=b3a7b56f1aa111656a6fd814eac44612d2657c22cca75f47743b1522bc82b3c1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG5OOHOQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T071007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwTFWqpQCMx2k5790RwysbycLnNr5quD18SRrEqy5oyAiEAxSSaC9rqv%2FkubaBOle3Oht90KObgjcJMa8ETP4JsyGIqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGt79UB6JoXoL9aDLircA9bWmIbez4W0gqhi%2Fb4KcXEUaqUp74xYDegMBpmkrXTmB2ii4HdU5Knl0klAvAnl%2BQ60enXXS3u%2F7wqTQHgbdM8m8b%2Be8mJtw4B9VgcgpQpPxGTvNWocxeL0cH%2B2hn8eZtydTRjK6XD%2FY9ksalxVUTLRqHy36TxBtnpTlmQw0%2FVL5PzBzwN7%2F8%2BJpFpIumxHJYKUsjW5vcXulAeOmWvgGlWnkJNbR9KdTn8iXdY7liuQ5JSy3EpRGKRHaOCeiyoS%2BWZJ3ll7kVSMQf5Uvr%2Fx1dCPWFRz5yu8E3%2ByxTQGNBgQ5%2BIwbZ7TiteWQCu4OIN8PBYXWhnAr0y3asQeRE0QSzkqI95SC%2BPRJyr6DFddL%2FzU74SKBc0a52q6DGr1rbAHFk9E2KxA1nRZSrJSX5UlBTlcuBP%2BJZOcJWfWVTBVQfWeA6NfsHGuujnm2dVSDak1HeK1kBUqI5CVvXynBrQ71nTp57S52Sk4KLdP26Hb18xLfXsTdXploen%2FcvnYWVkiprcm0wyorAAm5UEeozhvKeaWgmALa2acPnUeMzqJ8cZkhSBIqFsehAhm05tv5Wny5xY51rnxvqGI9Hvf%2FDO1jvmK6TqMPlvv21cOE8xNlJz2125E2Ym5nzSn837mMOOeq8EGOqUBCOZCQdOq9quHZPt%2FqMSOcRBjYSzpatWdurCFYLbpE%2FB7W8bCAfasZfpnWDwu4bv0%2FVVQ9pDpIKxZq0kYCjQf3ny%2BFTzD%2FGPqZlwIHE8Wb4mZBOXfAx7EUw9AYHr%2BR8hx5oW%2FDtnSzY4Gjro6gWOrTLtgUNk2NVWEZH24Ymp5GqQ1cU%2FyqlnVILWkXnDLiSulaRSUc0daQK0MYMod1afMFvUHF7lu&X-Amz-Signature=2d7e310e18c3c0d66fdf2e94acf856109a7c400a955feef74a02899dfba314a1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG5OOHOQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T071007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwTFWqpQCMx2k5790RwysbycLnNr5quD18SRrEqy5oyAiEAxSSaC9rqv%2FkubaBOle3Oht90KObgjcJMa8ETP4JsyGIqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGt79UB6JoXoL9aDLircA9bWmIbez4W0gqhi%2Fb4KcXEUaqUp74xYDegMBpmkrXTmB2ii4HdU5Knl0klAvAnl%2BQ60enXXS3u%2F7wqTQHgbdM8m8b%2Be8mJtw4B9VgcgpQpPxGTvNWocxeL0cH%2B2hn8eZtydTRjK6XD%2FY9ksalxVUTLRqHy36TxBtnpTlmQw0%2FVL5PzBzwN7%2F8%2BJpFpIumxHJYKUsjW5vcXulAeOmWvgGlWnkJNbR9KdTn8iXdY7liuQ5JSy3EpRGKRHaOCeiyoS%2BWZJ3ll7kVSMQf5Uvr%2Fx1dCPWFRz5yu8E3%2ByxTQGNBgQ5%2BIwbZ7TiteWQCu4OIN8PBYXWhnAr0y3asQeRE0QSzkqI95SC%2BPRJyr6DFddL%2FzU74SKBc0a52q6DGr1rbAHFk9E2KxA1nRZSrJSX5UlBTlcuBP%2BJZOcJWfWVTBVQfWeA6NfsHGuujnm2dVSDak1HeK1kBUqI5CVvXynBrQ71nTp57S52Sk4KLdP26Hb18xLfXsTdXploen%2FcvnYWVkiprcm0wyorAAm5UEeozhvKeaWgmALa2acPnUeMzqJ8cZkhSBIqFsehAhm05tv5Wny5xY51rnxvqGI9Hvf%2FDO1jvmK6TqMPlvv21cOE8xNlJz2125E2Ym5nzSn837mMOOeq8EGOqUBCOZCQdOq9quHZPt%2FqMSOcRBjYSzpatWdurCFYLbpE%2FB7W8bCAfasZfpnWDwu4bv0%2FVVQ9pDpIKxZq0kYCjQf3ny%2BFTzD%2FGPqZlwIHE8Wb4mZBOXfAx7EUw9AYHr%2BR8hx5oW%2FDtnSzY4Gjro6gWOrTLtgUNk2NVWEZH24Ymp5GqQ1cU%2FyqlnVILWkXnDLiSulaRSUc0daQK0MYMod1afMFvUHF7lu&X-Amz-Signature=34a744c001c2404913a164e8d99a32994825d871e21e6a43eebb9add5f015211&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
