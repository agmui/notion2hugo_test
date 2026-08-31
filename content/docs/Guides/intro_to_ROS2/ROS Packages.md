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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ELVLGPP%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDupB66xQGmoQZ48etfnFNbvrn7opRChXQJFUe8g99AWAIhAMmcjaz1zJC4wKPa%2F%2FXjPcj60eBk6ImSgEbssXLMD4KUKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7y2nAkC9CeD2sHUgq3ANOEGRv0CVKNtCa8do2%2BiUcUaWnnkfT5OveHQ5Behrd1yoCcqNp3%2BNCsX%2BJkS2ZLgryMZcEByZ9mJoJZrtXBl2Ewe%2BMDmXmH5656PVpG%2FzeFWt85FXX%2Fy6GsU7brnt2M%2FCuK7Ab9aWewKGXp3IMY81EdKJaua5SHN51ykyyYNBzqYZDIVhT1G3zI3%2F2oRJ%2B481%2B%2FHh%2FzC7V0v5Omb5NjrOiTDpHPaREM5QIZK0uM5Tom97h8Iv1P53iaoCX6v%2Bv17jrh7lcSWwfHgx0eEuiZOmBVx2e3aGJOEAlzgjduQ5Q5bA2ePbgznEFNExeu%2FffN0k5DB3ZH6oSdDvsjK%2FUvQHZPQ17dJa90f0DvorbAMHRRXXhHIvyVxB1%2FSww3OhKqb0kZhjWx9lP%2Bu%2BunuS9nfIXQyot4BTafLyDWr6o7K%2BNhJI6OwWmBH4Sym9txlOIqOPFfP4kul3MVwyg54ojLq9l3qBLmeoT3jkKzpnClm%2FX4r0uQrNX222JPU30fW%2FVlG%2B3wv3SK54VViQcq7cTWBBilM2%2FpZwZ%2BEq%2BMl6vg42xTUSIY2PpQ3QNTIo%2FwHnm7dlU%2FlvdE%2Fnb%2Fpz7LwNFht7o%2FUBRXINBJkc6cSmSbE5ewtkAh6r7mekAOdAtmDCo3tPUBjqkAY8giFYAjgXREf2A9iUJPd3Ic6bMi%2FqLmSk481Tm7isrlG5HYMl3caWCeVO7Yfzd0ODnPvBToqDe3m%2BEgvkuBE%2BIHDmzKwX6j0rSfedmpBROPEPA8vZAjYsoAnNhLkZYdI6EwSX3StM2TjB%2FjxPxwJQnKptACk5GGA10FTDzTaKnlY%2BwghtA6AOO9zv4EtSIPWtPFGt%2BEOeJWfcdw%2BE1%2BN8F34Gu&X-Amz-Signature=e14d87b899df68fd7255c5fcd0e7443c723eb49fe8507a9d12abf27e8149fb7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ELVLGPP%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDupB66xQGmoQZ48etfnFNbvrn7opRChXQJFUe8g99AWAIhAMmcjaz1zJC4wKPa%2F%2FXjPcj60eBk6ImSgEbssXLMD4KUKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7y2nAkC9CeD2sHUgq3ANOEGRv0CVKNtCa8do2%2BiUcUaWnnkfT5OveHQ5Behrd1yoCcqNp3%2BNCsX%2BJkS2ZLgryMZcEByZ9mJoJZrtXBl2Ewe%2BMDmXmH5656PVpG%2FzeFWt85FXX%2Fy6GsU7brnt2M%2FCuK7Ab9aWewKGXp3IMY81EdKJaua5SHN51ykyyYNBzqYZDIVhT1G3zI3%2F2oRJ%2B481%2B%2FHh%2FzC7V0v5Omb5NjrOiTDpHPaREM5QIZK0uM5Tom97h8Iv1P53iaoCX6v%2Bv17jrh7lcSWwfHgx0eEuiZOmBVx2e3aGJOEAlzgjduQ5Q5bA2ePbgznEFNExeu%2FffN0k5DB3ZH6oSdDvsjK%2FUvQHZPQ17dJa90f0DvorbAMHRRXXhHIvyVxB1%2FSww3OhKqb0kZhjWx9lP%2Bu%2BunuS9nfIXQyot4BTafLyDWr6o7K%2BNhJI6OwWmBH4Sym9txlOIqOPFfP4kul3MVwyg54ojLq9l3qBLmeoT3jkKzpnClm%2FX4r0uQrNX222JPU30fW%2FVlG%2B3wv3SK54VViQcq7cTWBBilM2%2FpZwZ%2BEq%2BMl6vg42xTUSIY2PpQ3QNTIo%2FwHnm7dlU%2FlvdE%2Fnb%2Fpz7LwNFht7o%2FUBRXINBJkc6cSmSbE5ewtkAh6r7mekAOdAtmDCo3tPUBjqkAY8giFYAjgXREf2A9iUJPd3Ic6bMi%2FqLmSk481Tm7isrlG5HYMl3caWCeVO7Yfzd0ODnPvBToqDe3m%2BEgvkuBE%2BIHDmzKwX6j0rSfedmpBROPEPA8vZAjYsoAnNhLkZYdI6EwSX3StM2TjB%2FjxPxwJQnKptACk5GGA10FTDzTaKnlY%2BwghtA6AOO9zv4EtSIPWtPFGt%2BEOeJWfcdw%2BE1%2BN8F34Gu&X-Amz-Signature=561f3f5a73acf214e259c186f49e4abcd45cf6cab411b4759fae912df436c2a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ELVLGPP%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDupB66xQGmoQZ48etfnFNbvrn7opRChXQJFUe8g99AWAIhAMmcjaz1zJC4wKPa%2F%2FXjPcj60eBk6ImSgEbssXLMD4KUKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7y2nAkC9CeD2sHUgq3ANOEGRv0CVKNtCa8do2%2BiUcUaWnnkfT5OveHQ5Behrd1yoCcqNp3%2BNCsX%2BJkS2ZLgryMZcEByZ9mJoJZrtXBl2Ewe%2BMDmXmH5656PVpG%2FzeFWt85FXX%2Fy6GsU7brnt2M%2FCuK7Ab9aWewKGXp3IMY81EdKJaua5SHN51ykyyYNBzqYZDIVhT1G3zI3%2F2oRJ%2B481%2B%2FHh%2FzC7V0v5Omb5NjrOiTDpHPaREM5QIZK0uM5Tom97h8Iv1P53iaoCX6v%2Bv17jrh7lcSWwfHgx0eEuiZOmBVx2e3aGJOEAlzgjduQ5Q5bA2ePbgznEFNExeu%2FffN0k5DB3ZH6oSdDvsjK%2FUvQHZPQ17dJa90f0DvorbAMHRRXXhHIvyVxB1%2FSww3OhKqb0kZhjWx9lP%2Bu%2BunuS9nfIXQyot4BTafLyDWr6o7K%2BNhJI6OwWmBH4Sym9txlOIqOPFfP4kul3MVwyg54ojLq9l3qBLmeoT3jkKzpnClm%2FX4r0uQrNX222JPU30fW%2FVlG%2B3wv3SK54VViQcq7cTWBBilM2%2FpZwZ%2BEq%2BMl6vg42xTUSIY2PpQ3QNTIo%2FwHnm7dlU%2FlvdE%2Fnb%2Fpz7LwNFht7o%2FUBRXINBJkc6cSmSbE5ewtkAh6r7mekAOdAtmDCo3tPUBjqkAY8giFYAjgXREf2A9iUJPd3Ic6bMi%2FqLmSk481Tm7isrlG5HYMl3caWCeVO7Yfzd0ODnPvBToqDe3m%2BEgvkuBE%2BIHDmzKwX6j0rSfedmpBROPEPA8vZAjYsoAnNhLkZYdI6EwSX3StM2TjB%2FjxPxwJQnKptACk5GGA10FTDzTaKnlY%2BwghtA6AOO9zv4EtSIPWtPFGt%2BEOeJWfcdw%2BE1%2BN8F34Gu&X-Amz-Signature=36cfb93457d4dcc73836443bfb367c13012bf7c7b3f72694a05b7850e4949638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ELVLGPP%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDupB66xQGmoQZ48etfnFNbvrn7opRChXQJFUe8g99AWAIhAMmcjaz1zJC4wKPa%2F%2FXjPcj60eBk6ImSgEbssXLMD4KUKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7y2nAkC9CeD2sHUgq3ANOEGRv0CVKNtCa8do2%2BiUcUaWnnkfT5OveHQ5Behrd1yoCcqNp3%2BNCsX%2BJkS2ZLgryMZcEByZ9mJoJZrtXBl2Ewe%2BMDmXmH5656PVpG%2FzeFWt85FXX%2Fy6GsU7brnt2M%2FCuK7Ab9aWewKGXp3IMY81EdKJaua5SHN51ykyyYNBzqYZDIVhT1G3zI3%2F2oRJ%2B481%2B%2FHh%2FzC7V0v5Omb5NjrOiTDpHPaREM5QIZK0uM5Tom97h8Iv1P53iaoCX6v%2Bv17jrh7lcSWwfHgx0eEuiZOmBVx2e3aGJOEAlzgjduQ5Q5bA2ePbgznEFNExeu%2FffN0k5DB3ZH6oSdDvsjK%2FUvQHZPQ17dJa90f0DvorbAMHRRXXhHIvyVxB1%2FSww3OhKqb0kZhjWx9lP%2Bu%2BunuS9nfIXQyot4BTafLyDWr6o7K%2BNhJI6OwWmBH4Sym9txlOIqOPFfP4kul3MVwyg54ojLq9l3qBLmeoT3jkKzpnClm%2FX4r0uQrNX222JPU30fW%2FVlG%2B3wv3SK54VViQcq7cTWBBilM2%2FpZwZ%2BEq%2BMl6vg42xTUSIY2PpQ3QNTIo%2FwHnm7dlU%2FlvdE%2Fnb%2Fpz7LwNFht7o%2FUBRXINBJkc6cSmSbE5ewtkAh6r7mekAOdAtmDCo3tPUBjqkAY8giFYAjgXREf2A9iUJPd3Ic6bMi%2FqLmSk481Tm7isrlG5HYMl3caWCeVO7Yfzd0ODnPvBToqDe3m%2BEgvkuBE%2BIHDmzKwX6j0rSfedmpBROPEPA8vZAjYsoAnNhLkZYdI6EwSX3StM2TjB%2FjxPxwJQnKptACk5GGA10FTDzTaKnlY%2BwghtA6AOO9zv4EtSIPWtPFGt%2BEOeJWfcdw%2BE1%2BN8F34Gu&X-Amz-Signature=51319efb4e074e0b0de9257c315efb6e6102273bee82c0128eeda2bec95fece5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ELVLGPP%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDupB66xQGmoQZ48etfnFNbvrn7opRChXQJFUe8g99AWAIhAMmcjaz1zJC4wKPa%2F%2FXjPcj60eBk6ImSgEbssXLMD4KUKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7y2nAkC9CeD2sHUgq3ANOEGRv0CVKNtCa8do2%2BiUcUaWnnkfT5OveHQ5Behrd1yoCcqNp3%2BNCsX%2BJkS2ZLgryMZcEByZ9mJoJZrtXBl2Ewe%2BMDmXmH5656PVpG%2FzeFWt85FXX%2Fy6GsU7brnt2M%2FCuK7Ab9aWewKGXp3IMY81EdKJaua5SHN51ykyyYNBzqYZDIVhT1G3zI3%2F2oRJ%2B481%2B%2FHh%2FzC7V0v5Omb5NjrOiTDpHPaREM5QIZK0uM5Tom97h8Iv1P53iaoCX6v%2Bv17jrh7lcSWwfHgx0eEuiZOmBVx2e3aGJOEAlzgjduQ5Q5bA2ePbgznEFNExeu%2FffN0k5DB3ZH6oSdDvsjK%2FUvQHZPQ17dJa90f0DvorbAMHRRXXhHIvyVxB1%2FSww3OhKqb0kZhjWx9lP%2Bu%2BunuS9nfIXQyot4BTafLyDWr6o7K%2BNhJI6OwWmBH4Sym9txlOIqOPFfP4kul3MVwyg54ojLq9l3qBLmeoT3jkKzpnClm%2FX4r0uQrNX222JPU30fW%2FVlG%2B3wv3SK54VViQcq7cTWBBilM2%2FpZwZ%2BEq%2BMl6vg42xTUSIY2PpQ3QNTIo%2FwHnm7dlU%2FlvdE%2Fnb%2Fpz7LwNFht7o%2FUBRXINBJkc6cSmSbE5ewtkAh6r7mekAOdAtmDCo3tPUBjqkAY8giFYAjgXREf2A9iUJPd3Ic6bMi%2FqLmSk481Tm7isrlG5HYMl3caWCeVO7Yfzd0ODnPvBToqDe3m%2BEgvkuBE%2BIHDmzKwX6j0rSfedmpBROPEPA8vZAjYsoAnNhLkZYdI6EwSX3StM2TjB%2FjxPxwJQnKptACk5GGA10FTDzTaKnlY%2BwghtA6AOO9zv4EtSIPWtPFGt%2BEOeJWfcdw%2BE1%2BN8F34Gu&X-Amz-Signature=832b17726b37eb62647a98a2fb8e8df0b30831d630d2258dc31c899e3fdb5838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ELVLGPP%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDupB66xQGmoQZ48etfnFNbvrn7opRChXQJFUe8g99AWAIhAMmcjaz1zJC4wKPa%2F%2FXjPcj60eBk6ImSgEbssXLMD4KUKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7y2nAkC9CeD2sHUgq3ANOEGRv0CVKNtCa8do2%2BiUcUaWnnkfT5OveHQ5Behrd1yoCcqNp3%2BNCsX%2BJkS2ZLgryMZcEByZ9mJoJZrtXBl2Ewe%2BMDmXmH5656PVpG%2FzeFWt85FXX%2Fy6GsU7brnt2M%2FCuK7Ab9aWewKGXp3IMY81EdKJaua5SHN51ykyyYNBzqYZDIVhT1G3zI3%2F2oRJ%2B481%2B%2FHh%2FzC7V0v5Omb5NjrOiTDpHPaREM5QIZK0uM5Tom97h8Iv1P53iaoCX6v%2Bv17jrh7lcSWwfHgx0eEuiZOmBVx2e3aGJOEAlzgjduQ5Q5bA2ePbgznEFNExeu%2FffN0k5DB3ZH6oSdDvsjK%2FUvQHZPQ17dJa90f0DvorbAMHRRXXhHIvyVxB1%2FSww3OhKqb0kZhjWx9lP%2Bu%2BunuS9nfIXQyot4BTafLyDWr6o7K%2BNhJI6OwWmBH4Sym9txlOIqOPFfP4kul3MVwyg54ojLq9l3qBLmeoT3jkKzpnClm%2FX4r0uQrNX222JPU30fW%2FVlG%2B3wv3SK54VViQcq7cTWBBilM2%2FpZwZ%2BEq%2BMl6vg42xTUSIY2PpQ3QNTIo%2FwHnm7dlU%2FlvdE%2Fnb%2Fpz7LwNFht7o%2FUBRXINBJkc6cSmSbE5ewtkAh6r7mekAOdAtmDCo3tPUBjqkAY8giFYAjgXREf2A9iUJPd3Ic6bMi%2FqLmSk481Tm7isrlG5HYMl3caWCeVO7Yfzd0ODnPvBToqDe3m%2BEgvkuBE%2BIHDmzKwX6j0rSfedmpBROPEPA8vZAjYsoAnNhLkZYdI6EwSX3StM2TjB%2FjxPxwJQnKptACk5GGA10FTDzTaKnlY%2BwghtA6AOO9zv4EtSIPWtPFGt%2BEOeJWfcdw%2BE1%2BN8F34Gu&X-Amz-Signature=acce50c2ffebb144f5d2eaa3890cb346d49eb07ae1e6fd2a5427ef8658519f80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ELVLGPP%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDupB66xQGmoQZ48etfnFNbvrn7opRChXQJFUe8g99AWAIhAMmcjaz1zJC4wKPa%2F%2FXjPcj60eBk6ImSgEbssXLMD4KUKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7y2nAkC9CeD2sHUgq3ANOEGRv0CVKNtCa8do2%2BiUcUaWnnkfT5OveHQ5Behrd1yoCcqNp3%2BNCsX%2BJkS2ZLgryMZcEByZ9mJoJZrtXBl2Ewe%2BMDmXmH5656PVpG%2FzeFWt85FXX%2Fy6GsU7brnt2M%2FCuK7Ab9aWewKGXp3IMY81EdKJaua5SHN51ykyyYNBzqYZDIVhT1G3zI3%2F2oRJ%2B481%2B%2FHh%2FzC7V0v5Omb5NjrOiTDpHPaREM5QIZK0uM5Tom97h8Iv1P53iaoCX6v%2Bv17jrh7lcSWwfHgx0eEuiZOmBVx2e3aGJOEAlzgjduQ5Q5bA2ePbgznEFNExeu%2FffN0k5DB3ZH6oSdDvsjK%2FUvQHZPQ17dJa90f0DvorbAMHRRXXhHIvyVxB1%2FSww3OhKqb0kZhjWx9lP%2Bu%2BunuS9nfIXQyot4BTafLyDWr6o7K%2BNhJI6OwWmBH4Sym9txlOIqOPFfP4kul3MVwyg54ojLq9l3qBLmeoT3jkKzpnClm%2FX4r0uQrNX222JPU30fW%2FVlG%2B3wv3SK54VViQcq7cTWBBilM2%2FpZwZ%2BEq%2BMl6vg42xTUSIY2PpQ3QNTIo%2FwHnm7dlU%2FlvdE%2Fnb%2Fpz7LwNFht7o%2FUBRXINBJkc6cSmSbE5ewtkAh6r7mekAOdAtmDCo3tPUBjqkAY8giFYAjgXREf2A9iUJPd3Ic6bMi%2FqLmSk481Tm7isrlG5HYMl3caWCeVO7Yfzd0ODnPvBToqDe3m%2BEgvkuBE%2BIHDmzKwX6j0rSfedmpBROPEPA8vZAjYsoAnNhLkZYdI6EwSX3StM2TjB%2FjxPxwJQnKptACk5GGA10FTDzTaKnlY%2BwghtA6AOO9zv4EtSIPWtPFGt%2BEOeJWfcdw%2BE1%2BN8F34Gu&X-Amz-Signature=b1b80a801eb9e342fab1449cb2d189c72ba0f9ce30afdee0871ea304be5d927e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
