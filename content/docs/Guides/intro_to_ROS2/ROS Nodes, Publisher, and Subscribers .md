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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBM5CYZS%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDkPDDBB6qTrxfnVKVpEz233YEV6MNrhKBk%2BZbDf92moAIgc%2FoB%2FLj8xA1ZRWGpdweaCppIkSLnLqNFuxu4SJKOHoQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFB8PFYydg4SEgqY6ircAyYqiDDtS0kux1V5JoSoZqT96yxSipkxtic9sf9vAlFO0A6ovPg8FKn90MJfVhD2ePzeQb9XKppvBBr2xHx4Du%2B4qRoFiM8%2BvJ3G6KTFh0mqp59o6lcyUQlCxh0ptiCIRvmK8ldOsCtqghkQn8ybomJZpIyBfT2Wxo5FOylHR7V%2BZcYxG5s4WXj4s%2BPpkNsnX4ZDOR6QSTdFX%2F7wJaLxfbDNg3fLTVHnc5InELaHshxitspmoFbT4BaPvn1w1pUGoJovGyBnNeZhcIxAqMKk5cK1OqyRB%2BmjL%2F7sKObo8BcFlgOmwF2VgmtCcJpxIEaBaMrfF7fv0veZFWwrDFfYhDWLUDTFKpFkzlpsMN%2BTPig60Ui9EzB5rAGTLYZpgFYL7zVLY0Iia85UtmWq%2BmzuVyzGjwCIor96N5FZAOvw8FoGYbnqqDvb%2FG7UdPS2pmYb3BuwPqjpex%2B7ltI5d1J5wGq5CSm2Lcorbq3qeKNBbgOJyUMHamdol7kG5HD5uUMZfsPxa0QzakVBoLiPWH8FnyEy6MrhWbnLSdbpMsuFFSBOo73uPiXRdSSC5vqzpOFGO7gXl4Kn7pp2rI%2FfXcrFzh%2F3I7ZzGKlouEXQ%2F18MavbVMeCGQTpu%2FBToKVzNMIuMr8IGOqUBZbH%2FEgpVCYSbmK7NwiUoPAigPLoqwVKu57qFyEmT7AV0bDKPgaZR49uP8X0z3gPEPYR%2BU4WNyTzC%2FORmuuxK8VtbMLFfNzR28hA0iJ7Yb9Pi2szRFwvaO7webr4saEbgICg2OJl0ikB76pvhy3zW69Wcm3DBI2kfVMIeiZZYKND3q2AI7dFZIl9NiBnmftOX0kSFzyCGDMcTKO7u2f8c1xhmBxYQ&X-Amz-Signature=17db523303fd5838f6f62c0195084af5649b2a02c4c02ab335b0ca673145146a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBM5CYZS%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDkPDDBB6qTrxfnVKVpEz233YEV6MNrhKBk%2BZbDf92moAIgc%2FoB%2FLj8xA1ZRWGpdweaCppIkSLnLqNFuxu4SJKOHoQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFB8PFYydg4SEgqY6ircAyYqiDDtS0kux1V5JoSoZqT96yxSipkxtic9sf9vAlFO0A6ovPg8FKn90MJfVhD2ePzeQb9XKppvBBr2xHx4Du%2B4qRoFiM8%2BvJ3G6KTFh0mqp59o6lcyUQlCxh0ptiCIRvmK8ldOsCtqghkQn8ybomJZpIyBfT2Wxo5FOylHR7V%2BZcYxG5s4WXj4s%2BPpkNsnX4ZDOR6QSTdFX%2F7wJaLxfbDNg3fLTVHnc5InELaHshxitspmoFbT4BaPvn1w1pUGoJovGyBnNeZhcIxAqMKk5cK1OqyRB%2BmjL%2F7sKObo8BcFlgOmwF2VgmtCcJpxIEaBaMrfF7fv0veZFWwrDFfYhDWLUDTFKpFkzlpsMN%2BTPig60Ui9EzB5rAGTLYZpgFYL7zVLY0Iia85UtmWq%2BmzuVyzGjwCIor96N5FZAOvw8FoGYbnqqDvb%2FG7UdPS2pmYb3BuwPqjpex%2B7ltI5d1J5wGq5CSm2Lcorbq3qeKNBbgOJyUMHamdol7kG5HD5uUMZfsPxa0QzakVBoLiPWH8FnyEy6MrhWbnLSdbpMsuFFSBOo73uPiXRdSSC5vqzpOFGO7gXl4Kn7pp2rI%2FfXcrFzh%2F3I7ZzGKlouEXQ%2F18MavbVMeCGQTpu%2FBToKVzNMIuMr8IGOqUBZbH%2FEgpVCYSbmK7NwiUoPAigPLoqwVKu57qFyEmT7AV0bDKPgaZR49uP8X0z3gPEPYR%2BU4WNyTzC%2FORmuuxK8VtbMLFfNzR28hA0iJ7Yb9Pi2szRFwvaO7webr4saEbgICg2OJl0ikB76pvhy3zW69Wcm3DBI2kfVMIeiZZYKND3q2AI7dFZIl9NiBnmftOX0kSFzyCGDMcTKO7u2f8c1xhmBxYQ&X-Amz-Signature=db0e79c9f2aedfc5b4740fe002add2942e7a0b264e42628816d205b615dfcc90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBM5CYZS%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDkPDDBB6qTrxfnVKVpEz233YEV6MNrhKBk%2BZbDf92moAIgc%2FoB%2FLj8xA1ZRWGpdweaCppIkSLnLqNFuxu4SJKOHoQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFB8PFYydg4SEgqY6ircAyYqiDDtS0kux1V5JoSoZqT96yxSipkxtic9sf9vAlFO0A6ovPg8FKn90MJfVhD2ePzeQb9XKppvBBr2xHx4Du%2B4qRoFiM8%2BvJ3G6KTFh0mqp59o6lcyUQlCxh0ptiCIRvmK8ldOsCtqghkQn8ybomJZpIyBfT2Wxo5FOylHR7V%2BZcYxG5s4WXj4s%2BPpkNsnX4ZDOR6QSTdFX%2F7wJaLxfbDNg3fLTVHnc5InELaHshxitspmoFbT4BaPvn1w1pUGoJovGyBnNeZhcIxAqMKk5cK1OqyRB%2BmjL%2F7sKObo8BcFlgOmwF2VgmtCcJpxIEaBaMrfF7fv0veZFWwrDFfYhDWLUDTFKpFkzlpsMN%2BTPig60Ui9EzB5rAGTLYZpgFYL7zVLY0Iia85UtmWq%2BmzuVyzGjwCIor96N5FZAOvw8FoGYbnqqDvb%2FG7UdPS2pmYb3BuwPqjpex%2B7ltI5d1J5wGq5CSm2Lcorbq3qeKNBbgOJyUMHamdol7kG5HD5uUMZfsPxa0QzakVBoLiPWH8FnyEy6MrhWbnLSdbpMsuFFSBOo73uPiXRdSSC5vqzpOFGO7gXl4Kn7pp2rI%2FfXcrFzh%2F3I7ZzGKlouEXQ%2F18MavbVMeCGQTpu%2FBToKVzNMIuMr8IGOqUBZbH%2FEgpVCYSbmK7NwiUoPAigPLoqwVKu57qFyEmT7AV0bDKPgaZR49uP8X0z3gPEPYR%2BU4WNyTzC%2FORmuuxK8VtbMLFfNzR28hA0iJ7Yb9Pi2szRFwvaO7webr4saEbgICg2OJl0ikB76pvhy3zW69Wcm3DBI2kfVMIeiZZYKND3q2AI7dFZIl9NiBnmftOX0kSFzyCGDMcTKO7u2f8c1xhmBxYQ&X-Amz-Signature=c8635351e5d9fe3d889023fcdd65c09342250e85445633c5f40c7fd43b05d6d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBM5CYZS%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDkPDDBB6qTrxfnVKVpEz233YEV6MNrhKBk%2BZbDf92moAIgc%2FoB%2FLj8xA1ZRWGpdweaCppIkSLnLqNFuxu4SJKOHoQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFB8PFYydg4SEgqY6ircAyYqiDDtS0kux1V5JoSoZqT96yxSipkxtic9sf9vAlFO0A6ovPg8FKn90MJfVhD2ePzeQb9XKppvBBr2xHx4Du%2B4qRoFiM8%2BvJ3G6KTFh0mqp59o6lcyUQlCxh0ptiCIRvmK8ldOsCtqghkQn8ybomJZpIyBfT2Wxo5FOylHR7V%2BZcYxG5s4WXj4s%2BPpkNsnX4ZDOR6QSTdFX%2F7wJaLxfbDNg3fLTVHnc5InELaHshxitspmoFbT4BaPvn1w1pUGoJovGyBnNeZhcIxAqMKk5cK1OqyRB%2BmjL%2F7sKObo8BcFlgOmwF2VgmtCcJpxIEaBaMrfF7fv0veZFWwrDFfYhDWLUDTFKpFkzlpsMN%2BTPig60Ui9EzB5rAGTLYZpgFYL7zVLY0Iia85UtmWq%2BmzuVyzGjwCIor96N5FZAOvw8FoGYbnqqDvb%2FG7UdPS2pmYb3BuwPqjpex%2B7ltI5d1J5wGq5CSm2Lcorbq3qeKNBbgOJyUMHamdol7kG5HD5uUMZfsPxa0QzakVBoLiPWH8FnyEy6MrhWbnLSdbpMsuFFSBOo73uPiXRdSSC5vqzpOFGO7gXl4Kn7pp2rI%2FfXcrFzh%2F3I7ZzGKlouEXQ%2F18MavbVMeCGQTpu%2FBToKVzNMIuMr8IGOqUBZbH%2FEgpVCYSbmK7NwiUoPAigPLoqwVKu57qFyEmT7AV0bDKPgaZR49uP8X0z3gPEPYR%2BU4WNyTzC%2FORmuuxK8VtbMLFfNzR28hA0iJ7Yb9Pi2szRFwvaO7webr4saEbgICg2OJl0ikB76pvhy3zW69Wcm3DBI2kfVMIeiZZYKND3q2AI7dFZIl9NiBnmftOX0kSFzyCGDMcTKO7u2f8c1xhmBxYQ&X-Amz-Signature=b058325c8c8089d0f426dfd336a6a43d90a81e8dc509c229017cc1b82b8e8916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBM5CYZS%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDkPDDBB6qTrxfnVKVpEz233YEV6MNrhKBk%2BZbDf92moAIgc%2FoB%2FLj8xA1ZRWGpdweaCppIkSLnLqNFuxu4SJKOHoQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFB8PFYydg4SEgqY6ircAyYqiDDtS0kux1V5JoSoZqT96yxSipkxtic9sf9vAlFO0A6ovPg8FKn90MJfVhD2ePzeQb9XKppvBBr2xHx4Du%2B4qRoFiM8%2BvJ3G6KTFh0mqp59o6lcyUQlCxh0ptiCIRvmK8ldOsCtqghkQn8ybomJZpIyBfT2Wxo5FOylHR7V%2BZcYxG5s4WXj4s%2BPpkNsnX4ZDOR6QSTdFX%2F7wJaLxfbDNg3fLTVHnc5InELaHshxitspmoFbT4BaPvn1w1pUGoJovGyBnNeZhcIxAqMKk5cK1OqyRB%2BmjL%2F7sKObo8BcFlgOmwF2VgmtCcJpxIEaBaMrfF7fv0veZFWwrDFfYhDWLUDTFKpFkzlpsMN%2BTPig60Ui9EzB5rAGTLYZpgFYL7zVLY0Iia85UtmWq%2BmzuVyzGjwCIor96N5FZAOvw8FoGYbnqqDvb%2FG7UdPS2pmYb3BuwPqjpex%2B7ltI5d1J5wGq5CSm2Lcorbq3qeKNBbgOJyUMHamdol7kG5HD5uUMZfsPxa0QzakVBoLiPWH8FnyEy6MrhWbnLSdbpMsuFFSBOo73uPiXRdSSC5vqzpOFGO7gXl4Kn7pp2rI%2FfXcrFzh%2F3I7ZzGKlouEXQ%2F18MavbVMeCGQTpu%2FBToKVzNMIuMr8IGOqUBZbH%2FEgpVCYSbmK7NwiUoPAigPLoqwVKu57qFyEmT7AV0bDKPgaZR49uP8X0z3gPEPYR%2BU4WNyTzC%2FORmuuxK8VtbMLFfNzR28hA0iJ7Yb9Pi2szRFwvaO7webr4saEbgICg2OJl0ikB76pvhy3zW69Wcm3DBI2kfVMIeiZZYKND3q2AI7dFZIl9NiBnmftOX0kSFzyCGDMcTKO7u2f8c1xhmBxYQ&X-Amz-Signature=8a0d04cc887cfcba5794363c8c7ac3246d929bc79f67e8f3067bba1b0471103d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBM5CYZS%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDkPDDBB6qTrxfnVKVpEz233YEV6MNrhKBk%2BZbDf92moAIgc%2FoB%2FLj8xA1ZRWGpdweaCppIkSLnLqNFuxu4SJKOHoQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFB8PFYydg4SEgqY6ircAyYqiDDtS0kux1V5JoSoZqT96yxSipkxtic9sf9vAlFO0A6ovPg8FKn90MJfVhD2ePzeQb9XKppvBBr2xHx4Du%2B4qRoFiM8%2BvJ3G6KTFh0mqp59o6lcyUQlCxh0ptiCIRvmK8ldOsCtqghkQn8ybomJZpIyBfT2Wxo5FOylHR7V%2BZcYxG5s4WXj4s%2BPpkNsnX4ZDOR6QSTdFX%2F7wJaLxfbDNg3fLTVHnc5InELaHshxitspmoFbT4BaPvn1w1pUGoJovGyBnNeZhcIxAqMKk5cK1OqyRB%2BmjL%2F7sKObo8BcFlgOmwF2VgmtCcJpxIEaBaMrfF7fv0veZFWwrDFfYhDWLUDTFKpFkzlpsMN%2BTPig60Ui9EzB5rAGTLYZpgFYL7zVLY0Iia85UtmWq%2BmzuVyzGjwCIor96N5FZAOvw8FoGYbnqqDvb%2FG7UdPS2pmYb3BuwPqjpex%2B7ltI5d1J5wGq5CSm2Lcorbq3qeKNBbgOJyUMHamdol7kG5HD5uUMZfsPxa0QzakVBoLiPWH8FnyEy6MrhWbnLSdbpMsuFFSBOo73uPiXRdSSC5vqzpOFGO7gXl4Kn7pp2rI%2FfXcrFzh%2F3I7ZzGKlouEXQ%2F18MavbVMeCGQTpu%2FBToKVzNMIuMr8IGOqUBZbH%2FEgpVCYSbmK7NwiUoPAigPLoqwVKu57qFyEmT7AV0bDKPgaZR49uP8X0z3gPEPYR%2BU4WNyTzC%2FORmuuxK8VtbMLFfNzR28hA0iJ7Yb9Pi2szRFwvaO7webr4saEbgICg2OJl0ikB76pvhy3zW69Wcm3DBI2kfVMIeiZZYKND3q2AI7dFZIl9NiBnmftOX0kSFzyCGDMcTKO7u2f8c1xhmBxYQ&X-Amz-Signature=00e67393b3ee802c806165c1f0ce0bda2d5072da94dfba277231ef273bf0002e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBM5CYZS%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDkPDDBB6qTrxfnVKVpEz233YEV6MNrhKBk%2BZbDf92moAIgc%2FoB%2FLj8xA1ZRWGpdweaCppIkSLnLqNFuxu4SJKOHoQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFB8PFYydg4SEgqY6ircAyYqiDDtS0kux1V5JoSoZqT96yxSipkxtic9sf9vAlFO0A6ovPg8FKn90MJfVhD2ePzeQb9XKppvBBr2xHx4Du%2B4qRoFiM8%2BvJ3G6KTFh0mqp59o6lcyUQlCxh0ptiCIRvmK8ldOsCtqghkQn8ybomJZpIyBfT2Wxo5FOylHR7V%2BZcYxG5s4WXj4s%2BPpkNsnX4ZDOR6QSTdFX%2F7wJaLxfbDNg3fLTVHnc5InELaHshxitspmoFbT4BaPvn1w1pUGoJovGyBnNeZhcIxAqMKk5cK1OqyRB%2BmjL%2F7sKObo8BcFlgOmwF2VgmtCcJpxIEaBaMrfF7fv0veZFWwrDFfYhDWLUDTFKpFkzlpsMN%2BTPig60Ui9EzB5rAGTLYZpgFYL7zVLY0Iia85UtmWq%2BmzuVyzGjwCIor96N5FZAOvw8FoGYbnqqDvb%2FG7UdPS2pmYb3BuwPqjpex%2B7ltI5d1J5wGq5CSm2Lcorbq3qeKNBbgOJyUMHamdol7kG5HD5uUMZfsPxa0QzakVBoLiPWH8FnyEy6MrhWbnLSdbpMsuFFSBOo73uPiXRdSSC5vqzpOFGO7gXl4Kn7pp2rI%2FfXcrFzh%2F3I7ZzGKlouEXQ%2F18MavbVMeCGQTpu%2FBToKVzNMIuMr8IGOqUBZbH%2FEgpVCYSbmK7NwiUoPAigPLoqwVKu57qFyEmT7AV0bDKPgaZR49uP8X0z3gPEPYR%2BU4WNyTzC%2FORmuuxK8VtbMLFfNzR28hA0iJ7Yb9Pi2szRFwvaO7webr4saEbgICg2OJl0ikB76pvhy3zW69Wcm3DBI2kfVMIeiZZYKND3q2AI7dFZIl9NiBnmftOX0kSFzyCGDMcTKO7u2f8c1xhmBxYQ&X-Amz-Signature=3d7b1c374d41afc405964c90817863260d21974c6eba907671212303c7dc315f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBM5CYZS%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDkPDDBB6qTrxfnVKVpEz233YEV6MNrhKBk%2BZbDf92moAIgc%2FoB%2FLj8xA1ZRWGpdweaCppIkSLnLqNFuxu4SJKOHoQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFB8PFYydg4SEgqY6ircAyYqiDDtS0kux1V5JoSoZqT96yxSipkxtic9sf9vAlFO0A6ovPg8FKn90MJfVhD2ePzeQb9XKppvBBr2xHx4Du%2B4qRoFiM8%2BvJ3G6KTFh0mqp59o6lcyUQlCxh0ptiCIRvmK8ldOsCtqghkQn8ybomJZpIyBfT2Wxo5FOylHR7V%2BZcYxG5s4WXj4s%2BPpkNsnX4ZDOR6QSTdFX%2F7wJaLxfbDNg3fLTVHnc5InELaHshxitspmoFbT4BaPvn1w1pUGoJovGyBnNeZhcIxAqMKk5cK1OqyRB%2BmjL%2F7sKObo8BcFlgOmwF2VgmtCcJpxIEaBaMrfF7fv0veZFWwrDFfYhDWLUDTFKpFkzlpsMN%2BTPig60Ui9EzB5rAGTLYZpgFYL7zVLY0Iia85UtmWq%2BmzuVyzGjwCIor96N5FZAOvw8FoGYbnqqDvb%2FG7UdPS2pmYb3BuwPqjpex%2B7ltI5d1J5wGq5CSm2Lcorbq3qeKNBbgOJyUMHamdol7kG5HD5uUMZfsPxa0QzakVBoLiPWH8FnyEy6MrhWbnLSdbpMsuFFSBOo73uPiXRdSSC5vqzpOFGO7gXl4Kn7pp2rI%2FfXcrFzh%2F3I7ZzGKlouEXQ%2F18MavbVMeCGQTpu%2FBToKVzNMIuMr8IGOqUBZbH%2FEgpVCYSbmK7NwiUoPAigPLoqwVKu57qFyEmT7AV0bDKPgaZR49uP8X0z3gPEPYR%2BU4WNyTzC%2FORmuuxK8VtbMLFfNzR28hA0iJ7Yb9Pi2szRFwvaO7webr4saEbgICg2OJl0ikB76pvhy3zW69Wcm3DBI2kfVMIeiZZYKND3q2AI7dFZIl9NiBnmftOX0kSFzyCGDMcTKO7u2f8c1xhmBxYQ&X-Amz-Signature=402049dcbea8954be673db34e7c358f91a6d8b4dac0a0c08accbac8a1e441c70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
