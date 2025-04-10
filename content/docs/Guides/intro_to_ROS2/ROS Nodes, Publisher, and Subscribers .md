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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YX2ARYX%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDfHKdfjp7IeTWt6vK8WOZEx4t5OIUGDogM0wwMJX%2BIRgIgfFMK9GEB4Sn3ldC4GEdeU%2F7Br7yctM6fqX2J1EPybTkqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDqqadRGHJLhEsqZjSrcA71VhJ3wBfJgIPl%2BcZdq%2BdwxVTJaPqb83tTak5EL9sWC8MsAB2XQTbiZmHSL1VbbaHLnLR7vLZ19ZWT5c%2FaYuD1WHR%2B3BCbBI5qtdVA9P8tVeYOJlPPnr3UfJin4bcyWsNMrfn9IHgOb6s28KNrrMCu5a1MUMcAL%2BAYSXs9p4BRGfmdGs3QtGSfvl1RgDxm0Gsr4%2BtcA1EewbbrVXrt5cxnoslel8dsvlfItEDe2YhPu0Ir3AqpfKZ9qzaM52MZBYcVfMX3S0sdYhttBHUry2mqXemkE59uZjajVGv4SaI4r7UKDyEkkxmCzf3Shuj7ZrIZyp1oqOb9KVj6FWPthS%2BkbnnIReKsQOBO7IyFXD76SQa87ufyC%2FZ6vnD18J5s3tsYlROhUm9iaIBmxzdv4zXg5jR6Dixk%2F3TXyfQmjmj6zVNvDGArix4yPZNLFFL2Mc90Te9r4v4Hh%2BNQNRU8yGktn6GmT1xIp80TnU66cRI1nukXUnb69Yh%2FprV8cUe2g0KQS1kjbjvP2lKvPSe%2F0vExuGQDVPq26EcK8iFA6cugW29yWLbnSiBHNJ4LlNWWe3DLnNh85bJsgDqCkgkV5xAv6aHRC6L8FIbjJgqFWDD0Fs%2Fjz%2FNEC1oAPo%2B78MIW6378GOqUBRzKPiqq7ZUBW8cH4oNVAOd39pZM8FNaZuGflV6ZT53Av3uBomvSfHXxLV88CzUxzbMkeI%2Boyw5N4k6rzWeo6cl66kf1z0lISkv%2FCpqzoZ0hqaeI4Wf1ec2UKEKdSqbd7Xg9WokemBi5416YoEeujBcE1pwMkOU9d3tDbPySPLr2HpR923D0uqN%2FPD5%2FTBg7FGiAOJCFuNHkhfTrpLiKeTkX45OPc&X-Amz-Signature=5fc0459344063eefda4ee0f34113d717a3b46c70f3414e63cf9c83d43f7f6456&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YX2ARYX%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDfHKdfjp7IeTWt6vK8WOZEx4t5OIUGDogM0wwMJX%2BIRgIgfFMK9GEB4Sn3ldC4GEdeU%2F7Br7yctM6fqX2J1EPybTkqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDqqadRGHJLhEsqZjSrcA71VhJ3wBfJgIPl%2BcZdq%2BdwxVTJaPqb83tTak5EL9sWC8MsAB2XQTbiZmHSL1VbbaHLnLR7vLZ19ZWT5c%2FaYuD1WHR%2B3BCbBI5qtdVA9P8tVeYOJlPPnr3UfJin4bcyWsNMrfn9IHgOb6s28KNrrMCu5a1MUMcAL%2BAYSXs9p4BRGfmdGs3QtGSfvl1RgDxm0Gsr4%2BtcA1EewbbrVXrt5cxnoslel8dsvlfItEDe2YhPu0Ir3AqpfKZ9qzaM52MZBYcVfMX3S0sdYhttBHUry2mqXemkE59uZjajVGv4SaI4r7UKDyEkkxmCzf3Shuj7ZrIZyp1oqOb9KVj6FWPthS%2BkbnnIReKsQOBO7IyFXD76SQa87ufyC%2FZ6vnD18J5s3tsYlROhUm9iaIBmxzdv4zXg5jR6Dixk%2F3TXyfQmjmj6zVNvDGArix4yPZNLFFL2Mc90Te9r4v4Hh%2BNQNRU8yGktn6GmT1xIp80TnU66cRI1nukXUnb69Yh%2FprV8cUe2g0KQS1kjbjvP2lKvPSe%2F0vExuGQDVPq26EcK8iFA6cugW29yWLbnSiBHNJ4LlNWWe3DLnNh85bJsgDqCkgkV5xAv6aHRC6L8FIbjJgqFWDD0Fs%2Fjz%2FNEC1oAPo%2B78MIW6378GOqUBRzKPiqq7ZUBW8cH4oNVAOd39pZM8FNaZuGflV6ZT53Av3uBomvSfHXxLV88CzUxzbMkeI%2Boyw5N4k6rzWeo6cl66kf1z0lISkv%2FCpqzoZ0hqaeI4Wf1ec2UKEKdSqbd7Xg9WokemBi5416YoEeujBcE1pwMkOU9d3tDbPySPLr2HpR923D0uqN%2FPD5%2FTBg7FGiAOJCFuNHkhfTrpLiKeTkX45OPc&X-Amz-Signature=60e84478a159c89edd8b1828a38cbc5f606be038dca31c5efeb42d5e835c5b5a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YX2ARYX%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDfHKdfjp7IeTWt6vK8WOZEx4t5OIUGDogM0wwMJX%2BIRgIgfFMK9GEB4Sn3ldC4GEdeU%2F7Br7yctM6fqX2J1EPybTkqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDqqadRGHJLhEsqZjSrcA71VhJ3wBfJgIPl%2BcZdq%2BdwxVTJaPqb83tTak5EL9sWC8MsAB2XQTbiZmHSL1VbbaHLnLR7vLZ19ZWT5c%2FaYuD1WHR%2B3BCbBI5qtdVA9P8tVeYOJlPPnr3UfJin4bcyWsNMrfn9IHgOb6s28KNrrMCu5a1MUMcAL%2BAYSXs9p4BRGfmdGs3QtGSfvl1RgDxm0Gsr4%2BtcA1EewbbrVXrt5cxnoslel8dsvlfItEDe2YhPu0Ir3AqpfKZ9qzaM52MZBYcVfMX3S0sdYhttBHUry2mqXemkE59uZjajVGv4SaI4r7UKDyEkkxmCzf3Shuj7ZrIZyp1oqOb9KVj6FWPthS%2BkbnnIReKsQOBO7IyFXD76SQa87ufyC%2FZ6vnD18J5s3tsYlROhUm9iaIBmxzdv4zXg5jR6Dixk%2F3TXyfQmjmj6zVNvDGArix4yPZNLFFL2Mc90Te9r4v4Hh%2BNQNRU8yGktn6GmT1xIp80TnU66cRI1nukXUnb69Yh%2FprV8cUe2g0KQS1kjbjvP2lKvPSe%2F0vExuGQDVPq26EcK8iFA6cugW29yWLbnSiBHNJ4LlNWWe3DLnNh85bJsgDqCkgkV5xAv6aHRC6L8FIbjJgqFWDD0Fs%2Fjz%2FNEC1oAPo%2B78MIW6378GOqUBRzKPiqq7ZUBW8cH4oNVAOd39pZM8FNaZuGflV6ZT53Av3uBomvSfHXxLV88CzUxzbMkeI%2Boyw5N4k6rzWeo6cl66kf1z0lISkv%2FCpqzoZ0hqaeI4Wf1ec2UKEKdSqbd7Xg9WokemBi5416YoEeujBcE1pwMkOU9d3tDbPySPLr2HpR923D0uqN%2FPD5%2FTBg7FGiAOJCFuNHkhfTrpLiKeTkX45OPc&X-Amz-Signature=caf7e02eed2e52329e44fa9290fcef190b1f588baf27c5c7670cdfdef9ef1974&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YX2ARYX%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDfHKdfjp7IeTWt6vK8WOZEx4t5OIUGDogM0wwMJX%2BIRgIgfFMK9GEB4Sn3ldC4GEdeU%2F7Br7yctM6fqX2J1EPybTkqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDqqadRGHJLhEsqZjSrcA71VhJ3wBfJgIPl%2BcZdq%2BdwxVTJaPqb83tTak5EL9sWC8MsAB2XQTbiZmHSL1VbbaHLnLR7vLZ19ZWT5c%2FaYuD1WHR%2B3BCbBI5qtdVA9P8tVeYOJlPPnr3UfJin4bcyWsNMrfn9IHgOb6s28KNrrMCu5a1MUMcAL%2BAYSXs9p4BRGfmdGs3QtGSfvl1RgDxm0Gsr4%2BtcA1EewbbrVXrt5cxnoslel8dsvlfItEDe2YhPu0Ir3AqpfKZ9qzaM52MZBYcVfMX3S0sdYhttBHUry2mqXemkE59uZjajVGv4SaI4r7UKDyEkkxmCzf3Shuj7ZrIZyp1oqOb9KVj6FWPthS%2BkbnnIReKsQOBO7IyFXD76SQa87ufyC%2FZ6vnD18J5s3tsYlROhUm9iaIBmxzdv4zXg5jR6Dixk%2F3TXyfQmjmj6zVNvDGArix4yPZNLFFL2Mc90Te9r4v4Hh%2BNQNRU8yGktn6GmT1xIp80TnU66cRI1nukXUnb69Yh%2FprV8cUe2g0KQS1kjbjvP2lKvPSe%2F0vExuGQDVPq26EcK8iFA6cugW29yWLbnSiBHNJ4LlNWWe3DLnNh85bJsgDqCkgkV5xAv6aHRC6L8FIbjJgqFWDD0Fs%2Fjz%2FNEC1oAPo%2B78MIW6378GOqUBRzKPiqq7ZUBW8cH4oNVAOd39pZM8FNaZuGflV6ZT53Av3uBomvSfHXxLV88CzUxzbMkeI%2Boyw5N4k6rzWeo6cl66kf1z0lISkv%2FCpqzoZ0hqaeI4Wf1ec2UKEKdSqbd7Xg9WokemBi5416YoEeujBcE1pwMkOU9d3tDbPySPLr2HpR923D0uqN%2FPD5%2FTBg7FGiAOJCFuNHkhfTrpLiKeTkX45OPc&X-Amz-Signature=d22de8e326796dd096ed515c3d21a543b608d08376261abf69165582974748a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YX2ARYX%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDfHKdfjp7IeTWt6vK8WOZEx4t5OIUGDogM0wwMJX%2BIRgIgfFMK9GEB4Sn3ldC4GEdeU%2F7Br7yctM6fqX2J1EPybTkqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDqqadRGHJLhEsqZjSrcA71VhJ3wBfJgIPl%2BcZdq%2BdwxVTJaPqb83tTak5EL9sWC8MsAB2XQTbiZmHSL1VbbaHLnLR7vLZ19ZWT5c%2FaYuD1WHR%2B3BCbBI5qtdVA9P8tVeYOJlPPnr3UfJin4bcyWsNMrfn9IHgOb6s28KNrrMCu5a1MUMcAL%2BAYSXs9p4BRGfmdGs3QtGSfvl1RgDxm0Gsr4%2BtcA1EewbbrVXrt5cxnoslel8dsvlfItEDe2YhPu0Ir3AqpfKZ9qzaM52MZBYcVfMX3S0sdYhttBHUry2mqXemkE59uZjajVGv4SaI4r7UKDyEkkxmCzf3Shuj7ZrIZyp1oqOb9KVj6FWPthS%2BkbnnIReKsQOBO7IyFXD76SQa87ufyC%2FZ6vnD18J5s3tsYlROhUm9iaIBmxzdv4zXg5jR6Dixk%2F3TXyfQmjmj6zVNvDGArix4yPZNLFFL2Mc90Te9r4v4Hh%2BNQNRU8yGktn6GmT1xIp80TnU66cRI1nukXUnb69Yh%2FprV8cUe2g0KQS1kjbjvP2lKvPSe%2F0vExuGQDVPq26EcK8iFA6cugW29yWLbnSiBHNJ4LlNWWe3DLnNh85bJsgDqCkgkV5xAv6aHRC6L8FIbjJgqFWDD0Fs%2Fjz%2FNEC1oAPo%2B78MIW6378GOqUBRzKPiqq7ZUBW8cH4oNVAOd39pZM8FNaZuGflV6ZT53Av3uBomvSfHXxLV88CzUxzbMkeI%2Boyw5N4k6rzWeo6cl66kf1z0lISkv%2FCpqzoZ0hqaeI4Wf1ec2UKEKdSqbd7Xg9WokemBi5416YoEeujBcE1pwMkOU9d3tDbPySPLr2HpR923D0uqN%2FPD5%2FTBg7FGiAOJCFuNHkhfTrpLiKeTkX45OPc&X-Amz-Signature=338c7e335073e3e66b351249dcb256952f6d261d7b1259c8ed7b33060ca592f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YX2ARYX%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDfHKdfjp7IeTWt6vK8WOZEx4t5OIUGDogM0wwMJX%2BIRgIgfFMK9GEB4Sn3ldC4GEdeU%2F7Br7yctM6fqX2J1EPybTkqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDqqadRGHJLhEsqZjSrcA71VhJ3wBfJgIPl%2BcZdq%2BdwxVTJaPqb83tTak5EL9sWC8MsAB2XQTbiZmHSL1VbbaHLnLR7vLZ19ZWT5c%2FaYuD1WHR%2B3BCbBI5qtdVA9P8tVeYOJlPPnr3UfJin4bcyWsNMrfn9IHgOb6s28KNrrMCu5a1MUMcAL%2BAYSXs9p4BRGfmdGs3QtGSfvl1RgDxm0Gsr4%2BtcA1EewbbrVXrt5cxnoslel8dsvlfItEDe2YhPu0Ir3AqpfKZ9qzaM52MZBYcVfMX3S0sdYhttBHUry2mqXemkE59uZjajVGv4SaI4r7UKDyEkkxmCzf3Shuj7ZrIZyp1oqOb9KVj6FWPthS%2BkbnnIReKsQOBO7IyFXD76SQa87ufyC%2FZ6vnD18J5s3tsYlROhUm9iaIBmxzdv4zXg5jR6Dixk%2F3TXyfQmjmj6zVNvDGArix4yPZNLFFL2Mc90Te9r4v4Hh%2BNQNRU8yGktn6GmT1xIp80TnU66cRI1nukXUnb69Yh%2FprV8cUe2g0KQS1kjbjvP2lKvPSe%2F0vExuGQDVPq26EcK8iFA6cugW29yWLbnSiBHNJ4LlNWWe3DLnNh85bJsgDqCkgkV5xAv6aHRC6L8FIbjJgqFWDD0Fs%2Fjz%2FNEC1oAPo%2B78MIW6378GOqUBRzKPiqq7ZUBW8cH4oNVAOd39pZM8FNaZuGflV6ZT53Av3uBomvSfHXxLV88CzUxzbMkeI%2Boyw5N4k6rzWeo6cl66kf1z0lISkv%2FCpqzoZ0hqaeI4Wf1ec2UKEKdSqbd7Xg9WokemBi5416YoEeujBcE1pwMkOU9d3tDbPySPLr2HpR923D0uqN%2FPD5%2FTBg7FGiAOJCFuNHkhfTrpLiKeTkX45OPc&X-Amz-Signature=f0e6a7fe93ccd1fd79f111656e4b88c98df3009a82b6a278a58cdc38a2621e7a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YX2ARYX%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDfHKdfjp7IeTWt6vK8WOZEx4t5OIUGDogM0wwMJX%2BIRgIgfFMK9GEB4Sn3ldC4GEdeU%2F7Br7yctM6fqX2J1EPybTkqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDqqadRGHJLhEsqZjSrcA71VhJ3wBfJgIPl%2BcZdq%2BdwxVTJaPqb83tTak5EL9sWC8MsAB2XQTbiZmHSL1VbbaHLnLR7vLZ19ZWT5c%2FaYuD1WHR%2B3BCbBI5qtdVA9P8tVeYOJlPPnr3UfJin4bcyWsNMrfn9IHgOb6s28KNrrMCu5a1MUMcAL%2BAYSXs9p4BRGfmdGs3QtGSfvl1RgDxm0Gsr4%2BtcA1EewbbrVXrt5cxnoslel8dsvlfItEDe2YhPu0Ir3AqpfKZ9qzaM52MZBYcVfMX3S0sdYhttBHUry2mqXemkE59uZjajVGv4SaI4r7UKDyEkkxmCzf3Shuj7ZrIZyp1oqOb9KVj6FWPthS%2BkbnnIReKsQOBO7IyFXD76SQa87ufyC%2FZ6vnD18J5s3tsYlROhUm9iaIBmxzdv4zXg5jR6Dixk%2F3TXyfQmjmj6zVNvDGArix4yPZNLFFL2Mc90Te9r4v4Hh%2BNQNRU8yGktn6GmT1xIp80TnU66cRI1nukXUnb69Yh%2FprV8cUe2g0KQS1kjbjvP2lKvPSe%2F0vExuGQDVPq26EcK8iFA6cugW29yWLbnSiBHNJ4LlNWWe3DLnNh85bJsgDqCkgkV5xAv6aHRC6L8FIbjJgqFWDD0Fs%2Fjz%2FNEC1oAPo%2B78MIW6378GOqUBRzKPiqq7ZUBW8cH4oNVAOd39pZM8FNaZuGflV6ZT53Av3uBomvSfHXxLV88CzUxzbMkeI%2Boyw5N4k6rzWeo6cl66kf1z0lISkv%2FCpqzoZ0hqaeI4Wf1ec2UKEKdSqbd7Xg9WokemBi5416YoEeujBcE1pwMkOU9d3tDbPySPLr2HpR923D0uqN%2FPD5%2FTBg7FGiAOJCFuNHkhfTrpLiKeTkX45OPc&X-Amz-Signature=24d6c7b5e689cc3735fca98397b60b4fd076986a873b03e783d7d62ddd2da0b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YX2ARYX%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDfHKdfjp7IeTWt6vK8WOZEx4t5OIUGDogM0wwMJX%2BIRgIgfFMK9GEB4Sn3ldC4GEdeU%2F7Br7yctM6fqX2J1EPybTkqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDqqadRGHJLhEsqZjSrcA71VhJ3wBfJgIPl%2BcZdq%2BdwxVTJaPqb83tTak5EL9sWC8MsAB2XQTbiZmHSL1VbbaHLnLR7vLZ19ZWT5c%2FaYuD1WHR%2B3BCbBI5qtdVA9P8tVeYOJlPPnr3UfJin4bcyWsNMrfn9IHgOb6s28KNrrMCu5a1MUMcAL%2BAYSXs9p4BRGfmdGs3QtGSfvl1RgDxm0Gsr4%2BtcA1EewbbrVXrt5cxnoslel8dsvlfItEDe2YhPu0Ir3AqpfKZ9qzaM52MZBYcVfMX3S0sdYhttBHUry2mqXemkE59uZjajVGv4SaI4r7UKDyEkkxmCzf3Shuj7ZrIZyp1oqOb9KVj6FWPthS%2BkbnnIReKsQOBO7IyFXD76SQa87ufyC%2FZ6vnD18J5s3tsYlROhUm9iaIBmxzdv4zXg5jR6Dixk%2F3TXyfQmjmj6zVNvDGArix4yPZNLFFL2Mc90Te9r4v4Hh%2BNQNRU8yGktn6GmT1xIp80TnU66cRI1nukXUnb69Yh%2FprV8cUe2g0KQS1kjbjvP2lKvPSe%2F0vExuGQDVPq26EcK8iFA6cugW29yWLbnSiBHNJ4LlNWWe3DLnNh85bJsgDqCkgkV5xAv6aHRC6L8FIbjJgqFWDD0Fs%2Fjz%2FNEC1oAPo%2B78MIW6378GOqUBRzKPiqq7ZUBW8cH4oNVAOd39pZM8FNaZuGflV6ZT53Av3uBomvSfHXxLV88CzUxzbMkeI%2Boyw5N4k6rzWeo6cl66kf1z0lISkv%2FCpqzoZ0hqaeI4Wf1ec2UKEKdSqbd7Xg9WokemBi5416YoEeujBcE1pwMkOU9d3tDbPySPLr2HpR923D0uqN%2FPD5%2FTBg7FGiAOJCFuNHkhfTrpLiKeTkX45OPc&X-Amz-Signature=15a6a8a17f8e30e4a039595c02e470033cbccd05cfe856b3e5d209c289d556d3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
