---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKKOQM24%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCICjrdYm7btiw19CesWdeJnc5OEuxPiRsQdjgAv%2B0%2BM6HAiEAvnmOm%2BABMAnhz3jRZvoqT60IHRqy51qXeLMnZEJDimwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEoo3Llok%2Bd5ZsLUircA8WAogtiM%2FbVd4DC%2BQcEkuXOLDxmYV%2Fsr6nYdwFrqny8F9UwNguwC57gnXtgJh3%2BEkXGpoDbjnJ7NZ8Jw1FwerYQ%2B4J64vOdYz7Gi1X0fzR7x9ApKpShOG744E2yHhm5ObTgOrvq9YkBXc9QkgHeXkeE18UQ3N7pdFVf%2F8Ma8FptSw7Na2h4%2FL0CfdtSRGAGiPLSCP1grTtthAa4mcGbx%2BXgsg23kZ9MVxVoTdFOkXYs2Tah%2FuWcS%2BVKeAQZ4fudVA1jjWBuIb%2FanC165QhKMtyb6qc1QWEFkSf0pyplbut9bdG4r9P8tVbNCKiSSwudef3LHaLYYT5TdF4rZ7M%2BUcLSiMm07ExEq%2B0skYGA0ya1XPd59%2FRNVJwlMBZLek0BhNfgOuIB3ynRV%2BHBSo1sKNf%2BEfEmnfww%2FNzICNUIj0ORzw%2Bze0F9ou84cEc%2FEhn244zT78gEMG5czqG6x50IZX5XLWcHW5B%2Bb38kdsYLOluZ0kN5348xGZlVJdhA89MgmnCz%2BAA4F6KQ1FlF3j9oo7j7uYrEL7fywIgrFRh1Qa5S3KsTwp0eJl5TUzBTzciFBqrZg5oEYcL%2BiEyyNkKwPlZu%2FHvCQu4Nq0VN4ej5TxgzRjlJ5k192kOR22CDMNvQs9QGOqUBvFeEuJr%2Bq0g3FZmFJhYIsIFwGQpcpqMn%2F7zfJJNnVKK%2BSUmXMz360Dne5b97YTB26xBYkg%2FUSm7xOvfy8NIb796xB1psd6kjgnCrjffDlCTA1u5UEt5oG%2BojLXwpze6Ij4LtBJcrXGopXqUDwFik9Aplcbz%2FJvabih0DYMvu9p7%2B4E2WTtpBG7pg7S1Y6iBNQOOc6xNg%2BDUFNuOghHn3Jrpj21iD&X-Amz-Signature=18b5db6e1229f690f2bdc6049bf2e3b70ffca19142f2bf69358f5bc09e73cd42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKKOQM24%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCICjrdYm7btiw19CesWdeJnc5OEuxPiRsQdjgAv%2B0%2BM6HAiEAvnmOm%2BABMAnhz3jRZvoqT60IHRqy51qXeLMnZEJDimwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEoo3Llok%2Bd5ZsLUircA8WAogtiM%2FbVd4DC%2BQcEkuXOLDxmYV%2Fsr6nYdwFrqny8F9UwNguwC57gnXtgJh3%2BEkXGpoDbjnJ7NZ8Jw1FwerYQ%2B4J64vOdYz7Gi1X0fzR7x9ApKpShOG744E2yHhm5ObTgOrvq9YkBXc9QkgHeXkeE18UQ3N7pdFVf%2F8Ma8FptSw7Na2h4%2FL0CfdtSRGAGiPLSCP1grTtthAa4mcGbx%2BXgsg23kZ9MVxVoTdFOkXYs2Tah%2FuWcS%2BVKeAQZ4fudVA1jjWBuIb%2FanC165QhKMtyb6qc1QWEFkSf0pyplbut9bdG4r9P8tVbNCKiSSwudef3LHaLYYT5TdF4rZ7M%2BUcLSiMm07ExEq%2B0skYGA0ya1XPd59%2FRNVJwlMBZLek0BhNfgOuIB3ynRV%2BHBSo1sKNf%2BEfEmnfww%2FNzICNUIj0ORzw%2Bze0F9ou84cEc%2FEhn244zT78gEMG5czqG6x50IZX5XLWcHW5B%2Bb38kdsYLOluZ0kN5348xGZlVJdhA89MgmnCz%2BAA4F6KQ1FlF3j9oo7j7uYrEL7fywIgrFRh1Qa5S3KsTwp0eJl5TUzBTzciFBqrZg5oEYcL%2BiEyyNkKwPlZu%2FHvCQu4Nq0VN4ej5TxgzRjlJ5k192kOR22CDMNvQs9QGOqUBvFeEuJr%2Bq0g3FZmFJhYIsIFwGQpcpqMn%2F7zfJJNnVKK%2BSUmXMz360Dne5b97YTB26xBYkg%2FUSm7xOvfy8NIb796xB1psd6kjgnCrjffDlCTA1u5UEt5oG%2BojLXwpze6Ij4LtBJcrXGopXqUDwFik9Aplcbz%2FJvabih0DYMvu9p7%2B4E2WTtpBG7pg7S1Y6iBNQOOc6xNg%2BDUFNuOghHn3Jrpj21iD&X-Amz-Signature=9717bea60c35b70135fa73552d5e40fba7fce05bf41479f53fc0810317bbf603&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKKOQM24%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCICjrdYm7btiw19CesWdeJnc5OEuxPiRsQdjgAv%2B0%2BM6HAiEAvnmOm%2BABMAnhz3jRZvoqT60IHRqy51qXeLMnZEJDimwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEoo3Llok%2Bd5ZsLUircA8WAogtiM%2FbVd4DC%2BQcEkuXOLDxmYV%2Fsr6nYdwFrqny8F9UwNguwC57gnXtgJh3%2BEkXGpoDbjnJ7NZ8Jw1FwerYQ%2B4J64vOdYz7Gi1X0fzR7x9ApKpShOG744E2yHhm5ObTgOrvq9YkBXc9QkgHeXkeE18UQ3N7pdFVf%2F8Ma8FptSw7Na2h4%2FL0CfdtSRGAGiPLSCP1grTtthAa4mcGbx%2BXgsg23kZ9MVxVoTdFOkXYs2Tah%2FuWcS%2BVKeAQZ4fudVA1jjWBuIb%2FanC165QhKMtyb6qc1QWEFkSf0pyplbut9bdG4r9P8tVbNCKiSSwudef3LHaLYYT5TdF4rZ7M%2BUcLSiMm07ExEq%2B0skYGA0ya1XPd59%2FRNVJwlMBZLek0BhNfgOuIB3ynRV%2BHBSo1sKNf%2BEfEmnfww%2FNzICNUIj0ORzw%2Bze0F9ou84cEc%2FEhn244zT78gEMG5czqG6x50IZX5XLWcHW5B%2Bb38kdsYLOluZ0kN5348xGZlVJdhA89MgmnCz%2BAA4F6KQ1FlF3j9oo7j7uYrEL7fywIgrFRh1Qa5S3KsTwp0eJl5TUzBTzciFBqrZg5oEYcL%2BiEyyNkKwPlZu%2FHvCQu4Nq0VN4ej5TxgzRjlJ5k192kOR22CDMNvQs9QGOqUBvFeEuJr%2Bq0g3FZmFJhYIsIFwGQpcpqMn%2F7zfJJNnVKK%2BSUmXMz360Dne5b97YTB26xBYkg%2FUSm7xOvfy8NIb796xB1psd6kjgnCrjffDlCTA1u5UEt5oG%2BojLXwpze6Ij4LtBJcrXGopXqUDwFik9Aplcbz%2FJvabih0DYMvu9p7%2B4E2WTtpBG7pg7S1Y6iBNQOOc6xNg%2BDUFNuOghHn3Jrpj21iD&X-Amz-Signature=5974426a321b5e32283e5ec2054e0d494454bff2cecd2b1adc60fac5b37f7d59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKKOQM24%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCICjrdYm7btiw19CesWdeJnc5OEuxPiRsQdjgAv%2B0%2BM6HAiEAvnmOm%2BABMAnhz3jRZvoqT60IHRqy51qXeLMnZEJDimwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEoo3Llok%2Bd5ZsLUircA8WAogtiM%2FbVd4DC%2BQcEkuXOLDxmYV%2Fsr6nYdwFrqny8F9UwNguwC57gnXtgJh3%2BEkXGpoDbjnJ7NZ8Jw1FwerYQ%2B4J64vOdYz7Gi1X0fzR7x9ApKpShOG744E2yHhm5ObTgOrvq9YkBXc9QkgHeXkeE18UQ3N7pdFVf%2F8Ma8FptSw7Na2h4%2FL0CfdtSRGAGiPLSCP1grTtthAa4mcGbx%2BXgsg23kZ9MVxVoTdFOkXYs2Tah%2FuWcS%2BVKeAQZ4fudVA1jjWBuIb%2FanC165QhKMtyb6qc1QWEFkSf0pyplbut9bdG4r9P8tVbNCKiSSwudef3LHaLYYT5TdF4rZ7M%2BUcLSiMm07ExEq%2B0skYGA0ya1XPd59%2FRNVJwlMBZLek0BhNfgOuIB3ynRV%2BHBSo1sKNf%2BEfEmnfww%2FNzICNUIj0ORzw%2Bze0F9ou84cEc%2FEhn244zT78gEMG5czqG6x50IZX5XLWcHW5B%2Bb38kdsYLOluZ0kN5348xGZlVJdhA89MgmnCz%2BAA4F6KQ1FlF3j9oo7j7uYrEL7fywIgrFRh1Qa5S3KsTwp0eJl5TUzBTzciFBqrZg5oEYcL%2BiEyyNkKwPlZu%2FHvCQu4Nq0VN4ej5TxgzRjlJ5k192kOR22CDMNvQs9QGOqUBvFeEuJr%2Bq0g3FZmFJhYIsIFwGQpcpqMn%2F7zfJJNnVKK%2BSUmXMz360Dne5b97YTB26xBYkg%2FUSm7xOvfy8NIb796xB1psd6kjgnCrjffDlCTA1u5UEt5oG%2BojLXwpze6Ij4LtBJcrXGopXqUDwFik9Aplcbz%2FJvabih0DYMvu9p7%2B4E2WTtpBG7pg7S1Y6iBNQOOc6xNg%2BDUFNuOghHn3Jrpj21iD&X-Amz-Signature=35077e077dac424c73393382293895c0227e95b4bc73d51278597e20efc03880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKKOQM24%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCICjrdYm7btiw19CesWdeJnc5OEuxPiRsQdjgAv%2B0%2BM6HAiEAvnmOm%2BABMAnhz3jRZvoqT60IHRqy51qXeLMnZEJDimwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEoo3Llok%2Bd5ZsLUircA8WAogtiM%2FbVd4DC%2BQcEkuXOLDxmYV%2Fsr6nYdwFrqny8F9UwNguwC57gnXtgJh3%2BEkXGpoDbjnJ7NZ8Jw1FwerYQ%2B4J64vOdYz7Gi1X0fzR7x9ApKpShOG744E2yHhm5ObTgOrvq9YkBXc9QkgHeXkeE18UQ3N7pdFVf%2F8Ma8FptSw7Na2h4%2FL0CfdtSRGAGiPLSCP1grTtthAa4mcGbx%2BXgsg23kZ9MVxVoTdFOkXYs2Tah%2FuWcS%2BVKeAQZ4fudVA1jjWBuIb%2FanC165QhKMtyb6qc1QWEFkSf0pyplbut9bdG4r9P8tVbNCKiSSwudef3LHaLYYT5TdF4rZ7M%2BUcLSiMm07ExEq%2B0skYGA0ya1XPd59%2FRNVJwlMBZLek0BhNfgOuIB3ynRV%2BHBSo1sKNf%2BEfEmnfww%2FNzICNUIj0ORzw%2Bze0F9ou84cEc%2FEhn244zT78gEMG5czqG6x50IZX5XLWcHW5B%2Bb38kdsYLOluZ0kN5348xGZlVJdhA89MgmnCz%2BAA4F6KQ1FlF3j9oo7j7uYrEL7fywIgrFRh1Qa5S3KsTwp0eJl5TUzBTzciFBqrZg5oEYcL%2BiEyyNkKwPlZu%2FHvCQu4Nq0VN4ej5TxgzRjlJ5k192kOR22CDMNvQs9QGOqUBvFeEuJr%2Bq0g3FZmFJhYIsIFwGQpcpqMn%2F7zfJJNnVKK%2BSUmXMz360Dne5b97YTB26xBYkg%2FUSm7xOvfy8NIb796xB1psd6kjgnCrjffDlCTA1u5UEt5oG%2BojLXwpze6Ij4LtBJcrXGopXqUDwFik9Aplcbz%2FJvabih0DYMvu9p7%2B4E2WTtpBG7pg7S1Y6iBNQOOc6xNg%2BDUFNuOghHn3Jrpj21iD&X-Amz-Signature=15b54c69a7ccce7d4f9d6d6458e44e884e9d05b30d6d0cb727f172ea24f768a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKKOQM24%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCICjrdYm7btiw19CesWdeJnc5OEuxPiRsQdjgAv%2B0%2BM6HAiEAvnmOm%2BABMAnhz3jRZvoqT60IHRqy51qXeLMnZEJDimwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEoo3Llok%2Bd5ZsLUircA8WAogtiM%2FbVd4DC%2BQcEkuXOLDxmYV%2Fsr6nYdwFrqny8F9UwNguwC57gnXtgJh3%2BEkXGpoDbjnJ7NZ8Jw1FwerYQ%2B4J64vOdYz7Gi1X0fzR7x9ApKpShOG744E2yHhm5ObTgOrvq9YkBXc9QkgHeXkeE18UQ3N7pdFVf%2F8Ma8FptSw7Na2h4%2FL0CfdtSRGAGiPLSCP1grTtthAa4mcGbx%2BXgsg23kZ9MVxVoTdFOkXYs2Tah%2FuWcS%2BVKeAQZ4fudVA1jjWBuIb%2FanC165QhKMtyb6qc1QWEFkSf0pyplbut9bdG4r9P8tVbNCKiSSwudef3LHaLYYT5TdF4rZ7M%2BUcLSiMm07ExEq%2B0skYGA0ya1XPd59%2FRNVJwlMBZLek0BhNfgOuIB3ynRV%2BHBSo1sKNf%2BEfEmnfww%2FNzICNUIj0ORzw%2Bze0F9ou84cEc%2FEhn244zT78gEMG5czqG6x50IZX5XLWcHW5B%2Bb38kdsYLOluZ0kN5348xGZlVJdhA89MgmnCz%2BAA4F6KQ1FlF3j9oo7j7uYrEL7fywIgrFRh1Qa5S3KsTwp0eJl5TUzBTzciFBqrZg5oEYcL%2BiEyyNkKwPlZu%2FHvCQu4Nq0VN4ej5TxgzRjlJ5k192kOR22CDMNvQs9QGOqUBvFeEuJr%2Bq0g3FZmFJhYIsIFwGQpcpqMn%2F7zfJJNnVKK%2BSUmXMz360Dne5b97YTB26xBYkg%2FUSm7xOvfy8NIb796xB1psd6kjgnCrjffDlCTA1u5UEt5oG%2BojLXwpze6Ij4LtBJcrXGopXqUDwFik9Aplcbz%2FJvabih0DYMvu9p7%2B4E2WTtpBG7pg7S1Y6iBNQOOc6xNg%2BDUFNuOghHn3Jrpj21iD&X-Amz-Signature=f0ad2a82fc2768a0ed71871c5a358595e5087f562502a8586277ef20c4cbe4e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKKOQM24%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCICjrdYm7btiw19CesWdeJnc5OEuxPiRsQdjgAv%2B0%2BM6HAiEAvnmOm%2BABMAnhz3jRZvoqT60IHRqy51qXeLMnZEJDimwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEoo3Llok%2Bd5ZsLUircA8WAogtiM%2FbVd4DC%2BQcEkuXOLDxmYV%2Fsr6nYdwFrqny8F9UwNguwC57gnXtgJh3%2BEkXGpoDbjnJ7NZ8Jw1FwerYQ%2B4J64vOdYz7Gi1X0fzR7x9ApKpShOG744E2yHhm5ObTgOrvq9YkBXc9QkgHeXkeE18UQ3N7pdFVf%2F8Ma8FptSw7Na2h4%2FL0CfdtSRGAGiPLSCP1grTtthAa4mcGbx%2BXgsg23kZ9MVxVoTdFOkXYs2Tah%2FuWcS%2BVKeAQZ4fudVA1jjWBuIb%2FanC165QhKMtyb6qc1QWEFkSf0pyplbut9bdG4r9P8tVbNCKiSSwudef3LHaLYYT5TdF4rZ7M%2BUcLSiMm07ExEq%2B0skYGA0ya1XPd59%2FRNVJwlMBZLek0BhNfgOuIB3ynRV%2BHBSo1sKNf%2BEfEmnfww%2FNzICNUIj0ORzw%2Bze0F9ou84cEc%2FEhn244zT78gEMG5czqG6x50IZX5XLWcHW5B%2Bb38kdsYLOluZ0kN5348xGZlVJdhA89MgmnCz%2BAA4F6KQ1FlF3j9oo7j7uYrEL7fywIgrFRh1Qa5S3KsTwp0eJl5TUzBTzciFBqrZg5oEYcL%2BiEyyNkKwPlZu%2FHvCQu4Nq0VN4ej5TxgzRjlJ5k192kOR22CDMNvQs9QGOqUBvFeEuJr%2Bq0g3FZmFJhYIsIFwGQpcpqMn%2F7zfJJNnVKK%2BSUmXMz360Dne5b97YTB26xBYkg%2FUSm7xOvfy8NIb796xB1psd6kjgnCrjffDlCTA1u5UEt5oG%2BojLXwpze6Ij4LtBJcrXGopXqUDwFik9Aplcbz%2FJvabih0DYMvu9p7%2B4E2WTtpBG7pg7S1Y6iBNQOOc6xNg%2BDUFNuOghHn3Jrpj21iD&X-Amz-Signature=8983f06d78b5adafbcb5a688e6c49178565ccc8a39097a7e5c93558c668eba54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
