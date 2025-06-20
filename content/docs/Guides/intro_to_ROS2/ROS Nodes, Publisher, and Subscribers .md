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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666FXI4J3%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T034009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjbJz29P6VtpUgfl7QH4WE234kaj72dFc5V3fPSVFQkQIgQI7g5bWm%2F18pSqNw9VhWFhGVUnYlzFqwkKAoSHcAK%2FUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPq470J3aTdmo5xTUCrcAxti8jainq1z6R6H%2BcJ0rEgRGkjro2RFdz6Rg2YI1R4B9VLNsx0XHG0d2OYjGJO8AtROSuS4YJxWiX5DusM1t0nbQm7pA%2FFWaLCUwakrRreDXwQrC2oI7FT7DrC53M7XP5wXFZbMPJzCxwZttX6K5cpSqHt3vunwfqztCInJbCJ86BE0wSIJJ61eIuojgZQHUl21yVM79IrkY3YHVqRPkX96JC%2BWqukJCh%2FKJ8ve1BV4I81%2B9RaPE0dAokm0cgCyS%2FAAKMvouFUp8%2BhrUwOx0SsJ25oBZNSnipGZ4Q6pK186K7ystvWiVfrJwOveXwRPgDIk87%2BFARNsrHmZ%2B9sMGBd%2FfFNWI3kt4RJUh1qgyZu8wKkvrywcqgBHL7COxIADKOrKrnpqdANnRNtTglEOlGf6MSj%2F6Iy1o3meOyX2W9n0L9gdePPG4RPe%2FD8Uh%2BjH5D2serL3cBg7hnUsDlLqxFbDgKcPiF98Qoj1nOmalfeCjazwKsZphkRGKPxupbD0dq56plJX4ejoDM7kXnrNyeoEzhXzwBhXWcgp%2Bbk9KrBXGQquIgACYnCoccq%2BKShpQB9gG94GLEQQR2F51axmx%2Fae8xfyiOOqsGzVGT1kb7lR%2FksF2P%2BlHpt%2Fr6amMMyO08IGOqUBOQ8NQLeP8Kxed7sYWl6BK0KrgIfK7sk9vDY6DZXXdLMaFh4RF0lZplCYUfo%2FRdRw9hMywTRD2i8IM06CR47cfCcvU9V07ZhwXZ9Y58IP%2Fpl1BI31DT0HXPPQmZh9xDXkJW3FZw%2FUyT36AWn7QXH%2F1f6qocaALawv1OxFI2zei%2BW%2BwEHJAHO43K3EIkiAFJ8eKn%2F06O%2BbsJtPDGdfz%2BXyNY5qK0Rn&X-Amz-Signature=363760306e33db788adc57d60c9f5d9cd056c6631e7c28fdab989eaff2d68318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666FXI4J3%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T034009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjbJz29P6VtpUgfl7QH4WE234kaj72dFc5V3fPSVFQkQIgQI7g5bWm%2F18pSqNw9VhWFhGVUnYlzFqwkKAoSHcAK%2FUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPq470J3aTdmo5xTUCrcAxti8jainq1z6R6H%2BcJ0rEgRGkjro2RFdz6Rg2YI1R4B9VLNsx0XHG0d2OYjGJO8AtROSuS4YJxWiX5DusM1t0nbQm7pA%2FFWaLCUwakrRreDXwQrC2oI7FT7DrC53M7XP5wXFZbMPJzCxwZttX6K5cpSqHt3vunwfqztCInJbCJ86BE0wSIJJ61eIuojgZQHUl21yVM79IrkY3YHVqRPkX96JC%2BWqukJCh%2FKJ8ve1BV4I81%2B9RaPE0dAokm0cgCyS%2FAAKMvouFUp8%2BhrUwOx0SsJ25oBZNSnipGZ4Q6pK186K7ystvWiVfrJwOveXwRPgDIk87%2BFARNsrHmZ%2B9sMGBd%2FfFNWI3kt4RJUh1qgyZu8wKkvrywcqgBHL7COxIADKOrKrnpqdANnRNtTglEOlGf6MSj%2F6Iy1o3meOyX2W9n0L9gdePPG4RPe%2FD8Uh%2BjH5D2serL3cBg7hnUsDlLqxFbDgKcPiF98Qoj1nOmalfeCjazwKsZphkRGKPxupbD0dq56plJX4ejoDM7kXnrNyeoEzhXzwBhXWcgp%2Bbk9KrBXGQquIgACYnCoccq%2BKShpQB9gG94GLEQQR2F51axmx%2Fae8xfyiOOqsGzVGT1kb7lR%2FksF2P%2BlHpt%2Fr6amMMyO08IGOqUBOQ8NQLeP8Kxed7sYWl6BK0KrgIfK7sk9vDY6DZXXdLMaFh4RF0lZplCYUfo%2FRdRw9hMywTRD2i8IM06CR47cfCcvU9V07ZhwXZ9Y58IP%2Fpl1BI31DT0HXPPQmZh9xDXkJW3FZw%2FUyT36AWn7QXH%2F1f6qocaALawv1OxFI2zei%2BW%2BwEHJAHO43K3EIkiAFJ8eKn%2F06O%2BbsJtPDGdfz%2BXyNY5qK0Rn&X-Amz-Signature=b860bdce5f9946440e61b20d42644934b081655d06d018a60220a7c36b67e621&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666FXI4J3%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T034009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjbJz29P6VtpUgfl7QH4WE234kaj72dFc5V3fPSVFQkQIgQI7g5bWm%2F18pSqNw9VhWFhGVUnYlzFqwkKAoSHcAK%2FUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPq470J3aTdmo5xTUCrcAxti8jainq1z6R6H%2BcJ0rEgRGkjro2RFdz6Rg2YI1R4B9VLNsx0XHG0d2OYjGJO8AtROSuS4YJxWiX5DusM1t0nbQm7pA%2FFWaLCUwakrRreDXwQrC2oI7FT7DrC53M7XP5wXFZbMPJzCxwZttX6K5cpSqHt3vunwfqztCInJbCJ86BE0wSIJJ61eIuojgZQHUl21yVM79IrkY3YHVqRPkX96JC%2BWqukJCh%2FKJ8ve1BV4I81%2B9RaPE0dAokm0cgCyS%2FAAKMvouFUp8%2BhrUwOx0SsJ25oBZNSnipGZ4Q6pK186K7ystvWiVfrJwOveXwRPgDIk87%2BFARNsrHmZ%2B9sMGBd%2FfFNWI3kt4RJUh1qgyZu8wKkvrywcqgBHL7COxIADKOrKrnpqdANnRNtTglEOlGf6MSj%2F6Iy1o3meOyX2W9n0L9gdePPG4RPe%2FD8Uh%2BjH5D2serL3cBg7hnUsDlLqxFbDgKcPiF98Qoj1nOmalfeCjazwKsZphkRGKPxupbD0dq56plJX4ejoDM7kXnrNyeoEzhXzwBhXWcgp%2Bbk9KrBXGQquIgACYnCoccq%2BKShpQB9gG94GLEQQR2F51axmx%2Fae8xfyiOOqsGzVGT1kb7lR%2FksF2P%2BlHpt%2Fr6amMMyO08IGOqUBOQ8NQLeP8Kxed7sYWl6BK0KrgIfK7sk9vDY6DZXXdLMaFh4RF0lZplCYUfo%2FRdRw9hMywTRD2i8IM06CR47cfCcvU9V07ZhwXZ9Y58IP%2Fpl1BI31DT0HXPPQmZh9xDXkJW3FZw%2FUyT36AWn7QXH%2F1f6qocaALawv1OxFI2zei%2BW%2BwEHJAHO43K3EIkiAFJ8eKn%2F06O%2BbsJtPDGdfz%2BXyNY5qK0Rn&X-Amz-Signature=848cf5060fed6f1f735c2581340e332c84752ad4802f1d3695e7bc22402abeb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666FXI4J3%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T034009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjbJz29P6VtpUgfl7QH4WE234kaj72dFc5V3fPSVFQkQIgQI7g5bWm%2F18pSqNw9VhWFhGVUnYlzFqwkKAoSHcAK%2FUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPq470J3aTdmo5xTUCrcAxti8jainq1z6R6H%2BcJ0rEgRGkjro2RFdz6Rg2YI1R4B9VLNsx0XHG0d2OYjGJO8AtROSuS4YJxWiX5DusM1t0nbQm7pA%2FFWaLCUwakrRreDXwQrC2oI7FT7DrC53M7XP5wXFZbMPJzCxwZttX6K5cpSqHt3vunwfqztCInJbCJ86BE0wSIJJ61eIuojgZQHUl21yVM79IrkY3YHVqRPkX96JC%2BWqukJCh%2FKJ8ve1BV4I81%2B9RaPE0dAokm0cgCyS%2FAAKMvouFUp8%2BhrUwOx0SsJ25oBZNSnipGZ4Q6pK186K7ystvWiVfrJwOveXwRPgDIk87%2BFARNsrHmZ%2B9sMGBd%2FfFNWI3kt4RJUh1qgyZu8wKkvrywcqgBHL7COxIADKOrKrnpqdANnRNtTglEOlGf6MSj%2F6Iy1o3meOyX2W9n0L9gdePPG4RPe%2FD8Uh%2BjH5D2serL3cBg7hnUsDlLqxFbDgKcPiF98Qoj1nOmalfeCjazwKsZphkRGKPxupbD0dq56plJX4ejoDM7kXnrNyeoEzhXzwBhXWcgp%2Bbk9KrBXGQquIgACYnCoccq%2BKShpQB9gG94GLEQQR2F51axmx%2Fae8xfyiOOqsGzVGT1kb7lR%2FksF2P%2BlHpt%2Fr6amMMyO08IGOqUBOQ8NQLeP8Kxed7sYWl6BK0KrgIfK7sk9vDY6DZXXdLMaFh4RF0lZplCYUfo%2FRdRw9hMywTRD2i8IM06CR47cfCcvU9V07ZhwXZ9Y58IP%2Fpl1BI31DT0HXPPQmZh9xDXkJW3FZw%2FUyT36AWn7QXH%2F1f6qocaALawv1OxFI2zei%2BW%2BwEHJAHO43K3EIkiAFJ8eKn%2F06O%2BbsJtPDGdfz%2BXyNY5qK0Rn&X-Amz-Signature=acbc13eefc45289c1915bb597838ed340538c673173870e6461a63817226654b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666FXI4J3%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T034009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjbJz29P6VtpUgfl7QH4WE234kaj72dFc5V3fPSVFQkQIgQI7g5bWm%2F18pSqNw9VhWFhGVUnYlzFqwkKAoSHcAK%2FUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPq470J3aTdmo5xTUCrcAxti8jainq1z6R6H%2BcJ0rEgRGkjro2RFdz6Rg2YI1R4B9VLNsx0XHG0d2OYjGJO8AtROSuS4YJxWiX5DusM1t0nbQm7pA%2FFWaLCUwakrRreDXwQrC2oI7FT7DrC53M7XP5wXFZbMPJzCxwZttX6K5cpSqHt3vunwfqztCInJbCJ86BE0wSIJJ61eIuojgZQHUl21yVM79IrkY3YHVqRPkX96JC%2BWqukJCh%2FKJ8ve1BV4I81%2B9RaPE0dAokm0cgCyS%2FAAKMvouFUp8%2BhrUwOx0SsJ25oBZNSnipGZ4Q6pK186K7ystvWiVfrJwOveXwRPgDIk87%2BFARNsrHmZ%2B9sMGBd%2FfFNWI3kt4RJUh1qgyZu8wKkvrywcqgBHL7COxIADKOrKrnpqdANnRNtTglEOlGf6MSj%2F6Iy1o3meOyX2W9n0L9gdePPG4RPe%2FD8Uh%2BjH5D2serL3cBg7hnUsDlLqxFbDgKcPiF98Qoj1nOmalfeCjazwKsZphkRGKPxupbD0dq56plJX4ejoDM7kXnrNyeoEzhXzwBhXWcgp%2Bbk9KrBXGQquIgACYnCoccq%2BKShpQB9gG94GLEQQR2F51axmx%2Fae8xfyiOOqsGzVGT1kb7lR%2FksF2P%2BlHpt%2Fr6amMMyO08IGOqUBOQ8NQLeP8Kxed7sYWl6BK0KrgIfK7sk9vDY6DZXXdLMaFh4RF0lZplCYUfo%2FRdRw9hMywTRD2i8IM06CR47cfCcvU9V07ZhwXZ9Y58IP%2Fpl1BI31DT0HXPPQmZh9xDXkJW3FZw%2FUyT36AWn7QXH%2F1f6qocaALawv1OxFI2zei%2BW%2BwEHJAHO43K3EIkiAFJ8eKn%2F06O%2BbsJtPDGdfz%2BXyNY5qK0Rn&X-Amz-Signature=365bdf4b1070d34a4c17f085aefae1533459e48975bbba4063b0e6890851d55b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666FXI4J3%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T034009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjbJz29P6VtpUgfl7QH4WE234kaj72dFc5V3fPSVFQkQIgQI7g5bWm%2F18pSqNw9VhWFhGVUnYlzFqwkKAoSHcAK%2FUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPq470J3aTdmo5xTUCrcAxti8jainq1z6R6H%2BcJ0rEgRGkjro2RFdz6Rg2YI1R4B9VLNsx0XHG0d2OYjGJO8AtROSuS4YJxWiX5DusM1t0nbQm7pA%2FFWaLCUwakrRreDXwQrC2oI7FT7DrC53M7XP5wXFZbMPJzCxwZttX6K5cpSqHt3vunwfqztCInJbCJ86BE0wSIJJ61eIuojgZQHUl21yVM79IrkY3YHVqRPkX96JC%2BWqukJCh%2FKJ8ve1BV4I81%2B9RaPE0dAokm0cgCyS%2FAAKMvouFUp8%2BhrUwOx0SsJ25oBZNSnipGZ4Q6pK186K7ystvWiVfrJwOveXwRPgDIk87%2BFARNsrHmZ%2B9sMGBd%2FfFNWI3kt4RJUh1qgyZu8wKkvrywcqgBHL7COxIADKOrKrnpqdANnRNtTglEOlGf6MSj%2F6Iy1o3meOyX2W9n0L9gdePPG4RPe%2FD8Uh%2BjH5D2serL3cBg7hnUsDlLqxFbDgKcPiF98Qoj1nOmalfeCjazwKsZphkRGKPxupbD0dq56plJX4ejoDM7kXnrNyeoEzhXzwBhXWcgp%2Bbk9KrBXGQquIgACYnCoccq%2BKShpQB9gG94GLEQQR2F51axmx%2Fae8xfyiOOqsGzVGT1kb7lR%2FksF2P%2BlHpt%2Fr6amMMyO08IGOqUBOQ8NQLeP8Kxed7sYWl6BK0KrgIfK7sk9vDY6DZXXdLMaFh4RF0lZplCYUfo%2FRdRw9hMywTRD2i8IM06CR47cfCcvU9V07ZhwXZ9Y58IP%2Fpl1BI31DT0HXPPQmZh9xDXkJW3FZw%2FUyT36AWn7QXH%2F1f6qocaALawv1OxFI2zei%2BW%2BwEHJAHO43K3EIkiAFJ8eKn%2F06O%2BbsJtPDGdfz%2BXyNY5qK0Rn&X-Amz-Signature=69dfb0049b327663c541f0453d08c260b90ef9c3a5a8f71d6bfdf77869f0fb0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666FXI4J3%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T034009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjbJz29P6VtpUgfl7QH4WE234kaj72dFc5V3fPSVFQkQIgQI7g5bWm%2F18pSqNw9VhWFhGVUnYlzFqwkKAoSHcAK%2FUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPq470J3aTdmo5xTUCrcAxti8jainq1z6R6H%2BcJ0rEgRGkjro2RFdz6Rg2YI1R4B9VLNsx0XHG0d2OYjGJO8AtROSuS4YJxWiX5DusM1t0nbQm7pA%2FFWaLCUwakrRreDXwQrC2oI7FT7DrC53M7XP5wXFZbMPJzCxwZttX6K5cpSqHt3vunwfqztCInJbCJ86BE0wSIJJ61eIuojgZQHUl21yVM79IrkY3YHVqRPkX96JC%2BWqukJCh%2FKJ8ve1BV4I81%2B9RaPE0dAokm0cgCyS%2FAAKMvouFUp8%2BhrUwOx0SsJ25oBZNSnipGZ4Q6pK186K7ystvWiVfrJwOveXwRPgDIk87%2BFARNsrHmZ%2B9sMGBd%2FfFNWI3kt4RJUh1qgyZu8wKkvrywcqgBHL7COxIADKOrKrnpqdANnRNtTglEOlGf6MSj%2F6Iy1o3meOyX2W9n0L9gdePPG4RPe%2FD8Uh%2BjH5D2serL3cBg7hnUsDlLqxFbDgKcPiF98Qoj1nOmalfeCjazwKsZphkRGKPxupbD0dq56plJX4ejoDM7kXnrNyeoEzhXzwBhXWcgp%2Bbk9KrBXGQquIgACYnCoccq%2BKShpQB9gG94GLEQQR2F51axmx%2Fae8xfyiOOqsGzVGT1kb7lR%2FksF2P%2BlHpt%2Fr6amMMyO08IGOqUBOQ8NQLeP8Kxed7sYWl6BK0KrgIfK7sk9vDY6DZXXdLMaFh4RF0lZplCYUfo%2FRdRw9hMywTRD2i8IM06CR47cfCcvU9V07ZhwXZ9Y58IP%2Fpl1BI31DT0HXPPQmZh9xDXkJW3FZw%2FUyT36AWn7QXH%2F1f6qocaALawv1OxFI2zei%2BW%2BwEHJAHO43K3EIkiAFJ8eKn%2F06O%2BbsJtPDGdfz%2BXyNY5qK0Rn&X-Amz-Signature=a78a4c5a15df0c43a7c29212c29d3829b8cfa4ad439f05ca33a621db3d386193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666FXI4J3%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T034009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjbJz29P6VtpUgfl7QH4WE234kaj72dFc5V3fPSVFQkQIgQI7g5bWm%2F18pSqNw9VhWFhGVUnYlzFqwkKAoSHcAK%2FUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPq470J3aTdmo5xTUCrcAxti8jainq1z6R6H%2BcJ0rEgRGkjro2RFdz6Rg2YI1R4B9VLNsx0XHG0d2OYjGJO8AtROSuS4YJxWiX5DusM1t0nbQm7pA%2FFWaLCUwakrRreDXwQrC2oI7FT7DrC53M7XP5wXFZbMPJzCxwZttX6K5cpSqHt3vunwfqztCInJbCJ86BE0wSIJJ61eIuojgZQHUl21yVM79IrkY3YHVqRPkX96JC%2BWqukJCh%2FKJ8ve1BV4I81%2B9RaPE0dAokm0cgCyS%2FAAKMvouFUp8%2BhrUwOx0SsJ25oBZNSnipGZ4Q6pK186K7ystvWiVfrJwOveXwRPgDIk87%2BFARNsrHmZ%2B9sMGBd%2FfFNWI3kt4RJUh1qgyZu8wKkvrywcqgBHL7COxIADKOrKrnpqdANnRNtTglEOlGf6MSj%2F6Iy1o3meOyX2W9n0L9gdePPG4RPe%2FD8Uh%2BjH5D2serL3cBg7hnUsDlLqxFbDgKcPiF98Qoj1nOmalfeCjazwKsZphkRGKPxupbD0dq56plJX4ejoDM7kXnrNyeoEzhXzwBhXWcgp%2Bbk9KrBXGQquIgACYnCoccq%2BKShpQB9gG94GLEQQR2F51axmx%2Fae8xfyiOOqsGzVGT1kb7lR%2FksF2P%2BlHpt%2Fr6amMMyO08IGOqUBOQ8NQLeP8Kxed7sYWl6BK0KrgIfK7sk9vDY6DZXXdLMaFh4RF0lZplCYUfo%2FRdRw9hMywTRD2i8IM06CR47cfCcvU9V07ZhwXZ9Y58IP%2Fpl1BI31DT0HXPPQmZh9xDXkJW3FZw%2FUyT36AWn7QXH%2F1f6qocaALawv1OxFI2zei%2BW%2BwEHJAHO43K3EIkiAFJ8eKn%2F06O%2BbsJtPDGdfz%2BXyNY5qK0Rn&X-Amz-Signature=36bfb0aff9f99338627a312d58b2e85574943ea93b9944db51ea42e8e5ca3112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
