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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KZJWV63%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlRSo0L99mnBnfj2qH1yZIVG37e7gZ2pUajDjcYyqx8QIhAIb9QmuS2LddNGK9M5wlsv%2BnUPPHPt%2FgjNW93%2FKaXHOQKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwuONbcQVTYd%2F%2FB2sq3ANtN9AApMlxmvXJk7yBxzk79uQKfTUpIRpAq%2B1I6bl%2BgEeURt4m9y2KPzl1JiXsw%2BbH6UG8l1CvZcR9hy5fCb80k3hjXbHxHLELKORfPWD%2B0pZzmmCZLtsmXbvz7Po8HfTj8D0wKKLodY03GkkRzZLdBnJ5K7vP8PdJoCuOqiIu%2BoJjnIPbIFJPE52m%2FCN0CVFdt5KZ6xB9uf%2BgdkOOJu%2Brocs%2B4QWUtdKLMLuypkN%2FiQG9ncTa7quHplA5%2F8zs5Ub6quu2dxYhm4mghySlWOSH0Go2rgd%2BX2Da7wU2Y5OkIsi6x1tPwk5UaPCUDZd0d%2BVm8ZF9cbgNMSLA8tAyRdViK9mXMLoAWEEx9uRnNiMndviLlZTvOJk3S1InXKy80%2FgquuHDs36K3FOZwb1H53jbcGG%2FCa%2FHm0TSZsTlNPjPKYZxwDO1YRUpRe5TLi3hYUUzpgyNamkcnkXiQ90a0ny2qqE%2Fskie79%2FCD%2F6S0zgdsJbIbnBF2oPKauILNrjwcdyxdVqNZo3%2BfgA%2F%2FWbIwozW8jAeZfAu5hD0l7caiKztumgzd%2BDTa5weGc5lZO7o7FfwVlzc%2FeoeRe1VVU8YmwPNZ1Y%2F5nbyVzafbdY454Lpoewmokr22Kue8zBKSTDl9avEBjqkAc1UK%2B2eazAZyathhpm7BZRZWU3yfCCUW2NAfbZY9mlLTOpa6lw3CskCb9shxwckrDiPDbRS65rH1%2B%2B%2BT%2F11Ue5V6Toe78IlwpkZw266fHGRN4JvSyjvgf%2BQyUKUvU2L6OQ1Qpj1MsBR46f0o7uZbY3yUSSZChXJeDv8%2Fmd240mwo98F5BOWfhG2E3ERmBO%2F0DqPcjeuCB0A4t1kwCTKwtoeEuAq&X-Amz-Signature=3d24c63697c8a65a56ef2b5ea61ab6499c1b3750ef1b15f321da73a3e3946fdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KZJWV63%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlRSo0L99mnBnfj2qH1yZIVG37e7gZ2pUajDjcYyqx8QIhAIb9QmuS2LddNGK9M5wlsv%2BnUPPHPt%2FgjNW93%2FKaXHOQKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwuONbcQVTYd%2F%2FB2sq3ANtN9AApMlxmvXJk7yBxzk79uQKfTUpIRpAq%2B1I6bl%2BgEeURt4m9y2KPzl1JiXsw%2BbH6UG8l1CvZcR9hy5fCb80k3hjXbHxHLELKORfPWD%2B0pZzmmCZLtsmXbvz7Po8HfTj8D0wKKLodY03GkkRzZLdBnJ5K7vP8PdJoCuOqiIu%2BoJjnIPbIFJPE52m%2FCN0CVFdt5KZ6xB9uf%2BgdkOOJu%2Brocs%2B4QWUtdKLMLuypkN%2FiQG9ncTa7quHplA5%2F8zs5Ub6quu2dxYhm4mghySlWOSH0Go2rgd%2BX2Da7wU2Y5OkIsi6x1tPwk5UaPCUDZd0d%2BVm8ZF9cbgNMSLA8tAyRdViK9mXMLoAWEEx9uRnNiMndviLlZTvOJk3S1InXKy80%2FgquuHDs36K3FOZwb1H53jbcGG%2FCa%2FHm0TSZsTlNPjPKYZxwDO1YRUpRe5TLi3hYUUzpgyNamkcnkXiQ90a0ny2qqE%2Fskie79%2FCD%2F6S0zgdsJbIbnBF2oPKauILNrjwcdyxdVqNZo3%2BfgA%2F%2FWbIwozW8jAeZfAu5hD0l7caiKztumgzd%2BDTa5weGc5lZO7o7FfwVlzc%2FeoeRe1VVU8YmwPNZ1Y%2F5nbyVzafbdY454Lpoewmokr22Kue8zBKSTDl9avEBjqkAc1UK%2B2eazAZyathhpm7BZRZWU3yfCCUW2NAfbZY9mlLTOpa6lw3CskCb9shxwckrDiPDbRS65rH1%2B%2B%2BT%2F11Ue5V6Toe78IlwpkZw266fHGRN4JvSyjvgf%2BQyUKUvU2L6OQ1Qpj1MsBR46f0o7uZbY3yUSSZChXJeDv8%2Fmd240mwo98F5BOWfhG2E3ERmBO%2F0DqPcjeuCB0A4t1kwCTKwtoeEuAq&X-Amz-Signature=ebe7c571c6e7e00b254ae9fb53900e81afbcbdb087bd5240e8f24e245a893ddd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KZJWV63%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlRSo0L99mnBnfj2qH1yZIVG37e7gZ2pUajDjcYyqx8QIhAIb9QmuS2LddNGK9M5wlsv%2BnUPPHPt%2FgjNW93%2FKaXHOQKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwuONbcQVTYd%2F%2FB2sq3ANtN9AApMlxmvXJk7yBxzk79uQKfTUpIRpAq%2B1I6bl%2BgEeURt4m9y2KPzl1JiXsw%2BbH6UG8l1CvZcR9hy5fCb80k3hjXbHxHLELKORfPWD%2B0pZzmmCZLtsmXbvz7Po8HfTj8D0wKKLodY03GkkRzZLdBnJ5K7vP8PdJoCuOqiIu%2BoJjnIPbIFJPE52m%2FCN0CVFdt5KZ6xB9uf%2BgdkOOJu%2Brocs%2B4QWUtdKLMLuypkN%2FiQG9ncTa7quHplA5%2F8zs5Ub6quu2dxYhm4mghySlWOSH0Go2rgd%2BX2Da7wU2Y5OkIsi6x1tPwk5UaPCUDZd0d%2BVm8ZF9cbgNMSLA8tAyRdViK9mXMLoAWEEx9uRnNiMndviLlZTvOJk3S1InXKy80%2FgquuHDs36K3FOZwb1H53jbcGG%2FCa%2FHm0TSZsTlNPjPKYZxwDO1YRUpRe5TLi3hYUUzpgyNamkcnkXiQ90a0ny2qqE%2Fskie79%2FCD%2F6S0zgdsJbIbnBF2oPKauILNrjwcdyxdVqNZo3%2BfgA%2F%2FWbIwozW8jAeZfAu5hD0l7caiKztumgzd%2BDTa5weGc5lZO7o7FfwVlzc%2FeoeRe1VVU8YmwPNZ1Y%2F5nbyVzafbdY454Lpoewmokr22Kue8zBKSTDl9avEBjqkAc1UK%2B2eazAZyathhpm7BZRZWU3yfCCUW2NAfbZY9mlLTOpa6lw3CskCb9shxwckrDiPDbRS65rH1%2B%2B%2BT%2F11Ue5V6Toe78IlwpkZw266fHGRN4JvSyjvgf%2BQyUKUvU2L6OQ1Qpj1MsBR46f0o7uZbY3yUSSZChXJeDv8%2Fmd240mwo98F5BOWfhG2E3ERmBO%2F0DqPcjeuCB0A4t1kwCTKwtoeEuAq&X-Amz-Signature=93558c1f83d5c3a0dcc0bedc0ab5f70483e2f119b20c367335df50e7bf2f6914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KZJWV63%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlRSo0L99mnBnfj2qH1yZIVG37e7gZ2pUajDjcYyqx8QIhAIb9QmuS2LddNGK9M5wlsv%2BnUPPHPt%2FgjNW93%2FKaXHOQKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwuONbcQVTYd%2F%2FB2sq3ANtN9AApMlxmvXJk7yBxzk79uQKfTUpIRpAq%2B1I6bl%2BgEeURt4m9y2KPzl1JiXsw%2BbH6UG8l1CvZcR9hy5fCb80k3hjXbHxHLELKORfPWD%2B0pZzmmCZLtsmXbvz7Po8HfTj8D0wKKLodY03GkkRzZLdBnJ5K7vP8PdJoCuOqiIu%2BoJjnIPbIFJPE52m%2FCN0CVFdt5KZ6xB9uf%2BgdkOOJu%2Brocs%2B4QWUtdKLMLuypkN%2FiQG9ncTa7quHplA5%2F8zs5Ub6quu2dxYhm4mghySlWOSH0Go2rgd%2BX2Da7wU2Y5OkIsi6x1tPwk5UaPCUDZd0d%2BVm8ZF9cbgNMSLA8tAyRdViK9mXMLoAWEEx9uRnNiMndviLlZTvOJk3S1InXKy80%2FgquuHDs36K3FOZwb1H53jbcGG%2FCa%2FHm0TSZsTlNPjPKYZxwDO1YRUpRe5TLi3hYUUzpgyNamkcnkXiQ90a0ny2qqE%2Fskie79%2FCD%2F6S0zgdsJbIbnBF2oPKauILNrjwcdyxdVqNZo3%2BfgA%2F%2FWbIwozW8jAeZfAu5hD0l7caiKztumgzd%2BDTa5weGc5lZO7o7FfwVlzc%2FeoeRe1VVU8YmwPNZ1Y%2F5nbyVzafbdY454Lpoewmokr22Kue8zBKSTDl9avEBjqkAc1UK%2B2eazAZyathhpm7BZRZWU3yfCCUW2NAfbZY9mlLTOpa6lw3CskCb9shxwckrDiPDbRS65rH1%2B%2B%2BT%2F11Ue5V6Toe78IlwpkZw266fHGRN4JvSyjvgf%2BQyUKUvU2L6OQ1Qpj1MsBR46f0o7uZbY3yUSSZChXJeDv8%2Fmd240mwo98F5BOWfhG2E3ERmBO%2F0DqPcjeuCB0A4t1kwCTKwtoeEuAq&X-Amz-Signature=9cb2930029694f28bee6c4ff97c11dd72e515f8a669b9ce951ed7a3d45b20450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KZJWV63%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlRSo0L99mnBnfj2qH1yZIVG37e7gZ2pUajDjcYyqx8QIhAIb9QmuS2LddNGK9M5wlsv%2BnUPPHPt%2FgjNW93%2FKaXHOQKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwuONbcQVTYd%2F%2FB2sq3ANtN9AApMlxmvXJk7yBxzk79uQKfTUpIRpAq%2B1I6bl%2BgEeURt4m9y2KPzl1JiXsw%2BbH6UG8l1CvZcR9hy5fCb80k3hjXbHxHLELKORfPWD%2B0pZzmmCZLtsmXbvz7Po8HfTj8D0wKKLodY03GkkRzZLdBnJ5K7vP8PdJoCuOqiIu%2BoJjnIPbIFJPE52m%2FCN0CVFdt5KZ6xB9uf%2BgdkOOJu%2Brocs%2B4QWUtdKLMLuypkN%2FiQG9ncTa7quHplA5%2F8zs5Ub6quu2dxYhm4mghySlWOSH0Go2rgd%2BX2Da7wU2Y5OkIsi6x1tPwk5UaPCUDZd0d%2BVm8ZF9cbgNMSLA8tAyRdViK9mXMLoAWEEx9uRnNiMndviLlZTvOJk3S1InXKy80%2FgquuHDs36K3FOZwb1H53jbcGG%2FCa%2FHm0TSZsTlNPjPKYZxwDO1YRUpRe5TLi3hYUUzpgyNamkcnkXiQ90a0ny2qqE%2Fskie79%2FCD%2F6S0zgdsJbIbnBF2oPKauILNrjwcdyxdVqNZo3%2BfgA%2F%2FWbIwozW8jAeZfAu5hD0l7caiKztumgzd%2BDTa5weGc5lZO7o7FfwVlzc%2FeoeRe1VVU8YmwPNZ1Y%2F5nbyVzafbdY454Lpoewmokr22Kue8zBKSTDl9avEBjqkAc1UK%2B2eazAZyathhpm7BZRZWU3yfCCUW2NAfbZY9mlLTOpa6lw3CskCb9shxwckrDiPDbRS65rH1%2B%2B%2BT%2F11Ue5V6Toe78IlwpkZw266fHGRN4JvSyjvgf%2BQyUKUvU2L6OQ1Qpj1MsBR46f0o7uZbY3yUSSZChXJeDv8%2Fmd240mwo98F5BOWfhG2E3ERmBO%2F0DqPcjeuCB0A4t1kwCTKwtoeEuAq&X-Amz-Signature=0277e6de16cf4622c1f5a20a6dcccba0f08c0b6ccd0e9a129a5e92e120a9a831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KZJWV63%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlRSo0L99mnBnfj2qH1yZIVG37e7gZ2pUajDjcYyqx8QIhAIb9QmuS2LddNGK9M5wlsv%2BnUPPHPt%2FgjNW93%2FKaXHOQKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwuONbcQVTYd%2F%2FB2sq3ANtN9AApMlxmvXJk7yBxzk79uQKfTUpIRpAq%2B1I6bl%2BgEeURt4m9y2KPzl1JiXsw%2BbH6UG8l1CvZcR9hy5fCb80k3hjXbHxHLELKORfPWD%2B0pZzmmCZLtsmXbvz7Po8HfTj8D0wKKLodY03GkkRzZLdBnJ5K7vP8PdJoCuOqiIu%2BoJjnIPbIFJPE52m%2FCN0CVFdt5KZ6xB9uf%2BgdkOOJu%2Brocs%2B4QWUtdKLMLuypkN%2FiQG9ncTa7quHplA5%2F8zs5Ub6quu2dxYhm4mghySlWOSH0Go2rgd%2BX2Da7wU2Y5OkIsi6x1tPwk5UaPCUDZd0d%2BVm8ZF9cbgNMSLA8tAyRdViK9mXMLoAWEEx9uRnNiMndviLlZTvOJk3S1InXKy80%2FgquuHDs36K3FOZwb1H53jbcGG%2FCa%2FHm0TSZsTlNPjPKYZxwDO1YRUpRe5TLi3hYUUzpgyNamkcnkXiQ90a0ny2qqE%2Fskie79%2FCD%2F6S0zgdsJbIbnBF2oPKauILNrjwcdyxdVqNZo3%2BfgA%2F%2FWbIwozW8jAeZfAu5hD0l7caiKztumgzd%2BDTa5weGc5lZO7o7FfwVlzc%2FeoeRe1VVU8YmwPNZ1Y%2F5nbyVzafbdY454Lpoewmokr22Kue8zBKSTDl9avEBjqkAc1UK%2B2eazAZyathhpm7BZRZWU3yfCCUW2NAfbZY9mlLTOpa6lw3CskCb9shxwckrDiPDbRS65rH1%2B%2B%2BT%2F11Ue5V6Toe78IlwpkZw266fHGRN4JvSyjvgf%2BQyUKUvU2L6OQ1Qpj1MsBR46f0o7uZbY3yUSSZChXJeDv8%2Fmd240mwo98F5BOWfhG2E3ERmBO%2F0DqPcjeuCB0A4t1kwCTKwtoeEuAq&X-Amz-Signature=20cf625cfcf90af225eaad8de9d4c8e0ebbf285ee5577f79f91d203fdbc9340c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KZJWV63%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlRSo0L99mnBnfj2qH1yZIVG37e7gZ2pUajDjcYyqx8QIhAIb9QmuS2LddNGK9M5wlsv%2BnUPPHPt%2FgjNW93%2FKaXHOQKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwuONbcQVTYd%2F%2FB2sq3ANtN9AApMlxmvXJk7yBxzk79uQKfTUpIRpAq%2B1I6bl%2BgEeURt4m9y2KPzl1JiXsw%2BbH6UG8l1CvZcR9hy5fCb80k3hjXbHxHLELKORfPWD%2B0pZzmmCZLtsmXbvz7Po8HfTj8D0wKKLodY03GkkRzZLdBnJ5K7vP8PdJoCuOqiIu%2BoJjnIPbIFJPE52m%2FCN0CVFdt5KZ6xB9uf%2BgdkOOJu%2Brocs%2B4QWUtdKLMLuypkN%2FiQG9ncTa7quHplA5%2F8zs5Ub6quu2dxYhm4mghySlWOSH0Go2rgd%2BX2Da7wU2Y5OkIsi6x1tPwk5UaPCUDZd0d%2BVm8ZF9cbgNMSLA8tAyRdViK9mXMLoAWEEx9uRnNiMndviLlZTvOJk3S1InXKy80%2FgquuHDs36K3FOZwb1H53jbcGG%2FCa%2FHm0TSZsTlNPjPKYZxwDO1YRUpRe5TLi3hYUUzpgyNamkcnkXiQ90a0ny2qqE%2Fskie79%2FCD%2F6S0zgdsJbIbnBF2oPKauILNrjwcdyxdVqNZo3%2BfgA%2F%2FWbIwozW8jAeZfAu5hD0l7caiKztumgzd%2BDTa5weGc5lZO7o7FfwVlzc%2FeoeRe1VVU8YmwPNZ1Y%2F5nbyVzafbdY454Lpoewmokr22Kue8zBKSTDl9avEBjqkAc1UK%2B2eazAZyathhpm7BZRZWU3yfCCUW2NAfbZY9mlLTOpa6lw3CskCb9shxwckrDiPDbRS65rH1%2B%2B%2BT%2F11Ue5V6Toe78IlwpkZw266fHGRN4JvSyjvgf%2BQyUKUvU2L6OQ1Qpj1MsBR46f0o7uZbY3yUSSZChXJeDv8%2Fmd240mwo98F5BOWfhG2E3ERmBO%2F0DqPcjeuCB0A4t1kwCTKwtoeEuAq&X-Amz-Signature=7292c7cea15aa20b63106f980fafbc256494b34b5da095e0e6ed893c7c7418a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
