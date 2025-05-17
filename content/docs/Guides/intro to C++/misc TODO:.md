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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AGUOVOM%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuazcvOo6UbEggxHWjGCt9DhOo7b6KNRjbVAbo3Dvg0wIgOR0R%2FNYL5vkW4JIeO0iLDNoL9Y940ujo9vGSBuTJoZMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJKit9Mmdj74vvmAUSrcA19QjMG2nz4bnEtYfXudYH7GO5Wb%2FmZu6a2zU%2FovVO5TvoWd7K6Z1pRrvbAlhqWnDUbFSMdLmSh9tG%2BaYvHM8s%2BFhep4%2BMc%2FhwObR0iLz6bCL0MF9VSMOj4vpahME8FHtV9co%2BZZePEwBcOGPcLk13LjgiF48gX9xqBoem9cA%2BYjBwiNRFB6oqYrotgHUv5ku3ocXK231BrxCs60E849ti8k3fxTcy2g9fkLQjS4D6%2FqxuXGxc%2Fs6nLUGLwRHFQOfl67BViEiuKnVygzt%2F7Js8w0D%2BuSDjQJKffbnSN%2FBercDShcSB8pg2EEKhLrk1MzE4x1FyGabmI9dllqAKDGk0Qm1FNHMpdVzg4vXl8hjp3ySiql20JYKnNGovgZfnyKJsGzFLCaYVi0QuFTyPqCZoXCLvFkw8AP%2B0HWFys%2FBSoZU%2B2weERE3mMltMJdAMc0xVRkr7bM0NI2Jsd0d%2FKcGkHrANDx4siS2zTWpbRdYgL4tGurIzPiiDLFHGAd2Quzi1cP3azO4exsukTgA4nMreYAtXelHeQQPOh2qqpuFKJdtM4gkoYlb61%2F9bzQDx09ROWIXu2iW93jUTqu1tfqnYy%2BQRHyf8AHGMjIk%2FsBf6UBoXIN60Qcb2hJPKyfMNC8ocEGOqUBJl2iKAM%2Baw%2FjH5DjQFg24b62WnLcNkR1OfbycnTOCds7FvZkzXtElpSvFr1MpJmlknE1xqs2B4KsOnf%2BMe%2FUyzLg6J3aBJ2jnlpkYmrWcsOsI5ATklAHmMRM7PvgUWV%2FPsDLOS6bMiBoALfi2GMf37hJ1YL3wQoU6cztnZ9AJcdQRGQBCq8KA9gh67uO6biI4ucY%2BzBczm4u5Kn6VBGl1OodawBd&X-Amz-Signature=378455eec86d9fa2ad3f578985052d538b02018e8b71df16438f01eb186e24da&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AGUOVOM%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuazcvOo6UbEggxHWjGCt9DhOo7b6KNRjbVAbo3Dvg0wIgOR0R%2FNYL5vkW4JIeO0iLDNoL9Y940ujo9vGSBuTJoZMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJKit9Mmdj74vvmAUSrcA19QjMG2nz4bnEtYfXudYH7GO5Wb%2FmZu6a2zU%2FovVO5TvoWd7K6Z1pRrvbAlhqWnDUbFSMdLmSh9tG%2BaYvHM8s%2BFhep4%2BMc%2FhwObR0iLz6bCL0MF9VSMOj4vpahME8FHtV9co%2BZZePEwBcOGPcLk13LjgiF48gX9xqBoem9cA%2BYjBwiNRFB6oqYrotgHUv5ku3ocXK231BrxCs60E849ti8k3fxTcy2g9fkLQjS4D6%2FqxuXGxc%2Fs6nLUGLwRHFQOfl67BViEiuKnVygzt%2F7Js8w0D%2BuSDjQJKffbnSN%2FBercDShcSB8pg2EEKhLrk1MzE4x1FyGabmI9dllqAKDGk0Qm1FNHMpdVzg4vXl8hjp3ySiql20JYKnNGovgZfnyKJsGzFLCaYVi0QuFTyPqCZoXCLvFkw8AP%2B0HWFys%2FBSoZU%2B2weERE3mMltMJdAMc0xVRkr7bM0NI2Jsd0d%2FKcGkHrANDx4siS2zTWpbRdYgL4tGurIzPiiDLFHGAd2Quzi1cP3azO4exsukTgA4nMreYAtXelHeQQPOh2qqpuFKJdtM4gkoYlb61%2F9bzQDx09ROWIXu2iW93jUTqu1tfqnYy%2BQRHyf8AHGMjIk%2FsBf6UBoXIN60Qcb2hJPKyfMNC8ocEGOqUBJl2iKAM%2Baw%2FjH5DjQFg24b62WnLcNkR1OfbycnTOCds7FvZkzXtElpSvFr1MpJmlknE1xqs2B4KsOnf%2BMe%2FUyzLg6J3aBJ2jnlpkYmrWcsOsI5ATklAHmMRM7PvgUWV%2FPsDLOS6bMiBoALfi2GMf37hJ1YL3wQoU6cztnZ9AJcdQRGQBCq8KA9gh67uO6biI4ucY%2BzBczm4u5Kn6VBGl1OodawBd&X-Amz-Signature=12261acb403449b18fe3ef83f8a39b87aafc85a1cd2fb23ab99cf01ab6f49e83&X-Amz-SignedHeaders=host&x-id=GetObject)

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
