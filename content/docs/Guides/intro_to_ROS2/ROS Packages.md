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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUVJ5XLJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFP3eB%2BUQDBs89K0n8BE8Y3PIqD7QS7nvYtvVwcJH5yMAiEAnrjhvVv%2B0DlGqeQdgZZDH5nC7CRX%2FpzEbygCRVde8FkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMR1zX16uM9pXJWlfSrcAy4%2Fpeo%2FnZvctP0sTaKCrZeV%2BpWxtkSw7HnsBMstrpQiRtLFgf5u6ssxZ4IwFNqcW5%2FkiBzWtPT4%2B1lqUR60GI23SxBeVfZvtlZ38Zcb%2BRI7k0OMxIOTmC40%2FBgvWbZDU1799QZikDb62kslaCeoJGkxWUtnOLLL8V8Kzy8UrxoKlGoe0Ol4zXk5GpR1uiRLykJRPaiDWjmjnNhOcbrZfgyB3NrtKrt%2FDjcPoEIXU68IWiD7wABjFOtao9B3E745wjqxWAFwRQY2euqPpiDKdwaozlF%2FNc97G3md1DHm6902oUt4u3%2F9cfYETgijgUGGOHx%2BCyxVFTN6FUAVDWoTmcVfhzqMHvfQJHINrfdQJiDGYB6%2BTMqZwJBp%2By4UySwb%2F6Cl0LaasX6M54%2BevlHSSGjzcNiOM91NjLgWkX8KXXv5GmUVS%2BTs2RDXGMkMX%2FTXA3vAyJD2x4zKlCxfzPe7e7QaCQqXtree2V2x7BIAl1W9oz2%2FCWlscvjcGgrneKfIkbKhuBzhMsC%2FKJLP%2FxpDIpaqPIrCSsxDqamKS2up1h6Xh4SIKtOXL9bS50tfNV8%2F7U%2Br0JRZqL0zih02d2ZBcMyBIfZxcGYODxI3VXBeRTWhwv0EgREBTC8tEgfLMIDapsQGOqUBzTGq94pN4jbfPEVNf4wydDguKcJDVfHbClNfO259BZUI18EUVMU81Uq1io2R5Z%2FlYbmpAssHxeMs%2BZekZlGG%2FnKg2EyqJxjzivTrCa2iN6N4k5LQMDwHxHNMLZe6FgzL1EfpDcixhxNVYjaWKxam56%2BkC8OWHNQ0HVlxga6opY15jrGEWLFKuPqnkVwhf59RcCQzcz%2BzUq8I2aQTGq1IJW9P%2FexT&X-Amz-Signature=f7495a3c938e0a9c70385d97124aa121a7e8e8b37cc2ab2113910e3f6d6ccf2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUVJ5XLJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFP3eB%2BUQDBs89K0n8BE8Y3PIqD7QS7nvYtvVwcJH5yMAiEAnrjhvVv%2B0DlGqeQdgZZDH5nC7CRX%2FpzEbygCRVde8FkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMR1zX16uM9pXJWlfSrcAy4%2Fpeo%2FnZvctP0sTaKCrZeV%2BpWxtkSw7HnsBMstrpQiRtLFgf5u6ssxZ4IwFNqcW5%2FkiBzWtPT4%2B1lqUR60GI23SxBeVfZvtlZ38Zcb%2BRI7k0OMxIOTmC40%2FBgvWbZDU1799QZikDb62kslaCeoJGkxWUtnOLLL8V8Kzy8UrxoKlGoe0Ol4zXk5GpR1uiRLykJRPaiDWjmjnNhOcbrZfgyB3NrtKrt%2FDjcPoEIXU68IWiD7wABjFOtao9B3E745wjqxWAFwRQY2euqPpiDKdwaozlF%2FNc97G3md1DHm6902oUt4u3%2F9cfYETgijgUGGOHx%2BCyxVFTN6FUAVDWoTmcVfhzqMHvfQJHINrfdQJiDGYB6%2BTMqZwJBp%2By4UySwb%2F6Cl0LaasX6M54%2BevlHSSGjzcNiOM91NjLgWkX8KXXv5GmUVS%2BTs2RDXGMkMX%2FTXA3vAyJD2x4zKlCxfzPe7e7QaCQqXtree2V2x7BIAl1W9oz2%2FCWlscvjcGgrneKfIkbKhuBzhMsC%2FKJLP%2FxpDIpaqPIrCSsxDqamKS2up1h6Xh4SIKtOXL9bS50tfNV8%2F7U%2Br0JRZqL0zih02d2ZBcMyBIfZxcGYODxI3VXBeRTWhwv0EgREBTC8tEgfLMIDapsQGOqUBzTGq94pN4jbfPEVNf4wydDguKcJDVfHbClNfO259BZUI18EUVMU81Uq1io2R5Z%2FlYbmpAssHxeMs%2BZekZlGG%2FnKg2EyqJxjzivTrCa2iN6N4k5LQMDwHxHNMLZe6FgzL1EfpDcixhxNVYjaWKxam56%2BkC8OWHNQ0HVlxga6opY15jrGEWLFKuPqnkVwhf59RcCQzcz%2BzUq8I2aQTGq1IJW9P%2FexT&X-Amz-Signature=62d53071a5905cd695a241027c611364e4e769d6413371e77f076282914ea903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUVJ5XLJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFP3eB%2BUQDBs89K0n8BE8Y3PIqD7QS7nvYtvVwcJH5yMAiEAnrjhvVv%2B0DlGqeQdgZZDH5nC7CRX%2FpzEbygCRVde8FkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMR1zX16uM9pXJWlfSrcAy4%2Fpeo%2FnZvctP0sTaKCrZeV%2BpWxtkSw7HnsBMstrpQiRtLFgf5u6ssxZ4IwFNqcW5%2FkiBzWtPT4%2B1lqUR60GI23SxBeVfZvtlZ38Zcb%2BRI7k0OMxIOTmC40%2FBgvWbZDU1799QZikDb62kslaCeoJGkxWUtnOLLL8V8Kzy8UrxoKlGoe0Ol4zXk5GpR1uiRLykJRPaiDWjmjnNhOcbrZfgyB3NrtKrt%2FDjcPoEIXU68IWiD7wABjFOtao9B3E745wjqxWAFwRQY2euqPpiDKdwaozlF%2FNc97G3md1DHm6902oUt4u3%2F9cfYETgijgUGGOHx%2BCyxVFTN6FUAVDWoTmcVfhzqMHvfQJHINrfdQJiDGYB6%2BTMqZwJBp%2By4UySwb%2F6Cl0LaasX6M54%2BevlHSSGjzcNiOM91NjLgWkX8KXXv5GmUVS%2BTs2RDXGMkMX%2FTXA3vAyJD2x4zKlCxfzPe7e7QaCQqXtree2V2x7BIAl1W9oz2%2FCWlscvjcGgrneKfIkbKhuBzhMsC%2FKJLP%2FxpDIpaqPIrCSsxDqamKS2up1h6Xh4SIKtOXL9bS50tfNV8%2F7U%2Br0JRZqL0zih02d2ZBcMyBIfZxcGYODxI3VXBeRTWhwv0EgREBTC8tEgfLMIDapsQGOqUBzTGq94pN4jbfPEVNf4wydDguKcJDVfHbClNfO259BZUI18EUVMU81Uq1io2R5Z%2FlYbmpAssHxeMs%2BZekZlGG%2FnKg2EyqJxjzivTrCa2iN6N4k5LQMDwHxHNMLZe6FgzL1EfpDcixhxNVYjaWKxam56%2BkC8OWHNQ0HVlxga6opY15jrGEWLFKuPqnkVwhf59RcCQzcz%2BzUq8I2aQTGq1IJW9P%2FexT&X-Amz-Signature=80ea29126e7b5f6ad91490c3e620c7e1f225db59d576fbff2cdaca6b967e2b79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUVJ5XLJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFP3eB%2BUQDBs89K0n8BE8Y3PIqD7QS7nvYtvVwcJH5yMAiEAnrjhvVv%2B0DlGqeQdgZZDH5nC7CRX%2FpzEbygCRVde8FkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMR1zX16uM9pXJWlfSrcAy4%2Fpeo%2FnZvctP0sTaKCrZeV%2BpWxtkSw7HnsBMstrpQiRtLFgf5u6ssxZ4IwFNqcW5%2FkiBzWtPT4%2B1lqUR60GI23SxBeVfZvtlZ38Zcb%2BRI7k0OMxIOTmC40%2FBgvWbZDU1799QZikDb62kslaCeoJGkxWUtnOLLL8V8Kzy8UrxoKlGoe0Ol4zXk5GpR1uiRLykJRPaiDWjmjnNhOcbrZfgyB3NrtKrt%2FDjcPoEIXU68IWiD7wABjFOtao9B3E745wjqxWAFwRQY2euqPpiDKdwaozlF%2FNc97G3md1DHm6902oUt4u3%2F9cfYETgijgUGGOHx%2BCyxVFTN6FUAVDWoTmcVfhzqMHvfQJHINrfdQJiDGYB6%2BTMqZwJBp%2By4UySwb%2F6Cl0LaasX6M54%2BevlHSSGjzcNiOM91NjLgWkX8KXXv5GmUVS%2BTs2RDXGMkMX%2FTXA3vAyJD2x4zKlCxfzPe7e7QaCQqXtree2V2x7BIAl1W9oz2%2FCWlscvjcGgrneKfIkbKhuBzhMsC%2FKJLP%2FxpDIpaqPIrCSsxDqamKS2up1h6Xh4SIKtOXL9bS50tfNV8%2F7U%2Br0JRZqL0zih02d2ZBcMyBIfZxcGYODxI3VXBeRTWhwv0EgREBTC8tEgfLMIDapsQGOqUBzTGq94pN4jbfPEVNf4wydDguKcJDVfHbClNfO259BZUI18EUVMU81Uq1io2R5Z%2FlYbmpAssHxeMs%2BZekZlGG%2FnKg2EyqJxjzivTrCa2iN6N4k5LQMDwHxHNMLZe6FgzL1EfpDcixhxNVYjaWKxam56%2BkC8OWHNQ0HVlxga6opY15jrGEWLFKuPqnkVwhf59RcCQzcz%2BzUq8I2aQTGq1IJW9P%2FexT&X-Amz-Signature=f4b3130a635720d07b6e32eee199399c7ded85a9170b32a1c0545bc7d51ebf19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUVJ5XLJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFP3eB%2BUQDBs89K0n8BE8Y3PIqD7QS7nvYtvVwcJH5yMAiEAnrjhvVv%2B0DlGqeQdgZZDH5nC7CRX%2FpzEbygCRVde8FkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMR1zX16uM9pXJWlfSrcAy4%2Fpeo%2FnZvctP0sTaKCrZeV%2BpWxtkSw7HnsBMstrpQiRtLFgf5u6ssxZ4IwFNqcW5%2FkiBzWtPT4%2B1lqUR60GI23SxBeVfZvtlZ38Zcb%2BRI7k0OMxIOTmC40%2FBgvWbZDU1799QZikDb62kslaCeoJGkxWUtnOLLL8V8Kzy8UrxoKlGoe0Ol4zXk5GpR1uiRLykJRPaiDWjmjnNhOcbrZfgyB3NrtKrt%2FDjcPoEIXU68IWiD7wABjFOtao9B3E745wjqxWAFwRQY2euqPpiDKdwaozlF%2FNc97G3md1DHm6902oUt4u3%2F9cfYETgijgUGGOHx%2BCyxVFTN6FUAVDWoTmcVfhzqMHvfQJHINrfdQJiDGYB6%2BTMqZwJBp%2By4UySwb%2F6Cl0LaasX6M54%2BevlHSSGjzcNiOM91NjLgWkX8KXXv5GmUVS%2BTs2RDXGMkMX%2FTXA3vAyJD2x4zKlCxfzPe7e7QaCQqXtree2V2x7BIAl1W9oz2%2FCWlscvjcGgrneKfIkbKhuBzhMsC%2FKJLP%2FxpDIpaqPIrCSsxDqamKS2up1h6Xh4SIKtOXL9bS50tfNV8%2F7U%2Br0JRZqL0zih02d2ZBcMyBIfZxcGYODxI3VXBeRTWhwv0EgREBTC8tEgfLMIDapsQGOqUBzTGq94pN4jbfPEVNf4wydDguKcJDVfHbClNfO259BZUI18EUVMU81Uq1io2R5Z%2FlYbmpAssHxeMs%2BZekZlGG%2FnKg2EyqJxjzivTrCa2iN6N4k5LQMDwHxHNMLZe6FgzL1EfpDcixhxNVYjaWKxam56%2BkC8OWHNQ0HVlxga6opY15jrGEWLFKuPqnkVwhf59RcCQzcz%2BzUq8I2aQTGq1IJW9P%2FexT&X-Amz-Signature=16a4fccf36921169ab8b6e400b647d776285ca1fd5bf68c70c667a7a02ef53a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUVJ5XLJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFP3eB%2BUQDBs89K0n8BE8Y3PIqD7QS7nvYtvVwcJH5yMAiEAnrjhvVv%2B0DlGqeQdgZZDH5nC7CRX%2FpzEbygCRVde8FkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMR1zX16uM9pXJWlfSrcAy4%2Fpeo%2FnZvctP0sTaKCrZeV%2BpWxtkSw7HnsBMstrpQiRtLFgf5u6ssxZ4IwFNqcW5%2FkiBzWtPT4%2B1lqUR60GI23SxBeVfZvtlZ38Zcb%2BRI7k0OMxIOTmC40%2FBgvWbZDU1799QZikDb62kslaCeoJGkxWUtnOLLL8V8Kzy8UrxoKlGoe0Ol4zXk5GpR1uiRLykJRPaiDWjmjnNhOcbrZfgyB3NrtKrt%2FDjcPoEIXU68IWiD7wABjFOtao9B3E745wjqxWAFwRQY2euqPpiDKdwaozlF%2FNc97G3md1DHm6902oUt4u3%2F9cfYETgijgUGGOHx%2BCyxVFTN6FUAVDWoTmcVfhzqMHvfQJHINrfdQJiDGYB6%2BTMqZwJBp%2By4UySwb%2F6Cl0LaasX6M54%2BevlHSSGjzcNiOM91NjLgWkX8KXXv5GmUVS%2BTs2RDXGMkMX%2FTXA3vAyJD2x4zKlCxfzPe7e7QaCQqXtree2V2x7BIAl1W9oz2%2FCWlscvjcGgrneKfIkbKhuBzhMsC%2FKJLP%2FxpDIpaqPIrCSsxDqamKS2up1h6Xh4SIKtOXL9bS50tfNV8%2F7U%2Br0JRZqL0zih02d2ZBcMyBIfZxcGYODxI3VXBeRTWhwv0EgREBTC8tEgfLMIDapsQGOqUBzTGq94pN4jbfPEVNf4wydDguKcJDVfHbClNfO259BZUI18EUVMU81Uq1io2R5Z%2FlYbmpAssHxeMs%2BZekZlGG%2FnKg2EyqJxjzivTrCa2iN6N4k5LQMDwHxHNMLZe6FgzL1EfpDcixhxNVYjaWKxam56%2BkC8OWHNQ0HVlxga6opY15jrGEWLFKuPqnkVwhf59RcCQzcz%2BzUq8I2aQTGq1IJW9P%2FexT&X-Amz-Signature=393cc1f5ef48bb1dda993980beea7b7d7b76a7e3f8273ce8eb253a22ba8ea4a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUVJ5XLJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFP3eB%2BUQDBs89K0n8BE8Y3PIqD7QS7nvYtvVwcJH5yMAiEAnrjhvVv%2B0DlGqeQdgZZDH5nC7CRX%2FpzEbygCRVde8FkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMR1zX16uM9pXJWlfSrcAy4%2Fpeo%2FnZvctP0sTaKCrZeV%2BpWxtkSw7HnsBMstrpQiRtLFgf5u6ssxZ4IwFNqcW5%2FkiBzWtPT4%2B1lqUR60GI23SxBeVfZvtlZ38Zcb%2BRI7k0OMxIOTmC40%2FBgvWbZDU1799QZikDb62kslaCeoJGkxWUtnOLLL8V8Kzy8UrxoKlGoe0Ol4zXk5GpR1uiRLykJRPaiDWjmjnNhOcbrZfgyB3NrtKrt%2FDjcPoEIXU68IWiD7wABjFOtao9B3E745wjqxWAFwRQY2euqPpiDKdwaozlF%2FNc97G3md1DHm6902oUt4u3%2F9cfYETgijgUGGOHx%2BCyxVFTN6FUAVDWoTmcVfhzqMHvfQJHINrfdQJiDGYB6%2BTMqZwJBp%2By4UySwb%2F6Cl0LaasX6M54%2BevlHSSGjzcNiOM91NjLgWkX8KXXv5GmUVS%2BTs2RDXGMkMX%2FTXA3vAyJD2x4zKlCxfzPe7e7QaCQqXtree2V2x7BIAl1W9oz2%2FCWlscvjcGgrneKfIkbKhuBzhMsC%2FKJLP%2FxpDIpaqPIrCSsxDqamKS2up1h6Xh4SIKtOXL9bS50tfNV8%2F7U%2Br0JRZqL0zih02d2ZBcMyBIfZxcGYODxI3VXBeRTWhwv0EgREBTC8tEgfLMIDapsQGOqUBzTGq94pN4jbfPEVNf4wydDguKcJDVfHbClNfO259BZUI18EUVMU81Uq1io2R5Z%2FlYbmpAssHxeMs%2BZekZlGG%2FnKg2EyqJxjzivTrCa2iN6N4k5LQMDwHxHNMLZe6FgzL1EfpDcixhxNVYjaWKxam56%2BkC8OWHNQ0HVlxga6opY15jrGEWLFKuPqnkVwhf59RcCQzcz%2BzUq8I2aQTGq1IJW9P%2FexT&X-Amz-Signature=c30b94143a8e2ec18ca072dd66a79d49f8fe0fc45e721a96997dab38cff6a518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
