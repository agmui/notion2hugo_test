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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WMSYZ2R%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIDYQZvTScipm6fTXCe9kJMrKRwbn%2FZQBUA2LPdp046dlAiALWHipgX5%2FIXE6p22HYcE5l2pbrkD%2FV1TDSmhRbrGkbCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1XQRbkq7pQYB8Mb3KtwDc2w64louH%2Bc6iNFuMSfDfUnwvAViEQ3TQDI5St%2BEXO2IyljMjyXtIJHSO5lfp1UxXN%2BCTrbeJPNvZ2eghTvSu2a89KFU4gUHij5kS9Gx%2BUrpD%2BTkTwQqyfIvJEDITGupHONWNgZ8n%2Fr35YAxnrpgGNq22E7%2BTs3Lc3%2BTl8x8Yg%2B%2B0sOmkoxMwWCmlMGBSEXtYcvua8PPCecTeseoSjcnRH5twryvD6w%2Bb8eTMsTiCjo75xcwp8MlpYPQqt24cr4LhmceYEZKbDdfAgC3L%2BuseaN%2BzjYdE5q0T%2FGg%2BFXXCRrBCJQ5vl08vQPWvrNM%2FKZDqNvvOKO%2FoGcZM6Pe1QfcUC%2BYMbWn%2BINu%2FFS0hsEkKSaUxE9LchKYFiWbZAiCZ%2Bd2FPrjSoi0sO217wMsbrux7cgQZn%2Fux%2BsuScJPAHZYarzsR6Y%2F%2FkpXbwzSYH%2FuaEQGfi2km2lyktvTtfs43U7eePj4U1veEQbmpd0WNI2WXR2ggncjCXXDCh45rvJi5MYgVltCvwEb7CYEATDxNYhRrTwjzUs9cWqDJOBrvC7v5%2F7QBcorQNYHHRVtVrO19eHSHJzIZaxnwrRbn0hLxpG%2F%2F1z%2BMivqilP4PwWphZN3imDHJ38Woxlmu%2FKO7k0wzrn1vgY6pgE9bQGnYh9PDNdjOZrmynmYstgg5sXLErcppbcqrKS3PhDlpl%2FxBiIndyZavgkc7fceWj4BEslynrz2EEOMzjbZ9PASvHoiSzQi1P%2FK1%2F5rs2zDmcws8WOVVBXEYJbME%2FRkvNLuj3pNU8qXuKgNFx%2F4pP%2Fk5rDKn7MezsDjv5ZVbsQa8Fy7nRLeyS22tihZ8o%2BMM63LDlcllkAaKOzKvI62wYYr9Cn%2B&X-Amz-Signature=6fb3541781c5e998cee30713bcb727d5a2eb9d572fd98ab642457c080a5d7892&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WMSYZ2R%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIDYQZvTScipm6fTXCe9kJMrKRwbn%2FZQBUA2LPdp046dlAiALWHipgX5%2FIXE6p22HYcE5l2pbrkD%2FV1TDSmhRbrGkbCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1XQRbkq7pQYB8Mb3KtwDc2w64louH%2Bc6iNFuMSfDfUnwvAViEQ3TQDI5St%2BEXO2IyljMjyXtIJHSO5lfp1UxXN%2BCTrbeJPNvZ2eghTvSu2a89KFU4gUHij5kS9Gx%2BUrpD%2BTkTwQqyfIvJEDITGupHONWNgZ8n%2Fr35YAxnrpgGNq22E7%2BTs3Lc3%2BTl8x8Yg%2B%2B0sOmkoxMwWCmlMGBSEXtYcvua8PPCecTeseoSjcnRH5twryvD6w%2Bb8eTMsTiCjo75xcwp8MlpYPQqt24cr4LhmceYEZKbDdfAgC3L%2BuseaN%2BzjYdE5q0T%2FGg%2BFXXCRrBCJQ5vl08vQPWvrNM%2FKZDqNvvOKO%2FoGcZM6Pe1QfcUC%2BYMbWn%2BINu%2FFS0hsEkKSaUxE9LchKYFiWbZAiCZ%2Bd2FPrjSoi0sO217wMsbrux7cgQZn%2Fux%2BsuScJPAHZYarzsR6Y%2F%2FkpXbwzSYH%2FuaEQGfi2km2lyktvTtfs43U7eePj4U1veEQbmpd0WNI2WXR2ggncjCXXDCh45rvJi5MYgVltCvwEb7CYEATDxNYhRrTwjzUs9cWqDJOBrvC7v5%2F7QBcorQNYHHRVtVrO19eHSHJzIZaxnwrRbn0hLxpG%2F%2F1z%2BMivqilP4PwWphZN3imDHJ38Woxlmu%2FKO7k0wzrn1vgY6pgE9bQGnYh9PDNdjOZrmynmYstgg5sXLErcppbcqrKS3PhDlpl%2FxBiIndyZavgkc7fceWj4BEslynrz2EEOMzjbZ9PASvHoiSzQi1P%2FK1%2F5rs2zDmcws8WOVVBXEYJbME%2FRkvNLuj3pNU8qXuKgNFx%2F4pP%2Fk5rDKn7MezsDjv5ZVbsQa8Fy7nRLeyS22tihZ8o%2BMM63LDlcllkAaKOzKvI62wYYr9Cn%2B&X-Amz-Signature=ffb67a1340d6c0cbb3adde295a5d926acc8117443496389e009b1f3f980c341f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WMSYZ2R%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIDYQZvTScipm6fTXCe9kJMrKRwbn%2FZQBUA2LPdp046dlAiALWHipgX5%2FIXE6p22HYcE5l2pbrkD%2FV1TDSmhRbrGkbCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1XQRbkq7pQYB8Mb3KtwDc2w64louH%2Bc6iNFuMSfDfUnwvAViEQ3TQDI5St%2BEXO2IyljMjyXtIJHSO5lfp1UxXN%2BCTrbeJPNvZ2eghTvSu2a89KFU4gUHij5kS9Gx%2BUrpD%2BTkTwQqyfIvJEDITGupHONWNgZ8n%2Fr35YAxnrpgGNq22E7%2BTs3Lc3%2BTl8x8Yg%2B%2B0sOmkoxMwWCmlMGBSEXtYcvua8PPCecTeseoSjcnRH5twryvD6w%2Bb8eTMsTiCjo75xcwp8MlpYPQqt24cr4LhmceYEZKbDdfAgC3L%2BuseaN%2BzjYdE5q0T%2FGg%2BFXXCRrBCJQ5vl08vQPWvrNM%2FKZDqNvvOKO%2FoGcZM6Pe1QfcUC%2BYMbWn%2BINu%2FFS0hsEkKSaUxE9LchKYFiWbZAiCZ%2Bd2FPrjSoi0sO217wMsbrux7cgQZn%2Fux%2BsuScJPAHZYarzsR6Y%2F%2FkpXbwzSYH%2FuaEQGfi2km2lyktvTtfs43U7eePj4U1veEQbmpd0WNI2WXR2ggncjCXXDCh45rvJi5MYgVltCvwEb7CYEATDxNYhRrTwjzUs9cWqDJOBrvC7v5%2F7QBcorQNYHHRVtVrO19eHSHJzIZaxnwrRbn0hLxpG%2F%2F1z%2BMivqilP4PwWphZN3imDHJ38Woxlmu%2FKO7k0wzrn1vgY6pgE9bQGnYh9PDNdjOZrmynmYstgg5sXLErcppbcqrKS3PhDlpl%2FxBiIndyZavgkc7fceWj4BEslynrz2EEOMzjbZ9PASvHoiSzQi1P%2FK1%2F5rs2zDmcws8WOVVBXEYJbME%2FRkvNLuj3pNU8qXuKgNFx%2F4pP%2Fk5rDKn7MezsDjv5ZVbsQa8Fy7nRLeyS22tihZ8o%2BMM63LDlcllkAaKOzKvI62wYYr9Cn%2B&X-Amz-Signature=cc1678c569ff709af0f71a2537080f0a03ad2944162bac12802c7b80c1241054&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WMSYZ2R%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIDYQZvTScipm6fTXCe9kJMrKRwbn%2FZQBUA2LPdp046dlAiALWHipgX5%2FIXE6p22HYcE5l2pbrkD%2FV1TDSmhRbrGkbCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1XQRbkq7pQYB8Mb3KtwDc2w64louH%2Bc6iNFuMSfDfUnwvAViEQ3TQDI5St%2BEXO2IyljMjyXtIJHSO5lfp1UxXN%2BCTrbeJPNvZ2eghTvSu2a89KFU4gUHij5kS9Gx%2BUrpD%2BTkTwQqyfIvJEDITGupHONWNgZ8n%2Fr35YAxnrpgGNq22E7%2BTs3Lc3%2BTl8x8Yg%2B%2B0sOmkoxMwWCmlMGBSEXtYcvua8PPCecTeseoSjcnRH5twryvD6w%2Bb8eTMsTiCjo75xcwp8MlpYPQqt24cr4LhmceYEZKbDdfAgC3L%2BuseaN%2BzjYdE5q0T%2FGg%2BFXXCRrBCJQ5vl08vQPWvrNM%2FKZDqNvvOKO%2FoGcZM6Pe1QfcUC%2BYMbWn%2BINu%2FFS0hsEkKSaUxE9LchKYFiWbZAiCZ%2Bd2FPrjSoi0sO217wMsbrux7cgQZn%2Fux%2BsuScJPAHZYarzsR6Y%2F%2FkpXbwzSYH%2FuaEQGfi2km2lyktvTtfs43U7eePj4U1veEQbmpd0WNI2WXR2ggncjCXXDCh45rvJi5MYgVltCvwEb7CYEATDxNYhRrTwjzUs9cWqDJOBrvC7v5%2F7QBcorQNYHHRVtVrO19eHSHJzIZaxnwrRbn0hLxpG%2F%2F1z%2BMivqilP4PwWphZN3imDHJ38Woxlmu%2FKO7k0wzrn1vgY6pgE9bQGnYh9PDNdjOZrmynmYstgg5sXLErcppbcqrKS3PhDlpl%2FxBiIndyZavgkc7fceWj4BEslynrz2EEOMzjbZ9PASvHoiSzQi1P%2FK1%2F5rs2zDmcws8WOVVBXEYJbME%2FRkvNLuj3pNU8qXuKgNFx%2F4pP%2Fk5rDKn7MezsDjv5ZVbsQa8Fy7nRLeyS22tihZ8o%2BMM63LDlcllkAaKOzKvI62wYYr9Cn%2B&X-Amz-Signature=fd06e9429c40725100baac999c89b28450c45f8355b4cc07573b17e60c64e844&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WMSYZ2R%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIDYQZvTScipm6fTXCe9kJMrKRwbn%2FZQBUA2LPdp046dlAiALWHipgX5%2FIXE6p22HYcE5l2pbrkD%2FV1TDSmhRbrGkbCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1XQRbkq7pQYB8Mb3KtwDc2w64louH%2Bc6iNFuMSfDfUnwvAViEQ3TQDI5St%2BEXO2IyljMjyXtIJHSO5lfp1UxXN%2BCTrbeJPNvZ2eghTvSu2a89KFU4gUHij5kS9Gx%2BUrpD%2BTkTwQqyfIvJEDITGupHONWNgZ8n%2Fr35YAxnrpgGNq22E7%2BTs3Lc3%2BTl8x8Yg%2B%2B0sOmkoxMwWCmlMGBSEXtYcvua8PPCecTeseoSjcnRH5twryvD6w%2Bb8eTMsTiCjo75xcwp8MlpYPQqt24cr4LhmceYEZKbDdfAgC3L%2BuseaN%2BzjYdE5q0T%2FGg%2BFXXCRrBCJQ5vl08vQPWvrNM%2FKZDqNvvOKO%2FoGcZM6Pe1QfcUC%2BYMbWn%2BINu%2FFS0hsEkKSaUxE9LchKYFiWbZAiCZ%2Bd2FPrjSoi0sO217wMsbrux7cgQZn%2Fux%2BsuScJPAHZYarzsR6Y%2F%2FkpXbwzSYH%2FuaEQGfi2km2lyktvTtfs43U7eePj4U1veEQbmpd0WNI2WXR2ggncjCXXDCh45rvJi5MYgVltCvwEb7CYEATDxNYhRrTwjzUs9cWqDJOBrvC7v5%2F7QBcorQNYHHRVtVrO19eHSHJzIZaxnwrRbn0hLxpG%2F%2F1z%2BMivqilP4PwWphZN3imDHJ38Woxlmu%2FKO7k0wzrn1vgY6pgE9bQGnYh9PDNdjOZrmynmYstgg5sXLErcppbcqrKS3PhDlpl%2FxBiIndyZavgkc7fceWj4BEslynrz2EEOMzjbZ9PASvHoiSzQi1P%2FK1%2F5rs2zDmcws8WOVVBXEYJbME%2FRkvNLuj3pNU8qXuKgNFx%2F4pP%2Fk5rDKn7MezsDjv5ZVbsQa8Fy7nRLeyS22tihZ8o%2BMM63LDlcllkAaKOzKvI62wYYr9Cn%2B&X-Amz-Signature=778cb70f75cb8e0002c53b99612aaf07f1067d5f09e81a18f5b42864ecb44ac5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WMSYZ2R%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIDYQZvTScipm6fTXCe9kJMrKRwbn%2FZQBUA2LPdp046dlAiALWHipgX5%2FIXE6p22HYcE5l2pbrkD%2FV1TDSmhRbrGkbCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1XQRbkq7pQYB8Mb3KtwDc2w64louH%2Bc6iNFuMSfDfUnwvAViEQ3TQDI5St%2BEXO2IyljMjyXtIJHSO5lfp1UxXN%2BCTrbeJPNvZ2eghTvSu2a89KFU4gUHij5kS9Gx%2BUrpD%2BTkTwQqyfIvJEDITGupHONWNgZ8n%2Fr35YAxnrpgGNq22E7%2BTs3Lc3%2BTl8x8Yg%2B%2B0sOmkoxMwWCmlMGBSEXtYcvua8PPCecTeseoSjcnRH5twryvD6w%2Bb8eTMsTiCjo75xcwp8MlpYPQqt24cr4LhmceYEZKbDdfAgC3L%2BuseaN%2BzjYdE5q0T%2FGg%2BFXXCRrBCJQ5vl08vQPWvrNM%2FKZDqNvvOKO%2FoGcZM6Pe1QfcUC%2BYMbWn%2BINu%2FFS0hsEkKSaUxE9LchKYFiWbZAiCZ%2Bd2FPrjSoi0sO217wMsbrux7cgQZn%2Fux%2BsuScJPAHZYarzsR6Y%2F%2FkpXbwzSYH%2FuaEQGfi2km2lyktvTtfs43U7eePj4U1veEQbmpd0WNI2WXR2ggncjCXXDCh45rvJi5MYgVltCvwEb7CYEATDxNYhRrTwjzUs9cWqDJOBrvC7v5%2F7QBcorQNYHHRVtVrO19eHSHJzIZaxnwrRbn0hLxpG%2F%2F1z%2BMivqilP4PwWphZN3imDHJ38Woxlmu%2FKO7k0wzrn1vgY6pgE9bQGnYh9PDNdjOZrmynmYstgg5sXLErcppbcqrKS3PhDlpl%2FxBiIndyZavgkc7fceWj4BEslynrz2EEOMzjbZ9PASvHoiSzQi1P%2FK1%2F5rs2zDmcws8WOVVBXEYJbME%2FRkvNLuj3pNU8qXuKgNFx%2F4pP%2Fk5rDKn7MezsDjv5ZVbsQa8Fy7nRLeyS22tihZ8o%2BMM63LDlcllkAaKOzKvI62wYYr9Cn%2B&X-Amz-Signature=3aec49975fcb5e5600b958677931a6529a418fd3f586e2fc1adccf1ec61b9c08&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WMSYZ2R%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIDYQZvTScipm6fTXCe9kJMrKRwbn%2FZQBUA2LPdp046dlAiALWHipgX5%2FIXE6p22HYcE5l2pbrkD%2FV1TDSmhRbrGkbCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1XQRbkq7pQYB8Mb3KtwDc2w64louH%2Bc6iNFuMSfDfUnwvAViEQ3TQDI5St%2BEXO2IyljMjyXtIJHSO5lfp1UxXN%2BCTrbeJPNvZ2eghTvSu2a89KFU4gUHij5kS9Gx%2BUrpD%2BTkTwQqyfIvJEDITGupHONWNgZ8n%2Fr35YAxnrpgGNq22E7%2BTs3Lc3%2BTl8x8Yg%2B%2B0sOmkoxMwWCmlMGBSEXtYcvua8PPCecTeseoSjcnRH5twryvD6w%2Bb8eTMsTiCjo75xcwp8MlpYPQqt24cr4LhmceYEZKbDdfAgC3L%2BuseaN%2BzjYdE5q0T%2FGg%2BFXXCRrBCJQ5vl08vQPWvrNM%2FKZDqNvvOKO%2FoGcZM6Pe1QfcUC%2BYMbWn%2BINu%2FFS0hsEkKSaUxE9LchKYFiWbZAiCZ%2Bd2FPrjSoi0sO217wMsbrux7cgQZn%2Fux%2BsuScJPAHZYarzsR6Y%2F%2FkpXbwzSYH%2FuaEQGfi2km2lyktvTtfs43U7eePj4U1veEQbmpd0WNI2WXR2ggncjCXXDCh45rvJi5MYgVltCvwEb7CYEATDxNYhRrTwjzUs9cWqDJOBrvC7v5%2F7QBcorQNYHHRVtVrO19eHSHJzIZaxnwrRbn0hLxpG%2F%2F1z%2BMivqilP4PwWphZN3imDHJ38Woxlmu%2FKO7k0wzrn1vgY6pgE9bQGnYh9PDNdjOZrmynmYstgg5sXLErcppbcqrKS3PhDlpl%2FxBiIndyZavgkc7fceWj4BEslynrz2EEOMzjbZ9PASvHoiSzQi1P%2FK1%2F5rs2zDmcws8WOVVBXEYJbME%2FRkvNLuj3pNU8qXuKgNFx%2F4pP%2Fk5rDKn7MezsDjv5ZVbsQa8Fy7nRLeyS22tihZ8o%2BMM63LDlcllkAaKOzKvI62wYYr9Cn%2B&X-Amz-Signature=8fc73a416c90dfa98755bc2c7bb66eef52183e8719241f385ca6d198cc1642d8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
