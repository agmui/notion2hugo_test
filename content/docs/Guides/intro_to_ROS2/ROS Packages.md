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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3BCKKY3%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMq0ZVfajn82fAhDfdWOtmOYxet%2BhTiUz8395v0I2AxAiB0fjXyMyUHg3Vgt8JbZnD4ZooWFSWT1yNH0O4tCIaoICr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMXpNTVMK3A7%2BNhYS4KtwD5HurcamWv%2FvfDevEGQrw716Ui%2Bgglcq5B%2FMr5kge%2BOHIKn%2FrcPLDSX2zfHrJi4U3uQLpBsPwLP7hujc37xFiOfzEd%2FYkodprofyu%2BJA8pSi5jLjKIRDHa%2Bl66EjD4ncSTfVqZpxfkvy1wwhA3expKslxzjgrJS5ApdGbl2tU69eIqd6YNrtXn%2FvOeiaT8Jz7JT1WtSUixj%2FVHR7MD%2BKRy8L9sy1dgfu3OI1EmWUipYXAYX8%2B8dRiBPqilbayo85QbjqBCSmTn9Jn7VeCsIYiDwGJ48kFDPXVf1OkCo0tVakuHcZzyRmVpEr0udGLTteb3NcgPaVnLpP4BI%2BdTFALz8jHpMBsm5FFq4JMKHtZTv7Zq2J0%2Fp0V3zzGtq5fFgN31f0tV75QOH8BSTqQg2R%2BEMjBlS6RAX1eqJjjzIfJmQEDzK3yyfe0aLDGl5N48RB6g8NqJhOwZHN%2BOemHkmWobVJm1Vf05Hqtf1hVhSOLNxB0hCCy8HPa%2BKs7H6mBqdNEwA6pKoaqpcqhnkf3GrPvCt4OUE8kDEy4BEatRhu06RmtnGgAKBW2A0OpJ2YnC30QxC1YJW6ZY61s%2FfaCPIEcMqFfIXvxC3fjInYncEx94TXyM9eU9yb7ciDgTjYw48DivgY6pgFvs1mjPcA88IYOSVjIpOJRgfcDMJCQ6JzvJnJ5L5pyv%2BM75v%2Bi77awJWYZJIJBMSwlBJRegVuqUOnTnYPOdxd625pFnSOMA%2FfD%2FsewAdnYPMiDv9NLzr3whQp3VQ67HIENL2fWB0wCw6M3CMVaZi98K4DogLh3i0f3fa0%2FW8oaXTtCQsGH3hyEiRrb5Qm1f2anbdVXxPlDOtlgUskjD63gSyCaJY%2Bp&X-Amz-Signature=6fddf82c79a3b723ada63b11d1f38d1640dc544870db55067274251e27d50b03&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3BCKKY3%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMq0ZVfajn82fAhDfdWOtmOYxet%2BhTiUz8395v0I2AxAiB0fjXyMyUHg3Vgt8JbZnD4ZooWFSWT1yNH0O4tCIaoICr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMXpNTVMK3A7%2BNhYS4KtwD5HurcamWv%2FvfDevEGQrw716Ui%2Bgglcq5B%2FMr5kge%2BOHIKn%2FrcPLDSX2zfHrJi4U3uQLpBsPwLP7hujc37xFiOfzEd%2FYkodprofyu%2BJA8pSi5jLjKIRDHa%2Bl66EjD4ncSTfVqZpxfkvy1wwhA3expKslxzjgrJS5ApdGbl2tU69eIqd6YNrtXn%2FvOeiaT8Jz7JT1WtSUixj%2FVHR7MD%2BKRy8L9sy1dgfu3OI1EmWUipYXAYX8%2B8dRiBPqilbayo85QbjqBCSmTn9Jn7VeCsIYiDwGJ48kFDPXVf1OkCo0tVakuHcZzyRmVpEr0udGLTteb3NcgPaVnLpP4BI%2BdTFALz8jHpMBsm5FFq4JMKHtZTv7Zq2J0%2Fp0V3zzGtq5fFgN31f0tV75QOH8BSTqQg2R%2BEMjBlS6RAX1eqJjjzIfJmQEDzK3yyfe0aLDGl5N48RB6g8NqJhOwZHN%2BOemHkmWobVJm1Vf05Hqtf1hVhSOLNxB0hCCy8HPa%2BKs7H6mBqdNEwA6pKoaqpcqhnkf3GrPvCt4OUE8kDEy4BEatRhu06RmtnGgAKBW2A0OpJ2YnC30QxC1YJW6ZY61s%2FfaCPIEcMqFfIXvxC3fjInYncEx94TXyM9eU9yb7ciDgTjYw48DivgY6pgFvs1mjPcA88IYOSVjIpOJRgfcDMJCQ6JzvJnJ5L5pyv%2BM75v%2Bi77awJWYZJIJBMSwlBJRegVuqUOnTnYPOdxd625pFnSOMA%2FfD%2FsewAdnYPMiDv9NLzr3whQp3VQ67HIENL2fWB0wCw6M3CMVaZi98K4DogLh3i0f3fa0%2FW8oaXTtCQsGH3hyEiRrb5Qm1f2anbdVXxPlDOtlgUskjD63gSyCaJY%2Bp&X-Amz-Signature=67e7d6c06a2dc1b15d68f4162ff6dbe4dfd661800e8d67c5ac0739da2a293403&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3BCKKY3%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMq0ZVfajn82fAhDfdWOtmOYxet%2BhTiUz8395v0I2AxAiB0fjXyMyUHg3Vgt8JbZnD4ZooWFSWT1yNH0O4tCIaoICr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMXpNTVMK3A7%2BNhYS4KtwD5HurcamWv%2FvfDevEGQrw716Ui%2Bgglcq5B%2FMr5kge%2BOHIKn%2FrcPLDSX2zfHrJi4U3uQLpBsPwLP7hujc37xFiOfzEd%2FYkodprofyu%2BJA8pSi5jLjKIRDHa%2Bl66EjD4ncSTfVqZpxfkvy1wwhA3expKslxzjgrJS5ApdGbl2tU69eIqd6YNrtXn%2FvOeiaT8Jz7JT1WtSUixj%2FVHR7MD%2BKRy8L9sy1dgfu3OI1EmWUipYXAYX8%2B8dRiBPqilbayo85QbjqBCSmTn9Jn7VeCsIYiDwGJ48kFDPXVf1OkCo0tVakuHcZzyRmVpEr0udGLTteb3NcgPaVnLpP4BI%2BdTFALz8jHpMBsm5FFq4JMKHtZTv7Zq2J0%2Fp0V3zzGtq5fFgN31f0tV75QOH8BSTqQg2R%2BEMjBlS6RAX1eqJjjzIfJmQEDzK3yyfe0aLDGl5N48RB6g8NqJhOwZHN%2BOemHkmWobVJm1Vf05Hqtf1hVhSOLNxB0hCCy8HPa%2BKs7H6mBqdNEwA6pKoaqpcqhnkf3GrPvCt4OUE8kDEy4BEatRhu06RmtnGgAKBW2A0OpJ2YnC30QxC1YJW6ZY61s%2FfaCPIEcMqFfIXvxC3fjInYncEx94TXyM9eU9yb7ciDgTjYw48DivgY6pgFvs1mjPcA88IYOSVjIpOJRgfcDMJCQ6JzvJnJ5L5pyv%2BM75v%2Bi77awJWYZJIJBMSwlBJRegVuqUOnTnYPOdxd625pFnSOMA%2FfD%2FsewAdnYPMiDv9NLzr3whQp3VQ67HIENL2fWB0wCw6M3CMVaZi98K4DogLh3i0f3fa0%2FW8oaXTtCQsGH3hyEiRrb5Qm1f2anbdVXxPlDOtlgUskjD63gSyCaJY%2Bp&X-Amz-Signature=cbaa00220a4e8b758da37676e39df8a1f93159c645c0b39d37ac5c397244b032&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3BCKKY3%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMq0ZVfajn82fAhDfdWOtmOYxet%2BhTiUz8395v0I2AxAiB0fjXyMyUHg3Vgt8JbZnD4ZooWFSWT1yNH0O4tCIaoICr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMXpNTVMK3A7%2BNhYS4KtwD5HurcamWv%2FvfDevEGQrw716Ui%2Bgglcq5B%2FMr5kge%2BOHIKn%2FrcPLDSX2zfHrJi4U3uQLpBsPwLP7hujc37xFiOfzEd%2FYkodprofyu%2BJA8pSi5jLjKIRDHa%2Bl66EjD4ncSTfVqZpxfkvy1wwhA3expKslxzjgrJS5ApdGbl2tU69eIqd6YNrtXn%2FvOeiaT8Jz7JT1WtSUixj%2FVHR7MD%2BKRy8L9sy1dgfu3OI1EmWUipYXAYX8%2B8dRiBPqilbayo85QbjqBCSmTn9Jn7VeCsIYiDwGJ48kFDPXVf1OkCo0tVakuHcZzyRmVpEr0udGLTteb3NcgPaVnLpP4BI%2BdTFALz8jHpMBsm5FFq4JMKHtZTv7Zq2J0%2Fp0V3zzGtq5fFgN31f0tV75QOH8BSTqQg2R%2BEMjBlS6RAX1eqJjjzIfJmQEDzK3yyfe0aLDGl5N48RB6g8NqJhOwZHN%2BOemHkmWobVJm1Vf05Hqtf1hVhSOLNxB0hCCy8HPa%2BKs7H6mBqdNEwA6pKoaqpcqhnkf3GrPvCt4OUE8kDEy4BEatRhu06RmtnGgAKBW2A0OpJ2YnC30QxC1YJW6ZY61s%2FfaCPIEcMqFfIXvxC3fjInYncEx94TXyM9eU9yb7ciDgTjYw48DivgY6pgFvs1mjPcA88IYOSVjIpOJRgfcDMJCQ6JzvJnJ5L5pyv%2BM75v%2Bi77awJWYZJIJBMSwlBJRegVuqUOnTnYPOdxd625pFnSOMA%2FfD%2FsewAdnYPMiDv9NLzr3whQp3VQ67HIENL2fWB0wCw6M3CMVaZi98K4DogLh3i0f3fa0%2FW8oaXTtCQsGH3hyEiRrb5Qm1f2anbdVXxPlDOtlgUskjD63gSyCaJY%2Bp&X-Amz-Signature=afbc15366ae8c0c72d9f4e77406ec858d142d0de772ba921d6df5a892d9fa4d5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3BCKKY3%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMq0ZVfajn82fAhDfdWOtmOYxet%2BhTiUz8395v0I2AxAiB0fjXyMyUHg3Vgt8JbZnD4ZooWFSWT1yNH0O4tCIaoICr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMXpNTVMK3A7%2BNhYS4KtwD5HurcamWv%2FvfDevEGQrw716Ui%2Bgglcq5B%2FMr5kge%2BOHIKn%2FrcPLDSX2zfHrJi4U3uQLpBsPwLP7hujc37xFiOfzEd%2FYkodprofyu%2BJA8pSi5jLjKIRDHa%2Bl66EjD4ncSTfVqZpxfkvy1wwhA3expKslxzjgrJS5ApdGbl2tU69eIqd6YNrtXn%2FvOeiaT8Jz7JT1WtSUixj%2FVHR7MD%2BKRy8L9sy1dgfu3OI1EmWUipYXAYX8%2B8dRiBPqilbayo85QbjqBCSmTn9Jn7VeCsIYiDwGJ48kFDPXVf1OkCo0tVakuHcZzyRmVpEr0udGLTteb3NcgPaVnLpP4BI%2BdTFALz8jHpMBsm5FFq4JMKHtZTv7Zq2J0%2Fp0V3zzGtq5fFgN31f0tV75QOH8BSTqQg2R%2BEMjBlS6RAX1eqJjjzIfJmQEDzK3yyfe0aLDGl5N48RB6g8NqJhOwZHN%2BOemHkmWobVJm1Vf05Hqtf1hVhSOLNxB0hCCy8HPa%2BKs7H6mBqdNEwA6pKoaqpcqhnkf3GrPvCt4OUE8kDEy4BEatRhu06RmtnGgAKBW2A0OpJ2YnC30QxC1YJW6ZY61s%2FfaCPIEcMqFfIXvxC3fjInYncEx94TXyM9eU9yb7ciDgTjYw48DivgY6pgFvs1mjPcA88IYOSVjIpOJRgfcDMJCQ6JzvJnJ5L5pyv%2BM75v%2Bi77awJWYZJIJBMSwlBJRegVuqUOnTnYPOdxd625pFnSOMA%2FfD%2FsewAdnYPMiDv9NLzr3whQp3VQ67HIENL2fWB0wCw6M3CMVaZi98K4DogLh3i0f3fa0%2FW8oaXTtCQsGH3hyEiRrb5Qm1f2anbdVXxPlDOtlgUskjD63gSyCaJY%2Bp&X-Amz-Signature=d82fcd29b75858a0f1e97cd0cde09664274ed30c9790acb12411f45a264c423c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3BCKKY3%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMq0ZVfajn82fAhDfdWOtmOYxet%2BhTiUz8395v0I2AxAiB0fjXyMyUHg3Vgt8JbZnD4ZooWFSWT1yNH0O4tCIaoICr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMXpNTVMK3A7%2BNhYS4KtwD5HurcamWv%2FvfDevEGQrw716Ui%2Bgglcq5B%2FMr5kge%2BOHIKn%2FrcPLDSX2zfHrJi4U3uQLpBsPwLP7hujc37xFiOfzEd%2FYkodprofyu%2BJA8pSi5jLjKIRDHa%2Bl66EjD4ncSTfVqZpxfkvy1wwhA3expKslxzjgrJS5ApdGbl2tU69eIqd6YNrtXn%2FvOeiaT8Jz7JT1WtSUixj%2FVHR7MD%2BKRy8L9sy1dgfu3OI1EmWUipYXAYX8%2B8dRiBPqilbayo85QbjqBCSmTn9Jn7VeCsIYiDwGJ48kFDPXVf1OkCo0tVakuHcZzyRmVpEr0udGLTteb3NcgPaVnLpP4BI%2BdTFALz8jHpMBsm5FFq4JMKHtZTv7Zq2J0%2Fp0V3zzGtq5fFgN31f0tV75QOH8BSTqQg2R%2BEMjBlS6RAX1eqJjjzIfJmQEDzK3yyfe0aLDGl5N48RB6g8NqJhOwZHN%2BOemHkmWobVJm1Vf05Hqtf1hVhSOLNxB0hCCy8HPa%2BKs7H6mBqdNEwA6pKoaqpcqhnkf3GrPvCt4OUE8kDEy4BEatRhu06RmtnGgAKBW2A0OpJ2YnC30QxC1YJW6ZY61s%2FfaCPIEcMqFfIXvxC3fjInYncEx94TXyM9eU9yb7ciDgTjYw48DivgY6pgFvs1mjPcA88IYOSVjIpOJRgfcDMJCQ6JzvJnJ5L5pyv%2BM75v%2Bi77awJWYZJIJBMSwlBJRegVuqUOnTnYPOdxd625pFnSOMA%2FfD%2FsewAdnYPMiDv9NLzr3whQp3VQ67HIENL2fWB0wCw6M3CMVaZi98K4DogLh3i0f3fa0%2FW8oaXTtCQsGH3hyEiRrb5Qm1f2anbdVXxPlDOtlgUskjD63gSyCaJY%2Bp&X-Amz-Signature=ec42731942cd543ed18ad80978d2b02d36d6ae7279dd286d40c54485708d581a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3BCKKY3%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMq0ZVfajn82fAhDfdWOtmOYxet%2BhTiUz8395v0I2AxAiB0fjXyMyUHg3Vgt8JbZnD4ZooWFSWT1yNH0O4tCIaoICr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMXpNTVMK3A7%2BNhYS4KtwD5HurcamWv%2FvfDevEGQrw716Ui%2Bgglcq5B%2FMr5kge%2BOHIKn%2FrcPLDSX2zfHrJi4U3uQLpBsPwLP7hujc37xFiOfzEd%2FYkodprofyu%2BJA8pSi5jLjKIRDHa%2Bl66EjD4ncSTfVqZpxfkvy1wwhA3expKslxzjgrJS5ApdGbl2tU69eIqd6YNrtXn%2FvOeiaT8Jz7JT1WtSUixj%2FVHR7MD%2BKRy8L9sy1dgfu3OI1EmWUipYXAYX8%2B8dRiBPqilbayo85QbjqBCSmTn9Jn7VeCsIYiDwGJ48kFDPXVf1OkCo0tVakuHcZzyRmVpEr0udGLTteb3NcgPaVnLpP4BI%2BdTFALz8jHpMBsm5FFq4JMKHtZTv7Zq2J0%2Fp0V3zzGtq5fFgN31f0tV75QOH8BSTqQg2R%2BEMjBlS6RAX1eqJjjzIfJmQEDzK3yyfe0aLDGl5N48RB6g8NqJhOwZHN%2BOemHkmWobVJm1Vf05Hqtf1hVhSOLNxB0hCCy8HPa%2BKs7H6mBqdNEwA6pKoaqpcqhnkf3GrPvCt4OUE8kDEy4BEatRhu06RmtnGgAKBW2A0OpJ2YnC30QxC1YJW6ZY61s%2FfaCPIEcMqFfIXvxC3fjInYncEx94TXyM9eU9yb7ciDgTjYw48DivgY6pgFvs1mjPcA88IYOSVjIpOJRgfcDMJCQ6JzvJnJ5L5pyv%2BM75v%2Bi77awJWYZJIJBMSwlBJRegVuqUOnTnYPOdxd625pFnSOMA%2FfD%2FsewAdnYPMiDv9NLzr3whQp3VQ67HIENL2fWB0wCw6M3CMVaZi98K4DogLh3i0f3fa0%2FW8oaXTtCQsGH3hyEiRrb5Qm1f2anbdVXxPlDOtlgUskjD63gSyCaJY%2Bp&X-Amz-Signature=eee8f03ec25a1c1ef12c373d21c06f12def4ecb02b4c0c3b7a66eb82714aff9b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
