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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T73HMNI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T190659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCzdImL%2Fjmx2jutBWV%2By5%2FHorRqRPLpysRvcsPD7GxhwIgUkxwOaKrXQWPaOyQZW76BJ%2F3iEdYKoo15Gvl9DRc2j4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDE78%2BcLUAVQnSFAyOCrcAx%2Bm2LgOTaJy6o58SMwIpxckgLJnKZWX%2FrxbqEtqs%2FkK1yp4eLRFbNPGTiUUN2uF4aSxUzFG1mc8HgFCQJ5qc5PRDT0b7Mm0jsC1C5sIHKGqUXIgQHLV4CofWVqJ4E0BTvygyt1wfcNwVFCz4uRRxCvPk8ySYnOt3k%2FbXWXAMhQ9DvHCjfI6Cy9jUwPLr1ovp6%2BL%2BlU9EQwWEhpp6CDYJw7ep91AxP4sgPnHKsHZfYwD1e9%2FRXYB7GCrBBOSor%2BmMAjaynVrzHzdxfaZZUMfblA5JIMLDh4rqKdB415x6xifRu4YupoBU%2BQUCN7KiYA7TPXDu8VazrGbXC6tl9fdhBdbYUdar4z3ks1ieqYe0YNVg0ZK0yNjU8wpwj3052MUF%2F%2Fdcp%2BcPueLCQS%2FSXcqssif46OY87JwbFCRjN%2Bg1p%2F9%2FeztGCUpMLD1kR2eXQxEVoywRL1x5KURiXYNHmnlC9i%2FoJosomsikuPalmGFzGngkxgissCYc9fbT9eo%2FrdsIGQSK%2BepnRSXQxxAod%2BjnsQu7Jpr1ybDTwNDr40hTpKku23HjMgaNP9WDcgrvDiy7Pk1UlJJXTf75S2Bk6kUvfdzbaMg8P4QFBGPdmX%2BAduDxKqWqJ6oKOyOk7JuMKubv8AGOqUB4lfJoO%2BZaquWZSa9zbBcDKujjwySv0NezHlICo1MRR2hxehCytOWM9yDAGNDLpW0vdClxAVv2MsodAPZFV31e7GpuDIGk9M9htcWL6ZIPa7cX1efw9l%2FSXzC8QFNjFYxpWIxVSNYKAZPsRzdTK5KcFiZVlHhBiIFxU46KrujLFh3rd%2FwJAqUn9vEpfVuw29BBDtX7YEpcAXCyWoZdtpJcpfCG%2Bha&X-Amz-Signature=e5fba8395ab51f4fe31a4f2fe00fc39c631b52b0110e87cfb072de32af5168ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T73HMNI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T190659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCzdImL%2Fjmx2jutBWV%2By5%2FHorRqRPLpysRvcsPD7GxhwIgUkxwOaKrXQWPaOyQZW76BJ%2F3iEdYKoo15Gvl9DRc2j4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDE78%2BcLUAVQnSFAyOCrcAx%2Bm2LgOTaJy6o58SMwIpxckgLJnKZWX%2FrxbqEtqs%2FkK1yp4eLRFbNPGTiUUN2uF4aSxUzFG1mc8HgFCQJ5qc5PRDT0b7Mm0jsC1C5sIHKGqUXIgQHLV4CofWVqJ4E0BTvygyt1wfcNwVFCz4uRRxCvPk8ySYnOt3k%2FbXWXAMhQ9DvHCjfI6Cy9jUwPLr1ovp6%2BL%2BlU9EQwWEhpp6CDYJw7ep91AxP4sgPnHKsHZfYwD1e9%2FRXYB7GCrBBOSor%2BmMAjaynVrzHzdxfaZZUMfblA5JIMLDh4rqKdB415x6xifRu4YupoBU%2BQUCN7KiYA7TPXDu8VazrGbXC6tl9fdhBdbYUdar4z3ks1ieqYe0YNVg0ZK0yNjU8wpwj3052MUF%2F%2Fdcp%2BcPueLCQS%2FSXcqssif46OY87JwbFCRjN%2Bg1p%2F9%2FeztGCUpMLD1kR2eXQxEVoywRL1x5KURiXYNHmnlC9i%2FoJosomsikuPalmGFzGngkxgissCYc9fbT9eo%2FrdsIGQSK%2BepnRSXQxxAod%2BjnsQu7Jpr1ybDTwNDr40hTpKku23HjMgaNP9WDcgrvDiy7Pk1UlJJXTf75S2Bk6kUvfdzbaMg8P4QFBGPdmX%2BAduDxKqWqJ6oKOyOk7JuMKubv8AGOqUB4lfJoO%2BZaquWZSa9zbBcDKujjwySv0NezHlICo1MRR2hxehCytOWM9yDAGNDLpW0vdClxAVv2MsodAPZFV31e7GpuDIGk9M9htcWL6ZIPa7cX1efw9l%2FSXzC8QFNjFYxpWIxVSNYKAZPsRzdTK5KcFiZVlHhBiIFxU46KrujLFh3rd%2FwJAqUn9vEpfVuw29BBDtX7YEpcAXCyWoZdtpJcpfCG%2Bha&X-Amz-Signature=8618f914dc6b3ecd32de4f0c19d2c4711f4513c172c5311ffa65343fc5726c46&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T73HMNI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T190659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCzdImL%2Fjmx2jutBWV%2By5%2FHorRqRPLpysRvcsPD7GxhwIgUkxwOaKrXQWPaOyQZW76BJ%2F3iEdYKoo15Gvl9DRc2j4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDE78%2BcLUAVQnSFAyOCrcAx%2Bm2LgOTaJy6o58SMwIpxckgLJnKZWX%2FrxbqEtqs%2FkK1yp4eLRFbNPGTiUUN2uF4aSxUzFG1mc8HgFCQJ5qc5PRDT0b7Mm0jsC1C5sIHKGqUXIgQHLV4CofWVqJ4E0BTvygyt1wfcNwVFCz4uRRxCvPk8ySYnOt3k%2FbXWXAMhQ9DvHCjfI6Cy9jUwPLr1ovp6%2BL%2BlU9EQwWEhpp6CDYJw7ep91AxP4sgPnHKsHZfYwD1e9%2FRXYB7GCrBBOSor%2BmMAjaynVrzHzdxfaZZUMfblA5JIMLDh4rqKdB415x6xifRu4YupoBU%2BQUCN7KiYA7TPXDu8VazrGbXC6tl9fdhBdbYUdar4z3ks1ieqYe0YNVg0ZK0yNjU8wpwj3052MUF%2F%2Fdcp%2BcPueLCQS%2FSXcqssif46OY87JwbFCRjN%2Bg1p%2F9%2FeztGCUpMLD1kR2eXQxEVoywRL1x5KURiXYNHmnlC9i%2FoJosomsikuPalmGFzGngkxgissCYc9fbT9eo%2FrdsIGQSK%2BepnRSXQxxAod%2BjnsQu7Jpr1ybDTwNDr40hTpKku23HjMgaNP9WDcgrvDiy7Pk1UlJJXTf75S2Bk6kUvfdzbaMg8P4QFBGPdmX%2BAduDxKqWqJ6oKOyOk7JuMKubv8AGOqUB4lfJoO%2BZaquWZSa9zbBcDKujjwySv0NezHlICo1MRR2hxehCytOWM9yDAGNDLpW0vdClxAVv2MsodAPZFV31e7GpuDIGk9M9htcWL6ZIPa7cX1efw9l%2FSXzC8QFNjFYxpWIxVSNYKAZPsRzdTK5KcFiZVlHhBiIFxU46KrujLFh3rd%2FwJAqUn9vEpfVuw29BBDtX7YEpcAXCyWoZdtpJcpfCG%2Bha&X-Amz-Signature=3c7dd9fe1eee1301ddcf258ff8d142a0367ec6eadacf74f2563ea6ec6adbc568&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T73HMNI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T190659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCzdImL%2Fjmx2jutBWV%2By5%2FHorRqRPLpysRvcsPD7GxhwIgUkxwOaKrXQWPaOyQZW76BJ%2F3iEdYKoo15Gvl9DRc2j4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDE78%2BcLUAVQnSFAyOCrcAx%2Bm2LgOTaJy6o58SMwIpxckgLJnKZWX%2FrxbqEtqs%2FkK1yp4eLRFbNPGTiUUN2uF4aSxUzFG1mc8HgFCQJ5qc5PRDT0b7Mm0jsC1C5sIHKGqUXIgQHLV4CofWVqJ4E0BTvygyt1wfcNwVFCz4uRRxCvPk8ySYnOt3k%2FbXWXAMhQ9DvHCjfI6Cy9jUwPLr1ovp6%2BL%2BlU9EQwWEhpp6CDYJw7ep91AxP4sgPnHKsHZfYwD1e9%2FRXYB7GCrBBOSor%2BmMAjaynVrzHzdxfaZZUMfblA5JIMLDh4rqKdB415x6xifRu4YupoBU%2BQUCN7KiYA7TPXDu8VazrGbXC6tl9fdhBdbYUdar4z3ks1ieqYe0YNVg0ZK0yNjU8wpwj3052MUF%2F%2Fdcp%2BcPueLCQS%2FSXcqssif46OY87JwbFCRjN%2Bg1p%2F9%2FeztGCUpMLD1kR2eXQxEVoywRL1x5KURiXYNHmnlC9i%2FoJosomsikuPalmGFzGngkxgissCYc9fbT9eo%2FrdsIGQSK%2BepnRSXQxxAod%2BjnsQu7Jpr1ybDTwNDr40hTpKku23HjMgaNP9WDcgrvDiy7Pk1UlJJXTf75S2Bk6kUvfdzbaMg8P4QFBGPdmX%2BAduDxKqWqJ6oKOyOk7JuMKubv8AGOqUB4lfJoO%2BZaquWZSa9zbBcDKujjwySv0NezHlICo1MRR2hxehCytOWM9yDAGNDLpW0vdClxAVv2MsodAPZFV31e7GpuDIGk9M9htcWL6ZIPa7cX1efw9l%2FSXzC8QFNjFYxpWIxVSNYKAZPsRzdTK5KcFiZVlHhBiIFxU46KrujLFh3rd%2FwJAqUn9vEpfVuw29BBDtX7YEpcAXCyWoZdtpJcpfCG%2Bha&X-Amz-Signature=5fdbed95168da082186faa126487ed4962f3de13921a23d099afeb08485c2d1d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T73HMNI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T190659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCzdImL%2Fjmx2jutBWV%2By5%2FHorRqRPLpysRvcsPD7GxhwIgUkxwOaKrXQWPaOyQZW76BJ%2F3iEdYKoo15Gvl9DRc2j4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDE78%2BcLUAVQnSFAyOCrcAx%2Bm2LgOTaJy6o58SMwIpxckgLJnKZWX%2FrxbqEtqs%2FkK1yp4eLRFbNPGTiUUN2uF4aSxUzFG1mc8HgFCQJ5qc5PRDT0b7Mm0jsC1C5sIHKGqUXIgQHLV4CofWVqJ4E0BTvygyt1wfcNwVFCz4uRRxCvPk8ySYnOt3k%2FbXWXAMhQ9DvHCjfI6Cy9jUwPLr1ovp6%2BL%2BlU9EQwWEhpp6CDYJw7ep91AxP4sgPnHKsHZfYwD1e9%2FRXYB7GCrBBOSor%2BmMAjaynVrzHzdxfaZZUMfblA5JIMLDh4rqKdB415x6xifRu4YupoBU%2BQUCN7KiYA7TPXDu8VazrGbXC6tl9fdhBdbYUdar4z3ks1ieqYe0YNVg0ZK0yNjU8wpwj3052MUF%2F%2Fdcp%2BcPueLCQS%2FSXcqssif46OY87JwbFCRjN%2Bg1p%2F9%2FeztGCUpMLD1kR2eXQxEVoywRL1x5KURiXYNHmnlC9i%2FoJosomsikuPalmGFzGngkxgissCYc9fbT9eo%2FrdsIGQSK%2BepnRSXQxxAod%2BjnsQu7Jpr1ybDTwNDr40hTpKku23HjMgaNP9WDcgrvDiy7Pk1UlJJXTf75S2Bk6kUvfdzbaMg8P4QFBGPdmX%2BAduDxKqWqJ6oKOyOk7JuMKubv8AGOqUB4lfJoO%2BZaquWZSa9zbBcDKujjwySv0NezHlICo1MRR2hxehCytOWM9yDAGNDLpW0vdClxAVv2MsodAPZFV31e7GpuDIGk9M9htcWL6ZIPa7cX1efw9l%2FSXzC8QFNjFYxpWIxVSNYKAZPsRzdTK5KcFiZVlHhBiIFxU46KrujLFh3rd%2FwJAqUn9vEpfVuw29BBDtX7YEpcAXCyWoZdtpJcpfCG%2Bha&X-Amz-Signature=820a2bfcf41918922d2cbe1fc2c75eb2fb017ad05b54be21ef753b1877918aed&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T73HMNI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T190659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCzdImL%2Fjmx2jutBWV%2By5%2FHorRqRPLpysRvcsPD7GxhwIgUkxwOaKrXQWPaOyQZW76BJ%2F3iEdYKoo15Gvl9DRc2j4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDE78%2BcLUAVQnSFAyOCrcAx%2Bm2LgOTaJy6o58SMwIpxckgLJnKZWX%2FrxbqEtqs%2FkK1yp4eLRFbNPGTiUUN2uF4aSxUzFG1mc8HgFCQJ5qc5PRDT0b7Mm0jsC1C5sIHKGqUXIgQHLV4CofWVqJ4E0BTvygyt1wfcNwVFCz4uRRxCvPk8ySYnOt3k%2FbXWXAMhQ9DvHCjfI6Cy9jUwPLr1ovp6%2BL%2BlU9EQwWEhpp6CDYJw7ep91AxP4sgPnHKsHZfYwD1e9%2FRXYB7GCrBBOSor%2BmMAjaynVrzHzdxfaZZUMfblA5JIMLDh4rqKdB415x6xifRu4YupoBU%2BQUCN7KiYA7TPXDu8VazrGbXC6tl9fdhBdbYUdar4z3ks1ieqYe0YNVg0ZK0yNjU8wpwj3052MUF%2F%2Fdcp%2BcPueLCQS%2FSXcqssif46OY87JwbFCRjN%2Bg1p%2F9%2FeztGCUpMLD1kR2eXQxEVoywRL1x5KURiXYNHmnlC9i%2FoJosomsikuPalmGFzGngkxgissCYc9fbT9eo%2FrdsIGQSK%2BepnRSXQxxAod%2BjnsQu7Jpr1ybDTwNDr40hTpKku23HjMgaNP9WDcgrvDiy7Pk1UlJJXTf75S2Bk6kUvfdzbaMg8P4QFBGPdmX%2BAduDxKqWqJ6oKOyOk7JuMKubv8AGOqUB4lfJoO%2BZaquWZSa9zbBcDKujjwySv0NezHlICo1MRR2hxehCytOWM9yDAGNDLpW0vdClxAVv2MsodAPZFV31e7GpuDIGk9M9htcWL6ZIPa7cX1efw9l%2FSXzC8QFNjFYxpWIxVSNYKAZPsRzdTK5KcFiZVlHhBiIFxU46KrujLFh3rd%2FwJAqUn9vEpfVuw29BBDtX7YEpcAXCyWoZdtpJcpfCG%2Bha&X-Amz-Signature=e22e4ff21e33895e2b2dd6c6846bf44a8ae966aaaaa5c884f573beadebbfb59d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T73HMNI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T190659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCzdImL%2Fjmx2jutBWV%2By5%2FHorRqRPLpysRvcsPD7GxhwIgUkxwOaKrXQWPaOyQZW76BJ%2F3iEdYKoo15Gvl9DRc2j4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDE78%2BcLUAVQnSFAyOCrcAx%2Bm2LgOTaJy6o58SMwIpxckgLJnKZWX%2FrxbqEtqs%2FkK1yp4eLRFbNPGTiUUN2uF4aSxUzFG1mc8HgFCQJ5qc5PRDT0b7Mm0jsC1C5sIHKGqUXIgQHLV4CofWVqJ4E0BTvygyt1wfcNwVFCz4uRRxCvPk8ySYnOt3k%2FbXWXAMhQ9DvHCjfI6Cy9jUwPLr1ovp6%2BL%2BlU9EQwWEhpp6CDYJw7ep91AxP4sgPnHKsHZfYwD1e9%2FRXYB7GCrBBOSor%2BmMAjaynVrzHzdxfaZZUMfblA5JIMLDh4rqKdB415x6xifRu4YupoBU%2BQUCN7KiYA7TPXDu8VazrGbXC6tl9fdhBdbYUdar4z3ks1ieqYe0YNVg0ZK0yNjU8wpwj3052MUF%2F%2Fdcp%2BcPueLCQS%2FSXcqssif46OY87JwbFCRjN%2Bg1p%2F9%2FeztGCUpMLD1kR2eXQxEVoywRL1x5KURiXYNHmnlC9i%2FoJosomsikuPalmGFzGngkxgissCYc9fbT9eo%2FrdsIGQSK%2BepnRSXQxxAod%2BjnsQu7Jpr1ybDTwNDr40hTpKku23HjMgaNP9WDcgrvDiy7Pk1UlJJXTf75S2Bk6kUvfdzbaMg8P4QFBGPdmX%2BAduDxKqWqJ6oKOyOk7JuMKubv8AGOqUB4lfJoO%2BZaquWZSa9zbBcDKujjwySv0NezHlICo1MRR2hxehCytOWM9yDAGNDLpW0vdClxAVv2MsodAPZFV31e7GpuDIGk9M9htcWL6ZIPa7cX1efw9l%2FSXzC8QFNjFYxpWIxVSNYKAZPsRzdTK5KcFiZVlHhBiIFxU46KrujLFh3rd%2FwJAqUn9vEpfVuw29BBDtX7YEpcAXCyWoZdtpJcpfCG%2Bha&X-Amz-Signature=8cd72967465a9d98719750651483c3db74c6f6700c1e99422dd8772994c44950&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
