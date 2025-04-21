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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRRROYLM%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDW1uSlwrwR0kYnIO9wzK5B3jgeQLFjkh7QMl9Jq6KHBQIgYIoWOQ2y%2F%2Bpu77G4Qzb89kWj8RbzQnTiSxrYfaLSpToqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFL9kivM5iPh9x4hSrcA52f%2BVVWf13W%2FAYSHaNSMfj38u92H8pl%2BSlob%2BgHV9CGkwcRnn1B%2Ft%2F3oeTMbg98RwU6BoOec%2F6tQ3dN7aGFrfTpRlpV6g9zOz1%2F9QByROkQoP9f%2FBAvxobqF6vgdNJmXCIGSRhx50XTW0RT92UZtCoaybENpyg0f28gASZ5cTpQAAimQSCRNMVfRf8i76Y4EPSSjVzzaVLqiCVGEckTPs8yd68aiHQn8vAB25UZzoxih2aakWlvGhmGtkbVWngpLs568oiFnB6bIghMElhiaxDHgaHlqeNuyb48J%2F8CwOgs011ZkFaZwKpkL5YgIfc0aIBY4C0N%2FCzcNlWEK2HgWgBxnXjABiEqaXEvC4tgtAsVmDTedbCgkmCc%2BBf38CIW2UOtdiiB8aqeSIY%2BR%2FosxBhVennBdnGCQpt6Gkp99atnrSKFPxmWTjBh8oBD4oS2kOvz0RpQPySyZvfLz16vMIlowtGPAnvxHbuMyhHB%2FoaCxMCXsc9lkWSLgDXTttlrQ%2FzqnLwuP%2BH5cm37xCdjUFpi6WRIV1t8k77h23Zrk8lm1vlfB%2B4P33VaLn%2FW0QYfQ0b6nIxDj2YDp99tBMNmK2yJo8K8lYwiJCKGuJy2viQj75IlfAfJZi9%2BfhGFMJWimMAGOqUBnWJ6ggxWKrx1CySuQPK2i0oUJ2dK5gIOW1G6m2pNYPq5q3HogPonfF9HC2VKsCxZX0pS9IAIcJZCj2yOkrTLIdc6%2BGudwQawPzO3yB8GcA%2FXGLE23LUJ2AwRpnwe1ppkfcutPbtXYnepwEKKOdrX102HUgsjpy9BR22hqSVKP1LwLvDk%2BhUp2Kh5kNH3bM4oABXaA8G5BbS9odx7%2B9f1PqR25dEM&X-Amz-Signature=c1d3c0a977f02a0b8aa8d6696ca74d98a8316bb76745c38e229ed1e825ddecb8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRRROYLM%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDW1uSlwrwR0kYnIO9wzK5B3jgeQLFjkh7QMl9Jq6KHBQIgYIoWOQ2y%2F%2Bpu77G4Qzb89kWj8RbzQnTiSxrYfaLSpToqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFL9kivM5iPh9x4hSrcA52f%2BVVWf13W%2FAYSHaNSMfj38u92H8pl%2BSlob%2BgHV9CGkwcRnn1B%2Ft%2F3oeTMbg98RwU6BoOec%2F6tQ3dN7aGFrfTpRlpV6g9zOz1%2F9QByROkQoP9f%2FBAvxobqF6vgdNJmXCIGSRhx50XTW0RT92UZtCoaybENpyg0f28gASZ5cTpQAAimQSCRNMVfRf8i76Y4EPSSjVzzaVLqiCVGEckTPs8yd68aiHQn8vAB25UZzoxih2aakWlvGhmGtkbVWngpLs568oiFnB6bIghMElhiaxDHgaHlqeNuyb48J%2F8CwOgs011ZkFaZwKpkL5YgIfc0aIBY4C0N%2FCzcNlWEK2HgWgBxnXjABiEqaXEvC4tgtAsVmDTedbCgkmCc%2BBf38CIW2UOtdiiB8aqeSIY%2BR%2FosxBhVennBdnGCQpt6Gkp99atnrSKFPxmWTjBh8oBD4oS2kOvz0RpQPySyZvfLz16vMIlowtGPAnvxHbuMyhHB%2FoaCxMCXsc9lkWSLgDXTttlrQ%2FzqnLwuP%2BH5cm37xCdjUFpi6WRIV1t8k77h23Zrk8lm1vlfB%2B4P33VaLn%2FW0QYfQ0b6nIxDj2YDp99tBMNmK2yJo8K8lYwiJCKGuJy2viQj75IlfAfJZi9%2BfhGFMJWimMAGOqUBnWJ6ggxWKrx1CySuQPK2i0oUJ2dK5gIOW1G6m2pNYPq5q3HogPonfF9HC2VKsCxZX0pS9IAIcJZCj2yOkrTLIdc6%2BGudwQawPzO3yB8GcA%2FXGLE23LUJ2AwRpnwe1ppkfcutPbtXYnepwEKKOdrX102HUgsjpy9BR22hqSVKP1LwLvDk%2BhUp2Kh5kNH3bM4oABXaA8G5BbS9odx7%2B9f1PqR25dEM&X-Amz-Signature=5618ac352188bbfabbe49fe3235ceeb293c2019c65c2f2ce17065b9b22bc7eda&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRRROYLM%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDW1uSlwrwR0kYnIO9wzK5B3jgeQLFjkh7QMl9Jq6KHBQIgYIoWOQ2y%2F%2Bpu77G4Qzb89kWj8RbzQnTiSxrYfaLSpToqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFL9kivM5iPh9x4hSrcA52f%2BVVWf13W%2FAYSHaNSMfj38u92H8pl%2BSlob%2BgHV9CGkwcRnn1B%2Ft%2F3oeTMbg98RwU6BoOec%2F6tQ3dN7aGFrfTpRlpV6g9zOz1%2F9QByROkQoP9f%2FBAvxobqF6vgdNJmXCIGSRhx50XTW0RT92UZtCoaybENpyg0f28gASZ5cTpQAAimQSCRNMVfRf8i76Y4EPSSjVzzaVLqiCVGEckTPs8yd68aiHQn8vAB25UZzoxih2aakWlvGhmGtkbVWngpLs568oiFnB6bIghMElhiaxDHgaHlqeNuyb48J%2F8CwOgs011ZkFaZwKpkL5YgIfc0aIBY4C0N%2FCzcNlWEK2HgWgBxnXjABiEqaXEvC4tgtAsVmDTedbCgkmCc%2BBf38CIW2UOtdiiB8aqeSIY%2BR%2FosxBhVennBdnGCQpt6Gkp99atnrSKFPxmWTjBh8oBD4oS2kOvz0RpQPySyZvfLz16vMIlowtGPAnvxHbuMyhHB%2FoaCxMCXsc9lkWSLgDXTttlrQ%2FzqnLwuP%2BH5cm37xCdjUFpi6WRIV1t8k77h23Zrk8lm1vlfB%2B4P33VaLn%2FW0QYfQ0b6nIxDj2YDp99tBMNmK2yJo8K8lYwiJCKGuJy2viQj75IlfAfJZi9%2BfhGFMJWimMAGOqUBnWJ6ggxWKrx1CySuQPK2i0oUJ2dK5gIOW1G6m2pNYPq5q3HogPonfF9HC2VKsCxZX0pS9IAIcJZCj2yOkrTLIdc6%2BGudwQawPzO3yB8GcA%2FXGLE23LUJ2AwRpnwe1ppkfcutPbtXYnepwEKKOdrX102HUgsjpy9BR22hqSVKP1LwLvDk%2BhUp2Kh5kNH3bM4oABXaA8G5BbS9odx7%2B9f1PqR25dEM&X-Amz-Signature=589a502caa8bb7bb849cc06b541e713d8efa735e9cd46a3aac58c1b8cf923bb0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRRROYLM%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDW1uSlwrwR0kYnIO9wzK5B3jgeQLFjkh7QMl9Jq6KHBQIgYIoWOQ2y%2F%2Bpu77G4Qzb89kWj8RbzQnTiSxrYfaLSpToqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFL9kivM5iPh9x4hSrcA52f%2BVVWf13W%2FAYSHaNSMfj38u92H8pl%2BSlob%2BgHV9CGkwcRnn1B%2Ft%2F3oeTMbg98RwU6BoOec%2F6tQ3dN7aGFrfTpRlpV6g9zOz1%2F9QByROkQoP9f%2FBAvxobqF6vgdNJmXCIGSRhx50XTW0RT92UZtCoaybENpyg0f28gASZ5cTpQAAimQSCRNMVfRf8i76Y4EPSSjVzzaVLqiCVGEckTPs8yd68aiHQn8vAB25UZzoxih2aakWlvGhmGtkbVWngpLs568oiFnB6bIghMElhiaxDHgaHlqeNuyb48J%2F8CwOgs011ZkFaZwKpkL5YgIfc0aIBY4C0N%2FCzcNlWEK2HgWgBxnXjABiEqaXEvC4tgtAsVmDTedbCgkmCc%2BBf38CIW2UOtdiiB8aqeSIY%2BR%2FosxBhVennBdnGCQpt6Gkp99atnrSKFPxmWTjBh8oBD4oS2kOvz0RpQPySyZvfLz16vMIlowtGPAnvxHbuMyhHB%2FoaCxMCXsc9lkWSLgDXTttlrQ%2FzqnLwuP%2BH5cm37xCdjUFpi6WRIV1t8k77h23Zrk8lm1vlfB%2B4P33VaLn%2FW0QYfQ0b6nIxDj2YDp99tBMNmK2yJo8K8lYwiJCKGuJy2viQj75IlfAfJZi9%2BfhGFMJWimMAGOqUBnWJ6ggxWKrx1CySuQPK2i0oUJ2dK5gIOW1G6m2pNYPq5q3HogPonfF9HC2VKsCxZX0pS9IAIcJZCj2yOkrTLIdc6%2BGudwQawPzO3yB8GcA%2FXGLE23LUJ2AwRpnwe1ppkfcutPbtXYnepwEKKOdrX102HUgsjpy9BR22hqSVKP1LwLvDk%2BhUp2Kh5kNH3bM4oABXaA8G5BbS9odx7%2B9f1PqR25dEM&X-Amz-Signature=46ca56a1e32a8fce95a1bd7c905dc36d215bf0c069bf865950fd331002c9acde&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRRROYLM%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDW1uSlwrwR0kYnIO9wzK5B3jgeQLFjkh7QMl9Jq6KHBQIgYIoWOQ2y%2F%2Bpu77G4Qzb89kWj8RbzQnTiSxrYfaLSpToqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFL9kivM5iPh9x4hSrcA52f%2BVVWf13W%2FAYSHaNSMfj38u92H8pl%2BSlob%2BgHV9CGkwcRnn1B%2Ft%2F3oeTMbg98RwU6BoOec%2F6tQ3dN7aGFrfTpRlpV6g9zOz1%2F9QByROkQoP9f%2FBAvxobqF6vgdNJmXCIGSRhx50XTW0RT92UZtCoaybENpyg0f28gASZ5cTpQAAimQSCRNMVfRf8i76Y4EPSSjVzzaVLqiCVGEckTPs8yd68aiHQn8vAB25UZzoxih2aakWlvGhmGtkbVWngpLs568oiFnB6bIghMElhiaxDHgaHlqeNuyb48J%2F8CwOgs011ZkFaZwKpkL5YgIfc0aIBY4C0N%2FCzcNlWEK2HgWgBxnXjABiEqaXEvC4tgtAsVmDTedbCgkmCc%2BBf38CIW2UOtdiiB8aqeSIY%2BR%2FosxBhVennBdnGCQpt6Gkp99atnrSKFPxmWTjBh8oBD4oS2kOvz0RpQPySyZvfLz16vMIlowtGPAnvxHbuMyhHB%2FoaCxMCXsc9lkWSLgDXTttlrQ%2FzqnLwuP%2BH5cm37xCdjUFpi6WRIV1t8k77h23Zrk8lm1vlfB%2B4P33VaLn%2FW0QYfQ0b6nIxDj2YDp99tBMNmK2yJo8K8lYwiJCKGuJy2viQj75IlfAfJZi9%2BfhGFMJWimMAGOqUBnWJ6ggxWKrx1CySuQPK2i0oUJ2dK5gIOW1G6m2pNYPq5q3HogPonfF9HC2VKsCxZX0pS9IAIcJZCj2yOkrTLIdc6%2BGudwQawPzO3yB8GcA%2FXGLE23LUJ2AwRpnwe1ppkfcutPbtXYnepwEKKOdrX102HUgsjpy9BR22hqSVKP1LwLvDk%2BhUp2Kh5kNH3bM4oABXaA8G5BbS9odx7%2B9f1PqR25dEM&X-Amz-Signature=838765443da9beda09206f0acf5c130fccdea9a3a47111bdd95d1eba56155ac3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRRROYLM%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDW1uSlwrwR0kYnIO9wzK5B3jgeQLFjkh7QMl9Jq6KHBQIgYIoWOQ2y%2F%2Bpu77G4Qzb89kWj8RbzQnTiSxrYfaLSpToqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFL9kivM5iPh9x4hSrcA52f%2BVVWf13W%2FAYSHaNSMfj38u92H8pl%2BSlob%2BgHV9CGkwcRnn1B%2Ft%2F3oeTMbg98RwU6BoOec%2F6tQ3dN7aGFrfTpRlpV6g9zOz1%2F9QByROkQoP9f%2FBAvxobqF6vgdNJmXCIGSRhx50XTW0RT92UZtCoaybENpyg0f28gASZ5cTpQAAimQSCRNMVfRf8i76Y4EPSSjVzzaVLqiCVGEckTPs8yd68aiHQn8vAB25UZzoxih2aakWlvGhmGtkbVWngpLs568oiFnB6bIghMElhiaxDHgaHlqeNuyb48J%2F8CwOgs011ZkFaZwKpkL5YgIfc0aIBY4C0N%2FCzcNlWEK2HgWgBxnXjABiEqaXEvC4tgtAsVmDTedbCgkmCc%2BBf38CIW2UOtdiiB8aqeSIY%2BR%2FosxBhVennBdnGCQpt6Gkp99atnrSKFPxmWTjBh8oBD4oS2kOvz0RpQPySyZvfLz16vMIlowtGPAnvxHbuMyhHB%2FoaCxMCXsc9lkWSLgDXTttlrQ%2FzqnLwuP%2BH5cm37xCdjUFpi6WRIV1t8k77h23Zrk8lm1vlfB%2B4P33VaLn%2FW0QYfQ0b6nIxDj2YDp99tBMNmK2yJo8K8lYwiJCKGuJy2viQj75IlfAfJZi9%2BfhGFMJWimMAGOqUBnWJ6ggxWKrx1CySuQPK2i0oUJ2dK5gIOW1G6m2pNYPq5q3HogPonfF9HC2VKsCxZX0pS9IAIcJZCj2yOkrTLIdc6%2BGudwQawPzO3yB8GcA%2FXGLE23LUJ2AwRpnwe1ppkfcutPbtXYnepwEKKOdrX102HUgsjpy9BR22hqSVKP1LwLvDk%2BhUp2Kh5kNH3bM4oABXaA8G5BbS9odx7%2B9f1PqR25dEM&X-Amz-Signature=23ea1cf0970d6d5d07644d8ed2cf69bcac03811393c10abe952f2209b0822a11&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRRROYLM%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDW1uSlwrwR0kYnIO9wzK5B3jgeQLFjkh7QMl9Jq6KHBQIgYIoWOQ2y%2F%2Bpu77G4Qzb89kWj8RbzQnTiSxrYfaLSpToqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFL9kivM5iPh9x4hSrcA52f%2BVVWf13W%2FAYSHaNSMfj38u92H8pl%2BSlob%2BgHV9CGkwcRnn1B%2Ft%2F3oeTMbg98RwU6BoOec%2F6tQ3dN7aGFrfTpRlpV6g9zOz1%2F9QByROkQoP9f%2FBAvxobqF6vgdNJmXCIGSRhx50XTW0RT92UZtCoaybENpyg0f28gASZ5cTpQAAimQSCRNMVfRf8i76Y4EPSSjVzzaVLqiCVGEckTPs8yd68aiHQn8vAB25UZzoxih2aakWlvGhmGtkbVWngpLs568oiFnB6bIghMElhiaxDHgaHlqeNuyb48J%2F8CwOgs011ZkFaZwKpkL5YgIfc0aIBY4C0N%2FCzcNlWEK2HgWgBxnXjABiEqaXEvC4tgtAsVmDTedbCgkmCc%2BBf38CIW2UOtdiiB8aqeSIY%2BR%2FosxBhVennBdnGCQpt6Gkp99atnrSKFPxmWTjBh8oBD4oS2kOvz0RpQPySyZvfLz16vMIlowtGPAnvxHbuMyhHB%2FoaCxMCXsc9lkWSLgDXTttlrQ%2FzqnLwuP%2BH5cm37xCdjUFpi6WRIV1t8k77h23Zrk8lm1vlfB%2B4P33VaLn%2FW0QYfQ0b6nIxDj2YDp99tBMNmK2yJo8K8lYwiJCKGuJy2viQj75IlfAfJZi9%2BfhGFMJWimMAGOqUBnWJ6ggxWKrx1CySuQPK2i0oUJ2dK5gIOW1G6m2pNYPq5q3HogPonfF9HC2VKsCxZX0pS9IAIcJZCj2yOkrTLIdc6%2BGudwQawPzO3yB8GcA%2FXGLE23LUJ2AwRpnwe1ppkfcutPbtXYnepwEKKOdrX102HUgsjpy9BR22hqSVKP1LwLvDk%2BhUp2Kh5kNH3bM4oABXaA8G5BbS9odx7%2B9f1PqR25dEM&X-Amz-Signature=04c4d3a586540e5f02a2064468c427d56ca0c04201147388c9eaebdd2a600619&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRRROYLM%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDW1uSlwrwR0kYnIO9wzK5B3jgeQLFjkh7QMl9Jq6KHBQIgYIoWOQ2y%2F%2Bpu77G4Qzb89kWj8RbzQnTiSxrYfaLSpToqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFL9kivM5iPh9x4hSrcA52f%2BVVWf13W%2FAYSHaNSMfj38u92H8pl%2BSlob%2BgHV9CGkwcRnn1B%2Ft%2F3oeTMbg98RwU6BoOec%2F6tQ3dN7aGFrfTpRlpV6g9zOz1%2F9QByROkQoP9f%2FBAvxobqF6vgdNJmXCIGSRhx50XTW0RT92UZtCoaybENpyg0f28gASZ5cTpQAAimQSCRNMVfRf8i76Y4EPSSjVzzaVLqiCVGEckTPs8yd68aiHQn8vAB25UZzoxih2aakWlvGhmGtkbVWngpLs568oiFnB6bIghMElhiaxDHgaHlqeNuyb48J%2F8CwOgs011ZkFaZwKpkL5YgIfc0aIBY4C0N%2FCzcNlWEK2HgWgBxnXjABiEqaXEvC4tgtAsVmDTedbCgkmCc%2BBf38CIW2UOtdiiB8aqeSIY%2BR%2FosxBhVennBdnGCQpt6Gkp99atnrSKFPxmWTjBh8oBD4oS2kOvz0RpQPySyZvfLz16vMIlowtGPAnvxHbuMyhHB%2FoaCxMCXsc9lkWSLgDXTttlrQ%2FzqnLwuP%2BH5cm37xCdjUFpi6WRIV1t8k77h23Zrk8lm1vlfB%2B4P33VaLn%2FW0QYfQ0b6nIxDj2YDp99tBMNmK2yJo8K8lYwiJCKGuJy2viQj75IlfAfJZi9%2BfhGFMJWimMAGOqUBnWJ6ggxWKrx1CySuQPK2i0oUJ2dK5gIOW1G6m2pNYPq5q3HogPonfF9HC2VKsCxZX0pS9IAIcJZCj2yOkrTLIdc6%2BGudwQawPzO3yB8GcA%2FXGLE23LUJ2AwRpnwe1ppkfcutPbtXYnepwEKKOdrX102HUgsjpy9BR22hqSVKP1LwLvDk%2BhUp2Kh5kNH3bM4oABXaA8G5BbS9odx7%2B9f1PqR25dEM&X-Amz-Signature=007cdc1ca59fe41a14eeb08acbfac2771a473689613c3a520358a49f00bfbc2e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
