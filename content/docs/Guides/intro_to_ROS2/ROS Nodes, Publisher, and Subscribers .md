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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ2SZHM2%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHH%2BukAQNXKCU%2BpFOZSMDcHPAaWmLO18sh2%2F7hUdtTbHAiEAsiWSnKlLUFF2nwgKJJ247%2FKN30NAmkN4wcwfdOBefmgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGxXM5tFtiPGfiXOZSrcA75l9gaPz9nJfgup0Jrab7FjKeIPWu%2BUKzjCDle4BmoXaCq3StEANbZ5cboL3B1tkhRURj1J243qYUHzfEoEHK3LIqxOxdoDyHEWZh6ybr1y4nO%2F5AwXgondtXcHM42qg4TdyfUQzBSrkWdT6rF%2FqkBQ%2FJwU2o%2FkMRGu62sLcoz39Finl1VhphqiUarFTLXSdX8tNsjfvwDESTu8jmwOYpwQXH8ungamKYYVhxlpDmTgJQoWiMsRFOcqkrahU%2B33Vemhv4PZ1RpMfyAraiMqQ98uLtHQmhyphj0eAT8Di4Zk4H5wWn7h9SuRnhs6hw00TVZrXZkj9hwefiaGuRVI5nplYBRpp%2BdMchYMjgJrbRX6EaYlTaGsV1LmHJtaqpdAKGfw%2F%2BPt2MW331QcydM6y1l2O1p%2FP24dboYfhkWbLTWzLV%2FHh0GupkfG1fbVN3ftKpKSbAYDGU8VfaIaa9IcRAKcxsoBHwSjQBwBEIzMqtcF9niGzLeE7FpHXde5GQBMReJABf3aib5CfbOSEnQmNsHYcPMwJY60c4OPsU0R512HKJfo5V5IUD6kwhJv%2Ffno8HMdYRNTCwUp0U%2Bq%2BC7FonrwtybPCga017dakwU7F9vOe0lmdu9iW0UExGqfMO%2Bq474GOqUBFa7tcQpgU7yyXEP265QNy%2BbLFiTjJlzw%2FUgZfFmXfD26cnBRF7hu5svv2ku9CrsVdJMoOkpjCQZkRxk150SmH3x3MNgXAl2hvyuDi3m8C5oXCvS9O2H3FjOKzf864FvD6hrWP98CCakFxeCa4nSZpa7TPwOIq5xLUgC%2FFzvB5cRwWHPYQqmBwsEcTIBM8fAXa2bZ08mn9dHqVRVCH8M9pONQOJKH&X-Amz-Signature=3489a733054f5be9e3647b094ddf41ec5b341a0c99ab958235d97a3d64483f79&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ2SZHM2%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHH%2BukAQNXKCU%2BpFOZSMDcHPAaWmLO18sh2%2F7hUdtTbHAiEAsiWSnKlLUFF2nwgKJJ247%2FKN30NAmkN4wcwfdOBefmgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGxXM5tFtiPGfiXOZSrcA75l9gaPz9nJfgup0Jrab7FjKeIPWu%2BUKzjCDle4BmoXaCq3StEANbZ5cboL3B1tkhRURj1J243qYUHzfEoEHK3LIqxOxdoDyHEWZh6ybr1y4nO%2F5AwXgondtXcHM42qg4TdyfUQzBSrkWdT6rF%2FqkBQ%2FJwU2o%2FkMRGu62sLcoz39Finl1VhphqiUarFTLXSdX8tNsjfvwDESTu8jmwOYpwQXH8ungamKYYVhxlpDmTgJQoWiMsRFOcqkrahU%2B33Vemhv4PZ1RpMfyAraiMqQ98uLtHQmhyphj0eAT8Di4Zk4H5wWn7h9SuRnhs6hw00TVZrXZkj9hwefiaGuRVI5nplYBRpp%2BdMchYMjgJrbRX6EaYlTaGsV1LmHJtaqpdAKGfw%2F%2BPt2MW331QcydM6y1l2O1p%2FP24dboYfhkWbLTWzLV%2FHh0GupkfG1fbVN3ftKpKSbAYDGU8VfaIaa9IcRAKcxsoBHwSjQBwBEIzMqtcF9niGzLeE7FpHXde5GQBMReJABf3aib5CfbOSEnQmNsHYcPMwJY60c4OPsU0R512HKJfo5V5IUD6kwhJv%2Ffno8HMdYRNTCwUp0U%2Bq%2BC7FonrwtybPCga017dakwU7F9vOe0lmdu9iW0UExGqfMO%2Bq474GOqUBFa7tcQpgU7yyXEP265QNy%2BbLFiTjJlzw%2FUgZfFmXfD26cnBRF7hu5svv2ku9CrsVdJMoOkpjCQZkRxk150SmH3x3MNgXAl2hvyuDi3m8C5oXCvS9O2H3FjOKzf864FvD6hrWP98CCakFxeCa4nSZpa7TPwOIq5xLUgC%2FFzvB5cRwWHPYQqmBwsEcTIBM8fAXa2bZ08mn9dHqVRVCH8M9pONQOJKH&X-Amz-Signature=6853521527ea1cc14dee50755fdb8a6a0bd97e0a45beb1d975d043c924e96a93&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ2SZHM2%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHH%2BukAQNXKCU%2BpFOZSMDcHPAaWmLO18sh2%2F7hUdtTbHAiEAsiWSnKlLUFF2nwgKJJ247%2FKN30NAmkN4wcwfdOBefmgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGxXM5tFtiPGfiXOZSrcA75l9gaPz9nJfgup0Jrab7FjKeIPWu%2BUKzjCDle4BmoXaCq3StEANbZ5cboL3B1tkhRURj1J243qYUHzfEoEHK3LIqxOxdoDyHEWZh6ybr1y4nO%2F5AwXgondtXcHM42qg4TdyfUQzBSrkWdT6rF%2FqkBQ%2FJwU2o%2FkMRGu62sLcoz39Finl1VhphqiUarFTLXSdX8tNsjfvwDESTu8jmwOYpwQXH8ungamKYYVhxlpDmTgJQoWiMsRFOcqkrahU%2B33Vemhv4PZ1RpMfyAraiMqQ98uLtHQmhyphj0eAT8Di4Zk4H5wWn7h9SuRnhs6hw00TVZrXZkj9hwefiaGuRVI5nplYBRpp%2BdMchYMjgJrbRX6EaYlTaGsV1LmHJtaqpdAKGfw%2F%2BPt2MW331QcydM6y1l2O1p%2FP24dboYfhkWbLTWzLV%2FHh0GupkfG1fbVN3ftKpKSbAYDGU8VfaIaa9IcRAKcxsoBHwSjQBwBEIzMqtcF9niGzLeE7FpHXde5GQBMReJABf3aib5CfbOSEnQmNsHYcPMwJY60c4OPsU0R512HKJfo5V5IUD6kwhJv%2Ffno8HMdYRNTCwUp0U%2Bq%2BC7FonrwtybPCga017dakwU7F9vOe0lmdu9iW0UExGqfMO%2Bq474GOqUBFa7tcQpgU7yyXEP265QNy%2BbLFiTjJlzw%2FUgZfFmXfD26cnBRF7hu5svv2ku9CrsVdJMoOkpjCQZkRxk150SmH3x3MNgXAl2hvyuDi3m8C5oXCvS9O2H3FjOKzf864FvD6hrWP98CCakFxeCa4nSZpa7TPwOIq5xLUgC%2FFzvB5cRwWHPYQqmBwsEcTIBM8fAXa2bZ08mn9dHqVRVCH8M9pONQOJKH&X-Amz-Signature=25863d55f7d001ab2d7667f5698bdaf61f231cfc4ff1220910c01fa9524b84f4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ2SZHM2%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHH%2BukAQNXKCU%2BpFOZSMDcHPAaWmLO18sh2%2F7hUdtTbHAiEAsiWSnKlLUFF2nwgKJJ247%2FKN30NAmkN4wcwfdOBefmgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGxXM5tFtiPGfiXOZSrcA75l9gaPz9nJfgup0Jrab7FjKeIPWu%2BUKzjCDle4BmoXaCq3StEANbZ5cboL3B1tkhRURj1J243qYUHzfEoEHK3LIqxOxdoDyHEWZh6ybr1y4nO%2F5AwXgondtXcHM42qg4TdyfUQzBSrkWdT6rF%2FqkBQ%2FJwU2o%2FkMRGu62sLcoz39Finl1VhphqiUarFTLXSdX8tNsjfvwDESTu8jmwOYpwQXH8ungamKYYVhxlpDmTgJQoWiMsRFOcqkrahU%2B33Vemhv4PZ1RpMfyAraiMqQ98uLtHQmhyphj0eAT8Di4Zk4H5wWn7h9SuRnhs6hw00TVZrXZkj9hwefiaGuRVI5nplYBRpp%2BdMchYMjgJrbRX6EaYlTaGsV1LmHJtaqpdAKGfw%2F%2BPt2MW331QcydM6y1l2O1p%2FP24dboYfhkWbLTWzLV%2FHh0GupkfG1fbVN3ftKpKSbAYDGU8VfaIaa9IcRAKcxsoBHwSjQBwBEIzMqtcF9niGzLeE7FpHXde5GQBMReJABf3aib5CfbOSEnQmNsHYcPMwJY60c4OPsU0R512HKJfo5V5IUD6kwhJv%2Ffno8HMdYRNTCwUp0U%2Bq%2BC7FonrwtybPCga017dakwU7F9vOe0lmdu9iW0UExGqfMO%2Bq474GOqUBFa7tcQpgU7yyXEP265QNy%2BbLFiTjJlzw%2FUgZfFmXfD26cnBRF7hu5svv2ku9CrsVdJMoOkpjCQZkRxk150SmH3x3MNgXAl2hvyuDi3m8C5oXCvS9O2H3FjOKzf864FvD6hrWP98CCakFxeCa4nSZpa7TPwOIq5xLUgC%2FFzvB5cRwWHPYQqmBwsEcTIBM8fAXa2bZ08mn9dHqVRVCH8M9pONQOJKH&X-Amz-Signature=dd9513d9635fdffd8697e76402f9df33ca6f47e63c23b3f650c0da01cb41876a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ2SZHM2%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHH%2BukAQNXKCU%2BpFOZSMDcHPAaWmLO18sh2%2F7hUdtTbHAiEAsiWSnKlLUFF2nwgKJJ247%2FKN30NAmkN4wcwfdOBefmgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGxXM5tFtiPGfiXOZSrcA75l9gaPz9nJfgup0Jrab7FjKeIPWu%2BUKzjCDle4BmoXaCq3StEANbZ5cboL3B1tkhRURj1J243qYUHzfEoEHK3LIqxOxdoDyHEWZh6ybr1y4nO%2F5AwXgondtXcHM42qg4TdyfUQzBSrkWdT6rF%2FqkBQ%2FJwU2o%2FkMRGu62sLcoz39Finl1VhphqiUarFTLXSdX8tNsjfvwDESTu8jmwOYpwQXH8ungamKYYVhxlpDmTgJQoWiMsRFOcqkrahU%2B33Vemhv4PZ1RpMfyAraiMqQ98uLtHQmhyphj0eAT8Di4Zk4H5wWn7h9SuRnhs6hw00TVZrXZkj9hwefiaGuRVI5nplYBRpp%2BdMchYMjgJrbRX6EaYlTaGsV1LmHJtaqpdAKGfw%2F%2BPt2MW331QcydM6y1l2O1p%2FP24dboYfhkWbLTWzLV%2FHh0GupkfG1fbVN3ftKpKSbAYDGU8VfaIaa9IcRAKcxsoBHwSjQBwBEIzMqtcF9niGzLeE7FpHXde5GQBMReJABf3aib5CfbOSEnQmNsHYcPMwJY60c4OPsU0R512HKJfo5V5IUD6kwhJv%2Ffno8HMdYRNTCwUp0U%2Bq%2BC7FonrwtybPCga017dakwU7F9vOe0lmdu9iW0UExGqfMO%2Bq474GOqUBFa7tcQpgU7yyXEP265QNy%2BbLFiTjJlzw%2FUgZfFmXfD26cnBRF7hu5svv2ku9CrsVdJMoOkpjCQZkRxk150SmH3x3MNgXAl2hvyuDi3m8C5oXCvS9O2H3FjOKzf864FvD6hrWP98CCakFxeCa4nSZpa7TPwOIq5xLUgC%2FFzvB5cRwWHPYQqmBwsEcTIBM8fAXa2bZ08mn9dHqVRVCH8M9pONQOJKH&X-Amz-Signature=96266e78ee6e5d882dce2a956141fa826bc74fe83d7974c91a7b296249cecd19&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ2SZHM2%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHH%2BukAQNXKCU%2BpFOZSMDcHPAaWmLO18sh2%2F7hUdtTbHAiEAsiWSnKlLUFF2nwgKJJ247%2FKN30NAmkN4wcwfdOBefmgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGxXM5tFtiPGfiXOZSrcA75l9gaPz9nJfgup0Jrab7FjKeIPWu%2BUKzjCDle4BmoXaCq3StEANbZ5cboL3B1tkhRURj1J243qYUHzfEoEHK3LIqxOxdoDyHEWZh6ybr1y4nO%2F5AwXgondtXcHM42qg4TdyfUQzBSrkWdT6rF%2FqkBQ%2FJwU2o%2FkMRGu62sLcoz39Finl1VhphqiUarFTLXSdX8tNsjfvwDESTu8jmwOYpwQXH8ungamKYYVhxlpDmTgJQoWiMsRFOcqkrahU%2B33Vemhv4PZ1RpMfyAraiMqQ98uLtHQmhyphj0eAT8Di4Zk4H5wWn7h9SuRnhs6hw00TVZrXZkj9hwefiaGuRVI5nplYBRpp%2BdMchYMjgJrbRX6EaYlTaGsV1LmHJtaqpdAKGfw%2F%2BPt2MW331QcydM6y1l2O1p%2FP24dboYfhkWbLTWzLV%2FHh0GupkfG1fbVN3ftKpKSbAYDGU8VfaIaa9IcRAKcxsoBHwSjQBwBEIzMqtcF9niGzLeE7FpHXde5GQBMReJABf3aib5CfbOSEnQmNsHYcPMwJY60c4OPsU0R512HKJfo5V5IUD6kwhJv%2Ffno8HMdYRNTCwUp0U%2Bq%2BC7FonrwtybPCga017dakwU7F9vOe0lmdu9iW0UExGqfMO%2Bq474GOqUBFa7tcQpgU7yyXEP265QNy%2BbLFiTjJlzw%2FUgZfFmXfD26cnBRF7hu5svv2ku9CrsVdJMoOkpjCQZkRxk150SmH3x3MNgXAl2hvyuDi3m8C5oXCvS9O2H3FjOKzf864FvD6hrWP98CCakFxeCa4nSZpa7TPwOIq5xLUgC%2FFzvB5cRwWHPYQqmBwsEcTIBM8fAXa2bZ08mn9dHqVRVCH8M9pONQOJKH&X-Amz-Signature=32dc98ee659639bf7a7313f8ba61ca3925aca43f1410454de6311fc2b7e5d1cc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ2SZHM2%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHH%2BukAQNXKCU%2BpFOZSMDcHPAaWmLO18sh2%2F7hUdtTbHAiEAsiWSnKlLUFF2nwgKJJ247%2FKN30NAmkN4wcwfdOBefmgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGxXM5tFtiPGfiXOZSrcA75l9gaPz9nJfgup0Jrab7FjKeIPWu%2BUKzjCDle4BmoXaCq3StEANbZ5cboL3B1tkhRURj1J243qYUHzfEoEHK3LIqxOxdoDyHEWZh6ybr1y4nO%2F5AwXgondtXcHM42qg4TdyfUQzBSrkWdT6rF%2FqkBQ%2FJwU2o%2FkMRGu62sLcoz39Finl1VhphqiUarFTLXSdX8tNsjfvwDESTu8jmwOYpwQXH8ungamKYYVhxlpDmTgJQoWiMsRFOcqkrahU%2B33Vemhv4PZ1RpMfyAraiMqQ98uLtHQmhyphj0eAT8Di4Zk4H5wWn7h9SuRnhs6hw00TVZrXZkj9hwefiaGuRVI5nplYBRpp%2BdMchYMjgJrbRX6EaYlTaGsV1LmHJtaqpdAKGfw%2F%2BPt2MW331QcydM6y1l2O1p%2FP24dboYfhkWbLTWzLV%2FHh0GupkfG1fbVN3ftKpKSbAYDGU8VfaIaa9IcRAKcxsoBHwSjQBwBEIzMqtcF9niGzLeE7FpHXde5GQBMReJABf3aib5CfbOSEnQmNsHYcPMwJY60c4OPsU0R512HKJfo5V5IUD6kwhJv%2Ffno8HMdYRNTCwUp0U%2Bq%2BC7FonrwtybPCga017dakwU7F9vOe0lmdu9iW0UExGqfMO%2Bq474GOqUBFa7tcQpgU7yyXEP265QNy%2BbLFiTjJlzw%2FUgZfFmXfD26cnBRF7hu5svv2ku9CrsVdJMoOkpjCQZkRxk150SmH3x3MNgXAl2hvyuDi3m8C5oXCvS9O2H3FjOKzf864FvD6hrWP98CCakFxeCa4nSZpa7TPwOIq5xLUgC%2FFzvB5cRwWHPYQqmBwsEcTIBM8fAXa2bZ08mn9dHqVRVCH8M9pONQOJKH&X-Amz-Signature=63e180a8b85d5a13d69cc76cd8de9eb5e7a527bab27e451b8c2a8703da15148c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ2SZHM2%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHH%2BukAQNXKCU%2BpFOZSMDcHPAaWmLO18sh2%2F7hUdtTbHAiEAsiWSnKlLUFF2nwgKJJ247%2FKN30NAmkN4wcwfdOBefmgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGxXM5tFtiPGfiXOZSrcA75l9gaPz9nJfgup0Jrab7FjKeIPWu%2BUKzjCDle4BmoXaCq3StEANbZ5cboL3B1tkhRURj1J243qYUHzfEoEHK3LIqxOxdoDyHEWZh6ybr1y4nO%2F5AwXgondtXcHM42qg4TdyfUQzBSrkWdT6rF%2FqkBQ%2FJwU2o%2FkMRGu62sLcoz39Finl1VhphqiUarFTLXSdX8tNsjfvwDESTu8jmwOYpwQXH8ungamKYYVhxlpDmTgJQoWiMsRFOcqkrahU%2B33Vemhv4PZ1RpMfyAraiMqQ98uLtHQmhyphj0eAT8Di4Zk4H5wWn7h9SuRnhs6hw00TVZrXZkj9hwefiaGuRVI5nplYBRpp%2BdMchYMjgJrbRX6EaYlTaGsV1LmHJtaqpdAKGfw%2F%2BPt2MW331QcydM6y1l2O1p%2FP24dboYfhkWbLTWzLV%2FHh0GupkfG1fbVN3ftKpKSbAYDGU8VfaIaa9IcRAKcxsoBHwSjQBwBEIzMqtcF9niGzLeE7FpHXde5GQBMReJABf3aib5CfbOSEnQmNsHYcPMwJY60c4OPsU0R512HKJfo5V5IUD6kwhJv%2Ffno8HMdYRNTCwUp0U%2Bq%2BC7FonrwtybPCga017dakwU7F9vOe0lmdu9iW0UExGqfMO%2Bq474GOqUBFa7tcQpgU7yyXEP265QNy%2BbLFiTjJlzw%2FUgZfFmXfD26cnBRF7hu5svv2ku9CrsVdJMoOkpjCQZkRxk150SmH3x3MNgXAl2hvyuDi3m8C5oXCvS9O2H3FjOKzf864FvD6hrWP98CCakFxeCa4nSZpa7TPwOIq5xLUgC%2FFzvB5cRwWHPYQqmBwsEcTIBM8fAXa2bZ08mn9dHqVRVCH8M9pONQOJKH&X-Amz-Signature=142776e1812e2906a1f002641c9f8aafa126e3df15b22a94bf8ff56614d10d7b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
