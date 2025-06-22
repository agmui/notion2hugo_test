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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD4LEPNH%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIGEJrUPc%2Fh3eiOWs3%2FmYZXY2HEppOLI7pZQaWnkeuF1RAiBYfIpEav14kMoou2szaIxv2bHF3TbXqhivZc%2FjBipqDiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5EzKLW27XnKiMMO7KtwDV69l9HUZ5Vl%2B%2BdHyB02jx09MqyoQgX8LVvf6Me4lLNB8VrOIhz2QzXuYlwQwF4a5heDOQj5a7VHpAVW9DlsRIZ8D7nAUh7H%2FoqX1aMsS29uSeFf%2Fip8rblgbnBTSFUm0y3pwNmAI%2FBX%2BJS0VypZ88j9kxw%2FW9Qy1KwLiUhIZGZ3Fc%2BfMUCNO9U28RMPJrEcpHDhKLudyvR7iSrxuWZ8bDT1%2BKP5TAK%2BqwQsIr49KCl%2F69dCQ%2FLaKz3cWuHlMhejn8OoH7CIYVJhKEVEtecYK7g2NvhA3YgypGJYD5FKcQEAvN2PHy7zVPB3wxwLhDWcRnDRnVJN%2Bk5HmbHRqwQD4vMy1iW%2Fw4GTFWbW8FJHW5r%2BBcz1p4uv8eo6IUVP7gkWlp40IaGRGFqeIy8bWUON5JQsDd8%2F4Nhgtx6v2I07HKCjq0ZWA1x7PwvluGYI3o2vWnHIeP7nS4JHUmXHdmI%2FzE%2F8IxnSyRl99ygy%2F29gzT3x%2FojeEBHD5SUptz2Aws5G%2FSfgjQeBzKC6Psp1lHDNu9kXeGzGtM1ZM0NQCToy49LMqyTBSP2l4%2B1fcM0QgL3JR9zw6Ia6YAY%2FSm%2BmWdkA2AO%2B7t%2BOz1rHxFacsa1E%2BBg7uKNj4WETeNgcO4Hgw34zgwgY6pgGazZIAWVc6nVeH6y0c4sZapxao%2FGovlH0eU2Jm7gFAaq6WVJzx5q0AUYzpQ8qeJbmO3aAmU0EFInQc4yAfHol61X%2FaTWJwvVQsbLoaRcnPmDttlKtj7FIz42R7nByjR%2BE4hV0DGWnLPnFa2Wo0NZrICi7H2VmxEYmg76%2F2r1pplqPCdNx6wnjck3OLKBgfiSeUpzCbUZV%2BTKi85Lm7dAHVaXYmXkhH&X-Amz-Signature=07405eaa7dd89c03cc9ab5e5467159848c1c024e961a389c82df3fffd30e8901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD4LEPNH%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIGEJrUPc%2Fh3eiOWs3%2FmYZXY2HEppOLI7pZQaWnkeuF1RAiBYfIpEav14kMoou2szaIxv2bHF3TbXqhivZc%2FjBipqDiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5EzKLW27XnKiMMO7KtwDV69l9HUZ5Vl%2B%2BdHyB02jx09MqyoQgX8LVvf6Me4lLNB8VrOIhz2QzXuYlwQwF4a5heDOQj5a7VHpAVW9DlsRIZ8D7nAUh7H%2FoqX1aMsS29uSeFf%2Fip8rblgbnBTSFUm0y3pwNmAI%2FBX%2BJS0VypZ88j9kxw%2FW9Qy1KwLiUhIZGZ3Fc%2BfMUCNO9U28RMPJrEcpHDhKLudyvR7iSrxuWZ8bDT1%2BKP5TAK%2BqwQsIr49KCl%2F69dCQ%2FLaKz3cWuHlMhejn8OoH7CIYVJhKEVEtecYK7g2NvhA3YgypGJYD5FKcQEAvN2PHy7zVPB3wxwLhDWcRnDRnVJN%2Bk5HmbHRqwQD4vMy1iW%2Fw4GTFWbW8FJHW5r%2BBcz1p4uv8eo6IUVP7gkWlp40IaGRGFqeIy8bWUON5JQsDd8%2F4Nhgtx6v2I07HKCjq0ZWA1x7PwvluGYI3o2vWnHIeP7nS4JHUmXHdmI%2FzE%2F8IxnSyRl99ygy%2F29gzT3x%2FojeEBHD5SUptz2Aws5G%2FSfgjQeBzKC6Psp1lHDNu9kXeGzGtM1ZM0NQCToy49LMqyTBSP2l4%2B1fcM0QgL3JR9zw6Ia6YAY%2FSm%2BmWdkA2AO%2B7t%2BOz1rHxFacsa1E%2BBg7uKNj4WETeNgcO4Hgw34zgwgY6pgGazZIAWVc6nVeH6y0c4sZapxao%2FGovlH0eU2Jm7gFAaq6WVJzx5q0AUYzpQ8qeJbmO3aAmU0EFInQc4yAfHol61X%2FaTWJwvVQsbLoaRcnPmDttlKtj7FIz42R7nByjR%2BE4hV0DGWnLPnFa2Wo0NZrICi7H2VmxEYmg76%2F2r1pplqPCdNx6wnjck3OLKBgfiSeUpzCbUZV%2BTKi85Lm7dAHVaXYmXkhH&X-Amz-Signature=0165d850db3203284115ca2ebf5f266e2c5c958d33b9530eef525a0d7d99d864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD4LEPNH%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIGEJrUPc%2Fh3eiOWs3%2FmYZXY2HEppOLI7pZQaWnkeuF1RAiBYfIpEav14kMoou2szaIxv2bHF3TbXqhivZc%2FjBipqDiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5EzKLW27XnKiMMO7KtwDV69l9HUZ5Vl%2B%2BdHyB02jx09MqyoQgX8LVvf6Me4lLNB8VrOIhz2QzXuYlwQwF4a5heDOQj5a7VHpAVW9DlsRIZ8D7nAUh7H%2FoqX1aMsS29uSeFf%2Fip8rblgbnBTSFUm0y3pwNmAI%2FBX%2BJS0VypZ88j9kxw%2FW9Qy1KwLiUhIZGZ3Fc%2BfMUCNO9U28RMPJrEcpHDhKLudyvR7iSrxuWZ8bDT1%2BKP5TAK%2BqwQsIr49KCl%2F69dCQ%2FLaKz3cWuHlMhejn8OoH7CIYVJhKEVEtecYK7g2NvhA3YgypGJYD5FKcQEAvN2PHy7zVPB3wxwLhDWcRnDRnVJN%2Bk5HmbHRqwQD4vMy1iW%2Fw4GTFWbW8FJHW5r%2BBcz1p4uv8eo6IUVP7gkWlp40IaGRGFqeIy8bWUON5JQsDd8%2F4Nhgtx6v2I07HKCjq0ZWA1x7PwvluGYI3o2vWnHIeP7nS4JHUmXHdmI%2FzE%2F8IxnSyRl99ygy%2F29gzT3x%2FojeEBHD5SUptz2Aws5G%2FSfgjQeBzKC6Psp1lHDNu9kXeGzGtM1ZM0NQCToy49LMqyTBSP2l4%2B1fcM0QgL3JR9zw6Ia6YAY%2FSm%2BmWdkA2AO%2B7t%2BOz1rHxFacsa1E%2BBg7uKNj4WETeNgcO4Hgw34zgwgY6pgGazZIAWVc6nVeH6y0c4sZapxao%2FGovlH0eU2Jm7gFAaq6WVJzx5q0AUYzpQ8qeJbmO3aAmU0EFInQc4yAfHol61X%2FaTWJwvVQsbLoaRcnPmDttlKtj7FIz42R7nByjR%2BE4hV0DGWnLPnFa2Wo0NZrICi7H2VmxEYmg76%2F2r1pplqPCdNx6wnjck3OLKBgfiSeUpzCbUZV%2BTKi85Lm7dAHVaXYmXkhH&X-Amz-Signature=d27739845d906f9e8f5427a5d674e0d645c03ac9a9f8bf1c4d4917948c02ea5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD4LEPNH%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIGEJrUPc%2Fh3eiOWs3%2FmYZXY2HEppOLI7pZQaWnkeuF1RAiBYfIpEav14kMoou2szaIxv2bHF3TbXqhivZc%2FjBipqDiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5EzKLW27XnKiMMO7KtwDV69l9HUZ5Vl%2B%2BdHyB02jx09MqyoQgX8LVvf6Me4lLNB8VrOIhz2QzXuYlwQwF4a5heDOQj5a7VHpAVW9DlsRIZ8D7nAUh7H%2FoqX1aMsS29uSeFf%2Fip8rblgbnBTSFUm0y3pwNmAI%2FBX%2BJS0VypZ88j9kxw%2FW9Qy1KwLiUhIZGZ3Fc%2BfMUCNO9U28RMPJrEcpHDhKLudyvR7iSrxuWZ8bDT1%2BKP5TAK%2BqwQsIr49KCl%2F69dCQ%2FLaKz3cWuHlMhejn8OoH7CIYVJhKEVEtecYK7g2NvhA3YgypGJYD5FKcQEAvN2PHy7zVPB3wxwLhDWcRnDRnVJN%2Bk5HmbHRqwQD4vMy1iW%2Fw4GTFWbW8FJHW5r%2BBcz1p4uv8eo6IUVP7gkWlp40IaGRGFqeIy8bWUON5JQsDd8%2F4Nhgtx6v2I07HKCjq0ZWA1x7PwvluGYI3o2vWnHIeP7nS4JHUmXHdmI%2FzE%2F8IxnSyRl99ygy%2F29gzT3x%2FojeEBHD5SUptz2Aws5G%2FSfgjQeBzKC6Psp1lHDNu9kXeGzGtM1ZM0NQCToy49LMqyTBSP2l4%2B1fcM0QgL3JR9zw6Ia6YAY%2FSm%2BmWdkA2AO%2B7t%2BOz1rHxFacsa1E%2BBg7uKNj4WETeNgcO4Hgw34zgwgY6pgGazZIAWVc6nVeH6y0c4sZapxao%2FGovlH0eU2Jm7gFAaq6WVJzx5q0AUYzpQ8qeJbmO3aAmU0EFInQc4yAfHol61X%2FaTWJwvVQsbLoaRcnPmDttlKtj7FIz42R7nByjR%2BE4hV0DGWnLPnFa2Wo0NZrICi7H2VmxEYmg76%2F2r1pplqPCdNx6wnjck3OLKBgfiSeUpzCbUZV%2BTKi85Lm7dAHVaXYmXkhH&X-Amz-Signature=2b7c29448b149ae933f214f3444b9db571f797b6ee533df632ae167ab488509d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD4LEPNH%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIGEJrUPc%2Fh3eiOWs3%2FmYZXY2HEppOLI7pZQaWnkeuF1RAiBYfIpEav14kMoou2szaIxv2bHF3TbXqhivZc%2FjBipqDiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5EzKLW27XnKiMMO7KtwDV69l9HUZ5Vl%2B%2BdHyB02jx09MqyoQgX8LVvf6Me4lLNB8VrOIhz2QzXuYlwQwF4a5heDOQj5a7VHpAVW9DlsRIZ8D7nAUh7H%2FoqX1aMsS29uSeFf%2Fip8rblgbnBTSFUm0y3pwNmAI%2FBX%2BJS0VypZ88j9kxw%2FW9Qy1KwLiUhIZGZ3Fc%2BfMUCNO9U28RMPJrEcpHDhKLudyvR7iSrxuWZ8bDT1%2BKP5TAK%2BqwQsIr49KCl%2F69dCQ%2FLaKz3cWuHlMhejn8OoH7CIYVJhKEVEtecYK7g2NvhA3YgypGJYD5FKcQEAvN2PHy7zVPB3wxwLhDWcRnDRnVJN%2Bk5HmbHRqwQD4vMy1iW%2Fw4GTFWbW8FJHW5r%2BBcz1p4uv8eo6IUVP7gkWlp40IaGRGFqeIy8bWUON5JQsDd8%2F4Nhgtx6v2I07HKCjq0ZWA1x7PwvluGYI3o2vWnHIeP7nS4JHUmXHdmI%2FzE%2F8IxnSyRl99ygy%2F29gzT3x%2FojeEBHD5SUptz2Aws5G%2FSfgjQeBzKC6Psp1lHDNu9kXeGzGtM1ZM0NQCToy49LMqyTBSP2l4%2B1fcM0QgL3JR9zw6Ia6YAY%2FSm%2BmWdkA2AO%2B7t%2BOz1rHxFacsa1E%2BBg7uKNj4WETeNgcO4Hgw34zgwgY6pgGazZIAWVc6nVeH6y0c4sZapxao%2FGovlH0eU2Jm7gFAaq6WVJzx5q0AUYzpQ8qeJbmO3aAmU0EFInQc4yAfHol61X%2FaTWJwvVQsbLoaRcnPmDttlKtj7FIz42R7nByjR%2BE4hV0DGWnLPnFa2Wo0NZrICi7H2VmxEYmg76%2F2r1pplqPCdNx6wnjck3OLKBgfiSeUpzCbUZV%2BTKi85Lm7dAHVaXYmXkhH&X-Amz-Signature=08d032a7e39d4a6686bf5c5eab0458df083f9d19a2c2352662ced1ccc13044cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD4LEPNH%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIGEJrUPc%2Fh3eiOWs3%2FmYZXY2HEppOLI7pZQaWnkeuF1RAiBYfIpEav14kMoou2szaIxv2bHF3TbXqhivZc%2FjBipqDiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5EzKLW27XnKiMMO7KtwDV69l9HUZ5Vl%2B%2BdHyB02jx09MqyoQgX8LVvf6Me4lLNB8VrOIhz2QzXuYlwQwF4a5heDOQj5a7VHpAVW9DlsRIZ8D7nAUh7H%2FoqX1aMsS29uSeFf%2Fip8rblgbnBTSFUm0y3pwNmAI%2FBX%2BJS0VypZ88j9kxw%2FW9Qy1KwLiUhIZGZ3Fc%2BfMUCNO9U28RMPJrEcpHDhKLudyvR7iSrxuWZ8bDT1%2BKP5TAK%2BqwQsIr49KCl%2F69dCQ%2FLaKz3cWuHlMhejn8OoH7CIYVJhKEVEtecYK7g2NvhA3YgypGJYD5FKcQEAvN2PHy7zVPB3wxwLhDWcRnDRnVJN%2Bk5HmbHRqwQD4vMy1iW%2Fw4GTFWbW8FJHW5r%2BBcz1p4uv8eo6IUVP7gkWlp40IaGRGFqeIy8bWUON5JQsDd8%2F4Nhgtx6v2I07HKCjq0ZWA1x7PwvluGYI3o2vWnHIeP7nS4JHUmXHdmI%2FzE%2F8IxnSyRl99ygy%2F29gzT3x%2FojeEBHD5SUptz2Aws5G%2FSfgjQeBzKC6Psp1lHDNu9kXeGzGtM1ZM0NQCToy49LMqyTBSP2l4%2B1fcM0QgL3JR9zw6Ia6YAY%2FSm%2BmWdkA2AO%2B7t%2BOz1rHxFacsa1E%2BBg7uKNj4WETeNgcO4Hgw34zgwgY6pgGazZIAWVc6nVeH6y0c4sZapxao%2FGovlH0eU2Jm7gFAaq6WVJzx5q0AUYzpQ8qeJbmO3aAmU0EFInQc4yAfHol61X%2FaTWJwvVQsbLoaRcnPmDttlKtj7FIz42R7nByjR%2BE4hV0DGWnLPnFa2Wo0NZrICi7H2VmxEYmg76%2F2r1pplqPCdNx6wnjck3OLKBgfiSeUpzCbUZV%2BTKi85Lm7dAHVaXYmXkhH&X-Amz-Signature=39404ddca8e5866e755c5eb2a4fc365b9b4bb1879c80486aea5c67995b315fab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD4LEPNH%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIGEJrUPc%2Fh3eiOWs3%2FmYZXY2HEppOLI7pZQaWnkeuF1RAiBYfIpEav14kMoou2szaIxv2bHF3TbXqhivZc%2FjBipqDiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5EzKLW27XnKiMMO7KtwDV69l9HUZ5Vl%2B%2BdHyB02jx09MqyoQgX8LVvf6Me4lLNB8VrOIhz2QzXuYlwQwF4a5heDOQj5a7VHpAVW9DlsRIZ8D7nAUh7H%2FoqX1aMsS29uSeFf%2Fip8rblgbnBTSFUm0y3pwNmAI%2FBX%2BJS0VypZ88j9kxw%2FW9Qy1KwLiUhIZGZ3Fc%2BfMUCNO9U28RMPJrEcpHDhKLudyvR7iSrxuWZ8bDT1%2BKP5TAK%2BqwQsIr49KCl%2F69dCQ%2FLaKz3cWuHlMhejn8OoH7CIYVJhKEVEtecYK7g2NvhA3YgypGJYD5FKcQEAvN2PHy7zVPB3wxwLhDWcRnDRnVJN%2Bk5HmbHRqwQD4vMy1iW%2Fw4GTFWbW8FJHW5r%2BBcz1p4uv8eo6IUVP7gkWlp40IaGRGFqeIy8bWUON5JQsDd8%2F4Nhgtx6v2I07HKCjq0ZWA1x7PwvluGYI3o2vWnHIeP7nS4JHUmXHdmI%2FzE%2F8IxnSyRl99ygy%2F29gzT3x%2FojeEBHD5SUptz2Aws5G%2FSfgjQeBzKC6Psp1lHDNu9kXeGzGtM1ZM0NQCToy49LMqyTBSP2l4%2B1fcM0QgL3JR9zw6Ia6YAY%2FSm%2BmWdkA2AO%2B7t%2BOz1rHxFacsa1E%2BBg7uKNj4WETeNgcO4Hgw34zgwgY6pgGazZIAWVc6nVeH6y0c4sZapxao%2FGovlH0eU2Jm7gFAaq6WVJzx5q0AUYzpQ8qeJbmO3aAmU0EFInQc4yAfHol61X%2FaTWJwvVQsbLoaRcnPmDttlKtj7FIz42R7nByjR%2BE4hV0DGWnLPnFa2Wo0NZrICi7H2VmxEYmg76%2F2r1pplqPCdNx6wnjck3OLKBgfiSeUpzCbUZV%2BTKi85Lm7dAHVaXYmXkhH&X-Amz-Signature=33069c1fe457ce703520ec28c58bbf746408b3b784dc9bf7999a505bd9f7d751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
