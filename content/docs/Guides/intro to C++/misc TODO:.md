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

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6ES6CKJ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlxG%2Bf6BHLRYajRp7FeGPuqeCO5VpSo%2FvuX0in1p2WgAiBJdmKJ3hhoZSlhw23jVsfH%2FQ%2BkGG3x0bmh6BZ6DpsY%2BSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgx8PGoIicSNnhKVOKtwD7KCj84Z%2BLTZ0r%2Fc%2FYbGthNfYiFSqQlANroFfv%2FbYxP5cRJ690LzU0wj2R%2ByCrKIjCmtfs3TrZYJiyNnKJvOvdwet0TAfITj0lKKFrsRcNFYfeRh9y0jNwTgtCC6ADOgd7jAPB0uF9iI8pxpjo4WENGEaaSzNOcFq%2B3pA5j4fH5nEn5ra%2Be11Eac6%2B0QGEd4jhxq9mCdE4UBC1Im830BGNXQQMnPR%2Fh1jjn3no2kgsrpmlIKF09NV5RRjfAmiSZjp2%2FXD2cvvEoKoipiNZ%2FZ09AkfVdqyb4e3fS7mvSg%2BGqszAKdNhJuKKrvGAYMhVBVhXpzvD2B4DbE7orzi3%2BrdVs1GOFdHSRcZrA2%2BOI85JXhUd3IN51OeXQTZAqUYUPIlBxWU4RtF2hZUQl2OlfSZd4xM%2FzO1HFJPYv0pmNPPU0b9eje8gxpqXWyBCzhiAWRCkrBsBd1eIyIDuaEv3diu6FiV%2F5nExOmfokzYcs24knwdG2dAEmLDrCc20PORahZpLGExb0jExiXF1AHsIveljwwNhnaqu6mZiinSlaoAT5uACI6wwX7cpjZiGPYF%2FuI2ps2tcMR71iEgvm6S5h0hrXpLoPGbsPmiRIYtEKD9gbiRVMmYwo7fh1Yl13kwwsmuvQY6pgE5liEV27atLhVfF3woXVOXg22B2z%2FnxJxKuJ9guE5JLu2lnPyfPgn3LrNTQZQXAABZQPzjQRWuqQ%2FnW1fKSV6Afc062IfvNQIc9fKyQh8stAFOvBgWKl5rKhuPMBr9Yd23T3%2FketHQe0uZ%2FyvhVl1HDP5fxM8YIVRk3UgcKkRZYaxBycvQ9CWZ8DXp4p%2F%2FR5XJQVkzi8cwN38jOZyGOCS%2FAeI%2BLDFh&X-Amz-Signature=8d09c6fb7dba020cb4cf7e4b5b6500ce987d5cec22e744a38e4667e7d56f46d0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6ES6CKJ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlxG%2Bf6BHLRYajRp7FeGPuqeCO5VpSo%2FvuX0in1p2WgAiBJdmKJ3hhoZSlhw23jVsfH%2FQ%2BkGG3x0bmh6BZ6DpsY%2BSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgx8PGoIicSNnhKVOKtwD7KCj84Z%2BLTZ0r%2Fc%2FYbGthNfYiFSqQlANroFfv%2FbYxP5cRJ690LzU0wj2R%2ByCrKIjCmtfs3TrZYJiyNnKJvOvdwet0TAfITj0lKKFrsRcNFYfeRh9y0jNwTgtCC6ADOgd7jAPB0uF9iI8pxpjo4WENGEaaSzNOcFq%2B3pA5j4fH5nEn5ra%2Be11Eac6%2B0QGEd4jhxq9mCdE4UBC1Im830BGNXQQMnPR%2Fh1jjn3no2kgsrpmlIKF09NV5RRjfAmiSZjp2%2FXD2cvvEoKoipiNZ%2FZ09AkfVdqyb4e3fS7mvSg%2BGqszAKdNhJuKKrvGAYMhVBVhXpzvD2B4DbE7orzi3%2BrdVs1GOFdHSRcZrA2%2BOI85JXhUd3IN51OeXQTZAqUYUPIlBxWU4RtF2hZUQl2OlfSZd4xM%2FzO1HFJPYv0pmNPPU0b9eje8gxpqXWyBCzhiAWRCkrBsBd1eIyIDuaEv3diu6FiV%2F5nExOmfokzYcs24knwdG2dAEmLDrCc20PORahZpLGExb0jExiXF1AHsIveljwwNhnaqu6mZiinSlaoAT5uACI6wwX7cpjZiGPYF%2FuI2ps2tcMR71iEgvm6S5h0hrXpLoPGbsPmiRIYtEKD9gbiRVMmYwo7fh1Yl13kwwsmuvQY6pgE5liEV27atLhVfF3woXVOXg22B2z%2FnxJxKuJ9guE5JLu2lnPyfPgn3LrNTQZQXAABZQPzjQRWuqQ%2FnW1fKSV6Afc062IfvNQIc9fKyQh8stAFOvBgWKl5rKhuPMBr9Yd23T3%2FketHQe0uZ%2FyvhVl1HDP5fxM8YIVRk3UgcKkRZYaxBycvQ9CWZ8DXp4p%2F%2FR5XJQVkzi8cwN38jOZyGOCS%2FAeI%2BLDFh&X-Amz-Signature=e5e6f6b077e7620fad2ca17091614392bfd33b05cc45a40114dbf2337f9ef725&X-Amz-SignedHeaders=host&x-id=GetObject)

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
