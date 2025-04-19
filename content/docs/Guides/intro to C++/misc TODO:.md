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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZRY5AU3%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T090744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDakSyHV8uMKmMUWhCLIJKd4IalixhH3O%2Bjbqyqi25JLAIgQna%2BtE435%2B7TzQCtu8c5f388Grqx3T6MZXMhTEtYg8sqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB75cOwHXBSuUnWh8SrcA8z7BrCYKvgsntzpL%2BKoPmUU4%2FKJpf3J8V1wgwu1t0FyXIBrY5nFI8dhV6Cjh8%2B9kG3D1eDdpCBPJYp6mpPEuKP8p%2FK8clm1mNvL9Vs2ObttR3ihBH8K5Z8HPo6uAnesl4wOgzRnOoedrMH9sDWUfSwO1res0hn26RgmG4r5dzITSrnwl4ilz5RZsC2IAeThfR1M9qkeC33k5XGmODnqxHBD4RHkSFB6pEWp3dts4Qe%2BjhCN1GgscVe4zisS9TpC89wOIQAwM0CUfNkAf2fXsd2MIl7dq0jbRDnQkdmf3aVP4RzImJbNu5GA1%2BpO9PFbkfVs%2BoiVvacSmmQa5n%2FimRhSGtJFK1l5WZLBNbI7b44QmfcJOI7lQWeOEJ65%2B%2B6wXYunLIJrgdAXJ2Wm7u0rGqAMC6DH513NCA7BxOwm9yEGDgW6g9pRsntkYM%2FkKMFAxEA32ZLB8%2FrfVYB7G%2B38Xwpuz8VWbLGGwkitSjh8FcOTnVg8LfbXx2kL4TVCrCzHAqDuLABrbdc52vI9UtoxwCRD%2F8Kkp9j3%2FBt5rlSI2j817RU7oPvtmTYU9tHFw6nS3zy7KZkHOKJ%2BczjwOvb%2FQyYLGfBOchn5rOEEYAICpl%2FQrbibFuk8jNX0C2GxMP%2F8jMAGOqUB%2FUSOyxCk6%2FnOaVp8Id%2F%2BGv05wsrcbmXUFadTHJiPl2mLKKmyx2LrIsgeWiYTZV2CGvZg8TcajxNJMnsZaacVGb1hLq%2FUxC3HJ15A1udJJaHvMdWm3IAnRSfACKGw8K0c2F6PLI21abddehGVD5VCXzJpiJ3xx909GnB6B%2FFdyQ4mqRJ0a7G8GPuekAYeoGmEzQ342C5PfAAoUv76jv2iB6l%2B0UMF&X-Amz-Signature=a0369ed7375c89124dc190ac7045341ace9c6a04e324f8ef35ab0cf6571a5b75&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZRY5AU3%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T090744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDakSyHV8uMKmMUWhCLIJKd4IalixhH3O%2Bjbqyqi25JLAIgQna%2BtE435%2B7TzQCtu8c5f388Grqx3T6MZXMhTEtYg8sqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB75cOwHXBSuUnWh8SrcA8z7BrCYKvgsntzpL%2BKoPmUU4%2FKJpf3J8V1wgwu1t0FyXIBrY5nFI8dhV6Cjh8%2B9kG3D1eDdpCBPJYp6mpPEuKP8p%2FK8clm1mNvL9Vs2ObttR3ihBH8K5Z8HPo6uAnesl4wOgzRnOoedrMH9sDWUfSwO1res0hn26RgmG4r5dzITSrnwl4ilz5RZsC2IAeThfR1M9qkeC33k5XGmODnqxHBD4RHkSFB6pEWp3dts4Qe%2BjhCN1GgscVe4zisS9TpC89wOIQAwM0CUfNkAf2fXsd2MIl7dq0jbRDnQkdmf3aVP4RzImJbNu5GA1%2BpO9PFbkfVs%2BoiVvacSmmQa5n%2FimRhSGtJFK1l5WZLBNbI7b44QmfcJOI7lQWeOEJ65%2B%2B6wXYunLIJrgdAXJ2Wm7u0rGqAMC6DH513NCA7BxOwm9yEGDgW6g9pRsntkYM%2FkKMFAxEA32ZLB8%2FrfVYB7G%2B38Xwpuz8VWbLGGwkitSjh8FcOTnVg8LfbXx2kL4TVCrCzHAqDuLABrbdc52vI9UtoxwCRD%2F8Kkp9j3%2FBt5rlSI2j817RU7oPvtmTYU9tHFw6nS3zy7KZkHOKJ%2BczjwOvb%2FQyYLGfBOchn5rOEEYAICpl%2FQrbibFuk8jNX0C2GxMP%2F8jMAGOqUB%2FUSOyxCk6%2FnOaVp8Id%2F%2BGv05wsrcbmXUFadTHJiPl2mLKKmyx2LrIsgeWiYTZV2CGvZg8TcajxNJMnsZaacVGb1hLq%2FUxC3HJ15A1udJJaHvMdWm3IAnRSfACKGw8K0c2F6PLI21abddehGVD5VCXzJpiJ3xx909GnB6B%2FFdyQ4mqRJ0a7G8GPuekAYeoGmEzQ342C5PfAAoUv76jv2iB6l%2B0UMF&X-Amz-Signature=f3dacdfa65f31fb8c7eadb737fe67e70113586219cc5a11c93bc1b0d9e877a7f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
