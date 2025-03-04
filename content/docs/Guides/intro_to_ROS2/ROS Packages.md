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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGPD5P55%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3Jg2pyay9JNfJT%2Bc%2FbNgwoZxccoYSVibnLm4LM%2BSfjwIgJwK0OoqwC4rFS1ndlE4xzxX2ASCqR%2FThUcS8DLZoddIqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmvHq2V78BZaRgq6yrcAyZGNtowFXMKiQN0iGhdQwXe1OnY3R6yQk2bKbc%2B2Dx1EkggZh0rii5ZfvOp9nmluA5fDDZALqKqUXeRiP8foNzQEOZH3hZWIuQv7EVsC8Z%2B3ByhPnv4i%2BegD5wq8Vm6NqzBiZ%2FeEuCZzu8o3mN3D3HITeDuMDV62czZ61O6EkGpbLDjUphiXtWKzZgy3LDPrF1JaN%2FvSn%2FQHwfSSc32C211mB3wm0RoZ6wlcT8zPVOr0bpKmR2snFaoo9lM%2Fy%2F171AbGeEOcJIZ26V59mHPTkAZBk6xcImWSowUp4zF83k1Va4tGj7WM%2BMpyukNGA2z%2FksFQSdzeDoSuwLa8nw%2BWSiM7tb3dRRfOlWV7%2F1waN0qtnbDXmTTSYeRemOoO9urZsXg%2Bpl4AyG135WzlKS465GMLgqtO8pkzIYh94QrHyq3qhczm%2F9cenZgXJS5Fuw8bVxZ76iA1zif9N6MNZeoLy0Wc5MAnya5TGPepSaZ1CsmR1hA2qbXmOyXn0eq8sr7yUslNGt76YJJIYgiLWu5cgPJkQ%2FbuYKxp3fCsd4cE6%2BkYoKS6ZM5FLpT5Kbdbio0M7zoQv7b6fFBcUp%2Fk2Bgljs0yu7hHeryYbiHqJRpqF27ajgO6sdC2KLUVxgzMLi6nb4GOqUBy%2BGYcC5RXUQIRLGc0Rx2GPFXHNPmwhpGt1vLysVoWQxfNDrpsskjXNACBwMwKRZ3JfbXcwjoQA766poO30RMc6j4eU4nhdLb4pfzUtmQMMBm3R%2BD6Wu4Th4xch4tFZggRxMo3YIpVVLmsS4p14B6WdBU%2BbCxTKuQP%2BDnfO02NL8wkldcjnvqDrZNJ2RLlKbcd%2FOQDTGYIkU5d5TO%2BKKtyrj%2BpuPJ&X-Amz-Signature=d86aa0d7911f63271ac4a4f6eabc5715834957ff5937f97a663498f3445f61be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGPD5P55%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3Jg2pyay9JNfJT%2Bc%2FbNgwoZxccoYSVibnLm4LM%2BSfjwIgJwK0OoqwC4rFS1ndlE4xzxX2ASCqR%2FThUcS8DLZoddIqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmvHq2V78BZaRgq6yrcAyZGNtowFXMKiQN0iGhdQwXe1OnY3R6yQk2bKbc%2B2Dx1EkggZh0rii5ZfvOp9nmluA5fDDZALqKqUXeRiP8foNzQEOZH3hZWIuQv7EVsC8Z%2B3ByhPnv4i%2BegD5wq8Vm6NqzBiZ%2FeEuCZzu8o3mN3D3HITeDuMDV62czZ61O6EkGpbLDjUphiXtWKzZgy3LDPrF1JaN%2FvSn%2FQHwfSSc32C211mB3wm0RoZ6wlcT8zPVOr0bpKmR2snFaoo9lM%2Fy%2F171AbGeEOcJIZ26V59mHPTkAZBk6xcImWSowUp4zF83k1Va4tGj7WM%2BMpyukNGA2z%2FksFQSdzeDoSuwLa8nw%2BWSiM7tb3dRRfOlWV7%2F1waN0qtnbDXmTTSYeRemOoO9urZsXg%2Bpl4AyG135WzlKS465GMLgqtO8pkzIYh94QrHyq3qhczm%2F9cenZgXJS5Fuw8bVxZ76iA1zif9N6MNZeoLy0Wc5MAnya5TGPepSaZ1CsmR1hA2qbXmOyXn0eq8sr7yUslNGt76YJJIYgiLWu5cgPJkQ%2FbuYKxp3fCsd4cE6%2BkYoKS6ZM5FLpT5Kbdbio0M7zoQv7b6fFBcUp%2Fk2Bgljs0yu7hHeryYbiHqJRpqF27ajgO6sdC2KLUVxgzMLi6nb4GOqUBy%2BGYcC5RXUQIRLGc0Rx2GPFXHNPmwhpGt1vLysVoWQxfNDrpsskjXNACBwMwKRZ3JfbXcwjoQA766poO30RMc6j4eU4nhdLb4pfzUtmQMMBm3R%2BD6Wu4Th4xch4tFZggRxMo3YIpVVLmsS4p14B6WdBU%2BbCxTKuQP%2BDnfO02NL8wkldcjnvqDrZNJ2RLlKbcd%2FOQDTGYIkU5d5TO%2BKKtyrj%2BpuPJ&X-Amz-Signature=50e8bf57b979d4f3331b8b68bc4b0d8e45b5db822703130a5576c9f2dfe40d1d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGPD5P55%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3Jg2pyay9JNfJT%2Bc%2FbNgwoZxccoYSVibnLm4LM%2BSfjwIgJwK0OoqwC4rFS1ndlE4xzxX2ASCqR%2FThUcS8DLZoddIqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmvHq2V78BZaRgq6yrcAyZGNtowFXMKiQN0iGhdQwXe1OnY3R6yQk2bKbc%2B2Dx1EkggZh0rii5ZfvOp9nmluA5fDDZALqKqUXeRiP8foNzQEOZH3hZWIuQv7EVsC8Z%2B3ByhPnv4i%2BegD5wq8Vm6NqzBiZ%2FeEuCZzu8o3mN3D3HITeDuMDV62czZ61O6EkGpbLDjUphiXtWKzZgy3LDPrF1JaN%2FvSn%2FQHwfSSc32C211mB3wm0RoZ6wlcT8zPVOr0bpKmR2snFaoo9lM%2Fy%2F171AbGeEOcJIZ26V59mHPTkAZBk6xcImWSowUp4zF83k1Va4tGj7WM%2BMpyukNGA2z%2FksFQSdzeDoSuwLa8nw%2BWSiM7tb3dRRfOlWV7%2F1waN0qtnbDXmTTSYeRemOoO9urZsXg%2Bpl4AyG135WzlKS465GMLgqtO8pkzIYh94QrHyq3qhczm%2F9cenZgXJS5Fuw8bVxZ76iA1zif9N6MNZeoLy0Wc5MAnya5TGPepSaZ1CsmR1hA2qbXmOyXn0eq8sr7yUslNGt76YJJIYgiLWu5cgPJkQ%2FbuYKxp3fCsd4cE6%2BkYoKS6ZM5FLpT5Kbdbio0M7zoQv7b6fFBcUp%2Fk2Bgljs0yu7hHeryYbiHqJRpqF27ajgO6sdC2KLUVxgzMLi6nb4GOqUBy%2BGYcC5RXUQIRLGc0Rx2GPFXHNPmwhpGt1vLysVoWQxfNDrpsskjXNACBwMwKRZ3JfbXcwjoQA766poO30RMc6j4eU4nhdLb4pfzUtmQMMBm3R%2BD6Wu4Th4xch4tFZggRxMo3YIpVVLmsS4p14B6WdBU%2BbCxTKuQP%2BDnfO02NL8wkldcjnvqDrZNJ2RLlKbcd%2FOQDTGYIkU5d5TO%2BKKtyrj%2BpuPJ&X-Amz-Signature=4b87267dface121cbf33fbbf6b3e69545d09b6060d3144d90d44b01723753031&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGPD5P55%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3Jg2pyay9JNfJT%2Bc%2FbNgwoZxccoYSVibnLm4LM%2BSfjwIgJwK0OoqwC4rFS1ndlE4xzxX2ASCqR%2FThUcS8DLZoddIqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmvHq2V78BZaRgq6yrcAyZGNtowFXMKiQN0iGhdQwXe1OnY3R6yQk2bKbc%2B2Dx1EkggZh0rii5ZfvOp9nmluA5fDDZALqKqUXeRiP8foNzQEOZH3hZWIuQv7EVsC8Z%2B3ByhPnv4i%2BegD5wq8Vm6NqzBiZ%2FeEuCZzu8o3mN3D3HITeDuMDV62czZ61O6EkGpbLDjUphiXtWKzZgy3LDPrF1JaN%2FvSn%2FQHwfSSc32C211mB3wm0RoZ6wlcT8zPVOr0bpKmR2snFaoo9lM%2Fy%2F171AbGeEOcJIZ26V59mHPTkAZBk6xcImWSowUp4zF83k1Va4tGj7WM%2BMpyukNGA2z%2FksFQSdzeDoSuwLa8nw%2BWSiM7tb3dRRfOlWV7%2F1waN0qtnbDXmTTSYeRemOoO9urZsXg%2Bpl4AyG135WzlKS465GMLgqtO8pkzIYh94QrHyq3qhczm%2F9cenZgXJS5Fuw8bVxZ76iA1zif9N6MNZeoLy0Wc5MAnya5TGPepSaZ1CsmR1hA2qbXmOyXn0eq8sr7yUslNGt76YJJIYgiLWu5cgPJkQ%2FbuYKxp3fCsd4cE6%2BkYoKS6ZM5FLpT5Kbdbio0M7zoQv7b6fFBcUp%2Fk2Bgljs0yu7hHeryYbiHqJRpqF27ajgO6sdC2KLUVxgzMLi6nb4GOqUBy%2BGYcC5RXUQIRLGc0Rx2GPFXHNPmwhpGt1vLysVoWQxfNDrpsskjXNACBwMwKRZ3JfbXcwjoQA766poO30RMc6j4eU4nhdLb4pfzUtmQMMBm3R%2BD6Wu4Th4xch4tFZggRxMo3YIpVVLmsS4p14B6WdBU%2BbCxTKuQP%2BDnfO02NL8wkldcjnvqDrZNJ2RLlKbcd%2FOQDTGYIkU5d5TO%2BKKtyrj%2BpuPJ&X-Amz-Signature=77b4794e1fb40963399a6352cae876753dd97b4fcd3832e4c15bb3780afd8b13&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGPD5P55%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3Jg2pyay9JNfJT%2Bc%2FbNgwoZxccoYSVibnLm4LM%2BSfjwIgJwK0OoqwC4rFS1ndlE4xzxX2ASCqR%2FThUcS8DLZoddIqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmvHq2V78BZaRgq6yrcAyZGNtowFXMKiQN0iGhdQwXe1OnY3R6yQk2bKbc%2B2Dx1EkggZh0rii5ZfvOp9nmluA5fDDZALqKqUXeRiP8foNzQEOZH3hZWIuQv7EVsC8Z%2B3ByhPnv4i%2BegD5wq8Vm6NqzBiZ%2FeEuCZzu8o3mN3D3HITeDuMDV62czZ61O6EkGpbLDjUphiXtWKzZgy3LDPrF1JaN%2FvSn%2FQHwfSSc32C211mB3wm0RoZ6wlcT8zPVOr0bpKmR2snFaoo9lM%2Fy%2F171AbGeEOcJIZ26V59mHPTkAZBk6xcImWSowUp4zF83k1Va4tGj7WM%2BMpyukNGA2z%2FksFQSdzeDoSuwLa8nw%2BWSiM7tb3dRRfOlWV7%2F1waN0qtnbDXmTTSYeRemOoO9urZsXg%2Bpl4AyG135WzlKS465GMLgqtO8pkzIYh94QrHyq3qhczm%2F9cenZgXJS5Fuw8bVxZ76iA1zif9N6MNZeoLy0Wc5MAnya5TGPepSaZ1CsmR1hA2qbXmOyXn0eq8sr7yUslNGt76YJJIYgiLWu5cgPJkQ%2FbuYKxp3fCsd4cE6%2BkYoKS6ZM5FLpT5Kbdbio0M7zoQv7b6fFBcUp%2Fk2Bgljs0yu7hHeryYbiHqJRpqF27ajgO6sdC2KLUVxgzMLi6nb4GOqUBy%2BGYcC5RXUQIRLGc0Rx2GPFXHNPmwhpGt1vLysVoWQxfNDrpsskjXNACBwMwKRZ3JfbXcwjoQA766poO30RMc6j4eU4nhdLb4pfzUtmQMMBm3R%2BD6Wu4Th4xch4tFZggRxMo3YIpVVLmsS4p14B6WdBU%2BbCxTKuQP%2BDnfO02NL8wkldcjnvqDrZNJ2RLlKbcd%2FOQDTGYIkU5d5TO%2BKKtyrj%2BpuPJ&X-Amz-Signature=cf8fb1eefe2aff59dba9a287d60e20fa967e445caba6dea4452551ab0a4938c0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGPD5P55%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3Jg2pyay9JNfJT%2Bc%2FbNgwoZxccoYSVibnLm4LM%2BSfjwIgJwK0OoqwC4rFS1ndlE4xzxX2ASCqR%2FThUcS8DLZoddIqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmvHq2V78BZaRgq6yrcAyZGNtowFXMKiQN0iGhdQwXe1OnY3R6yQk2bKbc%2B2Dx1EkggZh0rii5ZfvOp9nmluA5fDDZALqKqUXeRiP8foNzQEOZH3hZWIuQv7EVsC8Z%2B3ByhPnv4i%2BegD5wq8Vm6NqzBiZ%2FeEuCZzu8o3mN3D3HITeDuMDV62czZ61O6EkGpbLDjUphiXtWKzZgy3LDPrF1JaN%2FvSn%2FQHwfSSc32C211mB3wm0RoZ6wlcT8zPVOr0bpKmR2snFaoo9lM%2Fy%2F171AbGeEOcJIZ26V59mHPTkAZBk6xcImWSowUp4zF83k1Va4tGj7WM%2BMpyukNGA2z%2FksFQSdzeDoSuwLa8nw%2BWSiM7tb3dRRfOlWV7%2F1waN0qtnbDXmTTSYeRemOoO9urZsXg%2Bpl4AyG135WzlKS465GMLgqtO8pkzIYh94QrHyq3qhczm%2F9cenZgXJS5Fuw8bVxZ76iA1zif9N6MNZeoLy0Wc5MAnya5TGPepSaZ1CsmR1hA2qbXmOyXn0eq8sr7yUslNGt76YJJIYgiLWu5cgPJkQ%2FbuYKxp3fCsd4cE6%2BkYoKS6ZM5FLpT5Kbdbio0M7zoQv7b6fFBcUp%2Fk2Bgljs0yu7hHeryYbiHqJRpqF27ajgO6sdC2KLUVxgzMLi6nb4GOqUBy%2BGYcC5RXUQIRLGc0Rx2GPFXHNPmwhpGt1vLysVoWQxfNDrpsskjXNACBwMwKRZ3JfbXcwjoQA766poO30RMc6j4eU4nhdLb4pfzUtmQMMBm3R%2BD6Wu4Th4xch4tFZggRxMo3YIpVVLmsS4p14B6WdBU%2BbCxTKuQP%2BDnfO02NL8wkldcjnvqDrZNJ2RLlKbcd%2FOQDTGYIkU5d5TO%2BKKtyrj%2BpuPJ&X-Amz-Signature=0e39e3b7972a46ba9d22bd8179c39d4ad3c609d11f73926cc8f818b5306eb12b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGPD5P55%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3Jg2pyay9JNfJT%2Bc%2FbNgwoZxccoYSVibnLm4LM%2BSfjwIgJwK0OoqwC4rFS1ndlE4xzxX2ASCqR%2FThUcS8DLZoddIqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmvHq2V78BZaRgq6yrcAyZGNtowFXMKiQN0iGhdQwXe1OnY3R6yQk2bKbc%2B2Dx1EkggZh0rii5ZfvOp9nmluA5fDDZALqKqUXeRiP8foNzQEOZH3hZWIuQv7EVsC8Z%2B3ByhPnv4i%2BegD5wq8Vm6NqzBiZ%2FeEuCZzu8o3mN3D3HITeDuMDV62czZ61O6EkGpbLDjUphiXtWKzZgy3LDPrF1JaN%2FvSn%2FQHwfSSc32C211mB3wm0RoZ6wlcT8zPVOr0bpKmR2snFaoo9lM%2Fy%2F171AbGeEOcJIZ26V59mHPTkAZBk6xcImWSowUp4zF83k1Va4tGj7WM%2BMpyukNGA2z%2FksFQSdzeDoSuwLa8nw%2BWSiM7tb3dRRfOlWV7%2F1waN0qtnbDXmTTSYeRemOoO9urZsXg%2Bpl4AyG135WzlKS465GMLgqtO8pkzIYh94QrHyq3qhczm%2F9cenZgXJS5Fuw8bVxZ76iA1zif9N6MNZeoLy0Wc5MAnya5TGPepSaZ1CsmR1hA2qbXmOyXn0eq8sr7yUslNGt76YJJIYgiLWu5cgPJkQ%2FbuYKxp3fCsd4cE6%2BkYoKS6ZM5FLpT5Kbdbio0M7zoQv7b6fFBcUp%2Fk2Bgljs0yu7hHeryYbiHqJRpqF27ajgO6sdC2KLUVxgzMLi6nb4GOqUBy%2BGYcC5RXUQIRLGc0Rx2GPFXHNPmwhpGt1vLysVoWQxfNDrpsskjXNACBwMwKRZ3JfbXcwjoQA766poO30RMc6j4eU4nhdLb4pfzUtmQMMBm3R%2BD6Wu4Th4xch4tFZggRxMo3YIpVVLmsS4p14B6WdBU%2BbCxTKuQP%2BDnfO02NL8wkldcjnvqDrZNJ2RLlKbcd%2FOQDTGYIkU5d5TO%2BKKtyrj%2BpuPJ&X-Amz-Signature=b727cc293937c6d9e43a9c0230a6998168541786325d0c9168be6ec8e0759ef7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
