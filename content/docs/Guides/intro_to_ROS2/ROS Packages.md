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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS3K4BJR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T110206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCyVS%2Bt3UNcCpnH6s6tHtVdj2I5HR6Mi9eBussxutCKhQIgT0ILE9LVUITBMZlAIs8zHahtsQEZTovKp4p49FeF7asqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyJN4eRSpJTLsQZpyrcA%2FK8GljJb0NGcbQiLtgZDSHU1tDqPD4afw6G1EkdDD%2Bo4%2Fepv5IbhFjsptuzJ%2Bio8aAEadbW6ds1y36vO7CwXwhYRe7gAfktlW1JDXaKn%2BMBLsp0cZgJGLDyQi%2FdLgnMZhv7xmON9%2FMUMVmp35WuQPA2yKvRxqM1PLp%2BsmFI2OrlKEqsECKgSHIXFAwemtt3F5vgqG5YIDxhanOqF1W%2FzujsWgznYjQEVrgaO9v56s1ccUjLBOstIK393ujjnsM%2B3Bwe32bo4pqmBGg5S0Bay5dI778SwihjovVq68dxjaSrO0mdHqmANu3p7zx%2FQNYx0OwEFe6KpVvfbVZZxp61PNNwB%2Bp43xK5oqUJwGfowzMNgxsut6hUVHNVHsbKjp5LCztuJcjiMYsGWBdPsWQ0EtwUdgVafe4QahDxRf0KVMqFKJluQGJBemr%2F3Y8k0tvgZBg5jiCCfemYkSbpzYqRnm3YSs6jtt3HtmQ9ZGE6V384ngBFld24cTFrGcm1Q8YNCsOKfW7%2F4%2BaYC%2BFa8XpkCbVRltAo5XQ61JUQzalt0q9D60KFw1gVdGDnLwdGYZwdqC39dk4eEuKvk1gj9ub3NyyGTGQ93L15yWVco8od8LUZmmhmq%2BWbiUFLX7%2FKMJf33sIGOqUB8yNTQ1%2Bx2LkdnHwCx%2BaYE9%2FDtfpPnRGVDlA2jBo9s%2FkuwEernBxty2UP%2FxeCN8ET58fX8LXb2WoauAUx8Ckkeyzv5o6WY%2FaTqm6a0LmaXLKYrHud33zg5jo84bok66IJzujDD2ULAVlqFkhM9mALiZUT9QO8qNS1k730zYmjQWeTZkHp4d8YGjaq%2BkeZjmd1JFjdzdXHSKwo3k8l4hxhnYxiPaRe&X-Amz-Signature=9e31fa2482e403b28ed4f09344ca4b7ea1c3d7b3b2a3089886e725704b734591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS3K4BJR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T110206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCyVS%2Bt3UNcCpnH6s6tHtVdj2I5HR6Mi9eBussxutCKhQIgT0ILE9LVUITBMZlAIs8zHahtsQEZTovKp4p49FeF7asqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyJN4eRSpJTLsQZpyrcA%2FK8GljJb0NGcbQiLtgZDSHU1tDqPD4afw6G1EkdDD%2Bo4%2Fepv5IbhFjsptuzJ%2Bio8aAEadbW6ds1y36vO7CwXwhYRe7gAfktlW1JDXaKn%2BMBLsp0cZgJGLDyQi%2FdLgnMZhv7xmON9%2FMUMVmp35WuQPA2yKvRxqM1PLp%2BsmFI2OrlKEqsECKgSHIXFAwemtt3F5vgqG5YIDxhanOqF1W%2FzujsWgznYjQEVrgaO9v56s1ccUjLBOstIK393ujjnsM%2B3Bwe32bo4pqmBGg5S0Bay5dI778SwihjovVq68dxjaSrO0mdHqmANu3p7zx%2FQNYx0OwEFe6KpVvfbVZZxp61PNNwB%2Bp43xK5oqUJwGfowzMNgxsut6hUVHNVHsbKjp5LCztuJcjiMYsGWBdPsWQ0EtwUdgVafe4QahDxRf0KVMqFKJluQGJBemr%2F3Y8k0tvgZBg5jiCCfemYkSbpzYqRnm3YSs6jtt3HtmQ9ZGE6V384ngBFld24cTFrGcm1Q8YNCsOKfW7%2F4%2BaYC%2BFa8XpkCbVRltAo5XQ61JUQzalt0q9D60KFw1gVdGDnLwdGYZwdqC39dk4eEuKvk1gj9ub3NyyGTGQ93L15yWVco8od8LUZmmhmq%2BWbiUFLX7%2FKMJf33sIGOqUB8yNTQ1%2Bx2LkdnHwCx%2BaYE9%2FDtfpPnRGVDlA2jBo9s%2FkuwEernBxty2UP%2FxeCN8ET58fX8LXb2WoauAUx8Ckkeyzv5o6WY%2FaTqm6a0LmaXLKYrHud33zg5jo84bok66IJzujDD2ULAVlqFkhM9mALiZUT9QO8qNS1k730zYmjQWeTZkHp4d8YGjaq%2BkeZjmd1JFjdzdXHSKwo3k8l4hxhnYxiPaRe&X-Amz-Signature=1ff6bcb6a913569bf398e48dad7eae068145000e059dfbcd608ecc9f38093f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS3K4BJR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T110206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCyVS%2Bt3UNcCpnH6s6tHtVdj2I5HR6Mi9eBussxutCKhQIgT0ILE9LVUITBMZlAIs8zHahtsQEZTovKp4p49FeF7asqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyJN4eRSpJTLsQZpyrcA%2FK8GljJb0NGcbQiLtgZDSHU1tDqPD4afw6G1EkdDD%2Bo4%2Fepv5IbhFjsptuzJ%2Bio8aAEadbW6ds1y36vO7CwXwhYRe7gAfktlW1JDXaKn%2BMBLsp0cZgJGLDyQi%2FdLgnMZhv7xmON9%2FMUMVmp35WuQPA2yKvRxqM1PLp%2BsmFI2OrlKEqsECKgSHIXFAwemtt3F5vgqG5YIDxhanOqF1W%2FzujsWgznYjQEVrgaO9v56s1ccUjLBOstIK393ujjnsM%2B3Bwe32bo4pqmBGg5S0Bay5dI778SwihjovVq68dxjaSrO0mdHqmANu3p7zx%2FQNYx0OwEFe6KpVvfbVZZxp61PNNwB%2Bp43xK5oqUJwGfowzMNgxsut6hUVHNVHsbKjp5LCztuJcjiMYsGWBdPsWQ0EtwUdgVafe4QahDxRf0KVMqFKJluQGJBemr%2F3Y8k0tvgZBg5jiCCfemYkSbpzYqRnm3YSs6jtt3HtmQ9ZGE6V384ngBFld24cTFrGcm1Q8YNCsOKfW7%2F4%2BaYC%2BFa8XpkCbVRltAo5XQ61JUQzalt0q9D60KFw1gVdGDnLwdGYZwdqC39dk4eEuKvk1gj9ub3NyyGTGQ93L15yWVco8od8LUZmmhmq%2BWbiUFLX7%2FKMJf33sIGOqUB8yNTQ1%2Bx2LkdnHwCx%2BaYE9%2FDtfpPnRGVDlA2jBo9s%2FkuwEernBxty2UP%2FxeCN8ET58fX8LXb2WoauAUx8Ckkeyzv5o6WY%2FaTqm6a0LmaXLKYrHud33zg5jo84bok66IJzujDD2ULAVlqFkhM9mALiZUT9QO8qNS1k730zYmjQWeTZkHp4d8YGjaq%2BkeZjmd1JFjdzdXHSKwo3k8l4hxhnYxiPaRe&X-Amz-Signature=bf7c7f42abd4c1eba3d5d67e0604412e23c7c9ef382a01aa738a5a59d10c9fc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS3K4BJR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T110206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCyVS%2Bt3UNcCpnH6s6tHtVdj2I5HR6Mi9eBussxutCKhQIgT0ILE9LVUITBMZlAIs8zHahtsQEZTovKp4p49FeF7asqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyJN4eRSpJTLsQZpyrcA%2FK8GljJb0NGcbQiLtgZDSHU1tDqPD4afw6G1EkdDD%2Bo4%2Fepv5IbhFjsptuzJ%2Bio8aAEadbW6ds1y36vO7CwXwhYRe7gAfktlW1JDXaKn%2BMBLsp0cZgJGLDyQi%2FdLgnMZhv7xmON9%2FMUMVmp35WuQPA2yKvRxqM1PLp%2BsmFI2OrlKEqsECKgSHIXFAwemtt3F5vgqG5YIDxhanOqF1W%2FzujsWgznYjQEVrgaO9v56s1ccUjLBOstIK393ujjnsM%2B3Bwe32bo4pqmBGg5S0Bay5dI778SwihjovVq68dxjaSrO0mdHqmANu3p7zx%2FQNYx0OwEFe6KpVvfbVZZxp61PNNwB%2Bp43xK5oqUJwGfowzMNgxsut6hUVHNVHsbKjp5LCztuJcjiMYsGWBdPsWQ0EtwUdgVafe4QahDxRf0KVMqFKJluQGJBemr%2F3Y8k0tvgZBg5jiCCfemYkSbpzYqRnm3YSs6jtt3HtmQ9ZGE6V384ngBFld24cTFrGcm1Q8YNCsOKfW7%2F4%2BaYC%2BFa8XpkCbVRltAo5XQ61JUQzalt0q9D60KFw1gVdGDnLwdGYZwdqC39dk4eEuKvk1gj9ub3NyyGTGQ93L15yWVco8od8LUZmmhmq%2BWbiUFLX7%2FKMJf33sIGOqUB8yNTQ1%2Bx2LkdnHwCx%2BaYE9%2FDtfpPnRGVDlA2jBo9s%2FkuwEernBxty2UP%2FxeCN8ET58fX8LXb2WoauAUx8Ckkeyzv5o6WY%2FaTqm6a0LmaXLKYrHud33zg5jo84bok66IJzujDD2ULAVlqFkhM9mALiZUT9QO8qNS1k730zYmjQWeTZkHp4d8YGjaq%2BkeZjmd1JFjdzdXHSKwo3k8l4hxhnYxiPaRe&X-Amz-Signature=36df0c11cd46b8f864c6e2f08421464fd2b87be789c66a68f9f4f76f4fe4ce72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS3K4BJR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T110206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCyVS%2Bt3UNcCpnH6s6tHtVdj2I5HR6Mi9eBussxutCKhQIgT0ILE9LVUITBMZlAIs8zHahtsQEZTovKp4p49FeF7asqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyJN4eRSpJTLsQZpyrcA%2FK8GljJb0NGcbQiLtgZDSHU1tDqPD4afw6G1EkdDD%2Bo4%2Fepv5IbhFjsptuzJ%2Bio8aAEadbW6ds1y36vO7CwXwhYRe7gAfktlW1JDXaKn%2BMBLsp0cZgJGLDyQi%2FdLgnMZhv7xmON9%2FMUMVmp35WuQPA2yKvRxqM1PLp%2BsmFI2OrlKEqsECKgSHIXFAwemtt3F5vgqG5YIDxhanOqF1W%2FzujsWgznYjQEVrgaO9v56s1ccUjLBOstIK393ujjnsM%2B3Bwe32bo4pqmBGg5S0Bay5dI778SwihjovVq68dxjaSrO0mdHqmANu3p7zx%2FQNYx0OwEFe6KpVvfbVZZxp61PNNwB%2Bp43xK5oqUJwGfowzMNgxsut6hUVHNVHsbKjp5LCztuJcjiMYsGWBdPsWQ0EtwUdgVafe4QahDxRf0KVMqFKJluQGJBemr%2F3Y8k0tvgZBg5jiCCfemYkSbpzYqRnm3YSs6jtt3HtmQ9ZGE6V384ngBFld24cTFrGcm1Q8YNCsOKfW7%2F4%2BaYC%2BFa8XpkCbVRltAo5XQ61JUQzalt0q9D60KFw1gVdGDnLwdGYZwdqC39dk4eEuKvk1gj9ub3NyyGTGQ93L15yWVco8od8LUZmmhmq%2BWbiUFLX7%2FKMJf33sIGOqUB8yNTQ1%2Bx2LkdnHwCx%2BaYE9%2FDtfpPnRGVDlA2jBo9s%2FkuwEernBxty2UP%2FxeCN8ET58fX8LXb2WoauAUx8Ckkeyzv5o6WY%2FaTqm6a0LmaXLKYrHud33zg5jo84bok66IJzujDD2ULAVlqFkhM9mALiZUT9QO8qNS1k730zYmjQWeTZkHp4d8YGjaq%2BkeZjmd1JFjdzdXHSKwo3k8l4hxhnYxiPaRe&X-Amz-Signature=ccf004a512f1041934e462d14e4afba10d6305f3e826b0c6b5954bd3dee640b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS3K4BJR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T110206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCyVS%2Bt3UNcCpnH6s6tHtVdj2I5HR6Mi9eBussxutCKhQIgT0ILE9LVUITBMZlAIs8zHahtsQEZTovKp4p49FeF7asqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyJN4eRSpJTLsQZpyrcA%2FK8GljJb0NGcbQiLtgZDSHU1tDqPD4afw6G1EkdDD%2Bo4%2Fepv5IbhFjsptuzJ%2Bio8aAEadbW6ds1y36vO7CwXwhYRe7gAfktlW1JDXaKn%2BMBLsp0cZgJGLDyQi%2FdLgnMZhv7xmON9%2FMUMVmp35WuQPA2yKvRxqM1PLp%2BsmFI2OrlKEqsECKgSHIXFAwemtt3F5vgqG5YIDxhanOqF1W%2FzujsWgznYjQEVrgaO9v56s1ccUjLBOstIK393ujjnsM%2B3Bwe32bo4pqmBGg5S0Bay5dI778SwihjovVq68dxjaSrO0mdHqmANu3p7zx%2FQNYx0OwEFe6KpVvfbVZZxp61PNNwB%2Bp43xK5oqUJwGfowzMNgxsut6hUVHNVHsbKjp5LCztuJcjiMYsGWBdPsWQ0EtwUdgVafe4QahDxRf0KVMqFKJluQGJBemr%2F3Y8k0tvgZBg5jiCCfemYkSbpzYqRnm3YSs6jtt3HtmQ9ZGE6V384ngBFld24cTFrGcm1Q8YNCsOKfW7%2F4%2BaYC%2BFa8XpkCbVRltAo5XQ61JUQzalt0q9D60KFw1gVdGDnLwdGYZwdqC39dk4eEuKvk1gj9ub3NyyGTGQ93L15yWVco8od8LUZmmhmq%2BWbiUFLX7%2FKMJf33sIGOqUB8yNTQ1%2Bx2LkdnHwCx%2BaYE9%2FDtfpPnRGVDlA2jBo9s%2FkuwEernBxty2UP%2FxeCN8ET58fX8LXb2WoauAUx8Ckkeyzv5o6WY%2FaTqm6a0LmaXLKYrHud33zg5jo84bok66IJzujDD2ULAVlqFkhM9mALiZUT9QO8qNS1k730zYmjQWeTZkHp4d8YGjaq%2BkeZjmd1JFjdzdXHSKwo3k8l4hxhnYxiPaRe&X-Amz-Signature=895863c458542ed8b50255831517f09c656f20d35bfa8cff76f666a854e2d8f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS3K4BJR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T110206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCyVS%2Bt3UNcCpnH6s6tHtVdj2I5HR6Mi9eBussxutCKhQIgT0ILE9LVUITBMZlAIs8zHahtsQEZTovKp4p49FeF7asqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyJN4eRSpJTLsQZpyrcA%2FK8GljJb0NGcbQiLtgZDSHU1tDqPD4afw6G1EkdDD%2Bo4%2Fepv5IbhFjsptuzJ%2Bio8aAEadbW6ds1y36vO7CwXwhYRe7gAfktlW1JDXaKn%2BMBLsp0cZgJGLDyQi%2FdLgnMZhv7xmON9%2FMUMVmp35WuQPA2yKvRxqM1PLp%2BsmFI2OrlKEqsECKgSHIXFAwemtt3F5vgqG5YIDxhanOqF1W%2FzujsWgznYjQEVrgaO9v56s1ccUjLBOstIK393ujjnsM%2B3Bwe32bo4pqmBGg5S0Bay5dI778SwihjovVq68dxjaSrO0mdHqmANu3p7zx%2FQNYx0OwEFe6KpVvfbVZZxp61PNNwB%2Bp43xK5oqUJwGfowzMNgxsut6hUVHNVHsbKjp5LCztuJcjiMYsGWBdPsWQ0EtwUdgVafe4QahDxRf0KVMqFKJluQGJBemr%2F3Y8k0tvgZBg5jiCCfemYkSbpzYqRnm3YSs6jtt3HtmQ9ZGE6V384ngBFld24cTFrGcm1Q8YNCsOKfW7%2F4%2BaYC%2BFa8XpkCbVRltAo5XQ61JUQzalt0q9D60KFw1gVdGDnLwdGYZwdqC39dk4eEuKvk1gj9ub3NyyGTGQ93L15yWVco8od8LUZmmhmq%2BWbiUFLX7%2FKMJf33sIGOqUB8yNTQ1%2Bx2LkdnHwCx%2BaYE9%2FDtfpPnRGVDlA2jBo9s%2FkuwEernBxty2UP%2FxeCN8ET58fX8LXb2WoauAUx8Ckkeyzv5o6WY%2FaTqm6a0LmaXLKYrHud33zg5jo84bok66IJzujDD2ULAVlqFkhM9mALiZUT9QO8qNS1k730zYmjQWeTZkHp4d8YGjaq%2BkeZjmd1JFjdzdXHSKwo3k8l4hxhnYxiPaRe&X-Amz-Signature=cc84a077cd7e853c81df861c4425c01cfe44ea8193a67020b30a8ec6c32a4feb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
