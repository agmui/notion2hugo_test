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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SM4UY2R%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCoJ2wBV%2BCq4esWv%2FYvKI%2FcZNWYHQOxLiGh7K2GlZ68ewIgEVLK5Y6k9bP4GS7G%2FvcF0pb3Wubi7C7zHxoVZk10j9wq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDGno5RAo9jen7yC7%2FCrcA9EJ8t7xbReGVcBXXwgbnXgpzPhgL2eYEMrVfmkNT20oYhjQkgVuJNVZY%2BC71euMI%2B9U9zriYKb7KxqlPr%2FW88nGGoJc9z06FBgCMLfiyq42d1aE5g%2FCRjA3XnnBHy1kjoO%2FsIAiqlJyGpDmSxUP5qxEDU2RlIkZYaPDZ1h2A7rd9LEtg6yTX2mVYtq5loOZIjEyYKPa7v5qxSbMYfr33P698D%2B9hbiYdawMzvHisGG3YCrI%2Bg8uHkkRapWTcLOr7gwT0B8MPLtp7dI5ShnG%2FjRE0kBG9E6%2FLq0uQGYdcHvBnQ1FRnI3y7DLvEMSD4SFhJPsc4WP4AiM3%2F%2FgW1DWjYQ9Se8iUTEZfpSMv0cXKEsduJMbYL3beYIiTvzt2RGBWktdmfBA%2FyO%2FIzXpcckj7fQAFMf%2FmCupkfhQmnIfBJwILIF%2FdC81Tb13PZLR%2B7G9MqMT86t7Ecpjf1do3kxo%2BxaLu0s27EiVOFvOPPrNtDF1n9VycoghePfqm64D0pLBfUpthNk0Jenu9o7d5dBVPTGcXYlxHLp8mYGLxvPrLGBFFtezXQzGqsAOV4axCVG314ltO8mu93AWcBz5YziGuTQWa31D25wfOc6M1VTg7X1osEm4%2F0rloOwk5cKDMP7Jyr0GOqUBjsm9PmJqC6hcYSa0lQRD%2Fsdi1mAS%2B7Jlu3h1KDwy2iI6chCZM%2B1rXlTqae9CdZkuJ8%2B%2BqvTqfymLZP9W0y5uf5Lhdhz8ltPFPA%2B68GEc2EahLu2xIfzz5SH45Scys0j6CzHJt9sCkb%2Fh%2BpqM31DCORaA5LNPdrNQXqrYQtQp52ubiXRhpq4XhluM%2F10jY3QRT3EgzeVF0fWxNJbYczUSZvF47DtU&X-Amz-Signature=265658754820968287eca07db59a70c0545d8bdd376fe28dc36b2281846d0832&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SM4UY2R%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCoJ2wBV%2BCq4esWv%2FYvKI%2FcZNWYHQOxLiGh7K2GlZ68ewIgEVLK5Y6k9bP4GS7G%2FvcF0pb3Wubi7C7zHxoVZk10j9wq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDGno5RAo9jen7yC7%2FCrcA9EJ8t7xbReGVcBXXwgbnXgpzPhgL2eYEMrVfmkNT20oYhjQkgVuJNVZY%2BC71euMI%2B9U9zriYKb7KxqlPr%2FW88nGGoJc9z06FBgCMLfiyq42d1aE5g%2FCRjA3XnnBHy1kjoO%2FsIAiqlJyGpDmSxUP5qxEDU2RlIkZYaPDZ1h2A7rd9LEtg6yTX2mVYtq5loOZIjEyYKPa7v5qxSbMYfr33P698D%2B9hbiYdawMzvHisGG3YCrI%2Bg8uHkkRapWTcLOr7gwT0B8MPLtp7dI5ShnG%2FjRE0kBG9E6%2FLq0uQGYdcHvBnQ1FRnI3y7DLvEMSD4SFhJPsc4WP4AiM3%2F%2FgW1DWjYQ9Se8iUTEZfpSMv0cXKEsduJMbYL3beYIiTvzt2RGBWktdmfBA%2FyO%2FIzXpcckj7fQAFMf%2FmCupkfhQmnIfBJwILIF%2FdC81Tb13PZLR%2B7G9MqMT86t7Ecpjf1do3kxo%2BxaLu0s27EiVOFvOPPrNtDF1n9VycoghePfqm64D0pLBfUpthNk0Jenu9o7d5dBVPTGcXYlxHLp8mYGLxvPrLGBFFtezXQzGqsAOV4axCVG314ltO8mu93AWcBz5YziGuTQWa31D25wfOc6M1VTg7X1osEm4%2F0rloOwk5cKDMP7Jyr0GOqUBjsm9PmJqC6hcYSa0lQRD%2Fsdi1mAS%2B7Jlu3h1KDwy2iI6chCZM%2B1rXlTqae9CdZkuJ8%2B%2BqvTqfymLZP9W0y5uf5Lhdhz8ltPFPA%2B68GEc2EahLu2xIfzz5SH45Scys0j6CzHJt9sCkb%2Fh%2BpqM31DCORaA5LNPdrNQXqrYQtQp52ubiXRhpq4XhluM%2F10jY3QRT3EgzeVF0fWxNJbYczUSZvF47DtU&X-Amz-Signature=06747cf563e1731ab550542780f9c976c39496cd4343163f8990a51de7401785&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SM4UY2R%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCoJ2wBV%2BCq4esWv%2FYvKI%2FcZNWYHQOxLiGh7K2GlZ68ewIgEVLK5Y6k9bP4GS7G%2FvcF0pb3Wubi7C7zHxoVZk10j9wq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDGno5RAo9jen7yC7%2FCrcA9EJ8t7xbReGVcBXXwgbnXgpzPhgL2eYEMrVfmkNT20oYhjQkgVuJNVZY%2BC71euMI%2B9U9zriYKb7KxqlPr%2FW88nGGoJc9z06FBgCMLfiyq42d1aE5g%2FCRjA3XnnBHy1kjoO%2FsIAiqlJyGpDmSxUP5qxEDU2RlIkZYaPDZ1h2A7rd9LEtg6yTX2mVYtq5loOZIjEyYKPa7v5qxSbMYfr33P698D%2B9hbiYdawMzvHisGG3YCrI%2Bg8uHkkRapWTcLOr7gwT0B8MPLtp7dI5ShnG%2FjRE0kBG9E6%2FLq0uQGYdcHvBnQ1FRnI3y7DLvEMSD4SFhJPsc4WP4AiM3%2F%2FgW1DWjYQ9Se8iUTEZfpSMv0cXKEsduJMbYL3beYIiTvzt2RGBWktdmfBA%2FyO%2FIzXpcckj7fQAFMf%2FmCupkfhQmnIfBJwILIF%2FdC81Tb13PZLR%2B7G9MqMT86t7Ecpjf1do3kxo%2BxaLu0s27EiVOFvOPPrNtDF1n9VycoghePfqm64D0pLBfUpthNk0Jenu9o7d5dBVPTGcXYlxHLp8mYGLxvPrLGBFFtezXQzGqsAOV4axCVG314ltO8mu93AWcBz5YziGuTQWa31D25wfOc6M1VTg7X1osEm4%2F0rloOwk5cKDMP7Jyr0GOqUBjsm9PmJqC6hcYSa0lQRD%2Fsdi1mAS%2B7Jlu3h1KDwy2iI6chCZM%2B1rXlTqae9CdZkuJ8%2B%2BqvTqfymLZP9W0y5uf5Lhdhz8ltPFPA%2B68GEc2EahLu2xIfzz5SH45Scys0j6CzHJt9sCkb%2Fh%2BpqM31DCORaA5LNPdrNQXqrYQtQp52ubiXRhpq4XhluM%2F10jY3QRT3EgzeVF0fWxNJbYczUSZvF47DtU&X-Amz-Signature=11b96fdcb98df4c7500a6f86b9702f6ec8062f258ffaf4bb4079bd55e4479444&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SM4UY2R%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCoJ2wBV%2BCq4esWv%2FYvKI%2FcZNWYHQOxLiGh7K2GlZ68ewIgEVLK5Y6k9bP4GS7G%2FvcF0pb3Wubi7C7zHxoVZk10j9wq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDGno5RAo9jen7yC7%2FCrcA9EJ8t7xbReGVcBXXwgbnXgpzPhgL2eYEMrVfmkNT20oYhjQkgVuJNVZY%2BC71euMI%2B9U9zriYKb7KxqlPr%2FW88nGGoJc9z06FBgCMLfiyq42d1aE5g%2FCRjA3XnnBHy1kjoO%2FsIAiqlJyGpDmSxUP5qxEDU2RlIkZYaPDZ1h2A7rd9LEtg6yTX2mVYtq5loOZIjEyYKPa7v5qxSbMYfr33P698D%2B9hbiYdawMzvHisGG3YCrI%2Bg8uHkkRapWTcLOr7gwT0B8MPLtp7dI5ShnG%2FjRE0kBG9E6%2FLq0uQGYdcHvBnQ1FRnI3y7DLvEMSD4SFhJPsc4WP4AiM3%2F%2FgW1DWjYQ9Se8iUTEZfpSMv0cXKEsduJMbYL3beYIiTvzt2RGBWktdmfBA%2FyO%2FIzXpcckj7fQAFMf%2FmCupkfhQmnIfBJwILIF%2FdC81Tb13PZLR%2B7G9MqMT86t7Ecpjf1do3kxo%2BxaLu0s27EiVOFvOPPrNtDF1n9VycoghePfqm64D0pLBfUpthNk0Jenu9o7d5dBVPTGcXYlxHLp8mYGLxvPrLGBFFtezXQzGqsAOV4axCVG314ltO8mu93AWcBz5YziGuTQWa31D25wfOc6M1VTg7X1osEm4%2F0rloOwk5cKDMP7Jyr0GOqUBjsm9PmJqC6hcYSa0lQRD%2Fsdi1mAS%2B7Jlu3h1KDwy2iI6chCZM%2B1rXlTqae9CdZkuJ8%2B%2BqvTqfymLZP9W0y5uf5Lhdhz8ltPFPA%2B68GEc2EahLu2xIfzz5SH45Scys0j6CzHJt9sCkb%2Fh%2BpqM31DCORaA5LNPdrNQXqrYQtQp52ubiXRhpq4XhluM%2F10jY3QRT3EgzeVF0fWxNJbYczUSZvF47DtU&X-Amz-Signature=935f9f07d0473fa3e758b044a1ded7572513f83522e630b9e22d618b46b01a80&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SM4UY2R%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCoJ2wBV%2BCq4esWv%2FYvKI%2FcZNWYHQOxLiGh7K2GlZ68ewIgEVLK5Y6k9bP4GS7G%2FvcF0pb3Wubi7C7zHxoVZk10j9wq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDGno5RAo9jen7yC7%2FCrcA9EJ8t7xbReGVcBXXwgbnXgpzPhgL2eYEMrVfmkNT20oYhjQkgVuJNVZY%2BC71euMI%2B9U9zriYKb7KxqlPr%2FW88nGGoJc9z06FBgCMLfiyq42d1aE5g%2FCRjA3XnnBHy1kjoO%2FsIAiqlJyGpDmSxUP5qxEDU2RlIkZYaPDZ1h2A7rd9LEtg6yTX2mVYtq5loOZIjEyYKPa7v5qxSbMYfr33P698D%2B9hbiYdawMzvHisGG3YCrI%2Bg8uHkkRapWTcLOr7gwT0B8MPLtp7dI5ShnG%2FjRE0kBG9E6%2FLq0uQGYdcHvBnQ1FRnI3y7DLvEMSD4SFhJPsc4WP4AiM3%2F%2FgW1DWjYQ9Se8iUTEZfpSMv0cXKEsduJMbYL3beYIiTvzt2RGBWktdmfBA%2FyO%2FIzXpcckj7fQAFMf%2FmCupkfhQmnIfBJwILIF%2FdC81Tb13PZLR%2B7G9MqMT86t7Ecpjf1do3kxo%2BxaLu0s27EiVOFvOPPrNtDF1n9VycoghePfqm64D0pLBfUpthNk0Jenu9o7d5dBVPTGcXYlxHLp8mYGLxvPrLGBFFtezXQzGqsAOV4axCVG314ltO8mu93AWcBz5YziGuTQWa31D25wfOc6M1VTg7X1osEm4%2F0rloOwk5cKDMP7Jyr0GOqUBjsm9PmJqC6hcYSa0lQRD%2Fsdi1mAS%2B7Jlu3h1KDwy2iI6chCZM%2B1rXlTqae9CdZkuJ8%2B%2BqvTqfymLZP9W0y5uf5Lhdhz8ltPFPA%2B68GEc2EahLu2xIfzz5SH45Scys0j6CzHJt9sCkb%2Fh%2BpqM31DCORaA5LNPdrNQXqrYQtQp52ubiXRhpq4XhluM%2F10jY3QRT3EgzeVF0fWxNJbYczUSZvF47DtU&X-Amz-Signature=dbe62edf56a68d9f756bde4b7315db6695189f69df80d548d058a515d55482e8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SM4UY2R%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCoJ2wBV%2BCq4esWv%2FYvKI%2FcZNWYHQOxLiGh7K2GlZ68ewIgEVLK5Y6k9bP4GS7G%2FvcF0pb3Wubi7C7zHxoVZk10j9wq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDGno5RAo9jen7yC7%2FCrcA9EJ8t7xbReGVcBXXwgbnXgpzPhgL2eYEMrVfmkNT20oYhjQkgVuJNVZY%2BC71euMI%2B9U9zriYKb7KxqlPr%2FW88nGGoJc9z06FBgCMLfiyq42d1aE5g%2FCRjA3XnnBHy1kjoO%2FsIAiqlJyGpDmSxUP5qxEDU2RlIkZYaPDZ1h2A7rd9LEtg6yTX2mVYtq5loOZIjEyYKPa7v5qxSbMYfr33P698D%2B9hbiYdawMzvHisGG3YCrI%2Bg8uHkkRapWTcLOr7gwT0B8MPLtp7dI5ShnG%2FjRE0kBG9E6%2FLq0uQGYdcHvBnQ1FRnI3y7DLvEMSD4SFhJPsc4WP4AiM3%2F%2FgW1DWjYQ9Se8iUTEZfpSMv0cXKEsduJMbYL3beYIiTvzt2RGBWktdmfBA%2FyO%2FIzXpcckj7fQAFMf%2FmCupkfhQmnIfBJwILIF%2FdC81Tb13PZLR%2B7G9MqMT86t7Ecpjf1do3kxo%2BxaLu0s27EiVOFvOPPrNtDF1n9VycoghePfqm64D0pLBfUpthNk0Jenu9o7d5dBVPTGcXYlxHLp8mYGLxvPrLGBFFtezXQzGqsAOV4axCVG314ltO8mu93AWcBz5YziGuTQWa31D25wfOc6M1VTg7X1osEm4%2F0rloOwk5cKDMP7Jyr0GOqUBjsm9PmJqC6hcYSa0lQRD%2Fsdi1mAS%2B7Jlu3h1KDwy2iI6chCZM%2B1rXlTqae9CdZkuJ8%2B%2BqvTqfymLZP9W0y5uf5Lhdhz8ltPFPA%2B68GEc2EahLu2xIfzz5SH45Scys0j6CzHJt9sCkb%2Fh%2BpqM31DCORaA5LNPdrNQXqrYQtQp52ubiXRhpq4XhluM%2F10jY3QRT3EgzeVF0fWxNJbYczUSZvF47DtU&X-Amz-Signature=d62658b21192f03582e6ea217bc1f73cb5dc8ebeaf56a97e022d853e1d806b93&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SM4UY2R%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCoJ2wBV%2BCq4esWv%2FYvKI%2FcZNWYHQOxLiGh7K2GlZ68ewIgEVLK5Y6k9bP4GS7G%2FvcF0pb3Wubi7C7zHxoVZk10j9wq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDGno5RAo9jen7yC7%2FCrcA9EJ8t7xbReGVcBXXwgbnXgpzPhgL2eYEMrVfmkNT20oYhjQkgVuJNVZY%2BC71euMI%2B9U9zriYKb7KxqlPr%2FW88nGGoJc9z06FBgCMLfiyq42d1aE5g%2FCRjA3XnnBHy1kjoO%2FsIAiqlJyGpDmSxUP5qxEDU2RlIkZYaPDZ1h2A7rd9LEtg6yTX2mVYtq5loOZIjEyYKPa7v5qxSbMYfr33P698D%2B9hbiYdawMzvHisGG3YCrI%2Bg8uHkkRapWTcLOr7gwT0B8MPLtp7dI5ShnG%2FjRE0kBG9E6%2FLq0uQGYdcHvBnQ1FRnI3y7DLvEMSD4SFhJPsc4WP4AiM3%2F%2FgW1DWjYQ9Se8iUTEZfpSMv0cXKEsduJMbYL3beYIiTvzt2RGBWktdmfBA%2FyO%2FIzXpcckj7fQAFMf%2FmCupkfhQmnIfBJwILIF%2FdC81Tb13PZLR%2B7G9MqMT86t7Ecpjf1do3kxo%2BxaLu0s27EiVOFvOPPrNtDF1n9VycoghePfqm64D0pLBfUpthNk0Jenu9o7d5dBVPTGcXYlxHLp8mYGLxvPrLGBFFtezXQzGqsAOV4axCVG314ltO8mu93AWcBz5YziGuTQWa31D25wfOc6M1VTg7X1osEm4%2F0rloOwk5cKDMP7Jyr0GOqUBjsm9PmJqC6hcYSa0lQRD%2Fsdi1mAS%2B7Jlu3h1KDwy2iI6chCZM%2B1rXlTqae9CdZkuJ8%2B%2BqvTqfymLZP9W0y5uf5Lhdhz8ltPFPA%2B68GEc2EahLu2xIfzz5SH45Scys0j6CzHJt9sCkb%2Fh%2BpqM31DCORaA5LNPdrNQXqrYQtQp52ubiXRhpq4XhluM%2F10jY3QRT3EgzeVF0fWxNJbYczUSZvF47DtU&X-Amz-Signature=faeb8d9ac6e6790791552a83db05945aeaf6a1d1246cc7031c656ae51e5126c9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
