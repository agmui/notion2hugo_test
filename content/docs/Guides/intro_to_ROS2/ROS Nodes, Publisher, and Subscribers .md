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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSEXFI2T%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuFqkRKoJDcMV8TMkSRfYKTLOzykmmaszNsePm55JOXwIhAIymQnYW2kDNZaMmZle7VN%2F43YezOAyyu1qk5UvALkG%2FKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQbJjM%2BlzcJuM4ZBUq3APtkFsQ54dKf3CHpVG3ehz3I4UJOISuUQEG5HcEj%2B%2By9GhBdpnev%2FAlC4Gj1IXsCtSuRGMXl2ugx1JzM2aGeTEVdj3BSt9FKxxsBHTmzt4Q69rvGD77plOzdas7Zn4AIPpFMBZ0tK4CR%2FQeueOAzh8OL0kQhsAVhrPAgQiBvEB329kyfHuoQ%2BaHE%2BFdLEh9aoN5oIcUpGvxsM5hg6cjqC2TzB625kGjo79KnGUs4QlAOPYFrcSF50Gk8gHyGx6Zjf0AaxT%2BkPCQHLbX8W%2FGnlyYlZNajdNtbgVJimWzJiJltfV3bKkCASrrlA5JmZw3LnW%2BTynmHmm08lVpH%2Bkp6uRyzeW2R63zh%2BeJpGMvInAyRzLW1pxL2BGQJOX9XGXyuLhimsQcMkgKkXyP7aAQ0i1xnlkRWow91upVZ0N9EFWYdxX5h8ngdUk%2BrcVtbSBlKpOY4ZuFEoIhqP3JezudAh%2BJueLZ99H6uweC6XFsKgfhaGcbV7yRgsLogXto6UiVkNRD5%2F8keTrflSkEs77lJlh2LjHTNQF5wClf%2B8WDI534JeaGhT5mRFZdbxNzQM38VCfs%2BhgOZ%2F5ZtZcTFei0wABXswnOGEKYQ1SLakLK2%2FPOixOL94CXkmOQl5%2By7TCnlLDTBjqkAd6uLu%2FD%2F6593qKJJ20oimZSTgtzpTizzkgHydTxx%2B0dy4PnqEdUqJynPwpOLbeEd07QXxcl6%2BmiKwKFEWtEhzKnEVrgAEDRfOMIJ8TiiN7DupyCtOUM%2BlpTQqGqGcDKA%2B7zhuQVFD0GIesBqzl3A2Xsf41DvRwP6oIxqQsB%2FZthyWaKTFf8Luk%2FZfmGFoke62TJqSvALkqYxx%2F4aB6kBkxhLvSh&X-Amz-Signature=59f727076bb88eb03b175630427f6ed97b82794766b46aa266f36f6a6cc80e42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSEXFI2T%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuFqkRKoJDcMV8TMkSRfYKTLOzykmmaszNsePm55JOXwIhAIymQnYW2kDNZaMmZle7VN%2F43YezOAyyu1qk5UvALkG%2FKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQbJjM%2BlzcJuM4ZBUq3APtkFsQ54dKf3CHpVG3ehz3I4UJOISuUQEG5HcEj%2B%2By9GhBdpnev%2FAlC4Gj1IXsCtSuRGMXl2ugx1JzM2aGeTEVdj3BSt9FKxxsBHTmzt4Q69rvGD77plOzdas7Zn4AIPpFMBZ0tK4CR%2FQeueOAzh8OL0kQhsAVhrPAgQiBvEB329kyfHuoQ%2BaHE%2BFdLEh9aoN5oIcUpGvxsM5hg6cjqC2TzB625kGjo79KnGUs4QlAOPYFrcSF50Gk8gHyGx6Zjf0AaxT%2BkPCQHLbX8W%2FGnlyYlZNajdNtbgVJimWzJiJltfV3bKkCASrrlA5JmZw3LnW%2BTynmHmm08lVpH%2Bkp6uRyzeW2R63zh%2BeJpGMvInAyRzLW1pxL2BGQJOX9XGXyuLhimsQcMkgKkXyP7aAQ0i1xnlkRWow91upVZ0N9EFWYdxX5h8ngdUk%2BrcVtbSBlKpOY4ZuFEoIhqP3JezudAh%2BJueLZ99H6uweC6XFsKgfhaGcbV7yRgsLogXto6UiVkNRD5%2F8keTrflSkEs77lJlh2LjHTNQF5wClf%2B8WDI534JeaGhT5mRFZdbxNzQM38VCfs%2BhgOZ%2F5ZtZcTFei0wABXswnOGEKYQ1SLakLK2%2FPOixOL94CXkmOQl5%2By7TCnlLDTBjqkAd6uLu%2FD%2F6593qKJJ20oimZSTgtzpTizzkgHydTxx%2B0dy4PnqEdUqJynPwpOLbeEd07QXxcl6%2BmiKwKFEWtEhzKnEVrgAEDRfOMIJ8TiiN7DupyCtOUM%2BlpTQqGqGcDKA%2B7zhuQVFD0GIesBqzl3A2Xsf41DvRwP6oIxqQsB%2FZthyWaKTFf8Luk%2FZfmGFoke62TJqSvALkqYxx%2F4aB6kBkxhLvSh&X-Amz-Signature=4c32faf33189545b1fdf0cc72147a4a7b1a86fe7d501193b2f2653fbfcdc1dc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSEXFI2T%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuFqkRKoJDcMV8TMkSRfYKTLOzykmmaszNsePm55JOXwIhAIymQnYW2kDNZaMmZle7VN%2F43YezOAyyu1qk5UvALkG%2FKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQbJjM%2BlzcJuM4ZBUq3APtkFsQ54dKf3CHpVG3ehz3I4UJOISuUQEG5HcEj%2B%2By9GhBdpnev%2FAlC4Gj1IXsCtSuRGMXl2ugx1JzM2aGeTEVdj3BSt9FKxxsBHTmzt4Q69rvGD77plOzdas7Zn4AIPpFMBZ0tK4CR%2FQeueOAzh8OL0kQhsAVhrPAgQiBvEB329kyfHuoQ%2BaHE%2BFdLEh9aoN5oIcUpGvxsM5hg6cjqC2TzB625kGjo79KnGUs4QlAOPYFrcSF50Gk8gHyGx6Zjf0AaxT%2BkPCQHLbX8W%2FGnlyYlZNajdNtbgVJimWzJiJltfV3bKkCASrrlA5JmZw3LnW%2BTynmHmm08lVpH%2Bkp6uRyzeW2R63zh%2BeJpGMvInAyRzLW1pxL2BGQJOX9XGXyuLhimsQcMkgKkXyP7aAQ0i1xnlkRWow91upVZ0N9EFWYdxX5h8ngdUk%2BrcVtbSBlKpOY4ZuFEoIhqP3JezudAh%2BJueLZ99H6uweC6XFsKgfhaGcbV7yRgsLogXto6UiVkNRD5%2F8keTrflSkEs77lJlh2LjHTNQF5wClf%2B8WDI534JeaGhT5mRFZdbxNzQM38VCfs%2BhgOZ%2F5ZtZcTFei0wABXswnOGEKYQ1SLakLK2%2FPOixOL94CXkmOQl5%2By7TCnlLDTBjqkAd6uLu%2FD%2F6593qKJJ20oimZSTgtzpTizzkgHydTxx%2B0dy4PnqEdUqJynPwpOLbeEd07QXxcl6%2BmiKwKFEWtEhzKnEVrgAEDRfOMIJ8TiiN7DupyCtOUM%2BlpTQqGqGcDKA%2B7zhuQVFD0GIesBqzl3A2Xsf41DvRwP6oIxqQsB%2FZthyWaKTFf8Luk%2FZfmGFoke62TJqSvALkqYxx%2F4aB6kBkxhLvSh&X-Amz-Signature=ace7add8c396b420986c602771025952082e635c9184a854d75d1e42e922b78b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSEXFI2T%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuFqkRKoJDcMV8TMkSRfYKTLOzykmmaszNsePm55JOXwIhAIymQnYW2kDNZaMmZle7VN%2F43YezOAyyu1qk5UvALkG%2FKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQbJjM%2BlzcJuM4ZBUq3APtkFsQ54dKf3CHpVG3ehz3I4UJOISuUQEG5HcEj%2B%2By9GhBdpnev%2FAlC4Gj1IXsCtSuRGMXl2ugx1JzM2aGeTEVdj3BSt9FKxxsBHTmzt4Q69rvGD77plOzdas7Zn4AIPpFMBZ0tK4CR%2FQeueOAzh8OL0kQhsAVhrPAgQiBvEB329kyfHuoQ%2BaHE%2BFdLEh9aoN5oIcUpGvxsM5hg6cjqC2TzB625kGjo79KnGUs4QlAOPYFrcSF50Gk8gHyGx6Zjf0AaxT%2BkPCQHLbX8W%2FGnlyYlZNajdNtbgVJimWzJiJltfV3bKkCASrrlA5JmZw3LnW%2BTynmHmm08lVpH%2Bkp6uRyzeW2R63zh%2BeJpGMvInAyRzLW1pxL2BGQJOX9XGXyuLhimsQcMkgKkXyP7aAQ0i1xnlkRWow91upVZ0N9EFWYdxX5h8ngdUk%2BrcVtbSBlKpOY4ZuFEoIhqP3JezudAh%2BJueLZ99H6uweC6XFsKgfhaGcbV7yRgsLogXto6UiVkNRD5%2F8keTrflSkEs77lJlh2LjHTNQF5wClf%2B8WDI534JeaGhT5mRFZdbxNzQM38VCfs%2BhgOZ%2F5ZtZcTFei0wABXswnOGEKYQ1SLakLK2%2FPOixOL94CXkmOQl5%2By7TCnlLDTBjqkAd6uLu%2FD%2F6593qKJJ20oimZSTgtzpTizzkgHydTxx%2B0dy4PnqEdUqJynPwpOLbeEd07QXxcl6%2BmiKwKFEWtEhzKnEVrgAEDRfOMIJ8TiiN7DupyCtOUM%2BlpTQqGqGcDKA%2B7zhuQVFD0GIesBqzl3A2Xsf41DvRwP6oIxqQsB%2FZthyWaKTFf8Luk%2FZfmGFoke62TJqSvALkqYxx%2F4aB6kBkxhLvSh&X-Amz-Signature=a78fdf6a844a133e9a9300af6ccce3a9a2dde38727cd3e561c95fcd5078d9378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSEXFI2T%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuFqkRKoJDcMV8TMkSRfYKTLOzykmmaszNsePm55JOXwIhAIymQnYW2kDNZaMmZle7VN%2F43YezOAyyu1qk5UvALkG%2FKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQbJjM%2BlzcJuM4ZBUq3APtkFsQ54dKf3CHpVG3ehz3I4UJOISuUQEG5HcEj%2B%2By9GhBdpnev%2FAlC4Gj1IXsCtSuRGMXl2ugx1JzM2aGeTEVdj3BSt9FKxxsBHTmzt4Q69rvGD77plOzdas7Zn4AIPpFMBZ0tK4CR%2FQeueOAzh8OL0kQhsAVhrPAgQiBvEB329kyfHuoQ%2BaHE%2BFdLEh9aoN5oIcUpGvxsM5hg6cjqC2TzB625kGjo79KnGUs4QlAOPYFrcSF50Gk8gHyGx6Zjf0AaxT%2BkPCQHLbX8W%2FGnlyYlZNajdNtbgVJimWzJiJltfV3bKkCASrrlA5JmZw3LnW%2BTynmHmm08lVpH%2Bkp6uRyzeW2R63zh%2BeJpGMvInAyRzLW1pxL2BGQJOX9XGXyuLhimsQcMkgKkXyP7aAQ0i1xnlkRWow91upVZ0N9EFWYdxX5h8ngdUk%2BrcVtbSBlKpOY4ZuFEoIhqP3JezudAh%2BJueLZ99H6uweC6XFsKgfhaGcbV7yRgsLogXto6UiVkNRD5%2F8keTrflSkEs77lJlh2LjHTNQF5wClf%2B8WDI534JeaGhT5mRFZdbxNzQM38VCfs%2BhgOZ%2F5ZtZcTFei0wABXswnOGEKYQ1SLakLK2%2FPOixOL94CXkmOQl5%2By7TCnlLDTBjqkAd6uLu%2FD%2F6593qKJJ20oimZSTgtzpTizzkgHydTxx%2B0dy4PnqEdUqJynPwpOLbeEd07QXxcl6%2BmiKwKFEWtEhzKnEVrgAEDRfOMIJ8TiiN7DupyCtOUM%2BlpTQqGqGcDKA%2B7zhuQVFD0GIesBqzl3A2Xsf41DvRwP6oIxqQsB%2FZthyWaKTFf8Luk%2FZfmGFoke62TJqSvALkqYxx%2F4aB6kBkxhLvSh&X-Amz-Signature=7fd37bdd3ae9cd645d558ff331a362d96ab48dd3ea0c59e87b7720f59bcded2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSEXFI2T%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuFqkRKoJDcMV8TMkSRfYKTLOzykmmaszNsePm55JOXwIhAIymQnYW2kDNZaMmZle7VN%2F43YezOAyyu1qk5UvALkG%2FKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQbJjM%2BlzcJuM4ZBUq3APtkFsQ54dKf3CHpVG3ehz3I4UJOISuUQEG5HcEj%2B%2By9GhBdpnev%2FAlC4Gj1IXsCtSuRGMXl2ugx1JzM2aGeTEVdj3BSt9FKxxsBHTmzt4Q69rvGD77plOzdas7Zn4AIPpFMBZ0tK4CR%2FQeueOAzh8OL0kQhsAVhrPAgQiBvEB329kyfHuoQ%2BaHE%2BFdLEh9aoN5oIcUpGvxsM5hg6cjqC2TzB625kGjo79KnGUs4QlAOPYFrcSF50Gk8gHyGx6Zjf0AaxT%2BkPCQHLbX8W%2FGnlyYlZNajdNtbgVJimWzJiJltfV3bKkCASrrlA5JmZw3LnW%2BTynmHmm08lVpH%2Bkp6uRyzeW2R63zh%2BeJpGMvInAyRzLW1pxL2BGQJOX9XGXyuLhimsQcMkgKkXyP7aAQ0i1xnlkRWow91upVZ0N9EFWYdxX5h8ngdUk%2BrcVtbSBlKpOY4ZuFEoIhqP3JezudAh%2BJueLZ99H6uweC6XFsKgfhaGcbV7yRgsLogXto6UiVkNRD5%2F8keTrflSkEs77lJlh2LjHTNQF5wClf%2B8WDI534JeaGhT5mRFZdbxNzQM38VCfs%2BhgOZ%2F5ZtZcTFei0wABXswnOGEKYQ1SLakLK2%2FPOixOL94CXkmOQl5%2By7TCnlLDTBjqkAd6uLu%2FD%2F6593qKJJ20oimZSTgtzpTizzkgHydTxx%2B0dy4PnqEdUqJynPwpOLbeEd07QXxcl6%2BmiKwKFEWtEhzKnEVrgAEDRfOMIJ8TiiN7DupyCtOUM%2BlpTQqGqGcDKA%2B7zhuQVFD0GIesBqzl3A2Xsf41DvRwP6oIxqQsB%2FZthyWaKTFf8Luk%2FZfmGFoke62TJqSvALkqYxx%2F4aB6kBkxhLvSh&X-Amz-Signature=365dba03f2a2a8de79fd8e66239da288e7a8c07b54d13b0cd56b242237ce3ff1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSEXFI2T%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuFqkRKoJDcMV8TMkSRfYKTLOzykmmaszNsePm55JOXwIhAIymQnYW2kDNZaMmZle7VN%2F43YezOAyyu1qk5UvALkG%2FKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQbJjM%2BlzcJuM4ZBUq3APtkFsQ54dKf3CHpVG3ehz3I4UJOISuUQEG5HcEj%2B%2By9GhBdpnev%2FAlC4Gj1IXsCtSuRGMXl2ugx1JzM2aGeTEVdj3BSt9FKxxsBHTmzt4Q69rvGD77plOzdas7Zn4AIPpFMBZ0tK4CR%2FQeueOAzh8OL0kQhsAVhrPAgQiBvEB329kyfHuoQ%2BaHE%2BFdLEh9aoN5oIcUpGvxsM5hg6cjqC2TzB625kGjo79KnGUs4QlAOPYFrcSF50Gk8gHyGx6Zjf0AaxT%2BkPCQHLbX8W%2FGnlyYlZNajdNtbgVJimWzJiJltfV3bKkCASrrlA5JmZw3LnW%2BTynmHmm08lVpH%2Bkp6uRyzeW2R63zh%2BeJpGMvInAyRzLW1pxL2BGQJOX9XGXyuLhimsQcMkgKkXyP7aAQ0i1xnlkRWow91upVZ0N9EFWYdxX5h8ngdUk%2BrcVtbSBlKpOY4ZuFEoIhqP3JezudAh%2BJueLZ99H6uweC6XFsKgfhaGcbV7yRgsLogXto6UiVkNRD5%2F8keTrflSkEs77lJlh2LjHTNQF5wClf%2B8WDI534JeaGhT5mRFZdbxNzQM38VCfs%2BhgOZ%2F5ZtZcTFei0wABXswnOGEKYQ1SLakLK2%2FPOixOL94CXkmOQl5%2By7TCnlLDTBjqkAd6uLu%2FD%2F6593qKJJ20oimZSTgtzpTizzkgHydTxx%2B0dy4PnqEdUqJynPwpOLbeEd07QXxcl6%2BmiKwKFEWtEhzKnEVrgAEDRfOMIJ8TiiN7DupyCtOUM%2BlpTQqGqGcDKA%2B7zhuQVFD0GIesBqzl3A2Xsf41DvRwP6oIxqQsB%2FZthyWaKTFf8Luk%2FZfmGFoke62TJqSvALkqYxx%2F4aB6kBkxhLvSh&X-Amz-Signature=7454cd098352b2ccc7fb7f85799ade45826fdab880f9ef04e17d3c2145d60eda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSEXFI2T%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuFqkRKoJDcMV8TMkSRfYKTLOzykmmaszNsePm55JOXwIhAIymQnYW2kDNZaMmZle7VN%2F43YezOAyyu1qk5UvALkG%2FKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQbJjM%2BlzcJuM4ZBUq3APtkFsQ54dKf3CHpVG3ehz3I4UJOISuUQEG5HcEj%2B%2By9GhBdpnev%2FAlC4Gj1IXsCtSuRGMXl2ugx1JzM2aGeTEVdj3BSt9FKxxsBHTmzt4Q69rvGD77plOzdas7Zn4AIPpFMBZ0tK4CR%2FQeueOAzh8OL0kQhsAVhrPAgQiBvEB329kyfHuoQ%2BaHE%2BFdLEh9aoN5oIcUpGvxsM5hg6cjqC2TzB625kGjo79KnGUs4QlAOPYFrcSF50Gk8gHyGx6Zjf0AaxT%2BkPCQHLbX8W%2FGnlyYlZNajdNtbgVJimWzJiJltfV3bKkCASrrlA5JmZw3LnW%2BTynmHmm08lVpH%2Bkp6uRyzeW2R63zh%2BeJpGMvInAyRzLW1pxL2BGQJOX9XGXyuLhimsQcMkgKkXyP7aAQ0i1xnlkRWow91upVZ0N9EFWYdxX5h8ngdUk%2BrcVtbSBlKpOY4ZuFEoIhqP3JezudAh%2BJueLZ99H6uweC6XFsKgfhaGcbV7yRgsLogXto6UiVkNRD5%2F8keTrflSkEs77lJlh2LjHTNQF5wClf%2B8WDI534JeaGhT5mRFZdbxNzQM38VCfs%2BhgOZ%2F5ZtZcTFei0wABXswnOGEKYQ1SLakLK2%2FPOixOL94CXkmOQl5%2By7TCnlLDTBjqkAd6uLu%2FD%2F6593qKJJ20oimZSTgtzpTizzkgHydTxx%2B0dy4PnqEdUqJynPwpOLbeEd07QXxcl6%2BmiKwKFEWtEhzKnEVrgAEDRfOMIJ8TiiN7DupyCtOUM%2BlpTQqGqGcDKA%2B7zhuQVFD0GIesBqzl3A2Xsf41DvRwP6oIxqQsB%2FZthyWaKTFf8Luk%2FZfmGFoke62TJqSvALkqYxx%2F4aB6kBkxhLvSh&X-Amz-Signature=2eff938d99892f529cf52f2ad7c567b19a23cd8210df1b881297422350149a4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
