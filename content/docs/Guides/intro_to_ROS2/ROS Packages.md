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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSJAEHUV%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBcFPVZnkTlm6nSgfCdcb8yZMy125yk%2FxcS4h0%2BsBVTgIgOhsNpTyoRXadOvHpF9R3iYYZkptsJy9LK0fy9m%2BnveUqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCF60nELER%2FukfeqSrcA9V6UZvPmTg1dCm4IE8JS4KuAIOOfJEMiotkf%2FhM0S%2BHGEIXjSRdNm0PwowjEXb3J%2FBRBVBfmtJsvHlikHAr%2FmhDTdmXxJlDpANAbG%2BZC0gq9BeP1an4QJELXipFcphFMHJMJwKLzmUQSD%2FJDhGGyCfh8nyDPWLlRRbB6IkMVfCJl5nE%2BDy7aVJ%2B2rUogySuELn%2FfhvjY6rUMPEKIuURp0AMNfafIStuO%2FVyxknQKCVS2PadAiKGyqkGvVqw3od4ehsH1TiYGXonM5N%2FH3SZsrhUnReYmGUWNqNIOm%2BCUwRnvl3EyiwI2ZpT6HnmVzV%2B02mJpPJ8C0dwz5gXpkhu2txD21SHelwl9DpMRjBIySGdofs55JBL0XtAXwCqTR9M4UzOU9gHI5%2BR%2ByQiy%2BlVVbX91OAOxYnOdzT9mCNsN3B7cs7ye9MvhkeueieF%2BleDS5STDfnsvsUcgoKsB2IBhnIjBaI5CPFHBDcO42uJ59UTsZF7nGD9aXdsZy39aLdpRtMgNjf5pVwloXABgNzGtU7oCxyt64sgSr8uqjv5DK0fL2OtKl9TcBjgdek8Omt50nj7TSIWCOVaVTNDLOiLIuiLIqbEbE92OjmNgLPw9iCBU6VieKd3kLbvGADjMIrzlMIGOqUByqv%2F7Ky2l7RibDHooliSnc%2FYba5j1L8osGW0r2aX49VejUVJffZD8xv4A9Uh1LCkV3LnfOyHFhGM0QusQ9nte6HA9VSgnNulrym394ORXBFI25L7BtMCayVOFi48OpsYt%2B3HaXeUl3sxvwNuC0rr7aSyDtVImrjITxcw5hPAgHMn8bsx7zA7BgZWHVS3U5EZlL%2FSZ5A2F5TfxlIA4%2BpTzCegfV0N&X-Amz-Signature=24292053ae93b817605ef27847d9a61f3f80c1e8ab0f25abc894ef713b607143&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSJAEHUV%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBcFPVZnkTlm6nSgfCdcb8yZMy125yk%2FxcS4h0%2BsBVTgIgOhsNpTyoRXadOvHpF9R3iYYZkptsJy9LK0fy9m%2BnveUqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCF60nELER%2FukfeqSrcA9V6UZvPmTg1dCm4IE8JS4KuAIOOfJEMiotkf%2FhM0S%2BHGEIXjSRdNm0PwowjEXb3J%2FBRBVBfmtJsvHlikHAr%2FmhDTdmXxJlDpANAbG%2BZC0gq9BeP1an4QJELXipFcphFMHJMJwKLzmUQSD%2FJDhGGyCfh8nyDPWLlRRbB6IkMVfCJl5nE%2BDy7aVJ%2B2rUogySuELn%2FfhvjY6rUMPEKIuURp0AMNfafIStuO%2FVyxknQKCVS2PadAiKGyqkGvVqw3od4ehsH1TiYGXonM5N%2FH3SZsrhUnReYmGUWNqNIOm%2BCUwRnvl3EyiwI2ZpT6HnmVzV%2B02mJpPJ8C0dwz5gXpkhu2txD21SHelwl9DpMRjBIySGdofs55JBL0XtAXwCqTR9M4UzOU9gHI5%2BR%2ByQiy%2BlVVbX91OAOxYnOdzT9mCNsN3B7cs7ye9MvhkeueieF%2BleDS5STDfnsvsUcgoKsB2IBhnIjBaI5CPFHBDcO42uJ59UTsZF7nGD9aXdsZy39aLdpRtMgNjf5pVwloXABgNzGtU7oCxyt64sgSr8uqjv5DK0fL2OtKl9TcBjgdek8Omt50nj7TSIWCOVaVTNDLOiLIuiLIqbEbE92OjmNgLPw9iCBU6VieKd3kLbvGADjMIrzlMIGOqUByqv%2F7Ky2l7RibDHooliSnc%2FYba5j1L8osGW0r2aX49VejUVJffZD8xv4A9Uh1LCkV3LnfOyHFhGM0QusQ9nte6HA9VSgnNulrym394ORXBFI25L7BtMCayVOFi48OpsYt%2B3HaXeUl3sxvwNuC0rr7aSyDtVImrjITxcw5hPAgHMn8bsx7zA7BgZWHVS3U5EZlL%2FSZ5A2F5TfxlIA4%2BpTzCegfV0N&X-Amz-Signature=864c65deeb048e97532f71227bded8da42c65499632e411cf954d86d13f36cb1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSJAEHUV%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBcFPVZnkTlm6nSgfCdcb8yZMy125yk%2FxcS4h0%2BsBVTgIgOhsNpTyoRXadOvHpF9R3iYYZkptsJy9LK0fy9m%2BnveUqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCF60nELER%2FukfeqSrcA9V6UZvPmTg1dCm4IE8JS4KuAIOOfJEMiotkf%2FhM0S%2BHGEIXjSRdNm0PwowjEXb3J%2FBRBVBfmtJsvHlikHAr%2FmhDTdmXxJlDpANAbG%2BZC0gq9BeP1an4QJELXipFcphFMHJMJwKLzmUQSD%2FJDhGGyCfh8nyDPWLlRRbB6IkMVfCJl5nE%2BDy7aVJ%2B2rUogySuELn%2FfhvjY6rUMPEKIuURp0AMNfafIStuO%2FVyxknQKCVS2PadAiKGyqkGvVqw3od4ehsH1TiYGXonM5N%2FH3SZsrhUnReYmGUWNqNIOm%2BCUwRnvl3EyiwI2ZpT6HnmVzV%2B02mJpPJ8C0dwz5gXpkhu2txD21SHelwl9DpMRjBIySGdofs55JBL0XtAXwCqTR9M4UzOU9gHI5%2BR%2ByQiy%2BlVVbX91OAOxYnOdzT9mCNsN3B7cs7ye9MvhkeueieF%2BleDS5STDfnsvsUcgoKsB2IBhnIjBaI5CPFHBDcO42uJ59UTsZF7nGD9aXdsZy39aLdpRtMgNjf5pVwloXABgNzGtU7oCxyt64sgSr8uqjv5DK0fL2OtKl9TcBjgdek8Omt50nj7TSIWCOVaVTNDLOiLIuiLIqbEbE92OjmNgLPw9iCBU6VieKd3kLbvGADjMIrzlMIGOqUByqv%2F7Ky2l7RibDHooliSnc%2FYba5j1L8osGW0r2aX49VejUVJffZD8xv4A9Uh1LCkV3LnfOyHFhGM0QusQ9nte6HA9VSgnNulrym394ORXBFI25L7BtMCayVOFi48OpsYt%2B3HaXeUl3sxvwNuC0rr7aSyDtVImrjITxcw5hPAgHMn8bsx7zA7BgZWHVS3U5EZlL%2FSZ5A2F5TfxlIA4%2BpTzCegfV0N&X-Amz-Signature=89cc68b7d2c882b9bbab094f208f2b33ddd85abbac007a9a4487f02e9622543d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSJAEHUV%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBcFPVZnkTlm6nSgfCdcb8yZMy125yk%2FxcS4h0%2BsBVTgIgOhsNpTyoRXadOvHpF9R3iYYZkptsJy9LK0fy9m%2BnveUqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCF60nELER%2FukfeqSrcA9V6UZvPmTg1dCm4IE8JS4KuAIOOfJEMiotkf%2FhM0S%2BHGEIXjSRdNm0PwowjEXb3J%2FBRBVBfmtJsvHlikHAr%2FmhDTdmXxJlDpANAbG%2BZC0gq9BeP1an4QJELXipFcphFMHJMJwKLzmUQSD%2FJDhGGyCfh8nyDPWLlRRbB6IkMVfCJl5nE%2BDy7aVJ%2B2rUogySuELn%2FfhvjY6rUMPEKIuURp0AMNfafIStuO%2FVyxknQKCVS2PadAiKGyqkGvVqw3od4ehsH1TiYGXonM5N%2FH3SZsrhUnReYmGUWNqNIOm%2BCUwRnvl3EyiwI2ZpT6HnmVzV%2B02mJpPJ8C0dwz5gXpkhu2txD21SHelwl9DpMRjBIySGdofs55JBL0XtAXwCqTR9M4UzOU9gHI5%2BR%2ByQiy%2BlVVbX91OAOxYnOdzT9mCNsN3B7cs7ye9MvhkeueieF%2BleDS5STDfnsvsUcgoKsB2IBhnIjBaI5CPFHBDcO42uJ59UTsZF7nGD9aXdsZy39aLdpRtMgNjf5pVwloXABgNzGtU7oCxyt64sgSr8uqjv5DK0fL2OtKl9TcBjgdek8Omt50nj7TSIWCOVaVTNDLOiLIuiLIqbEbE92OjmNgLPw9iCBU6VieKd3kLbvGADjMIrzlMIGOqUByqv%2F7Ky2l7RibDHooliSnc%2FYba5j1L8osGW0r2aX49VejUVJffZD8xv4A9Uh1LCkV3LnfOyHFhGM0QusQ9nte6HA9VSgnNulrym394ORXBFI25L7BtMCayVOFi48OpsYt%2B3HaXeUl3sxvwNuC0rr7aSyDtVImrjITxcw5hPAgHMn8bsx7zA7BgZWHVS3U5EZlL%2FSZ5A2F5TfxlIA4%2BpTzCegfV0N&X-Amz-Signature=8720dd6a2ed44782f269d3f25287d8d168976a46991bdccb212111100189a1c3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSJAEHUV%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBcFPVZnkTlm6nSgfCdcb8yZMy125yk%2FxcS4h0%2BsBVTgIgOhsNpTyoRXadOvHpF9R3iYYZkptsJy9LK0fy9m%2BnveUqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCF60nELER%2FukfeqSrcA9V6UZvPmTg1dCm4IE8JS4KuAIOOfJEMiotkf%2FhM0S%2BHGEIXjSRdNm0PwowjEXb3J%2FBRBVBfmtJsvHlikHAr%2FmhDTdmXxJlDpANAbG%2BZC0gq9BeP1an4QJELXipFcphFMHJMJwKLzmUQSD%2FJDhGGyCfh8nyDPWLlRRbB6IkMVfCJl5nE%2BDy7aVJ%2B2rUogySuELn%2FfhvjY6rUMPEKIuURp0AMNfafIStuO%2FVyxknQKCVS2PadAiKGyqkGvVqw3od4ehsH1TiYGXonM5N%2FH3SZsrhUnReYmGUWNqNIOm%2BCUwRnvl3EyiwI2ZpT6HnmVzV%2B02mJpPJ8C0dwz5gXpkhu2txD21SHelwl9DpMRjBIySGdofs55JBL0XtAXwCqTR9M4UzOU9gHI5%2BR%2ByQiy%2BlVVbX91OAOxYnOdzT9mCNsN3B7cs7ye9MvhkeueieF%2BleDS5STDfnsvsUcgoKsB2IBhnIjBaI5CPFHBDcO42uJ59UTsZF7nGD9aXdsZy39aLdpRtMgNjf5pVwloXABgNzGtU7oCxyt64sgSr8uqjv5DK0fL2OtKl9TcBjgdek8Omt50nj7TSIWCOVaVTNDLOiLIuiLIqbEbE92OjmNgLPw9iCBU6VieKd3kLbvGADjMIrzlMIGOqUByqv%2F7Ky2l7RibDHooliSnc%2FYba5j1L8osGW0r2aX49VejUVJffZD8xv4A9Uh1LCkV3LnfOyHFhGM0QusQ9nte6HA9VSgnNulrym394ORXBFI25L7BtMCayVOFi48OpsYt%2B3HaXeUl3sxvwNuC0rr7aSyDtVImrjITxcw5hPAgHMn8bsx7zA7BgZWHVS3U5EZlL%2FSZ5A2F5TfxlIA4%2BpTzCegfV0N&X-Amz-Signature=cc735c3e856e8fce2e1f5baa51ff49dd64783101f1ba93b15a2db5ba8a5a942d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSJAEHUV%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBcFPVZnkTlm6nSgfCdcb8yZMy125yk%2FxcS4h0%2BsBVTgIgOhsNpTyoRXadOvHpF9R3iYYZkptsJy9LK0fy9m%2BnveUqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCF60nELER%2FukfeqSrcA9V6UZvPmTg1dCm4IE8JS4KuAIOOfJEMiotkf%2FhM0S%2BHGEIXjSRdNm0PwowjEXb3J%2FBRBVBfmtJsvHlikHAr%2FmhDTdmXxJlDpANAbG%2BZC0gq9BeP1an4QJELXipFcphFMHJMJwKLzmUQSD%2FJDhGGyCfh8nyDPWLlRRbB6IkMVfCJl5nE%2BDy7aVJ%2B2rUogySuELn%2FfhvjY6rUMPEKIuURp0AMNfafIStuO%2FVyxknQKCVS2PadAiKGyqkGvVqw3od4ehsH1TiYGXonM5N%2FH3SZsrhUnReYmGUWNqNIOm%2BCUwRnvl3EyiwI2ZpT6HnmVzV%2B02mJpPJ8C0dwz5gXpkhu2txD21SHelwl9DpMRjBIySGdofs55JBL0XtAXwCqTR9M4UzOU9gHI5%2BR%2ByQiy%2BlVVbX91OAOxYnOdzT9mCNsN3B7cs7ye9MvhkeueieF%2BleDS5STDfnsvsUcgoKsB2IBhnIjBaI5CPFHBDcO42uJ59UTsZF7nGD9aXdsZy39aLdpRtMgNjf5pVwloXABgNzGtU7oCxyt64sgSr8uqjv5DK0fL2OtKl9TcBjgdek8Omt50nj7TSIWCOVaVTNDLOiLIuiLIqbEbE92OjmNgLPw9iCBU6VieKd3kLbvGADjMIrzlMIGOqUByqv%2F7Ky2l7RibDHooliSnc%2FYba5j1L8osGW0r2aX49VejUVJffZD8xv4A9Uh1LCkV3LnfOyHFhGM0QusQ9nte6HA9VSgnNulrym394ORXBFI25L7BtMCayVOFi48OpsYt%2B3HaXeUl3sxvwNuC0rr7aSyDtVImrjITxcw5hPAgHMn8bsx7zA7BgZWHVS3U5EZlL%2FSZ5A2F5TfxlIA4%2BpTzCegfV0N&X-Amz-Signature=1ee792c1b616347bcb8f90753c7b446559a1a890ed8f8a0151b083541acffff3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSJAEHUV%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBcFPVZnkTlm6nSgfCdcb8yZMy125yk%2FxcS4h0%2BsBVTgIgOhsNpTyoRXadOvHpF9R3iYYZkptsJy9LK0fy9m%2BnveUqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCF60nELER%2FukfeqSrcA9V6UZvPmTg1dCm4IE8JS4KuAIOOfJEMiotkf%2FhM0S%2BHGEIXjSRdNm0PwowjEXb3J%2FBRBVBfmtJsvHlikHAr%2FmhDTdmXxJlDpANAbG%2BZC0gq9BeP1an4QJELXipFcphFMHJMJwKLzmUQSD%2FJDhGGyCfh8nyDPWLlRRbB6IkMVfCJl5nE%2BDy7aVJ%2B2rUogySuELn%2FfhvjY6rUMPEKIuURp0AMNfafIStuO%2FVyxknQKCVS2PadAiKGyqkGvVqw3od4ehsH1TiYGXonM5N%2FH3SZsrhUnReYmGUWNqNIOm%2BCUwRnvl3EyiwI2ZpT6HnmVzV%2B02mJpPJ8C0dwz5gXpkhu2txD21SHelwl9DpMRjBIySGdofs55JBL0XtAXwCqTR9M4UzOU9gHI5%2BR%2ByQiy%2BlVVbX91OAOxYnOdzT9mCNsN3B7cs7ye9MvhkeueieF%2BleDS5STDfnsvsUcgoKsB2IBhnIjBaI5CPFHBDcO42uJ59UTsZF7nGD9aXdsZy39aLdpRtMgNjf5pVwloXABgNzGtU7oCxyt64sgSr8uqjv5DK0fL2OtKl9TcBjgdek8Omt50nj7TSIWCOVaVTNDLOiLIuiLIqbEbE92OjmNgLPw9iCBU6VieKd3kLbvGADjMIrzlMIGOqUByqv%2F7Ky2l7RibDHooliSnc%2FYba5j1L8osGW0r2aX49VejUVJffZD8xv4A9Uh1LCkV3LnfOyHFhGM0QusQ9nte6HA9VSgnNulrym394ORXBFI25L7BtMCayVOFi48OpsYt%2B3HaXeUl3sxvwNuC0rr7aSyDtVImrjITxcw5hPAgHMn8bsx7zA7BgZWHVS3U5EZlL%2FSZ5A2F5TfxlIA4%2BpTzCegfV0N&X-Amz-Signature=0c0a36b757f198fc20e9957a70fb5726d333036ab385aa344e170e798863ee0d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
