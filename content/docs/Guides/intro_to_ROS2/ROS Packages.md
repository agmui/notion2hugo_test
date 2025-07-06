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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DFARM3J%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIFkyUrKTGGhJTdHe7cyn8Ovavv%2FhDfdLaJzfGOas5qAgAiEAoQ6Xc73HlWwBOr0woBXZaOV8v48D6gr5Gw1QMlzNIbkq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMNyHPWhevXaeEDuSSrcAyhutN8us%2BA%2BKnc93mAbfEu7ylZNFmMLO8wMZD2UpR7JI%2BEKs7dlc8oehj%2BFYDJB%2Bqs4xb20C7J3LeZQJgvBHHDvObjLcm%2Fvg%2FE4ukVCjBLwJF3f0uKtUVFDDM7FY%2FqANHHz3as0eZ7jpDgC1j6b0gScjbbkexjccmQ%2Bm1NjjBGWBm%2FCj9MVuGDjmcALDwYfYSRSG47HuN4M2sVYp%2FOPgpbXbw7MIsnl1Q0PCgOpZ8eF6FNbTfQFnV9LFJo9sdBg8dVhyNlENhLBQTeIq163PJ696WqtIWSoXbB5n5MAS%2B9sjEtlaMpxP9qWL9%2FbUBiCBLiO0Re%2FaKmcXycNCOPZnD9bhouELcYbtKqfkIlxq68dAO5S4munNIzhiTG6X5cl4ADyZutn2251BDmIpVx12WMjkDNkYRyCFpHwisFj0XDZmGQvpJoMHtJLE7nmxTb5dDseVCOpjlgkDEl7s8oKwR67AonxT%2FzmaAeJIpaxqKBGWi47g3tVjsz8VHfLjVFkGltoOTaykwAzxKPThXgeKRFJjsKGvhLpWrqmTlQcoROmuE%2F5pAl1RfP7DvCjNnOg0FS26SbJqZXmzQhhe3NClkh7au37aON80wHqF5ZAN%2BR9TnORpnhcgR5mDKSlMPmCp8MGOqUBrbmio1xJ3EJSGv0f2GrnjQPCrmmQAcgddakVpU6hJIjQwc7TAzVLcCufG8Iuk5CXVgstx%2BxGoW8v%2BMcHZsfrqi3Cl%2FsiQg0CsuPy1%2BTaQqloxZnoI%2FUaJel%2F0ID4c3Bl7flmF%2BaDGY6zFV0jYN7IyE7s5XzIiKdNgQGsSy%2BthRNXtxasE1uXJm0gI81gLdGSNE9knjXsgKBj3xvi%2B7v7fnh3Oqbm&X-Amz-Signature=365981ade5b823ba0819f575a10c26e5abd0d2853ca5807d7314085f881176f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DFARM3J%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIFkyUrKTGGhJTdHe7cyn8Ovavv%2FhDfdLaJzfGOas5qAgAiEAoQ6Xc73HlWwBOr0woBXZaOV8v48D6gr5Gw1QMlzNIbkq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMNyHPWhevXaeEDuSSrcAyhutN8us%2BA%2BKnc93mAbfEu7ylZNFmMLO8wMZD2UpR7JI%2BEKs7dlc8oehj%2BFYDJB%2Bqs4xb20C7J3LeZQJgvBHHDvObjLcm%2Fvg%2FE4ukVCjBLwJF3f0uKtUVFDDM7FY%2FqANHHz3as0eZ7jpDgC1j6b0gScjbbkexjccmQ%2Bm1NjjBGWBm%2FCj9MVuGDjmcALDwYfYSRSG47HuN4M2sVYp%2FOPgpbXbw7MIsnl1Q0PCgOpZ8eF6FNbTfQFnV9LFJo9sdBg8dVhyNlENhLBQTeIq163PJ696WqtIWSoXbB5n5MAS%2B9sjEtlaMpxP9qWL9%2FbUBiCBLiO0Re%2FaKmcXycNCOPZnD9bhouELcYbtKqfkIlxq68dAO5S4munNIzhiTG6X5cl4ADyZutn2251BDmIpVx12WMjkDNkYRyCFpHwisFj0XDZmGQvpJoMHtJLE7nmxTb5dDseVCOpjlgkDEl7s8oKwR67AonxT%2FzmaAeJIpaxqKBGWi47g3tVjsz8VHfLjVFkGltoOTaykwAzxKPThXgeKRFJjsKGvhLpWrqmTlQcoROmuE%2F5pAl1RfP7DvCjNnOg0FS26SbJqZXmzQhhe3NClkh7au37aON80wHqF5ZAN%2BR9TnORpnhcgR5mDKSlMPmCp8MGOqUBrbmio1xJ3EJSGv0f2GrnjQPCrmmQAcgddakVpU6hJIjQwc7TAzVLcCufG8Iuk5CXVgstx%2BxGoW8v%2BMcHZsfrqi3Cl%2FsiQg0CsuPy1%2BTaQqloxZnoI%2FUaJel%2F0ID4c3Bl7flmF%2BaDGY6zFV0jYN7IyE7s5XzIiKdNgQGsSy%2BthRNXtxasE1uXJm0gI81gLdGSNE9knjXsgKBj3xvi%2B7v7fnh3Oqbm&X-Amz-Signature=5a7a4f47d4e89f1742d8a0312be40875e5f308ec8e7ce9ac489a537e1d5a9d5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DFARM3J%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIFkyUrKTGGhJTdHe7cyn8Ovavv%2FhDfdLaJzfGOas5qAgAiEAoQ6Xc73HlWwBOr0woBXZaOV8v48D6gr5Gw1QMlzNIbkq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMNyHPWhevXaeEDuSSrcAyhutN8us%2BA%2BKnc93mAbfEu7ylZNFmMLO8wMZD2UpR7JI%2BEKs7dlc8oehj%2BFYDJB%2Bqs4xb20C7J3LeZQJgvBHHDvObjLcm%2Fvg%2FE4ukVCjBLwJF3f0uKtUVFDDM7FY%2FqANHHz3as0eZ7jpDgC1j6b0gScjbbkexjccmQ%2Bm1NjjBGWBm%2FCj9MVuGDjmcALDwYfYSRSG47HuN4M2sVYp%2FOPgpbXbw7MIsnl1Q0PCgOpZ8eF6FNbTfQFnV9LFJo9sdBg8dVhyNlENhLBQTeIq163PJ696WqtIWSoXbB5n5MAS%2B9sjEtlaMpxP9qWL9%2FbUBiCBLiO0Re%2FaKmcXycNCOPZnD9bhouELcYbtKqfkIlxq68dAO5S4munNIzhiTG6X5cl4ADyZutn2251BDmIpVx12WMjkDNkYRyCFpHwisFj0XDZmGQvpJoMHtJLE7nmxTb5dDseVCOpjlgkDEl7s8oKwR67AonxT%2FzmaAeJIpaxqKBGWi47g3tVjsz8VHfLjVFkGltoOTaykwAzxKPThXgeKRFJjsKGvhLpWrqmTlQcoROmuE%2F5pAl1RfP7DvCjNnOg0FS26SbJqZXmzQhhe3NClkh7au37aON80wHqF5ZAN%2BR9TnORpnhcgR5mDKSlMPmCp8MGOqUBrbmio1xJ3EJSGv0f2GrnjQPCrmmQAcgddakVpU6hJIjQwc7TAzVLcCufG8Iuk5CXVgstx%2BxGoW8v%2BMcHZsfrqi3Cl%2FsiQg0CsuPy1%2BTaQqloxZnoI%2FUaJel%2F0ID4c3Bl7flmF%2BaDGY6zFV0jYN7IyE7s5XzIiKdNgQGsSy%2BthRNXtxasE1uXJm0gI81gLdGSNE9knjXsgKBj3xvi%2B7v7fnh3Oqbm&X-Amz-Signature=215caaa5abd7ec9b0e4e66678cb9a14d4fd1df2622cf56eb3bf31fa957d5a974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DFARM3J%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIFkyUrKTGGhJTdHe7cyn8Ovavv%2FhDfdLaJzfGOas5qAgAiEAoQ6Xc73HlWwBOr0woBXZaOV8v48D6gr5Gw1QMlzNIbkq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMNyHPWhevXaeEDuSSrcAyhutN8us%2BA%2BKnc93mAbfEu7ylZNFmMLO8wMZD2UpR7JI%2BEKs7dlc8oehj%2BFYDJB%2Bqs4xb20C7J3LeZQJgvBHHDvObjLcm%2Fvg%2FE4ukVCjBLwJF3f0uKtUVFDDM7FY%2FqANHHz3as0eZ7jpDgC1j6b0gScjbbkexjccmQ%2Bm1NjjBGWBm%2FCj9MVuGDjmcALDwYfYSRSG47HuN4M2sVYp%2FOPgpbXbw7MIsnl1Q0PCgOpZ8eF6FNbTfQFnV9LFJo9sdBg8dVhyNlENhLBQTeIq163PJ696WqtIWSoXbB5n5MAS%2B9sjEtlaMpxP9qWL9%2FbUBiCBLiO0Re%2FaKmcXycNCOPZnD9bhouELcYbtKqfkIlxq68dAO5S4munNIzhiTG6X5cl4ADyZutn2251BDmIpVx12WMjkDNkYRyCFpHwisFj0XDZmGQvpJoMHtJLE7nmxTb5dDseVCOpjlgkDEl7s8oKwR67AonxT%2FzmaAeJIpaxqKBGWi47g3tVjsz8VHfLjVFkGltoOTaykwAzxKPThXgeKRFJjsKGvhLpWrqmTlQcoROmuE%2F5pAl1RfP7DvCjNnOg0FS26SbJqZXmzQhhe3NClkh7au37aON80wHqF5ZAN%2BR9TnORpnhcgR5mDKSlMPmCp8MGOqUBrbmio1xJ3EJSGv0f2GrnjQPCrmmQAcgddakVpU6hJIjQwc7TAzVLcCufG8Iuk5CXVgstx%2BxGoW8v%2BMcHZsfrqi3Cl%2FsiQg0CsuPy1%2BTaQqloxZnoI%2FUaJel%2F0ID4c3Bl7flmF%2BaDGY6zFV0jYN7IyE7s5XzIiKdNgQGsSy%2BthRNXtxasE1uXJm0gI81gLdGSNE9knjXsgKBj3xvi%2B7v7fnh3Oqbm&X-Amz-Signature=d891fe7de1bb43531666251841cdcce0ca9f639b2f481895876ef3ebba8ae0cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DFARM3J%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIFkyUrKTGGhJTdHe7cyn8Ovavv%2FhDfdLaJzfGOas5qAgAiEAoQ6Xc73HlWwBOr0woBXZaOV8v48D6gr5Gw1QMlzNIbkq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMNyHPWhevXaeEDuSSrcAyhutN8us%2BA%2BKnc93mAbfEu7ylZNFmMLO8wMZD2UpR7JI%2BEKs7dlc8oehj%2BFYDJB%2Bqs4xb20C7J3LeZQJgvBHHDvObjLcm%2Fvg%2FE4ukVCjBLwJF3f0uKtUVFDDM7FY%2FqANHHz3as0eZ7jpDgC1j6b0gScjbbkexjccmQ%2Bm1NjjBGWBm%2FCj9MVuGDjmcALDwYfYSRSG47HuN4M2sVYp%2FOPgpbXbw7MIsnl1Q0PCgOpZ8eF6FNbTfQFnV9LFJo9sdBg8dVhyNlENhLBQTeIq163PJ696WqtIWSoXbB5n5MAS%2B9sjEtlaMpxP9qWL9%2FbUBiCBLiO0Re%2FaKmcXycNCOPZnD9bhouELcYbtKqfkIlxq68dAO5S4munNIzhiTG6X5cl4ADyZutn2251BDmIpVx12WMjkDNkYRyCFpHwisFj0XDZmGQvpJoMHtJLE7nmxTb5dDseVCOpjlgkDEl7s8oKwR67AonxT%2FzmaAeJIpaxqKBGWi47g3tVjsz8VHfLjVFkGltoOTaykwAzxKPThXgeKRFJjsKGvhLpWrqmTlQcoROmuE%2F5pAl1RfP7DvCjNnOg0FS26SbJqZXmzQhhe3NClkh7au37aON80wHqF5ZAN%2BR9TnORpnhcgR5mDKSlMPmCp8MGOqUBrbmio1xJ3EJSGv0f2GrnjQPCrmmQAcgddakVpU6hJIjQwc7TAzVLcCufG8Iuk5CXVgstx%2BxGoW8v%2BMcHZsfrqi3Cl%2FsiQg0CsuPy1%2BTaQqloxZnoI%2FUaJel%2F0ID4c3Bl7flmF%2BaDGY6zFV0jYN7IyE7s5XzIiKdNgQGsSy%2BthRNXtxasE1uXJm0gI81gLdGSNE9knjXsgKBj3xvi%2B7v7fnh3Oqbm&X-Amz-Signature=a95d50caa0ac80a2649421776780194d7983fb96089dab742e1c7a22827fcadb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DFARM3J%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIFkyUrKTGGhJTdHe7cyn8Ovavv%2FhDfdLaJzfGOas5qAgAiEAoQ6Xc73HlWwBOr0woBXZaOV8v48D6gr5Gw1QMlzNIbkq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMNyHPWhevXaeEDuSSrcAyhutN8us%2BA%2BKnc93mAbfEu7ylZNFmMLO8wMZD2UpR7JI%2BEKs7dlc8oehj%2BFYDJB%2Bqs4xb20C7J3LeZQJgvBHHDvObjLcm%2Fvg%2FE4ukVCjBLwJF3f0uKtUVFDDM7FY%2FqANHHz3as0eZ7jpDgC1j6b0gScjbbkexjccmQ%2Bm1NjjBGWBm%2FCj9MVuGDjmcALDwYfYSRSG47HuN4M2sVYp%2FOPgpbXbw7MIsnl1Q0PCgOpZ8eF6FNbTfQFnV9LFJo9sdBg8dVhyNlENhLBQTeIq163PJ696WqtIWSoXbB5n5MAS%2B9sjEtlaMpxP9qWL9%2FbUBiCBLiO0Re%2FaKmcXycNCOPZnD9bhouELcYbtKqfkIlxq68dAO5S4munNIzhiTG6X5cl4ADyZutn2251BDmIpVx12WMjkDNkYRyCFpHwisFj0XDZmGQvpJoMHtJLE7nmxTb5dDseVCOpjlgkDEl7s8oKwR67AonxT%2FzmaAeJIpaxqKBGWi47g3tVjsz8VHfLjVFkGltoOTaykwAzxKPThXgeKRFJjsKGvhLpWrqmTlQcoROmuE%2F5pAl1RfP7DvCjNnOg0FS26SbJqZXmzQhhe3NClkh7au37aON80wHqF5ZAN%2BR9TnORpnhcgR5mDKSlMPmCp8MGOqUBrbmio1xJ3EJSGv0f2GrnjQPCrmmQAcgddakVpU6hJIjQwc7TAzVLcCufG8Iuk5CXVgstx%2BxGoW8v%2BMcHZsfrqi3Cl%2FsiQg0CsuPy1%2BTaQqloxZnoI%2FUaJel%2F0ID4c3Bl7flmF%2BaDGY6zFV0jYN7IyE7s5XzIiKdNgQGsSy%2BthRNXtxasE1uXJm0gI81gLdGSNE9knjXsgKBj3xvi%2B7v7fnh3Oqbm&X-Amz-Signature=26c789ed0b69cc849f374fae87718406f9bf8fc94bf48fdd7a6f5d476e994bd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DFARM3J%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIFkyUrKTGGhJTdHe7cyn8Ovavv%2FhDfdLaJzfGOas5qAgAiEAoQ6Xc73HlWwBOr0woBXZaOV8v48D6gr5Gw1QMlzNIbkq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMNyHPWhevXaeEDuSSrcAyhutN8us%2BA%2BKnc93mAbfEu7ylZNFmMLO8wMZD2UpR7JI%2BEKs7dlc8oehj%2BFYDJB%2Bqs4xb20C7J3LeZQJgvBHHDvObjLcm%2Fvg%2FE4ukVCjBLwJF3f0uKtUVFDDM7FY%2FqANHHz3as0eZ7jpDgC1j6b0gScjbbkexjccmQ%2Bm1NjjBGWBm%2FCj9MVuGDjmcALDwYfYSRSG47HuN4M2sVYp%2FOPgpbXbw7MIsnl1Q0PCgOpZ8eF6FNbTfQFnV9LFJo9sdBg8dVhyNlENhLBQTeIq163PJ696WqtIWSoXbB5n5MAS%2B9sjEtlaMpxP9qWL9%2FbUBiCBLiO0Re%2FaKmcXycNCOPZnD9bhouELcYbtKqfkIlxq68dAO5S4munNIzhiTG6X5cl4ADyZutn2251BDmIpVx12WMjkDNkYRyCFpHwisFj0XDZmGQvpJoMHtJLE7nmxTb5dDseVCOpjlgkDEl7s8oKwR67AonxT%2FzmaAeJIpaxqKBGWi47g3tVjsz8VHfLjVFkGltoOTaykwAzxKPThXgeKRFJjsKGvhLpWrqmTlQcoROmuE%2F5pAl1RfP7DvCjNnOg0FS26SbJqZXmzQhhe3NClkh7au37aON80wHqF5ZAN%2BR9TnORpnhcgR5mDKSlMPmCp8MGOqUBrbmio1xJ3EJSGv0f2GrnjQPCrmmQAcgddakVpU6hJIjQwc7TAzVLcCufG8Iuk5CXVgstx%2BxGoW8v%2BMcHZsfrqi3Cl%2FsiQg0CsuPy1%2BTaQqloxZnoI%2FUaJel%2F0ID4c3Bl7flmF%2BaDGY6zFV0jYN7IyE7s5XzIiKdNgQGsSy%2BthRNXtxasE1uXJm0gI81gLdGSNE9knjXsgKBj3xvi%2B7v7fnh3Oqbm&X-Amz-Signature=3fbbc92e0244265240da3e07f99bb0aa7eaf0bce878c6ab634b77e85a8cebcb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
