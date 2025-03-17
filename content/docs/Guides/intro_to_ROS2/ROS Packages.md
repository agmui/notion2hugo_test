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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FGBAHPO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICunoMDSgkiwkxKS5aeeu3FtHG32yH90Eh1TpuabQDGPAiEA7%2FFyOe7vnXwkHEMZ5OfsI4z7XRVJj1XjgsQiDyGBUewq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDNl3P1rpn9SsKW4TnircA9cJNmxF2P92K628%2F79j6iIyWE6xlEWzEYMSsEiE9BYnntuxi7ILVO0EllK0s1%2FwHiussCzOzxJLxIayAXyTvNVo9Lt4%2F9uFehJKnDbZhPt3ijj8Cb0KZSWWlGQM9X8JyG7LtiZIsuNryf2XupG2aFYvnfOd8lQ26gscwJPPNpGT%2BTNmBwXt3F5nsPP4p78aAZ2%2B1X5TVk22y8BZbV9M6VAvOZk7lFUwhrzVTtaWwWpPg7TNsrc9koSoHMghN4r4%2F1uslEAU4yQQ%2FYl8pkECbYRxyu2eDzIEQbxkLedrJGyhe89FBVi8BD6EB0iVcEowHQlIvDSo9eIjYMM81sQrD2WRJTmDHNP2QjIsH3gs%2Bcbo69twNLUg2OhCvtEkRgAul9tSPxfQBt5kVvQk0Ae0BW%2BUuyo4U6lEETNw8GH7fs5Z8K8%2F%2BE36UfVQCscoC8WmyHsibyToMdR1IecUq6fVBWPuQhlMB%2BJB%2FbszRk7jigUEE5vj8T6ezeyWZqKzvCfKcWsDMz346MnQ%2B52V1B1O2T%2Fc4W2sRjozTsYPht3N9OEDfjnzg%2Bc4T9%2FSAXqHxjBBTxAfO6RQkOo27wW6gHFoA0LVgFV4QEB%2F8o4tfIWFIRi%2B1ryT9gNrd63GksvNMMbF4b4GOqUBBI%2B0bwRid%2F%2FIX71xOyQJYQSlKFMZpNvJV0AxGrJ0rJyWsV2xepkrgxj43NDvjwgbGlXe7w%2BzHsU5bP40BnM%2BtY9SoUvl%2FggneTvGy86xt8LIrxqeeZXWCTRe7PzUuSWhP9HDDmxW8cyVp%2BXHWIqFENVp5Y6a26zQY6yWT87BwD2FMqurt4fdk40JJDX7NLNcsWNC8eHohp0RuWVh7WRRcBByAEYi&X-Amz-Signature=874bcc90e59982abb8d8556b45dc2d30aac977dc87f3e91e4f4b13273448c46f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FGBAHPO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICunoMDSgkiwkxKS5aeeu3FtHG32yH90Eh1TpuabQDGPAiEA7%2FFyOe7vnXwkHEMZ5OfsI4z7XRVJj1XjgsQiDyGBUewq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDNl3P1rpn9SsKW4TnircA9cJNmxF2P92K628%2F79j6iIyWE6xlEWzEYMSsEiE9BYnntuxi7ILVO0EllK0s1%2FwHiussCzOzxJLxIayAXyTvNVo9Lt4%2F9uFehJKnDbZhPt3ijj8Cb0KZSWWlGQM9X8JyG7LtiZIsuNryf2XupG2aFYvnfOd8lQ26gscwJPPNpGT%2BTNmBwXt3F5nsPP4p78aAZ2%2B1X5TVk22y8BZbV9M6VAvOZk7lFUwhrzVTtaWwWpPg7TNsrc9koSoHMghN4r4%2F1uslEAU4yQQ%2FYl8pkECbYRxyu2eDzIEQbxkLedrJGyhe89FBVi8BD6EB0iVcEowHQlIvDSo9eIjYMM81sQrD2WRJTmDHNP2QjIsH3gs%2Bcbo69twNLUg2OhCvtEkRgAul9tSPxfQBt5kVvQk0Ae0BW%2BUuyo4U6lEETNw8GH7fs5Z8K8%2F%2BE36UfVQCscoC8WmyHsibyToMdR1IecUq6fVBWPuQhlMB%2BJB%2FbszRk7jigUEE5vj8T6ezeyWZqKzvCfKcWsDMz346MnQ%2B52V1B1O2T%2Fc4W2sRjozTsYPht3N9OEDfjnzg%2Bc4T9%2FSAXqHxjBBTxAfO6RQkOo27wW6gHFoA0LVgFV4QEB%2F8o4tfIWFIRi%2B1ryT9gNrd63GksvNMMbF4b4GOqUBBI%2B0bwRid%2F%2FIX71xOyQJYQSlKFMZpNvJV0AxGrJ0rJyWsV2xepkrgxj43NDvjwgbGlXe7w%2BzHsU5bP40BnM%2BtY9SoUvl%2FggneTvGy86xt8LIrxqeeZXWCTRe7PzUuSWhP9HDDmxW8cyVp%2BXHWIqFENVp5Y6a26zQY6yWT87BwD2FMqurt4fdk40JJDX7NLNcsWNC8eHohp0RuWVh7WRRcBByAEYi&X-Amz-Signature=a8571d62d398c0afa95e409da160b72abc5961467e7173d001f87040724c7f00&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FGBAHPO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICunoMDSgkiwkxKS5aeeu3FtHG32yH90Eh1TpuabQDGPAiEA7%2FFyOe7vnXwkHEMZ5OfsI4z7XRVJj1XjgsQiDyGBUewq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDNl3P1rpn9SsKW4TnircA9cJNmxF2P92K628%2F79j6iIyWE6xlEWzEYMSsEiE9BYnntuxi7ILVO0EllK0s1%2FwHiussCzOzxJLxIayAXyTvNVo9Lt4%2F9uFehJKnDbZhPt3ijj8Cb0KZSWWlGQM9X8JyG7LtiZIsuNryf2XupG2aFYvnfOd8lQ26gscwJPPNpGT%2BTNmBwXt3F5nsPP4p78aAZ2%2B1X5TVk22y8BZbV9M6VAvOZk7lFUwhrzVTtaWwWpPg7TNsrc9koSoHMghN4r4%2F1uslEAU4yQQ%2FYl8pkECbYRxyu2eDzIEQbxkLedrJGyhe89FBVi8BD6EB0iVcEowHQlIvDSo9eIjYMM81sQrD2WRJTmDHNP2QjIsH3gs%2Bcbo69twNLUg2OhCvtEkRgAul9tSPxfQBt5kVvQk0Ae0BW%2BUuyo4U6lEETNw8GH7fs5Z8K8%2F%2BE36UfVQCscoC8WmyHsibyToMdR1IecUq6fVBWPuQhlMB%2BJB%2FbszRk7jigUEE5vj8T6ezeyWZqKzvCfKcWsDMz346MnQ%2B52V1B1O2T%2Fc4W2sRjozTsYPht3N9OEDfjnzg%2Bc4T9%2FSAXqHxjBBTxAfO6RQkOo27wW6gHFoA0LVgFV4QEB%2F8o4tfIWFIRi%2B1ryT9gNrd63GksvNMMbF4b4GOqUBBI%2B0bwRid%2F%2FIX71xOyQJYQSlKFMZpNvJV0AxGrJ0rJyWsV2xepkrgxj43NDvjwgbGlXe7w%2BzHsU5bP40BnM%2BtY9SoUvl%2FggneTvGy86xt8LIrxqeeZXWCTRe7PzUuSWhP9HDDmxW8cyVp%2BXHWIqFENVp5Y6a26zQY6yWT87BwD2FMqurt4fdk40JJDX7NLNcsWNC8eHohp0RuWVh7WRRcBByAEYi&X-Amz-Signature=7068d657937d85b10934e45c80f39718b015306ebe2914a96525d372e422c1be&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FGBAHPO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICunoMDSgkiwkxKS5aeeu3FtHG32yH90Eh1TpuabQDGPAiEA7%2FFyOe7vnXwkHEMZ5OfsI4z7XRVJj1XjgsQiDyGBUewq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDNl3P1rpn9SsKW4TnircA9cJNmxF2P92K628%2F79j6iIyWE6xlEWzEYMSsEiE9BYnntuxi7ILVO0EllK0s1%2FwHiussCzOzxJLxIayAXyTvNVo9Lt4%2F9uFehJKnDbZhPt3ijj8Cb0KZSWWlGQM9X8JyG7LtiZIsuNryf2XupG2aFYvnfOd8lQ26gscwJPPNpGT%2BTNmBwXt3F5nsPP4p78aAZ2%2B1X5TVk22y8BZbV9M6VAvOZk7lFUwhrzVTtaWwWpPg7TNsrc9koSoHMghN4r4%2F1uslEAU4yQQ%2FYl8pkECbYRxyu2eDzIEQbxkLedrJGyhe89FBVi8BD6EB0iVcEowHQlIvDSo9eIjYMM81sQrD2WRJTmDHNP2QjIsH3gs%2Bcbo69twNLUg2OhCvtEkRgAul9tSPxfQBt5kVvQk0Ae0BW%2BUuyo4U6lEETNw8GH7fs5Z8K8%2F%2BE36UfVQCscoC8WmyHsibyToMdR1IecUq6fVBWPuQhlMB%2BJB%2FbszRk7jigUEE5vj8T6ezeyWZqKzvCfKcWsDMz346MnQ%2B52V1B1O2T%2Fc4W2sRjozTsYPht3N9OEDfjnzg%2Bc4T9%2FSAXqHxjBBTxAfO6RQkOo27wW6gHFoA0LVgFV4QEB%2F8o4tfIWFIRi%2B1ryT9gNrd63GksvNMMbF4b4GOqUBBI%2B0bwRid%2F%2FIX71xOyQJYQSlKFMZpNvJV0AxGrJ0rJyWsV2xepkrgxj43NDvjwgbGlXe7w%2BzHsU5bP40BnM%2BtY9SoUvl%2FggneTvGy86xt8LIrxqeeZXWCTRe7PzUuSWhP9HDDmxW8cyVp%2BXHWIqFENVp5Y6a26zQY6yWT87BwD2FMqurt4fdk40JJDX7NLNcsWNC8eHohp0RuWVh7WRRcBByAEYi&X-Amz-Signature=67923d9f26b17866fd07ccd5c379262a1c8b5ff1d4410a58def91e618e08a6b3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FGBAHPO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICunoMDSgkiwkxKS5aeeu3FtHG32yH90Eh1TpuabQDGPAiEA7%2FFyOe7vnXwkHEMZ5OfsI4z7XRVJj1XjgsQiDyGBUewq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDNl3P1rpn9SsKW4TnircA9cJNmxF2P92K628%2F79j6iIyWE6xlEWzEYMSsEiE9BYnntuxi7ILVO0EllK0s1%2FwHiussCzOzxJLxIayAXyTvNVo9Lt4%2F9uFehJKnDbZhPt3ijj8Cb0KZSWWlGQM9X8JyG7LtiZIsuNryf2XupG2aFYvnfOd8lQ26gscwJPPNpGT%2BTNmBwXt3F5nsPP4p78aAZ2%2B1X5TVk22y8BZbV9M6VAvOZk7lFUwhrzVTtaWwWpPg7TNsrc9koSoHMghN4r4%2F1uslEAU4yQQ%2FYl8pkECbYRxyu2eDzIEQbxkLedrJGyhe89FBVi8BD6EB0iVcEowHQlIvDSo9eIjYMM81sQrD2WRJTmDHNP2QjIsH3gs%2Bcbo69twNLUg2OhCvtEkRgAul9tSPxfQBt5kVvQk0Ae0BW%2BUuyo4U6lEETNw8GH7fs5Z8K8%2F%2BE36UfVQCscoC8WmyHsibyToMdR1IecUq6fVBWPuQhlMB%2BJB%2FbszRk7jigUEE5vj8T6ezeyWZqKzvCfKcWsDMz346MnQ%2B52V1B1O2T%2Fc4W2sRjozTsYPht3N9OEDfjnzg%2Bc4T9%2FSAXqHxjBBTxAfO6RQkOo27wW6gHFoA0LVgFV4QEB%2F8o4tfIWFIRi%2B1ryT9gNrd63GksvNMMbF4b4GOqUBBI%2B0bwRid%2F%2FIX71xOyQJYQSlKFMZpNvJV0AxGrJ0rJyWsV2xepkrgxj43NDvjwgbGlXe7w%2BzHsU5bP40BnM%2BtY9SoUvl%2FggneTvGy86xt8LIrxqeeZXWCTRe7PzUuSWhP9HDDmxW8cyVp%2BXHWIqFENVp5Y6a26zQY6yWT87BwD2FMqurt4fdk40JJDX7NLNcsWNC8eHohp0RuWVh7WRRcBByAEYi&X-Amz-Signature=2d14a57e0bf0fd283a15eccf281bf66342f61a23ae726c86157f079fa3774a8c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FGBAHPO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICunoMDSgkiwkxKS5aeeu3FtHG32yH90Eh1TpuabQDGPAiEA7%2FFyOe7vnXwkHEMZ5OfsI4z7XRVJj1XjgsQiDyGBUewq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDNl3P1rpn9SsKW4TnircA9cJNmxF2P92K628%2F79j6iIyWE6xlEWzEYMSsEiE9BYnntuxi7ILVO0EllK0s1%2FwHiussCzOzxJLxIayAXyTvNVo9Lt4%2F9uFehJKnDbZhPt3ijj8Cb0KZSWWlGQM9X8JyG7LtiZIsuNryf2XupG2aFYvnfOd8lQ26gscwJPPNpGT%2BTNmBwXt3F5nsPP4p78aAZ2%2B1X5TVk22y8BZbV9M6VAvOZk7lFUwhrzVTtaWwWpPg7TNsrc9koSoHMghN4r4%2F1uslEAU4yQQ%2FYl8pkECbYRxyu2eDzIEQbxkLedrJGyhe89FBVi8BD6EB0iVcEowHQlIvDSo9eIjYMM81sQrD2WRJTmDHNP2QjIsH3gs%2Bcbo69twNLUg2OhCvtEkRgAul9tSPxfQBt5kVvQk0Ae0BW%2BUuyo4U6lEETNw8GH7fs5Z8K8%2F%2BE36UfVQCscoC8WmyHsibyToMdR1IecUq6fVBWPuQhlMB%2BJB%2FbszRk7jigUEE5vj8T6ezeyWZqKzvCfKcWsDMz346MnQ%2B52V1B1O2T%2Fc4W2sRjozTsYPht3N9OEDfjnzg%2Bc4T9%2FSAXqHxjBBTxAfO6RQkOo27wW6gHFoA0LVgFV4QEB%2F8o4tfIWFIRi%2B1ryT9gNrd63GksvNMMbF4b4GOqUBBI%2B0bwRid%2F%2FIX71xOyQJYQSlKFMZpNvJV0AxGrJ0rJyWsV2xepkrgxj43NDvjwgbGlXe7w%2BzHsU5bP40BnM%2BtY9SoUvl%2FggneTvGy86xt8LIrxqeeZXWCTRe7PzUuSWhP9HDDmxW8cyVp%2BXHWIqFENVp5Y6a26zQY6yWT87BwD2FMqurt4fdk40JJDX7NLNcsWNC8eHohp0RuWVh7WRRcBByAEYi&X-Amz-Signature=ea1c2a508f778acb57603553f85eae01f30b199244a9ee8705226fcec2d010f0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FGBAHPO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICunoMDSgkiwkxKS5aeeu3FtHG32yH90Eh1TpuabQDGPAiEA7%2FFyOe7vnXwkHEMZ5OfsI4z7XRVJj1XjgsQiDyGBUewq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDNl3P1rpn9SsKW4TnircA9cJNmxF2P92K628%2F79j6iIyWE6xlEWzEYMSsEiE9BYnntuxi7ILVO0EllK0s1%2FwHiussCzOzxJLxIayAXyTvNVo9Lt4%2F9uFehJKnDbZhPt3ijj8Cb0KZSWWlGQM9X8JyG7LtiZIsuNryf2XupG2aFYvnfOd8lQ26gscwJPPNpGT%2BTNmBwXt3F5nsPP4p78aAZ2%2B1X5TVk22y8BZbV9M6VAvOZk7lFUwhrzVTtaWwWpPg7TNsrc9koSoHMghN4r4%2F1uslEAU4yQQ%2FYl8pkECbYRxyu2eDzIEQbxkLedrJGyhe89FBVi8BD6EB0iVcEowHQlIvDSo9eIjYMM81sQrD2WRJTmDHNP2QjIsH3gs%2Bcbo69twNLUg2OhCvtEkRgAul9tSPxfQBt5kVvQk0Ae0BW%2BUuyo4U6lEETNw8GH7fs5Z8K8%2F%2BE36UfVQCscoC8WmyHsibyToMdR1IecUq6fVBWPuQhlMB%2BJB%2FbszRk7jigUEE5vj8T6ezeyWZqKzvCfKcWsDMz346MnQ%2B52V1B1O2T%2Fc4W2sRjozTsYPht3N9OEDfjnzg%2Bc4T9%2FSAXqHxjBBTxAfO6RQkOo27wW6gHFoA0LVgFV4QEB%2F8o4tfIWFIRi%2B1ryT9gNrd63GksvNMMbF4b4GOqUBBI%2B0bwRid%2F%2FIX71xOyQJYQSlKFMZpNvJV0AxGrJ0rJyWsV2xepkrgxj43NDvjwgbGlXe7w%2BzHsU5bP40BnM%2BtY9SoUvl%2FggneTvGy86xt8LIrxqeeZXWCTRe7PzUuSWhP9HDDmxW8cyVp%2BXHWIqFENVp5Y6a26zQY6yWT87BwD2FMqurt4fdk40JJDX7NLNcsWNC8eHohp0RuWVh7WRRcBByAEYi&X-Amz-Signature=7a75958ce046066e45c8a2791ecbcf238600b95550281599583e2f1c0945b657&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
