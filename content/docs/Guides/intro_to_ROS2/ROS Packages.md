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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TXBRCY2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXO52sm9EjHDaCbQXmRV04UMr0gzuPsAXsBVfqr18iCAIgGpuyCFPiEtVU91CBnqcN%2BBR7HPhvkljZZAqUFNQvvxMq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDMhBVRPPKV6MgeUnJSrcA48ZbuLzn9p1sr6%2Ba0Nf760RqOp0S1avOVLSOzq4VJ9bhVECM1trXjeOVUG6Ys0NPjPLMfFegDvojSK59vGkL13pmbg%2Foo%2Bk%2FxO3UgqAOaw5fFZAtZP0pSZNtlmHsRchUqjbdcUVUG7knJFnijbbB%2Fs35ffZOyWSGWXGY5gsq%2F6r4f6zYXFX0rc8zRN9t89KZecwfMT6Y8gSWXlNxANBOuxFd%2Bo4o6YldGHJXbyQ2RzVYMJXZPq3gbJ5Rg8NKnMwj1pm7o06E8dBtIaq2dB4lnwwZ4q883DG4F2SIC2Sgb7GhvMrGuWArOfvjOL6gHGfP6ZnSkNfp0tvtFr%2FxPTPa%2BFjmmP28GcocdXLzf9Y1vAsBMI%2F4RrlwnHoATJHS2xOWLfKKc%2BBbz9rm2KL%2B0WNVMfCjgOJPg9KcMwSpEKRxSD1Ut4JOsH6n8sboL8ip%2FmWTVgJmZnzXIsDYNaxqCRaTnvObhsCyFZAaSaiZhJLbQjh3F%2Fp7iILU6%2BiZ3BtCIEE9mc%2B8oqEfjaC93BVAR7xc41CcDIhq2krOFJKqGP0XlRLoZV5yj8n1SoIC36MEoX9JaCNw%2FHNpNMdSoxrYMOXCbmP8BkHh7fEEK1QEl%2B%2FI%2BxpXcfJLtAasixvRji%2BMIiO174GOqUBv2kLP57cU6uYSeEcHQk3q9KcoSEX%2FpDqd%2B17o5xSbcAzjTVLUTMKM%2BGGKIXxTx8I6l2r35Fw90TuSAFMkObmgkY1ria2auarvtDcPk8rf2vaMVDItfmxmmLloG%2B6DLDNXKmQc3tz1bPmM5YQKzoNZKx92Y%2BEUxwY9gKO5mRF%2FuJC85xuCXnhS8rqXPW4fMPJHE2jB1znYS8Sr17scRKsxSv8UqES&X-Amz-Signature=effd6146d0bfae1e8536811981c7afa32ba07cc3a7418d81b501c4182b6b98d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TXBRCY2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXO52sm9EjHDaCbQXmRV04UMr0gzuPsAXsBVfqr18iCAIgGpuyCFPiEtVU91CBnqcN%2BBR7HPhvkljZZAqUFNQvvxMq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDMhBVRPPKV6MgeUnJSrcA48ZbuLzn9p1sr6%2Ba0Nf760RqOp0S1avOVLSOzq4VJ9bhVECM1trXjeOVUG6Ys0NPjPLMfFegDvojSK59vGkL13pmbg%2Foo%2Bk%2FxO3UgqAOaw5fFZAtZP0pSZNtlmHsRchUqjbdcUVUG7knJFnijbbB%2Fs35ffZOyWSGWXGY5gsq%2F6r4f6zYXFX0rc8zRN9t89KZecwfMT6Y8gSWXlNxANBOuxFd%2Bo4o6YldGHJXbyQ2RzVYMJXZPq3gbJ5Rg8NKnMwj1pm7o06E8dBtIaq2dB4lnwwZ4q883DG4F2SIC2Sgb7GhvMrGuWArOfvjOL6gHGfP6ZnSkNfp0tvtFr%2FxPTPa%2BFjmmP28GcocdXLzf9Y1vAsBMI%2F4RrlwnHoATJHS2xOWLfKKc%2BBbz9rm2KL%2B0WNVMfCjgOJPg9KcMwSpEKRxSD1Ut4JOsH6n8sboL8ip%2FmWTVgJmZnzXIsDYNaxqCRaTnvObhsCyFZAaSaiZhJLbQjh3F%2Fp7iILU6%2BiZ3BtCIEE9mc%2B8oqEfjaC93BVAR7xc41CcDIhq2krOFJKqGP0XlRLoZV5yj8n1SoIC36MEoX9JaCNw%2FHNpNMdSoxrYMOXCbmP8BkHh7fEEK1QEl%2B%2FI%2BxpXcfJLtAasixvRji%2BMIiO174GOqUBv2kLP57cU6uYSeEcHQk3q9KcoSEX%2FpDqd%2B17o5xSbcAzjTVLUTMKM%2BGGKIXxTx8I6l2r35Fw90TuSAFMkObmgkY1ria2auarvtDcPk8rf2vaMVDItfmxmmLloG%2B6DLDNXKmQc3tz1bPmM5YQKzoNZKx92Y%2BEUxwY9gKO5mRF%2FuJC85xuCXnhS8rqXPW4fMPJHE2jB1znYS8Sr17scRKsxSv8UqES&X-Amz-Signature=c34befefa9964bf4654ad1cb3e1645bdb1819f4cd77216207a2dffd9eb81da07&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TXBRCY2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXO52sm9EjHDaCbQXmRV04UMr0gzuPsAXsBVfqr18iCAIgGpuyCFPiEtVU91CBnqcN%2BBR7HPhvkljZZAqUFNQvvxMq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDMhBVRPPKV6MgeUnJSrcA48ZbuLzn9p1sr6%2Ba0Nf760RqOp0S1avOVLSOzq4VJ9bhVECM1trXjeOVUG6Ys0NPjPLMfFegDvojSK59vGkL13pmbg%2Foo%2Bk%2FxO3UgqAOaw5fFZAtZP0pSZNtlmHsRchUqjbdcUVUG7knJFnijbbB%2Fs35ffZOyWSGWXGY5gsq%2F6r4f6zYXFX0rc8zRN9t89KZecwfMT6Y8gSWXlNxANBOuxFd%2Bo4o6YldGHJXbyQ2RzVYMJXZPq3gbJ5Rg8NKnMwj1pm7o06E8dBtIaq2dB4lnwwZ4q883DG4F2SIC2Sgb7GhvMrGuWArOfvjOL6gHGfP6ZnSkNfp0tvtFr%2FxPTPa%2BFjmmP28GcocdXLzf9Y1vAsBMI%2F4RrlwnHoATJHS2xOWLfKKc%2BBbz9rm2KL%2B0WNVMfCjgOJPg9KcMwSpEKRxSD1Ut4JOsH6n8sboL8ip%2FmWTVgJmZnzXIsDYNaxqCRaTnvObhsCyFZAaSaiZhJLbQjh3F%2Fp7iILU6%2BiZ3BtCIEE9mc%2B8oqEfjaC93BVAR7xc41CcDIhq2krOFJKqGP0XlRLoZV5yj8n1SoIC36MEoX9JaCNw%2FHNpNMdSoxrYMOXCbmP8BkHh7fEEK1QEl%2B%2FI%2BxpXcfJLtAasixvRji%2BMIiO174GOqUBv2kLP57cU6uYSeEcHQk3q9KcoSEX%2FpDqd%2B17o5xSbcAzjTVLUTMKM%2BGGKIXxTx8I6l2r35Fw90TuSAFMkObmgkY1ria2auarvtDcPk8rf2vaMVDItfmxmmLloG%2B6DLDNXKmQc3tz1bPmM5YQKzoNZKx92Y%2BEUxwY9gKO5mRF%2FuJC85xuCXnhS8rqXPW4fMPJHE2jB1znYS8Sr17scRKsxSv8UqES&X-Amz-Signature=7f58683b0662c7b7600833cb3a93447f91cac66b8a8ebd7e3b7b22f70b86f60b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TXBRCY2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXO52sm9EjHDaCbQXmRV04UMr0gzuPsAXsBVfqr18iCAIgGpuyCFPiEtVU91CBnqcN%2BBR7HPhvkljZZAqUFNQvvxMq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDMhBVRPPKV6MgeUnJSrcA48ZbuLzn9p1sr6%2Ba0Nf760RqOp0S1avOVLSOzq4VJ9bhVECM1trXjeOVUG6Ys0NPjPLMfFegDvojSK59vGkL13pmbg%2Foo%2Bk%2FxO3UgqAOaw5fFZAtZP0pSZNtlmHsRchUqjbdcUVUG7knJFnijbbB%2Fs35ffZOyWSGWXGY5gsq%2F6r4f6zYXFX0rc8zRN9t89KZecwfMT6Y8gSWXlNxANBOuxFd%2Bo4o6YldGHJXbyQ2RzVYMJXZPq3gbJ5Rg8NKnMwj1pm7o06E8dBtIaq2dB4lnwwZ4q883DG4F2SIC2Sgb7GhvMrGuWArOfvjOL6gHGfP6ZnSkNfp0tvtFr%2FxPTPa%2BFjmmP28GcocdXLzf9Y1vAsBMI%2F4RrlwnHoATJHS2xOWLfKKc%2BBbz9rm2KL%2B0WNVMfCjgOJPg9KcMwSpEKRxSD1Ut4JOsH6n8sboL8ip%2FmWTVgJmZnzXIsDYNaxqCRaTnvObhsCyFZAaSaiZhJLbQjh3F%2Fp7iILU6%2BiZ3BtCIEE9mc%2B8oqEfjaC93BVAR7xc41CcDIhq2krOFJKqGP0XlRLoZV5yj8n1SoIC36MEoX9JaCNw%2FHNpNMdSoxrYMOXCbmP8BkHh7fEEK1QEl%2B%2FI%2BxpXcfJLtAasixvRji%2BMIiO174GOqUBv2kLP57cU6uYSeEcHQk3q9KcoSEX%2FpDqd%2B17o5xSbcAzjTVLUTMKM%2BGGKIXxTx8I6l2r35Fw90TuSAFMkObmgkY1ria2auarvtDcPk8rf2vaMVDItfmxmmLloG%2B6DLDNXKmQc3tz1bPmM5YQKzoNZKx92Y%2BEUxwY9gKO5mRF%2FuJC85xuCXnhS8rqXPW4fMPJHE2jB1znYS8Sr17scRKsxSv8UqES&X-Amz-Signature=5aac17d96b226130ef169cd7c5efadd794ee347d316aef76925a7bf7e4c21e6a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TXBRCY2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXO52sm9EjHDaCbQXmRV04UMr0gzuPsAXsBVfqr18iCAIgGpuyCFPiEtVU91CBnqcN%2BBR7HPhvkljZZAqUFNQvvxMq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDMhBVRPPKV6MgeUnJSrcA48ZbuLzn9p1sr6%2Ba0Nf760RqOp0S1avOVLSOzq4VJ9bhVECM1trXjeOVUG6Ys0NPjPLMfFegDvojSK59vGkL13pmbg%2Foo%2Bk%2FxO3UgqAOaw5fFZAtZP0pSZNtlmHsRchUqjbdcUVUG7knJFnijbbB%2Fs35ffZOyWSGWXGY5gsq%2F6r4f6zYXFX0rc8zRN9t89KZecwfMT6Y8gSWXlNxANBOuxFd%2Bo4o6YldGHJXbyQ2RzVYMJXZPq3gbJ5Rg8NKnMwj1pm7o06E8dBtIaq2dB4lnwwZ4q883DG4F2SIC2Sgb7GhvMrGuWArOfvjOL6gHGfP6ZnSkNfp0tvtFr%2FxPTPa%2BFjmmP28GcocdXLzf9Y1vAsBMI%2F4RrlwnHoATJHS2xOWLfKKc%2BBbz9rm2KL%2B0WNVMfCjgOJPg9KcMwSpEKRxSD1Ut4JOsH6n8sboL8ip%2FmWTVgJmZnzXIsDYNaxqCRaTnvObhsCyFZAaSaiZhJLbQjh3F%2Fp7iILU6%2BiZ3BtCIEE9mc%2B8oqEfjaC93BVAR7xc41CcDIhq2krOFJKqGP0XlRLoZV5yj8n1SoIC36MEoX9JaCNw%2FHNpNMdSoxrYMOXCbmP8BkHh7fEEK1QEl%2B%2FI%2BxpXcfJLtAasixvRji%2BMIiO174GOqUBv2kLP57cU6uYSeEcHQk3q9KcoSEX%2FpDqd%2B17o5xSbcAzjTVLUTMKM%2BGGKIXxTx8I6l2r35Fw90TuSAFMkObmgkY1ria2auarvtDcPk8rf2vaMVDItfmxmmLloG%2B6DLDNXKmQc3tz1bPmM5YQKzoNZKx92Y%2BEUxwY9gKO5mRF%2FuJC85xuCXnhS8rqXPW4fMPJHE2jB1znYS8Sr17scRKsxSv8UqES&X-Amz-Signature=a7b8510b00899cbf391e19e94bb437c7b8c29348c6d4af20843acd0580e8098a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TXBRCY2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXO52sm9EjHDaCbQXmRV04UMr0gzuPsAXsBVfqr18iCAIgGpuyCFPiEtVU91CBnqcN%2BBR7HPhvkljZZAqUFNQvvxMq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDMhBVRPPKV6MgeUnJSrcA48ZbuLzn9p1sr6%2Ba0Nf760RqOp0S1avOVLSOzq4VJ9bhVECM1trXjeOVUG6Ys0NPjPLMfFegDvojSK59vGkL13pmbg%2Foo%2Bk%2FxO3UgqAOaw5fFZAtZP0pSZNtlmHsRchUqjbdcUVUG7knJFnijbbB%2Fs35ffZOyWSGWXGY5gsq%2F6r4f6zYXFX0rc8zRN9t89KZecwfMT6Y8gSWXlNxANBOuxFd%2Bo4o6YldGHJXbyQ2RzVYMJXZPq3gbJ5Rg8NKnMwj1pm7o06E8dBtIaq2dB4lnwwZ4q883DG4F2SIC2Sgb7GhvMrGuWArOfvjOL6gHGfP6ZnSkNfp0tvtFr%2FxPTPa%2BFjmmP28GcocdXLzf9Y1vAsBMI%2F4RrlwnHoATJHS2xOWLfKKc%2BBbz9rm2KL%2B0WNVMfCjgOJPg9KcMwSpEKRxSD1Ut4JOsH6n8sboL8ip%2FmWTVgJmZnzXIsDYNaxqCRaTnvObhsCyFZAaSaiZhJLbQjh3F%2Fp7iILU6%2BiZ3BtCIEE9mc%2B8oqEfjaC93BVAR7xc41CcDIhq2krOFJKqGP0XlRLoZV5yj8n1SoIC36MEoX9JaCNw%2FHNpNMdSoxrYMOXCbmP8BkHh7fEEK1QEl%2B%2FI%2BxpXcfJLtAasixvRji%2BMIiO174GOqUBv2kLP57cU6uYSeEcHQk3q9KcoSEX%2FpDqd%2B17o5xSbcAzjTVLUTMKM%2BGGKIXxTx8I6l2r35Fw90TuSAFMkObmgkY1ria2auarvtDcPk8rf2vaMVDItfmxmmLloG%2B6DLDNXKmQc3tz1bPmM5YQKzoNZKx92Y%2BEUxwY9gKO5mRF%2FuJC85xuCXnhS8rqXPW4fMPJHE2jB1znYS8Sr17scRKsxSv8UqES&X-Amz-Signature=cbe482a123f625ca45c5c2dc3e5c5ba6981c1c78f415b86ae20d3f6d5ff733fa&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TXBRCY2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXO52sm9EjHDaCbQXmRV04UMr0gzuPsAXsBVfqr18iCAIgGpuyCFPiEtVU91CBnqcN%2BBR7HPhvkljZZAqUFNQvvxMq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDMhBVRPPKV6MgeUnJSrcA48ZbuLzn9p1sr6%2Ba0Nf760RqOp0S1avOVLSOzq4VJ9bhVECM1trXjeOVUG6Ys0NPjPLMfFegDvojSK59vGkL13pmbg%2Foo%2Bk%2FxO3UgqAOaw5fFZAtZP0pSZNtlmHsRchUqjbdcUVUG7knJFnijbbB%2Fs35ffZOyWSGWXGY5gsq%2F6r4f6zYXFX0rc8zRN9t89KZecwfMT6Y8gSWXlNxANBOuxFd%2Bo4o6YldGHJXbyQ2RzVYMJXZPq3gbJ5Rg8NKnMwj1pm7o06E8dBtIaq2dB4lnwwZ4q883DG4F2SIC2Sgb7GhvMrGuWArOfvjOL6gHGfP6ZnSkNfp0tvtFr%2FxPTPa%2BFjmmP28GcocdXLzf9Y1vAsBMI%2F4RrlwnHoATJHS2xOWLfKKc%2BBbz9rm2KL%2B0WNVMfCjgOJPg9KcMwSpEKRxSD1Ut4JOsH6n8sboL8ip%2FmWTVgJmZnzXIsDYNaxqCRaTnvObhsCyFZAaSaiZhJLbQjh3F%2Fp7iILU6%2BiZ3BtCIEE9mc%2B8oqEfjaC93BVAR7xc41CcDIhq2krOFJKqGP0XlRLoZV5yj8n1SoIC36MEoX9JaCNw%2FHNpNMdSoxrYMOXCbmP8BkHh7fEEK1QEl%2B%2FI%2BxpXcfJLtAasixvRji%2BMIiO174GOqUBv2kLP57cU6uYSeEcHQk3q9KcoSEX%2FpDqd%2B17o5xSbcAzjTVLUTMKM%2BGGKIXxTx8I6l2r35Fw90TuSAFMkObmgkY1ria2auarvtDcPk8rf2vaMVDItfmxmmLloG%2B6DLDNXKmQc3tz1bPmM5YQKzoNZKx92Y%2BEUxwY9gKO5mRF%2FuJC85xuCXnhS8rqXPW4fMPJHE2jB1znYS8Sr17scRKsxSv8UqES&X-Amz-Signature=12376bb80ea71579c4fed39e552fecb8ebd6432a5a1d5869a3fed9f8dbbd98ce&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
