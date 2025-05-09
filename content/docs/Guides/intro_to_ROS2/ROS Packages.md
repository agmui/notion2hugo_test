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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK2NKR7H%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDQmzT3C2%2FVqGFuzu3GL8BjuEMuXJWT1F3ZI4Q40mrnAiEA45PR%2BbzIpD8TqGH%2FgX3oGoeonQLaxtG5tvb%2BepLFesIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgwCcmghZY4ADSrKSrcA2SuI6NP%2Fv0ifuPn3y%2F70VTFks1QYhqEDcRFAKXOYOOU082dUhjKFQiiAHTrRT%2FbiRPOJ%2F6uUHZmHXFcKF1pLbitBScGHSHlRQOfRAmpSrR85bKuBknri9FM6zfPEqsktqNOtMTaAtBhcHX3WyjsX9z%2BmctUl6BNwutB4kilX03z%2B56YL1d6WbHcove2HsLiTfLhzf%2BHWFCuSGoG7jVKaHxh419faOjcWOkYlEPpDV538rLB64JUoQhqWInBceV9e6aGvImlPH7vRe31dDTO2cv3hqJUoAK54oNT%2FyY6eKjF500dtq%2FMNcOlELX2l4pU%2FXMkSa06K5V9andO65%2B90iwG8lB6N2xwJ2uco9R8yprnIetJRTOkQ7Z9N3E%2B6ohc2zgTdnrVIPY%2BmAiDXGRsooK04elxnFvw6VRfVzBZ3KdkjrdpCsOL9ZRL0Azrmp%2FA1vULT0f7kcZ8u7Qph9uDgAy924adJwKpXbSJWUMregwC7mOh6LL1%2Bri%2FzJs2akGWLx3Man5OEtPccdIo%2BHN40ZUW5%2BQ%2FHgMDVFbpqEF2pSKn%2BoAx8C84fvMRFDWIlWkNttP1WrCNyVhs8oL99TOmgt85dtmEmwrlWyEapgxe8v6d30BiTX1FifMmMvINMMPk9cAGOqUBWSxFyzSyRN7yRypudIer%2FQyruwF1UvxykzWwCbf5xOwmaaWbLxUrJf9h4jimCbG1g0aZe2iJH9EebGIbtClCtewOlWXd8JKoaaVeAqr7sRNESmvv1LN2ZPE3RDwcu2AxEJb7C1ONVwahqrxuuARRF2Z2nlXY0oakrUtoQxzIkLHCoJAxdYQ%2FFCGtiPvP%2FEE2g7VvAuQafIocXGC77m6YRYZfF8QG&X-Amz-Signature=5dd3d83fe1b4a568576a90b747203834229aa6aebfbdd5e8ce5880f22478f603&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK2NKR7H%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDQmzT3C2%2FVqGFuzu3GL8BjuEMuXJWT1F3ZI4Q40mrnAiEA45PR%2BbzIpD8TqGH%2FgX3oGoeonQLaxtG5tvb%2BepLFesIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgwCcmghZY4ADSrKSrcA2SuI6NP%2Fv0ifuPn3y%2F70VTFks1QYhqEDcRFAKXOYOOU082dUhjKFQiiAHTrRT%2FbiRPOJ%2F6uUHZmHXFcKF1pLbitBScGHSHlRQOfRAmpSrR85bKuBknri9FM6zfPEqsktqNOtMTaAtBhcHX3WyjsX9z%2BmctUl6BNwutB4kilX03z%2B56YL1d6WbHcove2HsLiTfLhzf%2BHWFCuSGoG7jVKaHxh419faOjcWOkYlEPpDV538rLB64JUoQhqWInBceV9e6aGvImlPH7vRe31dDTO2cv3hqJUoAK54oNT%2FyY6eKjF500dtq%2FMNcOlELX2l4pU%2FXMkSa06K5V9andO65%2B90iwG8lB6N2xwJ2uco9R8yprnIetJRTOkQ7Z9N3E%2B6ohc2zgTdnrVIPY%2BmAiDXGRsooK04elxnFvw6VRfVzBZ3KdkjrdpCsOL9ZRL0Azrmp%2FA1vULT0f7kcZ8u7Qph9uDgAy924adJwKpXbSJWUMregwC7mOh6LL1%2Bri%2FzJs2akGWLx3Man5OEtPccdIo%2BHN40ZUW5%2BQ%2FHgMDVFbpqEF2pSKn%2BoAx8C84fvMRFDWIlWkNttP1WrCNyVhs8oL99TOmgt85dtmEmwrlWyEapgxe8v6d30BiTX1FifMmMvINMMPk9cAGOqUBWSxFyzSyRN7yRypudIer%2FQyruwF1UvxykzWwCbf5xOwmaaWbLxUrJf9h4jimCbG1g0aZe2iJH9EebGIbtClCtewOlWXd8JKoaaVeAqr7sRNESmvv1LN2ZPE3RDwcu2AxEJb7C1ONVwahqrxuuARRF2Z2nlXY0oakrUtoQxzIkLHCoJAxdYQ%2FFCGtiPvP%2FEE2g7VvAuQafIocXGC77m6YRYZfF8QG&X-Amz-Signature=4cd39804200baf39e0d683ce7f0aa0a3cd5f5e68bf7cec7c052c80193d5eaa19&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK2NKR7H%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDQmzT3C2%2FVqGFuzu3GL8BjuEMuXJWT1F3ZI4Q40mrnAiEA45PR%2BbzIpD8TqGH%2FgX3oGoeonQLaxtG5tvb%2BepLFesIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgwCcmghZY4ADSrKSrcA2SuI6NP%2Fv0ifuPn3y%2F70VTFks1QYhqEDcRFAKXOYOOU082dUhjKFQiiAHTrRT%2FbiRPOJ%2F6uUHZmHXFcKF1pLbitBScGHSHlRQOfRAmpSrR85bKuBknri9FM6zfPEqsktqNOtMTaAtBhcHX3WyjsX9z%2BmctUl6BNwutB4kilX03z%2B56YL1d6WbHcove2HsLiTfLhzf%2BHWFCuSGoG7jVKaHxh419faOjcWOkYlEPpDV538rLB64JUoQhqWInBceV9e6aGvImlPH7vRe31dDTO2cv3hqJUoAK54oNT%2FyY6eKjF500dtq%2FMNcOlELX2l4pU%2FXMkSa06K5V9andO65%2B90iwG8lB6N2xwJ2uco9R8yprnIetJRTOkQ7Z9N3E%2B6ohc2zgTdnrVIPY%2BmAiDXGRsooK04elxnFvw6VRfVzBZ3KdkjrdpCsOL9ZRL0Azrmp%2FA1vULT0f7kcZ8u7Qph9uDgAy924adJwKpXbSJWUMregwC7mOh6LL1%2Bri%2FzJs2akGWLx3Man5OEtPccdIo%2BHN40ZUW5%2BQ%2FHgMDVFbpqEF2pSKn%2BoAx8C84fvMRFDWIlWkNttP1WrCNyVhs8oL99TOmgt85dtmEmwrlWyEapgxe8v6d30BiTX1FifMmMvINMMPk9cAGOqUBWSxFyzSyRN7yRypudIer%2FQyruwF1UvxykzWwCbf5xOwmaaWbLxUrJf9h4jimCbG1g0aZe2iJH9EebGIbtClCtewOlWXd8JKoaaVeAqr7sRNESmvv1LN2ZPE3RDwcu2AxEJb7C1ONVwahqrxuuARRF2Z2nlXY0oakrUtoQxzIkLHCoJAxdYQ%2FFCGtiPvP%2FEE2g7VvAuQafIocXGC77m6YRYZfF8QG&X-Amz-Signature=afa7d4e67dffca5bf8be6f94af8c487e349978dbde202d698b9cc5b2b254a251&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK2NKR7H%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDQmzT3C2%2FVqGFuzu3GL8BjuEMuXJWT1F3ZI4Q40mrnAiEA45PR%2BbzIpD8TqGH%2FgX3oGoeonQLaxtG5tvb%2BepLFesIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgwCcmghZY4ADSrKSrcA2SuI6NP%2Fv0ifuPn3y%2F70VTFks1QYhqEDcRFAKXOYOOU082dUhjKFQiiAHTrRT%2FbiRPOJ%2F6uUHZmHXFcKF1pLbitBScGHSHlRQOfRAmpSrR85bKuBknri9FM6zfPEqsktqNOtMTaAtBhcHX3WyjsX9z%2BmctUl6BNwutB4kilX03z%2B56YL1d6WbHcove2HsLiTfLhzf%2BHWFCuSGoG7jVKaHxh419faOjcWOkYlEPpDV538rLB64JUoQhqWInBceV9e6aGvImlPH7vRe31dDTO2cv3hqJUoAK54oNT%2FyY6eKjF500dtq%2FMNcOlELX2l4pU%2FXMkSa06K5V9andO65%2B90iwG8lB6N2xwJ2uco9R8yprnIetJRTOkQ7Z9N3E%2B6ohc2zgTdnrVIPY%2BmAiDXGRsooK04elxnFvw6VRfVzBZ3KdkjrdpCsOL9ZRL0Azrmp%2FA1vULT0f7kcZ8u7Qph9uDgAy924adJwKpXbSJWUMregwC7mOh6LL1%2Bri%2FzJs2akGWLx3Man5OEtPccdIo%2BHN40ZUW5%2BQ%2FHgMDVFbpqEF2pSKn%2BoAx8C84fvMRFDWIlWkNttP1WrCNyVhs8oL99TOmgt85dtmEmwrlWyEapgxe8v6d30BiTX1FifMmMvINMMPk9cAGOqUBWSxFyzSyRN7yRypudIer%2FQyruwF1UvxykzWwCbf5xOwmaaWbLxUrJf9h4jimCbG1g0aZe2iJH9EebGIbtClCtewOlWXd8JKoaaVeAqr7sRNESmvv1LN2ZPE3RDwcu2AxEJb7C1ONVwahqrxuuARRF2Z2nlXY0oakrUtoQxzIkLHCoJAxdYQ%2FFCGtiPvP%2FEE2g7VvAuQafIocXGC77m6YRYZfF8QG&X-Amz-Signature=b9937303221dacf1feb45d464296562a2932e3eb6987f759aff31e0d6d3869b8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK2NKR7H%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDQmzT3C2%2FVqGFuzu3GL8BjuEMuXJWT1F3ZI4Q40mrnAiEA45PR%2BbzIpD8TqGH%2FgX3oGoeonQLaxtG5tvb%2BepLFesIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgwCcmghZY4ADSrKSrcA2SuI6NP%2Fv0ifuPn3y%2F70VTFks1QYhqEDcRFAKXOYOOU082dUhjKFQiiAHTrRT%2FbiRPOJ%2F6uUHZmHXFcKF1pLbitBScGHSHlRQOfRAmpSrR85bKuBknri9FM6zfPEqsktqNOtMTaAtBhcHX3WyjsX9z%2BmctUl6BNwutB4kilX03z%2B56YL1d6WbHcove2HsLiTfLhzf%2BHWFCuSGoG7jVKaHxh419faOjcWOkYlEPpDV538rLB64JUoQhqWInBceV9e6aGvImlPH7vRe31dDTO2cv3hqJUoAK54oNT%2FyY6eKjF500dtq%2FMNcOlELX2l4pU%2FXMkSa06K5V9andO65%2B90iwG8lB6N2xwJ2uco9R8yprnIetJRTOkQ7Z9N3E%2B6ohc2zgTdnrVIPY%2BmAiDXGRsooK04elxnFvw6VRfVzBZ3KdkjrdpCsOL9ZRL0Azrmp%2FA1vULT0f7kcZ8u7Qph9uDgAy924adJwKpXbSJWUMregwC7mOh6LL1%2Bri%2FzJs2akGWLx3Man5OEtPccdIo%2BHN40ZUW5%2BQ%2FHgMDVFbpqEF2pSKn%2BoAx8C84fvMRFDWIlWkNttP1WrCNyVhs8oL99TOmgt85dtmEmwrlWyEapgxe8v6d30BiTX1FifMmMvINMMPk9cAGOqUBWSxFyzSyRN7yRypudIer%2FQyruwF1UvxykzWwCbf5xOwmaaWbLxUrJf9h4jimCbG1g0aZe2iJH9EebGIbtClCtewOlWXd8JKoaaVeAqr7sRNESmvv1LN2ZPE3RDwcu2AxEJb7C1ONVwahqrxuuARRF2Z2nlXY0oakrUtoQxzIkLHCoJAxdYQ%2FFCGtiPvP%2FEE2g7VvAuQafIocXGC77m6YRYZfF8QG&X-Amz-Signature=65ce48fb795b401b487e270a2fa0733ff3125688083dbc7a8d2c877aa2ba90d0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK2NKR7H%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDQmzT3C2%2FVqGFuzu3GL8BjuEMuXJWT1F3ZI4Q40mrnAiEA45PR%2BbzIpD8TqGH%2FgX3oGoeonQLaxtG5tvb%2BepLFesIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgwCcmghZY4ADSrKSrcA2SuI6NP%2Fv0ifuPn3y%2F70VTFks1QYhqEDcRFAKXOYOOU082dUhjKFQiiAHTrRT%2FbiRPOJ%2F6uUHZmHXFcKF1pLbitBScGHSHlRQOfRAmpSrR85bKuBknri9FM6zfPEqsktqNOtMTaAtBhcHX3WyjsX9z%2BmctUl6BNwutB4kilX03z%2B56YL1d6WbHcove2HsLiTfLhzf%2BHWFCuSGoG7jVKaHxh419faOjcWOkYlEPpDV538rLB64JUoQhqWInBceV9e6aGvImlPH7vRe31dDTO2cv3hqJUoAK54oNT%2FyY6eKjF500dtq%2FMNcOlELX2l4pU%2FXMkSa06K5V9andO65%2B90iwG8lB6N2xwJ2uco9R8yprnIetJRTOkQ7Z9N3E%2B6ohc2zgTdnrVIPY%2BmAiDXGRsooK04elxnFvw6VRfVzBZ3KdkjrdpCsOL9ZRL0Azrmp%2FA1vULT0f7kcZ8u7Qph9uDgAy924adJwKpXbSJWUMregwC7mOh6LL1%2Bri%2FzJs2akGWLx3Man5OEtPccdIo%2BHN40ZUW5%2BQ%2FHgMDVFbpqEF2pSKn%2BoAx8C84fvMRFDWIlWkNttP1WrCNyVhs8oL99TOmgt85dtmEmwrlWyEapgxe8v6d30BiTX1FifMmMvINMMPk9cAGOqUBWSxFyzSyRN7yRypudIer%2FQyruwF1UvxykzWwCbf5xOwmaaWbLxUrJf9h4jimCbG1g0aZe2iJH9EebGIbtClCtewOlWXd8JKoaaVeAqr7sRNESmvv1LN2ZPE3RDwcu2AxEJb7C1ONVwahqrxuuARRF2Z2nlXY0oakrUtoQxzIkLHCoJAxdYQ%2FFCGtiPvP%2FEE2g7VvAuQafIocXGC77m6YRYZfF8QG&X-Amz-Signature=5c1808d363836ffcc2593feb87782022012d41d8a6489c8afe03bca6cfe9b6cc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK2NKR7H%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDQmzT3C2%2FVqGFuzu3GL8BjuEMuXJWT1F3ZI4Q40mrnAiEA45PR%2BbzIpD8TqGH%2FgX3oGoeonQLaxtG5tvb%2BepLFesIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgwCcmghZY4ADSrKSrcA2SuI6NP%2Fv0ifuPn3y%2F70VTFks1QYhqEDcRFAKXOYOOU082dUhjKFQiiAHTrRT%2FbiRPOJ%2F6uUHZmHXFcKF1pLbitBScGHSHlRQOfRAmpSrR85bKuBknri9FM6zfPEqsktqNOtMTaAtBhcHX3WyjsX9z%2BmctUl6BNwutB4kilX03z%2B56YL1d6WbHcove2HsLiTfLhzf%2BHWFCuSGoG7jVKaHxh419faOjcWOkYlEPpDV538rLB64JUoQhqWInBceV9e6aGvImlPH7vRe31dDTO2cv3hqJUoAK54oNT%2FyY6eKjF500dtq%2FMNcOlELX2l4pU%2FXMkSa06K5V9andO65%2B90iwG8lB6N2xwJ2uco9R8yprnIetJRTOkQ7Z9N3E%2B6ohc2zgTdnrVIPY%2BmAiDXGRsooK04elxnFvw6VRfVzBZ3KdkjrdpCsOL9ZRL0Azrmp%2FA1vULT0f7kcZ8u7Qph9uDgAy924adJwKpXbSJWUMregwC7mOh6LL1%2Bri%2FzJs2akGWLx3Man5OEtPccdIo%2BHN40ZUW5%2BQ%2FHgMDVFbpqEF2pSKn%2BoAx8C84fvMRFDWIlWkNttP1WrCNyVhs8oL99TOmgt85dtmEmwrlWyEapgxe8v6d30BiTX1FifMmMvINMMPk9cAGOqUBWSxFyzSyRN7yRypudIer%2FQyruwF1UvxykzWwCbf5xOwmaaWbLxUrJf9h4jimCbG1g0aZe2iJH9EebGIbtClCtewOlWXd8JKoaaVeAqr7sRNESmvv1LN2ZPE3RDwcu2AxEJb7C1ONVwahqrxuuARRF2Z2nlXY0oakrUtoQxzIkLHCoJAxdYQ%2FFCGtiPvP%2FEE2g7VvAuQafIocXGC77m6YRYZfF8QG&X-Amz-Signature=0c129f1f46ccfa40e53785068c255b4cff0d19f347b6f40854a15fe496102ef4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
