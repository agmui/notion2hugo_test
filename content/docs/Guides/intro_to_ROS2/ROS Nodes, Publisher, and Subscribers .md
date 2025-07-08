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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3AP4ZFX%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDifqztMC2yngdRbOzXdtmJKcdpf9KSPysY3VT4g4j9wgIgEzUaI8kJy4MaPke1shKLGCqD2yOilLMjnXs3I3P3zpoqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcivJXh0AW%2BpteElSrcA%2B9nXajzBnbNd6ZnEjYHofVFpShOEyje3dD1KfjAgXIQ2gx0HDNGG8%2BQP6O%2F6dQ%2BpXjKPqrL39LRm6JyVapFwzu%2FgQnxAJlAlE9jkEJJefVu7rpzPxzlO0CltPBALPQJ5HIpI07egDyxqyg%2BFMMlmywcMmgHcZbrA%2F%2Fgijkc4yNl1rnzkQSNPftYkIG0Idnp%2B9hmukJeoqS%2BrRBtF%2BaRxClBOnlEAkk%2FL0F3cb9I01D1jeD4Gx1kd%2BgSk%2FD05FH1%2FC2DNKGGD9G4B%2Beb4ftgUixpAIAMZ829WLhmgEhDuw64M3K%2FyYqoGe3999IhyK8tjdSAQDTdyuHrovQb%2BZglOPK359ab4nXKr7TAvkGmoiEjxozRHVnYG%2BCsLaIu4vwn8DwrTsw40q0Izno5qT7hW1bbDGlmXd0vGTilI%2BKqygfCZRx6Hy9Q2fVTC6v8xmkwabfVcb5swzjSaT82C4zZCFCrROYbrSu3aeWObE661BpeRxsEMuv89wKrW20boT%2FhzDK0f%2BJK%2Bf%2BbaX6dgn3V43IAO32FCByrF641AypBWVEEXxl3%2BGCsUaHzj4q8VhgpBAyhtdQjhsoYq3XQvBxuYSZwIrHknMaIzOE2NuPpgT6LL6ivtDbaHrTjdcT1MNeDssMGOqUBtz7T4DOdq%2FlQ%2FSN3Dz%2BTP95cYfiEVe3Mvwhfi5EwlCFS%2BKuIGRCeWHfYe2HCIJMLgFU42ftUOnz51OJX0RWegMRtUATQX%2BJK9onjyDSkdTbKe%2FQZUGUqRmnUR61G8bv7n1kTOMvltBYkeGxy8ZlZRp4VOo9UAUITN4v5WEe0rlyH0KSypa9GdGXar%2BeFtyPXHK4w%2FhWY6wD0iKXPB3QokXuK1y69&X-Amz-Signature=018125ad34ae3bdb64cf21f4f37d2a94a408da3d4e844b809163e6575d8185a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3AP4ZFX%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDifqztMC2yngdRbOzXdtmJKcdpf9KSPysY3VT4g4j9wgIgEzUaI8kJy4MaPke1shKLGCqD2yOilLMjnXs3I3P3zpoqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcivJXh0AW%2BpteElSrcA%2B9nXajzBnbNd6ZnEjYHofVFpShOEyje3dD1KfjAgXIQ2gx0HDNGG8%2BQP6O%2F6dQ%2BpXjKPqrL39LRm6JyVapFwzu%2FgQnxAJlAlE9jkEJJefVu7rpzPxzlO0CltPBALPQJ5HIpI07egDyxqyg%2BFMMlmywcMmgHcZbrA%2F%2Fgijkc4yNl1rnzkQSNPftYkIG0Idnp%2B9hmukJeoqS%2BrRBtF%2BaRxClBOnlEAkk%2FL0F3cb9I01D1jeD4Gx1kd%2BgSk%2FD05FH1%2FC2DNKGGD9G4B%2Beb4ftgUixpAIAMZ829WLhmgEhDuw64M3K%2FyYqoGe3999IhyK8tjdSAQDTdyuHrovQb%2BZglOPK359ab4nXKr7TAvkGmoiEjxozRHVnYG%2BCsLaIu4vwn8DwrTsw40q0Izno5qT7hW1bbDGlmXd0vGTilI%2BKqygfCZRx6Hy9Q2fVTC6v8xmkwabfVcb5swzjSaT82C4zZCFCrROYbrSu3aeWObE661BpeRxsEMuv89wKrW20boT%2FhzDK0f%2BJK%2Bf%2BbaX6dgn3V43IAO32FCByrF641AypBWVEEXxl3%2BGCsUaHzj4q8VhgpBAyhtdQjhsoYq3XQvBxuYSZwIrHknMaIzOE2NuPpgT6LL6ivtDbaHrTjdcT1MNeDssMGOqUBtz7T4DOdq%2FlQ%2FSN3Dz%2BTP95cYfiEVe3Mvwhfi5EwlCFS%2BKuIGRCeWHfYe2HCIJMLgFU42ftUOnz51OJX0RWegMRtUATQX%2BJK9onjyDSkdTbKe%2FQZUGUqRmnUR61G8bv7n1kTOMvltBYkeGxy8ZlZRp4VOo9UAUITN4v5WEe0rlyH0KSypa9GdGXar%2BeFtyPXHK4w%2FhWY6wD0iKXPB3QokXuK1y69&X-Amz-Signature=7a1b461e63564f5c1ebb3cd0b256ddee2b162b5544093afe9787116a8799409b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3AP4ZFX%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDifqztMC2yngdRbOzXdtmJKcdpf9KSPysY3VT4g4j9wgIgEzUaI8kJy4MaPke1shKLGCqD2yOilLMjnXs3I3P3zpoqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcivJXh0AW%2BpteElSrcA%2B9nXajzBnbNd6ZnEjYHofVFpShOEyje3dD1KfjAgXIQ2gx0HDNGG8%2BQP6O%2F6dQ%2BpXjKPqrL39LRm6JyVapFwzu%2FgQnxAJlAlE9jkEJJefVu7rpzPxzlO0CltPBALPQJ5HIpI07egDyxqyg%2BFMMlmywcMmgHcZbrA%2F%2Fgijkc4yNl1rnzkQSNPftYkIG0Idnp%2B9hmukJeoqS%2BrRBtF%2BaRxClBOnlEAkk%2FL0F3cb9I01D1jeD4Gx1kd%2BgSk%2FD05FH1%2FC2DNKGGD9G4B%2Beb4ftgUixpAIAMZ829WLhmgEhDuw64M3K%2FyYqoGe3999IhyK8tjdSAQDTdyuHrovQb%2BZglOPK359ab4nXKr7TAvkGmoiEjxozRHVnYG%2BCsLaIu4vwn8DwrTsw40q0Izno5qT7hW1bbDGlmXd0vGTilI%2BKqygfCZRx6Hy9Q2fVTC6v8xmkwabfVcb5swzjSaT82C4zZCFCrROYbrSu3aeWObE661BpeRxsEMuv89wKrW20boT%2FhzDK0f%2BJK%2Bf%2BbaX6dgn3V43IAO32FCByrF641AypBWVEEXxl3%2BGCsUaHzj4q8VhgpBAyhtdQjhsoYq3XQvBxuYSZwIrHknMaIzOE2NuPpgT6LL6ivtDbaHrTjdcT1MNeDssMGOqUBtz7T4DOdq%2FlQ%2FSN3Dz%2BTP95cYfiEVe3Mvwhfi5EwlCFS%2BKuIGRCeWHfYe2HCIJMLgFU42ftUOnz51OJX0RWegMRtUATQX%2BJK9onjyDSkdTbKe%2FQZUGUqRmnUR61G8bv7n1kTOMvltBYkeGxy8ZlZRp4VOo9UAUITN4v5WEe0rlyH0KSypa9GdGXar%2BeFtyPXHK4w%2FhWY6wD0iKXPB3QokXuK1y69&X-Amz-Signature=5b7b148ce082e3458f734d12f0d254c94e66acd64fcb39031673af5c4f2745c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3AP4ZFX%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDifqztMC2yngdRbOzXdtmJKcdpf9KSPysY3VT4g4j9wgIgEzUaI8kJy4MaPke1shKLGCqD2yOilLMjnXs3I3P3zpoqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcivJXh0AW%2BpteElSrcA%2B9nXajzBnbNd6ZnEjYHofVFpShOEyje3dD1KfjAgXIQ2gx0HDNGG8%2BQP6O%2F6dQ%2BpXjKPqrL39LRm6JyVapFwzu%2FgQnxAJlAlE9jkEJJefVu7rpzPxzlO0CltPBALPQJ5HIpI07egDyxqyg%2BFMMlmywcMmgHcZbrA%2F%2Fgijkc4yNl1rnzkQSNPftYkIG0Idnp%2B9hmukJeoqS%2BrRBtF%2BaRxClBOnlEAkk%2FL0F3cb9I01D1jeD4Gx1kd%2BgSk%2FD05FH1%2FC2DNKGGD9G4B%2Beb4ftgUixpAIAMZ829WLhmgEhDuw64M3K%2FyYqoGe3999IhyK8tjdSAQDTdyuHrovQb%2BZglOPK359ab4nXKr7TAvkGmoiEjxozRHVnYG%2BCsLaIu4vwn8DwrTsw40q0Izno5qT7hW1bbDGlmXd0vGTilI%2BKqygfCZRx6Hy9Q2fVTC6v8xmkwabfVcb5swzjSaT82C4zZCFCrROYbrSu3aeWObE661BpeRxsEMuv89wKrW20boT%2FhzDK0f%2BJK%2Bf%2BbaX6dgn3V43IAO32FCByrF641AypBWVEEXxl3%2BGCsUaHzj4q8VhgpBAyhtdQjhsoYq3XQvBxuYSZwIrHknMaIzOE2NuPpgT6LL6ivtDbaHrTjdcT1MNeDssMGOqUBtz7T4DOdq%2FlQ%2FSN3Dz%2BTP95cYfiEVe3Mvwhfi5EwlCFS%2BKuIGRCeWHfYe2HCIJMLgFU42ftUOnz51OJX0RWegMRtUATQX%2BJK9onjyDSkdTbKe%2FQZUGUqRmnUR61G8bv7n1kTOMvltBYkeGxy8ZlZRp4VOo9UAUITN4v5WEe0rlyH0KSypa9GdGXar%2BeFtyPXHK4w%2FhWY6wD0iKXPB3QokXuK1y69&X-Amz-Signature=85b3f40f7c0be8991c974d1e9ffa9b8fc0b3cd4ec10ca52eb92e80241ae4f4d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3AP4ZFX%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDifqztMC2yngdRbOzXdtmJKcdpf9KSPysY3VT4g4j9wgIgEzUaI8kJy4MaPke1shKLGCqD2yOilLMjnXs3I3P3zpoqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcivJXh0AW%2BpteElSrcA%2B9nXajzBnbNd6ZnEjYHofVFpShOEyje3dD1KfjAgXIQ2gx0HDNGG8%2BQP6O%2F6dQ%2BpXjKPqrL39LRm6JyVapFwzu%2FgQnxAJlAlE9jkEJJefVu7rpzPxzlO0CltPBALPQJ5HIpI07egDyxqyg%2BFMMlmywcMmgHcZbrA%2F%2Fgijkc4yNl1rnzkQSNPftYkIG0Idnp%2B9hmukJeoqS%2BrRBtF%2BaRxClBOnlEAkk%2FL0F3cb9I01D1jeD4Gx1kd%2BgSk%2FD05FH1%2FC2DNKGGD9G4B%2Beb4ftgUixpAIAMZ829WLhmgEhDuw64M3K%2FyYqoGe3999IhyK8tjdSAQDTdyuHrovQb%2BZglOPK359ab4nXKr7TAvkGmoiEjxozRHVnYG%2BCsLaIu4vwn8DwrTsw40q0Izno5qT7hW1bbDGlmXd0vGTilI%2BKqygfCZRx6Hy9Q2fVTC6v8xmkwabfVcb5swzjSaT82C4zZCFCrROYbrSu3aeWObE661BpeRxsEMuv89wKrW20boT%2FhzDK0f%2BJK%2Bf%2BbaX6dgn3V43IAO32FCByrF641AypBWVEEXxl3%2BGCsUaHzj4q8VhgpBAyhtdQjhsoYq3XQvBxuYSZwIrHknMaIzOE2NuPpgT6LL6ivtDbaHrTjdcT1MNeDssMGOqUBtz7T4DOdq%2FlQ%2FSN3Dz%2BTP95cYfiEVe3Mvwhfi5EwlCFS%2BKuIGRCeWHfYe2HCIJMLgFU42ftUOnz51OJX0RWegMRtUATQX%2BJK9onjyDSkdTbKe%2FQZUGUqRmnUR61G8bv7n1kTOMvltBYkeGxy8ZlZRp4VOo9UAUITN4v5WEe0rlyH0KSypa9GdGXar%2BeFtyPXHK4w%2FhWY6wD0iKXPB3QokXuK1y69&X-Amz-Signature=dffa923ec49e1294fa6b28dfed60b1f1474097a02431a13e71312a1f46d4c46c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3AP4ZFX%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDifqztMC2yngdRbOzXdtmJKcdpf9KSPysY3VT4g4j9wgIgEzUaI8kJy4MaPke1shKLGCqD2yOilLMjnXs3I3P3zpoqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcivJXh0AW%2BpteElSrcA%2B9nXajzBnbNd6ZnEjYHofVFpShOEyje3dD1KfjAgXIQ2gx0HDNGG8%2BQP6O%2F6dQ%2BpXjKPqrL39LRm6JyVapFwzu%2FgQnxAJlAlE9jkEJJefVu7rpzPxzlO0CltPBALPQJ5HIpI07egDyxqyg%2BFMMlmywcMmgHcZbrA%2F%2Fgijkc4yNl1rnzkQSNPftYkIG0Idnp%2B9hmukJeoqS%2BrRBtF%2BaRxClBOnlEAkk%2FL0F3cb9I01D1jeD4Gx1kd%2BgSk%2FD05FH1%2FC2DNKGGD9G4B%2Beb4ftgUixpAIAMZ829WLhmgEhDuw64M3K%2FyYqoGe3999IhyK8tjdSAQDTdyuHrovQb%2BZglOPK359ab4nXKr7TAvkGmoiEjxozRHVnYG%2BCsLaIu4vwn8DwrTsw40q0Izno5qT7hW1bbDGlmXd0vGTilI%2BKqygfCZRx6Hy9Q2fVTC6v8xmkwabfVcb5swzjSaT82C4zZCFCrROYbrSu3aeWObE661BpeRxsEMuv89wKrW20boT%2FhzDK0f%2BJK%2Bf%2BbaX6dgn3V43IAO32FCByrF641AypBWVEEXxl3%2BGCsUaHzj4q8VhgpBAyhtdQjhsoYq3XQvBxuYSZwIrHknMaIzOE2NuPpgT6LL6ivtDbaHrTjdcT1MNeDssMGOqUBtz7T4DOdq%2FlQ%2FSN3Dz%2BTP95cYfiEVe3Mvwhfi5EwlCFS%2BKuIGRCeWHfYe2HCIJMLgFU42ftUOnz51OJX0RWegMRtUATQX%2BJK9onjyDSkdTbKe%2FQZUGUqRmnUR61G8bv7n1kTOMvltBYkeGxy8ZlZRp4VOo9UAUITN4v5WEe0rlyH0KSypa9GdGXar%2BeFtyPXHK4w%2FhWY6wD0iKXPB3QokXuK1y69&X-Amz-Signature=23d457527ad762b4e33fd0c0212c331c4b0048dec3d1ef08c5f463451855660d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3AP4ZFX%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDifqztMC2yngdRbOzXdtmJKcdpf9KSPysY3VT4g4j9wgIgEzUaI8kJy4MaPke1shKLGCqD2yOilLMjnXs3I3P3zpoqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcivJXh0AW%2BpteElSrcA%2B9nXajzBnbNd6ZnEjYHofVFpShOEyje3dD1KfjAgXIQ2gx0HDNGG8%2BQP6O%2F6dQ%2BpXjKPqrL39LRm6JyVapFwzu%2FgQnxAJlAlE9jkEJJefVu7rpzPxzlO0CltPBALPQJ5HIpI07egDyxqyg%2BFMMlmywcMmgHcZbrA%2F%2Fgijkc4yNl1rnzkQSNPftYkIG0Idnp%2B9hmukJeoqS%2BrRBtF%2BaRxClBOnlEAkk%2FL0F3cb9I01D1jeD4Gx1kd%2BgSk%2FD05FH1%2FC2DNKGGD9G4B%2Beb4ftgUixpAIAMZ829WLhmgEhDuw64M3K%2FyYqoGe3999IhyK8tjdSAQDTdyuHrovQb%2BZglOPK359ab4nXKr7TAvkGmoiEjxozRHVnYG%2BCsLaIu4vwn8DwrTsw40q0Izno5qT7hW1bbDGlmXd0vGTilI%2BKqygfCZRx6Hy9Q2fVTC6v8xmkwabfVcb5swzjSaT82C4zZCFCrROYbrSu3aeWObE661BpeRxsEMuv89wKrW20boT%2FhzDK0f%2BJK%2Bf%2BbaX6dgn3V43IAO32FCByrF641AypBWVEEXxl3%2BGCsUaHzj4q8VhgpBAyhtdQjhsoYq3XQvBxuYSZwIrHknMaIzOE2NuPpgT6LL6ivtDbaHrTjdcT1MNeDssMGOqUBtz7T4DOdq%2FlQ%2FSN3Dz%2BTP95cYfiEVe3Mvwhfi5EwlCFS%2BKuIGRCeWHfYe2HCIJMLgFU42ftUOnz51OJX0RWegMRtUATQX%2BJK9onjyDSkdTbKe%2FQZUGUqRmnUR61G8bv7n1kTOMvltBYkeGxy8ZlZRp4VOo9UAUITN4v5WEe0rlyH0KSypa9GdGXar%2BeFtyPXHK4w%2FhWY6wD0iKXPB3QokXuK1y69&X-Amz-Signature=7d1c245a4380a226acc0861a6ee0c2f330f6b085a44b3456da611068c5efc66d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3AP4ZFX%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDifqztMC2yngdRbOzXdtmJKcdpf9KSPysY3VT4g4j9wgIgEzUaI8kJy4MaPke1shKLGCqD2yOilLMjnXs3I3P3zpoqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcivJXh0AW%2BpteElSrcA%2B9nXajzBnbNd6ZnEjYHofVFpShOEyje3dD1KfjAgXIQ2gx0HDNGG8%2BQP6O%2F6dQ%2BpXjKPqrL39LRm6JyVapFwzu%2FgQnxAJlAlE9jkEJJefVu7rpzPxzlO0CltPBALPQJ5HIpI07egDyxqyg%2BFMMlmywcMmgHcZbrA%2F%2Fgijkc4yNl1rnzkQSNPftYkIG0Idnp%2B9hmukJeoqS%2BrRBtF%2BaRxClBOnlEAkk%2FL0F3cb9I01D1jeD4Gx1kd%2BgSk%2FD05FH1%2FC2DNKGGD9G4B%2Beb4ftgUixpAIAMZ829WLhmgEhDuw64M3K%2FyYqoGe3999IhyK8tjdSAQDTdyuHrovQb%2BZglOPK359ab4nXKr7TAvkGmoiEjxozRHVnYG%2BCsLaIu4vwn8DwrTsw40q0Izno5qT7hW1bbDGlmXd0vGTilI%2BKqygfCZRx6Hy9Q2fVTC6v8xmkwabfVcb5swzjSaT82C4zZCFCrROYbrSu3aeWObE661BpeRxsEMuv89wKrW20boT%2FhzDK0f%2BJK%2Bf%2BbaX6dgn3V43IAO32FCByrF641AypBWVEEXxl3%2BGCsUaHzj4q8VhgpBAyhtdQjhsoYq3XQvBxuYSZwIrHknMaIzOE2NuPpgT6LL6ivtDbaHrTjdcT1MNeDssMGOqUBtz7T4DOdq%2FlQ%2FSN3Dz%2BTP95cYfiEVe3Mvwhfi5EwlCFS%2BKuIGRCeWHfYe2HCIJMLgFU42ftUOnz51OJX0RWegMRtUATQX%2BJK9onjyDSkdTbKe%2FQZUGUqRmnUR61G8bv7n1kTOMvltBYkeGxy8ZlZRp4VOo9UAUITN4v5WEe0rlyH0KSypa9GdGXar%2BeFtyPXHK4w%2FhWY6wD0iKXPB3QokXuK1y69&X-Amz-Signature=7c2b569dc72a8b0762f6f1e7901d52ded00f298bb11f63f52f94dffd2df9fffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
