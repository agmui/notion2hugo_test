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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZMRD6H7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDPMZ7eBwQOYRMbSHbsl2tjVMvOPDcVbhFts84NHOTB8AIhAIhq8YXukZWkpRFXzxJEllbmjNGTraALi4RmOFZiWG2eKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygAsnGtGTrkOMx%2BLMq3AOHq9Bz99%2BrzAFijwDwKiRSwqrvYMVRHq59YXmAKzLvjod01gozfx5Tdf1peOM5OOX%2BKEG5383R1A1DMI91UQLg1BCIr0G5aeCxgq8M1Ss3s9RirkHPm7JB%2Bdy3QLzRd7P1igwcMUZ%2FXartRxf4qzVGS%2FxJ588iGPjv6ghIAF1KtCauGERKGWc38FGPV3SEztRWEzg%2F2jbGZ%2FGJzrur6LvhRYf8ctIeacMS%2BpaXpGAKjro1xyl%2FW99iwBpHx6Q6jOB%2FhsOnQirdI1FW3OWiGBmtmHiU9a6%2F69x09fkednrSLxaTF8YZc%2FXyNrZzIWIgsNlnGoKA8lcVlu73yQb%2B%2Bj6jPDdLFsqfdjD3U7CEuxMBMxmbQr49zh428FTGWvhgT0CSqks0cWriSM2piqlGArfNMHh7KygKvSqQ4wjGrGLiW1YIoRxG5I%2FbSMTh38rqWO5D8nebZm%2FiHETIokeIf4vqjttFdRJM6SmqKvhYQYwo4UfeaARNs0s80wi2mqvjUJGD1V0Z%2BEq69SrFqPPbhlw16EzPTElnFVqEAy4pxLOOseKEH6iou%2B60DOKs7C8GDWo%2FoYWz2KoVzkjPxMlfOpHeJxWPFoGk4TsgkKb2AhUch0KYkAlPOKodOJJVgzCN56LEBjqkAdj01UyIBkbvl2g6a4N6jxnSr8Psd0Y8F%2F0A5rsEhNU6VtdQydggaowA0GnUmNIwRcRhjmhm4rv4Sa3RHcX8yAAihDD3x6KR6dEaxvED%2BtePFwZhXLSawgXPu1DjfO40sA%2BvoCyIZbWYlgFiUYZX3zXM7ch9Zz2Ugk6lJxusR3PTccRdhwJRIi5%2BGCwdvihlpecxiHiKo%2BT%2B3f%2BbMXW0qM3giSu8&X-Amz-Signature=b0922618b1e7e97b5495e10d0ecdabadc34151a8e47d1ed79c43fb7127f71a35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZMRD6H7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDPMZ7eBwQOYRMbSHbsl2tjVMvOPDcVbhFts84NHOTB8AIhAIhq8YXukZWkpRFXzxJEllbmjNGTraALi4RmOFZiWG2eKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygAsnGtGTrkOMx%2BLMq3AOHq9Bz99%2BrzAFijwDwKiRSwqrvYMVRHq59YXmAKzLvjod01gozfx5Tdf1peOM5OOX%2BKEG5383R1A1DMI91UQLg1BCIr0G5aeCxgq8M1Ss3s9RirkHPm7JB%2Bdy3QLzRd7P1igwcMUZ%2FXartRxf4qzVGS%2FxJ588iGPjv6ghIAF1KtCauGERKGWc38FGPV3SEztRWEzg%2F2jbGZ%2FGJzrur6LvhRYf8ctIeacMS%2BpaXpGAKjro1xyl%2FW99iwBpHx6Q6jOB%2FhsOnQirdI1FW3OWiGBmtmHiU9a6%2F69x09fkednrSLxaTF8YZc%2FXyNrZzIWIgsNlnGoKA8lcVlu73yQb%2B%2Bj6jPDdLFsqfdjD3U7CEuxMBMxmbQr49zh428FTGWvhgT0CSqks0cWriSM2piqlGArfNMHh7KygKvSqQ4wjGrGLiW1YIoRxG5I%2FbSMTh38rqWO5D8nebZm%2FiHETIokeIf4vqjttFdRJM6SmqKvhYQYwo4UfeaARNs0s80wi2mqvjUJGD1V0Z%2BEq69SrFqPPbhlw16EzPTElnFVqEAy4pxLOOseKEH6iou%2B60DOKs7C8GDWo%2FoYWz2KoVzkjPxMlfOpHeJxWPFoGk4TsgkKb2AhUch0KYkAlPOKodOJJVgzCN56LEBjqkAdj01UyIBkbvl2g6a4N6jxnSr8Psd0Y8F%2F0A5rsEhNU6VtdQydggaowA0GnUmNIwRcRhjmhm4rv4Sa3RHcX8yAAihDD3x6KR6dEaxvED%2BtePFwZhXLSawgXPu1DjfO40sA%2BvoCyIZbWYlgFiUYZX3zXM7ch9Zz2Ugk6lJxusR3PTccRdhwJRIi5%2BGCwdvihlpecxiHiKo%2BT%2B3f%2BbMXW0qM3giSu8&X-Amz-Signature=86e9c6649bb26b6a40843d214da9018e920f6a31512911f059ae783e7c0ee8c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZMRD6H7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDPMZ7eBwQOYRMbSHbsl2tjVMvOPDcVbhFts84NHOTB8AIhAIhq8YXukZWkpRFXzxJEllbmjNGTraALi4RmOFZiWG2eKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygAsnGtGTrkOMx%2BLMq3AOHq9Bz99%2BrzAFijwDwKiRSwqrvYMVRHq59YXmAKzLvjod01gozfx5Tdf1peOM5OOX%2BKEG5383R1A1DMI91UQLg1BCIr0G5aeCxgq8M1Ss3s9RirkHPm7JB%2Bdy3QLzRd7P1igwcMUZ%2FXartRxf4qzVGS%2FxJ588iGPjv6ghIAF1KtCauGERKGWc38FGPV3SEztRWEzg%2F2jbGZ%2FGJzrur6LvhRYf8ctIeacMS%2BpaXpGAKjro1xyl%2FW99iwBpHx6Q6jOB%2FhsOnQirdI1FW3OWiGBmtmHiU9a6%2F69x09fkednrSLxaTF8YZc%2FXyNrZzIWIgsNlnGoKA8lcVlu73yQb%2B%2Bj6jPDdLFsqfdjD3U7CEuxMBMxmbQr49zh428FTGWvhgT0CSqks0cWriSM2piqlGArfNMHh7KygKvSqQ4wjGrGLiW1YIoRxG5I%2FbSMTh38rqWO5D8nebZm%2FiHETIokeIf4vqjttFdRJM6SmqKvhYQYwo4UfeaARNs0s80wi2mqvjUJGD1V0Z%2BEq69SrFqPPbhlw16EzPTElnFVqEAy4pxLOOseKEH6iou%2B60DOKs7C8GDWo%2FoYWz2KoVzkjPxMlfOpHeJxWPFoGk4TsgkKb2AhUch0KYkAlPOKodOJJVgzCN56LEBjqkAdj01UyIBkbvl2g6a4N6jxnSr8Psd0Y8F%2F0A5rsEhNU6VtdQydggaowA0GnUmNIwRcRhjmhm4rv4Sa3RHcX8yAAihDD3x6KR6dEaxvED%2BtePFwZhXLSawgXPu1DjfO40sA%2BvoCyIZbWYlgFiUYZX3zXM7ch9Zz2Ugk6lJxusR3PTccRdhwJRIi5%2BGCwdvihlpecxiHiKo%2BT%2B3f%2BbMXW0qM3giSu8&X-Amz-Signature=4e97a771eb4084f018328f13e17eec889915919836fba42dff0ae48fbaed7bbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZMRD6H7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDPMZ7eBwQOYRMbSHbsl2tjVMvOPDcVbhFts84NHOTB8AIhAIhq8YXukZWkpRFXzxJEllbmjNGTraALi4RmOFZiWG2eKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygAsnGtGTrkOMx%2BLMq3AOHq9Bz99%2BrzAFijwDwKiRSwqrvYMVRHq59YXmAKzLvjod01gozfx5Tdf1peOM5OOX%2BKEG5383R1A1DMI91UQLg1BCIr0G5aeCxgq8M1Ss3s9RirkHPm7JB%2Bdy3QLzRd7P1igwcMUZ%2FXartRxf4qzVGS%2FxJ588iGPjv6ghIAF1KtCauGERKGWc38FGPV3SEztRWEzg%2F2jbGZ%2FGJzrur6LvhRYf8ctIeacMS%2BpaXpGAKjro1xyl%2FW99iwBpHx6Q6jOB%2FhsOnQirdI1FW3OWiGBmtmHiU9a6%2F69x09fkednrSLxaTF8YZc%2FXyNrZzIWIgsNlnGoKA8lcVlu73yQb%2B%2Bj6jPDdLFsqfdjD3U7CEuxMBMxmbQr49zh428FTGWvhgT0CSqks0cWriSM2piqlGArfNMHh7KygKvSqQ4wjGrGLiW1YIoRxG5I%2FbSMTh38rqWO5D8nebZm%2FiHETIokeIf4vqjttFdRJM6SmqKvhYQYwo4UfeaARNs0s80wi2mqvjUJGD1V0Z%2BEq69SrFqPPbhlw16EzPTElnFVqEAy4pxLOOseKEH6iou%2B60DOKs7C8GDWo%2FoYWz2KoVzkjPxMlfOpHeJxWPFoGk4TsgkKb2AhUch0KYkAlPOKodOJJVgzCN56LEBjqkAdj01UyIBkbvl2g6a4N6jxnSr8Psd0Y8F%2F0A5rsEhNU6VtdQydggaowA0GnUmNIwRcRhjmhm4rv4Sa3RHcX8yAAihDD3x6KR6dEaxvED%2BtePFwZhXLSawgXPu1DjfO40sA%2BvoCyIZbWYlgFiUYZX3zXM7ch9Zz2Ugk6lJxusR3PTccRdhwJRIi5%2BGCwdvihlpecxiHiKo%2BT%2B3f%2BbMXW0qM3giSu8&X-Amz-Signature=d6c7f0d875283f3c47ce5416dd081e590c8983cbd5bc0a934da4cbdc92bbaf42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZMRD6H7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDPMZ7eBwQOYRMbSHbsl2tjVMvOPDcVbhFts84NHOTB8AIhAIhq8YXukZWkpRFXzxJEllbmjNGTraALi4RmOFZiWG2eKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygAsnGtGTrkOMx%2BLMq3AOHq9Bz99%2BrzAFijwDwKiRSwqrvYMVRHq59YXmAKzLvjod01gozfx5Tdf1peOM5OOX%2BKEG5383R1A1DMI91UQLg1BCIr0G5aeCxgq8M1Ss3s9RirkHPm7JB%2Bdy3QLzRd7P1igwcMUZ%2FXartRxf4qzVGS%2FxJ588iGPjv6ghIAF1KtCauGERKGWc38FGPV3SEztRWEzg%2F2jbGZ%2FGJzrur6LvhRYf8ctIeacMS%2BpaXpGAKjro1xyl%2FW99iwBpHx6Q6jOB%2FhsOnQirdI1FW3OWiGBmtmHiU9a6%2F69x09fkednrSLxaTF8YZc%2FXyNrZzIWIgsNlnGoKA8lcVlu73yQb%2B%2Bj6jPDdLFsqfdjD3U7CEuxMBMxmbQr49zh428FTGWvhgT0CSqks0cWriSM2piqlGArfNMHh7KygKvSqQ4wjGrGLiW1YIoRxG5I%2FbSMTh38rqWO5D8nebZm%2FiHETIokeIf4vqjttFdRJM6SmqKvhYQYwo4UfeaARNs0s80wi2mqvjUJGD1V0Z%2BEq69SrFqPPbhlw16EzPTElnFVqEAy4pxLOOseKEH6iou%2B60DOKs7C8GDWo%2FoYWz2KoVzkjPxMlfOpHeJxWPFoGk4TsgkKb2AhUch0KYkAlPOKodOJJVgzCN56LEBjqkAdj01UyIBkbvl2g6a4N6jxnSr8Psd0Y8F%2F0A5rsEhNU6VtdQydggaowA0GnUmNIwRcRhjmhm4rv4Sa3RHcX8yAAihDD3x6KR6dEaxvED%2BtePFwZhXLSawgXPu1DjfO40sA%2BvoCyIZbWYlgFiUYZX3zXM7ch9Zz2Ugk6lJxusR3PTccRdhwJRIi5%2BGCwdvihlpecxiHiKo%2BT%2B3f%2BbMXW0qM3giSu8&X-Amz-Signature=e689c2975b5c6d7cf20cbf00a68bd9a83fb569453b7af49937e15f3520d6cb3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZMRD6H7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDPMZ7eBwQOYRMbSHbsl2tjVMvOPDcVbhFts84NHOTB8AIhAIhq8YXukZWkpRFXzxJEllbmjNGTraALi4RmOFZiWG2eKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygAsnGtGTrkOMx%2BLMq3AOHq9Bz99%2BrzAFijwDwKiRSwqrvYMVRHq59YXmAKzLvjod01gozfx5Tdf1peOM5OOX%2BKEG5383R1A1DMI91UQLg1BCIr0G5aeCxgq8M1Ss3s9RirkHPm7JB%2Bdy3QLzRd7P1igwcMUZ%2FXartRxf4qzVGS%2FxJ588iGPjv6ghIAF1KtCauGERKGWc38FGPV3SEztRWEzg%2F2jbGZ%2FGJzrur6LvhRYf8ctIeacMS%2BpaXpGAKjro1xyl%2FW99iwBpHx6Q6jOB%2FhsOnQirdI1FW3OWiGBmtmHiU9a6%2F69x09fkednrSLxaTF8YZc%2FXyNrZzIWIgsNlnGoKA8lcVlu73yQb%2B%2Bj6jPDdLFsqfdjD3U7CEuxMBMxmbQr49zh428FTGWvhgT0CSqks0cWriSM2piqlGArfNMHh7KygKvSqQ4wjGrGLiW1YIoRxG5I%2FbSMTh38rqWO5D8nebZm%2FiHETIokeIf4vqjttFdRJM6SmqKvhYQYwo4UfeaARNs0s80wi2mqvjUJGD1V0Z%2BEq69SrFqPPbhlw16EzPTElnFVqEAy4pxLOOseKEH6iou%2B60DOKs7C8GDWo%2FoYWz2KoVzkjPxMlfOpHeJxWPFoGk4TsgkKb2AhUch0KYkAlPOKodOJJVgzCN56LEBjqkAdj01UyIBkbvl2g6a4N6jxnSr8Psd0Y8F%2F0A5rsEhNU6VtdQydggaowA0GnUmNIwRcRhjmhm4rv4Sa3RHcX8yAAihDD3x6KR6dEaxvED%2BtePFwZhXLSawgXPu1DjfO40sA%2BvoCyIZbWYlgFiUYZX3zXM7ch9Zz2Ugk6lJxusR3PTccRdhwJRIi5%2BGCwdvihlpecxiHiKo%2BT%2B3f%2BbMXW0qM3giSu8&X-Amz-Signature=1bdde3c7c06e61dfbeb1b2c454165c29eb0be52b0b56585bb4e0af947a07f374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZMRD6H7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDPMZ7eBwQOYRMbSHbsl2tjVMvOPDcVbhFts84NHOTB8AIhAIhq8YXukZWkpRFXzxJEllbmjNGTraALi4RmOFZiWG2eKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygAsnGtGTrkOMx%2BLMq3AOHq9Bz99%2BrzAFijwDwKiRSwqrvYMVRHq59YXmAKzLvjod01gozfx5Tdf1peOM5OOX%2BKEG5383R1A1DMI91UQLg1BCIr0G5aeCxgq8M1Ss3s9RirkHPm7JB%2Bdy3QLzRd7P1igwcMUZ%2FXartRxf4qzVGS%2FxJ588iGPjv6ghIAF1KtCauGERKGWc38FGPV3SEztRWEzg%2F2jbGZ%2FGJzrur6LvhRYf8ctIeacMS%2BpaXpGAKjro1xyl%2FW99iwBpHx6Q6jOB%2FhsOnQirdI1FW3OWiGBmtmHiU9a6%2F69x09fkednrSLxaTF8YZc%2FXyNrZzIWIgsNlnGoKA8lcVlu73yQb%2B%2Bj6jPDdLFsqfdjD3U7CEuxMBMxmbQr49zh428FTGWvhgT0CSqks0cWriSM2piqlGArfNMHh7KygKvSqQ4wjGrGLiW1YIoRxG5I%2FbSMTh38rqWO5D8nebZm%2FiHETIokeIf4vqjttFdRJM6SmqKvhYQYwo4UfeaARNs0s80wi2mqvjUJGD1V0Z%2BEq69SrFqPPbhlw16EzPTElnFVqEAy4pxLOOseKEH6iou%2B60DOKs7C8GDWo%2FoYWz2KoVzkjPxMlfOpHeJxWPFoGk4TsgkKb2AhUch0KYkAlPOKodOJJVgzCN56LEBjqkAdj01UyIBkbvl2g6a4N6jxnSr8Psd0Y8F%2F0A5rsEhNU6VtdQydggaowA0GnUmNIwRcRhjmhm4rv4Sa3RHcX8yAAihDD3x6KR6dEaxvED%2BtePFwZhXLSawgXPu1DjfO40sA%2BvoCyIZbWYlgFiUYZX3zXM7ch9Zz2Ugk6lJxusR3PTccRdhwJRIi5%2BGCwdvihlpecxiHiKo%2BT%2B3f%2BbMXW0qM3giSu8&X-Amz-Signature=40826a88985154986edf2d0a3ce72a38c9d1e466edacb288741b0580fa38bd30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
