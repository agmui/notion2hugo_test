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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDDB7XUU%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOvenqxSgpMXoB2yBc2QSn4GI9Kk%2FBL1ONN2WZxyHQhwIhAI%2BOba3%2FoDEUoANZTHhAslbnhimUMe%2FGYlkBVxhIdQqvKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypYmWc%2FPM4YEaxzU0q3ANuRyTdXcG3qq%2FlB2bvmuPZYDwBWt6IVaBiM537XIBbI4QN%2B2sjuOK102L7FlgjnWWF6LGxc6M2wMfEkND4EZw8B%2BIDNgx1w3FrtobJJcAKPZv8JTZv4x6VqOny3tghc1%2FWNHB8JTp0Ukg9Rtlxc9jMnrK5Kyf1dVsvP8QhLXY4asUC62FJVf%2BbBj32%2FS0c5VhcLMjUGSadkJQL0cwJdzpVr15n5Tu%2FOW1B5%2FX8tmnfstREMVSo9nczf6w4loaO4r%2BxvnjS%2F5nWff4GGCZNZMnQQ5%2BD8kCg6Y1Ua%2B0FRc146Wve3IrCABJYFOcFkTqMXI78Q7ubal%2FFAkitlgww0Jad%2FzciEl0KjIQqtZbcFqZgU1ciwyhyEAXDeA%2FuXToNfXvpg6536ujkzUwoz9wYRKMQGJvJY9hDieykNCRGmX%2FRKVLR3dyNvoUVB5se5X76dnsePeyeabroOJNvTjzh5MjmCF2B3r65azFafk4T%2FrFa9i04vXwT4ZTcOYYYfqj2BlMxca%2F5%2FgZjyau9%2FBl9sZGd%2Bekw7pDa1ZSmZyd0y8DUTnoR64YkYCDaI2LtlEoSfy%2FuLEivB1Ryn0OPSXkVFBkiKFVNvixIDyFva01in1NoCHCEykiv%2BnEtTkFZQTCkkLXBBjqkAZxyQP3gB%2Fo8PXYVTNUk7jqsLKp%2FPZligbPYC6Ru%2BbL3r8nOxljpShAKgnqtTN3KLfRdNa5VD4TL%2BBib%2FE1H%2F17f3eXytngBy7i4dD5lNOqP8WpLSjy0nTYCevpdfjVWY4sRhqAB1fs9yYrwRFcBzSt3fjey7hRoHhoU8lAbWqQgsiy7HoOxFsX%2BTMWlu%2FxwRBlpl9av%2BMfZG4AjyXY%2FcTt8N%2F1y&X-Amz-Signature=42cf0b3e45258801ea563245bdc7d71594eb5feb35576756f8c2847fca4116a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDDB7XUU%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOvenqxSgpMXoB2yBc2QSn4GI9Kk%2FBL1ONN2WZxyHQhwIhAI%2BOba3%2FoDEUoANZTHhAslbnhimUMe%2FGYlkBVxhIdQqvKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypYmWc%2FPM4YEaxzU0q3ANuRyTdXcG3qq%2FlB2bvmuPZYDwBWt6IVaBiM537XIBbI4QN%2B2sjuOK102L7FlgjnWWF6LGxc6M2wMfEkND4EZw8B%2BIDNgx1w3FrtobJJcAKPZv8JTZv4x6VqOny3tghc1%2FWNHB8JTp0Ukg9Rtlxc9jMnrK5Kyf1dVsvP8QhLXY4asUC62FJVf%2BbBj32%2FS0c5VhcLMjUGSadkJQL0cwJdzpVr15n5Tu%2FOW1B5%2FX8tmnfstREMVSo9nczf6w4loaO4r%2BxvnjS%2F5nWff4GGCZNZMnQQ5%2BD8kCg6Y1Ua%2B0FRc146Wve3IrCABJYFOcFkTqMXI78Q7ubal%2FFAkitlgww0Jad%2FzciEl0KjIQqtZbcFqZgU1ciwyhyEAXDeA%2FuXToNfXvpg6536ujkzUwoz9wYRKMQGJvJY9hDieykNCRGmX%2FRKVLR3dyNvoUVB5se5X76dnsePeyeabroOJNvTjzh5MjmCF2B3r65azFafk4T%2FrFa9i04vXwT4ZTcOYYYfqj2BlMxca%2F5%2FgZjyau9%2FBl9sZGd%2Bekw7pDa1ZSmZyd0y8DUTnoR64YkYCDaI2LtlEoSfy%2FuLEivB1Ryn0OPSXkVFBkiKFVNvixIDyFva01in1NoCHCEykiv%2BnEtTkFZQTCkkLXBBjqkAZxyQP3gB%2Fo8PXYVTNUk7jqsLKp%2FPZligbPYC6Ru%2BbL3r8nOxljpShAKgnqtTN3KLfRdNa5VD4TL%2BBib%2FE1H%2F17f3eXytngBy7i4dD5lNOqP8WpLSjy0nTYCevpdfjVWY4sRhqAB1fs9yYrwRFcBzSt3fjey7hRoHhoU8lAbWqQgsiy7HoOxFsX%2BTMWlu%2FxwRBlpl9av%2BMfZG4AjyXY%2FcTt8N%2F1y&X-Amz-Signature=e77470edb58cf5ed4ca978c10f40c18b5dfd5027bd3a74ceb257f16e60c85cf8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDDB7XUU%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOvenqxSgpMXoB2yBc2QSn4GI9Kk%2FBL1ONN2WZxyHQhwIhAI%2BOba3%2FoDEUoANZTHhAslbnhimUMe%2FGYlkBVxhIdQqvKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypYmWc%2FPM4YEaxzU0q3ANuRyTdXcG3qq%2FlB2bvmuPZYDwBWt6IVaBiM537XIBbI4QN%2B2sjuOK102L7FlgjnWWF6LGxc6M2wMfEkND4EZw8B%2BIDNgx1w3FrtobJJcAKPZv8JTZv4x6VqOny3tghc1%2FWNHB8JTp0Ukg9Rtlxc9jMnrK5Kyf1dVsvP8QhLXY4asUC62FJVf%2BbBj32%2FS0c5VhcLMjUGSadkJQL0cwJdzpVr15n5Tu%2FOW1B5%2FX8tmnfstREMVSo9nczf6w4loaO4r%2BxvnjS%2F5nWff4GGCZNZMnQQ5%2BD8kCg6Y1Ua%2B0FRc146Wve3IrCABJYFOcFkTqMXI78Q7ubal%2FFAkitlgww0Jad%2FzciEl0KjIQqtZbcFqZgU1ciwyhyEAXDeA%2FuXToNfXvpg6536ujkzUwoz9wYRKMQGJvJY9hDieykNCRGmX%2FRKVLR3dyNvoUVB5se5X76dnsePeyeabroOJNvTjzh5MjmCF2B3r65azFafk4T%2FrFa9i04vXwT4ZTcOYYYfqj2BlMxca%2F5%2FgZjyau9%2FBl9sZGd%2Bekw7pDa1ZSmZyd0y8DUTnoR64YkYCDaI2LtlEoSfy%2FuLEivB1Ryn0OPSXkVFBkiKFVNvixIDyFva01in1NoCHCEykiv%2BnEtTkFZQTCkkLXBBjqkAZxyQP3gB%2Fo8PXYVTNUk7jqsLKp%2FPZligbPYC6Ru%2BbL3r8nOxljpShAKgnqtTN3KLfRdNa5VD4TL%2BBib%2FE1H%2F17f3eXytngBy7i4dD5lNOqP8WpLSjy0nTYCevpdfjVWY4sRhqAB1fs9yYrwRFcBzSt3fjey7hRoHhoU8lAbWqQgsiy7HoOxFsX%2BTMWlu%2FxwRBlpl9av%2BMfZG4AjyXY%2FcTt8N%2F1y&X-Amz-Signature=c35a2f34f1d305e35afb53c3207289452b13e89844a5f1450b5f48af111980cf&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDDB7XUU%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOvenqxSgpMXoB2yBc2QSn4GI9Kk%2FBL1ONN2WZxyHQhwIhAI%2BOba3%2FoDEUoANZTHhAslbnhimUMe%2FGYlkBVxhIdQqvKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypYmWc%2FPM4YEaxzU0q3ANuRyTdXcG3qq%2FlB2bvmuPZYDwBWt6IVaBiM537XIBbI4QN%2B2sjuOK102L7FlgjnWWF6LGxc6M2wMfEkND4EZw8B%2BIDNgx1w3FrtobJJcAKPZv8JTZv4x6VqOny3tghc1%2FWNHB8JTp0Ukg9Rtlxc9jMnrK5Kyf1dVsvP8QhLXY4asUC62FJVf%2BbBj32%2FS0c5VhcLMjUGSadkJQL0cwJdzpVr15n5Tu%2FOW1B5%2FX8tmnfstREMVSo9nczf6w4loaO4r%2BxvnjS%2F5nWff4GGCZNZMnQQ5%2BD8kCg6Y1Ua%2B0FRc146Wve3IrCABJYFOcFkTqMXI78Q7ubal%2FFAkitlgww0Jad%2FzciEl0KjIQqtZbcFqZgU1ciwyhyEAXDeA%2FuXToNfXvpg6536ujkzUwoz9wYRKMQGJvJY9hDieykNCRGmX%2FRKVLR3dyNvoUVB5se5X76dnsePeyeabroOJNvTjzh5MjmCF2B3r65azFafk4T%2FrFa9i04vXwT4ZTcOYYYfqj2BlMxca%2F5%2FgZjyau9%2FBl9sZGd%2Bekw7pDa1ZSmZyd0y8DUTnoR64YkYCDaI2LtlEoSfy%2FuLEivB1Ryn0OPSXkVFBkiKFVNvixIDyFva01in1NoCHCEykiv%2BnEtTkFZQTCkkLXBBjqkAZxyQP3gB%2Fo8PXYVTNUk7jqsLKp%2FPZligbPYC6Ru%2BbL3r8nOxljpShAKgnqtTN3KLfRdNa5VD4TL%2BBib%2FE1H%2F17f3eXytngBy7i4dD5lNOqP8WpLSjy0nTYCevpdfjVWY4sRhqAB1fs9yYrwRFcBzSt3fjey7hRoHhoU8lAbWqQgsiy7HoOxFsX%2BTMWlu%2FxwRBlpl9av%2BMfZG4AjyXY%2FcTt8N%2F1y&X-Amz-Signature=9095288afe879af348ea777f7e36fc3a7f64384d4ccbcfce443d6acb47f96380&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDDB7XUU%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOvenqxSgpMXoB2yBc2QSn4GI9Kk%2FBL1ONN2WZxyHQhwIhAI%2BOba3%2FoDEUoANZTHhAslbnhimUMe%2FGYlkBVxhIdQqvKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypYmWc%2FPM4YEaxzU0q3ANuRyTdXcG3qq%2FlB2bvmuPZYDwBWt6IVaBiM537XIBbI4QN%2B2sjuOK102L7FlgjnWWF6LGxc6M2wMfEkND4EZw8B%2BIDNgx1w3FrtobJJcAKPZv8JTZv4x6VqOny3tghc1%2FWNHB8JTp0Ukg9Rtlxc9jMnrK5Kyf1dVsvP8QhLXY4asUC62FJVf%2BbBj32%2FS0c5VhcLMjUGSadkJQL0cwJdzpVr15n5Tu%2FOW1B5%2FX8tmnfstREMVSo9nczf6w4loaO4r%2BxvnjS%2F5nWff4GGCZNZMnQQ5%2BD8kCg6Y1Ua%2B0FRc146Wve3IrCABJYFOcFkTqMXI78Q7ubal%2FFAkitlgww0Jad%2FzciEl0KjIQqtZbcFqZgU1ciwyhyEAXDeA%2FuXToNfXvpg6536ujkzUwoz9wYRKMQGJvJY9hDieykNCRGmX%2FRKVLR3dyNvoUVB5se5X76dnsePeyeabroOJNvTjzh5MjmCF2B3r65azFafk4T%2FrFa9i04vXwT4ZTcOYYYfqj2BlMxca%2F5%2FgZjyau9%2FBl9sZGd%2Bekw7pDa1ZSmZyd0y8DUTnoR64YkYCDaI2LtlEoSfy%2FuLEivB1Ryn0OPSXkVFBkiKFVNvixIDyFva01in1NoCHCEykiv%2BnEtTkFZQTCkkLXBBjqkAZxyQP3gB%2Fo8PXYVTNUk7jqsLKp%2FPZligbPYC6Ru%2BbL3r8nOxljpShAKgnqtTN3KLfRdNa5VD4TL%2BBib%2FE1H%2F17f3eXytngBy7i4dD5lNOqP8WpLSjy0nTYCevpdfjVWY4sRhqAB1fs9yYrwRFcBzSt3fjey7hRoHhoU8lAbWqQgsiy7HoOxFsX%2BTMWlu%2FxwRBlpl9av%2BMfZG4AjyXY%2FcTt8N%2F1y&X-Amz-Signature=1f11f06dccefdec2b0cabf1cc665e6cdf8b9cd092b5e365add3ab3a0c0fbd81a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDDB7XUU%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOvenqxSgpMXoB2yBc2QSn4GI9Kk%2FBL1ONN2WZxyHQhwIhAI%2BOba3%2FoDEUoANZTHhAslbnhimUMe%2FGYlkBVxhIdQqvKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypYmWc%2FPM4YEaxzU0q3ANuRyTdXcG3qq%2FlB2bvmuPZYDwBWt6IVaBiM537XIBbI4QN%2B2sjuOK102L7FlgjnWWF6LGxc6M2wMfEkND4EZw8B%2BIDNgx1w3FrtobJJcAKPZv8JTZv4x6VqOny3tghc1%2FWNHB8JTp0Ukg9Rtlxc9jMnrK5Kyf1dVsvP8QhLXY4asUC62FJVf%2BbBj32%2FS0c5VhcLMjUGSadkJQL0cwJdzpVr15n5Tu%2FOW1B5%2FX8tmnfstREMVSo9nczf6w4loaO4r%2BxvnjS%2F5nWff4GGCZNZMnQQ5%2BD8kCg6Y1Ua%2B0FRc146Wve3IrCABJYFOcFkTqMXI78Q7ubal%2FFAkitlgww0Jad%2FzciEl0KjIQqtZbcFqZgU1ciwyhyEAXDeA%2FuXToNfXvpg6536ujkzUwoz9wYRKMQGJvJY9hDieykNCRGmX%2FRKVLR3dyNvoUVB5se5X76dnsePeyeabroOJNvTjzh5MjmCF2B3r65azFafk4T%2FrFa9i04vXwT4ZTcOYYYfqj2BlMxca%2F5%2FgZjyau9%2FBl9sZGd%2Bekw7pDa1ZSmZyd0y8DUTnoR64YkYCDaI2LtlEoSfy%2FuLEivB1Ryn0OPSXkVFBkiKFVNvixIDyFva01in1NoCHCEykiv%2BnEtTkFZQTCkkLXBBjqkAZxyQP3gB%2Fo8PXYVTNUk7jqsLKp%2FPZligbPYC6Ru%2BbL3r8nOxljpShAKgnqtTN3KLfRdNa5VD4TL%2BBib%2FE1H%2F17f3eXytngBy7i4dD5lNOqP8WpLSjy0nTYCevpdfjVWY4sRhqAB1fs9yYrwRFcBzSt3fjey7hRoHhoU8lAbWqQgsiy7HoOxFsX%2BTMWlu%2FxwRBlpl9av%2BMfZG4AjyXY%2FcTt8N%2F1y&X-Amz-Signature=d2d9306a46b0e0bfc1a886426656a2d4f52b827a0334449efe185d3b33b9b583&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDDB7XUU%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOvenqxSgpMXoB2yBc2QSn4GI9Kk%2FBL1ONN2WZxyHQhwIhAI%2BOba3%2FoDEUoANZTHhAslbnhimUMe%2FGYlkBVxhIdQqvKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypYmWc%2FPM4YEaxzU0q3ANuRyTdXcG3qq%2FlB2bvmuPZYDwBWt6IVaBiM537XIBbI4QN%2B2sjuOK102L7FlgjnWWF6LGxc6M2wMfEkND4EZw8B%2BIDNgx1w3FrtobJJcAKPZv8JTZv4x6VqOny3tghc1%2FWNHB8JTp0Ukg9Rtlxc9jMnrK5Kyf1dVsvP8QhLXY4asUC62FJVf%2BbBj32%2FS0c5VhcLMjUGSadkJQL0cwJdzpVr15n5Tu%2FOW1B5%2FX8tmnfstREMVSo9nczf6w4loaO4r%2BxvnjS%2F5nWff4GGCZNZMnQQ5%2BD8kCg6Y1Ua%2B0FRc146Wve3IrCABJYFOcFkTqMXI78Q7ubal%2FFAkitlgww0Jad%2FzciEl0KjIQqtZbcFqZgU1ciwyhyEAXDeA%2FuXToNfXvpg6536ujkzUwoz9wYRKMQGJvJY9hDieykNCRGmX%2FRKVLR3dyNvoUVB5se5X76dnsePeyeabroOJNvTjzh5MjmCF2B3r65azFafk4T%2FrFa9i04vXwT4ZTcOYYYfqj2BlMxca%2F5%2FgZjyau9%2FBl9sZGd%2Bekw7pDa1ZSmZyd0y8DUTnoR64YkYCDaI2LtlEoSfy%2FuLEivB1Ryn0OPSXkVFBkiKFVNvixIDyFva01in1NoCHCEykiv%2BnEtTkFZQTCkkLXBBjqkAZxyQP3gB%2Fo8PXYVTNUk7jqsLKp%2FPZligbPYC6Ru%2BbL3r8nOxljpShAKgnqtTN3KLfRdNa5VD4TL%2BBib%2FE1H%2F17f3eXytngBy7i4dD5lNOqP8WpLSjy0nTYCevpdfjVWY4sRhqAB1fs9yYrwRFcBzSt3fjey7hRoHhoU8lAbWqQgsiy7HoOxFsX%2BTMWlu%2FxwRBlpl9av%2BMfZG4AjyXY%2FcTt8N%2F1y&X-Amz-Signature=51617ed66d740caec002c9d7184b62643b208486f268f08e4de9b63aec5894c8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
