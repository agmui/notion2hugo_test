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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ4ACCBY%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCctgNgZaOfmsVnoJKugA94%2B%2Bv8UpeXAcOVPdXBn97mVAIga0GAu5jOpWSQKobS4YcI5oABvc5%2F2XAJ8rM%2BvlIWyhYqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpBR8qNGzKLLiJecyrcAwSex7R09o2HxIhgJMLVHr9YGs0GVqYRXmKlJaBBPKorGbPBD0k4YVt3zjnaVQQDTTvwFMeOwWGPKS%2BvLkNZaimqftkcqraPPCV40n1OfoxzL6H5r05E%2FXHX05Tsa%2BcwK01bMXY2FX2eSnUGCO6bDWEZ8VSC19r15G429zveSHQ6i%2BDbAIa6npjRxsivGUiwwTfh2kh3D4XqvUVfpmW8JStpqm5%2Bulj5zphhd7aHL%2FrOSYxl%2Fhpvld2iP3QifzulWzCJdhLmU3uohb9u7LWeMaDZO3lKFU6xV1BJLiwJNGL8K3ksOg%2F1yH26BMAvF2q0imXxh2Am%2BPnfo5Y7OMBGt8LYY8oK9d12IMd7CbM3GuZiIZkNQiX3urJ3DD29wbiKagnirf%2FKWrrcunUkQEB0Od7pKP0srjmd3EXKHRoGooyWYjYcR6uDuUba%2B%2B%2BVCBLNvG3jE%2FWpspCAwZUkUjsNGgqGb7NxyE7UwVp2rEA3DwCLsul9ztNPOY3%2Bf0Nfml9XR5eNvQYH9SHenJVA6oD6wh6sd4K1v9dHEWSlbSeu1K09k9OA481uzkI1iuXein24WmECEzKSnO9gmnmf3G%2BDXTLMrRJpglot%2FN3CXbAtmY0ICe1cznxPl%2FjnueKVMLHwncIGOqUBQcVeq6UYvF2sdeWqoVUN%2BaOcOTSzsfaEc5h80yETv6r8WMVyUqbpe%2FZ7NA%2BMhRN%2BFs0Twg037dZ%2Ff2RdOA0izxtRZzXLqyhVHxwP7j%2FmMGDG%2FdCEnRNdkgl3uZ3DFhpImUVigCreh9Uo%2FSWGEea8qdoU2la%2BgoT0u9ZEEEgGGPx08CwHhM4IwgSsCUeNfCGYKrZ5fX2vXPsbcJJj9%2BNUWA%2BJqS3j&X-Amz-Signature=c485cd97bba34f59f6444d8f3ec1041deaf0f88a0b06e345ac784e27d04abeae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ4ACCBY%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCctgNgZaOfmsVnoJKugA94%2B%2Bv8UpeXAcOVPdXBn97mVAIga0GAu5jOpWSQKobS4YcI5oABvc5%2F2XAJ8rM%2BvlIWyhYqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpBR8qNGzKLLiJecyrcAwSex7R09o2HxIhgJMLVHr9YGs0GVqYRXmKlJaBBPKorGbPBD0k4YVt3zjnaVQQDTTvwFMeOwWGPKS%2BvLkNZaimqftkcqraPPCV40n1OfoxzL6H5r05E%2FXHX05Tsa%2BcwK01bMXY2FX2eSnUGCO6bDWEZ8VSC19r15G429zveSHQ6i%2BDbAIa6npjRxsivGUiwwTfh2kh3D4XqvUVfpmW8JStpqm5%2Bulj5zphhd7aHL%2FrOSYxl%2Fhpvld2iP3QifzulWzCJdhLmU3uohb9u7LWeMaDZO3lKFU6xV1BJLiwJNGL8K3ksOg%2F1yH26BMAvF2q0imXxh2Am%2BPnfo5Y7OMBGt8LYY8oK9d12IMd7CbM3GuZiIZkNQiX3urJ3DD29wbiKagnirf%2FKWrrcunUkQEB0Od7pKP0srjmd3EXKHRoGooyWYjYcR6uDuUba%2B%2B%2BVCBLNvG3jE%2FWpspCAwZUkUjsNGgqGb7NxyE7UwVp2rEA3DwCLsul9ztNPOY3%2Bf0Nfml9XR5eNvQYH9SHenJVA6oD6wh6sd4K1v9dHEWSlbSeu1K09k9OA481uzkI1iuXein24WmECEzKSnO9gmnmf3G%2BDXTLMrRJpglot%2FN3CXbAtmY0ICe1cznxPl%2FjnueKVMLHwncIGOqUBQcVeq6UYvF2sdeWqoVUN%2BaOcOTSzsfaEc5h80yETv6r8WMVyUqbpe%2FZ7NA%2BMhRN%2BFs0Twg037dZ%2Ff2RdOA0izxtRZzXLqyhVHxwP7j%2FmMGDG%2FdCEnRNdkgl3uZ3DFhpImUVigCreh9Uo%2FSWGEea8qdoU2la%2BgoT0u9ZEEEgGGPx08CwHhM4IwgSsCUeNfCGYKrZ5fX2vXPsbcJJj9%2BNUWA%2BJqS3j&X-Amz-Signature=67da5c63f92f4d6b2ced9c25cbe6470cb082e48d298ac5568e47184cb6acb734&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ4ACCBY%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCctgNgZaOfmsVnoJKugA94%2B%2Bv8UpeXAcOVPdXBn97mVAIga0GAu5jOpWSQKobS4YcI5oABvc5%2F2XAJ8rM%2BvlIWyhYqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpBR8qNGzKLLiJecyrcAwSex7R09o2HxIhgJMLVHr9YGs0GVqYRXmKlJaBBPKorGbPBD0k4YVt3zjnaVQQDTTvwFMeOwWGPKS%2BvLkNZaimqftkcqraPPCV40n1OfoxzL6H5r05E%2FXHX05Tsa%2BcwK01bMXY2FX2eSnUGCO6bDWEZ8VSC19r15G429zveSHQ6i%2BDbAIa6npjRxsivGUiwwTfh2kh3D4XqvUVfpmW8JStpqm5%2Bulj5zphhd7aHL%2FrOSYxl%2Fhpvld2iP3QifzulWzCJdhLmU3uohb9u7LWeMaDZO3lKFU6xV1BJLiwJNGL8K3ksOg%2F1yH26BMAvF2q0imXxh2Am%2BPnfo5Y7OMBGt8LYY8oK9d12IMd7CbM3GuZiIZkNQiX3urJ3DD29wbiKagnirf%2FKWrrcunUkQEB0Od7pKP0srjmd3EXKHRoGooyWYjYcR6uDuUba%2B%2B%2BVCBLNvG3jE%2FWpspCAwZUkUjsNGgqGb7NxyE7UwVp2rEA3DwCLsul9ztNPOY3%2Bf0Nfml9XR5eNvQYH9SHenJVA6oD6wh6sd4K1v9dHEWSlbSeu1K09k9OA481uzkI1iuXein24WmECEzKSnO9gmnmf3G%2BDXTLMrRJpglot%2FN3CXbAtmY0ICe1cznxPl%2FjnueKVMLHwncIGOqUBQcVeq6UYvF2sdeWqoVUN%2BaOcOTSzsfaEc5h80yETv6r8WMVyUqbpe%2FZ7NA%2BMhRN%2BFs0Twg037dZ%2Ff2RdOA0izxtRZzXLqyhVHxwP7j%2FmMGDG%2FdCEnRNdkgl3uZ3DFhpImUVigCreh9Uo%2FSWGEea8qdoU2la%2BgoT0u9ZEEEgGGPx08CwHhM4IwgSsCUeNfCGYKrZ5fX2vXPsbcJJj9%2BNUWA%2BJqS3j&X-Amz-Signature=195a6e22a37aa569e12439e703b2bc69e6fa2cdd78b583eb4e6a556c87ef3323&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ4ACCBY%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCctgNgZaOfmsVnoJKugA94%2B%2Bv8UpeXAcOVPdXBn97mVAIga0GAu5jOpWSQKobS4YcI5oABvc5%2F2XAJ8rM%2BvlIWyhYqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpBR8qNGzKLLiJecyrcAwSex7R09o2HxIhgJMLVHr9YGs0GVqYRXmKlJaBBPKorGbPBD0k4YVt3zjnaVQQDTTvwFMeOwWGPKS%2BvLkNZaimqftkcqraPPCV40n1OfoxzL6H5r05E%2FXHX05Tsa%2BcwK01bMXY2FX2eSnUGCO6bDWEZ8VSC19r15G429zveSHQ6i%2BDbAIa6npjRxsivGUiwwTfh2kh3D4XqvUVfpmW8JStpqm5%2Bulj5zphhd7aHL%2FrOSYxl%2Fhpvld2iP3QifzulWzCJdhLmU3uohb9u7LWeMaDZO3lKFU6xV1BJLiwJNGL8K3ksOg%2F1yH26BMAvF2q0imXxh2Am%2BPnfo5Y7OMBGt8LYY8oK9d12IMd7CbM3GuZiIZkNQiX3urJ3DD29wbiKagnirf%2FKWrrcunUkQEB0Od7pKP0srjmd3EXKHRoGooyWYjYcR6uDuUba%2B%2B%2BVCBLNvG3jE%2FWpspCAwZUkUjsNGgqGb7NxyE7UwVp2rEA3DwCLsul9ztNPOY3%2Bf0Nfml9XR5eNvQYH9SHenJVA6oD6wh6sd4K1v9dHEWSlbSeu1K09k9OA481uzkI1iuXein24WmECEzKSnO9gmnmf3G%2BDXTLMrRJpglot%2FN3CXbAtmY0ICe1cznxPl%2FjnueKVMLHwncIGOqUBQcVeq6UYvF2sdeWqoVUN%2BaOcOTSzsfaEc5h80yETv6r8WMVyUqbpe%2FZ7NA%2BMhRN%2BFs0Twg037dZ%2Ff2RdOA0izxtRZzXLqyhVHxwP7j%2FmMGDG%2FdCEnRNdkgl3uZ3DFhpImUVigCreh9Uo%2FSWGEea8qdoU2la%2BgoT0u9ZEEEgGGPx08CwHhM4IwgSsCUeNfCGYKrZ5fX2vXPsbcJJj9%2BNUWA%2BJqS3j&X-Amz-Signature=15c7d2358dacf3589294eda9453a23c7a2aaf9af514fdd31baf93ed1089d6727&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ4ACCBY%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCctgNgZaOfmsVnoJKugA94%2B%2Bv8UpeXAcOVPdXBn97mVAIga0GAu5jOpWSQKobS4YcI5oABvc5%2F2XAJ8rM%2BvlIWyhYqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpBR8qNGzKLLiJecyrcAwSex7R09o2HxIhgJMLVHr9YGs0GVqYRXmKlJaBBPKorGbPBD0k4YVt3zjnaVQQDTTvwFMeOwWGPKS%2BvLkNZaimqftkcqraPPCV40n1OfoxzL6H5r05E%2FXHX05Tsa%2BcwK01bMXY2FX2eSnUGCO6bDWEZ8VSC19r15G429zveSHQ6i%2BDbAIa6npjRxsivGUiwwTfh2kh3D4XqvUVfpmW8JStpqm5%2Bulj5zphhd7aHL%2FrOSYxl%2Fhpvld2iP3QifzulWzCJdhLmU3uohb9u7LWeMaDZO3lKFU6xV1BJLiwJNGL8K3ksOg%2F1yH26BMAvF2q0imXxh2Am%2BPnfo5Y7OMBGt8LYY8oK9d12IMd7CbM3GuZiIZkNQiX3urJ3DD29wbiKagnirf%2FKWrrcunUkQEB0Od7pKP0srjmd3EXKHRoGooyWYjYcR6uDuUba%2B%2B%2BVCBLNvG3jE%2FWpspCAwZUkUjsNGgqGb7NxyE7UwVp2rEA3DwCLsul9ztNPOY3%2Bf0Nfml9XR5eNvQYH9SHenJVA6oD6wh6sd4K1v9dHEWSlbSeu1K09k9OA481uzkI1iuXein24WmECEzKSnO9gmnmf3G%2BDXTLMrRJpglot%2FN3CXbAtmY0ICe1cznxPl%2FjnueKVMLHwncIGOqUBQcVeq6UYvF2sdeWqoVUN%2BaOcOTSzsfaEc5h80yETv6r8WMVyUqbpe%2FZ7NA%2BMhRN%2BFs0Twg037dZ%2Ff2RdOA0izxtRZzXLqyhVHxwP7j%2FmMGDG%2FdCEnRNdkgl3uZ3DFhpImUVigCreh9Uo%2FSWGEea8qdoU2la%2BgoT0u9ZEEEgGGPx08CwHhM4IwgSsCUeNfCGYKrZ5fX2vXPsbcJJj9%2BNUWA%2BJqS3j&X-Amz-Signature=98b938712323960587c87bdca234e39c420ade7aaf9847f2b2d106fd1f88d84c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ4ACCBY%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCctgNgZaOfmsVnoJKugA94%2B%2Bv8UpeXAcOVPdXBn97mVAIga0GAu5jOpWSQKobS4YcI5oABvc5%2F2XAJ8rM%2BvlIWyhYqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpBR8qNGzKLLiJecyrcAwSex7R09o2HxIhgJMLVHr9YGs0GVqYRXmKlJaBBPKorGbPBD0k4YVt3zjnaVQQDTTvwFMeOwWGPKS%2BvLkNZaimqftkcqraPPCV40n1OfoxzL6H5r05E%2FXHX05Tsa%2BcwK01bMXY2FX2eSnUGCO6bDWEZ8VSC19r15G429zveSHQ6i%2BDbAIa6npjRxsivGUiwwTfh2kh3D4XqvUVfpmW8JStpqm5%2Bulj5zphhd7aHL%2FrOSYxl%2Fhpvld2iP3QifzulWzCJdhLmU3uohb9u7LWeMaDZO3lKFU6xV1BJLiwJNGL8K3ksOg%2F1yH26BMAvF2q0imXxh2Am%2BPnfo5Y7OMBGt8LYY8oK9d12IMd7CbM3GuZiIZkNQiX3urJ3DD29wbiKagnirf%2FKWrrcunUkQEB0Od7pKP0srjmd3EXKHRoGooyWYjYcR6uDuUba%2B%2B%2BVCBLNvG3jE%2FWpspCAwZUkUjsNGgqGb7NxyE7UwVp2rEA3DwCLsul9ztNPOY3%2Bf0Nfml9XR5eNvQYH9SHenJVA6oD6wh6sd4K1v9dHEWSlbSeu1K09k9OA481uzkI1iuXein24WmECEzKSnO9gmnmf3G%2BDXTLMrRJpglot%2FN3CXbAtmY0ICe1cznxPl%2FjnueKVMLHwncIGOqUBQcVeq6UYvF2sdeWqoVUN%2BaOcOTSzsfaEc5h80yETv6r8WMVyUqbpe%2FZ7NA%2BMhRN%2BFs0Twg037dZ%2Ff2RdOA0izxtRZzXLqyhVHxwP7j%2FmMGDG%2FdCEnRNdkgl3uZ3DFhpImUVigCreh9Uo%2FSWGEea8qdoU2la%2BgoT0u9ZEEEgGGPx08CwHhM4IwgSsCUeNfCGYKrZ5fX2vXPsbcJJj9%2BNUWA%2BJqS3j&X-Amz-Signature=21d012fafd5b092a015fc54265ac0d6175095a22bd39a74fdd6931987cbff4db&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ4ACCBY%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCctgNgZaOfmsVnoJKugA94%2B%2Bv8UpeXAcOVPdXBn97mVAIga0GAu5jOpWSQKobS4YcI5oABvc5%2F2XAJ8rM%2BvlIWyhYqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpBR8qNGzKLLiJecyrcAwSex7R09o2HxIhgJMLVHr9YGs0GVqYRXmKlJaBBPKorGbPBD0k4YVt3zjnaVQQDTTvwFMeOwWGPKS%2BvLkNZaimqftkcqraPPCV40n1OfoxzL6H5r05E%2FXHX05Tsa%2BcwK01bMXY2FX2eSnUGCO6bDWEZ8VSC19r15G429zveSHQ6i%2BDbAIa6npjRxsivGUiwwTfh2kh3D4XqvUVfpmW8JStpqm5%2Bulj5zphhd7aHL%2FrOSYxl%2Fhpvld2iP3QifzulWzCJdhLmU3uohb9u7LWeMaDZO3lKFU6xV1BJLiwJNGL8K3ksOg%2F1yH26BMAvF2q0imXxh2Am%2BPnfo5Y7OMBGt8LYY8oK9d12IMd7CbM3GuZiIZkNQiX3urJ3DD29wbiKagnirf%2FKWrrcunUkQEB0Od7pKP0srjmd3EXKHRoGooyWYjYcR6uDuUba%2B%2B%2BVCBLNvG3jE%2FWpspCAwZUkUjsNGgqGb7NxyE7UwVp2rEA3DwCLsul9ztNPOY3%2Bf0Nfml9XR5eNvQYH9SHenJVA6oD6wh6sd4K1v9dHEWSlbSeu1K09k9OA481uzkI1iuXein24WmECEzKSnO9gmnmf3G%2BDXTLMrRJpglot%2FN3CXbAtmY0ICe1cznxPl%2FjnueKVMLHwncIGOqUBQcVeq6UYvF2sdeWqoVUN%2BaOcOTSzsfaEc5h80yETv6r8WMVyUqbpe%2FZ7NA%2BMhRN%2BFs0Twg037dZ%2Ff2RdOA0izxtRZzXLqyhVHxwP7j%2FmMGDG%2FdCEnRNdkgl3uZ3DFhpImUVigCreh9Uo%2FSWGEea8qdoU2la%2BgoT0u9ZEEEgGGPx08CwHhM4IwgSsCUeNfCGYKrZ5fX2vXPsbcJJj9%2BNUWA%2BJqS3j&X-Amz-Signature=fc9df239e0d7c443717043880844e85149d05cea479fa1427326a0afe30b7e2f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
