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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S5DRYX7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T181005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIG5U4GgA3RhRR8tzlSNzdk21jN2HeElmM5%2BfzOuGbrAsAiAviGCv%2Ba3O2PwZ6l7oooj4wl9UotJTSJp6%2Fwp3U0QBISr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM7dCunhEpabIhSvggKtwDBMxx%2F3%2B2XO%2BGXKgUPgXUXXAAvSirAXH53Bic3ZnQnla9fGsiyVayLtHoSgbjXp3vxGpsGLGE%2FsX%2Ba5ayJhg7JQG8rVvBpH2IIX4sFrHJIA82XC9idHvpTOwhTp50SZpOcsZxex3yuDegJ%2FSOEtpu8xzK4awUvFuhEpbVKUmYEBzywC9kUCSHmmNTG21TM0ui1sr%2F1GBbtYlOMwxQfPgiQbHkiigi2LtkkLtgOk%2Bb2Gw2ITeH%2FFGznSVy2x9SxMOHEF1p4clVbXZ%2BFTwBLdF6tjwh8ozq7G484w7U03edLIstqmywYzNh5J7pWHdwV0dePz3Oqb8NMXxL3b56uszVk2V2w22LpfIhK9FgYNsyntc2hGk%2Bj8K39JJkpGEBYjBQn%2BnpbNG5XGGDpfjnv7UKCinvllOAqUYgu5DayHA4KPFqx20qSDfIfaMq%2FkTovGdyTNQreGlVCtLEVBd67HDo4PHXuCVeE4UMn2s4wV%2BYSlYCCx%2Bfk52cFItJtKeeCuQ0V63OTby6Rg5prIeXkxoRUhLFBs1rubBn5cjLCqQYdmjInnuY9VLkc5Jz54Egpur6ymhvC%2B9KzrW4gKId5iLIVWuqSABhKHTloCIHyS1bowdf4R2Rk4J%2F4FGazhAw6%2FXNvQY6pgF%2FuEaCOFOiT1PB1gR5%2BswNhqusz99yJxek7mRQz4ZMl8NJBfX%2FNLUzs2OExxYF9LTPhbS5eGQ0eNku0pFDNywGyLIv5GRuOPS%2FDZsPyGYxNFJziuNA9GSJO0wH%2FMsndPShrZXusXmFUV%2Ft3d6xWHreg5dshUH0Q4KzpvXnHvt9DEJqp1Puv1Rm0Y%2BueGPPC1ZEs9f%2Fnpl4km5x1xaWh%2FdABNN5XJGL&X-Amz-Signature=3f0d1fd0d2221c89d0a73f2758c86f6ec3b76990c3d8f7f0989c6baed5ce3a91&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S5DRYX7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T181005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIG5U4GgA3RhRR8tzlSNzdk21jN2HeElmM5%2BfzOuGbrAsAiAviGCv%2Ba3O2PwZ6l7oooj4wl9UotJTSJp6%2Fwp3U0QBISr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM7dCunhEpabIhSvggKtwDBMxx%2F3%2B2XO%2BGXKgUPgXUXXAAvSirAXH53Bic3ZnQnla9fGsiyVayLtHoSgbjXp3vxGpsGLGE%2FsX%2Ba5ayJhg7JQG8rVvBpH2IIX4sFrHJIA82XC9idHvpTOwhTp50SZpOcsZxex3yuDegJ%2FSOEtpu8xzK4awUvFuhEpbVKUmYEBzywC9kUCSHmmNTG21TM0ui1sr%2F1GBbtYlOMwxQfPgiQbHkiigi2LtkkLtgOk%2Bb2Gw2ITeH%2FFGznSVy2x9SxMOHEF1p4clVbXZ%2BFTwBLdF6tjwh8ozq7G484w7U03edLIstqmywYzNh5J7pWHdwV0dePz3Oqb8NMXxL3b56uszVk2V2w22LpfIhK9FgYNsyntc2hGk%2Bj8K39JJkpGEBYjBQn%2BnpbNG5XGGDpfjnv7UKCinvllOAqUYgu5DayHA4KPFqx20qSDfIfaMq%2FkTovGdyTNQreGlVCtLEVBd67HDo4PHXuCVeE4UMn2s4wV%2BYSlYCCx%2Bfk52cFItJtKeeCuQ0V63OTby6Rg5prIeXkxoRUhLFBs1rubBn5cjLCqQYdmjInnuY9VLkc5Jz54Egpur6ymhvC%2B9KzrW4gKId5iLIVWuqSABhKHTloCIHyS1bowdf4R2Rk4J%2F4FGazhAw6%2FXNvQY6pgF%2FuEaCOFOiT1PB1gR5%2BswNhqusz99yJxek7mRQz4ZMl8NJBfX%2FNLUzs2OExxYF9LTPhbS5eGQ0eNku0pFDNywGyLIv5GRuOPS%2FDZsPyGYxNFJziuNA9GSJO0wH%2FMsndPShrZXusXmFUV%2Ft3d6xWHreg5dshUH0Q4KzpvXnHvt9DEJqp1Puv1Rm0Y%2BueGPPC1ZEs9f%2Fnpl4km5x1xaWh%2FdABNN5XJGL&X-Amz-Signature=2b772ff48e616ce14f8aa46954336e735133823d0977b9c8a341a05623985eb3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S5DRYX7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T181006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIG5U4GgA3RhRR8tzlSNzdk21jN2HeElmM5%2BfzOuGbrAsAiAviGCv%2Ba3O2PwZ6l7oooj4wl9UotJTSJp6%2Fwp3U0QBISr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM7dCunhEpabIhSvggKtwDBMxx%2F3%2B2XO%2BGXKgUPgXUXXAAvSirAXH53Bic3ZnQnla9fGsiyVayLtHoSgbjXp3vxGpsGLGE%2FsX%2Ba5ayJhg7JQG8rVvBpH2IIX4sFrHJIA82XC9idHvpTOwhTp50SZpOcsZxex3yuDegJ%2FSOEtpu8xzK4awUvFuhEpbVKUmYEBzywC9kUCSHmmNTG21TM0ui1sr%2F1GBbtYlOMwxQfPgiQbHkiigi2LtkkLtgOk%2Bb2Gw2ITeH%2FFGznSVy2x9SxMOHEF1p4clVbXZ%2BFTwBLdF6tjwh8ozq7G484w7U03edLIstqmywYzNh5J7pWHdwV0dePz3Oqb8NMXxL3b56uszVk2V2w22LpfIhK9FgYNsyntc2hGk%2Bj8K39JJkpGEBYjBQn%2BnpbNG5XGGDpfjnv7UKCinvllOAqUYgu5DayHA4KPFqx20qSDfIfaMq%2FkTovGdyTNQreGlVCtLEVBd67HDo4PHXuCVeE4UMn2s4wV%2BYSlYCCx%2Bfk52cFItJtKeeCuQ0V63OTby6Rg5prIeXkxoRUhLFBs1rubBn5cjLCqQYdmjInnuY9VLkc5Jz54Egpur6ymhvC%2B9KzrW4gKId5iLIVWuqSABhKHTloCIHyS1bowdf4R2Rk4J%2F4FGazhAw6%2FXNvQY6pgF%2FuEaCOFOiT1PB1gR5%2BswNhqusz99yJxek7mRQz4ZMl8NJBfX%2FNLUzs2OExxYF9LTPhbS5eGQ0eNku0pFDNywGyLIv5GRuOPS%2FDZsPyGYxNFJziuNA9GSJO0wH%2FMsndPShrZXusXmFUV%2Ft3d6xWHreg5dshUH0Q4KzpvXnHvt9DEJqp1Puv1Rm0Y%2BueGPPC1ZEs9f%2Fnpl4km5x1xaWh%2FdABNN5XJGL&X-Amz-Signature=b340a504e3957929a6d06e9281c99eb0a10acd6fd6c74d41764ad575d8c3a891&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S5DRYX7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T181005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIG5U4GgA3RhRR8tzlSNzdk21jN2HeElmM5%2BfzOuGbrAsAiAviGCv%2Ba3O2PwZ6l7oooj4wl9UotJTSJp6%2Fwp3U0QBISr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM7dCunhEpabIhSvggKtwDBMxx%2F3%2B2XO%2BGXKgUPgXUXXAAvSirAXH53Bic3ZnQnla9fGsiyVayLtHoSgbjXp3vxGpsGLGE%2FsX%2Ba5ayJhg7JQG8rVvBpH2IIX4sFrHJIA82XC9idHvpTOwhTp50SZpOcsZxex3yuDegJ%2FSOEtpu8xzK4awUvFuhEpbVKUmYEBzywC9kUCSHmmNTG21TM0ui1sr%2F1GBbtYlOMwxQfPgiQbHkiigi2LtkkLtgOk%2Bb2Gw2ITeH%2FFGznSVy2x9SxMOHEF1p4clVbXZ%2BFTwBLdF6tjwh8ozq7G484w7U03edLIstqmywYzNh5J7pWHdwV0dePz3Oqb8NMXxL3b56uszVk2V2w22LpfIhK9FgYNsyntc2hGk%2Bj8K39JJkpGEBYjBQn%2BnpbNG5XGGDpfjnv7UKCinvllOAqUYgu5DayHA4KPFqx20qSDfIfaMq%2FkTovGdyTNQreGlVCtLEVBd67HDo4PHXuCVeE4UMn2s4wV%2BYSlYCCx%2Bfk52cFItJtKeeCuQ0V63OTby6Rg5prIeXkxoRUhLFBs1rubBn5cjLCqQYdmjInnuY9VLkc5Jz54Egpur6ymhvC%2B9KzrW4gKId5iLIVWuqSABhKHTloCIHyS1bowdf4R2Rk4J%2F4FGazhAw6%2FXNvQY6pgF%2FuEaCOFOiT1PB1gR5%2BswNhqusz99yJxek7mRQz4ZMl8NJBfX%2FNLUzs2OExxYF9LTPhbS5eGQ0eNku0pFDNywGyLIv5GRuOPS%2FDZsPyGYxNFJziuNA9GSJO0wH%2FMsndPShrZXusXmFUV%2Ft3d6xWHreg5dshUH0Q4KzpvXnHvt9DEJqp1Puv1Rm0Y%2BueGPPC1ZEs9f%2Fnpl4km5x1xaWh%2FdABNN5XJGL&X-Amz-Signature=90b55aec02d83bf45fc2d79c6e88ebb7b4c18ee46fc6e3d00c1743fb5c03683e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S5DRYX7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T181005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIG5U4GgA3RhRR8tzlSNzdk21jN2HeElmM5%2BfzOuGbrAsAiAviGCv%2Ba3O2PwZ6l7oooj4wl9UotJTSJp6%2Fwp3U0QBISr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM7dCunhEpabIhSvggKtwDBMxx%2F3%2B2XO%2BGXKgUPgXUXXAAvSirAXH53Bic3ZnQnla9fGsiyVayLtHoSgbjXp3vxGpsGLGE%2FsX%2Ba5ayJhg7JQG8rVvBpH2IIX4sFrHJIA82XC9idHvpTOwhTp50SZpOcsZxex3yuDegJ%2FSOEtpu8xzK4awUvFuhEpbVKUmYEBzywC9kUCSHmmNTG21TM0ui1sr%2F1GBbtYlOMwxQfPgiQbHkiigi2LtkkLtgOk%2Bb2Gw2ITeH%2FFGznSVy2x9SxMOHEF1p4clVbXZ%2BFTwBLdF6tjwh8ozq7G484w7U03edLIstqmywYzNh5J7pWHdwV0dePz3Oqb8NMXxL3b56uszVk2V2w22LpfIhK9FgYNsyntc2hGk%2Bj8K39JJkpGEBYjBQn%2BnpbNG5XGGDpfjnv7UKCinvllOAqUYgu5DayHA4KPFqx20qSDfIfaMq%2FkTovGdyTNQreGlVCtLEVBd67HDo4PHXuCVeE4UMn2s4wV%2BYSlYCCx%2Bfk52cFItJtKeeCuQ0V63OTby6Rg5prIeXkxoRUhLFBs1rubBn5cjLCqQYdmjInnuY9VLkc5Jz54Egpur6ymhvC%2B9KzrW4gKId5iLIVWuqSABhKHTloCIHyS1bowdf4R2Rk4J%2F4FGazhAw6%2FXNvQY6pgF%2FuEaCOFOiT1PB1gR5%2BswNhqusz99yJxek7mRQz4ZMl8NJBfX%2FNLUzs2OExxYF9LTPhbS5eGQ0eNku0pFDNywGyLIv5GRuOPS%2FDZsPyGYxNFJziuNA9GSJO0wH%2FMsndPShrZXusXmFUV%2Ft3d6xWHreg5dshUH0Q4KzpvXnHvt9DEJqp1Puv1Rm0Y%2BueGPPC1ZEs9f%2Fnpl4km5x1xaWh%2FdABNN5XJGL&X-Amz-Signature=04791945fc84b5912ab205f578dc1695eace2b65153af56e97521be1b5417bf8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S5DRYX7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T181006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIG5U4GgA3RhRR8tzlSNzdk21jN2HeElmM5%2BfzOuGbrAsAiAviGCv%2Ba3O2PwZ6l7oooj4wl9UotJTSJp6%2Fwp3U0QBISr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM7dCunhEpabIhSvggKtwDBMxx%2F3%2B2XO%2BGXKgUPgXUXXAAvSirAXH53Bic3ZnQnla9fGsiyVayLtHoSgbjXp3vxGpsGLGE%2FsX%2Ba5ayJhg7JQG8rVvBpH2IIX4sFrHJIA82XC9idHvpTOwhTp50SZpOcsZxex3yuDegJ%2FSOEtpu8xzK4awUvFuhEpbVKUmYEBzywC9kUCSHmmNTG21TM0ui1sr%2F1GBbtYlOMwxQfPgiQbHkiigi2LtkkLtgOk%2Bb2Gw2ITeH%2FFGznSVy2x9SxMOHEF1p4clVbXZ%2BFTwBLdF6tjwh8ozq7G484w7U03edLIstqmywYzNh5J7pWHdwV0dePz3Oqb8NMXxL3b56uszVk2V2w22LpfIhK9FgYNsyntc2hGk%2Bj8K39JJkpGEBYjBQn%2BnpbNG5XGGDpfjnv7UKCinvllOAqUYgu5DayHA4KPFqx20qSDfIfaMq%2FkTovGdyTNQreGlVCtLEVBd67HDo4PHXuCVeE4UMn2s4wV%2BYSlYCCx%2Bfk52cFItJtKeeCuQ0V63OTby6Rg5prIeXkxoRUhLFBs1rubBn5cjLCqQYdmjInnuY9VLkc5Jz54Egpur6ymhvC%2B9KzrW4gKId5iLIVWuqSABhKHTloCIHyS1bowdf4R2Rk4J%2F4FGazhAw6%2FXNvQY6pgF%2FuEaCOFOiT1PB1gR5%2BswNhqusz99yJxek7mRQz4ZMl8NJBfX%2FNLUzs2OExxYF9LTPhbS5eGQ0eNku0pFDNywGyLIv5GRuOPS%2FDZsPyGYxNFJziuNA9GSJO0wH%2FMsndPShrZXusXmFUV%2Ft3d6xWHreg5dshUH0Q4KzpvXnHvt9DEJqp1Puv1Rm0Y%2BueGPPC1ZEs9f%2Fnpl4km5x1xaWh%2FdABNN5XJGL&X-Amz-Signature=4ee860b8235cfdae0e12dfe67b8f0a40e0c8db489900246a707cd1dad931096e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S5DRYX7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T181006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIG5U4GgA3RhRR8tzlSNzdk21jN2HeElmM5%2BfzOuGbrAsAiAviGCv%2Ba3O2PwZ6l7oooj4wl9UotJTSJp6%2Fwp3U0QBISr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM7dCunhEpabIhSvggKtwDBMxx%2F3%2B2XO%2BGXKgUPgXUXXAAvSirAXH53Bic3ZnQnla9fGsiyVayLtHoSgbjXp3vxGpsGLGE%2FsX%2Ba5ayJhg7JQG8rVvBpH2IIX4sFrHJIA82XC9idHvpTOwhTp50SZpOcsZxex3yuDegJ%2FSOEtpu8xzK4awUvFuhEpbVKUmYEBzywC9kUCSHmmNTG21TM0ui1sr%2F1GBbtYlOMwxQfPgiQbHkiigi2LtkkLtgOk%2Bb2Gw2ITeH%2FFGznSVy2x9SxMOHEF1p4clVbXZ%2BFTwBLdF6tjwh8ozq7G484w7U03edLIstqmywYzNh5J7pWHdwV0dePz3Oqb8NMXxL3b56uszVk2V2w22LpfIhK9FgYNsyntc2hGk%2Bj8K39JJkpGEBYjBQn%2BnpbNG5XGGDpfjnv7UKCinvllOAqUYgu5DayHA4KPFqx20qSDfIfaMq%2FkTovGdyTNQreGlVCtLEVBd67HDo4PHXuCVeE4UMn2s4wV%2BYSlYCCx%2Bfk52cFItJtKeeCuQ0V63OTby6Rg5prIeXkxoRUhLFBs1rubBn5cjLCqQYdmjInnuY9VLkc5Jz54Egpur6ymhvC%2B9KzrW4gKId5iLIVWuqSABhKHTloCIHyS1bowdf4R2Rk4J%2F4FGazhAw6%2FXNvQY6pgF%2FuEaCOFOiT1PB1gR5%2BswNhqusz99yJxek7mRQz4ZMl8NJBfX%2FNLUzs2OExxYF9LTPhbS5eGQ0eNku0pFDNywGyLIv5GRuOPS%2FDZsPyGYxNFJziuNA9GSJO0wH%2FMsndPShrZXusXmFUV%2Ft3d6xWHreg5dshUH0Q4KzpvXnHvt9DEJqp1Puv1Rm0Y%2BueGPPC1ZEs9f%2Fnpl4km5x1xaWh%2FdABNN5XJGL&X-Amz-Signature=fe5d6caeb647d08ea198ee29032cb5a979af2b64e223c5e86274efaafb543dc8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
