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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKGLIS5N%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T004522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLs0ZtJAeJU99VaTursP3rMMG2WyubNe%2B%2FU89OsuLcZwIgTvbUey6b0WmHD7aqFxPSKu1AJXVP%2BntJ%2Fw5%2FCKg9Cz8qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FgQrm%2BausYMxlD5yrcA6T2lO6Rg2uRlMPqLDGR1zAy4LObG4tP0G%2BGmFzW9rfPmEh5CJIrg9TUKMsZtM%2BWMewNhepS2th8MTf0njY%2FIWC2UsyLFN%2FXHJJOrAENDaqChJpvfxeYVnd%2BF86fzQuoq251tAtgrpHBOGX8U1AzSBlUXpiPAl60HHfO0RBNpEB9C1zhtL0nNptEgvJF7CSxzV4MESAac%2BTSe6sl6rupjJt42IqgFRd%2BWy4kNznsbsu2r0nyIZv%2FnI9xMHERx5AzH4hqpqn6GiJIA7zLwXWdhXdk%2Fxlr%2Fy1%2FMArPKrLbhnDsUJwNLBx7PyHvY%2FvdbonkIFRVPcefYumNJbX0P6xEcClUCDCobWkCjMQ2LNsblV1vnOGOj67rf38DSwwksVtAFWYR80Oox5gYvjfwRXdOoTd5wLL9IhWSM%2B%2BD8jFbk7BqZMKJWz1UHYffJ%2F%2Fznx4EcfHsPTiwuMpg6BdgY%2BGQRsjQwarUFpHrDSnPmUgXX0n6peApUrwPLSJCqd1suUKAnT%2FLfDCe2WicG0M8aXVxT91UpxMVJk%2FYGw0J8yTkQgmTWCqFUnQrabroQe%2BNSWyaRopQQ1lkoH2N6Di%2FeneiYz99U58odXKasXSwF0R1EVUhCFG33E1YL0DFXrvTMIuimMIGOqUBOfmr24Opx88kdOuO17U49xAx4sfH2VJiDzY09qSpuSIuIcRCEGsozWBMxOY7UAXhJ6uBXhD2MepQunJ3t%2BXSi42xlNA09acAr8GWr1ZRW41HzaN1XOojieqYXr3okYq%2BjaKYaT7O%2FI0TDwjB%2FIEzPInwWt3mHDsTB4H7yxkl%2F2Jrrb9M%2FTlxi4jCEVsdHd8MTmzU8nX4XVFqOYsSY0%2BbFjvfbBnR&X-Amz-Signature=d847c3098671e6f3df755f3aa2befb3a2600eb754fdf86442143fa887014109b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKGLIS5N%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T004522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLs0ZtJAeJU99VaTursP3rMMG2WyubNe%2B%2FU89OsuLcZwIgTvbUey6b0WmHD7aqFxPSKu1AJXVP%2BntJ%2Fw5%2FCKg9Cz8qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FgQrm%2BausYMxlD5yrcA6T2lO6Rg2uRlMPqLDGR1zAy4LObG4tP0G%2BGmFzW9rfPmEh5CJIrg9TUKMsZtM%2BWMewNhepS2th8MTf0njY%2FIWC2UsyLFN%2FXHJJOrAENDaqChJpvfxeYVnd%2BF86fzQuoq251tAtgrpHBOGX8U1AzSBlUXpiPAl60HHfO0RBNpEB9C1zhtL0nNptEgvJF7CSxzV4MESAac%2BTSe6sl6rupjJt42IqgFRd%2BWy4kNznsbsu2r0nyIZv%2FnI9xMHERx5AzH4hqpqn6GiJIA7zLwXWdhXdk%2Fxlr%2Fy1%2FMArPKrLbhnDsUJwNLBx7PyHvY%2FvdbonkIFRVPcefYumNJbX0P6xEcClUCDCobWkCjMQ2LNsblV1vnOGOj67rf38DSwwksVtAFWYR80Oox5gYvjfwRXdOoTd5wLL9IhWSM%2B%2BD8jFbk7BqZMKJWz1UHYffJ%2F%2Fznx4EcfHsPTiwuMpg6BdgY%2BGQRsjQwarUFpHrDSnPmUgXX0n6peApUrwPLSJCqd1suUKAnT%2FLfDCe2WicG0M8aXVxT91UpxMVJk%2FYGw0J8yTkQgmTWCqFUnQrabroQe%2BNSWyaRopQQ1lkoH2N6Di%2FeneiYz99U58odXKasXSwF0R1EVUhCFG33E1YL0DFXrvTMIuimMIGOqUBOfmr24Opx88kdOuO17U49xAx4sfH2VJiDzY09qSpuSIuIcRCEGsozWBMxOY7UAXhJ6uBXhD2MepQunJ3t%2BXSi42xlNA09acAr8GWr1ZRW41HzaN1XOojieqYXr3okYq%2BjaKYaT7O%2FI0TDwjB%2FIEzPInwWt3mHDsTB4H7yxkl%2F2Jrrb9M%2FTlxi4jCEVsdHd8MTmzU8nX4XVFqOYsSY0%2BbFjvfbBnR&X-Amz-Signature=87f229d94fbdb8be3ebe92f64a08905f466f2f76f6192ea7aa669bcc264de87a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKGLIS5N%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T004522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLs0ZtJAeJU99VaTursP3rMMG2WyubNe%2B%2FU89OsuLcZwIgTvbUey6b0WmHD7aqFxPSKu1AJXVP%2BntJ%2Fw5%2FCKg9Cz8qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FgQrm%2BausYMxlD5yrcA6T2lO6Rg2uRlMPqLDGR1zAy4LObG4tP0G%2BGmFzW9rfPmEh5CJIrg9TUKMsZtM%2BWMewNhepS2th8MTf0njY%2FIWC2UsyLFN%2FXHJJOrAENDaqChJpvfxeYVnd%2BF86fzQuoq251tAtgrpHBOGX8U1AzSBlUXpiPAl60HHfO0RBNpEB9C1zhtL0nNptEgvJF7CSxzV4MESAac%2BTSe6sl6rupjJt42IqgFRd%2BWy4kNznsbsu2r0nyIZv%2FnI9xMHERx5AzH4hqpqn6GiJIA7zLwXWdhXdk%2Fxlr%2Fy1%2FMArPKrLbhnDsUJwNLBx7PyHvY%2FvdbonkIFRVPcefYumNJbX0P6xEcClUCDCobWkCjMQ2LNsblV1vnOGOj67rf38DSwwksVtAFWYR80Oox5gYvjfwRXdOoTd5wLL9IhWSM%2B%2BD8jFbk7BqZMKJWz1UHYffJ%2F%2Fznx4EcfHsPTiwuMpg6BdgY%2BGQRsjQwarUFpHrDSnPmUgXX0n6peApUrwPLSJCqd1suUKAnT%2FLfDCe2WicG0M8aXVxT91UpxMVJk%2FYGw0J8yTkQgmTWCqFUnQrabroQe%2BNSWyaRopQQ1lkoH2N6Di%2FeneiYz99U58odXKasXSwF0R1EVUhCFG33E1YL0DFXrvTMIuimMIGOqUBOfmr24Opx88kdOuO17U49xAx4sfH2VJiDzY09qSpuSIuIcRCEGsozWBMxOY7UAXhJ6uBXhD2MepQunJ3t%2BXSi42xlNA09acAr8GWr1ZRW41HzaN1XOojieqYXr3okYq%2BjaKYaT7O%2FI0TDwjB%2FIEzPInwWt3mHDsTB4H7yxkl%2F2Jrrb9M%2FTlxi4jCEVsdHd8MTmzU8nX4XVFqOYsSY0%2BbFjvfbBnR&X-Amz-Signature=7f7b16de2b86b7a12ad7602caefa456680d7fd5724091e97ad9dddfa3c435ac3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKGLIS5N%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T004522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLs0ZtJAeJU99VaTursP3rMMG2WyubNe%2B%2FU89OsuLcZwIgTvbUey6b0WmHD7aqFxPSKu1AJXVP%2BntJ%2Fw5%2FCKg9Cz8qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FgQrm%2BausYMxlD5yrcA6T2lO6Rg2uRlMPqLDGR1zAy4LObG4tP0G%2BGmFzW9rfPmEh5CJIrg9TUKMsZtM%2BWMewNhepS2th8MTf0njY%2FIWC2UsyLFN%2FXHJJOrAENDaqChJpvfxeYVnd%2BF86fzQuoq251tAtgrpHBOGX8U1AzSBlUXpiPAl60HHfO0RBNpEB9C1zhtL0nNptEgvJF7CSxzV4MESAac%2BTSe6sl6rupjJt42IqgFRd%2BWy4kNznsbsu2r0nyIZv%2FnI9xMHERx5AzH4hqpqn6GiJIA7zLwXWdhXdk%2Fxlr%2Fy1%2FMArPKrLbhnDsUJwNLBx7PyHvY%2FvdbonkIFRVPcefYumNJbX0P6xEcClUCDCobWkCjMQ2LNsblV1vnOGOj67rf38DSwwksVtAFWYR80Oox5gYvjfwRXdOoTd5wLL9IhWSM%2B%2BD8jFbk7BqZMKJWz1UHYffJ%2F%2Fznx4EcfHsPTiwuMpg6BdgY%2BGQRsjQwarUFpHrDSnPmUgXX0n6peApUrwPLSJCqd1suUKAnT%2FLfDCe2WicG0M8aXVxT91UpxMVJk%2FYGw0J8yTkQgmTWCqFUnQrabroQe%2BNSWyaRopQQ1lkoH2N6Di%2FeneiYz99U58odXKasXSwF0R1EVUhCFG33E1YL0DFXrvTMIuimMIGOqUBOfmr24Opx88kdOuO17U49xAx4sfH2VJiDzY09qSpuSIuIcRCEGsozWBMxOY7UAXhJ6uBXhD2MepQunJ3t%2BXSi42xlNA09acAr8GWr1ZRW41HzaN1XOojieqYXr3okYq%2BjaKYaT7O%2FI0TDwjB%2FIEzPInwWt3mHDsTB4H7yxkl%2F2Jrrb9M%2FTlxi4jCEVsdHd8MTmzU8nX4XVFqOYsSY0%2BbFjvfbBnR&X-Amz-Signature=50a0a8dd16b0e1d607ea97ecb893cb1f5f55c734d533a7b4ac03d0ad12c9ee39&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKGLIS5N%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T004522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLs0ZtJAeJU99VaTursP3rMMG2WyubNe%2B%2FU89OsuLcZwIgTvbUey6b0WmHD7aqFxPSKu1AJXVP%2BntJ%2Fw5%2FCKg9Cz8qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FgQrm%2BausYMxlD5yrcA6T2lO6Rg2uRlMPqLDGR1zAy4LObG4tP0G%2BGmFzW9rfPmEh5CJIrg9TUKMsZtM%2BWMewNhepS2th8MTf0njY%2FIWC2UsyLFN%2FXHJJOrAENDaqChJpvfxeYVnd%2BF86fzQuoq251tAtgrpHBOGX8U1AzSBlUXpiPAl60HHfO0RBNpEB9C1zhtL0nNptEgvJF7CSxzV4MESAac%2BTSe6sl6rupjJt42IqgFRd%2BWy4kNznsbsu2r0nyIZv%2FnI9xMHERx5AzH4hqpqn6GiJIA7zLwXWdhXdk%2Fxlr%2Fy1%2FMArPKrLbhnDsUJwNLBx7PyHvY%2FvdbonkIFRVPcefYumNJbX0P6xEcClUCDCobWkCjMQ2LNsblV1vnOGOj67rf38DSwwksVtAFWYR80Oox5gYvjfwRXdOoTd5wLL9IhWSM%2B%2BD8jFbk7BqZMKJWz1UHYffJ%2F%2Fznx4EcfHsPTiwuMpg6BdgY%2BGQRsjQwarUFpHrDSnPmUgXX0n6peApUrwPLSJCqd1suUKAnT%2FLfDCe2WicG0M8aXVxT91UpxMVJk%2FYGw0J8yTkQgmTWCqFUnQrabroQe%2BNSWyaRopQQ1lkoH2N6Di%2FeneiYz99U58odXKasXSwF0R1EVUhCFG33E1YL0DFXrvTMIuimMIGOqUBOfmr24Opx88kdOuO17U49xAx4sfH2VJiDzY09qSpuSIuIcRCEGsozWBMxOY7UAXhJ6uBXhD2MepQunJ3t%2BXSi42xlNA09acAr8GWr1ZRW41HzaN1XOojieqYXr3okYq%2BjaKYaT7O%2FI0TDwjB%2FIEzPInwWt3mHDsTB4H7yxkl%2F2Jrrb9M%2FTlxi4jCEVsdHd8MTmzU8nX4XVFqOYsSY0%2BbFjvfbBnR&X-Amz-Signature=d0fccc2cc6fca1f9143ebf4c9998a8c4eec10d6c16cf6acc3cf0fffedf4410dc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKGLIS5N%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T004522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLs0ZtJAeJU99VaTursP3rMMG2WyubNe%2B%2FU89OsuLcZwIgTvbUey6b0WmHD7aqFxPSKu1AJXVP%2BntJ%2Fw5%2FCKg9Cz8qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FgQrm%2BausYMxlD5yrcA6T2lO6Rg2uRlMPqLDGR1zAy4LObG4tP0G%2BGmFzW9rfPmEh5CJIrg9TUKMsZtM%2BWMewNhepS2th8MTf0njY%2FIWC2UsyLFN%2FXHJJOrAENDaqChJpvfxeYVnd%2BF86fzQuoq251tAtgrpHBOGX8U1AzSBlUXpiPAl60HHfO0RBNpEB9C1zhtL0nNptEgvJF7CSxzV4MESAac%2BTSe6sl6rupjJt42IqgFRd%2BWy4kNznsbsu2r0nyIZv%2FnI9xMHERx5AzH4hqpqn6GiJIA7zLwXWdhXdk%2Fxlr%2Fy1%2FMArPKrLbhnDsUJwNLBx7PyHvY%2FvdbonkIFRVPcefYumNJbX0P6xEcClUCDCobWkCjMQ2LNsblV1vnOGOj67rf38DSwwksVtAFWYR80Oox5gYvjfwRXdOoTd5wLL9IhWSM%2B%2BD8jFbk7BqZMKJWz1UHYffJ%2F%2Fznx4EcfHsPTiwuMpg6BdgY%2BGQRsjQwarUFpHrDSnPmUgXX0n6peApUrwPLSJCqd1suUKAnT%2FLfDCe2WicG0M8aXVxT91UpxMVJk%2FYGw0J8yTkQgmTWCqFUnQrabroQe%2BNSWyaRopQQ1lkoH2N6Di%2FeneiYz99U58odXKasXSwF0R1EVUhCFG33E1YL0DFXrvTMIuimMIGOqUBOfmr24Opx88kdOuO17U49xAx4sfH2VJiDzY09qSpuSIuIcRCEGsozWBMxOY7UAXhJ6uBXhD2MepQunJ3t%2BXSi42xlNA09acAr8GWr1ZRW41HzaN1XOojieqYXr3okYq%2BjaKYaT7O%2FI0TDwjB%2FIEzPInwWt3mHDsTB4H7yxkl%2F2Jrrb9M%2FTlxi4jCEVsdHd8MTmzU8nX4XVFqOYsSY0%2BbFjvfbBnR&X-Amz-Signature=e02aff43b3701969d6b31bcd7504f5f4d72030bf2182766d8a67ba3b9744f017&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKGLIS5N%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T004522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLs0ZtJAeJU99VaTursP3rMMG2WyubNe%2B%2FU89OsuLcZwIgTvbUey6b0WmHD7aqFxPSKu1AJXVP%2BntJ%2Fw5%2FCKg9Cz8qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FgQrm%2BausYMxlD5yrcA6T2lO6Rg2uRlMPqLDGR1zAy4LObG4tP0G%2BGmFzW9rfPmEh5CJIrg9TUKMsZtM%2BWMewNhepS2th8MTf0njY%2FIWC2UsyLFN%2FXHJJOrAENDaqChJpvfxeYVnd%2BF86fzQuoq251tAtgrpHBOGX8U1AzSBlUXpiPAl60HHfO0RBNpEB9C1zhtL0nNptEgvJF7CSxzV4MESAac%2BTSe6sl6rupjJt42IqgFRd%2BWy4kNznsbsu2r0nyIZv%2FnI9xMHERx5AzH4hqpqn6GiJIA7zLwXWdhXdk%2Fxlr%2Fy1%2FMArPKrLbhnDsUJwNLBx7PyHvY%2FvdbonkIFRVPcefYumNJbX0P6xEcClUCDCobWkCjMQ2LNsblV1vnOGOj67rf38DSwwksVtAFWYR80Oox5gYvjfwRXdOoTd5wLL9IhWSM%2B%2BD8jFbk7BqZMKJWz1UHYffJ%2F%2Fznx4EcfHsPTiwuMpg6BdgY%2BGQRsjQwarUFpHrDSnPmUgXX0n6peApUrwPLSJCqd1suUKAnT%2FLfDCe2WicG0M8aXVxT91UpxMVJk%2FYGw0J8yTkQgmTWCqFUnQrabroQe%2BNSWyaRopQQ1lkoH2N6Di%2FeneiYz99U58odXKasXSwF0R1EVUhCFG33E1YL0DFXrvTMIuimMIGOqUBOfmr24Opx88kdOuO17U49xAx4sfH2VJiDzY09qSpuSIuIcRCEGsozWBMxOY7UAXhJ6uBXhD2MepQunJ3t%2BXSi42xlNA09acAr8GWr1ZRW41HzaN1XOojieqYXr3okYq%2BjaKYaT7O%2FI0TDwjB%2FIEzPInwWt3mHDsTB4H7yxkl%2F2Jrrb9M%2FTlxi4jCEVsdHd8MTmzU8nX4XVFqOYsSY0%2BbFjvfbBnR&X-Amz-Signature=eb52041a277772d43b9226d7b7dda785321e830822218821ef89b481dbabc76a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
