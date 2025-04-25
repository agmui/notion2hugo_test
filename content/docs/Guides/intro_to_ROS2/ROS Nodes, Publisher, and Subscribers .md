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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BQOB3YF%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRQX2inX319G3cBFe%2FtztfPakO6HCf5jm1Ki0R4l3v8gIhAM1JBq8hN%2F05da2J2oBIAWx2%2BHoGrHZmdWbZXk89Ok64Kv8DCCoQABoMNjM3NDIzMTgzODA1IgyLbubIZpKbIzgh17Aq3AOa8t6fkwquPlkYfKWYMG04MzSl730QzTsLyXeOjMo%2F3fXx%2BiZWzWSHhBf2pDfIPahPpKmQM7Wr41iqlX4S4BFnJmfA8X7WIQd%2BRf%2BsNoFjenyi5nTNAMB6NrezHu5Ggax5Fm%2FcUTz6IFIUWAqB2lVYmJLdaUaUz%2BnDe8qNDjShYF%2FsEKaxvUH8w4z9lwXEbOi1%2FAseR%2BQbl7ueTnHn6ED91%2Fwm5M0p6HEfJZ3pwQsjI%2BOa3qABRMwnvf2DZDYuPQGiWDpecb5FEGfighv2sh1Pg9nAt4bQop81%2BWWkgQMZjYXAnlRT0j9OaNXc5tDbsYlbEcjUuYEUSJgOGj4YhLPc%2B1uG4bCr%2B8FRXeEKWupyxh7NRkLeO6ZLmugqHGEmtTHepv4B4va6L6ImlGiYkUemN%2FtqCQqy9d1Omn%2B410rG0Gi24iYlWABmHfCAR8ANVorfA0c9IBsWl%2FtnESelAhye7yzxBucwGC9R8RQtllwjjmgbAct7g%2FmLOSfnokUcB3giGmyC8D4zc7UePiOu3HfmBXx6tWBFyxHP14vTRBZ9AweftLUk7BmssIpXp1hrwWaV3bgJesaZxNIjZMRRrHvRtmfqcgRXIdZLf8I7xAl6qrwpV%2FkDS%2FJ%2Fx7c8mjC1m63ABjqkAZIAUo2%2F5EhhPtztCiA0cFEf2FSFoTAqwg21odE5kc0ahq%2BIgz1cvd1xxUzpu3ZQ%2BLpq6%2FoIakItqRCFf1RPNa%2FmIHIRr2X6AJzgEo8cmEZfY941bnh68TDTNPeabUi9ZR0YIy42Gi21WMVm81mtcfmWu32EKKyARRfc2JCb8YM%2FzmF%2B2wFDfj89QGIdQei%2FklIAtDQSbr8vsYDqkECHC7lnz0XM&X-Amz-Signature=fa36e0daaf9e6a53cf3bb29db28ec154dbdb2d47417e22314d2225b2af10e492&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BQOB3YF%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRQX2inX319G3cBFe%2FtztfPakO6HCf5jm1Ki0R4l3v8gIhAM1JBq8hN%2F05da2J2oBIAWx2%2BHoGrHZmdWbZXk89Ok64Kv8DCCoQABoMNjM3NDIzMTgzODA1IgyLbubIZpKbIzgh17Aq3AOa8t6fkwquPlkYfKWYMG04MzSl730QzTsLyXeOjMo%2F3fXx%2BiZWzWSHhBf2pDfIPahPpKmQM7Wr41iqlX4S4BFnJmfA8X7WIQd%2BRf%2BsNoFjenyi5nTNAMB6NrezHu5Ggax5Fm%2FcUTz6IFIUWAqB2lVYmJLdaUaUz%2BnDe8qNDjShYF%2FsEKaxvUH8w4z9lwXEbOi1%2FAseR%2BQbl7ueTnHn6ED91%2Fwm5M0p6HEfJZ3pwQsjI%2BOa3qABRMwnvf2DZDYuPQGiWDpecb5FEGfighv2sh1Pg9nAt4bQop81%2BWWkgQMZjYXAnlRT0j9OaNXc5tDbsYlbEcjUuYEUSJgOGj4YhLPc%2B1uG4bCr%2B8FRXeEKWupyxh7NRkLeO6ZLmugqHGEmtTHepv4B4va6L6ImlGiYkUemN%2FtqCQqy9d1Omn%2B410rG0Gi24iYlWABmHfCAR8ANVorfA0c9IBsWl%2FtnESelAhye7yzxBucwGC9R8RQtllwjjmgbAct7g%2FmLOSfnokUcB3giGmyC8D4zc7UePiOu3HfmBXx6tWBFyxHP14vTRBZ9AweftLUk7BmssIpXp1hrwWaV3bgJesaZxNIjZMRRrHvRtmfqcgRXIdZLf8I7xAl6qrwpV%2FkDS%2FJ%2Fx7c8mjC1m63ABjqkAZIAUo2%2F5EhhPtztCiA0cFEf2FSFoTAqwg21odE5kc0ahq%2BIgz1cvd1xxUzpu3ZQ%2BLpq6%2FoIakItqRCFf1RPNa%2FmIHIRr2X6AJzgEo8cmEZfY941bnh68TDTNPeabUi9ZR0YIy42Gi21WMVm81mtcfmWu32EKKyARRfc2JCb8YM%2FzmF%2B2wFDfj89QGIdQei%2FklIAtDQSbr8vsYDqkECHC7lnz0XM&X-Amz-Signature=984b34a66b52513915bc340dcc4617459b7b974a8989e3c7f4215160506b7c10&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BQOB3YF%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRQX2inX319G3cBFe%2FtztfPakO6HCf5jm1Ki0R4l3v8gIhAM1JBq8hN%2F05da2J2oBIAWx2%2BHoGrHZmdWbZXk89Ok64Kv8DCCoQABoMNjM3NDIzMTgzODA1IgyLbubIZpKbIzgh17Aq3AOa8t6fkwquPlkYfKWYMG04MzSl730QzTsLyXeOjMo%2F3fXx%2BiZWzWSHhBf2pDfIPahPpKmQM7Wr41iqlX4S4BFnJmfA8X7WIQd%2BRf%2BsNoFjenyi5nTNAMB6NrezHu5Ggax5Fm%2FcUTz6IFIUWAqB2lVYmJLdaUaUz%2BnDe8qNDjShYF%2FsEKaxvUH8w4z9lwXEbOi1%2FAseR%2BQbl7ueTnHn6ED91%2Fwm5M0p6HEfJZ3pwQsjI%2BOa3qABRMwnvf2DZDYuPQGiWDpecb5FEGfighv2sh1Pg9nAt4bQop81%2BWWkgQMZjYXAnlRT0j9OaNXc5tDbsYlbEcjUuYEUSJgOGj4YhLPc%2B1uG4bCr%2B8FRXeEKWupyxh7NRkLeO6ZLmugqHGEmtTHepv4B4va6L6ImlGiYkUemN%2FtqCQqy9d1Omn%2B410rG0Gi24iYlWABmHfCAR8ANVorfA0c9IBsWl%2FtnESelAhye7yzxBucwGC9R8RQtllwjjmgbAct7g%2FmLOSfnokUcB3giGmyC8D4zc7UePiOu3HfmBXx6tWBFyxHP14vTRBZ9AweftLUk7BmssIpXp1hrwWaV3bgJesaZxNIjZMRRrHvRtmfqcgRXIdZLf8I7xAl6qrwpV%2FkDS%2FJ%2Fx7c8mjC1m63ABjqkAZIAUo2%2F5EhhPtztCiA0cFEf2FSFoTAqwg21odE5kc0ahq%2BIgz1cvd1xxUzpu3ZQ%2BLpq6%2FoIakItqRCFf1RPNa%2FmIHIRr2X6AJzgEo8cmEZfY941bnh68TDTNPeabUi9ZR0YIy42Gi21WMVm81mtcfmWu32EKKyARRfc2JCb8YM%2FzmF%2B2wFDfj89QGIdQei%2FklIAtDQSbr8vsYDqkECHC7lnz0XM&X-Amz-Signature=c1a214c8c4dad8d7268f57559bfe8810dac8670ef6908a03c1e2f939471b6c22&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BQOB3YF%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRQX2inX319G3cBFe%2FtztfPakO6HCf5jm1Ki0R4l3v8gIhAM1JBq8hN%2F05da2J2oBIAWx2%2BHoGrHZmdWbZXk89Ok64Kv8DCCoQABoMNjM3NDIzMTgzODA1IgyLbubIZpKbIzgh17Aq3AOa8t6fkwquPlkYfKWYMG04MzSl730QzTsLyXeOjMo%2F3fXx%2BiZWzWSHhBf2pDfIPahPpKmQM7Wr41iqlX4S4BFnJmfA8X7WIQd%2BRf%2BsNoFjenyi5nTNAMB6NrezHu5Ggax5Fm%2FcUTz6IFIUWAqB2lVYmJLdaUaUz%2BnDe8qNDjShYF%2FsEKaxvUH8w4z9lwXEbOi1%2FAseR%2BQbl7ueTnHn6ED91%2Fwm5M0p6HEfJZ3pwQsjI%2BOa3qABRMwnvf2DZDYuPQGiWDpecb5FEGfighv2sh1Pg9nAt4bQop81%2BWWkgQMZjYXAnlRT0j9OaNXc5tDbsYlbEcjUuYEUSJgOGj4YhLPc%2B1uG4bCr%2B8FRXeEKWupyxh7NRkLeO6ZLmugqHGEmtTHepv4B4va6L6ImlGiYkUemN%2FtqCQqy9d1Omn%2B410rG0Gi24iYlWABmHfCAR8ANVorfA0c9IBsWl%2FtnESelAhye7yzxBucwGC9R8RQtllwjjmgbAct7g%2FmLOSfnokUcB3giGmyC8D4zc7UePiOu3HfmBXx6tWBFyxHP14vTRBZ9AweftLUk7BmssIpXp1hrwWaV3bgJesaZxNIjZMRRrHvRtmfqcgRXIdZLf8I7xAl6qrwpV%2FkDS%2FJ%2Fx7c8mjC1m63ABjqkAZIAUo2%2F5EhhPtztCiA0cFEf2FSFoTAqwg21odE5kc0ahq%2BIgz1cvd1xxUzpu3ZQ%2BLpq6%2FoIakItqRCFf1RPNa%2FmIHIRr2X6AJzgEo8cmEZfY941bnh68TDTNPeabUi9ZR0YIy42Gi21WMVm81mtcfmWu32EKKyARRfc2JCb8YM%2FzmF%2B2wFDfj89QGIdQei%2FklIAtDQSbr8vsYDqkECHC7lnz0XM&X-Amz-Signature=6af469ec65b225543bfc008e1080337dbe18f732f7af0e8e58adba670026caee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BQOB3YF%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRQX2inX319G3cBFe%2FtztfPakO6HCf5jm1Ki0R4l3v8gIhAM1JBq8hN%2F05da2J2oBIAWx2%2BHoGrHZmdWbZXk89Ok64Kv8DCCoQABoMNjM3NDIzMTgzODA1IgyLbubIZpKbIzgh17Aq3AOa8t6fkwquPlkYfKWYMG04MzSl730QzTsLyXeOjMo%2F3fXx%2BiZWzWSHhBf2pDfIPahPpKmQM7Wr41iqlX4S4BFnJmfA8X7WIQd%2BRf%2BsNoFjenyi5nTNAMB6NrezHu5Ggax5Fm%2FcUTz6IFIUWAqB2lVYmJLdaUaUz%2BnDe8qNDjShYF%2FsEKaxvUH8w4z9lwXEbOi1%2FAseR%2BQbl7ueTnHn6ED91%2Fwm5M0p6HEfJZ3pwQsjI%2BOa3qABRMwnvf2DZDYuPQGiWDpecb5FEGfighv2sh1Pg9nAt4bQop81%2BWWkgQMZjYXAnlRT0j9OaNXc5tDbsYlbEcjUuYEUSJgOGj4YhLPc%2B1uG4bCr%2B8FRXeEKWupyxh7NRkLeO6ZLmugqHGEmtTHepv4B4va6L6ImlGiYkUemN%2FtqCQqy9d1Omn%2B410rG0Gi24iYlWABmHfCAR8ANVorfA0c9IBsWl%2FtnESelAhye7yzxBucwGC9R8RQtllwjjmgbAct7g%2FmLOSfnokUcB3giGmyC8D4zc7UePiOu3HfmBXx6tWBFyxHP14vTRBZ9AweftLUk7BmssIpXp1hrwWaV3bgJesaZxNIjZMRRrHvRtmfqcgRXIdZLf8I7xAl6qrwpV%2FkDS%2FJ%2Fx7c8mjC1m63ABjqkAZIAUo2%2F5EhhPtztCiA0cFEf2FSFoTAqwg21odE5kc0ahq%2BIgz1cvd1xxUzpu3ZQ%2BLpq6%2FoIakItqRCFf1RPNa%2FmIHIRr2X6AJzgEo8cmEZfY941bnh68TDTNPeabUi9ZR0YIy42Gi21WMVm81mtcfmWu32EKKyARRfc2JCb8YM%2FzmF%2B2wFDfj89QGIdQei%2FklIAtDQSbr8vsYDqkECHC7lnz0XM&X-Amz-Signature=463e4a6af20e9ba61c9b7360bb88c196e1cd5f6eb6f483b8d6a909e4d3aa4f23&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BQOB3YF%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRQX2inX319G3cBFe%2FtztfPakO6HCf5jm1Ki0R4l3v8gIhAM1JBq8hN%2F05da2J2oBIAWx2%2BHoGrHZmdWbZXk89Ok64Kv8DCCoQABoMNjM3NDIzMTgzODA1IgyLbubIZpKbIzgh17Aq3AOa8t6fkwquPlkYfKWYMG04MzSl730QzTsLyXeOjMo%2F3fXx%2BiZWzWSHhBf2pDfIPahPpKmQM7Wr41iqlX4S4BFnJmfA8X7WIQd%2BRf%2BsNoFjenyi5nTNAMB6NrezHu5Ggax5Fm%2FcUTz6IFIUWAqB2lVYmJLdaUaUz%2BnDe8qNDjShYF%2FsEKaxvUH8w4z9lwXEbOi1%2FAseR%2BQbl7ueTnHn6ED91%2Fwm5M0p6HEfJZ3pwQsjI%2BOa3qABRMwnvf2DZDYuPQGiWDpecb5FEGfighv2sh1Pg9nAt4bQop81%2BWWkgQMZjYXAnlRT0j9OaNXc5tDbsYlbEcjUuYEUSJgOGj4YhLPc%2B1uG4bCr%2B8FRXeEKWupyxh7NRkLeO6ZLmugqHGEmtTHepv4B4va6L6ImlGiYkUemN%2FtqCQqy9d1Omn%2B410rG0Gi24iYlWABmHfCAR8ANVorfA0c9IBsWl%2FtnESelAhye7yzxBucwGC9R8RQtllwjjmgbAct7g%2FmLOSfnokUcB3giGmyC8D4zc7UePiOu3HfmBXx6tWBFyxHP14vTRBZ9AweftLUk7BmssIpXp1hrwWaV3bgJesaZxNIjZMRRrHvRtmfqcgRXIdZLf8I7xAl6qrwpV%2FkDS%2FJ%2Fx7c8mjC1m63ABjqkAZIAUo2%2F5EhhPtztCiA0cFEf2FSFoTAqwg21odE5kc0ahq%2BIgz1cvd1xxUzpu3ZQ%2BLpq6%2FoIakItqRCFf1RPNa%2FmIHIRr2X6AJzgEo8cmEZfY941bnh68TDTNPeabUi9ZR0YIy42Gi21WMVm81mtcfmWu32EKKyARRfc2JCb8YM%2FzmF%2B2wFDfj89QGIdQei%2FklIAtDQSbr8vsYDqkECHC7lnz0XM&X-Amz-Signature=6f370bdb35af04a46bf073b16db825994d8dc6b3b48fce9745bd8a61315ece7c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BQOB3YF%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRQX2inX319G3cBFe%2FtztfPakO6HCf5jm1Ki0R4l3v8gIhAM1JBq8hN%2F05da2J2oBIAWx2%2BHoGrHZmdWbZXk89Ok64Kv8DCCoQABoMNjM3NDIzMTgzODA1IgyLbubIZpKbIzgh17Aq3AOa8t6fkwquPlkYfKWYMG04MzSl730QzTsLyXeOjMo%2F3fXx%2BiZWzWSHhBf2pDfIPahPpKmQM7Wr41iqlX4S4BFnJmfA8X7WIQd%2BRf%2BsNoFjenyi5nTNAMB6NrezHu5Ggax5Fm%2FcUTz6IFIUWAqB2lVYmJLdaUaUz%2BnDe8qNDjShYF%2FsEKaxvUH8w4z9lwXEbOi1%2FAseR%2BQbl7ueTnHn6ED91%2Fwm5M0p6HEfJZ3pwQsjI%2BOa3qABRMwnvf2DZDYuPQGiWDpecb5FEGfighv2sh1Pg9nAt4bQop81%2BWWkgQMZjYXAnlRT0j9OaNXc5tDbsYlbEcjUuYEUSJgOGj4YhLPc%2B1uG4bCr%2B8FRXeEKWupyxh7NRkLeO6ZLmugqHGEmtTHepv4B4va6L6ImlGiYkUemN%2FtqCQqy9d1Omn%2B410rG0Gi24iYlWABmHfCAR8ANVorfA0c9IBsWl%2FtnESelAhye7yzxBucwGC9R8RQtllwjjmgbAct7g%2FmLOSfnokUcB3giGmyC8D4zc7UePiOu3HfmBXx6tWBFyxHP14vTRBZ9AweftLUk7BmssIpXp1hrwWaV3bgJesaZxNIjZMRRrHvRtmfqcgRXIdZLf8I7xAl6qrwpV%2FkDS%2FJ%2Fx7c8mjC1m63ABjqkAZIAUo2%2F5EhhPtztCiA0cFEf2FSFoTAqwg21odE5kc0ahq%2BIgz1cvd1xxUzpu3ZQ%2BLpq6%2FoIakItqRCFf1RPNa%2FmIHIRr2X6AJzgEo8cmEZfY941bnh68TDTNPeabUi9ZR0YIy42Gi21WMVm81mtcfmWu32EKKyARRfc2JCb8YM%2FzmF%2B2wFDfj89QGIdQei%2FklIAtDQSbr8vsYDqkECHC7lnz0XM&X-Amz-Signature=fdf6220d450a79c05c10a55135c828e850f8d9e6b067f9c20f3aac25fc0b5fbc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BQOB3YF%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRQX2inX319G3cBFe%2FtztfPakO6HCf5jm1Ki0R4l3v8gIhAM1JBq8hN%2F05da2J2oBIAWx2%2BHoGrHZmdWbZXk89Ok64Kv8DCCoQABoMNjM3NDIzMTgzODA1IgyLbubIZpKbIzgh17Aq3AOa8t6fkwquPlkYfKWYMG04MzSl730QzTsLyXeOjMo%2F3fXx%2BiZWzWSHhBf2pDfIPahPpKmQM7Wr41iqlX4S4BFnJmfA8X7WIQd%2BRf%2BsNoFjenyi5nTNAMB6NrezHu5Ggax5Fm%2FcUTz6IFIUWAqB2lVYmJLdaUaUz%2BnDe8qNDjShYF%2FsEKaxvUH8w4z9lwXEbOi1%2FAseR%2BQbl7ueTnHn6ED91%2Fwm5M0p6HEfJZ3pwQsjI%2BOa3qABRMwnvf2DZDYuPQGiWDpecb5FEGfighv2sh1Pg9nAt4bQop81%2BWWkgQMZjYXAnlRT0j9OaNXc5tDbsYlbEcjUuYEUSJgOGj4YhLPc%2B1uG4bCr%2B8FRXeEKWupyxh7NRkLeO6ZLmugqHGEmtTHepv4B4va6L6ImlGiYkUemN%2FtqCQqy9d1Omn%2B410rG0Gi24iYlWABmHfCAR8ANVorfA0c9IBsWl%2FtnESelAhye7yzxBucwGC9R8RQtllwjjmgbAct7g%2FmLOSfnokUcB3giGmyC8D4zc7UePiOu3HfmBXx6tWBFyxHP14vTRBZ9AweftLUk7BmssIpXp1hrwWaV3bgJesaZxNIjZMRRrHvRtmfqcgRXIdZLf8I7xAl6qrwpV%2FkDS%2FJ%2Fx7c8mjC1m63ABjqkAZIAUo2%2F5EhhPtztCiA0cFEf2FSFoTAqwg21odE5kc0ahq%2BIgz1cvd1xxUzpu3ZQ%2BLpq6%2FoIakItqRCFf1RPNa%2FmIHIRr2X6AJzgEo8cmEZfY941bnh68TDTNPeabUi9ZR0YIy42Gi21WMVm81mtcfmWu32EKKyARRfc2JCb8YM%2FzmF%2B2wFDfj89QGIdQei%2FklIAtDQSbr8vsYDqkECHC7lnz0XM&X-Amz-Signature=15818141228d854111b79e69725ab8d8def73c02b5973af6e1ce8ab6e98033c0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
