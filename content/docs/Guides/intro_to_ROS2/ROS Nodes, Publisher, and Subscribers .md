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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH7ZXYRA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCe26YWIQg8HRTf6uWPYa5JvGcNGOWmkBICSiD8Pc2tpQIhAO8AAGu6F4%2Bn7aA8Mtr4J0jfkzofbVRBIX2JybZHz%2FKGKv8DCFcQABoMNjM3NDIzMTgzODA1IgyfP8iwfx7K6xMGesAq3ANHHc0gZvHIszpJMMos6DfyuMpofdmF8P3u%2BIGZ16xcFuD9PRoct6xGx91sjpCMuFhGLqvvivQd2YkZ%2BDDDhvnR7gllyxXP34WKkzftst5mHidJDVltubyxwcnmjFX2ykFXCaP4jD7EVB8ok4JjGRhd2ekCci20SLrYUAG6jb8SbddRml6x632eAGTUheSuPuA%2Br6RaIBOLnuUmemIjHe12QwqbhpZ6g1M2A3bGe2qh9d8CqR4qxeNl4kYHk3xI7SWPrwZae5whfh5cl%2BA8jWK%2BkCyljuHXt%2FhsqojPQmsTpeS6tMPM4xvm%2FVsvXzLUnaOuj5arS%2F6fsQwiD570DbRAwb47GGiVUvVxcic1dH6kqGC6eDmgg46zu2tTebwF6zrFO5uUuap8CzAPo7p2RFXKK%2BP6qfVOwf8df5X6yrWzFLw05OabSRAbj7sIyW8Mm6CvNJYoI9%2FTj5CGl0VCREmzcD%2FqKsXua83cPMl2LfVrsortHV51CNKLg6wRQiekm40caEp%2BKWauE6TLOWVJIb1xHeFyyceq0fyUFsY9vjKeKQc1uLUjdsP1bT5Eb9%2FGsnzf5G%2FI6w64GORHZUnfp6DtGWfR1Fr%2BrObNJ99OTzk9TfwIeutEfjmLCyyOBjDp%2FcW9BjqkASII6ep44d8ONCepkfhQ%2BrvH%2BXnVQeFl4rBBa84fz24GLg1o2VLNGUV0McZGHWyC3XCXCCSCu9AeLK14r0X1Qce%2FMQKbjWr30XSSaQGIK0UxyIbSsAEwMoXv84S%2FcnogNaIOqfgGNY2kpmiwFJciNQW2%2FX7Tad2BIs0rSHp%2BSmuz2uWePKwNe8%2BySEQ5IBVDRU%2BFR214B1cFGE5Qg7hDFOviy9HR&X-Amz-Signature=5ec7e0fe6039506aaaca604a6253e6cb58b449d5374e08a23936e3156ff8df23&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH7ZXYRA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCe26YWIQg8HRTf6uWPYa5JvGcNGOWmkBICSiD8Pc2tpQIhAO8AAGu6F4%2Bn7aA8Mtr4J0jfkzofbVRBIX2JybZHz%2FKGKv8DCFcQABoMNjM3NDIzMTgzODA1IgyfP8iwfx7K6xMGesAq3ANHHc0gZvHIszpJMMos6DfyuMpofdmF8P3u%2BIGZ16xcFuD9PRoct6xGx91sjpCMuFhGLqvvivQd2YkZ%2BDDDhvnR7gllyxXP34WKkzftst5mHidJDVltubyxwcnmjFX2ykFXCaP4jD7EVB8ok4JjGRhd2ekCci20SLrYUAG6jb8SbddRml6x632eAGTUheSuPuA%2Br6RaIBOLnuUmemIjHe12QwqbhpZ6g1M2A3bGe2qh9d8CqR4qxeNl4kYHk3xI7SWPrwZae5whfh5cl%2BA8jWK%2BkCyljuHXt%2FhsqojPQmsTpeS6tMPM4xvm%2FVsvXzLUnaOuj5arS%2F6fsQwiD570DbRAwb47GGiVUvVxcic1dH6kqGC6eDmgg46zu2tTebwF6zrFO5uUuap8CzAPo7p2RFXKK%2BP6qfVOwf8df5X6yrWzFLw05OabSRAbj7sIyW8Mm6CvNJYoI9%2FTj5CGl0VCREmzcD%2FqKsXua83cPMl2LfVrsortHV51CNKLg6wRQiekm40caEp%2BKWauE6TLOWVJIb1xHeFyyceq0fyUFsY9vjKeKQc1uLUjdsP1bT5Eb9%2FGsnzf5G%2FI6w64GORHZUnfp6DtGWfR1Fr%2BrObNJ99OTzk9TfwIeutEfjmLCyyOBjDp%2FcW9BjqkASII6ep44d8ONCepkfhQ%2BrvH%2BXnVQeFl4rBBa84fz24GLg1o2VLNGUV0McZGHWyC3XCXCCSCu9AeLK14r0X1Qce%2FMQKbjWr30XSSaQGIK0UxyIbSsAEwMoXv84S%2FcnogNaIOqfgGNY2kpmiwFJciNQW2%2FX7Tad2BIs0rSHp%2BSmuz2uWePKwNe8%2BySEQ5IBVDRU%2BFR214B1cFGE5Qg7hDFOviy9HR&X-Amz-Signature=35b8bf7f4752d1bf4eeac11257a9e65d54cdc70d1bc907f42067c76408b4cd42&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH7ZXYRA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCe26YWIQg8HRTf6uWPYa5JvGcNGOWmkBICSiD8Pc2tpQIhAO8AAGu6F4%2Bn7aA8Mtr4J0jfkzofbVRBIX2JybZHz%2FKGKv8DCFcQABoMNjM3NDIzMTgzODA1IgyfP8iwfx7K6xMGesAq3ANHHc0gZvHIszpJMMos6DfyuMpofdmF8P3u%2BIGZ16xcFuD9PRoct6xGx91sjpCMuFhGLqvvivQd2YkZ%2BDDDhvnR7gllyxXP34WKkzftst5mHidJDVltubyxwcnmjFX2ykFXCaP4jD7EVB8ok4JjGRhd2ekCci20SLrYUAG6jb8SbddRml6x632eAGTUheSuPuA%2Br6RaIBOLnuUmemIjHe12QwqbhpZ6g1M2A3bGe2qh9d8CqR4qxeNl4kYHk3xI7SWPrwZae5whfh5cl%2BA8jWK%2BkCyljuHXt%2FhsqojPQmsTpeS6tMPM4xvm%2FVsvXzLUnaOuj5arS%2F6fsQwiD570DbRAwb47GGiVUvVxcic1dH6kqGC6eDmgg46zu2tTebwF6zrFO5uUuap8CzAPo7p2RFXKK%2BP6qfVOwf8df5X6yrWzFLw05OabSRAbj7sIyW8Mm6CvNJYoI9%2FTj5CGl0VCREmzcD%2FqKsXua83cPMl2LfVrsortHV51CNKLg6wRQiekm40caEp%2BKWauE6TLOWVJIb1xHeFyyceq0fyUFsY9vjKeKQc1uLUjdsP1bT5Eb9%2FGsnzf5G%2FI6w64GORHZUnfp6DtGWfR1Fr%2BrObNJ99OTzk9TfwIeutEfjmLCyyOBjDp%2FcW9BjqkASII6ep44d8ONCepkfhQ%2BrvH%2BXnVQeFl4rBBa84fz24GLg1o2VLNGUV0McZGHWyC3XCXCCSCu9AeLK14r0X1Qce%2FMQKbjWr30XSSaQGIK0UxyIbSsAEwMoXv84S%2FcnogNaIOqfgGNY2kpmiwFJciNQW2%2FX7Tad2BIs0rSHp%2BSmuz2uWePKwNe8%2BySEQ5IBVDRU%2BFR214B1cFGE5Qg7hDFOviy9HR&X-Amz-Signature=e8b801e7c0ef0517d8ff9750199a71137cc0ac3919fa8b593c1dfb9053bfdabd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH7ZXYRA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCe26YWIQg8HRTf6uWPYa5JvGcNGOWmkBICSiD8Pc2tpQIhAO8AAGu6F4%2Bn7aA8Mtr4J0jfkzofbVRBIX2JybZHz%2FKGKv8DCFcQABoMNjM3NDIzMTgzODA1IgyfP8iwfx7K6xMGesAq3ANHHc0gZvHIszpJMMos6DfyuMpofdmF8P3u%2BIGZ16xcFuD9PRoct6xGx91sjpCMuFhGLqvvivQd2YkZ%2BDDDhvnR7gllyxXP34WKkzftst5mHidJDVltubyxwcnmjFX2ykFXCaP4jD7EVB8ok4JjGRhd2ekCci20SLrYUAG6jb8SbddRml6x632eAGTUheSuPuA%2Br6RaIBOLnuUmemIjHe12QwqbhpZ6g1M2A3bGe2qh9d8CqR4qxeNl4kYHk3xI7SWPrwZae5whfh5cl%2BA8jWK%2BkCyljuHXt%2FhsqojPQmsTpeS6tMPM4xvm%2FVsvXzLUnaOuj5arS%2F6fsQwiD570DbRAwb47GGiVUvVxcic1dH6kqGC6eDmgg46zu2tTebwF6zrFO5uUuap8CzAPo7p2RFXKK%2BP6qfVOwf8df5X6yrWzFLw05OabSRAbj7sIyW8Mm6CvNJYoI9%2FTj5CGl0VCREmzcD%2FqKsXua83cPMl2LfVrsortHV51CNKLg6wRQiekm40caEp%2BKWauE6TLOWVJIb1xHeFyyceq0fyUFsY9vjKeKQc1uLUjdsP1bT5Eb9%2FGsnzf5G%2FI6w64GORHZUnfp6DtGWfR1Fr%2BrObNJ99OTzk9TfwIeutEfjmLCyyOBjDp%2FcW9BjqkASII6ep44d8ONCepkfhQ%2BrvH%2BXnVQeFl4rBBa84fz24GLg1o2VLNGUV0McZGHWyC3XCXCCSCu9AeLK14r0X1Qce%2FMQKbjWr30XSSaQGIK0UxyIbSsAEwMoXv84S%2FcnogNaIOqfgGNY2kpmiwFJciNQW2%2FX7Tad2BIs0rSHp%2BSmuz2uWePKwNe8%2BySEQ5IBVDRU%2BFR214B1cFGE5Qg7hDFOviy9HR&X-Amz-Signature=c755f6d75630fa9002491cbeb109ed178ae0a4645eb4cf3ac5184e6a9794eedb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH7ZXYRA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCe26YWIQg8HRTf6uWPYa5JvGcNGOWmkBICSiD8Pc2tpQIhAO8AAGu6F4%2Bn7aA8Mtr4J0jfkzofbVRBIX2JybZHz%2FKGKv8DCFcQABoMNjM3NDIzMTgzODA1IgyfP8iwfx7K6xMGesAq3ANHHc0gZvHIszpJMMos6DfyuMpofdmF8P3u%2BIGZ16xcFuD9PRoct6xGx91sjpCMuFhGLqvvivQd2YkZ%2BDDDhvnR7gllyxXP34WKkzftst5mHidJDVltubyxwcnmjFX2ykFXCaP4jD7EVB8ok4JjGRhd2ekCci20SLrYUAG6jb8SbddRml6x632eAGTUheSuPuA%2Br6RaIBOLnuUmemIjHe12QwqbhpZ6g1M2A3bGe2qh9d8CqR4qxeNl4kYHk3xI7SWPrwZae5whfh5cl%2BA8jWK%2BkCyljuHXt%2FhsqojPQmsTpeS6tMPM4xvm%2FVsvXzLUnaOuj5arS%2F6fsQwiD570DbRAwb47GGiVUvVxcic1dH6kqGC6eDmgg46zu2tTebwF6zrFO5uUuap8CzAPo7p2RFXKK%2BP6qfVOwf8df5X6yrWzFLw05OabSRAbj7sIyW8Mm6CvNJYoI9%2FTj5CGl0VCREmzcD%2FqKsXua83cPMl2LfVrsortHV51CNKLg6wRQiekm40caEp%2BKWauE6TLOWVJIb1xHeFyyceq0fyUFsY9vjKeKQc1uLUjdsP1bT5Eb9%2FGsnzf5G%2FI6w64GORHZUnfp6DtGWfR1Fr%2BrObNJ99OTzk9TfwIeutEfjmLCyyOBjDp%2FcW9BjqkASII6ep44d8ONCepkfhQ%2BrvH%2BXnVQeFl4rBBa84fz24GLg1o2VLNGUV0McZGHWyC3XCXCCSCu9AeLK14r0X1Qce%2FMQKbjWr30XSSaQGIK0UxyIbSsAEwMoXv84S%2FcnogNaIOqfgGNY2kpmiwFJciNQW2%2FX7Tad2BIs0rSHp%2BSmuz2uWePKwNe8%2BySEQ5IBVDRU%2BFR214B1cFGE5Qg7hDFOviy9HR&X-Amz-Signature=603d37f92861dd01bc12893767a3a6271a501d188d8c417a9848a8aa82cf7273&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH7ZXYRA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCe26YWIQg8HRTf6uWPYa5JvGcNGOWmkBICSiD8Pc2tpQIhAO8AAGu6F4%2Bn7aA8Mtr4J0jfkzofbVRBIX2JybZHz%2FKGKv8DCFcQABoMNjM3NDIzMTgzODA1IgyfP8iwfx7K6xMGesAq3ANHHc0gZvHIszpJMMos6DfyuMpofdmF8P3u%2BIGZ16xcFuD9PRoct6xGx91sjpCMuFhGLqvvivQd2YkZ%2BDDDhvnR7gllyxXP34WKkzftst5mHidJDVltubyxwcnmjFX2ykFXCaP4jD7EVB8ok4JjGRhd2ekCci20SLrYUAG6jb8SbddRml6x632eAGTUheSuPuA%2Br6RaIBOLnuUmemIjHe12QwqbhpZ6g1M2A3bGe2qh9d8CqR4qxeNl4kYHk3xI7SWPrwZae5whfh5cl%2BA8jWK%2BkCyljuHXt%2FhsqojPQmsTpeS6tMPM4xvm%2FVsvXzLUnaOuj5arS%2F6fsQwiD570DbRAwb47GGiVUvVxcic1dH6kqGC6eDmgg46zu2tTebwF6zrFO5uUuap8CzAPo7p2RFXKK%2BP6qfVOwf8df5X6yrWzFLw05OabSRAbj7sIyW8Mm6CvNJYoI9%2FTj5CGl0VCREmzcD%2FqKsXua83cPMl2LfVrsortHV51CNKLg6wRQiekm40caEp%2BKWauE6TLOWVJIb1xHeFyyceq0fyUFsY9vjKeKQc1uLUjdsP1bT5Eb9%2FGsnzf5G%2FI6w64GORHZUnfp6DtGWfR1Fr%2BrObNJ99OTzk9TfwIeutEfjmLCyyOBjDp%2FcW9BjqkASII6ep44d8ONCepkfhQ%2BrvH%2BXnVQeFl4rBBa84fz24GLg1o2VLNGUV0McZGHWyC3XCXCCSCu9AeLK14r0X1Qce%2FMQKbjWr30XSSaQGIK0UxyIbSsAEwMoXv84S%2FcnogNaIOqfgGNY2kpmiwFJciNQW2%2FX7Tad2BIs0rSHp%2BSmuz2uWePKwNe8%2BySEQ5IBVDRU%2BFR214B1cFGE5Qg7hDFOviy9HR&X-Amz-Signature=c75c8e7e4cb2272ea33c3a902fd4ce5f7bae1e5ed16538a8e48a74f98c230cd3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH7ZXYRA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCe26YWIQg8HRTf6uWPYa5JvGcNGOWmkBICSiD8Pc2tpQIhAO8AAGu6F4%2Bn7aA8Mtr4J0jfkzofbVRBIX2JybZHz%2FKGKv8DCFcQABoMNjM3NDIzMTgzODA1IgyfP8iwfx7K6xMGesAq3ANHHc0gZvHIszpJMMos6DfyuMpofdmF8P3u%2BIGZ16xcFuD9PRoct6xGx91sjpCMuFhGLqvvivQd2YkZ%2BDDDhvnR7gllyxXP34WKkzftst5mHidJDVltubyxwcnmjFX2ykFXCaP4jD7EVB8ok4JjGRhd2ekCci20SLrYUAG6jb8SbddRml6x632eAGTUheSuPuA%2Br6RaIBOLnuUmemIjHe12QwqbhpZ6g1M2A3bGe2qh9d8CqR4qxeNl4kYHk3xI7SWPrwZae5whfh5cl%2BA8jWK%2BkCyljuHXt%2FhsqojPQmsTpeS6tMPM4xvm%2FVsvXzLUnaOuj5arS%2F6fsQwiD570DbRAwb47GGiVUvVxcic1dH6kqGC6eDmgg46zu2tTebwF6zrFO5uUuap8CzAPo7p2RFXKK%2BP6qfVOwf8df5X6yrWzFLw05OabSRAbj7sIyW8Mm6CvNJYoI9%2FTj5CGl0VCREmzcD%2FqKsXua83cPMl2LfVrsortHV51CNKLg6wRQiekm40caEp%2BKWauE6TLOWVJIb1xHeFyyceq0fyUFsY9vjKeKQc1uLUjdsP1bT5Eb9%2FGsnzf5G%2FI6w64GORHZUnfp6DtGWfR1Fr%2BrObNJ99OTzk9TfwIeutEfjmLCyyOBjDp%2FcW9BjqkASII6ep44d8ONCepkfhQ%2BrvH%2BXnVQeFl4rBBa84fz24GLg1o2VLNGUV0McZGHWyC3XCXCCSCu9AeLK14r0X1Qce%2FMQKbjWr30XSSaQGIK0UxyIbSsAEwMoXv84S%2FcnogNaIOqfgGNY2kpmiwFJciNQW2%2FX7Tad2BIs0rSHp%2BSmuz2uWePKwNe8%2BySEQ5IBVDRU%2BFR214B1cFGE5Qg7hDFOviy9HR&X-Amz-Signature=cf9cea526f84b996ccd8fb281ae6398c7abe6f53a94ed401a21072c58a15d3c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH7ZXYRA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCe26YWIQg8HRTf6uWPYa5JvGcNGOWmkBICSiD8Pc2tpQIhAO8AAGu6F4%2Bn7aA8Mtr4J0jfkzofbVRBIX2JybZHz%2FKGKv8DCFcQABoMNjM3NDIzMTgzODA1IgyfP8iwfx7K6xMGesAq3ANHHc0gZvHIszpJMMos6DfyuMpofdmF8P3u%2BIGZ16xcFuD9PRoct6xGx91sjpCMuFhGLqvvivQd2YkZ%2BDDDhvnR7gllyxXP34WKkzftst5mHidJDVltubyxwcnmjFX2ykFXCaP4jD7EVB8ok4JjGRhd2ekCci20SLrYUAG6jb8SbddRml6x632eAGTUheSuPuA%2Br6RaIBOLnuUmemIjHe12QwqbhpZ6g1M2A3bGe2qh9d8CqR4qxeNl4kYHk3xI7SWPrwZae5whfh5cl%2BA8jWK%2BkCyljuHXt%2FhsqojPQmsTpeS6tMPM4xvm%2FVsvXzLUnaOuj5arS%2F6fsQwiD570DbRAwb47GGiVUvVxcic1dH6kqGC6eDmgg46zu2tTebwF6zrFO5uUuap8CzAPo7p2RFXKK%2BP6qfVOwf8df5X6yrWzFLw05OabSRAbj7sIyW8Mm6CvNJYoI9%2FTj5CGl0VCREmzcD%2FqKsXua83cPMl2LfVrsortHV51CNKLg6wRQiekm40caEp%2BKWauE6TLOWVJIb1xHeFyyceq0fyUFsY9vjKeKQc1uLUjdsP1bT5Eb9%2FGsnzf5G%2FI6w64GORHZUnfp6DtGWfR1Fr%2BrObNJ99OTzk9TfwIeutEfjmLCyyOBjDp%2FcW9BjqkASII6ep44d8ONCepkfhQ%2BrvH%2BXnVQeFl4rBBa84fz24GLg1o2VLNGUV0McZGHWyC3XCXCCSCu9AeLK14r0X1Qce%2FMQKbjWr30XSSaQGIK0UxyIbSsAEwMoXv84S%2FcnogNaIOqfgGNY2kpmiwFJciNQW2%2FX7Tad2BIs0rSHp%2BSmuz2uWePKwNe8%2BySEQ5IBVDRU%2BFR214B1cFGE5Qg7hDFOviy9HR&X-Amz-Signature=c79a010f421f4b21ee668944bc40cb41ff19e211bcb362d716a04eb865b15bae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
