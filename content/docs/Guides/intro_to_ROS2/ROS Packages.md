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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TZCNRYK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDwBogb%2FKU4mEuF%2Fqx6hbfSAYAWlk7SyPjOKSIogm%2B5hgIhAKZ31l%2FBgmUiFLsKKZg1iDK6nsYEr0SKKI2Ru7bndGCZKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeRW5cjCkHWGjnQ98q3AN0JGM0%2B98sa2qTmEyelZvcg8U1yKOtte%2FKx39Vx8c0D9VrNQrm9WxKWo36BrKIYSFZEgomlYpFudujlNwNLsv45cB9Q3OvQhG75cSrSAl41MCxOMBtJ%2Byc4uP4dPskuqZCNYcYTJiIPiFAFar0bbFu88G6gtm1hd9Ak4Q929qwOUt9N9PxegbIsfr61XVqHgdwc2KfyAYGBmOH%2FNPywgrMgHeam3LD%2Bslrv5LNlHX4FKbFvtGRIH191ZtOEKS5bTniOUJ%2Fg10zrWlUhiov9c%2BRq4OKHulwKFiq%2FDPmlsIyuEuCy1WavWNe%2FNAYQ7cnOkSrPoRXj32RRvlzHXr%2F5tBJWPc8XyVI1wYeQgT1P%2BDyTndXaeP2yhL20xrVTYfAaJ3erxuu6N07qcmUoNasVMw%2FwuDTT0NeJMS6byGvO1y8PlILj1A9ybUX8lV4wqgK0y4WNYHfxEvpoJY35sf2nux1mcth%2Bf6Mmw66SLc69yfqZpoQ%2BWp93VgDmqLgdTW9lKr%2Bbx%2F21pXKC0fcSLigcNKCgb3ksDTd16uV793z%2BfflcDUgxY6lPq8Saa%2F5eOey13XMxONytdTQa1sz%2FKQFMyg%2FX6rdUzhgcz2FkSGUK%2F5ogYNAaBZ4f2mrMXuY9jDduN%2B%2FBjqkAWvhIEngziGaerHoLASltEBnnjXP4qIka31Zc4DmXwa8AhzeXo4dP%2FO5FC0gCwlqENnz49QJGvurX3R9XzYyRHPUqfQtdVQUSE8WjrTWkzFEWKtaKcuDeVwHkI%2FGshiGHzS15F51weZwS5IH%2Fu4syLgQDLON8UD%2F%2FqxoujMLmDm989245fn65G50JRI2PJqfRidyEaMe1KEkjNeF8EtsEAvzLYKl&X-Amz-Signature=2bbaae11a05411a773643a35763af954f22b47c3b6abdc3727797f9ba4a38b14&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TZCNRYK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDwBogb%2FKU4mEuF%2Fqx6hbfSAYAWlk7SyPjOKSIogm%2B5hgIhAKZ31l%2FBgmUiFLsKKZg1iDK6nsYEr0SKKI2Ru7bndGCZKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeRW5cjCkHWGjnQ98q3AN0JGM0%2B98sa2qTmEyelZvcg8U1yKOtte%2FKx39Vx8c0D9VrNQrm9WxKWo36BrKIYSFZEgomlYpFudujlNwNLsv45cB9Q3OvQhG75cSrSAl41MCxOMBtJ%2Byc4uP4dPskuqZCNYcYTJiIPiFAFar0bbFu88G6gtm1hd9Ak4Q929qwOUt9N9PxegbIsfr61XVqHgdwc2KfyAYGBmOH%2FNPywgrMgHeam3LD%2Bslrv5LNlHX4FKbFvtGRIH191ZtOEKS5bTniOUJ%2Fg10zrWlUhiov9c%2BRq4OKHulwKFiq%2FDPmlsIyuEuCy1WavWNe%2FNAYQ7cnOkSrPoRXj32RRvlzHXr%2F5tBJWPc8XyVI1wYeQgT1P%2BDyTndXaeP2yhL20xrVTYfAaJ3erxuu6N07qcmUoNasVMw%2FwuDTT0NeJMS6byGvO1y8PlILj1A9ybUX8lV4wqgK0y4WNYHfxEvpoJY35sf2nux1mcth%2Bf6Mmw66SLc69yfqZpoQ%2BWp93VgDmqLgdTW9lKr%2Bbx%2F21pXKC0fcSLigcNKCgb3ksDTd16uV793z%2BfflcDUgxY6lPq8Saa%2F5eOey13XMxONytdTQa1sz%2FKQFMyg%2FX6rdUzhgcz2FkSGUK%2F5ogYNAaBZ4f2mrMXuY9jDduN%2B%2FBjqkAWvhIEngziGaerHoLASltEBnnjXP4qIka31Zc4DmXwa8AhzeXo4dP%2FO5FC0gCwlqENnz49QJGvurX3R9XzYyRHPUqfQtdVQUSE8WjrTWkzFEWKtaKcuDeVwHkI%2FGshiGHzS15F51weZwS5IH%2Fu4syLgQDLON8UD%2F%2FqxoujMLmDm989245fn65G50JRI2PJqfRidyEaMe1KEkjNeF8EtsEAvzLYKl&X-Amz-Signature=7a3f427e23a627f471f4aac56b94d05134fb5289341e6e59135ce634ba18e496&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TZCNRYK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDwBogb%2FKU4mEuF%2Fqx6hbfSAYAWlk7SyPjOKSIogm%2B5hgIhAKZ31l%2FBgmUiFLsKKZg1iDK6nsYEr0SKKI2Ru7bndGCZKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeRW5cjCkHWGjnQ98q3AN0JGM0%2B98sa2qTmEyelZvcg8U1yKOtte%2FKx39Vx8c0D9VrNQrm9WxKWo36BrKIYSFZEgomlYpFudujlNwNLsv45cB9Q3OvQhG75cSrSAl41MCxOMBtJ%2Byc4uP4dPskuqZCNYcYTJiIPiFAFar0bbFu88G6gtm1hd9Ak4Q929qwOUt9N9PxegbIsfr61XVqHgdwc2KfyAYGBmOH%2FNPywgrMgHeam3LD%2Bslrv5LNlHX4FKbFvtGRIH191ZtOEKS5bTniOUJ%2Fg10zrWlUhiov9c%2BRq4OKHulwKFiq%2FDPmlsIyuEuCy1WavWNe%2FNAYQ7cnOkSrPoRXj32RRvlzHXr%2F5tBJWPc8XyVI1wYeQgT1P%2BDyTndXaeP2yhL20xrVTYfAaJ3erxuu6N07qcmUoNasVMw%2FwuDTT0NeJMS6byGvO1y8PlILj1A9ybUX8lV4wqgK0y4WNYHfxEvpoJY35sf2nux1mcth%2Bf6Mmw66SLc69yfqZpoQ%2BWp93VgDmqLgdTW9lKr%2Bbx%2F21pXKC0fcSLigcNKCgb3ksDTd16uV793z%2BfflcDUgxY6lPq8Saa%2F5eOey13XMxONytdTQa1sz%2FKQFMyg%2FX6rdUzhgcz2FkSGUK%2F5ogYNAaBZ4f2mrMXuY9jDduN%2B%2FBjqkAWvhIEngziGaerHoLASltEBnnjXP4qIka31Zc4DmXwa8AhzeXo4dP%2FO5FC0gCwlqENnz49QJGvurX3R9XzYyRHPUqfQtdVQUSE8WjrTWkzFEWKtaKcuDeVwHkI%2FGshiGHzS15F51weZwS5IH%2Fu4syLgQDLON8UD%2F%2FqxoujMLmDm989245fn65G50JRI2PJqfRidyEaMe1KEkjNeF8EtsEAvzLYKl&X-Amz-Signature=b4c817c13d76baf159069cf5fd8397beb9e6de30e7740388898d9865e5314786&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TZCNRYK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDwBogb%2FKU4mEuF%2Fqx6hbfSAYAWlk7SyPjOKSIogm%2B5hgIhAKZ31l%2FBgmUiFLsKKZg1iDK6nsYEr0SKKI2Ru7bndGCZKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeRW5cjCkHWGjnQ98q3AN0JGM0%2B98sa2qTmEyelZvcg8U1yKOtte%2FKx39Vx8c0D9VrNQrm9WxKWo36BrKIYSFZEgomlYpFudujlNwNLsv45cB9Q3OvQhG75cSrSAl41MCxOMBtJ%2Byc4uP4dPskuqZCNYcYTJiIPiFAFar0bbFu88G6gtm1hd9Ak4Q929qwOUt9N9PxegbIsfr61XVqHgdwc2KfyAYGBmOH%2FNPywgrMgHeam3LD%2Bslrv5LNlHX4FKbFvtGRIH191ZtOEKS5bTniOUJ%2Fg10zrWlUhiov9c%2BRq4OKHulwKFiq%2FDPmlsIyuEuCy1WavWNe%2FNAYQ7cnOkSrPoRXj32RRvlzHXr%2F5tBJWPc8XyVI1wYeQgT1P%2BDyTndXaeP2yhL20xrVTYfAaJ3erxuu6N07qcmUoNasVMw%2FwuDTT0NeJMS6byGvO1y8PlILj1A9ybUX8lV4wqgK0y4WNYHfxEvpoJY35sf2nux1mcth%2Bf6Mmw66SLc69yfqZpoQ%2BWp93VgDmqLgdTW9lKr%2Bbx%2F21pXKC0fcSLigcNKCgb3ksDTd16uV793z%2BfflcDUgxY6lPq8Saa%2F5eOey13XMxONytdTQa1sz%2FKQFMyg%2FX6rdUzhgcz2FkSGUK%2F5ogYNAaBZ4f2mrMXuY9jDduN%2B%2FBjqkAWvhIEngziGaerHoLASltEBnnjXP4qIka31Zc4DmXwa8AhzeXo4dP%2FO5FC0gCwlqENnz49QJGvurX3R9XzYyRHPUqfQtdVQUSE8WjrTWkzFEWKtaKcuDeVwHkI%2FGshiGHzS15F51weZwS5IH%2Fu4syLgQDLON8UD%2F%2FqxoujMLmDm989245fn65G50JRI2PJqfRidyEaMe1KEkjNeF8EtsEAvzLYKl&X-Amz-Signature=818e330b6ef88faa8345df1b7adc68af86531a01b6220e05fa5a8ec870bfc8c7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TZCNRYK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDwBogb%2FKU4mEuF%2Fqx6hbfSAYAWlk7SyPjOKSIogm%2B5hgIhAKZ31l%2FBgmUiFLsKKZg1iDK6nsYEr0SKKI2Ru7bndGCZKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeRW5cjCkHWGjnQ98q3AN0JGM0%2B98sa2qTmEyelZvcg8U1yKOtte%2FKx39Vx8c0D9VrNQrm9WxKWo36BrKIYSFZEgomlYpFudujlNwNLsv45cB9Q3OvQhG75cSrSAl41MCxOMBtJ%2Byc4uP4dPskuqZCNYcYTJiIPiFAFar0bbFu88G6gtm1hd9Ak4Q929qwOUt9N9PxegbIsfr61XVqHgdwc2KfyAYGBmOH%2FNPywgrMgHeam3LD%2Bslrv5LNlHX4FKbFvtGRIH191ZtOEKS5bTniOUJ%2Fg10zrWlUhiov9c%2BRq4OKHulwKFiq%2FDPmlsIyuEuCy1WavWNe%2FNAYQ7cnOkSrPoRXj32RRvlzHXr%2F5tBJWPc8XyVI1wYeQgT1P%2BDyTndXaeP2yhL20xrVTYfAaJ3erxuu6N07qcmUoNasVMw%2FwuDTT0NeJMS6byGvO1y8PlILj1A9ybUX8lV4wqgK0y4WNYHfxEvpoJY35sf2nux1mcth%2Bf6Mmw66SLc69yfqZpoQ%2BWp93VgDmqLgdTW9lKr%2Bbx%2F21pXKC0fcSLigcNKCgb3ksDTd16uV793z%2BfflcDUgxY6lPq8Saa%2F5eOey13XMxONytdTQa1sz%2FKQFMyg%2FX6rdUzhgcz2FkSGUK%2F5ogYNAaBZ4f2mrMXuY9jDduN%2B%2FBjqkAWvhIEngziGaerHoLASltEBnnjXP4qIka31Zc4DmXwa8AhzeXo4dP%2FO5FC0gCwlqENnz49QJGvurX3R9XzYyRHPUqfQtdVQUSE8WjrTWkzFEWKtaKcuDeVwHkI%2FGshiGHzS15F51weZwS5IH%2Fu4syLgQDLON8UD%2F%2FqxoujMLmDm989245fn65G50JRI2PJqfRidyEaMe1KEkjNeF8EtsEAvzLYKl&X-Amz-Signature=aad860acfb2b3015e56de695fd204f780de250b8ff9ae9d85768d41d1accea17&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TZCNRYK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDwBogb%2FKU4mEuF%2Fqx6hbfSAYAWlk7SyPjOKSIogm%2B5hgIhAKZ31l%2FBgmUiFLsKKZg1iDK6nsYEr0SKKI2Ru7bndGCZKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeRW5cjCkHWGjnQ98q3AN0JGM0%2B98sa2qTmEyelZvcg8U1yKOtte%2FKx39Vx8c0D9VrNQrm9WxKWo36BrKIYSFZEgomlYpFudujlNwNLsv45cB9Q3OvQhG75cSrSAl41MCxOMBtJ%2Byc4uP4dPskuqZCNYcYTJiIPiFAFar0bbFu88G6gtm1hd9Ak4Q929qwOUt9N9PxegbIsfr61XVqHgdwc2KfyAYGBmOH%2FNPywgrMgHeam3LD%2Bslrv5LNlHX4FKbFvtGRIH191ZtOEKS5bTniOUJ%2Fg10zrWlUhiov9c%2BRq4OKHulwKFiq%2FDPmlsIyuEuCy1WavWNe%2FNAYQ7cnOkSrPoRXj32RRvlzHXr%2F5tBJWPc8XyVI1wYeQgT1P%2BDyTndXaeP2yhL20xrVTYfAaJ3erxuu6N07qcmUoNasVMw%2FwuDTT0NeJMS6byGvO1y8PlILj1A9ybUX8lV4wqgK0y4WNYHfxEvpoJY35sf2nux1mcth%2Bf6Mmw66SLc69yfqZpoQ%2BWp93VgDmqLgdTW9lKr%2Bbx%2F21pXKC0fcSLigcNKCgb3ksDTd16uV793z%2BfflcDUgxY6lPq8Saa%2F5eOey13XMxONytdTQa1sz%2FKQFMyg%2FX6rdUzhgcz2FkSGUK%2F5ogYNAaBZ4f2mrMXuY9jDduN%2B%2FBjqkAWvhIEngziGaerHoLASltEBnnjXP4qIka31Zc4DmXwa8AhzeXo4dP%2FO5FC0gCwlqENnz49QJGvurX3R9XzYyRHPUqfQtdVQUSE8WjrTWkzFEWKtaKcuDeVwHkI%2FGshiGHzS15F51weZwS5IH%2Fu4syLgQDLON8UD%2F%2FqxoujMLmDm989245fn65G50JRI2PJqfRidyEaMe1KEkjNeF8EtsEAvzLYKl&X-Amz-Signature=a40cc9a22ae5a9e74522cf6050e447436fb896953b9108f69bbf7ff370e84ec9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TZCNRYK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDwBogb%2FKU4mEuF%2Fqx6hbfSAYAWlk7SyPjOKSIogm%2B5hgIhAKZ31l%2FBgmUiFLsKKZg1iDK6nsYEr0SKKI2Ru7bndGCZKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeRW5cjCkHWGjnQ98q3AN0JGM0%2B98sa2qTmEyelZvcg8U1yKOtte%2FKx39Vx8c0D9VrNQrm9WxKWo36BrKIYSFZEgomlYpFudujlNwNLsv45cB9Q3OvQhG75cSrSAl41MCxOMBtJ%2Byc4uP4dPskuqZCNYcYTJiIPiFAFar0bbFu88G6gtm1hd9Ak4Q929qwOUt9N9PxegbIsfr61XVqHgdwc2KfyAYGBmOH%2FNPywgrMgHeam3LD%2Bslrv5LNlHX4FKbFvtGRIH191ZtOEKS5bTniOUJ%2Fg10zrWlUhiov9c%2BRq4OKHulwKFiq%2FDPmlsIyuEuCy1WavWNe%2FNAYQ7cnOkSrPoRXj32RRvlzHXr%2F5tBJWPc8XyVI1wYeQgT1P%2BDyTndXaeP2yhL20xrVTYfAaJ3erxuu6N07qcmUoNasVMw%2FwuDTT0NeJMS6byGvO1y8PlILj1A9ybUX8lV4wqgK0y4WNYHfxEvpoJY35sf2nux1mcth%2Bf6Mmw66SLc69yfqZpoQ%2BWp93VgDmqLgdTW9lKr%2Bbx%2F21pXKC0fcSLigcNKCgb3ksDTd16uV793z%2BfflcDUgxY6lPq8Saa%2F5eOey13XMxONytdTQa1sz%2FKQFMyg%2FX6rdUzhgcz2FkSGUK%2F5ogYNAaBZ4f2mrMXuY9jDduN%2B%2FBjqkAWvhIEngziGaerHoLASltEBnnjXP4qIka31Zc4DmXwa8AhzeXo4dP%2FO5FC0gCwlqENnz49QJGvurX3R9XzYyRHPUqfQtdVQUSE8WjrTWkzFEWKtaKcuDeVwHkI%2FGshiGHzS15F51weZwS5IH%2Fu4syLgQDLON8UD%2F%2FqxoujMLmDm989245fn65G50JRI2PJqfRidyEaMe1KEkjNeF8EtsEAvzLYKl&X-Amz-Signature=56f326bcc37a40199dd0264552582a3cecfbe13adc9351f3089868e3c319e45a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
