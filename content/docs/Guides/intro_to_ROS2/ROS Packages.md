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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDUKRFJF%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T022619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFb9hveXj4hXCq5jKRb50VLhb1yRm%2F20ekeq7ho%2FdGDKAiEAk2InG53iUoDaPnEIeMkcRBhzXE0GuckHLpWhjQ82BgsqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVFZsC9KowVLQ5nCCrcA7tbKufj5c7DZSDiaQ1RMR%2BqKD2cstu9MfOTwPIVMpk8TWs%2BTitdmKz27KQ3CpNE8KWJ2PPBj0b45S2Xyx2EKOlSe5xBLhp86R3bxRJcpUXRJKwTv3u4PBuuXT6BHCnjazQ3k%2F2WYF%2FicZf6GQTgwrHL2vydZSVEn50B5gNwRQbuFPmUVzrNYZA74D5rwIPr%2BwcjuxiROhGVwgeksG7wrtB6pLEndNjefA%2FTJshpsCGH6UuMKI3vSphggvFbChmjKtS1ZI%2Fl6iKakzNPkhDlwl1r5tCxnt0WXCvZdzflGfB7P%2Buvvh4kM3BiAzsjuzbU%2Be0iRPkfAddTcsPzBh4lyFOY07EjS4uIvEPAVWa73E2Hv1VmQtnY9Q7mx%2B%2BKZhRYbEnQnHZnVVMFMWgSnzjTfN%2FmJkXTRWVoeA3OKLcvR4DO4PRjZnpqIW%2Fu%2F52jODJ1lM4Ra3Y3mIwMBs9D2Q0cbXuPjCtk17PnWJQcXRhqovgmlZdJmNVQ0fO3OswG0Ezr1tM6P63sit1bfWNA%2BpU0YHczC4qtxsiOSGYqUvyRioo7SjJaLP%2B1a6ZzFqiMfqFDGEb3cWTpnNwJBKD9akLbP%2FuCKQ0PPJ7XU4gAyfKjZvYr8y0ND3jL6k3NcXaPMLfvj8EGOqUB4%2B8XVI3JBJwopJLrTxoLn7PdqVlrJ60x8thAof2RU7cum9QhHflDxwW0ap%2FfgIiDZSE1npfAlpkKMx3ye90bnUW0m42zulwbgyBMmmj1ZFDgDGF0rXCpgTP%2BIfz8p0TlitnVM%2BfRmtZqC8idrIzEkPkwmw56NqEwi6CJ3MCswvFWC2aaS4c4AvsTYQpZnWN4KYL9rFuKg4jK%2BbNnZM9k2kQku9x%2F&X-Amz-Signature=0cafcb7a3777080924a188cd50b36f76bd0d109d2549ed8e3ea0d77fd6ccf88c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDUKRFJF%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T022620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFb9hveXj4hXCq5jKRb50VLhb1yRm%2F20ekeq7ho%2FdGDKAiEAk2InG53iUoDaPnEIeMkcRBhzXE0GuckHLpWhjQ82BgsqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVFZsC9KowVLQ5nCCrcA7tbKufj5c7DZSDiaQ1RMR%2BqKD2cstu9MfOTwPIVMpk8TWs%2BTitdmKz27KQ3CpNE8KWJ2PPBj0b45S2Xyx2EKOlSe5xBLhp86R3bxRJcpUXRJKwTv3u4PBuuXT6BHCnjazQ3k%2F2WYF%2FicZf6GQTgwrHL2vydZSVEn50B5gNwRQbuFPmUVzrNYZA74D5rwIPr%2BwcjuxiROhGVwgeksG7wrtB6pLEndNjefA%2FTJshpsCGH6UuMKI3vSphggvFbChmjKtS1ZI%2Fl6iKakzNPkhDlwl1r5tCxnt0WXCvZdzflGfB7P%2Buvvh4kM3BiAzsjuzbU%2Be0iRPkfAddTcsPzBh4lyFOY07EjS4uIvEPAVWa73E2Hv1VmQtnY9Q7mx%2B%2BKZhRYbEnQnHZnVVMFMWgSnzjTfN%2FmJkXTRWVoeA3OKLcvR4DO4PRjZnpqIW%2Fu%2F52jODJ1lM4Ra3Y3mIwMBs9D2Q0cbXuPjCtk17PnWJQcXRhqovgmlZdJmNVQ0fO3OswG0Ezr1tM6P63sit1bfWNA%2BpU0YHczC4qtxsiOSGYqUvyRioo7SjJaLP%2B1a6ZzFqiMfqFDGEb3cWTpnNwJBKD9akLbP%2FuCKQ0PPJ7XU4gAyfKjZvYr8y0ND3jL6k3NcXaPMLfvj8EGOqUB4%2B8XVI3JBJwopJLrTxoLn7PdqVlrJ60x8thAof2RU7cum9QhHflDxwW0ap%2FfgIiDZSE1npfAlpkKMx3ye90bnUW0m42zulwbgyBMmmj1ZFDgDGF0rXCpgTP%2BIfz8p0TlitnVM%2BfRmtZqC8idrIzEkPkwmw56NqEwi6CJ3MCswvFWC2aaS4c4AvsTYQpZnWN4KYL9rFuKg4jK%2BbNnZM9k2kQku9x%2F&X-Amz-Signature=ba9757a0f48e32f4e79b45e47228edaa6e5fa7d9f82d232dcf242ab81b14cfea&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDUKRFJF%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T022620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFb9hveXj4hXCq5jKRb50VLhb1yRm%2F20ekeq7ho%2FdGDKAiEAk2InG53iUoDaPnEIeMkcRBhzXE0GuckHLpWhjQ82BgsqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVFZsC9KowVLQ5nCCrcA7tbKufj5c7DZSDiaQ1RMR%2BqKD2cstu9MfOTwPIVMpk8TWs%2BTitdmKz27KQ3CpNE8KWJ2PPBj0b45S2Xyx2EKOlSe5xBLhp86R3bxRJcpUXRJKwTv3u4PBuuXT6BHCnjazQ3k%2F2WYF%2FicZf6GQTgwrHL2vydZSVEn50B5gNwRQbuFPmUVzrNYZA74D5rwIPr%2BwcjuxiROhGVwgeksG7wrtB6pLEndNjefA%2FTJshpsCGH6UuMKI3vSphggvFbChmjKtS1ZI%2Fl6iKakzNPkhDlwl1r5tCxnt0WXCvZdzflGfB7P%2Buvvh4kM3BiAzsjuzbU%2Be0iRPkfAddTcsPzBh4lyFOY07EjS4uIvEPAVWa73E2Hv1VmQtnY9Q7mx%2B%2BKZhRYbEnQnHZnVVMFMWgSnzjTfN%2FmJkXTRWVoeA3OKLcvR4DO4PRjZnpqIW%2Fu%2F52jODJ1lM4Ra3Y3mIwMBs9D2Q0cbXuPjCtk17PnWJQcXRhqovgmlZdJmNVQ0fO3OswG0Ezr1tM6P63sit1bfWNA%2BpU0YHczC4qtxsiOSGYqUvyRioo7SjJaLP%2B1a6ZzFqiMfqFDGEb3cWTpnNwJBKD9akLbP%2FuCKQ0PPJ7XU4gAyfKjZvYr8y0ND3jL6k3NcXaPMLfvj8EGOqUB4%2B8XVI3JBJwopJLrTxoLn7PdqVlrJ60x8thAof2RU7cum9QhHflDxwW0ap%2FfgIiDZSE1npfAlpkKMx3ye90bnUW0m42zulwbgyBMmmj1ZFDgDGF0rXCpgTP%2BIfz8p0TlitnVM%2BfRmtZqC8idrIzEkPkwmw56NqEwi6CJ3MCswvFWC2aaS4c4AvsTYQpZnWN4KYL9rFuKg4jK%2BbNnZM9k2kQku9x%2F&X-Amz-Signature=3ad1b02bdf6482570f528dc6c891e27465a1afe38fabb05afc4b26b0428122e6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDUKRFJF%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T022620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFb9hveXj4hXCq5jKRb50VLhb1yRm%2F20ekeq7ho%2FdGDKAiEAk2InG53iUoDaPnEIeMkcRBhzXE0GuckHLpWhjQ82BgsqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVFZsC9KowVLQ5nCCrcA7tbKufj5c7DZSDiaQ1RMR%2BqKD2cstu9MfOTwPIVMpk8TWs%2BTitdmKz27KQ3CpNE8KWJ2PPBj0b45S2Xyx2EKOlSe5xBLhp86R3bxRJcpUXRJKwTv3u4PBuuXT6BHCnjazQ3k%2F2WYF%2FicZf6GQTgwrHL2vydZSVEn50B5gNwRQbuFPmUVzrNYZA74D5rwIPr%2BwcjuxiROhGVwgeksG7wrtB6pLEndNjefA%2FTJshpsCGH6UuMKI3vSphggvFbChmjKtS1ZI%2Fl6iKakzNPkhDlwl1r5tCxnt0WXCvZdzflGfB7P%2Buvvh4kM3BiAzsjuzbU%2Be0iRPkfAddTcsPzBh4lyFOY07EjS4uIvEPAVWa73E2Hv1VmQtnY9Q7mx%2B%2BKZhRYbEnQnHZnVVMFMWgSnzjTfN%2FmJkXTRWVoeA3OKLcvR4DO4PRjZnpqIW%2Fu%2F52jODJ1lM4Ra3Y3mIwMBs9D2Q0cbXuPjCtk17PnWJQcXRhqovgmlZdJmNVQ0fO3OswG0Ezr1tM6P63sit1bfWNA%2BpU0YHczC4qtxsiOSGYqUvyRioo7SjJaLP%2B1a6ZzFqiMfqFDGEb3cWTpnNwJBKD9akLbP%2FuCKQ0PPJ7XU4gAyfKjZvYr8y0ND3jL6k3NcXaPMLfvj8EGOqUB4%2B8XVI3JBJwopJLrTxoLn7PdqVlrJ60x8thAof2RU7cum9QhHflDxwW0ap%2FfgIiDZSE1npfAlpkKMx3ye90bnUW0m42zulwbgyBMmmj1ZFDgDGF0rXCpgTP%2BIfz8p0TlitnVM%2BfRmtZqC8idrIzEkPkwmw56NqEwi6CJ3MCswvFWC2aaS4c4AvsTYQpZnWN4KYL9rFuKg4jK%2BbNnZM9k2kQku9x%2F&X-Amz-Signature=64f27c6ddabaf17fd1f572734fa06c43e41011f9cc08c8ae0ea003b0f2f3941d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDUKRFJF%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T022619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFb9hveXj4hXCq5jKRb50VLhb1yRm%2F20ekeq7ho%2FdGDKAiEAk2InG53iUoDaPnEIeMkcRBhzXE0GuckHLpWhjQ82BgsqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVFZsC9KowVLQ5nCCrcA7tbKufj5c7DZSDiaQ1RMR%2BqKD2cstu9MfOTwPIVMpk8TWs%2BTitdmKz27KQ3CpNE8KWJ2PPBj0b45S2Xyx2EKOlSe5xBLhp86R3bxRJcpUXRJKwTv3u4PBuuXT6BHCnjazQ3k%2F2WYF%2FicZf6GQTgwrHL2vydZSVEn50B5gNwRQbuFPmUVzrNYZA74D5rwIPr%2BwcjuxiROhGVwgeksG7wrtB6pLEndNjefA%2FTJshpsCGH6UuMKI3vSphggvFbChmjKtS1ZI%2Fl6iKakzNPkhDlwl1r5tCxnt0WXCvZdzflGfB7P%2Buvvh4kM3BiAzsjuzbU%2Be0iRPkfAddTcsPzBh4lyFOY07EjS4uIvEPAVWa73E2Hv1VmQtnY9Q7mx%2B%2BKZhRYbEnQnHZnVVMFMWgSnzjTfN%2FmJkXTRWVoeA3OKLcvR4DO4PRjZnpqIW%2Fu%2F52jODJ1lM4Ra3Y3mIwMBs9D2Q0cbXuPjCtk17PnWJQcXRhqovgmlZdJmNVQ0fO3OswG0Ezr1tM6P63sit1bfWNA%2BpU0YHczC4qtxsiOSGYqUvyRioo7SjJaLP%2B1a6ZzFqiMfqFDGEb3cWTpnNwJBKD9akLbP%2FuCKQ0PPJ7XU4gAyfKjZvYr8y0ND3jL6k3NcXaPMLfvj8EGOqUB4%2B8XVI3JBJwopJLrTxoLn7PdqVlrJ60x8thAof2RU7cum9QhHflDxwW0ap%2FfgIiDZSE1npfAlpkKMx3ye90bnUW0m42zulwbgyBMmmj1ZFDgDGF0rXCpgTP%2BIfz8p0TlitnVM%2BfRmtZqC8idrIzEkPkwmw56NqEwi6CJ3MCswvFWC2aaS4c4AvsTYQpZnWN4KYL9rFuKg4jK%2BbNnZM9k2kQku9x%2F&X-Amz-Signature=a44721d9b0aa86ba0aa7a62b3e12ae819bc04c499b41f3759f2a6f4db002ab9b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDUKRFJF%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T022620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFb9hveXj4hXCq5jKRb50VLhb1yRm%2F20ekeq7ho%2FdGDKAiEAk2InG53iUoDaPnEIeMkcRBhzXE0GuckHLpWhjQ82BgsqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVFZsC9KowVLQ5nCCrcA7tbKufj5c7DZSDiaQ1RMR%2BqKD2cstu9MfOTwPIVMpk8TWs%2BTitdmKz27KQ3CpNE8KWJ2PPBj0b45S2Xyx2EKOlSe5xBLhp86R3bxRJcpUXRJKwTv3u4PBuuXT6BHCnjazQ3k%2F2WYF%2FicZf6GQTgwrHL2vydZSVEn50B5gNwRQbuFPmUVzrNYZA74D5rwIPr%2BwcjuxiROhGVwgeksG7wrtB6pLEndNjefA%2FTJshpsCGH6UuMKI3vSphggvFbChmjKtS1ZI%2Fl6iKakzNPkhDlwl1r5tCxnt0WXCvZdzflGfB7P%2Buvvh4kM3BiAzsjuzbU%2Be0iRPkfAddTcsPzBh4lyFOY07EjS4uIvEPAVWa73E2Hv1VmQtnY9Q7mx%2B%2BKZhRYbEnQnHZnVVMFMWgSnzjTfN%2FmJkXTRWVoeA3OKLcvR4DO4PRjZnpqIW%2Fu%2F52jODJ1lM4Ra3Y3mIwMBs9D2Q0cbXuPjCtk17PnWJQcXRhqovgmlZdJmNVQ0fO3OswG0Ezr1tM6P63sit1bfWNA%2BpU0YHczC4qtxsiOSGYqUvyRioo7SjJaLP%2B1a6ZzFqiMfqFDGEb3cWTpnNwJBKD9akLbP%2FuCKQ0PPJ7XU4gAyfKjZvYr8y0ND3jL6k3NcXaPMLfvj8EGOqUB4%2B8XVI3JBJwopJLrTxoLn7PdqVlrJ60x8thAof2RU7cum9QhHflDxwW0ap%2FfgIiDZSE1npfAlpkKMx3ye90bnUW0m42zulwbgyBMmmj1ZFDgDGF0rXCpgTP%2BIfz8p0TlitnVM%2BfRmtZqC8idrIzEkPkwmw56NqEwi6CJ3MCswvFWC2aaS4c4AvsTYQpZnWN4KYL9rFuKg4jK%2BbNnZM9k2kQku9x%2F&X-Amz-Signature=597a565c2558f8987fc8e090a85f962a0435400a7357a2b57649f86497d299c1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDUKRFJF%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T022620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFb9hveXj4hXCq5jKRb50VLhb1yRm%2F20ekeq7ho%2FdGDKAiEAk2InG53iUoDaPnEIeMkcRBhzXE0GuckHLpWhjQ82BgsqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVFZsC9KowVLQ5nCCrcA7tbKufj5c7DZSDiaQ1RMR%2BqKD2cstu9MfOTwPIVMpk8TWs%2BTitdmKz27KQ3CpNE8KWJ2PPBj0b45S2Xyx2EKOlSe5xBLhp86R3bxRJcpUXRJKwTv3u4PBuuXT6BHCnjazQ3k%2F2WYF%2FicZf6GQTgwrHL2vydZSVEn50B5gNwRQbuFPmUVzrNYZA74D5rwIPr%2BwcjuxiROhGVwgeksG7wrtB6pLEndNjefA%2FTJshpsCGH6UuMKI3vSphggvFbChmjKtS1ZI%2Fl6iKakzNPkhDlwl1r5tCxnt0WXCvZdzflGfB7P%2Buvvh4kM3BiAzsjuzbU%2Be0iRPkfAddTcsPzBh4lyFOY07EjS4uIvEPAVWa73E2Hv1VmQtnY9Q7mx%2B%2BKZhRYbEnQnHZnVVMFMWgSnzjTfN%2FmJkXTRWVoeA3OKLcvR4DO4PRjZnpqIW%2Fu%2F52jODJ1lM4Ra3Y3mIwMBs9D2Q0cbXuPjCtk17PnWJQcXRhqovgmlZdJmNVQ0fO3OswG0Ezr1tM6P63sit1bfWNA%2BpU0YHczC4qtxsiOSGYqUvyRioo7SjJaLP%2B1a6ZzFqiMfqFDGEb3cWTpnNwJBKD9akLbP%2FuCKQ0PPJ7XU4gAyfKjZvYr8y0ND3jL6k3NcXaPMLfvj8EGOqUB4%2B8XVI3JBJwopJLrTxoLn7PdqVlrJ60x8thAof2RU7cum9QhHflDxwW0ap%2FfgIiDZSE1npfAlpkKMx3ye90bnUW0m42zulwbgyBMmmj1ZFDgDGF0rXCpgTP%2BIfz8p0TlitnVM%2BfRmtZqC8idrIzEkPkwmw56NqEwi6CJ3MCswvFWC2aaS4c4AvsTYQpZnWN4KYL9rFuKg4jK%2BbNnZM9k2kQku9x%2F&X-Amz-Signature=fc0224a231358782ca0eb36e34ee6af9a7e158736e6240734925658e8e7ceee7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
