---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 145
toc: false
icon: ""
---

**official guide:** [https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html)

So far we have made multiple files and our folder is getting messy.

Let's structure our project by using ROS Packages.

<details>
      <summary>What are ROS Packages?</summary>
      ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXPJW53H%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDEHjMYkI6tsxV1PrYgXr3eG0r1jS0RxlvC7rOECevaJAIgaKOJLj3b87RYn%2FyXijmr%2FH4zuc5xIRYsARHmUhpiwacq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGXxdopxl0cmXvKSWSrcAzWLE1B7HCljbVkjonPzhNX1aan90KPlF%2F1IS8XXcPcal4x%2FGX5On1EoU7vwdCAw6KqGtNre1hC0fEQ03sspZzVF0mlX68dh9liIwy%2BVfz0r6314zJQEjXF9gGM1kKXS5DHwnt%2FWHmjv8ZWe6m9zVOuzhRAcyJqJvYOLJ6g7LGBjuJAiT1la075NbDqFbhWhzCfAohjX8idO%2FF09Tm9GnBTRUnKeVB2Xk6tG%2BNRhrc4CRObOhrAOJS7VCMmFCJWCAAD2wL%2BefUdoNqJNrVkdKrwBnjeyQg4fPnroX%2FBaKLuh6wkF0StdUc8Le8zTyO%2F8bZqOj8l0yzLdBRP9BWHEoeIz%2BfLaHSJd5qrjXwQNAexfG6hiSwppJTzeVp1vpQyl3qEAiJV4N8GL2xtPgtaYWUVZCN6yWpx%2FWqB0AfUv1tV%2FTqzkiXwb9FKEuI0CBAafQs2wLrFyP8b0mKejqJ3CzA1u1MvOdH6gWdoEkVS0Mk62%2F4Ss9pdOvPAKiXqlxsiJht9ndQbnJYCeZHG6fniInvC7BVoS9s3%2FyQ3kwNAYCvtZ3waPvFy6DsjFfvxXibHpsRqQpTv9QdXuVw8UTIv0Wxtz7%2F6Zf%2FpFbnXAUIb2B1W5hq2dkOFhI%2BgYtBleMMej%2BsQGOqUBKsrp0D574YNefj4YG58a5T8qBEEJ5AZtNtBlF37WUkEZefXl3UIalSGv%2B9I2nz02K8t9KzjUi2utHadOX40JB5nthnnC3YfYTOz1GlctyHkuxG6nL4ZVY%2FLI1Galmq%2FNEs8rOvQbAMRamQYr0KlDleIlij9H7P4TyPdMBoS0m%2BUxSpr%2BQAcpQ8Q4%2F2o%2Fy15Vs7ZJzHxE7VQ4Dl1TOdVqZjYGVPvD&X-Amz-Signature=cb5b28815d61f9563d6e3dd3d6a197be4175380658e11dadeb6bb303aa4515de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Then inside this `src` folder is where we put all of our packages.

```python
ros_ws/
    src/
      cpp_package_1/
		      ...
          package.xml

      py_package_1/
		      ...
          package.xml

      ...
      cpp_package_n/
		      ...
          package.xml

```

<details>
      <summary>package types</summary>
      packages can be either `C++` or python.
  </details>

# Creating a package

Let's go to the `src` folder to create the package

```bash
cd ros2_ws/src
```

to create a package we use this command:

```bash
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node my_package
```

