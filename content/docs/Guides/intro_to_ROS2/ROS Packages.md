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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KAIO62Z%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBamaV35fN1AfZca%2BED19bPQM3M0wtWTzFDN0D1FCSyKAiEAom3TLtw%2B%2Frk0BQTKeQCHg%2F4vu6XWeW8N8e5Vdy%2Faa88q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCBqtvxwkeQvCgjzwSrcA3vyLNT1WqQh3CeLMTmXenhVUvnMJFNFyjOEtHrxqShMsQpZJqDy3j%2FqyGlq1onbprsh4cftEPPBnEbib9u8H1vehaCEX2CHx8bOzIJd8c5dhupCt49h3COVglS2RKsrEPuk4B69GQEO3KrJ4AF5gX7K76L2ZH4jH3rLY6Qf5OFfWfZCuZ6qMMZTu3QcW2VVR7y4I5%2BEIBH50p0dwyuwXxo%2FDmukKl1%2FWTS94FSc1CBjUbNCjvAFHdrc%2BB2Zo1lZXAmLlOdr8dMo%2FhF1NuAwgKee4gVhvetEgd58zKXQyqw%2FPiwcEKv9jxrs8%2BwwwbHD1986yL%2BiVPZSCfAtk9CTdfILLPEidgA8qCZ%2FCiKyD%2BXTL2x5rKhZ7cf91EfTF6ennoNFE0iqMb1Q7UyHrSgnBtT4RN4YzRO8XfKLAHW18YDaBxhWjNxzzaa2DJF2Jr7vTQk1AhJoxxttfsHLkCvPhxgspmmVaLx%2Bm0d8K3TwiySBE13OCflDJP%2BbOECb%2FRr1PjCvx4DfT%2F4G1NVkK6%2FkFBGLWE6J7LjTLcAUHF1%2Bw%2FVNq1675Nii4OR890sruE980p2XHEFjhFC1IRE856YZFVCBBCpmjt4wGiL0%2FSlMxjHD%2B90CQ4c6sFewBc7gMKTYisQGOqUBE2zZNZNv%2FbN5cqSZ7F7Sja15g9pdS6nupDVsZNiG0NLRiKM%2FkvdQM97kZPMw4d2ggms%2F0YDdOeLCysUXwNq1uMxAcbdMJ3ecti3jmxsfIWztL9Re4vhE6lQh%2FS0wIMFNXPCPMMV%2F5be%2BsKglz65mAHkDK3WoIVCgdnmb8Ij3uSoXEvJFFhAwoQLMnhRMR%2FhGPByN49Z22JiZxoZbwaoFrywuws2e&X-Amz-Signature=2af8e4f89936d00ac09d2ca0310f1644725a208696454d9e571e2367d672c1ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KAIO62Z%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBamaV35fN1AfZca%2BED19bPQM3M0wtWTzFDN0D1FCSyKAiEAom3TLtw%2B%2Frk0BQTKeQCHg%2F4vu6XWeW8N8e5Vdy%2Faa88q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCBqtvxwkeQvCgjzwSrcA3vyLNT1WqQh3CeLMTmXenhVUvnMJFNFyjOEtHrxqShMsQpZJqDy3j%2FqyGlq1onbprsh4cftEPPBnEbib9u8H1vehaCEX2CHx8bOzIJd8c5dhupCt49h3COVglS2RKsrEPuk4B69GQEO3KrJ4AF5gX7K76L2ZH4jH3rLY6Qf5OFfWfZCuZ6qMMZTu3QcW2VVR7y4I5%2BEIBH50p0dwyuwXxo%2FDmukKl1%2FWTS94FSc1CBjUbNCjvAFHdrc%2BB2Zo1lZXAmLlOdr8dMo%2FhF1NuAwgKee4gVhvetEgd58zKXQyqw%2FPiwcEKv9jxrs8%2BwwwbHD1986yL%2BiVPZSCfAtk9CTdfILLPEidgA8qCZ%2FCiKyD%2BXTL2x5rKhZ7cf91EfTF6ennoNFE0iqMb1Q7UyHrSgnBtT4RN4YzRO8XfKLAHW18YDaBxhWjNxzzaa2DJF2Jr7vTQk1AhJoxxttfsHLkCvPhxgspmmVaLx%2Bm0d8K3TwiySBE13OCflDJP%2BbOECb%2FRr1PjCvx4DfT%2F4G1NVkK6%2FkFBGLWE6J7LjTLcAUHF1%2Bw%2FVNq1675Nii4OR890sruE980p2XHEFjhFC1IRE856YZFVCBBCpmjt4wGiL0%2FSlMxjHD%2B90CQ4c6sFewBc7gMKTYisQGOqUBE2zZNZNv%2FbN5cqSZ7F7Sja15g9pdS6nupDVsZNiG0NLRiKM%2FkvdQM97kZPMw4d2ggms%2F0YDdOeLCysUXwNq1uMxAcbdMJ3ecti3jmxsfIWztL9Re4vhE6lQh%2FS0wIMFNXPCPMMV%2F5be%2BsKglz65mAHkDK3WoIVCgdnmb8Ij3uSoXEvJFFhAwoQLMnhRMR%2FhGPByN49Z22JiZxoZbwaoFrywuws2e&X-Amz-Signature=fa17208950422d3fc487bbb640ffb76c54d592df90d6c065bf79c4e183b1cfc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KAIO62Z%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBamaV35fN1AfZca%2BED19bPQM3M0wtWTzFDN0D1FCSyKAiEAom3TLtw%2B%2Frk0BQTKeQCHg%2F4vu6XWeW8N8e5Vdy%2Faa88q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCBqtvxwkeQvCgjzwSrcA3vyLNT1WqQh3CeLMTmXenhVUvnMJFNFyjOEtHrxqShMsQpZJqDy3j%2FqyGlq1onbprsh4cftEPPBnEbib9u8H1vehaCEX2CHx8bOzIJd8c5dhupCt49h3COVglS2RKsrEPuk4B69GQEO3KrJ4AF5gX7K76L2ZH4jH3rLY6Qf5OFfWfZCuZ6qMMZTu3QcW2VVR7y4I5%2BEIBH50p0dwyuwXxo%2FDmukKl1%2FWTS94FSc1CBjUbNCjvAFHdrc%2BB2Zo1lZXAmLlOdr8dMo%2FhF1NuAwgKee4gVhvetEgd58zKXQyqw%2FPiwcEKv9jxrs8%2BwwwbHD1986yL%2BiVPZSCfAtk9CTdfILLPEidgA8qCZ%2FCiKyD%2BXTL2x5rKhZ7cf91EfTF6ennoNFE0iqMb1Q7UyHrSgnBtT4RN4YzRO8XfKLAHW18YDaBxhWjNxzzaa2DJF2Jr7vTQk1AhJoxxttfsHLkCvPhxgspmmVaLx%2Bm0d8K3TwiySBE13OCflDJP%2BbOECb%2FRr1PjCvx4DfT%2F4G1NVkK6%2FkFBGLWE6J7LjTLcAUHF1%2Bw%2FVNq1675Nii4OR890sruE980p2XHEFjhFC1IRE856YZFVCBBCpmjt4wGiL0%2FSlMxjHD%2B90CQ4c6sFewBc7gMKTYisQGOqUBE2zZNZNv%2FbN5cqSZ7F7Sja15g9pdS6nupDVsZNiG0NLRiKM%2FkvdQM97kZPMw4d2ggms%2F0YDdOeLCysUXwNq1uMxAcbdMJ3ecti3jmxsfIWztL9Re4vhE6lQh%2FS0wIMFNXPCPMMV%2F5be%2BsKglz65mAHkDK3WoIVCgdnmb8Ij3uSoXEvJFFhAwoQLMnhRMR%2FhGPByN49Z22JiZxoZbwaoFrywuws2e&X-Amz-Signature=7f277ae1d48b8008e97bd08d8f85b3005c5742ad72754707a26919b7d501477e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KAIO62Z%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBamaV35fN1AfZca%2BED19bPQM3M0wtWTzFDN0D1FCSyKAiEAom3TLtw%2B%2Frk0BQTKeQCHg%2F4vu6XWeW8N8e5Vdy%2Faa88q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCBqtvxwkeQvCgjzwSrcA3vyLNT1WqQh3CeLMTmXenhVUvnMJFNFyjOEtHrxqShMsQpZJqDy3j%2FqyGlq1onbprsh4cftEPPBnEbib9u8H1vehaCEX2CHx8bOzIJd8c5dhupCt49h3COVglS2RKsrEPuk4B69GQEO3KrJ4AF5gX7K76L2ZH4jH3rLY6Qf5OFfWfZCuZ6qMMZTu3QcW2VVR7y4I5%2BEIBH50p0dwyuwXxo%2FDmukKl1%2FWTS94FSc1CBjUbNCjvAFHdrc%2BB2Zo1lZXAmLlOdr8dMo%2FhF1NuAwgKee4gVhvetEgd58zKXQyqw%2FPiwcEKv9jxrs8%2BwwwbHD1986yL%2BiVPZSCfAtk9CTdfILLPEidgA8qCZ%2FCiKyD%2BXTL2x5rKhZ7cf91EfTF6ennoNFE0iqMb1Q7UyHrSgnBtT4RN4YzRO8XfKLAHW18YDaBxhWjNxzzaa2DJF2Jr7vTQk1AhJoxxttfsHLkCvPhxgspmmVaLx%2Bm0d8K3TwiySBE13OCflDJP%2BbOECb%2FRr1PjCvx4DfT%2F4G1NVkK6%2FkFBGLWE6J7LjTLcAUHF1%2Bw%2FVNq1675Nii4OR890sruE980p2XHEFjhFC1IRE856YZFVCBBCpmjt4wGiL0%2FSlMxjHD%2B90CQ4c6sFewBc7gMKTYisQGOqUBE2zZNZNv%2FbN5cqSZ7F7Sja15g9pdS6nupDVsZNiG0NLRiKM%2FkvdQM97kZPMw4d2ggms%2F0YDdOeLCysUXwNq1uMxAcbdMJ3ecti3jmxsfIWztL9Re4vhE6lQh%2FS0wIMFNXPCPMMV%2F5be%2BsKglz65mAHkDK3WoIVCgdnmb8Ij3uSoXEvJFFhAwoQLMnhRMR%2FhGPByN49Z22JiZxoZbwaoFrywuws2e&X-Amz-Signature=37c3cc9874245e710787b677e497d899e519ec4748f34b4a71a9dd88c06279d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KAIO62Z%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBamaV35fN1AfZca%2BED19bPQM3M0wtWTzFDN0D1FCSyKAiEAom3TLtw%2B%2Frk0BQTKeQCHg%2F4vu6XWeW8N8e5Vdy%2Faa88q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCBqtvxwkeQvCgjzwSrcA3vyLNT1WqQh3CeLMTmXenhVUvnMJFNFyjOEtHrxqShMsQpZJqDy3j%2FqyGlq1onbprsh4cftEPPBnEbib9u8H1vehaCEX2CHx8bOzIJd8c5dhupCt49h3COVglS2RKsrEPuk4B69GQEO3KrJ4AF5gX7K76L2ZH4jH3rLY6Qf5OFfWfZCuZ6qMMZTu3QcW2VVR7y4I5%2BEIBH50p0dwyuwXxo%2FDmukKl1%2FWTS94FSc1CBjUbNCjvAFHdrc%2BB2Zo1lZXAmLlOdr8dMo%2FhF1NuAwgKee4gVhvetEgd58zKXQyqw%2FPiwcEKv9jxrs8%2BwwwbHD1986yL%2BiVPZSCfAtk9CTdfILLPEidgA8qCZ%2FCiKyD%2BXTL2x5rKhZ7cf91EfTF6ennoNFE0iqMb1Q7UyHrSgnBtT4RN4YzRO8XfKLAHW18YDaBxhWjNxzzaa2DJF2Jr7vTQk1AhJoxxttfsHLkCvPhxgspmmVaLx%2Bm0d8K3TwiySBE13OCflDJP%2BbOECb%2FRr1PjCvx4DfT%2F4G1NVkK6%2FkFBGLWE6J7LjTLcAUHF1%2Bw%2FVNq1675Nii4OR890sruE980p2XHEFjhFC1IRE856YZFVCBBCpmjt4wGiL0%2FSlMxjHD%2B90CQ4c6sFewBc7gMKTYisQGOqUBE2zZNZNv%2FbN5cqSZ7F7Sja15g9pdS6nupDVsZNiG0NLRiKM%2FkvdQM97kZPMw4d2ggms%2F0YDdOeLCysUXwNq1uMxAcbdMJ3ecti3jmxsfIWztL9Re4vhE6lQh%2FS0wIMFNXPCPMMV%2F5be%2BsKglz65mAHkDK3WoIVCgdnmb8Ij3uSoXEvJFFhAwoQLMnhRMR%2FhGPByN49Z22JiZxoZbwaoFrywuws2e&X-Amz-Signature=1afc25f744ddae908a958780d23005f1b3e56f1c68bceb4254bb6d445e7d8d55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KAIO62Z%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBamaV35fN1AfZca%2BED19bPQM3M0wtWTzFDN0D1FCSyKAiEAom3TLtw%2B%2Frk0BQTKeQCHg%2F4vu6XWeW8N8e5Vdy%2Faa88q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCBqtvxwkeQvCgjzwSrcA3vyLNT1WqQh3CeLMTmXenhVUvnMJFNFyjOEtHrxqShMsQpZJqDy3j%2FqyGlq1onbprsh4cftEPPBnEbib9u8H1vehaCEX2CHx8bOzIJd8c5dhupCt49h3COVglS2RKsrEPuk4B69GQEO3KrJ4AF5gX7K76L2ZH4jH3rLY6Qf5OFfWfZCuZ6qMMZTu3QcW2VVR7y4I5%2BEIBH50p0dwyuwXxo%2FDmukKl1%2FWTS94FSc1CBjUbNCjvAFHdrc%2BB2Zo1lZXAmLlOdr8dMo%2FhF1NuAwgKee4gVhvetEgd58zKXQyqw%2FPiwcEKv9jxrs8%2BwwwbHD1986yL%2BiVPZSCfAtk9CTdfILLPEidgA8qCZ%2FCiKyD%2BXTL2x5rKhZ7cf91EfTF6ennoNFE0iqMb1Q7UyHrSgnBtT4RN4YzRO8XfKLAHW18YDaBxhWjNxzzaa2DJF2Jr7vTQk1AhJoxxttfsHLkCvPhxgspmmVaLx%2Bm0d8K3TwiySBE13OCflDJP%2BbOECb%2FRr1PjCvx4DfT%2F4G1NVkK6%2FkFBGLWE6J7LjTLcAUHF1%2Bw%2FVNq1675Nii4OR890sruE980p2XHEFjhFC1IRE856YZFVCBBCpmjt4wGiL0%2FSlMxjHD%2B90CQ4c6sFewBc7gMKTYisQGOqUBE2zZNZNv%2FbN5cqSZ7F7Sja15g9pdS6nupDVsZNiG0NLRiKM%2FkvdQM97kZPMw4d2ggms%2F0YDdOeLCysUXwNq1uMxAcbdMJ3ecti3jmxsfIWztL9Re4vhE6lQh%2FS0wIMFNXPCPMMV%2F5be%2BsKglz65mAHkDK3WoIVCgdnmb8Ij3uSoXEvJFFhAwoQLMnhRMR%2FhGPByN49Z22JiZxoZbwaoFrywuws2e&X-Amz-Signature=2eae12a3b3f240a5408bb694b1f48a0c92f88d0099ab390482ff2de96ac75281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KAIO62Z%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBamaV35fN1AfZca%2BED19bPQM3M0wtWTzFDN0D1FCSyKAiEAom3TLtw%2B%2Frk0BQTKeQCHg%2F4vu6XWeW8N8e5Vdy%2Faa88q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCBqtvxwkeQvCgjzwSrcA3vyLNT1WqQh3CeLMTmXenhVUvnMJFNFyjOEtHrxqShMsQpZJqDy3j%2FqyGlq1onbprsh4cftEPPBnEbib9u8H1vehaCEX2CHx8bOzIJd8c5dhupCt49h3COVglS2RKsrEPuk4B69GQEO3KrJ4AF5gX7K76L2ZH4jH3rLY6Qf5OFfWfZCuZ6qMMZTu3QcW2VVR7y4I5%2BEIBH50p0dwyuwXxo%2FDmukKl1%2FWTS94FSc1CBjUbNCjvAFHdrc%2BB2Zo1lZXAmLlOdr8dMo%2FhF1NuAwgKee4gVhvetEgd58zKXQyqw%2FPiwcEKv9jxrs8%2BwwwbHD1986yL%2BiVPZSCfAtk9CTdfILLPEidgA8qCZ%2FCiKyD%2BXTL2x5rKhZ7cf91EfTF6ennoNFE0iqMb1Q7UyHrSgnBtT4RN4YzRO8XfKLAHW18YDaBxhWjNxzzaa2DJF2Jr7vTQk1AhJoxxttfsHLkCvPhxgspmmVaLx%2Bm0d8K3TwiySBE13OCflDJP%2BbOECb%2FRr1PjCvx4DfT%2F4G1NVkK6%2FkFBGLWE6J7LjTLcAUHF1%2Bw%2FVNq1675Nii4OR890sruE980p2XHEFjhFC1IRE856YZFVCBBCpmjt4wGiL0%2FSlMxjHD%2B90CQ4c6sFewBc7gMKTYisQGOqUBE2zZNZNv%2FbN5cqSZ7F7Sja15g9pdS6nupDVsZNiG0NLRiKM%2FkvdQM97kZPMw4d2ggms%2F0YDdOeLCysUXwNq1uMxAcbdMJ3ecti3jmxsfIWztL9Re4vhE6lQh%2FS0wIMFNXPCPMMV%2F5be%2BsKglz65mAHkDK3WoIVCgdnmb8Ij3uSoXEvJFFhAwoQLMnhRMR%2FhGPByN49Z22JiZxoZbwaoFrywuws2e&X-Amz-Signature=4d6579345a191a5cfcb004ffdff5d686083b304662fc7695ae9064cb90f8548f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
