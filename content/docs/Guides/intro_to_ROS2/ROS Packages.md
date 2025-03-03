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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DVFD3BE%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4PsTaucnynLvTsG8EjvSMBAPlbyrm6W0RnW8HweTenwIhAIb0TV96g36BAoh2ZEknYXbS7rodgk6D2mVbgq4G6r6eKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxH8g8D4CJsDybOhcwq3AOkkWKXonJKMAglWFObadb4oKMbtHkJvxFbdeyZ8%2BO3KgUOEKI%2B%2FL%2BWJ04kpXNXYqvUTvZbwtb0r9WRl30vhVdSDZfJ4X8STFcaNU5O4sGG5%2F6dH%2FunA5ODGGXcIT%2FGd43NBXArBJuBYzw9PFgWfVrQ4c2A4tvp1w5K8LIqxZhullHTsaJUeXwJtmLyo5Y8ELxNhml4r2YYAnjvxewGieKBwDOm%2Fd%2BN4Pi2IcmWPU8D4bX4hAsN6HC6z4DcAG0E6ttGoTRTb%2BuoFJWnIc1qfs5HM1uEikFUKo5zVp6OfBZHFO2y%2B7rM%2BlvUck8UggJ4Q4Yn9zY19i1nQki8nGb6AWIKPQL8ZqCG9pRBBX31iLs8tGouJkNPSFHYhFKo5a5ekG0LzutjD9atipbvsz66PHTzYDR3wSZls2j1Pko9gwaEEELWmSXtTsL4HYMqD8FGvOfzWVPaXReoOqfElpt0haOi5tos7AUdWTiMuryyWeVf%2B8mlR4OQVB9v50nUvRtaA67NlMJi67ECRTbBzG1lyR1gj8qNn9yxI7ZaiAcekSedBqcl%2BEIVFjdx5rO9WXjhSENg3xyMpE%2FDDCufwEOwh5SXQT%2FTCQ5BvsJ77PKnBoPvDshkBuLopn2Ol2AU5zCdzpW%2BBjqkAXMXzZCKMMhzzNY2luYK6RLZHld%2Bsz0pZy4Oh%2F1YMwRUfrByyi8YwfEHN7PjdXg8Cdb0w8pEuKEEiFXlAXJPlNIUIpLL%2FLhmAv2oSUYL%2FpRuqGXulyjTnhzZSNfQ7eVrf%2BTjfkXZ8LpLbctme1brIJoFLRwwZxBIWlRCAXQB%2BEXZPSxY4zDLvmcU4PLgeRfCiGcUNraWnBWsOa6noCS8KrNJfbq2&X-Amz-Signature=b3d27c11aa52214f4014ec49f765c33d15ab022896c336e461873f9deeef8d5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DVFD3BE%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4PsTaucnynLvTsG8EjvSMBAPlbyrm6W0RnW8HweTenwIhAIb0TV96g36BAoh2ZEknYXbS7rodgk6D2mVbgq4G6r6eKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxH8g8D4CJsDybOhcwq3AOkkWKXonJKMAglWFObadb4oKMbtHkJvxFbdeyZ8%2BO3KgUOEKI%2B%2FL%2BWJ04kpXNXYqvUTvZbwtb0r9WRl30vhVdSDZfJ4X8STFcaNU5O4sGG5%2F6dH%2FunA5ODGGXcIT%2FGd43NBXArBJuBYzw9PFgWfVrQ4c2A4tvp1w5K8LIqxZhullHTsaJUeXwJtmLyo5Y8ELxNhml4r2YYAnjvxewGieKBwDOm%2Fd%2BN4Pi2IcmWPU8D4bX4hAsN6HC6z4DcAG0E6ttGoTRTb%2BuoFJWnIc1qfs5HM1uEikFUKo5zVp6OfBZHFO2y%2B7rM%2BlvUck8UggJ4Q4Yn9zY19i1nQki8nGb6AWIKPQL8ZqCG9pRBBX31iLs8tGouJkNPSFHYhFKo5a5ekG0LzutjD9atipbvsz66PHTzYDR3wSZls2j1Pko9gwaEEELWmSXtTsL4HYMqD8FGvOfzWVPaXReoOqfElpt0haOi5tos7AUdWTiMuryyWeVf%2B8mlR4OQVB9v50nUvRtaA67NlMJi67ECRTbBzG1lyR1gj8qNn9yxI7ZaiAcekSedBqcl%2BEIVFjdx5rO9WXjhSENg3xyMpE%2FDDCufwEOwh5SXQT%2FTCQ5BvsJ77PKnBoPvDshkBuLopn2Ol2AU5zCdzpW%2BBjqkAXMXzZCKMMhzzNY2luYK6RLZHld%2Bsz0pZy4Oh%2F1YMwRUfrByyi8YwfEHN7PjdXg8Cdb0w8pEuKEEiFXlAXJPlNIUIpLL%2FLhmAv2oSUYL%2FpRuqGXulyjTnhzZSNfQ7eVrf%2BTjfkXZ8LpLbctme1brIJoFLRwwZxBIWlRCAXQB%2BEXZPSxY4zDLvmcU4PLgeRfCiGcUNraWnBWsOa6noCS8KrNJfbq2&X-Amz-Signature=adac9533c94ebe3f30ec14b09cdbd72f2555e7d4ac37a9f3a39c3bd35e513b94&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DVFD3BE%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4PsTaucnynLvTsG8EjvSMBAPlbyrm6W0RnW8HweTenwIhAIb0TV96g36BAoh2ZEknYXbS7rodgk6D2mVbgq4G6r6eKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxH8g8D4CJsDybOhcwq3AOkkWKXonJKMAglWFObadb4oKMbtHkJvxFbdeyZ8%2BO3KgUOEKI%2B%2FL%2BWJ04kpXNXYqvUTvZbwtb0r9WRl30vhVdSDZfJ4X8STFcaNU5O4sGG5%2F6dH%2FunA5ODGGXcIT%2FGd43NBXArBJuBYzw9PFgWfVrQ4c2A4tvp1w5K8LIqxZhullHTsaJUeXwJtmLyo5Y8ELxNhml4r2YYAnjvxewGieKBwDOm%2Fd%2BN4Pi2IcmWPU8D4bX4hAsN6HC6z4DcAG0E6ttGoTRTb%2BuoFJWnIc1qfs5HM1uEikFUKo5zVp6OfBZHFO2y%2B7rM%2BlvUck8UggJ4Q4Yn9zY19i1nQki8nGb6AWIKPQL8ZqCG9pRBBX31iLs8tGouJkNPSFHYhFKo5a5ekG0LzutjD9atipbvsz66PHTzYDR3wSZls2j1Pko9gwaEEELWmSXtTsL4HYMqD8FGvOfzWVPaXReoOqfElpt0haOi5tos7AUdWTiMuryyWeVf%2B8mlR4OQVB9v50nUvRtaA67NlMJi67ECRTbBzG1lyR1gj8qNn9yxI7ZaiAcekSedBqcl%2BEIVFjdx5rO9WXjhSENg3xyMpE%2FDDCufwEOwh5SXQT%2FTCQ5BvsJ77PKnBoPvDshkBuLopn2Ol2AU5zCdzpW%2BBjqkAXMXzZCKMMhzzNY2luYK6RLZHld%2Bsz0pZy4Oh%2F1YMwRUfrByyi8YwfEHN7PjdXg8Cdb0w8pEuKEEiFXlAXJPlNIUIpLL%2FLhmAv2oSUYL%2FpRuqGXulyjTnhzZSNfQ7eVrf%2BTjfkXZ8LpLbctme1brIJoFLRwwZxBIWlRCAXQB%2BEXZPSxY4zDLvmcU4PLgeRfCiGcUNraWnBWsOa6noCS8KrNJfbq2&X-Amz-Signature=9e66395a5992ca6ece856e4dc42247c7fcc1c064df64f27e85805eb2b6988fb4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DVFD3BE%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4PsTaucnynLvTsG8EjvSMBAPlbyrm6W0RnW8HweTenwIhAIb0TV96g36BAoh2ZEknYXbS7rodgk6D2mVbgq4G6r6eKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxH8g8D4CJsDybOhcwq3AOkkWKXonJKMAglWFObadb4oKMbtHkJvxFbdeyZ8%2BO3KgUOEKI%2B%2FL%2BWJ04kpXNXYqvUTvZbwtb0r9WRl30vhVdSDZfJ4X8STFcaNU5O4sGG5%2F6dH%2FunA5ODGGXcIT%2FGd43NBXArBJuBYzw9PFgWfVrQ4c2A4tvp1w5K8LIqxZhullHTsaJUeXwJtmLyo5Y8ELxNhml4r2YYAnjvxewGieKBwDOm%2Fd%2BN4Pi2IcmWPU8D4bX4hAsN6HC6z4DcAG0E6ttGoTRTb%2BuoFJWnIc1qfs5HM1uEikFUKo5zVp6OfBZHFO2y%2B7rM%2BlvUck8UggJ4Q4Yn9zY19i1nQki8nGb6AWIKPQL8ZqCG9pRBBX31iLs8tGouJkNPSFHYhFKo5a5ekG0LzutjD9atipbvsz66PHTzYDR3wSZls2j1Pko9gwaEEELWmSXtTsL4HYMqD8FGvOfzWVPaXReoOqfElpt0haOi5tos7AUdWTiMuryyWeVf%2B8mlR4OQVB9v50nUvRtaA67NlMJi67ECRTbBzG1lyR1gj8qNn9yxI7ZaiAcekSedBqcl%2BEIVFjdx5rO9WXjhSENg3xyMpE%2FDDCufwEOwh5SXQT%2FTCQ5BvsJ77PKnBoPvDshkBuLopn2Ol2AU5zCdzpW%2BBjqkAXMXzZCKMMhzzNY2luYK6RLZHld%2Bsz0pZy4Oh%2F1YMwRUfrByyi8YwfEHN7PjdXg8Cdb0w8pEuKEEiFXlAXJPlNIUIpLL%2FLhmAv2oSUYL%2FpRuqGXulyjTnhzZSNfQ7eVrf%2BTjfkXZ8LpLbctme1brIJoFLRwwZxBIWlRCAXQB%2BEXZPSxY4zDLvmcU4PLgeRfCiGcUNraWnBWsOa6noCS8KrNJfbq2&X-Amz-Signature=1a1dc4305c32cf6c082cc2e400e84be2ffbb4017b799420138dd53fb689318df&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DVFD3BE%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4PsTaucnynLvTsG8EjvSMBAPlbyrm6W0RnW8HweTenwIhAIb0TV96g36BAoh2ZEknYXbS7rodgk6D2mVbgq4G6r6eKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxH8g8D4CJsDybOhcwq3AOkkWKXonJKMAglWFObadb4oKMbtHkJvxFbdeyZ8%2BO3KgUOEKI%2B%2FL%2BWJ04kpXNXYqvUTvZbwtb0r9WRl30vhVdSDZfJ4X8STFcaNU5O4sGG5%2F6dH%2FunA5ODGGXcIT%2FGd43NBXArBJuBYzw9PFgWfVrQ4c2A4tvp1w5K8LIqxZhullHTsaJUeXwJtmLyo5Y8ELxNhml4r2YYAnjvxewGieKBwDOm%2Fd%2BN4Pi2IcmWPU8D4bX4hAsN6HC6z4DcAG0E6ttGoTRTb%2BuoFJWnIc1qfs5HM1uEikFUKo5zVp6OfBZHFO2y%2B7rM%2BlvUck8UggJ4Q4Yn9zY19i1nQki8nGb6AWIKPQL8ZqCG9pRBBX31iLs8tGouJkNPSFHYhFKo5a5ekG0LzutjD9atipbvsz66PHTzYDR3wSZls2j1Pko9gwaEEELWmSXtTsL4HYMqD8FGvOfzWVPaXReoOqfElpt0haOi5tos7AUdWTiMuryyWeVf%2B8mlR4OQVB9v50nUvRtaA67NlMJi67ECRTbBzG1lyR1gj8qNn9yxI7ZaiAcekSedBqcl%2BEIVFjdx5rO9WXjhSENg3xyMpE%2FDDCufwEOwh5SXQT%2FTCQ5BvsJ77PKnBoPvDshkBuLopn2Ol2AU5zCdzpW%2BBjqkAXMXzZCKMMhzzNY2luYK6RLZHld%2Bsz0pZy4Oh%2F1YMwRUfrByyi8YwfEHN7PjdXg8Cdb0w8pEuKEEiFXlAXJPlNIUIpLL%2FLhmAv2oSUYL%2FpRuqGXulyjTnhzZSNfQ7eVrf%2BTjfkXZ8LpLbctme1brIJoFLRwwZxBIWlRCAXQB%2BEXZPSxY4zDLvmcU4PLgeRfCiGcUNraWnBWsOa6noCS8KrNJfbq2&X-Amz-Signature=4fc3b74387ad495d76c1f646c944f85eaed5fa34d550e9ab10e24d10dfb6caad&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DVFD3BE%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4PsTaucnynLvTsG8EjvSMBAPlbyrm6W0RnW8HweTenwIhAIb0TV96g36BAoh2ZEknYXbS7rodgk6D2mVbgq4G6r6eKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxH8g8D4CJsDybOhcwq3AOkkWKXonJKMAglWFObadb4oKMbtHkJvxFbdeyZ8%2BO3KgUOEKI%2B%2FL%2BWJ04kpXNXYqvUTvZbwtb0r9WRl30vhVdSDZfJ4X8STFcaNU5O4sGG5%2F6dH%2FunA5ODGGXcIT%2FGd43NBXArBJuBYzw9PFgWfVrQ4c2A4tvp1w5K8LIqxZhullHTsaJUeXwJtmLyo5Y8ELxNhml4r2YYAnjvxewGieKBwDOm%2Fd%2BN4Pi2IcmWPU8D4bX4hAsN6HC6z4DcAG0E6ttGoTRTb%2BuoFJWnIc1qfs5HM1uEikFUKo5zVp6OfBZHFO2y%2B7rM%2BlvUck8UggJ4Q4Yn9zY19i1nQki8nGb6AWIKPQL8ZqCG9pRBBX31iLs8tGouJkNPSFHYhFKo5a5ekG0LzutjD9atipbvsz66PHTzYDR3wSZls2j1Pko9gwaEEELWmSXtTsL4HYMqD8FGvOfzWVPaXReoOqfElpt0haOi5tos7AUdWTiMuryyWeVf%2B8mlR4OQVB9v50nUvRtaA67NlMJi67ECRTbBzG1lyR1gj8qNn9yxI7ZaiAcekSedBqcl%2BEIVFjdx5rO9WXjhSENg3xyMpE%2FDDCufwEOwh5SXQT%2FTCQ5BvsJ77PKnBoPvDshkBuLopn2Ol2AU5zCdzpW%2BBjqkAXMXzZCKMMhzzNY2luYK6RLZHld%2Bsz0pZy4Oh%2F1YMwRUfrByyi8YwfEHN7PjdXg8Cdb0w8pEuKEEiFXlAXJPlNIUIpLL%2FLhmAv2oSUYL%2FpRuqGXulyjTnhzZSNfQ7eVrf%2BTjfkXZ8LpLbctme1brIJoFLRwwZxBIWlRCAXQB%2BEXZPSxY4zDLvmcU4PLgeRfCiGcUNraWnBWsOa6noCS8KrNJfbq2&X-Amz-Signature=55a0ecca925db356adaed9ba5a1b44722eeeee48b4cdcf21b7a33b7beb04132e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DVFD3BE%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4PsTaucnynLvTsG8EjvSMBAPlbyrm6W0RnW8HweTenwIhAIb0TV96g36BAoh2ZEknYXbS7rodgk6D2mVbgq4G6r6eKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxH8g8D4CJsDybOhcwq3AOkkWKXonJKMAglWFObadb4oKMbtHkJvxFbdeyZ8%2BO3KgUOEKI%2B%2FL%2BWJ04kpXNXYqvUTvZbwtb0r9WRl30vhVdSDZfJ4X8STFcaNU5O4sGG5%2F6dH%2FunA5ODGGXcIT%2FGd43NBXArBJuBYzw9PFgWfVrQ4c2A4tvp1w5K8LIqxZhullHTsaJUeXwJtmLyo5Y8ELxNhml4r2YYAnjvxewGieKBwDOm%2Fd%2BN4Pi2IcmWPU8D4bX4hAsN6HC6z4DcAG0E6ttGoTRTb%2BuoFJWnIc1qfs5HM1uEikFUKo5zVp6OfBZHFO2y%2B7rM%2BlvUck8UggJ4Q4Yn9zY19i1nQki8nGb6AWIKPQL8ZqCG9pRBBX31iLs8tGouJkNPSFHYhFKo5a5ekG0LzutjD9atipbvsz66PHTzYDR3wSZls2j1Pko9gwaEEELWmSXtTsL4HYMqD8FGvOfzWVPaXReoOqfElpt0haOi5tos7AUdWTiMuryyWeVf%2B8mlR4OQVB9v50nUvRtaA67NlMJi67ECRTbBzG1lyR1gj8qNn9yxI7ZaiAcekSedBqcl%2BEIVFjdx5rO9WXjhSENg3xyMpE%2FDDCufwEOwh5SXQT%2FTCQ5BvsJ77PKnBoPvDshkBuLopn2Ol2AU5zCdzpW%2BBjqkAXMXzZCKMMhzzNY2luYK6RLZHld%2Bsz0pZy4Oh%2F1YMwRUfrByyi8YwfEHN7PjdXg8Cdb0w8pEuKEEiFXlAXJPlNIUIpLL%2FLhmAv2oSUYL%2FpRuqGXulyjTnhzZSNfQ7eVrf%2BTjfkXZ8LpLbctme1brIJoFLRwwZxBIWlRCAXQB%2BEXZPSxY4zDLvmcU4PLgeRfCiGcUNraWnBWsOa6noCS8KrNJfbq2&X-Amz-Signature=09c769155e8fc6362670ddf2e3eeef7a4ac8f8999b829f0398c4adc0f16382c1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
