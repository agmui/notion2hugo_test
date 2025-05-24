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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZF7L2WT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQC%2BrJUA4CW6izk3teCTfCz1aviP1m6YOy1kilr5bmtFGAIhALiRAmf9OPU%2BTgOSX9Q2s7YzUk9QO6%2B0%2FGyzph67GHBmKv8DCBUQABoMNjM3NDIzMTgzODA1IgyHxfSOK%2Bck%2FUIV69Aq3AMxGYUnEv%2FkaN0HNOfbkH1XgtpczYiL3r4o4o1VnFqo5M2IuN5bNdwgxjjNFXmAX1X0fsUXemusZzNyhtoYSeUBzZxYVVTWsyUnH91zNYB92O9vbrQh7FVwPvVYBmxMned6Z36I%2BSaW5GAASDwK929gG5aYTj0JSAknuApNkFE9Svd9%2FHcA2XCw2T9dgaRBoST0LSWcM%2BtQOSJ9DH0kLsrDX3k9bkMRoqlSXJOCSP39P2uaaMIsvE5%2Bxke6ht95LFgSMLCPjhyV2DOvPUE18nMDESOy0d5MJY0yq9X4n2BOAKxFb3DcRyrwqfiRnnTH9vjkNlR%2Bwofc4%2Fy6x1Bg9hUmF2g%2FiZMMt7vPzG6EvvSgE5Vt1YBAn%2Fz6AlMGjglBCKjM8FBgAwOnrcdzGen4PsUiM1FTGn0NAk6RjUHVn1XfeGZ1xX2Ij5SppFc7b62CEzzwnmxViQN%2FqxRdfHqKJOgKyd3oXtfMN32Nf07Luq3%2F%2BR0q37NJVzUi%2BMflhkrCaS3J1Re4p32BTTBAGqbMiE0BYqRV6h2tvTAFTl%2F7HzKX41iY%2F1CEc5DHlD63LaWGCBOq593ooZilkY%2BEp5PcBdJqmbLxwG4%2BX4b2N7vLhXLdGKhNaeR%2BrSpZHw6UyTCD9MbBBjqkAUMgYCv5Jr%2FkunJda%2BlMUpu9RpakPFI7PMGOlC0AAnNZ4QlyhHoKvdV%2F2Y3qtzgM9EMFzISUWru6E7JAlGcJOqiXgUc33yWGhTNTd2y%2FKbUj5W7tjjyN5BD5OoL50Q%2BPFq6smJl3v5WKYFIZ6dkPgENbMPs1kg2fzrPt%2BefdMagzKjnKkfhV4QZz3l0SEpgXuu5u3mytlCXsnALi%2FVy5t8v7X5BP&X-Amz-Signature=fe56194ebfe0297c2acaa26e2e23ec93ff7fb8df09de82e65b3fe2d44a5141d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZF7L2WT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQC%2BrJUA4CW6izk3teCTfCz1aviP1m6YOy1kilr5bmtFGAIhALiRAmf9OPU%2BTgOSX9Q2s7YzUk9QO6%2B0%2FGyzph67GHBmKv8DCBUQABoMNjM3NDIzMTgzODA1IgyHxfSOK%2Bck%2FUIV69Aq3AMxGYUnEv%2FkaN0HNOfbkH1XgtpczYiL3r4o4o1VnFqo5M2IuN5bNdwgxjjNFXmAX1X0fsUXemusZzNyhtoYSeUBzZxYVVTWsyUnH91zNYB92O9vbrQh7FVwPvVYBmxMned6Z36I%2BSaW5GAASDwK929gG5aYTj0JSAknuApNkFE9Svd9%2FHcA2XCw2T9dgaRBoST0LSWcM%2BtQOSJ9DH0kLsrDX3k9bkMRoqlSXJOCSP39P2uaaMIsvE5%2Bxke6ht95LFgSMLCPjhyV2DOvPUE18nMDESOy0d5MJY0yq9X4n2BOAKxFb3DcRyrwqfiRnnTH9vjkNlR%2Bwofc4%2Fy6x1Bg9hUmF2g%2FiZMMt7vPzG6EvvSgE5Vt1YBAn%2Fz6AlMGjglBCKjM8FBgAwOnrcdzGen4PsUiM1FTGn0NAk6RjUHVn1XfeGZ1xX2Ij5SppFc7b62CEzzwnmxViQN%2FqxRdfHqKJOgKyd3oXtfMN32Nf07Luq3%2F%2BR0q37NJVzUi%2BMflhkrCaS3J1Re4p32BTTBAGqbMiE0BYqRV6h2tvTAFTl%2F7HzKX41iY%2F1CEc5DHlD63LaWGCBOq593ooZilkY%2BEp5PcBdJqmbLxwG4%2BX4b2N7vLhXLdGKhNaeR%2BrSpZHw6UyTCD9MbBBjqkAUMgYCv5Jr%2FkunJda%2BlMUpu9RpakPFI7PMGOlC0AAnNZ4QlyhHoKvdV%2F2Y3qtzgM9EMFzISUWru6E7JAlGcJOqiXgUc33yWGhTNTd2y%2FKbUj5W7tjjyN5BD5OoL50Q%2BPFq6smJl3v5WKYFIZ6dkPgENbMPs1kg2fzrPt%2BefdMagzKjnKkfhV4QZz3l0SEpgXuu5u3mytlCXsnALi%2FVy5t8v7X5BP&X-Amz-Signature=01a8328eb00391236dfd8afd7d451a388100131ece1f3ab25c4fcd682c96cb02&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZF7L2WT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQC%2BrJUA4CW6izk3teCTfCz1aviP1m6YOy1kilr5bmtFGAIhALiRAmf9OPU%2BTgOSX9Q2s7YzUk9QO6%2B0%2FGyzph67GHBmKv8DCBUQABoMNjM3NDIzMTgzODA1IgyHxfSOK%2Bck%2FUIV69Aq3AMxGYUnEv%2FkaN0HNOfbkH1XgtpczYiL3r4o4o1VnFqo5M2IuN5bNdwgxjjNFXmAX1X0fsUXemusZzNyhtoYSeUBzZxYVVTWsyUnH91zNYB92O9vbrQh7FVwPvVYBmxMned6Z36I%2BSaW5GAASDwK929gG5aYTj0JSAknuApNkFE9Svd9%2FHcA2XCw2T9dgaRBoST0LSWcM%2BtQOSJ9DH0kLsrDX3k9bkMRoqlSXJOCSP39P2uaaMIsvE5%2Bxke6ht95LFgSMLCPjhyV2DOvPUE18nMDESOy0d5MJY0yq9X4n2BOAKxFb3DcRyrwqfiRnnTH9vjkNlR%2Bwofc4%2Fy6x1Bg9hUmF2g%2FiZMMt7vPzG6EvvSgE5Vt1YBAn%2Fz6AlMGjglBCKjM8FBgAwOnrcdzGen4PsUiM1FTGn0NAk6RjUHVn1XfeGZ1xX2Ij5SppFc7b62CEzzwnmxViQN%2FqxRdfHqKJOgKyd3oXtfMN32Nf07Luq3%2F%2BR0q37NJVzUi%2BMflhkrCaS3J1Re4p32BTTBAGqbMiE0BYqRV6h2tvTAFTl%2F7HzKX41iY%2F1CEc5DHlD63LaWGCBOq593ooZilkY%2BEp5PcBdJqmbLxwG4%2BX4b2N7vLhXLdGKhNaeR%2BrSpZHw6UyTCD9MbBBjqkAUMgYCv5Jr%2FkunJda%2BlMUpu9RpakPFI7PMGOlC0AAnNZ4QlyhHoKvdV%2F2Y3qtzgM9EMFzISUWru6E7JAlGcJOqiXgUc33yWGhTNTd2y%2FKbUj5W7tjjyN5BD5OoL50Q%2BPFq6smJl3v5WKYFIZ6dkPgENbMPs1kg2fzrPt%2BefdMagzKjnKkfhV4QZz3l0SEpgXuu5u3mytlCXsnALi%2FVy5t8v7X5BP&X-Amz-Signature=5f098487e97a7839022b99dc580fdd49cf4f973398958604fba3693b78d9a70d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZF7L2WT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQC%2BrJUA4CW6izk3teCTfCz1aviP1m6YOy1kilr5bmtFGAIhALiRAmf9OPU%2BTgOSX9Q2s7YzUk9QO6%2B0%2FGyzph67GHBmKv8DCBUQABoMNjM3NDIzMTgzODA1IgyHxfSOK%2Bck%2FUIV69Aq3AMxGYUnEv%2FkaN0HNOfbkH1XgtpczYiL3r4o4o1VnFqo5M2IuN5bNdwgxjjNFXmAX1X0fsUXemusZzNyhtoYSeUBzZxYVVTWsyUnH91zNYB92O9vbrQh7FVwPvVYBmxMned6Z36I%2BSaW5GAASDwK929gG5aYTj0JSAknuApNkFE9Svd9%2FHcA2XCw2T9dgaRBoST0LSWcM%2BtQOSJ9DH0kLsrDX3k9bkMRoqlSXJOCSP39P2uaaMIsvE5%2Bxke6ht95LFgSMLCPjhyV2DOvPUE18nMDESOy0d5MJY0yq9X4n2BOAKxFb3DcRyrwqfiRnnTH9vjkNlR%2Bwofc4%2Fy6x1Bg9hUmF2g%2FiZMMt7vPzG6EvvSgE5Vt1YBAn%2Fz6AlMGjglBCKjM8FBgAwOnrcdzGen4PsUiM1FTGn0NAk6RjUHVn1XfeGZ1xX2Ij5SppFc7b62CEzzwnmxViQN%2FqxRdfHqKJOgKyd3oXtfMN32Nf07Luq3%2F%2BR0q37NJVzUi%2BMflhkrCaS3J1Re4p32BTTBAGqbMiE0BYqRV6h2tvTAFTl%2F7HzKX41iY%2F1CEc5DHlD63LaWGCBOq593ooZilkY%2BEp5PcBdJqmbLxwG4%2BX4b2N7vLhXLdGKhNaeR%2BrSpZHw6UyTCD9MbBBjqkAUMgYCv5Jr%2FkunJda%2BlMUpu9RpakPFI7PMGOlC0AAnNZ4QlyhHoKvdV%2F2Y3qtzgM9EMFzISUWru6E7JAlGcJOqiXgUc33yWGhTNTd2y%2FKbUj5W7tjjyN5BD5OoL50Q%2BPFq6smJl3v5WKYFIZ6dkPgENbMPs1kg2fzrPt%2BefdMagzKjnKkfhV4QZz3l0SEpgXuu5u3mytlCXsnALi%2FVy5t8v7X5BP&X-Amz-Signature=45fe1a8beda294c2a325081a5c1b685f98e9f8ae78ec51480c77488bed351741&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZF7L2WT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQC%2BrJUA4CW6izk3teCTfCz1aviP1m6YOy1kilr5bmtFGAIhALiRAmf9OPU%2BTgOSX9Q2s7YzUk9QO6%2B0%2FGyzph67GHBmKv8DCBUQABoMNjM3NDIzMTgzODA1IgyHxfSOK%2Bck%2FUIV69Aq3AMxGYUnEv%2FkaN0HNOfbkH1XgtpczYiL3r4o4o1VnFqo5M2IuN5bNdwgxjjNFXmAX1X0fsUXemusZzNyhtoYSeUBzZxYVVTWsyUnH91zNYB92O9vbrQh7FVwPvVYBmxMned6Z36I%2BSaW5GAASDwK929gG5aYTj0JSAknuApNkFE9Svd9%2FHcA2XCw2T9dgaRBoST0LSWcM%2BtQOSJ9DH0kLsrDX3k9bkMRoqlSXJOCSP39P2uaaMIsvE5%2Bxke6ht95LFgSMLCPjhyV2DOvPUE18nMDESOy0d5MJY0yq9X4n2BOAKxFb3DcRyrwqfiRnnTH9vjkNlR%2Bwofc4%2Fy6x1Bg9hUmF2g%2FiZMMt7vPzG6EvvSgE5Vt1YBAn%2Fz6AlMGjglBCKjM8FBgAwOnrcdzGen4PsUiM1FTGn0NAk6RjUHVn1XfeGZ1xX2Ij5SppFc7b62CEzzwnmxViQN%2FqxRdfHqKJOgKyd3oXtfMN32Nf07Luq3%2F%2BR0q37NJVzUi%2BMflhkrCaS3J1Re4p32BTTBAGqbMiE0BYqRV6h2tvTAFTl%2F7HzKX41iY%2F1CEc5DHlD63LaWGCBOq593ooZilkY%2BEp5PcBdJqmbLxwG4%2BX4b2N7vLhXLdGKhNaeR%2BrSpZHw6UyTCD9MbBBjqkAUMgYCv5Jr%2FkunJda%2BlMUpu9RpakPFI7PMGOlC0AAnNZ4QlyhHoKvdV%2F2Y3qtzgM9EMFzISUWru6E7JAlGcJOqiXgUc33yWGhTNTd2y%2FKbUj5W7tjjyN5BD5OoL50Q%2BPFq6smJl3v5WKYFIZ6dkPgENbMPs1kg2fzrPt%2BefdMagzKjnKkfhV4QZz3l0SEpgXuu5u3mytlCXsnALi%2FVy5t8v7X5BP&X-Amz-Signature=d789aa819d664533490c76f01eb4d885cf4ed127d2cc8005b775dcd7c7859e82&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZF7L2WT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQC%2BrJUA4CW6izk3teCTfCz1aviP1m6YOy1kilr5bmtFGAIhALiRAmf9OPU%2BTgOSX9Q2s7YzUk9QO6%2B0%2FGyzph67GHBmKv8DCBUQABoMNjM3NDIzMTgzODA1IgyHxfSOK%2Bck%2FUIV69Aq3AMxGYUnEv%2FkaN0HNOfbkH1XgtpczYiL3r4o4o1VnFqo5M2IuN5bNdwgxjjNFXmAX1X0fsUXemusZzNyhtoYSeUBzZxYVVTWsyUnH91zNYB92O9vbrQh7FVwPvVYBmxMned6Z36I%2BSaW5GAASDwK929gG5aYTj0JSAknuApNkFE9Svd9%2FHcA2XCw2T9dgaRBoST0LSWcM%2BtQOSJ9DH0kLsrDX3k9bkMRoqlSXJOCSP39P2uaaMIsvE5%2Bxke6ht95LFgSMLCPjhyV2DOvPUE18nMDESOy0d5MJY0yq9X4n2BOAKxFb3DcRyrwqfiRnnTH9vjkNlR%2Bwofc4%2Fy6x1Bg9hUmF2g%2FiZMMt7vPzG6EvvSgE5Vt1YBAn%2Fz6AlMGjglBCKjM8FBgAwOnrcdzGen4PsUiM1FTGn0NAk6RjUHVn1XfeGZ1xX2Ij5SppFc7b62CEzzwnmxViQN%2FqxRdfHqKJOgKyd3oXtfMN32Nf07Luq3%2F%2BR0q37NJVzUi%2BMflhkrCaS3J1Re4p32BTTBAGqbMiE0BYqRV6h2tvTAFTl%2F7HzKX41iY%2F1CEc5DHlD63LaWGCBOq593ooZilkY%2BEp5PcBdJqmbLxwG4%2BX4b2N7vLhXLdGKhNaeR%2BrSpZHw6UyTCD9MbBBjqkAUMgYCv5Jr%2FkunJda%2BlMUpu9RpakPFI7PMGOlC0AAnNZ4QlyhHoKvdV%2F2Y3qtzgM9EMFzISUWru6E7JAlGcJOqiXgUc33yWGhTNTd2y%2FKbUj5W7tjjyN5BD5OoL50Q%2BPFq6smJl3v5WKYFIZ6dkPgENbMPs1kg2fzrPt%2BefdMagzKjnKkfhV4QZz3l0SEpgXuu5u3mytlCXsnALi%2FVy5t8v7X5BP&X-Amz-Signature=5c7b1370fe80fe21abb276fd8bbfa3ef7f371a3d090621a2e00cd97424a13d9e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZF7L2WT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQC%2BrJUA4CW6izk3teCTfCz1aviP1m6YOy1kilr5bmtFGAIhALiRAmf9OPU%2BTgOSX9Q2s7YzUk9QO6%2B0%2FGyzph67GHBmKv8DCBUQABoMNjM3NDIzMTgzODA1IgyHxfSOK%2Bck%2FUIV69Aq3AMxGYUnEv%2FkaN0HNOfbkH1XgtpczYiL3r4o4o1VnFqo5M2IuN5bNdwgxjjNFXmAX1X0fsUXemusZzNyhtoYSeUBzZxYVVTWsyUnH91zNYB92O9vbrQh7FVwPvVYBmxMned6Z36I%2BSaW5GAASDwK929gG5aYTj0JSAknuApNkFE9Svd9%2FHcA2XCw2T9dgaRBoST0LSWcM%2BtQOSJ9DH0kLsrDX3k9bkMRoqlSXJOCSP39P2uaaMIsvE5%2Bxke6ht95LFgSMLCPjhyV2DOvPUE18nMDESOy0d5MJY0yq9X4n2BOAKxFb3DcRyrwqfiRnnTH9vjkNlR%2Bwofc4%2Fy6x1Bg9hUmF2g%2FiZMMt7vPzG6EvvSgE5Vt1YBAn%2Fz6AlMGjglBCKjM8FBgAwOnrcdzGen4PsUiM1FTGn0NAk6RjUHVn1XfeGZ1xX2Ij5SppFc7b62CEzzwnmxViQN%2FqxRdfHqKJOgKyd3oXtfMN32Nf07Luq3%2F%2BR0q37NJVzUi%2BMflhkrCaS3J1Re4p32BTTBAGqbMiE0BYqRV6h2tvTAFTl%2F7HzKX41iY%2F1CEc5DHlD63LaWGCBOq593ooZilkY%2BEp5PcBdJqmbLxwG4%2BX4b2N7vLhXLdGKhNaeR%2BrSpZHw6UyTCD9MbBBjqkAUMgYCv5Jr%2FkunJda%2BlMUpu9RpakPFI7PMGOlC0AAnNZ4QlyhHoKvdV%2F2Y3qtzgM9EMFzISUWru6E7JAlGcJOqiXgUc33yWGhTNTd2y%2FKbUj5W7tjjyN5BD5OoL50Q%2BPFq6smJl3v5WKYFIZ6dkPgENbMPs1kg2fzrPt%2BefdMagzKjnKkfhV4QZz3l0SEpgXuu5u3mytlCXsnALi%2FVy5t8v7X5BP&X-Amz-Signature=98f486be24baffa8b1d9ec09d8e5c76c481ac63142343d45b96002ca126a1b25&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZF7L2WT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQC%2BrJUA4CW6izk3teCTfCz1aviP1m6YOy1kilr5bmtFGAIhALiRAmf9OPU%2BTgOSX9Q2s7YzUk9QO6%2B0%2FGyzph67GHBmKv8DCBUQABoMNjM3NDIzMTgzODA1IgyHxfSOK%2Bck%2FUIV69Aq3AMxGYUnEv%2FkaN0HNOfbkH1XgtpczYiL3r4o4o1VnFqo5M2IuN5bNdwgxjjNFXmAX1X0fsUXemusZzNyhtoYSeUBzZxYVVTWsyUnH91zNYB92O9vbrQh7FVwPvVYBmxMned6Z36I%2BSaW5GAASDwK929gG5aYTj0JSAknuApNkFE9Svd9%2FHcA2XCw2T9dgaRBoST0LSWcM%2BtQOSJ9DH0kLsrDX3k9bkMRoqlSXJOCSP39P2uaaMIsvE5%2Bxke6ht95LFgSMLCPjhyV2DOvPUE18nMDESOy0d5MJY0yq9X4n2BOAKxFb3DcRyrwqfiRnnTH9vjkNlR%2Bwofc4%2Fy6x1Bg9hUmF2g%2FiZMMt7vPzG6EvvSgE5Vt1YBAn%2Fz6AlMGjglBCKjM8FBgAwOnrcdzGen4PsUiM1FTGn0NAk6RjUHVn1XfeGZ1xX2Ij5SppFc7b62CEzzwnmxViQN%2FqxRdfHqKJOgKyd3oXtfMN32Nf07Luq3%2F%2BR0q37NJVzUi%2BMflhkrCaS3J1Re4p32BTTBAGqbMiE0BYqRV6h2tvTAFTl%2F7HzKX41iY%2F1CEc5DHlD63LaWGCBOq593ooZilkY%2BEp5PcBdJqmbLxwG4%2BX4b2N7vLhXLdGKhNaeR%2BrSpZHw6UyTCD9MbBBjqkAUMgYCv5Jr%2FkunJda%2BlMUpu9RpakPFI7PMGOlC0AAnNZ4QlyhHoKvdV%2F2Y3qtzgM9EMFzISUWru6E7JAlGcJOqiXgUc33yWGhTNTd2y%2FKbUj5W7tjjyN5BD5OoL50Q%2BPFq6smJl3v5WKYFIZ6dkPgENbMPs1kg2fzrPt%2BefdMagzKjnKkfhV4QZz3l0SEpgXuu5u3mytlCXsnALi%2FVy5t8v7X5BP&X-Amz-Signature=97d927c8b1fc1640675d560a682cf64a2ce6c597d19adab8cb6a0fe263a5fd62&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
