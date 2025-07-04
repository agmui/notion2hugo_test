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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466566RDN6B%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIH5CMcHp%2BGak0T5nR6Smur%2Bojx%2FemIBEHiHgGmu8cYHEAiEA7wvWZhg%2FVa8PgFJW4QzQuCVIEDe7z2WmCTOghLyj2IUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHS2A1MTqm2gTsVB5SrcA4HqIGBm6O3RdQUE8fcHl7ZiaxZj7au%2FePEGic5RoBzSTJebgSs2ES%2BufMgcqEseqUrHFG7Aar4iWY6aNqJFWl6DVcKMUQIgbYe0MVm2ANy9tPz1oyMb%2FLYgIpimN80%2FgCKQtSwbrPKeoNHtHduoxKfsmRIJ1fSJ899ayUesOvtMgaDjDrGMMfY4UGdQHjaJ9lLLJRpv8z%2F3fglQBWc2u%2BxnXxtlykZtMa71Ip433RGtF71O6yRXqUoDz1o8JYImR0YkdwtW%2Bi3n%2BpffNvt8IBb84wAFa%2FUiZCe%2Bsppz%2FHut%2ByVhCBUgNUu4T%2FkOat71bxTpLjfxsB%2FpNMghJsK8mwpmIlYWG8Km9OtEzdMktkNfn%2B%2BYX53dfWhWhwuz8LP2JrsrfEmzs6YAFByZ6N2Epns0kPfZBd3TZG1zUDHBjoDkAN80OmnGbfoWtF%2FsL0puoLDc8WpFh08L%2BKLFC5i2vUrpgo5X%2FJtJtR5DMbKIZP5fZKUnXNWkHYhyZuBpmE2PjB8wlE11zMjKVVwfBaj2ZNbBRgQnO1U8olkm%2Fu98sX2JbC2lN0MiZ4lAjEN0E3tYm2Ipc2eWQeZK5BC9ZBj5CjOVvXrvzfjWHjHH7sBB3%2FOP4XJ46a0nmeTx%2Fv5KMOuNncMGOqUBEZootTAPHXbSS26zaXlSqQcs77PFeIelJAGS7P4wWAIrWVK0X0XrCtJ%2FySJnjdqTJXzMr5Fb8OaSEP38Zp%2FsOKDQsJdgVhHny2y4ydgseXMr2iW1qxAdpCq9wy6MQvD5OxYuDq%2BjdXHYOp3PsjbaCL1bZO3wKVj%2BY0VusVu1Tk%2FoZpulCcNGlGUvG0wqZ46ndaRfhcw%2BvoZFZRFG0QvkrPCSwjwR&X-Amz-Signature=e19fa4b4cde654856cb9625a323a4c06367d4f8c6fe9915d483339fa42b74228&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466566RDN6B%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIH5CMcHp%2BGak0T5nR6Smur%2Bojx%2FemIBEHiHgGmu8cYHEAiEA7wvWZhg%2FVa8PgFJW4QzQuCVIEDe7z2WmCTOghLyj2IUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHS2A1MTqm2gTsVB5SrcA4HqIGBm6O3RdQUE8fcHl7ZiaxZj7au%2FePEGic5RoBzSTJebgSs2ES%2BufMgcqEseqUrHFG7Aar4iWY6aNqJFWl6DVcKMUQIgbYe0MVm2ANy9tPz1oyMb%2FLYgIpimN80%2FgCKQtSwbrPKeoNHtHduoxKfsmRIJ1fSJ899ayUesOvtMgaDjDrGMMfY4UGdQHjaJ9lLLJRpv8z%2F3fglQBWc2u%2BxnXxtlykZtMa71Ip433RGtF71O6yRXqUoDz1o8JYImR0YkdwtW%2Bi3n%2BpffNvt8IBb84wAFa%2FUiZCe%2Bsppz%2FHut%2ByVhCBUgNUu4T%2FkOat71bxTpLjfxsB%2FpNMghJsK8mwpmIlYWG8Km9OtEzdMktkNfn%2B%2BYX53dfWhWhwuz8LP2JrsrfEmzs6YAFByZ6N2Epns0kPfZBd3TZG1zUDHBjoDkAN80OmnGbfoWtF%2FsL0puoLDc8WpFh08L%2BKLFC5i2vUrpgo5X%2FJtJtR5DMbKIZP5fZKUnXNWkHYhyZuBpmE2PjB8wlE11zMjKVVwfBaj2ZNbBRgQnO1U8olkm%2Fu98sX2JbC2lN0MiZ4lAjEN0E3tYm2Ipc2eWQeZK5BC9ZBj5CjOVvXrvzfjWHjHH7sBB3%2FOP4XJ46a0nmeTx%2Fv5KMOuNncMGOqUBEZootTAPHXbSS26zaXlSqQcs77PFeIelJAGS7P4wWAIrWVK0X0XrCtJ%2FySJnjdqTJXzMr5Fb8OaSEP38Zp%2FsOKDQsJdgVhHny2y4ydgseXMr2iW1qxAdpCq9wy6MQvD5OxYuDq%2BjdXHYOp3PsjbaCL1bZO3wKVj%2BY0VusVu1Tk%2FoZpulCcNGlGUvG0wqZ46ndaRfhcw%2BvoZFZRFG0QvkrPCSwjwR&X-Amz-Signature=fd7f5b77bc5af26c55c6f0cae9efa8f98ea470fa21044bbf947ef97cd275b103&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466566RDN6B%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIH5CMcHp%2BGak0T5nR6Smur%2Bojx%2FemIBEHiHgGmu8cYHEAiEA7wvWZhg%2FVa8PgFJW4QzQuCVIEDe7z2WmCTOghLyj2IUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHS2A1MTqm2gTsVB5SrcA4HqIGBm6O3RdQUE8fcHl7ZiaxZj7au%2FePEGic5RoBzSTJebgSs2ES%2BufMgcqEseqUrHFG7Aar4iWY6aNqJFWl6DVcKMUQIgbYe0MVm2ANy9tPz1oyMb%2FLYgIpimN80%2FgCKQtSwbrPKeoNHtHduoxKfsmRIJ1fSJ899ayUesOvtMgaDjDrGMMfY4UGdQHjaJ9lLLJRpv8z%2F3fglQBWc2u%2BxnXxtlykZtMa71Ip433RGtF71O6yRXqUoDz1o8JYImR0YkdwtW%2Bi3n%2BpffNvt8IBb84wAFa%2FUiZCe%2Bsppz%2FHut%2ByVhCBUgNUu4T%2FkOat71bxTpLjfxsB%2FpNMghJsK8mwpmIlYWG8Km9OtEzdMktkNfn%2B%2BYX53dfWhWhwuz8LP2JrsrfEmzs6YAFByZ6N2Epns0kPfZBd3TZG1zUDHBjoDkAN80OmnGbfoWtF%2FsL0puoLDc8WpFh08L%2BKLFC5i2vUrpgo5X%2FJtJtR5DMbKIZP5fZKUnXNWkHYhyZuBpmE2PjB8wlE11zMjKVVwfBaj2ZNbBRgQnO1U8olkm%2Fu98sX2JbC2lN0MiZ4lAjEN0E3tYm2Ipc2eWQeZK5BC9ZBj5CjOVvXrvzfjWHjHH7sBB3%2FOP4XJ46a0nmeTx%2Fv5KMOuNncMGOqUBEZootTAPHXbSS26zaXlSqQcs77PFeIelJAGS7P4wWAIrWVK0X0XrCtJ%2FySJnjdqTJXzMr5Fb8OaSEP38Zp%2FsOKDQsJdgVhHny2y4ydgseXMr2iW1qxAdpCq9wy6MQvD5OxYuDq%2BjdXHYOp3PsjbaCL1bZO3wKVj%2BY0VusVu1Tk%2FoZpulCcNGlGUvG0wqZ46ndaRfhcw%2BvoZFZRFG0QvkrPCSwjwR&X-Amz-Signature=94dee063c38dea3494eb3cdb4cd19ace0da498fcf5dff2da431025816203cce8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466566RDN6B%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIH5CMcHp%2BGak0T5nR6Smur%2Bojx%2FemIBEHiHgGmu8cYHEAiEA7wvWZhg%2FVa8PgFJW4QzQuCVIEDe7z2WmCTOghLyj2IUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHS2A1MTqm2gTsVB5SrcA4HqIGBm6O3RdQUE8fcHl7ZiaxZj7au%2FePEGic5RoBzSTJebgSs2ES%2BufMgcqEseqUrHFG7Aar4iWY6aNqJFWl6DVcKMUQIgbYe0MVm2ANy9tPz1oyMb%2FLYgIpimN80%2FgCKQtSwbrPKeoNHtHduoxKfsmRIJ1fSJ899ayUesOvtMgaDjDrGMMfY4UGdQHjaJ9lLLJRpv8z%2F3fglQBWc2u%2BxnXxtlykZtMa71Ip433RGtF71O6yRXqUoDz1o8JYImR0YkdwtW%2Bi3n%2BpffNvt8IBb84wAFa%2FUiZCe%2Bsppz%2FHut%2ByVhCBUgNUu4T%2FkOat71bxTpLjfxsB%2FpNMghJsK8mwpmIlYWG8Km9OtEzdMktkNfn%2B%2BYX53dfWhWhwuz8LP2JrsrfEmzs6YAFByZ6N2Epns0kPfZBd3TZG1zUDHBjoDkAN80OmnGbfoWtF%2FsL0puoLDc8WpFh08L%2BKLFC5i2vUrpgo5X%2FJtJtR5DMbKIZP5fZKUnXNWkHYhyZuBpmE2PjB8wlE11zMjKVVwfBaj2ZNbBRgQnO1U8olkm%2Fu98sX2JbC2lN0MiZ4lAjEN0E3tYm2Ipc2eWQeZK5BC9ZBj5CjOVvXrvzfjWHjHH7sBB3%2FOP4XJ46a0nmeTx%2Fv5KMOuNncMGOqUBEZootTAPHXbSS26zaXlSqQcs77PFeIelJAGS7P4wWAIrWVK0X0XrCtJ%2FySJnjdqTJXzMr5Fb8OaSEP38Zp%2FsOKDQsJdgVhHny2y4ydgseXMr2iW1qxAdpCq9wy6MQvD5OxYuDq%2BjdXHYOp3PsjbaCL1bZO3wKVj%2BY0VusVu1Tk%2FoZpulCcNGlGUvG0wqZ46ndaRfhcw%2BvoZFZRFG0QvkrPCSwjwR&X-Amz-Signature=f5d9011b947c1de810e260629a078a07e9c13182bca20e5b4ee7815addf10a7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466566RDN6B%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIH5CMcHp%2BGak0T5nR6Smur%2Bojx%2FemIBEHiHgGmu8cYHEAiEA7wvWZhg%2FVa8PgFJW4QzQuCVIEDe7z2WmCTOghLyj2IUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHS2A1MTqm2gTsVB5SrcA4HqIGBm6O3RdQUE8fcHl7ZiaxZj7au%2FePEGic5RoBzSTJebgSs2ES%2BufMgcqEseqUrHFG7Aar4iWY6aNqJFWl6DVcKMUQIgbYe0MVm2ANy9tPz1oyMb%2FLYgIpimN80%2FgCKQtSwbrPKeoNHtHduoxKfsmRIJ1fSJ899ayUesOvtMgaDjDrGMMfY4UGdQHjaJ9lLLJRpv8z%2F3fglQBWc2u%2BxnXxtlykZtMa71Ip433RGtF71O6yRXqUoDz1o8JYImR0YkdwtW%2Bi3n%2BpffNvt8IBb84wAFa%2FUiZCe%2Bsppz%2FHut%2ByVhCBUgNUu4T%2FkOat71bxTpLjfxsB%2FpNMghJsK8mwpmIlYWG8Km9OtEzdMktkNfn%2B%2BYX53dfWhWhwuz8LP2JrsrfEmzs6YAFByZ6N2Epns0kPfZBd3TZG1zUDHBjoDkAN80OmnGbfoWtF%2FsL0puoLDc8WpFh08L%2BKLFC5i2vUrpgo5X%2FJtJtR5DMbKIZP5fZKUnXNWkHYhyZuBpmE2PjB8wlE11zMjKVVwfBaj2ZNbBRgQnO1U8olkm%2Fu98sX2JbC2lN0MiZ4lAjEN0E3tYm2Ipc2eWQeZK5BC9ZBj5CjOVvXrvzfjWHjHH7sBB3%2FOP4XJ46a0nmeTx%2Fv5KMOuNncMGOqUBEZootTAPHXbSS26zaXlSqQcs77PFeIelJAGS7P4wWAIrWVK0X0XrCtJ%2FySJnjdqTJXzMr5Fb8OaSEP38Zp%2FsOKDQsJdgVhHny2y4ydgseXMr2iW1qxAdpCq9wy6MQvD5OxYuDq%2BjdXHYOp3PsjbaCL1bZO3wKVj%2BY0VusVu1Tk%2FoZpulCcNGlGUvG0wqZ46ndaRfhcw%2BvoZFZRFG0QvkrPCSwjwR&X-Amz-Signature=1f4fea86540d682854f2586cdef25265859616244449a124434d091fbf288cee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466566RDN6B%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIH5CMcHp%2BGak0T5nR6Smur%2Bojx%2FemIBEHiHgGmu8cYHEAiEA7wvWZhg%2FVa8PgFJW4QzQuCVIEDe7z2WmCTOghLyj2IUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHS2A1MTqm2gTsVB5SrcA4HqIGBm6O3RdQUE8fcHl7ZiaxZj7au%2FePEGic5RoBzSTJebgSs2ES%2BufMgcqEseqUrHFG7Aar4iWY6aNqJFWl6DVcKMUQIgbYe0MVm2ANy9tPz1oyMb%2FLYgIpimN80%2FgCKQtSwbrPKeoNHtHduoxKfsmRIJ1fSJ899ayUesOvtMgaDjDrGMMfY4UGdQHjaJ9lLLJRpv8z%2F3fglQBWc2u%2BxnXxtlykZtMa71Ip433RGtF71O6yRXqUoDz1o8JYImR0YkdwtW%2Bi3n%2BpffNvt8IBb84wAFa%2FUiZCe%2Bsppz%2FHut%2ByVhCBUgNUu4T%2FkOat71bxTpLjfxsB%2FpNMghJsK8mwpmIlYWG8Km9OtEzdMktkNfn%2B%2BYX53dfWhWhwuz8LP2JrsrfEmzs6YAFByZ6N2Epns0kPfZBd3TZG1zUDHBjoDkAN80OmnGbfoWtF%2FsL0puoLDc8WpFh08L%2BKLFC5i2vUrpgo5X%2FJtJtR5DMbKIZP5fZKUnXNWkHYhyZuBpmE2PjB8wlE11zMjKVVwfBaj2ZNbBRgQnO1U8olkm%2Fu98sX2JbC2lN0MiZ4lAjEN0E3tYm2Ipc2eWQeZK5BC9ZBj5CjOVvXrvzfjWHjHH7sBB3%2FOP4XJ46a0nmeTx%2Fv5KMOuNncMGOqUBEZootTAPHXbSS26zaXlSqQcs77PFeIelJAGS7P4wWAIrWVK0X0XrCtJ%2FySJnjdqTJXzMr5Fb8OaSEP38Zp%2FsOKDQsJdgVhHny2y4ydgseXMr2iW1qxAdpCq9wy6MQvD5OxYuDq%2BjdXHYOp3PsjbaCL1bZO3wKVj%2BY0VusVu1Tk%2FoZpulCcNGlGUvG0wqZ46ndaRfhcw%2BvoZFZRFG0QvkrPCSwjwR&X-Amz-Signature=515c0d540660ec4b238aab6e1009ee1d25eeaf4fdb22f9169c1e727e5d9ad74b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466566RDN6B%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIH5CMcHp%2BGak0T5nR6Smur%2Bojx%2FemIBEHiHgGmu8cYHEAiEA7wvWZhg%2FVa8PgFJW4QzQuCVIEDe7z2WmCTOghLyj2IUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHS2A1MTqm2gTsVB5SrcA4HqIGBm6O3RdQUE8fcHl7ZiaxZj7au%2FePEGic5RoBzSTJebgSs2ES%2BufMgcqEseqUrHFG7Aar4iWY6aNqJFWl6DVcKMUQIgbYe0MVm2ANy9tPz1oyMb%2FLYgIpimN80%2FgCKQtSwbrPKeoNHtHduoxKfsmRIJ1fSJ899ayUesOvtMgaDjDrGMMfY4UGdQHjaJ9lLLJRpv8z%2F3fglQBWc2u%2BxnXxtlykZtMa71Ip433RGtF71O6yRXqUoDz1o8JYImR0YkdwtW%2Bi3n%2BpffNvt8IBb84wAFa%2FUiZCe%2Bsppz%2FHut%2ByVhCBUgNUu4T%2FkOat71bxTpLjfxsB%2FpNMghJsK8mwpmIlYWG8Km9OtEzdMktkNfn%2B%2BYX53dfWhWhwuz8LP2JrsrfEmzs6YAFByZ6N2Epns0kPfZBd3TZG1zUDHBjoDkAN80OmnGbfoWtF%2FsL0puoLDc8WpFh08L%2BKLFC5i2vUrpgo5X%2FJtJtR5DMbKIZP5fZKUnXNWkHYhyZuBpmE2PjB8wlE11zMjKVVwfBaj2ZNbBRgQnO1U8olkm%2Fu98sX2JbC2lN0MiZ4lAjEN0E3tYm2Ipc2eWQeZK5BC9ZBj5CjOVvXrvzfjWHjHH7sBB3%2FOP4XJ46a0nmeTx%2Fv5KMOuNncMGOqUBEZootTAPHXbSS26zaXlSqQcs77PFeIelJAGS7P4wWAIrWVK0X0XrCtJ%2FySJnjdqTJXzMr5Fb8OaSEP38Zp%2FsOKDQsJdgVhHny2y4ydgseXMr2iW1qxAdpCq9wy6MQvD5OxYuDq%2BjdXHYOp3PsjbaCL1bZO3wKVj%2BY0VusVu1Tk%2FoZpulCcNGlGUvG0wqZ46ndaRfhcw%2BvoZFZRFG0QvkrPCSwjwR&X-Amz-Signature=9a31f8ae02205c7afede8e7f38200891c3a60f4aa70ecc92ba6f9f4e11bb98e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
