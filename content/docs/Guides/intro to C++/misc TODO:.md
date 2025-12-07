---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}


### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YPLGGK5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCltiMZczpfpWm3RDbERu4Vz1EWNbauxaaOlHcwGS5SwQIgOKgqBtMX2ykt3YmuLihm6elVRYadSUoj42ZktXGdoHQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPcjzkXU1%2BXqpQ3exCrcAwdjTbeLi6mUEH8vYkkYG%2BOhKm1mXIIGiZNxh0JDq7yO%2FhY%2B68Wlg7GnpZ1GBKEevus92u82Rum%2F87jz6WFia4unUeFB3eYszaqEF%2BqNiveLCd6ixxtqtWKv%2F9SUfvw1fYcOY92PJzvdEJ5Uh2MEyNTigY6AR3JAcKbyGDXZEFgyws6zqT7G9WlhOUzn38zACY1HibxTXcO6EkJjzJwA%2B%2FSaLk8wvJeqKeExhq%2Fgy2Go6865e2ElfWjSpu14mG5ieMpUIDRhrppULVZ64zwvx2LAyoczUEyryQ%2BLTMaS9QzmmM9XxLcIFeZT%2FaRPsXr2eHcOcG8m8S2Ziobz6Cbtyh4EE4GBbPFT8ehKQ1RWDTf3XnJgG7MyUYP34DzE37Fi5R7ql9eO8%2F%2B8ntwee0lQazRN7g0QliVbPBaTf%2BjKeIMCBn%2BVy0IWuh01kl8n1830QM7Cf3loF%2FAVeR9FhBv3Y3xtdxhK%2FjvU8ZvZv%2FxY%2FsrOnCYZrS3oBOaQFtuLegi0LPBsC%2BpmhU9BSGP6d0cMenG0Zw8w8atimUIqPS21l%2Frnoz2t07wKvcixcw9c7do1aI03fmEpOOGen89wLV3dz6nsy5R9XG%2FxhE2Wqz5Qt2TQt9h7HTaL8EaeECsVMIv%2B0skGOqUBeC1R5BxNWuqMkeNDyHXvZ3dJNee1VCr8ilCLFwVtKMowHySTdWtkOw6hViPjgfsp2EKxgQEKBk7BIJzuhbpXqMp2HcOKgVKGzG4e65HRoa%2FaEJ91bEXgfPQnfgHmA%2FQRuvVxJ1JUFa5eKdznDILzKpkgLZoZFq9nxcgzQ3QESU3NeHAfapQBAMhF%2Bn4QwxTIXAx1zW8zt662lJpE%2FGiVbWjQp%2FtO&X-Amz-Signature=37ec3e7622031fbd0c625645f179c008699e54ea30d06be1fd2ed3daec402161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YPLGGK5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCltiMZczpfpWm3RDbERu4Vz1EWNbauxaaOlHcwGS5SwQIgOKgqBtMX2ykt3YmuLihm6elVRYadSUoj42ZktXGdoHQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPcjzkXU1%2BXqpQ3exCrcAwdjTbeLi6mUEH8vYkkYG%2BOhKm1mXIIGiZNxh0JDq7yO%2FhY%2B68Wlg7GnpZ1GBKEevus92u82Rum%2F87jz6WFia4unUeFB3eYszaqEF%2BqNiveLCd6ixxtqtWKv%2F9SUfvw1fYcOY92PJzvdEJ5Uh2MEyNTigY6AR3JAcKbyGDXZEFgyws6zqT7G9WlhOUzn38zACY1HibxTXcO6EkJjzJwA%2B%2FSaLk8wvJeqKeExhq%2Fgy2Go6865e2ElfWjSpu14mG5ieMpUIDRhrppULVZ64zwvx2LAyoczUEyryQ%2BLTMaS9QzmmM9XxLcIFeZT%2FaRPsXr2eHcOcG8m8S2Ziobz6Cbtyh4EE4GBbPFT8ehKQ1RWDTf3XnJgG7MyUYP34DzE37Fi5R7ql9eO8%2F%2B8ntwee0lQazRN7g0QliVbPBaTf%2BjKeIMCBn%2BVy0IWuh01kl8n1830QM7Cf3loF%2FAVeR9FhBv3Y3xtdxhK%2FjvU8ZvZv%2FxY%2FsrOnCYZrS3oBOaQFtuLegi0LPBsC%2BpmhU9BSGP6d0cMenG0Zw8w8atimUIqPS21l%2Frnoz2t07wKvcixcw9c7do1aI03fmEpOOGen89wLV3dz6nsy5R9XG%2FxhE2Wqz5Qt2TQt9h7HTaL8EaeECsVMIv%2B0skGOqUBeC1R5BxNWuqMkeNDyHXvZ3dJNee1VCr8ilCLFwVtKMowHySTdWtkOw6hViPjgfsp2EKxgQEKBk7BIJzuhbpXqMp2HcOKgVKGzG4e65HRoa%2FaEJ91bEXgfPQnfgHmA%2FQRuvVxJ1JUFa5eKdznDILzKpkgLZoZFq9nxcgzQ3QESU3NeHAfapQBAMhF%2Bn4QwxTIXAx1zW8zt662lJpE%2FGiVbWjQp%2FtO&X-Amz-Signature=b016908653738e8b139a3e406eb4fdd7beeaf7d7ab011930c732cfb481c64446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
