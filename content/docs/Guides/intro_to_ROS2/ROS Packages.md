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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QDG7KWI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGmC0kCxTv0LujQK3cxJ%2FHSkXiQ%2BBpVotQV%2BfaGEchfmAiEAhnUGZWAwErtqdgqyEDJxB%2F99K%2BLwvIABBQg%2Fqkc1KXwq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDFQ3gaBKvM4uHVoZhCrcAyMwG4T4iouA1zfQf6JQyW1d1SudMFKKuj3wEeoxWm88kmrqCOLWMBp0fskIF5SgGeP2kxP3OvV8kfu%2FGXBpyvHoj%2BW4lPEH9%2B9LnavactXqoxLkh8Lvp0jxcqO8V8j%2BfV8vcDh5woLCIs%2F67TJpxVV925bMSvQpHYmF85vC85wVNt6q4zXKnXY%2FR6EDMLdZfZuQye90997JkjJEl0kqqAi0k3FjIdxnYdUwmA16bX3T%2B2yLED5ju9ZbMlgtZX9r%2FTvx6LUv8nZGejuKj%2FIR0xyjyKaXmWvAPbp1SmbbkkKftW%2FMf0FTrZTeMzWGU6xCkIqza%2FhRRQNPUP%2BiNCfMlSpfR%2F0jcI0yjeIhIUyHIvttXW%2FuxuWRjedr3KS6%2FCwZbSdLeSZ32k8O1mo9XwXidA6hwXyPDC6QauyJ%2BPQ%2BxvDIarzzhr7dhXEI5fqyotOtIBTCSAoXNM4D1KPJuYBALSQFjuDNGfaktbJ%2BtFHIcJU6jbQpVpKuWmfTI5itdkhRp2d2zig8M5gTq523%2FtAIrLZqtsXp0WbUt7gtJZ78z4WQ9qkRWpnyu%2F%2Fr6ahVwtRj0HfS6c13GXjW9poZFbTFF3BFpuFcDaPg6INUz1uSLJ4i900EzOHTggX86uHTMLy8kcQGOqUBv6f1EuglumZ46mbfpHVcPl4o97e69Ijxqf1hRYF8TbdL1evSl3e9zkwWOSQEtUuwkOEMhYoQtTkoIVPSSfADDBsRWgayQgUirBwkWr8AgyjskXGCxBmA7YCU8sHAzoj%2BGNsfufN512sNj%2BWJWL%2B9eAgCri3%2F9ZVbYz7ZafAl4rPveBfQf0JXablChisAVOYAwC3KzDzkZT5YQBZ89bMEn8V5ZEtj&X-Amz-Signature=6b3eeb2f82161fa76cfed7ae95cc0fec07f8940ef8095461c6be1590113edee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QDG7KWI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGmC0kCxTv0LujQK3cxJ%2FHSkXiQ%2BBpVotQV%2BfaGEchfmAiEAhnUGZWAwErtqdgqyEDJxB%2F99K%2BLwvIABBQg%2Fqkc1KXwq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDFQ3gaBKvM4uHVoZhCrcAyMwG4T4iouA1zfQf6JQyW1d1SudMFKKuj3wEeoxWm88kmrqCOLWMBp0fskIF5SgGeP2kxP3OvV8kfu%2FGXBpyvHoj%2BW4lPEH9%2B9LnavactXqoxLkh8Lvp0jxcqO8V8j%2BfV8vcDh5woLCIs%2F67TJpxVV925bMSvQpHYmF85vC85wVNt6q4zXKnXY%2FR6EDMLdZfZuQye90997JkjJEl0kqqAi0k3FjIdxnYdUwmA16bX3T%2B2yLED5ju9ZbMlgtZX9r%2FTvx6LUv8nZGejuKj%2FIR0xyjyKaXmWvAPbp1SmbbkkKftW%2FMf0FTrZTeMzWGU6xCkIqza%2FhRRQNPUP%2BiNCfMlSpfR%2F0jcI0yjeIhIUyHIvttXW%2FuxuWRjedr3KS6%2FCwZbSdLeSZ32k8O1mo9XwXidA6hwXyPDC6QauyJ%2BPQ%2BxvDIarzzhr7dhXEI5fqyotOtIBTCSAoXNM4D1KPJuYBALSQFjuDNGfaktbJ%2BtFHIcJU6jbQpVpKuWmfTI5itdkhRp2d2zig8M5gTq523%2FtAIrLZqtsXp0WbUt7gtJZ78z4WQ9qkRWpnyu%2F%2Fr6ahVwtRj0HfS6c13GXjW9poZFbTFF3BFpuFcDaPg6INUz1uSLJ4i900EzOHTggX86uHTMLy8kcQGOqUBv6f1EuglumZ46mbfpHVcPl4o97e69Ijxqf1hRYF8TbdL1evSl3e9zkwWOSQEtUuwkOEMhYoQtTkoIVPSSfADDBsRWgayQgUirBwkWr8AgyjskXGCxBmA7YCU8sHAzoj%2BGNsfufN512sNj%2BWJWL%2B9eAgCri3%2F9ZVbYz7ZafAl4rPveBfQf0JXablChisAVOYAwC3KzDzkZT5YQBZ89bMEn8V5ZEtj&X-Amz-Signature=3f9680e68ec2901660d193d378b4c4de8e58cb2b5d8cc28fb60e56d9fadb9c60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QDG7KWI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGmC0kCxTv0LujQK3cxJ%2FHSkXiQ%2BBpVotQV%2BfaGEchfmAiEAhnUGZWAwErtqdgqyEDJxB%2F99K%2BLwvIABBQg%2Fqkc1KXwq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDFQ3gaBKvM4uHVoZhCrcAyMwG4T4iouA1zfQf6JQyW1d1SudMFKKuj3wEeoxWm88kmrqCOLWMBp0fskIF5SgGeP2kxP3OvV8kfu%2FGXBpyvHoj%2BW4lPEH9%2B9LnavactXqoxLkh8Lvp0jxcqO8V8j%2BfV8vcDh5woLCIs%2F67TJpxVV925bMSvQpHYmF85vC85wVNt6q4zXKnXY%2FR6EDMLdZfZuQye90997JkjJEl0kqqAi0k3FjIdxnYdUwmA16bX3T%2B2yLED5ju9ZbMlgtZX9r%2FTvx6LUv8nZGejuKj%2FIR0xyjyKaXmWvAPbp1SmbbkkKftW%2FMf0FTrZTeMzWGU6xCkIqza%2FhRRQNPUP%2BiNCfMlSpfR%2F0jcI0yjeIhIUyHIvttXW%2FuxuWRjedr3KS6%2FCwZbSdLeSZ32k8O1mo9XwXidA6hwXyPDC6QauyJ%2BPQ%2BxvDIarzzhr7dhXEI5fqyotOtIBTCSAoXNM4D1KPJuYBALSQFjuDNGfaktbJ%2BtFHIcJU6jbQpVpKuWmfTI5itdkhRp2d2zig8M5gTq523%2FtAIrLZqtsXp0WbUt7gtJZ78z4WQ9qkRWpnyu%2F%2Fr6ahVwtRj0HfS6c13GXjW9poZFbTFF3BFpuFcDaPg6INUz1uSLJ4i900EzOHTggX86uHTMLy8kcQGOqUBv6f1EuglumZ46mbfpHVcPl4o97e69Ijxqf1hRYF8TbdL1evSl3e9zkwWOSQEtUuwkOEMhYoQtTkoIVPSSfADDBsRWgayQgUirBwkWr8AgyjskXGCxBmA7YCU8sHAzoj%2BGNsfufN512sNj%2BWJWL%2B9eAgCri3%2F9ZVbYz7ZafAl4rPveBfQf0JXablChisAVOYAwC3KzDzkZT5YQBZ89bMEn8V5ZEtj&X-Amz-Signature=9bf60c44a5b594a07d05fe571a91d0d78028fa3b553e6c512220dbc7635e73de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QDG7KWI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGmC0kCxTv0LujQK3cxJ%2FHSkXiQ%2BBpVotQV%2BfaGEchfmAiEAhnUGZWAwErtqdgqyEDJxB%2F99K%2BLwvIABBQg%2Fqkc1KXwq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDFQ3gaBKvM4uHVoZhCrcAyMwG4T4iouA1zfQf6JQyW1d1SudMFKKuj3wEeoxWm88kmrqCOLWMBp0fskIF5SgGeP2kxP3OvV8kfu%2FGXBpyvHoj%2BW4lPEH9%2B9LnavactXqoxLkh8Lvp0jxcqO8V8j%2BfV8vcDh5woLCIs%2F67TJpxVV925bMSvQpHYmF85vC85wVNt6q4zXKnXY%2FR6EDMLdZfZuQye90997JkjJEl0kqqAi0k3FjIdxnYdUwmA16bX3T%2B2yLED5ju9ZbMlgtZX9r%2FTvx6LUv8nZGejuKj%2FIR0xyjyKaXmWvAPbp1SmbbkkKftW%2FMf0FTrZTeMzWGU6xCkIqza%2FhRRQNPUP%2BiNCfMlSpfR%2F0jcI0yjeIhIUyHIvttXW%2FuxuWRjedr3KS6%2FCwZbSdLeSZ32k8O1mo9XwXidA6hwXyPDC6QauyJ%2BPQ%2BxvDIarzzhr7dhXEI5fqyotOtIBTCSAoXNM4D1KPJuYBALSQFjuDNGfaktbJ%2BtFHIcJU6jbQpVpKuWmfTI5itdkhRp2d2zig8M5gTq523%2FtAIrLZqtsXp0WbUt7gtJZ78z4WQ9qkRWpnyu%2F%2Fr6ahVwtRj0HfS6c13GXjW9poZFbTFF3BFpuFcDaPg6INUz1uSLJ4i900EzOHTggX86uHTMLy8kcQGOqUBv6f1EuglumZ46mbfpHVcPl4o97e69Ijxqf1hRYF8TbdL1evSl3e9zkwWOSQEtUuwkOEMhYoQtTkoIVPSSfADDBsRWgayQgUirBwkWr8AgyjskXGCxBmA7YCU8sHAzoj%2BGNsfufN512sNj%2BWJWL%2B9eAgCri3%2F9ZVbYz7ZafAl4rPveBfQf0JXablChisAVOYAwC3KzDzkZT5YQBZ89bMEn8V5ZEtj&X-Amz-Signature=591b7177fdbd91301afc3a2a8c0cc2bd03820866ff9efb473cc7c5d90867436f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QDG7KWI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGmC0kCxTv0LujQK3cxJ%2FHSkXiQ%2BBpVotQV%2BfaGEchfmAiEAhnUGZWAwErtqdgqyEDJxB%2F99K%2BLwvIABBQg%2Fqkc1KXwq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDFQ3gaBKvM4uHVoZhCrcAyMwG4T4iouA1zfQf6JQyW1d1SudMFKKuj3wEeoxWm88kmrqCOLWMBp0fskIF5SgGeP2kxP3OvV8kfu%2FGXBpyvHoj%2BW4lPEH9%2B9LnavactXqoxLkh8Lvp0jxcqO8V8j%2BfV8vcDh5woLCIs%2F67TJpxVV925bMSvQpHYmF85vC85wVNt6q4zXKnXY%2FR6EDMLdZfZuQye90997JkjJEl0kqqAi0k3FjIdxnYdUwmA16bX3T%2B2yLED5ju9ZbMlgtZX9r%2FTvx6LUv8nZGejuKj%2FIR0xyjyKaXmWvAPbp1SmbbkkKftW%2FMf0FTrZTeMzWGU6xCkIqza%2FhRRQNPUP%2BiNCfMlSpfR%2F0jcI0yjeIhIUyHIvttXW%2FuxuWRjedr3KS6%2FCwZbSdLeSZ32k8O1mo9XwXidA6hwXyPDC6QauyJ%2BPQ%2BxvDIarzzhr7dhXEI5fqyotOtIBTCSAoXNM4D1KPJuYBALSQFjuDNGfaktbJ%2BtFHIcJU6jbQpVpKuWmfTI5itdkhRp2d2zig8M5gTq523%2FtAIrLZqtsXp0WbUt7gtJZ78z4WQ9qkRWpnyu%2F%2Fr6ahVwtRj0HfS6c13GXjW9poZFbTFF3BFpuFcDaPg6INUz1uSLJ4i900EzOHTggX86uHTMLy8kcQGOqUBv6f1EuglumZ46mbfpHVcPl4o97e69Ijxqf1hRYF8TbdL1evSl3e9zkwWOSQEtUuwkOEMhYoQtTkoIVPSSfADDBsRWgayQgUirBwkWr8AgyjskXGCxBmA7YCU8sHAzoj%2BGNsfufN512sNj%2BWJWL%2B9eAgCri3%2F9ZVbYz7ZafAl4rPveBfQf0JXablChisAVOYAwC3KzDzkZT5YQBZ89bMEn8V5ZEtj&X-Amz-Signature=0b31d19b8dfa59fdb4326a182c6e90aae9b502bc65093a5a95192033156170a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QDG7KWI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGmC0kCxTv0LujQK3cxJ%2FHSkXiQ%2BBpVotQV%2BfaGEchfmAiEAhnUGZWAwErtqdgqyEDJxB%2F99K%2BLwvIABBQg%2Fqkc1KXwq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDFQ3gaBKvM4uHVoZhCrcAyMwG4T4iouA1zfQf6JQyW1d1SudMFKKuj3wEeoxWm88kmrqCOLWMBp0fskIF5SgGeP2kxP3OvV8kfu%2FGXBpyvHoj%2BW4lPEH9%2B9LnavactXqoxLkh8Lvp0jxcqO8V8j%2BfV8vcDh5woLCIs%2F67TJpxVV925bMSvQpHYmF85vC85wVNt6q4zXKnXY%2FR6EDMLdZfZuQye90997JkjJEl0kqqAi0k3FjIdxnYdUwmA16bX3T%2B2yLED5ju9ZbMlgtZX9r%2FTvx6LUv8nZGejuKj%2FIR0xyjyKaXmWvAPbp1SmbbkkKftW%2FMf0FTrZTeMzWGU6xCkIqza%2FhRRQNPUP%2BiNCfMlSpfR%2F0jcI0yjeIhIUyHIvttXW%2FuxuWRjedr3KS6%2FCwZbSdLeSZ32k8O1mo9XwXidA6hwXyPDC6QauyJ%2BPQ%2BxvDIarzzhr7dhXEI5fqyotOtIBTCSAoXNM4D1KPJuYBALSQFjuDNGfaktbJ%2BtFHIcJU6jbQpVpKuWmfTI5itdkhRp2d2zig8M5gTq523%2FtAIrLZqtsXp0WbUt7gtJZ78z4WQ9qkRWpnyu%2F%2Fr6ahVwtRj0HfS6c13GXjW9poZFbTFF3BFpuFcDaPg6INUz1uSLJ4i900EzOHTggX86uHTMLy8kcQGOqUBv6f1EuglumZ46mbfpHVcPl4o97e69Ijxqf1hRYF8TbdL1evSl3e9zkwWOSQEtUuwkOEMhYoQtTkoIVPSSfADDBsRWgayQgUirBwkWr8AgyjskXGCxBmA7YCU8sHAzoj%2BGNsfufN512sNj%2BWJWL%2B9eAgCri3%2F9ZVbYz7ZafAl4rPveBfQf0JXablChisAVOYAwC3KzDzkZT5YQBZ89bMEn8V5ZEtj&X-Amz-Signature=d9925a68df7a5724428d1c9a3babc6cfea93ab5ab7895ed88f0d6884a5dca0ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QDG7KWI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGmC0kCxTv0LujQK3cxJ%2FHSkXiQ%2BBpVotQV%2BfaGEchfmAiEAhnUGZWAwErtqdgqyEDJxB%2F99K%2BLwvIABBQg%2Fqkc1KXwq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDFQ3gaBKvM4uHVoZhCrcAyMwG4T4iouA1zfQf6JQyW1d1SudMFKKuj3wEeoxWm88kmrqCOLWMBp0fskIF5SgGeP2kxP3OvV8kfu%2FGXBpyvHoj%2BW4lPEH9%2B9LnavactXqoxLkh8Lvp0jxcqO8V8j%2BfV8vcDh5woLCIs%2F67TJpxVV925bMSvQpHYmF85vC85wVNt6q4zXKnXY%2FR6EDMLdZfZuQye90997JkjJEl0kqqAi0k3FjIdxnYdUwmA16bX3T%2B2yLED5ju9ZbMlgtZX9r%2FTvx6LUv8nZGejuKj%2FIR0xyjyKaXmWvAPbp1SmbbkkKftW%2FMf0FTrZTeMzWGU6xCkIqza%2FhRRQNPUP%2BiNCfMlSpfR%2F0jcI0yjeIhIUyHIvttXW%2FuxuWRjedr3KS6%2FCwZbSdLeSZ32k8O1mo9XwXidA6hwXyPDC6QauyJ%2BPQ%2BxvDIarzzhr7dhXEI5fqyotOtIBTCSAoXNM4D1KPJuYBALSQFjuDNGfaktbJ%2BtFHIcJU6jbQpVpKuWmfTI5itdkhRp2d2zig8M5gTq523%2FtAIrLZqtsXp0WbUt7gtJZ78z4WQ9qkRWpnyu%2F%2Fr6ahVwtRj0HfS6c13GXjW9poZFbTFF3BFpuFcDaPg6INUz1uSLJ4i900EzOHTggX86uHTMLy8kcQGOqUBv6f1EuglumZ46mbfpHVcPl4o97e69Ijxqf1hRYF8TbdL1evSl3e9zkwWOSQEtUuwkOEMhYoQtTkoIVPSSfADDBsRWgayQgUirBwkWr8AgyjskXGCxBmA7YCU8sHAzoj%2BGNsfufN512sNj%2BWJWL%2B9eAgCri3%2F9ZVbYz7ZafAl4rPveBfQf0JXablChisAVOYAwC3KzDzkZT5YQBZ89bMEn8V5ZEtj&X-Amz-Signature=c356bbb176eb291f7b19a17a3f95aaf6ae4a7b85ed1dcf04905ba081f1e046bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
