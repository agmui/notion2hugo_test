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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDADS64K%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCkyj8f9s7ok731KDA1dmku0lZVgRZP%2BQKq5Mpt9F%2B66wIhAMXuTgVaOg%2Ben0qg%2B3AUFPJHYSeFHIwIfV7DIdQ8rVISKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDPbTtjAxJP7rZRu4q3APiMfBe2fCjjfyeSnhce7dofUXSwOZmEP3kz%2Bp6tPMpRYNXv%2FFa%2FFwDxglHqa0pvofglEDS6Q%2BsILdSCbiWbBXpzrW3YUGNEqtTkx086GGeWFeIq8M2GFhk7ZbDJPMN%2F7nur8leZDdeSZjPdsdMcKpd7ORsMWm9DiNf0PyzdAeDmQ2Hp02jDmGb%2FZeVvUAQ4xPPSGEzU%2F66BXS08t2st0g5N4Sk4P8wqovFYC0EIn64cWdrxTRQ87Qle6rGXsvXHpgFRfOaif6Tp8M4G48EQKiEG%2BcFq4heCZommXcW%2BfEgFDj3ibtjwCwBNSXQbTa5FRUjLFEeRl2y64%2FXMlRr75G%2FIcwrSrurN4frn2viGjIQrPKP1CKNKeiu8RjsHpaYGelGlOb%2Bei20pFkOcY15fbcsDhl5F7txUemG4E5FRaynMlwJgtL3Z7SEeqeMgtZOzZj6eKx5Q3P80gWjynSfQGUUNFMQxbPFlthW69HG%2FYJTEqoj32K4BEKjEyGwyDC8GGZ%2FVNRNtJRIbo4Cwgn%2BpxIBZpnHbOM3gotMWfEFrpwz%2Bu%2Fy%2BL8bn4YVGyeqftPQb6webl4VU%2Fr%2Fk62O%2BYDxzvcDSBdatDNCtYAY24qZwO%2Bj1Yr9Gknix6%2BybA2hzzCktvy%2BBjqkAYHX2LGJQMyMc1PR6SFs8iIdmrQIZCN4%2FoM0OMTLs%2FxuNk%2BpMjx7AK5u9ds%2B5QxXQL9X1T6o2Q2PNO3ocuAJJf%2BfyW32eI2TPgxmdcMXjaixHU%2BjdxSGGgr2Rx26sAhlAV6Mcfy4q%2BgbXVtUH6Fqsl09TCwyIYS1zgGFyjaFfiZ79HtjSpOtKZgnIxqsuxfehpOEHQaIal8bii%2BgeSdhMn13l36%2B&X-Amz-Signature=bff271ba39888ebd55fb50f664bdc5c63018cfe734dedbb3a23d7ebe37e25d30&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDADS64K%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCkyj8f9s7ok731KDA1dmku0lZVgRZP%2BQKq5Mpt9F%2B66wIhAMXuTgVaOg%2Ben0qg%2B3AUFPJHYSeFHIwIfV7DIdQ8rVISKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDPbTtjAxJP7rZRu4q3APiMfBe2fCjjfyeSnhce7dofUXSwOZmEP3kz%2Bp6tPMpRYNXv%2FFa%2FFwDxglHqa0pvofglEDS6Q%2BsILdSCbiWbBXpzrW3YUGNEqtTkx086GGeWFeIq8M2GFhk7ZbDJPMN%2F7nur8leZDdeSZjPdsdMcKpd7ORsMWm9DiNf0PyzdAeDmQ2Hp02jDmGb%2FZeVvUAQ4xPPSGEzU%2F66BXS08t2st0g5N4Sk4P8wqovFYC0EIn64cWdrxTRQ87Qle6rGXsvXHpgFRfOaif6Tp8M4G48EQKiEG%2BcFq4heCZommXcW%2BfEgFDj3ibtjwCwBNSXQbTa5FRUjLFEeRl2y64%2FXMlRr75G%2FIcwrSrurN4frn2viGjIQrPKP1CKNKeiu8RjsHpaYGelGlOb%2Bei20pFkOcY15fbcsDhl5F7txUemG4E5FRaynMlwJgtL3Z7SEeqeMgtZOzZj6eKx5Q3P80gWjynSfQGUUNFMQxbPFlthW69HG%2FYJTEqoj32K4BEKjEyGwyDC8GGZ%2FVNRNtJRIbo4Cwgn%2BpxIBZpnHbOM3gotMWfEFrpwz%2Bu%2Fy%2BL8bn4YVGyeqftPQb6webl4VU%2Fr%2Fk62O%2BYDxzvcDSBdatDNCtYAY24qZwO%2Bj1Yr9Gknix6%2BybA2hzzCktvy%2BBjqkAYHX2LGJQMyMc1PR6SFs8iIdmrQIZCN4%2FoM0OMTLs%2FxuNk%2BpMjx7AK5u9ds%2B5QxXQL9X1T6o2Q2PNO3ocuAJJf%2BfyW32eI2TPgxmdcMXjaixHU%2BjdxSGGgr2Rx26sAhlAV6Mcfy4q%2BgbXVtUH6Fqsl09TCwyIYS1zgGFyjaFfiZ79HtjSpOtKZgnIxqsuxfehpOEHQaIal8bii%2BgeSdhMn13l36%2B&X-Amz-Signature=e021599eb70ab2e4d6c6c1e0f034da70ae45d8c79f60d38aabefef5f5fd6288d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDADS64K%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCkyj8f9s7ok731KDA1dmku0lZVgRZP%2BQKq5Mpt9F%2B66wIhAMXuTgVaOg%2Ben0qg%2B3AUFPJHYSeFHIwIfV7DIdQ8rVISKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDPbTtjAxJP7rZRu4q3APiMfBe2fCjjfyeSnhce7dofUXSwOZmEP3kz%2Bp6tPMpRYNXv%2FFa%2FFwDxglHqa0pvofglEDS6Q%2BsILdSCbiWbBXpzrW3YUGNEqtTkx086GGeWFeIq8M2GFhk7ZbDJPMN%2F7nur8leZDdeSZjPdsdMcKpd7ORsMWm9DiNf0PyzdAeDmQ2Hp02jDmGb%2FZeVvUAQ4xPPSGEzU%2F66BXS08t2st0g5N4Sk4P8wqovFYC0EIn64cWdrxTRQ87Qle6rGXsvXHpgFRfOaif6Tp8M4G48EQKiEG%2BcFq4heCZommXcW%2BfEgFDj3ibtjwCwBNSXQbTa5FRUjLFEeRl2y64%2FXMlRr75G%2FIcwrSrurN4frn2viGjIQrPKP1CKNKeiu8RjsHpaYGelGlOb%2Bei20pFkOcY15fbcsDhl5F7txUemG4E5FRaynMlwJgtL3Z7SEeqeMgtZOzZj6eKx5Q3P80gWjynSfQGUUNFMQxbPFlthW69HG%2FYJTEqoj32K4BEKjEyGwyDC8GGZ%2FVNRNtJRIbo4Cwgn%2BpxIBZpnHbOM3gotMWfEFrpwz%2Bu%2Fy%2BL8bn4YVGyeqftPQb6webl4VU%2Fr%2Fk62O%2BYDxzvcDSBdatDNCtYAY24qZwO%2Bj1Yr9Gknix6%2BybA2hzzCktvy%2BBjqkAYHX2LGJQMyMc1PR6SFs8iIdmrQIZCN4%2FoM0OMTLs%2FxuNk%2BpMjx7AK5u9ds%2B5QxXQL9X1T6o2Q2PNO3ocuAJJf%2BfyW32eI2TPgxmdcMXjaixHU%2BjdxSGGgr2Rx26sAhlAV6Mcfy4q%2BgbXVtUH6Fqsl09TCwyIYS1zgGFyjaFfiZ79HtjSpOtKZgnIxqsuxfehpOEHQaIal8bii%2BgeSdhMn13l36%2B&X-Amz-Signature=6785f70040f56879d897f3d7f5378263e12b758fd276a78a7485337d590cb430&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDADS64K%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCkyj8f9s7ok731KDA1dmku0lZVgRZP%2BQKq5Mpt9F%2B66wIhAMXuTgVaOg%2Ben0qg%2B3AUFPJHYSeFHIwIfV7DIdQ8rVISKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDPbTtjAxJP7rZRu4q3APiMfBe2fCjjfyeSnhce7dofUXSwOZmEP3kz%2Bp6tPMpRYNXv%2FFa%2FFwDxglHqa0pvofglEDS6Q%2BsILdSCbiWbBXpzrW3YUGNEqtTkx086GGeWFeIq8M2GFhk7ZbDJPMN%2F7nur8leZDdeSZjPdsdMcKpd7ORsMWm9DiNf0PyzdAeDmQ2Hp02jDmGb%2FZeVvUAQ4xPPSGEzU%2F66BXS08t2st0g5N4Sk4P8wqovFYC0EIn64cWdrxTRQ87Qle6rGXsvXHpgFRfOaif6Tp8M4G48EQKiEG%2BcFq4heCZommXcW%2BfEgFDj3ibtjwCwBNSXQbTa5FRUjLFEeRl2y64%2FXMlRr75G%2FIcwrSrurN4frn2viGjIQrPKP1CKNKeiu8RjsHpaYGelGlOb%2Bei20pFkOcY15fbcsDhl5F7txUemG4E5FRaynMlwJgtL3Z7SEeqeMgtZOzZj6eKx5Q3P80gWjynSfQGUUNFMQxbPFlthW69HG%2FYJTEqoj32K4BEKjEyGwyDC8GGZ%2FVNRNtJRIbo4Cwgn%2BpxIBZpnHbOM3gotMWfEFrpwz%2Bu%2Fy%2BL8bn4YVGyeqftPQb6webl4VU%2Fr%2Fk62O%2BYDxzvcDSBdatDNCtYAY24qZwO%2Bj1Yr9Gknix6%2BybA2hzzCktvy%2BBjqkAYHX2LGJQMyMc1PR6SFs8iIdmrQIZCN4%2FoM0OMTLs%2FxuNk%2BpMjx7AK5u9ds%2B5QxXQL9X1T6o2Q2PNO3ocuAJJf%2BfyW32eI2TPgxmdcMXjaixHU%2BjdxSGGgr2Rx26sAhlAV6Mcfy4q%2BgbXVtUH6Fqsl09TCwyIYS1zgGFyjaFfiZ79HtjSpOtKZgnIxqsuxfehpOEHQaIal8bii%2BgeSdhMn13l36%2B&X-Amz-Signature=655806189c1b9d4bd59b69f343877c07d0c2da650b716cc344116187c325bdd6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDADS64K%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCkyj8f9s7ok731KDA1dmku0lZVgRZP%2BQKq5Mpt9F%2B66wIhAMXuTgVaOg%2Ben0qg%2B3AUFPJHYSeFHIwIfV7DIdQ8rVISKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDPbTtjAxJP7rZRu4q3APiMfBe2fCjjfyeSnhce7dofUXSwOZmEP3kz%2Bp6tPMpRYNXv%2FFa%2FFwDxglHqa0pvofglEDS6Q%2BsILdSCbiWbBXpzrW3YUGNEqtTkx086GGeWFeIq8M2GFhk7ZbDJPMN%2F7nur8leZDdeSZjPdsdMcKpd7ORsMWm9DiNf0PyzdAeDmQ2Hp02jDmGb%2FZeVvUAQ4xPPSGEzU%2F66BXS08t2st0g5N4Sk4P8wqovFYC0EIn64cWdrxTRQ87Qle6rGXsvXHpgFRfOaif6Tp8M4G48EQKiEG%2BcFq4heCZommXcW%2BfEgFDj3ibtjwCwBNSXQbTa5FRUjLFEeRl2y64%2FXMlRr75G%2FIcwrSrurN4frn2viGjIQrPKP1CKNKeiu8RjsHpaYGelGlOb%2Bei20pFkOcY15fbcsDhl5F7txUemG4E5FRaynMlwJgtL3Z7SEeqeMgtZOzZj6eKx5Q3P80gWjynSfQGUUNFMQxbPFlthW69HG%2FYJTEqoj32K4BEKjEyGwyDC8GGZ%2FVNRNtJRIbo4Cwgn%2BpxIBZpnHbOM3gotMWfEFrpwz%2Bu%2Fy%2BL8bn4YVGyeqftPQb6webl4VU%2Fr%2Fk62O%2BYDxzvcDSBdatDNCtYAY24qZwO%2Bj1Yr9Gknix6%2BybA2hzzCktvy%2BBjqkAYHX2LGJQMyMc1PR6SFs8iIdmrQIZCN4%2FoM0OMTLs%2FxuNk%2BpMjx7AK5u9ds%2B5QxXQL9X1T6o2Q2PNO3ocuAJJf%2BfyW32eI2TPgxmdcMXjaixHU%2BjdxSGGgr2Rx26sAhlAV6Mcfy4q%2BgbXVtUH6Fqsl09TCwyIYS1zgGFyjaFfiZ79HtjSpOtKZgnIxqsuxfehpOEHQaIal8bii%2BgeSdhMn13l36%2B&X-Amz-Signature=41725e4af34c59ef5f7062495603e9cd72de95922a65be3f5850d079c3ac7884&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDADS64K%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCkyj8f9s7ok731KDA1dmku0lZVgRZP%2BQKq5Mpt9F%2B66wIhAMXuTgVaOg%2Ben0qg%2B3AUFPJHYSeFHIwIfV7DIdQ8rVISKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDPbTtjAxJP7rZRu4q3APiMfBe2fCjjfyeSnhce7dofUXSwOZmEP3kz%2Bp6tPMpRYNXv%2FFa%2FFwDxglHqa0pvofglEDS6Q%2BsILdSCbiWbBXpzrW3YUGNEqtTkx086GGeWFeIq8M2GFhk7ZbDJPMN%2F7nur8leZDdeSZjPdsdMcKpd7ORsMWm9DiNf0PyzdAeDmQ2Hp02jDmGb%2FZeVvUAQ4xPPSGEzU%2F66BXS08t2st0g5N4Sk4P8wqovFYC0EIn64cWdrxTRQ87Qle6rGXsvXHpgFRfOaif6Tp8M4G48EQKiEG%2BcFq4heCZommXcW%2BfEgFDj3ibtjwCwBNSXQbTa5FRUjLFEeRl2y64%2FXMlRr75G%2FIcwrSrurN4frn2viGjIQrPKP1CKNKeiu8RjsHpaYGelGlOb%2Bei20pFkOcY15fbcsDhl5F7txUemG4E5FRaynMlwJgtL3Z7SEeqeMgtZOzZj6eKx5Q3P80gWjynSfQGUUNFMQxbPFlthW69HG%2FYJTEqoj32K4BEKjEyGwyDC8GGZ%2FVNRNtJRIbo4Cwgn%2BpxIBZpnHbOM3gotMWfEFrpwz%2Bu%2Fy%2BL8bn4YVGyeqftPQb6webl4VU%2Fr%2Fk62O%2BYDxzvcDSBdatDNCtYAY24qZwO%2Bj1Yr9Gknix6%2BybA2hzzCktvy%2BBjqkAYHX2LGJQMyMc1PR6SFs8iIdmrQIZCN4%2FoM0OMTLs%2FxuNk%2BpMjx7AK5u9ds%2B5QxXQL9X1T6o2Q2PNO3ocuAJJf%2BfyW32eI2TPgxmdcMXjaixHU%2BjdxSGGgr2Rx26sAhlAV6Mcfy4q%2BgbXVtUH6Fqsl09TCwyIYS1zgGFyjaFfiZ79HtjSpOtKZgnIxqsuxfehpOEHQaIal8bii%2BgeSdhMn13l36%2B&X-Amz-Signature=572dff14449c34905f015e7de8018b4ae80560a4d6f1ee6ceb44fba61690b94c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDADS64K%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCkyj8f9s7ok731KDA1dmku0lZVgRZP%2BQKq5Mpt9F%2B66wIhAMXuTgVaOg%2Ben0qg%2B3AUFPJHYSeFHIwIfV7DIdQ8rVISKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDPbTtjAxJP7rZRu4q3APiMfBe2fCjjfyeSnhce7dofUXSwOZmEP3kz%2Bp6tPMpRYNXv%2FFa%2FFwDxglHqa0pvofglEDS6Q%2BsILdSCbiWbBXpzrW3YUGNEqtTkx086GGeWFeIq8M2GFhk7ZbDJPMN%2F7nur8leZDdeSZjPdsdMcKpd7ORsMWm9DiNf0PyzdAeDmQ2Hp02jDmGb%2FZeVvUAQ4xPPSGEzU%2F66BXS08t2st0g5N4Sk4P8wqovFYC0EIn64cWdrxTRQ87Qle6rGXsvXHpgFRfOaif6Tp8M4G48EQKiEG%2BcFq4heCZommXcW%2BfEgFDj3ibtjwCwBNSXQbTa5FRUjLFEeRl2y64%2FXMlRr75G%2FIcwrSrurN4frn2viGjIQrPKP1CKNKeiu8RjsHpaYGelGlOb%2Bei20pFkOcY15fbcsDhl5F7txUemG4E5FRaynMlwJgtL3Z7SEeqeMgtZOzZj6eKx5Q3P80gWjynSfQGUUNFMQxbPFlthW69HG%2FYJTEqoj32K4BEKjEyGwyDC8GGZ%2FVNRNtJRIbo4Cwgn%2BpxIBZpnHbOM3gotMWfEFrpwz%2Bu%2Fy%2BL8bn4YVGyeqftPQb6webl4VU%2Fr%2Fk62O%2BYDxzvcDSBdatDNCtYAY24qZwO%2Bj1Yr9Gknix6%2BybA2hzzCktvy%2BBjqkAYHX2LGJQMyMc1PR6SFs8iIdmrQIZCN4%2FoM0OMTLs%2FxuNk%2BpMjx7AK5u9ds%2B5QxXQL9X1T6o2Q2PNO3ocuAJJf%2BfyW32eI2TPgxmdcMXjaixHU%2BjdxSGGgr2Rx26sAhlAV6Mcfy4q%2BgbXVtUH6Fqsl09TCwyIYS1zgGFyjaFfiZ79HtjSpOtKZgnIxqsuxfehpOEHQaIal8bii%2BgeSdhMn13l36%2B&X-Amz-Signature=c6126d16ca2a1a473d846bb495be2c33fe60b25e541e48ee58e7fd7456c43310&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDADS64K%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCkyj8f9s7ok731KDA1dmku0lZVgRZP%2BQKq5Mpt9F%2B66wIhAMXuTgVaOg%2Ben0qg%2B3AUFPJHYSeFHIwIfV7DIdQ8rVISKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDPbTtjAxJP7rZRu4q3APiMfBe2fCjjfyeSnhce7dofUXSwOZmEP3kz%2Bp6tPMpRYNXv%2FFa%2FFwDxglHqa0pvofglEDS6Q%2BsILdSCbiWbBXpzrW3YUGNEqtTkx086GGeWFeIq8M2GFhk7ZbDJPMN%2F7nur8leZDdeSZjPdsdMcKpd7ORsMWm9DiNf0PyzdAeDmQ2Hp02jDmGb%2FZeVvUAQ4xPPSGEzU%2F66BXS08t2st0g5N4Sk4P8wqovFYC0EIn64cWdrxTRQ87Qle6rGXsvXHpgFRfOaif6Tp8M4G48EQKiEG%2BcFq4heCZommXcW%2BfEgFDj3ibtjwCwBNSXQbTa5FRUjLFEeRl2y64%2FXMlRr75G%2FIcwrSrurN4frn2viGjIQrPKP1CKNKeiu8RjsHpaYGelGlOb%2Bei20pFkOcY15fbcsDhl5F7txUemG4E5FRaynMlwJgtL3Z7SEeqeMgtZOzZj6eKx5Q3P80gWjynSfQGUUNFMQxbPFlthW69HG%2FYJTEqoj32K4BEKjEyGwyDC8GGZ%2FVNRNtJRIbo4Cwgn%2BpxIBZpnHbOM3gotMWfEFrpwz%2Bu%2Fy%2BL8bn4YVGyeqftPQb6webl4VU%2Fr%2Fk62O%2BYDxzvcDSBdatDNCtYAY24qZwO%2Bj1Yr9Gknix6%2BybA2hzzCktvy%2BBjqkAYHX2LGJQMyMc1PR6SFs8iIdmrQIZCN4%2FoM0OMTLs%2FxuNk%2BpMjx7AK5u9ds%2B5QxXQL9X1T6o2Q2PNO3ocuAJJf%2BfyW32eI2TPgxmdcMXjaixHU%2BjdxSGGgr2Rx26sAhlAV6Mcfy4q%2BgbXVtUH6Fqsl09TCwyIYS1zgGFyjaFfiZ79HtjSpOtKZgnIxqsuxfehpOEHQaIal8bii%2BgeSdhMn13l36%2B&X-Amz-Signature=ed09ff895623c6a97cb4fe8b6a17f72ac9650eb04c6825f9c28327057dad00fc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
