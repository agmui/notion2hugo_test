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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GO7LFR3%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCqol6QcTmlUqXGQ6RNTVK7nnSP%2FPfmyaRU%2BtCLx%2Fk8VgIhAJhyX%2F1fnU9MBBKBeZV7Nu0%2Fw2ALOUqMIArmpw0o9PpRKv8DCGEQABoMNjM3NDIzMTgzODA1IgyZwqnmw8rZVR1aoEUq3ANQB8MOnLfTDo21EbvsekJs57p3EuXAOIcoGGJlWbGuKu1%2FeRx34LiMYiGtVDF2%2BLhUApvcevelXVRhxxXnw%2F2Mc7whn793%2BMgCTYL9XgAoLsvCK7TQKYo8PZueaB1nTsneitrgvB5fxwWLWEAnuL5a7ZUDxooY58x490KB64%2Bj4RnAS57smATabUN6Xr%2FLfOUiF2BQHJ%2FGsshY7SFM71isyqSdOeQv9C6P0MRNhXrIfp5efmaEzJirU%2BZDh0vEfeIBZJ5c4XYCIDCEL3wYHUFIJl8o7GDva0c12cX%2BnsmDWTY8kZgL388hjGmo5rhPRIr12em7pqKg%2FfyLgsMoReocZYQ3r8G9R0j%2FEg9FkZ36dhjna9Ct1APm4nA2hmGbG3wsPRuSuM378EDTC0drvrYHG%2BqMwItkyfPvnZdQyTOnYkXF451TbABzvjY5Y46yhHmmmJNa6iVy2%2BJfEV8ygZkn2%2BlE4LEjcIGQn7YvniE4O%2FWbk%2FWDA8%2FHbcie0tDfT4FFbIC1RRwRYXYN6kNWGqoCd02jQiOl0dWrWhtQv8yk%2F9YgCTlEkqgDnijHhCKY0CnBUhuBpBTNsNbsx26GSRzXap6l5kHeUGNAsjtq1crB6zcotRCXiju6%2BbX15jD907G%2BBjqkAYKgtdgsoE9vwIwnzuqw%2FGI1xr%2BpqJH%2B4SR93cSeIgYUtSZKS7SNYBWcwmDMahFCn1y7TrzF3C90df2BHw9HPjpRmezm6U9OZ0ZQ8zpzRIz1JA6hbnryooovHMkwnp6w8lLPyFUpBzoX790YQHynyB0mFGWDm4yXsVQmbOqkqH%2FwsCQ8uHNTR3hz9rqc1bmtzMHZwLiHEiTlksCsJJa463mpGS4h&X-Amz-Signature=b50b7f3ecdb1195b50daf7e94234a5be7dbdf47471af3125fd58e376c6c61182&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GO7LFR3%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCqol6QcTmlUqXGQ6RNTVK7nnSP%2FPfmyaRU%2BtCLx%2Fk8VgIhAJhyX%2F1fnU9MBBKBeZV7Nu0%2Fw2ALOUqMIArmpw0o9PpRKv8DCGEQABoMNjM3NDIzMTgzODA1IgyZwqnmw8rZVR1aoEUq3ANQB8MOnLfTDo21EbvsekJs57p3EuXAOIcoGGJlWbGuKu1%2FeRx34LiMYiGtVDF2%2BLhUApvcevelXVRhxxXnw%2F2Mc7whn793%2BMgCTYL9XgAoLsvCK7TQKYo8PZueaB1nTsneitrgvB5fxwWLWEAnuL5a7ZUDxooY58x490KB64%2Bj4RnAS57smATabUN6Xr%2FLfOUiF2BQHJ%2FGsshY7SFM71isyqSdOeQv9C6P0MRNhXrIfp5efmaEzJirU%2BZDh0vEfeIBZJ5c4XYCIDCEL3wYHUFIJl8o7GDva0c12cX%2BnsmDWTY8kZgL388hjGmo5rhPRIr12em7pqKg%2FfyLgsMoReocZYQ3r8G9R0j%2FEg9FkZ36dhjna9Ct1APm4nA2hmGbG3wsPRuSuM378EDTC0drvrYHG%2BqMwItkyfPvnZdQyTOnYkXF451TbABzvjY5Y46yhHmmmJNa6iVy2%2BJfEV8ygZkn2%2BlE4LEjcIGQn7YvniE4O%2FWbk%2FWDA8%2FHbcie0tDfT4FFbIC1RRwRYXYN6kNWGqoCd02jQiOl0dWrWhtQv8yk%2F9YgCTlEkqgDnijHhCKY0CnBUhuBpBTNsNbsx26GSRzXap6l5kHeUGNAsjtq1crB6zcotRCXiju6%2BbX15jD907G%2BBjqkAYKgtdgsoE9vwIwnzuqw%2FGI1xr%2BpqJH%2B4SR93cSeIgYUtSZKS7SNYBWcwmDMahFCn1y7TrzF3C90df2BHw9HPjpRmezm6U9OZ0ZQ8zpzRIz1JA6hbnryooovHMkwnp6w8lLPyFUpBzoX790YQHynyB0mFGWDm4yXsVQmbOqkqH%2FwsCQ8uHNTR3hz9rqc1bmtzMHZwLiHEiTlksCsJJa463mpGS4h&X-Amz-Signature=1106c5c62e37a6489a42df85f3579541b63df1fd8f210eab7fd6b5127d1ba35c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GO7LFR3%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCqol6QcTmlUqXGQ6RNTVK7nnSP%2FPfmyaRU%2BtCLx%2Fk8VgIhAJhyX%2F1fnU9MBBKBeZV7Nu0%2Fw2ALOUqMIArmpw0o9PpRKv8DCGEQABoMNjM3NDIzMTgzODA1IgyZwqnmw8rZVR1aoEUq3ANQB8MOnLfTDo21EbvsekJs57p3EuXAOIcoGGJlWbGuKu1%2FeRx34LiMYiGtVDF2%2BLhUApvcevelXVRhxxXnw%2F2Mc7whn793%2BMgCTYL9XgAoLsvCK7TQKYo8PZueaB1nTsneitrgvB5fxwWLWEAnuL5a7ZUDxooY58x490KB64%2Bj4RnAS57smATabUN6Xr%2FLfOUiF2BQHJ%2FGsshY7SFM71isyqSdOeQv9C6P0MRNhXrIfp5efmaEzJirU%2BZDh0vEfeIBZJ5c4XYCIDCEL3wYHUFIJl8o7GDva0c12cX%2BnsmDWTY8kZgL388hjGmo5rhPRIr12em7pqKg%2FfyLgsMoReocZYQ3r8G9R0j%2FEg9FkZ36dhjna9Ct1APm4nA2hmGbG3wsPRuSuM378EDTC0drvrYHG%2BqMwItkyfPvnZdQyTOnYkXF451TbABzvjY5Y46yhHmmmJNa6iVy2%2BJfEV8ygZkn2%2BlE4LEjcIGQn7YvniE4O%2FWbk%2FWDA8%2FHbcie0tDfT4FFbIC1RRwRYXYN6kNWGqoCd02jQiOl0dWrWhtQv8yk%2F9YgCTlEkqgDnijHhCKY0CnBUhuBpBTNsNbsx26GSRzXap6l5kHeUGNAsjtq1crB6zcotRCXiju6%2BbX15jD907G%2BBjqkAYKgtdgsoE9vwIwnzuqw%2FGI1xr%2BpqJH%2B4SR93cSeIgYUtSZKS7SNYBWcwmDMahFCn1y7TrzF3C90df2BHw9HPjpRmezm6U9OZ0ZQ8zpzRIz1JA6hbnryooovHMkwnp6w8lLPyFUpBzoX790YQHynyB0mFGWDm4yXsVQmbOqkqH%2FwsCQ8uHNTR3hz9rqc1bmtzMHZwLiHEiTlksCsJJa463mpGS4h&X-Amz-Signature=9239d2c457f18824eec3a7ea5e958f8f8aa0492c16bbbd8973bdcc532df18274&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GO7LFR3%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCqol6QcTmlUqXGQ6RNTVK7nnSP%2FPfmyaRU%2BtCLx%2Fk8VgIhAJhyX%2F1fnU9MBBKBeZV7Nu0%2Fw2ALOUqMIArmpw0o9PpRKv8DCGEQABoMNjM3NDIzMTgzODA1IgyZwqnmw8rZVR1aoEUq3ANQB8MOnLfTDo21EbvsekJs57p3EuXAOIcoGGJlWbGuKu1%2FeRx34LiMYiGtVDF2%2BLhUApvcevelXVRhxxXnw%2F2Mc7whn793%2BMgCTYL9XgAoLsvCK7TQKYo8PZueaB1nTsneitrgvB5fxwWLWEAnuL5a7ZUDxooY58x490KB64%2Bj4RnAS57smATabUN6Xr%2FLfOUiF2BQHJ%2FGsshY7SFM71isyqSdOeQv9C6P0MRNhXrIfp5efmaEzJirU%2BZDh0vEfeIBZJ5c4XYCIDCEL3wYHUFIJl8o7GDva0c12cX%2BnsmDWTY8kZgL388hjGmo5rhPRIr12em7pqKg%2FfyLgsMoReocZYQ3r8G9R0j%2FEg9FkZ36dhjna9Ct1APm4nA2hmGbG3wsPRuSuM378EDTC0drvrYHG%2BqMwItkyfPvnZdQyTOnYkXF451TbABzvjY5Y46yhHmmmJNa6iVy2%2BJfEV8ygZkn2%2BlE4LEjcIGQn7YvniE4O%2FWbk%2FWDA8%2FHbcie0tDfT4FFbIC1RRwRYXYN6kNWGqoCd02jQiOl0dWrWhtQv8yk%2F9YgCTlEkqgDnijHhCKY0CnBUhuBpBTNsNbsx26GSRzXap6l5kHeUGNAsjtq1crB6zcotRCXiju6%2BbX15jD907G%2BBjqkAYKgtdgsoE9vwIwnzuqw%2FGI1xr%2BpqJH%2B4SR93cSeIgYUtSZKS7SNYBWcwmDMahFCn1y7TrzF3C90df2BHw9HPjpRmezm6U9OZ0ZQ8zpzRIz1JA6hbnryooovHMkwnp6w8lLPyFUpBzoX790YQHynyB0mFGWDm4yXsVQmbOqkqH%2FwsCQ8uHNTR3hz9rqc1bmtzMHZwLiHEiTlksCsJJa463mpGS4h&X-Amz-Signature=31441ad6e1eeb9305e9b5cb73ba3271b27af6f3a93b06fafbda9b2e75057c034&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GO7LFR3%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCqol6QcTmlUqXGQ6RNTVK7nnSP%2FPfmyaRU%2BtCLx%2Fk8VgIhAJhyX%2F1fnU9MBBKBeZV7Nu0%2Fw2ALOUqMIArmpw0o9PpRKv8DCGEQABoMNjM3NDIzMTgzODA1IgyZwqnmw8rZVR1aoEUq3ANQB8MOnLfTDo21EbvsekJs57p3EuXAOIcoGGJlWbGuKu1%2FeRx34LiMYiGtVDF2%2BLhUApvcevelXVRhxxXnw%2F2Mc7whn793%2BMgCTYL9XgAoLsvCK7TQKYo8PZueaB1nTsneitrgvB5fxwWLWEAnuL5a7ZUDxooY58x490KB64%2Bj4RnAS57smATabUN6Xr%2FLfOUiF2BQHJ%2FGsshY7SFM71isyqSdOeQv9C6P0MRNhXrIfp5efmaEzJirU%2BZDh0vEfeIBZJ5c4XYCIDCEL3wYHUFIJl8o7GDva0c12cX%2BnsmDWTY8kZgL388hjGmo5rhPRIr12em7pqKg%2FfyLgsMoReocZYQ3r8G9R0j%2FEg9FkZ36dhjna9Ct1APm4nA2hmGbG3wsPRuSuM378EDTC0drvrYHG%2BqMwItkyfPvnZdQyTOnYkXF451TbABzvjY5Y46yhHmmmJNa6iVy2%2BJfEV8ygZkn2%2BlE4LEjcIGQn7YvniE4O%2FWbk%2FWDA8%2FHbcie0tDfT4FFbIC1RRwRYXYN6kNWGqoCd02jQiOl0dWrWhtQv8yk%2F9YgCTlEkqgDnijHhCKY0CnBUhuBpBTNsNbsx26GSRzXap6l5kHeUGNAsjtq1crB6zcotRCXiju6%2BbX15jD907G%2BBjqkAYKgtdgsoE9vwIwnzuqw%2FGI1xr%2BpqJH%2B4SR93cSeIgYUtSZKS7SNYBWcwmDMahFCn1y7TrzF3C90df2BHw9HPjpRmezm6U9OZ0ZQ8zpzRIz1JA6hbnryooovHMkwnp6w8lLPyFUpBzoX790YQHynyB0mFGWDm4yXsVQmbOqkqH%2FwsCQ8uHNTR3hz9rqc1bmtzMHZwLiHEiTlksCsJJa463mpGS4h&X-Amz-Signature=f8d940120ed6442206162cd851ae1f413bfe3e36ceb9c06b85acbc312f96cfd1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GO7LFR3%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCqol6QcTmlUqXGQ6RNTVK7nnSP%2FPfmyaRU%2BtCLx%2Fk8VgIhAJhyX%2F1fnU9MBBKBeZV7Nu0%2Fw2ALOUqMIArmpw0o9PpRKv8DCGEQABoMNjM3NDIzMTgzODA1IgyZwqnmw8rZVR1aoEUq3ANQB8MOnLfTDo21EbvsekJs57p3EuXAOIcoGGJlWbGuKu1%2FeRx34LiMYiGtVDF2%2BLhUApvcevelXVRhxxXnw%2F2Mc7whn793%2BMgCTYL9XgAoLsvCK7TQKYo8PZueaB1nTsneitrgvB5fxwWLWEAnuL5a7ZUDxooY58x490KB64%2Bj4RnAS57smATabUN6Xr%2FLfOUiF2BQHJ%2FGsshY7SFM71isyqSdOeQv9C6P0MRNhXrIfp5efmaEzJirU%2BZDh0vEfeIBZJ5c4XYCIDCEL3wYHUFIJl8o7GDva0c12cX%2BnsmDWTY8kZgL388hjGmo5rhPRIr12em7pqKg%2FfyLgsMoReocZYQ3r8G9R0j%2FEg9FkZ36dhjna9Ct1APm4nA2hmGbG3wsPRuSuM378EDTC0drvrYHG%2BqMwItkyfPvnZdQyTOnYkXF451TbABzvjY5Y46yhHmmmJNa6iVy2%2BJfEV8ygZkn2%2BlE4LEjcIGQn7YvniE4O%2FWbk%2FWDA8%2FHbcie0tDfT4FFbIC1RRwRYXYN6kNWGqoCd02jQiOl0dWrWhtQv8yk%2F9YgCTlEkqgDnijHhCKY0CnBUhuBpBTNsNbsx26GSRzXap6l5kHeUGNAsjtq1crB6zcotRCXiju6%2BbX15jD907G%2BBjqkAYKgtdgsoE9vwIwnzuqw%2FGI1xr%2BpqJH%2B4SR93cSeIgYUtSZKS7SNYBWcwmDMahFCn1y7TrzF3C90df2BHw9HPjpRmezm6U9OZ0ZQ8zpzRIz1JA6hbnryooovHMkwnp6w8lLPyFUpBzoX790YQHynyB0mFGWDm4yXsVQmbOqkqH%2FwsCQ8uHNTR3hz9rqc1bmtzMHZwLiHEiTlksCsJJa463mpGS4h&X-Amz-Signature=f744ab262a1ac9460187319c375f47f54af7eb805ac58a880fabfb4739e77d13&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GO7LFR3%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCqol6QcTmlUqXGQ6RNTVK7nnSP%2FPfmyaRU%2BtCLx%2Fk8VgIhAJhyX%2F1fnU9MBBKBeZV7Nu0%2Fw2ALOUqMIArmpw0o9PpRKv8DCGEQABoMNjM3NDIzMTgzODA1IgyZwqnmw8rZVR1aoEUq3ANQB8MOnLfTDo21EbvsekJs57p3EuXAOIcoGGJlWbGuKu1%2FeRx34LiMYiGtVDF2%2BLhUApvcevelXVRhxxXnw%2F2Mc7whn793%2BMgCTYL9XgAoLsvCK7TQKYo8PZueaB1nTsneitrgvB5fxwWLWEAnuL5a7ZUDxooY58x490KB64%2Bj4RnAS57smATabUN6Xr%2FLfOUiF2BQHJ%2FGsshY7SFM71isyqSdOeQv9C6P0MRNhXrIfp5efmaEzJirU%2BZDh0vEfeIBZJ5c4XYCIDCEL3wYHUFIJl8o7GDva0c12cX%2BnsmDWTY8kZgL388hjGmo5rhPRIr12em7pqKg%2FfyLgsMoReocZYQ3r8G9R0j%2FEg9FkZ36dhjna9Ct1APm4nA2hmGbG3wsPRuSuM378EDTC0drvrYHG%2BqMwItkyfPvnZdQyTOnYkXF451TbABzvjY5Y46yhHmmmJNa6iVy2%2BJfEV8ygZkn2%2BlE4LEjcIGQn7YvniE4O%2FWbk%2FWDA8%2FHbcie0tDfT4FFbIC1RRwRYXYN6kNWGqoCd02jQiOl0dWrWhtQv8yk%2F9YgCTlEkqgDnijHhCKY0CnBUhuBpBTNsNbsx26GSRzXap6l5kHeUGNAsjtq1crB6zcotRCXiju6%2BbX15jD907G%2BBjqkAYKgtdgsoE9vwIwnzuqw%2FGI1xr%2BpqJH%2B4SR93cSeIgYUtSZKS7SNYBWcwmDMahFCn1y7TrzF3C90df2BHw9HPjpRmezm6U9OZ0ZQ8zpzRIz1JA6hbnryooovHMkwnp6w8lLPyFUpBzoX790YQHynyB0mFGWDm4yXsVQmbOqkqH%2FwsCQ8uHNTR3hz9rqc1bmtzMHZwLiHEiTlksCsJJa463mpGS4h&X-Amz-Signature=5299cd21bbb62073938ad8e25606cdd1cc2f008107bd19786838309d1c672720&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GO7LFR3%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCqol6QcTmlUqXGQ6RNTVK7nnSP%2FPfmyaRU%2BtCLx%2Fk8VgIhAJhyX%2F1fnU9MBBKBeZV7Nu0%2Fw2ALOUqMIArmpw0o9PpRKv8DCGEQABoMNjM3NDIzMTgzODA1IgyZwqnmw8rZVR1aoEUq3ANQB8MOnLfTDo21EbvsekJs57p3EuXAOIcoGGJlWbGuKu1%2FeRx34LiMYiGtVDF2%2BLhUApvcevelXVRhxxXnw%2F2Mc7whn793%2BMgCTYL9XgAoLsvCK7TQKYo8PZueaB1nTsneitrgvB5fxwWLWEAnuL5a7ZUDxooY58x490KB64%2Bj4RnAS57smATabUN6Xr%2FLfOUiF2BQHJ%2FGsshY7SFM71isyqSdOeQv9C6P0MRNhXrIfp5efmaEzJirU%2BZDh0vEfeIBZJ5c4XYCIDCEL3wYHUFIJl8o7GDva0c12cX%2BnsmDWTY8kZgL388hjGmo5rhPRIr12em7pqKg%2FfyLgsMoReocZYQ3r8G9R0j%2FEg9FkZ36dhjna9Ct1APm4nA2hmGbG3wsPRuSuM378EDTC0drvrYHG%2BqMwItkyfPvnZdQyTOnYkXF451TbABzvjY5Y46yhHmmmJNa6iVy2%2BJfEV8ygZkn2%2BlE4LEjcIGQn7YvniE4O%2FWbk%2FWDA8%2FHbcie0tDfT4FFbIC1RRwRYXYN6kNWGqoCd02jQiOl0dWrWhtQv8yk%2F9YgCTlEkqgDnijHhCKY0CnBUhuBpBTNsNbsx26GSRzXap6l5kHeUGNAsjtq1crB6zcotRCXiju6%2BbX15jD907G%2BBjqkAYKgtdgsoE9vwIwnzuqw%2FGI1xr%2BpqJH%2B4SR93cSeIgYUtSZKS7SNYBWcwmDMahFCn1y7TrzF3C90df2BHw9HPjpRmezm6U9OZ0ZQ8zpzRIz1JA6hbnryooovHMkwnp6w8lLPyFUpBzoX790YQHynyB0mFGWDm4yXsVQmbOqkqH%2FwsCQ8uHNTR3hz9rqc1bmtzMHZwLiHEiTlksCsJJa463mpGS4h&X-Amz-Signature=c883a2689338e0dd002ba4cae4dfe48231747de99eb900d5f6740220e59ec1de&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
