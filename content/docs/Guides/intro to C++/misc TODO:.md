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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKJSTEPW%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfN%2FVpJpnNIN9odr9juVZcnX%2Fu4xqPi%2BGgAfmhr39I0AiEA3Dz0%2Fb3FilGQcWZnpwhaJTH1mjzpyouTOeHEDkmpxxQqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIH9cJO%2B9N0EC%2FINNCrcA4pe7umm%2BU3%2Bx4k8nAYiImgIUfit8mPtEybXHyUOZhYGT7Qjr3DyPNHgDRaNToTH4vYf69%2BS1Q7uiHXh74sVZS4TE8NY5LTm2N%2F97amCOueeb7xwwSV8g2Ppi2fwW6LX6RSipn%2F4T0sIq1C2xhDhOSf9t0fY45EIuHydNDy0ittU7ATny8hsohfbVl0E5gKxy0DAuxPBHTJu1a19gWZ5CuKBM7VBT0D%2FMnuG8WE9AHrefC62YrgZqBUz8a8Oow6cseH1%2F8N9zDyFDdx3WjEee%2FdqRrSCyTNdn1LKbKbtDvLXicF50tFOqrLuabY8nTExvGsMxpFcH5pRf05KdoPSoAsgtmlVUTQ8pdzQKBosCgtyBUEsd8IfMC5PTj%2B5wta3z6dYaU8AyKjmemoOhT%2F3pTozmzFH8GyM0uUddGohTlhwsbsQp3SHFAZlSyZkyBr8gJwWnQWecyGwJDtKVe6mwy1UfcUJf7UBRKe5AU7IBJKVMKg8Rw%2F8Q7BXAT3ARV9EcxQO7yZfLn49N4i2zj4BqwajekxDluSLGpj4DccrEgEvYmCZib0QYd9AgqhhAi26JM6zzX8cYyRytnl1uci%2B6kdbumoNtYN1YKOeB1U%2FhAa3cepS8AhIMCMj74fnML6HkMMGOqUBMxOFx4FVqn9OwOzuQunUFuQl%2BC4FdNlkHkUiuOKSW22FOCSaLXvv6qAk5%2FAZWXV5relMEae0A8u22uCSjcBxOwoddRQXwHa5Pzkx09MJJ2e%2B%2FZTwigVoGPFo%2FqH1zT21wXgpkuv0MHdgd44L0eGtz0I1c%2FXNLbSH7UpqsMD6ppjQDBhFeNIpxU3j%2Btq1ZwxlOF8%2BrKPiwPqLbWF644MZ7HiZ%2BVxg&X-Amz-Signature=c72daea83bdf3474069ae822900ffa3f7eb5abe4f005107c6ed392845fd1d145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKJSTEPW%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfN%2FVpJpnNIN9odr9juVZcnX%2Fu4xqPi%2BGgAfmhr39I0AiEA3Dz0%2Fb3FilGQcWZnpwhaJTH1mjzpyouTOeHEDkmpxxQqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIH9cJO%2B9N0EC%2FINNCrcA4pe7umm%2BU3%2Bx4k8nAYiImgIUfit8mPtEybXHyUOZhYGT7Qjr3DyPNHgDRaNToTH4vYf69%2BS1Q7uiHXh74sVZS4TE8NY5LTm2N%2F97amCOueeb7xwwSV8g2Ppi2fwW6LX6RSipn%2F4T0sIq1C2xhDhOSf9t0fY45EIuHydNDy0ittU7ATny8hsohfbVl0E5gKxy0DAuxPBHTJu1a19gWZ5CuKBM7VBT0D%2FMnuG8WE9AHrefC62YrgZqBUz8a8Oow6cseH1%2F8N9zDyFDdx3WjEee%2FdqRrSCyTNdn1LKbKbtDvLXicF50tFOqrLuabY8nTExvGsMxpFcH5pRf05KdoPSoAsgtmlVUTQ8pdzQKBosCgtyBUEsd8IfMC5PTj%2B5wta3z6dYaU8AyKjmemoOhT%2F3pTozmzFH8GyM0uUddGohTlhwsbsQp3SHFAZlSyZkyBr8gJwWnQWecyGwJDtKVe6mwy1UfcUJf7UBRKe5AU7IBJKVMKg8Rw%2F8Q7BXAT3ARV9EcxQO7yZfLn49N4i2zj4BqwajekxDluSLGpj4DccrEgEvYmCZib0QYd9AgqhhAi26JM6zzX8cYyRytnl1uci%2B6kdbumoNtYN1YKOeB1U%2FhAa3cepS8AhIMCMj74fnML6HkMMGOqUBMxOFx4FVqn9OwOzuQunUFuQl%2BC4FdNlkHkUiuOKSW22FOCSaLXvv6qAk5%2FAZWXV5relMEae0A8u22uCSjcBxOwoddRQXwHa5Pzkx09MJJ2e%2B%2FZTwigVoGPFo%2FqH1zT21wXgpkuv0MHdgd44L0eGtz0I1c%2FXNLbSH7UpqsMD6ppjQDBhFeNIpxU3j%2Btq1ZwxlOF8%2BrKPiwPqLbWF644MZ7HiZ%2BVxg&X-Amz-Signature=497fba9df1c7accadddf77b51156dd23f984071f6f7b5b3c38487bb34b2d55ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
