---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR4VLWUC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCVucCk5o5boAFuRms4KFqKPp9I08FoejPuc6tYpNptlgIhAJ0Wq0JC3j9ypEeLpgUfzcKii3BNjmsDc3u44Cr%2FE1Q1Kv8DCFAQABoMNjM3NDIzMTgzODA1IgwybKTmJk1zSFlI878q3ANN1gB2PMhV1Fs5j%2B9eFRy79d7JUI3YzFa1zPyKsSFwDNGGpilQGJknUWrG2SDoDs%2B693gh1vC8Oq0ZYmPBWq0WT1Gn9%2FLhRlGCT9HayjuMCzcUMzBRXIlBc%2F5WA9VBnvdwpBbvw%2BUq2kmPw30sJNvBdsl1QypEPZVQxtqtkIo7Dn%2F%2Fqjdr2Gg3nY%2Byb6Rc5N6Jt407OffE3LLcknQM4154BEjx6T5FuFL0ijb9btrDAyKQYEif4KdrycKcjNG1BHu3gGtY8XObNhFTFjtKBZqb6i9hJekpF3X0MMuLrriPgGKvP1ycVA7S%2B8%2BmnenjDfrTJiPBfIf6JEHP0sT4ZYjov%2B74MY1uEBY2eGTZ63CeCRuu2bvdsAZ1gzT%2FrhvwDEVI88HaDlIeKTQtPh2KTjwyaUJ%2BVSS%2Bn5jHNK7AJSv6axxfBX%2BIkHw3QokgBuo2QE8aCB11KyZ3puOiZ%2BzB568ehWmiwKczU5vevH6LsqVdQ0LuBzv89pwxURrmBa%2BtwkZ5uxUlT%2B3e9Ul9q6fgc69E%2FP6osiKv%2FHaI2Ze06rCyO%2BzUJepoi1uSfQr5aMzYbhFQ0Nk61WiJPvVKep%2BYBegpb5U8eQUCn0udhz%2BRG1HSwi4tNhHI4WgrbaS7UTD588TEBjqkAboakpGoS44efkxHlzQfJDkNtXWQ4S1AXdZTmdc0pMcnUWQYAURV%2BiTcXHU2tWyS7V8KtIGRzoY%2BpKUQtLynHVUKS8JDxTmXZ1fA2yLAdtg8x2%2F7z2ZDCx%2B5tI%2BvH00GdD8MhQEZFc9mITHTOB6w7pqDQ4XepAZbc3mDlVLQ3btom%2BHsaaQeAa0eNQKHZgRkZepIbW3nE8xROch35383t67bEzsf&X-Amz-Signature=5a1e1276f0aa89702088edceb62988ee1c0965ee784fa17d2f8a07a026c2f979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR4VLWUC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCVucCk5o5boAFuRms4KFqKPp9I08FoejPuc6tYpNptlgIhAJ0Wq0JC3j9ypEeLpgUfzcKii3BNjmsDc3u44Cr%2FE1Q1Kv8DCFAQABoMNjM3NDIzMTgzODA1IgwybKTmJk1zSFlI878q3ANN1gB2PMhV1Fs5j%2B9eFRy79d7JUI3YzFa1zPyKsSFwDNGGpilQGJknUWrG2SDoDs%2B693gh1vC8Oq0ZYmPBWq0WT1Gn9%2FLhRlGCT9HayjuMCzcUMzBRXIlBc%2F5WA9VBnvdwpBbvw%2BUq2kmPw30sJNvBdsl1QypEPZVQxtqtkIo7Dn%2F%2Fqjdr2Gg3nY%2Byb6Rc5N6Jt407OffE3LLcknQM4154BEjx6T5FuFL0ijb9btrDAyKQYEif4KdrycKcjNG1BHu3gGtY8XObNhFTFjtKBZqb6i9hJekpF3X0MMuLrriPgGKvP1ycVA7S%2B8%2BmnenjDfrTJiPBfIf6JEHP0sT4ZYjov%2B74MY1uEBY2eGTZ63CeCRuu2bvdsAZ1gzT%2FrhvwDEVI88HaDlIeKTQtPh2KTjwyaUJ%2BVSS%2Bn5jHNK7AJSv6axxfBX%2BIkHw3QokgBuo2QE8aCB11KyZ3puOiZ%2BzB568ehWmiwKczU5vevH6LsqVdQ0LuBzv89pwxURrmBa%2BtwkZ5uxUlT%2B3e9Ul9q6fgc69E%2FP6osiKv%2FHaI2Ze06rCyO%2BzUJepoi1uSfQr5aMzYbhFQ0Nk61WiJPvVKep%2BYBegpb5U8eQUCn0udhz%2BRG1HSwi4tNhHI4WgrbaS7UTD588TEBjqkAboakpGoS44efkxHlzQfJDkNtXWQ4S1AXdZTmdc0pMcnUWQYAURV%2BiTcXHU2tWyS7V8KtIGRzoY%2BpKUQtLynHVUKS8JDxTmXZ1fA2yLAdtg8x2%2F7z2ZDCx%2B5tI%2BvH00GdD8MhQEZFc9mITHTOB6w7pqDQ4XepAZbc3mDlVLQ3btom%2BHsaaQeAa0eNQKHZgRkZepIbW3nE8xROch35383t67bEzsf&X-Amz-Signature=2e7ac87427f32690b84725e6d138a7cc56fde1a860f7bd8b4b7cb8f79b0f0fa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR4VLWUC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCVucCk5o5boAFuRms4KFqKPp9I08FoejPuc6tYpNptlgIhAJ0Wq0JC3j9ypEeLpgUfzcKii3BNjmsDc3u44Cr%2FE1Q1Kv8DCFAQABoMNjM3NDIzMTgzODA1IgwybKTmJk1zSFlI878q3ANN1gB2PMhV1Fs5j%2B9eFRy79d7JUI3YzFa1zPyKsSFwDNGGpilQGJknUWrG2SDoDs%2B693gh1vC8Oq0ZYmPBWq0WT1Gn9%2FLhRlGCT9HayjuMCzcUMzBRXIlBc%2F5WA9VBnvdwpBbvw%2BUq2kmPw30sJNvBdsl1QypEPZVQxtqtkIo7Dn%2F%2Fqjdr2Gg3nY%2Byb6Rc5N6Jt407OffE3LLcknQM4154BEjx6T5FuFL0ijb9btrDAyKQYEif4KdrycKcjNG1BHu3gGtY8XObNhFTFjtKBZqb6i9hJekpF3X0MMuLrriPgGKvP1ycVA7S%2B8%2BmnenjDfrTJiPBfIf6JEHP0sT4ZYjov%2B74MY1uEBY2eGTZ63CeCRuu2bvdsAZ1gzT%2FrhvwDEVI88HaDlIeKTQtPh2KTjwyaUJ%2BVSS%2Bn5jHNK7AJSv6axxfBX%2BIkHw3QokgBuo2QE8aCB11KyZ3puOiZ%2BzB568ehWmiwKczU5vevH6LsqVdQ0LuBzv89pwxURrmBa%2BtwkZ5uxUlT%2B3e9Ul9q6fgc69E%2FP6osiKv%2FHaI2Ze06rCyO%2BzUJepoi1uSfQr5aMzYbhFQ0Nk61WiJPvVKep%2BYBegpb5U8eQUCn0udhz%2BRG1HSwi4tNhHI4WgrbaS7UTD588TEBjqkAboakpGoS44efkxHlzQfJDkNtXWQ4S1AXdZTmdc0pMcnUWQYAURV%2BiTcXHU2tWyS7V8KtIGRzoY%2BpKUQtLynHVUKS8JDxTmXZ1fA2yLAdtg8x2%2F7z2ZDCx%2B5tI%2BvH00GdD8MhQEZFc9mITHTOB6w7pqDQ4XepAZbc3mDlVLQ3btom%2BHsaaQeAa0eNQKHZgRkZepIbW3nE8xROch35383t67bEzsf&X-Amz-Signature=14e49c0e658047d7135fbd4bec3e079f29add1180f0009555b31a0cffab28b8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR4VLWUC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCVucCk5o5boAFuRms4KFqKPp9I08FoejPuc6tYpNptlgIhAJ0Wq0JC3j9ypEeLpgUfzcKii3BNjmsDc3u44Cr%2FE1Q1Kv8DCFAQABoMNjM3NDIzMTgzODA1IgwybKTmJk1zSFlI878q3ANN1gB2PMhV1Fs5j%2B9eFRy79d7JUI3YzFa1zPyKsSFwDNGGpilQGJknUWrG2SDoDs%2B693gh1vC8Oq0ZYmPBWq0WT1Gn9%2FLhRlGCT9HayjuMCzcUMzBRXIlBc%2F5WA9VBnvdwpBbvw%2BUq2kmPw30sJNvBdsl1QypEPZVQxtqtkIo7Dn%2F%2Fqjdr2Gg3nY%2Byb6Rc5N6Jt407OffE3LLcknQM4154BEjx6T5FuFL0ijb9btrDAyKQYEif4KdrycKcjNG1BHu3gGtY8XObNhFTFjtKBZqb6i9hJekpF3X0MMuLrriPgGKvP1ycVA7S%2B8%2BmnenjDfrTJiPBfIf6JEHP0sT4ZYjov%2B74MY1uEBY2eGTZ63CeCRuu2bvdsAZ1gzT%2FrhvwDEVI88HaDlIeKTQtPh2KTjwyaUJ%2BVSS%2Bn5jHNK7AJSv6axxfBX%2BIkHw3QokgBuo2QE8aCB11KyZ3puOiZ%2BzB568ehWmiwKczU5vevH6LsqVdQ0LuBzv89pwxURrmBa%2BtwkZ5uxUlT%2B3e9Ul9q6fgc69E%2FP6osiKv%2FHaI2Ze06rCyO%2BzUJepoi1uSfQr5aMzYbhFQ0Nk61WiJPvVKep%2BYBegpb5U8eQUCn0udhz%2BRG1HSwi4tNhHI4WgrbaS7UTD588TEBjqkAboakpGoS44efkxHlzQfJDkNtXWQ4S1AXdZTmdc0pMcnUWQYAURV%2BiTcXHU2tWyS7V8KtIGRzoY%2BpKUQtLynHVUKS8JDxTmXZ1fA2yLAdtg8x2%2F7z2ZDCx%2B5tI%2BvH00GdD8MhQEZFc9mITHTOB6w7pqDQ4XepAZbc3mDlVLQ3btom%2BHsaaQeAa0eNQKHZgRkZepIbW3nE8xROch35383t67bEzsf&X-Amz-Signature=5b1a28b8b976b4ef069ee9a94ded8cbead5c200f56a9b51d3716645427ba6d33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR4VLWUC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCVucCk5o5boAFuRms4KFqKPp9I08FoejPuc6tYpNptlgIhAJ0Wq0JC3j9ypEeLpgUfzcKii3BNjmsDc3u44Cr%2FE1Q1Kv8DCFAQABoMNjM3NDIzMTgzODA1IgwybKTmJk1zSFlI878q3ANN1gB2PMhV1Fs5j%2B9eFRy79d7JUI3YzFa1zPyKsSFwDNGGpilQGJknUWrG2SDoDs%2B693gh1vC8Oq0ZYmPBWq0WT1Gn9%2FLhRlGCT9HayjuMCzcUMzBRXIlBc%2F5WA9VBnvdwpBbvw%2BUq2kmPw30sJNvBdsl1QypEPZVQxtqtkIo7Dn%2F%2Fqjdr2Gg3nY%2Byb6Rc5N6Jt407OffE3LLcknQM4154BEjx6T5FuFL0ijb9btrDAyKQYEif4KdrycKcjNG1BHu3gGtY8XObNhFTFjtKBZqb6i9hJekpF3X0MMuLrriPgGKvP1ycVA7S%2B8%2BmnenjDfrTJiPBfIf6JEHP0sT4ZYjov%2B74MY1uEBY2eGTZ63CeCRuu2bvdsAZ1gzT%2FrhvwDEVI88HaDlIeKTQtPh2KTjwyaUJ%2BVSS%2Bn5jHNK7AJSv6axxfBX%2BIkHw3QokgBuo2QE8aCB11KyZ3puOiZ%2BzB568ehWmiwKczU5vevH6LsqVdQ0LuBzv89pwxURrmBa%2BtwkZ5uxUlT%2B3e9Ul9q6fgc69E%2FP6osiKv%2FHaI2Ze06rCyO%2BzUJepoi1uSfQr5aMzYbhFQ0Nk61WiJPvVKep%2BYBegpb5U8eQUCn0udhz%2BRG1HSwi4tNhHI4WgrbaS7UTD588TEBjqkAboakpGoS44efkxHlzQfJDkNtXWQ4S1AXdZTmdc0pMcnUWQYAURV%2BiTcXHU2tWyS7V8KtIGRzoY%2BpKUQtLynHVUKS8JDxTmXZ1fA2yLAdtg8x2%2F7z2ZDCx%2B5tI%2BvH00GdD8MhQEZFc9mITHTOB6w7pqDQ4XepAZbc3mDlVLQ3btom%2BHsaaQeAa0eNQKHZgRkZepIbW3nE8xROch35383t67bEzsf&X-Amz-Signature=49d88f4244950b34b734208ab22f958cc3f1d62319798895b3cb60a6b4338417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR4VLWUC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCVucCk5o5boAFuRms4KFqKPp9I08FoejPuc6tYpNptlgIhAJ0Wq0JC3j9ypEeLpgUfzcKii3BNjmsDc3u44Cr%2FE1Q1Kv8DCFAQABoMNjM3NDIzMTgzODA1IgwybKTmJk1zSFlI878q3ANN1gB2PMhV1Fs5j%2B9eFRy79d7JUI3YzFa1zPyKsSFwDNGGpilQGJknUWrG2SDoDs%2B693gh1vC8Oq0ZYmPBWq0WT1Gn9%2FLhRlGCT9HayjuMCzcUMzBRXIlBc%2F5WA9VBnvdwpBbvw%2BUq2kmPw30sJNvBdsl1QypEPZVQxtqtkIo7Dn%2F%2Fqjdr2Gg3nY%2Byb6Rc5N6Jt407OffE3LLcknQM4154BEjx6T5FuFL0ijb9btrDAyKQYEif4KdrycKcjNG1BHu3gGtY8XObNhFTFjtKBZqb6i9hJekpF3X0MMuLrriPgGKvP1ycVA7S%2B8%2BmnenjDfrTJiPBfIf6JEHP0sT4ZYjov%2B74MY1uEBY2eGTZ63CeCRuu2bvdsAZ1gzT%2FrhvwDEVI88HaDlIeKTQtPh2KTjwyaUJ%2BVSS%2Bn5jHNK7AJSv6axxfBX%2BIkHw3QokgBuo2QE8aCB11KyZ3puOiZ%2BzB568ehWmiwKczU5vevH6LsqVdQ0LuBzv89pwxURrmBa%2BtwkZ5uxUlT%2B3e9Ul9q6fgc69E%2FP6osiKv%2FHaI2Ze06rCyO%2BzUJepoi1uSfQr5aMzYbhFQ0Nk61WiJPvVKep%2BYBegpb5U8eQUCn0udhz%2BRG1HSwi4tNhHI4WgrbaS7UTD588TEBjqkAboakpGoS44efkxHlzQfJDkNtXWQ4S1AXdZTmdc0pMcnUWQYAURV%2BiTcXHU2tWyS7V8KtIGRzoY%2BpKUQtLynHVUKS8JDxTmXZ1fA2yLAdtg8x2%2F7z2ZDCx%2B5tI%2BvH00GdD8MhQEZFc9mITHTOB6w7pqDQ4XepAZbc3mDlVLQ3btom%2BHsaaQeAa0eNQKHZgRkZepIbW3nE8xROch35383t67bEzsf&X-Amz-Signature=271362e49c1a9da9b5d45438af49c1b1efedf270007a0703820e8cf11de2d201&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR4VLWUC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCVucCk5o5boAFuRms4KFqKPp9I08FoejPuc6tYpNptlgIhAJ0Wq0JC3j9ypEeLpgUfzcKii3BNjmsDc3u44Cr%2FE1Q1Kv8DCFAQABoMNjM3NDIzMTgzODA1IgwybKTmJk1zSFlI878q3ANN1gB2PMhV1Fs5j%2B9eFRy79d7JUI3YzFa1zPyKsSFwDNGGpilQGJknUWrG2SDoDs%2B693gh1vC8Oq0ZYmPBWq0WT1Gn9%2FLhRlGCT9HayjuMCzcUMzBRXIlBc%2F5WA9VBnvdwpBbvw%2BUq2kmPw30sJNvBdsl1QypEPZVQxtqtkIo7Dn%2F%2Fqjdr2Gg3nY%2Byb6Rc5N6Jt407OffE3LLcknQM4154BEjx6T5FuFL0ijb9btrDAyKQYEif4KdrycKcjNG1BHu3gGtY8XObNhFTFjtKBZqb6i9hJekpF3X0MMuLrriPgGKvP1ycVA7S%2B8%2BmnenjDfrTJiPBfIf6JEHP0sT4ZYjov%2B74MY1uEBY2eGTZ63CeCRuu2bvdsAZ1gzT%2FrhvwDEVI88HaDlIeKTQtPh2KTjwyaUJ%2BVSS%2Bn5jHNK7AJSv6axxfBX%2BIkHw3QokgBuo2QE8aCB11KyZ3puOiZ%2BzB568ehWmiwKczU5vevH6LsqVdQ0LuBzv89pwxURrmBa%2BtwkZ5uxUlT%2B3e9Ul9q6fgc69E%2FP6osiKv%2FHaI2Ze06rCyO%2BzUJepoi1uSfQr5aMzYbhFQ0Nk61WiJPvVKep%2BYBegpb5U8eQUCn0udhz%2BRG1HSwi4tNhHI4WgrbaS7UTD588TEBjqkAboakpGoS44efkxHlzQfJDkNtXWQ4S1AXdZTmdc0pMcnUWQYAURV%2BiTcXHU2tWyS7V8KtIGRzoY%2BpKUQtLynHVUKS8JDxTmXZ1fA2yLAdtg8x2%2F7z2ZDCx%2B5tI%2BvH00GdD8MhQEZFc9mITHTOB6w7pqDQ4XepAZbc3mDlVLQ3btom%2BHsaaQeAa0eNQKHZgRkZepIbW3nE8xROch35383t67bEzsf&X-Amz-Signature=d7a5432fab1b7377cee6b6da3f166bd7329039d9246fe93b21ab68fd57f774df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
