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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKAK6ROB%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2gtxmEA0Ud7zsgJwaDT1u8SgBQ9adjB4NNNeO82QrOQIge4%2FF6ZtisvmFHkPtuEv4Hdq%2FrJ%2FXOVnUwwV4Iq6PMrcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDI2nRQh5zt%2BlanNCKSrcA3WGdiCDTbttvLxiRHjN9TZJSzqs6Hhj5TghAjU6fIDf8jcYLFi2%2BaPeXVvSjmiX%2BxSFhc6mTJIsVDXMLv8v9SCLOWnkvAnYmWWM24qKmLbYSNNK4PXiO4F0%2FqQSPCbbTez11w5KJ2Vles6GorFq1lY7ybo8eRIZn2iKy8NdaB6rPF5fi3nxGina6byL0gO3pdufiue3PLfEIZof4JjjhLsMimlen161FRZR6RZrKasSUFwVGIWE5y5UGbxq%2FFi5muno42CDc2ptGFs2aiLX%2F%2F0a4reHVyOrD7yycsvLMhPJxWdfZWrfWcJ4oT19xrjDbw%2BIpoVSJIarN8jj0u%2F4yCIOyhXFfN%2FNBCh9ZXLubClrRoZjVZh3p9td1PbPQOy1XAZf54cDxvU0KqHobnfO9FF0DTUYJgX2nVXOdRAQsTIqVw8r%2BtOEzzo%2Fk9800AbKhsFa8m2HZBZ%2BY818EGqID3djkm0x%2Bc%2BPEqznzJJ%2BtCcWBr0WgH6OBp7gEDD%2Fkvzf5mAJf%2FBMhRqeawx%2FEFGBovDKKQBq6Dt%2B%2F7fD4iKWJpRJlixLV%2FxAS7eltUjp3jUSbx8BndSlt5luoP%2Brnh%2BD5vyqEMUrJhE2U8KNRNp6hccyV%2BS74SpW3rixTKv2MMWr08EGOqUBooHoVrpRMKHTnwBREOew%2Fma%2BhWAhKKgwIXeywWiVU9wEoAbRrYlxlkhyDY5HkaDdMds7zqnpPVsVod2eUKFpbu%2Bt8kRHLViWueIdbA3pWIMLkCBmO8W5QaBEUweY8qpXExFQetTt%2FQRvJmgF5kcMYLSEdbKgp22NjkJP8XdMoeVJesKK%2FLgM10soZbWQ7wheImNgMIZq0y8gaupA8kdChCgkAZJ5&X-Amz-Signature=e09bfb73aad29032ca2e4c40db33f20c960f5b617ece8f65f77e33c2fbcf25c3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKAK6ROB%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2gtxmEA0Ud7zsgJwaDT1u8SgBQ9adjB4NNNeO82QrOQIge4%2FF6ZtisvmFHkPtuEv4Hdq%2FrJ%2FXOVnUwwV4Iq6PMrcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDI2nRQh5zt%2BlanNCKSrcA3WGdiCDTbttvLxiRHjN9TZJSzqs6Hhj5TghAjU6fIDf8jcYLFi2%2BaPeXVvSjmiX%2BxSFhc6mTJIsVDXMLv8v9SCLOWnkvAnYmWWM24qKmLbYSNNK4PXiO4F0%2FqQSPCbbTez11w5KJ2Vles6GorFq1lY7ybo8eRIZn2iKy8NdaB6rPF5fi3nxGina6byL0gO3pdufiue3PLfEIZof4JjjhLsMimlen161FRZR6RZrKasSUFwVGIWE5y5UGbxq%2FFi5muno42CDc2ptGFs2aiLX%2F%2F0a4reHVyOrD7yycsvLMhPJxWdfZWrfWcJ4oT19xrjDbw%2BIpoVSJIarN8jj0u%2F4yCIOyhXFfN%2FNBCh9ZXLubClrRoZjVZh3p9td1PbPQOy1XAZf54cDxvU0KqHobnfO9FF0DTUYJgX2nVXOdRAQsTIqVw8r%2BtOEzzo%2Fk9800AbKhsFa8m2HZBZ%2BY818EGqID3djkm0x%2Bc%2BPEqznzJJ%2BtCcWBr0WgH6OBp7gEDD%2Fkvzf5mAJf%2FBMhRqeawx%2FEFGBovDKKQBq6Dt%2B%2F7fD4iKWJpRJlixLV%2FxAS7eltUjp3jUSbx8BndSlt5luoP%2Brnh%2BD5vyqEMUrJhE2U8KNRNp6hccyV%2BS74SpW3rixTKv2MMWr08EGOqUBooHoVrpRMKHTnwBREOew%2Fma%2BhWAhKKgwIXeywWiVU9wEoAbRrYlxlkhyDY5HkaDdMds7zqnpPVsVod2eUKFpbu%2Bt8kRHLViWueIdbA3pWIMLkCBmO8W5QaBEUweY8qpXExFQetTt%2FQRvJmgF5kcMYLSEdbKgp22NjkJP8XdMoeVJesKK%2FLgM10soZbWQ7wheImNgMIZq0y8gaupA8kdChCgkAZJ5&X-Amz-Signature=c8486e689de232e1d8552726d9716597c2b913ffa2ed950c51c9215ebc5b26ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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
