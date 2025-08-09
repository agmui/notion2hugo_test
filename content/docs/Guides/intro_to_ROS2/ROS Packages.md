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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY6DGSA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYN67jB9%2FS%2Bktjy%2BBIPJPSePoua0IxF2JSQvskdxt9OAiEArDo04ymsoApbaJWAY9NmxCRJSw66whNs42%2Bpw0JxkdsqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaO46WUuC58mVLaVyrcA1zC547QibpQAbwDH0PoP%2F266cwFDYZwwItCo3rqeTbS6Ed4PWw2EOpenGNi%2Fm%2BOv9ebzrHOtR36GaTNMB73H5UQ%2FznBWNpaQbC3Stj0rHOctjtOMVfNMLZ8W44M%2FU00PgehjKm8OMAbxErn04umVl%2FpzNwPXi7pDPHeQyhGH3kBegL%2Bh5t95agSc8jTtTf4KdA6su4xARgZDPbPfoLB1PTkWVYsrnjkt26quKk0ZxeMnaiPSztiAFkECVJLCOyJf9u6kl9AP94LVRoLXYbItNbXngaU8duLIwL9wEH0fFfV%2BVuLRXHrehvvad4DD%2FtsPmE03raR57R1D0TIXLDTuspGarNlJs0X7KCZBrDc9Bwc7OEWq%2B5ZnUK0%2F9g95UKvQdr0yIKyu%2Bp%2BMJK8Ez5XH9LrTmAi9NQs%2BF01okmHFKhceoX%2FDqfVhsjvQHLX7vJWQ0UgOx06FA7dWAW84is%2BE84%2BnpdIUW%2BbdgU438B6usHi5czxIKtBhLDW%2FmJXWNYZpImEUKQI0eDU6I5al3G5GVIa2vdE4FiR25XAWPEh3hFnHwRXeTkgaB37ysAmXxemlyQrd0Hi%2B6X8Irvjb6Bo%2FMEjuuxsbeif63e04uNqlYp28Brug6PncM0ZMRa5MMbl3MQGOqUBRYIx%2BubE27EbFoP3%2FQVYRo%2BuEs4RmHJI035w0fgsdaavz52Yy6NSHhvyyUFz1i6jTKm83esmCHaQlP7Bjedc3WUwqw6JErkuJmrgssb8TjPBmyzHuW99IqrXKIs%2Fa81EoiiFx5qv41GJiigqeeGWvAYxNRzcDngodLlHsRJZks99kUpIiy9VRNf0MQf2RpFop2ICewXXvqnXGQZ%2FYCrouXd7g5wl&X-Amz-Signature=eb51bf97018af96956a7b40f7dd95610acf5d5ba793812b523b18e20d76cf383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY6DGSA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYN67jB9%2FS%2Bktjy%2BBIPJPSePoua0IxF2JSQvskdxt9OAiEArDo04ymsoApbaJWAY9NmxCRJSw66whNs42%2Bpw0JxkdsqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaO46WUuC58mVLaVyrcA1zC547QibpQAbwDH0PoP%2F266cwFDYZwwItCo3rqeTbS6Ed4PWw2EOpenGNi%2Fm%2BOv9ebzrHOtR36GaTNMB73H5UQ%2FznBWNpaQbC3Stj0rHOctjtOMVfNMLZ8W44M%2FU00PgehjKm8OMAbxErn04umVl%2FpzNwPXi7pDPHeQyhGH3kBegL%2Bh5t95agSc8jTtTf4KdA6su4xARgZDPbPfoLB1PTkWVYsrnjkt26quKk0ZxeMnaiPSztiAFkECVJLCOyJf9u6kl9AP94LVRoLXYbItNbXngaU8duLIwL9wEH0fFfV%2BVuLRXHrehvvad4DD%2FtsPmE03raR57R1D0TIXLDTuspGarNlJs0X7KCZBrDc9Bwc7OEWq%2B5ZnUK0%2F9g95UKvQdr0yIKyu%2Bp%2BMJK8Ez5XH9LrTmAi9NQs%2BF01okmHFKhceoX%2FDqfVhsjvQHLX7vJWQ0UgOx06FA7dWAW84is%2BE84%2BnpdIUW%2BbdgU438B6usHi5czxIKtBhLDW%2FmJXWNYZpImEUKQI0eDU6I5al3G5GVIa2vdE4FiR25XAWPEh3hFnHwRXeTkgaB37ysAmXxemlyQrd0Hi%2B6X8Irvjb6Bo%2FMEjuuxsbeif63e04uNqlYp28Brug6PncM0ZMRa5MMbl3MQGOqUBRYIx%2BubE27EbFoP3%2FQVYRo%2BuEs4RmHJI035w0fgsdaavz52Yy6NSHhvyyUFz1i6jTKm83esmCHaQlP7Bjedc3WUwqw6JErkuJmrgssb8TjPBmyzHuW99IqrXKIs%2Fa81EoiiFx5qv41GJiigqeeGWvAYxNRzcDngodLlHsRJZks99kUpIiy9VRNf0MQf2RpFop2ICewXXvqnXGQZ%2FYCrouXd7g5wl&X-Amz-Signature=f373e68af332ac6ccf742c53ace7ec1dd57a80bfb3f5018afd22c4011385355b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY6DGSA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYN67jB9%2FS%2Bktjy%2BBIPJPSePoua0IxF2JSQvskdxt9OAiEArDo04ymsoApbaJWAY9NmxCRJSw66whNs42%2Bpw0JxkdsqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaO46WUuC58mVLaVyrcA1zC547QibpQAbwDH0PoP%2F266cwFDYZwwItCo3rqeTbS6Ed4PWw2EOpenGNi%2Fm%2BOv9ebzrHOtR36GaTNMB73H5UQ%2FznBWNpaQbC3Stj0rHOctjtOMVfNMLZ8W44M%2FU00PgehjKm8OMAbxErn04umVl%2FpzNwPXi7pDPHeQyhGH3kBegL%2Bh5t95agSc8jTtTf4KdA6su4xARgZDPbPfoLB1PTkWVYsrnjkt26quKk0ZxeMnaiPSztiAFkECVJLCOyJf9u6kl9AP94LVRoLXYbItNbXngaU8duLIwL9wEH0fFfV%2BVuLRXHrehvvad4DD%2FtsPmE03raR57R1D0TIXLDTuspGarNlJs0X7KCZBrDc9Bwc7OEWq%2B5ZnUK0%2F9g95UKvQdr0yIKyu%2Bp%2BMJK8Ez5XH9LrTmAi9NQs%2BF01okmHFKhceoX%2FDqfVhsjvQHLX7vJWQ0UgOx06FA7dWAW84is%2BE84%2BnpdIUW%2BbdgU438B6usHi5czxIKtBhLDW%2FmJXWNYZpImEUKQI0eDU6I5al3G5GVIa2vdE4FiR25XAWPEh3hFnHwRXeTkgaB37ysAmXxemlyQrd0Hi%2B6X8Irvjb6Bo%2FMEjuuxsbeif63e04uNqlYp28Brug6PncM0ZMRa5MMbl3MQGOqUBRYIx%2BubE27EbFoP3%2FQVYRo%2BuEs4RmHJI035w0fgsdaavz52Yy6NSHhvyyUFz1i6jTKm83esmCHaQlP7Bjedc3WUwqw6JErkuJmrgssb8TjPBmyzHuW99IqrXKIs%2Fa81EoiiFx5qv41GJiigqeeGWvAYxNRzcDngodLlHsRJZks99kUpIiy9VRNf0MQf2RpFop2ICewXXvqnXGQZ%2FYCrouXd7g5wl&X-Amz-Signature=a10fbca692dfa1269cdad2b0f8a09722e130a85360b1b0cdbc7280405aa5432f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY6DGSA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYN67jB9%2FS%2Bktjy%2BBIPJPSePoua0IxF2JSQvskdxt9OAiEArDo04ymsoApbaJWAY9NmxCRJSw66whNs42%2Bpw0JxkdsqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaO46WUuC58mVLaVyrcA1zC547QibpQAbwDH0PoP%2F266cwFDYZwwItCo3rqeTbS6Ed4PWw2EOpenGNi%2Fm%2BOv9ebzrHOtR36GaTNMB73H5UQ%2FznBWNpaQbC3Stj0rHOctjtOMVfNMLZ8W44M%2FU00PgehjKm8OMAbxErn04umVl%2FpzNwPXi7pDPHeQyhGH3kBegL%2Bh5t95agSc8jTtTf4KdA6su4xARgZDPbPfoLB1PTkWVYsrnjkt26quKk0ZxeMnaiPSztiAFkECVJLCOyJf9u6kl9AP94LVRoLXYbItNbXngaU8duLIwL9wEH0fFfV%2BVuLRXHrehvvad4DD%2FtsPmE03raR57R1D0TIXLDTuspGarNlJs0X7KCZBrDc9Bwc7OEWq%2B5ZnUK0%2F9g95UKvQdr0yIKyu%2Bp%2BMJK8Ez5XH9LrTmAi9NQs%2BF01okmHFKhceoX%2FDqfVhsjvQHLX7vJWQ0UgOx06FA7dWAW84is%2BE84%2BnpdIUW%2BbdgU438B6usHi5czxIKtBhLDW%2FmJXWNYZpImEUKQI0eDU6I5al3G5GVIa2vdE4FiR25XAWPEh3hFnHwRXeTkgaB37ysAmXxemlyQrd0Hi%2B6X8Irvjb6Bo%2FMEjuuxsbeif63e04uNqlYp28Brug6PncM0ZMRa5MMbl3MQGOqUBRYIx%2BubE27EbFoP3%2FQVYRo%2BuEs4RmHJI035w0fgsdaavz52Yy6NSHhvyyUFz1i6jTKm83esmCHaQlP7Bjedc3WUwqw6JErkuJmrgssb8TjPBmyzHuW99IqrXKIs%2Fa81EoiiFx5qv41GJiigqeeGWvAYxNRzcDngodLlHsRJZks99kUpIiy9VRNf0MQf2RpFop2ICewXXvqnXGQZ%2FYCrouXd7g5wl&X-Amz-Signature=f1e2d6938a081d407a03e9f29eddcf0699a382067593c5076f05cb590d41f32f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY6DGSA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYN67jB9%2FS%2Bktjy%2BBIPJPSePoua0IxF2JSQvskdxt9OAiEArDo04ymsoApbaJWAY9NmxCRJSw66whNs42%2Bpw0JxkdsqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaO46WUuC58mVLaVyrcA1zC547QibpQAbwDH0PoP%2F266cwFDYZwwItCo3rqeTbS6Ed4PWw2EOpenGNi%2Fm%2BOv9ebzrHOtR36GaTNMB73H5UQ%2FznBWNpaQbC3Stj0rHOctjtOMVfNMLZ8W44M%2FU00PgehjKm8OMAbxErn04umVl%2FpzNwPXi7pDPHeQyhGH3kBegL%2Bh5t95agSc8jTtTf4KdA6su4xARgZDPbPfoLB1PTkWVYsrnjkt26quKk0ZxeMnaiPSztiAFkECVJLCOyJf9u6kl9AP94LVRoLXYbItNbXngaU8duLIwL9wEH0fFfV%2BVuLRXHrehvvad4DD%2FtsPmE03raR57R1D0TIXLDTuspGarNlJs0X7KCZBrDc9Bwc7OEWq%2B5ZnUK0%2F9g95UKvQdr0yIKyu%2Bp%2BMJK8Ez5XH9LrTmAi9NQs%2BF01okmHFKhceoX%2FDqfVhsjvQHLX7vJWQ0UgOx06FA7dWAW84is%2BE84%2BnpdIUW%2BbdgU438B6usHi5czxIKtBhLDW%2FmJXWNYZpImEUKQI0eDU6I5al3G5GVIa2vdE4FiR25XAWPEh3hFnHwRXeTkgaB37ysAmXxemlyQrd0Hi%2B6X8Irvjb6Bo%2FMEjuuxsbeif63e04uNqlYp28Brug6PncM0ZMRa5MMbl3MQGOqUBRYIx%2BubE27EbFoP3%2FQVYRo%2BuEs4RmHJI035w0fgsdaavz52Yy6NSHhvyyUFz1i6jTKm83esmCHaQlP7Bjedc3WUwqw6JErkuJmrgssb8TjPBmyzHuW99IqrXKIs%2Fa81EoiiFx5qv41GJiigqeeGWvAYxNRzcDngodLlHsRJZks99kUpIiy9VRNf0MQf2RpFop2ICewXXvqnXGQZ%2FYCrouXd7g5wl&X-Amz-Signature=02853b1b33533549128195213ec59cec6a214a65f52843b382602bb86e918efa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY6DGSA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYN67jB9%2FS%2Bktjy%2BBIPJPSePoua0IxF2JSQvskdxt9OAiEArDo04ymsoApbaJWAY9NmxCRJSw66whNs42%2Bpw0JxkdsqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaO46WUuC58mVLaVyrcA1zC547QibpQAbwDH0PoP%2F266cwFDYZwwItCo3rqeTbS6Ed4PWw2EOpenGNi%2Fm%2BOv9ebzrHOtR36GaTNMB73H5UQ%2FznBWNpaQbC3Stj0rHOctjtOMVfNMLZ8W44M%2FU00PgehjKm8OMAbxErn04umVl%2FpzNwPXi7pDPHeQyhGH3kBegL%2Bh5t95agSc8jTtTf4KdA6su4xARgZDPbPfoLB1PTkWVYsrnjkt26quKk0ZxeMnaiPSztiAFkECVJLCOyJf9u6kl9AP94LVRoLXYbItNbXngaU8duLIwL9wEH0fFfV%2BVuLRXHrehvvad4DD%2FtsPmE03raR57R1D0TIXLDTuspGarNlJs0X7KCZBrDc9Bwc7OEWq%2B5ZnUK0%2F9g95UKvQdr0yIKyu%2Bp%2BMJK8Ez5XH9LrTmAi9NQs%2BF01okmHFKhceoX%2FDqfVhsjvQHLX7vJWQ0UgOx06FA7dWAW84is%2BE84%2BnpdIUW%2BbdgU438B6usHi5czxIKtBhLDW%2FmJXWNYZpImEUKQI0eDU6I5al3G5GVIa2vdE4FiR25XAWPEh3hFnHwRXeTkgaB37ysAmXxemlyQrd0Hi%2B6X8Irvjb6Bo%2FMEjuuxsbeif63e04uNqlYp28Brug6PncM0ZMRa5MMbl3MQGOqUBRYIx%2BubE27EbFoP3%2FQVYRo%2BuEs4RmHJI035w0fgsdaavz52Yy6NSHhvyyUFz1i6jTKm83esmCHaQlP7Bjedc3WUwqw6JErkuJmrgssb8TjPBmyzHuW99IqrXKIs%2Fa81EoiiFx5qv41GJiigqeeGWvAYxNRzcDngodLlHsRJZks99kUpIiy9VRNf0MQf2RpFop2ICewXXvqnXGQZ%2FYCrouXd7g5wl&X-Amz-Signature=a7274d76a79d784f8692c60834683ee89c8f40e1bf4f7c39d8d100046546c498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY6DGSA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYN67jB9%2FS%2Bktjy%2BBIPJPSePoua0IxF2JSQvskdxt9OAiEArDo04ymsoApbaJWAY9NmxCRJSw66whNs42%2Bpw0JxkdsqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaO46WUuC58mVLaVyrcA1zC547QibpQAbwDH0PoP%2F266cwFDYZwwItCo3rqeTbS6Ed4PWw2EOpenGNi%2Fm%2BOv9ebzrHOtR36GaTNMB73H5UQ%2FznBWNpaQbC3Stj0rHOctjtOMVfNMLZ8W44M%2FU00PgehjKm8OMAbxErn04umVl%2FpzNwPXi7pDPHeQyhGH3kBegL%2Bh5t95agSc8jTtTf4KdA6su4xARgZDPbPfoLB1PTkWVYsrnjkt26quKk0ZxeMnaiPSztiAFkECVJLCOyJf9u6kl9AP94LVRoLXYbItNbXngaU8duLIwL9wEH0fFfV%2BVuLRXHrehvvad4DD%2FtsPmE03raR57R1D0TIXLDTuspGarNlJs0X7KCZBrDc9Bwc7OEWq%2B5ZnUK0%2F9g95UKvQdr0yIKyu%2Bp%2BMJK8Ez5XH9LrTmAi9NQs%2BF01okmHFKhceoX%2FDqfVhsjvQHLX7vJWQ0UgOx06FA7dWAW84is%2BE84%2BnpdIUW%2BbdgU438B6usHi5czxIKtBhLDW%2FmJXWNYZpImEUKQI0eDU6I5al3G5GVIa2vdE4FiR25XAWPEh3hFnHwRXeTkgaB37ysAmXxemlyQrd0Hi%2B6X8Irvjb6Bo%2FMEjuuxsbeif63e04uNqlYp28Brug6PncM0ZMRa5MMbl3MQGOqUBRYIx%2BubE27EbFoP3%2FQVYRo%2BuEs4RmHJI035w0fgsdaavz52Yy6NSHhvyyUFz1i6jTKm83esmCHaQlP7Bjedc3WUwqw6JErkuJmrgssb8TjPBmyzHuW99IqrXKIs%2Fa81EoiiFx5qv41GJiigqeeGWvAYxNRzcDngodLlHsRJZks99kUpIiy9VRNf0MQf2RpFop2ICewXXvqnXGQZ%2FYCrouXd7g5wl&X-Amz-Signature=4bcf4aeccea4de74d600629eac132e9d13d14287a38d33279a09483db60a21ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
