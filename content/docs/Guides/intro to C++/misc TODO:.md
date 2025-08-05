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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7P76M4D%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDgFU%2BQ1AbrSI0rzYPkynyqyeGbBOp7T117Hf1e1ZoV6AIhAP8Cm6HBI%2Fous1PDZ2cc6d6nYOs%2FV4GCKT97mAOejoexKv8DCFgQABoMNjM3NDIzMTgzODA1Igz%2B2m5JlYMBH7nyKH0q3AOcy3vMxfSNb9%2FmiVUYj5c9wxgiYR%2FINQ0hdztW9ZHXNCiWDvUPKzWTH8UV1znmh5iXBL2Lczqt5cM%2FJuyhNsxNjdT0sys6BAHgyoL9Daue%2BiGBVNgPw6%2FADB3XeSAa6814nVvElq1%2B5xzajxj5O71%2BJFXt55dINl527veixbbrNGHMeixTGyGQCvhzFCt4LKMXeDb76k6lRwrgnWW1pyUDhoHU22S1oGCxBq9PGO%2FgI7ouMjFRs%2Fz%2BZmgwiooCUHitqSfHVnF%2BqS%2BHsHauKpjKe8vn4VjhVpYvF5b3UPu5Dsz8PBK4FdIoHwy%2BR2ZAZ9C7CfkNm86L1sACaM23NyglNGcuEDznU8DnG8gi5ssZYjuM0mmaCRfXw6RiKyH%2BtDkSRaY6kJ4Vmm0dk1xjjvlLKJy%2BIh9THmrHhoJv%2FeoZePgeqRrcUvjwPYjjXmyqFnfFyqGfOs%2BOmVdExkRdoMP4sXNPVQkU0VVH1iYb%2BRXYKbc3hRD1MvcEL1S%2BW8Oy9yOU2o7ol3C1lo6bwdJOApCmhv%2FcuBLaRGRmReBatq9k5d%2F6EtnFEMr9s4LB9WYuTsX37nO1nNZUKYgnhlFFncUP61JsDJLcLhk9yZJ%2B5CwME9G1cR3IH7h4FjSzTTDV2sbEBjqkATCCD5z74S0bW2XjevfycMV1%2F7MDtwqamjb80meK5AWlLvY6KP1%2FF5%2BQ7KH%2FnQwAsliUCj2q4sp5wRFMCqFZ5J3LjeYd%2BCVddWj7aVbu3snjPTf7ReSBWes3UlFsOB%2F6TkYjR95D4ycykninji9C8NY74xI3jjaPCCoQpb8U8aCcG4rgdZ83jBiGaH6F9uc7MWssl7QTE5JNNLAi8ku9x0om%2FcJC&X-Amz-Signature=467556e575ef7d078f2a4cb1ca8d60b4c6b4612829fcab9308edcd4370f72ce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7P76M4D%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDgFU%2BQ1AbrSI0rzYPkynyqyeGbBOp7T117Hf1e1ZoV6AIhAP8Cm6HBI%2Fous1PDZ2cc6d6nYOs%2FV4GCKT97mAOejoexKv8DCFgQABoMNjM3NDIzMTgzODA1Igz%2B2m5JlYMBH7nyKH0q3AOcy3vMxfSNb9%2FmiVUYj5c9wxgiYR%2FINQ0hdztW9ZHXNCiWDvUPKzWTH8UV1znmh5iXBL2Lczqt5cM%2FJuyhNsxNjdT0sys6BAHgyoL9Daue%2BiGBVNgPw6%2FADB3XeSAa6814nVvElq1%2B5xzajxj5O71%2BJFXt55dINl527veixbbrNGHMeixTGyGQCvhzFCt4LKMXeDb76k6lRwrgnWW1pyUDhoHU22S1oGCxBq9PGO%2FgI7ouMjFRs%2Fz%2BZmgwiooCUHitqSfHVnF%2BqS%2BHsHauKpjKe8vn4VjhVpYvF5b3UPu5Dsz8PBK4FdIoHwy%2BR2ZAZ9C7CfkNm86L1sACaM23NyglNGcuEDznU8DnG8gi5ssZYjuM0mmaCRfXw6RiKyH%2BtDkSRaY6kJ4Vmm0dk1xjjvlLKJy%2BIh9THmrHhoJv%2FeoZePgeqRrcUvjwPYjjXmyqFnfFyqGfOs%2BOmVdExkRdoMP4sXNPVQkU0VVH1iYb%2BRXYKbc3hRD1MvcEL1S%2BW8Oy9yOU2o7ol3C1lo6bwdJOApCmhv%2FcuBLaRGRmReBatq9k5d%2F6EtnFEMr9s4LB9WYuTsX37nO1nNZUKYgnhlFFncUP61JsDJLcLhk9yZJ%2B5CwME9G1cR3IH7h4FjSzTTDV2sbEBjqkATCCD5z74S0bW2XjevfycMV1%2F7MDtwqamjb80meK5AWlLvY6KP1%2FF5%2BQ7KH%2FnQwAsliUCj2q4sp5wRFMCqFZ5J3LjeYd%2BCVddWj7aVbu3snjPTf7ReSBWes3UlFsOB%2F6TkYjR95D4ycykninji9C8NY74xI3jjaPCCoQpb8U8aCcG4rgdZ83jBiGaH6F9uc7MWssl7QTE5JNNLAi8ku9x0om%2FcJC&X-Amz-Signature=a28275fd8a991f34cb51de665895d55cc8f71d8eb4b2e2917fd56bd7b6e48c64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
