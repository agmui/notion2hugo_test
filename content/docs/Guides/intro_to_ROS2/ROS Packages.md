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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4PJCGTI%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAswsPlTF0H3Vx3iWQb9n1jj%2B0SMR2jK8d%2B5bGNYurI4AiBUeKQF8qjvVRu75EXMe96mHwiK2saGy9pKHEm1a0U5gyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOcYliBQQDmZjcwsgKtwDPWsa5W0VJxLjlq2u06VSPByZ8EbTJgszcOvrHN74sgM7JK6GflcOqmFqx6HHFrXYIwe4PYfPWuez8SW0HnlaRUNSrHnO8z59RoiNz8E9GpazZ%2BnM8%2Ba7SkGggezm5VirJjZJrMCYG1ejHbN%2FWKpMn%2Bw70FvWwgx16mEYyXWgvNDqdOhCypTLlyi8Nrp9mSRfmrCLwLLeKy4b0HBzsaolZKVv4pf%2FaLbLd0ENKJKr%2FkeY4P4in9X4Qfdk9HoitympyoD4w%2FqtEkXe8L%2BreCcVpQew2zlY%2BVca3dDtiD0L2c9knYvlDfKK2WG3WWALdQATp4FN%2Fw%2FixJxD%2FmBZyw3E6w0INBNyHkWEDPKgEYO%2FQp0b%2FiKX8mTcbLXBTPOYuuEcs1MoHBMUjeBlgL06STMpqJ4efl23pp1OE0poBug7FSFELy%2Bw6lKoao5cgziqS3J0lwrvu8UikQrfnDCTnK3H7GEIYcqa2dPcH%2B1xW9B8MHQHAiqlp%2Btf0xkxWABGaKlJIf0XpsBUPP2S1uB%2BIKCBOaD22z2FpMg1h7tcuB3l01p%2F3PnIsPkZClnWNQ5yJqSYTrPuu1weYnHYgtTn4eDW%2FnnK543%2BW5bSgt52NcqiXg8ZgI5yVshLQRnrw4cwtZWSvgY6pgE2l4CI92PFboItuqNFBYGGZ5%2BUU%2F5LtVa4VsX58qzjpGXgQVl8TwhABG%2FnauC5GufbT%2Bj%2Bvzh6KnZZbVeujfCBHpriOAMnC5Hr0Bm5VZp9KHPzE4zvxC1zat9YWQXR71N2fUZbygw1W4JN47sZcawXx%2F%2Bkrroxa1jWTfjA00rct7Gf7JP4kgnxhy5KjItRjTXMyoAYA2Kye%2Bv0NNGiHgIM9NxfOTU4&X-Amz-Signature=68803848abe6142d2a137f4409a60b2adffe1ba3d30ef54a5f6efad345cbc586&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4PJCGTI%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAswsPlTF0H3Vx3iWQb9n1jj%2B0SMR2jK8d%2B5bGNYurI4AiBUeKQF8qjvVRu75EXMe96mHwiK2saGy9pKHEm1a0U5gyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOcYliBQQDmZjcwsgKtwDPWsa5W0VJxLjlq2u06VSPByZ8EbTJgszcOvrHN74sgM7JK6GflcOqmFqx6HHFrXYIwe4PYfPWuez8SW0HnlaRUNSrHnO8z59RoiNz8E9GpazZ%2BnM8%2Ba7SkGggezm5VirJjZJrMCYG1ejHbN%2FWKpMn%2Bw70FvWwgx16mEYyXWgvNDqdOhCypTLlyi8Nrp9mSRfmrCLwLLeKy4b0HBzsaolZKVv4pf%2FaLbLd0ENKJKr%2FkeY4P4in9X4Qfdk9HoitympyoD4w%2FqtEkXe8L%2BreCcVpQew2zlY%2BVca3dDtiD0L2c9knYvlDfKK2WG3WWALdQATp4FN%2Fw%2FixJxD%2FmBZyw3E6w0INBNyHkWEDPKgEYO%2FQp0b%2FiKX8mTcbLXBTPOYuuEcs1MoHBMUjeBlgL06STMpqJ4efl23pp1OE0poBug7FSFELy%2Bw6lKoao5cgziqS3J0lwrvu8UikQrfnDCTnK3H7GEIYcqa2dPcH%2B1xW9B8MHQHAiqlp%2Btf0xkxWABGaKlJIf0XpsBUPP2S1uB%2BIKCBOaD22z2FpMg1h7tcuB3l01p%2F3PnIsPkZClnWNQ5yJqSYTrPuu1weYnHYgtTn4eDW%2FnnK543%2BW5bSgt52NcqiXg8ZgI5yVshLQRnrw4cwtZWSvgY6pgE2l4CI92PFboItuqNFBYGGZ5%2BUU%2F5LtVa4VsX58qzjpGXgQVl8TwhABG%2FnauC5GufbT%2Bj%2Bvzh6KnZZbVeujfCBHpriOAMnC5Hr0Bm5VZp9KHPzE4zvxC1zat9YWQXR71N2fUZbygw1W4JN47sZcawXx%2F%2Bkrroxa1jWTfjA00rct7Gf7JP4kgnxhy5KjItRjTXMyoAYA2Kye%2Bv0NNGiHgIM9NxfOTU4&X-Amz-Signature=eca98a20e31b2f4a70802e893a5648787e6304e72e52e9acb368d0396779f9bf&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4PJCGTI%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAswsPlTF0H3Vx3iWQb9n1jj%2B0SMR2jK8d%2B5bGNYurI4AiBUeKQF8qjvVRu75EXMe96mHwiK2saGy9pKHEm1a0U5gyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOcYliBQQDmZjcwsgKtwDPWsa5W0VJxLjlq2u06VSPByZ8EbTJgszcOvrHN74sgM7JK6GflcOqmFqx6HHFrXYIwe4PYfPWuez8SW0HnlaRUNSrHnO8z59RoiNz8E9GpazZ%2BnM8%2Ba7SkGggezm5VirJjZJrMCYG1ejHbN%2FWKpMn%2Bw70FvWwgx16mEYyXWgvNDqdOhCypTLlyi8Nrp9mSRfmrCLwLLeKy4b0HBzsaolZKVv4pf%2FaLbLd0ENKJKr%2FkeY4P4in9X4Qfdk9HoitympyoD4w%2FqtEkXe8L%2BreCcVpQew2zlY%2BVca3dDtiD0L2c9knYvlDfKK2WG3WWALdQATp4FN%2Fw%2FixJxD%2FmBZyw3E6w0INBNyHkWEDPKgEYO%2FQp0b%2FiKX8mTcbLXBTPOYuuEcs1MoHBMUjeBlgL06STMpqJ4efl23pp1OE0poBug7FSFELy%2Bw6lKoao5cgziqS3J0lwrvu8UikQrfnDCTnK3H7GEIYcqa2dPcH%2B1xW9B8MHQHAiqlp%2Btf0xkxWABGaKlJIf0XpsBUPP2S1uB%2BIKCBOaD22z2FpMg1h7tcuB3l01p%2F3PnIsPkZClnWNQ5yJqSYTrPuu1weYnHYgtTn4eDW%2FnnK543%2BW5bSgt52NcqiXg8ZgI5yVshLQRnrw4cwtZWSvgY6pgE2l4CI92PFboItuqNFBYGGZ5%2BUU%2F5LtVa4VsX58qzjpGXgQVl8TwhABG%2FnauC5GufbT%2Bj%2Bvzh6KnZZbVeujfCBHpriOAMnC5Hr0Bm5VZp9KHPzE4zvxC1zat9YWQXR71N2fUZbygw1W4JN47sZcawXx%2F%2Bkrroxa1jWTfjA00rct7Gf7JP4kgnxhy5KjItRjTXMyoAYA2Kye%2Bv0NNGiHgIM9NxfOTU4&X-Amz-Signature=9e1aaefaee457ebc0d83a27612c8b5f4ba7dbf376d2edbb128e565b6e446aa28&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4PJCGTI%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAswsPlTF0H3Vx3iWQb9n1jj%2B0SMR2jK8d%2B5bGNYurI4AiBUeKQF8qjvVRu75EXMe96mHwiK2saGy9pKHEm1a0U5gyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOcYliBQQDmZjcwsgKtwDPWsa5W0VJxLjlq2u06VSPByZ8EbTJgszcOvrHN74sgM7JK6GflcOqmFqx6HHFrXYIwe4PYfPWuez8SW0HnlaRUNSrHnO8z59RoiNz8E9GpazZ%2BnM8%2Ba7SkGggezm5VirJjZJrMCYG1ejHbN%2FWKpMn%2Bw70FvWwgx16mEYyXWgvNDqdOhCypTLlyi8Nrp9mSRfmrCLwLLeKy4b0HBzsaolZKVv4pf%2FaLbLd0ENKJKr%2FkeY4P4in9X4Qfdk9HoitympyoD4w%2FqtEkXe8L%2BreCcVpQew2zlY%2BVca3dDtiD0L2c9knYvlDfKK2WG3WWALdQATp4FN%2Fw%2FixJxD%2FmBZyw3E6w0INBNyHkWEDPKgEYO%2FQp0b%2FiKX8mTcbLXBTPOYuuEcs1MoHBMUjeBlgL06STMpqJ4efl23pp1OE0poBug7FSFELy%2Bw6lKoao5cgziqS3J0lwrvu8UikQrfnDCTnK3H7GEIYcqa2dPcH%2B1xW9B8MHQHAiqlp%2Btf0xkxWABGaKlJIf0XpsBUPP2S1uB%2BIKCBOaD22z2FpMg1h7tcuB3l01p%2F3PnIsPkZClnWNQ5yJqSYTrPuu1weYnHYgtTn4eDW%2FnnK543%2BW5bSgt52NcqiXg8ZgI5yVshLQRnrw4cwtZWSvgY6pgE2l4CI92PFboItuqNFBYGGZ5%2BUU%2F5LtVa4VsX58qzjpGXgQVl8TwhABG%2FnauC5GufbT%2Bj%2Bvzh6KnZZbVeujfCBHpriOAMnC5Hr0Bm5VZp9KHPzE4zvxC1zat9YWQXR71N2fUZbygw1W4JN47sZcawXx%2F%2Bkrroxa1jWTfjA00rct7Gf7JP4kgnxhy5KjItRjTXMyoAYA2Kye%2Bv0NNGiHgIM9NxfOTU4&X-Amz-Signature=f6428fd3f8966e392eab0d7f2bbe6f847c54a55cd73206bae64be604149f4d80&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4PJCGTI%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAswsPlTF0H3Vx3iWQb9n1jj%2B0SMR2jK8d%2B5bGNYurI4AiBUeKQF8qjvVRu75EXMe96mHwiK2saGy9pKHEm1a0U5gyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOcYliBQQDmZjcwsgKtwDPWsa5W0VJxLjlq2u06VSPByZ8EbTJgszcOvrHN74sgM7JK6GflcOqmFqx6HHFrXYIwe4PYfPWuez8SW0HnlaRUNSrHnO8z59RoiNz8E9GpazZ%2BnM8%2Ba7SkGggezm5VirJjZJrMCYG1ejHbN%2FWKpMn%2Bw70FvWwgx16mEYyXWgvNDqdOhCypTLlyi8Nrp9mSRfmrCLwLLeKy4b0HBzsaolZKVv4pf%2FaLbLd0ENKJKr%2FkeY4P4in9X4Qfdk9HoitympyoD4w%2FqtEkXe8L%2BreCcVpQew2zlY%2BVca3dDtiD0L2c9knYvlDfKK2WG3WWALdQATp4FN%2Fw%2FixJxD%2FmBZyw3E6w0INBNyHkWEDPKgEYO%2FQp0b%2FiKX8mTcbLXBTPOYuuEcs1MoHBMUjeBlgL06STMpqJ4efl23pp1OE0poBug7FSFELy%2Bw6lKoao5cgziqS3J0lwrvu8UikQrfnDCTnK3H7GEIYcqa2dPcH%2B1xW9B8MHQHAiqlp%2Btf0xkxWABGaKlJIf0XpsBUPP2S1uB%2BIKCBOaD22z2FpMg1h7tcuB3l01p%2F3PnIsPkZClnWNQ5yJqSYTrPuu1weYnHYgtTn4eDW%2FnnK543%2BW5bSgt52NcqiXg8ZgI5yVshLQRnrw4cwtZWSvgY6pgE2l4CI92PFboItuqNFBYGGZ5%2BUU%2F5LtVa4VsX58qzjpGXgQVl8TwhABG%2FnauC5GufbT%2Bj%2Bvzh6KnZZbVeujfCBHpriOAMnC5Hr0Bm5VZp9KHPzE4zvxC1zat9YWQXR71N2fUZbygw1W4JN47sZcawXx%2F%2Bkrroxa1jWTfjA00rct7Gf7JP4kgnxhy5KjItRjTXMyoAYA2Kye%2Bv0NNGiHgIM9NxfOTU4&X-Amz-Signature=6a4a488faef8a617a2be043dbb21568770acea9836c8ccf4bec21c34c5374c0e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4PJCGTI%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAswsPlTF0H3Vx3iWQb9n1jj%2B0SMR2jK8d%2B5bGNYurI4AiBUeKQF8qjvVRu75EXMe96mHwiK2saGy9pKHEm1a0U5gyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOcYliBQQDmZjcwsgKtwDPWsa5W0VJxLjlq2u06VSPByZ8EbTJgszcOvrHN74sgM7JK6GflcOqmFqx6HHFrXYIwe4PYfPWuez8SW0HnlaRUNSrHnO8z59RoiNz8E9GpazZ%2BnM8%2Ba7SkGggezm5VirJjZJrMCYG1ejHbN%2FWKpMn%2Bw70FvWwgx16mEYyXWgvNDqdOhCypTLlyi8Nrp9mSRfmrCLwLLeKy4b0HBzsaolZKVv4pf%2FaLbLd0ENKJKr%2FkeY4P4in9X4Qfdk9HoitympyoD4w%2FqtEkXe8L%2BreCcVpQew2zlY%2BVca3dDtiD0L2c9knYvlDfKK2WG3WWALdQATp4FN%2Fw%2FixJxD%2FmBZyw3E6w0INBNyHkWEDPKgEYO%2FQp0b%2FiKX8mTcbLXBTPOYuuEcs1MoHBMUjeBlgL06STMpqJ4efl23pp1OE0poBug7FSFELy%2Bw6lKoao5cgziqS3J0lwrvu8UikQrfnDCTnK3H7GEIYcqa2dPcH%2B1xW9B8MHQHAiqlp%2Btf0xkxWABGaKlJIf0XpsBUPP2S1uB%2BIKCBOaD22z2FpMg1h7tcuB3l01p%2F3PnIsPkZClnWNQ5yJqSYTrPuu1weYnHYgtTn4eDW%2FnnK543%2BW5bSgt52NcqiXg8ZgI5yVshLQRnrw4cwtZWSvgY6pgE2l4CI92PFboItuqNFBYGGZ5%2BUU%2F5LtVa4VsX58qzjpGXgQVl8TwhABG%2FnauC5GufbT%2Bj%2Bvzh6KnZZbVeujfCBHpriOAMnC5Hr0Bm5VZp9KHPzE4zvxC1zat9YWQXR71N2fUZbygw1W4JN47sZcawXx%2F%2Bkrroxa1jWTfjA00rct7Gf7JP4kgnxhy5KjItRjTXMyoAYA2Kye%2Bv0NNGiHgIM9NxfOTU4&X-Amz-Signature=55785fbb33a959dfeec07645c014c9047dd8cf1d429f9fe043ce1dd42abc5526&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4PJCGTI%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAswsPlTF0H3Vx3iWQb9n1jj%2B0SMR2jK8d%2B5bGNYurI4AiBUeKQF8qjvVRu75EXMe96mHwiK2saGy9pKHEm1a0U5gyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOcYliBQQDmZjcwsgKtwDPWsa5W0VJxLjlq2u06VSPByZ8EbTJgszcOvrHN74sgM7JK6GflcOqmFqx6HHFrXYIwe4PYfPWuez8SW0HnlaRUNSrHnO8z59RoiNz8E9GpazZ%2BnM8%2Ba7SkGggezm5VirJjZJrMCYG1ejHbN%2FWKpMn%2Bw70FvWwgx16mEYyXWgvNDqdOhCypTLlyi8Nrp9mSRfmrCLwLLeKy4b0HBzsaolZKVv4pf%2FaLbLd0ENKJKr%2FkeY4P4in9X4Qfdk9HoitympyoD4w%2FqtEkXe8L%2BreCcVpQew2zlY%2BVca3dDtiD0L2c9knYvlDfKK2WG3WWALdQATp4FN%2Fw%2FixJxD%2FmBZyw3E6w0INBNyHkWEDPKgEYO%2FQp0b%2FiKX8mTcbLXBTPOYuuEcs1MoHBMUjeBlgL06STMpqJ4efl23pp1OE0poBug7FSFELy%2Bw6lKoao5cgziqS3J0lwrvu8UikQrfnDCTnK3H7GEIYcqa2dPcH%2B1xW9B8MHQHAiqlp%2Btf0xkxWABGaKlJIf0XpsBUPP2S1uB%2BIKCBOaD22z2FpMg1h7tcuB3l01p%2F3PnIsPkZClnWNQ5yJqSYTrPuu1weYnHYgtTn4eDW%2FnnK543%2BW5bSgt52NcqiXg8ZgI5yVshLQRnrw4cwtZWSvgY6pgE2l4CI92PFboItuqNFBYGGZ5%2BUU%2F5LtVa4VsX58qzjpGXgQVl8TwhABG%2FnauC5GufbT%2Bj%2Bvzh6KnZZbVeujfCBHpriOAMnC5Hr0Bm5VZp9KHPzE4zvxC1zat9YWQXR71N2fUZbygw1W4JN47sZcawXx%2F%2Bkrroxa1jWTfjA00rct7Gf7JP4kgnxhy5KjItRjTXMyoAYA2Kye%2Bv0NNGiHgIM9NxfOTU4&X-Amz-Signature=3de5467f2f738152809d6fbd9f549a4fa9d9e04966ad2aa75df6c189803999cc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
