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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJYJM3JY%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDxiVXl83dixUKRyyvsu68l%2FlGeLYtnoO1AP3g%2BVH33ygIgIrrJRguzXpi3GJvz%2BkPr%2BqZJNVa3mSZjmZZ18sDtHLoqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg2rGocJXgHO%2FM1xircAxHaV0dBVGVaqcYk%2FfmB2RAgjBovcUvkVOVTz2TiJ16yGm1pIaEGLD%2BorsGXlTxjTmD5tlLy8m41%2FI2lbMb03uSPg%2BaJ6eQSN4f1Wz9AyFwgaSHFvM5cAHKvf8F04iT06%2FfyukIC%2F%2BenHUkycsGIed7%2Fh3tdRbOrg7YyTFFD1logt4GY0%2FIJKorL%2FTlGl19L62byLLLlE40zrMa7TuNiFRpZwpB38%2BwzIznNfpBUmlnbG%2FriJWfNutYHCVyouIGpfnvthDV%2BSAQsBVPkl9gqyV1SBjmKfSazmhHEcaRTeHzn%2B%2Bes4nsCP8N7WojaEebaP%2FXwuy0YUkyAwOz2XK0CcjEMXnJbK5CX%2BedjSO24qPCT6drkOFQCn%2BKHi2cRAS1HZjLYdcEIUauUWWxhzL%2F%2BR%2BqAuhKvVHGy3UO7NB%2Bxm91Kr9KFc2sQMF7SKcXqp1XE4vfxX%2FXNuxWsiRjwU8NWl%2FA9BswaRKxKrXET83z1Q%2F8AJjkHpGCdlLIHdTQrFid1aPt661C4Vfdch0vxn%2FQgh6m9NS4wnI1z7RsRAdLWQNuyY0ASkaWyTemG7R8i6SHsL1IFemF5uT7bqI4Dkf%2BpTGuFeO65O7KhsJTaUe9iClgR4sH%2Blk7PvY%2BQgbaiMNLk08AGOqUBUuFm9Yo3WA97NfkNItdeF4AOzoWo%2BrfF9bS4DebEEf2gbcRvGeqfFztjyzGQ1nF7oSb9C6u5fE9tIKDZVIaW4t1paU98KMUiIFnjlocWHU%2FD7SSxUgyAueivMnhIxl%2B7KU6iodlRv1JfnQqP6km%2FWXp3uai4z5vppYT1Voi0D%2FdMaQe7tZmR18lcYP1KOL4Op7V1AyjqMN055LR8ATBzjCA47qkQ&X-Amz-Signature=290c0053536d92397493d26ae351eb8b1860024340b227b60cc9f8c7c240a30b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJYJM3JY%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDxiVXl83dixUKRyyvsu68l%2FlGeLYtnoO1AP3g%2BVH33ygIgIrrJRguzXpi3GJvz%2BkPr%2BqZJNVa3mSZjmZZ18sDtHLoqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg2rGocJXgHO%2FM1xircAxHaV0dBVGVaqcYk%2FfmB2RAgjBovcUvkVOVTz2TiJ16yGm1pIaEGLD%2BorsGXlTxjTmD5tlLy8m41%2FI2lbMb03uSPg%2BaJ6eQSN4f1Wz9AyFwgaSHFvM5cAHKvf8F04iT06%2FfyukIC%2F%2BenHUkycsGIed7%2Fh3tdRbOrg7YyTFFD1logt4GY0%2FIJKorL%2FTlGl19L62byLLLlE40zrMa7TuNiFRpZwpB38%2BwzIznNfpBUmlnbG%2FriJWfNutYHCVyouIGpfnvthDV%2BSAQsBVPkl9gqyV1SBjmKfSazmhHEcaRTeHzn%2B%2Bes4nsCP8N7WojaEebaP%2FXwuy0YUkyAwOz2XK0CcjEMXnJbK5CX%2BedjSO24qPCT6drkOFQCn%2BKHi2cRAS1HZjLYdcEIUauUWWxhzL%2F%2BR%2BqAuhKvVHGy3UO7NB%2Bxm91Kr9KFc2sQMF7SKcXqp1XE4vfxX%2FXNuxWsiRjwU8NWl%2FA9BswaRKxKrXET83z1Q%2F8AJjkHpGCdlLIHdTQrFid1aPt661C4Vfdch0vxn%2FQgh6m9NS4wnI1z7RsRAdLWQNuyY0ASkaWyTemG7R8i6SHsL1IFemF5uT7bqI4Dkf%2BpTGuFeO65O7KhsJTaUe9iClgR4sH%2Blk7PvY%2BQgbaiMNLk08AGOqUBUuFm9Yo3WA97NfkNItdeF4AOzoWo%2BrfF9bS4DebEEf2gbcRvGeqfFztjyzGQ1nF7oSb9C6u5fE9tIKDZVIaW4t1paU98KMUiIFnjlocWHU%2FD7SSxUgyAueivMnhIxl%2B7KU6iodlRv1JfnQqP6km%2FWXp3uai4z5vppYT1Voi0D%2FdMaQe7tZmR18lcYP1KOL4Op7V1AyjqMN055LR8ATBzjCA47qkQ&X-Amz-Signature=62f20cbd7297fbef65e909993648755e6797e81ea37846be17c10cc9da880d71&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJYJM3JY%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDxiVXl83dixUKRyyvsu68l%2FlGeLYtnoO1AP3g%2BVH33ygIgIrrJRguzXpi3GJvz%2BkPr%2BqZJNVa3mSZjmZZ18sDtHLoqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg2rGocJXgHO%2FM1xircAxHaV0dBVGVaqcYk%2FfmB2RAgjBovcUvkVOVTz2TiJ16yGm1pIaEGLD%2BorsGXlTxjTmD5tlLy8m41%2FI2lbMb03uSPg%2BaJ6eQSN4f1Wz9AyFwgaSHFvM5cAHKvf8F04iT06%2FfyukIC%2F%2BenHUkycsGIed7%2Fh3tdRbOrg7YyTFFD1logt4GY0%2FIJKorL%2FTlGl19L62byLLLlE40zrMa7TuNiFRpZwpB38%2BwzIznNfpBUmlnbG%2FriJWfNutYHCVyouIGpfnvthDV%2BSAQsBVPkl9gqyV1SBjmKfSazmhHEcaRTeHzn%2B%2Bes4nsCP8N7WojaEebaP%2FXwuy0YUkyAwOz2XK0CcjEMXnJbK5CX%2BedjSO24qPCT6drkOFQCn%2BKHi2cRAS1HZjLYdcEIUauUWWxhzL%2F%2BR%2BqAuhKvVHGy3UO7NB%2Bxm91Kr9KFc2sQMF7SKcXqp1XE4vfxX%2FXNuxWsiRjwU8NWl%2FA9BswaRKxKrXET83z1Q%2F8AJjkHpGCdlLIHdTQrFid1aPt661C4Vfdch0vxn%2FQgh6m9NS4wnI1z7RsRAdLWQNuyY0ASkaWyTemG7R8i6SHsL1IFemF5uT7bqI4Dkf%2BpTGuFeO65O7KhsJTaUe9iClgR4sH%2Blk7PvY%2BQgbaiMNLk08AGOqUBUuFm9Yo3WA97NfkNItdeF4AOzoWo%2BrfF9bS4DebEEf2gbcRvGeqfFztjyzGQ1nF7oSb9C6u5fE9tIKDZVIaW4t1paU98KMUiIFnjlocWHU%2FD7SSxUgyAueivMnhIxl%2B7KU6iodlRv1JfnQqP6km%2FWXp3uai4z5vppYT1Voi0D%2FdMaQe7tZmR18lcYP1KOL4Op7V1AyjqMN055LR8ATBzjCA47qkQ&X-Amz-Signature=4d3fb081c4102d02975c979ed60dabc9c6ca11484d0323bd615fa68653f2307c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJYJM3JY%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDxiVXl83dixUKRyyvsu68l%2FlGeLYtnoO1AP3g%2BVH33ygIgIrrJRguzXpi3GJvz%2BkPr%2BqZJNVa3mSZjmZZ18sDtHLoqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg2rGocJXgHO%2FM1xircAxHaV0dBVGVaqcYk%2FfmB2RAgjBovcUvkVOVTz2TiJ16yGm1pIaEGLD%2BorsGXlTxjTmD5tlLy8m41%2FI2lbMb03uSPg%2BaJ6eQSN4f1Wz9AyFwgaSHFvM5cAHKvf8F04iT06%2FfyukIC%2F%2BenHUkycsGIed7%2Fh3tdRbOrg7YyTFFD1logt4GY0%2FIJKorL%2FTlGl19L62byLLLlE40zrMa7TuNiFRpZwpB38%2BwzIznNfpBUmlnbG%2FriJWfNutYHCVyouIGpfnvthDV%2BSAQsBVPkl9gqyV1SBjmKfSazmhHEcaRTeHzn%2B%2Bes4nsCP8N7WojaEebaP%2FXwuy0YUkyAwOz2XK0CcjEMXnJbK5CX%2BedjSO24qPCT6drkOFQCn%2BKHi2cRAS1HZjLYdcEIUauUWWxhzL%2F%2BR%2BqAuhKvVHGy3UO7NB%2Bxm91Kr9KFc2sQMF7SKcXqp1XE4vfxX%2FXNuxWsiRjwU8NWl%2FA9BswaRKxKrXET83z1Q%2F8AJjkHpGCdlLIHdTQrFid1aPt661C4Vfdch0vxn%2FQgh6m9NS4wnI1z7RsRAdLWQNuyY0ASkaWyTemG7R8i6SHsL1IFemF5uT7bqI4Dkf%2BpTGuFeO65O7KhsJTaUe9iClgR4sH%2Blk7PvY%2BQgbaiMNLk08AGOqUBUuFm9Yo3WA97NfkNItdeF4AOzoWo%2BrfF9bS4DebEEf2gbcRvGeqfFztjyzGQ1nF7oSb9C6u5fE9tIKDZVIaW4t1paU98KMUiIFnjlocWHU%2FD7SSxUgyAueivMnhIxl%2B7KU6iodlRv1JfnQqP6km%2FWXp3uai4z5vppYT1Voi0D%2FdMaQe7tZmR18lcYP1KOL4Op7V1AyjqMN055LR8ATBzjCA47qkQ&X-Amz-Signature=0a2212534f3aba9b016db36697f9e4d81fca39daf5e522d0eb00ef776651db2f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJYJM3JY%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDxiVXl83dixUKRyyvsu68l%2FlGeLYtnoO1AP3g%2BVH33ygIgIrrJRguzXpi3GJvz%2BkPr%2BqZJNVa3mSZjmZZ18sDtHLoqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg2rGocJXgHO%2FM1xircAxHaV0dBVGVaqcYk%2FfmB2RAgjBovcUvkVOVTz2TiJ16yGm1pIaEGLD%2BorsGXlTxjTmD5tlLy8m41%2FI2lbMb03uSPg%2BaJ6eQSN4f1Wz9AyFwgaSHFvM5cAHKvf8F04iT06%2FfyukIC%2F%2BenHUkycsGIed7%2Fh3tdRbOrg7YyTFFD1logt4GY0%2FIJKorL%2FTlGl19L62byLLLlE40zrMa7TuNiFRpZwpB38%2BwzIznNfpBUmlnbG%2FriJWfNutYHCVyouIGpfnvthDV%2BSAQsBVPkl9gqyV1SBjmKfSazmhHEcaRTeHzn%2B%2Bes4nsCP8N7WojaEebaP%2FXwuy0YUkyAwOz2XK0CcjEMXnJbK5CX%2BedjSO24qPCT6drkOFQCn%2BKHi2cRAS1HZjLYdcEIUauUWWxhzL%2F%2BR%2BqAuhKvVHGy3UO7NB%2Bxm91Kr9KFc2sQMF7SKcXqp1XE4vfxX%2FXNuxWsiRjwU8NWl%2FA9BswaRKxKrXET83z1Q%2F8AJjkHpGCdlLIHdTQrFid1aPt661C4Vfdch0vxn%2FQgh6m9NS4wnI1z7RsRAdLWQNuyY0ASkaWyTemG7R8i6SHsL1IFemF5uT7bqI4Dkf%2BpTGuFeO65O7KhsJTaUe9iClgR4sH%2Blk7PvY%2BQgbaiMNLk08AGOqUBUuFm9Yo3WA97NfkNItdeF4AOzoWo%2BrfF9bS4DebEEf2gbcRvGeqfFztjyzGQ1nF7oSb9C6u5fE9tIKDZVIaW4t1paU98KMUiIFnjlocWHU%2FD7SSxUgyAueivMnhIxl%2B7KU6iodlRv1JfnQqP6km%2FWXp3uai4z5vppYT1Voi0D%2FdMaQe7tZmR18lcYP1KOL4Op7V1AyjqMN055LR8ATBzjCA47qkQ&X-Amz-Signature=e308dd9c63f62ebeb5c19d3332baed11f77a75e9987c9219e40ba8017578ec09&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJYJM3JY%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDxiVXl83dixUKRyyvsu68l%2FlGeLYtnoO1AP3g%2BVH33ygIgIrrJRguzXpi3GJvz%2BkPr%2BqZJNVa3mSZjmZZ18sDtHLoqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg2rGocJXgHO%2FM1xircAxHaV0dBVGVaqcYk%2FfmB2RAgjBovcUvkVOVTz2TiJ16yGm1pIaEGLD%2BorsGXlTxjTmD5tlLy8m41%2FI2lbMb03uSPg%2BaJ6eQSN4f1Wz9AyFwgaSHFvM5cAHKvf8F04iT06%2FfyukIC%2F%2BenHUkycsGIed7%2Fh3tdRbOrg7YyTFFD1logt4GY0%2FIJKorL%2FTlGl19L62byLLLlE40zrMa7TuNiFRpZwpB38%2BwzIznNfpBUmlnbG%2FriJWfNutYHCVyouIGpfnvthDV%2BSAQsBVPkl9gqyV1SBjmKfSazmhHEcaRTeHzn%2B%2Bes4nsCP8N7WojaEebaP%2FXwuy0YUkyAwOz2XK0CcjEMXnJbK5CX%2BedjSO24qPCT6drkOFQCn%2BKHi2cRAS1HZjLYdcEIUauUWWxhzL%2F%2BR%2BqAuhKvVHGy3UO7NB%2Bxm91Kr9KFc2sQMF7SKcXqp1XE4vfxX%2FXNuxWsiRjwU8NWl%2FA9BswaRKxKrXET83z1Q%2F8AJjkHpGCdlLIHdTQrFid1aPt661C4Vfdch0vxn%2FQgh6m9NS4wnI1z7RsRAdLWQNuyY0ASkaWyTemG7R8i6SHsL1IFemF5uT7bqI4Dkf%2BpTGuFeO65O7KhsJTaUe9iClgR4sH%2Blk7PvY%2BQgbaiMNLk08AGOqUBUuFm9Yo3WA97NfkNItdeF4AOzoWo%2BrfF9bS4DebEEf2gbcRvGeqfFztjyzGQ1nF7oSb9C6u5fE9tIKDZVIaW4t1paU98KMUiIFnjlocWHU%2FD7SSxUgyAueivMnhIxl%2B7KU6iodlRv1JfnQqP6km%2FWXp3uai4z5vppYT1Voi0D%2FdMaQe7tZmR18lcYP1KOL4Op7V1AyjqMN055LR8ATBzjCA47qkQ&X-Amz-Signature=88993ad9e7bba9ef5038e9a1337b6237ba9032faf12bf727ab59adb4e2ec9d9e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJYJM3JY%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDxiVXl83dixUKRyyvsu68l%2FlGeLYtnoO1AP3g%2BVH33ygIgIrrJRguzXpi3GJvz%2BkPr%2BqZJNVa3mSZjmZZ18sDtHLoqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg2rGocJXgHO%2FM1xircAxHaV0dBVGVaqcYk%2FfmB2RAgjBovcUvkVOVTz2TiJ16yGm1pIaEGLD%2BorsGXlTxjTmD5tlLy8m41%2FI2lbMb03uSPg%2BaJ6eQSN4f1Wz9AyFwgaSHFvM5cAHKvf8F04iT06%2FfyukIC%2F%2BenHUkycsGIed7%2Fh3tdRbOrg7YyTFFD1logt4GY0%2FIJKorL%2FTlGl19L62byLLLlE40zrMa7TuNiFRpZwpB38%2BwzIznNfpBUmlnbG%2FriJWfNutYHCVyouIGpfnvthDV%2BSAQsBVPkl9gqyV1SBjmKfSazmhHEcaRTeHzn%2B%2Bes4nsCP8N7WojaEebaP%2FXwuy0YUkyAwOz2XK0CcjEMXnJbK5CX%2BedjSO24qPCT6drkOFQCn%2BKHi2cRAS1HZjLYdcEIUauUWWxhzL%2F%2BR%2BqAuhKvVHGy3UO7NB%2Bxm91Kr9KFc2sQMF7SKcXqp1XE4vfxX%2FXNuxWsiRjwU8NWl%2FA9BswaRKxKrXET83z1Q%2F8AJjkHpGCdlLIHdTQrFid1aPt661C4Vfdch0vxn%2FQgh6m9NS4wnI1z7RsRAdLWQNuyY0ASkaWyTemG7R8i6SHsL1IFemF5uT7bqI4Dkf%2BpTGuFeO65O7KhsJTaUe9iClgR4sH%2Blk7PvY%2BQgbaiMNLk08AGOqUBUuFm9Yo3WA97NfkNItdeF4AOzoWo%2BrfF9bS4DebEEf2gbcRvGeqfFztjyzGQ1nF7oSb9C6u5fE9tIKDZVIaW4t1paU98KMUiIFnjlocWHU%2FD7SSxUgyAueivMnhIxl%2B7KU6iodlRv1JfnQqP6km%2FWXp3uai4z5vppYT1Voi0D%2FdMaQe7tZmR18lcYP1KOL4Op7V1AyjqMN055LR8ATBzjCA47qkQ&X-Amz-Signature=d9bad8c9700ff96c5c0172b5773eda15c07faf9e1fad1dc2c905d7d9f0b9fc66&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
