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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZPDECKL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T160812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECpmXKBusrW4U4%2FFZLAxPToY1vgyz%2BB1j8XjmHoTruzAiEAo6Mas39uRL5emElT8Bc4iYbcJBdMFNsd6oeczQqvGU4qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0RyCHPfJt0VrTXuCrcA92HFPtOgIdyIC1i%2FOTkTa11H86%2FBgpkMDuCl8iTY4o%2FZIdLCJmr5prSUDejgZjGIFOeTHU0i52aNqkUyZ%2FCoeqd7pf3af%2FC5sEFWuhtggG96PtdjHgXLcuqZll%2BARyOMueap4EbnIuzgCBW32HJJcSf2%2BTEnK4x%2BnBcmbW0iNiZShJMOFK0wJrfIIrcTgTQi2On5GuRR4Wlf5Ayuk5O1XwaVPkfFzTj7BKlOmWI2bpfTB80pIqvh8FrrMpSv3TgVAulZt1xYd0R8jSkt69ekaQqvOlMHErztmY598Yxaj5DsfrantTm7gt4jMRigstCNSb1OYBdUQPZnR7j55yH0rUm8eP84Qs2SWHRvIjti1tJ1YX9su3NLUH4QpdTo2ereG%2B%2BQuUATKW5h6uOepq0o8ZrpsZrnRNoNr37QsDPdle9qD5lGNTeeZxp0gM7gNghlEZ%2B7pA8Rgc4CFmSMT4n9zOaXMztvzvlA9uKtF0IUMv8LBvwT1l5JiW0v77xeF5uyddhCGJEJvy2b%2BvQciY737FTEph4OTaJxzaQ2JU1lYi6wi8o9fY1XCYRrKARv1HI6zHN3YqIBH%2FwUPGUCkarx02%2BEitT4ZxPCVbIlGO38tYZnEWFnREKG5VnLA8cMJb1kL4GOqUBXn8zD%2BmgoTQ5M%2BroMiYjbpb8FbGMU%2Fzh1Vn4zzI2ucSJQWSOE2kSpfyJ2U2biPGJpX%2BTHMPoI4Kiu7guPXRA25twklV6YEwEjARet7JAUH1FQrdRmiFQX2O12kWml1x0cjSQlMMPEsqP7SwEbD804hXtXYGOWXejhIn%2FPrvsXezz7PfmbEzTnopETJsG2VUmim8KdsMyf2pIK84TbLrhgS3Ny%2BM%2B&X-Amz-Signature=d3ed44e716e09f2c8311fee7a3af1cfda21933adfaed6740dec74533fcf9748a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZPDECKL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T160812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECpmXKBusrW4U4%2FFZLAxPToY1vgyz%2BB1j8XjmHoTruzAiEAo6Mas39uRL5emElT8Bc4iYbcJBdMFNsd6oeczQqvGU4qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0RyCHPfJt0VrTXuCrcA92HFPtOgIdyIC1i%2FOTkTa11H86%2FBgpkMDuCl8iTY4o%2FZIdLCJmr5prSUDejgZjGIFOeTHU0i52aNqkUyZ%2FCoeqd7pf3af%2FC5sEFWuhtggG96PtdjHgXLcuqZll%2BARyOMueap4EbnIuzgCBW32HJJcSf2%2BTEnK4x%2BnBcmbW0iNiZShJMOFK0wJrfIIrcTgTQi2On5GuRR4Wlf5Ayuk5O1XwaVPkfFzTj7BKlOmWI2bpfTB80pIqvh8FrrMpSv3TgVAulZt1xYd0R8jSkt69ekaQqvOlMHErztmY598Yxaj5DsfrantTm7gt4jMRigstCNSb1OYBdUQPZnR7j55yH0rUm8eP84Qs2SWHRvIjti1tJ1YX9su3NLUH4QpdTo2ereG%2B%2BQuUATKW5h6uOepq0o8ZrpsZrnRNoNr37QsDPdle9qD5lGNTeeZxp0gM7gNghlEZ%2B7pA8Rgc4CFmSMT4n9zOaXMztvzvlA9uKtF0IUMv8LBvwT1l5JiW0v77xeF5uyddhCGJEJvy2b%2BvQciY737FTEph4OTaJxzaQ2JU1lYi6wi8o9fY1XCYRrKARv1HI6zHN3YqIBH%2FwUPGUCkarx02%2BEitT4ZxPCVbIlGO38tYZnEWFnREKG5VnLA8cMJb1kL4GOqUBXn8zD%2BmgoTQ5M%2BroMiYjbpb8FbGMU%2Fzh1Vn4zzI2ucSJQWSOE2kSpfyJ2U2biPGJpX%2BTHMPoI4Kiu7guPXRA25twklV6YEwEjARet7JAUH1FQrdRmiFQX2O12kWml1x0cjSQlMMPEsqP7SwEbD804hXtXYGOWXejhIn%2FPrvsXezz7PfmbEzTnopETJsG2VUmim8KdsMyf2pIK84TbLrhgS3Ny%2BM%2B&X-Amz-Signature=10e836ff2b6320795f25a5efacd5dea61ef6f67535932fcd4996df93eac1dc52&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZPDECKL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T160812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECpmXKBusrW4U4%2FFZLAxPToY1vgyz%2BB1j8XjmHoTruzAiEAo6Mas39uRL5emElT8Bc4iYbcJBdMFNsd6oeczQqvGU4qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0RyCHPfJt0VrTXuCrcA92HFPtOgIdyIC1i%2FOTkTa11H86%2FBgpkMDuCl8iTY4o%2FZIdLCJmr5prSUDejgZjGIFOeTHU0i52aNqkUyZ%2FCoeqd7pf3af%2FC5sEFWuhtggG96PtdjHgXLcuqZll%2BARyOMueap4EbnIuzgCBW32HJJcSf2%2BTEnK4x%2BnBcmbW0iNiZShJMOFK0wJrfIIrcTgTQi2On5GuRR4Wlf5Ayuk5O1XwaVPkfFzTj7BKlOmWI2bpfTB80pIqvh8FrrMpSv3TgVAulZt1xYd0R8jSkt69ekaQqvOlMHErztmY598Yxaj5DsfrantTm7gt4jMRigstCNSb1OYBdUQPZnR7j55yH0rUm8eP84Qs2SWHRvIjti1tJ1YX9su3NLUH4QpdTo2ereG%2B%2BQuUATKW5h6uOepq0o8ZrpsZrnRNoNr37QsDPdle9qD5lGNTeeZxp0gM7gNghlEZ%2B7pA8Rgc4CFmSMT4n9zOaXMztvzvlA9uKtF0IUMv8LBvwT1l5JiW0v77xeF5uyddhCGJEJvy2b%2BvQciY737FTEph4OTaJxzaQ2JU1lYi6wi8o9fY1XCYRrKARv1HI6zHN3YqIBH%2FwUPGUCkarx02%2BEitT4ZxPCVbIlGO38tYZnEWFnREKG5VnLA8cMJb1kL4GOqUBXn8zD%2BmgoTQ5M%2BroMiYjbpb8FbGMU%2Fzh1Vn4zzI2ucSJQWSOE2kSpfyJ2U2biPGJpX%2BTHMPoI4Kiu7guPXRA25twklV6YEwEjARet7JAUH1FQrdRmiFQX2O12kWml1x0cjSQlMMPEsqP7SwEbD804hXtXYGOWXejhIn%2FPrvsXezz7PfmbEzTnopETJsG2VUmim8KdsMyf2pIK84TbLrhgS3Ny%2BM%2B&X-Amz-Signature=072cc8ebc35cf24d4964a4f6e534e65c5c02107df01f04730ad25def342f087a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZPDECKL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T160812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECpmXKBusrW4U4%2FFZLAxPToY1vgyz%2BB1j8XjmHoTruzAiEAo6Mas39uRL5emElT8Bc4iYbcJBdMFNsd6oeczQqvGU4qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0RyCHPfJt0VrTXuCrcA92HFPtOgIdyIC1i%2FOTkTa11H86%2FBgpkMDuCl8iTY4o%2FZIdLCJmr5prSUDejgZjGIFOeTHU0i52aNqkUyZ%2FCoeqd7pf3af%2FC5sEFWuhtggG96PtdjHgXLcuqZll%2BARyOMueap4EbnIuzgCBW32HJJcSf2%2BTEnK4x%2BnBcmbW0iNiZShJMOFK0wJrfIIrcTgTQi2On5GuRR4Wlf5Ayuk5O1XwaVPkfFzTj7BKlOmWI2bpfTB80pIqvh8FrrMpSv3TgVAulZt1xYd0R8jSkt69ekaQqvOlMHErztmY598Yxaj5DsfrantTm7gt4jMRigstCNSb1OYBdUQPZnR7j55yH0rUm8eP84Qs2SWHRvIjti1tJ1YX9su3NLUH4QpdTo2ereG%2B%2BQuUATKW5h6uOepq0o8ZrpsZrnRNoNr37QsDPdle9qD5lGNTeeZxp0gM7gNghlEZ%2B7pA8Rgc4CFmSMT4n9zOaXMztvzvlA9uKtF0IUMv8LBvwT1l5JiW0v77xeF5uyddhCGJEJvy2b%2BvQciY737FTEph4OTaJxzaQ2JU1lYi6wi8o9fY1XCYRrKARv1HI6zHN3YqIBH%2FwUPGUCkarx02%2BEitT4ZxPCVbIlGO38tYZnEWFnREKG5VnLA8cMJb1kL4GOqUBXn8zD%2BmgoTQ5M%2BroMiYjbpb8FbGMU%2Fzh1Vn4zzI2ucSJQWSOE2kSpfyJ2U2biPGJpX%2BTHMPoI4Kiu7guPXRA25twklV6YEwEjARet7JAUH1FQrdRmiFQX2O12kWml1x0cjSQlMMPEsqP7SwEbD804hXtXYGOWXejhIn%2FPrvsXezz7PfmbEzTnopETJsG2VUmim8KdsMyf2pIK84TbLrhgS3Ny%2BM%2B&X-Amz-Signature=a76b18809c97e69d758dd7d00af225e43459d39101263979b48a073777927213&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZPDECKL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T160812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECpmXKBusrW4U4%2FFZLAxPToY1vgyz%2BB1j8XjmHoTruzAiEAo6Mas39uRL5emElT8Bc4iYbcJBdMFNsd6oeczQqvGU4qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0RyCHPfJt0VrTXuCrcA92HFPtOgIdyIC1i%2FOTkTa11H86%2FBgpkMDuCl8iTY4o%2FZIdLCJmr5prSUDejgZjGIFOeTHU0i52aNqkUyZ%2FCoeqd7pf3af%2FC5sEFWuhtggG96PtdjHgXLcuqZll%2BARyOMueap4EbnIuzgCBW32HJJcSf2%2BTEnK4x%2BnBcmbW0iNiZShJMOFK0wJrfIIrcTgTQi2On5GuRR4Wlf5Ayuk5O1XwaVPkfFzTj7BKlOmWI2bpfTB80pIqvh8FrrMpSv3TgVAulZt1xYd0R8jSkt69ekaQqvOlMHErztmY598Yxaj5DsfrantTm7gt4jMRigstCNSb1OYBdUQPZnR7j55yH0rUm8eP84Qs2SWHRvIjti1tJ1YX9su3NLUH4QpdTo2ereG%2B%2BQuUATKW5h6uOepq0o8ZrpsZrnRNoNr37QsDPdle9qD5lGNTeeZxp0gM7gNghlEZ%2B7pA8Rgc4CFmSMT4n9zOaXMztvzvlA9uKtF0IUMv8LBvwT1l5JiW0v77xeF5uyddhCGJEJvy2b%2BvQciY737FTEph4OTaJxzaQ2JU1lYi6wi8o9fY1XCYRrKARv1HI6zHN3YqIBH%2FwUPGUCkarx02%2BEitT4ZxPCVbIlGO38tYZnEWFnREKG5VnLA8cMJb1kL4GOqUBXn8zD%2BmgoTQ5M%2BroMiYjbpb8FbGMU%2Fzh1Vn4zzI2ucSJQWSOE2kSpfyJ2U2biPGJpX%2BTHMPoI4Kiu7guPXRA25twklV6YEwEjARet7JAUH1FQrdRmiFQX2O12kWml1x0cjSQlMMPEsqP7SwEbD804hXtXYGOWXejhIn%2FPrvsXezz7PfmbEzTnopETJsG2VUmim8KdsMyf2pIK84TbLrhgS3Ny%2BM%2B&X-Amz-Signature=2806d7d86b381b1578bbceba1e7bdef83ffcc7fe43a89ef5f31ee38c7451ba2f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZPDECKL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T160812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECpmXKBusrW4U4%2FFZLAxPToY1vgyz%2BB1j8XjmHoTruzAiEAo6Mas39uRL5emElT8Bc4iYbcJBdMFNsd6oeczQqvGU4qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0RyCHPfJt0VrTXuCrcA92HFPtOgIdyIC1i%2FOTkTa11H86%2FBgpkMDuCl8iTY4o%2FZIdLCJmr5prSUDejgZjGIFOeTHU0i52aNqkUyZ%2FCoeqd7pf3af%2FC5sEFWuhtggG96PtdjHgXLcuqZll%2BARyOMueap4EbnIuzgCBW32HJJcSf2%2BTEnK4x%2BnBcmbW0iNiZShJMOFK0wJrfIIrcTgTQi2On5GuRR4Wlf5Ayuk5O1XwaVPkfFzTj7BKlOmWI2bpfTB80pIqvh8FrrMpSv3TgVAulZt1xYd0R8jSkt69ekaQqvOlMHErztmY598Yxaj5DsfrantTm7gt4jMRigstCNSb1OYBdUQPZnR7j55yH0rUm8eP84Qs2SWHRvIjti1tJ1YX9su3NLUH4QpdTo2ereG%2B%2BQuUATKW5h6uOepq0o8ZrpsZrnRNoNr37QsDPdle9qD5lGNTeeZxp0gM7gNghlEZ%2B7pA8Rgc4CFmSMT4n9zOaXMztvzvlA9uKtF0IUMv8LBvwT1l5JiW0v77xeF5uyddhCGJEJvy2b%2BvQciY737FTEph4OTaJxzaQ2JU1lYi6wi8o9fY1XCYRrKARv1HI6zHN3YqIBH%2FwUPGUCkarx02%2BEitT4ZxPCVbIlGO38tYZnEWFnREKG5VnLA8cMJb1kL4GOqUBXn8zD%2BmgoTQ5M%2BroMiYjbpb8FbGMU%2Fzh1Vn4zzI2ucSJQWSOE2kSpfyJ2U2biPGJpX%2BTHMPoI4Kiu7guPXRA25twklV6YEwEjARet7JAUH1FQrdRmiFQX2O12kWml1x0cjSQlMMPEsqP7SwEbD804hXtXYGOWXejhIn%2FPrvsXezz7PfmbEzTnopETJsG2VUmim8KdsMyf2pIK84TbLrhgS3Ny%2BM%2B&X-Amz-Signature=c0ac978c1c14f3574e1095475a0675bacd55d1c88fe87280b3d4663dab545b0c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZPDECKL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T160812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECpmXKBusrW4U4%2FFZLAxPToY1vgyz%2BB1j8XjmHoTruzAiEAo6Mas39uRL5emElT8Bc4iYbcJBdMFNsd6oeczQqvGU4qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0RyCHPfJt0VrTXuCrcA92HFPtOgIdyIC1i%2FOTkTa11H86%2FBgpkMDuCl8iTY4o%2FZIdLCJmr5prSUDejgZjGIFOeTHU0i52aNqkUyZ%2FCoeqd7pf3af%2FC5sEFWuhtggG96PtdjHgXLcuqZll%2BARyOMueap4EbnIuzgCBW32HJJcSf2%2BTEnK4x%2BnBcmbW0iNiZShJMOFK0wJrfIIrcTgTQi2On5GuRR4Wlf5Ayuk5O1XwaVPkfFzTj7BKlOmWI2bpfTB80pIqvh8FrrMpSv3TgVAulZt1xYd0R8jSkt69ekaQqvOlMHErztmY598Yxaj5DsfrantTm7gt4jMRigstCNSb1OYBdUQPZnR7j55yH0rUm8eP84Qs2SWHRvIjti1tJ1YX9su3NLUH4QpdTo2ereG%2B%2BQuUATKW5h6uOepq0o8ZrpsZrnRNoNr37QsDPdle9qD5lGNTeeZxp0gM7gNghlEZ%2B7pA8Rgc4CFmSMT4n9zOaXMztvzvlA9uKtF0IUMv8LBvwT1l5JiW0v77xeF5uyddhCGJEJvy2b%2BvQciY737FTEph4OTaJxzaQ2JU1lYi6wi8o9fY1XCYRrKARv1HI6zHN3YqIBH%2FwUPGUCkarx02%2BEitT4ZxPCVbIlGO38tYZnEWFnREKG5VnLA8cMJb1kL4GOqUBXn8zD%2BmgoTQ5M%2BroMiYjbpb8FbGMU%2Fzh1Vn4zzI2ucSJQWSOE2kSpfyJ2U2biPGJpX%2BTHMPoI4Kiu7guPXRA25twklV6YEwEjARet7JAUH1FQrdRmiFQX2O12kWml1x0cjSQlMMPEsqP7SwEbD804hXtXYGOWXejhIn%2FPrvsXezz7PfmbEzTnopETJsG2VUmim8KdsMyf2pIK84TbLrhgS3Ny%2BM%2B&X-Amz-Signature=725fed964ab55ddb121ab939bc3d7a0e9c01e794e0ab32ac27ebd2d9c9af46d3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
