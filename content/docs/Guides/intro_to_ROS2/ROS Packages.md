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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QLPSXUC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQD6FFzFRmwLG7RdJ0J1xvJ1CoOsDGfGboXC4gdmhZHJqAIhANnd6VOCDZsAf2DNKwI9ywvpMj5vhwua5fZLLGcb9GpgKv8DCEgQABoMNjM3NDIzMTgzODA1Igy21XV0fwjTdYLtM8wq3APrUshcdy5BcMx4zaH%2FBWsc2JUK%2FxPVfzOPyeTQM0S2FvhXKkRxIOH4aqbtzbozDNaQXuy1REZ4ojhNqYql2IZXxpv7pddqJAShZTxizLxYY3tNPUzVE%2F1vX5cSf1aLCIBvE72JZbI1y7rNYDlsbyM8XoBAGPsWTSTTgQapdpmhQpPqoVuwyrwn695NQk8my9QJfH2VVcl55vA4KFtxoi92%2Fc3yhDEaPqChJjJpccYtcfXPC3gtDjh4O7OvWAGIQOBsbJ%2FPAx4ER0aSDPCRfHYuDlcXaruo4mZZ8bloL8lmjBXqiuQcdOJcWeZQzv426GC2POINWW3dd1udMm9zAeh%2BUllb8jhAjBRyQf%2FDIiaXN2%2FJGFDOSDdtIxQyFbQN534WWOjW10xxege8evbkDTp%2F5u%2Fp8dwvJXSxA4rv96quCc0JfnuAB5NgTdjZoAg8oNFP%2BJgLajpJF6KysVw6t5LDnhVa4fll1S6KEUc8TTeXYvv%2FGzQHuBCM5GEkdt0kHmCCFnA54C61NF9Rgk2fTi%2Bv%2BiosFsrwDj6QM6OZAE9Y3ZBWS55Z4M0%2FVL4pAnqYVEt0LZ15nbk0jDSxqwkXPxzIXQben3RLesHrfdpJp9PixtVHi0V8B7pbRYTl%2FTC8vI7EBjqkAdTxquL4vYLbDcAAPVanvZqsqQaXrfzcuD9yFlvkmCCLVZbjvzOLelR8YyA6%2FcpgfhvoeImF8Lk%2BTcD0xpsH317NqF6YKv36jXrY7ykDBlwKfoe1MX%2FYlC7V5XPCQM3GbOD84XH5aKqdP89X9rpIinriHSmfub2jmVYirRlo1aR73u%2B%2BnhZfV7A8BKsYoY9NaCCYPctfD6YjbcpT1E9j4boxVZhd&X-Amz-Signature=b71792899a5c33976ff6d7d1cf199ddc6c0c9b8ec8d0d7c2ea06374e282b53a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QLPSXUC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQD6FFzFRmwLG7RdJ0J1xvJ1CoOsDGfGboXC4gdmhZHJqAIhANnd6VOCDZsAf2DNKwI9ywvpMj5vhwua5fZLLGcb9GpgKv8DCEgQABoMNjM3NDIzMTgzODA1Igy21XV0fwjTdYLtM8wq3APrUshcdy5BcMx4zaH%2FBWsc2JUK%2FxPVfzOPyeTQM0S2FvhXKkRxIOH4aqbtzbozDNaQXuy1REZ4ojhNqYql2IZXxpv7pddqJAShZTxizLxYY3tNPUzVE%2F1vX5cSf1aLCIBvE72JZbI1y7rNYDlsbyM8XoBAGPsWTSTTgQapdpmhQpPqoVuwyrwn695NQk8my9QJfH2VVcl55vA4KFtxoi92%2Fc3yhDEaPqChJjJpccYtcfXPC3gtDjh4O7OvWAGIQOBsbJ%2FPAx4ER0aSDPCRfHYuDlcXaruo4mZZ8bloL8lmjBXqiuQcdOJcWeZQzv426GC2POINWW3dd1udMm9zAeh%2BUllb8jhAjBRyQf%2FDIiaXN2%2FJGFDOSDdtIxQyFbQN534WWOjW10xxege8evbkDTp%2F5u%2Fp8dwvJXSxA4rv96quCc0JfnuAB5NgTdjZoAg8oNFP%2BJgLajpJF6KysVw6t5LDnhVa4fll1S6KEUc8TTeXYvv%2FGzQHuBCM5GEkdt0kHmCCFnA54C61NF9Rgk2fTi%2Bv%2BiosFsrwDj6QM6OZAE9Y3ZBWS55Z4M0%2FVL4pAnqYVEt0LZ15nbk0jDSxqwkXPxzIXQben3RLesHrfdpJp9PixtVHi0V8B7pbRYTl%2FTC8vI7EBjqkAdTxquL4vYLbDcAAPVanvZqsqQaXrfzcuD9yFlvkmCCLVZbjvzOLelR8YyA6%2FcpgfhvoeImF8Lk%2BTcD0xpsH317NqF6YKv36jXrY7ykDBlwKfoe1MX%2FYlC7V5XPCQM3GbOD84XH5aKqdP89X9rpIinriHSmfub2jmVYirRlo1aR73u%2B%2BnhZfV7A8BKsYoY9NaCCYPctfD6YjbcpT1E9j4boxVZhd&X-Amz-Signature=cce8ee519921fc2f95046b5de2cecb50223fef26eb52f06b4af869e92dfefef3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QLPSXUC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQD6FFzFRmwLG7RdJ0J1xvJ1CoOsDGfGboXC4gdmhZHJqAIhANnd6VOCDZsAf2DNKwI9ywvpMj5vhwua5fZLLGcb9GpgKv8DCEgQABoMNjM3NDIzMTgzODA1Igy21XV0fwjTdYLtM8wq3APrUshcdy5BcMx4zaH%2FBWsc2JUK%2FxPVfzOPyeTQM0S2FvhXKkRxIOH4aqbtzbozDNaQXuy1REZ4ojhNqYql2IZXxpv7pddqJAShZTxizLxYY3tNPUzVE%2F1vX5cSf1aLCIBvE72JZbI1y7rNYDlsbyM8XoBAGPsWTSTTgQapdpmhQpPqoVuwyrwn695NQk8my9QJfH2VVcl55vA4KFtxoi92%2Fc3yhDEaPqChJjJpccYtcfXPC3gtDjh4O7OvWAGIQOBsbJ%2FPAx4ER0aSDPCRfHYuDlcXaruo4mZZ8bloL8lmjBXqiuQcdOJcWeZQzv426GC2POINWW3dd1udMm9zAeh%2BUllb8jhAjBRyQf%2FDIiaXN2%2FJGFDOSDdtIxQyFbQN534WWOjW10xxege8evbkDTp%2F5u%2Fp8dwvJXSxA4rv96quCc0JfnuAB5NgTdjZoAg8oNFP%2BJgLajpJF6KysVw6t5LDnhVa4fll1S6KEUc8TTeXYvv%2FGzQHuBCM5GEkdt0kHmCCFnA54C61NF9Rgk2fTi%2Bv%2BiosFsrwDj6QM6OZAE9Y3ZBWS55Z4M0%2FVL4pAnqYVEt0LZ15nbk0jDSxqwkXPxzIXQben3RLesHrfdpJp9PixtVHi0V8B7pbRYTl%2FTC8vI7EBjqkAdTxquL4vYLbDcAAPVanvZqsqQaXrfzcuD9yFlvkmCCLVZbjvzOLelR8YyA6%2FcpgfhvoeImF8Lk%2BTcD0xpsH317NqF6YKv36jXrY7ykDBlwKfoe1MX%2FYlC7V5XPCQM3GbOD84XH5aKqdP89X9rpIinriHSmfub2jmVYirRlo1aR73u%2B%2BnhZfV7A8BKsYoY9NaCCYPctfD6YjbcpT1E9j4boxVZhd&X-Amz-Signature=55d493a209a23f49384ab8a475805dde24efac5b04cbb4df9e1c7709f078664e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QLPSXUC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQD6FFzFRmwLG7RdJ0J1xvJ1CoOsDGfGboXC4gdmhZHJqAIhANnd6VOCDZsAf2DNKwI9ywvpMj5vhwua5fZLLGcb9GpgKv8DCEgQABoMNjM3NDIzMTgzODA1Igy21XV0fwjTdYLtM8wq3APrUshcdy5BcMx4zaH%2FBWsc2JUK%2FxPVfzOPyeTQM0S2FvhXKkRxIOH4aqbtzbozDNaQXuy1REZ4ojhNqYql2IZXxpv7pddqJAShZTxizLxYY3tNPUzVE%2F1vX5cSf1aLCIBvE72JZbI1y7rNYDlsbyM8XoBAGPsWTSTTgQapdpmhQpPqoVuwyrwn695NQk8my9QJfH2VVcl55vA4KFtxoi92%2Fc3yhDEaPqChJjJpccYtcfXPC3gtDjh4O7OvWAGIQOBsbJ%2FPAx4ER0aSDPCRfHYuDlcXaruo4mZZ8bloL8lmjBXqiuQcdOJcWeZQzv426GC2POINWW3dd1udMm9zAeh%2BUllb8jhAjBRyQf%2FDIiaXN2%2FJGFDOSDdtIxQyFbQN534WWOjW10xxege8evbkDTp%2F5u%2Fp8dwvJXSxA4rv96quCc0JfnuAB5NgTdjZoAg8oNFP%2BJgLajpJF6KysVw6t5LDnhVa4fll1S6KEUc8TTeXYvv%2FGzQHuBCM5GEkdt0kHmCCFnA54C61NF9Rgk2fTi%2Bv%2BiosFsrwDj6QM6OZAE9Y3ZBWS55Z4M0%2FVL4pAnqYVEt0LZ15nbk0jDSxqwkXPxzIXQben3RLesHrfdpJp9PixtVHi0V8B7pbRYTl%2FTC8vI7EBjqkAdTxquL4vYLbDcAAPVanvZqsqQaXrfzcuD9yFlvkmCCLVZbjvzOLelR8YyA6%2FcpgfhvoeImF8Lk%2BTcD0xpsH317NqF6YKv36jXrY7ykDBlwKfoe1MX%2FYlC7V5XPCQM3GbOD84XH5aKqdP89X9rpIinriHSmfub2jmVYirRlo1aR73u%2B%2BnhZfV7A8BKsYoY9NaCCYPctfD6YjbcpT1E9j4boxVZhd&X-Amz-Signature=564b4481794d9e3597024f1fe24598875117d35826e4d66601f960d26b24b607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QLPSXUC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQD6FFzFRmwLG7RdJ0J1xvJ1CoOsDGfGboXC4gdmhZHJqAIhANnd6VOCDZsAf2DNKwI9ywvpMj5vhwua5fZLLGcb9GpgKv8DCEgQABoMNjM3NDIzMTgzODA1Igy21XV0fwjTdYLtM8wq3APrUshcdy5BcMx4zaH%2FBWsc2JUK%2FxPVfzOPyeTQM0S2FvhXKkRxIOH4aqbtzbozDNaQXuy1REZ4ojhNqYql2IZXxpv7pddqJAShZTxizLxYY3tNPUzVE%2F1vX5cSf1aLCIBvE72JZbI1y7rNYDlsbyM8XoBAGPsWTSTTgQapdpmhQpPqoVuwyrwn695NQk8my9QJfH2VVcl55vA4KFtxoi92%2Fc3yhDEaPqChJjJpccYtcfXPC3gtDjh4O7OvWAGIQOBsbJ%2FPAx4ER0aSDPCRfHYuDlcXaruo4mZZ8bloL8lmjBXqiuQcdOJcWeZQzv426GC2POINWW3dd1udMm9zAeh%2BUllb8jhAjBRyQf%2FDIiaXN2%2FJGFDOSDdtIxQyFbQN534WWOjW10xxege8evbkDTp%2F5u%2Fp8dwvJXSxA4rv96quCc0JfnuAB5NgTdjZoAg8oNFP%2BJgLajpJF6KysVw6t5LDnhVa4fll1S6KEUc8TTeXYvv%2FGzQHuBCM5GEkdt0kHmCCFnA54C61NF9Rgk2fTi%2Bv%2BiosFsrwDj6QM6OZAE9Y3ZBWS55Z4M0%2FVL4pAnqYVEt0LZ15nbk0jDSxqwkXPxzIXQben3RLesHrfdpJp9PixtVHi0V8B7pbRYTl%2FTC8vI7EBjqkAdTxquL4vYLbDcAAPVanvZqsqQaXrfzcuD9yFlvkmCCLVZbjvzOLelR8YyA6%2FcpgfhvoeImF8Lk%2BTcD0xpsH317NqF6YKv36jXrY7ykDBlwKfoe1MX%2FYlC7V5XPCQM3GbOD84XH5aKqdP89X9rpIinriHSmfub2jmVYirRlo1aR73u%2B%2BnhZfV7A8BKsYoY9NaCCYPctfD6YjbcpT1E9j4boxVZhd&X-Amz-Signature=5feaa151852f59fb64fba841f7f2e7ae9d1a0c41aa8b425750434371398d5500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QLPSXUC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQD6FFzFRmwLG7RdJ0J1xvJ1CoOsDGfGboXC4gdmhZHJqAIhANnd6VOCDZsAf2DNKwI9ywvpMj5vhwua5fZLLGcb9GpgKv8DCEgQABoMNjM3NDIzMTgzODA1Igy21XV0fwjTdYLtM8wq3APrUshcdy5BcMx4zaH%2FBWsc2JUK%2FxPVfzOPyeTQM0S2FvhXKkRxIOH4aqbtzbozDNaQXuy1REZ4ojhNqYql2IZXxpv7pddqJAShZTxizLxYY3tNPUzVE%2F1vX5cSf1aLCIBvE72JZbI1y7rNYDlsbyM8XoBAGPsWTSTTgQapdpmhQpPqoVuwyrwn695NQk8my9QJfH2VVcl55vA4KFtxoi92%2Fc3yhDEaPqChJjJpccYtcfXPC3gtDjh4O7OvWAGIQOBsbJ%2FPAx4ER0aSDPCRfHYuDlcXaruo4mZZ8bloL8lmjBXqiuQcdOJcWeZQzv426GC2POINWW3dd1udMm9zAeh%2BUllb8jhAjBRyQf%2FDIiaXN2%2FJGFDOSDdtIxQyFbQN534WWOjW10xxege8evbkDTp%2F5u%2Fp8dwvJXSxA4rv96quCc0JfnuAB5NgTdjZoAg8oNFP%2BJgLajpJF6KysVw6t5LDnhVa4fll1S6KEUc8TTeXYvv%2FGzQHuBCM5GEkdt0kHmCCFnA54C61NF9Rgk2fTi%2Bv%2BiosFsrwDj6QM6OZAE9Y3ZBWS55Z4M0%2FVL4pAnqYVEt0LZ15nbk0jDSxqwkXPxzIXQben3RLesHrfdpJp9PixtVHi0V8B7pbRYTl%2FTC8vI7EBjqkAdTxquL4vYLbDcAAPVanvZqsqQaXrfzcuD9yFlvkmCCLVZbjvzOLelR8YyA6%2FcpgfhvoeImF8Lk%2BTcD0xpsH317NqF6YKv36jXrY7ykDBlwKfoe1MX%2FYlC7V5XPCQM3GbOD84XH5aKqdP89X9rpIinriHSmfub2jmVYirRlo1aR73u%2B%2BnhZfV7A8BKsYoY9NaCCYPctfD6YjbcpT1E9j4boxVZhd&X-Amz-Signature=86e86e1f45377ba95dc6b50f9aa23b86c9696d436c68e77bc2697e1a86d223c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QLPSXUC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQD6FFzFRmwLG7RdJ0J1xvJ1CoOsDGfGboXC4gdmhZHJqAIhANnd6VOCDZsAf2DNKwI9ywvpMj5vhwua5fZLLGcb9GpgKv8DCEgQABoMNjM3NDIzMTgzODA1Igy21XV0fwjTdYLtM8wq3APrUshcdy5BcMx4zaH%2FBWsc2JUK%2FxPVfzOPyeTQM0S2FvhXKkRxIOH4aqbtzbozDNaQXuy1REZ4ojhNqYql2IZXxpv7pddqJAShZTxizLxYY3tNPUzVE%2F1vX5cSf1aLCIBvE72JZbI1y7rNYDlsbyM8XoBAGPsWTSTTgQapdpmhQpPqoVuwyrwn695NQk8my9QJfH2VVcl55vA4KFtxoi92%2Fc3yhDEaPqChJjJpccYtcfXPC3gtDjh4O7OvWAGIQOBsbJ%2FPAx4ER0aSDPCRfHYuDlcXaruo4mZZ8bloL8lmjBXqiuQcdOJcWeZQzv426GC2POINWW3dd1udMm9zAeh%2BUllb8jhAjBRyQf%2FDIiaXN2%2FJGFDOSDdtIxQyFbQN534WWOjW10xxege8evbkDTp%2F5u%2Fp8dwvJXSxA4rv96quCc0JfnuAB5NgTdjZoAg8oNFP%2BJgLajpJF6KysVw6t5LDnhVa4fll1S6KEUc8TTeXYvv%2FGzQHuBCM5GEkdt0kHmCCFnA54C61NF9Rgk2fTi%2Bv%2BiosFsrwDj6QM6OZAE9Y3ZBWS55Z4M0%2FVL4pAnqYVEt0LZ15nbk0jDSxqwkXPxzIXQben3RLesHrfdpJp9PixtVHi0V8B7pbRYTl%2FTC8vI7EBjqkAdTxquL4vYLbDcAAPVanvZqsqQaXrfzcuD9yFlvkmCCLVZbjvzOLelR8YyA6%2FcpgfhvoeImF8Lk%2BTcD0xpsH317NqF6YKv36jXrY7ykDBlwKfoe1MX%2FYlC7V5XPCQM3GbOD84XH5aKqdP89X9rpIinriHSmfub2jmVYirRlo1aR73u%2B%2BnhZfV7A8BKsYoY9NaCCYPctfD6YjbcpT1E9j4boxVZhd&X-Amz-Signature=55f5eae85f755efae7a22d8de30396b3f6948f2477a47a13759e92bdf8d49f26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
