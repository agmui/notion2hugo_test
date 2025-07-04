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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4XH2JFK%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIC9D%2B5v%2FkReLjiHdBL%2FfsXrEA4pZHm7xa8OUH5vNf3weAiEAwyt4bC7uBe7N6e%2FLPaxRaWIgKsYf5FU4MhdubjphQYAq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDKXu%2FdUfuygMe86v%2BircA9vyx3jlmxH%2FfAtBI6plHm0dvwgA9IXAB4qHN5BO6mPwa%2BhjJOVaUuOei7hqqLgCH1YJpGamMxFgf%2BMgun%2B%2BEEIM0QNfEWXE3YvKKdWM3%2BCItnGFrkEErG5qt8tA8Hfostjsrp1qTsu7KFLGYj5N7x5hCG66jXaJtoYltSBWd7TlB%2F7MMEb%2FDRiftHn68ShF2O40MrL3F4qerRgYz%2BA2CVNc2lvXzMliNh1lvbWO2efO4XMYxi%2FRlSrSlZKSj1ZRjXJuwmD%2FdZCGX6WqxbZu%2BVfcjltLbOkDv7Rnqc8D2MpWzQt8TQZKtSxpC9pdnhKpgMUc1qkR4%2Bxt0jhxJ98mv3jMs8O6imK74Uu2XeJk5VUDne8BM%2FeQik9rPWANcVn6cHPOHazkEaFsrLPw61AzfdXMvq3sN0H3ecaRIy3xGZ39rcNkoYunNQphLH8h2GST5iVGqAvMRVZXtL%2FKq2bF9LqlmBK93QB1cGttRkfn%2BQnMF880RdQqPy2ihY6%2FcpT%2FhrFotPBrxUNQBRu0WsXsgrciOe9w9FyiGFIXH3N%2FBeVPq%2BHYh3jZ4D3UKZheCZ3ei7X%2BZCn5kB8onePOKH8UoPFZ2N7W9%2BRFK8a68VppXXUtSbX%2BVS9gW922TF7jMJK4nMMGOqUB%2BNTCxqJks4djVajhuMZStukR73HAnQkKYtT1Sgn%2BM%2BYPfEIuOXYjkhuoW5TtOF3ST3jJls5PcHHsHg6K0g6I0OQt%2FJffZo0jHiISJcTcLXQ3zj6owuR0AUdeo08EwKcnd3%2F9XiG6IANpyS2zIDRhuGFQswYXxWKKehgCjkNAdhYfctSZjD7ni3lMZHfWgL8bUTFH1gLHymB6oCZZEBZOxs3feoBt&X-Amz-Signature=50bbb04e61a82169692324644cca3fda759a1cdc3dfca7e1be63fbb74fcaa754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4XH2JFK%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIC9D%2B5v%2FkReLjiHdBL%2FfsXrEA4pZHm7xa8OUH5vNf3weAiEAwyt4bC7uBe7N6e%2FLPaxRaWIgKsYf5FU4MhdubjphQYAq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDKXu%2FdUfuygMe86v%2BircA9vyx3jlmxH%2FfAtBI6plHm0dvwgA9IXAB4qHN5BO6mPwa%2BhjJOVaUuOei7hqqLgCH1YJpGamMxFgf%2BMgun%2B%2BEEIM0QNfEWXE3YvKKdWM3%2BCItnGFrkEErG5qt8tA8Hfostjsrp1qTsu7KFLGYj5N7x5hCG66jXaJtoYltSBWd7TlB%2F7MMEb%2FDRiftHn68ShF2O40MrL3F4qerRgYz%2BA2CVNc2lvXzMliNh1lvbWO2efO4XMYxi%2FRlSrSlZKSj1ZRjXJuwmD%2FdZCGX6WqxbZu%2BVfcjltLbOkDv7Rnqc8D2MpWzQt8TQZKtSxpC9pdnhKpgMUc1qkR4%2Bxt0jhxJ98mv3jMs8O6imK74Uu2XeJk5VUDne8BM%2FeQik9rPWANcVn6cHPOHazkEaFsrLPw61AzfdXMvq3sN0H3ecaRIy3xGZ39rcNkoYunNQphLH8h2GST5iVGqAvMRVZXtL%2FKq2bF9LqlmBK93QB1cGttRkfn%2BQnMF880RdQqPy2ihY6%2FcpT%2FhrFotPBrxUNQBRu0WsXsgrciOe9w9FyiGFIXH3N%2FBeVPq%2BHYh3jZ4D3UKZheCZ3ei7X%2BZCn5kB8onePOKH8UoPFZ2N7W9%2BRFK8a68VppXXUtSbX%2BVS9gW922TF7jMJK4nMMGOqUB%2BNTCxqJks4djVajhuMZStukR73HAnQkKYtT1Sgn%2BM%2BYPfEIuOXYjkhuoW5TtOF3ST3jJls5PcHHsHg6K0g6I0OQt%2FJffZo0jHiISJcTcLXQ3zj6owuR0AUdeo08EwKcnd3%2F9XiG6IANpyS2zIDRhuGFQswYXxWKKehgCjkNAdhYfctSZjD7ni3lMZHfWgL8bUTFH1gLHymB6oCZZEBZOxs3feoBt&X-Amz-Signature=8134137dc6dafe49f0a2a535082bb57f22e88eea2b39f34288db8dea56fe62a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4XH2JFK%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIC9D%2B5v%2FkReLjiHdBL%2FfsXrEA4pZHm7xa8OUH5vNf3weAiEAwyt4bC7uBe7N6e%2FLPaxRaWIgKsYf5FU4MhdubjphQYAq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDKXu%2FdUfuygMe86v%2BircA9vyx3jlmxH%2FfAtBI6plHm0dvwgA9IXAB4qHN5BO6mPwa%2BhjJOVaUuOei7hqqLgCH1YJpGamMxFgf%2BMgun%2B%2BEEIM0QNfEWXE3YvKKdWM3%2BCItnGFrkEErG5qt8tA8Hfostjsrp1qTsu7KFLGYj5N7x5hCG66jXaJtoYltSBWd7TlB%2F7MMEb%2FDRiftHn68ShF2O40MrL3F4qerRgYz%2BA2CVNc2lvXzMliNh1lvbWO2efO4XMYxi%2FRlSrSlZKSj1ZRjXJuwmD%2FdZCGX6WqxbZu%2BVfcjltLbOkDv7Rnqc8D2MpWzQt8TQZKtSxpC9pdnhKpgMUc1qkR4%2Bxt0jhxJ98mv3jMs8O6imK74Uu2XeJk5VUDne8BM%2FeQik9rPWANcVn6cHPOHazkEaFsrLPw61AzfdXMvq3sN0H3ecaRIy3xGZ39rcNkoYunNQphLH8h2GST5iVGqAvMRVZXtL%2FKq2bF9LqlmBK93QB1cGttRkfn%2BQnMF880RdQqPy2ihY6%2FcpT%2FhrFotPBrxUNQBRu0WsXsgrciOe9w9FyiGFIXH3N%2FBeVPq%2BHYh3jZ4D3UKZheCZ3ei7X%2BZCn5kB8onePOKH8UoPFZ2N7W9%2BRFK8a68VppXXUtSbX%2BVS9gW922TF7jMJK4nMMGOqUB%2BNTCxqJks4djVajhuMZStukR73HAnQkKYtT1Sgn%2BM%2BYPfEIuOXYjkhuoW5TtOF3ST3jJls5PcHHsHg6K0g6I0OQt%2FJffZo0jHiISJcTcLXQ3zj6owuR0AUdeo08EwKcnd3%2F9XiG6IANpyS2zIDRhuGFQswYXxWKKehgCjkNAdhYfctSZjD7ni3lMZHfWgL8bUTFH1gLHymB6oCZZEBZOxs3feoBt&X-Amz-Signature=286298d5d5bbfa0657fc23f9a7584ae5bb6f6014bab336dc1ad6c64a3e75735f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4XH2JFK%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIC9D%2B5v%2FkReLjiHdBL%2FfsXrEA4pZHm7xa8OUH5vNf3weAiEAwyt4bC7uBe7N6e%2FLPaxRaWIgKsYf5FU4MhdubjphQYAq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDKXu%2FdUfuygMe86v%2BircA9vyx3jlmxH%2FfAtBI6plHm0dvwgA9IXAB4qHN5BO6mPwa%2BhjJOVaUuOei7hqqLgCH1YJpGamMxFgf%2BMgun%2B%2BEEIM0QNfEWXE3YvKKdWM3%2BCItnGFrkEErG5qt8tA8Hfostjsrp1qTsu7KFLGYj5N7x5hCG66jXaJtoYltSBWd7TlB%2F7MMEb%2FDRiftHn68ShF2O40MrL3F4qerRgYz%2BA2CVNc2lvXzMliNh1lvbWO2efO4XMYxi%2FRlSrSlZKSj1ZRjXJuwmD%2FdZCGX6WqxbZu%2BVfcjltLbOkDv7Rnqc8D2MpWzQt8TQZKtSxpC9pdnhKpgMUc1qkR4%2Bxt0jhxJ98mv3jMs8O6imK74Uu2XeJk5VUDne8BM%2FeQik9rPWANcVn6cHPOHazkEaFsrLPw61AzfdXMvq3sN0H3ecaRIy3xGZ39rcNkoYunNQphLH8h2GST5iVGqAvMRVZXtL%2FKq2bF9LqlmBK93QB1cGttRkfn%2BQnMF880RdQqPy2ihY6%2FcpT%2FhrFotPBrxUNQBRu0WsXsgrciOe9w9FyiGFIXH3N%2FBeVPq%2BHYh3jZ4D3UKZheCZ3ei7X%2BZCn5kB8onePOKH8UoPFZ2N7W9%2BRFK8a68VppXXUtSbX%2BVS9gW922TF7jMJK4nMMGOqUB%2BNTCxqJks4djVajhuMZStukR73HAnQkKYtT1Sgn%2BM%2BYPfEIuOXYjkhuoW5TtOF3ST3jJls5PcHHsHg6K0g6I0OQt%2FJffZo0jHiISJcTcLXQ3zj6owuR0AUdeo08EwKcnd3%2F9XiG6IANpyS2zIDRhuGFQswYXxWKKehgCjkNAdhYfctSZjD7ni3lMZHfWgL8bUTFH1gLHymB6oCZZEBZOxs3feoBt&X-Amz-Signature=332c2dd03f66dede6d9306ab43c2d5c859e0606854584b970a7d7b2cfb828797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4XH2JFK%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIC9D%2B5v%2FkReLjiHdBL%2FfsXrEA4pZHm7xa8OUH5vNf3weAiEAwyt4bC7uBe7N6e%2FLPaxRaWIgKsYf5FU4MhdubjphQYAq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDKXu%2FdUfuygMe86v%2BircA9vyx3jlmxH%2FfAtBI6plHm0dvwgA9IXAB4qHN5BO6mPwa%2BhjJOVaUuOei7hqqLgCH1YJpGamMxFgf%2BMgun%2B%2BEEIM0QNfEWXE3YvKKdWM3%2BCItnGFrkEErG5qt8tA8Hfostjsrp1qTsu7KFLGYj5N7x5hCG66jXaJtoYltSBWd7TlB%2F7MMEb%2FDRiftHn68ShF2O40MrL3F4qerRgYz%2BA2CVNc2lvXzMliNh1lvbWO2efO4XMYxi%2FRlSrSlZKSj1ZRjXJuwmD%2FdZCGX6WqxbZu%2BVfcjltLbOkDv7Rnqc8D2MpWzQt8TQZKtSxpC9pdnhKpgMUc1qkR4%2Bxt0jhxJ98mv3jMs8O6imK74Uu2XeJk5VUDne8BM%2FeQik9rPWANcVn6cHPOHazkEaFsrLPw61AzfdXMvq3sN0H3ecaRIy3xGZ39rcNkoYunNQphLH8h2GST5iVGqAvMRVZXtL%2FKq2bF9LqlmBK93QB1cGttRkfn%2BQnMF880RdQqPy2ihY6%2FcpT%2FhrFotPBrxUNQBRu0WsXsgrciOe9w9FyiGFIXH3N%2FBeVPq%2BHYh3jZ4D3UKZheCZ3ei7X%2BZCn5kB8onePOKH8UoPFZ2N7W9%2BRFK8a68VppXXUtSbX%2BVS9gW922TF7jMJK4nMMGOqUB%2BNTCxqJks4djVajhuMZStukR73HAnQkKYtT1Sgn%2BM%2BYPfEIuOXYjkhuoW5TtOF3ST3jJls5PcHHsHg6K0g6I0OQt%2FJffZo0jHiISJcTcLXQ3zj6owuR0AUdeo08EwKcnd3%2F9XiG6IANpyS2zIDRhuGFQswYXxWKKehgCjkNAdhYfctSZjD7ni3lMZHfWgL8bUTFH1gLHymB6oCZZEBZOxs3feoBt&X-Amz-Signature=025e37b677838e135df7706eeb7ff77c5c0ff349dada76d0d14e5a99d5b56b7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4XH2JFK%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIC9D%2B5v%2FkReLjiHdBL%2FfsXrEA4pZHm7xa8OUH5vNf3weAiEAwyt4bC7uBe7N6e%2FLPaxRaWIgKsYf5FU4MhdubjphQYAq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDKXu%2FdUfuygMe86v%2BircA9vyx3jlmxH%2FfAtBI6plHm0dvwgA9IXAB4qHN5BO6mPwa%2BhjJOVaUuOei7hqqLgCH1YJpGamMxFgf%2BMgun%2B%2BEEIM0QNfEWXE3YvKKdWM3%2BCItnGFrkEErG5qt8tA8Hfostjsrp1qTsu7KFLGYj5N7x5hCG66jXaJtoYltSBWd7TlB%2F7MMEb%2FDRiftHn68ShF2O40MrL3F4qerRgYz%2BA2CVNc2lvXzMliNh1lvbWO2efO4XMYxi%2FRlSrSlZKSj1ZRjXJuwmD%2FdZCGX6WqxbZu%2BVfcjltLbOkDv7Rnqc8D2MpWzQt8TQZKtSxpC9pdnhKpgMUc1qkR4%2Bxt0jhxJ98mv3jMs8O6imK74Uu2XeJk5VUDne8BM%2FeQik9rPWANcVn6cHPOHazkEaFsrLPw61AzfdXMvq3sN0H3ecaRIy3xGZ39rcNkoYunNQphLH8h2GST5iVGqAvMRVZXtL%2FKq2bF9LqlmBK93QB1cGttRkfn%2BQnMF880RdQqPy2ihY6%2FcpT%2FhrFotPBrxUNQBRu0WsXsgrciOe9w9FyiGFIXH3N%2FBeVPq%2BHYh3jZ4D3UKZheCZ3ei7X%2BZCn5kB8onePOKH8UoPFZ2N7W9%2BRFK8a68VppXXUtSbX%2BVS9gW922TF7jMJK4nMMGOqUB%2BNTCxqJks4djVajhuMZStukR73HAnQkKYtT1Sgn%2BM%2BYPfEIuOXYjkhuoW5TtOF3ST3jJls5PcHHsHg6K0g6I0OQt%2FJffZo0jHiISJcTcLXQ3zj6owuR0AUdeo08EwKcnd3%2F9XiG6IANpyS2zIDRhuGFQswYXxWKKehgCjkNAdhYfctSZjD7ni3lMZHfWgL8bUTFH1gLHymB6oCZZEBZOxs3feoBt&X-Amz-Signature=2e1515307920d668f31244536c2a8d54805926f032b2cd64b84e6c066216d833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4XH2JFK%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIC9D%2B5v%2FkReLjiHdBL%2FfsXrEA4pZHm7xa8OUH5vNf3weAiEAwyt4bC7uBe7N6e%2FLPaxRaWIgKsYf5FU4MhdubjphQYAq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDKXu%2FdUfuygMe86v%2BircA9vyx3jlmxH%2FfAtBI6plHm0dvwgA9IXAB4qHN5BO6mPwa%2BhjJOVaUuOei7hqqLgCH1YJpGamMxFgf%2BMgun%2B%2BEEIM0QNfEWXE3YvKKdWM3%2BCItnGFrkEErG5qt8tA8Hfostjsrp1qTsu7KFLGYj5N7x5hCG66jXaJtoYltSBWd7TlB%2F7MMEb%2FDRiftHn68ShF2O40MrL3F4qerRgYz%2BA2CVNc2lvXzMliNh1lvbWO2efO4XMYxi%2FRlSrSlZKSj1ZRjXJuwmD%2FdZCGX6WqxbZu%2BVfcjltLbOkDv7Rnqc8D2MpWzQt8TQZKtSxpC9pdnhKpgMUc1qkR4%2Bxt0jhxJ98mv3jMs8O6imK74Uu2XeJk5VUDne8BM%2FeQik9rPWANcVn6cHPOHazkEaFsrLPw61AzfdXMvq3sN0H3ecaRIy3xGZ39rcNkoYunNQphLH8h2GST5iVGqAvMRVZXtL%2FKq2bF9LqlmBK93QB1cGttRkfn%2BQnMF880RdQqPy2ihY6%2FcpT%2FhrFotPBrxUNQBRu0WsXsgrciOe9w9FyiGFIXH3N%2FBeVPq%2BHYh3jZ4D3UKZheCZ3ei7X%2BZCn5kB8onePOKH8UoPFZ2N7W9%2BRFK8a68VppXXUtSbX%2BVS9gW922TF7jMJK4nMMGOqUB%2BNTCxqJks4djVajhuMZStukR73HAnQkKYtT1Sgn%2BM%2BYPfEIuOXYjkhuoW5TtOF3ST3jJls5PcHHsHg6K0g6I0OQt%2FJffZo0jHiISJcTcLXQ3zj6owuR0AUdeo08EwKcnd3%2F9XiG6IANpyS2zIDRhuGFQswYXxWKKehgCjkNAdhYfctSZjD7ni3lMZHfWgL8bUTFH1gLHymB6oCZZEBZOxs3feoBt&X-Amz-Signature=8c552745702a7413d9a8faa5da8121111375dc926b73a62f79dda6d0a8f7e610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4XH2JFK%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIC9D%2B5v%2FkReLjiHdBL%2FfsXrEA4pZHm7xa8OUH5vNf3weAiEAwyt4bC7uBe7N6e%2FLPaxRaWIgKsYf5FU4MhdubjphQYAq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDKXu%2FdUfuygMe86v%2BircA9vyx3jlmxH%2FfAtBI6plHm0dvwgA9IXAB4qHN5BO6mPwa%2BhjJOVaUuOei7hqqLgCH1YJpGamMxFgf%2BMgun%2B%2BEEIM0QNfEWXE3YvKKdWM3%2BCItnGFrkEErG5qt8tA8Hfostjsrp1qTsu7KFLGYj5N7x5hCG66jXaJtoYltSBWd7TlB%2F7MMEb%2FDRiftHn68ShF2O40MrL3F4qerRgYz%2BA2CVNc2lvXzMliNh1lvbWO2efO4XMYxi%2FRlSrSlZKSj1ZRjXJuwmD%2FdZCGX6WqxbZu%2BVfcjltLbOkDv7Rnqc8D2MpWzQt8TQZKtSxpC9pdnhKpgMUc1qkR4%2Bxt0jhxJ98mv3jMs8O6imK74Uu2XeJk5VUDne8BM%2FeQik9rPWANcVn6cHPOHazkEaFsrLPw61AzfdXMvq3sN0H3ecaRIy3xGZ39rcNkoYunNQphLH8h2GST5iVGqAvMRVZXtL%2FKq2bF9LqlmBK93QB1cGttRkfn%2BQnMF880RdQqPy2ihY6%2FcpT%2FhrFotPBrxUNQBRu0WsXsgrciOe9w9FyiGFIXH3N%2FBeVPq%2BHYh3jZ4D3UKZheCZ3ei7X%2BZCn5kB8onePOKH8UoPFZ2N7W9%2BRFK8a68VppXXUtSbX%2BVS9gW922TF7jMJK4nMMGOqUB%2BNTCxqJks4djVajhuMZStukR73HAnQkKYtT1Sgn%2BM%2BYPfEIuOXYjkhuoW5TtOF3ST3jJls5PcHHsHg6K0g6I0OQt%2FJffZo0jHiISJcTcLXQ3zj6owuR0AUdeo08EwKcnd3%2F9XiG6IANpyS2zIDRhuGFQswYXxWKKehgCjkNAdhYfctSZjD7ni3lMZHfWgL8bUTFH1gLHymB6oCZZEBZOxs3feoBt&X-Amz-Signature=a8c5c9ce22dba35ee5ff06d9fc85a75d5cc8b50cc9df3c12fd9bb6f171137d01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
