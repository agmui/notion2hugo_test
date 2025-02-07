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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKSDA32V%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEFpcrwn2o81kExgipstl3f34OpsrgMh9YGSJUTQmLa2AiA7kruHxa7DPFCuQdzEZwOnpyYAliYdwfohOMGxRas%2F%2Fir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMtscc2ifzZG8AM2pkKtwDjVGysP0FtvZxxsByRF8ab515i%2FcQtsIdDc3y5dzJJ9D4%2FqTy9srNXw097d2DTM0QKJWiOCsfKNuvzU2mUdopuQXf1ELu0WacRFkGaXUeU2gIQetI%2FzptjE3i0RE4tIf9yPg4rSDk1gYJax4Yhg%2BLVHDPH1TTTg%2FWSy0RwuFn5fAkybICNarKhi2X%2BUjBZEjnktDnbH21tnyrZgzEA4g1SD0yJQnFheftlyU%2FUzer77IChwMJdFPhSdIhSXRsgnxzHpXCOVNer3WngjEgbJgA64nRTziKzIIKJCGfg5ABWDxuhl2Mkf%2Ftm5nALc0YIRet3lhylQO3ihfKKd1lCsEfcjFBiafpSj9zRgTCxJ46ajlvExlouGDloU4LVfAgrod0q3PS8eKLDRJwk61lqIankGi0Pb3MfmFJXqpWhyYahsay8kdT0H2xzeLEoNQyZcdlkm9TWrPPAJmE0eZOIoYJIpSkgjHzuTdaPXFCgAimrMBSyXnJ6T93oaYeQ7PW1lfPKidIHnYUbSq9fMMOBMIFMkWgRCAGyqQnupEzQjI9WgcKnn5%2Fgo42VIu0Ou65dxGmYKP%2BJjbnFOX5x06tPXz8U4URnK%2BEmop6RCU8sIYrKeGNeIX8PAMl%2B70wsl0wx7aZvQY6pgE2mw95huMsE%2Bj7W4hp3GqI9Y9T5Js0VMzUOgg3g0mKobDib%2Bw0xQMNDtB0QXVJsUC1KbDq1X7ifH%2FkYMhEHlvHEk9b9mBCQEm4vEKaWZaWijtZcu0LyGepKxnlcQNm6vnsYf5%2F%2BAYnj%2Bsm9yT8JhrkU%2B7qL9iBjOXauxlvsDtNQ89rCohvuvLS2rV3z0FLLbBgSWvCmX7wH4nrisajP1qEXvRD98bq&X-Amz-Signature=376c0ff0a03d9da38f26353ec833c061298e3e9409587b2d81d5ac5e7516ad9d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKSDA32V%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEFpcrwn2o81kExgipstl3f34OpsrgMh9YGSJUTQmLa2AiA7kruHxa7DPFCuQdzEZwOnpyYAliYdwfohOMGxRas%2F%2Fir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMtscc2ifzZG8AM2pkKtwDjVGysP0FtvZxxsByRF8ab515i%2FcQtsIdDc3y5dzJJ9D4%2FqTy9srNXw097d2DTM0QKJWiOCsfKNuvzU2mUdopuQXf1ELu0WacRFkGaXUeU2gIQetI%2FzptjE3i0RE4tIf9yPg4rSDk1gYJax4Yhg%2BLVHDPH1TTTg%2FWSy0RwuFn5fAkybICNarKhi2X%2BUjBZEjnktDnbH21tnyrZgzEA4g1SD0yJQnFheftlyU%2FUzer77IChwMJdFPhSdIhSXRsgnxzHpXCOVNer3WngjEgbJgA64nRTziKzIIKJCGfg5ABWDxuhl2Mkf%2Ftm5nALc0YIRet3lhylQO3ihfKKd1lCsEfcjFBiafpSj9zRgTCxJ46ajlvExlouGDloU4LVfAgrod0q3PS8eKLDRJwk61lqIankGi0Pb3MfmFJXqpWhyYahsay8kdT0H2xzeLEoNQyZcdlkm9TWrPPAJmE0eZOIoYJIpSkgjHzuTdaPXFCgAimrMBSyXnJ6T93oaYeQ7PW1lfPKidIHnYUbSq9fMMOBMIFMkWgRCAGyqQnupEzQjI9WgcKnn5%2Fgo42VIu0Ou65dxGmYKP%2BJjbnFOX5x06tPXz8U4URnK%2BEmop6RCU8sIYrKeGNeIX8PAMl%2B70wsl0wx7aZvQY6pgE2mw95huMsE%2Bj7W4hp3GqI9Y9T5Js0VMzUOgg3g0mKobDib%2Bw0xQMNDtB0QXVJsUC1KbDq1X7ifH%2FkYMhEHlvHEk9b9mBCQEm4vEKaWZaWijtZcu0LyGepKxnlcQNm6vnsYf5%2F%2BAYnj%2Bsm9yT8JhrkU%2B7qL9iBjOXauxlvsDtNQ89rCohvuvLS2rV3z0FLLbBgSWvCmX7wH4nrisajP1qEXvRD98bq&X-Amz-Signature=949e6448792e33c24b700b7766e0f7a4385e2489f65d3ad8204e211a9e9232d4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKSDA32V%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEFpcrwn2o81kExgipstl3f34OpsrgMh9YGSJUTQmLa2AiA7kruHxa7DPFCuQdzEZwOnpyYAliYdwfohOMGxRas%2F%2Fir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMtscc2ifzZG8AM2pkKtwDjVGysP0FtvZxxsByRF8ab515i%2FcQtsIdDc3y5dzJJ9D4%2FqTy9srNXw097d2DTM0QKJWiOCsfKNuvzU2mUdopuQXf1ELu0WacRFkGaXUeU2gIQetI%2FzptjE3i0RE4tIf9yPg4rSDk1gYJax4Yhg%2BLVHDPH1TTTg%2FWSy0RwuFn5fAkybICNarKhi2X%2BUjBZEjnktDnbH21tnyrZgzEA4g1SD0yJQnFheftlyU%2FUzer77IChwMJdFPhSdIhSXRsgnxzHpXCOVNer3WngjEgbJgA64nRTziKzIIKJCGfg5ABWDxuhl2Mkf%2Ftm5nALc0YIRet3lhylQO3ihfKKd1lCsEfcjFBiafpSj9zRgTCxJ46ajlvExlouGDloU4LVfAgrod0q3PS8eKLDRJwk61lqIankGi0Pb3MfmFJXqpWhyYahsay8kdT0H2xzeLEoNQyZcdlkm9TWrPPAJmE0eZOIoYJIpSkgjHzuTdaPXFCgAimrMBSyXnJ6T93oaYeQ7PW1lfPKidIHnYUbSq9fMMOBMIFMkWgRCAGyqQnupEzQjI9WgcKnn5%2Fgo42VIu0Ou65dxGmYKP%2BJjbnFOX5x06tPXz8U4URnK%2BEmop6RCU8sIYrKeGNeIX8PAMl%2B70wsl0wx7aZvQY6pgE2mw95huMsE%2Bj7W4hp3GqI9Y9T5Js0VMzUOgg3g0mKobDib%2Bw0xQMNDtB0QXVJsUC1KbDq1X7ifH%2FkYMhEHlvHEk9b9mBCQEm4vEKaWZaWijtZcu0LyGepKxnlcQNm6vnsYf5%2F%2BAYnj%2Bsm9yT8JhrkU%2B7qL9iBjOXauxlvsDtNQ89rCohvuvLS2rV3z0FLLbBgSWvCmX7wH4nrisajP1qEXvRD98bq&X-Amz-Signature=cd9c2dd50416dddf9b400273a1ef6e18275740c1899a88283ac9d6faff9d28e0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKSDA32V%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEFpcrwn2o81kExgipstl3f34OpsrgMh9YGSJUTQmLa2AiA7kruHxa7DPFCuQdzEZwOnpyYAliYdwfohOMGxRas%2F%2Fir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMtscc2ifzZG8AM2pkKtwDjVGysP0FtvZxxsByRF8ab515i%2FcQtsIdDc3y5dzJJ9D4%2FqTy9srNXw097d2DTM0QKJWiOCsfKNuvzU2mUdopuQXf1ELu0WacRFkGaXUeU2gIQetI%2FzptjE3i0RE4tIf9yPg4rSDk1gYJax4Yhg%2BLVHDPH1TTTg%2FWSy0RwuFn5fAkybICNarKhi2X%2BUjBZEjnktDnbH21tnyrZgzEA4g1SD0yJQnFheftlyU%2FUzer77IChwMJdFPhSdIhSXRsgnxzHpXCOVNer3WngjEgbJgA64nRTziKzIIKJCGfg5ABWDxuhl2Mkf%2Ftm5nALc0YIRet3lhylQO3ihfKKd1lCsEfcjFBiafpSj9zRgTCxJ46ajlvExlouGDloU4LVfAgrod0q3PS8eKLDRJwk61lqIankGi0Pb3MfmFJXqpWhyYahsay8kdT0H2xzeLEoNQyZcdlkm9TWrPPAJmE0eZOIoYJIpSkgjHzuTdaPXFCgAimrMBSyXnJ6T93oaYeQ7PW1lfPKidIHnYUbSq9fMMOBMIFMkWgRCAGyqQnupEzQjI9WgcKnn5%2Fgo42VIu0Ou65dxGmYKP%2BJjbnFOX5x06tPXz8U4URnK%2BEmop6RCU8sIYrKeGNeIX8PAMl%2B70wsl0wx7aZvQY6pgE2mw95huMsE%2Bj7W4hp3GqI9Y9T5Js0VMzUOgg3g0mKobDib%2Bw0xQMNDtB0QXVJsUC1KbDq1X7ifH%2FkYMhEHlvHEk9b9mBCQEm4vEKaWZaWijtZcu0LyGepKxnlcQNm6vnsYf5%2F%2BAYnj%2Bsm9yT8JhrkU%2B7qL9iBjOXauxlvsDtNQ89rCohvuvLS2rV3z0FLLbBgSWvCmX7wH4nrisajP1qEXvRD98bq&X-Amz-Signature=8efbd4e739f3f0ce31f6c3f1d4bde5492881285d3d33723f6e929b957e9c8b10&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKSDA32V%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEFpcrwn2o81kExgipstl3f34OpsrgMh9YGSJUTQmLa2AiA7kruHxa7DPFCuQdzEZwOnpyYAliYdwfohOMGxRas%2F%2Fir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMtscc2ifzZG8AM2pkKtwDjVGysP0FtvZxxsByRF8ab515i%2FcQtsIdDc3y5dzJJ9D4%2FqTy9srNXw097d2DTM0QKJWiOCsfKNuvzU2mUdopuQXf1ELu0WacRFkGaXUeU2gIQetI%2FzptjE3i0RE4tIf9yPg4rSDk1gYJax4Yhg%2BLVHDPH1TTTg%2FWSy0RwuFn5fAkybICNarKhi2X%2BUjBZEjnktDnbH21tnyrZgzEA4g1SD0yJQnFheftlyU%2FUzer77IChwMJdFPhSdIhSXRsgnxzHpXCOVNer3WngjEgbJgA64nRTziKzIIKJCGfg5ABWDxuhl2Mkf%2Ftm5nALc0YIRet3lhylQO3ihfKKd1lCsEfcjFBiafpSj9zRgTCxJ46ajlvExlouGDloU4LVfAgrod0q3PS8eKLDRJwk61lqIankGi0Pb3MfmFJXqpWhyYahsay8kdT0H2xzeLEoNQyZcdlkm9TWrPPAJmE0eZOIoYJIpSkgjHzuTdaPXFCgAimrMBSyXnJ6T93oaYeQ7PW1lfPKidIHnYUbSq9fMMOBMIFMkWgRCAGyqQnupEzQjI9WgcKnn5%2Fgo42VIu0Ou65dxGmYKP%2BJjbnFOX5x06tPXz8U4URnK%2BEmop6RCU8sIYrKeGNeIX8PAMl%2B70wsl0wx7aZvQY6pgE2mw95huMsE%2Bj7W4hp3GqI9Y9T5Js0VMzUOgg3g0mKobDib%2Bw0xQMNDtB0QXVJsUC1KbDq1X7ifH%2FkYMhEHlvHEk9b9mBCQEm4vEKaWZaWijtZcu0LyGepKxnlcQNm6vnsYf5%2F%2BAYnj%2Bsm9yT8JhrkU%2B7qL9iBjOXauxlvsDtNQ89rCohvuvLS2rV3z0FLLbBgSWvCmX7wH4nrisajP1qEXvRD98bq&X-Amz-Signature=31ab5852b823a99fc6d054b8523c3c3ffc361855d304f59403eafd2d25d1d034&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKSDA32V%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEFpcrwn2o81kExgipstl3f34OpsrgMh9YGSJUTQmLa2AiA7kruHxa7DPFCuQdzEZwOnpyYAliYdwfohOMGxRas%2F%2Fir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMtscc2ifzZG8AM2pkKtwDjVGysP0FtvZxxsByRF8ab515i%2FcQtsIdDc3y5dzJJ9D4%2FqTy9srNXw097d2DTM0QKJWiOCsfKNuvzU2mUdopuQXf1ELu0WacRFkGaXUeU2gIQetI%2FzptjE3i0RE4tIf9yPg4rSDk1gYJax4Yhg%2BLVHDPH1TTTg%2FWSy0RwuFn5fAkybICNarKhi2X%2BUjBZEjnktDnbH21tnyrZgzEA4g1SD0yJQnFheftlyU%2FUzer77IChwMJdFPhSdIhSXRsgnxzHpXCOVNer3WngjEgbJgA64nRTziKzIIKJCGfg5ABWDxuhl2Mkf%2Ftm5nALc0YIRet3lhylQO3ihfKKd1lCsEfcjFBiafpSj9zRgTCxJ46ajlvExlouGDloU4LVfAgrod0q3PS8eKLDRJwk61lqIankGi0Pb3MfmFJXqpWhyYahsay8kdT0H2xzeLEoNQyZcdlkm9TWrPPAJmE0eZOIoYJIpSkgjHzuTdaPXFCgAimrMBSyXnJ6T93oaYeQ7PW1lfPKidIHnYUbSq9fMMOBMIFMkWgRCAGyqQnupEzQjI9WgcKnn5%2Fgo42VIu0Ou65dxGmYKP%2BJjbnFOX5x06tPXz8U4URnK%2BEmop6RCU8sIYrKeGNeIX8PAMl%2B70wsl0wx7aZvQY6pgE2mw95huMsE%2Bj7W4hp3GqI9Y9T5Js0VMzUOgg3g0mKobDib%2Bw0xQMNDtB0QXVJsUC1KbDq1X7ifH%2FkYMhEHlvHEk9b9mBCQEm4vEKaWZaWijtZcu0LyGepKxnlcQNm6vnsYf5%2F%2BAYnj%2Bsm9yT8JhrkU%2B7qL9iBjOXauxlvsDtNQ89rCohvuvLS2rV3z0FLLbBgSWvCmX7wH4nrisajP1qEXvRD98bq&X-Amz-Signature=488e1d5a680723dd15ee05a97d44acf7d159e741f036892e84054b34ab12d34d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKSDA32V%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEFpcrwn2o81kExgipstl3f34OpsrgMh9YGSJUTQmLa2AiA7kruHxa7DPFCuQdzEZwOnpyYAliYdwfohOMGxRas%2F%2Fir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMtscc2ifzZG8AM2pkKtwDjVGysP0FtvZxxsByRF8ab515i%2FcQtsIdDc3y5dzJJ9D4%2FqTy9srNXw097d2DTM0QKJWiOCsfKNuvzU2mUdopuQXf1ELu0WacRFkGaXUeU2gIQetI%2FzptjE3i0RE4tIf9yPg4rSDk1gYJax4Yhg%2BLVHDPH1TTTg%2FWSy0RwuFn5fAkybICNarKhi2X%2BUjBZEjnktDnbH21tnyrZgzEA4g1SD0yJQnFheftlyU%2FUzer77IChwMJdFPhSdIhSXRsgnxzHpXCOVNer3WngjEgbJgA64nRTziKzIIKJCGfg5ABWDxuhl2Mkf%2Ftm5nALc0YIRet3lhylQO3ihfKKd1lCsEfcjFBiafpSj9zRgTCxJ46ajlvExlouGDloU4LVfAgrod0q3PS8eKLDRJwk61lqIankGi0Pb3MfmFJXqpWhyYahsay8kdT0H2xzeLEoNQyZcdlkm9TWrPPAJmE0eZOIoYJIpSkgjHzuTdaPXFCgAimrMBSyXnJ6T93oaYeQ7PW1lfPKidIHnYUbSq9fMMOBMIFMkWgRCAGyqQnupEzQjI9WgcKnn5%2Fgo42VIu0Ou65dxGmYKP%2BJjbnFOX5x06tPXz8U4URnK%2BEmop6RCU8sIYrKeGNeIX8PAMl%2B70wsl0wx7aZvQY6pgE2mw95huMsE%2Bj7W4hp3GqI9Y9T5Js0VMzUOgg3g0mKobDib%2Bw0xQMNDtB0QXVJsUC1KbDq1X7ifH%2FkYMhEHlvHEk9b9mBCQEm4vEKaWZaWijtZcu0LyGepKxnlcQNm6vnsYf5%2F%2BAYnj%2Bsm9yT8JhrkU%2B7qL9iBjOXauxlvsDtNQ89rCohvuvLS2rV3z0FLLbBgSWvCmX7wH4nrisajP1qEXvRD98bq&X-Amz-Signature=a8c959a8b08e9188bc3f2855ff6823d3cb78f7de061182176d7305b9c944e96b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
