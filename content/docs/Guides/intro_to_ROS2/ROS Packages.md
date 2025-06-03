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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMCGCD6B%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDJ122kEKmy%2F4DxMdD82GwW3Mgr59uDgjRE72iIWscDQAIhAMrawKYlczDOs%2FL7RnKuYlJVs89qWY1bBG4vgbX0sUgvKv8DCBAQABoMNjM3NDIzMTgzODA1IgzRwnWZo8bPIU19awQq3APIJip6lXGwscEMfD06dHJQ2UIkfsGyJHudYnVOfkydZzhzRfQPHHDbcBt4wPjwsU2fLxb3zVK675fMXv6g5Vn6RfK4gKIECDormBbAtFVY10mwTSsZm6FSiyQk2GIUucCqYMVsDGxbOCUQ76ksOlZEPNmhSx7rtb4gs%2F%2BrF3jkeuNWbShS2A9bSqVYa4XZWUo9WtE5NYCMFrx0Q3lWaGtFVoDDpN7ZcIGFdaKEiZCOH3vKRoGIjBzjLoD2ktjnPtNBYyZEqlDRdWjRBLWrWcaEF8MnX9gZ9faPGvh4c9GUVSPtyZfHS1%2Fsl70ddBGVCYBH2utGkthx2aVIWfwVtkxuzp%2BVbxy1BIE4IYVcRpnvKX%2BzANa8uy%2F48KC2nXldVvuCAHY6Ru2Z8uoIrbbAOiq4w%2B56otr8SrDmXw%2F%2B0XZqMGnOglIhrbcKevAxroKc5dATIRltf42YyYZn4JP3h4MvTQJ1OasHKlfjd7DnrByEd%2BEgm%2FUzszt9ZzQRCJ0YP%2BIX5y9duQwEqZeQ4eaTnS4XeQLUbyrlCeEmx255NRATY5FlvnpcIYMrmn8CvoLiq3NSAC6TJFPkPEVc7xe4ZldSc4AUMWuXKlQ0d6k6Lo0R%2Bj6DE82naX4sS9rMujD9xPrBBjqkAd7Rx1PDht6TEadEtfhHxxBpj6ssRquToEoDs8edPIMYgi4MVPdpwjfp6dYn%2BwrGZ77aFn6%2FTs5CjNMt8evUdDDero5b7nvHv6UgnW0vhvoKqjzzQp55E0tRI9mLHEaTnAkEuZFrKHjlPokYXIE%2FJAph9XmfF0s0KVdlNgXlUSewA7nuv5inrIPTYcMyuVTHGpS5UzyySvp6b9LR%2B6IKBgUnB6iI&X-Amz-Signature=bad63f46c6db39dcef19b390e0cb116fab4ac014c4784a252712ab619a24eb2e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMCGCD6B%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDJ122kEKmy%2F4DxMdD82GwW3Mgr59uDgjRE72iIWscDQAIhAMrawKYlczDOs%2FL7RnKuYlJVs89qWY1bBG4vgbX0sUgvKv8DCBAQABoMNjM3NDIzMTgzODA1IgzRwnWZo8bPIU19awQq3APIJip6lXGwscEMfD06dHJQ2UIkfsGyJHudYnVOfkydZzhzRfQPHHDbcBt4wPjwsU2fLxb3zVK675fMXv6g5Vn6RfK4gKIECDormBbAtFVY10mwTSsZm6FSiyQk2GIUucCqYMVsDGxbOCUQ76ksOlZEPNmhSx7rtb4gs%2F%2BrF3jkeuNWbShS2A9bSqVYa4XZWUo9WtE5NYCMFrx0Q3lWaGtFVoDDpN7ZcIGFdaKEiZCOH3vKRoGIjBzjLoD2ktjnPtNBYyZEqlDRdWjRBLWrWcaEF8MnX9gZ9faPGvh4c9GUVSPtyZfHS1%2Fsl70ddBGVCYBH2utGkthx2aVIWfwVtkxuzp%2BVbxy1BIE4IYVcRpnvKX%2BzANa8uy%2F48KC2nXldVvuCAHY6Ru2Z8uoIrbbAOiq4w%2B56otr8SrDmXw%2F%2B0XZqMGnOglIhrbcKevAxroKc5dATIRltf42YyYZn4JP3h4MvTQJ1OasHKlfjd7DnrByEd%2BEgm%2FUzszt9ZzQRCJ0YP%2BIX5y9duQwEqZeQ4eaTnS4XeQLUbyrlCeEmx255NRATY5FlvnpcIYMrmn8CvoLiq3NSAC6TJFPkPEVc7xe4ZldSc4AUMWuXKlQ0d6k6Lo0R%2Bj6DE82naX4sS9rMujD9xPrBBjqkAd7Rx1PDht6TEadEtfhHxxBpj6ssRquToEoDs8edPIMYgi4MVPdpwjfp6dYn%2BwrGZ77aFn6%2FTs5CjNMt8evUdDDero5b7nvHv6UgnW0vhvoKqjzzQp55E0tRI9mLHEaTnAkEuZFrKHjlPokYXIE%2FJAph9XmfF0s0KVdlNgXlUSewA7nuv5inrIPTYcMyuVTHGpS5UzyySvp6b9LR%2B6IKBgUnB6iI&X-Amz-Signature=1a44c7898c20cc5642206da6fa1192dfec9d97e571701053babf1858e52954c6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMCGCD6B%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDJ122kEKmy%2F4DxMdD82GwW3Mgr59uDgjRE72iIWscDQAIhAMrawKYlczDOs%2FL7RnKuYlJVs89qWY1bBG4vgbX0sUgvKv8DCBAQABoMNjM3NDIzMTgzODA1IgzRwnWZo8bPIU19awQq3APIJip6lXGwscEMfD06dHJQ2UIkfsGyJHudYnVOfkydZzhzRfQPHHDbcBt4wPjwsU2fLxb3zVK675fMXv6g5Vn6RfK4gKIECDormBbAtFVY10mwTSsZm6FSiyQk2GIUucCqYMVsDGxbOCUQ76ksOlZEPNmhSx7rtb4gs%2F%2BrF3jkeuNWbShS2A9bSqVYa4XZWUo9WtE5NYCMFrx0Q3lWaGtFVoDDpN7ZcIGFdaKEiZCOH3vKRoGIjBzjLoD2ktjnPtNBYyZEqlDRdWjRBLWrWcaEF8MnX9gZ9faPGvh4c9GUVSPtyZfHS1%2Fsl70ddBGVCYBH2utGkthx2aVIWfwVtkxuzp%2BVbxy1BIE4IYVcRpnvKX%2BzANa8uy%2F48KC2nXldVvuCAHY6Ru2Z8uoIrbbAOiq4w%2B56otr8SrDmXw%2F%2B0XZqMGnOglIhrbcKevAxroKc5dATIRltf42YyYZn4JP3h4MvTQJ1OasHKlfjd7DnrByEd%2BEgm%2FUzszt9ZzQRCJ0YP%2BIX5y9duQwEqZeQ4eaTnS4XeQLUbyrlCeEmx255NRATY5FlvnpcIYMrmn8CvoLiq3NSAC6TJFPkPEVc7xe4ZldSc4AUMWuXKlQ0d6k6Lo0R%2Bj6DE82naX4sS9rMujD9xPrBBjqkAd7Rx1PDht6TEadEtfhHxxBpj6ssRquToEoDs8edPIMYgi4MVPdpwjfp6dYn%2BwrGZ77aFn6%2FTs5CjNMt8evUdDDero5b7nvHv6UgnW0vhvoKqjzzQp55E0tRI9mLHEaTnAkEuZFrKHjlPokYXIE%2FJAph9XmfF0s0KVdlNgXlUSewA7nuv5inrIPTYcMyuVTHGpS5UzyySvp6b9LR%2B6IKBgUnB6iI&X-Amz-Signature=b8f2ce3e2fae6c3ac4cadd64f0745b531ec23dfc23a9c04a6069e535157060d5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMCGCD6B%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDJ122kEKmy%2F4DxMdD82GwW3Mgr59uDgjRE72iIWscDQAIhAMrawKYlczDOs%2FL7RnKuYlJVs89qWY1bBG4vgbX0sUgvKv8DCBAQABoMNjM3NDIzMTgzODA1IgzRwnWZo8bPIU19awQq3APIJip6lXGwscEMfD06dHJQ2UIkfsGyJHudYnVOfkydZzhzRfQPHHDbcBt4wPjwsU2fLxb3zVK675fMXv6g5Vn6RfK4gKIECDormBbAtFVY10mwTSsZm6FSiyQk2GIUucCqYMVsDGxbOCUQ76ksOlZEPNmhSx7rtb4gs%2F%2BrF3jkeuNWbShS2A9bSqVYa4XZWUo9WtE5NYCMFrx0Q3lWaGtFVoDDpN7ZcIGFdaKEiZCOH3vKRoGIjBzjLoD2ktjnPtNBYyZEqlDRdWjRBLWrWcaEF8MnX9gZ9faPGvh4c9GUVSPtyZfHS1%2Fsl70ddBGVCYBH2utGkthx2aVIWfwVtkxuzp%2BVbxy1BIE4IYVcRpnvKX%2BzANa8uy%2F48KC2nXldVvuCAHY6Ru2Z8uoIrbbAOiq4w%2B56otr8SrDmXw%2F%2B0XZqMGnOglIhrbcKevAxroKc5dATIRltf42YyYZn4JP3h4MvTQJ1OasHKlfjd7DnrByEd%2BEgm%2FUzszt9ZzQRCJ0YP%2BIX5y9duQwEqZeQ4eaTnS4XeQLUbyrlCeEmx255NRATY5FlvnpcIYMrmn8CvoLiq3NSAC6TJFPkPEVc7xe4ZldSc4AUMWuXKlQ0d6k6Lo0R%2Bj6DE82naX4sS9rMujD9xPrBBjqkAd7Rx1PDht6TEadEtfhHxxBpj6ssRquToEoDs8edPIMYgi4MVPdpwjfp6dYn%2BwrGZ77aFn6%2FTs5CjNMt8evUdDDero5b7nvHv6UgnW0vhvoKqjzzQp55E0tRI9mLHEaTnAkEuZFrKHjlPokYXIE%2FJAph9XmfF0s0KVdlNgXlUSewA7nuv5inrIPTYcMyuVTHGpS5UzyySvp6b9LR%2B6IKBgUnB6iI&X-Amz-Signature=6f20b9bb45cd6068bbc1c3da37e1012298a88be4129966e925a1792f271ed3dd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMCGCD6B%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDJ122kEKmy%2F4DxMdD82GwW3Mgr59uDgjRE72iIWscDQAIhAMrawKYlczDOs%2FL7RnKuYlJVs89qWY1bBG4vgbX0sUgvKv8DCBAQABoMNjM3NDIzMTgzODA1IgzRwnWZo8bPIU19awQq3APIJip6lXGwscEMfD06dHJQ2UIkfsGyJHudYnVOfkydZzhzRfQPHHDbcBt4wPjwsU2fLxb3zVK675fMXv6g5Vn6RfK4gKIECDormBbAtFVY10mwTSsZm6FSiyQk2GIUucCqYMVsDGxbOCUQ76ksOlZEPNmhSx7rtb4gs%2F%2BrF3jkeuNWbShS2A9bSqVYa4XZWUo9WtE5NYCMFrx0Q3lWaGtFVoDDpN7ZcIGFdaKEiZCOH3vKRoGIjBzjLoD2ktjnPtNBYyZEqlDRdWjRBLWrWcaEF8MnX9gZ9faPGvh4c9GUVSPtyZfHS1%2Fsl70ddBGVCYBH2utGkthx2aVIWfwVtkxuzp%2BVbxy1BIE4IYVcRpnvKX%2BzANa8uy%2F48KC2nXldVvuCAHY6Ru2Z8uoIrbbAOiq4w%2B56otr8SrDmXw%2F%2B0XZqMGnOglIhrbcKevAxroKc5dATIRltf42YyYZn4JP3h4MvTQJ1OasHKlfjd7DnrByEd%2BEgm%2FUzszt9ZzQRCJ0YP%2BIX5y9duQwEqZeQ4eaTnS4XeQLUbyrlCeEmx255NRATY5FlvnpcIYMrmn8CvoLiq3NSAC6TJFPkPEVc7xe4ZldSc4AUMWuXKlQ0d6k6Lo0R%2Bj6DE82naX4sS9rMujD9xPrBBjqkAd7Rx1PDht6TEadEtfhHxxBpj6ssRquToEoDs8edPIMYgi4MVPdpwjfp6dYn%2BwrGZ77aFn6%2FTs5CjNMt8evUdDDero5b7nvHv6UgnW0vhvoKqjzzQp55E0tRI9mLHEaTnAkEuZFrKHjlPokYXIE%2FJAph9XmfF0s0KVdlNgXlUSewA7nuv5inrIPTYcMyuVTHGpS5UzyySvp6b9LR%2B6IKBgUnB6iI&X-Amz-Signature=88343e4c123aebb9a5fc3da88b23acdaa0af1c1f1c7f6d82a13311126d8b2c80&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMCGCD6B%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDJ122kEKmy%2F4DxMdD82GwW3Mgr59uDgjRE72iIWscDQAIhAMrawKYlczDOs%2FL7RnKuYlJVs89qWY1bBG4vgbX0sUgvKv8DCBAQABoMNjM3NDIzMTgzODA1IgzRwnWZo8bPIU19awQq3APIJip6lXGwscEMfD06dHJQ2UIkfsGyJHudYnVOfkydZzhzRfQPHHDbcBt4wPjwsU2fLxb3zVK675fMXv6g5Vn6RfK4gKIECDormBbAtFVY10mwTSsZm6FSiyQk2GIUucCqYMVsDGxbOCUQ76ksOlZEPNmhSx7rtb4gs%2F%2BrF3jkeuNWbShS2A9bSqVYa4XZWUo9WtE5NYCMFrx0Q3lWaGtFVoDDpN7ZcIGFdaKEiZCOH3vKRoGIjBzjLoD2ktjnPtNBYyZEqlDRdWjRBLWrWcaEF8MnX9gZ9faPGvh4c9GUVSPtyZfHS1%2Fsl70ddBGVCYBH2utGkthx2aVIWfwVtkxuzp%2BVbxy1BIE4IYVcRpnvKX%2BzANa8uy%2F48KC2nXldVvuCAHY6Ru2Z8uoIrbbAOiq4w%2B56otr8SrDmXw%2F%2B0XZqMGnOglIhrbcKevAxroKc5dATIRltf42YyYZn4JP3h4MvTQJ1OasHKlfjd7DnrByEd%2BEgm%2FUzszt9ZzQRCJ0YP%2BIX5y9duQwEqZeQ4eaTnS4XeQLUbyrlCeEmx255NRATY5FlvnpcIYMrmn8CvoLiq3NSAC6TJFPkPEVc7xe4ZldSc4AUMWuXKlQ0d6k6Lo0R%2Bj6DE82naX4sS9rMujD9xPrBBjqkAd7Rx1PDht6TEadEtfhHxxBpj6ssRquToEoDs8edPIMYgi4MVPdpwjfp6dYn%2BwrGZ77aFn6%2FTs5CjNMt8evUdDDero5b7nvHv6UgnW0vhvoKqjzzQp55E0tRI9mLHEaTnAkEuZFrKHjlPokYXIE%2FJAph9XmfF0s0KVdlNgXlUSewA7nuv5inrIPTYcMyuVTHGpS5UzyySvp6b9LR%2B6IKBgUnB6iI&X-Amz-Signature=2c2be1f9192bc3d5dcfd3c952834f9a578b9df41db14e06ae524184c859eb414&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMCGCD6B%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDJ122kEKmy%2F4DxMdD82GwW3Mgr59uDgjRE72iIWscDQAIhAMrawKYlczDOs%2FL7RnKuYlJVs89qWY1bBG4vgbX0sUgvKv8DCBAQABoMNjM3NDIzMTgzODA1IgzRwnWZo8bPIU19awQq3APIJip6lXGwscEMfD06dHJQ2UIkfsGyJHudYnVOfkydZzhzRfQPHHDbcBt4wPjwsU2fLxb3zVK675fMXv6g5Vn6RfK4gKIECDormBbAtFVY10mwTSsZm6FSiyQk2GIUucCqYMVsDGxbOCUQ76ksOlZEPNmhSx7rtb4gs%2F%2BrF3jkeuNWbShS2A9bSqVYa4XZWUo9WtE5NYCMFrx0Q3lWaGtFVoDDpN7ZcIGFdaKEiZCOH3vKRoGIjBzjLoD2ktjnPtNBYyZEqlDRdWjRBLWrWcaEF8MnX9gZ9faPGvh4c9GUVSPtyZfHS1%2Fsl70ddBGVCYBH2utGkthx2aVIWfwVtkxuzp%2BVbxy1BIE4IYVcRpnvKX%2BzANa8uy%2F48KC2nXldVvuCAHY6Ru2Z8uoIrbbAOiq4w%2B56otr8SrDmXw%2F%2B0XZqMGnOglIhrbcKevAxroKc5dATIRltf42YyYZn4JP3h4MvTQJ1OasHKlfjd7DnrByEd%2BEgm%2FUzszt9ZzQRCJ0YP%2BIX5y9duQwEqZeQ4eaTnS4XeQLUbyrlCeEmx255NRATY5FlvnpcIYMrmn8CvoLiq3NSAC6TJFPkPEVc7xe4ZldSc4AUMWuXKlQ0d6k6Lo0R%2Bj6DE82naX4sS9rMujD9xPrBBjqkAd7Rx1PDht6TEadEtfhHxxBpj6ssRquToEoDs8edPIMYgi4MVPdpwjfp6dYn%2BwrGZ77aFn6%2FTs5CjNMt8evUdDDero5b7nvHv6UgnW0vhvoKqjzzQp55E0tRI9mLHEaTnAkEuZFrKHjlPokYXIE%2FJAph9XmfF0s0KVdlNgXlUSewA7nuv5inrIPTYcMyuVTHGpS5UzyySvp6b9LR%2B6IKBgUnB6iI&X-Amz-Signature=68b777d88169d213acac84e1d3be60dad0aa0b664bf2c9d7e18a22c53596a16a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
