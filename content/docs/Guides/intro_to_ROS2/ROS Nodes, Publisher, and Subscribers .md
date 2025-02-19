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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2SUPQEL%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDAXrQ4Cq0582wPxyXcRFR0cutVnZCKUBJvr9k0tGhOmAIhAM5ge1Rt0oyISOjTV7N%2FSmnzskIQmetrfO3lw9hiMod7KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9ie9XIyIqDq3HyQkq3AMcLSePaYG2grs7S85nRP7etl0mHzLBMGgVPnVdXuCOX9kJyuT5T9rVjg7nKMJ%2BXpeVKvFVXj%2BONbRt8j4GGuLUI%2BE%2Be%2Fl35YRd9dbOiN35LTtnU9xkTJhMfIV1lgXWPkNr1x1ZJAnaNPByiXEGGMGlCWUlQc1HiwoMRExdGNWkF%2BIIF5Ivpa6Qpj8TR1%2B%2B9AXHlAnQvfY7zN%2FTnMs%2FMaLLWVvA5%2B%2FGoiwuqQstBmcApbd1jmjXv2uoyWVa6aFVRvrCMJpCG10oZ6GKUaOSqY3GRfFAz%2BbBpjPqcziSsDOPMtP%2BJageP%2BO2n3KTvGFWJW6gMSQSmurhEdr%2FTZkXr%2B3UN9FE%2FgX8YWPNF5q1YWIo8tjkV2YoW91SME5owAmUzeWouyRsheqL4EDGY8D66TXfjdBEMLXI1gE%2Fx7HJhP697x2Kp6Vd05JEswZwKG4UjuEJTKjHhelCRKLYsKDeJU2dKyYZgmsU8%2BNwPfsZ9ZA4AqkPGS5Fl8gYlhwUq0Z5SmruIbjIvZyYlRsK%2Bqny9gHuFZvCyang2fIqd070nGtqYgJ%2F%2BaGot0JrTVbWoIrVXZ9Ubgl3tt%2FlInwgzqRumDlKge2M4yNNVz9xKn2iHDfv%2FzixwxqxdOKkGeMm%2BDDKzNS9BjqkAX2oH%2FR9lxeQo9P9DffAkJ31QN1yTfL2n7baWG0uTcy1P4dxzwNLKzy9FZSWdCv%2FwBZS1EcMXcsHeVU%2F5rCoXHYt98UrNs3CwC%2FbHZXZWLLHC7FG2HSVRttNN%2FGe09nohCeCUvaiREYHnv82A4gOVxGoiZ9vaEbSasep89EkOxVkqF7VxfnUWrmq%2BKV0F%2FgC40f8qlTTrQfLhfqcSb6bX47haGvX&X-Amz-Signature=6deb47e570655ff8bede9532163477ca13ae143a077ac1334187942207ebb5ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2SUPQEL%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDAXrQ4Cq0582wPxyXcRFR0cutVnZCKUBJvr9k0tGhOmAIhAM5ge1Rt0oyISOjTV7N%2FSmnzskIQmetrfO3lw9hiMod7KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9ie9XIyIqDq3HyQkq3AMcLSePaYG2grs7S85nRP7etl0mHzLBMGgVPnVdXuCOX9kJyuT5T9rVjg7nKMJ%2BXpeVKvFVXj%2BONbRt8j4GGuLUI%2BE%2Be%2Fl35YRd9dbOiN35LTtnU9xkTJhMfIV1lgXWPkNr1x1ZJAnaNPByiXEGGMGlCWUlQc1HiwoMRExdGNWkF%2BIIF5Ivpa6Qpj8TR1%2B%2B9AXHlAnQvfY7zN%2FTnMs%2FMaLLWVvA5%2B%2FGoiwuqQstBmcApbd1jmjXv2uoyWVa6aFVRvrCMJpCG10oZ6GKUaOSqY3GRfFAz%2BbBpjPqcziSsDOPMtP%2BJageP%2BO2n3KTvGFWJW6gMSQSmurhEdr%2FTZkXr%2B3UN9FE%2FgX8YWPNF5q1YWIo8tjkV2YoW91SME5owAmUzeWouyRsheqL4EDGY8D66TXfjdBEMLXI1gE%2Fx7HJhP697x2Kp6Vd05JEswZwKG4UjuEJTKjHhelCRKLYsKDeJU2dKyYZgmsU8%2BNwPfsZ9ZA4AqkPGS5Fl8gYlhwUq0Z5SmruIbjIvZyYlRsK%2Bqny9gHuFZvCyang2fIqd070nGtqYgJ%2F%2BaGot0JrTVbWoIrVXZ9Ubgl3tt%2FlInwgzqRumDlKge2M4yNNVz9xKn2iHDfv%2FzixwxqxdOKkGeMm%2BDDKzNS9BjqkAX2oH%2FR9lxeQo9P9DffAkJ31QN1yTfL2n7baWG0uTcy1P4dxzwNLKzy9FZSWdCv%2FwBZS1EcMXcsHeVU%2F5rCoXHYt98UrNs3CwC%2FbHZXZWLLHC7FG2HSVRttNN%2FGe09nohCeCUvaiREYHnv82A4gOVxGoiZ9vaEbSasep89EkOxVkqF7VxfnUWrmq%2BKV0F%2FgC40f8qlTTrQfLhfqcSb6bX47haGvX&X-Amz-Signature=859e8bec4f6b12548657b9e57683f802c0435d765290345e4703cd9c3ee0a155&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2SUPQEL%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDAXrQ4Cq0582wPxyXcRFR0cutVnZCKUBJvr9k0tGhOmAIhAM5ge1Rt0oyISOjTV7N%2FSmnzskIQmetrfO3lw9hiMod7KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9ie9XIyIqDq3HyQkq3AMcLSePaYG2grs7S85nRP7etl0mHzLBMGgVPnVdXuCOX9kJyuT5T9rVjg7nKMJ%2BXpeVKvFVXj%2BONbRt8j4GGuLUI%2BE%2Be%2Fl35YRd9dbOiN35LTtnU9xkTJhMfIV1lgXWPkNr1x1ZJAnaNPByiXEGGMGlCWUlQc1HiwoMRExdGNWkF%2BIIF5Ivpa6Qpj8TR1%2B%2B9AXHlAnQvfY7zN%2FTnMs%2FMaLLWVvA5%2B%2FGoiwuqQstBmcApbd1jmjXv2uoyWVa6aFVRvrCMJpCG10oZ6GKUaOSqY3GRfFAz%2BbBpjPqcziSsDOPMtP%2BJageP%2BO2n3KTvGFWJW6gMSQSmurhEdr%2FTZkXr%2B3UN9FE%2FgX8YWPNF5q1YWIo8tjkV2YoW91SME5owAmUzeWouyRsheqL4EDGY8D66TXfjdBEMLXI1gE%2Fx7HJhP697x2Kp6Vd05JEswZwKG4UjuEJTKjHhelCRKLYsKDeJU2dKyYZgmsU8%2BNwPfsZ9ZA4AqkPGS5Fl8gYlhwUq0Z5SmruIbjIvZyYlRsK%2Bqny9gHuFZvCyang2fIqd070nGtqYgJ%2F%2BaGot0JrTVbWoIrVXZ9Ubgl3tt%2FlInwgzqRumDlKge2M4yNNVz9xKn2iHDfv%2FzixwxqxdOKkGeMm%2BDDKzNS9BjqkAX2oH%2FR9lxeQo9P9DffAkJ31QN1yTfL2n7baWG0uTcy1P4dxzwNLKzy9FZSWdCv%2FwBZS1EcMXcsHeVU%2F5rCoXHYt98UrNs3CwC%2FbHZXZWLLHC7FG2HSVRttNN%2FGe09nohCeCUvaiREYHnv82A4gOVxGoiZ9vaEbSasep89EkOxVkqF7VxfnUWrmq%2BKV0F%2FgC40f8qlTTrQfLhfqcSb6bX47haGvX&X-Amz-Signature=170c31979a30d1441a6a02cd71fa209e2dff2ee19c0148ece5ed0edcb5c59293&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2SUPQEL%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDAXrQ4Cq0582wPxyXcRFR0cutVnZCKUBJvr9k0tGhOmAIhAM5ge1Rt0oyISOjTV7N%2FSmnzskIQmetrfO3lw9hiMod7KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9ie9XIyIqDq3HyQkq3AMcLSePaYG2grs7S85nRP7etl0mHzLBMGgVPnVdXuCOX9kJyuT5T9rVjg7nKMJ%2BXpeVKvFVXj%2BONbRt8j4GGuLUI%2BE%2Be%2Fl35YRd9dbOiN35LTtnU9xkTJhMfIV1lgXWPkNr1x1ZJAnaNPByiXEGGMGlCWUlQc1HiwoMRExdGNWkF%2BIIF5Ivpa6Qpj8TR1%2B%2B9AXHlAnQvfY7zN%2FTnMs%2FMaLLWVvA5%2B%2FGoiwuqQstBmcApbd1jmjXv2uoyWVa6aFVRvrCMJpCG10oZ6GKUaOSqY3GRfFAz%2BbBpjPqcziSsDOPMtP%2BJageP%2BO2n3KTvGFWJW6gMSQSmurhEdr%2FTZkXr%2B3UN9FE%2FgX8YWPNF5q1YWIo8tjkV2YoW91SME5owAmUzeWouyRsheqL4EDGY8D66TXfjdBEMLXI1gE%2Fx7HJhP697x2Kp6Vd05JEswZwKG4UjuEJTKjHhelCRKLYsKDeJU2dKyYZgmsU8%2BNwPfsZ9ZA4AqkPGS5Fl8gYlhwUq0Z5SmruIbjIvZyYlRsK%2Bqny9gHuFZvCyang2fIqd070nGtqYgJ%2F%2BaGot0JrTVbWoIrVXZ9Ubgl3tt%2FlInwgzqRumDlKge2M4yNNVz9xKn2iHDfv%2FzixwxqxdOKkGeMm%2BDDKzNS9BjqkAX2oH%2FR9lxeQo9P9DffAkJ31QN1yTfL2n7baWG0uTcy1P4dxzwNLKzy9FZSWdCv%2FwBZS1EcMXcsHeVU%2F5rCoXHYt98UrNs3CwC%2FbHZXZWLLHC7FG2HSVRttNN%2FGe09nohCeCUvaiREYHnv82A4gOVxGoiZ9vaEbSasep89EkOxVkqF7VxfnUWrmq%2BKV0F%2FgC40f8qlTTrQfLhfqcSb6bX47haGvX&X-Amz-Signature=02449a51111ffbdedf33ea8574c866402128505354f8e7638791bfe6ac6a1dcb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2SUPQEL%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDAXrQ4Cq0582wPxyXcRFR0cutVnZCKUBJvr9k0tGhOmAIhAM5ge1Rt0oyISOjTV7N%2FSmnzskIQmetrfO3lw9hiMod7KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9ie9XIyIqDq3HyQkq3AMcLSePaYG2grs7S85nRP7etl0mHzLBMGgVPnVdXuCOX9kJyuT5T9rVjg7nKMJ%2BXpeVKvFVXj%2BONbRt8j4GGuLUI%2BE%2Be%2Fl35YRd9dbOiN35LTtnU9xkTJhMfIV1lgXWPkNr1x1ZJAnaNPByiXEGGMGlCWUlQc1HiwoMRExdGNWkF%2BIIF5Ivpa6Qpj8TR1%2B%2B9AXHlAnQvfY7zN%2FTnMs%2FMaLLWVvA5%2B%2FGoiwuqQstBmcApbd1jmjXv2uoyWVa6aFVRvrCMJpCG10oZ6GKUaOSqY3GRfFAz%2BbBpjPqcziSsDOPMtP%2BJageP%2BO2n3KTvGFWJW6gMSQSmurhEdr%2FTZkXr%2B3UN9FE%2FgX8YWPNF5q1YWIo8tjkV2YoW91SME5owAmUzeWouyRsheqL4EDGY8D66TXfjdBEMLXI1gE%2Fx7HJhP697x2Kp6Vd05JEswZwKG4UjuEJTKjHhelCRKLYsKDeJU2dKyYZgmsU8%2BNwPfsZ9ZA4AqkPGS5Fl8gYlhwUq0Z5SmruIbjIvZyYlRsK%2Bqny9gHuFZvCyang2fIqd070nGtqYgJ%2F%2BaGot0JrTVbWoIrVXZ9Ubgl3tt%2FlInwgzqRumDlKge2M4yNNVz9xKn2iHDfv%2FzixwxqxdOKkGeMm%2BDDKzNS9BjqkAX2oH%2FR9lxeQo9P9DffAkJ31QN1yTfL2n7baWG0uTcy1P4dxzwNLKzy9FZSWdCv%2FwBZS1EcMXcsHeVU%2F5rCoXHYt98UrNs3CwC%2FbHZXZWLLHC7FG2HSVRttNN%2FGe09nohCeCUvaiREYHnv82A4gOVxGoiZ9vaEbSasep89EkOxVkqF7VxfnUWrmq%2BKV0F%2FgC40f8qlTTrQfLhfqcSb6bX47haGvX&X-Amz-Signature=ea68aa78bad338e5e4c98d87b4f71c5ba2835709c1ee1fef89dae917d17dded9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2SUPQEL%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDAXrQ4Cq0582wPxyXcRFR0cutVnZCKUBJvr9k0tGhOmAIhAM5ge1Rt0oyISOjTV7N%2FSmnzskIQmetrfO3lw9hiMod7KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9ie9XIyIqDq3HyQkq3AMcLSePaYG2grs7S85nRP7etl0mHzLBMGgVPnVdXuCOX9kJyuT5T9rVjg7nKMJ%2BXpeVKvFVXj%2BONbRt8j4GGuLUI%2BE%2Be%2Fl35YRd9dbOiN35LTtnU9xkTJhMfIV1lgXWPkNr1x1ZJAnaNPByiXEGGMGlCWUlQc1HiwoMRExdGNWkF%2BIIF5Ivpa6Qpj8TR1%2B%2B9AXHlAnQvfY7zN%2FTnMs%2FMaLLWVvA5%2B%2FGoiwuqQstBmcApbd1jmjXv2uoyWVa6aFVRvrCMJpCG10oZ6GKUaOSqY3GRfFAz%2BbBpjPqcziSsDOPMtP%2BJageP%2BO2n3KTvGFWJW6gMSQSmurhEdr%2FTZkXr%2B3UN9FE%2FgX8YWPNF5q1YWIo8tjkV2YoW91SME5owAmUzeWouyRsheqL4EDGY8D66TXfjdBEMLXI1gE%2Fx7HJhP697x2Kp6Vd05JEswZwKG4UjuEJTKjHhelCRKLYsKDeJU2dKyYZgmsU8%2BNwPfsZ9ZA4AqkPGS5Fl8gYlhwUq0Z5SmruIbjIvZyYlRsK%2Bqny9gHuFZvCyang2fIqd070nGtqYgJ%2F%2BaGot0JrTVbWoIrVXZ9Ubgl3tt%2FlInwgzqRumDlKge2M4yNNVz9xKn2iHDfv%2FzixwxqxdOKkGeMm%2BDDKzNS9BjqkAX2oH%2FR9lxeQo9P9DffAkJ31QN1yTfL2n7baWG0uTcy1P4dxzwNLKzy9FZSWdCv%2FwBZS1EcMXcsHeVU%2F5rCoXHYt98UrNs3CwC%2FbHZXZWLLHC7FG2HSVRttNN%2FGe09nohCeCUvaiREYHnv82A4gOVxGoiZ9vaEbSasep89EkOxVkqF7VxfnUWrmq%2BKV0F%2FgC40f8qlTTrQfLhfqcSb6bX47haGvX&X-Amz-Signature=df32f21756e4839801b1a7dc8b1d3f5a7a7fb73e4789f6f6915025fc36aaf64c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2SUPQEL%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDAXrQ4Cq0582wPxyXcRFR0cutVnZCKUBJvr9k0tGhOmAIhAM5ge1Rt0oyISOjTV7N%2FSmnzskIQmetrfO3lw9hiMod7KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9ie9XIyIqDq3HyQkq3AMcLSePaYG2grs7S85nRP7etl0mHzLBMGgVPnVdXuCOX9kJyuT5T9rVjg7nKMJ%2BXpeVKvFVXj%2BONbRt8j4GGuLUI%2BE%2Be%2Fl35YRd9dbOiN35LTtnU9xkTJhMfIV1lgXWPkNr1x1ZJAnaNPByiXEGGMGlCWUlQc1HiwoMRExdGNWkF%2BIIF5Ivpa6Qpj8TR1%2B%2B9AXHlAnQvfY7zN%2FTnMs%2FMaLLWVvA5%2B%2FGoiwuqQstBmcApbd1jmjXv2uoyWVa6aFVRvrCMJpCG10oZ6GKUaOSqY3GRfFAz%2BbBpjPqcziSsDOPMtP%2BJageP%2BO2n3KTvGFWJW6gMSQSmurhEdr%2FTZkXr%2B3UN9FE%2FgX8YWPNF5q1YWIo8tjkV2YoW91SME5owAmUzeWouyRsheqL4EDGY8D66TXfjdBEMLXI1gE%2Fx7HJhP697x2Kp6Vd05JEswZwKG4UjuEJTKjHhelCRKLYsKDeJU2dKyYZgmsU8%2BNwPfsZ9ZA4AqkPGS5Fl8gYlhwUq0Z5SmruIbjIvZyYlRsK%2Bqny9gHuFZvCyang2fIqd070nGtqYgJ%2F%2BaGot0JrTVbWoIrVXZ9Ubgl3tt%2FlInwgzqRumDlKge2M4yNNVz9xKn2iHDfv%2FzixwxqxdOKkGeMm%2BDDKzNS9BjqkAX2oH%2FR9lxeQo9P9DffAkJ31QN1yTfL2n7baWG0uTcy1P4dxzwNLKzy9FZSWdCv%2FwBZS1EcMXcsHeVU%2F5rCoXHYt98UrNs3CwC%2FbHZXZWLLHC7FG2HSVRttNN%2FGe09nohCeCUvaiREYHnv82A4gOVxGoiZ9vaEbSasep89EkOxVkqF7VxfnUWrmq%2BKV0F%2FgC40f8qlTTrQfLhfqcSb6bX47haGvX&X-Amz-Signature=5066a0724804055985624a21ad5f5c0127c54372ee3fab3d29413fc4bc759a24&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2SUPQEL%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDAXrQ4Cq0582wPxyXcRFR0cutVnZCKUBJvr9k0tGhOmAIhAM5ge1Rt0oyISOjTV7N%2FSmnzskIQmetrfO3lw9hiMod7KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9ie9XIyIqDq3HyQkq3AMcLSePaYG2grs7S85nRP7etl0mHzLBMGgVPnVdXuCOX9kJyuT5T9rVjg7nKMJ%2BXpeVKvFVXj%2BONbRt8j4GGuLUI%2BE%2Be%2Fl35YRd9dbOiN35LTtnU9xkTJhMfIV1lgXWPkNr1x1ZJAnaNPByiXEGGMGlCWUlQc1HiwoMRExdGNWkF%2BIIF5Ivpa6Qpj8TR1%2B%2B9AXHlAnQvfY7zN%2FTnMs%2FMaLLWVvA5%2B%2FGoiwuqQstBmcApbd1jmjXv2uoyWVa6aFVRvrCMJpCG10oZ6GKUaOSqY3GRfFAz%2BbBpjPqcziSsDOPMtP%2BJageP%2BO2n3KTvGFWJW6gMSQSmurhEdr%2FTZkXr%2B3UN9FE%2FgX8YWPNF5q1YWIo8tjkV2YoW91SME5owAmUzeWouyRsheqL4EDGY8D66TXfjdBEMLXI1gE%2Fx7HJhP697x2Kp6Vd05JEswZwKG4UjuEJTKjHhelCRKLYsKDeJU2dKyYZgmsU8%2BNwPfsZ9ZA4AqkPGS5Fl8gYlhwUq0Z5SmruIbjIvZyYlRsK%2Bqny9gHuFZvCyang2fIqd070nGtqYgJ%2F%2BaGot0JrTVbWoIrVXZ9Ubgl3tt%2FlInwgzqRumDlKge2M4yNNVz9xKn2iHDfv%2FzixwxqxdOKkGeMm%2BDDKzNS9BjqkAX2oH%2FR9lxeQo9P9DffAkJ31QN1yTfL2n7baWG0uTcy1P4dxzwNLKzy9FZSWdCv%2FwBZS1EcMXcsHeVU%2F5rCoXHYt98UrNs3CwC%2FbHZXZWLLHC7FG2HSVRttNN%2FGe09nohCeCUvaiREYHnv82A4gOVxGoiZ9vaEbSasep89EkOxVkqF7VxfnUWrmq%2BKV0F%2FgC40f8qlTTrQfLhfqcSb6bX47haGvX&X-Amz-Signature=1c67667208f6fba0c12c416c47f8a1417b60eacc31c5919dd38bf007d6e78b7c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
