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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672EDF34B%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAr6yc3YOUabzLtuYSqupnclmXlJ%2F%2Fvq3Uc0iWzQcpnFAiB3DQsyrwFgiaJUdp%2B2t%2B0gYeta7P8WzfGHRijm1wpU%2FSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMiaqRp0ChEQe%2Fg66xKtwDRg%2B6Al%2FaIk5PZYRIDnDdEKY18oiwT5Bsld6dLmM4RlYubvJkTXosa3ikBFZ3YOYbD%2FK%2BA97bRUTuvjt7z2EXAkH%2FT6s9sZFZud95a%2BnDtybpAlcj35NQ3rvCzSwY2rLAofI%2FgSgkvV0xRT4sJQTC3Qj6W8Owi9lIhSWC%2F1qJpmRH%2FNy954y3KgqDGJEGLWXqaeUq6Kgi7UR5i8%2Bjm4uDNvMmU7IizYf8vyk9vxCoHC%2Fl%2FSiK8LwNNxM1OARyhnHO3MfJcuZjv4Wc9KKuz3lwwlR7zszD6GQnkYRAo%2B9EzXQJy3sirdDQxpdNK6PMKIUMUIgpHjlJByZrqUA%2BRnBKQAid%2Fu70KgvoqySSvv3oSbJkwAaFnSeASlAIcPTHVX%2FjEfx6tDXNANhTDkuIuk%2BApJQEzljDFNrjSt1CV%2Fj3T%2BS1cZniW%2FQTk%2BHSwTqLajDDQCNAbOwCCDvVNmqzp%2Fqo64hMTf4tb%2BcDxopJFzxyo9fYuU00o1%2BuxiwfdOYCWYaQsnSH6slL2VUhuoBIdcEcjYaKpn1IVSJOfT1YvY5mKkGeji7%2BxjdLWRAt34Ccv0YHwvE5H8Y7xWTSWyFg6ubWYs%2Bdb2HhU4DzeiMoBEkeHp9il30%2FVskBK8w4mLEwx678wgY6pgE3pytrTuEFW2tHN5WusUBWM5oq4IBYG2RuxK87KSUGIOjRM0CMQXRjnMkFBeVJUByglG0j7pyHCioMgutPmmM5%2FL%2Bi%2BUKO%2FJfffqCihEYzW4ZHHH%2B39TS4UuocetXfFgyqbdCAF57uqSwHuJsCYdQ6LRFWemADsUQO%2B8qMPRQQkzgi2uZBI%2BMEbGTSLrTUwS%2FVxWHlDWdlif6ne4E%2FKzqnT1kWgDx%2F&X-Amz-Signature=e637e0d406d83a2b750ec8d2190694a4858a9dde08dd26a4249535c70511c473&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672EDF34B%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAr6yc3YOUabzLtuYSqupnclmXlJ%2F%2Fvq3Uc0iWzQcpnFAiB3DQsyrwFgiaJUdp%2B2t%2B0gYeta7P8WzfGHRijm1wpU%2FSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMiaqRp0ChEQe%2Fg66xKtwDRg%2B6Al%2FaIk5PZYRIDnDdEKY18oiwT5Bsld6dLmM4RlYubvJkTXosa3ikBFZ3YOYbD%2FK%2BA97bRUTuvjt7z2EXAkH%2FT6s9sZFZud95a%2BnDtybpAlcj35NQ3rvCzSwY2rLAofI%2FgSgkvV0xRT4sJQTC3Qj6W8Owi9lIhSWC%2F1qJpmRH%2FNy954y3KgqDGJEGLWXqaeUq6Kgi7UR5i8%2Bjm4uDNvMmU7IizYf8vyk9vxCoHC%2Fl%2FSiK8LwNNxM1OARyhnHO3MfJcuZjv4Wc9KKuz3lwwlR7zszD6GQnkYRAo%2B9EzXQJy3sirdDQxpdNK6PMKIUMUIgpHjlJByZrqUA%2BRnBKQAid%2Fu70KgvoqySSvv3oSbJkwAaFnSeASlAIcPTHVX%2FjEfx6tDXNANhTDkuIuk%2BApJQEzljDFNrjSt1CV%2Fj3T%2BS1cZniW%2FQTk%2BHSwTqLajDDQCNAbOwCCDvVNmqzp%2Fqo64hMTf4tb%2BcDxopJFzxyo9fYuU00o1%2BuxiwfdOYCWYaQsnSH6slL2VUhuoBIdcEcjYaKpn1IVSJOfT1YvY5mKkGeji7%2BxjdLWRAt34Ccv0YHwvE5H8Y7xWTSWyFg6ubWYs%2Bdb2HhU4DzeiMoBEkeHp9il30%2FVskBK8w4mLEwx678wgY6pgE3pytrTuEFW2tHN5WusUBWM5oq4IBYG2RuxK87KSUGIOjRM0CMQXRjnMkFBeVJUByglG0j7pyHCioMgutPmmM5%2FL%2Bi%2BUKO%2FJfffqCihEYzW4ZHHH%2B39TS4UuocetXfFgyqbdCAF57uqSwHuJsCYdQ6LRFWemADsUQO%2B8qMPRQQkzgi2uZBI%2BMEbGTSLrTUwS%2FVxWHlDWdlif6ne4E%2FKzqnT1kWgDx%2F&X-Amz-Signature=154c880ca6d9f22d2cd782a7affdb925df5d904bcf213b7df2ad29e23cce1d89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672EDF34B%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAr6yc3YOUabzLtuYSqupnclmXlJ%2F%2Fvq3Uc0iWzQcpnFAiB3DQsyrwFgiaJUdp%2B2t%2B0gYeta7P8WzfGHRijm1wpU%2FSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMiaqRp0ChEQe%2Fg66xKtwDRg%2B6Al%2FaIk5PZYRIDnDdEKY18oiwT5Bsld6dLmM4RlYubvJkTXosa3ikBFZ3YOYbD%2FK%2BA97bRUTuvjt7z2EXAkH%2FT6s9sZFZud95a%2BnDtybpAlcj35NQ3rvCzSwY2rLAofI%2FgSgkvV0xRT4sJQTC3Qj6W8Owi9lIhSWC%2F1qJpmRH%2FNy954y3KgqDGJEGLWXqaeUq6Kgi7UR5i8%2Bjm4uDNvMmU7IizYf8vyk9vxCoHC%2Fl%2FSiK8LwNNxM1OARyhnHO3MfJcuZjv4Wc9KKuz3lwwlR7zszD6GQnkYRAo%2B9EzXQJy3sirdDQxpdNK6PMKIUMUIgpHjlJByZrqUA%2BRnBKQAid%2Fu70KgvoqySSvv3oSbJkwAaFnSeASlAIcPTHVX%2FjEfx6tDXNANhTDkuIuk%2BApJQEzljDFNrjSt1CV%2Fj3T%2BS1cZniW%2FQTk%2BHSwTqLajDDQCNAbOwCCDvVNmqzp%2Fqo64hMTf4tb%2BcDxopJFzxyo9fYuU00o1%2BuxiwfdOYCWYaQsnSH6slL2VUhuoBIdcEcjYaKpn1IVSJOfT1YvY5mKkGeji7%2BxjdLWRAt34Ccv0YHwvE5H8Y7xWTSWyFg6ubWYs%2Bdb2HhU4DzeiMoBEkeHp9il30%2FVskBK8w4mLEwx678wgY6pgE3pytrTuEFW2tHN5WusUBWM5oq4IBYG2RuxK87KSUGIOjRM0CMQXRjnMkFBeVJUByglG0j7pyHCioMgutPmmM5%2FL%2Bi%2BUKO%2FJfffqCihEYzW4ZHHH%2B39TS4UuocetXfFgyqbdCAF57uqSwHuJsCYdQ6LRFWemADsUQO%2B8qMPRQQkzgi2uZBI%2BMEbGTSLrTUwS%2FVxWHlDWdlif6ne4E%2FKzqnT1kWgDx%2F&X-Amz-Signature=2f7c00bf5143b52c5670a8cfa5dddd7485d894e823028530f52f2792e34ce8a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672EDF34B%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAr6yc3YOUabzLtuYSqupnclmXlJ%2F%2Fvq3Uc0iWzQcpnFAiB3DQsyrwFgiaJUdp%2B2t%2B0gYeta7P8WzfGHRijm1wpU%2FSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMiaqRp0ChEQe%2Fg66xKtwDRg%2B6Al%2FaIk5PZYRIDnDdEKY18oiwT5Bsld6dLmM4RlYubvJkTXosa3ikBFZ3YOYbD%2FK%2BA97bRUTuvjt7z2EXAkH%2FT6s9sZFZud95a%2BnDtybpAlcj35NQ3rvCzSwY2rLAofI%2FgSgkvV0xRT4sJQTC3Qj6W8Owi9lIhSWC%2F1qJpmRH%2FNy954y3KgqDGJEGLWXqaeUq6Kgi7UR5i8%2Bjm4uDNvMmU7IizYf8vyk9vxCoHC%2Fl%2FSiK8LwNNxM1OARyhnHO3MfJcuZjv4Wc9KKuz3lwwlR7zszD6GQnkYRAo%2B9EzXQJy3sirdDQxpdNK6PMKIUMUIgpHjlJByZrqUA%2BRnBKQAid%2Fu70KgvoqySSvv3oSbJkwAaFnSeASlAIcPTHVX%2FjEfx6tDXNANhTDkuIuk%2BApJQEzljDFNrjSt1CV%2Fj3T%2BS1cZniW%2FQTk%2BHSwTqLajDDQCNAbOwCCDvVNmqzp%2Fqo64hMTf4tb%2BcDxopJFzxyo9fYuU00o1%2BuxiwfdOYCWYaQsnSH6slL2VUhuoBIdcEcjYaKpn1IVSJOfT1YvY5mKkGeji7%2BxjdLWRAt34Ccv0YHwvE5H8Y7xWTSWyFg6ubWYs%2Bdb2HhU4DzeiMoBEkeHp9il30%2FVskBK8w4mLEwx678wgY6pgE3pytrTuEFW2tHN5WusUBWM5oq4IBYG2RuxK87KSUGIOjRM0CMQXRjnMkFBeVJUByglG0j7pyHCioMgutPmmM5%2FL%2Bi%2BUKO%2FJfffqCihEYzW4ZHHH%2B39TS4UuocetXfFgyqbdCAF57uqSwHuJsCYdQ6LRFWemADsUQO%2B8qMPRQQkzgi2uZBI%2BMEbGTSLrTUwS%2FVxWHlDWdlif6ne4E%2FKzqnT1kWgDx%2F&X-Amz-Signature=48f52a18e3161122ff87774ed6ec1d8308bda7be1b106e59d6e0d31800d87d01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672EDF34B%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAr6yc3YOUabzLtuYSqupnclmXlJ%2F%2Fvq3Uc0iWzQcpnFAiB3DQsyrwFgiaJUdp%2B2t%2B0gYeta7P8WzfGHRijm1wpU%2FSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMiaqRp0ChEQe%2Fg66xKtwDRg%2B6Al%2FaIk5PZYRIDnDdEKY18oiwT5Bsld6dLmM4RlYubvJkTXosa3ikBFZ3YOYbD%2FK%2BA97bRUTuvjt7z2EXAkH%2FT6s9sZFZud95a%2BnDtybpAlcj35NQ3rvCzSwY2rLAofI%2FgSgkvV0xRT4sJQTC3Qj6W8Owi9lIhSWC%2F1qJpmRH%2FNy954y3KgqDGJEGLWXqaeUq6Kgi7UR5i8%2Bjm4uDNvMmU7IizYf8vyk9vxCoHC%2Fl%2FSiK8LwNNxM1OARyhnHO3MfJcuZjv4Wc9KKuz3lwwlR7zszD6GQnkYRAo%2B9EzXQJy3sirdDQxpdNK6PMKIUMUIgpHjlJByZrqUA%2BRnBKQAid%2Fu70KgvoqySSvv3oSbJkwAaFnSeASlAIcPTHVX%2FjEfx6tDXNANhTDkuIuk%2BApJQEzljDFNrjSt1CV%2Fj3T%2BS1cZniW%2FQTk%2BHSwTqLajDDQCNAbOwCCDvVNmqzp%2Fqo64hMTf4tb%2BcDxopJFzxyo9fYuU00o1%2BuxiwfdOYCWYaQsnSH6slL2VUhuoBIdcEcjYaKpn1IVSJOfT1YvY5mKkGeji7%2BxjdLWRAt34Ccv0YHwvE5H8Y7xWTSWyFg6ubWYs%2Bdb2HhU4DzeiMoBEkeHp9il30%2FVskBK8w4mLEwx678wgY6pgE3pytrTuEFW2tHN5WusUBWM5oq4IBYG2RuxK87KSUGIOjRM0CMQXRjnMkFBeVJUByglG0j7pyHCioMgutPmmM5%2FL%2Bi%2BUKO%2FJfffqCihEYzW4ZHHH%2B39TS4UuocetXfFgyqbdCAF57uqSwHuJsCYdQ6LRFWemADsUQO%2B8qMPRQQkzgi2uZBI%2BMEbGTSLrTUwS%2FVxWHlDWdlif6ne4E%2FKzqnT1kWgDx%2F&X-Amz-Signature=09de4ed9fd61f91cb5c0b2477e40d6ace376ca1441f92d132eca1cd7b6e8d5d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672EDF34B%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAr6yc3YOUabzLtuYSqupnclmXlJ%2F%2Fvq3Uc0iWzQcpnFAiB3DQsyrwFgiaJUdp%2B2t%2B0gYeta7P8WzfGHRijm1wpU%2FSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMiaqRp0ChEQe%2Fg66xKtwDRg%2B6Al%2FaIk5PZYRIDnDdEKY18oiwT5Bsld6dLmM4RlYubvJkTXosa3ikBFZ3YOYbD%2FK%2BA97bRUTuvjt7z2EXAkH%2FT6s9sZFZud95a%2BnDtybpAlcj35NQ3rvCzSwY2rLAofI%2FgSgkvV0xRT4sJQTC3Qj6W8Owi9lIhSWC%2F1qJpmRH%2FNy954y3KgqDGJEGLWXqaeUq6Kgi7UR5i8%2Bjm4uDNvMmU7IizYf8vyk9vxCoHC%2Fl%2FSiK8LwNNxM1OARyhnHO3MfJcuZjv4Wc9KKuz3lwwlR7zszD6GQnkYRAo%2B9EzXQJy3sirdDQxpdNK6PMKIUMUIgpHjlJByZrqUA%2BRnBKQAid%2Fu70KgvoqySSvv3oSbJkwAaFnSeASlAIcPTHVX%2FjEfx6tDXNANhTDkuIuk%2BApJQEzljDFNrjSt1CV%2Fj3T%2BS1cZniW%2FQTk%2BHSwTqLajDDQCNAbOwCCDvVNmqzp%2Fqo64hMTf4tb%2BcDxopJFzxyo9fYuU00o1%2BuxiwfdOYCWYaQsnSH6slL2VUhuoBIdcEcjYaKpn1IVSJOfT1YvY5mKkGeji7%2BxjdLWRAt34Ccv0YHwvE5H8Y7xWTSWyFg6ubWYs%2Bdb2HhU4DzeiMoBEkeHp9il30%2FVskBK8w4mLEwx678wgY6pgE3pytrTuEFW2tHN5WusUBWM5oq4IBYG2RuxK87KSUGIOjRM0CMQXRjnMkFBeVJUByglG0j7pyHCioMgutPmmM5%2FL%2Bi%2BUKO%2FJfffqCihEYzW4ZHHH%2B39TS4UuocetXfFgyqbdCAF57uqSwHuJsCYdQ6LRFWemADsUQO%2B8qMPRQQkzgi2uZBI%2BMEbGTSLrTUwS%2FVxWHlDWdlif6ne4E%2FKzqnT1kWgDx%2F&X-Amz-Signature=65d50fc7381c49ebc5148d986e5834077dbca112d5ca87d832ff675f16f036ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672EDF34B%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAr6yc3YOUabzLtuYSqupnclmXlJ%2F%2Fvq3Uc0iWzQcpnFAiB3DQsyrwFgiaJUdp%2B2t%2B0gYeta7P8WzfGHRijm1wpU%2FSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMiaqRp0ChEQe%2Fg66xKtwDRg%2B6Al%2FaIk5PZYRIDnDdEKY18oiwT5Bsld6dLmM4RlYubvJkTXosa3ikBFZ3YOYbD%2FK%2BA97bRUTuvjt7z2EXAkH%2FT6s9sZFZud95a%2BnDtybpAlcj35NQ3rvCzSwY2rLAofI%2FgSgkvV0xRT4sJQTC3Qj6W8Owi9lIhSWC%2F1qJpmRH%2FNy954y3KgqDGJEGLWXqaeUq6Kgi7UR5i8%2Bjm4uDNvMmU7IizYf8vyk9vxCoHC%2Fl%2FSiK8LwNNxM1OARyhnHO3MfJcuZjv4Wc9KKuz3lwwlR7zszD6GQnkYRAo%2B9EzXQJy3sirdDQxpdNK6PMKIUMUIgpHjlJByZrqUA%2BRnBKQAid%2Fu70KgvoqySSvv3oSbJkwAaFnSeASlAIcPTHVX%2FjEfx6tDXNANhTDkuIuk%2BApJQEzljDFNrjSt1CV%2Fj3T%2BS1cZniW%2FQTk%2BHSwTqLajDDQCNAbOwCCDvVNmqzp%2Fqo64hMTf4tb%2BcDxopJFzxyo9fYuU00o1%2BuxiwfdOYCWYaQsnSH6slL2VUhuoBIdcEcjYaKpn1IVSJOfT1YvY5mKkGeji7%2BxjdLWRAt34Ccv0YHwvE5H8Y7xWTSWyFg6ubWYs%2Bdb2HhU4DzeiMoBEkeHp9il30%2FVskBK8w4mLEwx678wgY6pgE3pytrTuEFW2tHN5WusUBWM5oq4IBYG2RuxK87KSUGIOjRM0CMQXRjnMkFBeVJUByglG0j7pyHCioMgutPmmM5%2FL%2Bi%2BUKO%2FJfffqCihEYzW4ZHHH%2B39TS4UuocetXfFgyqbdCAF57uqSwHuJsCYdQ6LRFWemADsUQO%2B8qMPRQQkzgi2uZBI%2BMEbGTSLrTUwS%2FVxWHlDWdlif6ne4E%2FKzqnT1kWgDx%2F&X-Amz-Signature=50b71e62935eec235ab4c91eb765ad16b0705fa54ce11302d0c176c35beed318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
