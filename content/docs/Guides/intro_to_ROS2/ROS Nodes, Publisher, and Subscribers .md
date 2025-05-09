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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DELG2WP%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXLjizxsHyyyoAwVaom4tnJ7jLCwmkylY3ElzLJ6Nh5AiEAz%2F%2FyaY2cROPeg8%2Bv0RLBs%2B485Y4Y39hL1C0uECUH0zwqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsI2in5MOVZy125dyrcA3y1Hc35bGrU8c7DkcfnFOqCtGF6dlcP%2FERPjcmoN2oMOlf6fy7%2BefdxSyUYoQlxvLakeUqduLHJf27vGOnkR2ULIG%2FfcmtJLbanzjcnsVR3ZY4hi%2FB8cx6qYjvcCG6zlM%2BdEyAKemd6X6FOpaQZnaWuUbjt5zfrWnr0jHRp0SyJaMch%2FeEBw6NhsnzzYT5v4sAxGdsB6EE89vAtXS%2FRF5Cjte9bQc%2FYbaAsjfjqoF2AsnmCiuy1XZJKglWs6UxXsCidN1BBRkVEkiOGqYknWSddDJa0%2BxVSOJo9eZDaaGlXz3Kn6W0yP5t3DUfNuc2l7H2CXhA3X16Di9KaxpT6KFCwj%2FkBirpYiNgYywcx36t3uw3HYWqWQcymWRjNNfHrqz1DTsXRZRAXjDmqH90kN4NEyMWeFYsB%2Bp1OSOWVatXBAmE61ozGQTeCM%2FU38F0OamYeXKL3CwUMcQAJ%2BIVqbEyCDf3%2BsnJN2IFmwyUs20O1%2BrwGahc9RmbnYnOta5BBcmDtmyazdNdAr8ZDULTJBGuracVqe7MQxPnZIGiETy28jkIIw892IKIk18lGdKdc5JA0Kn0yA4C5%2B0Nz9%2FR%2Fg8TNruYR8lxYXrslM2zjGUs%2FLWDK%2FRdM5U1funIpMLbk9cAGOqUB%2FMqWFWUQaf2MecWFoYU2C0%2Fxz8YLMuzysQI0XjSWo4H2NbrmsgTJzeGdyT63MHjhvsrcCsrHoGWvSuK8S2kB2hJ0r%2B8M66Az0ElmvL%2FuQVmiphzixC5Z7VE9lkl5LHmjercou4pvS5yK%2FJ%2BYUD32NnZPZulWfGh6fSgRd%2BA43udEI15t%2BpBnnsLjbO3VpXKaV0BGjq400BnZxdYNvVLD1ko1pm7h&X-Amz-Signature=a3d8bbb1251504b9379879b76ef0984deb982e1b953462e7462ec9e45b9a98a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DELG2WP%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXLjizxsHyyyoAwVaom4tnJ7jLCwmkylY3ElzLJ6Nh5AiEAz%2F%2FyaY2cROPeg8%2Bv0RLBs%2B485Y4Y39hL1C0uECUH0zwqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsI2in5MOVZy125dyrcA3y1Hc35bGrU8c7DkcfnFOqCtGF6dlcP%2FERPjcmoN2oMOlf6fy7%2BefdxSyUYoQlxvLakeUqduLHJf27vGOnkR2ULIG%2FfcmtJLbanzjcnsVR3ZY4hi%2FB8cx6qYjvcCG6zlM%2BdEyAKemd6X6FOpaQZnaWuUbjt5zfrWnr0jHRp0SyJaMch%2FeEBw6NhsnzzYT5v4sAxGdsB6EE89vAtXS%2FRF5Cjte9bQc%2FYbaAsjfjqoF2AsnmCiuy1XZJKglWs6UxXsCidN1BBRkVEkiOGqYknWSddDJa0%2BxVSOJo9eZDaaGlXz3Kn6W0yP5t3DUfNuc2l7H2CXhA3X16Di9KaxpT6KFCwj%2FkBirpYiNgYywcx36t3uw3HYWqWQcymWRjNNfHrqz1DTsXRZRAXjDmqH90kN4NEyMWeFYsB%2Bp1OSOWVatXBAmE61ozGQTeCM%2FU38F0OamYeXKL3CwUMcQAJ%2BIVqbEyCDf3%2BsnJN2IFmwyUs20O1%2BrwGahc9RmbnYnOta5BBcmDtmyazdNdAr8ZDULTJBGuracVqe7MQxPnZIGiETy28jkIIw892IKIk18lGdKdc5JA0Kn0yA4C5%2B0Nz9%2FR%2Fg8TNruYR8lxYXrslM2zjGUs%2FLWDK%2FRdM5U1funIpMLbk9cAGOqUB%2FMqWFWUQaf2MecWFoYU2C0%2Fxz8YLMuzysQI0XjSWo4H2NbrmsgTJzeGdyT63MHjhvsrcCsrHoGWvSuK8S2kB2hJ0r%2B8M66Az0ElmvL%2FuQVmiphzixC5Z7VE9lkl5LHmjercou4pvS5yK%2FJ%2BYUD32NnZPZulWfGh6fSgRd%2BA43udEI15t%2BpBnnsLjbO3VpXKaV0BGjq400BnZxdYNvVLD1ko1pm7h&X-Amz-Signature=aaa0e6ef017878a8dbf5d7255cf260aa5dc85954c9a2b75136bdbb51a84b40fb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DELG2WP%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXLjizxsHyyyoAwVaom4tnJ7jLCwmkylY3ElzLJ6Nh5AiEAz%2F%2FyaY2cROPeg8%2Bv0RLBs%2B485Y4Y39hL1C0uECUH0zwqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsI2in5MOVZy125dyrcA3y1Hc35bGrU8c7DkcfnFOqCtGF6dlcP%2FERPjcmoN2oMOlf6fy7%2BefdxSyUYoQlxvLakeUqduLHJf27vGOnkR2ULIG%2FfcmtJLbanzjcnsVR3ZY4hi%2FB8cx6qYjvcCG6zlM%2BdEyAKemd6X6FOpaQZnaWuUbjt5zfrWnr0jHRp0SyJaMch%2FeEBw6NhsnzzYT5v4sAxGdsB6EE89vAtXS%2FRF5Cjte9bQc%2FYbaAsjfjqoF2AsnmCiuy1XZJKglWs6UxXsCidN1BBRkVEkiOGqYknWSddDJa0%2BxVSOJo9eZDaaGlXz3Kn6W0yP5t3DUfNuc2l7H2CXhA3X16Di9KaxpT6KFCwj%2FkBirpYiNgYywcx36t3uw3HYWqWQcymWRjNNfHrqz1DTsXRZRAXjDmqH90kN4NEyMWeFYsB%2Bp1OSOWVatXBAmE61ozGQTeCM%2FU38F0OamYeXKL3CwUMcQAJ%2BIVqbEyCDf3%2BsnJN2IFmwyUs20O1%2BrwGahc9RmbnYnOta5BBcmDtmyazdNdAr8ZDULTJBGuracVqe7MQxPnZIGiETy28jkIIw892IKIk18lGdKdc5JA0Kn0yA4C5%2B0Nz9%2FR%2Fg8TNruYR8lxYXrslM2zjGUs%2FLWDK%2FRdM5U1funIpMLbk9cAGOqUB%2FMqWFWUQaf2MecWFoYU2C0%2Fxz8YLMuzysQI0XjSWo4H2NbrmsgTJzeGdyT63MHjhvsrcCsrHoGWvSuK8S2kB2hJ0r%2B8M66Az0ElmvL%2FuQVmiphzixC5Z7VE9lkl5LHmjercou4pvS5yK%2FJ%2BYUD32NnZPZulWfGh6fSgRd%2BA43udEI15t%2BpBnnsLjbO3VpXKaV0BGjq400BnZxdYNvVLD1ko1pm7h&X-Amz-Signature=a5ec55cdb4f948b175fddbc642ac79000b171fe537e8501c5c23e072de46d140&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DELG2WP%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXLjizxsHyyyoAwVaom4tnJ7jLCwmkylY3ElzLJ6Nh5AiEAz%2F%2FyaY2cROPeg8%2Bv0RLBs%2B485Y4Y39hL1C0uECUH0zwqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsI2in5MOVZy125dyrcA3y1Hc35bGrU8c7DkcfnFOqCtGF6dlcP%2FERPjcmoN2oMOlf6fy7%2BefdxSyUYoQlxvLakeUqduLHJf27vGOnkR2ULIG%2FfcmtJLbanzjcnsVR3ZY4hi%2FB8cx6qYjvcCG6zlM%2BdEyAKemd6X6FOpaQZnaWuUbjt5zfrWnr0jHRp0SyJaMch%2FeEBw6NhsnzzYT5v4sAxGdsB6EE89vAtXS%2FRF5Cjte9bQc%2FYbaAsjfjqoF2AsnmCiuy1XZJKglWs6UxXsCidN1BBRkVEkiOGqYknWSddDJa0%2BxVSOJo9eZDaaGlXz3Kn6W0yP5t3DUfNuc2l7H2CXhA3X16Di9KaxpT6KFCwj%2FkBirpYiNgYywcx36t3uw3HYWqWQcymWRjNNfHrqz1DTsXRZRAXjDmqH90kN4NEyMWeFYsB%2Bp1OSOWVatXBAmE61ozGQTeCM%2FU38F0OamYeXKL3CwUMcQAJ%2BIVqbEyCDf3%2BsnJN2IFmwyUs20O1%2BrwGahc9RmbnYnOta5BBcmDtmyazdNdAr8ZDULTJBGuracVqe7MQxPnZIGiETy28jkIIw892IKIk18lGdKdc5JA0Kn0yA4C5%2B0Nz9%2FR%2Fg8TNruYR8lxYXrslM2zjGUs%2FLWDK%2FRdM5U1funIpMLbk9cAGOqUB%2FMqWFWUQaf2MecWFoYU2C0%2Fxz8YLMuzysQI0XjSWo4H2NbrmsgTJzeGdyT63MHjhvsrcCsrHoGWvSuK8S2kB2hJ0r%2B8M66Az0ElmvL%2FuQVmiphzixC5Z7VE9lkl5LHmjercou4pvS5yK%2FJ%2BYUD32NnZPZulWfGh6fSgRd%2BA43udEI15t%2BpBnnsLjbO3VpXKaV0BGjq400BnZxdYNvVLD1ko1pm7h&X-Amz-Signature=5296ba365e3f178ed65cc8ffbefda44941f7ca30c8d14861684344a2e440c302&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DELG2WP%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXLjizxsHyyyoAwVaom4tnJ7jLCwmkylY3ElzLJ6Nh5AiEAz%2F%2FyaY2cROPeg8%2Bv0RLBs%2B485Y4Y39hL1C0uECUH0zwqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsI2in5MOVZy125dyrcA3y1Hc35bGrU8c7DkcfnFOqCtGF6dlcP%2FERPjcmoN2oMOlf6fy7%2BefdxSyUYoQlxvLakeUqduLHJf27vGOnkR2ULIG%2FfcmtJLbanzjcnsVR3ZY4hi%2FB8cx6qYjvcCG6zlM%2BdEyAKemd6X6FOpaQZnaWuUbjt5zfrWnr0jHRp0SyJaMch%2FeEBw6NhsnzzYT5v4sAxGdsB6EE89vAtXS%2FRF5Cjte9bQc%2FYbaAsjfjqoF2AsnmCiuy1XZJKglWs6UxXsCidN1BBRkVEkiOGqYknWSddDJa0%2BxVSOJo9eZDaaGlXz3Kn6W0yP5t3DUfNuc2l7H2CXhA3X16Di9KaxpT6KFCwj%2FkBirpYiNgYywcx36t3uw3HYWqWQcymWRjNNfHrqz1DTsXRZRAXjDmqH90kN4NEyMWeFYsB%2Bp1OSOWVatXBAmE61ozGQTeCM%2FU38F0OamYeXKL3CwUMcQAJ%2BIVqbEyCDf3%2BsnJN2IFmwyUs20O1%2BrwGahc9RmbnYnOta5BBcmDtmyazdNdAr8ZDULTJBGuracVqe7MQxPnZIGiETy28jkIIw892IKIk18lGdKdc5JA0Kn0yA4C5%2B0Nz9%2FR%2Fg8TNruYR8lxYXrslM2zjGUs%2FLWDK%2FRdM5U1funIpMLbk9cAGOqUB%2FMqWFWUQaf2MecWFoYU2C0%2Fxz8YLMuzysQI0XjSWo4H2NbrmsgTJzeGdyT63MHjhvsrcCsrHoGWvSuK8S2kB2hJ0r%2B8M66Az0ElmvL%2FuQVmiphzixC5Z7VE9lkl5LHmjercou4pvS5yK%2FJ%2BYUD32NnZPZulWfGh6fSgRd%2BA43udEI15t%2BpBnnsLjbO3VpXKaV0BGjq400BnZxdYNvVLD1ko1pm7h&X-Amz-Signature=9f6fabd4d70fb63d5232cd2bc4a8bd995d9b13917cfa84287f256e6bb731af14&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DELG2WP%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXLjizxsHyyyoAwVaom4tnJ7jLCwmkylY3ElzLJ6Nh5AiEAz%2F%2FyaY2cROPeg8%2Bv0RLBs%2B485Y4Y39hL1C0uECUH0zwqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsI2in5MOVZy125dyrcA3y1Hc35bGrU8c7DkcfnFOqCtGF6dlcP%2FERPjcmoN2oMOlf6fy7%2BefdxSyUYoQlxvLakeUqduLHJf27vGOnkR2ULIG%2FfcmtJLbanzjcnsVR3ZY4hi%2FB8cx6qYjvcCG6zlM%2BdEyAKemd6X6FOpaQZnaWuUbjt5zfrWnr0jHRp0SyJaMch%2FeEBw6NhsnzzYT5v4sAxGdsB6EE89vAtXS%2FRF5Cjte9bQc%2FYbaAsjfjqoF2AsnmCiuy1XZJKglWs6UxXsCidN1BBRkVEkiOGqYknWSddDJa0%2BxVSOJo9eZDaaGlXz3Kn6W0yP5t3DUfNuc2l7H2CXhA3X16Di9KaxpT6KFCwj%2FkBirpYiNgYywcx36t3uw3HYWqWQcymWRjNNfHrqz1DTsXRZRAXjDmqH90kN4NEyMWeFYsB%2Bp1OSOWVatXBAmE61ozGQTeCM%2FU38F0OamYeXKL3CwUMcQAJ%2BIVqbEyCDf3%2BsnJN2IFmwyUs20O1%2BrwGahc9RmbnYnOta5BBcmDtmyazdNdAr8ZDULTJBGuracVqe7MQxPnZIGiETy28jkIIw892IKIk18lGdKdc5JA0Kn0yA4C5%2B0Nz9%2FR%2Fg8TNruYR8lxYXrslM2zjGUs%2FLWDK%2FRdM5U1funIpMLbk9cAGOqUB%2FMqWFWUQaf2MecWFoYU2C0%2Fxz8YLMuzysQI0XjSWo4H2NbrmsgTJzeGdyT63MHjhvsrcCsrHoGWvSuK8S2kB2hJ0r%2B8M66Az0ElmvL%2FuQVmiphzixC5Z7VE9lkl5LHmjercou4pvS5yK%2FJ%2BYUD32NnZPZulWfGh6fSgRd%2BA43udEI15t%2BpBnnsLjbO3VpXKaV0BGjq400BnZxdYNvVLD1ko1pm7h&X-Amz-Signature=e9063ead221c573dfb612807b17e811de7b3aa8546360b932b18615b89f342e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DELG2WP%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXLjizxsHyyyoAwVaom4tnJ7jLCwmkylY3ElzLJ6Nh5AiEAz%2F%2FyaY2cROPeg8%2Bv0RLBs%2B485Y4Y39hL1C0uECUH0zwqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsI2in5MOVZy125dyrcA3y1Hc35bGrU8c7DkcfnFOqCtGF6dlcP%2FERPjcmoN2oMOlf6fy7%2BefdxSyUYoQlxvLakeUqduLHJf27vGOnkR2ULIG%2FfcmtJLbanzjcnsVR3ZY4hi%2FB8cx6qYjvcCG6zlM%2BdEyAKemd6X6FOpaQZnaWuUbjt5zfrWnr0jHRp0SyJaMch%2FeEBw6NhsnzzYT5v4sAxGdsB6EE89vAtXS%2FRF5Cjte9bQc%2FYbaAsjfjqoF2AsnmCiuy1XZJKglWs6UxXsCidN1BBRkVEkiOGqYknWSddDJa0%2BxVSOJo9eZDaaGlXz3Kn6W0yP5t3DUfNuc2l7H2CXhA3X16Di9KaxpT6KFCwj%2FkBirpYiNgYywcx36t3uw3HYWqWQcymWRjNNfHrqz1DTsXRZRAXjDmqH90kN4NEyMWeFYsB%2Bp1OSOWVatXBAmE61ozGQTeCM%2FU38F0OamYeXKL3CwUMcQAJ%2BIVqbEyCDf3%2BsnJN2IFmwyUs20O1%2BrwGahc9RmbnYnOta5BBcmDtmyazdNdAr8ZDULTJBGuracVqe7MQxPnZIGiETy28jkIIw892IKIk18lGdKdc5JA0Kn0yA4C5%2B0Nz9%2FR%2Fg8TNruYR8lxYXrslM2zjGUs%2FLWDK%2FRdM5U1funIpMLbk9cAGOqUB%2FMqWFWUQaf2MecWFoYU2C0%2Fxz8YLMuzysQI0XjSWo4H2NbrmsgTJzeGdyT63MHjhvsrcCsrHoGWvSuK8S2kB2hJ0r%2B8M66Az0ElmvL%2FuQVmiphzixC5Z7VE9lkl5LHmjercou4pvS5yK%2FJ%2BYUD32NnZPZulWfGh6fSgRd%2BA43udEI15t%2BpBnnsLjbO3VpXKaV0BGjq400BnZxdYNvVLD1ko1pm7h&X-Amz-Signature=f05e3da1c64cd43cb522698a26e110cd1096028708007be34c63af4d668003fe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DELG2WP%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXLjizxsHyyyoAwVaom4tnJ7jLCwmkylY3ElzLJ6Nh5AiEAz%2F%2FyaY2cROPeg8%2Bv0RLBs%2B485Y4Y39hL1C0uECUH0zwqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsI2in5MOVZy125dyrcA3y1Hc35bGrU8c7DkcfnFOqCtGF6dlcP%2FERPjcmoN2oMOlf6fy7%2BefdxSyUYoQlxvLakeUqduLHJf27vGOnkR2ULIG%2FfcmtJLbanzjcnsVR3ZY4hi%2FB8cx6qYjvcCG6zlM%2BdEyAKemd6X6FOpaQZnaWuUbjt5zfrWnr0jHRp0SyJaMch%2FeEBw6NhsnzzYT5v4sAxGdsB6EE89vAtXS%2FRF5Cjte9bQc%2FYbaAsjfjqoF2AsnmCiuy1XZJKglWs6UxXsCidN1BBRkVEkiOGqYknWSddDJa0%2BxVSOJo9eZDaaGlXz3Kn6W0yP5t3DUfNuc2l7H2CXhA3X16Di9KaxpT6KFCwj%2FkBirpYiNgYywcx36t3uw3HYWqWQcymWRjNNfHrqz1DTsXRZRAXjDmqH90kN4NEyMWeFYsB%2Bp1OSOWVatXBAmE61ozGQTeCM%2FU38F0OamYeXKL3CwUMcQAJ%2BIVqbEyCDf3%2BsnJN2IFmwyUs20O1%2BrwGahc9RmbnYnOta5BBcmDtmyazdNdAr8ZDULTJBGuracVqe7MQxPnZIGiETy28jkIIw892IKIk18lGdKdc5JA0Kn0yA4C5%2B0Nz9%2FR%2Fg8TNruYR8lxYXrslM2zjGUs%2FLWDK%2FRdM5U1funIpMLbk9cAGOqUB%2FMqWFWUQaf2MecWFoYU2C0%2Fxz8YLMuzysQI0XjSWo4H2NbrmsgTJzeGdyT63MHjhvsrcCsrHoGWvSuK8S2kB2hJ0r%2B8M66Az0ElmvL%2FuQVmiphzixC5Z7VE9lkl5LHmjercou4pvS5yK%2FJ%2BYUD32NnZPZulWfGh6fSgRd%2BA43udEI15t%2BpBnnsLjbO3VpXKaV0BGjq400BnZxdYNvVLD1ko1pm7h&X-Amz-Signature=acc8c9030bb0d13a94936be94f1ecb44a98dc1aaf287ae9520062afd23e2f13b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
