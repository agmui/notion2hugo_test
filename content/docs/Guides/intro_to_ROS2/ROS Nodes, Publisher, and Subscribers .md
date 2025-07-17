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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF3MEF62%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDgYUKZOoU2Mfsu16kf5bnzDvWuTvxHMVcsEMtrvAf8MAiBHGAkj46cQvqPSTpdJIcDWFKxZbcrJoK8HAp%2F%2Fb%2BI2Fir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMRDjg1IFPAg3bNtUoKtwDK%2Bdjhzph8iWd2%2FAEMpXBplAKeKuHIuf94IO%2FUfr0noiB%2BChDIZI1SGJp3h%2BmA5YG0jxQl1XFrY8MY4%2FOkhXZS9nz6rFEnBg22vlB5sUk5pIj%2B%2Fijq%2BRjzhZFke0TvKKCGSyPQm69GWIfyl39SEDtKlh5jypiaZM5OmTvpt0KnfpXhKyjir1NN4Ixybwqb7ufCnt7g3hzp2sL8slAbLb3EJ4247dqK46TjqxeOeoM%2FJw1S1l%2BvrKPvF7pxY%2FWfVRYIs7KE9EERZ2uwpFH%2FlJdWrt00xCGSZ%2Fi0TSh%2FZCvwIm62XryorCI7Um6buHkQJ3aUE7qqVYuCiItTRUy4GzO5xTG5SDG7INSZcglaMgdvjKki4jtZ1LWPtTrB1TvbGxXqn6RixD5XyiN358FZ66nGPZFIPp3wfn76KnO2sW2MrUrIbjPUCH9IYGZiGrI71exyl%2BZI6HKN9Y4gZgIXk4vBmGiRSSEyqmG4Ja3h9YBRghDaNyNBp50TAw92o%2BkH0IqZaUXCUDBPHyb22C2XBjmU0vRj8L7Lfb%2F6CqaNHMa3qnFd5uPDWvKQFdu6Fe6PjVm6DeqNxvcGWlkeMHo6osIKyaCCpKurFK6DB8h7sqjhVaJ1t8KRBVrvNCNRIcwjLjlwwY6pgEPdEA1LwRjpzefdk1Y4YkaNWuH7Q4w6EEZDp0sFvmMXN5Egb%2B2B82TSf43pPpDv%2BdIvWivyB%2BG8uaN7dLmS%2B5gGBNib0%2FnrvVrvnQbZS%2FlYFCwVrPnisEO4pgy639ODWUda301weUV8a0iH2Nsa2Pg%2FLPFrzVBeVTorpkwhyBeyHmp%2Ba0%2FEYRGCnAUyoPRCcsvR8OAsKHkD9PdcleevrdqcIaKX6zH&X-Amz-Signature=f72f771551ff822a8046cb16c7ef3f9085ba5af919044b3223a1441dec3e4ac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF3MEF62%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDgYUKZOoU2Mfsu16kf5bnzDvWuTvxHMVcsEMtrvAf8MAiBHGAkj46cQvqPSTpdJIcDWFKxZbcrJoK8HAp%2F%2Fb%2BI2Fir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMRDjg1IFPAg3bNtUoKtwDK%2Bdjhzph8iWd2%2FAEMpXBplAKeKuHIuf94IO%2FUfr0noiB%2BChDIZI1SGJp3h%2BmA5YG0jxQl1XFrY8MY4%2FOkhXZS9nz6rFEnBg22vlB5sUk5pIj%2B%2Fijq%2BRjzhZFke0TvKKCGSyPQm69GWIfyl39SEDtKlh5jypiaZM5OmTvpt0KnfpXhKyjir1NN4Ixybwqb7ufCnt7g3hzp2sL8slAbLb3EJ4247dqK46TjqxeOeoM%2FJw1S1l%2BvrKPvF7pxY%2FWfVRYIs7KE9EERZ2uwpFH%2FlJdWrt00xCGSZ%2Fi0TSh%2FZCvwIm62XryorCI7Um6buHkQJ3aUE7qqVYuCiItTRUy4GzO5xTG5SDG7INSZcglaMgdvjKki4jtZ1LWPtTrB1TvbGxXqn6RixD5XyiN358FZ66nGPZFIPp3wfn76KnO2sW2MrUrIbjPUCH9IYGZiGrI71exyl%2BZI6HKN9Y4gZgIXk4vBmGiRSSEyqmG4Ja3h9YBRghDaNyNBp50TAw92o%2BkH0IqZaUXCUDBPHyb22C2XBjmU0vRj8L7Lfb%2F6CqaNHMa3qnFd5uPDWvKQFdu6Fe6PjVm6DeqNxvcGWlkeMHo6osIKyaCCpKurFK6DB8h7sqjhVaJ1t8KRBVrvNCNRIcwjLjlwwY6pgEPdEA1LwRjpzefdk1Y4YkaNWuH7Q4w6EEZDp0sFvmMXN5Egb%2B2B82TSf43pPpDv%2BdIvWivyB%2BG8uaN7dLmS%2B5gGBNib0%2FnrvVrvnQbZS%2FlYFCwVrPnisEO4pgy639ODWUda301weUV8a0iH2Nsa2Pg%2FLPFrzVBeVTorpkwhyBeyHmp%2Ba0%2FEYRGCnAUyoPRCcsvR8OAsKHkD9PdcleevrdqcIaKX6zH&X-Amz-Signature=0955c9694d009d90238f7c6adfb0b465734d7e7bdf456abbeeeb7de2b7858ee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF3MEF62%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDgYUKZOoU2Mfsu16kf5bnzDvWuTvxHMVcsEMtrvAf8MAiBHGAkj46cQvqPSTpdJIcDWFKxZbcrJoK8HAp%2F%2Fb%2BI2Fir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMRDjg1IFPAg3bNtUoKtwDK%2Bdjhzph8iWd2%2FAEMpXBplAKeKuHIuf94IO%2FUfr0noiB%2BChDIZI1SGJp3h%2BmA5YG0jxQl1XFrY8MY4%2FOkhXZS9nz6rFEnBg22vlB5sUk5pIj%2B%2Fijq%2BRjzhZFke0TvKKCGSyPQm69GWIfyl39SEDtKlh5jypiaZM5OmTvpt0KnfpXhKyjir1NN4Ixybwqb7ufCnt7g3hzp2sL8slAbLb3EJ4247dqK46TjqxeOeoM%2FJw1S1l%2BvrKPvF7pxY%2FWfVRYIs7KE9EERZ2uwpFH%2FlJdWrt00xCGSZ%2Fi0TSh%2FZCvwIm62XryorCI7Um6buHkQJ3aUE7qqVYuCiItTRUy4GzO5xTG5SDG7INSZcglaMgdvjKki4jtZ1LWPtTrB1TvbGxXqn6RixD5XyiN358FZ66nGPZFIPp3wfn76KnO2sW2MrUrIbjPUCH9IYGZiGrI71exyl%2BZI6HKN9Y4gZgIXk4vBmGiRSSEyqmG4Ja3h9YBRghDaNyNBp50TAw92o%2BkH0IqZaUXCUDBPHyb22C2XBjmU0vRj8L7Lfb%2F6CqaNHMa3qnFd5uPDWvKQFdu6Fe6PjVm6DeqNxvcGWlkeMHo6osIKyaCCpKurFK6DB8h7sqjhVaJ1t8KRBVrvNCNRIcwjLjlwwY6pgEPdEA1LwRjpzefdk1Y4YkaNWuH7Q4w6EEZDp0sFvmMXN5Egb%2B2B82TSf43pPpDv%2BdIvWivyB%2BG8uaN7dLmS%2B5gGBNib0%2FnrvVrvnQbZS%2FlYFCwVrPnisEO4pgy639ODWUda301weUV8a0iH2Nsa2Pg%2FLPFrzVBeVTorpkwhyBeyHmp%2Ba0%2FEYRGCnAUyoPRCcsvR8OAsKHkD9PdcleevrdqcIaKX6zH&X-Amz-Signature=bece77e16cb4b602a9b23486d0af385bb96f703cad326ff3177d630ff0d8ca74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF3MEF62%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDgYUKZOoU2Mfsu16kf5bnzDvWuTvxHMVcsEMtrvAf8MAiBHGAkj46cQvqPSTpdJIcDWFKxZbcrJoK8HAp%2F%2Fb%2BI2Fir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMRDjg1IFPAg3bNtUoKtwDK%2Bdjhzph8iWd2%2FAEMpXBplAKeKuHIuf94IO%2FUfr0noiB%2BChDIZI1SGJp3h%2BmA5YG0jxQl1XFrY8MY4%2FOkhXZS9nz6rFEnBg22vlB5sUk5pIj%2B%2Fijq%2BRjzhZFke0TvKKCGSyPQm69GWIfyl39SEDtKlh5jypiaZM5OmTvpt0KnfpXhKyjir1NN4Ixybwqb7ufCnt7g3hzp2sL8slAbLb3EJ4247dqK46TjqxeOeoM%2FJw1S1l%2BvrKPvF7pxY%2FWfVRYIs7KE9EERZ2uwpFH%2FlJdWrt00xCGSZ%2Fi0TSh%2FZCvwIm62XryorCI7Um6buHkQJ3aUE7qqVYuCiItTRUy4GzO5xTG5SDG7INSZcglaMgdvjKki4jtZ1LWPtTrB1TvbGxXqn6RixD5XyiN358FZ66nGPZFIPp3wfn76KnO2sW2MrUrIbjPUCH9IYGZiGrI71exyl%2BZI6HKN9Y4gZgIXk4vBmGiRSSEyqmG4Ja3h9YBRghDaNyNBp50TAw92o%2BkH0IqZaUXCUDBPHyb22C2XBjmU0vRj8L7Lfb%2F6CqaNHMa3qnFd5uPDWvKQFdu6Fe6PjVm6DeqNxvcGWlkeMHo6osIKyaCCpKurFK6DB8h7sqjhVaJ1t8KRBVrvNCNRIcwjLjlwwY6pgEPdEA1LwRjpzefdk1Y4YkaNWuH7Q4w6EEZDp0sFvmMXN5Egb%2B2B82TSf43pPpDv%2BdIvWivyB%2BG8uaN7dLmS%2B5gGBNib0%2FnrvVrvnQbZS%2FlYFCwVrPnisEO4pgy639ODWUda301weUV8a0iH2Nsa2Pg%2FLPFrzVBeVTorpkwhyBeyHmp%2Ba0%2FEYRGCnAUyoPRCcsvR8OAsKHkD9PdcleevrdqcIaKX6zH&X-Amz-Signature=db480e615330ba89d0c93d730ceccd8bb785f8cff980e892dfa78212117af882&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF3MEF62%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDgYUKZOoU2Mfsu16kf5bnzDvWuTvxHMVcsEMtrvAf8MAiBHGAkj46cQvqPSTpdJIcDWFKxZbcrJoK8HAp%2F%2Fb%2BI2Fir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMRDjg1IFPAg3bNtUoKtwDK%2Bdjhzph8iWd2%2FAEMpXBplAKeKuHIuf94IO%2FUfr0noiB%2BChDIZI1SGJp3h%2BmA5YG0jxQl1XFrY8MY4%2FOkhXZS9nz6rFEnBg22vlB5sUk5pIj%2B%2Fijq%2BRjzhZFke0TvKKCGSyPQm69GWIfyl39SEDtKlh5jypiaZM5OmTvpt0KnfpXhKyjir1NN4Ixybwqb7ufCnt7g3hzp2sL8slAbLb3EJ4247dqK46TjqxeOeoM%2FJw1S1l%2BvrKPvF7pxY%2FWfVRYIs7KE9EERZ2uwpFH%2FlJdWrt00xCGSZ%2Fi0TSh%2FZCvwIm62XryorCI7Um6buHkQJ3aUE7qqVYuCiItTRUy4GzO5xTG5SDG7INSZcglaMgdvjKki4jtZ1LWPtTrB1TvbGxXqn6RixD5XyiN358FZ66nGPZFIPp3wfn76KnO2sW2MrUrIbjPUCH9IYGZiGrI71exyl%2BZI6HKN9Y4gZgIXk4vBmGiRSSEyqmG4Ja3h9YBRghDaNyNBp50TAw92o%2BkH0IqZaUXCUDBPHyb22C2XBjmU0vRj8L7Lfb%2F6CqaNHMa3qnFd5uPDWvKQFdu6Fe6PjVm6DeqNxvcGWlkeMHo6osIKyaCCpKurFK6DB8h7sqjhVaJ1t8KRBVrvNCNRIcwjLjlwwY6pgEPdEA1LwRjpzefdk1Y4YkaNWuH7Q4w6EEZDp0sFvmMXN5Egb%2B2B82TSf43pPpDv%2BdIvWivyB%2BG8uaN7dLmS%2B5gGBNib0%2FnrvVrvnQbZS%2FlYFCwVrPnisEO4pgy639ODWUda301weUV8a0iH2Nsa2Pg%2FLPFrzVBeVTorpkwhyBeyHmp%2Ba0%2FEYRGCnAUyoPRCcsvR8OAsKHkD9PdcleevrdqcIaKX6zH&X-Amz-Signature=0647c5ce973fc1e9abae5f4ab3276360b1f1e31323665ce8e24cbd23f22c6548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF3MEF62%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDgYUKZOoU2Mfsu16kf5bnzDvWuTvxHMVcsEMtrvAf8MAiBHGAkj46cQvqPSTpdJIcDWFKxZbcrJoK8HAp%2F%2Fb%2BI2Fir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMRDjg1IFPAg3bNtUoKtwDK%2Bdjhzph8iWd2%2FAEMpXBplAKeKuHIuf94IO%2FUfr0noiB%2BChDIZI1SGJp3h%2BmA5YG0jxQl1XFrY8MY4%2FOkhXZS9nz6rFEnBg22vlB5sUk5pIj%2B%2Fijq%2BRjzhZFke0TvKKCGSyPQm69GWIfyl39SEDtKlh5jypiaZM5OmTvpt0KnfpXhKyjir1NN4Ixybwqb7ufCnt7g3hzp2sL8slAbLb3EJ4247dqK46TjqxeOeoM%2FJw1S1l%2BvrKPvF7pxY%2FWfVRYIs7KE9EERZ2uwpFH%2FlJdWrt00xCGSZ%2Fi0TSh%2FZCvwIm62XryorCI7Um6buHkQJ3aUE7qqVYuCiItTRUy4GzO5xTG5SDG7INSZcglaMgdvjKki4jtZ1LWPtTrB1TvbGxXqn6RixD5XyiN358FZ66nGPZFIPp3wfn76KnO2sW2MrUrIbjPUCH9IYGZiGrI71exyl%2BZI6HKN9Y4gZgIXk4vBmGiRSSEyqmG4Ja3h9YBRghDaNyNBp50TAw92o%2BkH0IqZaUXCUDBPHyb22C2XBjmU0vRj8L7Lfb%2F6CqaNHMa3qnFd5uPDWvKQFdu6Fe6PjVm6DeqNxvcGWlkeMHo6osIKyaCCpKurFK6DB8h7sqjhVaJ1t8KRBVrvNCNRIcwjLjlwwY6pgEPdEA1LwRjpzefdk1Y4YkaNWuH7Q4w6EEZDp0sFvmMXN5Egb%2B2B82TSf43pPpDv%2BdIvWivyB%2BG8uaN7dLmS%2B5gGBNib0%2FnrvVrvnQbZS%2FlYFCwVrPnisEO4pgy639ODWUda301weUV8a0iH2Nsa2Pg%2FLPFrzVBeVTorpkwhyBeyHmp%2Ba0%2FEYRGCnAUyoPRCcsvR8OAsKHkD9PdcleevrdqcIaKX6zH&X-Amz-Signature=bd0cbac41bfdc0917d8aa6eca4f1f56d1eaebed300d4b0ef9b4eba2981ae18a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF3MEF62%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDgYUKZOoU2Mfsu16kf5bnzDvWuTvxHMVcsEMtrvAf8MAiBHGAkj46cQvqPSTpdJIcDWFKxZbcrJoK8HAp%2F%2Fb%2BI2Fir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMRDjg1IFPAg3bNtUoKtwDK%2Bdjhzph8iWd2%2FAEMpXBplAKeKuHIuf94IO%2FUfr0noiB%2BChDIZI1SGJp3h%2BmA5YG0jxQl1XFrY8MY4%2FOkhXZS9nz6rFEnBg22vlB5sUk5pIj%2B%2Fijq%2BRjzhZFke0TvKKCGSyPQm69GWIfyl39SEDtKlh5jypiaZM5OmTvpt0KnfpXhKyjir1NN4Ixybwqb7ufCnt7g3hzp2sL8slAbLb3EJ4247dqK46TjqxeOeoM%2FJw1S1l%2BvrKPvF7pxY%2FWfVRYIs7KE9EERZ2uwpFH%2FlJdWrt00xCGSZ%2Fi0TSh%2FZCvwIm62XryorCI7Um6buHkQJ3aUE7qqVYuCiItTRUy4GzO5xTG5SDG7INSZcglaMgdvjKki4jtZ1LWPtTrB1TvbGxXqn6RixD5XyiN358FZ66nGPZFIPp3wfn76KnO2sW2MrUrIbjPUCH9IYGZiGrI71exyl%2BZI6HKN9Y4gZgIXk4vBmGiRSSEyqmG4Ja3h9YBRghDaNyNBp50TAw92o%2BkH0IqZaUXCUDBPHyb22C2XBjmU0vRj8L7Lfb%2F6CqaNHMa3qnFd5uPDWvKQFdu6Fe6PjVm6DeqNxvcGWlkeMHo6osIKyaCCpKurFK6DB8h7sqjhVaJ1t8KRBVrvNCNRIcwjLjlwwY6pgEPdEA1LwRjpzefdk1Y4YkaNWuH7Q4w6EEZDp0sFvmMXN5Egb%2B2B82TSf43pPpDv%2BdIvWivyB%2BG8uaN7dLmS%2B5gGBNib0%2FnrvVrvnQbZS%2FlYFCwVrPnisEO4pgy639ODWUda301weUV8a0iH2Nsa2Pg%2FLPFrzVBeVTorpkwhyBeyHmp%2Ba0%2FEYRGCnAUyoPRCcsvR8OAsKHkD9PdcleevrdqcIaKX6zH&X-Amz-Signature=57bab4c147334bfb65aa835f923562f17af39a24a63f97fb2409688dbeee62e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF3MEF62%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDgYUKZOoU2Mfsu16kf5bnzDvWuTvxHMVcsEMtrvAf8MAiBHGAkj46cQvqPSTpdJIcDWFKxZbcrJoK8HAp%2F%2Fb%2BI2Fir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMRDjg1IFPAg3bNtUoKtwDK%2Bdjhzph8iWd2%2FAEMpXBplAKeKuHIuf94IO%2FUfr0noiB%2BChDIZI1SGJp3h%2BmA5YG0jxQl1XFrY8MY4%2FOkhXZS9nz6rFEnBg22vlB5sUk5pIj%2B%2Fijq%2BRjzhZFke0TvKKCGSyPQm69GWIfyl39SEDtKlh5jypiaZM5OmTvpt0KnfpXhKyjir1NN4Ixybwqb7ufCnt7g3hzp2sL8slAbLb3EJ4247dqK46TjqxeOeoM%2FJw1S1l%2BvrKPvF7pxY%2FWfVRYIs7KE9EERZ2uwpFH%2FlJdWrt00xCGSZ%2Fi0TSh%2FZCvwIm62XryorCI7Um6buHkQJ3aUE7qqVYuCiItTRUy4GzO5xTG5SDG7INSZcglaMgdvjKki4jtZ1LWPtTrB1TvbGxXqn6RixD5XyiN358FZ66nGPZFIPp3wfn76KnO2sW2MrUrIbjPUCH9IYGZiGrI71exyl%2BZI6HKN9Y4gZgIXk4vBmGiRSSEyqmG4Ja3h9YBRghDaNyNBp50TAw92o%2BkH0IqZaUXCUDBPHyb22C2XBjmU0vRj8L7Lfb%2F6CqaNHMa3qnFd5uPDWvKQFdu6Fe6PjVm6DeqNxvcGWlkeMHo6osIKyaCCpKurFK6DB8h7sqjhVaJ1t8KRBVrvNCNRIcwjLjlwwY6pgEPdEA1LwRjpzefdk1Y4YkaNWuH7Q4w6EEZDp0sFvmMXN5Egb%2B2B82TSf43pPpDv%2BdIvWivyB%2BG8uaN7dLmS%2B5gGBNib0%2FnrvVrvnQbZS%2FlYFCwVrPnisEO4pgy639ODWUda301weUV8a0iH2Nsa2Pg%2FLPFrzVBeVTorpkwhyBeyHmp%2Ba0%2FEYRGCnAUyoPRCcsvR8OAsKHkD9PdcleevrdqcIaKX6zH&X-Amz-Signature=df1302ad3800403893a94e174b2420dae38a3914df467e77e29a7680e0a97828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
