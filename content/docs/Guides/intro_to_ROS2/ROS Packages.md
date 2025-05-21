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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFIQC4NR%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T041306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp%2B8QFspqhdQV3AkAkpOTqrSoKbxPooQ2ML%2FvozKRcHgIhAOJ%2FpSfc4Ay2eUYSW2rBvvkJga%2FmgP1jTAHsyFTo5NENKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfiunUd6WOoumkTMcq3ANI4IHwgMyV7Hgo8pMkasE0pIIsZ00JBDQ8Rrhv43Y35yadLM%2BLwTszQgopgG0KZsBViwMs7NtnsTuEY3wgEaJX1PxFm1Ggn4gMlJpjwh38oFSoQVFf7%2FXXf9qTyBpT1CWfOdcOXHG10u%2F5FjnGzwclFLoDA8sxzSi7qqB75dgwdBFfSaqy56oO9IJUl88JX0oiUeZhobV02KMjHn8bwIaPsAm7%2BS82gEgCrnMK11CmMLP%2F5lVcMbsV5kpCY809pXYeY5uVKLxc9MPg%2FVb4jFZLqQim5IcfrBvY0XtMC1q1r24J1SSaQbMibl9QI4n7RDCRPhsL%2FVwhylPF7BZTo413SiO%2FIzs3XeXIWlRSu30Ww6wDI0lbLKMTkANwkosnB%2Fn5QDfIhmLszxxb%2BBYL%2FLe1oWUWhtPQhjqeKynruJbdMVBDQQrM9H90jHEnTyZfCbIf6NxtC81QtephvMClGOIHcFg7W5a73HojiGcKGEfq2xEx%2B7E%2B0ZUQKywRiZsGSWIDOWkABV1XfsOhBf7jX6yS09pBSJ5qLqPQGxnn8fpr3cjDlAQLsKo%2BgSUOBEzljBpdy5hgp39YH3SwpRsFyi83ymowP1yAa2MM%2BZ%2FEyYbuwBeSIuvn5fkpuhjzGDCvkLXBBjqkAaMsns%2BOW%2FvE3u6Z%2F8pfN7Z07Rqa6BMSrqngGCAqauHEDfYhA0%2BvLqss%2FHwlzfyncRVC%2Bt48h0NCaLAXzzgdG2h8fuU4lam2jVEiTBUrpp%2B7LruOGgHXlT7pKUC6%2BD5i72h%2FgpluZuCIj3DXR9CD3ZAjtmwL%2BG5Bil%2BstZJnxia1OIDU9ZsUybXEraL2BK%2F%2BlDz9mSkjOc1UQNbasLiqhRDh41w7&X-Amz-Signature=b28fb0059fd87d8f285ef1563b06521411d2084a45d30590f6b8324dca152c74&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFIQC4NR%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T041306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp%2B8QFspqhdQV3AkAkpOTqrSoKbxPooQ2ML%2FvozKRcHgIhAOJ%2FpSfc4Ay2eUYSW2rBvvkJga%2FmgP1jTAHsyFTo5NENKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfiunUd6WOoumkTMcq3ANI4IHwgMyV7Hgo8pMkasE0pIIsZ00JBDQ8Rrhv43Y35yadLM%2BLwTszQgopgG0KZsBViwMs7NtnsTuEY3wgEaJX1PxFm1Ggn4gMlJpjwh38oFSoQVFf7%2FXXf9qTyBpT1CWfOdcOXHG10u%2F5FjnGzwclFLoDA8sxzSi7qqB75dgwdBFfSaqy56oO9IJUl88JX0oiUeZhobV02KMjHn8bwIaPsAm7%2BS82gEgCrnMK11CmMLP%2F5lVcMbsV5kpCY809pXYeY5uVKLxc9MPg%2FVb4jFZLqQim5IcfrBvY0XtMC1q1r24J1SSaQbMibl9QI4n7RDCRPhsL%2FVwhylPF7BZTo413SiO%2FIzs3XeXIWlRSu30Ww6wDI0lbLKMTkANwkosnB%2Fn5QDfIhmLszxxb%2BBYL%2FLe1oWUWhtPQhjqeKynruJbdMVBDQQrM9H90jHEnTyZfCbIf6NxtC81QtephvMClGOIHcFg7W5a73HojiGcKGEfq2xEx%2B7E%2B0ZUQKywRiZsGSWIDOWkABV1XfsOhBf7jX6yS09pBSJ5qLqPQGxnn8fpr3cjDlAQLsKo%2BgSUOBEzljBpdy5hgp39YH3SwpRsFyi83ymowP1yAa2MM%2BZ%2FEyYbuwBeSIuvn5fkpuhjzGDCvkLXBBjqkAaMsns%2BOW%2FvE3u6Z%2F8pfN7Z07Rqa6BMSrqngGCAqauHEDfYhA0%2BvLqss%2FHwlzfyncRVC%2Bt48h0NCaLAXzzgdG2h8fuU4lam2jVEiTBUrpp%2B7LruOGgHXlT7pKUC6%2BD5i72h%2FgpluZuCIj3DXR9CD3ZAjtmwL%2BG5Bil%2BstZJnxia1OIDU9ZsUybXEraL2BK%2F%2BlDz9mSkjOc1UQNbasLiqhRDh41w7&X-Amz-Signature=13771f444032eaf5942eb2f9236ed2f9c84222f262e4f36fe2397fcad07a6dcb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFIQC4NR%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T041306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp%2B8QFspqhdQV3AkAkpOTqrSoKbxPooQ2ML%2FvozKRcHgIhAOJ%2FpSfc4Ay2eUYSW2rBvvkJga%2FmgP1jTAHsyFTo5NENKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfiunUd6WOoumkTMcq3ANI4IHwgMyV7Hgo8pMkasE0pIIsZ00JBDQ8Rrhv43Y35yadLM%2BLwTszQgopgG0KZsBViwMs7NtnsTuEY3wgEaJX1PxFm1Ggn4gMlJpjwh38oFSoQVFf7%2FXXf9qTyBpT1CWfOdcOXHG10u%2F5FjnGzwclFLoDA8sxzSi7qqB75dgwdBFfSaqy56oO9IJUl88JX0oiUeZhobV02KMjHn8bwIaPsAm7%2BS82gEgCrnMK11CmMLP%2F5lVcMbsV5kpCY809pXYeY5uVKLxc9MPg%2FVb4jFZLqQim5IcfrBvY0XtMC1q1r24J1SSaQbMibl9QI4n7RDCRPhsL%2FVwhylPF7BZTo413SiO%2FIzs3XeXIWlRSu30Ww6wDI0lbLKMTkANwkosnB%2Fn5QDfIhmLszxxb%2BBYL%2FLe1oWUWhtPQhjqeKynruJbdMVBDQQrM9H90jHEnTyZfCbIf6NxtC81QtephvMClGOIHcFg7W5a73HojiGcKGEfq2xEx%2B7E%2B0ZUQKywRiZsGSWIDOWkABV1XfsOhBf7jX6yS09pBSJ5qLqPQGxnn8fpr3cjDlAQLsKo%2BgSUOBEzljBpdy5hgp39YH3SwpRsFyi83ymowP1yAa2MM%2BZ%2FEyYbuwBeSIuvn5fkpuhjzGDCvkLXBBjqkAaMsns%2BOW%2FvE3u6Z%2F8pfN7Z07Rqa6BMSrqngGCAqauHEDfYhA0%2BvLqss%2FHwlzfyncRVC%2Bt48h0NCaLAXzzgdG2h8fuU4lam2jVEiTBUrpp%2B7LruOGgHXlT7pKUC6%2BD5i72h%2FgpluZuCIj3DXR9CD3ZAjtmwL%2BG5Bil%2BstZJnxia1OIDU9ZsUybXEraL2BK%2F%2BlDz9mSkjOc1UQNbasLiqhRDh41w7&X-Amz-Signature=9753c9815da9034a1c72e56eaa08561e6f4804ad3a338099292b4d9d910a4bb3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFIQC4NR%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T041306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp%2B8QFspqhdQV3AkAkpOTqrSoKbxPooQ2ML%2FvozKRcHgIhAOJ%2FpSfc4Ay2eUYSW2rBvvkJga%2FmgP1jTAHsyFTo5NENKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfiunUd6WOoumkTMcq3ANI4IHwgMyV7Hgo8pMkasE0pIIsZ00JBDQ8Rrhv43Y35yadLM%2BLwTszQgopgG0KZsBViwMs7NtnsTuEY3wgEaJX1PxFm1Ggn4gMlJpjwh38oFSoQVFf7%2FXXf9qTyBpT1CWfOdcOXHG10u%2F5FjnGzwclFLoDA8sxzSi7qqB75dgwdBFfSaqy56oO9IJUl88JX0oiUeZhobV02KMjHn8bwIaPsAm7%2BS82gEgCrnMK11CmMLP%2F5lVcMbsV5kpCY809pXYeY5uVKLxc9MPg%2FVb4jFZLqQim5IcfrBvY0XtMC1q1r24J1SSaQbMibl9QI4n7RDCRPhsL%2FVwhylPF7BZTo413SiO%2FIzs3XeXIWlRSu30Ww6wDI0lbLKMTkANwkosnB%2Fn5QDfIhmLszxxb%2BBYL%2FLe1oWUWhtPQhjqeKynruJbdMVBDQQrM9H90jHEnTyZfCbIf6NxtC81QtephvMClGOIHcFg7W5a73HojiGcKGEfq2xEx%2B7E%2B0ZUQKywRiZsGSWIDOWkABV1XfsOhBf7jX6yS09pBSJ5qLqPQGxnn8fpr3cjDlAQLsKo%2BgSUOBEzljBpdy5hgp39YH3SwpRsFyi83ymowP1yAa2MM%2BZ%2FEyYbuwBeSIuvn5fkpuhjzGDCvkLXBBjqkAaMsns%2BOW%2FvE3u6Z%2F8pfN7Z07Rqa6BMSrqngGCAqauHEDfYhA0%2BvLqss%2FHwlzfyncRVC%2Bt48h0NCaLAXzzgdG2h8fuU4lam2jVEiTBUrpp%2B7LruOGgHXlT7pKUC6%2BD5i72h%2FgpluZuCIj3DXR9CD3ZAjtmwL%2BG5Bil%2BstZJnxia1OIDU9ZsUybXEraL2BK%2F%2BlDz9mSkjOc1UQNbasLiqhRDh41w7&X-Amz-Signature=122e5e4fcd2fe53c0022321f04c5eca965a0827782560e5dc20791d1fafaa92e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFIQC4NR%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T041306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp%2B8QFspqhdQV3AkAkpOTqrSoKbxPooQ2ML%2FvozKRcHgIhAOJ%2FpSfc4Ay2eUYSW2rBvvkJga%2FmgP1jTAHsyFTo5NENKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfiunUd6WOoumkTMcq3ANI4IHwgMyV7Hgo8pMkasE0pIIsZ00JBDQ8Rrhv43Y35yadLM%2BLwTszQgopgG0KZsBViwMs7NtnsTuEY3wgEaJX1PxFm1Ggn4gMlJpjwh38oFSoQVFf7%2FXXf9qTyBpT1CWfOdcOXHG10u%2F5FjnGzwclFLoDA8sxzSi7qqB75dgwdBFfSaqy56oO9IJUl88JX0oiUeZhobV02KMjHn8bwIaPsAm7%2BS82gEgCrnMK11CmMLP%2F5lVcMbsV5kpCY809pXYeY5uVKLxc9MPg%2FVb4jFZLqQim5IcfrBvY0XtMC1q1r24J1SSaQbMibl9QI4n7RDCRPhsL%2FVwhylPF7BZTo413SiO%2FIzs3XeXIWlRSu30Ww6wDI0lbLKMTkANwkosnB%2Fn5QDfIhmLszxxb%2BBYL%2FLe1oWUWhtPQhjqeKynruJbdMVBDQQrM9H90jHEnTyZfCbIf6NxtC81QtephvMClGOIHcFg7W5a73HojiGcKGEfq2xEx%2B7E%2B0ZUQKywRiZsGSWIDOWkABV1XfsOhBf7jX6yS09pBSJ5qLqPQGxnn8fpr3cjDlAQLsKo%2BgSUOBEzljBpdy5hgp39YH3SwpRsFyi83ymowP1yAa2MM%2BZ%2FEyYbuwBeSIuvn5fkpuhjzGDCvkLXBBjqkAaMsns%2BOW%2FvE3u6Z%2F8pfN7Z07Rqa6BMSrqngGCAqauHEDfYhA0%2BvLqss%2FHwlzfyncRVC%2Bt48h0NCaLAXzzgdG2h8fuU4lam2jVEiTBUrpp%2B7LruOGgHXlT7pKUC6%2BD5i72h%2FgpluZuCIj3DXR9CD3ZAjtmwL%2BG5Bil%2BstZJnxia1OIDU9ZsUybXEraL2BK%2F%2BlDz9mSkjOc1UQNbasLiqhRDh41w7&X-Amz-Signature=414d28e32199d625c252345f613cd1f740f3928a10a8b2729776bcf5ecfac9b1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFIQC4NR%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T041306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp%2B8QFspqhdQV3AkAkpOTqrSoKbxPooQ2ML%2FvozKRcHgIhAOJ%2FpSfc4Ay2eUYSW2rBvvkJga%2FmgP1jTAHsyFTo5NENKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfiunUd6WOoumkTMcq3ANI4IHwgMyV7Hgo8pMkasE0pIIsZ00JBDQ8Rrhv43Y35yadLM%2BLwTszQgopgG0KZsBViwMs7NtnsTuEY3wgEaJX1PxFm1Ggn4gMlJpjwh38oFSoQVFf7%2FXXf9qTyBpT1CWfOdcOXHG10u%2F5FjnGzwclFLoDA8sxzSi7qqB75dgwdBFfSaqy56oO9IJUl88JX0oiUeZhobV02KMjHn8bwIaPsAm7%2BS82gEgCrnMK11CmMLP%2F5lVcMbsV5kpCY809pXYeY5uVKLxc9MPg%2FVb4jFZLqQim5IcfrBvY0XtMC1q1r24J1SSaQbMibl9QI4n7RDCRPhsL%2FVwhylPF7BZTo413SiO%2FIzs3XeXIWlRSu30Ww6wDI0lbLKMTkANwkosnB%2Fn5QDfIhmLszxxb%2BBYL%2FLe1oWUWhtPQhjqeKynruJbdMVBDQQrM9H90jHEnTyZfCbIf6NxtC81QtephvMClGOIHcFg7W5a73HojiGcKGEfq2xEx%2B7E%2B0ZUQKywRiZsGSWIDOWkABV1XfsOhBf7jX6yS09pBSJ5qLqPQGxnn8fpr3cjDlAQLsKo%2BgSUOBEzljBpdy5hgp39YH3SwpRsFyi83ymowP1yAa2MM%2BZ%2FEyYbuwBeSIuvn5fkpuhjzGDCvkLXBBjqkAaMsns%2BOW%2FvE3u6Z%2F8pfN7Z07Rqa6BMSrqngGCAqauHEDfYhA0%2BvLqss%2FHwlzfyncRVC%2Bt48h0NCaLAXzzgdG2h8fuU4lam2jVEiTBUrpp%2B7LruOGgHXlT7pKUC6%2BD5i72h%2FgpluZuCIj3DXR9CD3ZAjtmwL%2BG5Bil%2BstZJnxia1OIDU9ZsUybXEraL2BK%2F%2BlDz9mSkjOc1UQNbasLiqhRDh41w7&X-Amz-Signature=36de61ec93641d900821aaf19e362c39d871176f17e64d243a745fed45be4fe6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFIQC4NR%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T041306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp%2B8QFspqhdQV3AkAkpOTqrSoKbxPooQ2ML%2FvozKRcHgIhAOJ%2FpSfc4Ay2eUYSW2rBvvkJga%2FmgP1jTAHsyFTo5NENKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfiunUd6WOoumkTMcq3ANI4IHwgMyV7Hgo8pMkasE0pIIsZ00JBDQ8Rrhv43Y35yadLM%2BLwTszQgopgG0KZsBViwMs7NtnsTuEY3wgEaJX1PxFm1Ggn4gMlJpjwh38oFSoQVFf7%2FXXf9qTyBpT1CWfOdcOXHG10u%2F5FjnGzwclFLoDA8sxzSi7qqB75dgwdBFfSaqy56oO9IJUl88JX0oiUeZhobV02KMjHn8bwIaPsAm7%2BS82gEgCrnMK11CmMLP%2F5lVcMbsV5kpCY809pXYeY5uVKLxc9MPg%2FVb4jFZLqQim5IcfrBvY0XtMC1q1r24J1SSaQbMibl9QI4n7RDCRPhsL%2FVwhylPF7BZTo413SiO%2FIzs3XeXIWlRSu30Ww6wDI0lbLKMTkANwkosnB%2Fn5QDfIhmLszxxb%2BBYL%2FLe1oWUWhtPQhjqeKynruJbdMVBDQQrM9H90jHEnTyZfCbIf6NxtC81QtephvMClGOIHcFg7W5a73HojiGcKGEfq2xEx%2B7E%2B0ZUQKywRiZsGSWIDOWkABV1XfsOhBf7jX6yS09pBSJ5qLqPQGxnn8fpr3cjDlAQLsKo%2BgSUOBEzljBpdy5hgp39YH3SwpRsFyi83ymowP1yAa2MM%2BZ%2FEyYbuwBeSIuvn5fkpuhjzGDCvkLXBBjqkAaMsns%2BOW%2FvE3u6Z%2F8pfN7Z07Rqa6BMSrqngGCAqauHEDfYhA0%2BvLqss%2FHwlzfyncRVC%2Bt48h0NCaLAXzzgdG2h8fuU4lam2jVEiTBUrpp%2B7LruOGgHXlT7pKUC6%2BD5i72h%2FgpluZuCIj3DXR9CD3ZAjtmwL%2BG5Bil%2BstZJnxia1OIDU9ZsUybXEraL2BK%2F%2BlDz9mSkjOc1UQNbasLiqhRDh41w7&X-Amz-Signature=a211e4c34e9df60a2fc6f7a227588c260f25f789f62d0c245fb6e208b32612a2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
