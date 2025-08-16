---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HSUHFML%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIF%2F%2FFb3zc8Tkl5B9rDyyXAaXHiVb2DkRY9LkGkNHUlMjAiEAi%2FOc%2Bn7Tfyn4rm1s134BA1fW4Nf6%2FQsORvDM2g4Z4QUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJPI9nXJ%2FRgHj1sgDyrcA04H%2B5U5uXfXyj%2BwYLX6voKdsOyfnql4b0lSCgY%2BBa%2BfZYGXhFz8XVcIxgpw4xmBLEYxlXuVYz5Bzn%2FrNqcPrrtZCwmIDCvkJ8%2FEpOG6afkyuU2ZyMuSyLfw6H3ZLO9b5T3guWow5xKEqAq9SvZVnPGkyl3LBijDk85SCyY7b9EubdXVucko5R%2FjrByqhe%2FIhBJlDQ1SLK8M52rv5QPBvf%2F%2B%2B8sOhgTy4sRbvaEak1Um%2Bq7XcLhdrLDNsJpAV0CPmCeu%2Fx7vk1ahaf0b%2F1Yo8gU07dz95LR4IatNUf%2FCDtM9U8DyW4PH3vtN3c7dbGs8EVJFKNlWs8WWGXYu1NJzrkSNy5idaZ1WTG3OSDLDqR1x00wKKMdzsHPiLPP7rgL1%2BazONvAGsAPjCfnP7ZORW1iy8KorvEz%2FjR81jMH8XTDIbUZOnUJqsqw1QRsO0%2Fk%2FTokBDSlmGwNnQuG4UEEW%2F7hECAVIPBZt%2BOVdzDYrJZP%2Fhnvh2%2BYjSy5DHN5i6XZUQNSZa6%2BrgKJTNCB62fkWujodg40rieJnFHaCQYMZyc7GlPLzC9fJv%2B91dLv5jLt0NvXWwCgF5lIXx1lQVt81EBrrvbP35VsEMXAigaJF4bpMICjrOn4TIrnFMW9VMOD3gMUGOqUB9n3JVvPwyW4hNUAmZosKiepOCfY6VprnwnuFBp9kJZ641rTd75rz34BRR%2B%2BFb%2FcTQj1bYSnexVx8IENwrzzp6fT%2BK7vOBct5AuFaaNZhzExoHDtfQFfy6PEebMurzsnL%2FOj%2FYd2M9fyxS1tJa%2BYsAMmxdqlOk6Tnviz1ByJuYhmv39It1qFVdRtE6MfVArCoTjmnOMlPEXRet3h4usr6KMA0u6ac&X-Amz-Signature=cc3e37d625c5c96e1dc4fb736ddfc1505f342d75f569b31e95c9ba639c5a3bfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HSUHFML%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIF%2F%2FFb3zc8Tkl5B9rDyyXAaXHiVb2DkRY9LkGkNHUlMjAiEAi%2FOc%2Bn7Tfyn4rm1s134BA1fW4Nf6%2FQsORvDM2g4Z4QUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJPI9nXJ%2FRgHj1sgDyrcA04H%2B5U5uXfXyj%2BwYLX6voKdsOyfnql4b0lSCgY%2BBa%2BfZYGXhFz8XVcIxgpw4xmBLEYxlXuVYz5Bzn%2FrNqcPrrtZCwmIDCvkJ8%2FEpOG6afkyuU2ZyMuSyLfw6H3ZLO9b5T3guWow5xKEqAq9SvZVnPGkyl3LBijDk85SCyY7b9EubdXVucko5R%2FjrByqhe%2FIhBJlDQ1SLK8M52rv5QPBvf%2F%2B%2B8sOhgTy4sRbvaEak1Um%2Bq7XcLhdrLDNsJpAV0CPmCeu%2Fx7vk1ahaf0b%2F1Yo8gU07dz95LR4IatNUf%2FCDtM9U8DyW4PH3vtN3c7dbGs8EVJFKNlWs8WWGXYu1NJzrkSNy5idaZ1WTG3OSDLDqR1x00wKKMdzsHPiLPP7rgL1%2BazONvAGsAPjCfnP7ZORW1iy8KorvEz%2FjR81jMH8XTDIbUZOnUJqsqw1QRsO0%2Fk%2FTokBDSlmGwNnQuG4UEEW%2F7hECAVIPBZt%2BOVdzDYrJZP%2Fhnvh2%2BYjSy5DHN5i6XZUQNSZa6%2BrgKJTNCB62fkWujodg40rieJnFHaCQYMZyc7GlPLzC9fJv%2B91dLv5jLt0NvXWwCgF5lIXx1lQVt81EBrrvbP35VsEMXAigaJF4bpMICjrOn4TIrnFMW9VMOD3gMUGOqUB9n3JVvPwyW4hNUAmZosKiepOCfY6VprnwnuFBp9kJZ641rTd75rz34BRR%2B%2BFb%2FcTQj1bYSnexVx8IENwrzzp6fT%2BK7vOBct5AuFaaNZhzExoHDtfQFfy6PEebMurzsnL%2FOj%2FYd2M9fyxS1tJa%2BYsAMmxdqlOk6Tnviz1ByJuYhmv39It1qFVdRtE6MfVArCoTjmnOMlPEXRet3h4usr6KMA0u6ac&X-Amz-Signature=b4a217a9cfc8b9be877b5d2bb551fbb582de9d1c726a5e56f2b6c7e862404dfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HSUHFML%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIF%2F%2FFb3zc8Tkl5B9rDyyXAaXHiVb2DkRY9LkGkNHUlMjAiEAi%2FOc%2Bn7Tfyn4rm1s134BA1fW4Nf6%2FQsORvDM2g4Z4QUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJPI9nXJ%2FRgHj1sgDyrcA04H%2B5U5uXfXyj%2BwYLX6voKdsOyfnql4b0lSCgY%2BBa%2BfZYGXhFz8XVcIxgpw4xmBLEYxlXuVYz5Bzn%2FrNqcPrrtZCwmIDCvkJ8%2FEpOG6afkyuU2ZyMuSyLfw6H3ZLO9b5T3guWow5xKEqAq9SvZVnPGkyl3LBijDk85SCyY7b9EubdXVucko5R%2FjrByqhe%2FIhBJlDQ1SLK8M52rv5QPBvf%2F%2B%2B8sOhgTy4sRbvaEak1Um%2Bq7XcLhdrLDNsJpAV0CPmCeu%2Fx7vk1ahaf0b%2F1Yo8gU07dz95LR4IatNUf%2FCDtM9U8DyW4PH3vtN3c7dbGs8EVJFKNlWs8WWGXYu1NJzrkSNy5idaZ1WTG3OSDLDqR1x00wKKMdzsHPiLPP7rgL1%2BazONvAGsAPjCfnP7ZORW1iy8KorvEz%2FjR81jMH8XTDIbUZOnUJqsqw1QRsO0%2Fk%2FTokBDSlmGwNnQuG4UEEW%2F7hECAVIPBZt%2BOVdzDYrJZP%2Fhnvh2%2BYjSy5DHN5i6XZUQNSZa6%2BrgKJTNCB62fkWujodg40rieJnFHaCQYMZyc7GlPLzC9fJv%2B91dLv5jLt0NvXWwCgF5lIXx1lQVt81EBrrvbP35VsEMXAigaJF4bpMICjrOn4TIrnFMW9VMOD3gMUGOqUB9n3JVvPwyW4hNUAmZosKiepOCfY6VprnwnuFBp9kJZ641rTd75rz34BRR%2B%2BFb%2FcTQj1bYSnexVx8IENwrzzp6fT%2BK7vOBct5AuFaaNZhzExoHDtfQFfy6PEebMurzsnL%2FOj%2FYd2M9fyxS1tJa%2BYsAMmxdqlOk6Tnviz1ByJuYhmv39It1qFVdRtE6MfVArCoTjmnOMlPEXRet3h4usr6KMA0u6ac&X-Amz-Signature=5b94cc29951f98f30fa754db177bde2af4b0a64d230ecc6466f72c6f2d9da48f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HSUHFML%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIF%2F%2FFb3zc8Tkl5B9rDyyXAaXHiVb2DkRY9LkGkNHUlMjAiEAi%2FOc%2Bn7Tfyn4rm1s134BA1fW4Nf6%2FQsORvDM2g4Z4QUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJPI9nXJ%2FRgHj1sgDyrcA04H%2B5U5uXfXyj%2BwYLX6voKdsOyfnql4b0lSCgY%2BBa%2BfZYGXhFz8XVcIxgpw4xmBLEYxlXuVYz5Bzn%2FrNqcPrrtZCwmIDCvkJ8%2FEpOG6afkyuU2ZyMuSyLfw6H3ZLO9b5T3guWow5xKEqAq9SvZVnPGkyl3LBijDk85SCyY7b9EubdXVucko5R%2FjrByqhe%2FIhBJlDQ1SLK8M52rv5QPBvf%2F%2B%2B8sOhgTy4sRbvaEak1Um%2Bq7XcLhdrLDNsJpAV0CPmCeu%2Fx7vk1ahaf0b%2F1Yo8gU07dz95LR4IatNUf%2FCDtM9U8DyW4PH3vtN3c7dbGs8EVJFKNlWs8WWGXYu1NJzrkSNy5idaZ1WTG3OSDLDqR1x00wKKMdzsHPiLPP7rgL1%2BazONvAGsAPjCfnP7ZORW1iy8KorvEz%2FjR81jMH8XTDIbUZOnUJqsqw1QRsO0%2Fk%2FTokBDSlmGwNnQuG4UEEW%2F7hECAVIPBZt%2BOVdzDYrJZP%2Fhnvh2%2BYjSy5DHN5i6XZUQNSZa6%2BrgKJTNCB62fkWujodg40rieJnFHaCQYMZyc7GlPLzC9fJv%2B91dLv5jLt0NvXWwCgF5lIXx1lQVt81EBrrvbP35VsEMXAigaJF4bpMICjrOn4TIrnFMW9VMOD3gMUGOqUB9n3JVvPwyW4hNUAmZosKiepOCfY6VprnwnuFBp9kJZ641rTd75rz34BRR%2B%2BFb%2FcTQj1bYSnexVx8IENwrzzp6fT%2BK7vOBct5AuFaaNZhzExoHDtfQFfy6PEebMurzsnL%2FOj%2FYd2M9fyxS1tJa%2BYsAMmxdqlOk6Tnviz1ByJuYhmv39It1qFVdRtE6MfVArCoTjmnOMlPEXRet3h4usr6KMA0u6ac&X-Amz-Signature=2f3f68360277653b70b9eb84eb32ad497a8479311f860c8e35d92deabfc4bbe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HSUHFML%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIF%2F%2FFb3zc8Tkl5B9rDyyXAaXHiVb2DkRY9LkGkNHUlMjAiEAi%2FOc%2Bn7Tfyn4rm1s134BA1fW4Nf6%2FQsORvDM2g4Z4QUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJPI9nXJ%2FRgHj1sgDyrcA04H%2B5U5uXfXyj%2BwYLX6voKdsOyfnql4b0lSCgY%2BBa%2BfZYGXhFz8XVcIxgpw4xmBLEYxlXuVYz5Bzn%2FrNqcPrrtZCwmIDCvkJ8%2FEpOG6afkyuU2ZyMuSyLfw6H3ZLO9b5T3guWow5xKEqAq9SvZVnPGkyl3LBijDk85SCyY7b9EubdXVucko5R%2FjrByqhe%2FIhBJlDQ1SLK8M52rv5QPBvf%2F%2B%2B8sOhgTy4sRbvaEak1Um%2Bq7XcLhdrLDNsJpAV0CPmCeu%2Fx7vk1ahaf0b%2F1Yo8gU07dz95LR4IatNUf%2FCDtM9U8DyW4PH3vtN3c7dbGs8EVJFKNlWs8WWGXYu1NJzrkSNy5idaZ1WTG3OSDLDqR1x00wKKMdzsHPiLPP7rgL1%2BazONvAGsAPjCfnP7ZORW1iy8KorvEz%2FjR81jMH8XTDIbUZOnUJqsqw1QRsO0%2Fk%2FTokBDSlmGwNnQuG4UEEW%2F7hECAVIPBZt%2BOVdzDYrJZP%2Fhnvh2%2BYjSy5DHN5i6XZUQNSZa6%2BrgKJTNCB62fkWujodg40rieJnFHaCQYMZyc7GlPLzC9fJv%2B91dLv5jLt0NvXWwCgF5lIXx1lQVt81EBrrvbP35VsEMXAigaJF4bpMICjrOn4TIrnFMW9VMOD3gMUGOqUB9n3JVvPwyW4hNUAmZosKiepOCfY6VprnwnuFBp9kJZ641rTd75rz34BRR%2B%2BFb%2FcTQj1bYSnexVx8IENwrzzp6fT%2BK7vOBct5AuFaaNZhzExoHDtfQFfy6PEebMurzsnL%2FOj%2FYd2M9fyxS1tJa%2BYsAMmxdqlOk6Tnviz1ByJuYhmv39It1qFVdRtE6MfVArCoTjmnOMlPEXRet3h4usr6KMA0u6ac&X-Amz-Signature=33a5c2dc2e7eddeb1f6b3dff976db2060e017c72ac5a346fdaf99767f598affa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HSUHFML%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIF%2F%2FFb3zc8Tkl5B9rDyyXAaXHiVb2DkRY9LkGkNHUlMjAiEAi%2FOc%2Bn7Tfyn4rm1s134BA1fW4Nf6%2FQsORvDM2g4Z4QUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJPI9nXJ%2FRgHj1sgDyrcA04H%2B5U5uXfXyj%2BwYLX6voKdsOyfnql4b0lSCgY%2BBa%2BfZYGXhFz8XVcIxgpw4xmBLEYxlXuVYz5Bzn%2FrNqcPrrtZCwmIDCvkJ8%2FEpOG6afkyuU2ZyMuSyLfw6H3ZLO9b5T3guWow5xKEqAq9SvZVnPGkyl3LBijDk85SCyY7b9EubdXVucko5R%2FjrByqhe%2FIhBJlDQ1SLK8M52rv5QPBvf%2F%2B%2B8sOhgTy4sRbvaEak1Um%2Bq7XcLhdrLDNsJpAV0CPmCeu%2Fx7vk1ahaf0b%2F1Yo8gU07dz95LR4IatNUf%2FCDtM9U8DyW4PH3vtN3c7dbGs8EVJFKNlWs8WWGXYu1NJzrkSNy5idaZ1WTG3OSDLDqR1x00wKKMdzsHPiLPP7rgL1%2BazONvAGsAPjCfnP7ZORW1iy8KorvEz%2FjR81jMH8XTDIbUZOnUJqsqw1QRsO0%2Fk%2FTokBDSlmGwNnQuG4UEEW%2F7hECAVIPBZt%2BOVdzDYrJZP%2Fhnvh2%2BYjSy5DHN5i6XZUQNSZa6%2BrgKJTNCB62fkWujodg40rieJnFHaCQYMZyc7GlPLzC9fJv%2B91dLv5jLt0NvXWwCgF5lIXx1lQVt81EBrrvbP35VsEMXAigaJF4bpMICjrOn4TIrnFMW9VMOD3gMUGOqUB9n3JVvPwyW4hNUAmZosKiepOCfY6VprnwnuFBp9kJZ641rTd75rz34BRR%2B%2BFb%2FcTQj1bYSnexVx8IENwrzzp6fT%2BK7vOBct5AuFaaNZhzExoHDtfQFfy6PEebMurzsnL%2FOj%2FYd2M9fyxS1tJa%2BYsAMmxdqlOk6Tnviz1ByJuYhmv39It1qFVdRtE6MfVArCoTjmnOMlPEXRet3h4usr6KMA0u6ac&X-Amz-Signature=52a8536add130e5e5d54cc1afe75458f30fdcba12716ac4a6d488fc37b66417e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HSUHFML%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIF%2F%2FFb3zc8Tkl5B9rDyyXAaXHiVb2DkRY9LkGkNHUlMjAiEAi%2FOc%2Bn7Tfyn4rm1s134BA1fW4Nf6%2FQsORvDM2g4Z4QUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJPI9nXJ%2FRgHj1sgDyrcA04H%2B5U5uXfXyj%2BwYLX6voKdsOyfnql4b0lSCgY%2BBa%2BfZYGXhFz8XVcIxgpw4xmBLEYxlXuVYz5Bzn%2FrNqcPrrtZCwmIDCvkJ8%2FEpOG6afkyuU2ZyMuSyLfw6H3ZLO9b5T3guWow5xKEqAq9SvZVnPGkyl3LBijDk85SCyY7b9EubdXVucko5R%2FjrByqhe%2FIhBJlDQ1SLK8M52rv5QPBvf%2F%2B%2B8sOhgTy4sRbvaEak1Um%2Bq7XcLhdrLDNsJpAV0CPmCeu%2Fx7vk1ahaf0b%2F1Yo8gU07dz95LR4IatNUf%2FCDtM9U8DyW4PH3vtN3c7dbGs8EVJFKNlWs8WWGXYu1NJzrkSNy5idaZ1WTG3OSDLDqR1x00wKKMdzsHPiLPP7rgL1%2BazONvAGsAPjCfnP7ZORW1iy8KorvEz%2FjR81jMH8XTDIbUZOnUJqsqw1QRsO0%2Fk%2FTokBDSlmGwNnQuG4UEEW%2F7hECAVIPBZt%2BOVdzDYrJZP%2Fhnvh2%2BYjSy5DHN5i6XZUQNSZa6%2BrgKJTNCB62fkWujodg40rieJnFHaCQYMZyc7GlPLzC9fJv%2B91dLv5jLt0NvXWwCgF5lIXx1lQVt81EBrrvbP35VsEMXAigaJF4bpMICjrOn4TIrnFMW9VMOD3gMUGOqUB9n3JVvPwyW4hNUAmZosKiepOCfY6VprnwnuFBp9kJZ641rTd75rz34BRR%2B%2BFb%2FcTQj1bYSnexVx8IENwrzzp6fT%2BK7vOBct5AuFaaNZhzExoHDtfQFfy6PEebMurzsnL%2FOj%2FYd2M9fyxS1tJa%2BYsAMmxdqlOk6Tnviz1ByJuYhmv39It1qFVdRtE6MfVArCoTjmnOMlPEXRet3h4usr6KMA0u6ac&X-Amz-Signature=10c99117e2c77f28f6fd6cf116917274db7ade4c58caaa083464077cf376c0d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HSUHFML%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIF%2F%2FFb3zc8Tkl5B9rDyyXAaXHiVb2DkRY9LkGkNHUlMjAiEAi%2FOc%2Bn7Tfyn4rm1s134BA1fW4Nf6%2FQsORvDM2g4Z4QUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJPI9nXJ%2FRgHj1sgDyrcA04H%2B5U5uXfXyj%2BwYLX6voKdsOyfnql4b0lSCgY%2BBa%2BfZYGXhFz8XVcIxgpw4xmBLEYxlXuVYz5Bzn%2FrNqcPrrtZCwmIDCvkJ8%2FEpOG6afkyuU2ZyMuSyLfw6H3ZLO9b5T3guWow5xKEqAq9SvZVnPGkyl3LBijDk85SCyY7b9EubdXVucko5R%2FjrByqhe%2FIhBJlDQ1SLK8M52rv5QPBvf%2F%2B%2B8sOhgTy4sRbvaEak1Um%2Bq7XcLhdrLDNsJpAV0CPmCeu%2Fx7vk1ahaf0b%2F1Yo8gU07dz95LR4IatNUf%2FCDtM9U8DyW4PH3vtN3c7dbGs8EVJFKNlWs8WWGXYu1NJzrkSNy5idaZ1WTG3OSDLDqR1x00wKKMdzsHPiLPP7rgL1%2BazONvAGsAPjCfnP7ZORW1iy8KorvEz%2FjR81jMH8XTDIbUZOnUJqsqw1QRsO0%2Fk%2FTokBDSlmGwNnQuG4UEEW%2F7hECAVIPBZt%2BOVdzDYrJZP%2Fhnvh2%2BYjSy5DHN5i6XZUQNSZa6%2BrgKJTNCB62fkWujodg40rieJnFHaCQYMZyc7GlPLzC9fJv%2B91dLv5jLt0NvXWwCgF5lIXx1lQVt81EBrrvbP35VsEMXAigaJF4bpMICjrOn4TIrnFMW9VMOD3gMUGOqUB9n3JVvPwyW4hNUAmZosKiepOCfY6VprnwnuFBp9kJZ641rTd75rz34BRR%2B%2BFb%2FcTQj1bYSnexVx8IENwrzzp6fT%2BK7vOBct5AuFaaNZhzExoHDtfQFfy6PEebMurzsnL%2FOj%2FYd2M9fyxS1tJa%2BYsAMmxdqlOk6Tnviz1ByJuYhmv39It1qFVdRtE6MfVArCoTjmnOMlPEXRet3h4usr6KMA0u6ac&X-Amz-Signature=d7dbe0c961fd8f8a4b4a0d900a78df23e637ecdf927abd157ed045885a06d376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
