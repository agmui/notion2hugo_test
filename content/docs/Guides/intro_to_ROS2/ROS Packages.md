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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCAN2NHJ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIHbH0%2Bi83Yjh8%2FWaGd9hl351sf488qcfO5diLlw%2BtlmfAiAwwqitY3Dc0bxeDEPOCD5sF6lehnSQ7rU0ISSNLsdntCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMxnkxPswvhxu%2ByDN9KtwDYf9GqcqafSMiZITEyPP8GiDbf%2B9cJQja1AT%2BuHbPjphQFOTBWXDB8Dql2jFmH3zo3Tawkh%2BbVQW5QZATa6t%2B77cVNNqJLhvnpObskjAq5JcF0pPDPBCPZccN3oAd48DU7SB7BZpA3P%2FbZVPuX62jNK0hmECZwZ4%2FqoZ6ldDtd93j8jyRdCCDKEoTigfwZbiHfQVX1MHtucprz0o2pzd0kl7dqFs%2F9F1BGw5%2BjjR646OMJrV1jgd%2F2weVFADBT0MOYklpp4ByH%2FdLAjveHfis3Sn2mTtR271%2FRpHvdR7DPO%2FZVrz8%2BbmM0isFo86TuDg15uztBZItTfRA%2BCa1jvfz2pio%2BIulIdRV922x6OG5pdeAEq4Wi1YadPM91R8gEiKsV7fjT7uEsq%2B4gtT6pOqDbwnU6DON5oEp%2BmdsJlOLatnP7OFbpZmU6E5KBDH8hD9Ayp2lCvlWy1hzJ4ZM34uq6PyxwF%2BOrHctl%2FP3IHiv6vkg8JDzEEWyF37fq5ZQhg2PnqE0ar3%2F19E%2FN85HZspeB1UA2gyKTzeqisBCYZqmGIy6h4FlLGX33exKqyOvMRhL2556ItjxIrQfTGoXRqJTjawaE7Ey47XM0a3NADuDdkQMI3vXJZxWWJmMedswr%2ByfwwY6pgGWglT4wRR%2Flq8yJqg33B9C%2Be8rzNXc5r8AxMcjoiXuJd3BV2EwVpF%2F75J9J24TTf3lKBi0%2BPqA0%2FJBiKNggr3L1XWp4bwxLLgmOicSsBK3L8zNKN45bxGZzHyoL4K0Zv9bx%2FSzdoDxxuLMnaDMDtReOBKqkDz%2FdjwTM7T43hQsmwjkG5yrh3L8ot3L2Q%2FJuAch%2FguGb0dk3SjWtfmYzbEvGQPn0b4C&X-Amz-Signature=7e59a40f8fcc427a6d766167d21d3ef75fd90e72fdd8c1d70219f9342dfd9d89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCAN2NHJ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIHbH0%2Bi83Yjh8%2FWaGd9hl351sf488qcfO5diLlw%2BtlmfAiAwwqitY3Dc0bxeDEPOCD5sF6lehnSQ7rU0ISSNLsdntCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMxnkxPswvhxu%2ByDN9KtwDYf9GqcqafSMiZITEyPP8GiDbf%2B9cJQja1AT%2BuHbPjphQFOTBWXDB8Dql2jFmH3zo3Tawkh%2BbVQW5QZATa6t%2B77cVNNqJLhvnpObskjAq5JcF0pPDPBCPZccN3oAd48DU7SB7BZpA3P%2FbZVPuX62jNK0hmECZwZ4%2FqoZ6ldDtd93j8jyRdCCDKEoTigfwZbiHfQVX1MHtucprz0o2pzd0kl7dqFs%2F9F1BGw5%2BjjR646OMJrV1jgd%2F2weVFADBT0MOYklpp4ByH%2FdLAjveHfis3Sn2mTtR271%2FRpHvdR7DPO%2FZVrz8%2BbmM0isFo86TuDg15uztBZItTfRA%2BCa1jvfz2pio%2BIulIdRV922x6OG5pdeAEq4Wi1YadPM91R8gEiKsV7fjT7uEsq%2B4gtT6pOqDbwnU6DON5oEp%2BmdsJlOLatnP7OFbpZmU6E5KBDH8hD9Ayp2lCvlWy1hzJ4ZM34uq6PyxwF%2BOrHctl%2FP3IHiv6vkg8JDzEEWyF37fq5ZQhg2PnqE0ar3%2F19E%2FN85HZspeB1UA2gyKTzeqisBCYZqmGIy6h4FlLGX33exKqyOvMRhL2556ItjxIrQfTGoXRqJTjawaE7Ey47XM0a3NADuDdkQMI3vXJZxWWJmMedswr%2ByfwwY6pgGWglT4wRR%2Flq8yJqg33B9C%2Be8rzNXc5r8AxMcjoiXuJd3BV2EwVpF%2F75J9J24TTf3lKBi0%2BPqA0%2FJBiKNggr3L1XWp4bwxLLgmOicSsBK3L8zNKN45bxGZzHyoL4K0Zv9bx%2FSzdoDxxuLMnaDMDtReOBKqkDz%2FdjwTM7T43hQsmwjkG5yrh3L8ot3L2Q%2FJuAch%2FguGb0dk3SjWtfmYzbEvGQPn0b4C&X-Amz-Signature=57fc1d54918dbbc3a02d43e6056c027b05f88cbbe1904ac1a34d7b638a0bdc9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCAN2NHJ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIHbH0%2Bi83Yjh8%2FWaGd9hl351sf488qcfO5diLlw%2BtlmfAiAwwqitY3Dc0bxeDEPOCD5sF6lehnSQ7rU0ISSNLsdntCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMxnkxPswvhxu%2ByDN9KtwDYf9GqcqafSMiZITEyPP8GiDbf%2B9cJQja1AT%2BuHbPjphQFOTBWXDB8Dql2jFmH3zo3Tawkh%2BbVQW5QZATa6t%2B77cVNNqJLhvnpObskjAq5JcF0pPDPBCPZccN3oAd48DU7SB7BZpA3P%2FbZVPuX62jNK0hmECZwZ4%2FqoZ6ldDtd93j8jyRdCCDKEoTigfwZbiHfQVX1MHtucprz0o2pzd0kl7dqFs%2F9F1BGw5%2BjjR646OMJrV1jgd%2F2weVFADBT0MOYklpp4ByH%2FdLAjveHfis3Sn2mTtR271%2FRpHvdR7DPO%2FZVrz8%2BbmM0isFo86TuDg15uztBZItTfRA%2BCa1jvfz2pio%2BIulIdRV922x6OG5pdeAEq4Wi1YadPM91R8gEiKsV7fjT7uEsq%2B4gtT6pOqDbwnU6DON5oEp%2BmdsJlOLatnP7OFbpZmU6E5KBDH8hD9Ayp2lCvlWy1hzJ4ZM34uq6PyxwF%2BOrHctl%2FP3IHiv6vkg8JDzEEWyF37fq5ZQhg2PnqE0ar3%2F19E%2FN85HZspeB1UA2gyKTzeqisBCYZqmGIy6h4FlLGX33exKqyOvMRhL2556ItjxIrQfTGoXRqJTjawaE7Ey47XM0a3NADuDdkQMI3vXJZxWWJmMedswr%2ByfwwY6pgGWglT4wRR%2Flq8yJqg33B9C%2Be8rzNXc5r8AxMcjoiXuJd3BV2EwVpF%2F75J9J24TTf3lKBi0%2BPqA0%2FJBiKNggr3L1XWp4bwxLLgmOicSsBK3L8zNKN45bxGZzHyoL4K0Zv9bx%2FSzdoDxxuLMnaDMDtReOBKqkDz%2FdjwTM7T43hQsmwjkG5yrh3L8ot3L2Q%2FJuAch%2FguGb0dk3SjWtfmYzbEvGQPn0b4C&X-Amz-Signature=46c24175689d30fce168d385a668dea19b900804efe24582db824c2d592c6ac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCAN2NHJ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIHbH0%2Bi83Yjh8%2FWaGd9hl351sf488qcfO5diLlw%2BtlmfAiAwwqitY3Dc0bxeDEPOCD5sF6lehnSQ7rU0ISSNLsdntCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMxnkxPswvhxu%2ByDN9KtwDYf9GqcqafSMiZITEyPP8GiDbf%2B9cJQja1AT%2BuHbPjphQFOTBWXDB8Dql2jFmH3zo3Tawkh%2BbVQW5QZATa6t%2B77cVNNqJLhvnpObskjAq5JcF0pPDPBCPZccN3oAd48DU7SB7BZpA3P%2FbZVPuX62jNK0hmECZwZ4%2FqoZ6ldDtd93j8jyRdCCDKEoTigfwZbiHfQVX1MHtucprz0o2pzd0kl7dqFs%2F9F1BGw5%2BjjR646OMJrV1jgd%2F2weVFADBT0MOYklpp4ByH%2FdLAjveHfis3Sn2mTtR271%2FRpHvdR7DPO%2FZVrz8%2BbmM0isFo86TuDg15uztBZItTfRA%2BCa1jvfz2pio%2BIulIdRV922x6OG5pdeAEq4Wi1YadPM91R8gEiKsV7fjT7uEsq%2B4gtT6pOqDbwnU6DON5oEp%2BmdsJlOLatnP7OFbpZmU6E5KBDH8hD9Ayp2lCvlWy1hzJ4ZM34uq6PyxwF%2BOrHctl%2FP3IHiv6vkg8JDzEEWyF37fq5ZQhg2PnqE0ar3%2F19E%2FN85HZspeB1UA2gyKTzeqisBCYZqmGIy6h4FlLGX33exKqyOvMRhL2556ItjxIrQfTGoXRqJTjawaE7Ey47XM0a3NADuDdkQMI3vXJZxWWJmMedswr%2ByfwwY6pgGWglT4wRR%2Flq8yJqg33B9C%2Be8rzNXc5r8AxMcjoiXuJd3BV2EwVpF%2F75J9J24TTf3lKBi0%2BPqA0%2FJBiKNggr3L1XWp4bwxLLgmOicSsBK3L8zNKN45bxGZzHyoL4K0Zv9bx%2FSzdoDxxuLMnaDMDtReOBKqkDz%2FdjwTM7T43hQsmwjkG5yrh3L8ot3L2Q%2FJuAch%2FguGb0dk3SjWtfmYzbEvGQPn0b4C&X-Amz-Signature=9d1631e4f5927d8cf508ee1a7254a0d1a4337555f3eafb54bcbbdc0386bf85a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCAN2NHJ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIHbH0%2Bi83Yjh8%2FWaGd9hl351sf488qcfO5diLlw%2BtlmfAiAwwqitY3Dc0bxeDEPOCD5sF6lehnSQ7rU0ISSNLsdntCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMxnkxPswvhxu%2ByDN9KtwDYf9GqcqafSMiZITEyPP8GiDbf%2B9cJQja1AT%2BuHbPjphQFOTBWXDB8Dql2jFmH3zo3Tawkh%2BbVQW5QZATa6t%2B77cVNNqJLhvnpObskjAq5JcF0pPDPBCPZccN3oAd48DU7SB7BZpA3P%2FbZVPuX62jNK0hmECZwZ4%2FqoZ6ldDtd93j8jyRdCCDKEoTigfwZbiHfQVX1MHtucprz0o2pzd0kl7dqFs%2F9F1BGw5%2BjjR646OMJrV1jgd%2F2weVFADBT0MOYklpp4ByH%2FdLAjveHfis3Sn2mTtR271%2FRpHvdR7DPO%2FZVrz8%2BbmM0isFo86TuDg15uztBZItTfRA%2BCa1jvfz2pio%2BIulIdRV922x6OG5pdeAEq4Wi1YadPM91R8gEiKsV7fjT7uEsq%2B4gtT6pOqDbwnU6DON5oEp%2BmdsJlOLatnP7OFbpZmU6E5KBDH8hD9Ayp2lCvlWy1hzJ4ZM34uq6PyxwF%2BOrHctl%2FP3IHiv6vkg8JDzEEWyF37fq5ZQhg2PnqE0ar3%2F19E%2FN85HZspeB1UA2gyKTzeqisBCYZqmGIy6h4FlLGX33exKqyOvMRhL2556ItjxIrQfTGoXRqJTjawaE7Ey47XM0a3NADuDdkQMI3vXJZxWWJmMedswr%2ByfwwY6pgGWglT4wRR%2Flq8yJqg33B9C%2Be8rzNXc5r8AxMcjoiXuJd3BV2EwVpF%2F75J9J24TTf3lKBi0%2BPqA0%2FJBiKNggr3L1XWp4bwxLLgmOicSsBK3L8zNKN45bxGZzHyoL4K0Zv9bx%2FSzdoDxxuLMnaDMDtReOBKqkDz%2FdjwTM7T43hQsmwjkG5yrh3L8ot3L2Q%2FJuAch%2FguGb0dk3SjWtfmYzbEvGQPn0b4C&X-Amz-Signature=aecaf915c7b1e71fdc70936e8db3b6bbb680f8230ded2820a1aaa1419e38338e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCAN2NHJ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIHbH0%2Bi83Yjh8%2FWaGd9hl351sf488qcfO5diLlw%2BtlmfAiAwwqitY3Dc0bxeDEPOCD5sF6lehnSQ7rU0ISSNLsdntCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMxnkxPswvhxu%2ByDN9KtwDYf9GqcqafSMiZITEyPP8GiDbf%2B9cJQja1AT%2BuHbPjphQFOTBWXDB8Dql2jFmH3zo3Tawkh%2BbVQW5QZATa6t%2B77cVNNqJLhvnpObskjAq5JcF0pPDPBCPZccN3oAd48DU7SB7BZpA3P%2FbZVPuX62jNK0hmECZwZ4%2FqoZ6ldDtd93j8jyRdCCDKEoTigfwZbiHfQVX1MHtucprz0o2pzd0kl7dqFs%2F9F1BGw5%2BjjR646OMJrV1jgd%2F2weVFADBT0MOYklpp4ByH%2FdLAjveHfis3Sn2mTtR271%2FRpHvdR7DPO%2FZVrz8%2BbmM0isFo86TuDg15uztBZItTfRA%2BCa1jvfz2pio%2BIulIdRV922x6OG5pdeAEq4Wi1YadPM91R8gEiKsV7fjT7uEsq%2B4gtT6pOqDbwnU6DON5oEp%2BmdsJlOLatnP7OFbpZmU6E5KBDH8hD9Ayp2lCvlWy1hzJ4ZM34uq6PyxwF%2BOrHctl%2FP3IHiv6vkg8JDzEEWyF37fq5ZQhg2PnqE0ar3%2F19E%2FN85HZspeB1UA2gyKTzeqisBCYZqmGIy6h4FlLGX33exKqyOvMRhL2556ItjxIrQfTGoXRqJTjawaE7Ey47XM0a3NADuDdkQMI3vXJZxWWJmMedswr%2ByfwwY6pgGWglT4wRR%2Flq8yJqg33B9C%2Be8rzNXc5r8AxMcjoiXuJd3BV2EwVpF%2F75J9J24TTf3lKBi0%2BPqA0%2FJBiKNggr3L1XWp4bwxLLgmOicSsBK3L8zNKN45bxGZzHyoL4K0Zv9bx%2FSzdoDxxuLMnaDMDtReOBKqkDz%2FdjwTM7T43hQsmwjkG5yrh3L8ot3L2Q%2FJuAch%2FguGb0dk3SjWtfmYzbEvGQPn0b4C&X-Amz-Signature=818c408dd652f7ad9c4c1384174c806f3cda0b76486b6713ab0d4de909dd24a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCAN2NHJ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIHbH0%2Bi83Yjh8%2FWaGd9hl351sf488qcfO5diLlw%2BtlmfAiAwwqitY3Dc0bxeDEPOCD5sF6lehnSQ7rU0ISSNLsdntCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMxnkxPswvhxu%2ByDN9KtwDYf9GqcqafSMiZITEyPP8GiDbf%2B9cJQja1AT%2BuHbPjphQFOTBWXDB8Dql2jFmH3zo3Tawkh%2BbVQW5QZATa6t%2B77cVNNqJLhvnpObskjAq5JcF0pPDPBCPZccN3oAd48DU7SB7BZpA3P%2FbZVPuX62jNK0hmECZwZ4%2FqoZ6ldDtd93j8jyRdCCDKEoTigfwZbiHfQVX1MHtucprz0o2pzd0kl7dqFs%2F9F1BGw5%2BjjR646OMJrV1jgd%2F2weVFADBT0MOYklpp4ByH%2FdLAjveHfis3Sn2mTtR271%2FRpHvdR7DPO%2FZVrz8%2BbmM0isFo86TuDg15uztBZItTfRA%2BCa1jvfz2pio%2BIulIdRV922x6OG5pdeAEq4Wi1YadPM91R8gEiKsV7fjT7uEsq%2B4gtT6pOqDbwnU6DON5oEp%2BmdsJlOLatnP7OFbpZmU6E5KBDH8hD9Ayp2lCvlWy1hzJ4ZM34uq6PyxwF%2BOrHctl%2FP3IHiv6vkg8JDzEEWyF37fq5ZQhg2PnqE0ar3%2F19E%2FN85HZspeB1UA2gyKTzeqisBCYZqmGIy6h4FlLGX33exKqyOvMRhL2556ItjxIrQfTGoXRqJTjawaE7Ey47XM0a3NADuDdkQMI3vXJZxWWJmMedswr%2ByfwwY6pgGWglT4wRR%2Flq8yJqg33B9C%2Be8rzNXc5r8AxMcjoiXuJd3BV2EwVpF%2F75J9J24TTf3lKBi0%2BPqA0%2FJBiKNggr3L1XWp4bwxLLgmOicSsBK3L8zNKN45bxGZzHyoL4K0Zv9bx%2FSzdoDxxuLMnaDMDtReOBKqkDz%2FdjwTM7T43hQsmwjkG5yrh3L8ot3L2Q%2FJuAch%2FguGb0dk3SjWtfmYzbEvGQPn0b4C&X-Amz-Signature=ee179222062af61c25a4e182f4de3a71e10f75087aad59ad019c22c682502aa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
