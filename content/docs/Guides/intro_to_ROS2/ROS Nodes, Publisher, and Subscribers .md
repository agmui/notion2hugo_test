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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSBOIFXM%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtBuolNk8iX%2Fo1bgwYEp1znCcUvSzHED6p97jYC0u3oAiEA%2FsBn7osQdACYTHAs%2BrhtLycbErHylMy5HYMS4OpK928qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJr3pCzGW3Xv%2B14pPCrcA5zDy0ZTOrBm%2F8O4%2FO9ettgofeKfuZ2sI2wGvC6JUVmao7e2p58Wk4LEttlbaHHEbe%2BYiLmV%2BLE%2FNuDoiA7eWRe4nEx%2FwT8YtnnPXECVvmKQlX2%2FBfzmji41Sh4te7dBKe%2BteybZCWwqpqfUBEVNb9fFYLw%2BtqNKNDABQ2%2BwrVES7exBr%2FBKm6mT2mVQrMAyfxcy%2BEyHT60QtXgbBvIYHg7ZWDiW9KPR%2FJRRUXGyE2uXjrjLlvzYbdkghng2lNEpQoXU33gOg4VuqsOKCErzNY58R5qnvs%2FdsnpfmU21a3gtb0pxBG4sEW97vv8pspL33jZ2%2BtLcJdIWit2fIuEae6u1ndJ2mrFKBbrOXd2tsEnhIJBPqqalCDvrera3jw8ANAXj%2FojD2CnBym9Agfb9H6cxAxn1mPtKyw9K1LjoW2LdUxLsgEZG8oc%2FBhCMdmnHI0CLMG4V8Xmu6WaCY0KSGeFpsv1XO%2FJf2fU6bzcWyuGgtXGgIZF5j67%2BUGFKt%2F%2BoqGNKWv16taYIm2yxkv%2BX06UAe802u%2BASXnPhY3dty71k1VvcjxbvfqnAuBdcDUfOgfWikaYkeDRCfDecyyXsnApk1LzdAcTGi4C8XO%2BPVggWkFdFXaXsTCICV%2ByQMJ2s98AGOqUBhou2FhvQatmqRQEgaqmB4eIXsIMfcJJRH%2Fd24v5tjdI67juabrzTosAtfjdX0%2BZleGg7gLCzxadmoe1J4O5z2HTPQU6%2Fe8vSiFLiN9jVIHqOjh%2BU0dG8EDrAkE%2Fl8As2OdQHr5W4y7vhLsOl5aLhwKcopYdxCQ0H0IjwquYW2kJuwzJKl1mPFQTy%2FiUt1Go0A9qyjr2na%2FdeDMY%2FHby1FD3gbGGF&X-Amz-Signature=7f556d343a62c4684ca9cf965e41fc49e8d1cc6740a8dc9e2b00e48627443115&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSBOIFXM%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtBuolNk8iX%2Fo1bgwYEp1znCcUvSzHED6p97jYC0u3oAiEA%2FsBn7osQdACYTHAs%2BrhtLycbErHylMy5HYMS4OpK928qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJr3pCzGW3Xv%2B14pPCrcA5zDy0ZTOrBm%2F8O4%2FO9ettgofeKfuZ2sI2wGvC6JUVmao7e2p58Wk4LEttlbaHHEbe%2BYiLmV%2BLE%2FNuDoiA7eWRe4nEx%2FwT8YtnnPXECVvmKQlX2%2FBfzmji41Sh4te7dBKe%2BteybZCWwqpqfUBEVNb9fFYLw%2BtqNKNDABQ2%2BwrVES7exBr%2FBKm6mT2mVQrMAyfxcy%2BEyHT60QtXgbBvIYHg7ZWDiW9KPR%2FJRRUXGyE2uXjrjLlvzYbdkghng2lNEpQoXU33gOg4VuqsOKCErzNY58R5qnvs%2FdsnpfmU21a3gtb0pxBG4sEW97vv8pspL33jZ2%2BtLcJdIWit2fIuEae6u1ndJ2mrFKBbrOXd2tsEnhIJBPqqalCDvrera3jw8ANAXj%2FojD2CnBym9Agfb9H6cxAxn1mPtKyw9K1LjoW2LdUxLsgEZG8oc%2FBhCMdmnHI0CLMG4V8Xmu6WaCY0KSGeFpsv1XO%2FJf2fU6bzcWyuGgtXGgIZF5j67%2BUGFKt%2F%2BoqGNKWv16taYIm2yxkv%2BX06UAe802u%2BASXnPhY3dty71k1VvcjxbvfqnAuBdcDUfOgfWikaYkeDRCfDecyyXsnApk1LzdAcTGi4C8XO%2BPVggWkFdFXaXsTCICV%2ByQMJ2s98AGOqUBhou2FhvQatmqRQEgaqmB4eIXsIMfcJJRH%2Fd24v5tjdI67juabrzTosAtfjdX0%2BZleGg7gLCzxadmoe1J4O5z2HTPQU6%2Fe8vSiFLiN9jVIHqOjh%2BU0dG8EDrAkE%2Fl8As2OdQHr5W4y7vhLsOl5aLhwKcopYdxCQ0H0IjwquYW2kJuwzJKl1mPFQTy%2FiUt1Go0A9qyjr2na%2FdeDMY%2FHby1FD3gbGGF&X-Amz-Signature=a46d6aba79d23c87b28f358fed11866675244981af4cdc9af7bdb43fe2e30418&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSBOIFXM%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtBuolNk8iX%2Fo1bgwYEp1znCcUvSzHED6p97jYC0u3oAiEA%2FsBn7osQdACYTHAs%2BrhtLycbErHylMy5HYMS4OpK928qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJr3pCzGW3Xv%2B14pPCrcA5zDy0ZTOrBm%2F8O4%2FO9ettgofeKfuZ2sI2wGvC6JUVmao7e2p58Wk4LEttlbaHHEbe%2BYiLmV%2BLE%2FNuDoiA7eWRe4nEx%2FwT8YtnnPXECVvmKQlX2%2FBfzmji41Sh4te7dBKe%2BteybZCWwqpqfUBEVNb9fFYLw%2BtqNKNDABQ2%2BwrVES7exBr%2FBKm6mT2mVQrMAyfxcy%2BEyHT60QtXgbBvIYHg7ZWDiW9KPR%2FJRRUXGyE2uXjrjLlvzYbdkghng2lNEpQoXU33gOg4VuqsOKCErzNY58R5qnvs%2FdsnpfmU21a3gtb0pxBG4sEW97vv8pspL33jZ2%2BtLcJdIWit2fIuEae6u1ndJ2mrFKBbrOXd2tsEnhIJBPqqalCDvrera3jw8ANAXj%2FojD2CnBym9Agfb9H6cxAxn1mPtKyw9K1LjoW2LdUxLsgEZG8oc%2FBhCMdmnHI0CLMG4V8Xmu6WaCY0KSGeFpsv1XO%2FJf2fU6bzcWyuGgtXGgIZF5j67%2BUGFKt%2F%2BoqGNKWv16taYIm2yxkv%2BX06UAe802u%2BASXnPhY3dty71k1VvcjxbvfqnAuBdcDUfOgfWikaYkeDRCfDecyyXsnApk1LzdAcTGi4C8XO%2BPVggWkFdFXaXsTCICV%2ByQMJ2s98AGOqUBhou2FhvQatmqRQEgaqmB4eIXsIMfcJJRH%2Fd24v5tjdI67juabrzTosAtfjdX0%2BZleGg7gLCzxadmoe1J4O5z2HTPQU6%2Fe8vSiFLiN9jVIHqOjh%2BU0dG8EDrAkE%2Fl8As2OdQHr5W4y7vhLsOl5aLhwKcopYdxCQ0H0IjwquYW2kJuwzJKl1mPFQTy%2FiUt1Go0A9qyjr2na%2FdeDMY%2FHby1FD3gbGGF&X-Amz-Signature=fd4f194a159d3c263daf596403a3d3ceb92a65efccf73f5044edb96af1db2755&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSBOIFXM%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtBuolNk8iX%2Fo1bgwYEp1znCcUvSzHED6p97jYC0u3oAiEA%2FsBn7osQdACYTHAs%2BrhtLycbErHylMy5HYMS4OpK928qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJr3pCzGW3Xv%2B14pPCrcA5zDy0ZTOrBm%2F8O4%2FO9ettgofeKfuZ2sI2wGvC6JUVmao7e2p58Wk4LEttlbaHHEbe%2BYiLmV%2BLE%2FNuDoiA7eWRe4nEx%2FwT8YtnnPXECVvmKQlX2%2FBfzmji41Sh4te7dBKe%2BteybZCWwqpqfUBEVNb9fFYLw%2BtqNKNDABQ2%2BwrVES7exBr%2FBKm6mT2mVQrMAyfxcy%2BEyHT60QtXgbBvIYHg7ZWDiW9KPR%2FJRRUXGyE2uXjrjLlvzYbdkghng2lNEpQoXU33gOg4VuqsOKCErzNY58R5qnvs%2FdsnpfmU21a3gtb0pxBG4sEW97vv8pspL33jZ2%2BtLcJdIWit2fIuEae6u1ndJ2mrFKBbrOXd2tsEnhIJBPqqalCDvrera3jw8ANAXj%2FojD2CnBym9Agfb9H6cxAxn1mPtKyw9K1LjoW2LdUxLsgEZG8oc%2FBhCMdmnHI0CLMG4V8Xmu6WaCY0KSGeFpsv1XO%2FJf2fU6bzcWyuGgtXGgIZF5j67%2BUGFKt%2F%2BoqGNKWv16taYIm2yxkv%2BX06UAe802u%2BASXnPhY3dty71k1VvcjxbvfqnAuBdcDUfOgfWikaYkeDRCfDecyyXsnApk1LzdAcTGi4C8XO%2BPVggWkFdFXaXsTCICV%2ByQMJ2s98AGOqUBhou2FhvQatmqRQEgaqmB4eIXsIMfcJJRH%2Fd24v5tjdI67juabrzTosAtfjdX0%2BZleGg7gLCzxadmoe1J4O5z2HTPQU6%2Fe8vSiFLiN9jVIHqOjh%2BU0dG8EDrAkE%2Fl8As2OdQHr5W4y7vhLsOl5aLhwKcopYdxCQ0H0IjwquYW2kJuwzJKl1mPFQTy%2FiUt1Go0A9qyjr2na%2FdeDMY%2FHby1FD3gbGGF&X-Amz-Signature=546a10adae9be9b1a0a0342544eb7717ca813e2bec198b785760d23776ef3863&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSBOIFXM%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtBuolNk8iX%2Fo1bgwYEp1znCcUvSzHED6p97jYC0u3oAiEA%2FsBn7osQdACYTHAs%2BrhtLycbErHylMy5HYMS4OpK928qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJr3pCzGW3Xv%2B14pPCrcA5zDy0ZTOrBm%2F8O4%2FO9ettgofeKfuZ2sI2wGvC6JUVmao7e2p58Wk4LEttlbaHHEbe%2BYiLmV%2BLE%2FNuDoiA7eWRe4nEx%2FwT8YtnnPXECVvmKQlX2%2FBfzmji41Sh4te7dBKe%2BteybZCWwqpqfUBEVNb9fFYLw%2BtqNKNDABQ2%2BwrVES7exBr%2FBKm6mT2mVQrMAyfxcy%2BEyHT60QtXgbBvIYHg7ZWDiW9KPR%2FJRRUXGyE2uXjrjLlvzYbdkghng2lNEpQoXU33gOg4VuqsOKCErzNY58R5qnvs%2FdsnpfmU21a3gtb0pxBG4sEW97vv8pspL33jZ2%2BtLcJdIWit2fIuEae6u1ndJ2mrFKBbrOXd2tsEnhIJBPqqalCDvrera3jw8ANAXj%2FojD2CnBym9Agfb9H6cxAxn1mPtKyw9K1LjoW2LdUxLsgEZG8oc%2FBhCMdmnHI0CLMG4V8Xmu6WaCY0KSGeFpsv1XO%2FJf2fU6bzcWyuGgtXGgIZF5j67%2BUGFKt%2F%2BoqGNKWv16taYIm2yxkv%2BX06UAe802u%2BASXnPhY3dty71k1VvcjxbvfqnAuBdcDUfOgfWikaYkeDRCfDecyyXsnApk1LzdAcTGi4C8XO%2BPVggWkFdFXaXsTCICV%2ByQMJ2s98AGOqUBhou2FhvQatmqRQEgaqmB4eIXsIMfcJJRH%2Fd24v5tjdI67juabrzTosAtfjdX0%2BZleGg7gLCzxadmoe1J4O5z2HTPQU6%2Fe8vSiFLiN9jVIHqOjh%2BU0dG8EDrAkE%2Fl8As2OdQHr5W4y7vhLsOl5aLhwKcopYdxCQ0H0IjwquYW2kJuwzJKl1mPFQTy%2FiUt1Go0A9qyjr2na%2FdeDMY%2FHby1FD3gbGGF&X-Amz-Signature=7ea098e0cc88f3616e60dae042221b495f0e1f952d45cc800133360287a3006b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSBOIFXM%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtBuolNk8iX%2Fo1bgwYEp1znCcUvSzHED6p97jYC0u3oAiEA%2FsBn7osQdACYTHAs%2BrhtLycbErHylMy5HYMS4OpK928qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJr3pCzGW3Xv%2B14pPCrcA5zDy0ZTOrBm%2F8O4%2FO9ettgofeKfuZ2sI2wGvC6JUVmao7e2p58Wk4LEttlbaHHEbe%2BYiLmV%2BLE%2FNuDoiA7eWRe4nEx%2FwT8YtnnPXECVvmKQlX2%2FBfzmji41Sh4te7dBKe%2BteybZCWwqpqfUBEVNb9fFYLw%2BtqNKNDABQ2%2BwrVES7exBr%2FBKm6mT2mVQrMAyfxcy%2BEyHT60QtXgbBvIYHg7ZWDiW9KPR%2FJRRUXGyE2uXjrjLlvzYbdkghng2lNEpQoXU33gOg4VuqsOKCErzNY58R5qnvs%2FdsnpfmU21a3gtb0pxBG4sEW97vv8pspL33jZ2%2BtLcJdIWit2fIuEae6u1ndJ2mrFKBbrOXd2tsEnhIJBPqqalCDvrera3jw8ANAXj%2FojD2CnBym9Agfb9H6cxAxn1mPtKyw9K1LjoW2LdUxLsgEZG8oc%2FBhCMdmnHI0CLMG4V8Xmu6WaCY0KSGeFpsv1XO%2FJf2fU6bzcWyuGgtXGgIZF5j67%2BUGFKt%2F%2BoqGNKWv16taYIm2yxkv%2BX06UAe802u%2BASXnPhY3dty71k1VvcjxbvfqnAuBdcDUfOgfWikaYkeDRCfDecyyXsnApk1LzdAcTGi4C8XO%2BPVggWkFdFXaXsTCICV%2ByQMJ2s98AGOqUBhou2FhvQatmqRQEgaqmB4eIXsIMfcJJRH%2Fd24v5tjdI67juabrzTosAtfjdX0%2BZleGg7gLCzxadmoe1J4O5z2HTPQU6%2Fe8vSiFLiN9jVIHqOjh%2BU0dG8EDrAkE%2Fl8As2OdQHr5W4y7vhLsOl5aLhwKcopYdxCQ0H0IjwquYW2kJuwzJKl1mPFQTy%2FiUt1Go0A9qyjr2na%2FdeDMY%2FHby1FD3gbGGF&X-Amz-Signature=c30207f4d02130a57fc089631428eef63fa7d733e60cbba05ef82c39b063ee10&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSBOIFXM%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtBuolNk8iX%2Fo1bgwYEp1znCcUvSzHED6p97jYC0u3oAiEA%2FsBn7osQdACYTHAs%2BrhtLycbErHylMy5HYMS4OpK928qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJr3pCzGW3Xv%2B14pPCrcA5zDy0ZTOrBm%2F8O4%2FO9ettgofeKfuZ2sI2wGvC6JUVmao7e2p58Wk4LEttlbaHHEbe%2BYiLmV%2BLE%2FNuDoiA7eWRe4nEx%2FwT8YtnnPXECVvmKQlX2%2FBfzmji41Sh4te7dBKe%2BteybZCWwqpqfUBEVNb9fFYLw%2BtqNKNDABQ2%2BwrVES7exBr%2FBKm6mT2mVQrMAyfxcy%2BEyHT60QtXgbBvIYHg7ZWDiW9KPR%2FJRRUXGyE2uXjrjLlvzYbdkghng2lNEpQoXU33gOg4VuqsOKCErzNY58R5qnvs%2FdsnpfmU21a3gtb0pxBG4sEW97vv8pspL33jZ2%2BtLcJdIWit2fIuEae6u1ndJ2mrFKBbrOXd2tsEnhIJBPqqalCDvrera3jw8ANAXj%2FojD2CnBym9Agfb9H6cxAxn1mPtKyw9K1LjoW2LdUxLsgEZG8oc%2FBhCMdmnHI0CLMG4V8Xmu6WaCY0KSGeFpsv1XO%2FJf2fU6bzcWyuGgtXGgIZF5j67%2BUGFKt%2F%2BoqGNKWv16taYIm2yxkv%2BX06UAe802u%2BASXnPhY3dty71k1VvcjxbvfqnAuBdcDUfOgfWikaYkeDRCfDecyyXsnApk1LzdAcTGi4C8XO%2BPVggWkFdFXaXsTCICV%2ByQMJ2s98AGOqUBhou2FhvQatmqRQEgaqmB4eIXsIMfcJJRH%2Fd24v5tjdI67juabrzTosAtfjdX0%2BZleGg7gLCzxadmoe1J4O5z2HTPQU6%2Fe8vSiFLiN9jVIHqOjh%2BU0dG8EDrAkE%2Fl8As2OdQHr5W4y7vhLsOl5aLhwKcopYdxCQ0H0IjwquYW2kJuwzJKl1mPFQTy%2FiUt1Go0A9qyjr2na%2FdeDMY%2FHby1FD3gbGGF&X-Amz-Signature=0daf6883229dcd36281191af3e1595bdc590b49495d0600791b71cf4d0674866&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSBOIFXM%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtBuolNk8iX%2Fo1bgwYEp1znCcUvSzHED6p97jYC0u3oAiEA%2FsBn7osQdACYTHAs%2BrhtLycbErHylMy5HYMS4OpK928qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJr3pCzGW3Xv%2B14pPCrcA5zDy0ZTOrBm%2F8O4%2FO9ettgofeKfuZ2sI2wGvC6JUVmao7e2p58Wk4LEttlbaHHEbe%2BYiLmV%2BLE%2FNuDoiA7eWRe4nEx%2FwT8YtnnPXECVvmKQlX2%2FBfzmji41Sh4te7dBKe%2BteybZCWwqpqfUBEVNb9fFYLw%2BtqNKNDABQ2%2BwrVES7exBr%2FBKm6mT2mVQrMAyfxcy%2BEyHT60QtXgbBvIYHg7ZWDiW9KPR%2FJRRUXGyE2uXjrjLlvzYbdkghng2lNEpQoXU33gOg4VuqsOKCErzNY58R5qnvs%2FdsnpfmU21a3gtb0pxBG4sEW97vv8pspL33jZ2%2BtLcJdIWit2fIuEae6u1ndJ2mrFKBbrOXd2tsEnhIJBPqqalCDvrera3jw8ANAXj%2FojD2CnBym9Agfb9H6cxAxn1mPtKyw9K1LjoW2LdUxLsgEZG8oc%2FBhCMdmnHI0CLMG4V8Xmu6WaCY0KSGeFpsv1XO%2FJf2fU6bzcWyuGgtXGgIZF5j67%2BUGFKt%2F%2BoqGNKWv16taYIm2yxkv%2BX06UAe802u%2BASXnPhY3dty71k1VvcjxbvfqnAuBdcDUfOgfWikaYkeDRCfDecyyXsnApk1LzdAcTGi4C8XO%2BPVggWkFdFXaXsTCICV%2ByQMJ2s98AGOqUBhou2FhvQatmqRQEgaqmB4eIXsIMfcJJRH%2Fd24v5tjdI67juabrzTosAtfjdX0%2BZleGg7gLCzxadmoe1J4O5z2HTPQU6%2Fe8vSiFLiN9jVIHqOjh%2BU0dG8EDrAkE%2Fl8As2OdQHr5W4y7vhLsOl5aLhwKcopYdxCQ0H0IjwquYW2kJuwzJKl1mPFQTy%2FiUt1Go0A9qyjr2na%2FdeDMY%2FHby1FD3gbGGF&X-Amz-Signature=df9fc665b1091ffee12f8598a51931cedacf1484be7a3e657a4c72d5abf476f5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
