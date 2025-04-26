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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W6GDGZP%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDW0XjyQ5Pt3DdiM%2B4d9JGn%2BpfRsoCy2iPu3qjdUXiuDAiEA92LeqKvwwG1iW4pXbeuX%2FbDvNIvoWQFzdbBJaMp85Icq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDL1FhPpNP16bGYieSyrcA5KAexi9AgLNDGAMq43YkciahEhdKkZtBUpTBQEka4A2zdQQTaz9wla5c%2BkIbs6mUFvBqZ4R164mHa3U%2BX2Wc5pEVnYads0vYPOQUVFwZvP7txsbaQRmZliV5lsWIFldE%2B1p33LZodVJ1SVS6BGzoJF6GeXtE8aGo6Ed28NwWnBgit0frdFGXZeSAhiugArHWnm%2FZC%2BbBZhm7ldqPYa1Vjy%2Fandz6%2BM7eChgo2t1p4DQjDaLvOglah3mCnryfA2ggfplf%2B77mPLj9UXqcP3QydbzqeBNRfw81o8leuGkZFy4EPpeG1srYmjlS5HQfF%2BBwRdkffhg54YSozzBuGwtFnRp1xevPxDt%2Bh8saTfa5N0Hm948Cy6h6E%2BFBb4Bws8AfkjK9m9ZMiTVHS3oZOPaKsbiATLXryTJx%2FYNos9N%2BWUu3zbniiGGG6TzLftXmEQMG3axD9mh5yD9%2B2mypCsctLpZAUpFkFYB6eDbV%2FJ%2BbFF39EyMJOXki5YNwltW6npBQxY7l6je6Cz4R08o%2BlSpQ%2Fn7%2FxmCwM2jBoqrvu%2BXNvylNuHp1sx4XG0k6eNSVjMLDEP%2BXtjKW2eMQzcLvBWMLf6O9DoUMMQcolDC%2Fp%2BxVoui4X0O5gmFHbhPfuoQML7dtMAGOqUB3eQqlzeLsEbE%2FxjwchjBAdaQgLDHxPMyqTrASNtwIw9ZzVugk7Wx25C5mcSVv5BakC%2FaU5melVxJz43UchkawHKIme7XGQtoNZFLQmD9fP24UoC5J8KWn5LBgTt0fiYqFdgKlpFcVPiWKKf%2Fi5YNpD2SjzGTtMRSQe%2BNHDyeTSbcd1RpUMZh1imqdgZSlKLefuzJ%2F5DzJeWnhA6KraBDkS7YeZNS&X-Amz-Signature=1ac8823f41efe4478bb47636a0900c4777859cb9e1c10221f5a58ace830d66e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W6GDGZP%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDW0XjyQ5Pt3DdiM%2B4d9JGn%2BpfRsoCy2iPu3qjdUXiuDAiEA92LeqKvwwG1iW4pXbeuX%2FbDvNIvoWQFzdbBJaMp85Icq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDL1FhPpNP16bGYieSyrcA5KAexi9AgLNDGAMq43YkciahEhdKkZtBUpTBQEka4A2zdQQTaz9wla5c%2BkIbs6mUFvBqZ4R164mHa3U%2BX2Wc5pEVnYads0vYPOQUVFwZvP7txsbaQRmZliV5lsWIFldE%2B1p33LZodVJ1SVS6BGzoJF6GeXtE8aGo6Ed28NwWnBgit0frdFGXZeSAhiugArHWnm%2FZC%2BbBZhm7ldqPYa1Vjy%2Fandz6%2BM7eChgo2t1p4DQjDaLvOglah3mCnryfA2ggfplf%2B77mPLj9UXqcP3QydbzqeBNRfw81o8leuGkZFy4EPpeG1srYmjlS5HQfF%2BBwRdkffhg54YSozzBuGwtFnRp1xevPxDt%2Bh8saTfa5N0Hm948Cy6h6E%2BFBb4Bws8AfkjK9m9ZMiTVHS3oZOPaKsbiATLXryTJx%2FYNos9N%2BWUu3zbniiGGG6TzLftXmEQMG3axD9mh5yD9%2B2mypCsctLpZAUpFkFYB6eDbV%2FJ%2BbFF39EyMJOXki5YNwltW6npBQxY7l6je6Cz4R08o%2BlSpQ%2Fn7%2FxmCwM2jBoqrvu%2BXNvylNuHp1sx4XG0k6eNSVjMLDEP%2BXtjKW2eMQzcLvBWMLf6O9DoUMMQcolDC%2Fp%2BxVoui4X0O5gmFHbhPfuoQML7dtMAGOqUB3eQqlzeLsEbE%2FxjwchjBAdaQgLDHxPMyqTrASNtwIw9ZzVugk7Wx25C5mcSVv5BakC%2FaU5melVxJz43UchkawHKIme7XGQtoNZFLQmD9fP24UoC5J8KWn5LBgTt0fiYqFdgKlpFcVPiWKKf%2Fi5YNpD2SjzGTtMRSQe%2BNHDyeTSbcd1RpUMZh1imqdgZSlKLefuzJ%2F5DzJeWnhA6KraBDkS7YeZNS&X-Amz-Signature=db2081f11c74e0bd518ee8110563b4b167a2e389a493bc20fe2bcc5f2798c698&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W6GDGZP%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDW0XjyQ5Pt3DdiM%2B4d9JGn%2BpfRsoCy2iPu3qjdUXiuDAiEA92LeqKvwwG1iW4pXbeuX%2FbDvNIvoWQFzdbBJaMp85Icq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDL1FhPpNP16bGYieSyrcA5KAexi9AgLNDGAMq43YkciahEhdKkZtBUpTBQEka4A2zdQQTaz9wla5c%2BkIbs6mUFvBqZ4R164mHa3U%2BX2Wc5pEVnYads0vYPOQUVFwZvP7txsbaQRmZliV5lsWIFldE%2B1p33LZodVJ1SVS6BGzoJF6GeXtE8aGo6Ed28NwWnBgit0frdFGXZeSAhiugArHWnm%2FZC%2BbBZhm7ldqPYa1Vjy%2Fandz6%2BM7eChgo2t1p4DQjDaLvOglah3mCnryfA2ggfplf%2B77mPLj9UXqcP3QydbzqeBNRfw81o8leuGkZFy4EPpeG1srYmjlS5HQfF%2BBwRdkffhg54YSozzBuGwtFnRp1xevPxDt%2Bh8saTfa5N0Hm948Cy6h6E%2BFBb4Bws8AfkjK9m9ZMiTVHS3oZOPaKsbiATLXryTJx%2FYNos9N%2BWUu3zbniiGGG6TzLftXmEQMG3axD9mh5yD9%2B2mypCsctLpZAUpFkFYB6eDbV%2FJ%2BbFF39EyMJOXki5YNwltW6npBQxY7l6je6Cz4R08o%2BlSpQ%2Fn7%2FxmCwM2jBoqrvu%2BXNvylNuHp1sx4XG0k6eNSVjMLDEP%2BXtjKW2eMQzcLvBWMLf6O9DoUMMQcolDC%2Fp%2BxVoui4X0O5gmFHbhPfuoQML7dtMAGOqUB3eQqlzeLsEbE%2FxjwchjBAdaQgLDHxPMyqTrASNtwIw9ZzVugk7Wx25C5mcSVv5BakC%2FaU5melVxJz43UchkawHKIme7XGQtoNZFLQmD9fP24UoC5J8KWn5LBgTt0fiYqFdgKlpFcVPiWKKf%2Fi5YNpD2SjzGTtMRSQe%2BNHDyeTSbcd1RpUMZh1imqdgZSlKLefuzJ%2F5DzJeWnhA6KraBDkS7YeZNS&X-Amz-Signature=34dcec25e058740abd005be685389d4164203bdf6258f701964cca43b7da53da&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W6GDGZP%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDW0XjyQ5Pt3DdiM%2B4d9JGn%2BpfRsoCy2iPu3qjdUXiuDAiEA92LeqKvwwG1iW4pXbeuX%2FbDvNIvoWQFzdbBJaMp85Icq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDL1FhPpNP16bGYieSyrcA5KAexi9AgLNDGAMq43YkciahEhdKkZtBUpTBQEka4A2zdQQTaz9wla5c%2BkIbs6mUFvBqZ4R164mHa3U%2BX2Wc5pEVnYads0vYPOQUVFwZvP7txsbaQRmZliV5lsWIFldE%2B1p33LZodVJ1SVS6BGzoJF6GeXtE8aGo6Ed28NwWnBgit0frdFGXZeSAhiugArHWnm%2FZC%2BbBZhm7ldqPYa1Vjy%2Fandz6%2BM7eChgo2t1p4DQjDaLvOglah3mCnryfA2ggfplf%2B77mPLj9UXqcP3QydbzqeBNRfw81o8leuGkZFy4EPpeG1srYmjlS5HQfF%2BBwRdkffhg54YSozzBuGwtFnRp1xevPxDt%2Bh8saTfa5N0Hm948Cy6h6E%2BFBb4Bws8AfkjK9m9ZMiTVHS3oZOPaKsbiATLXryTJx%2FYNos9N%2BWUu3zbniiGGG6TzLftXmEQMG3axD9mh5yD9%2B2mypCsctLpZAUpFkFYB6eDbV%2FJ%2BbFF39EyMJOXki5YNwltW6npBQxY7l6je6Cz4R08o%2BlSpQ%2Fn7%2FxmCwM2jBoqrvu%2BXNvylNuHp1sx4XG0k6eNSVjMLDEP%2BXtjKW2eMQzcLvBWMLf6O9DoUMMQcolDC%2Fp%2BxVoui4X0O5gmFHbhPfuoQML7dtMAGOqUB3eQqlzeLsEbE%2FxjwchjBAdaQgLDHxPMyqTrASNtwIw9ZzVugk7Wx25C5mcSVv5BakC%2FaU5melVxJz43UchkawHKIme7XGQtoNZFLQmD9fP24UoC5J8KWn5LBgTt0fiYqFdgKlpFcVPiWKKf%2Fi5YNpD2SjzGTtMRSQe%2BNHDyeTSbcd1RpUMZh1imqdgZSlKLefuzJ%2F5DzJeWnhA6KraBDkS7YeZNS&X-Amz-Signature=ca3328f7c677a65ed9906d6ddeef65eede64bd00605054f83bd1560010204e1b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W6GDGZP%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDW0XjyQ5Pt3DdiM%2B4d9JGn%2BpfRsoCy2iPu3qjdUXiuDAiEA92LeqKvwwG1iW4pXbeuX%2FbDvNIvoWQFzdbBJaMp85Icq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDL1FhPpNP16bGYieSyrcA5KAexi9AgLNDGAMq43YkciahEhdKkZtBUpTBQEka4A2zdQQTaz9wla5c%2BkIbs6mUFvBqZ4R164mHa3U%2BX2Wc5pEVnYads0vYPOQUVFwZvP7txsbaQRmZliV5lsWIFldE%2B1p33LZodVJ1SVS6BGzoJF6GeXtE8aGo6Ed28NwWnBgit0frdFGXZeSAhiugArHWnm%2FZC%2BbBZhm7ldqPYa1Vjy%2Fandz6%2BM7eChgo2t1p4DQjDaLvOglah3mCnryfA2ggfplf%2B77mPLj9UXqcP3QydbzqeBNRfw81o8leuGkZFy4EPpeG1srYmjlS5HQfF%2BBwRdkffhg54YSozzBuGwtFnRp1xevPxDt%2Bh8saTfa5N0Hm948Cy6h6E%2BFBb4Bws8AfkjK9m9ZMiTVHS3oZOPaKsbiATLXryTJx%2FYNos9N%2BWUu3zbniiGGG6TzLftXmEQMG3axD9mh5yD9%2B2mypCsctLpZAUpFkFYB6eDbV%2FJ%2BbFF39EyMJOXki5YNwltW6npBQxY7l6je6Cz4R08o%2BlSpQ%2Fn7%2FxmCwM2jBoqrvu%2BXNvylNuHp1sx4XG0k6eNSVjMLDEP%2BXtjKW2eMQzcLvBWMLf6O9DoUMMQcolDC%2Fp%2BxVoui4X0O5gmFHbhPfuoQML7dtMAGOqUB3eQqlzeLsEbE%2FxjwchjBAdaQgLDHxPMyqTrASNtwIw9ZzVugk7Wx25C5mcSVv5BakC%2FaU5melVxJz43UchkawHKIme7XGQtoNZFLQmD9fP24UoC5J8KWn5LBgTt0fiYqFdgKlpFcVPiWKKf%2Fi5YNpD2SjzGTtMRSQe%2BNHDyeTSbcd1RpUMZh1imqdgZSlKLefuzJ%2F5DzJeWnhA6KraBDkS7YeZNS&X-Amz-Signature=8fe5a65b6bec7eac5992d1788e30c94d939ed339a8bedf0194cbd68ccd8831ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W6GDGZP%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDW0XjyQ5Pt3DdiM%2B4d9JGn%2BpfRsoCy2iPu3qjdUXiuDAiEA92LeqKvwwG1iW4pXbeuX%2FbDvNIvoWQFzdbBJaMp85Icq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDL1FhPpNP16bGYieSyrcA5KAexi9AgLNDGAMq43YkciahEhdKkZtBUpTBQEka4A2zdQQTaz9wla5c%2BkIbs6mUFvBqZ4R164mHa3U%2BX2Wc5pEVnYads0vYPOQUVFwZvP7txsbaQRmZliV5lsWIFldE%2B1p33LZodVJ1SVS6BGzoJF6GeXtE8aGo6Ed28NwWnBgit0frdFGXZeSAhiugArHWnm%2FZC%2BbBZhm7ldqPYa1Vjy%2Fandz6%2BM7eChgo2t1p4DQjDaLvOglah3mCnryfA2ggfplf%2B77mPLj9UXqcP3QydbzqeBNRfw81o8leuGkZFy4EPpeG1srYmjlS5HQfF%2BBwRdkffhg54YSozzBuGwtFnRp1xevPxDt%2Bh8saTfa5N0Hm948Cy6h6E%2BFBb4Bws8AfkjK9m9ZMiTVHS3oZOPaKsbiATLXryTJx%2FYNos9N%2BWUu3zbniiGGG6TzLftXmEQMG3axD9mh5yD9%2B2mypCsctLpZAUpFkFYB6eDbV%2FJ%2BbFF39EyMJOXki5YNwltW6npBQxY7l6je6Cz4R08o%2BlSpQ%2Fn7%2FxmCwM2jBoqrvu%2BXNvylNuHp1sx4XG0k6eNSVjMLDEP%2BXtjKW2eMQzcLvBWMLf6O9DoUMMQcolDC%2Fp%2BxVoui4X0O5gmFHbhPfuoQML7dtMAGOqUB3eQqlzeLsEbE%2FxjwchjBAdaQgLDHxPMyqTrASNtwIw9ZzVugk7Wx25C5mcSVv5BakC%2FaU5melVxJz43UchkawHKIme7XGQtoNZFLQmD9fP24UoC5J8KWn5LBgTt0fiYqFdgKlpFcVPiWKKf%2Fi5YNpD2SjzGTtMRSQe%2BNHDyeTSbcd1RpUMZh1imqdgZSlKLefuzJ%2F5DzJeWnhA6KraBDkS7YeZNS&X-Amz-Signature=b8c83ac42470ce9a71e5f45bff845013c8b16cd0a7f620f130b96b76df7214ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W6GDGZP%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDW0XjyQ5Pt3DdiM%2B4d9JGn%2BpfRsoCy2iPu3qjdUXiuDAiEA92LeqKvwwG1iW4pXbeuX%2FbDvNIvoWQFzdbBJaMp85Icq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDL1FhPpNP16bGYieSyrcA5KAexi9AgLNDGAMq43YkciahEhdKkZtBUpTBQEka4A2zdQQTaz9wla5c%2BkIbs6mUFvBqZ4R164mHa3U%2BX2Wc5pEVnYads0vYPOQUVFwZvP7txsbaQRmZliV5lsWIFldE%2B1p33LZodVJ1SVS6BGzoJF6GeXtE8aGo6Ed28NwWnBgit0frdFGXZeSAhiugArHWnm%2FZC%2BbBZhm7ldqPYa1Vjy%2Fandz6%2BM7eChgo2t1p4DQjDaLvOglah3mCnryfA2ggfplf%2B77mPLj9UXqcP3QydbzqeBNRfw81o8leuGkZFy4EPpeG1srYmjlS5HQfF%2BBwRdkffhg54YSozzBuGwtFnRp1xevPxDt%2Bh8saTfa5N0Hm948Cy6h6E%2BFBb4Bws8AfkjK9m9ZMiTVHS3oZOPaKsbiATLXryTJx%2FYNos9N%2BWUu3zbniiGGG6TzLftXmEQMG3axD9mh5yD9%2B2mypCsctLpZAUpFkFYB6eDbV%2FJ%2BbFF39EyMJOXki5YNwltW6npBQxY7l6je6Cz4R08o%2BlSpQ%2Fn7%2FxmCwM2jBoqrvu%2BXNvylNuHp1sx4XG0k6eNSVjMLDEP%2BXtjKW2eMQzcLvBWMLf6O9DoUMMQcolDC%2Fp%2BxVoui4X0O5gmFHbhPfuoQML7dtMAGOqUB3eQqlzeLsEbE%2FxjwchjBAdaQgLDHxPMyqTrASNtwIw9ZzVugk7Wx25C5mcSVv5BakC%2FaU5melVxJz43UchkawHKIme7XGQtoNZFLQmD9fP24UoC5J8KWn5LBgTt0fiYqFdgKlpFcVPiWKKf%2Fi5YNpD2SjzGTtMRSQe%2BNHDyeTSbcd1RpUMZh1imqdgZSlKLefuzJ%2F5DzJeWnhA6KraBDkS7YeZNS&X-Amz-Signature=ff730c92fb007d325d8aaf39c809c4424587ba71768203b93a5c4d434619b9c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W6GDGZP%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDW0XjyQ5Pt3DdiM%2B4d9JGn%2BpfRsoCy2iPu3qjdUXiuDAiEA92LeqKvwwG1iW4pXbeuX%2FbDvNIvoWQFzdbBJaMp85Icq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDL1FhPpNP16bGYieSyrcA5KAexi9AgLNDGAMq43YkciahEhdKkZtBUpTBQEka4A2zdQQTaz9wla5c%2BkIbs6mUFvBqZ4R164mHa3U%2BX2Wc5pEVnYads0vYPOQUVFwZvP7txsbaQRmZliV5lsWIFldE%2B1p33LZodVJ1SVS6BGzoJF6GeXtE8aGo6Ed28NwWnBgit0frdFGXZeSAhiugArHWnm%2FZC%2BbBZhm7ldqPYa1Vjy%2Fandz6%2BM7eChgo2t1p4DQjDaLvOglah3mCnryfA2ggfplf%2B77mPLj9UXqcP3QydbzqeBNRfw81o8leuGkZFy4EPpeG1srYmjlS5HQfF%2BBwRdkffhg54YSozzBuGwtFnRp1xevPxDt%2Bh8saTfa5N0Hm948Cy6h6E%2BFBb4Bws8AfkjK9m9ZMiTVHS3oZOPaKsbiATLXryTJx%2FYNos9N%2BWUu3zbniiGGG6TzLftXmEQMG3axD9mh5yD9%2B2mypCsctLpZAUpFkFYB6eDbV%2FJ%2BbFF39EyMJOXki5YNwltW6npBQxY7l6je6Cz4R08o%2BlSpQ%2Fn7%2FxmCwM2jBoqrvu%2BXNvylNuHp1sx4XG0k6eNSVjMLDEP%2BXtjKW2eMQzcLvBWMLf6O9DoUMMQcolDC%2Fp%2BxVoui4X0O5gmFHbhPfuoQML7dtMAGOqUB3eQqlzeLsEbE%2FxjwchjBAdaQgLDHxPMyqTrASNtwIw9ZzVugk7Wx25C5mcSVv5BakC%2FaU5melVxJz43UchkawHKIme7XGQtoNZFLQmD9fP24UoC5J8KWn5LBgTt0fiYqFdgKlpFcVPiWKKf%2Fi5YNpD2SjzGTtMRSQe%2BNHDyeTSbcd1RpUMZh1imqdgZSlKLefuzJ%2F5DzJeWnhA6KraBDkS7YeZNS&X-Amz-Signature=21a71714e224593aa6a8fcc1714814e42ea677a4d88e8e4063720d84820be99c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
