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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNBVQQUU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2FY%2BKPrDcqjeUvvbogAVIZ2pEnkFweIF0y7uwKXduWAiBQXhlCN0BW3RacsE2Npcqr1FLlKeKLfpJi42dbQqP%2BhiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeiF6EIA%2BoePmyKNWKtwD213ppna8rvHHoL8A9ZvfG0lxkIHiNVCm33lAB%2B6SU8XaOH8vOygPAp2IrzcH2f9yiu%2BLWeGnoWMA8m9xZN60reDBv9UQeCMKUQkpS8ttZjaSSwyZ8y1SWVMyTIEvsuyFx01lyViSZKHA721BxsagsmQnVJndczMqvtMYmF6Lb%2BafeWq%2BSRv2enKakZNT%2Br4dy7%2FvTU%2Bov%2F7GAUl0MwzpnIGAaXLjsLmlm87dgySz44DHUTPseEJqfdLGyqgAegwltFS3HTFcKWR7Jo0L%2FksEttrG87OrG2SKtIz46Kzh3J9Tth%2Fz4kOUm2Jl8EukvXMgxB4Zx6o2NfS78gRVjlq2Jib5ytsnbevfKKqv0ggYGv6cwfBqhcZC%2BrIzxnpU0CrlhYVQCJRGB2jTqk7ewS4pa2AjwTDmc0FvJAteq%2FQUarWXflM64pysfdhjtkm2sT%2FL4Wqu7kWpm%2BTTQmaDlIzzRj7HqIhfg9sYZd%2F3tXUU1KAouXfdtymE7o6jcYpQA6eSZSWQ4MVsMjhd1x5Ij9M%2FL4y0SKzPAb0GEcK787UFO22iRY4TM562q26k%2BCiAm5GV2KWj1weU9gOPqS7PJ9FDDvQbBUZTlLbtjo3r%2B%2BaLzt2MOYw4Zek0S%2FNNtGEwl4jdwgY6pgFknJJBrkBIhFfOMSS9XgnHkRWJp1l8pZoT6G74%2FXoBVjYoByLeOtEPYt1AaAus5o70NwPHOJak%2FdG%2BN%2FT%2F61CAM%2FY8fFnY24stNL%2BmVQjqDsPLr7U5l9NHpaqeUTKaaxoaJ6XqqtepumATYMdCtprJrUI%2BJ9TWROaIQh7UsnIjfv59uYL5eRwbg4bAFh3rPdp54Vf2Mi3RsxpWSq%2BMOUP55hVp2CNd&X-Amz-Signature=dcd610fb183df518f91d109b28f77df7b7b70e36d3e8d9c217f0ce3f445ed127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNBVQQUU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2FY%2BKPrDcqjeUvvbogAVIZ2pEnkFweIF0y7uwKXduWAiBQXhlCN0BW3RacsE2Npcqr1FLlKeKLfpJi42dbQqP%2BhiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeiF6EIA%2BoePmyKNWKtwD213ppna8rvHHoL8A9ZvfG0lxkIHiNVCm33lAB%2B6SU8XaOH8vOygPAp2IrzcH2f9yiu%2BLWeGnoWMA8m9xZN60reDBv9UQeCMKUQkpS8ttZjaSSwyZ8y1SWVMyTIEvsuyFx01lyViSZKHA721BxsagsmQnVJndczMqvtMYmF6Lb%2BafeWq%2BSRv2enKakZNT%2Br4dy7%2FvTU%2Bov%2F7GAUl0MwzpnIGAaXLjsLmlm87dgySz44DHUTPseEJqfdLGyqgAegwltFS3HTFcKWR7Jo0L%2FksEttrG87OrG2SKtIz46Kzh3J9Tth%2Fz4kOUm2Jl8EukvXMgxB4Zx6o2NfS78gRVjlq2Jib5ytsnbevfKKqv0ggYGv6cwfBqhcZC%2BrIzxnpU0CrlhYVQCJRGB2jTqk7ewS4pa2AjwTDmc0FvJAteq%2FQUarWXflM64pysfdhjtkm2sT%2FL4Wqu7kWpm%2BTTQmaDlIzzRj7HqIhfg9sYZd%2F3tXUU1KAouXfdtymE7o6jcYpQA6eSZSWQ4MVsMjhd1x5Ij9M%2FL4y0SKzPAb0GEcK787UFO22iRY4TM562q26k%2BCiAm5GV2KWj1weU9gOPqS7PJ9FDDvQbBUZTlLbtjo3r%2B%2BaLzt2MOYw4Zek0S%2FNNtGEwl4jdwgY6pgFknJJBrkBIhFfOMSS9XgnHkRWJp1l8pZoT6G74%2FXoBVjYoByLeOtEPYt1AaAus5o70NwPHOJak%2FdG%2BN%2FT%2F61CAM%2FY8fFnY24stNL%2BmVQjqDsPLr7U5l9NHpaqeUTKaaxoaJ6XqqtepumATYMdCtprJrUI%2BJ9TWROaIQh7UsnIjfv59uYL5eRwbg4bAFh3rPdp54Vf2Mi3RsxpWSq%2BMOUP55hVp2CNd&X-Amz-Signature=5fcdd3c3b78152a4fed904ad9477b2163fbd1103f9a0c264af6b56e0d618bb48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNBVQQUU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2FY%2BKPrDcqjeUvvbogAVIZ2pEnkFweIF0y7uwKXduWAiBQXhlCN0BW3RacsE2Npcqr1FLlKeKLfpJi42dbQqP%2BhiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeiF6EIA%2BoePmyKNWKtwD213ppna8rvHHoL8A9ZvfG0lxkIHiNVCm33lAB%2B6SU8XaOH8vOygPAp2IrzcH2f9yiu%2BLWeGnoWMA8m9xZN60reDBv9UQeCMKUQkpS8ttZjaSSwyZ8y1SWVMyTIEvsuyFx01lyViSZKHA721BxsagsmQnVJndczMqvtMYmF6Lb%2BafeWq%2BSRv2enKakZNT%2Br4dy7%2FvTU%2Bov%2F7GAUl0MwzpnIGAaXLjsLmlm87dgySz44DHUTPseEJqfdLGyqgAegwltFS3HTFcKWR7Jo0L%2FksEttrG87OrG2SKtIz46Kzh3J9Tth%2Fz4kOUm2Jl8EukvXMgxB4Zx6o2NfS78gRVjlq2Jib5ytsnbevfKKqv0ggYGv6cwfBqhcZC%2BrIzxnpU0CrlhYVQCJRGB2jTqk7ewS4pa2AjwTDmc0FvJAteq%2FQUarWXflM64pysfdhjtkm2sT%2FL4Wqu7kWpm%2BTTQmaDlIzzRj7HqIhfg9sYZd%2F3tXUU1KAouXfdtymE7o6jcYpQA6eSZSWQ4MVsMjhd1x5Ij9M%2FL4y0SKzPAb0GEcK787UFO22iRY4TM562q26k%2BCiAm5GV2KWj1weU9gOPqS7PJ9FDDvQbBUZTlLbtjo3r%2B%2BaLzt2MOYw4Zek0S%2FNNtGEwl4jdwgY6pgFknJJBrkBIhFfOMSS9XgnHkRWJp1l8pZoT6G74%2FXoBVjYoByLeOtEPYt1AaAus5o70NwPHOJak%2FdG%2BN%2FT%2F61CAM%2FY8fFnY24stNL%2BmVQjqDsPLr7U5l9NHpaqeUTKaaxoaJ6XqqtepumATYMdCtprJrUI%2BJ9TWROaIQh7UsnIjfv59uYL5eRwbg4bAFh3rPdp54Vf2Mi3RsxpWSq%2BMOUP55hVp2CNd&X-Amz-Signature=331bf3c0835d887b4aaec2c3e853d27472cd63090dc9c931633d8074e04837a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNBVQQUU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2FY%2BKPrDcqjeUvvbogAVIZ2pEnkFweIF0y7uwKXduWAiBQXhlCN0BW3RacsE2Npcqr1FLlKeKLfpJi42dbQqP%2BhiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeiF6EIA%2BoePmyKNWKtwD213ppna8rvHHoL8A9ZvfG0lxkIHiNVCm33lAB%2B6SU8XaOH8vOygPAp2IrzcH2f9yiu%2BLWeGnoWMA8m9xZN60reDBv9UQeCMKUQkpS8ttZjaSSwyZ8y1SWVMyTIEvsuyFx01lyViSZKHA721BxsagsmQnVJndczMqvtMYmF6Lb%2BafeWq%2BSRv2enKakZNT%2Br4dy7%2FvTU%2Bov%2F7GAUl0MwzpnIGAaXLjsLmlm87dgySz44DHUTPseEJqfdLGyqgAegwltFS3HTFcKWR7Jo0L%2FksEttrG87OrG2SKtIz46Kzh3J9Tth%2Fz4kOUm2Jl8EukvXMgxB4Zx6o2NfS78gRVjlq2Jib5ytsnbevfKKqv0ggYGv6cwfBqhcZC%2BrIzxnpU0CrlhYVQCJRGB2jTqk7ewS4pa2AjwTDmc0FvJAteq%2FQUarWXflM64pysfdhjtkm2sT%2FL4Wqu7kWpm%2BTTQmaDlIzzRj7HqIhfg9sYZd%2F3tXUU1KAouXfdtymE7o6jcYpQA6eSZSWQ4MVsMjhd1x5Ij9M%2FL4y0SKzPAb0GEcK787UFO22iRY4TM562q26k%2BCiAm5GV2KWj1weU9gOPqS7PJ9FDDvQbBUZTlLbtjo3r%2B%2BaLzt2MOYw4Zek0S%2FNNtGEwl4jdwgY6pgFknJJBrkBIhFfOMSS9XgnHkRWJp1l8pZoT6G74%2FXoBVjYoByLeOtEPYt1AaAus5o70NwPHOJak%2FdG%2BN%2FT%2F61CAM%2FY8fFnY24stNL%2BmVQjqDsPLr7U5l9NHpaqeUTKaaxoaJ6XqqtepumATYMdCtprJrUI%2BJ9TWROaIQh7UsnIjfv59uYL5eRwbg4bAFh3rPdp54Vf2Mi3RsxpWSq%2BMOUP55hVp2CNd&X-Amz-Signature=b111ca4a46ed9483c44094f41697e492b4f49371d2879c3fbd1614f5b3e69351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNBVQQUU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2FY%2BKPrDcqjeUvvbogAVIZ2pEnkFweIF0y7uwKXduWAiBQXhlCN0BW3RacsE2Npcqr1FLlKeKLfpJi42dbQqP%2BhiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeiF6EIA%2BoePmyKNWKtwD213ppna8rvHHoL8A9ZvfG0lxkIHiNVCm33lAB%2B6SU8XaOH8vOygPAp2IrzcH2f9yiu%2BLWeGnoWMA8m9xZN60reDBv9UQeCMKUQkpS8ttZjaSSwyZ8y1SWVMyTIEvsuyFx01lyViSZKHA721BxsagsmQnVJndczMqvtMYmF6Lb%2BafeWq%2BSRv2enKakZNT%2Br4dy7%2FvTU%2Bov%2F7GAUl0MwzpnIGAaXLjsLmlm87dgySz44DHUTPseEJqfdLGyqgAegwltFS3HTFcKWR7Jo0L%2FksEttrG87OrG2SKtIz46Kzh3J9Tth%2Fz4kOUm2Jl8EukvXMgxB4Zx6o2NfS78gRVjlq2Jib5ytsnbevfKKqv0ggYGv6cwfBqhcZC%2BrIzxnpU0CrlhYVQCJRGB2jTqk7ewS4pa2AjwTDmc0FvJAteq%2FQUarWXflM64pysfdhjtkm2sT%2FL4Wqu7kWpm%2BTTQmaDlIzzRj7HqIhfg9sYZd%2F3tXUU1KAouXfdtymE7o6jcYpQA6eSZSWQ4MVsMjhd1x5Ij9M%2FL4y0SKzPAb0GEcK787UFO22iRY4TM562q26k%2BCiAm5GV2KWj1weU9gOPqS7PJ9FDDvQbBUZTlLbtjo3r%2B%2BaLzt2MOYw4Zek0S%2FNNtGEwl4jdwgY6pgFknJJBrkBIhFfOMSS9XgnHkRWJp1l8pZoT6G74%2FXoBVjYoByLeOtEPYt1AaAus5o70NwPHOJak%2FdG%2BN%2FT%2F61CAM%2FY8fFnY24stNL%2BmVQjqDsPLr7U5l9NHpaqeUTKaaxoaJ6XqqtepumATYMdCtprJrUI%2BJ9TWROaIQh7UsnIjfv59uYL5eRwbg4bAFh3rPdp54Vf2Mi3RsxpWSq%2BMOUP55hVp2CNd&X-Amz-Signature=c404ea48a76f207071e27adac7450917d51840027690ee1a855ad915b95dd56a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNBVQQUU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2FY%2BKPrDcqjeUvvbogAVIZ2pEnkFweIF0y7uwKXduWAiBQXhlCN0BW3RacsE2Npcqr1FLlKeKLfpJi42dbQqP%2BhiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeiF6EIA%2BoePmyKNWKtwD213ppna8rvHHoL8A9ZvfG0lxkIHiNVCm33lAB%2B6SU8XaOH8vOygPAp2IrzcH2f9yiu%2BLWeGnoWMA8m9xZN60reDBv9UQeCMKUQkpS8ttZjaSSwyZ8y1SWVMyTIEvsuyFx01lyViSZKHA721BxsagsmQnVJndczMqvtMYmF6Lb%2BafeWq%2BSRv2enKakZNT%2Br4dy7%2FvTU%2Bov%2F7GAUl0MwzpnIGAaXLjsLmlm87dgySz44DHUTPseEJqfdLGyqgAegwltFS3HTFcKWR7Jo0L%2FksEttrG87OrG2SKtIz46Kzh3J9Tth%2Fz4kOUm2Jl8EukvXMgxB4Zx6o2NfS78gRVjlq2Jib5ytsnbevfKKqv0ggYGv6cwfBqhcZC%2BrIzxnpU0CrlhYVQCJRGB2jTqk7ewS4pa2AjwTDmc0FvJAteq%2FQUarWXflM64pysfdhjtkm2sT%2FL4Wqu7kWpm%2BTTQmaDlIzzRj7HqIhfg9sYZd%2F3tXUU1KAouXfdtymE7o6jcYpQA6eSZSWQ4MVsMjhd1x5Ij9M%2FL4y0SKzPAb0GEcK787UFO22iRY4TM562q26k%2BCiAm5GV2KWj1weU9gOPqS7PJ9FDDvQbBUZTlLbtjo3r%2B%2BaLzt2MOYw4Zek0S%2FNNtGEwl4jdwgY6pgFknJJBrkBIhFfOMSS9XgnHkRWJp1l8pZoT6G74%2FXoBVjYoByLeOtEPYt1AaAus5o70NwPHOJak%2FdG%2BN%2FT%2F61CAM%2FY8fFnY24stNL%2BmVQjqDsPLr7U5l9NHpaqeUTKaaxoaJ6XqqtepumATYMdCtprJrUI%2BJ9TWROaIQh7UsnIjfv59uYL5eRwbg4bAFh3rPdp54Vf2Mi3RsxpWSq%2BMOUP55hVp2CNd&X-Amz-Signature=072294e5aed7deabd7b859c05b14c61bbf2c46a10c358baddfbf279f82321d5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNBVQQUU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2FY%2BKPrDcqjeUvvbogAVIZ2pEnkFweIF0y7uwKXduWAiBQXhlCN0BW3RacsE2Npcqr1FLlKeKLfpJi42dbQqP%2BhiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeiF6EIA%2BoePmyKNWKtwD213ppna8rvHHoL8A9ZvfG0lxkIHiNVCm33lAB%2B6SU8XaOH8vOygPAp2IrzcH2f9yiu%2BLWeGnoWMA8m9xZN60reDBv9UQeCMKUQkpS8ttZjaSSwyZ8y1SWVMyTIEvsuyFx01lyViSZKHA721BxsagsmQnVJndczMqvtMYmF6Lb%2BafeWq%2BSRv2enKakZNT%2Br4dy7%2FvTU%2Bov%2F7GAUl0MwzpnIGAaXLjsLmlm87dgySz44DHUTPseEJqfdLGyqgAegwltFS3HTFcKWR7Jo0L%2FksEttrG87OrG2SKtIz46Kzh3J9Tth%2Fz4kOUm2Jl8EukvXMgxB4Zx6o2NfS78gRVjlq2Jib5ytsnbevfKKqv0ggYGv6cwfBqhcZC%2BrIzxnpU0CrlhYVQCJRGB2jTqk7ewS4pa2AjwTDmc0FvJAteq%2FQUarWXflM64pysfdhjtkm2sT%2FL4Wqu7kWpm%2BTTQmaDlIzzRj7HqIhfg9sYZd%2F3tXUU1KAouXfdtymE7o6jcYpQA6eSZSWQ4MVsMjhd1x5Ij9M%2FL4y0SKzPAb0GEcK787UFO22iRY4TM562q26k%2BCiAm5GV2KWj1weU9gOPqS7PJ9FDDvQbBUZTlLbtjo3r%2B%2BaLzt2MOYw4Zek0S%2FNNtGEwl4jdwgY6pgFknJJBrkBIhFfOMSS9XgnHkRWJp1l8pZoT6G74%2FXoBVjYoByLeOtEPYt1AaAus5o70NwPHOJak%2FdG%2BN%2FT%2F61CAM%2FY8fFnY24stNL%2BmVQjqDsPLr7U5l9NHpaqeUTKaaxoaJ6XqqtepumATYMdCtprJrUI%2BJ9TWROaIQh7UsnIjfv59uYL5eRwbg4bAFh3rPdp54Vf2Mi3RsxpWSq%2BMOUP55hVp2CNd&X-Amz-Signature=c4d2983b62f095e35f774a502703d104075e3b952d0762ff5d981f47926d988f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
