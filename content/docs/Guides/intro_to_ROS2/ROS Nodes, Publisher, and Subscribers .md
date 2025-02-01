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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHLJKGW3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T121149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeOmtlWLuSR2%2F%2FpXVFQLB0qEGZrIyVOcvHu60BORlBQgIgCABlRdCWZX3tYOndaDDLZ2DEW4OBeNh%2BgUsucFehHGQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FRCHfFv0lJBHnx2CrcA3R1HDNcfaaITHFrFhQ2I0tUCEvI8HWWHqDVQ1BvvmHJPdA7nDVM4FO2o1R4hl7TgZJOXF8qlma8csQUeMZWkrWmrxN5wMEPWe1RJHtUtiVJLufQ9SkATgbxqMyHnTF3fojNtCdmbLCn1QRXrnOIx5roBvVQb6BmvANX0XR6bsBNeS0kHp6Ee1X5PNakSOqqMAxvDqHa%2BXp0Gm3oG8id%2BxyKGYpYj%2FGemTuHHLr2gnaPUy6mRuM59oT4AWBJx2qviSl%2BkZ0nA%2BZjcVyuln1Q5f%2BGlBCCwmd%2BSHIssL8%2FlHqAND2B0fNk5vCx2%2FFXH8kToTnumqwstteQmJN6LK4IibRo6dT7wVE%2BMsuEX0dDeZlBM7Atz%2FgUxZsEZzveC5xNspECcELv7SR36h2b08SH8kYpg4LsIDig9v5fOdnMR%2FhkRpOb%2Ff4%2BaFgG%2FY8bUbAqYixQUoT0gVhMjvYZl8mIGcGvAAczdcHQiRc3JaweRUWtYeoBVKS03fYkPqvFiyZjOMz7mJ2XPZUTiGUkBG8KKdBjUY2RQasX56V856CEzC2%2BsjcDp1wMR03U3ertSpxml4%2FIhJ4P3NU3q1Lz8aFHi3ZNJwhrqPv0ID59rfXRA%2BS7AiRF31ctow2WlAcjMNul97wGOqUBFOL7Oj8%2BjLoHS3r9D%2F4HCWzennDYhTWRE0Qg%2F6HV%2BHrGtn2ZrGTTLLxH8amKStsA7Uxh2G2YbdghvCfDvNZSzOrrDE7WBOTXq028qe3F5mdAX%2FrV2H%2FRtk608iVRnVwrvT21IE%2BC2juoUjiUJAc8Qms6x63gXyo4gDO9a3M5tzbbc5DdBQmNo129PlNnOffVcSU9LidvRO1WqgMIvhLoD3pyxZJt&X-Amz-Signature=11cf0b85da7d40f54b7ab90e8755d1b6c40c2e39a4a3b0d65f15477a46218bab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHLJKGW3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T121149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeOmtlWLuSR2%2F%2FpXVFQLB0qEGZrIyVOcvHu60BORlBQgIgCABlRdCWZX3tYOndaDDLZ2DEW4OBeNh%2BgUsucFehHGQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FRCHfFv0lJBHnx2CrcA3R1HDNcfaaITHFrFhQ2I0tUCEvI8HWWHqDVQ1BvvmHJPdA7nDVM4FO2o1R4hl7TgZJOXF8qlma8csQUeMZWkrWmrxN5wMEPWe1RJHtUtiVJLufQ9SkATgbxqMyHnTF3fojNtCdmbLCn1QRXrnOIx5roBvVQb6BmvANX0XR6bsBNeS0kHp6Ee1X5PNakSOqqMAxvDqHa%2BXp0Gm3oG8id%2BxyKGYpYj%2FGemTuHHLr2gnaPUy6mRuM59oT4AWBJx2qviSl%2BkZ0nA%2BZjcVyuln1Q5f%2BGlBCCwmd%2BSHIssL8%2FlHqAND2B0fNk5vCx2%2FFXH8kToTnumqwstteQmJN6LK4IibRo6dT7wVE%2BMsuEX0dDeZlBM7Atz%2FgUxZsEZzveC5xNspECcELv7SR36h2b08SH8kYpg4LsIDig9v5fOdnMR%2FhkRpOb%2Ff4%2BaFgG%2FY8bUbAqYixQUoT0gVhMjvYZl8mIGcGvAAczdcHQiRc3JaweRUWtYeoBVKS03fYkPqvFiyZjOMz7mJ2XPZUTiGUkBG8KKdBjUY2RQasX56V856CEzC2%2BsjcDp1wMR03U3ertSpxml4%2FIhJ4P3NU3q1Lz8aFHi3ZNJwhrqPv0ID59rfXRA%2BS7AiRF31ctow2WlAcjMNul97wGOqUBFOL7Oj8%2BjLoHS3r9D%2F4HCWzennDYhTWRE0Qg%2F6HV%2BHrGtn2ZrGTTLLxH8amKStsA7Uxh2G2YbdghvCfDvNZSzOrrDE7WBOTXq028qe3F5mdAX%2FrV2H%2FRtk608iVRnVwrvT21IE%2BC2juoUjiUJAc8Qms6x63gXyo4gDO9a3M5tzbbc5DdBQmNo129PlNnOffVcSU9LidvRO1WqgMIvhLoD3pyxZJt&X-Amz-Signature=1dc92df28cb31a5e1b9ae318f55821ff81aecace419049d8bdb10bd090ed9187&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHLJKGW3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T121149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeOmtlWLuSR2%2F%2FpXVFQLB0qEGZrIyVOcvHu60BORlBQgIgCABlRdCWZX3tYOndaDDLZ2DEW4OBeNh%2BgUsucFehHGQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FRCHfFv0lJBHnx2CrcA3R1HDNcfaaITHFrFhQ2I0tUCEvI8HWWHqDVQ1BvvmHJPdA7nDVM4FO2o1R4hl7TgZJOXF8qlma8csQUeMZWkrWmrxN5wMEPWe1RJHtUtiVJLufQ9SkATgbxqMyHnTF3fojNtCdmbLCn1QRXrnOIx5roBvVQb6BmvANX0XR6bsBNeS0kHp6Ee1X5PNakSOqqMAxvDqHa%2BXp0Gm3oG8id%2BxyKGYpYj%2FGemTuHHLr2gnaPUy6mRuM59oT4AWBJx2qviSl%2BkZ0nA%2BZjcVyuln1Q5f%2BGlBCCwmd%2BSHIssL8%2FlHqAND2B0fNk5vCx2%2FFXH8kToTnumqwstteQmJN6LK4IibRo6dT7wVE%2BMsuEX0dDeZlBM7Atz%2FgUxZsEZzveC5xNspECcELv7SR36h2b08SH8kYpg4LsIDig9v5fOdnMR%2FhkRpOb%2Ff4%2BaFgG%2FY8bUbAqYixQUoT0gVhMjvYZl8mIGcGvAAczdcHQiRc3JaweRUWtYeoBVKS03fYkPqvFiyZjOMz7mJ2XPZUTiGUkBG8KKdBjUY2RQasX56V856CEzC2%2BsjcDp1wMR03U3ertSpxml4%2FIhJ4P3NU3q1Lz8aFHi3ZNJwhrqPv0ID59rfXRA%2BS7AiRF31ctow2WlAcjMNul97wGOqUBFOL7Oj8%2BjLoHS3r9D%2F4HCWzennDYhTWRE0Qg%2F6HV%2BHrGtn2ZrGTTLLxH8amKStsA7Uxh2G2YbdghvCfDvNZSzOrrDE7WBOTXq028qe3F5mdAX%2FrV2H%2FRtk608iVRnVwrvT21IE%2BC2juoUjiUJAc8Qms6x63gXyo4gDO9a3M5tzbbc5DdBQmNo129PlNnOffVcSU9LidvRO1WqgMIvhLoD3pyxZJt&X-Amz-Signature=28172113dc3e7d6dbc3527cdf87af94161df6a4c828d7e07088649397d23e407&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHLJKGW3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T121149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeOmtlWLuSR2%2F%2FpXVFQLB0qEGZrIyVOcvHu60BORlBQgIgCABlRdCWZX3tYOndaDDLZ2DEW4OBeNh%2BgUsucFehHGQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FRCHfFv0lJBHnx2CrcA3R1HDNcfaaITHFrFhQ2I0tUCEvI8HWWHqDVQ1BvvmHJPdA7nDVM4FO2o1R4hl7TgZJOXF8qlma8csQUeMZWkrWmrxN5wMEPWe1RJHtUtiVJLufQ9SkATgbxqMyHnTF3fojNtCdmbLCn1QRXrnOIx5roBvVQb6BmvANX0XR6bsBNeS0kHp6Ee1X5PNakSOqqMAxvDqHa%2BXp0Gm3oG8id%2BxyKGYpYj%2FGemTuHHLr2gnaPUy6mRuM59oT4AWBJx2qviSl%2BkZ0nA%2BZjcVyuln1Q5f%2BGlBCCwmd%2BSHIssL8%2FlHqAND2B0fNk5vCx2%2FFXH8kToTnumqwstteQmJN6LK4IibRo6dT7wVE%2BMsuEX0dDeZlBM7Atz%2FgUxZsEZzveC5xNspECcELv7SR36h2b08SH8kYpg4LsIDig9v5fOdnMR%2FhkRpOb%2Ff4%2BaFgG%2FY8bUbAqYixQUoT0gVhMjvYZl8mIGcGvAAczdcHQiRc3JaweRUWtYeoBVKS03fYkPqvFiyZjOMz7mJ2XPZUTiGUkBG8KKdBjUY2RQasX56V856CEzC2%2BsjcDp1wMR03U3ertSpxml4%2FIhJ4P3NU3q1Lz8aFHi3ZNJwhrqPv0ID59rfXRA%2BS7AiRF31ctow2WlAcjMNul97wGOqUBFOL7Oj8%2BjLoHS3r9D%2F4HCWzennDYhTWRE0Qg%2F6HV%2BHrGtn2ZrGTTLLxH8amKStsA7Uxh2G2YbdghvCfDvNZSzOrrDE7WBOTXq028qe3F5mdAX%2FrV2H%2FRtk608iVRnVwrvT21IE%2BC2juoUjiUJAc8Qms6x63gXyo4gDO9a3M5tzbbc5DdBQmNo129PlNnOffVcSU9LidvRO1WqgMIvhLoD3pyxZJt&X-Amz-Signature=ed84681c5bf37201d3901d2fe98d1e9874c227158129846a7587d0f203d3a723&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHLJKGW3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T121149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeOmtlWLuSR2%2F%2FpXVFQLB0qEGZrIyVOcvHu60BORlBQgIgCABlRdCWZX3tYOndaDDLZ2DEW4OBeNh%2BgUsucFehHGQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FRCHfFv0lJBHnx2CrcA3R1HDNcfaaITHFrFhQ2I0tUCEvI8HWWHqDVQ1BvvmHJPdA7nDVM4FO2o1R4hl7TgZJOXF8qlma8csQUeMZWkrWmrxN5wMEPWe1RJHtUtiVJLufQ9SkATgbxqMyHnTF3fojNtCdmbLCn1QRXrnOIx5roBvVQb6BmvANX0XR6bsBNeS0kHp6Ee1X5PNakSOqqMAxvDqHa%2BXp0Gm3oG8id%2BxyKGYpYj%2FGemTuHHLr2gnaPUy6mRuM59oT4AWBJx2qviSl%2BkZ0nA%2BZjcVyuln1Q5f%2BGlBCCwmd%2BSHIssL8%2FlHqAND2B0fNk5vCx2%2FFXH8kToTnumqwstteQmJN6LK4IibRo6dT7wVE%2BMsuEX0dDeZlBM7Atz%2FgUxZsEZzveC5xNspECcELv7SR36h2b08SH8kYpg4LsIDig9v5fOdnMR%2FhkRpOb%2Ff4%2BaFgG%2FY8bUbAqYixQUoT0gVhMjvYZl8mIGcGvAAczdcHQiRc3JaweRUWtYeoBVKS03fYkPqvFiyZjOMz7mJ2XPZUTiGUkBG8KKdBjUY2RQasX56V856CEzC2%2BsjcDp1wMR03U3ertSpxml4%2FIhJ4P3NU3q1Lz8aFHi3ZNJwhrqPv0ID59rfXRA%2BS7AiRF31ctow2WlAcjMNul97wGOqUBFOL7Oj8%2BjLoHS3r9D%2F4HCWzennDYhTWRE0Qg%2F6HV%2BHrGtn2ZrGTTLLxH8amKStsA7Uxh2G2YbdghvCfDvNZSzOrrDE7WBOTXq028qe3F5mdAX%2FrV2H%2FRtk608iVRnVwrvT21IE%2BC2juoUjiUJAc8Qms6x63gXyo4gDO9a3M5tzbbc5DdBQmNo129PlNnOffVcSU9LidvRO1WqgMIvhLoD3pyxZJt&X-Amz-Signature=6e63ffeed34ff6fe577686ebe846824d4030b1d1208a0efa6e72fff7174e9d8b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHLJKGW3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T121149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeOmtlWLuSR2%2F%2FpXVFQLB0qEGZrIyVOcvHu60BORlBQgIgCABlRdCWZX3tYOndaDDLZ2DEW4OBeNh%2BgUsucFehHGQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FRCHfFv0lJBHnx2CrcA3R1HDNcfaaITHFrFhQ2I0tUCEvI8HWWHqDVQ1BvvmHJPdA7nDVM4FO2o1R4hl7TgZJOXF8qlma8csQUeMZWkrWmrxN5wMEPWe1RJHtUtiVJLufQ9SkATgbxqMyHnTF3fojNtCdmbLCn1QRXrnOIx5roBvVQb6BmvANX0XR6bsBNeS0kHp6Ee1X5PNakSOqqMAxvDqHa%2BXp0Gm3oG8id%2BxyKGYpYj%2FGemTuHHLr2gnaPUy6mRuM59oT4AWBJx2qviSl%2BkZ0nA%2BZjcVyuln1Q5f%2BGlBCCwmd%2BSHIssL8%2FlHqAND2B0fNk5vCx2%2FFXH8kToTnumqwstteQmJN6LK4IibRo6dT7wVE%2BMsuEX0dDeZlBM7Atz%2FgUxZsEZzveC5xNspECcELv7SR36h2b08SH8kYpg4LsIDig9v5fOdnMR%2FhkRpOb%2Ff4%2BaFgG%2FY8bUbAqYixQUoT0gVhMjvYZl8mIGcGvAAczdcHQiRc3JaweRUWtYeoBVKS03fYkPqvFiyZjOMz7mJ2XPZUTiGUkBG8KKdBjUY2RQasX56V856CEzC2%2BsjcDp1wMR03U3ertSpxml4%2FIhJ4P3NU3q1Lz8aFHi3ZNJwhrqPv0ID59rfXRA%2BS7AiRF31ctow2WlAcjMNul97wGOqUBFOL7Oj8%2BjLoHS3r9D%2F4HCWzennDYhTWRE0Qg%2F6HV%2BHrGtn2ZrGTTLLxH8amKStsA7Uxh2G2YbdghvCfDvNZSzOrrDE7WBOTXq028qe3F5mdAX%2FrV2H%2FRtk608iVRnVwrvT21IE%2BC2juoUjiUJAc8Qms6x63gXyo4gDO9a3M5tzbbc5DdBQmNo129PlNnOffVcSU9LidvRO1WqgMIvhLoD3pyxZJt&X-Amz-Signature=402bab6c6fa28cd360037d10047ee214236964651476a62b5da7577b2059e4fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHLJKGW3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T121149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeOmtlWLuSR2%2F%2FpXVFQLB0qEGZrIyVOcvHu60BORlBQgIgCABlRdCWZX3tYOndaDDLZ2DEW4OBeNh%2BgUsucFehHGQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FRCHfFv0lJBHnx2CrcA3R1HDNcfaaITHFrFhQ2I0tUCEvI8HWWHqDVQ1BvvmHJPdA7nDVM4FO2o1R4hl7TgZJOXF8qlma8csQUeMZWkrWmrxN5wMEPWe1RJHtUtiVJLufQ9SkATgbxqMyHnTF3fojNtCdmbLCn1QRXrnOIx5roBvVQb6BmvANX0XR6bsBNeS0kHp6Ee1X5PNakSOqqMAxvDqHa%2BXp0Gm3oG8id%2BxyKGYpYj%2FGemTuHHLr2gnaPUy6mRuM59oT4AWBJx2qviSl%2BkZ0nA%2BZjcVyuln1Q5f%2BGlBCCwmd%2BSHIssL8%2FlHqAND2B0fNk5vCx2%2FFXH8kToTnumqwstteQmJN6LK4IibRo6dT7wVE%2BMsuEX0dDeZlBM7Atz%2FgUxZsEZzveC5xNspECcELv7SR36h2b08SH8kYpg4LsIDig9v5fOdnMR%2FhkRpOb%2Ff4%2BaFgG%2FY8bUbAqYixQUoT0gVhMjvYZl8mIGcGvAAczdcHQiRc3JaweRUWtYeoBVKS03fYkPqvFiyZjOMz7mJ2XPZUTiGUkBG8KKdBjUY2RQasX56V856CEzC2%2BsjcDp1wMR03U3ertSpxml4%2FIhJ4P3NU3q1Lz8aFHi3ZNJwhrqPv0ID59rfXRA%2BS7AiRF31ctow2WlAcjMNul97wGOqUBFOL7Oj8%2BjLoHS3r9D%2F4HCWzennDYhTWRE0Qg%2F6HV%2BHrGtn2ZrGTTLLxH8amKStsA7Uxh2G2YbdghvCfDvNZSzOrrDE7WBOTXq028qe3F5mdAX%2FrV2H%2FRtk608iVRnVwrvT21IE%2BC2juoUjiUJAc8Qms6x63gXyo4gDO9a3M5tzbbc5DdBQmNo129PlNnOffVcSU9LidvRO1WqgMIvhLoD3pyxZJt&X-Amz-Signature=df2b4fd4a0db69b962c79baacc819209e56b94d66132b948f122904a68b3c56b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHLJKGW3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T121149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeOmtlWLuSR2%2F%2FpXVFQLB0qEGZrIyVOcvHu60BORlBQgIgCABlRdCWZX3tYOndaDDLZ2DEW4OBeNh%2BgUsucFehHGQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FRCHfFv0lJBHnx2CrcA3R1HDNcfaaITHFrFhQ2I0tUCEvI8HWWHqDVQ1BvvmHJPdA7nDVM4FO2o1R4hl7TgZJOXF8qlma8csQUeMZWkrWmrxN5wMEPWe1RJHtUtiVJLufQ9SkATgbxqMyHnTF3fojNtCdmbLCn1QRXrnOIx5roBvVQb6BmvANX0XR6bsBNeS0kHp6Ee1X5PNakSOqqMAxvDqHa%2BXp0Gm3oG8id%2BxyKGYpYj%2FGemTuHHLr2gnaPUy6mRuM59oT4AWBJx2qviSl%2BkZ0nA%2BZjcVyuln1Q5f%2BGlBCCwmd%2BSHIssL8%2FlHqAND2B0fNk5vCx2%2FFXH8kToTnumqwstteQmJN6LK4IibRo6dT7wVE%2BMsuEX0dDeZlBM7Atz%2FgUxZsEZzveC5xNspECcELv7SR36h2b08SH8kYpg4LsIDig9v5fOdnMR%2FhkRpOb%2Ff4%2BaFgG%2FY8bUbAqYixQUoT0gVhMjvYZl8mIGcGvAAczdcHQiRc3JaweRUWtYeoBVKS03fYkPqvFiyZjOMz7mJ2XPZUTiGUkBG8KKdBjUY2RQasX56V856CEzC2%2BsjcDp1wMR03U3ertSpxml4%2FIhJ4P3NU3q1Lz8aFHi3ZNJwhrqPv0ID59rfXRA%2BS7AiRF31ctow2WlAcjMNul97wGOqUBFOL7Oj8%2BjLoHS3r9D%2F4HCWzennDYhTWRE0Qg%2F6HV%2BHrGtn2ZrGTTLLxH8amKStsA7Uxh2G2YbdghvCfDvNZSzOrrDE7WBOTXq028qe3F5mdAX%2FrV2H%2FRtk608iVRnVwrvT21IE%2BC2juoUjiUJAc8Qms6x63gXyo4gDO9a3M5tzbbc5DdBQmNo129PlNnOffVcSU9LidvRO1WqgMIvhLoD3pyxZJt&X-Amz-Signature=201ed30e3bbcf1471d15152e729576ff349588958ccc54a4ff9d2370bad21b24&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
