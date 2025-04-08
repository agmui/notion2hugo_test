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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEGZFWRY%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDByfheD9xjazEXwJigb9iUrKWJfJnFopAgt5tvA0wRRQIgLSXLv%2FfPvDNIRpC8urNISUk9RvM7Hxl6bHUd%2Fg%2BukTIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLdk3r1HN60GMGDT6yrcAxRy%2FM1fcq1WTtb%2F1p6NgXY4sB6JbEF79aZC5kJ6QVfPH7qJNOEajRNsxTZEMCEuJpWuSuOVYckVcLVypqODXt5VbWPluKgAxoP62XJJ8ug1XTbYohdkh62VkBKkJ4scTwhfp4o%2Br9MNbJCFRicV3rZL1S42UeDF4EfqR%2B30CQ%2FfDjnl%2BOTGfbO%2FONcv%2Fjj48mkpmwarr77m82in3SNwYvpJAQ4HZ6PH5UsZSPedEkNQd%2BWAVKsnNHfm%2BKhKmodWMyqYK4i6QvwV%2F%2BdTvdGL5cTji2gkt7AWrTyJaxAG4bD%2B0A6Ja7a1HJZxk7nUIX53Ot5lWmgjnoZ9kB8EHqo0vafjQbwHl8kSxcd%2F28ekUvQLLKm7V4%2BGHmd1iSvZs9cCAhLc%2FidUkJhRRqixJT0uBg34e44I2TBlJ9OnUHk8vlYPvpNUQ6TDDxsCozi%2Fm4sfCohasgshqajtm%2FI9CjPIoG0oGpf8kTB3WdEnflcs%2FOxnuiRif6EyKowB%2FU4T94JqJ1G4GSlpKuZOAkeOnuKhp4lyW86p7MXEdCa%2FXeA%2FFjdba7fpelXLk5QRIaaehu%2Fv8J0Lb0towN%2FctqiIHZ7vA6zpR%2BzxUzKglp3%2BSmLA4Cf9DkLBb62M%2BBsJxBJOMOfX1L8GOqUBPlUup7KC2v0ovbrDBfNVymYzVksD8lBVH6xt06DkoWg2bOhekCTXlMctoFUfn5%2FRwEFVJ9qPibd3Qv0V8yBnAw4rC%2FO2jXVUHUXIGz8ZWhYXIktp1ML1oCkLIrHqdRwwE8ikzgrgNDCvIRzFgJ0c8g0e1ETs5%2BELNS1pmj8oUUvizHRUEnv99M5t1ZDNHz%2FLL9ISy8idGvG6A5Fi5ZpOpypxnkV0&X-Amz-Signature=bb70a390f581b728cbab9903c36ac72c1f6b4ab50cd026ef8916c61f23f1b545&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEGZFWRY%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDByfheD9xjazEXwJigb9iUrKWJfJnFopAgt5tvA0wRRQIgLSXLv%2FfPvDNIRpC8urNISUk9RvM7Hxl6bHUd%2Fg%2BukTIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLdk3r1HN60GMGDT6yrcAxRy%2FM1fcq1WTtb%2F1p6NgXY4sB6JbEF79aZC5kJ6QVfPH7qJNOEajRNsxTZEMCEuJpWuSuOVYckVcLVypqODXt5VbWPluKgAxoP62XJJ8ug1XTbYohdkh62VkBKkJ4scTwhfp4o%2Br9MNbJCFRicV3rZL1S42UeDF4EfqR%2B30CQ%2FfDjnl%2BOTGfbO%2FONcv%2Fjj48mkpmwarr77m82in3SNwYvpJAQ4HZ6PH5UsZSPedEkNQd%2BWAVKsnNHfm%2BKhKmodWMyqYK4i6QvwV%2F%2BdTvdGL5cTji2gkt7AWrTyJaxAG4bD%2B0A6Ja7a1HJZxk7nUIX53Ot5lWmgjnoZ9kB8EHqo0vafjQbwHl8kSxcd%2F28ekUvQLLKm7V4%2BGHmd1iSvZs9cCAhLc%2FidUkJhRRqixJT0uBg34e44I2TBlJ9OnUHk8vlYPvpNUQ6TDDxsCozi%2Fm4sfCohasgshqajtm%2FI9CjPIoG0oGpf8kTB3WdEnflcs%2FOxnuiRif6EyKowB%2FU4T94JqJ1G4GSlpKuZOAkeOnuKhp4lyW86p7MXEdCa%2FXeA%2FFjdba7fpelXLk5QRIaaehu%2Fv8J0Lb0towN%2FctqiIHZ7vA6zpR%2BzxUzKglp3%2BSmLA4Cf9DkLBb62M%2BBsJxBJOMOfX1L8GOqUBPlUup7KC2v0ovbrDBfNVymYzVksD8lBVH6xt06DkoWg2bOhekCTXlMctoFUfn5%2FRwEFVJ9qPibd3Qv0V8yBnAw4rC%2FO2jXVUHUXIGz8ZWhYXIktp1ML1oCkLIrHqdRwwE8ikzgrgNDCvIRzFgJ0c8g0e1ETs5%2BELNS1pmj8oUUvizHRUEnv99M5t1ZDNHz%2FLL9ISy8idGvG6A5Fi5ZpOpypxnkV0&X-Amz-Signature=10fe0728ddcc693414db59a26dac9933f0043f8cedbcd82fba7c20eb769aa9cd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEGZFWRY%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDByfheD9xjazEXwJigb9iUrKWJfJnFopAgt5tvA0wRRQIgLSXLv%2FfPvDNIRpC8urNISUk9RvM7Hxl6bHUd%2Fg%2BukTIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLdk3r1HN60GMGDT6yrcAxRy%2FM1fcq1WTtb%2F1p6NgXY4sB6JbEF79aZC5kJ6QVfPH7qJNOEajRNsxTZEMCEuJpWuSuOVYckVcLVypqODXt5VbWPluKgAxoP62XJJ8ug1XTbYohdkh62VkBKkJ4scTwhfp4o%2Br9MNbJCFRicV3rZL1S42UeDF4EfqR%2B30CQ%2FfDjnl%2BOTGfbO%2FONcv%2Fjj48mkpmwarr77m82in3SNwYvpJAQ4HZ6PH5UsZSPedEkNQd%2BWAVKsnNHfm%2BKhKmodWMyqYK4i6QvwV%2F%2BdTvdGL5cTji2gkt7AWrTyJaxAG4bD%2B0A6Ja7a1HJZxk7nUIX53Ot5lWmgjnoZ9kB8EHqo0vafjQbwHl8kSxcd%2F28ekUvQLLKm7V4%2BGHmd1iSvZs9cCAhLc%2FidUkJhRRqixJT0uBg34e44I2TBlJ9OnUHk8vlYPvpNUQ6TDDxsCozi%2Fm4sfCohasgshqajtm%2FI9CjPIoG0oGpf8kTB3WdEnflcs%2FOxnuiRif6EyKowB%2FU4T94JqJ1G4GSlpKuZOAkeOnuKhp4lyW86p7MXEdCa%2FXeA%2FFjdba7fpelXLk5QRIaaehu%2Fv8J0Lb0towN%2FctqiIHZ7vA6zpR%2BzxUzKglp3%2BSmLA4Cf9DkLBb62M%2BBsJxBJOMOfX1L8GOqUBPlUup7KC2v0ovbrDBfNVymYzVksD8lBVH6xt06DkoWg2bOhekCTXlMctoFUfn5%2FRwEFVJ9qPibd3Qv0V8yBnAw4rC%2FO2jXVUHUXIGz8ZWhYXIktp1ML1oCkLIrHqdRwwE8ikzgrgNDCvIRzFgJ0c8g0e1ETs5%2BELNS1pmj8oUUvizHRUEnv99M5t1ZDNHz%2FLL9ISy8idGvG6A5Fi5ZpOpypxnkV0&X-Amz-Signature=970fa522086cbf6001445bc05f8c0f8de1798d32dc8bb717e70c472a543acfde&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEGZFWRY%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDByfheD9xjazEXwJigb9iUrKWJfJnFopAgt5tvA0wRRQIgLSXLv%2FfPvDNIRpC8urNISUk9RvM7Hxl6bHUd%2Fg%2BukTIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLdk3r1HN60GMGDT6yrcAxRy%2FM1fcq1WTtb%2F1p6NgXY4sB6JbEF79aZC5kJ6QVfPH7qJNOEajRNsxTZEMCEuJpWuSuOVYckVcLVypqODXt5VbWPluKgAxoP62XJJ8ug1XTbYohdkh62VkBKkJ4scTwhfp4o%2Br9MNbJCFRicV3rZL1S42UeDF4EfqR%2B30CQ%2FfDjnl%2BOTGfbO%2FONcv%2Fjj48mkpmwarr77m82in3SNwYvpJAQ4HZ6PH5UsZSPedEkNQd%2BWAVKsnNHfm%2BKhKmodWMyqYK4i6QvwV%2F%2BdTvdGL5cTji2gkt7AWrTyJaxAG4bD%2B0A6Ja7a1HJZxk7nUIX53Ot5lWmgjnoZ9kB8EHqo0vafjQbwHl8kSxcd%2F28ekUvQLLKm7V4%2BGHmd1iSvZs9cCAhLc%2FidUkJhRRqixJT0uBg34e44I2TBlJ9OnUHk8vlYPvpNUQ6TDDxsCozi%2Fm4sfCohasgshqajtm%2FI9CjPIoG0oGpf8kTB3WdEnflcs%2FOxnuiRif6EyKowB%2FU4T94JqJ1G4GSlpKuZOAkeOnuKhp4lyW86p7MXEdCa%2FXeA%2FFjdba7fpelXLk5QRIaaehu%2Fv8J0Lb0towN%2FctqiIHZ7vA6zpR%2BzxUzKglp3%2BSmLA4Cf9DkLBb62M%2BBsJxBJOMOfX1L8GOqUBPlUup7KC2v0ovbrDBfNVymYzVksD8lBVH6xt06DkoWg2bOhekCTXlMctoFUfn5%2FRwEFVJ9qPibd3Qv0V8yBnAw4rC%2FO2jXVUHUXIGz8ZWhYXIktp1ML1oCkLIrHqdRwwE8ikzgrgNDCvIRzFgJ0c8g0e1ETs5%2BELNS1pmj8oUUvizHRUEnv99M5t1ZDNHz%2FLL9ISy8idGvG6A5Fi5ZpOpypxnkV0&X-Amz-Signature=384b13650212c22978361647d6ed9faf8ac23933361c770d524b4f9bbc0ba53f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEGZFWRY%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDByfheD9xjazEXwJigb9iUrKWJfJnFopAgt5tvA0wRRQIgLSXLv%2FfPvDNIRpC8urNISUk9RvM7Hxl6bHUd%2Fg%2BukTIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLdk3r1HN60GMGDT6yrcAxRy%2FM1fcq1WTtb%2F1p6NgXY4sB6JbEF79aZC5kJ6QVfPH7qJNOEajRNsxTZEMCEuJpWuSuOVYckVcLVypqODXt5VbWPluKgAxoP62XJJ8ug1XTbYohdkh62VkBKkJ4scTwhfp4o%2Br9MNbJCFRicV3rZL1S42UeDF4EfqR%2B30CQ%2FfDjnl%2BOTGfbO%2FONcv%2Fjj48mkpmwarr77m82in3SNwYvpJAQ4HZ6PH5UsZSPedEkNQd%2BWAVKsnNHfm%2BKhKmodWMyqYK4i6QvwV%2F%2BdTvdGL5cTji2gkt7AWrTyJaxAG4bD%2B0A6Ja7a1HJZxk7nUIX53Ot5lWmgjnoZ9kB8EHqo0vafjQbwHl8kSxcd%2F28ekUvQLLKm7V4%2BGHmd1iSvZs9cCAhLc%2FidUkJhRRqixJT0uBg34e44I2TBlJ9OnUHk8vlYPvpNUQ6TDDxsCozi%2Fm4sfCohasgshqajtm%2FI9CjPIoG0oGpf8kTB3WdEnflcs%2FOxnuiRif6EyKowB%2FU4T94JqJ1G4GSlpKuZOAkeOnuKhp4lyW86p7MXEdCa%2FXeA%2FFjdba7fpelXLk5QRIaaehu%2Fv8J0Lb0towN%2FctqiIHZ7vA6zpR%2BzxUzKglp3%2BSmLA4Cf9DkLBb62M%2BBsJxBJOMOfX1L8GOqUBPlUup7KC2v0ovbrDBfNVymYzVksD8lBVH6xt06DkoWg2bOhekCTXlMctoFUfn5%2FRwEFVJ9qPibd3Qv0V8yBnAw4rC%2FO2jXVUHUXIGz8ZWhYXIktp1ML1oCkLIrHqdRwwE8ikzgrgNDCvIRzFgJ0c8g0e1ETs5%2BELNS1pmj8oUUvizHRUEnv99M5t1ZDNHz%2FLL9ISy8idGvG6A5Fi5ZpOpypxnkV0&X-Amz-Signature=917b3ff0a48d11910868b4e7506f1a9c2ed792cbaa0410e11351599dbbef5362&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEGZFWRY%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDByfheD9xjazEXwJigb9iUrKWJfJnFopAgt5tvA0wRRQIgLSXLv%2FfPvDNIRpC8urNISUk9RvM7Hxl6bHUd%2Fg%2BukTIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLdk3r1HN60GMGDT6yrcAxRy%2FM1fcq1WTtb%2F1p6NgXY4sB6JbEF79aZC5kJ6QVfPH7qJNOEajRNsxTZEMCEuJpWuSuOVYckVcLVypqODXt5VbWPluKgAxoP62XJJ8ug1XTbYohdkh62VkBKkJ4scTwhfp4o%2Br9MNbJCFRicV3rZL1S42UeDF4EfqR%2B30CQ%2FfDjnl%2BOTGfbO%2FONcv%2Fjj48mkpmwarr77m82in3SNwYvpJAQ4HZ6PH5UsZSPedEkNQd%2BWAVKsnNHfm%2BKhKmodWMyqYK4i6QvwV%2F%2BdTvdGL5cTji2gkt7AWrTyJaxAG4bD%2B0A6Ja7a1HJZxk7nUIX53Ot5lWmgjnoZ9kB8EHqo0vafjQbwHl8kSxcd%2F28ekUvQLLKm7V4%2BGHmd1iSvZs9cCAhLc%2FidUkJhRRqixJT0uBg34e44I2TBlJ9OnUHk8vlYPvpNUQ6TDDxsCozi%2Fm4sfCohasgshqajtm%2FI9CjPIoG0oGpf8kTB3WdEnflcs%2FOxnuiRif6EyKowB%2FU4T94JqJ1G4GSlpKuZOAkeOnuKhp4lyW86p7MXEdCa%2FXeA%2FFjdba7fpelXLk5QRIaaehu%2Fv8J0Lb0towN%2FctqiIHZ7vA6zpR%2BzxUzKglp3%2BSmLA4Cf9DkLBb62M%2BBsJxBJOMOfX1L8GOqUBPlUup7KC2v0ovbrDBfNVymYzVksD8lBVH6xt06DkoWg2bOhekCTXlMctoFUfn5%2FRwEFVJ9qPibd3Qv0V8yBnAw4rC%2FO2jXVUHUXIGz8ZWhYXIktp1ML1oCkLIrHqdRwwE8ikzgrgNDCvIRzFgJ0c8g0e1ETs5%2BELNS1pmj8oUUvizHRUEnv99M5t1ZDNHz%2FLL9ISy8idGvG6A5Fi5ZpOpypxnkV0&X-Amz-Signature=f452b12a80f514f675d38376c0d9d43cbdc6cad0f829d0e95484d37d5b3f6544&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEGZFWRY%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDByfheD9xjazEXwJigb9iUrKWJfJnFopAgt5tvA0wRRQIgLSXLv%2FfPvDNIRpC8urNISUk9RvM7Hxl6bHUd%2Fg%2BukTIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLdk3r1HN60GMGDT6yrcAxRy%2FM1fcq1WTtb%2F1p6NgXY4sB6JbEF79aZC5kJ6QVfPH7qJNOEajRNsxTZEMCEuJpWuSuOVYckVcLVypqODXt5VbWPluKgAxoP62XJJ8ug1XTbYohdkh62VkBKkJ4scTwhfp4o%2Br9MNbJCFRicV3rZL1S42UeDF4EfqR%2B30CQ%2FfDjnl%2BOTGfbO%2FONcv%2Fjj48mkpmwarr77m82in3SNwYvpJAQ4HZ6PH5UsZSPedEkNQd%2BWAVKsnNHfm%2BKhKmodWMyqYK4i6QvwV%2F%2BdTvdGL5cTji2gkt7AWrTyJaxAG4bD%2B0A6Ja7a1HJZxk7nUIX53Ot5lWmgjnoZ9kB8EHqo0vafjQbwHl8kSxcd%2F28ekUvQLLKm7V4%2BGHmd1iSvZs9cCAhLc%2FidUkJhRRqixJT0uBg34e44I2TBlJ9OnUHk8vlYPvpNUQ6TDDxsCozi%2Fm4sfCohasgshqajtm%2FI9CjPIoG0oGpf8kTB3WdEnflcs%2FOxnuiRif6EyKowB%2FU4T94JqJ1G4GSlpKuZOAkeOnuKhp4lyW86p7MXEdCa%2FXeA%2FFjdba7fpelXLk5QRIaaehu%2Fv8J0Lb0towN%2FctqiIHZ7vA6zpR%2BzxUzKglp3%2BSmLA4Cf9DkLBb62M%2BBsJxBJOMOfX1L8GOqUBPlUup7KC2v0ovbrDBfNVymYzVksD8lBVH6xt06DkoWg2bOhekCTXlMctoFUfn5%2FRwEFVJ9qPibd3Qv0V8yBnAw4rC%2FO2jXVUHUXIGz8ZWhYXIktp1ML1oCkLIrHqdRwwE8ikzgrgNDCvIRzFgJ0c8g0e1ETs5%2BELNS1pmj8oUUvizHRUEnv99M5t1ZDNHz%2FLL9ISy8idGvG6A5Fi5ZpOpypxnkV0&X-Amz-Signature=411759766f3b65ad464394de87b2ca54de2446d5048e364b622368f4729a7d52&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
