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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J6JDQUH%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDdANFlAzk4MM3GfeSIf5%2FTPQGOJsvw1oS7B3w58MYbAiEA3Sl6UjCXi2C20vO0lEnzLWH3hOAb2uXDryLlCbcL%2FtYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBv3ZTVAimAGCyCPircA%2FlMKocFuGgwZ5c7T7WfsBmLAFiGg3TMuvxRu6p3TbwXB1nJAHvJPpqDgmN0FVlcTzN0JgPWi5%2F8ono2dt02aTxQlGKiTaI6vPzrQ3ExWKj1%2BpGXhI1PK35UTOhqecYjDOXyw%2BMj1FmoL%2FfdYOXpK40AWafbjpOwjIG3mfSndOrUf7WeJ5tmOVDyUFrcBJ%2BZWHk25rL7ecZWRMlV36kcBBShiZcigvElWh1j1F4nKfIGUDfJaueRnL50ItIgcipmgtFc9nhqQa2cBiUaTkj3M8z6oIiD9sRVAF2wz%2BubqE%2FCdw1thmDf35Y9rm%2FgagaJhIBHno4hbeFabVWIpAGsLrFzBAffPzbT95zx%2BTWdVDSCPzk1lSO72CnHU3Hgtc8bKW5u49sRaXDfD%2FG2xEsMCAH8nL5aYrHZvLd0ltbCLfddn%2BlF5gXS7XD1iyPlT7Bv20B8Mx5P1XHRa%2BHN%2B2nqUzzLLv6BfJ2S9REsrIKrPqBnRnwDx%2BoCJeUF8P9Yl7e7W4utJEw%2Fs4deXuFmd%2BijgzNlPoCe1aZ6b5IEkhMR0vykOzIbWZUjXKXjfA%2FXZLaIGp6awcs4B3mUwO6Y8SUZxlg0JKu5XrN%2FGW4HjzLEuMM3CJotAnj1iqfKLVIUMODttcEGOqUBTemvxvmi1801Tuia%2F5H%2B0Ujnf1aCSq7Bri058E%2BHYmtrFHGZbi80SMeFb0UsAJHAUc80weQFVxiM1oLh21%2F4%2BUPKzfC0IvKx3a4Ou%2FrihG1pziczO1OB9BxYwfFEqcCfW0ayqimQmIgAVdaYTXS7HGC2TjCWmSq7dB5Fz95XpqC603aLNX6M2%2Fo7JuR8eGgJ%2Fut0BNh7ArEyCHvVJHjvkWZdH7c4&X-Amz-Signature=38bbf3a29aa0663307a15a2c7f293cb02daac11b8e0327b4f538848cc048d534&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J6JDQUH%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDdANFlAzk4MM3GfeSIf5%2FTPQGOJsvw1oS7B3w58MYbAiEA3Sl6UjCXi2C20vO0lEnzLWH3hOAb2uXDryLlCbcL%2FtYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBv3ZTVAimAGCyCPircA%2FlMKocFuGgwZ5c7T7WfsBmLAFiGg3TMuvxRu6p3TbwXB1nJAHvJPpqDgmN0FVlcTzN0JgPWi5%2F8ono2dt02aTxQlGKiTaI6vPzrQ3ExWKj1%2BpGXhI1PK35UTOhqecYjDOXyw%2BMj1FmoL%2FfdYOXpK40AWafbjpOwjIG3mfSndOrUf7WeJ5tmOVDyUFrcBJ%2BZWHk25rL7ecZWRMlV36kcBBShiZcigvElWh1j1F4nKfIGUDfJaueRnL50ItIgcipmgtFc9nhqQa2cBiUaTkj3M8z6oIiD9sRVAF2wz%2BubqE%2FCdw1thmDf35Y9rm%2FgagaJhIBHno4hbeFabVWIpAGsLrFzBAffPzbT95zx%2BTWdVDSCPzk1lSO72CnHU3Hgtc8bKW5u49sRaXDfD%2FG2xEsMCAH8nL5aYrHZvLd0ltbCLfddn%2BlF5gXS7XD1iyPlT7Bv20B8Mx5P1XHRa%2BHN%2B2nqUzzLLv6BfJ2S9REsrIKrPqBnRnwDx%2BoCJeUF8P9Yl7e7W4utJEw%2Fs4deXuFmd%2BijgzNlPoCe1aZ6b5IEkhMR0vykOzIbWZUjXKXjfA%2FXZLaIGp6awcs4B3mUwO6Y8SUZxlg0JKu5XrN%2FGW4HjzLEuMM3CJotAnj1iqfKLVIUMODttcEGOqUBTemvxvmi1801Tuia%2F5H%2B0Ujnf1aCSq7Bri058E%2BHYmtrFHGZbi80SMeFb0UsAJHAUc80weQFVxiM1oLh21%2F4%2BUPKzfC0IvKx3a4Ou%2FrihG1pziczO1OB9BxYwfFEqcCfW0ayqimQmIgAVdaYTXS7HGC2TjCWmSq7dB5Fz95XpqC603aLNX6M2%2Fo7JuR8eGgJ%2Fut0BNh7ArEyCHvVJHjvkWZdH7c4&X-Amz-Signature=9e1cc9ccfcb0c2cc3711bac1e6ee61889a31c434351d38bd7a7333bfd7244113&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J6JDQUH%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDdANFlAzk4MM3GfeSIf5%2FTPQGOJsvw1oS7B3w58MYbAiEA3Sl6UjCXi2C20vO0lEnzLWH3hOAb2uXDryLlCbcL%2FtYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBv3ZTVAimAGCyCPircA%2FlMKocFuGgwZ5c7T7WfsBmLAFiGg3TMuvxRu6p3TbwXB1nJAHvJPpqDgmN0FVlcTzN0JgPWi5%2F8ono2dt02aTxQlGKiTaI6vPzrQ3ExWKj1%2BpGXhI1PK35UTOhqecYjDOXyw%2BMj1FmoL%2FfdYOXpK40AWafbjpOwjIG3mfSndOrUf7WeJ5tmOVDyUFrcBJ%2BZWHk25rL7ecZWRMlV36kcBBShiZcigvElWh1j1F4nKfIGUDfJaueRnL50ItIgcipmgtFc9nhqQa2cBiUaTkj3M8z6oIiD9sRVAF2wz%2BubqE%2FCdw1thmDf35Y9rm%2FgagaJhIBHno4hbeFabVWIpAGsLrFzBAffPzbT95zx%2BTWdVDSCPzk1lSO72CnHU3Hgtc8bKW5u49sRaXDfD%2FG2xEsMCAH8nL5aYrHZvLd0ltbCLfddn%2BlF5gXS7XD1iyPlT7Bv20B8Mx5P1XHRa%2BHN%2B2nqUzzLLv6BfJ2S9REsrIKrPqBnRnwDx%2BoCJeUF8P9Yl7e7W4utJEw%2Fs4deXuFmd%2BijgzNlPoCe1aZ6b5IEkhMR0vykOzIbWZUjXKXjfA%2FXZLaIGp6awcs4B3mUwO6Y8SUZxlg0JKu5XrN%2FGW4HjzLEuMM3CJotAnj1iqfKLVIUMODttcEGOqUBTemvxvmi1801Tuia%2F5H%2B0Ujnf1aCSq7Bri058E%2BHYmtrFHGZbi80SMeFb0UsAJHAUc80weQFVxiM1oLh21%2F4%2BUPKzfC0IvKx3a4Ou%2FrihG1pziczO1OB9BxYwfFEqcCfW0ayqimQmIgAVdaYTXS7HGC2TjCWmSq7dB5Fz95XpqC603aLNX6M2%2Fo7JuR8eGgJ%2Fut0BNh7ArEyCHvVJHjvkWZdH7c4&X-Amz-Signature=aa1feeddc5325c66ef947b191573323e9a935083f0a2d66ffcde8bb8fab7e64b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J6JDQUH%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDdANFlAzk4MM3GfeSIf5%2FTPQGOJsvw1oS7B3w58MYbAiEA3Sl6UjCXi2C20vO0lEnzLWH3hOAb2uXDryLlCbcL%2FtYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBv3ZTVAimAGCyCPircA%2FlMKocFuGgwZ5c7T7WfsBmLAFiGg3TMuvxRu6p3TbwXB1nJAHvJPpqDgmN0FVlcTzN0JgPWi5%2F8ono2dt02aTxQlGKiTaI6vPzrQ3ExWKj1%2BpGXhI1PK35UTOhqecYjDOXyw%2BMj1FmoL%2FfdYOXpK40AWafbjpOwjIG3mfSndOrUf7WeJ5tmOVDyUFrcBJ%2BZWHk25rL7ecZWRMlV36kcBBShiZcigvElWh1j1F4nKfIGUDfJaueRnL50ItIgcipmgtFc9nhqQa2cBiUaTkj3M8z6oIiD9sRVAF2wz%2BubqE%2FCdw1thmDf35Y9rm%2FgagaJhIBHno4hbeFabVWIpAGsLrFzBAffPzbT95zx%2BTWdVDSCPzk1lSO72CnHU3Hgtc8bKW5u49sRaXDfD%2FG2xEsMCAH8nL5aYrHZvLd0ltbCLfddn%2BlF5gXS7XD1iyPlT7Bv20B8Mx5P1XHRa%2BHN%2B2nqUzzLLv6BfJ2S9REsrIKrPqBnRnwDx%2BoCJeUF8P9Yl7e7W4utJEw%2Fs4deXuFmd%2BijgzNlPoCe1aZ6b5IEkhMR0vykOzIbWZUjXKXjfA%2FXZLaIGp6awcs4B3mUwO6Y8SUZxlg0JKu5XrN%2FGW4HjzLEuMM3CJotAnj1iqfKLVIUMODttcEGOqUBTemvxvmi1801Tuia%2F5H%2B0Ujnf1aCSq7Bri058E%2BHYmtrFHGZbi80SMeFb0UsAJHAUc80weQFVxiM1oLh21%2F4%2BUPKzfC0IvKx3a4Ou%2FrihG1pziczO1OB9BxYwfFEqcCfW0ayqimQmIgAVdaYTXS7HGC2TjCWmSq7dB5Fz95XpqC603aLNX6M2%2Fo7JuR8eGgJ%2Fut0BNh7ArEyCHvVJHjvkWZdH7c4&X-Amz-Signature=6cf43d5dd4c2735feebba70d39a61f12cf97dc61b1440ad8349606b63943cf1e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J6JDQUH%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDdANFlAzk4MM3GfeSIf5%2FTPQGOJsvw1oS7B3w58MYbAiEA3Sl6UjCXi2C20vO0lEnzLWH3hOAb2uXDryLlCbcL%2FtYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBv3ZTVAimAGCyCPircA%2FlMKocFuGgwZ5c7T7WfsBmLAFiGg3TMuvxRu6p3TbwXB1nJAHvJPpqDgmN0FVlcTzN0JgPWi5%2F8ono2dt02aTxQlGKiTaI6vPzrQ3ExWKj1%2BpGXhI1PK35UTOhqecYjDOXyw%2BMj1FmoL%2FfdYOXpK40AWafbjpOwjIG3mfSndOrUf7WeJ5tmOVDyUFrcBJ%2BZWHk25rL7ecZWRMlV36kcBBShiZcigvElWh1j1F4nKfIGUDfJaueRnL50ItIgcipmgtFc9nhqQa2cBiUaTkj3M8z6oIiD9sRVAF2wz%2BubqE%2FCdw1thmDf35Y9rm%2FgagaJhIBHno4hbeFabVWIpAGsLrFzBAffPzbT95zx%2BTWdVDSCPzk1lSO72CnHU3Hgtc8bKW5u49sRaXDfD%2FG2xEsMCAH8nL5aYrHZvLd0ltbCLfddn%2BlF5gXS7XD1iyPlT7Bv20B8Mx5P1XHRa%2BHN%2B2nqUzzLLv6BfJ2S9REsrIKrPqBnRnwDx%2BoCJeUF8P9Yl7e7W4utJEw%2Fs4deXuFmd%2BijgzNlPoCe1aZ6b5IEkhMR0vykOzIbWZUjXKXjfA%2FXZLaIGp6awcs4B3mUwO6Y8SUZxlg0JKu5XrN%2FGW4HjzLEuMM3CJotAnj1iqfKLVIUMODttcEGOqUBTemvxvmi1801Tuia%2F5H%2B0Ujnf1aCSq7Bri058E%2BHYmtrFHGZbi80SMeFb0UsAJHAUc80weQFVxiM1oLh21%2F4%2BUPKzfC0IvKx3a4Ou%2FrihG1pziczO1OB9BxYwfFEqcCfW0ayqimQmIgAVdaYTXS7HGC2TjCWmSq7dB5Fz95XpqC603aLNX6M2%2Fo7JuR8eGgJ%2Fut0BNh7ArEyCHvVJHjvkWZdH7c4&X-Amz-Signature=b56e0bbdc465854c5b8f1945ca39419dc1420ef2c431f1668f204b97a87978e4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J6JDQUH%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDdANFlAzk4MM3GfeSIf5%2FTPQGOJsvw1oS7B3w58MYbAiEA3Sl6UjCXi2C20vO0lEnzLWH3hOAb2uXDryLlCbcL%2FtYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBv3ZTVAimAGCyCPircA%2FlMKocFuGgwZ5c7T7WfsBmLAFiGg3TMuvxRu6p3TbwXB1nJAHvJPpqDgmN0FVlcTzN0JgPWi5%2F8ono2dt02aTxQlGKiTaI6vPzrQ3ExWKj1%2BpGXhI1PK35UTOhqecYjDOXyw%2BMj1FmoL%2FfdYOXpK40AWafbjpOwjIG3mfSndOrUf7WeJ5tmOVDyUFrcBJ%2BZWHk25rL7ecZWRMlV36kcBBShiZcigvElWh1j1F4nKfIGUDfJaueRnL50ItIgcipmgtFc9nhqQa2cBiUaTkj3M8z6oIiD9sRVAF2wz%2BubqE%2FCdw1thmDf35Y9rm%2FgagaJhIBHno4hbeFabVWIpAGsLrFzBAffPzbT95zx%2BTWdVDSCPzk1lSO72CnHU3Hgtc8bKW5u49sRaXDfD%2FG2xEsMCAH8nL5aYrHZvLd0ltbCLfddn%2BlF5gXS7XD1iyPlT7Bv20B8Mx5P1XHRa%2BHN%2B2nqUzzLLv6BfJ2S9REsrIKrPqBnRnwDx%2BoCJeUF8P9Yl7e7W4utJEw%2Fs4deXuFmd%2BijgzNlPoCe1aZ6b5IEkhMR0vykOzIbWZUjXKXjfA%2FXZLaIGp6awcs4B3mUwO6Y8SUZxlg0JKu5XrN%2FGW4HjzLEuMM3CJotAnj1iqfKLVIUMODttcEGOqUBTemvxvmi1801Tuia%2F5H%2B0Ujnf1aCSq7Bri058E%2BHYmtrFHGZbi80SMeFb0UsAJHAUc80weQFVxiM1oLh21%2F4%2BUPKzfC0IvKx3a4Ou%2FrihG1pziczO1OB9BxYwfFEqcCfW0ayqimQmIgAVdaYTXS7HGC2TjCWmSq7dB5Fz95XpqC603aLNX6M2%2Fo7JuR8eGgJ%2Fut0BNh7ArEyCHvVJHjvkWZdH7c4&X-Amz-Signature=5577a039806585403091d25e985229dfde9ff8decf23f2692bcb47b79fedfaa4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J6JDQUH%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDdANFlAzk4MM3GfeSIf5%2FTPQGOJsvw1oS7B3w58MYbAiEA3Sl6UjCXi2C20vO0lEnzLWH3hOAb2uXDryLlCbcL%2FtYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBv3ZTVAimAGCyCPircA%2FlMKocFuGgwZ5c7T7WfsBmLAFiGg3TMuvxRu6p3TbwXB1nJAHvJPpqDgmN0FVlcTzN0JgPWi5%2F8ono2dt02aTxQlGKiTaI6vPzrQ3ExWKj1%2BpGXhI1PK35UTOhqecYjDOXyw%2BMj1FmoL%2FfdYOXpK40AWafbjpOwjIG3mfSndOrUf7WeJ5tmOVDyUFrcBJ%2BZWHk25rL7ecZWRMlV36kcBBShiZcigvElWh1j1F4nKfIGUDfJaueRnL50ItIgcipmgtFc9nhqQa2cBiUaTkj3M8z6oIiD9sRVAF2wz%2BubqE%2FCdw1thmDf35Y9rm%2FgagaJhIBHno4hbeFabVWIpAGsLrFzBAffPzbT95zx%2BTWdVDSCPzk1lSO72CnHU3Hgtc8bKW5u49sRaXDfD%2FG2xEsMCAH8nL5aYrHZvLd0ltbCLfddn%2BlF5gXS7XD1iyPlT7Bv20B8Mx5P1XHRa%2BHN%2B2nqUzzLLv6BfJ2S9REsrIKrPqBnRnwDx%2BoCJeUF8P9Yl7e7W4utJEw%2Fs4deXuFmd%2BijgzNlPoCe1aZ6b5IEkhMR0vykOzIbWZUjXKXjfA%2FXZLaIGp6awcs4B3mUwO6Y8SUZxlg0JKu5XrN%2FGW4HjzLEuMM3CJotAnj1iqfKLVIUMODttcEGOqUBTemvxvmi1801Tuia%2F5H%2B0Ujnf1aCSq7Bri058E%2BHYmtrFHGZbi80SMeFb0UsAJHAUc80weQFVxiM1oLh21%2F4%2BUPKzfC0IvKx3a4Ou%2FrihG1pziczO1OB9BxYwfFEqcCfW0ayqimQmIgAVdaYTXS7HGC2TjCWmSq7dB5Fz95XpqC603aLNX6M2%2Fo7JuR8eGgJ%2Fut0BNh7ArEyCHvVJHjvkWZdH7c4&X-Amz-Signature=58ed84ec3339d13130cdc0949634ccc33215d7e2bcaea0030ba3de7df81dcf30&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
