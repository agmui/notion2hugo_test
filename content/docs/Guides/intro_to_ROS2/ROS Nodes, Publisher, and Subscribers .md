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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKF3BQUT%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC47woxai3hFmLLvpPhMlgZPfQEPMzbZsTlisQzHreBdAIhAM%2FrkXwZoHnXB085ckee1RNwwH%2FLzwF%2FYUv%2F1cUEJv6zKv8DCBQQABoMNjM3NDIzMTgzODA1Igw44KdIkq2Ov3%2F3l8Qq3APSHFZ8YBWiQUosXAZJFA%2BAJ4WwLl3lxTEp%2FF1ZQn7uz0IKGOOuYJDhGB7M8Vu3cxhXAk9Zehi3OIPM6CsEYp6x6F0Qg%2FpxcSyjuoz%2FPLOIdL9ds6KqjhhzmY%2BgkZk5lcr5T8RUP%2BtASmbjWN2EUizASJ%2F7y1x8q5B3iRf6AlV1BZR3yxzgYT6LmpwKD6s4haO3SgLiqnpenDSIfD29HeYdrct%2FtlhJvCEjE%2B5poPSrc%2BuM5LAXdpJXjKWmvptBXvRtEUdwBby5oFeU1fflJphjhxCesxIihYADx90QLXN3glpejDq7bx2NgmdB7fzexK%2FLEN74EQzxkwlkOLtW57MS6XETL0c3DmkPoXyJt7xzIpNwOPGcEvnCa7K6OtnqO6qJky1mpx7cQESm87w2JO1UnCRBx7p%2FAx0zjjMCS6ebmWI64ew7O%2BwYqyzKnhOY2oOYjeqcQ0DVrgKmLBpjWc9cQCVhGVgAK4AimgixdQ%2BTBzg3LqUu0YnQJg23MOC06xU4WgUWYhdUnTgIYP1j7fBQ5CBCxDfI1u8sd0tEVErA%2FdJ6fZiUBwzB%2BsnYhe%2B8ttiuCwalTBGse1DkAtFLKg4gztaXj64ZwJlditiEiyMbaBpfHEb8AnwoXSCH2zDzsdW%2BBjqkAZlThXdcEmZuxnbwHciYl%2BFJGbzaJU69c89%2B3b2jW5wcZ1prWkC1Fm9XsEGosUr6F4O8FrBvJDzI7YqdGWbgEoYz%2BWp%2FovPs3lHUzcSEVg0RJQuEjBSBvEyCBDvft6eLTQv58I8vnLErWJlUe7p0%2FFbJvVC%2FYziUqALC8BA6wetPxmfoxOI8I%2FhfFe54jtZKlhI%2Frt4NwRoSLpO%2B678z%2BPDMEwdv&X-Amz-Signature=b643fdd21064ca3b3847a736e6fd0e84e340a74969143443d25af85f22d375e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKF3BQUT%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC47woxai3hFmLLvpPhMlgZPfQEPMzbZsTlisQzHreBdAIhAM%2FrkXwZoHnXB085ckee1RNwwH%2FLzwF%2FYUv%2F1cUEJv6zKv8DCBQQABoMNjM3NDIzMTgzODA1Igw44KdIkq2Ov3%2F3l8Qq3APSHFZ8YBWiQUosXAZJFA%2BAJ4WwLl3lxTEp%2FF1ZQn7uz0IKGOOuYJDhGB7M8Vu3cxhXAk9Zehi3OIPM6CsEYp6x6F0Qg%2FpxcSyjuoz%2FPLOIdL9ds6KqjhhzmY%2BgkZk5lcr5T8RUP%2BtASmbjWN2EUizASJ%2F7y1x8q5B3iRf6AlV1BZR3yxzgYT6LmpwKD6s4haO3SgLiqnpenDSIfD29HeYdrct%2FtlhJvCEjE%2B5poPSrc%2BuM5LAXdpJXjKWmvptBXvRtEUdwBby5oFeU1fflJphjhxCesxIihYADx90QLXN3glpejDq7bx2NgmdB7fzexK%2FLEN74EQzxkwlkOLtW57MS6XETL0c3DmkPoXyJt7xzIpNwOPGcEvnCa7K6OtnqO6qJky1mpx7cQESm87w2JO1UnCRBx7p%2FAx0zjjMCS6ebmWI64ew7O%2BwYqyzKnhOY2oOYjeqcQ0DVrgKmLBpjWc9cQCVhGVgAK4AimgixdQ%2BTBzg3LqUu0YnQJg23MOC06xU4WgUWYhdUnTgIYP1j7fBQ5CBCxDfI1u8sd0tEVErA%2FdJ6fZiUBwzB%2BsnYhe%2B8ttiuCwalTBGse1DkAtFLKg4gztaXj64ZwJlditiEiyMbaBpfHEb8AnwoXSCH2zDzsdW%2BBjqkAZlThXdcEmZuxnbwHciYl%2BFJGbzaJU69c89%2B3b2jW5wcZ1prWkC1Fm9XsEGosUr6F4O8FrBvJDzI7YqdGWbgEoYz%2BWp%2FovPs3lHUzcSEVg0RJQuEjBSBvEyCBDvft6eLTQv58I8vnLErWJlUe7p0%2FFbJvVC%2FYziUqALC8BA6wetPxmfoxOI8I%2FhfFe54jtZKlhI%2Frt4NwRoSLpO%2B678z%2BPDMEwdv&X-Amz-Signature=9d3b1cb5148fbde47d67fb51e4be668bdaff760f6bd4bda56d9904619c5d5262&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKF3BQUT%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC47woxai3hFmLLvpPhMlgZPfQEPMzbZsTlisQzHreBdAIhAM%2FrkXwZoHnXB085ckee1RNwwH%2FLzwF%2FYUv%2F1cUEJv6zKv8DCBQQABoMNjM3NDIzMTgzODA1Igw44KdIkq2Ov3%2F3l8Qq3APSHFZ8YBWiQUosXAZJFA%2BAJ4WwLl3lxTEp%2FF1ZQn7uz0IKGOOuYJDhGB7M8Vu3cxhXAk9Zehi3OIPM6CsEYp6x6F0Qg%2FpxcSyjuoz%2FPLOIdL9ds6KqjhhzmY%2BgkZk5lcr5T8RUP%2BtASmbjWN2EUizASJ%2F7y1x8q5B3iRf6AlV1BZR3yxzgYT6LmpwKD6s4haO3SgLiqnpenDSIfD29HeYdrct%2FtlhJvCEjE%2B5poPSrc%2BuM5LAXdpJXjKWmvptBXvRtEUdwBby5oFeU1fflJphjhxCesxIihYADx90QLXN3glpejDq7bx2NgmdB7fzexK%2FLEN74EQzxkwlkOLtW57MS6XETL0c3DmkPoXyJt7xzIpNwOPGcEvnCa7K6OtnqO6qJky1mpx7cQESm87w2JO1UnCRBx7p%2FAx0zjjMCS6ebmWI64ew7O%2BwYqyzKnhOY2oOYjeqcQ0DVrgKmLBpjWc9cQCVhGVgAK4AimgixdQ%2BTBzg3LqUu0YnQJg23MOC06xU4WgUWYhdUnTgIYP1j7fBQ5CBCxDfI1u8sd0tEVErA%2FdJ6fZiUBwzB%2BsnYhe%2B8ttiuCwalTBGse1DkAtFLKg4gztaXj64ZwJlditiEiyMbaBpfHEb8AnwoXSCH2zDzsdW%2BBjqkAZlThXdcEmZuxnbwHciYl%2BFJGbzaJU69c89%2B3b2jW5wcZ1prWkC1Fm9XsEGosUr6F4O8FrBvJDzI7YqdGWbgEoYz%2BWp%2FovPs3lHUzcSEVg0RJQuEjBSBvEyCBDvft6eLTQv58I8vnLErWJlUe7p0%2FFbJvVC%2FYziUqALC8BA6wetPxmfoxOI8I%2FhfFe54jtZKlhI%2Frt4NwRoSLpO%2B678z%2BPDMEwdv&X-Amz-Signature=5ea8a96fd139c448d980789ee1e063b22e8e67dbdca79abc2c0910214bb8caa0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKF3BQUT%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC47woxai3hFmLLvpPhMlgZPfQEPMzbZsTlisQzHreBdAIhAM%2FrkXwZoHnXB085ckee1RNwwH%2FLzwF%2FYUv%2F1cUEJv6zKv8DCBQQABoMNjM3NDIzMTgzODA1Igw44KdIkq2Ov3%2F3l8Qq3APSHFZ8YBWiQUosXAZJFA%2BAJ4WwLl3lxTEp%2FF1ZQn7uz0IKGOOuYJDhGB7M8Vu3cxhXAk9Zehi3OIPM6CsEYp6x6F0Qg%2FpxcSyjuoz%2FPLOIdL9ds6KqjhhzmY%2BgkZk5lcr5T8RUP%2BtASmbjWN2EUizASJ%2F7y1x8q5B3iRf6AlV1BZR3yxzgYT6LmpwKD6s4haO3SgLiqnpenDSIfD29HeYdrct%2FtlhJvCEjE%2B5poPSrc%2BuM5LAXdpJXjKWmvptBXvRtEUdwBby5oFeU1fflJphjhxCesxIihYADx90QLXN3glpejDq7bx2NgmdB7fzexK%2FLEN74EQzxkwlkOLtW57MS6XETL0c3DmkPoXyJt7xzIpNwOPGcEvnCa7K6OtnqO6qJky1mpx7cQESm87w2JO1UnCRBx7p%2FAx0zjjMCS6ebmWI64ew7O%2BwYqyzKnhOY2oOYjeqcQ0DVrgKmLBpjWc9cQCVhGVgAK4AimgixdQ%2BTBzg3LqUu0YnQJg23MOC06xU4WgUWYhdUnTgIYP1j7fBQ5CBCxDfI1u8sd0tEVErA%2FdJ6fZiUBwzB%2BsnYhe%2B8ttiuCwalTBGse1DkAtFLKg4gztaXj64ZwJlditiEiyMbaBpfHEb8AnwoXSCH2zDzsdW%2BBjqkAZlThXdcEmZuxnbwHciYl%2BFJGbzaJU69c89%2B3b2jW5wcZ1prWkC1Fm9XsEGosUr6F4O8FrBvJDzI7YqdGWbgEoYz%2BWp%2FovPs3lHUzcSEVg0RJQuEjBSBvEyCBDvft6eLTQv58I8vnLErWJlUe7p0%2FFbJvVC%2FYziUqALC8BA6wetPxmfoxOI8I%2FhfFe54jtZKlhI%2Frt4NwRoSLpO%2B678z%2BPDMEwdv&X-Amz-Signature=b287b5d5596b3fd8ecba0daad98a0ea68e619bb3073e718c4f6fac6e433319b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKF3BQUT%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC47woxai3hFmLLvpPhMlgZPfQEPMzbZsTlisQzHreBdAIhAM%2FrkXwZoHnXB085ckee1RNwwH%2FLzwF%2FYUv%2F1cUEJv6zKv8DCBQQABoMNjM3NDIzMTgzODA1Igw44KdIkq2Ov3%2F3l8Qq3APSHFZ8YBWiQUosXAZJFA%2BAJ4WwLl3lxTEp%2FF1ZQn7uz0IKGOOuYJDhGB7M8Vu3cxhXAk9Zehi3OIPM6CsEYp6x6F0Qg%2FpxcSyjuoz%2FPLOIdL9ds6KqjhhzmY%2BgkZk5lcr5T8RUP%2BtASmbjWN2EUizASJ%2F7y1x8q5B3iRf6AlV1BZR3yxzgYT6LmpwKD6s4haO3SgLiqnpenDSIfD29HeYdrct%2FtlhJvCEjE%2B5poPSrc%2BuM5LAXdpJXjKWmvptBXvRtEUdwBby5oFeU1fflJphjhxCesxIihYADx90QLXN3glpejDq7bx2NgmdB7fzexK%2FLEN74EQzxkwlkOLtW57MS6XETL0c3DmkPoXyJt7xzIpNwOPGcEvnCa7K6OtnqO6qJky1mpx7cQESm87w2JO1UnCRBx7p%2FAx0zjjMCS6ebmWI64ew7O%2BwYqyzKnhOY2oOYjeqcQ0DVrgKmLBpjWc9cQCVhGVgAK4AimgixdQ%2BTBzg3LqUu0YnQJg23MOC06xU4WgUWYhdUnTgIYP1j7fBQ5CBCxDfI1u8sd0tEVErA%2FdJ6fZiUBwzB%2BsnYhe%2B8ttiuCwalTBGse1DkAtFLKg4gztaXj64ZwJlditiEiyMbaBpfHEb8AnwoXSCH2zDzsdW%2BBjqkAZlThXdcEmZuxnbwHciYl%2BFJGbzaJU69c89%2B3b2jW5wcZ1prWkC1Fm9XsEGosUr6F4O8FrBvJDzI7YqdGWbgEoYz%2BWp%2FovPs3lHUzcSEVg0RJQuEjBSBvEyCBDvft6eLTQv58I8vnLErWJlUe7p0%2FFbJvVC%2FYziUqALC8BA6wetPxmfoxOI8I%2FhfFe54jtZKlhI%2Frt4NwRoSLpO%2B678z%2BPDMEwdv&X-Amz-Signature=dbc9a4eabfa5a9eefea158f52b6080f2e598954b237f350d614b20bf0181febe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKF3BQUT%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC47woxai3hFmLLvpPhMlgZPfQEPMzbZsTlisQzHreBdAIhAM%2FrkXwZoHnXB085ckee1RNwwH%2FLzwF%2FYUv%2F1cUEJv6zKv8DCBQQABoMNjM3NDIzMTgzODA1Igw44KdIkq2Ov3%2F3l8Qq3APSHFZ8YBWiQUosXAZJFA%2BAJ4WwLl3lxTEp%2FF1ZQn7uz0IKGOOuYJDhGB7M8Vu3cxhXAk9Zehi3OIPM6CsEYp6x6F0Qg%2FpxcSyjuoz%2FPLOIdL9ds6KqjhhzmY%2BgkZk5lcr5T8RUP%2BtASmbjWN2EUizASJ%2F7y1x8q5B3iRf6AlV1BZR3yxzgYT6LmpwKD6s4haO3SgLiqnpenDSIfD29HeYdrct%2FtlhJvCEjE%2B5poPSrc%2BuM5LAXdpJXjKWmvptBXvRtEUdwBby5oFeU1fflJphjhxCesxIihYADx90QLXN3glpejDq7bx2NgmdB7fzexK%2FLEN74EQzxkwlkOLtW57MS6XETL0c3DmkPoXyJt7xzIpNwOPGcEvnCa7K6OtnqO6qJky1mpx7cQESm87w2JO1UnCRBx7p%2FAx0zjjMCS6ebmWI64ew7O%2BwYqyzKnhOY2oOYjeqcQ0DVrgKmLBpjWc9cQCVhGVgAK4AimgixdQ%2BTBzg3LqUu0YnQJg23MOC06xU4WgUWYhdUnTgIYP1j7fBQ5CBCxDfI1u8sd0tEVErA%2FdJ6fZiUBwzB%2BsnYhe%2B8ttiuCwalTBGse1DkAtFLKg4gztaXj64ZwJlditiEiyMbaBpfHEb8AnwoXSCH2zDzsdW%2BBjqkAZlThXdcEmZuxnbwHciYl%2BFJGbzaJU69c89%2B3b2jW5wcZ1prWkC1Fm9XsEGosUr6F4O8FrBvJDzI7YqdGWbgEoYz%2BWp%2FovPs3lHUzcSEVg0RJQuEjBSBvEyCBDvft6eLTQv58I8vnLErWJlUe7p0%2FFbJvVC%2FYziUqALC8BA6wetPxmfoxOI8I%2FhfFe54jtZKlhI%2Frt4NwRoSLpO%2B678z%2BPDMEwdv&X-Amz-Signature=a6d662159fc084d5e824d0d312cc1265f6b8dd93a99386143c0d2b594b774654&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKF3BQUT%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC47woxai3hFmLLvpPhMlgZPfQEPMzbZsTlisQzHreBdAIhAM%2FrkXwZoHnXB085ckee1RNwwH%2FLzwF%2FYUv%2F1cUEJv6zKv8DCBQQABoMNjM3NDIzMTgzODA1Igw44KdIkq2Ov3%2F3l8Qq3APSHFZ8YBWiQUosXAZJFA%2BAJ4WwLl3lxTEp%2FF1ZQn7uz0IKGOOuYJDhGB7M8Vu3cxhXAk9Zehi3OIPM6CsEYp6x6F0Qg%2FpxcSyjuoz%2FPLOIdL9ds6KqjhhzmY%2BgkZk5lcr5T8RUP%2BtASmbjWN2EUizASJ%2F7y1x8q5B3iRf6AlV1BZR3yxzgYT6LmpwKD6s4haO3SgLiqnpenDSIfD29HeYdrct%2FtlhJvCEjE%2B5poPSrc%2BuM5LAXdpJXjKWmvptBXvRtEUdwBby5oFeU1fflJphjhxCesxIihYADx90QLXN3glpejDq7bx2NgmdB7fzexK%2FLEN74EQzxkwlkOLtW57MS6XETL0c3DmkPoXyJt7xzIpNwOPGcEvnCa7K6OtnqO6qJky1mpx7cQESm87w2JO1UnCRBx7p%2FAx0zjjMCS6ebmWI64ew7O%2BwYqyzKnhOY2oOYjeqcQ0DVrgKmLBpjWc9cQCVhGVgAK4AimgixdQ%2BTBzg3LqUu0YnQJg23MOC06xU4WgUWYhdUnTgIYP1j7fBQ5CBCxDfI1u8sd0tEVErA%2FdJ6fZiUBwzB%2BsnYhe%2B8ttiuCwalTBGse1DkAtFLKg4gztaXj64ZwJlditiEiyMbaBpfHEb8AnwoXSCH2zDzsdW%2BBjqkAZlThXdcEmZuxnbwHciYl%2BFJGbzaJU69c89%2B3b2jW5wcZ1prWkC1Fm9XsEGosUr6F4O8FrBvJDzI7YqdGWbgEoYz%2BWp%2FovPs3lHUzcSEVg0RJQuEjBSBvEyCBDvft6eLTQv58I8vnLErWJlUe7p0%2FFbJvVC%2FYziUqALC8BA6wetPxmfoxOI8I%2FhfFe54jtZKlhI%2Frt4NwRoSLpO%2B678z%2BPDMEwdv&X-Amz-Signature=8ba63a8759875734a74621e0a0a00be308ed68c5d95ef996bd7c88e65f09725f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKF3BQUT%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC47woxai3hFmLLvpPhMlgZPfQEPMzbZsTlisQzHreBdAIhAM%2FrkXwZoHnXB085ckee1RNwwH%2FLzwF%2FYUv%2F1cUEJv6zKv8DCBQQABoMNjM3NDIzMTgzODA1Igw44KdIkq2Ov3%2F3l8Qq3APSHFZ8YBWiQUosXAZJFA%2BAJ4WwLl3lxTEp%2FF1ZQn7uz0IKGOOuYJDhGB7M8Vu3cxhXAk9Zehi3OIPM6CsEYp6x6F0Qg%2FpxcSyjuoz%2FPLOIdL9ds6KqjhhzmY%2BgkZk5lcr5T8RUP%2BtASmbjWN2EUizASJ%2F7y1x8q5B3iRf6AlV1BZR3yxzgYT6LmpwKD6s4haO3SgLiqnpenDSIfD29HeYdrct%2FtlhJvCEjE%2B5poPSrc%2BuM5LAXdpJXjKWmvptBXvRtEUdwBby5oFeU1fflJphjhxCesxIihYADx90QLXN3glpejDq7bx2NgmdB7fzexK%2FLEN74EQzxkwlkOLtW57MS6XETL0c3DmkPoXyJt7xzIpNwOPGcEvnCa7K6OtnqO6qJky1mpx7cQESm87w2JO1UnCRBx7p%2FAx0zjjMCS6ebmWI64ew7O%2BwYqyzKnhOY2oOYjeqcQ0DVrgKmLBpjWc9cQCVhGVgAK4AimgixdQ%2BTBzg3LqUu0YnQJg23MOC06xU4WgUWYhdUnTgIYP1j7fBQ5CBCxDfI1u8sd0tEVErA%2FdJ6fZiUBwzB%2BsnYhe%2B8ttiuCwalTBGse1DkAtFLKg4gztaXj64ZwJlditiEiyMbaBpfHEb8AnwoXSCH2zDzsdW%2BBjqkAZlThXdcEmZuxnbwHciYl%2BFJGbzaJU69c89%2B3b2jW5wcZ1prWkC1Fm9XsEGosUr6F4O8FrBvJDzI7YqdGWbgEoYz%2BWp%2FovPs3lHUzcSEVg0RJQuEjBSBvEyCBDvft6eLTQv58I8vnLErWJlUe7p0%2FFbJvVC%2FYziUqALC8BA6wetPxmfoxOI8I%2FhfFe54jtZKlhI%2Frt4NwRoSLpO%2B678z%2BPDMEwdv&X-Amz-Signature=15a7bada5416607dc06a16243fb30e539b7041338c62a176649bb9250cf1fe01&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
