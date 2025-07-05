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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGA7ENSZ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIDZn8cMi3ZxqTsf%2F8JQegmDB6WN1vCkrsMMm%2BEQ8rXxHAiEAtfD3WwJPXKwc%2FmzI95GKvNfA0Tp6eE46%2BNKos1qXWzUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJOGdphZ9jatsO4rVircA2DIItmcL9vdSt%2Ft3qRRzbinQreXV5y0OWwfdMGRouOQApT27Zsihzh4GwI144IJ4eSdskmihOg0N15T2Fu11rGGr9o1FYu3qFyBD2YhCeE7I7kNPxTgWi8Xy9Oaj2t3OptnV8T0wS09j90dGMyxy4yN9JcIMMDufotsb7QGEdP3oKZOQy94Azuol6lEtvkoKUbWKLYWJZjfOcydwYTE9dlL17GgEOOyRJk%2BH5vozxX418ZrjspAReA6ak4Bb%2F9u%2FJuutEaqiPMk6E5NaQeQjS7e0AKeOtGF1EtWpoEp7JjZ4v5S%2FpPistqw7Ey6FpnHP9sFUmEjOoraA7DxDsvCz6b5hgwXfbEBYjEOQynA8KSlCafI9%2B7JI9dkTwKkBe%2FjEopzLJ5fO0ubJqSY2TAGAN4VIbKpjOXBxt3CUv8BvzWD74LAQj2eycGUnk5bQYeER%2BgG9XfLvsVINq%2B9VW%2BUOfkDi8ba9XgnfCaU6diazTOmj2K2xBGKrJqywUx%2Ba0iA23wBw41TM%2FijUDavo%2FplII7VM4I44naMFGnCa6ucol%2FRaN9tevjkHV0CbulG7AUzCzr%2BntpjZ5lqVpqIA7j2hGTEaWfmz%2FcR9zL0QRVlxG%2FgLT7HurS814G3VqOeMI7OpMMGOqUBxiStVPgWXfmJH5X%2FV16sA2%2BrsQu%2FBQZ9vLSpV621XYlpptK9EUEoOtIx6QodOA0SdTogIvsZaH4SCQ%2Bp6q0rM7fFkVSpfweOg4sMgc7QWwilg9K8dmRyIBcmasp9MRYBhnigbCT4cH5QBlAQ1PwA85See0%2F3KGq2WTPXu0i8SDG6C0pvklSHiCPswSc4%2FgX53YMvNG9cBV1PAI8jcN6O%2FxpO0Ihp&X-Amz-Signature=00070013c79ef6ee614b2d658c708b864e8f4dad111f57d3611535409cd9044f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGA7ENSZ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIDZn8cMi3ZxqTsf%2F8JQegmDB6WN1vCkrsMMm%2BEQ8rXxHAiEAtfD3WwJPXKwc%2FmzI95GKvNfA0Tp6eE46%2BNKos1qXWzUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJOGdphZ9jatsO4rVircA2DIItmcL9vdSt%2Ft3qRRzbinQreXV5y0OWwfdMGRouOQApT27Zsihzh4GwI144IJ4eSdskmihOg0N15T2Fu11rGGr9o1FYu3qFyBD2YhCeE7I7kNPxTgWi8Xy9Oaj2t3OptnV8T0wS09j90dGMyxy4yN9JcIMMDufotsb7QGEdP3oKZOQy94Azuol6lEtvkoKUbWKLYWJZjfOcydwYTE9dlL17GgEOOyRJk%2BH5vozxX418ZrjspAReA6ak4Bb%2F9u%2FJuutEaqiPMk6E5NaQeQjS7e0AKeOtGF1EtWpoEp7JjZ4v5S%2FpPistqw7Ey6FpnHP9sFUmEjOoraA7DxDsvCz6b5hgwXfbEBYjEOQynA8KSlCafI9%2B7JI9dkTwKkBe%2FjEopzLJ5fO0ubJqSY2TAGAN4VIbKpjOXBxt3CUv8BvzWD74LAQj2eycGUnk5bQYeER%2BgG9XfLvsVINq%2B9VW%2BUOfkDi8ba9XgnfCaU6diazTOmj2K2xBGKrJqywUx%2Ba0iA23wBw41TM%2FijUDavo%2FplII7VM4I44naMFGnCa6ucol%2FRaN9tevjkHV0CbulG7AUzCzr%2BntpjZ5lqVpqIA7j2hGTEaWfmz%2FcR9zL0QRVlxG%2FgLT7HurS814G3VqOeMI7OpMMGOqUBxiStVPgWXfmJH5X%2FV16sA2%2BrsQu%2FBQZ9vLSpV621XYlpptK9EUEoOtIx6QodOA0SdTogIvsZaH4SCQ%2Bp6q0rM7fFkVSpfweOg4sMgc7QWwilg9K8dmRyIBcmasp9MRYBhnigbCT4cH5QBlAQ1PwA85See0%2F3KGq2WTPXu0i8SDG6C0pvklSHiCPswSc4%2FgX53YMvNG9cBV1PAI8jcN6O%2FxpO0Ihp&X-Amz-Signature=c9a9c1939b874148b54a63e5712cb9e932f335117a5ab0dd0a0295d65d88bd5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGA7ENSZ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIDZn8cMi3ZxqTsf%2F8JQegmDB6WN1vCkrsMMm%2BEQ8rXxHAiEAtfD3WwJPXKwc%2FmzI95GKvNfA0Tp6eE46%2BNKos1qXWzUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJOGdphZ9jatsO4rVircA2DIItmcL9vdSt%2Ft3qRRzbinQreXV5y0OWwfdMGRouOQApT27Zsihzh4GwI144IJ4eSdskmihOg0N15T2Fu11rGGr9o1FYu3qFyBD2YhCeE7I7kNPxTgWi8Xy9Oaj2t3OptnV8T0wS09j90dGMyxy4yN9JcIMMDufotsb7QGEdP3oKZOQy94Azuol6lEtvkoKUbWKLYWJZjfOcydwYTE9dlL17GgEOOyRJk%2BH5vozxX418ZrjspAReA6ak4Bb%2F9u%2FJuutEaqiPMk6E5NaQeQjS7e0AKeOtGF1EtWpoEp7JjZ4v5S%2FpPistqw7Ey6FpnHP9sFUmEjOoraA7DxDsvCz6b5hgwXfbEBYjEOQynA8KSlCafI9%2B7JI9dkTwKkBe%2FjEopzLJ5fO0ubJqSY2TAGAN4VIbKpjOXBxt3CUv8BvzWD74LAQj2eycGUnk5bQYeER%2BgG9XfLvsVINq%2B9VW%2BUOfkDi8ba9XgnfCaU6diazTOmj2K2xBGKrJqywUx%2Ba0iA23wBw41TM%2FijUDavo%2FplII7VM4I44naMFGnCa6ucol%2FRaN9tevjkHV0CbulG7AUzCzr%2BntpjZ5lqVpqIA7j2hGTEaWfmz%2FcR9zL0QRVlxG%2FgLT7HurS814G3VqOeMI7OpMMGOqUBxiStVPgWXfmJH5X%2FV16sA2%2BrsQu%2FBQZ9vLSpV621XYlpptK9EUEoOtIx6QodOA0SdTogIvsZaH4SCQ%2Bp6q0rM7fFkVSpfweOg4sMgc7QWwilg9K8dmRyIBcmasp9MRYBhnigbCT4cH5QBlAQ1PwA85See0%2F3KGq2WTPXu0i8SDG6C0pvklSHiCPswSc4%2FgX53YMvNG9cBV1PAI8jcN6O%2FxpO0Ihp&X-Amz-Signature=3f874b739089b8d2e6325e6719dca23427862067718128ea04d8d199bae5d8f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGA7ENSZ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIDZn8cMi3ZxqTsf%2F8JQegmDB6WN1vCkrsMMm%2BEQ8rXxHAiEAtfD3WwJPXKwc%2FmzI95GKvNfA0Tp6eE46%2BNKos1qXWzUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJOGdphZ9jatsO4rVircA2DIItmcL9vdSt%2Ft3qRRzbinQreXV5y0OWwfdMGRouOQApT27Zsihzh4GwI144IJ4eSdskmihOg0N15T2Fu11rGGr9o1FYu3qFyBD2YhCeE7I7kNPxTgWi8Xy9Oaj2t3OptnV8T0wS09j90dGMyxy4yN9JcIMMDufotsb7QGEdP3oKZOQy94Azuol6lEtvkoKUbWKLYWJZjfOcydwYTE9dlL17GgEOOyRJk%2BH5vozxX418ZrjspAReA6ak4Bb%2F9u%2FJuutEaqiPMk6E5NaQeQjS7e0AKeOtGF1EtWpoEp7JjZ4v5S%2FpPistqw7Ey6FpnHP9sFUmEjOoraA7DxDsvCz6b5hgwXfbEBYjEOQynA8KSlCafI9%2B7JI9dkTwKkBe%2FjEopzLJ5fO0ubJqSY2TAGAN4VIbKpjOXBxt3CUv8BvzWD74LAQj2eycGUnk5bQYeER%2BgG9XfLvsVINq%2B9VW%2BUOfkDi8ba9XgnfCaU6diazTOmj2K2xBGKrJqywUx%2Ba0iA23wBw41TM%2FijUDavo%2FplII7VM4I44naMFGnCa6ucol%2FRaN9tevjkHV0CbulG7AUzCzr%2BntpjZ5lqVpqIA7j2hGTEaWfmz%2FcR9zL0QRVlxG%2FgLT7HurS814G3VqOeMI7OpMMGOqUBxiStVPgWXfmJH5X%2FV16sA2%2BrsQu%2FBQZ9vLSpV621XYlpptK9EUEoOtIx6QodOA0SdTogIvsZaH4SCQ%2Bp6q0rM7fFkVSpfweOg4sMgc7QWwilg9K8dmRyIBcmasp9MRYBhnigbCT4cH5QBlAQ1PwA85See0%2F3KGq2WTPXu0i8SDG6C0pvklSHiCPswSc4%2FgX53YMvNG9cBV1PAI8jcN6O%2FxpO0Ihp&X-Amz-Signature=db877d7bc512d99c9b11d1e97d0a7b4523e28525b95b3a9f5669bc3644102073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGA7ENSZ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIDZn8cMi3ZxqTsf%2F8JQegmDB6WN1vCkrsMMm%2BEQ8rXxHAiEAtfD3WwJPXKwc%2FmzI95GKvNfA0Tp6eE46%2BNKos1qXWzUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJOGdphZ9jatsO4rVircA2DIItmcL9vdSt%2Ft3qRRzbinQreXV5y0OWwfdMGRouOQApT27Zsihzh4GwI144IJ4eSdskmihOg0N15T2Fu11rGGr9o1FYu3qFyBD2YhCeE7I7kNPxTgWi8Xy9Oaj2t3OptnV8T0wS09j90dGMyxy4yN9JcIMMDufotsb7QGEdP3oKZOQy94Azuol6lEtvkoKUbWKLYWJZjfOcydwYTE9dlL17GgEOOyRJk%2BH5vozxX418ZrjspAReA6ak4Bb%2F9u%2FJuutEaqiPMk6E5NaQeQjS7e0AKeOtGF1EtWpoEp7JjZ4v5S%2FpPistqw7Ey6FpnHP9sFUmEjOoraA7DxDsvCz6b5hgwXfbEBYjEOQynA8KSlCafI9%2B7JI9dkTwKkBe%2FjEopzLJ5fO0ubJqSY2TAGAN4VIbKpjOXBxt3CUv8BvzWD74LAQj2eycGUnk5bQYeER%2BgG9XfLvsVINq%2B9VW%2BUOfkDi8ba9XgnfCaU6diazTOmj2K2xBGKrJqywUx%2Ba0iA23wBw41TM%2FijUDavo%2FplII7VM4I44naMFGnCa6ucol%2FRaN9tevjkHV0CbulG7AUzCzr%2BntpjZ5lqVpqIA7j2hGTEaWfmz%2FcR9zL0QRVlxG%2FgLT7HurS814G3VqOeMI7OpMMGOqUBxiStVPgWXfmJH5X%2FV16sA2%2BrsQu%2FBQZ9vLSpV621XYlpptK9EUEoOtIx6QodOA0SdTogIvsZaH4SCQ%2Bp6q0rM7fFkVSpfweOg4sMgc7QWwilg9K8dmRyIBcmasp9MRYBhnigbCT4cH5QBlAQ1PwA85See0%2F3KGq2WTPXu0i8SDG6C0pvklSHiCPswSc4%2FgX53YMvNG9cBV1PAI8jcN6O%2FxpO0Ihp&X-Amz-Signature=f610c87c1964939fb8c22680fce921d576e90a04f8d6f53220d17c8516171797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGA7ENSZ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIDZn8cMi3ZxqTsf%2F8JQegmDB6WN1vCkrsMMm%2BEQ8rXxHAiEAtfD3WwJPXKwc%2FmzI95GKvNfA0Tp6eE46%2BNKos1qXWzUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJOGdphZ9jatsO4rVircA2DIItmcL9vdSt%2Ft3qRRzbinQreXV5y0OWwfdMGRouOQApT27Zsihzh4GwI144IJ4eSdskmihOg0N15T2Fu11rGGr9o1FYu3qFyBD2YhCeE7I7kNPxTgWi8Xy9Oaj2t3OptnV8T0wS09j90dGMyxy4yN9JcIMMDufotsb7QGEdP3oKZOQy94Azuol6lEtvkoKUbWKLYWJZjfOcydwYTE9dlL17GgEOOyRJk%2BH5vozxX418ZrjspAReA6ak4Bb%2F9u%2FJuutEaqiPMk6E5NaQeQjS7e0AKeOtGF1EtWpoEp7JjZ4v5S%2FpPistqw7Ey6FpnHP9sFUmEjOoraA7DxDsvCz6b5hgwXfbEBYjEOQynA8KSlCafI9%2B7JI9dkTwKkBe%2FjEopzLJ5fO0ubJqSY2TAGAN4VIbKpjOXBxt3CUv8BvzWD74LAQj2eycGUnk5bQYeER%2BgG9XfLvsVINq%2B9VW%2BUOfkDi8ba9XgnfCaU6diazTOmj2K2xBGKrJqywUx%2Ba0iA23wBw41TM%2FijUDavo%2FplII7VM4I44naMFGnCa6ucol%2FRaN9tevjkHV0CbulG7AUzCzr%2BntpjZ5lqVpqIA7j2hGTEaWfmz%2FcR9zL0QRVlxG%2FgLT7HurS814G3VqOeMI7OpMMGOqUBxiStVPgWXfmJH5X%2FV16sA2%2BrsQu%2FBQZ9vLSpV621XYlpptK9EUEoOtIx6QodOA0SdTogIvsZaH4SCQ%2Bp6q0rM7fFkVSpfweOg4sMgc7QWwilg9K8dmRyIBcmasp9MRYBhnigbCT4cH5QBlAQ1PwA85See0%2F3KGq2WTPXu0i8SDG6C0pvklSHiCPswSc4%2FgX53YMvNG9cBV1PAI8jcN6O%2FxpO0Ihp&X-Amz-Signature=08838cf1c135912d6d6ddece1c8c469d16a509c891a8a39e44b0506d6bbbb854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGA7ENSZ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIDZn8cMi3ZxqTsf%2F8JQegmDB6WN1vCkrsMMm%2BEQ8rXxHAiEAtfD3WwJPXKwc%2FmzI95GKvNfA0Tp6eE46%2BNKos1qXWzUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJOGdphZ9jatsO4rVircA2DIItmcL9vdSt%2Ft3qRRzbinQreXV5y0OWwfdMGRouOQApT27Zsihzh4GwI144IJ4eSdskmihOg0N15T2Fu11rGGr9o1FYu3qFyBD2YhCeE7I7kNPxTgWi8Xy9Oaj2t3OptnV8T0wS09j90dGMyxy4yN9JcIMMDufotsb7QGEdP3oKZOQy94Azuol6lEtvkoKUbWKLYWJZjfOcydwYTE9dlL17GgEOOyRJk%2BH5vozxX418ZrjspAReA6ak4Bb%2F9u%2FJuutEaqiPMk6E5NaQeQjS7e0AKeOtGF1EtWpoEp7JjZ4v5S%2FpPistqw7Ey6FpnHP9sFUmEjOoraA7DxDsvCz6b5hgwXfbEBYjEOQynA8KSlCafI9%2B7JI9dkTwKkBe%2FjEopzLJ5fO0ubJqSY2TAGAN4VIbKpjOXBxt3CUv8BvzWD74LAQj2eycGUnk5bQYeER%2BgG9XfLvsVINq%2B9VW%2BUOfkDi8ba9XgnfCaU6diazTOmj2K2xBGKrJqywUx%2Ba0iA23wBw41TM%2FijUDavo%2FplII7VM4I44naMFGnCa6ucol%2FRaN9tevjkHV0CbulG7AUzCzr%2BntpjZ5lqVpqIA7j2hGTEaWfmz%2FcR9zL0QRVlxG%2FgLT7HurS814G3VqOeMI7OpMMGOqUBxiStVPgWXfmJH5X%2FV16sA2%2BrsQu%2FBQZ9vLSpV621XYlpptK9EUEoOtIx6QodOA0SdTogIvsZaH4SCQ%2Bp6q0rM7fFkVSpfweOg4sMgc7QWwilg9K8dmRyIBcmasp9MRYBhnigbCT4cH5QBlAQ1PwA85See0%2F3KGq2WTPXu0i8SDG6C0pvklSHiCPswSc4%2FgX53YMvNG9cBV1PAI8jcN6O%2FxpO0Ihp&X-Amz-Signature=580179325e4bf374aa9ff3998a26552596d7226952cfa5aa0311f4e9c97b9c12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGA7ENSZ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIDZn8cMi3ZxqTsf%2F8JQegmDB6WN1vCkrsMMm%2BEQ8rXxHAiEAtfD3WwJPXKwc%2FmzI95GKvNfA0Tp6eE46%2BNKos1qXWzUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJOGdphZ9jatsO4rVircA2DIItmcL9vdSt%2Ft3qRRzbinQreXV5y0OWwfdMGRouOQApT27Zsihzh4GwI144IJ4eSdskmihOg0N15T2Fu11rGGr9o1FYu3qFyBD2YhCeE7I7kNPxTgWi8Xy9Oaj2t3OptnV8T0wS09j90dGMyxy4yN9JcIMMDufotsb7QGEdP3oKZOQy94Azuol6lEtvkoKUbWKLYWJZjfOcydwYTE9dlL17GgEOOyRJk%2BH5vozxX418ZrjspAReA6ak4Bb%2F9u%2FJuutEaqiPMk6E5NaQeQjS7e0AKeOtGF1EtWpoEp7JjZ4v5S%2FpPistqw7Ey6FpnHP9sFUmEjOoraA7DxDsvCz6b5hgwXfbEBYjEOQynA8KSlCafI9%2B7JI9dkTwKkBe%2FjEopzLJ5fO0ubJqSY2TAGAN4VIbKpjOXBxt3CUv8BvzWD74LAQj2eycGUnk5bQYeER%2BgG9XfLvsVINq%2B9VW%2BUOfkDi8ba9XgnfCaU6diazTOmj2K2xBGKrJqywUx%2Ba0iA23wBw41TM%2FijUDavo%2FplII7VM4I44naMFGnCa6ucol%2FRaN9tevjkHV0CbulG7AUzCzr%2BntpjZ5lqVpqIA7j2hGTEaWfmz%2FcR9zL0QRVlxG%2FgLT7HurS814G3VqOeMI7OpMMGOqUBxiStVPgWXfmJH5X%2FV16sA2%2BrsQu%2FBQZ9vLSpV621XYlpptK9EUEoOtIx6QodOA0SdTogIvsZaH4SCQ%2Bp6q0rM7fFkVSpfweOg4sMgc7QWwilg9K8dmRyIBcmasp9MRYBhnigbCT4cH5QBlAQ1PwA85See0%2F3KGq2WTPXu0i8SDG6C0pvklSHiCPswSc4%2FgX53YMvNG9cBV1PAI8jcN6O%2FxpO0Ihp&X-Amz-Signature=26f9753d0b4d3845ca160c817e84aae06f21e09e17a369be92e7b1fb875e4d2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
