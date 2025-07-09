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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKEZH773%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRopDgSgzBDb5ZkpPl9hR293O2pYROh0gtrsIgbjxsNAiEAl74SwesQL4a3QCm0AMfrsG%2FS58%2FaI6tT5xPdplVm%2BdsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZ7hL%2Bad6kolTfLbyrcA%2F744qyKfMaFfiow8VWlO%2BRCkdaMRjnsUWuopDLhBAYOHQAaGIZyQYRcI3Yy2fmIkeZhvZ6h%2BF0DF%2BfajnRYHK5x8wyuC%2FqX%2Bc%2Bv5nZCwObOkpxXlkJLZxIEfAEJ4Yh2Me%2B67y8vM9B30%2Fn6%2FrGFLJQfendg2ucTJ%2FZXAm5uWFcV2n4yrgUtg2letzreTYw3QXMUtx4cSyXhgFmp0ml64olTq8IAtkkNkwfE5LLuvtrLtG1EeWqvpBdedmigiR3b6fvAwMFfmoj1xEM9btIWkDvMnLPJtWIC1bFdIc8%2BMLdKgszmCtsbNBZIF3kVFe2abFk7y%2Fooe1UjSC%2BAwwvWvS5iXio4WW1Lbc5ftj%2Bl2iM7s1i%2BeGZndBGOwujlUHKRvuZQibw23sePGO1sjao8XTXNpcl%2BwrMGj8QGAyurg2VbajqyYfrDvL%2B2nWAdIW0Bws8ZMn%2BjPpVF%2Bq9Rjvnof7accY%2BbxpXSAy3Z9MoObq%2B20m9FSy5jJdjMSCXbZrOMIkbTj21Pewz2WpulOMTVOSy9DsW1t6q%2F0Q8CL9fgkNi8sruW1kv00GlMLlY2%2BfTZNcoHhagR%2BSODYO9KyubFF8WZ2LbMyRD2GGPVcnVV0vWpH3wigrgrD0zseSGWMMijuMMGOqUBSIx5PJJaIUMFSww66ZN3EfmHXOforzmdYbj0zFhQ78Gk%2F5HczI%2FhEaBoOrlyxa1%2Ffdn9sLHfOnkmrZYg74IyD%2FnjBJdCeiMAPc9CFf2ELBZyWwqAk1YWzlRTJKhNoUg4c72WDSbTuOOOIbQd0F73LvnwzoLgI6S57qXuYHFTz8LqT4gyuRmz7zCJ8ZNXMdWJdB9%2F2B70%2FEMrY9nczoFLBDflbC85&X-Amz-Signature=f733fe03bcdc38822671058d1aec8222946ed49ffb8b8b60cb4290e0a62fe02d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKEZH773%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRopDgSgzBDb5ZkpPl9hR293O2pYROh0gtrsIgbjxsNAiEAl74SwesQL4a3QCm0AMfrsG%2FS58%2FaI6tT5xPdplVm%2BdsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZ7hL%2Bad6kolTfLbyrcA%2F744qyKfMaFfiow8VWlO%2BRCkdaMRjnsUWuopDLhBAYOHQAaGIZyQYRcI3Yy2fmIkeZhvZ6h%2BF0DF%2BfajnRYHK5x8wyuC%2FqX%2Bc%2Bv5nZCwObOkpxXlkJLZxIEfAEJ4Yh2Me%2B67y8vM9B30%2Fn6%2FrGFLJQfendg2ucTJ%2FZXAm5uWFcV2n4yrgUtg2letzreTYw3QXMUtx4cSyXhgFmp0ml64olTq8IAtkkNkwfE5LLuvtrLtG1EeWqvpBdedmigiR3b6fvAwMFfmoj1xEM9btIWkDvMnLPJtWIC1bFdIc8%2BMLdKgszmCtsbNBZIF3kVFe2abFk7y%2Fooe1UjSC%2BAwwvWvS5iXio4WW1Lbc5ftj%2Bl2iM7s1i%2BeGZndBGOwujlUHKRvuZQibw23sePGO1sjao8XTXNpcl%2BwrMGj8QGAyurg2VbajqyYfrDvL%2B2nWAdIW0Bws8ZMn%2BjPpVF%2Bq9Rjvnof7accY%2BbxpXSAy3Z9MoObq%2B20m9FSy5jJdjMSCXbZrOMIkbTj21Pewz2WpulOMTVOSy9DsW1t6q%2F0Q8CL9fgkNi8sruW1kv00GlMLlY2%2BfTZNcoHhagR%2BSODYO9KyubFF8WZ2LbMyRD2GGPVcnVV0vWpH3wigrgrD0zseSGWMMijuMMGOqUBSIx5PJJaIUMFSww66ZN3EfmHXOforzmdYbj0zFhQ78Gk%2F5HczI%2FhEaBoOrlyxa1%2Ffdn9sLHfOnkmrZYg74IyD%2FnjBJdCeiMAPc9CFf2ELBZyWwqAk1YWzlRTJKhNoUg4c72WDSbTuOOOIbQd0F73LvnwzoLgI6S57qXuYHFTz8LqT4gyuRmz7zCJ8ZNXMdWJdB9%2F2B70%2FEMrY9nczoFLBDflbC85&X-Amz-Signature=bc63d23c6b316174ecb7f056121d0ab063722e8b7e83fd5a6dff969f797e38a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKEZH773%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRopDgSgzBDb5ZkpPl9hR293O2pYROh0gtrsIgbjxsNAiEAl74SwesQL4a3QCm0AMfrsG%2FS58%2FaI6tT5xPdplVm%2BdsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZ7hL%2Bad6kolTfLbyrcA%2F744qyKfMaFfiow8VWlO%2BRCkdaMRjnsUWuopDLhBAYOHQAaGIZyQYRcI3Yy2fmIkeZhvZ6h%2BF0DF%2BfajnRYHK5x8wyuC%2FqX%2Bc%2Bv5nZCwObOkpxXlkJLZxIEfAEJ4Yh2Me%2B67y8vM9B30%2Fn6%2FrGFLJQfendg2ucTJ%2FZXAm5uWFcV2n4yrgUtg2letzreTYw3QXMUtx4cSyXhgFmp0ml64olTq8IAtkkNkwfE5LLuvtrLtG1EeWqvpBdedmigiR3b6fvAwMFfmoj1xEM9btIWkDvMnLPJtWIC1bFdIc8%2BMLdKgszmCtsbNBZIF3kVFe2abFk7y%2Fooe1UjSC%2BAwwvWvS5iXio4WW1Lbc5ftj%2Bl2iM7s1i%2BeGZndBGOwujlUHKRvuZQibw23sePGO1sjao8XTXNpcl%2BwrMGj8QGAyurg2VbajqyYfrDvL%2B2nWAdIW0Bws8ZMn%2BjPpVF%2Bq9Rjvnof7accY%2BbxpXSAy3Z9MoObq%2B20m9FSy5jJdjMSCXbZrOMIkbTj21Pewz2WpulOMTVOSy9DsW1t6q%2F0Q8CL9fgkNi8sruW1kv00GlMLlY2%2BfTZNcoHhagR%2BSODYO9KyubFF8WZ2LbMyRD2GGPVcnVV0vWpH3wigrgrD0zseSGWMMijuMMGOqUBSIx5PJJaIUMFSww66ZN3EfmHXOforzmdYbj0zFhQ78Gk%2F5HczI%2FhEaBoOrlyxa1%2Ffdn9sLHfOnkmrZYg74IyD%2FnjBJdCeiMAPc9CFf2ELBZyWwqAk1YWzlRTJKhNoUg4c72WDSbTuOOOIbQd0F73LvnwzoLgI6S57qXuYHFTz8LqT4gyuRmz7zCJ8ZNXMdWJdB9%2F2B70%2FEMrY9nczoFLBDflbC85&X-Amz-Signature=b4d8671bb90f730a77b08836af022bf6ceb71164c84ffdefb554feaaed7091ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKEZH773%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRopDgSgzBDb5ZkpPl9hR293O2pYROh0gtrsIgbjxsNAiEAl74SwesQL4a3QCm0AMfrsG%2FS58%2FaI6tT5xPdplVm%2BdsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZ7hL%2Bad6kolTfLbyrcA%2F744qyKfMaFfiow8VWlO%2BRCkdaMRjnsUWuopDLhBAYOHQAaGIZyQYRcI3Yy2fmIkeZhvZ6h%2BF0DF%2BfajnRYHK5x8wyuC%2FqX%2Bc%2Bv5nZCwObOkpxXlkJLZxIEfAEJ4Yh2Me%2B67y8vM9B30%2Fn6%2FrGFLJQfendg2ucTJ%2FZXAm5uWFcV2n4yrgUtg2letzreTYw3QXMUtx4cSyXhgFmp0ml64olTq8IAtkkNkwfE5LLuvtrLtG1EeWqvpBdedmigiR3b6fvAwMFfmoj1xEM9btIWkDvMnLPJtWIC1bFdIc8%2BMLdKgszmCtsbNBZIF3kVFe2abFk7y%2Fooe1UjSC%2BAwwvWvS5iXio4WW1Lbc5ftj%2Bl2iM7s1i%2BeGZndBGOwujlUHKRvuZQibw23sePGO1sjao8XTXNpcl%2BwrMGj8QGAyurg2VbajqyYfrDvL%2B2nWAdIW0Bws8ZMn%2BjPpVF%2Bq9Rjvnof7accY%2BbxpXSAy3Z9MoObq%2B20m9FSy5jJdjMSCXbZrOMIkbTj21Pewz2WpulOMTVOSy9DsW1t6q%2F0Q8CL9fgkNi8sruW1kv00GlMLlY2%2BfTZNcoHhagR%2BSODYO9KyubFF8WZ2LbMyRD2GGPVcnVV0vWpH3wigrgrD0zseSGWMMijuMMGOqUBSIx5PJJaIUMFSww66ZN3EfmHXOforzmdYbj0zFhQ78Gk%2F5HczI%2FhEaBoOrlyxa1%2Ffdn9sLHfOnkmrZYg74IyD%2FnjBJdCeiMAPc9CFf2ELBZyWwqAk1YWzlRTJKhNoUg4c72WDSbTuOOOIbQd0F73LvnwzoLgI6S57qXuYHFTz8LqT4gyuRmz7zCJ8ZNXMdWJdB9%2F2B70%2FEMrY9nczoFLBDflbC85&X-Amz-Signature=f24afdefbc13191596108f970f9b14c11bf14897c5054d57b5d202683eedb34a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKEZH773%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRopDgSgzBDb5ZkpPl9hR293O2pYROh0gtrsIgbjxsNAiEAl74SwesQL4a3QCm0AMfrsG%2FS58%2FaI6tT5xPdplVm%2BdsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZ7hL%2Bad6kolTfLbyrcA%2F744qyKfMaFfiow8VWlO%2BRCkdaMRjnsUWuopDLhBAYOHQAaGIZyQYRcI3Yy2fmIkeZhvZ6h%2BF0DF%2BfajnRYHK5x8wyuC%2FqX%2Bc%2Bv5nZCwObOkpxXlkJLZxIEfAEJ4Yh2Me%2B67y8vM9B30%2Fn6%2FrGFLJQfendg2ucTJ%2FZXAm5uWFcV2n4yrgUtg2letzreTYw3QXMUtx4cSyXhgFmp0ml64olTq8IAtkkNkwfE5LLuvtrLtG1EeWqvpBdedmigiR3b6fvAwMFfmoj1xEM9btIWkDvMnLPJtWIC1bFdIc8%2BMLdKgszmCtsbNBZIF3kVFe2abFk7y%2Fooe1UjSC%2BAwwvWvS5iXio4WW1Lbc5ftj%2Bl2iM7s1i%2BeGZndBGOwujlUHKRvuZQibw23sePGO1sjao8XTXNpcl%2BwrMGj8QGAyurg2VbajqyYfrDvL%2B2nWAdIW0Bws8ZMn%2BjPpVF%2Bq9Rjvnof7accY%2BbxpXSAy3Z9MoObq%2B20m9FSy5jJdjMSCXbZrOMIkbTj21Pewz2WpulOMTVOSy9DsW1t6q%2F0Q8CL9fgkNi8sruW1kv00GlMLlY2%2BfTZNcoHhagR%2BSODYO9KyubFF8WZ2LbMyRD2GGPVcnVV0vWpH3wigrgrD0zseSGWMMijuMMGOqUBSIx5PJJaIUMFSww66ZN3EfmHXOforzmdYbj0zFhQ78Gk%2F5HczI%2FhEaBoOrlyxa1%2Ffdn9sLHfOnkmrZYg74IyD%2FnjBJdCeiMAPc9CFf2ELBZyWwqAk1YWzlRTJKhNoUg4c72WDSbTuOOOIbQd0F73LvnwzoLgI6S57qXuYHFTz8LqT4gyuRmz7zCJ8ZNXMdWJdB9%2F2B70%2FEMrY9nczoFLBDflbC85&X-Amz-Signature=e8f7bcc6ddfedbf28eba0c76ab044443f2e3bb0203f2c16a2524a1b3f5173f04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKEZH773%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRopDgSgzBDb5ZkpPl9hR293O2pYROh0gtrsIgbjxsNAiEAl74SwesQL4a3QCm0AMfrsG%2FS58%2FaI6tT5xPdplVm%2BdsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZ7hL%2Bad6kolTfLbyrcA%2F744qyKfMaFfiow8VWlO%2BRCkdaMRjnsUWuopDLhBAYOHQAaGIZyQYRcI3Yy2fmIkeZhvZ6h%2BF0DF%2BfajnRYHK5x8wyuC%2FqX%2Bc%2Bv5nZCwObOkpxXlkJLZxIEfAEJ4Yh2Me%2B67y8vM9B30%2Fn6%2FrGFLJQfendg2ucTJ%2FZXAm5uWFcV2n4yrgUtg2letzreTYw3QXMUtx4cSyXhgFmp0ml64olTq8IAtkkNkwfE5LLuvtrLtG1EeWqvpBdedmigiR3b6fvAwMFfmoj1xEM9btIWkDvMnLPJtWIC1bFdIc8%2BMLdKgszmCtsbNBZIF3kVFe2abFk7y%2Fooe1UjSC%2BAwwvWvS5iXio4WW1Lbc5ftj%2Bl2iM7s1i%2BeGZndBGOwujlUHKRvuZQibw23sePGO1sjao8XTXNpcl%2BwrMGj8QGAyurg2VbajqyYfrDvL%2B2nWAdIW0Bws8ZMn%2BjPpVF%2Bq9Rjvnof7accY%2BbxpXSAy3Z9MoObq%2B20m9FSy5jJdjMSCXbZrOMIkbTj21Pewz2WpulOMTVOSy9DsW1t6q%2F0Q8CL9fgkNi8sruW1kv00GlMLlY2%2BfTZNcoHhagR%2BSODYO9KyubFF8WZ2LbMyRD2GGPVcnVV0vWpH3wigrgrD0zseSGWMMijuMMGOqUBSIx5PJJaIUMFSww66ZN3EfmHXOforzmdYbj0zFhQ78Gk%2F5HczI%2FhEaBoOrlyxa1%2Ffdn9sLHfOnkmrZYg74IyD%2FnjBJdCeiMAPc9CFf2ELBZyWwqAk1YWzlRTJKhNoUg4c72WDSbTuOOOIbQd0F73LvnwzoLgI6S57qXuYHFTz8LqT4gyuRmz7zCJ8ZNXMdWJdB9%2F2B70%2FEMrY9nczoFLBDflbC85&X-Amz-Signature=362fb37e6dbf5e5a1477a8cac55ed30c07804281dd8113acb7de1f73f496ef24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKEZH773%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRopDgSgzBDb5ZkpPl9hR293O2pYROh0gtrsIgbjxsNAiEAl74SwesQL4a3QCm0AMfrsG%2FS58%2FaI6tT5xPdplVm%2BdsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZ7hL%2Bad6kolTfLbyrcA%2F744qyKfMaFfiow8VWlO%2BRCkdaMRjnsUWuopDLhBAYOHQAaGIZyQYRcI3Yy2fmIkeZhvZ6h%2BF0DF%2BfajnRYHK5x8wyuC%2FqX%2Bc%2Bv5nZCwObOkpxXlkJLZxIEfAEJ4Yh2Me%2B67y8vM9B30%2Fn6%2FrGFLJQfendg2ucTJ%2FZXAm5uWFcV2n4yrgUtg2letzreTYw3QXMUtx4cSyXhgFmp0ml64olTq8IAtkkNkwfE5LLuvtrLtG1EeWqvpBdedmigiR3b6fvAwMFfmoj1xEM9btIWkDvMnLPJtWIC1bFdIc8%2BMLdKgszmCtsbNBZIF3kVFe2abFk7y%2Fooe1UjSC%2BAwwvWvS5iXio4WW1Lbc5ftj%2Bl2iM7s1i%2BeGZndBGOwujlUHKRvuZQibw23sePGO1sjao8XTXNpcl%2BwrMGj8QGAyurg2VbajqyYfrDvL%2B2nWAdIW0Bws8ZMn%2BjPpVF%2Bq9Rjvnof7accY%2BbxpXSAy3Z9MoObq%2B20m9FSy5jJdjMSCXbZrOMIkbTj21Pewz2WpulOMTVOSy9DsW1t6q%2F0Q8CL9fgkNi8sruW1kv00GlMLlY2%2BfTZNcoHhagR%2BSODYO9KyubFF8WZ2LbMyRD2GGPVcnVV0vWpH3wigrgrD0zseSGWMMijuMMGOqUBSIx5PJJaIUMFSww66ZN3EfmHXOforzmdYbj0zFhQ78Gk%2F5HczI%2FhEaBoOrlyxa1%2Ffdn9sLHfOnkmrZYg74IyD%2FnjBJdCeiMAPc9CFf2ELBZyWwqAk1YWzlRTJKhNoUg4c72WDSbTuOOOIbQd0F73LvnwzoLgI6S57qXuYHFTz8LqT4gyuRmz7zCJ8ZNXMdWJdB9%2F2B70%2FEMrY9nczoFLBDflbC85&X-Amz-Signature=6908285ed26a1dd919d7181d10edee1b6e80f5c538bb63196be31ca892d14600&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKEZH773%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRopDgSgzBDb5ZkpPl9hR293O2pYROh0gtrsIgbjxsNAiEAl74SwesQL4a3QCm0AMfrsG%2FS58%2FaI6tT5xPdplVm%2BdsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZ7hL%2Bad6kolTfLbyrcA%2F744qyKfMaFfiow8VWlO%2BRCkdaMRjnsUWuopDLhBAYOHQAaGIZyQYRcI3Yy2fmIkeZhvZ6h%2BF0DF%2BfajnRYHK5x8wyuC%2FqX%2Bc%2Bv5nZCwObOkpxXlkJLZxIEfAEJ4Yh2Me%2B67y8vM9B30%2Fn6%2FrGFLJQfendg2ucTJ%2FZXAm5uWFcV2n4yrgUtg2letzreTYw3QXMUtx4cSyXhgFmp0ml64olTq8IAtkkNkwfE5LLuvtrLtG1EeWqvpBdedmigiR3b6fvAwMFfmoj1xEM9btIWkDvMnLPJtWIC1bFdIc8%2BMLdKgszmCtsbNBZIF3kVFe2abFk7y%2Fooe1UjSC%2BAwwvWvS5iXio4WW1Lbc5ftj%2Bl2iM7s1i%2BeGZndBGOwujlUHKRvuZQibw23sePGO1sjao8XTXNpcl%2BwrMGj8QGAyurg2VbajqyYfrDvL%2B2nWAdIW0Bws8ZMn%2BjPpVF%2Bq9Rjvnof7accY%2BbxpXSAy3Z9MoObq%2B20m9FSy5jJdjMSCXbZrOMIkbTj21Pewz2WpulOMTVOSy9DsW1t6q%2F0Q8CL9fgkNi8sruW1kv00GlMLlY2%2BfTZNcoHhagR%2BSODYO9KyubFF8WZ2LbMyRD2GGPVcnVV0vWpH3wigrgrD0zseSGWMMijuMMGOqUBSIx5PJJaIUMFSww66ZN3EfmHXOforzmdYbj0zFhQ78Gk%2F5HczI%2FhEaBoOrlyxa1%2Ffdn9sLHfOnkmrZYg74IyD%2FnjBJdCeiMAPc9CFf2ELBZyWwqAk1YWzlRTJKhNoUg4c72WDSbTuOOOIbQd0F73LvnwzoLgI6S57qXuYHFTz8LqT4gyuRmz7zCJ8ZNXMdWJdB9%2F2B70%2FEMrY9nczoFLBDflbC85&X-Amz-Signature=b6f9020774e6cbb33da49c109ba7a2a53e684aee00baaec4f6893077255a7bb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
