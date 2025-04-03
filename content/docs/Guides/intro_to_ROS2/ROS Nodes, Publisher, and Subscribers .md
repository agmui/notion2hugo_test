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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7ZZLQ4K%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7XJ5b8Q5Xhc%2B%2FxwL%2FuBSoQX4b6lQULmaiNkFNN%2BoWsAiEApxJE2HdImvWiS%2BHw%2BYwAevHv99nFWu68mlxsXdAymucqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPABRgI6SNaG1P8AVCrcA5aSxpRL76J7cUX6659MtCd8SGX4Pey7QZmUbd%2FsdJXz8LpXd%2Fwpgx9V97NoWx3mZlQokCvoQaW31amhkg0apC%2Bg81iBssvWNsmjw2NUaK9LTpQrmb9LpL65nJ%2BXOQpF4xx%2FbF3NWWbMOcMduklxp%2FJY%2B8yA6mYsn8oNsvmLnBc1lVJek8ixirFzHQWPohTBM88JAY9rvnjMKOAG5nBZTDQdUqgo%2Bf0aSg7chBY8Jlxl35N%2FTXXG80yWnD4gpyfjfx3MXRps618pqcG6Fc6VcPgKK1R80snQxaLFDvB57j0xw3Z%2Bz9wMpEU4zgH%2FFcFELOqcqRNedgym%2Fk%2BADfA0lvtIsH8jGgRs%2B8ml0ZDclmJjjN4ltXgeLfqXYbnjMnZO0w4CrA5ZZV2erILZGDa9OuUoSgRwTOeTA%2Brq2Gi8238krZPfRP%2BjrBjrnOlbHoGtZ7W41Xb9tLsjMkK0ODFIrivtdV3OV66l7imugQ17BbkoC5WCXYdkDDstgjQxgEDr6q3pY8zRaEhqWp3Ptn9iUsW%2FMWsBbaut7mpE0YYtE5GYV2zONQ%2FEagfMeRKLPu5zEjEVKHsVeg8%2Fd7I36lyYgVof0DqgTonBjP3iFRo%2F2Vy2lT6JftP2kQJN%2F08GMJuFvL8GOqUBQbD1K51fZLpDp4ORNXoZOhDv%2FjVBXGPkL9BnXD8duU5Gr7t1ntU52QjxCjUaLFNRr0XnEpuYuKtWrol0BlDBBmgUdr4j5bu0%2FMmO8kXggO%2BKAxM8b%2BTrN0uzcMllhCDGTs8V%2FSrvY6x3p02%2FAvcKvYXj1gd0utDEr0ZMk%2F%2FlI0akoFuG0wibYoAobFn8aw8CohRwPhBiBJJlKUbevCL7mVlq91xf&X-Amz-Signature=13f819680114421b635e470f509436daeb7ee9fc6637873e0ce9f89bb8ebfbc4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7ZZLQ4K%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7XJ5b8Q5Xhc%2B%2FxwL%2FuBSoQX4b6lQULmaiNkFNN%2BoWsAiEApxJE2HdImvWiS%2BHw%2BYwAevHv99nFWu68mlxsXdAymucqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPABRgI6SNaG1P8AVCrcA5aSxpRL76J7cUX6659MtCd8SGX4Pey7QZmUbd%2FsdJXz8LpXd%2Fwpgx9V97NoWx3mZlQokCvoQaW31amhkg0apC%2Bg81iBssvWNsmjw2NUaK9LTpQrmb9LpL65nJ%2BXOQpF4xx%2FbF3NWWbMOcMduklxp%2FJY%2B8yA6mYsn8oNsvmLnBc1lVJek8ixirFzHQWPohTBM88JAY9rvnjMKOAG5nBZTDQdUqgo%2Bf0aSg7chBY8Jlxl35N%2FTXXG80yWnD4gpyfjfx3MXRps618pqcG6Fc6VcPgKK1R80snQxaLFDvB57j0xw3Z%2Bz9wMpEU4zgH%2FFcFELOqcqRNedgym%2Fk%2BADfA0lvtIsH8jGgRs%2B8ml0ZDclmJjjN4ltXgeLfqXYbnjMnZO0w4CrA5ZZV2erILZGDa9OuUoSgRwTOeTA%2Brq2Gi8238krZPfRP%2BjrBjrnOlbHoGtZ7W41Xb9tLsjMkK0ODFIrivtdV3OV66l7imugQ17BbkoC5WCXYdkDDstgjQxgEDr6q3pY8zRaEhqWp3Ptn9iUsW%2FMWsBbaut7mpE0YYtE5GYV2zONQ%2FEagfMeRKLPu5zEjEVKHsVeg8%2Fd7I36lyYgVof0DqgTonBjP3iFRo%2F2Vy2lT6JftP2kQJN%2F08GMJuFvL8GOqUBQbD1K51fZLpDp4ORNXoZOhDv%2FjVBXGPkL9BnXD8duU5Gr7t1ntU52QjxCjUaLFNRr0XnEpuYuKtWrol0BlDBBmgUdr4j5bu0%2FMmO8kXggO%2BKAxM8b%2BTrN0uzcMllhCDGTs8V%2FSrvY6x3p02%2FAvcKvYXj1gd0utDEr0ZMk%2F%2FlI0akoFuG0wibYoAobFn8aw8CohRwPhBiBJJlKUbevCL7mVlq91xf&X-Amz-Signature=c8ee5f25f19c202e10c73953a301de37cb1aa4fe217ebc503993db8d52ed85d1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7ZZLQ4K%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7XJ5b8Q5Xhc%2B%2FxwL%2FuBSoQX4b6lQULmaiNkFNN%2BoWsAiEApxJE2HdImvWiS%2BHw%2BYwAevHv99nFWu68mlxsXdAymucqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPABRgI6SNaG1P8AVCrcA5aSxpRL76J7cUX6659MtCd8SGX4Pey7QZmUbd%2FsdJXz8LpXd%2Fwpgx9V97NoWx3mZlQokCvoQaW31amhkg0apC%2Bg81iBssvWNsmjw2NUaK9LTpQrmb9LpL65nJ%2BXOQpF4xx%2FbF3NWWbMOcMduklxp%2FJY%2B8yA6mYsn8oNsvmLnBc1lVJek8ixirFzHQWPohTBM88JAY9rvnjMKOAG5nBZTDQdUqgo%2Bf0aSg7chBY8Jlxl35N%2FTXXG80yWnD4gpyfjfx3MXRps618pqcG6Fc6VcPgKK1R80snQxaLFDvB57j0xw3Z%2Bz9wMpEU4zgH%2FFcFELOqcqRNedgym%2Fk%2BADfA0lvtIsH8jGgRs%2B8ml0ZDclmJjjN4ltXgeLfqXYbnjMnZO0w4CrA5ZZV2erILZGDa9OuUoSgRwTOeTA%2Brq2Gi8238krZPfRP%2BjrBjrnOlbHoGtZ7W41Xb9tLsjMkK0ODFIrivtdV3OV66l7imugQ17BbkoC5WCXYdkDDstgjQxgEDr6q3pY8zRaEhqWp3Ptn9iUsW%2FMWsBbaut7mpE0YYtE5GYV2zONQ%2FEagfMeRKLPu5zEjEVKHsVeg8%2Fd7I36lyYgVof0DqgTonBjP3iFRo%2F2Vy2lT6JftP2kQJN%2F08GMJuFvL8GOqUBQbD1K51fZLpDp4ORNXoZOhDv%2FjVBXGPkL9BnXD8duU5Gr7t1ntU52QjxCjUaLFNRr0XnEpuYuKtWrol0BlDBBmgUdr4j5bu0%2FMmO8kXggO%2BKAxM8b%2BTrN0uzcMllhCDGTs8V%2FSrvY6x3p02%2FAvcKvYXj1gd0utDEr0ZMk%2F%2FlI0akoFuG0wibYoAobFn8aw8CohRwPhBiBJJlKUbevCL7mVlq91xf&X-Amz-Signature=8f9dd91c5e46aad9664b3c9b3f3c91aa21aacf53e43018fc47241a375b460034&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7ZZLQ4K%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7XJ5b8Q5Xhc%2B%2FxwL%2FuBSoQX4b6lQULmaiNkFNN%2BoWsAiEApxJE2HdImvWiS%2BHw%2BYwAevHv99nFWu68mlxsXdAymucqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPABRgI6SNaG1P8AVCrcA5aSxpRL76J7cUX6659MtCd8SGX4Pey7QZmUbd%2FsdJXz8LpXd%2Fwpgx9V97NoWx3mZlQokCvoQaW31amhkg0apC%2Bg81iBssvWNsmjw2NUaK9LTpQrmb9LpL65nJ%2BXOQpF4xx%2FbF3NWWbMOcMduklxp%2FJY%2B8yA6mYsn8oNsvmLnBc1lVJek8ixirFzHQWPohTBM88JAY9rvnjMKOAG5nBZTDQdUqgo%2Bf0aSg7chBY8Jlxl35N%2FTXXG80yWnD4gpyfjfx3MXRps618pqcG6Fc6VcPgKK1R80snQxaLFDvB57j0xw3Z%2Bz9wMpEU4zgH%2FFcFELOqcqRNedgym%2Fk%2BADfA0lvtIsH8jGgRs%2B8ml0ZDclmJjjN4ltXgeLfqXYbnjMnZO0w4CrA5ZZV2erILZGDa9OuUoSgRwTOeTA%2Brq2Gi8238krZPfRP%2BjrBjrnOlbHoGtZ7W41Xb9tLsjMkK0ODFIrivtdV3OV66l7imugQ17BbkoC5WCXYdkDDstgjQxgEDr6q3pY8zRaEhqWp3Ptn9iUsW%2FMWsBbaut7mpE0YYtE5GYV2zONQ%2FEagfMeRKLPu5zEjEVKHsVeg8%2Fd7I36lyYgVof0DqgTonBjP3iFRo%2F2Vy2lT6JftP2kQJN%2F08GMJuFvL8GOqUBQbD1K51fZLpDp4ORNXoZOhDv%2FjVBXGPkL9BnXD8duU5Gr7t1ntU52QjxCjUaLFNRr0XnEpuYuKtWrol0BlDBBmgUdr4j5bu0%2FMmO8kXggO%2BKAxM8b%2BTrN0uzcMllhCDGTs8V%2FSrvY6x3p02%2FAvcKvYXj1gd0utDEr0ZMk%2F%2FlI0akoFuG0wibYoAobFn8aw8CohRwPhBiBJJlKUbevCL7mVlq91xf&X-Amz-Signature=d6bb2d980126ea2ebd0b834e009bfdbd53b665ab6dd5dc23bfd65429a3610c42&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7ZZLQ4K%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7XJ5b8Q5Xhc%2B%2FxwL%2FuBSoQX4b6lQULmaiNkFNN%2BoWsAiEApxJE2HdImvWiS%2BHw%2BYwAevHv99nFWu68mlxsXdAymucqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPABRgI6SNaG1P8AVCrcA5aSxpRL76J7cUX6659MtCd8SGX4Pey7QZmUbd%2FsdJXz8LpXd%2Fwpgx9V97NoWx3mZlQokCvoQaW31amhkg0apC%2Bg81iBssvWNsmjw2NUaK9LTpQrmb9LpL65nJ%2BXOQpF4xx%2FbF3NWWbMOcMduklxp%2FJY%2B8yA6mYsn8oNsvmLnBc1lVJek8ixirFzHQWPohTBM88JAY9rvnjMKOAG5nBZTDQdUqgo%2Bf0aSg7chBY8Jlxl35N%2FTXXG80yWnD4gpyfjfx3MXRps618pqcG6Fc6VcPgKK1R80snQxaLFDvB57j0xw3Z%2Bz9wMpEU4zgH%2FFcFELOqcqRNedgym%2Fk%2BADfA0lvtIsH8jGgRs%2B8ml0ZDclmJjjN4ltXgeLfqXYbnjMnZO0w4CrA5ZZV2erILZGDa9OuUoSgRwTOeTA%2Brq2Gi8238krZPfRP%2BjrBjrnOlbHoGtZ7W41Xb9tLsjMkK0ODFIrivtdV3OV66l7imugQ17BbkoC5WCXYdkDDstgjQxgEDr6q3pY8zRaEhqWp3Ptn9iUsW%2FMWsBbaut7mpE0YYtE5GYV2zONQ%2FEagfMeRKLPu5zEjEVKHsVeg8%2Fd7I36lyYgVof0DqgTonBjP3iFRo%2F2Vy2lT6JftP2kQJN%2F08GMJuFvL8GOqUBQbD1K51fZLpDp4ORNXoZOhDv%2FjVBXGPkL9BnXD8duU5Gr7t1ntU52QjxCjUaLFNRr0XnEpuYuKtWrol0BlDBBmgUdr4j5bu0%2FMmO8kXggO%2BKAxM8b%2BTrN0uzcMllhCDGTs8V%2FSrvY6x3p02%2FAvcKvYXj1gd0utDEr0ZMk%2F%2FlI0akoFuG0wibYoAobFn8aw8CohRwPhBiBJJlKUbevCL7mVlq91xf&X-Amz-Signature=b6f8401e12a9d37052505cb6bfea409dd28a95d5c8d0e0b19bd8ed831d0c031a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7ZZLQ4K%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7XJ5b8Q5Xhc%2B%2FxwL%2FuBSoQX4b6lQULmaiNkFNN%2BoWsAiEApxJE2HdImvWiS%2BHw%2BYwAevHv99nFWu68mlxsXdAymucqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPABRgI6SNaG1P8AVCrcA5aSxpRL76J7cUX6659MtCd8SGX4Pey7QZmUbd%2FsdJXz8LpXd%2Fwpgx9V97NoWx3mZlQokCvoQaW31amhkg0apC%2Bg81iBssvWNsmjw2NUaK9LTpQrmb9LpL65nJ%2BXOQpF4xx%2FbF3NWWbMOcMduklxp%2FJY%2B8yA6mYsn8oNsvmLnBc1lVJek8ixirFzHQWPohTBM88JAY9rvnjMKOAG5nBZTDQdUqgo%2Bf0aSg7chBY8Jlxl35N%2FTXXG80yWnD4gpyfjfx3MXRps618pqcG6Fc6VcPgKK1R80snQxaLFDvB57j0xw3Z%2Bz9wMpEU4zgH%2FFcFELOqcqRNedgym%2Fk%2BADfA0lvtIsH8jGgRs%2B8ml0ZDclmJjjN4ltXgeLfqXYbnjMnZO0w4CrA5ZZV2erILZGDa9OuUoSgRwTOeTA%2Brq2Gi8238krZPfRP%2BjrBjrnOlbHoGtZ7W41Xb9tLsjMkK0ODFIrivtdV3OV66l7imugQ17BbkoC5WCXYdkDDstgjQxgEDr6q3pY8zRaEhqWp3Ptn9iUsW%2FMWsBbaut7mpE0YYtE5GYV2zONQ%2FEagfMeRKLPu5zEjEVKHsVeg8%2Fd7I36lyYgVof0DqgTonBjP3iFRo%2F2Vy2lT6JftP2kQJN%2F08GMJuFvL8GOqUBQbD1K51fZLpDp4ORNXoZOhDv%2FjVBXGPkL9BnXD8duU5Gr7t1ntU52QjxCjUaLFNRr0XnEpuYuKtWrol0BlDBBmgUdr4j5bu0%2FMmO8kXggO%2BKAxM8b%2BTrN0uzcMllhCDGTs8V%2FSrvY6x3p02%2FAvcKvYXj1gd0utDEr0ZMk%2F%2FlI0akoFuG0wibYoAobFn8aw8CohRwPhBiBJJlKUbevCL7mVlq91xf&X-Amz-Signature=5853aba1354a212980ca4e1f2652de23b545521a9f3802c40b69374b692c5799&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7ZZLQ4K%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7XJ5b8Q5Xhc%2B%2FxwL%2FuBSoQX4b6lQULmaiNkFNN%2BoWsAiEApxJE2HdImvWiS%2BHw%2BYwAevHv99nFWu68mlxsXdAymucqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPABRgI6SNaG1P8AVCrcA5aSxpRL76J7cUX6659MtCd8SGX4Pey7QZmUbd%2FsdJXz8LpXd%2Fwpgx9V97NoWx3mZlQokCvoQaW31amhkg0apC%2Bg81iBssvWNsmjw2NUaK9LTpQrmb9LpL65nJ%2BXOQpF4xx%2FbF3NWWbMOcMduklxp%2FJY%2B8yA6mYsn8oNsvmLnBc1lVJek8ixirFzHQWPohTBM88JAY9rvnjMKOAG5nBZTDQdUqgo%2Bf0aSg7chBY8Jlxl35N%2FTXXG80yWnD4gpyfjfx3MXRps618pqcG6Fc6VcPgKK1R80snQxaLFDvB57j0xw3Z%2Bz9wMpEU4zgH%2FFcFELOqcqRNedgym%2Fk%2BADfA0lvtIsH8jGgRs%2B8ml0ZDclmJjjN4ltXgeLfqXYbnjMnZO0w4CrA5ZZV2erILZGDa9OuUoSgRwTOeTA%2Brq2Gi8238krZPfRP%2BjrBjrnOlbHoGtZ7W41Xb9tLsjMkK0ODFIrivtdV3OV66l7imugQ17BbkoC5WCXYdkDDstgjQxgEDr6q3pY8zRaEhqWp3Ptn9iUsW%2FMWsBbaut7mpE0YYtE5GYV2zONQ%2FEagfMeRKLPu5zEjEVKHsVeg8%2Fd7I36lyYgVof0DqgTonBjP3iFRo%2F2Vy2lT6JftP2kQJN%2F08GMJuFvL8GOqUBQbD1K51fZLpDp4ORNXoZOhDv%2FjVBXGPkL9BnXD8duU5Gr7t1ntU52QjxCjUaLFNRr0XnEpuYuKtWrol0BlDBBmgUdr4j5bu0%2FMmO8kXggO%2BKAxM8b%2BTrN0uzcMllhCDGTs8V%2FSrvY6x3p02%2FAvcKvYXj1gd0utDEr0ZMk%2F%2FlI0akoFuG0wibYoAobFn8aw8CohRwPhBiBJJlKUbevCL7mVlq91xf&X-Amz-Signature=fb8b9974f6bc1e80187895aeebc300d2c73d443a9b568bf492f9fcdf5196dd50&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7ZZLQ4K%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7XJ5b8Q5Xhc%2B%2FxwL%2FuBSoQX4b6lQULmaiNkFNN%2BoWsAiEApxJE2HdImvWiS%2BHw%2BYwAevHv99nFWu68mlxsXdAymucqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPABRgI6SNaG1P8AVCrcA5aSxpRL76J7cUX6659MtCd8SGX4Pey7QZmUbd%2FsdJXz8LpXd%2Fwpgx9V97NoWx3mZlQokCvoQaW31amhkg0apC%2Bg81iBssvWNsmjw2NUaK9LTpQrmb9LpL65nJ%2BXOQpF4xx%2FbF3NWWbMOcMduklxp%2FJY%2B8yA6mYsn8oNsvmLnBc1lVJek8ixirFzHQWPohTBM88JAY9rvnjMKOAG5nBZTDQdUqgo%2Bf0aSg7chBY8Jlxl35N%2FTXXG80yWnD4gpyfjfx3MXRps618pqcG6Fc6VcPgKK1R80snQxaLFDvB57j0xw3Z%2Bz9wMpEU4zgH%2FFcFELOqcqRNedgym%2Fk%2BADfA0lvtIsH8jGgRs%2B8ml0ZDclmJjjN4ltXgeLfqXYbnjMnZO0w4CrA5ZZV2erILZGDa9OuUoSgRwTOeTA%2Brq2Gi8238krZPfRP%2BjrBjrnOlbHoGtZ7W41Xb9tLsjMkK0ODFIrivtdV3OV66l7imugQ17BbkoC5WCXYdkDDstgjQxgEDr6q3pY8zRaEhqWp3Ptn9iUsW%2FMWsBbaut7mpE0YYtE5GYV2zONQ%2FEagfMeRKLPu5zEjEVKHsVeg8%2Fd7I36lyYgVof0DqgTonBjP3iFRo%2F2Vy2lT6JftP2kQJN%2F08GMJuFvL8GOqUBQbD1K51fZLpDp4ORNXoZOhDv%2FjVBXGPkL9BnXD8duU5Gr7t1ntU52QjxCjUaLFNRr0XnEpuYuKtWrol0BlDBBmgUdr4j5bu0%2FMmO8kXggO%2BKAxM8b%2BTrN0uzcMllhCDGTs8V%2FSrvY6x3p02%2FAvcKvYXj1gd0utDEr0ZMk%2F%2FlI0akoFuG0wibYoAobFn8aw8CohRwPhBiBJJlKUbevCL7mVlq91xf&X-Amz-Signature=f30c29dc3f88c893096ff58d70bff81b6b94c8880e708065da2b2e218865de7e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
