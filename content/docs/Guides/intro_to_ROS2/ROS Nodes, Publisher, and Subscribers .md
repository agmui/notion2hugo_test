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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPZMR665%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCeU2XLXit5cQ38tDIZ0h%2FIda2sn%2F1rMiHDSLTGYKxYHAIhAJKV3lpslCCwbYwyFxUn8G42HPxrsw6E7oRwtrh2Li0jKv8DCFQQABoMNjM3NDIzMTgzODA1IgxtM70WrP8vRx4zBQsq3AO63Hux1rhd7ENHkCGa12Sda2CnHh27nrPOUhmpX7iMj15JCiP2I0UPZ%2FWGBKSccJ%2FgpD8Fc9aQmlZX9cXcRDvL55mXVPKTQP0sdNXKUo0jD9Xf6PyROFFgz3ya%2B7ORYcYC1ELgIx3kGbeQ5fjO7e2gK24nPn90W56TFmMKaSw8y7Le%2BH1noZv3JDMJksd9fOWLitmU1GMVf%2BwssTjriL2vcisCtAWnd%2F%2F4sqWGjckMfqf97reQibElyGo8EZC9ZLopvKsQ8IdxHqso6vI0%2FT5WyDzsJzP%2B5KQt9HEtEfyKWbfS48%2FHd5%2FeRrXw%2Bfn9ugxnRv0YMfRov%2BTvxQ%2B9xiu7NmPGOv0p9gT7znPsOzn1W91aPwG29QjOOzzi%2F1moy6fv2olh6yejMSVqNTjMjdYeZMons8IcJpXAqHST6FfF%2BdNIQ8BX5LbGgQOfC0ckd6LGC7tA1wIHiPXHnWp5%2F5Ve3Glh6CRC3dPEpzfEoK4VT5QgzBR8Nfg3uDenvIid6X%2F384QGU%2Fkzx8k7lftJ%2BUKNFzlaz48dT8ZTzF8kR4m4lQwPo%2Fp%2BTa70shuCucY9ltHQqHUJwfb58oYYYELIyY%2BwiCE%2BY2y0rm5HAa8OVBVEqxwUeB1px57fcKoQLTDvrtzDBjqkAQkRIjH7eE0HOBB6TGd0DxE7Pm5Lun1hyAMU61%2BjhYnNdiJc26o9BLLL4Ch62bvbXg5Xomo5f3348epXgNH41ktj6Yum%2BUsNm8n6IS91o1xnb%2FQC36dd7uCf6ppeWbMP7DSxBsACb62eLLD1DLJbHozU%2F4%2Fgn1%2BAwSzLdUsJB7ATL9J3kKUM6Gsdmnh4izKTJv6ujChxU6l%2B3nkDZYpn1kJNP4NW&X-Amz-Signature=0d6daa58a59454d7dcd07449487f4010cf918d91c55f34e673f8b56903e39dd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPZMR665%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCeU2XLXit5cQ38tDIZ0h%2FIda2sn%2F1rMiHDSLTGYKxYHAIhAJKV3lpslCCwbYwyFxUn8G42HPxrsw6E7oRwtrh2Li0jKv8DCFQQABoMNjM3NDIzMTgzODA1IgxtM70WrP8vRx4zBQsq3AO63Hux1rhd7ENHkCGa12Sda2CnHh27nrPOUhmpX7iMj15JCiP2I0UPZ%2FWGBKSccJ%2FgpD8Fc9aQmlZX9cXcRDvL55mXVPKTQP0sdNXKUo0jD9Xf6PyROFFgz3ya%2B7ORYcYC1ELgIx3kGbeQ5fjO7e2gK24nPn90W56TFmMKaSw8y7Le%2BH1noZv3JDMJksd9fOWLitmU1GMVf%2BwssTjriL2vcisCtAWnd%2F%2F4sqWGjckMfqf97reQibElyGo8EZC9ZLopvKsQ8IdxHqso6vI0%2FT5WyDzsJzP%2B5KQt9HEtEfyKWbfS48%2FHd5%2FeRrXw%2Bfn9ugxnRv0YMfRov%2BTvxQ%2B9xiu7NmPGOv0p9gT7znPsOzn1W91aPwG29QjOOzzi%2F1moy6fv2olh6yejMSVqNTjMjdYeZMons8IcJpXAqHST6FfF%2BdNIQ8BX5LbGgQOfC0ckd6LGC7tA1wIHiPXHnWp5%2F5Ve3Glh6CRC3dPEpzfEoK4VT5QgzBR8Nfg3uDenvIid6X%2F384QGU%2Fkzx8k7lftJ%2BUKNFzlaz48dT8ZTzF8kR4m4lQwPo%2Fp%2BTa70shuCucY9ltHQqHUJwfb58oYYYELIyY%2BwiCE%2BY2y0rm5HAa8OVBVEqxwUeB1px57fcKoQLTDvrtzDBjqkAQkRIjH7eE0HOBB6TGd0DxE7Pm5Lun1hyAMU61%2BjhYnNdiJc26o9BLLL4Ch62bvbXg5Xomo5f3348epXgNH41ktj6Yum%2BUsNm8n6IS91o1xnb%2FQC36dd7uCf6ppeWbMP7DSxBsACb62eLLD1DLJbHozU%2F4%2Fgn1%2BAwSzLdUsJB7ATL9J3kKUM6Gsdmnh4izKTJv6ujChxU6l%2B3nkDZYpn1kJNP4NW&X-Amz-Signature=74d821a71083f18fe507a35d8fe7a2370fee2f21abcc5f74bf5d408f3db16737&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPZMR665%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCeU2XLXit5cQ38tDIZ0h%2FIda2sn%2F1rMiHDSLTGYKxYHAIhAJKV3lpslCCwbYwyFxUn8G42HPxrsw6E7oRwtrh2Li0jKv8DCFQQABoMNjM3NDIzMTgzODA1IgxtM70WrP8vRx4zBQsq3AO63Hux1rhd7ENHkCGa12Sda2CnHh27nrPOUhmpX7iMj15JCiP2I0UPZ%2FWGBKSccJ%2FgpD8Fc9aQmlZX9cXcRDvL55mXVPKTQP0sdNXKUo0jD9Xf6PyROFFgz3ya%2B7ORYcYC1ELgIx3kGbeQ5fjO7e2gK24nPn90W56TFmMKaSw8y7Le%2BH1noZv3JDMJksd9fOWLitmU1GMVf%2BwssTjriL2vcisCtAWnd%2F%2F4sqWGjckMfqf97reQibElyGo8EZC9ZLopvKsQ8IdxHqso6vI0%2FT5WyDzsJzP%2B5KQt9HEtEfyKWbfS48%2FHd5%2FeRrXw%2Bfn9ugxnRv0YMfRov%2BTvxQ%2B9xiu7NmPGOv0p9gT7znPsOzn1W91aPwG29QjOOzzi%2F1moy6fv2olh6yejMSVqNTjMjdYeZMons8IcJpXAqHST6FfF%2BdNIQ8BX5LbGgQOfC0ckd6LGC7tA1wIHiPXHnWp5%2F5Ve3Glh6CRC3dPEpzfEoK4VT5QgzBR8Nfg3uDenvIid6X%2F384QGU%2Fkzx8k7lftJ%2BUKNFzlaz48dT8ZTzF8kR4m4lQwPo%2Fp%2BTa70shuCucY9ltHQqHUJwfb58oYYYELIyY%2BwiCE%2BY2y0rm5HAa8OVBVEqxwUeB1px57fcKoQLTDvrtzDBjqkAQkRIjH7eE0HOBB6TGd0DxE7Pm5Lun1hyAMU61%2BjhYnNdiJc26o9BLLL4Ch62bvbXg5Xomo5f3348epXgNH41ktj6Yum%2BUsNm8n6IS91o1xnb%2FQC36dd7uCf6ppeWbMP7DSxBsACb62eLLD1DLJbHozU%2F4%2Fgn1%2BAwSzLdUsJB7ATL9J3kKUM6Gsdmnh4izKTJv6ujChxU6l%2B3nkDZYpn1kJNP4NW&X-Amz-Signature=627348ab58a96795e63c789c34dc971cce9c855b0973cbc0eada15b599060a34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPZMR665%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCeU2XLXit5cQ38tDIZ0h%2FIda2sn%2F1rMiHDSLTGYKxYHAIhAJKV3lpslCCwbYwyFxUn8G42HPxrsw6E7oRwtrh2Li0jKv8DCFQQABoMNjM3NDIzMTgzODA1IgxtM70WrP8vRx4zBQsq3AO63Hux1rhd7ENHkCGa12Sda2CnHh27nrPOUhmpX7iMj15JCiP2I0UPZ%2FWGBKSccJ%2FgpD8Fc9aQmlZX9cXcRDvL55mXVPKTQP0sdNXKUo0jD9Xf6PyROFFgz3ya%2B7ORYcYC1ELgIx3kGbeQ5fjO7e2gK24nPn90W56TFmMKaSw8y7Le%2BH1noZv3JDMJksd9fOWLitmU1GMVf%2BwssTjriL2vcisCtAWnd%2F%2F4sqWGjckMfqf97reQibElyGo8EZC9ZLopvKsQ8IdxHqso6vI0%2FT5WyDzsJzP%2B5KQt9HEtEfyKWbfS48%2FHd5%2FeRrXw%2Bfn9ugxnRv0YMfRov%2BTvxQ%2B9xiu7NmPGOv0p9gT7znPsOzn1W91aPwG29QjOOzzi%2F1moy6fv2olh6yejMSVqNTjMjdYeZMons8IcJpXAqHST6FfF%2BdNIQ8BX5LbGgQOfC0ckd6LGC7tA1wIHiPXHnWp5%2F5Ve3Glh6CRC3dPEpzfEoK4VT5QgzBR8Nfg3uDenvIid6X%2F384QGU%2Fkzx8k7lftJ%2BUKNFzlaz48dT8ZTzF8kR4m4lQwPo%2Fp%2BTa70shuCucY9ltHQqHUJwfb58oYYYELIyY%2BwiCE%2BY2y0rm5HAa8OVBVEqxwUeB1px57fcKoQLTDvrtzDBjqkAQkRIjH7eE0HOBB6TGd0DxE7Pm5Lun1hyAMU61%2BjhYnNdiJc26o9BLLL4Ch62bvbXg5Xomo5f3348epXgNH41ktj6Yum%2BUsNm8n6IS91o1xnb%2FQC36dd7uCf6ppeWbMP7DSxBsACb62eLLD1DLJbHozU%2F4%2Fgn1%2BAwSzLdUsJB7ATL9J3kKUM6Gsdmnh4izKTJv6ujChxU6l%2B3nkDZYpn1kJNP4NW&X-Amz-Signature=b48942c5c4bd9e78d4d55b5be59753afdca49786a0734609d2a5ab4718582fc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPZMR665%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCeU2XLXit5cQ38tDIZ0h%2FIda2sn%2F1rMiHDSLTGYKxYHAIhAJKV3lpslCCwbYwyFxUn8G42HPxrsw6E7oRwtrh2Li0jKv8DCFQQABoMNjM3NDIzMTgzODA1IgxtM70WrP8vRx4zBQsq3AO63Hux1rhd7ENHkCGa12Sda2CnHh27nrPOUhmpX7iMj15JCiP2I0UPZ%2FWGBKSccJ%2FgpD8Fc9aQmlZX9cXcRDvL55mXVPKTQP0sdNXKUo0jD9Xf6PyROFFgz3ya%2B7ORYcYC1ELgIx3kGbeQ5fjO7e2gK24nPn90W56TFmMKaSw8y7Le%2BH1noZv3JDMJksd9fOWLitmU1GMVf%2BwssTjriL2vcisCtAWnd%2F%2F4sqWGjckMfqf97reQibElyGo8EZC9ZLopvKsQ8IdxHqso6vI0%2FT5WyDzsJzP%2B5KQt9HEtEfyKWbfS48%2FHd5%2FeRrXw%2Bfn9ugxnRv0YMfRov%2BTvxQ%2B9xiu7NmPGOv0p9gT7znPsOzn1W91aPwG29QjOOzzi%2F1moy6fv2olh6yejMSVqNTjMjdYeZMons8IcJpXAqHST6FfF%2BdNIQ8BX5LbGgQOfC0ckd6LGC7tA1wIHiPXHnWp5%2F5Ve3Glh6CRC3dPEpzfEoK4VT5QgzBR8Nfg3uDenvIid6X%2F384QGU%2Fkzx8k7lftJ%2BUKNFzlaz48dT8ZTzF8kR4m4lQwPo%2Fp%2BTa70shuCucY9ltHQqHUJwfb58oYYYELIyY%2BwiCE%2BY2y0rm5HAa8OVBVEqxwUeB1px57fcKoQLTDvrtzDBjqkAQkRIjH7eE0HOBB6TGd0DxE7Pm5Lun1hyAMU61%2BjhYnNdiJc26o9BLLL4Ch62bvbXg5Xomo5f3348epXgNH41ktj6Yum%2BUsNm8n6IS91o1xnb%2FQC36dd7uCf6ppeWbMP7DSxBsACb62eLLD1DLJbHozU%2F4%2Fgn1%2BAwSzLdUsJB7ATL9J3kKUM6Gsdmnh4izKTJv6ujChxU6l%2B3nkDZYpn1kJNP4NW&X-Amz-Signature=7a3b1cff045b4f5c9e0529bffc6511035d8bc7ef198aae824df7b844ce5585a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPZMR665%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCeU2XLXit5cQ38tDIZ0h%2FIda2sn%2F1rMiHDSLTGYKxYHAIhAJKV3lpslCCwbYwyFxUn8G42HPxrsw6E7oRwtrh2Li0jKv8DCFQQABoMNjM3NDIzMTgzODA1IgxtM70WrP8vRx4zBQsq3AO63Hux1rhd7ENHkCGa12Sda2CnHh27nrPOUhmpX7iMj15JCiP2I0UPZ%2FWGBKSccJ%2FgpD8Fc9aQmlZX9cXcRDvL55mXVPKTQP0sdNXKUo0jD9Xf6PyROFFgz3ya%2B7ORYcYC1ELgIx3kGbeQ5fjO7e2gK24nPn90W56TFmMKaSw8y7Le%2BH1noZv3JDMJksd9fOWLitmU1GMVf%2BwssTjriL2vcisCtAWnd%2F%2F4sqWGjckMfqf97reQibElyGo8EZC9ZLopvKsQ8IdxHqso6vI0%2FT5WyDzsJzP%2B5KQt9HEtEfyKWbfS48%2FHd5%2FeRrXw%2Bfn9ugxnRv0YMfRov%2BTvxQ%2B9xiu7NmPGOv0p9gT7znPsOzn1W91aPwG29QjOOzzi%2F1moy6fv2olh6yejMSVqNTjMjdYeZMons8IcJpXAqHST6FfF%2BdNIQ8BX5LbGgQOfC0ckd6LGC7tA1wIHiPXHnWp5%2F5Ve3Glh6CRC3dPEpzfEoK4VT5QgzBR8Nfg3uDenvIid6X%2F384QGU%2Fkzx8k7lftJ%2BUKNFzlaz48dT8ZTzF8kR4m4lQwPo%2Fp%2BTa70shuCucY9ltHQqHUJwfb58oYYYELIyY%2BwiCE%2BY2y0rm5HAa8OVBVEqxwUeB1px57fcKoQLTDvrtzDBjqkAQkRIjH7eE0HOBB6TGd0DxE7Pm5Lun1hyAMU61%2BjhYnNdiJc26o9BLLL4Ch62bvbXg5Xomo5f3348epXgNH41ktj6Yum%2BUsNm8n6IS91o1xnb%2FQC36dd7uCf6ppeWbMP7DSxBsACb62eLLD1DLJbHozU%2F4%2Fgn1%2BAwSzLdUsJB7ATL9J3kKUM6Gsdmnh4izKTJv6ujChxU6l%2B3nkDZYpn1kJNP4NW&X-Amz-Signature=2545a6b89eb09fc6e78b7863821eb19415fb84ac856ff53768025861d0ea2ac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPZMR665%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCeU2XLXit5cQ38tDIZ0h%2FIda2sn%2F1rMiHDSLTGYKxYHAIhAJKV3lpslCCwbYwyFxUn8G42HPxrsw6E7oRwtrh2Li0jKv8DCFQQABoMNjM3NDIzMTgzODA1IgxtM70WrP8vRx4zBQsq3AO63Hux1rhd7ENHkCGa12Sda2CnHh27nrPOUhmpX7iMj15JCiP2I0UPZ%2FWGBKSccJ%2FgpD8Fc9aQmlZX9cXcRDvL55mXVPKTQP0sdNXKUo0jD9Xf6PyROFFgz3ya%2B7ORYcYC1ELgIx3kGbeQ5fjO7e2gK24nPn90W56TFmMKaSw8y7Le%2BH1noZv3JDMJksd9fOWLitmU1GMVf%2BwssTjriL2vcisCtAWnd%2F%2F4sqWGjckMfqf97reQibElyGo8EZC9ZLopvKsQ8IdxHqso6vI0%2FT5WyDzsJzP%2B5KQt9HEtEfyKWbfS48%2FHd5%2FeRrXw%2Bfn9ugxnRv0YMfRov%2BTvxQ%2B9xiu7NmPGOv0p9gT7znPsOzn1W91aPwG29QjOOzzi%2F1moy6fv2olh6yejMSVqNTjMjdYeZMons8IcJpXAqHST6FfF%2BdNIQ8BX5LbGgQOfC0ckd6LGC7tA1wIHiPXHnWp5%2F5Ve3Glh6CRC3dPEpzfEoK4VT5QgzBR8Nfg3uDenvIid6X%2F384QGU%2Fkzx8k7lftJ%2BUKNFzlaz48dT8ZTzF8kR4m4lQwPo%2Fp%2BTa70shuCucY9ltHQqHUJwfb58oYYYELIyY%2BwiCE%2BY2y0rm5HAa8OVBVEqxwUeB1px57fcKoQLTDvrtzDBjqkAQkRIjH7eE0HOBB6TGd0DxE7Pm5Lun1hyAMU61%2BjhYnNdiJc26o9BLLL4Ch62bvbXg5Xomo5f3348epXgNH41ktj6Yum%2BUsNm8n6IS91o1xnb%2FQC36dd7uCf6ppeWbMP7DSxBsACb62eLLD1DLJbHozU%2F4%2Fgn1%2BAwSzLdUsJB7ATL9J3kKUM6Gsdmnh4izKTJv6ujChxU6l%2B3nkDZYpn1kJNP4NW&X-Amz-Signature=b8b777b8c7d913e939f43babddd7f3a2012975e545edecbc3a104f1e03ca166c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPZMR665%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCeU2XLXit5cQ38tDIZ0h%2FIda2sn%2F1rMiHDSLTGYKxYHAIhAJKV3lpslCCwbYwyFxUn8G42HPxrsw6E7oRwtrh2Li0jKv8DCFQQABoMNjM3NDIzMTgzODA1IgxtM70WrP8vRx4zBQsq3AO63Hux1rhd7ENHkCGa12Sda2CnHh27nrPOUhmpX7iMj15JCiP2I0UPZ%2FWGBKSccJ%2FgpD8Fc9aQmlZX9cXcRDvL55mXVPKTQP0sdNXKUo0jD9Xf6PyROFFgz3ya%2B7ORYcYC1ELgIx3kGbeQ5fjO7e2gK24nPn90W56TFmMKaSw8y7Le%2BH1noZv3JDMJksd9fOWLitmU1GMVf%2BwssTjriL2vcisCtAWnd%2F%2F4sqWGjckMfqf97reQibElyGo8EZC9ZLopvKsQ8IdxHqso6vI0%2FT5WyDzsJzP%2B5KQt9HEtEfyKWbfS48%2FHd5%2FeRrXw%2Bfn9ugxnRv0YMfRov%2BTvxQ%2B9xiu7NmPGOv0p9gT7znPsOzn1W91aPwG29QjOOzzi%2F1moy6fv2olh6yejMSVqNTjMjdYeZMons8IcJpXAqHST6FfF%2BdNIQ8BX5LbGgQOfC0ckd6LGC7tA1wIHiPXHnWp5%2F5Ve3Glh6CRC3dPEpzfEoK4VT5QgzBR8Nfg3uDenvIid6X%2F384QGU%2Fkzx8k7lftJ%2BUKNFzlaz48dT8ZTzF8kR4m4lQwPo%2Fp%2BTa70shuCucY9ltHQqHUJwfb58oYYYELIyY%2BwiCE%2BY2y0rm5HAa8OVBVEqxwUeB1px57fcKoQLTDvrtzDBjqkAQkRIjH7eE0HOBB6TGd0DxE7Pm5Lun1hyAMU61%2BjhYnNdiJc26o9BLLL4Ch62bvbXg5Xomo5f3348epXgNH41ktj6Yum%2BUsNm8n6IS91o1xnb%2FQC36dd7uCf6ppeWbMP7DSxBsACb62eLLD1DLJbHozU%2F4%2Fgn1%2BAwSzLdUsJB7ATL9J3kKUM6Gsdmnh4izKTJv6ujChxU6l%2B3nkDZYpn1kJNP4NW&X-Amz-Signature=879f945410e9e4296054c2502aa78dc3230cc0d32b9b800cb467061ead223c9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
