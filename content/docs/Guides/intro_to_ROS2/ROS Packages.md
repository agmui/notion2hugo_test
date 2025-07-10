---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVKQ3NWE%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T061429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCecPQ3fp2WNtjPZmoXabbinThBo1NMV8dsBb39a5AKZgIhAJZHpQobD%2FNlN4uS06qHi2MXh3sXdazYoHWRgW74cN1FKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy292SZP085wK%2FHVQIq3AP6gBZ8PR41NpObrRp5mDDPtc24MAdA6kA%2F7V5JS7IwAftUndyXeBQFXH%2F7CcTdO5oYA4JlKWiojStMC4CmW%2BrU1NH%2BOVo1337TVoOFx9ZKfNSL%2BTRhOLm%2F%2BlOGdBGfVJtS%2BwS0solm9YD%2B%2BeEV4Mm6ocNlBTYZK8ef%2Bh%2FNuglkUsop1uAwg42UU8FDwHTDGOPIPNOhyL3CMpvBORDrn5jfTU%2B5VlKCOLLmv%2F46xPKWFxrwq%2FbuPGYLnhzMvUfUq8RE9f3v7imfD0Hq1o3vpXsZ0XNVCSaivVWDGWEo5onVE%2BLUMwWvL09VzyL1CKIQXP%2F1xlemC52WVp1KFsp4j1M6SCnT2zmpmn4U%2FyI3gJnReXRn2OssSU7prhQI4oPG%2BorJAE5lP2qs6swec48NGzQSXnDSYYV2tXhbtElGQYyPGvzc2MfDRq4pRCC5kN9UVwjM9eX6jvp322Iv%2BeFoWCvKNLv76c%2FuOmmf0pwK77IxowMrT1PLMhSRrlyPH1Dc9opt6VOaOyoxNigYIio33G7rHsQAgcWxKBpKcQLro5Vh5XL8DjankvC3%2Fvr0bQws8S1Ddc7KZe5WovanOC6OWHd%2Bk8d7ljckHFecI6I1wdLcmZyMoQXPETzEHm8UrzCDqb3DBjqkASNMEbLifqJXfUJrPstVaTdf87ugCrPq%2FV%2BRRC3IkKmZ2d7xUmGBqbSsWe577UjDahW9vTLpDrjQPGY1ZvAyVs0WO0h7JstTlEqUOBCKPpW1FC8JA68FWdTSm4W94fKyyS6XlkLJvWDtOSFssLMfFlPua90vzp%2BHLGFsS3rm4jiSVQs1KL7U93qZWdmoU4ywV9gTGJL4SlHFplt5rz9ObjlH%2FGXK&X-Amz-Signature=f208bc3e97e07ad73e764c3fb83d225bfb80f6c5f31c057d7d4cb5940b4ed574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVKQ3NWE%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T061429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCecPQ3fp2WNtjPZmoXabbinThBo1NMV8dsBb39a5AKZgIhAJZHpQobD%2FNlN4uS06qHi2MXh3sXdazYoHWRgW74cN1FKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy292SZP085wK%2FHVQIq3AP6gBZ8PR41NpObrRp5mDDPtc24MAdA6kA%2F7V5JS7IwAftUndyXeBQFXH%2F7CcTdO5oYA4JlKWiojStMC4CmW%2BrU1NH%2BOVo1337TVoOFx9ZKfNSL%2BTRhOLm%2F%2BlOGdBGfVJtS%2BwS0solm9YD%2B%2BeEV4Mm6ocNlBTYZK8ef%2Bh%2FNuglkUsop1uAwg42UU8FDwHTDGOPIPNOhyL3CMpvBORDrn5jfTU%2B5VlKCOLLmv%2F46xPKWFxrwq%2FbuPGYLnhzMvUfUq8RE9f3v7imfD0Hq1o3vpXsZ0XNVCSaivVWDGWEo5onVE%2BLUMwWvL09VzyL1CKIQXP%2F1xlemC52WVp1KFsp4j1M6SCnT2zmpmn4U%2FyI3gJnReXRn2OssSU7prhQI4oPG%2BorJAE5lP2qs6swec48NGzQSXnDSYYV2tXhbtElGQYyPGvzc2MfDRq4pRCC5kN9UVwjM9eX6jvp322Iv%2BeFoWCvKNLv76c%2FuOmmf0pwK77IxowMrT1PLMhSRrlyPH1Dc9opt6VOaOyoxNigYIio33G7rHsQAgcWxKBpKcQLro5Vh5XL8DjankvC3%2Fvr0bQws8S1Ddc7KZe5WovanOC6OWHd%2Bk8d7ljckHFecI6I1wdLcmZyMoQXPETzEHm8UrzCDqb3DBjqkASNMEbLifqJXfUJrPstVaTdf87ugCrPq%2FV%2BRRC3IkKmZ2d7xUmGBqbSsWe577UjDahW9vTLpDrjQPGY1ZvAyVs0WO0h7JstTlEqUOBCKPpW1FC8JA68FWdTSm4W94fKyyS6XlkLJvWDtOSFssLMfFlPua90vzp%2BHLGFsS3rm4jiSVQs1KL7U93qZWdmoU4ywV9gTGJL4SlHFplt5rz9ObjlH%2FGXK&X-Amz-Signature=6e3d0a22702202bd6dce8b136412e3acf2caaa0ea6320fd77b4e08a36000e5b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVKQ3NWE%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T061429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCecPQ3fp2WNtjPZmoXabbinThBo1NMV8dsBb39a5AKZgIhAJZHpQobD%2FNlN4uS06qHi2MXh3sXdazYoHWRgW74cN1FKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy292SZP085wK%2FHVQIq3AP6gBZ8PR41NpObrRp5mDDPtc24MAdA6kA%2F7V5JS7IwAftUndyXeBQFXH%2F7CcTdO5oYA4JlKWiojStMC4CmW%2BrU1NH%2BOVo1337TVoOFx9ZKfNSL%2BTRhOLm%2F%2BlOGdBGfVJtS%2BwS0solm9YD%2B%2BeEV4Mm6ocNlBTYZK8ef%2Bh%2FNuglkUsop1uAwg42UU8FDwHTDGOPIPNOhyL3CMpvBORDrn5jfTU%2B5VlKCOLLmv%2F46xPKWFxrwq%2FbuPGYLnhzMvUfUq8RE9f3v7imfD0Hq1o3vpXsZ0XNVCSaivVWDGWEo5onVE%2BLUMwWvL09VzyL1CKIQXP%2F1xlemC52WVp1KFsp4j1M6SCnT2zmpmn4U%2FyI3gJnReXRn2OssSU7prhQI4oPG%2BorJAE5lP2qs6swec48NGzQSXnDSYYV2tXhbtElGQYyPGvzc2MfDRq4pRCC5kN9UVwjM9eX6jvp322Iv%2BeFoWCvKNLv76c%2FuOmmf0pwK77IxowMrT1PLMhSRrlyPH1Dc9opt6VOaOyoxNigYIio33G7rHsQAgcWxKBpKcQLro5Vh5XL8DjankvC3%2Fvr0bQws8S1Ddc7KZe5WovanOC6OWHd%2Bk8d7ljckHFecI6I1wdLcmZyMoQXPETzEHm8UrzCDqb3DBjqkASNMEbLifqJXfUJrPstVaTdf87ugCrPq%2FV%2BRRC3IkKmZ2d7xUmGBqbSsWe577UjDahW9vTLpDrjQPGY1ZvAyVs0WO0h7JstTlEqUOBCKPpW1FC8JA68FWdTSm4W94fKyyS6XlkLJvWDtOSFssLMfFlPua90vzp%2BHLGFsS3rm4jiSVQs1KL7U93qZWdmoU4ywV9gTGJL4SlHFplt5rz9ObjlH%2FGXK&X-Amz-Signature=941624500d5b1483bfc4a89a60e2c2bb4a51107519be55ca13369af50dd18a56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVKQ3NWE%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T061429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCecPQ3fp2WNtjPZmoXabbinThBo1NMV8dsBb39a5AKZgIhAJZHpQobD%2FNlN4uS06qHi2MXh3sXdazYoHWRgW74cN1FKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy292SZP085wK%2FHVQIq3AP6gBZ8PR41NpObrRp5mDDPtc24MAdA6kA%2F7V5JS7IwAftUndyXeBQFXH%2F7CcTdO5oYA4JlKWiojStMC4CmW%2BrU1NH%2BOVo1337TVoOFx9ZKfNSL%2BTRhOLm%2F%2BlOGdBGfVJtS%2BwS0solm9YD%2B%2BeEV4Mm6ocNlBTYZK8ef%2Bh%2FNuglkUsop1uAwg42UU8FDwHTDGOPIPNOhyL3CMpvBORDrn5jfTU%2B5VlKCOLLmv%2F46xPKWFxrwq%2FbuPGYLnhzMvUfUq8RE9f3v7imfD0Hq1o3vpXsZ0XNVCSaivVWDGWEo5onVE%2BLUMwWvL09VzyL1CKIQXP%2F1xlemC52WVp1KFsp4j1M6SCnT2zmpmn4U%2FyI3gJnReXRn2OssSU7prhQI4oPG%2BorJAE5lP2qs6swec48NGzQSXnDSYYV2tXhbtElGQYyPGvzc2MfDRq4pRCC5kN9UVwjM9eX6jvp322Iv%2BeFoWCvKNLv76c%2FuOmmf0pwK77IxowMrT1PLMhSRrlyPH1Dc9opt6VOaOyoxNigYIio33G7rHsQAgcWxKBpKcQLro5Vh5XL8DjankvC3%2Fvr0bQws8S1Ddc7KZe5WovanOC6OWHd%2Bk8d7ljckHFecI6I1wdLcmZyMoQXPETzEHm8UrzCDqb3DBjqkASNMEbLifqJXfUJrPstVaTdf87ugCrPq%2FV%2BRRC3IkKmZ2d7xUmGBqbSsWe577UjDahW9vTLpDrjQPGY1ZvAyVs0WO0h7JstTlEqUOBCKPpW1FC8JA68FWdTSm4W94fKyyS6XlkLJvWDtOSFssLMfFlPua90vzp%2BHLGFsS3rm4jiSVQs1KL7U93qZWdmoU4ywV9gTGJL4SlHFplt5rz9ObjlH%2FGXK&X-Amz-Signature=4e65d7d1996653c64a0a5e91314fe1d8efac5bbde7d81e45e5aeeba3892bb15e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVKQ3NWE%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T061429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCecPQ3fp2WNtjPZmoXabbinThBo1NMV8dsBb39a5AKZgIhAJZHpQobD%2FNlN4uS06qHi2MXh3sXdazYoHWRgW74cN1FKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy292SZP085wK%2FHVQIq3AP6gBZ8PR41NpObrRp5mDDPtc24MAdA6kA%2F7V5JS7IwAftUndyXeBQFXH%2F7CcTdO5oYA4JlKWiojStMC4CmW%2BrU1NH%2BOVo1337TVoOFx9ZKfNSL%2BTRhOLm%2F%2BlOGdBGfVJtS%2BwS0solm9YD%2B%2BeEV4Mm6ocNlBTYZK8ef%2Bh%2FNuglkUsop1uAwg42UU8FDwHTDGOPIPNOhyL3CMpvBORDrn5jfTU%2B5VlKCOLLmv%2F46xPKWFxrwq%2FbuPGYLnhzMvUfUq8RE9f3v7imfD0Hq1o3vpXsZ0XNVCSaivVWDGWEo5onVE%2BLUMwWvL09VzyL1CKIQXP%2F1xlemC52WVp1KFsp4j1M6SCnT2zmpmn4U%2FyI3gJnReXRn2OssSU7prhQI4oPG%2BorJAE5lP2qs6swec48NGzQSXnDSYYV2tXhbtElGQYyPGvzc2MfDRq4pRCC5kN9UVwjM9eX6jvp322Iv%2BeFoWCvKNLv76c%2FuOmmf0pwK77IxowMrT1PLMhSRrlyPH1Dc9opt6VOaOyoxNigYIio33G7rHsQAgcWxKBpKcQLro5Vh5XL8DjankvC3%2Fvr0bQws8S1Ddc7KZe5WovanOC6OWHd%2Bk8d7ljckHFecI6I1wdLcmZyMoQXPETzEHm8UrzCDqb3DBjqkASNMEbLifqJXfUJrPstVaTdf87ugCrPq%2FV%2BRRC3IkKmZ2d7xUmGBqbSsWe577UjDahW9vTLpDrjQPGY1ZvAyVs0WO0h7JstTlEqUOBCKPpW1FC8JA68FWdTSm4W94fKyyS6XlkLJvWDtOSFssLMfFlPua90vzp%2BHLGFsS3rm4jiSVQs1KL7U93qZWdmoU4ywV9gTGJL4SlHFplt5rz9ObjlH%2FGXK&X-Amz-Signature=c64b165a95dabc2c87b2183e471300bbab777113e19658f5231385e0c3fda752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVKQ3NWE%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T061429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCecPQ3fp2WNtjPZmoXabbinThBo1NMV8dsBb39a5AKZgIhAJZHpQobD%2FNlN4uS06qHi2MXh3sXdazYoHWRgW74cN1FKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy292SZP085wK%2FHVQIq3AP6gBZ8PR41NpObrRp5mDDPtc24MAdA6kA%2F7V5JS7IwAftUndyXeBQFXH%2F7CcTdO5oYA4JlKWiojStMC4CmW%2BrU1NH%2BOVo1337TVoOFx9ZKfNSL%2BTRhOLm%2F%2BlOGdBGfVJtS%2BwS0solm9YD%2B%2BeEV4Mm6ocNlBTYZK8ef%2Bh%2FNuglkUsop1uAwg42UU8FDwHTDGOPIPNOhyL3CMpvBORDrn5jfTU%2B5VlKCOLLmv%2F46xPKWFxrwq%2FbuPGYLnhzMvUfUq8RE9f3v7imfD0Hq1o3vpXsZ0XNVCSaivVWDGWEo5onVE%2BLUMwWvL09VzyL1CKIQXP%2F1xlemC52WVp1KFsp4j1M6SCnT2zmpmn4U%2FyI3gJnReXRn2OssSU7prhQI4oPG%2BorJAE5lP2qs6swec48NGzQSXnDSYYV2tXhbtElGQYyPGvzc2MfDRq4pRCC5kN9UVwjM9eX6jvp322Iv%2BeFoWCvKNLv76c%2FuOmmf0pwK77IxowMrT1PLMhSRrlyPH1Dc9opt6VOaOyoxNigYIio33G7rHsQAgcWxKBpKcQLro5Vh5XL8DjankvC3%2Fvr0bQws8S1Ddc7KZe5WovanOC6OWHd%2Bk8d7ljckHFecI6I1wdLcmZyMoQXPETzEHm8UrzCDqb3DBjqkASNMEbLifqJXfUJrPstVaTdf87ugCrPq%2FV%2BRRC3IkKmZ2d7xUmGBqbSsWe577UjDahW9vTLpDrjQPGY1ZvAyVs0WO0h7JstTlEqUOBCKPpW1FC8JA68FWdTSm4W94fKyyS6XlkLJvWDtOSFssLMfFlPua90vzp%2BHLGFsS3rm4jiSVQs1KL7U93qZWdmoU4ywV9gTGJL4SlHFplt5rz9ObjlH%2FGXK&X-Amz-Signature=86bf54b308f4f18b19a9c5e423e91f8cf43102020ff1d613b750272b9605d755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVKQ3NWE%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T061429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCecPQ3fp2WNtjPZmoXabbinThBo1NMV8dsBb39a5AKZgIhAJZHpQobD%2FNlN4uS06qHi2MXh3sXdazYoHWRgW74cN1FKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy292SZP085wK%2FHVQIq3AP6gBZ8PR41NpObrRp5mDDPtc24MAdA6kA%2F7V5JS7IwAftUndyXeBQFXH%2F7CcTdO5oYA4JlKWiojStMC4CmW%2BrU1NH%2BOVo1337TVoOFx9ZKfNSL%2BTRhOLm%2F%2BlOGdBGfVJtS%2BwS0solm9YD%2B%2BeEV4Mm6ocNlBTYZK8ef%2Bh%2FNuglkUsop1uAwg42UU8FDwHTDGOPIPNOhyL3CMpvBORDrn5jfTU%2B5VlKCOLLmv%2F46xPKWFxrwq%2FbuPGYLnhzMvUfUq8RE9f3v7imfD0Hq1o3vpXsZ0XNVCSaivVWDGWEo5onVE%2BLUMwWvL09VzyL1CKIQXP%2F1xlemC52WVp1KFsp4j1M6SCnT2zmpmn4U%2FyI3gJnReXRn2OssSU7prhQI4oPG%2BorJAE5lP2qs6swec48NGzQSXnDSYYV2tXhbtElGQYyPGvzc2MfDRq4pRCC5kN9UVwjM9eX6jvp322Iv%2BeFoWCvKNLv76c%2FuOmmf0pwK77IxowMrT1PLMhSRrlyPH1Dc9opt6VOaOyoxNigYIio33G7rHsQAgcWxKBpKcQLro5Vh5XL8DjankvC3%2Fvr0bQws8S1Ddc7KZe5WovanOC6OWHd%2Bk8d7ljckHFecI6I1wdLcmZyMoQXPETzEHm8UrzCDqb3DBjqkASNMEbLifqJXfUJrPstVaTdf87ugCrPq%2FV%2BRRC3IkKmZ2d7xUmGBqbSsWe577UjDahW9vTLpDrjQPGY1ZvAyVs0WO0h7JstTlEqUOBCKPpW1FC8JA68FWdTSm4W94fKyyS6XlkLJvWDtOSFssLMfFlPua90vzp%2BHLGFsS3rm4jiSVQs1KL7U93qZWdmoU4ywV9gTGJL4SlHFplt5rz9ObjlH%2FGXK&X-Amz-Signature=49124f0cfd777020c41c80ecaf42936fe79b74531fa3dbd9859b316f40379591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
