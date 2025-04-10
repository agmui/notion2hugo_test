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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LAXVZKK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDrLPOJxwPs1zb%2FkL3piZL1v5uTICVdgjgtOJJ9SJ%2BCUgIgN3Um7TXkfj7iZ0sertE5Ngu%2FjOg%2FPbZWtUstGbK0sc8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAiOiKQbhNZmh%2FObSrcA6H0N2wtEgU85gcO7F6aXIXECkgHSt0YLyTsM9wIckR5vKqVNeeBzXCUfFomQ84ZoECjG%2FbGldoNSz9jrYd7xV%2BnQuaEf0PgQpc8%2BfywqXQH9KnL6aUSLL9062NbWpWNv45okDASIPGxRFSal3jxowwQ04a9MOvAaB612RMfsYbrTiX3hdP0t14jLE0clPKNJe8INc7UVKztOI4sEJtgg5hKopIxygdHx1UpBs0xopKhYEWoW3coNjuoIneaSy2mzdsKU1%2BL94SvxneDRl84xgVvT5Uu27qs6twgs4XsunFvs%2B%2FCyjN9WsF0yeUiSwZS44mMwGI2m4H6gfCubfGdz9DtgHlq4BipC9U%2FtcBjUfQPbSwg4QUvSDMcrXI%2F%2B2zk5mxpME7XmlJXYESGmpwG9bB2e1ZPYy8v0qvZSfdEaSlpJ9TGxZUiCVoh%2BDRMFa3oLaUmKQNKxb3VfnHIf%2BZC8CUtygwoEBOEapVcWs8gxZDt%2BVTJq9b%2FT2NLCdT0U6OBdOOZyfehCJHA7CILMF%2F%2BzR5M0RAySpNMjo6Eonmo7r97ijX9T1oqTVkfI2we4EzjTIeZSkewOq6x6C4lyFXYH66fjBWU44eNweEoFRjMKygVJ4CVwW55uqpVllHCMPvb3b8GOqUByAV2FTWkfFfcPy06DmhpxS3C0%2Flq4HQVoB%2BNf6iWVCpuD7XjbP86U865Gs0JuJ52v8iMlZd69dAlxkdM45RqQxIKdw42VY72TV%2BIwe6q%2FQoSdAPnKgmrqRYtgMklfioqyjaZ%2Bva0cy6rAJfsElFnMR2PKAK6s7P%2F%2BG4TVPDnNaxH00grSPgOj9edEeUBPvhdO0YMrLWFhv2PWUDo7x3TOfItpw94&X-Amz-Signature=6d6b2a5af58bd83685063be1cab7d2178da9ac9bf415eda30bca77985ca6debd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LAXVZKK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDrLPOJxwPs1zb%2FkL3piZL1v5uTICVdgjgtOJJ9SJ%2BCUgIgN3Um7TXkfj7iZ0sertE5Ngu%2FjOg%2FPbZWtUstGbK0sc8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAiOiKQbhNZmh%2FObSrcA6H0N2wtEgU85gcO7F6aXIXECkgHSt0YLyTsM9wIckR5vKqVNeeBzXCUfFomQ84ZoECjG%2FbGldoNSz9jrYd7xV%2BnQuaEf0PgQpc8%2BfywqXQH9KnL6aUSLL9062NbWpWNv45okDASIPGxRFSal3jxowwQ04a9MOvAaB612RMfsYbrTiX3hdP0t14jLE0clPKNJe8INc7UVKztOI4sEJtgg5hKopIxygdHx1UpBs0xopKhYEWoW3coNjuoIneaSy2mzdsKU1%2BL94SvxneDRl84xgVvT5Uu27qs6twgs4XsunFvs%2B%2FCyjN9WsF0yeUiSwZS44mMwGI2m4H6gfCubfGdz9DtgHlq4BipC9U%2FtcBjUfQPbSwg4QUvSDMcrXI%2F%2B2zk5mxpME7XmlJXYESGmpwG9bB2e1ZPYy8v0qvZSfdEaSlpJ9TGxZUiCVoh%2BDRMFa3oLaUmKQNKxb3VfnHIf%2BZC8CUtygwoEBOEapVcWs8gxZDt%2BVTJq9b%2FT2NLCdT0U6OBdOOZyfehCJHA7CILMF%2F%2BzR5M0RAySpNMjo6Eonmo7r97ijX9T1oqTVkfI2we4EzjTIeZSkewOq6x6C4lyFXYH66fjBWU44eNweEoFRjMKygVJ4CVwW55uqpVllHCMPvb3b8GOqUByAV2FTWkfFfcPy06DmhpxS3C0%2Flq4HQVoB%2BNf6iWVCpuD7XjbP86U865Gs0JuJ52v8iMlZd69dAlxkdM45RqQxIKdw42VY72TV%2BIwe6q%2FQoSdAPnKgmrqRYtgMklfioqyjaZ%2Bva0cy6rAJfsElFnMR2PKAK6s7P%2F%2BG4TVPDnNaxH00grSPgOj9edEeUBPvhdO0YMrLWFhv2PWUDo7x3TOfItpw94&X-Amz-Signature=db5411a09f1ec49d6646b0c61ac381ca9f1ce75cc495493d47fc523a8761c5be&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LAXVZKK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDrLPOJxwPs1zb%2FkL3piZL1v5uTICVdgjgtOJJ9SJ%2BCUgIgN3Um7TXkfj7iZ0sertE5Ngu%2FjOg%2FPbZWtUstGbK0sc8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAiOiKQbhNZmh%2FObSrcA6H0N2wtEgU85gcO7F6aXIXECkgHSt0YLyTsM9wIckR5vKqVNeeBzXCUfFomQ84ZoECjG%2FbGldoNSz9jrYd7xV%2BnQuaEf0PgQpc8%2BfywqXQH9KnL6aUSLL9062NbWpWNv45okDASIPGxRFSal3jxowwQ04a9MOvAaB612RMfsYbrTiX3hdP0t14jLE0clPKNJe8INc7UVKztOI4sEJtgg5hKopIxygdHx1UpBs0xopKhYEWoW3coNjuoIneaSy2mzdsKU1%2BL94SvxneDRl84xgVvT5Uu27qs6twgs4XsunFvs%2B%2FCyjN9WsF0yeUiSwZS44mMwGI2m4H6gfCubfGdz9DtgHlq4BipC9U%2FtcBjUfQPbSwg4QUvSDMcrXI%2F%2B2zk5mxpME7XmlJXYESGmpwG9bB2e1ZPYy8v0qvZSfdEaSlpJ9TGxZUiCVoh%2BDRMFa3oLaUmKQNKxb3VfnHIf%2BZC8CUtygwoEBOEapVcWs8gxZDt%2BVTJq9b%2FT2NLCdT0U6OBdOOZyfehCJHA7CILMF%2F%2BzR5M0RAySpNMjo6Eonmo7r97ijX9T1oqTVkfI2we4EzjTIeZSkewOq6x6C4lyFXYH66fjBWU44eNweEoFRjMKygVJ4CVwW55uqpVllHCMPvb3b8GOqUByAV2FTWkfFfcPy06DmhpxS3C0%2Flq4HQVoB%2BNf6iWVCpuD7XjbP86U865Gs0JuJ52v8iMlZd69dAlxkdM45RqQxIKdw42VY72TV%2BIwe6q%2FQoSdAPnKgmrqRYtgMklfioqyjaZ%2Bva0cy6rAJfsElFnMR2PKAK6s7P%2F%2BG4TVPDnNaxH00grSPgOj9edEeUBPvhdO0YMrLWFhv2PWUDo7x3TOfItpw94&X-Amz-Signature=fcb402a4fc3eba1929311ea32a27e3020e29d0198b454e10f279bc63d04735d6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LAXVZKK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDrLPOJxwPs1zb%2FkL3piZL1v5uTICVdgjgtOJJ9SJ%2BCUgIgN3Um7TXkfj7iZ0sertE5Ngu%2FjOg%2FPbZWtUstGbK0sc8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAiOiKQbhNZmh%2FObSrcA6H0N2wtEgU85gcO7F6aXIXECkgHSt0YLyTsM9wIckR5vKqVNeeBzXCUfFomQ84ZoECjG%2FbGldoNSz9jrYd7xV%2BnQuaEf0PgQpc8%2BfywqXQH9KnL6aUSLL9062NbWpWNv45okDASIPGxRFSal3jxowwQ04a9MOvAaB612RMfsYbrTiX3hdP0t14jLE0clPKNJe8INc7UVKztOI4sEJtgg5hKopIxygdHx1UpBs0xopKhYEWoW3coNjuoIneaSy2mzdsKU1%2BL94SvxneDRl84xgVvT5Uu27qs6twgs4XsunFvs%2B%2FCyjN9WsF0yeUiSwZS44mMwGI2m4H6gfCubfGdz9DtgHlq4BipC9U%2FtcBjUfQPbSwg4QUvSDMcrXI%2F%2B2zk5mxpME7XmlJXYESGmpwG9bB2e1ZPYy8v0qvZSfdEaSlpJ9TGxZUiCVoh%2BDRMFa3oLaUmKQNKxb3VfnHIf%2BZC8CUtygwoEBOEapVcWs8gxZDt%2BVTJq9b%2FT2NLCdT0U6OBdOOZyfehCJHA7CILMF%2F%2BzR5M0RAySpNMjo6Eonmo7r97ijX9T1oqTVkfI2we4EzjTIeZSkewOq6x6C4lyFXYH66fjBWU44eNweEoFRjMKygVJ4CVwW55uqpVllHCMPvb3b8GOqUByAV2FTWkfFfcPy06DmhpxS3C0%2Flq4HQVoB%2BNf6iWVCpuD7XjbP86U865Gs0JuJ52v8iMlZd69dAlxkdM45RqQxIKdw42VY72TV%2BIwe6q%2FQoSdAPnKgmrqRYtgMklfioqyjaZ%2Bva0cy6rAJfsElFnMR2PKAK6s7P%2F%2BG4TVPDnNaxH00grSPgOj9edEeUBPvhdO0YMrLWFhv2PWUDo7x3TOfItpw94&X-Amz-Signature=193b62107757e6fd4772af2f8e2cfd34f63dd906592c35096b7f8401b3f2fd25&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LAXVZKK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDrLPOJxwPs1zb%2FkL3piZL1v5uTICVdgjgtOJJ9SJ%2BCUgIgN3Um7TXkfj7iZ0sertE5Ngu%2FjOg%2FPbZWtUstGbK0sc8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAiOiKQbhNZmh%2FObSrcA6H0N2wtEgU85gcO7F6aXIXECkgHSt0YLyTsM9wIckR5vKqVNeeBzXCUfFomQ84ZoECjG%2FbGldoNSz9jrYd7xV%2BnQuaEf0PgQpc8%2BfywqXQH9KnL6aUSLL9062NbWpWNv45okDASIPGxRFSal3jxowwQ04a9MOvAaB612RMfsYbrTiX3hdP0t14jLE0clPKNJe8INc7UVKztOI4sEJtgg5hKopIxygdHx1UpBs0xopKhYEWoW3coNjuoIneaSy2mzdsKU1%2BL94SvxneDRl84xgVvT5Uu27qs6twgs4XsunFvs%2B%2FCyjN9WsF0yeUiSwZS44mMwGI2m4H6gfCubfGdz9DtgHlq4BipC9U%2FtcBjUfQPbSwg4QUvSDMcrXI%2F%2B2zk5mxpME7XmlJXYESGmpwG9bB2e1ZPYy8v0qvZSfdEaSlpJ9TGxZUiCVoh%2BDRMFa3oLaUmKQNKxb3VfnHIf%2BZC8CUtygwoEBOEapVcWs8gxZDt%2BVTJq9b%2FT2NLCdT0U6OBdOOZyfehCJHA7CILMF%2F%2BzR5M0RAySpNMjo6Eonmo7r97ijX9T1oqTVkfI2we4EzjTIeZSkewOq6x6C4lyFXYH66fjBWU44eNweEoFRjMKygVJ4CVwW55uqpVllHCMPvb3b8GOqUByAV2FTWkfFfcPy06DmhpxS3C0%2Flq4HQVoB%2BNf6iWVCpuD7XjbP86U865Gs0JuJ52v8iMlZd69dAlxkdM45RqQxIKdw42VY72TV%2BIwe6q%2FQoSdAPnKgmrqRYtgMklfioqyjaZ%2Bva0cy6rAJfsElFnMR2PKAK6s7P%2F%2BG4TVPDnNaxH00grSPgOj9edEeUBPvhdO0YMrLWFhv2PWUDo7x3TOfItpw94&X-Amz-Signature=fd37338e927c2850fa1a539e1bb9ecc79fd129055f6e56ee9b5ef46a2fae9e7a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LAXVZKK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDrLPOJxwPs1zb%2FkL3piZL1v5uTICVdgjgtOJJ9SJ%2BCUgIgN3Um7TXkfj7iZ0sertE5Ngu%2FjOg%2FPbZWtUstGbK0sc8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAiOiKQbhNZmh%2FObSrcA6H0N2wtEgU85gcO7F6aXIXECkgHSt0YLyTsM9wIckR5vKqVNeeBzXCUfFomQ84ZoECjG%2FbGldoNSz9jrYd7xV%2BnQuaEf0PgQpc8%2BfywqXQH9KnL6aUSLL9062NbWpWNv45okDASIPGxRFSal3jxowwQ04a9MOvAaB612RMfsYbrTiX3hdP0t14jLE0clPKNJe8INc7UVKztOI4sEJtgg5hKopIxygdHx1UpBs0xopKhYEWoW3coNjuoIneaSy2mzdsKU1%2BL94SvxneDRl84xgVvT5Uu27qs6twgs4XsunFvs%2B%2FCyjN9WsF0yeUiSwZS44mMwGI2m4H6gfCubfGdz9DtgHlq4BipC9U%2FtcBjUfQPbSwg4QUvSDMcrXI%2F%2B2zk5mxpME7XmlJXYESGmpwG9bB2e1ZPYy8v0qvZSfdEaSlpJ9TGxZUiCVoh%2BDRMFa3oLaUmKQNKxb3VfnHIf%2BZC8CUtygwoEBOEapVcWs8gxZDt%2BVTJq9b%2FT2NLCdT0U6OBdOOZyfehCJHA7CILMF%2F%2BzR5M0RAySpNMjo6Eonmo7r97ijX9T1oqTVkfI2we4EzjTIeZSkewOq6x6C4lyFXYH66fjBWU44eNweEoFRjMKygVJ4CVwW55uqpVllHCMPvb3b8GOqUByAV2FTWkfFfcPy06DmhpxS3C0%2Flq4HQVoB%2BNf6iWVCpuD7XjbP86U865Gs0JuJ52v8iMlZd69dAlxkdM45RqQxIKdw42VY72TV%2BIwe6q%2FQoSdAPnKgmrqRYtgMklfioqyjaZ%2Bva0cy6rAJfsElFnMR2PKAK6s7P%2F%2BG4TVPDnNaxH00grSPgOj9edEeUBPvhdO0YMrLWFhv2PWUDo7x3TOfItpw94&X-Amz-Signature=a6ed7899418481bded63a2fe41051e3df071358eced0b60d8f674b135c97c2be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LAXVZKK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDrLPOJxwPs1zb%2FkL3piZL1v5uTICVdgjgtOJJ9SJ%2BCUgIgN3Um7TXkfj7iZ0sertE5Ngu%2FjOg%2FPbZWtUstGbK0sc8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAiOiKQbhNZmh%2FObSrcA6H0N2wtEgU85gcO7F6aXIXECkgHSt0YLyTsM9wIckR5vKqVNeeBzXCUfFomQ84ZoECjG%2FbGldoNSz9jrYd7xV%2BnQuaEf0PgQpc8%2BfywqXQH9KnL6aUSLL9062NbWpWNv45okDASIPGxRFSal3jxowwQ04a9MOvAaB612RMfsYbrTiX3hdP0t14jLE0clPKNJe8INc7UVKztOI4sEJtgg5hKopIxygdHx1UpBs0xopKhYEWoW3coNjuoIneaSy2mzdsKU1%2BL94SvxneDRl84xgVvT5Uu27qs6twgs4XsunFvs%2B%2FCyjN9WsF0yeUiSwZS44mMwGI2m4H6gfCubfGdz9DtgHlq4BipC9U%2FtcBjUfQPbSwg4QUvSDMcrXI%2F%2B2zk5mxpME7XmlJXYESGmpwG9bB2e1ZPYy8v0qvZSfdEaSlpJ9TGxZUiCVoh%2BDRMFa3oLaUmKQNKxb3VfnHIf%2BZC8CUtygwoEBOEapVcWs8gxZDt%2BVTJq9b%2FT2NLCdT0U6OBdOOZyfehCJHA7CILMF%2F%2BzR5M0RAySpNMjo6Eonmo7r97ijX9T1oqTVkfI2we4EzjTIeZSkewOq6x6C4lyFXYH66fjBWU44eNweEoFRjMKygVJ4CVwW55uqpVllHCMPvb3b8GOqUByAV2FTWkfFfcPy06DmhpxS3C0%2Flq4HQVoB%2BNf6iWVCpuD7XjbP86U865Gs0JuJ52v8iMlZd69dAlxkdM45RqQxIKdw42VY72TV%2BIwe6q%2FQoSdAPnKgmrqRYtgMklfioqyjaZ%2Bva0cy6rAJfsElFnMR2PKAK6s7P%2F%2BG4TVPDnNaxH00grSPgOj9edEeUBPvhdO0YMrLWFhv2PWUDo7x3TOfItpw94&X-Amz-Signature=85ead513379d3715590a9e78529fa71f2c66634849ffa506de9e21881d3bd487&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LAXVZKK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDrLPOJxwPs1zb%2FkL3piZL1v5uTICVdgjgtOJJ9SJ%2BCUgIgN3Um7TXkfj7iZ0sertE5Ngu%2FjOg%2FPbZWtUstGbK0sc8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAiOiKQbhNZmh%2FObSrcA6H0N2wtEgU85gcO7F6aXIXECkgHSt0YLyTsM9wIckR5vKqVNeeBzXCUfFomQ84ZoECjG%2FbGldoNSz9jrYd7xV%2BnQuaEf0PgQpc8%2BfywqXQH9KnL6aUSLL9062NbWpWNv45okDASIPGxRFSal3jxowwQ04a9MOvAaB612RMfsYbrTiX3hdP0t14jLE0clPKNJe8INc7UVKztOI4sEJtgg5hKopIxygdHx1UpBs0xopKhYEWoW3coNjuoIneaSy2mzdsKU1%2BL94SvxneDRl84xgVvT5Uu27qs6twgs4XsunFvs%2B%2FCyjN9WsF0yeUiSwZS44mMwGI2m4H6gfCubfGdz9DtgHlq4BipC9U%2FtcBjUfQPbSwg4QUvSDMcrXI%2F%2B2zk5mxpME7XmlJXYESGmpwG9bB2e1ZPYy8v0qvZSfdEaSlpJ9TGxZUiCVoh%2BDRMFa3oLaUmKQNKxb3VfnHIf%2BZC8CUtygwoEBOEapVcWs8gxZDt%2BVTJq9b%2FT2NLCdT0U6OBdOOZyfehCJHA7CILMF%2F%2BzR5M0RAySpNMjo6Eonmo7r97ijX9T1oqTVkfI2we4EzjTIeZSkewOq6x6C4lyFXYH66fjBWU44eNweEoFRjMKygVJ4CVwW55uqpVllHCMPvb3b8GOqUByAV2FTWkfFfcPy06DmhpxS3C0%2Flq4HQVoB%2BNf6iWVCpuD7XjbP86U865Gs0JuJ52v8iMlZd69dAlxkdM45RqQxIKdw42VY72TV%2BIwe6q%2FQoSdAPnKgmrqRYtgMklfioqyjaZ%2Bva0cy6rAJfsElFnMR2PKAK6s7P%2F%2BG4TVPDnNaxH00grSPgOj9edEeUBPvhdO0YMrLWFhv2PWUDo7x3TOfItpw94&X-Amz-Signature=c45931b5f8c700e2c8e77745392975c374b084e08d79cd4d8fde368ec6fb5620&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
