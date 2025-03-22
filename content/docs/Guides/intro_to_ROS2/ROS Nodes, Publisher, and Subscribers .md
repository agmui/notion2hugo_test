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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STJS5XDJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDkuyhVL9B2NgCc6qsf0d%2BQGladS5eBLeK3VlOeVJFM6gIhAIyzrRQOmnfSX4yuKSNSitcTVrlEiLwuC%2FpKmAjuymQfKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydeKxuBjLTjQjf6ucq3AOAmZsSnW%2FbzSt%2B9Ahy6Bs7QsoW80tqLbermdAa67Cvo43WBZWe74z0Xwn8V57zlATQ51q8OFgfwytn1gFSZVPiujNjPnbDFcTnphtKlJrT225i3WAP1ZxWiMtmuVtCY77rklTZBWVeqNTnByu1Grf%2BhNuPISnKYxi3NJo7yLzUyt3p%2BH1mFg9CczkTqp1yREBoP0waLP6WL44mB7BiwO36PWS4qFc9a5YlE%2FkJUBePWJD10VrLpPNt7PobZftzh9%2BhRfhNISvCd8Xy3%2FbjYFpMI01Iu%2ByJxg6R1vwiOMarzmNnjnUkGGQdt3WYff7EG0kKYeoSlQA2COIRRQnRIcjvNntuQFsXVDFyUTZ3SYSl3gB09tDfuqD8mABkqfooBNBebmGUAWtEYiX7CY4VJGDRwv4qGpdrxpOEQRD1%2Bfe2H02W8IwZuCqpliU2yBzVDUN6pluR8Ymor5jkJ%2FOz%2FGBUAws43sTZfpPTUqXNsltRHeJhr6isKb%2BpxLq77XI%2B9KFEDf0%2FWVfatofFU4rChMXwebalul6CGSQ7fVh5TaSRAttlIy%2FQyhg6uOGe3MGvpM99ZoQTXJKtsxiDJmvJn2jOiBQXRB3NEUCIyUOB4bjaTjBoJamMcywVjI%2BlljDNrfq%2BBjqkAYkuE1d5IDdery87%2FdIlcuqKaEU%2FNRyh0KHgLgG%2BVSzf1%2FpbraAqkH2yXxTwIb0j99Hw9jqDNeyd%2BsJ7uBzoSpM8NTjgOmWDHDFN2xR13oC848vyKaqWT25oE3jNtltS2Qx7jMO%2BWclw31dAKkOk8%2B1gX8mQWgYj8VVMlsXKsJMLVsTBqsCOtuPspawq2KqmJPwY6%2Bb%2BVEovYsL2dHm2eJUOzwYU&X-Amz-Signature=e862787571b35cac6487c2e6f33b347ac525c906e2b43356cc454a44b9a8e631&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STJS5XDJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDkuyhVL9B2NgCc6qsf0d%2BQGladS5eBLeK3VlOeVJFM6gIhAIyzrRQOmnfSX4yuKSNSitcTVrlEiLwuC%2FpKmAjuymQfKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydeKxuBjLTjQjf6ucq3AOAmZsSnW%2FbzSt%2B9Ahy6Bs7QsoW80tqLbermdAa67Cvo43WBZWe74z0Xwn8V57zlATQ51q8OFgfwytn1gFSZVPiujNjPnbDFcTnphtKlJrT225i3WAP1ZxWiMtmuVtCY77rklTZBWVeqNTnByu1Grf%2BhNuPISnKYxi3NJo7yLzUyt3p%2BH1mFg9CczkTqp1yREBoP0waLP6WL44mB7BiwO36PWS4qFc9a5YlE%2FkJUBePWJD10VrLpPNt7PobZftzh9%2BhRfhNISvCd8Xy3%2FbjYFpMI01Iu%2ByJxg6R1vwiOMarzmNnjnUkGGQdt3WYff7EG0kKYeoSlQA2COIRRQnRIcjvNntuQFsXVDFyUTZ3SYSl3gB09tDfuqD8mABkqfooBNBebmGUAWtEYiX7CY4VJGDRwv4qGpdrxpOEQRD1%2Bfe2H02W8IwZuCqpliU2yBzVDUN6pluR8Ymor5jkJ%2FOz%2FGBUAws43sTZfpPTUqXNsltRHeJhr6isKb%2BpxLq77XI%2B9KFEDf0%2FWVfatofFU4rChMXwebalul6CGSQ7fVh5TaSRAttlIy%2FQyhg6uOGe3MGvpM99ZoQTXJKtsxiDJmvJn2jOiBQXRB3NEUCIyUOB4bjaTjBoJamMcywVjI%2BlljDNrfq%2BBjqkAYkuE1d5IDdery87%2FdIlcuqKaEU%2FNRyh0KHgLgG%2BVSzf1%2FpbraAqkH2yXxTwIb0j99Hw9jqDNeyd%2BsJ7uBzoSpM8NTjgOmWDHDFN2xR13oC848vyKaqWT25oE3jNtltS2Qx7jMO%2BWclw31dAKkOk8%2B1gX8mQWgYj8VVMlsXKsJMLVsTBqsCOtuPspawq2KqmJPwY6%2Bb%2BVEovYsL2dHm2eJUOzwYU&X-Amz-Signature=7e40092903e887d20a1903ef346a5e5ff28e290c9c94c4144140b01e5db19673&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STJS5XDJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDkuyhVL9B2NgCc6qsf0d%2BQGladS5eBLeK3VlOeVJFM6gIhAIyzrRQOmnfSX4yuKSNSitcTVrlEiLwuC%2FpKmAjuymQfKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydeKxuBjLTjQjf6ucq3AOAmZsSnW%2FbzSt%2B9Ahy6Bs7QsoW80tqLbermdAa67Cvo43WBZWe74z0Xwn8V57zlATQ51q8OFgfwytn1gFSZVPiujNjPnbDFcTnphtKlJrT225i3WAP1ZxWiMtmuVtCY77rklTZBWVeqNTnByu1Grf%2BhNuPISnKYxi3NJo7yLzUyt3p%2BH1mFg9CczkTqp1yREBoP0waLP6WL44mB7BiwO36PWS4qFc9a5YlE%2FkJUBePWJD10VrLpPNt7PobZftzh9%2BhRfhNISvCd8Xy3%2FbjYFpMI01Iu%2ByJxg6R1vwiOMarzmNnjnUkGGQdt3WYff7EG0kKYeoSlQA2COIRRQnRIcjvNntuQFsXVDFyUTZ3SYSl3gB09tDfuqD8mABkqfooBNBebmGUAWtEYiX7CY4VJGDRwv4qGpdrxpOEQRD1%2Bfe2H02W8IwZuCqpliU2yBzVDUN6pluR8Ymor5jkJ%2FOz%2FGBUAws43sTZfpPTUqXNsltRHeJhr6isKb%2BpxLq77XI%2B9KFEDf0%2FWVfatofFU4rChMXwebalul6CGSQ7fVh5TaSRAttlIy%2FQyhg6uOGe3MGvpM99ZoQTXJKtsxiDJmvJn2jOiBQXRB3NEUCIyUOB4bjaTjBoJamMcywVjI%2BlljDNrfq%2BBjqkAYkuE1d5IDdery87%2FdIlcuqKaEU%2FNRyh0KHgLgG%2BVSzf1%2FpbraAqkH2yXxTwIb0j99Hw9jqDNeyd%2BsJ7uBzoSpM8NTjgOmWDHDFN2xR13oC848vyKaqWT25oE3jNtltS2Qx7jMO%2BWclw31dAKkOk8%2B1gX8mQWgYj8VVMlsXKsJMLVsTBqsCOtuPspawq2KqmJPwY6%2Bb%2BVEovYsL2dHm2eJUOzwYU&X-Amz-Signature=fe63850edc8c2c69414f270ee57277c38951214b0e636baa58939dd1cc162255&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STJS5XDJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDkuyhVL9B2NgCc6qsf0d%2BQGladS5eBLeK3VlOeVJFM6gIhAIyzrRQOmnfSX4yuKSNSitcTVrlEiLwuC%2FpKmAjuymQfKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydeKxuBjLTjQjf6ucq3AOAmZsSnW%2FbzSt%2B9Ahy6Bs7QsoW80tqLbermdAa67Cvo43WBZWe74z0Xwn8V57zlATQ51q8OFgfwytn1gFSZVPiujNjPnbDFcTnphtKlJrT225i3WAP1ZxWiMtmuVtCY77rklTZBWVeqNTnByu1Grf%2BhNuPISnKYxi3NJo7yLzUyt3p%2BH1mFg9CczkTqp1yREBoP0waLP6WL44mB7BiwO36PWS4qFc9a5YlE%2FkJUBePWJD10VrLpPNt7PobZftzh9%2BhRfhNISvCd8Xy3%2FbjYFpMI01Iu%2ByJxg6R1vwiOMarzmNnjnUkGGQdt3WYff7EG0kKYeoSlQA2COIRRQnRIcjvNntuQFsXVDFyUTZ3SYSl3gB09tDfuqD8mABkqfooBNBebmGUAWtEYiX7CY4VJGDRwv4qGpdrxpOEQRD1%2Bfe2H02W8IwZuCqpliU2yBzVDUN6pluR8Ymor5jkJ%2FOz%2FGBUAws43sTZfpPTUqXNsltRHeJhr6isKb%2BpxLq77XI%2B9KFEDf0%2FWVfatofFU4rChMXwebalul6CGSQ7fVh5TaSRAttlIy%2FQyhg6uOGe3MGvpM99ZoQTXJKtsxiDJmvJn2jOiBQXRB3NEUCIyUOB4bjaTjBoJamMcywVjI%2BlljDNrfq%2BBjqkAYkuE1d5IDdery87%2FdIlcuqKaEU%2FNRyh0KHgLgG%2BVSzf1%2FpbraAqkH2yXxTwIb0j99Hw9jqDNeyd%2BsJ7uBzoSpM8NTjgOmWDHDFN2xR13oC848vyKaqWT25oE3jNtltS2Qx7jMO%2BWclw31dAKkOk8%2B1gX8mQWgYj8VVMlsXKsJMLVsTBqsCOtuPspawq2KqmJPwY6%2Bb%2BVEovYsL2dHm2eJUOzwYU&X-Amz-Signature=0f25bfae8aed19f27eada35015bc0d763520c7e9ce9d9036a4a2efdc5cd17118&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STJS5XDJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDkuyhVL9B2NgCc6qsf0d%2BQGladS5eBLeK3VlOeVJFM6gIhAIyzrRQOmnfSX4yuKSNSitcTVrlEiLwuC%2FpKmAjuymQfKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydeKxuBjLTjQjf6ucq3AOAmZsSnW%2FbzSt%2B9Ahy6Bs7QsoW80tqLbermdAa67Cvo43WBZWe74z0Xwn8V57zlATQ51q8OFgfwytn1gFSZVPiujNjPnbDFcTnphtKlJrT225i3WAP1ZxWiMtmuVtCY77rklTZBWVeqNTnByu1Grf%2BhNuPISnKYxi3NJo7yLzUyt3p%2BH1mFg9CczkTqp1yREBoP0waLP6WL44mB7BiwO36PWS4qFc9a5YlE%2FkJUBePWJD10VrLpPNt7PobZftzh9%2BhRfhNISvCd8Xy3%2FbjYFpMI01Iu%2ByJxg6R1vwiOMarzmNnjnUkGGQdt3WYff7EG0kKYeoSlQA2COIRRQnRIcjvNntuQFsXVDFyUTZ3SYSl3gB09tDfuqD8mABkqfooBNBebmGUAWtEYiX7CY4VJGDRwv4qGpdrxpOEQRD1%2Bfe2H02W8IwZuCqpliU2yBzVDUN6pluR8Ymor5jkJ%2FOz%2FGBUAws43sTZfpPTUqXNsltRHeJhr6isKb%2BpxLq77XI%2B9KFEDf0%2FWVfatofFU4rChMXwebalul6CGSQ7fVh5TaSRAttlIy%2FQyhg6uOGe3MGvpM99ZoQTXJKtsxiDJmvJn2jOiBQXRB3NEUCIyUOB4bjaTjBoJamMcywVjI%2BlljDNrfq%2BBjqkAYkuE1d5IDdery87%2FdIlcuqKaEU%2FNRyh0KHgLgG%2BVSzf1%2FpbraAqkH2yXxTwIb0j99Hw9jqDNeyd%2BsJ7uBzoSpM8NTjgOmWDHDFN2xR13oC848vyKaqWT25oE3jNtltS2Qx7jMO%2BWclw31dAKkOk8%2B1gX8mQWgYj8VVMlsXKsJMLVsTBqsCOtuPspawq2KqmJPwY6%2Bb%2BVEovYsL2dHm2eJUOzwYU&X-Amz-Signature=b0708c2229632ea89f60107e849419ec67783bfe12ec3728952e3646d8fb33d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STJS5XDJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDkuyhVL9B2NgCc6qsf0d%2BQGladS5eBLeK3VlOeVJFM6gIhAIyzrRQOmnfSX4yuKSNSitcTVrlEiLwuC%2FpKmAjuymQfKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydeKxuBjLTjQjf6ucq3AOAmZsSnW%2FbzSt%2B9Ahy6Bs7QsoW80tqLbermdAa67Cvo43WBZWe74z0Xwn8V57zlATQ51q8OFgfwytn1gFSZVPiujNjPnbDFcTnphtKlJrT225i3WAP1ZxWiMtmuVtCY77rklTZBWVeqNTnByu1Grf%2BhNuPISnKYxi3NJo7yLzUyt3p%2BH1mFg9CczkTqp1yREBoP0waLP6WL44mB7BiwO36PWS4qFc9a5YlE%2FkJUBePWJD10VrLpPNt7PobZftzh9%2BhRfhNISvCd8Xy3%2FbjYFpMI01Iu%2ByJxg6R1vwiOMarzmNnjnUkGGQdt3WYff7EG0kKYeoSlQA2COIRRQnRIcjvNntuQFsXVDFyUTZ3SYSl3gB09tDfuqD8mABkqfooBNBebmGUAWtEYiX7CY4VJGDRwv4qGpdrxpOEQRD1%2Bfe2H02W8IwZuCqpliU2yBzVDUN6pluR8Ymor5jkJ%2FOz%2FGBUAws43sTZfpPTUqXNsltRHeJhr6isKb%2BpxLq77XI%2B9KFEDf0%2FWVfatofFU4rChMXwebalul6CGSQ7fVh5TaSRAttlIy%2FQyhg6uOGe3MGvpM99ZoQTXJKtsxiDJmvJn2jOiBQXRB3NEUCIyUOB4bjaTjBoJamMcywVjI%2BlljDNrfq%2BBjqkAYkuE1d5IDdery87%2FdIlcuqKaEU%2FNRyh0KHgLgG%2BVSzf1%2FpbraAqkH2yXxTwIb0j99Hw9jqDNeyd%2BsJ7uBzoSpM8NTjgOmWDHDFN2xR13oC848vyKaqWT25oE3jNtltS2Qx7jMO%2BWclw31dAKkOk8%2B1gX8mQWgYj8VVMlsXKsJMLVsTBqsCOtuPspawq2KqmJPwY6%2Bb%2BVEovYsL2dHm2eJUOzwYU&X-Amz-Signature=cbea2d7cd327ab09d088896fce4da2442e4fa4dfd70ec37d395824f366d9733b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STJS5XDJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDkuyhVL9B2NgCc6qsf0d%2BQGladS5eBLeK3VlOeVJFM6gIhAIyzrRQOmnfSX4yuKSNSitcTVrlEiLwuC%2FpKmAjuymQfKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydeKxuBjLTjQjf6ucq3AOAmZsSnW%2FbzSt%2B9Ahy6Bs7QsoW80tqLbermdAa67Cvo43WBZWe74z0Xwn8V57zlATQ51q8OFgfwytn1gFSZVPiujNjPnbDFcTnphtKlJrT225i3WAP1ZxWiMtmuVtCY77rklTZBWVeqNTnByu1Grf%2BhNuPISnKYxi3NJo7yLzUyt3p%2BH1mFg9CczkTqp1yREBoP0waLP6WL44mB7BiwO36PWS4qFc9a5YlE%2FkJUBePWJD10VrLpPNt7PobZftzh9%2BhRfhNISvCd8Xy3%2FbjYFpMI01Iu%2ByJxg6R1vwiOMarzmNnjnUkGGQdt3WYff7EG0kKYeoSlQA2COIRRQnRIcjvNntuQFsXVDFyUTZ3SYSl3gB09tDfuqD8mABkqfooBNBebmGUAWtEYiX7CY4VJGDRwv4qGpdrxpOEQRD1%2Bfe2H02W8IwZuCqpliU2yBzVDUN6pluR8Ymor5jkJ%2FOz%2FGBUAws43sTZfpPTUqXNsltRHeJhr6isKb%2BpxLq77XI%2B9KFEDf0%2FWVfatofFU4rChMXwebalul6CGSQ7fVh5TaSRAttlIy%2FQyhg6uOGe3MGvpM99ZoQTXJKtsxiDJmvJn2jOiBQXRB3NEUCIyUOB4bjaTjBoJamMcywVjI%2BlljDNrfq%2BBjqkAYkuE1d5IDdery87%2FdIlcuqKaEU%2FNRyh0KHgLgG%2BVSzf1%2FpbraAqkH2yXxTwIb0j99Hw9jqDNeyd%2BsJ7uBzoSpM8NTjgOmWDHDFN2xR13oC848vyKaqWT25oE3jNtltS2Qx7jMO%2BWclw31dAKkOk8%2B1gX8mQWgYj8VVMlsXKsJMLVsTBqsCOtuPspawq2KqmJPwY6%2Bb%2BVEovYsL2dHm2eJUOzwYU&X-Amz-Signature=236bba1a42d75887044e9689e3c323921723053aeae03b4aff8acf79235dd11b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STJS5XDJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDkuyhVL9B2NgCc6qsf0d%2BQGladS5eBLeK3VlOeVJFM6gIhAIyzrRQOmnfSX4yuKSNSitcTVrlEiLwuC%2FpKmAjuymQfKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydeKxuBjLTjQjf6ucq3AOAmZsSnW%2FbzSt%2B9Ahy6Bs7QsoW80tqLbermdAa67Cvo43WBZWe74z0Xwn8V57zlATQ51q8OFgfwytn1gFSZVPiujNjPnbDFcTnphtKlJrT225i3WAP1ZxWiMtmuVtCY77rklTZBWVeqNTnByu1Grf%2BhNuPISnKYxi3NJo7yLzUyt3p%2BH1mFg9CczkTqp1yREBoP0waLP6WL44mB7BiwO36PWS4qFc9a5YlE%2FkJUBePWJD10VrLpPNt7PobZftzh9%2BhRfhNISvCd8Xy3%2FbjYFpMI01Iu%2ByJxg6R1vwiOMarzmNnjnUkGGQdt3WYff7EG0kKYeoSlQA2COIRRQnRIcjvNntuQFsXVDFyUTZ3SYSl3gB09tDfuqD8mABkqfooBNBebmGUAWtEYiX7CY4VJGDRwv4qGpdrxpOEQRD1%2Bfe2H02W8IwZuCqpliU2yBzVDUN6pluR8Ymor5jkJ%2FOz%2FGBUAws43sTZfpPTUqXNsltRHeJhr6isKb%2BpxLq77XI%2B9KFEDf0%2FWVfatofFU4rChMXwebalul6CGSQ7fVh5TaSRAttlIy%2FQyhg6uOGe3MGvpM99ZoQTXJKtsxiDJmvJn2jOiBQXRB3NEUCIyUOB4bjaTjBoJamMcywVjI%2BlljDNrfq%2BBjqkAYkuE1d5IDdery87%2FdIlcuqKaEU%2FNRyh0KHgLgG%2BVSzf1%2FpbraAqkH2yXxTwIb0j99Hw9jqDNeyd%2BsJ7uBzoSpM8NTjgOmWDHDFN2xR13oC848vyKaqWT25oE3jNtltS2Qx7jMO%2BWclw31dAKkOk8%2B1gX8mQWgYj8VVMlsXKsJMLVsTBqsCOtuPspawq2KqmJPwY6%2Bb%2BVEovYsL2dHm2eJUOzwYU&X-Amz-Signature=ed4dc69aead2bee282b8a79a695f2c4b42dc644600a55fce8c0c6907a175ba99&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
