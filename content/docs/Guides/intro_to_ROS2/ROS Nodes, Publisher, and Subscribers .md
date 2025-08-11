---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4Q3MTB3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2B8oJ9hOFxZJZgogZ%2F7FZpkE1jJA8bG67UMhFJzT%2BRCAiEA%2BQfJ2CAaV5oPOfFfLTqX%2BzZrMVf7tIxbU9rMymVX%2FAIqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZip1cIg3CwJebcaircAz3Pa6f47BiRLwP1MiZAm%2FP5BWZ5OHGoMINuBG8ctDLJMW5W273GvOR4CMhGft71SQ%2FZob%2Bg0SH9iRAf6Xw86LHVHXi7r8HCew8ReqmnAzgoMQZ%2FFVkYFTxpqNY53zf4Sc6KE1uY3dPhesy3DpA0l15CTkOrKh60qI0TwpAc7CO73R0qMjbX6mT2oMQZ%2FtfjLalWlcBlPQHCRVUACl9A6jGLBdZWio9Zx3Da6z2A2gN9iNHpkVQpbfUUVy03H9QcW4TvoxE4YPNL6pgEFMO%2F2JjyHC27ZWKkZ5N4iaVNYr1eINPzDTGm1%2B3vA10UjU8YDNmc1Q83%2BL80anZx9801wheXUhlTUB7y%2BFDYeQvLXPim8ZlC4TN16cin%2BlYMzIvSwPOYMVJw%2FFsVOGUE2%2Be11oFcYX6MsNMY3rfgxTlCbD4Xq74AS01y06M3a3ZLas%2BHVzTRqD3zTSrLvYgQGeoRS1N02JKHPVADHj8MvVuFLG5naJpD1bwb0W4Tq0pNQBbE%2FCQUwoO1NQd6yUhyjoPJOlycWB7qIzgUfVNcUHUZnYsCZuzP5j9LrRQC2D7ZHEcPucOkx4O9HdWO2pqeE3msazGKTtiwk1OV3dZwRKLfiKsAiSBHdY18g%2BXAqHInMNz35sQGOqUBYmmZ2cckN7jxXwmLUzNCvGxXWmdDVxFVRq4CnyvrIEouWVoLyYxuk6khUcsIDq29tEHnQ3hYOcKi%2Fqdz8wkSqByC6jIHgLoWhxL7GY2481Y3CuuTMPWrYoV%2Ff3deME81YUo8CvALJ7AO4HlhaZgFYFRsXEK3Guqy4gOTqJOYCPpK8iMpDD6TUT5wpAjUYK6jE3Opuy48ggFfECEnHOvdE6EyjCbO&X-Amz-Signature=b62309d1223a37cdfab9c81ef27c0a9c66bc8267967d5b8c53c1c5aa6e4d8e82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4Q3MTB3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2B8oJ9hOFxZJZgogZ%2F7FZpkE1jJA8bG67UMhFJzT%2BRCAiEA%2BQfJ2CAaV5oPOfFfLTqX%2BzZrMVf7tIxbU9rMymVX%2FAIqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZip1cIg3CwJebcaircAz3Pa6f47BiRLwP1MiZAm%2FP5BWZ5OHGoMINuBG8ctDLJMW5W273GvOR4CMhGft71SQ%2FZob%2Bg0SH9iRAf6Xw86LHVHXi7r8HCew8ReqmnAzgoMQZ%2FFVkYFTxpqNY53zf4Sc6KE1uY3dPhesy3DpA0l15CTkOrKh60qI0TwpAc7CO73R0qMjbX6mT2oMQZ%2FtfjLalWlcBlPQHCRVUACl9A6jGLBdZWio9Zx3Da6z2A2gN9iNHpkVQpbfUUVy03H9QcW4TvoxE4YPNL6pgEFMO%2F2JjyHC27ZWKkZ5N4iaVNYr1eINPzDTGm1%2B3vA10UjU8YDNmc1Q83%2BL80anZx9801wheXUhlTUB7y%2BFDYeQvLXPim8ZlC4TN16cin%2BlYMzIvSwPOYMVJw%2FFsVOGUE2%2Be11oFcYX6MsNMY3rfgxTlCbD4Xq74AS01y06M3a3ZLas%2BHVzTRqD3zTSrLvYgQGeoRS1N02JKHPVADHj8MvVuFLG5naJpD1bwb0W4Tq0pNQBbE%2FCQUwoO1NQd6yUhyjoPJOlycWB7qIzgUfVNcUHUZnYsCZuzP5j9LrRQC2D7ZHEcPucOkx4O9HdWO2pqeE3msazGKTtiwk1OV3dZwRKLfiKsAiSBHdY18g%2BXAqHInMNz35sQGOqUBYmmZ2cckN7jxXwmLUzNCvGxXWmdDVxFVRq4CnyvrIEouWVoLyYxuk6khUcsIDq29tEHnQ3hYOcKi%2Fqdz8wkSqByC6jIHgLoWhxL7GY2481Y3CuuTMPWrYoV%2Ff3deME81YUo8CvALJ7AO4HlhaZgFYFRsXEK3Guqy4gOTqJOYCPpK8iMpDD6TUT5wpAjUYK6jE3Opuy48ggFfECEnHOvdE6EyjCbO&X-Amz-Signature=c772f48785df3f752efb692def9190cba76fa50dfed64e877c7de91ab2df2b3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4Q3MTB3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2B8oJ9hOFxZJZgogZ%2F7FZpkE1jJA8bG67UMhFJzT%2BRCAiEA%2BQfJ2CAaV5oPOfFfLTqX%2BzZrMVf7tIxbU9rMymVX%2FAIqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZip1cIg3CwJebcaircAz3Pa6f47BiRLwP1MiZAm%2FP5BWZ5OHGoMINuBG8ctDLJMW5W273GvOR4CMhGft71SQ%2FZob%2Bg0SH9iRAf6Xw86LHVHXi7r8HCew8ReqmnAzgoMQZ%2FFVkYFTxpqNY53zf4Sc6KE1uY3dPhesy3DpA0l15CTkOrKh60qI0TwpAc7CO73R0qMjbX6mT2oMQZ%2FtfjLalWlcBlPQHCRVUACl9A6jGLBdZWio9Zx3Da6z2A2gN9iNHpkVQpbfUUVy03H9QcW4TvoxE4YPNL6pgEFMO%2F2JjyHC27ZWKkZ5N4iaVNYr1eINPzDTGm1%2B3vA10UjU8YDNmc1Q83%2BL80anZx9801wheXUhlTUB7y%2BFDYeQvLXPim8ZlC4TN16cin%2BlYMzIvSwPOYMVJw%2FFsVOGUE2%2Be11oFcYX6MsNMY3rfgxTlCbD4Xq74AS01y06M3a3ZLas%2BHVzTRqD3zTSrLvYgQGeoRS1N02JKHPVADHj8MvVuFLG5naJpD1bwb0W4Tq0pNQBbE%2FCQUwoO1NQd6yUhyjoPJOlycWB7qIzgUfVNcUHUZnYsCZuzP5j9LrRQC2D7ZHEcPucOkx4O9HdWO2pqeE3msazGKTtiwk1OV3dZwRKLfiKsAiSBHdY18g%2BXAqHInMNz35sQGOqUBYmmZ2cckN7jxXwmLUzNCvGxXWmdDVxFVRq4CnyvrIEouWVoLyYxuk6khUcsIDq29tEHnQ3hYOcKi%2Fqdz8wkSqByC6jIHgLoWhxL7GY2481Y3CuuTMPWrYoV%2Ff3deME81YUo8CvALJ7AO4HlhaZgFYFRsXEK3Guqy4gOTqJOYCPpK8iMpDD6TUT5wpAjUYK6jE3Opuy48ggFfECEnHOvdE6EyjCbO&X-Amz-Signature=e18c28407f326b5752e3a441bcd2da8d4030f9e027c2dc7c177e293ce82e91b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4Q3MTB3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2B8oJ9hOFxZJZgogZ%2F7FZpkE1jJA8bG67UMhFJzT%2BRCAiEA%2BQfJ2CAaV5oPOfFfLTqX%2BzZrMVf7tIxbU9rMymVX%2FAIqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZip1cIg3CwJebcaircAz3Pa6f47BiRLwP1MiZAm%2FP5BWZ5OHGoMINuBG8ctDLJMW5W273GvOR4CMhGft71SQ%2FZob%2Bg0SH9iRAf6Xw86LHVHXi7r8HCew8ReqmnAzgoMQZ%2FFVkYFTxpqNY53zf4Sc6KE1uY3dPhesy3DpA0l15CTkOrKh60qI0TwpAc7CO73R0qMjbX6mT2oMQZ%2FtfjLalWlcBlPQHCRVUACl9A6jGLBdZWio9Zx3Da6z2A2gN9iNHpkVQpbfUUVy03H9QcW4TvoxE4YPNL6pgEFMO%2F2JjyHC27ZWKkZ5N4iaVNYr1eINPzDTGm1%2B3vA10UjU8YDNmc1Q83%2BL80anZx9801wheXUhlTUB7y%2BFDYeQvLXPim8ZlC4TN16cin%2BlYMzIvSwPOYMVJw%2FFsVOGUE2%2Be11oFcYX6MsNMY3rfgxTlCbD4Xq74AS01y06M3a3ZLas%2BHVzTRqD3zTSrLvYgQGeoRS1N02JKHPVADHj8MvVuFLG5naJpD1bwb0W4Tq0pNQBbE%2FCQUwoO1NQd6yUhyjoPJOlycWB7qIzgUfVNcUHUZnYsCZuzP5j9LrRQC2D7ZHEcPucOkx4O9HdWO2pqeE3msazGKTtiwk1OV3dZwRKLfiKsAiSBHdY18g%2BXAqHInMNz35sQGOqUBYmmZ2cckN7jxXwmLUzNCvGxXWmdDVxFVRq4CnyvrIEouWVoLyYxuk6khUcsIDq29tEHnQ3hYOcKi%2Fqdz8wkSqByC6jIHgLoWhxL7GY2481Y3CuuTMPWrYoV%2Ff3deME81YUo8CvALJ7AO4HlhaZgFYFRsXEK3Guqy4gOTqJOYCPpK8iMpDD6TUT5wpAjUYK6jE3Opuy48ggFfECEnHOvdE6EyjCbO&X-Amz-Signature=7c0d43f305030754cd93aa72e2328d4307547a2f1d7a798f84cbeb3b418ad695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4Q3MTB3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2B8oJ9hOFxZJZgogZ%2F7FZpkE1jJA8bG67UMhFJzT%2BRCAiEA%2BQfJ2CAaV5oPOfFfLTqX%2BzZrMVf7tIxbU9rMymVX%2FAIqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZip1cIg3CwJebcaircAz3Pa6f47BiRLwP1MiZAm%2FP5BWZ5OHGoMINuBG8ctDLJMW5W273GvOR4CMhGft71SQ%2FZob%2Bg0SH9iRAf6Xw86LHVHXi7r8HCew8ReqmnAzgoMQZ%2FFVkYFTxpqNY53zf4Sc6KE1uY3dPhesy3DpA0l15CTkOrKh60qI0TwpAc7CO73R0qMjbX6mT2oMQZ%2FtfjLalWlcBlPQHCRVUACl9A6jGLBdZWio9Zx3Da6z2A2gN9iNHpkVQpbfUUVy03H9QcW4TvoxE4YPNL6pgEFMO%2F2JjyHC27ZWKkZ5N4iaVNYr1eINPzDTGm1%2B3vA10UjU8YDNmc1Q83%2BL80anZx9801wheXUhlTUB7y%2BFDYeQvLXPim8ZlC4TN16cin%2BlYMzIvSwPOYMVJw%2FFsVOGUE2%2Be11oFcYX6MsNMY3rfgxTlCbD4Xq74AS01y06M3a3ZLas%2BHVzTRqD3zTSrLvYgQGeoRS1N02JKHPVADHj8MvVuFLG5naJpD1bwb0W4Tq0pNQBbE%2FCQUwoO1NQd6yUhyjoPJOlycWB7qIzgUfVNcUHUZnYsCZuzP5j9LrRQC2D7ZHEcPucOkx4O9HdWO2pqeE3msazGKTtiwk1OV3dZwRKLfiKsAiSBHdY18g%2BXAqHInMNz35sQGOqUBYmmZ2cckN7jxXwmLUzNCvGxXWmdDVxFVRq4CnyvrIEouWVoLyYxuk6khUcsIDq29tEHnQ3hYOcKi%2Fqdz8wkSqByC6jIHgLoWhxL7GY2481Y3CuuTMPWrYoV%2Ff3deME81YUo8CvALJ7AO4HlhaZgFYFRsXEK3Guqy4gOTqJOYCPpK8iMpDD6TUT5wpAjUYK6jE3Opuy48ggFfECEnHOvdE6EyjCbO&X-Amz-Signature=80333cffee69a90fa1753d84e5f7b910e9a48906a63d2ae5250e6554eb099258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4Q3MTB3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2B8oJ9hOFxZJZgogZ%2F7FZpkE1jJA8bG67UMhFJzT%2BRCAiEA%2BQfJ2CAaV5oPOfFfLTqX%2BzZrMVf7tIxbU9rMymVX%2FAIqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZip1cIg3CwJebcaircAz3Pa6f47BiRLwP1MiZAm%2FP5BWZ5OHGoMINuBG8ctDLJMW5W273GvOR4CMhGft71SQ%2FZob%2Bg0SH9iRAf6Xw86LHVHXi7r8HCew8ReqmnAzgoMQZ%2FFVkYFTxpqNY53zf4Sc6KE1uY3dPhesy3DpA0l15CTkOrKh60qI0TwpAc7CO73R0qMjbX6mT2oMQZ%2FtfjLalWlcBlPQHCRVUACl9A6jGLBdZWio9Zx3Da6z2A2gN9iNHpkVQpbfUUVy03H9QcW4TvoxE4YPNL6pgEFMO%2F2JjyHC27ZWKkZ5N4iaVNYr1eINPzDTGm1%2B3vA10UjU8YDNmc1Q83%2BL80anZx9801wheXUhlTUB7y%2BFDYeQvLXPim8ZlC4TN16cin%2BlYMzIvSwPOYMVJw%2FFsVOGUE2%2Be11oFcYX6MsNMY3rfgxTlCbD4Xq74AS01y06M3a3ZLas%2BHVzTRqD3zTSrLvYgQGeoRS1N02JKHPVADHj8MvVuFLG5naJpD1bwb0W4Tq0pNQBbE%2FCQUwoO1NQd6yUhyjoPJOlycWB7qIzgUfVNcUHUZnYsCZuzP5j9LrRQC2D7ZHEcPucOkx4O9HdWO2pqeE3msazGKTtiwk1OV3dZwRKLfiKsAiSBHdY18g%2BXAqHInMNz35sQGOqUBYmmZ2cckN7jxXwmLUzNCvGxXWmdDVxFVRq4CnyvrIEouWVoLyYxuk6khUcsIDq29tEHnQ3hYOcKi%2Fqdz8wkSqByC6jIHgLoWhxL7GY2481Y3CuuTMPWrYoV%2Ff3deME81YUo8CvALJ7AO4HlhaZgFYFRsXEK3Guqy4gOTqJOYCPpK8iMpDD6TUT5wpAjUYK6jE3Opuy48ggFfECEnHOvdE6EyjCbO&X-Amz-Signature=a1d378dffbf63c07b4ccd4f4c78934148bba67b6ee6b9e26351e64acce921db5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4Q3MTB3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2B8oJ9hOFxZJZgogZ%2F7FZpkE1jJA8bG67UMhFJzT%2BRCAiEA%2BQfJ2CAaV5oPOfFfLTqX%2BzZrMVf7tIxbU9rMymVX%2FAIqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZip1cIg3CwJebcaircAz3Pa6f47BiRLwP1MiZAm%2FP5BWZ5OHGoMINuBG8ctDLJMW5W273GvOR4CMhGft71SQ%2FZob%2Bg0SH9iRAf6Xw86LHVHXi7r8HCew8ReqmnAzgoMQZ%2FFVkYFTxpqNY53zf4Sc6KE1uY3dPhesy3DpA0l15CTkOrKh60qI0TwpAc7CO73R0qMjbX6mT2oMQZ%2FtfjLalWlcBlPQHCRVUACl9A6jGLBdZWio9Zx3Da6z2A2gN9iNHpkVQpbfUUVy03H9QcW4TvoxE4YPNL6pgEFMO%2F2JjyHC27ZWKkZ5N4iaVNYr1eINPzDTGm1%2B3vA10UjU8YDNmc1Q83%2BL80anZx9801wheXUhlTUB7y%2BFDYeQvLXPim8ZlC4TN16cin%2BlYMzIvSwPOYMVJw%2FFsVOGUE2%2Be11oFcYX6MsNMY3rfgxTlCbD4Xq74AS01y06M3a3ZLas%2BHVzTRqD3zTSrLvYgQGeoRS1N02JKHPVADHj8MvVuFLG5naJpD1bwb0W4Tq0pNQBbE%2FCQUwoO1NQd6yUhyjoPJOlycWB7qIzgUfVNcUHUZnYsCZuzP5j9LrRQC2D7ZHEcPucOkx4O9HdWO2pqeE3msazGKTtiwk1OV3dZwRKLfiKsAiSBHdY18g%2BXAqHInMNz35sQGOqUBYmmZ2cckN7jxXwmLUzNCvGxXWmdDVxFVRq4CnyvrIEouWVoLyYxuk6khUcsIDq29tEHnQ3hYOcKi%2Fqdz8wkSqByC6jIHgLoWhxL7GY2481Y3CuuTMPWrYoV%2Ff3deME81YUo8CvALJ7AO4HlhaZgFYFRsXEK3Guqy4gOTqJOYCPpK8iMpDD6TUT5wpAjUYK6jE3Opuy48ggFfECEnHOvdE6EyjCbO&X-Amz-Signature=089dcae2d35088afcaaff6cd8e719b0eef64032c431a8c0389b54f8ccaef4233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4Q3MTB3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2B8oJ9hOFxZJZgogZ%2F7FZpkE1jJA8bG67UMhFJzT%2BRCAiEA%2BQfJ2CAaV5oPOfFfLTqX%2BzZrMVf7tIxbU9rMymVX%2FAIqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZip1cIg3CwJebcaircAz3Pa6f47BiRLwP1MiZAm%2FP5BWZ5OHGoMINuBG8ctDLJMW5W273GvOR4CMhGft71SQ%2FZob%2Bg0SH9iRAf6Xw86LHVHXi7r8HCew8ReqmnAzgoMQZ%2FFVkYFTxpqNY53zf4Sc6KE1uY3dPhesy3DpA0l15CTkOrKh60qI0TwpAc7CO73R0qMjbX6mT2oMQZ%2FtfjLalWlcBlPQHCRVUACl9A6jGLBdZWio9Zx3Da6z2A2gN9iNHpkVQpbfUUVy03H9QcW4TvoxE4YPNL6pgEFMO%2F2JjyHC27ZWKkZ5N4iaVNYr1eINPzDTGm1%2B3vA10UjU8YDNmc1Q83%2BL80anZx9801wheXUhlTUB7y%2BFDYeQvLXPim8ZlC4TN16cin%2BlYMzIvSwPOYMVJw%2FFsVOGUE2%2Be11oFcYX6MsNMY3rfgxTlCbD4Xq74AS01y06M3a3ZLas%2BHVzTRqD3zTSrLvYgQGeoRS1N02JKHPVADHj8MvVuFLG5naJpD1bwb0W4Tq0pNQBbE%2FCQUwoO1NQd6yUhyjoPJOlycWB7qIzgUfVNcUHUZnYsCZuzP5j9LrRQC2D7ZHEcPucOkx4O9HdWO2pqeE3msazGKTtiwk1OV3dZwRKLfiKsAiSBHdY18g%2BXAqHInMNz35sQGOqUBYmmZ2cckN7jxXwmLUzNCvGxXWmdDVxFVRq4CnyvrIEouWVoLyYxuk6khUcsIDq29tEHnQ3hYOcKi%2Fqdz8wkSqByC6jIHgLoWhxL7GY2481Y3CuuTMPWrYoV%2Ff3deME81YUo8CvALJ7AO4HlhaZgFYFRsXEK3Guqy4gOTqJOYCPpK8iMpDD6TUT5wpAjUYK6jE3Opuy48ggFfECEnHOvdE6EyjCbO&X-Amz-Signature=d947de3e931402e4decabd87e5b04f60b3eb51a5bb4691f31d31b43bc55263f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
