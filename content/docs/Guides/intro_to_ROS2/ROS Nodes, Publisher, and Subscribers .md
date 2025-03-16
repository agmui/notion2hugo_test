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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FRVUR3R%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlxEfrrDg6aDAKMgBq0j7ZvSvZ77X31BThCMBIeOpzlAiEAvJ0A6gRT1L7FqPQTVIWW8jzOIy%2Bo%2B7xqmV3pVk5C4ioq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDKbtHxXw%2Bj4UfBSjxCrcA4t4NUraPjzOAl%2FgGEvJi3ii6LUUcMDRgfZLX8S3QxAWZv%2FmGDA%2FizW9pTUZ%2Fvn5%2BaGQZRdYNlgCYPniUJXdTbihybRjqRf6FE50DT2Zbgbb8fIz65RzSZbCbYN1k6kqeepIxFeVp0jFeh3kzP0X4FJpaHvmoYPhaMMEjbmWCxtagdNNXiMo93jAJTqBOZiNe9JJGna%2FPB%2Bed%2BoIth%2Bst0cCo800DlKjrkASFGTLSf5W6GbzOQL9tUybhd%2FG%2F4M7aiuSuV7pquOTwErZ%2FAP5b29raXVhLf35OLkcd%2BKkFg95jy7lC1pXxh897wEXXos0YQzzwczaZvXDuwmQ2F9Fb3OMDUgQVtHv6KcrJrWWzTKjuu%2Fq8w6IX7OlMaJbSggGyRkzYYIJdR2dIs17Mz3ATcM%2FqE3lr%2F6YUtgUIFxaqVtIfL%2BTSMIHinkA4BUX%2BBR%2BjQE8NS%2B63oAgqMJCy4%2Faeu4%2BklE34yuH%2BIG4tK0UCF1QYBG3RCxGlhDs%2FYYKwNdOElOWLlPWn%2FObZCpoRORuoXiAVTGTvPLVuBIDBoaFIvoDIBfH1yYXMsstvAiYJr%2BfQk6lfJxiVwgdtmlC0qYNuLQ1nFxc%2BOQ39C4vQveeWvs3KgHf9j9C4EeMKqrhMNTc3L4GOqUBUqOzfilERk%2BYKWOSlpRXekrcozz%2FOa4w6sTDEOKraehA0prmogXcTtH6yMtTR3s5hgJ%2FdqpWQDiyZc217KKQ7m5ca7iWMSUJPaTHfys%2FTTFDZOBfQ7E0W%2FfHkeZkpDibd9k3WVcuvfNPtGsWep27dH83UCCFbJuojeMalbN6lWioSHxg521FBxeUU%2BtZ5YhyEdbi4DPFIIR5jQP%2FgjWF7phqNwBY&X-Amz-Signature=6aaf11ba949126837840c716165cc750c9ac191187586fb18d61562c6c3baa89&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FRVUR3R%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlxEfrrDg6aDAKMgBq0j7ZvSvZ77X31BThCMBIeOpzlAiEAvJ0A6gRT1L7FqPQTVIWW8jzOIy%2Bo%2B7xqmV3pVk5C4ioq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDKbtHxXw%2Bj4UfBSjxCrcA4t4NUraPjzOAl%2FgGEvJi3ii6LUUcMDRgfZLX8S3QxAWZv%2FmGDA%2FizW9pTUZ%2Fvn5%2BaGQZRdYNlgCYPniUJXdTbihybRjqRf6FE50DT2Zbgbb8fIz65RzSZbCbYN1k6kqeepIxFeVp0jFeh3kzP0X4FJpaHvmoYPhaMMEjbmWCxtagdNNXiMo93jAJTqBOZiNe9JJGna%2FPB%2Bed%2BoIth%2Bst0cCo800DlKjrkASFGTLSf5W6GbzOQL9tUybhd%2FG%2F4M7aiuSuV7pquOTwErZ%2FAP5b29raXVhLf35OLkcd%2BKkFg95jy7lC1pXxh897wEXXos0YQzzwczaZvXDuwmQ2F9Fb3OMDUgQVtHv6KcrJrWWzTKjuu%2Fq8w6IX7OlMaJbSggGyRkzYYIJdR2dIs17Mz3ATcM%2FqE3lr%2F6YUtgUIFxaqVtIfL%2BTSMIHinkA4BUX%2BBR%2BjQE8NS%2B63oAgqMJCy4%2Faeu4%2BklE34yuH%2BIG4tK0UCF1QYBG3RCxGlhDs%2FYYKwNdOElOWLlPWn%2FObZCpoRORuoXiAVTGTvPLVuBIDBoaFIvoDIBfH1yYXMsstvAiYJr%2BfQk6lfJxiVwgdtmlC0qYNuLQ1nFxc%2BOQ39C4vQveeWvs3KgHf9j9C4EeMKqrhMNTc3L4GOqUBUqOzfilERk%2BYKWOSlpRXekrcozz%2FOa4w6sTDEOKraehA0prmogXcTtH6yMtTR3s5hgJ%2FdqpWQDiyZc217KKQ7m5ca7iWMSUJPaTHfys%2FTTFDZOBfQ7E0W%2FfHkeZkpDibd9k3WVcuvfNPtGsWep27dH83UCCFbJuojeMalbN6lWioSHxg521FBxeUU%2BtZ5YhyEdbi4DPFIIR5jQP%2FgjWF7phqNwBY&X-Amz-Signature=3aa5607e4d1fd942f082e7617beaf72467246ad529b85805412cbfc8dda2cefd&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FRVUR3R%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlxEfrrDg6aDAKMgBq0j7ZvSvZ77X31BThCMBIeOpzlAiEAvJ0A6gRT1L7FqPQTVIWW8jzOIy%2Bo%2B7xqmV3pVk5C4ioq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDKbtHxXw%2Bj4UfBSjxCrcA4t4NUraPjzOAl%2FgGEvJi3ii6LUUcMDRgfZLX8S3QxAWZv%2FmGDA%2FizW9pTUZ%2Fvn5%2BaGQZRdYNlgCYPniUJXdTbihybRjqRf6FE50DT2Zbgbb8fIz65RzSZbCbYN1k6kqeepIxFeVp0jFeh3kzP0X4FJpaHvmoYPhaMMEjbmWCxtagdNNXiMo93jAJTqBOZiNe9JJGna%2FPB%2Bed%2BoIth%2Bst0cCo800DlKjrkASFGTLSf5W6GbzOQL9tUybhd%2FG%2F4M7aiuSuV7pquOTwErZ%2FAP5b29raXVhLf35OLkcd%2BKkFg95jy7lC1pXxh897wEXXos0YQzzwczaZvXDuwmQ2F9Fb3OMDUgQVtHv6KcrJrWWzTKjuu%2Fq8w6IX7OlMaJbSggGyRkzYYIJdR2dIs17Mz3ATcM%2FqE3lr%2F6YUtgUIFxaqVtIfL%2BTSMIHinkA4BUX%2BBR%2BjQE8NS%2B63oAgqMJCy4%2Faeu4%2BklE34yuH%2BIG4tK0UCF1QYBG3RCxGlhDs%2FYYKwNdOElOWLlPWn%2FObZCpoRORuoXiAVTGTvPLVuBIDBoaFIvoDIBfH1yYXMsstvAiYJr%2BfQk6lfJxiVwgdtmlC0qYNuLQ1nFxc%2BOQ39C4vQveeWvs3KgHf9j9C4EeMKqrhMNTc3L4GOqUBUqOzfilERk%2BYKWOSlpRXekrcozz%2FOa4w6sTDEOKraehA0prmogXcTtH6yMtTR3s5hgJ%2FdqpWQDiyZc217KKQ7m5ca7iWMSUJPaTHfys%2FTTFDZOBfQ7E0W%2FfHkeZkpDibd9k3WVcuvfNPtGsWep27dH83UCCFbJuojeMalbN6lWioSHxg521FBxeUU%2BtZ5YhyEdbi4DPFIIR5jQP%2FgjWF7phqNwBY&X-Amz-Signature=ff9833abb084aa6c517c6304a4c8e8d2d8e9cc6478e1fe8ef28402f30545a612&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FRVUR3R%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlxEfrrDg6aDAKMgBq0j7ZvSvZ77X31BThCMBIeOpzlAiEAvJ0A6gRT1L7FqPQTVIWW8jzOIy%2Bo%2B7xqmV3pVk5C4ioq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDKbtHxXw%2Bj4UfBSjxCrcA4t4NUraPjzOAl%2FgGEvJi3ii6LUUcMDRgfZLX8S3QxAWZv%2FmGDA%2FizW9pTUZ%2Fvn5%2BaGQZRdYNlgCYPniUJXdTbihybRjqRf6FE50DT2Zbgbb8fIz65RzSZbCbYN1k6kqeepIxFeVp0jFeh3kzP0X4FJpaHvmoYPhaMMEjbmWCxtagdNNXiMo93jAJTqBOZiNe9JJGna%2FPB%2Bed%2BoIth%2Bst0cCo800DlKjrkASFGTLSf5W6GbzOQL9tUybhd%2FG%2F4M7aiuSuV7pquOTwErZ%2FAP5b29raXVhLf35OLkcd%2BKkFg95jy7lC1pXxh897wEXXos0YQzzwczaZvXDuwmQ2F9Fb3OMDUgQVtHv6KcrJrWWzTKjuu%2Fq8w6IX7OlMaJbSggGyRkzYYIJdR2dIs17Mz3ATcM%2FqE3lr%2F6YUtgUIFxaqVtIfL%2BTSMIHinkA4BUX%2BBR%2BjQE8NS%2B63oAgqMJCy4%2Faeu4%2BklE34yuH%2BIG4tK0UCF1QYBG3RCxGlhDs%2FYYKwNdOElOWLlPWn%2FObZCpoRORuoXiAVTGTvPLVuBIDBoaFIvoDIBfH1yYXMsstvAiYJr%2BfQk6lfJxiVwgdtmlC0qYNuLQ1nFxc%2BOQ39C4vQveeWvs3KgHf9j9C4EeMKqrhMNTc3L4GOqUBUqOzfilERk%2BYKWOSlpRXekrcozz%2FOa4w6sTDEOKraehA0prmogXcTtH6yMtTR3s5hgJ%2FdqpWQDiyZc217KKQ7m5ca7iWMSUJPaTHfys%2FTTFDZOBfQ7E0W%2FfHkeZkpDibd9k3WVcuvfNPtGsWep27dH83UCCFbJuojeMalbN6lWioSHxg521FBxeUU%2BtZ5YhyEdbi4DPFIIR5jQP%2FgjWF7phqNwBY&X-Amz-Signature=5fa961fbc83801566e0a274b00874df3888bb1705801ed959f40cdb4f18981bb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FRVUR3R%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlxEfrrDg6aDAKMgBq0j7ZvSvZ77X31BThCMBIeOpzlAiEAvJ0A6gRT1L7FqPQTVIWW8jzOIy%2Bo%2B7xqmV3pVk5C4ioq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDKbtHxXw%2Bj4UfBSjxCrcA4t4NUraPjzOAl%2FgGEvJi3ii6LUUcMDRgfZLX8S3QxAWZv%2FmGDA%2FizW9pTUZ%2Fvn5%2BaGQZRdYNlgCYPniUJXdTbihybRjqRf6FE50DT2Zbgbb8fIz65RzSZbCbYN1k6kqeepIxFeVp0jFeh3kzP0X4FJpaHvmoYPhaMMEjbmWCxtagdNNXiMo93jAJTqBOZiNe9JJGna%2FPB%2Bed%2BoIth%2Bst0cCo800DlKjrkASFGTLSf5W6GbzOQL9tUybhd%2FG%2F4M7aiuSuV7pquOTwErZ%2FAP5b29raXVhLf35OLkcd%2BKkFg95jy7lC1pXxh897wEXXos0YQzzwczaZvXDuwmQ2F9Fb3OMDUgQVtHv6KcrJrWWzTKjuu%2Fq8w6IX7OlMaJbSggGyRkzYYIJdR2dIs17Mz3ATcM%2FqE3lr%2F6YUtgUIFxaqVtIfL%2BTSMIHinkA4BUX%2BBR%2BjQE8NS%2B63oAgqMJCy4%2Faeu4%2BklE34yuH%2BIG4tK0UCF1QYBG3RCxGlhDs%2FYYKwNdOElOWLlPWn%2FObZCpoRORuoXiAVTGTvPLVuBIDBoaFIvoDIBfH1yYXMsstvAiYJr%2BfQk6lfJxiVwgdtmlC0qYNuLQ1nFxc%2BOQ39C4vQveeWvs3KgHf9j9C4EeMKqrhMNTc3L4GOqUBUqOzfilERk%2BYKWOSlpRXekrcozz%2FOa4w6sTDEOKraehA0prmogXcTtH6yMtTR3s5hgJ%2FdqpWQDiyZc217KKQ7m5ca7iWMSUJPaTHfys%2FTTFDZOBfQ7E0W%2FfHkeZkpDibd9k3WVcuvfNPtGsWep27dH83UCCFbJuojeMalbN6lWioSHxg521FBxeUU%2BtZ5YhyEdbi4DPFIIR5jQP%2FgjWF7phqNwBY&X-Amz-Signature=5ac29da89ff49fa6b6c68cc858f4af0559b4c1fdda0987d375e98079fe324587&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FRVUR3R%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlxEfrrDg6aDAKMgBq0j7ZvSvZ77X31BThCMBIeOpzlAiEAvJ0A6gRT1L7FqPQTVIWW8jzOIy%2Bo%2B7xqmV3pVk5C4ioq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDKbtHxXw%2Bj4UfBSjxCrcA4t4NUraPjzOAl%2FgGEvJi3ii6LUUcMDRgfZLX8S3QxAWZv%2FmGDA%2FizW9pTUZ%2Fvn5%2BaGQZRdYNlgCYPniUJXdTbihybRjqRf6FE50DT2Zbgbb8fIz65RzSZbCbYN1k6kqeepIxFeVp0jFeh3kzP0X4FJpaHvmoYPhaMMEjbmWCxtagdNNXiMo93jAJTqBOZiNe9JJGna%2FPB%2Bed%2BoIth%2Bst0cCo800DlKjrkASFGTLSf5W6GbzOQL9tUybhd%2FG%2F4M7aiuSuV7pquOTwErZ%2FAP5b29raXVhLf35OLkcd%2BKkFg95jy7lC1pXxh897wEXXos0YQzzwczaZvXDuwmQ2F9Fb3OMDUgQVtHv6KcrJrWWzTKjuu%2Fq8w6IX7OlMaJbSggGyRkzYYIJdR2dIs17Mz3ATcM%2FqE3lr%2F6YUtgUIFxaqVtIfL%2BTSMIHinkA4BUX%2BBR%2BjQE8NS%2B63oAgqMJCy4%2Faeu4%2BklE34yuH%2BIG4tK0UCF1QYBG3RCxGlhDs%2FYYKwNdOElOWLlPWn%2FObZCpoRORuoXiAVTGTvPLVuBIDBoaFIvoDIBfH1yYXMsstvAiYJr%2BfQk6lfJxiVwgdtmlC0qYNuLQ1nFxc%2BOQ39C4vQveeWvs3KgHf9j9C4EeMKqrhMNTc3L4GOqUBUqOzfilERk%2BYKWOSlpRXekrcozz%2FOa4w6sTDEOKraehA0prmogXcTtH6yMtTR3s5hgJ%2FdqpWQDiyZc217KKQ7m5ca7iWMSUJPaTHfys%2FTTFDZOBfQ7E0W%2FfHkeZkpDibd9k3WVcuvfNPtGsWep27dH83UCCFbJuojeMalbN6lWioSHxg521FBxeUU%2BtZ5YhyEdbi4DPFIIR5jQP%2FgjWF7phqNwBY&X-Amz-Signature=42343c3fadd9ca22d6d711929e1b4664e605e44924d3e966109299a6c9431d12&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FRVUR3R%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlxEfrrDg6aDAKMgBq0j7ZvSvZ77X31BThCMBIeOpzlAiEAvJ0A6gRT1L7FqPQTVIWW8jzOIy%2Bo%2B7xqmV3pVk5C4ioq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDKbtHxXw%2Bj4UfBSjxCrcA4t4NUraPjzOAl%2FgGEvJi3ii6LUUcMDRgfZLX8S3QxAWZv%2FmGDA%2FizW9pTUZ%2Fvn5%2BaGQZRdYNlgCYPniUJXdTbihybRjqRf6FE50DT2Zbgbb8fIz65RzSZbCbYN1k6kqeepIxFeVp0jFeh3kzP0X4FJpaHvmoYPhaMMEjbmWCxtagdNNXiMo93jAJTqBOZiNe9JJGna%2FPB%2Bed%2BoIth%2Bst0cCo800DlKjrkASFGTLSf5W6GbzOQL9tUybhd%2FG%2F4M7aiuSuV7pquOTwErZ%2FAP5b29raXVhLf35OLkcd%2BKkFg95jy7lC1pXxh897wEXXos0YQzzwczaZvXDuwmQ2F9Fb3OMDUgQVtHv6KcrJrWWzTKjuu%2Fq8w6IX7OlMaJbSggGyRkzYYIJdR2dIs17Mz3ATcM%2FqE3lr%2F6YUtgUIFxaqVtIfL%2BTSMIHinkA4BUX%2BBR%2BjQE8NS%2B63oAgqMJCy4%2Faeu4%2BklE34yuH%2BIG4tK0UCF1QYBG3RCxGlhDs%2FYYKwNdOElOWLlPWn%2FObZCpoRORuoXiAVTGTvPLVuBIDBoaFIvoDIBfH1yYXMsstvAiYJr%2BfQk6lfJxiVwgdtmlC0qYNuLQ1nFxc%2BOQ39C4vQveeWvs3KgHf9j9C4EeMKqrhMNTc3L4GOqUBUqOzfilERk%2BYKWOSlpRXekrcozz%2FOa4w6sTDEOKraehA0prmogXcTtH6yMtTR3s5hgJ%2FdqpWQDiyZc217KKQ7m5ca7iWMSUJPaTHfys%2FTTFDZOBfQ7E0W%2FfHkeZkpDibd9k3WVcuvfNPtGsWep27dH83UCCFbJuojeMalbN6lWioSHxg521FBxeUU%2BtZ5YhyEdbi4DPFIIR5jQP%2FgjWF7phqNwBY&X-Amz-Signature=b88ecee10816f8cc7aed4996c735fab004522b09f30dbc1eda3adac37467091c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FRVUR3R%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlxEfrrDg6aDAKMgBq0j7ZvSvZ77X31BThCMBIeOpzlAiEAvJ0A6gRT1L7FqPQTVIWW8jzOIy%2Bo%2B7xqmV3pVk5C4ioq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDKbtHxXw%2Bj4UfBSjxCrcA4t4NUraPjzOAl%2FgGEvJi3ii6LUUcMDRgfZLX8S3QxAWZv%2FmGDA%2FizW9pTUZ%2Fvn5%2BaGQZRdYNlgCYPniUJXdTbihybRjqRf6FE50DT2Zbgbb8fIz65RzSZbCbYN1k6kqeepIxFeVp0jFeh3kzP0X4FJpaHvmoYPhaMMEjbmWCxtagdNNXiMo93jAJTqBOZiNe9JJGna%2FPB%2Bed%2BoIth%2Bst0cCo800DlKjrkASFGTLSf5W6GbzOQL9tUybhd%2FG%2F4M7aiuSuV7pquOTwErZ%2FAP5b29raXVhLf35OLkcd%2BKkFg95jy7lC1pXxh897wEXXos0YQzzwczaZvXDuwmQ2F9Fb3OMDUgQVtHv6KcrJrWWzTKjuu%2Fq8w6IX7OlMaJbSggGyRkzYYIJdR2dIs17Mz3ATcM%2FqE3lr%2F6YUtgUIFxaqVtIfL%2BTSMIHinkA4BUX%2BBR%2BjQE8NS%2B63oAgqMJCy4%2Faeu4%2BklE34yuH%2BIG4tK0UCF1QYBG3RCxGlhDs%2FYYKwNdOElOWLlPWn%2FObZCpoRORuoXiAVTGTvPLVuBIDBoaFIvoDIBfH1yYXMsstvAiYJr%2BfQk6lfJxiVwgdtmlC0qYNuLQ1nFxc%2BOQ39C4vQveeWvs3KgHf9j9C4EeMKqrhMNTc3L4GOqUBUqOzfilERk%2BYKWOSlpRXekrcozz%2FOa4w6sTDEOKraehA0prmogXcTtH6yMtTR3s5hgJ%2FdqpWQDiyZc217KKQ7m5ca7iWMSUJPaTHfys%2FTTFDZOBfQ7E0W%2FfHkeZkpDibd9k3WVcuvfNPtGsWep27dH83UCCFbJuojeMalbN6lWioSHxg521FBxeUU%2BtZ5YhyEdbi4DPFIIR5jQP%2FgjWF7phqNwBY&X-Amz-Signature=190f1b48f5b98ec9f5e493eaf7ddcc4cfd9855076839f7ca8ad9b245594615fb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
