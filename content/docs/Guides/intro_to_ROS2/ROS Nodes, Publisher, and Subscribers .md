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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USMIO6IL%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQzCA8%2FLaOPc1nqJ5ztPzEu5AtbK7QdLyrI6xsMchhUAiEA8GsAnOJpAl4evh2m3i0AwVKuSiTA6Cd65JLVlJhGlOUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCTLN%2BC9I661JSFU8yrcA6RkRotr22LqyjZk4B7RmITOZMMWvA2xNqcuHw0F5nDI%2FQudmaOSSXGYjfTMXvw6%2FzElgeRSUgpRe%2F9%2Bp2oPPgTFW%2Fk4Fkf4fv6O1zB62%2BaTSg8YbAZ7OeSDm%2FOv4iy4wD8Kwen0dDoML4179qOFmW7xMzcV4XLffs6kM%2FhQ8YdU6d6bg3G0Z%2BVHUIaj8gZlXXKVPHMQUjrYQ95c0DsXHxwa2Nhq%2BLdlGS1baGxNCV7B1kepSbK%2FLoJHqtM24V0JnDKEp0%2B%2BZixCEpEjlqUzrUCoqer2yOlpUnhVpRBX%2FaKIEYHn39xsfGraeqisrxUolP0inBsVhKqBb95VmKLVezwRGcumMc9EyBHtdgTThzEhR6a9jwBUjLUnaPtjDDaxgmrOjHdajhoFu2zBs01Rdlvub9i2qD%2BbP70S5ERWQkUSS9HcUmxpKbVfGmSTOu7Uz5JOsoCOxxdoMoiBautpmEB0KLlH2RGbeozVSBs1MxjLfs7%2BpP0ldW9V5GnkOB0fj0GLD9U%2FEgUKmbJbm8v7rNXDrhFbIz%2FK12ibG%2BV4jmzzOwGe31hN%2FwBOiM1a8MAfnLNbH59x7mZpy94f5vUH7b1c9D2gJTubCf7lk1wCS7QZceWS9DDpNC2kQXIsMKvv1b4GOqUBmrdO6%2FWNBTneehVHHjcXbgvXDepMAmGOY8XEHA7dncUZFWFN4viuoTLIKOIgDxxRJq8D2Y03fGDjE7jw%2BlHdT607Am%2BcWw9DwaXVxVTE1adxLdUxfijMBJ6xJsk8O4wdjWD3rvTjfgSsOEcxcTLsFfPuMhFCWXvUalYpQNNXCvgTmxB4DKNdK1QSdXokKwLkOwSCWuzhhsIvyj6RUf0aLKS5hIcM&X-Amz-Signature=6681cc0b68fae1003770abadd5b4eabc2d19db09f6246d002c3843754c5e468e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USMIO6IL%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQzCA8%2FLaOPc1nqJ5ztPzEu5AtbK7QdLyrI6xsMchhUAiEA8GsAnOJpAl4evh2m3i0AwVKuSiTA6Cd65JLVlJhGlOUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCTLN%2BC9I661JSFU8yrcA6RkRotr22LqyjZk4B7RmITOZMMWvA2xNqcuHw0F5nDI%2FQudmaOSSXGYjfTMXvw6%2FzElgeRSUgpRe%2F9%2Bp2oPPgTFW%2Fk4Fkf4fv6O1zB62%2BaTSg8YbAZ7OeSDm%2FOv4iy4wD8Kwen0dDoML4179qOFmW7xMzcV4XLffs6kM%2FhQ8YdU6d6bg3G0Z%2BVHUIaj8gZlXXKVPHMQUjrYQ95c0DsXHxwa2Nhq%2BLdlGS1baGxNCV7B1kepSbK%2FLoJHqtM24V0JnDKEp0%2B%2BZixCEpEjlqUzrUCoqer2yOlpUnhVpRBX%2FaKIEYHn39xsfGraeqisrxUolP0inBsVhKqBb95VmKLVezwRGcumMc9EyBHtdgTThzEhR6a9jwBUjLUnaPtjDDaxgmrOjHdajhoFu2zBs01Rdlvub9i2qD%2BbP70S5ERWQkUSS9HcUmxpKbVfGmSTOu7Uz5JOsoCOxxdoMoiBautpmEB0KLlH2RGbeozVSBs1MxjLfs7%2BpP0ldW9V5GnkOB0fj0GLD9U%2FEgUKmbJbm8v7rNXDrhFbIz%2FK12ibG%2BV4jmzzOwGe31hN%2FwBOiM1a8MAfnLNbH59x7mZpy94f5vUH7b1c9D2gJTubCf7lk1wCS7QZceWS9DDpNC2kQXIsMKvv1b4GOqUBmrdO6%2FWNBTneehVHHjcXbgvXDepMAmGOY8XEHA7dncUZFWFN4viuoTLIKOIgDxxRJq8D2Y03fGDjE7jw%2BlHdT607Am%2BcWw9DwaXVxVTE1adxLdUxfijMBJ6xJsk8O4wdjWD3rvTjfgSsOEcxcTLsFfPuMhFCWXvUalYpQNNXCvgTmxB4DKNdK1QSdXokKwLkOwSCWuzhhsIvyj6RUf0aLKS5hIcM&X-Amz-Signature=65ee5bea52918d8475678b715f121cbc33278c1a1142443995f7547655c49512&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USMIO6IL%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQzCA8%2FLaOPc1nqJ5ztPzEu5AtbK7QdLyrI6xsMchhUAiEA8GsAnOJpAl4evh2m3i0AwVKuSiTA6Cd65JLVlJhGlOUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCTLN%2BC9I661JSFU8yrcA6RkRotr22LqyjZk4B7RmITOZMMWvA2xNqcuHw0F5nDI%2FQudmaOSSXGYjfTMXvw6%2FzElgeRSUgpRe%2F9%2Bp2oPPgTFW%2Fk4Fkf4fv6O1zB62%2BaTSg8YbAZ7OeSDm%2FOv4iy4wD8Kwen0dDoML4179qOFmW7xMzcV4XLffs6kM%2FhQ8YdU6d6bg3G0Z%2BVHUIaj8gZlXXKVPHMQUjrYQ95c0DsXHxwa2Nhq%2BLdlGS1baGxNCV7B1kepSbK%2FLoJHqtM24V0JnDKEp0%2B%2BZixCEpEjlqUzrUCoqer2yOlpUnhVpRBX%2FaKIEYHn39xsfGraeqisrxUolP0inBsVhKqBb95VmKLVezwRGcumMc9EyBHtdgTThzEhR6a9jwBUjLUnaPtjDDaxgmrOjHdajhoFu2zBs01Rdlvub9i2qD%2BbP70S5ERWQkUSS9HcUmxpKbVfGmSTOu7Uz5JOsoCOxxdoMoiBautpmEB0KLlH2RGbeozVSBs1MxjLfs7%2BpP0ldW9V5GnkOB0fj0GLD9U%2FEgUKmbJbm8v7rNXDrhFbIz%2FK12ibG%2BV4jmzzOwGe31hN%2FwBOiM1a8MAfnLNbH59x7mZpy94f5vUH7b1c9D2gJTubCf7lk1wCS7QZceWS9DDpNC2kQXIsMKvv1b4GOqUBmrdO6%2FWNBTneehVHHjcXbgvXDepMAmGOY8XEHA7dncUZFWFN4viuoTLIKOIgDxxRJq8D2Y03fGDjE7jw%2BlHdT607Am%2BcWw9DwaXVxVTE1adxLdUxfijMBJ6xJsk8O4wdjWD3rvTjfgSsOEcxcTLsFfPuMhFCWXvUalYpQNNXCvgTmxB4DKNdK1QSdXokKwLkOwSCWuzhhsIvyj6RUf0aLKS5hIcM&X-Amz-Signature=1e485dc0b57d9e3f64f3cb05a67b12a6990dd5ca8556a66c9212b410ed0c4906&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USMIO6IL%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQzCA8%2FLaOPc1nqJ5ztPzEu5AtbK7QdLyrI6xsMchhUAiEA8GsAnOJpAl4evh2m3i0AwVKuSiTA6Cd65JLVlJhGlOUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCTLN%2BC9I661JSFU8yrcA6RkRotr22LqyjZk4B7RmITOZMMWvA2xNqcuHw0F5nDI%2FQudmaOSSXGYjfTMXvw6%2FzElgeRSUgpRe%2F9%2Bp2oPPgTFW%2Fk4Fkf4fv6O1zB62%2BaTSg8YbAZ7OeSDm%2FOv4iy4wD8Kwen0dDoML4179qOFmW7xMzcV4XLffs6kM%2FhQ8YdU6d6bg3G0Z%2BVHUIaj8gZlXXKVPHMQUjrYQ95c0DsXHxwa2Nhq%2BLdlGS1baGxNCV7B1kepSbK%2FLoJHqtM24V0JnDKEp0%2B%2BZixCEpEjlqUzrUCoqer2yOlpUnhVpRBX%2FaKIEYHn39xsfGraeqisrxUolP0inBsVhKqBb95VmKLVezwRGcumMc9EyBHtdgTThzEhR6a9jwBUjLUnaPtjDDaxgmrOjHdajhoFu2zBs01Rdlvub9i2qD%2BbP70S5ERWQkUSS9HcUmxpKbVfGmSTOu7Uz5JOsoCOxxdoMoiBautpmEB0KLlH2RGbeozVSBs1MxjLfs7%2BpP0ldW9V5GnkOB0fj0GLD9U%2FEgUKmbJbm8v7rNXDrhFbIz%2FK12ibG%2BV4jmzzOwGe31hN%2FwBOiM1a8MAfnLNbH59x7mZpy94f5vUH7b1c9D2gJTubCf7lk1wCS7QZceWS9DDpNC2kQXIsMKvv1b4GOqUBmrdO6%2FWNBTneehVHHjcXbgvXDepMAmGOY8XEHA7dncUZFWFN4viuoTLIKOIgDxxRJq8D2Y03fGDjE7jw%2BlHdT607Am%2BcWw9DwaXVxVTE1adxLdUxfijMBJ6xJsk8O4wdjWD3rvTjfgSsOEcxcTLsFfPuMhFCWXvUalYpQNNXCvgTmxB4DKNdK1QSdXokKwLkOwSCWuzhhsIvyj6RUf0aLKS5hIcM&X-Amz-Signature=04c342c0d7cbbef659b5d595f4c7abc0b2c613e1bf15b19dec4dc604c5736457&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USMIO6IL%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQzCA8%2FLaOPc1nqJ5ztPzEu5AtbK7QdLyrI6xsMchhUAiEA8GsAnOJpAl4evh2m3i0AwVKuSiTA6Cd65JLVlJhGlOUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCTLN%2BC9I661JSFU8yrcA6RkRotr22LqyjZk4B7RmITOZMMWvA2xNqcuHw0F5nDI%2FQudmaOSSXGYjfTMXvw6%2FzElgeRSUgpRe%2F9%2Bp2oPPgTFW%2Fk4Fkf4fv6O1zB62%2BaTSg8YbAZ7OeSDm%2FOv4iy4wD8Kwen0dDoML4179qOFmW7xMzcV4XLffs6kM%2FhQ8YdU6d6bg3G0Z%2BVHUIaj8gZlXXKVPHMQUjrYQ95c0DsXHxwa2Nhq%2BLdlGS1baGxNCV7B1kepSbK%2FLoJHqtM24V0JnDKEp0%2B%2BZixCEpEjlqUzrUCoqer2yOlpUnhVpRBX%2FaKIEYHn39xsfGraeqisrxUolP0inBsVhKqBb95VmKLVezwRGcumMc9EyBHtdgTThzEhR6a9jwBUjLUnaPtjDDaxgmrOjHdajhoFu2zBs01Rdlvub9i2qD%2BbP70S5ERWQkUSS9HcUmxpKbVfGmSTOu7Uz5JOsoCOxxdoMoiBautpmEB0KLlH2RGbeozVSBs1MxjLfs7%2BpP0ldW9V5GnkOB0fj0GLD9U%2FEgUKmbJbm8v7rNXDrhFbIz%2FK12ibG%2BV4jmzzOwGe31hN%2FwBOiM1a8MAfnLNbH59x7mZpy94f5vUH7b1c9D2gJTubCf7lk1wCS7QZceWS9DDpNC2kQXIsMKvv1b4GOqUBmrdO6%2FWNBTneehVHHjcXbgvXDepMAmGOY8XEHA7dncUZFWFN4viuoTLIKOIgDxxRJq8D2Y03fGDjE7jw%2BlHdT607Am%2BcWw9DwaXVxVTE1adxLdUxfijMBJ6xJsk8O4wdjWD3rvTjfgSsOEcxcTLsFfPuMhFCWXvUalYpQNNXCvgTmxB4DKNdK1QSdXokKwLkOwSCWuzhhsIvyj6RUf0aLKS5hIcM&X-Amz-Signature=800384c921e1bcbe1ff4cdd6e9a737a3fc54dcf1bcb248a8639e951595a9839d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USMIO6IL%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQzCA8%2FLaOPc1nqJ5ztPzEu5AtbK7QdLyrI6xsMchhUAiEA8GsAnOJpAl4evh2m3i0AwVKuSiTA6Cd65JLVlJhGlOUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCTLN%2BC9I661JSFU8yrcA6RkRotr22LqyjZk4B7RmITOZMMWvA2xNqcuHw0F5nDI%2FQudmaOSSXGYjfTMXvw6%2FzElgeRSUgpRe%2F9%2Bp2oPPgTFW%2Fk4Fkf4fv6O1zB62%2BaTSg8YbAZ7OeSDm%2FOv4iy4wD8Kwen0dDoML4179qOFmW7xMzcV4XLffs6kM%2FhQ8YdU6d6bg3G0Z%2BVHUIaj8gZlXXKVPHMQUjrYQ95c0DsXHxwa2Nhq%2BLdlGS1baGxNCV7B1kepSbK%2FLoJHqtM24V0JnDKEp0%2B%2BZixCEpEjlqUzrUCoqer2yOlpUnhVpRBX%2FaKIEYHn39xsfGraeqisrxUolP0inBsVhKqBb95VmKLVezwRGcumMc9EyBHtdgTThzEhR6a9jwBUjLUnaPtjDDaxgmrOjHdajhoFu2zBs01Rdlvub9i2qD%2BbP70S5ERWQkUSS9HcUmxpKbVfGmSTOu7Uz5JOsoCOxxdoMoiBautpmEB0KLlH2RGbeozVSBs1MxjLfs7%2BpP0ldW9V5GnkOB0fj0GLD9U%2FEgUKmbJbm8v7rNXDrhFbIz%2FK12ibG%2BV4jmzzOwGe31hN%2FwBOiM1a8MAfnLNbH59x7mZpy94f5vUH7b1c9D2gJTubCf7lk1wCS7QZceWS9DDpNC2kQXIsMKvv1b4GOqUBmrdO6%2FWNBTneehVHHjcXbgvXDepMAmGOY8XEHA7dncUZFWFN4viuoTLIKOIgDxxRJq8D2Y03fGDjE7jw%2BlHdT607Am%2BcWw9DwaXVxVTE1adxLdUxfijMBJ6xJsk8O4wdjWD3rvTjfgSsOEcxcTLsFfPuMhFCWXvUalYpQNNXCvgTmxB4DKNdK1QSdXokKwLkOwSCWuzhhsIvyj6RUf0aLKS5hIcM&X-Amz-Signature=dda4f8a55b2e5916ea39d63f8d0b0e7119803746d236b2a5a81ae3fad6a787f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USMIO6IL%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQzCA8%2FLaOPc1nqJ5ztPzEu5AtbK7QdLyrI6xsMchhUAiEA8GsAnOJpAl4evh2m3i0AwVKuSiTA6Cd65JLVlJhGlOUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCTLN%2BC9I661JSFU8yrcA6RkRotr22LqyjZk4B7RmITOZMMWvA2xNqcuHw0F5nDI%2FQudmaOSSXGYjfTMXvw6%2FzElgeRSUgpRe%2F9%2Bp2oPPgTFW%2Fk4Fkf4fv6O1zB62%2BaTSg8YbAZ7OeSDm%2FOv4iy4wD8Kwen0dDoML4179qOFmW7xMzcV4XLffs6kM%2FhQ8YdU6d6bg3G0Z%2BVHUIaj8gZlXXKVPHMQUjrYQ95c0DsXHxwa2Nhq%2BLdlGS1baGxNCV7B1kepSbK%2FLoJHqtM24V0JnDKEp0%2B%2BZixCEpEjlqUzrUCoqer2yOlpUnhVpRBX%2FaKIEYHn39xsfGraeqisrxUolP0inBsVhKqBb95VmKLVezwRGcumMc9EyBHtdgTThzEhR6a9jwBUjLUnaPtjDDaxgmrOjHdajhoFu2zBs01Rdlvub9i2qD%2BbP70S5ERWQkUSS9HcUmxpKbVfGmSTOu7Uz5JOsoCOxxdoMoiBautpmEB0KLlH2RGbeozVSBs1MxjLfs7%2BpP0ldW9V5GnkOB0fj0GLD9U%2FEgUKmbJbm8v7rNXDrhFbIz%2FK12ibG%2BV4jmzzOwGe31hN%2FwBOiM1a8MAfnLNbH59x7mZpy94f5vUH7b1c9D2gJTubCf7lk1wCS7QZceWS9DDpNC2kQXIsMKvv1b4GOqUBmrdO6%2FWNBTneehVHHjcXbgvXDepMAmGOY8XEHA7dncUZFWFN4viuoTLIKOIgDxxRJq8D2Y03fGDjE7jw%2BlHdT607Am%2BcWw9DwaXVxVTE1adxLdUxfijMBJ6xJsk8O4wdjWD3rvTjfgSsOEcxcTLsFfPuMhFCWXvUalYpQNNXCvgTmxB4DKNdK1QSdXokKwLkOwSCWuzhhsIvyj6RUf0aLKS5hIcM&X-Amz-Signature=166f673d1d4ee0b1c8165664f3a66b1a350360f04c67ccf2a46e3f1009a50b8c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USMIO6IL%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQzCA8%2FLaOPc1nqJ5ztPzEu5AtbK7QdLyrI6xsMchhUAiEA8GsAnOJpAl4evh2m3i0AwVKuSiTA6Cd65JLVlJhGlOUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCTLN%2BC9I661JSFU8yrcA6RkRotr22LqyjZk4B7RmITOZMMWvA2xNqcuHw0F5nDI%2FQudmaOSSXGYjfTMXvw6%2FzElgeRSUgpRe%2F9%2Bp2oPPgTFW%2Fk4Fkf4fv6O1zB62%2BaTSg8YbAZ7OeSDm%2FOv4iy4wD8Kwen0dDoML4179qOFmW7xMzcV4XLffs6kM%2FhQ8YdU6d6bg3G0Z%2BVHUIaj8gZlXXKVPHMQUjrYQ95c0DsXHxwa2Nhq%2BLdlGS1baGxNCV7B1kepSbK%2FLoJHqtM24V0JnDKEp0%2B%2BZixCEpEjlqUzrUCoqer2yOlpUnhVpRBX%2FaKIEYHn39xsfGraeqisrxUolP0inBsVhKqBb95VmKLVezwRGcumMc9EyBHtdgTThzEhR6a9jwBUjLUnaPtjDDaxgmrOjHdajhoFu2zBs01Rdlvub9i2qD%2BbP70S5ERWQkUSS9HcUmxpKbVfGmSTOu7Uz5JOsoCOxxdoMoiBautpmEB0KLlH2RGbeozVSBs1MxjLfs7%2BpP0ldW9V5GnkOB0fj0GLD9U%2FEgUKmbJbm8v7rNXDrhFbIz%2FK12ibG%2BV4jmzzOwGe31hN%2FwBOiM1a8MAfnLNbH59x7mZpy94f5vUH7b1c9D2gJTubCf7lk1wCS7QZceWS9DDpNC2kQXIsMKvv1b4GOqUBmrdO6%2FWNBTneehVHHjcXbgvXDepMAmGOY8XEHA7dncUZFWFN4viuoTLIKOIgDxxRJq8D2Y03fGDjE7jw%2BlHdT607Am%2BcWw9DwaXVxVTE1adxLdUxfijMBJ6xJsk8O4wdjWD3rvTjfgSsOEcxcTLsFfPuMhFCWXvUalYpQNNXCvgTmxB4DKNdK1QSdXokKwLkOwSCWuzhhsIvyj6RUf0aLKS5hIcM&X-Amz-Signature=aca36446d7a6b0c47fa2ef2368e0522f1e6e4912ce5fa2e66eea1ac8f8d117cd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
