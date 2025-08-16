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
      <summary>What are ROS Packages?</summary>
      ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR7X3FDC%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIB4KRP09Y6dsf%2FrtcuMfnGSBeADp9GbUuRz3nwd%2FHNvyAiEAtrSaoAGPJ%2BvqoQQ1lFIjmPID7i0suw%2B02k9ozNJttg8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIsETflq%2BLCS%2BrMlMircA6rCYvv1ob8aK9i%2FqYghHMm7TjZ7t4QZ5Hf9%2BG27XOZITwJ5VYhk4Ix46UPbv642dDwbay9oBiH74SRKiJzlMpl7ugHUliOU6Dw6umBOEygXQxoHMTD1em3BV01UGPGua1YjiiTyQtp6PWBs%2F4jTxhyLShxJCH7%2BQLzbt8hb7j1X9SqbZUhOEZDpo5J5PLaLu2QvJOovx85umMwg7pkvn2AaDEOyXf2sHSWFWAMXii3ChINKA8%2BGRGVF2ZBDQdekV9i7SWBdnF3UvFNc2jhr331gVXy3JFKhIAU02CzMCcVxYb%2FDqLgy4X7XnDBJxH4pMoKmbQTNIgldHwsULB3voYY3ve2m9K%2FmgCYlKksAihLaf0gDOm34eltYpTx0LGSZotvLtadWux2FVTQa6DDBZrIthwzEP45PQDeE%2FdEHBSwCoBGhXFR27xlxCmAjoBcKnXOA0PgeAMmMipRxXiVDh9%2FP83NncA%2BQO%2FwnSGjTdvwiHptB9hv1onvzBSHGiM%2FZkt4KxJ6rbgfKSrYqTudktUFoz7LAS5SCmTCZmgykjLFPYGHFs0H3fBWtcfjMNaoFVx7Kadws9JrqBlgjavnTRmBYflkNBhmUWw6FA%2B56pjKLoPOiauBDum%2Bo0%2F4tMJr4gMUGOqUBUjzO3PNg6RHSbhYyo7osdOLh6UAY04I1GUbcZfxvU2bY0qLkKo8Es3JYjyd4WYE6QQ2JGW2WY%2BOOi7MIGlxQeF4wJF%2FYhtQIko4YLHyPFSeWY7WkWVsRoYIIFXar72JW9ZBPO4upXEhYJBRp6rwr%2B2NG9JtyRGGpGY3fwYwcK%2FmM3tYjoyKOS%2BxHskhBrCs6ZK%2F6uaAbjmXgGmPc%2BLpN3DwGAHeZ&X-Amz-Signature=a1cc9862a23e744c71ebe44bc4c0970fd5e08bbac11a6e185748ad9ad2cc8935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR7X3FDC%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIB4KRP09Y6dsf%2FrtcuMfnGSBeADp9GbUuRz3nwd%2FHNvyAiEAtrSaoAGPJ%2BvqoQQ1lFIjmPID7i0suw%2B02k9ozNJttg8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIsETflq%2BLCS%2BrMlMircA6rCYvv1ob8aK9i%2FqYghHMm7TjZ7t4QZ5Hf9%2BG27XOZITwJ5VYhk4Ix46UPbv642dDwbay9oBiH74SRKiJzlMpl7ugHUliOU6Dw6umBOEygXQxoHMTD1em3BV01UGPGua1YjiiTyQtp6PWBs%2F4jTxhyLShxJCH7%2BQLzbt8hb7j1X9SqbZUhOEZDpo5J5PLaLu2QvJOovx85umMwg7pkvn2AaDEOyXf2sHSWFWAMXii3ChINKA8%2BGRGVF2ZBDQdekV9i7SWBdnF3UvFNc2jhr331gVXy3JFKhIAU02CzMCcVxYb%2FDqLgy4X7XnDBJxH4pMoKmbQTNIgldHwsULB3voYY3ve2m9K%2FmgCYlKksAihLaf0gDOm34eltYpTx0LGSZotvLtadWux2FVTQa6DDBZrIthwzEP45PQDeE%2FdEHBSwCoBGhXFR27xlxCmAjoBcKnXOA0PgeAMmMipRxXiVDh9%2FP83NncA%2BQO%2FwnSGjTdvwiHptB9hv1onvzBSHGiM%2FZkt4KxJ6rbgfKSrYqTudktUFoz7LAS5SCmTCZmgykjLFPYGHFs0H3fBWtcfjMNaoFVx7Kadws9JrqBlgjavnTRmBYflkNBhmUWw6FA%2B56pjKLoPOiauBDum%2Bo0%2F4tMJr4gMUGOqUBUjzO3PNg6RHSbhYyo7osdOLh6UAY04I1GUbcZfxvU2bY0qLkKo8Es3JYjyd4WYE6QQ2JGW2WY%2BOOi7MIGlxQeF4wJF%2FYhtQIko4YLHyPFSeWY7WkWVsRoYIIFXar72JW9ZBPO4upXEhYJBRp6rwr%2B2NG9JtyRGGpGY3fwYwcK%2FmM3tYjoyKOS%2BxHskhBrCs6ZK%2F6uaAbjmXgGmPc%2BLpN3DwGAHeZ&X-Amz-Signature=5d5a7dbfb07f6a489c4a403c4bab007b32ef9932d0c505e3ca373877ca69c789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR7X3FDC%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIB4KRP09Y6dsf%2FrtcuMfnGSBeADp9GbUuRz3nwd%2FHNvyAiEAtrSaoAGPJ%2BvqoQQ1lFIjmPID7i0suw%2B02k9ozNJttg8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIsETflq%2BLCS%2BrMlMircA6rCYvv1ob8aK9i%2FqYghHMm7TjZ7t4QZ5Hf9%2BG27XOZITwJ5VYhk4Ix46UPbv642dDwbay9oBiH74SRKiJzlMpl7ugHUliOU6Dw6umBOEygXQxoHMTD1em3BV01UGPGua1YjiiTyQtp6PWBs%2F4jTxhyLShxJCH7%2BQLzbt8hb7j1X9SqbZUhOEZDpo5J5PLaLu2QvJOovx85umMwg7pkvn2AaDEOyXf2sHSWFWAMXii3ChINKA8%2BGRGVF2ZBDQdekV9i7SWBdnF3UvFNc2jhr331gVXy3JFKhIAU02CzMCcVxYb%2FDqLgy4X7XnDBJxH4pMoKmbQTNIgldHwsULB3voYY3ve2m9K%2FmgCYlKksAihLaf0gDOm34eltYpTx0LGSZotvLtadWux2FVTQa6DDBZrIthwzEP45PQDeE%2FdEHBSwCoBGhXFR27xlxCmAjoBcKnXOA0PgeAMmMipRxXiVDh9%2FP83NncA%2BQO%2FwnSGjTdvwiHptB9hv1onvzBSHGiM%2FZkt4KxJ6rbgfKSrYqTudktUFoz7LAS5SCmTCZmgykjLFPYGHFs0H3fBWtcfjMNaoFVx7Kadws9JrqBlgjavnTRmBYflkNBhmUWw6FA%2B56pjKLoPOiauBDum%2Bo0%2F4tMJr4gMUGOqUBUjzO3PNg6RHSbhYyo7osdOLh6UAY04I1GUbcZfxvU2bY0qLkKo8Es3JYjyd4WYE6QQ2JGW2WY%2BOOi7MIGlxQeF4wJF%2FYhtQIko4YLHyPFSeWY7WkWVsRoYIIFXar72JW9ZBPO4upXEhYJBRp6rwr%2B2NG9JtyRGGpGY3fwYwcK%2FmM3tYjoyKOS%2BxHskhBrCs6ZK%2F6uaAbjmXgGmPc%2BLpN3DwGAHeZ&X-Amz-Signature=eda8323ef2f532bc206dd4347ef645c7c856836accebdc01493a57c59bf07157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR7X3FDC%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIB4KRP09Y6dsf%2FrtcuMfnGSBeADp9GbUuRz3nwd%2FHNvyAiEAtrSaoAGPJ%2BvqoQQ1lFIjmPID7i0suw%2B02k9ozNJttg8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIsETflq%2BLCS%2BrMlMircA6rCYvv1ob8aK9i%2FqYghHMm7TjZ7t4QZ5Hf9%2BG27XOZITwJ5VYhk4Ix46UPbv642dDwbay9oBiH74SRKiJzlMpl7ugHUliOU6Dw6umBOEygXQxoHMTD1em3BV01UGPGua1YjiiTyQtp6PWBs%2F4jTxhyLShxJCH7%2BQLzbt8hb7j1X9SqbZUhOEZDpo5J5PLaLu2QvJOovx85umMwg7pkvn2AaDEOyXf2sHSWFWAMXii3ChINKA8%2BGRGVF2ZBDQdekV9i7SWBdnF3UvFNc2jhr331gVXy3JFKhIAU02CzMCcVxYb%2FDqLgy4X7XnDBJxH4pMoKmbQTNIgldHwsULB3voYY3ve2m9K%2FmgCYlKksAihLaf0gDOm34eltYpTx0LGSZotvLtadWux2FVTQa6DDBZrIthwzEP45PQDeE%2FdEHBSwCoBGhXFR27xlxCmAjoBcKnXOA0PgeAMmMipRxXiVDh9%2FP83NncA%2BQO%2FwnSGjTdvwiHptB9hv1onvzBSHGiM%2FZkt4KxJ6rbgfKSrYqTudktUFoz7LAS5SCmTCZmgykjLFPYGHFs0H3fBWtcfjMNaoFVx7Kadws9JrqBlgjavnTRmBYflkNBhmUWw6FA%2B56pjKLoPOiauBDum%2Bo0%2F4tMJr4gMUGOqUBUjzO3PNg6RHSbhYyo7osdOLh6UAY04I1GUbcZfxvU2bY0qLkKo8Es3JYjyd4WYE6QQ2JGW2WY%2BOOi7MIGlxQeF4wJF%2FYhtQIko4YLHyPFSeWY7WkWVsRoYIIFXar72JW9ZBPO4upXEhYJBRp6rwr%2B2NG9JtyRGGpGY3fwYwcK%2FmM3tYjoyKOS%2BxHskhBrCs6ZK%2F6uaAbjmXgGmPc%2BLpN3DwGAHeZ&X-Amz-Signature=1d8cfe8a18a005b351ccb966fac0a4961ab08f49e3e4c50d679e43301f2dcdf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR7X3FDC%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIB4KRP09Y6dsf%2FrtcuMfnGSBeADp9GbUuRz3nwd%2FHNvyAiEAtrSaoAGPJ%2BvqoQQ1lFIjmPID7i0suw%2B02k9ozNJttg8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIsETflq%2BLCS%2BrMlMircA6rCYvv1ob8aK9i%2FqYghHMm7TjZ7t4QZ5Hf9%2BG27XOZITwJ5VYhk4Ix46UPbv642dDwbay9oBiH74SRKiJzlMpl7ugHUliOU6Dw6umBOEygXQxoHMTD1em3BV01UGPGua1YjiiTyQtp6PWBs%2F4jTxhyLShxJCH7%2BQLzbt8hb7j1X9SqbZUhOEZDpo5J5PLaLu2QvJOovx85umMwg7pkvn2AaDEOyXf2sHSWFWAMXii3ChINKA8%2BGRGVF2ZBDQdekV9i7SWBdnF3UvFNc2jhr331gVXy3JFKhIAU02CzMCcVxYb%2FDqLgy4X7XnDBJxH4pMoKmbQTNIgldHwsULB3voYY3ve2m9K%2FmgCYlKksAihLaf0gDOm34eltYpTx0LGSZotvLtadWux2FVTQa6DDBZrIthwzEP45PQDeE%2FdEHBSwCoBGhXFR27xlxCmAjoBcKnXOA0PgeAMmMipRxXiVDh9%2FP83NncA%2BQO%2FwnSGjTdvwiHptB9hv1onvzBSHGiM%2FZkt4KxJ6rbgfKSrYqTudktUFoz7LAS5SCmTCZmgykjLFPYGHFs0H3fBWtcfjMNaoFVx7Kadws9JrqBlgjavnTRmBYflkNBhmUWw6FA%2B56pjKLoPOiauBDum%2Bo0%2F4tMJr4gMUGOqUBUjzO3PNg6RHSbhYyo7osdOLh6UAY04I1GUbcZfxvU2bY0qLkKo8Es3JYjyd4WYE6QQ2JGW2WY%2BOOi7MIGlxQeF4wJF%2FYhtQIko4YLHyPFSeWY7WkWVsRoYIIFXar72JW9ZBPO4upXEhYJBRp6rwr%2B2NG9JtyRGGpGY3fwYwcK%2FmM3tYjoyKOS%2BxHskhBrCs6ZK%2F6uaAbjmXgGmPc%2BLpN3DwGAHeZ&X-Amz-Signature=2f45a6bbcf0828be88f943384f201b60f4f18d13c878a1f2c6574f9bdb43ae60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR7X3FDC%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIB4KRP09Y6dsf%2FrtcuMfnGSBeADp9GbUuRz3nwd%2FHNvyAiEAtrSaoAGPJ%2BvqoQQ1lFIjmPID7i0suw%2B02k9ozNJttg8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIsETflq%2BLCS%2BrMlMircA6rCYvv1ob8aK9i%2FqYghHMm7TjZ7t4QZ5Hf9%2BG27XOZITwJ5VYhk4Ix46UPbv642dDwbay9oBiH74SRKiJzlMpl7ugHUliOU6Dw6umBOEygXQxoHMTD1em3BV01UGPGua1YjiiTyQtp6PWBs%2F4jTxhyLShxJCH7%2BQLzbt8hb7j1X9SqbZUhOEZDpo5J5PLaLu2QvJOovx85umMwg7pkvn2AaDEOyXf2sHSWFWAMXii3ChINKA8%2BGRGVF2ZBDQdekV9i7SWBdnF3UvFNc2jhr331gVXy3JFKhIAU02CzMCcVxYb%2FDqLgy4X7XnDBJxH4pMoKmbQTNIgldHwsULB3voYY3ve2m9K%2FmgCYlKksAihLaf0gDOm34eltYpTx0LGSZotvLtadWux2FVTQa6DDBZrIthwzEP45PQDeE%2FdEHBSwCoBGhXFR27xlxCmAjoBcKnXOA0PgeAMmMipRxXiVDh9%2FP83NncA%2BQO%2FwnSGjTdvwiHptB9hv1onvzBSHGiM%2FZkt4KxJ6rbgfKSrYqTudktUFoz7LAS5SCmTCZmgykjLFPYGHFs0H3fBWtcfjMNaoFVx7Kadws9JrqBlgjavnTRmBYflkNBhmUWw6FA%2B56pjKLoPOiauBDum%2Bo0%2F4tMJr4gMUGOqUBUjzO3PNg6RHSbhYyo7osdOLh6UAY04I1GUbcZfxvU2bY0qLkKo8Es3JYjyd4WYE6QQ2JGW2WY%2BOOi7MIGlxQeF4wJF%2FYhtQIko4YLHyPFSeWY7WkWVsRoYIIFXar72JW9ZBPO4upXEhYJBRp6rwr%2B2NG9JtyRGGpGY3fwYwcK%2FmM3tYjoyKOS%2BxHskhBrCs6ZK%2F6uaAbjmXgGmPc%2BLpN3DwGAHeZ&X-Amz-Signature=b08447d5a26e4e289ea9a5f7dbbf97958c81c0c2f7d18fc7f82d7fd361aa640b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR7X3FDC%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIB4KRP09Y6dsf%2FrtcuMfnGSBeADp9GbUuRz3nwd%2FHNvyAiEAtrSaoAGPJ%2BvqoQQ1lFIjmPID7i0suw%2B02k9ozNJttg8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIsETflq%2BLCS%2BrMlMircA6rCYvv1ob8aK9i%2FqYghHMm7TjZ7t4QZ5Hf9%2BG27XOZITwJ5VYhk4Ix46UPbv642dDwbay9oBiH74SRKiJzlMpl7ugHUliOU6Dw6umBOEygXQxoHMTD1em3BV01UGPGua1YjiiTyQtp6PWBs%2F4jTxhyLShxJCH7%2BQLzbt8hb7j1X9SqbZUhOEZDpo5J5PLaLu2QvJOovx85umMwg7pkvn2AaDEOyXf2sHSWFWAMXii3ChINKA8%2BGRGVF2ZBDQdekV9i7SWBdnF3UvFNc2jhr331gVXy3JFKhIAU02CzMCcVxYb%2FDqLgy4X7XnDBJxH4pMoKmbQTNIgldHwsULB3voYY3ve2m9K%2FmgCYlKksAihLaf0gDOm34eltYpTx0LGSZotvLtadWux2FVTQa6DDBZrIthwzEP45PQDeE%2FdEHBSwCoBGhXFR27xlxCmAjoBcKnXOA0PgeAMmMipRxXiVDh9%2FP83NncA%2BQO%2FwnSGjTdvwiHptB9hv1onvzBSHGiM%2FZkt4KxJ6rbgfKSrYqTudktUFoz7LAS5SCmTCZmgykjLFPYGHFs0H3fBWtcfjMNaoFVx7Kadws9JrqBlgjavnTRmBYflkNBhmUWw6FA%2B56pjKLoPOiauBDum%2Bo0%2F4tMJr4gMUGOqUBUjzO3PNg6RHSbhYyo7osdOLh6UAY04I1GUbcZfxvU2bY0qLkKo8Es3JYjyd4WYE6QQ2JGW2WY%2BOOi7MIGlxQeF4wJF%2FYhtQIko4YLHyPFSeWY7WkWVsRoYIIFXar72JW9ZBPO4upXEhYJBRp6rwr%2B2NG9JtyRGGpGY3fwYwcK%2FmM3tYjoyKOS%2BxHskhBrCs6ZK%2F6uaAbjmXgGmPc%2BLpN3DwGAHeZ&X-Amz-Signature=40b0b90a4de884b17cc6f79adfb4408f1c69aedf2ed8d92b46b7ac558ccc7ac0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
