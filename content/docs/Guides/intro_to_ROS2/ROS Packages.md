---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-01-12T15:12:00.000Z"
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

They consist of a folder, `package.xml` file, and source code

```python
      cpp_package_1/
		      ... imagine much code files here ..
          package.xml
```

</details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ADFC7F%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDHtyWI18I8XO382r70fSnAC%2BpZJKczHH3OMGJrb5r8SgIgSxRJCazeApRbZ5wIis5H0TrcswAfx9vuAkfsKac8%2FIoqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDY8SiFwnMO1fsjq%2FircA3CSiCn4IsaRASbHmOImyj1h6CADLLy3bZyhlYo2a5IA1Cwm4waoV7gTxUpo%2FKnRZ1Xk3qvRqnYJmtXnJRlq8M1IS5he1rwX8L%2BFDTF9Jan0hPJtVOrPzvmQmDH457CNUi7Kvfr%2FQ5l9iS%2B9H3%2B6abOgcrlTHk%2FodoLCJlCL%2B4FV10bGCO6Tr8X5smeZRLFsqNGzJJQtsNbnNrlDDOiiLYn7OTQPmr115%2FMTF1UYgwzUI0prY2pb6Z4dnNGLcSFP7nuaaMNQzCeAmHaWuEGPCjbYkzbj4%2BysJ8UMlcFjmwQfCN%2FE7EpQui3zbVUI90QzXCO5wmL4wRx15kns%2FoCUzvEpuf4ZIABAXP%2BM5MtgriuUH0UF3XhLUGuCq%2F0lVh5Bz4RD2wRvcxpm4RZ4k4W9ThVSzg3m5738v7%2Fj5YQYEdADF1q1G4zApWXOLe69VPjm4sds7xg3q4Z5jzaglW3lORCVypePnwt7f76NhQNdG1GJC2c0K4qNM%2BoQTHgQ6SHJveBA1rSQkX%2FYfffTEQzSfaA2khcPp%2BxURsWA4I1u4nQQKG850DRukgH2B5czZmzpewO%2Fq5sYY3VEMMqMxyxMd%2F5VhmqcyoD1QqnGEOQrFheTod%2FCo9kBLNRzDNsEMNi9xb4GOqUBAMeG%2F%2BAGTtM7fsP63WC09kw6aIQruus98MBORHntNYi2bXgS26W3r5WMNVC2Urt0nRwYfDNFrwTHWoDOiuk5XfTHl3ILtn6VpTk%2BKQc%2BGcdV2cgTaXDW2948ACgzYBIx7luSWVa0wFg3qk7TBeqMbrlIoU86GIDLRFOWpUGozCiD1NDBhOY9OOlT00oYmaQCvRu26ZGHz4ICVXdInvfPlKaP%2Blcy&X-Amz-Signature=cd5f4f0d2e6febc8fa02b56f1ed894b5540dbd0f9f5012cbc39ae880a74dd6c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

