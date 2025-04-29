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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KT2TFOL%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAd9aH3G1ZWq3yXqbewPYe5CBrZULDwkWTjjxL4nwlxbAiEA8E1SpOUCfMDo5e4s2CUrvGOKO2aKo0TWErSgxM%2F1lIQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwv8RTAWmd%2FX3JFOSrcA8nqRh2aHN%2F7hOudQuCg%2FpId204v191991kRYBSrBeaCp4rdvO9cXXlWT%2BIkZFii%2BvBRiSSb5XFXFCjCZPibxqcy4gQSIbZYN5VjYi4iSw0vBFA3Jn1Cyq5xvK2KydjVNRE0g%2BsRIZswqOfW8OaPooZuJ900EFucuKBeS3Nz7Z2vVcQ%2BEMHxztqi6%2FI9wjddTNRFOeODYLoLL7VLLrJExN0lc3u0yv9hX17Pj5ibq087XKOnTS69pUfZ7pHAFQiVculy0D56pI8IP3WSvQk%2BYlYxP510djuZx2RCBIOG9mFs7fwDFE88a61OjpKFrhaWppDr09SWLk5gy%2FX4HDi0vo7wqz0iDsxcIm7x72xKeL2NlmyAPvTvvs34dCAts8NZp0hDvJXxX1Ls1q2eheCC8x8OQV%2BQdTEK6yvvnKmAVYIl11QA0G2DCW4kSEXDiKwc9e4CpsSLX4uWlgk3rQpLZSrtIvo7K%2BYFVzLpn%2FzmGDARNzbJZi1ls5s2EzoAq3%2FHvf9WHIhAgREePdW1GupDnGnqC2AsETVcDF5Pu7r%2F%2BBXdPppqvQSb4ItIY4ur33SD8TdI6wfqcYfXDEMTyN5SrzVB3gyAw0mg%2FrK%2FgVDIAc%2FPFICWZ64ZC0LlWQNNMMrfwsAGOqUBIztdoVVwnMCy%2BhbFwnomfDaZElLt%2Bkan2GPl8rdofwCHVFbN42VBZV1BoVbP5S87Z5gMT98%2F6RxtPVqQSOMItxqMGuLvjj8LxTAvnYrwXdaJ%2B5CVu6iVRHaHhGfctkyO2MMVwcZpg6f8M%2F6cYCnNFsyFoJyJ34eIHY1qTpaR60qgrrYxeO%2FIpzTS0MHXaPacSf3AKwuCk%2BZmzYcxv9q%2F%2BEMbZE3w&X-Amz-Signature=1cc8f2641b5706d0e5927ab28694d12ed8116d6b5199c0adbecb1f1de89c7629&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KT2TFOL%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAd9aH3G1ZWq3yXqbewPYe5CBrZULDwkWTjjxL4nwlxbAiEA8E1SpOUCfMDo5e4s2CUrvGOKO2aKo0TWErSgxM%2F1lIQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwv8RTAWmd%2FX3JFOSrcA8nqRh2aHN%2F7hOudQuCg%2FpId204v191991kRYBSrBeaCp4rdvO9cXXlWT%2BIkZFii%2BvBRiSSb5XFXFCjCZPibxqcy4gQSIbZYN5VjYi4iSw0vBFA3Jn1Cyq5xvK2KydjVNRE0g%2BsRIZswqOfW8OaPooZuJ900EFucuKBeS3Nz7Z2vVcQ%2BEMHxztqi6%2FI9wjddTNRFOeODYLoLL7VLLrJExN0lc3u0yv9hX17Pj5ibq087XKOnTS69pUfZ7pHAFQiVculy0D56pI8IP3WSvQk%2BYlYxP510djuZx2RCBIOG9mFs7fwDFE88a61OjpKFrhaWppDr09SWLk5gy%2FX4HDi0vo7wqz0iDsxcIm7x72xKeL2NlmyAPvTvvs34dCAts8NZp0hDvJXxX1Ls1q2eheCC8x8OQV%2BQdTEK6yvvnKmAVYIl11QA0G2DCW4kSEXDiKwc9e4CpsSLX4uWlgk3rQpLZSrtIvo7K%2BYFVzLpn%2FzmGDARNzbJZi1ls5s2EzoAq3%2FHvf9WHIhAgREePdW1GupDnGnqC2AsETVcDF5Pu7r%2F%2BBXdPppqvQSb4ItIY4ur33SD8TdI6wfqcYfXDEMTyN5SrzVB3gyAw0mg%2FrK%2FgVDIAc%2FPFICWZ64ZC0LlWQNNMMrfwsAGOqUBIztdoVVwnMCy%2BhbFwnomfDaZElLt%2Bkan2GPl8rdofwCHVFbN42VBZV1BoVbP5S87Z5gMT98%2F6RxtPVqQSOMItxqMGuLvjj8LxTAvnYrwXdaJ%2B5CVu6iVRHaHhGfctkyO2MMVwcZpg6f8M%2F6cYCnNFsyFoJyJ34eIHY1qTpaR60qgrrYxeO%2FIpzTS0MHXaPacSf3AKwuCk%2BZmzYcxv9q%2F%2BEMbZE3w&X-Amz-Signature=c1c30c957df72e704641f77bd2fb4ad214787f3d0d01d3f03a1e62598f1da0ee&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KT2TFOL%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAd9aH3G1ZWq3yXqbewPYe5CBrZULDwkWTjjxL4nwlxbAiEA8E1SpOUCfMDo5e4s2CUrvGOKO2aKo0TWErSgxM%2F1lIQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwv8RTAWmd%2FX3JFOSrcA8nqRh2aHN%2F7hOudQuCg%2FpId204v191991kRYBSrBeaCp4rdvO9cXXlWT%2BIkZFii%2BvBRiSSb5XFXFCjCZPibxqcy4gQSIbZYN5VjYi4iSw0vBFA3Jn1Cyq5xvK2KydjVNRE0g%2BsRIZswqOfW8OaPooZuJ900EFucuKBeS3Nz7Z2vVcQ%2BEMHxztqi6%2FI9wjddTNRFOeODYLoLL7VLLrJExN0lc3u0yv9hX17Pj5ibq087XKOnTS69pUfZ7pHAFQiVculy0D56pI8IP3WSvQk%2BYlYxP510djuZx2RCBIOG9mFs7fwDFE88a61OjpKFrhaWppDr09SWLk5gy%2FX4HDi0vo7wqz0iDsxcIm7x72xKeL2NlmyAPvTvvs34dCAts8NZp0hDvJXxX1Ls1q2eheCC8x8OQV%2BQdTEK6yvvnKmAVYIl11QA0G2DCW4kSEXDiKwc9e4CpsSLX4uWlgk3rQpLZSrtIvo7K%2BYFVzLpn%2FzmGDARNzbJZi1ls5s2EzoAq3%2FHvf9WHIhAgREePdW1GupDnGnqC2AsETVcDF5Pu7r%2F%2BBXdPppqvQSb4ItIY4ur33SD8TdI6wfqcYfXDEMTyN5SrzVB3gyAw0mg%2FrK%2FgVDIAc%2FPFICWZ64ZC0LlWQNNMMrfwsAGOqUBIztdoVVwnMCy%2BhbFwnomfDaZElLt%2Bkan2GPl8rdofwCHVFbN42VBZV1BoVbP5S87Z5gMT98%2F6RxtPVqQSOMItxqMGuLvjj8LxTAvnYrwXdaJ%2B5CVu6iVRHaHhGfctkyO2MMVwcZpg6f8M%2F6cYCnNFsyFoJyJ34eIHY1qTpaR60qgrrYxeO%2FIpzTS0MHXaPacSf3AKwuCk%2BZmzYcxv9q%2F%2BEMbZE3w&X-Amz-Signature=ffea8f510675020408817e9901e22c9f289bc97ab86ce46095f8419765257de6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KT2TFOL%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAd9aH3G1ZWq3yXqbewPYe5CBrZULDwkWTjjxL4nwlxbAiEA8E1SpOUCfMDo5e4s2CUrvGOKO2aKo0TWErSgxM%2F1lIQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwv8RTAWmd%2FX3JFOSrcA8nqRh2aHN%2F7hOudQuCg%2FpId204v191991kRYBSrBeaCp4rdvO9cXXlWT%2BIkZFii%2BvBRiSSb5XFXFCjCZPibxqcy4gQSIbZYN5VjYi4iSw0vBFA3Jn1Cyq5xvK2KydjVNRE0g%2BsRIZswqOfW8OaPooZuJ900EFucuKBeS3Nz7Z2vVcQ%2BEMHxztqi6%2FI9wjddTNRFOeODYLoLL7VLLrJExN0lc3u0yv9hX17Pj5ibq087XKOnTS69pUfZ7pHAFQiVculy0D56pI8IP3WSvQk%2BYlYxP510djuZx2RCBIOG9mFs7fwDFE88a61OjpKFrhaWppDr09SWLk5gy%2FX4HDi0vo7wqz0iDsxcIm7x72xKeL2NlmyAPvTvvs34dCAts8NZp0hDvJXxX1Ls1q2eheCC8x8OQV%2BQdTEK6yvvnKmAVYIl11QA0G2DCW4kSEXDiKwc9e4CpsSLX4uWlgk3rQpLZSrtIvo7K%2BYFVzLpn%2FzmGDARNzbJZi1ls5s2EzoAq3%2FHvf9WHIhAgREePdW1GupDnGnqC2AsETVcDF5Pu7r%2F%2BBXdPppqvQSb4ItIY4ur33SD8TdI6wfqcYfXDEMTyN5SrzVB3gyAw0mg%2FrK%2FgVDIAc%2FPFICWZ64ZC0LlWQNNMMrfwsAGOqUBIztdoVVwnMCy%2BhbFwnomfDaZElLt%2Bkan2GPl8rdofwCHVFbN42VBZV1BoVbP5S87Z5gMT98%2F6RxtPVqQSOMItxqMGuLvjj8LxTAvnYrwXdaJ%2B5CVu6iVRHaHhGfctkyO2MMVwcZpg6f8M%2F6cYCnNFsyFoJyJ34eIHY1qTpaR60qgrrYxeO%2FIpzTS0MHXaPacSf3AKwuCk%2BZmzYcxv9q%2F%2BEMbZE3w&X-Amz-Signature=fa6aa9f1f3dfb41f4aa742545bb08928206cf2738c197f6ecabd20fb421bd7ba&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KT2TFOL%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAd9aH3G1ZWq3yXqbewPYe5CBrZULDwkWTjjxL4nwlxbAiEA8E1SpOUCfMDo5e4s2CUrvGOKO2aKo0TWErSgxM%2F1lIQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwv8RTAWmd%2FX3JFOSrcA8nqRh2aHN%2F7hOudQuCg%2FpId204v191991kRYBSrBeaCp4rdvO9cXXlWT%2BIkZFii%2BvBRiSSb5XFXFCjCZPibxqcy4gQSIbZYN5VjYi4iSw0vBFA3Jn1Cyq5xvK2KydjVNRE0g%2BsRIZswqOfW8OaPooZuJ900EFucuKBeS3Nz7Z2vVcQ%2BEMHxztqi6%2FI9wjddTNRFOeODYLoLL7VLLrJExN0lc3u0yv9hX17Pj5ibq087XKOnTS69pUfZ7pHAFQiVculy0D56pI8IP3WSvQk%2BYlYxP510djuZx2RCBIOG9mFs7fwDFE88a61OjpKFrhaWppDr09SWLk5gy%2FX4HDi0vo7wqz0iDsxcIm7x72xKeL2NlmyAPvTvvs34dCAts8NZp0hDvJXxX1Ls1q2eheCC8x8OQV%2BQdTEK6yvvnKmAVYIl11QA0G2DCW4kSEXDiKwc9e4CpsSLX4uWlgk3rQpLZSrtIvo7K%2BYFVzLpn%2FzmGDARNzbJZi1ls5s2EzoAq3%2FHvf9WHIhAgREePdW1GupDnGnqC2AsETVcDF5Pu7r%2F%2BBXdPppqvQSb4ItIY4ur33SD8TdI6wfqcYfXDEMTyN5SrzVB3gyAw0mg%2FrK%2FgVDIAc%2FPFICWZ64ZC0LlWQNNMMrfwsAGOqUBIztdoVVwnMCy%2BhbFwnomfDaZElLt%2Bkan2GPl8rdofwCHVFbN42VBZV1BoVbP5S87Z5gMT98%2F6RxtPVqQSOMItxqMGuLvjj8LxTAvnYrwXdaJ%2B5CVu6iVRHaHhGfctkyO2MMVwcZpg6f8M%2F6cYCnNFsyFoJyJ34eIHY1qTpaR60qgrrYxeO%2FIpzTS0MHXaPacSf3AKwuCk%2BZmzYcxv9q%2F%2BEMbZE3w&X-Amz-Signature=f3209abdc3b26fc94eed002862250050601351d80ecf32196c967cbd4405ebe5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KT2TFOL%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAd9aH3G1ZWq3yXqbewPYe5CBrZULDwkWTjjxL4nwlxbAiEA8E1SpOUCfMDo5e4s2CUrvGOKO2aKo0TWErSgxM%2F1lIQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwv8RTAWmd%2FX3JFOSrcA8nqRh2aHN%2F7hOudQuCg%2FpId204v191991kRYBSrBeaCp4rdvO9cXXlWT%2BIkZFii%2BvBRiSSb5XFXFCjCZPibxqcy4gQSIbZYN5VjYi4iSw0vBFA3Jn1Cyq5xvK2KydjVNRE0g%2BsRIZswqOfW8OaPooZuJ900EFucuKBeS3Nz7Z2vVcQ%2BEMHxztqi6%2FI9wjddTNRFOeODYLoLL7VLLrJExN0lc3u0yv9hX17Pj5ibq087XKOnTS69pUfZ7pHAFQiVculy0D56pI8IP3WSvQk%2BYlYxP510djuZx2RCBIOG9mFs7fwDFE88a61OjpKFrhaWppDr09SWLk5gy%2FX4HDi0vo7wqz0iDsxcIm7x72xKeL2NlmyAPvTvvs34dCAts8NZp0hDvJXxX1Ls1q2eheCC8x8OQV%2BQdTEK6yvvnKmAVYIl11QA0G2DCW4kSEXDiKwc9e4CpsSLX4uWlgk3rQpLZSrtIvo7K%2BYFVzLpn%2FzmGDARNzbJZi1ls5s2EzoAq3%2FHvf9WHIhAgREePdW1GupDnGnqC2AsETVcDF5Pu7r%2F%2BBXdPppqvQSb4ItIY4ur33SD8TdI6wfqcYfXDEMTyN5SrzVB3gyAw0mg%2FrK%2FgVDIAc%2FPFICWZ64ZC0LlWQNNMMrfwsAGOqUBIztdoVVwnMCy%2BhbFwnomfDaZElLt%2Bkan2GPl8rdofwCHVFbN42VBZV1BoVbP5S87Z5gMT98%2F6RxtPVqQSOMItxqMGuLvjj8LxTAvnYrwXdaJ%2B5CVu6iVRHaHhGfctkyO2MMVwcZpg6f8M%2F6cYCnNFsyFoJyJ34eIHY1qTpaR60qgrrYxeO%2FIpzTS0MHXaPacSf3AKwuCk%2BZmzYcxv9q%2F%2BEMbZE3w&X-Amz-Signature=2aa6e1daab087356a1e49ef59157aa811c4197890aea9198282e396c311cea29&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KT2TFOL%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAd9aH3G1ZWq3yXqbewPYe5CBrZULDwkWTjjxL4nwlxbAiEA8E1SpOUCfMDo5e4s2CUrvGOKO2aKo0TWErSgxM%2F1lIQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwv8RTAWmd%2FX3JFOSrcA8nqRh2aHN%2F7hOudQuCg%2FpId204v191991kRYBSrBeaCp4rdvO9cXXlWT%2BIkZFii%2BvBRiSSb5XFXFCjCZPibxqcy4gQSIbZYN5VjYi4iSw0vBFA3Jn1Cyq5xvK2KydjVNRE0g%2BsRIZswqOfW8OaPooZuJ900EFucuKBeS3Nz7Z2vVcQ%2BEMHxztqi6%2FI9wjddTNRFOeODYLoLL7VLLrJExN0lc3u0yv9hX17Pj5ibq087XKOnTS69pUfZ7pHAFQiVculy0D56pI8IP3WSvQk%2BYlYxP510djuZx2RCBIOG9mFs7fwDFE88a61OjpKFrhaWppDr09SWLk5gy%2FX4HDi0vo7wqz0iDsxcIm7x72xKeL2NlmyAPvTvvs34dCAts8NZp0hDvJXxX1Ls1q2eheCC8x8OQV%2BQdTEK6yvvnKmAVYIl11QA0G2DCW4kSEXDiKwc9e4CpsSLX4uWlgk3rQpLZSrtIvo7K%2BYFVzLpn%2FzmGDARNzbJZi1ls5s2EzoAq3%2FHvf9WHIhAgREePdW1GupDnGnqC2AsETVcDF5Pu7r%2F%2BBXdPppqvQSb4ItIY4ur33SD8TdI6wfqcYfXDEMTyN5SrzVB3gyAw0mg%2FrK%2FgVDIAc%2FPFICWZ64ZC0LlWQNNMMrfwsAGOqUBIztdoVVwnMCy%2BhbFwnomfDaZElLt%2Bkan2GPl8rdofwCHVFbN42VBZV1BoVbP5S87Z5gMT98%2F6RxtPVqQSOMItxqMGuLvjj8LxTAvnYrwXdaJ%2B5CVu6iVRHaHhGfctkyO2MMVwcZpg6f8M%2F6cYCnNFsyFoJyJ34eIHY1qTpaR60qgrrYxeO%2FIpzTS0MHXaPacSf3AKwuCk%2BZmzYcxv9q%2F%2BEMbZE3w&X-Amz-Signature=b7553104a5c6103a588a2fe68a1327bf2fba349785c397f9a8dd642603b34b21&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