a bunch of text should have been printed out but the result should look something like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXPJW53H%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDEHjMYkI6tsxV1PrYgXr3eG0r1jS0RxlvC7rOECevaJAIgaKOJLj3b87RYn%2FyXijmr%2FH4zuc5xIRYsARHmUhpiwacq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGXxdopxl0cmXvKSWSrcAzWLE1B7HCljbVkjonPzhNX1aan90KPlF%2F1IS8XXcPcal4x%2FGX5On1EoU7vwdCAw6KqGtNre1hC0fEQ03sspZzVF0mlX68dh9liIwy%2BVfz0r6314zJQEjXF9gGM1kKXS5DHwnt%2FWHmjv8ZWe6m9zVOuzhRAcyJqJvYOLJ6g7LGBjuJAiT1la075NbDqFbhWhzCfAohjX8idO%2FF09Tm9GnBTRUnKeVB2Xk6tG%2BNRhrc4CRObOhrAOJS7VCMmFCJWCAAD2wL%2BefUdoNqJNrVkdKrwBnjeyQg4fPnroX%2FBaKLuh6wkF0StdUc8Le8zTyO%2F8bZqOj8l0yzLdBRP9BWHEoeIz%2BfLaHSJd5qrjXwQNAexfG6hiSwppJTzeVp1vpQyl3qEAiJV4N8GL2xtPgtaYWUVZCN6yWpx%2FWqB0AfUv1tV%2FTqzkiXwb9FKEuI0CBAafQs2wLrFyP8b0mKejqJ3CzA1u1MvOdH6gWdoEkVS0Mk62%2F4Ss9pdOvPAKiXqlxsiJht9ndQbnJYCeZHG6fniInvC7BVoS9s3%2FyQ3kwNAYCvtZ3waPvFy6DsjFfvxXibHpsRqQpTv9QdXuVw8UTIv0Wxtz7%2F6Zf%2FpFbnXAUIb2B1W5hq2dkOFhI%2BgYtBleMMej%2BsQGOqUBKsrp0D574YNefj4YG58a5T8qBEEJ5AZtNtBlF37WUkEZefXl3UIalSGv%2B9I2nz02K8t9KzjUi2utHadOX40JB5nthnnC3YfYTOz1GlctyHkuxG6nL4ZVY%2FLI1Galmq%2FNEs8rOvQbAMRamQYr0KlDleIlij9H7P4TyPdMBoS0m%2BUxSpr%2BQAcpQ8Q4%2F2o%2Fy15Vs7ZJzHxE7VQ4Dl1TOdVqZjYGVPvD&X-Amz-Signature=189629bc48ec540732bfbb5889b3ae5d8854706be56f2d5e1bac045d58ea838e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXPJW53H%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDEHjMYkI6tsxV1PrYgXr3eG0r1jS0RxlvC7rOECevaJAIgaKOJLj3b87RYn%2FyXijmr%2FH4zuc5xIRYsARHmUhpiwacq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGXxdopxl0cmXvKSWSrcAzWLE1B7HCljbVkjonPzhNX1aan90KPlF%2F1IS8XXcPcal4x%2FGX5On1EoU7vwdCAw6KqGtNre1hC0fEQ03sspZzVF0mlX68dh9liIwy%2BVfz0r6314zJQEjXF9gGM1kKXS5DHwnt%2FWHmjv8ZWe6m9zVOuzhRAcyJqJvYOLJ6g7LGBjuJAiT1la075NbDqFbhWhzCfAohjX8idO%2FF09Tm9GnBTRUnKeVB2Xk6tG%2BNRhrc4CRObOhrAOJS7VCMmFCJWCAAD2wL%2BefUdoNqJNrVkdKrwBnjeyQg4fPnroX%2FBaKLuh6wkF0StdUc8Le8zTyO%2F8bZqOj8l0yzLdBRP9BWHEoeIz%2BfLaHSJd5qrjXwQNAexfG6hiSwppJTzeVp1vpQyl3qEAiJV4N8GL2xtPgtaYWUVZCN6yWpx%2FWqB0AfUv1tV%2FTqzkiXwb9FKEuI0CBAafQs2wLrFyP8b0mKejqJ3CzA1u1MvOdH6gWdoEkVS0Mk62%2F4Ss9pdOvPAKiXqlxsiJht9ndQbnJYCeZHG6fniInvC7BVoS9s3%2FyQ3kwNAYCvtZ3waPvFy6DsjFfvxXibHpsRqQpTv9QdXuVw8UTIv0Wxtz7%2F6Zf%2FpFbnXAUIb2B1W5hq2dkOFhI%2BgYtBleMMej%2BsQGOqUBKsrp0D574YNefj4YG58a5T8qBEEJ5AZtNtBlF37WUkEZefXl3UIalSGv%2B9I2nz02K8t9KzjUi2utHadOX40JB5nthnnC3YfYTOz1GlctyHkuxG6nL4ZVY%2FLI1Galmq%2FNEs8rOvQbAMRamQYr0KlDleIlij9H7P4TyPdMBoS0m%2BUxSpr%2BQAcpQ8Q4%2F2o%2Fy15Vs7ZJzHxE7VQ4Dl1TOdVqZjYGVPvD&X-Amz-Signature=3a5c9177c768b4281ef329fa55a43472286b387cd3de74a918e8f2d7cca214a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXPJW53H%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDEHjMYkI6tsxV1PrYgXr3eG0r1jS0RxlvC7rOECevaJAIgaKOJLj3b87RYn%2FyXijmr%2FH4zuc5xIRYsARHmUhpiwacq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGXxdopxl0cmXvKSWSrcAzWLE1B7HCljbVkjonPzhNX1aan90KPlF%2F1IS8XXcPcal4x%2FGX5On1EoU7vwdCAw6KqGtNre1hC0fEQ03sspZzVF0mlX68dh9liIwy%2BVfz0r6314zJQEjXF9gGM1kKXS5DHwnt%2FWHmjv8ZWe6m9zVOuzhRAcyJqJvYOLJ6g7LGBjuJAiT1la075NbDqFbhWhzCfAohjX8idO%2FF09Tm9GnBTRUnKeVB2Xk6tG%2BNRhrc4CRObOhrAOJS7VCMmFCJWCAAD2wL%2BefUdoNqJNrVkdKrwBnjeyQg4fPnroX%2FBaKLuh6wkF0StdUc8Le8zTyO%2F8bZqOj8l0yzLdBRP9BWHEoeIz%2BfLaHSJd5qrjXwQNAexfG6hiSwppJTzeVp1vpQyl3qEAiJV4N8GL2xtPgtaYWUVZCN6yWpx%2FWqB0AfUv1tV%2FTqzkiXwb9FKEuI0CBAafQs2wLrFyP8b0mKejqJ3CzA1u1MvOdH6gWdoEkVS0Mk62%2F4Ss9pdOvPAKiXqlxsiJht9ndQbnJYCeZHG6fniInvC7BVoS9s3%2FyQ3kwNAYCvtZ3waPvFy6DsjFfvxXibHpsRqQpTv9QdXuVw8UTIv0Wxtz7%2F6Zf%2FpFbnXAUIb2B1W5hq2dkOFhI%2BgYtBleMMej%2BsQGOqUBKsrp0D574YNefj4YG58a5T8qBEEJ5AZtNtBlF37WUkEZefXl3UIalSGv%2B9I2nz02K8t9KzjUi2utHadOX40JB5nthnnC3YfYTOz1GlctyHkuxG6nL4ZVY%2FLI1Galmq%2FNEs8rOvQbAMRamQYr0KlDleIlij9H7P4TyPdMBoS0m%2BUxSpr%2BQAcpQ8Q4%2F2o%2Fy15Vs7ZJzHxE7VQ4Dl1TOdVqZjYGVPvD&X-Amz-Signature=1d9b275457bc3e4ceec849f518f17587eb878b82511c2639f812e35bcd456dc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXPJW53H%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDEHjMYkI6tsxV1PrYgXr3eG0r1jS0RxlvC7rOECevaJAIgaKOJLj3b87RYn%2FyXijmr%2FH4zuc5xIRYsARHmUhpiwacq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGXxdopxl0cmXvKSWSrcAzWLE1B7HCljbVkjonPzhNX1aan90KPlF%2F1IS8XXcPcal4x%2FGX5On1EoU7vwdCAw6KqGtNre1hC0fEQ03sspZzVF0mlX68dh9liIwy%2BVfz0r6314zJQEjXF9gGM1kKXS5DHwnt%2FWHmjv8ZWe6m9zVOuzhRAcyJqJvYOLJ6g7LGBjuJAiT1la075NbDqFbhWhzCfAohjX8idO%2FF09Tm9GnBTRUnKeVB2Xk6tG%2BNRhrc4CRObOhrAOJS7VCMmFCJWCAAD2wL%2BefUdoNqJNrVkdKrwBnjeyQg4fPnroX%2FBaKLuh6wkF0StdUc8Le8zTyO%2F8bZqOj8l0yzLdBRP9BWHEoeIz%2BfLaHSJd5qrjXwQNAexfG6hiSwppJTzeVp1vpQyl3qEAiJV4N8GL2xtPgtaYWUVZCN6yWpx%2FWqB0AfUv1tV%2FTqzkiXwb9FKEuI0CBAafQs2wLrFyP8b0mKejqJ3CzA1u1MvOdH6gWdoEkVS0Mk62%2F4Ss9pdOvPAKiXqlxsiJht9ndQbnJYCeZHG6fniInvC7BVoS9s3%2FyQ3kwNAYCvtZ3waPvFy6DsjFfvxXibHpsRqQpTv9QdXuVw8UTIv0Wxtz7%2F6Zf%2FpFbnXAUIb2B1W5hq2dkOFhI%2BgYtBleMMej%2BsQGOqUBKsrp0D574YNefj4YG58a5T8qBEEJ5AZtNtBlF37WUkEZefXl3UIalSGv%2B9I2nz02K8t9KzjUi2utHadOX40JB5nthnnC3YfYTOz1GlctyHkuxG6nL4ZVY%2FLI1Galmq%2FNEs8rOvQbAMRamQYr0KlDleIlij9H7P4TyPdMBoS0m%2BUxSpr%2BQAcpQ8Q4%2F2o%2Fy15Vs7ZJzHxE7VQ4Dl1TOdVqZjYGVPvD&X-Amz-Signature=74f274eb2bda8e4a85c10d00800da132b6dfd8ea7608404e42df3a869d9f9f97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXPJW53H%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDEHjMYkI6tsxV1PrYgXr3eG0r1jS0RxlvC7rOECevaJAIgaKOJLj3b87RYn%2FyXijmr%2FH4zuc5xIRYsARHmUhpiwacq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGXxdopxl0cmXvKSWSrcAzWLE1B7HCljbVkjonPzhNX1aan90KPlF%2F1IS8XXcPcal4x%2FGX5On1EoU7vwdCAw6KqGtNre1hC0fEQ03sspZzVF0mlX68dh9liIwy%2BVfz0r6314zJQEjXF9gGM1kKXS5DHwnt%2FWHmjv8ZWe6m9zVOuzhRAcyJqJvYOLJ6g7LGBjuJAiT1la075NbDqFbhWhzCfAohjX8idO%2FF09Tm9GnBTRUnKeVB2Xk6tG%2BNRhrc4CRObOhrAOJS7VCMmFCJWCAAD2wL%2BefUdoNqJNrVkdKrwBnjeyQg4fPnroX%2FBaKLuh6wkF0StdUc8Le8zTyO%2F8bZqOj8l0yzLdBRP9BWHEoeIz%2BfLaHSJd5qrjXwQNAexfG6hiSwppJTzeVp1vpQyl3qEAiJV4N8GL2xtPgtaYWUVZCN6yWpx%2FWqB0AfUv1tV%2FTqzkiXwb9FKEuI0CBAafQs2wLrFyP8b0mKejqJ3CzA1u1MvOdH6gWdoEkVS0Mk62%2F4Ss9pdOvPAKiXqlxsiJht9ndQbnJYCeZHG6fniInvC7BVoS9s3%2FyQ3kwNAYCvtZ3waPvFy6DsjFfvxXibHpsRqQpTv9QdXuVw8UTIv0Wxtz7%2F6Zf%2FpFbnXAUIb2B1W5hq2dkOFhI%2BgYtBleMMej%2BsQGOqUBKsrp0D574YNefj4YG58a5T8qBEEJ5AZtNtBlF37WUkEZefXl3UIalSGv%2B9I2nz02K8t9KzjUi2utHadOX40JB5nthnnC3YfYTOz1GlctyHkuxG6nL4ZVY%2FLI1Galmq%2FNEs8rOvQbAMRamQYr0KlDleIlij9H7P4TyPdMBoS0m%2BUxSpr%2BQAcpQ8Q4%2F2o%2Fy15Vs7ZJzHxE7VQ4Dl1TOdVqZjYGVPvD&X-Amz-Signature=76473244910da1d2d2e2cae1ce5eacd010a957c7f38282a5a2876c7d071b8910&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXPJW53H%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDEHjMYkI6tsxV1PrYgXr3eG0r1jS0RxlvC7rOECevaJAIgaKOJLj3b87RYn%2FyXijmr%2FH4zuc5xIRYsARHmUhpiwacq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGXxdopxl0cmXvKSWSrcAzWLE1B7HCljbVkjonPzhNX1aan90KPlF%2F1IS8XXcPcal4x%2FGX5On1EoU7vwdCAw6KqGtNre1hC0fEQ03sspZzVF0mlX68dh9liIwy%2BVfz0r6314zJQEjXF9gGM1kKXS5DHwnt%2FWHmjv8ZWe6m9zVOuzhRAcyJqJvYOLJ6g7LGBjuJAiT1la075NbDqFbhWhzCfAohjX8idO%2FF09Tm9GnBTRUnKeVB2Xk6tG%2BNRhrc4CRObOhrAOJS7VCMmFCJWCAAD2wL%2BefUdoNqJNrVkdKrwBnjeyQg4fPnroX%2FBaKLuh6wkF0StdUc8Le8zTyO%2F8bZqOj8l0yzLdBRP9BWHEoeIz%2BfLaHSJd5qrjXwQNAexfG6hiSwppJTzeVp1vpQyl3qEAiJV4N8GL2xtPgtaYWUVZCN6yWpx%2FWqB0AfUv1tV%2FTqzkiXwb9FKEuI0CBAafQs2wLrFyP8b0mKejqJ3CzA1u1MvOdH6gWdoEkVS0Mk62%2F4Ss9pdOvPAKiXqlxsiJht9ndQbnJYCeZHG6fniInvC7BVoS9s3%2FyQ3kwNAYCvtZ3waPvFy6DsjFfvxXibHpsRqQpTv9QdXuVw8UTIv0Wxtz7%2F6Zf%2FpFbnXAUIb2B1W5hq2dkOFhI%2BgYtBleMMej%2BsQGOqUBKsrp0D574YNefj4YG58a5T8qBEEJ5AZtNtBlF37WUkEZefXl3UIalSGv%2B9I2nz02K8t9KzjUi2utHadOX40JB5nthnnC3YfYTOz1GlctyHkuxG6nL4ZVY%2FLI1Galmq%2FNEs8rOvQbAMRamQYr0KlDleIlij9H7P4TyPdMBoS0m%2BUxSpr%2BQAcpQ8Q4%2F2o%2Fy15Vs7ZJzHxE7VQ4Dl1TOdVqZjYGVPvD&X-Amz-Signature=9e80c13c8359e1baf5dff1fe667c09729ff304bb694bc90aa4660055728c9d79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
