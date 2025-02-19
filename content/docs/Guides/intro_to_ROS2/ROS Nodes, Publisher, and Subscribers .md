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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RLA2KSF%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyZj4xGT70eIqQaAF27ONC1idkT7Aom856jfdvXWLBRQIhAMXGXgxL%2FZDLhuua8KzdCdBXhKP1z1wdOaDAsq2a7aTsKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1VNAMFMCZx6TPqE8q3AO7uLwTjMbhJb5TrdaIDN84p8VIP%2B7N2ULgst%2BGot%2FzLVWiCr80wYt1jIzhw7%2BpuzHvV3JteMDFC3w5JVcQTG%2Bk3eA3KaI739MPs3rsBRq38btu2uIZS95HmTlBjSppBoycQ8pXrqqgFzRq%2FQiitISluR98MKM2%2FVwQyKX5ulmWp0ewMxEd%2BLyrRcDzl84YlDzdoAoHnrQwx33dYE8NegqewXYGNeO14mIZYFgrssFpx3WfoSEhlxW02dYf5h2Z714pSp39%2BGv9QGmDVgVRLrqRSwscJvX3Iv%2FvZS5bQHAY3OcZEC2JLKLHDJwmKyHP6%2B%2B%2FrnCKs9LPtZ3W57LPgsJNm5xbbxlY5iKK3Vs%2FmzziBN%2FkZ4pR3ckuIh2Agy4ykrYnixyqtObCjWEX4Qm45TE5pjnABGKYEhqh6KVDd5pLiV9ng3jjjoKbLKMESLLK8SBeZMBhK0%2Fpt3lYnBRD2u6ssmoqQDLOt%2Fw7oqiy%2FDQNHoKw9MvCEfCPqQi0zY5QasllHeg163k2ecX%2Bn5kEJNkkitOhOQ5BxZVNXbw3AGyaLMivmmYWHpLP6ecN%2FsrZ%2BcPRgidVUDaTl5KVky5L0jEXC81DX%2FnlFwQ9fVQln4yPKBSJqefAUf5sG842FDDY7ti9BjqkAfF%2FHZSz%2FVp1ko18CVKeZyo7PZu63rFEWurcTBrMRq8d%2Bagrw%2FTKE4Bmk%2FlNUnfCgUwaVpruIBx0CyfpMojDobOYyxz6qqu2p3WIYBRUk%2F3iZ%2BAlF%2BdkAcaMi34Hm0L3JObZUHT8iaLtTIN%2BnXP3QrlClRble9g1wxwA0XUTxjq94ctopEauN6t85%2BOPBxDhZJYiyLLQeKk6XJXJEJ45B7cxXrnF&X-Amz-Signature=2190fa088b542668c3d41dd8c9690dbf01a3933f3eb36d41b9c3ce60af6ba378&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RLA2KSF%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyZj4xGT70eIqQaAF27ONC1idkT7Aom856jfdvXWLBRQIhAMXGXgxL%2FZDLhuua8KzdCdBXhKP1z1wdOaDAsq2a7aTsKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1VNAMFMCZx6TPqE8q3AO7uLwTjMbhJb5TrdaIDN84p8VIP%2B7N2ULgst%2BGot%2FzLVWiCr80wYt1jIzhw7%2BpuzHvV3JteMDFC3w5JVcQTG%2Bk3eA3KaI739MPs3rsBRq38btu2uIZS95HmTlBjSppBoycQ8pXrqqgFzRq%2FQiitISluR98MKM2%2FVwQyKX5ulmWp0ewMxEd%2BLyrRcDzl84YlDzdoAoHnrQwx33dYE8NegqewXYGNeO14mIZYFgrssFpx3WfoSEhlxW02dYf5h2Z714pSp39%2BGv9QGmDVgVRLrqRSwscJvX3Iv%2FvZS5bQHAY3OcZEC2JLKLHDJwmKyHP6%2B%2B%2FrnCKs9LPtZ3W57LPgsJNm5xbbxlY5iKK3Vs%2FmzziBN%2FkZ4pR3ckuIh2Agy4ykrYnixyqtObCjWEX4Qm45TE5pjnABGKYEhqh6KVDd5pLiV9ng3jjjoKbLKMESLLK8SBeZMBhK0%2Fpt3lYnBRD2u6ssmoqQDLOt%2Fw7oqiy%2FDQNHoKw9MvCEfCPqQi0zY5QasllHeg163k2ecX%2Bn5kEJNkkitOhOQ5BxZVNXbw3AGyaLMivmmYWHpLP6ecN%2FsrZ%2BcPRgidVUDaTl5KVky5L0jEXC81DX%2FnlFwQ9fVQln4yPKBSJqefAUf5sG842FDDY7ti9BjqkAfF%2FHZSz%2FVp1ko18CVKeZyo7PZu63rFEWurcTBrMRq8d%2Bagrw%2FTKE4Bmk%2FlNUnfCgUwaVpruIBx0CyfpMojDobOYyxz6qqu2p3WIYBRUk%2F3iZ%2BAlF%2BdkAcaMi34Hm0L3JObZUHT8iaLtTIN%2BnXP3QrlClRble9g1wxwA0XUTxjq94ctopEauN6t85%2BOPBxDhZJYiyLLQeKk6XJXJEJ45B7cxXrnF&X-Amz-Signature=c45152c4e8a4dc55d9e8b8b6068d8181d491aa708cfedf14e755041e4004c92f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RLA2KSF%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyZj4xGT70eIqQaAF27ONC1idkT7Aom856jfdvXWLBRQIhAMXGXgxL%2FZDLhuua8KzdCdBXhKP1z1wdOaDAsq2a7aTsKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1VNAMFMCZx6TPqE8q3AO7uLwTjMbhJb5TrdaIDN84p8VIP%2B7N2ULgst%2BGot%2FzLVWiCr80wYt1jIzhw7%2BpuzHvV3JteMDFC3w5JVcQTG%2Bk3eA3KaI739MPs3rsBRq38btu2uIZS95HmTlBjSppBoycQ8pXrqqgFzRq%2FQiitISluR98MKM2%2FVwQyKX5ulmWp0ewMxEd%2BLyrRcDzl84YlDzdoAoHnrQwx33dYE8NegqewXYGNeO14mIZYFgrssFpx3WfoSEhlxW02dYf5h2Z714pSp39%2BGv9QGmDVgVRLrqRSwscJvX3Iv%2FvZS5bQHAY3OcZEC2JLKLHDJwmKyHP6%2B%2B%2FrnCKs9LPtZ3W57LPgsJNm5xbbxlY5iKK3Vs%2FmzziBN%2FkZ4pR3ckuIh2Agy4ykrYnixyqtObCjWEX4Qm45TE5pjnABGKYEhqh6KVDd5pLiV9ng3jjjoKbLKMESLLK8SBeZMBhK0%2Fpt3lYnBRD2u6ssmoqQDLOt%2Fw7oqiy%2FDQNHoKw9MvCEfCPqQi0zY5QasllHeg163k2ecX%2Bn5kEJNkkitOhOQ5BxZVNXbw3AGyaLMivmmYWHpLP6ecN%2FsrZ%2BcPRgidVUDaTl5KVky5L0jEXC81DX%2FnlFwQ9fVQln4yPKBSJqefAUf5sG842FDDY7ti9BjqkAfF%2FHZSz%2FVp1ko18CVKeZyo7PZu63rFEWurcTBrMRq8d%2Bagrw%2FTKE4Bmk%2FlNUnfCgUwaVpruIBx0CyfpMojDobOYyxz6qqu2p3WIYBRUk%2F3iZ%2BAlF%2BdkAcaMi34Hm0L3JObZUHT8iaLtTIN%2BnXP3QrlClRble9g1wxwA0XUTxjq94ctopEauN6t85%2BOPBxDhZJYiyLLQeKk6XJXJEJ45B7cxXrnF&X-Amz-Signature=ab4872ed5cfa70c112f4d629f1f333e1982e225ad87a4b3a5a4ab6ee4a403a67&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RLA2KSF%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyZj4xGT70eIqQaAF27ONC1idkT7Aom856jfdvXWLBRQIhAMXGXgxL%2FZDLhuua8KzdCdBXhKP1z1wdOaDAsq2a7aTsKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1VNAMFMCZx6TPqE8q3AO7uLwTjMbhJb5TrdaIDN84p8VIP%2B7N2ULgst%2BGot%2FzLVWiCr80wYt1jIzhw7%2BpuzHvV3JteMDFC3w5JVcQTG%2Bk3eA3KaI739MPs3rsBRq38btu2uIZS95HmTlBjSppBoycQ8pXrqqgFzRq%2FQiitISluR98MKM2%2FVwQyKX5ulmWp0ewMxEd%2BLyrRcDzl84YlDzdoAoHnrQwx33dYE8NegqewXYGNeO14mIZYFgrssFpx3WfoSEhlxW02dYf5h2Z714pSp39%2BGv9QGmDVgVRLrqRSwscJvX3Iv%2FvZS5bQHAY3OcZEC2JLKLHDJwmKyHP6%2B%2B%2FrnCKs9LPtZ3W57LPgsJNm5xbbxlY5iKK3Vs%2FmzziBN%2FkZ4pR3ckuIh2Agy4ykrYnixyqtObCjWEX4Qm45TE5pjnABGKYEhqh6KVDd5pLiV9ng3jjjoKbLKMESLLK8SBeZMBhK0%2Fpt3lYnBRD2u6ssmoqQDLOt%2Fw7oqiy%2FDQNHoKw9MvCEfCPqQi0zY5QasllHeg163k2ecX%2Bn5kEJNkkitOhOQ5BxZVNXbw3AGyaLMivmmYWHpLP6ecN%2FsrZ%2BcPRgidVUDaTl5KVky5L0jEXC81DX%2FnlFwQ9fVQln4yPKBSJqefAUf5sG842FDDY7ti9BjqkAfF%2FHZSz%2FVp1ko18CVKeZyo7PZu63rFEWurcTBrMRq8d%2Bagrw%2FTKE4Bmk%2FlNUnfCgUwaVpruIBx0CyfpMojDobOYyxz6qqu2p3WIYBRUk%2F3iZ%2BAlF%2BdkAcaMi34Hm0L3JObZUHT8iaLtTIN%2BnXP3QrlClRble9g1wxwA0XUTxjq94ctopEauN6t85%2BOPBxDhZJYiyLLQeKk6XJXJEJ45B7cxXrnF&X-Amz-Signature=3bba36cf353ff660a48f4806d44ff6ac3516b2b97138ee11de4f9a6d5403ee37&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RLA2KSF%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyZj4xGT70eIqQaAF27ONC1idkT7Aom856jfdvXWLBRQIhAMXGXgxL%2FZDLhuua8KzdCdBXhKP1z1wdOaDAsq2a7aTsKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1VNAMFMCZx6TPqE8q3AO7uLwTjMbhJb5TrdaIDN84p8VIP%2B7N2ULgst%2BGot%2FzLVWiCr80wYt1jIzhw7%2BpuzHvV3JteMDFC3w5JVcQTG%2Bk3eA3KaI739MPs3rsBRq38btu2uIZS95HmTlBjSppBoycQ8pXrqqgFzRq%2FQiitISluR98MKM2%2FVwQyKX5ulmWp0ewMxEd%2BLyrRcDzl84YlDzdoAoHnrQwx33dYE8NegqewXYGNeO14mIZYFgrssFpx3WfoSEhlxW02dYf5h2Z714pSp39%2BGv9QGmDVgVRLrqRSwscJvX3Iv%2FvZS5bQHAY3OcZEC2JLKLHDJwmKyHP6%2B%2B%2FrnCKs9LPtZ3W57LPgsJNm5xbbxlY5iKK3Vs%2FmzziBN%2FkZ4pR3ckuIh2Agy4ykrYnixyqtObCjWEX4Qm45TE5pjnABGKYEhqh6KVDd5pLiV9ng3jjjoKbLKMESLLK8SBeZMBhK0%2Fpt3lYnBRD2u6ssmoqQDLOt%2Fw7oqiy%2FDQNHoKw9MvCEfCPqQi0zY5QasllHeg163k2ecX%2Bn5kEJNkkitOhOQ5BxZVNXbw3AGyaLMivmmYWHpLP6ecN%2FsrZ%2BcPRgidVUDaTl5KVky5L0jEXC81DX%2FnlFwQ9fVQln4yPKBSJqefAUf5sG842FDDY7ti9BjqkAfF%2FHZSz%2FVp1ko18CVKeZyo7PZu63rFEWurcTBrMRq8d%2Bagrw%2FTKE4Bmk%2FlNUnfCgUwaVpruIBx0CyfpMojDobOYyxz6qqu2p3WIYBRUk%2F3iZ%2BAlF%2BdkAcaMi34Hm0L3JObZUHT8iaLtTIN%2BnXP3QrlClRble9g1wxwA0XUTxjq94ctopEauN6t85%2BOPBxDhZJYiyLLQeKk6XJXJEJ45B7cxXrnF&X-Amz-Signature=a5cfae774026e028bbfbfafe8ef8193eaa93165801f226af5810cf9af8f0feca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RLA2KSF%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyZj4xGT70eIqQaAF27ONC1idkT7Aom856jfdvXWLBRQIhAMXGXgxL%2FZDLhuua8KzdCdBXhKP1z1wdOaDAsq2a7aTsKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1VNAMFMCZx6TPqE8q3AO7uLwTjMbhJb5TrdaIDN84p8VIP%2B7N2ULgst%2BGot%2FzLVWiCr80wYt1jIzhw7%2BpuzHvV3JteMDFC3w5JVcQTG%2Bk3eA3KaI739MPs3rsBRq38btu2uIZS95HmTlBjSppBoycQ8pXrqqgFzRq%2FQiitISluR98MKM2%2FVwQyKX5ulmWp0ewMxEd%2BLyrRcDzl84YlDzdoAoHnrQwx33dYE8NegqewXYGNeO14mIZYFgrssFpx3WfoSEhlxW02dYf5h2Z714pSp39%2BGv9QGmDVgVRLrqRSwscJvX3Iv%2FvZS5bQHAY3OcZEC2JLKLHDJwmKyHP6%2B%2B%2FrnCKs9LPtZ3W57LPgsJNm5xbbxlY5iKK3Vs%2FmzziBN%2FkZ4pR3ckuIh2Agy4ykrYnixyqtObCjWEX4Qm45TE5pjnABGKYEhqh6KVDd5pLiV9ng3jjjoKbLKMESLLK8SBeZMBhK0%2Fpt3lYnBRD2u6ssmoqQDLOt%2Fw7oqiy%2FDQNHoKw9MvCEfCPqQi0zY5QasllHeg163k2ecX%2Bn5kEJNkkitOhOQ5BxZVNXbw3AGyaLMivmmYWHpLP6ecN%2FsrZ%2BcPRgidVUDaTl5KVky5L0jEXC81DX%2FnlFwQ9fVQln4yPKBSJqefAUf5sG842FDDY7ti9BjqkAfF%2FHZSz%2FVp1ko18CVKeZyo7PZu63rFEWurcTBrMRq8d%2Bagrw%2FTKE4Bmk%2FlNUnfCgUwaVpruIBx0CyfpMojDobOYyxz6qqu2p3WIYBRUk%2F3iZ%2BAlF%2BdkAcaMi34Hm0L3JObZUHT8iaLtTIN%2BnXP3QrlClRble9g1wxwA0XUTxjq94ctopEauN6t85%2BOPBxDhZJYiyLLQeKk6XJXJEJ45B7cxXrnF&X-Amz-Signature=9b523fede1f630b4c3b9cfee8f6ccd7c1b909bc27673d5162f709f602048ab06&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RLA2KSF%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyZj4xGT70eIqQaAF27ONC1idkT7Aom856jfdvXWLBRQIhAMXGXgxL%2FZDLhuua8KzdCdBXhKP1z1wdOaDAsq2a7aTsKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1VNAMFMCZx6TPqE8q3AO7uLwTjMbhJb5TrdaIDN84p8VIP%2B7N2ULgst%2BGot%2FzLVWiCr80wYt1jIzhw7%2BpuzHvV3JteMDFC3w5JVcQTG%2Bk3eA3KaI739MPs3rsBRq38btu2uIZS95HmTlBjSppBoycQ8pXrqqgFzRq%2FQiitISluR98MKM2%2FVwQyKX5ulmWp0ewMxEd%2BLyrRcDzl84YlDzdoAoHnrQwx33dYE8NegqewXYGNeO14mIZYFgrssFpx3WfoSEhlxW02dYf5h2Z714pSp39%2BGv9QGmDVgVRLrqRSwscJvX3Iv%2FvZS5bQHAY3OcZEC2JLKLHDJwmKyHP6%2B%2B%2FrnCKs9LPtZ3W57LPgsJNm5xbbxlY5iKK3Vs%2FmzziBN%2FkZ4pR3ckuIh2Agy4ykrYnixyqtObCjWEX4Qm45TE5pjnABGKYEhqh6KVDd5pLiV9ng3jjjoKbLKMESLLK8SBeZMBhK0%2Fpt3lYnBRD2u6ssmoqQDLOt%2Fw7oqiy%2FDQNHoKw9MvCEfCPqQi0zY5QasllHeg163k2ecX%2Bn5kEJNkkitOhOQ5BxZVNXbw3AGyaLMivmmYWHpLP6ecN%2FsrZ%2BcPRgidVUDaTl5KVky5L0jEXC81DX%2FnlFwQ9fVQln4yPKBSJqefAUf5sG842FDDY7ti9BjqkAfF%2FHZSz%2FVp1ko18CVKeZyo7PZu63rFEWurcTBrMRq8d%2Bagrw%2FTKE4Bmk%2FlNUnfCgUwaVpruIBx0CyfpMojDobOYyxz6qqu2p3WIYBRUk%2F3iZ%2BAlF%2BdkAcaMi34Hm0L3JObZUHT8iaLtTIN%2BnXP3QrlClRble9g1wxwA0XUTxjq94ctopEauN6t85%2BOPBxDhZJYiyLLQeKk6XJXJEJ45B7cxXrnF&X-Amz-Signature=a20ca53d767f187637671dbd3ccd4a00fea067796949da4ed49ca5262b900bda&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RLA2KSF%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyZj4xGT70eIqQaAF27ONC1idkT7Aom856jfdvXWLBRQIhAMXGXgxL%2FZDLhuua8KzdCdBXhKP1z1wdOaDAsq2a7aTsKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1VNAMFMCZx6TPqE8q3AO7uLwTjMbhJb5TrdaIDN84p8VIP%2B7N2ULgst%2BGot%2FzLVWiCr80wYt1jIzhw7%2BpuzHvV3JteMDFC3w5JVcQTG%2Bk3eA3KaI739MPs3rsBRq38btu2uIZS95HmTlBjSppBoycQ8pXrqqgFzRq%2FQiitISluR98MKM2%2FVwQyKX5ulmWp0ewMxEd%2BLyrRcDzl84YlDzdoAoHnrQwx33dYE8NegqewXYGNeO14mIZYFgrssFpx3WfoSEhlxW02dYf5h2Z714pSp39%2BGv9QGmDVgVRLrqRSwscJvX3Iv%2FvZS5bQHAY3OcZEC2JLKLHDJwmKyHP6%2B%2B%2FrnCKs9LPtZ3W57LPgsJNm5xbbxlY5iKK3Vs%2FmzziBN%2FkZ4pR3ckuIh2Agy4ykrYnixyqtObCjWEX4Qm45TE5pjnABGKYEhqh6KVDd5pLiV9ng3jjjoKbLKMESLLK8SBeZMBhK0%2Fpt3lYnBRD2u6ssmoqQDLOt%2Fw7oqiy%2FDQNHoKw9MvCEfCPqQi0zY5QasllHeg163k2ecX%2Bn5kEJNkkitOhOQ5BxZVNXbw3AGyaLMivmmYWHpLP6ecN%2FsrZ%2BcPRgidVUDaTl5KVky5L0jEXC81DX%2FnlFwQ9fVQln4yPKBSJqefAUf5sG842FDDY7ti9BjqkAfF%2FHZSz%2FVp1ko18CVKeZyo7PZu63rFEWurcTBrMRq8d%2Bagrw%2FTKE4Bmk%2FlNUnfCgUwaVpruIBx0CyfpMojDobOYyxz6qqu2p3WIYBRUk%2F3iZ%2BAlF%2BdkAcaMi34Hm0L3JObZUHT8iaLtTIN%2BnXP3QrlClRble9g1wxwA0XUTxjq94ctopEauN6t85%2BOPBxDhZJYiyLLQeKk6XJXJEJ45B7cxXrnF&X-Amz-Signature=16256e76befba6ac59c0c040fd3e424cab2cf40762cb512480c004b96d3b8ceb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
