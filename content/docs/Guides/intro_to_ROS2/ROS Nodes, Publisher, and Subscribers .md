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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTWIAUNU%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIGgq%2FxhXIuiJ8j%2FVPwuidcaBj694jsAIwHt5f3FtYEUaAiEAmg5G1wylf45BH9DmvDHm2PKC7Mttahsm4S1bXSMFo2wq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDEhwKp2utZaoq4V6FyrcA%2FNfBhTLIy2aBWiO3%2BDDZgTkudtgrmKHaUSoTjXgpemJ1TfmDBG%2FoRrlHebtqJAptOkOQqs0xgPstWrfiliF2tivEzo9YjRwMcQrn98BQJuz%2BYoSMtCLKRCtxePaQ1dmOhE2IgDUQyk9DnhUI8q45%2FHHO5vwlMCA9WuPdAPgT2wzvZhJjXJKVPXoaOLze1vu0IKb8hx9qiB3Tz3Dci%2F1LDxfbmGk5VbsOZXzpPj%2B%2BeQvknvjHObdVtaA9WpF0IXMuLYdm2UBsil80ne7MGne2xnIrPcr4t5IOqxEat0k6j%2FBnn%2Fc9tGjbqxhJWIVhe7ZyGvvEUnYGGqx0IU6di2y9xhWQCSh6oVUeTo3g0hzqp4%2FHipIj27xAgq%2Bjl%2BLnVGrs%2BQKPyHRBUjHYBrh5vcOiGV2YYQq7%2BSl9t%2FzGh%2FKzE2stzE%2FNEGQK7an0umbVQQbkHT3paT0dqYHKuK1142eRNZtZffMRktuQ%2FoOXq0vLbKkJjh39YwOy4UF2rJM%2BODir%2FUkpIDItw2GuQCgoCg7km0O5SF3L%2Bzbm6VSOMBZYvql90klLog6bccsbl9%2FijT72gjbI4XIDrwFRiBWCtd3%2FRUOpJqb45wTtANM8MAo8r4RhchEOA9ZujT2MYM5MIvYusIGOqUBW7tiR9KlbDbhb%2FdYKqSddubMJzVnuqx2%2Bwi86jtsT3xo8v7zZ00B8eZPBjVqDhQEF7cH34Y0vJpoDEjgYmrj0YLbZDrls9j9BmW2EBFW69mBB2qurn6uIMJqV5SKFFVIF%2BTzywGLlDG%2B2gCXRVxsR5lxtaj8C1AFbfCx28uI91ejpomkfE5ZK%2FrEqt6gNA9DOAcsWxkMXdU23OzlgNwtC4Cg45gM&X-Amz-Signature=16c43f9365999da903dc8362f93f88b03df3d0372e8928c90003a9268e3b5ad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTWIAUNU%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIGgq%2FxhXIuiJ8j%2FVPwuidcaBj694jsAIwHt5f3FtYEUaAiEAmg5G1wylf45BH9DmvDHm2PKC7Mttahsm4S1bXSMFo2wq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDEhwKp2utZaoq4V6FyrcA%2FNfBhTLIy2aBWiO3%2BDDZgTkudtgrmKHaUSoTjXgpemJ1TfmDBG%2FoRrlHebtqJAptOkOQqs0xgPstWrfiliF2tivEzo9YjRwMcQrn98BQJuz%2BYoSMtCLKRCtxePaQ1dmOhE2IgDUQyk9DnhUI8q45%2FHHO5vwlMCA9WuPdAPgT2wzvZhJjXJKVPXoaOLze1vu0IKb8hx9qiB3Tz3Dci%2F1LDxfbmGk5VbsOZXzpPj%2B%2BeQvknvjHObdVtaA9WpF0IXMuLYdm2UBsil80ne7MGne2xnIrPcr4t5IOqxEat0k6j%2FBnn%2Fc9tGjbqxhJWIVhe7ZyGvvEUnYGGqx0IU6di2y9xhWQCSh6oVUeTo3g0hzqp4%2FHipIj27xAgq%2Bjl%2BLnVGrs%2BQKPyHRBUjHYBrh5vcOiGV2YYQq7%2BSl9t%2FzGh%2FKzE2stzE%2FNEGQK7an0umbVQQbkHT3paT0dqYHKuK1142eRNZtZffMRktuQ%2FoOXq0vLbKkJjh39YwOy4UF2rJM%2BODir%2FUkpIDItw2GuQCgoCg7km0O5SF3L%2Bzbm6VSOMBZYvql90klLog6bccsbl9%2FijT72gjbI4XIDrwFRiBWCtd3%2FRUOpJqb45wTtANM8MAo8r4RhchEOA9ZujT2MYM5MIvYusIGOqUBW7tiR9KlbDbhb%2FdYKqSddubMJzVnuqx2%2Bwi86jtsT3xo8v7zZ00B8eZPBjVqDhQEF7cH34Y0vJpoDEjgYmrj0YLbZDrls9j9BmW2EBFW69mBB2qurn6uIMJqV5SKFFVIF%2BTzywGLlDG%2B2gCXRVxsR5lxtaj8C1AFbfCx28uI91ejpomkfE5ZK%2FrEqt6gNA9DOAcsWxkMXdU23OzlgNwtC4Cg45gM&X-Amz-Signature=a81eca9a9d9e246dd9f4ddcb2735cc36d2d1c9e297ea00eb81fc5456f4bf5763&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTWIAUNU%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIGgq%2FxhXIuiJ8j%2FVPwuidcaBj694jsAIwHt5f3FtYEUaAiEAmg5G1wylf45BH9DmvDHm2PKC7Mttahsm4S1bXSMFo2wq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDEhwKp2utZaoq4V6FyrcA%2FNfBhTLIy2aBWiO3%2BDDZgTkudtgrmKHaUSoTjXgpemJ1TfmDBG%2FoRrlHebtqJAptOkOQqs0xgPstWrfiliF2tivEzo9YjRwMcQrn98BQJuz%2BYoSMtCLKRCtxePaQ1dmOhE2IgDUQyk9DnhUI8q45%2FHHO5vwlMCA9WuPdAPgT2wzvZhJjXJKVPXoaOLze1vu0IKb8hx9qiB3Tz3Dci%2F1LDxfbmGk5VbsOZXzpPj%2B%2BeQvknvjHObdVtaA9WpF0IXMuLYdm2UBsil80ne7MGne2xnIrPcr4t5IOqxEat0k6j%2FBnn%2Fc9tGjbqxhJWIVhe7ZyGvvEUnYGGqx0IU6di2y9xhWQCSh6oVUeTo3g0hzqp4%2FHipIj27xAgq%2Bjl%2BLnVGrs%2BQKPyHRBUjHYBrh5vcOiGV2YYQq7%2BSl9t%2FzGh%2FKzE2stzE%2FNEGQK7an0umbVQQbkHT3paT0dqYHKuK1142eRNZtZffMRktuQ%2FoOXq0vLbKkJjh39YwOy4UF2rJM%2BODir%2FUkpIDItw2GuQCgoCg7km0O5SF3L%2Bzbm6VSOMBZYvql90klLog6bccsbl9%2FijT72gjbI4XIDrwFRiBWCtd3%2FRUOpJqb45wTtANM8MAo8r4RhchEOA9ZujT2MYM5MIvYusIGOqUBW7tiR9KlbDbhb%2FdYKqSddubMJzVnuqx2%2Bwi86jtsT3xo8v7zZ00B8eZPBjVqDhQEF7cH34Y0vJpoDEjgYmrj0YLbZDrls9j9BmW2EBFW69mBB2qurn6uIMJqV5SKFFVIF%2BTzywGLlDG%2B2gCXRVxsR5lxtaj8C1AFbfCx28uI91ejpomkfE5ZK%2FrEqt6gNA9DOAcsWxkMXdU23OzlgNwtC4Cg45gM&X-Amz-Signature=c098c3b1d325fe24aa5e1645cfc3dbbde1a34b3d9405e25efba635a6372ef494&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTWIAUNU%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIGgq%2FxhXIuiJ8j%2FVPwuidcaBj694jsAIwHt5f3FtYEUaAiEAmg5G1wylf45BH9DmvDHm2PKC7Mttahsm4S1bXSMFo2wq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDEhwKp2utZaoq4V6FyrcA%2FNfBhTLIy2aBWiO3%2BDDZgTkudtgrmKHaUSoTjXgpemJ1TfmDBG%2FoRrlHebtqJAptOkOQqs0xgPstWrfiliF2tivEzo9YjRwMcQrn98BQJuz%2BYoSMtCLKRCtxePaQ1dmOhE2IgDUQyk9DnhUI8q45%2FHHO5vwlMCA9WuPdAPgT2wzvZhJjXJKVPXoaOLze1vu0IKb8hx9qiB3Tz3Dci%2F1LDxfbmGk5VbsOZXzpPj%2B%2BeQvknvjHObdVtaA9WpF0IXMuLYdm2UBsil80ne7MGne2xnIrPcr4t5IOqxEat0k6j%2FBnn%2Fc9tGjbqxhJWIVhe7ZyGvvEUnYGGqx0IU6di2y9xhWQCSh6oVUeTo3g0hzqp4%2FHipIj27xAgq%2Bjl%2BLnVGrs%2BQKPyHRBUjHYBrh5vcOiGV2YYQq7%2BSl9t%2FzGh%2FKzE2stzE%2FNEGQK7an0umbVQQbkHT3paT0dqYHKuK1142eRNZtZffMRktuQ%2FoOXq0vLbKkJjh39YwOy4UF2rJM%2BODir%2FUkpIDItw2GuQCgoCg7km0O5SF3L%2Bzbm6VSOMBZYvql90klLog6bccsbl9%2FijT72gjbI4XIDrwFRiBWCtd3%2FRUOpJqb45wTtANM8MAo8r4RhchEOA9ZujT2MYM5MIvYusIGOqUBW7tiR9KlbDbhb%2FdYKqSddubMJzVnuqx2%2Bwi86jtsT3xo8v7zZ00B8eZPBjVqDhQEF7cH34Y0vJpoDEjgYmrj0YLbZDrls9j9BmW2EBFW69mBB2qurn6uIMJqV5SKFFVIF%2BTzywGLlDG%2B2gCXRVxsR5lxtaj8C1AFbfCx28uI91ejpomkfE5ZK%2FrEqt6gNA9DOAcsWxkMXdU23OzlgNwtC4Cg45gM&X-Amz-Signature=24b175607ed7087e9f438333fd8e4a182cad385d498bf6fec35ea3b1af4de6e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTWIAUNU%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIGgq%2FxhXIuiJ8j%2FVPwuidcaBj694jsAIwHt5f3FtYEUaAiEAmg5G1wylf45BH9DmvDHm2PKC7Mttahsm4S1bXSMFo2wq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDEhwKp2utZaoq4V6FyrcA%2FNfBhTLIy2aBWiO3%2BDDZgTkudtgrmKHaUSoTjXgpemJ1TfmDBG%2FoRrlHebtqJAptOkOQqs0xgPstWrfiliF2tivEzo9YjRwMcQrn98BQJuz%2BYoSMtCLKRCtxePaQ1dmOhE2IgDUQyk9DnhUI8q45%2FHHO5vwlMCA9WuPdAPgT2wzvZhJjXJKVPXoaOLze1vu0IKb8hx9qiB3Tz3Dci%2F1LDxfbmGk5VbsOZXzpPj%2B%2BeQvknvjHObdVtaA9WpF0IXMuLYdm2UBsil80ne7MGne2xnIrPcr4t5IOqxEat0k6j%2FBnn%2Fc9tGjbqxhJWIVhe7ZyGvvEUnYGGqx0IU6di2y9xhWQCSh6oVUeTo3g0hzqp4%2FHipIj27xAgq%2Bjl%2BLnVGrs%2BQKPyHRBUjHYBrh5vcOiGV2YYQq7%2BSl9t%2FzGh%2FKzE2stzE%2FNEGQK7an0umbVQQbkHT3paT0dqYHKuK1142eRNZtZffMRktuQ%2FoOXq0vLbKkJjh39YwOy4UF2rJM%2BODir%2FUkpIDItw2GuQCgoCg7km0O5SF3L%2Bzbm6VSOMBZYvql90klLog6bccsbl9%2FijT72gjbI4XIDrwFRiBWCtd3%2FRUOpJqb45wTtANM8MAo8r4RhchEOA9ZujT2MYM5MIvYusIGOqUBW7tiR9KlbDbhb%2FdYKqSddubMJzVnuqx2%2Bwi86jtsT3xo8v7zZ00B8eZPBjVqDhQEF7cH34Y0vJpoDEjgYmrj0YLbZDrls9j9BmW2EBFW69mBB2qurn6uIMJqV5SKFFVIF%2BTzywGLlDG%2B2gCXRVxsR5lxtaj8C1AFbfCx28uI91ejpomkfE5ZK%2FrEqt6gNA9DOAcsWxkMXdU23OzlgNwtC4Cg45gM&X-Amz-Signature=fba799acb18f72b5cc9b824703c760ecc70f547dedd4fb4239f4ce163117f246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTWIAUNU%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIGgq%2FxhXIuiJ8j%2FVPwuidcaBj694jsAIwHt5f3FtYEUaAiEAmg5G1wylf45BH9DmvDHm2PKC7Mttahsm4S1bXSMFo2wq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDEhwKp2utZaoq4V6FyrcA%2FNfBhTLIy2aBWiO3%2BDDZgTkudtgrmKHaUSoTjXgpemJ1TfmDBG%2FoRrlHebtqJAptOkOQqs0xgPstWrfiliF2tivEzo9YjRwMcQrn98BQJuz%2BYoSMtCLKRCtxePaQ1dmOhE2IgDUQyk9DnhUI8q45%2FHHO5vwlMCA9WuPdAPgT2wzvZhJjXJKVPXoaOLze1vu0IKb8hx9qiB3Tz3Dci%2F1LDxfbmGk5VbsOZXzpPj%2B%2BeQvknvjHObdVtaA9WpF0IXMuLYdm2UBsil80ne7MGne2xnIrPcr4t5IOqxEat0k6j%2FBnn%2Fc9tGjbqxhJWIVhe7ZyGvvEUnYGGqx0IU6di2y9xhWQCSh6oVUeTo3g0hzqp4%2FHipIj27xAgq%2Bjl%2BLnVGrs%2BQKPyHRBUjHYBrh5vcOiGV2YYQq7%2BSl9t%2FzGh%2FKzE2stzE%2FNEGQK7an0umbVQQbkHT3paT0dqYHKuK1142eRNZtZffMRktuQ%2FoOXq0vLbKkJjh39YwOy4UF2rJM%2BODir%2FUkpIDItw2GuQCgoCg7km0O5SF3L%2Bzbm6VSOMBZYvql90klLog6bccsbl9%2FijT72gjbI4XIDrwFRiBWCtd3%2FRUOpJqb45wTtANM8MAo8r4RhchEOA9ZujT2MYM5MIvYusIGOqUBW7tiR9KlbDbhb%2FdYKqSddubMJzVnuqx2%2Bwi86jtsT3xo8v7zZ00B8eZPBjVqDhQEF7cH34Y0vJpoDEjgYmrj0YLbZDrls9j9BmW2EBFW69mBB2qurn6uIMJqV5SKFFVIF%2BTzywGLlDG%2B2gCXRVxsR5lxtaj8C1AFbfCx28uI91ejpomkfE5ZK%2FrEqt6gNA9DOAcsWxkMXdU23OzlgNwtC4Cg45gM&X-Amz-Signature=36a3a2de02db5bf77131c23dbe6dd00e87ab45e51eabc6ed9f5ff8c00b1d8d19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTWIAUNU%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIGgq%2FxhXIuiJ8j%2FVPwuidcaBj694jsAIwHt5f3FtYEUaAiEAmg5G1wylf45BH9DmvDHm2PKC7Mttahsm4S1bXSMFo2wq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDEhwKp2utZaoq4V6FyrcA%2FNfBhTLIy2aBWiO3%2BDDZgTkudtgrmKHaUSoTjXgpemJ1TfmDBG%2FoRrlHebtqJAptOkOQqs0xgPstWrfiliF2tivEzo9YjRwMcQrn98BQJuz%2BYoSMtCLKRCtxePaQ1dmOhE2IgDUQyk9DnhUI8q45%2FHHO5vwlMCA9WuPdAPgT2wzvZhJjXJKVPXoaOLze1vu0IKb8hx9qiB3Tz3Dci%2F1LDxfbmGk5VbsOZXzpPj%2B%2BeQvknvjHObdVtaA9WpF0IXMuLYdm2UBsil80ne7MGne2xnIrPcr4t5IOqxEat0k6j%2FBnn%2Fc9tGjbqxhJWIVhe7ZyGvvEUnYGGqx0IU6di2y9xhWQCSh6oVUeTo3g0hzqp4%2FHipIj27xAgq%2Bjl%2BLnVGrs%2BQKPyHRBUjHYBrh5vcOiGV2YYQq7%2BSl9t%2FzGh%2FKzE2stzE%2FNEGQK7an0umbVQQbkHT3paT0dqYHKuK1142eRNZtZffMRktuQ%2FoOXq0vLbKkJjh39YwOy4UF2rJM%2BODir%2FUkpIDItw2GuQCgoCg7km0O5SF3L%2Bzbm6VSOMBZYvql90klLog6bccsbl9%2FijT72gjbI4XIDrwFRiBWCtd3%2FRUOpJqb45wTtANM8MAo8r4RhchEOA9ZujT2MYM5MIvYusIGOqUBW7tiR9KlbDbhb%2FdYKqSddubMJzVnuqx2%2Bwi86jtsT3xo8v7zZ00B8eZPBjVqDhQEF7cH34Y0vJpoDEjgYmrj0YLbZDrls9j9BmW2EBFW69mBB2qurn6uIMJqV5SKFFVIF%2BTzywGLlDG%2B2gCXRVxsR5lxtaj8C1AFbfCx28uI91ejpomkfE5ZK%2FrEqt6gNA9DOAcsWxkMXdU23OzlgNwtC4Cg45gM&X-Amz-Signature=1eb89d46f7dbb9b42a834943893ae02a6b465bea81d930863c9c630ebc9e8313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTWIAUNU%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIGgq%2FxhXIuiJ8j%2FVPwuidcaBj694jsAIwHt5f3FtYEUaAiEAmg5G1wylf45BH9DmvDHm2PKC7Mttahsm4S1bXSMFo2wq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDEhwKp2utZaoq4V6FyrcA%2FNfBhTLIy2aBWiO3%2BDDZgTkudtgrmKHaUSoTjXgpemJ1TfmDBG%2FoRrlHebtqJAptOkOQqs0xgPstWrfiliF2tivEzo9YjRwMcQrn98BQJuz%2BYoSMtCLKRCtxePaQ1dmOhE2IgDUQyk9DnhUI8q45%2FHHO5vwlMCA9WuPdAPgT2wzvZhJjXJKVPXoaOLze1vu0IKb8hx9qiB3Tz3Dci%2F1LDxfbmGk5VbsOZXzpPj%2B%2BeQvknvjHObdVtaA9WpF0IXMuLYdm2UBsil80ne7MGne2xnIrPcr4t5IOqxEat0k6j%2FBnn%2Fc9tGjbqxhJWIVhe7ZyGvvEUnYGGqx0IU6di2y9xhWQCSh6oVUeTo3g0hzqp4%2FHipIj27xAgq%2Bjl%2BLnVGrs%2BQKPyHRBUjHYBrh5vcOiGV2YYQq7%2BSl9t%2FzGh%2FKzE2stzE%2FNEGQK7an0umbVQQbkHT3paT0dqYHKuK1142eRNZtZffMRktuQ%2FoOXq0vLbKkJjh39YwOy4UF2rJM%2BODir%2FUkpIDItw2GuQCgoCg7km0O5SF3L%2Bzbm6VSOMBZYvql90klLog6bccsbl9%2FijT72gjbI4XIDrwFRiBWCtd3%2FRUOpJqb45wTtANM8MAo8r4RhchEOA9ZujT2MYM5MIvYusIGOqUBW7tiR9KlbDbhb%2FdYKqSddubMJzVnuqx2%2Bwi86jtsT3xo8v7zZ00B8eZPBjVqDhQEF7cH34Y0vJpoDEjgYmrj0YLbZDrls9j9BmW2EBFW69mBB2qurn6uIMJqV5SKFFVIF%2BTzywGLlDG%2B2gCXRVxsR5lxtaj8C1AFbfCx28uI91ejpomkfE5ZK%2FrEqt6gNA9DOAcsWxkMXdU23OzlgNwtC4Cg45gM&X-Amz-Signature=7098c1add72185dc7e6d1c8ada85d039bb54b1d645a3ed525180cdf359dad37e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
