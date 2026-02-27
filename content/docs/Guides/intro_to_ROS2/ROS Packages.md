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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX6LPXBZ%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCdZaZu75k0TojdJd5iPo%2BIRx9SzJ1IjstbvtOEn8AY3wIgHrK9UftuaIjI3xvqJAbRx4%2BDwuNYGR7hXLHnrK8YNcMq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOj4IEJJKF%2FkhDTGXyrcA8wa23NDnKnWXsT6aLkt4rWX%2BEQlhQ4E6ew0Y16gCJBRrDsR33n5tpacKADVgVCvmCZa1j%2FK4HBaalpsoQHoaYaMGgFJkuHFZjT7JIdadBu0z50qIYMrzsy3gKqXYHNTF3SswwYlceCRE5r%2BA2Jw6Y75v%2FUV60vJTRcgjT%2B8FCaisfbxAbL1MVDwPhLoWD5X76JF5N4yrBP1G%2FQ9RN7WDJiIF%2B2MHceOPNN%2FmDOek8MMDbcnXvMy9e6Fb%2BZD7tnbrJSaCOzPKrSbesM6Sm1nLS2XeOqKH2NB0Qm%2BOJJU%2B9XrwFF%2FiNK4RH3SAfh8oVV7LXRdUFX0gAveo2EgCeXtJNpy7S4oFyCQZ5M1e5v%2BEK8QnJsoWLJkhZmrLG7YeSiHTiUdCbDOykCC2P3oQkIGFt72ulr%2B3qSqrjrZN%2FBIrVGxmYYxBYJBi0r%2BuFe%2F7%2BGhUPwON0sUQQBUIsPAi89Q%2FVGQbUoXiTRa%2BJDRe7Z6SFwQwIFic6C%2F70hbJXmhWZdZwAsZxQUUUBo4DyeBHotWck3fSycYwoy9su4XTSQGVEQ70lkcfqFns6L9TG0Mt10mTjg3zWWamxMLYbQppPxjrdOH%2Fbm4scKu7PwKvPjEGB9UjRNUbjgYnmM0VHrXMKrbg80GOqUBUvCPr2BsB7mzaS2UE9ycN6vZJIWPyC0%2Fn4PgOpZlgYa72CIGGNvoeL4Fbc7jG2ITf2sWYd8vN2IQ04kcMvdo7Lkx3B7RZPbMoeeIE%2BBSGvVNB85w%2BQy9wAWuVAmedY%2BIk7O%2Fn0RuPbbBJ2gkHTdCO4uWfz9yBUusTO28iVUatRggoyvk4npRHEZsyeMOlmVP7TfiLFJ4u7zJJYAFTzvL21ksN6P8&X-Amz-Signature=79addd4a592415a0f21efe51fdd268dd5b16ae4c3624c5ccaa98ec96574b4f65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX6LPXBZ%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCdZaZu75k0TojdJd5iPo%2BIRx9SzJ1IjstbvtOEn8AY3wIgHrK9UftuaIjI3xvqJAbRx4%2BDwuNYGR7hXLHnrK8YNcMq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOj4IEJJKF%2FkhDTGXyrcA8wa23NDnKnWXsT6aLkt4rWX%2BEQlhQ4E6ew0Y16gCJBRrDsR33n5tpacKADVgVCvmCZa1j%2FK4HBaalpsoQHoaYaMGgFJkuHFZjT7JIdadBu0z50qIYMrzsy3gKqXYHNTF3SswwYlceCRE5r%2BA2Jw6Y75v%2FUV60vJTRcgjT%2B8FCaisfbxAbL1MVDwPhLoWD5X76JF5N4yrBP1G%2FQ9RN7WDJiIF%2B2MHceOPNN%2FmDOek8MMDbcnXvMy9e6Fb%2BZD7tnbrJSaCOzPKrSbesM6Sm1nLS2XeOqKH2NB0Qm%2BOJJU%2B9XrwFF%2FiNK4RH3SAfh8oVV7LXRdUFX0gAveo2EgCeXtJNpy7S4oFyCQZ5M1e5v%2BEK8QnJsoWLJkhZmrLG7YeSiHTiUdCbDOykCC2P3oQkIGFt72ulr%2B3qSqrjrZN%2FBIrVGxmYYxBYJBi0r%2BuFe%2F7%2BGhUPwON0sUQQBUIsPAi89Q%2FVGQbUoXiTRa%2BJDRe7Z6SFwQwIFic6C%2F70hbJXmhWZdZwAsZxQUUUBo4DyeBHotWck3fSycYwoy9su4XTSQGVEQ70lkcfqFns6L9TG0Mt10mTjg3zWWamxMLYbQppPxjrdOH%2Fbm4scKu7PwKvPjEGB9UjRNUbjgYnmM0VHrXMKrbg80GOqUBUvCPr2BsB7mzaS2UE9ycN6vZJIWPyC0%2Fn4PgOpZlgYa72CIGGNvoeL4Fbc7jG2ITf2sWYd8vN2IQ04kcMvdo7Lkx3B7RZPbMoeeIE%2BBSGvVNB85w%2BQy9wAWuVAmedY%2BIk7O%2Fn0RuPbbBJ2gkHTdCO4uWfz9yBUusTO28iVUatRggoyvk4npRHEZsyeMOlmVP7TfiLFJ4u7zJJYAFTzvL21ksN6P8&X-Amz-Signature=8b8db44be216de0850e6d7bb8472b49f7581192fda3cdc8775d606fb1eef73b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX6LPXBZ%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCdZaZu75k0TojdJd5iPo%2BIRx9SzJ1IjstbvtOEn8AY3wIgHrK9UftuaIjI3xvqJAbRx4%2BDwuNYGR7hXLHnrK8YNcMq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOj4IEJJKF%2FkhDTGXyrcA8wa23NDnKnWXsT6aLkt4rWX%2BEQlhQ4E6ew0Y16gCJBRrDsR33n5tpacKADVgVCvmCZa1j%2FK4HBaalpsoQHoaYaMGgFJkuHFZjT7JIdadBu0z50qIYMrzsy3gKqXYHNTF3SswwYlceCRE5r%2BA2Jw6Y75v%2FUV60vJTRcgjT%2B8FCaisfbxAbL1MVDwPhLoWD5X76JF5N4yrBP1G%2FQ9RN7WDJiIF%2B2MHceOPNN%2FmDOek8MMDbcnXvMy9e6Fb%2BZD7tnbrJSaCOzPKrSbesM6Sm1nLS2XeOqKH2NB0Qm%2BOJJU%2B9XrwFF%2FiNK4RH3SAfh8oVV7LXRdUFX0gAveo2EgCeXtJNpy7S4oFyCQZ5M1e5v%2BEK8QnJsoWLJkhZmrLG7YeSiHTiUdCbDOykCC2P3oQkIGFt72ulr%2B3qSqrjrZN%2FBIrVGxmYYxBYJBi0r%2BuFe%2F7%2BGhUPwON0sUQQBUIsPAi89Q%2FVGQbUoXiTRa%2BJDRe7Z6SFwQwIFic6C%2F70hbJXmhWZdZwAsZxQUUUBo4DyeBHotWck3fSycYwoy9su4XTSQGVEQ70lkcfqFns6L9TG0Mt10mTjg3zWWamxMLYbQppPxjrdOH%2Fbm4scKu7PwKvPjEGB9UjRNUbjgYnmM0VHrXMKrbg80GOqUBUvCPr2BsB7mzaS2UE9ycN6vZJIWPyC0%2Fn4PgOpZlgYa72CIGGNvoeL4Fbc7jG2ITf2sWYd8vN2IQ04kcMvdo7Lkx3B7RZPbMoeeIE%2BBSGvVNB85w%2BQy9wAWuVAmedY%2BIk7O%2Fn0RuPbbBJ2gkHTdCO4uWfz9yBUusTO28iVUatRggoyvk4npRHEZsyeMOlmVP7TfiLFJ4u7zJJYAFTzvL21ksN6P8&X-Amz-Signature=5269a87323c0a0d61eefc306a94a2b13a146fc1599791fb9eef3c610d91fa1b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX6LPXBZ%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCdZaZu75k0TojdJd5iPo%2BIRx9SzJ1IjstbvtOEn8AY3wIgHrK9UftuaIjI3xvqJAbRx4%2BDwuNYGR7hXLHnrK8YNcMq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOj4IEJJKF%2FkhDTGXyrcA8wa23NDnKnWXsT6aLkt4rWX%2BEQlhQ4E6ew0Y16gCJBRrDsR33n5tpacKADVgVCvmCZa1j%2FK4HBaalpsoQHoaYaMGgFJkuHFZjT7JIdadBu0z50qIYMrzsy3gKqXYHNTF3SswwYlceCRE5r%2BA2Jw6Y75v%2FUV60vJTRcgjT%2B8FCaisfbxAbL1MVDwPhLoWD5X76JF5N4yrBP1G%2FQ9RN7WDJiIF%2B2MHceOPNN%2FmDOek8MMDbcnXvMy9e6Fb%2BZD7tnbrJSaCOzPKrSbesM6Sm1nLS2XeOqKH2NB0Qm%2BOJJU%2B9XrwFF%2FiNK4RH3SAfh8oVV7LXRdUFX0gAveo2EgCeXtJNpy7S4oFyCQZ5M1e5v%2BEK8QnJsoWLJkhZmrLG7YeSiHTiUdCbDOykCC2P3oQkIGFt72ulr%2B3qSqrjrZN%2FBIrVGxmYYxBYJBi0r%2BuFe%2F7%2BGhUPwON0sUQQBUIsPAi89Q%2FVGQbUoXiTRa%2BJDRe7Z6SFwQwIFic6C%2F70hbJXmhWZdZwAsZxQUUUBo4DyeBHotWck3fSycYwoy9su4XTSQGVEQ70lkcfqFns6L9TG0Mt10mTjg3zWWamxMLYbQppPxjrdOH%2Fbm4scKu7PwKvPjEGB9UjRNUbjgYnmM0VHrXMKrbg80GOqUBUvCPr2BsB7mzaS2UE9ycN6vZJIWPyC0%2Fn4PgOpZlgYa72CIGGNvoeL4Fbc7jG2ITf2sWYd8vN2IQ04kcMvdo7Lkx3B7RZPbMoeeIE%2BBSGvVNB85w%2BQy9wAWuVAmedY%2BIk7O%2Fn0RuPbbBJ2gkHTdCO4uWfz9yBUusTO28iVUatRggoyvk4npRHEZsyeMOlmVP7TfiLFJ4u7zJJYAFTzvL21ksN6P8&X-Amz-Signature=21099e32a55eb5ea4d67dd875dfb26c6106dd355f0308148c12dbce1f8dc79ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX6LPXBZ%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCdZaZu75k0TojdJd5iPo%2BIRx9SzJ1IjstbvtOEn8AY3wIgHrK9UftuaIjI3xvqJAbRx4%2BDwuNYGR7hXLHnrK8YNcMq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOj4IEJJKF%2FkhDTGXyrcA8wa23NDnKnWXsT6aLkt4rWX%2BEQlhQ4E6ew0Y16gCJBRrDsR33n5tpacKADVgVCvmCZa1j%2FK4HBaalpsoQHoaYaMGgFJkuHFZjT7JIdadBu0z50qIYMrzsy3gKqXYHNTF3SswwYlceCRE5r%2BA2Jw6Y75v%2FUV60vJTRcgjT%2B8FCaisfbxAbL1MVDwPhLoWD5X76JF5N4yrBP1G%2FQ9RN7WDJiIF%2B2MHceOPNN%2FmDOek8MMDbcnXvMy9e6Fb%2BZD7tnbrJSaCOzPKrSbesM6Sm1nLS2XeOqKH2NB0Qm%2BOJJU%2B9XrwFF%2FiNK4RH3SAfh8oVV7LXRdUFX0gAveo2EgCeXtJNpy7S4oFyCQZ5M1e5v%2BEK8QnJsoWLJkhZmrLG7YeSiHTiUdCbDOykCC2P3oQkIGFt72ulr%2B3qSqrjrZN%2FBIrVGxmYYxBYJBi0r%2BuFe%2F7%2BGhUPwON0sUQQBUIsPAi89Q%2FVGQbUoXiTRa%2BJDRe7Z6SFwQwIFic6C%2F70hbJXmhWZdZwAsZxQUUUBo4DyeBHotWck3fSycYwoy9su4XTSQGVEQ70lkcfqFns6L9TG0Mt10mTjg3zWWamxMLYbQppPxjrdOH%2Fbm4scKu7PwKvPjEGB9UjRNUbjgYnmM0VHrXMKrbg80GOqUBUvCPr2BsB7mzaS2UE9ycN6vZJIWPyC0%2Fn4PgOpZlgYa72CIGGNvoeL4Fbc7jG2ITf2sWYd8vN2IQ04kcMvdo7Lkx3B7RZPbMoeeIE%2BBSGvVNB85w%2BQy9wAWuVAmedY%2BIk7O%2Fn0RuPbbBJ2gkHTdCO4uWfz9yBUusTO28iVUatRggoyvk4npRHEZsyeMOlmVP7TfiLFJ4u7zJJYAFTzvL21ksN6P8&X-Amz-Signature=e66cf18a05a5d3299ca16b385e89c86e2ba8f1328a075560b52e23059d42041a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX6LPXBZ%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCdZaZu75k0TojdJd5iPo%2BIRx9SzJ1IjstbvtOEn8AY3wIgHrK9UftuaIjI3xvqJAbRx4%2BDwuNYGR7hXLHnrK8YNcMq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOj4IEJJKF%2FkhDTGXyrcA8wa23NDnKnWXsT6aLkt4rWX%2BEQlhQ4E6ew0Y16gCJBRrDsR33n5tpacKADVgVCvmCZa1j%2FK4HBaalpsoQHoaYaMGgFJkuHFZjT7JIdadBu0z50qIYMrzsy3gKqXYHNTF3SswwYlceCRE5r%2BA2Jw6Y75v%2FUV60vJTRcgjT%2B8FCaisfbxAbL1MVDwPhLoWD5X76JF5N4yrBP1G%2FQ9RN7WDJiIF%2B2MHceOPNN%2FmDOek8MMDbcnXvMy9e6Fb%2BZD7tnbrJSaCOzPKrSbesM6Sm1nLS2XeOqKH2NB0Qm%2BOJJU%2B9XrwFF%2FiNK4RH3SAfh8oVV7LXRdUFX0gAveo2EgCeXtJNpy7S4oFyCQZ5M1e5v%2BEK8QnJsoWLJkhZmrLG7YeSiHTiUdCbDOykCC2P3oQkIGFt72ulr%2B3qSqrjrZN%2FBIrVGxmYYxBYJBi0r%2BuFe%2F7%2BGhUPwON0sUQQBUIsPAi89Q%2FVGQbUoXiTRa%2BJDRe7Z6SFwQwIFic6C%2F70hbJXmhWZdZwAsZxQUUUBo4DyeBHotWck3fSycYwoy9su4XTSQGVEQ70lkcfqFns6L9TG0Mt10mTjg3zWWamxMLYbQppPxjrdOH%2Fbm4scKu7PwKvPjEGB9UjRNUbjgYnmM0VHrXMKrbg80GOqUBUvCPr2BsB7mzaS2UE9ycN6vZJIWPyC0%2Fn4PgOpZlgYa72CIGGNvoeL4Fbc7jG2ITf2sWYd8vN2IQ04kcMvdo7Lkx3B7RZPbMoeeIE%2BBSGvVNB85w%2BQy9wAWuVAmedY%2BIk7O%2Fn0RuPbbBJ2gkHTdCO4uWfz9yBUusTO28iVUatRggoyvk4npRHEZsyeMOlmVP7TfiLFJ4u7zJJYAFTzvL21ksN6P8&X-Amz-Signature=c98a8fb9886e7eebe9e391796ed1aa9e8abb537e2ca8a7cbe51b5b8aa36c8f82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX6LPXBZ%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCdZaZu75k0TojdJd5iPo%2BIRx9SzJ1IjstbvtOEn8AY3wIgHrK9UftuaIjI3xvqJAbRx4%2BDwuNYGR7hXLHnrK8YNcMq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOj4IEJJKF%2FkhDTGXyrcA8wa23NDnKnWXsT6aLkt4rWX%2BEQlhQ4E6ew0Y16gCJBRrDsR33n5tpacKADVgVCvmCZa1j%2FK4HBaalpsoQHoaYaMGgFJkuHFZjT7JIdadBu0z50qIYMrzsy3gKqXYHNTF3SswwYlceCRE5r%2BA2Jw6Y75v%2FUV60vJTRcgjT%2B8FCaisfbxAbL1MVDwPhLoWD5X76JF5N4yrBP1G%2FQ9RN7WDJiIF%2B2MHceOPNN%2FmDOek8MMDbcnXvMy9e6Fb%2BZD7tnbrJSaCOzPKrSbesM6Sm1nLS2XeOqKH2NB0Qm%2BOJJU%2B9XrwFF%2FiNK4RH3SAfh8oVV7LXRdUFX0gAveo2EgCeXtJNpy7S4oFyCQZ5M1e5v%2BEK8QnJsoWLJkhZmrLG7YeSiHTiUdCbDOykCC2P3oQkIGFt72ulr%2B3qSqrjrZN%2FBIrVGxmYYxBYJBi0r%2BuFe%2F7%2BGhUPwON0sUQQBUIsPAi89Q%2FVGQbUoXiTRa%2BJDRe7Z6SFwQwIFic6C%2F70hbJXmhWZdZwAsZxQUUUBo4DyeBHotWck3fSycYwoy9su4XTSQGVEQ70lkcfqFns6L9TG0Mt10mTjg3zWWamxMLYbQppPxjrdOH%2Fbm4scKu7PwKvPjEGB9UjRNUbjgYnmM0VHrXMKrbg80GOqUBUvCPr2BsB7mzaS2UE9ycN6vZJIWPyC0%2Fn4PgOpZlgYa72CIGGNvoeL4Fbc7jG2ITf2sWYd8vN2IQ04kcMvdo7Lkx3B7RZPbMoeeIE%2BBSGvVNB85w%2BQy9wAWuVAmedY%2BIk7O%2Fn0RuPbbBJ2gkHTdCO4uWfz9yBUusTO28iVUatRggoyvk4npRHEZsyeMOlmVP7TfiLFJ4u7zJJYAFTzvL21ksN6P8&X-Amz-Signature=8de3cc9b8ac98130d64a8ada685f850cbf7d9e5a047891d7a448674e49b4a68e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
