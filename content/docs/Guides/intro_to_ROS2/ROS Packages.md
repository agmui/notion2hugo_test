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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXFUNASR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD%2BHH5YXNBbfc1oKVTf2EFiVvRqIq4F%2F5EXaI6F56Qd7AIgRChKkFtD1Cq0gQNkEyrvtGBjf96oM5ip%2FpV00ymy6m0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDM9k2ykDkUwPSa6QnSrcAx7iCURBbaPExReiQAe9ayxx%2FwUdKjbBmf7xyPjcNaQ0e7SB9zFj%2BllNM4w5UJtMmfY6sOyjOMrIkbcSgIXLhpsQawKxTqPuG2p912ICkV8xJKXkPTow%2FLdfuJeFSpKKMl7mmTjm8RMl%2BKfNKQg6vcujg3GieSLRUIq%2FSiI1QMXhLLGbUZPcZ8AMesURIL790OT8Lhht6WuthpXhwsxx3jTiQwbNvFJk3j9rAm2zf5UV2PdC2nYVwIg5CSrus7co5m6kZsccWU42u2BrYU%2Bqs9SMPbzm%2BP0%2FuawABNEt2CSKxOcIRg6p%2B12HmqpE6YkRabDNRj%2B77ueO6XrVQcPm6AsXO%2FALdaAkMDhKV6uQNHnUQpNGogqYw9yM8GS0HVeKylUw3vqcHz8%2BdgZiKnP9VXhCTLTz3b9wyMpgQvWMlznl1UsyIeCxVvb43bEiZ7AQJXTsUMX4K%2F%2BVtFiMfdQRcu4PD91U4xfbACBegaBJ%2B6fGDM0iSV2VuSJfQ4DeqGd%2BQLt3Ix%2FdJ%2BIPz%2F9NTgb9u2q942Xo1xFsJazPWLbYMDn79jstszVhJe4u54ONaUrjUZ7%2F2bS3zmuOcjvR5KSqk0pHLbYuMU3K2acFHMM4%2BSl2C3%2F7OU5fgpceQneaMMyWvskGOqUBDCM3f6sitNMmgZq9Vq86XoZokhoK2Ymrv2P6uimbrskGrpWKD0Jwpa%2BSuzltvXUbpOWIT%2B1%2Fwm9Iro4f%2BVsMnzFJeK%2FLaSGwV06CBEhXV2CdQMReEXE2F%2BaQauPc7Ne1KMupJ8n%2FHc9GPSpX5L70k%2FCEr6yDrYj8CntPb8qDma90VcTr5oLswbmd8lcb5vnbKwjhS16TZR67xPDaQxXkgjROK7De&X-Amz-Signature=b45acc38caec2dd14610e110d0282f5211297f208e7da73324fe5661525369f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXFUNASR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD%2BHH5YXNBbfc1oKVTf2EFiVvRqIq4F%2F5EXaI6F56Qd7AIgRChKkFtD1Cq0gQNkEyrvtGBjf96oM5ip%2FpV00ymy6m0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDM9k2ykDkUwPSa6QnSrcAx7iCURBbaPExReiQAe9ayxx%2FwUdKjbBmf7xyPjcNaQ0e7SB9zFj%2BllNM4w5UJtMmfY6sOyjOMrIkbcSgIXLhpsQawKxTqPuG2p912ICkV8xJKXkPTow%2FLdfuJeFSpKKMl7mmTjm8RMl%2BKfNKQg6vcujg3GieSLRUIq%2FSiI1QMXhLLGbUZPcZ8AMesURIL790OT8Lhht6WuthpXhwsxx3jTiQwbNvFJk3j9rAm2zf5UV2PdC2nYVwIg5CSrus7co5m6kZsccWU42u2BrYU%2Bqs9SMPbzm%2BP0%2FuawABNEt2CSKxOcIRg6p%2B12HmqpE6YkRabDNRj%2B77ueO6XrVQcPm6AsXO%2FALdaAkMDhKV6uQNHnUQpNGogqYw9yM8GS0HVeKylUw3vqcHz8%2BdgZiKnP9VXhCTLTz3b9wyMpgQvWMlznl1UsyIeCxVvb43bEiZ7AQJXTsUMX4K%2F%2BVtFiMfdQRcu4PD91U4xfbACBegaBJ%2B6fGDM0iSV2VuSJfQ4DeqGd%2BQLt3Ix%2FdJ%2BIPz%2F9NTgb9u2q942Xo1xFsJazPWLbYMDn79jstszVhJe4u54ONaUrjUZ7%2F2bS3zmuOcjvR5KSqk0pHLbYuMU3K2acFHMM4%2BSl2C3%2F7OU5fgpceQneaMMyWvskGOqUBDCM3f6sitNMmgZq9Vq86XoZokhoK2Ymrv2P6uimbrskGrpWKD0Jwpa%2BSuzltvXUbpOWIT%2B1%2Fwm9Iro4f%2BVsMnzFJeK%2FLaSGwV06CBEhXV2CdQMReEXE2F%2BaQauPc7Ne1KMupJ8n%2FHc9GPSpX5L70k%2FCEr6yDrYj8CntPb8qDma90VcTr5oLswbmd8lcb5vnbKwjhS16TZR67xPDaQxXkgjROK7De&X-Amz-Signature=93ef30d716546f10471cc7b87d2ee80f848207b9aadf9a136f09974a6adbb90e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXFUNASR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD%2BHH5YXNBbfc1oKVTf2EFiVvRqIq4F%2F5EXaI6F56Qd7AIgRChKkFtD1Cq0gQNkEyrvtGBjf96oM5ip%2FpV00ymy6m0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDM9k2ykDkUwPSa6QnSrcAx7iCURBbaPExReiQAe9ayxx%2FwUdKjbBmf7xyPjcNaQ0e7SB9zFj%2BllNM4w5UJtMmfY6sOyjOMrIkbcSgIXLhpsQawKxTqPuG2p912ICkV8xJKXkPTow%2FLdfuJeFSpKKMl7mmTjm8RMl%2BKfNKQg6vcujg3GieSLRUIq%2FSiI1QMXhLLGbUZPcZ8AMesURIL790OT8Lhht6WuthpXhwsxx3jTiQwbNvFJk3j9rAm2zf5UV2PdC2nYVwIg5CSrus7co5m6kZsccWU42u2BrYU%2Bqs9SMPbzm%2BP0%2FuawABNEt2CSKxOcIRg6p%2B12HmqpE6YkRabDNRj%2B77ueO6XrVQcPm6AsXO%2FALdaAkMDhKV6uQNHnUQpNGogqYw9yM8GS0HVeKylUw3vqcHz8%2BdgZiKnP9VXhCTLTz3b9wyMpgQvWMlznl1UsyIeCxVvb43bEiZ7AQJXTsUMX4K%2F%2BVtFiMfdQRcu4PD91U4xfbACBegaBJ%2B6fGDM0iSV2VuSJfQ4DeqGd%2BQLt3Ix%2FdJ%2BIPz%2F9NTgb9u2q942Xo1xFsJazPWLbYMDn79jstszVhJe4u54ONaUrjUZ7%2F2bS3zmuOcjvR5KSqk0pHLbYuMU3K2acFHMM4%2BSl2C3%2F7OU5fgpceQneaMMyWvskGOqUBDCM3f6sitNMmgZq9Vq86XoZokhoK2Ymrv2P6uimbrskGrpWKD0Jwpa%2BSuzltvXUbpOWIT%2B1%2Fwm9Iro4f%2BVsMnzFJeK%2FLaSGwV06CBEhXV2CdQMReEXE2F%2BaQauPc7Ne1KMupJ8n%2FHc9GPSpX5L70k%2FCEr6yDrYj8CntPb8qDma90VcTr5oLswbmd8lcb5vnbKwjhS16TZR67xPDaQxXkgjROK7De&X-Amz-Signature=f9c20219cea76190bd1a349722e9de5c59b92141fbcdd20e3527494fb3a374f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXFUNASR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD%2BHH5YXNBbfc1oKVTf2EFiVvRqIq4F%2F5EXaI6F56Qd7AIgRChKkFtD1Cq0gQNkEyrvtGBjf96oM5ip%2FpV00ymy6m0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDM9k2ykDkUwPSa6QnSrcAx7iCURBbaPExReiQAe9ayxx%2FwUdKjbBmf7xyPjcNaQ0e7SB9zFj%2BllNM4w5UJtMmfY6sOyjOMrIkbcSgIXLhpsQawKxTqPuG2p912ICkV8xJKXkPTow%2FLdfuJeFSpKKMl7mmTjm8RMl%2BKfNKQg6vcujg3GieSLRUIq%2FSiI1QMXhLLGbUZPcZ8AMesURIL790OT8Lhht6WuthpXhwsxx3jTiQwbNvFJk3j9rAm2zf5UV2PdC2nYVwIg5CSrus7co5m6kZsccWU42u2BrYU%2Bqs9SMPbzm%2BP0%2FuawABNEt2CSKxOcIRg6p%2B12HmqpE6YkRabDNRj%2B77ueO6XrVQcPm6AsXO%2FALdaAkMDhKV6uQNHnUQpNGogqYw9yM8GS0HVeKylUw3vqcHz8%2BdgZiKnP9VXhCTLTz3b9wyMpgQvWMlznl1UsyIeCxVvb43bEiZ7AQJXTsUMX4K%2F%2BVtFiMfdQRcu4PD91U4xfbACBegaBJ%2B6fGDM0iSV2VuSJfQ4DeqGd%2BQLt3Ix%2FdJ%2BIPz%2F9NTgb9u2q942Xo1xFsJazPWLbYMDn79jstszVhJe4u54ONaUrjUZ7%2F2bS3zmuOcjvR5KSqk0pHLbYuMU3K2acFHMM4%2BSl2C3%2F7OU5fgpceQneaMMyWvskGOqUBDCM3f6sitNMmgZq9Vq86XoZokhoK2Ymrv2P6uimbrskGrpWKD0Jwpa%2BSuzltvXUbpOWIT%2B1%2Fwm9Iro4f%2BVsMnzFJeK%2FLaSGwV06CBEhXV2CdQMReEXE2F%2BaQauPc7Ne1KMupJ8n%2FHc9GPSpX5L70k%2FCEr6yDrYj8CntPb8qDma90VcTr5oLswbmd8lcb5vnbKwjhS16TZR67xPDaQxXkgjROK7De&X-Amz-Signature=aa3e0eec6dc7dd4e9246b60c040023663d89a33a2f6f7228597189662fe81b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXFUNASR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD%2BHH5YXNBbfc1oKVTf2EFiVvRqIq4F%2F5EXaI6F56Qd7AIgRChKkFtD1Cq0gQNkEyrvtGBjf96oM5ip%2FpV00ymy6m0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDM9k2ykDkUwPSa6QnSrcAx7iCURBbaPExReiQAe9ayxx%2FwUdKjbBmf7xyPjcNaQ0e7SB9zFj%2BllNM4w5UJtMmfY6sOyjOMrIkbcSgIXLhpsQawKxTqPuG2p912ICkV8xJKXkPTow%2FLdfuJeFSpKKMl7mmTjm8RMl%2BKfNKQg6vcujg3GieSLRUIq%2FSiI1QMXhLLGbUZPcZ8AMesURIL790OT8Lhht6WuthpXhwsxx3jTiQwbNvFJk3j9rAm2zf5UV2PdC2nYVwIg5CSrus7co5m6kZsccWU42u2BrYU%2Bqs9SMPbzm%2BP0%2FuawABNEt2CSKxOcIRg6p%2B12HmqpE6YkRabDNRj%2B77ueO6XrVQcPm6AsXO%2FALdaAkMDhKV6uQNHnUQpNGogqYw9yM8GS0HVeKylUw3vqcHz8%2BdgZiKnP9VXhCTLTz3b9wyMpgQvWMlznl1UsyIeCxVvb43bEiZ7AQJXTsUMX4K%2F%2BVtFiMfdQRcu4PD91U4xfbACBegaBJ%2B6fGDM0iSV2VuSJfQ4DeqGd%2BQLt3Ix%2FdJ%2BIPz%2F9NTgb9u2q942Xo1xFsJazPWLbYMDn79jstszVhJe4u54ONaUrjUZ7%2F2bS3zmuOcjvR5KSqk0pHLbYuMU3K2acFHMM4%2BSl2C3%2F7OU5fgpceQneaMMyWvskGOqUBDCM3f6sitNMmgZq9Vq86XoZokhoK2Ymrv2P6uimbrskGrpWKD0Jwpa%2BSuzltvXUbpOWIT%2B1%2Fwm9Iro4f%2BVsMnzFJeK%2FLaSGwV06CBEhXV2CdQMReEXE2F%2BaQauPc7Ne1KMupJ8n%2FHc9GPSpX5L70k%2FCEr6yDrYj8CntPb8qDma90VcTr5oLswbmd8lcb5vnbKwjhS16TZR67xPDaQxXkgjROK7De&X-Amz-Signature=551ef83bcfeb611fb0af1c17ee0d999a81bce2667209ab7d8e31a3fc413c2941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXFUNASR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD%2BHH5YXNBbfc1oKVTf2EFiVvRqIq4F%2F5EXaI6F56Qd7AIgRChKkFtD1Cq0gQNkEyrvtGBjf96oM5ip%2FpV00ymy6m0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDM9k2ykDkUwPSa6QnSrcAx7iCURBbaPExReiQAe9ayxx%2FwUdKjbBmf7xyPjcNaQ0e7SB9zFj%2BllNM4w5UJtMmfY6sOyjOMrIkbcSgIXLhpsQawKxTqPuG2p912ICkV8xJKXkPTow%2FLdfuJeFSpKKMl7mmTjm8RMl%2BKfNKQg6vcujg3GieSLRUIq%2FSiI1QMXhLLGbUZPcZ8AMesURIL790OT8Lhht6WuthpXhwsxx3jTiQwbNvFJk3j9rAm2zf5UV2PdC2nYVwIg5CSrus7co5m6kZsccWU42u2BrYU%2Bqs9SMPbzm%2BP0%2FuawABNEt2CSKxOcIRg6p%2B12HmqpE6YkRabDNRj%2B77ueO6XrVQcPm6AsXO%2FALdaAkMDhKV6uQNHnUQpNGogqYw9yM8GS0HVeKylUw3vqcHz8%2BdgZiKnP9VXhCTLTz3b9wyMpgQvWMlznl1UsyIeCxVvb43bEiZ7AQJXTsUMX4K%2F%2BVtFiMfdQRcu4PD91U4xfbACBegaBJ%2B6fGDM0iSV2VuSJfQ4DeqGd%2BQLt3Ix%2FdJ%2BIPz%2F9NTgb9u2q942Xo1xFsJazPWLbYMDn79jstszVhJe4u54ONaUrjUZ7%2F2bS3zmuOcjvR5KSqk0pHLbYuMU3K2acFHMM4%2BSl2C3%2F7OU5fgpceQneaMMyWvskGOqUBDCM3f6sitNMmgZq9Vq86XoZokhoK2Ymrv2P6uimbrskGrpWKD0Jwpa%2BSuzltvXUbpOWIT%2B1%2Fwm9Iro4f%2BVsMnzFJeK%2FLaSGwV06CBEhXV2CdQMReEXE2F%2BaQauPc7Ne1KMupJ8n%2FHc9GPSpX5L70k%2FCEr6yDrYj8CntPb8qDma90VcTr5oLswbmd8lcb5vnbKwjhS16TZR67xPDaQxXkgjROK7De&X-Amz-Signature=4b8f92a5bcc6838cffed12b7244bedb60509af950b9808f32455fed584a03ca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXFUNASR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD%2BHH5YXNBbfc1oKVTf2EFiVvRqIq4F%2F5EXaI6F56Qd7AIgRChKkFtD1Cq0gQNkEyrvtGBjf96oM5ip%2FpV00ymy6m0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDM9k2ykDkUwPSa6QnSrcAx7iCURBbaPExReiQAe9ayxx%2FwUdKjbBmf7xyPjcNaQ0e7SB9zFj%2BllNM4w5UJtMmfY6sOyjOMrIkbcSgIXLhpsQawKxTqPuG2p912ICkV8xJKXkPTow%2FLdfuJeFSpKKMl7mmTjm8RMl%2BKfNKQg6vcujg3GieSLRUIq%2FSiI1QMXhLLGbUZPcZ8AMesURIL790OT8Lhht6WuthpXhwsxx3jTiQwbNvFJk3j9rAm2zf5UV2PdC2nYVwIg5CSrus7co5m6kZsccWU42u2BrYU%2Bqs9SMPbzm%2BP0%2FuawABNEt2CSKxOcIRg6p%2B12HmqpE6YkRabDNRj%2B77ueO6XrVQcPm6AsXO%2FALdaAkMDhKV6uQNHnUQpNGogqYw9yM8GS0HVeKylUw3vqcHz8%2BdgZiKnP9VXhCTLTz3b9wyMpgQvWMlznl1UsyIeCxVvb43bEiZ7AQJXTsUMX4K%2F%2BVtFiMfdQRcu4PD91U4xfbACBegaBJ%2B6fGDM0iSV2VuSJfQ4DeqGd%2BQLt3Ix%2FdJ%2BIPz%2F9NTgb9u2q942Xo1xFsJazPWLbYMDn79jstszVhJe4u54ONaUrjUZ7%2F2bS3zmuOcjvR5KSqk0pHLbYuMU3K2acFHMM4%2BSl2C3%2F7OU5fgpceQneaMMyWvskGOqUBDCM3f6sitNMmgZq9Vq86XoZokhoK2Ymrv2P6uimbrskGrpWKD0Jwpa%2BSuzltvXUbpOWIT%2B1%2Fwm9Iro4f%2BVsMnzFJeK%2FLaSGwV06CBEhXV2CdQMReEXE2F%2BaQauPc7Ne1KMupJ8n%2FHc9GPSpX5L70k%2FCEr6yDrYj8CntPb8qDma90VcTr5oLswbmd8lcb5vnbKwjhS16TZR67xPDaQxXkgjROK7De&X-Amz-Signature=fec21ed6a8e299e492b165b3a8a749d291429168ce8c7dcfcd810f55734d73bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
