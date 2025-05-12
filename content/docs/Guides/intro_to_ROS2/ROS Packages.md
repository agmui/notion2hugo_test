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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2G57HGS%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCID%2BtTTWwNaHppXjuAJtl%2Fr%2BTRtpklpnDd%2FAQQqwyZ8MjAiBKJgXTmJALJk%2FwsehG9MasAIRQx3th71W3tJvswrw%2F8CqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME4zD8aOTW2DzFk0qKtwDV3mWpvIsCjLEqOIz0v2RL5E8IE4LMfQV%2FY1HLwXh1duftWy7WB0P73aLrkpPQyxvHPeu7gvIVyFsFEjRmwK7D0n2wigGOCFdY31ufYsQFJroyjjwU9ayAVCpx4PXp%2FO92wyAn8vkJty0w8VZCxpfV62Oq0Kgrtbc6MPBdEwMmnUV7cvXiyl5aiNYv2R0P599aEjBcwOcVsjqKkP3NlrSB6eiawd3j2aAQ29DGH1KWQS9hEGbnUSKJVetZO5OwQoaCZPVMhh74XtAn%2Bwy5%2B7ftnrN%2FqJKDGviLaLYPAzCsJzMV0PTIvo8OFv8vUWA0tN5cqRyLbYwCiIpCUWnH1A%2BvtT6tQPyhmotsQUSGu5hXF9nuk9V%2FdnWMlQzlnNenwJ4Ed8V1%2Ff3DkNKhZIQem942%2FSAMQzERXXhoAkga8D%2BFsFASNAFis8igFaDiuTDuzAwVnCaFzoCY0KKcJsvoHEuttdPh%2FI2c2Vjs%2BmcbXPmNsPmbPhvmSBYb%2F7UHkXaDtZCl2MmgJidbQK8BmB6RShzN%2FzSZUfgLWPoPojNeDs94EGyNOyBOZhBQGXHlGafzsDFQtHEP1S17TbzAcdAloDBQlcdE7Wc3rVOohebped9iXU68yyxJgIBUrUwSUgw47eHwQY6pgHt2wTQM8boygu4Wu3K5My9NRnQZQJI0vXAz2Svy1%2FpUPHUrerDZvN%2B9KBM1kUqC8etkZ9Q0b%2FYMD8%2BRFtMcqmJWDG3qws22VbCO%2BtctO%2Bd1EFXDXC7S07yHhF4umu7fNJNqXlkbpZ0LkGf%2BQzmKSW7xGB98evXvexSIJ%2F7Tz4iALXTF6VDiOUWc8zC%2BlChspMZccrXfN1uAVilxpY4Qi%2BJt6CmjowO&X-Amz-Signature=391898e2e2627e057a0abc06610cb5dc16cbbcce56c1ea2f9d8d416b8fef4cdd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2G57HGS%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCID%2BtTTWwNaHppXjuAJtl%2Fr%2BTRtpklpnDd%2FAQQqwyZ8MjAiBKJgXTmJALJk%2FwsehG9MasAIRQx3th71W3tJvswrw%2F8CqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME4zD8aOTW2DzFk0qKtwDV3mWpvIsCjLEqOIz0v2RL5E8IE4LMfQV%2FY1HLwXh1duftWy7WB0P73aLrkpPQyxvHPeu7gvIVyFsFEjRmwK7D0n2wigGOCFdY31ufYsQFJroyjjwU9ayAVCpx4PXp%2FO92wyAn8vkJty0w8VZCxpfV62Oq0Kgrtbc6MPBdEwMmnUV7cvXiyl5aiNYv2R0P599aEjBcwOcVsjqKkP3NlrSB6eiawd3j2aAQ29DGH1KWQS9hEGbnUSKJVetZO5OwQoaCZPVMhh74XtAn%2Bwy5%2B7ftnrN%2FqJKDGviLaLYPAzCsJzMV0PTIvo8OFv8vUWA0tN5cqRyLbYwCiIpCUWnH1A%2BvtT6tQPyhmotsQUSGu5hXF9nuk9V%2FdnWMlQzlnNenwJ4Ed8V1%2Ff3DkNKhZIQem942%2FSAMQzERXXhoAkga8D%2BFsFASNAFis8igFaDiuTDuzAwVnCaFzoCY0KKcJsvoHEuttdPh%2FI2c2Vjs%2BmcbXPmNsPmbPhvmSBYb%2F7UHkXaDtZCl2MmgJidbQK8BmB6RShzN%2FzSZUfgLWPoPojNeDs94EGyNOyBOZhBQGXHlGafzsDFQtHEP1S17TbzAcdAloDBQlcdE7Wc3rVOohebped9iXU68yyxJgIBUrUwSUgw47eHwQY6pgHt2wTQM8boygu4Wu3K5My9NRnQZQJI0vXAz2Svy1%2FpUPHUrerDZvN%2B9KBM1kUqC8etkZ9Q0b%2FYMD8%2BRFtMcqmJWDG3qws22VbCO%2BtctO%2Bd1EFXDXC7S07yHhF4umu7fNJNqXlkbpZ0LkGf%2BQzmKSW7xGB98evXvexSIJ%2F7Tz4iALXTF6VDiOUWc8zC%2BlChspMZccrXfN1uAVilxpY4Qi%2BJt6CmjowO&X-Amz-Signature=523593cb9f916c592942506b203192346511a830c105f54289801d7a0b7d4514&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2G57HGS%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCID%2BtTTWwNaHppXjuAJtl%2Fr%2BTRtpklpnDd%2FAQQqwyZ8MjAiBKJgXTmJALJk%2FwsehG9MasAIRQx3th71W3tJvswrw%2F8CqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME4zD8aOTW2DzFk0qKtwDV3mWpvIsCjLEqOIz0v2RL5E8IE4LMfQV%2FY1HLwXh1duftWy7WB0P73aLrkpPQyxvHPeu7gvIVyFsFEjRmwK7D0n2wigGOCFdY31ufYsQFJroyjjwU9ayAVCpx4PXp%2FO92wyAn8vkJty0w8VZCxpfV62Oq0Kgrtbc6MPBdEwMmnUV7cvXiyl5aiNYv2R0P599aEjBcwOcVsjqKkP3NlrSB6eiawd3j2aAQ29DGH1KWQS9hEGbnUSKJVetZO5OwQoaCZPVMhh74XtAn%2Bwy5%2B7ftnrN%2FqJKDGviLaLYPAzCsJzMV0PTIvo8OFv8vUWA0tN5cqRyLbYwCiIpCUWnH1A%2BvtT6tQPyhmotsQUSGu5hXF9nuk9V%2FdnWMlQzlnNenwJ4Ed8V1%2Ff3DkNKhZIQem942%2FSAMQzERXXhoAkga8D%2BFsFASNAFis8igFaDiuTDuzAwVnCaFzoCY0KKcJsvoHEuttdPh%2FI2c2Vjs%2BmcbXPmNsPmbPhvmSBYb%2F7UHkXaDtZCl2MmgJidbQK8BmB6RShzN%2FzSZUfgLWPoPojNeDs94EGyNOyBOZhBQGXHlGafzsDFQtHEP1S17TbzAcdAloDBQlcdE7Wc3rVOohebped9iXU68yyxJgIBUrUwSUgw47eHwQY6pgHt2wTQM8boygu4Wu3K5My9NRnQZQJI0vXAz2Svy1%2FpUPHUrerDZvN%2B9KBM1kUqC8etkZ9Q0b%2FYMD8%2BRFtMcqmJWDG3qws22VbCO%2BtctO%2Bd1EFXDXC7S07yHhF4umu7fNJNqXlkbpZ0LkGf%2BQzmKSW7xGB98evXvexSIJ%2F7Tz4iALXTF6VDiOUWc8zC%2BlChspMZccrXfN1uAVilxpY4Qi%2BJt6CmjowO&X-Amz-Signature=5994b95866e383358354fc766a5f0451fc8298092db4eb82c168eb7f716630e6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2G57HGS%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCID%2BtTTWwNaHppXjuAJtl%2Fr%2BTRtpklpnDd%2FAQQqwyZ8MjAiBKJgXTmJALJk%2FwsehG9MasAIRQx3th71W3tJvswrw%2F8CqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME4zD8aOTW2DzFk0qKtwDV3mWpvIsCjLEqOIz0v2RL5E8IE4LMfQV%2FY1HLwXh1duftWy7WB0P73aLrkpPQyxvHPeu7gvIVyFsFEjRmwK7D0n2wigGOCFdY31ufYsQFJroyjjwU9ayAVCpx4PXp%2FO92wyAn8vkJty0w8VZCxpfV62Oq0Kgrtbc6MPBdEwMmnUV7cvXiyl5aiNYv2R0P599aEjBcwOcVsjqKkP3NlrSB6eiawd3j2aAQ29DGH1KWQS9hEGbnUSKJVetZO5OwQoaCZPVMhh74XtAn%2Bwy5%2B7ftnrN%2FqJKDGviLaLYPAzCsJzMV0PTIvo8OFv8vUWA0tN5cqRyLbYwCiIpCUWnH1A%2BvtT6tQPyhmotsQUSGu5hXF9nuk9V%2FdnWMlQzlnNenwJ4Ed8V1%2Ff3DkNKhZIQem942%2FSAMQzERXXhoAkga8D%2BFsFASNAFis8igFaDiuTDuzAwVnCaFzoCY0KKcJsvoHEuttdPh%2FI2c2Vjs%2BmcbXPmNsPmbPhvmSBYb%2F7UHkXaDtZCl2MmgJidbQK8BmB6RShzN%2FzSZUfgLWPoPojNeDs94EGyNOyBOZhBQGXHlGafzsDFQtHEP1S17TbzAcdAloDBQlcdE7Wc3rVOohebped9iXU68yyxJgIBUrUwSUgw47eHwQY6pgHt2wTQM8boygu4Wu3K5My9NRnQZQJI0vXAz2Svy1%2FpUPHUrerDZvN%2B9KBM1kUqC8etkZ9Q0b%2FYMD8%2BRFtMcqmJWDG3qws22VbCO%2BtctO%2Bd1EFXDXC7S07yHhF4umu7fNJNqXlkbpZ0LkGf%2BQzmKSW7xGB98evXvexSIJ%2F7Tz4iALXTF6VDiOUWc8zC%2BlChspMZccrXfN1uAVilxpY4Qi%2BJt6CmjowO&X-Amz-Signature=e23a8ef22eb5194ecba9a14ae6360142857c71055bf57adfdf0b418e0601861d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2G57HGS%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCID%2BtTTWwNaHppXjuAJtl%2Fr%2BTRtpklpnDd%2FAQQqwyZ8MjAiBKJgXTmJALJk%2FwsehG9MasAIRQx3th71W3tJvswrw%2F8CqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME4zD8aOTW2DzFk0qKtwDV3mWpvIsCjLEqOIz0v2RL5E8IE4LMfQV%2FY1HLwXh1duftWy7WB0P73aLrkpPQyxvHPeu7gvIVyFsFEjRmwK7D0n2wigGOCFdY31ufYsQFJroyjjwU9ayAVCpx4PXp%2FO92wyAn8vkJty0w8VZCxpfV62Oq0Kgrtbc6MPBdEwMmnUV7cvXiyl5aiNYv2R0P599aEjBcwOcVsjqKkP3NlrSB6eiawd3j2aAQ29DGH1KWQS9hEGbnUSKJVetZO5OwQoaCZPVMhh74XtAn%2Bwy5%2B7ftnrN%2FqJKDGviLaLYPAzCsJzMV0PTIvo8OFv8vUWA0tN5cqRyLbYwCiIpCUWnH1A%2BvtT6tQPyhmotsQUSGu5hXF9nuk9V%2FdnWMlQzlnNenwJ4Ed8V1%2Ff3DkNKhZIQem942%2FSAMQzERXXhoAkga8D%2BFsFASNAFis8igFaDiuTDuzAwVnCaFzoCY0KKcJsvoHEuttdPh%2FI2c2Vjs%2BmcbXPmNsPmbPhvmSBYb%2F7UHkXaDtZCl2MmgJidbQK8BmB6RShzN%2FzSZUfgLWPoPojNeDs94EGyNOyBOZhBQGXHlGafzsDFQtHEP1S17TbzAcdAloDBQlcdE7Wc3rVOohebped9iXU68yyxJgIBUrUwSUgw47eHwQY6pgHt2wTQM8boygu4Wu3K5My9NRnQZQJI0vXAz2Svy1%2FpUPHUrerDZvN%2B9KBM1kUqC8etkZ9Q0b%2FYMD8%2BRFtMcqmJWDG3qws22VbCO%2BtctO%2Bd1EFXDXC7S07yHhF4umu7fNJNqXlkbpZ0LkGf%2BQzmKSW7xGB98evXvexSIJ%2F7Tz4iALXTF6VDiOUWc8zC%2BlChspMZccrXfN1uAVilxpY4Qi%2BJt6CmjowO&X-Amz-Signature=5f6167f59d219360444f4908af2336e3044b5bd5ae31c20ef547bb3820d36b2e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2G57HGS%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCID%2BtTTWwNaHppXjuAJtl%2Fr%2BTRtpklpnDd%2FAQQqwyZ8MjAiBKJgXTmJALJk%2FwsehG9MasAIRQx3th71W3tJvswrw%2F8CqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME4zD8aOTW2DzFk0qKtwDV3mWpvIsCjLEqOIz0v2RL5E8IE4LMfQV%2FY1HLwXh1duftWy7WB0P73aLrkpPQyxvHPeu7gvIVyFsFEjRmwK7D0n2wigGOCFdY31ufYsQFJroyjjwU9ayAVCpx4PXp%2FO92wyAn8vkJty0w8VZCxpfV62Oq0Kgrtbc6MPBdEwMmnUV7cvXiyl5aiNYv2R0P599aEjBcwOcVsjqKkP3NlrSB6eiawd3j2aAQ29DGH1KWQS9hEGbnUSKJVetZO5OwQoaCZPVMhh74XtAn%2Bwy5%2B7ftnrN%2FqJKDGviLaLYPAzCsJzMV0PTIvo8OFv8vUWA0tN5cqRyLbYwCiIpCUWnH1A%2BvtT6tQPyhmotsQUSGu5hXF9nuk9V%2FdnWMlQzlnNenwJ4Ed8V1%2Ff3DkNKhZIQem942%2FSAMQzERXXhoAkga8D%2BFsFASNAFis8igFaDiuTDuzAwVnCaFzoCY0KKcJsvoHEuttdPh%2FI2c2Vjs%2BmcbXPmNsPmbPhvmSBYb%2F7UHkXaDtZCl2MmgJidbQK8BmB6RShzN%2FzSZUfgLWPoPojNeDs94EGyNOyBOZhBQGXHlGafzsDFQtHEP1S17TbzAcdAloDBQlcdE7Wc3rVOohebped9iXU68yyxJgIBUrUwSUgw47eHwQY6pgHt2wTQM8boygu4Wu3K5My9NRnQZQJI0vXAz2Svy1%2FpUPHUrerDZvN%2B9KBM1kUqC8etkZ9Q0b%2FYMD8%2BRFtMcqmJWDG3qws22VbCO%2BtctO%2Bd1EFXDXC7S07yHhF4umu7fNJNqXlkbpZ0LkGf%2BQzmKSW7xGB98evXvexSIJ%2F7Tz4iALXTF6VDiOUWc8zC%2BlChspMZccrXfN1uAVilxpY4Qi%2BJt6CmjowO&X-Amz-Signature=435f631c0a829e98d0e3a6bda17ba7cdc2aded4c102c9c7b9294aa621be351d1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2G57HGS%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCID%2BtTTWwNaHppXjuAJtl%2Fr%2BTRtpklpnDd%2FAQQqwyZ8MjAiBKJgXTmJALJk%2FwsehG9MasAIRQx3th71W3tJvswrw%2F8CqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME4zD8aOTW2DzFk0qKtwDV3mWpvIsCjLEqOIz0v2RL5E8IE4LMfQV%2FY1HLwXh1duftWy7WB0P73aLrkpPQyxvHPeu7gvIVyFsFEjRmwK7D0n2wigGOCFdY31ufYsQFJroyjjwU9ayAVCpx4PXp%2FO92wyAn8vkJty0w8VZCxpfV62Oq0Kgrtbc6MPBdEwMmnUV7cvXiyl5aiNYv2R0P599aEjBcwOcVsjqKkP3NlrSB6eiawd3j2aAQ29DGH1KWQS9hEGbnUSKJVetZO5OwQoaCZPVMhh74XtAn%2Bwy5%2B7ftnrN%2FqJKDGviLaLYPAzCsJzMV0PTIvo8OFv8vUWA0tN5cqRyLbYwCiIpCUWnH1A%2BvtT6tQPyhmotsQUSGu5hXF9nuk9V%2FdnWMlQzlnNenwJ4Ed8V1%2Ff3DkNKhZIQem942%2FSAMQzERXXhoAkga8D%2BFsFASNAFis8igFaDiuTDuzAwVnCaFzoCY0KKcJsvoHEuttdPh%2FI2c2Vjs%2BmcbXPmNsPmbPhvmSBYb%2F7UHkXaDtZCl2MmgJidbQK8BmB6RShzN%2FzSZUfgLWPoPojNeDs94EGyNOyBOZhBQGXHlGafzsDFQtHEP1S17TbzAcdAloDBQlcdE7Wc3rVOohebped9iXU68yyxJgIBUrUwSUgw47eHwQY6pgHt2wTQM8boygu4Wu3K5My9NRnQZQJI0vXAz2Svy1%2FpUPHUrerDZvN%2B9KBM1kUqC8etkZ9Q0b%2FYMD8%2BRFtMcqmJWDG3qws22VbCO%2BtctO%2Bd1EFXDXC7S07yHhF4umu7fNJNqXlkbpZ0LkGf%2BQzmKSW7xGB98evXvexSIJ%2F7Tz4iALXTF6VDiOUWc8zC%2BlChspMZccrXfN1uAVilxpY4Qi%2BJt6CmjowO&X-Amz-Signature=7618e6c39d7557feeb1ea9acb4467f66a481bd814987731d5bac490c11474cfc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
