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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDZ4BYVM%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICb%2FG18I5CNH18WFa%2BzJBLs%2BhrPhgbPWSPFPEvuMwRWhAiEAsGeiEsisPx9tTCrbaHoAiYHEQqqNvqfp0UzqZB1TvUcqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQzOpu3%2BCVGHkCZCyrcAyv2DkAMAtVCUt2hvaLQMD8PiquA%2BkEM83WJ0G2cE8xNnMR5KjVTb81I0Q34N8SbzfbPB1FRYyoLDVPXRuztTkQ1jcvTd2bdIHLJawFKcw6mXvRWI4Z1h1yXbb1YObgBG9nv7pCzCvCYv6x1hn4X5Vz4%2B0Bwz2QnlUO5oZ%2BRvG3eUFra7brb4hSSDPtWh9YfFVWk6AVjrqhA06ZRVBuMpMPmFJ5OBuW879JW%2Feqin5QNSPypkNcTnmIk%2B7J7X4vzftYY%2BEBKrG25fFHFPM7aViq%2Flkvx6JHHIEzvN3d9BXzklxZKebrEqLtXKGGQgSc%2Fj1YwvV4LPFOcKEM0D%2Fv1CawUNbJL831FLmRB9jH1id17nVsxdUxCybaSUNil%2BViP6QaVBLtAQymxcRBa873KdWoRSBZlDd%2F%2FWfvwuHa%2FpCuqb%2F4jgPs12PN24%2Be6%2F4HCCN0VfSsHvfNJHsBfmXgY7B%2BCy9seRLc4jaTR0kNTWj0c66b0ujEFChvIssVOTcsn0uNNdeF9CCNBwjAkhiBaVS7ndFZegUtTx1fFtr0r58M3NzwD%2F8a1F7F5MSrSeyuLNbpaWaeFjgv3mdBBiQ1IQTtoCIS%2BnVk7%2FXrCdDLqYv4HZtKmAsjPZ%2FvBFYE2MIPWxcMGOqUBLJmhiv6ZfdoPGky2RAQiqbviFNN6X2oR5nRk%2BmrgTxbmvT9%2B%2FZAfCcVbJ9HxgeTIyAJx7lbQ%2B4440oaHCRtgsiwTWA1kBoR%2BCVdtgTKI7e5sXgtNuJ%2B2SHCpO881t5Fmqgq2%2Bb4EgEEsNgPiSLGwqzllyTDz51HH872vGypuaeE3LqaqK3D3TS5Nn0O2rokUDO2rgq35NCN9GM1kXnTioguNHXES&X-Amz-Signature=78f8767ae305e0d9c47a0075c2c00d626d736eb76e6f9dcac1d273b18b1e691a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDZ4BYVM%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICb%2FG18I5CNH18WFa%2BzJBLs%2BhrPhgbPWSPFPEvuMwRWhAiEAsGeiEsisPx9tTCrbaHoAiYHEQqqNvqfp0UzqZB1TvUcqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQzOpu3%2BCVGHkCZCyrcAyv2DkAMAtVCUt2hvaLQMD8PiquA%2BkEM83WJ0G2cE8xNnMR5KjVTb81I0Q34N8SbzfbPB1FRYyoLDVPXRuztTkQ1jcvTd2bdIHLJawFKcw6mXvRWI4Z1h1yXbb1YObgBG9nv7pCzCvCYv6x1hn4X5Vz4%2B0Bwz2QnlUO5oZ%2BRvG3eUFra7brb4hSSDPtWh9YfFVWk6AVjrqhA06ZRVBuMpMPmFJ5OBuW879JW%2Feqin5QNSPypkNcTnmIk%2B7J7X4vzftYY%2BEBKrG25fFHFPM7aViq%2Flkvx6JHHIEzvN3d9BXzklxZKebrEqLtXKGGQgSc%2Fj1YwvV4LPFOcKEM0D%2Fv1CawUNbJL831FLmRB9jH1id17nVsxdUxCybaSUNil%2BViP6QaVBLtAQymxcRBa873KdWoRSBZlDd%2F%2FWfvwuHa%2FpCuqb%2F4jgPs12PN24%2Be6%2F4HCCN0VfSsHvfNJHsBfmXgY7B%2BCy9seRLc4jaTR0kNTWj0c66b0ujEFChvIssVOTcsn0uNNdeF9CCNBwjAkhiBaVS7ndFZegUtTx1fFtr0r58M3NzwD%2F8a1F7F5MSrSeyuLNbpaWaeFjgv3mdBBiQ1IQTtoCIS%2BnVk7%2FXrCdDLqYv4HZtKmAsjPZ%2FvBFYE2MIPWxcMGOqUBLJmhiv6ZfdoPGky2RAQiqbviFNN6X2oR5nRk%2BmrgTxbmvT9%2B%2FZAfCcVbJ9HxgeTIyAJx7lbQ%2B4440oaHCRtgsiwTWA1kBoR%2BCVdtgTKI7e5sXgtNuJ%2B2SHCpO881t5Fmqgq2%2Bb4EgEEsNgPiSLGwqzllyTDz51HH872vGypuaeE3LqaqK3D3TS5Nn0O2rokUDO2rgq35NCN9GM1kXnTioguNHXES&X-Amz-Signature=86a43d0eea75c1cfd0e88022f21ef618c9af93da2e4452361223cc44ffe3bc9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDZ4BYVM%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICb%2FG18I5CNH18WFa%2BzJBLs%2BhrPhgbPWSPFPEvuMwRWhAiEAsGeiEsisPx9tTCrbaHoAiYHEQqqNvqfp0UzqZB1TvUcqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQzOpu3%2BCVGHkCZCyrcAyv2DkAMAtVCUt2hvaLQMD8PiquA%2BkEM83WJ0G2cE8xNnMR5KjVTb81I0Q34N8SbzfbPB1FRYyoLDVPXRuztTkQ1jcvTd2bdIHLJawFKcw6mXvRWI4Z1h1yXbb1YObgBG9nv7pCzCvCYv6x1hn4X5Vz4%2B0Bwz2QnlUO5oZ%2BRvG3eUFra7brb4hSSDPtWh9YfFVWk6AVjrqhA06ZRVBuMpMPmFJ5OBuW879JW%2Feqin5QNSPypkNcTnmIk%2B7J7X4vzftYY%2BEBKrG25fFHFPM7aViq%2Flkvx6JHHIEzvN3d9BXzklxZKebrEqLtXKGGQgSc%2Fj1YwvV4LPFOcKEM0D%2Fv1CawUNbJL831FLmRB9jH1id17nVsxdUxCybaSUNil%2BViP6QaVBLtAQymxcRBa873KdWoRSBZlDd%2F%2FWfvwuHa%2FpCuqb%2F4jgPs12PN24%2Be6%2F4HCCN0VfSsHvfNJHsBfmXgY7B%2BCy9seRLc4jaTR0kNTWj0c66b0ujEFChvIssVOTcsn0uNNdeF9CCNBwjAkhiBaVS7ndFZegUtTx1fFtr0r58M3NzwD%2F8a1F7F5MSrSeyuLNbpaWaeFjgv3mdBBiQ1IQTtoCIS%2BnVk7%2FXrCdDLqYv4HZtKmAsjPZ%2FvBFYE2MIPWxcMGOqUBLJmhiv6ZfdoPGky2RAQiqbviFNN6X2oR5nRk%2BmrgTxbmvT9%2B%2FZAfCcVbJ9HxgeTIyAJx7lbQ%2B4440oaHCRtgsiwTWA1kBoR%2BCVdtgTKI7e5sXgtNuJ%2B2SHCpO881t5Fmqgq2%2Bb4EgEEsNgPiSLGwqzllyTDz51HH872vGypuaeE3LqaqK3D3TS5Nn0O2rokUDO2rgq35NCN9GM1kXnTioguNHXES&X-Amz-Signature=03a1eef3a702c62c96346957dd706ae8c48864c4f95411364d0eb19d42610c3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDZ4BYVM%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICb%2FG18I5CNH18WFa%2BzJBLs%2BhrPhgbPWSPFPEvuMwRWhAiEAsGeiEsisPx9tTCrbaHoAiYHEQqqNvqfp0UzqZB1TvUcqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQzOpu3%2BCVGHkCZCyrcAyv2DkAMAtVCUt2hvaLQMD8PiquA%2BkEM83WJ0G2cE8xNnMR5KjVTb81I0Q34N8SbzfbPB1FRYyoLDVPXRuztTkQ1jcvTd2bdIHLJawFKcw6mXvRWI4Z1h1yXbb1YObgBG9nv7pCzCvCYv6x1hn4X5Vz4%2B0Bwz2QnlUO5oZ%2BRvG3eUFra7brb4hSSDPtWh9YfFVWk6AVjrqhA06ZRVBuMpMPmFJ5OBuW879JW%2Feqin5QNSPypkNcTnmIk%2B7J7X4vzftYY%2BEBKrG25fFHFPM7aViq%2Flkvx6JHHIEzvN3d9BXzklxZKebrEqLtXKGGQgSc%2Fj1YwvV4LPFOcKEM0D%2Fv1CawUNbJL831FLmRB9jH1id17nVsxdUxCybaSUNil%2BViP6QaVBLtAQymxcRBa873KdWoRSBZlDd%2F%2FWfvwuHa%2FpCuqb%2F4jgPs12PN24%2Be6%2F4HCCN0VfSsHvfNJHsBfmXgY7B%2BCy9seRLc4jaTR0kNTWj0c66b0ujEFChvIssVOTcsn0uNNdeF9CCNBwjAkhiBaVS7ndFZegUtTx1fFtr0r58M3NzwD%2F8a1F7F5MSrSeyuLNbpaWaeFjgv3mdBBiQ1IQTtoCIS%2BnVk7%2FXrCdDLqYv4HZtKmAsjPZ%2FvBFYE2MIPWxcMGOqUBLJmhiv6ZfdoPGky2RAQiqbviFNN6X2oR5nRk%2BmrgTxbmvT9%2B%2FZAfCcVbJ9HxgeTIyAJx7lbQ%2B4440oaHCRtgsiwTWA1kBoR%2BCVdtgTKI7e5sXgtNuJ%2B2SHCpO881t5Fmqgq2%2Bb4EgEEsNgPiSLGwqzllyTDz51HH872vGypuaeE3LqaqK3D3TS5Nn0O2rokUDO2rgq35NCN9GM1kXnTioguNHXES&X-Amz-Signature=b30e1c222fae5a02e6d0ff46a8aa2640b97b26bf760206cbd3b3d5b0fd82f775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDZ4BYVM%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICb%2FG18I5CNH18WFa%2BzJBLs%2BhrPhgbPWSPFPEvuMwRWhAiEAsGeiEsisPx9tTCrbaHoAiYHEQqqNvqfp0UzqZB1TvUcqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQzOpu3%2BCVGHkCZCyrcAyv2DkAMAtVCUt2hvaLQMD8PiquA%2BkEM83WJ0G2cE8xNnMR5KjVTb81I0Q34N8SbzfbPB1FRYyoLDVPXRuztTkQ1jcvTd2bdIHLJawFKcw6mXvRWI4Z1h1yXbb1YObgBG9nv7pCzCvCYv6x1hn4X5Vz4%2B0Bwz2QnlUO5oZ%2BRvG3eUFra7brb4hSSDPtWh9YfFVWk6AVjrqhA06ZRVBuMpMPmFJ5OBuW879JW%2Feqin5QNSPypkNcTnmIk%2B7J7X4vzftYY%2BEBKrG25fFHFPM7aViq%2Flkvx6JHHIEzvN3d9BXzklxZKebrEqLtXKGGQgSc%2Fj1YwvV4LPFOcKEM0D%2Fv1CawUNbJL831FLmRB9jH1id17nVsxdUxCybaSUNil%2BViP6QaVBLtAQymxcRBa873KdWoRSBZlDd%2F%2FWfvwuHa%2FpCuqb%2F4jgPs12PN24%2Be6%2F4HCCN0VfSsHvfNJHsBfmXgY7B%2BCy9seRLc4jaTR0kNTWj0c66b0ujEFChvIssVOTcsn0uNNdeF9CCNBwjAkhiBaVS7ndFZegUtTx1fFtr0r58M3NzwD%2F8a1F7F5MSrSeyuLNbpaWaeFjgv3mdBBiQ1IQTtoCIS%2BnVk7%2FXrCdDLqYv4HZtKmAsjPZ%2FvBFYE2MIPWxcMGOqUBLJmhiv6ZfdoPGky2RAQiqbviFNN6X2oR5nRk%2BmrgTxbmvT9%2B%2FZAfCcVbJ9HxgeTIyAJx7lbQ%2B4440oaHCRtgsiwTWA1kBoR%2BCVdtgTKI7e5sXgtNuJ%2B2SHCpO881t5Fmqgq2%2Bb4EgEEsNgPiSLGwqzllyTDz51HH872vGypuaeE3LqaqK3D3TS5Nn0O2rokUDO2rgq35NCN9GM1kXnTioguNHXES&X-Amz-Signature=0c69875293e262e6115248fea816394ed999e3db48f956f3a60ad14ab833680a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDZ4BYVM%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICb%2FG18I5CNH18WFa%2BzJBLs%2BhrPhgbPWSPFPEvuMwRWhAiEAsGeiEsisPx9tTCrbaHoAiYHEQqqNvqfp0UzqZB1TvUcqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQzOpu3%2BCVGHkCZCyrcAyv2DkAMAtVCUt2hvaLQMD8PiquA%2BkEM83WJ0G2cE8xNnMR5KjVTb81I0Q34N8SbzfbPB1FRYyoLDVPXRuztTkQ1jcvTd2bdIHLJawFKcw6mXvRWI4Z1h1yXbb1YObgBG9nv7pCzCvCYv6x1hn4X5Vz4%2B0Bwz2QnlUO5oZ%2BRvG3eUFra7brb4hSSDPtWh9YfFVWk6AVjrqhA06ZRVBuMpMPmFJ5OBuW879JW%2Feqin5QNSPypkNcTnmIk%2B7J7X4vzftYY%2BEBKrG25fFHFPM7aViq%2Flkvx6JHHIEzvN3d9BXzklxZKebrEqLtXKGGQgSc%2Fj1YwvV4LPFOcKEM0D%2Fv1CawUNbJL831FLmRB9jH1id17nVsxdUxCybaSUNil%2BViP6QaVBLtAQymxcRBa873KdWoRSBZlDd%2F%2FWfvwuHa%2FpCuqb%2F4jgPs12PN24%2Be6%2F4HCCN0VfSsHvfNJHsBfmXgY7B%2BCy9seRLc4jaTR0kNTWj0c66b0ujEFChvIssVOTcsn0uNNdeF9CCNBwjAkhiBaVS7ndFZegUtTx1fFtr0r58M3NzwD%2F8a1F7F5MSrSeyuLNbpaWaeFjgv3mdBBiQ1IQTtoCIS%2BnVk7%2FXrCdDLqYv4HZtKmAsjPZ%2FvBFYE2MIPWxcMGOqUBLJmhiv6ZfdoPGky2RAQiqbviFNN6X2oR5nRk%2BmrgTxbmvT9%2B%2FZAfCcVbJ9HxgeTIyAJx7lbQ%2B4440oaHCRtgsiwTWA1kBoR%2BCVdtgTKI7e5sXgtNuJ%2B2SHCpO881t5Fmqgq2%2Bb4EgEEsNgPiSLGwqzllyTDz51HH872vGypuaeE3LqaqK3D3TS5Nn0O2rokUDO2rgq35NCN9GM1kXnTioguNHXES&X-Amz-Signature=0750777884315bc26f1f69832a9fac7ecd9a806e017261b3a807b7b605f7abd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDZ4BYVM%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICb%2FG18I5CNH18WFa%2BzJBLs%2BhrPhgbPWSPFPEvuMwRWhAiEAsGeiEsisPx9tTCrbaHoAiYHEQqqNvqfp0UzqZB1TvUcqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQzOpu3%2BCVGHkCZCyrcAyv2DkAMAtVCUt2hvaLQMD8PiquA%2BkEM83WJ0G2cE8xNnMR5KjVTb81I0Q34N8SbzfbPB1FRYyoLDVPXRuztTkQ1jcvTd2bdIHLJawFKcw6mXvRWI4Z1h1yXbb1YObgBG9nv7pCzCvCYv6x1hn4X5Vz4%2B0Bwz2QnlUO5oZ%2BRvG3eUFra7brb4hSSDPtWh9YfFVWk6AVjrqhA06ZRVBuMpMPmFJ5OBuW879JW%2Feqin5QNSPypkNcTnmIk%2B7J7X4vzftYY%2BEBKrG25fFHFPM7aViq%2Flkvx6JHHIEzvN3d9BXzklxZKebrEqLtXKGGQgSc%2Fj1YwvV4LPFOcKEM0D%2Fv1CawUNbJL831FLmRB9jH1id17nVsxdUxCybaSUNil%2BViP6QaVBLtAQymxcRBa873KdWoRSBZlDd%2F%2FWfvwuHa%2FpCuqb%2F4jgPs12PN24%2Be6%2F4HCCN0VfSsHvfNJHsBfmXgY7B%2BCy9seRLc4jaTR0kNTWj0c66b0ujEFChvIssVOTcsn0uNNdeF9CCNBwjAkhiBaVS7ndFZegUtTx1fFtr0r58M3NzwD%2F8a1F7F5MSrSeyuLNbpaWaeFjgv3mdBBiQ1IQTtoCIS%2BnVk7%2FXrCdDLqYv4HZtKmAsjPZ%2FvBFYE2MIPWxcMGOqUBLJmhiv6ZfdoPGky2RAQiqbviFNN6X2oR5nRk%2BmrgTxbmvT9%2B%2FZAfCcVbJ9HxgeTIyAJx7lbQ%2B4440oaHCRtgsiwTWA1kBoR%2BCVdtgTKI7e5sXgtNuJ%2B2SHCpO881t5Fmqgq2%2Bb4EgEEsNgPiSLGwqzllyTDz51HH872vGypuaeE3LqaqK3D3TS5Nn0O2rokUDO2rgq35NCN9GM1kXnTioguNHXES&X-Amz-Signature=f8c04f7b5017dfba7b3f265a61702d5b2468dfffc82808a152d31b3c141d2a96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
