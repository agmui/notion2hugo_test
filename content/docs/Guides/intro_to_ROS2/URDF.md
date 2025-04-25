---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2024-12-03T18:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2024-12-03T18:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 148
toc: false
icon: ""
---

## Setup

clone this repo into an existing workspace:
`git clone https://github.com/joshnewans/my_bot.git`

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf](https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BEBHUYF%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T132000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcVp21pZ7jmwD1Dc54E2CVWU9FW%2FglP0FIiqIzUfkoNgIhAMkXn4i0Vf6E%2BQgKCUGyCAIs5B7tDSAfA%2F6apdpqcKVjKv8DCC4QABoMNjM3NDIzMTgzODA1IgwqUKJA83q5WN4i3d0q3AMq9zw0fpYhIXTXBKBXlrY25mv3Ry1FX%2FsPSptzNwX21jSYHE8OLeXrZhbOrbytJ%2B9s3NeGKbKgPOH4QDnUU1BBln0Z90alVQLB7vnmv0JBBFMEYGAnlubdh80r3VcEYhQb%2BMIR5YBeZI6YDTxnYpRIHliqXE38mVi2lZPyKUpILtFPuowNGNYAEYNggEAjFQ2oWAlEBeIPNMLO4QdcO1D8DF0pizn0eO1EPxVf0WyNhfLm4CIIh4B6exIGNt09gN2S%2BoSCm3PUOCaOLj21wCGTkVm9TS7FlpNags0wqDm3sa55vs2UQQ%2F7u9QhhShsbt70GzhY6DoJ3Hq0qcl3QUXLYt3shA0d9UQ2eLMren23qaslSupzLa3A1Ko4GOl51vs3AqgXOBGALS5HZpbzYtvAdm4OH8n%2B1%2BZXY3jg9J5pwczl981SKgvVwiXxw7CxAXsZWl3zD7rneTh%2B3VcNQV0owcVf6%2ByNg1QX4h9L%2FKcnwCdYMfml53jIefLeJ4tRCTcSocCrw75if0qU43stgSXle27o66X1fqkdgA3gXqfu5kirw7tegnK21HpUeqEZu6k3pxfowGewUSnb0e2Xw5UobJD9mtlmLuct3FnjlXCy3Kj9ha5gh8mNkUYajzDj%2Fa3ABjqkAelF7MlLuJv%2FFCU%2Brt5dTZdNzyHz9Td%2FEebFGvX79siipNEefPgsF78gA%2Bb3Qfs%2FlWj4OYFbPbxXAYl%2BIgQ0%2Fy9PPZ9drSr1oDMxDD0WvkCBsvjsPqwKZIZDrEu0ePOVlrl%2BbDB31IKMvHvWGkWK0w%2BJbSbUMJwCbSKFC%2BexYf95nKKPkZ56ifz%2Bk1RRpWuHOKMlup8EOONYZHbncY4zJAuc%2FL6b&X-Amz-Signature=50aca18cdb30d8f8debcfd7851dda164b6bab4affda3436c5b7ad0fdd63a3f0d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BEBHUYF%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T132000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcVp21pZ7jmwD1Dc54E2CVWU9FW%2FglP0FIiqIzUfkoNgIhAMkXn4i0Vf6E%2BQgKCUGyCAIs5B7tDSAfA%2F6apdpqcKVjKv8DCC4QABoMNjM3NDIzMTgzODA1IgwqUKJA83q5WN4i3d0q3AMq9zw0fpYhIXTXBKBXlrY25mv3Ry1FX%2FsPSptzNwX21jSYHE8OLeXrZhbOrbytJ%2B9s3NeGKbKgPOH4QDnUU1BBln0Z90alVQLB7vnmv0JBBFMEYGAnlubdh80r3VcEYhQb%2BMIR5YBeZI6YDTxnYpRIHliqXE38mVi2lZPyKUpILtFPuowNGNYAEYNggEAjFQ2oWAlEBeIPNMLO4QdcO1D8DF0pizn0eO1EPxVf0WyNhfLm4CIIh4B6exIGNt09gN2S%2BoSCm3PUOCaOLj21wCGTkVm9TS7FlpNags0wqDm3sa55vs2UQQ%2F7u9QhhShsbt70GzhY6DoJ3Hq0qcl3QUXLYt3shA0d9UQ2eLMren23qaslSupzLa3A1Ko4GOl51vs3AqgXOBGALS5HZpbzYtvAdm4OH8n%2B1%2BZXY3jg9J5pwczl981SKgvVwiXxw7CxAXsZWl3zD7rneTh%2B3VcNQV0owcVf6%2ByNg1QX4h9L%2FKcnwCdYMfml53jIefLeJ4tRCTcSocCrw75if0qU43stgSXle27o66X1fqkdgA3gXqfu5kirw7tegnK21HpUeqEZu6k3pxfowGewUSnb0e2Xw5UobJD9mtlmLuct3FnjlXCy3Kj9ha5gh8mNkUYajzDj%2Fa3ABjqkAelF7MlLuJv%2FFCU%2Brt5dTZdNzyHz9Td%2FEebFGvX79siipNEefPgsF78gA%2Bb3Qfs%2FlWj4OYFbPbxXAYl%2BIgQ0%2Fy9PPZ9drSr1oDMxDD0WvkCBsvjsPqwKZIZDrEu0ePOVlrl%2BbDB31IKMvHvWGkWK0w%2BJbSbUMJwCbSKFC%2BexYf95nKKPkZ56ifz%2Bk1RRpWuHOKMlup8EOONYZHbncY4zJAuc%2FL6b&X-Amz-Signature=411c90d9f5873e760a3082695117b492ab35c53181bcda28a0bc3ddaaaaadeba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
