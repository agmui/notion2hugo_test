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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RELLL5PA%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIDYmR0NnkF0LeC54iXfsBvwuropU%2Fp%2BY3DNfN2q1MwVOAiEA3hJduJPHX8pilNl2b%2FHMXZGaZ90DW%2Byhf4Y2R6%2BdjYkqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQGiKgucAcS3Ob55SrcA54DesP%2FlsnQkUiDb2%2FQMy0s78dH5nlXj8HzEivtgEfPAKmPaBKftTbPuV5zqMklS8uQcFiNeWr9LNC7SKo0p6xSBbFvi25%2BSivKWK4PFYXWCJ5kgQhKCQD4PYL%2BdBK%2F0E30yfpDKflAjcHcU4i3QXbTNwHQMkJ1atkjITehcAW3Nnussk%2FdXuRXbzy%2Bthcrr2JnMyEz4ZopeGZ%2B2xH3x9Q9TpR1DRTlfpyBOXc9Wib5FumMFQWXWethEhMXtS6sQEhj8Y%2FrftgfiFj8aFyuiplC%2BazaMN2xQ6RpvOPiXGu4a98clZ8hoYL9%2B8f2%2FQ0DCDflxnW15DzPeLxIhD7S0QuyBkgZz3qWtuTnhhiAIwbNmZvBi7qgJvPHCcB9NKNpstPXjWRVFH1s1BuOCO0Q%2BASgFOKyDJnILlsodeWdp%2BK5wr8bRqinjVD7auDWxJzc535EuGVDFlNSY89%2BowfjGbQysc6HatM7rUUIzFhpOn9Z5fGNRq83BP%2FEP5CzCH7vl1IgxTQ1FVKJYthojSIWQZDvMA4I2MJNJX7lS8FVac3JdER2NkZuBnsVeufa1Jzl7REdQkssJHOG2vyUtOZ6DVwlvalO9DAS97HdqF7wPUk8znVVAQInTZcBYYBuMOf24r8GOqUBbFJz081T%2BUG6cQ6D7JEd%2FprLgjLTzT1IVR81JRpGSSKuTfhIm6EGCnRTzmxFKQ5mYhj0Nw7WG8wSAxj9y9%2B953%2B%2FIwCW%2BnLzMxl4nLpezFz7uLBvbJCY%2FII%2FeA%2BhaTQK%2BN8kmWNGnaWsNRLYdRlYu3BS1Nd%2BvvG7mDAjr%2Fa%2BiwJnqskondYInpp0YCo0Be5lV8YbRswq%2BoegtlIXqG%2BPl524AiCr&X-Amz-Signature=e58f798e0f938ca18ab8cb46df66d2c2480a0b5fe0d98dcef4d38b920a878ca1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RELLL5PA%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIDYmR0NnkF0LeC54iXfsBvwuropU%2Fp%2BY3DNfN2q1MwVOAiEA3hJduJPHX8pilNl2b%2FHMXZGaZ90DW%2Byhf4Y2R6%2BdjYkqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQGiKgucAcS3Ob55SrcA54DesP%2FlsnQkUiDb2%2FQMy0s78dH5nlXj8HzEivtgEfPAKmPaBKftTbPuV5zqMklS8uQcFiNeWr9LNC7SKo0p6xSBbFvi25%2BSivKWK4PFYXWCJ5kgQhKCQD4PYL%2BdBK%2F0E30yfpDKflAjcHcU4i3QXbTNwHQMkJ1atkjITehcAW3Nnussk%2FdXuRXbzy%2Bthcrr2JnMyEz4ZopeGZ%2B2xH3x9Q9TpR1DRTlfpyBOXc9Wib5FumMFQWXWethEhMXtS6sQEhj8Y%2FrftgfiFj8aFyuiplC%2BazaMN2xQ6RpvOPiXGu4a98clZ8hoYL9%2B8f2%2FQ0DCDflxnW15DzPeLxIhD7S0QuyBkgZz3qWtuTnhhiAIwbNmZvBi7qgJvPHCcB9NKNpstPXjWRVFH1s1BuOCO0Q%2BASgFOKyDJnILlsodeWdp%2BK5wr8bRqinjVD7auDWxJzc535EuGVDFlNSY89%2BowfjGbQysc6HatM7rUUIzFhpOn9Z5fGNRq83BP%2FEP5CzCH7vl1IgxTQ1FVKJYthojSIWQZDvMA4I2MJNJX7lS8FVac3JdER2NkZuBnsVeufa1Jzl7REdQkssJHOG2vyUtOZ6DVwlvalO9DAS97HdqF7wPUk8znVVAQInTZcBYYBuMOf24r8GOqUBbFJz081T%2BUG6cQ6D7JEd%2FprLgjLTzT1IVR81JRpGSSKuTfhIm6EGCnRTzmxFKQ5mYhj0Nw7WG8wSAxj9y9%2B953%2B%2FIwCW%2BnLzMxl4nLpezFz7uLBvbJCY%2FII%2FeA%2BhaTQK%2BN8kmWNGnaWsNRLYdRlYu3BS1Nd%2BvvG7mDAjr%2Fa%2BiwJnqskondYInpp0YCo0Be5lV8YbRswq%2BoegtlIXqG%2BPl524AiCr&X-Amz-Signature=eccdd66f185854a33f14634e6e5d8af3984f717088a929515347c853b8ee5cce&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RELLL5PA%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIDYmR0NnkF0LeC54iXfsBvwuropU%2Fp%2BY3DNfN2q1MwVOAiEA3hJduJPHX8pilNl2b%2FHMXZGaZ90DW%2Byhf4Y2R6%2BdjYkqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQGiKgucAcS3Ob55SrcA54DesP%2FlsnQkUiDb2%2FQMy0s78dH5nlXj8HzEivtgEfPAKmPaBKftTbPuV5zqMklS8uQcFiNeWr9LNC7SKo0p6xSBbFvi25%2BSivKWK4PFYXWCJ5kgQhKCQD4PYL%2BdBK%2F0E30yfpDKflAjcHcU4i3QXbTNwHQMkJ1atkjITehcAW3Nnussk%2FdXuRXbzy%2Bthcrr2JnMyEz4ZopeGZ%2B2xH3x9Q9TpR1DRTlfpyBOXc9Wib5FumMFQWXWethEhMXtS6sQEhj8Y%2FrftgfiFj8aFyuiplC%2BazaMN2xQ6RpvOPiXGu4a98clZ8hoYL9%2B8f2%2FQ0DCDflxnW15DzPeLxIhD7S0QuyBkgZz3qWtuTnhhiAIwbNmZvBi7qgJvPHCcB9NKNpstPXjWRVFH1s1BuOCO0Q%2BASgFOKyDJnILlsodeWdp%2BK5wr8bRqinjVD7auDWxJzc535EuGVDFlNSY89%2BowfjGbQysc6HatM7rUUIzFhpOn9Z5fGNRq83BP%2FEP5CzCH7vl1IgxTQ1FVKJYthojSIWQZDvMA4I2MJNJX7lS8FVac3JdER2NkZuBnsVeufa1Jzl7REdQkssJHOG2vyUtOZ6DVwlvalO9DAS97HdqF7wPUk8znVVAQInTZcBYYBuMOf24r8GOqUBbFJz081T%2BUG6cQ6D7JEd%2FprLgjLTzT1IVR81JRpGSSKuTfhIm6EGCnRTzmxFKQ5mYhj0Nw7WG8wSAxj9y9%2B953%2B%2FIwCW%2BnLzMxl4nLpezFz7uLBvbJCY%2FII%2FeA%2BhaTQK%2BN8kmWNGnaWsNRLYdRlYu3BS1Nd%2BvvG7mDAjr%2Fa%2BiwJnqskondYInpp0YCo0Be5lV8YbRswq%2BoegtlIXqG%2BPl524AiCr&X-Amz-Signature=888a82967f79f7c1208e7086ef07c64f11ac9e65c0200f49faf88285c0c9f00b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RELLL5PA%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIDYmR0NnkF0LeC54iXfsBvwuropU%2Fp%2BY3DNfN2q1MwVOAiEA3hJduJPHX8pilNl2b%2FHMXZGaZ90DW%2Byhf4Y2R6%2BdjYkqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQGiKgucAcS3Ob55SrcA54DesP%2FlsnQkUiDb2%2FQMy0s78dH5nlXj8HzEivtgEfPAKmPaBKftTbPuV5zqMklS8uQcFiNeWr9LNC7SKo0p6xSBbFvi25%2BSivKWK4PFYXWCJ5kgQhKCQD4PYL%2BdBK%2F0E30yfpDKflAjcHcU4i3QXbTNwHQMkJ1atkjITehcAW3Nnussk%2FdXuRXbzy%2Bthcrr2JnMyEz4ZopeGZ%2B2xH3x9Q9TpR1DRTlfpyBOXc9Wib5FumMFQWXWethEhMXtS6sQEhj8Y%2FrftgfiFj8aFyuiplC%2BazaMN2xQ6RpvOPiXGu4a98clZ8hoYL9%2B8f2%2FQ0DCDflxnW15DzPeLxIhD7S0QuyBkgZz3qWtuTnhhiAIwbNmZvBi7qgJvPHCcB9NKNpstPXjWRVFH1s1BuOCO0Q%2BASgFOKyDJnILlsodeWdp%2BK5wr8bRqinjVD7auDWxJzc535EuGVDFlNSY89%2BowfjGbQysc6HatM7rUUIzFhpOn9Z5fGNRq83BP%2FEP5CzCH7vl1IgxTQ1FVKJYthojSIWQZDvMA4I2MJNJX7lS8FVac3JdER2NkZuBnsVeufa1Jzl7REdQkssJHOG2vyUtOZ6DVwlvalO9DAS97HdqF7wPUk8znVVAQInTZcBYYBuMOf24r8GOqUBbFJz081T%2BUG6cQ6D7JEd%2FprLgjLTzT1IVR81JRpGSSKuTfhIm6EGCnRTzmxFKQ5mYhj0Nw7WG8wSAxj9y9%2B953%2B%2FIwCW%2BnLzMxl4nLpezFz7uLBvbJCY%2FII%2FeA%2BhaTQK%2BN8kmWNGnaWsNRLYdRlYu3BS1Nd%2BvvG7mDAjr%2Fa%2BiwJnqskondYInpp0YCo0Be5lV8YbRswq%2BoegtlIXqG%2BPl524AiCr&X-Amz-Signature=f4d3152e98ee466345b6985ec1befc55be553a51522090a866f49a64f59c2b46&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RELLL5PA%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIDYmR0NnkF0LeC54iXfsBvwuropU%2Fp%2BY3DNfN2q1MwVOAiEA3hJduJPHX8pilNl2b%2FHMXZGaZ90DW%2Byhf4Y2R6%2BdjYkqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQGiKgucAcS3Ob55SrcA54DesP%2FlsnQkUiDb2%2FQMy0s78dH5nlXj8HzEivtgEfPAKmPaBKftTbPuV5zqMklS8uQcFiNeWr9LNC7SKo0p6xSBbFvi25%2BSivKWK4PFYXWCJ5kgQhKCQD4PYL%2BdBK%2F0E30yfpDKflAjcHcU4i3QXbTNwHQMkJ1atkjITehcAW3Nnussk%2FdXuRXbzy%2Bthcrr2JnMyEz4ZopeGZ%2B2xH3x9Q9TpR1DRTlfpyBOXc9Wib5FumMFQWXWethEhMXtS6sQEhj8Y%2FrftgfiFj8aFyuiplC%2BazaMN2xQ6RpvOPiXGu4a98clZ8hoYL9%2B8f2%2FQ0DCDflxnW15DzPeLxIhD7S0QuyBkgZz3qWtuTnhhiAIwbNmZvBi7qgJvPHCcB9NKNpstPXjWRVFH1s1BuOCO0Q%2BASgFOKyDJnILlsodeWdp%2BK5wr8bRqinjVD7auDWxJzc535EuGVDFlNSY89%2BowfjGbQysc6HatM7rUUIzFhpOn9Z5fGNRq83BP%2FEP5CzCH7vl1IgxTQ1FVKJYthojSIWQZDvMA4I2MJNJX7lS8FVac3JdER2NkZuBnsVeufa1Jzl7REdQkssJHOG2vyUtOZ6DVwlvalO9DAS97HdqF7wPUk8znVVAQInTZcBYYBuMOf24r8GOqUBbFJz081T%2BUG6cQ6D7JEd%2FprLgjLTzT1IVR81JRpGSSKuTfhIm6EGCnRTzmxFKQ5mYhj0Nw7WG8wSAxj9y9%2B953%2B%2FIwCW%2BnLzMxl4nLpezFz7uLBvbJCY%2FII%2FeA%2BhaTQK%2BN8kmWNGnaWsNRLYdRlYu3BS1Nd%2BvvG7mDAjr%2Fa%2BiwJnqskondYInpp0YCo0Be5lV8YbRswq%2BoegtlIXqG%2BPl524AiCr&X-Amz-Signature=3984f681b914ef19202c996c1a93baf739b60ab16ae21741c8b9de10c49a2e8a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RELLL5PA%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIDYmR0NnkF0LeC54iXfsBvwuropU%2Fp%2BY3DNfN2q1MwVOAiEA3hJduJPHX8pilNl2b%2FHMXZGaZ90DW%2Byhf4Y2R6%2BdjYkqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQGiKgucAcS3Ob55SrcA54DesP%2FlsnQkUiDb2%2FQMy0s78dH5nlXj8HzEivtgEfPAKmPaBKftTbPuV5zqMklS8uQcFiNeWr9LNC7SKo0p6xSBbFvi25%2BSivKWK4PFYXWCJ5kgQhKCQD4PYL%2BdBK%2F0E30yfpDKflAjcHcU4i3QXbTNwHQMkJ1atkjITehcAW3Nnussk%2FdXuRXbzy%2Bthcrr2JnMyEz4ZopeGZ%2B2xH3x9Q9TpR1DRTlfpyBOXc9Wib5FumMFQWXWethEhMXtS6sQEhj8Y%2FrftgfiFj8aFyuiplC%2BazaMN2xQ6RpvOPiXGu4a98clZ8hoYL9%2B8f2%2FQ0DCDflxnW15DzPeLxIhD7S0QuyBkgZz3qWtuTnhhiAIwbNmZvBi7qgJvPHCcB9NKNpstPXjWRVFH1s1BuOCO0Q%2BASgFOKyDJnILlsodeWdp%2BK5wr8bRqinjVD7auDWxJzc535EuGVDFlNSY89%2BowfjGbQysc6HatM7rUUIzFhpOn9Z5fGNRq83BP%2FEP5CzCH7vl1IgxTQ1FVKJYthojSIWQZDvMA4I2MJNJX7lS8FVac3JdER2NkZuBnsVeufa1Jzl7REdQkssJHOG2vyUtOZ6DVwlvalO9DAS97HdqF7wPUk8znVVAQInTZcBYYBuMOf24r8GOqUBbFJz081T%2BUG6cQ6D7JEd%2FprLgjLTzT1IVR81JRpGSSKuTfhIm6EGCnRTzmxFKQ5mYhj0Nw7WG8wSAxj9y9%2B953%2B%2FIwCW%2BnLzMxl4nLpezFz7uLBvbJCY%2FII%2FeA%2BhaTQK%2BN8kmWNGnaWsNRLYdRlYu3BS1Nd%2BvvG7mDAjr%2Fa%2BiwJnqskondYInpp0YCo0Be5lV8YbRswq%2BoegtlIXqG%2BPl524AiCr&X-Amz-Signature=a2dfa8e5e161e2dc2f0ea5e85755bbff336555a98bc607ba89cb0a3750bcf18e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RELLL5PA%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIDYmR0NnkF0LeC54iXfsBvwuropU%2Fp%2BY3DNfN2q1MwVOAiEA3hJduJPHX8pilNl2b%2FHMXZGaZ90DW%2Byhf4Y2R6%2BdjYkqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQGiKgucAcS3Ob55SrcA54DesP%2FlsnQkUiDb2%2FQMy0s78dH5nlXj8HzEivtgEfPAKmPaBKftTbPuV5zqMklS8uQcFiNeWr9LNC7SKo0p6xSBbFvi25%2BSivKWK4PFYXWCJ5kgQhKCQD4PYL%2BdBK%2F0E30yfpDKflAjcHcU4i3QXbTNwHQMkJ1atkjITehcAW3Nnussk%2FdXuRXbzy%2Bthcrr2JnMyEz4ZopeGZ%2B2xH3x9Q9TpR1DRTlfpyBOXc9Wib5FumMFQWXWethEhMXtS6sQEhj8Y%2FrftgfiFj8aFyuiplC%2BazaMN2xQ6RpvOPiXGu4a98clZ8hoYL9%2B8f2%2FQ0DCDflxnW15DzPeLxIhD7S0QuyBkgZz3qWtuTnhhiAIwbNmZvBi7qgJvPHCcB9NKNpstPXjWRVFH1s1BuOCO0Q%2BASgFOKyDJnILlsodeWdp%2BK5wr8bRqinjVD7auDWxJzc535EuGVDFlNSY89%2BowfjGbQysc6HatM7rUUIzFhpOn9Z5fGNRq83BP%2FEP5CzCH7vl1IgxTQ1FVKJYthojSIWQZDvMA4I2MJNJX7lS8FVac3JdER2NkZuBnsVeufa1Jzl7REdQkssJHOG2vyUtOZ6DVwlvalO9DAS97HdqF7wPUk8znVVAQInTZcBYYBuMOf24r8GOqUBbFJz081T%2BUG6cQ6D7JEd%2FprLgjLTzT1IVR81JRpGSSKuTfhIm6EGCnRTzmxFKQ5mYhj0Nw7WG8wSAxj9y9%2B953%2B%2FIwCW%2BnLzMxl4nLpezFz7uLBvbJCY%2FII%2FeA%2BhaTQK%2BN8kmWNGnaWsNRLYdRlYu3BS1Nd%2BvvG7mDAjr%2Fa%2BiwJnqskondYInpp0YCo0Be5lV8YbRswq%2BoegtlIXqG%2BPl524AiCr&X-Amz-Signature=5ef17baf4e1ec81cb95e4892875df17ea67fc7e3ce39309b1dac94c46b48ee63&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
