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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6O6TX3Q%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIBKGtvZcQOvRg0pav5d9rSm%2BATy0vOww%2B5Cb5Nys97n0AiEAvNL9rjJsKrdXkVxORlkHdlvNyBo9vfToVC2xKUZBtpgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDFFFlNhkd7S0s5vVbCrcAwYmHdfWpkP%2FhWY00iZ4ZU9K%2BTK20O45kJ9GF58Ssc2SXFdj8cdKE4CVrsGMQWLbSfPyvlYsGa7pkQiE5mSnYcn52Spg%2FXLtqxR6q0hJL0demHudpv8EIhco4Djf246Ll5QtxNp19HJSAr1agNgcq1VstFKVBTm2FDxy7xJsuzxzXQvubPCeheV5WP6LnghIpUbpcbkn79ByOJl1FmfJ9PDuY9Kwc5qwmGSJzAniyAjosIfKffcwrQngARXQ35hsIrkIYRbkl1nfwT7Szvbz619cGi2bCLDcVPdvvri77tRfeR2H%2BKaO1BWQ0%2B2o41%2FzKm9Xh8diZ6WiLt8WGDatuGNya528Zk2O5REJpRunTmkephntQSOWRql8%2F%2BqyjlniX%2BTiP%2FC6YHxbKJUmVAssnH1Y87Npw5nCWK0fiTZmyuMbAcNGf9TZ5%2BwhwVAWMiV5OjFsEwi365vadUR8%2BqYenLu49yNoTqB0s0rqyTZiXScsWpy4q5wTfKgQ71sbJWSvqCkg%2Bv2vOjcng4PbVIYegHc0qauQxAseSkWlY42kaWB0Tt4u5m9m2FVKAW2MWWGfEvkmamIeCJA1I045ZenlhRA5DFJ%2BzmD8KJluOWagPYewyvfR0JPyWFrknwhqMIfu4cMGOqUBcS2zf4cN%2F1abqqZOCYoE12D8avcBJV4lypg6tXx4RuBhlXjdAIuk%2BoiNRmW%2FXk%2FqIY3%2B2idlfv8a2ue4i1YBEFJHYhjHyCbaG%2F%2BneAxwISQDbETvZ%2B59C4tMRkKEPLzjAsBfvsPhfa585PcOSdt7Ok53IrwtVBulYGVECP%2ByzA7p4GuiBSX%2F49ToyoRXce9O%2BimwNMDhgXW%2F%2FZZrsUPIv2tXb07S&X-Amz-Signature=cbed00afce7ed383fc4beb9a69bbaac27ad42863d2310cb931c3c1f5061e6f13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6O6TX3Q%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIBKGtvZcQOvRg0pav5d9rSm%2BATy0vOww%2B5Cb5Nys97n0AiEAvNL9rjJsKrdXkVxORlkHdlvNyBo9vfToVC2xKUZBtpgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDFFFlNhkd7S0s5vVbCrcAwYmHdfWpkP%2FhWY00iZ4ZU9K%2BTK20O45kJ9GF58Ssc2SXFdj8cdKE4CVrsGMQWLbSfPyvlYsGa7pkQiE5mSnYcn52Spg%2FXLtqxR6q0hJL0demHudpv8EIhco4Djf246Ll5QtxNp19HJSAr1agNgcq1VstFKVBTm2FDxy7xJsuzxzXQvubPCeheV5WP6LnghIpUbpcbkn79ByOJl1FmfJ9PDuY9Kwc5qwmGSJzAniyAjosIfKffcwrQngARXQ35hsIrkIYRbkl1nfwT7Szvbz619cGi2bCLDcVPdvvri77tRfeR2H%2BKaO1BWQ0%2B2o41%2FzKm9Xh8diZ6WiLt8WGDatuGNya528Zk2O5REJpRunTmkephntQSOWRql8%2F%2BqyjlniX%2BTiP%2FC6YHxbKJUmVAssnH1Y87Npw5nCWK0fiTZmyuMbAcNGf9TZ5%2BwhwVAWMiV5OjFsEwi365vadUR8%2BqYenLu49yNoTqB0s0rqyTZiXScsWpy4q5wTfKgQ71sbJWSvqCkg%2Bv2vOjcng4PbVIYegHc0qauQxAseSkWlY42kaWB0Tt4u5m9m2FVKAW2MWWGfEvkmamIeCJA1I045ZenlhRA5DFJ%2BzmD8KJluOWagPYewyvfR0JPyWFrknwhqMIfu4cMGOqUBcS2zf4cN%2F1abqqZOCYoE12D8avcBJV4lypg6tXx4RuBhlXjdAIuk%2BoiNRmW%2FXk%2FqIY3%2B2idlfv8a2ue4i1YBEFJHYhjHyCbaG%2F%2BneAxwISQDbETvZ%2B59C4tMRkKEPLzjAsBfvsPhfa585PcOSdt7Ok53IrwtVBulYGVECP%2ByzA7p4GuiBSX%2F49ToyoRXce9O%2BimwNMDhgXW%2F%2FZZrsUPIv2tXb07S&X-Amz-Signature=dc853056d6bb094784883a152db1238905592545899e3a3ceca29463aff18eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6O6TX3Q%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIBKGtvZcQOvRg0pav5d9rSm%2BATy0vOww%2B5Cb5Nys97n0AiEAvNL9rjJsKrdXkVxORlkHdlvNyBo9vfToVC2xKUZBtpgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDFFFlNhkd7S0s5vVbCrcAwYmHdfWpkP%2FhWY00iZ4ZU9K%2BTK20O45kJ9GF58Ssc2SXFdj8cdKE4CVrsGMQWLbSfPyvlYsGa7pkQiE5mSnYcn52Spg%2FXLtqxR6q0hJL0demHudpv8EIhco4Djf246Ll5QtxNp19HJSAr1agNgcq1VstFKVBTm2FDxy7xJsuzxzXQvubPCeheV5WP6LnghIpUbpcbkn79ByOJl1FmfJ9PDuY9Kwc5qwmGSJzAniyAjosIfKffcwrQngARXQ35hsIrkIYRbkl1nfwT7Szvbz619cGi2bCLDcVPdvvri77tRfeR2H%2BKaO1BWQ0%2B2o41%2FzKm9Xh8diZ6WiLt8WGDatuGNya528Zk2O5REJpRunTmkephntQSOWRql8%2F%2BqyjlniX%2BTiP%2FC6YHxbKJUmVAssnH1Y87Npw5nCWK0fiTZmyuMbAcNGf9TZ5%2BwhwVAWMiV5OjFsEwi365vadUR8%2BqYenLu49yNoTqB0s0rqyTZiXScsWpy4q5wTfKgQ71sbJWSvqCkg%2Bv2vOjcng4PbVIYegHc0qauQxAseSkWlY42kaWB0Tt4u5m9m2FVKAW2MWWGfEvkmamIeCJA1I045ZenlhRA5DFJ%2BzmD8KJluOWagPYewyvfR0JPyWFrknwhqMIfu4cMGOqUBcS2zf4cN%2F1abqqZOCYoE12D8avcBJV4lypg6tXx4RuBhlXjdAIuk%2BoiNRmW%2FXk%2FqIY3%2B2idlfv8a2ue4i1YBEFJHYhjHyCbaG%2F%2BneAxwISQDbETvZ%2B59C4tMRkKEPLzjAsBfvsPhfa585PcOSdt7Ok53IrwtVBulYGVECP%2ByzA7p4GuiBSX%2F49ToyoRXce9O%2BimwNMDhgXW%2F%2FZZrsUPIv2tXb07S&X-Amz-Signature=7adffeb0015b3eaa99f9c847af23ec3ef28e56e0228b2ddc21652feb84dd5e6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6O6TX3Q%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIBKGtvZcQOvRg0pav5d9rSm%2BATy0vOww%2B5Cb5Nys97n0AiEAvNL9rjJsKrdXkVxORlkHdlvNyBo9vfToVC2xKUZBtpgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDFFFlNhkd7S0s5vVbCrcAwYmHdfWpkP%2FhWY00iZ4ZU9K%2BTK20O45kJ9GF58Ssc2SXFdj8cdKE4CVrsGMQWLbSfPyvlYsGa7pkQiE5mSnYcn52Spg%2FXLtqxR6q0hJL0demHudpv8EIhco4Djf246Ll5QtxNp19HJSAr1agNgcq1VstFKVBTm2FDxy7xJsuzxzXQvubPCeheV5WP6LnghIpUbpcbkn79ByOJl1FmfJ9PDuY9Kwc5qwmGSJzAniyAjosIfKffcwrQngARXQ35hsIrkIYRbkl1nfwT7Szvbz619cGi2bCLDcVPdvvri77tRfeR2H%2BKaO1BWQ0%2B2o41%2FzKm9Xh8diZ6WiLt8WGDatuGNya528Zk2O5REJpRunTmkephntQSOWRql8%2F%2BqyjlniX%2BTiP%2FC6YHxbKJUmVAssnH1Y87Npw5nCWK0fiTZmyuMbAcNGf9TZ5%2BwhwVAWMiV5OjFsEwi365vadUR8%2BqYenLu49yNoTqB0s0rqyTZiXScsWpy4q5wTfKgQ71sbJWSvqCkg%2Bv2vOjcng4PbVIYegHc0qauQxAseSkWlY42kaWB0Tt4u5m9m2FVKAW2MWWGfEvkmamIeCJA1I045ZenlhRA5DFJ%2BzmD8KJluOWagPYewyvfR0JPyWFrknwhqMIfu4cMGOqUBcS2zf4cN%2F1abqqZOCYoE12D8avcBJV4lypg6tXx4RuBhlXjdAIuk%2BoiNRmW%2FXk%2FqIY3%2B2idlfv8a2ue4i1YBEFJHYhjHyCbaG%2F%2BneAxwISQDbETvZ%2B59C4tMRkKEPLzjAsBfvsPhfa585PcOSdt7Ok53IrwtVBulYGVECP%2ByzA7p4GuiBSX%2F49ToyoRXce9O%2BimwNMDhgXW%2F%2FZZrsUPIv2tXb07S&X-Amz-Signature=fcf50ac33637ff9e233c5245edf72b18f395f4080b4b3cdbf1d05a89a28d0a32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6O6TX3Q%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIBKGtvZcQOvRg0pav5d9rSm%2BATy0vOww%2B5Cb5Nys97n0AiEAvNL9rjJsKrdXkVxORlkHdlvNyBo9vfToVC2xKUZBtpgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDFFFlNhkd7S0s5vVbCrcAwYmHdfWpkP%2FhWY00iZ4ZU9K%2BTK20O45kJ9GF58Ssc2SXFdj8cdKE4CVrsGMQWLbSfPyvlYsGa7pkQiE5mSnYcn52Spg%2FXLtqxR6q0hJL0demHudpv8EIhco4Djf246Ll5QtxNp19HJSAr1agNgcq1VstFKVBTm2FDxy7xJsuzxzXQvubPCeheV5WP6LnghIpUbpcbkn79ByOJl1FmfJ9PDuY9Kwc5qwmGSJzAniyAjosIfKffcwrQngARXQ35hsIrkIYRbkl1nfwT7Szvbz619cGi2bCLDcVPdvvri77tRfeR2H%2BKaO1BWQ0%2B2o41%2FzKm9Xh8diZ6WiLt8WGDatuGNya528Zk2O5REJpRunTmkephntQSOWRql8%2F%2BqyjlniX%2BTiP%2FC6YHxbKJUmVAssnH1Y87Npw5nCWK0fiTZmyuMbAcNGf9TZ5%2BwhwVAWMiV5OjFsEwi365vadUR8%2BqYenLu49yNoTqB0s0rqyTZiXScsWpy4q5wTfKgQ71sbJWSvqCkg%2Bv2vOjcng4PbVIYegHc0qauQxAseSkWlY42kaWB0Tt4u5m9m2FVKAW2MWWGfEvkmamIeCJA1I045ZenlhRA5DFJ%2BzmD8KJluOWagPYewyvfR0JPyWFrknwhqMIfu4cMGOqUBcS2zf4cN%2F1abqqZOCYoE12D8avcBJV4lypg6tXx4RuBhlXjdAIuk%2BoiNRmW%2FXk%2FqIY3%2B2idlfv8a2ue4i1YBEFJHYhjHyCbaG%2F%2BneAxwISQDbETvZ%2B59C4tMRkKEPLzjAsBfvsPhfa585PcOSdt7Ok53IrwtVBulYGVECP%2ByzA7p4GuiBSX%2F49ToyoRXce9O%2BimwNMDhgXW%2F%2FZZrsUPIv2tXb07S&X-Amz-Signature=02109213a389571a26f0c84fd913da0191689bb23e6f4dc2f486cdbeac9b608c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6O6TX3Q%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIBKGtvZcQOvRg0pav5d9rSm%2BATy0vOww%2B5Cb5Nys97n0AiEAvNL9rjJsKrdXkVxORlkHdlvNyBo9vfToVC2xKUZBtpgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDFFFlNhkd7S0s5vVbCrcAwYmHdfWpkP%2FhWY00iZ4ZU9K%2BTK20O45kJ9GF58Ssc2SXFdj8cdKE4CVrsGMQWLbSfPyvlYsGa7pkQiE5mSnYcn52Spg%2FXLtqxR6q0hJL0demHudpv8EIhco4Djf246Ll5QtxNp19HJSAr1agNgcq1VstFKVBTm2FDxy7xJsuzxzXQvubPCeheV5WP6LnghIpUbpcbkn79ByOJl1FmfJ9PDuY9Kwc5qwmGSJzAniyAjosIfKffcwrQngARXQ35hsIrkIYRbkl1nfwT7Szvbz619cGi2bCLDcVPdvvri77tRfeR2H%2BKaO1BWQ0%2B2o41%2FzKm9Xh8diZ6WiLt8WGDatuGNya528Zk2O5REJpRunTmkephntQSOWRql8%2F%2BqyjlniX%2BTiP%2FC6YHxbKJUmVAssnH1Y87Npw5nCWK0fiTZmyuMbAcNGf9TZ5%2BwhwVAWMiV5OjFsEwi365vadUR8%2BqYenLu49yNoTqB0s0rqyTZiXScsWpy4q5wTfKgQ71sbJWSvqCkg%2Bv2vOjcng4PbVIYegHc0qauQxAseSkWlY42kaWB0Tt4u5m9m2FVKAW2MWWGfEvkmamIeCJA1I045ZenlhRA5DFJ%2BzmD8KJluOWagPYewyvfR0JPyWFrknwhqMIfu4cMGOqUBcS2zf4cN%2F1abqqZOCYoE12D8avcBJV4lypg6tXx4RuBhlXjdAIuk%2BoiNRmW%2FXk%2FqIY3%2B2idlfv8a2ue4i1YBEFJHYhjHyCbaG%2F%2BneAxwISQDbETvZ%2B59C4tMRkKEPLzjAsBfvsPhfa585PcOSdt7Ok53IrwtVBulYGVECP%2ByzA7p4GuiBSX%2F49ToyoRXce9O%2BimwNMDhgXW%2F%2FZZrsUPIv2tXb07S&X-Amz-Signature=30399ae313e33e2ea71a9131536c12ebd62d1882185d9f36970e236331fbed13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6O6TX3Q%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIBKGtvZcQOvRg0pav5d9rSm%2BATy0vOww%2B5Cb5Nys97n0AiEAvNL9rjJsKrdXkVxORlkHdlvNyBo9vfToVC2xKUZBtpgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDFFFlNhkd7S0s5vVbCrcAwYmHdfWpkP%2FhWY00iZ4ZU9K%2BTK20O45kJ9GF58Ssc2SXFdj8cdKE4CVrsGMQWLbSfPyvlYsGa7pkQiE5mSnYcn52Spg%2FXLtqxR6q0hJL0demHudpv8EIhco4Djf246Ll5QtxNp19HJSAr1agNgcq1VstFKVBTm2FDxy7xJsuzxzXQvubPCeheV5WP6LnghIpUbpcbkn79ByOJl1FmfJ9PDuY9Kwc5qwmGSJzAniyAjosIfKffcwrQngARXQ35hsIrkIYRbkl1nfwT7Szvbz619cGi2bCLDcVPdvvri77tRfeR2H%2BKaO1BWQ0%2B2o41%2FzKm9Xh8diZ6WiLt8WGDatuGNya528Zk2O5REJpRunTmkephntQSOWRql8%2F%2BqyjlniX%2BTiP%2FC6YHxbKJUmVAssnH1Y87Npw5nCWK0fiTZmyuMbAcNGf9TZ5%2BwhwVAWMiV5OjFsEwi365vadUR8%2BqYenLu49yNoTqB0s0rqyTZiXScsWpy4q5wTfKgQ71sbJWSvqCkg%2Bv2vOjcng4PbVIYegHc0qauQxAseSkWlY42kaWB0Tt4u5m9m2FVKAW2MWWGfEvkmamIeCJA1I045ZenlhRA5DFJ%2BzmD8KJluOWagPYewyvfR0JPyWFrknwhqMIfu4cMGOqUBcS2zf4cN%2F1abqqZOCYoE12D8avcBJV4lypg6tXx4RuBhlXjdAIuk%2BoiNRmW%2FXk%2FqIY3%2B2idlfv8a2ue4i1YBEFJHYhjHyCbaG%2F%2BneAxwISQDbETvZ%2B59C4tMRkKEPLzjAsBfvsPhfa585PcOSdt7Ok53IrwtVBulYGVECP%2ByzA7p4GuiBSX%2F49ToyoRXce9O%2BimwNMDhgXW%2F%2FZZrsUPIv2tXb07S&X-Amz-Signature=678883eeb745d012d388a42afbf8b5833feb5fb4e4c5e109628d86ba7517f8f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6O6TX3Q%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIBKGtvZcQOvRg0pav5d9rSm%2BATy0vOww%2B5Cb5Nys97n0AiEAvNL9rjJsKrdXkVxORlkHdlvNyBo9vfToVC2xKUZBtpgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDFFFlNhkd7S0s5vVbCrcAwYmHdfWpkP%2FhWY00iZ4ZU9K%2BTK20O45kJ9GF58Ssc2SXFdj8cdKE4CVrsGMQWLbSfPyvlYsGa7pkQiE5mSnYcn52Spg%2FXLtqxR6q0hJL0demHudpv8EIhco4Djf246Ll5QtxNp19HJSAr1agNgcq1VstFKVBTm2FDxy7xJsuzxzXQvubPCeheV5WP6LnghIpUbpcbkn79ByOJl1FmfJ9PDuY9Kwc5qwmGSJzAniyAjosIfKffcwrQngARXQ35hsIrkIYRbkl1nfwT7Szvbz619cGi2bCLDcVPdvvri77tRfeR2H%2BKaO1BWQ0%2B2o41%2FzKm9Xh8diZ6WiLt8WGDatuGNya528Zk2O5REJpRunTmkephntQSOWRql8%2F%2BqyjlniX%2BTiP%2FC6YHxbKJUmVAssnH1Y87Npw5nCWK0fiTZmyuMbAcNGf9TZ5%2BwhwVAWMiV5OjFsEwi365vadUR8%2BqYenLu49yNoTqB0s0rqyTZiXScsWpy4q5wTfKgQ71sbJWSvqCkg%2Bv2vOjcng4PbVIYegHc0qauQxAseSkWlY42kaWB0Tt4u5m9m2FVKAW2MWWGfEvkmamIeCJA1I045ZenlhRA5DFJ%2BzmD8KJluOWagPYewyvfR0JPyWFrknwhqMIfu4cMGOqUBcS2zf4cN%2F1abqqZOCYoE12D8avcBJV4lypg6tXx4RuBhlXjdAIuk%2BoiNRmW%2FXk%2FqIY3%2B2idlfv8a2ue4i1YBEFJHYhjHyCbaG%2F%2BneAxwISQDbETvZ%2B59C4tMRkKEPLzjAsBfvsPhfa585PcOSdt7Ok53IrwtVBulYGVECP%2ByzA7p4GuiBSX%2F49ToyoRXce9O%2BimwNMDhgXW%2F%2FZZrsUPIv2tXb07S&X-Amz-Signature=7a114111d0442e85ec9bd841039ae5bcc4030796ac14e7dd394881c494427113&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
