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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N54R2ZN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIGWDVCk16oFHRXMziwZwiS8FAijkZFzGwDp6rUqF2KX7AiEA9FpyxTpD3vbh0p9D11Szjm%2F%2FLCEuqQlzApUzo5iv7zoq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLAFnqOLL3DZcu%2FlhircA87xveEFxxP6feQTKFp7juN4fI4U%2B4AG%2B3WASvbdsNqWhDxDU48zLBLmS3doerHHJbIVj7C%2B%2BSp9CeJSQj1QAz9fZEOR1KBf17RWCMWsU0EK8LV421PUkue9fRgysis74bQgk5EnYfCc2NWucn7pi4QaEVFDPm6WMw1Hw8B6vvPedl2UoWZqDZoAp84w7%2F4hU8q1vBmplCjyEDORHKncmW8CkhnkFHPAr1JBAEdOGBguGGa%2FBrswwpBazSc1OgXGupkQ%2BxInlMmLT6bmjCaJAq9Pn8wJhOsKBKuXH2GbEQXxgh2GZT%2FPiaOB5q4wjhYEY2GMUK7Ol%2B2Co2lUFQ3tRRisU32C2cDyaGMwzjdy7SUCyzHxRMJ%2FHQBC4bUX3r1X9J6vqWJukUcg62gXMWuUYKuCyYLqNiWl5VfFqlJLidrv9nOxkHQnUcWnzEVDXIOqPB5hGj4%2BUHBt%2BBIsZAlsXyTmLeR318dX7oNhiTTu9%2BpvVJiKnMIraqLvxenYapNuUixWcBs3Vwg6RRCfJhDVAQ5%2BSwY9bEzVxERdjg072kF4GBdf2Zh%2BQlOpfyiH8Hb5QqR9SH9RwNp7mz0PKp1oLla6R1aIhYBWLztRCjYrGYQk%2FVVrw7SK4iX3pjBAMKaCpMMGOqUB9E3aPnMm1FQydm0NAtMfcAf8uCf10nCCGLHkwKo%2Bt%2FUyKliPOGKsUb1QY%2FQSIjAZT7BGDz3WSiz4rxy58wllPD7CoaCFQQSrB1fHw200bLLlNNdyn1lMBKLfpfSgZ96AT1HtBIXD%2F49wD%2Fux9cJ4H0R%2BowbHS4yhQw54joeQDp54PnmalzShlywdS%2F%2B9RYYJfxXwDzqh4NX5xoIcPa8kPdxVZZ6P&X-Amz-Signature=ff76ab76977e2a465d1d311dab7e87fad766dad189c252a92935c18e2174a93e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N54R2ZN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIGWDVCk16oFHRXMziwZwiS8FAijkZFzGwDp6rUqF2KX7AiEA9FpyxTpD3vbh0p9D11Szjm%2F%2FLCEuqQlzApUzo5iv7zoq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLAFnqOLL3DZcu%2FlhircA87xveEFxxP6feQTKFp7juN4fI4U%2B4AG%2B3WASvbdsNqWhDxDU48zLBLmS3doerHHJbIVj7C%2B%2BSp9CeJSQj1QAz9fZEOR1KBf17RWCMWsU0EK8LV421PUkue9fRgysis74bQgk5EnYfCc2NWucn7pi4QaEVFDPm6WMw1Hw8B6vvPedl2UoWZqDZoAp84w7%2F4hU8q1vBmplCjyEDORHKncmW8CkhnkFHPAr1JBAEdOGBguGGa%2FBrswwpBazSc1OgXGupkQ%2BxInlMmLT6bmjCaJAq9Pn8wJhOsKBKuXH2GbEQXxgh2GZT%2FPiaOB5q4wjhYEY2GMUK7Ol%2B2Co2lUFQ3tRRisU32C2cDyaGMwzjdy7SUCyzHxRMJ%2FHQBC4bUX3r1X9J6vqWJukUcg62gXMWuUYKuCyYLqNiWl5VfFqlJLidrv9nOxkHQnUcWnzEVDXIOqPB5hGj4%2BUHBt%2BBIsZAlsXyTmLeR318dX7oNhiTTu9%2BpvVJiKnMIraqLvxenYapNuUixWcBs3Vwg6RRCfJhDVAQ5%2BSwY9bEzVxERdjg072kF4GBdf2Zh%2BQlOpfyiH8Hb5QqR9SH9RwNp7mz0PKp1oLla6R1aIhYBWLztRCjYrGYQk%2FVVrw7SK4iX3pjBAMKaCpMMGOqUB9E3aPnMm1FQydm0NAtMfcAf8uCf10nCCGLHkwKo%2Bt%2FUyKliPOGKsUb1QY%2FQSIjAZT7BGDz3WSiz4rxy58wllPD7CoaCFQQSrB1fHw200bLLlNNdyn1lMBKLfpfSgZ96AT1HtBIXD%2F49wD%2Fux9cJ4H0R%2BowbHS4yhQw54joeQDp54PnmalzShlywdS%2F%2B9RYYJfxXwDzqh4NX5xoIcPa8kPdxVZZ6P&X-Amz-Signature=5e6357bac7dea17420e389f98beafa1cc38bd815451812d4aae37a4da446f3b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N54R2ZN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIGWDVCk16oFHRXMziwZwiS8FAijkZFzGwDp6rUqF2KX7AiEA9FpyxTpD3vbh0p9D11Szjm%2F%2FLCEuqQlzApUzo5iv7zoq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLAFnqOLL3DZcu%2FlhircA87xveEFxxP6feQTKFp7juN4fI4U%2B4AG%2B3WASvbdsNqWhDxDU48zLBLmS3doerHHJbIVj7C%2B%2BSp9CeJSQj1QAz9fZEOR1KBf17RWCMWsU0EK8LV421PUkue9fRgysis74bQgk5EnYfCc2NWucn7pi4QaEVFDPm6WMw1Hw8B6vvPedl2UoWZqDZoAp84w7%2F4hU8q1vBmplCjyEDORHKncmW8CkhnkFHPAr1JBAEdOGBguGGa%2FBrswwpBazSc1OgXGupkQ%2BxInlMmLT6bmjCaJAq9Pn8wJhOsKBKuXH2GbEQXxgh2GZT%2FPiaOB5q4wjhYEY2GMUK7Ol%2B2Co2lUFQ3tRRisU32C2cDyaGMwzjdy7SUCyzHxRMJ%2FHQBC4bUX3r1X9J6vqWJukUcg62gXMWuUYKuCyYLqNiWl5VfFqlJLidrv9nOxkHQnUcWnzEVDXIOqPB5hGj4%2BUHBt%2BBIsZAlsXyTmLeR318dX7oNhiTTu9%2BpvVJiKnMIraqLvxenYapNuUixWcBs3Vwg6RRCfJhDVAQ5%2BSwY9bEzVxERdjg072kF4GBdf2Zh%2BQlOpfyiH8Hb5QqR9SH9RwNp7mz0PKp1oLla6R1aIhYBWLztRCjYrGYQk%2FVVrw7SK4iX3pjBAMKaCpMMGOqUB9E3aPnMm1FQydm0NAtMfcAf8uCf10nCCGLHkwKo%2Bt%2FUyKliPOGKsUb1QY%2FQSIjAZT7BGDz3WSiz4rxy58wllPD7CoaCFQQSrB1fHw200bLLlNNdyn1lMBKLfpfSgZ96AT1HtBIXD%2F49wD%2Fux9cJ4H0R%2BowbHS4yhQw54joeQDp54PnmalzShlywdS%2F%2B9RYYJfxXwDzqh4NX5xoIcPa8kPdxVZZ6P&X-Amz-Signature=e052c8d3cab07ef448f54f81db05df4c899af8d3d7737643232e52390deed50b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N54R2ZN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIGWDVCk16oFHRXMziwZwiS8FAijkZFzGwDp6rUqF2KX7AiEA9FpyxTpD3vbh0p9D11Szjm%2F%2FLCEuqQlzApUzo5iv7zoq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLAFnqOLL3DZcu%2FlhircA87xveEFxxP6feQTKFp7juN4fI4U%2B4AG%2B3WASvbdsNqWhDxDU48zLBLmS3doerHHJbIVj7C%2B%2BSp9CeJSQj1QAz9fZEOR1KBf17RWCMWsU0EK8LV421PUkue9fRgysis74bQgk5EnYfCc2NWucn7pi4QaEVFDPm6WMw1Hw8B6vvPedl2UoWZqDZoAp84w7%2F4hU8q1vBmplCjyEDORHKncmW8CkhnkFHPAr1JBAEdOGBguGGa%2FBrswwpBazSc1OgXGupkQ%2BxInlMmLT6bmjCaJAq9Pn8wJhOsKBKuXH2GbEQXxgh2GZT%2FPiaOB5q4wjhYEY2GMUK7Ol%2B2Co2lUFQ3tRRisU32C2cDyaGMwzjdy7SUCyzHxRMJ%2FHQBC4bUX3r1X9J6vqWJukUcg62gXMWuUYKuCyYLqNiWl5VfFqlJLidrv9nOxkHQnUcWnzEVDXIOqPB5hGj4%2BUHBt%2BBIsZAlsXyTmLeR318dX7oNhiTTu9%2BpvVJiKnMIraqLvxenYapNuUixWcBs3Vwg6RRCfJhDVAQ5%2BSwY9bEzVxERdjg072kF4GBdf2Zh%2BQlOpfyiH8Hb5QqR9SH9RwNp7mz0PKp1oLla6R1aIhYBWLztRCjYrGYQk%2FVVrw7SK4iX3pjBAMKaCpMMGOqUB9E3aPnMm1FQydm0NAtMfcAf8uCf10nCCGLHkwKo%2Bt%2FUyKliPOGKsUb1QY%2FQSIjAZT7BGDz3WSiz4rxy58wllPD7CoaCFQQSrB1fHw200bLLlNNdyn1lMBKLfpfSgZ96AT1HtBIXD%2F49wD%2Fux9cJ4H0R%2BowbHS4yhQw54joeQDp54PnmalzShlywdS%2F%2B9RYYJfxXwDzqh4NX5xoIcPa8kPdxVZZ6P&X-Amz-Signature=0f65704ae797f8a8e03eb1177ebf3e4d0784aae9a50a5030fe46af8d2570cf0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N54R2ZN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIGWDVCk16oFHRXMziwZwiS8FAijkZFzGwDp6rUqF2KX7AiEA9FpyxTpD3vbh0p9D11Szjm%2F%2FLCEuqQlzApUzo5iv7zoq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLAFnqOLL3DZcu%2FlhircA87xveEFxxP6feQTKFp7juN4fI4U%2B4AG%2B3WASvbdsNqWhDxDU48zLBLmS3doerHHJbIVj7C%2B%2BSp9CeJSQj1QAz9fZEOR1KBf17RWCMWsU0EK8LV421PUkue9fRgysis74bQgk5EnYfCc2NWucn7pi4QaEVFDPm6WMw1Hw8B6vvPedl2UoWZqDZoAp84w7%2F4hU8q1vBmplCjyEDORHKncmW8CkhnkFHPAr1JBAEdOGBguGGa%2FBrswwpBazSc1OgXGupkQ%2BxInlMmLT6bmjCaJAq9Pn8wJhOsKBKuXH2GbEQXxgh2GZT%2FPiaOB5q4wjhYEY2GMUK7Ol%2B2Co2lUFQ3tRRisU32C2cDyaGMwzjdy7SUCyzHxRMJ%2FHQBC4bUX3r1X9J6vqWJukUcg62gXMWuUYKuCyYLqNiWl5VfFqlJLidrv9nOxkHQnUcWnzEVDXIOqPB5hGj4%2BUHBt%2BBIsZAlsXyTmLeR318dX7oNhiTTu9%2BpvVJiKnMIraqLvxenYapNuUixWcBs3Vwg6RRCfJhDVAQ5%2BSwY9bEzVxERdjg072kF4GBdf2Zh%2BQlOpfyiH8Hb5QqR9SH9RwNp7mz0PKp1oLla6R1aIhYBWLztRCjYrGYQk%2FVVrw7SK4iX3pjBAMKaCpMMGOqUB9E3aPnMm1FQydm0NAtMfcAf8uCf10nCCGLHkwKo%2Bt%2FUyKliPOGKsUb1QY%2FQSIjAZT7BGDz3WSiz4rxy58wllPD7CoaCFQQSrB1fHw200bLLlNNdyn1lMBKLfpfSgZ96AT1HtBIXD%2F49wD%2Fux9cJ4H0R%2BowbHS4yhQw54joeQDp54PnmalzShlywdS%2F%2B9RYYJfxXwDzqh4NX5xoIcPa8kPdxVZZ6P&X-Amz-Signature=f4013d8eb128637e5c3f699e9299008ce342c15e3d8ab297ad0fbd631b57a1d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N54R2ZN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIGWDVCk16oFHRXMziwZwiS8FAijkZFzGwDp6rUqF2KX7AiEA9FpyxTpD3vbh0p9D11Szjm%2F%2FLCEuqQlzApUzo5iv7zoq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLAFnqOLL3DZcu%2FlhircA87xveEFxxP6feQTKFp7juN4fI4U%2B4AG%2B3WASvbdsNqWhDxDU48zLBLmS3doerHHJbIVj7C%2B%2BSp9CeJSQj1QAz9fZEOR1KBf17RWCMWsU0EK8LV421PUkue9fRgysis74bQgk5EnYfCc2NWucn7pi4QaEVFDPm6WMw1Hw8B6vvPedl2UoWZqDZoAp84w7%2F4hU8q1vBmplCjyEDORHKncmW8CkhnkFHPAr1JBAEdOGBguGGa%2FBrswwpBazSc1OgXGupkQ%2BxInlMmLT6bmjCaJAq9Pn8wJhOsKBKuXH2GbEQXxgh2GZT%2FPiaOB5q4wjhYEY2GMUK7Ol%2B2Co2lUFQ3tRRisU32C2cDyaGMwzjdy7SUCyzHxRMJ%2FHQBC4bUX3r1X9J6vqWJukUcg62gXMWuUYKuCyYLqNiWl5VfFqlJLidrv9nOxkHQnUcWnzEVDXIOqPB5hGj4%2BUHBt%2BBIsZAlsXyTmLeR318dX7oNhiTTu9%2BpvVJiKnMIraqLvxenYapNuUixWcBs3Vwg6RRCfJhDVAQ5%2BSwY9bEzVxERdjg072kF4GBdf2Zh%2BQlOpfyiH8Hb5QqR9SH9RwNp7mz0PKp1oLla6R1aIhYBWLztRCjYrGYQk%2FVVrw7SK4iX3pjBAMKaCpMMGOqUB9E3aPnMm1FQydm0NAtMfcAf8uCf10nCCGLHkwKo%2Bt%2FUyKliPOGKsUb1QY%2FQSIjAZT7BGDz3WSiz4rxy58wllPD7CoaCFQQSrB1fHw200bLLlNNdyn1lMBKLfpfSgZ96AT1HtBIXD%2F49wD%2Fux9cJ4H0R%2BowbHS4yhQw54joeQDp54PnmalzShlywdS%2F%2B9RYYJfxXwDzqh4NX5xoIcPa8kPdxVZZ6P&X-Amz-Signature=6e725872128305673fe7e367e5fb275368b72652a3dd5a86add6bb20c5ff09dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N54R2ZN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIGWDVCk16oFHRXMziwZwiS8FAijkZFzGwDp6rUqF2KX7AiEA9FpyxTpD3vbh0p9D11Szjm%2F%2FLCEuqQlzApUzo5iv7zoq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLAFnqOLL3DZcu%2FlhircA87xveEFxxP6feQTKFp7juN4fI4U%2B4AG%2B3WASvbdsNqWhDxDU48zLBLmS3doerHHJbIVj7C%2B%2BSp9CeJSQj1QAz9fZEOR1KBf17RWCMWsU0EK8LV421PUkue9fRgysis74bQgk5EnYfCc2NWucn7pi4QaEVFDPm6WMw1Hw8B6vvPedl2UoWZqDZoAp84w7%2F4hU8q1vBmplCjyEDORHKncmW8CkhnkFHPAr1JBAEdOGBguGGa%2FBrswwpBazSc1OgXGupkQ%2BxInlMmLT6bmjCaJAq9Pn8wJhOsKBKuXH2GbEQXxgh2GZT%2FPiaOB5q4wjhYEY2GMUK7Ol%2B2Co2lUFQ3tRRisU32C2cDyaGMwzjdy7SUCyzHxRMJ%2FHQBC4bUX3r1X9J6vqWJukUcg62gXMWuUYKuCyYLqNiWl5VfFqlJLidrv9nOxkHQnUcWnzEVDXIOqPB5hGj4%2BUHBt%2BBIsZAlsXyTmLeR318dX7oNhiTTu9%2BpvVJiKnMIraqLvxenYapNuUixWcBs3Vwg6RRCfJhDVAQ5%2BSwY9bEzVxERdjg072kF4GBdf2Zh%2BQlOpfyiH8Hb5QqR9SH9RwNp7mz0PKp1oLla6R1aIhYBWLztRCjYrGYQk%2FVVrw7SK4iX3pjBAMKaCpMMGOqUB9E3aPnMm1FQydm0NAtMfcAf8uCf10nCCGLHkwKo%2Bt%2FUyKliPOGKsUb1QY%2FQSIjAZT7BGDz3WSiz4rxy58wllPD7CoaCFQQSrB1fHw200bLLlNNdyn1lMBKLfpfSgZ96AT1HtBIXD%2F49wD%2Fux9cJ4H0R%2BowbHS4yhQw54joeQDp54PnmalzShlywdS%2F%2B9RYYJfxXwDzqh4NX5xoIcPa8kPdxVZZ6P&X-Amz-Signature=a361716a847c596d96a419f11aa6141ee0292c2478aabaebc45c27acd343c7a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N54R2ZN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIGWDVCk16oFHRXMziwZwiS8FAijkZFzGwDp6rUqF2KX7AiEA9FpyxTpD3vbh0p9D11Szjm%2F%2FLCEuqQlzApUzo5iv7zoq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLAFnqOLL3DZcu%2FlhircA87xveEFxxP6feQTKFp7juN4fI4U%2B4AG%2B3WASvbdsNqWhDxDU48zLBLmS3doerHHJbIVj7C%2B%2BSp9CeJSQj1QAz9fZEOR1KBf17RWCMWsU0EK8LV421PUkue9fRgysis74bQgk5EnYfCc2NWucn7pi4QaEVFDPm6WMw1Hw8B6vvPedl2UoWZqDZoAp84w7%2F4hU8q1vBmplCjyEDORHKncmW8CkhnkFHPAr1JBAEdOGBguGGa%2FBrswwpBazSc1OgXGupkQ%2BxInlMmLT6bmjCaJAq9Pn8wJhOsKBKuXH2GbEQXxgh2GZT%2FPiaOB5q4wjhYEY2GMUK7Ol%2B2Co2lUFQ3tRRisU32C2cDyaGMwzjdy7SUCyzHxRMJ%2FHQBC4bUX3r1X9J6vqWJukUcg62gXMWuUYKuCyYLqNiWl5VfFqlJLidrv9nOxkHQnUcWnzEVDXIOqPB5hGj4%2BUHBt%2BBIsZAlsXyTmLeR318dX7oNhiTTu9%2BpvVJiKnMIraqLvxenYapNuUixWcBs3Vwg6RRCfJhDVAQ5%2BSwY9bEzVxERdjg072kF4GBdf2Zh%2BQlOpfyiH8Hb5QqR9SH9RwNp7mz0PKp1oLla6R1aIhYBWLztRCjYrGYQk%2FVVrw7SK4iX3pjBAMKaCpMMGOqUB9E3aPnMm1FQydm0NAtMfcAf8uCf10nCCGLHkwKo%2Bt%2FUyKliPOGKsUb1QY%2FQSIjAZT7BGDz3WSiz4rxy58wllPD7CoaCFQQSrB1fHw200bLLlNNdyn1lMBKLfpfSgZ96AT1HtBIXD%2F49wD%2Fux9cJ4H0R%2BowbHS4yhQw54joeQDp54PnmalzShlywdS%2F%2B9RYYJfxXwDzqh4NX5xoIcPa8kPdxVZZ6P&X-Amz-Signature=cbef781e5f5ad9e8e006d1ef64575178b3617d320e3d6b61ac6432c4dab8d786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
