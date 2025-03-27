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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SJ5PMVG%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMZptVeuvJjBRVrZLuiHNE7Px24YnOrQUTSN7XYuJ%2BzAIhAKLEaLL6x2ij3Dchafqvxs9LYoIRHvrJTtZCwLQA6J76Kv8DCEcQABoMNjM3NDIzMTgzODA1Igy3SVQUauTlZYV2Mjkq3AMDXfA%2B5pmhN0QQmjua%2FArkWgpLOF6yLIEubDl%2BnPLaEsZs7OWIf%2F%2FTD6uEkz2X2PlHG5Y4azwKh38hmGYLcnLL8kf1MhbQGSX51S7Tzu5SUFjI6ZOIddsOtEkpUgp9nbjb4TMieUOg%2FclhEyRHXDsj2SHGJmrhNWl6GlKuB7ELveTUQXDoycmJCcmrhvywA2mvQr7RZax4iZSlpxCplkkbvJDT%2FJ1OuBTMNDm38Eq3mdglkpfGPDO5NYa58QUZhV9bebghvKaQQLBAJ5bd%2B9s%2F0ZnryueYYqArSwrEZwjQUH%2BnVLZNcAPSSnr7DmXxKUafgN7HB1p4RgXNc77UTa7%2FpNrKE9akOY4cSf1N9BSwP1nuqqY6KqF2ykHmLT2%2BYKGkI%2BRIGIqeH0nXuXqAtti9JCrozv3dWnd1vYZJTMiWiwuXFImPUuHLDYucRrJKbPsUgD6tZzAWJd%2FlkDvDy%2BqWe7T0TjIjHsd2VHXeRCi5DNt0miTBmAIqOVamYQEVvzc2h%2BwdDHNT19jzKQ1VQbCp8t9m6opqcgrmCmsuITW8%2FiyS5qNUclXZX%2BE41ZFcBKuPD1wksHjA8msnCEQqi8ILefB%2FtJVeKopc9ULOWDpZpAu2hsPOdd5s%2Fihn4TDwsJW%2FBjqkARYpeQj8OM%2BOFpoJxRkE%2BZoDX1mKr2WOmttTE04ZdiNRKUenZzZvUkNeb22ty1D6IUb0GtNWgnsn6iAgyKTn9X4MDKzPpL0B5E40ee6%2FRK9Dd1dcfxWhIsleqk%2B5CuC%2FILOFv45ApVHm2sD36nRC463MrGOSvg%2BO%2Bn847Oe0TcpPs4xJuDjmwD6vmMhdbendxzXeLhZ098pnAz2E%2BI6Wnwvcu%2BsP&X-Amz-Signature=69cf50a4cc2499a9202eebbcf8cc94afd22ae7be5fe15dd1b635b6d4d8f859d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SJ5PMVG%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMZptVeuvJjBRVrZLuiHNE7Px24YnOrQUTSN7XYuJ%2BzAIhAKLEaLL6x2ij3Dchafqvxs9LYoIRHvrJTtZCwLQA6J76Kv8DCEcQABoMNjM3NDIzMTgzODA1Igy3SVQUauTlZYV2Mjkq3AMDXfA%2B5pmhN0QQmjua%2FArkWgpLOF6yLIEubDl%2BnPLaEsZs7OWIf%2F%2FTD6uEkz2X2PlHG5Y4azwKh38hmGYLcnLL8kf1MhbQGSX51S7Tzu5SUFjI6ZOIddsOtEkpUgp9nbjb4TMieUOg%2FclhEyRHXDsj2SHGJmrhNWl6GlKuB7ELveTUQXDoycmJCcmrhvywA2mvQr7RZax4iZSlpxCplkkbvJDT%2FJ1OuBTMNDm38Eq3mdglkpfGPDO5NYa58QUZhV9bebghvKaQQLBAJ5bd%2B9s%2F0ZnryueYYqArSwrEZwjQUH%2BnVLZNcAPSSnr7DmXxKUafgN7HB1p4RgXNc77UTa7%2FpNrKE9akOY4cSf1N9BSwP1nuqqY6KqF2ykHmLT2%2BYKGkI%2BRIGIqeH0nXuXqAtti9JCrozv3dWnd1vYZJTMiWiwuXFImPUuHLDYucRrJKbPsUgD6tZzAWJd%2FlkDvDy%2BqWe7T0TjIjHsd2VHXeRCi5DNt0miTBmAIqOVamYQEVvzc2h%2BwdDHNT19jzKQ1VQbCp8t9m6opqcgrmCmsuITW8%2FiyS5qNUclXZX%2BE41ZFcBKuPD1wksHjA8msnCEQqi8ILefB%2FtJVeKopc9ULOWDpZpAu2hsPOdd5s%2Fihn4TDwsJW%2FBjqkARYpeQj8OM%2BOFpoJxRkE%2BZoDX1mKr2WOmttTE04ZdiNRKUenZzZvUkNeb22ty1D6IUb0GtNWgnsn6iAgyKTn9X4MDKzPpL0B5E40ee6%2FRK9Dd1dcfxWhIsleqk%2B5CuC%2FILOFv45ApVHm2sD36nRC463MrGOSvg%2BO%2Bn847Oe0TcpPs4xJuDjmwD6vmMhdbendxzXeLhZ098pnAz2E%2BI6Wnwvcu%2BsP&X-Amz-Signature=65bf6675a4cd5bf7775090607e2af870a2a8bc422480689d7ed3df890919c901&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SJ5PMVG%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMZptVeuvJjBRVrZLuiHNE7Px24YnOrQUTSN7XYuJ%2BzAIhAKLEaLL6x2ij3Dchafqvxs9LYoIRHvrJTtZCwLQA6J76Kv8DCEcQABoMNjM3NDIzMTgzODA1Igy3SVQUauTlZYV2Mjkq3AMDXfA%2B5pmhN0QQmjua%2FArkWgpLOF6yLIEubDl%2BnPLaEsZs7OWIf%2F%2FTD6uEkz2X2PlHG5Y4azwKh38hmGYLcnLL8kf1MhbQGSX51S7Tzu5SUFjI6ZOIddsOtEkpUgp9nbjb4TMieUOg%2FclhEyRHXDsj2SHGJmrhNWl6GlKuB7ELveTUQXDoycmJCcmrhvywA2mvQr7RZax4iZSlpxCplkkbvJDT%2FJ1OuBTMNDm38Eq3mdglkpfGPDO5NYa58QUZhV9bebghvKaQQLBAJ5bd%2B9s%2F0ZnryueYYqArSwrEZwjQUH%2BnVLZNcAPSSnr7DmXxKUafgN7HB1p4RgXNc77UTa7%2FpNrKE9akOY4cSf1N9BSwP1nuqqY6KqF2ykHmLT2%2BYKGkI%2BRIGIqeH0nXuXqAtti9JCrozv3dWnd1vYZJTMiWiwuXFImPUuHLDYucRrJKbPsUgD6tZzAWJd%2FlkDvDy%2BqWe7T0TjIjHsd2VHXeRCi5DNt0miTBmAIqOVamYQEVvzc2h%2BwdDHNT19jzKQ1VQbCp8t9m6opqcgrmCmsuITW8%2FiyS5qNUclXZX%2BE41ZFcBKuPD1wksHjA8msnCEQqi8ILefB%2FtJVeKopc9ULOWDpZpAu2hsPOdd5s%2Fihn4TDwsJW%2FBjqkARYpeQj8OM%2BOFpoJxRkE%2BZoDX1mKr2WOmttTE04ZdiNRKUenZzZvUkNeb22ty1D6IUb0GtNWgnsn6iAgyKTn9X4MDKzPpL0B5E40ee6%2FRK9Dd1dcfxWhIsleqk%2B5CuC%2FILOFv45ApVHm2sD36nRC463MrGOSvg%2BO%2Bn847Oe0TcpPs4xJuDjmwD6vmMhdbendxzXeLhZ098pnAz2E%2BI6Wnwvcu%2BsP&X-Amz-Signature=2b933fd8313ac51afe171b7938bdf2af35f70951c332512904c8e63d42f2c41f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SJ5PMVG%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMZptVeuvJjBRVrZLuiHNE7Px24YnOrQUTSN7XYuJ%2BzAIhAKLEaLL6x2ij3Dchafqvxs9LYoIRHvrJTtZCwLQA6J76Kv8DCEcQABoMNjM3NDIzMTgzODA1Igy3SVQUauTlZYV2Mjkq3AMDXfA%2B5pmhN0QQmjua%2FArkWgpLOF6yLIEubDl%2BnPLaEsZs7OWIf%2F%2FTD6uEkz2X2PlHG5Y4azwKh38hmGYLcnLL8kf1MhbQGSX51S7Tzu5SUFjI6ZOIddsOtEkpUgp9nbjb4TMieUOg%2FclhEyRHXDsj2SHGJmrhNWl6GlKuB7ELveTUQXDoycmJCcmrhvywA2mvQr7RZax4iZSlpxCplkkbvJDT%2FJ1OuBTMNDm38Eq3mdglkpfGPDO5NYa58QUZhV9bebghvKaQQLBAJ5bd%2B9s%2F0ZnryueYYqArSwrEZwjQUH%2BnVLZNcAPSSnr7DmXxKUafgN7HB1p4RgXNc77UTa7%2FpNrKE9akOY4cSf1N9BSwP1nuqqY6KqF2ykHmLT2%2BYKGkI%2BRIGIqeH0nXuXqAtti9JCrozv3dWnd1vYZJTMiWiwuXFImPUuHLDYucRrJKbPsUgD6tZzAWJd%2FlkDvDy%2BqWe7T0TjIjHsd2VHXeRCi5DNt0miTBmAIqOVamYQEVvzc2h%2BwdDHNT19jzKQ1VQbCp8t9m6opqcgrmCmsuITW8%2FiyS5qNUclXZX%2BE41ZFcBKuPD1wksHjA8msnCEQqi8ILefB%2FtJVeKopc9ULOWDpZpAu2hsPOdd5s%2Fihn4TDwsJW%2FBjqkARYpeQj8OM%2BOFpoJxRkE%2BZoDX1mKr2WOmttTE04ZdiNRKUenZzZvUkNeb22ty1D6IUb0GtNWgnsn6iAgyKTn9X4MDKzPpL0B5E40ee6%2FRK9Dd1dcfxWhIsleqk%2B5CuC%2FILOFv45ApVHm2sD36nRC463MrGOSvg%2BO%2Bn847Oe0TcpPs4xJuDjmwD6vmMhdbendxzXeLhZ098pnAz2E%2BI6Wnwvcu%2BsP&X-Amz-Signature=1c3a777f79a2c253923e5e3231295b217ba6fcf4db307c8c1aa50f07f3f28fa9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SJ5PMVG%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMZptVeuvJjBRVrZLuiHNE7Px24YnOrQUTSN7XYuJ%2BzAIhAKLEaLL6x2ij3Dchafqvxs9LYoIRHvrJTtZCwLQA6J76Kv8DCEcQABoMNjM3NDIzMTgzODA1Igy3SVQUauTlZYV2Mjkq3AMDXfA%2B5pmhN0QQmjua%2FArkWgpLOF6yLIEubDl%2BnPLaEsZs7OWIf%2F%2FTD6uEkz2X2PlHG5Y4azwKh38hmGYLcnLL8kf1MhbQGSX51S7Tzu5SUFjI6ZOIddsOtEkpUgp9nbjb4TMieUOg%2FclhEyRHXDsj2SHGJmrhNWl6GlKuB7ELveTUQXDoycmJCcmrhvywA2mvQr7RZax4iZSlpxCplkkbvJDT%2FJ1OuBTMNDm38Eq3mdglkpfGPDO5NYa58QUZhV9bebghvKaQQLBAJ5bd%2B9s%2F0ZnryueYYqArSwrEZwjQUH%2BnVLZNcAPSSnr7DmXxKUafgN7HB1p4RgXNc77UTa7%2FpNrKE9akOY4cSf1N9BSwP1nuqqY6KqF2ykHmLT2%2BYKGkI%2BRIGIqeH0nXuXqAtti9JCrozv3dWnd1vYZJTMiWiwuXFImPUuHLDYucRrJKbPsUgD6tZzAWJd%2FlkDvDy%2BqWe7T0TjIjHsd2VHXeRCi5DNt0miTBmAIqOVamYQEVvzc2h%2BwdDHNT19jzKQ1VQbCp8t9m6opqcgrmCmsuITW8%2FiyS5qNUclXZX%2BE41ZFcBKuPD1wksHjA8msnCEQqi8ILefB%2FtJVeKopc9ULOWDpZpAu2hsPOdd5s%2Fihn4TDwsJW%2FBjqkARYpeQj8OM%2BOFpoJxRkE%2BZoDX1mKr2WOmttTE04ZdiNRKUenZzZvUkNeb22ty1D6IUb0GtNWgnsn6iAgyKTn9X4MDKzPpL0B5E40ee6%2FRK9Dd1dcfxWhIsleqk%2B5CuC%2FILOFv45ApVHm2sD36nRC463MrGOSvg%2BO%2Bn847Oe0TcpPs4xJuDjmwD6vmMhdbendxzXeLhZ098pnAz2E%2BI6Wnwvcu%2BsP&X-Amz-Signature=9d878f5d4db23224e2f80f39cec6b00456605d914516a919b7bdf2f97d62772b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SJ5PMVG%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMZptVeuvJjBRVrZLuiHNE7Px24YnOrQUTSN7XYuJ%2BzAIhAKLEaLL6x2ij3Dchafqvxs9LYoIRHvrJTtZCwLQA6J76Kv8DCEcQABoMNjM3NDIzMTgzODA1Igy3SVQUauTlZYV2Mjkq3AMDXfA%2B5pmhN0QQmjua%2FArkWgpLOF6yLIEubDl%2BnPLaEsZs7OWIf%2F%2FTD6uEkz2X2PlHG5Y4azwKh38hmGYLcnLL8kf1MhbQGSX51S7Tzu5SUFjI6ZOIddsOtEkpUgp9nbjb4TMieUOg%2FclhEyRHXDsj2SHGJmrhNWl6GlKuB7ELveTUQXDoycmJCcmrhvywA2mvQr7RZax4iZSlpxCplkkbvJDT%2FJ1OuBTMNDm38Eq3mdglkpfGPDO5NYa58QUZhV9bebghvKaQQLBAJ5bd%2B9s%2F0ZnryueYYqArSwrEZwjQUH%2BnVLZNcAPSSnr7DmXxKUafgN7HB1p4RgXNc77UTa7%2FpNrKE9akOY4cSf1N9BSwP1nuqqY6KqF2ykHmLT2%2BYKGkI%2BRIGIqeH0nXuXqAtti9JCrozv3dWnd1vYZJTMiWiwuXFImPUuHLDYucRrJKbPsUgD6tZzAWJd%2FlkDvDy%2BqWe7T0TjIjHsd2VHXeRCi5DNt0miTBmAIqOVamYQEVvzc2h%2BwdDHNT19jzKQ1VQbCp8t9m6opqcgrmCmsuITW8%2FiyS5qNUclXZX%2BE41ZFcBKuPD1wksHjA8msnCEQqi8ILefB%2FtJVeKopc9ULOWDpZpAu2hsPOdd5s%2Fihn4TDwsJW%2FBjqkARYpeQj8OM%2BOFpoJxRkE%2BZoDX1mKr2WOmttTE04ZdiNRKUenZzZvUkNeb22ty1D6IUb0GtNWgnsn6iAgyKTn9X4MDKzPpL0B5E40ee6%2FRK9Dd1dcfxWhIsleqk%2B5CuC%2FILOFv45ApVHm2sD36nRC463MrGOSvg%2BO%2Bn847Oe0TcpPs4xJuDjmwD6vmMhdbendxzXeLhZ098pnAz2E%2BI6Wnwvcu%2BsP&X-Amz-Signature=e5551b671ba4cca33246ac7ef065b1175fcb365cb6683e52f11d6b8fcb89866c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SJ5PMVG%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMZptVeuvJjBRVrZLuiHNE7Px24YnOrQUTSN7XYuJ%2BzAIhAKLEaLL6x2ij3Dchafqvxs9LYoIRHvrJTtZCwLQA6J76Kv8DCEcQABoMNjM3NDIzMTgzODA1Igy3SVQUauTlZYV2Mjkq3AMDXfA%2B5pmhN0QQmjua%2FArkWgpLOF6yLIEubDl%2BnPLaEsZs7OWIf%2F%2FTD6uEkz2X2PlHG5Y4azwKh38hmGYLcnLL8kf1MhbQGSX51S7Tzu5SUFjI6ZOIddsOtEkpUgp9nbjb4TMieUOg%2FclhEyRHXDsj2SHGJmrhNWl6GlKuB7ELveTUQXDoycmJCcmrhvywA2mvQr7RZax4iZSlpxCplkkbvJDT%2FJ1OuBTMNDm38Eq3mdglkpfGPDO5NYa58QUZhV9bebghvKaQQLBAJ5bd%2B9s%2F0ZnryueYYqArSwrEZwjQUH%2BnVLZNcAPSSnr7DmXxKUafgN7HB1p4RgXNc77UTa7%2FpNrKE9akOY4cSf1N9BSwP1nuqqY6KqF2ykHmLT2%2BYKGkI%2BRIGIqeH0nXuXqAtti9JCrozv3dWnd1vYZJTMiWiwuXFImPUuHLDYucRrJKbPsUgD6tZzAWJd%2FlkDvDy%2BqWe7T0TjIjHsd2VHXeRCi5DNt0miTBmAIqOVamYQEVvzc2h%2BwdDHNT19jzKQ1VQbCp8t9m6opqcgrmCmsuITW8%2FiyS5qNUclXZX%2BE41ZFcBKuPD1wksHjA8msnCEQqi8ILefB%2FtJVeKopc9ULOWDpZpAu2hsPOdd5s%2Fihn4TDwsJW%2FBjqkARYpeQj8OM%2BOFpoJxRkE%2BZoDX1mKr2WOmttTE04ZdiNRKUenZzZvUkNeb22ty1D6IUb0GtNWgnsn6iAgyKTn9X4MDKzPpL0B5E40ee6%2FRK9Dd1dcfxWhIsleqk%2B5CuC%2FILOFv45ApVHm2sD36nRC463MrGOSvg%2BO%2Bn847Oe0TcpPs4xJuDjmwD6vmMhdbendxzXeLhZ098pnAz2E%2BI6Wnwvcu%2BsP&X-Amz-Signature=03b6c6c2a99b9b334c4d66bae6ccfb93ad243b7b813055b68540bc49bd4a34b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SJ5PMVG%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMZptVeuvJjBRVrZLuiHNE7Px24YnOrQUTSN7XYuJ%2BzAIhAKLEaLL6x2ij3Dchafqvxs9LYoIRHvrJTtZCwLQA6J76Kv8DCEcQABoMNjM3NDIzMTgzODA1Igy3SVQUauTlZYV2Mjkq3AMDXfA%2B5pmhN0QQmjua%2FArkWgpLOF6yLIEubDl%2BnPLaEsZs7OWIf%2F%2FTD6uEkz2X2PlHG5Y4azwKh38hmGYLcnLL8kf1MhbQGSX51S7Tzu5SUFjI6ZOIddsOtEkpUgp9nbjb4TMieUOg%2FclhEyRHXDsj2SHGJmrhNWl6GlKuB7ELveTUQXDoycmJCcmrhvywA2mvQr7RZax4iZSlpxCplkkbvJDT%2FJ1OuBTMNDm38Eq3mdglkpfGPDO5NYa58QUZhV9bebghvKaQQLBAJ5bd%2B9s%2F0ZnryueYYqArSwrEZwjQUH%2BnVLZNcAPSSnr7DmXxKUafgN7HB1p4RgXNc77UTa7%2FpNrKE9akOY4cSf1N9BSwP1nuqqY6KqF2ykHmLT2%2BYKGkI%2BRIGIqeH0nXuXqAtti9JCrozv3dWnd1vYZJTMiWiwuXFImPUuHLDYucRrJKbPsUgD6tZzAWJd%2FlkDvDy%2BqWe7T0TjIjHsd2VHXeRCi5DNt0miTBmAIqOVamYQEVvzc2h%2BwdDHNT19jzKQ1VQbCp8t9m6opqcgrmCmsuITW8%2FiyS5qNUclXZX%2BE41ZFcBKuPD1wksHjA8msnCEQqi8ILefB%2FtJVeKopc9ULOWDpZpAu2hsPOdd5s%2Fihn4TDwsJW%2FBjqkARYpeQj8OM%2BOFpoJxRkE%2BZoDX1mKr2WOmttTE04ZdiNRKUenZzZvUkNeb22ty1D6IUb0GtNWgnsn6iAgyKTn9X4MDKzPpL0B5E40ee6%2FRK9Dd1dcfxWhIsleqk%2B5CuC%2FILOFv45ApVHm2sD36nRC463MrGOSvg%2BO%2Bn847Oe0TcpPs4xJuDjmwD6vmMhdbendxzXeLhZ098pnAz2E%2BI6Wnwvcu%2BsP&X-Amz-Signature=0eed7a0986e4acbb747d93203e36feb23df09e9ee81c878c8a53536a715754f4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
