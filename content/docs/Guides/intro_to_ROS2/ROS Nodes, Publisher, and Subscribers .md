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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEHXAQVR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWp7zfPbgy0GLTsawH6SA9sLBBPcxA12TNYOSnB5kz4AiEAvxMgxbzhQRXV40vXUGltjipKuRpOwYDbNoH%2B%2F8OddQYq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDKK6yYVL7aIf1jP7wyrcA37S9M%2FYaRLwYVpN5daDYBe79BYUHrHATHOPRVR7ZmGZ2u49YIdh2BFI43yaUml%2FdkyTbxaqajxXTklKwrx3ON72CIS0gWNPgDYTvgJVSVj3jF7bolwVZxyfXuoiq9ZT8Kwtln6ealYITI71OcUIY67JnPiZ8sVZZzzRB1hg4FJwokJavrg2aaIh6DhyK8iTO2gZlSdtFe2JinNAbYzcTy0h3Oov6r%2FGvDlCXfP3mwAnd45CTsfXUV73JGjTsxp3t4BeiVufE9HSce3m2Z2ie%2FSEPqXr03rin63RIX3z2Ju29w9vVP8VVz20SzgefePrvbwhJNGcIZRQcL5iimLtNgIhTn4A0qCGgR3aMRe9gYuAEXRNsqDK1hSfx57eqb0TY2Kdw5RgR%2BVTtl2ldCiVD%2BfXpN8dL3QMgCJCUlvthWhMIS0cZf12ll1RO6SdxszAgRhhb%2FwKh7HxhBgoVzVwzdh7qPDgjSaaA4McLcW9AN7x93kmqjXY0%2FuteGIAewPuOeRvt%2BvHsBiJlkpzYpAcx2w657h1LOyStcUJ%2FNOeIWILKnebtca8kAmndWYK44gCsR7FWQuAN9ekFtzr4iGw27s%2Bb7ltlFApb%2FBkxBMgnF9I1CjlzOAtsrme6uSRMPfQ1b4GOqUBMqzFFn7SVrBCRkYnWH45rL%2F7GbxCIllnmrQeHgG9usr2zvQMaoEVZaWlPSHGiT3KBB%2FxPITBHjwOpI8JmsNUB65QGtIj5I1Bi1WMlR1d4yyU4CSD7ir93hM6G1oKwzuxSm%2FvpphL4DzNFLME%2BvqbTl1FWqlupZRMNX4rP5IF%2F4rqdETjEDTuO9GIHiJOMjJJlrSiZwRv7HdJJthFJCcN06ZfEJfi&X-Amz-Signature=c75cb396d46dfd8951d83b24d7ec455f1e708f1e74b3ac3411799193f9fdd3dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEHXAQVR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWp7zfPbgy0GLTsawH6SA9sLBBPcxA12TNYOSnB5kz4AiEAvxMgxbzhQRXV40vXUGltjipKuRpOwYDbNoH%2B%2F8OddQYq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDKK6yYVL7aIf1jP7wyrcA37S9M%2FYaRLwYVpN5daDYBe79BYUHrHATHOPRVR7ZmGZ2u49YIdh2BFI43yaUml%2FdkyTbxaqajxXTklKwrx3ON72CIS0gWNPgDYTvgJVSVj3jF7bolwVZxyfXuoiq9ZT8Kwtln6ealYITI71OcUIY67JnPiZ8sVZZzzRB1hg4FJwokJavrg2aaIh6DhyK8iTO2gZlSdtFe2JinNAbYzcTy0h3Oov6r%2FGvDlCXfP3mwAnd45CTsfXUV73JGjTsxp3t4BeiVufE9HSce3m2Z2ie%2FSEPqXr03rin63RIX3z2Ju29w9vVP8VVz20SzgefePrvbwhJNGcIZRQcL5iimLtNgIhTn4A0qCGgR3aMRe9gYuAEXRNsqDK1hSfx57eqb0TY2Kdw5RgR%2BVTtl2ldCiVD%2BfXpN8dL3QMgCJCUlvthWhMIS0cZf12ll1RO6SdxszAgRhhb%2FwKh7HxhBgoVzVwzdh7qPDgjSaaA4McLcW9AN7x93kmqjXY0%2FuteGIAewPuOeRvt%2BvHsBiJlkpzYpAcx2w657h1LOyStcUJ%2FNOeIWILKnebtca8kAmndWYK44gCsR7FWQuAN9ekFtzr4iGw27s%2Bb7ltlFApb%2FBkxBMgnF9I1CjlzOAtsrme6uSRMPfQ1b4GOqUBMqzFFn7SVrBCRkYnWH45rL%2F7GbxCIllnmrQeHgG9usr2zvQMaoEVZaWlPSHGiT3KBB%2FxPITBHjwOpI8JmsNUB65QGtIj5I1Bi1WMlR1d4yyU4CSD7ir93hM6G1oKwzuxSm%2FvpphL4DzNFLME%2BvqbTl1FWqlupZRMNX4rP5IF%2F4rqdETjEDTuO9GIHiJOMjJJlrSiZwRv7HdJJthFJCcN06ZfEJfi&X-Amz-Signature=634fa3c86c41e4e37371c1b55e0d0b20480ccf90eea81310251dc84e492678ba&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEHXAQVR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWp7zfPbgy0GLTsawH6SA9sLBBPcxA12TNYOSnB5kz4AiEAvxMgxbzhQRXV40vXUGltjipKuRpOwYDbNoH%2B%2F8OddQYq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDKK6yYVL7aIf1jP7wyrcA37S9M%2FYaRLwYVpN5daDYBe79BYUHrHATHOPRVR7ZmGZ2u49YIdh2BFI43yaUml%2FdkyTbxaqajxXTklKwrx3ON72CIS0gWNPgDYTvgJVSVj3jF7bolwVZxyfXuoiq9ZT8Kwtln6ealYITI71OcUIY67JnPiZ8sVZZzzRB1hg4FJwokJavrg2aaIh6DhyK8iTO2gZlSdtFe2JinNAbYzcTy0h3Oov6r%2FGvDlCXfP3mwAnd45CTsfXUV73JGjTsxp3t4BeiVufE9HSce3m2Z2ie%2FSEPqXr03rin63RIX3z2Ju29w9vVP8VVz20SzgefePrvbwhJNGcIZRQcL5iimLtNgIhTn4A0qCGgR3aMRe9gYuAEXRNsqDK1hSfx57eqb0TY2Kdw5RgR%2BVTtl2ldCiVD%2BfXpN8dL3QMgCJCUlvthWhMIS0cZf12ll1RO6SdxszAgRhhb%2FwKh7HxhBgoVzVwzdh7qPDgjSaaA4McLcW9AN7x93kmqjXY0%2FuteGIAewPuOeRvt%2BvHsBiJlkpzYpAcx2w657h1LOyStcUJ%2FNOeIWILKnebtca8kAmndWYK44gCsR7FWQuAN9ekFtzr4iGw27s%2Bb7ltlFApb%2FBkxBMgnF9I1CjlzOAtsrme6uSRMPfQ1b4GOqUBMqzFFn7SVrBCRkYnWH45rL%2F7GbxCIllnmrQeHgG9usr2zvQMaoEVZaWlPSHGiT3KBB%2FxPITBHjwOpI8JmsNUB65QGtIj5I1Bi1WMlR1d4yyU4CSD7ir93hM6G1oKwzuxSm%2FvpphL4DzNFLME%2BvqbTl1FWqlupZRMNX4rP5IF%2F4rqdETjEDTuO9GIHiJOMjJJlrSiZwRv7HdJJthFJCcN06ZfEJfi&X-Amz-Signature=df3237f75059222f0947df5babb1d74ac61d1bec6dc392ba4f3e85e1b59e642f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEHXAQVR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWp7zfPbgy0GLTsawH6SA9sLBBPcxA12TNYOSnB5kz4AiEAvxMgxbzhQRXV40vXUGltjipKuRpOwYDbNoH%2B%2F8OddQYq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDKK6yYVL7aIf1jP7wyrcA37S9M%2FYaRLwYVpN5daDYBe79BYUHrHATHOPRVR7ZmGZ2u49YIdh2BFI43yaUml%2FdkyTbxaqajxXTklKwrx3ON72CIS0gWNPgDYTvgJVSVj3jF7bolwVZxyfXuoiq9ZT8Kwtln6ealYITI71OcUIY67JnPiZ8sVZZzzRB1hg4FJwokJavrg2aaIh6DhyK8iTO2gZlSdtFe2JinNAbYzcTy0h3Oov6r%2FGvDlCXfP3mwAnd45CTsfXUV73JGjTsxp3t4BeiVufE9HSce3m2Z2ie%2FSEPqXr03rin63RIX3z2Ju29w9vVP8VVz20SzgefePrvbwhJNGcIZRQcL5iimLtNgIhTn4A0qCGgR3aMRe9gYuAEXRNsqDK1hSfx57eqb0TY2Kdw5RgR%2BVTtl2ldCiVD%2BfXpN8dL3QMgCJCUlvthWhMIS0cZf12ll1RO6SdxszAgRhhb%2FwKh7HxhBgoVzVwzdh7qPDgjSaaA4McLcW9AN7x93kmqjXY0%2FuteGIAewPuOeRvt%2BvHsBiJlkpzYpAcx2w657h1LOyStcUJ%2FNOeIWILKnebtca8kAmndWYK44gCsR7FWQuAN9ekFtzr4iGw27s%2Bb7ltlFApb%2FBkxBMgnF9I1CjlzOAtsrme6uSRMPfQ1b4GOqUBMqzFFn7SVrBCRkYnWH45rL%2F7GbxCIllnmrQeHgG9usr2zvQMaoEVZaWlPSHGiT3KBB%2FxPITBHjwOpI8JmsNUB65QGtIj5I1Bi1WMlR1d4yyU4CSD7ir93hM6G1oKwzuxSm%2FvpphL4DzNFLME%2BvqbTl1FWqlupZRMNX4rP5IF%2F4rqdETjEDTuO9GIHiJOMjJJlrSiZwRv7HdJJthFJCcN06ZfEJfi&X-Amz-Signature=d8e471ba89d527fab47414d199036d085f1cad3f13daa18c9db071569dad819e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEHXAQVR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWp7zfPbgy0GLTsawH6SA9sLBBPcxA12TNYOSnB5kz4AiEAvxMgxbzhQRXV40vXUGltjipKuRpOwYDbNoH%2B%2F8OddQYq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDKK6yYVL7aIf1jP7wyrcA37S9M%2FYaRLwYVpN5daDYBe79BYUHrHATHOPRVR7ZmGZ2u49YIdh2BFI43yaUml%2FdkyTbxaqajxXTklKwrx3ON72CIS0gWNPgDYTvgJVSVj3jF7bolwVZxyfXuoiq9ZT8Kwtln6ealYITI71OcUIY67JnPiZ8sVZZzzRB1hg4FJwokJavrg2aaIh6DhyK8iTO2gZlSdtFe2JinNAbYzcTy0h3Oov6r%2FGvDlCXfP3mwAnd45CTsfXUV73JGjTsxp3t4BeiVufE9HSce3m2Z2ie%2FSEPqXr03rin63RIX3z2Ju29w9vVP8VVz20SzgefePrvbwhJNGcIZRQcL5iimLtNgIhTn4A0qCGgR3aMRe9gYuAEXRNsqDK1hSfx57eqb0TY2Kdw5RgR%2BVTtl2ldCiVD%2BfXpN8dL3QMgCJCUlvthWhMIS0cZf12ll1RO6SdxszAgRhhb%2FwKh7HxhBgoVzVwzdh7qPDgjSaaA4McLcW9AN7x93kmqjXY0%2FuteGIAewPuOeRvt%2BvHsBiJlkpzYpAcx2w657h1LOyStcUJ%2FNOeIWILKnebtca8kAmndWYK44gCsR7FWQuAN9ekFtzr4iGw27s%2Bb7ltlFApb%2FBkxBMgnF9I1CjlzOAtsrme6uSRMPfQ1b4GOqUBMqzFFn7SVrBCRkYnWH45rL%2F7GbxCIllnmrQeHgG9usr2zvQMaoEVZaWlPSHGiT3KBB%2FxPITBHjwOpI8JmsNUB65QGtIj5I1Bi1WMlR1d4yyU4CSD7ir93hM6G1oKwzuxSm%2FvpphL4DzNFLME%2BvqbTl1FWqlupZRMNX4rP5IF%2F4rqdETjEDTuO9GIHiJOMjJJlrSiZwRv7HdJJthFJCcN06ZfEJfi&X-Amz-Signature=7f1251929f6f72155eb6c9835b9db119645ec3d8fb48d14728f0576a03d8babb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEHXAQVR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWp7zfPbgy0GLTsawH6SA9sLBBPcxA12TNYOSnB5kz4AiEAvxMgxbzhQRXV40vXUGltjipKuRpOwYDbNoH%2B%2F8OddQYq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDKK6yYVL7aIf1jP7wyrcA37S9M%2FYaRLwYVpN5daDYBe79BYUHrHATHOPRVR7ZmGZ2u49YIdh2BFI43yaUml%2FdkyTbxaqajxXTklKwrx3ON72CIS0gWNPgDYTvgJVSVj3jF7bolwVZxyfXuoiq9ZT8Kwtln6ealYITI71OcUIY67JnPiZ8sVZZzzRB1hg4FJwokJavrg2aaIh6DhyK8iTO2gZlSdtFe2JinNAbYzcTy0h3Oov6r%2FGvDlCXfP3mwAnd45CTsfXUV73JGjTsxp3t4BeiVufE9HSce3m2Z2ie%2FSEPqXr03rin63RIX3z2Ju29w9vVP8VVz20SzgefePrvbwhJNGcIZRQcL5iimLtNgIhTn4A0qCGgR3aMRe9gYuAEXRNsqDK1hSfx57eqb0TY2Kdw5RgR%2BVTtl2ldCiVD%2BfXpN8dL3QMgCJCUlvthWhMIS0cZf12ll1RO6SdxszAgRhhb%2FwKh7HxhBgoVzVwzdh7qPDgjSaaA4McLcW9AN7x93kmqjXY0%2FuteGIAewPuOeRvt%2BvHsBiJlkpzYpAcx2w657h1LOyStcUJ%2FNOeIWILKnebtca8kAmndWYK44gCsR7FWQuAN9ekFtzr4iGw27s%2Bb7ltlFApb%2FBkxBMgnF9I1CjlzOAtsrme6uSRMPfQ1b4GOqUBMqzFFn7SVrBCRkYnWH45rL%2F7GbxCIllnmrQeHgG9usr2zvQMaoEVZaWlPSHGiT3KBB%2FxPITBHjwOpI8JmsNUB65QGtIj5I1Bi1WMlR1d4yyU4CSD7ir93hM6G1oKwzuxSm%2FvpphL4DzNFLME%2BvqbTl1FWqlupZRMNX4rP5IF%2F4rqdETjEDTuO9GIHiJOMjJJlrSiZwRv7HdJJthFJCcN06ZfEJfi&X-Amz-Signature=77c429a89464392371e7c8f9c65ae5e1d9c9b84e0b390f5ae6689a261bfed286&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEHXAQVR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWp7zfPbgy0GLTsawH6SA9sLBBPcxA12TNYOSnB5kz4AiEAvxMgxbzhQRXV40vXUGltjipKuRpOwYDbNoH%2B%2F8OddQYq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDKK6yYVL7aIf1jP7wyrcA37S9M%2FYaRLwYVpN5daDYBe79BYUHrHATHOPRVR7ZmGZ2u49YIdh2BFI43yaUml%2FdkyTbxaqajxXTklKwrx3ON72CIS0gWNPgDYTvgJVSVj3jF7bolwVZxyfXuoiq9ZT8Kwtln6ealYITI71OcUIY67JnPiZ8sVZZzzRB1hg4FJwokJavrg2aaIh6DhyK8iTO2gZlSdtFe2JinNAbYzcTy0h3Oov6r%2FGvDlCXfP3mwAnd45CTsfXUV73JGjTsxp3t4BeiVufE9HSce3m2Z2ie%2FSEPqXr03rin63RIX3z2Ju29w9vVP8VVz20SzgefePrvbwhJNGcIZRQcL5iimLtNgIhTn4A0qCGgR3aMRe9gYuAEXRNsqDK1hSfx57eqb0TY2Kdw5RgR%2BVTtl2ldCiVD%2BfXpN8dL3QMgCJCUlvthWhMIS0cZf12ll1RO6SdxszAgRhhb%2FwKh7HxhBgoVzVwzdh7qPDgjSaaA4McLcW9AN7x93kmqjXY0%2FuteGIAewPuOeRvt%2BvHsBiJlkpzYpAcx2w657h1LOyStcUJ%2FNOeIWILKnebtca8kAmndWYK44gCsR7FWQuAN9ekFtzr4iGw27s%2Bb7ltlFApb%2FBkxBMgnF9I1CjlzOAtsrme6uSRMPfQ1b4GOqUBMqzFFn7SVrBCRkYnWH45rL%2F7GbxCIllnmrQeHgG9usr2zvQMaoEVZaWlPSHGiT3KBB%2FxPITBHjwOpI8JmsNUB65QGtIj5I1Bi1WMlR1d4yyU4CSD7ir93hM6G1oKwzuxSm%2FvpphL4DzNFLME%2BvqbTl1FWqlupZRMNX4rP5IF%2F4rqdETjEDTuO9GIHiJOMjJJlrSiZwRv7HdJJthFJCcN06ZfEJfi&X-Amz-Signature=75863c30729c8306253eaca985860f18fe97ad3d8888f269c53e30d0080fe6a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEHXAQVR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWp7zfPbgy0GLTsawH6SA9sLBBPcxA12TNYOSnB5kz4AiEAvxMgxbzhQRXV40vXUGltjipKuRpOwYDbNoH%2B%2F8OddQYq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDKK6yYVL7aIf1jP7wyrcA37S9M%2FYaRLwYVpN5daDYBe79BYUHrHATHOPRVR7ZmGZ2u49YIdh2BFI43yaUml%2FdkyTbxaqajxXTklKwrx3ON72CIS0gWNPgDYTvgJVSVj3jF7bolwVZxyfXuoiq9ZT8Kwtln6ealYITI71OcUIY67JnPiZ8sVZZzzRB1hg4FJwokJavrg2aaIh6DhyK8iTO2gZlSdtFe2JinNAbYzcTy0h3Oov6r%2FGvDlCXfP3mwAnd45CTsfXUV73JGjTsxp3t4BeiVufE9HSce3m2Z2ie%2FSEPqXr03rin63RIX3z2Ju29w9vVP8VVz20SzgefePrvbwhJNGcIZRQcL5iimLtNgIhTn4A0qCGgR3aMRe9gYuAEXRNsqDK1hSfx57eqb0TY2Kdw5RgR%2BVTtl2ldCiVD%2BfXpN8dL3QMgCJCUlvthWhMIS0cZf12ll1RO6SdxszAgRhhb%2FwKh7HxhBgoVzVwzdh7qPDgjSaaA4McLcW9AN7x93kmqjXY0%2FuteGIAewPuOeRvt%2BvHsBiJlkpzYpAcx2w657h1LOyStcUJ%2FNOeIWILKnebtca8kAmndWYK44gCsR7FWQuAN9ekFtzr4iGw27s%2Bb7ltlFApb%2FBkxBMgnF9I1CjlzOAtsrme6uSRMPfQ1b4GOqUBMqzFFn7SVrBCRkYnWH45rL%2F7GbxCIllnmrQeHgG9usr2zvQMaoEVZaWlPSHGiT3KBB%2FxPITBHjwOpI8JmsNUB65QGtIj5I1Bi1WMlR1d4yyU4CSD7ir93hM6G1oKwzuxSm%2FvpphL4DzNFLME%2BvqbTl1FWqlupZRMNX4rP5IF%2F4rqdETjEDTuO9GIHiJOMjJJlrSiZwRv7HdJJthFJCcN06ZfEJfi&X-Amz-Signature=470d77eddeec3b00e805cffee0e17116ceba3fffdba37ced41befe4e9dd4c5e9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
