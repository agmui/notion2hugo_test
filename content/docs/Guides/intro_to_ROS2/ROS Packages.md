---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6VNSQBR%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCaXrezfZTOA8EX%2FVZO4pI7gzCZkqYByf2zUJujVwFelwIgd3x145DCKG1LovS4CAh5lL8iVuhw0VcpEP18CMzj7qUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDAKFmy1SbpiSxCJTyCrcA8HAjewipu8IvxheIxiCozQ1XrQUdWrht8ZdkCQp6zJlHpUYIFM3tx%2F79pAurXvAqiK3SdDlF4v2oEUWI3kBMI6NeQMUj17KaGVKSBSbc%2FNy15oNHQy8upKjW7dLI3ghcpT%2BPKvXYvpxyv3B1Izi0lF0Ok4hH4r1AbUxU4eJvPt3Y7leEU2TiQQuenwVRfC2fQfOGHoAyiaH0hqrKgtk1j7xb9%2BELX8CRbAT4sCaB15Jye1Q%2BP7A2WhxDqZ%2FB2NHFMKGSphiqBnCF%2Fasm5inDhdoKvbvzRZyHiQhvdUEmJcCFYn%2FE7yHR%2FfhfgKmZ9CeTrQ4hHFtbTYAjQ3XZsrETHCHNBQR0%2F2hBI5NzzS0KlEwIKyor6XVFlxzFw488bbyraixlbzVW9H5Z4kkJg1pisB6JkxojfU4bmiCK%2B714JXyuX4zq2GNqd2GJXC9Sf9XfBYTAviKqiKVGkkpttpmX4WHGaNn3fblabVwSZ4fUDX9dh0byIkBP3OK%2B1NbUihiTjRdSt3L3dRsEpvscTIJ2WefnVsd%2FBEXrlLcZAfqZpSfLe0iRkrI2U6xIE15GGN2qq7WA%2Byo%2FWcytAtkL%2FQrMtPJgmbVN%2FVuSDH%2BtE6FO0mXZWh55CVnGSm56385MPHnmsgGOqUB9Q%2B9%2FddADq3x1tlL%2FoH9aMXFQ%2FciOgmXhQGROlm8%2BxLpxLjDcLau81PkizE43CkGIYyfIXtxM72QnmTaBAslvdxVbjvbwgjwRSXC0FTxUTagC0TI6RDwSwha%2BReGGZrLfYRRBu%2F1RVQKHK3CohDPEnn7p95XmA3WEppR2gXGY3wOyq9NRD9rNALgaAVUvwZQ3Bu%2BnQlUcii0ffgDKz7SMKAYd6rV&X-Amz-Signature=30931e705fd91d1f4f3425bad8045da4ff05e5d5bec4a022431058c45ccbc111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6VNSQBR%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCaXrezfZTOA8EX%2FVZO4pI7gzCZkqYByf2zUJujVwFelwIgd3x145DCKG1LovS4CAh5lL8iVuhw0VcpEP18CMzj7qUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDAKFmy1SbpiSxCJTyCrcA8HAjewipu8IvxheIxiCozQ1XrQUdWrht8ZdkCQp6zJlHpUYIFM3tx%2F79pAurXvAqiK3SdDlF4v2oEUWI3kBMI6NeQMUj17KaGVKSBSbc%2FNy15oNHQy8upKjW7dLI3ghcpT%2BPKvXYvpxyv3B1Izi0lF0Ok4hH4r1AbUxU4eJvPt3Y7leEU2TiQQuenwVRfC2fQfOGHoAyiaH0hqrKgtk1j7xb9%2BELX8CRbAT4sCaB15Jye1Q%2BP7A2WhxDqZ%2FB2NHFMKGSphiqBnCF%2Fasm5inDhdoKvbvzRZyHiQhvdUEmJcCFYn%2FE7yHR%2FfhfgKmZ9CeTrQ4hHFtbTYAjQ3XZsrETHCHNBQR0%2F2hBI5NzzS0KlEwIKyor6XVFlxzFw488bbyraixlbzVW9H5Z4kkJg1pisB6JkxojfU4bmiCK%2B714JXyuX4zq2GNqd2GJXC9Sf9XfBYTAviKqiKVGkkpttpmX4WHGaNn3fblabVwSZ4fUDX9dh0byIkBP3OK%2B1NbUihiTjRdSt3L3dRsEpvscTIJ2WefnVsd%2FBEXrlLcZAfqZpSfLe0iRkrI2U6xIE15GGN2qq7WA%2Byo%2FWcytAtkL%2FQrMtPJgmbVN%2FVuSDH%2BtE6FO0mXZWh55CVnGSm56385MPHnmsgGOqUB9Q%2B9%2FddADq3x1tlL%2FoH9aMXFQ%2FciOgmXhQGROlm8%2BxLpxLjDcLau81PkizE43CkGIYyfIXtxM72QnmTaBAslvdxVbjvbwgjwRSXC0FTxUTagC0TI6RDwSwha%2BReGGZrLfYRRBu%2F1RVQKHK3CohDPEnn7p95XmA3WEppR2gXGY3wOyq9NRD9rNALgaAVUvwZQ3Bu%2BnQlUcii0ffgDKz7SMKAYd6rV&X-Amz-Signature=cfd7ea00a642b934a92622b0e8177d2edd54d41f40963353f78f0c09446ea79a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6VNSQBR%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCaXrezfZTOA8EX%2FVZO4pI7gzCZkqYByf2zUJujVwFelwIgd3x145DCKG1LovS4CAh5lL8iVuhw0VcpEP18CMzj7qUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDAKFmy1SbpiSxCJTyCrcA8HAjewipu8IvxheIxiCozQ1XrQUdWrht8ZdkCQp6zJlHpUYIFM3tx%2F79pAurXvAqiK3SdDlF4v2oEUWI3kBMI6NeQMUj17KaGVKSBSbc%2FNy15oNHQy8upKjW7dLI3ghcpT%2BPKvXYvpxyv3B1Izi0lF0Ok4hH4r1AbUxU4eJvPt3Y7leEU2TiQQuenwVRfC2fQfOGHoAyiaH0hqrKgtk1j7xb9%2BELX8CRbAT4sCaB15Jye1Q%2BP7A2WhxDqZ%2FB2NHFMKGSphiqBnCF%2Fasm5inDhdoKvbvzRZyHiQhvdUEmJcCFYn%2FE7yHR%2FfhfgKmZ9CeTrQ4hHFtbTYAjQ3XZsrETHCHNBQR0%2F2hBI5NzzS0KlEwIKyor6XVFlxzFw488bbyraixlbzVW9H5Z4kkJg1pisB6JkxojfU4bmiCK%2B714JXyuX4zq2GNqd2GJXC9Sf9XfBYTAviKqiKVGkkpttpmX4WHGaNn3fblabVwSZ4fUDX9dh0byIkBP3OK%2B1NbUihiTjRdSt3L3dRsEpvscTIJ2WefnVsd%2FBEXrlLcZAfqZpSfLe0iRkrI2U6xIE15GGN2qq7WA%2Byo%2FWcytAtkL%2FQrMtPJgmbVN%2FVuSDH%2BtE6FO0mXZWh55CVnGSm56385MPHnmsgGOqUB9Q%2B9%2FddADq3x1tlL%2FoH9aMXFQ%2FciOgmXhQGROlm8%2BxLpxLjDcLau81PkizE43CkGIYyfIXtxM72QnmTaBAslvdxVbjvbwgjwRSXC0FTxUTagC0TI6RDwSwha%2BReGGZrLfYRRBu%2F1RVQKHK3CohDPEnn7p95XmA3WEppR2gXGY3wOyq9NRD9rNALgaAVUvwZQ3Bu%2BnQlUcii0ffgDKz7SMKAYd6rV&X-Amz-Signature=8d17af7bc3b839954c9e96a2656dad277c060db740f179613e18aba3b6e6695f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6VNSQBR%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCaXrezfZTOA8EX%2FVZO4pI7gzCZkqYByf2zUJujVwFelwIgd3x145DCKG1LovS4CAh5lL8iVuhw0VcpEP18CMzj7qUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDAKFmy1SbpiSxCJTyCrcA8HAjewipu8IvxheIxiCozQ1XrQUdWrht8ZdkCQp6zJlHpUYIFM3tx%2F79pAurXvAqiK3SdDlF4v2oEUWI3kBMI6NeQMUj17KaGVKSBSbc%2FNy15oNHQy8upKjW7dLI3ghcpT%2BPKvXYvpxyv3B1Izi0lF0Ok4hH4r1AbUxU4eJvPt3Y7leEU2TiQQuenwVRfC2fQfOGHoAyiaH0hqrKgtk1j7xb9%2BELX8CRbAT4sCaB15Jye1Q%2BP7A2WhxDqZ%2FB2NHFMKGSphiqBnCF%2Fasm5inDhdoKvbvzRZyHiQhvdUEmJcCFYn%2FE7yHR%2FfhfgKmZ9CeTrQ4hHFtbTYAjQ3XZsrETHCHNBQR0%2F2hBI5NzzS0KlEwIKyor6XVFlxzFw488bbyraixlbzVW9H5Z4kkJg1pisB6JkxojfU4bmiCK%2B714JXyuX4zq2GNqd2GJXC9Sf9XfBYTAviKqiKVGkkpttpmX4WHGaNn3fblabVwSZ4fUDX9dh0byIkBP3OK%2B1NbUihiTjRdSt3L3dRsEpvscTIJ2WefnVsd%2FBEXrlLcZAfqZpSfLe0iRkrI2U6xIE15GGN2qq7WA%2Byo%2FWcytAtkL%2FQrMtPJgmbVN%2FVuSDH%2BtE6FO0mXZWh55CVnGSm56385MPHnmsgGOqUB9Q%2B9%2FddADq3x1tlL%2FoH9aMXFQ%2FciOgmXhQGROlm8%2BxLpxLjDcLau81PkizE43CkGIYyfIXtxM72QnmTaBAslvdxVbjvbwgjwRSXC0FTxUTagC0TI6RDwSwha%2BReGGZrLfYRRBu%2F1RVQKHK3CohDPEnn7p95XmA3WEppR2gXGY3wOyq9NRD9rNALgaAVUvwZQ3Bu%2BnQlUcii0ffgDKz7SMKAYd6rV&X-Amz-Signature=8688e035e3bb17e11fffdcb78fe4575c9103a462ad121160cb872669172370b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6VNSQBR%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCaXrezfZTOA8EX%2FVZO4pI7gzCZkqYByf2zUJujVwFelwIgd3x145DCKG1LovS4CAh5lL8iVuhw0VcpEP18CMzj7qUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDAKFmy1SbpiSxCJTyCrcA8HAjewipu8IvxheIxiCozQ1XrQUdWrht8ZdkCQp6zJlHpUYIFM3tx%2F79pAurXvAqiK3SdDlF4v2oEUWI3kBMI6NeQMUj17KaGVKSBSbc%2FNy15oNHQy8upKjW7dLI3ghcpT%2BPKvXYvpxyv3B1Izi0lF0Ok4hH4r1AbUxU4eJvPt3Y7leEU2TiQQuenwVRfC2fQfOGHoAyiaH0hqrKgtk1j7xb9%2BELX8CRbAT4sCaB15Jye1Q%2BP7A2WhxDqZ%2FB2NHFMKGSphiqBnCF%2Fasm5inDhdoKvbvzRZyHiQhvdUEmJcCFYn%2FE7yHR%2FfhfgKmZ9CeTrQ4hHFtbTYAjQ3XZsrETHCHNBQR0%2F2hBI5NzzS0KlEwIKyor6XVFlxzFw488bbyraixlbzVW9H5Z4kkJg1pisB6JkxojfU4bmiCK%2B714JXyuX4zq2GNqd2GJXC9Sf9XfBYTAviKqiKVGkkpttpmX4WHGaNn3fblabVwSZ4fUDX9dh0byIkBP3OK%2B1NbUihiTjRdSt3L3dRsEpvscTIJ2WefnVsd%2FBEXrlLcZAfqZpSfLe0iRkrI2U6xIE15GGN2qq7WA%2Byo%2FWcytAtkL%2FQrMtPJgmbVN%2FVuSDH%2BtE6FO0mXZWh55CVnGSm56385MPHnmsgGOqUB9Q%2B9%2FddADq3x1tlL%2FoH9aMXFQ%2FciOgmXhQGROlm8%2BxLpxLjDcLau81PkizE43CkGIYyfIXtxM72QnmTaBAslvdxVbjvbwgjwRSXC0FTxUTagC0TI6RDwSwha%2BReGGZrLfYRRBu%2F1RVQKHK3CohDPEnn7p95XmA3WEppR2gXGY3wOyq9NRD9rNALgaAVUvwZQ3Bu%2BnQlUcii0ffgDKz7SMKAYd6rV&X-Amz-Signature=00dcebec5d026f4c2e865815a772a0315fb9b8e9f89eeee014e7b64da95927df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6VNSQBR%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCaXrezfZTOA8EX%2FVZO4pI7gzCZkqYByf2zUJujVwFelwIgd3x145DCKG1LovS4CAh5lL8iVuhw0VcpEP18CMzj7qUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDAKFmy1SbpiSxCJTyCrcA8HAjewipu8IvxheIxiCozQ1XrQUdWrht8ZdkCQp6zJlHpUYIFM3tx%2F79pAurXvAqiK3SdDlF4v2oEUWI3kBMI6NeQMUj17KaGVKSBSbc%2FNy15oNHQy8upKjW7dLI3ghcpT%2BPKvXYvpxyv3B1Izi0lF0Ok4hH4r1AbUxU4eJvPt3Y7leEU2TiQQuenwVRfC2fQfOGHoAyiaH0hqrKgtk1j7xb9%2BELX8CRbAT4sCaB15Jye1Q%2BP7A2WhxDqZ%2FB2NHFMKGSphiqBnCF%2Fasm5inDhdoKvbvzRZyHiQhvdUEmJcCFYn%2FE7yHR%2FfhfgKmZ9CeTrQ4hHFtbTYAjQ3XZsrETHCHNBQR0%2F2hBI5NzzS0KlEwIKyor6XVFlxzFw488bbyraixlbzVW9H5Z4kkJg1pisB6JkxojfU4bmiCK%2B714JXyuX4zq2GNqd2GJXC9Sf9XfBYTAviKqiKVGkkpttpmX4WHGaNn3fblabVwSZ4fUDX9dh0byIkBP3OK%2B1NbUihiTjRdSt3L3dRsEpvscTIJ2WefnVsd%2FBEXrlLcZAfqZpSfLe0iRkrI2U6xIE15GGN2qq7WA%2Byo%2FWcytAtkL%2FQrMtPJgmbVN%2FVuSDH%2BtE6FO0mXZWh55CVnGSm56385MPHnmsgGOqUB9Q%2B9%2FddADq3x1tlL%2FoH9aMXFQ%2FciOgmXhQGROlm8%2BxLpxLjDcLau81PkizE43CkGIYyfIXtxM72QnmTaBAslvdxVbjvbwgjwRSXC0FTxUTagC0TI6RDwSwha%2BReGGZrLfYRRBu%2F1RVQKHK3CohDPEnn7p95XmA3WEppR2gXGY3wOyq9NRD9rNALgaAVUvwZQ3Bu%2BnQlUcii0ffgDKz7SMKAYd6rV&X-Amz-Signature=ab403b66b238711bae2615200b424c4f63b39a5fa74c292b35ada085e447efc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6VNSQBR%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCaXrezfZTOA8EX%2FVZO4pI7gzCZkqYByf2zUJujVwFelwIgd3x145DCKG1LovS4CAh5lL8iVuhw0VcpEP18CMzj7qUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDAKFmy1SbpiSxCJTyCrcA8HAjewipu8IvxheIxiCozQ1XrQUdWrht8ZdkCQp6zJlHpUYIFM3tx%2F79pAurXvAqiK3SdDlF4v2oEUWI3kBMI6NeQMUj17KaGVKSBSbc%2FNy15oNHQy8upKjW7dLI3ghcpT%2BPKvXYvpxyv3B1Izi0lF0Ok4hH4r1AbUxU4eJvPt3Y7leEU2TiQQuenwVRfC2fQfOGHoAyiaH0hqrKgtk1j7xb9%2BELX8CRbAT4sCaB15Jye1Q%2BP7A2WhxDqZ%2FB2NHFMKGSphiqBnCF%2Fasm5inDhdoKvbvzRZyHiQhvdUEmJcCFYn%2FE7yHR%2FfhfgKmZ9CeTrQ4hHFtbTYAjQ3XZsrETHCHNBQR0%2F2hBI5NzzS0KlEwIKyor6XVFlxzFw488bbyraixlbzVW9H5Z4kkJg1pisB6JkxojfU4bmiCK%2B714JXyuX4zq2GNqd2GJXC9Sf9XfBYTAviKqiKVGkkpttpmX4WHGaNn3fblabVwSZ4fUDX9dh0byIkBP3OK%2B1NbUihiTjRdSt3L3dRsEpvscTIJ2WefnVsd%2FBEXrlLcZAfqZpSfLe0iRkrI2U6xIE15GGN2qq7WA%2Byo%2FWcytAtkL%2FQrMtPJgmbVN%2FVuSDH%2BtE6FO0mXZWh55CVnGSm56385MPHnmsgGOqUB9Q%2B9%2FddADq3x1tlL%2FoH9aMXFQ%2FciOgmXhQGROlm8%2BxLpxLjDcLau81PkizE43CkGIYyfIXtxM72QnmTaBAslvdxVbjvbwgjwRSXC0FTxUTagC0TI6RDwSwha%2BReGGZrLfYRRBu%2F1RVQKHK3CohDPEnn7p95XmA3WEppR2gXGY3wOyq9NRD9rNALgaAVUvwZQ3Bu%2BnQlUcii0ffgDKz7SMKAYd6rV&X-Amz-Signature=34b5ddab400be4f09d9052a725995607dc5c0172ac9715e8ca9c38fb53a702ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
