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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2QOWMN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHzlNZ9C8ydM2NBbMGpS31nsq99Qcr637gSyroHMWpT2AiEA8FDtkCvCTuqJYfH6jHtkt3T5MHv5Qd%2BTDgpzivVu33Iq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIJZhDMttUR5b0oK2SrcA8j%2FGKfzwgg%2FLgnbM3FjjdW5OLxUNZfUc9fKnPp%2FlCf1QkGLsrcb3nbrHWzC%2BWQXZ7a%2FOPFJ8CO4Vt1QOL9CP2Om0wHcQITUTW1%2Fs7J9EBjE9AqCbrNsxAT3bYvsVvMlDkAd6wPx7XmRFfd5VPIGByN%2FfH8g1ZPY3X7yYywkKx55V3wn6bF%2Bs%2F8QSoQHACbBYNFgE5qZhZMfHCp8nE%2BwoGMjEOZ8tOlV1D%2BByJb9EqK4lSsXFQBWdHJThBXV7%2BsTS%2F%2FQDd5QO5NyY%2FwjnGl5vhjYL9vSBqESF3NaPoJ%2FjWmkfpcD1hTRrsBzKQ0UkqJ7qFLEyoS3IobWBHkQ4YyRAS0rPTkOTNkVVhqzk4o31%2F8TuQZN5c%2F4vR34PkBAD6ynCq5WPO0cZcWn3tF3mtMSZ863FVey2bed85R8xfdG9yMzF%2BSeyaMVo9rE3TXjsYTsIzETAYqEx%2FxU8KH96x48WtQbaHf9yY4ES531etcaJrJ%2F7LBacnWuj8HDOzd1U9GPItJE0YJ20XHMU%2FVFyNRSC5XBFRIV1LHEuW3I2ViOsKxNB1wy07OdNw1LKwjKr6gzaMhYHIYGuY451nkS8Mkc8agsDXabNbOoL7FPH1kC0tyrhaaXDEdNTQZyxqeoMJyi6sIGOqUBVYVHgrfXQJdWwgZyhqnAKDUor8bgkeejdKQgQWWSRk7P2qQo6XLV5vDEP02Y%2FO5B9cowdvJOKYjgfU91WPFyuzWQfowNtlNSCt2UCp0x2Cv%2F6ssmDMJ9yAvWtC9BQeujLkqllKyFs%2B8TvShl%2BCQQGngOVuPJWuU5%2F3kFsuaQLspOQEboWPh1K4x80f%2BTguG44IEDGin4px67V4EuQu3jR79mWw%2BH&X-Amz-Signature=b2f0e6084e82637dfbd18854ec1d4580d8d716a066e0cbe119d0513dce50091f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2QOWMN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHzlNZ9C8ydM2NBbMGpS31nsq99Qcr637gSyroHMWpT2AiEA8FDtkCvCTuqJYfH6jHtkt3T5MHv5Qd%2BTDgpzivVu33Iq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIJZhDMttUR5b0oK2SrcA8j%2FGKfzwgg%2FLgnbM3FjjdW5OLxUNZfUc9fKnPp%2FlCf1QkGLsrcb3nbrHWzC%2BWQXZ7a%2FOPFJ8CO4Vt1QOL9CP2Om0wHcQITUTW1%2Fs7J9EBjE9AqCbrNsxAT3bYvsVvMlDkAd6wPx7XmRFfd5VPIGByN%2FfH8g1ZPY3X7yYywkKx55V3wn6bF%2Bs%2F8QSoQHACbBYNFgE5qZhZMfHCp8nE%2BwoGMjEOZ8tOlV1D%2BByJb9EqK4lSsXFQBWdHJThBXV7%2BsTS%2F%2FQDd5QO5NyY%2FwjnGl5vhjYL9vSBqESF3NaPoJ%2FjWmkfpcD1hTRrsBzKQ0UkqJ7qFLEyoS3IobWBHkQ4YyRAS0rPTkOTNkVVhqzk4o31%2F8TuQZN5c%2F4vR34PkBAD6ynCq5WPO0cZcWn3tF3mtMSZ863FVey2bed85R8xfdG9yMzF%2BSeyaMVo9rE3TXjsYTsIzETAYqEx%2FxU8KH96x48WtQbaHf9yY4ES531etcaJrJ%2F7LBacnWuj8HDOzd1U9GPItJE0YJ20XHMU%2FVFyNRSC5XBFRIV1LHEuW3I2ViOsKxNB1wy07OdNw1LKwjKr6gzaMhYHIYGuY451nkS8Mkc8agsDXabNbOoL7FPH1kC0tyrhaaXDEdNTQZyxqeoMJyi6sIGOqUBVYVHgrfXQJdWwgZyhqnAKDUor8bgkeejdKQgQWWSRk7P2qQo6XLV5vDEP02Y%2FO5B9cowdvJOKYjgfU91WPFyuzWQfowNtlNSCt2UCp0x2Cv%2F6ssmDMJ9yAvWtC9BQeujLkqllKyFs%2B8TvShl%2BCQQGngOVuPJWuU5%2F3kFsuaQLspOQEboWPh1K4x80f%2BTguG44IEDGin4px67V4EuQu3jR79mWw%2BH&X-Amz-Signature=cefe492187fb299d721a6b72d72f941027878b25a1ae4db096e7d26fb836ae0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2QOWMN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHzlNZ9C8ydM2NBbMGpS31nsq99Qcr637gSyroHMWpT2AiEA8FDtkCvCTuqJYfH6jHtkt3T5MHv5Qd%2BTDgpzivVu33Iq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIJZhDMttUR5b0oK2SrcA8j%2FGKfzwgg%2FLgnbM3FjjdW5OLxUNZfUc9fKnPp%2FlCf1QkGLsrcb3nbrHWzC%2BWQXZ7a%2FOPFJ8CO4Vt1QOL9CP2Om0wHcQITUTW1%2Fs7J9EBjE9AqCbrNsxAT3bYvsVvMlDkAd6wPx7XmRFfd5VPIGByN%2FfH8g1ZPY3X7yYywkKx55V3wn6bF%2Bs%2F8QSoQHACbBYNFgE5qZhZMfHCp8nE%2BwoGMjEOZ8tOlV1D%2BByJb9EqK4lSsXFQBWdHJThBXV7%2BsTS%2F%2FQDd5QO5NyY%2FwjnGl5vhjYL9vSBqESF3NaPoJ%2FjWmkfpcD1hTRrsBzKQ0UkqJ7qFLEyoS3IobWBHkQ4YyRAS0rPTkOTNkVVhqzk4o31%2F8TuQZN5c%2F4vR34PkBAD6ynCq5WPO0cZcWn3tF3mtMSZ863FVey2bed85R8xfdG9yMzF%2BSeyaMVo9rE3TXjsYTsIzETAYqEx%2FxU8KH96x48WtQbaHf9yY4ES531etcaJrJ%2F7LBacnWuj8HDOzd1U9GPItJE0YJ20XHMU%2FVFyNRSC5XBFRIV1LHEuW3I2ViOsKxNB1wy07OdNw1LKwjKr6gzaMhYHIYGuY451nkS8Mkc8agsDXabNbOoL7FPH1kC0tyrhaaXDEdNTQZyxqeoMJyi6sIGOqUBVYVHgrfXQJdWwgZyhqnAKDUor8bgkeejdKQgQWWSRk7P2qQo6XLV5vDEP02Y%2FO5B9cowdvJOKYjgfU91WPFyuzWQfowNtlNSCt2UCp0x2Cv%2F6ssmDMJ9yAvWtC9BQeujLkqllKyFs%2B8TvShl%2BCQQGngOVuPJWuU5%2F3kFsuaQLspOQEboWPh1K4x80f%2BTguG44IEDGin4px67V4EuQu3jR79mWw%2BH&X-Amz-Signature=ec1f76266be4f15bf29d24cb3d2c23b3096ee9502402b7be5f66508c11b16989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2QOWMN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHzlNZ9C8ydM2NBbMGpS31nsq99Qcr637gSyroHMWpT2AiEA8FDtkCvCTuqJYfH6jHtkt3T5MHv5Qd%2BTDgpzivVu33Iq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIJZhDMttUR5b0oK2SrcA8j%2FGKfzwgg%2FLgnbM3FjjdW5OLxUNZfUc9fKnPp%2FlCf1QkGLsrcb3nbrHWzC%2BWQXZ7a%2FOPFJ8CO4Vt1QOL9CP2Om0wHcQITUTW1%2Fs7J9EBjE9AqCbrNsxAT3bYvsVvMlDkAd6wPx7XmRFfd5VPIGByN%2FfH8g1ZPY3X7yYywkKx55V3wn6bF%2Bs%2F8QSoQHACbBYNFgE5qZhZMfHCp8nE%2BwoGMjEOZ8tOlV1D%2BByJb9EqK4lSsXFQBWdHJThBXV7%2BsTS%2F%2FQDd5QO5NyY%2FwjnGl5vhjYL9vSBqESF3NaPoJ%2FjWmkfpcD1hTRrsBzKQ0UkqJ7qFLEyoS3IobWBHkQ4YyRAS0rPTkOTNkVVhqzk4o31%2F8TuQZN5c%2F4vR34PkBAD6ynCq5WPO0cZcWn3tF3mtMSZ863FVey2bed85R8xfdG9yMzF%2BSeyaMVo9rE3TXjsYTsIzETAYqEx%2FxU8KH96x48WtQbaHf9yY4ES531etcaJrJ%2F7LBacnWuj8HDOzd1U9GPItJE0YJ20XHMU%2FVFyNRSC5XBFRIV1LHEuW3I2ViOsKxNB1wy07OdNw1LKwjKr6gzaMhYHIYGuY451nkS8Mkc8agsDXabNbOoL7FPH1kC0tyrhaaXDEdNTQZyxqeoMJyi6sIGOqUBVYVHgrfXQJdWwgZyhqnAKDUor8bgkeejdKQgQWWSRk7P2qQo6XLV5vDEP02Y%2FO5B9cowdvJOKYjgfU91WPFyuzWQfowNtlNSCt2UCp0x2Cv%2F6ssmDMJ9yAvWtC9BQeujLkqllKyFs%2B8TvShl%2BCQQGngOVuPJWuU5%2F3kFsuaQLspOQEboWPh1K4x80f%2BTguG44IEDGin4px67V4EuQu3jR79mWw%2BH&X-Amz-Signature=db75251247a5fe079082d5f3d59f04f39dd483d39ff0545493b9a4d6e4f2032b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2QOWMN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHzlNZ9C8ydM2NBbMGpS31nsq99Qcr637gSyroHMWpT2AiEA8FDtkCvCTuqJYfH6jHtkt3T5MHv5Qd%2BTDgpzivVu33Iq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIJZhDMttUR5b0oK2SrcA8j%2FGKfzwgg%2FLgnbM3FjjdW5OLxUNZfUc9fKnPp%2FlCf1QkGLsrcb3nbrHWzC%2BWQXZ7a%2FOPFJ8CO4Vt1QOL9CP2Om0wHcQITUTW1%2Fs7J9EBjE9AqCbrNsxAT3bYvsVvMlDkAd6wPx7XmRFfd5VPIGByN%2FfH8g1ZPY3X7yYywkKx55V3wn6bF%2Bs%2F8QSoQHACbBYNFgE5qZhZMfHCp8nE%2BwoGMjEOZ8tOlV1D%2BByJb9EqK4lSsXFQBWdHJThBXV7%2BsTS%2F%2FQDd5QO5NyY%2FwjnGl5vhjYL9vSBqESF3NaPoJ%2FjWmkfpcD1hTRrsBzKQ0UkqJ7qFLEyoS3IobWBHkQ4YyRAS0rPTkOTNkVVhqzk4o31%2F8TuQZN5c%2F4vR34PkBAD6ynCq5WPO0cZcWn3tF3mtMSZ863FVey2bed85R8xfdG9yMzF%2BSeyaMVo9rE3TXjsYTsIzETAYqEx%2FxU8KH96x48WtQbaHf9yY4ES531etcaJrJ%2F7LBacnWuj8HDOzd1U9GPItJE0YJ20XHMU%2FVFyNRSC5XBFRIV1LHEuW3I2ViOsKxNB1wy07OdNw1LKwjKr6gzaMhYHIYGuY451nkS8Mkc8agsDXabNbOoL7FPH1kC0tyrhaaXDEdNTQZyxqeoMJyi6sIGOqUBVYVHgrfXQJdWwgZyhqnAKDUor8bgkeejdKQgQWWSRk7P2qQo6XLV5vDEP02Y%2FO5B9cowdvJOKYjgfU91WPFyuzWQfowNtlNSCt2UCp0x2Cv%2F6ssmDMJ9yAvWtC9BQeujLkqllKyFs%2B8TvShl%2BCQQGngOVuPJWuU5%2F3kFsuaQLspOQEboWPh1K4x80f%2BTguG44IEDGin4px67V4EuQu3jR79mWw%2BH&X-Amz-Signature=1d02e3825a7d6d1003023ad6e42f860a0bf62ff5e6ddb74558a72675fa09526f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2QOWMN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHzlNZ9C8ydM2NBbMGpS31nsq99Qcr637gSyroHMWpT2AiEA8FDtkCvCTuqJYfH6jHtkt3T5MHv5Qd%2BTDgpzivVu33Iq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIJZhDMttUR5b0oK2SrcA8j%2FGKfzwgg%2FLgnbM3FjjdW5OLxUNZfUc9fKnPp%2FlCf1QkGLsrcb3nbrHWzC%2BWQXZ7a%2FOPFJ8CO4Vt1QOL9CP2Om0wHcQITUTW1%2Fs7J9EBjE9AqCbrNsxAT3bYvsVvMlDkAd6wPx7XmRFfd5VPIGByN%2FfH8g1ZPY3X7yYywkKx55V3wn6bF%2Bs%2F8QSoQHACbBYNFgE5qZhZMfHCp8nE%2BwoGMjEOZ8tOlV1D%2BByJb9EqK4lSsXFQBWdHJThBXV7%2BsTS%2F%2FQDd5QO5NyY%2FwjnGl5vhjYL9vSBqESF3NaPoJ%2FjWmkfpcD1hTRrsBzKQ0UkqJ7qFLEyoS3IobWBHkQ4YyRAS0rPTkOTNkVVhqzk4o31%2F8TuQZN5c%2F4vR34PkBAD6ynCq5WPO0cZcWn3tF3mtMSZ863FVey2bed85R8xfdG9yMzF%2BSeyaMVo9rE3TXjsYTsIzETAYqEx%2FxU8KH96x48WtQbaHf9yY4ES531etcaJrJ%2F7LBacnWuj8HDOzd1U9GPItJE0YJ20XHMU%2FVFyNRSC5XBFRIV1LHEuW3I2ViOsKxNB1wy07OdNw1LKwjKr6gzaMhYHIYGuY451nkS8Mkc8agsDXabNbOoL7FPH1kC0tyrhaaXDEdNTQZyxqeoMJyi6sIGOqUBVYVHgrfXQJdWwgZyhqnAKDUor8bgkeejdKQgQWWSRk7P2qQo6XLV5vDEP02Y%2FO5B9cowdvJOKYjgfU91WPFyuzWQfowNtlNSCt2UCp0x2Cv%2F6ssmDMJ9yAvWtC9BQeujLkqllKyFs%2B8TvShl%2BCQQGngOVuPJWuU5%2F3kFsuaQLspOQEboWPh1K4x80f%2BTguG44IEDGin4px67V4EuQu3jR79mWw%2BH&X-Amz-Signature=187d2ff883b2ce0d83c087866e30aa266a9d5e9f55c8d03712e4796052917ecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2QOWMN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHzlNZ9C8ydM2NBbMGpS31nsq99Qcr637gSyroHMWpT2AiEA8FDtkCvCTuqJYfH6jHtkt3T5MHv5Qd%2BTDgpzivVu33Iq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIJZhDMttUR5b0oK2SrcA8j%2FGKfzwgg%2FLgnbM3FjjdW5OLxUNZfUc9fKnPp%2FlCf1QkGLsrcb3nbrHWzC%2BWQXZ7a%2FOPFJ8CO4Vt1QOL9CP2Om0wHcQITUTW1%2Fs7J9EBjE9AqCbrNsxAT3bYvsVvMlDkAd6wPx7XmRFfd5VPIGByN%2FfH8g1ZPY3X7yYywkKx55V3wn6bF%2Bs%2F8QSoQHACbBYNFgE5qZhZMfHCp8nE%2BwoGMjEOZ8tOlV1D%2BByJb9EqK4lSsXFQBWdHJThBXV7%2BsTS%2F%2FQDd5QO5NyY%2FwjnGl5vhjYL9vSBqESF3NaPoJ%2FjWmkfpcD1hTRrsBzKQ0UkqJ7qFLEyoS3IobWBHkQ4YyRAS0rPTkOTNkVVhqzk4o31%2F8TuQZN5c%2F4vR34PkBAD6ynCq5WPO0cZcWn3tF3mtMSZ863FVey2bed85R8xfdG9yMzF%2BSeyaMVo9rE3TXjsYTsIzETAYqEx%2FxU8KH96x48WtQbaHf9yY4ES531etcaJrJ%2F7LBacnWuj8HDOzd1U9GPItJE0YJ20XHMU%2FVFyNRSC5XBFRIV1LHEuW3I2ViOsKxNB1wy07OdNw1LKwjKr6gzaMhYHIYGuY451nkS8Mkc8agsDXabNbOoL7FPH1kC0tyrhaaXDEdNTQZyxqeoMJyi6sIGOqUBVYVHgrfXQJdWwgZyhqnAKDUor8bgkeejdKQgQWWSRk7P2qQo6XLV5vDEP02Y%2FO5B9cowdvJOKYjgfU91WPFyuzWQfowNtlNSCt2UCp0x2Cv%2F6ssmDMJ9yAvWtC9BQeujLkqllKyFs%2B8TvShl%2BCQQGngOVuPJWuU5%2F3kFsuaQLspOQEboWPh1K4x80f%2BTguG44IEDGin4px67V4EuQu3jR79mWw%2BH&X-Amz-Signature=c50f3f5c9a0b54f91bde6531bc9bc3ced1ba7fb5cbe4602ce03cdb6c57ccc9cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2QOWMN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHzlNZ9C8ydM2NBbMGpS31nsq99Qcr637gSyroHMWpT2AiEA8FDtkCvCTuqJYfH6jHtkt3T5MHv5Qd%2BTDgpzivVu33Iq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIJZhDMttUR5b0oK2SrcA8j%2FGKfzwgg%2FLgnbM3FjjdW5OLxUNZfUc9fKnPp%2FlCf1QkGLsrcb3nbrHWzC%2BWQXZ7a%2FOPFJ8CO4Vt1QOL9CP2Om0wHcQITUTW1%2Fs7J9EBjE9AqCbrNsxAT3bYvsVvMlDkAd6wPx7XmRFfd5VPIGByN%2FfH8g1ZPY3X7yYywkKx55V3wn6bF%2Bs%2F8QSoQHACbBYNFgE5qZhZMfHCp8nE%2BwoGMjEOZ8tOlV1D%2BByJb9EqK4lSsXFQBWdHJThBXV7%2BsTS%2F%2FQDd5QO5NyY%2FwjnGl5vhjYL9vSBqESF3NaPoJ%2FjWmkfpcD1hTRrsBzKQ0UkqJ7qFLEyoS3IobWBHkQ4YyRAS0rPTkOTNkVVhqzk4o31%2F8TuQZN5c%2F4vR34PkBAD6ynCq5WPO0cZcWn3tF3mtMSZ863FVey2bed85R8xfdG9yMzF%2BSeyaMVo9rE3TXjsYTsIzETAYqEx%2FxU8KH96x48WtQbaHf9yY4ES531etcaJrJ%2F7LBacnWuj8HDOzd1U9GPItJE0YJ20XHMU%2FVFyNRSC5XBFRIV1LHEuW3I2ViOsKxNB1wy07OdNw1LKwjKr6gzaMhYHIYGuY451nkS8Mkc8agsDXabNbOoL7FPH1kC0tyrhaaXDEdNTQZyxqeoMJyi6sIGOqUBVYVHgrfXQJdWwgZyhqnAKDUor8bgkeejdKQgQWWSRk7P2qQo6XLV5vDEP02Y%2FO5B9cowdvJOKYjgfU91WPFyuzWQfowNtlNSCt2UCp0x2Cv%2F6ssmDMJ9yAvWtC9BQeujLkqllKyFs%2B8TvShl%2BCQQGngOVuPJWuU5%2F3kFsuaQLspOQEboWPh1K4x80f%2BTguG44IEDGin4px67V4EuQu3jR79mWw%2BH&X-Amz-Signature=0c11edc428754227bf8ed740305692141cd79c6ffb0f80653c399d475dd24ab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
