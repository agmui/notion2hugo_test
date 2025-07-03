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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO2PPJLJ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBR6vDcD0VnCVFzmtQlZ7zMUQ5sUvQTjtylKTkEbiWvBAiEAzDTn5%2FN4lFVngI3aiCVXBHex%2FDbunMrhEJyqVFDxrioq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDENO9M%2FdUrp26azXTircA2H4xhxRdcPaHBIGlCo%2Foy7qMNntwwgB4BiiuylQwIuw%2Butomcd6Jaed9GpwZdmlrK4HKRYeMzmWH42Ey4N2xsmhshwLoeYyXJT9JVh1Pspn%2FQ7JW9FxhHIHkeHrgpKoTEuvUmRthUZGvTNQO%2B%2FQ5%2FCIWodT4t%2FCFxCDLPAfR6XaIackd5H1JRXWT%2Bb%2FbP4i5ZqeXO1hgKrG5Av%2FpfgM%2B1kxQrunV0fp7Wgjrjv%2FZhOxUCu28%2FOD%2BN9qz%2FTlQRuqbJccQiwwIR87F8QtW%2BvX0exSrsDXSinz3GsGAD16v9%2BWp%2FDWIgjJdKGarMkUiEUHNQrBGckg%2FoU8N01mZYWMLXkkVN8JRNJ4HQvorzWA7hnH%2FO%2FK4myMRYHQspOzN%2FcA7wKCDgL41lnjGhP4ti156gbwNxlXGMvvimfnSuLFDx9%2BnVvSXcmt0Xntjrw1J0yip%2BEF4csH6InbFCxbOscb19IgTlK5Pl%2B2ejfGKtl6RWQZktSzv%2BrFm0NQ4UkTtpYUd3ojyO%2BKPY6uUj1NrIoi%2BavxQAr9qwiICVFZ6kHi3sYe9GMqihpKLdw%2BUrSjJtWRZYMIYPlePRZd4ttfWdTB7%2FogFH%2F3NVQSpmefwsEzCFIZnsPH6GocsIUlKgRTMI%2B3mcMGOqUB8J2Hcevg%2F0441rs82ktS%2FA%2FpDkRVdSNSW%2FppVZe2PNGT0CdqmcG4UYMm2%2BlWiTegAIxmVjpqDsxXaE0Ugzvi76BHpXqTAmY13lVn3RNISLdDdr%2FRM9UuTRhZQqwZ61NUhhWW36S%2FnxirkMRF3OKPGAx%2FxQbrC4XE%2F3LLJ%2FxJakKhAwC8p0mUc99f12x2kYbeza2l0RG%2Fe%2FdB5btjjdHlG%2BzpJ5tM&X-Amz-Signature=0ef4a6a0e145c9174e21172bcedf86db287e2822c07e34740bafb2ea9af651c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO2PPJLJ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBR6vDcD0VnCVFzmtQlZ7zMUQ5sUvQTjtylKTkEbiWvBAiEAzDTn5%2FN4lFVngI3aiCVXBHex%2FDbunMrhEJyqVFDxrioq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDENO9M%2FdUrp26azXTircA2H4xhxRdcPaHBIGlCo%2Foy7qMNntwwgB4BiiuylQwIuw%2Butomcd6Jaed9GpwZdmlrK4HKRYeMzmWH42Ey4N2xsmhshwLoeYyXJT9JVh1Pspn%2FQ7JW9FxhHIHkeHrgpKoTEuvUmRthUZGvTNQO%2B%2FQ5%2FCIWodT4t%2FCFxCDLPAfR6XaIackd5H1JRXWT%2Bb%2FbP4i5ZqeXO1hgKrG5Av%2FpfgM%2B1kxQrunV0fp7Wgjrjv%2FZhOxUCu28%2FOD%2BN9qz%2FTlQRuqbJccQiwwIR87F8QtW%2BvX0exSrsDXSinz3GsGAD16v9%2BWp%2FDWIgjJdKGarMkUiEUHNQrBGckg%2FoU8N01mZYWMLXkkVN8JRNJ4HQvorzWA7hnH%2FO%2FK4myMRYHQspOzN%2FcA7wKCDgL41lnjGhP4ti156gbwNxlXGMvvimfnSuLFDx9%2BnVvSXcmt0Xntjrw1J0yip%2BEF4csH6InbFCxbOscb19IgTlK5Pl%2B2ejfGKtl6RWQZktSzv%2BrFm0NQ4UkTtpYUd3ojyO%2BKPY6uUj1NrIoi%2BavxQAr9qwiICVFZ6kHi3sYe9GMqihpKLdw%2BUrSjJtWRZYMIYPlePRZd4ttfWdTB7%2FogFH%2F3NVQSpmefwsEzCFIZnsPH6GocsIUlKgRTMI%2B3mcMGOqUB8J2Hcevg%2F0441rs82ktS%2FA%2FpDkRVdSNSW%2FppVZe2PNGT0CdqmcG4UYMm2%2BlWiTegAIxmVjpqDsxXaE0Ugzvi76BHpXqTAmY13lVn3RNISLdDdr%2FRM9UuTRhZQqwZ61NUhhWW36S%2FnxirkMRF3OKPGAx%2FxQbrC4XE%2F3LLJ%2FxJakKhAwC8p0mUc99f12x2kYbeza2l0RG%2Fe%2FdB5btjjdHlG%2BzpJ5tM&X-Amz-Signature=4a3930fcfe3160da348f9f3f8c61e251a1abbf2928e8e2e2cd6d81aa44daf6bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO2PPJLJ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBR6vDcD0VnCVFzmtQlZ7zMUQ5sUvQTjtylKTkEbiWvBAiEAzDTn5%2FN4lFVngI3aiCVXBHex%2FDbunMrhEJyqVFDxrioq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDENO9M%2FdUrp26azXTircA2H4xhxRdcPaHBIGlCo%2Foy7qMNntwwgB4BiiuylQwIuw%2Butomcd6Jaed9GpwZdmlrK4HKRYeMzmWH42Ey4N2xsmhshwLoeYyXJT9JVh1Pspn%2FQ7JW9FxhHIHkeHrgpKoTEuvUmRthUZGvTNQO%2B%2FQ5%2FCIWodT4t%2FCFxCDLPAfR6XaIackd5H1JRXWT%2Bb%2FbP4i5ZqeXO1hgKrG5Av%2FpfgM%2B1kxQrunV0fp7Wgjrjv%2FZhOxUCu28%2FOD%2BN9qz%2FTlQRuqbJccQiwwIR87F8QtW%2BvX0exSrsDXSinz3GsGAD16v9%2BWp%2FDWIgjJdKGarMkUiEUHNQrBGckg%2FoU8N01mZYWMLXkkVN8JRNJ4HQvorzWA7hnH%2FO%2FK4myMRYHQspOzN%2FcA7wKCDgL41lnjGhP4ti156gbwNxlXGMvvimfnSuLFDx9%2BnVvSXcmt0Xntjrw1J0yip%2BEF4csH6InbFCxbOscb19IgTlK5Pl%2B2ejfGKtl6RWQZktSzv%2BrFm0NQ4UkTtpYUd3ojyO%2BKPY6uUj1NrIoi%2BavxQAr9qwiICVFZ6kHi3sYe9GMqihpKLdw%2BUrSjJtWRZYMIYPlePRZd4ttfWdTB7%2FogFH%2F3NVQSpmefwsEzCFIZnsPH6GocsIUlKgRTMI%2B3mcMGOqUB8J2Hcevg%2F0441rs82ktS%2FA%2FpDkRVdSNSW%2FppVZe2PNGT0CdqmcG4UYMm2%2BlWiTegAIxmVjpqDsxXaE0Ugzvi76BHpXqTAmY13lVn3RNISLdDdr%2FRM9UuTRhZQqwZ61NUhhWW36S%2FnxirkMRF3OKPGAx%2FxQbrC4XE%2F3LLJ%2FxJakKhAwC8p0mUc99f12x2kYbeza2l0RG%2Fe%2FdB5btjjdHlG%2BzpJ5tM&X-Amz-Signature=928e622d6a580afb0e8237aae3facb2932a5f02847e6d5cea8f014f39ba9202c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO2PPJLJ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBR6vDcD0VnCVFzmtQlZ7zMUQ5sUvQTjtylKTkEbiWvBAiEAzDTn5%2FN4lFVngI3aiCVXBHex%2FDbunMrhEJyqVFDxrioq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDENO9M%2FdUrp26azXTircA2H4xhxRdcPaHBIGlCo%2Foy7qMNntwwgB4BiiuylQwIuw%2Butomcd6Jaed9GpwZdmlrK4HKRYeMzmWH42Ey4N2xsmhshwLoeYyXJT9JVh1Pspn%2FQ7JW9FxhHIHkeHrgpKoTEuvUmRthUZGvTNQO%2B%2FQ5%2FCIWodT4t%2FCFxCDLPAfR6XaIackd5H1JRXWT%2Bb%2FbP4i5ZqeXO1hgKrG5Av%2FpfgM%2B1kxQrunV0fp7Wgjrjv%2FZhOxUCu28%2FOD%2BN9qz%2FTlQRuqbJccQiwwIR87F8QtW%2BvX0exSrsDXSinz3GsGAD16v9%2BWp%2FDWIgjJdKGarMkUiEUHNQrBGckg%2FoU8N01mZYWMLXkkVN8JRNJ4HQvorzWA7hnH%2FO%2FK4myMRYHQspOzN%2FcA7wKCDgL41lnjGhP4ti156gbwNxlXGMvvimfnSuLFDx9%2BnVvSXcmt0Xntjrw1J0yip%2BEF4csH6InbFCxbOscb19IgTlK5Pl%2B2ejfGKtl6RWQZktSzv%2BrFm0NQ4UkTtpYUd3ojyO%2BKPY6uUj1NrIoi%2BavxQAr9qwiICVFZ6kHi3sYe9GMqihpKLdw%2BUrSjJtWRZYMIYPlePRZd4ttfWdTB7%2FogFH%2F3NVQSpmefwsEzCFIZnsPH6GocsIUlKgRTMI%2B3mcMGOqUB8J2Hcevg%2F0441rs82ktS%2FA%2FpDkRVdSNSW%2FppVZe2PNGT0CdqmcG4UYMm2%2BlWiTegAIxmVjpqDsxXaE0Ugzvi76BHpXqTAmY13lVn3RNISLdDdr%2FRM9UuTRhZQqwZ61NUhhWW36S%2FnxirkMRF3OKPGAx%2FxQbrC4XE%2F3LLJ%2FxJakKhAwC8p0mUc99f12x2kYbeza2l0RG%2Fe%2FdB5btjjdHlG%2BzpJ5tM&X-Amz-Signature=65b782e37c5d435ce82c54768587c6f46465971b3a78df0577d21584c89a74fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO2PPJLJ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBR6vDcD0VnCVFzmtQlZ7zMUQ5sUvQTjtylKTkEbiWvBAiEAzDTn5%2FN4lFVngI3aiCVXBHex%2FDbunMrhEJyqVFDxrioq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDENO9M%2FdUrp26azXTircA2H4xhxRdcPaHBIGlCo%2Foy7qMNntwwgB4BiiuylQwIuw%2Butomcd6Jaed9GpwZdmlrK4HKRYeMzmWH42Ey4N2xsmhshwLoeYyXJT9JVh1Pspn%2FQ7JW9FxhHIHkeHrgpKoTEuvUmRthUZGvTNQO%2B%2FQ5%2FCIWodT4t%2FCFxCDLPAfR6XaIackd5H1JRXWT%2Bb%2FbP4i5ZqeXO1hgKrG5Av%2FpfgM%2B1kxQrunV0fp7Wgjrjv%2FZhOxUCu28%2FOD%2BN9qz%2FTlQRuqbJccQiwwIR87F8QtW%2BvX0exSrsDXSinz3GsGAD16v9%2BWp%2FDWIgjJdKGarMkUiEUHNQrBGckg%2FoU8N01mZYWMLXkkVN8JRNJ4HQvorzWA7hnH%2FO%2FK4myMRYHQspOzN%2FcA7wKCDgL41lnjGhP4ti156gbwNxlXGMvvimfnSuLFDx9%2BnVvSXcmt0Xntjrw1J0yip%2BEF4csH6InbFCxbOscb19IgTlK5Pl%2B2ejfGKtl6RWQZktSzv%2BrFm0NQ4UkTtpYUd3ojyO%2BKPY6uUj1NrIoi%2BavxQAr9qwiICVFZ6kHi3sYe9GMqihpKLdw%2BUrSjJtWRZYMIYPlePRZd4ttfWdTB7%2FogFH%2F3NVQSpmefwsEzCFIZnsPH6GocsIUlKgRTMI%2B3mcMGOqUB8J2Hcevg%2F0441rs82ktS%2FA%2FpDkRVdSNSW%2FppVZe2PNGT0CdqmcG4UYMm2%2BlWiTegAIxmVjpqDsxXaE0Ugzvi76BHpXqTAmY13lVn3RNISLdDdr%2FRM9UuTRhZQqwZ61NUhhWW36S%2FnxirkMRF3OKPGAx%2FxQbrC4XE%2F3LLJ%2FxJakKhAwC8p0mUc99f12x2kYbeza2l0RG%2Fe%2FdB5btjjdHlG%2BzpJ5tM&X-Amz-Signature=2b016a4dc7b52c2056f8d8d97caff30a43106421782c5d9a3845fb0eae2d551d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO2PPJLJ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBR6vDcD0VnCVFzmtQlZ7zMUQ5sUvQTjtylKTkEbiWvBAiEAzDTn5%2FN4lFVngI3aiCVXBHex%2FDbunMrhEJyqVFDxrioq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDENO9M%2FdUrp26azXTircA2H4xhxRdcPaHBIGlCo%2Foy7qMNntwwgB4BiiuylQwIuw%2Butomcd6Jaed9GpwZdmlrK4HKRYeMzmWH42Ey4N2xsmhshwLoeYyXJT9JVh1Pspn%2FQ7JW9FxhHIHkeHrgpKoTEuvUmRthUZGvTNQO%2B%2FQ5%2FCIWodT4t%2FCFxCDLPAfR6XaIackd5H1JRXWT%2Bb%2FbP4i5ZqeXO1hgKrG5Av%2FpfgM%2B1kxQrunV0fp7Wgjrjv%2FZhOxUCu28%2FOD%2BN9qz%2FTlQRuqbJccQiwwIR87F8QtW%2BvX0exSrsDXSinz3GsGAD16v9%2BWp%2FDWIgjJdKGarMkUiEUHNQrBGckg%2FoU8N01mZYWMLXkkVN8JRNJ4HQvorzWA7hnH%2FO%2FK4myMRYHQspOzN%2FcA7wKCDgL41lnjGhP4ti156gbwNxlXGMvvimfnSuLFDx9%2BnVvSXcmt0Xntjrw1J0yip%2BEF4csH6InbFCxbOscb19IgTlK5Pl%2B2ejfGKtl6RWQZktSzv%2BrFm0NQ4UkTtpYUd3ojyO%2BKPY6uUj1NrIoi%2BavxQAr9qwiICVFZ6kHi3sYe9GMqihpKLdw%2BUrSjJtWRZYMIYPlePRZd4ttfWdTB7%2FogFH%2F3NVQSpmefwsEzCFIZnsPH6GocsIUlKgRTMI%2B3mcMGOqUB8J2Hcevg%2F0441rs82ktS%2FA%2FpDkRVdSNSW%2FppVZe2PNGT0CdqmcG4UYMm2%2BlWiTegAIxmVjpqDsxXaE0Ugzvi76BHpXqTAmY13lVn3RNISLdDdr%2FRM9UuTRhZQqwZ61NUhhWW36S%2FnxirkMRF3OKPGAx%2FxQbrC4XE%2F3LLJ%2FxJakKhAwC8p0mUc99f12x2kYbeza2l0RG%2Fe%2FdB5btjjdHlG%2BzpJ5tM&X-Amz-Signature=94103310d13b13ea679e5931d089953151cc419be92a44ae027c96713d1d5f5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO2PPJLJ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBR6vDcD0VnCVFzmtQlZ7zMUQ5sUvQTjtylKTkEbiWvBAiEAzDTn5%2FN4lFVngI3aiCVXBHex%2FDbunMrhEJyqVFDxrioq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDENO9M%2FdUrp26azXTircA2H4xhxRdcPaHBIGlCo%2Foy7qMNntwwgB4BiiuylQwIuw%2Butomcd6Jaed9GpwZdmlrK4HKRYeMzmWH42Ey4N2xsmhshwLoeYyXJT9JVh1Pspn%2FQ7JW9FxhHIHkeHrgpKoTEuvUmRthUZGvTNQO%2B%2FQ5%2FCIWodT4t%2FCFxCDLPAfR6XaIackd5H1JRXWT%2Bb%2FbP4i5ZqeXO1hgKrG5Av%2FpfgM%2B1kxQrunV0fp7Wgjrjv%2FZhOxUCu28%2FOD%2BN9qz%2FTlQRuqbJccQiwwIR87F8QtW%2BvX0exSrsDXSinz3GsGAD16v9%2BWp%2FDWIgjJdKGarMkUiEUHNQrBGckg%2FoU8N01mZYWMLXkkVN8JRNJ4HQvorzWA7hnH%2FO%2FK4myMRYHQspOzN%2FcA7wKCDgL41lnjGhP4ti156gbwNxlXGMvvimfnSuLFDx9%2BnVvSXcmt0Xntjrw1J0yip%2BEF4csH6InbFCxbOscb19IgTlK5Pl%2B2ejfGKtl6RWQZktSzv%2BrFm0NQ4UkTtpYUd3ojyO%2BKPY6uUj1NrIoi%2BavxQAr9qwiICVFZ6kHi3sYe9GMqihpKLdw%2BUrSjJtWRZYMIYPlePRZd4ttfWdTB7%2FogFH%2F3NVQSpmefwsEzCFIZnsPH6GocsIUlKgRTMI%2B3mcMGOqUB8J2Hcevg%2F0441rs82ktS%2FA%2FpDkRVdSNSW%2FppVZe2PNGT0CdqmcG4UYMm2%2BlWiTegAIxmVjpqDsxXaE0Ugzvi76BHpXqTAmY13lVn3RNISLdDdr%2FRM9UuTRhZQqwZ61NUhhWW36S%2FnxirkMRF3OKPGAx%2FxQbrC4XE%2F3LLJ%2FxJakKhAwC8p0mUc99f12x2kYbeza2l0RG%2Fe%2FdB5btjjdHlG%2BzpJ5tM&X-Amz-Signature=5399de6856e8d9ac6c07b96f08be314bc9f94b876eef7d79cba6c6b3f8ed3db3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
