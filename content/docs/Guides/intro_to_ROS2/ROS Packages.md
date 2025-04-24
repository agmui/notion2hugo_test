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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4MJN6K%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1iDZLebqtVOt7PPb3KD4JiC3bx5je74oHX1bGzlLYCAiEAs0OEGKxyIIFYj3dIjpNKgi0%2Fvsm%2FKxmjkCunl%2BflFzcq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDD3jO6VmGAFTeE%2B6sircA3pa1PjLLqTzIvUj4HUcSvTVC%2FZdjvl3hNA9NZPp7dvVe0ANB9vzsMO7ZKSgKMWbE1xWGaLbYlDzXUU9Wv6%2BAcuvKcTxxBr1uAnxeAdCrzqSWcSF2KKyY%2ByxI%2FqSTjygSSpfB59FcjAPAnACqRtV0j3ApcEzTVRvkor6TxoEMb9JMYORzmiYR%2FIaOxsW2UmGbUZ%2Bx03iFSVCfJvdnMSjRm6Hm752UtOE0nxXDb3GNPWHUQGcawLP%2FrPVzVJfAFwujy1EnTC2VdSO%2BjIl7ybkN21j%2FJAvE5MBhgPVXFUU7Q%2F9i3Xgoz2PG6InnpwAfNLHJuf49UKdVdzrpc1GFWO%2FnyF27ZogVMVS9xO7HF3w3b3BTE%2FyTp4vCFawOU2ZZOOgp5c9J1ELU7oRZLEZjiUvvF2BW%2FjANRGBGyBgvQkuu1md6UIdZDH6dc6Gw2BUjZsHIRm69Q0h0ZGWk0jNRKc8NwK3pNxlmv%2FrvAVHbKwNV9K02LXwNr92YtIKS2glvlLfmASUivVEBaxiqheaQVQ2yl0Zbao7zrWa6KsJm6nXFNqI%2FzzEMCxyWi90dyKBj7uY8kBEcUeG%2Ffyl40RnHuoCtv8H7z2BfLHrVGlJ4CPYL9RFzA3gtuv0bHGmuK43MPj5qcAGOqUBgdptM5mauahOtiTigip2HwAOcxAp5SCGB0uK0VvM6BQZJjynz6u6Sx5Ez39wz%2FchN%2BLsAcD0oOtNzIXprS2xTDKiCPww6MRfvbEPWV5gDpVohTu1ORxQxCPhSJs1Gv5Oy4OulZD6PpawmyYPIS%2FXnNUDs3Q6pTvBEUyAJ2epA0fk%2FCiT36dL%2FPNeYQ3BTh5T4naNnRP3mmUWDI0OGVyoqqAoT42V&X-Amz-Signature=255815b6fe50a547e5e5c9b6320bc59bc92b34423bee2e84a63cd543be579064&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4MJN6K%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1iDZLebqtVOt7PPb3KD4JiC3bx5je74oHX1bGzlLYCAiEAs0OEGKxyIIFYj3dIjpNKgi0%2Fvsm%2FKxmjkCunl%2BflFzcq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDD3jO6VmGAFTeE%2B6sircA3pa1PjLLqTzIvUj4HUcSvTVC%2FZdjvl3hNA9NZPp7dvVe0ANB9vzsMO7ZKSgKMWbE1xWGaLbYlDzXUU9Wv6%2BAcuvKcTxxBr1uAnxeAdCrzqSWcSF2KKyY%2ByxI%2FqSTjygSSpfB59FcjAPAnACqRtV0j3ApcEzTVRvkor6TxoEMb9JMYORzmiYR%2FIaOxsW2UmGbUZ%2Bx03iFSVCfJvdnMSjRm6Hm752UtOE0nxXDb3GNPWHUQGcawLP%2FrPVzVJfAFwujy1EnTC2VdSO%2BjIl7ybkN21j%2FJAvE5MBhgPVXFUU7Q%2F9i3Xgoz2PG6InnpwAfNLHJuf49UKdVdzrpc1GFWO%2FnyF27ZogVMVS9xO7HF3w3b3BTE%2FyTp4vCFawOU2ZZOOgp5c9J1ELU7oRZLEZjiUvvF2BW%2FjANRGBGyBgvQkuu1md6UIdZDH6dc6Gw2BUjZsHIRm69Q0h0ZGWk0jNRKc8NwK3pNxlmv%2FrvAVHbKwNV9K02LXwNr92YtIKS2glvlLfmASUivVEBaxiqheaQVQ2yl0Zbao7zrWa6KsJm6nXFNqI%2FzzEMCxyWi90dyKBj7uY8kBEcUeG%2Ffyl40RnHuoCtv8H7z2BfLHrVGlJ4CPYL9RFzA3gtuv0bHGmuK43MPj5qcAGOqUBgdptM5mauahOtiTigip2HwAOcxAp5SCGB0uK0VvM6BQZJjynz6u6Sx5Ez39wz%2FchN%2BLsAcD0oOtNzIXprS2xTDKiCPww6MRfvbEPWV5gDpVohTu1ORxQxCPhSJs1Gv5Oy4OulZD6PpawmyYPIS%2FXnNUDs3Q6pTvBEUyAJ2epA0fk%2FCiT36dL%2FPNeYQ3BTh5T4naNnRP3mmUWDI0OGVyoqqAoT42V&X-Amz-Signature=e461b3ffbb4ad45a39b0fdefc7a98d4d2688cecfbb4bdd1082289093e8984a0a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4MJN6K%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1iDZLebqtVOt7PPb3KD4JiC3bx5je74oHX1bGzlLYCAiEAs0OEGKxyIIFYj3dIjpNKgi0%2Fvsm%2FKxmjkCunl%2BflFzcq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDD3jO6VmGAFTeE%2B6sircA3pa1PjLLqTzIvUj4HUcSvTVC%2FZdjvl3hNA9NZPp7dvVe0ANB9vzsMO7ZKSgKMWbE1xWGaLbYlDzXUU9Wv6%2BAcuvKcTxxBr1uAnxeAdCrzqSWcSF2KKyY%2ByxI%2FqSTjygSSpfB59FcjAPAnACqRtV0j3ApcEzTVRvkor6TxoEMb9JMYORzmiYR%2FIaOxsW2UmGbUZ%2Bx03iFSVCfJvdnMSjRm6Hm752UtOE0nxXDb3GNPWHUQGcawLP%2FrPVzVJfAFwujy1EnTC2VdSO%2BjIl7ybkN21j%2FJAvE5MBhgPVXFUU7Q%2F9i3Xgoz2PG6InnpwAfNLHJuf49UKdVdzrpc1GFWO%2FnyF27ZogVMVS9xO7HF3w3b3BTE%2FyTp4vCFawOU2ZZOOgp5c9J1ELU7oRZLEZjiUvvF2BW%2FjANRGBGyBgvQkuu1md6UIdZDH6dc6Gw2BUjZsHIRm69Q0h0ZGWk0jNRKc8NwK3pNxlmv%2FrvAVHbKwNV9K02LXwNr92YtIKS2glvlLfmASUivVEBaxiqheaQVQ2yl0Zbao7zrWa6KsJm6nXFNqI%2FzzEMCxyWi90dyKBj7uY8kBEcUeG%2Ffyl40RnHuoCtv8H7z2BfLHrVGlJ4CPYL9RFzA3gtuv0bHGmuK43MPj5qcAGOqUBgdptM5mauahOtiTigip2HwAOcxAp5SCGB0uK0VvM6BQZJjynz6u6Sx5Ez39wz%2FchN%2BLsAcD0oOtNzIXprS2xTDKiCPww6MRfvbEPWV5gDpVohTu1ORxQxCPhSJs1Gv5Oy4OulZD6PpawmyYPIS%2FXnNUDs3Q6pTvBEUyAJ2epA0fk%2FCiT36dL%2FPNeYQ3BTh5T4naNnRP3mmUWDI0OGVyoqqAoT42V&X-Amz-Signature=36ee65cba2e96121327f6f4c7a34f21ef937149397731470770e6f5728b32ddd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4MJN6K%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1iDZLebqtVOt7PPb3KD4JiC3bx5je74oHX1bGzlLYCAiEAs0OEGKxyIIFYj3dIjpNKgi0%2Fvsm%2FKxmjkCunl%2BflFzcq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDD3jO6VmGAFTeE%2B6sircA3pa1PjLLqTzIvUj4HUcSvTVC%2FZdjvl3hNA9NZPp7dvVe0ANB9vzsMO7ZKSgKMWbE1xWGaLbYlDzXUU9Wv6%2BAcuvKcTxxBr1uAnxeAdCrzqSWcSF2KKyY%2ByxI%2FqSTjygSSpfB59FcjAPAnACqRtV0j3ApcEzTVRvkor6TxoEMb9JMYORzmiYR%2FIaOxsW2UmGbUZ%2Bx03iFSVCfJvdnMSjRm6Hm752UtOE0nxXDb3GNPWHUQGcawLP%2FrPVzVJfAFwujy1EnTC2VdSO%2BjIl7ybkN21j%2FJAvE5MBhgPVXFUU7Q%2F9i3Xgoz2PG6InnpwAfNLHJuf49UKdVdzrpc1GFWO%2FnyF27ZogVMVS9xO7HF3w3b3BTE%2FyTp4vCFawOU2ZZOOgp5c9J1ELU7oRZLEZjiUvvF2BW%2FjANRGBGyBgvQkuu1md6UIdZDH6dc6Gw2BUjZsHIRm69Q0h0ZGWk0jNRKc8NwK3pNxlmv%2FrvAVHbKwNV9K02LXwNr92YtIKS2glvlLfmASUivVEBaxiqheaQVQ2yl0Zbao7zrWa6KsJm6nXFNqI%2FzzEMCxyWi90dyKBj7uY8kBEcUeG%2Ffyl40RnHuoCtv8H7z2BfLHrVGlJ4CPYL9RFzA3gtuv0bHGmuK43MPj5qcAGOqUBgdptM5mauahOtiTigip2HwAOcxAp5SCGB0uK0VvM6BQZJjynz6u6Sx5Ez39wz%2FchN%2BLsAcD0oOtNzIXprS2xTDKiCPww6MRfvbEPWV5gDpVohTu1ORxQxCPhSJs1Gv5Oy4OulZD6PpawmyYPIS%2FXnNUDs3Q6pTvBEUyAJ2epA0fk%2FCiT36dL%2FPNeYQ3BTh5T4naNnRP3mmUWDI0OGVyoqqAoT42V&X-Amz-Signature=7164910c0e515406ec4ab559abd15a558b50abfa63e075e4ae3a913ec4e4af3b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4MJN6K%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1iDZLebqtVOt7PPb3KD4JiC3bx5je74oHX1bGzlLYCAiEAs0OEGKxyIIFYj3dIjpNKgi0%2Fvsm%2FKxmjkCunl%2BflFzcq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDD3jO6VmGAFTeE%2B6sircA3pa1PjLLqTzIvUj4HUcSvTVC%2FZdjvl3hNA9NZPp7dvVe0ANB9vzsMO7ZKSgKMWbE1xWGaLbYlDzXUU9Wv6%2BAcuvKcTxxBr1uAnxeAdCrzqSWcSF2KKyY%2ByxI%2FqSTjygSSpfB59FcjAPAnACqRtV0j3ApcEzTVRvkor6TxoEMb9JMYORzmiYR%2FIaOxsW2UmGbUZ%2Bx03iFSVCfJvdnMSjRm6Hm752UtOE0nxXDb3GNPWHUQGcawLP%2FrPVzVJfAFwujy1EnTC2VdSO%2BjIl7ybkN21j%2FJAvE5MBhgPVXFUU7Q%2F9i3Xgoz2PG6InnpwAfNLHJuf49UKdVdzrpc1GFWO%2FnyF27ZogVMVS9xO7HF3w3b3BTE%2FyTp4vCFawOU2ZZOOgp5c9J1ELU7oRZLEZjiUvvF2BW%2FjANRGBGyBgvQkuu1md6UIdZDH6dc6Gw2BUjZsHIRm69Q0h0ZGWk0jNRKc8NwK3pNxlmv%2FrvAVHbKwNV9K02LXwNr92YtIKS2glvlLfmASUivVEBaxiqheaQVQ2yl0Zbao7zrWa6KsJm6nXFNqI%2FzzEMCxyWi90dyKBj7uY8kBEcUeG%2Ffyl40RnHuoCtv8H7z2BfLHrVGlJ4CPYL9RFzA3gtuv0bHGmuK43MPj5qcAGOqUBgdptM5mauahOtiTigip2HwAOcxAp5SCGB0uK0VvM6BQZJjynz6u6Sx5Ez39wz%2FchN%2BLsAcD0oOtNzIXprS2xTDKiCPww6MRfvbEPWV5gDpVohTu1ORxQxCPhSJs1Gv5Oy4OulZD6PpawmyYPIS%2FXnNUDs3Q6pTvBEUyAJ2epA0fk%2FCiT36dL%2FPNeYQ3BTh5T4naNnRP3mmUWDI0OGVyoqqAoT42V&X-Amz-Signature=7f1f70756ae035f6d5a2d2f44d6a17eeed8ba586fef1f490979cd1d3ccfbe25d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4MJN6K%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1iDZLebqtVOt7PPb3KD4JiC3bx5je74oHX1bGzlLYCAiEAs0OEGKxyIIFYj3dIjpNKgi0%2Fvsm%2FKxmjkCunl%2BflFzcq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDD3jO6VmGAFTeE%2B6sircA3pa1PjLLqTzIvUj4HUcSvTVC%2FZdjvl3hNA9NZPp7dvVe0ANB9vzsMO7ZKSgKMWbE1xWGaLbYlDzXUU9Wv6%2BAcuvKcTxxBr1uAnxeAdCrzqSWcSF2KKyY%2ByxI%2FqSTjygSSpfB59FcjAPAnACqRtV0j3ApcEzTVRvkor6TxoEMb9JMYORzmiYR%2FIaOxsW2UmGbUZ%2Bx03iFSVCfJvdnMSjRm6Hm752UtOE0nxXDb3GNPWHUQGcawLP%2FrPVzVJfAFwujy1EnTC2VdSO%2BjIl7ybkN21j%2FJAvE5MBhgPVXFUU7Q%2F9i3Xgoz2PG6InnpwAfNLHJuf49UKdVdzrpc1GFWO%2FnyF27ZogVMVS9xO7HF3w3b3BTE%2FyTp4vCFawOU2ZZOOgp5c9J1ELU7oRZLEZjiUvvF2BW%2FjANRGBGyBgvQkuu1md6UIdZDH6dc6Gw2BUjZsHIRm69Q0h0ZGWk0jNRKc8NwK3pNxlmv%2FrvAVHbKwNV9K02LXwNr92YtIKS2glvlLfmASUivVEBaxiqheaQVQ2yl0Zbao7zrWa6KsJm6nXFNqI%2FzzEMCxyWi90dyKBj7uY8kBEcUeG%2Ffyl40RnHuoCtv8H7z2BfLHrVGlJ4CPYL9RFzA3gtuv0bHGmuK43MPj5qcAGOqUBgdptM5mauahOtiTigip2HwAOcxAp5SCGB0uK0VvM6BQZJjynz6u6Sx5Ez39wz%2FchN%2BLsAcD0oOtNzIXprS2xTDKiCPww6MRfvbEPWV5gDpVohTu1ORxQxCPhSJs1Gv5Oy4OulZD6PpawmyYPIS%2FXnNUDs3Q6pTvBEUyAJ2epA0fk%2FCiT36dL%2FPNeYQ3BTh5T4naNnRP3mmUWDI0OGVyoqqAoT42V&X-Amz-Signature=081593b39807feffcd9c3b202a53e51540e518d82c36ed194c1df79cc6d1d9e7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4MJN6K%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1iDZLebqtVOt7PPb3KD4JiC3bx5je74oHX1bGzlLYCAiEAs0OEGKxyIIFYj3dIjpNKgi0%2Fvsm%2FKxmjkCunl%2BflFzcq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDD3jO6VmGAFTeE%2B6sircA3pa1PjLLqTzIvUj4HUcSvTVC%2FZdjvl3hNA9NZPp7dvVe0ANB9vzsMO7ZKSgKMWbE1xWGaLbYlDzXUU9Wv6%2BAcuvKcTxxBr1uAnxeAdCrzqSWcSF2KKyY%2ByxI%2FqSTjygSSpfB59FcjAPAnACqRtV0j3ApcEzTVRvkor6TxoEMb9JMYORzmiYR%2FIaOxsW2UmGbUZ%2Bx03iFSVCfJvdnMSjRm6Hm752UtOE0nxXDb3GNPWHUQGcawLP%2FrPVzVJfAFwujy1EnTC2VdSO%2BjIl7ybkN21j%2FJAvE5MBhgPVXFUU7Q%2F9i3Xgoz2PG6InnpwAfNLHJuf49UKdVdzrpc1GFWO%2FnyF27ZogVMVS9xO7HF3w3b3BTE%2FyTp4vCFawOU2ZZOOgp5c9J1ELU7oRZLEZjiUvvF2BW%2FjANRGBGyBgvQkuu1md6UIdZDH6dc6Gw2BUjZsHIRm69Q0h0ZGWk0jNRKc8NwK3pNxlmv%2FrvAVHbKwNV9K02LXwNr92YtIKS2glvlLfmASUivVEBaxiqheaQVQ2yl0Zbao7zrWa6KsJm6nXFNqI%2FzzEMCxyWi90dyKBj7uY8kBEcUeG%2Ffyl40RnHuoCtv8H7z2BfLHrVGlJ4CPYL9RFzA3gtuv0bHGmuK43MPj5qcAGOqUBgdptM5mauahOtiTigip2HwAOcxAp5SCGB0uK0VvM6BQZJjynz6u6Sx5Ez39wz%2FchN%2BLsAcD0oOtNzIXprS2xTDKiCPww6MRfvbEPWV5gDpVohTu1ORxQxCPhSJs1Gv5Oy4OulZD6PpawmyYPIS%2FXnNUDs3Q6pTvBEUyAJ2epA0fk%2FCiT36dL%2FPNeYQ3BTh5T4naNnRP3mmUWDI0OGVyoqqAoT42V&X-Amz-Signature=40a2851eb86a26a913839cee150141f2baf82ea03b3fa5d92c986c2803eaa1be&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
