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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T73K46IJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDHICPyu%2Bd9ny4ndl%2Bs4h0p5xb11z%2BaXWI85w4dsAv5xgIhAPTi8uOr4f6oousBIx2A8mVHWFMoa%2BnUzllLFjTWivBTKv8DCHwQABoMNjM3NDIzMTgzODA1Igy8KG8myhWhZ5VYLssq3AProcT%2BAt4kVabuuAxC8jBYmPz972MgqGetqt3xtmRlk7ibkQUE9SGyhm2AXbxdiiqOK2owAouMvSXh6ZwSuReTyoB5TDWRVmnZpcS7i4hjvjs4y2Ms1pKeaQ7qajwpYvQaj7L06AdZnmUVhHUEEWLY2zFKpR5GNtF6s7ceU0AOZHj5C19AwI7s7l3fRDIacQJIcLA54zorb9TUpDQkfrOMh7cmn9HzFhL0oZu8bJdZLMmL73rjb2fSGNNbBqOjU5ygSJ9CqnHLnptCwghIumbSCqqa9FmWL7jVz8xzEvgBfGOuMD4wMgV7JpybHw%2FeBx87o9uwJBCbDTImMbXIosXoNCSVYjo6W1%2BAyEqW7P%2BWt9Vq7X%2B6pObdscTWuvTCdKQiwuPQrl%2BfPEinw%2FLdjgLS8edXk%2BynRR4h3Un4NYrnKaTOQ%2F%2BwW%2FcGzYi1k2Q03t%2B29zfBuzV%2Blp%2BGsvUgANBkv3kwWE%2B3leF0qX9ET81AAyip7sNlbrx6vJV3yZV7DOsVkdrh7IDnbzt33aQ9H5W4p4aghqeZQG6NDfvMBpf6N97qADR4IiKA1VV0U6DFw1I2X8v8a42jehEiWNJe%2FO4Oc4WvkM1FCaqpBWr4%2Bgs8k9ihPGgKZIzjPZEkVzDZ8IK%2BBjqkAdLx0jshD6tPZBhJ12lZujXNKv3u08Hung7QBb4VyhivatpZcjfsgs6NjDnjs8boIhBzz4oiYRRuZqCUQBQ8ysDO05LssCV3LzXUhVDt%2BiIN%2F1FAyDkxmxtyc5Xh6yhfhiuX0A72LF1tNyorl6jA1Y6t9XtwKUTJa2xWTIMEq%2BHv5mDa%2BwTYl5S1if5S7G3b1yn4g4BporVPIGqfsT0n%2FnCUPlqx&X-Amz-Signature=d9dc812c1d36af465c539720d94717252484e4de20036b03a0228fbe0d388e8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T73K46IJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDHICPyu%2Bd9ny4ndl%2Bs4h0p5xb11z%2BaXWI85w4dsAv5xgIhAPTi8uOr4f6oousBIx2A8mVHWFMoa%2BnUzllLFjTWivBTKv8DCHwQABoMNjM3NDIzMTgzODA1Igy8KG8myhWhZ5VYLssq3AProcT%2BAt4kVabuuAxC8jBYmPz972MgqGetqt3xtmRlk7ibkQUE9SGyhm2AXbxdiiqOK2owAouMvSXh6ZwSuReTyoB5TDWRVmnZpcS7i4hjvjs4y2Ms1pKeaQ7qajwpYvQaj7L06AdZnmUVhHUEEWLY2zFKpR5GNtF6s7ceU0AOZHj5C19AwI7s7l3fRDIacQJIcLA54zorb9TUpDQkfrOMh7cmn9HzFhL0oZu8bJdZLMmL73rjb2fSGNNbBqOjU5ygSJ9CqnHLnptCwghIumbSCqqa9FmWL7jVz8xzEvgBfGOuMD4wMgV7JpybHw%2FeBx87o9uwJBCbDTImMbXIosXoNCSVYjo6W1%2BAyEqW7P%2BWt9Vq7X%2B6pObdscTWuvTCdKQiwuPQrl%2BfPEinw%2FLdjgLS8edXk%2BynRR4h3Un4NYrnKaTOQ%2F%2BwW%2FcGzYi1k2Q03t%2B29zfBuzV%2Blp%2BGsvUgANBkv3kwWE%2B3leF0qX9ET81AAyip7sNlbrx6vJV3yZV7DOsVkdrh7IDnbzt33aQ9H5W4p4aghqeZQG6NDfvMBpf6N97qADR4IiKA1VV0U6DFw1I2X8v8a42jehEiWNJe%2FO4Oc4WvkM1FCaqpBWr4%2Bgs8k9ihPGgKZIzjPZEkVzDZ8IK%2BBjqkAdLx0jshD6tPZBhJ12lZujXNKv3u08Hung7QBb4VyhivatpZcjfsgs6NjDnjs8boIhBzz4oiYRRuZqCUQBQ8ysDO05LssCV3LzXUhVDt%2BiIN%2F1FAyDkxmxtyc5Xh6yhfhiuX0A72LF1tNyorl6jA1Y6t9XtwKUTJa2xWTIMEq%2BHv5mDa%2BwTYl5S1if5S7G3b1yn4g4BporVPIGqfsT0n%2FnCUPlqx&X-Amz-Signature=1f69f3afe97ba78a0a8f9ed3240a1c4f0007cbda773f88ad26cae8518c23936c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T73K46IJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDHICPyu%2Bd9ny4ndl%2Bs4h0p5xb11z%2BaXWI85w4dsAv5xgIhAPTi8uOr4f6oousBIx2A8mVHWFMoa%2BnUzllLFjTWivBTKv8DCHwQABoMNjM3NDIzMTgzODA1Igy8KG8myhWhZ5VYLssq3AProcT%2BAt4kVabuuAxC8jBYmPz972MgqGetqt3xtmRlk7ibkQUE9SGyhm2AXbxdiiqOK2owAouMvSXh6ZwSuReTyoB5TDWRVmnZpcS7i4hjvjs4y2Ms1pKeaQ7qajwpYvQaj7L06AdZnmUVhHUEEWLY2zFKpR5GNtF6s7ceU0AOZHj5C19AwI7s7l3fRDIacQJIcLA54zorb9TUpDQkfrOMh7cmn9HzFhL0oZu8bJdZLMmL73rjb2fSGNNbBqOjU5ygSJ9CqnHLnptCwghIumbSCqqa9FmWL7jVz8xzEvgBfGOuMD4wMgV7JpybHw%2FeBx87o9uwJBCbDTImMbXIosXoNCSVYjo6W1%2BAyEqW7P%2BWt9Vq7X%2B6pObdscTWuvTCdKQiwuPQrl%2BfPEinw%2FLdjgLS8edXk%2BynRR4h3Un4NYrnKaTOQ%2F%2BwW%2FcGzYi1k2Q03t%2B29zfBuzV%2Blp%2BGsvUgANBkv3kwWE%2B3leF0qX9ET81AAyip7sNlbrx6vJV3yZV7DOsVkdrh7IDnbzt33aQ9H5W4p4aghqeZQG6NDfvMBpf6N97qADR4IiKA1VV0U6DFw1I2X8v8a42jehEiWNJe%2FO4Oc4WvkM1FCaqpBWr4%2Bgs8k9ihPGgKZIzjPZEkVzDZ8IK%2BBjqkAdLx0jshD6tPZBhJ12lZujXNKv3u08Hung7QBb4VyhivatpZcjfsgs6NjDnjs8boIhBzz4oiYRRuZqCUQBQ8ysDO05LssCV3LzXUhVDt%2BiIN%2F1FAyDkxmxtyc5Xh6yhfhiuX0A72LF1tNyorl6jA1Y6t9XtwKUTJa2xWTIMEq%2BHv5mDa%2BwTYl5S1if5S7G3b1yn4g4BporVPIGqfsT0n%2FnCUPlqx&X-Amz-Signature=a03eb5383db46a00b465f3c56526a876c848fc995083e8125e43c9a7ae4bfb63&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T73K46IJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDHICPyu%2Bd9ny4ndl%2Bs4h0p5xb11z%2BaXWI85w4dsAv5xgIhAPTi8uOr4f6oousBIx2A8mVHWFMoa%2BnUzllLFjTWivBTKv8DCHwQABoMNjM3NDIzMTgzODA1Igy8KG8myhWhZ5VYLssq3AProcT%2BAt4kVabuuAxC8jBYmPz972MgqGetqt3xtmRlk7ibkQUE9SGyhm2AXbxdiiqOK2owAouMvSXh6ZwSuReTyoB5TDWRVmnZpcS7i4hjvjs4y2Ms1pKeaQ7qajwpYvQaj7L06AdZnmUVhHUEEWLY2zFKpR5GNtF6s7ceU0AOZHj5C19AwI7s7l3fRDIacQJIcLA54zorb9TUpDQkfrOMh7cmn9HzFhL0oZu8bJdZLMmL73rjb2fSGNNbBqOjU5ygSJ9CqnHLnptCwghIumbSCqqa9FmWL7jVz8xzEvgBfGOuMD4wMgV7JpybHw%2FeBx87o9uwJBCbDTImMbXIosXoNCSVYjo6W1%2BAyEqW7P%2BWt9Vq7X%2B6pObdscTWuvTCdKQiwuPQrl%2BfPEinw%2FLdjgLS8edXk%2BynRR4h3Un4NYrnKaTOQ%2F%2BwW%2FcGzYi1k2Q03t%2B29zfBuzV%2Blp%2BGsvUgANBkv3kwWE%2B3leF0qX9ET81AAyip7sNlbrx6vJV3yZV7DOsVkdrh7IDnbzt33aQ9H5W4p4aghqeZQG6NDfvMBpf6N97qADR4IiKA1VV0U6DFw1I2X8v8a42jehEiWNJe%2FO4Oc4WvkM1FCaqpBWr4%2Bgs8k9ihPGgKZIzjPZEkVzDZ8IK%2BBjqkAdLx0jshD6tPZBhJ12lZujXNKv3u08Hung7QBb4VyhivatpZcjfsgs6NjDnjs8boIhBzz4oiYRRuZqCUQBQ8ysDO05LssCV3LzXUhVDt%2BiIN%2F1FAyDkxmxtyc5Xh6yhfhiuX0A72LF1tNyorl6jA1Y6t9XtwKUTJa2xWTIMEq%2BHv5mDa%2BwTYl5S1if5S7G3b1yn4g4BporVPIGqfsT0n%2FnCUPlqx&X-Amz-Signature=5476e71a1a1d40de877ee3306e94a7c6ccd3f87a81c4dc4f0e93c5e01990c4b5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T73K46IJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDHICPyu%2Bd9ny4ndl%2Bs4h0p5xb11z%2BaXWI85w4dsAv5xgIhAPTi8uOr4f6oousBIx2A8mVHWFMoa%2BnUzllLFjTWivBTKv8DCHwQABoMNjM3NDIzMTgzODA1Igy8KG8myhWhZ5VYLssq3AProcT%2BAt4kVabuuAxC8jBYmPz972MgqGetqt3xtmRlk7ibkQUE9SGyhm2AXbxdiiqOK2owAouMvSXh6ZwSuReTyoB5TDWRVmnZpcS7i4hjvjs4y2Ms1pKeaQ7qajwpYvQaj7L06AdZnmUVhHUEEWLY2zFKpR5GNtF6s7ceU0AOZHj5C19AwI7s7l3fRDIacQJIcLA54zorb9TUpDQkfrOMh7cmn9HzFhL0oZu8bJdZLMmL73rjb2fSGNNbBqOjU5ygSJ9CqnHLnptCwghIumbSCqqa9FmWL7jVz8xzEvgBfGOuMD4wMgV7JpybHw%2FeBx87o9uwJBCbDTImMbXIosXoNCSVYjo6W1%2BAyEqW7P%2BWt9Vq7X%2B6pObdscTWuvTCdKQiwuPQrl%2BfPEinw%2FLdjgLS8edXk%2BynRR4h3Un4NYrnKaTOQ%2F%2BwW%2FcGzYi1k2Q03t%2B29zfBuzV%2Blp%2BGsvUgANBkv3kwWE%2B3leF0qX9ET81AAyip7sNlbrx6vJV3yZV7DOsVkdrh7IDnbzt33aQ9H5W4p4aghqeZQG6NDfvMBpf6N97qADR4IiKA1VV0U6DFw1I2X8v8a42jehEiWNJe%2FO4Oc4WvkM1FCaqpBWr4%2Bgs8k9ihPGgKZIzjPZEkVzDZ8IK%2BBjqkAdLx0jshD6tPZBhJ12lZujXNKv3u08Hung7QBb4VyhivatpZcjfsgs6NjDnjs8boIhBzz4oiYRRuZqCUQBQ8ysDO05LssCV3LzXUhVDt%2BiIN%2F1FAyDkxmxtyc5Xh6yhfhiuX0A72LF1tNyorl6jA1Y6t9XtwKUTJa2xWTIMEq%2BHv5mDa%2BwTYl5S1if5S7G3b1yn4g4BporVPIGqfsT0n%2FnCUPlqx&X-Amz-Signature=0b494d419abef62fd21d72f2a50d62268dff50c27cab81097db244b711a45222&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T73K46IJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDHICPyu%2Bd9ny4ndl%2Bs4h0p5xb11z%2BaXWI85w4dsAv5xgIhAPTi8uOr4f6oousBIx2A8mVHWFMoa%2BnUzllLFjTWivBTKv8DCHwQABoMNjM3NDIzMTgzODA1Igy8KG8myhWhZ5VYLssq3AProcT%2BAt4kVabuuAxC8jBYmPz972MgqGetqt3xtmRlk7ibkQUE9SGyhm2AXbxdiiqOK2owAouMvSXh6ZwSuReTyoB5TDWRVmnZpcS7i4hjvjs4y2Ms1pKeaQ7qajwpYvQaj7L06AdZnmUVhHUEEWLY2zFKpR5GNtF6s7ceU0AOZHj5C19AwI7s7l3fRDIacQJIcLA54zorb9TUpDQkfrOMh7cmn9HzFhL0oZu8bJdZLMmL73rjb2fSGNNbBqOjU5ygSJ9CqnHLnptCwghIumbSCqqa9FmWL7jVz8xzEvgBfGOuMD4wMgV7JpybHw%2FeBx87o9uwJBCbDTImMbXIosXoNCSVYjo6W1%2BAyEqW7P%2BWt9Vq7X%2B6pObdscTWuvTCdKQiwuPQrl%2BfPEinw%2FLdjgLS8edXk%2BynRR4h3Un4NYrnKaTOQ%2F%2BwW%2FcGzYi1k2Q03t%2B29zfBuzV%2Blp%2BGsvUgANBkv3kwWE%2B3leF0qX9ET81AAyip7sNlbrx6vJV3yZV7DOsVkdrh7IDnbzt33aQ9H5W4p4aghqeZQG6NDfvMBpf6N97qADR4IiKA1VV0U6DFw1I2X8v8a42jehEiWNJe%2FO4Oc4WvkM1FCaqpBWr4%2Bgs8k9ihPGgKZIzjPZEkVzDZ8IK%2BBjqkAdLx0jshD6tPZBhJ12lZujXNKv3u08Hung7QBb4VyhivatpZcjfsgs6NjDnjs8boIhBzz4oiYRRuZqCUQBQ8ysDO05LssCV3LzXUhVDt%2BiIN%2F1FAyDkxmxtyc5Xh6yhfhiuX0A72LF1tNyorl6jA1Y6t9XtwKUTJa2xWTIMEq%2BHv5mDa%2BwTYl5S1if5S7G3b1yn4g4BporVPIGqfsT0n%2FnCUPlqx&X-Amz-Signature=5efcfcb0ce5e9bba004dc29d5cbdab517f3b870204cca632f181abc0c8c50327&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T73K46IJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDHICPyu%2Bd9ny4ndl%2Bs4h0p5xb11z%2BaXWI85w4dsAv5xgIhAPTi8uOr4f6oousBIx2A8mVHWFMoa%2BnUzllLFjTWivBTKv8DCHwQABoMNjM3NDIzMTgzODA1Igy8KG8myhWhZ5VYLssq3AProcT%2BAt4kVabuuAxC8jBYmPz972MgqGetqt3xtmRlk7ibkQUE9SGyhm2AXbxdiiqOK2owAouMvSXh6ZwSuReTyoB5TDWRVmnZpcS7i4hjvjs4y2Ms1pKeaQ7qajwpYvQaj7L06AdZnmUVhHUEEWLY2zFKpR5GNtF6s7ceU0AOZHj5C19AwI7s7l3fRDIacQJIcLA54zorb9TUpDQkfrOMh7cmn9HzFhL0oZu8bJdZLMmL73rjb2fSGNNbBqOjU5ygSJ9CqnHLnptCwghIumbSCqqa9FmWL7jVz8xzEvgBfGOuMD4wMgV7JpybHw%2FeBx87o9uwJBCbDTImMbXIosXoNCSVYjo6W1%2BAyEqW7P%2BWt9Vq7X%2B6pObdscTWuvTCdKQiwuPQrl%2BfPEinw%2FLdjgLS8edXk%2BynRR4h3Un4NYrnKaTOQ%2F%2BwW%2FcGzYi1k2Q03t%2B29zfBuzV%2Blp%2BGsvUgANBkv3kwWE%2B3leF0qX9ET81AAyip7sNlbrx6vJV3yZV7DOsVkdrh7IDnbzt33aQ9H5W4p4aghqeZQG6NDfvMBpf6N97qADR4IiKA1VV0U6DFw1I2X8v8a42jehEiWNJe%2FO4Oc4WvkM1FCaqpBWr4%2Bgs8k9ihPGgKZIzjPZEkVzDZ8IK%2BBjqkAdLx0jshD6tPZBhJ12lZujXNKv3u08Hung7QBb4VyhivatpZcjfsgs6NjDnjs8boIhBzz4oiYRRuZqCUQBQ8ysDO05LssCV3LzXUhVDt%2BiIN%2F1FAyDkxmxtyc5Xh6yhfhiuX0A72LF1tNyorl6jA1Y6t9XtwKUTJa2xWTIMEq%2BHv5mDa%2BwTYl5S1if5S7G3b1yn4g4BporVPIGqfsT0n%2FnCUPlqx&X-Amz-Signature=a02dc39e21cf8e7bbb6b6a1656331721ff8c35876358a1d06a52b5f5c8966127&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T73K46IJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDHICPyu%2Bd9ny4ndl%2Bs4h0p5xb11z%2BaXWI85w4dsAv5xgIhAPTi8uOr4f6oousBIx2A8mVHWFMoa%2BnUzllLFjTWivBTKv8DCHwQABoMNjM3NDIzMTgzODA1Igy8KG8myhWhZ5VYLssq3AProcT%2BAt4kVabuuAxC8jBYmPz972MgqGetqt3xtmRlk7ibkQUE9SGyhm2AXbxdiiqOK2owAouMvSXh6ZwSuReTyoB5TDWRVmnZpcS7i4hjvjs4y2Ms1pKeaQ7qajwpYvQaj7L06AdZnmUVhHUEEWLY2zFKpR5GNtF6s7ceU0AOZHj5C19AwI7s7l3fRDIacQJIcLA54zorb9TUpDQkfrOMh7cmn9HzFhL0oZu8bJdZLMmL73rjb2fSGNNbBqOjU5ygSJ9CqnHLnptCwghIumbSCqqa9FmWL7jVz8xzEvgBfGOuMD4wMgV7JpybHw%2FeBx87o9uwJBCbDTImMbXIosXoNCSVYjo6W1%2BAyEqW7P%2BWt9Vq7X%2B6pObdscTWuvTCdKQiwuPQrl%2BfPEinw%2FLdjgLS8edXk%2BynRR4h3Un4NYrnKaTOQ%2F%2BwW%2FcGzYi1k2Q03t%2B29zfBuzV%2Blp%2BGsvUgANBkv3kwWE%2B3leF0qX9ET81AAyip7sNlbrx6vJV3yZV7DOsVkdrh7IDnbzt33aQ9H5W4p4aghqeZQG6NDfvMBpf6N97qADR4IiKA1VV0U6DFw1I2X8v8a42jehEiWNJe%2FO4Oc4WvkM1FCaqpBWr4%2Bgs8k9ihPGgKZIzjPZEkVzDZ8IK%2BBjqkAdLx0jshD6tPZBhJ12lZujXNKv3u08Hung7QBb4VyhivatpZcjfsgs6NjDnjs8boIhBzz4oiYRRuZqCUQBQ8ysDO05LssCV3LzXUhVDt%2BiIN%2F1FAyDkxmxtyc5Xh6yhfhiuX0A72LF1tNyorl6jA1Y6t9XtwKUTJa2xWTIMEq%2BHv5mDa%2BwTYl5S1if5S7G3b1yn4g4BporVPIGqfsT0n%2FnCUPlqx&X-Amz-Signature=9e3666b6e1415f233f0fc0a8345c046962aefc49eae2e52b665a2b6d6dfdef9b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
