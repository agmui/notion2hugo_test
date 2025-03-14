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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TP5Y7DE%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIqbRg0OsK4lLbUqs9QiKzvTEN5nZPA3YSZRUWZniMtwIgKm8g102xfTtZUg2bKa%2FJ6Qc31NmmoR9pYAaAc7WIUckqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7MewIXm%2F9fTEZHlSrcA0TePPzm1K7%2F30sYG93bpdgHwBLdS1X1jffgms5EUpunrmKiFh4Qt6t80nQSKbfGYyxkdZipIh%2BdTJnvOBGU3Mul8nysQDfamAVeDaDVF18zcC1lLhobLncp1hP75WuIfQdE7s6PT644dq7jiJWpsU6mQ2VpdqXu09Y42AvZjGLYErcVsi762p%2FYjKR27SNuOhEV%2BAJArgxBwReGxrkd3V5deQejgXjLR%2BmeiyrU0wOHKflODCQ%2Bn8wfz3BYWT9oMQUtTmaNtZdUokbF6oFyWJRVOrGz2g76T8HgSF81LpNiUMLUC5bKr6qXNxBpUPl%2Budggd5Gs3HMj4q0l4QqUnmpssZwgTYY87J%2FC%2B%2BLI3hLS5KCHqPkVwUtS%2Bq88KUhn94veZucLO1JQXR3BhHnbFa%2FnEvXQwEW0aCDkBmeggNMuRC7G8pLDGPGECS1BudhHLyzllC00%2Fy4qFhStRly3oL5K74ucFbQq9diXdZLmsVvkBgbaNP0WYZXhk4MSnWgu2JOUlLJ1M9fN3TITww4iuvqqC57NO69yotsTXuQ9gAtn1um4N%2F3H83XeifVfMpdEs1Ez22sS2trHjdHFdylvWf0Fhxb323tZvrY4ceUbB8l8N37siM1IVxX1E8ttMKmT0r4GOqUBynxynzsgod31x4qrxnDztvVOTSESWGsp%2BPLpaIWjl%2B7Q8A1%2FuKSlbOUQRnQ%2FQ76DKYyoVeOocqkSJIK3%2FzC6%2BT5E2wtdkrKuWoYw2f53KXcvk%2BG8z%2BF%2BD36Yx4kwzypmfv0ollCButssdcTOXgVVlxNLWx%2FFmZdi1A%2FobIkLBKuuPBFXxHvQbNjkmPk2qzMhtq6U%2B9%2BAZfAr7YN0%2B5yiqNJtqT3x&X-Amz-Signature=c7ec5ab6155d60128a727b65cc88d60145b299fea7ac96e411080a318644b111&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TP5Y7DE%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIqbRg0OsK4lLbUqs9QiKzvTEN5nZPA3YSZRUWZniMtwIgKm8g102xfTtZUg2bKa%2FJ6Qc31NmmoR9pYAaAc7WIUckqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7MewIXm%2F9fTEZHlSrcA0TePPzm1K7%2F30sYG93bpdgHwBLdS1X1jffgms5EUpunrmKiFh4Qt6t80nQSKbfGYyxkdZipIh%2BdTJnvOBGU3Mul8nysQDfamAVeDaDVF18zcC1lLhobLncp1hP75WuIfQdE7s6PT644dq7jiJWpsU6mQ2VpdqXu09Y42AvZjGLYErcVsi762p%2FYjKR27SNuOhEV%2BAJArgxBwReGxrkd3V5deQejgXjLR%2BmeiyrU0wOHKflODCQ%2Bn8wfz3BYWT9oMQUtTmaNtZdUokbF6oFyWJRVOrGz2g76T8HgSF81LpNiUMLUC5bKr6qXNxBpUPl%2Budggd5Gs3HMj4q0l4QqUnmpssZwgTYY87J%2FC%2B%2BLI3hLS5KCHqPkVwUtS%2Bq88KUhn94veZucLO1JQXR3BhHnbFa%2FnEvXQwEW0aCDkBmeggNMuRC7G8pLDGPGECS1BudhHLyzllC00%2Fy4qFhStRly3oL5K74ucFbQq9diXdZLmsVvkBgbaNP0WYZXhk4MSnWgu2JOUlLJ1M9fN3TITww4iuvqqC57NO69yotsTXuQ9gAtn1um4N%2F3H83XeifVfMpdEs1Ez22sS2trHjdHFdylvWf0Fhxb323tZvrY4ceUbB8l8N37siM1IVxX1E8ttMKmT0r4GOqUBynxynzsgod31x4qrxnDztvVOTSESWGsp%2BPLpaIWjl%2B7Q8A1%2FuKSlbOUQRnQ%2FQ76DKYyoVeOocqkSJIK3%2FzC6%2BT5E2wtdkrKuWoYw2f53KXcvk%2BG8z%2BF%2BD36Yx4kwzypmfv0ollCButssdcTOXgVVlxNLWx%2FFmZdi1A%2FobIkLBKuuPBFXxHvQbNjkmPk2qzMhtq6U%2B9%2BAZfAr7YN0%2B5yiqNJtqT3x&X-Amz-Signature=7ce667fb9aa1bc59e195ab4d91af63bc019983cfeb470033ff11f26d0507fc71&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TP5Y7DE%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIqbRg0OsK4lLbUqs9QiKzvTEN5nZPA3YSZRUWZniMtwIgKm8g102xfTtZUg2bKa%2FJ6Qc31NmmoR9pYAaAc7WIUckqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7MewIXm%2F9fTEZHlSrcA0TePPzm1K7%2F30sYG93bpdgHwBLdS1X1jffgms5EUpunrmKiFh4Qt6t80nQSKbfGYyxkdZipIh%2BdTJnvOBGU3Mul8nysQDfamAVeDaDVF18zcC1lLhobLncp1hP75WuIfQdE7s6PT644dq7jiJWpsU6mQ2VpdqXu09Y42AvZjGLYErcVsi762p%2FYjKR27SNuOhEV%2BAJArgxBwReGxrkd3V5deQejgXjLR%2BmeiyrU0wOHKflODCQ%2Bn8wfz3BYWT9oMQUtTmaNtZdUokbF6oFyWJRVOrGz2g76T8HgSF81LpNiUMLUC5bKr6qXNxBpUPl%2Budggd5Gs3HMj4q0l4QqUnmpssZwgTYY87J%2FC%2B%2BLI3hLS5KCHqPkVwUtS%2Bq88KUhn94veZucLO1JQXR3BhHnbFa%2FnEvXQwEW0aCDkBmeggNMuRC7G8pLDGPGECS1BudhHLyzllC00%2Fy4qFhStRly3oL5K74ucFbQq9diXdZLmsVvkBgbaNP0WYZXhk4MSnWgu2JOUlLJ1M9fN3TITww4iuvqqC57NO69yotsTXuQ9gAtn1um4N%2F3H83XeifVfMpdEs1Ez22sS2trHjdHFdylvWf0Fhxb323tZvrY4ceUbB8l8N37siM1IVxX1E8ttMKmT0r4GOqUBynxynzsgod31x4qrxnDztvVOTSESWGsp%2BPLpaIWjl%2B7Q8A1%2FuKSlbOUQRnQ%2FQ76DKYyoVeOocqkSJIK3%2FzC6%2BT5E2wtdkrKuWoYw2f53KXcvk%2BG8z%2BF%2BD36Yx4kwzypmfv0ollCButssdcTOXgVVlxNLWx%2FFmZdi1A%2FobIkLBKuuPBFXxHvQbNjkmPk2qzMhtq6U%2B9%2BAZfAr7YN0%2B5yiqNJtqT3x&X-Amz-Signature=50217a194f86c87c259faa5e8c49d91ca80019f6e509bd1b0f391d5d481ad775&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TP5Y7DE%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIqbRg0OsK4lLbUqs9QiKzvTEN5nZPA3YSZRUWZniMtwIgKm8g102xfTtZUg2bKa%2FJ6Qc31NmmoR9pYAaAc7WIUckqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7MewIXm%2F9fTEZHlSrcA0TePPzm1K7%2F30sYG93bpdgHwBLdS1X1jffgms5EUpunrmKiFh4Qt6t80nQSKbfGYyxkdZipIh%2BdTJnvOBGU3Mul8nysQDfamAVeDaDVF18zcC1lLhobLncp1hP75WuIfQdE7s6PT644dq7jiJWpsU6mQ2VpdqXu09Y42AvZjGLYErcVsi762p%2FYjKR27SNuOhEV%2BAJArgxBwReGxrkd3V5deQejgXjLR%2BmeiyrU0wOHKflODCQ%2Bn8wfz3BYWT9oMQUtTmaNtZdUokbF6oFyWJRVOrGz2g76T8HgSF81LpNiUMLUC5bKr6qXNxBpUPl%2Budggd5Gs3HMj4q0l4QqUnmpssZwgTYY87J%2FC%2B%2BLI3hLS5KCHqPkVwUtS%2Bq88KUhn94veZucLO1JQXR3BhHnbFa%2FnEvXQwEW0aCDkBmeggNMuRC7G8pLDGPGECS1BudhHLyzllC00%2Fy4qFhStRly3oL5K74ucFbQq9diXdZLmsVvkBgbaNP0WYZXhk4MSnWgu2JOUlLJ1M9fN3TITww4iuvqqC57NO69yotsTXuQ9gAtn1um4N%2F3H83XeifVfMpdEs1Ez22sS2trHjdHFdylvWf0Fhxb323tZvrY4ceUbB8l8N37siM1IVxX1E8ttMKmT0r4GOqUBynxynzsgod31x4qrxnDztvVOTSESWGsp%2BPLpaIWjl%2B7Q8A1%2FuKSlbOUQRnQ%2FQ76DKYyoVeOocqkSJIK3%2FzC6%2BT5E2wtdkrKuWoYw2f53KXcvk%2BG8z%2BF%2BD36Yx4kwzypmfv0ollCButssdcTOXgVVlxNLWx%2FFmZdi1A%2FobIkLBKuuPBFXxHvQbNjkmPk2qzMhtq6U%2B9%2BAZfAr7YN0%2B5yiqNJtqT3x&X-Amz-Signature=2b5cd16c1723a3808029cff858ff29d4a8231e942343800f75e52de3c82ab7a9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TP5Y7DE%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIqbRg0OsK4lLbUqs9QiKzvTEN5nZPA3YSZRUWZniMtwIgKm8g102xfTtZUg2bKa%2FJ6Qc31NmmoR9pYAaAc7WIUckqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7MewIXm%2F9fTEZHlSrcA0TePPzm1K7%2F30sYG93bpdgHwBLdS1X1jffgms5EUpunrmKiFh4Qt6t80nQSKbfGYyxkdZipIh%2BdTJnvOBGU3Mul8nysQDfamAVeDaDVF18zcC1lLhobLncp1hP75WuIfQdE7s6PT644dq7jiJWpsU6mQ2VpdqXu09Y42AvZjGLYErcVsi762p%2FYjKR27SNuOhEV%2BAJArgxBwReGxrkd3V5deQejgXjLR%2BmeiyrU0wOHKflODCQ%2Bn8wfz3BYWT9oMQUtTmaNtZdUokbF6oFyWJRVOrGz2g76T8HgSF81LpNiUMLUC5bKr6qXNxBpUPl%2Budggd5Gs3HMj4q0l4QqUnmpssZwgTYY87J%2FC%2B%2BLI3hLS5KCHqPkVwUtS%2Bq88KUhn94veZucLO1JQXR3BhHnbFa%2FnEvXQwEW0aCDkBmeggNMuRC7G8pLDGPGECS1BudhHLyzllC00%2Fy4qFhStRly3oL5K74ucFbQq9diXdZLmsVvkBgbaNP0WYZXhk4MSnWgu2JOUlLJ1M9fN3TITww4iuvqqC57NO69yotsTXuQ9gAtn1um4N%2F3H83XeifVfMpdEs1Ez22sS2trHjdHFdylvWf0Fhxb323tZvrY4ceUbB8l8N37siM1IVxX1E8ttMKmT0r4GOqUBynxynzsgod31x4qrxnDztvVOTSESWGsp%2BPLpaIWjl%2B7Q8A1%2FuKSlbOUQRnQ%2FQ76DKYyoVeOocqkSJIK3%2FzC6%2BT5E2wtdkrKuWoYw2f53KXcvk%2BG8z%2BF%2BD36Yx4kwzypmfv0ollCButssdcTOXgVVlxNLWx%2FFmZdi1A%2FobIkLBKuuPBFXxHvQbNjkmPk2qzMhtq6U%2B9%2BAZfAr7YN0%2B5yiqNJtqT3x&X-Amz-Signature=7aff37b2f35bd9af1eeed3c31c553f8a70df436596bb496847811b8078c31702&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TP5Y7DE%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIqbRg0OsK4lLbUqs9QiKzvTEN5nZPA3YSZRUWZniMtwIgKm8g102xfTtZUg2bKa%2FJ6Qc31NmmoR9pYAaAc7WIUckqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7MewIXm%2F9fTEZHlSrcA0TePPzm1K7%2F30sYG93bpdgHwBLdS1X1jffgms5EUpunrmKiFh4Qt6t80nQSKbfGYyxkdZipIh%2BdTJnvOBGU3Mul8nysQDfamAVeDaDVF18zcC1lLhobLncp1hP75WuIfQdE7s6PT644dq7jiJWpsU6mQ2VpdqXu09Y42AvZjGLYErcVsi762p%2FYjKR27SNuOhEV%2BAJArgxBwReGxrkd3V5deQejgXjLR%2BmeiyrU0wOHKflODCQ%2Bn8wfz3BYWT9oMQUtTmaNtZdUokbF6oFyWJRVOrGz2g76T8HgSF81LpNiUMLUC5bKr6qXNxBpUPl%2Budggd5Gs3HMj4q0l4QqUnmpssZwgTYY87J%2FC%2B%2BLI3hLS5KCHqPkVwUtS%2Bq88KUhn94veZucLO1JQXR3BhHnbFa%2FnEvXQwEW0aCDkBmeggNMuRC7G8pLDGPGECS1BudhHLyzllC00%2Fy4qFhStRly3oL5K74ucFbQq9diXdZLmsVvkBgbaNP0WYZXhk4MSnWgu2JOUlLJ1M9fN3TITww4iuvqqC57NO69yotsTXuQ9gAtn1um4N%2F3H83XeifVfMpdEs1Ez22sS2trHjdHFdylvWf0Fhxb323tZvrY4ceUbB8l8N37siM1IVxX1E8ttMKmT0r4GOqUBynxynzsgod31x4qrxnDztvVOTSESWGsp%2BPLpaIWjl%2B7Q8A1%2FuKSlbOUQRnQ%2FQ76DKYyoVeOocqkSJIK3%2FzC6%2BT5E2wtdkrKuWoYw2f53KXcvk%2BG8z%2BF%2BD36Yx4kwzypmfv0ollCButssdcTOXgVVlxNLWx%2FFmZdi1A%2FobIkLBKuuPBFXxHvQbNjkmPk2qzMhtq6U%2B9%2BAZfAr7YN0%2B5yiqNJtqT3x&X-Amz-Signature=dcbba27c63bc081003686897eebd078c1c3bf2afee5d65265d15109a2451d3be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TP5Y7DE%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIqbRg0OsK4lLbUqs9QiKzvTEN5nZPA3YSZRUWZniMtwIgKm8g102xfTtZUg2bKa%2FJ6Qc31NmmoR9pYAaAc7WIUckqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7MewIXm%2F9fTEZHlSrcA0TePPzm1K7%2F30sYG93bpdgHwBLdS1X1jffgms5EUpunrmKiFh4Qt6t80nQSKbfGYyxkdZipIh%2BdTJnvOBGU3Mul8nysQDfamAVeDaDVF18zcC1lLhobLncp1hP75WuIfQdE7s6PT644dq7jiJWpsU6mQ2VpdqXu09Y42AvZjGLYErcVsi762p%2FYjKR27SNuOhEV%2BAJArgxBwReGxrkd3V5deQejgXjLR%2BmeiyrU0wOHKflODCQ%2Bn8wfz3BYWT9oMQUtTmaNtZdUokbF6oFyWJRVOrGz2g76T8HgSF81LpNiUMLUC5bKr6qXNxBpUPl%2Budggd5Gs3HMj4q0l4QqUnmpssZwgTYY87J%2FC%2B%2BLI3hLS5KCHqPkVwUtS%2Bq88KUhn94veZucLO1JQXR3BhHnbFa%2FnEvXQwEW0aCDkBmeggNMuRC7G8pLDGPGECS1BudhHLyzllC00%2Fy4qFhStRly3oL5K74ucFbQq9diXdZLmsVvkBgbaNP0WYZXhk4MSnWgu2JOUlLJ1M9fN3TITww4iuvqqC57NO69yotsTXuQ9gAtn1um4N%2F3H83XeifVfMpdEs1Ez22sS2trHjdHFdylvWf0Fhxb323tZvrY4ceUbB8l8N37siM1IVxX1E8ttMKmT0r4GOqUBynxynzsgod31x4qrxnDztvVOTSESWGsp%2BPLpaIWjl%2B7Q8A1%2FuKSlbOUQRnQ%2FQ76DKYyoVeOocqkSJIK3%2FzC6%2BT5E2wtdkrKuWoYw2f53KXcvk%2BG8z%2BF%2BD36Yx4kwzypmfv0ollCButssdcTOXgVVlxNLWx%2FFmZdi1A%2FobIkLBKuuPBFXxHvQbNjkmPk2qzMhtq6U%2B9%2BAZfAr7YN0%2B5yiqNJtqT3x&X-Amz-Signature=283242d5d3cc06e9b9da553809c0eb0aae4e85b8fcd275f1460e223c8dc64e0c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TP5Y7DE%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIqbRg0OsK4lLbUqs9QiKzvTEN5nZPA3YSZRUWZniMtwIgKm8g102xfTtZUg2bKa%2FJ6Qc31NmmoR9pYAaAc7WIUckqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7MewIXm%2F9fTEZHlSrcA0TePPzm1K7%2F30sYG93bpdgHwBLdS1X1jffgms5EUpunrmKiFh4Qt6t80nQSKbfGYyxkdZipIh%2BdTJnvOBGU3Mul8nysQDfamAVeDaDVF18zcC1lLhobLncp1hP75WuIfQdE7s6PT644dq7jiJWpsU6mQ2VpdqXu09Y42AvZjGLYErcVsi762p%2FYjKR27SNuOhEV%2BAJArgxBwReGxrkd3V5deQejgXjLR%2BmeiyrU0wOHKflODCQ%2Bn8wfz3BYWT9oMQUtTmaNtZdUokbF6oFyWJRVOrGz2g76T8HgSF81LpNiUMLUC5bKr6qXNxBpUPl%2Budggd5Gs3HMj4q0l4QqUnmpssZwgTYY87J%2FC%2B%2BLI3hLS5KCHqPkVwUtS%2Bq88KUhn94veZucLO1JQXR3BhHnbFa%2FnEvXQwEW0aCDkBmeggNMuRC7G8pLDGPGECS1BudhHLyzllC00%2Fy4qFhStRly3oL5K74ucFbQq9diXdZLmsVvkBgbaNP0WYZXhk4MSnWgu2JOUlLJ1M9fN3TITww4iuvqqC57NO69yotsTXuQ9gAtn1um4N%2F3H83XeifVfMpdEs1Ez22sS2trHjdHFdylvWf0Fhxb323tZvrY4ceUbB8l8N37siM1IVxX1E8ttMKmT0r4GOqUBynxynzsgod31x4qrxnDztvVOTSESWGsp%2BPLpaIWjl%2B7Q8A1%2FuKSlbOUQRnQ%2FQ76DKYyoVeOocqkSJIK3%2FzC6%2BT5E2wtdkrKuWoYw2f53KXcvk%2BG8z%2BF%2BD36Yx4kwzypmfv0ollCButssdcTOXgVVlxNLWx%2FFmZdi1A%2FobIkLBKuuPBFXxHvQbNjkmPk2qzMhtq6U%2B9%2BAZfAr7YN0%2B5yiqNJtqT3x&X-Amz-Signature=daea2a91f56f0539704a58633ca7ef5f7a718133c29c91e738e24613c1ba3eb5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
