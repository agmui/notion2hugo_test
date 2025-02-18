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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG4FHRY3%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHwpu3qh7AFKevYAtkkudJg%2FG%2BUce8EAHob3Xv9DhFmSAiEA549aKomrHtrOz%2BIcyiJniBJl%2FNjqVTudWC2OeHNgcx8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEr8AGo%2FPHdxlWn09ircA%2BFlCty7y2VV5ichEPIoGnvo%2BMsKhg6XjO6C9RF%2BadeDr5zsz5acZPkd6VfjdfTsKn0P8lzuRlUgKGD%2BrNfLQ50mmLwsQ8a92%2BDlTFXlikdgsphi%2BOfqQnaw2tjU9caDAp%2BKWGfyNEJ7Y6i0xzjynaJvBXIZ9IOoKJzi3zNj9bAsdiz9Zu41H1PTG51q%2FcdfVEi6LNMd30D4zywcTOldNfIi%2F3fL4eKLpq6zUh1moLoLIulR5fkx1SBMpIMi0AgBzvaPJ5vGN%2FHnTNVTy9pI%2FalyXm8H4%2FMnL0PE0foUgZy1TJI0ID%2F5aTS0cn7yZOWyzpqnOXENlpeDmAjeIP3FHqiS5Zel1uQofa6RRTNUH9B%2FfLIBH9d%2Ba3xJf%2Bt3eP5ELjUjaD5nrfThXASHVJdwLDsc6l8hEoopunCJ93sUSeHEDIdOGsIqeVwFvL%2B4IxLIeWy9HAywVPPDhk0PRkaUFAHHwGS5QLa%2FdTDvicoEz%2FWAZcX3%2FZNGfB2wkNYmHRAXZzv5p298LSjHrtqxcoNen6smv%2Bnb6DO3KrhayZmKvstDrr4tyX3fOx09ozLM7wk3etZrm6r1mGIBqvmgvK93M8Qgl09kzOgA7JdVlgkUemBE7UWVkKZVGb9gecYaMIn3070GOqUBwGwKHkja5V6fdeLhQkv0ubx2IQuDCSWynlODouM7%2BqVL2NT%2FcJ7pMWWJG%2FjJqwa1Hgp%2Fpzn73bAVyC3UZynZ1vmFEyxr1x0i%2BgDX3CBPeSLe3OwwqxKDmnrbJf8AUQG6dToFTzvgc2%2Bfdb0v83VVDZo4%2BT1FGgs3e84Q14CIAImd0N1ayf2iMBy2eNvOMd%2BljkeIhoZNOxhWyucgCcslbYxofM36&X-Amz-Signature=e007114be1877352aec18c820e5e813fa43c746c23a42aed037550a04b1819ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG4FHRY3%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHwpu3qh7AFKevYAtkkudJg%2FG%2BUce8EAHob3Xv9DhFmSAiEA549aKomrHtrOz%2BIcyiJniBJl%2FNjqVTudWC2OeHNgcx8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEr8AGo%2FPHdxlWn09ircA%2BFlCty7y2VV5ichEPIoGnvo%2BMsKhg6XjO6C9RF%2BadeDr5zsz5acZPkd6VfjdfTsKn0P8lzuRlUgKGD%2BrNfLQ50mmLwsQ8a92%2BDlTFXlikdgsphi%2BOfqQnaw2tjU9caDAp%2BKWGfyNEJ7Y6i0xzjynaJvBXIZ9IOoKJzi3zNj9bAsdiz9Zu41H1PTG51q%2FcdfVEi6LNMd30D4zywcTOldNfIi%2F3fL4eKLpq6zUh1moLoLIulR5fkx1SBMpIMi0AgBzvaPJ5vGN%2FHnTNVTy9pI%2FalyXm8H4%2FMnL0PE0foUgZy1TJI0ID%2F5aTS0cn7yZOWyzpqnOXENlpeDmAjeIP3FHqiS5Zel1uQofa6RRTNUH9B%2FfLIBH9d%2Ba3xJf%2Bt3eP5ELjUjaD5nrfThXASHVJdwLDsc6l8hEoopunCJ93sUSeHEDIdOGsIqeVwFvL%2B4IxLIeWy9HAywVPPDhk0PRkaUFAHHwGS5QLa%2FdTDvicoEz%2FWAZcX3%2FZNGfB2wkNYmHRAXZzv5p298LSjHrtqxcoNen6smv%2Bnb6DO3KrhayZmKvstDrr4tyX3fOx09ozLM7wk3etZrm6r1mGIBqvmgvK93M8Qgl09kzOgA7JdVlgkUemBE7UWVkKZVGb9gecYaMIn3070GOqUBwGwKHkja5V6fdeLhQkv0ubx2IQuDCSWynlODouM7%2BqVL2NT%2FcJ7pMWWJG%2FjJqwa1Hgp%2Fpzn73bAVyC3UZynZ1vmFEyxr1x0i%2BgDX3CBPeSLe3OwwqxKDmnrbJf8AUQG6dToFTzvgc2%2Bfdb0v83VVDZo4%2BT1FGgs3e84Q14CIAImd0N1ayf2iMBy2eNvOMd%2BljkeIhoZNOxhWyucgCcslbYxofM36&X-Amz-Signature=7f8d2dc57b0a8f046e674ee9080561a6eed0d862fd71f2bc1709cad814b6c2c2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG4FHRY3%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHwpu3qh7AFKevYAtkkudJg%2FG%2BUce8EAHob3Xv9DhFmSAiEA549aKomrHtrOz%2BIcyiJniBJl%2FNjqVTudWC2OeHNgcx8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEr8AGo%2FPHdxlWn09ircA%2BFlCty7y2VV5ichEPIoGnvo%2BMsKhg6XjO6C9RF%2BadeDr5zsz5acZPkd6VfjdfTsKn0P8lzuRlUgKGD%2BrNfLQ50mmLwsQ8a92%2BDlTFXlikdgsphi%2BOfqQnaw2tjU9caDAp%2BKWGfyNEJ7Y6i0xzjynaJvBXIZ9IOoKJzi3zNj9bAsdiz9Zu41H1PTG51q%2FcdfVEi6LNMd30D4zywcTOldNfIi%2F3fL4eKLpq6zUh1moLoLIulR5fkx1SBMpIMi0AgBzvaPJ5vGN%2FHnTNVTy9pI%2FalyXm8H4%2FMnL0PE0foUgZy1TJI0ID%2F5aTS0cn7yZOWyzpqnOXENlpeDmAjeIP3FHqiS5Zel1uQofa6RRTNUH9B%2FfLIBH9d%2Ba3xJf%2Bt3eP5ELjUjaD5nrfThXASHVJdwLDsc6l8hEoopunCJ93sUSeHEDIdOGsIqeVwFvL%2B4IxLIeWy9HAywVPPDhk0PRkaUFAHHwGS5QLa%2FdTDvicoEz%2FWAZcX3%2FZNGfB2wkNYmHRAXZzv5p298LSjHrtqxcoNen6smv%2Bnb6DO3KrhayZmKvstDrr4tyX3fOx09ozLM7wk3etZrm6r1mGIBqvmgvK93M8Qgl09kzOgA7JdVlgkUemBE7UWVkKZVGb9gecYaMIn3070GOqUBwGwKHkja5V6fdeLhQkv0ubx2IQuDCSWynlODouM7%2BqVL2NT%2FcJ7pMWWJG%2FjJqwa1Hgp%2Fpzn73bAVyC3UZynZ1vmFEyxr1x0i%2BgDX3CBPeSLe3OwwqxKDmnrbJf8AUQG6dToFTzvgc2%2Bfdb0v83VVDZo4%2BT1FGgs3e84Q14CIAImd0N1ayf2iMBy2eNvOMd%2BljkeIhoZNOxhWyucgCcslbYxofM36&X-Amz-Signature=bf3187bc398da83e48b6b620a2bc9906bfdf6bb7fa8bd06cf2a1e49d611cb3ca&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG4FHRY3%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHwpu3qh7AFKevYAtkkudJg%2FG%2BUce8EAHob3Xv9DhFmSAiEA549aKomrHtrOz%2BIcyiJniBJl%2FNjqVTudWC2OeHNgcx8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEr8AGo%2FPHdxlWn09ircA%2BFlCty7y2VV5ichEPIoGnvo%2BMsKhg6XjO6C9RF%2BadeDr5zsz5acZPkd6VfjdfTsKn0P8lzuRlUgKGD%2BrNfLQ50mmLwsQ8a92%2BDlTFXlikdgsphi%2BOfqQnaw2tjU9caDAp%2BKWGfyNEJ7Y6i0xzjynaJvBXIZ9IOoKJzi3zNj9bAsdiz9Zu41H1PTG51q%2FcdfVEi6LNMd30D4zywcTOldNfIi%2F3fL4eKLpq6zUh1moLoLIulR5fkx1SBMpIMi0AgBzvaPJ5vGN%2FHnTNVTy9pI%2FalyXm8H4%2FMnL0PE0foUgZy1TJI0ID%2F5aTS0cn7yZOWyzpqnOXENlpeDmAjeIP3FHqiS5Zel1uQofa6RRTNUH9B%2FfLIBH9d%2Ba3xJf%2Bt3eP5ELjUjaD5nrfThXASHVJdwLDsc6l8hEoopunCJ93sUSeHEDIdOGsIqeVwFvL%2B4IxLIeWy9HAywVPPDhk0PRkaUFAHHwGS5QLa%2FdTDvicoEz%2FWAZcX3%2FZNGfB2wkNYmHRAXZzv5p298LSjHrtqxcoNen6smv%2Bnb6DO3KrhayZmKvstDrr4tyX3fOx09ozLM7wk3etZrm6r1mGIBqvmgvK93M8Qgl09kzOgA7JdVlgkUemBE7UWVkKZVGb9gecYaMIn3070GOqUBwGwKHkja5V6fdeLhQkv0ubx2IQuDCSWynlODouM7%2BqVL2NT%2FcJ7pMWWJG%2FjJqwa1Hgp%2Fpzn73bAVyC3UZynZ1vmFEyxr1x0i%2BgDX3CBPeSLe3OwwqxKDmnrbJf8AUQG6dToFTzvgc2%2Bfdb0v83VVDZo4%2BT1FGgs3e84Q14CIAImd0N1ayf2iMBy2eNvOMd%2BljkeIhoZNOxhWyucgCcslbYxofM36&X-Amz-Signature=7e51f1d25edbfb02ec372e54517a440be51d6adc58cd877122b2298986e6d85e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG4FHRY3%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHwpu3qh7AFKevYAtkkudJg%2FG%2BUce8EAHob3Xv9DhFmSAiEA549aKomrHtrOz%2BIcyiJniBJl%2FNjqVTudWC2OeHNgcx8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEr8AGo%2FPHdxlWn09ircA%2BFlCty7y2VV5ichEPIoGnvo%2BMsKhg6XjO6C9RF%2BadeDr5zsz5acZPkd6VfjdfTsKn0P8lzuRlUgKGD%2BrNfLQ50mmLwsQ8a92%2BDlTFXlikdgsphi%2BOfqQnaw2tjU9caDAp%2BKWGfyNEJ7Y6i0xzjynaJvBXIZ9IOoKJzi3zNj9bAsdiz9Zu41H1PTG51q%2FcdfVEi6LNMd30D4zywcTOldNfIi%2F3fL4eKLpq6zUh1moLoLIulR5fkx1SBMpIMi0AgBzvaPJ5vGN%2FHnTNVTy9pI%2FalyXm8H4%2FMnL0PE0foUgZy1TJI0ID%2F5aTS0cn7yZOWyzpqnOXENlpeDmAjeIP3FHqiS5Zel1uQofa6RRTNUH9B%2FfLIBH9d%2Ba3xJf%2Bt3eP5ELjUjaD5nrfThXASHVJdwLDsc6l8hEoopunCJ93sUSeHEDIdOGsIqeVwFvL%2B4IxLIeWy9HAywVPPDhk0PRkaUFAHHwGS5QLa%2FdTDvicoEz%2FWAZcX3%2FZNGfB2wkNYmHRAXZzv5p298LSjHrtqxcoNen6smv%2Bnb6DO3KrhayZmKvstDrr4tyX3fOx09ozLM7wk3etZrm6r1mGIBqvmgvK93M8Qgl09kzOgA7JdVlgkUemBE7UWVkKZVGb9gecYaMIn3070GOqUBwGwKHkja5V6fdeLhQkv0ubx2IQuDCSWynlODouM7%2BqVL2NT%2FcJ7pMWWJG%2FjJqwa1Hgp%2Fpzn73bAVyC3UZynZ1vmFEyxr1x0i%2BgDX3CBPeSLe3OwwqxKDmnrbJf8AUQG6dToFTzvgc2%2Bfdb0v83VVDZo4%2BT1FGgs3e84Q14CIAImd0N1ayf2iMBy2eNvOMd%2BljkeIhoZNOxhWyucgCcslbYxofM36&X-Amz-Signature=65e8fe8b8a4441bd64838cf6919b5e71a58b9796050eeb2520cf783ef7100ba6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG4FHRY3%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHwpu3qh7AFKevYAtkkudJg%2FG%2BUce8EAHob3Xv9DhFmSAiEA549aKomrHtrOz%2BIcyiJniBJl%2FNjqVTudWC2OeHNgcx8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEr8AGo%2FPHdxlWn09ircA%2BFlCty7y2VV5ichEPIoGnvo%2BMsKhg6XjO6C9RF%2BadeDr5zsz5acZPkd6VfjdfTsKn0P8lzuRlUgKGD%2BrNfLQ50mmLwsQ8a92%2BDlTFXlikdgsphi%2BOfqQnaw2tjU9caDAp%2BKWGfyNEJ7Y6i0xzjynaJvBXIZ9IOoKJzi3zNj9bAsdiz9Zu41H1PTG51q%2FcdfVEi6LNMd30D4zywcTOldNfIi%2F3fL4eKLpq6zUh1moLoLIulR5fkx1SBMpIMi0AgBzvaPJ5vGN%2FHnTNVTy9pI%2FalyXm8H4%2FMnL0PE0foUgZy1TJI0ID%2F5aTS0cn7yZOWyzpqnOXENlpeDmAjeIP3FHqiS5Zel1uQofa6RRTNUH9B%2FfLIBH9d%2Ba3xJf%2Bt3eP5ELjUjaD5nrfThXASHVJdwLDsc6l8hEoopunCJ93sUSeHEDIdOGsIqeVwFvL%2B4IxLIeWy9HAywVPPDhk0PRkaUFAHHwGS5QLa%2FdTDvicoEz%2FWAZcX3%2FZNGfB2wkNYmHRAXZzv5p298LSjHrtqxcoNen6smv%2Bnb6DO3KrhayZmKvstDrr4tyX3fOx09ozLM7wk3etZrm6r1mGIBqvmgvK93M8Qgl09kzOgA7JdVlgkUemBE7UWVkKZVGb9gecYaMIn3070GOqUBwGwKHkja5V6fdeLhQkv0ubx2IQuDCSWynlODouM7%2BqVL2NT%2FcJ7pMWWJG%2FjJqwa1Hgp%2Fpzn73bAVyC3UZynZ1vmFEyxr1x0i%2BgDX3CBPeSLe3OwwqxKDmnrbJf8AUQG6dToFTzvgc2%2Bfdb0v83VVDZo4%2BT1FGgs3e84Q14CIAImd0N1ayf2iMBy2eNvOMd%2BljkeIhoZNOxhWyucgCcslbYxofM36&X-Amz-Signature=e4972c30cd3dfb92ac83f904529155514d66da0ba3a7f15dd7abded3a4bfe7bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG4FHRY3%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHwpu3qh7AFKevYAtkkudJg%2FG%2BUce8EAHob3Xv9DhFmSAiEA549aKomrHtrOz%2BIcyiJniBJl%2FNjqVTudWC2OeHNgcx8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEr8AGo%2FPHdxlWn09ircA%2BFlCty7y2VV5ichEPIoGnvo%2BMsKhg6XjO6C9RF%2BadeDr5zsz5acZPkd6VfjdfTsKn0P8lzuRlUgKGD%2BrNfLQ50mmLwsQ8a92%2BDlTFXlikdgsphi%2BOfqQnaw2tjU9caDAp%2BKWGfyNEJ7Y6i0xzjynaJvBXIZ9IOoKJzi3zNj9bAsdiz9Zu41H1PTG51q%2FcdfVEi6LNMd30D4zywcTOldNfIi%2F3fL4eKLpq6zUh1moLoLIulR5fkx1SBMpIMi0AgBzvaPJ5vGN%2FHnTNVTy9pI%2FalyXm8H4%2FMnL0PE0foUgZy1TJI0ID%2F5aTS0cn7yZOWyzpqnOXENlpeDmAjeIP3FHqiS5Zel1uQofa6RRTNUH9B%2FfLIBH9d%2Ba3xJf%2Bt3eP5ELjUjaD5nrfThXASHVJdwLDsc6l8hEoopunCJ93sUSeHEDIdOGsIqeVwFvL%2B4IxLIeWy9HAywVPPDhk0PRkaUFAHHwGS5QLa%2FdTDvicoEz%2FWAZcX3%2FZNGfB2wkNYmHRAXZzv5p298LSjHrtqxcoNen6smv%2Bnb6DO3KrhayZmKvstDrr4tyX3fOx09ozLM7wk3etZrm6r1mGIBqvmgvK93M8Qgl09kzOgA7JdVlgkUemBE7UWVkKZVGb9gecYaMIn3070GOqUBwGwKHkja5V6fdeLhQkv0ubx2IQuDCSWynlODouM7%2BqVL2NT%2FcJ7pMWWJG%2FjJqwa1Hgp%2Fpzn73bAVyC3UZynZ1vmFEyxr1x0i%2BgDX3CBPeSLe3OwwqxKDmnrbJf8AUQG6dToFTzvgc2%2Bfdb0v83VVDZo4%2BT1FGgs3e84Q14CIAImd0N1ayf2iMBy2eNvOMd%2BljkeIhoZNOxhWyucgCcslbYxofM36&X-Amz-Signature=cc62312bfb3105ebacc69fdabba587b0dcc96876252c4b856a1322d0409cbfab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG4FHRY3%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHwpu3qh7AFKevYAtkkudJg%2FG%2BUce8EAHob3Xv9DhFmSAiEA549aKomrHtrOz%2BIcyiJniBJl%2FNjqVTudWC2OeHNgcx8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEr8AGo%2FPHdxlWn09ircA%2BFlCty7y2VV5ichEPIoGnvo%2BMsKhg6XjO6C9RF%2BadeDr5zsz5acZPkd6VfjdfTsKn0P8lzuRlUgKGD%2BrNfLQ50mmLwsQ8a92%2BDlTFXlikdgsphi%2BOfqQnaw2tjU9caDAp%2BKWGfyNEJ7Y6i0xzjynaJvBXIZ9IOoKJzi3zNj9bAsdiz9Zu41H1PTG51q%2FcdfVEi6LNMd30D4zywcTOldNfIi%2F3fL4eKLpq6zUh1moLoLIulR5fkx1SBMpIMi0AgBzvaPJ5vGN%2FHnTNVTy9pI%2FalyXm8H4%2FMnL0PE0foUgZy1TJI0ID%2F5aTS0cn7yZOWyzpqnOXENlpeDmAjeIP3FHqiS5Zel1uQofa6RRTNUH9B%2FfLIBH9d%2Ba3xJf%2Bt3eP5ELjUjaD5nrfThXASHVJdwLDsc6l8hEoopunCJ93sUSeHEDIdOGsIqeVwFvL%2B4IxLIeWy9HAywVPPDhk0PRkaUFAHHwGS5QLa%2FdTDvicoEz%2FWAZcX3%2FZNGfB2wkNYmHRAXZzv5p298LSjHrtqxcoNen6smv%2Bnb6DO3KrhayZmKvstDrr4tyX3fOx09ozLM7wk3etZrm6r1mGIBqvmgvK93M8Qgl09kzOgA7JdVlgkUemBE7UWVkKZVGb9gecYaMIn3070GOqUBwGwKHkja5V6fdeLhQkv0ubx2IQuDCSWynlODouM7%2BqVL2NT%2FcJ7pMWWJG%2FjJqwa1Hgp%2Fpzn73bAVyC3UZynZ1vmFEyxr1x0i%2BgDX3CBPeSLe3OwwqxKDmnrbJf8AUQG6dToFTzvgc2%2Bfdb0v83VVDZo4%2BT1FGgs3e84Q14CIAImd0N1ayf2iMBy2eNvOMd%2BljkeIhoZNOxhWyucgCcslbYxofM36&X-Amz-Signature=ad596d452a871ac9bf0eb0aad4d73e6dbd51003f11c970e410e543f4022ded0c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
