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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDS26LB4%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEOdpz5sYkDbQA2ceZQ%2BqlT6HClPbu4BxgNCceXNH%2FzAiAIjKGkDtmDdv3ybtPmZrBFwP8YrVifpnnDUnWOF5wmTCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMy0sQ%2B0mlodbtRmkNKtwDYH%2BGbmEoUrcOXwpAiqUff1jvPohpfkCn1FKPaecDvx5vhQH2nF1pJIPfIELfh2rbmA0ZMcyGV15ElKZh2OsW7svfSpUqIq7Xc2IqfIVspREIkvUwgtLcVhO13hx3UQZAzDmwSeBe7hGamqalXJHN8sP9uVmmr1H8EI6fIl48WysCHeFT9szR2EPRvCBcA9AkcrOUKFpSHSTpDNVK%2BbwsWsB1UbEsxX9S6iSUx8SDGK5V7jU1VDop5FXmU2mcNV02dCu4z8BxTgW%2FpWZAp0Q7%2BHU4Sa6Q2SBLqphh3xarL%2FEZPgs9VpXT4zeSDXv3mRd%2BGf33fZ%2F1K3dnvfJbyBLeHulgTfa%2BDgPWrFX26APAGyU8%2FMfUomCV%2FCN8tDxowoOj%2FrSrFxteJJqz4So4jkntdoJ6Ytojc4DslGJhNgdJGe0nWpqgNzc85MzRZTy%2FoC2oOP5iHcJw0BujCfn9EzDp6skuck4%2FO7OrYsNUnJinYPLT9iEO%2Fm5pXAdghm%2Bq26d12WQd%2BIscYB2E6vTCmM9eY7TmjyYhWP5g8M9W4Hg%2BqJWvV9YCujsWMx71T1oZlVAjnGLNVISFIiVKGF1ecCz9j%2BN1yEI6TIZZ9Jzd8Wktq6W3QmkVIBs1JWjowAMwh%2BvBygY6pgEXk7wctEXQdiF9ccOHhZxFKzYpf3XSmpsB4b1T7MOEogdS1SAILZzDeeb0Stdefm%2Byhq8qBujdwMEv8hsVqelLljuR2nxeNuIZMkwZIGObibHWysrAIs5dmIWNbpGJ5DQ%2B3YUIn3ZAWW8Mj26j01e%2Flaxu9s1gNWfvaXcR8met7pBt13UoVf2sKdWbkc%2BXO%2FCZCPWK70ndgugP%2FOhFDmiJgjk5AGmh&X-Amz-Signature=7f5ac3c5d7cb2e913fd6fd637eb4f69f8d296c7e843cf19f51d1bdf2c0e55798&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDS26LB4%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEOdpz5sYkDbQA2ceZQ%2BqlT6HClPbu4BxgNCceXNH%2FzAiAIjKGkDtmDdv3ybtPmZrBFwP8YrVifpnnDUnWOF5wmTCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMy0sQ%2B0mlodbtRmkNKtwDYH%2BGbmEoUrcOXwpAiqUff1jvPohpfkCn1FKPaecDvx5vhQH2nF1pJIPfIELfh2rbmA0ZMcyGV15ElKZh2OsW7svfSpUqIq7Xc2IqfIVspREIkvUwgtLcVhO13hx3UQZAzDmwSeBe7hGamqalXJHN8sP9uVmmr1H8EI6fIl48WysCHeFT9szR2EPRvCBcA9AkcrOUKFpSHSTpDNVK%2BbwsWsB1UbEsxX9S6iSUx8SDGK5V7jU1VDop5FXmU2mcNV02dCu4z8BxTgW%2FpWZAp0Q7%2BHU4Sa6Q2SBLqphh3xarL%2FEZPgs9VpXT4zeSDXv3mRd%2BGf33fZ%2F1K3dnvfJbyBLeHulgTfa%2BDgPWrFX26APAGyU8%2FMfUomCV%2FCN8tDxowoOj%2FrSrFxteJJqz4So4jkntdoJ6Ytojc4DslGJhNgdJGe0nWpqgNzc85MzRZTy%2FoC2oOP5iHcJw0BujCfn9EzDp6skuck4%2FO7OrYsNUnJinYPLT9iEO%2Fm5pXAdghm%2Bq26d12WQd%2BIscYB2E6vTCmM9eY7TmjyYhWP5g8M9W4Hg%2BqJWvV9YCujsWMx71T1oZlVAjnGLNVISFIiVKGF1ecCz9j%2BN1yEI6TIZZ9Jzd8Wktq6W3QmkVIBs1JWjowAMwh%2BvBygY6pgEXk7wctEXQdiF9ccOHhZxFKzYpf3XSmpsB4b1T7MOEogdS1SAILZzDeeb0Stdefm%2Byhq8qBujdwMEv8hsVqelLljuR2nxeNuIZMkwZIGObibHWysrAIs5dmIWNbpGJ5DQ%2B3YUIn3ZAWW8Mj26j01e%2Flaxu9s1gNWfvaXcR8met7pBt13UoVf2sKdWbkc%2BXO%2FCZCPWK70ndgugP%2FOhFDmiJgjk5AGmh&X-Amz-Signature=fa468aae5e4a7a3a1d4365cffd5892f6e440a273434d73afda762deb455fda41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDS26LB4%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEOdpz5sYkDbQA2ceZQ%2BqlT6HClPbu4BxgNCceXNH%2FzAiAIjKGkDtmDdv3ybtPmZrBFwP8YrVifpnnDUnWOF5wmTCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMy0sQ%2B0mlodbtRmkNKtwDYH%2BGbmEoUrcOXwpAiqUff1jvPohpfkCn1FKPaecDvx5vhQH2nF1pJIPfIELfh2rbmA0ZMcyGV15ElKZh2OsW7svfSpUqIq7Xc2IqfIVspREIkvUwgtLcVhO13hx3UQZAzDmwSeBe7hGamqalXJHN8sP9uVmmr1H8EI6fIl48WysCHeFT9szR2EPRvCBcA9AkcrOUKFpSHSTpDNVK%2BbwsWsB1UbEsxX9S6iSUx8SDGK5V7jU1VDop5FXmU2mcNV02dCu4z8BxTgW%2FpWZAp0Q7%2BHU4Sa6Q2SBLqphh3xarL%2FEZPgs9VpXT4zeSDXv3mRd%2BGf33fZ%2F1K3dnvfJbyBLeHulgTfa%2BDgPWrFX26APAGyU8%2FMfUomCV%2FCN8tDxowoOj%2FrSrFxteJJqz4So4jkntdoJ6Ytojc4DslGJhNgdJGe0nWpqgNzc85MzRZTy%2FoC2oOP5iHcJw0BujCfn9EzDp6skuck4%2FO7OrYsNUnJinYPLT9iEO%2Fm5pXAdghm%2Bq26d12WQd%2BIscYB2E6vTCmM9eY7TmjyYhWP5g8M9W4Hg%2BqJWvV9YCujsWMx71T1oZlVAjnGLNVISFIiVKGF1ecCz9j%2BN1yEI6TIZZ9Jzd8Wktq6W3QmkVIBs1JWjowAMwh%2BvBygY6pgEXk7wctEXQdiF9ccOHhZxFKzYpf3XSmpsB4b1T7MOEogdS1SAILZzDeeb0Stdefm%2Byhq8qBujdwMEv8hsVqelLljuR2nxeNuIZMkwZIGObibHWysrAIs5dmIWNbpGJ5DQ%2B3YUIn3ZAWW8Mj26j01e%2Flaxu9s1gNWfvaXcR8met7pBt13UoVf2sKdWbkc%2BXO%2FCZCPWK70ndgugP%2FOhFDmiJgjk5AGmh&X-Amz-Signature=30796af621b2f52afd914886432c7d5fc33dac9def83f84d367b176943ff056b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDS26LB4%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEOdpz5sYkDbQA2ceZQ%2BqlT6HClPbu4BxgNCceXNH%2FzAiAIjKGkDtmDdv3ybtPmZrBFwP8YrVifpnnDUnWOF5wmTCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMy0sQ%2B0mlodbtRmkNKtwDYH%2BGbmEoUrcOXwpAiqUff1jvPohpfkCn1FKPaecDvx5vhQH2nF1pJIPfIELfh2rbmA0ZMcyGV15ElKZh2OsW7svfSpUqIq7Xc2IqfIVspREIkvUwgtLcVhO13hx3UQZAzDmwSeBe7hGamqalXJHN8sP9uVmmr1H8EI6fIl48WysCHeFT9szR2EPRvCBcA9AkcrOUKFpSHSTpDNVK%2BbwsWsB1UbEsxX9S6iSUx8SDGK5V7jU1VDop5FXmU2mcNV02dCu4z8BxTgW%2FpWZAp0Q7%2BHU4Sa6Q2SBLqphh3xarL%2FEZPgs9VpXT4zeSDXv3mRd%2BGf33fZ%2F1K3dnvfJbyBLeHulgTfa%2BDgPWrFX26APAGyU8%2FMfUomCV%2FCN8tDxowoOj%2FrSrFxteJJqz4So4jkntdoJ6Ytojc4DslGJhNgdJGe0nWpqgNzc85MzRZTy%2FoC2oOP5iHcJw0BujCfn9EzDp6skuck4%2FO7OrYsNUnJinYPLT9iEO%2Fm5pXAdghm%2Bq26d12WQd%2BIscYB2E6vTCmM9eY7TmjyYhWP5g8M9W4Hg%2BqJWvV9YCujsWMx71T1oZlVAjnGLNVISFIiVKGF1ecCz9j%2BN1yEI6TIZZ9Jzd8Wktq6W3QmkVIBs1JWjowAMwh%2BvBygY6pgEXk7wctEXQdiF9ccOHhZxFKzYpf3XSmpsB4b1T7MOEogdS1SAILZzDeeb0Stdefm%2Byhq8qBujdwMEv8hsVqelLljuR2nxeNuIZMkwZIGObibHWysrAIs5dmIWNbpGJ5DQ%2B3YUIn3ZAWW8Mj26j01e%2Flaxu9s1gNWfvaXcR8met7pBt13UoVf2sKdWbkc%2BXO%2FCZCPWK70ndgugP%2FOhFDmiJgjk5AGmh&X-Amz-Signature=871d10886eab3f3c6a50e97d099569ceb6ba494693869f6720c73b6c1340e68a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDS26LB4%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEOdpz5sYkDbQA2ceZQ%2BqlT6HClPbu4BxgNCceXNH%2FzAiAIjKGkDtmDdv3ybtPmZrBFwP8YrVifpnnDUnWOF5wmTCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMy0sQ%2B0mlodbtRmkNKtwDYH%2BGbmEoUrcOXwpAiqUff1jvPohpfkCn1FKPaecDvx5vhQH2nF1pJIPfIELfh2rbmA0ZMcyGV15ElKZh2OsW7svfSpUqIq7Xc2IqfIVspREIkvUwgtLcVhO13hx3UQZAzDmwSeBe7hGamqalXJHN8sP9uVmmr1H8EI6fIl48WysCHeFT9szR2EPRvCBcA9AkcrOUKFpSHSTpDNVK%2BbwsWsB1UbEsxX9S6iSUx8SDGK5V7jU1VDop5FXmU2mcNV02dCu4z8BxTgW%2FpWZAp0Q7%2BHU4Sa6Q2SBLqphh3xarL%2FEZPgs9VpXT4zeSDXv3mRd%2BGf33fZ%2F1K3dnvfJbyBLeHulgTfa%2BDgPWrFX26APAGyU8%2FMfUomCV%2FCN8tDxowoOj%2FrSrFxteJJqz4So4jkntdoJ6Ytojc4DslGJhNgdJGe0nWpqgNzc85MzRZTy%2FoC2oOP5iHcJw0BujCfn9EzDp6skuck4%2FO7OrYsNUnJinYPLT9iEO%2Fm5pXAdghm%2Bq26d12WQd%2BIscYB2E6vTCmM9eY7TmjyYhWP5g8M9W4Hg%2BqJWvV9YCujsWMx71T1oZlVAjnGLNVISFIiVKGF1ecCz9j%2BN1yEI6TIZZ9Jzd8Wktq6W3QmkVIBs1JWjowAMwh%2BvBygY6pgEXk7wctEXQdiF9ccOHhZxFKzYpf3XSmpsB4b1T7MOEogdS1SAILZzDeeb0Stdefm%2Byhq8qBujdwMEv8hsVqelLljuR2nxeNuIZMkwZIGObibHWysrAIs5dmIWNbpGJ5DQ%2B3YUIn3ZAWW8Mj26j01e%2Flaxu9s1gNWfvaXcR8met7pBt13UoVf2sKdWbkc%2BXO%2FCZCPWK70ndgugP%2FOhFDmiJgjk5AGmh&X-Amz-Signature=d6d69184d262db0b94eea58bcfea45364c7183a13fc82d9560f2bba7ffa8a3ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDS26LB4%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEOdpz5sYkDbQA2ceZQ%2BqlT6HClPbu4BxgNCceXNH%2FzAiAIjKGkDtmDdv3ybtPmZrBFwP8YrVifpnnDUnWOF5wmTCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMy0sQ%2B0mlodbtRmkNKtwDYH%2BGbmEoUrcOXwpAiqUff1jvPohpfkCn1FKPaecDvx5vhQH2nF1pJIPfIELfh2rbmA0ZMcyGV15ElKZh2OsW7svfSpUqIq7Xc2IqfIVspREIkvUwgtLcVhO13hx3UQZAzDmwSeBe7hGamqalXJHN8sP9uVmmr1H8EI6fIl48WysCHeFT9szR2EPRvCBcA9AkcrOUKFpSHSTpDNVK%2BbwsWsB1UbEsxX9S6iSUx8SDGK5V7jU1VDop5FXmU2mcNV02dCu4z8BxTgW%2FpWZAp0Q7%2BHU4Sa6Q2SBLqphh3xarL%2FEZPgs9VpXT4zeSDXv3mRd%2BGf33fZ%2F1K3dnvfJbyBLeHulgTfa%2BDgPWrFX26APAGyU8%2FMfUomCV%2FCN8tDxowoOj%2FrSrFxteJJqz4So4jkntdoJ6Ytojc4DslGJhNgdJGe0nWpqgNzc85MzRZTy%2FoC2oOP5iHcJw0BujCfn9EzDp6skuck4%2FO7OrYsNUnJinYPLT9iEO%2Fm5pXAdghm%2Bq26d12WQd%2BIscYB2E6vTCmM9eY7TmjyYhWP5g8M9W4Hg%2BqJWvV9YCujsWMx71T1oZlVAjnGLNVISFIiVKGF1ecCz9j%2BN1yEI6TIZZ9Jzd8Wktq6W3QmkVIBs1JWjowAMwh%2BvBygY6pgEXk7wctEXQdiF9ccOHhZxFKzYpf3XSmpsB4b1T7MOEogdS1SAILZzDeeb0Stdefm%2Byhq8qBujdwMEv8hsVqelLljuR2nxeNuIZMkwZIGObibHWysrAIs5dmIWNbpGJ5DQ%2B3YUIn3ZAWW8Mj26j01e%2Flaxu9s1gNWfvaXcR8met7pBt13UoVf2sKdWbkc%2BXO%2FCZCPWK70ndgugP%2FOhFDmiJgjk5AGmh&X-Amz-Signature=5858d00574ff64eb2f88b4e5ce3977830a3e2ecede803f629ac754b743863ffd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDS26LB4%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEOdpz5sYkDbQA2ceZQ%2BqlT6HClPbu4BxgNCceXNH%2FzAiAIjKGkDtmDdv3ybtPmZrBFwP8YrVifpnnDUnWOF5wmTCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMy0sQ%2B0mlodbtRmkNKtwDYH%2BGbmEoUrcOXwpAiqUff1jvPohpfkCn1FKPaecDvx5vhQH2nF1pJIPfIELfh2rbmA0ZMcyGV15ElKZh2OsW7svfSpUqIq7Xc2IqfIVspREIkvUwgtLcVhO13hx3UQZAzDmwSeBe7hGamqalXJHN8sP9uVmmr1H8EI6fIl48WysCHeFT9szR2EPRvCBcA9AkcrOUKFpSHSTpDNVK%2BbwsWsB1UbEsxX9S6iSUx8SDGK5V7jU1VDop5FXmU2mcNV02dCu4z8BxTgW%2FpWZAp0Q7%2BHU4Sa6Q2SBLqphh3xarL%2FEZPgs9VpXT4zeSDXv3mRd%2BGf33fZ%2F1K3dnvfJbyBLeHulgTfa%2BDgPWrFX26APAGyU8%2FMfUomCV%2FCN8tDxowoOj%2FrSrFxteJJqz4So4jkntdoJ6Ytojc4DslGJhNgdJGe0nWpqgNzc85MzRZTy%2FoC2oOP5iHcJw0BujCfn9EzDp6skuck4%2FO7OrYsNUnJinYPLT9iEO%2Fm5pXAdghm%2Bq26d12WQd%2BIscYB2E6vTCmM9eY7TmjyYhWP5g8M9W4Hg%2BqJWvV9YCujsWMx71T1oZlVAjnGLNVISFIiVKGF1ecCz9j%2BN1yEI6TIZZ9Jzd8Wktq6W3QmkVIBs1JWjowAMwh%2BvBygY6pgEXk7wctEXQdiF9ccOHhZxFKzYpf3XSmpsB4b1T7MOEogdS1SAILZzDeeb0Stdefm%2Byhq8qBujdwMEv8hsVqelLljuR2nxeNuIZMkwZIGObibHWysrAIs5dmIWNbpGJ5DQ%2B3YUIn3ZAWW8Mj26j01e%2Flaxu9s1gNWfvaXcR8met7pBt13UoVf2sKdWbkc%2BXO%2FCZCPWK70ndgugP%2FOhFDmiJgjk5AGmh&X-Amz-Signature=6f7caf2c2c23936f9578a2693d1f4b08a1b86a1ebcaa4502235d3be3a92a6e9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDS26LB4%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEOdpz5sYkDbQA2ceZQ%2BqlT6HClPbu4BxgNCceXNH%2FzAiAIjKGkDtmDdv3ybtPmZrBFwP8YrVifpnnDUnWOF5wmTCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMy0sQ%2B0mlodbtRmkNKtwDYH%2BGbmEoUrcOXwpAiqUff1jvPohpfkCn1FKPaecDvx5vhQH2nF1pJIPfIELfh2rbmA0ZMcyGV15ElKZh2OsW7svfSpUqIq7Xc2IqfIVspREIkvUwgtLcVhO13hx3UQZAzDmwSeBe7hGamqalXJHN8sP9uVmmr1H8EI6fIl48WysCHeFT9szR2EPRvCBcA9AkcrOUKFpSHSTpDNVK%2BbwsWsB1UbEsxX9S6iSUx8SDGK5V7jU1VDop5FXmU2mcNV02dCu4z8BxTgW%2FpWZAp0Q7%2BHU4Sa6Q2SBLqphh3xarL%2FEZPgs9VpXT4zeSDXv3mRd%2BGf33fZ%2F1K3dnvfJbyBLeHulgTfa%2BDgPWrFX26APAGyU8%2FMfUomCV%2FCN8tDxowoOj%2FrSrFxteJJqz4So4jkntdoJ6Ytojc4DslGJhNgdJGe0nWpqgNzc85MzRZTy%2FoC2oOP5iHcJw0BujCfn9EzDp6skuck4%2FO7OrYsNUnJinYPLT9iEO%2Fm5pXAdghm%2Bq26d12WQd%2BIscYB2E6vTCmM9eY7TmjyYhWP5g8M9W4Hg%2BqJWvV9YCujsWMx71T1oZlVAjnGLNVISFIiVKGF1ecCz9j%2BN1yEI6TIZZ9Jzd8Wktq6W3QmkVIBs1JWjowAMwh%2BvBygY6pgEXk7wctEXQdiF9ccOHhZxFKzYpf3XSmpsB4b1T7MOEogdS1SAILZzDeeb0Stdefm%2Byhq8qBujdwMEv8hsVqelLljuR2nxeNuIZMkwZIGObibHWysrAIs5dmIWNbpGJ5DQ%2B3YUIn3ZAWW8Mj26j01e%2Flaxu9s1gNWfvaXcR8met7pBt13UoVf2sKdWbkc%2BXO%2FCZCPWK70ndgugP%2FOhFDmiJgjk5AGmh&X-Amz-Signature=b0ef1c324b03272e87fba8733807f2afe21d8ff5f324d483d7617a30569293f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
