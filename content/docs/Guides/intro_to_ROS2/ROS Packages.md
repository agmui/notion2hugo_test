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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTAZRHYB%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDxVNzFogGLj%2B%2BIulz1Gjh4glzN70zv41cHfSMIZztKkQIgM0EdHk6w%2FuYlDKXZqHpHf3LkTBKCf%2F9JpV76unjVkmMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKB9uKB61IFuyohhbyrcA0xDo7YFsQSovNCgmMahAFd6TF39D16mKdzHsmRf%2F8gzj0vmf98ZNCk73j7Id5g%2FIZ65lyyn2dNoQmn8E564danLMwPavL9Xl85iz92XZCKrwyn26hhLMMByAitzpyxc%2FahpfMy%2BiSN%2Fd23pi3mPAQfOc4Wa37B%2FrU%2FG%2BGywjuk0nSNvV3Mc6%2FXN0BhC0rSw%2Bm%2BSTE5B8%2F%2FfcgDKalWoQh6B5KuvftyyZ5CDTNC3eW218%2BKzh%2Fw8do%2B4%2BnR4KXTPgl13efmK69HSSfp5EewOLry4NrtgZ6rleub%2F9rnCQ5zDWxPvKg6uEDo6AV6wE9lOJ5Y%2BwGof6TGGGuApKePqrkuOnHuBJRzXlNbU%2BX8iar2B%2Fvy0DGRisPecVLvElTa4tfPMyLMHscHGTrw5aRbk0FD5wGX1yAY25cAYzkv3I5zU9gFrUeUoSbB%2Bna6ZAo7BjRZddwxXFd0k03SUXy1OsBDS5BF0b9OIBqTLmdo4PQ5n4J0K0a%2FZuCY4PEdTfPg2C7F6a%2BlhYDuLNfgwBTwd2sfF%2Fo%2FGiu9w60X9LKwMGqEypkO1YrXc%2F5E5GgoApZoLbPXRF5Xtthhh32iPb6mxN6UJzlpLYKc4m1Ma%2FxdR4eqzHF9KP8bi4TCY%2Fv7kMJm5gcEGOqUB3AiUIJRjsbgdBPmKO7utB%2B01OUd8W5CjTkkz2238UetogGP%2BKvK4IW0H1WUpBpjjyXZrMeq3g1dSe9zAPerEIbijYBEgMm254pueHqbBQDP%2BmzQcQja7uCgUakB1qZ%2FAd%2BDivLaP57DyEWs7lQ3gTnfLJHI3E0%2BLgkgSE3EEefhe4nTJdWu1p54nEBbmYegLlDisrodEbwXi0z8abCtJoiZowLWy&X-Amz-Signature=2e279da09e2448556e62ff56a5461958ac3582d7e7437f8268a5606869ecff41&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTAZRHYB%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDxVNzFogGLj%2B%2BIulz1Gjh4glzN70zv41cHfSMIZztKkQIgM0EdHk6w%2FuYlDKXZqHpHf3LkTBKCf%2F9JpV76unjVkmMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKB9uKB61IFuyohhbyrcA0xDo7YFsQSovNCgmMahAFd6TF39D16mKdzHsmRf%2F8gzj0vmf98ZNCk73j7Id5g%2FIZ65lyyn2dNoQmn8E564danLMwPavL9Xl85iz92XZCKrwyn26hhLMMByAitzpyxc%2FahpfMy%2BiSN%2Fd23pi3mPAQfOc4Wa37B%2FrU%2FG%2BGywjuk0nSNvV3Mc6%2FXN0BhC0rSw%2Bm%2BSTE5B8%2F%2FfcgDKalWoQh6B5KuvftyyZ5CDTNC3eW218%2BKzh%2Fw8do%2B4%2BnR4KXTPgl13efmK69HSSfp5EewOLry4NrtgZ6rleub%2F9rnCQ5zDWxPvKg6uEDo6AV6wE9lOJ5Y%2BwGof6TGGGuApKePqrkuOnHuBJRzXlNbU%2BX8iar2B%2Fvy0DGRisPecVLvElTa4tfPMyLMHscHGTrw5aRbk0FD5wGX1yAY25cAYzkv3I5zU9gFrUeUoSbB%2Bna6ZAo7BjRZddwxXFd0k03SUXy1OsBDS5BF0b9OIBqTLmdo4PQ5n4J0K0a%2FZuCY4PEdTfPg2C7F6a%2BlhYDuLNfgwBTwd2sfF%2Fo%2FGiu9w60X9LKwMGqEypkO1YrXc%2F5E5GgoApZoLbPXRF5Xtthhh32iPb6mxN6UJzlpLYKc4m1Ma%2FxdR4eqzHF9KP8bi4TCY%2Fv7kMJm5gcEGOqUB3AiUIJRjsbgdBPmKO7utB%2B01OUd8W5CjTkkz2238UetogGP%2BKvK4IW0H1WUpBpjjyXZrMeq3g1dSe9zAPerEIbijYBEgMm254pueHqbBQDP%2BmzQcQja7uCgUakB1qZ%2FAd%2BDivLaP57DyEWs7lQ3gTnfLJHI3E0%2BLgkgSE3EEefhe4nTJdWu1p54nEBbmYegLlDisrodEbwXi0z8abCtJoiZowLWy&X-Amz-Signature=0106f84935ebcae3b60a62b80b773b8f988c0f5ff800101c22a05ba9332379cd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTAZRHYB%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDxVNzFogGLj%2B%2BIulz1Gjh4glzN70zv41cHfSMIZztKkQIgM0EdHk6w%2FuYlDKXZqHpHf3LkTBKCf%2F9JpV76unjVkmMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKB9uKB61IFuyohhbyrcA0xDo7YFsQSovNCgmMahAFd6TF39D16mKdzHsmRf%2F8gzj0vmf98ZNCk73j7Id5g%2FIZ65lyyn2dNoQmn8E564danLMwPavL9Xl85iz92XZCKrwyn26hhLMMByAitzpyxc%2FahpfMy%2BiSN%2Fd23pi3mPAQfOc4Wa37B%2FrU%2FG%2BGywjuk0nSNvV3Mc6%2FXN0BhC0rSw%2Bm%2BSTE5B8%2F%2FfcgDKalWoQh6B5KuvftyyZ5CDTNC3eW218%2BKzh%2Fw8do%2B4%2BnR4KXTPgl13efmK69HSSfp5EewOLry4NrtgZ6rleub%2F9rnCQ5zDWxPvKg6uEDo6AV6wE9lOJ5Y%2BwGof6TGGGuApKePqrkuOnHuBJRzXlNbU%2BX8iar2B%2Fvy0DGRisPecVLvElTa4tfPMyLMHscHGTrw5aRbk0FD5wGX1yAY25cAYzkv3I5zU9gFrUeUoSbB%2Bna6ZAo7BjRZddwxXFd0k03SUXy1OsBDS5BF0b9OIBqTLmdo4PQ5n4J0K0a%2FZuCY4PEdTfPg2C7F6a%2BlhYDuLNfgwBTwd2sfF%2Fo%2FGiu9w60X9LKwMGqEypkO1YrXc%2F5E5GgoApZoLbPXRF5Xtthhh32iPb6mxN6UJzlpLYKc4m1Ma%2FxdR4eqzHF9KP8bi4TCY%2Fv7kMJm5gcEGOqUB3AiUIJRjsbgdBPmKO7utB%2B01OUd8W5CjTkkz2238UetogGP%2BKvK4IW0H1WUpBpjjyXZrMeq3g1dSe9zAPerEIbijYBEgMm254pueHqbBQDP%2BmzQcQja7uCgUakB1qZ%2FAd%2BDivLaP57DyEWs7lQ3gTnfLJHI3E0%2BLgkgSE3EEefhe4nTJdWu1p54nEBbmYegLlDisrodEbwXi0z8abCtJoiZowLWy&X-Amz-Signature=b74cc2d9d7e81cd3374bb6fbe4759a03fed9197efaad8a3b5f386fb7264e45c1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTAZRHYB%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDxVNzFogGLj%2B%2BIulz1Gjh4glzN70zv41cHfSMIZztKkQIgM0EdHk6w%2FuYlDKXZqHpHf3LkTBKCf%2F9JpV76unjVkmMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKB9uKB61IFuyohhbyrcA0xDo7YFsQSovNCgmMahAFd6TF39D16mKdzHsmRf%2F8gzj0vmf98ZNCk73j7Id5g%2FIZ65lyyn2dNoQmn8E564danLMwPavL9Xl85iz92XZCKrwyn26hhLMMByAitzpyxc%2FahpfMy%2BiSN%2Fd23pi3mPAQfOc4Wa37B%2FrU%2FG%2BGywjuk0nSNvV3Mc6%2FXN0BhC0rSw%2Bm%2BSTE5B8%2F%2FfcgDKalWoQh6B5KuvftyyZ5CDTNC3eW218%2BKzh%2Fw8do%2B4%2BnR4KXTPgl13efmK69HSSfp5EewOLry4NrtgZ6rleub%2F9rnCQ5zDWxPvKg6uEDo6AV6wE9lOJ5Y%2BwGof6TGGGuApKePqrkuOnHuBJRzXlNbU%2BX8iar2B%2Fvy0DGRisPecVLvElTa4tfPMyLMHscHGTrw5aRbk0FD5wGX1yAY25cAYzkv3I5zU9gFrUeUoSbB%2Bna6ZAo7BjRZddwxXFd0k03SUXy1OsBDS5BF0b9OIBqTLmdo4PQ5n4J0K0a%2FZuCY4PEdTfPg2C7F6a%2BlhYDuLNfgwBTwd2sfF%2Fo%2FGiu9w60X9LKwMGqEypkO1YrXc%2F5E5GgoApZoLbPXRF5Xtthhh32iPb6mxN6UJzlpLYKc4m1Ma%2FxdR4eqzHF9KP8bi4TCY%2Fv7kMJm5gcEGOqUB3AiUIJRjsbgdBPmKO7utB%2B01OUd8W5CjTkkz2238UetogGP%2BKvK4IW0H1WUpBpjjyXZrMeq3g1dSe9zAPerEIbijYBEgMm254pueHqbBQDP%2BmzQcQja7uCgUakB1qZ%2FAd%2BDivLaP57DyEWs7lQ3gTnfLJHI3E0%2BLgkgSE3EEefhe4nTJdWu1p54nEBbmYegLlDisrodEbwXi0z8abCtJoiZowLWy&X-Amz-Signature=08b2dd8df58aa2d73d876ef1b8871093d4933d3dbb8f3c25319ddd98601daca1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTAZRHYB%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDxVNzFogGLj%2B%2BIulz1Gjh4glzN70zv41cHfSMIZztKkQIgM0EdHk6w%2FuYlDKXZqHpHf3LkTBKCf%2F9JpV76unjVkmMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKB9uKB61IFuyohhbyrcA0xDo7YFsQSovNCgmMahAFd6TF39D16mKdzHsmRf%2F8gzj0vmf98ZNCk73j7Id5g%2FIZ65lyyn2dNoQmn8E564danLMwPavL9Xl85iz92XZCKrwyn26hhLMMByAitzpyxc%2FahpfMy%2BiSN%2Fd23pi3mPAQfOc4Wa37B%2FrU%2FG%2BGywjuk0nSNvV3Mc6%2FXN0BhC0rSw%2Bm%2BSTE5B8%2F%2FfcgDKalWoQh6B5KuvftyyZ5CDTNC3eW218%2BKzh%2Fw8do%2B4%2BnR4KXTPgl13efmK69HSSfp5EewOLry4NrtgZ6rleub%2F9rnCQ5zDWxPvKg6uEDo6AV6wE9lOJ5Y%2BwGof6TGGGuApKePqrkuOnHuBJRzXlNbU%2BX8iar2B%2Fvy0DGRisPecVLvElTa4tfPMyLMHscHGTrw5aRbk0FD5wGX1yAY25cAYzkv3I5zU9gFrUeUoSbB%2Bna6ZAo7BjRZddwxXFd0k03SUXy1OsBDS5BF0b9OIBqTLmdo4PQ5n4J0K0a%2FZuCY4PEdTfPg2C7F6a%2BlhYDuLNfgwBTwd2sfF%2Fo%2FGiu9w60X9LKwMGqEypkO1YrXc%2F5E5GgoApZoLbPXRF5Xtthhh32iPb6mxN6UJzlpLYKc4m1Ma%2FxdR4eqzHF9KP8bi4TCY%2Fv7kMJm5gcEGOqUB3AiUIJRjsbgdBPmKO7utB%2B01OUd8W5CjTkkz2238UetogGP%2BKvK4IW0H1WUpBpjjyXZrMeq3g1dSe9zAPerEIbijYBEgMm254pueHqbBQDP%2BmzQcQja7uCgUakB1qZ%2FAd%2BDivLaP57DyEWs7lQ3gTnfLJHI3E0%2BLgkgSE3EEefhe4nTJdWu1p54nEBbmYegLlDisrodEbwXi0z8abCtJoiZowLWy&X-Amz-Signature=792000fa1e3422b9c825d1b8ef899bcf90ef94640f19654800fcacb562a4ea79&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTAZRHYB%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDxVNzFogGLj%2B%2BIulz1Gjh4glzN70zv41cHfSMIZztKkQIgM0EdHk6w%2FuYlDKXZqHpHf3LkTBKCf%2F9JpV76unjVkmMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKB9uKB61IFuyohhbyrcA0xDo7YFsQSovNCgmMahAFd6TF39D16mKdzHsmRf%2F8gzj0vmf98ZNCk73j7Id5g%2FIZ65lyyn2dNoQmn8E564danLMwPavL9Xl85iz92XZCKrwyn26hhLMMByAitzpyxc%2FahpfMy%2BiSN%2Fd23pi3mPAQfOc4Wa37B%2FrU%2FG%2BGywjuk0nSNvV3Mc6%2FXN0BhC0rSw%2Bm%2BSTE5B8%2F%2FfcgDKalWoQh6B5KuvftyyZ5CDTNC3eW218%2BKzh%2Fw8do%2B4%2BnR4KXTPgl13efmK69HSSfp5EewOLry4NrtgZ6rleub%2F9rnCQ5zDWxPvKg6uEDo6AV6wE9lOJ5Y%2BwGof6TGGGuApKePqrkuOnHuBJRzXlNbU%2BX8iar2B%2Fvy0DGRisPecVLvElTa4tfPMyLMHscHGTrw5aRbk0FD5wGX1yAY25cAYzkv3I5zU9gFrUeUoSbB%2Bna6ZAo7BjRZddwxXFd0k03SUXy1OsBDS5BF0b9OIBqTLmdo4PQ5n4J0K0a%2FZuCY4PEdTfPg2C7F6a%2BlhYDuLNfgwBTwd2sfF%2Fo%2FGiu9w60X9LKwMGqEypkO1YrXc%2F5E5GgoApZoLbPXRF5Xtthhh32iPb6mxN6UJzlpLYKc4m1Ma%2FxdR4eqzHF9KP8bi4TCY%2Fv7kMJm5gcEGOqUB3AiUIJRjsbgdBPmKO7utB%2B01OUd8W5CjTkkz2238UetogGP%2BKvK4IW0H1WUpBpjjyXZrMeq3g1dSe9zAPerEIbijYBEgMm254pueHqbBQDP%2BmzQcQja7uCgUakB1qZ%2FAd%2BDivLaP57DyEWs7lQ3gTnfLJHI3E0%2BLgkgSE3EEefhe4nTJdWu1p54nEBbmYegLlDisrodEbwXi0z8abCtJoiZowLWy&X-Amz-Signature=e6466193abb09a06a6828d468c0fae3677751764c580b784edd4576a3611d326&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTAZRHYB%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDxVNzFogGLj%2B%2BIulz1Gjh4glzN70zv41cHfSMIZztKkQIgM0EdHk6w%2FuYlDKXZqHpHf3LkTBKCf%2F9JpV76unjVkmMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKB9uKB61IFuyohhbyrcA0xDo7YFsQSovNCgmMahAFd6TF39D16mKdzHsmRf%2F8gzj0vmf98ZNCk73j7Id5g%2FIZ65lyyn2dNoQmn8E564danLMwPavL9Xl85iz92XZCKrwyn26hhLMMByAitzpyxc%2FahpfMy%2BiSN%2Fd23pi3mPAQfOc4Wa37B%2FrU%2FG%2BGywjuk0nSNvV3Mc6%2FXN0BhC0rSw%2Bm%2BSTE5B8%2F%2FfcgDKalWoQh6B5KuvftyyZ5CDTNC3eW218%2BKzh%2Fw8do%2B4%2BnR4KXTPgl13efmK69HSSfp5EewOLry4NrtgZ6rleub%2F9rnCQ5zDWxPvKg6uEDo6AV6wE9lOJ5Y%2BwGof6TGGGuApKePqrkuOnHuBJRzXlNbU%2BX8iar2B%2Fvy0DGRisPecVLvElTa4tfPMyLMHscHGTrw5aRbk0FD5wGX1yAY25cAYzkv3I5zU9gFrUeUoSbB%2Bna6ZAo7BjRZddwxXFd0k03SUXy1OsBDS5BF0b9OIBqTLmdo4PQ5n4J0K0a%2FZuCY4PEdTfPg2C7F6a%2BlhYDuLNfgwBTwd2sfF%2Fo%2FGiu9w60X9LKwMGqEypkO1YrXc%2F5E5GgoApZoLbPXRF5Xtthhh32iPb6mxN6UJzlpLYKc4m1Ma%2FxdR4eqzHF9KP8bi4TCY%2Fv7kMJm5gcEGOqUB3AiUIJRjsbgdBPmKO7utB%2B01OUd8W5CjTkkz2238UetogGP%2BKvK4IW0H1WUpBpjjyXZrMeq3g1dSe9zAPerEIbijYBEgMm254pueHqbBQDP%2BmzQcQja7uCgUakB1qZ%2FAd%2BDivLaP57DyEWs7lQ3gTnfLJHI3E0%2BLgkgSE3EEefhe4nTJdWu1p54nEBbmYegLlDisrodEbwXi0z8abCtJoiZowLWy&X-Amz-Signature=0768e6390ca1da41fcf1f6f3fbc11ae3a16e7de966e73b2d4aee958d9ea8e44a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
