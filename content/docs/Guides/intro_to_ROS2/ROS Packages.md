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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XYHLNRO%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FUFeFrF70LUTpdG9wTlpMytG4PIPIaBePzqzrAVh5GAIgZh9cQzIDINuLHkYFCgHjs0XDaDPwzVFpkUF5KRpcjR4qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQOnYi9hmpeyeqX7SrcA7RcX2UmNaSbxb1kQj%2BX4eJBrEv3VOLVkp4R1LYKxY7kKHv6xr7hgE05QTfU7tTi%2FjhaWUY66naNvDMlkXHLlTrCmRpyRNBmOv15cfu6HVLAeVm%2B0PhTVElEInCZQWtvGHszZLbpWLJgXh%2BPEbwkHVSEojv%2FjHa2%2Fejd1oeLvOnpiFjwN4fogyByc9MnIk%2FX52cHnRO%2FgEcvDuJpovQrlv5CH3j1JzdZyZFgb6rQTMFo8F%2BPzFY2tFaUb2KOafO6FY%2BAwIeKVGtWsOWqmt2NCK7DBUBXk9%2BLqXRI8uwmR3yilqT8g56CTYxMmCTgKk4wjJ%2B8%2BkGfCQ9Cizn4qMGvrk3e9ZYQWT05JWYsYtF8vru6b2brdGefWrdJQu9xv43hfh4qEuombjq0l0mv12mvkOXdqboDmZP1Hs%2FD4gm9%2BF8HfzT9UlmWelJsg%2FR3rh4eHD4orpTRXik5Ze6srD2L0ISP9m9qT6Swa4OBZPx9ssCfyJmyzS03xCqOBiSu7477P0YwhsBuUlGYZA3DZGFaULTBb8M2FusmbIMwI6xhc5ZOL8FRDCaaa3j%2FlTNAvn%2BxPDQhiKLAzyJN28k%2FqopBQu3HFQTNdFzj8q6XrXaw1Ggsd380x5cVQURNVp8UMPOr%2BcAGOqUBW3p3mVA6eJWTtvvtvqp8k6a2DrvoT8b27YayLRBSD8PGTWxwerFaXHSd88KKgLPES88hRRHtkll40RgqBhYGEygMFTVveVUR40NGgPy2iczAXv584MuyGdjI4lHWvRfhYByCWTL42z8H0ho7mjoOobbjCXwYKs%2Bb1aDSGjMLh1jMQTFiX2swCd%2FJgXOVPh6kuONR4NEuA28a9sgJr7azExeKVqbL&X-Amz-Signature=8a2849b7117cd89c23b668c457198f03aa37bc716048914338ed6417ea8135d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XYHLNRO%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FUFeFrF70LUTpdG9wTlpMytG4PIPIaBePzqzrAVh5GAIgZh9cQzIDINuLHkYFCgHjs0XDaDPwzVFpkUF5KRpcjR4qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQOnYi9hmpeyeqX7SrcA7RcX2UmNaSbxb1kQj%2BX4eJBrEv3VOLVkp4R1LYKxY7kKHv6xr7hgE05QTfU7tTi%2FjhaWUY66naNvDMlkXHLlTrCmRpyRNBmOv15cfu6HVLAeVm%2B0PhTVElEInCZQWtvGHszZLbpWLJgXh%2BPEbwkHVSEojv%2FjHa2%2Fejd1oeLvOnpiFjwN4fogyByc9MnIk%2FX52cHnRO%2FgEcvDuJpovQrlv5CH3j1JzdZyZFgb6rQTMFo8F%2BPzFY2tFaUb2KOafO6FY%2BAwIeKVGtWsOWqmt2NCK7DBUBXk9%2BLqXRI8uwmR3yilqT8g56CTYxMmCTgKk4wjJ%2B8%2BkGfCQ9Cizn4qMGvrk3e9ZYQWT05JWYsYtF8vru6b2brdGefWrdJQu9xv43hfh4qEuombjq0l0mv12mvkOXdqboDmZP1Hs%2FD4gm9%2BF8HfzT9UlmWelJsg%2FR3rh4eHD4orpTRXik5Ze6srD2L0ISP9m9qT6Swa4OBZPx9ssCfyJmyzS03xCqOBiSu7477P0YwhsBuUlGYZA3DZGFaULTBb8M2FusmbIMwI6xhc5ZOL8FRDCaaa3j%2FlTNAvn%2BxPDQhiKLAzyJN28k%2FqopBQu3HFQTNdFzj8q6XrXaw1Ggsd380x5cVQURNVp8UMPOr%2BcAGOqUBW3p3mVA6eJWTtvvtvqp8k6a2DrvoT8b27YayLRBSD8PGTWxwerFaXHSd88KKgLPES88hRRHtkll40RgqBhYGEygMFTVveVUR40NGgPy2iczAXv584MuyGdjI4lHWvRfhYByCWTL42z8H0ho7mjoOobbjCXwYKs%2Bb1aDSGjMLh1jMQTFiX2swCd%2FJgXOVPh6kuONR4NEuA28a9sgJr7azExeKVqbL&X-Amz-Signature=c49652eb23127412ae0bc150a20420b2f115ea070572ea5f1f03e8e722c922c5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XYHLNRO%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FUFeFrF70LUTpdG9wTlpMytG4PIPIaBePzqzrAVh5GAIgZh9cQzIDINuLHkYFCgHjs0XDaDPwzVFpkUF5KRpcjR4qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQOnYi9hmpeyeqX7SrcA7RcX2UmNaSbxb1kQj%2BX4eJBrEv3VOLVkp4R1LYKxY7kKHv6xr7hgE05QTfU7tTi%2FjhaWUY66naNvDMlkXHLlTrCmRpyRNBmOv15cfu6HVLAeVm%2B0PhTVElEInCZQWtvGHszZLbpWLJgXh%2BPEbwkHVSEojv%2FjHa2%2Fejd1oeLvOnpiFjwN4fogyByc9MnIk%2FX52cHnRO%2FgEcvDuJpovQrlv5CH3j1JzdZyZFgb6rQTMFo8F%2BPzFY2tFaUb2KOafO6FY%2BAwIeKVGtWsOWqmt2NCK7DBUBXk9%2BLqXRI8uwmR3yilqT8g56CTYxMmCTgKk4wjJ%2B8%2BkGfCQ9Cizn4qMGvrk3e9ZYQWT05JWYsYtF8vru6b2brdGefWrdJQu9xv43hfh4qEuombjq0l0mv12mvkOXdqboDmZP1Hs%2FD4gm9%2BF8HfzT9UlmWelJsg%2FR3rh4eHD4orpTRXik5Ze6srD2L0ISP9m9qT6Swa4OBZPx9ssCfyJmyzS03xCqOBiSu7477P0YwhsBuUlGYZA3DZGFaULTBb8M2FusmbIMwI6xhc5ZOL8FRDCaaa3j%2FlTNAvn%2BxPDQhiKLAzyJN28k%2FqopBQu3HFQTNdFzj8q6XrXaw1Ggsd380x5cVQURNVp8UMPOr%2BcAGOqUBW3p3mVA6eJWTtvvtvqp8k6a2DrvoT8b27YayLRBSD8PGTWxwerFaXHSd88KKgLPES88hRRHtkll40RgqBhYGEygMFTVveVUR40NGgPy2iczAXv584MuyGdjI4lHWvRfhYByCWTL42z8H0ho7mjoOobbjCXwYKs%2Bb1aDSGjMLh1jMQTFiX2swCd%2FJgXOVPh6kuONR4NEuA28a9sgJr7azExeKVqbL&X-Amz-Signature=76fab8566b2dc4a36ffd96a0c349f3c557e24dd966fcd69b780828e7d74d1a53&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XYHLNRO%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FUFeFrF70LUTpdG9wTlpMytG4PIPIaBePzqzrAVh5GAIgZh9cQzIDINuLHkYFCgHjs0XDaDPwzVFpkUF5KRpcjR4qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQOnYi9hmpeyeqX7SrcA7RcX2UmNaSbxb1kQj%2BX4eJBrEv3VOLVkp4R1LYKxY7kKHv6xr7hgE05QTfU7tTi%2FjhaWUY66naNvDMlkXHLlTrCmRpyRNBmOv15cfu6HVLAeVm%2B0PhTVElEInCZQWtvGHszZLbpWLJgXh%2BPEbwkHVSEojv%2FjHa2%2Fejd1oeLvOnpiFjwN4fogyByc9MnIk%2FX52cHnRO%2FgEcvDuJpovQrlv5CH3j1JzdZyZFgb6rQTMFo8F%2BPzFY2tFaUb2KOafO6FY%2BAwIeKVGtWsOWqmt2NCK7DBUBXk9%2BLqXRI8uwmR3yilqT8g56CTYxMmCTgKk4wjJ%2B8%2BkGfCQ9Cizn4qMGvrk3e9ZYQWT05JWYsYtF8vru6b2brdGefWrdJQu9xv43hfh4qEuombjq0l0mv12mvkOXdqboDmZP1Hs%2FD4gm9%2BF8HfzT9UlmWelJsg%2FR3rh4eHD4orpTRXik5Ze6srD2L0ISP9m9qT6Swa4OBZPx9ssCfyJmyzS03xCqOBiSu7477P0YwhsBuUlGYZA3DZGFaULTBb8M2FusmbIMwI6xhc5ZOL8FRDCaaa3j%2FlTNAvn%2BxPDQhiKLAzyJN28k%2FqopBQu3HFQTNdFzj8q6XrXaw1Ggsd380x5cVQURNVp8UMPOr%2BcAGOqUBW3p3mVA6eJWTtvvtvqp8k6a2DrvoT8b27YayLRBSD8PGTWxwerFaXHSd88KKgLPES88hRRHtkll40RgqBhYGEygMFTVveVUR40NGgPy2iczAXv584MuyGdjI4lHWvRfhYByCWTL42z8H0ho7mjoOobbjCXwYKs%2Bb1aDSGjMLh1jMQTFiX2swCd%2FJgXOVPh6kuONR4NEuA28a9sgJr7azExeKVqbL&X-Amz-Signature=8325acfa3fa7fd34725bf2c0de1a6fd3291e9f12aea4f151f735bf46912cb517&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XYHLNRO%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FUFeFrF70LUTpdG9wTlpMytG4PIPIaBePzqzrAVh5GAIgZh9cQzIDINuLHkYFCgHjs0XDaDPwzVFpkUF5KRpcjR4qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQOnYi9hmpeyeqX7SrcA7RcX2UmNaSbxb1kQj%2BX4eJBrEv3VOLVkp4R1LYKxY7kKHv6xr7hgE05QTfU7tTi%2FjhaWUY66naNvDMlkXHLlTrCmRpyRNBmOv15cfu6HVLAeVm%2B0PhTVElEInCZQWtvGHszZLbpWLJgXh%2BPEbwkHVSEojv%2FjHa2%2Fejd1oeLvOnpiFjwN4fogyByc9MnIk%2FX52cHnRO%2FgEcvDuJpovQrlv5CH3j1JzdZyZFgb6rQTMFo8F%2BPzFY2tFaUb2KOafO6FY%2BAwIeKVGtWsOWqmt2NCK7DBUBXk9%2BLqXRI8uwmR3yilqT8g56CTYxMmCTgKk4wjJ%2B8%2BkGfCQ9Cizn4qMGvrk3e9ZYQWT05JWYsYtF8vru6b2brdGefWrdJQu9xv43hfh4qEuombjq0l0mv12mvkOXdqboDmZP1Hs%2FD4gm9%2BF8HfzT9UlmWelJsg%2FR3rh4eHD4orpTRXik5Ze6srD2L0ISP9m9qT6Swa4OBZPx9ssCfyJmyzS03xCqOBiSu7477P0YwhsBuUlGYZA3DZGFaULTBb8M2FusmbIMwI6xhc5ZOL8FRDCaaa3j%2FlTNAvn%2BxPDQhiKLAzyJN28k%2FqopBQu3HFQTNdFzj8q6XrXaw1Ggsd380x5cVQURNVp8UMPOr%2BcAGOqUBW3p3mVA6eJWTtvvtvqp8k6a2DrvoT8b27YayLRBSD8PGTWxwerFaXHSd88KKgLPES88hRRHtkll40RgqBhYGEygMFTVveVUR40NGgPy2iczAXv584MuyGdjI4lHWvRfhYByCWTL42z8H0ho7mjoOobbjCXwYKs%2Bb1aDSGjMLh1jMQTFiX2swCd%2FJgXOVPh6kuONR4NEuA28a9sgJr7azExeKVqbL&X-Amz-Signature=62f4a123f6d6507012f66cad97d68aa668c0e3d0861543143ac688faf3306f87&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XYHLNRO%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FUFeFrF70LUTpdG9wTlpMytG4PIPIaBePzqzrAVh5GAIgZh9cQzIDINuLHkYFCgHjs0XDaDPwzVFpkUF5KRpcjR4qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQOnYi9hmpeyeqX7SrcA7RcX2UmNaSbxb1kQj%2BX4eJBrEv3VOLVkp4R1LYKxY7kKHv6xr7hgE05QTfU7tTi%2FjhaWUY66naNvDMlkXHLlTrCmRpyRNBmOv15cfu6HVLAeVm%2B0PhTVElEInCZQWtvGHszZLbpWLJgXh%2BPEbwkHVSEojv%2FjHa2%2Fejd1oeLvOnpiFjwN4fogyByc9MnIk%2FX52cHnRO%2FgEcvDuJpovQrlv5CH3j1JzdZyZFgb6rQTMFo8F%2BPzFY2tFaUb2KOafO6FY%2BAwIeKVGtWsOWqmt2NCK7DBUBXk9%2BLqXRI8uwmR3yilqT8g56CTYxMmCTgKk4wjJ%2B8%2BkGfCQ9Cizn4qMGvrk3e9ZYQWT05JWYsYtF8vru6b2brdGefWrdJQu9xv43hfh4qEuombjq0l0mv12mvkOXdqboDmZP1Hs%2FD4gm9%2BF8HfzT9UlmWelJsg%2FR3rh4eHD4orpTRXik5Ze6srD2L0ISP9m9qT6Swa4OBZPx9ssCfyJmyzS03xCqOBiSu7477P0YwhsBuUlGYZA3DZGFaULTBb8M2FusmbIMwI6xhc5ZOL8FRDCaaa3j%2FlTNAvn%2BxPDQhiKLAzyJN28k%2FqopBQu3HFQTNdFzj8q6XrXaw1Ggsd380x5cVQURNVp8UMPOr%2BcAGOqUBW3p3mVA6eJWTtvvtvqp8k6a2DrvoT8b27YayLRBSD8PGTWxwerFaXHSd88KKgLPES88hRRHtkll40RgqBhYGEygMFTVveVUR40NGgPy2iczAXv584MuyGdjI4lHWvRfhYByCWTL42z8H0ho7mjoOobbjCXwYKs%2Bb1aDSGjMLh1jMQTFiX2swCd%2FJgXOVPh6kuONR4NEuA28a9sgJr7azExeKVqbL&X-Amz-Signature=b5e627b5efa8e03867d597c1208939b7403021d62f87f623d4755e66a2494b8b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XYHLNRO%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FUFeFrF70LUTpdG9wTlpMytG4PIPIaBePzqzrAVh5GAIgZh9cQzIDINuLHkYFCgHjs0XDaDPwzVFpkUF5KRpcjR4qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQOnYi9hmpeyeqX7SrcA7RcX2UmNaSbxb1kQj%2BX4eJBrEv3VOLVkp4R1LYKxY7kKHv6xr7hgE05QTfU7tTi%2FjhaWUY66naNvDMlkXHLlTrCmRpyRNBmOv15cfu6HVLAeVm%2B0PhTVElEInCZQWtvGHszZLbpWLJgXh%2BPEbwkHVSEojv%2FjHa2%2Fejd1oeLvOnpiFjwN4fogyByc9MnIk%2FX52cHnRO%2FgEcvDuJpovQrlv5CH3j1JzdZyZFgb6rQTMFo8F%2BPzFY2tFaUb2KOafO6FY%2BAwIeKVGtWsOWqmt2NCK7DBUBXk9%2BLqXRI8uwmR3yilqT8g56CTYxMmCTgKk4wjJ%2B8%2BkGfCQ9Cizn4qMGvrk3e9ZYQWT05JWYsYtF8vru6b2brdGefWrdJQu9xv43hfh4qEuombjq0l0mv12mvkOXdqboDmZP1Hs%2FD4gm9%2BF8HfzT9UlmWelJsg%2FR3rh4eHD4orpTRXik5Ze6srD2L0ISP9m9qT6Swa4OBZPx9ssCfyJmyzS03xCqOBiSu7477P0YwhsBuUlGYZA3DZGFaULTBb8M2FusmbIMwI6xhc5ZOL8FRDCaaa3j%2FlTNAvn%2BxPDQhiKLAzyJN28k%2FqopBQu3HFQTNdFzj8q6XrXaw1Ggsd380x5cVQURNVp8UMPOr%2BcAGOqUBW3p3mVA6eJWTtvvtvqp8k6a2DrvoT8b27YayLRBSD8PGTWxwerFaXHSd88KKgLPES88hRRHtkll40RgqBhYGEygMFTVveVUR40NGgPy2iczAXv584MuyGdjI4lHWvRfhYByCWTL42z8H0ho7mjoOobbjCXwYKs%2Bb1aDSGjMLh1jMQTFiX2swCd%2FJgXOVPh6kuONR4NEuA28a9sgJr7azExeKVqbL&X-Amz-Signature=69c5cebe76dd79185eb470bf974a827b4380796b0423b12b958cd97d5d247393&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
