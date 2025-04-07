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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NMWK6KU%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN7tami8GHfZkYgPcNwHfWsvXsRkVIYz%2FuLeT9pigiNgIgOCnW%2FvvIcd5DE%2B8OtTP0Xyqo0CJ1DWB40eR1NXsDVQ0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBrxyQsbq%2Buf7QmSEyrcA9vpUbEs3YOUZS%2BwSyogntn%2BtbKo2rV0Vs5mode7MeTa7n5KG2207ZT5C75GqetKcIthA1UxkbWWCOkkyHMHB7n900bi1bE5Msu65i1LSU0V%2FHinkT2%2B594pw3SmU1VoRCW7otVDuF0aKsbW%2FklmaVf5RiFo3rBCIfnWgL5govULeOOm%2B28r5kORfWOuivAwUvOz56mQSm9mq2amrwyUXag7eR0OwkLvgVRpzlY0MVRz%2FBOD%2FIj7aqctnpdZjHjR635J%2BcYOe0eb%2FfF%2FiVXD5tCouS%2F6DG4IqDtD3EM453ePMiODgtl6MTJR2L8tjDiVg44Jt8gVq08lFyqqFeXwrlU16n5AMb4xcF00h%2BziBu7XedmLNDCPf3bp3nD0FT9Lln%2FzkvwQxF7KjtfDvCw07AL7CJMWKzw4isqC5t6BTUeaYJuGn9v0KJmJbsHpxLp2KybxbR5%2BS0y40szOjJWapAU6GOVknLui787vxw4kYS%2BQJOHBbObNI%2FDmKo2VAnar%2Bw%2BoQ3UtJHzBoj6czoHFHAgGjuWOedGDJBtkZAB3QSWYsG7sA0hpqWNrXgPx%2BFb2fJXBGHgtERnhq2YL2FP1501bvPCWaJcNISiwM1%2F9mDg4nVckCl5y3k51X2ZtMImhzr8GOqUBXCCIKjfaoeUWhj4uxKTOsBAq%2BT3BTexPlk6jhs1ddBJv68Qo8VUDTyyIuSBdnCadVxnXB%2FVvPzmpCAo8jRdM9ggeuHj3Kv5mCcJTUGtnANfCK5ivBBxxmpb3auR%2Fd11H37d6mI2aEFPhLO8KsMDpgdMSuMqlTXoM%2F9FInNnChRFHrhTDyhVl4ojhbB5%2FwgIRubkyLwgsJ636EwJ8kHFqrXzv2VHj&X-Amz-Signature=b69a41aeb5a3a7e7bb13e4a25c133ef42cbdc428c93e715fe35ad822eaa9aa8f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NMWK6KU%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN7tami8GHfZkYgPcNwHfWsvXsRkVIYz%2FuLeT9pigiNgIgOCnW%2FvvIcd5DE%2B8OtTP0Xyqo0CJ1DWB40eR1NXsDVQ0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBrxyQsbq%2Buf7QmSEyrcA9vpUbEs3YOUZS%2BwSyogntn%2BtbKo2rV0Vs5mode7MeTa7n5KG2207ZT5C75GqetKcIthA1UxkbWWCOkkyHMHB7n900bi1bE5Msu65i1LSU0V%2FHinkT2%2B594pw3SmU1VoRCW7otVDuF0aKsbW%2FklmaVf5RiFo3rBCIfnWgL5govULeOOm%2B28r5kORfWOuivAwUvOz56mQSm9mq2amrwyUXag7eR0OwkLvgVRpzlY0MVRz%2FBOD%2FIj7aqctnpdZjHjR635J%2BcYOe0eb%2FfF%2FiVXD5tCouS%2F6DG4IqDtD3EM453ePMiODgtl6MTJR2L8tjDiVg44Jt8gVq08lFyqqFeXwrlU16n5AMb4xcF00h%2BziBu7XedmLNDCPf3bp3nD0FT9Lln%2FzkvwQxF7KjtfDvCw07AL7CJMWKzw4isqC5t6BTUeaYJuGn9v0KJmJbsHpxLp2KybxbR5%2BS0y40szOjJWapAU6GOVknLui787vxw4kYS%2BQJOHBbObNI%2FDmKo2VAnar%2Bw%2BoQ3UtJHzBoj6czoHFHAgGjuWOedGDJBtkZAB3QSWYsG7sA0hpqWNrXgPx%2BFb2fJXBGHgtERnhq2YL2FP1501bvPCWaJcNISiwM1%2F9mDg4nVckCl5y3k51X2ZtMImhzr8GOqUBXCCIKjfaoeUWhj4uxKTOsBAq%2BT3BTexPlk6jhs1ddBJv68Qo8VUDTyyIuSBdnCadVxnXB%2FVvPzmpCAo8jRdM9ggeuHj3Kv5mCcJTUGtnANfCK5ivBBxxmpb3auR%2Fd11H37d6mI2aEFPhLO8KsMDpgdMSuMqlTXoM%2F9FInNnChRFHrhTDyhVl4ojhbB5%2FwgIRubkyLwgsJ636EwJ8kHFqrXzv2VHj&X-Amz-Signature=f676b0265aaaf1d9fbf2e7861e48a439aeccbd2c4fb3986f913ab8c8d245174d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NMWK6KU%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN7tami8GHfZkYgPcNwHfWsvXsRkVIYz%2FuLeT9pigiNgIgOCnW%2FvvIcd5DE%2B8OtTP0Xyqo0CJ1DWB40eR1NXsDVQ0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBrxyQsbq%2Buf7QmSEyrcA9vpUbEs3YOUZS%2BwSyogntn%2BtbKo2rV0Vs5mode7MeTa7n5KG2207ZT5C75GqetKcIthA1UxkbWWCOkkyHMHB7n900bi1bE5Msu65i1LSU0V%2FHinkT2%2B594pw3SmU1VoRCW7otVDuF0aKsbW%2FklmaVf5RiFo3rBCIfnWgL5govULeOOm%2B28r5kORfWOuivAwUvOz56mQSm9mq2amrwyUXag7eR0OwkLvgVRpzlY0MVRz%2FBOD%2FIj7aqctnpdZjHjR635J%2BcYOe0eb%2FfF%2FiVXD5tCouS%2F6DG4IqDtD3EM453ePMiODgtl6MTJR2L8tjDiVg44Jt8gVq08lFyqqFeXwrlU16n5AMb4xcF00h%2BziBu7XedmLNDCPf3bp3nD0FT9Lln%2FzkvwQxF7KjtfDvCw07AL7CJMWKzw4isqC5t6BTUeaYJuGn9v0KJmJbsHpxLp2KybxbR5%2BS0y40szOjJWapAU6GOVknLui787vxw4kYS%2BQJOHBbObNI%2FDmKo2VAnar%2Bw%2BoQ3UtJHzBoj6czoHFHAgGjuWOedGDJBtkZAB3QSWYsG7sA0hpqWNrXgPx%2BFb2fJXBGHgtERnhq2YL2FP1501bvPCWaJcNISiwM1%2F9mDg4nVckCl5y3k51X2ZtMImhzr8GOqUBXCCIKjfaoeUWhj4uxKTOsBAq%2BT3BTexPlk6jhs1ddBJv68Qo8VUDTyyIuSBdnCadVxnXB%2FVvPzmpCAo8jRdM9ggeuHj3Kv5mCcJTUGtnANfCK5ivBBxxmpb3auR%2Fd11H37d6mI2aEFPhLO8KsMDpgdMSuMqlTXoM%2F9FInNnChRFHrhTDyhVl4ojhbB5%2FwgIRubkyLwgsJ636EwJ8kHFqrXzv2VHj&X-Amz-Signature=a5936d3dd5e41b3eeb3b0d401a213bab0a0b50a489c21e584979a5c5a8091e3e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NMWK6KU%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN7tami8GHfZkYgPcNwHfWsvXsRkVIYz%2FuLeT9pigiNgIgOCnW%2FvvIcd5DE%2B8OtTP0Xyqo0CJ1DWB40eR1NXsDVQ0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBrxyQsbq%2Buf7QmSEyrcA9vpUbEs3YOUZS%2BwSyogntn%2BtbKo2rV0Vs5mode7MeTa7n5KG2207ZT5C75GqetKcIthA1UxkbWWCOkkyHMHB7n900bi1bE5Msu65i1LSU0V%2FHinkT2%2B594pw3SmU1VoRCW7otVDuF0aKsbW%2FklmaVf5RiFo3rBCIfnWgL5govULeOOm%2B28r5kORfWOuivAwUvOz56mQSm9mq2amrwyUXag7eR0OwkLvgVRpzlY0MVRz%2FBOD%2FIj7aqctnpdZjHjR635J%2BcYOe0eb%2FfF%2FiVXD5tCouS%2F6DG4IqDtD3EM453ePMiODgtl6MTJR2L8tjDiVg44Jt8gVq08lFyqqFeXwrlU16n5AMb4xcF00h%2BziBu7XedmLNDCPf3bp3nD0FT9Lln%2FzkvwQxF7KjtfDvCw07AL7CJMWKzw4isqC5t6BTUeaYJuGn9v0KJmJbsHpxLp2KybxbR5%2BS0y40szOjJWapAU6GOVknLui787vxw4kYS%2BQJOHBbObNI%2FDmKo2VAnar%2Bw%2BoQ3UtJHzBoj6czoHFHAgGjuWOedGDJBtkZAB3QSWYsG7sA0hpqWNrXgPx%2BFb2fJXBGHgtERnhq2YL2FP1501bvPCWaJcNISiwM1%2F9mDg4nVckCl5y3k51X2ZtMImhzr8GOqUBXCCIKjfaoeUWhj4uxKTOsBAq%2BT3BTexPlk6jhs1ddBJv68Qo8VUDTyyIuSBdnCadVxnXB%2FVvPzmpCAo8jRdM9ggeuHj3Kv5mCcJTUGtnANfCK5ivBBxxmpb3auR%2Fd11H37d6mI2aEFPhLO8KsMDpgdMSuMqlTXoM%2F9FInNnChRFHrhTDyhVl4ojhbB5%2FwgIRubkyLwgsJ636EwJ8kHFqrXzv2VHj&X-Amz-Signature=2527cb26167863b07bdae6c545dc9e0e81a15655a87cd80e05054d9baf4c7639&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NMWK6KU%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN7tami8GHfZkYgPcNwHfWsvXsRkVIYz%2FuLeT9pigiNgIgOCnW%2FvvIcd5DE%2B8OtTP0Xyqo0CJ1DWB40eR1NXsDVQ0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBrxyQsbq%2Buf7QmSEyrcA9vpUbEs3YOUZS%2BwSyogntn%2BtbKo2rV0Vs5mode7MeTa7n5KG2207ZT5C75GqetKcIthA1UxkbWWCOkkyHMHB7n900bi1bE5Msu65i1LSU0V%2FHinkT2%2B594pw3SmU1VoRCW7otVDuF0aKsbW%2FklmaVf5RiFo3rBCIfnWgL5govULeOOm%2B28r5kORfWOuivAwUvOz56mQSm9mq2amrwyUXag7eR0OwkLvgVRpzlY0MVRz%2FBOD%2FIj7aqctnpdZjHjR635J%2BcYOe0eb%2FfF%2FiVXD5tCouS%2F6DG4IqDtD3EM453ePMiODgtl6MTJR2L8tjDiVg44Jt8gVq08lFyqqFeXwrlU16n5AMb4xcF00h%2BziBu7XedmLNDCPf3bp3nD0FT9Lln%2FzkvwQxF7KjtfDvCw07AL7CJMWKzw4isqC5t6BTUeaYJuGn9v0KJmJbsHpxLp2KybxbR5%2BS0y40szOjJWapAU6GOVknLui787vxw4kYS%2BQJOHBbObNI%2FDmKo2VAnar%2Bw%2BoQ3UtJHzBoj6czoHFHAgGjuWOedGDJBtkZAB3QSWYsG7sA0hpqWNrXgPx%2BFb2fJXBGHgtERnhq2YL2FP1501bvPCWaJcNISiwM1%2F9mDg4nVckCl5y3k51X2ZtMImhzr8GOqUBXCCIKjfaoeUWhj4uxKTOsBAq%2BT3BTexPlk6jhs1ddBJv68Qo8VUDTyyIuSBdnCadVxnXB%2FVvPzmpCAo8jRdM9ggeuHj3Kv5mCcJTUGtnANfCK5ivBBxxmpb3auR%2Fd11H37d6mI2aEFPhLO8KsMDpgdMSuMqlTXoM%2F9FInNnChRFHrhTDyhVl4ojhbB5%2FwgIRubkyLwgsJ636EwJ8kHFqrXzv2VHj&X-Amz-Signature=ffbdf2367ee58fa44798f6877ba5bb8d24941c395b11491f3e3bdc76554055e8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NMWK6KU%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN7tami8GHfZkYgPcNwHfWsvXsRkVIYz%2FuLeT9pigiNgIgOCnW%2FvvIcd5DE%2B8OtTP0Xyqo0CJ1DWB40eR1NXsDVQ0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBrxyQsbq%2Buf7QmSEyrcA9vpUbEs3YOUZS%2BwSyogntn%2BtbKo2rV0Vs5mode7MeTa7n5KG2207ZT5C75GqetKcIthA1UxkbWWCOkkyHMHB7n900bi1bE5Msu65i1LSU0V%2FHinkT2%2B594pw3SmU1VoRCW7otVDuF0aKsbW%2FklmaVf5RiFo3rBCIfnWgL5govULeOOm%2B28r5kORfWOuivAwUvOz56mQSm9mq2amrwyUXag7eR0OwkLvgVRpzlY0MVRz%2FBOD%2FIj7aqctnpdZjHjR635J%2BcYOe0eb%2FfF%2FiVXD5tCouS%2F6DG4IqDtD3EM453ePMiODgtl6MTJR2L8tjDiVg44Jt8gVq08lFyqqFeXwrlU16n5AMb4xcF00h%2BziBu7XedmLNDCPf3bp3nD0FT9Lln%2FzkvwQxF7KjtfDvCw07AL7CJMWKzw4isqC5t6BTUeaYJuGn9v0KJmJbsHpxLp2KybxbR5%2BS0y40szOjJWapAU6GOVknLui787vxw4kYS%2BQJOHBbObNI%2FDmKo2VAnar%2Bw%2BoQ3UtJHzBoj6czoHFHAgGjuWOedGDJBtkZAB3QSWYsG7sA0hpqWNrXgPx%2BFb2fJXBGHgtERnhq2YL2FP1501bvPCWaJcNISiwM1%2F9mDg4nVckCl5y3k51X2ZtMImhzr8GOqUBXCCIKjfaoeUWhj4uxKTOsBAq%2BT3BTexPlk6jhs1ddBJv68Qo8VUDTyyIuSBdnCadVxnXB%2FVvPzmpCAo8jRdM9ggeuHj3Kv5mCcJTUGtnANfCK5ivBBxxmpb3auR%2Fd11H37d6mI2aEFPhLO8KsMDpgdMSuMqlTXoM%2F9FInNnChRFHrhTDyhVl4ojhbB5%2FwgIRubkyLwgsJ636EwJ8kHFqrXzv2VHj&X-Amz-Signature=9e7d288f00d51f59672a1432ead27a7603c10e5fd02c7b83d085c297790bf53c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NMWK6KU%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN7tami8GHfZkYgPcNwHfWsvXsRkVIYz%2FuLeT9pigiNgIgOCnW%2FvvIcd5DE%2B8OtTP0Xyqo0CJ1DWB40eR1NXsDVQ0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBrxyQsbq%2Buf7QmSEyrcA9vpUbEs3YOUZS%2BwSyogntn%2BtbKo2rV0Vs5mode7MeTa7n5KG2207ZT5C75GqetKcIthA1UxkbWWCOkkyHMHB7n900bi1bE5Msu65i1LSU0V%2FHinkT2%2B594pw3SmU1VoRCW7otVDuF0aKsbW%2FklmaVf5RiFo3rBCIfnWgL5govULeOOm%2B28r5kORfWOuivAwUvOz56mQSm9mq2amrwyUXag7eR0OwkLvgVRpzlY0MVRz%2FBOD%2FIj7aqctnpdZjHjR635J%2BcYOe0eb%2FfF%2FiVXD5tCouS%2F6DG4IqDtD3EM453ePMiODgtl6MTJR2L8tjDiVg44Jt8gVq08lFyqqFeXwrlU16n5AMb4xcF00h%2BziBu7XedmLNDCPf3bp3nD0FT9Lln%2FzkvwQxF7KjtfDvCw07AL7CJMWKzw4isqC5t6BTUeaYJuGn9v0KJmJbsHpxLp2KybxbR5%2BS0y40szOjJWapAU6GOVknLui787vxw4kYS%2BQJOHBbObNI%2FDmKo2VAnar%2Bw%2BoQ3UtJHzBoj6czoHFHAgGjuWOedGDJBtkZAB3QSWYsG7sA0hpqWNrXgPx%2BFb2fJXBGHgtERnhq2YL2FP1501bvPCWaJcNISiwM1%2F9mDg4nVckCl5y3k51X2ZtMImhzr8GOqUBXCCIKjfaoeUWhj4uxKTOsBAq%2BT3BTexPlk6jhs1ddBJv68Qo8VUDTyyIuSBdnCadVxnXB%2FVvPzmpCAo8jRdM9ggeuHj3Kv5mCcJTUGtnANfCK5ivBBxxmpb3auR%2Fd11H37d6mI2aEFPhLO8KsMDpgdMSuMqlTXoM%2F9FInNnChRFHrhTDyhVl4ojhbB5%2FwgIRubkyLwgsJ636EwJ8kHFqrXzv2VHj&X-Amz-Signature=5edc000be16bf406539ba3f2aa3f2b2ca82878df3aa1a552cbbb4fa5b006bbf9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
