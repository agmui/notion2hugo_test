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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HANO6FV%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlJPY8GrHuoqL0qZ53wgCdpH4JTVp%2FlxTW9YHPXkw%2FbQIga3jmZyYHEnkY0kal9B9uIbzpfqkACuGs6CJRRw761nkqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOl9vzqIaJvqNeZ6SrcA4cmFoOi4lO%2FDzULnrQFV9g7tqRiE9lrPTHpIHJEHU%2F7AcB9GM3CVIkJ0NHYG%2Fgdvru7g%2BaH4odmQ2Dy40s7IFKiG6tYOBLvpOawhrot9w0ic1QHJnsl%2FwWzUtzMqXg8ha33PBrMJi07tl%2BgiayfKM00a8KHjgA8XSnbShYi5n55kQcukY%2B%2Bap64BO6cE%2B1YXrsGIttUgqsJGL1YhCU1Yl%2BSV3he4uEJEClwPr8m%2Bi%2BQBVOUNkyYm5WGvQJMW5UJhCjRUwaV0glmxMu32MeEftNL9x5AlDSrh2v6LzfX5KB0LTePrhl6t%2FUH0lwUB4iNMuDkDOuDBUoCMCELEiBEZO89FGG1a2%2BBuVLN5ge8U%2FUXG6c%2Bz7Se6OA6sr4TmCZR8GRtsKQwFR0i6brVw3mj33bGTQqXc1HZLtfzd6%2Bv1FhC6RIt6qzaqB5fAy%2BPgT35uHPdkh%2BLOfHflUuBGglX5i4KapKdCl2wGa5UUM9GM%2FLJw8dKM%2FDMYBefzyY6TsMf3kRnyBKEuTIGGHdbRLsYycYl8W4MM2rzKZ5Wv613Tvc%2BiqM4sPeLb0zFxjquWFegOuzVQA%2F4z2T%2FP9NDzZqudSOE6pOuhRQ4Gfdj1p29A6wvaNXfzJU2pJzFO9x8MMzI9sMGOqUBdqRP%2BtSuZ5uQ199vriQTs2YFjXkDtoj3SwggIOEgM7REiymxF7GSltbm1JorqWWmYSQ3tIDDDF%2BbbnQDWvndfhg8Yr2Nj2ClMb7fGXgXdjOxzXQBJqnnWS6tYNASpQsh1Y6KljbQKb3UFBwhY3njN2pPNLqNOklr6bJbQxR6E%2F%2FkSzCZu%2FtEH15aLodieLqvH0PdYQ0pQXjRigmeRbxxdbgIgpyw&X-Amz-Signature=aaad9fde6e8fce99c56f5fbfc4dd82b9612c118b8bffe6970c8b82860563850d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HANO6FV%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlJPY8GrHuoqL0qZ53wgCdpH4JTVp%2FlxTW9YHPXkw%2FbQIga3jmZyYHEnkY0kal9B9uIbzpfqkACuGs6CJRRw761nkqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOl9vzqIaJvqNeZ6SrcA4cmFoOi4lO%2FDzULnrQFV9g7tqRiE9lrPTHpIHJEHU%2F7AcB9GM3CVIkJ0NHYG%2Fgdvru7g%2BaH4odmQ2Dy40s7IFKiG6tYOBLvpOawhrot9w0ic1QHJnsl%2FwWzUtzMqXg8ha33PBrMJi07tl%2BgiayfKM00a8KHjgA8XSnbShYi5n55kQcukY%2B%2Bap64BO6cE%2B1YXrsGIttUgqsJGL1YhCU1Yl%2BSV3he4uEJEClwPr8m%2Bi%2BQBVOUNkyYm5WGvQJMW5UJhCjRUwaV0glmxMu32MeEftNL9x5AlDSrh2v6LzfX5KB0LTePrhl6t%2FUH0lwUB4iNMuDkDOuDBUoCMCELEiBEZO89FGG1a2%2BBuVLN5ge8U%2FUXG6c%2Bz7Se6OA6sr4TmCZR8GRtsKQwFR0i6brVw3mj33bGTQqXc1HZLtfzd6%2Bv1FhC6RIt6qzaqB5fAy%2BPgT35uHPdkh%2BLOfHflUuBGglX5i4KapKdCl2wGa5UUM9GM%2FLJw8dKM%2FDMYBefzyY6TsMf3kRnyBKEuTIGGHdbRLsYycYl8W4MM2rzKZ5Wv613Tvc%2BiqM4sPeLb0zFxjquWFegOuzVQA%2F4z2T%2FP9NDzZqudSOE6pOuhRQ4Gfdj1p29A6wvaNXfzJU2pJzFO9x8MMzI9sMGOqUBdqRP%2BtSuZ5uQ199vriQTs2YFjXkDtoj3SwggIOEgM7REiymxF7GSltbm1JorqWWmYSQ3tIDDDF%2BbbnQDWvndfhg8Yr2Nj2ClMb7fGXgXdjOxzXQBJqnnWS6tYNASpQsh1Y6KljbQKb3UFBwhY3njN2pPNLqNOklr6bJbQxR6E%2F%2FkSzCZu%2FtEH15aLodieLqvH0PdYQ0pQXjRigmeRbxxdbgIgpyw&X-Amz-Signature=341c37f0e90ee78b8b2abd9d8dbe61553e5c2f5f66ba550163ef0ddd20834f24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HANO6FV%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlJPY8GrHuoqL0qZ53wgCdpH4JTVp%2FlxTW9YHPXkw%2FbQIga3jmZyYHEnkY0kal9B9uIbzpfqkACuGs6CJRRw761nkqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOl9vzqIaJvqNeZ6SrcA4cmFoOi4lO%2FDzULnrQFV9g7tqRiE9lrPTHpIHJEHU%2F7AcB9GM3CVIkJ0NHYG%2Fgdvru7g%2BaH4odmQ2Dy40s7IFKiG6tYOBLvpOawhrot9w0ic1QHJnsl%2FwWzUtzMqXg8ha33PBrMJi07tl%2BgiayfKM00a8KHjgA8XSnbShYi5n55kQcukY%2B%2Bap64BO6cE%2B1YXrsGIttUgqsJGL1YhCU1Yl%2BSV3he4uEJEClwPr8m%2Bi%2BQBVOUNkyYm5WGvQJMW5UJhCjRUwaV0glmxMu32MeEftNL9x5AlDSrh2v6LzfX5KB0LTePrhl6t%2FUH0lwUB4iNMuDkDOuDBUoCMCELEiBEZO89FGG1a2%2BBuVLN5ge8U%2FUXG6c%2Bz7Se6OA6sr4TmCZR8GRtsKQwFR0i6brVw3mj33bGTQqXc1HZLtfzd6%2Bv1FhC6RIt6qzaqB5fAy%2BPgT35uHPdkh%2BLOfHflUuBGglX5i4KapKdCl2wGa5UUM9GM%2FLJw8dKM%2FDMYBefzyY6TsMf3kRnyBKEuTIGGHdbRLsYycYl8W4MM2rzKZ5Wv613Tvc%2BiqM4sPeLb0zFxjquWFegOuzVQA%2F4z2T%2FP9NDzZqudSOE6pOuhRQ4Gfdj1p29A6wvaNXfzJU2pJzFO9x8MMzI9sMGOqUBdqRP%2BtSuZ5uQ199vriQTs2YFjXkDtoj3SwggIOEgM7REiymxF7GSltbm1JorqWWmYSQ3tIDDDF%2BbbnQDWvndfhg8Yr2Nj2ClMb7fGXgXdjOxzXQBJqnnWS6tYNASpQsh1Y6KljbQKb3UFBwhY3njN2pPNLqNOklr6bJbQxR6E%2F%2FkSzCZu%2FtEH15aLodieLqvH0PdYQ0pQXjRigmeRbxxdbgIgpyw&X-Amz-Signature=65b09c7c01d0bb3ffed849babf909942b962d979e85852586d7df35560769936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HANO6FV%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlJPY8GrHuoqL0qZ53wgCdpH4JTVp%2FlxTW9YHPXkw%2FbQIga3jmZyYHEnkY0kal9B9uIbzpfqkACuGs6CJRRw761nkqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOl9vzqIaJvqNeZ6SrcA4cmFoOi4lO%2FDzULnrQFV9g7tqRiE9lrPTHpIHJEHU%2F7AcB9GM3CVIkJ0NHYG%2Fgdvru7g%2BaH4odmQ2Dy40s7IFKiG6tYOBLvpOawhrot9w0ic1QHJnsl%2FwWzUtzMqXg8ha33PBrMJi07tl%2BgiayfKM00a8KHjgA8XSnbShYi5n55kQcukY%2B%2Bap64BO6cE%2B1YXrsGIttUgqsJGL1YhCU1Yl%2BSV3he4uEJEClwPr8m%2Bi%2BQBVOUNkyYm5WGvQJMW5UJhCjRUwaV0glmxMu32MeEftNL9x5AlDSrh2v6LzfX5KB0LTePrhl6t%2FUH0lwUB4iNMuDkDOuDBUoCMCELEiBEZO89FGG1a2%2BBuVLN5ge8U%2FUXG6c%2Bz7Se6OA6sr4TmCZR8GRtsKQwFR0i6brVw3mj33bGTQqXc1HZLtfzd6%2Bv1FhC6RIt6qzaqB5fAy%2BPgT35uHPdkh%2BLOfHflUuBGglX5i4KapKdCl2wGa5UUM9GM%2FLJw8dKM%2FDMYBefzyY6TsMf3kRnyBKEuTIGGHdbRLsYycYl8W4MM2rzKZ5Wv613Tvc%2BiqM4sPeLb0zFxjquWFegOuzVQA%2F4z2T%2FP9NDzZqudSOE6pOuhRQ4Gfdj1p29A6wvaNXfzJU2pJzFO9x8MMzI9sMGOqUBdqRP%2BtSuZ5uQ199vriQTs2YFjXkDtoj3SwggIOEgM7REiymxF7GSltbm1JorqWWmYSQ3tIDDDF%2BbbnQDWvndfhg8Yr2Nj2ClMb7fGXgXdjOxzXQBJqnnWS6tYNASpQsh1Y6KljbQKb3UFBwhY3njN2pPNLqNOklr6bJbQxR6E%2F%2FkSzCZu%2FtEH15aLodieLqvH0PdYQ0pQXjRigmeRbxxdbgIgpyw&X-Amz-Signature=a70f20d089944c50f4fbbefcbe4dff3d581ae5de28b5ffda83c00e6019937f95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HANO6FV%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlJPY8GrHuoqL0qZ53wgCdpH4JTVp%2FlxTW9YHPXkw%2FbQIga3jmZyYHEnkY0kal9B9uIbzpfqkACuGs6CJRRw761nkqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOl9vzqIaJvqNeZ6SrcA4cmFoOi4lO%2FDzULnrQFV9g7tqRiE9lrPTHpIHJEHU%2F7AcB9GM3CVIkJ0NHYG%2Fgdvru7g%2BaH4odmQ2Dy40s7IFKiG6tYOBLvpOawhrot9w0ic1QHJnsl%2FwWzUtzMqXg8ha33PBrMJi07tl%2BgiayfKM00a8KHjgA8XSnbShYi5n55kQcukY%2B%2Bap64BO6cE%2B1YXrsGIttUgqsJGL1YhCU1Yl%2BSV3he4uEJEClwPr8m%2Bi%2BQBVOUNkyYm5WGvQJMW5UJhCjRUwaV0glmxMu32MeEftNL9x5AlDSrh2v6LzfX5KB0LTePrhl6t%2FUH0lwUB4iNMuDkDOuDBUoCMCELEiBEZO89FGG1a2%2BBuVLN5ge8U%2FUXG6c%2Bz7Se6OA6sr4TmCZR8GRtsKQwFR0i6brVw3mj33bGTQqXc1HZLtfzd6%2Bv1FhC6RIt6qzaqB5fAy%2BPgT35uHPdkh%2BLOfHflUuBGglX5i4KapKdCl2wGa5UUM9GM%2FLJw8dKM%2FDMYBefzyY6TsMf3kRnyBKEuTIGGHdbRLsYycYl8W4MM2rzKZ5Wv613Tvc%2BiqM4sPeLb0zFxjquWFegOuzVQA%2F4z2T%2FP9NDzZqudSOE6pOuhRQ4Gfdj1p29A6wvaNXfzJU2pJzFO9x8MMzI9sMGOqUBdqRP%2BtSuZ5uQ199vriQTs2YFjXkDtoj3SwggIOEgM7REiymxF7GSltbm1JorqWWmYSQ3tIDDDF%2BbbnQDWvndfhg8Yr2Nj2ClMb7fGXgXdjOxzXQBJqnnWS6tYNASpQsh1Y6KljbQKb3UFBwhY3njN2pPNLqNOklr6bJbQxR6E%2F%2FkSzCZu%2FtEH15aLodieLqvH0PdYQ0pQXjRigmeRbxxdbgIgpyw&X-Amz-Signature=11a404e5dcd6494d20bd09b4d318a3128eaf2d81ae8ea2bd093fe0b0b5978028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HANO6FV%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlJPY8GrHuoqL0qZ53wgCdpH4JTVp%2FlxTW9YHPXkw%2FbQIga3jmZyYHEnkY0kal9B9uIbzpfqkACuGs6CJRRw761nkqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOl9vzqIaJvqNeZ6SrcA4cmFoOi4lO%2FDzULnrQFV9g7tqRiE9lrPTHpIHJEHU%2F7AcB9GM3CVIkJ0NHYG%2Fgdvru7g%2BaH4odmQ2Dy40s7IFKiG6tYOBLvpOawhrot9w0ic1QHJnsl%2FwWzUtzMqXg8ha33PBrMJi07tl%2BgiayfKM00a8KHjgA8XSnbShYi5n55kQcukY%2B%2Bap64BO6cE%2B1YXrsGIttUgqsJGL1YhCU1Yl%2BSV3he4uEJEClwPr8m%2Bi%2BQBVOUNkyYm5WGvQJMW5UJhCjRUwaV0glmxMu32MeEftNL9x5AlDSrh2v6LzfX5KB0LTePrhl6t%2FUH0lwUB4iNMuDkDOuDBUoCMCELEiBEZO89FGG1a2%2BBuVLN5ge8U%2FUXG6c%2Bz7Se6OA6sr4TmCZR8GRtsKQwFR0i6brVw3mj33bGTQqXc1HZLtfzd6%2Bv1FhC6RIt6qzaqB5fAy%2BPgT35uHPdkh%2BLOfHflUuBGglX5i4KapKdCl2wGa5UUM9GM%2FLJw8dKM%2FDMYBefzyY6TsMf3kRnyBKEuTIGGHdbRLsYycYl8W4MM2rzKZ5Wv613Tvc%2BiqM4sPeLb0zFxjquWFegOuzVQA%2F4z2T%2FP9NDzZqudSOE6pOuhRQ4Gfdj1p29A6wvaNXfzJU2pJzFO9x8MMzI9sMGOqUBdqRP%2BtSuZ5uQ199vriQTs2YFjXkDtoj3SwggIOEgM7REiymxF7GSltbm1JorqWWmYSQ3tIDDDF%2BbbnQDWvndfhg8Yr2Nj2ClMb7fGXgXdjOxzXQBJqnnWS6tYNASpQsh1Y6KljbQKb3UFBwhY3njN2pPNLqNOklr6bJbQxR6E%2F%2FkSzCZu%2FtEH15aLodieLqvH0PdYQ0pQXjRigmeRbxxdbgIgpyw&X-Amz-Signature=3f3bd40c11bd915a58c4c57a81162acd8f7d8caa248339163160e89bdbd292d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HANO6FV%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlJPY8GrHuoqL0qZ53wgCdpH4JTVp%2FlxTW9YHPXkw%2FbQIga3jmZyYHEnkY0kal9B9uIbzpfqkACuGs6CJRRw761nkqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOl9vzqIaJvqNeZ6SrcA4cmFoOi4lO%2FDzULnrQFV9g7tqRiE9lrPTHpIHJEHU%2F7AcB9GM3CVIkJ0NHYG%2Fgdvru7g%2BaH4odmQ2Dy40s7IFKiG6tYOBLvpOawhrot9w0ic1QHJnsl%2FwWzUtzMqXg8ha33PBrMJi07tl%2BgiayfKM00a8KHjgA8XSnbShYi5n55kQcukY%2B%2Bap64BO6cE%2B1YXrsGIttUgqsJGL1YhCU1Yl%2BSV3he4uEJEClwPr8m%2Bi%2BQBVOUNkyYm5WGvQJMW5UJhCjRUwaV0glmxMu32MeEftNL9x5AlDSrh2v6LzfX5KB0LTePrhl6t%2FUH0lwUB4iNMuDkDOuDBUoCMCELEiBEZO89FGG1a2%2BBuVLN5ge8U%2FUXG6c%2Bz7Se6OA6sr4TmCZR8GRtsKQwFR0i6brVw3mj33bGTQqXc1HZLtfzd6%2Bv1FhC6RIt6qzaqB5fAy%2BPgT35uHPdkh%2BLOfHflUuBGglX5i4KapKdCl2wGa5UUM9GM%2FLJw8dKM%2FDMYBefzyY6TsMf3kRnyBKEuTIGGHdbRLsYycYl8W4MM2rzKZ5Wv613Tvc%2BiqM4sPeLb0zFxjquWFegOuzVQA%2F4z2T%2FP9NDzZqudSOE6pOuhRQ4Gfdj1p29A6wvaNXfzJU2pJzFO9x8MMzI9sMGOqUBdqRP%2BtSuZ5uQ199vriQTs2YFjXkDtoj3SwggIOEgM7REiymxF7GSltbm1JorqWWmYSQ3tIDDDF%2BbbnQDWvndfhg8Yr2Nj2ClMb7fGXgXdjOxzXQBJqnnWS6tYNASpQsh1Y6KljbQKb3UFBwhY3njN2pPNLqNOklr6bJbQxR6E%2F%2FkSzCZu%2FtEH15aLodieLqvH0PdYQ0pQXjRigmeRbxxdbgIgpyw&X-Amz-Signature=7ab89d15f20db22294b36b392e98402903d637c736c13562c4db1fa83aeef670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
