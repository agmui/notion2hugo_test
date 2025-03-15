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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQAKBQ2D%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8w0l6FpSRE3oQ4Pvza0mMzPtNyddeZVlho0hyMmtnrAiEArl2yTo4o%2BeXpurVOgySPB4zFSFMyKcB6qBz1QKUcAXcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDA%2BdhU8tSx3HMrDnOSrcAxXUb4HeI%2BCTrY9TdYTSI9IDhuAVIQlYUt2mZq%2FwNaKTtxIs%2FV6dPHqbekjv%2Fivh0TbdUi%2FvD7k%2B6MlaifxUnur7kj%2B8%2Br27muqn%2F6iY1vPd9H2AbnH78Cf7RznGv9qXs4I9z%2BqTctOd0QlcnN3NlD5hgiKBiyv58tjtSISHHTv5kZFYJi%2F53xK%2FmA%2BxvgqoXVpdYBwwLiawiKdeG9TAssyN24kDHf1IQc%2By7r7H5p1hldFehWx9kum42%2F%2F05BLLQ9Kud7fp1LBejvaaipdnwFMQjgoCQt6y0bUn30Y7dJd8KqeG4j4KYP36z7QWo9OXC0JjsU%2BNsS%2B6b5z%2BkaqBbCSoJKZA6dZnGK1%2BX22PT34ghIUsf%2FKla1B79Sb6ieHoU9T15CPlVthQCd1gOhq7YtMDIn4wISNPbNT3N6HUCXu0%2FPzUHp9NrM0cIEvZ%2FYXJook8Heg7bdR2F6RWjwVuZP19heeR2E624fF8tOzh0KkxCK75PaVP02YHbDNjCh76hReuLB6ztUQsWc4UQgNShvDWo25yF5XZVhDcSfGOzIKiJEbR8MPYCy0gnpC6tn6Et1jXiTmA9jTSR6lkotzl21e8TMhPV0VMg4fdB0NYqEaq7mYNX16H9RAG3jQdMI%2Fv1b4GOqUBX%2B34ELS0NWGwvcDPdCLyXn6iF88H42FwuWh6mEFqdmTlVE532Mj7BJ6Nl2ioFKU8SFtQvT5q11eKUTawUmh1CnSf3qane8rvWInl%2FBW%2BLcMJ0H%2BlALezsmAW5z24iw8pVjpeEJB11BpLwWBY%2Fb2Zw0g0TSHuMgYiFaX5ZYLCKiQxTSt7tf0ZYTVhgR23OU%2FhsYLtpG9KsFsMv5OpPuMgf26toaQy&X-Amz-Signature=a3ac90c6ff9ac261e894c76b2891a53b9388e36ce9bf2c0b4d7153cc8a23e443&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQAKBQ2D%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8w0l6FpSRE3oQ4Pvza0mMzPtNyddeZVlho0hyMmtnrAiEArl2yTo4o%2BeXpurVOgySPB4zFSFMyKcB6qBz1QKUcAXcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDA%2BdhU8tSx3HMrDnOSrcAxXUb4HeI%2BCTrY9TdYTSI9IDhuAVIQlYUt2mZq%2FwNaKTtxIs%2FV6dPHqbekjv%2Fivh0TbdUi%2FvD7k%2B6MlaifxUnur7kj%2B8%2Br27muqn%2F6iY1vPd9H2AbnH78Cf7RznGv9qXs4I9z%2BqTctOd0QlcnN3NlD5hgiKBiyv58tjtSISHHTv5kZFYJi%2F53xK%2FmA%2BxvgqoXVpdYBwwLiawiKdeG9TAssyN24kDHf1IQc%2By7r7H5p1hldFehWx9kum42%2F%2F05BLLQ9Kud7fp1LBejvaaipdnwFMQjgoCQt6y0bUn30Y7dJd8KqeG4j4KYP36z7QWo9OXC0JjsU%2BNsS%2B6b5z%2BkaqBbCSoJKZA6dZnGK1%2BX22PT34ghIUsf%2FKla1B79Sb6ieHoU9T15CPlVthQCd1gOhq7YtMDIn4wISNPbNT3N6HUCXu0%2FPzUHp9NrM0cIEvZ%2FYXJook8Heg7bdR2F6RWjwVuZP19heeR2E624fF8tOzh0KkxCK75PaVP02YHbDNjCh76hReuLB6ztUQsWc4UQgNShvDWo25yF5XZVhDcSfGOzIKiJEbR8MPYCy0gnpC6tn6Et1jXiTmA9jTSR6lkotzl21e8TMhPV0VMg4fdB0NYqEaq7mYNX16H9RAG3jQdMI%2Fv1b4GOqUBX%2B34ELS0NWGwvcDPdCLyXn6iF88H42FwuWh6mEFqdmTlVE532Mj7BJ6Nl2ioFKU8SFtQvT5q11eKUTawUmh1CnSf3qane8rvWInl%2FBW%2BLcMJ0H%2BlALezsmAW5z24iw8pVjpeEJB11BpLwWBY%2Fb2Zw0g0TSHuMgYiFaX5ZYLCKiQxTSt7tf0ZYTVhgR23OU%2FhsYLtpG9KsFsMv5OpPuMgf26toaQy&X-Amz-Signature=b4b41f3a0162138256c8cdf2d0ff37e86ef7b25189b3b06c1186910fecbb3411&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQAKBQ2D%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8w0l6FpSRE3oQ4Pvza0mMzPtNyddeZVlho0hyMmtnrAiEArl2yTo4o%2BeXpurVOgySPB4zFSFMyKcB6qBz1QKUcAXcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDA%2BdhU8tSx3HMrDnOSrcAxXUb4HeI%2BCTrY9TdYTSI9IDhuAVIQlYUt2mZq%2FwNaKTtxIs%2FV6dPHqbekjv%2Fivh0TbdUi%2FvD7k%2B6MlaifxUnur7kj%2B8%2Br27muqn%2F6iY1vPd9H2AbnH78Cf7RznGv9qXs4I9z%2BqTctOd0QlcnN3NlD5hgiKBiyv58tjtSISHHTv5kZFYJi%2F53xK%2FmA%2BxvgqoXVpdYBwwLiawiKdeG9TAssyN24kDHf1IQc%2By7r7H5p1hldFehWx9kum42%2F%2F05BLLQ9Kud7fp1LBejvaaipdnwFMQjgoCQt6y0bUn30Y7dJd8KqeG4j4KYP36z7QWo9OXC0JjsU%2BNsS%2B6b5z%2BkaqBbCSoJKZA6dZnGK1%2BX22PT34ghIUsf%2FKla1B79Sb6ieHoU9T15CPlVthQCd1gOhq7YtMDIn4wISNPbNT3N6HUCXu0%2FPzUHp9NrM0cIEvZ%2FYXJook8Heg7bdR2F6RWjwVuZP19heeR2E624fF8tOzh0KkxCK75PaVP02YHbDNjCh76hReuLB6ztUQsWc4UQgNShvDWo25yF5XZVhDcSfGOzIKiJEbR8MPYCy0gnpC6tn6Et1jXiTmA9jTSR6lkotzl21e8TMhPV0VMg4fdB0NYqEaq7mYNX16H9RAG3jQdMI%2Fv1b4GOqUBX%2B34ELS0NWGwvcDPdCLyXn6iF88H42FwuWh6mEFqdmTlVE532Mj7BJ6Nl2ioFKU8SFtQvT5q11eKUTawUmh1CnSf3qane8rvWInl%2FBW%2BLcMJ0H%2BlALezsmAW5z24iw8pVjpeEJB11BpLwWBY%2Fb2Zw0g0TSHuMgYiFaX5ZYLCKiQxTSt7tf0ZYTVhgR23OU%2FhsYLtpG9KsFsMv5OpPuMgf26toaQy&X-Amz-Signature=16dc91197e5d056623f85a0ab949c7e03ab764b83347e06525f68961169eadf8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQAKBQ2D%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8w0l6FpSRE3oQ4Pvza0mMzPtNyddeZVlho0hyMmtnrAiEArl2yTo4o%2BeXpurVOgySPB4zFSFMyKcB6qBz1QKUcAXcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDA%2BdhU8tSx3HMrDnOSrcAxXUb4HeI%2BCTrY9TdYTSI9IDhuAVIQlYUt2mZq%2FwNaKTtxIs%2FV6dPHqbekjv%2Fivh0TbdUi%2FvD7k%2B6MlaifxUnur7kj%2B8%2Br27muqn%2F6iY1vPd9H2AbnH78Cf7RznGv9qXs4I9z%2BqTctOd0QlcnN3NlD5hgiKBiyv58tjtSISHHTv5kZFYJi%2F53xK%2FmA%2BxvgqoXVpdYBwwLiawiKdeG9TAssyN24kDHf1IQc%2By7r7H5p1hldFehWx9kum42%2F%2F05BLLQ9Kud7fp1LBejvaaipdnwFMQjgoCQt6y0bUn30Y7dJd8KqeG4j4KYP36z7QWo9OXC0JjsU%2BNsS%2B6b5z%2BkaqBbCSoJKZA6dZnGK1%2BX22PT34ghIUsf%2FKla1B79Sb6ieHoU9T15CPlVthQCd1gOhq7YtMDIn4wISNPbNT3N6HUCXu0%2FPzUHp9NrM0cIEvZ%2FYXJook8Heg7bdR2F6RWjwVuZP19heeR2E624fF8tOzh0KkxCK75PaVP02YHbDNjCh76hReuLB6ztUQsWc4UQgNShvDWo25yF5XZVhDcSfGOzIKiJEbR8MPYCy0gnpC6tn6Et1jXiTmA9jTSR6lkotzl21e8TMhPV0VMg4fdB0NYqEaq7mYNX16H9RAG3jQdMI%2Fv1b4GOqUBX%2B34ELS0NWGwvcDPdCLyXn6iF88H42FwuWh6mEFqdmTlVE532Mj7BJ6Nl2ioFKU8SFtQvT5q11eKUTawUmh1CnSf3qane8rvWInl%2FBW%2BLcMJ0H%2BlALezsmAW5z24iw8pVjpeEJB11BpLwWBY%2Fb2Zw0g0TSHuMgYiFaX5ZYLCKiQxTSt7tf0ZYTVhgR23OU%2FhsYLtpG9KsFsMv5OpPuMgf26toaQy&X-Amz-Signature=93c29ec92c089e574b0d23ef5202e87154cdcf6581c7a7c56a4b11d3317f71d5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQAKBQ2D%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8w0l6FpSRE3oQ4Pvza0mMzPtNyddeZVlho0hyMmtnrAiEArl2yTo4o%2BeXpurVOgySPB4zFSFMyKcB6qBz1QKUcAXcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDA%2BdhU8tSx3HMrDnOSrcAxXUb4HeI%2BCTrY9TdYTSI9IDhuAVIQlYUt2mZq%2FwNaKTtxIs%2FV6dPHqbekjv%2Fivh0TbdUi%2FvD7k%2B6MlaifxUnur7kj%2B8%2Br27muqn%2F6iY1vPd9H2AbnH78Cf7RznGv9qXs4I9z%2BqTctOd0QlcnN3NlD5hgiKBiyv58tjtSISHHTv5kZFYJi%2F53xK%2FmA%2BxvgqoXVpdYBwwLiawiKdeG9TAssyN24kDHf1IQc%2By7r7H5p1hldFehWx9kum42%2F%2F05BLLQ9Kud7fp1LBejvaaipdnwFMQjgoCQt6y0bUn30Y7dJd8KqeG4j4KYP36z7QWo9OXC0JjsU%2BNsS%2B6b5z%2BkaqBbCSoJKZA6dZnGK1%2BX22PT34ghIUsf%2FKla1B79Sb6ieHoU9T15CPlVthQCd1gOhq7YtMDIn4wISNPbNT3N6HUCXu0%2FPzUHp9NrM0cIEvZ%2FYXJook8Heg7bdR2F6RWjwVuZP19heeR2E624fF8tOzh0KkxCK75PaVP02YHbDNjCh76hReuLB6ztUQsWc4UQgNShvDWo25yF5XZVhDcSfGOzIKiJEbR8MPYCy0gnpC6tn6Et1jXiTmA9jTSR6lkotzl21e8TMhPV0VMg4fdB0NYqEaq7mYNX16H9RAG3jQdMI%2Fv1b4GOqUBX%2B34ELS0NWGwvcDPdCLyXn6iF88H42FwuWh6mEFqdmTlVE532Mj7BJ6Nl2ioFKU8SFtQvT5q11eKUTawUmh1CnSf3qane8rvWInl%2FBW%2BLcMJ0H%2BlALezsmAW5z24iw8pVjpeEJB11BpLwWBY%2Fb2Zw0g0TSHuMgYiFaX5ZYLCKiQxTSt7tf0ZYTVhgR23OU%2FhsYLtpG9KsFsMv5OpPuMgf26toaQy&X-Amz-Signature=e3f60bc8d8a1d3994536acc81374dd7a8ec38a7d9ce33a2de4908ae7dc89f64c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQAKBQ2D%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8w0l6FpSRE3oQ4Pvza0mMzPtNyddeZVlho0hyMmtnrAiEArl2yTo4o%2BeXpurVOgySPB4zFSFMyKcB6qBz1QKUcAXcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDA%2BdhU8tSx3HMrDnOSrcAxXUb4HeI%2BCTrY9TdYTSI9IDhuAVIQlYUt2mZq%2FwNaKTtxIs%2FV6dPHqbekjv%2Fivh0TbdUi%2FvD7k%2B6MlaifxUnur7kj%2B8%2Br27muqn%2F6iY1vPd9H2AbnH78Cf7RznGv9qXs4I9z%2BqTctOd0QlcnN3NlD5hgiKBiyv58tjtSISHHTv5kZFYJi%2F53xK%2FmA%2BxvgqoXVpdYBwwLiawiKdeG9TAssyN24kDHf1IQc%2By7r7H5p1hldFehWx9kum42%2F%2F05BLLQ9Kud7fp1LBejvaaipdnwFMQjgoCQt6y0bUn30Y7dJd8KqeG4j4KYP36z7QWo9OXC0JjsU%2BNsS%2B6b5z%2BkaqBbCSoJKZA6dZnGK1%2BX22PT34ghIUsf%2FKla1B79Sb6ieHoU9T15CPlVthQCd1gOhq7YtMDIn4wISNPbNT3N6HUCXu0%2FPzUHp9NrM0cIEvZ%2FYXJook8Heg7bdR2F6RWjwVuZP19heeR2E624fF8tOzh0KkxCK75PaVP02YHbDNjCh76hReuLB6ztUQsWc4UQgNShvDWo25yF5XZVhDcSfGOzIKiJEbR8MPYCy0gnpC6tn6Et1jXiTmA9jTSR6lkotzl21e8TMhPV0VMg4fdB0NYqEaq7mYNX16H9RAG3jQdMI%2Fv1b4GOqUBX%2B34ELS0NWGwvcDPdCLyXn6iF88H42FwuWh6mEFqdmTlVE532Mj7BJ6Nl2ioFKU8SFtQvT5q11eKUTawUmh1CnSf3qane8rvWInl%2FBW%2BLcMJ0H%2BlALezsmAW5z24iw8pVjpeEJB11BpLwWBY%2Fb2Zw0g0TSHuMgYiFaX5ZYLCKiQxTSt7tf0ZYTVhgR23OU%2FhsYLtpG9KsFsMv5OpPuMgf26toaQy&X-Amz-Signature=b624698092c4e271188a46c96c3f08bc9e09a6fe926ee3b9ec2cdf5e74bdc557&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQAKBQ2D%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8w0l6FpSRE3oQ4Pvza0mMzPtNyddeZVlho0hyMmtnrAiEArl2yTo4o%2BeXpurVOgySPB4zFSFMyKcB6qBz1QKUcAXcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDA%2BdhU8tSx3HMrDnOSrcAxXUb4HeI%2BCTrY9TdYTSI9IDhuAVIQlYUt2mZq%2FwNaKTtxIs%2FV6dPHqbekjv%2Fivh0TbdUi%2FvD7k%2B6MlaifxUnur7kj%2B8%2Br27muqn%2F6iY1vPd9H2AbnH78Cf7RznGv9qXs4I9z%2BqTctOd0QlcnN3NlD5hgiKBiyv58tjtSISHHTv5kZFYJi%2F53xK%2FmA%2BxvgqoXVpdYBwwLiawiKdeG9TAssyN24kDHf1IQc%2By7r7H5p1hldFehWx9kum42%2F%2F05BLLQ9Kud7fp1LBejvaaipdnwFMQjgoCQt6y0bUn30Y7dJd8KqeG4j4KYP36z7QWo9OXC0JjsU%2BNsS%2B6b5z%2BkaqBbCSoJKZA6dZnGK1%2BX22PT34ghIUsf%2FKla1B79Sb6ieHoU9T15CPlVthQCd1gOhq7YtMDIn4wISNPbNT3N6HUCXu0%2FPzUHp9NrM0cIEvZ%2FYXJook8Heg7bdR2F6RWjwVuZP19heeR2E624fF8tOzh0KkxCK75PaVP02YHbDNjCh76hReuLB6ztUQsWc4UQgNShvDWo25yF5XZVhDcSfGOzIKiJEbR8MPYCy0gnpC6tn6Et1jXiTmA9jTSR6lkotzl21e8TMhPV0VMg4fdB0NYqEaq7mYNX16H9RAG3jQdMI%2Fv1b4GOqUBX%2B34ELS0NWGwvcDPdCLyXn6iF88H42FwuWh6mEFqdmTlVE532Mj7BJ6Nl2ioFKU8SFtQvT5q11eKUTawUmh1CnSf3qane8rvWInl%2FBW%2BLcMJ0H%2BlALezsmAW5z24iw8pVjpeEJB11BpLwWBY%2Fb2Zw0g0TSHuMgYiFaX5ZYLCKiQxTSt7tf0ZYTVhgR23OU%2FhsYLtpG9KsFsMv5OpPuMgf26toaQy&X-Amz-Signature=4a6898093f0bd32b2480b712f47e9f59ee334a665fb547c2a0817a62ed7472c2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
