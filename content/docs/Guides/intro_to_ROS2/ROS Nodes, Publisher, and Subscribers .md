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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DPELIBL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDTT9qzYGO1TmXa0ofcJ3teBYqYrv9kIgTM%2BkEJNcx%2FWwIhAKFRoBbfguv2ASvgT%2BYAGktxCaWScNLh7h8hl7es1CAmKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTfYOGaNNr%2BYp4qJIq3AO%2B%2FH4IZRyi1w121sUlsa2iQqCXI2hjjiP9mHioPn494disaPR4CTkZcCFQG39Gh9VzetjgC107gX4N8q5SSViGvJ0MRQGEk%2FyCXmKds%2B2AGgTsvTubx8aBPundPAi%2B%2Fe3g5Oq7Rnc3jTszH7rjb%2FNxEPwv1ANvjQslVq2HbZtxoFDuaCzRBBV7VhmaQZXGk9WzOMApeBYk01N81f8eOGGcaxByWdx8QYjTqeIw%2BUBo6tSGj5rt3oCkKLSb04MZGsWayqOztB0PGZDt%2FtbeVAe1EYU1zPwBzSXXUvF7F1bdLeJNcCcEInGWoby9WqNPpNgRFGufLF1eLjgDWPocjQQ8gFKsLuASPJbgohGsBIU4wX2t%2FyGZqFl6DiVPG6jlkQ8vqNuUrVlN6lNEaBAU16rdcwRF%2FMTBIKt6z43Yv5od5YWMvECIdKFUuLn2UEIqxQAo8%2BdVauLvYzQ3cOz3fOjR5N5IZDeqQt1NVw2KRDaBFItIkFCGIYdJ80ncaKqjb9t%2BNW0BtQPFbPX1aHlkw43Ang%2F16bNAprtFO88QdT8nZakz5zWFLvD5TlswLrMXr5f02fMSBbw2OSua2zNNcCDywBwzTWzXjxK54JPrrVtBSWxgHDaZufHaCj6N3TDtt7bBBjqkAS6iD4BvPnYiOXp%2BfIf1%2FqVpCu3bvuIQ6D4ZxoHAU5F41QVbulfpS4ptYA48zh4%2B5mapNY1qwHw9Ehorp9BsyrLN%2Fe%2BvyqDaKx9OZmc9IgOHGOSFq5O2EDmoNUPv%2B1D7bDYMt3FWtOa8CxjRo69bTf0Ku4V3ym2yEBWYXdGVuDLkoWGchs%2Fd1C8e3onMNVbEm4%2BKd7LOUIP1oNg3BqpvrruU8ils&X-Amz-Signature=7dbfd7d328634e6a6d873add2363d40e76b235dac3721e6b9c641329ba46210c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DPELIBL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDTT9qzYGO1TmXa0ofcJ3teBYqYrv9kIgTM%2BkEJNcx%2FWwIhAKFRoBbfguv2ASvgT%2BYAGktxCaWScNLh7h8hl7es1CAmKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTfYOGaNNr%2BYp4qJIq3AO%2B%2FH4IZRyi1w121sUlsa2iQqCXI2hjjiP9mHioPn494disaPR4CTkZcCFQG39Gh9VzetjgC107gX4N8q5SSViGvJ0MRQGEk%2FyCXmKds%2B2AGgTsvTubx8aBPundPAi%2B%2Fe3g5Oq7Rnc3jTszH7rjb%2FNxEPwv1ANvjQslVq2HbZtxoFDuaCzRBBV7VhmaQZXGk9WzOMApeBYk01N81f8eOGGcaxByWdx8QYjTqeIw%2BUBo6tSGj5rt3oCkKLSb04MZGsWayqOztB0PGZDt%2FtbeVAe1EYU1zPwBzSXXUvF7F1bdLeJNcCcEInGWoby9WqNPpNgRFGufLF1eLjgDWPocjQQ8gFKsLuASPJbgohGsBIU4wX2t%2FyGZqFl6DiVPG6jlkQ8vqNuUrVlN6lNEaBAU16rdcwRF%2FMTBIKt6z43Yv5od5YWMvECIdKFUuLn2UEIqxQAo8%2BdVauLvYzQ3cOz3fOjR5N5IZDeqQt1NVw2KRDaBFItIkFCGIYdJ80ncaKqjb9t%2BNW0BtQPFbPX1aHlkw43Ang%2F16bNAprtFO88QdT8nZakz5zWFLvD5TlswLrMXr5f02fMSBbw2OSua2zNNcCDywBwzTWzXjxK54JPrrVtBSWxgHDaZufHaCj6N3TDtt7bBBjqkAS6iD4BvPnYiOXp%2BfIf1%2FqVpCu3bvuIQ6D4ZxoHAU5F41QVbulfpS4ptYA48zh4%2B5mapNY1qwHw9Ehorp9BsyrLN%2Fe%2BvyqDaKx9OZmc9IgOHGOSFq5O2EDmoNUPv%2B1D7bDYMt3FWtOa8CxjRo69bTf0Ku4V3ym2yEBWYXdGVuDLkoWGchs%2Fd1C8e3onMNVbEm4%2BKd7LOUIP1oNg3BqpvrruU8ils&X-Amz-Signature=d79c7feed98f1513430aa793f980df61429643ee0f9178e5f253fff3bd0df673&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DPELIBL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDTT9qzYGO1TmXa0ofcJ3teBYqYrv9kIgTM%2BkEJNcx%2FWwIhAKFRoBbfguv2ASvgT%2BYAGktxCaWScNLh7h8hl7es1CAmKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTfYOGaNNr%2BYp4qJIq3AO%2B%2FH4IZRyi1w121sUlsa2iQqCXI2hjjiP9mHioPn494disaPR4CTkZcCFQG39Gh9VzetjgC107gX4N8q5SSViGvJ0MRQGEk%2FyCXmKds%2B2AGgTsvTubx8aBPundPAi%2B%2Fe3g5Oq7Rnc3jTszH7rjb%2FNxEPwv1ANvjQslVq2HbZtxoFDuaCzRBBV7VhmaQZXGk9WzOMApeBYk01N81f8eOGGcaxByWdx8QYjTqeIw%2BUBo6tSGj5rt3oCkKLSb04MZGsWayqOztB0PGZDt%2FtbeVAe1EYU1zPwBzSXXUvF7F1bdLeJNcCcEInGWoby9WqNPpNgRFGufLF1eLjgDWPocjQQ8gFKsLuASPJbgohGsBIU4wX2t%2FyGZqFl6DiVPG6jlkQ8vqNuUrVlN6lNEaBAU16rdcwRF%2FMTBIKt6z43Yv5od5YWMvECIdKFUuLn2UEIqxQAo8%2BdVauLvYzQ3cOz3fOjR5N5IZDeqQt1NVw2KRDaBFItIkFCGIYdJ80ncaKqjb9t%2BNW0BtQPFbPX1aHlkw43Ang%2F16bNAprtFO88QdT8nZakz5zWFLvD5TlswLrMXr5f02fMSBbw2OSua2zNNcCDywBwzTWzXjxK54JPrrVtBSWxgHDaZufHaCj6N3TDtt7bBBjqkAS6iD4BvPnYiOXp%2BfIf1%2FqVpCu3bvuIQ6D4ZxoHAU5F41QVbulfpS4ptYA48zh4%2B5mapNY1qwHw9Ehorp9BsyrLN%2Fe%2BvyqDaKx9OZmc9IgOHGOSFq5O2EDmoNUPv%2B1D7bDYMt3FWtOa8CxjRo69bTf0Ku4V3ym2yEBWYXdGVuDLkoWGchs%2Fd1C8e3onMNVbEm4%2BKd7LOUIP1oNg3BqpvrruU8ils&X-Amz-Signature=82c5aa4fc4be75e8da7d443f70c6f705d76bb3aeae5bc6310e624c1f916f9e68&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DPELIBL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDTT9qzYGO1TmXa0ofcJ3teBYqYrv9kIgTM%2BkEJNcx%2FWwIhAKFRoBbfguv2ASvgT%2BYAGktxCaWScNLh7h8hl7es1CAmKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTfYOGaNNr%2BYp4qJIq3AO%2B%2FH4IZRyi1w121sUlsa2iQqCXI2hjjiP9mHioPn494disaPR4CTkZcCFQG39Gh9VzetjgC107gX4N8q5SSViGvJ0MRQGEk%2FyCXmKds%2B2AGgTsvTubx8aBPundPAi%2B%2Fe3g5Oq7Rnc3jTszH7rjb%2FNxEPwv1ANvjQslVq2HbZtxoFDuaCzRBBV7VhmaQZXGk9WzOMApeBYk01N81f8eOGGcaxByWdx8QYjTqeIw%2BUBo6tSGj5rt3oCkKLSb04MZGsWayqOztB0PGZDt%2FtbeVAe1EYU1zPwBzSXXUvF7F1bdLeJNcCcEInGWoby9WqNPpNgRFGufLF1eLjgDWPocjQQ8gFKsLuASPJbgohGsBIU4wX2t%2FyGZqFl6DiVPG6jlkQ8vqNuUrVlN6lNEaBAU16rdcwRF%2FMTBIKt6z43Yv5od5YWMvECIdKFUuLn2UEIqxQAo8%2BdVauLvYzQ3cOz3fOjR5N5IZDeqQt1NVw2KRDaBFItIkFCGIYdJ80ncaKqjb9t%2BNW0BtQPFbPX1aHlkw43Ang%2F16bNAprtFO88QdT8nZakz5zWFLvD5TlswLrMXr5f02fMSBbw2OSua2zNNcCDywBwzTWzXjxK54JPrrVtBSWxgHDaZufHaCj6N3TDtt7bBBjqkAS6iD4BvPnYiOXp%2BfIf1%2FqVpCu3bvuIQ6D4ZxoHAU5F41QVbulfpS4ptYA48zh4%2B5mapNY1qwHw9Ehorp9BsyrLN%2Fe%2BvyqDaKx9OZmc9IgOHGOSFq5O2EDmoNUPv%2B1D7bDYMt3FWtOa8CxjRo69bTf0Ku4V3ym2yEBWYXdGVuDLkoWGchs%2Fd1C8e3onMNVbEm4%2BKd7LOUIP1oNg3BqpvrruU8ils&X-Amz-Signature=f0e4c2ed8c8562a56bc7c163f7f192438d3c9da58fef35222f685ed45e474671&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DPELIBL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDTT9qzYGO1TmXa0ofcJ3teBYqYrv9kIgTM%2BkEJNcx%2FWwIhAKFRoBbfguv2ASvgT%2BYAGktxCaWScNLh7h8hl7es1CAmKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTfYOGaNNr%2BYp4qJIq3AO%2B%2FH4IZRyi1w121sUlsa2iQqCXI2hjjiP9mHioPn494disaPR4CTkZcCFQG39Gh9VzetjgC107gX4N8q5SSViGvJ0MRQGEk%2FyCXmKds%2B2AGgTsvTubx8aBPundPAi%2B%2Fe3g5Oq7Rnc3jTszH7rjb%2FNxEPwv1ANvjQslVq2HbZtxoFDuaCzRBBV7VhmaQZXGk9WzOMApeBYk01N81f8eOGGcaxByWdx8QYjTqeIw%2BUBo6tSGj5rt3oCkKLSb04MZGsWayqOztB0PGZDt%2FtbeVAe1EYU1zPwBzSXXUvF7F1bdLeJNcCcEInGWoby9WqNPpNgRFGufLF1eLjgDWPocjQQ8gFKsLuASPJbgohGsBIU4wX2t%2FyGZqFl6DiVPG6jlkQ8vqNuUrVlN6lNEaBAU16rdcwRF%2FMTBIKt6z43Yv5od5YWMvECIdKFUuLn2UEIqxQAo8%2BdVauLvYzQ3cOz3fOjR5N5IZDeqQt1NVw2KRDaBFItIkFCGIYdJ80ncaKqjb9t%2BNW0BtQPFbPX1aHlkw43Ang%2F16bNAprtFO88QdT8nZakz5zWFLvD5TlswLrMXr5f02fMSBbw2OSua2zNNcCDywBwzTWzXjxK54JPrrVtBSWxgHDaZufHaCj6N3TDtt7bBBjqkAS6iD4BvPnYiOXp%2BfIf1%2FqVpCu3bvuIQ6D4ZxoHAU5F41QVbulfpS4ptYA48zh4%2B5mapNY1qwHw9Ehorp9BsyrLN%2Fe%2BvyqDaKx9OZmc9IgOHGOSFq5O2EDmoNUPv%2B1D7bDYMt3FWtOa8CxjRo69bTf0Ku4V3ym2yEBWYXdGVuDLkoWGchs%2Fd1C8e3onMNVbEm4%2BKd7LOUIP1oNg3BqpvrruU8ils&X-Amz-Signature=14bdf727c8bd90cf4fa26a31328d3e053808036781cdba3e80c635b87c090196&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DPELIBL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDTT9qzYGO1TmXa0ofcJ3teBYqYrv9kIgTM%2BkEJNcx%2FWwIhAKFRoBbfguv2ASvgT%2BYAGktxCaWScNLh7h8hl7es1CAmKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTfYOGaNNr%2BYp4qJIq3AO%2B%2FH4IZRyi1w121sUlsa2iQqCXI2hjjiP9mHioPn494disaPR4CTkZcCFQG39Gh9VzetjgC107gX4N8q5SSViGvJ0MRQGEk%2FyCXmKds%2B2AGgTsvTubx8aBPundPAi%2B%2Fe3g5Oq7Rnc3jTszH7rjb%2FNxEPwv1ANvjQslVq2HbZtxoFDuaCzRBBV7VhmaQZXGk9WzOMApeBYk01N81f8eOGGcaxByWdx8QYjTqeIw%2BUBo6tSGj5rt3oCkKLSb04MZGsWayqOztB0PGZDt%2FtbeVAe1EYU1zPwBzSXXUvF7F1bdLeJNcCcEInGWoby9WqNPpNgRFGufLF1eLjgDWPocjQQ8gFKsLuASPJbgohGsBIU4wX2t%2FyGZqFl6DiVPG6jlkQ8vqNuUrVlN6lNEaBAU16rdcwRF%2FMTBIKt6z43Yv5od5YWMvECIdKFUuLn2UEIqxQAo8%2BdVauLvYzQ3cOz3fOjR5N5IZDeqQt1NVw2KRDaBFItIkFCGIYdJ80ncaKqjb9t%2BNW0BtQPFbPX1aHlkw43Ang%2F16bNAprtFO88QdT8nZakz5zWFLvD5TlswLrMXr5f02fMSBbw2OSua2zNNcCDywBwzTWzXjxK54JPrrVtBSWxgHDaZufHaCj6N3TDtt7bBBjqkAS6iD4BvPnYiOXp%2BfIf1%2FqVpCu3bvuIQ6D4ZxoHAU5F41QVbulfpS4ptYA48zh4%2B5mapNY1qwHw9Ehorp9BsyrLN%2Fe%2BvyqDaKx9OZmc9IgOHGOSFq5O2EDmoNUPv%2B1D7bDYMt3FWtOa8CxjRo69bTf0Ku4V3ym2yEBWYXdGVuDLkoWGchs%2Fd1C8e3onMNVbEm4%2BKd7LOUIP1oNg3BqpvrruU8ils&X-Amz-Signature=609193e3e4de1deeb26485bedf18fa82ff2c0a7cf86d34eee3e4293d384b0fc4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DPELIBL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDTT9qzYGO1TmXa0ofcJ3teBYqYrv9kIgTM%2BkEJNcx%2FWwIhAKFRoBbfguv2ASvgT%2BYAGktxCaWScNLh7h8hl7es1CAmKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTfYOGaNNr%2BYp4qJIq3AO%2B%2FH4IZRyi1w121sUlsa2iQqCXI2hjjiP9mHioPn494disaPR4CTkZcCFQG39Gh9VzetjgC107gX4N8q5SSViGvJ0MRQGEk%2FyCXmKds%2B2AGgTsvTubx8aBPundPAi%2B%2Fe3g5Oq7Rnc3jTszH7rjb%2FNxEPwv1ANvjQslVq2HbZtxoFDuaCzRBBV7VhmaQZXGk9WzOMApeBYk01N81f8eOGGcaxByWdx8QYjTqeIw%2BUBo6tSGj5rt3oCkKLSb04MZGsWayqOztB0PGZDt%2FtbeVAe1EYU1zPwBzSXXUvF7F1bdLeJNcCcEInGWoby9WqNPpNgRFGufLF1eLjgDWPocjQQ8gFKsLuASPJbgohGsBIU4wX2t%2FyGZqFl6DiVPG6jlkQ8vqNuUrVlN6lNEaBAU16rdcwRF%2FMTBIKt6z43Yv5od5YWMvECIdKFUuLn2UEIqxQAo8%2BdVauLvYzQ3cOz3fOjR5N5IZDeqQt1NVw2KRDaBFItIkFCGIYdJ80ncaKqjb9t%2BNW0BtQPFbPX1aHlkw43Ang%2F16bNAprtFO88QdT8nZakz5zWFLvD5TlswLrMXr5f02fMSBbw2OSua2zNNcCDywBwzTWzXjxK54JPrrVtBSWxgHDaZufHaCj6N3TDtt7bBBjqkAS6iD4BvPnYiOXp%2BfIf1%2FqVpCu3bvuIQ6D4ZxoHAU5F41QVbulfpS4ptYA48zh4%2B5mapNY1qwHw9Ehorp9BsyrLN%2Fe%2BvyqDaKx9OZmc9IgOHGOSFq5O2EDmoNUPv%2B1D7bDYMt3FWtOa8CxjRo69bTf0Ku4V3ym2yEBWYXdGVuDLkoWGchs%2Fd1C8e3onMNVbEm4%2BKd7LOUIP1oNg3BqpvrruU8ils&X-Amz-Signature=45a1da4ca658f6db07c0fe62671e520d9f4337efb1fd0d4bd0d373c972319d01&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DPELIBL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDTT9qzYGO1TmXa0ofcJ3teBYqYrv9kIgTM%2BkEJNcx%2FWwIhAKFRoBbfguv2ASvgT%2BYAGktxCaWScNLh7h8hl7es1CAmKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTfYOGaNNr%2BYp4qJIq3AO%2B%2FH4IZRyi1w121sUlsa2iQqCXI2hjjiP9mHioPn494disaPR4CTkZcCFQG39Gh9VzetjgC107gX4N8q5SSViGvJ0MRQGEk%2FyCXmKds%2B2AGgTsvTubx8aBPundPAi%2B%2Fe3g5Oq7Rnc3jTszH7rjb%2FNxEPwv1ANvjQslVq2HbZtxoFDuaCzRBBV7VhmaQZXGk9WzOMApeBYk01N81f8eOGGcaxByWdx8QYjTqeIw%2BUBo6tSGj5rt3oCkKLSb04MZGsWayqOztB0PGZDt%2FtbeVAe1EYU1zPwBzSXXUvF7F1bdLeJNcCcEInGWoby9WqNPpNgRFGufLF1eLjgDWPocjQQ8gFKsLuASPJbgohGsBIU4wX2t%2FyGZqFl6DiVPG6jlkQ8vqNuUrVlN6lNEaBAU16rdcwRF%2FMTBIKt6z43Yv5od5YWMvECIdKFUuLn2UEIqxQAo8%2BdVauLvYzQ3cOz3fOjR5N5IZDeqQt1NVw2KRDaBFItIkFCGIYdJ80ncaKqjb9t%2BNW0BtQPFbPX1aHlkw43Ang%2F16bNAprtFO88QdT8nZakz5zWFLvD5TlswLrMXr5f02fMSBbw2OSua2zNNcCDywBwzTWzXjxK54JPrrVtBSWxgHDaZufHaCj6N3TDtt7bBBjqkAS6iD4BvPnYiOXp%2BfIf1%2FqVpCu3bvuIQ6D4ZxoHAU5F41QVbulfpS4ptYA48zh4%2B5mapNY1qwHw9Ehorp9BsyrLN%2Fe%2BvyqDaKx9OZmc9IgOHGOSFq5O2EDmoNUPv%2B1D7bDYMt3FWtOa8CxjRo69bTf0Ku4V3ym2yEBWYXdGVuDLkoWGchs%2Fd1C8e3onMNVbEm4%2BKd7LOUIP1oNg3BqpvrruU8ils&X-Amz-Signature=4c009e72e94ecd2ff4b5f9598472a1d22542df03e67219d65f3b1a7e51ffdb05&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
