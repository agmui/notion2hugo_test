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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUQJ2CDH%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDUwJhF3cAZXE1%2BHG6n70J2DcU9DskIYpTXbL6Lcy%2F71QIgUXAnlJrwWZDL5OXD5cneqDlewREfvrdov6CXPiV3mfcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNytRddMNI6%2Ft4OAZyrcA%2BvSuKOtfT0u5fDPFgE9RrPhmyqod15MfUQZanRGMCSTLDjDqG60Wm5b4hFUCl%2FmwdNvGAAOuXqBJgH76YHoKRHF8ghrOzwfFpvd0VECc66SH4GYAqlXCRF3lL8sJ8X2WP3CSvN8NWyh0YXlOjnfX2%2Fx9MrwlzbwWW2THTa%2BjAZnW%2BdnwkF2N99Mlds7s2UawKBN1bNtt%2FeZjLdbeBT6OCwD9pLtEcH%2BptalFFhJJD27xutwq4981WGUDD95KdCiC%2BXEM1bJpZZ5Mou%2BFsr4vFsEoL4bH0ZkuUylc3C%2F90NgyA7SwKEDwapsHocQNBxvgq%2Bf3LEXijIHCpO77Bvr2Kp2IQXgVflgpjiMLgupXTRdvmeEE6LKUQaOA1kBrs%2B69sl2N0vIu%2F6dkvlb0qWvEizrIIbJTQsFoeVrXjrQAryZktIaBcB4VULqqbCFoevbkFr5VsjRLsxlvg1vCCGlSaCY2gjY64iUn44dAeQOKR%2FYsw83LuMUczKwwFqlf6SG7hECG%2BjDedJVbeKVUpaAq6chceQhJ2nrlyUP4er31vxbtLrvv1ixIXgR5p1A2lbEbm9soTjThwUc4sFJNplue00PP7TNVJqhgEzKztbEslXmDLGTvZBxkG7x7leHMN2l%2Fb0GOqUB%2BKovm3%2Butl7HIIihOVWsE%2Bu3ShUycB05%2FPNxIWTZ8vO0VWkwtgzuYrjJMx0%2FphSPxcrsU%2FbLBZXAuxwEKeKIY5vayOPGzMQRgKysX%2F%2Fn3oetHAcl7%2FD5fk4bPx2goIw2PNXqwsItjtz5hFv2pVOASuCDUzKVddAOHEaR9Sn41gO30x2R53bfWDhaxc2fgvMFpiF7XvJU%2BZDOGsIMD%2Bd54ZDy5Utg&X-Amz-Signature=2891e01c718dc0a24fae3c34d79bccd0828690414c7930cddb15965dc20ec7cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUQJ2CDH%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDUwJhF3cAZXE1%2BHG6n70J2DcU9DskIYpTXbL6Lcy%2F71QIgUXAnlJrwWZDL5OXD5cneqDlewREfvrdov6CXPiV3mfcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNytRddMNI6%2Ft4OAZyrcA%2BvSuKOtfT0u5fDPFgE9RrPhmyqod15MfUQZanRGMCSTLDjDqG60Wm5b4hFUCl%2FmwdNvGAAOuXqBJgH76YHoKRHF8ghrOzwfFpvd0VECc66SH4GYAqlXCRF3lL8sJ8X2WP3CSvN8NWyh0YXlOjnfX2%2Fx9MrwlzbwWW2THTa%2BjAZnW%2BdnwkF2N99Mlds7s2UawKBN1bNtt%2FeZjLdbeBT6OCwD9pLtEcH%2BptalFFhJJD27xutwq4981WGUDD95KdCiC%2BXEM1bJpZZ5Mou%2BFsr4vFsEoL4bH0ZkuUylc3C%2F90NgyA7SwKEDwapsHocQNBxvgq%2Bf3LEXijIHCpO77Bvr2Kp2IQXgVflgpjiMLgupXTRdvmeEE6LKUQaOA1kBrs%2B69sl2N0vIu%2F6dkvlb0qWvEizrIIbJTQsFoeVrXjrQAryZktIaBcB4VULqqbCFoevbkFr5VsjRLsxlvg1vCCGlSaCY2gjY64iUn44dAeQOKR%2FYsw83LuMUczKwwFqlf6SG7hECG%2BjDedJVbeKVUpaAq6chceQhJ2nrlyUP4er31vxbtLrvv1ixIXgR5p1A2lbEbm9soTjThwUc4sFJNplue00PP7TNVJqhgEzKztbEslXmDLGTvZBxkG7x7leHMN2l%2Fb0GOqUB%2BKovm3%2Butl7HIIihOVWsE%2Bu3ShUycB05%2FPNxIWTZ8vO0VWkwtgzuYrjJMx0%2FphSPxcrsU%2FbLBZXAuxwEKeKIY5vayOPGzMQRgKysX%2F%2Fn3oetHAcl7%2FD5fk4bPx2goIw2PNXqwsItjtz5hFv2pVOASuCDUzKVddAOHEaR9Sn41gO30x2R53bfWDhaxc2fgvMFpiF7XvJU%2BZDOGsIMD%2Bd54ZDy5Utg&X-Amz-Signature=a889a232b1be57eaf6e8a320d642787b3b5334ea9529838be5e6b262a6211d60&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUQJ2CDH%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDUwJhF3cAZXE1%2BHG6n70J2DcU9DskIYpTXbL6Lcy%2F71QIgUXAnlJrwWZDL5OXD5cneqDlewREfvrdov6CXPiV3mfcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNytRddMNI6%2Ft4OAZyrcA%2BvSuKOtfT0u5fDPFgE9RrPhmyqod15MfUQZanRGMCSTLDjDqG60Wm5b4hFUCl%2FmwdNvGAAOuXqBJgH76YHoKRHF8ghrOzwfFpvd0VECc66SH4GYAqlXCRF3lL8sJ8X2WP3CSvN8NWyh0YXlOjnfX2%2Fx9MrwlzbwWW2THTa%2BjAZnW%2BdnwkF2N99Mlds7s2UawKBN1bNtt%2FeZjLdbeBT6OCwD9pLtEcH%2BptalFFhJJD27xutwq4981WGUDD95KdCiC%2BXEM1bJpZZ5Mou%2BFsr4vFsEoL4bH0ZkuUylc3C%2F90NgyA7SwKEDwapsHocQNBxvgq%2Bf3LEXijIHCpO77Bvr2Kp2IQXgVflgpjiMLgupXTRdvmeEE6LKUQaOA1kBrs%2B69sl2N0vIu%2F6dkvlb0qWvEizrIIbJTQsFoeVrXjrQAryZktIaBcB4VULqqbCFoevbkFr5VsjRLsxlvg1vCCGlSaCY2gjY64iUn44dAeQOKR%2FYsw83LuMUczKwwFqlf6SG7hECG%2BjDedJVbeKVUpaAq6chceQhJ2nrlyUP4er31vxbtLrvv1ixIXgR5p1A2lbEbm9soTjThwUc4sFJNplue00PP7TNVJqhgEzKztbEslXmDLGTvZBxkG7x7leHMN2l%2Fb0GOqUB%2BKovm3%2Butl7HIIihOVWsE%2Bu3ShUycB05%2FPNxIWTZ8vO0VWkwtgzuYrjJMx0%2FphSPxcrsU%2FbLBZXAuxwEKeKIY5vayOPGzMQRgKysX%2F%2Fn3oetHAcl7%2FD5fk4bPx2goIw2PNXqwsItjtz5hFv2pVOASuCDUzKVddAOHEaR9Sn41gO30x2R53bfWDhaxc2fgvMFpiF7XvJU%2BZDOGsIMD%2Bd54ZDy5Utg&X-Amz-Signature=26e80d693e8ab9fb3249c06f1900a65a54d59d7cb4f12f849348b83303c35e81&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUQJ2CDH%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDUwJhF3cAZXE1%2BHG6n70J2DcU9DskIYpTXbL6Lcy%2F71QIgUXAnlJrwWZDL5OXD5cneqDlewREfvrdov6CXPiV3mfcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNytRddMNI6%2Ft4OAZyrcA%2BvSuKOtfT0u5fDPFgE9RrPhmyqod15MfUQZanRGMCSTLDjDqG60Wm5b4hFUCl%2FmwdNvGAAOuXqBJgH76YHoKRHF8ghrOzwfFpvd0VECc66SH4GYAqlXCRF3lL8sJ8X2WP3CSvN8NWyh0YXlOjnfX2%2Fx9MrwlzbwWW2THTa%2BjAZnW%2BdnwkF2N99Mlds7s2UawKBN1bNtt%2FeZjLdbeBT6OCwD9pLtEcH%2BptalFFhJJD27xutwq4981WGUDD95KdCiC%2BXEM1bJpZZ5Mou%2BFsr4vFsEoL4bH0ZkuUylc3C%2F90NgyA7SwKEDwapsHocQNBxvgq%2Bf3LEXijIHCpO77Bvr2Kp2IQXgVflgpjiMLgupXTRdvmeEE6LKUQaOA1kBrs%2B69sl2N0vIu%2F6dkvlb0qWvEizrIIbJTQsFoeVrXjrQAryZktIaBcB4VULqqbCFoevbkFr5VsjRLsxlvg1vCCGlSaCY2gjY64iUn44dAeQOKR%2FYsw83LuMUczKwwFqlf6SG7hECG%2BjDedJVbeKVUpaAq6chceQhJ2nrlyUP4er31vxbtLrvv1ixIXgR5p1A2lbEbm9soTjThwUc4sFJNplue00PP7TNVJqhgEzKztbEslXmDLGTvZBxkG7x7leHMN2l%2Fb0GOqUB%2BKovm3%2Butl7HIIihOVWsE%2Bu3ShUycB05%2FPNxIWTZ8vO0VWkwtgzuYrjJMx0%2FphSPxcrsU%2FbLBZXAuxwEKeKIY5vayOPGzMQRgKysX%2F%2Fn3oetHAcl7%2FD5fk4bPx2goIw2PNXqwsItjtz5hFv2pVOASuCDUzKVddAOHEaR9Sn41gO30x2R53bfWDhaxc2fgvMFpiF7XvJU%2BZDOGsIMD%2Bd54ZDy5Utg&X-Amz-Signature=d0211cb4be6877d4360acb427681a06db85dfc32439311a2ec02fd82bab89ed0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUQJ2CDH%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDUwJhF3cAZXE1%2BHG6n70J2DcU9DskIYpTXbL6Lcy%2F71QIgUXAnlJrwWZDL5OXD5cneqDlewREfvrdov6CXPiV3mfcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNytRddMNI6%2Ft4OAZyrcA%2BvSuKOtfT0u5fDPFgE9RrPhmyqod15MfUQZanRGMCSTLDjDqG60Wm5b4hFUCl%2FmwdNvGAAOuXqBJgH76YHoKRHF8ghrOzwfFpvd0VECc66SH4GYAqlXCRF3lL8sJ8X2WP3CSvN8NWyh0YXlOjnfX2%2Fx9MrwlzbwWW2THTa%2BjAZnW%2BdnwkF2N99Mlds7s2UawKBN1bNtt%2FeZjLdbeBT6OCwD9pLtEcH%2BptalFFhJJD27xutwq4981WGUDD95KdCiC%2BXEM1bJpZZ5Mou%2BFsr4vFsEoL4bH0ZkuUylc3C%2F90NgyA7SwKEDwapsHocQNBxvgq%2Bf3LEXijIHCpO77Bvr2Kp2IQXgVflgpjiMLgupXTRdvmeEE6LKUQaOA1kBrs%2B69sl2N0vIu%2F6dkvlb0qWvEizrIIbJTQsFoeVrXjrQAryZktIaBcB4VULqqbCFoevbkFr5VsjRLsxlvg1vCCGlSaCY2gjY64iUn44dAeQOKR%2FYsw83LuMUczKwwFqlf6SG7hECG%2BjDedJVbeKVUpaAq6chceQhJ2nrlyUP4er31vxbtLrvv1ixIXgR5p1A2lbEbm9soTjThwUc4sFJNplue00PP7TNVJqhgEzKztbEslXmDLGTvZBxkG7x7leHMN2l%2Fb0GOqUB%2BKovm3%2Butl7HIIihOVWsE%2Bu3ShUycB05%2FPNxIWTZ8vO0VWkwtgzuYrjJMx0%2FphSPxcrsU%2FbLBZXAuxwEKeKIY5vayOPGzMQRgKysX%2F%2Fn3oetHAcl7%2FD5fk4bPx2goIw2PNXqwsItjtz5hFv2pVOASuCDUzKVddAOHEaR9Sn41gO30x2R53bfWDhaxc2fgvMFpiF7XvJU%2BZDOGsIMD%2Bd54ZDy5Utg&X-Amz-Signature=646a203e114e943c3052327f45d027ca1c55a1b6d3f758347a290355b193b504&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUQJ2CDH%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDUwJhF3cAZXE1%2BHG6n70J2DcU9DskIYpTXbL6Lcy%2F71QIgUXAnlJrwWZDL5OXD5cneqDlewREfvrdov6CXPiV3mfcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNytRddMNI6%2Ft4OAZyrcA%2BvSuKOtfT0u5fDPFgE9RrPhmyqod15MfUQZanRGMCSTLDjDqG60Wm5b4hFUCl%2FmwdNvGAAOuXqBJgH76YHoKRHF8ghrOzwfFpvd0VECc66SH4GYAqlXCRF3lL8sJ8X2WP3CSvN8NWyh0YXlOjnfX2%2Fx9MrwlzbwWW2THTa%2BjAZnW%2BdnwkF2N99Mlds7s2UawKBN1bNtt%2FeZjLdbeBT6OCwD9pLtEcH%2BptalFFhJJD27xutwq4981WGUDD95KdCiC%2BXEM1bJpZZ5Mou%2BFsr4vFsEoL4bH0ZkuUylc3C%2F90NgyA7SwKEDwapsHocQNBxvgq%2Bf3LEXijIHCpO77Bvr2Kp2IQXgVflgpjiMLgupXTRdvmeEE6LKUQaOA1kBrs%2B69sl2N0vIu%2F6dkvlb0qWvEizrIIbJTQsFoeVrXjrQAryZktIaBcB4VULqqbCFoevbkFr5VsjRLsxlvg1vCCGlSaCY2gjY64iUn44dAeQOKR%2FYsw83LuMUczKwwFqlf6SG7hECG%2BjDedJVbeKVUpaAq6chceQhJ2nrlyUP4er31vxbtLrvv1ixIXgR5p1A2lbEbm9soTjThwUc4sFJNplue00PP7TNVJqhgEzKztbEslXmDLGTvZBxkG7x7leHMN2l%2Fb0GOqUB%2BKovm3%2Butl7HIIihOVWsE%2Bu3ShUycB05%2FPNxIWTZ8vO0VWkwtgzuYrjJMx0%2FphSPxcrsU%2FbLBZXAuxwEKeKIY5vayOPGzMQRgKysX%2F%2Fn3oetHAcl7%2FD5fk4bPx2goIw2PNXqwsItjtz5hFv2pVOASuCDUzKVddAOHEaR9Sn41gO30x2R53bfWDhaxc2fgvMFpiF7XvJU%2BZDOGsIMD%2Bd54ZDy5Utg&X-Amz-Signature=fa8260e582e7098c9dab8479dbf60e6cd12e36809f6363c5bfeed2a699d27a15&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUQJ2CDH%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDUwJhF3cAZXE1%2BHG6n70J2DcU9DskIYpTXbL6Lcy%2F71QIgUXAnlJrwWZDL5OXD5cneqDlewREfvrdov6CXPiV3mfcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNytRddMNI6%2Ft4OAZyrcA%2BvSuKOtfT0u5fDPFgE9RrPhmyqod15MfUQZanRGMCSTLDjDqG60Wm5b4hFUCl%2FmwdNvGAAOuXqBJgH76YHoKRHF8ghrOzwfFpvd0VECc66SH4GYAqlXCRF3lL8sJ8X2WP3CSvN8NWyh0YXlOjnfX2%2Fx9MrwlzbwWW2THTa%2BjAZnW%2BdnwkF2N99Mlds7s2UawKBN1bNtt%2FeZjLdbeBT6OCwD9pLtEcH%2BptalFFhJJD27xutwq4981WGUDD95KdCiC%2BXEM1bJpZZ5Mou%2BFsr4vFsEoL4bH0ZkuUylc3C%2F90NgyA7SwKEDwapsHocQNBxvgq%2Bf3LEXijIHCpO77Bvr2Kp2IQXgVflgpjiMLgupXTRdvmeEE6LKUQaOA1kBrs%2B69sl2N0vIu%2F6dkvlb0qWvEizrIIbJTQsFoeVrXjrQAryZktIaBcB4VULqqbCFoevbkFr5VsjRLsxlvg1vCCGlSaCY2gjY64iUn44dAeQOKR%2FYsw83LuMUczKwwFqlf6SG7hECG%2BjDedJVbeKVUpaAq6chceQhJ2nrlyUP4er31vxbtLrvv1ixIXgR5p1A2lbEbm9soTjThwUc4sFJNplue00PP7TNVJqhgEzKztbEslXmDLGTvZBxkG7x7leHMN2l%2Fb0GOqUB%2BKovm3%2Butl7HIIihOVWsE%2Bu3ShUycB05%2FPNxIWTZ8vO0VWkwtgzuYrjJMx0%2FphSPxcrsU%2FbLBZXAuxwEKeKIY5vayOPGzMQRgKysX%2F%2Fn3oetHAcl7%2FD5fk4bPx2goIw2PNXqwsItjtz5hFv2pVOASuCDUzKVddAOHEaR9Sn41gO30x2R53bfWDhaxc2fgvMFpiF7XvJU%2BZDOGsIMD%2Bd54ZDy5Utg&X-Amz-Signature=6aa340dbc1238090352cf21e8b2135bb8a9bca2935b4eff9a38e23b0451d58c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUQJ2CDH%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDUwJhF3cAZXE1%2BHG6n70J2DcU9DskIYpTXbL6Lcy%2F71QIgUXAnlJrwWZDL5OXD5cneqDlewREfvrdov6CXPiV3mfcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNytRddMNI6%2Ft4OAZyrcA%2BvSuKOtfT0u5fDPFgE9RrPhmyqod15MfUQZanRGMCSTLDjDqG60Wm5b4hFUCl%2FmwdNvGAAOuXqBJgH76YHoKRHF8ghrOzwfFpvd0VECc66SH4GYAqlXCRF3lL8sJ8X2WP3CSvN8NWyh0YXlOjnfX2%2Fx9MrwlzbwWW2THTa%2BjAZnW%2BdnwkF2N99Mlds7s2UawKBN1bNtt%2FeZjLdbeBT6OCwD9pLtEcH%2BptalFFhJJD27xutwq4981WGUDD95KdCiC%2BXEM1bJpZZ5Mou%2BFsr4vFsEoL4bH0ZkuUylc3C%2F90NgyA7SwKEDwapsHocQNBxvgq%2Bf3LEXijIHCpO77Bvr2Kp2IQXgVflgpjiMLgupXTRdvmeEE6LKUQaOA1kBrs%2B69sl2N0vIu%2F6dkvlb0qWvEizrIIbJTQsFoeVrXjrQAryZktIaBcB4VULqqbCFoevbkFr5VsjRLsxlvg1vCCGlSaCY2gjY64iUn44dAeQOKR%2FYsw83LuMUczKwwFqlf6SG7hECG%2BjDedJVbeKVUpaAq6chceQhJ2nrlyUP4er31vxbtLrvv1ixIXgR5p1A2lbEbm9soTjThwUc4sFJNplue00PP7TNVJqhgEzKztbEslXmDLGTvZBxkG7x7leHMN2l%2Fb0GOqUB%2BKovm3%2Butl7HIIihOVWsE%2Bu3ShUycB05%2FPNxIWTZ8vO0VWkwtgzuYrjJMx0%2FphSPxcrsU%2FbLBZXAuxwEKeKIY5vayOPGzMQRgKysX%2F%2Fn3oetHAcl7%2FD5fk4bPx2goIw2PNXqwsItjtz5hFv2pVOASuCDUzKVddAOHEaR9Sn41gO30x2R53bfWDhaxc2fgvMFpiF7XvJU%2BZDOGsIMD%2Bd54ZDy5Utg&X-Amz-Signature=b951e8e74c9e0de6be4dce2f40bc0f33d5464c34d7c3aebf4a0c4e0870d35f44&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
