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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL6W3JKS%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvrkUcQ6NMNe9d8h0CaBZOpQHwrw7hAYpuNIZ6WBplKAiAAhzoQPrUeLxMMstF67faYHFgrulOLsfMLIEYgJdR9TSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3ryz3Oi1%2Ba%2BqKXQlKtwDNcvmUUJmAB95FRh%2Fx3%2FCdQcwwp6FBMxmE3WB7OC6xDZeUAe43pMP7VEeGS61PzMP77URm2xZf%2FLTsSonkJKpNaUl4nYF9A5PDZxYgxeBTcEdybK2nz63eppkqlQ0fS3m8jcpeGmwmJof1o1fProSgZZ7kI9wBAZXHP2%2Fg%2B%2F9TFpf6ugJeWCbwk%2BvtWXvaDA4StGncL%2BXC9KiTTW9ldWEnkKUrQQ9BH6%2BT350tY9M6c8I8kTrFkHskLsYzRsA6c%2B9SEPLsUTC14vSsCJovg8YNoQzJZWyLRCH93asyD2RZLXG3NK6GNQ1ZI6SHk8mtgCN1Xh%2B0tKUHLXyPW%2FxYAFkuJIOJtDU%2FQSI50wsaqOvRKywm5RqinddFufe9VIkGtt61ve3yXj0n9kxwc%2FUi1s6at584rW73wuenM2s%2Bau8rMPk%2FGSJZt2Wg9cTMNuoEdVaGJbH2s19fL7bB60da9z5cD9KGdV2xhZsN0KhSpb8nrjigOiSOVEvPOXtOUDQX%2FJGqrIYGlBJ1OQVzzs%2BHKyRkewUvJL45P%2Fk652Fn948QKhrH0RQhLr6bol3zjzBLHI4sce6wqhB%2FudhmUFNSmCiNCnatxVLuUfec71G%2FF6lkwzmH68d7kStMfisQKIw5o%2FbwgY6pgEl1P05WO2zuwqIyKIVjUjCKhweo2f5LL5vjM%2F409Z5%2Bm%2F1DELcGK6V3cV8KW0y33TGE5RMjNNqmTFWnyemsF4VUEzFx0Zca%2FzSsu%2FJcxcv%2BxTQyMliGgZepM5S2123sphOZ6E%2FBRRcigmuPGTou1K1xCt5JZDl8J1hkKpy4uaSmKt7v9RvjMJP9GTE%2BZxFTR3Vb6SvLimOO0o9U5dk7orGjNd2ERBy&X-Amz-Signature=471644d0798652117baceff5519f8ff16005680c91901d47d5681478836dc695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL6W3JKS%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvrkUcQ6NMNe9d8h0CaBZOpQHwrw7hAYpuNIZ6WBplKAiAAhzoQPrUeLxMMstF67faYHFgrulOLsfMLIEYgJdR9TSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3ryz3Oi1%2Ba%2BqKXQlKtwDNcvmUUJmAB95FRh%2Fx3%2FCdQcwwp6FBMxmE3WB7OC6xDZeUAe43pMP7VEeGS61PzMP77URm2xZf%2FLTsSonkJKpNaUl4nYF9A5PDZxYgxeBTcEdybK2nz63eppkqlQ0fS3m8jcpeGmwmJof1o1fProSgZZ7kI9wBAZXHP2%2Fg%2B%2F9TFpf6ugJeWCbwk%2BvtWXvaDA4StGncL%2BXC9KiTTW9ldWEnkKUrQQ9BH6%2BT350tY9M6c8I8kTrFkHskLsYzRsA6c%2B9SEPLsUTC14vSsCJovg8YNoQzJZWyLRCH93asyD2RZLXG3NK6GNQ1ZI6SHk8mtgCN1Xh%2B0tKUHLXyPW%2FxYAFkuJIOJtDU%2FQSI50wsaqOvRKywm5RqinddFufe9VIkGtt61ve3yXj0n9kxwc%2FUi1s6at584rW73wuenM2s%2Bau8rMPk%2FGSJZt2Wg9cTMNuoEdVaGJbH2s19fL7bB60da9z5cD9KGdV2xhZsN0KhSpb8nrjigOiSOVEvPOXtOUDQX%2FJGqrIYGlBJ1OQVzzs%2BHKyRkewUvJL45P%2Fk652Fn948QKhrH0RQhLr6bol3zjzBLHI4sce6wqhB%2FudhmUFNSmCiNCnatxVLuUfec71G%2FF6lkwzmH68d7kStMfisQKIw5o%2FbwgY6pgEl1P05WO2zuwqIyKIVjUjCKhweo2f5LL5vjM%2F409Z5%2Bm%2F1DELcGK6V3cV8KW0y33TGE5RMjNNqmTFWnyemsF4VUEzFx0Zca%2FzSsu%2FJcxcv%2BxTQyMliGgZepM5S2123sphOZ6E%2FBRRcigmuPGTou1K1xCt5JZDl8J1hkKpy4uaSmKt7v9RvjMJP9GTE%2BZxFTR3Vb6SvLimOO0o9U5dk7orGjNd2ERBy&X-Amz-Signature=f4833bf9f1bc605df913293e5b71b4e134fc2769b0c7709ab2e4842d243d2bdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL6W3JKS%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvrkUcQ6NMNe9d8h0CaBZOpQHwrw7hAYpuNIZ6WBplKAiAAhzoQPrUeLxMMstF67faYHFgrulOLsfMLIEYgJdR9TSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3ryz3Oi1%2Ba%2BqKXQlKtwDNcvmUUJmAB95FRh%2Fx3%2FCdQcwwp6FBMxmE3WB7OC6xDZeUAe43pMP7VEeGS61PzMP77URm2xZf%2FLTsSonkJKpNaUl4nYF9A5PDZxYgxeBTcEdybK2nz63eppkqlQ0fS3m8jcpeGmwmJof1o1fProSgZZ7kI9wBAZXHP2%2Fg%2B%2F9TFpf6ugJeWCbwk%2BvtWXvaDA4StGncL%2BXC9KiTTW9ldWEnkKUrQQ9BH6%2BT350tY9M6c8I8kTrFkHskLsYzRsA6c%2B9SEPLsUTC14vSsCJovg8YNoQzJZWyLRCH93asyD2RZLXG3NK6GNQ1ZI6SHk8mtgCN1Xh%2B0tKUHLXyPW%2FxYAFkuJIOJtDU%2FQSI50wsaqOvRKywm5RqinddFufe9VIkGtt61ve3yXj0n9kxwc%2FUi1s6at584rW73wuenM2s%2Bau8rMPk%2FGSJZt2Wg9cTMNuoEdVaGJbH2s19fL7bB60da9z5cD9KGdV2xhZsN0KhSpb8nrjigOiSOVEvPOXtOUDQX%2FJGqrIYGlBJ1OQVzzs%2BHKyRkewUvJL45P%2Fk652Fn948QKhrH0RQhLr6bol3zjzBLHI4sce6wqhB%2FudhmUFNSmCiNCnatxVLuUfec71G%2FF6lkwzmH68d7kStMfisQKIw5o%2FbwgY6pgEl1P05WO2zuwqIyKIVjUjCKhweo2f5LL5vjM%2F409Z5%2Bm%2F1DELcGK6V3cV8KW0y33TGE5RMjNNqmTFWnyemsF4VUEzFx0Zca%2FzSsu%2FJcxcv%2BxTQyMliGgZepM5S2123sphOZ6E%2FBRRcigmuPGTou1K1xCt5JZDl8J1hkKpy4uaSmKt7v9RvjMJP9GTE%2BZxFTR3Vb6SvLimOO0o9U5dk7orGjNd2ERBy&X-Amz-Signature=26470d8db0f7cccc65d73d2dcbf198b545592a5261435afcd1f7d9a60d9cbc13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL6W3JKS%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvrkUcQ6NMNe9d8h0CaBZOpQHwrw7hAYpuNIZ6WBplKAiAAhzoQPrUeLxMMstF67faYHFgrulOLsfMLIEYgJdR9TSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3ryz3Oi1%2Ba%2BqKXQlKtwDNcvmUUJmAB95FRh%2Fx3%2FCdQcwwp6FBMxmE3WB7OC6xDZeUAe43pMP7VEeGS61PzMP77URm2xZf%2FLTsSonkJKpNaUl4nYF9A5PDZxYgxeBTcEdybK2nz63eppkqlQ0fS3m8jcpeGmwmJof1o1fProSgZZ7kI9wBAZXHP2%2Fg%2B%2F9TFpf6ugJeWCbwk%2BvtWXvaDA4StGncL%2BXC9KiTTW9ldWEnkKUrQQ9BH6%2BT350tY9M6c8I8kTrFkHskLsYzRsA6c%2B9SEPLsUTC14vSsCJovg8YNoQzJZWyLRCH93asyD2RZLXG3NK6GNQ1ZI6SHk8mtgCN1Xh%2B0tKUHLXyPW%2FxYAFkuJIOJtDU%2FQSI50wsaqOvRKywm5RqinddFufe9VIkGtt61ve3yXj0n9kxwc%2FUi1s6at584rW73wuenM2s%2Bau8rMPk%2FGSJZt2Wg9cTMNuoEdVaGJbH2s19fL7bB60da9z5cD9KGdV2xhZsN0KhSpb8nrjigOiSOVEvPOXtOUDQX%2FJGqrIYGlBJ1OQVzzs%2BHKyRkewUvJL45P%2Fk652Fn948QKhrH0RQhLr6bol3zjzBLHI4sce6wqhB%2FudhmUFNSmCiNCnatxVLuUfec71G%2FF6lkwzmH68d7kStMfisQKIw5o%2FbwgY6pgEl1P05WO2zuwqIyKIVjUjCKhweo2f5LL5vjM%2F409Z5%2Bm%2F1DELcGK6V3cV8KW0y33TGE5RMjNNqmTFWnyemsF4VUEzFx0Zca%2FzSsu%2FJcxcv%2BxTQyMliGgZepM5S2123sphOZ6E%2FBRRcigmuPGTou1K1xCt5JZDl8J1hkKpy4uaSmKt7v9RvjMJP9GTE%2BZxFTR3Vb6SvLimOO0o9U5dk7orGjNd2ERBy&X-Amz-Signature=3aee99fb7e295680574745199681689c170ad487ab85cd2a6f4100ea081f09ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL6W3JKS%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvrkUcQ6NMNe9d8h0CaBZOpQHwrw7hAYpuNIZ6WBplKAiAAhzoQPrUeLxMMstF67faYHFgrulOLsfMLIEYgJdR9TSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3ryz3Oi1%2Ba%2BqKXQlKtwDNcvmUUJmAB95FRh%2Fx3%2FCdQcwwp6FBMxmE3WB7OC6xDZeUAe43pMP7VEeGS61PzMP77URm2xZf%2FLTsSonkJKpNaUl4nYF9A5PDZxYgxeBTcEdybK2nz63eppkqlQ0fS3m8jcpeGmwmJof1o1fProSgZZ7kI9wBAZXHP2%2Fg%2B%2F9TFpf6ugJeWCbwk%2BvtWXvaDA4StGncL%2BXC9KiTTW9ldWEnkKUrQQ9BH6%2BT350tY9M6c8I8kTrFkHskLsYzRsA6c%2B9SEPLsUTC14vSsCJovg8YNoQzJZWyLRCH93asyD2RZLXG3NK6GNQ1ZI6SHk8mtgCN1Xh%2B0tKUHLXyPW%2FxYAFkuJIOJtDU%2FQSI50wsaqOvRKywm5RqinddFufe9VIkGtt61ve3yXj0n9kxwc%2FUi1s6at584rW73wuenM2s%2Bau8rMPk%2FGSJZt2Wg9cTMNuoEdVaGJbH2s19fL7bB60da9z5cD9KGdV2xhZsN0KhSpb8nrjigOiSOVEvPOXtOUDQX%2FJGqrIYGlBJ1OQVzzs%2BHKyRkewUvJL45P%2Fk652Fn948QKhrH0RQhLr6bol3zjzBLHI4sce6wqhB%2FudhmUFNSmCiNCnatxVLuUfec71G%2FF6lkwzmH68d7kStMfisQKIw5o%2FbwgY6pgEl1P05WO2zuwqIyKIVjUjCKhweo2f5LL5vjM%2F409Z5%2Bm%2F1DELcGK6V3cV8KW0y33TGE5RMjNNqmTFWnyemsF4VUEzFx0Zca%2FzSsu%2FJcxcv%2BxTQyMliGgZepM5S2123sphOZ6E%2FBRRcigmuPGTou1K1xCt5JZDl8J1hkKpy4uaSmKt7v9RvjMJP9GTE%2BZxFTR3Vb6SvLimOO0o9U5dk7orGjNd2ERBy&X-Amz-Signature=3e7b6ae38830a023a1a86dc13c96b17acf685ad2ff0bbbd8e38eb69805d98225&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL6W3JKS%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvrkUcQ6NMNe9d8h0CaBZOpQHwrw7hAYpuNIZ6WBplKAiAAhzoQPrUeLxMMstF67faYHFgrulOLsfMLIEYgJdR9TSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3ryz3Oi1%2Ba%2BqKXQlKtwDNcvmUUJmAB95FRh%2Fx3%2FCdQcwwp6FBMxmE3WB7OC6xDZeUAe43pMP7VEeGS61PzMP77URm2xZf%2FLTsSonkJKpNaUl4nYF9A5PDZxYgxeBTcEdybK2nz63eppkqlQ0fS3m8jcpeGmwmJof1o1fProSgZZ7kI9wBAZXHP2%2Fg%2B%2F9TFpf6ugJeWCbwk%2BvtWXvaDA4StGncL%2BXC9KiTTW9ldWEnkKUrQQ9BH6%2BT350tY9M6c8I8kTrFkHskLsYzRsA6c%2B9SEPLsUTC14vSsCJovg8YNoQzJZWyLRCH93asyD2RZLXG3NK6GNQ1ZI6SHk8mtgCN1Xh%2B0tKUHLXyPW%2FxYAFkuJIOJtDU%2FQSI50wsaqOvRKywm5RqinddFufe9VIkGtt61ve3yXj0n9kxwc%2FUi1s6at584rW73wuenM2s%2Bau8rMPk%2FGSJZt2Wg9cTMNuoEdVaGJbH2s19fL7bB60da9z5cD9KGdV2xhZsN0KhSpb8nrjigOiSOVEvPOXtOUDQX%2FJGqrIYGlBJ1OQVzzs%2BHKyRkewUvJL45P%2Fk652Fn948QKhrH0RQhLr6bol3zjzBLHI4sce6wqhB%2FudhmUFNSmCiNCnatxVLuUfec71G%2FF6lkwzmH68d7kStMfisQKIw5o%2FbwgY6pgEl1P05WO2zuwqIyKIVjUjCKhweo2f5LL5vjM%2F409Z5%2Bm%2F1DELcGK6V3cV8KW0y33TGE5RMjNNqmTFWnyemsF4VUEzFx0Zca%2FzSsu%2FJcxcv%2BxTQyMliGgZepM5S2123sphOZ6E%2FBRRcigmuPGTou1K1xCt5JZDl8J1hkKpy4uaSmKt7v9RvjMJP9GTE%2BZxFTR3Vb6SvLimOO0o9U5dk7orGjNd2ERBy&X-Amz-Signature=8338bef0693dad6c56177ac2ba4da096e259cf70f369fb359410fcd057653637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL6W3JKS%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvrkUcQ6NMNe9d8h0CaBZOpQHwrw7hAYpuNIZ6WBplKAiAAhzoQPrUeLxMMstF67faYHFgrulOLsfMLIEYgJdR9TSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3ryz3Oi1%2Ba%2BqKXQlKtwDNcvmUUJmAB95FRh%2Fx3%2FCdQcwwp6FBMxmE3WB7OC6xDZeUAe43pMP7VEeGS61PzMP77URm2xZf%2FLTsSonkJKpNaUl4nYF9A5PDZxYgxeBTcEdybK2nz63eppkqlQ0fS3m8jcpeGmwmJof1o1fProSgZZ7kI9wBAZXHP2%2Fg%2B%2F9TFpf6ugJeWCbwk%2BvtWXvaDA4StGncL%2BXC9KiTTW9ldWEnkKUrQQ9BH6%2BT350tY9M6c8I8kTrFkHskLsYzRsA6c%2B9SEPLsUTC14vSsCJovg8YNoQzJZWyLRCH93asyD2RZLXG3NK6GNQ1ZI6SHk8mtgCN1Xh%2B0tKUHLXyPW%2FxYAFkuJIOJtDU%2FQSI50wsaqOvRKywm5RqinddFufe9VIkGtt61ve3yXj0n9kxwc%2FUi1s6at584rW73wuenM2s%2Bau8rMPk%2FGSJZt2Wg9cTMNuoEdVaGJbH2s19fL7bB60da9z5cD9KGdV2xhZsN0KhSpb8nrjigOiSOVEvPOXtOUDQX%2FJGqrIYGlBJ1OQVzzs%2BHKyRkewUvJL45P%2Fk652Fn948QKhrH0RQhLr6bol3zjzBLHI4sce6wqhB%2FudhmUFNSmCiNCnatxVLuUfec71G%2FF6lkwzmH68d7kStMfisQKIw5o%2FbwgY6pgEl1P05WO2zuwqIyKIVjUjCKhweo2f5LL5vjM%2F409Z5%2Bm%2F1DELcGK6V3cV8KW0y33TGE5RMjNNqmTFWnyemsF4VUEzFx0Zca%2FzSsu%2FJcxcv%2BxTQyMliGgZepM5S2123sphOZ6E%2FBRRcigmuPGTou1K1xCt5JZDl8J1hkKpy4uaSmKt7v9RvjMJP9GTE%2BZxFTR3Vb6SvLimOO0o9U5dk7orGjNd2ERBy&X-Amz-Signature=c2243a8ae5e6bde66c0b76889fe413bb8f5292d59886eeb646f0215abeeb5161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL6W3JKS%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvrkUcQ6NMNe9d8h0CaBZOpQHwrw7hAYpuNIZ6WBplKAiAAhzoQPrUeLxMMstF67faYHFgrulOLsfMLIEYgJdR9TSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3ryz3Oi1%2Ba%2BqKXQlKtwDNcvmUUJmAB95FRh%2Fx3%2FCdQcwwp6FBMxmE3WB7OC6xDZeUAe43pMP7VEeGS61PzMP77URm2xZf%2FLTsSonkJKpNaUl4nYF9A5PDZxYgxeBTcEdybK2nz63eppkqlQ0fS3m8jcpeGmwmJof1o1fProSgZZ7kI9wBAZXHP2%2Fg%2B%2F9TFpf6ugJeWCbwk%2BvtWXvaDA4StGncL%2BXC9KiTTW9ldWEnkKUrQQ9BH6%2BT350tY9M6c8I8kTrFkHskLsYzRsA6c%2B9SEPLsUTC14vSsCJovg8YNoQzJZWyLRCH93asyD2RZLXG3NK6GNQ1ZI6SHk8mtgCN1Xh%2B0tKUHLXyPW%2FxYAFkuJIOJtDU%2FQSI50wsaqOvRKywm5RqinddFufe9VIkGtt61ve3yXj0n9kxwc%2FUi1s6at584rW73wuenM2s%2Bau8rMPk%2FGSJZt2Wg9cTMNuoEdVaGJbH2s19fL7bB60da9z5cD9KGdV2xhZsN0KhSpb8nrjigOiSOVEvPOXtOUDQX%2FJGqrIYGlBJ1OQVzzs%2BHKyRkewUvJL45P%2Fk652Fn948QKhrH0RQhLr6bol3zjzBLHI4sce6wqhB%2FudhmUFNSmCiNCnatxVLuUfec71G%2FF6lkwzmH68d7kStMfisQKIw5o%2FbwgY6pgEl1P05WO2zuwqIyKIVjUjCKhweo2f5LL5vjM%2F409Z5%2Bm%2F1DELcGK6V3cV8KW0y33TGE5RMjNNqmTFWnyemsF4VUEzFx0Zca%2FzSsu%2FJcxcv%2BxTQyMliGgZepM5S2123sphOZ6E%2FBRRcigmuPGTou1K1xCt5JZDl8J1hkKpy4uaSmKt7v9RvjMJP9GTE%2BZxFTR3Vb6SvLimOO0o9U5dk7orGjNd2ERBy&X-Amz-Signature=0443aaed5d79edb5f11e21efaed069f420de7af323ae65f675e489f2480c9a28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
