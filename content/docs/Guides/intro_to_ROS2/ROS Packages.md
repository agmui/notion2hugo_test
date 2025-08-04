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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7XYD5UK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIEuA0tgpDUAp1M%2BHcBWtQRSAXnRJVyhxc0%2BdjB76nffHAiEAhklqSDFILtSw98xsWjAbDZq%2F%2F2p%2FtSel3zHza8BwG6oq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDFpkdp5HzgPod34XyrcA2%2BRZRX11B2VR6oh4z68sR3%2BsgBBJK9THNglPWG%2Bfke3gCPpFf88UPxZ0trYIO2X9NdCwErTlYaMLzTVdVSUlp97tX32w0g10%2BDZE3xCl2qlGxHyJZq54tdWyLU3FwEK0PkqryhBqtuAArbkNA2MQMvVSZvXHmlj3Ifaz3xOu4FfgPB0zNIXigm1QLPfiDtTLTQr89MVuESHZA8su1VnWQjodK18M7mE8xKz%2FpvBpMEYXfZd7RbJfa962ySdtum7hng3kWDTXR80ae1TxGTYuYXEtvo%2FIcVWgSYKiP2l%2B9C%2B2yK7jA5GoPg0LfcP8m0DQHyF5sKQ2eGA%2Fk%2BEd67Ij%2FnRh4qm5NmpBTZasNak4nJCp0gmyWzPXjEuSoxP09qX1ZKLmQSUoUv%2FEIugNOkiULp4R75AgujmDR%2BzAq3mJpmfaTH8b8OqqVIptyKIC8ohIebo%2BQyt7JX5mrHwcA2dFl41D4bEIb5XN5NITu64G8VbwY8%2BnaJaXPsTn94LF1hQ1uOCo1hP%2Byaig8H0gSbP4j%2BYdNWuMesnJRRmd0bGr6%2BFOETgK3bsxuIh3VaTCNKKmihu6eqV5iPg%2BjPNit8Iod0DcIHjE%2BNOEZQsQq8FPLwqlN81UNcTb536AfAWMKm4wcQGOqUB8NRKqziYaKXaSP5%2B85Mn3nlzI3B%2FEkt7zUT3IuOWBdlYS8lovHgSQQmu6m0iRPBDC4rPEfq4OkyGZOIeMYH4wAXzoQC%2BWxm7TaVDFayTarOqZl23kg%2F%2Fv%2Br3X8HcnEBkCy0xrLK5evyC3jb1y%2BssfOywdNqweik4tn9UQA%2B8rKoK8qrH3S3fe94WEwZ1sZW0MHzgBlUEqTHtdrg5bf76b2RQpuBC&X-Amz-Signature=a0bd4a24aa4eab2eeca34121375b0ba0b8d3b6ab44f8b4e44dbf74467f9c793c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7XYD5UK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIEuA0tgpDUAp1M%2BHcBWtQRSAXnRJVyhxc0%2BdjB76nffHAiEAhklqSDFILtSw98xsWjAbDZq%2F%2F2p%2FtSel3zHza8BwG6oq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDFpkdp5HzgPod34XyrcA2%2BRZRX11B2VR6oh4z68sR3%2BsgBBJK9THNglPWG%2Bfke3gCPpFf88UPxZ0trYIO2X9NdCwErTlYaMLzTVdVSUlp97tX32w0g10%2BDZE3xCl2qlGxHyJZq54tdWyLU3FwEK0PkqryhBqtuAArbkNA2MQMvVSZvXHmlj3Ifaz3xOu4FfgPB0zNIXigm1QLPfiDtTLTQr89MVuESHZA8su1VnWQjodK18M7mE8xKz%2FpvBpMEYXfZd7RbJfa962ySdtum7hng3kWDTXR80ae1TxGTYuYXEtvo%2FIcVWgSYKiP2l%2B9C%2B2yK7jA5GoPg0LfcP8m0DQHyF5sKQ2eGA%2Fk%2BEd67Ij%2FnRh4qm5NmpBTZasNak4nJCp0gmyWzPXjEuSoxP09qX1ZKLmQSUoUv%2FEIugNOkiULp4R75AgujmDR%2BzAq3mJpmfaTH8b8OqqVIptyKIC8ohIebo%2BQyt7JX5mrHwcA2dFl41D4bEIb5XN5NITu64G8VbwY8%2BnaJaXPsTn94LF1hQ1uOCo1hP%2Byaig8H0gSbP4j%2BYdNWuMesnJRRmd0bGr6%2BFOETgK3bsxuIh3VaTCNKKmihu6eqV5iPg%2BjPNit8Iod0DcIHjE%2BNOEZQsQq8FPLwqlN81UNcTb536AfAWMKm4wcQGOqUB8NRKqziYaKXaSP5%2B85Mn3nlzI3B%2FEkt7zUT3IuOWBdlYS8lovHgSQQmu6m0iRPBDC4rPEfq4OkyGZOIeMYH4wAXzoQC%2BWxm7TaVDFayTarOqZl23kg%2F%2Fv%2Br3X8HcnEBkCy0xrLK5evyC3jb1y%2BssfOywdNqweik4tn9UQA%2B8rKoK8qrH3S3fe94WEwZ1sZW0MHzgBlUEqTHtdrg5bf76b2RQpuBC&X-Amz-Signature=e375d29fcbd9f5e2c3096183c068ed3f3771508f2234c397ef4efe2dc77aa7c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7XYD5UK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIEuA0tgpDUAp1M%2BHcBWtQRSAXnRJVyhxc0%2BdjB76nffHAiEAhklqSDFILtSw98xsWjAbDZq%2F%2F2p%2FtSel3zHza8BwG6oq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDFpkdp5HzgPod34XyrcA2%2BRZRX11B2VR6oh4z68sR3%2BsgBBJK9THNglPWG%2Bfke3gCPpFf88UPxZ0trYIO2X9NdCwErTlYaMLzTVdVSUlp97tX32w0g10%2BDZE3xCl2qlGxHyJZq54tdWyLU3FwEK0PkqryhBqtuAArbkNA2MQMvVSZvXHmlj3Ifaz3xOu4FfgPB0zNIXigm1QLPfiDtTLTQr89MVuESHZA8su1VnWQjodK18M7mE8xKz%2FpvBpMEYXfZd7RbJfa962ySdtum7hng3kWDTXR80ae1TxGTYuYXEtvo%2FIcVWgSYKiP2l%2B9C%2B2yK7jA5GoPg0LfcP8m0DQHyF5sKQ2eGA%2Fk%2BEd67Ij%2FnRh4qm5NmpBTZasNak4nJCp0gmyWzPXjEuSoxP09qX1ZKLmQSUoUv%2FEIugNOkiULp4R75AgujmDR%2BzAq3mJpmfaTH8b8OqqVIptyKIC8ohIebo%2BQyt7JX5mrHwcA2dFl41D4bEIb5XN5NITu64G8VbwY8%2BnaJaXPsTn94LF1hQ1uOCo1hP%2Byaig8H0gSbP4j%2BYdNWuMesnJRRmd0bGr6%2BFOETgK3bsxuIh3VaTCNKKmihu6eqV5iPg%2BjPNit8Iod0DcIHjE%2BNOEZQsQq8FPLwqlN81UNcTb536AfAWMKm4wcQGOqUB8NRKqziYaKXaSP5%2B85Mn3nlzI3B%2FEkt7zUT3IuOWBdlYS8lovHgSQQmu6m0iRPBDC4rPEfq4OkyGZOIeMYH4wAXzoQC%2BWxm7TaVDFayTarOqZl23kg%2F%2Fv%2Br3X8HcnEBkCy0xrLK5evyC3jb1y%2BssfOywdNqweik4tn9UQA%2B8rKoK8qrH3S3fe94WEwZ1sZW0MHzgBlUEqTHtdrg5bf76b2RQpuBC&X-Amz-Signature=ebb2cb00f7dfe8a1968bc6971345635bd5baceb6558d35f0a2b437710c6b59e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7XYD5UK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIEuA0tgpDUAp1M%2BHcBWtQRSAXnRJVyhxc0%2BdjB76nffHAiEAhklqSDFILtSw98xsWjAbDZq%2F%2F2p%2FtSel3zHza8BwG6oq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDFpkdp5HzgPod34XyrcA2%2BRZRX11B2VR6oh4z68sR3%2BsgBBJK9THNglPWG%2Bfke3gCPpFf88UPxZ0trYIO2X9NdCwErTlYaMLzTVdVSUlp97tX32w0g10%2BDZE3xCl2qlGxHyJZq54tdWyLU3FwEK0PkqryhBqtuAArbkNA2MQMvVSZvXHmlj3Ifaz3xOu4FfgPB0zNIXigm1QLPfiDtTLTQr89MVuESHZA8su1VnWQjodK18M7mE8xKz%2FpvBpMEYXfZd7RbJfa962ySdtum7hng3kWDTXR80ae1TxGTYuYXEtvo%2FIcVWgSYKiP2l%2B9C%2B2yK7jA5GoPg0LfcP8m0DQHyF5sKQ2eGA%2Fk%2BEd67Ij%2FnRh4qm5NmpBTZasNak4nJCp0gmyWzPXjEuSoxP09qX1ZKLmQSUoUv%2FEIugNOkiULp4R75AgujmDR%2BzAq3mJpmfaTH8b8OqqVIptyKIC8ohIebo%2BQyt7JX5mrHwcA2dFl41D4bEIb5XN5NITu64G8VbwY8%2BnaJaXPsTn94LF1hQ1uOCo1hP%2Byaig8H0gSbP4j%2BYdNWuMesnJRRmd0bGr6%2BFOETgK3bsxuIh3VaTCNKKmihu6eqV5iPg%2BjPNit8Iod0DcIHjE%2BNOEZQsQq8FPLwqlN81UNcTb536AfAWMKm4wcQGOqUB8NRKqziYaKXaSP5%2B85Mn3nlzI3B%2FEkt7zUT3IuOWBdlYS8lovHgSQQmu6m0iRPBDC4rPEfq4OkyGZOIeMYH4wAXzoQC%2BWxm7TaVDFayTarOqZl23kg%2F%2Fv%2Br3X8HcnEBkCy0xrLK5evyC3jb1y%2BssfOywdNqweik4tn9UQA%2B8rKoK8qrH3S3fe94WEwZ1sZW0MHzgBlUEqTHtdrg5bf76b2RQpuBC&X-Amz-Signature=8bc720ef595b68f67b72b9cd101afe23fcf6716010fbd96a9846251517904d7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7XYD5UK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIEuA0tgpDUAp1M%2BHcBWtQRSAXnRJVyhxc0%2BdjB76nffHAiEAhklqSDFILtSw98xsWjAbDZq%2F%2F2p%2FtSel3zHza8BwG6oq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDFpkdp5HzgPod34XyrcA2%2BRZRX11B2VR6oh4z68sR3%2BsgBBJK9THNglPWG%2Bfke3gCPpFf88UPxZ0trYIO2X9NdCwErTlYaMLzTVdVSUlp97tX32w0g10%2BDZE3xCl2qlGxHyJZq54tdWyLU3FwEK0PkqryhBqtuAArbkNA2MQMvVSZvXHmlj3Ifaz3xOu4FfgPB0zNIXigm1QLPfiDtTLTQr89MVuESHZA8su1VnWQjodK18M7mE8xKz%2FpvBpMEYXfZd7RbJfa962ySdtum7hng3kWDTXR80ae1TxGTYuYXEtvo%2FIcVWgSYKiP2l%2B9C%2B2yK7jA5GoPg0LfcP8m0DQHyF5sKQ2eGA%2Fk%2BEd67Ij%2FnRh4qm5NmpBTZasNak4nJCp0gmyWzPXjEuSoxP09qX1ZKLmQSUoUv%2FEIugNOkiULp4R75AgujmDR%2BzAq3mJpmfaTH8b8OqqVIptyKIC8ohIebo%2BQyt7JX5mrHwcA2dFl41D4bEIb5XN5NITu64G8VbwY8%2BnaJaXPsTn94LF1hQ1uOCo1hP%2Byaig8H0gSbP4j%2BYdNWuMesnJRRmd0bGr6%2BFOETgK3bsxuIh3VaTCNKKmihu6eqV5iPg%2BjPNit8Iod0DcIHjE%2BNOEZQsQq8FPLwqlN81UNcTb536AfAWMKm4wcQGOqUB8NRKqziYaKXaSP5%2B85Mn3nlzI3B%2FEkt7zUT3IuOWBdlYS8lovHgSQQmu6m0iRPBDC4rPEfq4OkyGZOIeMYH4wAXzoQC%2BWxm7TaVDFayTarOqZl23kg%2F%2Fv%2Br3X8HcnEBkCy0xrLK5evyC3jb1y%2BssfOywdNqweik4tn9UQA%2B8rKoK8qrH3S3fe94WEwZ1sZW0MHzgBlUEqTHtdrg5bf76b2RQpuBC&X-Amz-Signature=b100a425491cae36081ab89f31ade60dc363475781cfcff3dd009ab3a8d550a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7XYD5UK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIEuA0tgpDUAp1M%2BHcBWtQRSAXnRJVyhxc0%2BdjB76nffHAiEAhklqSDFILtSw98xsWjAbDZq%2F%2F2p%2FtSel3zHza8BwG6oq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDFpkdp5HzgPod34XyrcA2%2BRZRX11B2VR6oh4z68sR3%2BsgBBJK9THNglPWG%2Bfke3gCPpFf88UPxZ0trYIO2X9NdCwErTlYaMLzTVdVSUlp97tX32w0g10%2BDZE3xCl2qlGxHyJZq54tdWyLU3FwEK0PkqryhBqtuAArbkNA2MQMvVSZvXHmlj3Ifaz3xOu4FfgPB0zNIXigm1QLPfiDtTLTQr89MVuESHZA8su1VnWQjodK18M7mE8xKz%2FpvBpMEYXfZd7RbJfa962ySdtum7hng3kWDTXR80ae1TxGTYuYXEtvo%2FIcVWgSYKiP2l%2B9C%2B2yK7jA5GoPg0LfcP8m0DQHyF5sKQ2eGA%2Fk%2BEd67Ij%2FnRh4qm5NmpBTZasNak4nJCp0gmyWzPXjEuSoxP09qX1ZKLmQSUoUv%2FEIugNOkiULp4R75AgujmDR%2BzAq3mJpmfaTH8b8OqqVIptyKIC8ohIebo%2BQyt7JX5mrHwcA2dFl41D4bEIb5XN5NITu64G8VbwY8%2BnaJaXPsTn94LF1hQ1uOCo1hP%2Byaig8H0gSbP4j%2BYdNWuMesnJRRmd0bGr6%2BFOETgK3bsxuIh3VaTCNKKmihu6eqV5iPg%2BjPNit8Iod0DcIHjE%2BNOEZQsQq8FPLwqlN81UNcTb536AfAWMKm4wcQGOqUB8NRKqziYaKXaSP5%2B85Mn3nlzI3B%2FEkt7zUT3IuOWBdlYS8lovHgSQQmu6m0iRPBDC4rPEfq4OkyGZOIeMYH4wAXzoQC%2BWxm7TaVDFayTarOqZl23kg%2F%2Fv%2Br3X8HcnEBkCy0xrLK5evyC3jb1y%2BssfOywdNqweik4tn9UQA%2B8rKoK8qrH3S3fe94WEwZ1sZW0MHzgBlUEqTHtdrg5bf76b2RQpuBC&X-Amz-Signature=be734b16e611ee1e34929e8afe25b8dbc3301898096f4211e1c584541aef3ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7XYD5UK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIEuA0tgpDUAp1M%2BHcBWtQRSAXnRJVyhxc0%2BdjB76nffHAiEAhklqSDFILtSw98xsWjAbDZq%2F%2F2p%2FtSel3zHza8BwG6oq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDFpkdp5HzgPod34XyrcA2%2BRZRX11B2VR6oh4z68sR3%2BsgBBJK9THNglPWG%2Bfke3gCPpFf88UPxZ0trYIO2X9NdCwErTlYaMLzTVdVSUlp97tX32w0g10%2BDZE3xCl2qlGxHyJZq54tdWyLU3FwEK0PkqryhBqtuAArbkNA2MQMvVSZvXHmlj3Ifaz3xOu4FfgPB0zNIXigm1QLPfiDtTLTQr89MVuESHZA8su1VnWQjodK18M7mE8xKz%2FpvBpMEYXfZd7RbJfa962ySdtum7hng3kWDTXR80ae1TxGTYuYXEtvo%2FIcVWgSYKiP2l%2B9C%2B2yK7jA5GoPg0LfcP8m0DQHyF5sKQ2eGA%2Fk%2BEd67Ij%2FnRh4qm5NmpBTZasNak4nJCp0gmyWzPXjEuSoxP09qX1ZKLmQSUoUv%2FEIugNOkiULp4R75AgujmDR%2BzAq3mJpmfaTH8b8OqqVIptyKIC8ohIebo%2BQyt7JX5mrHwcA2dFl41D4bEIb5XN5NITu64G8VbwY8%2BnaJaXPsTn94LF1hQ1uOCo1hP%2Byaig8H0gSbP4j%2BYdNWuMesnJRRmd0bGr6%2BFOETgK3bsxuIh3VaTCNKKmihu6eqV5iPg%2BjPNit8Iod0DcIHjE%2BNOEZQsQq8FPLwqlN81UNcTb536AfAWMKm4wcQGOqUB8NRKqziYaKXaSP5%2B85Mn3nlzI3B%2FEkt7zUT3IuOWBdlYS8lovHgSQQmu6m0iRPBDC4rPEfq4OkyGZOIeMYH4wAXzoQC%2BWxm7TaVDFayTarOqZl23kg%2F%2Fv%2Br3X8HcnEBkCy0xrLK5evyC3jb1y%2BssfOywdNqweik4tn9UQA%2B8rKoK8qrH3S3fe94WEwZ1sZW0MHzgBlUEqTHtdrg5bf76b2RQpuBC&X-Amz-Signature=7bcad0726c24a2fdc24677c972c13ed8895efc2c7ce267c8afe21dc9dd31c27b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
