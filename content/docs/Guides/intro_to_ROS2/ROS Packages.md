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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMPA2OWZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBa%2BBfy3aYSZ5w1Z72pX3metwXBv3ojOORlQKsWI5ZJ1AiEA%2Bdo0a9NhuTHn%2BC0cfJVU72o6K%2BfpQ1Tg13UQp0JjKMkqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEU32Ac8xghyBO5YBSrcAx%2FlCnLjftMMHlbP1%2FQx5QD5VN7GI6qCRTBRAW9mgtBqGO07SDrdVEVmS%2FKQOiMmz1KUU24%2BGgusLCvb1%2BonXVAMSygKKz061W3Cg42dUldSW7459UcXIp9VrNmko%2FHFz1YfgWxwkXJI8OAvd%2FK79%2BeOr9HKAM6YnDahULXDE852zG%2FCYIpA7ShoDQ0zvQUtcj9psR8u51t9ctZfGSXksKHM3hrRHKjyIIiYE4W25mICXsZA8ta%2F33Y2au7Xs60Zb3xhXLLjbGHXnlDmfW80C1wLUED4ps08HFkwOwC%2Fj%2B0WP%2BMDgbQpX6YpzbL0U1efDbWMv%2BJW9NjmpFzbPqAIfdzPH8YxMnpaTHQc5RgLZpe%2F15wNWTBC8L9AVo8SD46ZkmQU9ZYHXCaiTY8SrpqzOp7%2BnWTRhJm6OWpCpex3VjviB2LKGgmoc71HRhkixVNtlAE5hjgQqvKGkNKpDGO%2B7FZeyQAL0rf7tlHwS9jyCvLSFduQWYu0tZHSlt76Ugla3h4eUxWBuglEnof%2FwWJg5c3KyKgtK0o37F%2BHDszPHF6Inhc0Kkp%2BY43rgUaO7%2FgEJpIq0B4VlchHnG2PbLMkzaMUCSIYaau20WHlLNMBhph1uH6j4NibrHKNzjwRMOuXusMGOqUBGn6%2B%2BWQFUT9SWKrvSyUqr%2F1CQE8dYSG9qD6bQg4otmyuF%2BmapcGIouewFmLvYhSNHbL4FHo53QsZ%2BhKUnyANHpYWxokzoszIL3N6nPZBsPJXGxmE01i6hgvJAD9RXk%2BUY4JhRL7MaF7mhURBQhR2excuwqOng4MbmkpLPusdMv8btm06GAKKERiHoHULz%2BM7vnb37Zzdx61sxAuugZr7GB8HANPB&X-Amz-Signature=4fc043f7fe843f81123f69f0b1cc122d899aeb78cdc6b451fde385d011aa6f75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMPA2OWZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBa%2BBfy3aYSZ5w1Z72pX3metwXBv3ojOORlQKsWI5ZJ1AiEA%2Bdo0a9NhuTHn%2BC0cfJVU72o6K%2BfpQ1Tg13UQp0JjKMkqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEU32Ac8xghyBO5YBSrcAx%2FlCnLjftMMHlbP1%2FQx5QD5VN7GI6qCRTBRAW9mgtBqGO07SDrdVEVmS%2FKQOiMmz1KUU24%2BGgusLCvb1%2BonXVAMSygKKz061W3Cg42dUldSW7459UcXIp9VrNmko%2FHFz1YfgWxwkXJI8OAvd%2FK79%2BeOr9HKAM6YnDahULXDE852zG%2FCYIpA7ShoDQ0zvQUtcj9psR8u51t9ctZfGSXksKHM3hrRHKjyIIiYE4W25mICXsZA8ta%2F33Y2au7Xs60Zb3xhXLLjbGHXnlDmfW80C1wLUED4ps08HFkwOwC%2Fj%2B0WP%2BMDgbQpX6YpzbL0U1efDbWMv%2BJW9NjmpFzbPqAIfdzPH8YxMnpaTHQc5RgLZpe%2F15wNWTBC8L9AVo8SD46ZkmQU9ZYHXCaiTY8SrpqzOp7%2BnWTRhJm6OWpCpex3VjviB2LKGgmoc71HRhkixVNtlAE5hjgQqvKGkNKpDGO%2B7FZeyQAL0rf7tlHwS9jyCvLSFduQWYu0tZHSlt76Ugla3h4eUxWBuglEnof%2FwWJg5c3KyKgtK0o37F%2BHDszPHF6Inhc0Kkp%2BY43rgUaO7%2FgEJpIq0B4VlchHnG2PbLMkzaMUCSIYaau20WHlLNMBhph1uH6j4NibrHKNzjwRMOuXusMGOqUBGn6%2B%2BWQFUT9SWKrvSyUqr%2F1CQE8dYSG9qD6bQg4otmyuF%2BmapcGIouewFmLvYhSNHbL4FHo53QsZ%2BhKUnyANHpYWxokzoszIL3N6nPZBsPJXGxmE01i6hgvJAD9RXk%2BUY4JhRL7MaF7mhURBQhR2excuwqOng4MbmkpLPusdMv8btm06GAKKERiHoHULz%2BM7vnb37Zzdx61sxAuugZr7GB8HANPB&X-Amz-Signature=a888f7ce13e7815abdff65922965833623dcf48d4e5d85abd3bad2b047622ecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMPA2OWZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBa%2BBfy3aYSZ5w1Z72pX3metwXBv3ojOORlQKsWI5ZJ1AiEA%2Bdo0a9NhuTHn%2BC0cfJVU72o6K%2BfpQ1Tg13UQp0JjKMkqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEU32Ac8xghyBO5YBSrcAx%2FlCnLjftMMHlbP1%2FQx5QD5VN7GI6qCRTBRAW9mgtBqGO07SDrdVEVmS%2FKQOiMmz1KUU24%2BGgusLCvb1%2BonXVAMSygKKz061W3Cg42dUldSW7459UcXIp9VrNmko%2FHFz1YfgWxwkXJI8OAvd%2FK79%2BeOr9HKAM6YnDahULXDE852zG%2FCYIpA7ShoDQ0zvQUtcj9psR8u51t9ctZfGSXksKHM3hrRHKjyIIiYE4W25mICXsZA8ta%2F33Y2au7Xs60Zb3xhXLLjbGHXnlDmfW80C1wLUED4ps08HFkwOwC%2Fj%2B0WP%2BMDgbQpX6YpzbL0U1efDbWMv%2BJW9NjmpFzbPqAIfdzPH8YxMnpaTHQc5RgLZpe%2F15wNWTBC8L9AVo8SD46ZkmQU9ZYHXCaiTY8SrpqzOp7%2BnWTRhJm6OWpCpex3VjviB2LKGgmoc71HRhkixVNtlAE5hjgQqvKGkNKpDGO%2B7FZeyQAL0rf7tlHwS9jyCvLSFduQWYu0tZHSlt76Ugla3h4eUxWBuglEnof%2FwWJg5c3KyKgtK0o37F%2BHDszPHF6Inhc0Kkp%2BY43rgUaO7%2FgEJpIq0B4VlchHnG2PbLMkzaMUCSIYaau20WHlLNMBhph1uH6j4NibrHKNzjwRMOuXusMGOqUBGn6%2B%2BWQFUT9SWKrvSyUqr%2F1CQE8dYSG9qD6bQg4otmyuF%2BmapcGIouewFmLvYhSNHbL4FHo53QsZ%2BhKUnyANHpYWxokzoszIL3N6nPZBsPJXGxmE01i6hgvJAD9RXk%2BUY4JhRL7MaF7mhURBQhR2excuwqOng4MbmkpLPusdMv8btm06GAKKERiHoHULz%2BM7vnb37Zzdx61sxAuugZr7GB8HANPB&X-Amz-Signature=eafbdf88d2d7d108abf3c3f0569efc667bdc6aa13bd5df80553f67d5a5b46699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMPA2OWZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBa%2BBfy3aYSZ5w1Z72pX3metwXBv3ojOORlQKsWI5ZJ1AiEA%2Bdo0a9NhuTHn%2BC0cfJVU72o6K%2BfpQ1Tg13UQp0JjKMkqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEU32Ac8xghyBO5YBSrcAx%2FlCnLjftMMHlbP1%2FQx5QD5VN7GI6qCRTBRAW9mgtBqGO07SDrdVEVmS%2FKQOiMmz1KUU24%2BGgusLCvb1%2BonXVAMSygKKz061W3Cg42dUldSW7459UcXIp9VrNmko%2FHFz1YfgWxwkXJI8OAvd%2FK79%2BeOr9HKAM6YnDahULXDE852zG%2FCYIpA7ShoDQ0zvQUtcj9psR8u51t9ctZfGSXksKHM3hrRHKjyIIiYE4W25mICXsZA8ta%2F33Y2au7Xs60Zb3xhXLLjbGHXnlDmfW80C1wLUED4ps08HFkwOwC%2Fj%2B0WP%2BMDgbQpX6YpzbL0U1efDbWMv%2BJW9NjmpFzbPqAIfdzPH8YxMnpaTHQc5RgLZpe%2F15wNWTBC8L9AVo8SD46ZkmQU9ZYHXCaiTY8SrpqzOp7%2BnWTRhJm6OWpCpex3VjviB2LKGgmoc71HRhkixVNtlAE5hjgQqvKGkNKpDGO%2B7FZeyQAL0rf7tlHwS9jyCvLSFduQWYu0tZHSlt76Ugla3h4eUxWBuglEnof%2FwWJg5c3KyKgtK0o37F%2BHDszPHF6Inhc0Kkp%2BY43rgUaO7%2FgEJpIq0B4VlchHnG2PbLMkzaMUCSIYaau20WHlLNMBhph1uH6j4NibrHKNzjwRMOuXusMGOqUBGn6%2B%2BWQFUT9SWKrvSyUqr%2F1CQE8dYSG9qD6bQg4otmyuF%2BmapcGIouewFmLvYhSNHbL4FHo53QsZ%2BhKUnyANHpYWxokzoszIL3N6nPZBsPJXGxmE01i6hgvJAD9RXk%2BUY4JhRL7MaF7mhURBQhR2excuwqOng4MbmkpLPusdMv8btm06GAKKERiHoHULz%2BM7vnb37Zzdx61sxAuugZr7GB8HANPB&X-Amz-Signature=3465a71510ca6178c2c23422dc7288b8abbc8da218f3c9f8cf77489a12052801&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMPA2OWZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBa%2BBfy3aYSZ5w1Z72pX3metwXBv3ojOORlQKsWI5ZJ1AiEA%2Bdo0a9NhuTHn%2BC0cfJVU72o6K%2BfpQ1Tg13UQp0JjKMkqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEU32Ac8xghyBO5YBSrcAx%2FlCnLjftMMHlbP1%2FQx5QD5VN7GI6qCRTBRAW9mgtBqGO07SDrdVEVmS%2FKQOiMmz1KUU24%2BGgusLCvb1%2BonXVAMSygKKz061W3Cg42dUldSW7459UcXIp9VrNmko%2FHFz1YfgWxwkXJI8OAvd%2FK79%2BeOr9HKAM6YnDahULXDE852zG%2FCYIpA7ShoDQ0zvQUtcj9psR8u51t9ctZfGSXksKHM3hrRHKjyIIiYE4W25mICXsZA8ta%2F33Y2au7Xs60Zb3xhXLLjbGHXnlDmfW80C1wLUED4ps08HFkwOwC%2Fj%2B0WP%2BMDgbQpX6YpzbL0U1efDbWMv%2BJW9NjmpFzbPqAIfdzPH8YxMnpaTHQc5RgLZpe%2F15wNWTBC8L9AVo8SD46ZkmQU9ZYHXCaiTY8SrpqzOp7%2BnWTRhJm6OWpCpex3VjviB2LKGgmoc71HRhkixVNtlAE5hjgQqvKGkNKpDGO%2B7FZeyQAL0rf7tlHwS9jyCvLSFduQWYu0tZHSlt76Ugla3h4eUxWBuglEnof%2FwWJg5c3KyKgtK0o37F%2BHDszPHF6Inhc0Kkp%2BY43rgUaO7%2FgEJpIq0B4VlchHnG2PbLMkzaMUCSIYaau20WHlLNMBhph1uH6j4NibrHKNzjwRMOuXusMGOqUBGn6%2B%2BWQFUT9SWKrvSyUqr%2F1CQE8dYSG9qD6bQg4otmyuF%2BmapcGIouewFmLvYhSNHbL4FHo53QsZ%2BhKUnyANHpYWxokzoszIL3N6nPZBsPJXGxmE01i6hgvJAD9RXk%2BUY4JhRL7MaF7mhURBQhR2excuwqOng4MbmkpLPusdMv8btm06GAKKERiHoHULz%2BM7vnb37Zzdx61sxAuugZr7GB8HANPB&X-Amz-Signature=2a76cf06209c6aa2d85abefcc6d12503140a6a80ed7bfd8bca1c0040ed93d08d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMPA2OWZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBa%2BBfy3aYSZ5w1Z72pX3metwXBv3ojOORlQKsWI5ZJ1AiEA%2Bdo0a9NhuTHn%2BC0cfJVU72o6K%2BfpQ1Tg13UQp0JjKMkqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEU32Ac8xghyBO5YBSrcAx%2FlCnLjftMMHlbP1%2FQx5QD5VN7GI6qCRTBRAW9mgtBqGO07SDrdVEVmS%2FKQOiMmz1KUU24%2BGgusLCvb1%2BonXVAMSygKKz061W3Cg42dUldSW7459UcXIp9VrNmko%2FHFz1YfgWxwkXJI8OAvd%2FK79%2BeOr9HKAM6YnDahULXDE852zG%2FCYIpA7ShoDQ0zvQUtcj9psR8u51t9ctZfGSXksKHM3hrRHKjyIIiYE4W25mICXsZA8ta%2F33Y2au7Xs60Zb3xhXLLjbGHXnlDmfW80C1wLUED4ps08HFkwOwC%2Fj%2B0WP%2BMDgbQpX6YpzbL0U1efDbWMv%2BJW9NjmpFzbPqAIfdzPH8YxMnpaTHQc5RgLZpe%2F15wNWTBC8L9AVo8SD46ZkmQU9ZYHXCaiTY8SrpqzOp7%2BnWTRhJm6OWpCpex3VjviB2LKGgmoc71HRhkixVNtlAE5hjgQqvKGkNKpDGO%2B7FZeyQAL0rf7tlHwS9jyCvLSFduQWYu0tZHSlt76Ugla3h4eUxWBuglEnof%2FwWJg5c3KyKgtK0o37F%2BHDszPHF6Inhc0Kkp%2BY43rgUaO7%2FgEJpIq0B4VlchHnG2PbLMkzaMUCSIYaau20WHlLNMBhph1uH6j4NibrHKNzjwRMOuXusMGOqUBGn6%2B%2BWQFUT9SWKrvSyUqr%2F1CQE8dYSG9qD6bQg4otmyuF%2BmapcGIouewFmLvYhSNHbL4FHo53QsZ%2BhKUnyANHpYWxokzoszIL3N6nPZBsPJXGxmE01i6hgvJAD9RXk%2BUY4JhRL7MaF7mhURBQhR2excuwqOng4MbmkpLPusdMv8btm06GAKKERiHoHULz%2BM7vnb37Zzdx61sxAuugZr7GB8HANPB&X-Amz-Signature=13c7e44e634ce11ee3a474dd9b46932fc9a25f258a98b24e1c046fd7ba1c03d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMPA2OWZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBa%2BBfy3aYSZ5w1Z72pX3metwXBv3ojOORlQKsWI5ZJ1AiEA%2Bdo0a9NhuTHn%2BC0cfJVU72o6K%2BfpQ1Tg13UQp0JjKMkqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEU32Ac8xghyBO5YBSrcAx%2FlCnLjftMMHlbP1%2FQx5QD5VN7GI6qCRTBRAW9mgtBqGO07SDrdVEVmS%2FKQOiMmz1KUU24%2BGgusLCvb1%2BonXVAMSygKKz061W3Cg42dUldSW7459UcXIp9VrNmko%2FHFz1YfgWxwkXJI8OAvd%2FK79%2BeOr9HKAM6YnDahULXDE852zG%2FCYIpA7ShoDQ0zvQUtcj9psR8u51t9ctZfGSXksKHM3hrRHKjyIIiYE4W25mICXsZA8ta%2F33Y2au7Xs60Zb3xhXLLjbGHXnlDmfW80C1wLUED4ps08HFkwOwC%2Fj%2B0WP%2BMDgbQpX6YpzbL0U1efDbWMv%2BJW9NjmpFzbPqAIfdzPH8YxMnpaTHQc5RgLZpe%2F15wNWTBC8L9AVo8SD46ZkmQU9ZYHXCaiTY8SrpqzOp7%2BnWTRhJm6OWpCpex3VjviB2LKGgmoc71HRhkixVNtlAE5hjgQqvKGkNKpDGO%2B7FZeyQAL0rf7tlHwS9jyCvLSFduQWYu0tZHSlt76Ugla3h4eUxWBuglEnof%2FwWJg5c3KyKgtK0o37F%2BHDszPHF6Inhc0Kkp%2BY43rgUaO7%2FgEJpIq0B4VlchHnG2PbLMkzaMUCSIYaau20WHlLNMBhph1uH6j4NibrHKNzjwRMOuXusMGOqUBGn6%2B%2BWQFUT9SWKrvSyUqr%2F1CQE8dYSG9qD6bQg4otmyuF%2BmapcGIouewFmLvYhSNHbL4FHo53QsZ%2BhKUnyANHpYWxokzoszIL3N6nPZBsPJXGxmE01i6hgvJAD9RXk%2BUY4JhRL7MaF7mhURBQhR2excuwqOng4MbmkpLPusdMv8btm06GAKKERiHoHULz%2BM7vnb37Zzdx61sxAuugZr7GB8HANPB&X-Amz-Signature=7edf68dd5a55e7fa2c286d599c7ffdff4985b4dfa462e7b462f2078906031736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
