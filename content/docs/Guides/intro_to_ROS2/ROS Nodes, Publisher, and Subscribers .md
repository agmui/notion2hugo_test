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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3PFBJ53%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIAPcZ8mZXIrrPwGshtqimT%2FkPccKr24Ov0AinyAqNbNwAiEA3T0iIsIuhY2S67KERIKwt76y6xr8rpi6YLp0sHSfScUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLm9Q7wHNv76EGdHkyrcAwSpid9fIqgmibT50EfRhnedYEOW%2F0JcCVq21wiUVy0qDC3kTf4bC7utJpDsuKA%2B%2FB6NdrxEl%2BgQDxht6n1DVg7E6aY2TNpFEy%2F9a8ZALEIIpt1DuV62XshH0WfBQaSdZ0WH68f5YdQi7Jm9aVknHNVJB%2B6f7KGdPJkeGD7shqxfpS2mgQaBO1XMnP%2B%2B4lOJ0Mz%2BoTptZU47cofJRFZ2PTR8xYcxiJg5MHaurWIxkHT%2BNCpQOoo39HTzbnOISadEK9ou6xAgfGFMRTssKRXHdZ4BoZEjXs0gjr6ssTl%2FNqlMaF4eFko9kkUKymM%2BBVWlqjI6fJ5Kqla41JF%2BzKoedMdLFYIZDyLmjqvtklnDAQZQuKIdLvvyhF9SP8sgHsSxWwoywRgs16ymvWxRupD14cihZl%2F%2FVnIBBA4Q3j5Jo0nh40gLLKSmiWsoxq1OXUmvrzOA8q6z1skGrHIJdOtoOros5iafukH238Ge1%2Bb2rPL8sYNg9ZvSlMwaG31igU9qphh1gmryeDeErNMvD9vtBRbNvEopiUrsagqWr607AoGcpj87LNWnzmRf0E6y%2F9bASROJUm9FsAo%2BWdWoGlZawa5yzLOtl5cCbb4aHaJioQoeQDncrt52WJqCWH%2BYMNzrqsMGOqUBpjVOIU0mRjY0DVs%2FDYI8nJNKkFxyC6O6De73SQ56BlbKLb%2BOae9SvwIob8saRshkKUaxxXzVESXDZwX0CfMM%2FdJphK0NGj9WcHw81hBaurDHjDCwoeFIRxKAff5bk9RW3srl0sPRNm76SMhi9TbBxcJJ8N%2BRlvUm%2FO5ZTOc%2FcvSz%2F44rvfHy8Dft4Dds6QSF6YxhavmqNQXMJtFIj3fVJ1%2BpE6UT&X-Amz-Signature=21c8a2676fba45f9c325c2aa344629102434acc3e67984eed58087b2e55581e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3PFBJ53%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIAPcZ8mZXIrrPwGshtqimT%2FkPccKr24Ov0AinyAqNbNwAiEA3T0iIsIuhY2S67KERIKwt76y6xr8rpi6YLp0sHSfScUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLm9Q7wHNv76EGdHkyrcAwSpid9fIqgmibT50EfRhnedYEOW%2F0JcCVq21wiUVy0qDC3kTf4bC7utJpDsuKA%2B%2FB6NdrxEl%2BgQDxht6n1DVg7E6aY2TNpFEy%2F9a8ZALEIIpt1DuV62XshH0WfBQaSdZ0WH68f5YdQi7Jm9aVknHNVJB%2B6f7KGdPJkeGD7shqxfpS2mgQaBO1XMnP%2B%2B4lOJ0Mz%2BoTptZU47cofJRFZ2PTR8xYcxiJg5MHaurWIxkHT%2BNCpQOoo39HTzbnOISadEK9ou6xAgfGFMRTssKRXHdZ4BoZEjXs0gjr6ssTl%2FNqlMaF4eFko9kkUKymM%2BBVWlqjI6fJ5Kqla41JF%2BzKoedMdLFYIZDyLmjqvtklnDAQZQuKIdLvvyhF9SP8sgHsSxWwoywRgs16ymvWxRupD14cihZl%2F%2FVnIBBA4Q3j5Jo0nh40gLLKSmiWsoxq1OXUmvrzOA8q6z1skGrHIJdOtoOros5iafukH238Ge1%2Bb2rPL8sYNg9ZvSlMwaG31igU9qphh1gmryeDeErNMvD9vtBRbNvEopiUrsagqWr607AoGcpj87LNWnzmRf0E6y%2F9bASROJUm9FsAo%2BWdWoGlZawa5yzLOtl5cCbb4aHaJioQoeQDncrt52WJqCWH%2BYMNzrqsMGOqUBpjVOIU0mRjY0DVs%2FDYI8nJNKkFxyC6O6De73SQ56BlbKLb%2BOae9SvwIob8saRshkKUaxxXzVESXDZwX0CfMM%2FdJphK0NGj9WcHw81hBaurDHjDCwoeFIRxKAff5bk9RW3srl0sPRNm76SMhi9TbBxcJJ8N%2BRlvUm%2FO5ZTOc%2FcvSz%2F44rvfHy8Dft4Dds6QSF6YxhavmqNQXMJtFIj3fVJ1%2BpE6UT&X-Amz-Signature=84eef7b57e399f3cb34b3be51a9db484cdc7039908d7fe89616245f963cf60fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3PFBJ53%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIAPcZ8mZXIrrPwGshtqimT%2FkPccKr24Ov0AinyAqNbNwAiEA3T0iIsIuhY2S67KERIKwt76y6xr8rpi6YLp0sHSfScUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLm9Q7wHNv76EGdHkyrcAwSpid9fIqgmibT50EfRhnedYEOW%2F0JcCVq21wiUVy0qDC3kTf4bC7utJpDsuKA%2B%2FB6NdrxEl%2BgQDxht6n1DVg7E6aY2TNpFEy%2F9a8ZALEIIpt1DuV62XshH0WfBQaSdZ0WH68f5YdQi7Jm9aVknHNVJB%2B6f7KGdPJkeGD7shqxfpS2mgQaBO1XMnP%2B%2B4lOJ0Mz%2BoTptZU47cofJRFZ2PTR8xYcxiJg5MHaurWIxkHT%2BNCpQOoo39HTzbnOISadEK9ou6xAgfGFMRTssKRXHdZ4BoZEjXs0gjr6ssTl%2FNqlMaF4eFko9kkUKymM%2BBVWlqjI6fJ5Kqla41JF%2BzKoedMdLFYIZDyLmjqvtklnDAQZQuKIdLvvyhF9SP8sgHsSxWwoywRgs16ymvWxRupD14cihZl%2F%2FVnIBBA4Q3j5Jo0nh40gLLKSmiWsoxq1OXUmvrzOA8q6z1skGrHIJdOtoOros5iafukH238Ge1%2Bb2rPL8sYNg9ZvSlMwaG31igU9qphh1gmryeDeErNMvD9vtBRbNvEopiUrsagqWr607AoGcpj87LNWnzmRf0E6y%2F9bASROJUm9FsAo%2BWdWoGlZawa5yzLOtl5cCbb4aHaJioQoeQDncrt52WJqCWH%2BYMNzrqsMGOqUBpjVOIU0mRjY0DVs%2FDYI8nJNKkFxyC6O6De73SQ56BlbKLb%2BOae9SvwIob8saRshkKUaxxXzVESXDZwX0CfMM%2FdJphK0NGj9WcHw81hBaurDHjDCwoeFIRxKAff5bk9RW3srl0sPRNm76SMhi9TbBxcJJ8N%2BRlvUm%2FO5ZTOc%2FcvSz%2F44rvfHy8Dft4Dds6QSF6YxhavmqNQXMJtFIj3fVJ1%2BpE6UT&X-Amz-Signature=833bea5882eada7bdfa51dc449a9952537ab5516180dfbbfcfc72e9811a3aea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3PFBJ53%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIAPcZ8mZXIrrPwGshtqimT%2FkPccKr24Ov0AinyAqNbNwAiEA3T0iIsIuhY2S67KERIKwt76y6xr8rpi6YLp0sHSfScUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLm9Q7wHNv76EGdHkyrcAwSpid9fIqgmibT50EfRhnedYEOW%2F0JcCVq21wiUVy0qDC3kTf4bC7utJpDsuKA%2B%2FB6NdrxEl%2BgQDxht6n1DVg7E6aY2TNpFEy%2F9a8ZALEIIpt1DuV62XshH0WfBQaSdZ0WH68f5YdQi7Jm9aVknHNVJB%2B6f7KGdPJkeGD7shqxfpS2mgQaBO1XMnP%2B%2B4lOJ0Mz%2BoTptZU47cofJRFZ2PTR8xYcxiJg5MHaurWIxkHT%2BNCpQOoo39HTzbnOISadEK9ou6xAgfGFMRTssKRXHdZ4BoZEjXs0gjr6ssTl%2FNqlMaF4eFko9kkUKymM%2BBVWlqjI6fJ5Kqla41JF%2BzKoedMdLFYIZDyLmjqvtklnDAQZQuKIdLvvyhF9SP8sgHsSxWwoywRgs16ymvWxRupD14cihZl%2F%2FVnIBBA4Q3j5Jo0nh40gLLKSmiWsoxq1OXUmvrzOA8q6z1skGrHIJdOtoOros5iafukH238Ge1%2Bb2rPL8sYNg9ZvSlMwaG31igU9qphh1gmryeDeErNMvD9vtBRbNvEopiUrsagqWr607AoGcpj87LNWnzmRf0E6y%2F9bASROJUm9FsAo%2BWdWoGlZawa5yzLOtl5cCbb4aHaJioQoeQDncrt52WJqCWH%2BYMNzrqsMGOqUBpjVOIU0mRjY0DVs%2FDYI8nJNKkFxyC6O6De73SQ56BlbKLb%2BOae9SvwIob8saRshkKUaxxXzVESXDZwX0CfMM%2FdJphK0NGj9WcHw81hBaurDHjDCwoeFIRxKAff5bk9RW3srl0sPRNm76SMhi9TbBxcJJ8N%2BRlvUm%2FO5ZTOc%2FcvSz%2F44rvfHy8Dft4Dds6QSF6YxhavmqNQXMJtFIj3fVJ1%2BpE6UT&X-Amz-Signature=717aad65db0f597d1d068133684df80ae27d36db1cc934bfae974f6d3234353a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3PFBJ53%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIAPcZ8mZXIrrPwGshtqimT%2FkPccKr24Ov0AinyAqNbNwAiEA3T0iIsIuhY2S67KERIKwt76y6xr8rpi6YLp0sHSfScUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLm9Q7wHNv76EGdHkyrcAwSpid9fIqgmibT50EfRhnedYEOW%2F0JcCVq21wiUVy0qDC3kTf4bC7utJpDsuKA%2B%2FB6NdrxEl%2BgQDxht6n1DVg7E6aY2TNpFEy%2F9a8ZALEIIpt1DuV62XshH0WfBQaSdZ0WH68f5YdQi7Jm9aVknHNVJB%2B6f7KGdPJkeGD7shqxfpS2mgQaBO1XMnP%2B%2B4lOJ0Mz%2BoTptZU47cofJRFZ2PTR8xYcxiJg5MHaurWIxkHT%2BNCpQOoo39HTzbnOISadEK9ou6xAgfGFMRTssKRXHdZ4BoZEjXs0gjr6ssTl%2FNqlMaF4eFko9kkUKymM%2BBVWlqjI6fJ5Kqla41JF%2BzKoedMdLFYIZDyLmjqvtklnDAQZQuKIdLvvyhF9SP8sgHsSxWwoywRgs16ymvWxRupD14cihZl%2F%2FVnIBBA4Q3j5Jo0nh40gLLKSmiWsoxq1OXUmvrzOA8q6z1skGrHIJdOtoOros5iafukH238Ge1%2Bb2rPL8sYNg9ZvSlMwaG31igU9qphh1gmryeDeErNMvD9vtBRbNvEopiUrsagqWr607AoGcpj87LNWnzmRf0E6y%2F9bASROJUm9FsAo%2BWdWoGlZawa5yzLOtl5cCbb4aHaJioQoeQDncrt52WJqCWH%2BYMNzrqsMGOqUBpjVOIU0mRjY0DVs%2FDYI8nJNKkFxyC6O6De73SQ56BlbKLb%2BOae9SvwIob8saRshkKUaxxXzVESXDZwX0CfMM%2FdJphK0NGj9WcHw81hBaurDHjDCwoeFIRxKAff5bk9RW3srl0sPRNm76SMhi9TbBxcJJ8N%2BRlvUm%2FO5ZTOc%2FcvSz%2F44rvfHy8Dft4Dds6QSF6YxhavmqNQXMJtFIj3fVJ1%2BpE6UT&X-Amz-Signature=13223047fd43c48dcb874c85d943ed718ec343b616259c47d1e8ec8a9a8371b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3PFBJ53%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIAPcZ8mZXIrrPwGshtqimT%2FkPccKr24Ov0AinyAqNbNwAiEA3T0iIsIuhY2S67KERIKwt76y6xr8rpi6YLp0sHSfScUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLm9Q7wHNv76EGdHkyrcAwSpid9fIqgmibT50EfRhnedYEOW%2F0JcCVq21wiUVy0qDC3kTf4bC7utJpDsuKA%2B%2FB6NdrxEl%2BgQDxht6n1DVg7E6aY2TNpFEy%2F9a8ZALEIIpt1DuV62XshH0WfBQaSdZ0WH68f5YdQi7Jm9aVknHNVJB%2B6f7KGdPJkeGD7shqxfpS2mgQaBO1XMnP%2B%2B4lOJ0Mz%2BoTptZU47cofJRFZ2PTR8xYcxiJg5MHaurWIxkHT%2BNCpQOoo39HTzbnOISadEK9ou6xAgfGFMRTssKRXHdZ4BoZEjXs0gjr6ssTl%2FNqlMaF4eFko9kkUKymM%2BBVWlqjI6fJ5Kqla41JF%2BzKoedMdLFYIZDyLmjqvtklnDAQZQuKIdLvvyhF9SP8sgHsSxWwoywRgs16ymvWxRupD14cihZl%2F%2FVnIBBA4Q3j5Jo0nh40gLLKSmiWsoxq1OXUmvrzOA8q6z1skGrHIJdOtoOros5iafukH238Ge1%2Bb2rPL8sYNg9ZvSlMwaG31igU9qphh1gmryeDeErNMvD9vtBRbNvEopiUrsagqWr607AoGcpj87LNWnzmRf0E6y%2F9bASROJUm9FsAo%2BWdWoGlZawa5yzLOtl5cCbb4aHaJioQoeQDncrt52WJqCWH%2BYMNzrqsMGOqUBpjVOIU0mRjY0DVs%2FDYI8nJNKkFxyC6O6De73SQ56BlbKLb%2BOae9SvwIob8saRshkKUaxxXzVESXDZwX0CfMM%2FdJphK0NGj9WcHw81hBaurDHjDCwoeFIRxKAff5bk9RW3srl0sPRNm76SMhi9TbBxcJJ8N%2BRlvUm%2FO5ZTOc%2FcvSz%2F44rvfHy8Dft4Dds6QSF6YxhavmqNQXMJtFIj3fVJ1%2BpE6UT&X-Amz-Signature=50fb60f0fd66a5cc1ffa3f6a6a425a271d237bfaf35c0f5ac94332db226982af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3PFBJ53%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIAPcZ8mZXIrrPwGshtqimT%2FkPccKr24Ov0AinyAqNbNwAiEA3T0iIsIuhY2S67KERIKwt76y6xr8rpi6YLp0sHSfScUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLm9Q7wHNv76EGdHkyrcAwSpid9fIqgmibT50EfRhnedYEOW%2F0JcCVq21wiUVy0qDC3kTf4bC7utJpDsuKA%2B%2FB6NdrxEl%2BgQDxht6n1DVg7E6aY2TNpFEy%2F9a8ZALEIIpt1DuV62XshH0WfBQaSdZ0WH68f5YdQi7Jm9aVknHNVJB%2B6f7KGdPJkeGD7shqxfpS2mgQaBO1XMnP%2B%2B4lOJ0Mz%2BoTptZU47cofJRFZ2PTR8xYcxiJg5MHaurWIxkHT%2BNCpQOoo39HTzbnOISadEK9ou6xAgfGFMRTssKRXHdZ4BoZEjXs0gjr6ssTl%2FNqlMaF4eFko9kkUKymM%2BBVWlqjI6fJ5Kqla41JF%2BzKoedMdLFYIZDyLmjqvtklnDAQZQuKIdLvvyhF9SP8sgHsSxWwoywRgs16ymvWxRupD14cihZl%2F%2FVnIBBA4Q3j5Jo0nh40gLLKSmiWsoxq1OXUmvrzOA8q6z1skGrHIJdOtoOros5iafukH238Ge1%2Bb2rPL8sYNg9ZvSlMwaG31igU9qphh1gmryeDeErNMvD9vtBRbNvEopiUrsagqWr607AoGcpj87LNWnzmRf0E6y%2F9bASROJUm9FsAo%2BWdWoGlZawa5yzLOtl5cCbb4aHaJioQoeQDncrt52WJqCWH%2BYMNzrqsMGOqUBpjVOIU0mRjY0DVs%2FDYI8nJNKkFxyC6O6De73SQ56BlbKLb%2BOae9SvwIob8saRshkKUaxxXzVESXDZwX0CfMM%2FdJphK0NGj9WcHw81hBaurDHjDCwoeFIRxKAff5bk9RW3srl0sPRNm76SMhi9TbBxcJJ8N%2BRlvUm%2FO5ZTOc%2FcvSz%2F44rvfHy8Dft4Dds6QSF6YxhavmqNQXMJtFIj3fVJ1%2BpE6UT&X-Amz-Signature=d2288316ffdfe10c8418c235ae5c48e56b3e1d791e029230d08c5429ff5f1baf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3PFBJ53%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIAPcZ8mZXIrrPwGshtqimT%2FkPccKr24Ov0AinyAqNbNwAiEA3T0iIsIuhY2S67KERIKwt76y6xr8rpi6YLp0sHSfScUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLm9Q7wHNv76EGdHkyrcAwSpid9fIqgmibT50EfRhnedYEOW%2F0JcCVq21wiUVy0qDC3kTf4bC7utJpDsuKA%2B%2FB6NdrxEl%2BgQDxht6n1DVg7E6aY2TNpFEy%2F9a8ZALEIIpt1DuV62XshH0WfBQaSdZ0WH68f5YdQi7Jm9aVknHNVJB%2B6f7KGdPJkeGD7shqxfpS2mgQaBO1XMnP%2B%2B4lOJ0Mz%2BoTptZU47cofJRFZ2PTR8xYcxiJg5MHaurWIxkHT%2BNCpQOoo39HTzbnOISadEK9ou6xAgfGFMRTssKRXHdZ4BoZEjXs0gjr6ssTl%2FNqlMaF4eFko9kkUKymM%2BBVWlqjI6fJ5Kqla41JF%2BzKoedMdLFYIZDyLmjqvtklnDAQZQuKIdLvvyhF9SP8sgHsSxWwoywRgs16ymvWxRupD14cihZl%2F%2FVnIBBA4Q3j5Jo0nh40gLLKSmiWsoxq1OXUmvrzOA8q6z1skGrHIJdOtoOros5iafukH238Ge1%2Bb2rPL8sYNg9ZvSlMwaG31igU9qphh1gmryeDeErNMvD9vtBRbNvEopiUrsagqWr607AoGcpj87LNWnzmRf0E6y%2F9bASROJUm9FsAo%2BWdWoGlZawa5yzLOtl5cCbb4aHaJioQoeQDncrt52WJqCWH%2BYMNzrqsMGOqUBpjVOIU0mRjY0DVs%2FDYI8nJNKkFxyC6O6De73SQ56BlbKLb%2BOae9SvwIob8saRshkKUaxxXzVESXDZwX0CfMM%2FdJphK0NGj9WcHw81hBaurDHjDCwoeFIRxKAff5bk9RW3srl0sPRNm76SMhi9TbBxcJJ8N%2BRlvUm%2FO5ZTOc%2FcvSz%2F44rvfHy8Dft4Dds6QSF6YxhavmqNQXMJtFIj3fVJ1%2BpE6UT&X-Amz-Signature=ca89285a347fffc8ff61fc30d058226b25e2d07d7774bf7ce773a432ebe39d6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
