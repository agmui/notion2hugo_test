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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQRDBBJT%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T180854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc27R35uVIs%2BDqv9TmcX%2FGN3S5EhkPf9HgSVXYw0uv2gIhAKwm%2FqSC3imAPNSN1YvuiZ2euEfMzErnF2zl6tOP3wURKv8DCBYQABoMNjM3NDIzMTgzODA1IgzItYvcpoEWF6JiFmsq3ANwjz6teK9OUCaG70HoRPleytEkWoBqTvfS7OVZsodVejumNjlhP5V%2B9lGlI529f8ZxCfIvCOcG2ZANM0%2BpE0V%2FcdKIutFus08N6C7Sug7qCR%2BbMvAuH%2Bf40%2BbN%2BjrQWxyYjrM45XortWJ7Sc2eWjPNVP6y%2BDfJon5lrcIqmkaEfbOHWKJuFpjxk%2Baqsop6xyUCufnaBqyEGwErBDkFljgSUH8OlLu1WJ39kSOXt26RhooeT%2FCX5GZhn4E%2BZx%2Bt0i3MpUIiZ8mGaXFB3m2sDZnvqcnUAA39QgRjY%2By6wjmdoOy%2F1w4vnYHCICYETYL2IhVceGnPW4Ekti8TgbT99vGlB9n2wG5K5beNV%2BYZrPMCPCaRkxzwLeg07UGXP%2Bty8vomf2I%2BFyc9W2Upwqowh10i1rH3v7%2FOr0lwjh9yam5GMTBITT%2FucbvGAy%2BAcT0Df805PBU5Agl1l2Nv87IEPTQ%2BUG%2F2h84muKCUMymd83D9TmYyx8b9YTZIAKGSb8z9%2Bz5R%2B1uexuRk5llfoumo6D4IK3p9ImSD%2FMhpAwPbRJENKpvWBioZ%2FiF4Wa%2BbYrVd2dswMN9qwNxzhh9HIfuN6mOIEjlityHNSh0f13rJ8JxgJrgnmOU95%2FOB2%2B5ESDDGsOy9BjqkAV9Ld%2F%2FyhdFCTxNoD8wZ8mRdGCNRfEwP3s5M8%2BWrEL7x%2FmwZePGJ3jvjkMPAHHN8Ua3Qo9%2BXqZUIgpqKtDPtUMUP%2ByZ%2FhIAa9csYiqYpDrEuRdtnFT8MemkaMjwykt5Kn8dOp%2FSVN4N3tth0cTa9raVIIwQIAwDtRPjjLu1Sj8nVV26Sw4IYiLGhUdJ4xKqIeSkO08nZPdvY9zTNtAaq7yMEsb6M&X-Amz-Signature=aab2846ede72bb27a0a19a07aae79a28d9d8bb5de6e9c9672b152e77dd40797a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQRDBBJT%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T180854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc27R35uVIs%2BDqv9TmcX%2FGN3S5EhkPf9HgSVXYw0uv2gIhAKwm%2FqSC3imAPNSN1YvuiZ2euEfMzErnF2zl6tOP3wURKv8DCBYQABoMNjM3NDIzMTgzODA1IgzItYvcpoEWF6JiFmsq3ANwjz6teK9OUCaG70HoRPleytEkWoBqTvfS7OVZsodVejumNjlhP5V%2B9lGlI529f8ZxCfIvCOcG2ZANM0%2BpE0V%2FcdKIutFus08N6C7Sug7qCR%2BbMvAuH%2Bf40%2BbN%2BjrQWxyYjrM45XortWJ7Sc2eWjPNVP6y%2BDfJon5lrcIqmkaEfbOHWKJuFpjxk%2Baqsop6xyUCufnaBqyEGwErBDkFljgSUH8OlLu1WJ39kSOXt26RhooeT%2FCX5GZhn4E%2BZx%2Bt0i3MpUIiZ8mGaXFB3m2sDZnvqcnUAA39QgRjY%2By6wjmdoOy%2F1w4vnYHCICYETYL2IhVceGnPW4Ekti8TgbT99vGlB9n2wG5K5beNV%2BYZrPMCPCaRkxzwLeg07UGXP%2Bty8vomf2I%2BFyc9W2Upwqowh10i1rH3v7%2FOr0lwjh9yam5GMTBITT%2FucbvGAy%2BAcT0Df805PBU5Agl1l2Nv87IEPTQ%2BUG%2F2h84muKCUMymd83D9TmYyx8b9YTZIAKGSb8z9%2Bz5R%2B1uexuRk5llfoumo6D4IK3p9ImSD%2FMhpAwPbRJENKpvWBioZ%2FiF4Wa%2BbYrVd2dswMN9qwNxzhh9HIfuN6mOIEjlityHNSh0f13rJ8JxgJrgnmOU95%2FOB2%2B5ESDDGsOy9BjqkAV9Ld%2F%2FyhdFCTxNoD8wZ8mRdGCNRfEwP3s5M8%2BWrEL7x%2FmwZePGJ3jvjkMPAHHN8Ua3Qo9%2BXqZUIgpqKtDPtUMUP%2ByZ%2FhIAa9csYiqYpDrEuRdtnFT8MemkaMjwykt5Kn8dOp%2FSVN4N3tth0cTa9raVIIwQIAwDtRPjjLu1Sj8nVV26Sw4IYiLGhUdJ4xKqIeSkO08nZPdvY9zTNtAaq7yMEsb6M&X-Amz-Signature=67f79934892d9f8ca4848b0c67d91cfeb64d474b5afe830860c471d98d5961a8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQRDBBJT%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T180854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc27R35uVIs%2BDqv9TmcX%2FGN3S5EhkPf9HgSVXYw0uv2gIhAKwm%2FqSC3imAPNSN1YvuiZ2euEfMzErnF2zl6tOP3wURKv8DCBYQABoMNjM3NDIzMTgzODA1IgzItYvcpoEWF6JiFmsq3ANwjz6teK9OUCaG70HoRPleytEkWoBqTvfS7OVZsodVejumNjlhP5V%2B9lGlI529f8ZxCfIvCOcG2ZANM0%2BpE0V%2FcdKIutFus08N6C7Sug7qCR%2BbMvAuH%2Bf40%2BbN%2BjrQWxyYjrM45XortWJ7Sc2eWjPNVP6y%2BDfJon5lrcIqmkaEfbOHWKJuFpjxk%2Baqsop6xyUCufnaBqyEGwErBDkFljgSUH8OlLu1WJ39kSOXt26RhooeT%2FCX5GZhn4E%2BZx%2Bt0i3MpUIiZ8mGaXFB3m2sDZnvqcnUAA39QgRjY%2By6wjmdoOy%2F1w4vnYHCICYETYL2IhVceGnPW4Ekti8TgbT99vGlB9n2wG5K5beNV%2BYZrPMCPCaRkxzwLeg07UGXP%2Bty8vomf2I%2BFyc9W2Upwqowh10i1rH3v7%2FOr0lwjh9yam5GMTBITT%2FucbvGAy%2BAcT0Df805PBU5Agl1l2Nv87IEPTQ%2BUG%2F2h84muKCUMymd83D9TmYyx8b9YTZIAKGSb8z9%2Bz5R%2B1uexuRk5llfoumo6D4IK3p9ImSD%2FMhpAwPbRJENKpvWBioZ%2FiF4Wa%2BbYrVd2dswMN9qwNxzhh9HIfuN6mOIEjlityHNSh0f13rJ8JxgJrgnmOU95%2FOB2%2B5ESDDGsOy9BjqkAV9Ld%2F%2FyhdFCTxNoD8wZ8mRdGCNRfEwP3s5M8%2BWrEL7x%2FmwZePGJ3jvjkMPAHHN8Ua3Qo9%2BXqZUIgpqKtDPtUMUP%2ByZ%2FhIAa9csYiqYpDrEuRdtnFT8MemkaMjwykt5Kn8dOp%2FSVN4N3tth0cTa9raVIIwQIAwDtRPjjLu1Sj8nVV26Sw4IYiLGhUdJ4xKqIeSkO08nZPdvY9zTNtAaq7yMEsb6M&X-Amz-Signature=ca64a037986504b2a9455820d3a9514b525bc6e0c12f9df8480eab9e509aa10f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQRDBBJT%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T180854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc27R35uVIs%2BDqv9TmcX%2FGN3S5EhkPf9HgSVXYw0uv2gIhAKwm%2FqSC3imAPNSN1YvuiZ2euEfMzErnF2zl6tOP3wURKv8DCBYQABoMNjM3NDIzMTgzODA1IgzItYvcpoEWF6JiFmsq3ANwjz6teK9OUCaG70HoRPleytEkWoBqTvfS7OVZsodVejumNjlhP5V%2B9lGlI529f8ZxCfIvCOcG2ZANM0%2BpE0V%2FcdKIutFus08N6C7Sug7qCR%2BbMvAuH%2Bf40%2BbN%2BjrQWxyYjrM45XortWJ7Sc2eWjPNVP6y%2BDfJon5lrcIqmkaEfbOHWKJuFpjxk%2Baqsop6xyUCufnaBqyEGwErBDkFljgSUH8OlLu1WJ39kSOXt26RhooeT%2FCX5GZhn4E%2BZx%2Bt0i3MpUIiZ8mGaXFB3m2sDZnvqcnUAA39QgRjY%2By6wjmdoOy%2F1w4vnYHCICYETYL2IhVceGnPW4Ekti8TgbT99vGlB9n2wG5K5beNV%2BYZrPMCPCaRkxzwLeg07UGXP%2Bty8vomf2I%2BFyc9W2Upwqowh10i1rH3v7%2FOr0lwjh9yam5GMTBITT%2FucbvGAy%2BAcT0Df805PBU5Agl1l2Nv87IEPTQ%2BUG%2F2h84muKCUMymd83D9TmYyx8b9YTZIAKGSb8z9%2Bz5R%2B1uexuRk5llfoumo6D4IK3p9ImSD%2FMhpAwPbRJENKpvWBioZ%2FiF4Wa%2BbYrVd2dswMN9qwNxzhh9HIfuN6mOIEjlityHNSh0f13rJ8JxgJrgnmOU95%2FOB2%2B5ESDDGsOy9BjqkAV9Ld%2F%2FyhdFCTxNoD8wZ8mRdGCNRfEwP3s5M8%2BWrEL7x%2FmwZePGJ3jvjkMPAHHN8Ua3Qo9%2BXqZUIgpqKtDPtUMUP%2ByZ%2FhIAa9csYiqYpDrEuRdtnFT8MemkaMjwykt5Kn8dOp%2FSVN4N3tth0cTa9raVIIwQIAwDtRPjjLu1Sj8nVV26Sw4IYiLGhUdJ4xKqIeSkO08nZPdvY9zTNtAaq7yMEsb6M&X-Amz-Signature=f9b1d77383ac9845b391d433d68b23e161aba2b0926ccd4565baa029e661ff1a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQRDBBJT%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T180854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc27R35uVIs%2BDqv9TmcX%2FGN3S5EhkPf9HgSVXYw0uv2gIhAKwm%2FqSC3imAPNSN1YvuiZ2euEfMzErnF2zl6tOP3wURKv8DCBYQABoMNjM3NDIzMTgzODA1IgzItYvcpoEWF6JiFmsq3ANwjz6teK9OUCaG70HoRPleytEkWoBqTvfS7OVZsodVejumNjlhP5V%2B9lGlI529f8ZxCfIvCOcG2ZANM0%2BpE0V%2FcdKIutFus08N6C7Sug7qCR%2BbMvAuH%2Bf40%2BbN%2BjrQWxyYjrM45XortWJ7Sc2eWjPNVP6y%2BDfJon5lrcIqmkaEfbOHWKJuFpjxk%2Baqsop6xyUCufnaBqyEGwErBDkFljgSUH8OlLu1WJ39kSOXt26RhooeT%2FCX5GZhn4E%2BZx%2Bt0i3MpUIiZ8mGaXFB3m2sDZnvqcnUAA39QgRjY%2By6wjmdoOy%2F1w4vnYHCICYETYL2IhVceGnPW4Ekti8TgbT99vGlB9n2wG5K5beNV%2BYZrPMCPCaRkxzwLeg07UGXP%2Bty8vomf2I%2BFyc9W2Upwqowh10i1rH3v7%2FOr0lwjh9yam5GMTBITT%2FucbvGAy%2BAcT0Df805PBU5Agl1l2Nv87IEPTQ%2BUG%2F2h84muKCUMymd83D9TmYyx8b9YTZIAKGSb8z9%2Bz5R%2B1uexuRk5llfoumo6D4IK3p9ImSD%2FMhpAwPbRJENKpvWBioZ%2FiF4Wa%2BbYrVd2dswMN9qwNxzhh9HIfuN6mOIEjlityHNSh0f13rJ8JxgJrgnmOU95%2FOB2%2B5ESDDGsOy9BjqkAV9Ld%2F%2FyhdFCTxNoD8wZ8mRdGCNRfEwP3s5M8%2BWrEL7x%2FmwZePGJ3jvjkMPAHHN8Ua3Qo9%2BXqZUIgpqKtDPtUMUP%2ByZ%2FhIAa9csYiqYpDrEuRdtnFT8MemkaMjwykt5Kn8dOp%2FSVN4N3tth0cTa9raVIIwQIAwDtRPjjLu1Sj8nVV26Sw4IYiLGhUdJ4xKqIeSkO08nZPdvY9zTNtAaq7yMEsb6M&X-Amz-Signature=78e677d749ef3ee69de3ae2c26e31f5d1abbf934a1bbac30d985e07736819172&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQRDBBJT%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T180854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc27R35uVIs%2BDqv9TmcX%2FGN3S5EhkPf9HgSVXYw0uv2gIhAKwm%2FqSC3imAPNSN1YvuiZ2euEfMzErnF2zl6tOP3wURKv8DCBYQABoMNjM3NDIzMTgzODA1IgzItYvcpoEWF6JiFmsq3ANwjz6teK9OUCaG70HoRPleytEkWoBqTvfS7OVZsodVejumNjlhP5V%2B9lGlI529f8ZxCfIvCOcG2ZANM0%2BpE0V%2FcdKIutFus08N6C7Sug7qCR%2BbMvAuH%2Bf40%2BbN%2BjrQWxyYjrM45XortWJ7Sc2eWjPNVP6y%2BDfJon5lrcIqmkaEfbOHWKJuFpjxk%2Baqsop6xyUCufnaBqyEGwErBDkFljgSUH8OlLu1WJ39kSOXt26RhooeT%2FCX5GZhn4E%2BZx%2Bt0i3MpUIiZ8mGaXFB3m2sDZnvqcnUAA39QgRjY%2By6wjmdoOy%2F1w4vnYHCICYETYL2IhVceGnPW4Ekti8TgbT99vGlB9n2wG5K5beNV%2BYZrPMCPCaRkxzwLeg07UGXP%2Bty8vomf2I%2BFyc9W2Upwqowh10i1rH3v7%2FOr0lwjh9yam5GMTBITT%2FucbvGAy%2BAcT0Df805PBU5Agl1l2Nv87IEPTQ%2BUG%2F2h84muKCUMymd83D9TmYyx8b9YTZIAKGSb8z9%2Bz5R%2B1uexuRk5llfoumo6D4IK3p9ImSD%2FMhpAwPbRJENKpvWBioZ%2FiF4Wa%2BbYrVd2dswMN9qwNxzhh9HIfuN6mOIEjlityHNSh0f13rJ8JxgJrgnmOU95%2FOB2%2B5ESDDGsOy9BjqkAV9Ld%2F%2FyhdFCTxNoD8wZ8mRdGCNRfEwP3s5M8%2BWrEL7x%2FmwZePGJ3jvjkMPAHHN8Ua3Qo9%2BXqZUIgpqKtDPtUMUP%2ByZ%2FhIAa9csYiqYpDrEuRdtnFT8MemkaMjwykt5Kn8dOp%2FSVN4N3tth0cTa9raVIIwQIAwDtRPjjLu1Sj8nVV26Sw4IYiLGhUdJ4xKqIeSkO08nZPdvY9zTNtAaq7yMEsb6M&X-Amz-Signature=31ceab9c3437adbf50d39993643b24d41f8b31e60bc49925fafdc69b52ece351&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQRDBBJT%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T180854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc27R35uVIs%2BDqv9TmcX%2FGN3S5EhkPf9HgSVXYw0uv2gIhAKwm%2FqSC3imAPNSN1YvuiZ2euEfMzErnF2zl6tOP3wURKv8DCBYQABoMNjM3NDIzMTgzODA1IgzItYvcpoEWF6JiFmsq3ANwjz6teK9OUCaG70HoRPleytEkWoBqTvfS7OVZsodVejumNjlhP5V%2B9lGlI529f8ZxCfIvCOcG2ZANM0%2BpE0V%2FcdKIutFus08N6C7Sug7qCR%2BbMvAuH%2Bf40%2BbN%2BjrQWxyYjrM45XortWJ7Sc2eWjPNVP6y%2BDfJon5lrcIqmkaEfbOHWKJuFpjxk%2Baqsop6xyUCufnaBqyEGwErBDkFljgSUH8OlLu1WJ39kSOXt26RhooeT%2FCX5GZhn4E%2BZx%2Bt0i3MpUIiZ8mGaXFB3m2sDZnvqcnUAA39QgRjY%2By6wjmdoOy%2F1w4vnYHCICYETYL2IhVceGnPW4Ekti8TgbT99vGlB9n2wG5K5beNV%2BYZrPMCPCaRkxzwLeg07UGXP%2Bty8vomf2I%2BFyc9W2Upwqowh10i1rH3v7%2FOr0lwjh9yam5GMTBITT%2FucbvGAy%2BAcT0Df805PBU5Agl1l2Nv87IEPTQ%2BUG%2F2h84muKCUMymd83D9TmYyx8b9YTZIAKGSb8z9%2Bz5R%2B1uexuRk5llfoumo6D4IK3p9ImSD%2FMhpAwPbRJENKpvWBioZ%2FiF4Wa%2BbYrVd2dswMN9qwNxzhh9HIfuN6mOIEjlityHNSh0f13rJ8JxgJrgnmOU95%2FOB2%2B5ESDDGsOy9BjqkAV9Ld%2F%2FyhdFCTxNoD8wZ8mRdGCNRfEwP3s5M8%2BWrEL7x%2FmwZePGJ3jvjkMPAHHN8Ua3Qo9%2BXqZUIgpqKtDPtUMUP%2ByZ%2FhIAa9csYiqYpDrEuRdtnFT8MemkaMjwykt5Kn8dOp%2FSVN4N3tth0cTa9raVIIwQIAwDtRPjjLu1Sj8nVV26Sw4IYiLGhUdJ4xKqIeSkO08nZPdvY9zTNtAaq7yMEsb6M&X-Amz-Signature=f645d3698c99ddf4073408b80558248d38bde93c213ae57734555ef10d19dd18&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQRDBBJT%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T180854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc27R35uVIs%2BDqv9TmcX%2FGN3S5EhkPf9HgSVXYw0uv2gIhAKwm%2FqSC3imAPNSN1YvuiZ2euEfMzErnF2zl6tOP3wURKv8DCBYQABoMNjM3NDIzMTgzODA1IgzItYvcpoEWF6JiFmsq3ANwjz6teK9OUCaG70HoRPleytEkWoBqTvfS7OVZsodVejumNjlhP5V%2B9lGlI529f8ZxCfIvCOcG2ZANM0%2BpE0V%2FcdKIutFus08N6C7Sug7qCR%2BbMvAuH%2Bf40%2BbN%2BjrQWxyYjrM45XortWJ7Sc2eWjPNVP6y%2BDfJon5lrcIqmkaEfbOHWKJuFpjxk%2Baqsop6xyUCufnaBqyEGwErBDkFljgSUH8OlLu1WJ39kSOXt26RhooeT%2FCX5GZhn4E%2BZx%2Bt0i3MpUIiZ8mGaXFB3m2sDZnvqcnUAA39QgRjY%2By6wjmdoOy%2F1w4vnYHCICYETYL2IhVceGnPW4Ekti8TgbT99vGlB9n2wG5K5beNV%2BYZrPMCPCaRkxzwLeg07UGXP%2Bty8vomf2I%2BFyc9W2Upwqowh10i1rH3v7%2FOr0lwjh9yam5GMTBITT%2FucbvGAy%2BAcT0Df805PBU5Agl1l2Nv87IEPTQ%2BUG%2F2h84muKCUMymd83D9TmYyx8b9YTZIAKGSb8z9%2Bz5R%2B1uexuRk5llfoumo6D4IK3p9ImSD%2FMhpAwPbRJENKpvWBioZ%2FiF4Wa%2BbYrVd2dswMN9qwNxzhh9HIfuN6mOIEjlityHNSh0f13rJ8JxgJrgnmOU95%2FOB2%2B5ESDDGsOy9BjqkAV9Ld%2F%2FyhdFCTxNoD8wZ8mRdGCNRfEwP3s5M8%2BWrEL7x%2FmwZePGJ3jvjkMPAHHN8Ua3Qo9%2BXqZUIgpqKtDPtUMUP%2ByZ%2FhIAa9csYiqYpDrEuRdtnFT8MemkaMjwykt5Kn8dOp%2FSVN4N3tth0cTa9raVIIwQIAwDtRPjjLu1Sj8nVV26Sw4IYiLGhUdJ4xKqIeSkO08nZPdvY9zTNtAaq7yMEsb6M&X-Amz-Signature=df0a938537d5150b861c7de84ceeae96113fe35523c6637bd56e7b8dc0955173&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