the intern file structure is different for each but for this guide we will stick to creating python packages

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ADFC7F%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDHtyWI18I8XO382r70fSnAC%2BpZJKczHH3OMGJrb5r8SgIgSxRJCazeApRbZ5wIis5H0TrcswAfx9vuAkfsKac8%2FIoqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDY8SiFwnMO1fsjq%2FircA3CSiCn4IsaRASbHmOImyj1h6CADLLy3bZyhlYo2a5IA1Cwm4waoV7gTxUpo%2FKnRZ1Xk3qvRqnYJmtXnJRlq8M1IS5he1rwX8L%2BFDTF9Jan0hPJtVOrPzvmQmDH457CNUi7Kvfr%2FQ5l9iS%2B9H3%2B6abOgcrlTHk%2FodoLCJlCL%2B4FV10bGCO6Tr8X5smeZRLFsqNGzJJQtsNbnNrlDDOiiLYn7OTQPmr115%2FMTF1UYgwzUI0prY2pb6Z4dnNGLcSFP7nuaaMNQzCeAmHaWuEGPCjbYkzbj4%2BysJ8UMlcFjmwQfCN%2FE7EpQui3zbVUI90QzXCO5wmL4wRx15kns%2FoCUzvEpuf4ZIABAXP%2BM5MtgriuUH0UF3XhLUGuCq%2F0lVh5Bz4RD2wRvcxpm4RZ4k4W9ThVSzg3m5738v7%2Fj5YQYEdADF1q1G4zApWXOLe69VPjm4sds7xg3q4Z5jzaglW3lORCVypePnwt7f76NhQNdG1GJC2c0K4qNM%2BoQTHgQ6SHJveBA1rSQkX%2FYfffTEQzSfaA2khcPp%2BxURsWA4I1u4nQQKG850DRukgH2B5czZmzpewO%2Fq5sYY3VEMMqMxyxMd%2F5VhmqcyoD1QqnGEOQrFheTod%2FCo9kBLNRzDNsEMNi9xb4GOqUBAMeG%2F%2BAGTtM7fsP63WC09kw6aIQruus98MBORHntNYi2bXgS26W3r5WMNVC2Urt0nRwYfDNFrwTHWoDOiuk5XfTHl3ILtn6VpTk%2BKQc%2BGcdV2cgTaXDW2948ACgzYBIx7luSWVa0wFg3qk7TBeqMbrlIoU86GIDLRFOWpUGozCiD1NDBhOY9OOlT00oYmaQCvRu26ZGHz4ICVXdInvfPlKaP%2Blcy&X-Amz-Signature=c24c472c981b24443f690ec6e07c783b38e0a1eb0fbb0be9a276e55e5b1ff366&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ADFC7F%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDHtyWI18I8XO382r70fSnAC%2BpZJKczHH3OMGJrb5r8SgIgSxRJCazeApRbZ5wIis5H0TrcswAfx9vuAkfsKac8%2FIoqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDY8SiFwnMO1fsjq%2FircA3CSiCn4IsaRASbHmOImyj1h6CADLLy3bZyhlYo2a5IA1Cwm4waoV7gTxUpo%2FKnRZ1Xk3qvRqnYJmtXnJRlq8M1IS5he1rwX8L%2BFDTF9Jan0hPJtVOrPzvmQmDH457CNUi7Kvfr%2FQ5l9iS%2B9H3%2B6abOgcrlTHk%2FodoLCJlCL%2B4FV10bGCO6Tr8X5smeZRLFsqNGzJJQtsNbnNrlDDOiiLYn7OTQPmr115%2FMTF1UYgwzUI0prY2pb6Z4dnNGLcSFP7nuaaMNQzCeAmHaWuEGPCjbYkzbj4%2BysJ8UMlcFjmwQfCN%2FE7EpQui3zbVUI90QzXCO5wmL4wRx15kns%2FoCUzvEpuf4ZIABAXP%2BM5MtgriuUH0UF3XhLUGuCq%2F0lVh5Bz4RD2wRvcxpm4RZ4k4W9ThVSzg3m5738v7%2Fj5YQYEdADF1q1G4zApWXOLe69VPjm4sds7xg3q4Z5jzaglW3lORCVypePnwt7f76NhQNdG1GJC2c0K4qNM%2BoQTHgQ6SHJveBA1rSQkX%2FYfffTEQzSfaA2khcPp%2BxURsWA4I1u4nQQKG850DRukgH2B5czZmzpewO%2Fq5sYY3VEMMqMxyxMd%2F5VhmqcyoD1QqnGEOQrFheTod%2FCo9kBLNRzDNsEMNi9xb4GOqUBAMeG%2F%2BAGTtM7fsP63WC09kw6aIQruus98MBORHntNYi2bXgS26W3r5WMNVC2Urt0nRwYfDNFrwTHWoDOiuk5XfTHl3ILtn6VpTk%2BKQc%2BGcdV2cgTaXDW2948ACgzYBIx7luSWVa0wFg3qk7TBeqMbrlIoU86GIDLRFOWpUGozCiD1NDBhOY9OOlT00oYmaQCvRu26ZGHz4ICVXdInvfPlKaP%2Blcy&X-Amz-Signature=a19324fee9dfefcb7add4b06d03bf2828bfaa835acf6e881302e0f912b4cddf8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ADFC7F%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDHtyWI18I8XO382r70fSnAC%2BpZJKczHH3OMGJrb5r8SgIgSxRJCazeApRbZ5wIis5H0TrcswAfx9vuAkfsKac8%2FIoqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDY8SiFwnMO1fsjq%2FircA3CSiCn4IsaRASbHmOImyj1h6CADLLy3bZyhlYo2a5IA1Cwm4waoV7gTxUpo%2FKnRZ1Xk3qvRqnYJmtXnJRlq8M1IS5he1rwX8L%2BFDTF9Jan0hPJtVOrPzvmQmDH457CNUi7Kvfr%2FQ5l9iS%2B9H3%2B6abOgcrlTHk%2FodoLCJlCL%2B4FV10bGCO6Tr8X5smeZRLFsqNGzJJQtsNbnNrlDDOiiLYn7OTQPmr115%2FMTF1UYgwzUI0prY2pb6Z4dnNGLcSFP7nuaaMNQzCeAmHaWuEGPCjbYkzbj4%2BysJ8UMlcFjmwQfCN%2FE7EpQui3zbVUI90QzXCO5wmL4wRx15kns%2FoCUzvEpuf4ZIABAXP%2BM5MtgriuUH0UF3XhLUGuCq%2F0lVh5Bz4RD2wRvcxpm4RZ4k4W9ThVSzg3m5738v7%2Fj5YQYEdADF1q1G4zApWXOLe69VPjm4sds7xg3q4Z5jzaglW3lORCVypePnwt7f76NhQNdG1GJC2c0K4qNM%2BoQTHgQ6SHJveBA1rSQkX%2FYfffTEQzSfaA2khcPp%2BxURsWA4I1u4nQQKG850DRukgH2B5czZmzpewO%2Fq5sYY3VEMMqMxyxMd%2F5VhmqcyoD1QqnGEOQrFheTod%2FCo9kBLNRzDNsEMNi9xb4GOqUBAMeG%2F%2BAGTtM7fsP63WC09kw6aIQruus98MBORHntNYi2bXgS26W3r5WMNVC2Urt0nRwYfDNFrwTHWoDOiuk5XfTHl3ILtn6VpTk%2BKQc%2BGcdV2cgTaXDW2948ACgzYBIx7luSWVa0wFg3qk7TBeqMbrlIoU86GIDLRFOWpUGozCiD1NDBhOY9OOlT00oYmaQCvRu26ZGHz4ICVXdInvfPlKaP%2Blcy&X-Amz-Signature=4f70778fe239ad98b3089a282872f53a1b1c72feeccf02b2b8784ea89ade37c8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ADFC7F%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDHtyWI18I8XO382r70fSnAC%2BpZJKczHH3OMGJrb5r8SgIgSxRJCazeApRbZ5wIis5H0TrcswAfx9vuAkfsKac8%2FIoqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDY8SiFwnMO1fsjq%2FircA3CSiCn4IsaRASbHmOImyj1h6CADLLy3bZyhlYo2a5IA1Cwm4waoV7gTxUpo%2FKnRZ1Xk3qvRqnYJmtXnJRlq8M1IS5he1rwX8L%2BFDTF9Jan0hPJtVOrPzvmQmDH457CNUi7Kvfr%2FQ5l9iS%2B9H3%2B6abOgcrlTHk%2FodoLCJlCL%2B4FV10bGCO6Tr8X5smeZRLFsqNGzJJQtsNbnNrlDDOiiLYn7OTQPmr115%2FMTF1UYgwzUI0prY2pb6Z4dnNGLcSFP7nuaaMNQzCeAmHaWuEGPCjbYkzbj4%2BysJ8UMlcFjmwQfCN%2FE7EpQui3zbVUI90QzXCO5wmL4wRx15kns%2FoCUzvEpuf4ZIABAXP%2BM5MtgriuUH0UF3XhLUGuCq%2F0lVh5Bz4RD2wRvcxpm4RZ4k4W9ThVSzg3m5738v7%2Fj5YQYEdADF1q1G4zApWXOLe69VPjm4sds7xg3q4Z5jzaglW3lORCVypePnwt7f76NhQNdG1GJC2c0K4qNM%2BoQTHgQ6SHJveBA1rSQkX%2FYfffTEQzSfaA2khcPp%2BxURsWA4I1u4nQQKG850DRukgH2B5czZmzpewO%2Fq5sYY3VEMMqMxyxMd%2F5VhmqcyoD1QqnGEOQrFheTod%2FCo9kBLNRzDNsEMNi9xb4GOqUBAMeG%2F%2BAGTtM7fsP63WC09kw6aIQruus98MBORHntNYi2bXgS26W3r5WMNVC2Urt0nRwYfDNFrwTHWoDOiuk5XfTHl3ILtn6VpTk%2BKQc%2BGcdV2cgTaXDW2948ACgzYBIx7luSWVa0wFg3qk7TBeqMbrlIoU86GIDLRFOWpUGozCiD1NDBhOY9OOlT00oYmaQCvRu26ZGHz4ICVXdInvfPlKaP%2Blcy&X-Amz-Signature=7e56c4a35affb3a162f38cdf68e6e2073de9dd26a0fc814ac378fd29cad925cd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ADFC7F%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDHtyWI18I8XO382r70fSnAC%2BpZJKczHH3OMGJrb5r8SgIgSxRJCazeApRbZ5wIis5H0TrcswAfx9vuAkfsKac8%2FIoqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDY8SiFwnMO1fsjq%2FircA3CSiCn4IsaRASbHmOImyj1h6CADLLy3bZyhlYo2a5IA1Cwm4waoV7gTxUpo%2FKnRZ1Xk3qvRqnYJmtXnJRlq8M1IS5he1rwX8L%2BFDTF9Jan0hPJtVOrPzvmQmDH457CNUi7Kvfr%2FQ5l9iS%2B9H3%2B6abOgcrlTHk%2FodoLCJlCL%2B4FV10bGCO6Tr8X5smeZRLFsqNGzJJQtsNbnNrlDDOiiLYn7OTQPmr115%2FMTF1UYgwzUI0prY2pb6Z4dnNGLcSFP7nuaaMNQzCeAmHaWuEGPCjbYkzbj4%2BysJ8UMlcFjmwQfCN%2FE7EpQui3zbVUI90QzXCO5wmL4wRx15kns%2FoCUzvEpuf4ZIABAXP%2BM5MtgriuUH0UF3XhLUGuCq%2F0lVh5Bz4RD2wRvcxpm4RZ4k4W9ThVSzg3m5738v7%2Fj5YQYEdADF1q1G4zApWXOLe69VPjm4sds7xg3q4Z5jzaglW3lORCVypePnwt7f76NhQNdG1GJC2c0K4qNM%2BoQTHgQ6SHJveBA1rSQkX%2FYfffTEQzSfaA2khcPp%2BxURsWA4I1u4nQQKG850DRukgH2B5czZmzpewO%2Fq5sYY3VEMMqMxyxMd%2F5VhmqcyoD1QqnGEOQrFheTod%2FCo9kBLNRzDNsEMNi9xb4GOqUBAMeG%2F%2BAGTtM7fsP63WC09kw6aIQruus98MBORHntNYi2bXgS26W3r5WMNVC2Urt0nRwYfDNFrwTHWoDOiuk5XfTHl3ILtn6VpTk%2BKQc%2BGcdV2cgTaXDW2948ACgzYBIx7luSWVa0wFg3qk7TBeqMbrlIoU86GIDLRFOWpUGozCiD1NDBhOY9OOlT00oYmaQCvRu26ZGHz4ICVXdInvfPlKaP%2Blcy&X-Amz-Signature=5c37a4521081d05c0d6251446f493fa27e532b749ef5457e52934a4ea8b1bee2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ADFC7F%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDHtyWI18I8XO382r70fSnAC%2BpZJKczHH3OMGJrb5r8SgIgSxRJCazeApRbZ5wIis5H0TrcswAfx9vuAkfsKac8%2FIoqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDY8SiFwnMO1fsjq%2FircA3CSiCn4IsaRASbHmOImyj1h6CADLLy3bZyhlYo2a5IA1Cwm4waoV7gTxUpo%2FKnRZ1Xk3qvRqnYJmtXnJRlq8M1IS5he1rwX8L%2BFDTF9Jan0hPJtVOrPzvmQmDH457CNUi7Kvfr%2FQ5l9iS%2B9H3%2B6abOgcrlTHk%2FodoLCJlCL%2B4FV10bGCO6Tr8X5smeZRLFsqNGzJJQtsNbnNrlDDOiiLYn7OTQPmr115%2FMTF1UYgwzUI0prY2pb6Z4dnNGLcSFP7nuaaMNQzCeAmHaWuEGPCjbYkzbj4%2BysJ8UMlcFjmwQfCN%2FE7EpQui3zbVUI90QzXCO5wmL4wRx15kns%2FoCUzvEpuf4ZIABAXP%2BM5MtgriuUH0UF3XhLUGuCq%2F0lVh5Bz4RD2wRvcxpm4RZ4k4W9ThVSzg3m5738v7%2Fj5YQYEdADF1q1G4zApWXOLe69VPjm4sds7xg3q4Z5jzaglW3lORCVypePnwt7f76NhQNdG1GJC2c0K4qNM%2BoQTHgQ6SHJveBA1rSQkX%2FYfffTEQzSfaA2khcPp%2BxURsWA4I1u4nQQKG850DRukgH2B5czZmzpewO%2Fq5sYY3VEMMqMxyxMd%2F5VhmqcyoD1QqnGEOQrFheTod%2FCo9kBLNRzDNsEMNi9xb4GOqUBAMeG%2F%2BAGTtM7fsP63WC09kw6aIQruus98MBORHntNYi2bXgS26W3r5WMNVC2Urt0nRwYfDNFrwTHWoDOiuk5XfTHl3ILtn6VpTk%2BKQc%2BGcdV2cgTaXDW2948ACgzYBIx7luSWVa0wFg3qk7TBeqMbrlIoU86GIDLRFOWpUGozCiD1NDBhOY9OOlT00oYmaQCvRu26ZGHz4ICVXdInvfPlKaP%2Blcy&X-Amz-Signature=1ce328fd1904b8a35f60a34cebddac23cca3d46428cd938cf97ccc5175c27dd5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
